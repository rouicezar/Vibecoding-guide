import type { Copy } from './site';
export interface LessonIssue {
  id: string;
  title: Copy;
  check: Copy;
  action: Copy;
  expected: Copy;
  retry?: string;
}
export interface Understanding {
  why: Copy;
  concept: Copy;
  question: Copy;
}
export interface Lesson {
  templateKind?: 'worksheet' | 'prompt';
  understanding?: Understanding;
  choices?: { id: string; label: Copy }[];
  id: string;
  phase: string;
  title: Copy;
  where: Copy;
  actions: Copy[];
  expected: Copy;
  sample?: Copy;
  prompt?: Copy;
  stage?: string;
  issues: LessonIssue[];
  refs?: { path: string; title: Copy }[];
  source?: string;
}

export interface GuidedAction {
  id: string;
  action: Copy;
  prompt?: Copy;
  afterwards: Copy;
  expect: Copy;
  ifWrong: Copy;
}
export interface LearningContent extends Omit<Lesson, 'actions'> {
  support: {
    input: Copy;
    output: Copy;
    answer: Copy;
    example: Copy;
    recovery: Copy;
    terms: string[];
  };
  referenceAnswer: Copy;
  guidedActions: GuidedAction[];
}
