import type { Copy, ProjectKey } from './site';
export interface ProjectFit {
  summary: Copy;
  fits: Copy;
  builders: Copy;
  avoids: Copy;
  notReady: Copy;
  test: Copy;
  alternative: ProjectKey;
  reason: Copy;
  source?: { label: string; url: string };
}
export const projectFit: Record<ProjectKey, ProjectFit> = {
  web: {
    summary: [
      '用户点开网址就能完成任务，不要求先安装。',
      'Users complete the task through a link, without installing first.',
    ],
    fits: [
      '作品展示、内容资料站、报名表、计算器、预约和团队管理工具；主要操作能在浏览器中完成，重视链接分享与跨设备访问。',
      'Portfolios, reference sites, forms, calculators, bookings and team tools whose main work fits a browser and benefits from link sharing.',
    ],
    builders: [
      '想先验证需求、用户同时使用手机和电脑、希望降低安装门槛的人；愿意测试不同屏幕，并维护实际需要的托管和数据服务。零基础可从一条小流程开始。',
      'Builders validating an idea for phone and desktop users without installation friction, willing to check screen sizes and maintain needed hosting/data services. Beginners can start with one small flow.',
    ],
    avoids: [
      '核心功能必须深度控制系统、长期后台运行或直接批量操作本机文件，且浏览器能力无法满足的项目。离线、相机或桌面图标本身不代表必须做 App，先测试 PWA 和目标浏览器的实际支持。',
      'Projects requiring system control, sustained background work or extensive local-file operations beyond the target browser’s capabilities. Offline use, a camera or a home-screen icon alone does not rule out a PWA; test the actual browsers.',
    ],
    notReady: [
      '核心诉求是操作系统能力，却不愿先验证浏览器限制的人；希望多人共享资料，但完全不准备数据服务、访问规则和后续维护的人。',
      'Builders who require system features but will not check browser limits, or expect shared data without arranging data services, access rules and upkeep.',
    ],
    test: [
      '先用目标手机和电脑打开同一预览，完成最重要的一次操作；若关键能力失败，先验证替代方案再决定是否换类别。',
      'Open a preview on target phone and desktop devices and complete the key action. If an essential capability fails, test an alternative before changing product type.',
    ],
    alternative: 'desktop',
    reason: [
      '如果核心工作是电脑上的文件批处理，优先比较桌面 App。',
      'For essential desktop file-batch work, compare a desktop app.',
    ],
    source: {
      label: 'MDN · Web / PWA 能力',
      url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/What_is_a_progressive_web_app',
    },
  },
  'mini-program': {
    summary: [
      '用户已集中在某个平台，服务直接在平台里打开。',
      'Users already gather on a platform and use the service inside it.',
    ],
    fits: [
      '已有微信、支付宝或抖音用户来源的活动报名、门店预约、会员服务等；目标平台支持所需功能，账号条件能够满足。',
      'Sign-ups, bookings and member services with an existing audience on WeChat, Alipay or Douyin, when the platform supports the required features and account eligibility.',
    ],
    builders: [
      '能明确选择一个平台、接触到该平台真实用户，并愿意核对账号、功能权限、审核与发布条件的人。',
      'Builders who can choose one platform, reach its real users, and check account eligibility, permissions, review and release requirements.',
    ],
    avoids: [
      '用户分散在多个平台、需要通用网址自由访问，或关键功能不被目标平台支持的项目；不能假定同一份代码与资格在所有平台通用。',
      'Projects needing a universal link across unrelated platforms, or capabilities unavailable on the chosen platform. Code and eligibility are not automatically portable between platforms.',
    ],
    notReady: [
      '还不知道用户在哪个平台，无法取得所需账号条件，或希望完全避开平台审核与规则约束的人。先补齐条件，不宜直接进入开发。',
      'Builders without a known platform audience or required account eligibility, or who cannot accept platform review and constraints. Resolve these before implementation.',
    ],
    test: [
      '开发前用实际账号核对所需功能与测试入口，完成一个可预览的小操作；缺少条件先记录缺口，不把模拟器预览当正式开放。',
      'Check needed features and test access using the actual account, then preview one small action. Record missing eligibility; a simulator preview is not a public release.',
    ],
    alternative: 'web',
    reason: [
      '用户来源不依赖单个平台时，先比较可分享网址的 Web 应用。',
      'If the audience is not tied to one platform, compare a shareable web app.',
    ],
  },
  mobile: {
    summary: [
      '手机是主要使用场景，安装后的持续使用确有价值。',
      'Phone-first use benefits meaningfully from an installed app.',
    ],
    fits: [
      '频繁使用的手机工具、需要可靠设备集成或复杂手机交互的项目；例如现场拍摄处理、离线工作流程。先验证这些需求是否超出手机网页能提供的体验。',
      'Frequently used phone tools needing substantial device integration or complex mobile interaction, such as field capture or offline workflows. First check whether a mobile website already suffices.',
    ],
    builders: [
      '有目标真机可测试、愿意先选 Android 或 iPhone，并承担打包、权限、分发与更新检查的人。无需先做过网站，但必须准备目标平台的开发或云构建条件。',
      'Builders with a real target phone who can start with one OS and handle packaging, permissions, distribution and update tests. A previous website is not required; a suitable local or cloud build setup is.',
    ],
    avoids: [
      '仅展示少量内容、偶尔填写一次表单、靠链接临时访问的项目；若安装成本高于使用收益，手机网页通常更值得先验证。',
      'Small content displays, one-off forms and occasional link-driven use where installation adds more burden than value; test a mobile website first.',
    ],
    notReady: [
      '没有目标设备或可用测试渠道、不愿处理权限和安装问题，或必须立即公开交付却没有准备分发条件的人。',
      'Builders without a target device or testing route, unwilling to handle permissions/installations, or needing immediate public delivery without distribution prerequisites.',
    ],
    test: [
      '先把最小版本装到目标真机，验证关键能力、拒绝权限、切到后台再回来以及适用的离线行为；模拟器成功不等于真机通过。',
      'Install a minimal version on a target phone and test the key capability, denied permissions, background/foreground transitions and relevant offline behavior. Simulator success is not device proof.',
    ],
    alternative: 'web',
    reason: [
      '如果手机网页已能完成关键任务，可以先交付网页，再决定是否需要 App。',
      'If a mobile website completes the essential task, deliver it first and revisit an app when needed.',
    ],
    source: {
      label: 'Apple · 测试与分发条件',
      url: 'https://developer.apple.com/documentation/xcode/distributing-your-app-for-beta-testing-and-releases',
    },
  },
  desktop: {
    summary: [
      '主要在电脑工作，需要处理本机文件或系统能力。',
      'Work happens on a computer and needs local files or system capabilities.',
    ],
    fits: [
      '文件批量整理、媒体处理、本机资料检索、离线办公等；安装程序能够带来浏览器方案难以提供的文件访问或系统集成价值。',
      'Batch file organization, media processing, local search and offline desktop work where installation provides useful file access or system integration beyond a browser solution.',
    ],
    builders: [
      '能先确定 Windows、macOS 或 Linux，有对应电脑可测，愿意学习安装、权限、升级和数据恢复检查的人。先做一种系统比同时适配三种更容易验证。',
      'Builders who can choose one OS, test on it, and handle installation, permissions, upgrades and recovery. One OS is easier to verify than three at once.',
    ],
    avoids: [
      '主要给手机用户临时访问、跨设备协作但不需要本机能力，或用户不能安装软件的项目。简单批处理也可能只需要脚本，不必直接做完整桌面界面。',
      'Projects for occasional phone use, shared work without local integration, or users who cannot install software. A simple batch task may need only a script rather than a complete desktop UI.',
    ],
    notReady: [
      '无法获得目标系统测试环境，不愿承担安装与更新支持，或准备直接拿重要原文件做破坏性批处理且不设置预览、备份与恢复的人。',
      'Builders lacking the target OS for testing, unable to support installation/updates, or planning destructive batch work on originals without preview, backup and recovery.',
    ],
    test: [
      '先在目标电脑上用三个文件的副本试运行，核对预览、实际输出和恢复；交付他人前再测试安装包、所需权限与更新。',
      'Run on copies of three files on the target computer; verify preview, output and recovery. Before sharing, test packaging, permissions and updates.',
    ],
    alternative: 'web',
    reason: [
      '没有必须的本机能力时，比较无需安装的 Web 方案；一次性自动化可先验证脚本。',
      'Without essential local integration, compare a no-install web option; try a script for one-off automation.',
    ],
    source: {
      label: 'Electron · 桌面分发与签名',
      url: 'https://www.electronjs.org/docs/latest/tutorial/code-signing',
    },
  },
};
export const fitLabels: Copy[] = [
  ['哪些项目适合做成这种形式？', 'Which projects fit this form?'],
  [
    '什么条件下，你适合开始制作？',
    'What should be ready before you start building?',
  ],
  [
    '哪些项目不适合直接选这种形式？',
    'Which projects should consider a different form?',
  ],
  [
    '哪些条件没准备好时，应该先停下来？',
    'Which missing prerequisites should you resolve first?',
  ],
];
export function selectionPrompt(id: ProjectKey): Copy {
  return [
    `本次只判断项目形式，不开始开发。\n候选形式：${id}\n用户群体与常用设备：【填写】\n要完成的核心操作：【填写】\n用户从哪里打开、是否接受安装：【填写】\n必须使用的设备或平台能力：【填写或无】\n离线、保存与跨设备要求：【填写或尚未确定】\n已有电脑、手机、平台账号与测试条件：【填写】\n预算与维护投入：【填写】\n请逐项说明：适合的理由、不适合的条件、尚需验证的关键能力，以及一种替代形式。信息不足先问影响选择的问题，不把零基础等同于不能开发。最后给出一个最小验证任务和通过标准；不安装、不生成项目、不发布。`,
    `Only assess product form; do not build.\nCandidate: ${id}\nUsers and devices: [fill in]\nCore task: [fill in]\nEntry and installation tolerance: [fill in]\nEssential device/platform features: [fill in or none]\nOffline, storage and cross-device needs: [fill in or undecided]\nAvailable devices, accounts and test setup: [fill in]\nBudget and maintenance capacity: [fill in]\nExplain fit, mismatch conditions, capabilities needing validation and one alternative. Ask about essential unknowns; lack of coding experience alone is not disqualification. Propose one minimal validation task and passing criteria. Do not install, generate a project or publish.`,
  ];
}
