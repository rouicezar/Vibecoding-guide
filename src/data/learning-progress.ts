import {linearStepIds,nextMainStep,repairStepIds,routeNodes,optionalSteps} from './nodes.ts';
export interface ProgressState {completed:string[];activeBranch?:string;}
export const resumeStep=(state:ProgressState)=>state.activeBranch&&repairStepIds.includes(state.activeBranch)?state.activeBranch:nextMainStep(state.completed);
export const canComplete=(id:string,verdict:string)=>verdict==='passed'||(['interface','save','test'].includes(id)&&verdict==='not-applicable');
export const nodeProgress=(id:string,completed:readonly string[])=>{
 const steps=routeNodes.find(n=>n.id===id)?.stepIds.filter(step=>!optionalSteps[step])??[];
 return {done:steps.filter(step=>completed.includes(step)).length,total:steps.length};
};
export const mainProgress=(completed:readonly string[])=>({done:linearStepIds.filter(id=>completed.includes(id)).length,total:linearStepIds.length});
