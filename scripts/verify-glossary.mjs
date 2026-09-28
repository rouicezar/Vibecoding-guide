import {routeUrl} from '../src/data/nodes.ts';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {glossary,termGroups,termDiagrams,termComparisons,starterIds} from '../src/data/glossary/index.ts';
import {terms as legacy} from '../src/data/terms.ts';
import {matchesTerm} from '../src/scripts/glossary.ts';
const ids=new Set(glossary.map(t=>t.id));
assert.equal(ids.size,glossary.length,'Duplicate glossary IDs');
assert.equal(termGroups.length,27);
assert.equal(glossary.length,755,'Review the coverage record when changing the catalogue');
for(const term of legacy)assert(ids.has(term.id),`Legacy anchor missing: ${term.id}`);
for(const id of starterIds)assert(ids.has(id));
assert.equal(termComparisons.length,18);
for(const comparison of termComparisons){assert(comparison.explanation.every(Boolean));for(const id of comparison.ids)assert(ids.has(id));}
for(const diagram of termDiagrams){assert(diagram.caption.every(Boolean));assert(diagram.nodes.length>=3);for(const n of diagram.nodes){assert(ids.has(n.term));assert(n.life.every(Boolean)&&n.real.every(Boolean));}}
const decode=s=>s.replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&gt;/g,'>').replace(/&lt;/g,'<');
for(const group of termGroups){assert(glossary.some(t=>t.group===group.id));assert(group.where.every(Boolean)&&group.action.every(Boolean)&&group.caution.every(Boolean));if(group.diagram)assert(termDiagrams.some(d=>d.id===group.diagram));}
for(const term of glossary){
 for(const field of ['name','definition','example','action'])assert(term[field].length===2&&term[field].every(s=>s.trim().length>0),`${term.id}: incomplete ${field}`);
 assert(term.example[0]!==term.definition[0],`${term.id}: example repeats definition`);
 assert(term.source.startsWith('https://'));
 for(const [locale,index] of [['zh-cn',0],['en',1]]){
  const html=decode(await readFile(`dist/${locale}/terms/${term.id}/index.html`,'utf8'));
  assert(html.includes(term.definition[index]),`${locale}/${term.id}: definition missing`);
  assert(html.includes(term.example[index]),`${locale}/${term.id}: example missing`);
  assert(html.includes(`href="${routeUrl(locale,term.path)}"`),`${term.id}: task link`);
  assert(html.includes(locale==='en'?'An everyday example':'换成生活中的例子'));
 }
}
for(const query of ['API Key','api-key','API密钥'])assert(matchesTerm([...glossary.find(t=>t.id==='api-key').name,...glossary.find(t=>t.id==='api-key').aliases].join(' '),query));
assert(matchesTerm(glossary.find(t=>t.id==='harness').aliases.join(' '),'herness'));
assert(matchesTerm('MCP — Model Context Protocol','ＭＣＰ'));
assert(!matchesTerm('API key','missing word'));
for(const locale of ['zh-cn','en']){
 const html=await readFile(`dist/${locale}/terms/index.html`,'utf8');
 assert.equal((html.match(/data-term-id=/g)||[]).length,glossary.length);
 assert.equal((html.match(/data-term-group=/g)||[]).length,27);
 for(const term of legacy)assert(html.includes(`id="${term.id}"`));
 assert(!html.includes('30 / 30'));
}
console.log(`PASS: ${glossary.length} bilingual glossary entries, 27 categories, ${termDiagrams.length} diagrams, 18 comparisons; legacy anchors, task links, aliases, examples and rendered detail pages checked. Human comprehension is not measured by these tests.`);
