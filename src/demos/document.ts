import legacy from './legacy.js?url';
import advanced from './advanced.js?url';
import improvements from './improvements.js?url';
import styles from './legacy.css?url';
import skin from './skin.css?url';
export function demoDocument(
  entry: { id: string; demo: string; opts: object; en: string },
  locale: string,
) {
  const json = JSON.stringify(entry).replace(/</g, '\\u003c');
  return `<!doctype html><html lang="${locale}" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src data: blob:; connect-src 'none'; form-action 'none'"><link rel="stylesheet" href="${styles}"><link rel="stylesheet" href="${skin}"></head><body><main id="example" class="demo"></main><button id="restart" type="button">${locale === 'en' ? 'Restart example' : '重新开始示例'}</button><p id="runtime-status" role="status"></p><script src="${legacy}"></script><script src="${improvements}"></script><script src="${advanced}"></script><script>
const entry=${json};const host=document.getElementById('example');
window.addEventListener('error',()=>{document.getElementById('runtime-status').textContent=${JSON.stringify(locale === 'en' ? 'Example failed. Reload to retry.' : '演示出错，请重新加载。')};document.body.dataset.state='error';});
function render(){clear(host);if(!advancedDemo(host,entry)&&!enhancedDemo(host,entry))mountDemo(host,entry);document.body.dataset.state='ready';}
render();document.getElementById('restart').onclick=()=>location.reload();
// Expose genuinely clickable non-button examples to keyboard users.
function labelControls(){host.querySelectorAll('button').forEach((b,i)=>{if(!b.textContent.trim()&&!b.getAttribute('aria-label'))b.setAttribute('aria-label',({settings:'设置 / Settings',plus:'添加 / Add',eye:'显示或隐藏 / Show or hide',chevU:'增加 / Increase',chevD:'展开 / Expand',moreV:'更多 / More',moreH:'更多 / More',x:'关闭 / Close',trash:'删除示例 / Delete example',star:'评分 / Rating',chevL:'上一项 / Previous',chevR:'下一项 / Next'})[b.querySelector('[data-icon]')?.getAttribute('data-icon')]||entry.en+' · '+(i+1));});host.querySelectorAll('input,textarea,select').forEach((e,i)=>{if(!e.labels?.length&&!e.getAttribute('aria-label'))e.setAttribute('aria-label',e.placeholder||entry.en+' · '+(i+1));});}
labelControls();new MutationObserver(labelControls).observe(host,{childList:true,subtree:true});
</script></body></html>`;
}
