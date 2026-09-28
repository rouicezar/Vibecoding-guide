import {url,type Copy,type Locale} from './site.ts';
import {lessons} from './learning.ts';

/**
 * 18 个关键节点 = 学习基线。
 * 数据与站内「完整路线图」（ProjectRoadmap.astro）上的节点一一对应。
 * 每个节点的 stepIds 指向 learning.ts 的教学动作（步骤）；18 个节点共 31 个步骤。
 * 这是节点页（/node/<id>）的唯一数据源；页面结构固定，不再逐个节点手写。
 */
export interface RouteNode {
  id: string;
  order: number;                                   // 1..18，线性
  phaseId: 'idea' | 'prepare' | 'scope' | 'build' | 'check' | 'use';
  icon: string;
  title: Copy;
  gloss: Copy;                                     // 一句话白话
  why: Copy;                                       // 为什么要有这一节点（跳过会怎样）
  stepIds: string[];                               // 步骤 = learning.ts 的 lesson id
}

export const routeNodes: RouteNode[] = [
  {
    id: 'idea', order: 1, phaseId: 'idea', icon: 'idea',
    title: ['记录项目想法', 'Record the idea'],
    gloss: ['明确用户、问题与预期结果', 'Users, problem and success criteria'],
    why: ['不先把想法写下来，AI 只能靠猜；写下来才能被复述、被核对。', 'Without a written idea, AI can only guess. A written one can be restated and checked.'],
    stepIds: ['idea'],
  },
  {
    id: 'description', order: 2, phaseId: 'idea', icon: 'document',
    title: ['整理项目描述', 'Prepare the brief'],
    gloss: ['一份可以交给 AI 的项目说明', 'A project brief ready for AI'],
    why: ['想法在脑子里是散的；整理成一份说明，AI 才能少猜一点。', 'An idea in your head is scattered. A written brief leaves less room for guessing.'],
    stepIds: ['description'],
  },
  {
    id: 'tool', order: 3, phaseId: 'prepare', icon: 'tool',
    title: ['选择 AI 工具', 'Choose an AI tool'],
    gloss: ['比较上手、额度、费用与能力', 'Compare ease, allowance, cost and capability'],
    why: ['没有能读写项目文件的工具，后面所有制作都无从开始。', 'Without a tool that can read and write project files, nothing later can start.'],
    stepIds: ['tool'],
  },
  {
    id: 'folder', order: 4, phaseId: 'prepare', icon: 'folder-plus',
    title: ['创建项目文件夹', 'Create the project folder'],
    gloss: ['一个专属于本项目的存放位置', 'A dedicated location for the project'],
    why: ['文件散落在下载目录里，下次就找不到了。一个项目一个文件夹。', 'Files scattered in Downloads get lost. One project, one folder.'],
    stepIds: ['folder'],
  },
  {
    id: 'open-project', order: 5, phaseId: 'prepare', icon: 'folder',
    title: ['在工具中打开项目', 'Open it in the tool'],
    gloss: ['确认对话关联正确文件夹', 'Confirm the chat uses the correct folder'],
    why: ['对话必须绑在正确的文件夹上，否则 AI 会改错项目。', 'The chat must belong to the right folder, or AI edits the wrong project.'],
    stepIds: ['open-project'],
  },
  {
    id: 'checkpoint', order: 6, phaseId: 'prepare', icon: 'git',
    title: ['准备 Git 与项目规则', 'Prepare Git and project rules'],
    gloss: ['可恢复的起点与 AI 工作约定', 'A recoverable baseline and AI instructions'],
    why: ['在动手改文件之前留一个能退回去的起点，出问题才有得回。', 'Save a return point before editing files, so there is somewhere to go back to.'],
    stepIds: ['checkpoint', 'first-file'],
  },
  {
    id: 'clarify', order: 7, phaseId: 'scope', icon: 'message',
    title: ['澄清需求与第一版范围', 'Clarify needs and scope'],
    gloss: ['回答疑问，确定先做与暂不做的事', 'Resolve questions and bound version one'],
    why: ['没说清的地方会在做完之后才暴露，那时改的代价最大。', 'Unclear points surface only after the build, when changes cost the most.'],
    stepIds: ['clarify', 'scope'],
  },
  {
    id: 'requirements', order: 8, phaseId: 'scope', icon: 'document',
    title: ['形成需求与用户故事', 'Write requirements and stories'],
    gloss: ['说明功能，以及用户怎样完成任务', 'Describe features and the user journey'],
    why: ['聊过的东西不写下来，下次对话就得从头再说一遍。', 'What was discussed but not written means starting over in the next conversation.'],
    stepIds: ['requirements', 'stories'],
  },
  {
    id: 'prototype', order: 9, phaseId: 'scope', icon: 'layout',
    title: ['确认界面与技术方案', 'Agree on design and technology'],
    gloss: ['关键页面、交互与实现方案', 'Key screens, interactions and implementation choices'],
    why: ['先把界面和做法定下来，能避免做完了界面才发现方案撑不住。', 'Settling the screens and approach first avoids finding out too late that it cannot work.'],
    stepIds: ['prototype', 'choose-stack'],
  },
  {
    id: 'plan', order: 10, phaseId: 'scope', icon: 'checklist',
    title: ['制定开发计划与测试标准', 'Plan development and tests'],
    gloss: ['可逐项执行、可检查的任务清单', 'Executable tasks with passing criteria'],
    why: ['不拆成小任务，就只能一次交付一大块，出问题不知道是哪一步。', 'Without small tasks you deliver everything at once and cannot tell what broke.'],
    stepIds: ['plan'],
  },
  {
    id: 'environment', order: 11, phaseId: 'build', icon: 'code',
    title: ['检查环境并初始化项目', 'Check the environment and initialize'],
    gloss: ['能启动的项目与再次打开的方法', 'A running project and restart instructions'],
    why: ['项目要先能打开、能跑起来，才有东西可以改。', 'The project must open and run before there is anything to change.'],
    stepIds: ['environment'],
  },
  {
    id: 'preview', order: 12, phaseId: 'build', icon: 'click',
    title: ['按计划分步开发并测试', 'Build and test incrementally'],
    gloss: ['走通核心操作，核对正常与异常结果', 'Verify the core flow and failure cases'],
    why: ['一次只做一小段、每段都打开看过，才知道是哪次改动出的问题。', 'Build one small piece and look at it, so a problem can be traced to one change.'],
    stepIds: ['preview', 'interface', 'save', 'flow'],
  },
  {
    id: 'accept', order: 13, phaseId: 'check', icon: 'verify',
    title: ['亲自测试完整使用过程', 'Test the full journey personally'],
    gloss: ['对照最初目标，记录真实结果', 'Check the original goals against actual results'],
    why: ['只有你亲手走一遍，才知道它到底能不能用；AI 的检查代替不了这一步。', 'Only your own run-through shows whether it works. Automated checks do not replace it.'],
    stepIds: ['test', 'restart', 'accept'],
  },
  {
    id: 'delivery', order: 14, phaseId: 'use', icon: 'package',
    title: ['选择交付方式', 'Choose how to deliver'],
    gloss: ['自己用、网址或安装包', 'Personal use, a website or an installer'],
    why: ['自己用和给别人用是两件事，先决定要哪一种，后面的准备完全不同。', 'Personal use and sharing are different tasks. Decide which first.'],
    stepIds: ['delivery'],
  },
  {
    id: 'release-review', order: 15, phaseId: 'use', icon: 'shield',
    title: ['评估上线与交付条件', 'Review release readiness'],
    gloss: ['确认功能、数据、权限和恢复条件', 'Check functionality, data, access and recovery'],
    why: ['正式开放前先确认条件，避免开放之后才发现缺东西。', 'Confirm readiness before opening up, not after.'],
    stepIds: ['release-review'],
  },
  {
    id: 'package', order: 16, phaseId: 'use', icon: 'package',
    title: ['准备部署脚本或安装包', 'Prepare deployment or packaging'],
    gloss: ['按交付方式生成产物并试运行', 'Prepare and trial the chosen deliverable'],
    why: ['正式版本要按交付方式生成并试运行，不能拿开发时的临时页面顶替。', 'The released version must be produced and trialled properly, not replaced by a temporary preview.'],
    stepIds: ['package', 'publish'],
  },
  {
    id: 'live-check', order: 17, phaseId: 'use', icon: 'rocket',
    title: ['交付上线，检查实际入口', 'Deliver and check the real entry'],
    gloss: ['从用户入口完成一次真实操作', 'Complete a real task through the delivered entry'],
    why: ['从真实用户的入口走一遍才算交付；本机地址不算。', 'Delivery is complete only after a real task works through the real entry. A local address does not count.'],
    stepIds: ['live-check'],
  },
  {
    id: 'maintain', order: 18, phaseId: 'use', icon: 'settings',
    title: ['记录维护与下一次迭代', 'Plan maintenance and the next change'],
    gloss: ['留下启动、恢复与后续任务说明', 'Record startup, recovery and future tasks'],
    why: ['不留下启动、恢复和下一项任务，下次就得从头再来。', 'Without startup, recovery and the next task recorded, the next session starts from zero.'],
    stepIds: ['maintain'],
  },
];

/** 修复回路：从这 4 个节点都能进入；数据里 package / live-check 也有指向 feedback 的分支。 */
export const repairStepIds = ['feedback', 'repair-plan', 'repair'];
export const repairTitle: Copy = ['没通过？沿这条路修好再继续', 'Not passed? Repair before continuing'];
export const repairEntryNodeIds = ['accept', 'release-review', 'package', 'live-check'];

/** 可选步骤：解决特定情况，不推进主线，做完回到本节点。 */
export const optionalSteps: Record<string, Copy> = {
  publish: ['可选 · 只适用于不含私密资料、不需要服务器的静态网站；只准备设置方案，做完回到本节点', 'Optional · static sites only, with no private data and no server; prepare a plan, then return to this milestone'],
};

/** 分支步骤：不参与线性推进（修复回路 + 可选步骤）。 */
export const branchStepIds = [...repairStepIds, ...Object.keys(optionalSteps)];

/** 线性步骤：按节点顺序推进的主线步骤，不含分支步骤。 */
export const linearStepIds = routeNodes.map(node => node.stepIds.filter(id => !branchStepIds.includes(id))).flat();

/**
 * 6 个阶段的分组名称。路线图（ProjectRoadmap.astro）与节点页共用这一处，
 * 避免同一阶段在两个页面出现两个名字。
 */
export const nodePhases: {id: RouteNode['phaseId']; title: Copy; caption: Copy}[] = [
  {id: 'idea', title: ['把想法说清楚', 'Define the idea'], caption: ['先明确要解决的问题', 'Start with the problem']},
  {id: 'prepare', title: ['准备协作空间', 'Prepare the workspace'], caption: ['让 AI 在正确的项目里工作', 'Give AI the right workspace']},
  {id: 'scope', title: ['把需求变成计划', 'Turn needs into a plan'], caption: ['先确定做什么、怎样算做好', 'Agree on scope and passing criteria']},
  {id: 'build', title: ['制作并验证功能', 'Build and verify'], caption: ['每次做一小段，完成就检查', 'Build in small, verifiable increments']},
  {id: 'check', title: ['验收与修复', 'Accept and repair'], caption: ['由实际使用结果决定是否通过', 'Decide from real usage']},
  {id: 'use', title: ['交付与持续维护', 'Deliver and maintain'], caption: ['从能运行，走到真正能使用', 'Verify the delivered experience']},
];

export const nodePhaseById = (id: RouteNode['phaseId']) => nodePhases.find(p => p.id === id);

/** 一个步骤属于哪个节点；修复回路的三个步骤归到第一个入口节点。 */
export const nodeForStep = (stepId: string): string => {
  const node = routeNodes.find(n => n.stepIds.includes(stepId));
  if (node) return node.id;
  if (repairStepIds.includes(stepId)) return repairEntryNodeIds[0];
  throw new Error(`步骤没有归属节点：${stepId}`);
};

/** 18 个节点是否覆盖了全部 31 个教学动作，以及每个动作是否只属于一个节点。 */
export const nodeStepIds = routeNodes.flatMap(node => node.stepIds);

export const nodeById = (id: string) => routeNodes.find(node => node.id === id);

/** 直接指向某一步骤所在节点页的锚点；避免经过 /learn/<步骤> 的跳转页。 */
export const stepUrl = (locale: Locale, stepId: string) => `${url(locale, `node/${nodeForStep(stepId)}`)}#${stepId}`;

/** 旧 16 节点（journey.ts）id → 18 节点 id，用于把旧入口导到新的节点页。 */
export const legacyNodeMap: Record<string, string> = {
  idea: 'idea',
  tell: 'tool',
  refine: 'clarify',
  scope: 'clarify',
  requirements: 'requirements',
  stack: 'prototype',
  plan: 'plan',
  environment: 'environment',
  build: 'preview',
  ui: 'preview',
  backend: 'preview',
  flow: 'preview',
  test: 'accept',
  accept: 'accept',
  launch: 'live-check',
  maintain: 'maintain',
};

/** 节点页的步骤数（页面必须显示，用于培养用户对剩余工作量的预期）。 */
export const stepTitles = (node: RouteNode, locale: 'zh-cn' | 'en') =>
  node.stepIds.map(id => {
    const lesson = lessons.find(l => l.id === id);
    if (!lesson) throw new Error(`节点 ${node.id} 引用了不存在的步骤：${id}`);
    return locale === 'zh-cn' ? lesson.title[0] : lesson.title[1];
  });
