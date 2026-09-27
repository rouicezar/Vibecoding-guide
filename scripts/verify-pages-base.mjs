import {readdir,readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
const root=process.argv[2]||'dist',base='/Vibecoding-guide';let count=0;
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=`${dir}/${e.name}`;if(e.isDirectory())await walk(p);else if(e.name.endsWith('.html')){count++;const s=await readFile(p,'utf8');for(const [,raw] of s.matchAll(/(?:href|src|poster)=["'](\/(?!\/)[^"']*)/g)){const u=new URL(raw.replaceAll('&amp;','&'),'https://example.test');assert(u.pathname.startsWith(base+'/'),`${p}: unprefixed ${raw}`);let path=decodeURIComponent(u.pathname.slice(base.length));if(path.endsWith('/'))path+='index.html';await access(root+path);}}}}
await walk(root);assert(count>2300);console.log(`PASS: ${count} Pages HTML documents have base-prefixed, existing local links/assets.`);
