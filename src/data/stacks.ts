import type { Copy } from './site';
export const stacks: {
  id: string;
  name: string;
  summary: Copy;
  limits: Copy;
  cost: Copy;
  source: string;
}[] = [
  {
    id: 'astro',
    name: 'Astro',
    summary: [
      '以阅读和展示内容为主的网站，可逐步加入局部交互。',
      'Content-led websites with interactive parts where needed.',
    ],
    limits: [
      '共享预约或账号资料需要另配服务器与保存服务；不是仅放静态页面就完成。',
      'Shared reservations or account data require server and storage services beyond static pages.',
    ],
    cost: [
      '域名、托管；若增加服务则另算运行与资料费用。',
      'Domain and hosting; additional services add compute and storage costs.',
    ],
    source: 'https://docs.astro.build/en/concepts/why-astro/',
  },
  {
    id: 'react',
    name: 'React + framework',
    summary: [
      '频繁填写、筛选和切换状态的网页工具；让 AI 再核对具体框架。',
      'Web tools with frequent input, filtering, and state changes; ask AI to verify a specific framework.',
    ],
    limits: [
      'React 负责界面，并不自动提供账号、数据库和上线服务。',
      'React handles interfaces; accounts, databases, and hosting require separate decisions.',
    ],
    cost: [
      '托管、服务器、资料保存与第三方服务，按实际方案核算。',
      'Hosting, server, storage, and third-party services depending on the chosen setup.',
    ],
    source: 'https://react.dev/learn/creating-a-react-app',
  },
  {
    id: 'expo',
    name: 'React Native + Expo',
    summary: [
      '安装在 Android 或 iPhone 上的应用候选，适合已有 Web 经验后继续。',
      'A candidate for installed Android or iPhone apps after gaining Web experience.',
    ],
    limits: [
      '必须在目标真机核对设备能力、离线保存、构建和发布条件。',
      'Verify device features, offline persistence, builds, and distribution on target hardware.',
    ],
    cost: [
      '开发设备、可选云构建、平台账号和运行服务。',
      'Development devices, optional cloud builds, platform accounts, and runtime services.',
    ],
    source: 'https://docs.expo.dev/tutorial/introduction/',
  },
  {
    id: 'tauri',
    name: 'Tauri',
    summary: [
      '使用网页界面制作安装到电脑的工具，按授权调用系统能力。',
      'Installed desktop tools using web interfaces and explicitly permitted system capabilities.',
    ],
    limits: [
      '系统能力、安装包和签名需分别在目标系统核对；不要直接处理原始文件。',
      'Verify system features, packages, and signing on each target OS; use copies of source files.',
    ],
    cost: [
      '目标系统设备、签名和分发、更新与可选服务器。',
      'Target hardware, signing, distribution, updates, and optional servers.',
    ],
    source: 'https://v2.tauri.app/start/',
  },
];
export interface StackAnswers {
  type: string;
  data: string;
  device: string;
  budget: string;
  existing: string;
  login: string;
  maintenance: string;
}
export function selectStacks(a: StackAnswers): { ids: string[]; reason: Copy } {
  if (a.existing === 'yes')
    return {
      ids: [],
      reason: [
        '先保留现有方案，让 AI 核对当前文件、运行方式和缺口；没有具体阻塞不建议重写。',
        'Keep the existing setup first. Have AI inspect files, startup steps, and gaps; avoid a rewrite without a concrete blocker.',
      ],
    };
  if (
    [
      a.type,
      a.data,
      a.device,
      a.budget,
      a.existing,
      a.login,
      a.maintenance,
    ].includes('unknown')
  )
    return {
      ids: [],
      reason: [
        '还有条件未确定。先让 AI 澄清未知项，暂不把任何方案认定为适合。下方目录可用于了解候选。',
        'Some conditions remain unknown. Clarify them with AI before considering a match. Browse the catalog below to understand the candidates.',
      ],
    };
  if (a.type === 'mini')
    return {
      ids: [],
      reason: [
        '先选微信、支付宝或抖音，再核对该平台官方开发与发布条件；本选择器不把网页方案直接套用到小程序。',
        'Choose WeChat, Alipay, or Douyin and check its official development and release requirements. Web stacks are not assumed to fit mini programs.',
      ],
    };
  if ((a.type === 'content' || a.type === 'web') && a.device === 'native')
    return {
      ids: [],
      reason: [
        '要求设备专有能力，但产品选择了网页。先验证浏览器能否完成关键动作，再决定是否改为安装式应用。',
        'Native device capabilities were requested for a website. Verify the critical action in a browser before deciding on an installed app.',
      ],
    };
  return {
    ids:
      a.type === 'mobile'
        ? ['expo']
        : a.type === 'desktop'
          ? ['tauri']
          : a.type === 'content' && a.data !== 'shared' && a.login === 'no'
            ? ['astro']
            : ['react', 'astro'],
    reason: [
      '以下是待验证候选，不是自动定案。共享资料或登录需要另列数据与权限方案；预算为零时先验证本地原型，确认持续费用后再决定上线。维护意愿有限时，让 AI 列出必须由人持续负责的事项。',
      'These are candidates to validate, not a final decision. Shared data or sign-in needs a data and access plan. With zero budget, validate locally before accepting recurring costs. If upkeep capacity is limited, list the tasks a person must continue handling.',
    ],
  };
}
