import type {Understanding} from './learning';
export const understanding={
  "idea": {
    "why": [
      "先把自己的目标写清楚，后续才能判断 AI 是否做偏。",
      "Clarify personal goals to recognize drift."
    ],
    "concept": [
      "想法可以不完整；未知不等于让 AI 自行编造。",
      "Unknowns are allowed, not permission to invent."
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
      "工具能否读写和检查项目，比宣传中的能力排名更直接影响下一步。",
      "File access and checks matter more than rankings for the next action."
    ],
    "concept": [
      "免费安装、免费使用额度和产品运行费用是三回事。",
      "Free installation, usage allowance and hosting costs are different."
    ],
    "question": [
      "额度用完后，项目文件和进度还能找回吗？",
      "Can work and progress be recovered after allowance runs out?"
    ]
  },
  "folder": {
    "why": [
      "固定项目位置，才能找到实际产物，也避免改错别的项目。",
      "A stable location makes outputs findable and prevents editing the wrong project."
    ],
    "concept": [
      "文件夹保存本机文件；网页平台的云项目不一定在电脑里。",
      "A local folder differs from a cloud workspace."
    ],
    "question": [
      "项目文件现在究竟保存在哪里？",
      "Where are the files actually stored?"
    ]
  },
  "open-project": {
    "why": [
      "对话必须关联正确的项目，AI 才能读到和修改目标文件。",
      "The chat must target the right project to access its files."
    ],
    "concept": [
      "普通聊天能输出文字，不代表它有当前项目的文件权限。",
      "Chat output does not prove project file access."
    ],
    "question": [
      "怎样核对 AI 操作的是刚建立的文件夹？",
      "How can the target folder be verified?"
    ]
  },
  "first-file": {
    "why": [
      "亲手打开真实文件，能区分 AI 的回复与实际执行。",
      "Opening a real file separates replies from execution."
    ],
    "concept": [
      "文件路径说明文件在哪；只有聊天里的代码块还不是文件。",
      "A code block in chat is not a saved file."
    ],
    "question": [
      "如果 AI 说保存了，却找不到文件，该核对什么？",
      "What should be checked if a claimed file is missing?"
    ]
  },
  "checkpoint": {
    "why": [
      "修改前保存起点，改坏后才有依据比较和恢复。",
      "Save a baseline before changes to compare and recover."
    ],
    "concept": [
      "Git 初始化只建立仓库；提交才记录一个版本。规则文件还要放在工具实际读取的位置。",
      "Git initialization creates a repository; commits record versions. Rules must use a supported location."
    ],
    "question": [
      "有仓库但没有提交，是否已有可恢复版本？",
      "Does an empty repository contain a recoverable version?"
    ]
  },
  "clarify": {
    "why": [
      "先纠正 AI 的理解，避免它把猜测做成产品。",
      "Correct misunderstandings before guesses become features."
    ],
    "concept": [
      "澄清是补足影响选择的信息，不是让用户先懂所有技术。",
      "Clarification fills decision gaps, not technical trivia."
    ],
    "question": [
      "这项未知会改变第一版范围吗？",
      "Does this unknown change first-version scope?"
    ]
  },
  "scope": {
    "why": [
      "明确本次边界，才能既做完核心任务，又避免无限加功能。",
      "A clear boundary enables a useful finish without endless extras."
    ],
    "concept": [
      "暂缓功能并非永远删除，而是本次不作为通过条件。",
      "Deferred features are excluded from this release, not forever."
    ],
    "question": [
      "删掉这项功能，核心任务还能完成吗？",
      "Can the core task finish without this feature?"
    ]
  },
  "requirements": {
    "why": [
      "留下共同依据，换对话后也能知道什么才算做对。",
      "Save shared criteria across conversations."
    ],
    "concept": [
      "需求写用户行为和结果，技术设计再说明实现方式。",
      "Requirements describe behavior; design explains implementation."
    ],
    "question": [
      "只写“好用”，别人能一致判断通过吗？",
      "Can everyone consistently judge “easy to use”?"
    ]
  },
  "choose-stack": {
    "why": [
      "保存位置、费用和平台会影响产品能不能按预期交付。",
      "Storage, costs and platform affect delivery."
    ],
    "concept": [
      "技术栈是一组实现工具；不是用来帮忙写代码的 AI 工具。",
      "A tech stack builds the product; an AI assistant helps write it."
    ],
    "question": [
      "为什么本机保存不等于手机电脑自动同步？",
      "Why does local storage not imply device sync?"
    ]
  },
  "plan": {
    "why": [
      "把任务拆成可检查的小变化，才能及时发现偏差。",
      "Small inspectable tasks expose drift early."
    ],
    "concept": [
      "通过条件在实现前定义，不能为了显示完成而事后降低。",
      "Define passing conditions before implementation, not lower them afterward."
    ],
    "question": [
      "第一项做完，具体能打开或操作什么？",
      "What can be opened or used after the first task?"
    ]
  },
  "preview": {
    "why": [
      "先跑起来一小部分，比一次生成所有功能更容易检查方向。",
      "A running small part is easier to assess than an entire generated app."
    ],
    "concept": [
      "预览地址依赖正在运行的服务；本机地址不是公开网址。",
      "A local preview depends on its process and is not public."
    ],
    "question": [
      "关闭启动窗口后，为什么地址可能打不开？",
      "Why might the URL fail after its process stops?"
    ]
  },
  "interface": {
    "why": [
      "界面决定使用者能否找到动作和理解反馈。",
      "UI determines whether actions and feedback are understandable."
    ],
    "concept": [
      "外观改动也可能影响功能，所以原流程需要再试。",
      "Visual changes can affect behavior; retry the original flow."
    ],
    "question": [
      "这次调整让哪个具体操作更容易了？",
      "Which action became easier?"
    ]
  },
  "save": {
    "why": [
      "真实保存要在刷新或重新打开后仍然有效。",
      "Persistence must survive refresh or reopening."
    ],
    "concept": [
      "显示成功提示，不证明数据已经写入。",
      "A success message alone does not prove a write."
    ],
    "question": [
      "怎样证明保存结果不是只留在当前画面？",
      "How can persistence beyond the current screen be proven?"
    ]
  },
  "flow": {
    "why": [
      "单个按钮能用不代表它们连接后能完成任务。",
      "Working buttons may still fail as a complete flow."
    ],
    "concept": [
      "端到端检查从用户入口一直走到最终结果。",
      "End-to-end checks follow entry to outcome."
    ],
    "question": [
      "从第一次打开开始，能独立完成吗？",
      "Can the task be completed independently from opening?"
    ]
  },
  "test": {
    "why": [
      "现实使用包含误操作和失败，不能只检查最顺利的一次。",
      "Real use includes mistakes and failures."
    ],
    "concept": [
      "边界情况是空白、重复等容易遗漏的输入或操作。",
      "Edge cases include blank or repeated actions."
    ],
    "question": [
      "除了正常输入，最可能发生哪种误操作？",
      "Which mistake is most likely besides normal input?"
    ]
  },
  "restart": {
    "why": [
      "作品需要下次还能用，不能依赖当前对话一直开着。",
      "Work must reopen beyond the current conversation."
    ],
    "concept": [
      "启动说明是复现入口，不能依赖猜测端口或重新生成项目。",
      "Restart instructions reproduce access without guessing or rebuilding."
    ],
    "question": [
      "明天没有这段聊天，还知道怎样打开吗？",
      "Could it be reopened tomorrow without this chat?"
    ]
  },
  "accept": {
    "why": [
      "AI 能检查部分行为，是否解决本人问题仍需亲手判断。",
      "AI checks some behavior; personal use judges fit."
    ],
    "concept": [
      "自动测试、人工试用和公开发布是不同状态。",
      "Automated checks, personal acceptance and release are distinct."
    ],
    "question": [
      "是否还有不能接受的问题或未试过的关键步骤？",
      "Are there blockers or untried core steps?"
    ]
  },
  "delivery": {
    "why": [
      "目标用户在哪里使用，决定需要怎样交付。",
      "Audience and device determine delivery."
    ],
    "concept": [
      "自用也可以是完整成果，不一定需要购买域名或公开代码。",
      "Personal use can be complete without a domain or public code."
    ],
    "question": [
      "需要一个网址、一个安装包，还是本机启动说明？",
      "Is the deliverable a URL, installer or local guide?"
    ]
  },
  "publish": {
    "why": [
      "静态网页与需要服务器的应用不能用同一发布方法。",
      "Static sites and server apps need different hosting."
    ],
    "concept": [
      "静态托管提供网页文件，不自动增加共享数据库。",
      "Static hosting serves files, not shared storage."
    ],
    "question": [
      "为什么换了正式网址后看不到原本的本机记录？",
      "Why might local records differ at a production URL?"
    ]
  },
  "maintain": {
    "why": [
      "保存下一步和恢复方法，后续继续才不需要从头再讲。",
      "Record next actions and recovery to resume without restarting."
    ],
    "concept": [
      "代码备份和用户数据备份需要分别处理。",
      "Code and user data need separate backups."
    ],
    "question": [
      "只有代码仓库，能恢复用户后续填写的数据吗？",
      "Can code alone restore data entered later?"
    ]
  }
} satisfies Record<string,Understanding>;
