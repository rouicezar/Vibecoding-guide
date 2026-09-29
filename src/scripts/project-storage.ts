/** Each page writes only to the project it opened, even if another tab switches. */
const activeKey = 'vibe-guide-active-project';
const registryKey = 'vibe-guide-projects';
export function activeProject() {
  return window.localStorage.getItem(activeKey) || 'default';
}
export function createProjectStorage(projectId: string) {
  const keyFor = (key: string) =>
    projectId === 'default' ? key : `vibe-project:${projectId}:${key}`;
  return {
    getItem: (key: string) => window.localStorage.getItem(keyFor(key)),
    setItem: (key: string, value: string) =>
      window.localStorage.setItem(keyFor(key), value),
    removeItem: (key: string) => window.localStorage.removeItem(keyFor(key)),
  };
}
let pageId: string | undefined;
export function pageProject() {
  return (pageId ??= activeProject());
}
let pageStorage: ReturnType<typeof createProjectStorage> | undefined;
function pageProjectStorage() {
  return (pageStorage ??= createProjectStorage(pageProject()));
}
export const projectStorage = {
  getItem: (key: string) => pageProjectStorage().getItem(key),
  setItem: (key: string, value: string) =>
    pageProjectStorage().setItem(key, value),
  removeItem: (key: string) => pageProjectStorage().removeItem(key),
};
export function projectList(): { id: string; name: string }[] {
  const fallback = [{ id: 'default', name: '原有项目 / Original project' }];
  try {
    const list: unknown = JSON.parse(
      window.localStorage.getItem(registryKey) || '[]',
    );
    if (
      Array.isArray(list) &&
      list.every(
        (p) => p && typeof p.id === 'string' && typeof p.name === 'string',
      )
    ) {
      return [...fallback, ...list.filter((p) => p.id !== 'default')];
    }
  } catch {
    /* A corrupt registry is never overwritten by a read. */
  }
  return fallback;
}
/** Undo only this transaction's writes. Never touch unrelated project keys. */
function writeTransaction(entries: [string, string][]) {
  const storage = window.localStorage;
  const written: [string, string | null][] = [];
  try {
    for (const [key, value] of entries) {
      const previous = storage.getItem(key);
      storage.setItem(key, value);
      written.push([key, previous]);
    }
  } catch (error) {
    const rollbackErrors: unknown[] = [];
    for (const [key, previous] of written.reverse()) {
      try {
        if (previous === null) storage.removeItem(key);
        else storage.setItem(key, previous);
      } catch (rollbackError) {
        rollbackErrors.push(rollbackError);
      }
    }
    if (rollbackErrors.length)
      throw new AggregateError(
        [error, ...rollbackErrors],
        'Storage rollback failed',
        { cause: error },
      );
    throw error;
  }
}
export function createProject(name: string) {
  if (!name.trim()) throw Error('name');
  const id = crypto.randomUUID();
  writeTransaction([
    [
      registryKey,
      JSON.stringify([
        ...projectList().filter((p) => p.id !== 'default'),
        { id, name: name.trim() },
      ]),
    ],
    [activeKey, id],
  ]);
  return id;
}
export function switchProject(id: string) {
  if (!projectList().some((p) => p.id === id)) throw Error('project');
  window.localStorage.setItem(activeKey, id);
}
export function exportProject(id = pageProject()) {
  const prefix = id === 'default' ? '' : `vibe-project:${id}:`;
  const entries: Record<string, string> = {};
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i)!;
    if (prefix && !key.startsWith(prefix)) continue;
    const plain = prefix ? key.slice(prefix.length) : key;
    if (
      !plain.startsWith('vibe-') ||
      plain.startsWith('vibe-project:') ||
      [activeKey, registryKey].includes(plain)
    )
      continue;
    entries[plain] = window.localStorage.getItem(key)!;
  }
  return {
    format: 'vibe-project-backup',
    version: 1,
    name: projectList().find((p) => p.id === id)?.name,
    exportedAt: new Date().toISOString(),
    entries,
  };
}
export function validateBackup(value: unknown): {
  name: string;
  entries: Record<string, string>;
} {
  if (!value || typeof value !== 'object') throw Error('format');
  const b = value as Record<string, unknown>;
  if (
    b.format !== 'vibe-project-backup' ||
    b.version !== 1 ||
    !b.entries ||
    typeof b.entries !== 'object' ||
    Array.isArray(b.entries)
  )
    throw Error('format');
  const entries = Object.entries(b.entries);
  if (
    entries.length > 1500 ||
    entries.some(
      ([key, value]) =>
        !key.startsWith('vibe-') ||
        key.startsWith('vibe-project:') ||
        [activeKey, registryKey].includes(key) ||
        typeof value !== 'string' ||
        value.length > 2000000,
    )
  )
    throw Error('content');
  return {
    name: typeof b.name === 'string' ? b.name : '恢复的项目',
    entries: Object.fromEntries(entries) as Record<string, string>,
  };
}
export function restoreProject(value: unknown) {
  const b = validateBackup(value);
  const id = crypto.randomUUID();
  writeTransaction([
    ...Object.entries(b.entries).map(([key, value]): [string, string] => [
      `vibe-project:${id}:${key}`,
      value,
    ]),
    [
      registryKey,
      JSON.stringify([
        ...projectList().filter((p) => p.id !== 'default'),
        { id, name: `${b.name} · 恢复 / Restored` },
      ]),
    ],
    [activeKey, id],
  ]);
}
export function readConfirmed(
  id: string,
  lang = document.documentElement.lang,
  storage = projectStorage,
): string {
  try {
    const data = JSON.parse(
      storage.getItem(
        `vibe-template-v1:${lang.toLowerCase() === 'zh-cn' ? 'zh-CN' : lang}:${id}`,
      ) || 'null',
    );
    return typeof data?.confirmed === 'string' ? data.confirmed : '';
  } catch {
    return '';
  }
}

export function ideaFields(text: string): string[] {
  const lines = text.split(/\r?\n/);
  const values = ['', '', '', ''];
  let current = -1;
  for (const line of lines) {
    const label = line.split(/[:：]/)[0].trim();
    const index = /^(这个项目主要给谁使用|Who will use)/i.test(label)
      ? 0
      : /^(这个项目要帮他们解决什么问题|What problem|Problem to solve)/i.test(
            label,
          )
        ? 1
        : /^(项目做完后，怎样才算达到预期|How will you decide|How to test)/i.test(
              label,
            )
          ? 2
          : /^(是否计划第二阶段开发|Will there be a second|Second phase)/i.test(
                label,
              )
            ? 3
            : -1;
    if (index >= 0) {
      current = index;
      values[index] = line.replace(/^[^:：]+[:：]\s*/, '').trim();
    } else if (current >= 0 && line.trim())
      values[current] += '\n' + line.trim();
  }
  return values;
}
