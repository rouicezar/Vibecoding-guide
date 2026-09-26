// Small self-contained exercises. Data remains inside this disposable preview.
function enhancedDemo(host, it) {
 const id=it.id, kind=it.opts?.kind;
 const say=(zh,en)=>document.documentElement.lang==='en'?en:zh;
 const el=(tag,attrs={},children=[])=>$(tag,attrs,children);
 const btn=(text,fn)=>el('button',{class:'ui-btn secondary',onclick:fn},text);
 const status=()=>el('p',{role:'status',class:'hint'});
 const output=status();
 const note=text=>{output.textContent=text;};
 const row=children=>el('div',{class:'exercise-row'},children);
 if(it.demo==='date') {
  const types={date:'date',range:'date',time:'time',datetime:'datetime-local',calendar:'date',week:'week',month:'month',year:'number',calview:'date'};
  const type=types[kind]||'date';
  const start=el('input',{type,'aria-label':say('选择日期或时间','Choose date or time'),min:type==='number'?'1900':undefined,max:type==='number'?'2100':undefined});
  host.append(el('label',{},[say('选择值','Choose a value'),start]));
  let end;
  if(kind==='range'){end=el('input',{type:'date','aria-label':say('结束日期','End date')});host.append(el('label',{},[say('结束日期','End date'),end]));}
  const update=()=>{const invalid=!!(end&&end.value&&start.value&&end.value<start.value);if(end)end.setAttribute('aria-invalid',String(invalid));note(invalid?say('结束日期不能早于开始日期。','End cannot precede start.'):start.value+(end?' → '+end.value:''));};
  start.addEventListener('input',update);end?.addEventListener('input',update);host.append(output);return true;
 }
 if(it.demo==='stepper') {
  let current=0;const labels=[say('填写','Enter'),say('核对','Review'),say('完成','Done')];
  function paint(){clear(host);const list=el('ol',{class:'exercise-steps '+kind});labels.forEach((label,i)=>list.append(el('li',{'aria-current':i===current?'step':undefined,class:i===current?'active':''},[(kind==='dot'?'●':String(i+1))+' '+label])));host.append(list,el('p',{},labels[current]),row([btn(say('上一步','Previous'),()=>{current=Math.max(0,current-1);paint();}),btn(say('下一步','Next'),()=>{current=Math.min(2,current+1);paint();})]));const bs=host.querySelectorAll('button');bs[0].disabled=current===0;bs[1].disabled=current===2;}paint();return true;
 }
 if(it.demo==='overlay') {
  const open=btn(say('打开示例','Open example'),()=>{});host.append(open);
  if(['modal','alert','drawer','sheet','bottom'].includes(kind)){
   const dialog=el('dialog',{class:'exercise-dialog '+kind,'aria-label':say('演示面板','Example panel')});
   dialog.append(el('h2',{},say(kind==='alert'?'删除示例条目？':'示例详情',kind==='alert'?'Delete the example item?':'Example details')),el('p',{},say('这里的操作只影响示例。','Actions affect this example only.')));
   if(kind==='modal')dialog.append(el('label',{},[say('名称','Name'),el('input',{value:'Demo'})]));
   dialog.append(row([btn(say('取消','Cancel'),()=>dialog.close()),btn(say('确认','Confirm'),()=>{note(say('示例已确认；未执行真实业务。','Example confirmed; no real operation.'));dialog.close();})]));
   host.append(dialog,output);open.onclick=()=>dialog.showModal();dialog.addEventListener('close',()=>open.focus());dialog.addEventListener('click',e=>{if(e.target!==dialog||kind==='alert')return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();});
  }else{
   const panel=el('div',{class:'exercise-pop',hidden:true,id:'example-popup',role:kind==='tooltip'?'tooltip':'region'},say(kind==='tooltip'?'发票上显示的名称':'更多资料与操作',kind==='tooltip'?'Name shown on the invoice':'More information and actions'));
   if(kind!=='tooltip')panel.append(btn(say(kind==='popconfirm'?'确认删除示例':'完成',kind==='popconfirm'?'Confirm example deletion':'Done'),()=>{panel.hidden=true;open.setAttribute('aria-expanded','false');note(say('示例操作已完成','Example action completed'));open.focus();}));
   open.setAttribute('aria-controls',panel.id);open.setAttribute('aria-expanded','false');
   const show=()=>{panel.hidden=false;open.setAttribute('aria-expanded','true');};const hide=()=>{panel.hidden=true;open.setAttribute('aria-expanded','false');};
   open.onclick=()=>panel.hidden?show():hide();
   if(['tooltip','hover'].includes(kind)){let timer;host.addEventListener('pointerenter',()=>{clearTimeout(timer);show();});host.addEventListener('pointerleave',()=>{timer=setTimeout(hide,180);});open.addEventListener('focus',show);host.addEventListener('focusout',e=>{if(!host.contains(e.relatedTarget))hide();});}
   document.addEventListener('keydown',e=>{if(e.key==='Escape'){hide();open.focus();}});document.addEventListener('pointerdown',e=>{if(!host.contains(e.target))hide();});host.append(panel,output);
  }return true;
 }
 if(it.demo==='table'){
  let rows=[['Ada',12],['Lin',9],['Sam',4]],direction=1,expanded=-1;
  function paint(){clear(host);const table=el('table',{class:'mini-table'}),head=el('tr');['Name','Count'].forEach((label,i)=>{const th=el('th',{scope:'col'});if(kind==='datatable')th.append(btn(label,()=>{direction*=-1;rows.sort((a,b)=>i?(a[i]-b[i])*direction:String(a[i]).localeCompare(b[i])*direction);paint();}));else th.textContent=label;head.append(th);});table.append(el('thead',{},head));const body=el('tbody');rows.forEach((r,i)=>{const tr=el('tr');r.forEach((v,j)=>{const td=el('td');if(kind==='edit'){const inp=el('input',{value:String(v),'aria-label':r[0]+' '+(j?'Count':'Name')});inp.addEventListener('input',()=>{rows[i][j]=inp.value;note(say('示例单元格已更新','Example cell updated'));});td.append(inp);}else if(j===0&&['expand','treetable','treegrid'].includes(kind)){const b=btn((expanded===i?'− ':'+ ')+v,()=>{expanded=expanded===i?-1:i;paint();});b.setAttribute('aria-expanded',String(expanded===i));td.append(b);}else{td.textContent=String(v);if(kind==='grid'){td.tabIndex=0;td.addEventListener('keydown',e=>{const cells=[...table.querySelectorAll('td')];const ix=cells.indexOf(td);const delta={ArrowRight:1,ArrowLeft:-1,ArrowDown:2,ArrowUp:-2}[e.key];if(delta){e.preventDefault();cells[Math.max(0,Math.min(cells.length-1,ix+delta))].focus();}});}}tr.append(td);});body.append(tr);if(expanded===i)body.append(el('tr',{},el('td',{colspan:2},say('详情：示例记录，没有真实用户资料。','Details: sample record, no real user data.'))));});table.append(body);host.append(table,output);}paint();return true;
 }
 if(it.demo==='gallery'||it.demo==='carousel'){
  let page=0;function paint(){clear(host);host.append(el('div',{class:'example-image','data-page':page,style:{background:['#e0f1ee','#e5ecfa','#fae8e9'][page]}},say('图片 ','Image ')+(page+1)));const choices=it.demo==='carousel'?[btn(say('上一张','Previous'),()=>{page=(page+2)%3;paint();}),btn(say('下一张','Next'),()=>{page=(page+1)%3;paint();})]:[0,1,2].map(i=>{const b=btn(String(i+1),()=>{page=i;paint();});b.setAttribute('aria-pressed',String(page===i));return b;});host.append(row(choices));}paint();return true;
 }
 if(it.demo==='loading'){
  let progress=20;const controlled=['bar','det','circ'].includes(kind);
  if(controlled){const p=el('progress',{max:100,value:progress,'aria-label':say('演示进度','Demo progress')});host.append(p,output,btn(say('前进 20%','Advance 20%'),()=>{progress=Math.min(100,progress+20);p.value=progress;note(progress+'%');}),btn(say('重置','Reset'),()=>{progress=20;p.value=progress;note(progress+'%');}));note('20%');if(kind==='circ'){p.hidden=true;const ring=el('div',{class:'exercise-ring',role:'progressbar','aria-label':say('演示进度','Demo progress'),'aria-valuemin':'0','aria-valuemax':'100','aria-valuenow':progress});const update=()=>{ring.style.background='conic-gradient(#347c76 '+progress+'%, #e6eef1 0)';ring.setAttribute('aria-valuenow',String(progress));ring.textContent=progress+'%';};host.prepend(ring);new MutationObserver(update).observe(p,{attributes:true,attributeFilter:['value']});update();}}
  else{const view=el('div',{'aria-busy':'true'},kind==='skel'||kind==='shim'?[el('div',{class:'skel '+(kind==='shim'?'shimmer':'')}),el('div',{class:'skel'})]:el('div',{class:kind==='indet'?'indet-bar':'spin'},kind==='indet'?el('i'):[]));host.append(view,btn(say('模拟加载完成','Simulate completion'),()=>{view.setAttribute('aria-busy','false');view.textContent=say('内容已出现','Content is ready');}));}return true;
 }
 if(it.demo==='layout'&&['drag','reorder'].includes(kind)){
  let items=['A','B','C'];function move(from,to){if(from<0||from>=items.length||to<0||to>=items.length)return;items.splice(to,0,items.splice(from,1)[0]);paint();}
  function paint(){clear(host);items.forEach((item,i)=>{const r=row([el('span',{},item),btn(say('上移','Move up'),()=>move(i,i-1)),btn(say('下移','Move down'),()=>move(i,i+1))]);r.draggable=true;r.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',String(i)));r.addEventListener('dragover',e=>e.preventDefault());r.addEventListener('drop',e=>{e.preventDefault();const from=Number(e.dataTransfer.getData('text/plain'));if(Number.isInteger(from))move(from,i);});r.querySelectorAll('button')[0].disabled=i===0;r.querySelectorAll('button')[1].disabled=i===items.length-1;host.append(r);});}paint();return true;
 }
 if(it.demo==='layout'&&kind!=='split'){
  const left=el('div',{class:'card-mini'},say('文件列表','Files')),right=el('div',{class:'card-mini grow'},say('内容','Content'));const split=row([left,right]);const range=el('input',{type:'range',min:20,max:70,value:35,'aria-label':say('左栏宽度','Left panel width')});const update=()=>{left.style.width=range.value+'%';note(range.value+'%');};range.addEventListener('input',update);host.append(split,el('label',{},[say('拖动或用方向键调整分栏','Drag or use arrow keys to resize'),range]),output);update();return true;
 }
 if(it.demo==='empty'){
  const title={empty:say('还没有项目','No projects yet'),error:say('加载失败','Loading failed'),ok:say('提交成功','Submission succeeded'),'404':say('页面不存在','Page not found')}[kind];host.append(el('h3',{},title),btn(say(kind==='error'?'重试':'继续',kind==='error'?'Retry':'Continue'),()=>{clear(host).append(el('p',{role:'status'},say('示例内容已显示，可点“重新开始”再试。','Example content is ready. Restart to try again.')));}));return true;
 }
 if(it.demo==='mobile'&&['pull','swipe','long'].includes(kind)){
  const card=el('div',{class:'card-mini',tabindex:0},say('示例消息','Example message'));host.append(card,output);let timer,startX=0,startY=0;
  const action=()=>{note(say(kind==='pull'?'示例列表已刷新':kind==='swipe'?'操作已展开':'菜单已展开',kind==='pull'?'Example list refreshed':kind==='swipe'?'Actions revealed':'Menu opened'));if(kind!=='pull'&&!host.querySelector('[data-mobile-action]')){const b=btn(say('关闭操作','Close actions'),()=>{b.remove();note('');});b.dataset.mobileAction='';host.append(b);}};
  card.style.touchAction='pan-y';card.addEventListener('pointerdown',e=>{startX=e.clientX;startY=e.clientY;if(kind==='long')timer=setTimeout(action,500);});card.addEventListener('pointerup',e=>{clearTimeout(timer);if(kind==='swipe'&&startX-e.clientX>40||kind==='pull'&&e.clientY-startY>40)action();});card.addEventListener('pointercancel',()=>clearTimeout(timer));card.addEventListener('pointerleave',()=>clearTimeout(timer));host.append(btn(say('用按钮试同一操作','Try the same action with a button'),action));return true;
 }
 if(it.demo==='saas'&&['copy','code','snippet'].includes(kind)||['ai-cb','ai-snip'].includes(id)){
  const text='const message = "Hello";';const pre=el('pre',{tabindex:0},text);host.append(pre,btn(say('选中代码','Select code'),()=>{const r=document.createRange();r.selectNodeContents(pre);const s=getSelection();s.removeAllRanges();s.addRange(r);note(say('代码已选中，请按 Ctrl+C / ⌘C 复制。','Code selected. Press Ctrl+C / ⌘C to copy.'));}),output);return true;
 }

 if(it.demo==='file'){
  const input=el('input',{type:'file',multiple:true,'aria-label':say('选择测试文件','Choose test files')});const list=el('ul');
  function show(files){list.replaceChildren();Array.from(files).forEach(file=>list.append(el('li',{},file.name+' · '+file.size+' B')));note(say('仅显示本地文件信息，没有上传。','Local file information only; nothing uploaded.'));}
  input.addEventListener('change',()=>show(input.files));host.append(input,list,output);
  if(kind==='drop'){const zone=el('div',{class:'dropzone'},say('拖入测试文件，或用上方按钮选择','Drop test files, or use the chooser above'));zone.addEventListener('dragover',e=>e.preventDefault());zone.addEventListener('drop',e=>{e.preventDefault();show(e.dataTransfer.files);});host.append(zone);}return true;
 }
 if(it.demo==='slider'){
  const a=el('input',{type:'range',min:0,max:100,step:kind==='stepped'?10:1,value:30,'aria-label':say('数值','Value')});let b;
  if(kind==='range')b=el('input',{type:'range',min:0,max:100,value:70,'aria-label':say('上限','Upper bound')});
  const update=e=>{if(b&&+a.value>+b.value){if(e?.target===a)a.value=b.value;else b.value=a.value;}note(a.value+(b?' – '+b.value:''));};
  a.addEventListener('input',update);host.append(a);if(b){b.addEventListener('input',update);host.append(b);}if(kind==='vertical')a.style.cssText='writing-mode:vertical-lr;direction:rtl;height:140px';host.append(output);update();return true;
 }
 if(id==='ck-tri'){
  const parent=el('input',{type:'checkbox','aria-label':say('全部选择','Select all')});const children=[el('input',{type:'checkbox','aria-label':'A',checked:true}),el('input',{type:'checkbox','aria-label':'B'})];
  function update(){const count=children.filter(c=>c.checked).length;parent.checked=count===2;parent.indeterminate=count===1;note(count+' / 2');}
  parent.addEventListener('change',()=>{children.forEach(c=>c.checked=parent.checked);update();});children.forEach(c=>c.addEventListener('change',update));host.append(el('label',{},[parent,say('全部选择','Select all')]),...children.map((c,i)=>el('label',{},[c,String.fromCharCode(65+i)])),output);update();return true;
 }
 if(it.demo==='kanban'){
  const columns=[['A'],['B'],[]];const names=[say('待办','To do'),say('进行中','In progress'),say('完成','Done')];
  function move(from,index,to){if(to<0||to>2||from===to)return;const item=columns[from]?.[index];if(!item)return;columns[from].splice(index,1);columns[to].push(item);paint();}
  function paint(){clear(host);const board=row([]);columns.forEach((cards,col)=>{const section=el('section',{class:'card-mini grow'},el('h3',{},names[col]));section.addEventListener('dragover',e=>e.preventDefault());section.addEventListener('drop',e=>{e.preventDefault();const [f,i]=e.dataTransfer.getData('text/plain').split(',').map(Number);if(Number.isInteger(f)&&Number.isInteger(i))move(f,i,col);});cards.forEach((text,index)=>{const card=el('div',{draggable:true,class:'card-mini'},text);card.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',col+','+index));const select=el('select',{'aria-label':say('移动卡片 ','Move card ')+text},names.map((name,i)=>el('option',{value:i,selected:i===col},name)));select.addEventListener('change',()=>move(col,index,+select.value));card.append(select);section.append(card);});board.append(section);});host.append(board);}paint();return true;
 }
 if(it.demo==='input'&&kind==='search'){
  const input=el('input',{type:'search','aria-label':say('搜索示例项目','Search sample projects')});const list=el('ul');const names=['Alpha','Beta','Gamma'];const update=()=>{const found=names.filter(n=>n.toLowerCase().includes(input.value.toLowerCase()));list.replaceChildren(...found.map(n=>el('li',{},n)));note(found.length?say('找到 ','Found ')+found.length:say('没有匹配，换一个词试试。','No match; try another word.'));};input.addEventListener('input',update);host.append(input,list,output);update();return true;
 }
 if(it.demo==='nav'){
  let selected=0;const names=kind==='page'?['1','2','3']:[say('首页','Home'),say('项目','Projects'),say('设置','Settings')];
  const nav=el('nav',{'aria-label':say('示例导航','Example navigation')});function paint(){clear(nav);names.forEach((name,i)=>{const b=btn(name,()=>{selected=i;paint();});if(i===selected)b.setAttribute('aria-current',kind==='page'?'page':'true');nav.append(b);if(kind==='crumb'&&i<2)nav.append(' / ');});note(say('当前示例内容：','Current example content: ')+names[selected]);}if(['side','rail'].includes(kind))nav.className='exercise-nav vertical';else nav.className='exercise-nav';if(kind==='bottom')nav.style.cssText='position:absolute;bottom:16px;left:16px;right:16px;border-top:1px solid #dce5ec;padding-top:10px';host.append(nav,output);paint();return true;
 }
 if(it.demo==='tree'){
  const tree=el('details',{open:true},[el('summary',{},id==='ai-json'?'project { … }':'src'),el('ul',{},[el('li',{},id==='ai-json'?'name: "Demo"':'App.tsx'),el('li',{},id==='ai-json'?'active: true':'styles.css')])]);host.append(tree);return true;
 }
 if(it.demo==='feedback'&&kind==='snack'){
  let deleted=false;const item=el('p');const remove=btn(say('删除示例','Delete example'),()=>{deleted=true;paint();});const undo=btn(say('撤销','Undo'),()=>{deleted=false;paint();});function paint(){item.textContent=deleted?say('示例条目已删除','Example item deleted'):say('示例条目 A','Example item A');remove.disabled=deleted;undo.hidden=!deleted;}host.append(item,remove,undo);paint();return true;
 }

 if(it.demo==='card'&&['interactive','selectable'].includes(kind)){
  const card=btn(say('示例项目 A','Example project A'),()=>{if(kind==='selectable'){const selected=card.getAttribute('aria-pressed')!=='true';card.setAttribute('aria-pressed',String(selected));note(selected?say('已选中','Selected'):say('未选中','Not selected'));}else note(say('项目 A 的详情已展开；没有离开示例。','Details of project A opened inside this example.'));});if(kind==='selectable')card.setAttribute('aria-pressed','false');card.className='card-mini';host.append(card,output);return true;
 }
 if(it.demo==='saas'&&['conv','chat','prompt','tool','suggest','cite','query','facet','filterbar'].includes(kind)){
  if(kind==='chat'||kind==='prompt'){const list=el('div');const input=el('textarea',{'aria-label':say('示例消息','Example message'),placeholder:say('输入一条测试消息','Enter a test message')});const submit=btn(say('加入本地对话','Add to local conversation'),()=>{if(!input.value.trim()){note(say('请先填写消息','Enter a message first'));return;}list.append(el('p',{class:'bubble me'},input.value));input.value='';note(say('只添加本地消息，没有调用 AI 或发送网络请求。','Local message added; no AI call or network request.'));});host.append(list,input,submit,output);return true;}
  if(kind==='tool'){host.append(el('details',{},[el('summary',{},say('示例工具调用 · 已完成','Example tool call · completed')),el('pre',{},'Input: { query: "demo" }\nOutput: { count: 3 }'),el('p',{},say('固定示例记录，不是真实执行。','A fixed example record, not a real execution.'))]));return true;}
  if(kind==='conv'){['A','B'].forEach(n=>host.append(btn(say('对话 ','Conversation ')+n,()=>note(say('当前对话：','Current conversation: ')+n))));host.append(output);return true;}
  if(kind==='suggest'){const input=el('textarea',{'aria-label':say('当前输入','Current input')});host.append(input,...[say('解释这段','Explain this'),say('整理成表格','Format as a table')].map(v=>btn(v,()=>{input.value=v;input.focus();})));return true;}
  if(kind==='cite'){const details=el('details',{},[el('summary',{},say('来源 1 · 示例','Source 1 · example')),el('p',{},say('这里显示被引用的材料片段与出处，不跳转到虚构来源。','This area displays an excerpt and attribution; no fictional source link.'))]);host.append(details);return true;}
  const input=el('input',{type:'search','aria-label':say('筛选名称','Filter by name')});const select=el('select',{'aria-label':say('状态条件','Status condition')},['All','Open','Done'].map(v=>el('option',{},v)));const rows=[{name:'Alpha',state:'Open'},{name:'Beta',state:'Done'}];const list=el('ul');function filter(){const found=rows.filter(r=>r.name.toLowerCase().includes(input.value.toLowerCase())&&(select.value==='All'||r.state===select.value));list.replaceChildren(...found.map(r=>el('li',{},r.name+' · '+r.state)));note(found.length?say('匹配记录：','Matching records: ')+found.length:say('没有匹配，请放宽条件。','No matches; relax the filters.'));}input.addEventListener('input',filter);select.addEventListener('change',filter);host.append(row([input,select]),list,output);filter();return true;
 }
 return false;
}
