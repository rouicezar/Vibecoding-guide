# 实施记录：流程、节点与体验全量修复

日期：2026-10-02。计划见 [plan.md](plan.md)。基线 `rouice/beginner-learning-redesign`（f419083）。

## 结果

R1–R9 全部完成，未改动任何教学内容文案（`learning-content.ts`、`blockers.ts`、`fullstack-practice.json`、
词典与术语数据零改动）。

## 逐项证据

### R1 修复回路锁定入口节点（P0）

- `nodes.ts`：`nodeForStep(stepId, fromNode?)` 与 `stepUrl(locale, stepId, fromNode?)` 增加来源节点参数；
  新增 `repairOriginFor(fromNode)`，来源不在 `repairEntryNodeIds` 内时退回 `accept`。
- `NodeStep.astro`：新增 `originNode`（跨节点引用留在本页）与 `returnTo`（修复区返回本节点）两个 prop；
  指向修复步骤的 choices 携带 `data-repair-from`。
- `NodePage.astro`：修复区的三个步骤传入 `originNode={node.id}` 和指向本节点的返回链接。
- `learning-progress.ts`：`activeBranch` 由字符串改为 `{ step, from }`；`resumeStep` 返回
  `{ step, from? }`。`learning.ts` 迁移旧的字符串写法（来源缺失时按 `accept` 处理，与旧版行为一致）。

构建产物核对（4 个入口 × 2 语言，`step-return` 文案）：

| 节点 | 返回链接文案 |
| --- | --- |
| accept | 修好后回到本节点：亲自测试完整使用过程 |
| release-review | 修好后回到本节点：评估上线与交付条件 |
| package | 修好后回到本节点：准备部署脚本或安装包 |
| live-check | 修好后回到本节点：交付上线，检查实际入口 |

`live-check` 的流程内「记录反馈」现指向 `/zh-cn/node/live-check/#feedback`，不再是 `/zh-cn/node/accept/#feedback`。
侧栏全站搜索索引里的修复快捷方式仍指向 `accept`——那是跨页面搜索，没有唯一正确的来源节点，保留为默认值。

### R2 「不适用」不再冒充「已核对」（P0）

- `learning-progress.ts`：`nodeProgress` / `mainProgress` 接收核对记录，拆出 `waived`；
  `done + waived = total`，`done` 只统计真实核对通过。
- `progress.ts`：节点与主线进度显示为 `1/4（2 项不适用）`；步骤徽标区分「已核对 ✓」与「不适用」，
  后者用中性紫灰色（`data-waived`），不与通过态的绿色混淆。
- 英文同步显示 ` · N not applicable`。

`canComplete` 的逃生舱本身保留（`product-requirements.md` 允许静态项目不做界面/数据），
但不再计入「已核对」，且 `learning.ts` 仍强制填写不适用原因。

### R3 需本人核对的步骤 11 → 17（P0）

新增 `learning-progress.checkedSteps` 作为唯一来源，同时决定「渲染核对面板」与「完成闸门」，
消除了此前 `entry` 为 `undefined` 就整段跳过校验的漏洞（现在面板缺失会被明确报错并阻止完成）。

收录标准是**失败时会不会静默**。本轮新增 6 个此前无门槛的步骤：

| 步骤 | 纳入理由 |
| --- | --- |
| `tool` | 对应 `blockers.ts` 的 `tell-folder`：工具没真正接管文件 |
| `open-project` | 全站最常见的静默失败根因——打开了错误目录，之后每步都改了看不见的地方且不报错 |
| `first-file` | 看文件列表是唯一验证手段 |
| `environment` | 装错运行环境不报错，只是后续步骤莫名其妙做不下去 |
| `delivery` | 交付方式的分叉点，选错后面全错 |
| `publish` | 可选但一旦要做就必须真的核对 |

剩余 12 个未设门槛的步骤全部是思考与整理类（idea / description / clarify / scope / requirements /
stories / prototype / choose-stack / plan / checkpoint / folder / maintain），对这些步骤强填版本号
对新手是纯负担，其预期结果由槽位 08 承载。

### R4 可选步骤独立成区（P1）

`package` 节点的 `publish`（可选）原先混入主线编号，导致同屏显示 `0/1` 与「共 2 个步骤 · 按顺序完成」。
现在主线只算必做步骤，可选步骤单列「符合条件才做的可选步骤」区块，明确不计入进度、不符合条件可跳过、
做完回到必做步骤。构建产物：`package` 为 `共 1 个步骤`、进度 `0/1`、主线徽标 `01/01`、可选徽标 `01/01`。

### R5 路线图页补进度（P1）

`ProjectRoadmap.astro` 此前 `data-node-progress` 与 `data-main-progress` 均为 0。
现补上主线进度块与 18 个节点的进度徽标（头部定位页此前是全站唯一看不到进度的地方）。

### R6 / R7 工作量可见（P1/P2）

新增 `src/data/node-effort.ts`，以微操作数为口径统计工作量（权威值 86 个，对应既有校验口径）。

节点实际投入：`folder` 3 次 / `preview` 13 次 / `accept` 10 次，比例与步骤数严重不符。
现在侧栏、路线图、节点页页头与每个步骤卡片都显示实际操作量，页头新增「这个节点要做多少事」格
（含可选步骤的独立说明与术语数量预告）。

### R8 首屏定位与跳步纠正（P2）

节点页页头下方新增 `data-start-here`，由 `progress.ts` 按本地进度填充：

- 有未核对动作 → 「从这里开始：<第一个未核对动作>」
- 本节点已全部核对 → 「本节点的必做动作已全部核对 → 回到完整路线图」
- 跳步进入（侧栏 18 个节点全部可点，零基础用户可直接点进节点 18）→ 额外提示
  「你还没有核对完这个节点之前的动作。主线上当前待做的动作是「X」→ 去那一步」

浏览器实测四种场景全部正确（全新用户进节点 12、完成前 12 步后进节点 12、
全新用户跳进节点 18、节点 12 全完成）。

### R9 术语前置（P2）

节点级术语汇总原先排在所有步骤之后，`preview` 节点做完 13 次操作才看到 10 个词。
现移到动手之前、默认折叠的「本节点会遇到的 N 个词」，页头同步预告数量；
每个步骤内的术语解释（槽位 05）保持不变。

## 校验

新增 `scripts/verify-journey-integrity.mjs`（9 组不变量），已接入 `npm run verify`：

1. 4 个修复入口各自渲染修复三步 + 返回链接指向本页；14 个非入口节点不得出现修复返回链接
2. 流程内修复链接必须留在当前节点
3. 「不适用」不计入 `done`，且 `done + waived = total`
4. 17 个需核对步骤在两种语言下都真的渲染了面板；静默失败高发步骤必须在册
5. `package` 主线为 `共 1 个步骤` / `0/1`，可选步骤不占主线编号且单独成区
6. 18 个节点均显示真实工作量与首屏定位；工作量总和覆盖全部 86 个微操作
7. 路线图含主线进度与 18 个节点进度
8. 恢复逻辑保留修复入口来源

浏览器回归在 `tests/browser/core.spec.mjs` 新增 5 条：首屏定位、跳步纠正、
不适用计数、修复入口归属、可选步骤不混入主线。既有 2 条断言按新契约更新
（`.node-meta` 由 1 格变 2 格，新增工作量与首屏定位断言）。

## 验证结果

| 检查 | 结果 |
| --- | --- |
| `npm run quality`（format / lint / astro check / engineering / unit） | 通过，0 errors |
| `npm run build` | 通过，2142 本地化页面 |
| `npm run verify`（21 条脚本） | 23 PASS / 0 失败 |
| `npm run build:pages`（`SITE_BASE=/Vibecoding-guide`） | 通过，2383 页链接校验通过 |
| `npm run test:browser`（桌面 + 移动） | 26 / 26 通过 |

## 边界

- 本轮只改结构与状态，**未新增真实新手验收**。`product-requirements.md` 定义的唯一教学质量标准仍为空，
  自动校验只能证明「结构与状态契约成立」，不能证明「新手学得会」。
- `preview`（4 步 / 13 次操作）与 `folder`（1 步 / 3 次操作）的粒度失衡**未根治**，见 plan.md「不在本轮范围」。
- 修复回路对**四个入口节点重复渲染同一组三步**（4 × 3 = 12 份相同教学内容）。本轮保证了行为正确，
  但重复本身是维护成本，后续可考虑抽成独立页面。
- 侧栏 18 个节点全部可点，本轮只在节点页给出纠偏提示，**未做前置锁定**——对零基础用户仍可自由跳读。