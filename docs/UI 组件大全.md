这类资料非常有价值，而且我建议不要把它做成普通的“UI 组件大全”，而是直接做成一套：
《Vibe Coding UI 组件精准描述词典》
核心目的不是教大家 UI，而是解决一个非常具体的问题：
“我明明知道自己想要什么样的组件，但不知道它叫什么，所以没办法准确告诉 Codex / Claude Code / Cursor / Lovable / Bolt / v0。”

我查了 WAI-ARIA、Radix、Ant Design、Carbon、shadcn/ui、Atlassian 等主流设计系统。它们实际上已经形成了一套相当稳定的组件语言。例如 Tabs、Select、Combobox、Slider、Accordion、Dialog、Popover、Tooltip、Tree View 等名称在多个设计系统中高度一致。W3C
但你举的例子里有一个非常典型的问题，正好说明为什么值得做这套东西：
“线性滑块标签 linear slider”其实不建议这么叫。
因为在标准 UI 语言里：
Slider = 数值滑块，例如：
0 ━━━━━●━━━━ 100
W3C 对 Slider 的定义也是“在指定范围内选择一个值”。W3C
而你说的这种：
首页    项目    设置
        ━━━
细线跟着 Tab 滑动，应该叫：
Underlined Tabs / Line Tabs / Tabs with Sliding Indicator
所以这套词典真正应该解决的是：
“人类脑子里的样子 → 标准 UI 名称 → AI 能理解的 Prompt。”
下面我直接按照这个逻辑给你搭完整体系。
先定义统一的描述公式
以后粉丝不要只说：
给我做一个好看的标签。

而应该按照：
组件名称 + 视觉变体 + 结构 + 交互 + 状态 + 动效
六层描述。
例如：
Use horizontal underlined tabs with an animated sliding indicator. The active tab uses a 2px bottom border, inactive tabs use muted text, no card background, and the indicator smoothly slides between tabs.

中文：
使用横向下划线标签页，当前标签底部显示 2px 指示线，未选中标签使用弱化文字，不要卡片背景，切换标签时底部指示线平滑滑动。

AI 理解准确度会比：
做一个线性滑块标签

高非常多。
01｜Tabs 标签与视图切换
这是 Vibe Coding 用户最容易叫错的一组。
图形示意	中文名称	标准英文	样式关键词	推荐 Prompt
文字 ━━━	下划线标签	Underlined Tabs / Line Tabs	underline / flat	Use horizontal underlined tabs with a thin active indicator
文字 ━→━━	滑动指示标签	Tabs with Sliding Indicator	animated indicator	Use tabs with an animated sliding underline indicator
[ 首页 ] [项目]	胶囊标签	Pill Tabs	pill / rounded	Use pill-shaped tabs with a filled active state
┌ A ┬ B ┬ C ┐	分段控制	Segmented Control	shared track	Use a segmented control with all options inside one shared rounded track
┌标签┐______	卡片标签	Contained Tabs / Attached Tabs	bordered / attached	Use contained tabs attached directly to the content panel
┌标签┐ 文件夹	文件夹标签	Folder-style Tabs	folder / notebook	Use folder-style tabs visually connected to the content panel
A │ 内容	垂直标签	Vertical Tabs	vertical	Use vertical tabs on the left with content on the right
⌂  ⚙  ★	图标标签	Icon Tabs	icon-only	Use icon-only tabs with tooltips
图标 首页	图标文字标签	Icon + Label Tabs	icon + text	Use tabs containing both icons and text labels
< A B C D >	可滚动标签	Scrollable Tabs	horizontal scroll	Use horizontally scrollable tabs with overflow controls
文件 ×	可关闭标签	Closable Tabs	browser-like	Use closable tabs similar to browser tabs
≡ 文件	可拖动标签	Draggable Tabs / Reorderable Tabs	draggable	Use draggable reorderable tabs
All  Read  Unread	内容切换器	Content Switcher	same-content views	Use a content switcher for alternate views of the same dataset


这里尤其值得告诉粉丝：
Tabs 和 Segmented Control 不是一回事。
Tabs 更适合：
用户 / 权限 / 账单

这些不同内容区域。
Segmented Control 更适合：
日 / 周 / 月
列表 / 网格
全部 / 已读 / 未读

Carbon 甚至明确区分：Tabs 用来区分不同内容区域，而 Content Switcher 用来切换同一组内容的不同视图。Carbon Design System
02｜Stepper 步骤与流程
① Numbered Stepper
①────②────③────④
账户   信息   支付   完成
中文：
数字步骤条
英文：
Stepper / Progress Steps / Progress Indicator
Prompt：
Use a horizontal numbered stepper with connected lines, completed steps highlighted, current step emphasized and future steps muted.

② Dot Stepper
●────●────○────○
英文：
Dot Stepper
Prompt：
Use a minimal dot stepper with connected progress lines.

③ Chevron Stepper
也就是你说的鱼骨式：
账户  > 资料  > 支付  > 完成
标准叫法：
Chevron Stepper
也可以：
Arrow Stepper
Prompt：
Use a connected chevron stepper where each step forms an arrow shape and visually flows into the next step.

④ Filled Chevron Stepper
▶▶▶▷
Prompt：
Use a filled chevron progress stepper with completed steps using solid backgrounds.

⑤ Vertical Stepper
● 创建项目
│
● 上传文件
│
○ 配置模型
│
○ 完成
英文：
Vertical Stepper
⑥ Progress Tracker
适合物流、订单：
✓ 已下单
│
✓ 已付款
│
● 配送中
│
○ 已送达
英文：
Progress Tracker
03｜Button 按钮
这一组实际上也远不止“按钮”。
中文	英文	外观
主按钮	Primary Button	████ 保存 ████
次按钮	Secondary Button	▣ 取消 ▣
描边按钮	Outline Button	□ 保存 □
幽灵按钮	Ghost Button	无背景
文字按钮	Text Button	取消
链接按钮	Link Button	查看更多 →
图标按钮	Icon Button	⚙
圆形图标按钮	Circular Icon Button	( + )
浮动按钮	Floating Action Button / FAB	右下悬浮 +
危险按钮	Destructive Button	删除
加载按钮	Loading Button	◌ 保存中
禁用按钮	Disabled Button	灰色
分裂按钮	Split Button	保存 │⌄
下拉按钮	Dropdown Button / Menu Button	操作 ⌄
按钮组	Button Group	[A][B][C]
开关按钮	Toggle Button	按下/未按下
开关按钮组	Toggle Group	[B] [I] [U]
图标工具栏	Toolbar	↶ ↷ B I U
更多按钮	Overflow / Kebab Button	⋮
肉丸菜单	Meatball Menu	•••
快速操作菜单	Speed Dial	FAB 展开多个操作


例如：
Use a split button with the primary action on the left and a dropdown chevron on the right.

AI 基本不会理解错。
04｜基础输入框 Input
Text Input
姓名
┌────────────────┐
│ 输入姓名        │
└────────────────┘
英文：
Text Input / Text Field
Textarea
┌────────────────┐
│ 多行文字        │
│                 │
│                 │
└────────────────┘
英文：
Textarea / Multiline Text Field
Search Field
┌ 🔍 搜索项目─────┐
Search Input / Search Field
Password Field
密码
••••••••       👁
Password Input / Password Field
Number Input
数量

[     12     ]
Number Input
Spinbutton
[ 12 ] ▲
       ▼
Spinbutton / Numeric Stepper
W3C 也把 Spinbutton 定义成独立的标准交互模式。W3C
Prompt：
Use a numeric spinbutton with increment and decrement controls.

05｜Select 与选择器
这是第二个最容易混淆的领域。
Select
国家
┌──────────────⌄┐
│ China         │
└───────────────┘
Select / Dropdown Select
用途：
固定选项中选择 一个。
Prompt：
Use a single-select dropdown for choosing one option from a predefined list.

Multi-select
┌────────────────────⌄┐
│ React × Vue ×        │
└─────────────────────┘
标准：
Multi-select
不是 muiti-select。
Prompt：
Use a multi-select dropdown where selected values appear as removable chips inside the field.

Combobox
┌ React_________⌄┐
      ↓
 React
 React Native
 React Query
标准：
Combobox
非常重要。
它和 Select 的区别：
Select：
只能选已有值。
Combobox：
可以：
输入 + 搜索 + 推荐 + 选择

有些 Combobox 还允许输入列表之外的值。Carbon 对 Dropdown、Multiselect、Combobox 也是分别定义的。Carbon Design System
Prompt：
Use a searchable combobox that filters suggestions while the user types.

Autocomplete
输入：Sha

Shanghai
Shandong
Shanxi
Autocomplete / Autosuggest
Prompt：
Use an autocomplete text field with suggestions appearing while typing.

Cascader
这个很多 Vibe Coding 用户根本不知道名字。
中国 >
      上海 >
             浦东新区
             徐汇区
标准：
Cascader
Ant Design 就将它作为独立 Data Entry 组件。Ant Design
Prompt：
Use a multi-level cascader for selecting hierarchical geographic data.

Tree Select
⌄ 中国
   ☑ 上海
      ☑ 浦东
      □ 徐汇
标准：
Tree Select
Prompt：
Use a searchable tree select with expandable hierarchical options.

06｜基础 Selection Control
Checkbox
☑ React
□ Vue
□ Angular
Checkbox
多选。
Radio Group
◉ 男
○ 女
○ 其他
Radio Group
单选。
W3C 对 Radio Group 的标准定义就是“一组中最多选择一个”。W3C
Switch
通知     ●━━━━
Switch / Toggle Switch
用于：
开 / 关
Enabled / Disabled

不要用 Radio 代替。
Tri-state Checkbox
☐ 未选
☑ 全选
▣ 部分选择
Tri-state Checkbox / Indeterminate Checkbox
尤其适合：
▣ 全部文件
   ☑ 文件A
   □ 文件B
   ☑ 文件C
WAI-ARIA 也明确支持 checked / unchecked / partially checked 三种状态。W3C
07｜Slider 与数值组件
这里就是前面说的真正 Slider。
Slider
0 ━━━━━━━●━━━━ 100
Slider / Range Input
Prompt：
Use a horizontal slider with a draggable thumb and visible track.

Range Slider
0 ━━━●━━━━━━●━━ 100
     20      80
Range Slider / Multi-thumb Slider
Prompt：
Use a dual-thumb range slider for choosing minimum and maximum values.

W3C 对这种组件的标准名称就是 Multi-Thumb Slider。W3C
Vertical Slider
100 │
    ●
    │
    │
0   │
Vertical Slider
Stepped Slider
●──○──○──●──○
Stepped Slider / Discrete Slider
08｜日期时间
中文	标准英文
日期选择器	Date Picker
日期范围	Date Range Picker
时间选择	Time Picker
日期时间	DateTime Picker
日历	Calendar
周选择	Week Picker
月选择	Month Picker
年选择	Year Picker


Date Range：
开始日期           结束日期
2026/08/01   →   2026/08/31
Prompt：
Use a date range picker with two linked date fields and a calendar popover.

09｜特殊输入组件
这一组做 AI 应用特别常见。
中文	英文
OTP 验证码	OTP Input / PIN Input
标签输入	Tag Input
芯片输入	Chip Input
提及输入	Mentions Input
富文本编辑器	Rich Text Editor / WYSIWYG Editor
Markdown 编辑器	Markdown Editor
代码编辑器	Code Editor
行内编辑	Inline Edit
搜索输入	Search Input
遮罩输入	Masked Input
电话输入	Phone Input
金额输入	Currency Input
URL 输入	URL Input
颜色选择器	Color Picker
星级评分	Rating Control


OTP：
[1] [8] [3] [ ] [ ] [ ]
Prompt：
Use a six-digit OTP input with separate single-character fields and automatic focus advance.

10｜文件上传
至少要区分四种。
File Input
选择文件
File Input
Upload Button
[ ↑ 上传文件 ]
Upload Button
Dropzone
┌────────────────────┐
│                    │
│   ↑ 拖文件到这里    │
│                    │
└────────────────────┘
Dropzone / Drag-and-drop Uploader
Prompt：
Use a large drag-and-drop file upload dropzone with dashed borders.

File Upload List
📄 report.pdf     ✓
🖼 cover.png     72%
Upload List / File Queue
11｜菜单 Menu
这一组也经常叫错。
Dropdown Menu
操作 ⌄
   │
   ├ 编辑
   ├ 复制
   └ 删除
Dropdown Menu
Context Menu
右键 →
      复制
      重命名
      删除
Context Menu
Menubar
File   Edit   View   Help
Menubar
Navigation Menu
产品   解决方案   文档
          ↓
       AI产品
       数据产品
Navigation Menu
Mega Menu
大型网站常见：
产品
↓
┌─────────────────────────┐
│ AI        开发工具       │
│ ChatGPT   Codex         │
│ API       Agents        │
└─────────────────────────┘
Mega Menu
Overflow Menu
⋮
Overflow Menu
也叫：
Kebab Menu
12｜导航 Navigation
Breadcrumb
首页 > 项目 > ChatGPT > 设置
Breadcrumb / Breadcrumbs
Pagination
‹ 1 2 3 4 5 … 18 ›
Pagination
Sidebar Navigation
│ Dashboard
│ Projects
│ Analytics
│ Settings
Sidebar Navigation / Side Navigation
Navigation Rail
比 Sidebar 窄：
│⌂│
│▣│
│☻│
│⚙│
Navigation Rail
Bottom Navigation
移动端：
⌂       🔍       ＋       ☻
首页    搜索     创建     我的
Bottom Navigation
Top Navigation
Logo    产品   文档   定价         登录
Top Navigation / Navbar
Anchor Navigation
Overview
Installation
API
Examples
点击后滚动页面。
Anchor Navigation / In-page Navigation
13｜Card 卡片
其实“Card”也存在非常多种。
Basic Card
┌──────────────────┐
│ 标题              │
│ 内容              │
└──────────────────┘
Card
Elevated Card
带阴影：
Elevated Card
Prompt：
Use elevated cards with subtle shadows and rounded corners.

Outlined Card
Outlined Card
Interactive Card
可点击：
Interactive Card / Clickable Card
Selectable Card
◉ Pro
  $20/month
Selectable Card
Metric Card
用户
12,842
↑ 18.2%
Metric Card / Stat Card
Media Card
图片 + 内容：
Media Card
Horizontal Card
左右布局：
Horizontal Card
Dashboard Card
Dashboard Card / Widget Card
14｜数据展示
这部分建议单独做两三张图。
中文	标准名称
表格	Table
数据表	Data Table
数据网格	Data Grid
可编辑表格	Editable Table
展开表格	Expandable Table
树形表格	Tree Table / Treegrid
列表	List
结构列表	Structured List
树	Tree View
描述列表	Description List
时间线	Timeline
看板	Kanban Board
甘特图	Gantt Chart
日程表	Scheduler
日历视图	Calendar View
图片瀑布流	Masonry Grid
图片轮播	Carousel
图片画廊	Gallery


WAI-ARIA 特别区分了：
Table
静态数据。
和：
Grid
存在键盘导航或交互的数据网格。
以及：
Treegrid
具有树状层级的数据表。W3C
所以你告诉 Codex：
Build a treegrid

通常比：
做一个可以展开子项的表格

更加精准。
15｜Tag / Badge / Chip
这三个很多人全部叫“标签”。
实际上最好分开。
Badge
消息  12
Badge
通常显示数字或者状态。
Tag
[ React ]
Tag
表示类别。
Chip
[ React × ]
Chip
往往可交互。
Filter Chip
[ ✓ 免费 ]
Filter Chip
Status Badge
● Running
Status Badge
Lozenge
[ IN PROGRESS ]
Lozenge
Atlassian 就使用这个名称描述紧凑型状态标签。Atlassian Design
16｜Accordion 与折叠
Accordion
⌄ 什么是 Codex？
   Codex 是……

> 如何安装？

> 如何使用？
Accordion
多个垂直排列的折叠项目。
W3C 和 Radix 都使用这个标准名称。W3C
Collapsible
高级设置  ⌄
Collapsible
Disclosure
非常接近 Collapsible：
Disclosure / Show-Hide Control
W3C 也把 Disclosure 单独定义为一种交互模式。W3C
17｜弹层 Overlay
这个分类是 Vibe Coding 高频重灾区。
Tooltip
      删除项目
         ▲
        🗑
Tooltip
短说明。
不能放复杂交互。
Popover
按钮
 ↓
┌─────────────┐
│ 更多信息     │
│ [设置]       │
└─────────────┘
Popover
可以包含内容甚至按钮。
Hover Card
鼠标经过：
@Sam
 ↓
┌──────────┐
│头像 Sam   │
│Developer │
└──────────┘
Hover Card
Modal / Dialog
██████████████████
█                █
█    编辑项目     █
█                █
█  取消    保存   █
██████████████████
Modal / Dialog
Alert Dialog
必须要求用户回应：
确定删除？

Alert Dialog
Popconfirm
小型确认：
删除
 ↓
确定删除吗？
取消  确定
Popconfirm / Confirmation Popover
Drawer
页面            │设置面板
                │
                │
Drawer
Sheet
shadcn 用户经常使用：
Sheet
本质类似边缘滑入面板。shadcn 当前组件集中同时提供 Dialog、Drawer、Popover、Sheet 等组件。Shadcn
Bottom Sheet
手机：
────────────
      ─
选择操作
拍照
相册
文件
Bottom Sheet
18｜提示与反馈
Alert
⚠ 数据保存失败
Alert
Inline Alert
嵌在内容里：
Inline Alert / Inline Message
Banner
████████ 系统维护 ████████
Banner
一般跨页面宽度。
Toast
右下角短暂出现：
✓ 保存成功
Toast
Snackbar
文件已删除                 撤销
Snackbar
通常可以带一个操作。
Notification
┌─────────────────┐
│ 新消息           │
│ Sam 评论了项目   │
└─────────────────┘
Notification
通常比 Toast 信息更多。
Atlassian 把 Banner、Inline Message、Modal、Flag 等反馈组件也明确分开。Atlassian Design
19｜Loading 加载状态
这组至少应该告诉粉丝 7 个词。
Spinner
◌
Spinner
Skeleton
██████████
██████
████████████
Skeleton Loader
Shimmer
Skeleton 上有流动高光：
Shimmer Loading
Microsoft Fluent 对 Shimmer 的定义就是用于在数据加载过程中提前呈现内容结构。Fluent 2 Design System
Progress Bar
████████░░░░ 72%
Progress Bar
Circular Progress
◔ 72%
Circular Progress
Indeterminate Progress
不知道进度：
━━━━━━▶
Indeterminate Progress
Determinate Progress
知道 72%：
Determinate Progress
20｜Empty / Result 状态
Empty State
       □

暂无项目

创建你的第一个项目

[ 新建项目 ]
Empty State
Error State
      ⚠
加载失败
重新加载
Error State
Success Result
       ✓
发布成功
Success Result / Result Page
404 / 500
Error Page / Exception Page
21｜拖拽与布局
非常适合 Codex。
Resizable Panels
代码     │     Preview
         ↔
Resizable Panels
Split Pane
文件树 │ 编辑器
Split Pane / Split View
Window Splitter
分隔线可以拖。
标准：
Window Splitter
WAI-ARIA 甚至有独立的 Window Splitter Pattern。W3C
Drag-and-drop List
≡ Item A
≡ Item B
≡ Item C
Draggable List / Sortable List
Reorderable List
Reorderable List
Resizable Sidebar
Resizable Sidebar
22｜高级 SaaS / AI 产品组件
这一类我强烈建议你放进去。
因为普通 UI 大全反而经常没有。
场景	标准描述
左右主从页面	Master-detail Layout
属性编辑栏	Inspector Panel / Property Panel
筛选栏	Filter Bar
多条件筛选	Faceted Filter
查询构建器	Query Builder
命令窗口	Command Palette
Cmd+K	Command Menu
AI聊天输入框	Chat Composer
消息气泡	Message Bubble
对话列表	Conversation List
Prompt 输入	Prompt Composer
Agent 状态	Agent Status Indicator
工具调用	Tool Call Card
思考过程	Reasoning / Thinking Panel
Terminal	Terminal Panel
Diff	Diff Viewer
文件树	File Tree / Explorer Tree
JSON 树	JSON Tree Viewer
日志	Log Viewer
Markdown 预览	Markdown Preview
代码块	Code Block
可复制代码	Code Snippet
输入建议	Prompt Suggestions / Suggestion Chips
AI引用	Citation Chip / Source Card


23｜Command Palette
这个建议重点讲。
⌘ K
┌─────────────────────┐
│ 🔍 Search commands   │
├─────────────────────┤
│ New project          │
│ Open file            │
│ Settings             │
└─────────────────────┘
标准：
Command Palette
或者：
Command Menu
Prompt：
Add a Cmd+K command palette with fuzzy search, keyboard navigation and grouped commands.

Codex / Claude Code 对这句话的理解通常非常准确。
24｜Tree
Tree View
⌄ src
   ⌄ components
      Button.tsx
      Tabs.tsx
   App.tsx
Tree View
File Tree
File Tree / File Explorer
Treegrid
Name            Size
⌄ src
   app.tsx       8KB
   index.ts      2KB
Treegrid
25｜移动端特有组件
建议单独做一张。
中文	英文
底部弹层	Bottom Sheet
底部导航	Bottom Navigation
下拉刷新	Pull-to-refresh
左滑操作	Swipe Actions
长按菜单	Long-press Context Menu
页面指示点	Page Indicator / Pagination Dots
滑动卡片	Swipeable Cards
轮播	Carousel
浮动按钮	FAB
安全区域	Safe Area
顶部导航栏	Navigation Bar
大标题导航	Large-title Navigation Bar


26｜桌面生产力软件组件
这也是你粉丝非常需要的。
┌ Sidebar ┬ Editor ┬ Inspector ┐
对应：
Three-pane Layout
还包括：
- Sidebar
- Activity Bar
- Explorer Panel
- Editor Tabs
- Editor Pane
- Inspector Panel
- Property Panel
- Status Bar
- Toolbar
- Command Bar
- Split View
- Resizable Pane
- Dockable Panel
- Floating Panel
- Context Menu
- Command Palette
- Breadcrumb
- Tree View
这基本就是 VS Code / Figma / Cursor / Codex 类产品常见的 UI 词汇。
27｜必须单独做一张「样式词典」
这张甚至可能比组件名称更有用。
用户经常会说：
“这个按钮再高级一点。”

AI 根本不知道什么叫高级。
应该告诉它具体样式。
Surface 表面
- Flat 平面
- Filled 填充
- Outlined 描边
- Elevated 悬浮阴影
- Ghost 无背景
- Transparent 透明
- Glass / Glassmorphism 玻璃
- Frosted Glass 毛玻璃
- Translucent 半透明
Shape 形状
- Square
- Rectangular
- Rounded
- Soft-rounded
- Pill-shaped
- Capsule
- Circular
例如：
pill-shaped segmented control

比：
圆一点的标签

精准很多。
Border
- hairline border
- 1px border
- subtle border
- high-contrast border
- borderless
- dashed border
- inset border
Shadow
- no shadow
- subtle shadow
- soft shadow
- elevated shadow
- floating shadow
- inner shadow
Density
这一组很重要：
Compact
紧凑。
Default / Comfortable
正常。
Spacious
宽松。
例如：
Use a compact data table with 36px rows.

28｜交互状态词典
每一个组件都可能有：
Default
Hover
Pressed
Active
Selected
Focused
Disabled
Loading
Error
Success
Warning
Empty
所以不要：
按钮鼠标过去有变化。

而是：
Add distinct default, hover, pressed, focus-visible and disabled states.

29｜动效描述词典
这也应该单独做一张福利图。
Fade
淡入淡出：
fade in / fade out
Slide
滑入：
slide in
Sliding Indicator
底部线滑动：
animated sliding indicator
Scale
缩放：
scale animation
Collapse
收起：
collapse / expand animation
Spring
弹性：
spring animation
Crossfade
切换：
crossfade transition
Accordion Motion
animate height from collapsed to expanded

Drawer Motion
slide in from the right edge

Modal
fade the overlay and scale the modal from 96% to 100%

这类 Prompt AI 非常容易执行。
最关键的一张：AI Prompt 万能公式
我建议你的整套资料最后一张直接放这个：
不要这样说
做个标签。

做个下拉框。

做个滑块。

做个卡片。

做高级一点。

应该这样说
Use a [组件标准名称] with [视觉变体], [方向/布局], [交互行为], [状态], [动画] and [尺寸/密度].

例如：
Use horizontal underlined tabs with a 2px animated sliding indicator. Keep the background transparent, use muted text for inactive tabs, semibold text for the active tab, and add a smooth 180ms transition.

或者：
Use a searchable multi-select combobox. Selected options should appear as removable chips inside the input. Support keyboard navigation, filtering, clear-all and empty states.

或者：
Use a right-side inspector drawer with a fixed 360px width, subtle border, resizable edge and collapsible property sections.

这已经非常接近专业 UI Designer / Front-end Engineer 给 AI 下指令的语言。
我建议最终不要做成一张“巨型大全”
如果是准备给你的粉丝作为福利，我建议直接拆成 16 张系列图：
图	内容
01	封面：Vibe Coding UI组件精准描述词典
02	Tabs 标签大全
03	Stepper / Navigation
04	Button 按钮大全
05	Input 输入框
06	Select / Combobox / Multi-select
07	Checkbox / Radio / Switch / Slider
08	Date / Upload / 特殊输入
09	Menu / Dropdown
10	Modal / Popover / Drawer / Tooltip
11	Card / List / Table / Tree
12	Alert / Toast / Loading / Empty
13	Layout / Split Pane / Resizable
14	AI / SaaS / Coding 工具特殊组件
15	UI视觉样式词典
16	AI Prompt 万能描述公式


这样真正能收藏。
而且每一张不要只放名称。
推荐固定结构：
① 图形示意
② 中文俗称
③ 标准英文名
④ 常见别名
⑤ 什么时候使用
⑥ AI Prompt
这会比网上绝大多数“UI组件大全”实用很多。
另外我核对主流体系后，基础组件层面至少应该覆盖 100+ 个标准组件 / 交互模式；Ant Design 当前就把组件拆成 General、Layout、Navigation、Data Entry、Data Display、Feedback 等大类，shadcn/ui 也覆盖 Accordion、Combobox、Command、Data Table、Drawer、Popover、Resizable、Sheet、Sidebar 等大量现代 Web 组件。Ant Design
所以如果我们继续把这件事做完整，我不建议停留在我上面这份“目录级大全”。最合适的是直接把它发展成 《Vibe Coding UI Component Dictionary v1.0》：大约 120–150 个组件 + 30–50 个样式词 + 20–30 个布局词 + Prompt 模板，基本就能覆盖普通用户做 Web、App、AI SaaS、后台、桌面工具时遇到的绝大多数 UI。




来源 





你直接帮我做一个html页面，把所有以上的这些按照推荐固定结构做成卡片













已经做好了，直接打开即可使用。
这个版本包含 195 个 UI 组件、16 个分类，每张卡片都有：图形示意、中文俗称、标准英文名、常见别名、样式关键词、适用场景、可直接复制给 AI 的 Prompt。
页面还加入了 搜索、分类筛选、一键复制 Prompt、响应式布局，单文件 HTML，不依赖任何外部库，发给粉丝后直接浏览器打开即可。
vibe-coding-ui-component-dictionary.htmlHTML
我这版已经不是前面简单列举的几十个组件，而是扩展到了 195 个组件，后面很适合继续做成你的长期福利项目，比如再加入「布局模式词典」「动效词典」「UI 风格词典」「页面类型词典」，最终形成一套完整的 Vibe Coding UI Language System。