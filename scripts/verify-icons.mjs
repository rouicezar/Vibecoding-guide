import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { icons } from '../src/data/icons.ts';

const manifest = JSON.parse(
  readFileSync('vendor/ant-design-icons/sources.json', 'utf8'),
);
assert.match(
  readFileSync('vendor/ant-design-icons/LICENSE', 'utf8'),
  /Ant UED/,
);
for (const glyph of Object.values(icons)) {
  assert(manifest.assets[glyph.source], `Missing provenance: ${glyph.source}`);
  assert(glyph.paths.length > 0);
  assert(
    glyph.paths.every((d) => /^[\d\s.,a-z+\-]+$/i.test(d)),
    'SVG paths must contain geometry only',
  );
}
const htmlFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory()
      ? htmlFiles(join(dir, e.name))
      : e.name.endsWith('.html')
        ? [join(dir, e.name)]
        : [],
  );
let count = 0;
for (const file of htmlFiles('dist')) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(
    /<svg\b([^>]*data-icon="([^"]+)"[^>]*)>([\s\S]*?)<\/svg>/g,
  )) {
    assert(icons[match[2]], `${file}: unknown icon ${match[2]}`);
    assert.match(match[1], /aria-hidden="true"/);
    assert.match(match[1], /fill="currentColor"/);
    assert.match(match[3], /<path\b[^>]*d="/);
    assert(
      !/\b(?:href|src)\s*=|<(?:use|image|script|foreignObject)\b/i.test(
        match[0],
      ),
      `${file}: icon must be inline geometry`,
    );
    count++;
  }
}
assert(count > 0, 'No inline icons found');
console.log(
  `PASS: ${Object.keys(icons).length} semantic icons have provenance; ${count} rendered SVGs use local inline geometry, inherited color and decorative accessibility.`,
);
