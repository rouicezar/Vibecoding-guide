import {routeNodes} from '../data/nodes.ts';
import {url,type Locale} from '../data/site.ts';
export const normalizeTerm=(value:string)=>value.normalize('NFKC').toLowerCase().replace(/[\s_—\-./]+/g,' ').trim();
export function matchesTerm(value:string,query:string){const haystack=normalizeTerm(value);return normalizeTerm(query).split(' ').filter(Boolean).every(part=>haystack.includes(part));}
export function initGlossary(){
 const root=document.querySelector<HTMLElement>('[data-glossary]');if(!root)return;
 const en=root.dataset.locale==='en';
 const input=root.querySelector<HTMLInputElement>('#term-search')!;
 const select=root.querySelector<HTMLSelectElement>('#term-category')!;
 const nodeSelect=root.querySelector<HTMLSelectElement>('#term-node')!;
 const nodeReturn=root.querySelector<HTMLAnchorElement>('[data-term-node-return]')!;
 const priority=root.querySelector<HTMLInputElement>('#term-priority')!;
 const groups=[...root.querySelectorAll<HTMLDetailsElement>('[data-term-group]')];
 const entries=[...root.querySelectorAll<HTMLAnchorElement>('[data-term-id]')];
 const count=root.querySelector<HTMLElement>('#term-count')!;
 const empty=root.querySelector<HTMLElement>('#term-empty')!;
 const more=root.querySelector<HTMLButtonElement>('#term-more')!;
 let limit=40;
 const render=(writeURL=true)=>{
  const query=input.value.trim();const filtering=!!(query||select.value||nodeSelect.value||priority.checked);
  const matched=entries.filter(e=>(!nodeSelect.value||e.dataset.termNodes?.split(' ').includes(nodeSelect.value))&&(!select.value||e.closest<HTMLElement>('[data-term-group]')!.dataset.termGroup===select.value)&&(!priority.checked||e.dataset.priority==='true')&&matchesTerm(e.dataset.term!,query));
  // Name matches come first; descriptions are a useful fallback for unfamiliar words.
  matched.sort((a,b)=>Number(matchesTerm(b.dataset.name!,query))-Number(matchesTerm(a.dataset.name!,query)));
  const visible=new Set(filtering?matched.slice(0,limit):matched);
  entries.forEach(e=>{e.hidden=!visible.has(e);});
  groups.forEach(g=>{const local=[...g.querySelectorAll<HTMLAnchorElement>('[data-term-id]')];const found=local.filter(e=>visible.has(e)).length;g.hidden=found===0;g.open=filtering&&found>0;g.querySelector('[data-group-count]')!.textContent=`${found} ${en?'entries':'个词条'}`;});
  count.textContent=filtering?(en?`${matched.length} matches · ${visible.size} shown`:`找到 ${matched.length} 项 · 显示 ${visible.size} 项`):(en?`${entries.length} entries · open a category`:`${entries.length} 个词条 · 按需展开分类`);
  const currentNode=routeNodes.find(n=>n.id===nodeSelect.value);nodeReturn.hidden=!currentNode;if(currentNode){nodeReturn.href=url(root.dataset.locale as Locale,`node/${currentNode.id}`);nodeReturn.textContent=(en?'Return to: ':'返回节点：')+currentNode.title[en?1:0];}
  entries.forEach(e=>{const link=new URL(e.href);nodeSelect.value?link.searchParams.set('node',nodeSelect.value):link.searchParams.delete('node');e.href=link.href;});
  empty.hidden=matched.length>0;more.hidden=!filtering||matched.length<=limit;
  root.querySelector<HTMLElement>('.term-starters')!.hidden=filtering;
  if(writeURL){const params=new URLSearchParams(location.search);nodeSelect.value?params.set('node',nodeSelect.value):params.delete('node');query?params.set('q',query):params.delete('q');select.value?params.set('category',select.value):params.delete('category');priority.checked?params.set('essentials','1'):params.delete('essentials');const search=params.toString();history.replaceState(null,'',`${location.pathname}${search?'?'+search:''}`);}
  document.querySelectorAll<HTMLAnchorElement>('.languages a').forEach(a=>{const destination=new URL(a.href);for(const key of ['q','category','essentials','node']){const value=new URLSearchParams(location.search).get(key);value?destination.searchParams.set(key,value):destination.searchParams.delete(key);}a.href=destination.href;});
 };
 const load=()=>{const p=new URLSearchParams(location.search);input.value=p.get('q')??'';nodeSelect.value=p.get('node')??'';select.value=p.get('category')??'';priority.checked=p.get('essentials')==='1';limit=40;render(false);};
 nodeSelect.addEventListener('change',()=>{limit=40;render();});
 input.addEventListener('input',()=>{limit=40;render();});select.addEventListener('change',()=>{limit=40;render();});priority.addEventListener('change',()=>{limit=40;render();});
 root.querySelector('form')!.addEventListener('submit',event=>{event.preventDefault();render();});
 root.querySelector('form')!.addEventListener('reset',event=>{event.preventDefault();input.value='';select.value='';nodeSelect.value='';priority.checked=false;limit=40;render();input.focus();});
 more.addEventListener('click',()=>{limit+=40;render();});window.addEventListener('popstate',load);
 const oldAnchor=()=>{let id='';try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}const target=entries.find(e=>e.id===id);if(target){const next=new URL(target.href);const via=new URLSearchParams(location.search).get('via');if(via)next.searchParams.set('via',via);location.replace(next.href);}};
 load();oldAnchor();window.addEventListener('hashchange',oldAnchor);
}
