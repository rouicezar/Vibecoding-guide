import type {Copy} from './site';
export interface Stage {id:string; parent?:string; title:Copy; term:string; question:Copy; output:Copy; actions:Copy[]; incoming:Copy; example:Copy; problem:Copy; answer:Copy; promptTitle:Copy; prompt:Copy; modules:Copy; moduleIds:string[]; color:string;}
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
      "一份本人填写的想法草稿；下一步整段交给 AI。",
      "A personally written idea draft to give to AI in the next step."
    ],
    "actions": [
      [
        "打开自己的笔记，新建“项目想法”，暂时不需要打开编程工具。",
        "Open a note and name it Project idea. No coding tool is needed yet."
      ],
      [
        "填写下方草稿的对象、困难和期望结果。拿不准的地方写“尚未确定”。",
        "Fill in the audience, difficulty, and desired result below. Mark unknowns as undecided."
      ],
      [
        "读一遍：是否能说明一次实际使用会从哪里开始、在哪里结束？写好后进入下一步选工具。",
        "Read it back: where does one use begin and end? Then continue to tool selection."
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
      "我的想法草稿（本人填写，暂不发送给 AI）\n\n【想做什么】填写想法，不必使用技术名词。\n【给谁用】填写实际使用者。\n【现在遇到什么问题】填写具体困难。\n【目前怎么处理】填写现有做法。\n【一次使用的过程】填写从开始到完成会做什么。\n【希望得到的结果】填写可观察的变化。\n【第一版最重要的事】先写一到三项。\n【暂时不做】写清排除项。\n【设备与预算】填写实际情况，未知写尚未确定。\n【已有材料】填写文字、图片或现有项目。\n【还没想清楚】列出待讨论的问题。",
      "My idea draft (complete personally; do not send to AI yet)\n\n[Idea] Describe the idea without technical vocabulary.\n[Audience] Actual intended users.\n[Problem] A concrete difficulty.\n[Current approach] How it is handled today.\n[One use] Describe the beginning, actions, and end.\n[Desired result] An observable improvement.\n[First-version priorities] One to three essentials.\n[Out of scope] Explicit exclusions.\n[Devices and budget] Actual details, or undecided.\n[Existing material] Text, images, or an existing project.\n[Open questions] Matters still to discuss."
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
    ],
    "incoming": [
      "无需准备文件。先想清楚想帮助谁完成哪一件事。",
      "No files are needed. Start with one person and one task worth helping with."
    ],
    "example": [
      "比如：店主想减少遗漏订单。顾客选日期、填写需求后提交，店主能集中查看。这里的店主和订单只是例子。",
      "For example: an owner wants fewer missed orders. A customer selects a date, enters a request, and submits it for the owner to review. This is only an example."
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
      "选好制作工具、准备项目，再把想法交给 AI。",
      "Choose a building tool, prepare the project, then hand over the idea."
    ],
    "output": [
      "能打开的项目、可找回的起点、AI 已读的规则文件，以及 AI 对想法的复述。",
      "An open project, a recoverable starting point, acknowledged project instructions, and AI’s restatement of the idea."
    ],
    "actions": [
      [
        "打开下方“选工具并准备项目”。根据是否愿意安装、是否已有项目，先选择一种能制作文件并显示预览的工具。",
        "Open Choose a tool and prepare a project below. Choose a tool that can edit files and show a preview, based on installation preference and existing work."
      ],
      [
        "按实操页打开一个专用项目文件夹，让 AI 核对 Git 版本记录并创建项目规则文件；网页工具按页面中的对应路径处理。",
        "Follow the guide to open a dedicated project folder, check Git version history, and create project instructions. Browser tools follow their separate path."
      ],
      [
        "回到工具的项目对话，粘贴想法草稿和下方交接提示词。先检查 AI 是否理解目标，不急着生成整站。",
        "In the project conversation, paste the idea draft and the handoff prompt below. Check understanding before requesting a whole site."
      ]
    ],
    "problem": [
      "还没有 AI 工具，或者只有聊天功能。",
      "No AI tool is ready, or only chat is available."
    ],
    "answer": [
      "先打开本步的“选工具并打开项目”实操页。只有聊天功能时可以先讨论想法；开始制作前必须确认文件修改和预览能力，再完成 Git 或平台版本历史与项目规则检查。",
      "Open this step’s tool-selection guide. Chat-only tools can discuss ideas, but building requires verified file editing and preview capabilities, followed by version-history and project-instruction checks."
    ],
    "prompt": [
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】上一站填写的想法草稿。 请读取附上的原文，不凭空补齐。\n【本次目标】读取附上的想法草稿和项目规则。用普通话复述给谁用、解决什么、一次使用的过程。先不制作功能。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】能打开的项目、可找回的起点、AI 已读的规则文件，以及 AI 对想法的复述。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] The completed idea draft from the previous step. Read the attached originals without inventing details.\n[Goal] Read the attached idea draft and project instructions. Restate the audience, problem, and one use in plain language. Do not build features yet.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] An open project, a recoverable starting point, acknowledged project instructions, and AI’s restatement of the idea.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
    ],
    "modules": [
      "和 Agent 沟通",
      "Talking to agents"
    ],
    "moduleIds": [
      "agent", "tools"
    ],
    "color": "blue",
    "promptTitle": [
      "把想法草稿交给 AI · 沟通提示词",
      "Share the idea draft · Conversation prompt"
    ],
    "incoming": [
      "上一站填写的想法草稿。",
      "The completed idea draft from the previous step."
    ],
    "example": [
      "比如：草稿写“记录读书进度”，AI 应复述成记录、查看进度，而不是自动增加社区和付费。",
      "For example: if the draft says track reading progress, AI should describe recording and viewing progress, not add a community or payments."
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
      "补全后的想法草稿：已知事实和待决定问题分开。",
      "An updated draft separating known facts from open decisions."
    ],
    "actions": [
      [
        "把 AI 理解错的地方指出来；正确的部分直接确认。",
        "Correct misunderstandings and confirm the parts that are right."
      ],
      [
        "让 AI 一次只问一个会影响产品的问题，回答实际情况；没有答案就说明未知。",
        "Ask AI for one decision-changing question at a time. Answer from real conditions, or say unknown."
      ],
      [
        "让 AI 把答案补回想法草稿，列出仍待决定的事项；核对后进入范围确认。",
        "Have AI update the draft with the answers and open decisions. Review it, then confirm scope."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】想法草稿与上一站 AI 的复述。 请读取附上的原文，不凭空补齐。\n【本次目标】基于现有草稿找出影响第一版的缺口，一次只问一个问题。每次回答后更新草稿，不要求本人先学习技术名词。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】补全后的想法草稿：已知事实和待决定问题分开。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] The idea draft and AI’s restatement. Read the attached originals without inventing details.\n[Goal] Find gaps that affect the first version. Ask one question at a time and update the draft after each answer. Do not require technical vocabulary first.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] An updated draft separating known facts from open decisions.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    ],
    "incoming": [
      "想法草稿与上一站 AI 的复述。",
      "The idea draft and AI’s restatement."
    ],
    "example": [
      "比如：AI 问“资料只在一台电脑使用，还是需要手机也能看到？”答案会影响保存方式。",
      "For example: AI asks whether records stay on one computer or must also appear on a phone. The answer affects storage."
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
      "docs/requirements.md 中的第一版范围、暂不做的事和完成标准。",
      "First-version scope, exclusions, and completion criteria in docs/requirements.md."
    ],
    "actions": [
      [
        "让 AI 列出“这版必须有”和“以后再做”，优先只做一条完整任务。",
        "Ask AI to separate essentials from later work, prioritizing one complete task."
      ],
      [
        "逐项确认保留或删除；给每项写出能亲手检查的结果。",
        "Confirm or remove each item and give it an observable result."
      ],
      [
        "让 AI 把确认内容存入 docs/requirements.md，先记录范围；下一站补成完整需求。",
        "Ask AI to save the scope in docs/requirements.md. The next step expands it into requirements."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】补全后的想法草稿。 请读取附上的原文，不凭空补齐。\n【本次目标】根据草稿提出最小可用范围。列出必做、暂缓、不做与每项可检查的结果。等本人确认后保存到 docs/requirements.md。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】docs/requirements.md 中的第一版范围、暂不做的事和完成标准。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] The clarified idea draft. Read the attached originals without inventing details.\n[Goal] Propose a small usable scope: essentials, deferred work, exclusions, and observable outcomes. Save it in docs/requirements.md after confirmation.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] First-version scope, exclusions, and completion criteria in docs/requirements.md.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
    ],
    "moduleIds": [
      "agent",
      "types"
    ],
    "modules": [
      "相关板块",
      "Related modules"
    ],
    "color": "blue",
    "incoming": [
      "补全后的想法草稿。",
      "The clarified idea draft."
    ],
    "example": [
      "比如：先做“新增记录→保存→查看”，暂不做社交分享；完成标准是关闭重开后记录仍在。",
      "For example: start with create → save → view, leave social sharing for later, and verify that entries survive reopening."
    ]
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
      "可供下一站选技术的需求文档；不只是功能名称清单。",
      "Requirements suitable for choosing technologies, beyond a list of feature names."
    ],
    "actions": [
      [
        "让 AI 读取范围，把每项写成“使用者做什么、产品应怎样回应”。",
        "Ask AI to read the scope and describe each user action and expected product response."
      ],
      [
        "补充输入为空、保存失败和权限不够时的表现；不确定项由 AI 提问。",
        "Include empty input, save failure, and access denial. Let AI ask about uncertainties."
      ],
      [
        "自己按一次使用顺序读一遍，确认无遗漏后让 AI 更新 docs/requirements.md。",
        "Read it in usage order and have AI update docs/requirements.md after checking for gaps."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】已确认的第一版范围。 请读取附上的原文，不凭空补齐。\n【本次目标】读取已确认范围，整理页面、用户操作、产品回应、异常情况、资料与访问要求、验收标准。用普通话保存到 docs/requirements.md，不扩大范围。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】可供下一站选技术的需求文档；不只是功能名称清单。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] The approved first-version scope. Read the attached originals without inventing details.\n[Goal] Read the approved scope. Describe pages, actions, responses, failures, data/access needs, and acceptance criteria in docs/requirements.md without expanding scope.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] Requirements suitable for choosing technologies, beyond a list of feature names.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    ],
    "incoming": [
      "已确认的第一版范围。",
      "The approved first-version scope."
    ],
    "example": [
      "比如：不是只写“有搜索”，而是写“输入名称后显示匹配记录，没有结果时说明如何重试”。",
      "For example: instead of search, specify that entering a name shows matching records and no results explains how to try again."
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
      "docs/design.md：选什么、为什么、有什么限制，以及还需要核验什么。",
      "docs/design.md: choice, reasons, limits, and remaining checks."
    ],
    "actions": [
      [
        "打开技术栈页面，按产品形式、资料保存、预算等条件填写；未知项如实保留。",
        "Open the stack guide and enter product form, storage needs, budget, and other conditions. Keep unknowns explicit."
      ],
      [
        "把条件和需求交给 AI，让它推荐一个主方案，并说明为什么适合、要付什么费用。",
        "Give AI the conditions and requirements. Ask for one main option, why it fits, and its cost categories."
      ],
      [
        "确认方案后让 AI 保存到 docs/design.md。已有项目先沿用现有技术，不因名称新就重写。",
        "After approval, save the decision in docs/design.md. Keep an existing stack unless a real blocker justifies change."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】docs/requirements.md；实际设备、预算和已有工具。 请读取附上的原文，不凭空补齐。\n【本次目标】读取需求，根据实际条件推荐技术与运行方式。解释每项负责什么、费用类型和限制，引用当前官方依据。缺少预算或设备信息先询问，确认后写入 docs/design.md。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】docs/design.md：选什么、为什么、有什么限制，以及还需要核验什么。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] docs/requirements.md, actual devices, budget, and existing tools. Read the attached originals without inventing details.\n[Goal] Read the requirements and recommend technologies and runtime based on actual constraints. Explain responsibilities, costs, limits, and current official sources. Ask about missing budget or devices; save the approved decision in docs/design.md.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] docs/design.md: choice, reasons, limits, and remaining checks.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    ],
    "incoming": [
      "docs/requirements.md；实际设备、预算和已有工具。",
      "docs/requirements.md, actual devices, budget, and existing tools."
    ],
    "example": [
      "比如：只展示作品可能不需要数据库；多人共享报名记录则需要明确保存与访问方案。",
      "For example: a portfolio may not need a database, while shared sign-ups need storage and access decisions."
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
      "tasks/todo.md：下一项做什么、怎样检查、当前进行到哪里。",
      "tasks/todo.md: what comes next, how to check it, and current progress."
    ],
    "actions": [
      [
        "让 AI 把第一版拆成每次能打开检查的小任务，而不是一次做完整项目。",
        "Ask AI to split the first version into small inspectable tasks, not one all-at-once build."
      ],
      [
        "检查顺序：先准备环境，再做最小页面，接通必要的数据，最后走完整流程。",
        "Check order: prepare the environment, build a minimal page, connect necessary data, and test the complete flow."
      ],
      [
        "让 AI 保存 tasks/todo.md，每项写明产出、检查方法和状态。以后每次从这份清单继续。",
        "Save tasks/todo.md with outputs, checks, and status for each task. Use it to resume work."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】已确认的需求文档和技术选择。 请读取附上的原文，不凭空补齐。\n【本次目标】读取需求和设计，生成有顺序和依赖的分批任务。每项列出实际交付物、人工检查步骤和待开始/进行中/待验证/完成状态，保存 tasks/todo.md。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】tasks/todo.md：下一项做什么、怎样检查、当前进行到哪里。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] Approved requirements and technology decisions. Read the attached originals without inventing details.\n[Goal] Read requirements and design. Create ordered tasks with dependencies, deliverables, manual checks, and not started/in progress/unverified/complete statuses in tasks/todo.md.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] tasks/todo.md: what comes next, how to check it, and current progress.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    ],
    "incoming": [
      "已确认的需求文档和技术选择。",
      "Approved requirements and technology decisions."
    ],
    "example": [
      "比如：“制作表单”拆成“显示字段→校验空值→接通保存→刷新后查看”，每次都能检查。",
      "For example: split form building into fields → empty-input checks → saving → viewing after reload."
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
      "能打开的初始页面、可照着启动的说明、已更新的项目规则和可恢复版本。",
      "A working starter page, startup instructions, updated project rules, and a recovery checkpoint."
    ],
    "actions": [
      [
        "让 AI 检查电脑或网页开发环境缺少什么，只安装已确认方案需要的工具。",
        "Ask AI to inspect the local or browser environment and install only what the chosen approach needs."
      ],
      [
        "让 AI 创建能启动的最小项目并运行；点击它给出的预览地址，确认确实打开当前项目。",
        "Have AI create and run the smallest starter project. Open the supplied preview and confirm it belongs to this project."
      ],
      [
        "让 AI 将真实启动、检查、构建命令写入 README.md 和 AGENTS.md，并保存一次 Git 提交。",
        "Have AI record actual start, check, and build commands in README.md and AGENTS.md, then save a Git checkpoint."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】已打开的项目、AGENTS.md、需求、设计和任务清单。 请读取附上的原文，不凭空补齐。\n【本次目标】读取规则和已确认设计。检查现有环境，补齐必要依赖，启动最小项目并实际验证预览。记录准确命令与地址，更新 README.md、AGENTS.md 和任务状态，完成检查后保存恢复检查点。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】能打开的初始页面、可照着启动的说明、已更新的项目规则和可恢复版本。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] The open project, AGENTS.md, requirements, design, and task list. Read the attached originals without inventing details.\n[Goal] Read instructions and approved design. Inspect the environment, add required dependencies, start a minimal project, and verify its preview. Record commands and address; update README.md, AGENTS.md, and task status, then save a checked recovery point.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] A working starter page, startup instructions, updated project rules, and a recovery checkpoint.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    "color": "violet",
    "incoming": [
      "已打开的项目、AGENTS.md、需求、设计和任务清单。",
      "The open project, AGENTS.md, requirements, design, and task list."
    ],
    "example": [
      "比如：AI 给出本地地址后，打开能看到项目名称；关闭后按 README 的命令还能启动。",
      "For example: the local address shows the project name, and the README command starts it again after closing."
    ]
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
      "逐项可检查的小版本和持续更新的任务清单。",
      "Small inspectable versions and an up-to-date task list."
    ],
    "actions": [
      [
        "让 AI 读取清单，只开始下一项未完成任务。需要界面时进入下方页面分支。",
        "Ask AI to read the list and start only the next incomplete task. Use the UI branch when needed."
      ],
      [
        "每做完一小块，就打开实际页面操作；不满意时用“局部修改”模板指出位置和预期。",
        "After each small change, open and use the page. Use the focused-edit template to identify location and expected behavior."
      ],
      [
        "该项通过检查后让 AI 记录结果并提交，再继续下一项；不要等全做完才看。",
        "Once checked, have AI record results and commit, then continue. Do not wait for the entire product before reviewing."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】已运行的初始项目与 tasks/todo.md。 请读取附上的原文，不凭空补齐。\n【本次目标】读取 AGENTS.md、需求、设计和任务清单，只完成下一项任务。先说明要改哪里，再实施并给出当前预览、点击步骤、实际检查和未验证项。通过后更新清单并保存提交。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】逐项可检查的小版本和持续更新的任务清单。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] A running starter project and tasks/todo.md. Read the attached originals without inventing details.\n[Goal] Read AGENTS.md, requirements, design, and tasks. Complete only the next task. Explain the target, implement it, and provide the preview, steps, actual checks, and unverified items. Update tasks and commit after checks pass.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] Small inspectable versions and an up-to-date task list.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    ],
    "incoming": [
      "已运行的初始项目与 tasks/todo.md。",
      "A running starter project and tasks/todo.md."
    ],
    "example": [
      "比如：先让提交按钮能校验输入，再接保存；按钮颜色修改不应顺带改变保存逻辑。",
      "For example: validate input before connecting storage; changing a button color should not alter saving."
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
      "确认的界面风格说明与一个能实际操作的页面。",
      "An approved style brief and an operable page."
    ],
    "actions": [
      [
        "先确定想改的是整体风格、页面排列，还是一个组件；打开下方对应实操模板。",
        "Choose whether the task concerns overall style, page layout, or one component, then open the matching practical template below."
      ],
      [
        "提供截图并标出位置，用“现在怎样→希望怎样→什么不变”描述，示例只作参考。",
        "Provide a screenshot with a marked location and describe current → desired → unchanged. Treat examples as references only."
      ],
      [
        "让 AI 先改一个代表页面，检查手机和电脑、长文字和失败状态后，再复用到其他页面。",
        "Ask AI to change one representative page first. Check phone/desktop, long text, and errors before applying it elsewhere."
      ]
    ],
    "problem": [
      "我知道想要什么样子，却不知道怎么告诉 AI。",
      "I can picture it, but don’t know what to tell AI."
    ],
    "answer": [
      "先选整体风格、页面局部或组件修改。按下方实操页填写位置、现状、期望和保持不变的内容；不知道组件名时再查词典。比如：标签页是点击标题后在同一区域切换内容。",
      "Choose overall style, a local page edit, or a component edit. Use the practical guides below for location, current state, desired state, and invariants. Look up a name only if needed. For example, tabs switch content within one region."
    ],
    "prompt": [
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】当前页面或待制作的页面需求。 请读取附上的原文，不凭空补齐。\n【本次目标】读取页面需求和风格说明，先做一个代表页面。说明内容顺序、操作反馈、手机排列；沿用既有规则。不确定的位置先询问，交付可操作预览和检查步骤。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】确认的界面风格说明与一个能实际操作的页面。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] The current page or requirements for a new one. Read the attached originals without inventing details.\n[Goal] Read page requirements and the style brief. Build one representative page with content order, feedback, and mobile layout. Preserve existing rules, clarify uncertain targets, and deliver an operable preview with checks.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] An approved style brief and an operable page.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    "parent": "build",
    "incoming": [
      "当前页面或待制作的页面需求。",
      "The current page or requirements for a new one."
    ],
    "example": [
      "比如：希望页面更紧凑，就具体说明缩短卡片间距、保留标题层级，而不是只说“高级一点”。",
      "For example: describe reduced card spacing with clear heading hierarchy instead of only asking for a premium look."
    ]
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
      "经实际验证的保存、读取和访问规则；不需要保存时记录跳过原因。",
      "Verified saving, retrieval, and access rules, or a recorded reason to skip persistence."
    ],
    "actions": [
      [
        "让 AI 从实际流程列出要保存的字段，删除没有用途的资料。",
        "Ask AI to derive necessary fields from the flow and remove unnecessary data."
      ],
      [
        "说明哪些内容属于个人、哪些可共享，让 AI 写出访问规则后再实现。",
        "Identify private and shared content, then have AI define access rules before implementing."
      ],
      [
        "保存一条测试资料，刷新重开；需要共享时再换设备和身份检查。",
        "Save a test record and reopen. If sharing is needed, also test another device and identity."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】界面要保存什么、谁可以看和改。 请读取附上的原文，不凭空补齐。\n【本次目标】读取资料与访问需求，列字段和身份权限，确认后接通保存读取。使用测试资料验证刷新、重复提交、失败重试和跨身份访问；报告实际证据与未验证项。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】经实际验证的保存、读取和访问规则；不需要保存时记录跳过原因。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] What the interface needs to save and who may read or edit it. Read the attached originals without inventing details.\n[Goal] Read data and access requirements, define fields and permissions, then connect storage after approval. Test reload, duplicates, retries, and cross-identity access using sample data. Report evidence and unverified items.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] Verified saving, retrieval, and access rules, or a recorded reason to skip persistence.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    "parent": "build",
    "incoming": [
      "界面要保存什么、谁可以看和改。",
      "What the interface needs to save and who may read or edit it."
    ],
    "example": [
      "比如：个人笔记只本人可读；团队公告允许成员看。两种情况不能使用同一条公开规则。",
      "For example: private notes are owner-only while team notices are readable by members; they need different rules."
    ]
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
      "能从开始走到结束的一条使用流程。",
      "One complete end-to-end user flow."
    ],
    "actions": [
      [
        "从第一次打开产品开始，按需求中的使用顺序走到结束。",
        "Start from opening the product and follow the requirements through to completion."
      ],
      [
        "检查页面之间是否带上正确资料，返回、刷新和重复操作是否合理。",
        "Check that pages carry the right data and that back, reload, and repeated actions behave sensibly."
      ],
      [
        "把断开的步骤交给 AI 单项修复；完整走通后回到主路线进入测试。",
        "Give AI each broken step for a focused repair, then return to the main route for testing."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】已经可操作的界面和必要的数据功能。 请读取附上的原文，不凭空补齐。\n【本次目标】按需求逐步走完整流程，检查页面跳转、资料传递、返回与刷新。记录卡住的位置，逐项修复并重测；最后给出本人可重复的完整点击步骤。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】能从开始走到结束的一条使用流程。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] An operable interface and required data functionality. Read the attached originals without inventing details.\n[Goal] Walk through the full requirements flow and inspect navigation, data transfer, back, and reload. Record failures, repair and retest them, then provide reproducible manual steps.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] One complete end-to-end user flow.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    "parent": "build",
    "incoming": [
      "已经可操作的界面和必要的数据功能。",
      "An operable interface and required data functionality."
    ],
    "example": [
      "比如：选日期→填资料→提交→看到结果→重新打开仍可查看。只做出四张页面不等于流程已接通。",
      "For example: select date → fill details → submit → see result → reopen and find it. Four screens alone do not connect the flow."
    ]
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
      "docs/checks.md：通过项、失败项、尚未检查项和复测记录。",
      "docs/checks.md: passing, failing, untested items, and retest records."
    ],
    "actions": [
      [
        "让 AI 逐项检查正常操作、错误输入、保存和权限，并把实际结果写下来。",
        "Ask AI to check normal actions, invalid input, storage, and access, recording actual results."
      ],
      [
        "打开测试模块记录问题；写清从哪里点起、预期是什么、实际发生什么。",
        "Use the testing module to record where to start, what was expected, and what happened."
      ],
      [
        "修复后重做原步骤，再检查一遍完整任务；不要只看 AI 回复“已修复”。",
        "After repair, repeat the original steps and the complete task rather than relying on a fixed message."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】能走通的产品版本与需求中的完成标准。 请读取附上的原文，不凭空补齐。\n【本次目标】读取需求与当前版本，执行实际可执行的检查。把动作、预期、实际、证据和未执行项写入 docs/checks.md；失败逐项修复后复测。不要用构建通过代替使用流程检查。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】docs/checks.md：通过项、失败项、尚未检查项和复测记录。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] A usable version and the requirements’ completion criteria. Read the attached originals without inventing details.\n[Goal] Read requirements and the current version. Run feasible checks and record actions, expectations, observations, evidence, and unexecuted items in docs/checks.md. Repair and retest failures; a build alone is not a user-flow check.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] docs/checks.md: passing, failing, untested items, and retest records.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    ],
    "incoming": [
      "能走通的产品版本与需求中的完成标准。",
      "A usable version and the requirements’ completion criteria."
    ],
    "example": [
      "比如：空白表单应说明缺什么，不应显示提交成功；成功后刷新应仍能看到资料。",
      "For example: an empty form explains missing input instead of reporting success, and saved data survives reload."
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
      "docs/checks.md 中的本人试用结果与明确发布决定。",
      "Personal trial results and an explicit release decision in docs/checks.md."
    ],
    "actions": [
      [
        "亲手按主要使用流程操作一次，先不让 AI 解释每一步。",
        "Try the main task personally without AI explaining every step."
      ],
      [
        "记下看不懂、找不到或操作失败的位置；让 AI 修复后再试。",
        "Record confusing, hard-to-find, or broken parts and retry after repair."
      ],
      [
        "确认范围、费用与公开内容，明确选择可以发布或暂缓；让 AI 记录决定。",
        "Confirm scope, costs, and public content, then explicitly approve or defer release and have AI record the decision."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】AI 的测试记录和当前预览地址或安装包。 请读取附上的原文，不凭空补齐。\n【本次目标】根据需求整理本人可执行的试用步骤，逐项写点击位置和预期结果。收集本人的实际反馈，区分AI测试与人工试用，记录发布决定；未经同意不发布。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】docs/checks.md 中的本人试用结果与明确发布决定。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] AI’s test record and the current preview or installer. Read the attached originals without inventing details.\n[Goal] Prepare personal trial steps with click targets and expected outcomes. Record actual feedback, distinguish AI checks from human trials, and record the release decision. Do not publish without approval.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] Personal trial results and an explicit release decision in docs/checks.md.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
    ],
    "moduleIds": [
      "test",
      "launch"
    ],
    "modules": [
      "相关板块",
      "Related modules"
    ],
    "color": "green",
    "incoming": [
      "AI 的测试记录和当前预览地址或安装包。",
      "AI’s test record and the current preview or installer."
    ],
    "example": [
      "比如：按钮能点但文案看不懂，也应记为使用问题；技术检查通过并不能替代这一步。",
      "For example: a clickable button with confusing wording is still a usability issue; technical checks cannot replace this step."
    ]
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
      "docs/release.md：正式入口、发布版本、复查结果与恢复办法。",
      "docs/release.md: live entry, release version, check results, and recovery."
    ],
    "actions": [
      [
        "让 AI 按产品形式列出需要的账号、域名或安装材料；由本人处理账号验证和付费。",
        "Ask AI to list accounts, domain, or package requirements; handle account verification and payment personally."
      ],
      [
        "先在预览或测试安装中检查，再按已确认决定发布；保留上一可用版本。",
        "Check preview or test installation before releasing under the approved decision. Preserve the previous usable version."
      ],
      [
        "从正式入口以普通使用者身份重做主要任务，让 AI 记录入口、版本和恢复步骤。",
        "Repeat the main task through the live entry as an ordinary user. Record entry, version, and recovery steps."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】通过的试用记录、发布决定、目标平台与费用确认。 请读取附上的原文，不凭空补齐。\n【本次目标】读取发布决定与测试记录，核对当前官方平台要求及费用。按已同意范围准备并发布，验证正式入口；记录版本、结果与恢复办法到 docs/release.md。条件未满足时说明阻塞，不宣称上线。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】docs/release.md：正式入口、发布版本、复查结果与恢复办法。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] Passing trial records, release approval, target platform, and accepted costs. Read the attached originals without inventing details.\n[Goal] Read release approval and checks, verify current official platform requirements and costs, and release only within approved scope. Verify the live entry and save version, results, and recovery in docs/release.md. Report unmet conditions instead of claiming release.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] docs/release.md: live entry, release version, check results, and recovery.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    ],
    "incoming": [
      "通过的试用记录、发布决定、目标平台与费用确认。",
      "Passing trial records, release approval, target platform, and accepted costs."
    ],
    "example": [
      "比如：本机地址只能用于本机预览；分享给别人时应是已验证的正式网址或安装入口。",
      "For example: a local address is a local preview; share a verified live URL or install entry with others."
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
      "docs/maintenance.md：实际反馈、费用、备份恢复和下次行动。",
      "docs/maintenance.md: feedback, costs, backup/recovery, and next actions."
    ],
    "actions": [
      [
        "定期打开主要功能，检查账单、到期事项和备份是否可用。",
        "Periodically try the main flow and review bills, renewals, and usable backups."
      ],
      [
        "不能完成原任务的问题回测试修复；想加的新功能回到范围确认。",
        "Return broken existing tasks to testing; return new feature requests to scope confirmation."
      ],
      [
        "让 AI 更新维护记录和下一批计划，每次修改后再检查并保存版本。",
        "Have AI update maintenance notes and the next plan; check and save a version after each change."
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
      "【项目背景】粘贴已确认的项目简介；不确定项保留“尚未确定”。\n【给谁用】填写实际使用者与主要任务。\n【当前材料】正式入口、发布记录和真实反馈。 请读取附上的原文，不凭空补齐。\n【本次目标】读取发布记录与真实反馈，分成故障和新需求，分别给出修复或范围确认的下一步。核对费用、到期与备份恢复，更新 docs/maintenance.md，不虚构使用效果。\n【限制】沿用已确认范围，不擅自增加功能或更换方案。\n\n执行要求：\n1. 先说明材料是否齐全；缺少会改变结果的信息，先问一个关键问题。\n2. 用普通话解释操作，告诉我需要在哪里点击、粘贴或确认；可由AI完成的整理和执行请直接完成。\n3. 每次只完成本步目标，保留已有文件与可恢复版本。\n4. 输出实际产物的位置、我应该看到的结果和具体检查步骤。\n5. 把建议、已执行、已检查和未验证分开；不把文字回复当作已执行。\n【本步完成标准】docs/maintenance.md：实际反馈、费用、备份恢复和下次行动。\n【继续方式】达到完成标准后说明下一步需要带哪些材料；涉及付费、删除资料或发布时先取得明确确认。",
      "[Background] Paste the approved project summary; keep unknowns explicit.\n[Audience] Actual users and their main task.\n[Inputs] The live entry, release record, and real feedback. Read the attached originals without inventing details.\n[Goal] Read release notes and real feedback, separate bugs from new requests, and route each to repair or scope confirmation. Review costs, expiry, and recovery; update docs/maintenance.md without inventing outcomes.\n[Limits] Preserve approved scope; do not add features or replace the approach unasked.\n\nWorking instructions:\n1. Check inputs and ask one decision-changing question if material is missing.\n2. Explain where to click, paste, or confirm in plain language. Perform organization and execution that AI can handle.\n3. Complete only this step, preserving existing files and a recoverable version.\n4. Provide artifact locations, expected visible results, and concrete checking steps.\n5. Separate advice, execution, checked results, and unverified work. Text is not proof of execution.\n[Completion] docs/maintenance.md: feedback, costs, backup/recovery, and next actions.\n[Continuation] State what to carry to the next step. Obtain explicit confirmation before payments, data deletion, or release."
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
    ],
    "incoming": [
      "正式入口、发布记录和真实反馈。",
      "The live entry, release record, and real feedback."
    ],
    "example": [
      "比如：打不开是故障；希望增加导出是新需求。两者处理顺序和检查方式不同。",
      "For example: a page that cannot open is a bug; an export feature is a new request. They follow different paths."
    ]
  }
];
export const mainJourney=journey.filter(stage=>!stage.parent);
