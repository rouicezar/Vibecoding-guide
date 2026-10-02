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
  // 页头两格：做完得到什么 / 这个节点要做多少事（含实际操作量）。
  await expect(page.locator('.node-meta > div')).toHaveCount(2);
  await expect(page.locator('.node-meta')).toContainText('这个节点要做多少事');
  await expect(page.locator('.node-meta')).toContainText('次亲手操作');
  await expect(page.locator('.node-action-index')).toHaveCount(0);
  // 单步节点不出现动作直达，也不出现主线进度分母不一致的情况。
  await expect(page.locator('.node-start-here')).toHaveCount(1);
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

/* 本轮修复的运行时行为：起点定位、跳步纠正、不适用不计入已核对。 */
const seed = (page, completed, checks) =>
  page.addInitScript(
    ([c, k]) =>
      localStorage.setItem(
        'vibe-guide-learning-v1',
        JSON.stringify({
          version: 1,
          idea: 'x',
          later: '',
          completed: c,
          current: 'idea',
          ...(k ? { checks: k } : {}),
        }),
      ),
    [completed, checks],
  );

test('node page points to the first unchecked action', async ({ page }) => {
  await seed(page, ['idea', 'description'], null);
  // tool 节点只有 tool 一步，尚未核对 → 应直接指向本节点的第一步。
  await page.goto(`${origin}/zh-cn/node/tool/`);
  const start = page.locator('[data-start-here]');
  await expect(start).toContainText('从这里开始');
  await expect(start).toContainText('打开一个能制作文件的 AI 工具');
  await expect(start.locator('a')).toHaveAttribute(
    'href',
    `${process.env.TEST_BASE || ''}/zh-cn/node/tool/#tool`,
  );
  // 本节点已完成时改为指向路线图，而不是留空。
  await seed(page, ['idea', 'description', 'tool'], null);
  await page.goto(`${origin}/zh-cn/node/tool/`);
  await expect(page.locator('[data-start-here]')).toContainText('已全部核对');
});

test('jumping ahead is corrected to the real next action', async ({ page }) => {
  await seed(page, [], null);
  // 侧栏 18 个节点全部可点；直接进最后一个节点时必须说明真正该做哪一步。
  await page.goto(`${origin}/zh-cn/node/maintain/`);
  const start = page.locator('[data-start-here]');
  await expect(start).toContainText('还没有核对完这个节点之前的动作');
  await expect(start).toContainText('先记下自己的想法');
  await expect(start.locator('.start-out-of-turn a')).toHaveAttribute(
    'href',
    /node\/idea\/#idea/,
  );
});

test('not-applicable is not counted as checked', async ({ page }) => {
  await seed(page, ['preview', 'interface', 'save'], {
    // parseLearning 要求核对记录四个字段齐全，缺一整份状态会被判为损坏。
    preview: { verdict: 'passed', version: 'a', date: 'd', note: 'n' },
    interface: {
      verdict: 'not-applicable',
      version: 'a',
      date: 'd',
      note: '静态页面，无需账号',
    },
    save: {
      verdict: 'not-applicable',
      version: 'a',
      date: 'd',
      note: '静态页面，不存数据',
    },
  });
  await page.goto(`${origin}/zh-cn/node/preview/`);
  // preview 节点 4 步：1 步已核对通过、2 步不适用、1 步未做。
  // 侧栏也有同名标记，限定在节点页进度块内取。
  await expect(
    page.locator('.node-progress-summary [data-node-progress="preview"]'),
  ).toHaveText('1/4（2 项不适用）');
  await expect(page.locator('[data-progress="interface"]')).toHaveText(
    '不适用',
  );
  await expect(page.locator('[data-progress="preview"]')).toHaveText(
    '已核对 ✓',
  );
  await expect(page.locator('[data-progress="save"]')).toHaveText('不适用');
});

test('repair keeps the milestone it was entered from', async ({ page }) => {
  for (const node of ['release-review', 'package', 'live-check']) {
    await seed(page, [], null);
    await page.goto(`${origin}/zh-cn/node/${node}/`);
    // 流程内的修复入口必须留在本节点。
    await expect(
      page.locator(`[data-follow-step="feedback"]`).first(),
    ).toHaveAttribute(
      'href',
      `${process.env.TEST_BASE || ''}/zh-cn/node/${node}/#feedback`,
    );
    // 修完能回到本节点，而不是被送到 accept。
    await expect(page.locator('.step-return').first()).toHaveAttribute(
      'href',
      `${process.env.TEST_BASE || ''}/zh-cn/node/${node}/`,
    );
  }
});

test('optional steps stay out of the main sequence', async ({ page }) => {
  await page.goto(`${origin}/zh-cn/node/package/`);
  await expect(page.locator('.node-progress-summary')).toContainText('0/1');
  await expect(page.locator('.node-start-title')).toContainText('共 1 个步骤');
  await expect(page.locator('.node-optional')).toContainText(
    '符合条件才做的可选步骤',
  );
});
