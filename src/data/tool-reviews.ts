import type { Copy } from './site';
export interface ToolReview {
  id: string;
  title: Copy;
  finding: Copy;
  limit: Copy;
  advice: Copy;
  sources: { label: string; url: string }[];
}
export const toolReviews: ToolReview[] = [
  {
    title: [
      '先看项目是否做成，再看排行榜',
      'Choose by a completed task, not a leaderboard',
    ],
    finding: [
      'Ars 用相同扫雷任务实测四个代理：功能完整度、视觉效果与速度的赢家并不相同。',
      'Ars tested four agents on the same Minesweeper task; completeness, appearance and speed did not point to the same winner.',
    ],
    limit: [
      '2025 年单任务、旧模型、主观评分；不能当作 2026 年通用排名。',
      'A single task with 2025 models and subjective scoring; not a universal 2026 ranking.',
    ],
    advice: [
      '先用相同小任务试两个候选：建一页、改一处、处理一次报错、重新打开。记录可用结果、等待时间和实际费用。',
      'Try two candidates on the same small task: create a page, edit one area, resolve an error and reopen it. Record usable results, elapsed time and actual cost.',
    ],
    id: 'fit-before-ranking',
    sources: [
      {
        label: 'Ars Technica: four coding agents build Minesweeper',
        url: 'https://arstechnica.com/ai/2025/12/the-ars-technica-ai-coding-agent-test-minesweeper-edition/',
      },
    ],
  },
  {
    title: [
      '看得懂界面，也是选型条件',
      'A readable interface is part of the choice',
    ],
    finding: [
      'TRAE 社区作者称，界面阅读负担较低促成了长期使用；同时也记录了漫长调试过程。',
      'A TRAE community author credits a more readable interface with sustained use, while also describing a lengthy debugging process.',
    ],
    limit: [
      '单人经历，帖子属于带积分活动的用户故事；不代表无基础者都能复现。',
      "One person's account in a points-linked story campaign; not evidence that all beginners can reproduce it.",
    ],
    advice: [
      '基础薄弱时，先比较能否找到项目、预览、错误和改动记录。CLI 不应仅因看起来专业就成为首选。',
      'With limited experience, first check whether projects, previews, errors and changes are easy to find. A CLI should not win merely because it looks professional.',
    ],
    id: 'readable-interface',
    sources: [
      {
        label: 'TRAE 社区：我的 AI Coding 启蒙经历',
        url: 'https://forum.trae.cn/t/topic/175108',
      },
    ],
  },
  {
    title: [
      '订阅价格不等于项目总成本',
      'Subscription price is not total project cost',
    ],
    finding: [
      'Cursor 新用户曾混淆模式、模型与额度。Qoder 用户同时赞赏功能并抱怨积分消耗；Cline 同一讨论中出现变贵和变便宜的相反体验。',
      'A Cursor newcomer confused modes, models and quotas. Qoder users praised features while questioning credit consumption; Cline users reported both higher and lower costs in one discussion.',
    ],
    limit: [
      '讨论跨越不同版本、模型和使用量；不能用个人账单推算所有人的费用。',
      "Versions, models and usage differ; individual bills cannot predict everyone's cost.",
    ],
    advice: [
      '先确认包含额度、超额收费和重置周期。用一个小任务核对账单，再决定月订阅；不要按积分数量跨产品比较。',
      'Check included usage, overages and reset periods. Audit one small task before choosing a monthly subscription; do not compare credit counts across products.',
    ],
    id: 'budget-real-task',
    sources: [
      {
        label: 'Cursor forum: Questions from a new',
        url: 'https://forum.cursor.com/t/questions-from-a-new/148900',
      },
      {
        label: 'Qoder is amazing! Any chance for a small credit boost?',
        url: 'https://forum.qoder.com/t/qoder-is-amazing-any-chance-for-a-small-credit-boost/1876',
      },
      {
        label:
          'Cline discussion #1727: Is it just me or Cline became more expensive?',
        url: 'https://github.com/cline/cline/discussions/1727',
      },
    ],
  },
  {
    title: [
      '先跑通登录，再扩展配置',
      'Verify login before expanding the setup',
    ],
    finding: [
      'Kimi CLI 原始讨论记录了登录成功后仍授权失败的情况；回复涉及版本修复和环境变量干扰，原因并不统一。',
      'A Kimi CLI discussion records authorization failures after login; replies discuss version fixes and environment-variable conflicts, with no single cause established.',
    ],
    limit: [
      '历史问题报告，不证明当前版本普遍不可用；不同回复的修复方法不能直接照搬。',
      'A historical issue, not proof of current widespread failure; fixes from different replies are not universally applicable.',
    ],
    advice: [
      '先按官方入口完成登录并发送一次无敏感信息的小请求。出错时提供版本、系统、错误原文与登录方式；不要贴密钥，也不要把重装作为第一步。',
      'Use the official login flow and send one harmless request. Report version, OS, exact error and login method; never paste keys or start with a reinstall.',
    ],
    id: 'login-before-buying',
    sources: [
      {
        label: 'Kimi CLI discussion #926: Authorization failed',
        url: 'https://github.com/MoonshotAI/kimi-cli/discussions/926',
      },
    ],
  },
  {
    title: [
      '反复修不好时，停止重复付费重试',
      'Stop repeated paid retries when progress stalls',
    ],
    finding: [
      'Bolt 用户贴出预览失败与终端日志；回复建议停止反复提示并向支持提供项目线索。另一个导入报告显示，AI 也可能编造不存在的按钮。',
      'Bolt users supplied blank-preview logs; a reply advised stopping repeated prompts and sending evidence to support. A separate import report shows AI can invent nonexistent interface buttons.',
    ],
    limit: [
      '两次是本站建议的止损规则，非实验阈值。社区中的降级方案还引出了安全警告，不能作为通用修复。',
      "Two attempts is this site's practical stopping rule, not an experimental threshold. A downgrade suggested in the thread produced a security warning and is not a general fix.",
    ],
    advice: [
      '同一错误两次未改善，先保存现状，收集首个错误、重现步骤和版本，要求分析再修改。界面入口以当前官方说明和实际界面为准。',
      'After two unchanged attempts, save the current state, collect the first error, reproduction steps and versions, then request diagnosis before edits. Verify UI instructions against current docs and the actual screen.',
    ],
    id: 'stop-error-loop',
    sources: [
      {
        label: 'Bolt blank-preview report with terminal logs',
        url: 'https://www.reddit.com/r/boltnewbuilders/comments/1uiqg4s/boltnew_stuck_in_this_message_your_preview_will/',
      },
      {
        label: 'WebContainer issue #1850: Missing Bolt integration',
        url: 'https://github.com/stackblitz/webcontainer-core/issues/1850',
      },
    ],
  },
  {
    title: ['第一次先不用一大套插件', 'Start without a large plugin setup'],
    finding: [
      'Claude Code 用户提交了插件安装范围难以更改的改进请求：项目、本机与全局设置容易混淆。',
      'A Claude Code user requested easier plugin-scope changes, describing confusion between project, local and user configuration.',
    ],
    limit: [
      '单个功能请求不代表整个产品难用，也不能断言当前版本未修复。',
      'One feature request does not establish overall usability or prove the current version lacks a fix.',
    ],
    advice: [
      '先完成一个项目和一份简短规则文件。增加插件前写清用途、安装位置、凭据来源和撤销方法。',
      'Complete one project with a short instruction file first. Before adding a plugin, record its purpose, installation scope, credential source and removal method.',
    ],
    id: 'small-config',
    sources: [
      {
        label: 'Claude Code issue #44470: Change plugin scope from TUI',
        url: 'https://github.com/anthropics/claude-code/issues/44470',
      },
    ],
  },
  {
    title: [
      '能生成，还要能检查和恢复',
      'Generation needs verification and recovery',
    ],
    finding: [
      'Simon Willison 建议接手已有项目时先运行现有测试，让代理识别验证方式。',
      'Simon Willison recommends starting an existing-project session by running its tests so the agent learns how verification works.',
    ],
    limit: [
      '独立作者的工程实践建议，不是所有项目的效果保证；恢复操作需要先确认要保留的改动。',
      "An experienced author's practice, not a guarantee for every project; identify changes to preserve before recovery.",
    ],
    advice: [
      '工具试用应包含读取规则、运行项目、查看改动和恢复一次小修改。验收时亲手走主流程，不能只看 AI 的完成说明。',
      "A trial should include reading instructions, running the project, inspecting changes and recovering one small edit. Manually exercise the main flow instead of relying on the agent's completion message.",
    ],
    id: 'verify-result',
    sources: [
      {
        label: 'Simon Willison: First run the tests',
        url: 'https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/',
      },
    ],
  },
  {
    title: [
      '感觉更快，与实际完成更快要分开',
      'Feeling faster differs from finishing faster',
    ],
    finding: [
      'METR 在熟悉开源项目的资深开发者实验中，发现早期 2025 工具并未带来预期提速。',
      "METR's study of experienced developers on familiar repositories found early-2025 tools did not deliver the expected speedup.",
    ],
    limit: [
      '不能外推到零基础人群、所有任务或当前模型；本站建议属于基于证据的推断。',
      "Do not generalize to beginners, all tasks or current models; the site's recommendation is an inference from the evidence.",
    ],
    advice: [
      '选型记录应从需求开始，到实测通过结束，包含安装、返工和验证时间。未来扩展时优先保留可导出的代码、规则和运行说明。',
      'Measure from requirement to verified outcome, including setup, rework and validation. Preserve exportable code, instructions and run notes for future changes.',
    ],
    id: 'measure-own-outcome',
    sources: [
      {
        label: 'METR: Early-2025 AI and experienced developer productivity',
        url: 'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/',
      },
    ],
  },
];
