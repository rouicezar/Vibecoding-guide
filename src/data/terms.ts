import type { Copy } from './site';
export const terms: {
  id: string;
  name: string;
  definition: Copy;
  check: Copy;
  path: string;
}[] = [
  {
    id: 'frontend',
    name: 'Frontend',
    definition: [
      '前端：把文字、图片、按钮和交互呈现在屏幕上的部分。',
      'Frontend: the part that presents text, images, controls, and interaction on screen.',
    ],
    check: [
      '要改看到的样子或点击反馈时，提供页面与目标状态。',
      'For visual or interaction changes, provide the page and desired state.',
    ],
    path: 'components',
  },
  {
    id: 'backend',
    name: 'Backend',
    definition: [
      '后端：在界面背后处理资料、权限与服务请求的部分。',
      'Backend: the part handling data, access, and service requests behind the interface.',
    ],
    check: [
      '需要共享或限制访问时，先写清身份与规则。',
      'For shared or restricted access, define identities and rules first.',
    ],
    path: 'data',
  },
  {
    id: 'fullstack',
    name: 'Full-stack',
    definition: [
      '全栈：同时涉及界面与背后处理的工作。',
      'Full-stack: work spanning the interface and the processing behind it.',
    ],
    check: [
      '用一条完整流程检查两端接通，而不只分别看画面和资料。',
      'Test one complete flow to verify both sides are connected.',
    ],
    path: 'check',
  },
  {
    id: 'database',
    name: 'Database',
    definition: [
      '数据库：按规则保存并查找资料的系统。',
      'Database: a system for storing and retrieving structured records.',
    ],
    check: [
      '刷新或换设备后仍应能按授权找到记录。',
      'Records should remain accessible after reload or on another authorized device.',
    ],
    path: 'data',
  },
  {
    id: 'api',
    name: 'API',
    definition: [
      '接口：两个程序交换请求和结果的约定。',
      'API: an agreed way for programs to exchange requests and results.',
    ],
    check: [
      '说明发什么资料、得到什么、失败怎么办；密钥不要放公开页面。',
      'Specify inputs, outputs, and failure handling; keep secrets out of public pages.',
    ],
    path: 'data',
  },
  {
    id: 'server',
    name: 'Server',
    definition: [
      '服务器：为其他设备处理请求的程序或运行设备。',
      'Server: a program or machine that handles requests from other devices.',
    ],
    check: [
      '确认哪部分必须持续运行，以及谁负责费用与异常。',
      'Identify what must keep running and who owns costs and failures.',
    ],
    path: 'launch',
  },
  {
    id: 'stack',
    name: 'Tech stack',
    definition: [
      '技术栈：制作和运行产品所用的一组技术与服务。',
      'Tech stack: the technologies and services used to build and run a product.',
    ],
    check: [
      '按用途、设备、资料、预算与维护条件选择。',
      'Choose based on purpose, devices, data, budget, and upkeep.',
    ],
    path: 'stacks',
  },
  {
    id: 'framework',
    name: 'Framework',
    definition: [
      '框架：提供常用结构和规则的制作基础。',
      'Framework: a foundation providing common structures and conventions.',
    ],
    check: [
      '让 AI 解释它解决哪项实际需求，不因流行就重做项目。',
      'Ask which real requirement it solves; popularity alone does not justify a rewrite.',
    ],
    path: 'stacks',
  },
  {
    id: 'dependency',
    name: 'Dependency',
    definition: [
      '依赖：项目运行或制作时需要的现成软件。',
      'Dependency: existing software needed to build or run the project.',
    ],
    check: [
      '记录版本与用途；升级后重新检查受影响流程。',
      'Record version and purpose; retest affected flows after upgrades.',
    ],
    path: 'maintain',
  },
  {
    id: 'environment',
    name: 'Environment',
    definition: [
      '环境：项目运行时的设备、软件、配置和服务条件。',
      'Environment: the hardware, software, configuration, and services a project runs with.',
    ],
    check: [
      '区分本机、预览与正式环境，不能把一次成功推到所有环境。',
      'Distinguish local, preview, and live environments; success in one does not prove all.',
    ],
    path: 'launch',
  },
  {
    id: 'component',
    name: 'Component',
    definition: [
      '组件：可独立描述或复用的一块界面与交互。',
      'Component: a describable or reusable piece of interface and behavior.',
    ],
    check: [
      '同时给出样子、操作、状态与使用位置。',
      'Specify appearance, behavior, states, and placement.',
    ],
    path: 'components',
  },
  {
    id: 'layout',
    name: 'Layout',
    definition: [
      '布局：内容与操作在页面中的位置和顺序。',
      'Layout: the placement and order of content and actions on a page.',
    ],
    check: [
      '按主要任务安排顺序，再检查手机上的排列。',
      'Order content around the main task and check the mobile arrangement.',
    ],
    path: 'components',
  },
  {
    id: 'responsive',
    name: 'Responsive',
    definition: [
      '响应式：同一页面按可用屏幕空间调整排列。',
      'Responsive: a layout that adapts to available screen space.',
    ],
    check: [
      '检查窄屏、长文字和按钮，不只缩小一张截图。',
      'Check narrow screens, long text, and controls rather than shrinking a screenshot.',
    ],
    path: 'components',
  },
  {
    id: 'state',
    name: 'State',
    definition: [
      '状态：同一功能在等待、成功、失败或空白时的表现。',
      'State: how a feature behaves while waiting, succeeding, failing, or empty.',
    ],
    check: [
      '逐一说明显示什么、还能做什么、怎样恢复。',
      'Specify what appears, available actions, and recovery in each state.',
    ],
    path: 'components',
  },
  {
    id: 'git',
    name: 'Git',
    definition: [
      'Git：为项目文件保存可追踪版本变化的工具。',
      'Git: a tool for tracking changes and versions of project files.',
    ],
    check: [
      '让 AI 留下说明清楚的检查点；它不自动备份线上数据库。',
      'Ask AI for clear checkpoints; Git does not automatically back up a live database.',
    ],
    path: 'maintain',
  },
  {
    id: 'repository',
    name: 'Repository',
    definition: [
      '仓库：项目文件与版本历史放在一起的位置。',
      'Repository: a location containing project files and their version history.',
    ],
    check: [
      '确认实际路径与访问范围，密钥和私密运行资料不进入公开仓库。',
      'Confirm location and access; keep secrets and private runtime data out of public repositories.',
    ],
    path: 'communicate',
  },
  {
    id: 'commit',
    name: 'Commit',
    definition: [
      '提交：一份带说明、可追踪的文件变化检查点。',
      'Commit: a labeled, traceable checkpoint of file changes.',
    ],
    check: [
      '核对只包含本次任务内容，并记录对应验证结果。',
      'Include only the intended task changes and record matching checks.',
    ],
    path: 'maintain',
  },
  {
    id: 'branch',
    name: 'Branch',
    definition: [
      '分支：在独立版本线路上尝试改动。',
      'Branch: a separate line of version history for changes.',
    ],
    check: [
      '尝试后验证，再决定合入；分支本身不保证数据隔离。',
      'Test before merging; a branch alone does not isolate application data.',
    ],
    path: 'maintain',
  },
  {
    id: 'rollback',
    name: 'Rollback',
    definition: [
      '回滚：将软件或配置恢复到之前的版本。',
      'Rollback: restoring software or configuration to an earlier version.',
    ],
    check: [
      '先核对数据库是否兼容，软件回退不等于资料恢复。',
      'Check database compatibility; reverting software does not restore data.',
    ],
    path: 'maintain',
  },
  {
    id: 'local',
    name: 'Local',
    definition: [
      '本地：发生在当前电脑或设备上的运行与文件操作。',
      'Local: execution and file operations on the current computer or device.',
    ],
    check: [
      '本机能打开不代表别人能访问；本机工具也可能连接远程模型。',
      'Local access does not imply public access; local tools may still connect to remote models.',
    ],
    path: 'communicate',
  },
  {
    id: 'build',
    name: 'Build',
    definition: [
      '构建：把项目源文件转换成可运行或发布的产物。',
      'Build: converting project source files into runnable or deployable output.',
    ],
    check: [
      '构建通过后还要实际完成主要操作。',
      'After a successful build, still complete the main task through actual use.',
    ],
    path: 'check',
  },
  {
    id: 'deploy',
    name: 'Deploy',
    definition: [
      '部署：把可运行版本放到目标运行环境。',
      'Deploy: placing a runnable version into a target environment.',
    ],
    check: [
      '从目标入口再次检查，不把上传成功当作流程成功。',
      'Recheck the target entry; a successful upload does not prove the flow works.',
    ],
    path: 'launch',
  },
  {
    id: 'domain',
    name: 'Domain',
    definition: [
      '域名：方便记忆、指向产品访问入口的名字。',
      'Domain: a memorable name pointing to a product’s access location.',
    ],
    check: [
      '核对归属、续期与实际打开结果。',
      'Check ownership, renewal, and actual access.',
    ],
    path: 'launch',
  },
  {
    id: 'hosting',
    name: 'Hosting',
    definition: [
      '托管：由服务商存放或运行产品。',
      'Hosting: a provider storing or running the product.',
    ],
    check: [
      '确认支持的运行方式、额度、费用和导出恢复方法。',
      'Confirm runtime support, limits, costs, export, and recovery.',
    ],
    path: 'launch',
  },
  {
    id: 'log',
    name: 'Log',
    definition: [
      '日志：程序执行时留下的事件与错误记录。',
      'Log: a record of events and errors during execution.',
    ],
    check: [
      '提供时间、动作和相关错误，分享前去掉密钥和个人资料。',
      'Include time, action, and relevant errors; remove secrets and personal data before sharing.',
    ],
    path: 'check',
  },
  {
    id: 'cache',
    name: 'Cache',
    definition: [
      '缓存：为减少重复读取而暂存的内容副本。',
      'Cache: temporarily stored copies that reduce repeated retrieval.',
    ],
    check: [
      '对照版本与原始资料，确认是否看到旧副本，不盲目清空所有数据。',
      'Compare versions and original data before deciding a stale copy is involved; avoid indiscriminate deletion.',
    ],
    path: 'check',
  },
  {
    id: 'authentication',
    name: 'Authentication',
    definition: [
      '身份验证：确认访问者以哪个身份使用产品。',
      'Authentication: establishing the identity used to access a product.',
    ],
    check: [
      '检查登录、退出与会话过期后的身份状态。',
      'Check identity after sign-in, sign-out, and session expiry.',
    ],
    path: 'data',
  },
  {
    id: 'authorization',
    name: 'Authorization',
    definition: [
      '权限：决定某个身份可以查看或修改哪些内容。',
      'Authorization: deciding what an identity may read or change.',
    ],
    check: [
      '用不同身份直接检查服务器拒绝，不能仅隐藏按钮。',
      'Verify server rejection with different identities; hiding buttons is insufficient.',
    ],
    path: 'data',
  },
  {
    id: 'context',
    name: 'Context',
    definition: [
      '上下文：AI 此刻得到的背景、材料和前文。',
      'Context: the background, material, and conversation available to AI.',
    ],
    check: [
      '换会话时交接最新范围、文件位置、验证记录和下一步。',
      'When switching conversations, provide scope, file locations, checks, and next steps.',
    ],
    path: 'communicate',
  },
  {
    id: 'prompt',
    name: 'Prompt',
    definition: [
      '提示词：交给 AI 的目标、材料、限制和检查要求。',
      'Prompt: the goal, inputs, limits, and checks provided to AI.',
    ],
    check: [
      '先填写实际背景；缺失信息写未知，不把示例当事实。',
      'Use actual context; label missing information unknown and keep examples separate from facts.',
    ],
    path: 'communicate',
  },
];
