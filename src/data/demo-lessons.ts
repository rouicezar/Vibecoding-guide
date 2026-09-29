import { advancedLessons } from './advanced-lessons.ts';
import type { Copy } from './site';
export const demoLessons: Record<string, { action: Copy; check: Copy }> = {
  tabs: {
    action: [
      '切换两个栏目，再回到第一个；关闭或拖动变体可试对应操作。',
      'Switch panels and return; try closing or dragging where shown.',
    ],
    check: [
      '选中项与内容一致；关闭后仍有可用入口。',
      'Selection matches content and closing preserves a usable entry.',
    ],
  },
  stepper: {
    action: [
      '依次点下一步，再退回；观察编号和当前阶段。',
      'Advance and go back; observe the current stage.',
    ],
    check: [
      '当前步骤清楚，首尾按钮不会越界。',
      'Current stage is clear and boundaries cannot be exceeded.',
    ],
  },
  button: {
    action: [
      '点一次操作，观察反馈；开关型再点一次，菜单型选择一项。',
      'Activate once and observe feedback; toggle again or choose a menu action.',
    ],
    check: [
      '能区分动作、状态和禁用；演示反馈不等于业务已执行。',
      'Distinguish action, state and disabled controls; demo feedback is not a real operation.',
    ],
  },
  input: {
    action: [
      '填写、清空，再输入一段自己的内容；密码可切换显隐。',
      'Enter, clear and re-enter text; toggle password visibility if available.',
    ],
    check: [
      '输入值可见、可修改；需要校验时提示明确。',
      'The value can be changed and validation is understandable when present.',
    ],
  },
  select: {
    action: [
      '打开选项，选择后再修改；搜索型试一个不存在的词。',
      'Open options, choose and change; search for a missing value where supported.',
    ],
    check: [
      '选中值明确，找不到选项时不会误选。',
      'Selected value is clear and no-match does not select an unrelated value.',
    ],
  },
  selection: {
    action: [
      '选择、取消，再用 Tab 与空格操作。',
      'Select and deselect, then try Tab and Space.',
    ],
    check: [
      '单选只保留一项；多选和三态能表达实际状态。',
      'Radio keeps one value; multiple and mixed selections reflect state.',
    ],
  },
  slider: {
    action: [
      '拖动数值，也试方向键；范围型调整两个端点。',
      'Drag or use arrow keys; adjust both ends of a range.',
    ],
    check: [
      '数字与位置一致，端点顺序和步长符合需要。',
      'Number and position agree; endpoints and increments are appropriate.',
    ],
  },
  datetime: {
    action: [
      '选择实际日期或时间；范围型故意把结束设在开始之前。',
      'Choose a date/time; deliberately reverse a date range.',
    ],
    check: [
      '显示所选值，倒置范围被指出；真实项目另核对时区。',
      'Value is shown and reversed ranges are flagged; verify timezone separately.',
    ],
  },
  special: {
    action: [
      '输入测试内容并修改；检查词条要求的格式、评分或预览变化。',
      'Enter and edit test values; inspect formatting, rating or preview changes.',
    ],
    check: [
      '输入与显示对应；验证码、编辑器只是本地界面示例。',
      'Input matches display; verification and editors are local interface examples.',
    ],
  },
  upload: {
    action: [
      '选择一个不含私人资料的测试文件，观察文件名；支持拖放时也试拖放。',
      'Choose a non-sensitive test file and inspect its name; try dropping if offered.',
    ],
    check: [
      '只演示本地选择，没有上传；真实上传还需失败、取消与大小限制。',
      'Local selection only, no upload; real integration needs failure, cancellation and size limits.',
    ],
  },
  menu: {
    action: [
      '展开并选择一项；右键菜单可在区域内右键。',
      'Open and choose an option; use the context area for a context menu.',
    ],
    check: [
      '选项与当前任务相关；关键操作要有触屏和键盘入口。',
      'Actions fit the task; essential actions need touch and keyboard entry points.',
    ],
  },
  nav: {
    action: [
      '切换入口或页码，观察当前位置。',
      'Switch destinations or pages and observe position.',
    ],
    check: [
      '能辨认当前位置；示例切换不代表真实路由已经实现。',
      'Current position is clear; this does not implement application routing.',
    ],
  },
  card: {
    action: [
      '观察标题、描述与状态；只有可点击或可选中卡片需要操作。',
      'Inspect heading, description and state; interact only with actionable/selectable cards.',
    ],
    check: [
      '信息优先级清晰，不把纯展示卡片伪装成按钮。',
      'Hierarchy is clear; display-only cards do not imply a button action.',
    ],
  },
  data: {
    action: [
      '先读行列；按本词条试排序、编辑、展开、切图或拖动。',
      'Read rows/columns; try sorting, editing, expanding, images or dragging for this variant.',
    ],
    check: [
      '变化对应所选记录；静态时间线和甘特示意无需假装可操作。',
      'Changes affect the chosen record; static timelines and Gantt illustrations need no fake actions.',
    ],
  },
  tag: {
    action: [
      '区分类别、数量和状态；可关闭或筛选的类型再试点击。',
      'Distinguish categories, counts and status; click removable/filtering variants.',
    ],
    check: [
      '不会只靠颜色表达含义；静态标签不冒充筛选器。',
      'Meaning is not color-only and static tags do not imply filtering.',
    ],
  },
  accordion: {
    action: [
      '展开再收起，检查是否遮住其他操作。',
      'Expand and collapse, checking surrounding actions.',
    ],
    check: [
      '展开状态明确，重要结果不藏在无提示的折叠里。',
      'Expansion is clear and important results are not silently hidden.',
    ],
  },
  overlay: {
    action: [
      '打开、关闭，再用 Escape；悬停内容也试键盘聚焦。',
      'Open/close and use Escape; try keyboard focus for hover content.',
    ],
    check: [
      '关闭回到触发器；阻断弹窗和非阻断气泡的行为不同。',
      'Closing restores focus; modal dialogs and nonmodal popovers differ.',
    ],
  },
  feedback: {
    action: [
      '触发或阅读提示，撤销型尝试撤销。',
      'Trigger/read feedback and try undo where shown.',
    ],
    check: [
      '能知道发生了什么及下一步；通知不证明真实数据保存。',
      'Understand what happened and what follows; a notice does not prove persistence.',
    ],
  },
  loading: {
    action: [
      '模拟推进或结束加载，观察等待与结果的切换。',
      'Advance or finish the simulated load and inspect the result.',
    ],
    check: [
      '已知进度显示百分比；未知进度不编造百分比。',
      'Known progress has a percentage; unknown progress does not invent one.',
    ],
  },
  empty: {
    action: [
      '读原因，再用创建、重试或返回操作。',
      'Read the cause and try create, retry or return.',
    ],
    check: [
      '空数据、失败与成功的下一步各不相同。',
      'Empty, failed and successful states have appropriate next actions.',
    ],
  },
  layout: {
    action: [
      '调整分栏或排列；尝试提供的按钮或方向键。',
      'Resize or reorder; try the buttons or arrow keys provided.',
    ],
    check: [
      '内容仍能读，调整不隐藏关键操作；拖动有替代方式。',
      'Content and key actions remain usable; dragging has an alternative.',
    ],
  },
  saas: {
    action: [
      '观察本词条表示的信息，再试搜索、展开、选择或编辑。',
      'Inspect the represented information, then search, expand, select or edit.',
    ],
    check: [
      '日志、模型输出、工具状态都是示例，不代表真实 AI 执行。',
      'Logs, model output and tool states are examples, not real AI execution.',
    ],
  },
  tree: {
    action: [
      '展开父项再收起，查看父子关系。',
      'Expand and collapse a parent to inspect hierarchy.',
    ],
    check: [
      '层级和选中目标明确；文件树不代表读取了电脑文件。',
      'Hierarchy and selection are clear; no computer files are read.',
    ],
  },
  mobile: {
    action: [
      '在触屏上试对应手势；也可以用示例按钮检查结果。',
      'Try the gesture on touch; use example buttons to inspect the result too.',
    ],
    check: [
      '手势不能是唯一入口；安全区域要在目标设备实测。',
      'Gestures need alternatives; safe areas require target-device testing.',
    ],
  },
  desktop: {
    action: [
      '切换面板或编辑器栏目，观察工作区变化。',
      'Switch panels or editor sections and inspect the workspace.',
    ],
    check: [
      '位置与操作可发现；演示不是实际桌面系统集成。',
      'Placement and actions are discoverable; no OS integration is demonstrated.',
    ],
  },
};
export const nativeDemoIds = [
  'tabs-underlined',
  'tabs-sliding',
  'btn-primary',
  'in-text',
  'sel-single',
  'sel-combo',
  'ck-switch',
  'sl-h',
  'ov-modal',
  'ov-drawer',
  'fb-toast',
  'da-table',
];
// A visual reference is useful without pretending it implements a complete widget.
export const visualDemoIds = [
  'cd-basic',
  'cd-elev',
  'cd-out',
  'cd-metric',
  'cd-media',
  'cd-h',
  'cd-dash',
  'da-dl',
  'da-time',
  'da-gantt',
  'da-sched',
  'da-mas',
  'tg-badge',
  'tg-tag',
  'tg-status',
  'tg-loz',
  'fb-alert',
  'fb-inline',
  'fb-banner',
  'fb-note',
  'ly-split',
  'ai-bub',
  'ai-term',
  'ai-diff',
  'ai-log',
  'ai-mdv',
  'mb-safe',
  'mb-nav',
  'mb-lg',
  'dk-3',
  'dk-ep',
  'dk-st',
];
export const limitedDemoIds = ['sp-rte', 'sp-md', 'sp-code'];
export function demoLevel(id: string) {
  return visualDemoIds.includes(id)
    ? 'visual'
    : limitedDemoIds.includes(id)
      ? 'simplified'
      : 'exercise';
}
const focused: Record<string, { action: Copy; check: Copy }> = {
  'da-kanban': {
    action: [
      '把卡片 A 从待办移到完成；可拖动，也可使用卡片上的选择框。',
      'Move card A from To do to Done by dragging or using its selector.',
    ],
    check: [
      '卡片只出现在目标列，原列不再保留副本。',
      'The card appears only in the destination column, without a duplicate.',
    ],
  },
  'da-dt': {
    action: [
      '点击 Count 表头两次，比较每次记录顺序。',
      'Click the Count header twice and compare row order.',
    ],
    check: [
      '数值按升序或降序排列，姓名仍与原数值对应。',
      'Values sort ascending/descending while names remain paired with them.',
    ],
  },
  'da-edit': {
    action: [
      '改写一个单元格，再点击其他位置。',
      'Edit a cell, then click elsewhere.',
    ],
    check: [
      '新内容留在原单元格，其他行不被改变。',
      'The new content stays in that cell without changing other rows.',
    ],
  },
  'da-grid': {
    action: [
      '用 Tab 聚焦单元格，再用方向键移动。',
      'Focus a cell with Tab and navigate with arrow keys.',
    ],
    check: [
      '焦点沿相邻单元格移动，边界不越出表格。',
      'Focus moves between adjacent cells without exceeding table bounds.',
    ],
  },
  'da-exp': {
    action: [
      '点击一条记录的加号，再点击一次收起。',
      'Expand one record with its plus button, then collapse it.',
    ],
    check: [
      '详情对应被点击的那条记录。',
      'Details belong to the selected record.',
    ],
  },
  'da-table': {
    action: [
      '对照列标题阅读每行的编号与状态。',
      'Read each row ID and status against its headers.',
    ],
    check: [
      '每列含义明确；这是静态表格，不提供排序或编辑。',
      'Columns are clear; this static table does not sort or edit.',
    ],
  },
  'da-car': {
    action: [
      '点下一张，再点上一张。',
      'Go to the next image, then the previous image.',
    ],
    check: [
      '大图与编号一起变化，并能回到原图。',
      'Image and number change together and can return.',
    ],
  },
  'da-gal': {
    action: [
      '点击下方不同编号的缩略入口。',
      'Choose different numbered thumbnails.',
    ],
    check: [
      '大图跟随选择改变，选中项可辨认。',
      'The main image changes with selection and the selected item is identifiable.',
    ],
  },
  'dt-range': {
    action: [
      '填写开始与结束日期，再把结束日期改到开始之前。',
      'Enter start/end dates, then reverse their order.',
    ],
    check: [
      '正常范围显示两个日期，倒置范围提示错误。',
      'Valid ranges show both dates; reversed ranges display an error.',
    ],
  },
  'ck-tri': {
    action: [
      '先只选 A，再选 B，最后取消全部选择。',
      'Select only A, then B, then deselect all.',
    ],
    check: [
      '父项分别显示部分选中、全选和未选中。',
      'The parent shows mixed, all and none respectively.',
    ],
  },
  'in-search': {
    action: [
      '输入 Alpha，再输入一个不存在的名称。',
      'Search Alpha, then a nonexistent name.',
    ],
    check: [
      '显示匹配项；无结果时有明确提示。',
      'Matching results appear; no-match is explicitly reported.',
    ],
  },
  'ai-chat': {
    action: [
      '填写一条测试消息，加入本地对话。',
      'Enter a test message and add it to the local conversation.',
    ],
    check: [
      '消息出现在本地列表；本演示没有调用模型。',
      'The message appears locally; this demo does not call a model.',
    ],
  },
  'ai-pr': {
    action: [
      '填写当前任务，再点加入本地对话。',
      'Enter a task and add it to the local conversation.',
    ],
    check: [
      '输入被加入示例，空内容不会提交；不产生真实模型回答。',
      'Nonempty input enters the example; no real model answer is produced.',
    ],
  },
  'ai-cb': {
    action: [
      '选中代码，再用 Ctrl+C 或 ⌘C 复制。',
      'Select the code, then press Ctrl+C or ⌘C.',
    ],
    check: [
      '代码可选择复制；“选中”不等于剪贴板写入成功。',
      'Code is selectable; selection alone does not prove clipboard success.',
    ],
  },
  'ai-snip': {
    action: [
      '点击选中代码，再按系统复制快捷键。',
      'Select the snippet, then use the system copy shortcut.',
    ],
    check: [
      '在自己的临时文本中粘贴核对内容。',
      'Paste into a temporary text document to verify the contents.',
    ],
  },
  'fb-snack': {
    action: ['删除示例条目，再点撤销。', 'Delete the example item, then Undo.'],
    check: [
      '条目重新出现；撤销完成后撤销入口收起。',
      'The item returns and the undo action is dismissed.',
    ],
  },
};
export function lessonFor(entry: {
  id: string;
  category: string;
  demo: string;
  opts?: { kind?: string };
}) {
  if (advancedLessons[entry.id]) return advancedLessons[entry.id];
  if (focused[entry.id]) return focused[entry.id];
  const kind = entry.opts?.kind;
  if (entry.demo === 'date')
    return {
      action: [
        '用浏览器日期控件选择所需值。此处使用原生控件，外观随浏览器变化。',
        'Choose a value with the browser date control; native appearance varies by browser.',
      ] as Copy,
      check: [
        '输出与选择一致；实际项目另行核对时区和允许范围。',
        'Output matches selection; verify timezone and allowed range in the actual project.',
      ] as Copy,
    };
  if (entry.demo === 'loading')
    return {
      action: (['bar', 'det', 'circ'].includes(kind || '')
        ? ['点击前进 20%，再重置。', 'Advance by 20%, then reset.']
        : [
            '点击模拟加载完成，观察内容出现。',
            'Simulate completion and observe the content.',
          ]) as Copy,
      check: [
        '等待状态能结束，显示实际结果；这里的进度仅由演示按钮推进。',
        'Waiting ends with content; progress here is advanced only by example controls.',
      ] as Copy,
    };
  if (entry.demo === 'file')
    return {
      action: [
        '使用选择框选一个测试文件，查看文件名与大小；不需要选择私人文件。',
        'Choose a test file and inspect its name and size; private files are unnecessary.',
      ] as Copy,
      check: [
        '文件信息与所选文件一致；这里只在本地选择，没有上传。',
        'Information matches the chosen file; it is selected locally, not uploaded.',
      ] as Copy,
    };
  if (entry.demo === 'tree')
    return {
      action: [
        '展开 src 或 project，再收起。',
        'Expand src or project, then collapse it.',
      ] as Copy,
      check: [
        '子项随父项展开显示；不读取实际文件或服务器资料。',
        'Children appear when the parent expands; no real files or server data are read.',
      ] as Copy,
    };
  if (entry.demo === 'table' && ['treetable', 'treegrid'].includes(kind || ''))
    return focused['da-exp'];
  if (entry.demo === 'layout' && ['drag', 'reorder'].includes(kind || ''))
    return {
      action: [
        '把 B 上移，再下移；也可拖动条目。',
        'Move B up and down, or drag an item.',
      ] as Copy,
      check: [
        '顺序真实改变，没有丢失或重复条目。',
        'Order changes without losing or duplicating items.',
      ] as Copy,
    };
  if (entry.demo === 'layout' && kind !== 'split')
    return {
      action: [
        '拖动分栏宽度滑块，或用方向键调整。',
        'Drag the width slider or use arrow keys.',
      ] as Copy,
      check: [
        '左栏宽度变化，右栏仍可见。此练习使用滑块调整，不演示原生分隔条拖动。',
        'The left width changes while the right remains visible. This exercise uses a slider, not native separator dragging.',
      ] as Copy,
    };
  return demoLessons[entry.category];
}
