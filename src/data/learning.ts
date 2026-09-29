import { learningContent } from './learning-content.ts';
import type { Copy } from './site';
import type { Lesson } from './learning-types';
export type { Lesson, LessonIssue, Understanding } from './learning-types';
export const phases = [
  {
    id: 'idea',
    title: ['把想法说清楚', 'Define the idea'],
    description: [
      '说明项目给谁用、解决什么问题，整理成项目描述。',
      'Identify the users and problem, then write a project brief.',
    ],
    result: ['可直接交给 AI 的项目描述', 'A project brief ready for AI'],
  },
  {
    id: 'prepare',
    title: ['准备协作空间', 'Prepare the workspace'],
    description: [
      '选择 AI 工具，创建项目文件夹，确认文件已保存。',
      'Choose an AI tool, create a project folder, and check saved files.',
    ],
    result: [
      '已创建的项目文件夹和起始文件',
      'A project folder and initial files',
    ],
  },
  {
    id: 'scope',
    title: ['把需求变成计划', 'Turn needs into a plan'],
    description: [
      '确认第一版功能，让 AI 整理需求、用户使用流程和开发计划。',
      'Agree on version-one features, then document requirements, user flows, and the development plan with AI.',
    ],
    result: [
      '明确的需求文档、设计方案和开发计划',
      'Requirements, a design, and a development plan',
    ],
  },
  {
    id: 'build',
    title: ['制作并验证功能', 'Build and verify'],
    description: [
      '检查环境，让 AI 分步制作页面、接好数据，走通使用流程。',
      'Check the environment, build pages and data features with AI, and complete the user flow.',
    ],
    result: [
      '能实际打开并操作的第一版项目',
      'A first version that opens and works',
    ],
  },
  {
    id: 'check',
    title: ['验收与修复', 'Accept and repair'],
    description: [
      '亲手试用并记录问题，让 AI 制定修复计划，修复后再次测试。',
      'Try the project, record issues, ask AI to plan fixes, and test again after repair.',
    ],
    result: [
      '经过本人测试和修复后复测的版本',
      'A version manually tested and retested after fixes',
    ],
  },
  {
    id: 'use',
    title: ['交付与持续维护', 'Deliver and maintain'],
    description: [
      '检查交付条件，按需要部署上线或制作安装包，再记录后续维护事项。',
      'Check readiness, deploy or package as needed, then record maintenance tasks.',
    ],
    result: [
      '可使用的项目入口和维护说明',
      'A usable project entry point and maintenance notes',
    ],
  },
] satisfies { id: string; title: Copy; description: Copy; result: Copy }[];

export const lessons: Lesson[] = learningContent.map(
  ({ support, referenceAnswer, guidedActions, ...lesson }) => ({
    ...lesson,
    actions: guidedActions.map((action) => action.action),
  }),
);
export const legacyLessons: Record<string, string> = {
  idea: 'idea',
  tell: 'tool',
  refine: 'clarify',
  scope: 'scope',
  requirements: 'requirements',
  stack: 'choose-stack',
  plan: 'plan',
  environment: 'environment',
  build: 'preview',
  ui: 'interface',
  backend: 'save',
  flow: 'flow',
  test: 'test',
  accept: 'accept',
  launch: 'delivery',
  maintain: 'maintain',
};
export const lessonPath = (id: string) => `learn/${id}`;
export const learningPaths = [
  'learn',
  'library',
  ...phases.map((p) => `learn/stage/${p.id}`),
  ...lessons.flatMap((l) => [
    lessonPath(l.id),
    `${lessonPath(l.id)}/help`,
    ...l.issues.map((i) => `${lessonPath(l.id)}/help/${i.id}`),
  ]),
];
