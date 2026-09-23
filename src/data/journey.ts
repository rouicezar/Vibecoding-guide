import type {Copy} from './site';
export interface Stage {id:string; parent?:string; title:Copy; term:string; question:Copy; output:Copy; actions:Copy[]; problem:Copy; answer:Copy; promptTitle:Copy; prompt:Copy; modules:Copy; moduleIds:string[]; color:string;}
export const journey:Stage[] = [
  {
    "id": "idea",
    "title": [
      "有一个想法",
      "Have an idea"
    ],
    "term": "Idea",
    "question": [
      "先把脑海里的想法记下来，不用写成专业文档。",
      "Capture the idea in plain language, without making it a formal document."
    ],
    "output": [
      "一份自己的想法草稿，供下一步交给 AI",
      "A personal idea draft, ready to share with AI in the next step"
    ],
    "actions": [
      [
        "复制下方填写模板到笔记中，把示例换成实际情况。",
        "Copy the worksheet into a note and replace the examples with actual details."
      ],
      [
        "尽量补充背景、给谁用、现有做法和最想解决的问题。",
        "Add context, the intended audience, the current process, and the main problem."
      ],
      [
        "不确定的部分写“尚未确定”；保留原本的想法，不必提前选技术。",
        "Mark unknowns as undecided. Keep the original idea without choosing technologies yet."
      ]
    ],
    "problem": [
      "有些地方还没想清楚，是否需要全部填完？",
      "Does every field need a complete answer?"
    ],
    "answer": [
      "不必。先记录已经知道的情况，具体例子比专业名词更有用。空缺可以保留，下一步交给 AI 提问补全。",
      "No. Record what is already known; concrete examples are more useful than technical terms. Leave gaps for clarification with AI in the next step."
    ],
    "prompt": [
      "我的想法草稿\n\n【背景】我经营一家小型烘焙工作室，现在通过聊天软件接蛋糕预约。\n【给谁用】想预约蛋糕的顾客，以及负责确认订单的店主。\n【现在怎么做】顾客发消息说明日期和口味，店主手动登记，再回复确认。\n【最想解决的问题】消息容易遗漏，经常需要反复询问时间、口味和联系方式。\n【脑海中的产品】一个手机上能打开的预约页面，顾客填写信息，店主集中查看。\n【一次使用的例子】顾客预约周六的生日蛋糕，填写日期、口味和联系方式，等待店主确认。\n【希望改善的结果】减少重复沟通和漏单，顾客能知道预约是否已被确认。\n【第一版最重要的事】提交预约、店主确认、查看预约结果。\n【暂时不做】在线付款、会员积分、多门店管理。\n【已有条件和限制】一台电脑；每月预算约 100 元；没有开发经验。\n【参考或喜欢的效果】尚未确定，可以补充截图、网址或文字描述。\n【还没想清楚】是否需要登录、怎样提醒店主、顾客如何修改预约。",
      "My idea draft\n\n[Background] I run a small bakery and take cake reservations through chat.\n[Audience] Customers reserving cakes and the owner confirming orders.\n[Current process] Customers send a date and flavor; the owner records details and replies manually.\n[Main problem] Messages get missed and dates, flavors, and contact details require repeated questions.\n[Product in mind] A page that opens on a phone, with a form for customers and one place for the owner to review requests.\n[Example use] A customer requests a birthday cake for Saturday, supplies a date, flavor, and contact details, then waits for confirmation.\n[Desired improvement] Less repeated messaging and fewer missed orders, with clear confirmation status.\n[First-version priorities] Submit a reservation, owner confirmation, and status lookup.\n[Not needed yet] Payments, loyalty points, and multiple stores.\n[Resources and limits] One computer, about $15 monthly, and no development experience.\n[References or preferred appearance] Undecided; screenshots, links, or a description can be added.\n[Open questions] Sign-in, owner notifications, and changes to existing reservations."
    ],
    "modules": [
      "项目分类",
      "Project types"
    ],
    "moduleIds": [
      "types"
    ],
    "color": "blue",
    "promptTitle": [
      "我的想法草稿 · 填写模板",
      "My idea draft · Worksheet"
    ]
  },
  {
    "id": "tell",
    "title": [
      "准备 AI 工具并开始对话",
      "Prepare an AI tool and start"
    ],
    "term": "Conversation",
    "question": [
      "先准备能对话的 AI 工具，再交接想法草稿。",
      "Prepare an AI conversation tool, then share the idea draft."
    ],
    "output": [
      "可用的 AI 对话工具，以及已经交接的想法草稿",
      "A working AI conversation tool and a shared idea draft"
    ],
    "actions": [
      [
        "已有能正常对话的 AI 工具时直接使用；尚未准备时先完成账号登录，确认费用与使用限制。",
        "Use an existing working AI tool, or complete sign-in and check costs and limits first."
      ],
      [
        "当前只需要对话能力。后续制作需要可读取项目、修改文件和运行检查的 Agent；先确认实际能力，不必一开始购买多种工具。",
        "Conversation is sufficient now. Building later requires an agent able to read files, edit them, and run checks. Verify capabilities rather than buying multiple tools upfront."
      ],
      [
        "将上一站草稿粘贴到下方模板，发送后检查 AI 的复述，再开始提问补全。",
        "Paste the previous worksheet into the template, send it, and review AI’s summary before clarification."
      ]
    ],
    "problem": [
      "还没有 AI 工具，或者只有聊天功能。",
      "No AI tool is ready, or only chat is available."
    ],
    "answer": [
      "先选择可正常访问、支持文字对话的工具并检查账号费用。聊天工具可以完成前期讨论；进入环境准备时再核对是否能操作项目。安装和账号验证按官方界面完成，不把密码粘贴到对话里。",
      "Start with an accessible text-chat tool and check account costs. Chat is enough for early discussion; verify project-execution capabilities at environment setup. Use official setup and sign-in screens without pasting passwords into chat."
    ],
    "prompt": [
      "我不懂开发，下面是我自己整理的初步想法。请先理解，不直接开发。\n\n【想法草稿】\n在这里粘贴上一站填写的完整草稿，替换这一行。\n【草稿结束】\n\n请按以下方式开始：\n1. 先检查是否提供了实际草稿；如果仍是占位文字，请提醒补充，不代替我编造项目。\n2. 用两三句话复述产品给谁用、希望解决什么问题，区分原文事实和推测。\n3. 先问“这份理解是否准确”，等待我确认或纠正。\n4. 理解确认后再提问补全，一次只问一个最影响方案的问题。\n5. 我回答“不知道”时，给出 2—3 个贴近场景的例子，解释差别并提供建议。\n6. 将已确认内容与待确认问题分开记录。不要求我先写需求文档，也不提前选技术或写代码。\n现在先检查草稿并复述理解。",
      "I have no development experience. The following is my own rough idea. Understand it first; do not build yet.\n\n[Idea draft]\nPaste the complete worksheet from the previous step here, replacing this line.\n[End of draft]\n\n1. Check that an actual draft is present. If only the placeholder remains, request the draft rather than inventing a project.\n2. Restate the audience and problem in two or three sentences, distinguishing stated facts from assumptions.\n3. Ask whether that understanding is accurate, then wait for confirmation or corrections.\n4. After confirmation, clarify one high-impact question at a time.\n5. If I answer “I don’t know,” offer two or three realistic examples with differences and a recommendation.\n6. Keep confirmed decisions separate from open questions. Do not ask me to write requirements first, choose technologies prematurely, or start coding.\nBegin by checking the draft and summarizing the understanding."
    ],
    "modules": [
      "和 Agent 沟通",
      "Talking to agents"
    ],
    "moduleIds": [
      "agent"
    ],
    "color": "blue",
    "promptTitle": [
      "把想法草稿交给 AI · 沟通提示词",
      "Share the idea draft · Conversation prompt"
    ]
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
      "请基于以下材料继续提问，帮助缩小并完善第一版，不开始开发。\n\n【目前想法】烘焙工作室预约页面，顾客提交预约，店主确认。\n【已确认】先做手机浏览器页面；不在线付款；顾客联系方式不能公开。\n【尚未确定】预约是否需要审核、重复提交怎么处理、通知采用什么方式。\n【典型场景】顾客预约周六的生日蛋糕，店主需要检查当天能否接单。\n【担心的问题】顾客以为提交就代表预约成功，但店主还没有确认。\n\n请一次只问一个问题，优先处理会影响主要流程的歧义。\n每轮先简短确认上一个回答，再追问。回答“不知道”时，提供具体选项及取舍。\n不要主动增加会员、积分、营销或复杂管理功能。\n提问结束后输出：主要流程、第一版必需功能、暂不做的功能、异常情况和待确认项。\n请特别区分“已提交”和“已确认”，最终等我确认再进入文档阶段。",
      "Continue clarifying the first version from the following material. Do not build yet.\n\n[Idea] A bakery reservation page where customers submit requests and the owner confirms them.\n[Agreed] Start in a phone browser; no payments; contact details stay private.\n[Unresolved] Approval, duplicate submissions, and notification methods.\n[Scenario] A customer requests a birthday cake for Saturday; the owner must check capacity.\n[Concern] A customer may mistake submission for confirmation.\n\nAsk one question at a time, prioritizing ambiguities affecting the main flow.\nBriefly acknowledge each answer before the next question. Offer concrete choices and tradeoffs when I am unsure.\nDo not add memberships, points, marketing, or complex administration.\nAt the end, provide the main flow, essential features, exclusions, failure cases, and open questions.\nDistinguish submitted from confirmed. Wait for my approval before documenting requirements."
    ],
    "modules": [
      "和 Agent 沟通 · 项目分类",
      "Talking to agents · Project types"
    ],
    "moduleIds": [
      "agent",
      "types"
    ],
    "color": "blue",
    "promptTitle": [
      "通过提问补全第一版",
      "Clarify the first version"
    ]
  },
  {
    "id": "scope",
    "title": [
      "确认第一版范围",
      "Confirm the first version"
    ],
    "term": "Scope / MVP",
    "question": [
      "先确认这次只做什么，再让 AI 写需求文档。",
      "Agree on what this version includes before documenting it."
    ],
    "output": [
      "人工确认的必做项、排除项、成功标准与待定项",
      "Approved essentials, exclusions, success criteria, and open questions"
    ],
    "actions": [
      [
        "让 AI 根据问答提出最小可用流程，说明删掉每项功能会有什么影响。",
        "Ask AI for the smallest useful flow and the effect of leaving features out."
      ],
      [
        "实际选择必须保留的功能，明确暂时不做的内容；不必一次确认所有未来计划。",
        "Choose essential features and explicit exclusions without settling every future feature."
      ],
      [
        "确认成功标准与预算边界，把结果作为需求文档的输入。",
        "Agree on observable success criteria and budget limits as input to requirements."
      ]
    ],
    "problem": [
      "每个建议都想加，第一版迟迟做不完。",
      "Every suggestion seems useful and the first version never finishes."
    ],
    "answer": [
      "围绕一条真实使用流程取舍；非必需功能进入后续清单。确认只代表本轮范围，不代表以后不能增加。",
      "Prioritize one real user flow and keep extras in a later list. Approval defines this iteration, not every future version."
    ],
    "promptTitle": [
      "确认第一版范围",
      "Confirm the first version"
    ],
    "prompt": [
      "请根据已确认问答提出第一版范围，等待人工确认，不开始开发。\n\n【输入】粘贴上一站问答与待确认问题；缺失时先索取。\n【项目示例】烘焙预约页面。\n【核心流程示例】顾客提交 → 店主确认 → 顾客查看结果。\n【预算边界示例】每月 100 元以内。\n【暂不做示例】付款、积分、多门店。\n\n请分别列出必须做、可以延后、明确不做和仍需决定的内容。\n每个必做项解释与核心流程的关系，给出可实际检查的成功标准。\n指出会影响费用、资料安全或发布条件的选择，一次询问一个阻塞问题。\n提出建议后等待我明确确认，不把示例或沉默当作批准。\n确认后整理范围记录，交给下一站生成需求文档。",
      "Propose the first-version scope from the confirmed conversation. Wait for human approval; do not build.\n\n[Input] Paste the previous Q&A and unresolved questions. Request missing material.\n[Example] A bakery reservation page.\n[Core flow] Customer submits → owner confirms → customer checks status.\n[Budget] About $15 monthly.\n[Exclusions] Payments, points, multiple stores.\n\nList essentials, deferrable features, exclusions, and unresolved choices.\nExplain each essential feature’s role and give an observable success criterion.\nIdentify cost, privacy, or release implications; ask one blocking question at a time.\nWait for explicit agreement. Examples and silence are not approval.\nRecord the confirmed scope for requirements documentation."
    ],
    "moduleIds": [
      "agent",
      "types"
    ],
    "modules": [
      "相关板块",
      "Related modules"
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
        "先读取已确认的第一版范围，未经确认的想法只记入待定项。",
        "Start from the approved first-version scope; keep unapproved ideas in open questions."
      ],
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
      "请将已确认的讨论整理为需求文档，不补造事实、不写代码。\n\n【输入材料】粘贴本次项目的已确认问答记录；如果未提供，先要求补充。\n【项目示例】烘焙工作室预约页。\n【已确认范围示例】顾客提交日期、口味和联系方式；店主查看并确认；顾客查看确认结果。\n【排除项示例】在线付款、会员积分、多门店管理。\n【隐私要求示例】联系方式仅店主可见，不出现在公开列表。\n\n输入材料优先于上述示例；示例不能自动视为已确认需求。\n文档请包含：\n- 项目背景、使用者、待解决的问题和目标。\n- 从打开页面到完成预约的操作流程。\n- 按编号排列的功能、异常情况和可亲手检查的完成标准。\n- 第一版明确不做的内容。\n- 数据、权限与隐私要求。\n- 未确认问题及其影响。\n\n先指出材料中的冲突或缺口，一次询问一个阻塞问题。\n确认后再保存为 requirements.md；没有文件权限则输出完整 Markdown，并说明未保存。",
      "Turn the confirmed discussion into requirements. Do not invent facts or write code.\n\n[Input] Paste the confirmed Q&A record. Request it first if missing.\n[Example project] A bakery reservation page.\n[Example scope] Submit a date, flavor, and contact details; owner review and confirmation; customer status lookup.\n[Example exclusions] Payments, loyalty points, and multiple stores.\n[Example privacy rule] Only the owner can see contact details.\n\nActual confirmed input takes precedence. Examples are not automatically approved requirements.\nInclude background, audience, problem, goals, the complete flow, numbered features, failure cases, observable acceptance checks, exclusions, data/access rules, and open questions.\nIdentify conflicts and gaps first, asking one blocking question at a time.\nAfter confirmation, save requirements.md. Without file access, output complete Markdown and explicitly state it was not saved."
    ],
    "modules": [
      "和 Agent 沟通 · 项目分类",
      "Talking to agents · Project types"
    ],
    "moduleIds": [
      "agent"
    ],
    "color": "blue",
    "promptTitle": [
      "从确认记录生成需求文档",
      "Produce requirements from agreed decisions"
    ]
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
      "请依据已确认需求进行技术选型，先解释，再等待确认，不开始安装或开发。\n\n【输入】已确认的 requirements.md 或粘贴的需求全文；缺失时先索取。\n【目标形式示例】手机和电脑浏览器访问的网站。\n【设备示例】一台普通笔记本电脑。\n【预算示例】初期每月 100 元以内，优先低维护成本。\n【数据示例】需要保存预约，店主查看顾客联系方式。\n【发布地区示例】主要供本地顾客使用，地区待确认。\n\n请检查上述条件与需求是否一致。缺少关键条件时一次问一个问题。\n推荐一套主方案；只有存在明显取舍时才给一个备选。\n用表格解释：每项技术负责什么、为什么需要、费用与免费限制、维护负担、替换难度。\n分别判断前端、后端、数据保存、登录和部署是否需要，不默认全部采用复杂方案。\n费用或平台规则无法核实时标记“待核实”，不编造最新价格。\n确认后整理 technology-decisions.md，列出理由和约束，交给开发计划引用。",
      "Recommend technologies from the agreed requirements. Explain first and wait for confirmation before installing or building.\n\n[Input] requirements.md or its full text. Request it if missing.\n[Example format] A website for phone and desktop browsers.\n[Example equipment] One ordinary laptop.\n[Example budget] Around $15 monthly initially, with low upkeep.\n[Example data] Persist reservations; only the owner sees contact details.\n[Example audience location] Local customers; exact region remains unconfirmed.\n\nCheck consistency and ask one blocking question at a time.\nRecommend one primary stack and an alternative only for a meaningful tradeoff.\nExplain each part’s role, necessity, cost/free-tier limits, upkeep, and replacement difficulty in a table.\nAssess frontend, backend, storage, sign-in, and deployment separately; avoid unnecessary services.\nMark unverified prices or platform rules as unverified.\nAfter agreement, produce technology-decisions.md with reasons and constraints for the development plan."
    ],
    "modules": [
      "项目分类 · 技术栈选择 · 后端",
      "Project types · Choosing a stack · Backend"
    ],
    "moduleIds": [
      "types",
      "stack"
    ],
    "color": "violet",
    "promptTitle": [
      "让 AI 解释并推荐技术组合",
      "Compare and recommend technologies"
    ]
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
      "请读取已确认的需求和技术选型，生成可持续更新的开发计划，暂不开始制作。\n\n【输入】requirements.md、technology-decisions.md；未提供或无法读取时先索取。\n【项目示例】烘焙工作室预约站。\n【优先流程示例】提交预约 → 店主查看 → 确认预约 → 顾客看到结果。\n【交付偏好示例】每次交付一个可以打开、可以操作的小版本。\n\n将任务写入 development-plan.md，每项必须包含：\n任务编号 / 对应需求编号 / 前置依赖 / 交付物 / 检查步骤 / 预期结果 / 状态 / 验证记录。\n状态只使用：待开始、进行中、待验证、已完成、受阻。\n界面、数据与权限、目标平台实现、测试、发布和维护准备均需覆盖；不需要的部分说明原因。\n任务应足够小，不能把“完成整个网站”作为一个任务。\n只有完成实际检查才能标记已完成，代码已写但未验证应标记待验证。\n后续每轮执行更新同一份计划，记录阻碍和下一步；需求变化先同步文档再调整任务。\n先展示任务顺序、依赖和第一个可交付结果，等待确认。",
      "Read the agreed requirements and stack decisions and create a plan that can be maintained throughout development. Do not build yet.\n\n[Inputs] requirements.md and technology-decisions.md. Request them if unavailable.\n[Example project] A bakery reservation website.\n[Priority flow] Submit → owner review → confirm → customer sees the result.\n[Delivery preference] One small, usable version at a time.\n\nIn development-plan.md, give every task an ID, requirement reference, dependencies, deliverable, check steps, expected result, status, and evidence.\nAllowed statuses: not started, in progress, awaiting verification, done, blocked.\nCover interface, data/access, target-platform implementation, testing, release, and upkeep preparation. Explain anything unnecessary.\nKeep tasks small; “finish the website” is not one task.\nMark done only after actual checks. Written but unchecked work is awaiting verification.\nUpdate the same plan after each work session, including blockers and next steps. Update requirements before changing scope.\nShow the task order, dependencies, and first deliverable for confirmation."
    ],
    "modules": [
      "技术栈选择 · 后端 · 和 Agent 沟通",
      "Choosing a stack · Backend · Talking to agents"
    ],
    "moduleIds": [
      "stack",
      "agent"
    ],
    "color": "violet",
    "promptTitle": [
      "生成可跟踪的开发计划",
      "Create a trackable development plan"
    ]
  },
  {
    "id": "environment",
    "title": [
      "让 AI 准备项目环境",
      "Let AI prepare the workspace"
    ],
    "term": "Setup / Environment",
    "question": [
      "先确保项目能打开、能运行，再开始制作功能。",
      "Make the project open and run before building features."
    ],
    "output": [
      "能运行的初始项目、启动方法、账号待办与恢复基线",
      "A runnable starter, startup instructions, account prerequisites, and a recovery baseline"
    ],
    "actions": [
      [
        "让 Agent 检查现有目录、设备与所需工具，保留已有文件和未提交改动。",
        "Have the agent inspect the existing folder, device, and required tools while preserving files and pending changes."
      ],
      [
        "让 AI 按选型准备依赖和项目骨架；账号、费用和设备授权需要人工完成时给出具体步骤。",
        "Have AI prepare dependencies and the starter project; provide specific instructions for manual account, payment, and device permissions."
      ],
      [
        "实际打开初始页面或运行目标设备预览，记录启动方法并保存基线。",
        "Open the starter or target-device preview, record startup steps, and save a baseline."
      ]
    ],
    "problem": [
      "AI 给了一串命令，但不知道是否已经执行。",
      "AI lists commands without making it clear whether they ran."
    ],
    "answer": [
      "让 AI 分别列出已执行及其结果、尚未执行和需人工操作的步骤。运行失败留在本节点排查，不以生成文件代替环境可用。",
      "Require separate lists of executed actions with results, unexecuted actions, and manual steps. Resolve startup failures here rather than treating generated files as a working setup."
    ],
    "promptTitle": [
      "让 AI 准备项目环境",
      "Let AI prepare the workspace"
    ],
    "prompt": [
      "请按已确认技术选型准备开发环境，不开始业务功能开发。\n\n【输入】需求、技术选型、开发计划；缺失时先索取。\n【项目位置示例】使用当前指定项目文件夹，不覆盖已有资料。\n【设备示例】普通笔记本，具体系统先检测或询问。\n【目标示例】可在手机浏览器访问的网站预览。\n【限制】收费服务、账号验证和扩大设备权限先说明并等待人工处理。\n\n先检查实际文件操作和运行能力；只有聊天能力时明确说明，并给出连接 Agent 的准备清单。\n列出缺失工具及用途，按已确认方案安装依赖、生成骨架，保留无关文件。\n实际启动并检查最小页面；手机或桌面 App 则说明真机或目标系统测试条件，小程序说明平台工具条件。\n输出启动/停止方式、已执行结果、未完成账号事项和下一步。\n按项目约定保存可恢复基线，更新计划；无法运行则标记受阻，不宣称环境完成。",
      "Prepare the development environment from the agreed stack. Do not build product features yet.\n\n[Inputs] Requirements, stack decisions, and development plan; request missing material.\n[Folder] Use the specified project folder without overwriting existing work.\n[Device] An ordinary laptop; detect or ask for the operating system.\n[Target] A website preview for phone browsers.\n[Limits] Explain paid services, account verification, and expanded permissions before manual action.\n\nCheck actual file and execution capabilities. With chat only, state the limitation and explain agent setup prerequisites.\nIdentify missing tools, prepare dependencies and the starter, and preserve unrelated files.\nStart and check a minimal page. For apps, explain real-device/system testing; for mini programs, explain platform-tool prerequisites.\nReport start/stop steps, actual results, pending account tasks, and the next step.\nSave a recoverable baseline according to project conventions and update the plan. A startup failure remains blocked, not complete."
    ],
    "moduleIds": [
      "stack",
      "agent",
      "web",
      "mobile",
      "desktop"
    ],
    "modules": [
      "相关板块",
      "Related modules"
    ],
    "color": "violet"
  },
  {
    "id": "build",
    "title": [
      "让 AI 分步制作",
      "Let AI build in small steps"
    ],
    "term": "Implementation",
    "question": [
      "按任务依赖推进，界面、数据和完整流程在这里衔接。",
      "Follow task dependencies and connect the interface, data, and complete flow here."
    ],
    "output": [
      "一个能运行、能亲手操作的版本",
      "A working version ready for a trial"
    ],
    "actions": [
      [
        "按计划选择下一项可执行任务；界面、数据和完整流程按依赖交替推进，不必先把某一类全部做完。",
        "Choose the next ready task; interface, data, and flow work can alternate according to dependencies."
      ],
      [
        "通过下方分支进入具体做法。不需要后端时记录原因并跳过数据分支。",
        "Use the branches below for specific guidance. Skip data/backend work with a recorded reason when unnecessary."
      ],
      [
        "每次交付实际试用，保存可恢复版本、更新任务状态，再继续。",
        "Try each delivery, save a recoverable version, update task status, and continue."
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
      "请读取项目文档和当前代码，按计划完成下一项可执行任务。\n\n【输入】requirements.md、technology-decisions.md、development-plan.md 和当前项目。\n【本轮目标示例】把预约表单与已验证的保存功能接通。\n【需要保留】已经确认的页面样式、访问规则和其他可用功能。\n【不能擅自做】增加付款、改换技术栈、删除资料、公开发布。\n\n先报告当前状态、建议执行的任务编号及依赖是否满足。材料无法读取时先索取，不猜测进度。\n只完成本轮任务；遇到需求冲突或会改变范围的决定时先说明。\n完成后实际运行相关检查，提供打开方式和一条完整试用路径。\n按“改了什么 / 检查了什么 / 实际结果 / 剩余问题”汇报，区分实现与验证。\n同步更新开发计划。按项目约定保存可恢复的版本，不覆盖无关改动。\n没有执行权限或运行环境时说明限制，不能将建议冒充已执行。",
      "Read the project documents and current code, then complete the next executable task.\n\n[Inputs] requirements.md, technology-decisions.md, development-plan.md, and the current project.\n[Example goal] Connect the reservation form to verified storage.\n[Preserve] Agreed styles, access rules, and working features.\n[Do not add] Payments, a different stack, data deletion, or public release.\n\nReport the current state, proposed task ID, and dependency readiness. Request inaccessible material rather than guessing progress.\nComplete only this task and raise conflicts or scope-changing decisions.\nRun relevant checks and provide opening instructions plus a complete trial flow.\nReport changes, checks, actual results, and remaining issues, distinguishing implementation from verification.\nUpdate the plan and save a recoverable version according to project conventions without overwriting unrelated work.\nState execution limitations honestly; recommendations are not completed actions."
    ],
    "modules": [
      "Web / 手机 / 桌面开发 · 和 Agent 沟通",
      "Web / Mobile / Desktop development · Talking to agents"
    ],
    "moduleIds": [
      "web",
      "mobile",
      "desktop",
      "ui",
      "backend"
    ],
    "color": "amber",
    "promptTitle": [
      "按计划完成一个开发任务",
      "Complete one planned task"
    ]
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
      "请按已确认需求制作一个可操作的界面预览，先完成局部，不扩展功能。\n\n【当前任务示例】预约页面中的三个标签页。\n【内容示例】“活动介绍”“可预约日期”“常见问题”。\n【参考材料】附上参考截图，或粘贴组件词典中的名称和说明；未提供时不声称已查看。\n【布局示例】标题横向排列，下方共用一块内容区域。\n【操作示例】默认显示活动介绍；点击其他标题只切换下方内容，不打开新页面。\n【状态示例】选中标题加粗；加载时提示等待；没有日期时说明暂无名额；出错时提供重试。\n【风格示例】白底、深灰文字、鲜明小图标，不使用发光和大面积渐变。\n【适配示例】手机上不横向溢出；支持键盘操作并有清楚焦点。\n\n请先复述预期行为；不清楚的地方一次问一个问题。\n制作后给出打开方式、检查步骤和预期结果，说明预览数据与真实功能的区别。\n先确认这个局部，再整合到完整页面，并更新开发计划。",
      "Create an interactive interface preview from the agreed requirements. Start with one area and do not expand scope.\n\n[Example task] Three tabs on a reservation page.\n[Content] Overview, Available dates, and FAQ.\n[References] Attach a screenshot or paste a component dictionary entry. Do not claim to have viewed absent references.\n[Layout] Horizontal labels above one shared content area.\n[Behavior] Overview initially; selecting a label swaps content without opening a new page.\n[States] Bold selected label; loading notice; no-availability message; retry on failure.\n[Style] White background, dark gray text, bright small icons; no glow or large gradients.\n[Access] No page overflow on phones; keyboard support and visible focus.\n\nRestate the behavior and ask one clarifying question at a time if needed.\nProvide opening instructions, checks, and expected results. Distinguish sample data from real functionality.\nWait for review before integration and update the development plan."
    ],
    "modules": [
      "前端与 UI → 组件词典（原 HTML 分支，待迁移）",
      "Frontend & UI → Component dictionary (legacy branch, migration pending)"
    ],
    "moduleIds": [
      "ui"
    ],
    "color": "amber",
    "promptTitle": [
      "描述页面与组件效果",
      "Describe the interface and component behavior"
    ],
    "parent": "build"
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
      "请按需求、选型和开发计划实现数据与权限，先用测试资料。\n\n【输入】requirements.md、technology-decisions.md、development-plan.md；缺失时先补齐。\n【当前任务示例】保存预约，限制不同身份的访问。\n【数据示例】预约编号、日期、口味、联系方式、确认状态。\n【权限示例】顾客只能查看自己的预约；店主可查看和确认全部预约；公开页不得显示联系方式。\n【保留规则】取消、修改和删除规则尚未确认，先询问，不自行决定永久删除。\n\n先检查权限描述是否有遗漏，一次询问一个阻塞问题。\n按已选方案实现，不擅自更换服务或增加收费功能。\n使用虚构资料验证：保存后重开仍可读取、保存失败有提示、重复提交可处理、不同账号不能越权。\n说明每项检查如何进行及实际结果；界面出现成功提示不能替代保存验证。\n不在浏览器代码或日志中放入服务密钥，不导入真实顾客资料。\n完成后更新计划，未验证的权限规则保留待验证状态。",
      "Implement data and access from the requirements, stack decision, and development plan, using sample information first.\n\n[Inputs] requirements.md, technology-decisions.md, and development-plan.md. Request missing material.\n[Example task] Save reservations and enforce access boundaries.\n[Fields] Reservation ID, date, flavor, contact details, and confirmation status.\n[Access] Customers see only their reservations; the owner can review and confirm all; public pages never show contact details.\n[Retention] Cancellation, editing, and deletion rules are unresolved. Ask first; do not assume permanent deletion.\n\nClarify missing access rules one question at a time. Use the agreed stack without adding paid features.\nWith fictional data, check persistence after reopening, save failures, duplicate submissions, and cross-account access.\nRecord actual methods and results; a success message alone does not prove persistence.\nKeep service secrets out of browser code and logs. Do not import real customer data.\nUpdate the plan and leave unverified access rules awaiting verification."
    ],
    "modules": [
      "后端 · 前端与 UI · 测试",
      "Backend · Frontend & UI · Testing"
    ],
    "moduleIds": [
      "backend"
    ],
    "color": "amber",
    "promptTitle": [
      "实现保存与访问规则",
      "Implement storage and access rules"
    ],
    "parent": "build"
  },
  {
    "id": "flow",
    "title": [
      "接通完整使用流程",
      "Connect the complete flow"
    ],
    "term": "Integration",
    "question": [
      "从开始到完成目标，实际走通一次。",
      "Run the complete task from beginning to end."
    ],
    "output": [
      "目标设备上可重复完成的真实流程",
      "A repeatable real flow on the target device"
    ],
    "actions": [
      [
        "让 AI 接通界面操作、实际数据和权限反馈，替换仅供展示的假结果。",
        "Have AI connect interface actions, real data, and access feedback, replacing mock-only results."
      ],
      [
        "用测试资料从开始走到结束，再刷新或重开验证结果仍然成立。",
        "Follow the flow with sample data, then refresh or reopen to verify the result."
      ],
      [
        "按目标平台检查：网站用浏览器，小程序进入所选平台，App 在目标设备或系统上试用。",
        "Check the target platform: browser for websites, selected host for mini programs, and target devices/systems for apps."
      ]
    ],
    "problem": [
      "每个页面都能看，连起来却不能用。",
      "Each screen looks fine, but the full task fails."
    ],
    "answer": [
      "让 AI 从第一个失败步骤检查输入、保存、状态与权限，修复后重复整条流程，而不是只演示单个按钮。",
      "Have AI trace inputs, storage, status, and access at the first failing step, then repeat the entire flow after fixing it."
    ],
    "promptTitle": [
      "接通完整使用流程",
      "Connect the complete flow"
    ],
    "prompt": [
      "请接通并验证一条完整使用流程，不新增范围外功能。\n\n【输入】需求、计划和当前已实现的界面与数据功能。\n【流程示例】顾客提交预约 → 店主确认 → 顾客查看结果。\n【测试资料示例】虚构顾客与日期，不使用真实联系方式。\n【目标平台示例】手机和电脑浏览器。\n【预期】刷新后预约存在，状态更新正确，无权限账号无法读取私人资料。\n\n先检查前置任务；未具备时记录缺口，不伪造成功状态。\n连接已有功能，区分演示数据与真实保存。\n实际从头操作到尾并重开验证，记录设备和结果。\n失败时定位并修复后重复流程；无法检查的目标平台明确标记。\n更新任务计划并保存可恢复版本，再进入系统测试。",
      "Connect and verify one complete flow without adding out-of-scope features.\n\n[Inputs] Requirements, plan, and implemented interface/data features.\n[Flow] Customer submits → owner confirms → customer checks status.\n[Data] Fictional customers and dates, with no real contact details.\n[Platform] Phone and desktop browsers.\n[Expected] Reservations persist after refresh, status is correct, and unauthorized accounts cannot access private data.\n\nCheck prerequisites first; record gaps rather than faking success.\nConnect existing features and distinguish mock data from actual persistence.\nRun the whole flow and reopen it, recording devices and results.\nFix failures and repeat the flow. Mark untested platforms explicitly.\nUpdate the plan and save a recoverable version before system testing."
    ],
    "moduleIds": [
      "web",
      "mobile",
      "desktop",
      "backend",
      "test"
    ],
    "modules": [
      "相关板块",
      "Related modules"
    ],
    "color": "amber",
    "parent": "build"
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
      "请依据需求文档检查当前版本，并引导一次实际试用。\n\n【输入】需求文档、开发计划和当前可运行版本；缺失时先索取。\n【主要流程示例】提交预约 → 店主确认 → 顾客查看状态。\n【异常场景示例】空联系方式、重复点击提交、断网、另一个顾客尝试查看同一预约。\n【已发现问题示例】点击提交后显示成功，但重新打开找不到预约。\n【复现步骤示例】填写测试日期和口味 → 点击提交 → 刷新页面 → 查询预约。\n【预期结果示例】预约仍然存在，状态为待确认；无权限账号无法查看联系方式。\n\n先生成检查清单并执行具备条件的检查。需要人工操作时，每次说明一个步骤及预期结果，等待反馈。\n问题先定位原因，再做最小修复，不以删除检查或隐藏报错代替修复。\n修复后重复原失败流程，并检查关联功能。\n结果分为通过、失败、未检查，附实际依据；没有执行的项目不能填通过。\n更新开发计划，仍有阻塞问题时不要进入正式发布。",
      "Check the current version against the requirements and guide an actual trial.\n\n[Inputs] Requirements, development plan, and a runnable version. Request missing items.\n[Main flow] Submit reservation → owner confirms → customer checks status.\n[Failure cases] Empty contact field, repeated submission, lost connection, and another customer accessing the reservation.\n[Example issue] Submission reports success, but the reservation disappears after reopening.\n[Reproduction] Enter a sample date and flavor → submit → refresh → look up the reservation.\n[Expected] The reservation persists as pending; unauthorized accounts cannot view contact details.\n\nCreate a checklist and execute checks that are possible. For manual steps, provide one action and expected result at a time and wait for feedback.\nFind the cause before making a focused fix. Do not remove checks or hide errors as a fix.\nRepeat the failed flow and check related features afterward.\nRecord passed, failed, or unchecked with evidence. Never pass an unexecuted check.\nUpdate the plan and do not release with blocking issues."
    ],
    "modules": [
      "测试 · 后端 · 前端与 UI",
      "Testing · Backend · Frontend & UI"
    ],
    "moduleIds": [
      "test"
    ],
    "color": "green",
    "promptTitle": [
      "检查真实流程并复查修复",
      "Test the real flow and verify fixes"
    ]
  },
  {
    "id": "accept",
    "title": [
      "实际试用并确认发布",
      "Try it and approve release"
    ],
    "term": "Acceptance",
    "question": [
      "检查是否真的符合想法，而不只是 AI 的检查通过。",
      "Confirm that it meets the original purpose, beyond AI’s checks."
    ],
    "output": [
      "人工试用结果、阻塞问题与明确的发布决定",
      "Human trial results, blockers, and an explicit release decision"
    ],
    "actions": [
      [
        "让 AI 从需求提取验收清单，说明每项操作及应看到的结果。",
        "Have AI derive an acceptance checklist with actions and expected results."
      ],
      [
        "由实际使用者走完主要流程，记录是否顺手、是否达成目标及仍有疑问的地方。",
        "Have intended users try the main flow and record usability, goal completion, and uncertainties."
      ],
      [
        "逐项决定通过、需修改或未试用；阻塞问题回到开发，确认通过后才准备正式发布。",
        "Mark each item accepted, needs changes, or untried. Return blockers to development and approve release explicitly."
      ]
    ],
    "problem": [
      "测试都通过了，实际使用仍然别扭。",
      "Tests pass, but the product is awkward to use."
    ],
    "answer": [
      "保留具体操作和感受，交给 AI 区分缺陷与新需求。当前目标未达成时先修复，不用新增功能掩盖问题。",
      "Give AI concrete actions and observations to distinguish defects from new scope. Fix unmet goals rather than hiding them with new features."
    ],
    "promptTitle": [
      "实际试用并确认发布",
      "Try it and approve release"
    ],
    "prompt": [
      "请整理发布前的人工验收流程，不代表人工作出通过决定。\n\n【输入】已确认需求、测试结果和可运行版本。\n【使用者示例】一位顾客和一位店主；尚未邀请时标记未试用。\n【核心目标示例】顾客能提交预约，店主能确认，顾客能理解状态。\n【需要检查】流程完整、文字易懂、目标设备可用、资料权限符合要求。\n【发布决定】尚未确认。\n\n每次给出一个试用任务和预期结果，等待实际反馈。\n把反馈记录为通过、需修改或未试用，不能把 AI 自动检查代替人工确认。\n区分阻塞故障、可延后问题和新增需求，说明建议理由。\n阻塞问题回到对应开发任务，修复后重新验收。\n最后输出验收记录及待决定事项，明确询问是否允许进入发布准备，不能自行批准。",
      "Prepare a human acceptance trial without deciding approval on behalf of people.\n\n[Inputs] Agreed requirements, test results, and a runnable version.\n[Participants] A customer and owner; mark untried if nobody has participated.\n[Goal] Submit a reservation, confirm it, and understand its status.\n[Checks] Complete flow, understandable language, target-device usability, and access rules.\n[Release decision] Not approved yet.\n\nProvide one trial task and expected result at a time, then wait for actual feedback.\nRecord accepted, needs changes, or untried. Automated checks do not replace human approval.\nSeparate blockers, deferrable issues, and new scope with reasons.\nReturn blockers to the relevant task and repeat acceptance after a fix.\nProduce the acceptance record and ask explicitly whether release preparation is allowed. Do not self-approve."
    ],
    "moduleIds": [
      "test",
      "launch"
    ],
    "modules": [
      "相关板块",
      "Related modules"
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
        "先核对人工验收决定和仍未解决的问题；没有明确发布确认时只做准备。",
        "Check the acceptance decision and unresolved issues first. Without explicit approval, prepare only."
      ],
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
      "请协助发布已验证的版本，先准备，不立即对外发布。\n\n【输入】需求文档、选型说明、开发计划和测试结果。\n【目标示例】发布烘焙预约网站，供顾客通过网址使用。\n【发布位置示例】托管平台和域名尚未选定，请依据既定技术栈建议。\n【预算示例】每月 100 元以内，任何收费或订阅先确认。\n【发布范围示例】只发布正式页面，不包含测试顾客资料、密钥和内部文件。\n\n先确认目标、账号条件、费用与平台规则；无法核实的条目标记待核实。\n准备发布包、必要配置说明和恢复到上一版的方案。账号验证由人工完成，不索取明文密码。\n列出将公开的内容和待执行动作，等待明确确认后再发布。\n发布后从正式入口检查主要流程、手机显示和权限，不能只检查本地预览。\n输出正式地址或安装入口、实际验证结果、费用提醒和恢复步骤。\n如果无法执行发布，提供准确的人工步骤并明确当前尚未发布。",
      "Help release the verified version. Prepare first; do not publish immediately.\n\n[Inputs] Requirements, stack decision, development plan, and test results.\n[Example target] A bakery reservation website accessible by URL.\n[Destination] Hosting and domain are undecided; recommend options compatible with the stack.\n[Budget] About $15 per month; confirm every paid service or subscription first.\n[Public scope] Production pages only, excluding sample customer records, secrets, and internal files.\n\nCheck destination, account prerequisites, costs, and platform rules. Mark unverified details.\nPrepare the release, configuration instructions, and rollback plan. Account verification stays manual; do not request plaintext passwords.\nList public content and pending actions, then wait for explicit confirmation before publishing.\nAfter release, check the main flow, phone layout, and access rules through the actual live entry point, not just a local preview.\nProvide the URL or installer, observed results, cost reminders, and recovery steps.\nIf publication cannot be performed, give precise manual instructions and state that it is not published."
    ],
    "modules": [
      "部署上线 · 项目对应平台",
      "Deployment · The target platform"
    ],
    "moduleIds": [
      "launch"
    ],
    "color": "green",
    "promptTitle": [
      "准备发布并验证正式入口",
      "Prepare a release and verify the live entry point"
    ]
  },
  {
    "id": "maintain",
    "title": [
      "收集反馈并维护迭代",
      "Collect feedback and maintain"
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
        "先收集真实使用记录：是否完成目标、在哪一步卡住、原有麻烦是否减少。没有试用数据时保持未知。",
        "Collect real usage evidence: goal completion, sticking points, and whether the original problem improved. Without data, keep results unknown."
      ],
      [
        "让 AI 分类故障与新需求。故障回到开发和测试，新需求回到范围确认，再更新文档与计划。",
        "Have AI separate bugs from new scope. Bugs return to development/testing; new requests return to scope approval and documentation."
      ],
      [
        "让 AI 协助照看费用、更新、备份与恢复，所有自动提醒或监测需实际配置并验证后才标记启用。",
        "Have AI assist with costs, updates, backups, and recovery. Mark automated reminders or monitoring enabled only after setup and verification."
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
      "请根据现有产品和反馈整理维护与迭代计划，先分类，不直接改动线上版本。\n\n【输入】当前需求、技术选型、开发计划、已发布版本和已有维护记录。\n【反馈示例】顾客重复点击造成两条预约；店主希望增加导出表格。\n【运行情况示例】当前可正常访问，尚未配置自动备份。\n【费用情况】填写实际账单与到期时间；未提供时标记待补充，不推测。\n【优先原则】先保障预约流程和资料安全，再考虑新功能。\n\n将反馈分为故障、新需求和待澄清问题，说明影响与建议顺序。\n故障给出复现、定位、修复和复查任务；新需求先更新需求文档并确认范围。\n列出服务费用、续期、备份、恢复和更新后检查清单，标记需要人工确认的操作。\n提出本轮最小改动及风险，确认后再执行；修改前保留可恢复的版本和必要备份。\n完成后记录实际检查与剩余问题，不把未配置的提醒或监测说成已经运行。\n将下一轮任务写回同一份开发计划。",
      "Organize maintenance and iteration from the existing product and feedback. Classify first; do not change production immediately.\n\n[Inputs] Current requirements, stack decision, development plan, released version, and maintenance records.\n[Example feedback] Repeated clicks create duplicate reservations; the owner requests spreadsheet export.\n[Example operating state] The site works, but automatic backups are not configured.\n[Costs] Supply real bills and renewal dates; mark missing information rather than guessing.\n[Priority] Protect the reservation flow and data before adding features.\n\nSeparate bugs, new requirements, and questions. Explain impact and order.\nFor bugs, plan reproduction, diagnosis, a fix, and verification. For features, update and confirm requirements first.\nList costs, renewals, backups, recovery, and post-update checks, marking manual decisions.\nPropose the smallest change and its risks; execute after confirmation, preserving a recoverable version and required backups.\nRecord actual checks and open issues. Do not claim unconfigured reminders or monitoring are running.\nWrite the next tasks back into the same development plan."
    ],
    "modules": [
      "运维 · 测试 · 需求文档",
      "Maintenance · Testing · Requirements"
    ],
    "moduleIds": [
      "ops"
    ],
    "color": "green",
    "promptTitle": [
      "整理反馈并安全迭代",
      "Turn feedback into a safe iteration"
    ]
  }
];
export const mainJourney=journey.filter(stage=>!stage.parent);
