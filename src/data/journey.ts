import type {Copy} from './site';
export interface Stage {id:string; title:Copy; term:string; question:Copy; output:Copy; actions:Copy[]; problem:Copy; answer:Copy; prompt:Copy; modules:Copy; moduleIds:string[]; color:string;}
export const journey:Stage[] = [
  {
    "id": "idea",
    "title": [
      "有一个想法",
      "Have an idea"
    ],
    "term": "Idea",
    "question": [
      "不用想完整，先说说想做什么。",
      "A rough idea is enough to start a conversation."
    ],
    "output": [
      "一句具体的产品描述",
      "A specific product description"
    ],
    "actions": [
      [
        "想到什么就说什么，一句话也可以。",
        "Describe the initial idea. One sentence is enough."
      ],
      [
        "还没想好，就说说生活或工作中哪件事供觉得麻烦。",
        "When unsure, describe something frustrating at work or in daily life."
      ]
    ],
    "problem": [
      "想做的东西太多，不知道从哪里开始。",
      "Too many ideas. Where should I start?"
    ],
    "answer": [
      "选一个最熟悉、能找到人试用的场景。先解决其中一件事，其他想法单独记下。",
      "Choose a familiar situation with someone who can try the result. Solve one problem and keep the other ideas for later."
    ],
    "prompt": [
      "我有一个还没想完整的想法：【用自己的话说，或者举一个觉得麻烦的例子】。请先听我说，不要求我写文档，也不要急着开发。",
      "I have a rough idea: [describe it in plain language, or give an example of something frustrating]. Help me explore it without asking me to write a document or starting development yet."
    ],
    "modules": [
      "项目分类",
      "Project types"
    ],
    "moduleIds": [
      "types"
    ],
    "color": "blue"
  },
  {
    "id": "tell",
    "title": [
      "把想法告诉 AI",
      "Tell AI the idea"
    ],
    "term": "Conversation",
    "question": [
      "把刚才那句话发给 AI，不用换成专业说法。",
      "Send the idea to AI in plain language."
    ],
    "output": [
      "一段已经开始的对话",
      "An initial conversation with AI"
    ],
    "actions": [
      [
        "打开当前正在用的 AI 工具，把想法输入或说给它听。",
        "Open an available AI tool and type or speak the idea."
      ],
      [
        "不知道怎么开口，就复制下面这段话，补上一句话。",
        "When starting feels difficult, copy the prompt below and add a sentence."
      ]
    ],
    "problem": [
      "我连应该告诉 AI 哪些信息都不知道。",
      "I do not know what information AI needs."
    ],
    "answer": [
      "直接告诉它“我不懂开发，请问我”。不用先填写一大张表，也不用提前认识技术名词。",
      "Tell it: “I do not know development. Please ask for the missing information.” No long form or technical vocabulary is required."
    ],
    "prompt": [
      "我不懂开发，想做【用一句话说想法】。请先和我聊聊，帮我弄清楚这个东西可以怎么做。不要让我先写需求文档，也不要一上来就写代码。",
      "I do not know development. I want to make [the idea in one sentence]. Talk it through with me and help me understand what it could be. Do not ask me to write requirements first or start coding immediately."
    ],
    "modules": [
      "和 Agent 沟通",
      "Talking to agents"
    ],
    "moduleIds": [
      "agent"
    ],
    "color": "blue"
  },
  {
    "id": "refine",
    "title": [
      "让 AI 提问补全",
      "Let AI clarify the idea"
    ],
    "term": "Clarification",
    "question": [
      "让 AI 一次问一个问题，按实际情况回答就好。",
      "Let AI ask one question at a time. Answer from project-specific details experience."
    ],
    "output": [
      "与 AI 确认过的第一版想法",
      "An agreed first-version idea"
    ],
    "actions": [
      [
        "让 AI 问清楚给谁用、想解决什么麻烦。",
        "Let AI ask who it is for and what problem it should solve."
      ],
      [
        "回答不上来时，让 AI 给几个例子，选择更接近的。",
        "When the answer is unclear, ask AI for examples and choose the closest."
      ],
      [
        "让 AI 建议第一版先做什么，确认有没有偏离原意。",
        "Ask AI to suggest a small first version, then check that it still matches the idea."
      ]
    ],
    "problem": [
      "AI 一下问了十几个问题，看着就不想做了。",
      "AI asks a dozen questions at once and it feels overwhelming."
    ],
    "answer": [
      "让它一次只问一个，用生活中的例子解释。可以回答“不知道”，让它给出建议和理由，再由使用者选择。",
      "Ask for one question at a time with everyday examples. It is fine to say “I do not know” and ask it for a recommendation and reasons."
    ],
    "prompt": [
      "请帮我完善这个想法，一次只问一个问题。我不确定时，给我两三个容易理解的例子，并说明建议哪个、为什么。聊完后，用普通话复述第一版要做什么、暂时不做什么，让我确认。",
      "Help me refine the idea, asking one question at a time. When I am unsure, give two or three plain-language examples and explain the recommendation. When we finish, summarize what the first version includes and leaves out, and let me confirm."
    ],
    "modules": [
      "和 Agent 沟通 · 项目分类",
      "Talking to agents · Project types"
    ],
    "moduleIds": [
      "agent",
      "types"
    ],
    "color": "blue"
  },
  {
    "id": "requirements",
    "title": [
      "让 AI 生成需求文档",
      "Let AI write the requirements"
    ],
    "term": "Requirements / PRD",
    "question": [
      "聊清楚之后，让 AI 整理，实际看看有没有理解错。",
      "After discussing the idea, let AI write it up and check that it understood."
    ],
    "output": [
      "需求文档：记录给谁用、做什么和完成标准",
      "A requirements document: audience, features, and acceptance criteria"
    ],
    "actions": [
      [
        "把前面聊过的内容交给 AI，让它整理成一份需求文档。",
        "Ask AI to turn the conversation into a requirements document."
      ],
      [
        "只需确认：是不是想做的东西，有没有多做或漏掉。",
        "Check whether it matches the idea and includes too much or too little."
      ],
      [
        "不明白的地方让 AI 举例，确认后让它保存文档。",
        "Ask AI for examples where needed, then have it save the agreed document."
      ]
    ],
    "problem": [
      "AI 一直加功能，越做越偏。",
      "AI keeps adding features and drifting off course."
    ],
    "answer": [
      "把“不做什么”写进文档。新想法先放进后续清单，修改本版范围前先确认影响。",
      "Write down what is out of scope. Keep new ideas in a later list and review their impact before changing this version."
    ],
    "prompt": [
      "请把我们确认的想法整理成需求文档，包含：使用者、解决的问题、主要操作流程、第一版功能、暂不做的功能、每项功能的检查方法。把还没确定的问题单独列出，不要替我猜。先给我检查，不开始开发。",
      "Turn our agreed idea into a requirements document: users, problem, main flow, first-version features, excluded features, and a check for each feature. List unresolved questions separately rather than guessing. Let me review it before development."
    ],
    "modules": [
      "和 Agent 沟通 · 项目分类",
      "Talking to agents · Project types"
    ],
    "moduleIds": [
      "agent"
    ],
    "color": "blue"
  },
  {
    "id": "stack",
    "title": [
      "让 AI 推荐技术选型",
      "Let AI recommend the stack"
    ],
    "term": "Tech Stack",
    "question": [
      "先确认产品形式，再让 AI 解释适合的技术组合。",
      "Confirm the product type, then ask AI to explain a suitable technology stack."
    ],
    "output": [
      "选型说明：目标平台、技术组合、费用、限制与选择理由",
      "A stack decision: platform, tools, costs, limitations, and reasons"
    ],
    "actions": [
      [
        "让 AI 判断适合网站、小程序、手机 App 还是桌面 App，解释取舍。",
        "Have AI compare a website, mini program, mobile app, and desktop app for the requirements."
      ],
      [
        "提供预算、现有设备和数据保存需求，让 AI 推荐一套主方案和必要的替代方案。",
        "Provide budget, available devices, and storage needs. Ask AI for a primary option and alternatives only where useful."
      ],
      [
        "让 AI 说明前端、后端和发布服务各自负责什么；确认后记录选型，避免开发中随意更换。",
        "Have AI explain the frontend, backend, and hosting roles. Record the agreed choices to avoid arbitrary changes during development."
      ]
    ],
    "problem": [
      "AI 每次推荐的技术都不同。",
      "AI recommends different technologies each time."
    ],
    "answer": [
      "让 AI 对照同一份需求、预算和目标设备解释差异。只为明确的需求变化调整方案，并同步更新开发计划。",
      "Ask AI to compare options against the same requirements, budget, and target devices. Change the stack for a concrete reason and update the plan accordingly."
    ],
    "prompt": [
      "请根据需求文档推荐产品形式和技术栈。先确认预算、目标设备、是否登录、是否保存或共享资料。解释每项技术负责什么、预计费用、主要限制和替代选择。不要堆技术名字，不要默认必须有后端。确认后保存选型说明，供开发计划引用。",
      "Recommend a product type and stack from the requirements. First clarify budget, devices, sign-in, storage, and sharing. Explain each technology’s role, estimated costs, limitations, and alternatives. Avoid jargon lists and do not assume a backend is required. Save the agreed choices for the development plan."
    ],
    "modules": [
      "项目分类 · 技术栈选择 · 后端",
      "Project types · Choosing a stack · Backend"
    ],
    "moduleIds": [
      "types",
      "stack"
    ],
    "color": "violet"
  },
  {
    "id": "plan",
    "title": [
      "让 AI 制定可跟踪的开发计划",
      "Let AI create a trackable plan"
    ],
    "term": "Development Plan",
    "question": [
      "让 AI 把需求和选型拆成任务，完成一项就更新一项。",
      "Have AI turn requirements and technology choices into tasks and update each task as it progresses."
    ],
    "output": [
      "开发计划：任务编号、先后依赖、完成标准、当前状态和验证记录",
      "A plan with task IDs, dependencies, acceptance criteria, status, and verification records"
    ],
    "actions": [
      [
        "让 AI 根据已确认的需求和技术选型，拆出可以逐项检查的任务。",
        "Ask AI to split the agreed requirements and stack into inspectable tasks."
      ],
      [
        "让 AI 为每项任务标记待开始、进行中、待验证或已完成，并记录阻碍。",
        "Have AI label tasks as not started, in progress, awaiting verification, or done, and record blockers."
      ],
      [
        "要求 AI 每次交付同步更新计划，附上实际检查结果；未验证不能标记完成。",
        "Require AI to update the plan with actual checks after each delivery. Unverified work cannot be marked done."
      ]
    ],
    "problem": [
      "AI 说做完了，却不知道哪些能用、哪些还没做。",
      "AI says it is done, but the actual progress is unclear."
    ],
    "answer": [
      "让 AI 按任务编号报告结果，区分已实现和已验证；把失败、未检查项及下一步留在同一份计划里。",
      "Ask AI to report by task ID, separating implementation from verification. Keep failures, unchecked work, and the next step in the same plan."
    ],
    "prompt": [
      "请依据已确认的需求文档和技术选型制定开发计划。每项任务包含编号、依赖、交付物、检查方法和状态。状态使用待开始、进行中、待验证、已完成；未通过检查不能标为已完成。每次制作后更新状态和验证记录，遇到阻碍记录原因与下一步。先给我确认任务顺序，再开始。",
      "Create a development plan from the agreed requirements and technology choices. Give each task an ID, dependencies, deliverable, check, and status. Use not started, in progress, awaiting verification, and done. Do not mark unchecked work done. Update status and evidence after each delivery, and record blockers and next steps. Let me confirm the order before starting."
    ],
    "modules": [
      "技术栈选择 · 后端 · 和 Agent 沟通",
      "Choosing a stack · Backend · Talking to agents"
    ],
    "moduleIds": [
      "stack",
      "agent"
    ],
    "color": "violet"
  },
  {
    "id": "ui",
    "title": [
      "让 AI 制作界面与组件",
      "Let AI build the interface"
    ],
    "term": "UI / Interaction",
    "question": [
      "把喜欢的样子交给 AI，先看效果再调整。",
      "Show AI a preferred reference, then review and adjust its preview."
    ],
    "output": [
      "页面草图和交互说明",
      "Page sketches and interaction notes"
    ],
    "actions": [
      [
        "给 AI 一张参考图，或从组件示例中选一个喜欢的效果。",
        "Give AI a reference image or choose a suitable component example."
      ],
      [
        "让 AI 先做一个能看的页面，指出哪里喜欢、哪里不对。",
        "Ask AI for a page preview. Point out what works and what feels wrong."
      ],
      [
        "让 AI 补齐等待、空内容和出错时的显示，再引导检查。",
        "Ask AI to add loading, empty, and error states and provide steps for checking them."
      ]
    ],
    "problem": [
      "我知道想要什么样子，却不知道怎么告诉 AI。",
      "I can picture it, but don’t know what to tell AI."
    ],
    "answer": [
      "把截图圈出具体区域，补充操作前后会发生什么。例如 Tabs（标签页）：点击不同标题，在同一块区域切换内容，不跳到新页面。",
      "Mark the relevant area in a screenshot and describe before-and-after behavior. For example, tabs switch content in one area when a label is clicked, without opening a new page."
    ],
    "prompt": [
      "这里需要 Tabs（标签页）：顶部显示“介绍、价格、常见问题”，默认显示介绍。点击标题只切换下方内容，不打开新页面；当前标题有清楚的选中状态。手机上也能使用，键盘能切换。请先做这个局部让我检查，再应用到完整页面。",
      "Add tabs labeled Overview, Pricing, and FAQ. Show Overview initially. Clicking a tab should change the content below without opening a new page, with a clear selected state. Support phones and keyboard navigation. Show this component for review before adding it to the whole page."
    ],
    "modules": [
      "前端与 UI → 组件词典（原 HTML 分支，待迁移）",
      "Frontend & UI → Component dictionary (legacy branch, migration pending)"
    ],
    "moduleIds": [
      "ui"
    ],
    "color": "amber"
  },
  {
    "id": "backend",
    "title": [
      "让 AI 接好数据与权限",
      "Let AI connect data and access"
    ],
    "term": "Backend / Data / Auth",
    "question": [
      "让 AI 处理保存和访问规则，再实际检查资料是否安全可用。",
      "Let AI implement storage and access rules, then check that information is usable and protected."
    ],
    "output": [
      "已验证的保存、读取与访问规则；不需要后端时记录原因",
      "Verified storage, retrieval, and access rules, or a documented decision that no backend is needed"
    ],
    "actions": [
      [
        "让 AI 按选型说明确认哪些资料只存在本机，哪些需要共享或登录。",
        "Ask AI to identify local data, shared data, and sign-in requirements from the stack decision."
      ],
      [
        "让 AI 接好保存与读取，并说明哪些内容公开、哪些仅本人或管理员可见。",
        "Have AI implement saving and retrieval and explain public, personal, and administrator access."
      ],
      [
        "让 AI 使用测试资料检查关闭重开、保存失败和不同账号访问；涉及真实资料前先确认结果。",
        "Have AI test reopening, save failures, and access from different accounts using sample data before using real information."
      ]
    ],
    "problem": [
      "页面看起来成功了，资料却没有保存。",
      "The page shows success, but the information is not saved."
    ],
    "answer": [
      "让 AI 展示实际保存位置，并重新打开或换账号检查读取结果。界面上的成功提示不能代替真实保存验证。",
      "Ask AI to show where data was saved and verify retrieval after reopening or switching accounts. A success message alone is not proof of storage."
    ],
    "prompt": [
      "请按需求和选型说明实现数据保存与访问规则；不需要后端时解释原因，不额外添加服务。先使用测试资料，验证保存后重开仍可读取、保存失败有提示、不同账号不能越权访问。逐项记录结果，暂不导入真实私人资料。",
      "Implement storage and access according to the requirements and stack decision. If no backend is needed, explain why without adding a service. Use sample data to verify persistence after reopening, clear save failures, and account access boundaries. Record each result before importing real private data."
    ],
    "modules": [
      "后端 · 前端与 UI · 测试",
      "Backend · Frontend & UI · Testing"
    ],
    "moduleIds": [
      "backend"
    ],
    "color": "amber"
  },
  {
    "id": "build",
    "title": [
      "让 AI 按计划开发",
      "Let AI follow the build plan"
    ],
    "term": "Implementation",
    "question": [
      "让 AI 按计划制作，每做好一小步就供试用。",
      "Have AI follow the plan and provide a version to try after each small step."
    ],
    "output": [
      "一个能运行、能亲手操作的版本",
      "A working version ready for a trial"
    ],
    "actions": [
      [
        "让 AI 从开发文档中选出下一项任务并完成。",
        "Have AI pick and complete the next task from the development plan."
      ],
      [
        "按 AI 给的打开方式试用，把不符合想法的地方告诉它。",
        "Try the result using AI’s instructions and tell it what does not match the idea."
      ],
      [
        "让 AI 保存可恢复的版本，再继续下一项。",
        "Ask AI to save a recoverable version before continuing."
      ]
    ],
    "problem": [
      "昨天还能用，今天改完却坏了。",
      "It worked yesterday, but today’s change broke it."
    ],
    "answer": [
      "让 AI 比较上一个可用版本和本次改动，先定位受影响的操作。恢复前说明会丢掉哪些改动，不要盲目覆盖。",
      "Ask AI to compare the last working version with the changes and identify the affected flow. Before restoring, check which changes would be lost."
    ],
    "prompt": [
      "请读取开发文档，告诉我接下来应该做哪一项，并完成这一项。保持已完成的功能不变。完成后带我打开试用，说明点哪里、应该看到什么。等我检查后保存可恢复的版本，再继续。",
      "Read the development plan, identify the next task, and complete it without changing working features. Show me how to open and try it, what to click, and what to expect. After I check it, save a recoverable version before continuing."
    ],
    "modules": [
      "Web / 手机 / 桌面开发 · 和 Agent 沟通",
      "Web / Mobile / Desktop development · Talking to agents"
    ],
    "moduleIds": [
      "web",
      "mobile",
      "desktop"
    ],
    "color": "amber"
  },
  {
    "id": "test",
    "title": [
      "让 AI 测试并修复",
      "Let AI test and fix issues"
    ],
    "term": "Testing",
    "question": [
      "AI 先检查，再引导实际用一遍；哪里不对就告诉它。",
      "Let AI check first, then provide steps for a trial. Tell it what goes wrong."
    ],
    "output": [
      "检查结果和待修复问题清单",
      "Test results and a list of issues"
    ],
    "actions": [
      [
        "让 AI 根据需求文档检查功能，并列出没检查到的部分。",
        "Ask AI to check features against the requirements and list anything untested."
      ],
      [
        "让 AI 给出试用步骤和预期结果，再逐项操作。",
        "Have AI explain what to click and what to expect, then try it."
      ],
      [
        "遇到问题，把现象或截图交给 AI，让它排查、修复并引导复查。",
        "Give AI the symptom or a screenshot so it can investigate, fix it, and guide a recheck."
      ]
    ],
    "problem": [
      "AI 说测试通过，我点开还是有问题。",
      "AI says tests passed, but I still see a problem."
    ],
    "answer": [
      "测试通过只说明它检查过的部分。把实际失败的步骤交给 AI，让它修复后重新走同一条流程。",
      "A passed test only covers what was checked. Give AI the failing steps, then repeat that exact flow after the fix."
    ],
    "prompt": [
      "请先按需求文档检查当前版本，明确哪些实际检查过、哪些还没检查。然后带我一步步试用：每次告诉我点哪里、应该看到什么，等我反馈。发现问题后帮我排查和修复，再带我重试。",
      "Check this version against the requirements and state what was actually tested and what was not. Then guide me through trying it: tell me what to click and what to expect, and wait for my feedback. Investigate and fix any problems, then help me try again."
    ],
    "modules": [
      "测试 · 后端 · 前端与 UI",
      "Testing · Backend · Frontend & UI"
    ],
    "moduleIds": [
      "test"
    ],
    "color": "green"
  },
  {
    "id": "launch",
    "title": [
      "让 AI 协助部署上线",
      "Let AI assist with deployment"
    ],
    "term": "Deployment / Release",
    "question": [
      "让 AI 执行发布步骤，账号验证等人工步骤另附操作说明。",
      "Let AI handle the release steps it can, and explain the remaining manual steps."
    ],
    "output": [
      "可访问的网址或可安装的发布版本",
      "A usable public link or installable release"
    ],
    "actions": [
      [
        "让 AI 推荐发布方式，说明费用与所需账号。",
        "Ask AI to recommend a release method and explain costs and required accounts."
      ],
      [
        "确认目标和费用后，让 AI 完成能执行的步骤；账号验证由使用者处理。",
        "After confirming the destination and cost, let AI do what it can. Account verification requires manual action."
      ],
      [
        "让 AI 检查正式入口，再请别人实际打开试一次。",
        "Have AI check the live entry point, then ask someone else to try it."
      ]
    ],
    "problem": [
      "本机可以用，发给别人却打不开。",
      "It works for me, but other people cannot open it."
    ],
    "answer": [
      "确认分享的是正式网址或安装包，而不是只在本机可用的预览地址。记录对方设备和具体提示，再检查。",
      "Check for a released URL or installer rather than a local preview address. Record the other person’s device and exact message."
    ],
    "prompt": [
      "请根据我的产品类型列出发布步骤、费用和所需账号。先检查发布包不含私人资料，并准备恢复到上一版的方法。发布前让我确认目标和费用；发布后从正式入口验证主要流程，区分已完成和仍需我操作的部分。",
      "List release steps, costs, and accounts for this product type. Check for private data in the release and prepare a way back to the previous version. Let me confirm the destination and costs before release. Verify the main flow through the live entry point and state what still needs my action."
    ],
    "modules": [
      "部署上线 · 项目对应平台",
      "Deployment · The target platform"
    ],
    "moduleIds": [
      "launch"
    ],
    "color": "green"
  },
  {
    "id": "maintain",
    "title": [
      "让 AI 协助维护迭代",
      "Let AI assist with maintenance"
    ],
    "term": "Maintenance",
    "question": [
      "把使用反馈交给 AI，排查问题并安排下一版。",
      "Give AI feedback so it can help fix problems and plan the next version."
    ],
    "output": [
      "维护清单和下一版计划",
      "A maintenance checklist and next-version plan"
    ],
    "actions": [
      [
        "让 AI 整理费用、续期和备份清单，需要人工操作的步骤逐项说明。",
        "Ask AI to organize costs, renewals, and backups and explain required manual actions."
      ],
      [
        "把用户反馈发给 AI，让它区分故障和新想法，建议先处理什么。",
        "Send feedback to AI so it can separate bugs from ideas and suggest priorities."
      ],
      [
        "确认改动后，让 AI 备份、修改并检查，再由使用者试用确认。",
        "After agreeing on changes, have AI back up, update, and check the product, then confirm it through an actual trial."
      ]
    ],
    "problem": [
      "每次加新功能，旧功能就出问题。",
      "New features keep breaking existing ones."
    ],
    "answer": [
      "保留一份主要操作检查表，每次更新都重复检查。较大的新需求重新回到需求节点，确认范围后再做。",
      "Keep a core-flow checklist and repeat it with every update. Return larger changes to the requirements stage before building."
    ],
    "prompt": [
      "请为当前产品整理维护清单：服务与费用、续期时间、备份和恢复办法、每次更新必须检查的操作。把用户反馈分成故障和新需求；先处理故障，新需求回到需求文档确认后再安排。",
      "Create a maintenance checklist: services and costs, renewals, backups and recovery, and checks required for each update. Separate bug reports from new requests. Fix problems first and confirm new requests in the requirements before scheduling them."
    ],
    "modules": [
      "运维 · 测试 · 需求文档",
      "Maintenance · Testing · Requirements"
    ],
    "moduleIds": [
      "ops"
    ],
    "color": "green"
  }
];
