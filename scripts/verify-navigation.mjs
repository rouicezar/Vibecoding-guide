import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { journey } from '../src/data/journey.ts';
import { legacyLessons, phases } from '../src/data/learning.ts';
import {
  stepUrl,
  nodeForStep,
  nodePhases,
  routeNodes,
  nextMainStep,
  linearStepIds,
} from '../src/data/nodes.ts';
import { t } from '../src/data/site.ts';
import { blockers } from '../src/data/blockers.ts';
import { readTrail, withTrail, cleanPath } from '../src/scripts/navigation.ts';
const origin = 'http://127.0.0.1:4324';
assert.deepEqual(readTrail('bad'), []);
assert.deepEqual(
  readTrail(
    JSON.stringify([
      { path: 'https://evil.example', title: 'no' },
      { path: '//evil.example', title: 'no' },
    ]),
  ),
  [],
);
const trail = [
  { path: '/zh-cn/library/', title: '资料库' },
  { path: '/zh-cn/start/', title: '项目分类' },
];
const target = new URL(
  withTrail('/zh-cn/projects/web/', trail, origin),
  origin,
);
assert.deepEqual(readTrail(target.searchParams.get('via')), trail);
assert.equal(cleanPath(target), '/zh-cn/projects/web/');
const back = new URL(
  withTrail(trail.at(-1).path, trail.slice(0, -1), origin),
  origin,
);
assert.equal(back.pathname, '/zh-cn/start/');
assert.equal(
  readTrail(back.searchParams.get('via'))[0].path,
  '/zh-cn/library/',
);
assert.equal(readTrail(JSON.stringify(Array(30).fill(trail[0]))).length, 8);
for (const locale of ['zh-cn', 'en']) {
  const home = await readFile(`dist/${locale}/index.html`, 'utf8');
  const roadmap = await readFile(`dist/${locale}/roadmap/index.html`, 'utf8');
  assert(!roadmap.includes('roadmap-lanes'), '旧知识路线不应再展示');
  assert(!roadmap.includes('template-roadmap-'), '旧节点模板不应再展示');
  for (const phase of phases) {
    assert(home.includes(t(phase.title, locale)));
    assert(roadmap.includes(t(phase.title, locale)));
  }
  for (const s of journey) {
    const html = await readFile(
      `dist/${locale}/roadmap/${s.id}/index.html`,
      'utf8',
    );
    assert(
      html.includes(`content="0;url=${stepUrl(locale, legacyLessons[s.id])}`),
      `Old route must redirect: ${s.id}`,
    );
    const node = await readFile(
      `dist/${locale}/node/${nodeForStep(legacyLessons[s.id])}/index.html`,
      'utf8',
    );
    for (const b of blockers.filter((b) => b.stage === s.id))
      assert(
        node.includes(`blocker-${b.id}`),
        `Missing migrated blocker ${b.id}`,
      );
  }
  for (const node of routeNodes) {
    const html = await readFile(
      `dist/${locale}/node/${node.id}/index.html`,
      'utf8',
    );
    assert(
      /data-entry-back[^>]*href="[^"]*roadmap\//.test(html),
      'Node parent must be roadmap',
    );
  }
}
assert.deepEqual(
  nodePhases.map((p) => p.title),
  phases.map((p) => p.title),
);
assert.equal(
  nextMainStep(linearStepIds.slice(0, linearStepIds.indexOf('accept') + 1)),
  'delivery',
);
assert.equal(nextMainStep(linearStepIds), undefined);
console.log(
  'PASS: safe return navigation; unified bilingual phases; legacy routes redirect to current nodes; troubleshooting preserved; optional repairs excluded from resume.',
);
