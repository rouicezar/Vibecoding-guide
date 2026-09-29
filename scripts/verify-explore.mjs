import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import {
  report,
  ideas,
  research,
  repos,
  explorePaths,
  ideaPrompt,
} from '../src/data/explore/index.ts';
const original = await readFile(
  'public/research/report-original.html.txt',
  'utf8',
);
assert.equal(
  createHash('sha256').update(original).digest('hex'),
  report.sha256,
);
const normalize = (s) =>
  s
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<summary>[\s\S]*?<\/summary>/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/赚钱/g, '获得收益')
    .replace(/赚到钱/g, '获得收益')
    .replace(/\s+/g, '');
const originalSections = [
  ...original.matchAll(/<section id="(s\d+)">([\s\S]*?)<\/section>/g),
];
assert.equal(originalSections.length, 10);
assert.equal(report.chapters.length, 10);
let links = 0;
for (const [, id, html] of originalSections) {
  const c = report.chapters.find((c) => c.id === id);
  assert(c);
  assert.equal(
    normalize(c.html),
    normalize(html.replace(/<h2>[\s\S]*?<\/h2>/, '')),
    `Content lost: ${id}`,
  );
  const sourceLinks = [...html.matchAll(/href="([^"]+)"/g)].map((m) =>
    m[1].replaceAll('&amp;', '&'),
  );
  const copied = [...c.html.matchAll(/href="([^"]+)"/g)].map((m) =>
    m[1].replaceAll('&amp;', '&'),
  );
  assert.deepEqual(copied, sourceLinks, `Links lost: ${id}`);
  links += sourceLinks.length;
  assert(research.chapters.some((s) => s.id === id));
}
for (const [part, pattern] of [
  ['intro', /<header class="cover" id="top">([\s\S]*?)<\/header>/],
  ['footer', /<footer>([\s\S]*?)<\/footer>/],
])
  assert.equal(normalize(report[part]), normalize(original.match(pattern)[1]));
assert.equal(ideas.length, 50);
assert.equal(new Set(ideas.map((i) => i.id)).size, 50);
assert.equal(new Set(ideas.map((i) => i.group)).size, 10);
for (const i of ideas) {
  for (const key of [
    'title',
    'audience',
    'problem',
    'mvp',
    'exclude',
    'check',
    'revenue',
    'fit',
    'notFit',
    'repo',
    'first',
    'level',
  ])
    assert(i[key]?.trim(), `${i.id} missing ${key}`);
  assert(repos.some((r) => r.repo === i.repo));
  const prompt = ideaPrompt(i);
  assert(
    prompt.includes(i.mvp) &&
      prompt.includes(i.exclude) &&
      prompt.includes(i.check),
  );
  assert(prompt.includes('不要开始写代码'));
  assert.equal((prompt.match(/【/g) || []).length, 4);
}
assert.equal(repos.length, 19);
assert(
  repos.every((r) => r.url.startsWith('https://github.com/') && r.checked),
);
for (const locale of ['zh-cn', 'en'])
  for (const p of explorePaths) {
    const html = await readFile(`dist/${locale}/${p}/index.html`, 'utf8');
    assert(
      html.includes(
        locale === 'zh-cn'
          ? '有收益的可能，不等于一定有收益。'
          : 'Revenue is possible, never guaranteed.',
      ),
    );
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    for (const [, link] of html.matchAll(
      /(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g,
    ))
      await access(`dist${link}${link.endsWith('/') ? 'index.html' : ''}`);
  }
console.log(
  `PASS: original 10 chapters, cover and footer retained; ${links} source link occurrences preserved; 50 scoped ideas / 10 groups / 19 repositories; ${explorePaths.length * 2} research pages and revenue notices.`,
);
