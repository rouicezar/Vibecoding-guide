import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  routeNodes,
  repairEntryNodeIds,
  repairStepIds,
  stepUrl,
  nodeForStep,
  optionalSteps,
  linearStepIds,
} from '../src/data/nodes.ts';
import { lessons } from '../src/data/learning.ts';
import {
  checkedSteps,
  canComplete,
  mainProgress,
  nodeProgress,
  resumeStep,
} from '../src/data/learning-progress.ts';
import {
  nodeEffort,
  stepEffort,
  routeEffort,
} from '../src/data/node-effort.ts';
import { url } from '../src/data/site.ts';

const read = (p) => readFile(p, 'utf8');
const locales = ['zh-cn', 'en'];

/* 1. 修复回路必须留在进入它的那个节点，且每个入口都提供返回入口。 */
for (const locale of locales) {
  for (const nodeId of repairEntryNodeIds) {
    const html = await read(`dist/${locale}/node/${nodeId}/index.html`);
    for (const step of repairStepIds) {
      assert(
        html.includes(`id="${step}"`),
        `${locale}/${nodeId}: 修复步骤 ${step} 未在本节点渲染`,
      );
    }
    // 返回链接必须指向本页自己，不能是固定的 accept。
    const back = html.match(/class="step-return"[^>]*href="([^"]+)"/);
    assert(back, `${locale}/${nodeId}: 修复区缺少返回本节点的链接`);
    assert.equal(
      back[1],
      url(locale, `node/${nodeId}`),
      `${locale}/${nodeId}: 返回链接没有回到本节点`,
    );
  }
  /* 2. 非入口节点不得出现修复区，避免用户以为哪里都能修。 */
  const nonEntry = routeNodes.filter((n) => !repairEntryNodeIds.includes(n.id));
  for (const node of nonEntry) {
    const html = await read(`dist/${locale}/node/${node.id}/index.html`);
    assert(
      !html.includes('class="step-return"'),
      `${locale}/${node.id}: 非修复入口节点不应出现修复返回链接`,
    );
  }
}

/* 3. 站内「跟着流程走」的修复链接必须留在当前节点。
   侧栏搜索索引里的全局快捷方式仍指向第一个入口节点，那是全站搜索的合理默认值。 */
{
  const html = await read('dist/zh-cn/node/live-check/index.html');
  const inFlow = [
    ...html.matchAll(/<a[^>]*data-follow-step="feedback"[^>]*>/g),
  ].map((m) => m[0]);
  assert(inFlow.length > 0, 'live-check 的流程内应存在「记录反馈」出口');
  for (const tag of inFlow)
    assert(
      tag.includes(`href="/zh-cn/node/live-check/#feedback"`),
      `流程内修复链接指向了错误的节点：${tag}`,
    );
  for (const node of routeNodes.filter(
    (n) => !repairEntryNodeIds.includes(n.id),
  )) {
    const other = await read(`dist/zh-cn/node/${node.id}/index.html`);
    assert(
      !other.includes('data-follow-step="feedback"'),
      `${node.id}: 非修复入口节点不应提供「记录反馈」出口`,
    );
  }
}

/* 4. 「不适用」不得计入已核对。 */
{
  const waived = {
    interface: { verdict: 'not-applicable' },
    save: { verdict: 'not-applicable' },
  };
  const all = mainProgress(linearStepIds, waived);
  assert.equal(all.total, linearStepIds.length);
  assert.equal(all.waived, 2);
  assert.equal(all.done, linearStepIds.length - 2);
  assert(
    all.done < all.total,
    '标记为不适用的步骤仍被算作已核对，进度会误导本人',
  );
  const node = nodeProgress('preview', ['preview', 'interface'], waived);
  assert.deepEqual(node, { done: 1, waived: 1, total: 4 });
  assert.equal(
    mainProgress(['accept'], { accept: { verdict: 'passed' } }).done,
    1,
    '真实核对结论必须照常计入',
  );
}

/* 5. 每个需核对步骤都必须真的能渲染核对面板，否则完成闸门形同虚设。 */
{
  assert.equal(
    checkedSteps.filter((id) => !lessons.some((l) => l.id === id)).length,
    0,
    'checkedSteps 含有不存在的步骤 id',
  );
  for (const locale of locales) {
    for (const id of checkedSteps) {
      const html = await read(
        `dist/${locale}/node/${nodeForStep(id)}/index.html`,
      );
      assert(
        html.includes(`data-check-for="${id}"`),
        `${locale}: 需核对步骤 ${id} 没有渲染核对面板`,
      );
    }
  }
  // 静默失败高发步骤必须在册。
  for (const id of [
    'tool',
    'open-project',
    'first-file',
    'environment',
    'delivery',
  ])
    assert(
      checkedSteps.includes(id),
      `${id} 是静默失败高发步骤，必须要求本人核对`,
    );
}

/* 6. 可选步骤不得混入主线编号与进度。 */
{
  const wording = {
    'zh-cn': { main: '共 1 个步骤', optional: '符合条件才做的可选步骤' },
    en: { main: '1 step ·', optional: 'Optional action, only if it applies' },
  };
  for (const locale of locales) {
    const html = await read(`dist/${locale}/node/package/index.html`);
    assert(
      html.includes(wording[locale].main),
      `${locale}: package 主线步骤数应只算必做步骤`,
    );
    assert(html.includes('0/1'), `${locale}: package 进度分母应与主线一致`);
    assert(
      !/step-order[^>]*>01<span[^>]*>\/<\/span>02</.test(html),
      `${locale}: 可选步骤不得占用主线编号`,
    );
    assert(
      html.includes(wording[locale].optional),
      `${locale}: 可选步骤必须单独成区`,
    );
    assert(
      !html.includes('共 2 个步骤'),
      `${locale}: 可选步骤被算进了主线总数`,
    );
  }
}

/* 7. 每个节点都必须显示真实工作量，并在首屏给出「从这里开始」。 */
{
  for (const locale of locales) {
    for (const node of routeNodes) {
      const html = await read(`dist/${locale}/node/${node.id}/index.html`);
      const effort = nodeEffort(node.id);
      assert(
        effort.main > 0,
        `${node.id}: 工作量统计为 0，界面上会显示「0 次操作」`,
      );
      assert(
        html.includes(`约 ${effort.main} 次亲手操作`) ||
          html.includes(`about ${effort.main} hands-on actions`),
        `${locale}/${node.id}: 页头未显示实际操作量`,
      );
      assert(
        html.includes('data-start-here'),
        `${locale}/${node.id}: 缺少首屏定位`,
      );
    }
  }
  const totals = routeEffort();
  assert.equal(
    totals.main +
      totals.optional +
      repairStepIds.reduce((n, id) => n + stepEffort(id).main, 0),
    Object.values(
      await import('../src/data/micro-actions.ts').then((m) => m.microActions),
    ).reduce((n, list) => n + list.length, 0),
    '工作量统计没有覆盖全部微操作',
  );
}

/* 8. 路线图页必须能看到进度。 */
{
  const html = await read('dist/zh-cn/roadmap/index.html');
  assert(html.includes('data-main-progress'), '路线图缺少主线进度');
  for (const node of routeNodes)
    assert(
      html.includes(`data-node-progress="${node.id}"`),
      `路线图缺少节点进度：${node.id}`,
    );
}

/* 9. 恢复逻辑必须保留修复入口来源。 */
{
  for (const from of repairEntryNodeIds) {
    const target = resumeStep({
      completed: [],
      activeBranch: { step: 'repair', from },
    });
    assert.deepEqual(target, { step: 'repair', from });
    assert.equal(
      stepUrl('zh-cn', target.step, target.from),
      `/zh-cn/node/${from}/#repair`,
      `从 ${from} 进入修复后必须能回到 ${from}`,
    );
  }
  assert.deepEqual(resumeStep({ completed: [] }), { step: 'idea' });
}

console.log(
  `PASS: 修复回路锁定入口节点并可返回；${checkedSteps.length} 个步骤需本人核对且面板齐备；不适用不计入已核对；可选步骤独立成区；18 个节点均显示工作量与首屏定位；路线图含进度；总量 ${routeEffort().main + routeEffort().optional} 次操作有据可查。`,
);
console.log('PASS: 这只校验结构与状态契约，不代表真实新手能完成教学。');
