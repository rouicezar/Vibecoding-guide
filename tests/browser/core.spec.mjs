import { test, expect } from '@playwright/test';
import {
  disclosureScenario,
  projectScenario,
  templateScenario,
  styleScenario,
  restoreScenario,
} from './scenarios.mjs';
const adapter = (page) => ({
  playwright: new Proxy(page, {
    get(target, key) {
      if (key === 'waitForLoadState')
        return (options) => page.waitForLoadState(options.state);
      if (key === 'expectNavigation')
        return async (action) => {
          await Promise.all([page.waitForEvent('load'), action()]);
        };
      const value = Reflect.get(target, key);
      return typeof value === 'function' ? value.bind(target) : value;
    },
  }),
  goto: (url) => page.goto(url),
  reload: () => page.reload(),
});
const origin = `http://127.0.0.1:${process.env.TEST_PORT || 4342}${process.env.TEST_BASE || ''}`;
test('disclosure state and hash navigation', async ({ page }) => {
  await disclosureScenario(adapter(page), origin);
});
test('two tabs keep project ownership', async ({ page, context }) => {
  const second = await context.newPage();
  await projectScenario(adapter(page), adapter(second), origin);
});
test('confirm, edit, reload, switch language', async ({ page }) => {
  await templateScenario(adapter(page), origin);
});
test('existing visual contracts', async ({ page }) => {
  await styleScenario(adapter(page), origin);
});
test('search loads the built index', async ({ page }) => {
  await page.goto(origin + '/zh-cn/');
  await page.locator('[data-open="search-dialog"]').click();
  await page.locator('#search-input').fill('Git');
  await expect(page.locator('#full-search-results a').first()).toBeVisible();
});

test('backup validation and recovery', async ({ page }) => {
  await restoreScenario(adapter(page), origin);
});
