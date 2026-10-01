import {
  readConfirmed,
  projectStorage as localStorage,
} from './project-storage.ts';
import { ideaTemplate as ideaTemplates } from '../data/idea-template.ts';
import { lessons } from '../data/learning.ts';
import {
  nextMainStep,
  repairStepIds,
  repairEntryNodeIds,
  repairOriginFor,
  optionalSteps,
} from '../data/nodes.ts';
import {
  resumeStep,
  canComplete,
  checkedSteps,
} from '../data/learning-progress.ts';
const key = 'vibe-guide-learning-v1';
/** 主动进入的修复分支。from 记录从哪个节点进来的，修完好才知道回到哪里。 */
type ActiveBranch = { step: string; from: string };
type State = {
  version: 1;
  idea: string;
  later: string;
  completed: string[];
  current: string;
  activeBranch?: ActiveBranch;
  ideaConfirmed?: string;
  lastViewed?: string;
  checks?: Record<
    string,
    { verdict: string; version: string; date: string; note: string }
  >;
};
export function parseLearning(raw: string | null): State {
  if (!raw)
    return { version: 1, idea: '', later: '', completed: [], current: 'idea' };
  const s = JSON.parse(raw);
  if (
    s.version !== 1 ||
    typeof s.idea !== 'string' ||
    typeof s.later !== 'string' ||
    !Array.isArray(s.completed) ||
    !s.completed.every((x: unknown) => typeof x === 'string') ||
    typeof s.current !== 'string'
  )
    throw new Error('Invalid saved draft');
  if (s.ideaConfirmed !== undefined && typeof s.ideaConfirmed !== 'string')
    throw Error('Invalid confirmed idea');
  if (
    s.checks !== undefined &&
    (!s.checks ||
      typeof s.checks !== 'object' ||
      Object.values(s.checks).some(
        (c: unknown) =>
          !c ||
          typeof c !== 'object' ||
          !('version' in c && 'date' in c && 'note' in c && 'verdict' in c) ||
          typeof c.version !== 'string' ||
          typeof c.date !== 'string' ||
          typeof c.note !== 'string' ||
          typeof c.verdict !== 'string' ||
          !['passed', 'failed', 'not-tested', 'not-applicable'].includes(
            c.verdict,
          ),
      ))
  )
    throw Error('Invalid check record');
  // 旧版本把 activeBranch 存成裸字符串（只有步骤，没有来源节点）。
  // 迁移为 { step, from }，来源缺失时按第一个修复入口节点处理，与旧版行为一致。
  const branch = s.activeBranch as unknown;
  if (branch === undefined) {
    delete s.activeBranch;
  } else if (typeof branch === 'string') {
    if (repairStepIds.includes(branch))
      s.activeBranch = { step: branch, from: repairEntryNodeIds[0] };
    else delete s.activeBranch;
  } else if (
    branch &&
    typeof branch === 'object' &&
    'step' in branch &&
    'from' in branch &&
    typeof (branch as ActiveBranch).step === 'string' &&
    typeof (branch as ActiveBranch).from === 'string' &&
    repairStepIds.includes((branch as ActiveBranch).step) &&
    repairEntryNodeIds.includes((branch as ActiveBranch).from)
  ) {
    s.activeBranch = branch as ActiveBranch;
  } else {
    delete s.activeBranch;
  }
  return {
    ...s,
    completed: s.completed.filter((id: string) =>
      lessons.some((l) => l.id === id),
    ),
    current:
      s.current === 'goal'
        ? 'description'
        : lessons.some((l) => l.id === s.current)
          ? s.current
          : 'idea',
  };
}
export function initLearning() {
  const root = document.querySelector<HTMLElement>('[data-learning]');
  if (!root) return;
  const en = root.dataset.locale === 'en';
  const status = root.querySelector<HTMLElement>('[data-learning-status]')!;
  let state: State;
  let writable = true;
  try {
    state = parseLearning(localStorage.getItem(key));
  } catch {
    state = parseLearning(null);
    writable = false;
    status.textContent = en
      ? 'Saved data could not be read. It has not been overwritten. Copy your backup text from the project panel below before leaving.'
      : '无法读取已保存的资料，原内容未覆盖。离开前请在下方“我的项目材料与备份”里复制备份文本。';
  }
  const save = () => {
    if (!writable) return false;
    try {
      localStorage.setItem(key, JSON.stringify(state));
      status.textContent = en
        ? 'Saved in this browser.'
        : '已保存到当前浏览器。';
      window.dispatchEvent(new Event('vibe-learning-changed'));
      return true;
    } catch {
      status.textContent = en
        ? 'Saving failed. Copy your backup text from the project panel below before leaving.'
        : '保存失败，离开前请在下方“我的项目材料与备份”里复制备份文本。';
      return false;
    }
  };
  const remember = (id: string | undefined) => {
    if (id && lessons.some((l) => l.id === id)) {
      state.lastViewed = id;
      root.dataset.viewedStep = id;
      if (writable) save();
    }
  };
  const openStep = (id: string, scroll = false) => {
    const step = document.getElementById(id);
    if (
      !(step instanceof HTMLDetailsElement) ||
      !step.matches('[data-node-step]')
    )
      return;
    root
      .querySelectorAll<HTMLDetailsElement>('[data-node-step]')
      .forEach((el) => {
        if (el !== step) el.open = false;
      });
    step.open = true;
    remember(id);
    if (scroll) step.scrollIntoView({ block: 'start' });
  };
  const fromHash = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    if (id) openStep(id, true);
  };
  if (location.hash) {
    try {
      fromHash();
    } catch {
      /* Ignore malformed hash links; keep the current step visible. */
    }
  } else {
    const own = [
      ...root.querySelectorAll<HTMLDetailsElement>(
        '.node-steps > [data-node-step]',
      ),
    ];
    const first =
      own.find(
        (el) =>
          !optionalSteps[el.dataset.nodeStep!] &&
          !state.completed.includes(el.dataset.nodeStep!),
      ) ?? own[0];
    own.forEach((el) => (el.open = el === first));
    if (first) remember(first.dataset.nodeStep);
  }
  window.addEventListener('hashchange', () => {
    try {
      fromHash();
    } catch {
      /* Ignore malformed hash links; keep the current step visible. */
    }
  });
  root.querySelectorAll<HTMLDetailsElement>('[data-node-step]').forEach((el) =>
    el.addEventListener('toggle', () => {
      if (el.open) remember(el.dataset.nodeStep);
    }),
  );
  root
    .querySelectorAll<HTMLElement>('[data-follow-step]:not([data-complete])')
    .forEach((el) =>
      el.addEventListener('click', (event) => {
        const id = el.dataset.followStep!;
        if (repairStepIds.includes(id)) {
          const old = { ...state };
          // 当前页面所属节点即修复入口来源；页面未声明时按第一个入口节点处理。
          state.activeBranch = {
            step: id,
            from: repairOriginFor(root.dataset.node),
          };
          state.current = id;
          if (!save()) {
            state = old;
            event.preventDefault();
          }
        }
      }),
    );
  const idea = root.querySelector<HTMLTextAreaElement>('[name=idea]');
  const later = root.querySelector<HTMLTextAreaElement>('[name=later]');
  const ideaTemplate = ideaTemplates[en ? 1 : 0];
  if (idea) idea.value = state.idea || ideaTemplate;
  if (later) later.value = state.later;
  const result = root.querySelector<HTMLElement>('[data-idea-result]');
  const personal = root.querySelector<HTMLTextAreaElement>('#idea-personal');
  const copyIdea = root.querySelector<HTMLButtonElement>('[data-copy-idea]');
  const ideaStatus = root.querySelector<HTMLElement>('[data-idea-status]');
  const invalidateIdea = () => {
    if (result) result.hidden = true;
    if (copyIdea) copyIdea.disabled = true;
    if (ideaStatus)
      ideaStatus.textContent = en
        ? 'Draft changed. Confirm to prepare the new version.'
        : '草稿已修改，请确认生成新版本。';
  };
  root.querySelector('[data-draft-form]')?.addEventListener('input', () => {
    invalidateIdea();
    state.idea = idea!.value;
    state.later = later!.value;
    save();
  });
  root.querySelector('[data-confirm-idea]')?.addEventListener('click', () => {
    if (
      !idea!.value.trim() ||
      (ideaTemplate.match(/【[^】]*】|\[[^\]]*\]/g) || []).some((placeholder) =>
        idea!.value.includes(placeholder),
      )
    ) {
      ideaStatus!.textContent = en
        ? 'Replace every bracketed field, or write undecided.'
        : '请把模板括号里的提示替换成实际内容，或填写“尚未确定”。';
      idea!.focus();
      return;
    }
    state.idea = idea!.value.trim();
    state.ideaConfirmed = state.idea;
    state.later = later!.value;
    save();
    personal!.value =
      state.idea +
      (state.later
        ? '\n\n' + (en ? 'Later / undecided: ' : '补充想法：') + state.later
        : '');
    result!.hidden = false;
    copyIdea!.disabled = false;
    ideaStatus!.textContent = en
      ? 'Personal draft ready. Review and copy it.'
      : '专属草稿已生成，核对后可一键复制。';
  });
  copyIdea?.addEventListener('click', async () => {
    if (copyIdea.disabled) return;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    try {
      await Promise.race([
        navigator.clipboard.writeText(personal!.value),
        new Promise((_, reject) => {
          timeout = setTimeout(() => reject(Error()), 1800);
        }),
      ]);
      ideaStatus!.textContent = en ? 'Copied.' : '已复制。';
    } catch {
      personal!.focus();
      personal!.select();
      ideaStatus!.textContent = en
        ? 'Text selected. Press Ctrl+C / ⌘C.'
        : '已选中文字，请按 Ctrl+C / ⌘C 复制。';
    } finally {
      if (timeout) clearTimeout(timeout);
    }
  });
  const panels = new Map<
    string,
    {
      panel: HTMLDetailsElement;
      version: HTMLInputElement;
      verdict: HTMLSelectElement;
      note: HTMLTextAreaElement;
      message: HTMLElement;
      dirty: boolean;
    }
  >();
  root
    .querySelectorAll<HTMLElement>('[data-personal-check]')
    .forEach((panel) => {
      const lessonId = panel.dataset.checkFor;
      if (!lessonId) return;
      const version = panel.querySelector<HTMLInputElement>(
        '[data-check-version]',
      )!;
      const verdict = panel.querySelector<HTMLSelectElement>(
        '[data-check-verdict]',
      )!;
      const note =
        panel.querySelector<HTMLTextAreaElement>('[data-check-note]')!;
      const message = panel.querySelector<HTMLElement>('[data-check-status]')!;
      const entry = {
        panel: panel as HTMLDetailsElement,
        version,
        verdict,
        note,
        message,
        dirty: false,
      };
      panels.set(lessonId, entry);
      const old = state.checks?.[lessonId];
      if (old) {
        version.value = old.version;
        verdict.value = old.verdict;
        note.value = old.note ?? '';
        message.textContent = (en ? 'Saved at: ' : '记录时间：') + old.date;
      }
      panel.addEventListener('input', () => {
        entry.dirty = true;
        message.textContent = en
          ? 'Check changed. Save it before marking complete.'
          : '核对内容已修改，请保存后再标记完成。';
      });
      panel
        .querySelector('[data-import-check]')
        ?.addEventListener('click', () => {
          const record = readConfirmed('learn-accept');
          if (!record) {
            message.textContent = en
              ? 'Confirm the trial record first.'
              : '先确认上方试用记录。';
            return;
          }
          const get = (pattern: RegExp) =>
            record
              .split('\n')
              .find((line) => pattern.test(line))
              ?.replace(/^[^:：]+[:：]\s*/, '') ?? '';
          entry.dirty = true;
          version.value = get(/^(本次试用版本与入口|Version and entry)[:：]/);
          note.value = get(/^(实际结果|Actual result)[:：]/);
          const result = get(/^(结论|Verdict)[:：]/);
          verdict.value = /^(通过|passed)$/i.test(result)
            ? 'passed'
            : /^(失败|failed)$/i.test(result)
              ? 'failed'
              : 'not-tested';
          message.textContent = en
            ? 'Imported. Review and save the check.'
            : '已带入，请核对后保存本次检查。';
        });
      panel
        .querySelector('[data-save-check]')!
        .addEventListener('click', () => {
          if (!version.value.trim() || !note.value.trim()) {
            message.textContent = en
              ? 'Add the actual revision and result/reason.'
              : '请填写实际版本和结果/原因。';
            return;
          }
          entry.dirty = false;
          state.checks ??= {};
          state.checks[lessonId] = {
            version: version.value.trim(),
            verdict: verdict.value,
            note: note.value.trim(),
            date: new Date().toISOString(),
          };
          if (!canComplete(lessonId, verdict.value))
            state.completed = state.completed.filter((id) => id !== lessonId);
          if (!save()) {
            entry.dirty = true;
            message.textContent = en
              ? 'Not saved. Keep this page open and copy your record.'
              : '保存失败，请保留本页并复制核对记录。';
            return;
          }
          message.textContent = en
            ? 'Saved. Changed projects need a new check.'
            : '已保存；项目改变后需要重新核对。';
        });
    });
  root
    .querySelectorAll<HTMLElement>('[data-complete],[data-finish]')
    .forEach((el) =>
      el.addEventListener('click', (event) => {
        const id = el.dataset.complete ?? el.dataset.finish!;
        const entry = panels.get(id);
        // 需要核对的步骤没有面板就是缺陷，不是「免检」：一律阻止完成。
        const needsCheck = checkedSteps.includes(id);
        if (
          needsCheck &&
          (!entry ||
            entry.dirty ||
            !canComplete(id, state.checks?.[id]?.verdict ?? ''))
        ) {
          event.preventDefault();
          if (!entry) {
            // 面板缺失属于渲染缺陷：明确告知，不静默放行也不抛错。
            status.textContent = en
              ? 'The check panel for this action is missing. Reload the page; completion is blocked.'
              : '本步骤的核对面板缺失，请刷新页面；完成操作已被阻止。';
            return;
          }
          entry.panel.open = true;
          entry.panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
          entry.message.textContent = en
            ? 'Record the actual check before marking complete. Untested or failed work stays open.'
            : '请先记录实际核对结论；失败或未测试不能标记完成。';
          return;
        }
        const previous = { ...state, completed: [...state.completed] };
        if (!state.completed.includes(id)) state.completed.push(id);
        const follow = el.dataset.followStep;
        if (follow && repairStepIds.includes(follow)) {
          // 从哪个入口节点点的「记录反馈」，修完就回哪个节点。
          const from = repairOriginFor(
            el.dataset.repairFrom ?? root.dataset.node,
          );
          state.activeBranch = { step: follow, from };
        } else if (
          repairStepIds.includes(id) ||
          (follow &&
            ['accept', 'release-review', 'package', 'live-check'].includes(id))
        )
          delete state.activeBranch;
        state.current = resumeStep(state)?.step ?? 'maintain';
        if (!save()) {
          state = previous;
          event.preventDefault();
        }
      }),
    );
  root.querySelectorAll<HTMLElement>('[data-undo-complete]').forEach((el) =>
    el.addEventListener('click', () => {
      const previous = { ...state, completed: [...state.completed] };
      state.completed = state.completed.filter(
        (id) => id !== el.dataset.undoComplete,
      );
      state.current = nextMainStep(state.completed) ?? 'maintain';
      if (!save()) state = previous;
    }),
  );
}
