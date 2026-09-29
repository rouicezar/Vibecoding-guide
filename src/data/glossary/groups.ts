import type { Copy } from '../site';
export interface TermGroup {
  id: string;
  name: Copy;
  where: Copy;
  action: Copy;
  caution: Copy;
  path: string;
  source: string;
  diagram?: string;
}
const mdn = 'https://developer.mozilla.org/en-US/docs/Glossary';
const git = 'https://git-scm.com/docs/gitglossary';
export const termGroups: TermGroup[] = [
  {
    id: 'product',
    name: ['项目与产品', 'Project & product'],
    where: [
      '准备想法与确认第一版时。',
      'When describing an idea and defining version one.',
    ],
    action: [
      '写清用户、问题、第一版功能和可检查结果，再让AI补问缺失信息。',
      'Record users, the problem, first-version scope, and observable outcomes; ask AI about gaps.',
    ],
    caution: [
      '原型能点不代表功能真实可用；MVP也必须完成核心流程。',
      'A clickable prototype need not be functional; an MVP still needs its core flow.',
    ],
    path: 'learn/idea',
    source: 'https://www.agilealliance.org/agile101/',
    diagram: 'scope',
  },
  {
    id: 'documents',
    name: ['文档与开发计划', 'Documents & planning'],
    where: [
      '把想法交给AI、确认任务与验收要求时。',
      'When handing an idea to AI and agreeing on tasks.',
    ],
    action: [
      '把当前决定写入项目文件，核对是否包含实际功能、通过条件和本次不做的内容。',
      'Save decisions in project files and check features, acceptance criteria, and exclusions.',
    ],
    caution: [
      '文档是可检查的约定，写得长不等于需求清楚；相关文档要保持一致。',
      'Length does not guarantee clarity; related documents must agree.',
    ],
    path: 'learn/requirements',
    source: 'https://www.agilealliance.org/glossary/user-stories/',
    diagram: 'scope',
  },
  {
    id: 'models',
    name: ['AI与大模型', 'AI & models'],
    where: [
      '选择模型、阅读模型说明和判断回答时。',
      'When selecting models and evaluating answers.',
    ],
    action: [
      '用自己的小任务试用，核对输出事实与实际结果，再判断是否适合。',
      'Try a small real task and check facts and results before choosing.',
    ],
    caution: [
      '生成流畅不等于事实正确；参数规模或思考时间也不能单独证明能力。',
      'Fluency, model size, or thinking time alone does not prove correctness.',
    ],
    path: 'tools',
    source: 'https://platform.claude.com/docs/en/about-claude/models/overview',
    diagram: 'agent-system',
  },
  {
    id: 'context',
    name: ['提示词与上下文', 'Prompts & context'],
    where: [
      '向AI交代任务、补充文件和换会话时。',
      'When instructing AI, attaching material, or changing sessions.',
    ],
    action: [
      '给出当前目标、实际文件、限制和检查条件；不确定信息明确写未知。',
      'Provide goals, actual files, constraints, and checks; label unknowns.',
    ],
    caution: [
      '模型只能利用实际获得的内容；资料上传、建立索引和本次读取是不同动作。',
      'Uploading, indexing, and actually reading material are different actions.',
    ],
    path: 'communicate',
    source:
      'https://platform.claude.com/docs/en/build-with-claude/context-windows',
    diagram: 'context',
  },
  {
    id: 'agents',
    name: ['Agent、Skill与MCP', 'Agents, skills & MCP'],
    where: [
      '给AI增加能力、授权工具或自动执行任务时。',
      'When extending or authorizing AI task execution.',
    ],
    action: [
      '先确认要解决的任务，再核对所需工具、权限和输出检查，使用最小必要授权。',
      'Identify the task, tools, permissions, and checks; grant only necessary access.',
    ],
    caution: [
      'Skill不是另一个模型，MCP不是插件商店；能连接服务不等于获准执行所有动作。',
      'A skill is not a model, and MCP is not a plugin store; connectivity is not unlimited authorization.',
    ],
    path: 'communicate',
    source: 'https://modelcontextprotocol.io/docs/getting-started/intro',
    diagram: 'agent-system',
  },
  {
    id: 'agent-files',
    name: ['AI规则文件与协议', 'AI files & protocols'],
    where: [
      '创建项目规则、安装技能或连接服务时。',
      'When configuring rules, skills, or service connections.',
    ],
    action: [
      '查当前工具是否支持该文件或协议，并确认实际加载范围，不只看文件是否存在。',
      'Check tool support and actual loading scope, not merely file existence.',
    ],
    caution: [
      '不同工具的读取规则和优先级可能不同；外部文档不自动获得指挥工具的权限。',
      'Loading and precedence vary by tool; external documents do not automatically gain authority.',
    ],
    path: 'learn/checkpoint',
    source: 'https://agentskills.io/home',
    diagram: 'agent-system',
  },
  {
    id: 'billing',
    name: ['账号、费用与额度', 'Accounts, costs & limits'],
    where: [
      '注册、订阅、接入API或遇到限额提示时。',
      'When subscribing, using APIs, or hitting limits.',
    ],
    action: [
      '在当前账号控制台核对计费项目、用量、周期与限额行为，先做少量调用。',
      'Check current billing, usage, periods, and limit behavior; begin with small requests.',
    ],
    caution: [
      '不在词条里写固定价格；聊天订阅与API收费可能分开，预算提醒不一定会停机。',
      'Prices are not fixed here; subscriptions and APIs may bill separately, and alerts may not stop usage.',
    ],
    path: 'tools',
    source: 'https://platform.claude.com/docs/en/api/rate-limits',
    diagram: 'billing',
  },
  {
    id: 'retrieval',
    name: ['知识库与检索', 'Knowledge & retrieval'],
    where: [
      '让AI依据文档回答或处理大量资料时。',
      'When grounding answers in documents.',
    ],
    action: [
      '用已知答案的问题检查检索结果、来源和回答，分别判断是否找对和是否答对。',
      'Use known-answer questions to check retrieval, sources, and the final answer separately.',
    ],
    caution: [
      '找到相似内容不等于找到正确证据；RAG不会自动把资料训练进模型。',
      'Similarity is not correctness; RAG does not automatically train documents into a model.',
    ],
    path: 'communicate',
    source: 'https://www.anthropic.com/engineering/contextual-retrieval',
    diagram: 'retrieval',
  },
  {
    id: 'environment',
    name: ['开发工具与环境', 'Tools & environment'],
    where: [
      '创建文件夹、安装工具、运行命令时。',
      'When creating folders, installing tools, and running commands.',
    ],
    action: [
      '先核对系统、工作目录、命令用途和预期结果；失败时保留报错原文。',
      'Check OS, working directory, purpose, and expected result; retain exact errors.',
    ],
    caution: [
      '终端不是Shell，项目目录不是系统根目录；切换目录会改变命令作用位置。',
      'Terminal and shell differ; a project root is not the filesystem root.',
    ],
    path: 'learn/environment',
    source: 'https://code.visualstudio.com/docs/terminal/basics',
    diagram: 'environment',
  },
  {
    id: 'code',
    name: ['编程与代码基础', 'Code fundamentals'],
    where: [
      '阅读AI解释、修改代码或排查报错时。',
      'When reading code explanations or diagnosing errors.',
    ],
    action: [
      '把术语对应到项目中的具体文件和一小段代码，让AI说明输入、输出及失败情况。',
      'Locate a small code example in the project; explain inputs, outputs, and failures.',
    ],
    caution: [
      '不同语言的细节可能不同；此处是理解入口，不把生活类比当语法规则。',
      'Language details differ; analogies are not syntax rules.',
    ],
    path: 'communicate',
    source: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
  },
  {
    id: 'stack',
    name: ['前后端与技术栈', 'Architecture & stack'],
    where: [
      '讨论项目由哪些部分组成、如何运行时。',
      'When choosing the parts needed to run a project.',
    ],
    action: [
      '让AI按实际功能和设备说明每项技术的作用，再检查能否启动一条最小流程。',
      'Ask what each technology does for actual requirements, then run a minimal flow.',
    ],
    caution: [
      '使用框架不会自动得到完整功能；依赖越多也不一定越合适。',
      'A framework does not create finished features; more dependencies are not always better.',
    ],
    path: 'stacks',
    source: mdn,
    diagram: 'restaurant',
  },
  {
    id: 'technologies',
    name: ['常见语言与框架', 'Languages & frameworks'],
    where: [
      '看到安装命令、技术方案或项目依赖时。',
      'When reading setup commands, plans, or dependencies.',
    ],
    action: [
      '先辨认它是语言、运行时、库还是工具；已有项目优先理解现有组合。',
      'Identify whether it is a language, runtime, library, or tool; understand the existing stack first.',
    ],
    caution: [
      '这是名称辨认，不是排名。具体版本、兼容性与选择需按项目核对。',
      'This is identification, not a ranking; verify versions and compatibility for the project.',
    ],
    path: 'stacks',
    source: mdn,
  },
  {
    id: 'platforms',
    name: ['网站、App与项目形态', 'Project platforms'],
    where: [
      '决定项目在哪里打开、如何安装和交付时。',
      'When deciding how people access and install a project.',
    ],
    action: [
      '写清设备、入口、离线要求和系统能力，再查看项目分类中的适用与不适用条件。',
      'List devices, entry points, offline needs, and system capabilities; compare project types.',
    ],
    caution: [
      '网页在手机打开不等于原生App；跨平台也不等于无需分别测试。',
      'A mobile website is not a native app; cross-platform software still needs platform tests.',
    ],
    path: 'start',
    source: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps',
    diagram: 'delivery',
  },
  {
    id: 'design',
    name: ['界面与体验设计', 'UI & experience'],
    where: [
      '描述页面、看设计稿或调整阅读体验时。',
      'When describing and reviewing interface design.',
    ],
    action: [
      '同时说明页面内容、主要操作、状态和手机表现，再用实际操作核对。',
      'Specify content, main actions, states, and mobile behavior, then try them.',
    ],
    caution: [
      '好看与好用需分别验证；图标和颜色不能成为唯一的信息来源。',
      'Appearance and usability need separate checks; do not rely on color or icons alone.',
    ],
    path: 'components',
    source: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/',
    diagram: 'interface',
  },
  {
    id: 'ui-states',
    name: ['组件与交互状态', 'Components & states'],
    where: [
      '按钮点击、表单提交、加载或报错时。',
      'When interacting with controls, loading, or handling errors.',
    ],
    action: [
      '分别检查正常、空白、等待、失败和恢复；需要实物演示时打开组件词典。',
      'Check normal, empty, pending, failed, and recovery states; use the component dictionary.',
    ],
    caution: [
      '提示成功必须对应真实结果；禁用、隐藏与服务器权限校验不是一回事。',
      'Success feedback must reflect reality; hiding a control is not server authorization.',
    ],
    path: 'components',
    source: 'https://www.w3.org/WAI/ARIA/apg/patterns/',
    diagram: 'interface',
  },
  {
    id: 'browser',
    name: ['浏览器与前端运行', 'Browser behavior'],
    where: [
      '页面刷新、路由跳转、数据保存或跨域报错时。',
      'When navigating, storing data, or handling browser errors.',
    ],
    action: [
      '在实际浏览器中检查地址、数据来源与保存位置；换设备时单独核对。',
      'Check addresses, data sources, and storage in the browser; verify another device separately.',
    ],
    caution: [
      '浏览器本地存储不是自动云备份；跨域限制不能靠关闭安全保护作为正式修复。',
      'Browser storage is not automatic cloud backup; disabling safeguards is not a production CORS fix.',
    ],
    path: 'data',
    source: mdn,
    diagram: 'restaurant',
  },
  {
    id: 'network',
    name: ['API与网络通信', 'APIs & networking'],
    where: [
      '连接登录、AI、支付等外部服务时。',
      'When connecting external services such as login, AI, or payment.',
    ],
    action: [
      '记录请求地址、方法、输入、输出与错误处理；先用无敏感数据的最小调用核对。',
      'Record endpoint, method, inputs, outputs, and failures; test with non-sensitive data.',
    ],
    caution: [
      '收到HTTP成功码不一定代表业务成功；重试写入或支付前要防止重复。',
      'HTTP success may not mean business success; retries must avoid duplicate writes or charges.',
    ],
    path: 'data',
    source: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
    diagram: 'request',
  },
  {
    id: 'data',
    name: ['数据库与文件存储', 'Data & storage'],
    where: [
      '实现保存、查询、共享和备份时。',
      'When saving, querying, sharing, and backing up data.',
    ],
    action: [
      '先确定保存哪些数据、谁能访问、如何恢复；用新增、重开、查询核对实际持久化。',
      'Define data, access, and recovery; test creation, reopening, and retrieval.',
    ],
    caution: [
      '界面出现记录不代表已持久保存；备份需要验证恢复，迁移不是随意清库。',
      'Visible data is not proof of persistence; test restoration and preserve data during migrations.',
    ],
    path: 'data',
    source: 'https://www.postgresql.org/docs/current/tutorial.html',
    diagram: 'ledger',
  },
  {
    id: 'architecture',
    name: ['后端与系统结构', 'Backend systems'],
    where: [
      '安排服务职责、后台任务和多人同时使用时。',
      'When organizing services, background work, and concurrent use.',
    ],
    action: [
      '让AI画出当前请求经过的部分，先验证最小完整流程，再根据证据考虑拆分。',
      'Map the current request path and validate a minimal flow before adding complexity.',
    ],
    caution: [
      '拆成多个服务会增加协调成本；Serverless仍有服务器和使用费用。',
      'Multiple services add coordination cost; serverless still uses servers and incurs charges.',
    ],
    path: 'stacks',
    source: mdn,
    diagram: 'restaurant',
  },
  {
    id: 'security',
    name: ['账号、权限与安全', 'Identity & security'],
    where: [
      '登录、共享数据、设置密钥和访问权限时。',
      'When signing in, sharing data, and configuring secrets.',
    ],
    action: [
      '保管真实凭证，用不同账号测试可访问和不可访问的情况；敏感值不放公开前端或仓库。',
      'Protect credentials and test both allowed and denied access; keep secrets out of public code.',
    ],
    caution: [
      '身份验证与授权不同；前端藏按钮不能代替服务端权限检查，签名也不等于加密。',
      'Authentication differs from authorization; hidden buttons are not access control, and signing is not encryption.',
    ],
    path: 'data',
    source: 'https://cheatsheetseries.owasp.org/',
    diagram: 'access',
  },
  {
    id: 'git',
    name: ['Git与代码协作', 'Git & collaboration'],
    where: [
      '保存版本、同步远端、合并或恢复代码时。',
      'When versioning, synchronizing, merging, or restoring code.',
    ],
    action: [
      '修改前看状态和分支，提交前看差异；执行重置或改写历史前核对是否会丢失成果。',
      'Check status and branch, review diffs, and assess loss before resets or history rewrites.',
    ],
    caution: [
      '保存、提交、推送、部署是不同动作；Git不自动保存数据库内容。',
      'Saving, committing, pushing, and deploying differ; Git does not automatically back up databases.',
    ],
    path: 'communicate/setup',
    source: git,
    diagram: 'git',
  },
  {
    id: 'testing',
    name: ['测试与排错', 'Testing & debugging'],
    where: [
      '检查AI结果、反馈问题和修复复测时。',
      'When checking AI work, reporting issues, and retesting fixes.',
    ],
    action: [
      '写出实际操作、预期、实际结果和证据；修复后重做失败步骤并检查相邻流程。',
      'Record actions, expectations, outcomes, and evidence; retest the failure and adjacent flows.',
    ],
    caution: [
      'AI说通过、自动测试通过和本人验收通过是不同证据；覆盖率高也不保证无缺陷。',
      'AI claims, automated checks, and personal acceptance differ; coverage does not prove correctness.',
    ],
    path: 'check',
    source: 'https://playwright.dev/docs/best-practices',
    diagram: 'testing',
  },
  {
    id: 'release',
    name: ['构建、部署与发布', 'Build & release'],
    where: [
      '从本机运行转为真实交付时。',
      'When moving from local work to real delivery.',
    ],
    action: [
      '确认目标环境、启动配置、测试入口、数据备份和回退方案；从真实入口再次核对流程。',
      'Confirm environment, startup, data protection, and rollback; test the real entry.',
    ],
    caution: [
      '构建成功不等于部署成功，部署成功也不等于用户能完成任务。',
      'A successful build does not prove deployment or user success.',
    ],
    path: 'launch',
    source:
      'https://docs.github.com/en/actions/about-github-actions/understanding-github-actions',
    diagram: 'delivery',
  },
  {
    id: 'cloud',
    name: ['服务器、云与容器', 'Cloud & containers'],
    where: [
      '选托管服务、配置服务器或使用Docker时。',
      'When choosing hosting, configuring servers, or using containers.',
    ],
    action: [
      '核对运行方式、持久存储、网络入口与费用，用目标环境实际启动并检查。',
      'Check runtime support, persistence, networking, and costs; test in the target environment.',
    ],
    caution: [
      '容器删掉后临时数据可能消失；本地能运行不证明云端配置正确。',
      'Ephemeral container data can disappear; local success does not validate cloud configuration.',
    ],
    path: 'launch',
    source: 'https://docs.docker.com/get-started/',
    diagram: 'delivery',
  },
  {
    id: 'operations',
    name: ['维护、监控与性能', 'Operations & performance'],
    where: [
      '上线后发现慢、报错或需要恢复时。',
      'When diagnosing slowness, errors, or recovery needs after launch.',
    ],
    action: [
      '记录时间、版本和症状，结合日志与指标判断；优化前后用同一条件对比。',
      'Record time, version, and symptoms; compare measurements under the same conditions.',
    ],
    caution: [
      '平均数可能掩盖少数人的长等待；告警、监控和备份都要验证是否实际工作。',
      'Averages hide long waits; verify monitoring, alerts, and backups actually work.',
    ],
    path: 'maintain',
    source: 'https://sre.google/sre-book/monitoring-distributed-systems/',
    diagram: 'operations',
  },
  {
    id: 'integrations',
    name: ['第三方能力与业务', 'Integrations & business'],
    where: [
      '接入文件、邮件、支付、地图等服务时。',
      'When integrating files, email, payment, or location.',
    ],
    action: [
      '按该服务官方说明先用测试数据验证成功、失败、重复与取消情况，再核对真实配置。',
      'Use official guidance and test success, failure, duplicates, and cancellation before live configuration.',
    ],
    caution: [
      '通知已发送不等于已收到；支付回调需要验证且不能重复处理同一笔交易。',
      'Sent is not received; verify callbacks and avoid duplicate transaction handling.',
    ],
    path: 'data',
    source: 'https://developer.mozilla.org/en-US/docs/Web/API',
    diagram: 'request',
  },
  {
    id: 'ownership',
    name: ['开源、归属与交付', 'Licenses & ownership'],
    where: [
      '使用第三方代码、交付源码或更换服务商时。',
      'When reusing code, delivering source, or migrating services.',
    ],
    action: [
      '查原始许可证、实际使用方式和账号归属，保留必要声明，并验证资料能否导出。',
      'Check original licenses, use, and ownership; retain notices and verify exports.',
    ],
    caution: [
      '简释不能代替许可证原文或个案法律判断；代码公开不等于无条件使用。',
      'Summaries do not replace license text or case-specific legal judgment; public code is not unrestricted.',
    ],
    path: 'maintain',
    source: 'https://opensource.org/licenses',
    diagram: 'delivery',
  },
];
