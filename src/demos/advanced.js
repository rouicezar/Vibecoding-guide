// Focused follow-on exercises: real local state; no network, filesystem or code execution.
function advancedDemo(host,it){
 const id=it.id,en=document.documentElement.lang==='en',say=(a,b)=>en?b:a;
 const el=(tag,attrs={},children=[])=>$(tag,attrs,children),button=(text,fn)=>el('button',{class:'ui-btn secondary',onclick:fn},text);
 const output=el('p',{role:'status',class:'hint'});const note=text=>{output.textContent=text;};
 const field=(label,input)=>el('label',{},[label,input]);
 if(['ly-res','ly-splitr','ly-rss'].includes(id)){
  let width=38;const left=el('div',{class:'advanced-left'},say('文件列表','Files')),right=el('div',{class:'advanced-right'},say('编辑区域','Editor'));
  const separator=el('div',{role:'separator',tabindex:0,'aria-label':say('调整分栏宽度','Resize panels'),'aria-orientation':'vertical','aria-valuemin':20,'aria-valuemax':70,class:'advanced-separator'});
  const group=el('div',{class:'advanced-split'},[left,separator,right]);const update=v=>{width=Math.max(20,Math.min(70,v));left.style.width=width+'%';separator.setAttribute('aria-valuenow',String(Math.round(width)));note(Math.round(width)+'%');};
  separator.addEventListener('pointerdown',e=>{separator.setPointerCapture(e.pointerId);});separator.addEventListener('pointermove',e=>{if(!separator.hasPointerCapture(e.pointerId))return;const r=group.getBoundingClientRect();update((e.clientX-r.left)/r.width*100);});separator.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();update(e.key==='Home'?20:e.key==='End'?70:width+(e.key==='ArrowLeft'?-5:5));});
  host.append(group,output);update(width);return true;
 }
 if(id==='dk-float'){
  let x=10,y=10;const workspace=el('div',{class:'advanced-workspace'}),handle=button(say('拖动或用方向键移动','Drag or move with arrow keys'),()=>{}),panel=el('div',{class:'advanced-float'},[handle,el('p',{},say('浮动面板','Floating panel'))]);workspace.append(panel);host.append(workspace,output);
  const update=(nx,ny)=>{x=Math.max(0,Math.min(workspace.clientWidth-panel.offsetWidth,nx));y=Math.max(0,Math.min(workspace.clientHeight-panel.offsetHeight,ny));panel.style.left=x+'px';panel.style.top=y+'px';note(Math.round(x)+', '+Math.round(y));};let start;
  handle.addEventListener('pointerdown',e=>{start={x:e.clientX,y:e.clientY,ox:x,oy:y};handle.setPointerCapture(e.pointerId);});handle.addEventListener('pointermove',e=>{if(start&&handle.hasPointerCapture(e.pointerId))update(start.ox+e.clientX-start.x,start.oy+e.clientY-start.y);});handle.addEventListener('keydown',e=>{if(!e.key.startsWith('Arrow'))return;e.preventDefault();update(x+({ArrowLeft:-10,ArrowRight:10}[e.key]||0),y+({ArrowUp:-10,ArrowDown:10}[e.key]||0));});new ResizeObserver(()=>update(x,y)).observe(workspace);return true;
 }
 if(id==='dk-dock'){
  const area=el('div',{class:'advanced-dock'}),panel=el('aside',{},say('工具面板','Tools')),content=el('div',{class:'advanced-content'},say('工作区','Workspace'));
  const position=el('select',{'aria-label':say('停靠位置','Dock position')},[['left',say('左侧','Left')],['right',say('右侧','Right')],['bottom',say('底部','Bottom')]].map(([value,label])=>el('option',{value},label)));
  const update=()=>{area.dataset.edge=position.value;area.replaceChildren(...(position.value==='left'?[panel,content]:[content,panel]));note(position.options[position.selectedIndex].text);};position.addEventListener('change',update);host.append(field(say('停靠位置','Dock position'),position),area,output);update();return true;
 }
 if(id==='tabs-draggable'){
  let items=['A','B','C'],selected='A';const bar=el('div',{role:'tablist','aria-label':say('可重排标签','Reorderable tabs'),class:'advanced-tabs'}),panel=el('div',{role:'tabpanel',tabindex:0});
  const move=delta=>{const from=items.indexOf(selected),to=from+delta;if(to<0||to>=items.length)return;items.splice(to,0,items.splice(from,1)[0]);paint();};
  const previous=button(say('左移选中标签','Move selected tab left'),()=>move(-1)),next=button(say('右移选中标签','Move selected tab right'),()=>move(1));
  function paint(){clear(bar);items.forEach((name,i)=>{const b=el('button',{role:'tab',id:'advanced-tab-'+name,'aria-controls':'advanced-panel','aria-selected':String(name===selected),tabindex:name===selected?0:-1,draggable:true},name);b.addEventListener('click',()=>{selected=name;paint();});b.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight'].includes(e.key))return;e.preventDefault();selected=items[(i+(e.key==='ArrowLeft'?-1:1)+items.length)%items.length];paint();bar.querySelector('[aria-selected=true]').focus();});b.addEventListener('dragstart',e=>e.dataTransfer.setData('text/plain',name));b.addEventListener('dragover',e=>e.preventDefault());b.addEventListener('drop',e=>{e.preventDefault();const from=items.indexOf(e.dataTransfer.getData('text/plain'));if(from<0)return;items.splice(i,0,items.splice(from,1)[0]);paint();});bar.append(b);});panel.id='advanced-panel';panel.setAttribute('aria-labelledby','advanced-tab-'+selected);panel.textContent=say('当前内容：','Current content: ')+selected;previous.disabled=items.indexOf(selected)===0;next.disabled=items.indexOf(selected)===items.length-1;note(items.join(' → '));}
  host.append(bar,panel,previous,next,output);paint();return true;
 }
 if(id==='mn-ctx'){
  const area=el('div',{class:'advanced-context',tabindex:0},say('在这里右键，或使用打开菜单按钮。','Right-click here or use the Open menu button.'));
  const open=button(say('打开菜单','Open menu'),()=>show()),menu=el('div',{class:'advanced-menu',role:'menu',hidden:true,'aria-label':say('示例操作','Example actions')});
  function hide(){menu.hidden=true;open.setAttribute('aria-expanded','false');open.focus();}function show(){menu.hidden=false;open.setAttribute('aria-expanded','true');menu.querySelector('button').focus();}
  [say('查看详情','View details'),say('重命名示例','Rename example')].forEach(text=>{const b=button(text,()=>{note(text);hide();});b.setAttribute('role','menuitem');menu.append(b);});
  menu.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();hide();}if(['ArrowDown','ArrowUp'].includes(e.key)){e.preventDefault();const bs=[...menu.querySelectorAll('button')];bs[(bs.indexOf(document.activeElement)+(e.key==='ArrowDown'?1:-1)+bs.length)%bs.length].focus();}});area.addEventListener('contextmenu',e=>{e.preventDefault();show();});area.addEventListener('keydown',e=>{if(e.key==='ContextMenu'||(e.shiftKey&&e.key==='F10')){e.preventDefault();show();}});document.addEventListener('pointerdown',e=>{if(!menu.hidden&&!menu.contains(e.target)&&e.target!==open)hide();});host.append(area,open,menu,output);return true;
 }
 if(id==='sel-tree'){
  const selected=el('p',{role:'status'});[['Design',['Icons','Colors']],['Code',['Frontend','Backend']]].forEach(([name,children])=>{const details=el('details',{},el('summary',{},name));children.forEach(text=>{const radio=el('input',{type:'radio',name:'tree-choice','aria-label':text});radio.addEventListener('change',()=>selected.textContent=name+' / '+text);details.append(field(text,radio));});host.append(details);});host.append(selected);return true;
 }
 if(id==='nv-anchor'){
  const nav=el('nav',{'aria-label':say('段落导航','Section navigation')}),scroller=el('div',{class:'advanced-scroll',tabindex:0});['Overview','Details','Contact'].forEach((name,i)=>{const a=el('a',{href:'#section-'+i},name);a.addEventListener('click',e=>{e.preventDefault();const section=scroller.querySelector('#section-'+i);scroller.scrollTop=section.offsetTop-scroller.offsetTop;nav.querySelectorAll('a').forEach(link=>link.removeAttribute('aria-current'));a.setAttribute('aria-current','location');note(name);});nav.append(a);scroller.append(el('section',{id:'section-'+i},[el('h3',{},name),el('p',{},say('这是独立的内容段落。','This is a distinct content section.'))]));});host.append(nav,scroller,output);return true;
 }
 if(id==='ai-json'){
  const input=el('textarea',{'aria-label':say('JSON 内容','JSON content'),rows:3},'{"project":{"name":"Demo","active":true},"count":2}'),tree=el('div');
  function branch(key,value){if(value!==null&&typeof value==='object'){const d=el('details',{open:true},el('summary',{},key+(Array.isArray(value)?' [ ]':' { }')));Object.entries(value).forEach(([k,v])=>d.append(branch(k,v)));return d;}return el('p',{},key+': '+JSON.stringify(value));}
  const parse=()=>{try{const value=JSON.parse(input.value);tree.replaceChildren(branch('root',value));input.setAttribute('aria-invalid','false');note(say('解析成功','Parsed'));}catch{input.setAttribute('aria-invalid','true');note(say('JSON 格式不正确，请检查双引号、逗号和括号。保留上次有效结果。','Invalid JSON. Check quotes, commas and brackets. Previous valid tree is preserved.'));}};host.append(input,button(say('解析并查看层级','Parse and inspect'),parse),tree,output);parse();return true;
 }
 if(id==='ai-qb'||id==='ai-facet'){
  const rows=[{name:'Alpha',state:'Open',team:'Design'},{name:'Beta',state:'Done',team:'Code'},{name:'Gamma',state:'Open',team:'Code'}];const list=el('ul');let filter=()=>true;
  const render=()=>{const found=rows.filter(filter);list.replaceChildren(...found.map(r=>el('li',{},r.name+' · '+r.state+' · '+r.team)));note(found.length?say('匹配 ','Matches: ')+found.length:say('没有匹配，清除或放宽条件。','No matches; clear or relax conditions.'));};
  if(id==='ai-qb'){const property=el('select',{'aria-label':say('字段','Field')},['name','state','team'].map(x=>el('option',{},x))),operator=el('select',{'aria-label':say('比较方式','Operator')},['equals','contains'].map(x=>el('option',{},x))),value=el('input',{'aria-label':say('比较值','Value')});const apply=()=>{filter=r=>!value.value||(operator.value==='equals'?r[property.value]===value.value:r[property.value].toLowerCase().includes(value.value.toLowerCase()));render();};host.append(property,operator,value,button(say('应用条件','Apply condition'),apply));}
  else{const groups={state:new Set(),team:new Set()};Object.entries(groups).forEach(([key,choices])=>{const group=el('fieldset',{},el('legend',{},key));[...new Set(rows.map(r=>r[key]))].forEach(value=>{const input=el('input',{type:'checkbox','aria-label':value});input.addEventListener('change',()=>{input.checked?choices.add(value):choices.delete(value);filter=r=>Object.entries(groups).every(([key,set])=>set.size===0||set.has(r[key]));render();});group.append(field(value+' ('+rows.filter(r=>r[key]===value).length+')',input));});host.append(group);});}
  host.append(list,output,button(say('清除条件','Clear filters'),()=>{host.querySelectorAll('input').forEach(x=>{if(x.type==='checkbox')x.checked=false;else x.value='';x.dispatchEvent(new Event('change'));});filter=()=>true;render();}));render();return true;
 }
 if(['sp-mask','sp-phone','sp-cur','sp-url'].includes(id)){
  const input=el('input',{'aria-label':say('输入内容','Enter value'),type:'text'}),country=id==='sp-phone'?el('select',{'aria-label':say('国家区号','Country calling code')},['+86','+1','+44'].map(v=>el('option',{},v))):null;
  const validate=()=>{let value=input.value.trim(),valid=false,result='';if(id==='sp-mask'){const digits=value.replace(/\D/g,'').slice(0,10);input.value=digits.length>6?'('+digits.slice(0,3)+') '+digits.slice(3,6)+'-'+digits.slice(6):digits.length>3?'('+digits.slice(0,3)+') '+digits.slice(3):digits;valid=digits.length===10;result=valid?input.value:say('本例需要 10 位数字。','This example requires 10 digits.');}
   if(id==='sp-phone'){valid=/^\d{6,15}$/.test(value.replace(/[ -]/g,''));result=valid?country.value+' '+value:say('填写 6–15 位数字；这里只检查输入格式，不验证号码归属。','Enter 6–15 digits; format only, not number ownership.');}
   if(id==='sp-cur'){valid=/^\d+(\.\d{1,2})?$/.test(value)&&Number.isFinite(Number(value));result=valid?new Intl.NumberFormat(en?'en-US':'zh-CN',{style:'currency',currency:'CNY'}).format(Number(value)):say('请输入非负金额，最多两位小数。','Enter a non-negative amount with at most two decimal places.');}
   if(id==='sp-url'){try{const url=new URL(value);valid=['http:','https:'].includes(url.protocol)&&!!url.hostname;result=valid?url.href:say('只接受 http 或 https 地址。','Only http or https URLs are accepted.');}catch{result=say('请输入含 https:// 的完整地址。','Enter a complete URL including https://.');}}
   input.setAttribute('aria-invalid',String(!valid));note(result);};
  if(country)host.append(country);host.append(input,button(say('检查格式','Check format'),validate),output);return true;
 }
 if(id==='sp-mentions'){
  const input=el('textarea',{'aria-label':say('输入消息，可用 @ 提及','Message; use @ to mention'),rows:3}),list=el('div');const users=['Ada','Lin','Sam'];
  const update=()=>{clear(list);const before=input.value.slice(0,input.selectionStart),match=before.match(/@([a-z]*)$/i);if(!match)return;const names=users.filter(name=>name.toLowerCase().startsWith(match[1].toLowerCase()));if(!names.length)list.textContent=say('没有匹配用户','No matching user');names.forEach(name=>list.append(button(name,()=>{const end=input.selectionStart;input.value=input.value.slice(0,end-match[0].length)+'@'+name+' '+input.value.slice(end);list.replaceChildren();input.focus();note(say('已插入本地提及，不会发送通知。','Local mention inserted; no notification sent.'));})));};input.addEventListener('input',update);host.append(input,list,output);return true;
 }
 if(['sp-md','sp-code','sp-rte'].includes(id)){
  if(id==='sp-rte'){const editor=el('div',{contenteditable:'true',role:'textbox','aria-multiline':'true','aria-label':say('富文本内容','Rich text content'),class:'advanced-editor'},say('选中一些文字，再使用加粗或斜体。','Select text, then use Bold or Italic.'));
   const toolbar=el('div');[['strong',say('加粗','Bold')],['em',say('斜体','Italic')]].forEach(([tag,label])=>{const b=button(label,()=>{const selection=getSelection();if(!selection.rangeCount||selection.isCollapsed||!editor.contains(selection.anchorNode)||!editor.contains(selection.focusNode)){note(say('请先选中编辑区内的文字。','Select text inside the editor first.'));return;}const range=selection.getRangeAt(0),wrapper=el(tag);wrapper.append(range.extractContents());range.insertNode(wrapper);note(say('已格式化选中文字。','Selected text formatted.'));});b.addEventListener('mousedown',e=>e.preventDefault());toolbar.append(b);});host.append(toolbar,editor,output);return true;}
  const input=el('textarea',{'aria-label':id==='sp-md'?'Markdown':'Code',rows:5},id==='sp-md'?'# Demo\n\n**Bold text**\n- One item':'const message = "Hello";'),preview=el('div',{class:'advanced-preview'});
  function render(){clear(preview);if(id==='sp-code'){const pre=el('pre');input.value.split('\n').forEach((line,i)=>pre.append(el('div',{},[el('span',{class:'line-number'},String(i+1)),document.createTextNode(line)])));preview.append(pre);note(say('只显示代码与行号，不执行代码。','Code and line numbers only; code is not executed.'));return;}
   input.value.split('\n').forEach(line=>{const heading=line.match(/^(#{1,3}) (.*)$/),bullet=line.startsWith('- '),node=el(heading?'h'+heading[1].length:bullet?'li':'p');const text=heading?heading[2]:bullet?line.slice(2):line;let cursor=0;for(const match of text.matchAll(/\*\*([^*]+)\*\*/g)){node.append(document.createTextNode(text.slice(cursor,match.index)),el('strong',{},match[1]));cursor=match.index+match[0].length;}node.append(document.createTextNode(text.slice(cursor)));preview.append(bullet?el('ul',{},node):node);});note(say('支持标题、加粗、列表和段落；HTML 按文字显示。','Headings, bold, lists and paragraphs; HTML remains plain text.'));}
  input.addEventListener('input',render);host.append(input,preview,output);render();return true;
 }
 return false;
}
