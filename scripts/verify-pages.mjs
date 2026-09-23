import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const paths=['','start/','projects/web/','projects/mini-program/','projects/mobile/','projects/desktop/'];
for(const locale of ['zh-cn','en'])for(const path of paths){
 const html=await readFile(`dist/${locale}/${path}index.html`,'utf8');
 assert(html.includes(`lang="${locale==='en'?'en':'zh-CN'}"`));
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert(html.includes(`href="/en/${path}"`)&&html.includes(`href="/zh-cn/${path}"`));
 for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){
  const target=match[1];await access(`dist${target}${target.endsWith('/')?'index.html':''}`);
 }
 for(const match of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${match[1]}"`),`Missing anchor ${match[1]}`);
}
console.log('PASS: 12 localized pages, language counterparts, headings, local links/assets and section anchors.');
