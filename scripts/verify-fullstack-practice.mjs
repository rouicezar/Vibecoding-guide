import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { lessons } from '../src/data/learning.ts';
import { nodeForStep } from '../src/data/nodes.ts';
const rows = JSON.parse(
  await readFile('src/data/fullstack-practice.json', 'utf8'),
);
assert.deepEqual(
  rows.map((r) => r.id).sort(),
  lessons.map((l) => l.id).sort(),
  'Practice must cover each current action exactly once',
);
for (const lesson of lessons) {
  const row = rows.find((r) => r.id === lesson.id);
  assert(row, lesson.id);
  for (const key of ['action', 'expected', 'recovery', 'instruction'])
    assert(
      row[key]?.length === 2 &&
        row[key].every((s) => typeof s === 'string' && s.trim().length > 0),
      `${lesson.id} ${key}`,
    );
  for (const issue of row.issues)
    for (const key of ['title', 'check', 'action', 'expected'])
      assert(
        issue[key].length === 2 && issue[key].every((s) => s.trim()),
        `${lesson.id} issue ${key}`,
      );
  for (const locale of ['zh-cn', 'en']) {
    const html = await readFile(
      `dist/${locale}/node/${nodeForStep(lesson.id)}/index.html`,
      'utf8',
    );
    assert(html.includes(`data-fullstack-step="${lesson.id}"`));
    assert(html.includes(`data-fullstack-prompt="${lesson.id}"`));
  }
}
const row = (id) => rows.find((r) => r.id === id);
for (const token of [
  'SQLite',
  'GET /api/entries',
  'POST /api/entries',
  '参数化',
  '事务提交',
  'HTTP',
  '第二浏览器',
])
  assert(row('save').instruction[0].includes(token), token);
assert(row('restart').instruction[0].includes('不得重置'));
assert(row('maintain').instruction[0].includes('绝不覆盖原库'));
assert(row('publish').instruction[0].includes('不能用纯 Pages'));
assert(
  lessons
    .find((l) => l.id === 'prototype')
    .prompt[0].includes('docs/stories.md 的用户故事'),
);
const component = await readFile('src/components/NodeStep.astro', 'utf8');
assert(
  component.includes("lesson.templateKind !== 'worksheet'"),
  'Worksheets must not become fabricated AI results',
);
for (const asset of ['journal-saved-example', 'journal-service-stopped'])
  assert((await readFile(`public/images/guide/${asset}.png`)).length > 1000);
console.log(
  `PASS: ${lessons.length} bilingual full-stack supplements, rendered guidance and prompt selection; separate stories handoff; backend persistence and non-destructive recovery criteria; 3 image assets. This is content validation, not a learner completion claim.`,
);

assert(
  (await readFile('public/images/guide/codex-official-workspace.webp')).length >
    1000,
);
