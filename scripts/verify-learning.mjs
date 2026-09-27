import assert from 'node:assert/strict';
import ts from 'typescript';
import {readFile} from 'node:fs/promises';
import {lessons,phases,learningPaths,legacyLessons} from '../src/data/learning.ts';
const source=await readFile('src/scripts/learning.ts','utf8');
const compiled=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText.replace(/(['"])\.\/project-storage\.ts\1/g,JSON.stringify(new URL('../src/scripts/project-storage.ts',import.meta.url).href)).replace(/(['"])\.\.\/data\/(learning|idea-template)\1/g,(_,quote,name)=>JSON.stringify(new URL('../src/data/'+name+'.ts',import.meta.url).href));
const {parseLearning}=await import('data:text/javascript;base64,'+Buffer.from(compiled).toString('base64'));
assert.equal(parseLearning(null).current,'idea');
assert.throws(()=>parseLearning('{broken'));
assert.throws(()=>parseLearning('null'));
assert.throws(()=>parseLearning(JSON.stringify({version:2,idea:'kept'})));
const valid={version:1,idea:'自己的想法 <script>',later:'尚未确定',completed:['idea','invalid'],current:'missing'};
const restored=parseLearning(JSON.stringify(valid));
assert.equal(restored.idea,valid.idea);assert.deepEqual(restored.completed,['idea']);assert.equal(restored.current,'idea');
assert.equal(new Set(learningPaths).size,learningPaths.length);
for(const lesson of lessons){assert(phases.some(p=>p.id===lesson.phase));assert(lesson.actions.length>0&&lesson.actions.length<=3);assert(lesson.expected.every(Boolean));assert(lesson.issues.length);for(const issue of lesson.issues){assert(issue.check.every(Boolean)&&issue.action.every(Boolean)&&issue.expected.every(Boolean));if(issue.retry)assert(lessons.some(l=>l.id===issue.retry));}}
for(const id of Object.values(legacyLessons))assert(lessons.some(l=>l.id===id));
console.log(`PASS: ${phases.length} phases, ${lessons.length} action/help/return routes; corrupt-state rejection, schema version, draft preservation and unknown-progress filtering.`);
for(const lesson of lessons){
 assert(lesson.understanding?.why.every(Boolean),`Missing purpose: ${lesson.id}`);
 assert(lesson.understanding?.concept.every(Boolean),`Missing explanation: ${lesson.id}`);
 assert(lesson.understanding?.question.every(Boolean),`Missing transfer question: ${lesson.id}`);
 for(const choice of lesson.choices??[])assert(lessons.some(l=>l.id===choice.id),`Dead decision: ${lesson.id}/${choice.id}`);
}
const order=id=>lessons.findIndex(l=>l.id===id);
assert(order('description')<order('tool'));
assert(order('checkpoint')<order('first-file'));
assert(order('plan')<order('environment'));
assert(order('environment')<order('preview'));
for(const [from,to] of [['accept','feedback'],['repair','feedback'],['release-review','repair-plan'],['package','feedback'],['live-check','feedback']])assert(lessons.find(l=>l.id===from).choices.some(c=>c.id===to),`Missing recovery loop ${from}`);
console.log('PASS: every action explains purpose and concepts; prerequisite order and repair/delivery loops are navigable.');
