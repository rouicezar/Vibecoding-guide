import assert from 'node:assert/strict';
import {
  createProjectStorage,
  projectStorage,
  pageProject,
  createProject,
  exportProject,
  restoreProject,
} from '../src/scripts/project-storage.ts';
const values = new Map();
let failAt = 0;
let writes = 0;
globalThis.window = {
  localStorage: {
    getItem: (key) => values.get(key) ?? null,
    setItem(key, value) {
      if (++writes === failAt) throw new Error('Simulated quota failure');
      values.set(key, String(value));
    },
    removeItem: (key) => values.delete(key),
    key: (index) => [...values.keys()][index] ?? null,
    get length() {
      return values.size;
    },
  },
};
const a = createProject('A');
projectStorage.setItem('vibe-note', 'A original');
const b = createProject('B'); // Another tab changes the globally selected project.
createProjectStorage(b).setItem('vibe-note', 'B original');
projectStorage.setItem('vibe-note', 'A edited in old tab');
assert.equal(pageProject(), a);
assert.equal(
  createProjectStorage(a).getItem('vibe-note'),
  'A edited in old tab',
);
assert.equal(createProjectStorage(b).getItem('vibe-note'), 'B original');
assert.equal(exportProject().name, 'A');
assert.equal(exportProject().entries['vibe-note'], 'A edited in old tab');
const backup = {
  format: 'vibe-project-backup',
  version: 1,
  name: 'Backup',
  entries: { 'vibe-one': 'first', 'vibe-two': 'second' },
};
for (const operation of [
  () => restoreProject(backup),
  () => createProject('New'),
]) {
  const count = operation.toString().includes('restore') ? 4 : 2;
  for (let position = 1; position <= count; position++) {
    const before = new Map(values);
    writes = 0;
    failAt = position;
    assert.throws(operation, /quota/);
    assert.deepEqual(
      values,
      before,
      `Failed write ${position} must leave all prior keys unchanged`,
    );
  }
}
failAt = 0;
restoreProject(backup);
assert.deepEqual(
  exportProject(window.localStorage.getItem('vibe-guide-active-project'))
    .entries,
  backup.entries,
);
console.log(
  'PASS: old-tab writes and exports remain in original project; restore/create failures at every write roll back exactly.',
);
