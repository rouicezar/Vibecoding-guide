import {readFile,access} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {glossaryPaths} from '../src/data/glossary/index.ts';
import {learningPaths} from '../src/data/learning.ts';
import {journey,mainJourney} from '../src/data/journey.ts';
import {practices} from '../src/data/practice.ts';
import {modules} from '../src/data/site.ts';
for(const stage of journey.filter(stage=>stage.parent)){
 assert(mainJourney.some(parent=>parent.id===stage.parent),`Invalid branch parent: ${stage.id}`);
}
assert(mainJourney.findIndex(stage=>stage.id==='scope')<mainJourney.findIndex(stage=>stage.id==='requirements'));
assert(mainJourney.findIndex(stage=>stage.id==='environment')<mainJourney.findIndex(stage=>stage.id==='build'));
assert(mainJourney.findIndex(stage=>stage.id==='accept')<mainJourney.findIndex(stage=>stage.id==='launch'));
const covered=new Set(journey.flatMap(stage=>stage.moduleIds));
for(const item of modules.filter(item=>item.id!=='home'))assert(covered.has(item.id),`Unmapped module: ${item.id}`);
for(const stage of journey)for(const id of stage.moduleIds)assert(modules.some(item=>item.id===id),`Unknown module: ${id}`);
assert.equal(new Set(journey.map(stage=>stage.id)).size,journey.length);
for(const practice of practices){
 assert(practice.steps.length>=3, `Missing practical steps: ${practice.path}`);
 assert(journey.some(s=>s.id===practice.stage), `Missing source stage: ${practice.path}`);
 for(const step of practice.steps)assert(step.check.every(Boolean), `Missing completion check: ${practice.path}`);
}
for(const stage of journey){
 assert(stage.incoming.every(Boolean),`Missing incoming material: ${stage.id}`);
 assert(stage.example[0].startsWith('比如：')&&stage.example[1].startsWith('For example:'),`Example not separated: ${stage.id}`);
 for(const [index,prompt] of stage.prompt.entries()){
  assert(prompt.split('\n').length>=10, `Template too short: ${stage.id}/${index}`);
  assert(prompt.includes(index===0?'【':'['), `Missing example fields: ${stage.id}/${index}`);
 }
}
const dictionary=JSON.parse(await readFile('src/data/dictionary.json','utf8'));
const paths=['roadmap/',...journey.map(s=>`roadmap/${s.id}/`),...learningPaths.map(p=>p+'/'),'','tools/','start/','communicate/','stacks/','components/','terms/',...glossaryPaths.map(p=>p+'/'),...practices.map(p=>p.path+'/'),'data/','check/','launch/','maintain/',...dictionary.entries.map(e=>`components/${e.id}/`),'projects/web/','projects/mini-program/','projects/mobile/','projects/desktop/'];
for(const locale of ['zh-cn','en'])for(const path of paths){
 const html=await readFile(`dist/${locale}/${path}index.html`,'utf8');
 // User-approved homepage wording overrides the older neutral-voice rule.
 const copyForPolicy=path==='' ? html.replaceAll('把你的想法，','').replaceAll('同时让你知道为什么要这样做的原理。','') : html;
 assert(!copyForPolicy.includes('\u4f60'),`Disallowed copy in ${locale}/${path}`);
 assert(html.includes(`lang="${locale==='en'?'en':'zh-CN'}"`));
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
 assert(html.includes(`href="/en/${path}"`)&&html.includes(`href="/zh-cn/${path}"`));
 // Every shared prompt must expose an editable source and explicit confirmation.
 for(const [,id] of html.matchAll(/data-template-text="([^"]+)"/g)){
  assert(html.includes(`data-template-editor="${id}"`),`Missing editable template: ${locale}/${path}/${id}`);
  assert(html.includes('data-confirm-template'),`Missing confirmation: ${locale}/${path}/${id}`);
  assert(html.includes(`data-template-result="${id}" hidden`),`Result shown before confirmation: ${locale}/${path}/${id}`);
 }
 for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){
  const target=match[1];await access(`dist${target}${target.endsWith('/')?'index.html':''}`);
 }
 for(const match of html.matchAll(/href="#([^"]+)"/g))assert(html.includes(`id="${match[1]}"`),`Missing anchor ${match[1]}`);
}
console.log(`PASS: ${paths.length*2} localized pages, language counterparts, headings, local links/assets section anchors, copy policy, module coverage structured bilingual templates, branch parents and lifecycle ordering.`);
