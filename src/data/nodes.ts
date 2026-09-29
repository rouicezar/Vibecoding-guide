import {url,type Copy,type Locale} from './site.ts';
import {lessons,phases,legacyLessons} from './learning.ts';

/**
 * 当前节点组织：数量是实现快照，不是教学标准；按跟做需要调整。
 * 数据与站内「完整路线图」（ProjectRoadmap.astro）上的节点一一对应。
 * 每个节点的 stepIds 指向 learning.ts 的教学动作，数量由实际内容决定。
 * 这是节点页（/node/<id>）的唯一数据源；页面结构固定，不再逐个节点手写。
 */
export interface RouteNode {
  id: string;
  order: number;                                   // 从 1 连续排列
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
    gloss: ["先写给谁用、解决什么问题，再写怎样试用才算做好。", "Write users, problem and a practical success check."],
    why: ["先想清楚你要解决的一件事，AI 才知道该帮你做什么。", "Name one problem so AI knows what to help you build."],
    stepIds: ['idea'],
  },
  {
    id: 'description', order: 2, phaseId: 'idea', icon: 'document',
    title: ['整理项目描述', 'Prepare the brief'],
    gloss: ["项目描述就是告诉别人：我要做什么，给谁用，怎样使用。", "A project description says what to make, for whom and how it is used."],
    why: ["把刚才的想法整理成一份说明，后面可以直接交给工具。", "Turn your idea into a description you can give the tool."],
    stepIds: ['description'],
  },
  {
    id: 'tool', order: 3, phaseId: 'prepare', icon: 'tool',
    title: ['选择 AI 工具', 'Choose an AI tool'],
    gloss: ["这里的 AI 工具需要能帮助你保存文件和运行项目；先确认入口，再开始做。", "The tool should help save files and run the project; locate its controls first."],
    why: ["选一个你能登录、能操作项目文件的工具，就可以开始。", "Choose one tool you can sign into that can work with project files."],
    stepIds: ['tool'],
  },
  {
    id: 'folder', order: 4, phaseId: 'prepare', icon: 'folder-plus',
    title: ['创建项目文件夹', 'Create the project folder'],
    gloss: ["文件夹就是项目文件的存放位置；路径是找到它的地址。", "A folder stores project files; its path tells you where it is."],
    why: ["把这个项目的文件放在同一个文件夹，下次才找得到。", "Keep project files together so you can find them next time."],
    stepIds: ['folder'],
  },
  {
    id: 'open-project', order: 5, phaseId: 'prepare', icon: 'folder',
    title: ['在工具中打开项目', 'Open it in the tool'],
    gloss: ["同一个工具可以打开不同项目；开始前要检查现在打开的是哪一个。", "A tool can open different projects; check which one is active."],
    why: ["让工具打开你自己的项目文件夹，后面才能修改正确的文件。", "Open your project folder in the tool so later changes reach the right files."],
    stepIds: ['open-project'],
  },
  {
    id: 'checkpoint', order: 6, phaseId: 'prepare', icon: 'git',
    title: ['准备 Git 与项目规则', 'Prepare Git and project rules'],
    gloss: ["初始化 Git 是建立保存修改历史的地方；提交才是保存一个版本。AGENTS.md 写明工具做事时要遵守什么。", "Initializing Git creates a place for history; committing saves a version. AGENTS.md states the rules the tool should follow."],
    why: ["Git 保存已经提交的项目版本，改错时可以回到之前保存的版本。AGENTS.md 是写给 AI 工具的项目说明书和规则。", "Git keeps committed project versions you can return to. AGENTS.md explains the project and working rules to the AI tool."],
    stepIds: ['checkpoint', 'first-file'],
  },
  {
    id: 'clarify', order: 7, phaseId: 'scope', icon: 'message',
    title: ['澄清需求与第一版范围', 'Clarify needs and scope'],
    gloss: ["不用一次回答所有问题；问一个，答一个，不知道就说还没决定。", "Answer one question at a time; undecided is a valid answer."],
    why: ["把工具没理解的地方解释清楚，避免做出你不想要的功能。", "Explain unclear points before the tool builds the wrong thing."],
    stepIds: ['clarify', 'scope'],
  },
  {
    id: 'requirements', order: 8, phaseId: 'scope', icon: 'document',
    title: ['形成需求与用户故事', 'Write requirements and stories'],
    gloss: ["需求文档记录填什么、做什么、应该得到什么结果。", "Requirements record inputs, actions and expected outcomes."],
    why: ["把已经说好的功能写下来，开发时就能照着检查。", "Write agreed features down so you can check the implementation later."],
    stepIds: ['requirements', 'stories'],
  },
  {
    id: 'prototype', order: 9, phaseId: 'scope', icon: 'layout',
    title: ['确认界面与技术方案', 'Agree on design and technology'],
    gloss: ["页面草稿也叫原型，可以演示样子和顺序，但里面的保存按钮可能还不能真正保存。", "A prototype previews appearance and sequence; its Save button may still be simulated."],
    why: ["先看看页面草稿，确认入口和按钮放对了，再花时间开发。", "Review a draft before spending time building the features."],
    stepIds: ['prototype', 'choose-stack'],
  },
  {
    id: 'plan', order: 10, phaseId: 'scope', icon: 'checklist',
    title: ['制定开发计划与测试标准', 'Plan development and tests'],
    gloss: ["任务表告诉你下一项做什么、需要什么、怎样判断做完了。", "A task list names the next job, prerequisites and completion check."],
    why: ["把开发拆成一小项一小项，做完一项就能打开看看。", "Split development into small tasks you can inspect as they finish."],
    stepIds: ['plan'],
  },
  {
    id: 'environment', order: 11, phaseId: 'build', icon: 'code',
    title: ['检查环境并初始化项目', 'Check the environment and initialize'],
    gloss: ["运行环境就是让程序在电脑上运行所需的软件；依赖是项目要用的现成程序包。", "The runtime is software needed to execute the program; dependencies are packages it uses."],
    why: ["先把运行项目需要的软件装好，并确认能打开最小页面。", "Install what the project needs and check that a minimal page opens."],
    stepIds: ['environment'],
  },
  {
    id: 'preview', order: 12, phaseId: 'build', icon: 'click',
    title: ['按计划分步开发并测试', 'Build and test incrementally'],
    gloss: ["预览是打开正在开发的作品，看看真实页面和功能是什么样。", "A preview opens the work in progress so you can see its real pages and behavior."],
    why: ["从任务表第一项开始制作，每次亲手看完结果再继续。", "Build from the first task and inspect each result before continuing."],
    stepIds: ['preview', 'interface', 'save', 'flow'],
  },
  {
    id: 'accept', order: 13, phaseId: 'check', icon: 'verify',
    title: ['亲自测试完整使用过程', 'Test the full journey personally'],
    gloss: ["验收就是你按照先前约定的方法试用，再决定是否达到了目标。", "Acceptance means trying the agreed checks yourself and deciding whether the goal is met."],
    why: ["回到最初的想法，亲自看看作品有没有解决自己的问题。", "Return to the original goal and personally check whether the project solves it."],
    stepIds: ['test', 'restart', 'accept'],
  },
  {
    id: 'delivery', order: 14, phaseId: 'use', icon: 'package',
    title: ['选择交付方式', 'Choose how to deliver'],
    gloss: ["交付就是让预期使用者能打开并使用作品，不一定需要公开网址。", "Delivery means intended users can open and use it; a public URL is optional."],
    why: ["先决定自己用还是给别人用，才能知道需要准备哪些文件和服务。", "Choose local or shared use before preparing files and services."],
    stepIds: ['delivery'],
  },
  {
    id: 'release-review', order: 15, phaseId: 'use', icon: 'shield',
    title: ['评估上线与交付条件', 'Review release readiness'],
    gloss: ["这一项是准备检查；还没打开试过的安装包或网站，要留作待测试。", "This checks preparation; an untried installer or site remains pending."],
    why: ["准备给人使用之前，先查功能、说明和所需账号还有没有缺项。", "Before delivery, check for missing features, instructions and accounts."],
    stepIds: ['release-review'],
  },
  {
    id: 'package', order: 16, phaseId: 'use', icon: 'package',
    title: ['准备部署脚本或安装包', 'Prepare deployment or packaging'],
    gloss: ["安装包、静态网页和需要后端的网站，使用方法不同；让工具按你的项目准备。", "Installers, static pages and backend-powered sites need different preparation."],
    why: ["按选好的方式准备文件，并照使用说明实际打开试一次。", "Prepare the chosen files and actually try them using the instructions."],
    stepIds: ['package', 'publish'],
  },
  {
    id: 'live-check', order: 17, phaseId: 'use', icon: 'rocket',
    title: ['交付上线，检查实际入口', 'Deliver and check the real entry'],
    gloss: ["本机使用检查本机入口；公开网站检查真实网址，两者按自己的选择来。", "Check the local entry for local use or the real URL for a public site."],
    why: ["从使用者真正会打开的位置再试一次，确认交出去的版本能用。", "Try the actual user entry to check that the delivered version works."],
    stepIds: ['live-check'],
  },
  {
    id: 'maintain', order: 18, phaseId: 'use', icon: 'settings',
    title: ['记录维护与下一次迭代', 'Plan maintenance and the next change'],
    gloss: ["备份是另存一份资料；恢复是用那份资料重新打开并确认能用。", "A backup keeps another copy; restoration proves that copy can be opened and used."],
    why: ["把启动、备份和下一项任务写好，下次就能接着做。", "Record startup, backups and the next task so you can resume later."],
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
export const nodePhases = phases.map(phase => ({...phase, caption: phase.description}));

export const nodePhaseById = (id: RouteNode['phaseId']) => nodePhases.find(p => p.id === id);

/** 一个步骤属于哪个节点；修复回路的三个步骤归到第一个入口节点。 */
export const nodeForStep = (stepId: string): string => {
  const node = routeNodes.find(n => n.stepIds.includes(stepId));
  if (node) return node.id;
  if (repairStepIds.includes(stepId)) return repairEntryNodeIds[0];
  throw new Error(`步骤没有归属节点：${stepId}`);
};

/** 当前节点是否覆盖了全部教学动作，以及每个动作是否只属于一个节点。 */
export const nodeStepIds = routeNodes.flatMap(node => node.stepIds);

export const nodeById = (id: string) => routeNodes.find(node => node.id === id);

/** 直接指向某一步骤所在节点页的锚点；避免经过 /learn/<步骤> 的跳转页。 */
export const stepUrl = (locale: Locale, stepId: string) => `${url(locale, `node/${nodeForStep(stepId)}`)}#${stepId}`;

/** 旧 16 节点（journey.ts）id → 18 节点 id，用于把旧入口导到新的节点页。 */
export const legacyNodeMap: Record<string, string> = Object.fromEntries(
  Object.entries(legacyLessons).map(([id,step]) => [id,nodeForStep(step)])
);

/** 节点页的步骤数（页面必须显示，用于培养用户对剩余工作量的预期）。 */
export const stepTitles = (node: RouteNode, locale: 'zh-cn' | 'en') =>
  node.stepIds.map(id => {
    const lesson = lessons.find(l => l.id === id);
    if (!lesson) throw new Error(`节点 ${node.id} 引用了不存在的步骤：${id}`);
    return locale === 'zh-cn' ? lesson.title[0] : lesson.title[1];
  });

/** 恢复主线时不把修复回路与可选发布当成必做动作。 */
export const nextMainStep = (completed: readonly string[]) => linearStepIds.find(id => !completed.includes(id));
export const phaseUrl = (locale: Locale, phaseId: string) => url(locale, `node/${routeNodes.find(node => node.phaseId === phaseId)!.id}`);

/** 资料页与旧数据中的兼容路径统一生成当前节点入口。 */
export const routeUrl = (locale: Locale, path: string): string => {
 if(path === 'learn') return url(locale,'roadmap');
 if(path.startsWith('learn/stage/')) return phaseUrl(locale,path.split('/')[2]);
 if(path.startsWith('learn/')) return stepUrl(locale,path.split('/')[1]);
 if(path.startsWith('roadmap/') && legacyLessons[path.split('/')[1]]) return stepUrl(locale,legacyLessons[path.split('/')[1]]);
 return url(locale,path);
};
