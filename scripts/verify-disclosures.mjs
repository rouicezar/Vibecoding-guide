import assert from 'node:assert/strict';
import {
  captureDisclosures,
  restoreDisclosures,
} from '../src/scripts/disclosures.ts';
const detail = (id, open) => ({ id, open, dataset: {}, parentElement: null });
const a = detail('idea', false),
  b = detail('description', true);
const saved = captureDisclosures([a, b]);
a.open = true;
b.open = false;
const inserted = detail('new', true);
restoreDisclosures([inserted, b, a], saved);
assert.equal(a.open, false);
assert.equal(b.open, true);
assert.equal(inserted.open, true);
restoreDisclosures([a, b], [0, 1]);
assert.equal(a.open, false);
restoreDisclosures([a, b], { idea: 'true' });
assert.equal(a.open, false);
console.log(
  'PASS: restore open and closed states by stable key; inserted disclosures keep defaults; malformed/legacy states ignored.',
);
