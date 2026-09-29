import {t, type Locale, type Copy} from "./site.ts";
export const scenarios = [
{id:"first", title:["想法变第一版","Shape a first version"], task:["根据已填写的想法草稿，一次提出一个影响范围的问题，整理必做、暂缓和不做清单。","Use the completed idea worksheet. Ask one scope-changing question at a time; list essentials, deferred work, and exclusions."], example:["只需选择日期并提交预约，不做支付。","Select a date and submit a reservation; no payments."]},
{id:"plan", title:["先出方案","Plan before building"], task:["先比较两种可行做法的成本、限制和维护方式；等待范围确认再实施。","Compare two feasible approaches, costs, limits, and upkeep. Wait for scope confirmation before implementation."], example:["列出页面和制作顺序，暂不改文件。","List pages and build order; do not edit files yet."]},
{id:"page", title:["描述页面","Describe a page"], task:["按内容优先级描述页面结构、手机排列、加载、空白和失败状态。UI 是打开产品后看到和操作的界面。","Describe content hierarchy, mobile layout, loading, empty, and error states. UI means the interface people see and operate."], example:["预约页先显示日期，再显示余量和提交按钮。","Show the date, remaining capacity, and submit button in that order."]},
{id:"component", title:["描述组件","Describe a component"], task:["只实现指定界面控件，写清默认、选择、禁用和键盘操作的结果。","Implement only the specified interface control. Describe default, selected, disabled, and keyboard behavior."], example:["日期选择器禁止选择过去日期，选中后显示完整日期。","Disable past dates in the date picker and display the selected full date."]},
{id:"reference", title:["参考图片","Use a reference image"], task:["先描述实际可见的结构、间距和状态；把图片无法证明的交互列为问题，不复制图片中的个人资料。","Describe visible structure, spacing, and states. Ask about interactions the image cannot prove; do not copy personal data from it."], example:["参考附图的排列，保留现有品牌颜色和文案。","Use the attached layout while retaining current brand colors and copy."]},
{id:"change", title:["只修改一个地方","Change one thing"], task:["先定位目标和影响范围，只做这一项修改；保留其余行为与现有未提交工作。","Locate the target and affected behavior. Make only this change and preserve other behavior and existing uncommitted work."], example:["把预约按钮改为“确认日期”，不改预约逻辑。","Rename the reservation button to “Confirm date” without changing reservation logic."]},
{id:"report", title:["反馈问题","Report an issue"], task:["根据复现步骤、预期和实际结果定位问题，先确认能否重现，再提出最小修复。","Use reproduction steps, expected behavior, and actual results. Confirm reproducibility before proposing the smallest fix."], example:["选择日期后点击提交没有反馈；预期出现预约编号。","Submitting a selected date gives no feedback; a reservation number is expected."]},
{id:"diagnose", title:["先排查","Investigate first"], task:["先收集证据和提出原因假设，不把猜测写成结论；每个检查给出结果分支与停止条件。","Gather evidence and propose hypotheses without presenting guesses as conclusions. Give result branches and stop conditions for each check."], example:["刷新后预约不见了，先检查保存与读取记录。","Reservations disappear after refresh; inspect save and retrieval records first."]},
{id:"recover", title:["防止越改越乱","Recover a stable version"], task:["先汇总已尝试改动和证据，找到可恢复版本；说明恢复影响，保留当前材料，再安排单项修复。","Summarize attempted changes and evidence, identify a recoverable version, explain restoration impact, preserve current material, and plan one fix."], example:["第二次修改后日期也无法选择，先梳理变化。","The date picker stopped working after the second change; review the changes first."]},
{id:"verify", title:["检查完成","Check completion"], task:["逐项对照约定的完成标准，记录执行动作、实际结果与未验证项；构建成功不等于使用流程成功。","Check agreed acceptance criteria and record actions, observed results, and unverified items. A successful build does not prove the user flow works."], example:["完成一次预约，刷新后仍能查看；空日期不能提交。","Complete a reservation and find it after refresh; reject an empty date."]},
{id:"handoff", title:["新会话接手","Hand off to a new conversation"], task:["整理目标、范围、文件位置、启动方法、当前状态、验证记录和下一步；新会话先核对原文件再继续。","Summarize goals, scope, file locations, start commands, status, checks, and next steps. The next conversation must verify original files before continuing."], example:["预约页已完成，保存功能待验证，接下来先复测。","The reservation page is built; persistence is unverified. Test it next."]},
{id:"release", title:["上线前确认","Review before release"], task:["整理待发布版本、正式入口、费用、数据处理、验收与恢复办法；列出阻塞项，等待明确发布决定。","Identify the release version, public entry, costs, data handling, acceptance checks, and recovery steps. List blockers and wait for a release decision."], example:["先在测试地址完成预约，不发送真实通知；暂不发布。","Complete a reservation at the test address without real notifications; do not publish yet."]},
] satisfies {id:string;title:Copy;task:Copy;example:Copy}[];
export function makePrompt(index:number,locale:Locale,values?:string[]){
 const scene=scenarios[index];
 const defaults=[t(['填写项目用途、当前进度与已有页面。','Enter the purpose, current progress, and existing page.'],locale),t(['填写项目面向的人群，以及他们希望通过项目完成的事情。','Enter the intended users.'],locale),t(['填写当前问题和希望达到的结果；参考上方单独标明的例子。','Enter the current problem and desired result; refer to the separately labeled example above.'],locale),t(['粘贴已确认范围、相关截图或复现步骤；未提供的材料请先索取。','Attach agreed scope, relevant screenshots, or reproduction steps; request missing material first.'],locale),t(['只做本次目标；预算与发布时间尚未确定。','Limit work to this goal; budget and release date are undecided.'],locale)];
 const v=values??defaults.map(value=>locale==='zh-cn'?`【${value}】`:`[${value}]`);
 return locale==='zh-cn'?`【项目现在做到哪一步】${v[0]}
【这个项目主要给谁使用】${v[1]}
【现在遇到什么问题，希望解决后变成什么样】${v[2]}
【有哪些文件、截图或操作记录可以提供】${v[3]}
【这次有什么限制，哪些内容不要改】${v[4]}

本次任务：${scene.task[0]}
请按以下方式配合：
1. 先复述目标、范围与完成标准；区分事实、推断和未知项。
2. 缺少会改变结果的材料时，先提出一个关键问题，不自行编造。
3. 输出具体操作顺序、预期交付物和检查办法，用普通话解释专业词。
4. 实施前保留可恢复版本；删除资料、付费、扩大权限或发布前等待确认。
5. 交付时列出改动、实际检查动作、结果、未验证项和下一步。
【检查标准】逐项核对上述目标；正常操作与失败情况都有明确结果。若无法实际执行，明确标记建议或待验证，不宣称已完成。`:`[What stage has the project reached] ${v[0]}
[Who will use the project] ${v[1]}
[What is wrong now, and what should happen instead] ${v[2]}
[What files, screenshots or steps are available] ${v[3]}
[What are the limits, and what should stay unchanged] ${v[4]}

Task: ${scene.task[1]}
Working instructions:
1. Restate the goal, scope, and acceptance criteria; separate facts, inferences, and unknowns.
2. Ask one essential question when missing material could change the result. Do not invent details.
3. Provide actionable steps, deliverables, and checks. Explain technical words in plain language.
4. Preserve a recoverable version before changes. Await confirmation before deleting data, spending money, expanding access, or publishing.
5. Report changes, actual checks, observed results, unverified items, and the next step.
[Acceptance] Check the stated goal item by item, including normal and failure cases. If execution is unavailable, label the output as advice or unverified work rather than complete.`;
}
