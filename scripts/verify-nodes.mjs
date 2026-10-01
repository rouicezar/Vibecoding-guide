import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  routeNodes,
  nodeStepIds,
  repairStepIds,
  legacyNodeMap,
  nodeById,
  linearStepIds,
  branchStepIds,
  optionalSteps,
} from '../src/data/nodes.ts';
import { fileContracts } from '../src/data/learning-contracts.ts';
import { lessons, phases } from '../src/data/learning.ts';
import { stepSupport } from '../src/data/learning-support.ts';
import { glossary } from '../src/data/glossary/index.ts';
import { checkedSteps } from '../src/data/learning-progress.ts';
import { nodeEffort } from '../src/data/node-effort.ts';

/* 1. 18 个节点，编号连续，阶段合法 */
assert(routeNodes.length > 0, '路线不能为空');
assert.equal(
  new Set(routeNodes.map((n) => n.id)).size,
  routeNodes.length,
  '节点 ID 不得重复',
);
assert.deepEqual(
  routeNodes.map((n) => n.order),
  Array.from({ length: routeNodes.length }, (_, i) => i + 1),
  '节点编号必须从 1 连续排列',
);
for (const node of routeNodes) {
  assert(
    phases.some((p) => p.id === node.phaseId),
    `未知阶段：${node.id}/${node.phaseId}`,
  );
  assert(node.title[0] && node.title[1], `节点缺少中英名称：${node.id}`);
  assert(node.gloss[0] && node.gloss[1], `节点缺少一句话白话：${node.id}`);
  assert(
    node.why[0] && node.why[1],
    `节点缺少“为什么要有这一节点”：${node.id}`,
  );
  assert(node.stepIds.length > 0, `节点没有步骤：${node.id}`);
  assert(node.stepIds.length <= 5, `节点步骤过多，应拆分：${node.id}`);
}

/* 2. 步骤归位：18 节点 + 修复回路 = 全部 31 个教学动作，且不重复、不遗漏 */
assert.equal(
  new Set(nodeStepIds).size,
  nodeStepIds.length,
  '同一个步骤被分到多个节点',
);
assert.equal(
  new Set(repairStepIds).size,
  repairStepIds.length,
  '修复回路步骤重复',
);
for (const id of [...nodeStepIds, ...repairStepIds])
  assert(
    lessons.some((l) => l.id === id),
    `引用了不存在的教学动作：${id}`,
  );
assert.equal(
  nodeStepIds.length + repairStepIds.length,
  lessons.length,
  `步骤总数应等于教学动作总数 ${lessons.length}，实际 ${nodeStepIds.length}+${repairStepIds.length}`,
);
const uncovered = lessons
  .filter((l) => !nodeStepIds.includes(l.id) && !repairStepIds.includes(l.id))
  .map((l) => l.id);
assert.equal(
  uncovered.length,
  0,
  `没有归入任何节点的教学动作：${uncovered.join(', ')}`,
);

/* 2b. 线性顺序必须与学习数据的真实顺序一致（本轮阻断缺陷就是这里漏掉的） */
const linearExpect = lessons
  .map((l) => l.id)
  .filter((id) => !branchStepIds.includes(id));
assert.deepEqual(
  linearStepIds,
  linearExpect,
  `节点线性顺序与 lessons 顺序不一致：\n  节点：${linearStepIds.join(', ')}\n  数据：${linearExpect.join(', ')}`,
);
assert.equal(
  new Set(nodeStepIds).size,
  routeNodes.reduce((n, node) => n + node.stepIds.length, 0),
  '同一节点内步骤重复',
);

/* 2c. 文件依赖：任何线性步骤读取的文件，必须由不晚于它的线性步骤写出 */
const pos = new Map(linearStepIds.map((id, i) => [id, i]));
const writers = new Map(),
  readers = new Map();
for (const id of linearStepIds) {
  const c = fileContracts[id];
  if (!c) continue;
  for (const w of c.writes) {
    if (!writers.has(w)) writers.set(w, []);
    writers.get(w).push(id);
  }
  for (const r of c.reads) {
    if (!readers.has(r)) readers.set(r, []);
    readers.get(r).push(id);
  }
}
const depGaps = [];
for (const [file, rs] of readers) {
  const ws = writers.get(file) || [];
  if (!ws.length) {
    depGaps.push(`${file} 被 ${rs.join(',')} 读取，但没有线性步骤创建它`);
    continue;
  }
  const firstWrite = Math.min(...ws.map((w) => pos.get(w)));
  for (const r of rs)
    if (pos.get(r) < firstWrite)
      depGaps.push(
        `${file} 在 ${ws[0]}（第 ${firstWrite + 1} 位）才创建，但 ${r}（第 ${pos.get(r) + 1} 位）先读取它`,
      );
}
assert.equal(
  depGaps.length,
  0,
  `文件依赖顺序错误：\n  ${depGaps.join('\n  ')}`,
);

/* 3. 每个步骤的 9 个槽位数据齐备（idea 的提示词槽位由页面给出替代说明） */
const slotGaps = [];
for (const node of routeNodes)
  for (const stepId of node.stepIds) {
    const lesson = lessons.find((l) => l.id === stepId);
    const support = stepSupport.find((s) => s.id === stepId);
    if (!support) {
      slotGaps.push(`${stepId}:步骤材料`);
      continue;
    }
    if (!lesson.actions.length) slotGaps.push(`${stepId}:这一步具体怎么做？`);
    if (!lesson.expected.every(Boolean)) slotGaps.push(`${stepId}:完成标准`);
    if (!lesson.issues.length)
      slotGaps.push(`${stepId}:遇到问题时，应该怎么处理？`);
    if (!lesson.understanding?.why.every(Boolean))
      slotGaps.push(`${stepId}:这一步要帮你解决什么问题？`);
    if (!support.steps.length) slotGaps.push(`${stepId}:逐项跟着做`);
    if (!support.terms.length) slotGaps.push(`${stepId}:这一步出现的词`);
    if (!support.recovery.every(Boolean))
      slotGaps.push(`${stepId}:没有看到预期结果，接下来怎么办？`);
    if (!support.example.every(Boolean)) slotGaps.push(`${stepId}:结果对照`);
    if (!lesson.prompt && stepId !== 'idea')
      slotGaps.push(`${stepId}:发给 AI 的话`);
  }
assert.equal(slotGaps.length, 0, `槽位数据缺失：${slotGaps.join(' | ')}`);

/* 4. 术语引用有效（槽位 5 不出现死链） */
for (const node of routeNodes)
  for (const stepId of node.stepIds) {
    const support = stepSupport.find((s) => s.id === stepId);
    for (const termId of support.terms)
      assert(
        glossary.some((g) => g.id === termId),
        `步骤 ${stepId} 引用了不存在的术语：${termId}`,
      );
  }

/* 5. 旧入口可回到新节点页 */
for (const [legacy, nodeId] of Object.entries(legacyNodeMap)) {
  assert(
    lessons.some((l) => l.id === legacy) ||
      nodeById(legacy) ||
      legacy === 'build' ||
      legacy === 'ui' ||
      legacy === 'backend' ||
      legacy === 'flow' ||
      legacy === 'tell' ||
      legacy === 'refine' ||
      legacy === 'stack' ||
      legacy === 'launch',
    `未知旧节点：${legacy}`,
  );
  assert(nodeById(nodeId), `旧节点 ${legacy} 指向了不存在的节点：${nodeId}`);
}

/* 6. 页面结构一致性：18 个节点页必须出现同一组槽位标题与固定区块，且顺序相同 */
const SLOTS = [
  '开始前准备什么，做完后留下什么？',
  '这一步要帮你解决什么问题？',
  '这一步具体怎么做？',
  '不会具体操作？逐项跟着做',
  '这一步出现的词',
  '遇到问题时，应该怎么处理？',
  '本步材料（填写或复制）',
  '看到这个结果才算完成',
  '没有看到预期结果，接下来怎么办？',
];
const HEAD = [
  '完整路线图',
  '为什么要有这一节点',
  '做完这一节点，你会得到什么？',
  '这个节点要做多少事',
  '本节点会遇到的',
  '上一节点',
  '下一节点',
];
const BLOCK_A = 'class="step-visual"';
const BLOCK_B_OR_C = ['按我的项目类型，展开具体操作', '看示例或查资料'];
const BLOCK_D = '记录本次核对结论与版本';
/**
 * 需核对步骤清单直接取自 learning-progress.checkedSteps，
 * 避免这里再维护一份会与实际渲染脱节的副本。
 */
const CHECKABLE = checkedSteps;
const mainStepIds = (node) => node.stepIds.filter((id) => !optionalSteps[id]);
const optionalStepIds = (node) =>
  node.stepIds.filter((id) => optionalSteps[id]);
for (const locale of ['zh-cn', 'en']) {
  for (const node of routeNodes) {
    const html = await readFile(
      `dist/${locale}/node/${node.id}/index.html`,
      'utf8',
    );
    assert.equal(
      (html.match(/<h1[ >]/g) || []).length,
      1,
      `${locale}/${node.id}: H1 数量不为 1`,
    );
    assert(
      html.includes('data-learning'),
      `${locale}/${node.id}: 缺少学习状态根节点`,
    );
    for (const stepId of node.stepIds) {
      assert(
        html.includes(`id="${stepId}"`),
        `${locale}/${node.id}: 步骤缺少锚点 id=${stepId}`,
      );
      assert(
        html.includes(`data-node-step="${stepId}"`),
        `${locale}/${node.id}: 缺少 data-node-step=${stepId}`,
      );
      if (stepId !== 'idea')
        assert(
          html.includes(`data-template-text="learn-${stepId}"`),
          `${locale}/${node.id}: 步骤 ${stepId} 缺少可复制提示词`,
        );
    }
    if (locale === 'zh-cn') {
      for (const slot of SLOTS)
        assert(
          html.includes(slot),
          `${locale}/${node.id}: 缺少固定槽位「${slot}」`,
        );
      const order = SLOTS.map((slot) => html.indexOf(slot));
      for (let i = 1; i < order.length; i++)
        assert(
          order[i] > order[i - 1],
          `${locale}/${node.id}: 槽位顺序与标准不一致`,
        );
      for (const head of HEAD)
        assert(
          html.includes(head),
          `${locale}/${node.id}: 页头缺少「${head}」`,
        );
      // 步骤数只算必做步骤：可选步骤单独成区，不能混进「按顺序完成」的总数里。
      assert(
        html.includes(`共 ${mainStepIds(node).length} 个步骤`),
        `${locale}/${node.id}: 未显示这一节点需要做几步？`,
      );
      assert(
        html.includes(
          `${mainStepIds(node).length} 个步骤，约 ${nodeEffort(node.id).main} 次亲手操作`,
        ),
        `${locale}/${node.id}: 未显示这一节点的实际操作量`,
      );
      assert(
        html.includes('data-start-here'),
        `${locale}/${node.id}: 缺少首屏「从这里开始」定位`,
      );
      const optionalIds = optionalStepIds(node);
      if (optionalIds.length) {
        assert(
          html.includes('符合条件才做的可选步骤'),
          `${locale}/${node.id}: 可选步骤必须单独成区并说明可跳过`,
        );
        // 可选步骤不得出现在主线编号里。
        assert(
          html.indexOf('符合条件才做的可选步骤') <
            html.indexOf(`id="${optionalIds[0]}"`),
          `${locale}/${node.id}: 可选步骤区块位置异常`,
        );
      }
      assert(
        html.includes(`节点 ${node.order} / ${routeNodes.length}`),
        `${locale}/${node.id}: 未显示节点序号`,
      );
      assert(
        html.includes(BLOCK_A),
        `${locale}/${node.id}: 缺少固定区块 A（操作示意）`,
      );
      assert(
        html.indexOf(BLOCK_A) < order[0],
        `${locale}/${node.id}: 区块 A 必须排在槽位之前`,
      );
      /* B（项目分支）与 C（示例资料）只在有数据时出现；一旦出现必须在槽位之后。 */
      for (const block of BLOCK_B_OR_C)
        if (html.includes(block))
          assert(
            html.indexOf(block) > order[SLOTS.length - 1],
            `${locale}/${node.id}: 区块「${block}」必须排在槽位之后`,
          );
      assert(
        html.includes('我的项目材料与备份'),
        `${locale}/${node.id}: 缺少项目材料与备份面板`,
      );
      if (node.stepIds.some((id) => CHECKABLE.includes(id)))
        assert(
          html.includes(BLOCK_D),
          `${locale}/${node.id}: 含需核对步骤但缺少区块 D`,
        );
      if (html.includes(BLOCK_D))
        assert(
          html.indexOf(BLOCK_D) > order[SLOTS.length - 1],
          `${locale}/${node.id}: 区块 D 必须排在槽位之后`,
        );
    }
  }
}

/* 7. 侧栏必须逐项列出 18 个节点，不再列 6 个阶段 */
const nav = await readFile('dist/zh-cn/node/idea/index.html', 'utf8');
for (const node of routeNodes)
  assert(
    nav.includes(`href="/zh-cn/node/${node.id}/"`),
    `侧栏缺少节点：${node.id}`,
  );
assert(
  !nav.includes('href="/zh-cn/learn/stage/'),
  '侧栏仍在链接旧的分阶段页面',
);

/* 8. 路线图上的 18 个节点必须指向节点页 */
const roadmap = await readFile('dist/zh-cn/roadmap/index.html', 'utf8');
for (const node of routeNodes)
  assert(
    roadmap.includes(`href="/zh-cn/node/${node.id}/"`),
    `路线图未指向节点页：${node.id}`,
  );

console.log(
  `PASS: ${routeNodes.length} 个节点页结构一致（${SLOTS.length} 个固定槽位、同一顺序；区块 A 在前、B/C/D 在后；侧栏与路线图均指向节点页）、${linearStepIds.length} 个线性步骤 + ${branchStepIds.length} 个分支步骤（含 ${Object.keys(optionalSteps).length} 个可选）覆盖全部 ${lessons.length} 个教学动作、槽位数据齐备、术语无死链。`,
);
