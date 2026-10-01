import { projectStorage } from './project-storage';
import { parseLearning } from './learning';
import {
  mainProgress,
  nodeProgress,
  type ProgressState,
} from '../data/learning-progress';
import { lessons } from '../data/learning.ts';
import {
  nextMainStep,
  optionalSteps,
  routeNodes,
  stepUrl,
} from '../data/nodes.ts';

const stepTitle = (id: string, en: boolean) => {
  const lesson = lessons.find((l) => l.id === id);
  return lesson ? (en ? lesson.title[1] : lesson.title[0]) : id;
};

/**
 * 首屏定位。
 * 1) 还没做完：直接指向本节点第一个未核对的动作，不用自己找。
 * 2) 跳步进入：说明本节点之前还有未核对的动作，并给出真正的下一步入口。
 * 侧栏 18 个节点全部可点，零基础用户很容易直接点进最后一个节点，
 * 页面此前没有任何提示，只会照着做一堆无效工作。
 */
function renderStartHere(state: ProgressState, en: boolean) {
  const root = document.querySelector<HTMLElement>('[data-node]');
  const slot = document.querySelector<HTMLElement>('[data-start-here]');
  if (!root || !slot) return;
  const nodeId = root.dataset.node!;
  const locale = (root.dataset.locale ?? 'zh-cn') as 'zh-cn' | 'en';
  const node = routeNodes.find((n) => n.id === nodeId);
  if (!node) return;
  const pending = node.stepIds.filter(
    (id) => !optionalSteps[id] && !state.completed.includes(id),
  );
  const actualNext = nextMainStep(state.completed);
  const outOfTurn =
    !!actualNext &&
    actualNext !== pending[0] &&
    !node.stepIds.includes(actualNext);

  const link = (step: string, text: string, cls = '') =>
    `<a class="${cls}" href="${stepUrl(locale, step, nodeId)}">${text} →</a>`;

  if (!pending.length) {
    slot.innerHTML = en
      ? `<strong>All required actions here are checked.</strong>${link(
          'maintain',
          en ? 'Back to the roadmap' : '回到完整路线图',
        )}`
      : `<strong>本节点的必做动作已全部核对。</strong>${link(
          'maintain',
          '回到完整路线图',
        )}`;
    return;
  }

  const first = link(
    pending[0],
    en
      ? `Start here: ${stepTitle(pending[0], en)}`
      : `从这里开始：${stepTitle(pending[0], en)}`,
  );
  const note = outOfTurn
    ? `<p class="start-out-of-turn">${
        en
          ? `You have not checked everything before this milestone yet. The next unfinished action on the main route is “${stepTitle(
              actualNext!,
              en,
            )}”.`
          : `你还没有核对完这个节点之前的动作。主线上当前待做的动作是「${stepTitle(
              actualNext!,
              en,
            )}」。`
      } ${link(actualNext!, en ? 'Go there' : '去那一步')}</p>`
    : '';
  slot.innerHTML = `<strong>${
    en ? 'Where to continue' : '接着这里做'
  }</strong>${first}${note}`;
}

export function initProgress() {
  const en = document.documentElement.lang === 'en';
  const render = () => {
    let state;
    try {
      state = parseLearning(projectStorage.getItem('vibe-guide-learning-v1'));
    } catch {
      return;
    }
    document.querySelectorAll<HTMLElement>('[data-progress]').forEach((el) => {
      const id = el.dataset.progress!;
      const done = state.completed.includes(id);
      // 「不适用」不是核对结论，徽标必须如实区分，不能显示成已核对通过。
      const waived = done && state.checks?.[id]?.verdict === 'not-applicable';
      el.textContent = waived
        ? en
          ? 'Not applicable'
          : '不适用'
        : done
          ? en
            ? 'Checked ✓'
            : '已核对 ✓'
          : en
            ? 'To check'
            : '待核对';
      el.dataset.done = String(done);
      el.dataset.waived = String(waived);
    });
    document
      .querySelectorAll<HTMLElement>('[data-node-progress]')
      .forEach((el) => {
        const p = nodeProgress(
          el.dataset.nodeProgress!,
          state.completed,
          state.checks,
        );
        el.textContent = p.waived
          ? `${p.done}/${p.total}（${p.waived} 项不适用）`
          : `${p.done}/${p.total}`;
        el.setAttribute(
          'aria-label',
          en
            ? `${p.done} of ${p.total} main actions checked${p.waived ? `, ${p.waived} not applicable` : ''}`
            : `主线动作已核对 ${p.done}/${p.total}${p.waived ? `，${p.waived} 项不适用` : ''}`,
        );
      });
    const p = mainProgress(state.completed, state.checks);
    document
      .querySelectorAll<HTMLElement>('[data-main-progress]')
      .forEach(
        (el) =>
          (el.textContent = en
            ? `${p.done} / ${p.total} main actions checked${p.waived ? ` · ${p.waived} not applicable` : ''}`
            : `主线已核对 ${p.done} / ${p.total} 个动作${p.waived ? ` · ${p.waived} 项不适用` : ''}`),
      );
    renderStartHere(state, en);
    document
      .querySelectorAll<HTMLElement>('[data-undo-complete]')
      .forEach(
        (el) =>
          (el.hidden = !state.completed.includes(el.dataset.undoComplete!)),
      );
  };
  render();
  window.addEventListener('vibe-learning-changed', render);
  window.addEventListener('storage', render);
  window.addEventListener('pageshow', render);
}
