# 逐动作跟做：内容完善设计

需求依据：../../product-requirements.md。先修订需求，再实现。

用户最新边界：布局、UI 设计、逻辑结构固定，只完善步骤和资料。已撤回本轮未提交的组件、首页、默认展开和提示词往返入口调整。

直接更新 learning-support.ts 与 micro-checks.json 的原内容，在现有 NodeStep 逐项操作区沿用 microActions 入口，为首批 tool、folder、open-project、checkpoint、first-file、environment、preview 补充位置、具体操作、提醒、结果和恢复。文本按真实执行顺序细化，不新增交互；现有提示词仍位于第 7 项。

校验依据当前教学数据检查完整覆盖、唯一归属和交接，不再以固定总数当产品目标。此项只调整验证规则，不修改运行时导航或进度。

当前工具禁止读取 Codex 原生界面，真实入口图仍是资料缺口；已有明确标注的示意不冒充实机截图。
