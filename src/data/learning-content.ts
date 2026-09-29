// Current teaching content. Edit here; review reports are historical evidence only.
import type { LearningContent } from './learning-types';
export const learningContent: LearningContent[] = [
  {
    id: 'idea',
    phase: 'idea',
    title: ['先记下自己的想法', 'Write down the idea'],
    where: ['就在这一页的草稿里', 'In the draft on this page'],
    expected: [
      '草稿写明项目用户、要解决的问题和试用通过的条件；第二阶段计划可以填“否”或“暂未确定”。确认后草稿保存在当前浏览器，随时可以复制。',
      'The draft identifies users, the problem and the passing condition. After confirmation it is kept in this browser, ready to copy.',
    ],
    stage: 'idea',
    issues: [
      {
        id: 'no-idea',
        title: [
          '只有“想做一个网站”，不知道写什么',
          'I only know I want a website',
        ],
        check: [
          '先回想今天重复做过的一件小事。',
          'Think of one repetitive task from today.',
        ],
        action: [
          '先只填一个真实的困难就够了，其余写“暂未确定”。',
          'Write just one real difficulty and mark the rest undecided.',
        ],
        expected: [
          '草稿有实际使用者和一个可观察的结果，其他项可以未知。',
          'The draft identifies a user and an observable result. Other fields may remain undecided.',
        ],
      },
    ],
    understanding: {
      why: [
        '先想清楚你要解决的一件事，AI 才知道该帮你做什么。',
        'Name one problem so AI knows what to help you build.',
      ],
      concept: [
        '先写给谁用、解决什么问题，再写怎样试用才算做好。',
        'Write users, problem and a practical success check.',
      ],
      question: [
        '这个项目解决的是谁的哪件事？',
        'Whose problem does this solve?',
      ],
    },
    support: {
      input: ['你想解决的一件事。', 'One problem you want to solve.'],
      output: [
        '生成的草稿保留了自己的用户、问题、试用方法。',
        'The draft retains your users, problem and test.',
      ],
      answer: [
        '先写给谁用、解决什么问题，再写怎样试用才算做好。',
        'Write users, problem and a practical success check.',
      ],
      example: [
        '用户：读书会成员。问题：群里报名容易漏记。通过：提交一次报名后能看到自己的报名；重复提交不会占两个名额。',
        'Users: club members. Problem: chat signups get lost. Pass: submit and see a reservation; repeating it does not reserve twice.',
      ],
      recovery: [
        '想不到就从自己最近遇到的一件麻烦事开始。',
        'Start with a recent problem you personally faced.',
      ],
      terms: ['brief', 'acceptance-criteria'],
    },
    referenceAnswer: [
      '能指出实际人群、困难和使用后的变化，例如读书会成员从群里漏记报名，变成能查询自己的预约。只说“做个平台”还不够。',
      'Name real users, their difficulty and the changed outcome; a platform alone is not a goal.',
    ],
    guidedActions: [
      {
        id: 'idea-1',
        action: [
          '向下找到“07 本步材料”里的“按模板改成自己的想法”输入框。保留四个问题，只把【】里的说明换成自己的答案。先填写“这个项目主要给谁使用”，例如“我自己”。',
          'Find “07 Material for this step” and the “Make this template personal” text box below. Keep all four questions and replace only the bracketed guidance with your answers. Start with “Who will use this project”, such as yourself.',
        ],
        expect: [
          '第一个问题后面是自己的使用者，其余问题仍在。',
          'The first question contains your user and the other questions remain.',
        ],
        ifWrong: [
          '想不到就从自己最近遇到的一件麻烦事开始。',
          'Start with a recent problem you personally faced.',
        ],
        afterwards: [
          '第一个问题后面是自己的使用者，其余问题仍在。',
          'The first question contains your user and the other questions remain.',
        ],
      },
      {
        id: 'idea-2',
        action: [
          '在同一个框里找到“这个项目要帮他们解决什么问题”。写下现在遇到的麻烦，以及使用项目后想完成的事情。',
          'In the same box, find the question about the problem the project should solve. Describe the current difficulty and what you want to do with the finished project.',
        ],
        expect: [
          '能说出一个具体过程，例如输入学习内容、保存、以后再找。',
          'A concrete flow, such as enter notes, save them and find them later.',
        ],
        ifWrong: [
          '不要只写“做一个好用的网站”；补上打开后要做的事。',
          'Replace “a useful website” with what someone will actually do.',
        ],
        afterwards: [
          '能说出一个具体过程，例如输入学习内容、保存、以后再找。',
          'A concrete flow, such as enter notes, save them and find them later.',
        ],
      },
      {
        id: 'idea-3',
        action: [
          '写好怎样试用才算做好，再点击“确认，生成我的想法草稿”。第二阶段暂时不做就填“否”。',
          'Describe how you will test success, then click Confirm and generate my idea. Put “none” for later features if unnecessary.',
        ],
        expect: [
          '生成的草稿保留了自己的用户、问题、试用方法。',
          'The draft retains your users, problem and test.',
        ],
        ifWrong: [
          '有空白就补好再确认；还不知道的事写“尚未确定”。',
          'Fill missing fields and confirm again; mark unknowns undecided.',
        ],
        afterwards: [
          '生成的草稿保留了自己的用户、问题、试用方法。',
          'The draft retains your users, problem and test.',
        ],
      },
    ],
  },
  {
    id: 'description',
    phase: 'idea',
    title: ['整理成可以交给 AI 的项目描述', 'Prepare a project brief'],
    where: ['本站的想法草稿与下方模板', 'The saved idea and template below'],
    expected: [
      '描述包含目标用户、问题、第一版、通过条件和后续范围，没有把例子当成自己的需求。',
      'The brief covers users, problem, first version, acceptance and later scope without treating examples as personal requirements.',
    ],
    prompt: [
      '项目名称：【填写名称】\n项目用户群体：【填写实际使用者】\n项目解决的问题：【填写用户使用后能解决的具体问题】\n使用设备：【填写电脑浏览器、手机、桌面应用等】\n第一版使用过程：【填写打开哪里、做什么、得到什么结果】\n测试通过条件：【填写操作和应该看到的结果】\n第二阶段功能：【填写；没有填否，未决定填尚未确定】\n预算及其他限制：【填写或填尚未确定】',
      'Project name: [fill in]\nIntended users: [fill in]\nProblem solved: [fill in]\nDevices: [fill in]\nFirst-version flow: [entry, actions, result]\nPassing criteria: [actions and expected results]\nPhase-two features: [none, details or undecided]\nBudget and constraints: [fill in or undecided]',
    ],
    stage: 'idea',
    understanding: {
      why: [
        '把刚才的想法整理成一份说明，后面可以直接交给工具。',
        'Turn your idea into a description you can give the tool.',
      ],
      concept: [
        '项目描述就是告诉别人：我要做什么，给谁用，怎样使用。',
        'A project description says what to make, for whom and how it is used.',
      ],
      question: [
        '如果 AI 要加一个未提到的功能，应该直接接受，还是先核对它是否解决第一版的问题？',
        'Should an unrequested feature be accepted immediately, or checked against the first-version goal?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          '不知道第一版的流程怎么写',
          'Unsure how to describe the first flow',
        ],
        check: [
          '先选择一个人和一件事，暂时不要列所有功能。',
          'Choose one person and one task before listing features.',
        ],
        action: [
          '按“打开哪里 → 做什么 → 看到什么”写三段。例如学习记录：打开页面、填写并保存、再次找到记录。无法确定的地方写尚未确定。',
          'Write “open → act → see a result”. A journal example is opening, saving a note and finding it again. Preserve unknowns.',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    templateKind: 'worksheet',
    support: {
      input: ['上一步确认的想法草稿。', 'Your confirmed idea draft.'],
      output: [
        '项目说明已确认，可以复制给后面的项目对话。',
        'The confirmed brief is ready to copy into your project conversation.',
      ],
      answer: [
        '项目描述就是告诉别人：我要做什么，给谁用，怎样使用。',
        'A project description says what to make, for whom and how it is used.',
      ],
      example: [
        '项目：读书会预约。设备：手机浏览器。流程：查看场次→输入姓名→报名→查看确认。预算：尚未确定。',
        'Project: club reservations. Device: phone browser. Flow: view session, enter name, book, see confirmation. Budget: undecided.',
      ],
      recovery: [
        '没有带入时回想法步骤确认草稿，或亲手粘贴已写好的内容。',
        'Confirm the idea in the preceding step or paste the saved text yourself.',
      ],
      terms: ['brief', 'context'],
    },
    referenceAnswer: [
      '先核对它是否服务于已确认的第一版目标。有关但非必需的功能先记后续，不直接加入当前制作。',
      'Check against the agreed first-version goal; defer related but nonessential additions.',
    ],
    guidedActions: [
      {
        id: 'description-1',
        action: [
          '点击下方模板的“带入前面已确认的材料”，检查是不是自己的想法。',
          'Click the template’s confirmed-material import button and check the idea.',
        ],
        expect: [
          '上一步的用户和目标已出现在模板中。',
          'Your previous users and goal appear.',
        ],
        ifWrong: [
          '没有带入时回想法步骤确认草稿，或亲手粘贴已写好的内容。',
          'Confirm the idea in the preceding step or paste the saved text yourself.',
        ],
        afterwards: [
          '上一步的用户和目标已出现在模板中。',
          'Your previous users and goal appear.',
        ],
      },
      {
        id: 'description-2',
        action: [
          '补项目名称、在哪种设备上用，以及从打开到完成的一次操作。只写自己想要的使用方法，不需要先选数据库。',
          'Add the name, devices and one complete use from opening to outcome. You do not need to choose a database yet.',
        ],
        expect: [
          '别人读完能知道要做什么、给谁用、怎样试。',
          'A reader knows what to build, for whom and how to test it.',
        ],
        ifWrong: [
          '拿不准的条件写“尚未确定”，留给后面和 AI 讨论。',
          'Mark uncertain conditions undecided for later discussion.',
        ],
        afterwards: [
          '别人读完能知道要做什么、给谁用、怎样试。',
          'A reader knows what to build, for whom and how to test it.',
        ],
      },
      {
        id: 'description-3',
        action: [
          '点击“确认，生成我的专属内容”，核对下方出现的文字，再点“复制我的草稿”。回到本页时若只看到编辑框，再确认一次就会出现复制按钮；不要点“使用本步新版模板”清掉自己的填写内容。后面准备 Git 时再把这份说明交给工具。',
          'Click “Confirm and generate my version”, review the result and click “Copy my draft”. If returning shows only the editor, confirm again to reveal Copy; do not replace your answers with the current template. Give the brief to your tool in the Git step later.',
        ],
        expect: [
          '项目说明已确认，可以复制给后面的项目对话。',
          'The confirmed brief is ready to copy into your project conversation.',
        ],
        ifWrong: [
          '发现内容有误就修改模板、重新确认，再复制最新版。',
          'After edits, confirm again and copy the updated version.',
        ],
        afterwards: [
          '项目说明已确认，可以复制给后面的项目对话。',
          'The confirmed brief is ready to copy into your project conversation.',
        ],
      },
    ],
  },
  {
    id: 'tool',
    phase: 'prepare',
    title: [
      '打开一个能制作文件的 AI 工具',
      'Open an AI tool that can edit files',
    ],
    where: [
      '所选AI工具的官方安装或工作区入口',
      'The chosen tool’s official install or workspace entry',
    ],
    expected: [
      '工具能打开，能进入制作项目的界面；不是仅有普通网页聊天。',
      'The tool opens and offers project work, not only ordinary web chat.',
    ],
    source: 'https://developers.openai.com/codex/app/',
    refs: [
      {
        path: 'tools',
        title: [
          '想换一种工具？查看选择说明',
          'Need another tool? Compare options',
        ],
      },
    ],
    issues: [
      {
        id: 'unavailable',
        title: [
          '无法安装、登录，或界面不一样',
          'Installation, sign-in, or the screen differs',
        ],
        check: [
          '核对下载来源、电脑系统和官方显示的可用条件，记下报错原文。',
          'Check the official source, operating system, and eligibility; keep the exact error.',
        ],
        action: [
          '先用下方工具资料选择实际可用的入口。界面改版时按“项目/文件夹”功能寻找，找不到就保留截图向该工具官方帮助求助，别粘贴密码到聊天。',
          'Use the tool guide to choose an available option. Look for project/folder functions after a redesign. If absent, retain a screenshot and consult official support; do not paste passwords into chat.',
        ],
        expected: [
          '已进入可用的项目界面后再继续；尚不可用时保留本步。',
          'Continue only after reaching a usable project screen; otherwise stay here.',
        ],
      },
    ],
    stage: 'tell',
    understanding: {
      why: [
        '选一个你能登录、能操作项目文件的工具，就可以开始。',
        'Choose one tool you can sign into that can work with project files.',
      ],
      concept: [
        '这里的 AI 工具需要能帮助你保存文件和运行项目；先确认入口，再开始做。',
        'The tool should help save files and run the project; locate its controls first.',
      ],
      question: [
        '额度用完后，项目文件和进度还能找回吗？',
        'Can work and progress be recovered after allowance runs out?',
      ],
    },
    prompt: [
      '候选工具：【填写】\n能否安装并登录：【填写实际结果】\n上手难度：【记录是否找到项目和文件入口】\n免费额度与核对日期：【按官方页面和当前账号填写】\n订阅费用与预算：【填写】\n所需能力：【填写是否能读写文件、运行和检查项目】\n最终选择及理由：【填写】',
      'Candidate: [fill in]\nInstallation and sign-in result: [fill in]\nEase of use: [can project and file controls be found]\nFree allowance and date checked: [official page/account]\nSubscription cost and budget: [fill in]\nRequired capabilities: [file access, running and checking]\nChoice and reason: [fill in]',
    ],
    templateKind: 'worksheet',
    support: {
      input: ['自己的电脑，以及能接受的费用。', 'Your computer and budget.'],
      output: [
        '得到具体入口说明，知道下一步在哪里打开文件夹。',
        'You know where to open the folder next.',
      ],
      answer: [
        '这里的 AI 工具需要能帮助你保存文件和运行项目；先确认入口，再开始做。',
        'The tool should help save files and run the project; locate its controls first.',
      ],
      example: [
        '合格：能指出当前项目文件，并说明可以执行哪些检查。仅回答“当然可以帮你开发”不算能力证据。',
        'Evidence: actual project files and supported checks, not merely a promise to help.',
      ],
      recovery: [
        '安装条件不合适就换适合的工具，不必全部安装。',
        'Choose another if unsuitable; you do not need every tool.',
      ],
      terms: ['agent', 'ide', 'cli'],
    },
    referenceAnswer: [
      '取决于工具的文件保存与导出能力，不能只看聊天是否还在。先确认项目实际位置，备份文件和交接记录，再决定怎样续用。',
      'It depends on file storage/export, not chat history alone. Locate and back up files and handoff before resuming.',
    ],
    guidedActions: [
      {
        id: 'tool-1',
        action: [
          '从下面的工具入口选一个，打开它的官方网站。先查看是否支持自己的电脑，以及费用是否在预算内。',
          'Choose one tool from the entries below. Check its official site for your computer and budget.',
        ],
        expect: [
          '选定一个能够操作项目文件的工具。',
          'One suitable tool can work with project files.',
        ],
        ifWrong: [
          '安装条件不合适就换适合的工具，不必全部安装。',
          'Choose another if unsuitable; you do not need every tool.',
        ],
        afterwards: [
          '选定一个能够操作项目文件的工具。',
          'One suitable tool can work with project files.',
        ],
      },
      {
        id: 'tool-2',
        action: [
          '按照所选工具的官方说明安装并登录。已有可用工具就直接打开它；网页工具直接登录工作区。',
          'Install and sign in using the chosen tool’s instructions, or open your existing tool. Web tools use their online workspace.',
        ],
        expect: [
          '能看到项目或对话入口。',
          'You can find the project or chat entry.',
        ],
        ifWrong: [
          '遇到安装或登录错误，保留报错文字，对照该工具官方帮助处理。',
          'Keep installation/sign-in errors and consult that tool’s official help.',
        ],
        afterwards: [
          '能看到项目或对话入口。',
          'You can find the project or chat entry.',
        ],
      },
      {
        id: 'tool-3',
        action: [
          '找到输入框，先询问它能怎样帮你处理项目。',
          'Find the message box and ask how to work on a project.',
        ],
        expect: [
          '得到具体入口说明，知道下一步在哪里打开文件夹。',
          'You know where to open the folder next.',
        ],
        ifWrong: [
          '没有文件操作能力时，换能操作项目的工具，或按其说明使用配套编辑器。',
          'If files cannot be handled, choose a suitable tool or its supported editor.',
        ],
        afterwards: [
          '得到具体入口说明，知道下一步在哪里打开文件夹。',
          'You know where to open the folder next.',
        ],
        prompt: [
          '我是第一次使用。请告诉我在哪里选择项目文件夹，以及你能否读取文件、修改文件和运行项目。只介绍操作入口，先不要创建文件。',
          'I am new. Show me where to select a project folder and whether you can read files, edit them and run the project. Explain the entry only; do not create files.',
        ],
      },
    ],
  },
  {
    id: 'folder',
    phase: 'prepare',
    title: ['给项目建一个自己的文件夹', 'Create a folder for the project'],
    where: [
      '电脑文件管理器或网页工具的项目列表',
      'The file manager or web tool project list',
    ],
    expected: [
      '能打开自己的项目目录或工作区，并知道实际位置。',
      'The project folder/workspace opens and its real location is known.',
    ],
    sample: ['文稿 / learning-journal /', 'Documents / learning-journal /'],
    issues: [
      {
        id: 'folder-missing',
        title: [
          '侧栏没有“文稿”或找不到文件夹',
          'Documents or the folder is missing',
        ],
        check: [
          '先确认你打开的是电脑的文件管理器（Mac 访达 / Windows 文件资源管理器），不是浏览器的文件列表。',
          'Confirm you are in the computer’s file manager (Mac Finder / Windows File Explorer), not a browser file list.',
        ],
        action: [
          'Mac：菜单“前往 → 文稿”；Windows：文件资源管理器的“文档”。找到刚建的文件夹；已经存在就不再建同名副本。',
          'Mac: Go → Documents. Windows: File Explorer → Documents. Find the existing folder rather than creating a duplicate.',
        ],
        expected: [
          '能在电脑的文件管理器中打开一个确定的项目文件夹。',
          'One definite project folder can be opened in the computer’s file manager.',
        ],
      },
    ],
    understanding: {
      why: [
        '把这个项目的文件放在同一个文件夹，下次才找得到。',
        'Keep project files together so you can find them next time.',
      ],
      concept: [
        '文件夹就是项目文件的存放位置；路径是找到它的地址。',
        'A folder stores project files; its path tells you where it is.',
      ],
      question: [
        '项目文件现在究竟保存在哪里？',
        'Where are the files actually stored?',
      ],
    },
    prompt: [
      '项目文件夹名称：【填写】\n完整位置：【填写实际路径】\n是否能够打开：【填写检查结果】\n已有文件：【列出或填空文件夹；不要删除已有文件】',
      'Folder name: [fill in]\nFull location: [actual path]\nCan it be opened: [result]\nExisting files: [list or empty; retain existing files]',
    ],
    templateKind: 'worksheet',
    support: {
      input: ['自己给项目起的名字。', 'A name for your project.'],
      output: [
        '已确认的位置可以在下一步带入，带你回到同一个项目。',
        'The confirmed location can be carried into the next step and leads to the same project.',
      ],
      answer: [
        '文件夹就是项目文件的存放位置；路径是找到它的地址。',
        'A folder stores project files; its path tells you where it is.',
      ],
      example: [
        'book-club/ ← 在工具中选择这一层\n  idea.md ← “准备 Git 与项目规则”这一节点才创建\n  docs/ ← 后面放需求文档',
        'book-club/ ← select this folder\n  idea.md ← created by the “Prepare Git and project rules” milestone\n  docs/ ← later documents',
      ],
      recovery: [
        '不要把别人的项目文件夹当作新项目，也不要清空已有文件。',
        'Do not reuse or empty an unrelated project folder.',
      ],
      terms: ['root-directory', 'file-path'],
    },
    referenceAnswer: [
      '本地项目应能指出可打开的完整路径；网页工作区应能指出对应项目入口，并知道代码能否导出。本站草稿不是代码目录。',
      'Identify the actual local path or web workspace and export options. Guide drafts are not the code directory.',
    ],
    guidedActions: [
      {
        id: 'folder-1',
        action: [
          '在电脑上打开“文档”文件夹。Mac 用访达，Windows 用文件资源管理器；使用网页工作区时，直接在工具的项目列表新建项目。',
          'Open Documents in Finder or File Explorer. For a web workspace, create a project in its project list instead.',
        ],
        expect: [
          '找到专门存放这个项目的位置。',
          'You have a dedicated place for this project.',
        ],
        ifWrong: [
          '不要把别人的项目文件夹当作新项目，也不要清空已有文件。',
          'Do not reuse or empty an unrelated project folder.',
        ],
        afterwards: [
          '找到专门存放这个项目的位置。',
          'You have a dedicated place for this project.',
        ],
      },
      {
        id: 'folder-2',
        action: [
          '电脑文件夹：Mac 按 Shift+Command+N，Windows 按 Ctrl+Shift+N，输入自己的项目名称后按回车。网页工具：在新建项目的名称栏填写名称并确认，不使用电脑文件夹快捷键。',
          'For a local folder, press Shift+Command+N on Mac or Ctrl+Shift+N on Windows, type your project name and press Enter. In a web tool, enter the name in its new-project form and confirm; do not use a local-folder shortcut.',
        ],
        expect: [
          '能打开刚建的空文件夹；网页工具能打开新工作区。',
          'The new folder or web workspace opens.',
        ],
        ifWrong: [
          '同名文件夹已存在时先检查内容，再决定沿用还是另取名字。',
          'Inspect an existing same-named folder before reusing it.',
        ],
        afterwards: [
          '能打开刚建的空文件夹；网页工具能打开新工作区。',
          'The new folder or web workspace opens.',
        ],
      },
      {
        id: 'folder-3',
        action: [
          '复制项目位置填到“07 本步材料”的模板，再点击确认。Mac 选中文件夹按 Option+Command+C；Windows 打开文件夹后复制地址栏；网页工具填写工作区名称和入口网址。',
          'Copy the location into the template in section 07 and confirm it. On Mac select the folder and press Option+Command+C; on Windows copy its address bar. For a web workspace, record its name and URL.',
        ],
        expect: [
          '已确认的位置可以在下一步带入，带你回到同一个项目。',
          'The confirmed location can be carried into the next step and leads to the same project.',
        ],
        ifWrong: [
          '不要照抄示例路径；找不到完整路径时先记录上级目录和名称。',
          'Use your own path; record its parent folder and name if needed.',
        ],
        afterwards: [
          '已确认的位置可以在下一步带入，带你回到同一个项目。',
          'The confirmed location can be carried into the next step and leads to the same project.',
        ],
      },
    ],
  },
  {
    id: 'open-project',
    phase: 'prepare',
    title: ['让 AI 打开刚才的文件夹', 'Open that folder in the AI tool'],
    where: ['AI 工具的项目选择入口', 'The AI tool’s project picker'],
    expected: [
      '工具与本人确认的是同一项目位置，文件列表可核对。',
      'The tool and user identify the same verifiable project location.',
    ],
    prompt: [
      '先检查能否读取当前项目位置。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n本次要使用的项目文件夹：【填写完整路径】\n只检查工具实际打开的项目位置与上方是否一致，列出现有文件。无法访问时说明在哪里选择文件夹。不要创建或修改文件，返回路径、文件列表和是否一致。',
      'First check access to the current project location. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nIntended project folder: [full path]\nOnly compare the tool’s actual project location with this path and list existing files. If inaccessible, explain where to select the folder. Do not change files. Return the path, list and match result.',
    ],
    issues: [
      {
        id: 'wrong-project',
        title: ['AI 说的是另一个项目', 'AI names a different project'],
        check: [
          '把 AI 返回的文件夹名与你刚建的项目文件夹对照（在电脑的文件管理器里看）。',
          'Compare the folder name AI reports with the project folder you created (viewed in your file manager).',
        ],
        action: [
          '先停止发送制作任务。回到项目选择入口，重新选择 learning-journal，再发送本步检查话术。',
          'Stop build requests. Select learning-journal in the project picker and repeat the inspection.',
        ],
        expected: [
          '两处显示同一个项目位置。',
          'Both places identify the same project.',
        ],
      },
    ],
    understanding: {
      why: [
        '让工具打开你自己的项目文件夹，后面才能修改正确的文件。',
        'Open your project folder in the tool so later changes reach the right files.',
      ],
      concept: [
        '同一个工具可以打开不同项目；开始前要检查现在打开的是哪一个。',
        'A tool can open different projects; check which one is active.',
      ],
      question: [
        '怎样核对 AI 操作的是刚建立的文件夹？',
        'How can the target folder be verified?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '刚才创建的项目文件夹或网页工作区。',
        'The project folder or web workspace you created.',
      ],
      output: [
        '工具返回的位置与自己的项目一致。',
        'The reported location matches your project.',
      ],
      answer: [
        '同一个工具可以打开不同项目；开始前要检查现在打开的是哪一个。',
        'A tool can open different projects; check which one is active.',
      ],
      example: [
        '通过：实际路径与“创建项目文件夹”记录一致，现有文件列表可核对。失败：只回复一个建议路径。',
        'Pass: the actual path matches the “Create the project folder” record and verifiable files. Fail: a suggested path only.',
      ],
      recovery: [
        '找不到入口时看下面的界面图或该工具的官方项目说明。',
        'Use the screenshot below or the tool’s official project instructions.',
      ],
      terms: ['working-directory', 'context'],
    },
    referenceAnswer: [
      '让AI只读报告真实路径和现有文件，再与“创建项目文件夹”的记录及文件管理器对照。只看对话标题不够。',
      'Compare AI’s actual read-only paths and files with the “Create the project folder” record and the file manager.th/files with the “Create the project folder” milestone and the file manager; a chat title is insufficient.',
    ],
    guidedActions: [
      {
        id: 'open-project-1',
        action: [
          '在所选工具中选择“打开文件夹”或对应的项目入口，选中刚建的文件夹。',
          'Use Open folder or the equivalent project entry and choose your new folder.',
        ],
        expect: [
          '工具中的项目名称与自己的文件夹一致。',
          'The tool shows the expected project.',
        ],
        ifWrong: [
          '找不到入口时看下面的界面图或该工具的官方项目说明。',
          'Use the screenshot below or the tool’s official project instructions.',
        ],
        afterwards: [
          '工具中的项目名称与自己的文件夹一致。',
          'The tool shows the expected project.',
        ],
      },
      {
        id: 'open-project-2',
        action: [
          '在这个项目中打开对话。把下面【】替换成自己的项目路径；网页工具则填写工作区名称和入口网址，再发送。',
          'Open a conversation inside this project. Replace the brackets with your folder path, or your web workspace name and URL, before sending.',
        ],
        expect: [
          '工具返回的位置与自己的项目一致。',
          'The reported location matches your project.',
        ],
        ifWrong: [
          '不一致就重新选择正确项目，不让工具搬动其他项目的文件来凑路径。',
          'Select the correct project if different; do not move unrelated files to make it match.',
        ],
        afterwards: [
          '工具返回的位置与自己的项目一致。',
          'The reported location matches your project.',
        ],
        prompt: [
          '请检查当前打开的项目是不是【本机项目完整路径，或网页工作区名称和入口网址】。告诉我实际位置，并列出已有文件。只检查，不修改文件。',
          'Check whether the current project is [full local path, or web workspace name and URL]. Report its actual location and existing files. Inspect only; do not modify files.',
        ],
      },
    ],
  },
  {
    id: 'checkpoint',
    phase: 'prepare',
    title: [
      '建立 Git 仓库，写好项目说明和规则',
      'Create Git history and project instructions',
    ],
    where: ['同一个项目对话', 'The same project conversation'],
    expected: [
      '能打开 idea.md 和项目规则文件，并找到 Git 已提交的版本编号。',
      'The idea, instruction file, and an actual saved starting point can be found.',
    ],
    prompt: [
      '先检查能否读取当前项目位置。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n已确认的项目描述：\n【粘贴项目描述步骤生成的文本】\n本步建立 Git 仓库、保存项目说明和规则，并提交第一个版本。核对当前文件夹，将以上描述保存为 idea.md；已有文件时先核对差异，不覆盖。检查 Git，已有仓库沿用；没有则初始化并排除密钥及生成文件。按当前工具支持的规则文件入口（如 AGENTS.md）记录：先读项目材料，只执行当前任务，保留已有成果，报告实际检查结果。缺少 Git、身份或写入权限时说明卡点，不编造。读回文件并建立仅包含本步文件的本地 Git 提交，报告位置与版本。不开发功能、不推送。',
      'First check access to the current project location. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nConfirmed project brief:\n[paste the prepared brief]\nSet up Git, save project instructions and rules, and commit the first version. Check the folder and save this brief to idea.md; compare existing content before changing it. Reuse or initialize Git, excluding secrets and generated files. Use the tool-supported rules file (such as AGENTS.md) to require reading project material, performing only the current task, preserving work and reporting actual checks. Report missing Git, identity or permissions. Read back the files and commit only this step’s files; report paths and revision. Do not build features or push.',
    ],
    refs: [
      {
        path: 'communicate/setup',
        title: ['查看 Git 和规则的详细说明', 'Git and instruction details'],
      },
    ],
    issues: [
      {
        id: 'git-failed',
        title: [
          '提交失败或要求填写姓名邮箱',
          'Commit fails or asks for identity',
        ],
        check: [
          '保留报错原文；分清是 Git 未安装，还是缺少提交身份。',
          'Keep the error; distinguish missing Git from missing author identity.',
        ],
        action: [
          '请 AI 只处理报错对应的问题。身份信息由本人提供，限定当前项目；安装只走官方入口。完成后重做本步，不把“准备提交”当已保存。',
          'Ask AI to address only the reported issue. Supply author details personally and scope settings to this project. Use official installation sources. Repeat this step afterward; a planned commit is not a saved one.',
        ],
        expected: [
          'AI 给出实际版本编号，idea.md 与规则已纳入记录。',
          'An actual revision includes idea.md and the instructions.',
        ],
      },
    ],
    stage: 'environment',
    understanding: {
      why: [
        'Git 保存已经提交的项目版本，改错时可以回到之前保存的版本。AGENTS.md 是写给 AI 工具的项目说明书和规则。',
        'Git keeps committed project versions you can return to. AGENTS.md explains the project and working rules to the AI tool.',
      ],
      concept: [
        '初始化 Git 是建立保存修改历史的地方；提交才是保存一个版本。AGENTS.md 写明工具做事时要遵守什么。',
        'Initializing Git creates a place for history; committing saves a version. AGENTS.md states the rules the tool should follow.',
      ],
      question: [
        '有仓库但没有提交，是否已有可恢复版本？',
        'Does an empty repository contain a recoverable version?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '已经打开的项目，以及前面确认的项目描述。',
        'Your open project and confirmed description.',
      ],
      output: [
        '工具给出一次成功提交的版本号，文件仍能正常打开。',
        'A successful local revision is reported and the files still open.',
      ],
      answer: [
        '初始化 Git 是建立保存修改历史的地方；提交才是保存一个版本。AGENTS.md 写明工具做事时要遵守什么。',
        'Initializing Git creates a place for history; committing saves a version. AGENTS.md states the rules the tool should follow.',
      ],
      example: [
        '项目/\n  idea.md\n  AGENTS.md（仅工具支持时）\n  .gitignore\n  .git/（隐藏的版本记录）',
        'project/\n  idea.md\n  AGENTS.md (if supported)\n  .gitignore\n  .git/ (hidden history)',
      ],
      recovery: [
        '提示没有安装 Git 时，请工具按你的系统给出官方安装入口，安装后再做这一项。',
        'If Git is missing, ask for the official installation steps for your system, install it and retry.',
      ],
      terms: ['git', 'commit', 'agents-md'],
    },
    referenceAnswer: [
      '没有。仓库初始化只是建立版本管理容器，成功提交后才有相应文件快照；数据库和未纳入Git的文件需另行备份。',
      'No. Initialization creates a repository; a commit creates a snapshot. Databases and untracked material need separate backup.',
    ],
    guidedActions: [
      {
        id: 'checkpoint-1',
        action: [
          '把项目文件夹初始化为 Git 仓库。在刚才的项目对话中发送下面这句话。Git 用来保存修改历史，已经保存的版本可以找回。',
          'Initialize a Git repository in the project chat. Git keeps saved versions of your files so you can return to them.',
        ],
        expect: [
          '工具明确告诉你已经建立或沿用了 Git 仓库。',
          'The tool confirms a new or existing repository.',
        ],
        ifWrong: [
          '提示没有安装 Git 时，请工具按你的系统给出官方安装入口，安装后再做这一项。',
          'If Git is missing, ask for the official installation steps for your system, install it and retry.',
        ],
        afterwards: [
          '工具明确告诉你已经建立或沿用了 Git 仓库。',
          'The tool confirms a new or existing repository.',
        ],
        prompt: [
          '请检查当前项目是否已经是 Git 仓库。如果还不是，请把这个项目文件夹初始化为 Git 仓库；如果已经是，请继续使用现有仓库。先不要提交或上传文件。',
          'Check whether this folder is already a Git repository. If not, initialize one here; otherwise reuse it. Do not commit or upload files yet.',
        ],
      },
      {
        id: 'checkpoint-2',
        action: [
          '创建 AGENTS.md。它是写给 AI 工具看的项目说明书和规则，告诉工具应该怎样做事。',
          'Create AGENTS.md, a project guide and working rules for the AI tool.',
        ],
        expect: [
          '打开 AGENTS.md，能读到项目的工作规则；其他工具则找到它支持的规则文件。',
          'You can open the rules file and read the instructions.',
        ],
        ifWrong: [
          '只有聊天回复而没有文件时，请工具给出保存后的实际文件路径。',
          'If only a chat reply exists, request the actual saved file path.',
        ],
        afterwards: [
          '打开 AGENTS.md，能读到项目的工作规则；其他工具则找到它支持的规则文件。',
          'You can open the rules file and read the instructions.',
        ],
        prompt: [
          '请在项目根目录创建 AGENTS.md，写明：先读项目说明，再做我当前要求的任务；不擅自增加功能；不删除已有成果；完成后告诉我改了哪些文件、怎样检查。已有文件先读并保留原规则，不直接覆盖。若当前工具不支持此文件，请告诉我它支持的规则入口。',
          'Create AGENTS.md at the project root: read the project description first, do only my current task, do not add features or delete existing work, and report changed files and checks. Read existing rules before updating them. If this tool does not support AGENTS.md, tell me its supported rules entry.',
        ],
      },
      {
        id: 'checkpoint-3',
        action: [
          '把前面写好的项目描述保存成 idea.md。回到“整理项目描述”复制已确认内容，再粘贴进下面的话。',
          'Save your confirmed description as idea.md. Copy it from the description step into this message.',
        ],
        expect: [
          '打开 idea.md，可以看到自己的项目名称、用户和想做的功能。',
          'idea.md contains your own project and intended users/features.',
        ],
        ifWrong: [
          '内容不对时指出哪句需要改；不要让工具重新猜一个项目。',
          'Point out incorrect sentences rather than having the tool invent a new project.',
        ],
        afterwards: [
          '打开 idea.md，可以看到自己的项目名称、用户和想做的功能。',
          'idea.md contains your own project and intended users/features.',
        ],
        prompt: [
          '请把下面这份项目说明保存到项目根目录的 idea.md。已有同名文件先告诉我差别，不直接覆盖。项目说明：\n【粘贴我已确认的项目描述】',
          'Save the following description as idea.md at the project root. If it already exists, explain differences before changing it. Description:\n【paste my confirmed description】',
        ],
      },
      {
        id: 'checkpoint-4',
        action: [
          '让 Git 保存第一个版本。仓库建好还不等于文件已经保存成版本；完成这一项，才有可以回来的记录。',
          'Save the first Git version. Initializing a repository alone does not save a version.',
        ],
        expect: [
          '工具给出一次成功提交的版本号，文件仍能正常打开。',
          'A successful local revision is reported and the files still open.',
        ],
        ifWrong: [
          '提交失败先按报错处理，不把初始化成功当成版本已保存；未提交的修改无法靠这次记录找回。',
          'Resolve commit errors first. Initialization alone does not save uncommitted changes.',
        ],
        afterwards: [
          '工具给出一次成功提交的版本号，文件仍能正常打开。',
          'A successful local revision is reported and the files still open.',
        ],
        prompt: [
          '请先检查本次文件，排除密码、密钥、数据库和自动生成文件。把本步确认过的项目说明与规则文件提交到本地 Git，作为第一个版本，并告诉我版本号。不要推送。缺少提交身份时告诉我需要填写什么，不替我编造身份。',
          'Inspect this step’s files and exclude passwords, keys, databases and generated files. Commit only the confirmed description and rules locally, then report the revision. Do not push. Ask for missing author identity instead of inventing it.',
        ],
      },
    ],
  },
  {
    id: 'first-file',
    phase: 'prepare',
    title: ['亲手核对 AI 创建的文件', 'Inspect a file AI actually created'],
    where: [
      '当前项目的 AI 对话，然后在工具的文件区或电脑的文件管理器中打开',
      'The project conversation, then the tool’s file area or your file manager',
    ],
    expected: [
      '能亲自打开 idea.md 和规则文件，内容与上一步保存结果一致。',
      'Both idea.md and the rules file can be opened and match the previous step.',
    ],
    prompt: [
      '先检查能否读取idea.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n只核对当前项目中上一步保存的 idea.md 和项目规则文件。返回真实路径与正文摘要；文件缺失就报告缺失，不新建练习文件、不修改现有文件。',
      'First check access to idea.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nOnly inspect the idea.md and project rules saved in the previous step. Return real paths and content summaries. Report missing files; do not create practice files or change existing files.',
    ],
    issues: [
      {
        id: 'missing-file',
        title: ['找不到上一步的文件', 'Previous files are missing'],
        check: [
          '核对工具与文件管理器是否打开同一个项目目录。',
          'Compare the tool and file manager project locations.',
        ],
        action: [
          '回到项目起点步骤，核对 AI 报告的实际路径；不要创建另一份项目代替。',
          'Return to the baseline step and inspect the reported actual paths; do not create another project.',
        ],
        expected: [
          '能够打开上一步保存的项目描述与规则文件。',
          'The saved brief and rules can be opened.',
        ],
        retry: 'checkpoint',
      },
    ],
    understanding: {
      why: [
        '亲手打开文件，看自己的说明和规则是不是真的保存好了。',
        'Open the files yourself to check that your description and rules were saved.',
      ],
      concept: [
        '聊天里出现一段文字，与项目里已经保存一个文件，是两件事。现在要找的是实际文件。',
        'A chat reply and a saved project file are different. Find the actual file now.',
      ],
      question: [
        '如果 AI 说保存了，却找不到文件，该核对什么？',
        'What should be checked if a claimed file is missing?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '刚才保存的 idea.md、AGENTS.md 或工具使用的规则文件。',
        'The saved idea.md and AGENTS.md or your tool’s instruction file.',
      ],
      output: [
        '两个文件内容正确，能在关闭后重新打开。',
        'Both files are correct and can reopen.',
      ],
      answer: [
        '聊天里出现一段文字，与项目里已经保存一个文件，是两件事。现在要找的是实际文件。',
        'A chat reply and a saved project file are different. Find the actual file now.',
      ],
      example: [
        '应看到自己的项目描述，不是“这里可以写项目描述”这种说明文字。',
        'Expect the actual personal brief, not instructions saying to write one.',
      ],
      recovery: [
        '找不到文件就回上一项确认是否真的保存。',
        'If absent, return to the preceding step and confirm they were saved.',
      ],
      terms: ['markdown', 'file-path'],
    },
    referenceAnswer: [
      '核对同一项目位置、实际文件名与后缀、读回内容；要求报告真实路径。不要用另一份新文件掩盖原文件没保存的问题。',
      'Check location, name/extension and readback, not a replacement file created elsewhere.',
    ],
    guidedActions: [
      {
        id: 'first-file-1',
        action: [
          '让工具给出刚才两个文件的位置。',
          'Ask for the two saved file locations.',
        ],
        expect: [
          '得到自己项目中的文件位置。',
          'The files are located in your project.',
        ],
        ifWrong: [
          '找不到文件就回上一项确认是否真的保存。',
          'If absent, return to the preceding step and confirm they were saved.',
        ],
        afterwards: [
          '得到自己项目中的文件位置。',
          'The files are located in your project.',
        ],
        prompt: [
          '请列出本项目 idea.md 和 AGENTS.md（或本工具对应规则文件）的实际路径，并提供可打开的文件链接。只查看，不修改。',
          'List the actual paths and openable links for idea.md and AGENTS.md, or this tool’s equivalent rules file. Read only.',
        ],
      },
      {
        id: 'first-file-2',
        action: [
          '点击文件链接逐个打开。先看 idea.md 是否是自己的想法，再看规则文件有没有刚才约定的规则。',
          'Open each file link. Compare idea.md with your idea and the rules file with your instructions.',
        ],
        expect: [
          '两个文件内容正确，能在关闭后重新打开。',
          'Both files are correct and can reopen.',
        ],
        ifWrong: [
          '链接打不开就按实际路径在文件管理器中找，不只看聊天里的代码片段。',
          'If links fail, find the actual paths in your file manager.',
        ],
        afterwards: [
          '两个文件内容正确，能在关闭后重新打开。',
          'Both files are correct and can reopen.',
        ],
      },
    ],
  },
  {
    id: 'clarify',
    phase: 'scope',
    title: ['一次回答一个问题', 'Answer one question at a time'],
    where: [
      '带着想法草稿的项目对话',
      'The project conversation with the idea draft',
    ],
    expected: [
      '草稿区分已确定和未确定内容，没有把猜测写成事实。',
      'The draft separates confirmed facts from undecided items.',
    ],
    prompt: [
      '先检查能否读取idea.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取 idea.md，仅澄清影响第一版的问题。先复述项目用户和目标，一次只问一个问题；收到本人回答后再更新 idea.md 的已确认事项和待确认问题。未知项保持未知，不替本人决定，不开发、不制定开发计划。没有阻碍范围确认的问题时说明可以进入范围确认。',
      'First check access to idea.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead idea.md and clarify only questions affecting version one. Restate users and goals, then ask one question at a time. Update confirmed and open items in idea.md only after the user answers. Preserve unknowns; do not decide for the user, implement or plan development. Indicate when scope can be agreed.',
    ],
    issues: [
      {
        id: 'jargon',
        title: [
          'AI 问的技术词看不懂',
          'AI asks about unfamiliar technical terms',
        ],
        check: [
          '先找到这个问题实际影响的使用场景。',
          'Find the user-facing choice behind the technical question.',
        ],
        action: [
          '回复：“请把这个问题换成两种实际使用情况，分别说明对我的影响，再让我选；暂时不用技术词。”',
          'Reply: “Describe two real usage situations and their consequences so I can choose, without technical vocabulary.”',
        ],
        expected: [
          '能按实际需要回答，而不是猜技术名词。',
          'The answer follows actual needs rather than guessed terminology.',
        ],
      },
    ],
    stage: 'refine',
    understanding: {
      why: [
        '把工具没理解的地方解释清楚，避免做出你不想要的功能。',
        'Explain unclear points before the tool builds the wrong thing.',
      ],
      concept: [
        '不用一次回答所有问题；问一个，答一个，不知道就说还没决定。',
        'Answer one question at a time; undecided is a valid answer.',
      ],
      question: [
        '这项未知会改变第一版范围吗？',
        'Does this unknown change first-version scope?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '项目里的 idea.md，以及你还没决定的问题。',
        'Your idea.md and questions you have not decided yet.',
      ],
      output: [
        '打开 idea.md 能看到自己的答案。',
        'idea.md contains your answers.',
      ],
      answer: [
        '不用一次回答所有问题；问一个，答一个，不知道就说还没决定。',
        'Answer one question at a time; undecided is a valid answer.',
      ],
      example: [
        '预约项目需问：名额由谁设置？重复报名怎样算？取消后名额是否释放？',
        'Reservation questions: who sets capacity, what counts as duplicate, and does cancellation free a place?',
      ],
      recovery: [
        '问题里有术语就让它解释成生活例子，不勉强猜答案。',
        'Ask for a simple example if it uses unfamiliar terms.',
      ],
      terms: ['requirement', 'context'],
    },
    referenceAnswer: [
      '会改变使用者、必做功能、数据位置、费用或交付方式的未知应先澄清；不影响当前范围的细节可以明确留待以后。',
      'Clarify unknowns affecting users, required features, data, cost or delivery; defer nonessential details explicitly.',
    ],
    guidedActions: [
      {
        id: 'clarify-1',
        action: [
          '把 idea.md 交给工具看，让它从你的想法中找出还没说清的地方。',
          'Ask the tool to read idea.md and find unclear parts.',
        ],
        expect: [
          '工具先复述，再提出一个你能回答的问题。',
          'The tool restates the idea and asks an answerable question.',
        ],
        ifWrong: [
          '问题里有术语就让它解释成生活例子，不勉强猜答案。',
          'Ask for a simple example if it uses unfamiliar terms.',
        ],
        afterwards: [
          '工具先复述，再提出一个你能回答的问题。',
          'The tool restates the idea and asks an answerable question.',
        ],
        prompt: [
          '请阅读 idea.md，用普通话复述我想做什么。你拿不准的地方一次只问我一个问题，先不要写代码。',
          'Read idea.md and restate my goal in everyday language. Ask one question at a time about what is unclear. Do not code yet.',
        ],
      },
      {
        id: 'clarify-2',
        action: [
          '回答当前问题；不确定就说不确定。等影响第一版的问题都说清后，再保存答案。',
          'Answer the current question, or say undecided. Save once the first-version questions are clear.',
        ],
        expect: [
          '打开 idea.md 能看到自己的答案。',
          'idea.md contains your answers.',
        ],
        ifWrong: [
          '复述不对就先纠正，再让它保存。',
          'Correct misunderstandings before saving.',
        ],
        afterwards: [
          '打开 idea.md 能看到自己的答案。',
          'idea.md contains your answers.',
        ],
        prompt: [
          '请把我刚才确认的答案更新到 idea.md；还没决定的内容单独标出来，不替我决定。',
          'Update idea.md with the answers I confirmed. List undecided items separately without deciding for me.',
        ],
      },
    ],
  },
  {
    id: 'scope',
    phase: 'scope',
    title: ['确认这版只做哪几件事', 'Choose only this version’s essentials'],
    where: ['AI 给出的范围清单', 'The scope list from AI'],
    expected: [
      '清单有具体动作和结果，不只有“好看”“好用”。',
      'The list states actions and outcomes, not only “nice” or “easy”.',
    ],
    sample: [
      '现在做：输入、保存、查看。\n检查：刷新后仍看到刚才那条文字。\n不做：登录、同步、支付。',
      'Now: write, save, view.\nCheck: the same sentence remains after refresh.\nExcluded: accounts, sync, payment.',
    ],
    prompt: [
      '先检查能否读取idea.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取 idea.md，只整理第一版范围：必做功能、暂不做功能和各项可观察的通过条件。先展示清单供本人确认；确认后保存 docs/requirements.md 的范围小节。未知项单列，不添加功能、不写代码、不制定技术方案。',
      'First check access to idea.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead idea.md and propose only version-one scope: required features, exclusions and observable passing criteria. Show it for user confirmation, then save the confirmed scope section in docs/requirements.md. List unknowns separately. Do not add features, code or choose technology.',
    ],
    issues: [
      {
        id: 'empty-shell',
        title: ['删减以后只剩外观', 'Reducing scope left only a picture'],
        check: [
          '能否从输入走到真实结果？',
          'Can an input lead to a real result?',
        ],
        action: [
          '保留一条最短完整流程。记录工具即使不做分类，也要能保存并重新看到记录。',
          'Keep the shortest complete flow. A journal can omit categories but must save and retrieve a record.',
        ],
        expected: [
          '可以实际完成一件事，而不只是看页面。',
          'One task can actually finish, rather than only displaying a page.',
        ],
      },
    ],
    stage: 'scope',
    understanding: {
      why: [
        '先决定第一版必须能做哪些事，其他想法留到以后。',
        'Decide what the first version must do and leave other ideas for later.',
      ],
      concept: [
        '第一版是你准备先完成并使用的一小部分，不是所有想法一次做完。',
        'Version one is the useful part you will finish first, not every idea at once.',
      ],
      question: [
        '删掉这项功能，核心任务还能完成吗？',
        'Can the core task finish without this feature?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '刚才逐个回答并确认的需求问题。',
        'The questions and answers you just confirmed.',
      ],
      output: [
        '需求文件写清这次做什么、暂时不做什么。',
        'The file distinguishes this version from later work.',
      ],
      answer: [
        '第一版是你准备先完成并使用的一小部分，不是所有想法一次做完。',
        'Version one is the useful part you will finish first, not every idea at once.',
      ],
      example: [
        'R01报名：不超过容量；R02取消：取消后释放名额；第二阶段：付费功能。',
        'R01 booking: never exceed capacity. R02 cancel: free a place. Later: payments.',
      ],
      recovery: [
        '清单太大就按真实使用需要缩小，不能删掉完成核心任务必需的步骤。',
        'Reduce scope while keeping everything required for the core task.',
      ],
      terms: ['mvp', 'scope-creep'],
    },
    referenceAnswer: [
      '如果删掉后用户无法完成约定目标，它通常是必做；如果只是更方便，可以评估延期。最终取舍由本人确认。',
      'If removing it prevents the agreed goal, it is usually required; convenience improvements may be deferred by the owner.',
    ],
    guidedActions: [
      {
        id: 'scope-1',
        action: [
          '先列第一版必须完成的事，再列以后可以做的事。',
          'Separate essential first-version work from later ideas.',
        ],
        expect: [
          '两份清单能看懂，没有偷偷加入新功能。',
          'Both lists are understandable and contain no invented features.',
        ],
        ifWrong: [
          '清单太大就按真实使用需要缩小，不能删掉完成核心任务必需的步骤。',
          'Reduce scope while keeping everything required for the core task.',
        ],
        afterwards: [
          '两份清单能看懂，没有偷偷加入新功能。',
          'Both lists are understandable and contain no invented features.',
        ],
        prompt: [
          '请读 idea.md，分成“第一版必须做”和“以后再做”两份清单。每项用我能亲手操作的一句话说明，先给我看，不写代码。',
          'Read idea.md and make two lists: needed in version one and later. Describe each as a user action. Show me first; do not code.',
        ],
      },
      {
        id: 'scope-2',
        action: [
          '逐项确认清单，再让工具保存。',
          'Review each item, then save your decision.',
        ],
        expect: [
          '需求文件写清这次做什么、暂时不做什么。',
          'The file distinguishes this version from later work.',
        ],
        ifWrong: [
          '有遗漏先补清单再确认，不带着模糊范围进入开发。',
          'Fill important gaps before moving into development.',
        ],
        afterwards: [
          '需求文件写清这次做什么、暂时不做什么。',
          'The file distinguishes this version from later work.',
        ],
        prompt: [
          '请把我确认的范围保存到 docs/requirements.md，保留以后再做的清单。没有确认的内容标为待定。',
          'Save the confirmed scope to docs/requirements.md, keeping later ideas and marking undecided items.',
        ],
      },
    ],
  },
  {
    id: 'requirements',
    phase: 'scope',
    title: ['把约定留成看得懂的说明', 'Keep the agreement in plain language'],
    where: [
      '项目中的 docs/requirements.md',
      'docs/requirements.md in the project',
    ],
    expected: [
      '每个主要操作都有预期结果和异常回应。',
      'Each main action has an expected result and an error response.',
    ],
    prompt: [
      '先检查能否读取idea.md、docs/requirements.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取 idea.md 和 docs/requirements.md 的已确认范围。只完善需求文档：每个功能的输入、操作、结果、适用的异常情况和通过条件。保留未知项，不擅自加入保存、登录或云服务。保存并读回 docs/requirements.md，报告本次修改和待确认项。本次不写用户故事、技术方案或代码。',
      'First check access to idea.md, docs/requirements.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead idea.md and the confirmed scope in docs/requirements.md. Complete only requirements: inputs, actions, results, applicable failures and passing criteria. Preserve unknowns; do not add storage, login or cloud services without a requirement. Save and read back the document, reporting changes and questions. Do not write stories, technical plans or code in this step.',
    ],
    issues: [
      {
        id: 'too-long',
        title: [
          '说明太长，不知道该确认哪句',
          'The document is too long to review',
        ],
        check: [
          '找到与第一条使用流程有关的段落。',
          'Find the section for the first user flow.',
        ],
        action: [
          '让 AI 先列出三到五条必须本人决定的事项，逐条给生活化例子。其余资料留在文件里按需查。',
          'Ask AI for three to five decisions that need personal input, with concrete examples. Keep supporting detail in the file.',
        ],
        expected: [
          '能亲自确认范围和结果，未确认项明确保留。',
          'The scope and result can be personally confirmed, with unknowns left visible.',
        ],
      },
    ],
    stage: 'requirements',
    understanding: {
      why: [
        '把已经说好的功能写下来，开发时就能照着检查。',
        'Write agreed features down so you can check the implementation later.',
      ],
      concept: [
        '需求文档记录填什么、做什么、应该得到什么结果。',
        'Requirements record inputs, actions and expected outcomes.',
      ],
      question: [
        '只写“好用”，别人能一致判断通过吗？',
        'Can everyone consistently judge “easy to use”?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '已经确认的第一版功能清单。',
        'Your agreed first-version feature list.',
      ],
      output: [
        '下一步可以依据这份文件写使用过程。',
        'The next step can describe use based on this file.',
      ],
      answer: [
        '需求文档记录填什么、做什么、应该得到什么结果。',
        'Requirements record inputs, actions and expected outcomes.',
      ],
      example: [
        '不合格：报名好用。合格：R01容量20，报名成功余量减1；同一人重复请求不重复占位；已满显示无法报名。',
        'Weak: easy booking. Clear: R01 capacity 20, success reduces remaining places by one; duplicates do not consume extra places; full sessions reject booking.',
      ],
      recovery: [
        '出现“体验良好”等空泛词时，要求换成具体画面或行为。',
        'Replace vague claims like good experience with specific behavior.',
      ],
      terms: ['prd', 'acceptance-criteria'],
    },
    referenceAnswer: [
      '不能。“好用”没有统一观察方法；应改成具体操作和结果，例如重复报名不重复占位。',
      'No. Replace subjective quality with actions and observable outcomes such as duplicate requests not reserving twice.',
    ],
    guidedActions: [
      {
        id: 'requirements-1',
        action: [
          '把每项功能写成“填什么、点什么、看到什么”。',
          'Describe each feature as input, action and visible result.',
        ],
        expect: [
          '每个功能都有实际操作和能看到的结果。',
          'Every feature has an observable result.',
        ],
        ifWrong: [
          '出现“体验良好”等空泛词时，要求换成具体画面或行为。',
          'Replace vague claims like good experience with specific behavior.',
        ],
        afterwards: [
          '每个功能都有实际操作和能看到的结果。',
          'Every feature has an observable result.',
        ],
        prompt: [
          '请读 docs/requirements.md，把每个必做功能写清输入内容、操作、正常结果和失败时的提示。给每项编号，先让我确认。',
          'Read docs/requirements.md. Give each required feature an ID, inputs, actions, normal results and failure messages for my review.',
        ],
      },
      {
        id: 'requirements-2',
        action: [
          '对照自己的想法检查，再保存确认后的版本。',
          'Compare with your idea and save the reviewed version.',
        ],
        expect: [
          '下一步可以依据这份文件写使用过程。',
          'The next step can describe use based on this file.',
        ],
        ifWrong: [
          '如果某项自己也看不懂，先要求解释，不直接确认。',
          'Ask for an explanation before approving unclear items.',
        ],
        afterwards: [
          '下一步可以依据这份文件写使用过程。',
          'The next step can describe use based on this file.',
        ],
        prompt: [
          '请把我确认的内容更新到 docs/requirements.md，保留每项怎样测试才算做好，不增加未提出的功能。',
          'Update docs/requirements.md with confirmed content and a practical check for each feature. Do not add unrequested features.',
        ],
      },
    ],
  },
  {
    id: 'stories',
    phase: 'scope',
    title: ['把用户怎样使用写清楚', 'Describe how people will use it'],
    where: [
      '项目对话与 docs/requirements.md',
      'Project chat and docs/requirements.md',
    ],
    expected: [
      '每个第一版功能都能对应到一个用户操作和通过条件。',
      'Each first-version feature maps to a user action and acceptance criteria.',
    ],
    prompt: [
      '先检查能否读取idea.md、docs/requirements.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取 idea.md 和 docs/requirements.md。只整理已确认范围：按“什么用户，在什么情况下，希望完成什么，为什么”写用户故事；每个故事写开始条件、操作、正常结果、失败提示和通过条件。把用户故事保存为独立文档 docs/stories.md（不要并入 docs/requirements.md）。未知项标待确认，不增加功能。保存后读回并报告文件位置。本次不写业务代码。',
      'First check access to idea.md, docs/requirements.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead idea.md and docs/requirements.md. Write stories for confirmed scope: who, situation, goal and reason. Add prerequisites, actions, normal results, failure feedback and acceptance criteria. Save the stories as a separate document, docs/stories.md (do not merge them into docs/requirements.md). Mark unknowns, save and read back the file. Do not implement yet.',
    ],
    stage: 'requirements',
    understanding: {
      why: [
        '把用户从打开作品到完成任务的过程写清楚，容易发现漏掉的步骤。',
        'Write the whole user journey to discover missing actions.',
      ],
      concept: [
        '用户故事说的是谁要完成什么；操作过程说明他先做什么、再做什么。',
        'A user story names who needs what; the journey gives the actions in order.',
      ],
      question: [
        '“支持保存”和“保存后重新打开仍能找到原文”，哪一句更容易亲手检查？',
        'Which is easier to check: “supports saving” or “the original text remains after reopening”?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          'AI 只列功能名，没有使用过程',
          'AI lists features without a user flow',
        ],
        check: [
          '找出一个故事是否包含开始条件、操作和结果。',
          'Check one story for prerequisites, actions and results.',
        ],
        action: [
          '回复：“请把第一个功能改写成一个人的实际操作过程，写出正常和失败时分别看到什么；不增加新功能。”',
          'Reply: “Rewrite the first feature as a person’s real flow, with normal and failed outcomes, without adding features.”',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    support: {
      input: [
        '项目中已经保存的需求文档。',
        'The requirements document saved in your project.',
      ],
      output: [
        '使用过程前后接得上，文件能打开。',
        'The sequence connects and the file opens.',
      ],
      answer: [
        '用户故事说的是谁要完成什么；操作过程说明他先做什么、再做什么。',
        'A user story names who needs what; the journey gives the actions in order.',
      ],
      example: [
        'S01关联R01：成员打开活动→看到余位→提交→收到确认；已满时停在活动页并解释原因。',
        'S01 maps to R01: open event, see availability, submit, receive confirmation; when full, remain on the page with a reason.',
      ],
      recovery: [
        '突然出现尚未说明的账号或页面时，先补它的来源和进入方法。',
        'Explain any account or page that appears without an introduction.',
      ],
      terms: ['user-story', 'user-flow'],
    },
    referenceAnswer: [
      '后一句更容易检查，因为给出了保存后的操作和可观察结果。还应注明同一设备还是跨设备，避免误解。',
      'The second is testable; also specify same-device or cross-device behavior.',
    ],
    guidedActions: [
      {
        id: 'stories-1',
        action: [
          '让工具把使用过程像讲故事一样写出来：谁打开哪里，先做什么，接着做什么。',
          'Describe a person using the project from start to finish.',
        ],
        expect: [
          '能按文字想象一个人实际使用的顺序。',
          'You can picture a real person following the sequence.',
        ],
        ifWrong: [
          '突然出现尚未说明的账号或页面时，先补它的来源和进入方法。',
          'Explain any account or page that appears without an introduction.',
        ],
        afterwards: [
          '能按文字想象一个人实际使用的顺序。',
          'You can picture a real person following the sequence.',
        ],
        prompt: [
          '请读 idea.md 和 docs/requirements.md，写出每种用户从打开项目到完成任务的一次完整过程。一步写一个动作，也写出出错后怎样继续。先不要开发。',
          'Read idea.md and docs/requirements.md. Write each user’s complete journey, one action at a time, including recovery from errors. Do not build yet.',
        ],
      },
      {
        id: 'stories-2',
        action: [
          '按自己会使用的方式读一遍，指出缺少的步骤，再保存。',
          'Read it as a user, fill gaps and save.',
        ],
        expect: [
          '使用过程前后接得上，文件能打开。',
          'The sequence connects and the file opens.',
        ],
        ifWrong: [
          '例如写了“付款成功”却没说在哪里付款，就先补上操作。',
          'Fill missing actions such as where payment starts before saying it succeeded.',
        ],
        afterwards: [
          '使用过程前后接得上，文件能打开。',
          'The sequence connects and the file opens.',
        ],
        prompt: [
          '请把我确认的使用过程保存到 docs/stories.md，并保留对应的需求编号。',
          'Save the confirmed journeys to docs/stories.md with their requirement IDs.',
        ],
      },
    ],
  },
  {
    id: 'prototype',
    phase: 'scope',
    title: [
      '先看关键页面，再决定怎么开发',
      'Review a key screen before building',
    ],
    where: [
      '项目对话与 AI 给出的原型预览',
      'Project chat and prototype preview',
    ],
    expected: [
      '能看懂第一版操作顺序，清楚哪些只是演示、哪些已经实现。',
      'The first-version flow is understandable, with simulated and implemented behavior distinguished.',
    ],
    prompt: [
      '先检查能否读取docs/requirements.md、docs/stories.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取 docs/requirements.md 的需求与 docs/stories.md 的用户故事。只制作一条核心流程的轻量原型；无界面项目给输入输出样例。说明入口、主操作、结果、返回和适用的失败状态；标注模拟数据及未实现功能。给出查看位置供本人确认，确认后将界面决定记录到 docs/design.md 的交互小节。只做原型，不实现正式业务或选择技术方案。',
      'First check access to docs/requirements.md, docs/stories.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead requirements in docs/requirements.md and stories in docs/stories.md. Create only a lightweight prototype of one core flow, or input/output examples for a headless project. Include entry, action, result, return and applicable failures; label mocked data and unimplemented features. Provide its location for review, then record confirmed interaction decisions in docs/design.md. Do not implement production logic or select technology.',
    ],
    stage: 'ui',
    understanding: {
      why: [
        '先看看页面草稿，确认入口和按钮放对了，再花时间开发。',
        'Review a draft before spending time building the features.',
      ],
      concept: [
        '页面草稿也叫原型，可以演示样子和顺序，但里面的保存按钮可能还不能真正保存。',
        'A prototype previews appearance and sequence; its Save button may still be simulated.',
      ],
      question: [
        '画面显示“保存成功”，怎样确认它不是演示文字？',
        'How could a “Saved” message be distinguished from a simulation?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          '原型看起来能用，但不清楚哪些是假数据',
          'The prototype may use simulated behavior',
        ],
        check: [
          '查看 AI 是否标注了模拟数据、保存位置和真实服务。',
          'Check for labels identifying simulated data, storage and real services.',
        ],
        action: [
          '要求 AI 按控件列出“仅演示／真实实现／未实现”，然后只验布局和已说明的行为；保存能力留到实际开发时检查。',
          'Ask AI to label controls as simulated, real or unimplemented. Review layout and declared behavior; verify real persistence during development.',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    templateKind: 'prompt',
    support: {
      input: ['需求文档和用户操作顺序。', 'The requirements and user journey.'],
      output: [
        '设计文件可以给后面的开发步骤使用。',
        'The design file guides later implementation.',
      ],
      answer: [
        '页面草稿也叫原型，可以演示样子和顺序，但里面的保存按钮可能还不能真正保存。',
        'A prototype previews appearance and sequence; its Save button may still be simulated.',
      ],
      example: [
        '“报名成功”只是演示时，必须标“模拟结果，尚未写入真实记录”。',
        'A simulated confirmation must say it has not stored a real reservation.',
      ],
      recovery: [
        '打开方式不清楚就要求准确地址或文件位置。',
        'Request an exact URL or file location if unclear.',
      ],
      terms: ['prototype', 'mock'],
    },
    referenceAnswer: [
      '按要求真正保存，再重新读取或重开核对实际记录；原型可能只有假数据和提示文字，所以此时不能认定已实现。',
      'Actually write and reread/reopen the record when implemented; a prototype message alone is not evidence.',
    ],
    guidedActions: [
      {
        id: 'prototype-1',
        action: [
          '先看页面草稿。页面草稿只帮助决定东西放哪里、点击后去哪里。',
          'Preview a draft to decide what goes where and what buttons do.',
        ],
        expect: ['有能打开查看的页面草稿。', 'A draft opens for review.'],
        ifWrong: [
          '打开方式不清楚就要求准确地址或文件位置。',
          'Request an exact URL or file location if unclear.',
        ],
        afterwards: ['有能打开查看的页面草稿。', 'A draft opens for review.'],
        prompt: [
          '请根据 docs/requirements.md 和 docs/stories.md 做一条主要使用过程的页面草稿。告诉我怎样打开，每个按钮会去哪里；还不能实际使用的部分请标明。先不要接数据库。',
          'Use docs/requirements.md and docs/stories.md to draft the main journey. Tell me how to open it and where buttons lead. Mark simulated behavior. Do not connect a database yet.',
        ],
      },
      {
        id: 'prototype-2',
        action: [
          '从第一屏按顺序点一遍，指出找不到入口或看不懂的地方。',
          'Click through the draft and identify unclear entries.',
        ],
        expect: [
          '能找到主要输入、按钮和结果。',
          'Main inputs, buttons and results are easy to find.',
        ],
        ifWrong: [
          '一次只改具体位置，避免一句“更好看”让工具全部重做。',
          'Name specific changes rather than asking for a complete redesign.',
        ],
        afterwards: [
          '能找到主要输入、按钮和结果。',
          'Main inputs, buttons and results are easy to find.',
        ],
        prompt: [
          '请只调整我指出的这些位置：【填写】。保留其他已确认内容，完成后告诉我从哪里再看。',
          'Change only these locations: 【fill in】. Preserve confirmed work and tell me where to review it.',
        ],
      },
      {
        id: 'prototype-3',
        action: [
          '把确认的页面和操作方法保存下来。',
          'Save the approved screen and action decisions.',
        ],
        expect: [
          '设计文件可以给后面的开发步骤使用。',
          'The design file guides later implementation.',
        ],
        ifWrong: [
          '把演示效果误写成已开发完成时，要求纠正。',
          'Correct any demonstration described as finished development.',
        ],
        afterwards: [
          '设计文件可以给后面的开发步骤使用。',
          'The design file guides later implementation.',
        ],
        prompt: [
          '请把确认的页面安排和按钮作用写入 docs/design.md，区分已经能用和仍是演示的部分。',
          'Write screen arrangements and button behavior to docs/design.md. Separate working features from demonstrations.',
        ],
      },
    ],
  },
  {
    id: 'choose-stack',
    phase: 'scope',
    title: ['把实际条件交给 AI 选做法', 'Let AI choose from actual conditions'],
    where: [
      '技术选择资料页，再回到项目对话',
      'The stack guide, then the project conversation',
    ],
    expected: [
      '知道记录存在哪里、是否能换设备看、需要哪些费用。',
      'Know where records live, whether devices share them, and what costs exist.',
    ],
    refs: [
      {
        path: 'stacks',
        title: [
          '填写实际条件并带回方案',
          'Enter conditions and bring back a proposal',
        ],
      },
    ],
    issues: [
      {
        id: 'local-shared',
        title: [
          '我不知道“本机”和“共享”怎么选',
          'I do not know local versus shared storage',
        ],
        check: [
          '是否需要在另一部手机看到同一条记录？',
          'Must another phone see the same record?',
        ],
        action: [
          '不需要就先只在当前浏览器保存。需要就记录共享需求，让 AI 说明服务、账号和费用；不要把本机演示当已同步。',
          'If not, start in one browser. If yes, record sharing needs and ask AI about services, accounts, and costs; a local demo is not sync.',
        ],
        expected: [
          '方案和实际使用方式一致，未知费用没有被当作免费。',
          'The plan matches real use, and unknown costs are not assumed free.',
        ],
      },
    ],
    stage: 'stack',
    understanding: {
      why: [
        '请工具解释准备用哪些东西来做项目，以及会不会产生费用。',
        'Ask which tools will build the project and what they cost.',
      ],
      concept: [
        '前端是看得见的页面；后端处理请求；数据库保存记录。你的项目需要哪部分，就准备哪部分。',
        'The frontend is the page, the backend processes requests and the database stores records. Prepare the parts your project needs.',
      ],
      question: [
        '为什么本机保存不等于手机电脑自动同步？',
        'Why does local storage not imply device sync?',
      ],
    },
    prompt: [
      '先检查能否读取docs/requirements.md、docs/stories.md、docs/design.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n实际设备与系统：【填写】\n可接受预算：【填写或尚未确定】\n使用方式与数据要求：【填写本机/多人、是否保存、是否跨设备；未知写尚未确定】\n读取 docs/requirements.md 与 docs/design.md 中的交互决定，只建议满足已确认范围的技术方案。解释推荐理由、费用、限制和数据位置；优先沿用已有项目。关键条件未知时先询问。本人确认后，将方案保存到 docs/design.md 的技术方案小节，保留交互内容。本次不安装、不初始化、不开发。 将最难能力和交付资格的最小验证写入设计，列设备/账号前提、预期结果及失败时替代方案；实验在环境准备后执行。',
      'First check access to docs/requirements.md, docs/stories.md, docs/design.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nDevice and OS: [fill in]\nBudget: [fill in or undecided]\nUsage and data needs: [local/shared, storage, cross-device or undecided]\nRead requirements and interaction decisions in docs/design.md. Recommend only technology meeting confirmed scope, explaining reasons, costs, limits and data location. Prefer the existing project. Ask about essential unknowns; after confirmation save the technical section in docs/design.md, preserving interaction decisions. Do not install, initialize or implement. Record a minimal feasibility test for the hardest capability and delivery eligibility, including device/account prerequisites, expected result and alternatives. Execute after environment preparation.',
    ],
    templateKind: 'prompt',
    support: {
      input: [
        '已经确认的页面草稿，以及使用设备、费用和保存数据的要求。',
        'The agreed page draft, devices, budget and data needs.',
      ],
      output: [
        '后面准备环境时知道要安装什么、先试什么。',
        'Environment setup knows what to install and try first.',
      ],
      answer: [
        '前端是看得见的页面；后端处理请求；数据库保存记录。你的项目需要哪部分，就准备哪部分。',
        'The frontend is the page, the backend processes requests and the database stores records. Prepare the parts your project needs.',
      ],
      example: [
        '例如必须读取手机本地文件：先在目标设备验证选择文件与权限，再决定是否采用该方案。',
        'If phone file access is essential, verify file selection and permissions on the target device first.',
      ],
      recovery: [
        '方案中有陌生名称时，让工具先解释用途，再谈是否使用。',
        'Ask what unfamiliar tools do before choosing them.',
      ],
      terms: ['stack', 'poc'],
    },
    referenceAnswer: [
      '本机资料只在当前设备或浏览器中。跨设备需要约定的数据服务、身份或同步方式，并用另一设备验证，不会自动发生。',
      'Local data stays on that device/browser. Cross-device use needs designed storage/identity/sync and another-device verification.',
    ],
    guidedActions: [
      {
        id: 'choose-stack-1',
        action: [
          '告诉工具项目给谁用、需要保存什么、预算多少。让它解释准备采用的做法。',
          'Give users, storage needs and budget, then ask for an understandable approach.',
        ],
        expect: [
          '你能理解三个部分分别负责什么。',
          'You understand the role of each part.',
        ],
        ifWrong: [
          '方案中有陌生名称时，让工具先解释用途，再谈是否使用。',
          'Ask what unfamiliar tools do before choosing them.',
        ],
        afterwards: [
          '你能理解三个部分分别负责什么。',
          'You understand the role of each part.',
        ],
        prompt: [
          '请读已确认需求和 docs/design.md，推荐一种适合我的做法。分别解释页面怎么做、处理请求的程序在哪里运行、数据存在哪里、需要什么费用。先不要安装。',
          'Read the requirements and docs/design.md. Recommend one approach and explain the page, the program processing requests, data storage and costs. Do not install yet.',
        ],
      },
      {
        id: 'choose-stack-2',
        action: [
          '确认适合自己的做法，并把决定写进设计文件。',
          'Confirm the approach and record it.',
        ],
        expect: [
          '后面准备环境时知道要安装什么、先试什么。',
          'Environment setup knows what to install and try first.',
        ],
        ifWrong: [
          '关键条件不能满足时先换做法，不开始大量开发。',
          'Change an unworkable approach before building extensively.',
        ],
        afterwards: [
          '后面准备环境时知道要安装什么、先试什么。',
          'Environment setup knows what to install and try first.',
        ],
        prompt: [
          '请把我确认的做法、需要准备的账号和最难部分的试验方法写入 docs/design.md。未确定的条件保留待定。',
          'Save the chosen approach, required accounts and a small test of its hardest part in docs/design.md. Keep unknowns pending.',
        ],
      },
    ],
  },
  {
    id: 'plan',
    phase: 'scope',
    title: ['让 AI 列出下一小步', 'Ask AI for the next small task'],
    where: ['项目中的 tasks/todo.md', 'tasks/todo.md in the project'],
    expected: [
      '有顺序的任务表，每项都有待做、待检查或完成状态。',
      'An ordered list distinguishes pending, awaiting checks, and completed tasks.',
    ],
    prompt: [
      '先检查能否读取docs/requirements.md、docs/stories.md、docs/design.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取已确认需求、用户故事和设计，只制定开发计划。将每个必做需求编号映射到一个或多个任务，覆盖全部第一版范围；把第一条完整流程作为先做顺序，不删除其他必做项。每项含任务编号、依赖、产物、适用测试、通过条件与状态；关键能力实验先做。展示供本人确认后保存 tasks/todo.md，未确认项单列。本步不安装、不写代码。',
      'First check access to docs/requirements.md, docs/stories.md, docs/design.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead confirmed requirements, stories and design. Plan only: map every required requirement ID to tasks covering all version-one scope. Start with one complete flow without dropping others. Include task ID, dependencies, outputs, applicable tests, criteria and status; prioritize feasibility checks. Show for confirmation, then save tasks/todo.md and list unknowns. Do not install or implement.',
    ],
    issues: [
      {
        id: 'vague-task',
        title: [
          '第一项只有“完成前端”',
          'The first task just says “build frontend”',
        ],
        check: [
          '这一项完成后具体能打开什么？',
          'What can actually be opened after this task?',
        ],
        action: [
          '请 AI 拆成“显示标题和输入框”“阻止空白保存”“保存后显示记录”等可单独检查的任务。',
          'Ask AI to split it into showing a title and field, rejecting blank saves, and showing a saved record.',
        ],
        expected: [
          '第一项有一个能亲手检查的明确结果。',
          'The first item has one observable outcome.',
        ],
      },
    ],
    stage: 'plan',
    understanding: {
      why: [
        '把开发拆成一小项一小项，做完一项就能打开看看。',
        'Split development into small tasks you can inspect as they finish.',
      ],
      concept: [
        '任务表告诉你下一项做什么、需要什么、怎样判断做完了。',
        'A task list names the next job, prerequisites and completion check.',
      ],
      question: [
        '第一项做完，具体能打开或操作什么？',
        'What can be opened or used after the first task?',
      ],
    },
    support: {
      input: [
        '已经确认的需求、页面草稿和技术方案。',
        'Your agreed requirements, page draft and technology choices.',
      ],
      output: [
        '能找到下一项该做什么以及完成标准。',
        'The next task and its passing check are clear.',
      ],
      answer: [
        '任务表告诉你下一项做什么、需要什么、怎样判断做完了。',
        'A task list names the next job, prerequisites and completion check.',
      ],
      example: [
        'R02取消 → T04实现取消 → 测试：取消一次释放1个名额；重复取消不再加名额。',
        'R02 cancellation → T04 implement it → test: release one place once; repeated cancellation releases no more.',
      ],
      recovery: [
        '第一项就包含整个项目时，让工具继续拆小。',
        'Split tasks further if the first one is the whole project.',
      ],
      terms: ['plan', 'dependency'],
    },
    referenceAnswer: [
      '看该任务的产物和通过条件，应该能说出实际入口、操作及结果。若只有“完成基础架构”，应要求拆到可检查的成果。',
      'Name its entry, action and result from the task criteria. Vague infrastructure tasks need inspectable outputs.',
    ],
    guidedActions: [
      {
        id: 'plan-1',
        action: [
          '让工具把要做的功能排成先后顺序。',
          'Ask for an ordered list of small development tasks.',
        ],
        expect: [
          '第一项任务明确，后面的任务有顺序。',
          'The first task is clear and later tasks have an order.',
        ],
        ifWrong: [
          '第一项就包含整个项目时，让工具继续拆小。',
          'Split tasks further if the first one is the whole project.',
        ],
        afterwards: [
          '第一项任务明确，后面的任务有顺序。',
          'The first task is clear and later tasks have an order.',
        ],
        prompt: [
          '请读需求、docs/stories.md 和 docs/design.md，把开发拆成小任务。每项写清先做什么、会新增什么文件或功能、完成后我怎样试。先给我看计划，不写代码。',
          'Read requirements, docs/stories.md and docs/design.md. Break development into small tasks, each with prerequisites, files/features and a personal test. Show the plan without coding.',
        ],
      },
      {
        id: 'plan-2',
        action: [
          '检查需求是否都被安排到了，再保存任务表。',
          'Check that all required features are planned and save.',
        ],
        expect: [
          '能找到下一项该做什么以及完成标准。',
          'The next task and its passing check are clear.',
        ],
        ifWrong: [
          '漏了某项必做功能就补计划，别靠后面临时想起。',
          'Add missing essential features to the plan now.',
        ],
        afterwards: [
          '能找到下一项该做什么以及完成标准。',
          'The next task and its passing check are clear.',
        ],
        prompt: [
          '请把我确认的任务保存到 tasks/todo.md。每项标记未开始，并保留对应需求编号。',
          'Save confirmed tasks to tasks/todo.md with requirement IDs and not-started status.',
        ],
      },
    ],
  },
  {
    id: 'environment',
    phase: 'build',
    title: [
      '检查运行环境，启动最小项目',
      'Check the runtime and start the project',
    ],
    where: ['当前项目对话', 'The current project chat'],
    expected: [
      '最小项目能实际启动，README 写明再次打开的方法，未安装项不冒充完成。',
      'The minimal project starts and README explains reopening; missing prerequisites stay explicit.',
    ],
    prompt: [
      '先检查能否读取docs/design.md、tasks/todo.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取已确认设计与 tasks/todo.md，仅准备本项目运行环境并验证最小入口。先检查系统、已有文件、运行时、包管理器和锁文件；保留已有配置。缺安装/权限条件先给本人对应官方入口、执行位置和成功检查；不得假装已安装。条件满足后按确认方案安装必要依赖、启动最小项目，报告真实网址/设备入口/命令、日志和停止方法。验证重新启动，并先执行设计中已确认的最小能力实验；失败记阻断并返回选型，不开发后续功能。把真实操作写入 README.md，结果写入 docs/checks.md，不发布。',
      'First check access to docs/design.md, tasks/todo.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead design and tasks/todo.md. Prepare only this project’s runtime and minimal entry. Inspect OS, files, runtime, package manager and lockfile; preserve configuration. Explain missing installation/access with official entry, execution location and verification. Install only agreed dependencies, start the minimal entry, and report actual URL/device/command, logs and stop method. Verify restart and any approved feasibility experiment; record failures as blockers and return to selection. Save actual instructions in README.md and evidence in docs/checks.md; do not build later features or publish.',
    ],
    stage: 'environment',
    understanding: {
      why: [
        '先把运行项目需要的软件装好，并确认能打开最小页面。',
        'Install what the project needs and check that a minimal page opens.',
      ],
      concept: [
        '运行环境就是让程序在电脑上运行所需的软件；依赖是项目要用的现成程序包。',
        'The runtime is software needed to execute the program; dependencies are packages it uses.',
      ],
      question: [
        '已经有 Git 提交，但预览打不开，能否据此认定环境已经准备好？',
        'Does a Git commit prove the runtime works when preview cannot open?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          '安装或启动失败，不知道停在哪里',
          'Installation or startup fails',
        ],
        check: [
          '保留原报错，核对命令在哪个文件夹执行及实际系统版本。',
          'Keep the exact error, working folder and OS version.',
        ],
        action: [
          '把原报错和文件位置交给 AI，请它区分缺依赖、版本冲突、权限和端口占用，只处理查明的一项。不要删除项目或反复安装不同工具。',
          'Give AI the error and location. Distinguish missing dependency, version, permission and port issues; fix the identified cause without deleting the project or repeatedly installing tools.',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    support: {
      input: [
        '技术方案和按顺序排列的开发任务表。',
        'Your technology choices and ordered development tasks.',
      ],
      output: [
        '打开工具给出的地址能看到页面，README 中有下次启动方法。',
        'The URL opens a page and README explains reopening.',
      ],
      answer: [
        '运行环境就是让程序在电脑上运行所需的软件；依赖是项目要用的现成程序包。',
        'The runtime is software needed to execute the program; dependencies are packages it uses.',
      ],
      example: [
        '成功记录示意（非真实日志）：命令/执行目录/版本/实际入口/停止方法/重启结果；“安装成功”不等于项目已启动。',
        'Illustrative record: command, directory, versions, real entry, stop method and restart result. Installation is not startup.',
      ],
      recovery: [
        '不懂报错就复制原文给工具，不同时安装多个不同版本试运气。',
        'Copy error text instead of trying many random versions.',
      ],
      terms: ['runtime', 'package-manager', 'lockfile'],
    },
    referenceAnswer: [
      '不能。Git只管理文件版本；运行时、依赖、配置和启动过程仍需实际验证。',
      'No. Git tracks files; runtime, dependencies, configuration and startup need separate verification.',
    ],
    guidedActions: [
      {
        id: 'environment-1',
        action: [
          '先检查电脑能否运行这个项目。',
          'Check whether your computer can run this project.',
        ],
        expect: [
          '知道缺哪些软件，以及从哪里安装。',
          'You know what is missing and where to install it.',
        ],
        ifWrong: [
          '不懂报错就复制原文给工具，不同时安装多个不同版本试运气。',
          'Copy error text instead of trying many random versions.',
        ],
        afterwards: [
          '知道缺哪些软件，以及从哪里安装。',
          'You know what is missing and where to install it.',
        ],
        prompt: [
          '请读 docs/design.md 和 tasks/todo.md，检查本项目需要的运行软件是否已安装。缺什么请给我官方安装入口、适合我的系统的操作，以及怎样确认装好了。先不要开发功能。',
          'Read docs/design.md and tasks/todo.md. Check required software; for anything missing give official installation steps for my system and a success check. Do not build features.',
        ],
      },
      {
        id: 'environment-2',
        action: [
          '让工具准备最小项目需要的文件，再安装必要程序包。空文件夹还没有运行配置，需要先创建；已有文件先检查并保留。',
          'Prepare minimal project files before installing packages. An empty folder needs configuration first; inspect and preserve existing files.',
        ],
        expect: [
          '有实际配置和启动文件，必要程序包已安装。',
          'Actual configuration and startup files exist and required packages are installed.',
        ],
        ifWrong: [
          '权限不足就按工具说明完成当前必要操作，不直接删除配置重来。',
          'Resolve the specific permission issue rather than deleting configuration.',
        ],
        afterwards: [
          '有实际配置和启动文件，必要程序包已安装。',
          'Actual configuration and startup files exist and required packages are installed.',
        ],
        prompt: [
          '请读 docs/design.md 和 tasks/todo.md。检查现有配置；缺少时，按已确认方案创建最小项目的配置和启动文件，再安装必要依赖。保留项目说明、规则和已有成果。本次只准备能启动的最小项目，不提前开发业务功能。失败时先解释第一条错误。',
          'Read docs/design.md and tasks/todo.md. Inspect existing configuration; if missing, create minimal configuration and startup files for the agreed approach, then install required dependencies. Preserve instructions, rules and existing work. Prepare only a runnable minimal project, without building business features. Explain the first error if setup fails.',
        ],
      },
      {
        id: 'environment-3',
        action: [
          '启动一个能打开的最小页面，再记下启动方法。',
          'Start the smallest working page and save the startup instructions.',
        ],
        expect: [
          '打开工具给出的地址能看到页面，README 中有下次启动方法。',
          'The URL opens a page and README explains reopening.',
        ],
        ifWrong: [
          '地址打不开就核对服务是否还在运行和网址是否相同，不猜端口。',
          'Check the running service and exact URL instead of guessing ports.',
        ],
        afterwards: [
          '打开工具给出的地址能看到页面，README 中有下次启动方法。',
          'The URL opens a page and README explains reopening.',
        ],
        prompt: [
          '请启动本项目最小页面，告诉我在哪里执行、实际打开哪个地址，以及怎样停止。把验证过的方法写入 README.md，检查结果写入 docs/checks.md。',
          'Start the minimal project. Give the execution location, actual URL and stop method. Save verified instructions in README.md and results in docs/checks.md.',
        ],
      },
    ],
  },
  {
    id: 'preview',
    phase: 'build',
    title: ['打开第一张属于自己的页面', 'Open the first page of the project'],
    where: [
      'AI 给出的预览地址或 HTML 文件',
      'The preview URL or HTML file AI provides',
    ],
    expected: [
      '浏览器里出现自己的项目页面，能够说明是从哪里打开的。',
      'The browser shows the project, and its opening method is known.',
    ],
    prompt: [
      '先检查能否读取docs/requirements.md、docs/stories.md、docs/design.md、tasks/todo.md、README.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取项目规则、docs/requirements.md、docs/stories.md、docs/design.md 和 tasks/todo.md。沿用已验证的运行环境，只实施当前第一项尚未完成的开发任务；任务不明确或超出本步可检查范围时先说明。按该任务的测试标准实际检查，给出真实预览入口和操作方法，更新该任务状态。不要重复初始化，不自动执行后续任务，不发布。 将需求编号、任务编号、实际测试及未测项写入 docs/checks.md。任务先标待本人核对；收到本人明确结果后才标通过，再保存仅属于本任务的本地版本，报告版本号与安全恢复说明，不覆盖无关工作。',
      'First check access to docs/requirements.md, docs/stories.md, docs/design.md, tasks/todo.md, README.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead project rules, requirements, design and tasks/todo.md. Reuse the verified runtime and implement only the first unfinished development task. Ask if unclear or too broad to check here. Execute that task’s checks, give the real preview entry and instructions, and update its status. Do not reinitialize, execute later tasks or publish. Record requirement/task IDs, actual checks and untested work in docs/checks.md. Mark awaiting personal review first; mark passed only after the user reports success, then save only this task’s local revision and safe recovery instructions while preserving unrelated work.',
    ],
    issues: [
      {
        id: 'cannot-open',
        title: ['地址打不开或一直加载', 'The preview will not open'],
        check: [
          '确认使用完整地址；询问 AI 当前服务是否还在运行。',
          'Use the full URL and check with AI whether the preview service is running.',
        ],
        action: [
          '把地址和浏览器报错一起交给 AI，要求实际检查启动结果和端口；保持启动窗口运行。不要仅更换一个猜测的端口。',
          'Give AI the URL and exact browser error. Ask for an actual service and port check; keep the start process running rather than guessing another port.',
        ],
        expected: [
          '重新打开同一个已核验地址，可以看到项目标题。',
          'The verified address opens the project title.',
        ],
      },
    ],
    stage: 'build',
    understanding: {
      why: [
        '从任务表第一项开始制作，每次亲手看完结果再继续。',
        'Build from the first task and inspect each result before continuing.',
      ],
      concept: [
        '预览是打开正在开发的作品，看看真实页面和功能是什么样。',
        'A preview opens the work in progress so you can see its real pages and behavior.',
      ],
      question: [
        '关闭启动窗口后，为什么地址可能打不开？',
        'Why might the URL fail after its process stops?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '能够运行的最小项目和任务表中的第一项。',
        'Your runnable minimal project and the first development task.',
      ],
      output: [
        '任务表记录真实进度，可以继续下一项。',
        'Task status reflects actual progress.',
      ],
      answer: [
        '预览是打开正在开发的作品，看看真实页面和功能是什么样。',
        'A preview opens the work in progress so you can see its real pages and behavior.',
      ],
      example: [
        'T01入口：已检查；T02报名：待做；T03取消：待做 → 当前还不能进入“全部功能验收通过”。',
        'T01 entry checked; T02 booking pending; T03 cancel pending → full acceptance is not yet possible.',
      ],
      recovery: [
        '工具一次做了很多无关功能时，先让它说明改动，回到已确认任务。',
        'If unrelated work was added, review it and return to the agreed task.',
      ],
      terms: ['iteration', 'commit'],
    },
    referenceAnswer: [
      '本地网址通常由该窗口运行的服务提供。关闭进程后它停止响应，按README重启即可，不需要重新开发。',
      'The local URL is served by the running process. Restart it using README instead of rebuilding the project.',
    ],
    guidedActions: [
      {
        id: 'preview-1',
        action: [
          '让工具先读任务表，只做下一项尚未完成的任务。',
          'Have the tool do the next unfinished task only.',
        ],
        expect: [
          '得到这次修改的说明和能打开的作品入口。',
          'You receive a change summary and working entry.',
        ],
        ifWrong: [
          '工具一次做了很多无关功能时，先让它说明改动，回到已确认任务。',
          'If unrelated work was added, review it and return to the agreed task.',
        ],
        afterwards: [
          '得到这次修改的说明和能打开的作品入口。',
          'You receive a change summary and working entry.',
        ],
        prompt: [
          '请读 tasks/todo.md，找出下一项已经具备开始条件的任务。告诉我这次做什么，再只完成这一项。保留其他文件，完成后给我打开作品的方法和测试结果。',
          'Read tasks/todo.md and identify the next task whose prerequisites are ready. Explain and complete only that task. Preserve other files and report how to open and test it.',
        ],
      },
      {
        id: 'preview-2',
        action: [
          '打开作品，亲自操作这一项功能。不要只读工具的“完成”回复。',
          'Open the project and try this feature yourself.',
        ],
        expect: [
          '实际结果与任务表中写的相同，或能指出哪里不同。',
          'The result matches the task or you can name the difference.',
        ],
        ifWrong: [
          '打不开就把网址和报错发给工具；没有测试条件就先记未测试。',
          'Report the URL and error if it will not open; keep unavailable tests pending.',
        ],
        afterwards: [
          '实际结果与任务表中写的相同，或能指出哪里不同。',
          'The result matches the task or you can name the difference.',
        ],
      },
      {
        id: 'preview-3',
        action: [
          '把实际结果告诉工具，再决定做下一项还是先修问题。',
          'Report what happened before continuing.',
        ],
        expect: [
          '任务表记录真实进度，可以继续下一项。',
          'Task status reflects actual progress.',
        ],
        ifWrong: [
          '失败就保留现象，按后面的反馈和修复步骤处理。',
          'Record failures and follow the feedback/repair steps.',
        ],
        afterwards: [
          '任务表记录真实进度，可以继续下一项。',
          'Task status reflects actual progress.',
        ],
        prompt: [
          '我的实际操作和结果是：【填写】。请更新 tasks/todo.md 和 docs/checks.md；只有已经检查通过的任务才标完成。保存本次已确认修改的本地版本，不推送。',
          'My actions and results: 【fill in】. Update tasks/todo.md and docs/checks.md; complete only checked tasks. Save the confirmed changes as a local revision without pushing.',
        ],
      },
    ],
  },
  {
    id: 'interface',
    phase: 'build',
    title: ['只调整眼前这一页', 'Adjust this page only'],
    where: [
      '刚打开的项目页面与 AI 对话',
      'The preview and project conversation',
    ],
    expected: [
      '适用的界面调整已核对，原功能仍可用；无界面项目记录不适用。',
      'Relevant interface edits are checked and existing behavior works; headless projects record not applicable.',
    ],
    sample: [
      '把“保存记录”按钮放在输入框下面，保留保存行为和历史列表不变。',
      'Move Save below the input without changing storage or the history list.',
    ],
    prompt: [
      '先检查能否读取docs/design.md、tasks/todo.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n要调整的页面与位置：【填写】\n当前表现：【填写】\n希望调整成什么：【填写具体效果】\n只修改上述界面位置，沿用已确认设计，不修改无关功能或数据逻辑。完成后提供预览入口，核对指定效果和受影响的原有操作，报告实际结果。',
      'First check access to docs/design.md, tasks/todo.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nPage and location: [fill in]\nCurrent appearance: [fill in]\nDesired change: [concrete result]\nChange only this interface location, following the agreed design and preserving unrelated features and data logic. Provide a preview and check both the requested result and affected existing actions. Report actual results.',
    ],
    refs: [
      {
        path: 'components',
        title: [
          '不知道控件叫什么？按用途查找',
          'Find an unfamiliar control by purpose',
        ],
      },
    ],
    issues: [
      {
        id: 'changed-too-much',
        title: [
          '改外观后其他功能也变了',
          'A visual edit changed other behavior',
        ],
        check: [
          '对照上一份可用版本，指出一个具体变化。',
          'Compare with the previous working version and identify one change.',
        ],
        action: [
          '让 AI 比较改动，只修复受影响行为；恢复版本前先说明影响，不覆盖新写的内容。',
          'Ask AI to compare changes and fix only the affected behavior. Explain recovery impact before overwriting new work.',
        ],
        expected: [
          '外观符合要求，原保存流程仍能使用。',
          'The appearance fits and the original save flow still works.',
        ],
      },
    ],
    stage: 'ui',
    understanding: {
      why: [
        '让使用者看得懂文字，找得到输入框和按钮。',
        'Make labels, fields and buttons understandable and easy to find.',
      ],
      concept: [
        '界面就是使用者看到和操作的页面；这里先改一处具体问题。',
        'The interface is what people see and use; fix one specific problem here.',
      ],
      question: [
        '这次调整让哪个具体操作更容易了？',
        'Which action became easier?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '已经打开的项目页面，以及一处你想改进的地方。',
        'Your open project page and one thing to improve.',
      ],
      output: [
        '页面清楚可用，原功能没有被改坏。',
        'The page is usable and the original feature still works.',
      ],
      answer: [
        '界面就是使用者看到和操作的页面；这里先改一处具体问题。',
        'The interface is what people see and use; fix one specific problem here.',
      ],
      example: [
        '位置：活动页报名按钮。处理中禁重复提交；失败说明原因并可重试；成功显示实际报名结果。',
        'Location: event booking button. Prevent repeat submission while loading; explain errors and allow retry; show the real result.',
      ],
      recovery: [
        '先解决妨碍使用的地方，不用一句“整体优化”让工具重做全部页面。',
        'Fix a specific usability problem rather than requesting a complete redesign.',
      ],
      terms: ['component', 'state', 'a11y'],
    },
    referenceAnswer: [
      '应能指出具体改善，例如更容易找到报名入口、错误原因可见；只说“更漂亮”不足以判断操作是否改善。',
      'Name an actual improvement, such as discoverable booking or clear errors, beyond visual preference.',
    ],
    guidedActions: [
      {
        id: 'interface-1',
        action: [
          '打开自己的作品，指出一处用户找不到或看不懂的位置，例如输入框没有名字、按钮挡住文字。',
          'Open your project and locate one confusing place, such as an unlabeled field or overlapping button.',
        ],
        expect: [
          '知道具体要改哪个页面、哪个位置。',
          'You can name the page and location to change.',
        ],
        ifWrong: [
          '先解决妨碍使用的地方，不用一句“整体优化”让工具重做全部页面。',
          'Fix a specific usability problem rather than requesting a complete redesign.',
        ],
        afterwards: [
          '知道具体要改哪个页面、哪个位置。',
          'You can name the page and location to change.',
        ],
      },
      {
        id: 'interface-2',
        action: [
          '把这一处问题和希望的效果告诉工具。',
          'Tell the tool the problem and desired result.',
        ],
        expect: ['能打开修改后的页面。', 'The updated page opens.'],
        ifWrong: [
          '结果不对就描述具体差别，继续只改这一处。',
          'Describe the remaining difference and keep the fix focused.',
        ],
        afterwards: ['能打开修改后的页面。', 'The updated page opens.'],
        prompt: [
          '请只修改【页面和具体位置】：现在是【实际样子】，我希望【清楚的结果】。保留其他已确认页面和功能，修改后给我查看地址。',
          'Change only 【page/location】. It currently looks like 【actual】; I need 【specific result】. Preserve other pages/features and give me the review URL.',
        ],
      },
      {
        id: 'interface-3',
        action: [
          '再操作一次这项功能，然后缩窄窗口，确认文字、输入框和按钮仍能使用。',
          'Try the feature again and narrow the window to check text, fields and buttons.',
        ],
        expect: [
          '页面清楚可用，原功能没有被改坏。',
          'The page is usable and the original feature still works.',
        ],
        ifWrong: [
          '发现遮挡或点击失效就记录位置和画面，再请工具修这一处。',
          'Record any overlap or failed click and request a focused repair.',
        ],
        afterwards: [
          '页面清楚可用，原功能没有被改坏。',
          'The page is usable and the original feature still works.',
        ],
      },
    ],
  },
  {
    id: 'save',
    phase: 'build',
    title: ['让“保存”真正留下内容', 'Make Save retain real content'],
    where: [
      '项目的输入框、保存按钮和历史列表',
      'The project field, Save button, and history',
    ],
    expected: [
      '需求中的保存与读取结果已实际验证；不需要保存的项目明确记录不适用。',
      'Required saving and reading are verified, or storage is explicitly not applicable.',
    ],
    prompt: [
      '先检查能否读取docs/requirements.md、docs/design.md、tasks/todo.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取需求与设计，先确认本项目是否要求持久保存。没有此需求时说明本步不适用并停止，不添加保存功能。有要求时，只实现已确认的数据保存与读取，使用需求规定的输入和访问规则，不擅自增加历史列表、登录或云服务。以可删除的测试数据验证保存、重新打开及适用的失败处理，报告实际结果和未验证项。',
      'First check access to docs/requirements.md, docs/design.md, tasks/todo.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead requirements and design to confirm whether persistent storage is required. If not, mark this step not applicable and stop without adding it. Otherwise implement only agreed saving and reading, using required inputs and access rules. Do not add history, login or cloud services without a requirement. Use disposable test data to check saving, reopening and applicable failures. Report actual and unverified results.',
    ],
    issues: [
      {
        id: 'lost-record',
        title: [
          '保存不了，或刷新后记录不见了',
          'Cannot save, or records vanish on refresh',
        ],
        check: [
          '先比较两次打开的完整地址和浏览器。localhost 与 127.0.0.1、不同端口、隐私窗口可能不是同一份保存空间。',
          'Compare the full URL and browser. localhost versus 127.0.0.1, different ports, or private windows may use different storage.',
        ],
        action: [
          '回到原来的浏览器和完整地址再查。仍找不到时保留输入和错误，发送本页求助材料，让 AI 核对实际写入和读取；不要清空浏览器资料。',
          'Return to the original browser and full URL. If still missing, preserve input and errors, send the help material, and ask AI to inspect actual writes and reads. Do not clear browser data.',
        ],
        expected: [
          '在同一位置保存新测试记录，刷新后仍能找到；旧记录恢复情况单独说明。',
          'A new test record survives refresh in the same location; state separately whether old data was recovered.',
        ],
      },
    ],
    stage: 'backend',
    refs: [
      {
        path: 'data',
        title: [
          '需要共享数据？查看另一条保存路径',
          'Need sharing? See the other storage path',
        ],
      },
    ],
    understanding: {
      why: [
        '让用户填写的内容真正存下来，关掉页面后还能找回。',
        'Store entered content so it can be found after the page closes.',
      ],
      concept: [
        '看到“保存成功”还要查记录是否真的写入；刷新、重新打开后也应读得到。',
        'After a success message, check the real record and read it after reopening.',
      ],
      question: [
        '怎样证明保存结果不是只留在当前画面？',
        'How can persistence beyond the current screen be proven?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '已经可以填写内容的页面，以及需求中约定的保存方式。',
        'Your input page and the agreed storage requirements.',
      ],
      output: [
        '记录在设计约定的位置保留，内容与保存时相同。',
        'The entry remains in the storage location promised by the design, with its original content.',
      ],
      answer: [
        '看到“保存成功”还要查记录是否真的写入；刷新、重新打开后也应读得到。',
        'After a success message, check the real record and read it after reopening.',
      ],
      example: [
        '两人抢最后1个名额：只能1人成功；另一人看到已满。重复请求不能多占名额。',
        'Two users claim the last place: exactly one succeeds; repeats do not reserve additional places.',
      ],
      recovery: [
        '工具只说“完成”时，追问实际位置和表名；别删库重建。',
        'Ask for the actual location/table if the response only says done.',
      ],
      terms: ['database', 'api', 'authorization'],
    },
    referenceAnswer: [
      '在约定存放位置读回，再关闭并重开；共享需求还需另一用户/设备检查。仅当前界面显示不证明持久保存。',
      'Read from the intended storage, close/reopen, and test another user/device if sharing is required.',
    ],
    guidedActions: [
      {
        id: 'save-1',
        action: [
          '先建立真正存放记录的地方。数据库就像项目的登记本，页面关闭后记录还在里面。先看设计文件：不用保存的项目跳过本步；只保存在浏览器的项目按原方案检查，不增加后端或数据库。下面的数据库操作用于已经选择数据库的项目。',
          'Prepare real storage. A database keeps records after the page closes.  If no storage is needed, skip this step. For browser-only storage, follow that design without adding a backend or database. Database actions apply only when the design requires one.',
        ],
        expect: [
          '知道数据位置和每条记录会保存的内容。',
          'You know where records live and what they contain.',
        ],
        ifWrong: [
          '工具只说“完成”时，追问实际位置和表名；别删库重建。',
          'Ask for the actual location/table if the response only says done.',
        ],
        afterwards: [
          '知道数据位置和每条记录会保存的内容。',
          'You know where records live and what they contain.',
        ],
        prompt: [
          '请读需求，检查本项目的数据应该保存在哪里。需要数据库时，先检查已有内容，再建立缺少的表，告诉我实际位置、每条记录保存哪些字段。不要清空已有数据。',
          'Read the requirements and inspect storage. If a database is needed, inspect existing content, create only missing tables and report its location and record fields. Do not erase data.',
        ],
      },
      {
        id: 'save-2',
        action: [
          '已选择后端的项目：让后端能够保存和读取记录。后端是收到页面请求后实际处理事情的程序。',
          'If your design uses a backend: Make the backend save and read records. It is the program processing page requests.',
        ],
        expect: [
          '合法内容有真实编号，数据库里能找到，空白内容没有写入。',
          'A valid record has a matching database ID; blank input is not inserted.',
        ],
        ifWrong: [
          '保存失败就把错误原文保留，请工具查请求是否到达后端。',
          'Keep the error and check whether the request reached the backend.',
        ],
        afterwards: [
          '合法内容有真实编号，数据库里能找到，空白内容没有写入。',
          'A valid record has a matching database ID; blank input is not inserted.',
        ],
        prompt: [
          '请实现或检查保存一条记录和读取列表的后端接口。接口就是页面发送或索取内容的入口。用测试记录检查保存结果，告诉我记录编号，再核对数据库中同一条记录。空白内容应被拒绝。',
          'Implement or inspect save-one and read-list endpoints. Test a record, report its ID and verify the matching database record. Reject blank input.',
        ],
      },
      {
        id: 'save-3',
        action: [
          '已选择后端的项目：把页面按钮连接到刚才的保存功能。',
          'If your design uses a backend: Connect the page’s Save button to the checked backend.',
        ],
        expect: [
          '点一次保存后，能在列表里找到刚才的内容。',
          'One save produces a record you can find in the list.',
        ],
        ifWrong: [
          '只在页面多出一行还不够；请工具用编号核对数据库。',
          'Match its ID to the database rather than trusting an extra on-screen row.',
        ],
        afterwards: [
          '点一次保存后，能在列表里找到刚才的内容。',
          'One save produces a record you can find in the list.',
        ],
        prompt: [
          '请把页面的保存按钮连接到已检查的后端。保存期间避免重复点击，失败保留输入并解释原因，真正保存成功后再显示成功。告诉我打开哪个地址来试。',
          'Connect Save to the checked backend. Prevent repeat pending clicks, keep input on failure and show success only after saving. Give me the test URL.',
        ],
      },
      {
        id: 'save-4',
        action: [
          '保存一条容易辨认的测试内容，例如“保存测试 001”，刷新并重新打开页面查找它。设计要求数据在后端共享时，再用另一个浏览器打开同一网址；只存在浏览器里的资料应在原浏览器检查。',
          'Save a recognizable test entry such as “save test 001”, refresh and reopen the page to find it. Use another browser only if the design calls for shared backend data; check browser-only data in the original browser.',
        ],
        expect: [
          '记录在设计约定的位置保留，内容与保存时相同。',
          'The entry remains in the storage location promised by the design, with its original content.',
        ],
        ifWrong: [
          '找不到先核对网址、账号和数据库位置，保留原数据。',
          'Check URL, account and storage location without deleting data.',
        ],
        afterwards: [
          '记录在设计约定的位置保留，内容与保存时相同。',
          'The entry remains in the storage location promised by the design, with its original content.',
        ],
      },
    ],
  },
  {
    id: 'flow',
    phase: 'build',
    title: ['从开始到结束走通一次', 'Finish the whole flow once'],
    where: ['实际预览页面', 'The actual preview'],
    expected: [
      '本项目核心流程有逐步检查记录，失败和未执行项没有被记为通过。',
      'The core flow has step-by-step evidence; failures and unexecuted actions are not marked passed.',
    ],
    prompt: [
      '先检查能否读取docs/requirements.md、tasks/todo.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取 docs/requirements.md 中的一条已确认核心流程，按其入口、操作和结果逐步执行。将预期、实际、证据与通过/失败/未执行状态写入 docs/checks.md。无法操作的环节写明限制并给本人操作方法。本次只检查完整流程，不修改代码、不新增功能。 开始前列适用测试账号/可清理资料和创建入口；先测一条再覆盖其他必做流程。',
      'First check access to docs/requirements.md, tasks/todo.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead one confirmed core flow in docs/requirements.md and execute its entry, actions and results in order. Record expected and actual results, evidence and passed/failed/not-run status in docs/checks.md. Explain inaccessible actions and how the user can perform them. Only check the flow; do not change code or add features. Before testing, list applicable test accounts/disposable data and setup entries; start with one flow, then cover other required flows.',
    ],
    issues: [
      {
        id: 'button-no-result',
        title: [
          '按钮能点，但没有结果',
          'The button responds but nothing happens',
        ],
        check: [
          '观察是没有提示，还是提示成功却没有记录。',
          'Check whether feedback is absent or success is shown without a record.',
        ],
        action: [
          '把具体文字和操作交给 AI，要求比较输入、事件和保存结果，不要只改按钮颜色。',
          'Give AI the text and actions. Ask it to inspect input, events, and storage rather than only the button style.',
        ],
        expected: [
          '同一操作得到真实结果，不只出现动画。',
          'The action produces a real result, not just an animation.',
        ],
      },
    ],
    stage: 'flow',
    understanding: {
      why: [
        '像使用者一样从头做一遍，检查每个步骤能不能接着往下走。',
        'Act as a user and check that every action leads to the next.',
      ],
      concept: [
        '完整流程包括打开、输入、提交和看到结果，不能只试一个按钮。',
        'A complete flow includes opening, input, submission and results, not one button alone.',
      ],
      question: [
        '从第一次打开开始，能独立完成吗？',
        'Can the task be completed independently from opening?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '已经能保存并读回内容的项目，以及用户操作步骤。',
        'Your working save/read features and the user journey.',
      ],
      output: [
        '每条必做流程都有实际结果。',
        'Every required journey has an honest result.',
      ],
      answer: [
        '完整流程包括打开、输入、提交和看到结果，不能只试一个按钮。',
        'A complete flow includes opening, input, submission and results, not one button alone.',
      ],
      example: [
        'R01 / 版本abc / 输入测试姓名 / 预期确认+余位减1 / 实际一致 / 证据截图路径 / 通过。',
        'R01 / revision abc / test name / expect confirmation and one fewer place / actual matches / evidence path / passed.',
      ],
      recovery: [
        '出现没建过的账号或页面时，先回相应步骤准备。',
        'Prepare any missing account or page before continuing.',
      ],
      terms: ['e2e', 'test-case'],
    },
    referenceAnswer: [
      '从普通用户入口按步骤操作，不能借助管理员后台补数据或依赖未写出的口头说明；缺任何一步就补入流程。',
      'Use the ordinary entry without admin shortcuts or unwritten guidance; document missing actions.',
    ],
    guidedActions: [
      {
        id: 'flow-1',
        action: [
          '让工具写一份从打开作品到完成任务的操作清单。',
          'Ask for a checklist from opening the project to finishing a task.',
        ],
        expect: ['得到能照着做的清单。', 'You have a usable checklist.'],
        ifWrong: [
          '出现没建过的账号或页面时，先回相应步骤准备。',
          'Prepare any missing account or page before continuing.',
        ],
        afterwards: ['得到能照着做的清单。', 'You have a usable checklist.'],
        prompt: [
          '请读需求和 tasks/todo.md，列一条普通用户完整使用过程。一步只写一个动作，说明输入什么、点击哪里、应该看到什么。没有准备好的功能先标出来。',
          'Read requirements and tasks/todo.md. Write one ordinary-user journey, one action at a time, with inputs, clicks and expected results. Mark unfinished prerequisites.',
        ],
      },
      {
        id: 'flow-2',
        action: [
          '打开作品，照清单逐项做一遍。每次写下自己真正看到的结果。',
          'Open the project and follow each action, recording what you actually see.',
        ],
        expect: [
          '能从开始走到结束，或准确指出停在哪一步。',
          'You finish the flow or can identify the exact stopping point.',
        ],
        ifWrong: [
          '卡住就停，保留输入、网址和错误，不连续乱点。',
          'Stop on failure and keep input, URL and error.',
        ],
        afterwards: [
          '能从开始走到结束，或准确指出停在哪一步。',
          'You finish the flow or can identify the exact stopping point.',
        ],
      },
      {
        id: 'flow-3',
        action: [
          '把记录交给工具保存，再检查其他必须完成的使用过程。',
          'Save your record and cover the remaining required journeys.',
        ],
        expect: [
          '每条必做流程都有实际结果。',
          'Every required journey has an honest result.',
        ],
        ifWrong: [
          '有失败先记反馈，修好后重走同一条流程。',
          'Report failures and repeat the same journey after repair.',
        ],
        afterwards: [
          '每条必做流程都有实际结果。',
          'Every required journey has an honest result.',
        ],
        prompt: [
          '请把以下本人测试记录保存到 docs/checks.md：【粘贴操作、预期、实际结果】。通过、失败和没测试的项目分开写，不代替我填写通过。',
          'Save my test record to docs/checks.md: 【actions, expected, actual】. Separate passed, failed and untested checks; do not invent passes.',
        ],
      },
    ],
  },
  {
    id: 'test',
    phase: 'check',
    title: ['试试空白和连续点击', 'Try blank input and repeated clicks'],
    where: ['只含测试资料的项目页面', 'The project with test data only'],
    expected: [
      '适用的异常检查有真实记录，失败和未执行项保持原状态。',
      'Applicable failure checks have evidence; failures and unexecuted cases retain their status.',
    ],
    prompt: [
      '先检查能否读取docs/requirements.md、docs/checks.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取需求的异常情况和测试标准，只检查当前功能适用的异常输入与重复操作。不要为无输入或无保存的项目硬加对应功能。逐项在 docs/checks.md 记录操作、预期、实际和通过/失败/未执行；不具备条件时说明限制。本次只测试和记录，不修复；失败项交给后续反馈与修复步骤。',
      'First check access to docs/requirements.md, docs/checks.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead failure cases and test criteria; check only invalid inputs and repeated actions applicable to the current features. Do not add input or storage to make a test applicable. Record actions, expected and actual results and passed/failed/not-run status in docs/checks.md. Explain unavailable conditions. Only test and record; leave repairs to the feedback and repair steps.',
    ],
    issues: [
      {
        id: 'test-failed',
        title: ['出现空记录或重复记录', 'Blank or duplicate records appear'],
        check: [
          '记下点击次数和生成的记录数，不急着删除证据。',
          'Note the clicks and resulting record count; keep evidence.',
        ],
        action: [
          '只收集当前现象、操作、版本与报错原文，必要时只读排查；本步不修代码。失败记录到反馈，按“先确定怎么修、怎样算修好”确认计划后再修复。',
          'Collect symptoms, actions, revision and exact errors; use read-only diagnosis if needed. Do not repair here. Record feedback and confirm the plan in “Plan the fix and its passing checks” first.',
        ],
        expected: [
          '有可核对的实际记录，未执行仍标未测试，失败仍标失败。',
          'Verifiable records exist; untested and failed results keep their status.',
        ],
      },
    ],
    stage: 'test',
    understanding: {
      why: [
        '试试填错、重复点击或服务停止时，作品能不能清楚提示并保留资料。',
        'Try invalid input, repeat clicks and service failure to check feedback and retained data.',
      ],
      concept: [
        '异常测试就是故意试一试不顺利的情况，看看作品会怎样处理。',
        'Failure testing deliberately tries things going wrong to see how the project responds.',
      ],
      question: [
        '除了正常输入，最可能发生哪种误操作？',
        'Which mistake is most likely besides normal input?',
      ],
    },
    templateKind: 'prompt',
    support: {
      input: [
        '已经正常走完的使用过程，以及只用于测试的内容。',
        'Your working user flow and disposable test content.',
      ],
      output: [
        '失败和未测项没有被改成通过。',
        'Failures and untested checks are not marked passed.',
      ],
      answer: [
        '异常测试就是故意试一试不顺利的情况，看看作品会怎样处理。',
        'Failure testing deliberately tries things going wrong to see how the project responds.',
      ],
      example: [
        '重复报名：通过；断网：失败；iPhone真机：未测试。不能把这份报告写成“全部通过”。',
        'Duplicate booking passed; offline failed; iPhone device untested. This is not an all-pass report.',
      ],
      recovery: [
        '只有页面拦截还不够，让工具检查后端是否同样拒绝。',
        'Ask the tool to check backend rejection as well.',
      ],
      terms: ['regression', 'concurrency'],
    },
    referenceAnswer: [
      '按本项目行为选择，如重复点击、空输入、取消、断网或无权限，并写预期处理；不是给所有项目增加相同功能。',
      'Choose likely project-specific mistakes and expected handling; do not add features merely to test them.',
    ],
    guidedActions: [
      {
        id: 'test-1',
        action: [
          '先测试错误输入。在作品里不填必填项就点提交，再试过长内容。',
          'Try invalid input: submit empty required fields and overly long content.',
        ],
        expect: [
          '页面解释哪里不对，也没有保存无效记录。',
          'The page explains the problem without saving invalid records.',
        ],
        ifWrong: [
          '只有页面拦截还不够，让工具检查后端是否同样拒绝。',
          'Ask the tool to check backend rejection as well.',
        ],
        afterwards: [
          '页面解释哪里不对，也没有保存无效记录。',
          'The page explains the problem without saving invalid records.',
        ],
      },
      {
        id: 'test-2',
        action: [
          '检查重复点击和服务中断时会发生什么。先让工具给出只影响本项目测试环境的办法。',
          'Check repeated clicks and service interruption in this project’s test environment only.',
        ],
        expect: [
          '有明确的测试和恢复方法。',
          'You have clear testing and recovery steps.',
        ],
        ifWrong: [
          '不知道进程属于谁时先不停止，要求工具确认项目和端口。',
          'Identify the project and port before stopping any process.',
        ],
        afterwards: [
          '有明确的测试和恢复方法。',
          'You have clear testing and recovery steps.',
        ],
        prompt: [
          '请列出本项目测试重复点击和服务暂时停止的操作。一次只测一项，说明怎样停止本项目服务和恢复。不要停止其他项目。只测试，先不修代码。',
          'Give step-by-step tests for repeat clicks and a stopped service, one at a time. Explain how to stop and restore only this project. Test without repairing yet.',
        ],
      },
      {
        id: 'test-3',
        action: [
          '按说明试一次服务停止后的保存，再恢复服务。',
          'Try saving with the service stopped, then restore it.',
        ],
        expect: [
          '没有假成功，未提交内容保留；恢复后先查列表再决定是否重试。',
          'No false success; input stays. Check the list before retrying after recovery.',
        ],
        ifWrong: [
          '已保存但返回失败时不要重复提交，先请工具按内容和编号核对。',
          'If it may already be saved, verify content/ID before submitting again.',
        ],
        afterwards: [
          '没有假成功，未提交内容保留；恢复后先查列表再决定是否重试。',
          'No false success; input stays. Check the list before retrying after recovery.',
        ],
      },
      {
        id: 'test-4',
        action: ['把结果给工具记下来。', 'Record the results.'],
        expect: [
          '失败和未测项没有被改成通过。',
          'Failures and untested checks are not marked passed.',
        ],
        ifWrong: [
          '没有相应功能就注明不适用及原因，不为测试临时增加功能。',
          'Explain inapplicability instead of adding unnecessary features.',
        ],
        afterwards: [
          '失败和未测项没有被改成通过。',
          'Failures and untested checks are not marked passed.',
        ],
        prompt: [
          '请把刚才各项异常测试的预期、实际和未测试原因写入 docs/checks.md。失败保持失败，留给反馈与修复步骤处理。',
          'Write expected/actual results and untested reasons in docs/checks.md. Keep failures open for feedback and repair.',
        ],
      },
    ],
  },
  {
    id: 'restart',
    phase: 'check',
    title: ['关掉以后，还能重新打开', 'Reopen it after stopping'],
    where: [
      'README.md 的启动说明和原项目',
      'The restart instructions and original project',
    ],
    expected: [
      '能够按说明重新打开原项目，核心操作可用；数据保留按实际需求检查。',
      'The original project reopens as documented and the core action works; retention is checked as required.',
    ],
    prompt: [
      '先检查能否读取README.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n请把当前项目关闭后重新启动的动作写入 README.md：打开哪个文件夹、在哪里执行、具体命令或文件、准确地址、该看到什么。请实际核验，不猜端口。先记录原数据基线，停止并重启本项目服务后核对同一编号与内容；无保存需求则只查核心运行。把实际命令、入口、版本、工具检查和本人尚待复测项写入 docs/checks.md。',
      'First check access to README.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nWrite verified restart steps in README.md: which folder, where to run, exact command or file, URL, and expected result. Do not guess a port. Record a data baseline, stop and restart this project service, then compare IDs/content; without persistence check core execution only. Save actual commands, entry, revision, tool checks and pending personal retests in docs/checks.md.',
    ],
    issues: [
      {
        id: 'restart-failed',
        title: ['第二天地址打不开', 'The address fails the next day'],
        check: [
          '昨天的预览服务是否已经停止？',
          'Has yesterday’s preview service stopped?',
        ],
        action: [
          '打开原项目，让 AI 按 README 重新启动并报告实际地址。不要新建替代项目；原数据位置保持不变。',
          'Open the original project and ask AI to restart it from README and report the real URL. Do not create a replacement project or change the data location.',
        ],
        expected: [
          '原项目能打开，记录恢复情况已核对。',
          'The original project opens and its records have been checked.',
        ],
      },
    ],
    understanding: {
      why: [
        '确认今天关掉以后，明天照着说明还能打开并继续用。',
        'Check that you can close it today and reopen it from the instructions tomorrow.',
      ],
      concept: [
        '浏览器页面与后端服务不是同一个东西；关浏览器后服务可能还在运行。',
        'The browser page and backend are separate; closing the browser may leave the service running.',
      ],
      question: [
        '明天没有这段聊天，还知道怎样打开吗？',
        'Could it be reopened tomorrow without this chat?',
      ],
    },
    support: {
      input: [
        '项目的启动说明，以及一条已保存的测试记录。',
        'The startup instructions and a saved test record.',
      ],
      output: [
        '重开后能继续使用，记录按需求保留。',
        'The reopened project works and retains required data.',
      ],
      answer: [
        '浏览器页面与后端服务不是同一个东西；关浏览器后服务可能还在运行。',
        'The browser page and backend are separate; closing the browser may leave the service running.',
      ],
      example: [
        '静态介绍页：重开能浏览即可。记事工具：还必须找回原记录。',
        'A static page must reopen; a notes tool must also retain notes.',
      ],
      recovery: [
        '方法没写清时，请工具补具体目录、命令和网址。',
        'Ask for the exact directory, command and URL if missing.',
      ],
      terms: ['url', 'database'],
    },
    referenceAnswer: [
      '应能只靠README找到项目、运行命令或安装入口及结果；否则先补真实启动说明，再验证一次。',
      'README should locate the project, entry/command and expected result without chat history.',
    ],
    guidedActions: [
      {
        id: 'restart-1',
        action: [
          '先记下一条已保存记录，再找到 README.md 里的停止和启动方法。',
          'Note one saved record and find README’s stop/start instructions.',
        ],
        expect: [
          '知道待会儿要找回哪条记录。',
          'You know which record to find after reopening.',
        ],
        ifWrong: [
          '方法没写清时，请工具补具体目录、命令和网址。',
          'Ask for the exact directory, command and URL if missing.',
        ],
        afterwards: [
          '知道待会儿要找回哪条记录。',
          'You know which record to find after reopening.',
        ],
      },
      {
        id: 'restart-2',
        action: [
          '停止并重新启动本项目。仅关掉浏览器还不算停止后端。',
          'Stop and restart the project; closing the browser alone does not stop its backend.',
        ],
        expect: ['服务重新运行，能打开作品。', 'The restarted project opens.'],
        ifWrong: [
          '端口占用先查归属；浏览器禁止某端口时换允许的空闲端口，不关闭安全保护。',
          'Identify occupied ports; use a free allowed port rather than disabling browser protection.',
        ],
        afterwards: [
          '服务重新运行，能打开作品。',
          'The restarted project opens.',
        ],
        prompt: [
          '请按 README.md 停止并重新启动本项目服务，保留数据库。告诉我实际打开哪个网址；不要新建项目或重置数据。',
          'Stop and restart this project using README.md, keeping its database. Give the actual URL; do not create a new project or reset data.',
        ],
      },
      {
        id: 'restart-3',
        action: [
          '打开新启动的网址，找刚才那条记录，再做一次主要操作。',
          'Open the reported URL, find the record and try the main action.',
        ],
        expect: [
          '重开后能继续使用，记录按需求保留。',
          'The reopened project works and retains required data.',
        ],
        ifWrong: [
          '丢记录时先核对项目路径和数据库位置，不清库重来。',
          'Check project and database paths before changing data.',
        ],
        afterwards: [
          '重开后能继续使用，记录按需求保留。',
          'The reopened project works and retains required data.',
        ],
        prompt: [
          '我的重开结果是：【填写】。请把实际启动方法和结果更新到 README.md 与 docs/checks.md。',
          'My reopening result is: 【fill in】. Update README.md and docs/checks.md with actual instructions and results.',
        ],
      },
    ],
  },
  {
    id: 'accept',
    phase: 'check',
    title: ['对照最初想法，确认真的能用', 'Check it against the original idea'],
    where: [
      '想法草稿、需求文件与实际作品',
      'The idea, requirements, and actual work',
    ],
    expected: [
      '留下本人的试用结果；可以决定先自用，不必马上发布。',
      'Personal trial results are recorded; local use is a valid choice.',
    ],
    prompt: [
      '本次试用版本与入口：【填写】\n对应的原始目标：【填写】\n本人实际操作：【填写】\n预期结果：【填写】\n实际结果：【填写，不以 AI 声称完成代替】\n结论：【通过／失败／未测试】\n未通过或未测试的事项：【填写或无】',
      'Version and entry: [fill in]\nOriginal goal: [fill in]\nActions personally performed: [fill in]\nExpected result: [fill in]\nActual result: [not an AI completion claim]\nVerdict: [passed/failed/not tested]\nOutstanding items: [details or none]',
    ],
    issues: [
      {
        id: 'not-sure',
        title: [
          'AI 说全部完成，但我仍不会用',
          'AI says done, but I cannot use it',
        ],
        check: [
          '能否不看聊天记录，独自完成最重要的操作？',
          'Can the main task be completed without reading the chat?',
        ],
        action: [
          '指出第一个需要解释的位置，要求修改界面或补启动说明，再亲手重做，不把困惑归咎于自己。',
          'Identify the first point needing explanation. Ask for a clearer interface or restart guide, then repeat it personally.',
        ],
        expected: [
          '主流程无需作者额外解释也能完成。',
          'The main flow works without extra explanation from its author.',
        ],
      },
    ],
    stage: 'accept',
    understanding: {
      why: [
        '回到最初的想法，亲自看看作品有没有解决自己的问题。',
        'Return to the original goal and personally check whether the project solves it.',
      ],
      concept: [
        '验收就是你按照先前约定的方法试用，再决定是否达到了目标。',
        'Acceptance means trying the agreed checks yourself and deciding whether the goal is met.',
      ],
      question: [
        '是否还有不能接受的问题或未试过的关键步骤？',
        'Are there blockers or untried core steps?',
      ],
    },
    choices: [
      {
        id: 'feedback',
        label: ['有问题，记录反馈', 'Record issues'],
      },
      {
        id: 'delivery',
        label: ['已达到条件，准备交付', 'Ready for delivery'],
      },
    ],
    templateKind: 'worksheet',
    support: {
      input: [
        '最初的需求文档和你实际试用后的记录。',
        'Your original requirements and actual trial results.',
      ],
      output: [
        'docs/acceptance.md 中保存了本人实际操作和结论。',
        'docs/acceptance.md contains your actual actions and conclusion.',
      ],
      answer: [
        '验收就是你按照先前约定的方法试用，再决定是否达到了目标。',
        'Acceptance means trying the agreed checks yourself and deciding whether the goal is met.',
      ],
      example: [
        '版本abc：报名通过；取消未测试 → 结论未测试，不能写第一版全部通过。',
        'Revision abc: booking passed, cancellation untested → not fully accepted.',
      ],
      recovery: [
        '目标发生变化时先写清变化，不能临时降低标准把失败算通过。',
        'Document changed goals instead of silently lowering criteria.',
      ],
      terms: ['acceptance-criteria', 'version'],
    },
    referenceAnswer: [
      '有关键步骤未测试就记未测试；有不可接受问题就记录反馈。本人实际核对通过后再进入交付，不由AI代填。',
      'Untested critical work remains untested and unacceptable issues need feedback; AI cannot supply personal acceptance.',
    ],
    guidedActions: [
      {
        id: 'accept-1',
        action: [
          '重新读最初的项目描述，选出当时说“做完应该能做到”的事情。',
          'Reread your original description and the things the finished project should do.',
        ],
        expect: [
          '手里有自己的目标和对应试用方法。',
          'You have your own goals and practical tests.',
        ],
        ifWrong: [
          '目标发生变化时先写清变化，不能临时降低标准把失败算通过。',
          'Document changed goals instead of silently lowering criteria.',
        ],
        afterwards: [
          '手里有自己的目标和对应试用方法。',
          'You have your own goals and practical tests.',
        ],
      },
      {
        id: 'accept-2',
        action: [
          '像实际使用者一样操作作品，不借助工具临时改数据来完成流程。',
          'Use the project as its intended user without having the tool patch data mid-flow.',
        ],
        expect: [
          '知道作品有没有解决最初的问题。',
          'You know whether it solves the original problem.',
        ],
        ifWrong: [
          '没有条件亲自试就填未测试，不照抄 AI 的通过结论。',
          'Mark untested if you cannot try it; do not copy an AI pass.',
        ],
        afterwards: [
          '知道作品有没有解决最初的问题。',
          'You know whether it solves the original problem.',
        ],
      },
      {
        id: 'accept-3',
        action: [
          '填写下方试用记录并确认，再展开“把本步已确认记录交给 AI 保存”，生成保存话术，复制到项目对话。',
          'Fill and confirm the trial record, then use the save-in-project section to generate and send its save instruction.',
        ],
        expect: [
          'docs/acceptance.md 中保存了本人实际操作和结论。',
          'docs/acceptance.md contains your actual actions and conclusion.',
        ],
        ifWrong: [
          '有问题选“记录反馈”，达到目标再选择交付方式。',
          'Record issues when failing; choose delivery only after goals are met.',
        ],
        afterwards: [
          'docs/acceptance.md 中保存了本人实际操作和结论。',
          'docs/acceptance.md contains your actual actions and conclusion.',
        ],
      },
    ],
  },
  {
    id: 'feedback',
    phase: 'check',
    title: ['把试用结果记录成反馈', 'Record the trial feedback'],
    where: [
      '实际作品、本页模板与项目对话',
      'The work, this template and project chat',
    ],
    expected: [
      '有能让别人重复操作的反馈记录，事实、猜测和新增需求分开。',
      'Feedback is reproducible and separates facts, guesses and new requests.',
    ],
    prompt: [
      '先检查能否读取当前项目位置。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n本次测试版本和日期：【填写】\n设备、系统和实际入口：【填写】\n测试的功能：【填写】\n依次做了什么：【填写能重复的操作步骤】\n希望看到什么：【填写原需求中的结果】\n实际发生什么：【填写现象，不必猜原因】\n截图或报错原文：【附上或写无】\n出现频率：【每次／偶尔／只试一次】\n影响：【无法使用／可绕开／外观文字】\n已通过和未测试的部分：【分别填写】\n\n请把以上本人试用记录保存到 docs/feedback.md，按问题编号整理，保留通过、失败和未测试项，不自行改写为已通过。材料缺失先问。本次只记录，不修代码。',
      'First check access to the current project location. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nVersion/date: [fill in]\nDevice and entry: [fill in]\nFeature: [fill in]\nSteps: [fill in]\nExpected: [fill in]\nActual: [fill in]\nEvidence: [attach or none]\nFrequency: [always/sometimes/once]\nImpact: [blocked/workaround/cosmetic]\nPassed and untested: [fill in]\n\nSave these personal observations in docs/feedback.md with issue IDs. Preserve facts and unknowns; ask for missing material. Do not fix code yet.',
    ],
    stage: 'accept',
    understanding: {
      why: [
        '把哪里出错写具体，工具才能找到同一个问题。',
        'Describe the failure precisely so the tool can find the same problem.',
      ],
      concept: [
        '反馈先写你做了什么、看到了什么，不需要自己猜代码哪里错了。',
        'Feedback records actions and observations; you do not need to diagnose the code.',
      ],
      question: [
        '“按钮没反应”和“数据库坏了”，哪一个是观察，哪一个需要证据？',
        'Which is an observation and which needs evidence: “button does nothing” or “database is broken”?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          '问题偶尔出现，不能稳定重现',
          'The issue happens intermittently',
        ],
        check: [
          '记录出现次数、设备、版本和最近一次完整操作。',
          'Record occurrence count, device, version and the latest full sequence.',
        ],
        action: [
          '只收集当前现象、操作、版本与报错原文，必要时只读排查；本步不修代码。失败记录到反馈，按“先确定怎么修、怎样算修好”确认计划后再修复。',
          'Collect symptoms, actions, revision and exact errors; use read-only diagnosis if needed. Do not repair here. Record feedback and confirm the plan in “Plan the fix and its passing checks” first.',
        ],
        expected: [
          '有可核对的实际记录，未执行仍标未测试，失败仍标失败。',
          'Verifiable records exist; untested and failed results keep their status.',
        ],
      },
    ],
    support: {
      input: [
        '出现问题时的操作顺序、画面或报错。',
        'The actions, screen or error from the failure.',
      ],
      output: [
        '反馈文件有问题编号、重现步骤和证据。',
        'Issues have IDs, reproduction steps and evidence.',
      ],
      answer: [
        '反馈先写你做了什么、看到了什么，不需要自己猜代码哪里错了。',
        'Feedback records actions and observations; you do not need to diagnose the code.',
      ],
      example: [
        'F01 / 取消后刷新 / 预期余位+1 / 实际未变 / 版本abc / 两次均复现。',
        'F01 / cancel then refresh / expect one place restored / actual unchanged / revision abc / reproduced twice.',
      ],
      recovery: [
        '不要只写“不能用”；不懂原因没关系，记录现象即可。',
        'Describe the symptom, not merely “broken”; you need not know the cause.',
      ],
      terms: ['bug', 'log'],
    },
    referenceAnswer: [
      '“按钮没反应”是观察；“数据库坏了”是原因判断，需要日志或检查支持。先写动作、预期和实际结果。',
      'An unresponsive button is an observation; a broken database is a hypothesis needing evidence.',
    ],
    guidedActions: [
      {
        id: 'feedback-1',
        action: [
          '选一个问题，写下从哪里开始、输入什么、点哪里、出现什么。',
          'Choose one issue and record the entry, input, clicks and result.',
        ],
        expect: [
          '别人能照着描述走到同一问题。',
          'Someone else can follow the same steps.',
        ],
        ifWrong: [
          '不要只写“不能用”；不懂原因没关系，记录现象即可。',
          'Describe the symptom, not merely “broken”; you need not know the cause.',
        ],
        afterwards: [
          '别人能照着描述走到同一问题。',
          'Someone else can follow the same steps.',
        ],
      },
      {
        id: 'feedback-2',
        action: [
          '把操作记录和报错填进下方模板，确认后复制给工具。',
          'Fill the template with actions/errors, confirm and send it.',
        ],
        expect: [
          '反馈文件有问题编号、重现步骤和证据。',
          'Issues have IDs, reproduction steps and evidence.',
        ],
        ifWrong: [
          '截图含密码或个人信息时先遮住再发送。',
          'Hide passwords/private information in screenshots before sharing.',
        ],
        afterwards: [
          '反馈文件有问题编号、重现步骤和证据。',
          'Issues have IDs, reproduction steps and evidence.',
        ],
        prompt: [
          '请把以下问题整理到 docs/feedback.md，给每项编号，写清预期与实际：【粘贴记录】。先记录和检查原因，不修改代码；还没查明的原因不要写成事实。',
          'Organize these issues in docs/feedback.md with IDs, expected and actual results: 【paste record】. Record and investigate without changing code. Do not present guesses as facts.',
        ],
      },
    ],
  },
  {
    id: 'repair-plan',
    phase: 'check',
    title: ['先确定怎么修、怎样算修好', 'Plan the fix and its passing checks'],
    where: [
      '项目对话与 docs/repair-plan.md',
      'Project chat and docs/repair-plan.md',
    ],
    expected: [
      '每项修复对应反馈编号和可重复的通过条件。',
      'Every fix maps to a feedback ID and repeatable passing conditions.',
    ],
    prompt: [
      '先检查能否读取docs/feedback.md、docs/requirements.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取 docs/feedback.md、需求、当前版本及检查记录。先复现问题，区分缺陷、新需求和证据不足；未知原因标推测。保存 docs/repair-plan.md：问题编号、影响、最小修复范围、原失败步骤的通过条件、受影响正常功能的复测和恢复办法。只处理已确认范围；需要改变需求或基础方案时先说明。本次只制定计划，不改业务代码。',
      'First check access to docs/feedback.md, docs/requirements.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead feedback, requirements, current version and checks. Reproduce issues and separate defects, new requests and missing evidence. Label uncertain causes. Write docs/repair-plan.md with issue IDs, impact, minimal scope, passing checks, regression checks and recovery. Explain scope or design changes before acting. Plan only; do not modify business code.',
    ],
    stage: 'accept',
    understanding: {
      why: [
        '先看懂工具准备怎么修，再让它动手。',
        'Understand the proposed fix before letting the tool make it.',
      ],
      concept: [
        '修复计划说明改哪里、会影响什么，以及怎样再次检查。',
        'A repair plan explains changes, possible effects and retesting.',
      ],
      question: [
        '修好了保存按钮，为什么还需要试一下读取历史记录？',
        'Why check history retrieval after fixing the Save button?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: ['AI 没给计划就开始修改', 'AI starts fixing without a plan'],
        check: [
          '检查当前改动与反馈编号是否对应。',
          'Check whether changes map to feedback IDs.',
        ],
        action: [
          '暂停后续修改，先让 AI 汇报已经改过什么、保存当前状态，再补修复范围和通过条件。不为回到计划阶段强行丢弃现有改动。',
          'Pause further changes, report and preserve work already done, then define scope and passing checks. Do not discard changes merely to return to planning.',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    support: {
      input: [
        '刚才保存的问题反馈记录。',
        'The feedback record you just saved.',
      ],
      output: [
        '修复计划有具体改动和检查方法。',
        'The fix and its test are specific.',
      ],
      answer: [
        '修复计划说明改哪里、会影响什么，以及怎样再次检查。',
        'A repair plan explains changes, possible effects and retesting.',
      ],
      example: [
        'F01：修正取消释放名额；复测原步骤；回归报名和重复取消；不改页面样式。',
        'F01: restore capacity on cancellation; reproduce and retest; regress booking and repeated cancel; no styling changes.',
      ],
      recovery: [
        '原因不明就继续小范围检查，不默认重装或删库。',
        'Investigate further rather than defaulting to reinstalling or deleting storage.',
      ],
      terms: ['root-cause', 'regression'],
    },
    referenceAnswer: [
      '保存与读取可能共用数据结构或接口，修一个可能影响另一个。原问题复测与相关正常功能回归都要做。',
      'Saving and reading may share structures/APIs; retest the fix and regress related behavior.',
    ],
    guidedActions: [
      {
        id: 'repair-plan-1',
        action: [
          '先让工具解释为什么出问题。',
          'Ask why the issue occurs before changing anything.',
        ],
        expect: [
          '得到能对应实际问题的解释。',
          'The explanation fits the observed issue.',
        ],
        ifWrong: [
          '原因不明就继续小范围检查，不默认重装或删库。',
          'Investigate further rather than defaulting to reinstalling or deleting storage.',
        ],
        afterwards: [
          '得到能对应实际问题的解释。',
          'The explanation fits the observed issue.',
        ],
        prompt: [
          '请读 docs/feedback.md 和需求，先检查问题原因，不改代码。把已查明的事实和还要验证的猜测分开，告诉我下一项最小检查。',
          'Read docs/feedback.md and the requirements. Investigate without changing code. Separate facts from hypotheses and give the next small check.',
        ],
      },
      {
        id: 'repair-plan-2',
        action: [
          '让工具写清准备改哪里、怎么确认改好了，然后自己读一遍。',
          'Review where the fix will happen and how you will check it.',
        ],
        expect: [
          '修复计划有具体改动和检查方法。',
          'The fix and its test are specific.',
        ],
        ifWrong: [
          '只有“优化一下”就要求写具体，不直接批准。',
          'Ask for specifics if it only says optimize.',
        ],
        afterwards: [
          '修复计划有具体改动和检查方法。',
          'The fix and its test are specific.',
        ],
        prompt: [
          '请保存 docs/repair-plan.md：每个问题改哪些文件、会影响哪些原功能、怎样重走失败步骤、修好应该看到什么。涉及数据库先写备份和恢复方法，等我确认再执行。',
          'Save docs/repair-plan.md with changed files, affected features, original-case retest and expected results. Include backup/recovery before database changes. Wait for my approval.',
        ],
      },
    ],
  },
  {
    id: 'repair',
    phase: 'check',
    title: [
      '按计划修复，再交给本人复测',
      'Fix according to plan and hand back for retesting',
    ],
    where: ['当前项目对话及实际预览', 'Project chat and preview'],
    expected: [
      'AI 检查与本人复测分别记录；仍失败就继续反馈，不能自动进入发布。',
      'AI checks and personal retests are recorded separately; failures return to feedback.',
    ],
    prompt: [
      '先检查能否读取docs/repair-plan.md、docs/feedback.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取项目规则和 docs/repair-plan.md，只修复已确认问题，保护已有工作。逐项重跑原失败步骤和相关正常流程，在 docs/checks.md 记录问题编号、版本、预期、实际和未执行项。给出实际预览入口及本人复测步骤。不能代替本人标记人工通过；超出计划先说明影响。保存可追踪版本，不发布。',
      'First check access to docs/repair-plan.md, docs/feedback.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead rules and docs/repair-plan.md. Fix only approved issues and preserve existing work. Rerun failures and related normal flows. Record IDs, version, expected/actual results and unexecuted checks in docs/checks.md. Provide a real preview and personal retest steps. Never mark personal tests passed on my behalf. Save a traceable version; do not publish.',
    ],
    stage: 'accept',
    understanding: {
      why: [
        '让工具修好已确认的问题，然后自己重做原来失败的操作。',
        'Fix the agreed issue, then repeat the original failing actions yourself.',
      ],
      concept: [
        '复测是重新试原问题；再检查原本正常的功能，可以发现有没有顺带改坏别的地方。',
        'Retesting checks the original issue; trying working features catches unintended damage.',
      ],
      question: [
        '如果 AI 自测通过，但同样的操作仍失败，下一步应该记录哪个事实？',
        'If AI checks pass but the same action fails, what fact should be recorded next?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          'AI 说修好了，同样的操作仍失败',
          'The same action still fails after a claimed fix',
        ],
        check: [
          '核对正在打开的是新版本，并保留原失败操作。',
          'Verify the new version is open and retain the failed sequence.',
        ],
        action: [
          '点击“复测仍有问题”，补充当前版本和实际结果。请 AI 用相同步骤复现并更新修复计划，不重新生成整个项目。',
          'Choose “Retest failed”, add version and actual results, and ask AI to reproduce and update the plan rather than recreate the project.',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    choices: [
      {
        id: 'feedback',
        label: ['复测仍有问题，更新反馈', 'Retest failed: update feedback'],
      },
      {
        id: 'release-review',
        label: [
          '修复的是交付条件，重新评估',
          'Delivery conditions repaired: reassess',
        ],
      },
      {
        id: 'delivery',
        label: [
          '功能验收通过，选择交付方式',
          'Functional acceptance passed: choose delivery',
        ],
      },
    ],
    support: {
      input: [
        '你已确认的修复计划，以及原来失败的操作。',
        'Your approved repair plan and the original failing actions.',
      ],
      output: [
        '问题状态与本人实际结果一致。',
        'Issue status matches your result.',
      ],
      answer: [
        '复测是重新试原问题；再检查原本正常的功能，可以发现有没有顺带改坏别的地方。',
        'Retesting checks the original issue; trying working features catches unintended damage.',
      ],
      example: [
        'F01 / 修复版本def / 原步骤通过 / 报名回归通过 / 本人已复测 → 可以关闭F01。',
        'F01 / revision def / original case passed / booking regression passed / personally retested → close F01.',
      ],
      recovery: [
        '范围扩大或要求清库时先停，回修复计划说明原因。',
        'Return to planning if the scope expands or a reset is proposed.',
      ],
      terms: ['regression', 'rollback'],
    },
    referenceAnswer: [
      '记录同一版本、相同步骤下本人仍失败的实际结果，沿用问题编号追加证据，不能以AI自测覆盖它。',
      'Record the actual personal failure at the same revision/steps under the same issue ID.',
    ],
    guidedActions: [
      {
        id: 'repair-1',
        action: [
          '确认修复计划后，让工具只改这一项问题。',
          'After reviewing the plan, fix one agreed issue.',
        ],
        expect: [
          '工具说明改了哪里和怎样再试。',
          'The tool explains the change and retest.',
        ],
        ifWrong: [
          '范围扩大或要求清库时先停，回修复计划说明原因。',
          'Return to planning if the scope expands or a reset is proposed.',
        ],
        afterwards: [
          '工具说明改了哪里和怎样再试。',
          'The tool explains the change and retest.',
        ],
        prompt: [
          '请按已确认的 docs/repair-plan.md 修复【问题编号】。保护已有数据，只改必要文件，完成后报告实际检查结果和我该怎样复测。',
          'Follow the approved docs/repair-plan.md for 【issue ID】. Preserve data, change only necessary files and report checks plus my retest steps.',
        ],
      },
      {
        id: 'repair-2',
        action: [
          '亲自重走原来失败的那组操作，再试原本正常的功能。',
          'Repeat the original failing actions, then check previously working features.',
        ],
        expect: [
          '原问题解决，原来的保存和读取仍正常。',
          'The issue is fixed and normal behavior still works.',
        ],
        ifWrong: [
          '仍失败就保留同一问题编号，补新证据，不重新编一个“已解决”的问题。',
          'Keep the same issue ID and add evidence if it still fails.',
        ],
        afterwards: [
          '原问题解决，原来的保存和读取仍正常。',
          'The issue is fixed and normal behavior still works.',
        ],
      },
      {
        id: 'repair-3',
        action: [
          '把自己的复测结果交给工具保存。',
          'Save your personal retest results.',
        ],
        expect: [
          '问题状态与本人实际结果一致。',
          'Issue status matches your result.',
        ],
        ifWrong: [
          '工具与本人结论不一致时，以实际复测为依据继续检查。',
          'Investigate any difference from the tool’s report.',
        ],
        afterwards: [
          '问题状态与本人实际结果一致。',
          'Issue status matches your result.',
        ],
        prompt: [
          '我的复测结果：【填写】。请更新 docs/checks.md 和 docs/feedback.md；只有我实际验证通过的问题才关闭，未测项保留。',
          'My retest result: 【fill in】. Update docs/checks.md and docs/feedback.md; close only personally verified issues and retain untested items.',
        ],
      },
    ],
  },
  {
    id: 'delivery',
    phase: 'use',
    title: ['先决定：自己用，还是分享', 'Choose: personal use or sharing'],
    where: ['本页的两种去向', 'The two paths below'],
    expected: [
      '知道本机作品已经能用，但本机地址不能发给别人当正式网址。',
      'Local work is usable, while a local address is not a public website.',
    ],
    issues: [
      {
        id: 'local-link',
        title: ['发给别人后打不开', 'The shared local link does not open'],
        check: [
          '地址是否以 localhost、127.0.0.1 或 file 开头？',
          'Does it begin with localhost, 127.0.0.1, or file?',
        ],
        action: [
          '这些是本机入口。需要分享时选择下方发布路径；无需分享则继续本机使用，不为这个问题安装无关服务。',
          'These are local entries. Choose the publishing path if sharing is needed; otherwise keep local use without adding unrelated services.',
        ],
        expected: [
          '使用范围和交付入口相符。',
          'The entry matches the intended audience.',
        ],
      },
    ],
    stage: 'launch',
    understanding: {
      why: [
        '先决定自己用还是给别人用，才能知道需要准备哪些文件和服务。',
        'Choose local or shared use before preparing files and services.',
      ],
      concept: [
        '交付就是让预期使用者能打开并使用作品，不一定需要公开网址。',
        'Delivery means intended users can open and use it; a public URL is optional.',
      ],
      question: [
        '需要一个网址、一个安装包，还是本机启动说明？',
        'Is the deliverable a URL, installer or local guide?',
      ],
    },
    choices: [
      {
        id: 'release-review',
        label: ['已选好交付方式，检查条件', 'Check delivery readiness'],
      },
    ],
    prompt: [
      '实际使用者：【填写】\n交付方式：【本机自用／网站／安装包／其他】\n目标设备或平台：【填写】\n本人选择这个方式的理由：【填写】\n尚未明确的条件：【填写或无】',
      'Users: [fill in]\nDelivery: [local/website/installer/other]\nTarget device or platform: [fill in]\nReason for this choice: [fill in]\nUnknown conditions: [details or none]',
    ],
    templateKind: 'worksheet',
    support: {
      input: [
        '已经试用过的作品，以及准备给谁使用的决定。',
        'Your tested project and intended users.',
      ],
      output: [
        '知道接下来要准备什么。',
        'The required preparations are clear.',
      ],
      answer: [
        '交付就是让预期使用者能打开并使用作品，不一定需要公开网址。',
        'Delivery means intended users can open and use it; a public URL is optional.',
      ],
      example: [
        '网站：网址+运行服务；桌面：适合目标系统的安装产物；手机：对应平台和渠道的签名产物/商店入口。',
        'Web: URL plus running services. Desktop: compatible installer. Mobile: signed channel-specific output or store entry.',
      ],
      recovery: [
        '自己电脑能用也是有效结果，不必为了教程公开上线。',
        'Local use is a valid result; publication is not mandatory.',
      ],
      terms: ['build', 'artifact', 'deploy'],
    },
    referenceAnswer: [
      '看实际用户如何使用：浏览器访问选网址；安装使用选对应系统产物；本机自用可只需要可重复的启动说明。不要先选包装形式再硬凑需求。',
      'Choose by intended access: URL, compatible installed artifact or repeatable local startup instructions.',
    ],
    guidedActions: [
      {
        id: 'delivery-1',
        action: [
          '决定谁在哪里使用：自己电脑、别人通过网址、还是下载安装包。填下方模板并确认。',
          'Choose who uses it and where: your computer, a shared URL or an installer. Fill and confirm the template.',
        ],
        expect: ['选择符合真实使用需要。', 'The choice matches actual use.'],
        ifWrong: [
          '自己电脑能用也是有效结果，不必为了教程公开上线。',
          'Local use is a valid result; publication is not mandatory.',
        ],
        afterwards: [
          '选择符合真实使用需要。',
          'The choice matches actual use.',
        ],
      },
      {
        id: 'delivery-2',
        action: [
          '展开“把本步已确认记录交给 AI 保存”，生成话术并发给工具。',
          'Use the save-in-project section to generate and send the save instruction.',
        ],
        expect: [
          'docs/delivery.md 中记录了使用者、设备和交付方式。',
          'docs/delivery.md records users, devices and delivery method.',
        ],
        ifWrong: [
          '文件没出现就让工具给出实际保存位置。',
          'Request the actual saved location if missing.',
        ],
        afterwards: [
          'docs/delivery.md 中记录了使用者、设备和交付方式。',
          'docs/delivery.md records users, devices and delivery method.',
        ],
      },
      {
        id: 'delivery-3',
        action: [
          '请工具按选好的方式列准备事项。',
          'Ask what the chosen method requires.',
        ],
        expect: [
          '知道接下来要准备什么。',
          'The required preparations are clear.',
        ],
        ifWrong: [
          'localhost 是当前电脑，把这个网址发给别人不会自动分享自己的项目。',
          'localhost refers to the current computer; sharing it does not share your project.',
        ],
        afterwards: [
          '知道接下来要准备什么。',
          'The required preparations are clear.',
        ],
        prompt: [
          '请读 docs/delivery.md。本机使用写清启动、停止、数据位置；远程使用分别说明页面、后端、数据库放在哪里，需要哪些账号和费用。先列方案，不发布。',
          'Read docs/delivery.md. For local use explain start/stop and storage. For remote use explain where page, backend and database run, with accounts and costs. Plan only; do not publish.',
        ],
      },
    ],
  },
  {
    id: 'release-review',
    phase: 'use',
    title: ['检查是否具备交付条件', 'Assess readiness for delivery'],
    where: ['项目对话与 docs/release.md', 'Project chat and docs/release.md'],
    expected: [
      '知道哪些条件有证据、哪些仍缺失，以及是否允许继续准备交付。',
      'Readiness decisions distinguish verified conditions, gaps and permission to prepare delivery.',
    ],
    prompt: [
      '先检查能否读取docs/requirements.md、docs/design.md、docs/checks.md、docs/acceptance.md、docs/delivery.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取需求、设计、docs/checks.md、docs/acceptance.md 和 docs/delivery.md，先核对是否对应当前版本；缺本人验收或交付决定就停止，并指出应补“亲自测试完整使用过程”和“选择交付方式”，不替本人填通过。只做交付前准备评估，逐项列已核验、未满足、不适用、未验证及证据到 docs/release.md。尚未制作产物的试运行明确待“准备部署脚本或安装包”，不编造结果。阻断项编号记录到 docs/feedback.md，供修复计划使用。本步不修复、不制作产物、不发布。',
      'First check access to docs/requirements.md, docs/design.md, docs/checks.md, docs/acceptance.md, docs/delivery.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead requirements, design, checks, docs/acceptance.md and docs/delivery.md and compare revisions. If personal acceptance or delivery decisions are missing, stop and point to “Test the full journey personally” and “Choose how to deliver” without inventing a pass. Assess preparation only, recording verified, unmet, inapplicable and unverified conditions with evidence in docs/release.md. Artifact trials remain pending “Prepare deployment or packaging”. Number blockers in docs/feedback.md for repair planning. Do not repair, package or release.',
    ],
    stage: 'launch',
    understanding: {
      why: [
        '准备给人使用之前，先查功能、说明和所需账号还有没有缺项。',
        'Before delivery, check for missing features, instructions and accounts.',
      ],
      concept: [
        '这一项是准备检查；还没打开试过的安装包或网站，要留作待测试。',
        'This checks preparation; an untried installer or site remains pending.',
      ],
      question: [
        '首页能打开，但重新登录后资料丢失，可以只看首页宣布上线吗？',
        'Can an openable home page establish readiness if data disappears after signing in again?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          '评估说可上线，却没有证据',
          'Readiness is claimed without evidence',
        ],
        check: [
          '查看每项是否有实际检查记录、版本和结果。',
          'Look for actual checks, versions and results.',
        ],
        action: [
          '把没有证据的项改为待验证。若影响核心任务、数据或权限，先完成检查或修复；不是把“待验证”直接改成“通过”。',
          'Mark unsupported items unverified. Complete checks or repairs for core flow, data and permissions instead of relabeling them passed.',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    choices: [
      {
        id: 'repair-plan',
        label: ['条件不足，制定修复计划', 'Plan fixes for gaps'],
      },
      {
        id: 'package',
        label: ['条件齐全，准备交付物', 'Prepare the deliverable'],
      },
    ],
    templateKind: 'prompt',
    support: {
      input: [
        '选好的使用方式、试用记录和使用说明。',
        'The chosen delivery method, trial results and instructions.',
      ],
      output: [
        '可以判断是先修问题还是准备交付文件。',
        'You know whether to repair or prepare delivery files next.',
      ],
      answer: [
        '这一项是准备检查；还没打开试过的安装包或网站，要留作待测试。',
        'This checks preparation; an untried installer or site remains pending.',
      ],
      example: [
        '构建条件：已核验；真机安装：待“准备部署脚本或安装包”；正式发布：未执行。',
        'Build prerequisites verified; device installation pending “Prepare deployment or packaging”; production release not executed.',
      ],
      recovery: [
        '没有本人试用记录就回试用步骤补，不让工具代填通过。',
        'Return to personal testing if its record is absent.',
      ],
      terms: ['release', 'environment'],
    },
    referenceAnswer: [
      '不能。首页可开仅证明局部入口正常，登录后资料保留属于核心流程时必须验证，失败就先修复。',
      'No. A working homepage proves little about required login and persistence; fix critical failures first.',
    ],
    guidedActions: [
      {
        id: 'release-review-1',
        action: [
          '让工具对照试用记录，看看还有什么没有准备好。',
          'Check what is still missing before delivery.',
        ],
        expect: [
          '有明确的已准备和未准备清单。',
          'Ready and missing items are clearly separated.',
        ],
        ifWrong: [
          '没有本人试用记录就回试用步骤补，不让工具代填通过。',
          'Return to personal testing if its record is absent.',
        ],
        afterwards: [
          '有明确的已准备和未准备清单。',
          'Ready and missing items are clearly separated.',
        ],
        prompt: [
          '请读需求、docs/checks.md、docs/acceptance.md 和 docs/delivery.md。逐项检查功能、启动说明、数据保存、账号和费用，把缺少的条件写清楚。先检查，不发布。',
          'Read requirements, docs/checks.md, docs/acceptance.md and docs/delivery.md. Check features, startup instructions, data, accounts and costs. List gaps without publishing.',
        ],
      },
      {
        id: 'release-review-2',
        action: [
          '保存检查清单，有阻断问题先修好。',
          'Save the checklist and repair blocking issues first.',
        ],
        expect: [
          '可以判断是先修问题还是准备交付文件。',
          'You know whether to repair or prepare delivery files next.',
        ],
        ifWrong: [
          '尚未运行的项目不标通过；缺条件先补条件。',
          'Do not pass checks that have not run.',
        ],
        afterwards: [
          '可以判断是先修问题还是准备交付文件。',
          'You know whether to repair or prepare delivery files next.',
        ],
        prompt: [
          '请把准备情况保存到 docs/release.md，把需要修的问题编号写入 docs/feedback.md。还没制作安装包或部署时，相关试运行写待测试。',
          'Save readiness to docs/release.md and numbered issues to docs/feedback.md. Mark artifact/deployment trials pending until they actually run.',
        ],
      },
    ],
  },
  {
    id: 'package',
    phase: 'use',
    title: ['准备交付物，并实际试运行', 'Prepare and try the deliverable'],
    where: ['项目对话和测试环境', 'Project chat and a test environment'],
    expected: [
      '实际交付物试运行通过，有使用及恢复说明，正式发布仍需本人确认。',
      'The deliverable has been tried, with use and recovery instructions; release still needs personal approval.',
    ],
    prompt: [
      '先检查能否读取docs/design.md、docs/delivery.md、docs/release.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取已确认的 docs/release.md，只准备适合本项目的构建/部署配置或目标系统安装包。写清前置条件、执行位置、费用、配置位置、成功现象和恢复方法；真实密钥不写入仓库或包。实际试部署或试安装，检查核心操作、重新打开和需求要求的数据保留。将产物实际位置、依赖服务、版本及结果保存到 docs/release.md；无法验证的内容明确保留。未经本人确认不正式发布，不默认添加 Docker。',
      'First check access to docs/design.md, docs/delivery.md, docs/release.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead approved docs/release.md. Prepare the appropriate build/deployment configuration or installer. Document prerequisites, execution location, costs, configuration, success and recovery. Keep secrets out of source and packages. Actually trial deploy/install and check core actions, reopening and persistence. Record version/results and unverified work. Do not publish without approval or add Docker by default. Check data retention only if required; record actual artifact location, dependencies and evidence in docs/release.md.',
    ],
    stage: 'launch',
    understanding: {
      why: [
        '按选好的方式准备文件，并照使用说明实际打开试一次。',
        'Prepare the chosen files and actually try them using the instructions.',
      ],
      concept: [
        '安装包、静态网页和需要后端的网站，使用方法不同；让工具按你的项目准备。',
        'Installers, static pages and backend-powered sites need different preparation.',
      ],
      question: [
        '安装包生成了，但没有在目标系统打开过，应记录成功还是待验证？',
        'If a package has not run on the target OS, is installation verified?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          '安装包打不开或部署后启动失败',
          'Installer or deployed application fails',
        ],
        check: [
          '核对目标系统、构建版本和完整错误，不跳过系统安全提示。',
          'Check target OS, build version and exact errors; do not bypass OS security warnings.',
        ],
        action: [
          '保留交付物和日志，返回反馈记录。请 AI 核对系统兼容、运行依赖和合法签名/平台要求，在测试环境修复再试，不覆盖现有可用版本。',
          'Keep the artifact and logs, return to feedback, and check compatibility, dependencies and legitimate signing/platform requirements. Retest without replacing a working version.',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    choices: [
      {
        id: 'feedback',
        label: ['试运行失败，记录问题', 'Record trial failures'],
      },
      {
        id: 'live-check',
        label: ['试运行通过，确认交付', 'Trial passed; review delivery'],
      },
    ],
    support: {
      input: [
        '检查通过的交付准备清单。',
        'Your checked delivery preparation list.',
      ],
      output: [
        '下一步能按记录找到同一份交付文件。',
        'The next step can find the same deliverable.',
      ],
      answer: [
        '安装包、静态网页和需要后端的网站，使用方法不同；让工具按你的项目准备。',
        'Installers, static pages and backend-powered sites need different preparation.',
      ],
      example: [
        '仓库 → 项目实际构建命令 → 输出目录/安装包 → 测试目标 → 普通用户操作 → 试运行证据。',
        'Repository → actual build command → output/installer → test target → user actions → evidence.',
      ],
      recovery: [
        '缺配置时用占位说明，不能把真实密码和用户数据库打进公开文件。',
        'Use configuration placeholders; exclude real secrets and user databases from public packages.',
      ],
      terms: ['build', 'artifact', 'code-signing'],
    },
    referenceAnswer: [
      '产物生成可以记录成功，但目标系统试运行仍是待验证。两个状态分开写，不能推断安装可用。',
      'Record build success separately from an unverified target trial.',
    ],
    guidedActions: [
      {
        id: 'package-1',
        action: [
          '让工具按已选方式准备给使用者的文件。',
          'Prepare files for the chosen delivery method.',
        ],
        expect: [
          '找到真实文件和配套使用说明。',
          'Real files and matching instructions are available.',
        ],
        ifWrong: [
          '缺配置时用占位说明，不能把真实密码和用户数据库打进公开文件。',
          'Use configuration placeholders; exclude real secrets and user databases from public packages.',
        ],
        afterwards: [
          '找到真实文件和配套使用说明。',
          'Real files and matching instructions are available.',
        ],
        prompt: [
          '请读 docs/design.md、docs/delivery.md 和 docs/release.md。按已确认方式准备交付文件，告诉我保存位置、使用者需要安装什么以及怎样启动。只自用时可以提供源码和运行说明，不强行做安装包。',
          'Read docs/design.md, docs/delivery.md and docs/release.md. Prepare the agreed files and explain location, dependencies and startup. Local use may use source and instructions without an installer.',
        ],
      },
      {
        id: 'package-2',
        action: [
          '在独立测试目录或目标设备中，像接收者一样照说明打开并使用。',
          'Try it independently as the recipient would.',
        ],
        expect: [
          '接收者按说明可以使用主要功能。',
          'The instructions let the recipient use core features.',
        ],
        ifWrong: [
          '仅在开发电脑可用时，核对依赖、配置和数据位置；缺设备就记未测试。',
          'Compare dependencies/configuration/paths if it only works in development; mark unavailable devices untested.',
        ],
        afterwards: [
          '接收者按说明可以使用主要功能。',
          'The instructions let the recipient use core features.',
        ],
        prompt: [
          '请给出独立试运行的方法，不借用已经启动的开发服务。用测试资料检查打开、保存、读取和重开，保留原项目数据。',
          'Give an isolated trial method without relying on an existing development service. Test opening, saving, reading and reopening with test data while preserving the original.',
        ],
      },
      {
        id: 'package-3',
        action: ['把这次试运行记录保存下来。', 'Save the trial record.'],
        expect: [
          '下一步能按记录找到同一份交付文件。',
          'The next step can find the same deliverable.',
        ],
        ifWrong: [
          '测试失败先记问题并修复，不把“生成成功”当成“能用”。',
          'Fix failed trials rather than equating file generation with usability.',
        ],
        afterwards: [
          '下一步能按记录找到同一份交付文件。',
          'The next step can find the same deliverable.',
        ],
        prompt: [
          '请将文件位置、版本、实际入口、试运行结果和出错后的恢复方法写入 docs/release.md。未测项保留，先不要正式发布。',
          'Write artifact location, revision, real entry, trial results and recovery to docs/release.md. Keep untested items and do not publish yet.',
        ],
      },
    ],
  },
  {
    id: 'live-check',
    phase: 'use',
    title: [
      '确认交付，再检查实际入口',
      'Approve delivery and verify the real entry',
    ],
    where: ['正式网址或目标设备', 'The production URL or target device'],
    expected: [
      '实际入口能使用；未交付或失败时明确记录，不把准备完成当上线成功。',
      'The actual entry works; pending or failed delivery is not reported as successful release.',
    ],
    prompt: [
      '先检查能否读取docs/release.md、docs/delivery.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n已确认的交付目标、版本与允许执行的动作：【填写；未授权则只核对条件】\n核对 docs/release.md 的条件与以上授权，仅执行明确允许的交付动作。随后从真实入口检查需求中的核心流程与适用的数据、访问条件，保存目标、版本、实际结果和未验证项到 docs/release.md。失败时记录问题；仅执行已有且获准的恢复方案。本步不增加功能、不开始新迭代，维护交接留到下一步。',
      'First check access to docs/release.md, docs/delivery.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nConfirmed delivery target, version and allowed actions: [fill in; without authorization only review readiness]\nCheck docs/release.md and this authorization; perform only explicitly allowed delivery actions. Test the required core flow and applicable data/access conditions through the real entry. Record target, revision, actual results and unverified items in docs/release.md. Record failures and use only an already authorized recovery plan. Do not add features or begin a new iteration; maintenance handoff is next.',
    ],
    stage: 'launch',
    understanding: {
      why: [
        '从使用者真正会打开的位置再试一次，确认交出去的版本能用。',
        'Try the actual user entry to check that the delivered version works.',
      ],
      concept: [
        '本机使用检查本机入口；公开网站检查真实网址，两者按自己的选择来。',
        'Check the local entry for local use or the real URL for a public site.',
      ],
      question: [
        '换一个设备或身份，还能完成同一任务吗？哪些限制需要告诉使用者？',
        'Can another device or identity finish the same task, and which limits should users know?',
      ],
    },
    issues: [
      {
        id: 'not-ready',
        title: [
          '自己的电脑能开，其他人打不开',
          'It opens locally but not for others',
        ],
        check: [
          '核对是否发出了 localhost、127.0.0.1 或私有预览地址。',
          'Check for localhost, 127.0.0.1 or a private preview URL.',
        ],
        action: [
          '从发布平台读取真实访问入口，检查访问权限和部署状态；由目标访问者重新试用。没有正式入口就保留待交付，不把本机地址当公网网址。',
          'Read the real entry from the platform, check access and deployment state, and retest as the intended visitor. A local address is not a public release.',
        ],
        expected: [
          '重新执行原操作，得到本页要求的实际结果；未执行的检查仍标为未验证。',
          'Repeat the original action and obtain the expected result; keep unexecuted checks marked unverified.',
        ],
      },
    ],
    choices: [
      {
        id: 'feedback',
        label: ['实际入口有问题', 'Report delivery issues'],
      },
      {
        id: 'maintain',
        label: ['已核对，留下维护说明', 'Record maintenance instructions'],
      },
    ],
    templateKind: 'prompt',
    support: {
      input: [
        '准备好的安装包、本机启动入口或实际网站网址。',
        'The prepared installer, local launch entry or real website URL.',
      ],
      output: [
        '使用者可以按说明使用，结果记录准确。',
        'Users can follow accurate instructions.',
      ],
      answer: [
        '本机使用检查本机入口；公开网站检查真实网址，两者按自己的选择来。',
        'Check the local entry for local use or the real URL for a public site.',
      ],
      example: [
        '网址可访问但登录回调失败 → 未通过；商店正在审核 → 待审核；普通用户完整流程通过 → 已核对。',
        'Reachable URL but broken login callback: fail. Store review pending: pending. Full ordinary-user flow passes: checked.',
      ],
      recovery: [
        '目标或费用不清楚就先问清，不把“准备好了”当作已经同意发布。',
        'Clarify unknowns before approval.',
      ],
      terms: ['deploy', 'rollback'],
    },
    referenceAnswer: [
      '按承诺的目标设备、身份和渠道实测；不支持的设备、账号要求、网络要求等明确告知，未测不能写支持。',
      'Test promised devices, roles and channels; disclose requirements and limits without presenting untested support as verified.',
    ],
    guidedActions: [
      {
        id: 'live-check-1',
        action: [
          '先确认实际交付到哪里。本机使用就确认本机启动方法；公开发布先看账号、网址、费用和影响。',
          'Confirm the real destination. For local use check startup; for publication review account, URL, costs and impact.',
        ],
        expect: [
          '你知道将会发生什么，并能决定是否执行。',
          'You can understand and approve the action.',
        ],
        ifWrong: [
          '目标或费用不清楚就先问清，不把“准备好了”当作已经同意发布。',
          'Clarify unknowns before approval.',
        ],
        afterwards: [
          '你知道将会发生什么，并能决定是否执行。',
          'You can understand and approve the action.',
        ],
        prompt: [
          '请读 docs/release.md 和 docs/delivery.md，列出本次要执行的交付动作、目标和费用，等我明确确认后再做。',
          'Read docs/release.md and docs/delivery.md. List the proposed delivery actions, destination and costs; wait for my explicit confirmation.',
        ],
      },
      {
        id: 'live-check-2',
        action: [
          '确认后执行，再从实际使用者的入口打开。',
          'After approval, execute and open the intended user entry.',
        ],
        expect: [
          '有真实入口，或知道还在等待哪个审核。',
          'A real entry exists or its pending review is clear.',
        ],
        ifWrong: [
          '本机项目不需要假造公网网址；公开项目用普通用户身份测试。',
          'Do not invent a public URL for local use; test public access as an ordinary user.',
        ],
        afterwards: [
          '有真实入口，或知道还在等待哪个审核。',
          'A real entry exists or its pending review is clear.',
        ],
        prompt: [
          '我确认执行以下动作：【填写】。请只执行这些动作，报告实际入口与版本。需要审核就记待审核，不提前说已经上线。',
          'I approve these actions: 【fill in】. Execute only these and report the actual entry and revision. Mark pending reviews honestly.',
        ],
      },
      {
        id: 'live-check-3',
        action: [
          '亲自完成一次主要操作，再关闭重开检查。',
          'Try the main task and reopen it, then record your result.',
        ],
        expect: [
          '使用者可以按说明使用，结果记录准确。',
          'Users can follow accurate instructions.',
        ],
        ifWrong: [
          '有问题先停止扩大发布，按既定恢复方法处理；不要盲目覆盖数据库。',
          'Contain failures and use the planned recovery without blindly overwriting storage.',
        ],
        afterwards: [
          '使用者可以按说明使用，结果记录准确。',
          'Users can follow accurate instructions.',
        ],
        prompt: [
          '我的实际使用结果：【填写】。请保存到 docs/release.md，并把最新版使用入口和说明更新到 README.md。',
          'My actual use result: 【fill in】. Save it to docs/release.md and update README.md with the latest entry/instructions.',
        ],
      },
    ],
  },
  {
    id: 'publish',
    phase: 'use',
    title: [
      '可选：把简单网页放到 GitHub Pages',
      'Optional: publish a simple page on GitHub Pages',
    ],
    where: [
      '只适用于不含私密资料、无需服务器的静态网页',
      'Only static pages without private material or a server',
    ],
    expected: [
      '有经过核对的 Pages 适用结论和设置方案；尚未发布也不能记为上线。',
      'A reviewed suitability decision and settings plan exist; preparation does not count as publication.',
    ],
    source:
      'https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site',
    sample: [
      '先确认公开：只上传网页文件，不上传密钥、聊天记录或自己的学习资料。首次打开新网址是另一份本地保存空间。',
      'Approve public files first. Do not upload secrets, chat logs, or personal journal data. The new URL uses separate local storage.',
    ],
    issues: [
      {
        id: 'pages-404',
        title: ['正式网址显示 404', 'The public URL returns 404'],
        check: [
          '确认仓库 Pages 显示发布成功，所选分支根目录存在 index.html。',
          'Check that Pages reports success and index.html exists at the selected branch root.',
        ],
        action: [
          '核对部署状态和实际 Visit site 地址；部署未结束先等状态，失败则保留日志交给 AI 检查。不要根据仓库地址猜网站地址。',
          'Check deployment status and the actual Visit site URL. If pending, wait for completion; if failed, retain logs for AI. Do not guess the website from the repository URL.',
        ],
        expected: [
          '重新打开官方显示的站点地址，看到目标页面。',
          'The site URL shown by GitHub opens the intended page.',
        ],
      },
    ],
    understanding: {
      why: [
        '先判断自己的网页是否适合放到 GitHub Pages，再决定下一步。',
        'Check whether your page fits GitHub Pages before proceeding.',
      ],
      concept: [
        'Git 是记录版本的工具；GitHub 是保存和分享代码的网站；GitHub Pages 是它提供的静态网页托管功能。',
        'Git records versions, GitHub hosts/shares code, and GitHub Pages hosts static webpages.',
      ],
      question: [
        '为什么换了正式网址后看不到原本的本机记录？',
        'Why might local records differ at a production URL?',
      ],
    },
    prompt: [
      '先检查能否读取docs/delivery.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n请先读取项目类型、构建方式和 docs/delivery.md；若已有 docs/release.md 则一并核对，没有时标为尚未进入交付准备，不阻碍本步适用性判断。只判断是否适合 GitHub Pages：必须可导出静态文件，不依赖服务器端运行和保密服务端凭据。不适合则说明并返回交付方式选择。适合时列出实际构建命令、输出目录和 Pages 设置操作，供本人核对。本步只准备方案，不创建远程仓库、不推送、不发布。正式执行统一进入交付步骤并确认目标与授权。',
      'First check access to docs/delivery.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead project type, build method and docs/delivery.md. Review docs/release.md if it exists; otherwise mark delivery preparation pending without blocking this suitability assessment. Assess only GitHub Pages suitability: static output without a server runtime or private server credentials. If unsuitable, explain and return to delivery selection. Otherwise provide the actual build command, output directory and Pages settings for review. Prepare instructions, return to “Prepare deployment or packaging” for the trial run, and execute remote creation, push and release only after confirmation in “Deliver and check the real entry”.',
    ],
    templateKind: 'prompt',
    choices: [
      {
        id: 'delivery',
        label: ['不适合，重选交付方式', 'Unsuitable: choose delivery again'],
      },
      {
        id: 'package',
        label: ['适合，准备交付物', 'Suitable: prepare the deliverable'],
      },
    ],
    support: {
      input: [
        '项目文件和已经确认的技术方案。',
        'Your project files and agreed technology choices.',
      ],
      output: [
        '有能逐项照做的准备说明。',
        'The preparation instructions are actionable.',
      ],
      answer: [
        'Git 是记录版本的工具；GitHub 是保存和分享代码的网站；GitHub Pages 是它提供的静态网页托管功能。',
        'Git records versions, GitHub hosts/shares code, and GitHub Pages hosts static webpages.',
      ],
      example: [
        '介绍页/静态文档可评估；需要服务端保管密钥的AI接口不能把密钥放进网页产物。',
        'Evaluate brochure/docs sites; never place private API keys in browser output.',
      ],
      recovery: [
        '学习记录全栈示例有后端和数据库，不能只上传页面就当作完整上线。',
        'The full-stack journal cannot be fully deployed by uploading its page alone.',
      ],
      terms: ['static-site', 'static-site'],
    },
    referenceAnswer: [
      '浏览器本地数据常按网址来源隔离，正式域名是另一个来源。需要迁移时先导出备份，再按实际数据方案导入，不能期待自动出现。',
      'Browser local data is origin-scoped. A new domain may require explicit backup/migration; it does not appear automatically.',
    ],
    guidedActions: [
      {
        id: 'publish-1',
        action: [
          '先判断是否适合 GitHub Pages。它可以托管静态网页，但不会替你运行后端和数据库。',
          'Check whether GitHub Pages fits. It hosts static pages, not your backend/database service.',
        ],
        expect: ['知道自己的项目是否适合。', 'Suitability is clear.'],
        ifWrong: [
          '学习记录全栈示例有后端和数据库，不能只上传页面就当作完整上线。',
          'The full-stack journal cannot be fully deployed by uploading its page alone.',
        ],
        afterwards: ['知道自己的项目是否适合。', 'Suitability is clear.'],
        prompt: [
          '请读 docs/delivery.md，检查项目能否直接导出静态网页。如果依赖后端或私密服务端配置，请说明原因并建议回到交付方式选择。现在只判断，不发布。',
          'Read docs/delivery.md and assess static export suitability. Explain server/private-configuration dependencies and return to delivery selection if unsuitable. Assess only; do not publish.',
        ],
      },
      {
        id: 'publish-2',
        action: [
          '适合时让工具写出实际设置方法，再回准备交付步骤试运行。',
          'If suitable, prepare exact instructions and return to delivery preparation.',
        ],
        expect: [
          '有能逐项照做的准备说明。',
          'The preparation instructions are actionable.',
        ],
        ifWrong: [
          '仓库或页面会公开时，先检查文件是否含密码、私密内容，再决定是否发布。',
          'Review files for secrets/private content before approving public access.',
        ],
        afterwards: [
          '有能逐项照做的准备说明。',
          'The preparation instructions are actionable.',
        ],
        prompt: [
          '请列本项目生成静态文件的方法、输出目录和 GitHub Pages 设置步骤，解释每一步在哪里操作。先只提供方案，不创建远程仓库、不推送、不发布。',
          'List this project’s static build, output folder and GitHub Pages settings with locations. Provide a plan only; do not create a remote repository, push or publish.',
        ],
      },
    ],
  },
  {
    id: 'maintain',
    phase: 'use',
    title: [
      '下次继续时，不用从头讲',
      'Continue next time without starting over',
    ],
    where: ['原项目和已有任务记录', 'The original project and task notes'],
    expected: [
      '能指出下一次从哪个文件、哪一项开始，知道资料如何备份。',
      'Know the file and task to resume, and how records are backed up.',
    ],
    prompt: [
      '先检查能否读取docs/release.md。缺失或无访问能力时，明确缺项与需本人操作的入口，停止本步执行，不编造文件或前序结论。\n读取当前项目、README、任务表和交付记录，整理维护交接并在获准测试环境核验备份恢复，不重新创建项目。保存 docs/handoff.md：实际项目位置、版本、运行入口、已验证/未验证项、下一任务；按本项目需要列维护表（负责人、频率、控制台/文件入口、操作、正常结果、失败处理），涵盖适用的数据备份与测试环境恢复、用量账单、日志、更新和有效期。同步README的实际运行说明与任务表。只能在获准测试环境执行恢复演练；无条件则标待验证。新需求先列受影响文档和测试，等本人确认后再进入开发，不自动开始新功能。',
      'First check access to docs/release.md. If missing or inaccessible, identify the prerequisite and owner action, then stop rather than invent prior work.\nRead the project, README, task list and release record. Prepare the maintenance handoff and verify backup/restore in the authorized test environment without recreating the project. Save docs/handoff.md with actual location, revision, entry, verified/unverified status and next task. Add applicable maintenance rows: owner, frequency, console/file entry, action, normal result and failure response for backup/test restore, billing, logs, updates and expiry. Sync README and task status. Restore only in an authorized test environment; mark unavailable trials unverified. For new scope, propose affected documents/tests and wait for confirmation before development.',
    ],
    issues: [
      {
        id: 'new-chat',
        title: ['换对话后 AI 要重新做', 'AI wants to start over in a new chat'],
        check: [
          '确认新对话关联原来的项目文件夹。',
          'Check that the new conversation belongs to the original folder.',
        ],
        action: [
          '先要求读取 idea.md、需求、README 和任务表，再复述当前状态。复述正确后，只继续下一项未完成任务。',
          'Ask it to read idea.md, requirements, README, and tasks, then restate the state. Continue only the next unfinished item after a correct restatement.',
        ],
        expected: [
          '原文件和成果保留，下一项任务可辨认。',
          'Original work is preserved and the next task is identifiable.',
        ],
      },
    ],
    stage: 'maintain',
    understanding: {
      why: [
        '把启动、备份和下一项任务写好，下次就能接着做。',
        'Record startup, backups and the next task so you can resume later.',
      ],
      concept: [
        '备份是另存一份资料；恢复是用那份资料重新打开并确认能用。',
        'A backup keeps another copy; restoration proves that copy can be opened and used.',
      ],
      question: [
        '只有代码仓库，能恢复用户后续填写的数据吗？',
        'Can code alone restore data entered later?',
      ],
    },
    support: {
      input: [
        '目前能使用的项目、数据位置和还没完成的任务。',
        'Your working project, data location and unfinished tasks.',
      ],
      output: [
        '下次可以直接找到原项目和下一项任务。',
        'The next session can find the project and next task.',
      ],
      answer: [
        '备份是另存一份资料；恢复是用那份资料重新打开并确认能用。',
        'A backup keeps another copy; restoration proves that copy can be opened and used.',
      ],
      example: [
        '数据备份：每周/本人/服务备份入口/在测试库恢复并对照数量/失败保留原库并排查；频率按可接受损失调整。',
        'Backup example: weekly, owner, service backup entry, restore in test and compare records; preserve the source on failure. Adjust frequency to acceptable loss.',
      ],
      recovery: [
        '只有仓库地址时，追问作品数据实际在哪里。',
        'Ask for data storage if only a repository is listed.',
      ],
      terms: ['backup', 'monitoring', 'migration'],
    },
    referenceAnswer: [
      '通常不能。仓库保存纳入版本的文件，用户数据可能在数据库、服务或浏览器里；需要相应备份并验证恢复。',
      'Usually not. User data may live in a database, service or browser; back up and test restoration separately.',
    ],
    guidedActions: [
      {
        id: 'maintain-1',
        action: [
          '先分清要备份什么：项目代码、作品数据、学习草稿分别保存。只有实际使用数据库时才做下面的数据库备份和恢复；没有数据库就按工具说明备份实际文件，再做最后的“记录下次从哪里继续”。',
          'Distinguish code, application data and learning drafts. Follow the database backup and restoration actions only when your project uses a database. Otherwise back up its actual files, then continue to the final handoff action.',
        ],
        expect: [
          '知道每份资料该从哪里备份。',
          'Each backup source and destination is clear.',
        ],
        ifWrong: [
          '只有仓库地址时，追问作品数据实际在哪里。',
          'Ask for data storage if only a repository is listed.',
        ],
        afterwards: [
          '知道每份资料该从哪里备份。',
          'Each backup source and destination is clear.',
        ],
        prompt: [
          '请列出本项目代码和实际数据的位置，分别说明怎样备份、备份存在哪里。代码提交不能代替数据库备份。',
          'List code and actual data locations and how/where each is backed up. A commit does not replace a database backup.',
        ],
      },
      {
        id: 'maintain-2',
        action: [
          '创建一份带日期的新备份，不覆盖旧文件。',
          'Create a new dated backup without overwriting older files.',
        ],
        expect: [
          '得到能找到的非空备份文件。',
          'A nonempty backup exists at the reported location.',
        ],
        ifWrong: [
          '失败先查空间、路径和权限；不要删除旧备份来试运气。',
          'Check space, path and permissions on failure.',
        ],
        afterwards: [
          '得到能找到的非空备份文件。',
          'A nonempty backup exists at the reported location.',
        ],
        prompt: [
          '请用数据库支持的一致性备份方法，生成一份新备份。先报告原数据位置、备份位置和当前记录数量，完成后告诉我文件大小。不要清空或覆盖原数据。',
          'Use the database’s supported consistent-backup method. Report source, destination and current record count, then output size. Preserve original data.',
        ],
      },
      {
        id: 'maintain-3',
        action: [
          '在独立目录试着恢复这份备份。恢复成功意味着能真的打开并读到记录。',
          'Restore into a separate test location and actually read the records.',
        ],
        expect: [
          '能打开恢复副本，找到备份时的旧记录。',
          'The restored copy opens with records from the backup.',
        ],
        ifWrong: [
          '路径相同或不确定就停下，先改成独立位置。',
          'Stop if the paths match or are uncertain.',
        ],
        afterwards: [
          '能打开恢复副本，找到备份时的旧记录。',
          'The restored copy opens with records from the backup.',
        ],
        prompt: [
          '请把备份恢复到独立测试位置，先让我核对原库和恢复目标不是同一路径。只启动连接恢复副本的测试服务，告诉我打开地址，绝不覆盖原库。',
          'Restore to a separate test destination. Show source and target paths first. Start only a test service connected to the copy and give its URL. Never overwrite the source.',
        ],
      },
      {
        id: 'maintain-4',
        action: [
          '打开刚才恢复副本的网址，新增“恢复测试 001”并保存。把这条记录的编号交给工具，检查原库里没有它。若副本无法新增，就把实际报错交给工具，先不要记录为成功。',
          'Open the restored copy’s URL and save “restore test 001”. Give its ID to the tool and check that it is absent from the original database. If saving fails, report the error instead of claiming success.',
        ],
        expect: [
          '副本能保存新记录，原库内容不变，恢复方法已保存。',
          'The copy saves new records, the original is unchanged, and restoration instructions are saved.',
        ],
        ifWrong: [
          '记录不符时保留副本和日志，先查备份日期及路径。',
          'Preserve mismatches and inspect backup time/paths.',
        ],
        afterwards: [
          '副本能保存新记录，原库内容不变，恢复方法已保存。',
          'The copy saves new records, the original is unchanged, and restoration instructions are saved.',
        ],
        prompt: [
          '我只在恢复副本里新增了“恢复测试 001”，编号是【填写】。请核对副本中的旧记录和新增记录，并只读检查原库没有这次新增。将备份位置、恢复方法和实际结果写入 docs/handoff.md，再停止恢复测试服务。不要修改原库。',
          'I added “restore test 001” only to the restored copy, with ID [fill in]. Check the copy’s old and new records, and read-only verify that the original does not contain this addition. Record backup location, restoration method and actual results in docs/handoff.md, then stop the test service. Do not modify the original database.',
        ],
      },
      {
        id: 'maintain-5',
        action: ['记录下次从哪里继续。', 'Record where to resume next time.'],
        expect: [
          '下次可以直接找到原项目和下一项任务。',
          'The next session can find the project and next task.',
        ],
        ifWrong: [
          '新需求先说明改什么，再更新需求和计划。',
          'Describe new scope and update requirements/plans first.',
        ],
        afterwards: [
          '下次可以直接找到原项目和下一项任务。',
          'The next session can find the project and next task.',
        ],
        prompt: [
          '请更新 docs/handoff.md：项目位置、当前版本、启动方法、未解决问题、下一项任务。下次新对话先读这份文件，不重新创建项目。',
          'Update docs/handoff.md with location, revision, startup, open issues and next task. A new chat should read it rather than recreate the project.',
        ],
      },
    ],
  },
];
