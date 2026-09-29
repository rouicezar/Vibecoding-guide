import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {microActions} from '../src/data/micro-actions.ts';
import {lessons} from '../src/data/learning.ts';
import {nodeForStep} from '../src/data/nodes.ts';
const guidedActions=JSON.parse(await readFile('docs/reviews/2026-09-29-guided-actions/content-review.json','utf8'));
assert.deepEqual(Object.keys(guidedActions).sort(),lessons.map(l=>l.id).sort(),'Review every current step without fixing its count');
let total=0;
for(const [id,rows] of Object.entries(guidedActions)){
 assert.equal(rows.length,microActions[id]?.length);
 for(let i=0;i<rows.length;i++)for(const lang of [0,1]){assert(microActions[id][i].action[lang].includes(rows[i].action[lang]));assert(microActions[id][i].action[lang].includes(rows[i].tip[lang]));}
 assert(lessons.some(l=>l.id===id),`Unknown guided action: ${id}`);assert(rows.length>0);
 for(const row of rows){total++;for(const field of ['where','action','tip','expect','ifWrong'])assert(row[field].length===2&&row[field].every(s=>s.trim()),`${id}/${field}`);}
 for(const locale of ['zh-cn','en']){
  const html=await readFile(`dist/${locale}/node/${nodeForStep(id)}/index.html`,'utf8');
  const section=html.split(`id="${id}"`)[1] || html;
  const actions=section.match(/<ol class="lesson-actions"[^>]*>([\s\S]*?)<\/ol>/)?.[1];
  assert(actions,`${id}: visible actions are required`);
  assert.equal((actions.match(/<li(?:\s[^>]*)?>/g)||[]).length,rows.length,`${id}: show each action in section 03`);
  const lang=locale==='zh-cn'?0:1;
  for(const row of rows){
   const escape=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
   assert(actions.includes(escape(row.action[lang])),`${id}: action must be visible`);
   if(row.prompt?.[lang])assert(actions.includes(escape(row.prompt[lang])),`${id}: prompt must accompany its action`);
  }
  assert(!html.includes('本站不能检查你的电脑文件'));
  assert(!html.includes('可恢复的起点与 AI 工作约定'));
  for(const row of microActions[id]){assert(html.includes(`data-micro-action="${row.id}"`));assert(html.includes(row.expect[locale==='zh-cn'?0:1]));}
  assert.equal((html.match(new RegExp(`id="template-learn-${id}"`,'g'))||[]).length,lessons.find(l=>l.id===id).prompt?1:0,'Keep existing editors; manual steps do not require an AI prompt');
 }
}
console.log(`PASS: ${Object.keys(guidedActions).length} teaching sections / ${total} follow-along operations; bilingual location, action, reminder, observation and recovery rendered through existing UI.`);
const {learningBranches}=await import('../src/data/learning-branches.ts');
for(const branch of learningBranches){
 assert.equal(branch.steps.length,branch.actionPrompts.length);
 for(const [lang,locale] of ['zh-cn','en'].entries()){
  const html=await readFile(`dist/${locale}/node/${nodeForStep(branch.lesson)}/index.html`,'utf8');
  for(const prompt of branch.actionPrompts){assert(prompt[lang].trim());assert(html.includes(prompt[lang].replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;')),`${branch.id}: adjacent branch prompt missing`);}
 }
}
console.log(`PASS: ${learningBranches.length} optional branches have per-action bilingual prompts.`);
