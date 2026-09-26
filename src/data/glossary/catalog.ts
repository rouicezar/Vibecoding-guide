import type {Copy} from '../site';
export interface GlossaryTerm {id:string;group:string;name:Copy;definition:Copy;example:Copy;priority:boolean;aliases:string[];}
export const catalog:GlossaryTerm[]=[];
// Each line: stable id | Chinese name | English name | Chinese meaning | English meaning | Chinese everyday example | English everyday example.
export function add(group:string, rows:string){for(const line of rows.trim().split('\n')){const [key,zh,en,dz,de,ez,ee]=line.split('|');if(!ee)throw new Error(`Incomplete glossary row: ${line}`);const priority=key.startsWith('*');catalog.push({id:key.replace(/^\*/,''),group,name:[zh,en],definition:[dz,de],example:[ez,ee],priority,aliases:[]});}}
add('product',`
*project|项目|Project|围绕一个目标组织的代码、资料和工作。|Code, materials, and work organized around a goal.|像开一家店，装修、菜单和收银都属于同一个计划。|Like opening a shop: decor, menu, and checkout share one goal.
*requirement|需求|Requirement|项目需要满足的具体使用要求。|A specific need the project must satisfy.|不是“店要好”，而是“顾客能查看价格并下单”。|Not “a good shop,” but “customers can see prices and order.”
*feature|功能|Feature|用户可以用项目完成的一件事。|Something a user can do with the product.|餐厅的点餐、付款是不同功能。|Ordering and paying are different restaurant capabilities.
*audience|用户群体|Target audience|项目主要服务的那一类人。|The people a product primarily serves.|儿童餐的主要使用者不是所有顾客，而是儿童家庭。|A children's menu serves families with children.
*scenario|使用场景|Use scenario|什么人在什么情况下做什么事。|Who does what, in which situation.|上班前在手机上预订早餐。|Ordering breakfast on a phone before work.
*first-version|第一版|Version one|第一次准备交给人实际使用的范围。|The scope of the first version intended for use.|小店先供应早餐，以后再加午餐。|A new shop serves breakfast before adding lunch.
*mvp|最小可用产品|MVP — Minimum viable product|用最少必要功能验证核心价值的可用产品。|A usable product with enough features to test its core value.|先提供可真实预订的菜单，观察是否有人愿意订餐。|Offer real reservations to learn whether people want the service.
product|产品|Product|持续为使用者解决问题的成果或服务。|An outcome or service that solves a user's problem.|建店是项目，顾客长期购买的订餐服务是产品。|Opening the shop is a project; its ordering service is a product.
pain-point|痛点|Pain point|用户反复遇到、值得解决的困难。|A recurring user difficulty worth solving.|每天排队二十分钟买早餐。|Waiting twenty minutes for breakfast every day.
scope|需求范围|Scope|这一轮要做与不做的事情边界。|What is included and excluded from this round.|这次只装修厨房，不改整个房子。|Renovate the kitchen, not the entire house.
scope-creep|范围蔓延|Scope creep|工作中不断加需求却未调整计划。|Adding requirements without adjusting the plan.|订做一张桌子，后来不断加柜子却不改预算。|A table order grows into cabinets without a new budget.
prototype|原型|Prototype|用来讨论或验证设计的早期模型。|An early model for discussing or checking a design.|纸板房屋能看布局，不等于能入住。|A cardboard house shows layout but cannot be lived in.
poc|概念验证|POC — Proof of concept|小范围试验某种做法是否可行。|A small experiment testing whether an approach is feasible.|先试一锅新配方，确认能做出来再开店。|Test one recipe before opening the restaurant.
user-story|用户故事|User story|从使用者角度写要做什么及为什么。|A need stated from a user's perspective with its purpose.|作为上班族，希望提前订餐以减少排队。|As a commuter, reserve breakfast to avoid queues.
user-flow|用户流程|User flow|用户从起点走到目标经过的操作。|The actions connecting a user's start and goal.|进店、选餐、付款、取餐。|Enter, choose, pay, collect.
use-case|用例|Use case|描述角色与系统如何完成一个目标。|How an actor and a system achieve a goal.|取餐流程还要写明订单找不到时如何处理。|A collection procedure also covers a missing order.
business-rule|业务规则|Business rule|业务允许或禁止哪些行为的规定。|Rules governing allowed business behavior.|早餐只在上午供应，退款需满足条件。|Breakfast has serving hours and refunds have conditions.
boundary|边界条件|Boundary condition|接近数量、时间或权限界限的情况。|Conditions at the limits of values, time, or access.|优惠券恰好到期那一秒还能否使用。|Whether a coupon works at the exact expiry time.
acceptance-criteria|验收标准|Acceptance criteria|可以据此判断需求是否完成的条件。|Observable conditions used to accept completed work.|不是“出餐快”，而是“付款后能看到取餐号”。|Instead of “fast service,” require a collection number after payment.
milestone|里程碑|Milestone|项目中值得核对成果的阶段节点。|A project point at which outcomes are reviewed.|装修完成后验收，再开始营业准备。|Inspect completed renovation before preparing to open.
iteration|迭代|Iteration|根据反馈完成一轮改进。|A round of improvement based on feedback.|先卖早餐，再根据顾客意见调整菜单。|Revise the breakfast menu after customer feedback.
tech-debt|技术债|Technical debt|当前省事的实现给以后留下的维护成本。|Future maintenance cost caused by today's implementation choices.|临时接线很快，之后整理线路却要返工。|Temporary wiring saves time now but needs rework later.
`);
add('documents',`
*brief|项目描述|Project brief|把目标、用户、问题和成功条件写清的材料。|A description of goals, users, problems, and success conditions.|装修前写明住几人、需要几间房和预算。|Describe occupants, rooms, and budget before renovating.
*prd|需求文档|PRD — Product requirements document|记录确认的功能、规则与验收条件。|Records agreed features, rules, and acceptance conditions.|像确认签字的装修需求清单。|Like an agreed renovation requirements list.
*development-doc|开发文档|Development documentation|说明项目结构、实现方式和开发操作的资料。|Documentation of structure, implementation, and development procedures.|施工说明写材料、做法和施工顺序。|Construction notes list materials, methods, and sequence.
*plan|开发计划|Development plan|把需求拆成有顺序、有产物的任务。|Requirements divided into ordered tasks with deliverables.|先布线再刷墙，每一步都有检查点。|Wire before painting, with a check at each stage.
*test-criteria|测试标准|Test criteria|执行检查时用于判断通过与否的规则。|Rules for deciding whether a test passes.|水龙头打开出水，关上不漏水。|A tap must run when opened and stop leaking when closed.
specification|功能规格说明|Functional specification|详细规定功能的输入、行为与输出。|Detailed inputs, behavior, and outputs of a feature.|自动售货机每个按钮如何响应、缺货如何提示。|Define each vending button and out-of-stock response.
technical-plan|技术方案|Technical proposal|说明用什么技术实现需求及原因。|Explains the technologies and reasoning for implementation.|选择电热还是燃气，需要考虑使用条件。|Choose electric or gas cooking based on constraints.
design-doc|设计文档|Design document|记录界面、结构和关键实现决策。|Records interface, structure, and key implementation decisions.|施工图说明房间、管线如何连接。|A building plan shows rooms and pipe connections.
api-doc|接口文档|API documentation|说明接口地址、参数、返回值和错误。|Describes API endpoints, inputs, outputs, and errors.|快递下单表说明必填地址和寄送结果。|A shipping form specifies required addresses and outcomes.
data-dictionary|数据字典|Data dictionary|说明每个数据字段的含义、类型与约束。|Defines field meanings, types, and constraints.|账本规定“金额”用元、“日期”写哪种格式。|A ledger defines currency units and date format.
task-breakdown|任务拆分|Task breakdown|把大目标分解成可完成和检查的小任务。|Breaking a large goal into checkable tasks.|搬家拆成装箱、叫车、运输、清点。|Moving becomes packing, booking transport, and checking boxes.
task-dependency|任务依赖|Task dependency|某任务需要另一任务先完成。|A task requires another task to finish first.|墙未干就不能贴壁纸。|Wallpaper must wait for a dry wall.
backlog|待办清单|Backlog|尚未完成并等待安排的工作集合。|A collection of work awaiting completion or scheduling.|店长尚未处理的维修与采购清单。|A manager's pending repairs and purchases.
readme|项目说明文件|README|介绍项目用途、启动方式和基本用法的入口文件。|The entry document explaining purpose, setup, and usage.|新电器盒子里的入门说明。|The quick-start guide in an appliance box.
changelog|变更日志|Changelog|按版本记录重要变化的说明。|A version-by-version record of important changes.|菜单标出本周新增和停售的菜。|A menu records additions and removals this week.
adr|架构决策记录|ADR|记录重要技术决定、理由及替代方案。|Records a significant architecture decision and its rationale.|留下为何选电梯而非扶梯的决策笔记。|Record why a lift was chosen over an escalator.
test-feedback|测试反馈|Test feedback|记录操作、预期、实际结果及证据。|Records actions, expected and actual results, and evidence.|报修时说明哪个开关、怎样按、出现什么。|Report which switch was pressed and what happened.
fix-plan|修复计划|Fix plan|确定问题原因、修复任务和复测条件。|Specifies diagnosis, repair tasks, and retest conditions.|修水管前先确认漏点和修后验水方法。|Find the leak and define the water test before repair.
release-notes|发布说明|Release notes|面向使用者说明新版本变化与限制。|Explains changes and limitations to users of a release.|商店公告新服务和仍未开放的区域。|A shop announces new services and remaining closures.
maintenance-guide|维护手册|Maintenance guide|说明日常检查、备份和故障处理方法。|Documents routine checks, backups, and fault handling.|电梯保养手册说明多久检查哪些部件。|A lift manual lists checks and their frequency.
runbook|操作手册|Runbook|针对一个运维任务的可执行步骤。|An executable procedure for a specific operational task.|停电时按顺序检查电闸并恢复设备。|A power-outage checklist restores equipment in order.
`);
add('models',`
*ai|人工智能|AI — Artificial intelligence|让机器完成识别、推断、生成等任务的技术总称。|Technologies for tasks such as recognition, inference, and generation.|像给机器安排识字、辨图等能力，不是赋予人的意识。|A machine learns tasks such as reading, not human consciousness.
*llm|大语言模型／大模型|LLM — Large language model|从大量数据学习语言规律并生成内容的模型。|A model trained on large datasets to process and generate language.|像读过很多材料的写作助手，仍可能记错或编造。|Like a widely read assistant who can still invent details.
*model|模型|Model|从训练中得到、用于处理新输入的计算系统。|A trained computational system that processes new input.|同样的题交给不同助手，能力和答案会不同。|Different assistants handle the same question differently.
token|模型词元|Token|模型处理文字等输入时使用的计量片段。|A unit used to represent model inputs and outputs.|像按积木块计数，一块不一定等于一个字。|Count building blocks, not necessarily one block per word.
hallucination|幻觉|Hallucination|AI输出貌似可信但不符合事实的内容。|Plausible model output that is not factually grounded.|助手说出了看似存在、实际查不到的书名。|An assistant invents a convincing book title.
parameter|模型参数|Model parameter|训练过程中调整并保存的内部数值。|Internal values adjusted and stored during training.|像复杂机器里被调好的旋钮，而非用户资料表。|Like tuned internal dials, not a table of user records.
training|训练|Training|利用数据调整模型参数的过程。|Adjusting model parameters using data.|反复做练习并纠正解题方式。|Practice changes the method used to solve problems.
pretraining|预训练|Pretraining|在广泛数据上建立基础能力的训练阶段。|Training on broad data to establish foundational capabilities.|先接受通识教育，再学专门业务。|General education before specialization.
inference|推理运行|Inference|用已经训练好的模型处理一次输入。|Running a trained model on an input.|考试时答题，与备考训练不是同一过程。|Answering an exam differs from studying for it.
reasoning-model|推理模型|Reasoning model|针对多步推理任务优化的模型。|A model optimized for multi-step reasoning tasks.|更愿意花时间分步骤解题的助手，也会出错。|An assistant that works through steps can still be wrong.
multimodal|多模态|Multimodal|能处理文本、图片、声音等多种形式。|Supports multiple forms such as text, images, or audio.|既能看图纸又能听口述的助手。|An assistant that reads plans and listens to explanations.
vision-model|视觉模型|Vision model|能处理图片或视频等视觉输入的模型。|A model that processes images or video.|看照片识别物件，但遮挡可能造成误判。|Recognizing objects in photos can fail with occlusion.
model-version|模型版本|Model version|标识某次模型发布或更新的名称。|An identifier for a model release or update.|同款机器不同年份，行为可能不同。|The same machine model can change by release year.
provider|模型供应商|Model provider|提供模型运行或访问服务的组织。|An organization providing models or model access.|制造电器与开电器商店可能不是同一家。|The maker and distributor need not be the same company.
open-model|开源模型|Open-source model|按相应开放许可证提供相关模型材料的模型。|A model whose materials are provided under an open license.|公开制作材料和规则，具体能做什么仍看许可证。|Published materials still come with specific license conditions.
open-weights|开放权重|Open weights|可获取训练后的参数，不代表全部训练资料开放。|Trained weights are available, not necessarily all training materials.|拿到成品配方参数，不一定拿到全部实验记录。|Receiving the final settings does not include every experiment.
closed-model|闭源模型|Closed model|关键实现或权重未公开的模型。|A model whose key internals or weights are not public.|可以使用餐厅服务，但拿不到秘方。|Use the restaurant service without receiving its recipe.
knowledge-cutoff|知识截止时间|Knowledge cutoff|模型训练知识大致覆盖到的时间范围。|An approximate time boundary for training knowledge.|旧版百科不会自动知道今天的新闻。|An older encyclopedia does not automatically know today's news.
nondeterminism|非确定性|Nondeterminism|同样输入可能得到不同输出的现象。|The same input may produce different outputs.|同一道作文题每次写法可能不同。|The same essay prompt can lead to different essays.
temperature|温度|Temperature|影响生成时随机选择程度的参数。|A parameter affecting randomness in generation.|像控制选词的保守或多样程度，不是正确率开关。|Adjust wording variety, not a correctness switch.
top-p|核采样|Top-p|从累计概率达到阈值的候选中采样。|Samples from candidates within a cumulative probability threshold.|从候选菜单中圈定主要选择再挑选。|Choose from a probability-based shortlist.
output-limit|输出长度限制|Output limit|一次回答允许生成的最大长度。|The maximum output allowed for a response.|答卷页数有限，写满后可能被截断。|An answer sheet can run out of pages.
streaming|流式输出|Streaming output|内容生成一部分就先发送一部分。|Delivers portions of output as they are generated.|厨房做好一道就上一道，不等整桌完成。|Serve dishes as ready rather than waiting for all of them.
first-token|首字延迟|Time to first token|请求发出到收到首个输出片段的时间。|Time from a request to its first output token.|点餐到第一道菜上桌的等待。|Time until the first dish arrives.
generation-speed|生成速度|Generation speed|单位时间生成的输出数量。|The amount of output generated per unit time.|开始出菜后每分钟能上多少道。|How many dishes arrive per minute after serving begins.
`);
add('context',`
*prompt|提示词|Prompt|交给AI的目标、背景、材料与限制。|Instructions and context given to an AI.|像给装修师傅的任务说明，越具体越少猜。|A clear renovation brief reduces guesswork.
*prompt-template|提示词模板|Prompt template|留有填写位置、可重复使用的任务说明。|Reusable instructions with fields to fill in.|像快递单，按栏填写真实地址。|A shipping form with fields for real addresses.
system-prompt|系统提示词|System prompt|由运行系统提供的较高层行为指令。|Higher-level behavioral instructions supplied by the system.|像岗位制度，不是顾客随口说的一句话。|Workplace rules differ from a customer's casual request.
user-prompt|用户提示词|User prompt|使用者当前提交的请求。|The request currently submitted by the user.|顾客这次具体点了哪道菜。|The customer's current order.
*context|上下文|Context|AI本次能看到的对话、文件和背景信息。|The conversation, files, and background available for this turn.|桌上摊开的资料才方便当前查阅。|Documents currently on the desk are readily available.
context-window|上下文窗口|Context window|模型一次能容纳的输入与输出容量范围。|The capacity available for model input and output in a call.|桌子大小有限，不能无限堆文件。|A desk cannot hold unlimited documents.
ai-session|AI会话|AI session|围绕一段交互保存的消息与执行记录。|Messages and execution records for an interaction session.|一次工作会议的记录。|The record of one working meeting.
prompt-engineering|提示词工程|Prompt engineering|设计与验证提示词以改善任务结果。|Designing and testing prompts to improve task outcomes.|反复改进工作单，让接单者更容易做对。|Improve a work order so it is easier to follow correctly.
context-engineering|上下文工程|Context engineering|安排AI何时获得哪些资料与工具结果。|Organizing the information and tool results available to AI.|开会前筛选必要资料，而非搬来整个档案室。|Bring relevant papers to a meeting, not the whole archive.
zero-shot|零样本提示|Zero-shot prompting|不给示范答案，直接说明任务。|Requesting a task without worked examples.|直接要求按地址写快递单。|Ask for a shipping form without showing a sample.
few-shot|少样本提示|Few-shot prompting|给少量示例帮助AI理解格式或规则。|Providing a few examples of the desired behavior.|先展示两张填好的单，再让人填第三张。|Show two completed forms before requesting another.
structured-output|结构化输出|Structured output|按照约定字段和格式生成结果。|Output following a defined structure and fields.|按表格栏位填写，而不是写散文。|Fill table fields rather than free-form prose.
json-schema|JSON结构约束|JSON Schema|描述JSON允许的字段、类型与限制。|Describes valid JSON fields, types, and constraints.|表格规定年龄填数字、姓名填文字。|A form requires a number for age and text for name.
constraint|约束|Constraint|任务必须遵守的限制条件。|A condition the task must respect.|装修不能拆承重墙。|Renovation must not remove a load-bearing wall.
role-instruction|角色指令|Role instruction|指定AI处理任务时的角色和关注点。|Specifies a role and perspective for a task.|请以质检员角度检查，而非只介绍优点。|Review as an inspector rather than a salesperson.
attachment-context|附件上下文|Attachment context|提供给AI参考的文件、图片等内容。|Files or images made available as task context.|递交图纸给施工人员参考。|Give plans to the builders.
code-index|代码库索引|Codebase index|帮助工具定位项目代码的检索结构。|A search structure for locating code in a project.|给图书馆做目录，不是把所有书都读进脑中。|A library catalog does not put every book into memory.
compaction|上下文压缩|Context compaction|把长对话整理成较短的继续工作材料。|Condensing a long interaction into continuation context.|把整场会议整理成纪要，细节可能遗漏。|Meeting minutes may omit details from the full discussion.
truncation|截断|Truncation|因限制而舍去部分输入或输出。|Removing input or output because of a limit.|信纸不够，后半段没写下。|The letter runs out of paper.
resume-session|会话恢复|Session resume|重新载入已有交互状态以继续工作。|Reloading interaction state to continue work.|打开上次会议记录接着讨论。|Reopen the previous meeting record.
long-memory|长期记忆|Long-term memory|跨会话保存并在需要时取用的信息。|Information stored across sessions and retrieved as needed.|把重要决定记入可再次查阅的笔记本。|Keep decisions in a notebook for later meetings.
recall|记忆召回|Memory recall|从保存的信息中找回当前相关内容。|Retrieving relevant stored information.|按主题翻出旧会议决定。|Find an old decision by topic.
context-pollution|上下文污染|Context pollution|无关、过时或错误材料干扰当前任务。|Irrelevant or stale context interferes with a task.|把旧地址混在新订单中。|An outdated address gets mixed into a new order.
reasoning-budget|推理预算|Reasoning budget|系统分配给模型内部推理的资源限制。|Resources allocated to a model's reasoning process.|复杂题多给思考时间，不保证一定答对。|More thinking time does not guarantee a correct answer.
prompt-cache|提示词缓存|Prompt cache|复用已处理的重复输入以减少部分计算。|Reuses processing for repeated prompt content.|固定表头不用每次重新排版，不是复用同一答案。|Reuse form layout, not necessarily the same answer.
`);
add('agents',`
*agent|智能体|Agent|利用模型和工具围绕目标执行任务的系统。|A system using a model and tools to act toward a goal.|像会查资料并实际办事的助理，仍需权限和检查。|An assistant that can act still needs permission and checks.
*skill|技能|Skill|把专门任务的方法、脚本与资料打包供智能体使用。|A reusable package of task instructions, scripts, and resources.|像厨师的菜谱加备料清单，不是另一位厨师。|A recipe and preparation kit, not another chef.
*mcp|模型上下文协议|MCP — Model Context Protocol|让AI应用按统一约定连接外部工具与资料的协议。|A protocol connecting AI applications with external tools and data.|像规定插头接口，接通不等于自动获得全部权限。|A standard connector does not grant unlimited access.
*harness|智能体运行框架|Agent harness|组织模型调用、工具执行、上下文和控制流程的运行系统。|Runtime machinery coordinating model calls, tools, context, and control.|像助理工作的办公室制度与设备，不是助理的大脑。|The office procedures and equipment around an assistant.
*tool-call|工具调用|Tool call|AI请求外部能力执行一个操作。|A request to execute an external capability.|助理不只说“查天气”，而是使用查询工具。|The assistant actually uses a weather lookup.
*plugin|插件|Plugin|给某个软件增加能力的扩展包。|A package extending a host application's capabilities.|给厨房增加设备，接口和用途依厨房而定。|Add equipment compatible with a particular kitchen.
agentic-coding|智能体编程|Agentic coding|让AI通过工具参与读代码、修改和验证的开发方式。|Development where AI acts through tools to edit and verify code.|请助理实际整理账本，而非只讲整理方法。|An assistant edits the ledger rather than only explaining how.
vibe-coding|氛围编程|Vibe coding|通过自然语言与AI协作生成和修改程序的方式。|Building and changing software through natural-language collaboration with AI.|说想做什么，再不断试用和调整；不等于无需验收。|Describe, try, and refine; acceptance checks still matter.
workflow|工作流|Workflow|完成目标的一组步骤及其衔接规则。|Steps and transitions for completing a task.|点餐后才付款，付款后再出餐。|Order, pay, then prepare the meal.
function-calling|函数调用|Function calling|模型按结构化参数请求程序执行函数的机制。|A mechanism for requesting functions with structured arguments.|用标准工单指定工种、地址和任务。|A structured work order specifies task and location.
agent-loop|智能体循环|Agent loop|观察结果、决定动作、执行并再次观察的循环。|A cycle of observing, choosing actions, executing, and checking.|修理工每修一步都再试一下。|A repairer tests after each adjustment.
plan-mode|规划模式|Plan mode|工具提供的以分析和制定步骤为主的工作模式。|A tool mode focused on analysis and planning.|先画施工计划，具体能否改文件要看工具规则。|Plan construction first; actual permissions depend on the tool.
execute-mode|执行模式|Execution mode|按工具权限实际进行修改或操作的模式。|A mode that performs changes subject to tool permissions.|从讨论装修转为实际施工。|Move from discussing renovation to doing it.
subagent|子智能体|Subagent|由主任务分派去完成部分工作的智能体。|An agent assigned a subtask by a coordinating task.|店长请专人盘点库存。|A manager assigns someone to count stock.
multiagent|多智能体|Multi-agent system|多个智能体分工或协作完成任务。|Multiple agents collaborating or dividing work.|多人施工仍需要协调接口和验收。|Multiple builders still need coordination and inspection.
delegation|任务委派|Delegation|把明确的子任务交给其他执行者。|Assigning a defined subtask to another worker.|把采购交给一人，并说清预算与清单。|Delegate shopping with a list and budget.
orchestration|编排|Orchestration|安排执行者、顺序、依赖和结果汇总。|Coordinating workers, order, dependencies, and results.|婚礼统筹安排餐饮、灯光和出场顺序。|A coordinator schedules catering, lights, and arrivals.
handoff|任务交接|Handoff|把目标、进展与必要材料传给下一执行者。|Passing goals, progress, and context to the next worker.|换班时交代未完成订单。|Hand over unfinished orders at a shift change.
approval|人工确认|Human approval|执行指定动作前由人决定是否继续。|A person decides whether an action may proceed.|大额采购需负责人签字。|A large purchase needs authorization.
hitl|人类介入|HITL — Human in the loop|在自动流程中设置人的判断或检查环节。|Human judgment or review within an automated process.|机器分拣后，疑难包裹交给人判断。|Ambiguous parcels are reviewed by a person.
sandbox|沙盒|Sandbox|限制程序可访问资源的隔离运行环境。|An isolated environment restricting accessible resources.|在围栏试验区测试机器，而非直接放到街上。|Test machinery in an enclosed area.
tool-permission|工具权限|Tool permission|工具被允许读取、修改或调用的范围。|The scope a tool may read, change, or invoke.|门卡能开哪些房间由权限决定。|A keycard only opens permitted rooms.
approval-mode|审批模式|Approval mode|规定哪些操作自动执行、哪些需要确认。|Rules defining automatic actions and those needing approval.|采购制度规定小额自办、大额审批。|Purchase policy separates routine and approved spending.
checkpoint|检查点|Checkpoint|为继续或恢复任务留下的状态记录。|A recorded state used to continue or recover work.|长途旅行记下当前位置与下一站。|Record location and next stop during a journey.
hook|钩子|Hook|在指定事件发生时触发额外处理的机制。|Runs additional behavior when a specified event occurs.|门铃响起就触发接待流程。|A doorbell triggers reception work.
connector|连接器|Connector|对接某项外部服务的集成组件。|An integration for a particular external service.|连接收银机与银行服务的适配器。|An adapter between checkout and a payment service.
extension|扩展|Extension|依附于宿主软件增加功能的模块。|A module that adds features to a host application.|为工具箱加一个可安装的附件。|An attachable tool-box accessory.
agent-sdk|智能体开发包|Agent SDK|帮助开发者构建智能体应用的代码工具包。|A software kit for building agent applications.|不是请现成助理，而是拿到组建助理系统的零件。|Parts for building an assistant system rather than hiring one.
`);
add('agent-files',`
*agents-md|智能体项目说明|AGENTS.md|部分AI开发工具读取的项目工作说明文件。|A project instruction file read by supporting AI coding tools.|像施工现场须知，是否读取取决于工具支持。|Site instructions only work if the crew follows that format.
*skill-md|技能说明文件|SKILL.md|描述技能用途和操作方法的入口文件。|The entry file describing a skill and its procedure.|菜谱首页写适合做什么和怎样做。|A recipe cover states its purpose and method.
project-rules|项目规则|Project rules|针对当前项目的工作约定。|Working instructions specific to a project.|每个工地有自己的材料和验收要求。|Each building site has its own requirements.
global-rules|全局规则|Global rules|工具在多个项目中采用的通用约定。|Tool instructions applied across multiple projects.|公司通用制度，不等于每个项目的全部要求。|Company policy is not the full project specification.
instruction-priority|指令优先级|Instruction priority|冲突指令按来源层级决定如何处理的规则。|Rules for resolving instructions from different authority levels.|法律、公司制度和临时口头要求并非同等效力。|Law, policy, and informal requests have different authority.
claude-md|Claude项目说明|CLAUDE.md|Claude相关工具使用的一种项目指令文件。|A project instruction file used by Claude tooling.|另一套施工团队使用自己的说明册格式。|Another crew uses its own instruction-book format.
mcp-host|MCP宿主|MCP host|承载用户交互并管理MCP连接的AI应用。|The AI application managing user interaction and MCP connections.|像装有多个插口的主工作台。|The main workbench that manages connections.
mcp-client|MCP客户端|MCP client|宿主内负责与一个MCP服务端通信的组件。|A host component communicating with an MCP server.|工作台上负责一条连接的适配部件。|The component handling a particular connection.
mcp-server|MCP服务端|MCP server|按MCP协议提供工具、资源等能力的程序。|A program exposing tools or resources through MCP.|按统一规格提供服务的办事窗口。|A service counter using an agreed interface.
mcp-tool|MCP工具|MCP tool|服务端提供的可调用操作。|An executable operation exposed by an MCP server.|办事窗口能办理的某项业务。|One action available at the service counter.
mcp-resource|MCP资源|MCP resource|服务端提供给应用读取的上下文资料。|Context data exposed by an MCP server.|窗口可查阅的表册，不是办事动作。|Reference records rather than an action.
mcp-prompt|MCP提示模板|MCP prompt|服务端提供的可复用交互模板。|A reusable interaction template exposed by an MCP server.|窗口提供的标准申请书格式。|A standard application form.
stdio|标准输入输出传输|stdio transport|通过进程输入输出通道交换协议消息。|Exchanges protocol messages through process input and output.|同一工作间里用传送槽递送单据。|Pass messages through channels within a workspace.
streamable-http|可流式HTTP传输|Streamable HTTP|通过HTTP连接传送MCP消息的传输方式。|An HTTP-based transport for MCP messages.|通过有统一邮寄规则的通道远程送单。|Deliver messages remotely using agreed transport rules.
tool-discovery|工具发现|Tool discovery|查询当前连接提供哪些工具。|Finding which tools a connection exposes.|先看窗口的业务目录。|Read the counter's service list first.
capability-negotiation|能力协商|Capability negotiation|连接双方声明并确定支持的能力。|Peers declare supported capabilities when connecting.|先确认双方是否支持加急或电子回执。|Check whether both sides support express handling.
acp|智能体客户端协议|ACP — Agent Client Protocol|用于编辑器与编程智能体互通的协议。|A protocol connecting editors with coding agents.|让不同工作台能接入不同助理的沟通约定。|An agreement connecting workbenches with assistants.
a2a|智能体间协议|A2A — Agent2Agent|用于智能体系统间发现与协作的协议。|A protocol for discovery and collaboration between agent systems.|不同公司的助理按共同流程交接任务。|Assistants in different organizations exchange work.
`);
add('billing',`
*free-tier|免费额度|Free tier|服务允许免费使用的资源范围。|Resources available without payment under stated limits.|试吃份额不等于无限自助餐。|A free sample is not unlimited dining.
*subscription|订阅|Subscription|按周期付费获得指定服务权益。|Recurring payment for defined service access.|月票只覆盖票面规定的线路。|A monthly pass covers specified routes.
*api-billing|接口计费|API billing|按接口服务的计量规则计算费用。|Charges measured under an API service's billing rules.|餐厅会员费与外卖订单费用可以分开。|Membership and delivery orders can be billed separately.
usage-limit|用量限制|Usage limit|允许使用资源的数量或时间边界。|Limits on how much or how often resources may be used.|套餐每月可洗几次车。|A plan includes a limited number of car washes.
pay-as-you-go|按量付费|Pay as you go|根据实际消耗的服务量付款。|Payment based on actual consumption.|像水电按表计费。|Like a metered utility bill.
input-output-cost|输入／输出费用|Input and output cost|输入材料与生成内容可能采用不同计价。|Inputs and generated outputs may have different prices.|收材料与制作成品分别计费。|Materials handling and production have separate charges.
cache-billing|缓存计费|Cache billing|对缓存读写按服务规则单独计量。|Provider-specific charging for cache operations.|复用模具可能省制作费，但规则要看报价单。|Reusing a mold can reduce costs under specific pricing rules.
request-count|请求次数|Request count|服务收到的调用次数。|The number of calls made to a service.|敲窗口一次算一次，不按信纸字数计。|Count visits to the counter, not words on the form.
rate-limit|速率限制|Rate limit|一段时间内允许的请求或资源消耗上限。|A limit on requests or consumption within a time period.|入口每分钟只放行一定人数。|An entrance admits a limited number per minute.
rpm|每分钟请求数|RPM|每分钟允许或实际发生的请求数量。|Requests per minute.|一分钟能到窗口办几次业务。|How many counter requests fit in one minute.
tpm|每分钟词元数|TPM|每分钟允许或实际处理的Token数量。|Tokens per minute.|不只数顾客，还限制每分钟处理多少页。|Limit pages handled per minute, not just visitors.
concurrency-limit|并发限制|Concurrency limit|同时进行的任务数量上限。|The maximum number of simultaneous tasks.|餐厅同时只有十桌座位。|A restaurant has ten tables available at once.
quota|配额|Quota|分配给账号或项目的资源总量。|An allocation of resources for an account or project.|每月领用纸张有定额。|A monthly paper allocation.
overage|超额计费|Overage|超出套餐包含量后按规则产生的费用。|Charges beyond included allowances where permitted.|手机套餐外流量可能另收费。|Mobile data beyond a plan may cost extra.
budget-cap|预算上限|Budget cap|用于限制或提醒开销的预算设置。|A spending limit or alert setting, depending on service behavior.|预算提醒不一定像电闸一样自动断电。|A budget alert may not be a hard shutoff.
balance|余额|Balance|账号尚可使用的预付金额或信用。|Remaining prepaid funds or credit.|储值卡里剩余的钱。|Money remaining on a prepaid card.
invoice|账单|Bill / Invoice|记录计费周期、用量与费用的凭据。|A record of usage and charges for a billing period.|水费单列明用水量与金额。|A water bill lists consumption and cost.
organization|组织|Organization|服务平台用于管理成员、权限和计费的单位。|A platform grouping for members, access, and billing.|公司的统一采购账户。|A company's shared purchasing account.
account-workspace|账号工作空间|Account workspace|服务中集中协作资料与成员的空间。|A service area grouping collaboration data and members.|公司内不同部门的工作室。|Separate departmental offices.
project-quota|项目额度|Project quota|按服务项目分配或统计的使用资源。|Resources allocated or tracked per service project.|各门店有独立采购预算。|Each branch has a purchasing allocation.
`);
add('retrieval',`
*knowledge-base|知识库|Knowledge base|集中整理并供查找使用的资料集合。|An organized collection of reference information.|图书馆的书与档案。|A library's books and records.
*rag|检索增强生成|RAG|先检索相关资料，再把资料提供给模型回答。|Retrieves relevant material before generating an answer.|开卷答题，先找相关页再作答。|An open-book answer starts with relevant pages.
*embedding|嵌入向量|Embedding|把内容转换为便于比较或检索的数值表示。|A numerical representation used for comparison or retrieval.|给书做主题坐标，相近主题靠近。|Place books on a topic map by numerical coordinates.
vector-db|向量数据库|Vector database|支持存储和检索向量表示的数据系统。|A data system supporting vector storage and search.|按主题坐标找附近的书架。|Find nearby books on a topic map.
document-parsing|文档解析|Document parsing|从文件结构中提取可处理的内容。|Extracting processable content from file structures.|拆开资料袋，分清正文、表格和附件。|Separate text, tables, and attachments in a document pack.
ocr|文字识别|OCR|把图片中的文字转换为可处理文本。|Converts text in images into machine-readable text.|把拍下的收据重新录成文字。|Transcribe a photographed receipt.
chunk|分块|Chunk|为处理或检索把材料切成较小片段。|A smaller segment of material for processing or retrieval.|长课文分成段落方便查找。|Divide a long chapter into searchable passages.
search-index|检索索引|Search index|加速查找内容的数据结构。|A structure that speeds up content lookup.|书末索引指向有关页码。|An index points to relevant pages.
vector|向量|Vector|一组有顺序的数字，可用来表示特征。|An ordered set of numbers representing features.|用温度、湿度等一组数字描述天气。|Describe weather with temperature and humidity values.
vector-search|向量检索|Vector search|按数值表示的相近程度寻找内容。|Finds items by similarity of numerical representations.|找主题位置相近的书，不保证每本都适合。|Nearby topics need not all answer the question.
keyword-search|关键词检索|Keyword search|按文字匹配查找内容。|Retrieves content by matching words.|查目录中含“早餐”的条目。|Look for entries containing “breakfast.”
hybrid-search|混合检索|Hybrid search|组合关键词与向量等检索方式。|Combines approaches such as keyword and vector search.|既按书名又按主题找书。|Search by both title and topic.
rerank|重排序|Rerank|对已找到的候选再次判断相关性并排序。|Reorders retrieved candidates by relevance.|找到一摞书后再挑最相关的放上面。|Rank a retrieved pile by usefulness.
retrieval-recall|检索召回|Retrieval recall|描述相关内容被找回的覆盖程度。|How much relevant material is retrieved.|十本相关书找到八本，仍可能漏两本。|Finding eight of ten relevant books leaves two missing.
similarity|相似度|Similarity|按某种计算规则衡量内容接近程度。|A measure of closeness under a chosen metric.|颜色接近不代表两件衣服用途相同。|Similar colors do not imply the same clothing function.
metadata|元数据|Metadata|描述资料本身的来源、日期等附加信息。|Information describing data, such as source or date.|书的作者、出版时间与分类。|A book's author, publication date, and category.
citation|来源引用|Citation|指出内容所依据的资料位置。|A reference identifying supporting material.|答案旁标明参考书与页码。|An answer identifies its reference page.
fine-tuning|微调|Fine-tuning|继续训练已有模型以调整其行为。|Further training of an existing model to change behavior.|给已有基础的员工做岗位训练。|Job training for an already educated employee.
lora|低秩适配|LoRA|用较小的附加参数进行高效模型适配。|Parameter-efficient adaptation using low-rank updates.|像加装可调附件，类比不代表真实机械结构。|An adjustable attachment is an analogy, not the actual mechanism.
distillation|蒸馏|Distillation|用较强模型等提供的信号训练另一模型。|Training a model using signals from another model.|老师示范供学生学习，不保证学生完全等同老师。|Learning from a teacher does not make the student identical.
quantization|量化|Quantization|用较低精度表示数值以减少资源需求。|Uses lower numerical precision to reduce resource needs.|尺子刻度变粗更省记录，可能失去细节。|Coarser measurements save space but lose detail.
local-model|本地模型|Local model|在本机或自有设备上运行的模型。|A model running on local or owned hardware.|自己家里做饭，而非远程叫外卖。|Cook at home rather than order remotely.
eval|模型／智能体评测|Eval|用明确任务与标准检查AI系统表现。|Tests AI behavior against defined tasks and criteria.|考试要有题目与评分规则。|An exam needs questions and grading rules.
benchmark|基准测试|Benchmark|用约定任务进行可比较的测量。|A standardized set of tasks for comparison.|统一赛道计时，不代表所有道路表现。|A standard race track does not represent every road.
`);
add('environment',`
*ide|集成开发环境|IDE|把编辑、运行和调试等能力放在一起的软件。|Software combining editing, running, and debugging tools.|像配齐工具的工作台。|A fully equipped workbench.
editor|代码编辑器|Code editor|用于阅读和修改代码文件的软件。|Software for reading and editing code files.|专门写程序的文字工作台。|A writing desk designed for code.
*terminal|终端|Terminal|输入命令并查看程序输出的界面。|An interface for commands and program output.|像用文字与办事窗口交流。|A text-based service counter.
*cli|命令行工具|CLI — Command-line interface|通过文字命令操作程序的方式。|A way to operate software through text commands.|填指令单办事，而不是点图形按钮。|Submit a written instruction instead of pressing a pictured button.
*project-folder|项目文件夹|Project folder|集中存放当前项目文件的目录。|A directory holding a project's files.|一个项目的专用档案盒。|A dedicated project file box.
*working-directory|工作目录|Working directory|当前命令默认作用的目录。|The directory a command currently operates from.|站在哪个仓库，就默认处理那里的箱子。|The warehouse currently being worked in.
shell|命令解释器|Shell|读取命令并调用程序的解释环境。|An environment interpreting commands and invoking programs.|终端像窗口，Shell像窗口后处理指令的接待员。|The terminal is the counter; the shell interprets requests.
command|命令|Command|要求程序执行动作的文字指令。|A text instruction requesting an operation.|“把这箱货搬到门口”。|“Move this box to the door.”
argument|命令参数|Argument|传给命令的具体输入值。|A value supplied to a command.|搬运指令中的“这只箱子”。|The box specified in a moving instruction.
option|命令选项|Option / Flag|改变命令行为的设置。|A setting modifying command behavior.|搬运时增加“轻放”要求。|Add “handle gently” to the instruction.
standard-io|标准输入／输出|Standard input / output|程序约定的默认数据输入和输出通道。|Default input and output channels for a process.|固定的收件口与出件口。|Designated incoming and outgoing trays.
exit-code|退出码|Exit code|程序结束时报告状态的数值。|A numeric status returned when a program exits.|工单盖通过或失败章；具体值看程序约定。|A status stamp whose meaning follows the tool's rules.
process|进程|Process|操作系统中正在运行的程序实例。|An instance of a running program.|菜谱是文件，正在做一锅菜像一个进程。|A recipe is stored; actively cooking a batch is a process.
background-process|后台进程|Background process|不占当前交互前台但持续运行的进程。|A process running without occupying the current foreground.|洗衣机运行时仍能做其他家务。|A washing machine runs while other chores continue.
port|端口|Port|网络服务用来区分通信入口的编号。|A number identifying a network service endpoint.|楼房地址相同，窗口编号不同。|Different service windows at the same building.
path-env|程序搜索路径|PATH|系统查找可执行命令时搜索的目录列表。|Directories searched for executable commands.|找工具时按固定顺序查看几个抽屉。|Search specified drawers for a tool.
file-path|绝对／相对路径|Absolute / Relative path|从根位置或当前目录描述文件位置。|A location measured from a root or current directory.|完整街道地址与“从这里左转两间”。|A full street address versus directions from here.
root-directory|根目录|Root directory|文件系统或指定项目层级的起点目录。|The top directory of a filesystem or project hierarchy.|整栋楼入口与某部门入口要分清。|Distinguish the building entrance from a department entrance.
home-directory|主目录|Home directory|操作系统分配给用户的个人目录。|The personal directory assigned to an OS user.|个人储物柜，不是每个项目的根目录。|A personal locker, not every project's root.
hidden-file|隐藏文件|Hidden file|通常不在默认文件列表显示的文件。|A file normally omitted from default listings.|放在内层抽屉，不代表被加密。|An inner drawer is not necessarily locked.
file-extension|文件扩展名|File extension|文件名末尾用于提示格式的部分。|A filename suffix indicating an expected format.|箱子标签写“衣服”，标签不保证里面真是衣服。|A box label does not guarantee its contents.
file-permission|文件权限|File permission|控制谁能读取、写入或执行文件的规则。|Rules governing file reading, writing, and execution.|档案柜的查看、修改与使用权限。|Permissions to read, alter, or use records.
admin|管理员权限|Administrator privileges|允许系统级操作的较高权限。|Elevated permissions for system-wide operations.|总钥匙能开更多门，误操作影响也更大。|A master key opens more doors and carries more risk.
symlink|符号链接|Symbolic link|指向另一文件路径的特殊文件。|A special file referring to another path.|路标指向仓库，不是仓库副本。|A sign points to a warehouse; it is not a copy.
workspace|开发工作区|Development workspace|编辑器或工具当前管理的项目集合。|The projects currently managed by a development tool.|当前工作台上摆放的一组档案盒。|The set of project boxes on the workbench.
remote-development|远程开发|Remote development|操作远程机器上的开发环境。|Working with a development environment on a remote machine.|在前台遥控另一个车间。|Control work in another workshop remotely.
dev-container|开发容器|Dev container|把开发所需软件配置放入容器的环境。|A containerized development environment.|把所需工具装进可搬运的工作间。|A portable workshop with its tools included.
wsl|Windows Linux子系统|WSL|在Windows上使用Linux环境的功能。|A way to use a Linux environment on Windows.|在一栋楼里安排另一套工作间。|A different workshop environment within the same building.
*environment|运行环境|Environment|程序运行所需的设备、软件、配置与服务。|Hardware, software, configuration, and services used to run software.|同一菜谱换炉具和材料，结果可能不同。|The same recipe behaves differently with different equipment.
local|本地|Local|在当前电脑或设备上进行的工作。|Work performed on the current device.|在家做饭，但仍可能从外面购买材料。|Cooking at home can still involve outside suppliers.
`);
add('code',`
*source-code|源代码|Source code|人编写或AI生成的程序文本。|Program text written by people or generated by AI.|像可修改的菜谱，而非已经做好的菜。|An editable recipe rather than the finished dish.
*language|编程语言|Programming language|按规定语法表达程序逻辑的语言。|A language with rules for expressing program logic.|不同工种使用各自约定的图纸符号。|Different trades use agreed notation.
*variable|变量|Variable|用于引用或保存程序中某个值的名字。|A name referring to or holding a program value.|贴了标签的盒子可装不同内容。|A labeled box holds a value.
*function|函数|Function|封装一段可调用操作的代码单元。|A callable unit of program behavior.|按配方投入材料并完成一道菜。|A recipe takes inputs and produces a result.
module|模块|Module|按用途组织并可导入使用的代码单元。|An organized unit of code that can be imported.|工具箱按用途分成不同盒。|Separate tool-box compartments by purpose.
constant|常量|Constant|声明后不能重新绑定或按约定不改变的值。|A binding or value intended not to change.|固定写好的门牌号。|A fixed label on a door.
string|字符串|String|程序中的文字序列。|A sequence of text characters.|名字“张三”按文字处理。|A person's name is treated as text.
number|数字|Number|程序用于计算的数值。|A numeric value used in computation.|账本里能相加的金额。|Amounts that can be added in a ledger.
boolean|布尔值|Boolean|表示真或假的值。|A true-or-false value.|门是已锁还是未锁。|A door is locked or unlocked.
array|数组|Array|按顺序存放多个值的集合。|An ordered collection of values.|有编号顺序的购物清单。|An ordered shopping list.
object|对象|Object|把相关属性和数据组织在一起的结构。|A structure grouping related properties and data.|一张名片同时保存姓名与电话。|A contact card groups name and phone.
null|空值|Null|用于表示明确没有值的标记。|A marker representing intentional absence of a value.|表格明确写“无”。|A form explicitly says “none.”
undefined|未定义|Undefined|部分语言中表示尚未赋值等情况的值。|A value for cases such as an unassigned value in some languages.|表格栏位还没有填写，不一定等于“无”。|An unfilled field differs from an explicit “none.”
condition|条件判断|Conditional|依据条件选择执行哪段代码。|Selects behavior based on a condition.|下雨带伞，否则不带。|Take an umbrella if it rains.
loop|循环|Loop|按条件重复执行一段操作。|Repeats actions under a condition.|逐个清点箱子直到全部数完。|Count boxes until none remain.
class|类|Class|描述一类对象结构与行为的定义。|A definition of object structure and behavior.|饼干模具规定形状。|A mold defines a shape.
instance|实例|Instance|根据定义创建的具体对象。|A concrete object created from a definition.|同一模具做出的某一块饼干。|One cookie produced from a mold.
function-parameter|函数参数|Function parameter|函数接收输入时使用的名称或值。|A function's input names or supplied values.|菜谱中的人数影响食材用量。|The serving count changes recipe quantities.
return-value|返回值|Return value|函数执行后交给调用者的结果。|The result a function gives its caller.|点菜后端回的成品。|The dish returned after an order.
code-scope|作用域|Scope in code|某个名字可被访问的代码范围。|The region where a name is accessible.|钥匙只在特定楼层有效。|A key works within a specified area.
import-export|导入／导出|Import / Export|声明或使用模块对外提供的代码。|Exposing or consuming code across modules.|一个工具间把工具借给另一个。|One workshop makes tools available to another.
sync-async|同步／异步|Synchronous / Asynchronous|操作是否按等待完成的方式衔接。|Whether operations proceed by waiting for completion or through deferred results.|排队等饭与取号后先做别的事。|Wait at the counter or take a number and do something else.
promise|异步结果承诺|Promise|代表将来成功结果或失败原因的对象。|An object representing a future result or failure.|取餐凭条不等于食物已经做好。|A collection ticket does not mean the food is ready.
async-await|异步等待语法|async / await|以较顺序的写法处理异步结果的语法。|Syntax for working with asynchronous results in sequential-looking code.|拿到取餐号后，等通知再继续下一步。|Continue after the collection notification arrives.
callback|回调|Callback|交给另一段代码在合适时候调用的函数。|A function supplied to be called at an appropriate time.|留下电话，货到后通知。|Leave a number for a delivery notification.
event|事件|Event|程序中发生、可被监听处理的动作或变化。|An occurrence that code can listen for and handle.|门铃响了就是一个事件。|A ringing doorbell is an event.
exception|异常|Exception|程序执行中用来报告特殊失败的机制。|A mechanism reporting exceptional failure during execution.|发现食材坏了，暂停正常做菜流程。|Spoiled ingredients interrupt normal cooking.
call-stack|调用栈／堆栈|Call stack|记录当前函数调用层次的结构。|Tracks nested active function calls.|经理问主管，主管问店员，按原路返回答案。|A question passes down a chain and answers return upward.
type|类型|Type|描述值种类和允许操作的规则。|Describes a value's kind and permitted operations.|电话号码虽有数字，却不应拿来求和。|A phone number is not something to add arithmetically.
type-check|类型检查|Type checking|检查值与操作是否符合类型要求。|Checks compatibility between values and operations.|检查金额栏是否填了文字。|Check whether text was entered in an amount field.
generic|泛型|Generic|让代码在保持类型约束下适用于多种类型。|Reusable typed code parameterized over types.|可换尺寸的收纳盒仍有统一的使用规则。|Storage boxes vary in size but keep shared rules.
serialization|序列化／反序列化|Serialization / Deserialization|把数据变成可传输格式或还原回来。|Converts data to a transportable form and back.|打包行李与到达后拆包。|Pack luggage and unpack at arrival.
regex|正则表达式|Regular expression|用模式匹配和处理文字的规则。|A pattern for matching and processing text.|按号码格式筛选表单，不证明号码真实存在。|Match a number's format without proving it exists.
encoding|字符编码|Character encoding|把文字映射为数字或字节的约定。|Rules mapping text to numerical representations.|双方用同一本电报码才能读懂。|Both sides need the same coding convention.
unicode|统一字符标准|Unicode|为世界文字等符号分配编码的标准。|A standard assigning codes to characters and symbols.|给不同文字建立统一编号表。|A shared catalog of character numbers.
utf8|UTF-8编码|UTF-8|一种把Unicode字符编码为字节的方式。|A byte encoding for Unicode characters.|同一编号表有具体打包运输方式。|A particular packing method for the character catalog.
`);
add('stack',`
*frontend|前端|Frontend|向用户呈现界面并处理界面交互的部分。|The user-facing interface and its interaction logic.|餐厅菜单与点餐屏，不是做饭的厨房。|The menu and ordering screen, not the kitchen.
*backend|后端|Backend|处理请求、业务规则、权限和数据的服务部分。|Services handling requests, rules, access, and data.|厨房接到订单后检查并制作。|The kitchen checks and prepares orders.
*fullstack|全栈|Full-stack|同时涉及前端与后端的开发工作。|Development spanning frontend and backend.|同时负责点餐界面与厨房处理流程。|Work on both ordering and preparation.
*stack|技术栈|Tech stack|项目选用的语言、框架、运行环境和服务组合。|The languages, frameworks, runtimes, and services used together.|一家厨房选用的炉具、器皿和流程组合。|The combined equipment and procedures of a kitchen.
*framework|框架|Framework|提供结构与约定，供项目在其中实现功能的基础。|A foundation providing structures and conventions for an application.|已有骨架的房屋，按结构安装房间设施。|Fit rooms into an existing structural frame.
*library|代码库|Library|供程序调用的一组现成代码能力。|Reusable code called by a program.|从工具箱取一把需要的扳手。|Take a needed wrench from the toolbox.
*dependency|依赖|Dependency|构建或运行项目所需要的外部软件包。|External software required to build or run a project.|做菜依赖某些食材与器具。|Cooking requires ingredients and equipment.
client|客户端|Client|向服务请求功能或数据的程序。|A program requesting data or services.|顾客向窗口提出需求。|A customer makes a request at the counter.
server-side|服务端|Server side|在提供服务的一端执行的代码或工作。|Work performed on the service-providing side.|窗口后面处理订单的区域。|The work area behind the counter.
runtime|运行时|Runtime|程序执行时依赖的运行支持环境。|The support environment in which code executes.|菜谱要有能工作的厨房才能做出来。|A recipe needs a functioning kitchen.
sdk|软件开发工具包|SDK|用于开发某平台或服务应用的一组工具与库。|Tools and libraries for developing with a platform or service.|厂家提供的安装工具、零件与说明套装。|A manufacturer's installation kit.
package-manager|包管理器|Package manager|负责安装、解析和管理软件包依赖的工具。|Installs and manages software packages and dependencies.|按采购单买齐食材并记录版本。|Acquire required supplies and track them.
version|依赖版本|Dependency version|标识所用软件包某次发布的编号。|An identifier for a package release.|同款零件不同批次可能接口不同。|Different releases of a part may behave differently.
dev-dependency|开发依赖|Development dependency|主要用于开发、测试或构建的依赖。|A dependency primarily used for development, testing, or building.|装修时的脚手架，不一定交给住户使用。|Construction scaffolding is not necessarily part of the final home.
transitive-dependency|传递依赖|Transitive dependency|某个依赖自身还需要的其他依赖。|A dependency required by another dependency.|买咖啡机还需要配套滤芯。|A coffee machine also needs compatible filters.
lockfile|锁文件|Lockfile|记录解析后的依赖版本等信息以便复现安装。|Records resolved dependency versions for repeatable installation.|采购单记录具体型号，避免下次买到不同零件。|Record exact part models for the next purchase.
semver|语义化版本|SemVer|用主版本、次版本和修订号表达变更级别的约定。|A major.minor.patch convention for versioned changes.|包装数字提示改动级别，但仍需看说明。|Version labels suggest change scope; read the notes too.
scaffolding|脚手架|Scaffolding|生成项目初始结构的工具或过程。|Tools or processes creating initial project structure.|先搭起施工基础，不代表房子完成。|Set up the construction frame, not the finished home.
boilerplate|样板项目|Boilerplate|可作为新项目起点的预设代码与配置。|Preset code and configuration used as a starting point.|通用装修样板需要按实际住户修改。|A standard plan must be adapted to its occupants.
entry-file|入口文件|Entry file|程序或构建流程开始加载的文件。|The file where execution or loading starts.|从大门进入再去各房间。|Enter through the front door before other rooms.
configuration|配置文件|Configuration file|保存程序运行选项的文件。|A file storing program settings.|设备说明表记录温度与模式。|A settings sheet records temperature and mode.
env-var|环境变量|Environment variable|由运行环境提供给程序的命名配置值。|A named value supplied by the execution environment.|不同门店把各自地址交给同一套收银程序。|Each branch supplies its address to the same checkout software.
dotenv|环境配置文件|.env|常用来保存本地环境变量配置的文件。|A common file format for local environment settings.|配置纸可能含钥匙信息，不能贴在公开橱窗。|A settings sheet may contain secrets and is not public signage.
build-tool|构建工具|Build tool|把源文件处理为目标产物的工具。|Processes source files into target outputs.|把原料加工成可交付成品的设备。|Equipment turns raw material into deliverables.
compile|编译|Compilation|把源代码转换为另一种目标表示。|Translates source code into a target representation.|把设计说明转换成机器可执行的指令形式。|Translate design instructions into another executable form.
transpile|转译|Transpilation|把一种源代码转换为另一种源代码。|Translates one source-code form into another.|把一套工作用语改写成另一套。|Rewrite instructions in another working language.
bundle|打包|Bundling|把模块和资源整理为发布所需文件。|Combines modules and assets into distributable files.|把不同零件装成发货套装。|Pack separate parts into a delivery kit.
dev-server|开发服务器|Development server|供本地开发预览和调试的服务。|A server used for development preview and debugging.|试营业厨房，不等于正式对外营业。|A trial kitchen is not a production restaurant.
hmr|热更新|HMR — Hot module replacement|开发时替换更新模块而尽量保留页面状态。|Updates modules during development while preserving state where possible.|更换桌面小部件而不搬走整张桌子。|Replace a desk component without clearing the whole desk.
lint|静态规范检查|Lint|不运行完整程序就检查部分代码问题和规范。|Checks code patterns and issues without full execution.|检查施工图，不等于房子已经试住。|Review a building plan, not a lived-in house test.
format|代码格式化|Formatting|按规则统一代码排版。|Applies consistent code layout.|整理文档缩进，不自动纠正内容逻辑。|Align a document without fixing its reasoning.
`);
add('technologies',`
*html|网页结构语言|HTML|描述网页内容和语义结构的标记语言。|Markup describing page content and semantic structure.|房屋有哪些房间和门。|The rooms and doors of a house.
*css|网页样式|CSS|控制网页外观与布局的样式语言。|A language controlling page appearance and layout.|房间的颜色、尺寸和摆放。|Room colors, sizes, and arrangement.
*javascript|JavaScript语言|JavaScript|常用于网页交互，也能在其他运行环境使用的语言。|A language used for web interactions and other runtimes.|让灯随开关动作的控制逻辑。|Logic making lights respond to switches.
*typescript|TypeScript语言|TypeScript|在JavaScript基础上增加类型等能力的语言。|A language adding types and other features to JavaScript.|在操作说明中标明每种材料允许的类型。|Instructions also specify allowed material types.
*sql|结构化查询语言|SQL|用于操作关系型数据库的语言。|A language for working with relational databases.|按明确条件向账房查询记录。|Ask a ledger keeper for matching records.
*python|Python语言|Python|常用于脚本、数据处理和后端的编程语言。|A language often used for scripting, data work, and backends.|一套用途广泛的工作指令语言。|A versatile language for work instructions.
nodejs|Node.js运行时|Node.js|让JavaScript能在浏览器外运行的环境。|A runtime for JavaScript outside the browser.|同一种菜谱能在另一种厨房执行。|Run a familiar recipe in another kitchen.
npm|npm包管理器|npm|JavaScript生态常用的包管理工具和包仓库服务。|A package manager and registry in the JavaScript ecosystem.|工具采购员和对应的零件市场。|A supply manager and a parts marketplace.
pnpm|pnpm包管理器|pnpm|注重高效存储与依赖管理的包管理工具。|A package manager focused on efficient storage and dependencies.|多个工位共享仓库中的零件副本。|Workstations reuse centrally stored supplies.
yarn|Yarn包管理器|Yarn|JavaScript项目可选的包管理工具。|An alternative package manager for JavaScript projects.|另一位按自己的规则管理采购的人员。|Another system for managing supplies.
bun|Bun工具集|Bun|包含JavaScript运行、包管理和测试等能力的工具集。|A toolkit including JavaScript runtime, packages, and testing.|把多个工种工具组合进一个箱子。|Several tools combined in one kit.
deno|Deno运行时|Deno|可运行JavaScript和TypeScript的运行环境。|A runtime supporting JavaScript and TypeScript.|支持相关配方的另一间厨房。|Another kitchen supporting related recipes.
react|React界面库|React|用组件组织用户界面的JavaScript库。|A JavaScript library for component-based interfaces.|用可组合积木搭界面。|Build interfaces from reusable blocks.
vue|Vue框架|Vue|用于构建用户界面的JavaScript框架。|A JavaScript framework for user interfaces.|另一套搭界面的积木与组合规则。|Another interface kit with its own conventions.
nextjs|Next.js框架|Next.js|基于React提供路由和服务端等能力的框架。|A React framework with routing and server capabilities.|给界面积木配上通道和工作间。|Add corridors and work areas to the interface kit.
nuxt|Nuxt框架|Nuxt|基于Vue提供应用组织和渲染能力的框架。|A Vue framework for application structure and rendering.|为另一套积木补齐整体施工框架。|A fuller construction framework around another kit.
astro|Astro框架|Astro|面向内容网站等场景、支持按需交互的Web框架。|A web framework emphasizing content and selective interactivity.|展览主要陈列内容，需要时才安装互动装置。|A content exhibition adds interaction where needed.
vite|Vite构建工具|Vite|提供开发服务器与生产构建能力的前端工具。|A frontend development-server and build tool.|试装工作台与出厂加工设备。|A trial workbench and production equipment.
tailwind|Tailwind CSS|Tailwind CSS|通过组合样式类编写界面的CSS工具。|A CSS tool using composable utility classes.|用预先命名的样式零件装饰房间。|Decorate using named style pieces.
express|Express后端框架|Express|Node.js生态中处理Web请求的框架。|A Node.js framework for handling web requests.|为厨房安排接单窗口和处理规则。|Organize order counters and processing rules.
fastapi|FastAPI框架|FastAPI|用于构建Python接口服务的框架。|A Python framework for building API services.|把Python工作间接成标准服务窗口。|Expose a Python workshop through service counters.
django|Django框架|Django|提供数据库、管理等多种Web开发能力的Python框架。|A Python web framework with integrated application capabilities.|较完整的开店设施套装。|A fuller kit of shop facilities.
java|Java语言|Java|常用于服务端等应用的编程语言。|A programming language often used for server applications.|一套常见的工程工作语言。|An established engineering language.
go|Go语言|Go|常用于网络服务和工具的编程语言。|A language often used for network services and tools.|用于服务流水线的一套工作语言。|A language used for service workflows.
rust|Rust语言|Rust|重视内存安全与性能的编程语言。|A language emphasizing memory safety and performance.|工具借用规则在施工前就严格检查。|Strict borrowing rules checked before work runs.
php|PHP语言|PHP|常用于Web服务端开发的语言。|A language widely used for server-side web development.|处理网页订单的一套工作语言。|A language for handling web requests.
csharp|C#语言|C#|常用于.NET应用等场景的编程语言。|A language commonly used with .NET applications.|一套有配套设施的工程语言。|An engineering language with a supporting ecosystem.
`);
add('platforms',`
*website|网站|Website|通过网址访问的一组网页与资源。|Pages and resources accessed through a web address.|商店的线上门面。|An online storefront.
*webapp|Web应用|Web application|通过浏览器完成交互任务的软件。|Software used through a browser to perform tasks.|不只看菜单，还能点餐和查订单。|View a menu, order, and track the order.
*mini-program|小程序|Mini program|在特定平台宿主内运行的应用。|An application running inside a platform host.|商场内的店铺遵守商场规则。|A shop inside a mall follows the mall's rules.
*mobile-app|移动应用|Mobile app|为手机等移动设备提供功能的软件。|Software providing functions on mobile devices.|安装在随身设备上的办事工具。|A service tool carried on a mobile device.
*desktop-app|桌面应用|Desktop app|在电脑桌面系统中运行的应用。|An application running on a desktop operating system.|放在个人工作台上的专用设备。|A dedicated tool on a personal workbench.
static-site|静态网站|Static site|主要直接提供预先生成文件的网站。|A site primarily serving prebuilt files.|印好的宣传册直接递给读者。|Hand readers a preprinted brochure.
dynamic-site|动态网站|Dynamic site|按请求或数据动态产生内容的网站。|A site generating content based on requests or data.|根据顾客身份制作不同账单。|Prepare a bill for each customer's situation.
spa|单页应用|SPA|主要在同一页面内更新内容的应用结构。|An app updating views primarily within one loaded page.|在同一窗口切换办事内容。|Change services within the same counter window.
mpa|多页应用|MPA|通过多个独立页面提供功能的应用结构。|An app organized across separately loaded pages.|不同业务去不同房间。|Different rooms serve different tasks.
pwa|渐进式Web应用|PWA|可使用安装或离线等Web能力的应用形式。|A web app using capabilities such as installation or offline support.|网页工具可像常用应用一样放在桌面。|A web tool can be placed on the home screen.
native-app|原生应用|Native app|主要使用平台原生技术构建的应用。|An application built using a platform's native technologies.|按某栋楼的设施专门设计设备。|Equipment designed for one building's facilities.
cross-platform|跨平台应用|Cross-platform app|让较多代码能用于多个平台的应用。|An app sharing substantial code across platforms.|通用零件加不同接口适配。|Shared parts with platform-specific adapters.
hybrid-app|混合应用|Hybrid app|结合Web界面与原生容器能力的应用。|An app combining web interfaces with a native shell.|把网页工作台装进本机外壳。|A web workbench inside a native enclosure.
browser-extension|浏览器扩展|Browser extension|给浏览器增加功能的安装模块。|An installable module extending a browser.|给现有工具加附件，不是独立浏览器。|An accessory for an existing tool.
cli-app|命令行程序|CLI application|主要通过终端命令操作的软件。|Software operated mainly through terminal commands.|用文字工单控制的工具。|A tool controlled by written work orders.
background-service|后台服务|Background service|持续或按需在后台提供功能的程序。|A program providing functions in the background.|看不见的配电室仍在工作。|A utility room works out of sight.
saas|软件即服务|SaaS|由服务商运行并通过网络提供的软件服务。|Software operated by a provider and accessed over a network.|租用现成厨房服务，而非自建厨房。|Rent a managed kitchen service.
admin-panel|管理后台|Admin panel|供管理者维护数据、账号或业务的界面。|An interface for managing data, accounts, or operations.|店长的库存和订单管理台。|A manager's stock and order desk.
cms|内容管理系统|CMS|用于编辑、组织和发布内容的系统。|A system for editing, organizing, and publishing content.|编辑部的文章排版与发布台。|An editorial publishing desk.
electron|Electron框架|Electron|用Web技术构建桌面应用的框架。|A framework for desktop apps using web technologies.|把网页工作台放进桌面应用包装。|Package a web workbench as a desktop app.
tauri|Tauri框架|Tauri|结合Web界面与本机能力构建应用的工具框架。|Tools combining web interfaces and native capabilities.|用系统提供的显示窗口装配应用。|Build around a system-provided display surface.
flutter|Flutter框架|Flutter|使用Dart构建多平台界面的工具框架。|A Dart-based toolkit for multi-platform interfaces.|用一套绘制与组件工具适配多种屏幕。|A shared rendering toolkit for different screens.
react-native|React Native框架|React Native|用React方式构建原生平台界面的框架。|A framework using React concepts for native interfaces.|相似的施工说明连接不同平台零件。|Shared design concepts connect native platform parts.
swift|Swift语言|Swift|常用于Apple平台应用开发的语言。|A language often used for Apple-platform applications.|为对应平台设施工作的语言。|A language used with a platform's facilities.
kotlin|Kotlin语言|Kotlin|常用于Android及其他平台的编程语言。|A language used for Android and other platforms.|另一套移动与服务开发语言。|A language for mobile and other development.
webview|网页视图|WebView|应用内嵌入网页内容的显示组件。|A component displaying web content inside an app.|商店里嵌入一个展示窗。|A display window embedded inside a shop.
`);
add('design',`
*ui|用户界面|UI|用户能看到和操作的界面。|The interface a person sees and operates.|电梯按钮与楼层显示屏。|Lift buttons and the floor display.
*ux|用户体验|UX|用户完成任务过程中的整体感受与顺畅程度。|The overall experience of completing a task.|不只按钮好看，还要容易找到并知道是否按成功。|Buttons must be findable and provide clear feedback.
*page|页面|Page|承载一组内容和操作的界面单元。|An interface unit containing content and actions.|一本册子中有明确主题的一页。|A page with a clear topic in a booklet.
*component|组件|Component|可以独立描述或复用的一块界面与行为。|A reusable or independently described interface unit.|积木块可组合，但还要规定怎样连接。|Building blocks also need connection rules.
*layout|布局|Layout|界面元素的位置、尺寸与排列关系。|The placement, size, and arrangement of interface elements.|家具如何摆放影响走动路线。|Furniture placement affects movement.
navigation|导航|Navigation|帮助用户找到位置和前往目标的结构。|Structures helping users locate and reach destinations.|商场楼层导览与指示牌。|Mall directories and direction signs.
form|表单|Form|收集一组用户输入的界面。|An interface collecting a set of user inputs.|报名表的姓名、电话与提交按钮。|A registration form and its submit control.
wireframe|线框图|Wireframe|用简化结构表达界面布局的草图。|A simplified sketch of interface structure.|先画房间轮廓，不选墙纸。|Sketch room outlines before choosing wallpaper.
visual-design|视觉稿|Visual design mockup|表现界面颜色、字体和样式的设计图。|A design showing colors, typography, and appearance.|装修效果图，不代表电路已经接通。|A decor rendering does not prove the wiring works.
interactive-prototype|交互原型|Interactive prototype|可模拟部分操作路径的设计模型。|A design model simulating selected interactions.|样板门能开关，但可能尚未装真实门禁。|A demo door opens but may lack real access control.
design-system|设计系统|Design system|统一组件、样式和使用规则的体系。|A system of shared components, styles, and usage rules.|连锁店统一招牌、菜单和服务规范。|A chain shares signage, menus, and rules.
design-token|设计变量|Design token|给颜色、间距等设计值命名以统一复用。|Named reusable values for colors, spacing, and other design choices.|统一规定“小号间距”是多少。|A shared definition of “small spacing.”
information-architecture|信息架构|Information architecture|组织内容分类、层级与入口的方式。|How content categories, hierarchy, and access are organized.|超市按生鲜、日用品分区。|A supermarket organized by departments.
visual-hierarchy|视觉层级|Visual hierarchy|用大小、颜色与位置表现信息重要程度。|Visual emphasis expressing information importance.|店招比附注醒目。|A shop sign stands out more than a footnote.
spacing|间距|Spacing|界面元素之间的距离。|Distance between interface elements.|餐桌间留通道，不是越挤越高效。|Tables need usable aisles.
alignment|对齐|Alignment|让元素沿共同边线或中心排列。|Arranging elements along shared edges or centers.|书架标签沿同一边排列更好找。|Aligned shelf labels are easier to scan.
font-size|字号|Font size|文字显示的大小。|The displayed size of text.|路牌字太小会看不清。|Tiny lettering makes a sign unreadable.
font-weight|字重|Font weight|字体笔画的粗细。|The thickness of type strokes.|重要标题用更粗的笔写。|Use a thicker pen for emphasis.
contrast|对比度|Contrast|文字或图形与背景的亮度差异。|Luminance difference between content and background.|浅灰字写在白纸上难以辨认。|Pale gray on white is hard to read.
*responsive|响应式|Responsive design|根据可用屏幕空间调整界面排列。|Adapts layout to available screen space.|同一套家具在大小房间采用不同摆法。|Arrange the same furniture differently in different rooms.
breakpoint|断点|Responsive breakpoint|触发布局变化的尺寸条件。|A size condition that changes a layout.|通道变窄时由三列改两列。|Reduce three columns to two when space narrows.
viewport|视口|Viewport|当前可显示网页内容的区域。|The visible area available for page content.|窗框大小决定能看到多少景色。|The window size limits the visible scene.
mobile-first|移动优先|Mobile first|先为小屏设计，再扩展到较大屏幕。|Design for small screens before expanding layouts.|先装好小房间的必需品，再规划大房间。|Fit essentials into a small room first.
a11y|无障碍|Accessibility / A11y|让不同能力与使用方式的人能使用产品。|Making a product usable with varied abilities and interaction methods.|楼梯旁提供坡道，不只是装饰。|A ramp provides an alternative to stairs.
semantic-html|语义化HTML|Semantic HTML|使用符合内容含义的HTML元素。|Using HTML elements that match the meaning of content.|门上写“出口”，而不是随意编号。|Label an exit by its purpose.
aria|辅助语义属性|ARIA|补充界面角色、名称和状态的辅助技术属性。|Attributes conveying roles, names, and states to assistive technology.|给看不到外形的人补充清楚标牌。|Provide descriptive signs when appearance cannot be seen.
focus|键盘焦点|Keyboard focus|当前接收键盘输入的界面位置。|The element currently receiving keyboard interaction.|聚光灯照到哪个按钮，按键就作用在那里。|A spotlight identifies the keyboard target.
tab-order|Tab顺序|Tab order|按Tab键时焦点移动的先后顺序。|The sequence of focus movement with the Tab key.|办事路线不能忽左忽右乱跳。|A service route should follow a sensible order.
screen-reader|屏幕阅读器|Screen reader|把界面信息通过语音或盲文等方式输出的工具。|Software presenting interface information through speech or braille.|由讲解员读出控件名称与状态。|A guide announces control names and states.
dark-mode|暗色模式|Dark mode|以较暗背景为主的显示主题。|A display theme using darker backgrounds.|夜间照明仍要看得清标牌。|Night lighting must keep signs readable.
i18n|国际化|Internationalization / i18n|让软件结构能支持不同语言和地区。|Preparing software to support languages and regions.|菜单预留不同文字长度与计价习惯。|A menu system accommodates languages and local conventions.
l10n|本地化|Localization / l10n|把内容和格式适配到具体语言地区。|Adapting content and formats to a specific locale.|把菜单实际翻译并调整日期货币格式。|Translate the menu and adapt dates and currency.
`);
add('ui-states',`
*button|按钮|Button|触发一个操作的界面控件。|A control that triggers an action.|电梯呼叫按钮。|A lift call button.
input|输入框|Input field|允许用户输入内容的控件。|A control for entering information.|报名表中的填写栏。|A field on a registration form.
select|下拉选择|Select / Dropdown|展开候选项供选择的控件。|A control revealing options to choose from.|从菜单中选一道菜。|Choose one dish from a menu.
modal|模态弹窗|Modal|要求先处理它再操作背景界面的对话层。|A dialog requiring attention before background interaction.|柜台暂停当前业务，请先确认一项决定。|A counter pauses work for a required decision.
dialog|对话框|Dialog|与用户交流信息或收集决定的界面。|An interface for information or a decision, modal or not.|弹出的确认单或说明窗口。|A confirmation or information window.
loading|加载状态|Loading state|表示任务仍在等待或处理的状态。|Indicates work is pending or processing.|取餐屏显示正在制作。|An order screen says preparation is in progress.
empty-state|空状态|Empty state|没有内容时解释现状并给出下一步。|Explains missing content and suggests a next action.|空书架旁说明“先添加第一本书”。|An empty shelf invites the first book.
error-state|错误状态|Error state|操作失败时提供原因与恢复方向。|Communicates failure and recovery options.|付款失败说明可重试或换方式。|A payment failure offers recovery choices.
success-state|成功状态|Success state|说明某项操作已经完成的反馈。|Feedback that an operation completed.|收到有编号的回执。|Receive a numbered receipt.
disabled-state|禁用状态|Disabled state|控件当前不可操作的状态。|A control is currently unavailable for action.|未营业窗口暂不能办理业务。|A closed counter cannot accept work.
selected-state|选中状态|Selected state|标明当前选定的项目。|Indicates the currently selected item.|菜单上勾选的菜。|A checked item on a menu.
hover|悬停|Hover|指针停在元素上方时的状态。|The state while a pointer is over an element.|指向某件展品时出现提示。|Point at an exhibit to reveal a hint.
skeleton|骨架屏|Skeleton screen|内容加载前显示的大致布局占位。|A placeholder approximating pending content layout.|先摆空相框提示照片将放在哪里。|Empty frames show where photos will appear.
toast|轻提示|Toast|短暂显示操作结果等信息的提示。|A brief notification about an outcome or event.|收到货时短暂响起提示。|A short delivery notification.
tooltip|悬浮说明|Tooltip|在触发或聚焦时出现的简短说明。|A brief explanation shown on hover or focus.|按钮旁的小注释牌。|A small explanatory label near a control.
drawer|抽屉面板|Drawer|从界面边缘展开的内容面板。|A panel opening from an interface edge.|拉开侧边抽屉找工具。|Open a side drawer for tools.
tabs|标签页|Tabs|在同一区域切换不同内容的控件。|Controls switching content within a shared area.|文件夹的分类标签。|Tabbed sections in a folder.
accordion|折叠面板|Accordion|按标题展开或收起内容的结构。|Sections that expand or collapse under headings.|按需打开文件夹而非全摊开。|Open only the folder needed.
breadcrumb|面包屑导航|Breadcrumb|显示当前位置所属层级的导航。|Navigation showing the current hierarchy.|商场／二楼／家电区。|Mall / second floor / appliances.
pagination|分页|Pagination|把结果分成可逐页访问的部分。|Divides results into navigable pages.|通讯录分成多页。|A directory divided into pages.
infinite-scroll|无限滚动|Infinite scroll|接近列表末尾时继续加载内容。|Loads more content as the list end approaches.|卷轴往下拉就继续展开。|A scroll keeps unrolling.
filter|筛选|Filter|只保留符合条件的内容。|Keeps items matching selected conditions.|只看不辣的菜。|Show only non-spicy dishes.
sort|排序|Sort|按规则改变内容的先后顺序。|Orders items by a rule.|按价格从低到高排菜单。|Order dishes by price.
search|搜索|Search|通过查询寻找相关内容。|Finds content using a query.|按书名或主题找书。|Find a book by title or topic.
debounce|防抖|Debounce|连续触发后等待安静一段时间再执行。|Waits for a pause after repeated events before acting.|听完一段话再回应，不每个字都打断。|Respond after a pause, not after every word.
throttle|节流|Throttle|限制某操作在一定时间内的执行频率。|Limits how frequently an action runs.|每隔固定时间报一次位置。|Report position at limited intervals.
optimistic-update|乐观更新|Optimistic update|先显示预期成功结果，失败时再纠正。|Shows expected success before confirmation and recovers on failure.|先在清单打勾，若商店缺货再撤回。|Mark a purchase pending, then undo if unavailable.
state|状态|State|决定程序或界面当前表现的数据与条件。|Data and conditions determining current behavior.|同一窗口有营业、排队、暂停等状态。|A counter can be open, busy, or paused.
`);
add('browser',`
*url|统一资源定位符|URL|描述网络资源位置及访问方式的地址。|An address identifying a resource and access scheme.|完整地址可能包括楼名、房号与查询条件。|A full address can include a building, room, and details.
*domain|域名|Domain|网络地址中便于记忆的名称。|A human-readable name used in network addressing.|店铺的名称地址，不等于店铺实际机器。|A memorable shop address, not its equipment.
browser-cache|浏览器缓存|Browser cache|浏览器保存的可复用资源副本。|Reusable resource copies stored by a browser.|把常看菜单留一份，可能不是最新版。|Keep a menu copy that may become outdated.
*cookie|浏览器小型数据|Cookie|网站让浏览器保存并按规则随请求携带的数据。|Data stored by a browser and sent with matching requests.|会员小票会按条件出示给窗口。|A membership slip is presented on matching visits.
*localstorage|本地网页存储|LocalStorage|浏览器按来源保存字符串数据的空间。|Origin-scoped browser storage for string data.|这个浏览器自己的抽屉，不自动同步到别的电脑。|A drawer in this browser, not automatic cross-device storage.
dom|文档对象模型|DOM|浏览器用对象树表示网页结构的方式。|The browser's object-tree representation of a document.|房屋结构图分成楼层和房间节点。|A building structure tree with floors and rooms.
css-selector|CSS选择器|CSS selector|指定哪些页面元素应用样式的规则。|A rule selecting elements to style.|只给“出口”标牌统一涂色。|Apply a style only to exit signs.
box-model|盒模型|Box model|描述元素内容、内边距、边框和外边距的模型。|Describes content, padding, border, and margin.|礼物、缓冲层、盒壁与盒子之间的距离。|Gift, padding, box wall, and space between boxes.
flexbox|弹性布局|Flexbox|主要沿一个方向组织和分配空间的CSS布局。|A CSS layout for arranging space along one main dimension.|一排座位按人数分配空间。|Arrange seats along a row.
grid|网格布局|CSS Grid|按行列组织页面区域的CSS布局。|A CSS layout organizing content in rows and columns.|棋盘按行列定位格子。|Locate squares on a board.
event-bubbling|事件冒泡|Event bubbling|部分事件从目标元素向祖先传播的过程。|Some events propagate from the target to its ancestors.|店员的消息逐级传给主管和经理。|A message moves upward through supervisors.
event-delegation|事件委托|Event delegation|让父层统一处理子元素相关事件。|A parent handles events associated with its children.|主管集中接收多个窗口的通知。|One supervisor handles notices from several counters.
route|路由|Route|把访问地址映射到页面或处理逻辑的规则。|Maps an address to a view or handler.|按门牌把访客带到相应房间。|An address directs visitors to a room.
dynamic-route|动态路由|Dynamic route|带可变部分以表示不同资源的路由。|A route with variable parts identifying resources.|同一楼层规则接待不同房号。|One rule covers different room numbers.
route-params|路由参数|Route parameters|从地址路径中提取的变量值。|Values extracted from variable URL path segments.|地址中的订单编号。|An order number inside the address path.
query-params|查询参数|Query parameters|URL问号后附带的命名参数。|Named values following a URL's question mark.|到商店后补充“只看红色、按价格排序”。|Additional instructions such as red items ordered by price.
url-hash|地址片段|URL hash / Fragment|URL井号后用于定位页面片段等内容的部分。|The fragment after a URL's hash sign.|书签直接指到同一本书的某节。|A bookmark points to a section in a book.
props|组件传入属性|Props|父组件传给子组件的输入数据。|Inputs passed from a parent component to a child.|给同一款相框放入不同照片。|Put different photos in the same frame design.
render|渲染／重渲染|Rendering / Re-rendering|根据数据产生或更新界面表示。|Producing or updating interface output from data.|根据最新菜单重新排版展示板。|Update a display board from the current menu.
csr|客户端渲染|CSR|主要由浏览器运行代码生成界面。|The browser generates the interface by running code.|送零件到家，在家组装。|Send parts for assembly at home.
ssr|服务端渲染|SSR|服务端生成页面HTML再交给浏览器。|A server generates HTML for the browser.|店里先组装好再送来。|Assemble in the shop before delivery.
ssg|静态生成|SSG|构建时预先生成页面文件。|Generates page files during the build.|提前印好宣传册备用。|Print brochures before visitors arrive.
hydration|水合|Hydration|客户端把交互逻辑接到已有HTML上的过程。|Client code attaches interaction to existing HTML.|房间已布置好，再接通开关。|Connect switches in an already furnished room.
hydration-mismatch|水合不匹配|Hydration mismatch|客户端预期结构与已有HTML不一致。|Client expectations differ from existing HTML.|开关图纸与实际线路对不上。|The switch plan does not match installed wiring.
sessionstorage|会话存储|SessionStorage|按来源和页面会话隔离的浏览器存储。|Browser storage scoped to an origin and page session.|临时柜随这次使用保留。|A temporary locker for this session.
indexeddb|浏览器数据库|IndexedDB|浏览器内保存较复杂结构化数据的数据库接口。|A browser API for structured local data storage.|浏览器里有可查询的小档案室。|A searchable archive inside the browser.
service-worker|服务工作线程|Service worker|可拦截请求等、独立于页面运行的浏览器脚本。|A browser script handling tasks such as request interception separately from a page.|门口值班员处理缓存和离线请求。|A gatekeeper helps with cached and offline requests.
same-origin|同源／跨域|Same origin / Cross-origin|按协议、主机和端口判断是否属于同一来源。|Origin equality depends on scheme, host, and port.|同一商场不同窗口也可能有不同访问规则。|Nearby counters may still have separate access rules.
cors|跨源资源共享|CORS|浏览器按服务端声明控制跨源读取的机制。|Browser enforcement of server-declared cross-origin access.|窗口声明哪些外部来访者可读取结果。|A counter declares which outsiders may read results.
`);
add('network',`
*api|应用程序接口|API|程序之间按约定调用能力和交换数据的接口。|An interface for programs to request capabilities and exchange data.|菜单规定能点什么和需要填哪些信息。|A menu defines available requests and required details.
*request|请求|Request|向服务发送的操作要求及相关数据。|An operation and data sent to a service.|递交一张点餐单。|Submit an order ticket.
*response|响应|Response|服务针对请求返回的结果。|The result returned for a request.|收到菜品或缺货说明。|Receive a dish or an out-of-stock response.
*http|超文本传输协议|HTTP|Web客户端和服务端交换消息的协议。|A protocol for exchanging web messages.|双方约定怎样写和递送订单。|An agreement for writing and delivering requests.
*https|安全HTTP|HTTPS|通过TLS加密保护传输的HTTP。|HTTP protected in transit by TLS.|用密封运输通道寄信，不保证信中内容真实。|Protected delivery does not prove a message is truthful.
*json|JSON数据格式|JSON|使用对象、数组等结构交换数据的文本格式。|A text format using objects, arrays, and values.|用统一格式填写电子订单。|An order written in an agreed structured format.
endpoint|接口端点|Endpoint|某项服务操作的具体访问入口。|A specific access point for a service operation.|退货业务对应的窗口。|The counter for returns.
base-url|基础地址|Base URL|一组接口共同使用的地址前缀。|A shared address prefix for a set of endpoints.|商场地址，后面再加具体柜台。|The mall address before the counter identifier.
header|请求／响应头|Header|附带在消息上的类型、认证等元信息。|Metadata such as content type or authentication in a message.|信封标注收件方式，不是信的正文。|Envelope instructions differ from the letter body.
body|请求／响应体|Body|消息携带的主要内容。|The main payload of a message.|信封中的信件正文。|The letter inside an envelope.
http-method|HTTP方法|GET / POST / PUT / PATCH / DELETE|表达读取、提交、替换、部分修改或删除等操作意图。|Methods expressing retrieval, submission, replacement, partial update, or deletion.|工单上选查询、新建、更换、修改或删除。|A work order identifies the intended operation.
status-code|状态码|HTTP status code|用数字表达请求处理结果类别。|A number indicating a request outcome category.|200像成功回执，404像未找到，500像内部处理故障。|Success, missing item, and internal failure use distinct codes.
rest|REST风格|REST|以资源等约束组织服务接口的架构风格。|An architectural style organizing services around resources and constraints.|按商品、订单等资源设办事入口。|Organize counters around products and orders.
graphql|GraphQL查询语言|GraphQL|让客户端描述需要哪些字段的接口查询体系。|An API query system where clients specify desired fields.|点套餐时写清只需要哪些部分。|Specify which parts of an order are needed.
rpc|远程过程调用|RPC|像调用函数一样请求远端执行操作。|Requests a remote operation in a function-call style.|打电话请另一个车间执行一道工序。|Ask another workshop to perform a procedure.
grpc|gRPC框架|gRPC|常使用Protobuf描述消息的RPC框架。|An RPC framework commonly using Protobuf message definitions.|两个车间按严格格式传递工单。|Workshops exchange tightly structured orders.
websocket|双向持续连接|WebSocket|建立可双向传消息的持续连接。|A persistent bidirectional messaging connection.|双方保持通话，可随时相互说话。|An open call where both sides can speak.
sse|服务端事件流|SSE|服务端通过HTTP持续向客户端发送事件。|Server-to-client event streaming over HTTP.|广播不断传来通知，回话走别的渠道。|An ongoing announcement channel, not two-way conversation.
webhook|事件回调通知|Webhook|事件发生后服务向约定地址发送通知。|A service sends an HTTP notification when an event occurs.|货到时商家主动打电话。|The shop calls when stock arrives.
polling|轮询|Polling|客户端定期询问是否有新结果。|A client periodically asks for updates.|隔一会问一次“餐好了吗”。|Ask repeatedly whether the meal is ready.
api-pagination|接口分页／游标|API pagination / Cursor|分批返回结果，游标标识继续读取的位置。|Returns results in batches with a cursor marking continuation.|书签记下上次读到的位置。|A bookmark tracks where to continue.
timeout|超时|Timeout|等待超过设定时间后停止或报告失败。|Stops waiting or reports failure after a time limit.|约定等十分钟，超时要另作处理。|A wait has a defined limit.
retry|重试|Retry|失败后再次尝试同一操作。|Attempts an operation again after failure.|电话没接通再拨，但下单需防重复。|Call again, but avoid duplicate orders.
backoff|退避|Backoff|重试前逐渐或按规则延长等待。|Delays retries according to a policy.|窗口忙时别不停敲门，隔一会再问。|Wait before trying a busy counter again.
idempotency|幂等性|Idempotency|重复相同请求对目标状态不产生额外重复影响。|Repeating an operation has no additional effect on the target state.|重复按“设为关灯”仍是关灯，不是切换开关。|Setting a light off twice differs from toggling it twice.
signature|请求签名|Request signature|用密钥等机制验证消息来源或完整性的信息。|Information used to verify message integrity or origin.|封条可帮助发现包裹是否被改动。|A seal can reveal tampering.
callback-url|回调地址|Callback URL|处理完成或事件发生后通知的目标地址。|The destination for a completion or event callback.|申请表上填写收回执的地址。|The address where a receipt should be delivered.
proxy|代理|Proxy|代表一方转发通信请求的中间服务。|An intermediary forwarding requests on behalf of a party.|代办员替顾客递交申请。|An intermediary submits a request for a customer.
reverse-proxy|反向代理|Reverse proxy|代表后端服务接收并转发外部请求的入口。|An entry service forwarding requests to backend services.|前台把访客分配给内部部门。|Reception directs visitors to internal departments.
tls|传输层安全|TLS|保护通信机密性和完整性的协议。|A protocol protecting transport confidentiality and integrity.|双方建立可核对身份的密封通道。|A protected channel with identity checks.
dns|域名系统|DNS|把域名等名称查询为网络记录的系统。|A system resolving domain names to network records.|电话簿把名字对应到号码。|A directory maps names to contact details.
tcp-udp|TCP／UDP|TCP / UDP|两种传输协议，可靠有序流与独立数据报的取舍不同。|Transport protocols with different stream and datagram guarantees.|挂号连续交付与独立投递的类比，具体保证依协议。|Compare ordered tracked delivery with individual datagrams.
`);
add('data',`
*database|数据库|Database|按规则保存、查找和更新数据的系统。|A system for storing, retrieving, and updating data.|能按条件查找的账房。|A ledger office supporting structured lookup.
*table|数据表|Table|按列和行组织同类记录的结构。|A structure organizing related records into rows and columns.|订单登记表。|An order ledger table.
*field|字段|Field / Column|记录中的某一项属性。|One attribute of a record.|登记表中的联系电话栏。|The phone column in a register.
*record|记录|Record / Row|描述一个对象的一组字段值。|A set of field values describing one item.|某一张订单对应一行。|One order occupies one record.
*primary-key|主键|Primary key|唯一识别表中记录的字段或组合。|Fields uniquely identifying a table record.|订单号不能指向两张不同订单。|An order ID identifies one order.
*crud|增删改查|CRUD|创建、读取、更新和删除数据四类操作。|Create, read, update, and delete operations.|新增、翻查、修改或划销账目。|Add, inspect, amend, or remove ledger entries.
foreign-key|外键|Foreign key|用约束把记录关联到另一表中的键。|A constrained reference to a key in another table.|订单中的顾客编号对应顾客登记表。|An order references a customer record.
relation|数据关联|Relationship|不同记录或实体之间的连接关系。|A connection between records or entities.|一位顾客可以有多张订单。|One customer can have several orders.
db-constraint|数据约束|Database constraint|数据库强制执行的数据有效性规则。|A validity rule enforced by the database.|账本要求订单号唯一、金额不能为空。|Order IDs must be unique and amounts present.
db-index|数据库索引|Database index|加速特定查询的数据结构。|A structure accelerating certain database queries.|通讯录的姓氏索引，维护它也有成本。|A name index speeds lookup but needs upkeep.
query|查询|Query|按条件读取或操作数据的指令。|An instruction to retrieve or operate on data.|找出本周已付款的订单。|Find this week's paid orders.
join|连接查询|Join|按条件组合不同表的记录。|Combines rows from tables using matching conditions.|把订单表与顾客表按顾客号对照。|Match orders with customers by ID.
transaction|事务|Transaction|把一组数据操作作为一个整体处理。|A group of data operations treated as a unit.|转账扣款和入账要协调完成。|Coordinate debit and credit in a transfer.
acid|事务性质|ACID|原子性、一致性、隔离性、持久性的事务性质。|Atomicity, consistency, isolation, and durability of transactions.|账房不仅要记完，还要符合规则、隔离并保存。|A ledger update must complete correctly and persist.
relational-db|关系型数据库|Relational database|按表及关系组织数据的数据库。|A database organizing data into tables and relations.|顾客表与订单表相互关联。|Customer and order tables are related.
nosql|非关系型数据库|NoSQL|多种非传统关系表模型数据库的统称。|A family of database models beyond traditional relational tables.|档案可按文档或键值组织，不只用表格。|Records can be documents or key-value entries.
document-db|文档数据库|Document database|主要以文档结构保存记录的数据库。|A database storing records primarily as documents.|每位顾客一份结构化档案。|A structured dossier for each customer.
key-value|键值存储|Key-value store|按一个键保存和取回对应值的存储方式。|Stores and retrieves values by keys.|凭柜号取出对应包裹。|Retrieve a parcel by locker number.
schema|数据结构定义|Schema|规定数据组织方式与字段规则的描述。|A definition of data structure and field rules.|空白登记表规定有哪些栏目。|A blank register defines its columns.
orm|对象关系映射|ORM|把程序对象操作映射到关系数据库操作的工具。|Maps application objects to relational database operations.|翻译员把工作用语转成账房查询语言。|A translator converts application requests into database operations.
migration|数据库迁移|Database migration|可追踪地改变数据库结构或数据的过程。|A tracked change to database structure or data.|账本增加栏目，旧记录也要妥善处理。|Add a ledger column while handling existing records.
seed|种子数据|Seed data|为初始化或测试准备的起始数据。|Initial data used for setup or testing.|练习账本先填几笔样例。|Populate a practice ledger with sample entries.
connection-string|连接字符串|Connection string|说明数据库地址、身份等连接信息的配置。|Configuration specifying database connection details.|去哪个账房、用哪个身份进入。|Which ledger office to visit and how to authenticate.
connection-pool|连接池|Connection pool|复用一组数据库连接以减少重复建立的开销。|Reuses database connections to reduce setup overhead.|保留几个办事窗口供轮流使用。|Reuse a set of service counters.
sqlite|SQLite数据库|SQLite|常以内嵌方式运行、使用文件存储的SQL数据库。|An embedded SQL database commonly stored in a file.|应用自己的小账本。|A ledger embedded in the application.
postgresql|PostgreSQL数据库|PostgreSQL|开源关系型数据库管理系统。|An open-source relational database system.|可服务多个程序的独立账房。|A database office serving multiple applications.
mysql|MySQL数据库|MySQL|常用的关系型数据库管理系统。|A widely used relational database system.|另一套表格式账房系统。|Another tabular ledger system.
redis|Redis数据存储|Redis|常用于缓存等场景的内存数据存储系统。|An in-memory data store often used for caching.|把常查资料放在手边，持久化要看配置。|Keep frequent records nearby; persistence depends on configuration.
mongodb|MongoDB数据库|MongoDB|以文档数据模型为主的数据库系统。|A database using a document-oriented model.|按档案袋保存不同结构的资料。|Store records as structured dossiers.
object-storage|对象存储|Object storage|以对象及标识保存文件内容的服务。|Stores data as identified objects with metadata.|仓库凭包裹编号存取文件。|Retrieve stored parcels by object identifiers.
file-storage|文件存储|File storage|按文件与目录方式管理内容。|Stores content as files and directories.|按文件夹排列档案。|Organize records in folders.
bucket|存储桶|Bucket|对象存储中用于组织对象的容器。|A container organizing objects in object storage.|不同用途的仓库分区。|A warehouse section for a set of objects.
backup|备份|Backup|为后续恢复保留的数据副本。|A data copy retained for recovery.|另存账本副本，还要确认能读回。|Keep a spare ledger and check it can be read.
restore|恢复|Restore|从备份等来源重建数据或状态。|Reconstructs data or state from a saved source.|原账本损坏后用副本恢复记录。|Recover records from a spare ledger.
retention|数据保留|Data retention|规定数据保存多久以及何时清理。|Rules for how long data is kept and when it is removed.|收据按期限归档，到期按规则处理。|Archive receipts for a defined period.
soft-delete|软删除|Soft delete|标记为已删除而暂不物理移除记录。|Marks records deleted without immediately removing them physically.|档案移入待销毁区，不再正常展示。|Move records out of active use without destroying them yet.
`);
add('architecture',`
*service|服务|Service|对外或对内部其他程序提供一组能力的软件。|Software providing capabilities to users or other programs.|餐厅的配送部门提供送餐能力。|A delivery department provides a service.
*business-logic|业务逻辑|Business logic|实现业务规则与处理流程的代码。|Code implementing business rules and processes.|厨房按会员优惠和库存决定如何接单。|Order handling follows pricing and stock rules.
validation|数据校验|Validation|检查输入是否符合格式和业务要求。|Checks data against format and business requirements.|核对订单有没有地址、数量是否合理。|Check an order has an address and valid quantity.
middleware|中间件|Middleware|在请求等处理流程中插入的通用处理层。|Reusable processing inserted into a request or execution pipeline.|订单到厨房前先统一查身份和记时间。|Check identity and record time before preparing an order.
*cache|缓存|Cache|保存可复用副本以减少重复处理。|Stores reusable copies to reduce repeated work.|把常用菜单放手边，但要留意更新。|Keep a menu nearby while checking for updates.
controller|控制器|Controller|接收请求并协调对应处理的代码层。|Receives requests and coordinates handling.|接单员把任务转给适合的岗位。|A dispatcher routes work to the right role.
service-layer|服务层|Service layer|组织应用业务操作的代码层。|A layer organizing application business operations.|负责安排整份订单怎样完成的主管。|A supervisor coordinates an entire order.
data-access|数据访问层|Data access layer|封装数据库等存取操作的代码。|Code encapsulating access to stored data.|专门负责查账和记账的岗位。|A role dedicated to ledger access.
monolith|单体架构|Monolith|多个功能主要作为一个应用部署的结构。|An architecture deployed mainly as one application.|同一家店内完成多种业务。|Several functions operate inside one shop.
frontend-backend-separation|前后端分离|Frontend-backend separation|把界面与服务处理分为相对独立部分。|Separates interface and service processing concerns.|点餐柜台和厨房通过订单约定协作。|Counter and kitchen coordinate through order contracts.
microservices|微服务|Microservices|把系统拆为可独立部署的服务。|An architecture of independently deployable services.|多家专业店协作，也增加沟通成本。|Specialized shops collaborate with coordination overhead.
serverless|无服务器|Serverless|由平台管理基础运行资源的执行方式。|Execution where a provider manages underlying server resources.|租用厨房时不必自己维护炉具，厨房仍然存在。|A managed kitchen still exists even if maintenance is outsourced.
baas|后端即服务|BaaS|提供数据库、认证等现成后端能力的服务。|Managed backend capabilities such as storage and authentication.|租用现成收银和账房设施。|Rent ready-made checkout and ledger facilities.
job-queue|任务队列|Job queue|把待执行工作排队交给后台处理。|Queues jobs for background execution.|订单排队等待厨师接单。|Orders wait in a preparation queue.
message-queue|消息队列|Message queue|暂存并传递系统之间消息的机制。|Buffers and passes messages between system components.|各部门把通知放到收件队列。|Departments exchange queued notices.
cron|定时任务|Cron / Scheduled job|按时间规则自动触发的任务。|A task triggered by a schedule.|每天打烊后盘点。|Count stock at closing each day.
background-job|后台任务|Background job|无需用户一直等待界面的处理工作。|Work performed without holding the user in a foreground flow.|留单后由后台慢慢整理报表。|Prepare a report after the request is submitted.
event-driven|事件驱动|Event-driven architecture|由事件触发相应处理的组织方式。|Organizes behavior around events and reactions.|订单付款触发备餐通知。|Payment triggers preparation.
pubsub|发布订阅|Publish / Subscribe|发送者发布消息，订阅者按兴趣接收。|Publishers emit messages to interested subscribers.|公告栏通知所有订阅该主题的部门。|Topic subscribers receive announcements.
state-machine|状态机|State machine|规定允许的状态及转换条件的模型。|Defines states and allowed transitions.|订单从未付款到已付款，再到已完成。|An order moves from unpaid to paid to completed.
stateful-stateless|有状态／无状态|Stateful / Stateless|是否依赖服务保存前次交互状态的区别。|Whether processing relies on retained interaction state.|窗口记住上次谈话，或每次带齐材料。|A counter remembers prior visits or requires full context each time.
multitenancy|多租户|Multi-tenancy|一套系统服务多个相互隔离的客户群。|One system serves multiple logically isolated customer groups.|公寓共享建筑，但住户房间要隔离。|Tenants share a building with separate private rooms.
concurrency|并发|Concurrency|多个任务在重叠时间段内推进。|Multiple tasks progress during overlapping periods.|厨师交替照看多口锅。|A chef manages several pots.
load-balancing|负载均衡|Load balancing|把请求分配给多个处理实例。|Distributes requests among multiple service instances.|接待员把顾客分到多个窗口。|Reception distributes visitors among counters.
circuit-breaker|熔断|Circuit breaker|连续故障时暂时停止调用以防扩大影响。|Temporarily stops calls after failures to contain impact.|电闸在异常时断开，不是永久修好了线路。|A breaker interrupts faults without repairing the wiring.
eventual-consistency|最终一致性|Eventual consistency|不同副本允许暂时不同，之后收敛一致。|Replicas may differ temporarily before converging.|各门店账本稍后汇总一致。|Branch ledgers reconcile after a delay.
race-condition|竞态条件|Race condition|结果依赖并发操作的时间先后。|An outcome depends on the timing of concurrent actions.|两人同时抢最后一张票。|Two people attempt to buy the last ticket.
deadlock|死锁|Deadlock|多个任务相互等待资源而无法继续。|Tasks wait on each other's resources and cannot proceed.|两人各拿一把钥匙，都等对方先交出。|Each person waits for a key held by the other.
`);
add('security',`
*authentication|身份验证|Authentication|确认访问者使用哪个身份。|Establishes an identity for access.|门卫查身份证。|A guard checks identity.
*authorization|授权／权限|Authorization|决定某身份可以进行哪些操作。|Determines what an identity may do.|身份确认后仍要看门卡能开哪些门。|Verified identity still needs permission for each door.
*api-key|接口密钥|API key|服务签发、用于识别或授权接口调用的凭证。|A credential used to identify or authorize API calls.|像带额度与权限的门卡，不应公开张贴。|An access card with scope and limits must not be public.
secret|机密配置|Secret|需要限制访问的密码、密钥等配置值。|Sensitive configuration such as passwords or keys.|保险柜密码不写在柜门上。|Do not write a safe's code on its door.
login-session|登录会话|Login session|系统维持用户登录状态的一段交互状态。|State maintaining a user's signed-in interaction.|进场后佩戴临时通行手环。|A temporary wristband after entry.
access-token|访问令牌|Access token|证明当前调用获得特定访问权限的凭证。|A credential granting a scope of access.|有效期内可入场的票。|A ticket granting access for a limited period.
refresh-token|刷新令牌|Refresh token|用于申请新访问令牌的凭证。|A credential used to obtain new access tokens.|续领临时门票的证明，要妥善保管。|A credential for renewing temporary passes.
bearer-token|持有者令牌|Bearer token|持有即可按其权限使用的令牌。|A token usable by whoever possesses it.|不记名门票被拿走就可能被使用。|A transferable ticket can be used by its holder.
jwt|JSON网络令牌|JWT|用紧凑格式表达声明的令牌，可签名或加密。|A compact claims format that can be signed or encrypted.|带防伪信息的凭条，签名不等于内容保密。|A signed receipt is not necessarily secret.
oauth|OAuth授权框架|OAuth|允许应用获得受限访问授权的框架。|A framework for delegated, limited access.|允许代办员取某份资料，而非交出全部密码。|Authorize a specific errand without sharing the main password.
openid-connect|身份层协议|OpenID Connect|在OAuth之上提供身份认证信息的协议。|An identity layer built on OAuth.|除了准许办事，还提供经过验证的身份信息。|Provide verified identity as well as delegated access.
sso|单点登录|SSO|一次认证后访问多个关联系统的机制。|One sign-in enables access to related systems.|一次验票后进入多个授权展厅。|One identity check for related permitted halls.
mfa|多因素认证|MFA|使用不同类别的证明验证身份。|Verifies identity using different factor categories.|同时检查钥匙和本人指纹。|Check both a key and a fingerprint.
verification-code|验证码|Verification code / CAPTCHA|用于验证控制权或区分自动访问等的校验信息。|A challenge or code for verification, with purpose depending on type.|短信码像临时口令，人机验证是另一类检查。|A temporary code differs from a human-detection challenge.
rbac|基于角色的权限|RBAC|按角色分配权限的管理方式。|Assigns permissions through roles.|收银员与店长能做的事不同。|Cashiers and managers have different permissions.
least-privilege|最小权限|Least privilege|只授予完成任务必需的权限。|Grant only the access needed for a task.|送货员拿收货区钥匙，不拿全楼钥匙。|A courier needs the receiving-area key, not the master key.
key-rotation|密钥轮换|Key rotation|替换旧密钥并使其按计划失效。|Replaces credentials and retires old ones.|换锁后确认旧钥匙不能再开门。|After changing a lock, old keys must stop working.
encryption|加密|Encryption|用密钥等机制把内容转换为受保护形式。|Transforms data into a protected form using cryptographic mechanisms.|锁住的箱子需要合适钥匙打开。|A locked box requires the correct key.
hash|哈希|Hash|把输入映射为固定规则摘要的运算。|Maps input to a digest using a defined algorithm.|像内容指纹，不是可逆的加密包装。|A content fingerprint is not reversible packaging.
salt|加盐|Salt|给密码哈希等过程加入独立随机值。|Adds a distinct random value to processes such as password hashing.|同样原料加不同标记，避免摘要都一样。|Distinct markers prevent identical stored digests for equal passwords.
password-hash|密码哈希|Password hashing|用专用慢速算法等保存密码验证信息。|Stores password-verification data using suitable hashing algorithms.|留验钥匙的依据，而不是把原钥匙公开保存。|Keep verification evidence rather than exposed passwords.
sql-injection|SQL注入|SQL injection|恶意输入被错误当作数据库指令执行。|Untrusted input is wrongly treated as SQL instructions.|订单备注竟能指挥账房删账。|An order note is wrongly allowed to command the ledger.
xss|跨站脚本|XSS|不可信内容被当作网页脚本执行。|Untrusted content executes as script in a web page.|公告栏便条竟能控制店内设备。|A notice-board message gains control of equipment.
csrf|跨站请求伪造|CSRF|诱导浏览器以已登录身份发送非本意请求。|Tricks a signed-in browser into sending an unwanted request.|别人借自动盖章流程递进伪造申请。|An unwanted form exploits an automatic authorization step.
ssrf|服务端请求伪造|SSRF|诱导服务端访问不应访问的地址。|Tricks a server into requesting unintended destinations.|让代办员拿内部通行证去不该去的地方。|An errand misuses a worker's internal access.
path-traversal|路径穿越|Path traversal|利用路径输入访问预期目录之外的文件。|Uses path input to access files outside the intended directory.|本应只拿柜内文件，却绕到隔壁档案室。|A request escapes its assigned cabinet.
command-injection|命令注入|Command injection|把不可信输入误当系统命令执行。|Untrusted input becomes an operating-system command.|备注栏被当成主管指令。|A note is mistaken for an authorized command.
prompt-injection|提示词注入|Prompt injection|外部内容试图干扰AI的原定任务或指令。|External content attempts to redirect an AI's task or instructions.|阅读信件时，信中冒充老板要求泄露资料。|A letter impersonates a manager to request disclosure.
sensitive-data|敏感信息|Sensitive data|泄露或误用可能造成损害的信息。|Information whose disclosure or misuse can cause harm.|客户资料与钥匙清单不能随意张贴。|Customer records and key lists are not public notices.
pii|个人可识别信息|PII|能识别或关联到个人的信息。|Information that identifies or can be linked to a person.|姓名与联系方式组成顾客档案。|Names and contact details can identify a customer.
redaction|脱敏|Redaction / Masking|隐藏或转换不应暴露的敏感部分。|Removes or masks sensitive portions before sharing.|展示账单前遮住卡号。|Cover account numbers before sharing a bill.
vulnerability|依赖漏洞|Dependency vulnerability|所用软件包中可能被利用的安全缺陷。|An exploitable weakness in a dependency.|采购零件有缺陷会影响整台机器。|A defective part can compromise the whole machine.
security-audit|安全审计|Security audit|系统检查安全控制、风险与证据。|A systematic review of security controls, risks, and evidence.|检查门锁、通行记录和应急措施。|Inspect locks, access records, and recovery procedures.
`);
add('git',`
*git|Git版本控制|Git|跟踪文件版本与变更历史的工具。|A tool tracking file versions and change history.|保存每次修订的图纸，不自动备份线上账本。|Version drawings, not automatically live database records.
*github|GitHub平台|GitHub|提供Git仓库托管和协作功能的平台。|A platform for Git hosting and collaboration.|存放版本档案的协作场所，不是Git本身。|A shared archive hosting system, not Git itself.
*repository|仓库|Repository|保存项目文件及版本记录的集合。|A collection of project files and version history.|装着图纸和修订记录的档案盒。|A file box containing drawings and revisions.
*commit|提交|Commit|一次可追踪的版本变化记录。|A traceable record of versioned changes.|给一版图纸编号并写修改说明。|Number a revision and explain its changes.
*branch|分支|Branch|指向一条开发历史位置的可移动引用。|A movable reference marking a line of development.|不同方案沿各自的修订路线推进。|Alternative plans develop along different revision lines.
*push|推送|Push|把本地提交等引用更新发送到远端。|Sends local reference updates and commits to a remote.|把本地图纸版本送入共享档案室。|Send local revisions to the shared archive.
*pull|拉取并整合|Pull|获取远端更新并整合到当前分支。|Fetches remote changes and integrates them into the current branch.|拿回新图纸并与当前工作合并。|Retrieve new plans and integrate them with current work.
local-repo|本地仓库|Local repository|当前机器上的Git仓库。|A Git repository on the current machine.|自己桌上的版本档案。|The version archive on the local desk.
remote-repo|远端仓库|Remote repository|通过远端地址访问的Git仓库。|A Git repository accessed through a remote address.|共享档案室里的版本档案。|The shared archive's copy of history.
clone|克隆|Clone|建立现有仓库的本地副本。|Creates a local copy of an existing repository.|复制一套可继续工作的版本档案。|Make a working copy of a version archive.
working-tree|工作树|Working tree|当前检出的、可编辑的项目文件。|The checked-out project files available for editing.|正摊在桌上修改的图纸。|The drawings currently being edited.
stage|暂存区／暂存|Staging area / Stage|挑选准备进入下一次提交的变更。|Selects changes for the next commit.|把要归档的页先放进待提交托盘。|Select pages in a tray before filing a revision.
diff|差异|Diff|两个版本之间的变化对照。|A comparison showing changes between versions.|红笔标出新旧图纸差别。|Mark differences between drawing revisions.
head|当前位置引用|HEAD|通常指向当前分支或检出提交的引用。|A reference to the current branch or checked-out commit.|书签标明当前正在看的版本。|A bookmark marks the current revision.
main-branch|主分支|Main branch|项目约定的主要整合分支。|The branch designated for primary integration.|经过整合的主图纸路线。|The main integrated drawing history.
upstream|上游分支|Upstream branch|本地分支跟踪的对应远端分支。|The remote branch tracked by a local branch.|约定向哪个档案柜同步。|The archive shelf designated for synchronization.
fetch|获取远端更新|Fetch|下载远端记录但不自动整合当前工作。|Downloads remote history without integrating current work automatically.|拿到新版图纸先放旁边，不马上改桌上那份。|Retrieve revisions without merging the working plan yet.
merge|合并|Merge|把不同开发历史的改动整合起来。|Integrates changes from different lines of history.|把两个部门的修订汇入同一份图纸。|Combine revisions from two teams.
merge-conflict|合并冲突|Merge conflict|工具无法自动判断如何整合的差异。|Changes that cannot be integrated automatically.|两人把同一门的位置改到不同地方。|Two revisions move the same door differently.
pull-request|合并请求|Pull request / Merge request|提议审查并合入一组代码改动的协作记录。|A proposal to review and integrate changes.|先递交修订申请，审核后再纳入主图纸。|Submit revisions for review before integration.
code-review|代码审查|Code review|检查代码变更的正确性、风险与可维护性。|Reviews changes for correctness, risk, and maintainability.|另一位工程师复核施工图。|Another engineer reviews the plan.
rebase|变基|Rebase|把一组提交重新应用到另一基点。|Reapplies commits on a different base.|按新底稿重放修改步骤，会改变提交身份。|Replay edits on a new base, changing commit identities.
cherry-pick|挑选提交|Cherry-pick|把指定提交的改动应用到当前分支。|Applies selected commit changes to the current branch.|只采用另一方案中的一项修改。|Adopt one revision from another plan.
stash|暂存工作改动|Stash|临时保存工作树改动以便稍后恢复。|Temporarily shelves working changes for later restoration.|把桌面未完成工作收进临时抽屉。|Temporarily shelve unfinished work.
reset|重置|Reset|按模式移动引用并可能改变暂存区或工作树。|Moves references and may alter index or working files depending on mode.|重置可能丢弃未留底修改，先核对作用范围。|Resetting can discard unsaved edits; check its scope.
revert|反向提交|Revert|创建新提交抵消指定提交的改动。|Creates a new commit reversing earlier changes.|新增一张更正单而非撕掉历史。|Add a correction instead of removing history.
tag|标签|Tag|给特定历史位置一个便于引用的名称。|A named reference to a point in history.|给某版图纸贴“交付版”标签。|Label a revision as a delivery version.
detached-head|分离头指针|Detached HEAD|当前检出某提交而未位于普通分支上的状态。|HEAD points directly to a commit rather than a branch.|翻看旧图纸时，新修改需另留分支防丢。|New work on an old revision needs a branch for safekeeping.
worktree|独立工作树|Git worktree|同一仓库可检出不同版本的额外工作目录。|An additional checkout linked to the same repository.|同一档案历史配多个独立工作台。|Several workbenches share one archive history.
gitignore|忽略规则|.gitignore|指定哪些未跟踪文件通常不纳入Git。|Patterns excluding untracked files from normal Git tracking.|规定草稿哪些不入档，不会抹掉已归档的秘密。|An exclusion rule does not erase already archived secrets.
git-lfs|大文件存储|Git LFS|用指针与外部存储管理大型文件的扩展。|An extension storing large files through pointers and separate storage.|档案夹留取货单，大物件放专门仓库。|Keep a receipt in the folder and the large item elsewhere.
protected-branch|受保护分支|Protected branch|按平台规则限制推送或合并的分支。|A branch with platform-enforced update restrictions.|主档案柜需审批才能修改。|The main archive requires approval for changes.
`);
add('testing',`
*bug|程序缺陷|Bug|导致行为不符合预期的程序问题。|A defect causing behavior to differ from expectations.|按电灯开关却启动风扇。|A light switch unexpectedly starts a fan.
*error|报错|Error message|程序对失败或异常的说明。|A message reporting a failure or exception.|报警灯提示异常，但还需找真正原因。|A warning light is evidence, not the full diagnosis.
*log|日志|Log|程序运行时记录的事件信息。|Recorded events from program execution.|值班记录写下时间与发生的事。|A shift log records events and times.
*debug|调试|Debugging|观察程序并定位和修正问题的过程。|Investigating and correcting program behavior.|沿线路查哪一段断电。|Trace wiring to locate a fault.
*test-case|测试用例|Test case|包含准备、动作和预期结果的一项检查。|A check specifying setup, actions, and expected results.|打开水龙头，看是否出水及是否漏水。|Open a tap and check flow and leakage.
*manual-test|手动测试|Manual testing|由人实际操作并检查结果。|A person operates the product and checks results.|亲手试开每一扇门。|Personally open and check each door.
*regression|回归测试|Regression testing|修改后检查已有能力是否被破坏。|Checks whether changes broke existing behavior.|修完厨房灯，再看其他灯是否仍正常。|After fixing one light, check the others.
unit-test|单元测试|Unit test|检查较小、相对独立的代码单元。|Tests a small, relatively isolated unit of code.|单独测试一个开关。|Test one switch separately.
integration-test|集成测试|Integration test|检查多个部分连接后的行为。|Tests interactions between combined parts.|检查开关与电灯接起来是否正常。|Test the switch connected to the light.
e2e|端到端测试|E2E test|从用户入口到结果检查一条完整流程。|Tests a complete flow from entry to outcome.|从下单到收到货走完一次。|Complete ordering through delivery.
smoke-test|冒烟测试|Smoke test|快速检查主要功能是否基本可运行。|A quick check of essential functionality.|开店先看电、水和收银能否启动。|Check utilities and checkout before opening.
uat|用户验收测试|UAT|由业务或实际使用者按目标确认能否接受。|Users or business owners assess acceptance against goals.|房主按约定验收装修。|The owner checks the renovation against agreed requirements.
exploratory-test|探索性测试|Exploratory testing|边了解产品边设计操作寻找问题。|Learns and tests the product while exploring it.|试走不同通道发现不便之处。|Explore routes to discover problems.
boundary-test|边界测试|Boundary testing|检查最小、最大及临界附近输入。|Tests limits and values near them.|试空购物车、最大件数和超一件。|Test empty, maximum, and over-limit quantities.
failure-path|异常路径|Failure path|请求失败或条件不满足时的处理过程。|Behavior when operations fail or conditions are unmet.|缺货、断网或付款失败后如何继续。|What happens after unavailable stock or failed payment.
compatibility-test|兼容性测试|Compatibility testing|检查不同浏览器、系统或设备上的行为。|Checks behavior across platforms, browsers, or devices.|同把钥匙需在约定的几种锁上试。|Test against all supported lock types.
accessibility-test|无障碍测试|Accessibility testing|检查键盘、辅助技术等使用方式。|Tests keyboard and assistive-technology access.|除了台阶，还要实际走一遍坡道。|Actually test the ramp as well as the stairs.
performance-test|性能测试|Performance testing|测量速度、资源消耗等表现。|Measures speed and resource use.|记录做一份订单需要多久。|Measure time and resources per order.
load-test|负载测试|Load testing|在指定访问量下检查系统表现。|Tests behavior under a defined load.|让多位顾客同时排队试服务能力。|Test with many customers at once.
mock|模拟对象|Mock|用可控制替身模拟依赖并检查交互。|A controlled dependency substitute used to verify interactions.|用假收银系统检查付款请求，不是真扣款。|A fake checkout checks requests without charging money.
stub|桩|Stub|为测试返回预先设定结果的替身。|A test substitute returning predetermined results.|练习窗口每次都返回同一张样例回执。|A practice counter returns a fixed sample receipt.
fixture|测试夹具|Fixture|测试使用的已知数据和准备状态。|Known test data and setup state.|每次练习前摆好同样的道具。|Set up the same props before each trial.
coverage|测试覆盖率|Test coverage|衡量哪些代码或要求被测试涉及的指标。|A measure of code or requirements exercised by tests.|巡查经过多少房间，不代表每个角落都查对。|Visiting rooms does not prove every corner was checked well.
assertion|断言|Assertion|明确要求某条件成立的检查。|An explicit check that a condition holds.|验收单要求“点击后订单数加一”。|Assert that one order is added after a click.
snapshot-test|快照测试|Snapshot testing|把当前输出与保存的参考输出比较。|Compares output with a saved reference.|对比装修前后照片，但参考照片也可能错。|Compare reference photos, which can themselves be wrong.
test-double|测试替身|Test double|测试时替代真实依赖的统称。|A substitute for a real dependency during testing.|消防演习使用道具而非真火。|Use props instead of a real fire in a drill.
flaky-test|不稳定测试|Flaky test|相同代码条件下时过时不过的测试。|A test that passes or fails inconsistently.|同一检查偶尔受时机影响而误报。|A timing-sensitive inspection gives inconsistent results.
reproduction|复现步骤|Reproduction steps|让别人再次看到问题的操作顺序。|Steps enabling someone else to reproduce a problem.|先开哪个开关、再按哪个按钮。|State which switch and button to use in order.
minimal-repro|最小复现|Minimal reproduction|保留触发问题所需最少条件的示例。|The smallest example retaining the failure conditions.|拆掉无关装饰，留下导致故障的电路。|Remove decoration but keep the faulty circuit.
expected-actual|预期／实际结果|Expected / Actual result|应该发生与实际观察到的结果对照。|The intended outcome compared with the observed one.|应到账十元，实际显示零元。|Ten units expected, zero observed.
root-cause|根因|Root cause|导致问题的基础原因而非表面现象。|The underlying cause rather than a symptom.|灯不亮可能是线路断了，不只是灯泡坏。|A dark lamp may be caused by wiring.
debug-breakpoint|调试断点|Debugger breakpoint|让程序在指定位置暂停以查看状态。|Pauses execution at a selected point for inspection.|让流水线停在某工位检查零件。|Pause an assembly line at a station.
tdd|测试驱动开发|TDD|先用失败测试描述要求，再实现并整理代码。|Write a failing test, implement behavior, then refactor.|先明确验收尺子，再按尺子制作。|Define the measuring rule before building.
`);
add('release',`
*build|构建|Build|把源文件处理成可运行或发布的产物。|Processes source files into runnable or distributable artifacts.|把材料加工成成品，还需实际验收。|Manufacture a product, then still inspect it.
*deploy|部署|Deploy|把程序和配置放到目标运行环境。|Places software and configuration in a target environment.|把设备装到营业地点。|Install equipment at the operating site.
*go-live|上线|Go live|让目标使用者通过正式入口使用版本。|Makes a version available through its intended live entry.|店铺正式对顾客营业。|Open the shop to customers.
*installer|安装包|Installer|用于把应用安装到目标设备的文件。|A package used to install software on a device.|带零件和安装流程的交付套装。|A delivery kit with installation steps.
*production|生产环境|Production environment|承载真实用户和业务的运行环境。|The environment serving real users and business operations.|正在营业的餐厅。|The operating restaurant.
local-preview|本地运行／预览|Local run / Preview|在本机查看与操作项目。|Runs or previews a project on the local machine.|在自家厨房试做，不代表外面能点单。|A home trial is not a public service.
dev-environment|开发环境|Development environment|供修改与调试程序的环境。|An environment for changing and debugging software.|研发厨房。|A development kitchen.
test-environment|测试环境|Test environment|供执行检查的独立或指定环境。|An environment designated for testing.|用练习订单测试的柜台。|A counter using test orders.
staging|预发布环境|Staging|正式发布前尽量接近生产的验证环境。|A production-like environment for pre-release checks.|正式演出前的彩排场地。|A rehearsal venue before the show.
preview-deployment|预览部署|Preview deployment|用于审阅某次改动的可访问部署。|A deployment for reviewing a particular change.|给审核者看的样板间。|A showroom for reviewers.
release|版本发布|Release|把一组确认变更组织为可分发版本。|Packages approved changes as a distributable version.|给成品批次编号并附说明。|Label a product batch with release notes.
artifact|构建产物|Artifact|构建生成的文件或软件包。|Files or packages produced by a build.|出厂的实际成品。|The actual manufactured output.
app-version|应用版本号|Application version|标识应用某次版本的编号。|An identifier for a particular application release.|商品批号帮助定位是哪批。|A batch number identifies the release.
ci|持续集成|CI|频繁整合代码并自动执行构建检查的做法。|Frequently integrates changes with automated checks.|每批零件入线前都检查。|Check each batch as it joins the line.
cd|持续交付／部署|CD|自动准备可发布版本，或进一步自动部署的流程。|Automates release readiness, and sometimes deployment itself.|备好可发货成品与自动发货不是同一步。|Preparing shipments differs from automatically shipping them.
pipeline|流水线|Pipeline|按依赖顺序执行自动任务的流程。|Automated tasks executed according to dependencies.|加工、质检、包装依次进行。|Process, inspect, and package in order.
env-config|环境配置|Environment configuration|每个运行环境使用的参数和服务设置。|Settings and service references for an environment.|不同门店填写各自地址和库存库。|Each branch configures its own address and stock store.
build-command|构建命令|Build command|触发项目构建过程的命令。|A command starting the build process.|启动加工机器。|Start manufacturing.
start-command|启动命令|Start command|启动应用进程的命令。|A command starting an application process.|打开店铺设备开始工作。|Switch on operating equipment.
health-check|健康检查|Health check|检查服务是否达到可用条件的探测。|A probe checking service availability conditions.|开门前确认水电正常。|Check utilities before opening.
rollback|回滚|Rollback|恢复软件或配置到较早版本。|Restores earlier software or configuration.|换回旧设备不自动恢复被修改的账本。|Restoring old equipment does not restore changed records.
staged-rollout|灰度发布|Staged rollout|先对部分用户启用新版本再扩大范围。|Releases to a subset before wider exposure.|先在一家门店试新菜单。|Try a menu in one branch first.
canary|金丝雀发布|Canary release|用少量真实流量观察新版本风险。|Exposes limited real traffic to a new version for observation.|先让少量订单走新流程。|Route a small set of orders through the new process.
blue-green|蓝绿部署|Blue-green deployment|准备两套环境并切换流量到新版本。|Switches traffic between two prepared environments.|新柜台备好后把顾客入口切过去。|Move visitors to a prepared replacement counter.
feature-flag|功能开关|Feature flag|通过配置控制功能是否生效。|Configuration controlling whether a feature is enabled.|新服务牌先装好，再决定何时开放。|Install a service, then control when it opens.
migration-order|迁移顺序|Migration order|协调数据库变化与应用版本的先后次序。|Coordinates database changes with application versions.|换账本格式前先确认读账人员能兼容。|Readers must understand a ledger format before switching.
code-signing|代码签名|Code signing|为软件附加可验证发布者与完整性的信息。|Adds verifiable publisher and integrity information to software.|封条帮助核对来源，不保证产品没有缺陷。|A seal verifies origin, not absence of defects.
notarization|软件公证|Notarization|平台对提交软件进行检查并出具相应凭据的流程。|A platform review process issuing software distribution credentials.|通过平台入场检查仍不等于全面质量保证。|Passing entry checks is not a full quality guarantee.
app-review|应用审核|App review|平台按其规则检查待分发应用。|A platform checks an app against distribution rules.|商场审核新店是否符合入驻规定。|A mall reviews a shop against entry rules.
`);
add('cloud',`
*server|服务器|Server|为其他程序处理请求的程序或设备。|A program or machine serving requests from clients.|提供办事服务的柜台与设施。|A counter and facilities serving requests.
*cloud|云服务|Cloud service|通过网络提供计算、存储等资源的服务。|Network-provided computing, storage, and related resources.|租用外部仓库和工作间。|Rent external storage and work facilities.
*hosting|托管|Hosting|由服务商存放或运行应用的服务。|A provider stores or runs an application.|把店铺设施交给场地方运营管理。|A provider houses or operates the facilities.
*docker|Docker|Docker|构建、分发和运行容器的工具体系。|Tools for building, distributing, and running containers.|制作并运送标准化工作箱的工具。|Tools for packaging standardized work environments.
*container|容器|Container|以隔离进程等机制运行应用的环境。|An application environment using process isolation mechanisms.|同楼内分开的工作间，共享部分底层设施。|Separated rooms share some building infrastructure.
vm|虚拟机|Virtual machine|模拟独立计算机环境的软件实例。|A software instance representing a separate machine environment.|在大楼内划出更完整的独立楼宇环境。|A more complete isolated machine environment.
vps|虚拟专用服务器|VPS|提供给客户使用的虚拟服务器实例。|A virtual server instance allocated to a customer.|租用一间独立管理的虚拟工作室。|Rent an independently managed virtual workshop.
image|容器镜像|Container image|用于创建容器的文件系统与配置模板。|A filesystem and configuration template for containers.|标准工作箱的制作底版。|A template for a packaged workspace.
dockerfile|镜像构建说明|Dockerfile|描述怎样构建容器镜像的文件。|Instructions for building a container image.|工作箱的装配清单。|Assembly instructions for the workspace package.
compose|容器组合配置|Docker Compose|描述并运行多个容器服务的工具与配置方式。|Defines and runs multi-container services.|把厨房、仓库和前台一起编排。|Coordinate kitchen, storage, and reception.
registry|镜像仓库|Container registry|保存和分发容器镜像的服务。|A service storing and distributing container images.|存放标准工作箱模板的仓库。|A warehouse for workspace templates.
volume|数据卷|Volume|让容器数据独立于容器生命周期保存的存储。|Storage persisting independently of a container's lifetime.|搬走工作间仍保留档案柜。|Keep the archive when the workroom is replaced.
port-mapping|端口映射|Port mapping|把一个网络入口转接到另一个端口。|Forwards one network port to another endpoint.|外部窗口对应内部服务台。|An outside counter connects to an internal desk.
container-network|容器网络|Container network|容器之间及对外通信的网络配置。|Networking among containers and external systems.|规定各工作间之间有哪些通道。|Define corridors between workrooms.
ssh|安全远程连接|SSH|用于加密远程登录和命令等操作的协议。|A protocol for encrypted remote login and operations.|通过安全通道操作远方工作台。|Operate a distant workbench through a protected channel.
ssh-key|SSH密钥|SSH key|用于SSH等身份验证的密钥对。|A key pair used for SSH authentication.|公钥像验证锁，私钥像需保管的钥匙。|Keep the private key safe; the public part verifies it.
nginx|Nginx服务|Nginx|常用于Web服务、反向代理和负载均衡的软件。|Software for web serving, reverse proxying, and load balancing.|大楼接待与分流台。|A reception and routing desk.
cdn|内容分发网络|CDN|在多个位置缓存或提供内容的网络。|A network delivering content from distributed locations.|各地配送点就近供货。|Regional depots serve nearby customers.
edge-node|边缘节点|Edge node|靠近使用者或数据来源的网络处理位置。|A processing location near users or data sources.|离顾客较近的配送点。|A depot closer to customers.
edge-function|边缘函数|Edge function|在边缘运行位置执行的代码。|Code running at edge locations.|在附近配送点先处理部分业务。|Handle some work at the nearby depot.
region|区域|Region|云服务划分的地理资源范围。|A geographic grouping of cloud resources.|选择在哪个城市建仓。|Choose a city for the warehouse.
availability-zone|可用区|Availability zone|区域内具有一定故障隔离的资源位置。|A resource location with fault isolation within a region.|同城不同供电设施的仓库区。|Separate local facilities reduce shared failures.
bandwidth|带宽|Bandwidth|单位时间可传输数据的能力。|Data transfer capacity per unit time.|道路宽度影响单位时间通行量。|Road width limits traffic capacity.
egress|出站流量|Egress|从系统或服务商边界传出的数据流量。|Data transferred out of a system or provider boundary.|仓库发出去的货，可能单独计费。|Outgoing shipments may incur separate charges.
persistent-disk|持久化磁盘|Persistent disk|用于持续保存数据的磁盘存储。|Disk storage intended to retain data persistently.|长期仓库不随临时工位撤走。|Permanent storage outlives a temporary workbench.
autoscaling|自动扩缩容|Autoscaling|按规则增加或减少运行资源。|Adjusts running resources according to rules.|高峰加开窗口，低峰关闭部分窗口。|Open more counters during peak demand.
kubernetes|容器编排系统|Kubernetes|管理容器应用部署、扩缩容等的平台。|A platform managing container deployment and scaling.|统筹多处工作间的运营系统。|A system coordinating many workrooms.
iac|基础设施即代码|IaC|用可版本管理的代码描述和配置基础设施。|Defines infrastructure using version-controlled configuration.|把仓库建设方案写成可重复执行的清单。|A repeatable, versioned plan for building facilities.
`);
add('operations',`
*monitoring|监控|Monitoring|持续观察系统运行状态。|Ongoing observation of system behavior.|值班人员定期看仪表。|Watch operating gauges over time.
*alert|告警|Alert|满足异常条件时主动通知处理者。|A notification triggered by an abnormal condition.|温度超限响警铃。|An alarm sounds when temperature exceeds a limit.
error-tracking|错误追踪|Error tracking|收集并关联程序错误以便定位。|Collects and correlates software errors for diagnosis.|把同类报修单汇总找规律。|Group similar repair reports to find patterns.
optimization|性能优化|Performance optimization|依据测量改善速度或资源使用。|Improves speed or resource use based on measurement.|先找排队原因再调整窗口。|Find the queue's cause before changing counters.
observability|可观测性|Observability|从输出信息理解系统内部状况的能力。|The ability to infer internal system behavior from its outputs.|靠仪表、记录和追踪了解机器哪里不正常。|Use gauges and records to understand a machine.
metrics|指标|Metrics|对运行情况的数值测量。|Numerical measurements of system behavior.|每小时订单数与失败数。|Orders and failures per hour.
trace|链路追踪|Trace|跟随一次请求经过各服务的记录。|Records a request's path through services.|快递从收件到派送的轨迹。|A parcel's journey from pickup to delivery.
apm|应用性能监测|APM|监测应用速度、错误和运行关系的工具能力。|Tools monitoring application speed, errors, and behavior.|为整条流水线配监测面板。|Monitor an entire production line.
error-rate|错误率|Error rate|一段范围内失败占总操作的比例。|The fraction of operations that fail.|一百单中有几单出错。|How many orders fail out of a hundred.
latency|延迟|Latency|一次操作从开始到所测结果的时间。|Time from an operation's start to a measured outcome.|单个顾客等餐多久。|How long one customer waits.
throughput|吞吐量|Throughput|单位时间完成的工作数量。|Work completed per unit time.|每小时出多少份餐。|Meals prepared per hour.
availability|可用性|Availability|系统在需要时可正常提供服务的程度。|How reliably a service is available when needed.|营业时间内窗口是否能办事。|Whether the counter operates during service hours.
sla-slo-sli|服务协议、目标与指标|SLA / SLO / SLI|分别是服务承诺、内部目标和实际测量指标。|An agreement, an objective, and an observed service indicator.|承诺送达时间、内部目标和实际耗时不是同一件事。|Delivery promises, targets, and measured times differ.
p95-p99|百分位延迟|P95 / P99|分别有95%或99%样本不超过的测量值。|Values at or below which 95% or 99% of samples fall.|不仅看平均排队时间，也看多数人最久等多久。|Percentiles reveal waits hidden by an average.
log-level|日志级别|Log level|标记记录严重程度或用途的类别。|A category indicating a log's severity or purpose.|普通记录、提醒和紧急事故分级。|Separate routine notes from urgent incidents.
log-rotation|日志轮转|Log rotation|按大小或时间切换并管理日志文件。|Cycles log files by time or size.|值班本写满后换本并归档。|Replace and archive a full logbook.
audit-log|审计日志|Audit log|记录谁在何时进行了哪些关键操作。|Records who performed important actions and when.|钥匙借用登记簿。|A key checkout register.
incident|事故|Incident|影响正常服务、需要处理的异常事件。|An event disrupting service and requiring response.|门店突然断电。|A shop loses power.
postmortem|事故复盘|Postmortem|事故后分析原因、影响与改进措施。|Reviews causes, impact, and prevention after an incident.|查清停电经过，改进应急方案。|Review an outage and improve the response plan.
rto-rpo|恢复时间与数据目标|RTO / RPO|期望恢复服务的时长与可接受数据丢失时间范围。|Targets for recovery time and tolerable data-loss interval.|多久重新营业，以及最多补录多久的订单。|How soon to reopen and how much recent work may be lost.
cache-hit|缓存命中率|Cache hit rate|请求能从缓存得到结果的比例。|The fraction of requests served from cache.|手边资料解决了多少次查询。|How often nearby reference copies answer requests.
cache-invalidation|缓存失效|Cache invalidation|判定或标记缓存不再可用并更新的过程。|Retires or updates cached content that is no longer valid.|菜单改价后收回旧副本。|Withdraw old menu copies after prices change.
memory-leak|内存泄漏|Memory leak|不再需要的内存未被释放而持续占用。|Unused memory remains allocated over time.|客人离开却一直保留占用桌位。|Tables remain reserved after customers leave.
resources|CPU／内存／磁盘|CPU / RAM / Disk|分别负责计算、工作中数据和较长期存储。|Computation, active working memory, and longer-term storage.|厨师、操作台和仓库承担不同作用。|Chef, worktop, and storeroom play different roles.
bottleneck|瓶颈|Bottleneck|限制整体处理能力的环节。|The part limiting overall capacity.|多位厨师也可能卡在唯一收银台。|Many chefs still queue behind one cashier.
compression|压缩|Compression|用更少空间表示数据，可无损或有损。|Represents data in less space, losslessly or with loss.|压缩收纳与删去细节是不同做法。|Compact packing differs from discarding details.
lazy-loading|懒加载|Lazy loading|需要时才加载资源。|Loads resources when they are needed.|走到某展区再取它的讲解资料。|Fetch guide material when reaching an exhibit.
code-splitting|代码分割|Code splitting|把代码拆为可分别加载的部分。|Splits code into separately loadable parts.|工具分箱，只搬当前需要的一箱。|Pack tools separately and bring only what is needed.
tree-shaking|无用代码移除|Tree shaking|构建时移除可判断未使用的代码。|Removes statically identifiable unused code during building.|打包时不装未用到的配件。|Leave unused parts out of the shipment.
web-vitals|网页体验指标|Core Web Vitals|衡量页面加载、交互和稳定性的一组指标。|Metrics covering loading, interaction, and visual stability.|看开门速度、回应速度和摆放是否突然移动。|Measure readiness, responsiveness, and layout stability.
lcp|最大内容绘制|LCP|衡量视口主要大块内容出现时间的指标。|Measures when the largest visible content is rendered.|主展示牌多久能看见。|How soon the main display appears.
inp|交互到下一次绘制|INP|衡量页面交互响应表现的指标。|Measures responsiveness of page interactions.|按按钮后多久看到反馈。|How soon a button press produces visible feedback.
cls|累计布局偏移|CLS|衡量非预期布局移动程度的指标。|Measures unexpected layout movement.|准备点菜单时按钮突然移位。|A button unexpectedly moves while being selected.
`);
add('integrations',`
*upload|文件上传|File upload|把本地文件传到目标服务。|Transfers a local file to a service.|把手中文件送入收件窗口。|Deliver a local document to a receiving counter.
*email|邮件发送|Email delivery|由应用通过邮件服务发出消息。|An application sends messages through an email service.|把通知交给邮局，不等于对方已读。|Hand a letter to the post office; reading is separate.
*notification|消息通知|Notification|向使用者传达事件或状态变化。|Informs a user about events or changes.|取餐铃通知订单已好。|A collection bell announces readiness.
*payment|支付|Payment|通过支付服务完成资金交易的流程。|A flow using a payment service to transfer funds.|收银要核对实际结果，不只看按钮提示。|Checkout must confirm the actual transaction result.
file-limit|文件大小限制|File size limit|允许传输或保存文件的最大容量。|The maximum file size allowed for transfer or storage.|包裹有重量上限。|Parcels have a weight limit.
mime|媒体类型|MIME type|描述消息或文件内容类型的标识。|An identifier describing content type.|包裹标注内容类别，但仍需检查实际内容。|A content label is not proof of what is inside.
presigned-url|预签名地址|Presigned URL|包含限时授权信息的资源访问地址。|A resource URL carrying time-limited authorization.|一次性或限时取件凭条，不能随意转发。|A temporary collection pass should not be shared casually.
multipart-upload|分片上传|Multipart upload|把大文件分成多块分别传输。|Transfers a large file in separately uploaded parts.|大件家具拆包运输后再组装。|Ship large furniture in separate packages.
resume-upload|断点续传|Resumable upload|中断后从已完成位置继续传输。|Continues a transfer from saved progress after interruption.|已送到的箱子不用全部重送。|Do not resend every delivered box.
email-template|邮件模板|Email template|可填入实际数据复用的邮件格式。|A reusable email format filled with actual data.|标准通知书留有姓名与日期栏。|A notice template includes name and date fields.
smtp|邮件传输协议|SMTP|用于发送和转交电子邮件的协议。|A protocol for sending and relaying email.|邮局之间约定的邮件交接方式。|Agreed procedures between mail offices.
push-notification|推送通知|Push notification|通过平台通知服务发送到设备的消息。|A message delivered to a device through a notification service.|公告主动送到门口，而非等人来查。|Deliver a notice instead of waiting for a visit.
payment-sandbox|支付沙盒|Payment sandbox|用于模拟交易、不作为真实收款的测试环境。|A test environment simulating payment transactions.|用练习钞票演练收银。|Practice checkout with test money.
order-state|订单状态|Order state|描述订单当前处于哪一阶段的数据。|Data identifying the current stage of an order.|待付款、已付款、已发货。|Awaiting payment, paid, and shipped.
payment-callback|支付回调|Payment callback|支付服务把交易结果通知应用的机制。|A payment service notifies an application of transaction outcomes.|银行回执送到店里，需验证真伪并防重复处理。|Verify the bank receipt and avoid processing it twice.
recurring-billing|订阅扣费|Recurring billing|按周期执行的收费流程。|Charges performed on a recurring schedule.|每月收一次会员费。|A membership fee collected monthly.
refund|退款|Refund|把已收款项按规则退回的流程。|Returns collected funds according to rules.|退货后退钱还需核对实际到账。|A return still needs confirmation of refunded funds.
fulltext-search|全文搜索|Full-text search|对正文文本建立索引并按查询检索。|Indexes document text for searching content.|不只查书名，也能查书中句子。|Search inside books, not just titles.
geolocation|地图定位|Geolocation|获取或使用设备、地址等地理位置信息。|Obtains or uses geographic location information.|地图上的位置要看精度与授权。|A map position depends on accuracy and permission.
timezone|时区|Time zone|某地区时间与标准时间的换算规则。|Rules relating local time to a reference time.|同一场会议在不同城市钟表显示不同。|The same meeting has different local clock times.
utc|协调世界时|UTC|常用作时间交换与存储基准的时间标准。|A time standard often used for storage and exchange.|先用统一时间记账，再换算当地显示。|Record a shared reference time, then display locally.
date-format|日期格式|Date format|年月日等时间内容的书写约定。|A convention for writing dates and times.|03/04在不同地方可能理解不同。|03/04 can mean different dates in different locales.
csv|表格文本格式|CSV|常用分隔符表示行列的文本格式。|A delimited text format for tabular data.|把表格写成可交换的文字清单。|A table exchanged as structured text.
pdf|便携文档格式|PDF|用于保留文档呈现结构的文件格式。|A document format designed to preserve presentation.|电子版印刷稿，未必容易直接编辑。|A digital printout may not be easy to edit.
rich-text|富文本|Rich text|带字体、链接等格式信息的文本。|Text containing formatting such as emphasis and links.|带加粗和插图的文章。|An article with emphasis and embedded formatting.
markdown|Markdown格式|Markdown|用轻量文本符号表达标题、列表等结构。|Plain-text notation for headings, lists, and other structure.|用井号标标题，用短横线写清单。|Use simple marks for headings and lists.
`);
add('ownership',`
*open-source|开源|Open source|按允许查看、使用、修改和分发等条件发布的软件。|Software distributed under a license permitting defined reuse rights.|公开图纸并附使用规则，不代表没有条件。|Published plans still come with reuse conditions.
*license|许可证|License|规定作品可如何使用、修改和分发的授权条款。|Terms defining permitted use, modification, and distribution.|租借工具时附带使用约定。|Terms attached to borrowing equipment.
*copyright|版权|Copyright|与作品使用和传播相关的法定权利。|Legal rights relating to use and distribution of a work.|拿到图纸副本不等于拥有全部使用权。|Possessing a copy is not ownership of all rights.
third-party|第三方依赖|Third-party dependency|来自项目之外的代码或服务。|Code or services supplied outside the project.|采购别家的零件。|Parts supplied by another maker.
mit|MIT许可证|MIT license|一种常见宽松许可证，附保留声明等条件。|A permissive license with notice-preservation conditions.|允许较广使用，附带的声明仍要保留。|Broad reuse still requires keeping specified notices.
apache-license|Apache许可证|Apache-2.0|包含通知及专利等条款的开源许可证。|An open-source license with notice and patent provisions.|使用规则不只有署名，还包括其他条款。|Reuse terms include more than attribution.
gpl|GPL许可证|GPL|具有相应源码提供等互惠要求的许可证家族。|A copyleft license family with source-related obligations.|分发改造成品时可能需按规则提供对应图纸。|Distribution may require corresponding source under its terms.
agpl|AGPL许可证|AGPL|包含网络交互相关源码提供要求的许可证。|A copyleft license including network-interaction source obligations.|不只交付副本，网络提供服务也要核对条款。|Check network-service obligations, not only copy distribution.
commercial-use|商业使用|Commercial use|将作品用于商业活动的使用情形。|Use of a work in commercial activity.|能看菜单不等于能复制后拿去卖。|Viewing material does not imply permission to resell it.
attribution|署名|Attribution|按要求保留作者或来源信息。|Crediting authors or sources as required.|使用照片时保留规定的作者说明。|Keep the required photographer credit.
distribution|分发|Distribution|向他人提供软件或作品副本。|Providing copies of software or works to others.|把工具套装交给客户。|Give a software kit to a customer.
derivative|衍生作品|Derivative work|基于已有作品改作形成的作品，具体适用需看法律与许可。|Work adapted from existing material, subject to applicable law and license.|改绘已有图纸仍需核对原授权。|Adapting plans still requires checking permission.
notices|版权与许可声明|Copyright / License notices|随代码或产物保留的权利与许可说明。|Rights and license statements retained with code or output.|产品附带的来源与使用说明。|Origin and use notices supplied with a product.
license-audit|依赖许可证检查|Dependency license review|核对依赖的许可证及项目使用方式是否相容。|Checks dependency licenses against intended project use.|装配前核对各零件使用条件。|Review part-use conditions before assembly.
data-ownership|数据所有权与控制权|Data ownership / Control|数据由谁控制、可如何使用和导出的约定。|Who controls data and how it may be used or exported.|账本放别人仓库，不代表数据权利自动转移。|Hosting a ledger elsewhere does not settle all data rights.
source-handover|源码交付|Source handover|向接收方提供约定源代码和必要说明。|Delivers agreed source code and necessary documentation.|交房不只给照片，还要交约定图纸与说明。|Delivery includes agreed plans, not merely photos.
account-ownership|账号归属|Account ownership|谁控制账号、恢复方式和服务管理权。|Who controls an account, recovery, and administration.|店铺钥匙和续费账号应有明确负责人。|Assign responsibility for keys and billing access.
domain-ownership|域名归属|Domain ownership|谁持有和管理域名注册及续费权限。|Who controls domain registration and renewal.|店铺招牌地址需掌握在正确的人手中。|The address registration needs the right owner.
service-cost|服务费用|Service cost|运行项目持续消耗的服务开销。|Ongoing service spending required to operate a project.|店开好后仍有租金水电。|An opened shop still pays rent and utilities.
shutdown|停服|Service shutdown|停止向使用者提供运行服务。|Stops providing a running service.|关店前需处理通知与未完成订单。|Closing requires notices and handling pending work.
data-export|数据导出|Data export|把数据转成可带走和再使用的格式。|Produces data in a portable form.|把账本复制为能在别处读取的资料。|Take records in a format usable elsewhere.
service-migration|服务迁移|Service migration|把运行或数据转移到另一环境。|Moves operation or data to another environment.|搬店要转运货物并检查新入口。|Move stock and verify the new entrance.
vendor-lockin|供应商锁定|Vendor lock-in|因格式或能力依赖导致更换服务困难。|Dependency on formats or capabilities makes switching difficult.|只配专用零件，换厂家就要改装。|Proprietary parts make changing suppliers costly.
`);
