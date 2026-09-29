# 全仓库工程化与代码规范审计

审计日期：2026-09-29。基线：67a5594，rouice/beginner-learning-redesign。工作目录为 b85c 工作树；README.zh-CN.md 和 2026-09-28-ui-audit 为用户已有工作，未改动。本轮只审计并保存报告，不修复业务代码或发布。

## 结论

项目已经具备静态站点构建、TypeScript strict 配置、双语内容验证、GitHub Pages 发布和部分行为单元测试。主要短板是浏览器数据隔离、失败恢复、运行环境一致性，以及多份教学数据和覆盖式修改的维护方式。继续增加校验条目不足以弥补这些缺口。

确认 10 项发现：1 项 P1、7 项 P2、2 项 P3。P1 应优先解决；P2 分小批修复；P3 不建议夹带在内容修改中进行全仓格式化。没有发现需要重做网站架构或 UI 的依据。

## 范围和证据强度

| 范围 | 本轮方法 | 边界 |
|---|---|---|
| 仓库结构、配置、依赖、CI | 跟踪文件清单、package/lock/tsconfig/Astro/Pages 流程检查 | 未读取远程分支保护或组织策略 |
| 浏览器状态与项目材料 | 深读全部 7 个 src/scripts 文件及关联组件；真实函数的隔离存储夹具复现 | 没有操作用户真实 localStorage；多标签问题通过共享存储模型复现 |
| 内容与页面结构 | 核对路由、共享组件、内容组成、验证脚本、样式覆盖与打包产物 | 全仓结构覆盖不等于逐条人工审校所有词典文案 |
| 示例与输入安全 | 检查 iframe sandbox/CSP、内联序列化、Flask 输入验证和参数化 SQL | 未做渗透测试、Python 全依赖漏洞扫描或外部服务测试 |
| 自动化质量 | 本轮重跑 check 与全部 16 组 verify | 使用同一 HEAD 上轮构建的 dist；没有重新发布 |

本轮 check：0 errors、0 warnings、8 hints。verify 全部通过。这些绿灯与下面的已复现缺陷同时成立，说明现有检查尚未覆盖对应失败路径。

npm 官方 registry 审计返回 0 个已知漏洞（截至本次执行）。原 npm 镜像返回审计接口 404，随后仅在本次命令指定官方 registry 重试，没有修改用户 npm 配置。这个结果不代表项目没有安全风险，也不覆盖 Python 依赖。

## 已复现缺陷

### F01 · P1 · 多标签切换项目可能把旧页面资料写入另一个项目

位置：src/scripts/project-storage.ts:4–6；src/scripts/learning.ts:9；src/scripts/templates.ts:6–10。

每次读写都重新读取全局 localStorage 中的 activeProject。旧页面已经加载的表单与学习 state 仍属于项目 A，而另一标签页切换到项目 B 后，旧页面的下一次自动保存会动态选择 B 的命名空间。页面没有绑定加载时的项目 ID，也没有 storage 事件校验。

复现：创建 A 并保存；保留代表 A 编辑器的内存内容；创建并切换 B；从旧编辑器调用 projectStorage.setItem。B 的记录变成 A 内容，断言成立。不是请求改进交互，而是项目隔离的完整性错误。

建议：存储句柄绑定页面加载时的 projectId；跨标签切换时明确刷新或阻止旧页写入。验收必须包含两标签相互切换后各自保存、草稿和进度都不串项目。

### F02 · P2 · 恢复失败没有回滚已经写入的新项目键

位置：src/scripts/project-storage.ts:12。

restoreProject 逐键写入副本后，再写项目目录和活动项目。catch 只恢复活动项目 ID，不删除本次已写的键。模拟目录写入失败后，残留两条无目录项目的数据。原项目没被覆盖，但配额仍被占用，重试会继续累积残留。

建议：记录本次新增键，失败时清理本次键并恢复目录状态；不能清理既有项目。给逐键失败、目录失败、活动键失败分别做故障注入测试。

### F03 · P2 · 声明支持的 Node 最低版本无法运行验证脚本

位置：package.json:8（>=22.12.0）、package.json:15（verify）；.nvmrc:1（26.7.0）；.github/workflows/pages.yml:18（22）。

在 Node v22.12.0 实际执行 verify-learning-handoffs.mjs，直接导入 .ts 文件时报 ERR_UNKNOWN_FILE_EXTENSION。当前本机 Node v26.7.0 通过。CI 的浮动 22 与声明的 22.12 最低版本不能视为相同环境；本结论不声称当前 CI 必然失败。

建议：统一受支持的 Node 版本与本地/CI约定，或为 TS 测试入口配置明确的运行器；最低受支持版本加入测试。证据见 node22-floor.txt。

### F04 · P2 · 返回页面只恢复“打开”，没有恢复“关闭”

位置：src/scripts/navigation.ts:8。

保存记录列出打开的 details 索引；恢复时只给记录中的元素设 open=true，没有先关闭其余元素。已保存 open=[]，但 HTML 默认打开的03仍保持打开，复现成立。按元素索引识别还会在插入新的 details 后错配。

建议：为折叠区使用稳定标识，并同时恢复 true/false。验收包括全部收起后返回、部分打开后返回、包含深链接的优先顺序；不要影响学习完成状态。

## 工程化风险

### F05 · P2 · 把文案标点当作数据协议，类型检查无法保护

位置：src/components/NodeStep.astro:94–101；src/data/micro-actions.ts:5–9。

组件依赖换行加“建议提示词：”“完成后：”拆分内容；英文另有一组带空格的标记。微操作类型只有 action 字符串，JSON又经过 as unknown as Copy 强转。改一个冒号或换行可能让提示词与结果不能正确拆分，编译仍成功。

建议：使用 action/prompt/expected/recovery 的显式双语字段；标点只用于渲染。验证语言数量、必填字段和 ID，不让审校文案承担结构正确性。

### F06 · P2 · 同一教学动作有多份表达，最终值依赖覆盖顺序

位置：src/data/learning.ts:46–59；src/data/learning-prompt-review.ts；src/data/learning-contracts.ts:22–45；src/data/learning-support.ts；src/data/micro-checks.json；scripts/verify-guided-actions.mjs:6。

learning 先修改 base lesson、插入 additions，再 applyPromptReview 与 applyLearningContracts。旧 lesson.actions 仍在数据里，03实际取 stepSupport；操作结果又出现在 micro-checks、审查 JSON 和 actions.json。审查脚本直接读取日期型 review 目录，历史材料变成常规测试输入。一处改文案需要同步多处，删归档目录还可能破坏测试。

建议：每一步只有一份当前权威数据；审计快照由它生成且不作为运行或测试必需源。先迁移一个步骤并核对渲染等价，避免一次重写全站。

### F07 · P2 · 仓库内 CI 没有 PR/开发分支验证入口

位置：.github/workflows/pages.yml:2–5。

唯一工作流只响应 main push 或手动触发，因此普通 PR 更新不会由这份工作流自动校验，问题可能合并后才暴露。未访问 GitHub 分支保护设置，不能据此断言远程完全没有门禁。

建议：抽出只读验证 job，在 pull_request 运行；发布权限只留给 main 的 deploy job。最低 Node 版本和生产 base 两种构建应有明确的验证入口。

### F08 · P2 · 交互回归未形成仓库内可重复执行的浏览器测试

位置：package.json:15；scripts/verify-guided-actions.mjs；scripts/verify-learning-experience.mjs；docs/reviews 下的浏览器记录。

16组验证主要检查数据、HTML字符串和部分假 DOM 行为，已经有价值，但无法验证真实浏览器中的展开、焦点、剪贴板时序、刷新恢复、多标签隔离。截图和本次工具实测是证据，不会自动阻止下一次回归；F01/F04就是现有绿灯未覆盖的例子。

建议：只加少量关键浏览器流程：草稿确认与带入、折叠返回、两标签项目隔离、配额失败、生产子路径导航。保留已有内容检查，不以浏览器测试替换它们。

## 规范与维护成本

### F09 · P3 · 手写业务代码过度压缩，缺少自动格式与静态规范约束

位置：src/scripts/templates.ts、learning.ts、navigation.ts；src/pages/[locale]/[...page].astro；package.json scripts。

7个浏览器脚本总计161行，其中30行超过300字符，多项状态变化、异常分支和DOM操作挤在一行。package scripts没有format/lint入口；现有tsconfig strict不能替代可读性和行为规则检查。仓库没有发现独立的代码规范文档，因此这是维护建议，不冒称违反某条既定团队规则。

建议：新增最小格式规范，先格式化7个脚本和路由；格式提交与功能修复分开。再逐步引入适配Astro/TS的静态规则，重点约束隐式any、无效断言、空catch等具体风险。

### F10 · P3 · 样式通过多层后置覆盖维持，难以追踪真实来源

位置：src/layouts/Shell.astro:2–8；src/styles/interaction.css:4；src/styles/palette.css:5；src/components/NodeStep.astro多段style。

Shell顺序引入global/refinement/interaction/readability/palette；interaction的主按钮hover被palette用更高特异性和!important覆盖。src下CSS合计23处!important。近期step-hint隐藏规则也依赖后置样式，说明这种组织方式已经增加定位成本。不能仅按!important数量认定错误。

建议：收敛颜色等设计变量，组件基础样式集中，明确覆盖层顺序，移除已经被淘汰的声明。保持现有视觉，不重做UI；删除前做按钮/折叠视觉回归。

## 正向发现与非阻塞观察

- Astro strict配置有效；直接依赖和锁文件存在；Pages deploy权限与build分开。
- 示例iframe使用allow-scripts而没有allow-same-origin，并有CSP；示例JSON序列化转义小于号。
- 本机参考Flask程序限制监听127.0.0.1、关闭debug、校验输入长度、使用参数化SQL，不应把它误当已授权公网后端。
- 导航对站内返回路径有白名单处理，错误保存没有直接覆盖整个原项目。
- nodes客户端共享包约134,694字节，gzip约48,870字节，携带较多学习内容。可拆路由元数据与教学正文，但没有基于这项体积声称用户性能已不达标。

## 推荐整改顺序

1. F01、F02、F04：先补失败回归，再修存储隔离、恢复回滚和折叠恢复。
2. F03、F07、F08：统一执行环境，建立PR验证和少量可重复浏览器回归。
3. F05、F06：将教学数据逐步改成结构化单一来源，界面输出保持不变。
4. F09、F10：单独做格式与样式来源整理，不与内容扩写混在一个提交。

审计复现：Node 26.7.0下运行 `node docs/reviews/2026-09-29-engineering-audit/reproduce.mjs`，只使用进程内假存储，不访问真实浏览器资料。脚本证明当前缺陷，不是修复后的通过测试。
