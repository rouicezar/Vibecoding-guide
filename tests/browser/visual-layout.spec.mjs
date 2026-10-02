import { test, expect } from '@playwright/test';
const origin = `http://127.0.0.1:${process.env.TEST_PORT || 4342}${process.env.TEST_BASE || ''}`;
for (const locale of ['zh-cn', 'en']) {
  test(`${locale}: route spacing and shared guidance labels`, async ({
    page,
  }) => {
    for (const width of [1440, 1024, 390, 320]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(`${origin}/${locale}/roadmap/`);
      const route = await page.evaluate(() => {
        const rows = [...document.querySelectorAll('.journey-row')];
        return {
          count: document.querySelectorAll('.journey-row a').length,
          fits: document.documentElement.scrollWidth <= innerWidth,
          gaps: rows
            .slice(1)
            .map(
              (r, i) =>
                r.getBoundingClientRect().top -
                Math.max(
                  ...[...rows[i].querySelectorAll('li')].map(
                    (l) => l.getBoundingClientRect().bottom,
                  ),
                ),
            ),
        };
      });
      expect(route.count).toBe(18);
      expect(route.fits).toBe(true);
      expect(route.gaps.every((g) => g >= 24)).toBe(true);
      await page.goto(`${origin}/${locale}/node/description/`);
      const support = page
        .locator('.step-extra')
        .filter({ has: page.locator('.micro-check') })
        .first();
      if (!(await support.getAttribute('open'))) {
        // A boolean open attribute has an empty value; use the DOM property.
        if (!(await support.evaluate((e) => e.open)))
          await support.locator(':scope > summary').click();
      }
      const labels = await page.locator('.micro-check dt').evaluateAll((es) =>
        es.map((e) => {
          const r = document.createRange();
          r.selectNodeContents(e);
          return new Set([...r.getClientRects()].map((x) => Math.round(x.top)))
            .size;
        }),
      );
      expect(labels.length).toBeGreaterThan(0);
      // Long English labels may wrap naturally on phones; do not force nowrap.
      if (width >= 1024 || locale === 'zh-cn')
        expect(labels.every((n) => n === 1)).toBe(true);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      await page.goto(`${origin}/${locale}/`);
      const gaps = await page.locator('.journey-note').evaluateAll((es) => {
        const r = es.map((e) => e.getBoundingClientRect());
        return r.slice(1).map((x, i) => x.top - r[i].bottom);
      });
      expect(gaps.every((g) => g >= 20)).toBe(true);
    }
  });
}
