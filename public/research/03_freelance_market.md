# 用 AI 编程工具接外包 / 自由职业单：全网行情调研笔记

> 调研时间：2026-09-26　｜　调研员视角：独立第三方
> 证据强度标注：**A** = 公开 gig 链接 / 平台页面 + 可核验数据；**B** = 媒体报道 / 多源交叉；**C** = 个人自述（博客、视频、帖子）；**D** = 疑似夸大 / 卖课引流。
> 本笔记只讲"市场行情 + 接单实操"，不重复介绍 Cursor / Lovable / Claude Code 这些工具本身。

---

## 0. 一句话结论

- **海外**（Upwork / Fiverr / Toptal / Contra）：AI Agent / RAG 类项目单均 **$500–$9,000**，时薪中位数 **$40–$150**，头部 AI Agent 工程师可报 **$120–$300/h**；新卖家 2–4 周出第一单是常态，前 3 个月靠量堆 proposal。
- **国内**（闲鱼 / 淘宝 / 猪八戒 / 程序员客栈 / 电鸭）：同一类需求客单价被压到 **海外的 1/5–1/10**——小脚本 **¥15–¥300**，落地页 **¥300–¥2,000**，企业 RAG 知识库 **¥5 万–¥15 万**（这一档已经不是个人 freelancer 在吃）；闲鱼 AI 类卖家月均成交 **¥897**（平台口径），属于"有人月入过万、多数人陪跑"。
- **零编程的人**能接的单：AI 代写 / PPT / 数字人视频 / 简历 / 小红书文案——单价 **¥15–¥500/单**，靠量和复购；**会一点编程的人**用 AI 把交付压缩 60–70%，真实时薪落在 **¥80–¥250/h（国内）** 和 **$40–$110/h（海外）** 区间。
- **天花板**：客户怕的不是"你用 AI"，而是"AI 生成的代码没人负责"。定价一旦低于本地人工成本就会被卷死，正确姿势是**按业务结果报价 + 收维护费**，而不是按行代码报价。

---

## 1. 海外平台行情

### 1.1 Upwork

**平台抽成**：2025 年 5 月起改为 0–15% 阶梯（累计收入越高抽成越低，老 freelancer 常见 5–10%）[B]。
来源：https://cashflowabroad.com/ai-freelancing-abroad-expat-formula

**官方价目表（Upwork 自己给出的 AI 开发指导价）**：
- AI 开发者整体时薪：**$30–$150/h**
- Chatbot / 虚拟助手：**$1,000–$5,000/项目**
- LangGraph 专家：**$35–$60/h**，单 Agent 工作流 **$500–$1,500/项目**
- AI Agent 工程（Claude / LangGraph / MCP）：**$120–$300/h**，$200+/h 已是 senior 标配

来源：
- https://www.upwork.com/hire/ai-developers/  **[A]**
- https://www.upwork.com/hire/langgraph-specialists/  **[A]**
- https://uphunt.io/blog/developer-guide-niche-selection-upwork  **[B]**

**真实 gig 链接（直接可点）**：

| # | Gig 标题 / 卖家 | 三档定价 | 证据 |
|---|---|---|---|
| 1 | "Custom AI Agents Using GPT-4, LangChain & RAG" | Starter $40（3 天 / 单 Agent + Pinecone）/ Standard $200（7 天）/ Advanced $500（14 天） | [A] https://www.upwork.com/services/product/development-it-custom-ai-agents-using-gpt-4-langchain-rag-openai-agent-developer-2003700486868603681 |
| 2 | "An AI agent to fit your needs" | Starter $1,000（7 天 / 简单 bot）/ Standard $4,000 / Advanced $9,000 | [A] https://www.upwork.com/en-gb/services/product/development-it-an-ai-agent-to-fit-your-needs-1862498463728622383 |
| 3 | n8n Automation Expert / Voice Agent（Top Rated Plus，110 jobs / 12,422 小时） | **$50/h** | [A] https://www.upwork.com/freelancers/odutolaemmanuel |
| 4 | "Chrome Extension with Airtable"（Vishaldeep） | **$500 固定价** | [A] https://www.upwork.com/services/product/development-it-chrome-extension-with-airtable-1822621634825332721 |
| 5 | 公开招聘帖 "Front-end developer – Client side Chrome Extension" | **$500 fixed**，expert 级，2026-09-12 发布 | [A] https://www.upwork.com/freelance-jobs/apply/Front-end-developer-Client-side-Chrome-Extension_~022098720536441441785/ |

**Chrome 扩展类综合行情**：Upwork 官方博客给出 Chrome 扩展开发平均时薪约 **$53/h**；固定价项目平均 **$200 上下**，复杂项目可上探。[A]
来源：https://www.upwork.com/resources/coding-side-hustles

**新卖家多久接到第一单**：
- Upwork 官方说法："几小时到一个月都可能"。[A] https://www.upwork.com/resources/how-long-project-on-upwork
- 2026 年实操贴：新号前 3 个月零结果很常见，关键是每天发 **15–25 份高度定制 proposal**；回复率约 7%，按这个漏斗算 10 份/天 ≈ 每周 5 个对话。[B/C]
  - https://profitpea.com/30-day-ai-freelance-writing-challenge-earn-1000-in-30-days/
  - https://digitalsolohub.com/fiverr-vs-upwork-vs-linkedin-2026/
  - https://dredyson.com/my-i-need-help-looking-for-work-and-how-to-earn-clients-journey-what-i-learned-after-6-months-of-struggling-on-upwork-building-real-automations-and-finally-landing-my-first-paying-client-using-a-lo/
- AI & ML 子类被公认是 Upwork 上投标最拥挤的分类之一，回复率等于或低于大盘均值，必须 niche down（"LangGraph + 客服"、"n8n + 电商"）而不是挂一个泛 AI 标签。[B] https://aimoneyforge.com/ai-freelancing-fiverr-upwork-guide/

### 1.2 Fiverr

**抽成**：flat **20%**（2026 仍是行业最高），另有小额订单附加费。[B]

**真实 gig 标题样本（AI coding 分类首页抓下来的）**[A]：
> "I will do ai website development, ai mobile app, ai chatbot" — From **$120**，5.0 评分，Level 2
> "I will develop ai website, ai web application, ai chatbot, ai software developer" — From **$120–$150**，Top Rated
> "I will do custom ai website development as full stack web developer"

来源：https://workspace.fiverr.com/categories/programming-tech/ai-coding

**典型定价阶梯**：
- AI chatbot 建站（小商家）：Basic **$150** / Standard **$350** / Premium **$1,000**；agency 版 **$5,000+** [B] https://mindshiftlabz.com/ai-chatbot-development-services/
- AI Agent 配置（Relevance AI / Make.com）：**$150–$600/项目**，需求暴涨、竞争低 [B] https://fiverrtutorials.com/best-fiverr-gig-ideas
- Top Rated（200+ 评价）三档：Basic **$200–$300** / Standard **$500–$750** / Premium **$1,500–$5,000** [B] https://www.jobbers.io/the-complete-fiverr-gig-optimization-guide-2026/
- AI Chatbot for Small Business 高客单档：**$500–$2,000/gig** [B] https://betonai.net/how-to-make-3k-12k-month-selling-ai-automation-gigs-on-fiverr-and-upwork-in-2026-the-complete-setup-to-scale-playbook-with-real-seller-revenue-data/
- Fiverr Pro 卖家 Muhammad Talha（5.0，50 reviews）：AI chatbot 起步价 **$1,000–$15,000** [B] https://hirebestfreelance.com/hire-freelance-ai-chatbot-developers/

**新卖家节奏**：Fiverr 比 Upwork 容易出单（客户主动搜 gig），但 20% 抽成重；新号通常 2–4 周出第一单。[B] https://quickhustlehub.com/how-to-start-freelancing-with-ai-tools-beginner-guide-2026/

### 1.3 Toptal / Contra / PeoplePerHour / Freelancer.com

| 平台 | 抽成 | AI 相关时薪 | 适合谁 | 证据 |
|---|---|---|---|---|
| Toptal | 0%（客户侧加价） | **$100–$200/h**，3% 录取率 | 有 5+ 年经验、敢过三试的 senior | [B] https://www.sfailabs.com/guides/best-platforms-hire-freelance-ai |
| Contra | **0% 佣金**，只收支付处理费 $1–$29 | **$30–$150/h** | 已作品集成型、绕开平台抽成 | [B] https://www.secondtalent.com/resources/7-best-freelance-platforms-ai-developers/ ；https://damongo.com/best-freelance-platforms-in-mid-2026-upwork-vs-fiverr-vs-contra-vs-toptal-vs-freelancer-comparison-2/ |
| PeoplePerHour | £0.60 + 10%（老客户降到 3.5%） | 欧洲客户偏多，AI 开发帖常见 **$1.2K 固定 / $36/h** | 做欧洲单、英语非第一语言者友好 | [B] https://www.peopleperhour.com/freelance-2d-character-artist-jobs?page=2 ；https://freelancecalc.co/platform-fee-calculator/ |
| Freelancer.com | 阶梯抽成 | 印度 / 巴基斯坦卖家扎堆，AI chatbot 项目常见报价 ₹12,500（≈$150）/7 天 | 价格战最凶，不建议新手正面刚 | [A] https://www.freelancer.ca/projects/ai-chatbot-development/Multiplatform-Customer-Support-Chatbot |

---

## 2. 国内平台行情

### 2.1 闲鱼（最大盘子，也是价格战最凶的）

**平台口径数据**：
- 闲鱼上"AI 技能接单"占全部 AI 订单 **45.1%**（绘画 / 写真 / 视频 / 配音 / 编程）；AI 教程 8.1%，模板工作流 6.6%。
- 闲鱼 AI 类卖家**月均成交额 ¥897**——平台自己承认"说不上惊人"。
- 近 500 万人买过 AI 服务，累计订单 **981.6 万**。

来源：[B] https://www.cnad.com/index.php?act=view&mod=article&titleId=359272 ；https://www.iesdouyin.com/share/video/7684598703830732083

**典型价格带（搜到的商品标题级描述）**：
- 网站 / 落地页：**¥300–¥2,000** 一单（以前报价上万的建站被 AI 打到三位数）[B]
- 小脚本 / 自动化：**¥15–¥100** 起（"文件批量重命名脚本 15 块"这种真实案例）[B/C]
- 爬虫 / 数据采集：**几百到几千元**，需求一句话说清，AI 写得极快 [B]
- 办公自动化（Excel 批量 / 报表 / 文件整理）：**几百到几千元**，企业高频、几乎无售后 [B]
- 完整量化交易回测框架（留学生客户）：**¥3,000**，前后 3–4 天 [C]
  来源：https://xie.infoq.cn/article/484d246597f2095b3a5c4b3ad
- AI 视频代做：一条 **¥50–¥200**，熟手 10 分钟一条；月度套餐 10 条 **¥1,200–¥3,000** [C] https://www.iesdouyin.com/share/video/7657523406190988582

**真实卖家画像**：
- 应届计算机学生做 AI 编程代做，一天 3–4 单；前地产文案宝妈做 AI 代写，月流水约 ¥2 万。[B/C] https://www.iesdouyin.com/share/video/7686010021955603753
- V2EX 上挂的接单帖："简单脚本 **¥300 起**，工作流搭建面议"——这是技术圈自己挂出的底价。[A] https://v2ex.com/t/1235642

### 2.2 淘宝 / 猪八戒网

**猪八戒真实商品页（直接可点）**：
- "今天可接单/接急单 小红书文案，ppt，英语翻译"：基础版 **¥15**，单单付 **¥15–¥100**，24h 交付 [A] https://m.zbj.com/fw/2201268.html
- "AI 短视频制作 AIGC 定制"：基础版 **¥1,000/分钟**、标准版 **¥5,000/分钟**、高级版 **¥10,000/分钟** [A] https://m.zbj.com/fw/2382817.html
- 文案类均价：小红书图文 **¥20–¥49**，AI 辅助文案润色 **¥30**，校对 200 字内 **¥12** [A] https://m.zbj.com/fw/xiezuo/
- 淘宝 AI 视频：商品页常见 **¥10–¥50 起**，600+ 人付款，上海/北京发货 [A] https://mobile-phone.taobao.com/chanpin/870e02bcd9492721777f93a4dfe2a843b10cf1a78fa1410cbfa089b7a92c1433.html

**企业级 AI 视频报价（B 端工作室口径）**：
- 15–60 秒商用 AI 短视频：**¥3,800 / ¥5,800 / ¥7,800 三档**
- 1–3 分钟企业 AI 宣传片：**¥12,800 / ¥19,800 / ¥29,800**
- 品牌 TVC：**¥39,800 / ¥69,800**
来源：[C] https://www.iesdouyin.com/share/video/7662678111338761524

### 2.3 程序员客栈 / 甜薪客 / 电鸭 / 码市 / 解放号

**程序员客栈（按天计价）**：
- AI 类兼职挂牌价集中在 **¥300–¥1,000/天**：5 年经验 CV/NLP **¥500/天**，10 年 Python/深度学习 **¥1,000/天**，8 年全栈 **¥800/天**。[A] https://www.proginn.com/cat/zhineng?freework_level_check=1&sort=6
- 整体前端 / 移动端挂到 **¥800/天** 左右。[A] https://www.proginn.com/cat/page

**电鸭社区（远程全职 / 项目制招聘帖）**：
- 计时：前端 **¥50–¥120/h**，后端 **¥80–¥150/h**
- 模块：前端界面 **¥200–¥500/个**，后端功能 **¥300–¥800/个**
- 结算：定金 / 开发完成 / 测试上线三期款
[A] https://eleduck.com/posts/jAfwpr

**企业级 Agent / RAG 项目（这一档是外包公司在吃，不是个人 freelancer）**：
- 初级（单 Agent / 简单 RAG）：**¥1 万–¥5 万**，3 天–2 周
- 中级（业务系统集成 + RAG 增强）：**¥5 万–¥15 万**，3 周–2 月
来源：[B] https://developer.cloud.tencent.com/article/2730838
- 海外对照：生产级 RAG 知识库 Agent **$80,000–$180,000**，8–16 周交付。[B] https://bitronix.ai/blogs/enterprise-ai-agent-rag-cost-breakdown

### 2.4 BOSS 直聘远程单 / 小红书私域 / 朋友圈接单

- BOSS 直聘上的"远程 AI 开发"岗位更像兼职雇佣，按月或按项目签，**单价介于纯外包和全职之间**，要求响应时间。本调研未抓到可引用的公开岗位报价页。
- 小红书 / 微信私域接单：本质是"内容引流 + 私信成交"，**没有平台抽成但也没有担保**。典型 SKU：
  - PPT 代做：有资料 **¥5–7/页**，无资料 **¥7–10/页**；高端咨询路演 **¥3,000 起/项目** [B/C]
    - https://www.iesdouyin.com/share/video/7669584381753858639
    - https://www.aitoollab.top/articles/cases/ai-consulting-pptx-service-side-hustle-20260905/
  - 文章代写：基础版按字 / 专业版 **¥599/篇（2500–3500 字，3 次修改）** / 尊享版 **¥999/篇** [B] https://docs.aigc.ninthfeast.com/docs/31-aigc%E6%8E%A5%E5%8D%95%E5%8F%98%E7%8E%B0%E6%8C%87%E5%8D%97/
  - 仿真人商单：个人接 **¥400–¥500/分钟** [C] https://www.iesdouyin.com/share/video/7666754639769668978

---

## 3. Gig 品类定价矩阵（一表汇总）

| 品类 | 海外单价 | 国内单价 | 新手上手难度 | 证据 |
|---|---|---|---|---|
| 落地页 / 官网（Lovable/Bolt 出活） | **$300–$800** 首单，本地商家 **$2,000–$4,000/站** | **¥300–¥2,000** | ★☆☆ | [B] https://laptopandcoffee.com/vibe-coding-side-hustle-for-beginners/ ；https://zeroday-ai.com/learn/sell-ai-website-building-freelance-service-charge-500 |
| Chrome 扩展 / 浏览器插件 | **$200–$500 固定**，平均 **$53/h** | 国内少见，多按 ¥1,500–¥5,000/个 | ★★☆ | [A] 见 §1.1 gig #4 #5 |
| 爬虫 / 数据采集 / RPA | **$30–$80/h**，单脚本 $100–$500 | **¥100–¥2,000**，复杂逆向另议 | ★★☆ | [B] https://ai.cheemao.com/blog/ai-coding-freelance-guide |
| 微信/抖音/小红书自动化运营 | 海外几乎没有对应需求 | 矩阵 SaaS **¥680–¥6,800/月**；定制脚本 **¥500–¥3,000** | ★★★ | [A] https://developer.open-douyin.com/service-market/market-detail/7278587670698131511 |
| AI Agent / RAG 知识库 | 单 Agent **$500–$1,500**；企业 RAG **$80K–$180K**； freelancer 常见 **$2,000–$8,000/项目** | 个人小项目 **¥3,000–¥2 万**；企业项目 **¥5 万–¥15 万** | ★★★ | [A/B] 见 §1.1、§2.3 |
| 数据处理 / Excel 自动化 / BI | $50–$100/h | **¥200–¥2,000/脚本** | ★☆☆ | [B] |
| AI 代写（文案 / PPT / 简历 / 论文润色） | $50–$150/篇，LinkedIn 套餐 **$200–$800/月** | PPT **¥5–¥10/页**，咨询级 **¥1,500–¥3,000/项目**；文章 **¥599–¥999/篇** | ★☆☆ | [B] 见 §2.4 |
| AI 视频 / 数字人 / 短视频 | $30–$150/条 | 个人代做 **¥50–¥200/条**；企业 **¥3,800–¥29,800/条** | ★☆☆ | [C] 见 §2.2 |
| 小程序 / 企微 / 飞书机器人 | 海外不适用 | 飞书机器人 + 本地 RAG 链路 **¥2,000–¥1 万**（自己搭约 ¥350/月成本） | ★★☆ | [B] https://cloud.tencent.com.cn/developer/article/2674201 ；https://developer.cloud.tencent.cn/article/2748085 |

---

## 4. Top 卖家话术标题怎么写（真实样本）

**Upwork / Fiverr 系（英文，直接抄结构）**：
1. "I will do ai website development, ai mobile app, ai chatbot" — 关键词堆叠 + 三品类并列
2. "I will develop your ai agents using python crewai" — 工具栈进标题（CrewAI / LangChain / n8n 是高流量词）
3. "Custom AI Agents Using GPT-4, LangChain & RAG | OpenAI Agent Developer" — 全栈关键词
4. "n8n Automation Expert | AI Agent, Voice Agent & Chatbot | Make.com" — Expert 标签 + 双平台
5. "I will setup your simple zap workflows so they work properly" — "setup" 比 "develop" 转化率高（客户怕技术词）
6. "Front end developer – Client side Chrome Extension" — 不写 AI，反而更精准
7. "I will build an AI chatbot trained on your business data, embedded on your website" — 强调"your data / your website"，结果导向

来源：[A] https://workspace.fiverr.com/categories/programming-tech/ai-coding ；https://verification.fiverr.com/sardarmahboob/setup-your-zapier-zaps-to-do-exactly-what-you-need

**闲鱼 / 抖音系（中文）**：
1. "今天可接单 / 接急单 小红书文案，ppt，英语翻译" — 急单 + 多品类
2. "PPT 定制，全天 24 小时在线接单，秒回！211 大学生 PPT 制作" — 身份背书（211）+ 响应承诺
3. "AI 视频定制 · 百人团队 1v1 专属服务 · 24h 在线" — 团队感 + 时效
4. "用 AI 一周赚 2 万：一个不懂代码的设计师交付网站的 5 个经验" — 故事型引流（注意：这类是卖课向，证据 D）
5. "AI 自动化代做（爬虫/脚本/Claude Code 工作流）" — V2EX 技术圈风格，直接列技术栈
6. "AI 短视频制作 AIGC 定制 多风格多平台适配交付" — 猪八戒 SEO 标题
7. "3D 动画制作宣传 / AI 视频生成 MV 企业宣传片短剧数字人广告" — 淘宝关键词堆砌

---

## 5. 差评 / 翻车案例（客户为什么退款）

**海外侧（技术翻车）**：
- r/SaaS 高赞帖（640 upvotes）：专门修 vibe-coded 项目的工程师列了 4 个每次都踩的坑——①错误处理缺失 ②循环依赖 ③边界 case 没处理 ④技术债复利。[B] https://bigideasdb.com/vibe-coding-saas-problems-how-to-fix
- FinalRound AI 调研 18 个 CTO，**16 个报告过 AI 生成代码导致的生产事故**：没人知道代码到底在干嘛，hidden logic bug + 安全漏洞。[B] https://snyk.io/de/articles/the-highs-and-lows-of-vibe-coding/
- 真实损失案例：一个 freelancer 因为 vibe coding 的 bug，**10 个付费客户丢了 8 个，直接退款 $8,000 + 服务器和 AI 订阅 $12,000**。[C] https://asibiont.com/blog/vibe-coding-ubil-moy-rassudok-kak-ya-chut-ne-poteryal-biznes-iz-za-modnogo-podkhoda
- 数据安全：RLS（行级安全）没开 → 客户数据库裸奔；客户不会为"我用的 AI 不懂"买单。[B] https://hundredtabs.com/blog/ship-vibe-coded-app-to-clients
- 某 MVP 加支付和多租户时审计发现**无外键、无索引、无事务**，完整重写 $180K / 14 周——这是买方视角的"被 AI 坑"账单。[B] https://ideatomvp.ai/en/blog/vibe-coding-trap-ai-mvp-rebuild-cost

**国内侧（商务翻车）**：
- 35 岁程序员接私活：3 个通宵干 2,000 块，交付时客户以"加载有点慢"为由扣了 150。[C] https://blog.csdn.net/ddxygq/article/details/158640198
- 没签合同就开工：报价 8,000 被砍到 3,000，改了十版，尾款十几年没收到。[C] https://www.iesdouyin.com/share/video/7688572806849760521
- 9.9 / 19.9 的"接单培训课"是重灾区：课程水、派单全是千字几块钱的苦力活，退款扣 50% 违约金。[B] https://weitoutiao.zjurl.cn/rogue/topic_share/?concern_id=1870685583096087
- 跟风注册"一人公司"，忙半年 0 收入，月薪从 3 万降到账面 2,000。[B] https://36kr.com/p/3839585060243968

**AI 生成代码的常见翻车点（交付前必查）**：
1. 没有 unit test，happy path 能跑、edge case 崩
2. API key / 数据库连接串硬编码进前端
3. 样式全 inline 进 TSX，客户后续改不动
4. 没有错误处理和重试，第三方 API 一抖就挂
5. 安全漏洞（RLS、鉴权、SQL 注入）
6. 需求蔓延："顺手再加个功能"——AI 让你做得快 ≠ 加需求免费

---

## 6. AI 把交付时间从 X 天压到 Y 天的真实工作流

**案例 A（Stripe 集成 freelancer）**：
- 之前 12 个月：1,140 小时 / 19 个项目
- 之后 12 个月：980 小时 / **31 个项目**（AI 生成 70% 初始集成脚手架）
- 有效时薪从 **$2 → $41**（因为敢报固定价，比竞品低 25% 还能周收入更高）
来源：[C] https://sylt.ing/blogs/1174/AI-Is-Gutting-the-Old-Freelance-Developer-Playbook-And-Rewriting

**案例 B（Dre Dyson，独立开发者自述）**：
- 用 Cursor 前：2–3 个项目/月，$12K–$15K
- 用 Cursor 后：4–5 个项目/月，$22K–$28K
- 有效时薪：**$75 → $110**（+47%）
- 再上 Subagents 后 3 个月把时薪从 $85 提到 $110
来源：[C] https://dredyson.com/how-im-using-this-autonomous-ai-workflow-for-cursor-to-make-money-as-a-freelance-developer-a-complete-step-by-step-guide-to-doubling-my-rates-and-landing-more-clients/ ；https://dredyson.com/how-im-using-cursor-2-4-subagents-to-make-money-as-a-freelance-developer-a-complete-step-by-step-guide-to-doubling-my-billable-output-raising-my-rates-and-winning-more-clients-in-2026/

**案例 C（国内，Claude Code 4 天做电商开票系统迭代）**：
- 10 年 Java 开发者，私活 **¥5,000**，4 天交付；AI 在脚手架和样板代码环节猛，在业务规则澄清环节没用。[C] https://blog.csdn.net/u014534808/article/details/162607666

**案例 D（legacy 重构，$5K+ 合同）**：
- Claude Code 100 万 token 上下文一次读完整个 repo，把 2 天人工代码探索压缩到 **4 小时**。[B] https://hackceleration.com/fr/labs/meilleur/ai-coding-tools-freelancers

**可复用的交付节奏模板**（多源交叉）：
- Day 1：需求确认 + 技术栈选型（别上来就写代码）
- Day 2：核心功能 demo 发给客户看（早暴露分歧）
- Day 3：完整交付 + 售后说明文档
来源：[B] https://www.duckdblab.com/en/post/cursor-programming-side-hustle-workflow/

---

## 7. 五个必答题

### 7.1 完全不会编程的人，靠 AI 工具能接到什么单？

给 5 个真实可行品类（按门槛从低到高）：

1. **AI 代写 / 文案润色 / 小红书笔记 / LinkedIn 帖子**
   - 定价：英文房产描述 $50 试单 → $1,200/月 retainer；国内小红书图文 ¥20–¥49/篇
   - 案例：Bright Coding 博客作者在 Facebook 房产群接第一单 $500，下周转 $1,200/月。[C] https://blog.brightcoding.dev/2026/07/08/how-i-made-5000month-with-ai-tools-no-experience-needed-a-complete-beginners-blueprint
2. **AI PPT / 简历 / 述职报告代做**
   - 定价：低端 ¥5–¥10/页；高端咨询路演 ¥1,500–¥3,000/项目
   - 关键：客户买的是"没有 AI 味"，你必须人工过一遍。
3. **AI 数字人短视频 / 口播视频代做**
   - 定价：闲鱼 ¥50–¥200/条，熟手 10 分钟一条；月度套餐 ¥1,200–¥3,000/10 条
4. **AI 儿童绘本 / Amazon KDP 自出版**（被动收入型）
   - 案例：护士 Grace 用 Claude 写故事 + Midjourney 画图 + Canva 排版，2 周上架，月被动 $400–$600。[C] https://aipathwaylab.com/ai-side-hustles-you-can-start-today/
5. **AI 自动化工作流搭线（n8n / Make / Dify）**
   - 不会写代码也能拖出来：客服自动回复、表单→飞书、邮件→Notion。Fiverr 上这类 **$150–$600/项目**，竞争低。

### 7.2 会一点编程的人，用 AI 接单的真实时薪范围

| 档位 | 国内时薪 | 海外时薪 | 画像 |
|---|---|---|---|
| 新手（0–3 个月） | **¥50–¥100/h** | **$20–$40/h** | 主要在闲鱼 / Fiverr 低价档跑量 |
| 熟手（3–12 个月，有 5–10 个好评） | **¥100–¥250/h** | **$40–$80/h** | 程序员客栈 ¥300–800/天，Upwork Top Rated 前 |
| 老手（niche 垂直，复购稳定） | **¥250–¥500/h** | **$80–$150/h** | n8n / RAG / Chrome 扩展垂直卖家 |
| 头部（AI Agent / LangGraph / MCP） | 国内稀缺 | **$120–$300/h** | Toptal / Upwork Top Rated Plus |

证据：[B] Upwork 官方 $30–$150/h；[C] Dre Dyson $75→$110；[A] 程序员客栈 ¥300–1000/天。

### 7.3 AI 接单的天花板在哪？

**客户为什么会被"AI 替代感"吓跑**：
- 他怕的不是你用 AI，是**出了事没人负责**——RLS 没开、数据库被删、API key 泄漏，客户找的是你不是 OpenAI。
- 他怕你报价太低 → 觉得你交付物是"AI 一键生成、没经过人审"。
- 他怕你说"今天就能好"→ 暗示你根本没测试。

**怎么定价才不被卷死**：
1. **按业务结果报价，不按行代码报价**。"帮你把客服 FAQ 响应时间从 2 小时压到 10 分钟，$2,000"，而不是"写一个 chatbot $200"。
2. **三档价格锚点**：Basic 拿首单 / Standard 是主力 / Premium 塞满全量服务，让 Premium 显得划算。
3. **收维护费**：$50–$100/月 或 ¥300–¥800/月，把一锤子买卖变成 recurring revenue。
4. **不接"客户自己也说不清楚要啥"的单**。需求蔓延是 freelancer 最大杀手，报价单里写死功能清单，额外需求另报价。
5. **AI 成本要 pass-through + 10–15% 管理费**，不要把 LLM token 成本吃进自己利润。[B] https://betonai.net/ai-coding-freelance-rate-card-2026-what-to-charge-when-chatgpt-and-claude-are-in-your-stack-real-rates-from-71-developers/

### 7.4 国内 vs 海外平台对比

| 维度 | 国内（闲鱼/猪八戒/客栈） | 海外（Upwork/Fiverr/Contra） |
|---|---|---|
| 客单价 | 小单 ¥15–¥2,000；企业单 ¥5K–¥15 万 | 小单 $50–$500；大单 $2K–$9K |
| 抽成 | 闲鱼 0 但流量内卷；猪八戒 20–30%；客栈 10–20% | Fiverr 20%；Upwork 5–10%；Contra 0% |
| 回款 | 支付宝/微信即时到账，无外汇风险 | Upwork → Payoneer / Wise → 国内银行卡，1–3 工作日，结汇有额度 |
| 竞争 | 应届 + 宝妈 + 学生，价格战极凶 | 印度/巴基斯坦/菲律宾卖家扎堆，但 niche 化后能突围 |
| 税务 | 个人接单走经营所得，年度汇算；企业客户要发票就得注册个体户/公司 | 美国客户默认不预扣（填 W-8BEN），国内仍需自行申报境外所得 |
| 适合 | 练手、跑量、快速出第一单 | 赚美元、做品牌、进 Toptal/Contra |

收款链路：Upwork 官方支持 Payoneer / Wise / PayPal；Payoneer 可直接绑 Upwork 收款。[A] https://www.payoneer.com.cn/get-paid-by-upwork/ ；https://support.upwork.com/hc/en-us/articles/211060918-Manage-how-you-get-paid

### 7.5 接单话术模板（可直接抄）

**模板 A：Upwork / Fiverr 首次私信（英文）**
> Hi [Client name],
> Saw your post about [具体需求，复述一句]. I noticed you mentioned [客户原文里的某个细节].
> I've built [1 个类似案例链接] — same stack ([Python/n8n/LangChain]), delivered in X days, and the client is now on a $X/month maintenance plan.
> Two questions before I quote:
> 1. Do you have existing docs / FAQ data I can train on?
> 2. Is there a hard deadline, or is quality the priority?
> I can send a 10-min Loom screen recording of a working prototype tomorrow if that helps.
> — [Name]
>
> 来源：综合 https://smartremotegigs.com/first-upwork-job-no-experience/ （强调 Loom 视频 + 复述客户问题 + 不写自己简历）

**模板 B：报价单结构（中英通用）**
> **项目：[项目名]**
> - 交付范围（in scope）：列 3–5 条，写死
> - 不含范围（out of scope）：列 2–3 条（这是防需求蔓延的关键）
> - 报价：Basic ¥X / Standard ¥Y / Premium ¥Z
> - 工期：Day 1 需求确认 → Day 3 demo → Day 5 交付
> - 付款：50% 定金开工，50% 验收后结尾款
> - 修改：含 2 轮免费修改，超出按 ¥X/轮
> - 售后：交付后 14 天 bug 免费修；后续维护 ¥X/月
> - 知识产权：尾款到账后源码 / 设计稿全部交付
>
> 来源：综合 https://www.duckdblab.com/en/post/cursor-programming-side-hustle-workflow/ ；https://www.iesdouyin.com/share/video/7688572806849760521

**模板 C：闲鱼 / 微信私域首聊（中文）**
> 你好，看到你在找 [爬虫/落地页/PPT]。
> 先确认 3 件事再报价：
> 1. 你手里有没有现成的资料 / 参考网站？
> 2. 什么时候要？急单我可以加 30% 加急费。
> 3. 预算大概多少？我报高了浪费彼此时间。
> 类似案例我发你 2 个，看完你觉得风格 OK 咱们再聊。
> （不要先报数字，先问需求和预算）
>
> 来源：综合 https://ai.cheemao.com/blog/ai-coding-freelance-guide

---

## 8. 接单新手 30 天行动清单

### 第 1–3 天：定位 + 作品集
- [ ] 选 **1 个**品类（不要贪多）。推荐新手从这三个里挑一个：
  - 完全不会编程 → AI PPT / 数字人短视频 / 小红书文案
  - 会一点编程 → 爬虫 + Excel 自动化 / 落地页 / n8n 工作流
- [ ] 用 AI 工具自己做 **3 个 demo 作品**：一个同行业落地页、一个自动化脚本录屏、一个 PPT 案例。不要等客户来了才做。
- [ ] 注册账号：国内闲鱼 + 猪八戒；海外 Upwork + Fiverr（二选一先跑）。

### 第 4–7 天：上架 + 话术
- [ ] 每个平台挂 **3 个 gig**，按三档定价（Basic / Standard / Premium）。
- [ ] 标题抄 §4 的结构：**关键词 + 结果 + 时效**。
- [ ] 写好 §7.5 的三套话术模板，存成备忘录。
- [ ] 第 7 天目标：**发出 30 份 proposal / 私信**（Upwork 10 份/天 × 3；闲鱼主动回复咨询）。回复率约 5–7%，意味着会有 1–2 个对话。

### 第 8–14 天：跑通第一单
- [ ] 第一单**别挑**，哪怕 ¥15 的脚本也接，目的是拿好评和案例。
- [ ] 严格走 Day 1 需求 / Day 3 demo / Day 5 交付节奏。
- [ ] 交付物清单：源码 + 使用说明 + 录屏 + 14 天 bug 承诺。
- [ ] 第 14 天复盘：哪类咨询最多？把那个品类作为主打。

### 第 15–21 天：涨价 + 复购
- [ ] 拿到 1–2 个好评后，把 Basic 档价格 **涨 30–50%**。
- [ ] 给交付过的客户发："后续维护 ¥X/月，含 bug 修复和小改动"——转化 1 个 recurring 客户就赢了。
- [ ] 开始在小红书 / 即刻 / V2EX 发"接单日记"，私域流量是摆脱平台抽成的关键。

### 第 22–30 天：选边站
- [ ] 如果海外单回得来 → 继续投 Upwork，把 n8n / RAG / Chrome 扩展这种 niche 做深，目标时薪 $40+。
- [ ] 如果国内单回得来 → 放弃价格战，转向"企业 RAG 知识库搭建"或"企业 AI 视频包月"，客单价跳到 ¥5K+。
- [ ] 月底算账：总流水 / 实际投入小时数 = 真实时薪。低于 ¥50/h 说明还在跑量阶段，高于 ¥150/h 可以考虑全职。

---

## 9. 证据强度速查

**A 级（公开 gig / 平台页可核验）**：
- Upwork AI 开发者指导价 https://www.upwork.com/hire/ai-developers/
- Upwork LangGraph 价目 https://www.upwork.com/hire/langgraph-specialists/
- Upwork gig #1（$40/$200/$500）https://www.upwork.com/services/product/development-it-custom-ai-agents-using-gpt-4-langchain-rag-openai-agent-developer-2003700486868603681
- Upwork gig #2（$1K/$4K/$9K）https://www.upwork.com/en-gb/services/product/development-it-an-ai-agent-to-fit-your-needs-1862498463728622383
- Upwork freelancer n8n $50/h https://www.upwork.com/freelancers/odutolaemmanuel
- Upwork Chrome 扩展 $500 https://www.upwork.com/services/product/development-it-chrome-extension-with-airtable-1822621634825332721
- Fiverr AI coding 分类 https://workspace.fiverr.com/categories/programming-tech/ai-coding
- 猪八戒 PPT/文案 ¥15 https://m.zbj.com/fw/2201268.html
- 猪八戒 AI 短视频 ¥1K–¥10K/分钟 https://m.zbj.com/fw/2382817.html
- 程序员客栈 AI 兼职 ¥300–1000/天 https://www.proginn.com/cat/zhineng?freework_level_check=1&sort=6
- 电鸭远程报价帖 https://eleduck.com/posts/jAfwpr
- V2EX 接单帖（脚本 ¥300 起）https://v2ex.com/t/1235642
- Payoneer × Upwork 收款 https://www.payoneer.com.cn/get-paid-by-upwork/

**B 级（媒体 / 多源交叉）**：
- 闲鱼 AI 订单结构与月均 ¥897 https://www.cnad.com/index.php?act=view&mod=article&titleId=359272
- InfoQ 闲鱼卖 AI 案例 https://xie.infoq.cn/article/484d246597f2095b3a5c4b3ad
- AI 编程接单避坑指南 https://ai.cheemao.com/blog/ai-coding-freelance-guide
- Upwork niche 价格指南 https://uphunt.io/blog/developer-guide-niche-selection-upwork
- Fiverr gig 优化指南 https://www.jobbers.io/the-complete-fiverr-gig-optimization-guide-2026/
- Contra / Toptal / PPH 对比 https://www.secondtalent.com/resources/7-best-freelance-platforms-ai-developers/
- Vibe coding 翻车 4 大问题 https://bigideasdb.com/vibe-coding-saas-problems-how-to-fix
- Snyk: 18 CTO 里 16 个生产事故 https://snyk.io/de/articles/the-highs-and-lows-of-vibe-coding/
- 企业 RAG 报价 https://developer.cloud.tencent.com/article/2730838
- AI freelancing 平台费对比 https://cashflowabroad.com/ai-freelancing-abroad-expat-formula

**C 级（个人自述，数字未交叉验证）**：
- Dre Dyson Cursor 时薪翻倍系列 https://dredyson.com/how-im-using-this-autonomous-ai-workflow-for-cursor-to-make-money-as-a-freelance-developer-a-complete-step-by-step-guide-to-doubling-my-rates-and-landing-more-clients/
- 35 岁程序员 3 通宵 ¥2000 https://blog.csdn.net/ddxygq/article/details/158640198
- Claude Code 4 天 ¥5000 复盘 https://blog.csdn.net/u014534808/article/details/162607666
- Stripe 集成 freelancer 时薪 $2→$41 https://sylt.ing/blogs/1174/AI-Is-Gutting-the-Old-Freelance-Developer-Playbook-And-Rewriting
- 抖音各种"AI 接单月入过万"视频（见正文链接）

**D 级（疑似卖课 / 夸大，仅作反面参照）**：
- "5 万粉 AI 博主年入 120 万" https://www.iesdouyin.com/share/video/7622485093608639763
- "设计师用 AI 一周赚 2 万" https://www.iesdouyin.com/share/video/7597020738050251194
- "AI 做 PPT 年营收 500 万" https://www.iesdouyin.com/share/video/7650066379051646331
- B 站"1 个月 +1.2W 单子接不完" https://m.bilibili.com/video/BV1F9nCzZErj

---

## 10. 调研局限

1. 闲鱼 / 淘宝商品页需要登录才能看完整成交数据，本笔记用的是媒体报道 + 公开商品页文字描述，**真实成交单价可能比挂牌价低 20–40%**（议价空间）。
2. Reddit 原帖因搜索接口限制未直接抓到 r/Upwork / r/freelance 的帖子 URL，相关结论用二手综述替代，已标 B/C。
3. "真实时薪"数字多数来自博主自述（C 级），存在幸存者偏差——赚到钱的人才会发帖，亏钱的人沉默。
4. 本笔记不含税务合规建议，大额跨境收入请咨询会计。
