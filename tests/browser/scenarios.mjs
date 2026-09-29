// Shared browser scenarios: passed CUA tabs locally, Playwright page adapters in CI.
import assert from 'node:assert/strict';
async function reload(tab) {
  await tab.playwright.expectNavigation(() => tab.reload(), {
    waitUntil: 'load',
  });
}

export async function openPanel(tab, selector) {
  const panel = tab.playwright.locator(selector);
  if ((await panel.getAttribute('open')) === null)
    await tab.playwright.locator(selector + ' > summary').click();
  await tab.playwright
    .locator(selector + '[open]')
    .waitFor({ state: 'attached' });
}
export async function disclosureScenario(tab, origin) {
  await tab.goto(origin + '/zh-cn/node/description/');
  await tab.playwright
    .locator('#description > summary')
    .waitFor({ state: 'visible' });
  await openPanel(tab, '#description');
  await openPanel(tab, '#description [data-step-section="actions"]');
  await tab.playwright
    .locator('#description [data-step-section="actions"] > summary')
    .click();
  await tab.playwright
    .locator('#description [data-step-section="actions"]:not([open])')
    .waitFor({ state: 'attached' });
  await reload(tab);
  await tab.playwright.waitForLoadState({ state: 'load' });
  await tab.playwright.waitForLoadState({ state: 'load' });
  await tab.playwright
    .locator('#description [data-step-section="actions"]:not([open])')
    .waitFor({ state: 'attached' });
  assert.equal(
    await tab.playwright
      .locator('#description [data-step-section="actions"]')
      .getAttribute('open'),
    null,
    'Closed section survives reload',
  );
  await openPanel(tab, '#description [data-step-section="actions"]');
  await openPanel(tab, '[data-guided-action="description-2"]');
  await reload(tab);
  await tab.playwright.waitForLoadState({ state: 'load' });
  await tab.playwright.waitForLoadState({ state: 'load' });
  await tab.playwright
    .locator('[data-guided-action="description-2"][open]')
    .waitFor({ state: 'attached' });
  assert.notEqual(
    await tab.playwright
      .locator('[data-guided-action="description-2"]')
      .getAttribute('open'),
    null,
    'Opened child survives reload',
  );
  await tab.playwright.locator('#description > summary').click();
  await tab.playwright
    .locator('#description:not([open])')
    .waitFor({ state: 'attached' });
  await reload(tab);
  await tab.playwright.waitForLoadState({ state: 'load' });
  await tab.playwright.waitForLoadState({ state: 'load' });
  await tab.playwright
    .locator('#description:not([open])')
    .waitFor({ state: 'attached' });
  assert.equal(
    await tab.playwright.locator('#description').getAttribute('open'),
    null,
    'Closed outer step survives initial learning selection',
  );
  await tab.goto(origin + '/zh-cn/node/description/#description');
  await tab.playwright
    .locator('#description[open]')
    .waitFor({ state: 'attached' });
  assert.notEqual(
    await tab.playwright.locator('#description').getAttribute('open'),
    null,
    'Explicit hash opens its target',
  );
  return 'PASS disclosure reload: closed section, opened child, closed outer step and hash priority';
}
async function create(tab, name) {
  await openPanel(tab, '[data-project-panel]');
  await tab.playwright.locator('[data-project-name]').fill(name);
  await tab.playwright.expectNavigation(
    () => tab.playwright.locator('[data-project-new]').click(),
    { waitUntil: 'load' },
  );
  await tab.playwright
    .locator('[data-project-select] option')
    .filter({ hasText: name })
    .waitFor({ state: 'attached' });
}
export async function projectScenario(a, b, origin) {
  await a.goto(origin + '/zh-cn/node/idea/');
  const stamp = Date.now();
  const first = `Audit A ${stamp}`,
    second = `Audit B ${stamp}`;
  await create(a, first);
  await openPanel(a, '#idea');
  await openPanel(a, '#idea [data-step-section="material"]');
  await a.playwright.locator('[name="idea"]').fill('这是项目 A 的资料');
  await b.goto(origin + '/zh-cn/node/idea/');
  await create(b, second);
  await openPanel(b, '#idea');
  await openPanel(b, '#idea [data-step-section="material"]');
  await b.playwright.locator('[name="idea"]').fill('这是项目 B 的资料');
  await a.playwright.locator('[name="idea"]').fill('A 在旧标签页继续编辑');
  await reload(b);
  await b.playwright.waitForLoadState({ state: 'load' });
  await openPanel(b, '#idea');
  await openPanel(b, '#idea [data-step-section="material"]');
  assert.equal(
    await b.playwright.evaluate(
      () => document.querySelector('[name="idea"]').value,
    ),
    '这是项目 B 的资料',
    'B must keep its data',
  );
  await openPanel(b, '[data-project-panel]');
  await b.playwright
    .locator('[data-project-select]')
    .selectOption({ label: first });
  await b.playwright.expectNavigation(
    () => b.playwright.locator('[data-project-switch]').click(),
    { waitUntil: 'load' },
  );
  await b.playwright
    .locator('[data-project-select]')
    .waitFor({ state: 'attached' });
  await openPanel(b, '#idea');
  await openPanel(b, '#idea [data-step-section="material"]');
  assert.equal(
    await b.playwright.evaluate(
      () => document.querySelector('[name="idea"]').value,
    ),
    'A 在旧标签页继续编辑',
    'A edit belongs to A',
  );
  return 'PASS two tabs: A edits cannot overwrite B, and reopening A restores its own edit';
}
export async function templateScenario(tab, origin) {
  await tab.goto(origin + '/zh-cn/node/description/#description');
  await openPanel(tab, '#description [data-step-section="material"]');
  const editor = tab.playwright.locator(
    '[data-template-editor="learn-description"]',
  );
  await editor.fill('一个可复制的项目描述。');
  await tab.playwright
    .locator('#template-learn-description [data-confirm-template]')
    .click();
  assert.equal(
    await tab.playwright
      .locator('#template-learn-description [data-copy-template]')
      .isEnabled(),
    true,
  );
  await editor.fill('修改后的项目描述。');
  assert.equal(
    await tab.playwright
      .locator('#template-learn-description [data-copy-template]')
      .isEnabled(),
    false,
    'Editing invalidates confirmation',
  );
  await reload(tab);
  await tab.playwright.waitForLoadState({ state: 'load' });
  await openPanel(tab, '#description [data-step-section="material"]');
  assert.equal(
    await tab.playwright.evaluate(
      () =>
        document.querySelector('[data-template-editor="learn-description"]')
          .value,
    ),
    '修改后的项目描述。',
    'Draft survives reload',
  );
  await tab.playwright
    .locator('.languages a')
    .filter({ hasText: 'EN' })
    .click();
  await tab.playwright
    .locator('html[lang="en"]')
    .waitFor({ state: 'attached' });
  assert.equal(
    await tab.playwright.locator('#description').getAttribute('open'),
    '',
  );
  return 'PASS template confirmation invalidation, persistence and language navigation';
}
export async function styleScenario(tab, origin) {
  await tab.goto(origin + '/zh-cn/node/idea/#idea');
  await openPanel(tab, '#idea [data-step-section="material"]');
  const result = await tab.playwright.evaluate(() => {
    const editor = document.querySelector('[name="idea"]');
    const button = document.querySelector('[data-confirm-idea]');
    return {
      gap:
        button.getBoundingClientRect().top -
        editor.getBoundingClientRect().bottom,
      color: getComputedStyle(button).color,
      overflow: document.documentElement.scrollWidth > innerWidth,
    };
  });
  assert(result.gap >= 16, 'Editor and action need spacing');
  assert.equal(result.color, 'rgb(255, 255, 255)');
  assert.equal(result.overflow, false);
  await tab.playwright.locator('[data-confirm-idea]').click();
  assert.equal(
    await tab.playwright
      .locator('[name="idea"]')
      .evaluate((e) => getComputedStyle(e).outlineStyle),
    'none',
  );
  return 'PASS action color, editor spacing, focus appearance and no horizontal overflow';
}

export async function restoreScenario(tab, origin) {
  await tab.goto(origin + '/zh-cn/node/idea/');
  await openPanel(tab, '[data-project-panel]');
  await openPanel(tab, '[data-project-panel] details');
  const snapshot = await tab.playwright
    .locator('[data-project-select] option:checked')
    .textContent();
  await tab.playwright.locator('[data-project-backup]').fill('{incomplete');
  await tab.playwright.locator('[data-project-restore-text]').click();
  assert(
    (
      await tab.playwright.locator('[data-project-status]').innerText()
    ).includes('无法保存或读取材料'),
  );
  assert.equal(
    await tab.playwright
      .locator('[data-project-select] option:checked')
      .textContent(),
    snapshot,
  );
  const text = '这是备份里恢复出的想法';
  const backup = {
    format: 'vibe-project-backup',
    version: 1,
    name: 'Browser restore',
    entries: {
      'vibe-guide-learning-v1': JSON.stringify({
        version: 1,
        idea: text,
        later: '',
        completed: [],
        current: 'idea',
      }),
    },
  };
  await tab.playwright
    .locator('[data-project-backup]')
    .fill(JSON.stringify(backup));
  await tab.playwright.expectNavigation(
    () => tab.playwright.locator('[data-project-restore-text]').click(),
    { waitUntil: 'load' },
  );
  await openPanel(tab, '#idea');
  await openPanel(tab, '#idea [data-step-section="material"]');
  assert.equal(
    await tab.playwright.evaluate(
      () => document.querySelector('[name="idea"]').value,
    ),
    text,
  );
  assert(
    (
      await tab.playwright
        .locator('[data-project-select] option:checked')
        .textContent()
    ).includes('Browser restore'),
  );
  return 'PASS backup UI: malformed input preserves current project; valid input restores into a new project';
}
