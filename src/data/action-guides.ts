import type { Copy } from './site';
export interface Guide {
  id: string;
  path: string;
  stage: string;
  title: Copy;
  intro: Copy;
  steps: { title: Copy; action: Copy; check: Copy }[];
  problems: { title: Copy; body: Copy }[];
  next: string;
  nextLabel: Copy;
  record: Copy;
}
export const guides: Guide[] = [
  {
    id: 'backend',
    path: 'data',
    stage: 'backend',
    title: ['后端：保存资料与访问规则', 'Backend: storage and access'],
    intro: [
      '后端是在界面背后保存资料、识别身份并检查访问规则的部分。只展示内容的项目可能不需要；多人预约、跨设备查看或私有资料需要先明确规则。',
      'The backend stores data, identifies people, and enforces access behind the interface. Content-only projects may not need one; shared reservations, cross-device access, and private data require explicit rules.',
    ],
    steps: [
      {
        title: ['列出要保存什么', 'List what must persist'],
        action: [
          '让 AI 根据实际流程整理需要保存的字段，分别说明用途、是否必填和保留多久。比如：预约工具可能包含编号、日期和状态；这些字段不应自动套到其他项目。',
          'Ask AI to derive required fields from the actual flow, explaining purpose, requirement, and retention. For example, reservations may need an ID, date, and status; other projects need their own fields.',
        ],
        check: [
          '没有用途的字段删除；敏感资料不放公开页面或日志。',
          'Remove fields without a purpose. Keep sensitive data out of public pages and logs.',
        ],
      },
      {
        title: ['说明谁能做什么', 'Define who can do what'],
        action: [
          '先说明实际使用者分别能查看、新增、修改或删除什么，让 AI 整理成权限表。比如：顾客只看自己的预约，店主处理全部预约。',
          'Define what each actual role can read, create, update, and delete. Ask AI for an access matrix. For example, customers see their own reservations while an owner processes all reservations.',
        ],
        check: [
          '分别用两个普通身份和管理身份试验，不能只检查按钮隐藏。',
          'Test two ordinary identities and an admin separately; hidden buttons are not an access check.',
        ],
      },
      {
        title: ['接通保存和读取', 'Connect saving and reading'],
        action: [
          '提交一条测试记录，记下编号，刷新或关闭重开，再从另一设备按授权读取。让 AI 报告写入与读取的实际结果。',
          'Submit a test record, note its ID, reload or reopen, and retrieve it from another device with authorized access. Ask AI for actual write and read results.',
        ],
        check: [
          '成功提示对应真实记录；失败时保留输入并允许重试，重复点击不应意外重复创建。',
          'Success corresponds to a real record. Preserve input on failure and allow retry; repeated clicks should not accidentally duplicate records.',
        ],
      },
      {
        title: ['留好导出和恢复办法', 'Prepare export and recovery'],
        action: [
          '让 AI 写清保存位置、导出方式、删除影响与恢复步骤；在隔离测试资料上实际恢复一条记录。',
          'Have AI document storage location, export, deletion impact, and recovery. Restore a record using isolated test data.',
        ],
        check: [
          '导出文件可读，恢复后的内容和访问规则都正确；未实测标待验证。',
          'The export is readable and restored content and access rules are correct. Mark untested recovery as unverified.',
        ],
      },
    ],
    problems: [
      {
        title: ['刷新后数据消失', 'Data disappears after refresh'],
        body: [
          '检查另一设备是否能读到：能 → 查当前设备读取、身份或缓存；不能 → 查保存是否成功及实际保存位置。先保留测试编号与报错，不能直接认定数据库丢失。',
          'Can another device read it? Yes → inspect retrieval, identity, or cache on this device. No → inspect write success and storage location. Preserve test IDs and errors before concluding the database lost data.',
        ],
      },
      {
        title: [
          '顾客能看到别人的资料',
          'A customer sees another person’s data',
        ],
        body: [
          '停止继续公开该功能，保留不含敏感正文的证据。让 AI 检查服务器访问规则，修复后用两个身份复测；页面隐藏并不能代替服务器拒绝。',
          'Stop exposing the affected feature and preserve evidence without sensitive content. Ask AI to inspect server access rules and retest with two identities; hiding a page does not replace server rejection.',
        ],
      },
    ],
    next: 'check',
    nextLabel: ['下一步：验证完整流程', 'Next: test the complete flow'],
    record: [
      '版本：\n测试身份：填写实际身份\n测试记录编号：\n保存位置：\n刷新后结果：\n不同身份访问结果：\n导出与恢复结果：\n待验证项：',
      'Version:\nIdentity: enter actual role\nTest record ID:\nStorage location:\nResult after reload:\nAccess results by identity:\nExport and recovery result:\nUnverified items:',
    ],
  },
  {
    id: 'test',
    path: 'check',
    stage: 'test',
    title: ['测试：亲手检查是否能用', 'Testing: check that it works'],
    intro: [
      '测试是按具体步骤比较预期与实际结果。先走通最重要的一条任务，再检查失败、换设备和修改后的情况；AI 检查与本人试用分别记录。',
      'Testing compares expected and observed behavior through specific steps. Start with the main task, then check failures, other devices, and changes. Record AI checks separately from hands-on trials.',
    ],
    steps: [
      {
        title: ['正常操作走一遍', 'Complete the normal flow'],
        action: [
          '用测试资料按需求从开始操作到看到结果；只有涉及保存时，再检查保存与重新打开。比如：预约流程可以是选择日期、填资料、提交并查看编号。',
          'Use test data to follow the requirements from start to result; check saving and reopening only when persistence is needed. For example, a reservation flow selects a date, enters details, submits, and shows an ID.',
        ],
        check: [
          '没有作者口头解释也能完成；成功信息与实际记录对应。',
          'The task can be completed without the author explaining it; success matches a real record.',
        ],
      },
      {
        title: ['试一次意外情况', 'Try failure cases'],
        action: [
          '分别尝试必填项空白、无效日期、重复点击、断网与权限拒绝，逐项观察反馈。',
          'Try empty required fields, an invalid date, repeated clicks, offline use, and declined permissions, one at a time.',
        ],
        check: [
          '说明问题和恢复办法，资料不会莫名丢失或重复；不适用的场景写明原因。',
          'Explain the problem and recovery route without unexpected data loss or duplicates; explain inapplicable scenarios.',
        ],
      },
      {
        title: ['换设备与身份', 'Change device and identity'],
        action: [
          '在目标手机和电脑检查文字、按钮与保存；私有资料用两个独立身份检查访问。',
          'Check text, buttons, and persistence on target phones and computers; use two identities for private-data access.',
        ],
        check: [
          '记录实际设备和版本，不把浏览器缩放当作所有真机已验证。',
          'Record actual devices and versions; browser resizing does not prove every real device works.',
        ],
      },
      {
        title: ['修改后再复查', 'Retest after changes'],
        action: [
          '让 AI 记录本次影响的流程，先复测原问题，再检查附近功能和一条完整任务。',
          'Ask AI to list affected flows, retest the original issue, nearby behavior, and one complete task.',
        ],
        check: [
          '记录本次版本和实际结果；旧版本通过不能直接沿用。',
          'Record this version and observed results; an earlier passing version is not evidence for this one.',
        ],
      },
    ],
    problems: [],
    next: 'launch',
    nextLabel: [
      '下一步：人工验收后准备上线',
      'Next: prepare release after hands-on acceptance',
    ],
    record: [
      '版本与设备：\n任务目标：\n测试资料：\n复现步骤：1.  2.  3.\n预期结果：\n实际结果：\n证据位置：\n是否可重复：\n严重程度与受影响人群：\nAI检查 / 本人试用：\n待验证项与下一步：',
      'Version and device:\nTask goal:\nTest data:\nSteps: 1. 2. 3.\nExpected result:\nActual result:\nEvidence location:\nReproducible:\nSeverity and affected users:\nAI check / hands-on trial:\nUnverified items and next step:',
    ],
  },
  {
    id: 'launch',
    path: 'launch',
    stage: 'launch',
    title: [
      '部署上线：交付一个真实入口',
      'Deployment: deliver a real entry point',
    ],
    intro: [
      '部署是把版本放到能运行的位置，发布是决定让目标人群使用。预览网址、测试安装包、平台审核和正式开放是不同状态。',
      'Deployment places a version where it can run. Release makes it available to the intended audience. Preview links, test packages, platform review, and public availability are different states.',
    ],
    steps: [
      {
        title: ['确认交付形式与版本', 'Identify the deliverable and version'],
        action: [
          '网站记录正式网址；手机/桌面记录目标系统与安装包；小程序记录平台和版本。让 AI 固定本次可恢复版本，列出未通过验收项。',
          'For websites record the live URL; for apps record target OS and package; for mini programs record platform and version. Ask AI to identify a recoverable version and failed acceptance items.',
        ],
        check: [
          '没有阻塞主要流程或资料权限的问题；发布决定由人确认。',
          'No blocking main-flow or access issues remain; a person confirms the release decision.',
        ],
      },
      {
        title: ['核对运行材料与费用', 'Check runtime material and costs'],
        action: [
          '让 AI 列出域名、托管、账号、环境变量和资料服务。环境变量是运行时提供的配置；密钥只交给需要它的服务端，不写入公开页面。',
          'Ask AI to list domain, hosting, accounts, environment variables, and data services. Environment variables provide runtime configuration; secrets belong only on the server that needs them.',
        ],
        check: [
          '费用、续期、配额与权限有负责人；缺失材料先补齐，不虚构已配置。',
          'Assign ownership for costs, renewals, quotas, and access. Fill missing inputs rather than claiming configuration is complete.',
        ],
      },
      {
        title: ['先检查预览或测试安装', 'Check a preview or test installation'],
        action: [
          '用测试资料在目标交付位置走完整流程。手机/桌面检查新安装与升级，小程序按选定平台核对测试入口与审核材料。',
          'Run the complete flow with test data at the delivery location. Check new installs and upgrades for apps; verify test entry and review materials for the chosen mini-program platform.',
        ],
        check: [
          '检查结果对应这次交付版本，不以本机成功替代目标位置成功。',
          'Results belong to this delivery version; local success does not replace target-environment success.',
        ],
      },
      {
        title: [
          '确认开放并复查正式入口',
          'Approve release and check the live entry',
        ],
        action: [
          '人工确认后执行发布，用普通访问者身份重新打开或安装，完成核心任务并记录时间、版本与恢复入口。',
          'After human approval, release and reopen or install as an ordinary user. Complete the core task and record time, version, and recovery entry.',
        ],
        check: [
          '正式入口能用，失败时能够停止开放或恢复上一版本；未开放保持未发布。',
          'The live entry works and a failure can trigger withdrawal or restoration. Keep unreleased work labeled unreleased.',
        ],
      },
    ],
    problems: [
      {
        title: [
          '本机正常，正式地址打不开',
          'Local works but the live URL fails',
        ],
        body: [
          '先检查能否打开任意页面：完全不可达 → 核对地址、托管状态与域名设置；首页能开但子页失败 → 检查路由和资源路径；页面能开但提交失败 → 检查配置与后台请求。每次只修一层并复测。',
          'Can any page open? Nothing reachable → check address, hosting status, and domain settings. Home works but subpages fail → inspect routes and asset paths. Pages work but submission fails → inspect configuration and backend requests. Fix and retest one layer at a time.',
        ],
      },
      {
        title: ['发布后出现严重问题', 'A serious issue appears after release'],
        body: [
          '先停止受影响操作并保留证据；旧版可恢复 → 按已验证方案恢复并复测；恢复不确定 → 保持暂停，先让 AI 核对资料兼容性，不能直接覆盖数据库。',
          'Pause the affected operation and preserve evidence. A tested old version is recoverable → restore and retest. Recovery is uncertain → stay paused and check data compatibility before overwriting any database.',
        ],
      },
    ],
    next: 'maintain',
    nextLabel: ['下一步：建立维护记录', 'Next: start a maintenance record'],
    record: [
      '发布决定：待确认 / 同意 / 暂缓\n目标人群：\n交付版本：\n正式入口：\n费用与负责人：\n验收证据：\n开放时间：\n正式入口复查结果：\n恢复版本与步骤：\n剩余风险：',
      'Release decision: pending / approved / deferred\nAudience:\nVersion:\nLive entry:\nCosts and owner:\nAcceptance evidence:\nRelease time:\nLive-entry check result:\nRecovery version and steps:\nRemaining risks:',
    ],
  },
  {
    id: 'ops',
    path: 'maintain',
    stage: 'maintain',
    title: ['运维：让产品继续可用', 'Maintenance: keep the product usable'],
    intro: [
      '运维是在开放后照看运行、费用、资料和更新。先留下可执行的维护记录，不把“已经上线”当作任务终点。',
      'Maintenance looks after operation, costs, data, and updates after release. Keep an actionable record instead of treating launch as the end.',
    ],
    steps: [
      {
        title: ['定期走主要流程', 'Recheck the main flow'],
        action: [
          '按实际使用频率安排检查，记录正式入口、版本和一次测试结果。检查失败时先判断影响谁、是否需要暂停。',
          'Choose a check schedule based on real usage. Record the live entry, version, and a test result. On failure, identify affected users and whether to pause.',
        ],
        check: [
          '没有真实检查就不写正常；没有使用数据就不写效率提升。',
          'Do not claim healthy operation without a check or improved outcomes without real usage data.',
        ],
      },
      {
        title: ['照看费用与到期', 'Track costs and expiry'],
        action: [
          '记录域名、托管、平台账号、资料保存和第三方调用的负责人、账单入口、到期日及预算；让 AI 帮忙整理提醒计划。',
          'Record owners, billing links, renewal dates, and budgets for domains, hosting, accounts, storage, and third-party calls. Ask AI to organize reminders.',
        ],
        check: [
          '确认提醒已经实际设置才依赖它；费用异常先核对账单与用量，不直接升级套餐。',
          'Rely on reminders only after they are actually configured. Inspect bills and usage before upgrading a plan.',
        ],
      },
      {
        title: ['验证备份能够恢复', 'Prove backups can restore'],
        action: [
          '在隔离位置恢复测试备份，核对记录数量、样本内容和身份权限。记录备份频率、保留期限和恢复耗时。',
          'Restore a test backup in isolation and verify counts, sample contents, and access rules. Record backup frequency, retention, and restoration time.',
        ],
        check: [
          '只有备份文件不算恢复成功；恢复步骤可由接手者重复执行。',
          'A backup file alone is not a successful restore; another maintainer should be able to repeat the process.',
        ],
      },
      {
        title: ['把反馈分成故障与新需求', 'Separate bugs from new requests'],
        action: [
          '目标无法完成 → 回到排查与修复；希望增加能力 → 回到第一版范围确认，评估费用与资料变化后再排计划。',
          'A goal cannot be completed → investigate and fix. A new capability is requested → return to scope confirmation and assess costs and data changes before planning.',
        ],
        check: [
          '每次更新保留恢复版本，重测主要流程并记录真实反馈。',
          'Preserve a recovery version for updates, retest the main flow, and record real feedback.',
        ],
      },
    ],
    problems: [
      {
        title: ['账单突然增加', 'The bill suddenly increases'],
        body: [
          '先对照时间与用量：用量同步增加 → 找出是哪项功能或访问带来，按预算决定限额；用量无变化 → 查套餐、续期或计费条目。资料不足先索取账单，不能臆测原因。',
          'Compare time and usage: usage rises too → identify the feature or traffic and set limits according to budget. Usage unchanged → inspect plan, renewal, and line items. Request missing bills instead of guessing.',
        ],
      },
      {
        title: [
          '有备份，但不知道怎么恢复',
          'A backup exists but recovery is unclear',
        ],
        body: [
          '先复制到隔离测试位置，核对格式与恢复工具。能恢复 → 检查内容和权限并记录步骤；不能恢复 → 保留当前数据，确认备份完整性和兼容版本，不直接覆盖线上。',
          'Copy it into an isolated test environment and check format and recovery tools. Restore works → verify content and access, then document steps. Restore fails → preserve current data, inspect completeness and compatible versions, and avoid overwriting production.',
        ],
      },
    ],
    next: 'communicate',
    nextLabel: [
      '下一步：把新需求交给 AI 澄清',
      'Next: clarify a new request with AI',
    ],
    record: [
      '检查日期与负责人：\n正式入口与版本：\n主要流程结果：\n本期费用 / 预算：\n最近备份与恢复测试：\n到期事项：\n真实反馈与证据：\n故障 / 新需求：\n处理状态与下一次检查：',
      'Check date and owner:\nLive entry and version:\nMain-flow result:\nCost / budget:\nLatest backup and restore test:\nExpiring items:\nReal feedback and evidence:\nBug / new request:\nStatus and next check:',
    ],
  },
];
