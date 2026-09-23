# Vibe Coding 实践指南（筹备中）

**AI 时代，即使零基础不懂代码，也能 Vibe Coding。**

帮助普通人制作网站、小程序、手机应用与电脑工具：把想法讲清楚，选好搭建方式，学会检查、上线和后续照看。

旧版 UI 组件词典保留：25 类、212 个词条。新站已完成 Astro 双语视觉预览：首页、分类总览和四类项目详情，共 12 个中英文页面。其他板块与旧词典迁移仍待实施。

## 运行新站

使用 `.nvmrc` 对应 Node 版本，执行 `npm ci`，再运行 `npm run dev`。以终端打印的地址为准，访问 `/zh-cn/` 或 `/en/`。Astro 7 开发服务在后台运行，可用 `npx astro dev stop` 停止。

验证：`npm run check`、`npm run build`、`npm run verify`。构建产物在 `dist/`，不纳入 Git。

- [双语规范与预览范围](docs/bilingual-preview.md)
- [页面效果图与验证记录](docs/preview-review.md)

## 从哪里开始

- [12 个板块的布局与内容分层](docs/page-content-architecture.md)
- [五种代表页面线框](docs/layout-wireframes.md)
- [站点总规划：12 项主题、四条路线与提示词](docs/site-blueprint.md)
- [产品需求与站点结构](docs/product-requirements.md)
- [内容规划与写作标准](docs/content-plan.md)
- [新站视觉规范](docs/design-system.md)
- [技术选型与架构决策](docs/architecture.md)
- [实施计划](tasks/plan.md)
- [任务与进度](tasks/todo.md)

## 现有文件

| 路径 | 定位 |
| --- | --- |
| `vibe-ui-dictionary/index.html` | 当前可打开的组件词典入口；迁移时以此为准 |
| `组件词典/` | 历史副本和一次性补丁工具，保留作参考；不作为新站点构建流程 |
| `docs/UI 组件大全.md` | 原始内容资料，保留原文；不是逐条核验过的发布稿 |
| `docs/`、`tasks/` | 新站点的需求、设计与实施记录 |

目前可直接用浏览器打开 `vibe-ui-dictionary/index.html`。需要本地 HTTP 预览时，在仓库根运行 `python3 -m http.server 8000 --bind 127.0.0.1 --directory vibe-ui-dictionary`，访问 `http://127.0.0.1:8000`，结束后按 Ctrl+C。新站预览与旧词典独立。

历史补丁脚本使用搬动前的绝对路径，且独立演示代码与 HTML 不完全一致，勿将其用于更新正式入口。复制反馈和部分演示交互仍有已知缺口，见任务表。

## Git 约定

保留原 `master` 历史，筹备工作位于 `rouice/vibecoding-site-foundation`。新功能使用 `rouice/` 前缀分支，按需求、设计、实现、验证、提交、推送的顺序推进。

2026-09-23 整理时发现 `docs/.git` 是无提交、无远程的嵌套仓库，其元数据已移到根仓库 `.git/local-backups/docs.git` 本地备份；文档由根仓库统一跟踪。该备份不随克隆传播，现有文档内容已纳入提交。

当前未配置远程仓库，本次仅本地提交。后续确定远程地址后再关联与推送。操作系统文件、依赖、构建产物、环境密钥和任务临时文件通过 `.gitignore` 排除；不把业务源码加入忽略列表来伪造干净状态。
