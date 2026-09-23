import { defineConfig } from 'astro/config';
export default defineConfig({
  devToolbar: {enabled:false}, output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'zh-cn', locales: ['zh-cn', 'en'], routing: { prefixDefaultLocale: true } },
});
