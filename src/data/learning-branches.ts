import type {Copy} from './site';
export interface LearningBranch {id:string;lesson:string;title:Copy;when:Copy;steps:Copy[];actionPrompts:Copy[];check:Copy;prompt:Copy;source:string;}
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
        "先让工具说明：多人要共同查看哪些记录。",
        "Ask which records people need to share."
      ],
      [
        "用两个测试账号打开同一条记录，检查修改后两边是否都能看到。",
        "Open one record with two test accounts and check that changes appear for both."
      ],
      [
        "如果有人数限制，再试一次争抢最后一个名额。",
        "If capacity is limited, try two users requesting the final place."
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
    "source": "",
    "actionPrompts": [
      [
        "我正在做“多人共享与名额规则”。现在只做这一项：先让工具说明：多人要共同查看哪些记录。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Shared data and capacity. Do only this action: Ask which records people need to share. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“多人共享与名额规则”。现在只做这一项：用两个测试账号打开同一条记录，检查修改后两边是否都能看到。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Shared data and capacity. Do only this action: Open one record with two test accounts and check that changes appear for both. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“多人共享与名额规则”。现在只做这一项：如果有人数限制，再试一次争抢最后一个名额。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Shared data and capacity. Do only this action: If capacity is limited, try two users requesting the final place. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "先打开需求文档，确认哪些人能看哪些内容。",
        "Check who may access which content in the requirements."
      ],
      [
        "按工具说明创建两个只用于测试的账号，分别登录。",
        "Follow the tool’s instructions to create and sign into two test accounts."
      ],
      [
        "用账号 A 尝试打开账号 B 的私人记录，再退出账号试一次。",
        "Try opening B’s private record as A, then repeat after signing out."
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
    "source": "",
    "actionPrompts": [
      [
        "我正在做“登录与权限”。现在只做这一项：先打开需求文档，确认哪些人能看哪些内容。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Login and access. Do only this action: Check who may access which content in the requirements. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“登录与权限”。现在只做这一项：按工具说明创建两个只用于测试的账号，分别登录。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Login and access. Do only this action: Follow the tool’s instructions to create and sign into two test accounts. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“登录与权限”。现在只做这一项：用账号 A 尝试打开账号 B 的私人记录，再退出账号试一次。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Login and access. Do only this action: Try opening B’s private record as A, then repeat after signing out. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "打开所选服务的官网，先看清费用和测试额度。",
        "Open the chosen service’s official site and check costs and test allowance."
      ],
      [
        "让工具指出填写密钥的具体位置，再由自己填写。",
        "Ask where to enter the secret key, then enter it yourself."
      ],
      [
        "先测试一次请求，成功后再让页面调用；失败时看看页面怎么提示。",
        "Test one request before connecting the page, then check failure feedback."
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
    "source": "",
    "actionPrompts": [
      [
        "我正在做“API或AI能力接入”。现在只做这一项：打开所选服务的官网，先看清费用和测试额度。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on External API or AI capability. Do only this action: Open the chosen service’s official site and check costs and test allowance. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“API或AI能力接入”。现在只做这一项：让工具指出填写密钥的具体位置，再由自己填写。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on External API or AI capability. Do only this action: Ask where to enter the secret key, then enter it yourself. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“API或AI能力接入”。现在只做这一项：先测试一次请求，成功后再让页面调用；失败时看看页面怎么提示。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on External API or AI capability. Do only this action: Test one request before connecting the page, then check failure feedback. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "复制一份文件用于测试，保留原件。",
        "Copy a file for testing and keep the original."
      ],
      [
        "选择测试副本，试一次导入、处理和导出。",
        "Select the copy and try importing, processing and exporting it."
      ],
      [
        "再次导出同名文件，检查是否提示重名，并确认原件还在。",
        "Export the same filename again; check the warning and that the original remains."
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
    "source": "",
    "actionPrompts": [
      [
        "我正在做“文件导入、处理与导出”。现在只做这一项：复制一份文件用于测试，保留原件。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on File import, processing and export. Do only this action: Copy a file for testing and keep the original. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“文件导入、处理与导出”。现在只做这一项：选择测试副本，试一次导入、处理和导出。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on File import, processing and export. Do only this action: Select the copy and try importing, processing and exporting it. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“文件导入、处理与导出”。现在只做这一项：再次导出同名文件，检查是否提示重名，并确认原件还在。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on File import, processing and export. Do only this action: Export the same filename again; check the warning and that the original remains. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "打开 README，找到启动项目的说明，按顺序操作一次。",
        "Open README and follow the startup instructions."
      ],
      [
        "如果想双击打开，请工具为自己的电脑准备启动入口。",
        "If you want double-click startup, ask the tool to prepare an entry for your computer."
      ],
      [
        "找到数据保存位置，复制一份备份，再用副本试恢复。",
        "Locate saved data, make a backup and test restoration using a copy."
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
    "source": "",
    "actionPrompts": [
      [
        "我正在做“只在自己电脑使用”。现在只做这一项：打开 README，找到启动项目的说明，按顺序操作一次。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Personal local use. Do only this action: Open README and follow the startup instructions. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“只在自己电脑使用”。现在只做这一项：如果想双击打开，请工具为自己的电脑准备启动入口。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Personal local use. Do only this action: If you want double-click startup, ask the tool to prepare an entry for your computer. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“只在自己电脑使用”。现在只做这一项：找到数据保存位置，复制一份备份，再用副本试恢复。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Personal local use. Do only this action: Locate saved data, make a backup and test restoration using a copy. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "先让工具确认：这个网站是否只需要网页文件。",
        "Ask whether the site only needs static webpage files."
      ],
      [
        "让工具生成可交付的网页文件，并告诉你在哪里打开检查。",
        "Ask the tool to build the deliverable files and explain how to preview them."
      ],
      [
        "在所选托管平台建立测试站点，按工具说明填写设置，再打开临时网址试用。",
        "Create a test site on the chosen host, enter the required settings and try its temporary URL."
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
    "source": "https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages",
    "actionPrompts": [
      [
        "我正在做“Web：纯静态网站”。现在只做这一项：先让工具确认：这个网站是否只需要网页文件。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: static output. Do only this action: Ask whether the site only needs static webpage files. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“Web：纯静态网站”。现在只做这一项：让工具生成可交付的网页文件，并告诉你在哪里打开检查。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: static output. Do only this action: Ask the tool to build the deliverable files and explain how to preview them. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“Web：纯静态网站”。现在只做这一项：在所选托管平台建立测试站点，按工具说明填写设置，再打开临时网址试用。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: static output. Do only this action: Create a test site on the chosen host, enter the required settings and try its temporary URL. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "让工具列出网站依赖哪些外部服务，每个服务需要什么账号。",
        "Ask which external services and accounts the site needs."
      ],
      [
        "打开各服务后台，按照工具给出的位置填写网站地址和连接设置。",
        "Open each service dashboard and enter the site URL and connection settings where instructed."
      ],
      [
        "用普通测试账号试一次登录、保存和读取，检查费用和失败提示。",
        "Use an ordinary test account to try login, saving and reading; check costs and failure feedback."
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
    "source": "",
    "actionPrompts": [
      [
        "我正在做“Web：网页加云数据或外部API”。现在只做这一项：让工具列出网站依赖哪些外部服务，每个服务需要什么账号。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: frontend plus external services. Do only this action: Ask which external services and accounts the site needs. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“Web：网页加云数据或外部API”。现在只做这一项：打开各服务后台，按照工具给出的位置填写网站地址和连接设置。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: frontend plus external services. Do only this action: Open each service dashboard and enter the site URL and connection settings where instructed. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“Web：网页加云数据或外部API”。现在只做这一项：用普通测试账号试一次登录、保存和读取，检查费用和失败提示。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: frontend plus external services. Do only this action: Use an ordinary test account to try login, saving and reading; check costs and failure feedback. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "请工具说明服务器要运行什么，以及预估费用。",
        "Ask what the server needs to run and its estimated cost."
      ],
      [
        "选定测试服务器后，让工具一步一步说明上传、配置和启动方法。",
        "After choosing a test server, request one step at a time for uploading, configuring and starting."
      ],
      [
        "打开测试网址完成一次操作，再重启服务检查数据是否还在。",
        "Complete a task at the test URL, then restart the service and check retained data."
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
    "source": "",
    "actionPrompts": [
      [
        "我正在做“Web：需要后端运行的应用”。现在只做这一项：请工具说明服务器要运行什么，以及预估费用。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: server-rendered or backend app. Do only this action: Ask what the server needs to run and its estimated cost. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“Web：需要后端运行的应用”。现在只做这一项：选定测试服务器后，让工具一步一步说明上传、配置和启动方法。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: server-rendered or backend app. Do only this action: After choosing a test server, request one step at a time for uploading, configuring and starting. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“Web：需要后端运行的应用”。现在只做这一项：打开测试网址完成一次操作，再重启服务检查数据是否还在。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Web: server-rendered or backend app. Do only this action: Complete a task at the test URL, then restart the service and check retained data. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "先确定给什么安卓设备使用，以及直接下载还是上架商店。",
        "Choose the Android devices and direct download or store distribution."
      ],
      [
        "请工具按这个渠道准备正式安装文件，说明如何保管签名密钥。",
        "Ask for release files for that channel and instructions for storing signing keys."
      ],
      [
        "在目标手机上安装试用，再试升级后原来的数据是否还在。",
        "Install on the target phone and check that an upgrade retains existing data."
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
    "source": "https://developer.android.com/studio/publish/preparing",
    "actionPrompts": [
      [
        "我正在做“Android：直接下载或应用商店”。现在只做这一项：先确定给什么安卓设备使用，以及直接下载还是上架商店。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Android: direct download or store. Do only this action: Choose the Android devices and direct download or store distribution. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“Android：直接下载或应用商店”。现在只做这一项：请工具按这个渠道准备正式安装文件，说明如何保管签名密钥。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Android: direct download or store. Do only this action: Ask for release files for that channel and instructions for storing signing keys. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“Android：直接下载或应用商店”。现在只做这一项：在目标手机上安装试用，再试升级后原来的数据是否还在。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Android: direct download or store. Do only this action: Install on the target phone and check that an upgrade retains existing data. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "先请工具列出所需电脑、开发者账号和设备，再核对自己是否具备。",
        "Ask for required computer, developer account and devices, then check what you have."
      ],
      [
        "按当前 Apple 官方说明配置账号和签名，再让工具准备测试版本。",
        "Configure account and signing using current Apple instructions, then prepare a test version."
      ],
      [
        "在自己的 iPhone 或 iPad 上安装试用；准备公开时再核对上架资料。",
        "Install and try it on your iPhone or iPad; check store materials before public release."
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
    "source": "https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/",
    "actionPrompts": [
      [
        "我正在做“iPhone/iPad：测试与正式分发”。现在只做这一项：先请工具列出所需电脑、开发者账号和设备，再核对自己是否具备。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on iPhone/iPad: testing and distribution. Do only this action: Ask for required computer, developer account and devices, then check what you have. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“iPhone/iPad：测试与正式分发”。现在只做这一项：按当前 Apple 官方说明配置账号和签名，再让工具准备测试版本。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on iPhone/iPad: testing and distribution. Do only this action: Configure account and signing using current Apple instructions, then prepare a test version. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“iPhone/iPad：测试与正式分发”。现在只做这一项：在自己的 iPhone 或 iPad 上安装试用；准备公开时再核对上架资料。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on iPhone/iPad: testing and distribution. Do only this action: Install and try it on your iPhone or iPad; check store materials before public release. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "写清要支持 Windows、macOS 还是 Linux，以及电脑型号。",
        "Specify Windows, macOS or Linux and the computer model."
      ],
      [
        "请工具生成对应系统的安装文件，并说明签名和分发要求。",
        "Ask for the installer for that system and its signing/distribution requirements."
      ],
      [
        "在目标电脑上试安装、启动和升级，检查资料是否保留。",
        "Try installation, startup and upgrade on the target computer and check retained data."
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
    "source": "https://learn.microsoft.com/en-us/windows/apps/publish/",
    "actionPrompts": [
      [
        "我正在做“桌面：Windows / macOS / Linux”。现在只做这一项：写清要支持 Windows、macOS 还是 Linux，以及电脑型号。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Desktop: Windows / macOS / Linux. Do only this action: Specify Windows, macOS or Linux and the computer model. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“桌面：Windows / macOS / Linux”。现在只做这一项：请工具生成对应系统的安装文件，并说明签名和分发要求。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Desktop: Windows / macOS / Linux. Do only this action: Ask for the installer for that system and its signing/distribution requirements. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“桌面：Windows / macOS / Linux”。现在只做这一项：在目标电脑上试安装、启动和升级，检查资料是否保留。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Desktop: Windows / macOS / Linux. Do only this action: Try installation, startup and upgrade on the target computer and check retained data. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
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
        "进入所选小程序平台的官网，核对注册和发布需要哪些资格。",
        "Check registration and release eligibility on the chosen mini-app platform’s official site."
      ],
      [
        "在平台开发工具中打开项目，核对项目编号和服务地址。",
        "Open the project in the platform’s developer tool and check its ID and service URLs."
      ],
      [
        "准备体验版本，用获准的手机账号试完整流程，再整理审核资料。",
        "Prepare a trial build, test the full flow with an authorized phone account, then prepare review materials."
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
    "source": "https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/release.html",
    "actionPrompts": [
      [
        "我正在做“小程序：按已选平台准备”。现在只做这一项：进入所选小程序平台的官网，核对注册和发布需要哪些资格。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Mini-program: chosen platform. Do only this action: Check registration and release eligibility on the chosen mini-app platform’s official site. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“小程序：按已选平台准备”。现在只做这一项：在平台开发工具中打开项目，核对项目编号和服务地址。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Mini-program: chosen platform. Do only this action: Open the project in the platform’s developer tool and check its ID and service URLs. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ],
      [
        "我正在做“小程序：按已选平台准备”。现在只做这一项：准备体验版本，用获准的手机账号试完整流程，再整理审核资料。请先查看我的项目，告诉我在哪里操作、具体怎么做、完成后应看到什么。需要我操作账号时，一次只说明一个动作，等我完成再继续。不要跳到下一项或正式发布。",
        "I am working on Mini-program: chosen platform. Do only this action: Prepare a trial build, test the full flow with an authorized phone account, then prepare review materials. Inspect my project and explain where to act, the action and its expected result. For account actions, guide one action at a time and wait for me. Do not advance to another action or publish."
      ]
    ]
  }
];

for(const branch of learningBranches){const reads=branch.lesson==='package'?'docs/design.md, docs/delivery.md, docs/release.md':'docs/requirements.md, docs/design.md, tasks/todo.md';branch.prompt=[`先读取 ${reads}，核对本分支属于已确认范围。缺材料则停止，说明应补的文件，不自行发明方案。\n`+branch.prompt[0],`Read ${reads} and confirm this branch is in agreed scope. Stop on missing files rather than inventing a plan.\n`+branch.prompt[1]];}
