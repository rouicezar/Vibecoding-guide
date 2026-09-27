import assert from 'node:assert/strict';
import {lessons} from '../src/data/learning.ts';
import {stepSupport,referenceAnswers} from '../src/data/learning-support.ts';
import {fileContracts} from '../src/data/learning-contracts.ts';
import {learningBranches} from '../src/data/learning-branches.ts';
import {glossary} from '../src/data/glossary/index.ts';
import {validateTemplate} from '../src/scripts/templates.ts';
import {makePrompt,scenarios} from '../src/data/communication.ts';
import {ideaFields,projectStorage,activeProject,createProject,switchProject,exportProject,restoreProject,validateBackup,readConfirmed} from '../src/scripts/project-storage.ts';
const map=new Map();globalThis.window={localStorage:{getItem:k=>map.get(k)??null,setItem:(k,v)=>map.set(k,String(v)),removeItem:k=>map.delete(k),key:i=>[...map.keys()][i]??null,get length(){return map.size;}}};
globalThis.document={documentElement:{lang:'zh-CN'}};
assert.deepEqual(ideaFields('这个项目主要给谁使用：成员\n这个项目要帮他们解决什么问题：漏记\n项目做完后，怎样才算达到预期：可查\n是否计划第二阶段开发，希望增加哪些功能：否'),['成员','漏记','可查','否']);
assert.equal(activeProject(),'default');
projectStorage.setItem('vibe-guide-learning-v1',JSON.stringify({idea:'预约',version:1}));
projectStorage.setItem('vibe-template-v1:zh-CN:learn-description',JSON.stringify({draft:'预约描述',confirmed:'预约描述'}));
projectStorage.setItem('vibe-selected-platform','iPhone / iPad');
const backup=exportProject();assert.equal(Object.keys(backup.entries).length,3);
const second=createProject('另一个项目');assert.equal(projectStorage.getItem('vibe-selected-platform'),null);
projectStorage.setItem('vibe-selected-platform','Windows');switchProject('default');assert.equal(readConfirmed('learn-description','zh-cn'),'预约描述');
restoreProject(backup);assert.notEqual(activeProject(),'default');assert.notEqual(activeProject(),second);assert.equal(projectStorage.getItem('vibe-selected-platform'),'iPhone / iPad');assert.equal(readConfirmed('learn-description'),'预约描述');
switchProject(second);assert.equal(projectStorage.getItem('vibe-selected-platform'),'Windows');
assert.throws(()=>validateBackup({format:'vibe-project-backup',version:1,entries:{'vibe-guide-active-project':'attacker'}}));
assert.throws(()=>validateBackup({format:'vibe-project-backup',version:1,entries:{'unrelated-key':'bad'}}));
assert.throws(()=>restoreProject({format:'wrong'}));assert.equal(activeProject(),second);
assert.equal(lessons.length,31);assert.equal(stepSupport.length,31);
for(const l of lessons){const entry=stepSupport.find(s=>s.id===l.id);assert(entry,l.id);assert(referenceAnswers[l.id]?.every(Boolean),l.id+' reference answer');for(const term of entry.terms)assert(glossary.some(g=>g.id===term),`Missing term ${term}`);const contract=fileContracts[l.id];if(contract){assert(lessons.some(s=>s.id===contract.back));for(const path of contract.reads)assert(l.prompt[0].includes(path),`${l.id} input ${path}`);}}
assert(fileContracts.repair.reads.includes('docs/repair-plan.md'));
assert(fileContracts['repair-plan'].writes.includes('docs/repair-plan.md'));
assert(lessons.find(l=>l.id==='maintain').prompt[0].includes('docs/handoff.md'));
for(let i=0;i<scenarios.length;i++){for(const locale of ['zh-cn','en']){const original=makePrompt(i,locale);assert.throws(()=>validateTemplate(original,original),`Unfilled scenario accepted ${i}`);const completed=makePrompt(i,locale,['已有预约项目','成员','取消名额不恢复','F01复现材料','只整理反馈']);assert.equal(validateTemplate(completed,original),completed);}}
for(const b of learningBranches){assert(b.steps.length>=3);for(const p of b.prompt)assert.equal(validateTemplate(p,p),p);}
console.log('PASS: 31 step links, file contracts, 12 scoped branches; 12 bilingual empty-template rejections; project isolation, full backup, safe restore, locale handoff. Not a real device or AI-run acceptance test.');
