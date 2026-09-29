import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { microActions } from '../src/data/micro-actions.ts';
import { lessons } from '../src/data/learning.ts';
import { fileContracts } from '../src/data/learning-contracts.ts';
import { stepSupport } from '../src/data/learning-support.ts';
import { nodeForStep } from '../src/data/nodes.ts';
// A prerequisite needs an earlier producer; this catches missing teaching handoffs.
const produced = new Map();
for (const lesson of lessons) {
  const contract = fileContracts[lesson.id];
  assert(stepSupport.some((s) => s.id === lesson.id));
  if (!contract) continue;
  for (const path of contract.reads) {
    assert(
      produced.has(path),
      `${lesson.id} requires ${path} before it is produced`,
    );
    if (lesson.templateKind !== 'worksheet')
      for (const prompt of lesson.prompt ?? [])
        assert(prompt.includes(path), `${lesson.id} omits ${path}`);
  }
  for (const path of contract.writes) produced.set(path, lesson.id);
  for (const prompt of lesson.prompt ?? [])
    assert(
      !/;ep 6|\.s only|\.tallation|\.ages planning|\. to packaging|step\.\;/.test(
        prompt,
      ),
      `${lesson.id}: broken migrated wording`,
    );
}
// This optional planning branch is reachable from delivery before release-review.
assert(
  !fileContracts.publish.reads.includes('docs/release.md'),
  'Early suitability planning must not require a later release record',
);
const evidence = microActions;
for (const id of [
  'flow',
  'test',
  'restart',
  'delivery',
  'package',
  'live-check',
  'maintain',
]) {
  assert(
    evidence[id]?.length > 0,
    `${id}: missing reviewed follow-along actions`,
  );
  for (const lang of [0, 1]) {
    const html = await readFile(
      `dist/${lang ? 'en' : 'zh-cn'}/node/${nodeForStep(id)}/index.html`,
      'utf8',
    );
    for (const row of evidence[id])
      for (const key of ['action', 'expect', 'ifWrong'])
        assert(html.includes(row[key][lang]), `${id}: ${key} not rendered`);
  }
}
for (const id of ['tool', 'open-project', 'first-file'])
  for (const locale of ['zh-cn', 'en']) {
    const html = await readFile(
      `dist/${locale}/node/${nodeForStep(id)}/index.html`,
      'utf8',
    );
    assert(html.includes('codex-official-workspace.webp'));
    assert(
      !html.includes('src="/images/guide/codex-location-map.png"'),
      'Do not present the former generated map as the actual entry',
    );
  }
console.log(
  `PASS: ${lessons.length} prerequisite/producer handoffs, early delivery branch, 7 expanded teaching sections in both languages and official screenshot placements. This does not claim real learner acceptance.`,
);
