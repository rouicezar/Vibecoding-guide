import {projects,type Copy,type ProjectKey} from './site';
export const projectProblems:Record<ProjectKey,{question:Copy;check:Copy;yes:Copy;no:Copy}[]>={
web:[
{question:['按钮看起来能点，却没结果','A button looks clickable but does nothing'],check:['点击后是否出现加载、成功或失败信息？记录实际页面和点击步骤。','Does clicking show loading, success, or an error? Record the page and steps.'],yes:['有失败信息 → 把原文和发生时间交给 AI，要求先复现再修复。','An error appears → give AI its exact text and time; reproduce it before fixing.'],no:['完全无反馈 → 要求 AI 检查按钮是否接上真实操作；不要用成功提示替代真实保存。','No feedback → ask AI to inspect whether a real action is connected. A success message must not replace persistence.']},
{question:['手机上内容挤在一起','Content is cramped on a phone'],check:['缩窄页面后是否有横向滚动或按钮被遮挡？','Does a narrow page scroll sideways or hide buttons?'],yes:['提供设备宽度和截图，让 AI 只修正排列；复查长标题和输入框。','Provide viewport width and a screenshot; request a layout-only fix, then recheck long headings and inputs.'],no:['没有溢出但难操作 → 实际用手指点击，记录间距或字重问题再调整。','No overflow but hard to use → try finger input and record spacing or readability issues.']}],
mobile:[
{question:['关闭重开后记录不见了','Entries disappear after reopening'],check:['新建一条测试记录，退出重开；是否仍能找到？','Create a test entry, close the app, and reopen. Is it still present?'],yes:['继续检查断网与更新后记录是否保留；每项分别记录。','Next check offline use and preservation after an update; record each separately.'],no:['暂停录入真实资料，提供设备、版本和步骤，让 AI 检查保存位置与写入结果。','Pause real-data entry and give AI the device, version, and steps to inspect storage location and write results.']},
{question:['拒绝权限后无法继续','Declining permission blocks the app'],check:['拒绝相机等权限后，是否还能返回并使用不依赖该权限的功能？','After declining camera or other permission, can the app return to unrelated features?'],yes:['再允许权限后复测，确认原记录没有被重置。','Allow permission and retest, checking that existing entries were not reset.'],no:['要求 AI 提供拒绝说明和返回路径，不反复强制弹窗或要求全部权限。','Ask AI for an explanation and exit path; avoid repeated prompts or demanding every permission.']}],
desktop:[
{question:['批量处理结果不符合预期','Batch processing produces unexpected results'],check:['先对三个文件的副本预览旧名、新名和目标位置；是否符合预期？','Preview old names, new names, and destinations for three file copies. Are they correct?'],yes:['执行小批操作再对照；确认原件保留和取消有效后才扩大批次。','Run the small batch and compare; increase size only after originals and cancellation are verified.'],no:['停止执行，提供副本目录和预期对照，先修正规则；不直接覆盖原件。','Stop, provide the copy folder and expected mapping, and correct the rule before touching originals.']},
{question:['另一台电脑打不开','The app does not open on another computer'],check:['记录系统版本、安装包版本和完整提示；是否仅目标电脑失败？','Record OS, package version, and full message. Does only the target machine fail?'],yes:['让 AI 核对对应系统构建、签名和依赖，不能要求关闭系统保护作为通用解法。','Have AI check target builds, signing, and dependencies; disabling system protection is not a general fix.'],no:['本机也失败 → 回到最近可运行版本并检查启动记录。','If the build also fails locally, return to the last working version and inspect startup records.']}],
'mini-program':[
{question:['开发预览可用，平台里不行','Development preview works but the platform does not'],check:['使用相同测试账号，在所选平台真实入口重做主要流程，记录失败步骤。','Repeat the main flow with the same test account inside the selected platform and record the failing step.'],yes:['若能完成 → 继续核对不同身份和正式发布入口，预览通过不等于发布完成。','If it completes, check other identities and the release entry; preview success is not a release.'],no:['若失败 → 核对当前平台账号、允许的能力与请求配置；用该平台官方规则排查。','If it fails, check account eligibility, allowed features, and request configuration against that platform’s official rules.']},
{question:['提交审核后是否已经上线','Does review submission mean release is complete'],check:['平台状态是否明确显示已正式发布，并提供普通使用者可访问的入口？','Does the platform explicitly show a released version and provide an entry ordinary users can access?'],yes:['用非开发者身份从正式入口完成报名，再记录实际结果。','Complete a sign-up from the release entry as a non-developer and record the result.'],no:['仍在审核或待发布 → 保持未上线状态，处理平台反馈并等待发布决定。','Under review or pending release → keep status unreleased, address feedback, and await a release decision.']}]
};
export function projectPrompt(id:ProjectKey):Copy{
 const p=projects.find(p=>p.id===id)!;
 return [`【背景】以${p.example[0]}为示例，开始前把示例替换为实际项目。
【给谁用】${p.audience[0]}；具体使用者：尚未确定，请先确认。
【问题】${p.exampleDesc[0]}
【第一版目标】${p.result[0]}
【输入】已填写的想法草稿、确认的范围、已有项目位置与最近验证记录；未提供时先索取。
【约束】预算和目标设备尚未确定；不加入未经确认的登录、付款或通知，不覆盖已有资料。
【执行顺序】
${p.steps.map((s,i)=>`${i+1}. ${s.title[0]}：${s.desc[0]} 完成依据：${s.outcome[0]}`).join('\n')}
【输出】先整理范围与待确认问题，再给出带状态的分批计划；每次交付可实际打开的小版本、启动方法、检查步骤和实际结果。
【缺失信息】先问一个会影响选择的关键问题，未知不当作已满足；平台规则引用当前官方来源及核验日期。
【完成检查】${p.checks.map(x=>x[0]).join('；')}。测试资料、设备、版本和结果分别记录；没有执行则标待验证。
【安全与下一步】保留可恢复版本；费用、删除资料、扩大权限和正式发布需确认。试用失败回到对应任务，修复后重新检查。`,
`[Background] Use ${p.example[1]} as the example; replace it with the actual project before starting.
[Audience] ${p.audience[1]}; actual end users are undecided and must be clarified.
[Problem] ${p.exampleDesc[1]}
[First-version goal] ${p.result[1]}
[Inputs] Completed idea worksheet, agreed scope, project location, and recent check results. Request any missing material.
[Constraints] Budget and devices are undecided. Do not add unapproved sign-in, payments, or notifications, or overwrite existing data.
[Sequence]
${p.steps.map((s,i)=>`${i+1}. ${s.title[1]}: ${s.desc[1]} Evidence: ${s.outcome[1]}`).join('\n')}
[Output] Clarify scope and open questions, then produce a staged plan with statuses. Deliver small usable versions with start commands, checks, and observed results.
[Missing information] Ask one decision-changing question first. Do not treat unknowns as satisfied conditions. Cite current official platform sources and check dates.
[Acceptance] ${p.checks.map(x=>x[1]).join('; ')}. Record test data, device, version, and results separately. Mark unexecuted checks as unverified.
[Recovery and next steps] Preserve a recoverable version. Confirm costs, deletion, expanded access, and release. Return failed checks to the relevant task and retest after repair.`];
}
