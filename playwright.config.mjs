import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests/browser',
  timeout: 45000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { trace: 'retain-on-failure', screenshot: 'only-on-failure' },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    {
      name: 'mobile',
      use: {
        ...devices['iPhone 13'],
        defaultBrowserType: 'chromium',
        browserName: 'chromium',
      },
    },
  ],
  webServer: {
    command: 'node scripts/serve-tests.mjs',
    url: `http://127.0.0.1:${process.env.TEST_PORT || 4342}${process.env.TEST_BASE || ''}/zh-cn/`,
    reuseExistingServer: !process.env.CI,
  },
});
