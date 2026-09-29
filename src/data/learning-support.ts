import { learningContent } from './learning-content.ts';
import type { GuidedAction } from './learning-types';
import type { Copy } from './site';
export interface StepSupport {
  id: string;
  input: Copy;
  output: Copy;
  steps: Copy[];
  answer: Copy;
  example: Copy;
  recovery: Copy;
  terms: string[];
}
// Compatibility view for supporting resource pages; the fields above remain structured.
function supportStep(action: GuidedAction): Copy {
  const line = (lang: 0 | 1) =>
    action.action[lang] +
    (action.prompt
      ? ['\n建议提示词：', '\nSuggested prompt: '][lang] + action.prompt[lang]
      : '') +
    ['\n完成后：', '\nAfterwards: '][lang] +
    action.afterwards[lang];
  return [line(0), line(1)];
}
export const stepSupport: StepSupport[] = learningContent.map((lesson) => ({
  id: lesson.id,
  ...lesson.support,
  steps: lesson.guidedActions.map(supportStep),
}));
export const referenceAnswers: Record<string, Copy> = Object.fromEntries(
  learningContent.map((lesson) => [lesson.id, lesson.referenceAnswer]),
);
