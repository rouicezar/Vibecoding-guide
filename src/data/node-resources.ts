import { routeNodes, nodeForStep, repairEntryNodeIds } from './nodes.ts';
import { stepSupport } from './learning-support.ts';
import { glossary } from './glossary/index.ts';
import { resourceGuidance } from './resource-guidance.ts';
/** Related reference contexts, not extra mandatory reading. Direct step references take precedence. */
export const groupNodes: Record<string, string[]> = {
  product: ['idea', 'description', 'clarify'],
  documents: ['requirements', 'plan', 'maintain'],
  models: ['tool'],
  context: ['description', 'open-project', 'clarify'],
  agents: ['tool', 'open-project'],
  'agent-files': ['checkpoint'],
  billing: ['tool', 'release-review', 'maintain'],
  retrieval: ['prototype', 'preview'],
  environment: ['folder', 'open-project', 'environment'],
  code: ['environment', 'preview'],
  stack: ['prototype'],
  technologies: ['prototype'],
  platforms: ['description', 'prototype', 'delivery'],
  design: ['prototype', 'preview'],
  'ui-states': ['preview'],
  browser: ['environment', 'preview'],
  network: ['prototype', 'preview'],
  data: ['preview'],
  architecture: ['prototype', 'preview'],
  security: ['preview', 'release-review'],
  git: ['checkpoint', 'preview'],
  testing: ['plan', 'accept'],
  release: ['package', 'live-check'],
  cloud: ['prototype', 'package'],
  operations: ['live-check', 'maintain'],
  integrations: ['prototype', 'preview'],
  ownership: ['delivery', 'release-review'],
};
const direct = (id: string) =>
  stepSupport
    .filter((s) => s.terms.includes(id))
    .flatMap((s) =>
      ['feedback', 'repair-plan', 'repair'].includes(s.id)
        ? repairEntryNodeIds
        : [nodeForStep(s.id)],
    );
export const termNodeIds: Record<string, string[]> = Object.fromEntries(
  glossary.map((term) => {
    const assigned = direct(term.id);
    const ids = assigned.length ? assigned : groupNodes[term.group];
    if (!ids?.length) throw Error(`Term has no related milestone: ${term.id}`);
    return [
      term.id,
      routeNodes.filter((node) => ids.includes(node.id)).map((node) => node.id),
    ];
  }),
);
export const resourcePathsByNode: Record<string, string[]> = {
  idea: ['start'],
  description: ['start', 'communicate'],
  tool: ['tools'],
  folder: ['tools', 'communicate'],
  'open-project': ['tools', 'communicate'],
  checkpoint: ['communicate'],
  clarify: ['start', 'communicate'],
  requirements: ['communicate'],
  prototype: ['stacks', 'components'],
  plan: ['communicate', 'check'],
  environment: ['stacks', 'communicate'],
  preview: ['components', 'data', 'check'],
  accept: ['check'],
  delivery: ['launch'],
  'release-review': ['check', 'launch'],
  package: ['launch'],
  'live-check': ['launch', 'check'],
  maintain: ['maintain'],
};
export const resourcesForNode = (id: string) =>
  (resourcePathsByNode[id] ?? []).map((path) =>
    resourceGuidance.find((r) => r.path === path)!,
  );
export const relatedNodesForTerm = (id: string) =>
  routeNodes.filter((n) => termNodeIds[id]?.includes(n.id));
