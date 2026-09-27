# 海外独立开发者用 AI 编程工具真实赚钱案例调研笔记

> 调研时间：2026-09-26
> 调研范围：Reddit、Hacker News、Indie Hackers、X/Twitter build-in-public 账号、YouTube（Marc Lou、Liam Ottley、Theo、Fireship 生态）、Product Hunt、Medium/Substack、个人博客
> 调研目的：只记录"怎么用 AI 编程工具赚钱"的实操细节，不写工具功能介绍
> 证据强度说明：A=有公开收入截图/Stripe 数据/官方报道可验证；B=可信媒体或多源交叉；C=个人单方面宣称无截图；D=疑似标题党/夸大/无法复现

---

## 目录

- [一、Micro-SaaS / API Wrapper / 目录站 / 内容工具](#一micro-saas--api-wrapper--目录站--内容工具)
- [二、Chrome 插件 / 浏览器扩展](#二chrome-插件--浏览器扩展)
- [三、独立游戏 / 浏览器游戏](#三独立游戏--浏览器游戏)
- [四、卖模板 / Boilerplate / 规则包](#四卖模板--boilerplate--规则包)
- [五、接外包 / AI 自动化代理（给中小企业做交付）](#五接外包--ai-自动化代理给中小企业做交付)
- [六、Telegram / Discord Bot 订阅](#六telegram--discord-bot-订阅)
- [七、卖课程 / 付费 Newsletter / 会员社区 / YouTube 变现](#七卖课程--付费-newsletter--会员社区--youtube-变现)
- [八、AI 包装小工具 / 自由职业者提效交付](#八ai-包装小工具--自由职业者提效交付)
- [九、典型标题党 / 吹牛套路拆解](#九典型标题党--吹牛套路拆解)
- [十、最值得普通人抄作业的 3 个路径](#十最值得普通人抄作业的-3-个路径)

---

## 一、Micro-SaaS / API Wrapper / 目录站 / 内容工具

### 案例 1：Pieter Levels — fly.pieter.com 浏览器飞行游戏 + PhotoAI

1. **案例标题**：3 小时用 Cursor 写出浏览器飞行游戏，17 天跑到 $1M ARR；PhotoAI 长期 $105–138K MRR
2. **当事人**：Pieter Levels（@levelsio，https://levels.io/ ）
3. **用了哪个/哪些工具**：Cursor（主力写游戏代码）、Claude/Grok 辅助补全；PhotoAI 早期用 vanilla PHP + SQLite，后期大量用 AI 辅助
4. **做了什么产品或服务**：fly.pieter.com 是一个 Three.js 多人浏览器飞行模拟游戏，无需下载，直接开网页飞；变现方式是游戏内飞艇广告位（blimp sponsor slot），每个广告位 $5,000/月。PhotoAI 是 AI 模特/写真生成 SaaS，订阅制。
5. **获客方式**：X/Twitter live-tweet 开发过程，Elon Musk 转发放大；游戏零投放，纯社交传播。PhotoAI 靠 SEO + X build in public + 老产品 NomadList/RemoteOK 导流。
6. **定价 / 收入数字**：fly.pieter.com 第 10 天 $38,360 MRR，第 17 天 $87,000 MRR，峰值约 $138K/月（约占 Levels 当时总收入 70%）。PhotoAI 稳定在 $105–138K MRR，月成本约 $13K（主要是 Replicate GPU 费），净利率 >87%。数字为当事人自报 + 多个独立来源交叉验证。
7. **实操工作流**：(a) 在 Cursor 里输入接近"make a 3D flying game in the browser"的自然语言描述；(b) 边写边在 X 直播过程；(c) 用 Three.js 做 3D 渲染层；(d) 游戏上线后开放游戏内广告位售卖；(e) 没有做任何传统后端架构，单文件 40,870 行 index.php 是 Levels 的标志性风格。
8. **证据强度**：B（多源交叉 + 当事人长期公开财报，但 fly.pieter 的 $1M ARR 峰值是广告位预订收入，不是可持续月费，存在夸大成分）
9. **来源 URL**：
   - https://www.builtwithagents.ai/strategy/vibe-coded-flight-sim-1m-arr-17-days
   - https://prometheusroot.com/people/pieter-levels/
   - https://aiforautomation.io/cases/photoai-pieter-levels
   - https://andrew.ooo/posts/pieter-levels-photo-ai-solo-founder/
10. **可复制性点评**：**极难复制**。Levels 有 50 万+ X 粉丝和 10 年独立开发者履历，Elon Musk 转发是运气。普通人照着做游戏，大概率 0 广告位卖出。可复制的是"用 Cursor 3 小时出可玩 demo 然后发 X"这个动作，不是收入数字。

---

### 案例 2：Tony Dinh — TypingMind（Claude/GPT 的 Better UI 包装）

1. **案例标题**：3 天写出 ChatGPT 前端包装，11 天赚 $22K，现在 $137K/月
2. **当事人**：Tony Dinh（越南独立开发者，https://news.tonydinh.com/ ）
3. **用了哪个/哪些工具**：早期自己写（2023 年 OpenAI API 刚发布时），后期大量用 Claude/Cursor 迭代；产品本身是 BYOK（Bring Your Own Key）的 ChatGPT/Claude 浏览器客户端
4. **做了什么产品或服务**：TypingMind —— 给 ChatGPT/Claude API 套一个更好的 Web UI（支持 prompts 库、文件夹、AI agents 插件团队、数据导出）。用户自带 API key，Tony 只卖软件 license + 订阅。
5. **获客方式**：X build in public、Product Hunt 首发、邮件 newsletter、播客嘉宾。零广告投放。
6. **定价 / 收入数字**：首发第 1 天 $1K，第 2 天 $2K，第 3 天 $4K，前 11 天累计 $22K。2024 年 2 月订阅部分 $15K MRR，累计破 $500K。2025–2026 年月收入 $130–160K（约 $1M+ ARR），B2B 团队版订阅占月收入 50%+。数字为当事人 newsletter 自报 + 第三方 Latka 估算交叉。
7. **实操工作流**：(a) OpenAI 宣布 ChatGPT API 后第 5 天动手；(b) 周末写出 MVP（一个 Chrome 插件 + Web 界面）；(c) 在 Twitter 实时发开发进度；(d) 首发做一次性买断 + 订阅混合；(e) 后期加 B2B 团队版（SSO、团队共享 prompts）拉高 ARPU。
8. **证据强度**：B（当事人长期公开 newsletter，且有 Latka/oneManDB 等第三方跟踪；但 $137K 是毛收入不是利润，且包含老产品 BlackMagic 的收购款摊销）
9. **来源 URL**：
   - https://news.tonydinh.com/p/500k-milestone-my-reflections-after
   - https://claudelab.jp/articles/207
   - https://www.distributionbase.com/blog/apps/b2b-saas/typingmind
   - https://tycoon.us/one-person-company/tony-dinh
10. **可复制性点评**：**窗口期已过但模式可抄**。2023 年做 ChatGPT UI 包装是蓝海；2026 年再做一个"ChatGPT 前端"已经卷成红海。可复制的是 BYOK 模式（用户自己付 API 费，你只收软件费，零 GPU 成本）和"等新模型 API 发布后 5 天内动手"的速度打法。

---

### 案例 3：Sabrine Matos — Plinq（女性安全背景调查 App）

1. **案例标题**：非技术增长营销人，45 天用 Lovable 写出女性安全 App，3 个月 $456K ARR
2. **当事人**：Sabrine Matos（巴西增长营销人，Lovable 官方案例主人公）
3. **用了哪个/哪些工具**：Lovable（全栈，无代码）+ Supabase（数据库/认证，Lovable 原生集成）
4. **做了什么产品或服务**：Plinq —— 女性约会安全背景调查工具，输入名字查询公开犯罪记录数据库，3 个月内帮助标记了 200+ 潜在危险情况。
5. **获客方式**：巴西本地社区传播 + 女性安全话题的社交裂变；Lovable 官方案例背书带来的流量。
6. **定价 / 收入数字**：3 个月 10,000+ 用户，R$2.2M ARR（约 $456K USD）。数字来自 Lovable 官方 case study 和多个二手报道。
7. **实操工作流**：(a) 起因是看到一个女性被有犯罪记录的伴侣杀害的新闻；(b) 在 Lovable 里用自然语言描述需求，45 天写出前端+后端+工作流；(c) 接公开犯罪记录 API；(d) 上线后通过巴西女性社区传播。
8. **证据强度**：B-（Lovable 官方 case study 是营销内容，会选择性放大成功案例；但数字被多家独立媒体引用，且产品确实在运营）
9. **来源 URL**：
   - https://lovable.dev/guides/build-saas-product-without-coding
   - https://www.aieatingtheworld.com/articles/non-technical-founder-lovable-app-builder-success-story
   - https://michaelgoitein.com/the-200m-product-strategy-lovable-uses-to-become-the-last-piece-of-software-youll-ever-need/
10. **可复制性点评**：**产品方向可抄，收入数字不可抄**。她的真实壁垒是"巴西女性安全"这个垂直领域的增长营销直觉，不是 Lovable。普通人用 Lovable 做一个通用工具会立刻被卷死；但"用 Lovable 45 天出 MVP 打一个你有深度领域认知的垂直市场"这个路径成立。

---

### 案例 4：Bhanu Teja — SiteGPT（AI 客服聊天机器人）

1. **案例标题**：24 岁印度 solo 开发者，用免费工具 SEO 打法做到 $13–95K MRR
2. **当事人**：Bhanu Teja Paccha（IIT Madras 毕业，https://www.starterstory.com/bhanu ）
3. **用了哪个/哪些工具**：早期用 OpenAI API + Pinecone + Cloudflare Workers；开发辅助大量用 ChatGPT/Claude
4. **做了什么产品或服务**：SiteGPT —— 把客户网站内容喂给 AI，生成一个可嵌入网站的 AI 客服聊天机器人。
5. **获客方式**：**零付费广告**。核心打法是做一堆免费 SEO 工具（如 "Website Chatbot Builder"、"AI Chatbot Playground"），吸引 Google 搜索流量，再把免费工具用户转化为付费客户。
6. **定价 / 收入数字**：2023 年 3 月上线；2024 年 2 月达 $95K MRR（约 $1.14M ARR）；2025 年稳定在 $15.8K MRR（churn 后）；2026 年 3 月单月 $58.3K（含其他 AI 工具）。130+ 企业客户，平均客单价 $100/月，LTV $1,700–1,800。数字为当事人自报 + Starter Story/Superframeworks 交叉。
7. **实操工作流**：(a) 先做免费工具引流（SEO）；(b) 免费工具里植入 SiteGPT 的试用入口；(c) 客单价从 $50/月起，按聊天次数升级；(d) 兄弟加入全职后才扩团队。
8. **证据强度**：B（Starter Story 有完整访谈，数字有波动但趋势可信；$95K 峰值和 $15.8K 现状差距大，说明 churn 严重）
9. **来源 URL**：
   - https://www.starterstory.com/bhanu
   - https://www.stackstarts.com/sitegpt-free-tools-playbook-13k-mrr/
   - https://superframeworks.com/case-study/sitegpt
   - https://crazyburst.com/ai-saas-solo-founder-success-stories-2026/
10. **可复制性点评**：**这是最值得抄的路径之一**。免费工具 SEO 引流 + 垂直 AI SaaS 转化，工具成本极低（Cloudflare Workers 几乎免费）。壁垒不在技术在 SEO 耐心——他做了上百个免费落地页才跑通。

---

### 案例 5：Cameron Trew — Kleo + Mentions（LinkedIn 内容工具）

1. **案例标题**：前高级工程师，用 Claude Code 4 周重写 Kleo，90 天做到 $82K MRR
2. **当事人**：Cameron Trew（@camtrew，LinkedIn 上 build in public）
3. **用了哪个/哪些工具**：Claude Code（终端 agent，主力重写）
4. **做了什么产品或服务**：Kleo —— LinkedIn 内容自动化 Chrome 扩展（帮你生成 LinkedIn 帖子、分析竞争对手）；Mentions —— 新做的 mentions 监控工具。
5. **获客方式**：LinkedIn 有机内容（Cam Trew 自己每天发 LinkedIn build in public 帖子），零广告。
6. **定价 / 收入数字**：Kleo $62K MRR + Mentions $20K MRR = 合计 $82K MRR，90 天达成。Cam 自报"30 天做了 $150K"。数字为当事人 LinkedIn 自报 + Startup Founder Stories 采访。
7. **实操工作流**：(a) 先做了一版 Kleo 2.0 代码库，完全废掉；(b) 用 Claude Code 从零重写 MVP，4 周完成；(c) 每天在 LinkedIn 发 build in public 内容；(d) 老 LinkedIn 扩展用户直接转化。
8. **证据强度**：B-（当事人有 LinkedIn 公开发帖，Startup Founder Stories 有深度采访；但 $150K/30 天是毛收入，未披露 churn 和退款）
9. **来源 URL**：
   - https://startupfounderstories.com/stories/cam-trew-jake-ward-kleo-62k-mrr-linkedin-content
   - https://claudelab.jp/articles/203
10. **可复制性点评**：**前提是已有受众**。Cam Trew 是前高级工程师，在 LinkedIn 已有一定人脉。普通人从零开始做 LinkedIn 内容工具，获客会慢很多。但"用 Claude Code 4 周重写一个老产品"这个动作本身可抄。

---

### 案例 6：Eric Provencher — Repo Prompt（AI 编程上下文工具）

1. **案例标题**：先把 AI 编程上下文工具免费送，一年内做到 5 位数 MRR 后辞职
2. **当事人**：Eric Provencher
3. **用了哪个/哪些工具**：Repo Prompt 本身就是帮 Claude/Cursor 等长上下文模型整理代码库上下文的工具；开发过程用了 Claude/Cursor
4. **做了什么产品或服务**：Repo Prompt —— 解决"用长上下文 AI 模型时，怎么把整个 repo 喂给模型"的工作流痛点。最初免费，后来加付费层。
5. **获客方式**：先在自己做 Apple Vision Pro 游戏时自用；在开发者社区（Reddit/HN/X）分享工作流，power user 社区口碑传播。
6. **定价 / 收入数字**：不到一年做到 >$10K/月 MRR，然后辞职全职做。数字为 Indie Hackers 官方采访。
7. **实操工作流**：(a) 自己做 Vision Pro 游戏时遇到痛点；(b) 做个免费工具解决自己的问题；(c) 在开发者社区分享；(d) power user 多了之后加付费层（团队功能、更大 repo 支持）。
8. **证据强度**：B（Indie Hackers 官方 post + Startup Founder Stories 深度采访交叉）
9. **来源 URL**：
   - https://www.indiehackers.com/post/tech/hitting-a-5-figure-mrr-within-a-year-by-giving-his-ai-coding-tool-away-for-free-xRJqBpXUMxlHQQ01axeK
   - https://startupfounderstories.com/stories/eric-provencher-repo-prompt-10k-mrr-ai-coding-context
10. **可复制性点评**：**这是最干净的"scratch your own itch"路径**。你自己用 AI 编程工具时遇到的痛点，就是别人的痛点。先免费做，等社区跑起来再收费。

---

### 案例 7：OpenAlternative（开源替代品目录）

1. **案例标题**：一年 side project 赚 $79K，12 月跨 $6K MRR
2. **当事人**：Indie Hackers 用户（公开帖）
3. **用了哪个/哪些工具**：未明确披露具体工具，但属典型 AI 辅助建站
4. **做了什么产品或服务**：OpenAlternative —— "开源替代品"目录（列每个商业软件的开源替代）。变现靠 featured listings（付费置顶）、sponsorship、广告。
5. **获客方式**：SEO + 开发者社区口碑；目录站天然有 SEO 优势。
6. **定价 / 收入数字**：2025 年 gross revenue $57,361（同比 +516%），12 月跨 $6K MRR。数字为当事人在 Indie Hackers 年终复盘帖自报。
7. **实操工作流**：(a) 先做免费目录；(b) 攒 SEO 流量；(c) 向被收录的开源项目收 featured listing 费；(d) 接广告和 sponsorship。
8. **证据强度**：B-（Indie Hackers 官方 post，当事人自报，无 Stripe 截图但口径清晰）
9. **来源 URL**：https://www.indiehackers.com/post/79k-from-side-projects-in-2025-my-year-in-review-e145b2fa95
10. **可复制性点评**：**目录站是普通人最容易起步的形态之一**。技术门槛低（AI 几天就能搭），核心是选一个有人搜的垂直主题 + 持续做 SEO。

---

### 案例 8：Jacky Chou — BrowserBlast / Indexsy（AI 本地 SEO 软件）

1. **案例标题**：非技术营销人，用 Claude Code 3 天做出 rank-tracking SaaS，首发 12 小时 $700
2. **当事人**：Jacky Chou（https://jackychou.com/ ，@indexsy）
3. **用了哪个/哪些工具**：Claude Code（72 小时写出 MVP）；部署在 Cloudflare Workers + D1 + KV（$5/月）
4. **做了什么产品或服务**：Indexsy —— 排名追踪 SaaS；BrowserBlast —— AI 本地 SEO 软件，500+ 客户。
5. **获客方式**：**先做 2 年 YouTube 内容攒受众**，每天发一条 SEO 相关视频，信任起来后推产品，首发当月 $20K MRR。
6. **定价 / 收入数字**：2025 年全产品组合 $2.92M 收入，6 个产品。Indexsy 首发 125 个 lifetime deal $99 = $12,375 上限，前 12 小时 $700；后续计划 $29/月 BYOK → $79/月 managed。数字为当事人网站公开 + Modern Creator 视频。
7. **实操工作流**：(a) 花 2 年每天发 YouTube 视频攒 SEO 受众；(b) 用 Claude Code 在 Cloudflare 上 3 天写出 MVP；(c) 首发 capped lifetime deal（$99×125）快速回款；(d) 转月付 BYOK 模式（用户自带 DataForSEO API key）。
8. **证据强度**：B（当事人网站公开 2025 收入 $2.92M，Modern Creator 有完整视频；但单产品拆分是自报）
9. **来源 URL**：
   - https://moderncreator.app/2026-06-24-jacky-chou-from-indexsy-i-built-a-saas-in-3-days-with-claude-code-100-solo
   - https://jackychou.com/
10. **可复制性点评**：**关键不是 3 天写出来，是 2 年内容积累**。他的壁垒是 2 年 YouTube 频道，不是 Claude Code。普通人没有 2 年受众，3 天写出 MVP 也卖不动。

---

### 案例 9：Samuel Rondot — StoryShort 等 3 个 SaaS

1. **案例标题**：前眼镜店验光师，看了 15 小时 YouTube 教程自学编程，现在 3 个 SaaS 月入 $35K
2. **当事人**：Samuel Rondot（前 optician）
3. **用了哪个/哪些工具**：Claude Code（处理 90% 开发工作）
4. **做了什么产品或服务**：StoryShort 等 3 个 SaaS 产品（内容/短视频方向）
5. **获客方式**：X build in public + 产品间互相导流
6. **定价 / 收入数字**：$35,000/月，3 个 SaaS 合计。数字为当事人 Twitter 自报 + AI for Automation 案例整理。
7. **实操工作流**：(a) 花 3 年、看 15 小时 YouTube 编程教程入门；(b) 现在 Claude Code 写 90% 代码，他只管产品方向和营销；(c) API 成本（ElevenLabs、OpenAI 等）是主要支出。
8. **证据强度**：C（当事人 Twitter 自报，第三方整理但无 Stripe 截图）
9. **来源 URL**：https://aiforautomation.io/cases/storyshort-samuel-rondot
10. **可复制性点评**：**"15 小时教程就入行"是标题党**。真实情况是他花了 3 年时间试错。Claude Code 处理 90% 代码是真的，但选品和营销仍是他自己做的。

---

### 案例 10：NotFair — Claude 驱动的 Google Ads 优化 agent

1. **案例标题**：给 Claude 读写 Google Ads 权限，$3.2K MRR，34 个付费订阅
2. **当事人**：未具名（NeoDrop 拆解文章披露）
3. **用了哪个/哪些工具**：Claude API 作为大脑
4. **做了什么产品或服务**：NotFair —— 给 Claude 实时读写客户 Google Ads 账户的权限，它自动发现浪费的广告费、提出修复方案、执行已批准的修改。
5. **获客方式**：未详细披露，Stripe 数据可查
6. **定价 / 收入数字**：$3,247 MRR，34 个 active subscriptions（2026-06-15 Stripe 验证）；前 30 天收入 $6,473。
7. **实操工作流**：(a) 接 Google Ads API；(b) 让 Claude 定期拉取账户数据；(c) 生成优化建议推给用户审批；(d) 用户批准后自动执行。
8. **证据强度**：B（Stripe 数据通过 TrustMRR 验证，NeoDrop 是专业拆解站）
9. **来源 URL**：https://neodrop.ai/zh-cn/post/02LXj6Tne7L
10. **可复制性点评**：**垂直领域 API + AI agent 是高客单价路径**。但需要你懂 Google Ads 这个垂直领域，纯技术人做不好。

---

### 案例 11：SimpleClaw — 一键 AI agent wrapper

1. **案例标题**：一周做到 $18K MRR 然后挂牌出售（$225K 要价）
2. **当事人**：Savio 相关团队（NeoDrop/andrew.ooo 拆解）
3. **用了哪个/哪些工具**：AI agent 包装层
4. **做了什么产品或服务**：SimpleClaw —— "一键 AI agent"产品
5. **获客方式**：未详细披露
6. **定价 / 收入数字**：$18K MRR 一周达成，挂牌要价 $225K（按 12–13 个月回本倒推）。数字为交易所挂牌数据。
7. **实操工作流**：(a) 快速包装一个 AI agent；(b) 跑一周流量；(c) 验证需求后直接挂牌卖。
8. **证据强度**：C（挂牌数据可见，但 $18K MRR 是否可持续存疑，可能是流量脉冲）
9. **来源 URL**：https://andrew.ooo/posts/simpleclaw-18k-mrr-one-week-flip/
10. **可复制性点评**：**这是套利不是生意**。一周 $18K MRR 然后卖，说明作者自己都不认为它有护城河。普通人别指望能留住这种用户。

---

### 案例 12：Sinano Koak — AI 自动化付费 Newsletter

1. **案例标题**：用多 AI agent 流水线做垂直 newsletter，$2,400/月被动收入
2. **当事人**：Sinan Koak（DEV Community 发帖人）
3. **用了哪个/哪些工具**：多 agent 流水线（Researcher/Writer/Curator 分工），数据源是 Hacker News、Reddit r/netsec、CVE  feeds
4. **做了什么产品或服务**：网络安全领域付费 newsletter
5. **获客方式**：内容本身就是获客
6. **定价 / 收入数字**：$2,400/月。数字为当事人自报。
7. **实操工作流**：(a) Researcher agent 抓 HN/Reddit/CVE；(b) Writer agent 写成摘要；(c) Curator agent 排序；(d) 自动发付费 newsletter。
8. **证据强度**：C（当事人自报，无截图）
9. **来源 URL**：https://dev.to/sinan_koak_4a6dea677278a/how-i-built-a-2400month-passive-income-stream-using-ai-to-automate-niche-newsletter-creation-37bi
10. **可复制性点评**：**可复制但天花板低**。$2,400/月是真实的小生意，但多 agent 流水线维护成本不低。

---

## 二、Chrome 插件 / 浏览器扩展

### 案例 13：Kortex — Chrome 扩展 $2,911 MRR

1. **案例标题**：solo 开发者做的 Chrome 扩展，$2,911 MRR，TrustMRR 可验证
2. **当事人**：未具名（NeoDrop 拆解，u/CakeEquivalent1181 类 solo dev）
3. **用了哪个/哪些工具**：AI 辅助开发（具体工具未披露）
4. **做了什么产品或服务**：Kortex —— 补齐主流软件"忘了做"的功能（Chrome 扩展形态）
5. **获客方式**：Chrome Web Store SEO + Reddit r/chrome_extensions 口碑
6. **定价 / 收入数字**：$2,911 MRR，通过 Dodo Payments API key 在 TrustMRR 上验证（2026-06-23）。
7. **实操工作流**：(a) 找主流软件没做的小功能；(b) 做 Chrome 扩展补上；(c) 用 ExtensionPay/Dodo Payments 接 Stripe 订阅。
8. **证据强度**：A（TrustMRR 验证 + Dodo Payments API key）
9. **来源 URL**：https://neodrop.ai/es/post/r4jw7lt2yW_
10. **可复制性点评**：**Chrome 扩展是最适合普通人起步的形态之一**。技术门槛低（AI 几小时写出 MV3 扩展），Chrome Web Store 自带流量。坑在 Chrome 不再 Web Store 内处理支付，要自己接 Stripe/Paddle。

---

### 案例 14：Dheeraj — Substack Notes 定时 Chrome 扩展

1. **案例标题**：n8n 自动化坏了，打开 Claude Code 3 天写出 Chrome 扩展，总成本 $135
2. **当事人**：Dheeraj（企业背景从业者）
3. **用了哪个/哪些工具**：Claude Code
4. **做了什么产品或服务**：Substack Notes 定时发布 Chrome 扩展（替代原来的 n8n 流水线）
5. **获客方式**：Chrome Web Store
6. **定价 / 收入数字**：总成本 $135，19 个开发日后上架。具体 MRR 未披露。
7. **实操工作流**：(a) 原来 n8n 定时发 Substack Notes 的 pipeline 因 auth 问题挂了；(b) 没找替代工具，直接打开 Claude Code；(c) 3 天写出可用扩展；(d) 19 个 build 日后过审。
8. **证据强度**：C（buildtolaunch.ai 案例整理，当事人自述，无收入截图）
9. **来源 URL**：https://buildtolaunch.ai/p/vibe-coding-builders-substack-notes-chrome-extension-claude-code-135-dollars
10. **可复制性点评**：**这是"scratch your own itch"的教科书案例**。你自己工作流里的痛点，就是产品。

---

### 案例 15：200 行 Claude 包装 Chrome 扩展（$4.7K MRR）

1. **案例标题**：200 行代码的 Chrome 扩展包装 Claude，$9/月，3 个月 $4.7K MRR
2. **当事人**：@indiehacker_x（X 账号，无原始链接）
3. **用了哪个/哪些工具**：Claude API
4. **做了什么产品或服务**：一键总结任意网页的 Chrome 扩展
5. **获客方式**：未披露
6. **定价 / 收入数字**：$9/月，520 付费用户，3 个月达 $4.7K MRR。**无原始链接，二手转述**。
7. **实操工作流**：(a) 200 行代码包装 Claude API；(b) $9/月订阅；(c) 周末业余开发。
8. **证据强度**：D（只有二手 repost，找不到原始 X/Reddit 帖，无法验证）
9. **来源 URL**：无原始链接，二手转述（多个博客引用同一数字）
10. **可复制性点评**：**数字存疑**。520 用户 × $9 = $4,680，数学上对得上，但找不到原始证据。这类"200 行代码 $4.7K MRR"帖子在 X 上大量出现，很多是营销号编的。

---

### 案例 16：HN 上的小 Chrome 扩展（7 天 $239）

1. **案例标题**：我的小 SaaS 7 天赚了 $239，100% 利润率
2. **当事人**：Svelte HN 帖发帖人
3. **用了哪个/哪些工具**：未明确，典型 AI 辅助
4. **做了什么产品或服务**：简单 Chrome 扩展
5. **获客方式**：纯有机社交媒体，零广告
6. **定价 / 收入数字**：7 天 $239，lifetime $434+，100% 利润率（Chrome 扩展无服务器成本）。
7. **实操工作流**：(a) 做个小扩展；(b) 发社交平台；(c) 自然转化。
8. **证据强度**：C（HN 帖自述，有截图但链接到 svelte 镜像）
9. **来源 URL**：https://hn.svelte.dev/item/47306290
10. **可复制性点评**：**这才是大多数普通人的真实水平**。$239/7 天不是 $4.7K MRR，但它是真实的。

---

## 三、独立游戏 / 浏览器游戏

### 案例 17：Ieocoout — Capybara 外卖游戏（Cursor Vibe Jam 冠军）

1. **案例标题**：9 年 iOS 开发者，15 天 100% AI 代码写出水豚外卖游戏，赢 $25,000 奖金
2. **当事人**：Ieocoout（9 年经验 iOS 开发者）
3. **用了哪个/哪些工具**：100% AI 写代码（Cursor 生态），$150 成本，2.7 万行代码零手写
4. **做了什么产品或服务**：Capybara food delivery game，参加 Cursor Vibe Jam 2026 比赛
5. **获客方式**：比赛本身就是获客
6. **定价 / 收入数字**：赢 $25,000 奖金（约 17 万人民币）。**明确不上 Steam**——作者说游戏只适合玩 5–10 分钟，不完整到能上架。
7. **实操工作流**：(a) 15 天用 AI 全量写代码；(b) 参加 Cursor Vibe Jam；(c) 拿奖金。
8. **证据强度**：B（36kr、AIBase 都有报道，作者本人分享了完整开发过程）
9. **来源 URL**：
   - https://news.aibase.com/news/29583
   - https://36kr.com/p/3896358295029383
10. **可复制性点评**：**比赛奖金是真实收入，但别指望 Steam 发售**。作者自己都说这游戏不完整。AI 写游戏能赢比赛，但离赚钱发行还远。

---

### 案例 18：WW2 Dogfight Arena / Stoppr 等浏览器游戏

1. **案例标题**：Cursor + Three.js/Phaser 做的浏览器游戏，WW2 Dogfight Arena 首周 45K 玩家，Stoppr $12K MRR
2. **当事人**：多位独立开发者
3. **用了哪个/哪些工具**：Cursor + Three.js / Phaser
4. **做了什么产品或服务**：浏览器多人游戏
5. **获客方式**：社交传播
6. **定价 / 收入数字**：WW2 Dogfight Arena 首周 45K 玩家；Stoppr $12K MRR。
7. **实操工作流**：(a) Cursor 写游戏逻辑；(b) Three.js/Phaser 渲染；(c) 浏览器直接玩，无需下载。
8. **证据强度**：C（Sorceress.games 整理，多案例汇总）
9. **来源 URL**：https://sorceress.games/blog/lovable-vibe-coding-revenue-400m-arr-but-not-for-games
10. **可复制性点评**：**浏览器游戏是 2025–2026 年被验证的赛道**，但 Lovable 不适合做游戏（它是全栈 Web 应用 builder），要用 Cursor + Three.js。

---

## 四、卖模板 / Boilerplate / 规则包

### 案例 19：Marc Lou — ShipFast / CodeFast / DataFast 模板矩阵

1. **案例标题**：solo 做了 36 个 startup，2025 年 $1.03M 收入，主力是 Next.js boilerplate
2. **当事人**：Marc Lou（https://marclou.com/ ，@marclou）
3. **用了哪个/哪些工具**：AI 辅助（ChatGPT/Claude/Cursor），但核心是他自己写的 ShipFast boilerplate
4. **做了什么产品或服务**：
   - ShipFast：Next.js SaaS boilerplate（认证+支付+数据库+UI 全套），$199–249 终身买断，7,200+ 开发者购买
   - CodeFast：教编程课程
   - DataFast：数据分析工具
   - TrustMRR：验证 startup 收入的数据库（~$31K MRR）
5. **获客方式**：X build in public + 每月公开收入报告（"我 5 月赚了 $87,507"），激进透明是他的信任机制。
6. **定价 / 收入数字**：2025 年 portfolio 总收入 $1,032,000；2026 年 1 月单月 $94,799；ShipFast ~$18–20K/月；DataFast ~$29.5K/月；CodeFast ~$7.5K/月。数字为当事人公开 TrustMRR 验证页面 + 多个第三方交叉。
7. **实操工作流**：(a) 自己做 SaaS 时把重复部分抽出来做成 boilerplate；(b) $199–249 终身买断；(c) 每月发收入报告 build in public；(d) 产品矩阵互相导流。
8. **证据强度**：A（TrustMRR 验证页面 + 当事人每月公开明细，从 $18 的笑话产品到主力产品全部列出）
9. **来源 URL**：
   - https://marclou.com/
   - https://tycoon.us/one-person-company/marc-louvion
   - https://www.mikel-ltd.com/studio-notes/marc-lou-the-indie-entrepreneurs-success-story
   - https://dev.to/promptway/he-built-an-app-in-24-hours-and-made-20378-the-next-day-heres-the-part-nobody-screenshots-5gep
10. **可复制性点评**：**卖 boilerplate 是被验证的路径，但窗口期在收窄**。ShipFast 2023 年上线时是蓝海，2026 年已经有几百个 Next.js boilerplate 在卷。可复制的是"先自己做 SaaS，把重复部分抽出来卖"，不是直接抄 ShipFast。

---

### 案例 20：Gumroad 上的 Lovable / Next.js 模板卖家

1. **案例标题**：卖 Lovable 模板 / Next.js SaaS starter，$500–4,000/月被动收入
2. **当事人**：多位匿名 Gumroad 卖家
3. **用了哪个/哪些工具**：Lovable / Cursor 生成模板
4. **做了什么产品或服务**：
   - Lovable starter 模板：$29–99/个
   - Next.js SaaS starter（auth+支付+dashboard）：$49/个，月卖 40–80 份 = $2,000–4,000/月
   - Landing page kit：$29–99
5. **获客方式**：Gumroad 搜索 + X build in public + Reddit r/SaaS
6. **定价 / 收入数字**：单模板 $29–99；头部模板卖家 $2,000–4,000/月；普通卖家 $200–2,000/月。Gumroad 抽 10%，Lemon Squeezy 抽 5%+$0.50。
7. **实操工作流**：(a) 用 Lovable/Cursor 搭一个垂直场景 starter（如"牙医诊所 landing page"、"AI newsletter dashboard"）；(b) 写好文档；(c) 挂 Gumroad/Lemon Squeezy；(d) 在 Indie Hackers/Product Hunt 发。
8. **证据强度**：C（多个博客口径汇总，无具体个人 Stripe 截图）
9. **来源 URL**：
   - https://greyjournal.net/hustle/grow/how-to-make-money-with-vibe-coding-2026/
   - https://www.vibestack.in/blog/make-money-with-vibe-coding
   - https://actualiti.com/make-money-with-cursor-and-lovable-build-apps-and-websites-without-being-a-developer-in-2026/
10. **可复制性点评**：**门槛最低的被动收入路径，但竞争激烈**。文档质量是差异化关键——这个领域大多数模板文档极差，写好文档就能胜出。

---

## 五、接外包 / AI 自动化代理（给中小企业做交付）

### 案例 21：Upwork/Fiverr 上的 AI 编程自由职业者

1. **案例标题**：用 Cursor+Claude Code 接外包，MVP 单项目 $8,500–22,000
2. **当事人**：71 位受访自由职业者（betonai 费率卡调研）
3. **用了哪个/哪些工具**：Claude Code（复杂逻辑）+ Cursor（日常开发），3–5x 效率提升
4. **做了什么产品或服务**：
   - 生产级 MVP：$8,500–22,000/项目
   - Next.js/Astro marketing site 重做：$3,200–7,500
   - 内部 SaaS dashboard：$6,500–18,000
   - RAG chat 功能：$4,800–14,500
   - 小项目（1–3 天）：$200–500
   - 中项目（1–2 周）：$1,000–3,000
5. **获客方式**：Upwork/Fiverr 平台 + 口碑
6. **定价 / 收入数字**：AI 开发者 $30–150/小时；AI chatbot 项目 $1,000–5,000/项目。Upwork 上有服务把"AI MVP starter"定价 $200/3 天交付。
7. **实操工作流**：(a) Upwork profile 标 "AI MVP developer"；(b) 用 Claude Code 写核心逻辑，Cursor 做日常编辑；(c) 交付周期从 5 天缩到 2–3 天；(d) 接更多项目。
8. **证据强度**：B（betonai 调研了 71 位开发者，Upwork 官方有公开服务页）
9. **来源 URL**：
   - https://betonai.net/ai-coding-freelance-rate-card-2026-what-to-charge-when-chatgpt-and-claude-are-in-your-stack-real-rates-from-71-developers/
   - https://www.upwork.com/hire/ai-developers/
   - https://www.duckdblab.com/en/post/ai-coding-side-hustle/
10. **可复制性点评**：**最直接的变现路径，但内卷严重**。Fiverr 上已经有人 $10 做"AI 网站"（用 Base44/Replit）。溢价来自你能不能做 RAG 集成、支付集成这种客户自己做不出来的东西，不是"会用 Cursor"。

---

### 案例 22：n8n AI 自动化代理（给 SMB 做工作流）

1. **案例标题**：5 个客户的 n8n 自动化代理月入 $35K
2. **当事人**：多位 n8n 代理从业者（chronexa/agentcorps 等整理）
3. **用了哪个/哪些工具**：n8n（自托管 $0–15/月 VPS）+ Claude API（工作流里的 AI 节点）+ AI 编程工具（Claude Code/Cursor 写自定义节点）
4. **做了什么产品或服务**：给本地 SMB 做 AI 自动化工作流（线索抓取、WhatsApp CRM、客服、数据录入）
5. **获客方式**：冷 outreach 本地商家 + 案例转介绍
6. **定价 / 收入数字**：
   - 单条工作流：$1,000–3,500
   - 自托管 n8n 部署：$1,500–4,000
   - 全套实施：$3,500–12,000
   - 月费 retainer：$500–2,500/客户/月
   - 5 客户代理 = 2 个 $10K 项目 + 6 个 $2,500 retainer = $35K/月
   - 自托管把每次执行成本从 Zapier 的 $1.50 降到 $0.01，毛利率 70–85%
7. **实操工作流**：(a) 免费 60 分钟 audit 客户现有流程；(b) 算出节省工时（如每周省 1 天 = 客户价值 $X）；(c) setup fee = 90 天价值 ÷ 3；(d) retainer = setup fee 的 15–25%/月。
8. **证据强度**：B（多家代理定价页 + n8n 社区招聘帖交叉）
9. **来源 URL**：
   - https://chronexa.io/blog/n8n-for-agencies-packaging-pricing-and-selling-automation-retainers
   - https://betonai.net/how-to-build-3k-15k-month-ai-automation-business-2026-n8n-make-zapier-fiverr-upwork-retainers/
   - https://www.agentcorps.co/blog/multi-agent-orchestration-for-smbs-2026-playbook-n8n-make-starter-workflows-500-2000-month
   - https://ideaproof.io/guides/ai-automation-agency
10. **可复制性点评**：**这是 2026 年最现实的"一人公司"路径之一**。不需要你会写复杂代码，需要你懂业务流程 + 会 n8n。坑在客户成功——一个客户觉得被骗就能毁掉口碑。

---

### 案例 23：Liam Ottley — Morningside AI / AAA Accelerator

1. **案例标题**：YouTube 73 万粉，声称 $7M+ 收入、月入 $160K，但主要靠卖课
2. **当事人**：Liam Ottley（Morningside AI，@liamotttley）
3. **用了哪个/哪些工具**：Claude/Higgsfield 等做 AI creative 交付
4. **做了什么产品或服务**：AI 自动化代理（给企业做 AI 客服、AI 销售）+ AAA Accelerator 课程（$5,000–7,150）+ Skool 社区（28 万会员）
5. **获客方式**：YouTube 内容（73 万粉）→ 免费内容 → 高价课转化
6. **定价 / 收入数字**：声称 $7M+ 收入、月 $160K、$18M 累计。**但独立核查认为：agency 和 course 收入混在一起，course 占大头；Trustpilot 有退款投诉（$5,500 退款被拒、$9K NZD 高压销售）；Reddit 负面情绪强烈。** OutlierKit 估其 YouTube 广告月收入仅 $2K–7K。
7. **实操工作流**：(a) YouTube 发"AI agency 怎么做"教程；(b) 引流到免费 Skool 社区；(c) 卖 $5K–7K AAA Accelerator；(d) 课里教你做 AI agency。
8. **证据强度**：D（公司真实存在，有 NBA 球队 case study，但收入数字夸大且混淆 agency/course，退款投诉多）
9. **来源 URL**：
   - https://marksinsights.com/liam-ottley-review/
   - https://ippei.com/aaa-accelerator/
   - https://isthiscourselegit.com/course/ai-automation-agency-hub
   - https://outlierkit.com/channel/liamottley
10. **可复制性点评**：**这是典型的"卖铲人"而不是"淘金者"**。Liam 自己赚的不是 AI agency 的钱，是教别人做 AI agency 的课钱。普通人抄他做 AI agency 可以，但别买他的课。

---

### 案例 24：Devin 自由职业者提效

1. **案例标题**：独立自由职业者用 Devin 同时接 3–4 倍项目
2. **当事人**：未具名自由职业者（webpeak.org 整理）
3. **用了哪个/哪些工具**：Devin（Cognition 的 autonomous AI engineer）
4. **做了什么产品或服务**：给 SMB 做 WordPress 插件、Shopify 主题、数据库迁移脚本
5. **获客方式**：已有客户群
6. **定价 / 收入数字**：同时接 3–4 倍项目量，Devin 处理大部分实现，人负责客户沟通和最终审查。
7. **实操工作流**：(a) 人负责 scoping 和客户沟通；(b) Devin 写代码；(c) 人 review 后交付。
8. **证据强度**：C（二手整理，无具体人名和收入数字）
9. **来源 URL**：https://www.webpeak.org/blog/give-me-customer-stories-for-cognition-ai/
10. **可复制性点评**：Devin 更适合有客户基础的自由职业者提效，不适合从零接单。

---

## 六、Telegram / Discord Bot 订阅

### 案例 25：Telegram AI bot 订阅（通用模型）

1. **案例标题**：Telegram 里跑 Claude/GPT 订阅 bot，$5–29/月
2. **当事人**：多位 Telegram bot 开发者
3. **用了哪个/哪些工具**：Claude/GPT/Gemini API + aiogram/python + Claude Code 写 bot 代码
4. **做了什么产品或服务**：
   - UpClaw：私人 ChatGPT in Telegram，"一杯咖啡一周"价格
   - Claude AI Premium Bot：免费 3 条/天 Haiku，付费 $X 用 Sonnet，Telegram Stars 支付
5. **获客方式**：Telegram 频道内传播 + Product Hunt
6. **定价 / 收入数字**：
   - Free：10 条 AI 消息/天
   - Standard：$5–9/月，无限消息
   - Pro：$15–29/月，优先支持/API
   - 独立开发者 niche bot：$1K–5K/月；团队做 mobile app：$10K–20K/月
7. **实操工作流**：(a) Claude Code 写 Python + aiogram；(b) 接 Claude API；(c) Telegram Stars 或加密货币支付；(d) 4 次迭代后加防重复支付。
8. **证据强度**：C（多个 bot 产品页存在，但具体 MRR 不透明）
9. **来源 URL**：
   - https://upclaw.app/en
   - https://www.producthunt.com/products/claude-ai-premium-bot/launches/claude-ai-premium-bot
   - https://richtactic.com/tactic/ai-companion-apps
   - https://vc.ru/ai/2863269-sozdanie-telegram-bota-s-claude-code
10. **可复制性点评**：**门槛极低但 LLM 成本是坑**。用户消息量一大，API 成本会吃掉利润。用 DeepSeek 等便宜模型可降本 10 倍。

---

### 案例 26：Discord AI NPC / 订阅 bot

1. **案例标题**：给 Discord roleplay 服务器做"有记忆的 AI NPC"，$15/月
2. **当事人**：Startup Heist 提出的概念 + 多个 bot 开发者
3. **用了哪个/哪些工具**：AI API + Discord.js
4. **做了什么产品或服务**：
   - "Immortal NPC"：$15/月给 Discord roleplay 服务器提供有持久记忆的 AI NPC
   - 通用 AI bot：免费 20 条 GPT-3.5/天，付费无限 Claude/GPT-4
5. **获客方式**：Discord bot 目录（Top.gg 等）+ roleplay 服务器社区
6. **定价 / 收入数字**：$3–10/月/服务器；Discord 官方抽成 10%。盈亏平衡约 800 付费用户（按 $3/月）。
7. **实操工作流**：(a) 做一个有用的 bot；(b) 上架 Top.gg；(c) 用 Stripe 或 Discord 原生 Premium App 收订阅。
8. **证据强度**：C（定价模型有数据，但具体成功 bot 的 MRR 不透明）
9. **来源 URL**：
   - https://www.startupheist.com/ai-npcs-with-real-memory-a-15-month-memory-layer-for-discord-roleplay-servers/
   - https://discordforge.org/blog/how-to-monetize-discord-bot-2026
   - https://www.discords.ai/wiki/discord-bot-monetization-premium-interactions-guide-premium-apps-payments
10. **可复制性点评**：Discord bot 订阅是被动收入，但需要你已经在某个 Discord 社区有存在感。

---

## 七、卖课程 / 付费 Newsletter / 会员社区 / YouTube 变现

### 案例 27：Claude Code Club（$9/月 × 8000 会员）

1. **案例标题**：教别人用 Claude Code 赚钱的付费社区，$9/月，8000+ 会员
2. **当事人**：Claude Code Club（claudecodeclub.ai）
3. **用了哪个/哪些工具**：Claude Code 本身
4. **做了什么产品或服务**：$9/月会员，提供模板、prompt、faceless-video 系统
5. **获客方式**：内容营销 + 社区传播
6. **定价 / 收入数字**：$9/月 × 8,000+ 会员 ≈ $72K MRR（毛收入）。数字为网站公开。
7. **实操工作流**：(a) 做免费内容教 Claude Code；(b) 引流到 $9/月会员；(c) 每周更新模板和技巧。
8. **证据强度**：C（网站自报 8000+ 会员，无第三方验证）
9. **来源 URL**：https://www.claudecodeclub.ai/
10. **可复制性点评**：**"教别人用 AI 工具赚钱"本身就是最赚钱的赛道之一**。但 $9/月低价社区的 churn 会很高。

---

### 案例 28：Ollie — digitalcreatorclub.com 会员站

1. **案例标题**：用 Claude Code 一个周末做出会员站，第一周 $20K
2. **当事人**：Ollie（YouTube 视频主人公）
3. **用了哪个/哪些工具**：Claude Code
4. **做了什么产品或服务**：digitalcreatorclub.com —— 创作者会员平台，含支付、数据库、定价逻辑、邮件邀请、Discord 集成
5. **获客方式**："minimal marketing"——具体未披露
6. **定价 / 收入数字**：第一周 $20K。**注意：最初打算免费，被建议收费后反而提高了会员质量。**
7. **实操工作流**：(a) 周末用 Claude Code 写出完整会员站（支付+数据库+邮件+Discord）；(b) 收费（不免费）筛选认真会员；(c) 第一周 $20K。
8. **证据强度**：D（只有 veonib/glimpse 等二手 repost，找不到 Ollie 本人的原始 X/YouTube 链接，"minimal marketing"说法可疑）
9. **来源 URL**：
   - https://veonib.com/explore/i-made-20k-in-7-days-the-fastest-way-to-use-ai-agents-to-make-money-be-more-prod
   - https://glimpse.wozart.com/v/7gopzf4z
10. **可复制性点评**：**这是典型标题党候选**。一个周末做出会员站是真的（Claude Code 能做到），但第一周 $20K 必然依赖已有受众或付费投放，否则 0 流量不可能 0 转化。

---

### 案例 29：Dre Dyson — AI 模型优化在线课程（$50K）

1. **案例标题**：把"AI 模型优化"深度知识做成 $50K 的 Teachable 课程
2. **当事人**：Dre Dyson
3. **用了哪个/哪些工具**：在 r/ClaudeAI、r/ChatGPTCoding、Cursor Discord、HN 答题建立声誉
4. **做了什么产品或服务**：Teachable 上的 AI 模型优化课程
5. **获客方式**：在 Reddit/Discord/HN 免费答题建立专家声誉 → 卖课
6. **定价 / 收入数字**：$50,000 课程收入。
7. **实操工作流**：(a) 在相关社区持续免费回答问题；(b) 把高频问题整理成课程；(c) Teachable 上架。
8. **证据强度**：C（当事人自报博客）
9. **来源 URL**：https://dredyson.com/how-i-turned-my-deep-knowledge-of-ai-model-optimization-into-a-50000-online-course-the-complete-step-by-step-blueprint-for-creating-packaging-and-selling-a-profitable-digital-course-on-t-2/
10. **可复制性点评**：**"先免费答题 6 个月再卖课"是被验证的路径**，但需要你真的有深度知识。

---

## 八、AI 包装小工具 / 自由职业者提效交付

### 案例 30：Maor Shlomo — Base44（被 Wix $80M 收购）

1. **案例标题**：用 Cursor+Claude 3.5 Sonnet 3 周做到 $1M ARR，6 个月后 $80M 被 Wix 收购
2. **当事人**：Maor Shlomo
3. **用了哪个/哪些工具**：Claude 3.5 Sonnet via Cursor
4. **做了什么产品或服务**：Base44 —— AI app builder
5. **获客方式**：YC 背书 + 社交传播
6. **定价 / 收入数字**：3 周 $1M ARR；6 个月后 $3.5M ARR、$189K 月利润、25 万用户；Wix $80M 现金收购。
7. **实操工作流**：(a) solo 用 Cursor+Claude 写 AI app builder；(b) YC 加速；(c) 快速增长到被收购。
8. **证据强度**：B（Wix 收购是公开新闻，brandonmcpeak 研究有引用）
9. **来源 URL**：
   - https://research.brandonmcpeak.com/solo-founder-playbook
   - https://altar.io/lovable-vs-bolt-vs-v0-vs-replit-vs-base44/
10. **可复制性点评**：**这是顶级结果，不可复制**。Maor 是连续创业者，Base44 本身是"卖 AI 工具的 AI 工具"，窗口期极短。

---

### 案例 31：GenAIPI — Replit Agent 3 天做出 AI 教育平台

1. **案例标题**：3 天用 Replit Agent 做出 AI 教育认证平台，6 周 $180K 收入
2. **当事人**：Replit 客户案例
3. **用了哪个/哪些工具**：Replit Agent
4. **做了什么产品或服务**：General AI Proficiency Institute —— AI 知识考试 + LMS + 课程预约 + 认证系统
5. **获客方式**：教育行业销售
6. **定价 / 收入数字**：6 周 $180K 收入；号称比传统开发省 $3.2M。
7. **实操工作流**：(a) Replit Agent 3 天搭出考试系统+LMS+日历预约+认证；(b) 直接卖企业培训。
8. **证据强度**：B-（Replit 官方 case study，有营销成分但数字具体）
9. **来源 URL**：https://ld.replit.com/customers/genaipi
10. **可复制性点评**：Replit 官方 case study 是营销内容，但"3 天出完整 LMS"是真的。普通人需要自己有教育行业资源才能卖出去。

---

### 案例 32：AssetShark — 全 Replit vibe coded 的澳洲资产追踪 SaaS

1. **案例标题**：一行代码没手写，全用 Replit Agent 做出澳洲小企业资产折旧软件
2. **当事人**：Indie Hackers 用户
3. **用了哪个/哪些工具**：Replit（先 AI assistant，后全用 Replit Agent）；React 前端 + Node 后端
4. **做了什么产品或服务**：AssetShark —— 澳洲小企业资产追踪和折旧软件
5. **获客方式**：澳洲小企业垂直市场
6. **定价 / 收入数字**：未披露具体 MRR，当事人分享学习经验。
7. **实操工作流**：(a) 纯自然语言 prompt 给 Replit Agent；(b) React + Node；(c) 针对澳洲税务场景做垂直功能。
8. **证据强度**：C（IH 帖自述，无收入数字）
9. **来源 URL**：https://www.indiehackers.com/post/i-vibe-coded-an-entire-saas-in-a-few-months-with-replit-heres-what-i-learned-e49fd68dcb
10. **可复制性点评**：**垂直行业 SaaS（澳洲资产折旧）是好方向**，因为大公司不做小市场。

---

### 案例 33：非技术创始人 homestead 分析 App

1. **案例标题**：零技术经验，用 Claude 写代码做 homestead 分析 App，1 个月 2900 用户
2. **当事人**：Reddit r/Entrepreneur 发帖人
3. **用了哪个/哪些工具**：Claude AI 生成代码 + Vercel + Supabase
4. **做了什么产品或服务**：homestead（自宅农业/小农场）分析 App
5. **获客方式**：niche 社区（Facebook homestead 群组）+ 透明捐赠模式
6. **定价 / 收入数字**：1 个月 2,900 用户、60 个 recurring donors、月利润 $220。
7. **实操工作流**：(a) 非技术创始人用 Claude 生成代码；(b) Vercel + Supabase 免费层部署；(c) Facebook homestead 群组推广；(d) 透明捐赠模式。
8. **证据强度**：C（Reddit 帖，vynixal 分析整理）
9. **来源 URL**：https://vynixal.com/analysis/Entrepreneur/2026-07-04/experience-starting-app-ai-zero-experience-2900-users-community-funded
10. **可复制性点评**：**这才是普通人的真实起点**。$220/月利润不是梦想数字，但它是真的。关键是 niche 社区。

---

### 案例 34：Sean Moriarity — Claude Code 当会计

1. **案例标题**：让 Claude Code 帮自己管 Mercury/Stripe 账，单月净收入 $18,579
2. **当事人**：Sean Moriarity
3. **用了哪个/哪些工具**：Claude Code 接 Mercury + Stripe API
4. **做了什么产品或服务**：自己的 solo business 财务自动化
5. **获客方式**：N/A（内部提效）
6. **定价 / 收入数字**：单月净收入 $18,579.81，毛利 $17,847.30，运营支出 $2,941.56。
7. **实操工作流**：(a) 让 Claude Code 拉 Mercury 银行流水和 Stripe 交易；(b) 自动对账；(c) 生成给会计的 close packet。
8. **证据强度**：B（个人博客有具体数字，且验证了 Mercury/Stripe 余额）
9. **来源 URL**：https://seanmoriarity.com/2026/01/10/claude-is-my-accountant/
10. **可复制性点评**：**这不是赚钱案例，是省钱提效案例**。但它说明 Claude Code 真能接真实 API 做事。

---

### 案例 35：mkdnsite / mkdn.io — OpenClaw agents 当"虚拟团队"

1. **案例标题**：用 OpenClaw agents 当虚拟团队，GitHub issues 当任务板，Slack 里和"team lead agent"对话开发
2. **当事人**：HN 帖 "When AI Clicked for Me" 发帖人
3. **用了哪个/哪些工具**：OpenClaw agents（在个人机器上跑）+ GitHub issues + Slack
4. **做了什么产品或服务**：mkdn.io 托管 markdown 服务
5. **获客方式**：HN launch
6. **定价 / 收入数字**：未披露具体收入
7. **实操工作流**：(a) 把想法写成 GitHub issue；(b) Slack 里和"team lead agent"对话让它 pick up 任务；(c) agents 晚上和周末干活；(d) 人只做决策。
8. **证据强度**：C（HN 帖自述）
9. **来源 URL**：https://hn.algolia.com/?dateRange=all&page=0&query=When%20AI%20Clicked%20for%20Me&sort=byDate&storyText=false&type=story
10. **可复制性点评**：**这是 2026 年新出现的"一人公司 + AI 团队"工作流**，值得关注但还没人公开收入。

---

### 案例 36：台湾 solo operator — 4 个 OpenClaw agents 跑整个代理

1. **案例标题**：在 Gemini 免费层上跑 4 个 OpenClaw agents，$0 LLM 成本，管理账号 330 万播放
2. **当事人**：台湾 solo operator
3. **用了哪个/哪些工具**：4 个 OpenClaw agents on Gemini free tier + Telegram + Vercel
4. **做了什么产品或服务**：整个技术代理（多账号内容管理）
5. **获客方式**：管理的账号本身就是获客
6. **定价 / 收入数字**：月收入区间 $2K–10K（builtwithagents 评级 Medium）；LLM 成本 $0/月。
7. **实操工作流**：(a) 4 个 agent 分工；(b) Gemini 免费层；(c) Telegram 指令；(d) Vercel 部署。
8. **证据强度**：C（builtwithagents.ai 整理，无具体人名）
9. **来源 URL**：https://www.builtwithagents.ai/
10. **可复制性点评**：**$0 LLM 成本是真的**（用免费层），但管理多账号内容有平台风险。

---

## 九、典型标题党 / 吹牛套路拆解

### 套路 1："用 Claude Code 一周赚 $100K / $20K"

**破绽**：
- 几乎所有这类帖子（如 Ollie 的 "$20K in 7 days"）都找不到原始 Stripe 截图，只有 veonib、glimpse.wozart 这类 SEO 站互相 repost。
- "minimal marketing" 是红旗——零流量不可能零转化。$20K 第一周必然来自已有受众（email list、YouTube 频道、付费投放），但帖子不会告诉你。
- 对比：真有收入截图的人（Marc Lou、Tony Dinh、Bhanu Teja）都会公开完整拆分，包括哪个产品赚了多少、哪个 flop 了。标题党帖子只给一个总数。
- 来源参考：https://veonib.com/explore/i-made-20k-in-7-days-the-fastest-way-to-use-ai-agents-to-make-money-be-more-prod

### 套路 2："200 行 Chrome 扩展 $4.7K MRR"

**破绽**：
- 找不到原始 X/Reddit 帖，只有二手博客引用同一组数字。
- 520 用户 × $9 = $4,680 数学对得上，但没有 Stripe 截图。
- 这类帖子通常是营销号为了卖自己的"Chrome 扩展课程"编的。

### 套路 3：Liam Ottley 式 "AI agency $18M 收入"

**破绽**：
- $18M 把课程收入（AAA Accelerator $5K–7K/人）和 agency 收入混在一起。
- Trustpilot 有退款投诉（$5,500 退款被拒、$9K NZD 高压销售）。
- OutlierKit 估其 YouTube 广告月收入仅 $2K–7K，和"月入 $160K"差距巨大。
- Reddit 上 AI agency 失败率约 90%（ippei.com 独立调查）。
- 来源：https://marksinsights.com/liam-ottley-review/ 、https://isthiscourselegit.com/course/ai-automation-agency-hub

### 套路 4："median vibe-coded micro-SaaS 90 天 $1,200 MRR"

**破绽**：
- 这个"中位数"来自博客文章，不是真实数据集统计。
- Kinja 的调查指出：大多数用 Cursor/Lovable/Replit 的人月收入 $0–300。成功案例（Pieter Levels、Plinq）靠的是已有受众或深度领域知识，不是 AI 本身。
- 来源：https://kinja.com/ai/can-you-really-make-money-with-vibe-coding

### 套路 5：工具官方 case study（Lovable、Replit、Vercel）

**破绽**：
- Lovable 宣传 Plinq $456K ARR、Replit 宣传 GenAIPI $180K/6 周——这些是营销漏斗的一部分。
- 它们只展示成功案例，不展示失败的 99%。
- Plinq 数字被多个独立媒体引用是真的，但它被 Lovable 选中做 case study 本身就是因为它是 top 1%。
- 来源：https://lovable.dev/guides/build-saas-product-without-coding

### 套路 6："Build an app in 20 minutes" vs 现实

**破绽**：
- Snyk 的调研指出：生成代码容易，维护"神秘代码"（会删生产数据库的那种）难。
- Karpathy 2025 年 2 月 coined "vibe coding"（不读 diff 直接接受 AI 建议），几个月后 HN 上就是一片 backlash。
- 实际生产环境需要数周清理 AI 生成的 bug、安全漏洞、schema migration。
- 来源：https://snyk.io/pt-BR/articles/what-users-want-when-vibe-coding/

### 套路 7："Vibe coding certifications" 付费证书

**破绽**：
- Hatchworks 发现 82% 这类课程在前三段用"exclusive"这个词，但技能本身根本不收费。
- 对雇主零价值。本质是卖焦虑。
- 来源：https://aigrimm.com/blog/vibe-coding-certifications-2026/

### 套路 8：Replit subreddit 付费推广

**破绽**：
- whatwelo.st 的 newsletter 指出，有人在 Replit subreddit 抱怨"姐妹的朋友被付费推广 Replit，谎称在家月入 $10K，还说靠 Replit 做的 app 找到了第一份技术工作"。
- 来源：https://www.whatwelo.st/p/generative-ai-is-having-its-herbalife

### 套路 9：SimpleClaw 式 "一周 $18K MRR 然后挂牌卖"

**破绽**：
- 一周做到 $18K MRR 然后立刻 $225K 挂牌，说明作者自己都不认为有护城河。
- 这是 arbitrage（套利）不是生意——买的人接盘后大概率 churn。
- 来源：https://andrew.ooo/posts/simpleclaw-18k-mrr-one-week-flip/

### 如何快速判断一个帖子真假

1. **看有没有 Stripe/Mercury 截图**，且截图数字和帖子数字一致。
2. **看有没有 flop**——真 build in public 的人会同时告诉你哪个产品赚了 $18、哪个产品死了。只讲成功的是营销号。
3. **看收入拆分**——Marc Lou 会列出每个产品；标题党只给一个总数。
4. **看获客细节**——"minimal marketing"、"went viral" 是红旗。真有 $X MRR 的人会告诉你从哪个 Reddit 帖、哪个 Product Hunt launch 来的。
5. **看时间线**——"3 天做出 + 第一周 $20K" 必然依赖已有受众。

---

## 附录：工具覆盖度诚实说明

| 工具 | 独立赚钱案例数 | 备注 |
|---|---|---|
| Claude Code（含 Claude.ai/Claude Desktop） | 10+ | 案例最多：Cameron Trew、Jacky Chou、Ollie、Dheeraj、Sean Moriarity、Samuel Rondot 等 |
| Cursor | 5+ | Pieter Levels fly.pieter.com、Ieocoout 游戏、Base44、WW2 Dogfight、freelance 提效 |
| Lovable | 1–2 | Sabrine Matos/Plinq（官方 case study）；其余多为模板售卖间接 |
| Replit Agent | 2–3 | GenAIPI、AssetShark、Replit+Whop 合作 |
| GitHub Copilot | 0（独立案例） | 在自由职业费率卡里被提及，但没有找到"某个人靠 Copilot 做出某产品赚了多少钱"的公开案例。Copilot 更多是团队提效工具，不是独立开发者的产品 builder |
| Aider | 0（独立案例） | 开源 BYOK 终端工具，极客用得多，公开赚钱案例几乎没有。它更像是"省钱工具"（免订阅费）而不是"赚钱工具" |
| Windsurf | 0（独立案例） | 公司本身经历 OpenAI 收购流产→Google 挖人→Cognition 收购动荡；个人用它赚钱的公开案例极少。2026 年已被 Cognition 收购并入 Devin 产品线 |
| Cline / Roo Code / Continue | 0–1（间接） | 开源 BYOK 工具，Sacra 估 Cline 本身 $5M ARR（2025.08），但"某个人用 Cline 做出某产品赚了 $X"的公开案例几乎没有。更常见的是"用 Cline 接外包提效"这类二手说法 |
| Cognition Devin | 1（间接） | webpeak.org 整理的自由职业者案例，无具体人名 |
| v0 / v0.dev | 0（独立案例） | 主要做 UI 组件生成，常和 Cursor/Lovable 组合用；没有找到"某个人靠 v0 单独做出某产品赚了 $X"的公开案例 |
| Bolt.new | 0（独立案例） | StackBlitz 旗下，公司本身 $40M ARR；个人用它赚钱的公开案例多为二手博客，无可验证收入截图 |
| Bito | 0 | 企业向 AI 编程助手，无独立开发者公开赚钱案例 |
| OpenAI Codex（含 ChatGPT Codex / codex CLI） | 0（独立案例） | Codex 本身 2025 年底才起量（pay-per-token 年化 ~$40M，订阅 ~$18M），个人用它赚钱的公开案例还在积累中。Codex 支持 OpenCode 等开源 harness 是新动向 |

**结论**：真正被独立开发者用来公开赚钱的工具，集中在 **Claude Code、Cursor、Lovable、Replit Agent** 四个。其余工具要么是企业向（Copilot、Bito、Windsurf），要么是极客向开源工具（Aider、Cline），要么是公司本身在赚钱而用户案例稀少（Bolt.new、v0、Devin）。

---

## 十、最值得普通人抄作业的 3 个路径

1. **做垂直 Chrome 扩展 / 小工具，挂 Chrome Web Store + Stripe 订阅**：技术门槛最低（AI 几小时写出 MV3 扩展），Kortex $2,911 MRR、Dheeraj $135 成本都是这条路。坑在自己接支付（Chrome 不托管支付了）和 SEO。
2. **用 n8n + Claude API 给本地 SMB 做自动化 retainer**：5 客户 × $2,500/月 = $12.5K/月，setup fee 另算。不需要会写复杂代码，需要懂业务流程和冷销售。这是 2026 年最现实的一人公司路径。
3. **先在 Reddit/X/Discord 免费答题 6 个月建立垂直领域声誉，再卖模板/课程/consulting**：Tony Dinh、Dre Dyson、Jacky Chou 都是这个模式。Claude Code/Cursor 只是提效工具，真正的壁垒是你在某个垂直领域的内容积累和信任。
