# Vibe Guide · Vibe Coding 实践指南

> 当前路线：6 个阶段、18 个节点、31 个动作。[统一表达与当前基线](docs/current-route.md)。

[English](README.md) | **简体中文**

即使没有编程基础，也能跟着步骤，用 AI 把想法做成一个真实的项目。

Vibe Guide 帮助新手整理想法、选择 AI 编程工具、制定开发计划、开发并测试第一版，直到准备交付与持续维护。每一步说明做什么、为什么这样做、如何检查结果，以及遇到问题后怎样继续。

**[访问中文站点](https://rouicezar.github.io/Vibecoding-guide/zh-cn/)** · [English website](https://rouicezar.github.io/Vibecoding-guide/en/)

## 可以在这里找到什么

- **完整路线图：**6 个阶段、18 个节点、31 个动作，按需展开概念解释与排障帮助。
- **可编辑提示词模板：**补充自己的项目信息，确认生成后复制给 AI 工具。
- **工具与项目选择：**比较使用方式、项目类别、技术方案、费用和限制。
- **资料库：**212 个 UI 组件词条及示例，以及开发和交付指导。
- **白话术语：**755 个专业术语，配合生活化举例与辅助图解。
- **大家在做什么：**AI 使用场景与可能收益的调研、19 个 GitHub 项目参考，以及按场景分组的 50 个项目方向。

项目草稿和进度保存在当前浏览器，可导出和恢复，不会自动在设备之间或本地预览与线上站点之间同步。进度由使用者自行确认，不代表站点已独立验收你的项目。

调研内容目前以中文提供，英文路径中有相应提示。项目方向是有待验证的想法，不保证获得收益。

## 本地运行

使用 `.nvmrc` 指定的 Node.js 版本。

```sh
npm ci
npm run dev
```

打开终端打印的地址，访问 `/zh-cn/` 或 `/en/`。

构建并预览包含全文搜索索引的生产版本：

```sh
npm run build
npm run preview -- --port 4324
```

构建产物位于 `dist/`，不纳入 Git。全文搜索需要生产构建；开发模式提供板块快捷入口作为回退。

## 验证修改

```sh
npm run check
npm run build
npm run verify
```

检查覆盖生成页面、站内链接、模板、学习状态行为、内容覆盖与调研内容完整性。检查通过不代表所有外部工具、真机操作或项目方向都已由零基础用户独立验证。

## 部署上线

站点托管在 GitHub Pages。推送到 `main` 后，[.github/workflows/pages.yml](.github/workflows/pages.yml) 会自动检查、构建、验证 `/Vibecoding-guide/` 部署路径，并通过 HTTPS 发布。

本地构建使用 `/`；Pages 构建使用 `SITE_BASE=/Vibecoding-guide`。发布流程会适配公共资源路径，并为部署版本生成 Pagefind 搜索索引。

## 项目结构

| 路径 | 用途 |
| --- | --- |
| `src/components/` | 站点页面与共享界面组件 |
| `src/data/` | 学习步骤、提示词、术语与调研内容 |
| `src/scripts/` | 导航、浏览器草稿与交互逻辑 |
| `public/` | 公共资源与可下载的调研资料 |
| `scripts/` | 内容与构建验证 |
| `docs/`、`tasks/` | 需求、设计、实施与检查记录 |
| `vibe-ui-dictionary/` | 保留作内容参考的旧词典 |
| `组件词典/` | 历史副本与一次性迁移工具，不参与当前构建 |

## 项目文档

项目文档目前以中文为主。

- [产品需求](docs/product-requirements.md)
- [站点规划](docs/site-blueprint.md)
- [内容分层](docs/page-content-architecture.md)
- [写作标准](docs/content-plan.md)
- [视觉规范](docs/design-system.md)
- [技术架构](docs/architecture.md)
- [零基础学习路径整改计划](docs/beginner-rectification-plan.md)（2026-09-26，六阶段版）
- [以 18 节点路线为基线的整改与内容补充方案](docs/18-node-route-remediation-plan.md)（2026-09-28，R1+R2 已实施）
- [18 节点页信息结构统一：实施记录](docs/reviews/2026-09-28-node-structure/实施记录.md)（2026-09-28）
- [全流程通畅性审查：从想法到上线](docs/reviews/2026-09-28-flow-completeness/审查报告.md)（2026-09-28，含实施结果）
- [实施计划](tasks/plan.md)与[任务记录](tasks/todo.md)
- [调研板块实施与验证记录](docs/reviews/2026-09-27-explore/实施记录.md)
- [GitHub Pages 发布记录](docs/reviews/2026-09-27-pages/发布记录.md)

## 开发流程

使用 `rouice/` 前缀分支，按需求 → 设计 → 实现 → 测试 → 提交 → 推送的顺序推进。凭据、依赖、构建产物和临时文件不纳入 Git。历史迁移脚本可能含过时路径，不应用于更新当前站点。
