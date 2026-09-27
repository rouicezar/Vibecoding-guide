# Vibe Guide

**English** | [简体中文](README.zh-CN.md)

Turn your idea into a real project with AI, even if you have never written code.

Vibe Guide helps beginners describe an idea, choose an AI coding tool, plan development, build and test a first version, and prepare for delivery and maintenance. Each learning step explains what to do, why it matters, what to check, and how to recover when something goes wrong.

**[Visit the website](https://rouicezar.github.io/Vibecoding-guide/en/)** · [中文站点](https://rouicezar.github.io/Vibecoding-guide/zh-cn/)

## What you can explore

- **A complete roadmap:** six learning stages and 31 actions, with expandable explanations and troubleshooting.
- **Editable prompt templates:** add your project details, confirm the result, and copy it into your AI tool.
- **Tools and project choices:** compare workflows, project types, technical options, costs, and limitations.
- **A resource library:** 212 UI component entries with examples, plus development and delivery guidance.
- **A plain-language glossary:** 755 terms with everyday examples and supporting diagrams.
- **What people are building:** research into AI use cases and possible revenue, 19 GitHub references, and 50 project directions grouped by scenario.

Project drafts and progress are stored in your browser, with export and restore support. They are not automatically synchronized across devices or between localhost and the public website. Recorded progress is your own confirmation, not an independent assessment of your project.

The research section currently contains Chinese research content with a notice on English routes. Project ideas are hypotheses to validate; revenue is not guaranteed.

## Run locally

Use the Node.js version specified in `.nvmrc`.

```sh
npm ci
npm run dev
```

Open the address printed in the terminal and visit `/en/` or `/zh-cn/`.

To build and preview the production site, including the full-text search index:

```sh
npm run build
npm run preview -- --port 4324
```

Build output is written to `dist/` and is not committed. Full-text search requires the production build; development mode provides navigation shortcuts as a fallback.

## Verify changes

```sh
npm run check
npm run build
npm run verify
```

Checks cover generated pages, internal links, templates, learning-state behavior, content coverage, and research preservation. Passing these checks does not prove that every external tool, device workflow, or project idea has been independently tested by a beginner.

## Deployment

The site is hosted on GitHub Pages. Pushes to `main` trigger [.github/workflows/pages.yml](.github/workflows/pages.yml), which checks the project, builds it, verifies the `/Vibecoding-guide/` deployment paths, and publishes the site over HTTPS.

The local build uses `/`; the Pages build uses `SITE_BASE=/Vibecoding-guide`. The workflow prepares public asset paths and generates the Pagefind index for that deployment.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/components/` | Site pages and shared UI |
| `src/data/` | Learning steps, prompts, glossary, and research |
| `src/scripts/` | Navigation, browser drafts, and interactions |
| `public/` | Public assets and downloadable research materials |
| `scripts/` | Content and build verification |
| `docs/`, `tasks/` | Requirements, design, implementation, and review records |
| `vibe-ui-dictionary/` | Legacy dictionary retained as a content reference |
| `组件词典/` | Historical copies and one-time migration tools; not part of the current build |

## Documentation

Most project documentation is currently in Chinese.

- [Requirements](docs/product-requirements.md)
- [Site blueprint](docs/site-blueprint.md)
- [Content architecture](docs/page-content-architecture.md)
- [Writing standards](docs/content-plan.md)
- [Design system](docs/design-system.md)
- [Technical architecture](docs/architecture.md)
- [Implementation plan](tasks/plan.md) and [task records](tasks/todo.md)
- [Research implementation and verification](docs/reviews/2026-09-27-explore/实施记录.md)
- [GitHub Pages deployment record](docs/reviews/2026-09-27-pages/发布记录.md)

## Development workflow

Use `rouice/`-prefixed branches and follow requirements → design → implementation → testing → commit → push. Keep credentials, dependencies, generated files, and temporary work out of Git. Historical migration scripts may contain obsolete paths; do not use them to update the current site.
