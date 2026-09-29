# 第一版工程审计与整改

范围：第一版内容与视觉冻结；审计源代码、样式、配置、依赖锁、浏览器状态、测试、构建、GitHub发布与授权。保留用户README.zh-CN.md和UI审计目录未提交工作。
标准：环境可复现、运行代码可维护、类型与外部输入有约束、核心行为可验证、部署失败关闭、版本可追溯、授权与维护责任清楚。测试不代替真人使用验收。

| 编号 | 发现与证据 | 修正 |
|---|---|---|
| E01 | GitHub license=null，仓库无LICENSE | 用户确认MIT，添加许可证及第三方权利边界 |
| E02 | main/protection返回未保护 | 已启用检查与PR保护，禁止强推/删分支 |
| E03 | Dependabot安全更新disabled，无更新配置 | 启用安全更新、npm与Actions定期更新 |
| E04 | Actions使用浮动主版本，旧运行器提示Node20退役，无job超时 | 固定官方发布SHA、明确超时及最小权限 |
| E05 | format仅涵盖3个共享组件，多数组件未纳入 | 扩展自有Astro/TS/CSS源码格式门禁 |
| E06 | Navigation/PracticeGuide/NodePage/ComponentDemo/ResourceLibrary多个style块 | 保留规则顺序合并为每组件单一style块，增加结构门禁 |
| E07 | Communication/ComponentDemo的双语数组使用as any | 使用明确双语元组类型，禁止回归 |
| E08 | lock引用第三方镜像，本地audit端点404 | 统一官方npm地址，锁定版本与integrity保持不变，增加官方审计入口 |
| E09 | 缺贡献、漏洞报告、发布回退约定 | 补文档并统一质量检查命令 |
| E10 | 新增资料网格及节点顶部没有自动行为回归 | 补单/多步骤目录与资料展开、响应式测试 |

已核对：TS strict、Node锁定、npm锁文件、CI根路径/Pages子路径验证、项目身份隔离、恢复事务、折叠持久化、模板安全渲染、生成产物忽略。set:html用于固定教学标题和仓库内调研HTML，不接收用户输入；旧demo使用预定义图标表。未发现需重构为后端的理由。

依赖：2026-09-30官方npm审计0已知漏洞；不等于没有未知漏洞。静态站无服务端数据库与登录后端，相关服务端部署检查不适用。公开仓库secret scanning及push protection已启用；本轮不枚举或输出真实凭据。

## 整改验证

- 干净npm ci通过；quality（格式、lint、Astro检查、工程结构及状态测试）通过。Astro 0错误0警告，保留原始demo的6条提示，不在本次改变演示行为。
- 根路径build+16组verify通过；正式子路径2383个HTML的链接与资源验证通过。
- 独立4344预览实际运行折叠重载、模板确认失效/保存/切换语言、按钮与间距、双标签项目归属、无效备份拒绝及有效恢复；全部通过。英文手机资料库单列无溢出且node参数自动展开正常。
- 第一版示例页面外观人工复核，未重做内容与视觉；desktop.png为实际页面。源码大量diff来自统一格式，原始demo皮肤未格式化。
- GitHub依赖安全更新、漏洞警报、私密漏洞报告已启用；main要求validate检查及PR，对管理员生效，不要求其他人审批，禁止强推/删除。
- MIT文本来源：https://choosealicense.com/licenses/mit/；保护规则依据：https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches 。开源授权不覆盖第三方商标和引用材料，见THIRD_PARTY_NOTICES.md。
- 发布采用本次关联PR→validate→合并main→Pages部署；最终远端执行证据以PR与Actions记录为准，交付时核对线上内容。

## 剩余边界

原始demo中旧API提示、第三方产品截图与标识的再分发条件、真实零基础学员理解验收不由工程测试自动证明。外部资料遵守原权利条件；本轮未清理用户已有未提交审计草稿。不宣称不存在未知安全问题。

## 追加：手机首页卡片重叠

手机端固定top坐标未随第二张卡片文字换行调整，导致第三张覆盖第二张。900px及以下改为按内容高度排列，保持24px间距；桌面布局保留。中英文320/390/430px实际浏览器均验证两处间距24px、卡片完整包含且无横向溢出，截图mobile-home.png。增加对应浏览器回归，根路径构建与16组校验通过；随同本次PR发布。
