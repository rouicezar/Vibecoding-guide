import type {Copy} from './site';
export interface StepSupport {id:string;input:Copy;output:Copy;steps:Copy[];answer:Copy;example:Copy;recovery:Copy;terms:string[];}
export const stepSupport:StepSupport[]=[
  {
    "id": "idea",
    "input": [
      "你想解决的一件事。",
      "One problem you want to solve."
    ],
    "output": [
      "生成的草稿保留了自己的用户、问题、试用方法。",
      "The draft retains your users, problem and test."
    ],
    "steps": [
      [
        "向下找到“07 本步材料”里的“按模板改成自己的想法”输入框。保留四个问题，只把【】里的说明换成自己的答案。先填写“这个项目主要给谁使用”，例如“我自己”。\n完成后：第一个问题后面是自己的使用者，其余问题仍在。",
        "Find “07 Material for this step” and the “Make this template personal” text box below. Keep all four questions and replace only the bracketed guidance with your answers. Start with “Who will use this project”, such as yourself.\nAfterwards: The first question contains your user and the other questions remain."
      ],
      [
        "在同一个框里找到“这个项目要帮他们解决什么问题”。写下现在遇到的麻烦，以及使用项目后想完成的事情。\n完成后：能说出一个具体过程，例如输入学习内容、保存、以后再找。",
        "In the same box, find the question about the problem the project should solve. Describe the current difficulty and what you want to do with the finished project.\nAfterwards: A concrete flow, such as enter notes, save them and find them later."
      ],
      [
        "写好怎样试用才算做好，再点击“确认，生成我的想法草稿”。第二阶段暂时不做就填“否”。\n完成后：生成的草稿保留了自己的用户、问题、试用方法。",
        "Describe how you will test success, then click Confirm and generate my idea. Put “none” for later features if unnecessary.\nAfterwards: The draft retains your users, problem and test."
      ]
    ],
    "answer": [
      "先写给谁用、解决什么问题，再写怎样试用才算做好。",
      "Write users, problem and a practical success check."
    ],
    "example": [
      "用户：读书会成员。问题：群里报名容易漏记。通过：提交一次报名后能看到自己的报名；重复提交不会占两个名额。",
      "Users: club members. Problem: chat signups get lost. Pass: submit and see a reservation; repeating it does not reserve twice."
    ],
    "recovery": [
      "想不到就从自己最近遇到的一件麻烦事开始。",
      "Start with a recent problem you personally faced."
    ],
    "terms": [
      "brief",
      "acceptance-criteria"
    ]
  },
  {
    "id": "description",
    "input": [
      "上一步确认的想法草稿。",
      "Your confirmed idea draft."
    ],
    "output": [
      "项目说明已确认，可以复制给后面的项目对话。",
      "The confirmed brief is ready to copy into your project conversation."
    ],
    "steps": [
      [
        "点击下方模板的“带入前面已确认的材料”，检查是不是自己的想法。\n完成后：上一步的用户和目标已出现在模板中。",
        "Click the template’s confirmed-material import button and check the idea.\nAfterwards: Your previous users and goal appear."
      ],
      [
        "补项目名称、在哪种设备上用，以及从打开到完成的一次操作。只写自己想要的使用方法，不需要先选数据库。\n完成后：别人读完能知道要做什么、给谁用、怎样试。",
        "Add the name, devices and one complete use from opening to outcome. You do not need to choose a database yet.\nAfterwards: A reader knows what to build, for whom and how to test it."
      ],
      [
        "点击“确认，生成我的专属内容”，核对下方出现的文字，再点“复制我的草稿”。回到本页时若只看到编辑框，再确认一次就会出现复制按钮；不要点“使用本步新版模板”清掉自己的填写内容。后面准备 Git 时再把这份说明交给工具。\n完成后：项目说明已确认，可以复制给后面的项目对话。",
        "Click “Confirm and generate my version”, review the result and click “Copy my draft”. If returning shows only the editor, confirm again to reveal Copy; do not replace your answers with the current template. Give the brief to your tool in the Git step later.\nAfterwards: The confirmed brief is ready to copy into your project conversation."
      ]
    ],
    "answer": [
      "项目描述就是告诉别人：我要做什么，给谁用，怎样使用。",
      "A project description says what to make, for whom and how it is used."
    ],
    "example": [
      "项目：读书会预约。设备：手机浏览器。流程：查看场次→输入姓名→报名→查看确认。预算：尚未确定。",
      "Project: club reservations. Device: phone browser. Flow: view session, enter name, book, see confirmation. Budget: undecided."
    ],
    "recovery": [
      "没有带入时回想法步骤确认草稿，或亲手粘贴已写好的内容。",
      "Confirm the idea in the preceding step or paste the saved text yourself."
    ],
    "terms": [
      "brief",
      "context"
    ]
  },
  {
    "id": "tool",
    "input": [
      "自己的电脑，以及能接受的费用。",
      "Your computer and budget."
    ],
    "output": [
      "得到具体入口说明，知道下一步在哪里打开文件夹。",
      "You know where to open the folder next."
    ],
    "steps": [
      [
        "从下面的工具入口选一个，打开它的官方网站。先查看是否支持自己的电脑，以及费用是否在预算内。\n完成后：选定一个能够操作项目文件的工具。",
        "Choose one tool from the entries below. Check its official site for your computer and budget.\nAfterwards: One suitable tool can work with project files."
      ],
      [
        "按照所选工具的官方说明安装并登录。已有可用工具就直接打开它；网页工具直接登录工作区。\n完成后：能看到项目或对话入口。",
        "Install and sign in using the chosen tool’s instructions, or open your existing tool. Web tools use their online workspace.\nAfterwards: You can find the project or chat entry."
      ],
      [
        "找到输入框，先询问它能怎样帮你处理项目。\n建议提示词：我是第一次使用。请告诉我在哪里选择项目文件夹，以及你能否读取文件、修改文件和运行项目。只介绍操作入口，先不要创建文件。\n完成后：得到具体入口说明，知道下一步在哪里打开文件夹。",
        "Find the message box and ask how to work on a project.\nSuggested prompt: I am new. Show me where to select a project folder and whether you can read files, edit them and run the project. Explain the entry only; do not create files.\nAfterwards: You know where to open the folder next."
      ]
    ],
    "answer": [
      "这里的 AI 工具需要能帮助你保存文件和运行项目；先确认入口，再开始做。",
      "The tool should help save files and run the project; locate its controls first."
    ],
    "example": [
      "合格：能指出当前项目文件，并说明可以执行哪些检查。仅回答“当然可以帮你开发”不算能力证据。",
      "Evidence: actual project files and supported checks, not merely a promise to help."
    ],
    "recovery": [
      "安装条件不合适就换适合的工具，不必全部安装。",
      "Choose another if unsuitable; you do not need every tool."
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
      "自己给项目起的名字。",
      "A name for your project."
    ],
    "output": [
      "已确认的位置可以在下一步带入，带你回到同一个项目。",
      "The confirmed location can be carried into the next step and leads to the same project."
    ],
    "steps": [
      [
        "在电脑上打开“文档”文件夹。Mac 用访达，Windows 用文件资源管理器；使用网页工作区时，直接在工具的项目列表新建项目。\n完成后：找到专门存放这个项目的位置。",
        "Open Documents in Finder or File Explorer. For a web workspace, create a project in its project list instead.\nAfterwards: You have a dedicated place for this project."
      ],
      [
        "电脑文件夹：Mac 按 Shift+Command+N，Windows 按 Ctrl+Shift+N，输入自己的项目名称后按回车。网页工具：在新建项目的名称栏填写名称并确认，不使用电脑文件夹快捷键。\n完成后：能打开刚建的空文件夹；网页工具能打开新工作区。",
        "For a local folder, press Shift+Command+N on Mac or Ctrl+Shift+N on Windows, type your project name and press Enter. In a web tool, enter the name in its new-project form and confirm; do not use a local-folder shortcut.\nAfterwards: The new folder or web workspace opens."
      ],
      [
        "复制项目位置填到“07 本步材料”的模板，再点击确认。Mac 选中文件夹按 Option+Command+C；Windows 打开文件夹后复制地址栏；网页工具填写工作区名称和入口网址。\n完成后：已确认的位置可以在下一步带入，带你回到同一个项目。",
        "Copy the location into the template in section 07 and confirm it. On Mac select the folder and press Option+Command+C; on Windows copy its address bar. For a web workspace, record its name and URL.\nAfterwards: The confirmed location can be carried into the next step and leads to the same project."
      ]
    ],
    "answer": [
      "文件夹就是项目文件的存放位置；路径是找到它的地址。",
      "A folder stores project files; its path tells you where it is."
    ],
    "example": [
      "book-club/ ← 在工具中选择这一层\n  idea.md ← “准备 Git 与项目规则”这一节点才创建\n  docs/ ← 后面放需求文档",
      "book-club/ ← select this folder\n  idea.md ← created by the “Prepare Git and project rules” milestone\n  docs/ ← later documents"
    ],
    "recovery": [
      "不要把别人的项目文件夹当作新项目，也不要清空已有文件。",
      "Do not reuse or empty an unrelated project folder."
    ],
    "terms": [
      "root-directory",
      "file-path"
    ]
  },
  {
    "id": "open-project",
    "input": [
      "刚才创建的项目文件夹或网页工作区。",
      "The project folder or web workspace you created."
    ],
    "output": [
      "工具返回的位置与自己的项目一致。",
      "The reported location matches your project."
    ],
    "steps": [
      [
        "在所选工具中选择“打开文件夹”或对应的项目入口，选中刚建的文件夹。\n完成后：工具中的项目名称与自己的文件夹一致。",
        "Use Open folder or the equivalent project entry and choose your new folder.\nAfterwards: The tool shows the expected project."
      ],
      [
        "在这个项目中打开对话。把下面【】替换成自己的项目路径；网页工具则填写工作区名称和入口网址，再发送。\n建议提示词：请检查当前打开的项目是不是【本机项目完整路径，或网页工作区名称和入口网址】。告诉我实际位置，并列出已有文件。只检查，不修改文件。\n完成后：工具返回的位置与自己的项目一致。",
        "Open a conversation inside this project. Replace the brackets with your folder path, or your web workspace name and URL, before sending.\nSuggested prompt: Check whether the current project is [full local path, or web workspace name and URL]. Report its actual location and existing files. Inspect only; do not modify files.\nAfterwards: The reported location matches your project."
      ]
    ],
    "answer": [
      "同一个工具可以打开不同项目；开始前要检查现在打开的是哪一个。",
      "A tool can open different projects; check which one is active."
    ],
    "example": [
      "通过：实际路径与“创建项目文件夹”记录一致，现有文件列表可核对。失败：只回复一个建议路径。",
      "Pass: the actual path matches the “Create the project folder” record and verifiable files. Fail: a suggested path only."
    ],
    "recovery": [
      "找不到入口时看下面的界面图或该工具的官方项目说明。",
      "Use the screenshot below or the tool’s official project instructions."
    ],
    "terms": [
      "working-directory",
      "context"
    ]
  },
  {
    "id": "checkpoint",
    "input": [
      "已经打开的项目，以及前面确认的项目描述。",
      "Your open project and confirmed description."
    ],
    "output": [
      "工具给出一次成功提交的版本号，文件仍能正常打开。",
      "A successful local revision is reported and the files still open."
    ],
    "steps": [
      [
        "把项目文件夹初始化为 Git 仓库。在刚才的项目对话中发送下面这句话。Git 用来保存修改历史，已经保存的版本可以找回。\n建议提示词：请检查当前项目是否已经是 Git 仓库。如果还不是，请把这个项目文件夹初始化为 Git 仓库；如果已经是，请继续使用现有仓库。先不要提交或上传文件。\n完成后：工具明确告诉你已经建立或沿用了 Git 仓库。",
        "Initialize a Git repository in the project chat. Git keeps saved versions of your files so you can return to them.\nSuggested prompt: Check whether this folder is already a Git repository. If not, initialize one here; otherwise reuse it. Do not commit or upload files yet.\nAfterwards: The tool confirms a new or existing repository."
      ],
      [
        "创建 AGENTS.md。它是写给 AI 工具看的项目说明书和规则，告诉工具应该怎样做事。\n建议提示词：请在项目根目录创建 AGENTS.md，写明：先读项目说明，再做我当前要求的任务；不擅自增加功能；不删除已有成果；完成后告诉我改了哪些文件、怎样检查。已有文件先读并保留原规则，不直接覆盖。若当前工具不支持此文件，请告诉我它支持的规则入口。\n完成后：打开 AGENTS.md，能读到项目的工作规则；其他工具则找到它支持的规则文件。",
        "Create AGENTS.md, a project guide and working rules for the AI tool.\nSuggested prompt: Create AGENTS.md at the project root: read the project description first, do only my current task, do not add features or delete existing work, and report changed files and checks. Read existing rules before updating them. If this tool does not support AGENTS.md, tell me its supported rules entry.\nAfterwards: You can open the rules file and read the instructions."
      ],
      [
        "把前面写好的项目描述保存成 idea.md。回到“整理项目描述”复制已确认内容，再粘贴进下面的话。\n建议提示词：请把下面这份项目说明保存到项目根目录的 idea.md。已有同名文件先告诉我差别，不直接覆盖。项目说明：\n【粘贴我已确认的项目描述】\n完成后：打开 idea.md，可以看到自己的项目名称、用户和想做的功能。",
        "Save your confirmed description as idea.md. Copy it from the description step into this message.\nSuggested prompt: Save the following description as idea.md at the project root. If it already exists, explain differences before changing it. Description:\n【paste my confirmed description】\nAfterwards: idea.md contains your own project and intended users/features."
      ],
      [
        "让 Git 保存第一个版本。仓库建好还不等于文件已经保存成版本；完成这一项，才有可以回来的记录。\n建议提示词：请先检查本次文件，排除密码、密钥、数据库和自动生成文件。把本步确认过的项目说明与规则文件提交到本地 Git，作为第一个版本，并告诉我版本号。不要推送。缺少提交身份时告诉我需要填写什么，不替我编造身份。\n完成后：工具给出一次成功提交的版本号，文件仍能正常打开。",
        "Save the first Git version. Initializing a repository alone does not save a version.\nSuggested prompt: Inspect this step’s files and exclude passwords, keys, databases and generated files. Commit only the confirmed description and rules locally, then report the revision. Do not push. Ask for missing author identity instead of inventing it.\nAfterwards: A successful local revision is reported and the files still open."
      ]
    ],
    "answer": [
      "初始化 Git 是建立保存修改历史的地方；提交才是保存一个版本。AGENTS.md 写明工具做事时要遵守什么。",
      "Initializing Git creates a place for history; committing saves a version. AGENTS.md states the rules the tool should follow."
    ],
    "example": [
      "项目/\n  idea.md\n  AGENTS.md（仅工具支持时）\n  .gitignore\n  .git/（隐藏的版本记录）",
      "project/\n  idea.md\n  AGENTS.md (if supported)\n  .gitignore\n  .git/ (hidden history)"
    ],
    "recovery": [
      "提示没有安装 Git 时，请工具按你的系统给出官方安装入口，安装后再做这一项。",
      "If Git is missing, ask for the official installation steps for your system, install it and retry."
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
      "刚才保存的 idea.md、AGENTS.md 或工具使用的规则文件。",
      "The saved idea.md and AGENTS.md or your tool’s instruction file."
    ],
    "output": [
      "两个文件内容正确，能在关闭后重新打开。",
      "Both files are correct and can reopen."
    ],
    "steps": [
      [
        "让工具给出刚才两个文件的位置。\n建议提示词：请列出本项目 idea.md 和 AGENTS.md（或本工具对应规则文件）的实际路径，并提供可打开的文件链接。只查看，不修改。\n完成后：得到自己项目中的文件位置。",
        "Ask for the two saved file locations.\nSuggested prompt: List the actual paths and openable links for idea.md and AGENTS.md, or this tool’s equivalent rules file. Read only.\nAfterwards: The files are located in your project."
      ],
      [
        "点击文件链接逐个打开。先看 idea.md 是否是自己的想法，再看规则文件有没有刚才约定的规则。\n完成后：两个文件内容正确，能在关闭后重新打开。",
        "Open each file link. Compare idea.md with your idea and the rules file with your instructions.\nAfterwards: Both files are correct and can reopen."
      ]
    ],
    "answer": [
      "聊天里出现一段文字，与项目里已经保存一个文件，是两件事。现在要找的是实际文件。",
      "A chat reply and a saved project file are different. Find the actual file now."
    ],
    "example": [
      "应看到自己的项目描述，不是“这里可以写项目描述”这种说明文字。",
      "Expect the actual personal brief, not instructions saying to write one."
    ],
    "recovery": [
      "找不到文件就回上一项确认是否真的保存。",
      "If absent, return to the preceding step and confirm they were saved."
    ],
    "terms": [
      "markdown",
      "file-path"
    ]
  },
  {
    "id": "clarify",
    "input": [
      "项目里的 idea.md，以及你还没决定的问题。",
      "Your idea.md and questions you have not decided yet."
    ],
    "output": [
      "打开 idea.md 能看到自己的答案。",
      "idea.md contains your answers."
    ],
    "steps": [
      [
        "把 idea.md 交给工具看，让它从你的想法中找出还没说清的地方。\n建议提示词：请阅读 idea.md，用普通话复述我想做什么。你拿不准的地方一次只问我一个问题，先不要写代码。\n完成后：工具先复述，再提出一个你能回答的问题。",
        "Ask the tool to read idea.md and find unclear parts.\nSuggested prompt: Read idea.md and restate my goal in everyday language. Ask one question at a time about what is unclear. Do not code yet.\nAfterwards: The tool restates the idea and asks an answerable question."
      ],
      [
        "回答当前问题；不确定就说不确定。等影响第一版的问题都说清后，再保存答案。\n建议提示词：请把我刚才确认的答案更新到 idea.md；还没决定的内容单独标出来，不替我决定。\n完成后：打开 idea.md 能看到自己的答案。",
        "Answer the current question, or say undecided. Save once the first-version questions are clear.\nSuggested prompt: Update idea.md with the answers I confirmed. List undecided items separately without deciding for me.\nAfterwards: idea.md contains your answers."
      ]
    ],
    "answer": [
      "不用一次回答所有问题；问一个，答一个，不知道就说还没决定。",
      "Answer one question at a time; undecided is a valid answer."
    ],
    "example": [
      "预约项目需问：名额由谁设置？重复报名怎样算？取消后名额是否释放？",
      "Reservation questions: who sets capacity, what counts as duplicate, and does cancellation free a place?"
    ],
    "recovery": [
      "问题里有术语就让它解释成生活例子，不勉强猜答案。",
      "Ask for a simple example if it uses unfamiliar terms."
    ],
    "terms": [
      "requirement",
      "context"
    ]
  },
  {
    "id": "scope",
    "input": [
      "刚才逐个回答并确认的需求问题。",
      "The questions and answers you just confirmed."
    ],
    "output": [
      "需求文件写清这次做什么、暂时不做什么。",
      "The file distinguishes this version from later work."
    ],
    "steps": [
      [
        "先列第一版必须完成的事，再列以后可以做的事。\n建议提示词：请读 idea.md，分成“第一版必须做”和“以后再做”两份清单。每项用我能亲手操作的一句话说明，先给我看，不写代码。\n完成后：两份清单能看懂，没有偷偷加入新功能。",
        "Separate essential first-version work from later ideas.\nSuggested prompt: Read idea.md and make two lists: needed in version one and later. Describe each as a user action. Show me first; do not code.\nAfterwards: Both lists are understandable and contain no invented features."
      ],
      [
        "逐项确认清单，再让工具保存。\n建议提示词：请把我确认的范围保存到 docs/requirements.md，保留以后再做的清单。没有确认的内容标为待定。\n完成后：需求文件写清这次做什么、暂时不做什么。",
        "Review each item, then save your decision.\nSuggested prompt: Save the confirmed scope to docs/requirements.md, keeping later ideas and marking undecided items.\nAfterwards: The file distinguishes this version from later work."
      ]
    ],
    "answer": [
      "第一版是你准备先完成并使用的一小部分，不是所有想法一次做完。",
      "Version one is the useful part you will finish first, not every idea at once."
    ],
    "example": [
      "R01报名：不超过容量；R02取消：取消后释放名额；第二阶段：付费功能。",
      "R01 booking: never exceed capacity. R02 cancel: free a place. Later: payments."
    ],
    "recovery": [
      "清单太大就按真实使用需要缩小，不能删掉完成核心任务必需的步骤。",
      "Reduce scope while keeping everything required for the core task."
    ],
    "terms": [
      "mvp",
      "scope-creep"
    ]
  },
  {
    "id": "requirements",
    "input": [
      "已经确认的第一版功能清单。",
      "Your agreed first-version feature list."
    ],
    "output": [
      "下一步可以依据这份文件写使用过程。",
      "The next step can describe use based on this file."
    ],
    "steps": [
      [
        "把每项功能写成“填什么、点什么、看到什么”。\n建议提示词：请读 docs/requirements.md，把每个必做功能写清输入内容、操作、正常结果和失败时的提示。给每项编号，先让我确认。\n完成后：每个功能都有实际操作和能看到的结果。",
        "Describe each feature as input, action and visible result.\nSuggested prompt: Read docs/requirements.md. Give each required feature an ID, inputs, actions, normal results and failure messages for my review.\nAfterwards: Every feature has an observable result."
      ],
      [
        "对照自己的想法检查，再保存确认后的版本。\n建议提示词：请把我确认的内容更新到 docs/requirements.md，保留每项怎样测试才算做好，不增加未提出的功能。\n完成后：下一步可以依据这份文件写使用过程。",
        "Compare with your idea and save the reviewed version.\nSuggested prompt: Update docs/requirements.md with confirmed content and a practical check for each feature. Do not add unrequested features.\nAfterwards: The next step can describe use based on this file."
      ]
    ],
    "answer": [
      "需求文档记录填什么、做什么、应该得到什么结果。",
      "Requirements record inputs, actions and expected outcomes."
    ],
    "example": [
      "不合格：报名好用。合格：R01容量20，报名成功余量减1；同一人重复请求不重复占位；已满显示无法报名。",
      "Weak: easy booking. Clear: R01 capacity 20, success reduces remaining places by one; duplicates do not consume extra places; full sessions reject booking."
    ],
    "recovery": [
      "出现“体验良好”等空泛词时，要求换成具体画面或行为。",
      "Replace vague claims like good experience with specific behavior."
    ],
    "terms": [
      "prd",
      "acceptance-criteria"
    ]
  },
  {
    "id": "stories",
    "input": [
      "项目中已经保存的需求文档。",
      "The requirements document saved in your project."
    ],
    "output": [
      "使用过程前后接得上，文件能打开。",
      "The sequence connects and the file opens."
    ],
    "steps": [
      [
        "让工具把使用过程像讲故事一样写出来：谁打开哪里，先做什么，接着做什么。\n建议提示词：请读 idea.md 和 docs/requirements.md，写出每种用户从打开项目到完成任务的一次完整过程。一步写一个动作，也写出出错后怎样继续。先不要开发。\n完成后：能按文字想象一个人实际使用的顺序。",
        "Describe a person using the project from start to finish.\nSuggested prompt: Read idea.md and docs/requirements.md. Write each user’s complete journey, one action at a time, including recovery from errors. Do not build yet.\nAfterwards: You can picture a real person following the sequence."
      ],
      [
        "按自己会使用的方式读一遍，指出缺少的步骤，再保存。\n建议提示词：请把我确认的使用过程保存到 docs/stories.md，并保留对应的需求编号。\n完成后：使用过程前后接得上，文件能打开。",
        "Read it as a user, fill gaps and save.\nSuggested prompt: Save the confirmed journeys to docs/stories.md with their requirement IDs.\nAfterwards: The sequence connects and the file opens."
      ]
    ],
    "answer": [
      "用户故事说的是谁要完成什么；操作过程说明他先做什么、再做什么。",
      "A user story names who needs what; the journey gives the actions in order."
    ],
    "example": [
      "S01关联R01：成员打开活动→看到余位→提交→收到确认；已满时停在活动页并解释原因。",
      "S01 maps to R01: open event, see availability, submit, receive confirmation; when full, remain on the page with a reason."
    ],
    "recovery": [
      "突然出现尚未说明的账号或页面时，先补它的来源和进入方法。",
      "Explain any account or page that appears without an introduction."
    ],
    "terms": [
      "user-story",
      "user-flow"
    ]
  },
  {
    "id": "prototype",
    "input": [
      "需求文档和用户操作顺序。",
      "The requirements and user journey."
    ],
    "output": [
      "设计文件可以给后面的开发步骤使用。",
      "The design file guides later implementation."
    ],
    "steps": [
      [
        "先看页面草稿。页面草稿只帮助决定东西放哪里、点击后去哪里。\n建议提示词：请根据 docs/requirements.md 和 docs/stories.md 做一条主要使用过程的页面草稿。告诉我怎样打开，每个按钮会去哪里；还不能实际使用的部分请标明。先不要接数据库。\n完成后：有能打开查看的页面草稿。",
        "Preview a draft to decide what goes where and what buttons do.\nSuggested prompt: Use docs/requirements.md and docs/stories.md to draft the main journey. Tell me how to open it and where buttons lead. Mark simulated behavior. Do not connect a database yet.\nAfterwards: A draft opens for review."
      ],
      [
        "从第一屏按顺序点一遍，指出找不到入口或看不懂的地方。\n建议提示词：请只调整我指出的这些位置：【填写】。保留其他已确认内容，完成后告诉我从哪里再看。\n完成后：能找到主要输入、按钮和结果。",
        "Click through the draft and identify unclear entries.\nSuggested prompt: Change only these locations: 【fill in】. Preserve confirmed work and tell me where to review it.\nAfterwards: Main inputs, buttons and results are easy to find."
      ],
      [
        "把确认的页面和操作方法保存下来。\n建议提示词：请把确认的页面安排和按钮作用写入 docs/design.md，区分已经能用和仍是演示的部分。\n完成后：设计文件可以给后面的开发步骤使用。",
        "Save the approved screen and action decisions.\nSuggested prompt: Write screen arrangements and button behavior to docs/design.md. Separate working features from demonstrations.\nAfterwards: The design file guides later implementation."
      ]
    ],
    "answer": [
      "页面草稿也叫原型，可以演示样子和顺序，但里面的保存按钮可能还不能真正保存。",
      "A prototype previews appearance and sequence; its Save button may still be simulated."
    ],
    "example": [
      "“报名成功”只是演示时，必须标“模拟结果，尚未写入真实记录”。",
      "A simulated confirmation must say it has not stored a real reservation."
    ],
    "recovery": [
      "打开方式不清楚就要求准确地址或文件位置。",
      "Request an exact URL or file location if unclear."
    ],
    "terms": [
      "prototype",
      "mock"
    ]
  },
  {
    "id": "choose-stack",
    "input": [
      "已经确认的页面草稿，以及使用设备、费用和保存数据的要求。",
      "The agreed page draft, devices, budget and data needs."
    ],
    "output": [
      "后面准备环境时知道要安装什么、先试什么。",
      "Environment setup knows what to install and try first."
    ],
    "steps": [
      [
        "告诉工具项目给谁用、需要保存什么、预算多少。让它解释准备采用的做法。\n建议提示词：请读已确认需求和 docs/design.md，推荐一种适合我的做法。分别解释页面怎么做、处理请求的程序在哪里运行、数据存在哪里、需要什么费用。先不要安装。\n完成后：你能理解三个部分分别负责什么。",
        "Give users, storage needs and budget, then ask for an understandable approach.\nSuggested prompt: Read the requirements and docs/design.md. Recommend one approach and explain the page, the program processing requests, data storage and costs. Do not install yet.\nAfterwards: You understand the role of each part."
      ],
      [
        "确认适合自己的做法，并把决定写进设计文件。\n建议提示词：请把我确认的做法、需要准备的账号和最难部分的试验方法写入 docs/design.md。未确定的条件保留待定。\n完成后：后面准备环境时知道要安装什么、先试什么。",
        "Confirm the approach and record it.\nSuggested prompt: Save the chosen approach, required accounts and a small test of its hardest part in docs/design.md. Keep unknowns pending.\nAfterwards: Environment setup knows what to install and try first."
      ]
    ],
    "answer": [
      "前端是看得见的页面；后端处理请求；数据库保存记录。你的项目需要哪部分，就准备哪部分。",
      "The frontend is the page, the backend processes requests and the database stores records. Prepare the parts your project needs."
    ],
    "example": [
      "例如必须读取手机本地文件：先在目标设备验证选择文件与权限，再决定是否采用该方案。",
      "If phone file access is essential, verify file selection and permissions on the target device first."
    ],
    "recovery": [
      "方案中有陌生名称时，让工具先解释用途，再谈是否使用。",
      "Ask what unfamiliar tools do before choosing them."
    ],
    "terms": [
      "stack",
      "poc"
    ]
  },
  {
    "id": "plan",
    "input": [
      "已经确认的需求、页面草稿和技术方案。",
      "Your agreed requirements, page draft and technology choices."
    ],
    "output": [
      "能找到下一项该做什么以及完成标准。",
      "The next task and its passing check are clear."
    ],
    "steps": [
      [
        "让工具把要做的功能排成先后顺序。\n建议提示词：请读需求、docs/stories.md 和 docs/design.md，把开发拆成小任务。每项写清先做什么、会新增什么文件或功能、完成后我怎样试。先给我看计划，不写代码。\n完成后：第一项任务明确，后面的任务有顺序。",
        "Ask for an ordered list of small development tasks.\nSuggested prompt: Read requirements, docs/stories.md and docs/design.md. Break development into small tasks, each with prerequisites, files/features and a personal test. Show the plan without coding.\nAfterwards: The first task is clear and later tasks have an order."
      ],
      [
        "检查需求是否都被安排到了，再保存任务表。\n建议提示词：请把我确认的任务保存到 tasks/todo.md。每项标记未开始，并保留对应需求编号。\n完成后：能找到下一项该做什么以及完成标准。",
        "Check that all required features are planned and save.\nSuggested prompt: Save confirmed tasks to tasks/todo.md with requirement IDs and not-started status.\nAfterwards: The next task and its passing check are clear."
      ]
    ],
    "answer": [
      "任务表告诉你下一项做什么、需要什么、怎样判断做完了。",
      "A task list names the next job, prerequisites and completion check."
    ],
    "example": [
      "R02取消 → T04实现取消 → 测试：取消一次释放1个名额；重复取消不再加名额。",
      "R02 cancellation → T04 implement it → test: release one place once; repeated cancellation releases no more."
    ],
    "recovery": [
      "第一项就包含整个项目时，让工具继续拆小。",
      "Split tasks further if the first one is the whole project."
    ],
    "terms": [
      "plan",
      "dependency"
    ]
  },
  {
    "id": "environment",
    "input": [
      "技术方案和按顺序排列的开发任务表。",
      "Your technology choices and ordered development tasks."
    ],
    "output": [
      "打开工具给出的地址能看到页面，README 中有下次启动方法。",
      "The URL opens a page and README explains reopening."
    ],
    "steps": [
      [
        "先检查电脑能否运行这个项目。\n建议提示词：请读 docs/design.md 和 tasks/todo.md，检查本项目需要的运行软件是否已安装。缺什么请给我官方安装入口、适合我的系统的操作，以及怎样确认装好了。先不要开发功能。\n完成后：知道缺哪些软件，以及从哪里安装。",
        "Check whether your computer can run this project.\nSuggested prompt: Read docs/design.md and tasks/todo.md. Check required software; for anything missing give official installation steps for my system and a success check. Do not build features.\nAfterwards: You know what is missing and where to install it."
      ],
      [
        "让工具准备最小项目需要的文件，再安装必要程序包。空文件夹还没有运行配置，需要先创建；已有文件先检查并保留。\n建议提示词：请读 docs/design.md 和 tasks/todo.md。检查现有配置；缺少时，按已确认方案创建最小项目的配置和启动文件，再安装必要依赖。保留项目说明、规则和已有成果。本次只准备能启动的最小项目，不提前开发业务功能。失败时先解释第一条错误。\n完成后：有实际配置和启动文件，必要程序包已安装。",
        "Prepare minimal project files before installing packages. An empty folder needs configuration first; inspect and preserve existing files.\nSuggested prompt: Read docs/design.md and tasks/todo.md. Inspect existing configuration; if missing, create minimal configuration and startup files for the agreed approach, then install required dependencies. Preserve instructions, rules and existing work. Prepare only a runnable minimal project, without building business features. Explain the first error if setup fails.\nAfterwards: Actual configuration and startup files exist and required packages are installed."
      ],
      [
        "启动一个能打开的最小页面，再记下启动方法。\n建议提示词：请启动本项目最小页面，告诉我在哪里执行、实际打开哪个地址，以及怎样停止。把验证过的方法写入 README.md，检查结果写入 docs/checks.md。\n完成后：打开工具给出的地址能看到页面，README 中有下次启动方法。",
        "Start the smallest working page and save the startup instructions.\nSuggested prompt: Start the minimal project. Give the execution location, actual URL and stop method. Save verified instructions in README.md and results in docs/checks.md.\nAfterwards: The URL opens a page and README explains reopening."
      ]
    ],
    "answer": [
      "运行环境就是让程序在电脑上运行所需的软件；依赖是项目要用的现成程序包。",
      "The runtime is software needed to execute the program; dependencies are packages it uses."
    ],
    "example": [
      "成功记录示意（非真实日志）：命令/执行目录/版本/实际入口/停止方法/重启结果；“安装成功”不等于项目已启动。",
      "Illustrative record: command, directory, versions, real entry, stop method and restart result. Installation is not startup."
    ],
    "recovery": [
      "不懂报错就复制原文给工具，不同时安装多个不同版本试运气。",
      "Copy error text instead of trying many random versions."
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
      "能够运行的最小项目和任务表中的第一项。",
      "Your runnable minimal project and the first development task."
    ],
    "output": [
      "任务表记录真实进度，可以继续下一项。",
      "Task status reflects actual progress."
    ],
    "steps": [
      [
        "让工具先读任务表，只做下一项尚未完成的任务。\n建议提示词：请读 tasks/todo.md，找出下一项已经具备开始条件的任务。告诉我这次做什么，再只完成这一项。保留其他文件，完成后给我打开作品的方法和测试结果。\n完成后：得到这次修改的说明和能打开的作品入口。",
        "Have the tool do the next unfinished task only.\nSuggested prompt: Read tasks/todo.md and identify the next task whose prerequisites are ready. Explain and complete only that task. Preserve other files and report how to open and test it.\nAfterwards: You receive a change summary and working entry."
      ],
      [
        "打开作品，亲自操作这一项功能。不要只读工具的“完成”回复。\n完成后：实际结果与任务表中写的相同，或能指出哪里不同。",
        "Open the project and try this feature yourself.\nAfterwards: The result matches the task or you can name the difference."
      ],
      [
        "把实际结果告诉工具，再决定做下一项还是先修问题。\n建议提示词：我的实际操作和结果是：【填写】。请更新 tasks/todo.md 和 docs/checks.md；只有已经检查通过的任务才标完成。保存本次已确认修改的本地版本，不推送。\n完成后：任务表记录真实进度，可以继续下一项。",
        "Report what happened before continuing.\nSuggested prompt: My actions and results: 【fill in】. Update tasks/todo.md and docs/checks.md; complete only checked tasks. Save the confirmed changes as a local revision without pushing.\nAfterwards: Task status reflects actual progress."
      ]
    ],
    "answer": [
      "预览是打开正在开发的作品，看看真实页面和功能是什么样。",
      "A preview opens the work in progress so you can see its real pages and behavior."
    ],
    "example": [
      "T01入口：已检查；T02报名：待做；T03取消：待做 → 当前还不能进入“全部功能验收通过”。",
      "T01 entry checked; T02 booking pending; T03 cancel pending → full acceptance is not yet possible."
    ],
    "recovery": [
      "工具一次做了很多无关功能时，先让它说明改动，回到已确认任务。",
      "If unrelated work was added, review it and return to the agreed task."
    ],
    "terms": [
      "iteration",
      "commit"
    ]
  },
  {
    "id": "interface",
    "input": [
      "已经打开的项目页面，以及一处你想改进的地方。",
      "Your open project page and one thing to improve."
    ],
    "output": [
      "页面清楚可用，原功能没有被改坏。",
      "The page is usable and the original feature still works."
    ],
    "steps": [
      [
        "打开自己的作品，指出一处用户找不到或看不懂的位置，例如输入框没有名字、按钮挡住文字。\n完成后：知道具体要改哪个页面、哪个位置。",
        "Open your project and locate one confusing place, such as an unlabeled field or overlapping button.\nAfterwards: You can name the page and location to change."
      ],
      [
        "把这一处问题和希望的效果告诉工具。\n建议提示词：请只修改【页面和具体位置】：现在是【实际样子】，我希望【清楚的结果】。保留其他已确认页面和功能，修改后给我查看地址。\n完成后：能打开修改后的页面。",
        "Tell the tool the problem and desired result.\nSuggested prompt: Change only 【page/location】. It currently looks like 【actual】; I need 【specific result】. Preserve other pages/features and give me the review URL.\nAfterwards: The updated page opens."
      ],
      [
        "再操作一次这项功能，然后缩窄窗口，确认文字、输入框和按钮仍能使用。\n完成后：页面清楚可用，原功能没有被改坏。",
        "Try the feature again and narrow the window to check text, fields and buttons.\nAfterwards: The page is usable and the original feature still works."
      ]
    ],
    "answer": [
      "界面就是使用者看到和操作的页面；这里先改一处具体问题。",
      "The interface is what people see and use; fix one specific problem here."
    ],
    "example": [
      "位置：活动页报名按钮。处理中禁重复提交；失败说明原因并可重试；成功显示实际报名结果。",
      "Location: event booking button. Prevent repeat submission while loading; explain errors and allow retry; show the real result."
    ],
    "recovery": [
      "先解决妨碍使用的地方，不用一句“整体优化”让工具重做全部页面。",
      "Fix a specific usability problem rather than requesting a complete redesign."
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
      "已经可以填写内容的页面，以及需求中约定的保存方式。",
      "Your input page and the agreed storage requirements."
    ],
    "output": [
      "记录在设计约定的位置保留，内容与保存时相同。",
      "The entry remains in the storage location promised by the design, with its original content."
    ],
    "steps": [
      [
        "先建立真正存放记录的地方。数据库就像项目的登记本，页面关闭后记录还在里面。先看设计文件：不用保存的项目跳过本步；只保存在浏览器的项目按原方案检查，不增加后端或数据库。下面的数据库操作用于已经选择数据库的项目。\n建议提示词：请读需求，检查本项目的数据应该保存在哪里。需要数据库时，先检查已有内容，再建立缺少的表，告诉我实际位置、每条记录保存哪些字段。不要清空已有数据。\n完成后：知道数据位置和每条记录会保存的内容。",
        "Prepare real storage. A database keeps records after the page closes.  If no storage is needed, skip this step. For browser-only storage, follow that design without adding a backend or database. Database actions apply only when the design requires one.\nSuggested prompt: Read the requirements and inspect storage. If a database is needed, inspect existing content, create only missing tables and report its location and record fields. Do not erase data.\nAfterwards: You know where records live and what they contain."
      ],
      [
        "已选择后端的项目：让后端能够保存和读取记录。后端是收到页面请求后实际处理事情的程序。\n建议提示词：请实现或检查保存一条记录和读取列表的后端接口。接口就是页面发送或索取内容的入口。用测试记录检查保存结果，告诉我记录编号，再核对数据库中同一条记录。空白内容应被拒绝。\n完成后：合法内容有真实编号，数据库里能找到，空白内容没有写入。",
        "If your design uses a backend: Make the backend save and read records. It is the program processing page requests.\nSuggested prompt: Implement or inspect save-one and read-list endpoints. Test a record, report its ID and verify the matching database record. Reject blank input.\nAfterwards: A valid record has a matching database ID; blank input is not inserted."
      ],
      [
        "已选择后端的项目：把页面按钮连接到刚才的保存功能。\n建议提示词：请把页面的保存按钮连接到已检查的后端。保存期间避免重复点击，失败保留输入并解释原因，真正保存成功后再显示成功。告诉我打开哪个地址来试。\n完成后：点一次保存后，能在列表里找到刚才的内容。",
        "If your design uses a backend: Connect the page’s Save button to the checked backend.\nSuggested prompt: Connect Save to the checked backend. Prevent repeat pending clicks, keep input on failure and show success only after saving. Give me the test URL.\nAfterwards: One save produces a record you can find in the list."
      ],
      [
        "保存一条容易辨认的测试内容，例如“保存测试 001”，刷新并重新打开页面查找它。设计要求数据在后端共享时，再用另一个浏览器打开同一网址；只存在浏览器里的资料应在原浏览器检查。\n完成后：记录在设计约定的位置保留，内容与保存时相同。",
        "Save a recognizable test entry such as “save test 001”, refresh and reopen the page to find it. Use another browser only if the design calls for shared backend data; check browser-only data in the original browser.\nAfterwards: The entry remains in the storage location promised by the design, with its original content."
      ]
    ],
    "answer": [
      "看到“保存成功”还要查记录是否真的写入；刷新、重新打开后也应读得到。",
      "After a success message, check the real record and read it after reopening."
    ],
    "example": [
      "两人抢最后1个名额：只能1人成功；另一人看到已满。重复请求不能多占名额。",
      "Two users claim the last place: exactly one succeeds; repeats do not reserve additional places."
    ],
    "recovery": [
      "工具只说“完成”时，追问实际位置和表名；别删库重建。",
      "Ask for the actual location/table if the response only says done."
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
      "已经能保存并读回内容的项目，以及用户操作步骤。",
      "Your working save/read features and the user journey."
    ],
    "output": [
      "每条必做流程都有实际结果。",
      "Every required journey has an honest result."
    ],
    "steps": [
      [
        "让工具写一份从打开作品到完成任务的操作清单。\n建议提示词：请读需求和 tasks/todo.md，列一条普通用户完整使用过程。一步只写一个动作，说明输入什么、点击哪里、应该看到什么。没有准备好的功能先标出来。\n完成后：得到能照着做的清单。",
        "Ask for a checklist from opening the project to finishing a task.\nSuggested prompt: Read requirements and tasks/todo.md. Write one ordinary-user journey, one action at a time, with inputs, clicks and expected results. Mark unfinished prerequisites.\nAfterwards: You have a usable checklist."
      ],
      [
        "打开作品，照清单逐项做一遍。每次写下自己真正看到的结果。\n完成后：能从开始走到结束，或准确指出停在哪一步。",
        "Open the project and follow each action, recording what you actually see.\nAfterwards: You finish the flow or can identify the exact stopping point."
      ],
      [
        "把记录交给工具保存，再检查其他必须完成的使用过程。\n建议提示词：请把以下本人测试记录保存到 docs/checks.md：【粘贴操作、预期、实际结果】。通过、失败和没测试的项目分开写，不代替我填写通过。\n完成后：每条必做流程都有实际结果。",
        "Save your record and cover the remaining required journeys.\nSuggested prompt: Save my test record to docs/checks.md: 【actions, expected, actual】. Separate passed, failed and untested checks; do not invent passes.\nAfterwards: Every required journey has an honest result."
      ]
    ],
    "answer": [
      "完整流程包括打开、输入、提交和看到结果，不能只试一个按钮。",
      "A complete flow includes opening, input, submission and results, not one button alone."
    ],
    "example": [
      "R01 / 版本abc / 输入测试姓名 / 预期确认+余位减1 / 实际一致 / 证据截图路径 / 通过。",
      "R01 / revision abc / test name / expect confirmation and one fewer place / actual matches / evidence path / passed."
    ],
    "recovery": [
      "出现没建过的账号或页面时，先回相应步骤准备。",
      "Prepare any missing account or page before continuing."
    ],
    "terms": [
      "e2e",
      "test-case"
    ]
  },
  {
    "id": "test",
    "input": [
      "已经正常走完的使用过程，以及只用于测试的内容。",
      "Your working user flow and disposable test content."
    ],
    "output": [
      "失败和未测项没有被改成通过。",
      "Failures and untested checks are not marked passed."
    ],
    "steps": [
      [
        "先测试错误输入。在作品里不填必填项就点提交，再试过长内容。\n完成后：页面解释哪里不对，也没有保存无效记录。",
        "Try invalid input: submit empty required fields and overly long content.\nAfterwards: The page explains the problem without saving invalid records."
      ],
      [
        "检查重复点击和服务中断时会发生什么。先让工具给出只影响本项目测试环境的办法。\n建议提示词：请列出本项目测试重复点击和服务暂时停止的操作。一次只测一项，说明怎样停止本项目服务和恢复。不要停止其他项目。只测试，先不修代码。\n完成后：有明确的测试和恢复方法。",
        "Check repeated clicks and service interruption in this project’s test environment only.\nSuggested prompt: Give step-by-step tests for repeat clicks and a stopped service, one at a time. Explain how to stop and restore only this project. Test without repairing yet.\nAfterwards: You have clear testing and recovery steps."
      ],
      [
        "按说明试一次服务停止后的保存，再恢复服务。\n完成后：没有假成功，未提交内容保留；恢复后先查列表再决定是否重试。",
        "Try saving with the service stopped, then restore it.\nAfterwards: No false success; input stays. Check the list before retrying after recovery."
      ],
      [
        "把结果给工具记下来。\n建议提示词：请把刚才各项异常测试的预期、实际和未测试原因写入 docs/checks.md。失败保持失败，留给反馈与修复步骤处理。\n完成后：失败和未测项没有被改成通过。",
        "Record the results.\nSuggested prompt: Write expected/actual results and untested reasons in docs/checks.md. Keep failures open for feedback and repair.\nAfterwards: Failures and untested checks are not marked passed."
      ]
    ],
    "answer": [
      "异常测试就是故意试一试不顺利的情况，看看作品会怎样处理。",
      "Failure testing deliberately tries things going wrong to see how the project responds."
    ],
    "example": [
      "重复报名：通过；断网：失败；iPhone真机：未测试。不能把这份报告写成“全部通过”。",
      "Duplicate booking passed; offline failed; iPhone device untested. This is not an all-pass report."
    ],
    "recovery": [
      "只有页面拦截还不够，让工具检查后端是否同样拒绝。",
      "Ask the tool to check backend rejection as well."
    ],
    "terms": [
      "regression",
      "concurrency"
    ]
  },
  {
    "id": "restart",
    "input": [
      "项目的启动说明，以及一条已保存的测试记录。",
      "The startup instructions and a saved test record."
    ],
    "output": [
      "重开后能继续使用，记录按需求保留。",
      "The reopened project works and retains required data."
    ],
    "steps": [
      [
        "先记下一条已保存记录，再找到 README.md 里的停止和启动方法。\n完成后：知道待会儿要找回哪条记录。",
        "Note one saved record and find README’s stop/start instructions.\nAfterwards: You know which record to find after reopening."
      ],
      [
        "停止并重新启动本项目。仅关掉浏览器还不算停止后端。\n建议提示词：请按 README.md 停止并重新启动本项目服务，保留数据库。告诉我实际打开哪个网址；不要新建项目或重置数据。\n完成后：服务重新运行，能打开作品。",
        "Stop and restart the project; closing the browser alone does not stop its backend.\nSuggested prompt: Stop and restart this project using README.md, keeping its database. Give the actual URL; do not create a new project or reset data.\nAfterwards: The restarted project opens."
      ],
      [
        "打开新启动的网址，找刚才那条记录，再做一次主要操作。\n建议提示词：我的重开结果是：【填写】。请把实际启动方法和结果更新到 README.md 与 docs/checks.md。\n完成后：重开后能继续使用，记录按需求保留。",
        "Open the reported URL, find the record and try the main action.\nSuggested prompt: My reopening result is: 【fill in】. Update README.md and docs/checks.md with actual instructions and results.\nAfterwards: The reopened project works and retains required data."
      ]
    ],
    "answer": [
      "浏览器页面与后端服务不是同一个东西；关浏览器后服务可能还在运行。",
      "The browser page and backend are separate; closing the browser may leave the service running."
    ],
    "example": [
      "静态介绍页：重开能浏览即可。记事工具：还必须找回原记录。",
      "A static page must reopen; a notes tool must also retain notes."
    ],
    "recovery": [
      "方法没写清时，请工具补具体目录、命令和网址。",
      "Ask for the exact directory, command and URL if missing."
    ],
    "terms": [
      "url",
      "database"
    ]
  },
  {
    "id": "accept",
    "input": [
      "最初的需求文档和你实际试用后的记录。",
      "Your original requirements and actual trial results."
    ],
    "output": [
      "docs/acceptance.md 中保存了本人实际操作和结论。",
      "docs/acceptance.md contains your actual actions and conclusion."
    ],
    "steps": [
      [
        "重新读最初的项目描述，选出当时说“做完应该能做到”的事情。\n完成后：手里有自己的目标和对应试用方法。",
        "Reread your original description and the things the finished project should do.\nAfterwards: You have your own goals and practical tests."
      ],
      [
        "像实际使用者一样操作作品，不借助工具临时改数据来完成流程。\n完成后：知道作品有没有解决最初的问题。",
        "Use the project as its intended user without having the tool patch data mid-flow.\nAfterwards: You know whether it solves the original problem."
      ],
      [
        "填写下方试用记录并确认，再展开“把本步已确认记录交给 AI 保存”，生成保存话术，复制到项目对话。\n完成后：docs/acceptance.md 中保存了本人实际操作和结论。",
        "Fill and confirm the trial record, then use the save-in-project section to generate and send its save instruction.\nAfterwards: docs/acceptance.md contains your actual actions and conclusion."
      ]
    ],
    "answer": [
      "验收就是你按照先前约定的方法试用，再决定是否达到了目标。",
      "Acceptance means trying the agreed checks yourself and deciding whether the goal is met."
    ],
    "example": [
      "版本abc：报名通过；取消未测试 → 结论未测试，不能写第一版全部通过。",
      "Revision abc: booking passed, cancellation untested → not fully accepted."
    ],
    "recovery": [
      "目标发生变化时先写清变化，不能临时降低标准把失败算通过。",
      "Document changed goals instead of silently lowering criteria."
    ],
    "terms": [
      "acceptance-criteria",
      "version"
    ]
  },
  {
    "id": "feedback",
    "input": [
      "出现问题时的操作顺序、画面或报错。",
      "The actions, screen or error from the failure."
    ],
    "output": [
      "反馈文件有问题编号、重现步骤和证据。",
      "Issues have IDs, reproduction steps and evidence."
    ],
    "steps": [
      [
        "选一个问题，写下从哪里开始、输入什么、点哪里、出现什么。\n完成后：别人能照着描述走到同一问题。",
        "Choose one issue and record the entry, input, clicks and result.\nAfterwards: Someone else can follow the same steps."
      ],
      [
        "把操作记录和报错填进下方模板，确认后复制给工具。\n建议提示词：请把以下问题整理到 docs/feedback.md，给每项编号，写清预期与实际：【粘贴记录】。先记录和检查原因，不修改代码；还没查明的原因不要写成事实。\n完成后：反馈文件有问题编号、重现步骤和证据。",
        "Fill the template with actions/errors, confirm and send it.\nSuggested prompt: Organize these issues in docs/feedback.md with IDs, expected and actual results: 【paste record】. Record and investigate without changing code. Do not present guesses as facts.\nAfterwards: Issues have IDs, reproduction steps and evidence."
      ]
    ],
    "answer": [
      "反馈先写你做了什么、看到了什么，不需要自己猜代码哪里错了。",
      "Feedback records actions and observations; you do not need to diagnose the code."
    ],
    "example": [
      "F01 / 取消后刷新 / 预期余位+1 / 实际未变 / 版本abc / 两次均复现。",
      "F01 / cancel then refresh / expect one place restored / actual unchanged / revision abc / reproduced twice."
    ],
    "recovery": [
      "不要只写“不能用”；不懂原因没关系，记录现象即可。",
      "Describe the symptom, not merely “broken”; you need not know the cause."
    ],
    "terms": [
      "bug",
      "log"
    ]
  },
  {
    "id": "repair-plan",
    "input": [
      "刚才保存的问题反馈记录。",
      "The feedback record you just saved."
    ],
    "output": [
      "修复计划有具体改动和检查方法。",
      "The fix and its test are specific."
    ],
    "steps": [
      [
        "先让工具解释为什么出问题。\n建议提示词：请读 docs/feedback.md 和需求，先检查问题原因，不改代码。把已查明的事实和还要验证的猜测分开，告诉我下一项最小检查。\n完成后：得到能对应实际问题的解释。",
        "Ask why the issue occurs before changing anything.\nSuggested prompt: Read docs/feedback.md and the requirements. Investigate without changing code. Separate facts from hypotheses and give the next small check.\nAfterwards: The explanation fits the observed issue."
      ],
      [
        "让工具写清准备改哪里、怎么确认改好了，然后自己读一遍。\n建议提示词：请保存 docs/repair-plan.md：每个问题改哪些文件、会影响哪些原功能、怎样重走失败步骤、修好应该看到什么。涉及数据库先写备份和恢复方法，等我确认再执行。\n完成后：修复计划有具体改动和检查方法。",
        "Review where the fix will happen and how you will check it.\nSuggested prompt: Save docs/repair-plan.md with changed files, affected features, original-case retest and expected results. Include backup/recovery before database changes. Wait for my approval.\nAfterwards: The fix and its test are specific."
      ]
    ],
    "answer": [
      "修复计划说明改哪里、会影响什么，以及怎样再次检查。",
      "A repair plan explains changes, possible effects and retesting."
    ],
    "example": [
      "F01：修正取消释放名额；复测原步骤；回归报名和重复取消；不改页面样式。",
      "F01: restore capacity on cancellation; reproduce and retest; regress booking and repeated cancel; no styling changes."
    ],
    "recovery": [
      "原因不明就继续小范围检查，不默认重装或删库。",
      "Investigate further rather than defaulting to reinstalling or deleting storage."
    ],
    "terms": [
      "root-cause",
      "regression"
    ]
  },
  {
    "id": "repair",
    "input": [
      "你已确认的修复计划，以及原来失败的操作。",
      "Your approved repair plan and the original failing actions."
    ],
    "output": [
      "问题状态与本人实际结果一致。",
      "Issue status matches your result."
    ],
    "steps": [
      [
        "确认修复计划后，让工具只改这一项问题。\n建议提示词：请按已确认的 docs/repair-plan.md 修复【问题编号】。保护已有数据，只改必要文件，完成后报告实际检查结果和我该怎样复测。\n完成后：工具说明改了哪里和怎样再试。",
        "After reviewing the plan, fix one agreed issue.\nSuggested prompt: Follow the approved docs/repair-plan.md for 【issue ID】. Preserve data, change only necessary files and report checks plus my retest steps.\nAfterwards: The tool explains the change and retest."
      ],
      [
        "亲自重走原来失败的那组操作，再试原本正常的功能。\n完成后：原问题解决，原来的保存和读取仍正常。",
        "Repeat the original failing actions, then check previously working features.\nAfterwards: The issue is fixed and normal behavior still works."
      ],
      [
        "把自己的复测结果交给工具保存。\n建议提示词：我的复测结果：【填写】。请更新 docs/checks.md 和 docs/feedback.md；只有我实际验证通过的问题才关闭，未测项保留。\n完成后：问题状态与本人实际结果一致。",
        "Save your personal retest results.\nSuggested prompt: My retest result: 【fill in】. Update docs/checks.md and docs/feedback.md; close only personally verified issues and retain untested items.\nAfterwards: Issue status matches your result."
      ]
    ],
    "answer": [
      "复测是重新试原问题；再检查原本正常的功能，可以发现有没有顺带改坏别的地方。",
      "Retesting checks the original issue; trying working features catches unintended damage."
    ],
    "example": [
      "F01 / 修复版本def / 原步骤通过 / 报名回归通过 / 本人已复测 → 可以关闭F01。",
      "F01 / revision def / original case passed / booking regression passed / personally retested → close F01."
    ],
    "recovery": [
      "范围扩大或要求清库时先停，回修复计划说明原因。",
      "Return to planning if the scope expands or a reset is proposed."
    ],
    "terms": [
      "regression",
      "rollback"
    ]
  },
  {
    "id": "delivery",
    "input": [
      "已经试用过的作品，以及准备给谁使用的决定。",
      "Your tested project and intended users."
    ],
    "output": [
      "知道接下来要准备什么。",
      "The required preparations are clear."
    ],
    "steps": [
      [
        "决定谁在哪里使用：自己电脑、别人通过网址、还是下载安装包。填下方模板并确认。\n完成后：选择符合真实使用需要。",
        "Choose who uses it and where: your computer, a shared URL or an installer. Fill and confirm the template.\nAfterwards: The choice matches actual use."
      ],
      [
        "展开“把本步已确认记录交给 AI 保存”，生成话术并发给工具。\n完成后：docs/delivery.md 中记录了使用者、设备和交付方式。",
        "Use the save-in-project section to generate and send the save instruction.\nAfterwards: docs/delivery.md records users, devices and delivery method."
      ],
      [
        "请工具按选好的方式列准备事项。\n建议提示词：请读 docs/delivery.md。本机使用写清启动、停止、数据位置；远程使用分别说明页面、后端、数据库放在哪里，需要哪些账号和费用。先列方案，不发布。\n完成后：知道接下来要准备什么。",
        "Ask what the chosen method requires.\nSuggested prompt: Read docs/delivery.md. For local use explain start/stop and storage. For remote use explain where page, backend and database run, with accounts and costs. Plan only; do not publish.\nAfterwards: The required preparations are clear."
      ]
    ],
    "answer": [
      "交付就是让预期使用者能打开并使用作品，不一定需要公开网址。",
      "Delivery means intended users can open and use it; a public URL is optional."
    ],
    "example": [
      "网站：网址+运行服务；桌面：适合目标系统的安装产物；手机：对应平台和渠道的签名产物/商店入口。",
      "Web: URL plus running services. Desktop: compatible installer. Mobile: signed channel-specific output or store entry."
    ],
    "recovery": [
      "自己电脑能用也是有效结果，不必为了教程公开上线。",
      "Local use is a valid result; publication is not mandatory."
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
      "选好的使用方式、试用记录和使用说明。",
      "The chosen delivery method, trial results and instructions."
    ],
    "output": [
      "可以判断是先修问题还是准备交付文件。",
      "You know whether to repair or prepare delivery files next."
    ],
    "steps": [
      [
        "让工具对照试用记录，看看还有什么没有准备好。\n建议提示词：请读需求、docs/checks.md、docs/acceptance.md 和 docs/delivery.md。逐项检查功能、启动说明、数据保存、账号和费用，把缺少的条件写清楚。先检查，不发布。\n完成后：有明确的已准备和未准备清单。",
        "Check what is still missing before delivery.\nSuggested prompt: Read requirements, docs/checks.md, docs/acceptance.md and docs/delivery.md. Check features, startup instructions, data, accounts and costs. List gaps without publishing.\nAfterwards: Ready and missing items are clearly separated."
      ],
      [
        "保存检查清单，有阻断问题先修好。\n建议提示词：请把准备情况保存到 docs/release.md，把需要修的问题编号写入 docs/feedback.md。还没制作安装包或部署时，相关试运行写待测试。\n完成后：可以判断是先修问题还是准备交付文件。",
        "Save the checklist and repair blocking issues first.\nSuggested prompt: Save readiness to docs/release.md and numbered issues to docs/feedback.md. Mark artifact/deployment trials pending until they actually run.\nAfterwards: You know whether to repair or prepare delivery files next."
      ]
    ],
    "answer": [
      "这一项是准备检查；还没打开试过的安装包或网站，要留作待测试。",
      "This checks preparation; an untried installer or site remains pending."
    ],
    "example": [
      "构建条件：已核验；真机安装：待“准备部署脚本或安装包”；正式发布：未执行。",
      "Build prerequisites verified; device installation pending “Prepare deployment or packaging”; production release not executed."
    ],
    "recovery": [
      "没有本人试用记录就回试用步骤补，不让工具代填通过。",
      "Return to personal testing if its record is absent."
    ],
    "terms": [
      "release",
      "environment"
    ]
  },
  {
    "id": "package",
    "input": [
      "检查通过的交付准备清单。",
      "Your checked delivery preparation list."
    ],
    "output": [
      "下一步能按记录找到同一份交付文件。",
      "The next step can find the same deliverable."
    ],
    "steps": [
      [
        "让工具按已选方式准备给使用者的文件。\n建议提示词：请读 docs/design.md、docs/delivery.md 和 docs/release.md。按已确认方式准备交付文件，告诉我保存位置、使用者需要安装什么以及怎样启动。只自用时可以提供源码和运行说明，不强行做安装包。\n完成后：找到真实文件和配套使用说明。",
        "Prepare files for the chosen delivery method.\nSuggested prompt: Read docs/design.md, docs/delivery.md and docs/release.md. Prepare the agreed files and explain location, dependencies and startup. Local use may use source and instructions without an installer.\nAfterwards: Real files and matching instructions are available."
      ],
      [
        "在独立测试目录或目标设备中，像接收者一样照说明打开并使用。\n建议提示词：请给出独立试运行的方法，不借用已经启动的开发服务。用测试资料检查打开、保存、读取和重开，保留原项目数据。\n完成后：接收者按说明可以使用主要功能。",
        "Try it independently as the recipient would.\nSuggested prompt: Give an isolated trial method without relying on an existing development service. Test opening, saving, reading and reopening with test data while preserving the original.\nAfterwards: The instructions let the recipient use core features."
      ],
      [
        "把这次试运行记录保存下来。\n建议提示词：请将文件位置、版本、实际入口、试运行结果和出错后的恢复方法写入 docs/release.md。未测项保留，先不要正式发布。\n完成后：下一步能按记录找到同一份交付文件。",
        "Save the trial record.\nSuggested prompt: Write artifact location, revision, real entry, trial results and recovery to docs/release.md. Keep untested items and do not publish yet.\nAfterwards: The next step can find the same deliverable."
      ]
    ],
    "answer": [
      "安装包、静态网页和需要后端的网站，使用方法不同；让工具按你的项目准备。",
      "Installers, static pages and backend-powered sites need different preparation."
    ],
    "example": [
      "仓库 → 项目实际构建命令 → 输出目录/安装包 → 测试目标 → 普通用户操作 → 试运行证据。",
      "Repository → actual build command → output/installer → test target → user actions → evidence."
    ],
    "recovery": [
      "缺配置时用占位说明，不能把真实密码和用户数据库打进公开文件。",
      "Use configuration placeholders; exclude real secrets and user databases from public packages."
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
      "准备好的安装包、本机启动入口或实际网站网址。",
      "The prepared installer, local launch entry or real website URL."
    ],
    "output": [
      "使用者可以按说明使用，结果记录准确。",
      "Users can follow accurate instructions."
    ],
    "steps": [
      [
        "先确认实际交付到哪里。本机使用就确认本机启动方法；公开发布先看账号、网址、费用和影响。\n建议提示词：请读 docs/release.md 和 docs/delivery.md，列出本次要执行的交付动作、目标和费用，等我明确确认后再做。\n完成后：你知道将会发生什么，并能决定是否执行。",
        "Confirm the real destination. For local use check startup; for publication review account, URL, costs and impact.\nSuggested prompt: Read docs/release.md and docs/delivery.md. List the proposed delivery actions, destination and costs; wait for my explicit confirmation.\nAfterwards: You can understand and approve the action."
      ],
      [
        "确认后执行，再从实际使用者的入口打开。\n建议提示词：我确认执行以下动作：【填写】。请只执行这些动作，报告实际入口与版本。需要审核就记待审核，不提前说已经上线。\n完成后：有真实入口，或知道还在等待哪个审核。",
        "After approval, execute and open the intended user entry.\nSuggested prompt: I approve these actions: 【fill in】. Execute only these and report the actual entry and revision. Mark pending reviews honestly.\nAfterwards: A real entry exists or its pending review is clear."
      ],
      [
        "亲自完成一次主要操作，再关闭重开检查。\n建议提示词：我的实际使用结果：【填写】。请保存到 docs/release.md，并把最新版使用入口和说明更新到 README.md。\n完成后：使用者可以按说明使用，结果记录准确。",
        "Try the main task and reopen it, then record your result.\nSuggested prompt: My actual use result: 【fill in】. Save it to docs/release.md and update README.md with the latest entry/instructions.\nAfterwards: Users can follow accurate instructions."
      ]
    ],
    "answer": [
      "本机使用检查本机入口；公开网站检查真实网址，两者按自己的选择来。",
      "Check the local entry for local use or the real URL for a public site."
    ],
    "example": [
      "网址可访问但登录回调失败 → 未通过；商店正在审核 → 待审核；普通用户完整流程通过 → 已核对。",
      "Reachable URL but broken login callback: fail. Store review pending: pending. Full ordinary-user flow passes: checked."
    ],
    "recovery": [
      "目标或费用不清楚就先问清，不把“准备好了”当作已经同意发布。",
      "Clarify unknowns before approval."
    ],
    "terms": [
      "deploy",
      "rollback"
    ]
  },
  {
    "id": "publish",
    "input": [
      "项目文件和已经确认的技术方案。",
      "Your project files and agreed technology choices."
    ],
    "output": [
      "有能逐项照做的准备说明。",
      "The preparation instructions are actionable."
    ],
    "steps": [
      [
        "先判断是否适合 GitHub Pages。它可以托管静态网页，但不会替你运行后端和数据库。\n建议提示词：请读 docs/delivery.md，检查项目能否直接导出静态网页。如果依赖后端或私密服务端配置，请说明原因并建议回到交付方式选择。现在只判断，不发布。\n完成后：知道自己的项目是否适合。",
        "Check whether GitHub Pages fits. It hosts static pages, not your backend/database service.\nSuggested prompt: Read docs/delivery.md and assess static export suitability. Explain server/private-configuration dependencies and return to delivery selection if unsuitable. Assess only; do not publish.\nAfterwards: Suitability is clear."
      ],
      [
        "适合时让工具写出实际设置方法，再回准备交付步骤试运行。\n建议提示词：请列本项目生成静态文件的方法、输出目录和 GitHub Pages 设置步骤，解释每一步在哪里操作。先只提供方案，不创建远程仓库、不推送、不发布。\n完成后：有能逐项照做的准备说明。",
        "If suitable, prepare exact instructions and return to delivery preparation.\nSuggested prompt: List this project’s static build, output folder and GitHub Pages settings with locations. Provide a plan only; do not create a remote repository, push or publish.\nAfterwards: The preparation instructions are actionable."
      ]
    ],
    "answer": [
      "Git 是记录版本的工具；GitHub 是保存和分享代码的网站；GitHub Pages 是它提供的静态网页托管功能。",
      "Git records versions, GitHub hosts/shares code, and GitHub Pages hosts static webpages."
    ],
    "example": [
      "介绍页/静态文档可评估；需要服务端保管密钥的AI接口不能把密钥放进网页产物。",
      "Evaluate brochure/docs sites; never place private API keys in browser output."
    ],
    "recovery": [
      "学习记录全栈示例有后端和数据库，不能只上传页面就当作完整上线。",
      "The full-stack journal cannot be fully deployed by uploading its page alone."
    ],
    "terms": [
      "static-site",
      "static-site"
    ]
  },
  {
    "id": "maintain",
    "input": [
      "目前能使用的项目、数据位置和还没完成的任务。",
      "Your working project, data location and unfinished tasks."
    ],
    "output": [
      "下次可以直接找到原项目和下一项任务。",
      "The next session can find the project and next task."
    ],
    "steps": [
      [
        "先分清要备份什么：项目代码、作品数据、学习草稿分别保存。只有实际使用数据库时才做下面的数据库备份和恢复；没有数据库就按工具说明备份实际文件，再做最后的“记录下次从哪里继续”。\n建议提示词：请列出本项目代码和实际数据的位置，分别说明怎样备份、备份存在哪里。代码提交不能代替数据库备份。\n完成后：知道每份资料该从哪里备份。",
        "Distinguish code, application data and learning drafts. Follow the database backup and restoration actions only when your project uses a database. Otherwise back up its actual files, then continue to the final handoff action.\nSuggested prompt: List code and actual data locations and how/where each is backed up. A commit does not replace a database backup.\nAfterwards: Each backup source and destination is clear."
      ],
      [
        "创建一份带日期的新备份，不覆盖旧文件。\n建议提示词：请用数据库支持的一致性备份方法，生成一份新备份。先报告原数据位置、备份位置和当前记录数量，完成后告诉我文件大小。不要清空或覆盖原数据。\n完成后：得到能找到的非空备份文件。",
        "Create a new dated backup without overwriting older files.\nSuggested prompt: Use the database’s supported consistent-backup method. Report source, destination and current record count, then output size. Preserve original data.\nAfterwards: A nonempty backup exists at the reported location."
      ],
      [
        "在独立目录试着恢复这份备份。恢复成功意味着能真的打开并读到记录。\n建议提示词：请把备份恢复到独立测试位置，先让我核对原库和恢复目标不是同一路径。只启动连接恢复副本的测试服务，告诉我打开地址，绝不覆盖原库。\n完成后：能打开恢复副本，找到备份时的旧记录。",
        "Restore into a separate test location and actually read the records.\nSuggested prompt: Restore to a separate test destination. Show source and target paths first. Start only a test service connected to the copy and give its URL. Never overwrite the source.\nAfterwards: The restored copy opens with records from the backup."
      ],
      [
        "打开刚才恢复副本的网址，新增“恢复测试 001”并保存。把这条记录的编号交给工具，检查原库里没有它。若副本无法新增，就把实际报错交给工具，先不要记录为成功。\n建议提示词：我只在恢复副本里新增了“恢复测试 001”，编号是【填写】。请核对副本中的旧记录和新增记录，并只读检查原库没有这次新增。将备份位置、恢复方法和实际结果写入 docs/handoff.md，再停止恢复测试服务。不要修改原库。\n完成后：副本能保存新记录，原库内容不变，恢复方法已保存。",
        "Open the restored copy’s URL and save “restore test 001”. Give its ID to the tool and check that it is absent from the original database. If saving fails, report the error instead of claiming success.\nSuggested prompt: I added “restore test 001” only to the restored copy, with ID [fill in]. Check the copy’s old and new records, and read-only verify that the original does not contain this addition. Record backup location, restoration method and actual results in docs/handoff.md, then stop the test service. Do not modify the original database.\nAfterwards: The copy saves new records, the original is unchanged, and restoration instructions are saved."
      ],
      [
        "记录下次从哪里继续。\n建议提示词：请更新 docs/handoff.md：项目位置、当前版本、启动方法、未解决问题、下一项任务。下次新对话先读这份文件，不重新创建项目。\n完成后：下次可以直接找到原项目和下一项任务。",
        "Record where to resume next time.\nSuggested prompt: Update docs/handoff.md with location, revision, startup, open issues and next task. A new chat should read it rather than recreate the project.\nAfterwards: The next session can find the project and next task."
      ]
    ],
    "answer": [
      "备份是另存一份资料；恢复是用那份资料重新打开并确认能用。",
      "A backup keeps another copy; restoration proves that copy can be opened and used."
    ],
    "example": [
      "数据备份：每周/本人/服务备份入口/在测试库恢复并对照数量/失败保留原库并排查；频率按可接受损失调整。",
      "Backup example: weekly, owner, service backup entry, restore in test and compare records; preserve the source on failure. Adjust frequency to acceptable loss."
    ],
    "recovery": [
      "只有仓库地址时，追问作品数据实际在哪里。",
      "Ask for data storage if only a repository is listed."
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
    "让AI只读报告真实路径和现有文件，再与“创建项目文件夹”的记录及文件管理器对照。只看对话标题不够。",
    "Compare AI’s actual read-only paths and files with the “Create the project folder” record and the file manager.th/files with the “Create the project folder” milestone and the file manager; a chat title is insufficient."
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
