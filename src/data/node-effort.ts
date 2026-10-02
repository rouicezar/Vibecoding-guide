import { microActions } from './micro-actions.ts';
import { optionalSteps, routeNodes } from './nodes.ts';

/**
 * 工作量口径：实际要亲手做的微操作数量。
 *
 * 侧栏和节点页此前只显示「步骤数」，但两者严重不成比例——
 * `folder`（创建项目文件夹）是 1 步 / 4 个微操作，`preview`（按计划分步开发）
 * 是 4 步 / 17 个微操作。只看步骤数会让用户对整体投入产生错误预期。
 * 这个数字用于展示，不参与任何完成判定。
 */
export interface Effort {
  /** 必做微操作总数 */
  main: number;
  /** 可选步骤的微操作数 */
  optional: number;
  total: number;
}

const effortOf = (stepIds: string[]): Effort => {
  const count = (id: string) => microActions[id]?.length ?? 0;
  const main = stepIds.filter((id) => !optionalSteps[id]);
  const optional = stepIds.filter((id) => optionalSteps[id]);
  return {
    main: main.reduce((sum, id) => sum + count(id), 0),
    optional: optional.reduce((sum, id) => sum + count(id), 0),
    total: main.concat(optional).reduce((sum, id) => sum + count(id), 0),
  };
};

const stepCache = new Map<string, Effort>();
/** 单个步骤的实际操作量。 */
export const stepEffort = (stepId: string): Effort => {
  const cached = stepCache.get(stepId);
  if (cached) return cached;
  const value = effortOf([stepId]);
  stepCache.set(stepId, value);
  return value;
};

const nodeCache = new Map<string, Effort>();
/** 节点内全部步骤的实际操作量（含可选步骤）。 */
export const nodeEffort = (nodeId: string): Effort => {
  const cached = nodeCache.get(nodeId);
  if (cached) return cached;
  const node = routeNodes.find((n) => n.id === nodeId);
  const value = node
    ? effortOf(node.stepIds)
    : { main: 0, optional: 0, total: 0 };
  nodeCache.set(nodeId, value);
  return value;
};

/** 全站主线总操作量，用于首页和路线图的总量说明。 */
export const routeEffort = () =>
  routeNodes.reduce(
    (sum, node) => {
      const e = nodeEffort(node.id);
      return { main: sum.main + e.main, optional: sum.optional + e.optional };
    },
    { main: 0, optional: 0 },
  );
