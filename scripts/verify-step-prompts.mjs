import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import ts from 'typescript';
import { lessons } from '../src/data/learning.ts';
const source = await readFile('src/scripts/templates.ts', 'utf8');
const compiled = ts
  .transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext },
  })
  .outputText.replace(
    /(['"])\.\/project-storage\.ts\1/g,
    JSON.stringify(
      new URL('../src/scripts/project-storage.ts', import.meta.url).href,
    ),
  );
const { validateTemplate } = await import(
  'data:text/javascript;base64,' + Buffer.from(compiled).toString('base64')
);
assert.throws(() => validateTemplate(''));
assert.equal(
  validateTemplate(
    '【背景】已有项目\n用途：个人记录',
    '【背景】已有项目\n用途：【填写】',
  ),
  '【背景】已有项目\n用途：个人记录',
);
assert.throws(() =>
  validateTemplate(
    '【背景】已有项目\n用途：【填写】',
    '【背景】已有项目\n用途：【填写】',
  ),
);
assert.equal(
  validateTemplate(
    '[Background] Existing project\nPurpose: personal notes',
    '[Background] Existing project\nPurpose: [fill in]',
  ),
  '[Background] Existing project\nPurpose: personal notes',
);
for (const lesson of lessons) {
  if (lesson.id === 'idea') continue;
  assert(
    lesson.prompt?.length === 2,
    `${lesson.id}: missing bilingual template`,
  );
  for (const original of lesson.prompt) {
    assert(
      !original.includes('开始前先读取现有材料'),
      `${lesson.id}: unrelated shared suffix`,
    );
    const fields = original.match(/【[^】]*】|\[[^\]]*\]/g) || [];
    if (fields.length)
      assert.throws(
        () => validateTemplate(original, original),
        `${lesson.id}: untouched fields accepted`,
      );
    const filled = original.replace(/【[^】]*】|\[[^\]]*\]/g, '尚未确定');
    assert.equal(validateTemplate(filled, original), filled.trim());
  }
}
const prompt = (id) => lessons.find((l) => l.id === id).prompt[0];
assert(prompt('prototype').includes('docs/design.md'));
assert(prompt('choose-stack').includes('docs/design.md'));
assert(prompt('release-review').includes('docs/feedback.md'));
assert(lessons.find((l) => l.id === 'accept').templateKind === 'worksheet');
for (const id of ['flow', 'test'])
  assert(prompt(id).includes('不修') || prompt(id).includes('不修改代码'));
assert(prompt('save').includes('不适用'));
assert(
  source.replace(/\s/g, '').includes('state?.ideaConfirmed===state?.idea'),
  'Only confirmed unchanged ideas may be handed off',
);
assert(
  !(await readFile('src/scripts/learning.ts', 'utf8')).includes(
    'const code=root.querySelector',
  ),
);
assert(
  lessons
    .find((l) => l.id === 'repair')
    .choices.some((c) => c.id === 'release-review'),
);
console.log(
  'PASS: 31 step template coverage, bilingual field validation, scoped context, document handoffs and repair reassessment. Not an external AI execution test.',
);
