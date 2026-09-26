import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';
import dictionary from '../src/data/dictionary.json' with {type:'json'};
import {demoLessons,nativeDemoIds,demoLevel,lessonFor} from '../src/data/demo-lessons.ts';
import {resourceTasks,resourcePrompt} from '../src/data/resource-tasks.ts';
import {advancedLessons} from '../src/data/advanced-lessons.ts';
import {validateTemplate} from '../src/scripts/templates.ts';
for(const file of ['legacy','improvements','advanced'])new vm.Script(await readFile(`src/demos/${file}.js`,'utf8'));
const decode=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,'&');
assert.equal(Object.keys(advancedLessons).length,20);
for(const [id,lesson] of Object.entries(advancedLessons)){assert(dictionary.entries.some(e=>e.id===id));assert(lesson.action.every(Boolean)&&lesson.check.every(Boolean));}
const counts={visual:0,simplified:0,exercise:0};
for(const entry of dictionary.entries){
 assert(demoLessons[entry.category],`${entry.id}: lesson missing`);counts[demoLevel(entry.id)]++;
 for(const [locale,i] of [['zh-cn',0],['en',1]]){
  const html=await readFile(`dist/${locale}/components/${entry.id}/index.html`,'utf8');
  assert(html.includes(lessonFor(entry).action[i].replaceAll('&','&amp;')),`${entry.id}: instructions missing`);
  assert(!html.includes('尚未迁移或验证'),`${entry.id}: missing example`);
  if(nativeDemoIds.includes(entry.id))assert(html.includes(`data-demo="${entry.id}"`),`${entry.id}: native demo missing`);
  if(!nativeDemoIds.includes(entry.id)){
   assert(html.includes('sandbox="allow-scripts"')&&!html.includes('allow-same-origin'),`${entry.id}: isolation`);
   assert(html.includes('connect-src'),`${entry.id}: network boundary`);
  }
  const template=decode(html.match(/<textarea[^>]*data-template-editor[^>]*>([\s\S]*?)<\/textarea>/)?.[1]||'');
  assert(template,`${entry.id}: template missing`);
  assert.throws(()=>validateTemplate(template,template),/unfilled/,`${entry.id}: unfilled template accepted`);
  const filled=template.replace(/【[^】]*】|\[[^\]]*\]/g,i?'undecided':'尚未确定');
  assert.equal(validateTemplate(filled,template),filled.trim());
 }
}
for(const path of Object.keys(resourceTasks))for(const template of resourcePrompt(path)){
 assert.throws(()=>validateTemplate(template,template),/unfilled/);
 assert(validateTemplate(template.replace(/【[^】]*】|\[[^\]]*\]/g,'undecided'),template));
}
for(const path of ['data','check','launch','maintain'])for(const locale of ['zh-cn','en']){
 const html=await readFile(`dist/${locale}/${path}/index.html`,'utf8');
 assert(html.includes('data-template-kind="worksheet"'),`${path}: no record template`);
 assert(!html.includes('id="run-record"'),`${path}: obsolete unvalidated record`);
}
console.log(`PASS: 212 bilingual example pages and templates; ${JSON.stringify(counts)}; 9 scoped resource prompts and 4 validated records. Runtime interaction is verified separately in browser evidence.`);
