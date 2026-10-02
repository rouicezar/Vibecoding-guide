import {
  linearStepIds,
  nextMainStep,
  repairStepIds,
  routeNodes,
  optionalSteps,
} from './nodes.ts';

/** 恢复到哪里：主线步骤没有来源节点概念，修复步骤带 from（进入修复的节点）。 */
export interface ResumeTarget {
  step: string;
  from?: string;
}

export interface ProgressState {
  completed: string[];
  /** 旧格式为字符串，仅用于迁移；新格式为 { step, from }。 */
  activeBranch?: string | { step: string; from: string };
}

const branchStep = (state: ProgressState) => {
  const branch = state.activeBranch;
  if (!branch) return undefined;
  return typeof branch === 'string'
    ? { step: branch }
    : { step: branch.step, from: branch.from };
};

export const resumeStep = (state: ProgressState): ResumeTarget | undefined => {
  const branch = branchStep(state);
  if (branch && repairStepIds.includes(branch.step)) return branch;
  const next = nextMainStep(state.completed);
  return next ? { step: next } : undefined;
};
export const canComplete = (id: string, verdict: string) =>
  verdict === 'passed' ||
  (['interface', 'save', 'test'].includes(id) && verdict === 'not-applicable');
/** 核对记录；verdict 为 not-applicable 的步骤不计入「已核对」。 */
export type CheckRecords = Record<string, { verdict: string } | undefined>;

/**
 * 必须先记录本人核对结论才能标记完成的步骤。
 *
 * 收录标准是「失败时会不会静默」：装错运行环境、写错起始文件、选错交付方式都不会报错，
 * 只让后续步骤莫名其妙做不下去，所以必须有可核对的结果。
 * 纯思考与整理类步骤（idea、description、clarify、plan 等）不在此列 ——
 * 硬要新手填版本号和结论只会增加负担，且这些步骤的槽位 08 已经给出预期结果。
 *
 * 此列表是唯一来源：StepRecord 决定渲染核对面板，learning.ts 决定完成闸门。
 */
export const checkedSteps = [
  // 准备阶段：失败即静默。open-project 是全站最常见的静默失败根因
  // ——工具打开了错误目录，之后每一步都改了「看不见的地方」，而且不会报错。
  'tool',
  'open-project',
  'first-file',
  'environment',
  // 开发阶段
  'preview',
  'interface',
  'save',
  'flow',
  // 验收与修复
  'test',
  'restart',
  'accept',
  'repair',
  // 交付阶段：选错方式会让后面全部白做
  'delivery',
  'release-review',
  'package',
  'publish',
  'live-check',
];

const isWaived = (id: string, checks?: CheckRecords) =>
  checks?.[id]?.verdict === 'not-applicable';

export const nodeProgress = (
  id: string,
  completed: readonly string[],
  checks?: CheckRecords,
) => {
  const steps =
    routeNodes
      .find((n) => n.id === id)
      ?.stepIds.filter((step) => !optionalSteps[step]) ?? [];
  const counted = steps.filter((step) => completed.includes(step));
  return {
    done: counted.filter((step) => !isWaived(step, checks)).length,
    waived: counted.filter((step) => isWaived(step, checks)).length,
    total: steps.length,
  };
};
export const mainProgress = (
  completed: readonly string[],
  checks?: CheckRecords,
) => {
  const counted = linearStepIds.filter((id) => completed.includes(id));
  return {
    done: counted.filter((id) => !isWaived(id, checks)).length,
    waived: counted.filter((id) => isWaived(id, checks)).length,
    total: linearStepIds.length,
  };
};
