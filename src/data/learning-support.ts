import type {Copy} from './site';
export interface StepSupport {id:string;input:Copy;output:Copy;steps:Copy[];answer:Copy;example:Copy;recovery:Copy;terms:string[];}
export const stepSupport:StepSupport[]=[
  {
    "id": "idea",
    "input": [
      "你想改善的一件事；暂不需要工具或技术方案。",
      "One real problem; no tools or technical choices yet."
    ],
    "output": [
      "本站已确认想法 → 下一步项目描述。",
      "Confirmed guide draft → project brief."
    ],
    "steps": [
      [
        "先写真实使用者。例如“我们读书会的20名成员”，比“所有人”更容易确定需要什么。",
        "Name real users, such as 20 reading-club members, rather than everyone."
      ],
      [
        "写现在怎样办事、哪里困难，再写使用后能完成什么；不要只写“做一个好用的平台”。",
        "Describe the current process, difficulty and desired outcome, not just a useful platform."
      ],
      [
        "通过条件写成亲手可以做的动作。未来功能放第二阶段，不混入第一版。确认后在下一步点击“带入前面已确认的材料”。",
        "Make success personally testable. Keep later features separate. Confirm, then use the material button in the next step."
      ]
    ],
    "answer": [
      "想法是目的，不是技术清单。就像先说明要去哪里，再选交通工具；第一版做好一件事不等于以后不能扩展。",
      "An idea specifies the destination, like choosing where to go before transport. A small first version does not prevent later expansion."
    ],
    "example": [
      "用户：读书会成员。问题：群里报名容易漏记。通过：提交一次报名后能看到自己的报名；重复提交不会占两个名额。",
      "Users: club members. Problem: chat signups get lost. Pass: submit and see a reservation; repeating it does not reserve twice."
    ],
    "recovery": [
      "不知道就写尚未确定。不要为了填满而编造用户需求；第8步会逐项澄清。",
      "Keep unknowns explicit. Step 8 clarifies them; do not invent requirements."
    ],
    "terms": [
      "brief",
      "acceptance-criteria"
    ]
  },
  {
    "id": "description",
    "input": [
      "上一步已确认的想法。",
      "The confirmed idea."
    ],
    "output": [
      "本站项目描述 → 第6步复制给AI并保存为 idea.md。",
      "Guide brief → step 6 saves it as idea.md."
    ],
    "steps": [
      [
        "点击“带入前面已确认的材料”，核对用户、问题和通过条件；旧字段已有内容时不会覆盖，改动请亲自核对。",
        "Import confirmed material; review users, problem and criteria. Existing fields are preserved."
      ],
      [
        "补项目名称、使用设备和一次完整操作。例如手机浏览器打开活动→报名→看到结果。",
        "Add a name, device and complete flow: open event in a phone browser, book, see result."
      ],
      [
        "核对并确认生成。这里只形成文字；第6步才把它保存到真实项目。以后项目文件是AI执行依据，修改本站草稿不会自动改文件。",
        "Confirm the brief. This is text only until step 6 saves it in the project. Editing a guide draft does not automatically update project files."
      ]
    ],
    "answer": [
      "描述让AI少猜用户和结果；它不能替代后面确认的需求。名字、设备、场景不同，技术选择也可能不同。",
      "A brief reduces guessing about users and outcomes. It does not replace confirmed requirements; device and context affect later choices."
    ],
    "example": [
      "项目：读书会预约。设备：手机浏览器。流程：查看场次→输入姓名→报名→查看确认。预算：尚未确定。",
      "Project: club reservations. Device: phone browser. Flow: view session, enter name, book, see confirmation. Budget: undecided."
    ],
    "recovery": [
      "带入为空时先返回第1步确认草稿；不要重复手写已有材料。备份可在页末“我的项目材料与备份”下载。",
      "If import is empty, confirm step 1 first. Back up all material using the panel at the page bottom."
    ],
    "terms": [
      "brief",
      "context"
    ]
  },
  {
    "id": "tool",
    "input": [
      "项目描述、电脑系统及预算。",
      "Brief, computer OS and budget."
    ],
    "output": [
      "可访问项目的工具与本人核对的权益记录 → 建项目。",
      "A project-capable tool and checked account access → create project."
    ],
    "steps": [
      [
        "打开工具比较页，按上手难度、当前免费额度、订阅开销、文件/运行能力比较。先看官方系统要求，再选择与你电脑相符的安装包。",
        "Compare ease, current free allowance, subscription cost and file/runtime capabilities. Check official OS requirements first."
      ],
      [
        "桌面工具：按官方安装向导安装并登录；网页制作工具：创建工作区并确认可导出/查看文件；命令行工具：先按官方指南安装，在项目目录运行其启动命令。",
        "Desktop: install and sign in through the official guide. Web builder: create a workspace and check file/export access. CLI: follow official installation, then start it from the project folder."
      ],
      [
        "打开项目/文件入口。仅能回答文字的聊天模式不能直接修改电脑文件；没有所需权限时换到支持项目执行的模式，不盲目购买套餐。",
        "Locate project/file controls. Text-only chat cannot modify local files. Use a supported execution mode; do not purchase blindly."
      ],
      [
        "发送后看状态：运行中先等待；等授权时阅读它要读写的路径/命令；失败时保留原报错。额度耗尽先保存文件和下一任务，恢复后从当前项目继续。",
        "After sending: wait while running; review requested paths/commands when permission is needed; keep errors on failure. At a usage limit, save files and the next task before resuming."
      ]
    ],
    "answer": [
      "工具像工作台，模型像助手。能说出代码不等于能把文件放到你的工作台上；订阅也不必然包含API额度。",
      "The tool is a workbench and the model an assistant. Producing code text is not saving files. A subscription need not include API credits."
    ],
    "example": [
      "合格：能指出当前项目文件，并说明可以执行哪些检查。仅回答“当然可以帮你开发”不算能力证据。",
      "Evidence: actual project files and supported checks, not merely a promise to help."
    ],
    "recovery": [
      "安装/账号受限时保留错误，回工具比较页选择满足系统与预算的工具。各工具界面会变化，以当前官方入口为准。",
      "If access fails, retain the error and compare compatible tools. Use current official instructions for changing interfaces."
    ],
    "terms": [
      "agent",
      "ide",
      "cli"
    ]
  },
  {
    "id": "folder",
    "input": [
      "电脑本地目录或网页工具工作区。",
      "A local location or web workspace."
    ],
    "output": [
      "确定的项目名称与位置 → 第5步选中相同位置。",
      "Project name and location → select the same location in step 5."
    ],
    "steps": [
      [
        "Mac：访达→文稿→文件→新建文件夹；Windows：文件资源管理器→文档→新建→文件夹。用自己的项目名，例如 book-club；不要要求改成示例名字。",
        "Mac: Finder → Documents → File → New Folder. Windows: File Explorer → Documents → New → Folder. Use your own name, such as book-club."
      ],
      [
        "Mac选中文件夹可用 Option+⌘+C 复制路径；Windows在文件夹内点击地址栏复制位置。把位置放入本步记录，不用手打猜路径。",
        "Mac: select the folder and use Option+Command+C for its path. Windows: copy the folder address bar. Paste it into the record."
      ],
      [
        "网页工具在它的项目列表新建工作区，记录项目名和工作区入口；没有本地路径就明确写网页工作区，不能假装电脑里已有文件。",
        "For a web builder, create a workspace and record its name and URL. Mark it as a web workspace rather than inventing a local path."
      ]
    ],
    "answer": [
      "项目根目录就是装本项目全部文件的那一层盒子，不是整台电脑的根目录。一个项目一个盒子能避免AI改错文件。",
      "The project root is the box containing this project, not the computer’s root. Separate boxes prevent editing the wrong project."
    ],
    "example": [
      "book-club/ ← 在工具中选择这一层\n  idea.md ← 第6步才创建\n  docs/ ← 后面放需求文档",
      "book-club/ ← select this folder\n  idea.md ← created in step 6\n  docs/ ← later documents"
    ],
    "recovery": [
      "文件夹已有内容时保留。确认它是否属于本项目，不要通过删除旧文件来清空起点。",
      "Preserve existing files and check ownership; do not erase them to start."
    ],
    "terms": [
      "root-directory",
      "file-path"
    ]
  },
  {
    "id": "open-project",
    "input": [
      "已确认的文件夹/工作区位置。",
      "Confirmed folder or workspace location."
    ],
    "output": [
      "AI返回的真实位置与文件列表 → 起点准备。",
      "Actual location and file list → baseline preparation."
    ],
    "steps": [
      [
        "在工具选择 Open folder / 打开项目，选第4步的项目；网页工具从项目列表打开对应工作区。",
        "Use Open folder / project and select step 4’s folder, or open the corresponding web workspace."
      ],
      [
        "在该项目内新建对话，点击带入已确认材料，再发本步只读检查提示词。",
        "Start a conversation in this project, import confirmed material and send the read-only check."
      ],
      [
        "对照AI返回的位置与文件管理器。命令行工具需先在终端进入同一目录；不确定当前路径时先让工具报告，不执行制作任务。",
        "Compare its reported path with the file manager. CLI tools must start in that directory; verify before building."
      ]
    ],
    "answer": [
      "对话历史不是项目目录。像电话里谈了店铺装修，不代表师傅已经进了正确的店。",
      "Chat history is not a project directory: discussing a renovation is not entering the correct building."
    ],
    "example": [
      "通过：实际路径与第4步一致，现有文件列表可核对。失败：只回复一个建议路径。",
      "Pass: actual path and verifiable files. Fail: a suggested path only."
    ],
    "recovery": [
      "位置不一致先停止当前任务，重新选择项目后检查；只读模式无法写入时，按工具说明切换执行模式。",
      "Stop on a path mismatch and reopen the correct project. Use the tool’s documented execution mode for writes."
    ],
    "terms": [
      "working-directory",
      "context"
    ]
  },
  {
    "id": "checkpoint",
    "input": [
      "已确认项目描述与正确项目目录。",
      "Confirmed brief and correct directory."
    ],
    "output": [
      "idea.md、工具支持的规则文件、首次本地Git版本 → 第7步核对。",
      "idea.md, supported rules and first local Git revision → step 7."
    ],
    "steps": [
      [
        "点击带入项目描述并发送提示词。AI先检查Git是否存在；缺少时根据你的系统给官方安装入口和检查命令，完成安装后再重新检查。",
        "Import the brief and send the prompt. AI checks Git first; if absent it should provide official OS-specific installation and verification."
      ],
      [
        "AI核对当前仓库；首次空目录不需要先有历史版本。需要姓名/邮箱时由本人提供提交身份，优先只设置当前仓库；这不是账号密码。",
        "Check the repository. An empty folder needs no prior checkpoint. Supply commit name/email if needed, preferably scoped to this repository; these are not passwords."
      ],
      [
        "查看 idea.md 正文；规则文件由工具支持情况决定，AGENTS.md不是所有工具都自动读取。要求AI说明实际规则读取入口。",
        "Open idea.md. Rules depend on tool support: not every tool automatically reads AGENTS.md. Ask which entry it actually loads."
      ],
      [
        "核对忽略列表排除密钥、依赖和生成文件，再建立仅包含本步文件的本地提交。看到真实版本号才算完成；此时不需要远端账号。",
        "Check ignores for secrets, dependencies and output, then commit only this step’s files locally. Require a real revision; a remote account is unnecessary here."
      ]
    ],
    "answer": [
      "保存像把作业放进抽屉；提交像拍一张可找回的快照；推送才是把快照送到远端。Git通常不备份数据库或被忽略的文件。",
      "Saving puts work in a drawer, committing takes a recoverable snapshot, pushing sends it elsewhere. Git generally does not back up databases or ignored files."
    ],
    "example": [
      "项目/\n  idea.md\n  AGENTS.md（仅工具支持时）\n  .gitignore\n  .git/（隐藏的版本记录）",
      "project/\n  idea.md\n  AGENTS.md (if supported)\n  .gitignore\n  .git/ (hidden history)"
    ],
    "recovery": [
      "Git未装/提交身份缺失/无写权限时完成对应准备后重试。不要让AI伪造版本号或强制覆盖已有仓库。",
      "Resolve missing Git, identity or write access before retrying. Never invent revisions or overwrite an existing repository."
    ],
    "terms": [
      "git",
      "commit",
      "agents-md"
    ]
  },
  {
    "id": "first-file",
    "input": [
      "第6步报告的真实文件位置。",
      "Real paths reported in step 6."
    ],
    "output": [
      "本人确认文件存在且内容正确 → 需求讨论。",
      "Personally verified files → requirements discussion."
    ],
    "steps": [
      [
        "在AI工具文件区点击 idea.md；或按报告的路径在文件管理器打开。md是文本文件，可用文本编辑器查看，不需要执行它。",
        "Open idea.md in the tool’s file tree or a text editor. Markdown is text, not a program to run."
      ],
      [
        "核对用户、目标、通过条件和第二阶段范围；若文件后缀显示为 .md.txt，让AI定位实际文件并解释差异，不新建第二份描述。",
        "Check users, goal, criteria and later scope. If the extension is .md.txt, locate the actual file instead of duplicating it."
      ],
      [
        "查看规则文件内容和工具加载说明。已经验证真实项目文件，就不用再做 tool-check.md 练习。",
        "Inspect the rules and loading instructions. A verified real project file makes a tool-check.md exercise unnecessary."
      ]
    ],
    "answer": [
      "“AI说已保存”只是报告，亲手打开才知道文件确实在正确位置。网站草稿、聊天文本、磁盘文件是三份不同的东西。",
      "An AI report is not proof of a saved file. Guide drafts, chat text and disk files are distinct."
    ],
    "example": [
      "应看到自己的项目描述，不是“这里可以写项目描述”这种说明文字。",
      "Expect the actual personal brief, not instructions saying to write one."
    ],
    "recovery": [
      "按完整路径找不到时返回第6步核对实际保存结果，不创建另一份项目代替。",
      "Return to step 6 if the real file is missing; do not replace it with another project."
    ],
    "terms": [
      "markdown",
      "file-path"
    ]
  },
  {
    "id": "clarify",
    "input": [
      "idea.md。",
      "idea.md."
    ],
    "output": [
      "更新后的已确认事项与未知项 → 范围确认。",
      "Confirmed facts and open questions → scope."
    ],
    "steps": [
      [
        "让AI读文件并复述目标；读错先纠正，一次只回答一个影响第一版的问题。",
        "Ask AI to read and restate the goal, correct mistakes, then answer one scope-changing question at a time."
      ],
      [
        "遇到技术问题让AI换成实际选择：只在这台电脑用，还是几个人同时用？回答真实需要，不必猜数据库名。",
        "Translate technical questions into choices: one computer or several people? Answer needs, not database names."
      ],
      [
        "检查回答已写回 idea.md；收费、设备、核心能力不清楚时保留未知，不把猜测写成已确认。",
        "Check answers in idea.md. Keep uncertain cost, device and capability conditions explicitly unknown."
      ]
    ],
    "answer": [
      "澄清像裁衣前量尺寸，少一个关键尺寸，做得再快也可能不合身。暂时未知比错误肯定更有用。",
      "Clarification is measuring before tailoring. An explicit unknown is better than a wrong certainty."
    ],
    "example": [
      "预约项目需问：名额由谁设置？重复报名怎样算？取消后名额是否释放？",
      "Reservation questions: who sets capacity, what counts as duplicate, and does cancellation free a place?"
    ],
    "recovery": [
      "AI连续追问不影响第一版的细节时，要求区分“现在必须确认”和“可以以后再说”。",
      "Ask AI to separate essential questions from details that can wait."
    ],
    "terms": [
      "requirement",
      "context"
    ]
  },
  {
    "id": "scope",
    "input": [
      "idea.md 已确认目标。",
      "Confirmed goal in idea.md."
    ],
    "output": [
      "docs/requirements.md 范围小节 → 逐项需求。",
      "Scope in docs/requirements.md → detailed requirements."
    ],
    "steps": [
      [
        "让AI列必做、暂不做、待确认；每项写可观察的结果并给需求编号，如 R01报名、R02取消。",
        "List required, excluded and undecided items with observable outcomes and IDs, such as R01 book and R02 cancel."
      ],
      [
        "挑一条最小完整流程先做，但其他必做项仍保留在清单，不能因为不是第一条而丢掉。",
        "Choose one complete flow to build first; retain all other required items."
      ],
      [
        "亲自确认取舍后保存范围。以后改范围先列受影响文档、任务和测试，再确认变更。",
        "Confirm scope before saving. Later changes require an impact list for documents, tasks and tests."
      ]
    ],
    "answer": [
      "第一条流程是施工顺序，第一版范围是要交付的全部约定。先修一间房不等于其他房间不修。",
      "The first flow sets order; version-one scope sets the full promise. Building one room first does not cancel the others."
    ],
    "example": [
      "R01报名：不超过容量；R02取消：取消后释放名额；第二阶段：付费功能。",
      "R01 booking: never exceed capacity. R02 cancel: free a place. Later: payments."
    ],
    "recovery": [
      "需求太大时让AI解释每项代价，由本人选择延期项，不能静默删除。",
      "Ask for costs and choose deferrals personally; do not silently drop requirements."
    ],
    "terms": [
      "mvp",
      "scope-creep"
    ]
  },
  {
    "id": "requirements",
    "input": [
      "已确认范围。",
      "Confirmed scope."
    ],
    "output": [
      "有编号、规则和通过条件的需求 → 用户故事及测试。",
      "Numbered rules and criteria → stories and tests."
    ],
    "steps": [
      [
        "核对每项的使用者、输入、操作、结果及适用异常；业务规则写具体数量、状态或限制。",
        "Check actor, input, action, output and relevant failures; state concrete business limits and states."
      ],
      [
        "逐条读AI生成的文档，检查它是否增加了不需要的登录、存储或收费能力；技术名词由AI解释。",
        "Read the generated requirements and reject unrequested login, storage or payment features. Ask for explanations of jargon."
      ],
      [
        "确认需求编号与范围一致；需求不明确就回第8步讨论，技术方案留到第13步。",
        "Match IDs to scope. Clarify vague requirements in step 8; technology comes in step 13."
      ]
    ],
    "answer": [
      "“按钮能点击”是界面现象，“最后一个名额只能被一个人获得”才是业务规则。规则决定系统怎样处理操作。",
      "A clickable button is interface behavior; only one person getting the last place is a business rule."
    ],
    "example": [
      "不合格：报名好用。合格：R01容量20，报名成功余量减1；同一人重复请求不重复占位；已满显示无法报名。",
      "Weak: easy booking. Clear: R01 capacity 20, success reduces remaining places by one; duplicates do not consume extra places; full sessions reject booking."
    ],
    "recovery": [
      "AI文档只列标题时要求补一条具体需求样例，再用同样结构补其他已确认项。",
      "If the document contains headings only, ask for one concrete example, then apply it to the remaining agreed items."
    ],
    "terms": [
      "prd",
      "acceptance-criteria"
    ]
  },
  {
    "id": "stories",
    "input": [
      "docs/requirements.md 的需求编号。",
      "Requirement IDs."
    ],
    "output": [
      "同一文件内的用户故事及场景 → 原型。",
      "Stories and scenarios in the same document → prototype."
    ],
    "steps": [
      [
        "把每项需求展开为谁、何时、想做什么、为什么；关联原需求编号。",
        "Expand each requirement into who, when, what and why, linked to its ID."
      ],
      [
        "核对正常、失败、取消和返回流程；只列本项目适用的情况。",
        "Review success, failure, cancellation and return paths where relevant."
      ],
      [
        "亲自按故事口述一次使用过程。出现“然后系统就好了”这种跳跃，让AI补出用户下一步看到什么。",
        "Narrate one user journey. Replace vague jumps with the actual next screen or result."
      ]
    ],
    "answer": [
      "需求像菜谱的约定，故事像顾客从进店到吃完的一次经历，两者应描述同一个产品。",
      "Requirements are the agreement; a story is a customer’s complete visit. Both must describe the same product."
    ],
    "example": [
      "S01关联R01：成员打开活动→看到余位→提交→收到确认；已满时停在活动页并解释原因。",
      "S01 maps to R01: open event, see availability, submit, receive confirmation; when full, remain on the page with a reason."
    ],
    "recovery": [
      "故事与需求冲突先回需求确认，不让AI按新故事擅自扩范围。",
      "Resolve conflicts with requirements before extending scope."
    ],
    "terms": [
      "user-story",
      "user-flow"
    ]
  },
  {
    "id": "prototype",
    "input": [
      "需求和用户故事。",
      "Requirements and stories."
    ],
    "output": [
      "可查看的原型及 docs/design.md 交互决定 → 选型/制作。",
      "Viewable prototype and interaction decisions → implementation choices."
    ],
    "steps": [
      [
        "让AI说明交付格式和打开方法：图片直接查看；HTML按给出的路径/预览入口打开；无界面项目看输入输出样例。",
        "Ask for the format and viewing method: view an image, open the actual HTML/preview, or inspect input/output examples for headless tools."
      ],
      [
        "走一遍入口、主要操作、结果、返回及失败；标注哪些是假数据、哪些按钮只演示。",
        "Walk entry, action, result, return and failure, marking mocked data and demo-only buttons."
      ],
      [
        "确认布局和交互后保存决定；正式开发时逐项替换模拟功能，原型通过不等于业务完成。",
        "Save confirmed decisions. Replace mocked behavior during development; prototype approval is not functional acceptance."
      ]
    ],
    "answer": [
      "原型像装修效果图，用于看布局；水电能不能用，要等实际施工后验证。",
      "A prototype is a renovation drawing; working utilities require later construction and testing."
    ],
    "example": [
      "“报名成功”只是演示时，必须标“模拟结果，尚未写入真实记录”。",
      "A simulated confirmation must say it has not stored a real reservation."
    ],
    "recovery": [
      "打不开先核对格式、文件位置和是否需要启动服务，不让AI直接开始正式开发掩盖原型问题。",
      "Check format, path and server requirements before moving to production development."
    ],
    "terms": [
      "prototype",
      "mock"
    ]
  },
  {
    "id": "choose-stack",
    "input": [
      "需求、交互决定、真实设备/预算。",
      "Requirements, interaction decisions and actual device/budget."
    ],
    "output": [
      "确认的技术方案及风险验证计划 → 开发任务。",
      "Chosen design and feasibility plan → development tasks."
    ],
    "steps": [
      [
        "让AI按最难的已确认能力比较方案，例如手机文件权限、多人同步或外部接口，先核对目标渠道能否交付。",
        "Compare options around the hardest required capability, such as file access, sharing or external APIs; check delivery eligibility early."
      ],
      [
        "把关键不确定性列为“先验证”的小实验，写账号/设备前提、费用、输入、预期；本步只制定实验，不擅自安装。",
        "Plan a small experiment for critical unknowns with account/device prerequisites, cost, input and expected result; do not install in this step."
      ],
      [
        "确认方案和实验后写入设计文档；第15步准备环境后先跑实验。失败返回这里调整方案，不带着未证实前提做全套功能。",
        "Record the decision and experiment. Run it after environment setup in step 15; if it fails, return here before full development."
      ]
    ],
    "answer": [
      "选型像选交通工具，要看路况、预算和是否能到目的地，不只看别人说哪种快。",
      "Choose technology like transport: route, budget and destination matter, not popularity alone."
    ],
    "example": [
      "例如必须读取手机本地文件：先在目标设备验证选择文件与权限，再决定是否采用该方案。",
      "If phone file access is essential, verify file selection and permissions on the target device first."
    ],
    "recovery": [
      "关键前提未知就列阻断项。能运行一个演示不代表实际账号、设备或发布渠道可用。",
      "List unknown prerequisites as blockers. A demo does not prove account, device or distribution access."
    ],
    "terms": [
      "stack",
      "poc"
    ]
  },
  {
    "id": "plan",
    "input": [
      "全部第一版需求、技术与风险决定。",
      "All first-version requirements and design decisions."
    ],
    "output": [
      "tasks/todo.md 中需求→任务→测试映射 → 分任务执行。",
      "Requirement/task/test mapping in tasks/todo.md → task execution."
    ],
    "steps": [
      [
        "让AI给每项任务编号、依赖、产物、测试方法和通过条件；所有必做需求都要映射到任务。",
        "Give each task an ID, dependencies, output, test and criteria; cover every required requirement."
      ],
      [
        "第一项应足够小：能运行的最小入口或关键能力实验。不要把“开发整个系统”当一项。",
        "Start with a small runnable entry or feasibility experiment, not the entire system."
      ],
      [
        "亲自检查有没有漏掉取消、错误处理等已确认功能。任务状态区分待做、待本人检查、通过、阻断。",
        "Look for missing agreed features such as cancellation and errors. Distinguish pending, awaiting personal check, passed and blocked."
      ]
    ],
    "answer": [
      "任务表像施工单，测试标准像验收尺；每张单要知道交什么、用哪把尺看。",
      "A task list is a work order, and tests are its measuring tools. Each task needs both output and measurement."
    ],
    "example": [
      "R02取消 → T04实现取消 → 测试：取消一次释放1个名额；重复取消不再加名额。",
      "R02 cancellation → T04 implement it → test: release one place once; repeated cancellation releases no more."
    ],
    "recovery": [
      "发现需求无任务时补映射再开发；范围变化先更新相关文档和需重测任务。",
      "Fill missing mappings before development; update affected documents and tests after scope changes."
    ],
    "terms": [
      "plan",
      "dependency"
    ]
  },
  {
    "id": "environment",
    "input": [
      "确认方案与环境要求。",
      "Approved design and environment requirements."
    ],
    "output": [
      "可重复启动的最小项目、README运行说明及能力实验结果 → 开发。",
      "Repeatable minimal project, README and feasibility result → development."
    ],
    "steps": [
      [
        "让AI只读检查系统、运行时、包管理器和锁文件，说明缺什么、为何需要。已有项目沿用现有工具版本，不同时混用多种安装器。",
        "Inspect OS, runtime, package manager and lockfile first. Explain missing dependencies; preserve the existing toolchain."
      ],
      [
        "缺少工具时按官方安装步骤补齐，由AI给与你系统匹配的检查命令；重新打开终端后核对版本。不要复制别的项目的命令。",
        "Install missing tools through official instructions, then verify versions in a new terminal using project-specific commands."
      ],
      [
        "在项目根目录安装依赖、运行最小启动命令。AI报告真实输出和入口：网页是实际网址，原生应用是目标设备/模拟器，无界面程序是执行命令。",
        "Install dependencies and start from the project root. Report the actual URL, device/emulator or headless command."
      ],
      [
        "打开入口核对，再按README停止并重启。若有第13步关键实验，先完成它；失败回选型，成功再继续。",
        "Open the entry, stop and restart using README. Run any step 13 feasibility experiment before continuing; return to selection on failure."
      ]
    ],
    "answer": [
      "运行时像炉子，依赖像食材，锁文件像这次实际用料清单。启动服务后窗口要保持运行，不能关掉后仍期待网址工作。",
      "The runtime is a stove, dependencies ingredients and the lockfile a precise ingredient list. A local server must remain running to serve its URL."
    ],
    "example": [
      "成功记录示意（非真实日志）：命令/执行目录/版本/实际入口/停止方法/重启结果；“安装成功”不等于项目已启动。",
      "Illustrative record: command, directory, versions, real entry, stop method and restart result. Installation is not startup."
    ],
    "recovery": [
      "command not found先核对安装和终端；端口占用先查哪个进程，不杀未知程序；依赖失败保留首条错误与锁文件，不反复删库重装。",
      "For command-not-found check installation; for busy ports identify ownership; for dependency failures retain the first error and lockfile."
    ],
    "terms": [
      "runtime",
      "package-manager",
      "lockfile"
    ]
  },
  {
    "id": "preview",
    "input": [
      "tasks/todo.md、需求与已验证环境。",
      "Task list, requirements and verified environment."
    ],
    "output": [
      "本任务真实结果与检查记录 → 下一任务或专项核对。",
      "Actual task output and checks → next task or focused verification."
    ],
    "steps": [
      [
        "先让AI读任务表，选择依赖已满足的第一项未完成任务，报任务编号和测试标准。一次只做这一项。",
        "Read the task list, identify the first ready unfinished task, and report its ID and criteria. Execute only that task."
      ],
      [
        "完成后打开真实入口亲手操作。AI跑过的测试与本人试用分开记录；失败进入反馈，不能改成“通过”。",
        "Open the real entry and try it. Separate AI checks from personal testing; report failures rather than marking passed."
      ],
      [
        "本任务核对后保存文件、记录版本与结果，再重复发送本步提示词做下一项。界面和数据问题可展开第17/18步对应指导，处理后回到任务表。",
        "After verification save files, revision and results, then reuse this prompt for the next task. Consult steps 17/18 for UI/data guidance and return to the list."
      ],
      [
        "全部必做任务完成或本人明确延期后，才进入全项目测试；不要做完第一项就认为第一版完成。",
        "Begin whole-project testing only after all required tasks are done or explicitly deferred. One task is not the entire version."
      ]
    ],
    "answer": [
      "一次一个任务是控制改动大小，不是整个项目只做一个功能。像逐件组装家具，每件验收后还要看清单是否齐全。",
      "One task at a time limits change size; it does not mean one feature total. Check the complete inventory after assembling each piece."
    ],
    "example": [
      "T01入口：已检查；T02报名：待做；T03取消：待做 → 当前还不能进入“全部功能验收通过”。",
      "T01 entry checked; T02 booking pending; T03 cancel pending → full acceptance is not yet possible."
    ],
    "recovery": [
      "AI越做越多先停止，让它列已改文件与任务对应关系，保留现状，回到当前任务；不要重建项目。",
      "Stop scope drift, inspect changed files and task mapping, preserve the current state and return to the task."
    ],
    "terms": [
      "iteration",
      "commit"
    ]
  },
  {
    "id": "interface",
    "input": [
      "已确认设计、当前页面与真实截图。",
      "Agreed design, page and actual screenshot."
    ],
    "output": [
      "指定位置的界面改动及回归检查 → 当前开发任务。",
      "Focused UI change and regression check → current task."
    ],
    "steps": [
      [
        "写页面入口和具体位置；截图标出想改的区域。组件资料是参考，先让AI查项目已有组件再决定复用。",
        "Give the page entry and exact area; annotate the screenshot. Check existing project components before reusing examples."
      ],
      [
        "说明默认、处理中、成功、失败、空内容状态，以及点击后实际发生什么，不只描述颜色。",
        "Specify idle, loading, success, error and empty states, including real actions rather than colors alone."
      ],
      [
        "预览检查字号、手机布局、键盘操作和原业务功能；无界面项目标不适用，并写原因。",
        "Check typography, mobile layout, keyboard use and existing behavior. Headless projects record why this is inapplicable."
      ]
    ],
    "answer": [
      "组件像门把手：样子合适还要能真的开门。换外观不应顺带改变数据规则。",
      "A component is like a door handle: it must work, not just look right. Styling should not silently change data rules."
    ],
    "example": [
      "位置：活动页报名按钮。处理中禁重复提交；失败说明原因并可重试；成功显示实际报名结果。",
      "Location: event booking button. Prevent repeat submission while loading; explain errors and allow retry; show the real result."
    ],
    "recovery": [
      "看不到修改先确认当前入口、运行进程与修改文件属于同一项目，不盲目清除用户数据。",
      "Check the entry, running process and changed file belong to the same project before clearing anything."
    ],
    "terms": [
      "component",
      "state",
      "a11y"
    ]
  },
  {
    "id": "save",
    "input": [
      "需求中明确的数据/权限/外部能力任务。",
      "Agreed data, access and integration tasks."
    ],
    "output": [
      "真实数据或接口检查记录 → 流程测试。",
      "Actual data or integration evidence → flow tests."
    ],
    "steps": [
      [
        "先判断是否需要保存或外部服务；只展示页面的项目可以不适用，不为教学硬加数据库。",
        "Determine whether storage or external services are needed; a display-only site may skip them."
      ],
      [
        "本机保存：写测试资料→关闭→重开→核对；多人共享：在不同账号/浏览器检查同一数据；不能用同一浏览器证明共享成功。",
        "Local storage: write, close, reopen, compare. Shared data: check with separate accounts/browsers; one browser cannot prove sharing."
      ],
      [
        "需要登录/权限/文件/API时，展开下方对应能力；先配置测试环境，再做一个最小真实操作，最后核对失败与访问边界。",
        "For login, permissions, files or APIs, expand the relevant capability below. Configure test access, run a real minimal action, then test failures and boundaries."
      ]
    ],
    "answer": [
      "本地记事本像自己抽屉，共享数据库像公共登记处。能放进去不等于别人能看到，更不等于别人只能看该看的内容。",
      "Local storage is a private drawer; shared storage is a registry. Saving proves neither sharing nor correct access."
    ],
    "example": [
      "两人抢最后1个名额：只能1人成功；另一人看到已满。重复请求不能多占名额。",
      "Two users claim the last place: exactly one succeeds; repeats do not reserve additional places."
    ],
    "recovery": [
      "丢数据先记录入口、账号、数据存放位置和动作，用测试数据重现，不先删库。",
      "Record entry, account, storage location and actions; reproduce with test data rather than deleting the database."
    ],
    "terms": [
      "database",
      "api",
      "authorization"
    ]
  },
  {
    "id": "flow",
    "input": [
      "需求、已完成任务、测试入口。",
      "Requirements, completed tasks and test entry."
    ],
    "output": [
      "docs/checks.md 全流程记录 → 异常测试。",
      "End-to-end record in docs/checks.md → failure checks."
    ],
    "steps": [
      [
        "先让AI从需求生成测试账号/资料表，说明创建位置、权限和清理方法。测试通知用测试渠道，不触发真实交易。",
        "Prepare accounts and disposable data with creation location, permissions and cleanup; use test notification/payment channels."
      ],
      [
        "从普通用户入口按完整流程操作，不借管理员权限跳过用户步骤。记录每步实际结果与当前版本。",
        "Walk the complete journey as an ordinary user, recording actual results and revision."
      ],
      [
        "先走一条，再覆盖所有必做需求对应流程；不可执行的标未测试并说明由谁补。",
        "Start with one flow, then cover all required journeys. Mark inaccessible actions untested with an owner."
      ]
    ],
    "answer": [
      "单个按钮可用不代表整条流程连通，像每段水管都好却没有接起来。",
      "Working buttons do not prove a connected flow, like good pipes that are not joined."
    ],
    "example": [
      "R01 / 版本abc / 输入测试姓名 / 预期确认+余位减1 / 实际一致 / 证据截图路径 / 通过。",
      "R01 / revision abc / test name / expect confirmation and one fewer place / actual matches / evidence path / passed."
    ],
    "recovery": [
      "失败只记录问题和操作证据，本步不修代码；第23步整理反馈后再修复。",
      "Record failures here without code changes; organize feedback in step 23 before repair."
    ],
    "terms": [
      "e2e",
      "test-case"
    ]
  },
  {
    "id": "test",
    "input": [
      "测试标准、测试账号与可清理数据。",
      "Test criteria, accounts and disposable data."
    ],
    "output": [
      "失败、通过、未测试分开的异常记录 → 人工验收。",
      "Separated pass/fail/not-run results → personal acceptance."
    ],
    "steps": [
      [
        "按需求选择适用情况：空输入、边界数量、重复操作、无权限、网络失败。无该功能就写不适用及原因。",
        "Select relevant empty inputs, limits, duplicates, denied access and network failures; record justified inapplicability."
      ],
      [
        "多人名额/余额等操作要用两个独立会话同时尝试，核对最终记录；AI说明如何保证规则不被并发绕过。",
        "For shared capacity or balances, test two independent sessions concurrently and inspect final records."
      ],
      [
        "每个用例记录预期、实际、证据和版本。构建通过只能证明能生成程序，不能替代业务测试。",
        "Record expected/actual outcomes, evidence and revision. A successful build does not replace business tests."
      ]
    ],
    "answer": [
      "异常测试不是故意刁难，是检查用户手滑或网络出错时系统会不会把事办坏。",
      "Failure tests check whether mistakes and outages cause damage."
    ],
    "example": [
      "重复报名：通过；断网：失败；iPhone真机：未测试。不能把这份报告写成“全部通过”。",
      "Duplicate booking passed; offline failed; iPhone device untested. This is not an all-pass report."
    ],
    "recovery": [
      "不知怎样制造异常时让AI给可逆测试方法，不改正式数据或关闭真实安全措施。",
      "Request reversible test methods without changing production data or security settings."
    ],
    "terms": [
      "regression",
      "concurrency"
    ]
  },
  {
    "id": "restart",
    "input": [
      "README启动/停止说明与当前测试版本。",
      "README start/stop instructions and revision."
    ],
    "output": [
      "重启可用证据 → 人工目标验收。",
      "Restart evidence → personal acceptance."
    ],
    "steps": [
      [
        "保存当前任务，按README停止本项目进程；桌面/手机应用正常退出，网页工具使用它的重新运行入口。",
        "Save work and stop the project as documented; close native apps or rerun the web workspace."
      ],
      [
        "按README重新打开同一项目。浏览器访问实际启动网址，安装应用从系统应用入口打开，无界面项目运行记录的命令。",
        "Reopen the same project using its actual URL, installed-app entry or documented command."
      ],
      [
        "重做核心动作；有保存要求才检查数据保留，无保存需求只核对运行与结果。",
        "Repeat the core action; check retained data only when required."
      ]
    ],
    "answer": [
      "重启验证能证明你知道怎样再次使用作品；它不自动证明换设备也能安装或线上也能运行。",
      "Restarting proves repeatable use, not installation on another device or production readiness."
    ],
    "example": [
      "静态介绍页：重开能浏览即可。记事工具：还必须找回原记录。",
      "A static page must reopen; a notes tool must also retain notes."
    ],
    "recovery": [
      "找不到端口/命令回README让AI补实际项目说明；不要重新初始化项目。",
      "Ask AI to correct README for this project rather than reinitializing it."
    ],
    "terms": [
      "url",
      "database"
    ]
  },
  {
    "id": "accept",
    "input": [
      "原始目标、实际版本、检查记录。",
      "Original goal, actual revision and checks."
    ],
    "output": [
      "本人人工结论 → docs/acceptance.md → 反馈或交付。",
      "Personal verdict → docs/acceptance.md → feedback or delivery."
    ],
    "steps": [
      [
        "用自己的项目目标逐项实际操作；拿AI说“通过”不能代替亲手试用。",
        "Personally exercise each goal; an AI pass claim is not personal testing."
      ],
      [
        "填下方记录，注明版本、入口、预期、实际与未测试项。展开“把本步记录交给AI保存”，发送生成的话术。",
        "Complete the record with revision, entry, expected/actual results and untested items; send the record-saving prompt below."
      ],
      [
        "打开 docs/acceptance.md 核对结论。失败进入反馈；未测试继续补测试；只有符合目标才选择交付。",
        "Open docs/acceptance.md and check it. Send failures to feedback, complete untested work, then choose delivery when goals are met."
      ]
    ],
    "answer": [
      "验收是你检查点的菜有没有上齐，厨师说做好了不是你已经吃过。",
      "Acceptance is checking your order; the cook announcing completion is not your tasting it."
    ],
    "example": [
      "版本abc：报名通过；取消未测试 → 结论未测试，不能写第一版全部通过。",
      "Revision abc: booking passed, cancellation untested → not fully accepted."
    ],
    "recovery": [
      "不知道版本号时让AI读取并说明当前未提交改动；不要自己编编号。",
      "Ask AI to report the revision and uncommitted changes; do not invent an ID."
    ],
    "terms": [
      "acceptance-criteria",
      "version"
    ]
  },
  {
    "id": "feedback",
    "input": [
      "本人操作与失败证据。",
      "Personal actions and failure evidence."
    ],
    "output": [
      "docs/feedback.md 编号问题 → 修复计划。",
      "Numbered issues in docs/feedback.md → repair plan."
    ],
    "steps": [
      [
        "保留同一个问题编号，如 F01；写入口、设备、版本、重复步骤、预期、实际。",
        "Keep a stable issue ID such as F01 with entry, device, revision, steps and expected/actual result."
      ],
      [
        "截图包含相关界面与提示；终端错误从第一次出错处复制到原因行，遮去密钥和个人资料，不只发“报错了”。",
        "Include relevant UI and error text, from first failure to cause; remove secrets and personal data."
      ],
      [
        "让AI只整理记录，未知原因写待查；不能复现时增加发生时间与条件，不提前改代码。",
        "Ask AI to organize evidence only. Leave cause unknown and add timing/conditions if intermittent; do not edit code yet."
      ]
    ],
    "answer": [
      "反馈写现象像告诉医生哪里痛，不必自己猜病因。准确过程比一句“不能用”有用。",
      "Feedback describes symptoms; you need not diagnose the cause."
    ],
    "example": [
      "F01 / 取消后刷新 / 预期余位+1 / 实际未变 / 版本abc / 两次均复现。",
      "F01 / cancel then refresh / expect one place restored / actual unchanged / revision abc / reproduced twice."
    ],
    "recovery": [
      "日志找不到时说明出错发生在浏览器、终端还是设备，让AI指出对应查看入口。",
      "Identify whether the error is in browser, terminal or device and ask for the relevant log location."
    ],
    "terms": [
      "bug",
      "log"
    ]
  },
  {
    "id": "repair-plan",
    "input": [
      "编号反馈与当前项目。",
      "Numbered feedback and current project."
    ],
    "output": [
      "修复范围与测试标准 → 执行修复。",
      "Repair scope and criteria → execution."
    ],
    "steps": [
      [
        "让AI只读排查原因，逐项关联反馈编号，列最小修改范围和影响。",
        "Inspect read-only, link each issue ID, and propose minimal changes and impact."
      ],
      [
        "每项列原问题如何重现、修好应看到什么、哪些原功能需回归；本人看懂后确认。",
        "Specify reproduction, passing result and regression scope, then review and confirm."
      ],
      [
        "不相关的新需求单列以后处理，不混进修复；涉及数据更改先说明备份与恢复。",
        "Keep new features outside fixes; explain backup and recovery before data changes."
      ]
    ],
    "answer": [
      "先定修复计划能避免修一扇门时把整栋房子拆掉。测试标准先写，才知道改完是否真的解决。",
      "Planning avoids rebuilding the house to fix a door. Predefined criteria make the result judgeable."
    ],
    "example": [
      "F01：修正取消释放名额；复测原步骤；回归报名和重复取消；不改页面样式。",
      "F01: restore capacity on cancellation; reproduce and retest; regress booking and repeated cancel; no styling changes."
    ],
    "recovery": [
      "原因不确定就先列最小验证，不把猜测当结论直接大改。",
      "Verify the smallest hypothesis before broad changes."
    ],
    "terms": [
      "root-cause",
      "regression"
    ]
  },
  {
    "id": "repair",
    "input": [
      "已确认修复计划。",
      "Approved repair plan."
    ],
    "output": [
      "修复版本与本人复测记录 → 重新验收。",
      "Repair revision and personal retest → acceptance again."
    ],
    "steps": [
      [
        "按计划逐项修复，AI跑对应检查并记录真实输出、修改文件与版本。",
        "Fix one planned item, run checks and record actual output, changed files and revision."
      ],
      [
        "本人重走同一编号问题的原步骤，再检查受影响原功能。未做本人复测时不能关闭问题。",
        "Personally repeat the original steps and affected functions; do not close an issue before retesting."
      ],
      [
        "失败沿用原编号追加证据；成功写修复版本和复测结果。交付问题修好后回第27步重新评估。",
        "Append failures under the same ID; on success record revision and retest. Return delivery-related fixes to step 27."
      ]
    ],
    "answer": [
      "复测检查伤口好了没，回归检查治疗有没有伤到别处；两者都重要。",
      "Retesting checks the original fix; regression checks other behavior."
    ],
    "example": [
      "F01 / 修复版本def / 原步骤通过 / 报名回归通过 / 本人已复测 → 可以关闭F01。",
      "F01 / revision def / original case passed / booking regression passed / personally retested → close F01."
    ],
    "recovery": [
      "结果与AI不同以实际为准，保留截图和版本，回反馈更新同一问题。",
      "If personal results differ, preserve evidence and update the same issue."
    ],
    "terms": [
      "regression",
      "rollback"
    ]
  },
  {
    "id": "delivery",
    "input": [
      "本人验收记录及实际使用者。",
      "Personal acceptance and actual users."
    ],
    "output": [
      "docs/delivery.md 交付决定 → 准备条件评估。",
      "Delivery decision in docs/delivery.md → readiness review."
    ],
    "steps": [
      [
        "先选使用入口：自己电脑、公开网址、桌面安装、手机应用或小程序；记录目标系统和用户如何获得它。",
        "Choose local use, URL, desktop/mobile installation or mini-program; specify OS and user access."
      ],
      [
        "用下方模板记录本人选择，再生成保存话术写到 docs/delivery.md。仅在本站填完不代表AI知道决定。",
        "Record your choice, then generate a save prompt for docs/delivery.md. Guide input alone does not inform AI."
      ],
      [
        "看第28步对应交付分支的账号、设备、费用前提；静态Pages方案可以现在查第30步，然后回第27/28步，不等上线后才选择。",
        "Review step 28 prerequisites. Static Pages planning in step 30 belongs before packaging, not after release."
      ]
    ],
    "answer": [
      "源码像菜谱，构建产物像做好的菜，运行环境像餐具和保温设备。交源码不等于别人已经能用。",
      "Source is a recipe, build output the meal, and runtime its serving equipment. Sharing a recipe is not serving a meal."
    ],
    "example": [
      "网站：网址+运行服务；桌面：适合目标系统的安装产物；手机：对应平台和渠道的签名产物/商店入口。",
      "Web: URL plus running services. Desktop: compatible installer. Mobile: signed channel-specific output or store entry."
    ],
    "recovery": [
      "不知道交什么先按使用者设备与分发范围选择；不要默认所有项目必须有一键部署脚本。",
      "Choose from users and distribution needs; not every project needs a one-click deploy script."
    ],
    "terms": [
      "build",
      "artifact",
      "deploy"
    ]
  },
  {
    "id": "release-review",
    "input": [
      "需求、检查、docs/acceptance.md、docs/delivery.md。",
      "Requirements, checks, acceptance and delivery documents."
    ],
    "output": [
      "docs/release.md 准备检查 → 修复或制作交付物。",
      "Readiness checks in docs/release.md → repair or packaging."
    ],
    "steps": [
      [
        "让AI逐项检查已确认功能、阻断问题、账号/费用、配置、恢复与使用说明；缺材料明确回对应步骤。",
        "Review functions, blockers, accounts/costs, configuration, recovery and instructions; identify missing prerequisite steps."
      ],
      [
        "本步是制作交付物之前的准备检查。尚无产物时“目标环境试运行”只能写待验证，不能写通过。",
        "This is pre-packaging readiness. Target-environment trials remain pending until a deliverable exists."
      ],
      [
        "有阻断先反馈修复；具备准备条件才进入第28步。第28步完成后，第29步还要做最终放行检查。",
        "Repair blockers first; proceed to packaging when ready. Step 29 checks final release readiness after trial."
      ]
    ],
    "answer": [
      "准备检查像出门前查证件，最终放行像登机检查；前者通过不证明旅途已经完成。",
      "Readiness is checking your documents; release clearance is boarding. Neither proves the trip already completed."
    ],
    "example": [
      "构建条件：已核验；真机安装：待第28步；正式发布：未执行。",
      "Build prerequisites verified; device installation pending step 28; release not executed."
    ],
    "recovery": [
      "把不足写入带编号反馈，修复后重新评估，别在提示词里要求AI替你宣告全部通过。",
      "Number readiness gaps, repair and reassess rather than asking AI to declare success."
    ],
    "terms": [
      "release",
      "environment"
    ]
  },
  {
    "id": "package",
    "input": [
      "已选平台与准备检查。",
      "Chosen platform and readiness review."
    ],
    "output": [
      "实际交付物、位置、版本与试运行记录 → 最终放行。",
      "Actual artifact, location, revision and trial → release clearance."
    ],
    "steps": [
      [
        "按下方交付类型展开。先确认实际构建命令、输出位置、环境配置和需要本人完成的账号动作；命令由AI读取本项目确定。",
        "Expand the relevant delivery type. Determine commands, output, configuration and personal account actions from the actual project."
      ],
      [
        "构建完成后找到真实产物；在测试环境或目标设备试部署/安装，按普通用户流程验证，不只看首页。",
        "Locate the real output, deploy/install in the test target, and test ordinary-user journeys beyond the homepage."
      ],
      [
        "记录版本、产物位置、依赖服务、安装/启动方法、结果和恢复方式到 docs/release.md；未验证项保留原状态。",
        "Record revision, artifact, services, instructions, results and recovery in docs/release.md; retain unverified status."
      ]
    ],
    "answer": [
      "构建成功只证明加工完成，试运行才检查送到目标地方后是否能用。动态网站还需要服务进程和数据服务，不能只上传一个文件夹。",
      "Build success proves processing, not target usability. Dynamic sites need running services and data, not merely uploaded files."
    ],
    "example": [
      "仓库 → 项目实际构建命令 → 输出目录/安装包 → 测试目标 → 普通用户操作 → 试运行证据。",
      "Repository → actual build command → output/installer → test target → user actions → evidence."
    ],
    "recovery": [
      "构建失败保留第一条错误；本机好而目标坏，查目标配置、系统/架构、服务和日志，不重新生成整个项目。",
      "Keep the first build error. If only the target fails, inspect configuration, architecture, services and logs."
    ],
    "terms": [
      "build",
      "artifact",
      "code-signing"
    ]
  },
  {
    "id": "live-check",
    "input": [
      "试运行证据、交付目标和本人授权。",
      "Trial evidence, target and explicit release authorization."
    ],
    "output": [
      "真实入口、版本与上线核对 → 维护。",
      "Real entry, revision and live checks → maintenance."
    ],
    "steps": [
      [
        "先看第28步产物与试运行是否齐全，阻断/未测项是否已处理。明确将发布到哪个账号/地址、版本和费用，由本人确认发布动作。",
        "Review artifact and trial evidence, resolve blockers, and confirm account/address, revision, cost and release action."
      ],
      [
        "按所选渠道执行；等待审核只记待审核，上传成功不等于普通用户已能使用。",
        "Execute the chosen channel. Pending review is not live, and upload success does not prove user access."
      ],
      [
        "用独立浏览器/目标设备和普通账号从真实入口操作，检查数据/权限/错误反馈；记录实际结果。失败按既定恢复方案处理。",
        "Test the real entry on an independent browser/device with ordinary access, including data, permissions and errors; use the planned recovery on failure."
      ]
    ],
    "answer": [
      "管理员自己能打开像店主有钥匙，不代表顾客进得来。上线检查要站在真实用户入口。",
      "An owner’s key does not prove customers can enter. Test through the actual public/user entry."
    ],
    "example": [
      "网址可访问但登录回调失败 → 未通过；商店正在审核 → 待审核；普通用户完整流程通过 → 已核对。",
      "Reachable URL but broken login callback: fail. Store review pending: pending. Full ordinary-user flow passes: checked."
    ],
    "recovery": [
      "回滚代码前检查数据格式兼容；恢复数据库会影响用户资料，先备份并确认范围，不盲目覆盖。",
      "Check data compatibility before code rollback. Back up and confirm scope before restoring a database."
    ],
    "terms": [
      "deploy",
      "rollback"
    ]
  },
  {
    "id": "publish",
    "input": [
      "静态网站交付决定。",
      "Static-site delivery choice."
    ],
    "output": [
      "Pages适用判断与设置方案 → 返回第28步。",
      "Pages suitability and setup → return to step 28."
    ],
    "steps": [
      [
        "这是第26—28步使用的可选方案，不是上线后的必做任务。需要服务端或秘密凭据的项目不能直接按纯静态站处理。",
        "This is an optional plan for steps 26–28, not a post-release requirement. Server-side work and secrets need another arrangement."
      ],
      [
        "让AI读取实际构建配置，确定输出目录、资源路径和发布方式。设置入口是对应仓库 Settings → Pages，按当前官方说明选择构建来源。",
        "Read actual build config for output, asset paths and publishing method. Use repository Settings → Pages and current official guidance."
      ],
      [
        "只准备配置说明，返回第28步试运行；正式创建远端/推送/发布统一在第29步确认后执行。",
        "Prepare instructions, return to step 28 for trials, and perform authorized remote publishing in step 29."
      ]
    ],
    "answer": [
      "Pages像静态展板托管处，不是替所有后台程序提供运行厨房。",
      "Pages hosts static displays rather than a runtime for every backend."
    ],
    "example": [
      "介绍页/静态文档可评估；需要服务端保管密钥的AI接口不能把密钥放进网页产物。",
      "Evaluate brochure/docs sites; never place private API keys in browser output."
    ],
    "recovery": [
      "资源404先核对输出与基础路径；需后端时返回交付选择，不把凭据改成公开来凑合。",
      "For asset 404s check output/base paths. If a backend is needed, return to delivery selection rather than exposing secrets."
    ],
    "terms": [
      "static-site",
      "static-site"
    ]
  },
  {
    "id": "maintain",
    "input": [
      "已交付版本、使用说明、日志和账号控制台。",
      "Delivered revision, instructions, logs and service consoles."
    ],
    "output": [
      "docs/handoff.md 维护清单与下一任务 → 可持续使用。",
      "Maintenance and next-task handoff → continued use."
    ],
    "steps": [
      [
        "让AI列本项目实际维护表：负责人、频率、入口、正常结果、失败处理。无云服务就不要增加云账单任务。",
        "Create a project-specific table: owner, frequency, entry, expected result and failure action. Omit irrelevant cloud tasks."
      ],
      [
        "有数据就先在测试环境恢复一份备份并核对内容；保存代码版本不能代替数据备份。",
        "If data exists, restore a backup in a test environment and verify it. Code revisions do not replace data backups."
      ],
      [
        "按约定周期查看实际日志、用量/账单和域名/签名有效期。升级先在测试环境验证核心流程，保留旧版恢复方式。",
        "Review actual logs, usage/billing and relevant expiry dates on schedule. Test upgrades before release and retain recovery."
      ],
      [
        "新需求先说明改什么，AI列受影响需求、设计、任务与测试；本人确认后更新文档。新对话先读交接文件再继续。",
        "For new scope, review affected requirements, design, tasks and tests before approval. Start new conversations by reading the handoff."
      ]
    ],
    "answer": [
      "维护像定期检查自行车，不是每次从零造一辆。交接文件告诉下一次的你：车在哪里、哪里修过、下一件事是什么。",
      "Maintenance is checking a bicycle, not rebuilding it. A handoff records where it is, what changed and what is next."
    ],
    "example": [
      "数据备份：每周/本人/服务备份入口/在测试库恢复并对照数量/失败保留原库并排查；频率按可接受损失调整。",
      "Backup example: weekly, owner, service backup entry, restore in test and compare records; preserve the source on failure. Adjust frequency to acceptable loss."
    ],
    "recovery": [
      "异常先记录时间、版本、入口和日志，按影响决定恢复或修复，不直接在正式环境试不确定命令。",
      "Record time, revision, entry and logs, then choose recovery or repair without experimenting on production."
    ],
    "terms": [
      "backup",
      "monitoring",
      "migration"
    ]
  }
];

export const referenceAnswers:Record<string,Copy>={
  "idea": [
    "能指出实际人群、困难和使用后的变化，例如读书会成员从群里漏记报名，变成能查询自己的预约。只说“做个平台”还不够。",
    "Name real users, their difficulty and the changed outcome; a platform alone is not a goal."
  ],
  "description": [
    "先核对它是否服务于已确认的第一版目标。有关但非必需的功能先记后续，不直接加入当前制作。",
    "Check against the agreed first-version goal; defer related but nonessential additions."
  ],
  "tool": [
    "取决于工具的文件保存与导出能力，不能只看聊天是否还在。先确认项目实际位置，备份文件和交接记录，再决定怎样续用。",
    "It depends on file storage/export, not chat history alone. Locate and back up files and handoff before resuming."
  ],
  "folder": [
    "本地项目应能指出可打开的完整路径；网页工作区应能指出对应项目入口，并知道代码能否导出。本站草稿不是代码目录。",
    "Identify the actual local path or web workspace and export options. Guide drafts are not the code directory."
  ],
  "open-project": [
    "让AI只读报告真实路径和现有文件，再与第4步记录及文件管理器对照。只看对话标题不够。",
    "Compare AI’s actual read-only path/files with step 4 and the file manager; a chat title is insufficient."
  ],
  "checkpoint": [
    "没有。仓库初始化只是建立版本管理容器，成功提交后才有相应文件快照；数据库和未纳入Git的文件需另行备份。",
    "No. Initialization creates a repository; a commit creates a snapshot. Databases and untracked material need separate backup."
  ],
  "first-file": [
    "核对同一项目位置、实际文件名与后缀、读回内容；要求报告真实路径。不要用另一份新文件掩盖原文件没保存的问题。",
    "Check location, name/extension and readback, not a replacement file created elsewhere."
  ],
  "clarify": [
    "会改变使用者、必做功能、数据位置、费用或交付方式的未知应先澄清；不影响当前范围的细节可以明确留待以后。",
    "Clarify unknowns affecting users, required features, data, cost or delivery; defer nonessential details explicitly."
  ],
  "scope": [
    "如果删掉后用户无法完成约定目标，它通常是必做；如果只是更方便，可以评估延期。最终取舍由本人确认。",
    "If removing it prevents the agreed goal, it is usually required; convenience improvements may be deferred by the owner."
  ],
  "requirements": [
    "不能。“好用”没有统一观察方法；应改成具体操作和结果，例如重复报名不重复占位。",
    "No. Replace subjective quality with actions and observable outcomes such as duplicate requests not reserving twice."
  ],
  "stories": [
    "后一句更容易检查，因为给出了保存后的操作和可观察结果。还应注明同一设备还是跨设备，避免误解。",
    "The second is testable; also specify same-device or cross-device behavior."
  ],
  "prototype": [
    "按要求真正保存，再重新读取或重开核对实际记录；原型可能只有假数据和提示文字，所以此时不能认定已实现。",
    "Actually write and reread/reopen the record when implemented; a prototype message alone is not evidence."
  ],
  "choose-stack": [
    "本机资料只在当前设备或浏览器中。跨设备需要约定的数据服务、身份或同步方式，并用另一设备验证，不会自动发生。",
    "Local data stays on that device/browser. Cross-device use needs designed storage/identity/sync and another-device verification."
  ],
  "plan": [
    "看该任务的产物和通过条件，应该能说出实际入口、操作及结果。若只有“完成基础架构”，应要求拆到可检查的成果。",
    "Name its entry, action and result from the task criteria. Vague infrastructure tasks need inspectable outputs."
  ],
  "environment": [
    "不能。Git只管理文件版本；运行时、依赖、配置和启动过程仍需实际验证。",
    "No. Git tracks files; runtime, dependencies, configuration and startup need separate verification."
  ],
  "preview": [
    "本地网址通常由该窗口运行的服务提供。关闭进程后它停止响应，按README重启即可，不需要重新开发。",
    "The local URL is served by the running process. Restart it using README instead of rebuilding the project."
  ],
  "interface": [
    "应能指出具体改善，例如更容易找到报名入口、错误原因可见；只说“更漂亮”不足以判断操作是否改善。",
    "Name an actual improvement, such as discoverable booking or clear errors, beyond visual preference."
  ],
  "save": [
    "在约定存放位置读回，再关闭并重开；共享需求还需另一用户/设备检查。仅当前界面显示不证明持久保存。",
    "Read from the intended storage, close/reopen, and test another user/device if sharing is required."
  ],
  "flow": [
    "从普通用户入口按步骤操作，不能借助管理员后台补数据或依赖未写出的口头说明；缺任何一步就补入流程。",
    "Use the ordinary entry without admin shortcuts or unwritten guidance; document missing actions."
  ],
  "test": [
    "按本项目行为选择，如重复点击、空输入、取消、断网或无权限，并写预期处理；不是给所有项目增加相同功能。",
    "Choose likely project-specific mistakes and expected handling; do not add features merely to test them."
  ],
  "restart": [
    "应能只靠README找到项目、运行命令或安装入口及结果；否则先补真实启动说明，再验证一次。",
    "README should locate the project, entry/command and expected result without chat history."
  ],
  "accept": [
    "有关键步骤未测试就记未测试；有不可接受问题就记录反馈。本人实际核对通过后再进入交付，不由AI代填。",
    "Untested critical work remains untested and unacceptable issues need feedback; AI cannot supply personal acceptance."
  ],
  "feedback": [
    "“按钮没反应”是观察；“数据库坏了”是原因判断，需要日志或检查支持。先写动作、预期和实际结果。",
    "An unresponsive button is an observation; a broken database is a hypothesis needing evidence."
  ],
  "repair-plan": [
    "保存与读取可能共用数据结构或接口，修一个可能影响另一个。原问题复测与相关正常功能回归都要做。",
    "Saving and reading may share structures/APIs; retest the fix and regress related behavior."
  ],
  "repair": [
    "记录同一版本、相同步骤下本人仍失败的实际结果，沿用问题编号追加证据，不能以AI自测覆盖它。",
    "Record the actual personal failure at the same revision/steps under the same issue ID."
  ],
  "delivery": [
    "看实际用户如何使用：浏览器访问选网址；安装使用选对应系统产物；本机自用可只需要可重复的启动说明。不要先选包装形式再硬凑需求。",
    "Choose by intended access: URL, compatible installed artifact or repeatable local startup instructions."
  ],
  "release-review": [
    "不能。首页可开仅证明局部入口正常，登录后资料保留属于核心流程时必须验证，失败就先修复。",
    "No. A working homepage proves little about required login and persistence; fix critical failures first."
  ],
  "package": [
    "产物生成可以记录成功，但目标系统试运行仍是待验证。两个状态分开写，不能推断安装可用。",
    "Record build success separately from an unverified target trial."
  ],
  "live-check": [
    "按承诺的目标设备、身份和渠道实测；不支持的设备、账号要求、网络要求等明确告知，未测不能写支持。",
    "Test promised devices, roles and channels; disclose requirements and limits without presenting untested support as verified."
  ],
  "publish": [
    "浏览器本地数据常按网址来源隔离，正式域名是另一个来源。需要迁移时先导出备份，再按实际数据方案导入，不能期待自动出现。",
    "Browser local data is origin-scoped. A new domain may require explicit backup/migration; it does not appear automatically."
  ],
  "maintain": [
    "通常不能。仓库保存纳入版本的文件，用户数据可能在数据库、服务或浏览器里；需要相应备份并验证恢复。",
    "Usually not. User data may live in a database, service or browser; back up and test restoration separately."
  ]
};
