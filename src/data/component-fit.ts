import type { Copy } from './site';
export const componentFit: Record<string, { use: Copy; avoid: Copy }> = {
  tabs: {
    use: [
      '同一页面有平级内容，需要在面板间切换。',
      'Switch between peer content panels on one page.',
    ],
    avoid: [
      '有先后顺序的任务用步骤引导；改变数值用滑块。',
      'Use a step flow for ordered tasks and a slider for values.',
    ],
  },
  stepper: {
    use: [
      '用户要按顺序完成多步任务，并需要知道当前进度。',
      'An ordered multi-step task needs progress orientation.',
    ],
    avoid: [
      '可随意浏览的平级栏目不必伪装成必做步骤。',
      'Peer sections that can be browsed freely are not mandatory steps.',
    ],
  },
  button: {
    use: [
      '执行一个动作，例如提交、保存或重新尝试。',
      'Perform an action such as submit, save or retry.',
    ],
    avoid: [
      '仅去另一个页面用链接；不要放只有样子没有结果的按钮。',
      'Use a link for navigation; avoid buttons with no action.',
    ],
  },
  input: {
    use: [
      '需要用户输入项目实际需要的文字或数字。',
      'Collect text or numbers the task actually needs.',
    ],
    avoid: [
      '选项固定且少时可直接选择；不要索取没有用途的字段。',
      'Use choices for a small fixed set; avoid unnecessary fields.',
    ],
  },
  select: {
    use: ['从已知选项中选一个或多个值。', 'Choose from a known set of values.'],
    avoid: [
      '只有两三个选项时比较直接按钮或单选；未知内容应允许输入。',
      'For a few choices consider buttons/radios; allow input when values are unknown.',
    ],
  },
  selection: {
    use: [
      '表达单选、多选或一个明确的开关状态。',
      'Represent one choice, multiple choices or an explicit on/off state.',
    ],
    avoid: [
      '“同意条款”和立即执行操作不是同一种交互；说明选择是否马上生效。',
      'Consent and immediate actions differ; state when changes take effect.',
    ],
  },
  slider: {
    use: [
      '在连续范围内调整音量、比例等数值。',
      'Adjust a value across a continuous range.',
    ],
    avoid: [
      '要求精确数字时提供输入框；切换内容不能叫数值滑块。',
      'Offer numeric input for precision; content switching is not a range slider.',
    ],
  },
  datetime: {
    use: [
      '任务真正依赖日期、时间或日期范围。',
      'The task needs a date, time or date range.',
    ],
    avoid: [
      '不要混淆时区、全天和具体时刻；生日通常不需要精确到分钟。',
      'Distinguish timezones, all-day dates and instants; birthdays rarely need minutes.',
    ],
  },
  special: {
    use: [
      '输入有特殊结构，如验证码、颜色或多段信息。',
      'Input has special structure, such as a code, color or multiple parts.',
    ],
    avoid: [
      '普通文本能清楚表达时不要增加复杂控件；保留粘贴与键盘操作。',
      'Avoid complexity when plain text suffices; preserve paste and keyboard use.',
    ],
  },
  upload: {
    use: [
      '任务确实需要用户提供文件。',
      'The task requires a user-supplied file.',
    ],
    avoid: [
      '拖进页面不代表上传完成；说明大小、类型、去向和失败重试。',
      'Dragging is not proof of upload; explain size, type, destination and retries.',
    ],
  },
  menu: {
    use: [
      '收纳同一对象的一组操作或次要命令。',
      'Group actions or secondary commands for one object.',
    ],
    avoid: [
      '核心操作不应藏得难找；触屏不能仅依赖右键或悬停。',
      'Do not hide core actions; touch use cannot depend solely on right-click or hover.',
    ],
  },
  nav: {
    use: [
      '帮助用户定位当前位置并前往其他页面。',
      'Orient users and navigate between pages.',
    ],
    avoid: [
      '不要让导航像提交按钮；返回应保持合理的来源与状态。',
      'Keep navigation distinct from submission; preserve sensible return context.',
    ],
  },
  card: {
    use: [
      '同类信息需要作为可扫描的独立单元呈现。',
      'Present repeated information as scannable units.',
    ],
    avoid: [
      '只为装饰套多层卡片会削弱层次；整卡可点时说明目的地。',
      'Avoid nested decorative cards; clarify destinations for clickable cards.',
    ],
  },
  data: {
    use: ['比较、查询或解释真实数据。', 'Compare, query or explain data.'],
    avoid: [
      '少量简单内容不必加表格；图表不能只靠颜色表达，示例数据要标明。',
      'Small content sets may not need tables; label sample data and do not rely only on color.',
    ],
  },
  tag: {
    use: [
      '简短标示分类、筛选项或状态。',
      'Briefly identify categories, filters or status.',
    ],
    avoid: [
      '标签不是按钮时不要制造可点击暗示；重要错误要有解释和下一步。',
      'Avoid clickable styling for passive labels; important errors need explanations and next actions.',
    ],
  },
  accordion: {
    use: [
      '隐藏可选细节，用户需要时展开。',
      'Reveal optional detail on demand.',
    ],
    avoid: [
      '完成任务必须看到的信息不能全藏起来；展开前标题应说明内容。',
      'Keep essential instructions visible; headings should describe hidden content.',
    ],
  },
  overlay: {
    use: [
      '临时补充上下文，或需要明确完成的小任务。',
      'Provide temporary context or a bounded task.',
    ],
    avoid: [
      '长流程不要塞进弹窗；必须有关闭、返回与焦点恢复。',
      'Avoid long flows in dialogs; provide dismissal, return and focus restoration.',
    ],
  },
  feedback: {
    use: [
      '告知操作结果、错误或下一步。',
      'Explain an action result, error or next step.',
    ],
    avoid: [
      '不能以“成功”动画代替实际完成；错误提示说明怎样恢复。',
      'A success animation is not completion; errors should explain recovery.',
    ],
  },
  loading: {
    use: [
      '真实操作需要等待时说明正在做什么。',
      'Explain genuine waiting during an operation.',
    ],
    avoid: [
      '没有真实进度不要显示假的百分比；长等待提供取消或重试路径。',
      'Do not invent percentages; offer cancellation or retry for long waits.',
    ],
  },
  empty: {
    use: [
      '没有内容、没有匹配或首次使用时给出行动入口。',
      'Provide a next action for no content, no matches or first use.',
    ],
    avoid: [
      '加载失败不等于没有数据；错误与空状态应区分。',
      'A loading failure is not empty data; distinguish error and empty states.',
    ],
  },
  layout: {
    use: [
      '安排信息层级和不同设备下的排列。',
      'Organize hierarchy and responsive placement.',
    ],
    avoid: [
      '不要为了对齐把文字缩得过小，或只测一个固定屏幕。',
      'Do not shrink text for alignment or test only one screen size.',
    ],
  },
  saas: {
    use: [
      '真实业务确有工作台、会话或智能任务流程。',
      'A real workflow needs a workspace, chat or intelligent task UI.',
    ],
    avoid: [
      '聊天框不是所有功能的最佳入口；需要显示任务状态、来源和可核对结果。',
      'Chat is not always the right interface; show task state, sources and verifiable results.',
    ],
  },
  tree: {
    use: [
      '数据存在真实父子关系，需要逐层浏览。',
      'Data has a genuine hierarchy for nested browsing.',
    ],
    avoid: [
      '平级列表不要硬加层级；说明展开与选中是不同操作。',
      'Do not invent hierarchy for a flat list; distinguish expansion from selection.',
    ],
  },
  mobile: {
    use: [
      '主要面向触屏、单手和小屏操作。',
      'Support touch, one-handed use and small screens.',
    ],
    avoid: [
      '桌面悬停和密集小按钮不能直接照搬；核对键盘弹起与系统返回。',
      'Do not copy dense desktop hover controls; test the on-screen keyboard and system back.',
    ],
  },
  desktop: {
    use: [
      '目标用户使用鼠标键盘，常有多窗口或文件操作。',
      'Support mouse/keyboard, windows or file operations.',
    ],
    avoid: [
      '看起来像桌面软件不等于拥有系统权限；要在目标系统测试。',
      'Desktop styling does not grant system permissions; test the target OS.',
    ],
  },
};
