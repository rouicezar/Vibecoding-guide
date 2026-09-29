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

test('milestone header and resource grid remain usable', async ({ page }) => {
  await page.goto(origin + '/zh-cn/node/description/');
  await expect(page.locator('.node-head h1')).toHaveCount(1);
  await expect(page.locator('.node-meta > div')).toHaveCount(1);
  await expect(page.locator('.node-action-index')).toHaveCount(0);
  await page.locator('.node-why > summary').click();
  await expect(page.locator('.node-why')).toHaveAttribute('open', '');
  await page.goto(origin + '/en/node/checkpoint/');
  await expect(page.locator('.node-action-index a')).toHaveCount(2);
  await page.locator('.node-action-index a').nth(1).click();
  await expect(page.locator('#first-file')).toHaveAttribute('open', '');
  await page.goto(origin + '/en/library/?node=tool');
  await expect(page.locator('[data-library-node="tool"]')).toHaveAttribute(
    'open',
    '',
  );
  await page.locator('[data-library-node="tool"] > summary').click();
  await expect(page.locator('[data-library-node="tool"]')).not.toHaveAttribute(
    'open',
    '',
  );
  const layout = await page.evaluate(() => {
    const grid = document.querySelector('.library-node-grid');
    const containerWidth = document.querySelector(
      '.library-node-index',
    ).clientWidth;
    return {
      expected: containerWidth >= 900 ? 3 : containerWidth >= 580 ? 2 : 1,
      actual: getComputedStyle(grid).gridTemplateColumns.split(' ').length,
      fits: document.documentElement.scrollWidth <= innerWidth,
    };
  });
  expect(layout.actual).toBe(layout.expected);
  expect(layout.fits).toBe(true);
});
