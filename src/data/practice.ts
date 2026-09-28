import type {Copy} from './site';
export interface Practice {path:string;stage:string;title:Copy;intro:Copy;input:Copy;steps:{title:Copy;body:Copy;check:Copy;example?:Copy}[];templates:{id:string;title:Copy;text:Copy;kind?:'file'|'prompt'}[];next:string;nextLabel:Copy;sources?:{label:string;href:string}[]}
const handoff=(task:Copy,inputs:Copy,output:Copy):Copy=>[
`【背景】【填写项目用途与给谁使用】
【当前问题】【填写正在遇到的困难或希望完成的变化】
【输入材料】${inputs[0]}
【本次任务】${task[0]}
【约束】保留已确认范围和现有工作，不做无关修改。

请按以下顺序执行：
1. 先读取材料并复述目标；缺少会影响结果的信息时，先问一个关键问题。
2. 能由 AI 完成的读取、整理、修改和检查请直接执行；需要本人操作时说明在哪个页面点击什么。
3. 已有项目实施前保留可恢复版本；首次空目录先保留新建文件，Git准备完成后再建立起点提交。不要覆盖现有未确认改动。
4. 给出实际产物、文件位置与当前预览，不把方案当作已经执行。
【需要交付】${output[0]}
【检查标准】逐项对照本次目标，报告实际检查、未验证项和下一步。删除资料、付费、扩大访问或公开发布前等待明确确认。`,
`[Background] [fill in product purpose and audience]
[Problem] [fill in current difficulty or desired change]
[Inputs] ${inputs[1]}
[Task] ${task[1]}
[Limits] Preserve approved scope and existing work; avoid unrelated changes.

Work in this order:
1. Read the material and restate the goal. Ask one essential question when missing information affects the result.
2. Perform reading, organization, edits, and checks that AI can handle. For personal actions, identify the page and control.
3. Preserve a recoverable version and unapproved existing changes before editing.
4. Provide actual artifacts, file locations, and the current preview; a plan is not executed work.
[Deliverables] ${output[1]}
[Acceptance] Check the goal item by item and report actual checks, unverified work, and next steps. Await explicit confirmation before deletion, payment, expanded access, or public release.`];
export const agentsTemplate:Copy=[`# 项目协作说明

## 项目目标
- 项目用途：待填写。
- 使用者：待填写。
- 第一版范围：读取 docs/requirements.md；尚不存在时先提问确认。
- 暂不做的事：以确认的需求为准，不自行增加。

## 开始任务前
1. 读取本文件、README.md、docs/requirements.md、docs/design.md 和 tasks/todo.md 中已存在的内容。
2. 核对当前项目目录、Git 状态和未提交变化。不存在的文件先说明，不编造。
3. 复述本次目标及完成标准，只问会实质影响结果的缺失信息。

## 实施方式
- 能自动完成的读取、整理、实现和检查直接完成。
- 每次交付一个可以打开检查的小版本，保留已有工作，不无关重构。
- 使用当前项目已经采用的技术和样式；变更方案先解释原因与影响。
- 用普通话解释技术词，提供具体点击步骤和预期画面。

## 项目命令（由 AI 核对后填写，不猜测）
- 安装依赖：待确认。
- 启动预览：待确认。
- 检查代码：待确认。
- 构建产物：待确认。
- 项目尚未建立时，以上保持待确认；环境准备完成后补齐。

## 检查与完成
- 对照需求检查正常操作、空值、失败和受影响的旧功能。
- 将实际执行、通过、失败和未验证项分别写入 docs/checks.md。
- 更新 tasks/todo.md 的状态；给出文件位置、当前预览和下一步。
- 构建成功不能替代人工试用，未执行的检查不能说通过。

## 版本与资料
- 修改前确认可以找回当前版本；检查通过后提交本任务的文件，并写明改动。
- 提交前检查暂存内容，不提交密钥、个人资料、依赖目录和构建产物。
- 不覆盖无关的未提交工作，不随意删除历史或使用强制恢复。
- Git 只记录纳入版本管理的文件，不等于线上数据库备份。

## 需要本人决定
- 付费、删除资料、扩大访问权限、推送远程或公开发布前说明影响并等待确认。
- 遇到无法继续的问题，记录已经尝试的步骤、实际结果和最小待确认事项。
`,
`# Project working instructions

## Goal
- Product purpose: to be confirmed.
- Audience: to be confirmed.
- First-version scope: read docs/requirements.md; clarify if it does not exist.
- Exclusions: follow approved requirements without adding features unasked.

## Before work
1. Read this file and any existing README.md, docs/requirements.md, docs/design.md, and tasks/todo.md.
2. Check the project directory, Git status, and uncommitted changes. Report missing files without inventing them.
3. Restate the task and acceptance criteria; ask only for information that materially affects the result.

## Implementation
- Perform reading, organization, implementation, and checks that can be automated.
- Deliver small inspectable versions. Preserve existing work and avoid unrelated refactors.
- Follow the existing stack and styles; explain impact before changing the approach.
- Explain technical words plainly and provide click targets and expected visible results.

## Commands (verify before filling in)
- Install dependencies: to be confirmed.
- Start preview: to be confirmed.
- Check code: to be confirmed.
- Build output: to be confirmed.
- Keep these unknown until environment setup verifies actual commands.

## Checks and completion
- Check normal actions, empty input, failures, and affected existing behavior against requirements.
- Record execution, passing, failing, and unverified work separately in docs/checks.md.
- Update tasks/todo.md and provide artifact locations, the preview, and next steps.
- A build is not a personal trial. Do not claim unexecuted checks passed.

## Versions and data
- Ensure the current version is recoverable. Commit only task files after checks pass with a clear message.
- Inspect staged files; exclude secrets, personal data, dependency folders, and build output.
- Preserve unrelated uncommitted work; avoid destructive history or forced restoration.
- Git records tracked files, not live database backups.

## Human decisions
- Explain impact and await approval before spending, deleting data, expanding access, pushing remotely, or publishing.
- If blocked, record attempted steps, actual results, and the smallest missing decision.
`];
export const practices:Practice[]=[
{path:'communicate/tools',stage:'tell',title:['打开工具，确认能操作项目','Open the tool and verify project access'],intro:['只需要先选一种。已经在用能打开项目、修改文件并运行预览的 AI 助手，可以直接继续准备项目。只会聊天的工具可以帮忙想需求，但还需要制作工具来落实。','Choose one tool to start. If the current assistant can open projects, edit files, and run previews, proceed to project setup. Chat-only tools can clarify ideas but need a building tool for implementation.'],input:['带上刚填写的想法草稿，确认使用电脑、是否愿意安装软件、是否已有项目。','Bring the idea draft and identify the computer, installation preference, and any existing project.'],steps:[
{title:['按当前条件选入口','Pick an entry for the current situation'],body:['不愿安装、想先在网页做网站：可以从网页制作工具开始。愿意安装，或已有项目文件：选择能打开本机文件夹的编程助手。先不要同时学习多个工具。','Prefer no installation and a website first: consider a browser builder. Willing to install, or already have files: choose an assistant that opens local folders. Avoid learning several tools at once.'],check:['选择的工具能接收说明、保留项目，并让实际结果可查看；确认账号可用和费用可接受。','The tool accepts instructions, retains a project, and exposes results for inspection. Check account access and acceptable costs.'],example:['比如：网页路径可参考 Lovable；电脑路径可参考 VS Code + GitHub Copilot。名称是可试用的例子，不是所有项目的唯一答案。','For example: Lovable is a browser route, while VS Code with GitHub Copilot is a desktop route. These are examples to try, not universal answers.']},
{title:['打开一个项目，不在随意的聊天窗口开工','Open a project conversation'],body:['网页工具按官方入门页创建项目。电脑工具先新建一个专用文件夹，用工具的“打开文件夹”功能打开，再进入该项目的 AI 对话。已有项目则打开原文件夹，不新建替代品。','Create a project following the browser tool’s guide. For a desktop tool, create a dedicated folder, open it through Open Folder, and enter its project conversation. Open the original folder for existing work.'],check:['能指出当前项目的名字或完整文件位置；AI 的后续改动落在这个项目。','Identify the project name or full folder path and confirm AI changes belong there.']},
{title:['先做一个不会影响业务的小检查','Run a small capability check'],body:['发送下方提示词，让 AI 创建一份说明文件并重新读出内容。如果只能返回文字，先切换到有文件操作能力的项目或模式。','Send the prompt below to create and reread a small note. If the tool can only reply with text, switch to a project or mode with file access.'],check:['在项目文件列表找到说明文件并打开，内容与任务相符；不能只看 AI 回复成功。','Find and open the note in the file list. Check its contents instead of relying on a success message.']}
],templates:[{id:'tool-trial',title:['复制到所选工具：检查能否开始','Send to the chosen tool: check readiness'],text:handoff(['先确认当前项目位置与可用能力。若主线“亲手核对 AI 创建的文件”已核对真实 idea.md，则只报告已有能力，无需重复练习。只有尚未验证文件能力时，在项目中新建 tool-check.md，写入“项目准备检查”，再读取内容返回；已有同名文件先读取，不能覆盖。先不制作业务功能。','Confirm project location and available capabilities. If idea.md was already verified in main the “Inspect a file AI actually created” step, report existing capabilities without repeating this exercise. Otherwise create tool-check.md containing “Project readiness check”, then read it back. If it exists, read rather than overwrite it. Do not build product features yet.'],['本人填写的想法草稿；当前项目位置：填写项目名或文件夹。','The personal idea draft and current project name or folder.'],['实际文件路径与读回内容；能否修改文件、运行命令和显示预览；不能执行的能力及替代步骤。','Actual file location and readback; ability to edit, run commands, and show previews; unavailable capabilities and alternatives.'])}],next:'communicate/setup',nextLabel:['工具可用后：准备 Git 与项目规则','Once the tool works: prepare Git and project instructions'],sources:[{label:'Lovable 官方入门',href:'https://docs.lovable.dev/introduction/getting-started'},{label:'VS Code / GitHub Copilot setup',href:'https://code.visualstudio.com/docs/setup/copilot'}]},
{path:'communicate/setup',stage:'tell',title:['把项目、版本记录和 AI 规则准备好','Prepare the project, version history, and AI rules'],intro:['这些准备让后续改动有记录、出错能找回，也让 AI 每次知道项目要求。文件和命令由 AI 处理；本人确认位置、检查结果和必要决定。','These steps make changes traceable and recoverable and give AI persistent project guidance. AI handles files and commands; a person confirms locations, results, and decisions.'],input:['已经选好的工具、打开的项目，以及想法草稿。没有可读写的项目时先返回选工具。','The chosen tool, open project, and idea draft. Return to tool selection if the project cannot be read and edited.'],steps:[
{title:['确认项目位置','Confirm the project location'],body:['在工具中打开专用项目文件夹，让 AI 说出当前完整路径和已有文件。把想法草稿保存为 idea.md。项目根目录就是包含整个项目的最外层文件夹。','Open the dedicated project folder and ask AI to identify the full path and existing files. Save the idea draft as idea.md. The project root is the outer folder containing the project.'],check:['打开 idea.md 能看到本人填写的草稿；目录中没有误混其他项目。','Opening idea.md shows the personal draft, without unrelated projects mixed into the folder.'],example:['比如：可以把项目放在“文档/我的第一个产品”；这只是位置示例，不必使用同名文件夹。','For example: Documents/My first product is one possible location; that exact name is not required.']},
{title:['让 AI 初始化或检查 Git','Have AI initialize or inspect Git'],body:['Git 用来保留文件变化，方便回到之前的版本。发送下方 Git 提示词。已有仓库沿用原记录；新目录才执行 git init。网页工具没有终端时，先确认平台的版本历史与恢复入口；导出到本机后再按本步骤建立 Git，不在没有终端的页面硬贴命令。','Git tracks file changes so earlier versions can be recovered. Send the Git prompt below. Reuse existing history; run git init only for a new folder. If a browser tool has no terminal, inspect its history and restore entry; initialize local Git after export rather than pasting shell commands into an unrelated field.'],check:['本机路径：AI 给出仓库路径、状态和实际提交记录。网页路径：找到可恢复的历史版本；这不等于已经初始化了本机 Git。','Local route: AI reports repository path, status, and actual commit history. Browser route: locate a restorable version; this is not local Git initialization.']},
{title:['生成并确认项目规则文件','Create and verify project instructions'],body:['把下方 AGENTS.md 模板交给 AI，要求结合真实项目保存。常见文件名是复数 AGENTS.md，并非所有工具自动读取同一名称；让工具确认它支持的规则入口，不能只创建文件就认为已生效。已有规则先合并，不能覆盖。','Give AI the AGENTS.md template below and ask it to save project-specific instructions. AGENTS.md is plural, and not every tool automatically reads that filename. Verify the tool’s supported instruction entry rather than assuming creation activates it. Merge existing rules instead of overwriting them.'],check:['打开文件核对目标；再让 AI 复述三个约束和读到的文件位置。不支持自动读取时，在每次新对话附上规则，或按该工具官方入口配置。','Open the file and review goals. Ask AI to restate three constraints and the file it read. If automatic loading is unsupported, attach it to new conversations or configure the documented tool-specific entry.']},
{title:['保留起点，回到需求对话','Save the starting point and return to requirements'],body:['让 AI 把草稿和规则纳入第一次已检查的提交，并说明恢复时应该联系它检查哪些变化。当前还不知道的技术命令保持待确认，等环境准备节点再补。','Have AI include the draft and instructions in the first checked commit and explain how to request restoration. Keep unknown technology commands unfilled until environment setup.'],check:['草稿、规则和起点记录都能找到。返回主线“亲手核对 AI 创建的文件”核对文件，再进入“澄清需求与第一版范围”。','Find the draft, instructions and starting checkpoint, then return to the main route’s “Inspect a file AI actually created”, then continue to “Clarify needs and scope”.nt. Return to main the “Inspect a file AI actually created” step to inspect files, then the “Clarify needs and scope” milestone to clarify requirements.']}
],templates:[{id:'git-setup',title:['让 AI 检查并建立版本记录','Ask AI to establish version history'],text:handoff(['核对当前目录与 git --version。使用 git rev-parse --show-toplevel 检查本目录是否已在仓库内，避免把父目录误当项目。已有仓库先运行 git status 并保留历史；确认是新项目后才在其根目录 git init。根据真实文件生成或完善 .gitignore，排除密钥、依赖与构建产物。逐个核对本任务文件再暂存，运行 git diff --cached 检查内容，然后创建初始提交。若缺少提交姓名邮箱，询问实际值，不编造、不擅自改全局配置。不推送远程。','Check the current directory and git --version. Use git rev-parse --show-toplevel to detect an existing repository and avoid treating a parent repository as this project. Preserve existing history and inspect git status; run git init at the root only for a confirmed new project. Create or update .gitignore for actual secrets, dependencies, and build output. Stage reviewed task files, inspect git diff --cached, then make an initial commit. Ask for missing author identity without inventing it or changing global configuration. Do not push.'],['项目完整路径、idea.md 和已经存在的文件。','Full project path, idea.md, and existing files.'],['git status 的实际结果、git log -1 的实际提交信息、未纳入记录的文件及原因。Git 不可用时给出对应系统的官方安装入口，安装后重新检查。','Actual git status and git log -1 output, excluded files and reasons. If Git is unavailable, provide the official installation route for the OS and recheck after installation.'])},
{id:'agents-file',title:['AGENTS.md 文件模板 · 交给 AI 保存','AGENTS.md file template · ask AI to save it'],kind:'file',text:agentsTemplate},
{id:'agents-create',title:['让 AI 落实规则文件','Ask AI to apply the instruction file'],text:handoff(['先核对当前工具支持的项目规则文件与加载方式。读取已有规则，再把上面的 AGENTS.md 模板与当前真实信息合并；已有内容不能无说明删除。保存后重新读取，说明哪些规则生效、哪些字段待确认。若工具使用其他入口，按官方说明接入同样的规则，不宣称通用自动生效。','Verify the current tool’s supported instruction file and loading behavior. Read existing instructions and merge the template above with actual project details without silently removing existing content. Reread it, explain active rules and unknown fields, and use the documented entry if the tool requires another filename.'],['上方规则模板、idea.md、项目路径和现有规则文件。','The template above, idea.md, project path, and existing instruction files.'],['保存路径、合并说明、三个关键规则的复述，以及后续环境准备需要补齐的命令。','Saved path, merge notes, three key rules restated, and commands to fill in during environment setup.'])}],next:'learn',nextLabel:['回到学习路线，继续当前步骤','Return to the learning path and continue the current step'],sources:[{label:'Git init',href:'https://git-scm.com/docs/git-init'},{label:'AGENTS.md format',href:'https://agents.md/'},{label:'VS Code instruction files',href:'https://code.visualstudio.com/docs/agent-customization/custom-instructions'}]},
{path:'components/style',stage:'ui',title:['把想要的界面风格说清楚','Describe the intended interface style'],intro:['先说产品怎样被使用，再把“好看”拆成能看到的选择：内容密度、颜色、字体层级、间距、边界和动效。AI 负责把这些整理成页面，不需要先学设计术语。','Start with how the product is used, then describe visible choices: density, colors, text hierarchy, spacing, borders, and motion. AI turns them into a page; design vocabulary is not a prerequisite.'],input:['需求文档、当前页面；有喜欢的参考图可以一起提供，没有参考也可以开始。','Requirements and the current page. References are optional, not a prerequisite.'],steps:[
{title:['先说这是什么产品','Describe the product first'],body:['告诉 AI 使用者需要阅读、填写、比较还是反复操作；说明最重要的内容和按钮。风格应帮助完成任务。','Explain whether people read, fill forms, compare, or perform repeated actions, and identify the main content and action. Style should serve the task.'],check:['AI 能说出首先应该看到什么，而不是只列形容词。','AI can identify what should be seen first, rather than only adjectives.']},
{title:['用可见差异描述偏好','Describe visible preferences'],body:['说明浅色或深色、信息紧凑或宽松、主要颜色、圆角大小、是否用阴影和动效。不知道时请 AI 给两个小样，选一个再推广。','Describe light/dark mode, compact/spacious density, main colors, corner shape, shadows, and motion. If unsure, request two small samples and choose one before expansion.'],check:['先比较一个代表页面，确定文字可读、主次清楚，再应用到其他页面。','Compare one representative page, confirm readability and hierarchy, then apply it elsewhere.'],example:['比如：白底、深灰文字、蓝色主按钮；内容紧凑，标题明显；卡片轻边框、小圆角，不使用大面积渐变。这是风格示例，不是本站要求所有产品照做。','For example: white background, dark text, blue primary actions, compact content, clear headings, subtle borders, small corners, and no large gradients. This is one style example, not a universal rule.']},
{title:['参考图要指明借鉴部分','Explain what a reference contributes'],body:['给截图编号，标明借鉴的是布局、颜色、字体还是某个控件。说明哪些不要借鉴，避免 AI 连示例人物、文案和业务一起照搬。','Number screenshots and identify the layout, color, type, or control to borrow. State exclusions so sample people, text, and business logic are not copied unintentionally.'],check:['AI 先描述看见的结构，再列未知交互；看不到的行为不能当成截图事实。','AI describes visible structure and lists unknown interactions instead of treating unseen behavior as fact.']}
],templates:[{id:'style-brief',title:['整体风格提示词','Overall style prompt'],text:handoff(['先整理风格说明，不重做全部页面。\n【用途与主要操作】填写实际任务。\n【整体感觉】填写想要的感觉，并转成可见选择。\n【颜色】填写主色、背景、需要保留的品牌色，或请AI提供两个小样。\n【内容密度与间距】填写紧凑/宽松及最重要的信息。\n【字体与层级】说明标题、正文、辅助说明的主次。\n【边框、圆角、阴影、动效】逐项说明偏好，未知则请AI建议。\n【参考】附图并说明只借鉴哪些部分。\n先做一个代表页面，确认后保存 docs/ui-style.md，再按相同规则扩展。','Prepare a style brief before changing all pages.\n[Purpose and main action] Actual task.\n[Overall feel] Translate preferences into visible choices.\n[Colors] Main color, background, retained branding, or ask for two samples.\n[Density and spacing] Compact/spacious and priority content.\n[Text hierarchy] Headings, body, and supporting text.\n[Borders, corners, shadows, motion] Specify each, or request advice.\n[References] Attach images and identify what to borrow.\nBuild one representative page, then save the approved rules in docs/ui-style.md before expanding.'],['需求文档、当前页面、品牌颜色或参考截图（可选）。','Requirements, current page, brand colors, and optional screenshots.'],['风格说明、一个可操作页面；检查手机和电脑、长标题、空白/加载/失败反馈；列出没有改变的功能。','A style brief and one operable page. Check phone/desktop, long headings, empty/loading/error states, and retained functionality.'])}],next:'components/edit',nextLabel:['继续：修改页面的一处或一个组件','Next: change one area or component']},
{path:'components/edit',stage:'ui',title:['只修改一个地方，让 AI 找准目标','Help AI change exactly one target'],intro:['描述改动时，按位置、现状、期望、保持不变和检查方法的顺序说明。先改一处并查看结果，再决定是否扩大到其他地方。','Describe location, current behavior, desired behavior, what stays unchanged, and how to check it. Inspect one change before expanding it.'],input:['当前页面地址或截图，以及已确认的界面风格。','The current page URL or screenshot and approved style.'],steps:[
{title:['把目标指出来','Identify the target'],body:['写出页面名称、区域和可见文字；截图可以圈出目标。不要只说“这个改一下”，也不需要猜代码文件名。','Name the page, region, and visible text, or mark it on a screenshot. Avoid vague references; there is no need to guess source filenames.'],check:['AI 修改前复述的是同一个地方；有多个同名按钮时先确认。','AI identifies the same target before editing; clarify duplicate labels.'],example:['比如：首页顶部“开始记录”按钮，目标是扩大点击区域，不改变点击后的去向。','For example: enlarge the Home page’s “Start recording” hit area without changing its destination.']},
{title:['说清改什么、不改什么','Specify the change and invariants'],body:['视觉问题写大小、颜色、间距和排列；交互问题写点击前后发生什么。明确修改只影响当前区域，还是全站同类组件。','For appearance, specify size, color, spacing, and layout. For behavior, describe before/after actions. State whether the change is local or applies to every matching component.'],check:['同一个组件被多处复用时，AI 说明影响范围，再选择局部或共享修改。','For reused components, AI explains impact before choosing local or shared changes.']},
{title:['按操作重新检查','Retest the action'],body:['打开最新预览，对照同一位置；点击主操作，检查手机排列和附近功能。错误仍在时贴出预期与实际差异，不直接再要求“整体优化”。','Open the latest preview and compare the same target. Use the main action and check mobile layout and nearby behavior. Report remaining expected/actual differences instead of requesting broad optimization.'],check:['本次目标达到、原功能仍可用；让 AI 更新任务记录并保存已检查版本。','The target is achieved and existing behavior works. Update the task record and save the checked version.']}
],templates:[{id:'local-edit',title:['页面局部修改提示词','Focused page-edit prompt'],text:handoff(['【目标位置】填写页面地址、区域、可见文字；附带圈出的截图。\n【现在怎样】描述实际现状。\n【希望怎样】描述具体变化。\n【保持不变】列出文字、数据、跳转、品牌或其他不能改的内容。\n【影响范围】只改当前区域，或列明需要同步的位置。\n先定位并复述，不确定时先问。完成最小修改，不顺手重做页面。','[Target] Page URL, region, visible label, and marked screenshot.\n[Current] Observed appearance or behavior.\n[Desired] Specific change.\n[Unchanged] Text, data, navigation, branding, or other invariants.\n[Scope] This region only, or list all locations to update.\nLocate and restate the target, clarify ambiguity, then make the smallest focused edit.'],['当前页面与截图、docs/ui-style.md（若已有）、任务清单。','Current page and screenshot, docs/ui-style.md if present, and task list.'],['改动前后说明、实际预览地址、受影响位置；验证原有操作、手机排列和相邻功能。','Before/after explanation, actual preview, and affected locations; verify original actions, mobile layout, and nearby behavior.'])},
{id:'component-edit',title:['指定组件修改提示词','Specific component-edit prompt'],text:handoff(['【组件名称】填写认识的名字；不知道时贴图并描述位置，请AI先识别。\n【所在位置】填写页面和区域。\n【当前状态】描述默认、点击或输入后的表现。\n【目标状态】分别说明外观和操作反馈。\n【禁用/空白/失败时】说明应该看到什么，不适用时说明原因。\n【修改范围】仅此处或所有复用位置。\n保留原数据与事件，只实现确认的变化。','[Component] Known name, or provide an image and location for AI to identify.\n[Location] Page and region.\n[Current states] Default, click, or input behavior.\n[Desired states] Appearance and response separately.\n[Disabled/empty/error] Expected feedback, or explain inapplicability.\n[Scope] This occurrence or all reused locations.\nPreserve existing data and events; implement only approved changes.'],['当前组件截图或页面、需求与现有风格；词典名称可作为补充。','Current screenshot or page, requirements, and existing style; dictionary names are optional supporting material.'],['组件修改、受影响页面列表；实际检查鼠标、键盘、手机和关键状态，不用静态截图替代交互验证。','The edited component and affected page list; check pointer, keyboard, mobile, and key states rather than only a screenshot.'])}],next:'learn/flow',nextLabel:['修改通过后：接通完整使用流程','After the edit passes: connect the full flow']}
];
export const practiceHref=(locale:string,path:string)=>path.startsWith('/#')?`/${locale}/${path.slice(1)}`:`/${locale}/${path}/`;

// Keep the instruction-creation prompt usable when copied on its own.
const setupGuide=practices.find(p=>p.path==='communicate/setup')!;
const createInstructions=setupGuide.templates.find(p=>p.id==='agents-create')!;
createInstructions.title=['生成并验证项目规则 · 完整提示词（含模板）','Create and verify project rules · complete prompt with template'];
createInstructions.text=[
`我准备在当前项目建立 AI 协作规则，请直接完成以下任务。
【项目路径】填写已经在工具中打开的项目位置。
【项目用途】填写用途，或读取 idea.md。
【正在使用的工具与版本】填写工具名称；版本未知时请先核实。

1. 先说出当前项目根目录，读取已有规则文件与 README，保留原内容。
2. 根据当前工具官方说明，确认规则文件名、放置位置和加载条件。通用文件名是 AGENTS.md（复数），不要自行使用 AGENT.md。若需 CLAUDE.md、GEMINI.md 或设置页，说明原因并按当前版本接入，避免两套冲突规则。
3. 把下面的模板合并进真实项目。根据文件填写已知信息，未知命令保持“待确认”，不要猜测。
4. 保存后重新读取，报告完整路径、改动摘要、三个约束及仍待确认的内容。
5. 检查当前会话的规则加载记录（工具提供时）；另开新会话后再做一次读取检查。无法观察自动加载时明确写“尚未验证”，不要仅凭自述说自动生效。
6. 本次不制作业务功能、不推送、不发布。

以下是文件内容模板：
${agentsTemplate[0]}`,
`Set up AI working instructions in the currently open project.
[Project path] Enter the project folder already open in the tool.
[Purpose] Enter the purpose or read idea.md.
[Tool and version] Enter the tool; verify the version if unknown.

1. Identify the actual root, then read existing instructions and README without discarding content.
2. Check the current tool's official filename, location and loading rules. The shared filename is AGENTS.md, plural, not AGENT.md. If CLAUDE.md, GEMINI.md or a settings entry is required, explain why and configure the current version without conflicting duplicates.
3. Merge the template below into the real project. Fill facts from files and keep unverified commands marked unknown.
4. Reread the saved file; report its full path, changes, three constraints and unknowns.
5. Inspect the session's loaded-instruction record when available; repeat in a new session. Mark automatic loading unverified when it cannot be observed. Self-reported compliance alone is not proof.
6. Do not build product features, push or publish in this task.

File content template:
${agentsTemplate[1]}`];
setupGuide.sources!.push({label:'Claude Code instruction loading',href:'https://code.claude.com/docs/en/memory'},{label:'Git installation and identity',href:'https://docs.github.com/en/get-started/git-basics/set-up-git'});
