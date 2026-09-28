import { defineConfig } from 'astro/config';
// GitHub Pages 部署在子路径下，跳转目标必须自带 base 前缀，否则线上指向 404。
const siteBase = (process.env.SITE_BASE || '').replace(/\/$/, '');
export default defineConfig({
  site: 'https://rouicezar.github.io', base: process.env.SITE_BASE || '/',
  devToolbar: {enabled:false}, output: 'static',
  trailingSlash: 'always',
  redirects: Object.fromEntries(['zh-cn','en'].flatMap(locale=>['goal/','goal/help/','goal/help/too-big/'].map(path=>[`/${locale}/learn/${path}`,`${siteBase}/${locale}/node/description/#description`]))),
  i18n: { defaultLocale: 'zh-cn', locales: ['zh-cn', 'en'], routing: { prefixDefaultLocale: true } },
});
