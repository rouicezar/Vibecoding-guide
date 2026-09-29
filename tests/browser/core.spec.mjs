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

test('mobile home cards stay separate when text wraps', async ({ page }) => {
  for (const width of [320, 390, 430]) {
    await page.setViewportSize({ width, height: 900 });
    for (const locale of ['zh-cn', 'en']) {
      await page.goto(`${origin}/${locale}/`);
      const geometry = await page
        .locator('.home-journey')
        .evaluate((figure) => {
          const cards = [...figure.querySelectorAll('.journey-note')].map(
            (card) => {
              const r = card.getBoundingClientRect();
              return { top: r.top, bottom: r.bottom };
            },
          );
          return {
            gaps: cards.slice(1).map((r, i) => r.top - cards[i].bottom),
            contained:
              figure.getBoundingClientRect().bottom >= cards.at(-1).bottom,
            fits: document.documentElement.scrollWidth <= innerWidth,
          };
        });
      expect(geometry.gaps.every((gap) => gap >= 20)).toBe(true);
      expect(geometry.contained).toBe(true);
      expect(geometry.fits).toBe(true);
    }
  }
});
