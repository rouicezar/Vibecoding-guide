import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {microActions} from '../src/data/micro-actions.ts';
import {lessons} from '../src/data/learning.ts';
import {nodeForStep} from '../src/data/nodes.ts';
const guidedActions=JSON.parse(await readFile('docs/reviews/2026-09-29-guided-actions/content-review.json','utf8'));
let total=0;
for(const [id,rows] of Object.entries(guidedActions)){
 assert.equal(rows.length,microActions[id]?.length);
 for(let i=0;i<rows.length;i++)for(const lang of [0,1]){assert(microActions[id][i].action[lang].includes(rows[i].action[lang]));assert(microActions[id][i].action[lang].includes(rows[i].tip[lang]));}
 assert(lessons.some(l=>l.id===id),`Unknown guided action: ${id}`);assert(rows.length>0);
 for(const row of rows){total++;for(const field of ['where','action','tip','expect','ifWrong'])assert(row[field].length===2&&row[field].every(s=>s.trim()),`${id}/${field}`);}
 for(const locale of ['zh-cn','en']){
  const html=await readFile(`dist/${locale}/node/${nodeForStep(id)}/index.html`,'utf8');
  for(const row of microActions[id]){assert(html.includes(`data-micro-action="${row.id}"`));assert(html.includes(row.expect[locale==='zh-cn'?0:1]));}
  assert.equal((html.match(new RegExp(`id="template-learn-${id}"`,'g'))||[]).length,1,'Keep the existing single prompt editor');
 }
}
console.log(`PASS: ${Object.keys(guidedActions).length} teaching sections / ${total} follow-along operations; bilingual location, action, reminder, observation and recovery rendered through existing UI.`);
