import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { microActions } from '../src/data/micro-actions.ts';
import { stepSupport } from '../src/data/learning-support.ts';
import { lessons } from '../src/data/learning.ts';
import { routeNodes, linearStepIds } from '../src/data/nodes.ts';
import {
  mainProgress,
  nodeProgress,
  resumeStep,
  canComplete,
} from '../src/data/learning-progress.ts';
import {
  termNodeIds,
  resourcesForNode,
  groupNodes,
} from '../src/data/node-resources.ts';
import { glossary, termGroups } from '../src/data/glossary/index.ts';
assert.deepEqual(
  stepSupport.map((s) => s.id).sort(),
  lessons.map((l) => l.id).sort(),
);
assert.equal(glossary.length, 755);
let microCount = 0;
for (const s of stepSupport) {
  const rows = microActions[s.id];
  assert.equal(rows.length, s.steps.length, s.id);
  for (const row of rows) {
    microCount++;
    for (const field of ['action', 'expect', 'ifWrong'])
      assert(
        row[field].length === 2 && row[field].every((v) => v.trim().length > 5),
        `${row.id}/${field}`,
      );
  }
}
assert.deepEqual(
  Object.keys(microActions).sort(),
  lessons.map((l) => l.id).sort(),
);
for (const g of termGroups) assert(groupNodes[g.id]?.length, g.id);
for (const term of glossary) {
  assert(termNodeIds[term.id].length, term.id);
  for (const id of termNodeIds[term.id])
    assert(
      routeNodes.some((n) => n.id === id),
      `${term.id}/${id}`,
    );
}
for (const node of routeNodes) {
  assert(resourcesForNode(node.id).length, node.id);
  assert(resourcesForNode(node.id).every(Boolean));
}
const accepted = linearStepIds.slice(0, linearStepIds.indexOf('accept') + 1);
assert.equal(resumeStep({ completed: accepted }), 'delivery');
assert.equal(
  resumeStep({ completed: accepted, activeBranch: 'repair-plan' }),
  'repair-plan',
);
assert.equal(resumeStep({ completed: linearStepIds }), undefined);
assert.equal(
  resumeStep({ completed: accepted, activeBranch: 'bogus' }),
  'delivery',
);
assert.deepEqual(mainProgress([...linearStepIds, ...linearStepIds, 'repair']), {
  done: linearStepIds.length,
  total: linearStepIds.length,
});
assert.deepEqual(nodeProgress('package', ['publish']), { done: 0, total: 1 });
assert.deepEqual(nodeProgress('preview', ['preview', 'interface']), {
  done: 2,
  total: 4,
});
assert.deepEqual(nodeProgress('preview', ['preview']), { done: 1, total: 4 });
assert(canComplete('save', 'not-applicable'));
assert(!canComplete('accept', 'not-applicable'));
assert(!canComplete('preview', 'failed'));
assert(!canComplete('preview', 'not-tested'));
for (const locale of ['zh-cn', 'en']) {
  for (const node of routeNodes) {
    const html = await readFile(
      `dist/${locale}/node/${node.id}/index.html`,
      'utf8',
    );
    assert(html.includes('data-main-progress'));
    assert(html.includes('data-node-progress'));
    for (const id of node.stepIds) {
      assert(html.includes(`data-progress="${id}"`));
      assert(html.includes(`data-undo-complete="${id}"`));
      for (const row of microActions[id])
        assert(html.includes(`data-micro-action="${row.id}"`));
    }
  }
  const terms = await readFile(`dist/${locale}/terms/index.html`, 'utf8');
  assert(terms.includes('id="term-node"'));
  assert.equal((terms.match(/data-term-nodes=/g) || []).length, 755);
  const library = await readFile(`dist/${locale}/library/index.html`, 'utf8');
  assert.equal(
    (library.match(/data-library-node=/g) || []).length,
    routeNodes.length,
  );
}
console.log(
  `PASS: ${microCount} bilingual micro-operations; 755 term assignments; ${routeNodes.length} reference groups; resume, repair, completion and reversible progress invariants; rendered controls.`,
);
// Exercise the actual completion handler with storage failures; no browser profile is touched.
const ts = (await import('typescript')).default;
const source = (await readFile('src/scripts/learning.ts', 'utf8')).replace(
  /(['"])(\.\.\/data\/[^'"]+|\.\/project-storage\.ts)\1/g,
  (_, _quote, path) => {
    const target = path.startsWith('./')
      ? '../src/scripts/' + path.slice(2)
      : '../src/data/' + path.split('/').at(-1);
    return JSON.stringify(
      new URL(target.endsWith('.ts') ? target : target + '.ts', import.meta.url)
        .href,
    );
  },
);
const js = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { initLearning } = await import(
  'data:text/javascript;base64,' + Buffer.from(js).toString('base64')
);
const listeners = {};
let fail = true,
  prevented = false,
  events = 0;
const stored = new Map([
  [
    'vibe-guide-learning-v1',
    JSON.stringify({
      version: 1,
      idea: '',
      later: '',
      completed: [],
      current: 'folder',
    }),
  ],
]);
const message = { textContent: '' };
const complete = {
  dataset: { complete: 'folder' },
  addEventListener: (type, fn) => (listeners[type] = fn),
};
const root = {
  dataset: { locale: 'en' },
  querySelector: (selector) =>
    selector === '[data-learning-status]' ? message : null,
  querySelectorAll: (selector) =>
    selector === '[data-complete],[data-finish]' ? [complete] : [],
};
globalThis.document = { querySelector: () => root };
globalThis.location = { hash: '' };
globalThis.window = {
  addEventListener: () => {},
  dispatchEvent: () => {
    events++;
  },
  localStorage: {
    getItem: (key) => stored.get(key) ?? null,
    setItem: (key, value) => {
      if (fail) throw Error('quota');
      stored.set(key, value);
    },
  },
};
initLearning();
listeners.click({
  preventDefault: () => {
    prevented = true;
  },
});
assert(prevented, 'A failed progress save must not navigate away');
assert.deepEqual(
  JSON.parse(stored.get('vibe-guide-learning-v1')).completed,
  [],
);
assert(message.textContent.includes('Saving failed'));
assert.equal(events, 0);
fail = false;
prevented = false;
listeners.click({
  preventDefault: () => {
    prevented = true;
  },
});
assert(!prevented);
assert.deepEqual(JSON.parse(stored.get('vibe-guide-learning-v1')).completed, [
  'folder',
]);
assert.equal(events, 1);
console.log(
  'PASS: real completion handler blocks navigation on failed storage and persists progress after retry.',
);
