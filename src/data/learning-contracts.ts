export const fileContracts: Record<
  string,
  { reads: string[]; writes: string[]; back: string }
> = {
  'open-project': { reads: [], writes: [], back: 'folder' },
  checkpoint: {
    reads: [],
    writes: [
      'idea.md',
      '工具支持的规则文件 / supported rule file',
      '.gitignore',
    ],
    back: 'description',
  },
  'first-file': { reads: ['idea.md'], writes: [], back: 'checkpoint' },
  clarify: { reads: ['idea.md'], writes: ['idea.md'], back: 'first-file' },
  scope: {
    reads: ['idea.md'],
    writes: ['docs/requirements.md'],
    back: 'clarify',
  },
  requirements: {
    reads: ['idea.md', 'docs/requirements.md'],
    writes: ['docs/requirements.md'],
    back: 'scope',
  },
  stories: {
    reads: ['idea.md', 'docs/requirements.md'],
    writes: ['docs/stories.md'],
    back: 'requirements',
  },
  prototype: {
    reads: ['docs/requirements.md', 'docs/stories.md'],
    writes: ['docs/design.md'],
    back: 'stories',
  },
  'choose-stack': {
    reads: ['docs/requirements.md', 'docs/stories.md', 'docs/design.md'],
    writes: ['docs/design.md'],
    back: 'prototype',
  },
  plan: {
    reads: ['docs/requirements.md', 'docs/stories.md', 'docs/design.md'],
    writes: ['tasks/todo.md'],
    back: 'choose-stack',
  },
  environment: {
    reads: ['docs/design.md', 'tasks/todo.md'],
    writes: ['README.md', 'docs/checks.md'],
    back: 'plan',
  },
  preview: {
    reads: [
      'docs/requirements.md',
      'docs/stories.md',
      'docs/design.md',
      'tasks/todo.md',
      'README.md',
    ],
    writes: ['tasks/todo.md', 'docs/checks.md'],
    back: 'environment',
  },
  interface: {
    reads: ['docs/design.md', 'tasks/todo.md'],
    writes: ['docs/checks.md'],
    back: 'preview',
  },
  save: {
    reads: ['docs/requirements.md', 'docs/design.md', 'tasks/todo.md'],
    writes: ['docs/checks.md'],
    back: 'plan',
  },
  flow: {
    reads: ['docs/requirements.md', 'tasks/todo.md'],
    writes: ['docs/checks.md'],
    back: 'preview',
  },
  test: {
    reads: ['docs/requirements.md', 'docs/checks.md'],
    writes: ['docs/checks.md'],
    back: 'flow',
  },
  restart: {
    reads: ['README.md'],
    writes: ['docs/checks.md'],
    back: 'environment',
  },
  feedback: { reads: [], writes: ['docs/feedback.md'], back: 'accept' },
  'repair-plan': {
    reads: ['docs/feedback.md', 'docs/requirements.md'],
    writes: ['docs/repair-plan.md'],
    back: 'feedback',
  },
  repair: {
    reads: ['docs/repair-plan.md', 'docs/feedback.md'],
    writes: ['docs/checks.md', 'docs/feedback.md'],
    back: 'repair-plan',
  },
  'release-review': {
    reads: [
      'docs/requirements.md',
      'docs/design.md',
      'docs/checks.md',
      'docs/acceptance.md',
      'docs/delivery.md',
    ],
    writes: ['docs/release.md', 'docs/feedback.md'],
    back: 'delivery',
  },
  package: {
    reads: ['docs/design.md', 'docs/delivery.md', 'docs/release.md'],
    writes: ['docs/release.md'],
    back: 'release-review',
  },
  'live-check': {
    reads: ['docs/release.md', 'docs/delivery.md'],
    writes: ['docs/release.md'],
    back: 'package',
  },
  publish: { reads: ['docs/delivery.md'], writes: [], back: 'delivery' },
  maintain: {
    reads: ['docs/release.md'],
    writes: ['docs/handoff.md'],
    back: 'live-check',
  },
  accept: { reads: [], writes: ['docs/acceptance.md'], back: 'test' },
  delivery: { reads: [], writes: ['docs/delivery.md'], back: 'accept' },
};
