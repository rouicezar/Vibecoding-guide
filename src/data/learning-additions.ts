import type {Lesson} from './learning';
export const additions=[
  {
    "id": "description",
    "phase": "idea",
    "title": [
      "整理成可以交给 AI 的项目描述",
      "Prepare a project brief"
    ],
    "where": [
      "本站的想法草稿与下方模板",
      "The saved idea and template below"
    ],
    "actions": [
      [
        "展开模板，保留自动带入的想法，补充项目名称、使用设备和第一版的操作过程。还不知道的地方写尚未确定。",
        "Open the template, retain the saved idea, and add a name, devices and the first-version user flow. Mark unknowns undecided."
      ],
      [
        "核对后点击确认生成，复制或自行保存。这里先整理材料，不需要另找一个 AI。",
        "Confirm and copy or save it. No separate AI is required for this step."
      ]
    ],
    "expected": [
      "描述包含目标用户、问题、第一版、通过条件和后续范围，没有把例子当成自己的需求。",
      "The brief covers users, problem, first version, acceptance and later scope without treating examples as personal requirements."
    ],
    "prompt": [
      "我的项目名称：【填写名称】\n项目准备给谁使用、解决什么问题：见上方本人想法；需要时在此补充。\n准备在哪些设备上使用：【电脑浏览器／手机／桌面软件／尚未确定】\n第一版的一次使用过程：【填写从打开项目、进行操作到得到结果的过程】\n怎样试用才算通过：【填写操作与应该看到的结果】\n第一版暂时不做、第二阶段再做的功能：【填写或写无】\n费用和其他限制：【填写每月可接受的预算及限制；未知写尚未确定】\n未决定的问题：【填写或写无】",
      "Project name: [fill in]\nAudience and problem: use the personal idea above.\nDevices: [browser, mobile, desktop, or undecided]\nFirst-version flow: [opening, action, result]\nAcceptance: [actions and expected results]\nLater features and exclusions: [fill in or none]\nBudget and constraints: [fill in or undecided]\nOpen questions: [fill in or none]"
    ],
    "stage": "idea",
    "understanding": {
      "why": [
        "把想法整理成明确描述，AI 才能少猜一点。此时只说明要做什么，不需要先学技术名词。",
        "A clear brief reduces guesses. Describe the desired outcome without choosing technical terms yet."
      ],
      "concept": [
        "项目描述是沟通起点，不是最终需求；与 AI 澄清后还会修订。",
        "A brief starts the discussion; clarification can still change it."
      ],
      "question": [
        "如果 AI 要加一个未提到的功能，应该直接接受，还是先核对它是否解决第一版的问题？",
        "Should an unrequested feature be accepted immediately, or checked against the first-version goal?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "不知道第一版的流程怎么写",
          "Unsure how to describe the first flow"
        ],
        "check": [
          "先选择一个人和一件事，暂时不要列所有功能。",
          "Choose one person and one task before listing features."
        ],
        "action": [
          "按“打开哪里 → 做什么 → 看到什么”写三段。例如学习记录：打开页面、填写并保存、再次找到记录。无法确定的地方写尚未确定。",
          "Write “open → act → see a result”. A journal example is opening, saving a note and finding it again. Preserve unknowns."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "idea"
  },
  {
    "id": "stories",
    "phase": "scope",
    "title": [
      "把用户怎样使用写清楚",
      "Describe how people will use it"
    ],
    "where": [
      "项目对话与 docs/requirements.md",
      "Project chat and docs/requirements.md"
    ],
    "actions": [
      [
        "把下方提示词发给项目里的 AI，让它按真实使用顺序补充用户故事。",
        "Send the prompt to the project AI to add user stories in actual use order."
      ],
      [
        "打开文档，选择一个故事，口头走一遍从开始到结束的操作；对不上就先纠正。",
        "Open the document and walk through one story from start to finish; correct mismatches first."
      ]
    ],
    "expected": [
      "每个第一版功能都能对应到一个用户操作和通过条件。",
      "Each first-version feature maps to a user action and acceptance criteria."
    ],
    "prompt": [
      "读取 idea.md 和 docs/requirements.md。只整理已确认范围：按“什么用户，在什么情况下，希望完成什么，为什么”写用户故事；每个故事写开始条件、操作、正常结果、失败提示和通过条件。把用户故事保存为独立文档 docs/stories.md（不要并入 docs/requirements.md）。未知项标待确认，不增加功能。保存后读回并报告文件位置。本次不写业务代码。",
      "Read idea.md and docs/requirements.md. Write stories for confirmed scope: who, situation, goal and reason. Add prerequisites, actions, normal results, failure feedback and acceptance criteria. Save the stories as a separate document, docs/stories.md (do not merge them into docs/requirements.md). Mark unknowns, save and read back the file. Do not implement yet."
    ],
    "stage": "requirements",
    "understanding": {
      "why": [
        "功能名称不能说明是否好用。把人的操作写清楚，才能发现缺失的入口和失败后的处理。",
        "Feature names do not describe usability. User actions reveal missing entry points and recovery paths."
      ],
      "concept": [
        "用户故事说明用户想完成什么；验收条件说明怎样证明它完成了。",
        "A user story describes intent; acceptance criteria describe proof."
      ],
      "question": [
        "“支持保存”和“保存后重新打开仍能找到原文”，哪一句更容易亲手检查？",
        "Which is easier to check: “supports saving” or “the original text remains after reopening”?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "AI 只列功能名，没有使用过程",
          "AI lists features without a user flow"
        ],
        "check": [
          "找出一个故事是否包含开始条件、操作和结果。",
          "Check one story for prerequisites, actions and results."
        ],
        "action": [
          "回复：“请把第一个功能改写成一个人的实际操作过程，写出正常和失败时分别看到什么；不增加新功能。”",
          "Reply: “Rewrite the first feature as a person’s real flow, with normal and failed outcomes, without adding features.”"
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "requirements"
  },
  {
    "id": "prototype",
    "phase": "scope",
    "title": [
      "先看关键页面，再决定怎么开发",
      "Review a key screen before building"
    ],
    "where": [
      "项目对话与 AI 给出的原型预览",
      "Project chat and prototype preview"
    ],
    "actions": [
      [
        "让 AI 只制作一条核心流程的界面原型；无界面项目用输入输出样例代替。",
        "Ask AI for a prototype of one core flow, or input/output examples for a nonvisual project."
      ],
      [
        "打开预览，找到开始入口、主操作、结果和返回；说出最难理解的一处，再核对调整结果。",
        "Open the preview, find the entry, main action, result and return path; identify the most confusing part and review the change."
      ]
    ],
    "expected": [
      "能看懂第一版操作顺序，清楚哪些只是演示、哪些已经实现。",
      "The first-version flow is understandable, with simulated and implemented behavior distinguished."
    ],
    "prompt": [
      "读取已确认需求和用户故事。只做一条核心流程的轻量原型，说明输入入口、主操作、结果、返回及空白/失败状态。界面按目标设备排列；无界面项目提供输入输出样例。明确标注模拟数据和未实现的保存、登录或服务。给出实际打开位置及本人检查步骤。本次不宣称产品完成，不增加范围。",
      "Read approved requirements and stories. Prototype one core flow with input, action, result, back navigation, empty and error states for the target devices. For nonvisual work provide input/output examples. Label simulated data and unimplemented storage, sign-in or services. Provide a real preview and review steps; do not claim the product is complete."
    ],
    "stage": "ui",
    "understanding": {
      "why": [
        "先看见操作流程，可以在正式开发前发现理解偏差，减少做完再返工。",
        "Seeing the flow early exposes misunderstandings before implementation."
      ],
      "concept": [
        "原型用于确认布局和操作，不证明数据保存、权限或真实服务已经接通。",
        "A prototype validates layout and interaction, not real persistence, permissions or services."
      ],
      "question": [
        "画面显示“保存成功”，怎样确认它不是演示文字？",
        "How could a “Saved” message be distinguished from a simulation?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "原型看起来能用，但不清楚哪些是假数据",
          "The prototype may use simulated behavior"
        ],
        "check": [
          "查看 AI 是否标注了模拟数据、保存位置和真实服务。",
          "Check for labels identifying simulated data, storage and real services."
        ],
        "action": [
          "要求 AI 按控件列出“仅演示／真实实现／未实现”，然后只验布局和已说明的行为；保存能力留到实际开发时检查。",
          "Ask AI to label controls as simulated, real or unimplemented. Review layout and declared behavior; verify real persistence during development."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "stories"
  },
  {
    "id": "environment",
    "phase": "build",
    "title": [
      "检查运行环境，启动最小项目",
      "Check the runtime and start the project"
    ],
    "where": [
      "当前项目对话",
      "The current project chat"
    ],
    "actions": [
      [
        "发送模板，让 AI 先读设计和计划，检查电脑已有的运行工具，不直接安装一堆软件。",
        "Send the prompt to inspect the design, plan and installed tools before installing anything."
      ],
      [
        "按它给出的确切位置打开最小项目；缺少依赖或权限时，先完成对应处理再继续。",
        "Open the minimal project at the exact reported location; resolve missing dependencies or permissions before continuing."
      ]
    ],
    "expected": [
      "最小项目能实际启动，README 写明再次打开的方法，未安装项不冒充完成。",
      "The minimal project starts and README explains reopening; missing prerequisites stay explicit."
    ],
    "prompt": [
      "先读取规则、docs/design.md 与 tasks/todo.md。检查当前系统、已有文件、运行工具版本和依赖，只准备设计实际需要的环境；已有项目不重建。缺少安装权限、费用或关键配置时说明具体卡点。建立最小可启动结构，实际启动并报告地址/文件位置、启动结果和关闭后重新打开的方法，写入 README.md。更新规则中的实际检查命令；本次不实现额外功能、不发布。",
      "Read rules, docs/design.md and tasks/todo.md. Inspect the OS, existing files, runtime versions and dependencies. Prepare only required tools without rebuilding existing work. Report missing permissions, costs or configuration. Start a minimal structure, verify it and document the exact entry and restart steps in README. Update real check commands in project rules. Add no extra features and do not publish."
    ],
    "stage": "environment",
    "understanding": {
      "why": [
        "代码需要合适的运行环境。先验证能启动，后面的报错才容易区分是环境问题还是功能问题。",
        "Code needs a suitable runtime. Checking startup first separates environment failures from feature bugs."
      ],
      "concept": [
        "Git 记录文件版本；运行环境负责把程序启动。两者不是同一件事。",
        "Git records file versions; a runtime executes the program. They are different."
      ],
      "question": [
        "已经有 Git 提交，但预览打不开，能否据此认定环境已经准备好？",
        "Does a Git commit prove the runtime works when preview cannot open?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "安装或启动失败，不知道停在哪里",
          "Installation or startup fails"
        ],
        "check": [
          "保留原报错，核对命令在哪个文件夹执行及实际系统版本。",
          "Keep the exact error, working folder and OS version."
        ],
        "action": [
          "把原报错和文件位置交给 AI，请它区分缺依赖、版本冲突、权限和端口占用，只处理查明的一项。不要删除项目或反复安装不同工具。",
          "Give AI the error and location. Distinguish missing dependency, version, permission and port issues; fix the identified cause without deleting the project or repeatedly installing tools."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "plan"
  },
  {
    "id": "feedback",
    "phase": "check",
    "title": [
      "把试用结果记录成反馈",
      "Record the trial feedback"
    ],
    "where": [
      "实际作品、本页模板与项目对话",
      "The work, this template and project chat"
    ],
    "actions": [
      [
        "先亲自试用，再展开记录模板，逐项填写实际发生的情况。不同问题分别编号，不确定原因也可以提交。",
        "Try the work first, then fill in observed facts. Give separate issues different IDs; the cause can be unknown."
      ],
      [
        "确认复制后交给 AI，请它保留原始事实，保存到 docs/feedback.md；打开文件核对没有把未测试写成通过。",
        "Confirm and copy to AI, asking it to preserve facts in docs/feedback.md. Open it and check that untested items are not marked passed."
      ]
    ],
    "expected": [
      "有能让别人重复操作的反馈记录，事实、猜测和新增需求分开。",
      "Feedback is reproducible and separates facts, guesses and new requests."
    ],
    "prompt": [
      "本次测试版本和日期：【填写】\n设备、系统和实际入口：【填写】\n测试的功能：【填写】\n依次做了什么：【填写能重复的操作步骤】\n希望看到什么：【填写原需求中的结果】\n实际发生什么：【填写现象，不必猜原因】\n截图或报错原文：【附上或写无】\n出现频率：【每次／偶尔／只试一次】\n影响：【无法使用／可绕开／外观文字】\n已通过和未测试的部分：【分别填写】\n\n请把以上本人试用记录保存到 docs/feedback.md，按问题编号整理，保留通过、失败和未测试项，不自行改写为已通过。材料缺失先问。本次只记录，不修代码。",
      "Version/date: [fill in]\nDevice and entry: [fill in]\nFeature: [fill in]\nSteps: [fill in]\nExpected: [fill in]\nActual: [fill in]\nEvidence: [attach or none]\nFrequency: [always/sometimes/once]\nImpact: [blocked/workaround/cosmetic]\nPassed and untested: [fill in]\n\nSave these personal observations in docs/feedback.md with issue IDs. Preserve facts and unknowns; ask for missing material. Do not fix code yet."
    ],
    "stage": "accept",
    "understanding": {
      "why": [
        "“不能用”很难定位。记录从哪里开始、做了什么和实际结果，才能让 AI 复现同一个问题。",
        "“It does not work” is hard to reproduce. Starting points, actions and outcomes identify the same issue."
      ],
      "concept": [
        "反馈描述事实；原因需要检查才能确定。新想法也不等于原功能有缺陷。",
        "Feedback records facts; causes require investigation. New ideas are not necessarily defects."
      ],
      "question": [
        "“按钮没反应”和“数据库坏了”，哪一个是观察，哪一个需要证据？",
        "Which is an observation and which needs evidence: “button does nothing” or “database is broken”?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "问题偶尔出现，不能稳定重现",
          "The issue happens intermittently"
        ],
        "check": [
          "记录出现次数、设备、版本和最近一次完整操作。",
          "Record occurrence count, device, version and the latest full sequence."
        ],
        "action": [
          "在模板中标“偶尔发生”，附能看到的现象和日志。让 AI 先增加必要诊断或提供复现步骤，不把一次未复现写成修复成功。",
          "Mark it intermittent and attach observed evidence. Ask for diagnosis or reproduction steps; failure to reproduce once is not a successful fix."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "accept"
  },
  {
    "id": "repair-plan",
    "phase": "check",
    "title": [
      "先确定怎么修、怎样算修好",
      "Plan the fix and its passing checks"
    ],
    "where": [
      "项目对话与 docs/repair-plan.md",
      "Project chat and docs/repair-plan.md"
    ],
    "actions": [
      [
        "交给 AI 最新反馈和原需求，让它先复现、区分缺陷与新需求，再提出修复计划。",
        "Give AI feedback and original requirements; ask it to reproduce and separate defects from new requests before planning."
      ],
      [
        "核对每个问题的修复范围和通过条件；超出原范围的想法回到需求确认。",
        "Review scope and acceptance for each issue; return new features to scope agreement."
      ]
    ],
    "expected": [
      "每项修复对应反馈编号和可重复的通过条件。",
      "Every fix maps to a feedback ID and repeatable passing conditions."
    ],
    "prompt": [
      "读取 docs/feedback.md、需求、当前版本及检查记录。先复现问题，区分缺陷、新需求和证据不足；未知原因标推测。保存 docs/repair-plan.md：问题编号、影响、最小修复范围、原失败步骤的通过条件、受影响正常功能的复测和恢复办法。只处理已确认范围；需要改变需求或基础方案时先说明。本次只制定计划，不改业务代码。",
      "Read feedback, requirements, current version and checks. Reproduce issues and separate defects, new requests and missing evidence. Label uncertain causes. Write docs/repair-plan.md with issue IDs, impact, minimal scope, passing checks, regression checks and recovery. Explain scope or design changes before acting. Plan only; do not modify business code."
    ],
    "stage": "accept",
    "understanding": {
      "why": [
        "先定义修好后的结果，避免 AI 一边改一边改变目标，最后虽然不报错却不符合需求。",
        "Define the expected fix first so the goal does not drift during repairs."
      ],
      "concept": [
        "回归检查是确认修复没有破坏原来正常的功能。",
        "Regression checks verify previously working behavior still works."
      ],
      "question": [
        "修好了保存按钮，为什么还需要试一下读取历史记录？",
        "Why check history retrieval after fixing the Save button?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "AI 没给计划就开始修改",
          "AI starts fixing without a plan"
        ],
        "check": [
          "检查当前改动与反馈编号是否对应。",
          "Check whether changes map to feedback IDs."
        ],
        "action": [
          "暂停后续修改，先让 AI 汇报已经改过什么、保存当前状态，再补修复范围和通过条件。不为回到计划阶段强行丢弃现有改动。",
          "Pause further changes, report and preserve work already done, then define scope and passing checks. Do not discard changes merely to return to planning."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "feedback"
  },
  {
    "id": "repair",
    "phase": "check",
    "title": [
      "按计划修复，再交给本人复测",
      "Fix according to plan and hand back for retesting"
    ],
    "where": [
      "当前项目对话及实际预览",
      "Project chat and preview"
    ],
    "actions": [
      [
        "发送修复模板，让 AI 按问题编号处理，并提供真实测试结果与新版本。",
        "Send the repair prompt so AI works by issue ID and reports actual checks and a new version."
      ],
      [
        "打开新版本，按原来失败的步骤重做；也检查相关正常功能。本人未操作过的项目保留未验证。",
        "Open the new version and repeat the failed steps plus related normal actions. Keep untried items unverified."
      ]
    ],
    "expected": [
      "AI 检查与本人复测分别记录；仍失败就继续反馈，不能自动进入发布。",
      "AI checks and personal retests are recorded separately; failures return to feedback."
    ],
    "prompt": [
      "读取项目规则和 docs/repair-plan.md，只修复已确认问题，保护已有工作。逐项重跑原失败步骤和相关正常流程，在 docs/checks.md 记录问题编号、版本、预期、实际和未执行项。给出实际预览入口及本人复测步骤。不能代替本人标记人工通过；超出计划先说明影响。保存可追踪版本，不发布。",
      "Read rules and docs/repair-plan.md. Fix only approved issues and preserve existing work. Rerun failures and related normal flows. Record IDs, version, expected/actual results and unexecuted checks in docs/checks.md. Provide a real preview and personal retest steps. Never mark personal tests passed on my behalf. Save a traceable version; do not publish."
    ],
    "stage": "accept",
    "understanding": {
      "why": [
        "修复报告说明 AI 做了什么，本人复测才说明实际问题是否解决。",
        "A repair report describes AI work; personal retesting confirms the experienced problem is resolved."
      ],
      "concept": [
        "自动检查通过、人工试用通过是两种不同的证据。",
        "Automated checks and personal acceptance are different evidence."
      ],
      "question": [
        "如果 AI 自测通过，但同样的操作仍失败，下一步应该记录哪个事实？",
        "If AI checks pass but the same action fails, what fact should be recorded next?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "AI 说修好了，同样的操作仍失败",
          "The same action still fails after a claimed fix"
        ],
        "check": [
          "核对正在打开的是新版本，并保留原失败操作。",
          "Verify the new version is open and retain the failed sequence."
        ],
        "action": [
          "点击“复测仍有问题”，补充当前版本和实际结果。请 AI 用相同步骤复现并更新修复计划，不重新生成整个项目。",
          "Choose “Retest failed”, add version and actual results, and ask AI to reproduce and update the plan rather than recreate the project."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "repair-plan"
  },
  {
    "id": "release-review",
    "phase": "use",
    "title": [
      "检查是否具备交付条件",
      "Assess readiness for delivery"
    ],
    "where": [
      "项目对话与 docs/release.md",
      "Project chat and docs/release.md"
    ],
    "actions": [
      [
        "在模板中说明准备自己使用、公开网页还是提供安装包，再让 AI 逐项核对适用条件。",
        "State whether delivery is personal use, a public site or an installer; ask AI to check applicable conditions."
      ],
      [
        "阅读未满足和未验证项：阻断问题先修，轻微限制由本人明确决定是否接受。",
        "Review missing and unverified items. Fix blockers; personally decide whether minor limits are acceptable."
      ]
    ],
    "expected": [
      "知道哪些条件有证据、哪些仍缺失，以及是否允许继续准备交付。",
      "Readiness decisions distinguish verified conditions, gaps and permission to prepare delivery."
    ],
    "prompt": [
      "交付方式：【填写本机自用／公开网页／桌面安装包／移动应用或小程序】\n读取需求、设计、最新检查和本人反馈。检查适用的核心流程、阻断问题、配置、数据保存与权限、费用、目标平台要求、备份恢复和使用说明。分别列出已核验、未满足、不适用、未验证，附证据到 docs/release.md。条件不足转成带通过标准的修复任务，不宣布可以上线。本次不正式发布。",
      "Delivery: [personal use/public website/desktop installer/mobile app]\nRead requirements, design, checks and personal feedback. Assess applicable core flows, blockers, configuration, persistence, permissions, costs, platform requirements, backup/recovery and instructions. Record verified, missing, inapplicable and unverified items with evidence in docs/release.md. Turn gaps into tasks with passing criteria. Do not publish."
    ],
    "stage": "launch",
    "understanding": {
      "why": [
        "本机能跑不代表别人能用。交付前核对使用入口、费用和资料保存，避免把问题带给实际用户。",
        "Working locally does not establish usability for others. Check access, costs and storage before delivery."
      ],
      "concept": [
        "发布阻断项是会让关键任务失败、资料丢失或访问越权等不能带着上线的问题。",
        "Release blockers include core task failures, data loss and unauthorized access."
      ],
      "question": [
        "首页能打开，但重新登录后资料丢失，可以只看首页宣布上线吗？",
        "Can an openable home page establish readiness if data disappears after signing in again?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "评估说可上线，却没有证据",
          "Readiness is claimed without evidence"
        ],
        "check": [
          "查看每项是否有实际检查记录、版本和结果。",
          "Look for actual checks, versions and results."
        ],
        "action": [
          "把没有证据的项改为待验证。若影响核心任务、数据或权限，先完成检查或修复；不是把“待验证”直接改成“通过”。",
          "Mark unsupported items unverified. Complete checks or repairs for core flow, data and permissions instead of relabeling them passed."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "delivery"
  },
  {
    "id": "package",
    "phase": "use",
    "title": [
      "准备交付物，并实际试运行",
      "Prepare and try the deliverable"
    ],
    "where": [
      "项目对话和测试环境",
      "Project chat and a test environment"
    ],
    "actions": [
      [
        "让 AI 根据已确认平台准备构建、部署配置或安装包。不要默认所有项目都需要一键脚本。",
        "Ask AI for the approved platform build, deployment configuration or installer; not every project needs a one-click script."
      ],
      [
        "在适当测试环境打开网址或安装包，试用核心流程、重新打开和数据保留，记录结果。",
        "Try the URL or installer in a suitable test environment, including the core flow, reopening and data retention."
      ]
    ],
    "expected": [
      "实际交付物试运行通过，有使用及恢复说明，正式发布仍需本人确认。",
      "The deliverable has been tried, with use and recovery instructions; release still needs personal approval."
    ],
    "prompt": [
      "读取已确认的 docs/release.md，只准备适合本项目的构建/部署配置或目标系统安装包。写清前置条件、执行位置、费用、配置位置、成功现象和恢复方法；真实密钥不写入仓库或包。实际试部署或试安装，检查核心操作、重新打开和数据保留。记录版本及结果；无法验证的内容明确保留。未经本人确认不正式发布，不默认添加 Docker。",
      "Read approved docs/release.md. Prepare the appropriate build/deployment configuration or installer. Document prerequisites, execution location, costs, configuration, success and recovery. Keep secrets out of source and packages. Actually trial deploy/install and check core actions, reopening and persistence. Record version/results and unverified work. Do not publish without approval or add Docker by default."
    ],
    "stage": "launch",
    "understanding": {
      "why": [
        "构建成功只说明生成了文件。实际打开和使用交付物，才能发现目标环境里的问题。",
        "A successful build produces files; running them reveals target-environment problems."
      ],
      "concept": [
        "部署脚本把步骤自动执行，不会消除配置、费用和恢复责任。",
        "Deployment scripts automate steps, not configuration, costs or recovery responsibility."
      ],
      "question": [
        "安装包生成了，但没有在目标系统打开过，应记录成功还是待验证？",
        "If a package has not run on the target OS, is installation verified?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "安装包打不开或部署后启动失败",
          "Installer or deployed application fails"
        ],
        "check": [
          "核对目标系统、构建版本和完整错误，不跳过系统安全提示。",
          "Check target OS, build version and exact errors; do not bypass OS security warnings."
        ],
        "action": [
          "保留交付物和日志，返回反馈记录。请 AI 核对系统兼容、运行依赖和合法签名/平台要求，在测试环境修复再试，不覆盖现有可用版本。",
          "Keep the artifact and logs, return to feedback, and check compatibility, dependencies and legitimate signing/platform requirements. Retest without replacing a working version."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "release-review"
  },
  {
    "id": "live-check",
    "phase": "use",
    "title": [
      "确认交付，再检查实际入口",
      "Approve delivery and verify the real entry"
    ],
    "where": [
      "正式网址或目标设备",
      "The production URL or target device"
    ],
    "actions": [
      [
        "本人确认目标、版本、费用和交付范围后，让 AI 按已审阅方案交付；自用项目保留本机入口即可。",
        "Approve target, version, costs and scope before delivery; personal projects can retain a local entry."
      ],
      [
        "从目标用户的入口亲手走一次核心操作，记录版本、结果和恢复办法。失败先恢复可用状态再处理问题。",
        "Try the core flow from the target user entry. Record version/results/recovery; restore usability before further fixes if delivery fails."
      ]
    ],
    "expected": [
      "实际入口能使用；未交付或失败时明确记录，不把准备完成当上线成功。",
      "The actual entry works; pending or failed delivery is not reported as successful release."
    ],
    "prompt": [
      "本人已确认的交付目标、版本及允许执行的动作：【填写；未确认则只准备】\n先核对 docs/release.md 中条件及授权，再执行明确允许的交付动作。交付后核验真实网址或安装包的打开、核心流程、数据保存和访问规则，记录实际版本与结果。失败按已确认恢复方案处理。将重新打开、备份恢复、更新、费用到期和后续任务写入 README.md 与维护记录；未实现能力标待办。",
      "Approved target, version and allowed actions: [fill in; otherwise preparation only]\nCheck readiness and authorization in docs/release.md before allowed delivery actions. Verify the real entry, core flow, storage and permissions. Record the version and results; use approved recovery if needed. Document reopening, backup/recovery, updates, costs and next tasks in README and maintenance notes. Mark missing capabilities pending."
    ],
    "stage": "launch",
    "understanding": {
      "why": [
        "测试环境与正式入口可能不同。上线后再走一遍，才知道实际用户能否完成任务。",
        "Test and production environments can differ. Check the real user entry after delivery."
      ],
      "concept": [
        "代码版本和用户数据需要分别保护。Git 提交不等于数据库已经备份。",
        "Code versions and user data need separate protection; a Git commit is not a database backup."
      ],
      "question": [
        "换一个设备或身份，还能完成同一任务吗？哪些限制需要告诉使用者？",
        "Can another device or identity finish the same task, and which limits should users know?"
      ]
    },
    "issues": [
      {
        "id": "not-ready",
        "title": [
          "自己的电脑能开，其他人打不开",
          "It opens locally but not for others"
        ],
        "check": [
          "核对是否发出了 localhost、127.0.0.1 或私有预览地址。",
          "Check for localhost, 127.0.0.1 or a private preview URL."
        ],
        "action": [
          "从发布平台读取真实访问入口，检查访问权限和部署状态；由目标访问者重新试用。没有正式入口就保留待交付，不把本机地址当公网网址。",
          "Read the real entry from the platform, check access and deployment state, and retest as the intended visitor. A local address is not a public release."
        ],
        "expected": [
          "重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。",
          "Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified."
        ]
      }
    ],
    "after": "package"
  }
] satisfies (Lesson & {after:string})[];
