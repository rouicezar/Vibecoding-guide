# 工程维护约定

## 环境与检查

使用 `.nvmrc` 固定的 Node 26.7.0，执行 `npm ci`。本项目直接运行 TypeScript 检查脚本，因此不能只按 Astro 的最低 Node 版本安装。package.json、锁文件和 CI 的版本约束一起维护。

提交前执行：

1. `npm run format:check`：可维护代码的格式（浏览器脚本、学习数据、样式、页面入口、校验脚本与配置）。需要整理时执行 `npm run format`。
2. `npm run lint`：浏览器脚本与学习数据的静态规则；`npm run check`：全站 Astro / TypeScript 检查。
3. `npm run verify:unit`：项目隔离、恢复失败回滚和折叠状态。
4. `npm run build && npm run verify`：全站内容、资源、链接和教学交接。
5. `npm run test:browser`：真实浏览器的多标签页、模板、折叠、搜索和视觉约定。首次需 `npx playwright install chromium`。
6. `npm run build:pages`，再以 `TEST_DIST=dist-pages TEST_BASE=/Vibecoding-guide TEST_PORT=4343 npm run test:browser` 验证部署子路径。它使用独立目录，不替换日常根路径预览。

PR 执行全部检查，不持有部署权限；只有 main 的非 PR 运行可以上传并部署。浏览器失败保留截图、trace 和报告。CI 测试不能代替真实零基础学员的任务验收。

## 内容与代码

- 当前教学事实集中在 `src/data/learning-content.ts`，字段类型在 `learning-types.ts`。操作、提示词、完成后结果和排障分别填写，中英文必须成对。没有固定动作数量上限。
- `learning.ts`、`learning-support.ts` 和 `micro-actions.ts` 仅提供兼容视图；不得重新加入运行时改写教学内容的补丁。`docs/reviews` 是历史证据，不是生产数据或常规测试输入。
- `learning-contracts.ts` 只维护文件读写交接元数据。修改前置文件要求时，同步检查上游是否真的产出。
- 页面打开时绑定项目身份，旧标签页读写与导出均保持原归属；切换/新建后刷新。不要把读写重新改回每次读取全局活动项目。
- 多键写入通过事务助手执行，失败仅撤回本次成功写入的键。不要清空浏览器存储来修复资料问题。
- 折叠状态使用稳定标识，保存 true 和 false；新增同类组件优先设置明确 id 或 data-step-section。不要用页面顺序作为标识。
- 保持类型明确；外部输入先检查再缩窄类型，不使用 `as unknown as` 绕过验证。捕获异常需说明保留行为或给出用户反馈。
- 全局基础样式在 `global.css`，站点主题集中在 `theme.css`。组件样式保持单一 style 块。不要继续增加按日期叠加的覆盖文件；保留的 `!important` 仅用于跨组件最终交互约束、隐藏、减弱动画和旧路线定位兼容，新增时需说明原因。
- 格式化范围明确写在 package.json；旧演示资料和历史审计不为格式检查批量改写。新增运行模块应加入对应静态检查范围。
