import { learningContent } from './learning-content.ts';
import type { GuidedAction } from './learning-types';
export type MicroAction = GuidedAction;
export const microActions: Record<string, MicroAction[]> = Object.fromEntries(
  learningContent.map((lesson) => [lesson.id, lesson.guidedActions]),
);
