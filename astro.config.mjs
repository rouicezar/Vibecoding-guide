import { defineConfig } from 'astro/config';
export default defineConfig({
  devToolbar: {enabled:false}, output: 'static',
  trailingSlash: 'always',
  redirects: Object.fromEntries(['zh-cn','en'].flatMap(locale=>['goal/','goal/help/','goal/help/too-big/'].map(path=>[`/${locale}/learn/${path}`,`/${locale}/learn/description/`]))),
  i18n: { defaultLocale: 'zh-cn', locales: ['zh-cn', 'en'], routing: { prefixDefaultLocale: true } },
});
