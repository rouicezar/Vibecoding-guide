  function mountDemo(host, it) {
    var d = it.demo, k = (it.opts && it.opts.kind) || "";
    function cen(kids) { return $("div", { class: "center", style: { flexDirection: "column", gap: "8px", height: "100%" } }, kids); }
    function menuOf(items, after) {
      return $("div", { class: "menu", style: { top: "40px", left: "12px" } }, items.map(function (x) {
        return $("button", { onclick: function () { toastIn(host, x); if (after) after(); } }, x);
      }));
    }
    if (d === "tabs") return D.demoTabs(host, it.opts);
    if (d === "stepper") return D.demoStepper(host, it.opts);
    if (d === "button") return D.demoButton(host, it.opts);
    if (d === "input") return D.demoInput(host, it.opts);
    if (d === "select") return D.demoSelect(host, it.opts);

    if (d === "checks") {
      if (k === "switch") {
        var on = true;
        function paint() {
          var sw = $("button", { class: "sw" + (on ? " on" : ""), onclick: function () { on = !on; paint(); } }, $("i", {}));
          clear(host).append(cen([$("div", { class: "ico-row" }, [sw, $("span", { class: on ? "status-ok" : "hint" }, on ? "已开启" : "已关闭")])]));
        }
        paint(); return;
      }
      if (k === "tri") {
        var st = 1;
        function paint() {
          var box = $("input", { type: "checkbox" });
          box.checked = st === 2; box.indeterminate = st === 1;
          box.onclick = function (e) { e.preventDefault(); st = (st + 1) % 3; paint(); };
          clear(host).append(cen([$("label", { class: "tree-row" }, [box, ["未选", "部分选", "全选"][st]])]));
        }
        paint(); return;
      }
      ["选项 A", "选项 B", "选项 C"].forEach(function (n, i) {
        host.append($("label", { class: "tree-row" }, [$("input", { type: k === "radio" ? "radio" : "checkbox", name: "g" + it.id, checked: i === 0 }), n]));
      });
      return;
    }

    if (d === "slider") {
      var a = 28, b = 72;
      function paint() {
        clear(host);
        if (k === "range") {
          var r1 = $("input", { type: "range", min: "0", max: "100", value: String(a) });
          var r2 = $("input", { type: "range", min: "0", max: "100", value: String(b) });
          r1.oninput = function () { a = +r1.value; if (a > b) a = b; paint(); };
          r2.oninput = function () { b = +r2.value; if (b < a) b = a; paint(); };
          host.append(cen([$("div", { class: "hint" }, a + " – " + b), r1, r2])); return;
        }
        var rng = $("input", { type: "range", min: "0", max: "100", step: k === "stepped" ? "10" : "1", value: String(a), class: k === "vertical" ? "v-slider" : "" });
        var lab = $("div", { class: "hint" }, String(a));
        rng.oninput = function () { a = +rng.value; lab.textContent = rng.value; };
        host.append(cen(k === "vertical" ? [rng, lab] : [rng, lab]));
      }
      paint(); return;
    }

    if (d === "otp") {
      var box = $("div", { class: "otp" });
      var cells = [];
      for (var n = 0; n < 6; n++) {
        var inp = $("input", { maxlength: "1", inputmode: "numeric" });
        inp.oninput = (function (idx) {
          return function () {
            cells[idx].value = cells[idx].value.replace(/\D/g, "").slice(0, 1);
            if (cells[idx].value && idx < 5) cells[idx + 1].focus();
          };
        })(n);
        cells.push(inp); box.append(inp);
      }
      clear(host).append(cen([box, $("div", { class: "hint" }, "输入后自动跳格")])); return;
    }

    if (d === "date") {
      var day = 12, open = (k === "calendar" || k === "calview"), h = 14, m = 30;
      function cal() {
        var w = $("div", { class: "cal" });
        ["一", "二", "三", "四", "五", "六", "日"].forEach(function (x) { w.append($("b", {}, x)); });
        for (var i = 1; i <= 21; i++) {
          w.append($("button", { class: i === day ? "sel" : "", onclick: (function (n) { return function () { day = n; if (k !== "calendar" && k !== "calview") open = false; paint(); }; })(i) }, String(i)));
        }
        return w;
      }
      function paint() {
        clear(host);
        if (k === "time") {
          host.append(cen([$("div", { class: "ico-row" }, [
            $("button", { class: "ui-btn secondary", onclick: function () { h = (h + 1) % 24; paint(); } }, (h < 10 ? "0" : "") + h),
            $("span", {}, ":"),
            $("button", { class: "ui-btn secondary", onclick: function () { m = (m + 5) % 60; paint(); } }, (m < 10 ? "0" : "") + m)
          ])])); return;
        }
        if (k === "month" || k === "year") {
          var items = k === "month" ? ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"] : ["2023", "2024", "2025", "2026"];
          var wrap = $("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "4px", width: "100%" } });
          items.forEach(function (x, i) {
            wrap.append($("button", { class: "ui-btn secondary" + (i === (k === "month" ? 7 : 3) ? " on" : ""), onclick: function () { toastIn(host, x); } }, x));
          });
          host.append(wrap); return;
        }
        if (k === "week") {
          host.append(cen([$("div", { class: "hint" }, "第 35 周"), cal(), $("div", { class: "status-info" }, "已选一整周")])); return;
        }
        if (k === "datetime") {
          host.append($("button", { class: "ui-btn secondary", onclick: function () { open = !open; paint(); } }, "2026-08-" + day + "  " + h + ":30"));
          if (open) host.append(cal()); return;
        }
        if (k === "range") {
          host.append($("div", { class: "hint" }, "开始 08-0" + Math.max(1, day - 3) + "  →  结束 08-" + day));
          host.append(cal()); return;
        }
        host.append($("button", { class: "ui-btn secondary", onclick: function () { open = !open; paint(); } }, rowI("calendar", "2026-08-" + day)));
        if (open || k === "calendar" || k === "calview") {
          if (k === "calview") host.append($("div", { class: "hint status-ok" }, day + " 日 · 设计评审"));
          host.append(cal());
        }
      }
      paint(); return;
    }

    if (d === "chips") {
      var tags = ["React", "Vue"], val = "";
      function paint() {
        clear(host);
        var row = $("div", { style: { display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "6px" } });
        tags.forEach(function (t) {
          var c = $("span", { class: "chip" }, t);
          var x = $("span", { class: "x", onclick: function () { tags = tags.filter(function (z) { return z !== t; }); paint(); } });
          x.append(icon("x", 10)); c.append(x); row.append(c);
        });
        var inp = $("input", { class: "field", placeholder: "回车添加", value: val, onkeydown: function (e) {
          if (e.key === "Enter" && inp.value.trim()) { tags.push(inp.value.trim()); val = ""; paint(); }
        } });
        host.append(row, inp);
      }
      paint(); return;
    }

    if (d === "mentions") {
      var qv = "", open = false;
      var people = ["Ada", "Lin", "Sam"];
      function paint() {
        clear(host);
        var inp = $("input", { class: "field", value: qv, placeholder: "输入 @ 提及", oninput: function (e) {
          qv = e.target.value; open = qv.indexOf("@") >= 0; paint(); host.querySelector("input").focus();
          host.querySelector("input").setSelectionRange(qv.length, qv.length);
        } });
        host.append(inp);
        if (open) people.forEach(function (p) {
          host.append($("button", { class: "list-item", onclick: function () { qv = qv.replace(/@[^@]*$/, "@" + p + " "); open = false; paint(); } }, "@" + p));
        });
      }
      paint(); return;
    }

    if (d === "editor") {
      var md = false;
      var ed = $("div", { class: "ed", contenteditable: "true" }, k === "code" ? "const n = 1;" : (k === "md" ? "**粗体** 和列表" : "可编辑正文"));
      if (k === "code") ed.style.fontFamily = "var(--mono)";
      var bar = $("div", { class: "ico-row" });
      if (k === "rte") ["B", "I"].forEach(function (t) {
        bar.append($("button", { class: "ui-btn secondary icon", onclick: function () { document.execCommand(t === "B" ? "bold" : "italic"); } }, t));
      });
      if (k === "md") bar.append($("button", { class: "ui-btn secondary", onclick: function () { md = !md; toastIn(host, md ? "预览" : "编辑"); } }, "预览"));
      clear(host).append(bar, ed); return;
    }

    if (d === "inline") {
      var edit = false, text = "项目名称";
      function paint() {
        clear(host);
        if (!edit) host.append(cen([$("button", { class: "ui-btn text", onclick: function () { edit = true; paint(); } }, text)]));
        else {
          var inp = $("input", { class: "field", value: text });
          host.append(cen([inp, $("button", { class: "ui-btn solid", onclick: function () { text = inp.value; edit = false; paint(); } }, "保存")]));
          inp.focus();
        }
      }
      paint(); return;
    }

    if (d === "masked") {
      var ph = { mask: "____-____", phone: "+86 138 0000 0000", currency: "¥ 0.00", url: "https://" }[k] || "";
      var inp = $("input", { class: "field", placeholder: ph, value: k === "phone" ? "+86 " : (k === "currency" ? "¥ " : (k === "url" ? "https://" : "")) });
      clear(host).append(cen([$("div", { class: "hint" }, ph), inp])); return;
    }

    if (d === "color") {
      var hex = "#2dd4bf";
      var c = $("input", { type: "color", value: hex, style: { width: "42px", height: "32px", border: "1px solid var(--line)", background: "transparent" } });
      var t = $("input", { class: "field", value: hex, style: { width: "96px" } });
      c.oninput = function () { t.value = c.value; };
      t.oninput = function () { if (/^#[0-9a-fA-F]{6}$/.test(t.value)) c.value = t.value; };
      clear(host).append(cen([$("div", { class: "ico-row" }, [c, t])])); return;
    }

    if (d === "rating") {
      var stars = 3;
      function paint() {
        clear(host); var row = $("div", { class: "center" });
        for (var i = 1; i <= 5; i++) {
          var st = $("button", { class: "star-btn" + (i <= stars ? " on" : ""), onclick: (function (x) { return function () { stars = x; paint(); }; })(i) });
          st.append(icon("star", 18)); row.append(st);
        }
        host.append(row, $("div", { class: "hint", style: { textAlign: "center" } }, stars + " / 5"));
      }
      paint(); return;
    }

    if (d === "file") {
      var files = ["brief.pdf"];
      var hidden = $("input", { type: "file", style: { display: "none" }, onchange: function () { files = [hidden.files[0] ? hidden.files[0].name : "photo.png"]; paint(); } });
      function paint() {
        clear(host); host.append(hidden);
        if (k === "drop") {
          var z = $("div", { class: "dropzone", onclick: function () { hidden.click(); } }, "拖入文件或点击选择");
          z.ondragover = function (e) { e.preventDefault(); z.classList.add("on"); };
          z.ondragleave = function () { z.classList.remove("on"); };
          z.ondrop = function (e) { e.preventDefault(); z.classList.remove("on"); files = ["dropped.png"]; paint(); };
          host.append(z); return;
        }
        if (k === "list") {
          files.forEach(function (f) {
            host.append($("div", { class: "tree-row" }, [icon("file", 12), $("span", {}, " " + f)]));
            host.append($("div", { class: "prog" }, $("i", { style: { width: "70%" } })));
          });
          host.append($("button", { class: "ui-btn secondary", onclick: function () { hidden.click(); } }, "添加文件")); return;
        }
        host.append(cen([$("button", { class: "ui-btn secondary", onclick: function () { hidden.click(); } }, k === "button" ? "上传" : "选择文件"), $("div", { class: "hint" }, files[0])]));
      }
      paint(); return;
    }

    if (d === "menu") {
      var open = false, which = "";
      function paint() {
        clear(host);
        if (k === "context") {
          var box = $("div", { class: "card-mini", style: { height: "100%" }, oncontextmenu: function (e) { e.preventDefault(); open = true; paint(); } }, "在此区域右键");
          host.append(box);
          if (open) host.append(menuOf(["复制", "重命名", "删除"], function () { open = false; paint(); }));
          return;
        }
        if (k === "bar") {
          ["文件", "编辑", "视图", "帮助"].forEach(function (lab) {
            host.append($("button", { class: "tab" + (which === lab ? " active" : ""), onclick: function () { which = which === lab ? "" : lab; paint(); } }, lab));
          });
          if (which) host.append(menuOf(["新建", "打开", "保存"]));
          return;
        }
        if (k === "mega" || k === "nav") {
          host.append($("button", { class: "ui-btn secondary", onclick: function () { open = !open; paint(); } }, "产品"));
          if (open) {
            var m = $("div", { class: "menu", style: { top: "40px", display: k === "mega" ? "grid" : "block", gridTemplateColumns: "1fr 1fr", minWidth: "200px" } });
            ["模型", "路由", "密钥", "文档"].forEach(function (x) { m.append($("button", { onclick: function () { toastIn(host, x); open = false; paint(); } }, x)); });
            host.append(m);
          }
          return;
        }
        var b = $("button", { class: k === "overflow" ? "ui-btn icon secondary" : "ui-btn secondary", onclick: function () { open = !open; paint(); } });
        if (k === "overflow") b.append(icon("moreV", 16)); else b.append(rowI("chevD", "操作"));
        host.append(cen([b]));
        if (open) host.append(menuOf(["编辑", "复制", "删除"], function () { open = false; paint(); }));
      }
      paint(); return;
    }

    if (d === "overlay") {
      var open = false;
      function paint() {
        clear(host);
        var label = { tooltip: "悬停/点击看说明", popover: "打开气泡", hover: "悬停预览", modal: "打开对话框", alert: "打开警告", popconfirm: "删除", drawer: "打开抽屉", sheet: "打开面板", bottom: "打开底栏" }[k] || "打开";
        var btn = $("button", { class: k === "popconfirm" ? "ui-btn danger" : "ui-btn secondary", onclick: function () { open = !open; paint(); } }, label);
        if (k === "tooltip" || k === "hover") {
          btn.onmouseenter = function () { open = true; paint(); };
          btn.onmouseleave = function () { open = false; paint(); };
        }
        host.append(cen([btn]));
        if (!open) return;
        if (k === "tooltip") host.append($("div", { class: "toast" }, "短说明"));
        else if (k === "hover") host.append($("div", { class: "popover", style: { top: "48px" } }, [$("strong", {}, "Ada"), $("div", { class: "hint" }, "在线 · 设计")]));
        else if (k === "popover") host.append($("div", { class: "popover", style: { top: "48px" } }, [$("div", { class: "hint" }, "可放操作"), $("button", { class: "ui-btn solid", onclick: function () { open = false; paint(); } }, "应用")]));
        else if (k === "popconfirm") host.append($("div", { class: "popover", style: { top: "48px" } }, [$("div", {}, "确定删除？"), $("button", { class: "ui-btn danger", onclick: function () { toastIn(host, "已删除"); open = false; paint(); } }, "删除")]));
        else if (k === "modal" || k === "alert") host.append($("div", { class: "modal-mask" }, $("div", { class: "modal" }, [$("strong", {}, k === "alert" ? "无法撤销" : "编辑项目"), $("div", { class: "hint" }, "确认后继续"), $("button", { class: "ui-btn solid", onclick: function () { open = false; paint(); } }, "确定")])));
        else if (k === "drawer") host.append($("div", { class: "drawer" }, [$("strong", {}, "详情"), $("button", { class: "ui-btn text", onclick: function () { open = false; paint(); } }, "关闭")]));
        else if (k === "sheet") host.append($("div", { class: "drawer" }, [$("strong", {}, "面板"), $("button", { class: "ui-btn text", onclick: function () { open = false; paint(); } }, "关闭")]));
        else host.append($("div", { class: "sheet" }, ["分享", "收藏", "取消"].map(function (x) { return $("button", { class: "list-item", onclick: function () { toastIn(host, x); open = false; paint(); } }, x); })));
      }
      paint(); return;
    }

    if (d === "nav") {
      var cur = 0;
      function paint() {
        clear(host);
        if (k === "crumb") {
          var parts = ["首页", "项目", "设置"];
          var row = $("div", { class: "crumb" });
          parts.forEach(function (p, i) {
            if (i) row.append($("span", {}, "/"));
            row.append($("button", { class: i === cur ? "on" : "", onclick: function () { cur = i; paint(); } }, p));
          });
          host.append(cen([row])); return;
        }
        if (k === "page") {
          var row = $("div", { class: "page-n" });
          row.append($("button", { onclick: function () { cur = Math.max(0, cur - 1); paint(); } }, "‹"));
          for (var i = 0; i < 5; i++) row.append($("button", { class: i === cur ? "on" : "", onclick: (function (n) { return function () { cur = n; paint(); }; })(i) }, String(i + 1)));
          row.append($("button", { onclick: function () { cur = Math.min(4, cur + 1); paint(); } }, "›"));
          host.append(cen([row])); return;
        }
        if (k === "side") {
          ["总览", "项目", "设置"].forEach(function (lab, i) {
            host.append($("button", { class: "list-item" + (i === cur ? " on" : ""), onclick: function () { cur = i; paint(); } }, lab));
          }); return;
        }
        if (k === "rail") {
          var rail = $("div", { class: "rail" });
          ["home", "search", "settings"].forEach(function (n, i) {
            var b = $("button", { class: i === cur ? "on" : "", onclick: function () { cur = i; paint(); } });
            b.append(icon(n, 16)); rail.append(b);
          });
          host.append(rail); return;
        }
        if (k === "bottom") {
          var bar = $("div", { class: "bnav", style: { marginTop: "auto" } });
          [["home", "首页"], ["search", "搜索"], ["plus", "创建"], ["user", "我的"]].forEach(function (p, i) {
            var b = $("button", { class: i === cur ? "on" : "", onclick: function () { cur = i; paint(); } });
            b.append(icon(p[0], 16), document.createTextNode(p[1])); bar.append(b);
          });
          host.append($("div", { style: { height: "100%", display: "flex", flexDirection: "column" } }, [$("div", { class: "grow hint" }, "内容"), bar])); return;
        }
        if (k === "top") {
          host.append($("div", { class: "ico-row", style: { justifyContent: "space-between" } }, [$("strong", {}, "Logo"), $("button", { class: "ui-btn secondary" }, "登录")]));
          var row = $("div", { class: "ico-row" });
          ["文档", "模型", "定价"].forEach(function (lab, i) {
            row.append($("button", { class: "tab" + (i === cur ? " active" : ""), onclick: function () { cur = i; paint(); } }, lab));
          });
          host.append(row); return;
        }
        ["简介", "安装", "API"].forEach(function (lab, i) {
          host.append($("button", { class: "list-item" + (i === cur ? " on" : ""), onclick: function () { cur = i; paint(); host.scrollTop = 0; } }, lab));
        });
        host.append($("div", { class: "card-mini" }, "滚动到：" + ["简介", "安装", "API"][cur]));
      }
      paint(); return;
    }

    if (d === "card") {
      var sel = false;
      function paint() {
        var body = $("div", { class: "card-mini", style: { cursor: k === "interactive" || k === "selectable" ? "pointer" : "default", boxShadow: k === "elevated" ? "0 0 0 1px var(--line)" : "none" }, onclick: function () { if (k === "selectable" || k === "interactive") { sel = !sel; paint(); } } });
        if (k === "media" || k === "horizontal") body.append($("div", { style: { height: k === "horizontal" ? "48px" : "56px", background: "var(--fill-2)", marginBottom: "6px", border: "1px solid var(--line)" } }));
        if (k === "metric" || k === "dashboard") body.append($("div", { class: "hint" }, "请求量"), $("strong", {}, "12.4k"), $("span", { class: "delta-up" }, " +8.2%"));
        else body.append($("strong", {}, k === "selectable" ? (sel ? "已选套餐" : "基础套餐") : "卡片标题"), $("div", { class: "hint" }, "简短描述"));
        if (k === "selectable") body.style.borderColor = sel ? "var(--teal)" : "var(--line)";
        clear(host).append(body);
      }
      paint(); return;
    }

    if (d === "table") {
      var rows = [["Ada", "12"], ["Lin", "9"], ["Sam", "4"]], sort = 0, exp = -1, edit = -1;
      function paint() {
        clear(host);
        var t = $("table", { class: "mini-table" });
        var trh = $("tr", {});
        ["名称", "用量"].forEach(function (h, i) {
          trh.append($("th", { onclick: function () { sort = i; rows.sort(function (a, b) { return String(a[i]).localeCompare(String(b[i])); }); paint(); } }, h));
        });
        t.append(trh);
        rows.forEach(function (r, i) {
          var tr = $("tr", { onclick: function () { if (k === "expand" || k === "treetable" || k === "treegrid") { exp = exp === i ? -1 : i; paint(); } } });
          if (k === "edit" && edit === i) {
            var inp = $("input", { class: "field", value: r[0] });
            tr.append($("td", {}, inp), $("td", {}, r[1]));
            inp.onchange = function () { r[0] = inp.value; edit = -1; paint(); };
          } else {
            tr.append($("td", { onclick: k === "edit" ? function (e) { e.stopPropagation(); edit = i; paint(); } : null }, (k === "treetable" || k === "treegrid" ? (exp === i ? "  " : "  ") : "") + r[0]), $("td", {}, r[1]));
          }
          t.append(tr);
          if (exp === i && (k === "expand" || k === "treetable" || k === "treegrid")) t.append($("tr", {}, $("td", { colspan: "2", class: "hint" }, "子行 / 详情")));
        });
        host.append(t);
      }
      paint(); return;
    }

    if (d === "list") {
      var cur = 0;
      var items = k === "desc" ? [["协议", "HTTPS"], ["延迟", "42ms"]] : ["收件箱", "已发送", "草稿"];
      function paint() {
        clear(host);
        items.forEach(function (itx, i) {
          if (k === "desc") host.append($("div", { class: "tree-row" }, [$("span", { class: "hint" }, itx[0]), $("span", {}, itx[1])]));
          else host.append($("button", { class: "list-item" + (i === cur ? " on" : ""), onclick: function () { cur = i; paint(); } }, k === "structured" ? itx + "    3 项" : itx));
        });
      }
      paint(); return;
    }

    if (d === "tree") {
      var openT = true;
      function paint() {
        clear(host);
        var row = $("div", { class: "tree-row", onclick: function () { openT = !openT; paint(); } });
        row.append(icon(openT ? "chevD" : "chevR", 12), document.createTextNode(" src"));
        host.append(row);
        if (openT) {
          var r = $("div", { class: "tree-row", style: { paddingLeft: "16px" } });
          r.append(icon("file", 12), document.createTextNode(" App.tsx")); host.append(r);
        }
      }
      paint(); return;
    }

    if (d === "accordion") {
      var openA = k !== "acc";
      var openB = false;
      function paint() {
        clear(host);
        function item(title, open, set) {
          var btn = $("button", { class: "list-item", onclick: function () { set(); paint(); } });
          btn.append(icon(open ? "chevD" : "chevR", 12), document.createTextNode(" " + title));
          host.append(btn);
          if (open) host.append($("div", { class: "hint" }, "展开后的内容"));
        }
        item("高级设置", openA, function () { openA = !openA; });
        if (k === "acc") item("通知", openB, function () { openB = !openB; });
      }
      paint(); return;
    }

    if (d === "timeline") {
      [["已创建", "ok"], ["处理中", "warn"], ["待发布", "info"]].forEach(function (x) {
        host.append($("div", { class: "tree-row" }, [$("span", { class: "dot " + (x[1] === "ok" ? "" : x[1]) }), $("span", {}, x[0])]));
      });
      return;
    }

    if (d === "kanban") {
      var cols = [["待办", ["写文档"]], ["进行中", ["设计"]], ["完成", []]];
      function paint() {
        clear(host);
        var board = $("div", { class: "kanban" });
        cols.forEach(function (c, ci) {
          var col = $("div", { class: "col" }, $("div", { class: "hint" }, c[0]));
          c[1].forEach(function (card, ri) {
            col.append($("div", { class: "card-mini", onclick: function () {
              var next = (ci + 1) % cols.length;
              c[1].splice(ri, 1); cols[next][1].push(card); paint();
            } }, card));
          });
          board.append(col);
        });
        host.append(board);
      }
      paint(); return;
    }

    if (d === "gantt") {
      ["研究", "设计", "开发"].forEach(function (n, i) {
        host.append($("div", { class: "hint" }, n));
        host.append($("div", { class: "gantt-bar", style: { width: (30 + i * 22) + "%", marginLeft: (i * 12) + "%" } }));
      });
      return;
    }

    if (d === "scheduler") {
      var sel = "10";
      function paint() {
        clear(host);
        var row = $("div", { style: { display: "flex", gap: "4px", overflow: "auto" } });
        ["09", "10", "11", "12"].forEach(function (h) {
          row.append($("button", { class: "ui-btn secondary" + (sel === h ? " on" : ""), onclick: function () { sel = h; paint(); } }, h + ":00"));
        });
        host.append($("div", { class: "hint" }, "Ada"), row);
      }
      paint(); return;
    }

    if (d === "masonry") {
      var box = $("div", { class: "masonry" });
      box.append($("div", { class: "t", style: { height: "70px" } }), $("div", { class: "t", style: { height: "110px" } }), $("div", { class: "t", style: { height: "90px" } }), $("div", { class: "t", style: { height: "50px" } }));
      clear(host).append(box); return;
    }

    if (d === "carousel") {
      var i = 0, slides = ["一", "二", "三"];
      function paint() {
        clear(host);
        host.append(cen([
          $("div", { class: "card-mini", style: { width: "80%", textAlign: "center" } }, "幻灯 " + slides[i]),
          $("div", { class: "ico-row" }, [
            $("button", { class: "ui-btn icon secondary", onclick: function () { i = (i + 2) % 3; paint(); } }, "‹"),
            $("button", { class: "ui-btn icon secondary", onclick: function () { i = (i + 1) % 3; paint(); } }, "›")
          ])
        ]));
      }
      paint(); return;
    }

    if (d === "gallery") {
      var i = 0;
      function paint() {
        clear(host);
        host.append($("div", { style: { height: "88px", background: "var(--fill-2)", border: "1px solid var(--line)", marginBottom: "6px" } }, " "));
        var row = $("div", { class: "ico-row" });
        [0, 1, 2, 3].forEach(function (n) {
          row.append($("button", { class: "thumb" + (n === i ? " on" : ""), onclick: function () { i = n; paint(); } }));
        });
        host.append(row);
      }
      paint(); return;
    }

    if (d === "tags") {
      if (k === "badge") {
        var b = $("button", { class: "ui-btn icon secondary" }); b.append(icon("inbox", 16));
        var wrap = $("div", { style: { position: "relative", display: "inline-block" } }, [b, $("span", { class: "chip", style: { position: "absolute", top: "-8px", right: "-10px" } }, "3")]);
        clear(host).append(cen([wrap])); return;
      }
      if (k === "chip" || k === "tag") {
        var show = true;
        function paint() {
          clear(host);
          if (show) {
            var c = $("span", { class: "chip" }, k === "tag" ? "设计" : "可关闭");
            if (k === "chip") {
              var x = $("span", { class: "x", onclick: function () { show = false; paint(); } }); x.append(icon("x", 10)); c.append(x);
            }
            host.append(cen([c]));
          } else host.append(cen([$("button", { class: "ui-btn text", onclick: function () { show = true; paint(); } }, "恢复")]));
        }
        paint(); return;
      }
      if (k === "filter") {
        var on = true;
        var c = $("button", { class: "chip", onclick: function () { on = !on; c.style.borderColor = on ? "var(--teal)" : "var(--line)"; c.textContent = on ? "已筛选" : "筛选"; } }, "已筛选");
        c.style.borderColor = "var(--teal)";
        clear(host).append(cen([c])); return;
      }
      var st = k === "status" ? [["运行中", "ok"], ["降级", "warn"], ["故障", "err"]] : [["IN PROGRESS", "info"]];
      st.forEach(function (x) {
        host.append($("div", { class: "status" }, [$("span", { class: "dot " + (x[1] === "ok" ? "" : x[1]) }), x[0]]));
      });
      return;
    }

    if (d === "feedback") {
      if (k === "toast") {
        clear(host).append(cen([$("button", { class: "ui-btn secondary", onclick: function () { toastIn(host, "已保存"); } }, "触发 Toast")])); return;
      }
      if (k === "snack") {
        var show = true;
        function paint() {
          clear(host);
          host.append($("button", { class: "ui-btn secondary", onclick: function () { show = true; paint(); } }, "删除"));
          if (show) host.append($("div", { class: "toast" }, [$("span", {}, "已删除 "), $("button", { class: "ui-btn text", onclick: function () { show = false; toastIn(host, "已撤销"); paint(); } }, "撤销")]));
        }
        paint(); return;
      }
      var cls = k === "alert" || k === "banner" ? "status-warn" : (k === "note" ? "status-info" : "status-err");
      var box = $("div", { class: "card-mini" }, [$("span", { class: cls }, k === "inline" ? "邮箱格式不正确" : (k === "banner" ? "系统维护 02:00" : (k === "note" ? "新评论" : "磁盘即将满")))]);
      if (k === "inline") clear(host).append($("input", { class: "field", value: "ada@" }), box);
      else if (k === "banner") { box.style.width = "100%"; clear(host).append(box); }
      else clear(host).append(box);
      return;
    }

    if (d === "loading") {
      if (k === "skel") { clear(host).append($("div", { class: "skel" }), $("div", { class: "skel" }), $("div", { class: "skel", style: { width: "60%" } })); return; }
      if (k === "shim") { clear(host).append($("div", { class: "skel shimmer" }), $("div", { class: "skel shimmer" })); return; }
      if (k === "bar" || k === "det") { clear(host).append(cen([$("div", { class: "prog" }, $("i", {})), $("div", { class: "hint" }, "42%")])); return; }
      if (k === "circ") { clear(host).append(cen([$("div", { class: "circ-p" }, $("span", {}, "72%"))])); return; }
      if (k === "indet") { clear(host).append(cen([$("div", { class: "indet-bar" }, $("i", {})), $("div", { class: "hint" }, "处理中")])); return; }
      clear(host).append(cen([$("div", { class: "spin" })])); return;
    }

    if (d === "empty") {
      var map = {
        empty: ["还没有项目", "创建", "ok"],
        error: ["加载失败", "重试", "err"],
        ok: ["提交成功", "返回", "ok"],
        "404": ["页面不存在", "回首页", "info"]
      }[k] || ["空", "继续", "info"];
      clear(host).append(cen([
        $("div", { class: map[2] === "ok" ? "status-ok" : (map[2] === "err" ? "status-err" : "status-info") }, map[0]),
        $("button", { class: "ui-btn solid", onclick: function () { toastIn(host, map[1]); } }, map[1])
      ])); return;
    }

    if (d === "layout") {
      var w = 42, items = ["首页", "文档", "设置"];
      function paint() {
        clear(host);
        if (k === "drag" || k === "reorder") {
          items.forEach(function (n, i) {
            var row = $("div", { class: "tree-row" });
            row.append(icon("grip", 12), document.createTextNode(" " + n));
            row.append($("button", { class: "ui-btn text", onclick: function () {
              if (i === 0) return; var t = items[i - 1]; items[i - 1] = items[i]; items[i] = t; paint();
            } }, "上移"));
            host.append(row);
          }); return;
        }
        var split = $("div", { class: "split", style: { height: "100%" } });
        var left = $("div", { class: "pane", style: { width: w + "%" } }, "侧栏");
        var gut = $("div", { class: "gutter" });
        var right = $("div", { class: "pane grow" }, "内容");
        gut.onmousedown = function (e) {
          var start = e.clientX, sw = w;
          function mv(ev) { w = Math.max(22, Math.min(70, sw + (ev.clientX - start) / 2)); paint(); }
          function up() { document.removeEventListener("mousemove", mv); document.removeEventListener("mouseup", up); }
          document.addEventListener("mousemove", mv); document.addEventListener("mouseup", up);
        };
        split.append(left, gut, right); host.append(split);
      }
      paint(); return;
    }

    if (d === "saas") {
      if (k === "palette" || k === "cmdmenu") {
        var cmds = ["New project", "Open file", "Settings"], qv = "";
        function paint() {
          clear(host);
          var inp = $("input", { class: "field", placeholder: "Search commands", value: qv, oninput: function (e) { qv = e.target.value; paint(); host.querySelector("input").focus(); } });
          host.append(inp);
          cmds.filter(function (c) { return c.toLowerCase().indexOf(qv.toLowerCase()) >= 0; }).forEach(function (c) {
            host.append($("button", { class: "list-item", onclick: function () { toastIn(host, c); } }, c));
          });
        }
        paint(); return;
      }
      if (k === "chat" || k === "prompt") {
        function paint() {
          clear(host);
          host.append($("div", { class: "bubble" }, "问我任何问题"));
          var row = $("div", { class: "ico-row", style: { marginTop: "auto" } });
          var inp = $("input", { class: "field", placeholder: "输入消息" });
          var send = $("button", { class: "ui-btn icon solid", onclick: function () { if (inp.value) { toastIn(host, "已发送"); inp.value = ""; } } });
          send.append(icon("send", 14)); row.append(inp, send); host.append(row);
        }
        paint(); return;
      }
      if (k === "bubble") {
        clear(host).append($("div", { class: "bubble" }, "模型回复"), $("div", { class: "bubble me" }, "用户消息")); return;
      }
      if (k === "conv") {
        [["设计系统", "昨天"], ["路由策略", "周一"]].forEach(function (x) {
          host.append($("button", { class: "list-item" }, x[0] + "  ·  " + x[1]));
        }); return;
      }
      if (k === "agent") {
        var st = 0, labs = ["Idle", "Thinking", "Running"];
        function paint() {
          clear(host).append(cen([
            $("span", { class: "dot " + (st === 2 ? "" : (st === 1 ? "warn" : "info")) }),
            $("span", { class: st === 2 ? "status-ok" : "status-warn" }, labs[st]),
            $("button", { class: "ui-btn secondary", onclick: function () { st = (st + 1) % 3; paint(); } }, "切换")
          ]));
        }
        paint(); return;
      }
      if (k === "tool") { clear(host).append($("div", { class: "card-mini" }, [$("strong", {}, "web.search"), $("div", { class: "hint" }, "q = openrouter")])); return; }
      if (k === "think") {
        var open = false;
        function paint() {
          clear(host);
          var tb = $("button", { class: "list-item", onclick: function () { open = !open; paint(); } });
          tb.append(icon(open ? "chevD" : "chevR", 12), document.createTextNode(" 思考过程"));
          host.append(tb);
          if (open) host.append($("div", { class: "hint" }, "先检索文档，再组织答案。"));
        }
        paint(); return;
      }
      if (k === "term" || k === "log") {
        clear(host).append($("div", { class: "code" }, k === "log" ? "12:01 INFO ready\n12:02 WARN retry" : "$ npm run dev\nready on :3000")); return;
      }
      if (k === "diff") {
        clear(host).append($("div", { class: "code" }, [$("div", { class: "add-line" }, "+ accent teal"), $("div", { class: "del-line" }, "- accent gray")])); return;
      }
      if (k === "md") { clear(host).append($("div", {}, [$("strong", {}, "标题"), $("div", { class: "hint" }, "一段 Markdown 预览")])); return; }
      if (k === "codeblock" || k === "snip") {
        var pre = $("div", { class: "code" }, "fetch('/v1')");
        var copy = $("button", { class: "copy", onclick: function () { toastIn(host, "已复制"); } }, "复制");
        clear(host).append($("div", { class: "hint" }, "ts"), copy, pre); return;
      }
      if (k === "suggest") {
        ["解释这段", "改成表格"].forEach(function (t) {
          host.append($("button", { class: "chip", onclick: function () { toastIn(host, t); } }, t));
        }); return;
      }
      if (k === "cite") {
        host.append($("button", { class: "chip", onclick: function () { toastIn(host, "打开来源"); } }, "src #12")); return;
      }
      if (k === "master") {
        var cur = 0, names = ["项目 A", "项目 B"];
        function paint() {
          clear(host);
          var split = $("div", { class: "split", style: { height: "100%" } });
          var left = $("div", { class: "pane", style: { width: "42%" } });
          names.forEach(function (n, i) {
            left.append($("button", { class: "list-item" + (i === cur ? " on" : ""), onclick: function () { cur = i; paint(); } }, n));
          });
          split.append(left, $("div", { class: "pane grow" }, names[cur] + " 详情"));
          host.append(split);
        }
        paint(); return;
      }
      if (k === "inspector") {
        var open = true;
        function paint() {
          clear(host);
          host.append($("button", { class: "list-item", onclick: function () { open = !open; paint(); } }, "布局"));
          if (open) host.append($("div", { class: "hint" }, "宽度 320"), $("input", { class: "field", value: "320" }));
        }
        paint(); return;
      }
      if (k === "filterbar") {
        clear(host).append($("div", { class: "ico-row" }, [
          $("button", { class: "ui-btn secondary" }, "状态"),
          $("button", { class: "ui-btn secondary" }, "时间")
        ])); return;
      }
      if (k === "facet") {
        var on = true;
        function paint() {
          clear(host);
          ["开源  12", "闭源  4"].forEach(function (t, i) {
            host.append($("label", { class: "tree-row" }, [$("input", { type: "checkbox", checked: i === 0 && on, onclick: function () { on = !on; } }), t]));
          });
        }
        paint(); return;
      }
      if (k === "query") {
        clear(host).append($("div", { class: "ico-row" }, [
          $("button", { class: "ui-btn secondary" }, "status"),
          $("button", { class: "ui-btn secondary" }, "="),
          $("input", { class: "field", value: "active", style: { width: "72px" } })
        ])); return;
      }
      clear(host).append(cen([$("div", { class: "hint" }, it.en)])); return;
    }

    if (d === "mobile") {
      var page = 0, revealed = false;
      function paint() {
        clear(host);
        var frame = $("div", { class: "phone-frame" });
        if (k === "safe") { frame.append($("div", { class: "safe-top" }), $("div", { class: "grow center hint" }, "内容避开刘海"), $("div", { class: "safe-bot" })); host.append(frame); return; }
        if (k === "navbar" || k === "large") {
          frame.append($("div", { class: "ico-row", style: { padding: "6px 8px" } }, [
            $("button", { class: "ui-btn icon ghost" }, icon("chevL", 14)),
            $("strong", { style: { fontSize: k === "large" ? "18px" : "13px" } }, "项目"),
            $("button", { class: "ui-btn text" }, "编辑")
          ]), $("div", { class: "grow hint", style: { padding: "8px" } }, "列表"));
          host.append(frame); return;
        }
        if (k === "dots" || k === "cards") {
          frame.append($("div", { class: "grow center" }, "卡片 " + (page + 1)));
          var dots = $("div", { class: "ico-row", style: { justifyContent: "center", padding: "6px" } });
          [0, 1, 2].forEach(function (n) {
            dots.append($("button", { class: "thumb" + (n === page ? " on" : ""), onclick: function () { page = n; paint(); } }));
          });
          if (k === "cards") frame.append($("div", { class: "ico-row", style: { justifyContent: "center" } }, [
            $("button", { class: "ui-btn secondary", onclick: function () { toastIn(host, "跳过"); page = (page + 1) % 3; paint(); } }, "跳过"),
            $("button", { class: "ui-btn solid", onclick: function () { toastIn(host, "喜欢"); page = (page + 1) % 3; paint(); } }, "喜欢")
          ]));
          frame.append(dots); host.append(frame); return;
        }
        if (k === "pull") {
          frame.append($("button", { class: "list-item", onclick: function () { toastIn(host, "已刷新"); } }, "下拉刷新（点击模拟）"));
          frame.append($("div", { class: "hint" }, "条目一"), $("div", { class: "hint" }, "条目二"));
          host.append(frame); return;
        }
        if (k === "swipe") {
          var row = $("div", { style: { display: "flex", height: "40px" } });
          row.append($("div", { class: "grow card-mini", onclick: function () { revealed = !revealed; paint(); } }, "左滑删除"));
          if (revealed) row.append($("button", { class: "ui-btn danger", onclick: function () { toastIn(host, "已删除"); revealed = false; paint(); } }, "删除"));
          frame.append(row); host.append(frame); return;
        }
        var hold;
        frame.append($("div", { class: "card-mini", onmousedown: function () { hold = setTimeout(function () { toastIn(host, "长按菜单"); }, 480); }, onmouseup: function () { clearTimeout(hold); }, onmouseleave: function () { clearTimeout(hold); } }, "按住约 0.5 秒"));
        host.append(frame);
      }
      paint(); return;
    }

    if (d === "desktop") {
      var tab = 0, edge = "right", pos = { x: 24, y: 28 };
      function paint() {
        clear(host);
        if (k === "three" || k === "activity" || k === "explorer") {
          var split = $("div", { class: "split", style: { height: "100%" } });
          var rail = $("div", { class: "rail" });
          ["grid", "search", "settings"].forEach(function (n, i) {
            var b = $("button", { class: i === tab ? "on" : "", onclick: function () { tab = i; paint(); } });
            b.append(icon(n, 14)); rail.append(b);
          });
          split.append(rail);
          if (k !== "activity") split.append($("div", { class: "pane", style: { width: "36%" } }, ["src", "App.tsx", "styles.css"][tab] || "src"));
          split.append($("div", { class: "pane grow" }, "编辑器"));
          if (k === "three") split.append($("div", { class: "pane", style: { width: "28%" } }, "检查器"));
          host.append(split); return;
        }
        if (k === "edtabs") {
          ["App.tsx", "main.ts"].forEach(function (n, i) {
            host.append($("button", { class: "tab" + (i === tab ? " active" : ""), onclick: function () { tab = i; paint(); } }, n));
          });
          host.append($("div", { class: "code grow" }, "// " + ["App.tsx", "main.ts"][tab])); return;
        }
        if (k === "edpane") { clear(host).append($("div", { class: "code", style: { height: "100%" } }, "function render() {}")); return; }
        if (k === "prop") { clear(host).append($("div", { class: "hint" }, "宽度"), $("input", { class: "field", value: "240" }), $("div", { class: "hint" }, "可见"), $("input", { type: "checkbox", checked: true })); return; }
        if (k === "status") { clear(host).append($("div", { class: "ico-row", style: { marginTop: "auto" } }, [$("span", { class: "status-ok" }, "main"), $("span", { class: "hint" }, "0 问题"), $("span", { class: "hint" }, "UTF-8")])); return; }
        if (k === "cmdbar") {
          [["file", "打开"], ["copy", "复制"], ["trash", "删除"]].forEach(function (p) {
            var b = $("button", { class: "ui-btn secondary", onclick: function () { toastIn(host, p[1]); } });
            b.append(rowI(p[0], p[1])); host.append(b);
          }); return;
        }
        if (k === "dock") {
          host.append($("div", { class: "hint" }, "停靠：" + edge));
          ["left", "right", "bottom"].forEach(function (e) {
            host.append($("button", { class: "ui-btn secondary" + (edge === e ? " on" : ""), onclick: function () { edge = e; paint(); } }, e));
          }); return;
        }
        var pan = $("div", { class: "card-mini", style: { position: "absolute", left: pos.x + "px", top: pos.y + "px", width: "120px", cursor: "grab" } }, "拖动手柄");
        pan.onmousedown = function (e) {
          var sx = e.clientX, sy = e.clientY, ox = pos.x, oy = pos.y;
          function mv(ev) { pos = { x: Math.max(0, ox + ev.clientX - sx), y: Math.max(0, oy + ev.clientY - sy) }; pan.style.left = pos.x + "px"; pan.style.top = pos.y + "px"; }
          function up() { document.removeEventListener("mousemove", mv); document.removeEventListener("mouseup", up); }
          document.addEventListener("mousemove", mv); document.addEventListener("mouseup", up);
        };
        clear(host).append(pan);
      }
      paint(); return;
    }

    clear(host).append(cen([$("div", { class: "hint" }, it.en)]));
  }
