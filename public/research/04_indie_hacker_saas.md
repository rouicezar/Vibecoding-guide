# 用 AI 编程工具做独立产品（SaaS / 插件 / 模板 / Bot）真实赚钱调研笔记

> 调研时间：2026-09-26 ｜ 调研员视角：独立调研员，只收"做产品赚钱"的实操路径与真实数字，不罗列工具功能。
> 证据强度图例：**A** = 有公开 dashboard / Stripe 截图 / 权威媒体报道可交叉核验；**B** = 多源交叉（创始人自述 + 媒体/第三方拆解）；**C** = 单一来源自称（IndieHackers / V2EX / 博客自述，未独立核验）；**D** = 疑似吹牛/营销号口径，仅作参考。
> 所有 MRR/ARR 均标注数据时点。独立开发者收入波动大，不要把峰值当常态。

---

## 0. TL;DR（先看结论）

1. **AI 编程工具确实把"从 idea 到 MVP"的时间从 3–6 个月压到 1–3 周**（Next.js+Supabase+Stripe 栈，用 Claude Code / Cursor，中位数约 10–18 天出可付费版本）。但它**几乎没有降低获客成本**——70% 失败案例的死因依然是"没有客户"，不是"做不出来"。
2. **真正赚到钱的不是"AI 套壳"本身，而是"垂直痛点 + 自带分发"**。头部案例（PhotoAI $138K/月、HeadshotPro $300K/月、ShipFast $20K/月）共同点：选了一个极窄的人群（要职业头像的人、要发 Poshmark 的卖家、要 Next.js 模板的开发者），而不是做"通用 AI 助手"。
3. **一个人做到 $1000 MRR 是可复制的**（本笔记里有 10+ 个 $1K–$5K 档案例）；**做到 $10K MRR 需要分发能力（SEO / 社群 / 内容），不是堆功能**；**做到 $50K+ MRR 基本是"产品矩阵 + 内容工厂"，不是单个产品爆了**。
4. **中国开发者出海真实门槛不在技术，在三件事**：收款（Stripe 主体 / Paddle / Lemon Squeezy / Paddle）、合规（销售税/VAT、退款、争议）、获客（X build in public + Reddit 长尾 SEO，而不是国内那套打法）。
5. **"AI 套壳站能不能做"**：通用聊天/写作套壳已死（90% 预计 2026 年死掉），但**垂直工作流套壳（某职业、某平台、某语种的具体动作）依然能赚到 $1K–$10K MRR**，窗口期 6–18 个月，必须跑得快、贴得深。

---

## 1. 产品形态全景与真实收入区间

| 形态 | 典型定价 | 真实收入区间（单人） | 代表案例 |
|---|---|---|---|
| Micro-SaaS（月订阅） | $5–$99/月 | $1K–$80K MRR | DataFast、Senja.io、ReplyDaddy |
| Chrome 插件（免费+Pro/一次性） | $4–$30/月 或 $69 买断 | $210–$130K/月 | Closet Tools、GMass、Superpower ChatGPT |
| API Wrapper / 垂直套壳 | $10–$50/月 | $1K–$138K/月 | PhotoAI、Interior AI、HeadshotPro |
| Telegram/Discord/Slack Bot 订阅 | $5–$29/月 | $1K–€12K MRR | BotSubscription/Paladin |
| 模板 / Boilerplate / Rules | $99–$349 买断 | $8K–$21K/月 | ShipFast、CodeFast、anotherboilerplate |
| AI 包装小工具（头像/写真/翻译/总结） | $9–$39 一次性或订阅 | $5K–$300K/月 | HeadshotPro、ProfilePicture.AI |
| 小程序 / 公众号工具（国内） | ¥9–¥99 | ¥1万–¥5万/月 | 字幕精灵、背单词站 |
| 移动 App 套壳（iOS/Android） | $5–$20/月 或买断 | 两极分化大 | Vibe Coding 大学生 4 个 App |
| 开源 + 赞助 / 商业版 | $9–$19/月托管 | $1M ARR+（小团队） | Plausible、Cal.com |

---

## 2. 案例库（按 MRR 档位分组，共 35 个）

> 字段：产品 / 作者 / AI 开发工具 / idea→上线耗时 / 到首个 $1000 MRR 耗时 / 当前收入（时点+来源）/ 获客渠道 / 成本结构 / 证据强度 / 链接 / 可复制性点评。

### 2.1 头部档（$50K MRR+，多为矩阵/内容驱动）

#### 案例 1：ShipFast（Next.js boilerplate）
- **作者**：Marc Lou（@marclouvion，法国人，独居 Bali）
- **AI 工具**：自身即模板，早期手工 + 后期 AI 辅助；卖的是"铲子"不是"金子"
- **idea→上线**：数周；上线即 Product Hunt 首发
- **到 $1000 MRR**：几乎首日（买模板的人多，LTD 一次性买断模式）
- **收入**：~$17K–$20K/月（2025 年 10 月 $17,400；2025 全年个人总收入 $1,032,000）
- **获客**：X/Twitter build in public + 自带 30 万+ 邮件列表 + SEO（"nextjs boilerplate" 关键词）
- **成本**：极低（数字商品，无 API 成本），支付手续费 ~5%（Lemon Squeezy）
- **证据**：B（本人 newsletter 公开年账 + IBTimes 报道 + TrustMRR 自验证）
- **链接**：https://newsletter.marclou.com/p/i-made-1-032-000-in-2025 ｜ https://shipfa.st/
- **可复制性点评**：★★☆☆☆ 难复制——他卖铲子的前提是自己先有 30 万粉丝和"连续创业人设"。但**"卖模板给独立开发者"这个品类被验证了**。

#### 案例 2：CodeFast（编程课程）
- **作者**：Marc Lou
- **收入**：~$21K/月（2025-10 峰值 $21,300）
- **模式**：课程 + 社群，与 ShipFast 互为导流
- **证据**：B ｜ 链接：https://www.onemilliongoal.com/p/marc-lou-the-waiter-who-cracked-the
- **点评**：知识付费，靠个人 IP。无 IP 者别碰。

#### 案例 3：DataFast（营销分析 SaaS）
- **作者**：Marc Lou
- **AI 工具**：Cursor / Claude Code 重度使用
- **idea→上线**：约 200 天迭代（他自述 spent ~200 days building features）
- **收入**：$15.8K MRR，近 1000 付费客户（2025 年底），估值约 $800K（4× ARR）
- **获客**：SEO + 邮件列表交叉销售
- **成本**：API + 服务器，毛利率高于套壳站
- **证据**：B ｜ 链接：https://newsletter.marclou.com/p/i-made-1-032-000-in-2025
- **点评**：★★★☆☆ 这是他矩阵里最像"真 SaaS"的一个，垂直分析工具 + 自有分发。

#### 案例 4：TrustMRR（Stripe 收入验证目录）
- **作者**：Marc Lou
- **收入**：2025-10 $8,600/月；到 2025 年 12 月成为他最大收入线，有人出价 $1.2M 收购被拒
- **模式**：Stripe 数据验证 + 目录导流（抽成/广告）
- **证据**：B（ReaderFi 拆解 + 本人）｜ 链接：https://readerfi.com/discover/55821
- **点评**：★★★☆☆ "数据/目录型产品"是低维护高利润品类。

#### 案例 5：PhotoAI（AI 头像/写真）
- **作者**：Pieter Levels（@levelsio）
- **AI 工具**：自身全栈手写 PHP/JS，模型调 Replicate API
- **收入**：~$132K–$138K/月（2025-11），占他总收入 ~70%，约 $1.65M ARR
- **获客**：SEO（"AI headshot" 等词）+ X 自发流量
- **成本**：~$13K/月 Replicate GPU 账单（这是他矩阵里成本最高的）
- **证据**：B（Tycoon AI / FastSaaS 多源 + 本人 Stripe 播客公开口径）｜ 链接：https://tycoon.us/one-person-company/pieter-levels
- **点评**：★★★☆☆ AI 头像赛道已极卷，但 Levels 靠 10 年 SEO 资产和个人品牌仍吃大头。新玩家别再做通用 AI 头像。

#### 案例 6：Nomad List / nomads.com
- **作者**：Pieter Levels
- **起点**：2014 年一个 Google Spreadsheet 发推特众包，24 小时 100 人填数据
- **收入**：历史 $700K ARR；2025 约 $38K–$42K MRR，高留存、"无聊但稳"
- **获客**：10 年 SEO + 社群网络效应
- **证据**：B ｜ 链接：https://tycoon.us/case-studies/nomad-list
- **点评**：★☆☆☆☆ 这是时代红利（数字游民早期）+ 10 年积累，不可复制。

#### 案例 7：RemoteOK（远程招聘板）
- **作者**：Pieter Levels
- **形态**：单个 PHP 文件
- **收入**：累计 $3.4M+；月 ~$35K–$41K
- **获客**：SEO（"remote jobs"）
- **成本**：自述 < $200/月基础设施
- **证据**：B ｜ 链接：https://levels.io/stripe-cheeky-pint-john-collison
- **点评**：★★★☆☆ "招聘板/目录"是单人最赚钱的形态之一，因为收的是企业招聘费，客单价高。

#### 案例 8：Interior AI（AI 室内设计）
- **作者**：Pieter Levels
- **收入**：~$38K–$40K/月
- **证据**：C（媒体转述口径）｜ 链接：https://www.fast-saas.com/blog/pieter-levels-success-story/
- **点评**：★★☆☆☆ 垂直 AI 设计套壳，靠 SEO。

#### 案例 9：HeadshotPro（职业 AI 头像）
- **作者**：Danny Postma（@dannypostmaa，荷兰人）
- **AI 工具**：极简单栈 PHP + jQuery + Replicate
- **idea→上线**：约数月
- **到 $1000 MRR**：上线即爆发（SEO + Product Hunt 起点）
- **收入**：峰值 $300K/月（~$3.6M ARR，2024-12 口径），4 万付费用户；联盟营销单独贡献 $50K+/月（>15%）
- **获客**：自然搜索（一年 organic 带来 $30 万收入）+ 联盟计划 + PH
- **成本**：GPU API
- **证据**：B（Starter Story / Tycoon / JustDoers 多源）｜ 链接：https://startupfounderstories.com/stories/danny-postma-headshotpro-ai-headshots
- **点评**：★★★☆☆ "无聊但精准"——他自己说 Deep Agency 有流量、HeadshotPro 才赚钱。选 B2B（求职者/销售）比 C 端更付费。

#### 案例 10：Senja.io（推荐语/评价收集 SaaS）
- **作者**：Wilson Wilson + Olly Meakings（两人远程搭档）
- **收入**：$83,300 MRR，3000+ 客户，$1M+ ARR（2025）
- **证据**：B ｜ 链接：https://www.thesuccessfulprojects.com/how-two-indie-hackers-built-a-successful-micro-saas-senja-io-1m-arr/
- **点评**：★★★☆☆ 垂直小 SaaS（testimonial 收集），两个开发者不融资做到百万 ARR。

#### 案例 11：Shipper（AI app builder 微缩版）
- **作者**：David + Daniel（兄弟）
- **策略**：不发明轮子，做 $1B 市场的"1% 切片"
- **收入**：$50K+/月
- **证据**：B（Starter Story）｜ 链接：https://www.starterstory.com/shipper
- **点评**：★★★☆☆ "大公司不服务好的小众切片"策略被反复验证。

#### 案例 12：Base44（AI 建站，被 Wix $80M 收购）
- **作者**：Maor Shlomo
- **收入**：$3.5M ARR，30 万用户，$0 营销费；6 个月被 Wix 以 $80M 现金收购（2025-06）
- **证据**：B（多家媒体）｜ 链接：https://www.nxplace.com/post/how-to-build-a-profitable-micro-saas-with-claude-code-the-complete-mvp-to-revenue-playbook-782865311391
- **点评**：★☆☆☆☆ 这是被收购退出的极端案例，不可当常态；但证明"AI 建站"需求真实。

#### 案例 13：Closet Tools（Poshmark 卖家自动化插件）
- **形态**：Chrome 插件，$30/月
- **收入**：~$42K/月（IndieHackers 验证）
- **获客**：垂直人群（Poshmark 二手卖家）
- **证据**：B（ExtensionPay 引 IH 验证数据）｜ 链接：https://extensionpay.com/articles/browser-extensions-make-money
- **点评**：★★★★☆ 教科书级"垂直人群 + 插件"——服务一个极小但极愿意付费的卖家群体。

### 2.2 中腰部档（$5K–$50K MRR）

#### 案例 14：Superpower ChatGPT（Chrome 插件生态）
- **作者**：Saeed Ezzati
- **idea→上线**：一个周末（ChatGPT 发布后看到工作区空缺）
- **规模**：42 万下载、15 万周活；配套 newsletter 35 万订阅；整体五位数 MRR
- **证据**：B（IndieHackers 自述长贴）｜ 链接：https://www.indiehackers.com/post/building-a-free-chrome-extension-in-3-days-and-turning-it-into-a-5-figure-mrr-ecosystem-3rIbjigZxiFsrgqJjJYp
- **点评**：★★★★☆ 免费插件做流量 + newsletter 做留存 + Pro 做变现，三层结构。

#### 案例 15：AI Toolbox / ChatGPT Toolbox（Chrome 插件）
- **作者**：Adi Leviim + Mohammad El-Esawi
- **上线**：2024-09 Chrome 商店
- **收入**：>$10K/月，3.5 万用户（2026-07 IH 披露）
- **证据**：B ｜ 链接：https://neodrop.ai/post/G_ru7fM0nIc
- **点评**：★★★☆☆ "给 ChatGPT 加缺失的一层"是早期红利。

#### 案例 16：CWS Kit 扩展（电商/卖家工具）
- **作者**：独立开发者
- **定价**：$4/月
- **轨迹**：24 小时内首个付费客户；12 个月 1 万用户/340 付费/$1,360 MRR；18 个月 2,500+ 付费订阅/$10K MRR
- **证据**：B（其博客公开数字）｜ 链接：https://cwskit.khanakia.com/blog/from-side-project-to-10k-mrr
- **点评**：★★★★☆ 这是最"普通人"的轨迹——副业、夜间周末、18 个月做到养自己。

#### 案例 17：GMass（Gmail 邮件插件）
- **形态**：Chrome/Gmail 插件，$8–$20/月
- **收入**：~$130K/月
- **证据**：C（chromegoldmine 引 IH）｜ 链接：https://chromegoldmine.com/tools/revenue-calculator/
- **点评**：★★☆☆☆ 老牌工具，SEO 沉淀深。

#### 案例 18：CSS Scan（前端开发者工具插件，$69 买断）
- **收入**：$100K+/月
- **证据**：C ｜ 链接：https://chromegoldmine.com/tools/revenue-calculator/
- **点评**：★★☆☆☆ 一次性买断 + 开发者 SEO。

#### 案例 19：GoFullPage（截图插件，freemium $1/月）
- **收入**：~$10K/月
- **证据**：C ｜ 链接：https://chromegoldmine.com/tools/revenue-calculator/

#### 案例 20：ReplyDaddy + NoobBookLM（AI SaaS 组合）
- **作者**：Neel Seth（前大厂产品负责人）
- **AI 工具**：AI 作为编码搭档
- **变现**：ReplyDaddy $49/月，早期靠 LTD 攒现金流
- **收入**：组合 $5.3K MRR
- **支付**：用 Dodo Payments（Stripe 对国际独立开发者不友好的替代）
- **获客**：Reddit 长尾 SEO + build in public
- **证据**：B（MRR Story 专访）｜ 链接：https://www.mrrstory.com/stories/how-a-solo-founder-built-53k-mrr-with-ai-tools-and-reddit-seo
- **点评**：★★★★☆ 前大厂人转型、Reddit SEO 冷启动的范本。

#### 案例 21：BotSubscription / Paladin（Telegram & Discord 订阅机器人）
- **形态**：帮付费频道/服务器自动收会员费、发邀请链接、续扣费、处理退款
- **收入**：公开实时 dashboard 显示 €12,480 MRR（2026-09 页面）
- **定价**：免月费，从首 €85 之后抽成，随规模降点
- **证据**：A（官网实时 MRR 公开）｜ 链接：https://botsubscription.com/paladin/
- **点评**：★★★★☆ "卖铲子给做付费社群的人"——不赌内容，赌基础设施。

#### 案例 22：PlugThis（AI 用自然语言生成 Chrome 扩展）
- **获客**：Product Hunt 首发，#1 坚持 18 小时最终 #3
- **结果**：558 upvotes、2,100 访问、540 注册、首周 36 付费
- **证据**：B（IH 公开数字）｜ 链接：https://www.indiehackers.com/post/we-were-1-on-product-hunt-for-18-hours-then-lost-it-in-the-final-5-e5891c3b3b
- **点评**：★★★☆☆ PH 首发能带来首批付费，但留不住就归零。

#### 案例 23：Cluely（AI 悬浮助手，"作弊一切"）
- **定价**：$20/月 Pro
- **融资**：a16z 领投 $5.3M
- **收入**：外界估 $1M–$3M MRR（2025 年中），创始人自称数月内 $4M ARR
- **证据**：C（teardown 估算，水分大）｜ 链接：https://www.openaitoolshub.org/ai-product-research/cluely
- **点评**：D 偏 B—— viral 传播强，但有合规/伦理风险，不可作为独立开发者范本。

#### 案例 24：Plausible Analytics（开源 + 托管 SaaS）
- **作者**：4 人自筹 bootstrap 团队
- **模式**：AGPL 开源自托管免费 + 托管版 $9/月起
- **收入**：$1M ARR，7000+ 付费订阅，监控 5 万+ 网站
- **证据**：A/B（官方博客里程碑 + 小团队盈利）｜ 链接：https://plausible.io/blog/open-source-saas
- **点评**：★★★☆☆ "开源核心 + 托管转售"是被验证的可持续模式，但需要 3–5 年积累。

### 2.3 入门档（$1K–$5K MRR，最可复制）

#### 案例 25：Bolta.ai（Threads 冷启动）
- **轨迹**：45 天从 $0 到 $5,000 MRR，零广告、无邮件列表，全靠 Threads 发帖
- **证据**：C（IH 自述）｜ 链接：https://www.indiehackers.com/post/how-i-bootstrapped-to-5-000-mrr-in-45-days-using-nothing-but-threads-323ac16ed2
- **点评**：★★★☆☆ 内容冷启动可行，但 Threads 红利窗口短。

#### 案例 26：Fiction Editing SaaS（小说编辑 NLP 工具）
- **轨迹**：第 3 个月 $1,000 MRR，第 6 个月 $3,500 MRR，月环比增长 35%；单笔毛利 $4.58（76% 毛利）
- **证据**：C（创始人博客）｜ 链接：https://dredyson.com/how-i-built-a-saas-fiction-editing-tool-using-ai-prompts-and-nlp-a-founders-complete-step-by-step-guide-to-validating-developing-and-launching-a-niche-writing-product-with-lean-startup-methodolog/
- **点评**：★★★★☆ 极窄人群（写小说的人）+ 高毛利，最适合单人起步。

#### 案例 27：LinkedIn 文案改写插件（@IndieHacker07333）
- **定价**：$9/$19/$49 三档，34% 付费用户选 $19
- **收入**：$1,200 MRR
- **证据**：C ｜ 链接：https://neodrop.ai/post/SNtxEQD9NHr
- **点评**：★★★★☆ "不要 GPT-4 微调、不要 RAG"——就是一个 prompt + 编辑器，垂直人群付费。

#### 案例 28：Superpower for Gemini（Chrome 插件）
- **作者**：@Kindly_Revenue3077
- **规模**：~1 万用户，freemium Pro（月/年/终身，走 Lemon Squeezy）
- **收入**：~$210/月 MRR，累计 ~$2,100
- **证据**：C（IH 个人主页）｜ 链接：https://www.indiehackers.com/Kindly_Revenue3077
- **点评**：★★★★★ 这是最真实的"新手第一炮"——1 万免费用户只换来 $210 MRR，告诉你转化率真相。

### 2.4 中国开发者 / 中文圈案例

#### 案例 29：ShawnShi（V2EX，出海独立站）
- **轨迹**：失业后独立站上线 7 个月，月度订阅收入 $5,000+；2026-04 发帖称上线 3 个月收获 11k（HK$）MRR
- **证据**：C（V2EX 连载复盘）｜ 链接：https://www.v2ex.com/t/1233180 ｜ https://www.v2ex.com/t/1202757
- **点评**：★★★★☆ 中文圈最真实的出海连载，按月复盘成本与增长。

#### 案例 30：V2EX 裁神贴（出海 MRR ~$2,500）
- **轨迹**：GitHub 年提交近 7000 次，出海产品 MRR ~$2,500，扣成本净 ~$2,000，准备全职
- **证据**：C ｜ 链接：https://s.v2ex.com/t/1189367
- **点评**：★★★★☆ 这是"普通开发者副业出海"的中位数画像——不是 $50K，是 $2K 净收入。

#### 案例 31：字幕精灵（Electron + Whisper AI 桌面 App）
- **收入**：¥52K/月
- **技术栈**：Electron + Whisper + Python
- **证据**：C（掘金案例表）｜ 链接：https://juejin.cn/post/7644355749909119017
- **点评**：★★★★☆ 国内桌面工具 + AI 能力，客单不高但付费愿愿强。

#### 案例 32：表单工厂（SaaS）
- **收入**：¥48K/月（React + Node + PostgreSQL）
- **证据**：C ｜ 链接：同上
- 同表还有：云雀监控 ¥42K/月、API 工厂 ¥35K/月。

#### 案例 33：背单词网站（小红书引流）
- **打法**：用 Cursor 发背单词网站，小红书发"手写背单词"视频引流，累计 4300+ 付费用户，变现 ~¥12 万
- **证据**：D/C（抖音视频转述，未独立核验）｜ 链接：https://www.iesdouyin.com/share/video/7646442343972867354
- **点评**：★★★☆☆ "AI 建站 + 国内内容平台引流"路径被验证，但数字有夸大成分。

#### 案例 34：阎志涛（AIGC SaaS 出海）
- **轨迹**：出海 1 年复盘，推特大 V，目标 2 万美金 MRR
- **证据**：C（microsaas.zone 专访）｜ 链接：https://www.microsaas.zone/阎志涛：aigc-saas应用出海1年总结-万字干货/
- **点评**：★★★☆☆ 中文圈出海获客方法论的系统复盘，值得读原文。

#### 案例 35：Monica AI（Chrome 扩展 AI 聚合器）
- **形态**：免费 + Pro $79.99/年起
- **收入**：teardown 估 $50M ARR（已是团队化产品，非纯单人）
- **证据**：C（第三方拆解）｜ 链接：https://www.openaitoolshub.org/ai-product-research/monica-ai
- **点评**：★★☆☆☆ 套壳聚合器做到规模化已是团队战，个人不建议正面刚。

---

## 3. 方法论拆解

### 3.1 Idea 挖掘：去哪找"真痛点"

不要 brainstorm，去**捡别人的差评**。已被反复验证的挖需求渠道：

- **Reddit**：别看 upvote，看评论数（高评论=激烈争论=没被解决的痛）。盯 r/mildlyinfuriating（日常烦躁）、目标职业 sub（r/realestate、r/freelance、r/teachers）。关键词搜 "I wish there was"、"is there a tool that"。
  - 来源：https://launchrocket.io/blog/saas-ideas ｜ https://saasopportunities.com/blog/how-to-find-saas-ideas
- **App Store / Google Play 1–3 星差评**：有人分析 13.4 万条评论，发现 1–3 星里塞满具体的、未被满足的功能请求（"没有离线模式"、"不能跨餐复用菜谱"）。
  - 来源：https://bigideasdb.com/find-saas-ideas-from-real-user-pain-points
- **G2 / Capterra / TrustRadius 差评**：B2B 软件买家的具体抱怨，是高客单 SaaS 的金矿。筛 "doesn't have" / "wish it could"。
  - 来源：https://vynixal.com/analysis/microsaas/2026-02-19
- **Chrome 商店差评 + Upwork 招聘帖**：反复出现的外包需求 = 可产品化的重复劳动。
- **Twitter/X 抱怨**：levelsio、marc_louvion 等人都是靠盯 "build in public" 圈里的吐槽找下一个 idea。

> 核心原则：**评论数 > 点赞数；重复出现的抱怨 > 单次吐槽；愿意付费的人群（B2B / 职业卖家）> 白嫖 C 端。**

### 3.2 Build 阶段：AI 编程工具真实耗时

| 工具 | idea→首次部署（2026 实测中位数） | 适合谁 |
|---|---|---|
| Base44 | ~3 分钟 | 非技术 |
| Lovable | ~8 分钟 | 非技术/快速原型 |
| Cursor | ~25 分钟 | 技术创始人 |
| Claude Code | ~35 分钟（含 git 工作流） | 复杂多文件项目 |

来源：https://www.swfte.com/fr/blog/claude-code-vs-cursor-vs-lovable-vs-base44-2026

**真实到 MVP（带账号/数据库/Stripe/3–5 个功能）的诚实区间：**
- 简单原型：Bolt/v0 几小时–1–2 天。
- 可生产 MVP（Next.js + Supabase + Stripe + Vercel）：**10–18 天集中开发**，其中第 1 周是学习曲线。
- 完整"可付费版本"：业界共识是 **2 周**（第 14 天结束时要有第一个付费客户，不是上线）。
- 来源：https://smartchunks.com/build-saas-mvp-with-claude-code-realistic-walkthrough/ ｜ https://cadence.withremote.ai/blog/build-an-mvp-in-2-weeks ｜ https://thelaunch.space/blogs/ai-tools/ai-tools-non-technical-founders-mvp

**典型 14 天 Vibe Coding 流程**（CEOtudent）：
- Day 1：定 niche + 问题陈述（X+Reddit 调研）
- Day 2：技术栈 + 建仓 + CLAUDE.md/.cursorrules
- Day 3：落地页 + waitlist（Beehiiv/Loops）
- Day 4–12：核心功能 + Supabase + Stripe 接线
- Day 14：拿到第一个付费客户
- 来源：https://ceotudent.com/en/vibe-coding-2026-cursor-claude-code-solo-founder-guide

> 注意：这些"14 天"是**出 MVP**，不是出收入。Build 时间被 AI 压缩了 80%，但分发时间没变。

### 3.3 Launch 阶段：真实数字预期

**Product Hunt 首发（2026 口径）：**
- 成功（前 10）：发布日 5K–30K 页面访问、200–1500 试用注册、直接付费 10–50 人、300–1500 upvotes。
- 扑街（前 20 开外）：1K–5K 访问、20–100 注册。
- 现实案例：有人 PH 只拿到 2 upvotes、0 注册（dev.to 公开全部数字）。
- PH 流量发布后 3 天掉 90%+，转化率仅 1–3%（"产品游客"多）。
- 来源：https://www.buildinpublic.so/blog/product-hunt-launch-guide ｜ https://dev.to/leouno/our-product-hunt-launch-returned-2-upvotes-and-0-signups-here-is-every-number-89l ｜ https://firsto.co/blog/product-launch-platforms-comparison
- **对比**：IndieHackers 社区深度互动的帖转化率 12–24%，但需要 4–6 个月持续经营；PH 是一次性爆发。
  - 来源：https://awesome-directories.com/blog/indie-hackers-launch-strategy-guide-2025/

**其他冷启动渠道：**
- **X/Twitter build in public**：Levels/Marc Lou 模式，边做边晒数字，攒邮件列表。
- **小红书/抖音种草**：国内开发者常用（背单词案例），手写/真人出镜 > 工具录屏。
- **Reddit 长尾 SEO**：ReplyDaddy 模式，发有用的长帖慢慢沉淀。
- **SEO 起步**：PhotoAI/HeadshotPro 证明"AI 类关键词"自然搜索一年能带 $30 万收入。

### 3.4 Monetize：支付通道怎么选

| 通道 | 费率/特点 | 适合 |
|---|---|---|
| **Stripe** | 信用卡 2.9%+$0.30；195 国、135+ 币种；但**中国大陆个人主体难开**，需香港/美国/新加坡主体 | 已有海外主体、做全球订阅 |
| **Paddle** | 约 5%（含销售税处理/欺诈/争议），Merchant of Record 帮你代缴 VAT/销售税 | 不想处理税务的软件商，成本高但省心 |
| **Lemon Squeezy** | 类似 Paddle 的 MoR，数字商品友好，独立开发者常用 | 模板/插件/一次性付费 |
| **Dodo Payments** | 新兴 MoR，对国际独立开发者友好（ReplyDaddy 在用） | Stripe 开不了的替代 |
| **微信支付/支付宝** | 线下小微 0.38–0.6%，次日到账；但**仅限境内商户、不能收全球外卡** | 国内变现 |
| **爱发电 / 面包多** | 国内创作者赞助/数字商品平台 | 国内小额定购、卖模板/电子书 |

来源：https://stripe.com/zh-us/pricing ｜ https://www.paddle.com/compare/stripe ｜ https://developer.paddle.com/get-started/how-paddle-works/

**关键现实**：中国开发者出海最大的坎不是写代码，是**收款主体**。常规路径：注册香港/美国 LLC 或新加坡公司 → 开 Stripe；或直接用 Paddle/Lemon Squeezy/Dodo 做 MoR（你只管发货，它们当商户主体帮你收钱交税，抽成高但省掉合规）。

### 3.5 Retention：留人的三板斧

- **邮件列表**：Superpower ChatGPT 配套 newsletter 35 万订阅；Marc Lou 靠 30 万邮件列表让每个新品首日就有收入。**从 Day 1 就攒邮件，比功能重要。**
- **社群**：Discord/Skool 社群（BotSubscription 那类工具就是帮你做这个）。
- **内容营销**：HeadshotPro 一年 organic 搜索带 $30 万；这是慢变量，但复利最强。
- **联盟计划**：HeadshotPro 联盟单独贡献 $50K/月（>15% 收入）——给老客 20–30% 推荐佣金，比投广告便宜。

### 3.6 真实成本结构

- **API/GPU 成本**：AI 图像类最重——Levelsio 整个矩阵成本 ~$13K/月，绝大部分是 Replicate GPU 账单。文本类套壳很轻（一个总结插件用 Claude Haiku，API 成本仅 $12/月，见案例 "Claude 总结扩展 $4.7K MRR"）。
- **服务器**：Levelsio 自述基础设施 < $200/月（静态站 + 小后端）；Next.js 应用 Vercel 免费档–$20/月起步。
- **支付手续费**：Stripe ~2.9%+$0.30；Paddle/Lemon Squeezy/MoR ~5%；微信支付 0.38–0.6%。
- **AI 编程工具订阅**：Cursor $20/月、Claude Pro/Max $20–$100/月，相对收入可忽略。
- **教训**：AI 把建造成本砍了 ~80%，但**分发成本一分没降**——70% 失败案例死因仍是"客户不够"。
  - 来源：https://superframeworks.com/articles/indie-hacker-distribution-paradox

---

## 4. 五个必须单独回答的问题

### Q1：AI 套壳站现在还能不能做？（2025–2026 判断）

**能，但只剩窄门。**

- **已死的红海**：通用聊天/写作/总结套壳（"我们就是 ChatGPT 加个漂亮 UI"）。行业分析预测 **90% 的 AI wrapper 会在 2026 年前死掉**；2024 年 966 家初创关闭（同比 +25.6%）。跟踪 247 个"AI 初创"8 个月发现 73% 只是 ChatGPT 套皮，预计 18 个月内死亡。
  - 来源：https://chyshkala.com/blog/micro-saas-reckoning-ai-changed-everything-2025 ｜ https://founderreality.com/blog/why-73-of-ai-startups-are-actually-just-prompts-usage-analysis
- **为什么死**：OpenAI/Anthropic 自己会把热门功能原生做掉（你做的"AI 总结"官方直接上线）；没有护城河；API 成本随用量波动。
- **还能做的蓝海**：
  1. **垂直工作流**——不是"AI 写作"，而是"给 LinkedIn 销售写文案"（案例 27）、"给小说作者做 NLP 编辑"（案例 26）。
  2. **绑数据/绑场景**——把 AI 塞进一个具体平台（Poshmark 卖家、Gemini 重度用户、Telegram 付费频道），而不是做独立网页。
  3. **交易撮合型 Bot**——收入随用户动作抽成，不靠固定订阅。
- **结论**：套壳站属于"短跑选手"，不是"马拉松"。$1K–$10K MRR 真实可达，但窗口期 6–18 个月，必须跑得快、贴得深、持续加功能，否则被平台官方功能碾死。
  - 来源：https://mrguo.life/blog/ai-wrapper-business-profitability-strategy-en ｜ https://kingy.ai/news/research-report-the-ai-wrapper-and-application-market/

### Q2：一个人做 SaaS 的真实时间投入？

- **Build**：用 AI 工具，一个可付费 MVP 是 **2–4 周集中开发**（每天几小时到全职）。
- **到 $1000 MRR**：中位数 3–6 个月（案例 26 是 3 个月；案例 16 是 12 个月才 $1,360）。
- **到盈亏平衡**：副业口径下，案例 16（CWS Kit）用了 **18 个月**做到插件收入替代工资；V2EX 裁神贴是副业一年多到净 $2,000/月。
- **每天几小时**：头部全职者每天 8–12 小时（裁神贴 GitHub 年提交 7000 次、凌晨两三点睡）；副业成功案例多为"夜间 + 周末"持续 1–2 年。
- **真相**：AI 没把"赚钱"变成周末项目，只是把"做出来"变成周末项目。**分发和留存才是那个要烧 1–2 年的部分。**

### Q3：中国开发者做出海 SaaS 的真实路径？

1. **支付**：首选 Paddle / Lemon Squeezy / Dodo（MoR，你不用自己处理 VAT/销售税/争议，抽 ~5%）；要长期做再注册香港/美国主体开 Stripe。国内微信支付只服务国内用户，不能收全球外卡。
2. **合规**：选 MoR 最大的好处是税务合规外包；自己做 Stripe 则要自己处理全球销售税/VAT、退款、PCI。隐私政策/服务条款用 AI 生成 + 律师过一遍。
3. **获客**：别照搬国内打法。有效路径是——**X build in public 攒关注 + Reddit/IndieHackers 长帖长尾 SEO + Product Hunt 一次性首发**；小红书/抖音那套对海外 C 端无效。中文圈可参考 ShawnShi（V2EX 连载）、阎志涛（万字出海复盘）。
4. **现实参照**：中文圈出海中位数不是 $50K，是 **$2K–$5K MRR**（裁神贴 $2.5K、ShawnShi $5K）。

### Q4：AI 编程工具对独立开发者收入的真实影响？

**一半是真的，一半是炒作。**
- **真的部分**：Build 阶段。一个会点编程的人，用 Claude Code/Cursor，2 周能出过去要 3 个工程师 3 个月的 MVP（案例 25/26/28 全是 AI 辅助快速上线）。Base44 一个人做到 $3.5M ARR 被 $80M 收购，是"1 人 = 小团队"的极端证据。
- **炒作部分**：收入没被等比例放大。**70% 失败案例依然是"没客户"**——AI 把建造成本砍 80%，但分发成本几乎没降。会用 AI 写代码的人从 1% 涨到 20%，于是"做出来"不再稀缺，"有人买"反而更稀缺。
- **净结论**：AI 让"一个能干掉一个工程团队"，但**没让"一个人自动获得客户"**。它放大执行力，不放大需求。你的护城河从"会不会写"变成"懂不懂某个痛点人群 + 会不会分发"。

### Q5：10 个"已被证伪的 idea"（做了没人买）

1. **通用 AI 聊天/写作助手网站**——被 ChatGPT/Claude 官方碾死，无留存。
2. **"给非技术创始人做的通用仪表盘 SaaS"**——目标客户不存在：非技术人要么用 Google Sheets，要么雇人，要么太早不需要（案例：Kapil Paliwal 5 个 SaaS 里唯一活下来的不是这个）。
   - 来源：https://kapilpaliwal.hashnode.dev/i-built-5-saas-products-and-only-one-actually-works
3. **AI 英语学习 App（闭门做 4 个月）**——0 付费用户，没验证就闷头写。
   - 来源：https://www.indiehackers.com/post/the-reality-of-building-an-ai-learning-app-4months-zero-revenue-6343a065fd
4. **健身 AI App + 8 个月发 350 条 Instagram Reels**——只换来 16 个下载。产品没需求，营销救不了。
   - 来源：https://vynixal.com/analysis/indiehackers/2026-06-06/marketing-app-8-months-16-users-lessons
5. **"我自己才需要的超 niche 工具"**——David Mohl 做了 7 个项目，最 niche 的那个只有 2 个活跃用户，因为"我以为我代表市场，其实我是唯一用户"。
   - 来源：https://david.coffee/one-year-of-indie-hacking/
6. **$99/$299/$999 定价的 B2B AI 工具，冷邮件 50 封 0 回复**——19 天 $0 收入 0 用户，没品牌没信任。
   - 来源：https://vynixal.com/analysis/indiehackers/2026-06-28/ai-visibility-saas-honest-build-diary
7. **精致打磨 3 个月才敢上线的"完美产品"**——失败案例共性：90% 时间做没人要的功能，10% 时间想怎么触达用户，从没跟潜在客户聊过。
   - 来源：https://www.indiehackers.com/post/i-built-a-saas-that-got-0-paying-customers-at-launch-distribution-was-the-real-problem-all-along-4b4ff41e74
8. **"AI 工厂/Agent 平台"（无流量无收入）**——levelsio 公开点名：一堆人做了复杂的 AI agent "工厂"，但既没流量也没收入。
9. **又一个通用 AI 头像/写真站（无 SEO 资产、无品牌）**——PhotoAI/HeadshotPro 吃掉了关键词和信任，新站纯投流必亏。
10. **又一个 SaaS boilerplate（没个人 IP、没邮件列表）**——ShipFast 卖铲子的前提是有 30 万粉丝；新手做第 120 个 Next.js 模板，Gumroad 上典型是 $800–$3,500/月的长尾，且要 3–6 个月爬坡、前置 40–80 小时。
    - 来源：https://jakeinsight.com/side-income/2026-04-06-sell-prebuilt-nextjs-templates-on-gumroad/

---

## 5. 从 0 到第一个 $1000 MRR 的 90 天路线图

> 目标：90 天内拿到 20–100 个付费用户（按 $10–$50 客单），不是做出完美产品。

### 第 1–14 天：验证（不要写代码）
- Day 1–3：在 Reddit / G2 / App Store 差评里，挑一个**你自己懂、且人群愿意付费**的窄痛点（职业卖家/某平台重度用户/某专业从业者）。攒 20 条具体抱怨。
- Day 4–7：写 1 页落地页（Carrd / Next.js + Tailwind），讲清楚"给谁、解决什么、多少钱"，挂 waitlist（Beehiiv/Loops 免费）。
- Day 8–14：**在目标人群出没的社区发 5–10 条真诚帖子/评论**，冷 DM 20 个潜在用户聊。**有人口头说"我愿意付钱"之前，不写一行产品代码。**
- 交付物：10+ 人表达兴趣，3+ 人愿意当 beta。

### 第 15–35 天：Build 一个"丑但能用"的 MVP
- 技术栈默认：Next.js + Supabase（DB+Auth）+ Stripe/Paddle + Vercel。
- 用 Claude Code / Cursor，**只做一个核心动作**（别做仪表盘、别做设置页）。
- Day 35 前上线，接好支付（没支付按钮的上线等于没上线）。
- 成本控制在 < $50/月。

### 第 36–60 天：拿前 10 个付费用户
- 把 beta 用户转成付费（给早鸟价/终身价换第一笔钱和反馈）。
- 在你验证过的那个社区持续输出有用内容（不是广告，是解决问题）。
- 每天盯：有多少人从落地页到注册到付费。**第 60 天必须有 ≥10 个付费用户，否则换 idea，不要恋战。**

### 第 61–90 天：把增长通道跑通一条
- 选一条你能坚持的分发：X build in public 每日更新 / Reddit 长尾长帖 / 小红书真人内容。
- 上 Product Hunt（作为一次性事件，别押注）。
- 开联盟/推荐机制（老客拉新给 20–30%）。
- **目标：第 90 天 $1,000 MRR**（= 20–100 个付费用户，取决于客单）。

> 90 天后：如果到了 $1K，复利开始（留存 + SEO + 口碑）；如果没到，**复盘是需求问题还是分发问题**，而不是继续加功能。失败案例 90% 死于在没需求的产品上加功能。

---

## 6. 来源汇总（核心 URL）

- Marc Lou 2025 年 $1,032,000 公开年账：https://newsletter.marclou.com/p/i-made-1-032-000-in-2025
- Marc Lou 收入拆解（2025-10）：https://www.onemilliongoal.com/p/marc-lou-the-waiter-who-cracked-the
- Pieter Levels 一人公司拆解：https://tycoon.us/one-person-company/pieter-levels
- Nomad List 案例：https://tycoon.us/case-studies/nomad-list
- Stripe 播客（Levelsio 公开收入口径）：https://levels.io/stripe-cheeky-pint-john-collison
- Danny Postma / HeadshotPro：https://startupfounderstories.com/stories/danny-postma-headshotpro-ai-headshots
- Chrome 插件收入榜：https://extensionpay.com/articles/browser-extensions-make-money ｜ https://chromegoldmine.com/tools/revenue-calculator/
- Superpower ChatGPT 长贴：https://www.indiehackers.com/post/building-a-free-chrome-extension-in-3-days-and-turning-it-into-a-5-figure-mrr-ecosystem-3rIbjigZxiFsrgqJjJYp
- CWS Kit $10K MRR 轨迹：https://cwskit.khanakia.com/blog/from-side-project-to-10k-mrr
- BotSubscription 实时 MRR：https://botsubscription.com/paladin/
- ReplyDaddy $5.3K MRR（Reddit SEO）：https://www.mrrstory.com/stories/how-a-solo-founder-built-53k-mrr-with-ai-tools-and-reddit-seo
- Senja.io $1M ARR：https://www.thesuccessfulprojects.com/how-two-indie-hackers-built-a-successful-micro-saas-senja-io-1m-arr/
- Base44 被 Wix $80M 收购：https://www.nxplace.com/post/how-to-build-a-profitable-micro-saas-with-claude-code-the-complete-mvp-to-revenue-playbook-782865311391
- Plausible $1M ARR 开源：https://plausible.io/blog/open-source-saas
- Product Hunt 真实数字：https://www.buildinpublic.so/blog/product-hunt-launch-guide ｜ https://dev.to/leouno/our-product-hunt-launch-returned-2-upvotes-and-0-signups-here-is-every-number-89l
- AI wrapper 生死判断：https://chyshkala.com/blog/micro-saas-reckoning-ai-changed-everything-2025 ｜ https://mrguo.life/blog/ai-wrapper-business-profitability-strategy-en
- AI 编程工具耗时对比：https://www.swfte.com/fr/blog/claude-code-vs-cursor-vs-lovable-vs-base44-2026 ｜ https://smartchunks.com/build-saas-mvp-with-claude-code-realistic-walkthrough/
- 失败案例合集：https://www.indiehackers.com/post/i-built-a-saas-that-got-0-paying-customers-at-launch-distribution-was-the-real-problem-all-along-4b4ff41e74 ｜ https://david.coffee/one-year-of-indie-hacking/
- 分发悖论（AI 不解决获客）：https://superframeworks.com/articles/indie-hacker-distribution-paradox
- 中国出海：V2EX https://www.v2ex.com/t/1233180 ｜ 阎志涛万字复盘 https://www.microsaas.zone/阎志涛：aigc-saas应用出海1年总结-万字干货/
- 支付：Stripe 定价 https://stripe.com/zh-us/pricing ｜ Paddle vs Stripe https://www.paddle.com/compare/stripe

---

*备注：本笔记中标注 C/D 证据强度的数字来自创始人自述或第三方转述，存在幸存者偏差和营销夸大；做决策前建议对关键案例回溯到原始 Stripe/收入截图或一手访谈。*
