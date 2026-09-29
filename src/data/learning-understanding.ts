import type {Understanding} from './learning';
export const understanding={
  "idea": {
    "why": [
      "先想清楚你要解决的一件事，AI 才知道该帮你做什么。",
      "Name one problem so AI knows what to help you build."
    ],
    "concept": [
      "先写给谁用、解决什么问题，再写怎样试用才算做好。",
      "Write users, problem and a practical success check."
    ],
    "question": [
      "这个项目解决的是谁的哪件事？",
      "Whose problem does this solve?"
    ]
  },
  "goal": {
    "why": [
      "用一个小例子理解完整流程，不是要求所有项目都做笔记应用。",
      "Use a small example to understand a complete flow, not prescribe a journal for every project."
    ],
    "concept": [
      "第一版要小，但仍能完成一件真实任务。",
      "A first version is small but completes a real task."
    ],
    "question": [
      "自己的项目里，最短完整流程是什么？",
      "What is the shortest complete flow in this project?"
    ]
  },
  "tool": {
    "why": [
      "选一个你能登录、能操作项目文件的工具，就可以开始。",
      "Choose one tool you can sign into that can work with project files."
    ],
    "concept": [
      "这里的 AI 工具需要能帮助你保存文件和运行项目；先确认入口，再开始做。",
      "The tool should help save files and run the project; locate its controls first."
    ],
    "question": [
      "额度用完后，项目文件和进度还能找回吗？",
      "Can work and progress be recovered after allowance runs out?"
    ]
  },
  "folder": {
    "why": [
      "把这个项目的文件放在同一个文件夹，下次才找得到。",
      "Keep project files together so you can find them next time."
    ],
    "concept": [
      "文件夹就是项目文件的存放位置；路径是找到它的地址。",
      "A folder stores project files; its path tells you where it is."
    ],
    "question": [
      "项目文件现在究竟保存在哪里？",
      "Where are the files actually stored?"
    ]
  },
  "open-project": {
    "why": [
      "让工具打开你自己的项目文件夹，后面才能修改正确的文件。",
      "Open your project folder in the tool so later changes reach the right files."
    ],
    "concept": [
      "同一个工具可以打开不同项目；开始前要检查现在打开的是哪一个。",
      "A tool can open different projects; check which one is active."
    ],
    "question": [
      "怎样核对 AI 操作的是刚建立的文件夹？",
      "How can the target folder be verified?"
    ]
  },
  "first-file": {
    "why": [
      "亲手打开文件，看自己的说明和规则是不是真的保存好了。",
      "Open the files yourself to check that your description and rules were saved."
    ],
    "concept": [
      "聊天里出现一段文字，与项目里已经保存一个文件，是两件事。现在要找的是实际文件。",
      "A chat reply and a saved project file are different. Find the actual file now."
    ],
    "question": [
      "如果 AI 说保存了，却找不到文件，该核对什么？",
      "What should be checked if a claimed file is missing?"
    ]
  },
  "checkpoint": {
    "why": [
      "Git 保存已经提交的项目版本，改错时可以回到之前保存的版本。AGENTS.md 是写给 AI 工具的项目说明书和规则。",
      "Git keeps committed project versions you can return to. AGENTS.md explains the project and working rules to the AI tool."
    ],
    "concept": [
      "初始化 Git 是建立保存修改历史的地方；提交才是保存一个版本。AGENTS.md 写明工具做事时要遵守什么。",
      "Initializing Git creates a place for history; committing saves a version. AGENTS.md states the rules the tool should follow."
    ],
    "question": [
      "有仓库但没有提交，是否已有可恢复版本？",
      "Does an empty repository contain a recoverable version?"
    ]
  },
  "clarify": {
    "why": [
      "把工具没理解的地方解释清楚，避免做出你不想要的功能。",
      "Explain unclear points before the tool builds the wrong thing."
    ],
    "concept": [
      "不用一次回答所有问题；问一个，答一个，不知道就说还没决定。",
      "Answer one question at a time; undecided is a valid answer."
    ],
    "question": [
      "这项未知会改变第一版范围吗？",
      "Does this unknown change first-version scope?"
    ]
  },
  "scope": {
    "why": [
      "先决定第一版必须能做哪些事，其他想法留到以后。",
      "Decide what the first version must do and leave other ideas for later."
    ],
    "concept": [
      "第一版是你准备先完成并使用的一小部分，不是所有想法一次做完。",
      "Version one is the useful part you will finish first, not every idea at once."
    ],
    "question": [
      "删掉这项功能，核心任务还能完成吗？",
      "Can the core task finish without this feature?"
    ]
  },
  "requirements": {
    "why": [
      "把已经说好的功能写下来，开发时就能照着检查。",
      "Write agreed features down so you can check the implementation later."
    ],
    "concept": [
      "需求文档记录填什么、做什么、应该得到什么结果。",
      "Requirements record inputs, actions and expected outcomes."
    ],
    "question": [
      "只写“好用”，别人能一致判断通过吗？",
      "Can everyone consistently judge “easy to use”?"
    ]
  },
  "choose-stack": {
    "why": [
      "请工具解释准备用哪些东西来做项目，以及会不会产生费用。",
      "Ask which tools will build the project and what they cost."
    ],
    "concept": [
      "前端是看得见的页面；后端处理请求；数据库保存记录。你的项目需要哪部分，就准备哪部分。",
      "The frontend is the page, the backend processes requests and the database stores records. Prepare the parts your project needs."
    ],
    "question": [
      "为什么本机保存不等于手机电脑自动同步？",
      "Why does local storage not imply device sync?"
    ]
  },
  "plan": {
    "why": [
      "把开发拆成一小项一小项，做完一项就能打开看看。",
      "Split development into small tasks you can inspect as they finish."
    ],
    "concept": [
      "任务表告诉你下一项做什么、需要什么、怎样判断做完了。",
      "A task list names the next job, prerequisites and completion check."
    ],
    "question": [
      "第一项做完，具体能打开或操作什么？",
      "What can be opened or used after the first task?"
    ]
  },
  "preview": {
    "why": [
      "从任务表第一项开始制作，每次亲手看完结果再继续。",
      "Build from the first task and inspect each result before continuing."
    ],
    "concept": [
      "预览是打开正在开发的作品，看看真实页面和功能是什么样。",
      "A preview opens the work in progress so you can see its real pages and behavior."
    ],
    "question": [
      "关闭启动窗口后，为什么地址可能打不开？",
      "Why might the URL fail after its process stops?"
    ]
  },
  "interface": {
    "why": [
      "让使用者看得懂文字，找得到输入框和按钮。",
      "Make labels, fields and buttons understandable and easy to find."
    ],
    "concept": [
      "界面就是使用者看到和操作的页面；这里先改一处具体问题。",
      "The interface is what people see and use; fix one specific problem here."
    ],
    "question": [
      "这次调整让哪个具体操作更容易了？",
      "Which action became easier?"
    ]
  },
  "save": {
    "why": [
      "让用户填写的内容真正存下来，关掉页面后还能找回。",
      "Store entered content so it can be found after the page closes."
    ],
    "concept": [
      "看到“保存成功”还要查记录是否真的写入；刷新、重新打开后也应读得到。",
      "After a success message, check the real record and read it after reopening."
    ],
    "question": [
      "怎样证明保存结果不是只留在当前画面？",
      "How can persistence beyond the current screen be proven?"
    ]
  },
  "flow": {
    "why": [
      "像使用者一样从头做一遍，检查每个步骤能不能接着往下走。",
      "Act as a user and check that every action leads to the next."
    ],
    "concept": [
      "完整流程包括打开、输入、提交和看到结果，不能只试一个按钮。",
      "A complete flow includes opening, input, submission and results, not one button alone."
    ],
    "question": [
      "从第一次打开开始，能独立完成吗？",
      "Can the task be completed independently from opening?"
    ]
  },
  "test": {
    "why": [
      "试试填错、重复点击或服务停止时，作品能不能清楚提示并保留资料。",
      "Try invalid input, repeat clicks and service failure to check feedback and retained data."
    ],
    "concept": [
      "异常测试就是故意试一试不顺利的情况，看看作品会怎样处理。",
      "Failure testing deliberately tries things going wrong to see how the project responds."
    ],
    "question": [
      "除了正常输入，最可能发生哪种误操作？",
      "Which mistake is most likely besides normal input?"
    ]
  },
  "restart": {
    "why": [
      "确认今天关掉以后，明天照着说明还能打开并继续用。",
      "Check that you can close it today and reopen it from the instructions tomorrow."
    ],
    "concept": [
      "浏览器页面与后端服务不是同一个东西；关浏览器后服务可能还在运行。",
      "The browser page and backend are separate; closing the browser may leave the service running."
    ],
    "question": [
      "明天没有这段聊天，还知道怎样打开吗？",
      "Could it be reopened tomorrow without this chat?"
    ]
  },
  "accept": {
    "why": [
      "回到最初的想法，亲自看看作品有没有解决自己的问题。",
      "Return to the original goal and personally check whether the project solves it."
    ],
    "concept": [
      "验收就是你按照先前约定的方法试用，再决定是否达到了目标。",
      "Acceptance means trying the agreed checks yourself and deciding whether the goal is met."
    ],
    "question": [
      "是否还有不能接受的问题或未试过的关键步骤？",
      "Are there blockers or untried core steps?"
    ]
  },
  "delivery": {
    "why": [
      "先决定自己用还是给别人用，才能知道需要准备哪些文件和服务。",
      "Choose local or shared use before preparing files and services."
    ],
    "concept": [
      "交付就是让预期使用者能打开并使用作品，不一定需要公开网址。",
      "Delivery means intended users can open and use it; a public URL is optional."
    ],
    "question": [
      "需要一个网址、一个安装包，还是本机启动说明？",
      "Is the deliverable a URL, installer or local guide?"
    ]
  },
  "publish": {
    "why": [
      "先判断自己的网页是否适合放到 GitHub Pages，再决定下一步。",
      "Check whether your page fits GitHub Pages before proceeding."
    ],
    "concept": [
      "Git 是记录版本的工具；GitHub 是保存和分享代码的网站；GitHub Pages 是它提供的静态网页托管功能。",
      "Git records versions, GitHub hosts/shares code, and GitHub Pages hosts static webpages."
    ],
    "question": [
      "为什么换了正式网址后看不到原本的本机记录？",
      "Why might local records differ at a production URL?"
    ]
  },
  "maintain": {
    "why": [
      "把启动、备份和下一项任务写好，下次就能接着做。",
      "Record startup, backups and the next task so you can resume later."
    ],
    "concept": [
      "备份是另存一份资料；恢复是用那份资料重新打开并确认能用。",
      "A backup keeps another copy; restoration proves that copy can be opened and used."
    ],
    "question": [
      "只有代码仓库，能恢复用户后续填写的数据吗？",
      "Can code alone restore data entered later?"
    ]
  }
} satisfies Record<string,Understanding>;
