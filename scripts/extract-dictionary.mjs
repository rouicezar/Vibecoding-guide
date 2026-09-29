import { readFile, writeFile } from 'node:fs/promises';
import vm from 'node:vm';
import assert from 'node:assert/strict';
const source = await readFile('vibe-ui-dictionary/index.html', 'utf8');
const part = source.slice(
  source.indexOf('  const CATS ='),
  source.indexOf('  const $ ='),
);
const data = vm.runInNewContext(
  part + ';({categories:CATS.filter(c=>c[0]!=="all"),entries:CATALOG})',
  {},
  { timeout: 1000 },
);
assert.equal(data.entries.length, 212);
assert.equal(data.categories.length, 25);
assert.equal(new Set(data.entries.map((e) => e.id)).size, 212);
for (const entry of data.entries)
  for (const key of [
    'id',
    'category',
    'zh',
    'en',
    'aliases',
    'when',
    'prompt',
    'promptZh',
    'demo',
  ])
    assert(entry[key], `${entry.id}: ${key}`);
if (process.argv.includes('--check'))
  assert.deepEqual(
    JSON.parse(await readFile('src/data/dictionary.json', 'utf8')),
    JSON.parse(JSON.stringify(data)),
  );
else
  await writeFile(
    'src/data/dictionary.json',
    JSON.stringify(data, null, 2) + '\n',
  );
console.log(
  'PASS: 212 entries, 25 categories, all source fields preserved' +
    (process.argv.includes('--check') ? ' and compared' : '') +
    '.',
);
