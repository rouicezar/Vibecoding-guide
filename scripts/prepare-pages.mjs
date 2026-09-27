// Adapt legacy public asset attributes after Astro's base-aware route build.
import {readdir,readFile,writeFile} from 'node:fs/promises';
const base='/Vibecoding-guide';
async function walk(dir){for(const e of await readdir(dir,{withFileTypes:true})){const p=`${dir}/${e.name}`;if(e.isDirectory())await walk(p);else if(/\.(html|css)$/.test(p)){let s=await readFile(p,'utf8');s=s.replace(/((?:href|src|poster|action)=["'])(\/(?!\/)[^"']*)/g,(all,a,b)=>b.startsWith(base+'/')?all:a+base+b);s=s.replace(/url\((["']?)(\/(?!\/)[^)"']+)\1\)/g,(all,q,p)=>p.startsWith(base+'/')?all:`url(${q}${base}${p}${q})`);await writeFile(p,s);}}}
await walk(process.argv[2] || 'dist');
