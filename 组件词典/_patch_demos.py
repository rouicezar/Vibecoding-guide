# -*- coding: utf-8 -*-
from pathlib import Path

p = Path("/Users/rouice/组件/vibe-coding-ui-component-dictionary.html")
s = p.read_text(encoding="utf-8")

s = s.replace(
    "      --ok: #a3a3a3;\n      --danger: #ef4444;",
    "      --ok: #22c55e;\n      --warn: #fbbf24;\n      --info: #60a5fa;\n      --teal: #2dd4bf;\n      --danger: #ef4444;",
    1,
)
s = s.replace(
    "      --ok: #525252;\n      --danger: #dc2626;",
    "      --ok: #16a34a;\n      --warn: #d97706;\n      --info: #2563eb;\n      --teal: #0d9488;\n      --danger: #dc2626;",
    1,
)

extra_css = """
    .title-mark { color: var(--teal); }
    .kw { color: var(--teal); font-style: normal; }
    .count .n { color: var(--teal); }
    .ui-btn.solid { background: var(--text); color: var(--bg); border-color: var(--text); }
    .sw {
      width: 36px; height: 20px; border-radius: 99px; border: 1px solid var(--line);
      background: transparent; position: relative; padding: 0;
    }
    .sw i {
      position: absolute; width: 14px; height: 14px; border-radius: 50%;
      background: var(--muted); top: 2px; left: 2px; pointer-events: none;
    }
    .sw.on { border-color: var(--ok); }
    .sw.on i { left: 18px; background: var(--ok); }
    .dropzone {
      height: 100%; border: 1px dashed var(--line); display: flex; align-items: center;
      justify-content: center; color: var(--muted); font-size: 12px; text-align: center;
    }
    .dropzone.on { border-color: var(--teal); color: var(--teal); }
    .delta-up { color: var(--ok); font-size: 12px; }
    .delta-dn { color: var(--danger); font-size: 12px; }
    .prog { height: 4px; background: var(--fill-2); border-radius: 99px; overflow: hidden; width: 100%; }
    .prog > i { display: block; height: 100%; background: var(--teal); width: 42%; }
    .indet-bar { height: 3px; background: var(--fill-2); overflow: hidden; width: 100%; }
    .indet-bar i { display: block; width: 40%; height: 100%; background: var(--teal); animation: indet 1s ease-in-out infinite; }
    @keyframes indet { 0% { transform: translateX(-100%); } 100% { transform: translateX(280%); } }
    .circ-p {
      width: 44px; height: 44px; border-radius: 50%;
      background: conic-gradient(var(--teal) 72%, var(--line) 0);
      display: grid; place-items: center;
    }
    .circ-p span { width: 30px; height: 30px; border-radius: 50%; background: var(--demo); font-size: 10px; display: grid; place-items: center; }
    .status-ok { color: var(--ok); }
    .status-warn { color: var(--warn); }
    .status-err { color: var(--danger); }
    .status-info { color: var(--info); }
    .add-line { color: var(--ok); }
    .del-line { color: var(--danger); }
    .phone-frame { height: 100%; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; display: flex; flex-direction: column; }
    .safe-top, .safe-bot { height: 10px; background: var(--fill); flex: 0 0 auto; }
    .gantt-bar { height: 10px; background: var(--teal); border-radius: 2px; opacity: .85; }
    .masonry { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; height: 100%; }
    .masonry .t { background: var(--fill); border: 1px solid var(--line); }
    .thumb { width: 28px; height: 28px; border: 1px solid var(--line); background: var(--fill); }
    .thumb.on { border-color: var(--teal); }
    .v-slider { writing-mode: vertical-lr; direction: rtl; height: 120px; width: 24px; }
    .dot.warn { background: var(--warn); }
    .dot.err { background: var(--danger); }
    .dot.info { background: var(--info); }
    .star-btn.on { color: var(--warn); }
    .ed { height: 72px; border: 1px solid var(--line); padding: 6px; overflow: auto; font-size: 12px; outline: none; }
    .crumb { display: flex; gap: 6px; align-items: center; font-size: 12px; color: var(--muted); }
    .crumb button { background: none; border: 0; color: var(--muted); padding: 0; }
    .crumb button.on { color: var(--teal); }
    .page-n { display: flex; gap: 4px; }
    .page-n button { min-width: 24px; height: 24px; border: 1px solid var(--line); background: transparent; color: var(--text); }
    .page-n button.on { border-color: var(--teal); color: var(--teal); }
"""

needle = "    .ico-row { display: inline-flex; align-items: center; gap: 6px; }\n  </style>"
if extra_css not in s:
    if needle not in s:
        raise SystemExit("css needle missing")
    s = s.replace(needle, "    .ico-row { display: inline-flex; align-items: center; gap: 6px; }\n" + extra_css + "  </style>", 1)

s = s.replace(
    "<h1>Vibe Coding UI 组件词典</h1>",
    '<h1>Vibe Coding UI 组件<span class="title-mark">词典</span></h1>',
    1,
)
s = s.replace(
    "以后按这个说：<em>名称 + 变体 + 结构 + 交互 + 状态 + 动效</em>",
    '以后按这个说：<em><span class="kw">名称</span> + 变体 + 结构 + 交互 + 状态 + 动效</em>',
    1,
)
s = s.replace('primary: ["ui-btn", "保存"]', 'primary: ["ui-btn solid", "保存"]', 1)

start = s.find("  function mountDemo(host, it) {")
end = s.find('  var cat = "all", q = "";')
if start < 0 or end < 0:
    raise SystemExit("mountDemo bounds missing %s %s" % (start, end))

mount = Path("/Users/rouice/组件/_mount_demo.js").read_text(encoding="utf-8")
if not mount.startswith("  function mountDemo"):
    raise SystemExit("mount file header mismatch")
s = s[:start] + mount.rstrip() + "\n\n" + s[end:]

s = s.replace(
    'countEl.textContent = items.length + " / " + CATALOG.length;',
    'countEl.innerHTML = "<span class=\\"n\\">" + items.length + "</span> / " + CATALOG.length;',
    1,
)

p.write_text(s, encoding="utf-8")
print("patched", p.stat().st_size)
