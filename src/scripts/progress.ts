import {projectStorage} from './project-storage';
import {parseLearning} from './learning';
import {mainProgress,nodeProgress} from '../data/learning-progress';
export function initProgress(){
 const en=document.documentElement.lang==='en';
 const render=()=>{
  let state;try{state=parseLearning(projectStorage.getItem('vibe-guide-learning-v1'));}catch{return;}
  document.querySelectorAll<HTMLElement>('[data-progress]').forEach(el=>{
   const done=state.completed.includes(el.dataset.progress!);
   el.textContent=done?(en?'Checked ✓':'已核对 ✓'):(en?'To check':'待核对');
   el.dataset.done=String(done);
  });
  document.querySelectorAll<HTMLElement>('[data-node-progress]').forEach(el=>{
   const p=nodeProgress(el.dataset.nodeProgress!,state.completed);
   el.textContent=`${p.done}/${p.total}`;
   el.setAttribute('aria-label',en?`${p.done} of ${p.total} main actions checked`:`主线动作已核对 ${p.done}/${p.total}`);
  });
  const p=mainProgress(state.completed);
  document.querySelectorAll<HTMLElement>('[data-main-progress]').forEach(el=>el.textContent=en?`${p.done} / ${p.total} main actions checked`:`主线已核对 ${p.done} / ${p.total} 个动作`);
  document.querySelectorAll<HTMLElement>('[data-undo-complete]').forEach(el=>el.hidden=!state.completed.includes(el.dataset.undoComplete!));
 };
 render();window.addEventListener('vibe-learning-changed',render);window.addEventListener('storage',render);window.addEventListener('pageshow',render);
}
