import type {Copy} from './site';
export interface LearningBranch {id:string;lesson:string;title:Copy;when:Copy;steps:Copy[];check:Copy;prompt:Copy;source:string;}
export const learningBranches:LearningBranch[]=[
  {
    "id": "shared-data",
    "lesson": "save",
    "title": [
      "多人共享与名额规则",
      "Shared data and capacity"
    ],
    "when": [
      "需求要求多人查看或修改同一份数据时。",
      "When users share or change the same records."
    ],
    "steps": [
      [
        "让AI按已确认设计列测试数据服务、连接配置位置及需本人创建的账号；密钥只放本机或平台保密配置，不填本站。",
        "List the chosen test data service, config location and account actions. Keep secrets in local/platform secret storage."
      ],
      [
        "AI先做一个最小写入和读回，核对数据确实在选定服务；再用两个独立会话读取同一条测试记录。",
        "Write and read one record in the selected service, then read it from two independent sessions."
      ],
      [
        "按需求测试重复提交、同时抢最后名额、取消后释放；AI应在可信的数据处理端保证这些规则，不能只在按钮上禁用。",
        "Test duplicates, last-place contention and cancellation. Enforce rules in trusted data handling, not only a disabled button."
      ],
      [
        "保留预期/实际/最终数据与版本；测试结束按编号清理测试记录，不能清空正式资料。",
        "Record expected/actual/final data and revision; delete only identified test records."
      ]
    ],
    "check": [
      "两个用户能看到应该共享的结果；不会超额、重复计数或越权。",
      "Users see intended shared results without overbooking, duplicates or unauthorized access."
    ],
    "prompt": [
      "读取已确认需求、设计和当前数据任务，只完成该任务要求的共享数据与规则。先检查测试环境及配置，缺账号时逐项说明本人在哪操作，勿索要密钥正文。实现最小写入读回后，用两个独立会话验证共享、适用的唯一性和最后名额并发规则。用测试数据记录预期、实际、最终数据、版本与清理方法到 docs/checks.md；不可执行项标未测试。不新增无关功能、不使用正式数据。",
      "Read agreed requirements, design and current data task. Implement only its shared-data rules. Check test configuration; explain required personal account actions without requesting secrets. Verify minimal write/read, two sessions, relevant uniqueness and last-place contention. Record expected/actual/final data, revision and cleanup in docs/checks.md. Mark inaccessible tests untested. Add no unrelated features and use no production data."
    ],
    "source": ""
  },
  {
    "id": "accounts",
    "lesson": "save",
    "title": [
      "登录与权限",
      "Login and access"
    ],
    "when": [
      "需求明确有账号或不同角色时。",
      "Only when accounts or roles are required."
    ],
    "steps": [
      [
        "在需求里找各角色能做和不能做什么；没有这张表先返回需求，不自行增加账号体系。",
        "Find allowed/denied actions for each role; clarify requirements before adding accounts."
      ],
      [
        "按选定服务创建仅用于测试的普通账号A、普通账号B和必要管理员，凭据在本人控制的位置保管。",
        "Create test users A and B and an admin only if needed in the chosen service; keep credentials under your control."
      ],
      [
        "让AI验证注册/登录/退出及需要的找回流程；A不能读取或修改B的私有内容，未登录不能绕过限制。",
        "Test required signup/login/logout/recovery; A cannot access B’s private data and logged-out access cannot bypass rules."
      ],
      [
        "把测试方法和实际结果保存；网页隐藏按钮不算权限保护，要检查服务端或数据访问规则。",
        "Save methods/results and verify server/data rules, not just hidden buttons."
      ]
    ],
    "check": [
      "各角色允许的动作可用，不允许的动作确实被拒绝。",
      "Allowed actions work and forbidden actions are actually denied."
    ],
    "prompt": [
      "读取已确认角色权限表和设计，仅执行当前登录/权限任务。先列测试账号的创建入口、所需权限、测试资料及清理方法；真实凭据由本人在服务中配置。实现并检查需求中的登录流程及两用户隔离、退出后访问和适用的越权拒绝。记录方法、版本、实际结果与未测试项到 docs/checks.md；不要增加未要求的角色或修改正式用户资料。",
      "Read the agreed role matrix and design; execute only the current access task. List test account setup, privileges, data and cleanup; the owner configures credentials in the service. Verify required login behavior, two-user isolation, post-logout access and denial cases. Save methods, revision, actual and untested results to docs/checks.md. Add no unrequested roles or changes to real users."
    ],
    "source": ""
  },
  {
    "id": "external-api",
    "lesson": "save",
    "title": [
      "API或AI能力接入",
      "External API or AI capability"
    ],
    "when": [
      "项目确实需要调用外部服务时。",
      "When an external service is required."
    ],
    "steps": [
      [
        "在已选服务官网由本人确认账号、测试额度、收费和数据用途，创建测试凭据；不要把API Key填进本站或截图。",
        "Confirm account, test allowance, cost and data use on the chosen service; create test credentials outside this guide."
      ],
      [
        "AI从设计说明配置名称和服务端/平台保密变量入口；本人填写，AI只检查是否存在，不能打印值。前端公开变量不能存私密Key。",
        "AI identifies config names and server/platform secret settings. You enter values; AI checks existence without printing them. Public frontend variables cannot hold private keys."
      ],
      [
        "先发最小测试请求，看到实际响应再接界面；记录输入、输出和一次调用用量。使用服务测试模式，避免真实支付或通知。",
        "Make a minimal request before UI integration; record input, output and usage. Use test modes to avoid real payments or notifications."
      ],
      [
        "测试超时、拒绝、额度不足和重试；不要无限重试。接口不可用时给用户可理解的提示。",
        "Test timeouts, rejection, quota and bounded retries; explain failures to users."
      ]
    ],
    "check": [
      "真实最小调用成功；密钥不在网页或仓库；失败不会伪装成功。",
      "A real minimal call works without exposing secrets or disguising failures."
    ],
    "prompt": [
      "读取设计和当前外部接口任务，只接入已选服务的该项能力。先从官方文档核对当前接口与测试条件，列配置变量名称、保密配置位置及本人操作，不读取或打印真实密钥。先做最小测试调用，核对输入输出、用量、超时/拒绝/限额和有限重试，再接已确认业务。记录实际证据及未测项到 docs/checks.md。账号或额度不足就停止说明，不改用未批准服务、不触发真实交易。",
      "Read the design and current integration task. Verify the selected service’s current official API and test prerequisites. Give config names, secret locations and owner actions without reading or printing secret values. Test a minimal call, input/output, usage, timeouts, rejection, quotas and bounded retries before integration. Record evidence and untested items in docs/checks.md. Stop on missing access; do not switch providers or trigger real transactions."
    ],
    "source": ""
  },
  {
    "id": "files",
    "lesson": "save",
    "title": [
      "文件导入、处理与导出",
      "File import, processing and export"
    ],
    "when": [
      "整理器、转换器等读写用户文件的项目。",
      "For tools that process user files."
    ],
    "steps": [
      [
        "复制一份测试文件到独立测试目录；先验证选择路径和权限，不直接处理唯一原件。",
        "Copy sample files to a separate test folder; check paths/permissions without using the only originals."
      ],
      [
        "核对支持格式、输入限制、输出命名和保存位置；用户取消选择应能安全退出。",
        "Check formats, input limits, output naming/location and safe cancellation."
      ],
      [
        "测试重名、损坏文件、无写权限和重复执行；输出不应静默覆盖原文件。",
        "Test collisions, corruption, denied writes and repeated runs; never silently overwrite originals."
      ]
    ],
    "check": [
      "输出可打开且内容正确，原文件保留，失败说明原因。",
      "Outputs open correctly, originals remain, and failures are explained."
    ],
    "prompt": [
      "读取文件处理需求与当前任务，仅实现已确认输入输出。用独立副本测试正常处理、取消、重名、格式错误和无写权限；核对输出内容与位置，不覆盖唯一原件。记录版本、操作、预期实际和未测项到 docs/checks.md；未约定覆盖策略先询问。",
      "Read the file-processing task and implement only agreed inputs/outputs. Test copies for success, cancellation, collisions, invalid formats and denied writes. Verify output content/location without overwriting originals. Record revision, expected/actual and untested results in docs/checks.md. Ask about unspecified overwrite policies."
    ],
    "source": ""
  },
  {
    "id": "local-use",
    "lesson": "package",
    "title": [
      "只在自己电脑使用",
      "Personal local use"
    ],
    "when": [
      "不需要公开网址、商店或给别人安装。",
      "When no public URL, store or third-party installation is needed."
    ],
    "steps": [
      [
        "核对README里的实际启动方法和依赖；关闭开发工具后按说明重新启动，确认自己能重复使用。",
        "Check README startup/dependencies, close the development tool and restart as documented."
      ],
      [
        "若需要每次运行源码，明确保存代码与运行环境；若想双击启动，让AI按目标系统准备入口或本地包，不默认上传服务器。",
        "If running source, retain the code/runtime. For double-click use, prepare a platform-specific launcher or local package rather than a server."
      ],
      [
        "核对实际数据位置、导出/备份和失败时的恢复方法；没有数据需求就标不适用。",
        "Check data location, export/backup and recovery where applicable."
      ]
    ],
    "check": [
      "本人按说明可再次打开使用，知道资料位置和恢复方法。",
      "You can reopen it as documented and locate/recover relevant data."
    ],
    "prompt": [
      "读取本人选择的本机自用方案与README，只准备可重复使用的本地交付。核对实际启动入口、依赖和目标系统；如需启动脚本或本地包先说明用途和实际命令，不添加云服务。验证关闭后再次打开和需求要求的数据保留，记录真实位置、版本、备份恢复与未验证项到 docs/release.md。不推送、不公开发布、不扩大访问。",
      "Read the local-use decision and README. Prepare only repeatable local delivery: actual entry, dependencies and target OS. Explain any launcher/package before creating it, without adding cloud services. Verify restart and required persistence; record real paths, revision, backup/recovery and untested work in docs/release.md. Do not push, publish or widen access."
    ],
    "source": ""
  },
  {
    "id": "web-static",
    "lesson": "package",
    "title": [
      "Web：纯静态网站",
      "Web: static output"
    ],
    "when": [
      "没有需运行的后端进程；构建输出为网页和静态资源。",
      "For HTML/assets without a backend process."
    ],
    "steps": [
      [
        "让AI从项目配置读取实际构建命令和输出目录；不要默认所有项目都是npm或dist。构建将源码加工成给浏览器使用的文件。",
        "Read the actual build command/output directory; do not assume npm or dist. Building transforms source into browser files."
      ],
      [
        "运行生产构建，检查产物不含秘密配置；用项目支持的生产预览/静态服务打开输出，刷新深层页面和检查图片路径。",
        "Build, check secrets are absent, then serve the output using the project’s preview/static server. Test deep-link reloads and assets."
      ],
      [
        "选择托管平台创建测试站点；按该平台设置构建命令、输出目录与基础路径。先用平台临时网址完整试用。",
        "Create a test site on the selected host, configure build/output/base path, and test its temporary URL."
      ],
      [
        "域名可后加；需要时在域名服务按托管平台给出的记录配置DNS，等待生效并核对HTTPS。正式发布回“交付上线，检查实际入口”确认。",
        "Add a domain if needed using host-provided DNS records, wait and verify HTTPS. Confirm production publishing in the “Deliver and check the real entry” milestone."
      ]
    ],
    "check": [
      "产物与正式构建一致；临时网址完整流程、资源与刷新均正常。",
      "The real build works through the test URL, including assets and reloads."
    ],
    "prompt": [
      "读取 docs/design.md、docs/delivery.md、docs/release.md 和构建配置，只准备已选静态网站交付。确认无必需服务端进程，报告真实构建命令、执行位置、输出目录及配置名称。构建并在可用测试环境验证资源路径、深层页面刷新和需求流程；需本人操作托管控制台时逐项给入口、应填值、成功现象，不索要密钥。记录产物、版本、测试网址、结果和回退方法到 docs/release.md。不正式发布；不满足静态条件则停止并返回交付选择。",
      "Read design, delivery, release and build config. Prepare only the selected static site. Confirm no required server process, report commands/directory/output/config names, build and test assets, deep-link reloads and user flows in an available test environment. Explain owner console actions and success signals without requesting secrets. Record artifact, revision, test URL, results and recovery in docs/release.md. Do not release publicly; return to delivery selection if not static."
    ],
    "source": "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages"
  },
  {
    "id": "web-services",
    "lesson": "package",
    "title": [
      "Web：网页加云数据或外部API",
      "Web: frontend plus external services"
    ],
    "when": [
      "网页托管之外还依赖数据、登录或API服务。",
      "When hosting depends on external data, login or APIs."
    ],
    "steps": [
      [
        "先完成静态/前端构建检查，再列依赖服务的测试与生产配置；开发账号配置不能直接当生产配置。",
        "Verify frontend output, then list test/production service settings separately."
      ],
      [
        "在各服务控制台创建或确认目标环境，按说明配置公开地址与保密变量；登录回调、允许来源、文件访问规则与目标网址一致。",
        "Create/confirm target environments, set public addresses and secrets correctly, and align callbacks, origins and access rules with the URL."
      ],
      [
        "用普通测试账号完成真实读写/登录/API请求，确认访问规则与失败提示；私密接口通过可信服务端处理。",
        "Test actual read/write, login and APIs with ordinary test access; private API calls require trusted server handling."
      ],
      [
        "核对服务额度、账单入口、备份和停用影响，再把依赖与证据写入交付记录。",
        "Check quotas, billing, backups and outage impact; record dependencies and evidence."
      ]
    ],
    "check": [
      "新环境能完整使用且不依赖开发机；配置和权限正确。",
      "The target works without the development machine and with correct configuration/access."
    ],
    "prompt": [
      "读取已选交付方案，只准备前端与已确认外部服务的测试交付。列各服务测试/生产环境、变量名、本人配置入口、登录回调/来源/数据访问要求，不输出秘密值。验证目标网址的真实登录、数据及外部调用，检查适用的拒绝和限额。记录依赖、费用核对入口、备份恢复、版本与证据到 docs/release.md。缺条件标阻断，不正式发布或创建付费资源。",
      "Prepare only the selected frontend and external-service trial. List test/production environments, config names, owner setup, callbacks/origins/access requirements without secret values. Verify real login, data and API behavior through the target URL, including relevant rejection and quotas. Record dependencies, billing entry, backup/recovery, revision and evidence. Mark missing prerequisites blocked; do not release or provision paid resources."
    ],
    "source": ""
  },
  {
    "id": "web-server",
    "lesson": "package",
    "title": [
      "Web：需要后端运行的应用",
      "Web: server-rendered or backend app"
    ],
    "when": [
      "需要持续运行服务端代码、任务或数据库。",
      "When server code, jobs or databases must run."
    ],
    "steps": [
      [
        "AI列实际运行时、启动命令、端口、数据库和磁盘需求；选择符合条件的已授权测试主机，不默认增加Docker。",
        "List runtime, startup command, port, database and disk requirements; use an authorized test host without assuming Docker."
      ],
      [
        "将代码/构建产物交给测试环境，安装生产依赖并配置秘密变量。数据迁移先备份并在测试库验证，不直接试正式库。",
        "Deliver code/output, install production dependencies and secrets. Back up and test migrations in a test database first."
      ],
      [
        "启动服务并查看日志/健康检查，核对进程重启、持久数据、代理/HTTPS和外部访问入口。",
        "Start and inspect logs/health, process restart, persistent data, proxy/HTTPS and external access."
      ],
      [
        "普通账号完整试用，记录部署命令、产物、日志入口、旧版恢复和数据兼容条件，再进入最终放行。",
        "Test ordinary access and record deployment, output, logs, previous-version recovery and data compatibility."
      ]
    ],
    "check": [
      "目标环境独立运行，重启不丢应保留数据，核心流程与恢复办法已验证。",
      "The target runs independently with required persistence and verified flows/recovery."
    ],
    "prompt": [
      "读取实际服务器交付方案与配置，准备测试环境部署步骤：运行时/生产依赖、构建产物、变量名称、数据迁移、启动命令、端口/代理、HTTPS、日志和进程重启。先确认资源权限与费用；数据库操作先备份并在测试库验证。仅执行已授权测试动作，核对普通用户全流程与适用的数据保留；记录实际结果及旧版/数据兼容恢复条件到 docs/release.md。不默认引入Docker，不操作正式库或正式发布。",
      "Prepare the actual server trial: runtime/dependencies, artifacts, config names, migrations, start command, ports/proxy, HTTPS, logs and restarts. Confirm access/costs; back up and test migrations in a test database. Execute only authorized test actions, verify ordinary-user flows and persistence, and record evidence and compatible recovery in docs/release.md. Do not assume Docker or change production data/release."
    ],
    "source": ""
  },
  {
    "id": "android",
    "lesson": "package",
    "title": [
      "Android：直接下载或应用商店",
      "Android: direct download or store"
    ],
    "when": [
      "目标是Android设备；先选分发渠道。",
      "For Android; choose a distribution channel first."
    ],
    "steps": [
      [
        "核对目标设备、应用标识、版本、开发者验证与所选渠道当前要求。由本人管理签名密钥及备份，不能提交仓库。",
        "Check device, app identity/version, developer verification and current channel requirements; manage signing keys privately with backups."
      ],
      [
        "按项目实际构建工具生成release签名产物。直接分发通常提供签名APK；Play渠道按其要求准备签名AAB等上传产物，AAB不是让用户直接点击安装的APK。",
        "Build signed release output. Direct distribution typically uses APK; Play requires its accepted upload artifact such as AAB, not a directly installable APK."
      ],
      [
        "用实际目标设备试安装、启动、权限、断网与升级保留数据；不要只运行debug版就认定正式包可用。",
        "Test the actual release on target devices: installation, permissions, offline behavior and update retention."
      ],
      [
        "直接分发准备可信下载页、版本与更新说明；商店准备真实截图、应用资料、数据声明和测试要求。正式上传和提交由“交付上线，检查实际入口”授权执行。",
        "Direct delivery needs a trusted download page and update information. Stores need accurate listings, screenshots, data declarations and required testing; authorize submission in the “Deliver and check the real entry” milestone."
      ]
    ],
    "check": [
      "所选渠道产物可用，真机测试有证据；待审核不记上线。",
      "Channel-specific output works on real devices; review-pending is not live."
    ],
    "prompt": [
      "读取Android交付决定，核对当前渠道官方要求、应用标识、版本、签名与开发者验证前提。先列本人账号/签名配置动作，勿读取打印密钥。用实际构建方式准备适合渠道的release产物，说明APK与上传包用途及路径。在可用目标设备验证安装、权限、核心流程和升级数据保留；不可测写未测试。记录渠道、版本、产物与证据到 docs/release.md；不提交商店、不上传公开下载站。",
      "Read the Android channel decision and current official requirements for identity, version, signing and developer verification. Explain owner account/key setup without exposing secrets. Build actual channel-appropriate release output and distinguish APK from upload artifacts. Test installation, permissions, core flows and update retention on available target devices; mark missing tests untested. Record channel, revision, output and evidence; do not submit or publish downloads."
    ],
    "source": "https://developer.android.com/studio/publish/preparing"
  },
  {
    "id": "ios",
    "lesson": "package",
    "title": [
      "iPhone/iPad：测试与正式分发",
      "iPhone/iPad: testing and distribution"
    ],
    "when": [
      "目标是iOS/iPadOS，不能套用Android下载方式。",
      "For iOS/iPadOS, not Android distribution."
    ],
    "steps": [
      [
        "先核对Mac/Xcode、目标设备、开发者账号权限及Bundle ID。本人在Apple工具完成账号与签名配置，先解决资格再打包。",
        "Check Mac/Xcode, device, developer access and Bundle ID; complete Apple account/signing setup before packaging."
      ],
      [
        "按项目方式归档，验证签名与版本，上传到对应App Store Connect应用记录；处理完成后才可用于后续测试/提交。",
        "Archive using the project toolchain, validate signing/version and upload to the correct App Store Connect app; wait for processing."
      ],
      [
        "测试分发按TestFlight当前条件配置测试者，在真机安装并试用。测试资格不等于正式公开分发资格。",
        "Use current TestFlight requirements, install on real devices and test. Test access is not public distribution approval."
      ],
      [
        "正式商店需应用资料、截图、隐私信息、审核所需访问及发布设置；其他分发方式有地区/账号/设备等条件，先核对适用性，不能默认把IPA放网站就能安装。",
        "Store delivery needs listing, screenshots, privacy information, review access and release settings. Alternative channels have eligibility constraints; hosting an IPA is not a universal install method."
      ]
    ],
    "check": [
      "所选合法可用渠道明确；真机试用与审核状态分别记录。",
      "An eligible channel is identified, with device tests and review state separately recorded."
    ],
    "prompt": [
      "读取iOS交付决定，先依据Apple当前官方资料核对设备、Xcode、账号、Bundle ID、签名和所选渠道资格。只准备本项目适用的归档、上传及测试步骤；本人处理账号和凭据。报告真实产物与版本，在可用真机验证核心流程、权限和升级；区分构建成功、处理完成、测试可用、待审核、正式可用。保存证据和未测项到 docs/release.md，不擅自提交审核或假设IPA可直接公开安装。",
      "Verify current Apple requirements for devices, Xcode, account, Bundle ID, signing and the chosen channel. Prepare only applicable archive/upload/test actions; the owner handles credentials. Report actual output/version and test core flows, permissions and upgrades on available devices. Distinguish build, processing, testing, review and live states. Save evidence/untested items to docs/release.md; do not submit for review or assume hosted IPA installation."
    ],
    "source": "https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/"
  },
  {
    "id": "desktop",
    "lesson": "package",
    "title": [
      "桌面：Windows / macOS / Linux",
      "Desktop: Windows / macOS / Linux"
    ],
    "when": [
      "用户要安装到电脑，而非只打开网页。",
      "For installed desktop applications."
    ],
    "steps": [
      [
        "确认目标系统、版本和CPU架构；由AI检查框架支持的构建机器与安装格式，不能默认本机产物适合所有电脑。",
        "Confirm OS/version/CPU and supported build hosts/formats; one artifact need not fit every computer."
      ],
      [
        "按所选直接下载或商店渠道核对签名/公证/审核要求。macOS外部分发查Developer ID与公证；Windows查对应安装格式/商店要求。",
        "Check signing/notarization/review for the chosen channel. Consult Developer ID/notarization for macOS and format/store requirements for Windows."
      ],
      [
        "生成正式安装产物，在无开发环境的目标机器测试安装、启动、文件权限、卸载与升级；系统拦截先查签名来源，不教关闭安全保护。",
        "Build release output and test on a target without development tools: install, launch, permissions, uninstall and upgrade. Investigate signing rather than disable protections."
      ],
      [
        "说明用户数据位置和卸载是否保留；升级测试确认数据兼容，再准备可信下载入口或商店资料。",
        "Document user-data location/retention and test upgrade compatibility before preparing distribution."
      ]
    ],
    "check": [
      "普通目标电脑按说明可安装运行，升级不破坏应保留数据。",
      "Ordinary target computers can install/use it and retain required data across updates."
    ],
    "prompt": [
      "读取桌面交付方案，核对目标系统/架构、实际构建工具、渠道和当前官方签名要求。准备对应正式安装产物和逐项操作说明，标明产物位置、安装卸载、数据位置及更新恢复。在可用的无开发环境目标机测试；缺设备则标未验证，不用开发机启动代替。记录证据到 docs/release.md，不公开分发、不绕过系统安全提示。",
      "Read desktop delivery decisions and verify OS/architecture, toolchain, channel and current signing requirements. Prepare release artifacts and installation/uninstall/data/update/recovery instructions. Test on available targets without development tools; mark missing devices unverified. Save evidence to docs/release.md; do not publish or bypass OS protections."
    ],
    "source": "https://learn.microsoft.com/en-us/windows/apps/publish/"
  },
  {
    "id": "mini-program",
    "lesson": "package",
    "title": [
      "小程序：按已选平台准备",
      "Mini-program: chosen platform"
    ],
    "when": [
      "例如微信；不同平台账号与发布流程不能互相套用。",
      "For platforms such as WeChat; do not mix platform procedures."
    ],
    "steps": [
      [
        "在已选平台官网核对主体、类目、账号权限和发布条件。微信使用对应开发者工具与AppID，由管理员授予开发/体验权限。",
        "Check entity/category/account and publishing prerequisites on the chosen platform; for WeChat use the matching tools/AppID and assigned permissions."
      ],
      [
        "开发工具打开真实项目并核对AppID、环境、请求域名/服务配置；本地调试忽略域名校验不能作为上线方案。",
        "Open the actual project, check AppID/environment and request-service settings; local validation bypasses are not production configuration."
      ],
      [
        "生成体验版本，在获得权限的真机账号中完成流程，记录登录、网络、数据与权限结果。",
        "Create a trial version and test on permitted real accounts/devices, including network, data and access."
      ],
      [
        "根据当前平台要求准备版本说明、隐私与审核材料，区分开发预览、体验、审核与正式发布。“交付上线，检查实际入口”才确认提交和发布。",
        "Prepare release notes, privacy and review material under current requirements; distinguish preview, trial, review and live release. Authorize submission in the “Deliver and check the real entry” milestone."
      ]
    ],
    "check": [
      "体验版用真实目标账号可用；平台资格与审核材料齐全；未发布不标上线。",
      "Trial works for real target accounts, prerequisites/material are complete, and unreleased stays unreleased."
    ],
    "prompt": [
      "读取已选小程序平台与交付决定，按该平台当前官方指南检查账号主体/类目、项目标识、开发权限、请求配置和体验资格。先列本人需完成的控制台操作及成功现象；用实际项目生成体验版本，在可用真机检验核心流程和访问条件。记录平台、版本、配置名称、证据与未测试项到 docs/release.md。不能以本地忽略校验代替正式配置，不擅自审核/发布，不套用另一平台步骤。",
      "Read the selected mini-program platform. Check current official account/category, app identity, developer permissions, request configuration and trial prerequisites. Explain owner console actions and success signals; create and test an actual trial on available devices. Record platform, revision, config names, evidence and untested items. Do not substitute local bypasses, use another platform’s procedure or submit/release without authorization."
    ],
    "source": "https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html"
  }
];

for(const branch of learningBranches){const reads=branch.lesson==='package'?'docs/design.md, docs/delivery.md, docs/release.md':'docs/requirements.md, docs/design.md, tasks/todo.md';branch.prompt=[`先读取 ${reads}，核对本分支属于已确认范围。缺材料则停止，说明应补的文件，不自行发明方案。\n`+branch.prompt[0],`Read ${reads} and confirm this branch is in agreed scope. Stop on missing files rather than inventing a plan.\n`+branch.prompt[1]];}
