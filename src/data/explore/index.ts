import report from './report.json' with { type: 'json' };
import ideas from './ideas.json' with { type: 'json' };
import research from './research.json' with { type: 'json' };
import repos from './repos.json' with { type: 'json' };
export { report, ideas, research, repos };
export const groups = [...new Set(ideas.map((i) => i.group))];
export const explorePaths = [
  'explore',
  'explore/report',
  'explore/projects',
  'explore/ideas',
  'explore/evidence',
  ...report.chapters.map((c) => `explore/report/${c.id}`),
  ...ideas.map((i) => `explore/ideas/${i.id}`),
];
export const repoLessons: Record<string, string> = {
  'activepieces/activepieces':
    '看触发→处理→人工确认如何连成工作流；新手先做一个输入和一个输出。',
  'langgenius/dify':
    '看资料来源、检索与回答如何分开；先做可回查的FAQ，不复制整个AI平台。',
  'n8n-io/n8n':
    '看失败重试、凭据与节点连接；先在测试副本上运行，并保留人工确认。',
  'formbricks/formbricks':
    '看问题设计、表单填写与结果管理；先做一张解决具体问题的表单。',
  'usememos/memos':
    '看记录、标签、搜索与导出；把它缩小到一个具体人群的记录任务。',
  'paperless-ngx/paperless-ngx':
    '看文档索引、版本与检索；先存索引与副本，避免直接处理重要原件。',
  'simonw/datasette':
    '看表格数据如何筛选与查找；先用脱敏小样本做一个查重或校验动作。',
  'immich-app/immich':
    '看照片选择、组织与权限；不必第一版做完整相册、同步或人脸识别。',
  'makeplane/plane':
    '看任务状态、负责人和反馈闭环；先为一类真实订单做三到五个阶段。',
  'outline/outline': '看资料层级与权限；先把一个入职或客服场景的资料组织清楚。',
  'calcom/cal.diy':
    '看日期、时区和冲突处理；预约意向不等于已确认时段，要明确区分。',
  'Stirling-Tools/Stirling-PDF':
    '看文件输入、处理预览与导出；先实现一个有标准答案的PDF操作。',
  'GoogleChromeLabs/squoosh':
    '看压缩前后对比与文件大小反馈；借鉴可核对结果的交互。',
  'DIYgod/RSSHub': '看来源转换与订阅组织；只接有权读取的来源，保留原文链接。',
  'homarr-labs/homarr':
    '看入口分组和信息卡片；先做特定工作场景的链接导航，不做服务器控制。',
  'umami-software/umami':
    '看事件和汇总指标；先定义一个可解释的转化流程，避免收集不必要个人数据。',
  'karakeep-app/karakeep':
    '看收藏、标签与回查；先解决来源丢失，不必一开始接入AI自动抓取。',
  'louislam/uptime-kuma':
    '看状态、异常与恢复记录；先监测自己获授权的站点并明确响应人。',
  'actualbudget/actual':
    '看输入、分类、核对与备份；借鉴交互，不把练习版当专业财务系统。',
};
export const licenseNotes: Record<string, string> = {
  'activepieces/activepieces': '核心MIT，企业与云功能有商业许可。',
  'langgenius/dify': 'Dify自定义许可，基于Apache 2.0附加条件。',
  'n8n-io/n8n':
    'Sustainable Use等许可；咨询、托管客户实例与嵌入产品须分别核对。',
  'formbricks/formbricks':
    '存在不同部分许可，GitHub未给出单一SPDX判定；按实际文件检查。',
  'outline/outline': 'GitHub未给出单一SPDX判定；阅读仓库许可及商业使用条件。',
  'Stirling-Tools/Stirling-PDF':
    'GitHub未给出单一SPDX判定；按版本和具体功能核对许可。',
};
export const ideaPrompt = (
  i: (typeof ideas)[number],
) => `我在考虑做“${i.title}”，目前只是待验证的想法，不是已有收益的项目。请先帮我整理项目描述和需求验证方案，不要开始写代码、部署、购买服务或替我联系别人。
项目用户：${i.audience}。我实际认识或能接触到的用户：【填写具体人群，不填私人联系方式】
他们遇到的问题：${i.problem}。我观察到的真实例子：【填写最近一次情况；没有就写尚未验证】
第一版建议：${i.mvp}。
第一版暂不做：${i.exclude}。
完成检查：${i.check}。
可能收益方式：${i.revenue}，尚未验证有人愿意付费。
我可投入的时间和总预算：【填写时间与金额上限；只练习也请说明】
我的设备和已有经验：【填写电脑系统和自己熟悉的业务】
请根据这些资料：1.区分事实、假设和未知；2.给出向目标用户确认问题的5个具体问题，避免诱导对方说好；3.把第一版缩小到一个完整流程，解释为什么；4.给出可亲手核对的通过标准；5.指出最可能做不下去的原因，以及继续、缩小或暂停的条件。未知信息先问我，不编造市场规模、客户、收入或成功率。最后输出可带到学习路线第1、2步的项目描述草稿。`;
