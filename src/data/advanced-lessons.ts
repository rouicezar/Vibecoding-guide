import type {Copy} from './site';
type Lesson={action:Copy;check:Copy};
const split:Lesson={action:['拖动两栏之间的分隔条；也可聚焦分隔条后用左右键调整，Home/End 到边界。','Drag the separator, or focus it and use arrows; Home/End reach the bounds.'],check:['左右区域实际改变宽度；宽度有上下限，键盘可完成同样操作。','Panel widths change within limits; the keyboard provides the same operation.']};
export const advancedLessons:Record<string,Lesson>={
 'ly-res':split,'ly-splitr':split,'ly-rss':split,
 'dk-float':{action:['拖动面板标题按钮，或聚焦后按方向键。','Drag the title button or focus it and use arrow keys.'],check:['整个面板随之移动，但不会移出工作区。','The whole panel moves without leaving the workspace.']},
 'dk-dock':{action:['把停靠位置从左侧改成右侧，再改为底部。','Change docking from left to right, then bottom.'],check:['面板真实换边，工作区随之调整；这是网页内停靠。','The panel moves and the workspace adapts; docking is inside the web page.']},
 'tabs-draggable':{action:['选中 B，把它左移再右移；也可拖动标签。方向键切换选中内容。','Select B and move it left/right, or drag it. Arrow keys switch selection.'],check:['顺序变化后选中内容仍跟随同一个标签，不按位置误换内容。','Reordering preserves the selected tab identity rather than selecting by position.']},
 'mn-ctx':{action:['在示例区域右键，或点击打开菜单；用上下键选择，Escape 关闭。','Right-click the area or use Open menu; arrows navigate and Escape closes.'],check:['菜单可以不依赖右键打开，操作后关闭并显示对应反馈。','Opening does not depend on right-click; choosing closes it with matching feedback.']},
 'sel-tree':{action:['展开 Design，选择 Icons，再展开 Code 选择 Backend。','Expand Design and select Icons, then expand Code and select Backend.'],check:['父项只负责展开，最终只保留一个叶子选项，并显示完整路径。','Parents expand; one leaf stays selected and its full path is displayed.']},
 'nv-anchor':{action:['点击 Overview、Details、Contact，观察示例内容区的位置。','Click Overview, Details and Contact and observe the content scroll.'],check:['实际滚动到不同段落；不是只改变按钮颜色。','Content scrolls to different sections, not merely changing button color.']},
 'ai-json':{action:['修改 JSON 后解析，再删除一个引号制造错误，补回后重试。','Edit and parse JSON, remove a quote to create an error, then repair and retry.'],check:['有效数据生成可展开层级；无效数据提示原因并保留上次结果。','Valid data produces an expandable tree; invalid data reports an error and preserves the last result.']},
 'ai-qb':{action:['选择 state、equals，输入 Open 并应用；再改为不存在的值。','Choose state and equals, enter Open and apply; then try a missing value.'],check:['字段、比较方式和值共同决定结果；无结果可清除条件恢复。','Field, operator and value determine results; clearing restores an empty result set.']},
 'ai-facet':{action:['勾选 Open，再勾选 Design，最后清除条件。','Select Open, then Design, then clear filters.'],check:['同组多选表示任选，跨组条件同时满足；结果数随筛选变化。','Choices within a group use OR; groups combine with AND, changing the result count.']},
 'sp-mask':{action:['输入 10 位数字并检查格式，再少输入一位重试。','Enter ten digits and check formatting, then retry with one missing.'],check:['数字被格式化为本例固定样式；位数不足会提示，不宣称适配所有国家号码。','Digits use this fixed sample format; missing digits are flagged, without claiming global phone support.']},
 'sp-phone':{action:['选择区号并输入号码，分别试数字和字母。','Choose a calling code and try digits and letters.'],check:['只核对 6–15 位数字格式；不证明号码存在、归属或短信可达。','Checks 6–15 digit format only, not existence, ownership or SMS reachability.']},
 'sp-cur':{action:['输入 12.50，再试负数与超过两位小数。','Enter 12.50, then a negative value and excess decimals.'],check:['有效金额格式化显示，非法输入给出原因；示例币种为人民币。','Valid amounts are formatted; invalid input explains why. Currency is CNY.']},
 'sp-url':{action:['输入完整 https 地址，再试缺协议或 javascript: 地址。','Enter a complete https URL, then omit the scheme or try javascript:.'],check:['只接受 http/https 格式，不自动打开地址，也不证明站点可访问。','Only http/https format is accepted; it neither opens nor verifies the site.']},
 'sp-mentions':{action:['输入 @A，选择 Ada；再试 @Z。','Type @A and choose Ada; then try @Z.'],check:['姓名插入当前光标位置，没有匹配时有提示；不发送通知。','A name is inserted at the caret; no-match is shown and no notification is sent.']},
 'sp-md':{action:['修改标题、**加粗**和 - 列表；也试输入 HTML 标签。','Edit headings, **bold** and - lists; also try HTML tags.'],check:['预览随输入变化；本例仅支持这些语法，HTML 不执行。','Preview follows input; only these syntax features are supported and HTML is not executed.']},
 'sp-code':{action:['输入多行代码，观察旁边行号和文本。','Enter multiple code lines and inspect the numbered preview.'],check:['内容和行号更新；本例不编译、不运行，也不提供完整 IDE 功能。','Text and line numbers update; no compilation, execution or full IDE behavior.']},
 'sp-rte':{action:['在编辑区选中文字，再点加粗或斜体；未选中文字时也试一次。','Select text and use Bold/Italic; also try without a selection.'],check:['仅所选文字改变格式；没有选择时提示先选择，本例只演示两种格式。','Only selected text is formatted; no selection prompts for one. Two formats are demonstrated.']}
};
