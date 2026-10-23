# 图标统一与记忆核对

## 需求与设计

用户要求：图标/SVG先到iconfont搜索，核对具体授权、优先同套复用，没有合适素材再绘制；本项目直接使用图形代码，不使用链接加载图标。保持现有布局、颜色、尺寸接口、教学内容及品牌Logo。

选型：实际浏览iconfont官方库列表及cid=9402详情，标题为Ant Design官方图标库，作者竹尔，说明为Ant Design 3.0全新线性图标体系。将其作为同套风格的发现入口；实际文件通过官方开源包`@ant-design/icons-svg@4.6.0`取得，明确区分网站上传版本与开源包版本，不宣称两者文件完全相同。授权依据为官方仓库MIT LICENSE及包元数据；没有使用作者身份和授权不明的上传文件。

来源：https://www.iconfont.cn/collections/detail?cid=9402
开源源：https://github.com/ant-design/ant-design-icons
MIT：https://github.com/ant-design/ant-design-icons/blob/master/LICENSE
平台条款：https://terms.alicdn.com/legal-agreement/terms/platform_service/20220704165734807/20220704165734807.html

## 实施

- 52个语义名称、51个不同outlined图形，路径代码存于src/data/icons.ts。保留原名称接口，导航、首页、18节点路线图及功能提示统一切换。
- Icon.astro直接输出svg/path，currentColor继承原配色，保留现有size参数。没有外链img/use、远程字体、CDN脚本或运行时包下载，不增加客户端图标脚本。
- 新增外部入口及向后箭头代码；替换侧栏外链字符和路线阶段方向字符。品牌与工具标识、原样组件演示的第三方图形独立管理。
- 保留逐素材原文件SHA256、源包版本及MIT全文；已更新设计规范和第三方声明。只提取path几何，删除源login.svg中的空defs/style，不执行SVG脚本或注入任意HTML。
- 移除已不使用的@lucide/astro依赖，替换为构建时本地图形数据。

## 记忆验证

- 已核对Codex新版记忆文件：/Users/rouice/.codex/memories_v2/extensions/ad_hoc/notes/2026-10-23-iconfont-preference.md，内容明确覆盖iconfont优先、同套素材、具体授权和无合适素材再绘制。
- MyNote同日对话留痕有明确偏好及来源；GBrain搜索iconfont可命中该记录。没有重复创建偏好。
- 当前最新导入报告为2026-10-23T15:52:00Z：2351文件，107导入、2244未变、0失败。原先95项导入失败已不是最新状态；不能凭此推断全部索引已通过。
- 本轮doctor仍非通过：存在包括type_proliferation（97种page type，pack声明25）等独立健康项。未借本任务整改全库、改变pack或覆盖笔记。

## 验证与边界

- quality、全套verify通过；新增verify-icons覆盖所有构建页面中的233214个SVG实例：名称有来源、内联path、继承配色、装饰性无障碍、无外链或主动内容。
- 正式Pages子路径构建2383页的链接和资源验证通过。
- 本地浏览器：1280/390/320px × 首页/路线图中英文、开发节点、资料库，18组均无横向溢出、无缺失path、无图标外部引用。数据browser-results.json；实际截图roadmap.png。
- 图标按钮的名称继续由按钮/链接提供；图标旁的原有文字完整保留。测试通过不等于用户对新图形偏好的视觉验收。
