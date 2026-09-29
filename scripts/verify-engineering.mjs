// Guard maintainability and supply-chain contracts that ordinary type checks miss.
import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = `${dir}/${entry.name}`;
    files.push(...(entry.isDirectory() ? await walk(path) : [path]));
  }
  return files;
}
for (const file of (await walk('src')).filter((p) => p.endsWith('.astro'))) {
  const text = await readFile(file, 'utf8');
  assert(
    (text.match(/<style(?:\s[^>]*)?>/g) || []).length <= 1,
    `${file}: consolidate component styles`,
  );
  assert(
    !/\bas any\b|@ts-ignore/.test(text),
    `${file}: narrow types instead of bypassing checks`,
  );
}
const pkg = JSON.parse(await readFile('package.json', 'utf8'));
const lock = JSON.parse(await readFile('package-lock.json', 'utf8'));
assert.equal(pkg.license, 'MIT');
assert.equal(lock.packages[''].license, pkg.license);
for (const [path, entry] of Object.entries(lock.packages)) {
  if (!path || !entry.resolved) continue;
  assert(
    entry.resolved.startsWith('https://registry.npmjs.org/'),
    `${path}: unexpected dependency registry`,
  );
  assert(entry.integrity, `${path}: missing integrity`);
}
const workflow = await readFile('.github/workflows/pages.yml', 'utf8');
for (const [, action] of workflow.matchAll(/uses:\s*(\S+)/g)) {
  assert(
    /@[a-f0-9]{40}$/.test(action),
    `Pin action to an immutable commit: ${action}`,
  );
}
assert(
  workflow.includes('npm run quality'),
  'CI must enforce local quality checks',
);
console.log(
  'PASS: component style/type contracts, license metadata, registry integrity and pinned Actions.',
);
