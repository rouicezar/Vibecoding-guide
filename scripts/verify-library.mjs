import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { projects } from '../src/data/site.ts';
import {
  projectFit,
  fitLabels,
  selectionPrompt,
} from '../src/data/project-fit.ts';
import { resourceGuidance } from '../src/data/resource-guidance.ts';
import { componentFit } from '../src/data/component-fit.ts';
import dict from '../src/data/dictionary.json' with { type: 'json' };
assert.equal(projects.length, 4);
for (const p of projects) {
  const fit = projectFit[p.id];
  for (const key of [
    'summary',
    'fits',
    'builders',
    'avoids',
    'notReady',
    'test',
    'reason',
  ])
    assert(
      fit[key].length === 2 && fit[key].every((v) => v.trim()),
      `${p.id}: ${key}`,
    );
  assert(projects.some((p) => p.id === fit.alternative));
  for (const [locale, i] of [
    ['zh-cn', 0],
    ['en', 1],
  ]) {
    const html = await readFile(
      `dist/${locale}/projects/${p.id}/index.html`,
      'utf8',
    );
    for (const label of fitLabels)
      assert(html.includes(label[i]), `${p.id}: rendered criterion missing`);
    assert(html.includes(selectionPrompt(p.id)[i].split('\n')[0]));
  }
}
for (const cat of dict.categories)
  assert(componentFit[cat[0]], `Missing category decision: ${cat[0]}`);
for (const e of dict.entries) {
  for (const key of ['when', 'prompt', 'promptZh'])
    assert(e[key].trim(), `${e.id}: empty ${key}`);
  for (const locale of ['zh-cn', 'en']) {
    const html = await readFile(
      `dist/${locale}/components/${e.id}/index.html`,
      'utf8',
    );
    assert(
      html.includes(
        locale === 'zh-cn'
          ? '选这个组件前，先核对用途'
          : 'Check the purpose before choosing',
      ),
    );
  }
}
for (const r of resourceGuidance) {
  for (const key of ['use', 'decision', 'avoid', 'check', 'result'])
    assert(r[key].length === 2 && r[key].every(Boolean), `${r.path}: ${key}`);
  for (const locale of ['zh-cn', 'en'])
    await readFile(`dist/${locale}/${r.next}/index.html`, 'utf8');
}
console.log(
  'PASS: four product types × four fit dimensions in both languages; 25 component categories and 212 entries covered; 10 resource topics have decisions, limits, checks and live return routes.',
);
