import type { Copy } from './site';
export interface Blocker {
  id: string;
  stage: string;
  title: Copy;
  symptom: Copy;
  check: Copy;
  fix: Copy;
  done: Copy;
  prompt: Copy;
  sources: { label: string; url: string; kind: string }[];
}
export const blockers: Blocker[] = [
  {
    id: 'idea-vague',
    stage: 'idea',
    title: ['想法只有一句口号', 'The idea is only a slogan'],
    symptom: [
      '写了“做个管理系统”，但说不清谁在什么时候使用。',
      '“Build a management system” does not explain a real use.',
    ],
    check: [
      '先列出使用者、当前做法和最烦的一次具体经历。',
      'Identify the person, current workaround, and one frustrating episode.',
    ],
    fix: [
      '本人先填写：谁在什么场景做什么、当前困难、完成后能看到什么。暂不选技术；下方提示词留到下一步讨论。',
      'Personally write the person, situation, task, difficulty, and visible outcome. Defer technology; use the prompt in the next discussion step.',
    ],
    done: [
      '能用三句话说清一个人完成一件事的开始和结束。',
      'Three sentences describe one person completing one task.',
    ],
    prompt: [
      '以下材料已由本人先填写，现在进入下一步讨论。\n我在【想法只有一句口号】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：先列出使用者、当前做法和最烦的一次具体经历。\n处理方向：本人先填写：谁在什么场景做什么、当前困难、完成后能看到什么。暂不选技术；下方提示词留到下一步讨论。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：能用三句话说清一个人完成一件事的开始和结束。\n最后列出实际验证结果、未验证项和下一步。',
      'I have completed the personal worksheet and am now moving to the discussion step.\nI am blocked at: The idea is only a slogan.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Identify the person, current workaround, and one frustrating episode.\nProposed approach: Personally write the person, situation, task, difficulty, and visible outcome. Defer technology; use the prompt in the next discussion step.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Three sentences describe one person completing one task.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like',
        kind: 'official',
        label: 'MDN · Plan a first website',
      },
    ],
  },
  {
    id: 'idea-materials',
    stage: 'idea',
    title: ['已有材料不知道怎么整理', 'Existing material is scattered'],
    symptom: [
      '图片、表格、笔记散落，直接让 AI 猜业务。',
      'Images, spreadsheets, and notes are scattered; AI must guess the business.',
    ],
    check: [
      '区分真实材料、个人判断和仅供参考的例子。',
      'Separate real material, personal assumptions, and illustrative examples.',
    ],
    fix: [
      '新建 idea.md；列出材料名称和用途，敏感内容先脱敏。例子单独以“比如”开头；未知写尚未确定。',
      'Create idea.md with a material list and purpose; redact sensitive data. Label examples “For example” and preserve unknowns.',
    ],
    done: [
      '草稿能指出每份材料支持哪件事，未知项仍明确保留。',
      'Each material has a purpose, and unknowns remain explicit.',
    ],
    prompt: [
      '以下材料已由本人先填写，现在进入下一步讨论。\n我在【已有材料不知道怎么整理】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：区分真实材料、个人判断和仅供参考的例子。\n处理方向：新建 idea.md；列出材料名称和用途，敏感内容先脱敏。例子单独以“比如”开头；未知写尚未确定。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：草稿能指出每份材料支持哪件事，未知项仍明确保留。\n最后列出实际验证结果、未验证项和下一步。',
      'I have completed the personal worksheet and am now moving to the discussion step.\nI am blocked at: Existing material is scattered.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Separate real material, personal assumptions, and illustrative examples.\nProposed approach: Create idea.md with a material list and purpose; redact sensitive data. Label examples “For example” and preserve unknowns.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Each material has a purpose, and unknowns remain explicit.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like',
        kind: 'official',
        label: 'MDN · Plan a first website',
      },
    ],
  },
  {
    id: 'tell-folder',
    stage: 'tell',
    title: [
      'AI 说改好了，却找不到文件',
      'AI says it edited a file, but no file exists',
    ],
    symptom: [
      '聊天给出一段代码，但项目目录中没有对应文件。',
      'Chat returns code without changing the project.',
    ],
    check: [
      '确认当前工具是聊天模式还是可编辑项目模式，并读出工作目录。',
      'Check whether the mode can edit files and identify its working directory.',
    ],
    fix: [
      '在工具中打开实际项目文件夹；让 AI 新建 tool-check.md 写入一行测试文字，再读回确认。成功后删除这个测试文件。',
      'Open the actual project folder. Ask AI to create tool-check.md with one test line and read it back; remove the test file afterward.',
    ],
    done: [
      '在文件列表和 AI 读回结果中都看到同一文件及内容。',
      'The file list and read-back show the same file and text.',
    ],
    prompt: [
      '我在【AI 说改好了，却找不到文件】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：确认当前工具是聊天模式还是可编辑项目模式，并读出工作目录。\n处理方向：在工具中打开实际项目文件夹；让 AI 新建 tool-check.md 写入一行测试文字，再读回确认。成功后删除这个测试文件。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：在文件列表和 AI 读回结果中都看到同一文件及内容。\n最后列出实际验证结果、未验证项和下一步。\n如需创建检查文件，先确认文件名未被占用；只删除本次新建的检查文件，保留所有已有文件。',
      'I am blocked at: AI says it edited a file, but no file exists.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check whether the mode can edit files and identify its working directory.\nProposed approach: Open the actual project folder. Ask AI to create tool-check.md with one test line and read it back; remove the test file afterward.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The file list and read-back show the same file and text.\nReport actual checks, unchecked items, and the next step.\nIf a temporary check file is needed, verify the name is unused. Remove only that newly created check file; preserve all existing files.',
    ],
    sources: [
      {
        url: 'https://docs.lovable.dev/features/projects/chat',
        kind: 'official',
        label: 'Lovable · Project chat and debugging',
      },
    ],
  },
  {
    id: 'tell-rules',
    stage: 'tell',
    title: [
      '规则文件存在，但 AI 没按规则做',
      'Rules exist but are not followed',
    ],
    symptom: [
      'AI 改了不该改的文件，或每次都忘记启动命令。',
      'AI changes excluded files or forgets the start command.',
    ],
    check: [
      '核对文件名 AGENTS.md（复数）、所在目录、工具版本及实际加载记录。',
      'Check the plural filename AGENTS.md, directory, tool version, and loaded instructions.',
    ],
    fix: [
      '先让 AI 读规则并复述三条约束。Claude Code 当前版本对 AGENTS.md 的加载有条件；已有 CLAUDE.md 时检查是否导入，旧版可用 CLAUDE.md 中 @AGENTS.md。规则去重并写成能检查的动作。',
      'Ask AI to read and restate three rules. Claude Code support is conditional; check imports when CLAUDE.md exists. Older versions can import @AGENTS.md from CLAUDE.md. Remove conflicting rules.',
    ],
    done: [
      '新任务能列出规则来源，并按一项小任务验证遵守；复述不等于强制执行。',
      'A new task identifies the rule source and follows it on a small edit; restating rules is not enforcement.',
    ],
    prompt: [
      '我在【规则文件存在，但 AI 没按规则做】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：核对文件名 AGENTS.md（复数）、所在目录、工具版本及实际加载记录。\n处理方向：先让 AI 读规则并复述三条约束。Claude Code 当前版本对 AGENTS.md 的加载有条件；已有 CLAUDE.md 时检查是否导入，旧版可用 CLAUDE.md 中 @AGENTS.md。规则去重并写成能检查的动作。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：新任务能列出规则来源，并按一项小任务验证遵守；复述不等于强制执行。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Rules exist but are not followed.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check the plural filename AGENTS.md, directory, tool version, and loaded instructions.\nProposed approach: Ask AI to read and restate three rules. Claude Code support is conditional; check imports when CLAUDE.md exists. Older versions can import @AGENTS.md from CLAUDE.md. Remove conflicting rules.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: A new task identifies the rule source and follows it on a small edit; restating rules is not enforcement.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://code.claude.com/docs/en/memory',
        kind: 'official',
        label: 'Claude Code · Project instructions',
      },
      {
        url: 'https://www.reddit.com/r/ClaudeCode/comments/1njm40c/claude_ignores_claudemd_instructions_unless/',
        kind: 'user-report',
        label: 'Reddit · Original ignored-instructions report',
      },
    ],
  },
  {
    id: 'refine-jargon',
    stage: 'refine',
    title: ['AI 连续问术语，无法回答', 'AI asks questions full of jargon'],
    symptom: [
      '收到数据库、鉴权、框架等问题，只能随便选。',
      'Database, authentication, and framework questions force guesses.',
    ],
    check: [
      '把问题分成业务决定和可以暂缓的实现决定。',
      'Separate business decisions from implementation choices that can wait.',
    ],
    fix: [
      '让 AI 每次只问一个影响使用的问题，给两个生活化选项及后果；技术选择由 AI 先推荐理由，未知保留。',
      'Ask one usage question at a time with two plain-language options and consequences. Let AI recommend technical choices with reasons and preserve unknowns.',
    ],
    done: [
      '本人能复述选择影响，草稿中没有假装确认的答案。',
      'The owner can explain each decision, and no uncertain answer is recorded as confirmed.',
    ],
    prompt: [
      '我在【AI 连续问术语，无法回答】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：把问题分成业务决定和可以暂缓的实现决定。\n处理方向：让 AI 每次只问一个影响使用的问题，给两个生活化选项及后果；技术选择由 AI 先推荐理由，未知保留。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：本人能复述选择影响，草稿中没有假装确认的答案。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: AI asks questions full of jargon.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Separate business decisions from implementation choices that can wait.\nProposed approach: Ask one usage question at a time with two plain-language options and consequences. Let AI recommend technical choices with reasons and preserve unknowns.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The owner can explain each decision, and no uncertain answer is recorded as confirmed.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.lovable.dev/prompting/prompting-one',
        kind: 'official',
        label: 'Lovable · Prompting best practices',
      },
    ],
  },
  {
    id: 'refine-invented',
    stage: 'refine',
    title: ['AI 把猜测写成真实需求', 'AI invents requirements'],
    symptom: [
      '草稿没提会员或支付，整理结果却自动加上。',
      'Membership or payments appear despite never being requested.',
    ],
    check: [
      '逐条对照 idea.md，标出原文、推断和新增建议。',
      'Compare every item with idea.md; mark source, inference, and suggestion.',
    ],
    fix: [
      '请 AI 保留原始目标；新增项放待确认区，未确认前不进入实现清单。',
      'Keep the original goal. Put additions in an open-question section until confirmed.',
    ],
    done: [
      '每项已确认需求都能追溯到原始材料或本人明确决定。',
      'Every confirmed requirement maps to source material or an explicit owner decision.',
    ],
    prompt: [
      '我在【AI 把猜测写成真实需求】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：逐条对照 idea.md，标出原文、推断和新增建议。\n处理方向：请 AI 保留原始目标；新增项放待确认区，未确认前不进入实现清单。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：每项已确认需求都能追溯到原始材料或本人明确决定。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: AI invents requirements.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Compare every item with idea.md; mark source, inference, and suggestion.\nProposed approach: Keep the original goal. Put additions in an open-question section until confirmed.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Every confirmed requirement maps to source material or an explicit owner decision.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.lovable.dev/prompting/prompting-one',
        kind: 'official',
        label: 'Lovable · Prompting best practices',
      },
    ],
  },
  {
    id: 'scope-too-large',
    stage: 'scope',
    title: ['第一版越做越大', 'The first version keeps growing'],
    symptom: [
      '一个页面还没跑通，又加入支付、会员和后台。',
      'Payments, membership, and admin arrive before one page works.',
    ],
    check: [
      '找出没有它就无法完成主任务的能力。',
      'Identify what is essential to the main task.',
    ],
    fix: [
      '把功能分为本次必须、以后再做、明确不做；本次只留一条从输入到结果的完整流程。',
      'Sort features into required now, later, and excluded. Keep one complete input-to-result workflow.',
    ],
    done: [
      '本次范围有边界，新增想法进入候选清单而不是当前任务。',
      'The current scope is bounded; new ideas go to a backlog.',
    ],
    prompt: [
      '我在【第一版越做越大】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：找出没有它就无法完成主任务的能力。\n处理方向：把功能分为本次必须、以后再做、明确不做；本次只留一条从输入到结果的完整流程。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：本次范围有边界，新增想法进入候选清单而不是当前任务。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: The first version keeps growing.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Identify what is essential to the main task.\nProposed approach: Sort features into required now, later, and excluded. Keep one complete input-to-result workflow.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The current scope is bounded; new ideas go to a backlog.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/planning-and-tracking-work-for-your-team-or-project',
        kind: 'official',
        label: 'GitHub · Planning and tracking work',
      },
    ],
  },
  {
    id: 'scope-fake-complete',
    stage: 'scope',
    title: ['删减后只剩漂亮空壳', 'A smaller scope becomes an empty shell'],
    symptom: [
      '页面能看，关键提交、保存或查询被一起删掉。',
      'The page looks good but submitting or saving is missing.',
    ],
    check: [
      '检查缩小范围后还能否完成一个真实结果。',
      'Check whether the reduced scope still produces one real result.',
    ],
    fix: [
      '优先减少角色、数据种类和次要入口；保留一条可验证的主流程，模拟数据必须标注。',
      'Reduce roles, data types, and secondary entry points while keeping one verifiable workflow. Label mock data.',
    ],
    done: [
      '能说明哪些步骤真实执行，哪些仍用模拟数据。',
      'Real operations and simulated steps are explicitly distinguished.',
    ],
    prompt: [
      '我在【删减后只剩漂亮空壳】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：检查缩小范围后还能否完成一个真实结果。\n处理方向：优先减少角色、数据种类和次要入口；保留一条可验证的主流程，模拟数据必须标注。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：能说明哪些步骤真实执行，哪些仍用模拟数据。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: A smaller scope becomes an empty shell.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check whether the reduced scope still produces one real result.\nProposed approach: Reduce roles, data types, and secondary entry points while keeping one verifiable workflow. Label mock data.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Real operations and simulated steps are explicitly distinguished.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/planning-and-tracking-work-for-your-team-or-project',
        kind: 'official',
        label: 'GitHub · Planning and tracking work',
      },
    ],
  },
  {
    id: 'requirements-uncheckable',
    stage: 'requirements',
    title: ['“好看、好用”无法验收', '“Good-looking and easy” cannot be tested'],
    symptom: [
      'AI 和本人对完成的理解完全不同。',
      'AI and owner disagree on what completion means.',
    ],
    check: [
      '为每个功能写触发动作、输入和应出现的结果。',
      'Specify trigger, input, and observable result for each feature.',
    ],
    fix: [
      '把抽象要求改成可操作检查；比如“必填项空着提交时显示字段错误，并保留已填内容”。例子须替换成实际业务。',
      'Convert adjectives into checks. For example, an empty required field shows a field error while preserving entered data; adapt to the actual task.',
    ],
    done: [
      '另一人只读需求就能照步骤判断通过或失败。',
      'Another person can decide pass or fail from the written steps.',
    ],
    prompt: [
      '我在【“好看、好用”无法验收】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：为每个功能写触发动作、输入和应出现的结果。\n处理方向：把抽象要求改成可操作检查；比如“必填项空着提交时显示字段错误，并保留已填内容”。例子须替换成实际业务。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：另一人只读需求就能照步骤判断通过或失败。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: “Good-looking and easy” cannot be tested.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Specify trigger, input, and observable result for each feature.\nProposed approach: Convert adjectives into checks. For example, an empty required field shows a field error while preserving entered data; adapt to the actual task.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Another person can decide pass or fail from the written steps.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://playwright.dev/docs/best-practices',
        kind: 'official',
        label: 'Playwright · Testing best practices',
      },
    ],
  },
  {
    id: 'requirements-missing-states',
    stage: 'requirements',
    title: ['只写成功情况，异常时卡死', 'Only the happy path is specified'],
    symptom: [
      '没数据、断网、重复提交都没有约定。',
      'Empty data, failed requests, and repeated actions have no defined behavior.',
    ],
    check: [
      '逐项询问空内容、非法输入、等待、失败、重复操作时应如何显示。',
      'Check empty input, invalid input, waiting, failure, and repeated actions.',
    ],
    fix: [
      '给每项功能补一个正常和一个异常场景；说明错误后是否保留输入、重试或返回。',
      'Add one normal and one failure scenario per feature, including input preservation, retry, or return behavior.',
    ],
    done: [
      '需求包含成功与失败出口，不依赖 AI 临场猜测。',
      'Requirements define both success and failure exits.',
    ],
    prompt: [
      '我在【只写成功情况，异常时卡死】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：逐项询问空内容、非法输入、等待、失败、重复操作时应如何显示。\n处理方向：给每项功能补一个正常和一个异常场景；说明错误后是否保留输入、重试或返回。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：需求包含成功与失败出口，不依赖 AI 临场猜测。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Only the happy path is specified.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check empty input, invalid input, waiting, failure, and repeated actions.\nProposed approach: Add one normal and one failure scenario per feature, including input preservation, retry, or return behavior.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Requirements define both success and failure exits.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://playwright.dev/docs/best-practices',
        kind: 'official',
        label: 'Playwright · Testing best practices',
      },
    ],
  },
  {
    id: 'stack-overengineering',
    stage: 'stack',
    title: ['技术名单很多，无法比较', 'Too many technology options'],
    symptom: [
      'AI 给十个框架，却没有说明为什么适合当前项目。',
      'AI lists ten frameworks without connecting them to the project.',
    ],
    check: [
      '列出设备、登录、数据保存、公开访问和预算要求。',
      'List devices, login, persistence, public access, and budget needs.',
    ],
    fix: [
      '要求最多两套方案，逐项比较能否满足要求、维护工作和迁移代价；已有项目优先沿用，先做一条小流程证明可行。',
      'Request at most two options compared against requirements, maintenance, and migration cost. Prefer the existing stack and verify a small workflow.',
    ],
    done: [
      '选择记录有理由和限制，并有最小可运行验证。',
      'The decision states reasons and limits and has a minimal working proof.',
    ],
    prompt: [
      '我在【技术名单很多，无法比较】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：列出设备、登录、数据保存、公开访问和预算要求。\n处理方向：要求最多两套方案，逐项比较能否满足要求、维护工作和迁移代价；已有项目优先沿用，先做一条小流程证明可行。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：选择记录有理由和限制，并有最小可运行验证。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Too many technology options.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: List devices, login, persistence, public access, and budget needs.\nProposed approach: Request at most two options compared against requirements, maintenance, and migration cost. Prefer the existing stack and verify a small workflow.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The decision states reasons and limits and has a minimal working proof.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.lovable.dev/prompting/prompting-one',
        kind: 'official',
        label: 'Lovable · Prompting best practices',
      },
      {
        url: 'https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/',
        kind: 'official',
        label: 'npm · Install Node.js and npm',
      },
    ],
  },
  {
    id: 'stack-cost',
    stage: 'stack',
    title: [
      '订阅了 AI 仍被要求充值',
      'An AI subscription does not cover every bill',
    ],
    symptom: [
      '以为工具月费包含模型 API、数据库和部署全部费用。',
      'The project requests API, database, or hosting payments after subscribing.',
    ],
    check: [
      '分别查看工具订阅、模型/API、托管、数据库及外部服务的计费页面。',
      'Inspect the separate billing pages for tool, model/API, hosting, database, and integrations.',
    ],
    fix: [
      '列出本项目会用到的收费账户、免费额度及超额行为；先用测试数据做最小验证，未同意不启用付费升级。',
      'List paid accounts, included usage, and overage behavior. Test minimally before enabling upgrades.',
    ],
    done: [
      '每项服务有费用归属、预算上限或提醒；不把提醒误当强制封顶。',
      'Every service has a budget or alert; alerts are not described as hard caps.',
    ],
    prompt: [
      '我在【订阅了 AI 仍被要求充值】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：分别查看工具订阅、模型/API、托管、数据库及外部服务的计费页面。\n处理方向：列出本项目会用到的收费账户、免费额度及超额行为；先用测试数据做最小验证，未同意不启用付费升级。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：每项服务有费用归属、预算上限或提醒；不把提醒误当强制封顶。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: An AI subscription does not cover every bill.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Inspect the separate billing pages for tool, model/API, hosting, database, and integrations.\nProposed approach: List paid accounts, included usage, and overage behavior. Test minimally before enabling upgrades.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Every service has a budget or alert; alerts are not described as hard caps.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://vercel.com/docs/spend-management',
        kind: 'official',
        label: 'Vercel · Spend Management',
      },
    ],
  },
  {
    id: 'plan-vague-tasks',
    stage: 'plan',
    title: ['任务清单只有“完成前端”', 'Tasks are too vague'],
    symptom: [
      '下一步要做什么、何时算完成都不清楚。',
      '“Complete frontend” does not identify a next action or finish line.',
    ],
    check: [
      '检查每项是否有输入、单一结果和验证动作。',
      'Check each task for inputs, one output, and a verification action.',
    ],
    fix: [
      '将大任务拆成可单独演示的小步骤，先列依赖；当前仅开始第一项，不同时修改多条流程。',
      'Split work into independently demonstrable steps and list dependencies. Start only the first ready item.',
    ],
    done: [
      '每项都能指向可看到的产物与通过标准。',
      'Each task names a visible result and pass criteria.',
    ],
    prompt: [
      '我在【任务清单只有“完成前端”】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：检查每项是否有输入、单一结果和验证动作。\n处理方向：将大任务拆成可单独演示的小步骤，先列依赖；当前仅开始第一项，不同时修改多条流程。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：每项都能指向可看到的产物与通过标准。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Tasks are too vague.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check each task for inputs, one output, and a verification action.\nProposed approach: Split work into independently demonstrable steps and list dependencies. Start only the first ready item.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Each task names a visible result and pass criteria.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/planning-and-tracking-work-for-your-team-or-project',
        kind: 'official',
        label: 'GitHub · Planning and tracking work',
      },
    ],
  },
  {
    id: 'plan-lost-state',
    stage: 'plan',
    title: ['换对话后重新开始或漏任务', 'A new chat loses project progress'],
    symptom: [
      'AI 不知道上次完成到哪里，重复改文件。',
      'AI repeats edits or skips unfinished tasks.',
    ],
    check: [
      '读取 tasks/todo.md、当前 Git 状态和上次验证记录。',
      'Read tasks/todo.md, Git status, and the last verification record.',
    ],
    fix: [
      '保存已完成、正在做、卡点、下一项及对应文件；新对话先复述记录，再继续唯一的下一项。',
      'Record completed work, current work, blockers, next item, and relevant files. Restate this before continuing.',
    ],
    done: [
      '新对话可从记录接续，不靠记忆猜测进度。',
      'A fresh chat resumes from recorded evidence.',
    ],
    prompt: [
      '我在【换对话后重新开始或漏任务】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：读取 tasks/todo.md、当前 Git 状态和上次验证记录。\n处理方向：保存已完成、正在做、卡点、下一项及对应文件；新对话先复述记录，再继续唯一的下一项。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：新对话可从记录接续，不靠记忆猜测进度。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: A new chat loses project progress.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Read tasks/todo.md, Git status, and the last verification record.\nProposed approach: Record completed work, current work, blockers, next item, and relevant files. Restate this before continuing.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: A fresh chat resumes from recorded evidence.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.github.com/en/issues/tracking-your-work-with-issues/learning-about-issues/planning-and-tracking-work-for-your-team-or-project',
        kind: 'official',
        label: 'GitHub · Planning and tracking work',
      },
      {
        url: 'https://code.claude.com/docs/en/memory',
        kind: 'official',
        label: 'Claude Code · Project instructions',
      },
    ],
  },
  {
    id: 'environment-git',
    stage: 'environment',
    title: [
      'Git 初始化或首次提交失败',
      'Git initialization or the first commit fails',
    ],
    symptom: [
      '出现 not a git repository、Author identity unknown，或仓库包含无关目录。',
      'Git reports no repository, unknown identity, or includes unrelated folders.',
    ],
    check: [
      '确认项目根目录、git --version、git rev-parse --show-toplevel 和 git status。',
      'Check project root, git --version, git rev-parse --show-toplevel, and git status.',
    ],
    fix: [
      '新项目根目录才执行 git init；父目录已有仓库先确认归属。身份缺失时由本人提供姓名与邮箱，只设置当前仓库；检查忽略文件和暂存差异后再提交。',
      'Initialize only a new project root. Inspect ancestor repositories first. Ask the owner for commit name/email and configure this repository only. Review ignored and staged files before committing.',
    ],
    done: [
      '仓库根目录正确，git log -1 显示本次提交，密钥和无关文件未被跟踪。',
      'The root is correct and git log -1 shows the intended commit without secrets or unrelated files.',
    ],
    prompt: [
      '我在【Git 初始化或首次提交失败】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：确认项目根目录、git --version、git rev-parse --show-toplevel 和 git status。\n处理方向：新项目根目录才执行 git init；父目录已有仓库先确认归属。身份缺失时由本人提供姓名与邮箱，只设置当前仓库；检查忽略文件和暂存差异后再提交。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：仓库根目录正确，git log -1 显示本次提交，密钥和无关文件未被跟踪。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Git initialization or the first commit fails.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check project root, git --version, git rev-parse --show-toplevel, and git status.\nProposed approach: Initialize only a new project root. Inspect ancestor repositories first. Ask the owner for commit name/email and configure this repository only. Review ignored and staged files before committing.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The root is correct and git log -1 shows the intended commit without secrets or unrelated files.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://git-scm.com/docs/git-init',
        kind: 'official',
        label: 'Git · git init',
      },
      {
        url: 'https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git',
        kind: 'official',
        label: 'GitHub · Commit username',
      },
      {
        url: 'https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address',
        kind: 'official',
        label: 'GitHub · Commit email',
      },
    ],
  },
  {
    id: 'environment-start',
    stage: 'environment',
    title: [
      '依赖安装失败或预览打不开',
      'Dependencies fail or preview refuses to open',
    ],
    symptom: [
      '看到 command not found、安装报错或浏览器拒绝连接。',
      'A command is missing, installation fails, or the browser refuses a connection.',
    ],
    check: [
      '读取 README、项目版本文件、锁文件和终端第一条错误，确认当前目录。',
      'Read README, version files, lockfile, the first terminal error, and current directory.',
    ],
    fix: [
      '按项目要求安装运行时和匹配的包管理器；不要混用锁文件。启动项目已定义的命令，保持进程运行，打开终端实际给出的地址与端口。仍失败则检查监听地址与日志。',
      'Use the required runtime and matching package manager; do not mix lockfiles. Run the defined start command, keep it running, and open its actual URL and port. Inspect logs and listening address if needed.',
    ],
    done: [
      '同一地址能加载页面；终端无启动失败，记录实际命令和版本。',
      'The actual URL loads and the terminal has no startup failure; record commands and versions.',
    ],
    prompt: [
      '我在【依赖安装失败或预览打不开】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：读取 README、项目版本文件、锁文件和终端第一条错误，确认当前目录。\n处理方向：按项目要求安装运行时和匹配的包管理器；不要混用锁文件。启动项目已定义的命令，保持进程运行，打开终端实际给出的地址与端口。仍失败则检查监听地址与日志。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：同一地址能加载页面；终端无启动失败，记录实际命令和版本。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Dependencies fail or preview refuses to open.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Read README, version files, lockfile, the first terminal error, and current directory.\nProposed approach: Use the required runtime and matching package manager; do not mix lockfiles. Run the defined start command, keep it running, and open its actual URL and port. Inspect logs and listening address if needed.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The actual URL loads and the terminal has no startup failure; record commands and versions.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/',
        kind: 'official',
        label: 'npm · Install Node.js and npm',
      },
      {
        url: 'https://docs.astro.build/en/develop-and-build/',
        kind: 'official',
        label: 'Astro · Develop and build',
      },
      {
        url: 'https://github.com/vitejs/vite/discussions/14754',
        kind: 'user-report',
        label: 'Vite · Original connection-refused report',
      },
    ],
  },
  {
    id: 'build-repair-loop',
    stage: 'build',
    title: ['连续“修复”却越来越坏', 'Repeated repairs make things worse'],
    symptom: [
      '同一报错来回出现，还不断改动别的页面。',
      'The error recurs while unrelated pages change.',
    ],
    check: [
      '保留完整报错、复现步骤及首次出错前后的差异。',
      'Save the exact error, reproduction steps, and changes around the first failure.',
    ],
    fix: [
      '暂停大改；让 AI 提出一个可验证原因，先复现，再只改相关位置；失败记录结果后换假设，不盲目重复同一操作。',
      'Pause broad edits. Test one cause, reproduce it, and make a localized fix. Record failed attempts before trying another hypothesis.',
    ],
    done: [
      '原步骤通过，相关原有流程仍可用，改动原因可解释。',
      'The original steps pass and related existing behavior still works.',
    ],
    prompt: [
      '我在【连续“修复”却越来越坏】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：保留完整报错、复现步骤及首次出错前后的差异。\n处理方向：暂停大改；让 AI 提出一个可验证原因，先复现，再只改相关位置；失败记录结果后换假设，不盲目重复同一操作。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：原步骤通过，相关原有流程仍可用，改动原因可解释。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Repeated repairs make things worse.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Save the exact error, reproduction steps, and changes around the first failure.\nProposed approach: Pause broad edits. Test one cause, reproduce it, and make a localized fix. Record failed attempts before trying another hypothesis.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The original steps pass and related existing behavior still works.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.lovable.dev/features/projects/chat',
        kind: 'official',
        label: 'Lovable · Project chat and debugging',
      },
    ],
  },
  {
    id: 'build-changed-too-much',
    stage: 'build',
    title: ['一次修改影响了多个地方', 'A small request changes too much'],
    symptom: [
      '只要求改按钮，布局、数据或依赖也被重写。',
      'A button change rewrites layout, data, or dependencies.',
    ],
    check: [
      '查看 Git 差异，区分本次必要改动与无关改动。',
      'Review Git differences and separate required from unrelated edits.',
    ],
    fix: [
      '保留已有用户改动；只撤回本次造成的无关部分，不能整仓库强制重置。随后按明确范围重新修改并检查关联页面。',
      'Preserve pre-existing work. Revert only unrelated changes caused by this task; do not hard-reset the repository. Reapply a bounded change and inspect affected pages.',
    ],
    done: [
      '差异能逐项解释，未要求的页面和行为保持原样。',
      'Each difference is justified; unrelated behavior is preserved.',
    ],
    prompt: [
      '我在【一次修改影响了多个地方】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：查看 Git 差异，区分本次必要改动与无关改动。\n处理方向：保留已有用户改动；只撤回本次造成的无关部分，不能整仓库强制重置。随后按明确范围重新修改并检查关联页面。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：差异能逐项解释，未要求的页面和行为保持原样。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: A small request changes too much.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Review Git differences and separate required from unrelated edits.\nProposed approach: Preserve pre-existing work. Revert only unrelated changes caused by this task; do not hard-reset the repository. Reapply a bounded change and inspect affected pages.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Each difference is justified; unrelated behavior is preserved.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.lovable.dev/features/projects/chat',
        kind: 'official',
        label: 'Lovable · Project chat and debugging',
      },
      {
        url: 'https://git-scm.com/docs/git-init',
        kind: 'official',
        label: 'Git · git init',
      },
    ],
  },
  {
    id: 'ui-style',
    stage: 'ui',
    title: [
      '只说“高级感”，结果不符合预期',
      '“Make it premium” produces the wrong style',
    ],
    symptom: [
      '不断换颜色但仍说不出哪里不对。',
      'Colors change repeatedly without a shared target.',
    ],
    check: [
      '先确定阅读任务、信息优先级与实际参考图。',
      'Identify the reading task, information priority, and actual references.',
    ],
    fix: [
      '提供页面目的、主要操作、疏密、字体层级、颜色和参考图中具体借鉴点；不确定时只做两张代表性小样再选方向。',
      'Specify purpose, main action, density, type hierarchy, colors, and particular reference details. Compare two small samples when uncertain.',
    ],
    done: [
      '选定一个方向，有可重复应用的样式记录。',
      'One direction is selected with reusable style notes.',
    ],
    prompt: [
      '我在【只说“高级感”，结果不符合预期】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：先确定阅读任务、信息优先级与实际参考图。\n处理方向：提供页面目的、主要操作、疏密、字体层级、颜色和参考图中具体借鉴点；不确定时只做两张代表性小样再选方向。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：选定一个方向，有可重复应用的样式记录。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: “Make it premium” produces the wrong style.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Identify the reading task, information priority, and actual references.\nProposed approach: Specify purpose, main action, density, type hierarchy, colors, and particular reference details. Compare two small samples when uncertain.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: One direction is selected with reusable style notes.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like',
        kind: 'official',
        label: 'MDN · Plan a first website',
      },
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts',
        kind: 'official',
        label: 'MDN · Common web layouts',
      },
    ],
  },
  {
    id: 'ui-target',
    stage: 'ui',
    title: ['局部修改变成全站改版', 'A local edit becomes a site redesign'],
    symptom: [
      '无法准确描述组件位置，AI 猜错了对象。',
      'The target is unclear and AI edits the wrong component.',
    ],
    check: [
      '用页面地址、可见标题和标注截图确定目标，检查是否共享组件。',
      'Identify the page, visible heading, and annotated screenshot; check shared usage.',
    ],
    fix: [
      '按“位置→现在→期望→不变→范围”描述；要求先圈定或复述目标，再只修改该区域；同时检查手机与桌面显示。',
      'Describe location, current state, desired state, invariants, and scope. Confirm the target before editing and inspect mobile and desktop views.',
    ],
    done: [
      '指定区域达到目标，其他使用同一组件的页面经过检查。',
      'The target is correct and shared-component pages have been checked.',
    ],
    prompt: [
      '我在【局部修改变成全站改版】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：用页面地址、可见标题和标注截图确定目标，检查是否共享组件。\n处理方向：按“位置→现在→期望→不变→范围”描述；要求先圈定或复述目标，再只修改该区域；同时检查手机与桌面显示。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：指定区域达到目标，其他使用同一组件的页面经过检查。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: A local edit becomes a site redesign.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Identify the page, visible heading, and annotated screenshot; check shared usage.\nProposed approach: Describe location, current state, desired state, invariants, and scope. Confirm the target before editing and inspect mobile and desktop views.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The target is correct and shared-component pages have been checked.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts',
        kind: 'official',
        label: 'MDN · Common web layouts',
      },
    ],
  },
  {
    id: 'backend-empty',
    stage: 'backend',
    title: [
      '数据库有数据，页面却是空的',
      'The table has rows but the page is empty',
    ],
    symptom: [
      '查询没有明显报错，却返回空数组。',
      'A query returns an empty array without an obvious error.',
    ],
    check: [
      '先确认连接的项目、表名、筛选条件和当前登录身份，再查读取策略。',
      'Check project, table, filters, session, and read policy.',
    ],
    fix: [
      '用测试身份复现；检查查询条件及对应角色的读取权限，按业务补最小权限策略。不要通过关闭 RLS 或把管理密钥放前端解决。',
      'Reproduce as a test user and repair the specific query or minimal read policy. Do not disable RLS or expose an administrative key in frontend code.',
    ],
    done: [
      '允许的账号能读到应有记录，另一账号仍看不到私有记录。',
      'The allowed account sees the expected rows; another account cannot read private rows.',
    ],
    prompt: [
      '我在【数据库有数据，页面却是空的】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：先确认连接的项目、表名、筛选条件和当前登录身份，再查读取策略。\n处理方向：用测试身份复现；检查查询条件及对应角色的读取权限，按业务补最小权限策略。不要通过关闭 RLS 或把管理密钥放前端解决。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：允许的账号能读到应有记录，另一账号仍看不到私有记录。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: The table has rows but the page is empty.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check project, table, filters, session, and read policy.\nProposed approach: Reproduce as a test user and repair the specific query or minimal read policy. Do not disable RLS or expose an administrative key in frontend code.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The allowed account sees the expected rows; another account cannot read private rows.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://supabase.com/docs/guides/troubleshooting/why-is-my-select-returning-an-empty-data-array-and-i-have-data-in-the-table-xvOPgx',
        kind: 'official',
        label: 'Supabase · Empty query results',
      },
      {
        url: 'https://supabase.com/docs/guides/database/postgres/row-level-security',
        kind: 'official',
        label: 'Supabase · Row Level Security',
      },
      {
        url: 'https://github.com/orgs/supabase/discussions/33500',
        kind: 'user-report',
        label: 'Supabase · Original empty-query report',
      },
    ],
  },
  {
    id: 'backend-not-saved',
    stage: 'backend',
    title: [
      '提交显示成功，刷新后数据消失',
      'Saved data disappears after refresh',
    ],
    symptom: [
      '表单清空了，但记录只存在当前页面。',
      'The form clears, but the record only exists in page state.',
    ],
    check: [
      '确认请求是否真正成功，数据写到本地状态、浏览器存储还是服务器数据库。',
      'Check request results and whether storage is page state, browser storage, or the server database.',
    ],
    fix: [
      '只有服务器确认保存后才显示成功；失败保留输入并给重试入口。用测试记录提交，再刷新或重新登录查询。',
      'Show success only after confirmed persistence. Preserve input on failure and support retry. Submit a test record and query after refresh or login.',
    ],
    done: [
      '记录跨刷新仍存在，失败时不会误显示成功。',
      'The record survives refresh; failures never show false success.',
    ],
    prompt: [
      '我在【提交显示成功，刷新后数据消失】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：确认请求是否真正成功，数据写到本地状态、浏览器存储还是服务器数据库。\n处理方向：只有服务器确认保存后才显示成功；失败保留输入并给重试入口。用测试记录提交，再刷新或重新登录查询。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：记录跨刷新仍存在，失败时不会误显示成功。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Saved data disappears after refresh.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check request results and whether storage is page state, browser storage, or the server database.\nProposed approach: Show success only after confirmed persistence. Preserve input on failure and support retry. Submit a test record and query after refresh or login.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The record survives refresh; failures never show false success.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://supabase.com/docs/guides/database/postgres/row-level-security',
        kind: 'official',
        label: 'Supabase · Row Level Security',
      },
      {
        url: 'https://playwright.dev/docs/best-practices',
        kind: 'official',
        label: 'Playwright · Testing best practices',
      },
    ],
  },
  {
    id: 'flow-duplicate',
    stage: 'flow',
    title: ['重复点击产生多条记录', 'Repeated clicks create duplicate records'],
    symptom: [
      '网络慢时点了多次，出现重复订单或重复操作。',
      'Slow requests encourage repeated submissions.',
    ],
    check: [
      '检查按钮等待状态、请求次数和服务端是否防重复。',
      'Inspect loading state, request count, and server duplicate protection.',
    ],
    fix: [
      '提交期间显示处理中并防止重复触发；对需要保证唯一的业务由服务端验证唯一请求，失败允许明确重试。',
      'Show progress and prevent repeated triggering. Enforce request uniqueness server-side when required and provide explicit retries.',
    ],
    done: [
      '快速连点和重试测试不会造成不应出现的重复结果。',
      'Rapid clicks and retries do not produce unintended duplicates.',
    ],
    prompt: [
      '我在【重复点击产生多条记录】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：检查按钮等待状态、请求次数和服务端是否防重复。\n处理方向：提交期间显示处理中并防止重复触发；对需要保证唯一的业务由服务端验证唯一请求，失败允许明确重试。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：快速连点和重试测试不会造成不应出现的重复结果。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Repeated clicks create duplicate records.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Inspect loading state, request count, and server duplicate protection.\nProposed approach: Show progress and prevent repeated triggering. Enforce request uniqueness server-side when required and provide explicit retries.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Rapid clicks and retries do not produce unintended duplicates.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://playwright.dev/docs/best-practices',
        kind: 'official',
        label: 'Playwright · Testing best practices',
      },
    ],
  },
  {
    id: 'flow-dead-end',
    stage: 'flow',
    title: ['跳转或失败后不知道去哪', 'The workflow has dead ends'],
    symptom: [
      '提交后停在空白页，返回又丢失已填内容。',
      'Submitting opens a blank screen or returning loses the draft.',
    ],
    check: [
      '画出入口、操作、等待、成功、失败和返回六种状态。',
      'Map entry, action, waiting, success, failure, and return states.',
    ],
    fix: [
      '逐段连线，每个状态写一个下一步；成功显示结果入口，失败保留可恢复信息；检查返回与直接打开链接。',
      'Give every state a next action, a result entry on success, and recoverable input on failure. Test back navigation and direct links.',
    ],
    done: [
      '从任一状态都有合理出口，主流程和失败恢复都能走通。',
      'Every state has an exit and both normal and recovery paths work.',
    ],
    prompt: [
      '我在【跳转或失败后不知道去哪】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：画出入口、操作、等待、成功、失败和返回六种状态。\n处理方向：逐段连线，每个状态写一个下一步；成功显示结果入口，失败保留可恢复信息；检查返回与直接打开链接。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：从任一状态都有合理出口，主流程和失败恢复都能走通。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: The workflow has dead ends.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Map entry, action, waiting, success, failure, and return states.\nProposed approach: Give every state a next action, a result entry on success, and recoverable input on failure. Test back navigation and direct links.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Every state has an exit and both normal and recovery paths work.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts',
        kind: 'official',
        label: 'MDN · Common web layouts',
      },
      {
        url: 'https://playwright.dev/docs/best-practices',
        kind: 'official',
        label: 'Playwright · Testing best practices',
      },
    ],
  },
  {
    id: 'test-looks-fine',
    stage: 'test',
    title: [
      '页面能打开就认为测试通过',
      'Opening a page is mistaken for a passed test',
    ],
    symptom: [
      '没有实际提交、刷新、登录或权限检查。',
      'No submit, refresh, login, or access check has been performed.',
    ],
    check: [
      '把检查项对照需求，而不是对照截图。',
      'Compare tests with requirements, not screenshots.',
    ],
    fix: [
      '实际走一次主流程，再检查空输入、错误输入、失败和第二个测试账号；逐项记录预期、实际及证据。',
      'Run the main workflow, invalid and empty input, failure recovery, and a second test account. Record expected and actual outcomes with evidence.',
    ],
    done: [
      '记录区分通过、失败、未执行，页面截图不替代操作结果。',
      'Results distinguish passed, failed, and untested; screenshots do not replace operations.',
    ],
    prompt: [
      '我在【页面能打开就认为测试通过】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：把检查项对照需求，而不是对照截图。\n处理方向：实际走一次主流程，再检查空输入、错误输入、失败和第二个测试账号；逐项记录预期、实际及证据。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：记录区分通过、失败、未执行，页面截图不替代操作结果。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Opening a page is mistaken for a passed test.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Compare tests with requirements, not screenshots.\nProposed approach: Run the main workflow, invalid and empty input, failure recovery, and a second test account. Record expected and actual outcomes with evidence.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Results distinguish passed, failed, and untested; screenshots do not replace operations.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://playwright.dev/docs/best-practices',
        kind: 'official',
        label: 'Playwright · Testing best practices',
      },
    ],
  },
  {
    id: 'test-bad-report',
    stage: 'test',
    title: [
      '只发“不能用”，AI 无法复现',
      '“It does not work” cannot be reproduced',
    ],
    symptom: [
      '修复反复猜测，双方看到的结果不同。',
      'Repairs rely on guesses and different observed states.',
    ],
    check: [
      '记录设备、页面地址、操作顺序、实际结果与期望结果。',
      'Record device, URL, exact steps, actual result, and expected result.',
    ],
    fix: [
      '从干净测试状态重试，附完整报错或截图，隐去私人数据；一次报告一个问题，注明是否每次出现。',
      'Retry from a known test state, attach error or screenshot with sensitive data removed, and report one issue with repeatability.',
    ],
    done: [
      'AI 或另一人能按记录复现同一现象。',
      'Another person can reproduce the same behavior from the report.',
    ],
    prompt: [
      '我在【只发“不能用”，AI 无法复现】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：记录设备、页面地址、操作顺序、实际结果与期望结果。\n处理方向：从干净测试状态重试，附完整报错或截图，隐去私人数据；一次报告一个问题，注明是否每次出现。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：AI 或另一人能按记录复现同一现象。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: “It does not work” cannot be reproduced.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Record device, URL, exact steps, actual result, and expected result.\nProposed approach: Retry from a known test state, attach error or screenshot with sensitive data removed, and report one issue with repeatability.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Another person can reproduce the same behavior from the report.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://docs.lovable.dev/features/projects/chat',
        kind: 'official',
        label: 'Lovable · Project chat and debugging',
      },
    ],
  },
  {
    id: 'accept-ai-pass',
    stage: 'accept',
    title: [
      'AI 说完成，本人仍不会用',
      'AI reports completion but the owner cannot use it',
    ],
    symptom: [
      '所有检查变绿，但实际任务依然完成不了。',
      'Checks pass while the real task remains difficult.',
    ],
    check: [
      '选一个真实使用任务，由本人不看代码直接操作。',
      'Choose a real task and have the owner operate without reading code.',
    ],
    fix: [
      '按需求从入口做到结果；记录停顿、误解和绕路，优先修阻塞，不以测试数量代替验收。',
      'Walk from entry to result, record confusion and detours, and fix blockers before polish. Test counts do not replace acceptance.',
    ],
    done: [
      '本人独立完成主任务，并明确列出尚未满足的需求。',
      'The owner completes the main task and identifies remaining requirements.',
    ],
    prompt: [
      '我在【AI 说完成，本人仍不会用】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：选一个真实使用任务，由本人不看代码直接操作。\n处理方向：按需求从入口做到结果；记录停顿、误解和绕路，优先修阻塞，不以测试数量代替验收。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：本人独立完成主任务，并明确列出尚未满足的需求。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: AI reports completion but the owner cannot use it.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Choose a real task and have the owner operate without reading code.\nProposed approach: Walk from entry to result, record confusion and detours, and fix blockers before polish. Test counts do not replace acceptance.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: The owner completes the main task and identifies remaining requirements.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like',
        kind: 'official',
        label: 'MDN · Plan a first website',
      },
      {
        url: 'https://playwright.dev/docs/best-practices',
        kind: 'official',
        label: 'Playwright · Testing best practices',
      },
    ],
  },
  {
    id: 'accept-fake-data',
    stage: 'accept',
    title: [
      '演示正常，真实材料就出问题',
      'Demo data works but real material fails',
    ],
    symptom: [
      '短标题、少量样例正常，长文字或真实图片破版。',
      'Long text, real images, or larger lists break the demo.',
    ],
    check: [
      '比较演示材料与实际材料的长度、格式、数量和缺失情况。',
      'Compare real and demo lengths, formats, volumes, and missing values.',
    ],
    fix: [
      '用脱敏真实材料做验收；检查长文本、缺图、空列表和手机宽度，记录原数据未覆盖的情况。',
      'Accept using redacted real material; check long text, missing images, empty lists, and phone width.',
    ],
    done: [
      '代表性实际材料可用，未覆盖条件仍明确标注。',
      'Representative material works, with remaining coverage gaps listed.',
    ],
    prompt: [
      '我在【演示正常，真实材料就出问题】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：比较演示材料与实际材料的长度、格式、数量和缺失情况。\n处理方向：用脱敏真实材料做验收；检查长文本、缺图、空列表和手机宽度，记录原数据未覆盖的情况。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：代表性实际材料可用，未覆盖条件仍明确标注。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Demo data works but real material fails.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Compare real and demo lengths, formats, volumes, and missing values.\nProposed approach: Accept using redacted real material; check long text, missing images, empty lists, and phone width.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Representative material works, with remaining coverage gaps listed.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Design_and_accessibility/Common_web_layouts',
        kind: 'official',
        label: 'MDN · Common web layouts',
      },
      {
        url: 'https://playwright.dev/docs/best-practices',
        kind: 'official',
        label: 'Playwright · Testing best practices',
      },
    ],
  },
  {
    id: 'launch-build',
    stage: 'launch',
    title: [
      '本地可用，上线构建失败',
      'Local development works but deployment fails',
    ],
    symptom: [
      '部署日志变红，或线上找不到资源。',
      'Build logs fail or production assets are missing.',
    ],
    check: [
      '从部署日志第一条错误检查运行时版本、构建命令、输出目录和文件名大小写。',
      'Inspect the first build error, runtime, build command, output directory, and filename case.',
    ],
    fix: [
      '在本地运行同一生产构建；修复具体差异，再生成预览部署；先检查页面和主流程再切正式地址。',
      'Run the same production build locally, fix the specific mismatch, and verify a preview deployment before promotion.',
    ],
    done: [
      '生产构建成功且预览地址完成主流程，不仅是部署状态成功。',
      'Production build succeeds and the preview completes the workflow.',
    ],
    prompt: [
      '我在【本地可用，上线构建失败】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：从部署日志第一条错误检查运行时版本、构建命令、输出目录和文件名大小写。\n处理方向：在本地运行同一生产构建；修复具体差异，再生成预览部署；先检查页面和主流程再切正式地址。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：生产构建成功且预览地址完成主流程，不仅是部署状态成功。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Local development works but deployment fails.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Inspect the first build error, runtime, build command, output directory, and filename case.\nProposed approach: Run the same production build locally, fix the specific mismatch, and verify a preview deployment before promotion.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Production build succeeds and the preview completes the workflow.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://vercel.com/docs/deployments/troubleshoot-a-build',
        kind: 'official',
        label: 'Vercel · Build troubleshooting',
      },
    ],
  },
  {
    id: 'launch-config',
    stage: 'launch',
    title: ['线上登录或接口失败', 'Production login or API requests fail'],
    symptom: [
      '本地正常，线上却报缺少变量或登录回跳错误。',
      'Local behavior works but production reports missing variables or redirects.',
    ],
    check: [
      '核对环境变量名称及部署环境、接口地址、登录回调域名；只显示变量名，不输出值。',
      'Check variable names and environment, API URL, and allowed callback domain; never print secret values.',
    ],
    fix: [
      '在平台正确环境配置变量与回调地址，必要时重新部署；使用线上测试账号验证，不把密钥写进前端文件。',
      'Configure the correct deployment environment and callbacks, redeploy when required, and test with a production test account.',
    ],
    done: [
      '正式域名下登录、读写及退出通过，秘密值未出现在浏览器代码中。',
      'Login, data operations, and logout work on the target domain without exposing secrets.',
    ],
    prompt: [
      '我在【线上登录或接口失败】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：核对环境变量名称及部署环境、接口地址、登录回调域名；只显示变量名，不输出值。\n处理方向：在平台正确环境配置变量与回调地址，必要时重新部署；使用线上测试账号验证，不把密钥写进前端文件。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：正式域名下登录、读写及退出通过，秘密值未出现在浏览器代码中。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Production login or API requests fail.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Check variable names and environment, API URL, and allowed callback domain; never print secret values.\nProposed approach: Configure the correct deployment environment and callbacks, redeploy when required, and test with a production test account.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Login, data operations, and logout work on the target domain without exposing secrets.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://vercel.com/docs/deployments/troubleshoot-a-build',
        kind: 'official',
        label: 'Vercel · Build troubleshooting',
      },
      {
        url: 'https://supabase.com/docs/guides/database/postgres/row-level-security',
        kind: 'official',
        label: 'Supabase · Row Level Security',
      },
    ],
  },
  {
    id: 'maintain-bill',
    stage: 'maintain',
    title: ['上线后费用突然增长', 'Costs rise after release'],
    symptom: [
      '收到超额账单，却不知道哪项服务消耗最多。',
      'An overage bill arrives without an obvious cause.',
    ],
    check: [
      '查看各平台用量明细、时间段与最近变更，区分订阅费和按量费。',
      'Inspect per-service usage, time range, recent changes, and subscription versus metered charges.',
    ],
    fix: [
      '给托管、模型与数据库分别设提醒或平台支持的硬限制；限制无界循环和滥用入口，先用日志定位再调整。',
      'Configure alerts or supported hard limits per platform. Investigate logs for loops or abuse before changing behavior.',
    ],
    done: [
      '能解释主要费用来源，提醒已验证，明确哪些限制会暂停服务。',
      'Major costs are explained; alerts are checked and service-pausing limits are identified.',
    ],
    prompt: [
      '我在【上线后费用突然增长】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：查看各平台用量明细、时间段与最近变更，区分订阅费和按量费。\n处理方向：给托管、模型与数据库分别设提醒或平台支持的硬限制；限制无界循环和滥用入口，先用日志定位再调整。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：能解释主要费用来源，提醒已验证，明确哪些限制会暂停服务。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Costs rise after release.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Inspect per-service usage, time range, recent changes, and subscription versus metered charges.\nProposed approach: Configure alerts or supported hard limits per platform. Investigate logs for loops or abuse before changing behavior.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: Major costs are explained; alerts are checked and service-pausing limits are identified.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://vercel.com/docs/spend-management',
        kind: 'official',
        label: 'Vercel · Spend Management',
      },
    ],
  },
  {
    id: 'maintain-restore',
    stage: 'maintain',
    title: [
      '有 Git，却恢复不了用户数据',
      'Git cannot restore deleted user data',
    ],
    symptom: [
      '误删数据库记录后，恢复代码没有恢复数据。',
      'Restoring code does not restore database records.',
    ],
    check: [
      '分别核对代码版本、数据库备份、文件存储备份和可恢复时间。',
      'Inspect code history, database backups, file-storage backups, and recovery points separately.',
    ],
    fix: [
      '建立各自备份计划，在隔离测试环境恢复一份备份并核对记录；不要在生产库直接试恢复。数据库备份未必包含上传文件。',
      'Restore a backup in an isolated test environment and verify records. Do not practice on production. Database backups may exclude uploaded files.',
    ],
    done: [
      '有经过测试的恢复步骤、数据时间点和存储文件范围。',
      'A tested restoration procedure identifies recovery time and file coverage.',
    ],
    prompt: [
      '我在【有 Git，却恢复不了用户数据】这一步遇到问题。\n项目与工具：[填写名称、版本和项目路径]\n实际现象：[填写操作步骤、报错原文或附截图；隐去密钥和个人数据]\n期望结果：[填写实际目标]\n请先检查：分别核对代码版本、数据库备份、文件存储备份和可恢复时间。\n处理方向：建立各自备份计划，在隔离测试环境恢复一份备份并核对记录；不要在生产库直接试恢复。数据库备份未必包含上传文件。\n请先说明证据和原因，再执行最小范围修复；保留已有改动，不扩展功能。需要我操作时，一次给出一个位置明确的动作，并说明应当看到什么。\n验证标准：有经过测试的恢复步骤、数据时间点和存储文件范围。\n最后列出实际验证结果、未验证项和下一步。',
      'I am blocked at: Git cannot restore deleted user data.\nProject and tool: [name, version, and project path]\nObserved behavior: [steps, exact error, or screenshot; remove secrets and personal data]\nExpected result: [actual goal]\nFirst inspect: Inspect code history, database backups, file-storage backups, and recovery points separately.\nProposed approach: Restore a backup in an isolated test environment and verify records. Do not practice on production. Database backups may exclude uploaded files.\nExplain the evidence and cause before making the smallest relevant fix. Preserve existing changes and do not add features. If I must act, give one precise action at a time and its expected visible result.\nSuccess criteria: A tested restoration procedure identifies recovery time and file coverage.\nReport actual checks, unchecked items, and the next step.',
    ],
    sources: [
      {
        url: 'https://supabase.com/docs/guides/platform/backups',
        kind: 'official',
        label: 'Supabase · Database backups',
      },
    ],
  },
];
