import checks from './micro-checks.json' with {type:'json'};
import {stepSupport} from './learning-support.ts';
import type {Copy} from './site';
export interface MicroAction {id:string;action:Copy;expect:Copy;ifWrong:Copy;}
const entries=checks as Record<string,{expect:string[];ifWrong:string[]}[]>;
export const microActions:Record<string,MicroAction[]> = Object.fromEntries(stepSupport.map(s=>{
 const list=entries[s.id];
 if(!list||list.length!==s.steps.length)throw Error(`Micro-operation coverage mismatch: ${s.id}`);
 return [s.id,s.steps.map((action,i)=>({id:`${s.id}-${i+1}`,action,expect:list[i].expect as unknown as Copy,ifWrong:list[i].ifWrong as unknown as Copy}))];
}));
