/* 재기 실험대 — 자로 길이 재기, 저울(양팔·용수철)로 무게 견주기·읽기, 눈금 그릇으로 들이 재기, 알맞은 단위 고르기(2~6학년 수학 측정, 3학년 과학 물체의 무게).
 *
 * 모드(o.mode)
 * | 모드 | 하는 일 | 상태 | target |
 * | --- | --- | --- | --- |
 * | 'ruler'(기본) | 자 위 물체 길이를 읽어 쓴다 / o.make면 띠 끝을 끌어 길이를 만든다 / o.tiles면 단위 조각(클립 등)으로 잰다 | { ans, mm? } · make: { len } | { read: 길이 } · { make: 길이 } (cm, tiles면 조각 수) |
 * | 'scale' | o.kind 'balance'(기본): 양팔저울 — 왼쪽 물체, 오른쪽에 단위 추를 −/+로 올린다(o.unit) · 'spring': 용수철저울 눈금 읽기 | balance { n } · spring { hung, ans } | balance { balance:true } · { tilt:'left'|'right' }(그쪽이 내려가게) · spring { read: g } |
 * | 'volume' | 눈금 그릇 1~3개. 첫 그릇에 물을 붓고 덜어 만든다(o.pour) 또는 눈금을 읽어 쓴다 | { v:[mL…], ans } | { fill: mL }(첫 그릇) · { read: mL } |
 * | 'unit' | 물건마다 알맞은 단위를 고른다 | { picks:[번호|null…] } | { units:[번호…] } |
 * 모든 모드 공통: o.ask = { q, choices[], why?[] } → 상태 pick, target { pick } / o.askNum = { q, unit?, tol? } → 상태 num, target { num } (다른 target과 함께 써도 된다)
 *
 * 옵션
 * | 옵션 | 모드 | 뜻 |
 * | --- | --- | --- |
 * | max | ruler(cm, 기본 15) · volume(그릇 기본 들이 mL) · spring(눈금 끝 g, 기본 500) | 눈금 끝 |
 * | mm | ruler | 1 mm 작은 눈금(기본 true) |
 * | object | ruler | { name, len(cm), start(cm, 기본 0 — 0이 아닌 곳에서 시작하면 끝 눈금을 그대로 읽는 실수를 본다) } |
 * | make, step, from | ruler | 띠 만들기, 한 칸(기본 mm면 0.1, 아니면 1), 띠 시작 눈금 |
 * | tiles | ruler | { name, len(cm) } — 자 대신 같은 길이 조각을 이어 붙여 센다 |
 * | split | ruler·volume | 답을 두 칸으로(ruler: ○ cm ○ mm, volume: ○ L ○ mL) — 상태 ans는 cm / mL 하나의 수 |
 * | left, right, unit, maxUnits | balance | left/right: [{ name, w }] 저울판 위 물체(right는 고정 물체), unit: { name, w } 오른쪽에 올릴 추 |
 * | objects | spring | [{ name, w(g) }] — 둘 이상이면 매달 물체를 고른다 |
 * | step, minor | spring·volume | 큰 눈금 간격, 큰 눈금 사이 작은 칸 수 |
 * | beakers | volume | [{ v, max?, w?(폭 0.6~1.6 — 폭이 다르면 높이로만 견줄 수 없다), label?, ticks?(false면 눈금 없음) }] |
 * | pour, pourStep | volume | 첫 그릇 붓기·덜기 단추, 한 번에 붓는 양(기본 작은 칸 하나) |
 * | showAmount | volume·balance | 지금 양·무게 읽기 값(revealAfterCheck면 맞힌 확인 뒤에만) |
 * | things, units | unit | things: [{ name, amount? }], units: 단위 이름 배열(예 ['mm','cm','m','km']) |
 * | readOnly, revealAfterCheck, print | 모두 | 조작 잠금 / 확인 전 읽기 값 숨김 / 활동지 흑백(읽기 값·조작 칸 없음) |
 * 예) { mode:'ruler', object:{ name:'연필', len:7.5, start:2 }, split:true } + target { read:7.5 }
 *     { mode:'scale', left:[{ name:'지우개', w:6 }], unit:{ name:'바둑돌', w:1 } } + target { balance:true }
 *     { mode:'volume', pour:true, beakers:[{ v:0, max:1000 }], step:100, minor:2 } + target { fill:700 }
 * 키보드: 답 칸 ↑↓, 띠 끝·물 붓기 −/+ 단추(띠 끝은 ←→, PageUp/PageDown 1 cm), 단위 고르기 방향키.
 */
(function (K) {
  'use strict';
  // ---------- 공통 도우미(교구 파일마다 같은 모양) ----------
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  const josa = (w, a, b) => { const s = String(w); const c = s.charCodeAt(s.length - 1); if (c >= 0xAC00 && c <= 0xD7A3) return s + ((c - 0xAC00) % 28 ? a : b); return s + (/[013678]$/.test(s) ? a : b); };
  const r2 = (v) => Math.round(v * 100) / 100;
  const P = 'ms';
  function ensureStyle() {
    if (document.getElementById(`${P}-style`)) return;
    const s = document.createElement('style'); s.id = `${P}-style`;
    s.textContent = `
.${P}-panel{display:grid;gap:10px;margin-top:10px}
.${P}-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.${P}-q{margin:0;font-weight:700;line-height:1.45;word-break:keep-all}
.${P}-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}
.${P}-picks .pl-btn{white-space:normal;line-height:1.3;word-break:keep-all;min-height:44px}
.${P}-in{min-height:44px;width:5.5em;box-sizing:border-box;padding:6px 10px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.1em;font-weight:800;text-align:center;color:#275C46;background:#fff}
.${P}-units{display:grid;gap:10px}
.${P}-unit{display:grid;gap:6px;padding:8px 10px;border-radius:14px;background:#FFFDF9;border:1px solid rgba(61,53,46,.18)}
.${P}-unit .${P}-picks{grid-template-columns:repeat(auto-fit,minmax(64px,1fr))}
@media print{.${P}-panel{display:none}.${P}-unit{background:#fff;border-color:#000}.${P}-unit .pl-btn{box-shadow:none;border:1px solid #000;background:#fff}}
`;
    document.head.appendChild(s);
  }
  const h = (tag, attrs, parent, text) => {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  };
  const button = (parent, html, label, onClick) => {
    const b = h('button', { type: 'button', class: 'pl-btn pl-btn--small', tabindex: '0', 'aria-label': label }, parent);
    b.innerHTML = html; b.addEventListener('click', onClick); return b;
  };
  function pickRow(parent, label, choices, onPick) {
    const row = h('div', { class: `${P}-picks`, role: 'radiogroup', 'aria-label': label }, parent);
    const btns = choices.map((text, i) => {
      const b = h('button', { type: 'button', class: 'pl-btn pl-btn--small', role: 'radio', 'aria-checked': 'false', tabindex: '0' }, row, text);
      b.addEventListener('click', () => onPick(i));
      b.addEventListener('keydown', (e) => {
        const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) return;
        e.preventDefault(); const j = (i + d + btns.length) % btns.length; onPick(j); btns[j].focus();
      });
      return b;
    });
    return (k) => btns.forEach((b, i) => b.setAttribute('aria-checked', String(i === k)));
  }
  function numBox(parent, label, onSet, decimal) {
    const inp = h('input', { class: `${P}-in`, type: 'text', inputmode: decimal ? 'decimal' : 'numeric', autocomplete: 'off', 'aria-label': label, tabindex: '0' }, parent);
    inp.addEventListener('input', () => { inp.value = inp.value.replace(decimal ? /[^0-9.]/g : /[^0-9]/g, '').slice(0, 6); onSet(inp.value === '' || inp.value === '.' ? null : Number(inp.value), true); });
    inp.addEventListener('keydown', (e) => { const d = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!d) return; e.preventDefault(); onSet(Math.max(0, r2((Number(inp.value) || 0) + d * (decimal ? 0.1 : 1)))); });
    return inp;
  }
  function askPanel(panel, o, log) {
    const a = { pick: null, num: null, setPick: null, numIn: null };
    if (o.ask && Array.isArray(o.ask.choices)) {
      h('p', { class: `${P}-q` }, panel, o.ask.q || '알맞은 것을 고르세요.');
      a.setPick = pickRow(panel, o.ask.q || '고르기', o.ask.choices, (i) => { a.pick = i; a.setPick(i); log(); K.announce(o.ask.choices[i]); });
    }
    if (o.askNum) {
      const row = h('div', { class: `${P}-row` }, panel);
      h('span', { class: `${P}-q` }, row, o.askNum.q || '수를 쓰세요.');
      a.numIn = numBox(row, o.askNum.q || '답', (v, typing) => { a.num = v; if (!typing) a.numIn.value = v == null ? '' : v; log(); }, true);
      if (o.askNum.unit) h('span', { class: `${P}-q` }, row, o.askNum.unit);
    }
    a.set = (s) => {
      if (s.pick !== undefined) { a.pick = s.pick; if (a.setPick) a.setPick(a.pick); }
      if (s.num !== undefined) { a.num = s.num; if (a.numIn) a.numIn.value = a.num == null ? '' : a.num; }
    };
    return a;
  }
  function judgeAsk(t, s, o) {
    if (t.pick != null) {
      if (s.pick == null) return { correct: false, incomplete: true, feedback: '아래에서 알맞은 것을 하나 골라요.' };
      if (s.pick !== t.pick) return { correct: false, feedback: (o.ask && o.ask.why && o.ask.why[s.pick]) || '고른 것이 맞지 않아요. 교구를 다시 살펴보고 골라요.', hint: '보기마다 교구에서 그것이 맞는지 하나씩 확인해요.', h3: (o.ask && o.ask.explain) || '교구에서 묻는 것을 직접 재거나 견주어 본 뒤 골라요.' };
    }
    if (t.num != null) {
      if (s.num == null) return { correct: false, incomplete: true, feedback: '답 칸에 수를 써요.' };
      const tol = (o.askNum && o.askNum.tol) || 1e-6;
      if (Math.abs(s.num - t.num) > tol) return { correct: false, feedback: s.num > t.num ? '쓴 수가 너무 커요. 다시 재어 봐요.' : '쓴 수가 너무 작아요. 다시 재어 봐요.', hint: '눈금 한 칸이 얼마인지 먼저 알아본 뒤 세어요.', h3: (o.askNum && o.askNum.explain) || '큰 눈금까지 먼저 읽고, 남은 작은 칸을 더해요.' };
    }
    return null;
  }
  const fmt = (v) => String(r2(v));

  K.registerTool('measure', {
    name: '재기 실험대',
    create(box, o, kit) {
      ensureStyle();
      const mode = ['scale', 'volume', 'unit'].includes(o.mode) ? o.mode : 'ruler';
      const print = !!o.print; const ro = !!o.readOnly || print;
      let revealed = false;
      const showVals = () => !print && (!o.revealAfterCheck || revealed);
      let log = () => {};
      const panel = print ? null : document.createElement('div');
      if (panel) panel.className = `${P}-panel`;
      let ask = { pick: null, num: null, set() {} };
      const M = {};
      const changed = () => { revealed = false; M.paint(); log(); };
      // 답 칸(읽기 문항): split이면 두 칸
      function answerBox(label, unitA, unitB, toValue, fromValue) {
        const a = { v: null, a: null, b: null };
        if (!panel || ro) { a.set = (v) => { a.v = v; }; return a; }
        const row = h('div', { class: `${P}-row` }, panel);
        h('span', { class: `${P}-q` }, row, label);
        if (unitB) {
          const ia = numBox(row, `${label} ${unitA}`, (v, typing) => { a.a = v; a.v = toValue(a.a, a.b); if (!typing) ia.value = v == null ? '' : v; log(); }, false);
          h('span', { class: `${P}-q` }, row, unitA);
          const ib = numBox(row, `${label} ${unitB}`, (v, typing) => { a.b = v; a.v = toValue(a.a, a.b); if (!typing) ib.value = v == null ? '' : v; log(); }, false);
          h('span', { class: `${P}-q` }, row, unitB);
          a.set = (v) => { a.v = v; const p = v == null ? [null, null] : fromValue(v); a.a = p[0]; a.b = p[1]; ia.value = a.a == null ? '' : a.a; ib.value = a.b == null ? '' : a.b; };
        } else {
          const ia = numBox(row, label, (v, typing) => { a.v = v; if (!typing) ia.value = v == null ? '' : v; log(); }, true);
          h('span', { class: `${P}-q` }, row, unitA);
          a.set = (v) => { a.v = v; ia.value = v == null ? '' : v; };
        }
        return a;
      }
      // 숫자 단추 묶음(− 값 +)
      function stepper(parent, label, onStep) {
        const row = h('div', { class: `${P}-row`, role: 'group', 'aria-label': label }, parent);
        h('span', { class: `${P}-q` }, row, label);
        button(row, '<i class="fi fi-rr-minus" aria-hidden="true"></i>', `${label} 줄이기`, () => onStep(-1));
        button(row, '<i class="fi fi-rr-plus" aria-hidden="true"></i>', `${label} 늘리기`, () => onStep(1));
        return row;
      }

      // ================= 자 =================
      if (mode === 'ruler') {
        const tiles = o.tiles && o.tiles.len > 0 ? o.tiles : null;
        const max = K.clamp(o.max || 15, 3, 30); const mm = o.mm !== false && !tiles;
        const W = 640; const H = 260; const X0 = 40; const PX = (W - 80) / max;
        // 활동지 그림은 칸이 좁아 그대로면 눈금 숫자가 너무 작다 — 자가 짧을수록 더 키운다
        const FS = (print ? 1.5 : 1) * (max <= 10 ? 1.2 : max <= 15 ? 1.05 : 1);
        const obj = Object.assign({ name: '물체', len: 5, start: 0 }, o.object || {});
        const make = !!o.make; const step = o.step || (mm ? 0.1 : 1); const from = o.from || 0;
        const st = kit.stage(box, { viewBox: [W, H], label: make ? `자와 종이띠. 띠의 끝을 끌어 길이를 만들어요. 자는 0부터 ${max} cm까지예요.` : tiles ? `${josa(obj.name, '과', '와')} ${tiles.name}. ${josa(tiles.name, '을', '를')} 이어 붙여 길이를 재요.` : `${josa(obj.name, '과', '와')} 자. 자는 0부터 ${max} cm까지예요.` });
        kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 18 }, color: 'cream', depth: 1, texture: !print, fill: print ? '#fff' : '#FBF6EC' });
        const RL = st.layer('ruler'); const OL = st.layer('obj');
        const RY = 150;
        if (!tiles) {
          kit.piece(st, RL, { shape: { type: 'rect', x: X0 - 22, y: RY, w: max * PX + 44, h: 70 + (FS - 1) * 20, rx: 8 }, color: 'buttercup', depth: 2 });
          for (let i = 0; i <= max * (mm ? 10 : 1); i++) {
            const cm = mm ? i / 10 : i; const x = X0 + cm * PX;
            const big = mm ? i % 10 === 0 : true; const mid = mm && i % 5 === 0 && !big;
            kit.el('line', { x1: x, y1: RY, x2: x, y2: RY + (big ? 24 : mid ? 16 : 9), stroke: '#3D352E', 'stroke-width': big ? 2 : 1 }, RL);
            if (big && (max <= 20 || cm % 2 === 0)) kit.el('text', { x, y: RY + 40 + 6 * FS, 'text-anchor': 'middle', 'font-size': Math.round(16 * FS), class: 'pk-text', fill: '#3D352E' }, RL).textContent = String(cm);
          }
          kit.el('text', { x: X0 + max * PX + 12, y: RY + 64 + (FS - 1) * 20, 'text-anchor': 'end', 'font-size': Math.round(13 * FS), class: 'pk-text', fill: '#544B42' }, RL).textContent = 'cm';
        }
        if (make) {
          const strip = kit.piece(st, OL, { shape: { type: 'rect', x: 0, y: 0, w: 1, h: 34, rx: 0 }, color: 'mint', depth: 1, flat: true });
          kit.transform(strip.g, { x: X0 + from * PX, y: RY - 44, sx: 1, sy: 1 });
          const handle = kit.el('g', { class: 'pk-draggable', tabindex: ro ? null : '0', role: 'slider', 'aria-label': '띠 끝. 왼쪽 오른쪽 방향키로 길이를 바꿔요.', 'aria-valuemin': '0', 'aria-valuemax': String(max) }, OL);
          kit.el('rect', { x: -24, y: -32, width: 48, height: 64, class: 'pk-hit' }, handle);
          kit.piece(st, handle, { shape: { type: 'rect', x: -7, y: -26, w: 14, h: 52, rx: 6 }, color: 'peach', depth: 2 });
          const lenTxt = kit.el('text', { x: W / 2, y: 52, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: '#275C46' }, OL);
          let len = Math.min(from + step * 3, max) - from;
          const setLen = (v) => { len = K.clamp(Math.round(v / step) * step, 0, max - from); len = r2(len); M.paint(); };
          M.paint = () => {
            kit.transform(strip.g, { sx: Math.max(0.01, len * PX), sy: 1 });
            kit.transform(handle, { x: X0 + (from + len) * PX, y: RY - 27 });
            handle.setAttribute('aria-valuenow', String(len)); handle.setAttribute('aria-valuetext', '띠 끝');
            lenTxt.textContent = showVals() && o.showAmount !== false ? `띠 길이 ${fmt(len)} cm` : '';
          };
          if (!ro) {
            let drag = null;
            handle.addEventListener('pointerdown', (e) => { e.preventDefault(); handle.setPointerCapture(e.pointerId); drag = true; });
            handle.addEventListener('pointermove', (e) => { if (!drag) return; const p = st.point(e); setLen((p.x - X0) / PX - from); });
            const end = () => { if (!drag) return; drag = null; changed(); kit.tick(); };
            handle.addEventListener('pointerup', end); handle.addEventListener('pointercancel', end);
            handle.addEventListener('keydown', (e) => {
              const d = { ArrowRight: step, ArrowUp: step, ArrowLeft: -step, ArrowDown: -step, PageUp: 1, PageDown: -1 }[e.key];
              if (!d) return; e.preventDefault(); setLen(len + d); changed();
            });
          }
          M.state = () => ({ len });
          M.set = (s) => { if (s.len != null) setLen(s.len); };
          M.judge = (t) => {
            if (t.make == null) return null;
            if (Math.abs(len - t.make) < 1e-6) return null;
            if (from && Math.abs(from + len - t.make) < 1e-6) return { correct: false, feedback: `띠는 ${from} 눈금에서 시작해요. 끝 눈금이 아니라 시작에서 끝까지의 칸을 세요.`, hint: '끝 눈금에서 시작 눈금을 빼면 길이예요.', h3: `${from}에서 시작했으니 끝은 ${fmt(from + t.make)} 눈금에 와야 해요.` };
            return { correct: false, feedback: len > t.make ? '띠가 너무 길어요.' : '띠가 너무 짧아요.', hint: mm ? '큰 눈금 한 칸은 1 cm, 작은 눈금 한 칸은 1 mm예요.' : '눈금 한 칸은 1 cm예요.', h3: `${fmt(t.make)} cm는 큰 눈금 ${Math.floor(t.make)}칸${mm && t.make % 1 ? `과 작은 눈금 ${Math.round((t.make % 1) * 10)}칸` : ''}이에요.` };
          };
          M.solve = (t) => { if (t.make != null) setLen(t.make); };
          // 흔한 실수: 띠가 0이 아닌 곳에서 시작해도 끝을 목표 눈금에 맞춘다(아니면 한 칸 더 길게)
          M.wrong = (t) => (t.make == null ? null : { len: from && t.make - from > 0 ? r2(t.make - from) : r2(Math.min(t.make + 1, max - from) === t.make ? t.make - 1 : Math.min(t.make + 1, max - from)) });
          M.hint1 = () => '띠의 시작 눈금부터 끝까지 큰 눈금 칸을 먼저 세고, 남은 작은 눈금을 더해요.';
          M.dist = (a, b) => Math.abs((a.len || 0) - (b.len || 0)) / step;
        } else {
          // 물체
          const oy = tiles ? 96 : RY - 50;
          const ox = X0 + (tiles ? 0 : obj.start) * PX;
          const ow = obj.len * PX;
          kit.piece(st, OL, { shape: { type: 'rect', x: ox, y: oy, w: ow, h: 34, rx: 10 }, color: 'peach', depth: 2, label: obj.name });
          kit.el('text', { x: ox + ow / 2, y: oy + 17 + 6 * FS, 'text-anchor': 'middle', 'font-size': Math.round(16 * FS), class: 'pk-text', fill: '#6E3B21' }, OL).textContent = obj.name;
          if (!tiles) {
            for (const x of [ox, ox + ow]) kit.el('line', { x1: x, y1: oy - 6, x2: x, y2: RY, stroke: '#702830', 'stroke-width': 1.5, 'stroke-dasharray': '4 3' }, OL);
          } else {
            const tw = tiles.len * PX; const n = Math.ceil(obj.len / tiles.len - 1e-9);
            for (let i = 0; i < n; i++) {
              kit.piece(st, OL, { shape: { type: 'rect', x: ox + i * tw + 2, y: oy + 50, w: tw - 4, h: 26, rx: 8 }, color: 'sky', depth: 1 });
              if (!print) kit.el('text', { x: ox + i * tw + tw / 2, y: oy + 69, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#204C5A' }, OL).textContent = tiles.name;
            }
          }
          const split = !!o.split && mm;
          const ans = answerBox(tiles ? `${tiles.name} 몇 개?` : '길이', tiles ? '개' : 'cm', split ? 'mm' : null, (a, b) => (a == null && b == null ? null : r2((a || 0) + (b || 0) / 10)), (v) => [Math.floor(v + 1e-9), Math.round((v - Math.floor(v + 1e-9)) * 10)]);
          M.paint = () => {};
          M.state = () => ({ ans: ans.v });
          M.set = (s) => { if (s.ans !== undefined) ans.set(s.ans); };
          M.judge = (t) => {
            if (t.read == null) return null;
            if (ans.v == null) return { correct: false, incomplete: true, feedback: '잰 길이를 답 칸에 써요.' };
            if (Math.abs(ans.v - t.read) < 1e-6) return null;
            if (!tiles && obj.start && Math.abs(ans.v - (obj.start + obj.len)) < 1e-6) return { correct: false, feedback: `${josa(obj.name, '은', '는')} 0이 아니라 ${obj.start} 눈금에서 시작해요. 끝 눈금을 그대로 읽으면 안 돼요.`, hint: '시작 눈금에서 끝 눈금까지 큰 눈금이 몇 칸인지 세어요.', h3: `끝 눈금 ${fmt(obj.start + obj.len)}에서 시작 눈금 ${josa(obj.start, '을', '를')} 빼요.` };
            if (!tiles && mm && Math.abs(ans.v * 10 - t.read) < 1e-6) return { correct: false, feedback: '단위를 확인해요. cm로 써야 하는데 mm로 센 수를 썼어요.', hint: '1 cm = 10 mm예요.', h3: `${t.read * 10} mm는 ${fmt(t.read)} cm예요.` };
            return { correct: false, feedback: ans.v > t.read ? '잰 길이가 너무 길어요. 다시 세어 봐요.' : '잰 길이가 너무 짧아요. 다시 세어 봐요.', hint: tiles ? `${josa(tiles.name, '을', '를')} 빈틈없이 이어 붙인 수를 세요. 끝이 남으면 '약'이라고 해요.` : mm ? '큰 눈금(cm)을 먼저 세고 작은 눈금(mm)을 더해요.' : '눈금 한 칸은 1 cm예요.', h3: tiles ? `${josa(tiles.name, '이', '가')} ${fmt(t.read)}개 들어가요.` : `시작에서 큰 눈금 ${Math.floor(t.read)}칸${mm && t.read % 1 ? `, 작은 눈금 ${Math.round((t.read % 1) * 10)}칸` : ''}이에요.` };
          };
          M.solve = (t) => { if (t.read != null) ans.set(t.read); };
          M.wrong = (t) => (t.read == null ? null : { ans: !tiles && obj.start ? r2(obj.start + obj.len) : r2(t.read + 1) });
          M.hint1 = () => (tiles ? '단위 조각을 빈틈없이 이어 붙여 몇 번 들어가는지 세어요.' : obj.start ? '물체가 어느 눈금에서 시작하는지 먼저 보고, 시작에서 끝까지 칸을 세어요.' : '물체의 한쪽 끝을 0에 맞추고, 다른 쪽 끝의 눈금을 읽어요.');
          M.dist = (a, b) => (a.ans === b.ans ? 0 : Math.abs((a.ans || 0) - (b.ans || 0)) / (mm ? 0.1 : 1));
        }
      }

      // ================= 저울 =================
      if (mode === 'scale') {
        const kind = o.kind === 'spring' ? 'spring' : 'balance';
        if (kind === 'balance') {
          const W = 640; const H = 340; const CX = 320; const CY = 120; const ARM = 210;
          const left = Array.isArray(o.left) ? o.left : [{ name: '물체', w: 5 }];
          const right = Array.isArray(o.right) ? o.right : [];
          const unit = o.unit && o.unit.w > 0 ? o.unit : null;
          const maxU = o.maxUnits || 20;
          const st = kit.stage(box, { viewBox: [W, H], label: `양팔저울. 왼쪽에 ${left.map((x) => x.name).join(', ')}${right.length ? `, 오른쪽에 ${right.map((x) => x.name).join(', ')}` : ''}${unit ? `이 있어요. 오른쪽에 ${josa(unit.name, '을', '를')} 올려 수평을 잡아요.` : '이 있어요.'}` });
          kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 18 }, color: 'cream', depth: 1, texture: !print, fill: print ? '#fff' : '#FBF6EC' });
          const base = st.layer('base');
          kit.piece(st, base, { shape: { type: 'poly', points: `${CX - 18},${CY} ${CX + 18},${CY} ${CX + 40},300 ${CX - 40},300` }, color: 'lavender', depth: 2 });
          kit.piece(st, base, { shape: { type: 'rect', x: CX - 90, y: 296, w: 180, h: 18, rx: 6 }, color: 'lavender', depth: 2 });
          const beam = kit.el('g', null, st.layer('beam'));
          kit.piece(st, beam, { shape: { type: 'rect', x: -ARM - 10, y: -7, w: 2 * ARM + 20, h: 14, rx: 7 }, color: 'peach', depth: 2 });
          kit.piece(st, beam, { shape: { type: 'poly', points: '0,-14 7,0 -7,0' }, color: 'ink', depth: 0, flat: true });
          const pan = (side) => {
            const g = kit.el('g', null, st.layer('pans'));
            kit.el('line', { x1: 0, y1: 0, x2: -60, y2: 92, stroke: '#544B42', 'stroke-width': 2 }, g);
            kit.el('line', { x1: 0, y1: 0, x2: 60, y2: 92, stroke: '#544B42', 'stroke-width': 2 }, g);
            kit.piece(st, g, { shape: { type: 'path', d: 'M-80 92 L80 92 L64 108 L-64 108 Z' }, color: side ? 'sky' : 'mint', depth: 2 });
            const items = kit.el('g', null, g);
            return { g, items };
          };
          const PLft = pan(0); const PRt = pan(1);
          const drawObjs = (p, list, extra) => {
            list.forEach((x, i) => {
              const w = Math.min(150, 26 + String(x.name).length * 16); const yy = 58 - i * 34;
              kit.piece(st, p.items, { shape: { type: 'rect', x: -w / 2 + (i % 2 ? 8 : -8), y: yy, w, h: 32, rx: 8 }, color: 'buttercup', depth: 1 });
              kit.el('text', { x: (i % 2 ? 8 : -8), y: yy + 22, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#6E530F' }, p.items).textContent = x.name;
            });
            return extra;
          };
          drawObjs(PLft, left); drawObjs(PRt, right);
          // 추: 미리 maxU개 만들어 두고 보이기만 바꾼다
          const tokens = [];
          if (unit) for (let i = 0; i < maxU; i++) {
            const col = i % 7; const row = Math.floor(i / 7);
            const t = kit.piece(st, PRt.items, { shape: { type: 'circle', r: 9, cx: -54 + col * 18, cy: 82 - row * 17 - (right.length ? 34 * right.length : 0) }, color: 'ink', depth: 1 });
            t.g.setAttribute('display', 'none'); tokens.push(t.g);
          }
          const readL = kit.el('text', { x: 110, y: 40, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: '#275C46' }, st.layer('read'));
          const readR = kit.el('text', { x: 530, y: 40, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: '#204C5A' }, st.layer('read'));
          let n = 0; let ang = 0; let stop = null;
          const sum = (l) => l.reduce((s, x) => s + (Number(x.w) || 0), 0);
          const tot = () => [sum(left), sum(right) + (unit ? n * unit.w : 0)];
          const tiltOf = () => { const [a, b] = tot(); const d = b - a; return d === 0 ? 0 : Math.sign(d) * Math.min(14, 5 + (9 * Math.abs(d)) / Math.max(a, b, 1)); };
          const placeAt = (a) => {
            ang = a; kit.transform(beam, { x: CX, y: CY, r: a });
            const t = (a * Math.PI) / 180;
            kit.transform(PLft.g, { x: CX - ARM * Math.cos(t), y: CY - ARM * Math.sin(t) });
            kit.transform(PRt.g, { x: CX + ARM * Math.cos(t), y: CY + ARM * Math.sin(t) });
          };
          placeAt(0);
          if (panel && unit && !ro) stepper(panel, `오른쪽 ${unit.name}`, (d) => { n = K.clamp(n + d, 0, maxU); changed(); kit.tick(); kit.announce(`${unit.name} ${n}개`); });
          M.paint = () => {
            tokens.forEach((g, i) => g.setAttribute('display', i < n ? 'inline' : 'none'));
            const to = tiltOf();
            if (stop) stop();
            if (print) placeAt(to); else stop = kit.spring(ang, to, { onUpdate: placeAt });
            const show = o.showAmount && showVals();
            const [a, b] = tot(); const u = o.weightUnit || 'g';
            readL.textContent = show ? `${a} ${u}` : ''; readR.textContent = show ? `${b} ${u}` : '';
          };
          M.state = () => (unit ? { n } : {});
          M.set = (s) => { if (s.n != null && unit) n = K.clamp(Math.round(s.n), 0, maxU); };
          const need = () => (unit ? (sum(left) - sum(right)) / unit.w : 0);
          M.judge = (t) => {
            const [a, b] = tot();
            if (t.balance) {
              if (a === b) return null;
              return { correct: false, feedback: a > b ? '왼쪽이 아직 내려가 있어요. 왼쪽이 더 무거워요.' : '오른쪽이 내려갔어요. 오른쪽이 더 무거워요.', hint: unit ? `${josa(unit.name, '을', '를')} 하나씩 올리거나 내리며 저울대가 수평이 되는 때를 찾아요.` : '두 쪽 무게가 같아야 수평이 돼요.', h3: unit && Number.isInteger(need()) ? `오른쪽에 ${unit.name} ${need()}개를 올리면 수평이 돼요.` : '두 쪽 무게가 같아질 때까지 하나씩 바꿔요.' };
            }
            if (t.tilt) {
              const ok = t.tilt === 'left' ? a > b : b > a;
              if (ok) return null;
              return { correct: false, feedback: t.tilt === 'left' ? '왼쪽이 내려가게 해야 해요. 지금은 왼쪽이 더 무겁지 않아요.' : '오른쪽이 내려가게 해야 해요. 지금은 오른쪽이 더 무겁지 않아요.', hint: '무거운 쪽 접시가 아래로 내려가요.', h3: unit ? `${unit.name}의 수를 ${t.tilt === 'left' ? '줄여' : '늘려'} 보세요.` : '무게를 바꿔 보세요.' };
            }
            return null;
          };
          M.solve = (t) => { if (!unit) return; if (t.balance) n = K.clamp(Math.round(need()), 0, maxU); if (t.tilt) n = K.clamp(t.tilt === 'left' ? Math.floor(need() - 1e-9) : Math.floor(need()) + 1, 0, maxU); };
          M.wrong = (t) => (!unit ? null : t.balance ? { n: K.clamp(Math.round(need()) + 1, 0, maxU) } : t.tilt ? { n: K.clamp(Math.round(need()), 0, maxU) } : null);
          M.hint1 = (t) => (t.balance ? '무거운 쪽 접시가 내려가요. 두 쪽 무게가 같으면 저울대가 수평이 돼요.' : '무거운 쪽 접시가 아래로 내려가요.');
          M.dist = (a, b) => Math.abs((a.n || 0) - (b.n || 0));
        } else {
          // 용수철저울
          const W = 640; const H = 380; const max = o.max || 500; const step = o.step || 100; const minor = o.minor || 5;
          const objs = Array.isArray(o.objects) && o.objects.length ? o.objects : [{ name: '물체', w: 200 }];
          const st = kit.stage(box, { viewBox: [W, H], label: `용수철저울. 0부터 ${max} g까지 눈금이 있어요.` });
          kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 18 }, color: 'cream', depth: 1, texture: !print, fill: print ? '#fff' : '#FBF6EC' });
          const G = st.layer('scale'); const SX = 220; const Y0 = 50; const LEN = 230; const pxg = LEN / max;
          kit.piece(st, G, { shape: { type: 'rect', x: SX - 46, y: 24, w: 92, h: LEN + 60, rx: 14 }, color: 'sky', depth: 2 });
          for (let i = 0; i <= (max / step) * minor; i++) {
            const g = (i * step) / minor; const y = Y0 + g * pxg; const big = i % minor === 0;
            kit.el('line', { x1: SX - (big ? 28 : 14), y1: y, x2: SX, y2: y, stroke: '#204C5A', 'stroke-width': big ? 2 : 1 }, G);
            if (big) kit.el('text', { x: SX + 10, y: y + 5, 'font-size': 14, class: 'pk-text', fill: '#204C5A' }, G).textContent = String(g);
          }
          kit.el('text', { x: SX + 10, y: Y0 - 12, 'font-size': 12, class: 'pk-text', fill: '#204C5A' }, G).textContent = 'g';
          const spring = kit.el('path', { fill: 'none', stroke: '#544B42', 'stroke-width': 2.5 }, G);
          const ptr = kit.el('g', null, G);
          kit.piece(st, ptr, { shape: { type: 'poly', points: '-40,0 -24,-7 -24,7' }, color: 'rose', depth: 0, flat: true });
          kit.el('line', { x1: -24, y1: 0, x2: 0, y2: 0, stroke: '#702830', 'stroke-width': 2 }, ptr);
          const hook = kit.el('g', null, G);
          kit.el('path', { d: 'M0 0 v14 a8 8 0 1 1 -8 8', fill: 'none', stroke: '#544B42', 'stroke-width': 3 }, hook);
          const bag = kit.el('g', null, hook);
          kit.piece(st, bag, { shape: { type: 'rect', x: -60, y: 32, w: 120, h: 40, rx: 10 }, color: 'buttercup', depth: 2 });
          const bagTxt = kit.el('text', { x: 0, y: 58, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#6E530F' }, bag);
          let hung = objs.length === 1 ? 0 : null; let stop = null; let cur = 0;
          const ans = answerBox('눈금', 'g', null, null, null);
          let setHung = null;
          if (panel && objs.length > 1 && !ro) {
            h('p', { class: `${P}-q` }, panel, '매달 물체를 고르세요.');
            setHung = pickRow(panel, '매달 물체', objs.map((x) => x.name), (i) => { hung = i; setHung(i); changed(); kit.tick(); });
            panel.insertBefore(panel.lastChild, panel.firstChild); panel.insertBefore(panel.lastChild, panel.firstChild);
          }
          const placeAt = (g) => {
            cur = g; const y = Y0 + g * pxg;
            kit.transform(ptr, { x: SX - 30, y }); kit.transform(hook, { x: SX + 120, y: y + 30 });
            let d = `M${SX + 120} ${Y0 - 20}`; const top = Y0 - 20; const bot = y + 30; const k = 10;
            for (let i = 1; i <= k; i++) d += ` L${SX + 120 + (i % 2 ? 14 : -14)} ${top + ((bot - top) * (i - 0.5)) / k}`;
            d += ` L${SX + 120} ${bot}`; spring.setAttribute('d', d);
          };
          kit.el('line', { x1: SX - 30, y1: 0, x2: SX + 120, y2: 0, stroke: '#544B42', 'stroke-width': 3 }, G).setAttribute('transform', `translate(0 ${Y0 - 20})`);
          placeAt(0);
          M.paint = () => {
            const g = hung == null ? 0 : Math.min(max, Number(objs[hung].w) || 0);
            bag.setAttribute('display', hung == null ? 'none' : 'inline');
            bagTxt.textContent = hung == null ? '' : objs[hung].name;
            if (stop) stop();
            if (print) placeAt(g); else stop = kit.spring(cur, g, { onUpdate: placeAt });
          };
          M.state = () => ({ hung, ans: ans.v });
          M.set = (s) => { if (s.hung !== undefined) { hung = s.hung; if (setHung) setHung(hung); } if (s.ans !== undefined) ans.set(s.ans); };
          M.judge = (t) => {
            if (t.read == null) return null;
            if (objs.length > 1 && hung == null) return { correct: false, incomplete: true, feedback: '먼저 매달 물체를 골라요.' };
            if (ans.v == null) return { correct: false, incomplete: true, feedback: '바늘이 가리키는 눈금을 답 칸에 써요.' };
            if (Math.abs(ans.v - t.read) < 1e-6) return null;
            const per = step / minor;
            return { correct: false, feedback: ans.v > t.read ? '읽은 무게가 너무 커요.' : '읽은 무게가 너무 작아요.', hint: `큰 눈금 사이 작은 칸 하나가 몇 g인지 먼저 알아봐요.`, h3: `작은 칸 하나는 ${per} g이에요. 바늘 바로 위의 큰 눈금부터 작은 칸을 세어 더해요.` };
          };
          M.solve = (t) => { if (t.read != null) { if (hung == null) hung = Math.max(0, objs.findIndex((x) => Number(x.w) === t.read)); ans.set(t.read); if (setHung) setHung(hung); } };
          M.wrong = (t) => (t.read == null ? null : { hung: hung == null ? Math.max(0, objs.findIndex((x) => Number(x.w) === t.read)) : hung, ans: r2(t.read + step / minor) });
          M.hint1 = () => '바늘이 가리키는 곳의 눈금을 읽어요. 큰 눈금 사이 작은 칸 하나의 크기를 먼저 알아봐요.';
          M.dist = (a, b) => (a.hung !== b.hung ? 1 : 0) + (a.ans === b.ans ? 0 : 1);
        }
      }

      // ================= 들이 =================
      if (mode === 'volume') {
        const list = (Array.isArray(o.beakers) && o.beakers.length ? o.beakers : [{ v: 0 }]).slice(0, 3);
        const maxAll = o.max || 1000; const step = o.step || 100; const minor = o.minor || 1;
        const cups = list.map((b, i) => ({ v: Number(b.v) || 0, max: b.max || maxAll, w: K.clamp(b.w || 1, 0.6, 1.6), label: b.label || (list.length > 1 ? '가나다'[i] : ''), ticks: b.ticks !== false }));
        const W = 640; const H = 360; const BOT = 320; const unitH = 250 / Math.max(...cups.map((c) => c.max / c.w));
        const st = kit.stage(box, { viewBox: [W, H], label: `눈금 그릇 ${cups.length}개. 물의 높이와 눈금을 보고 들이를 재요.` });
        kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 18 }, color: 'cream', depth: 1, texture: !print, fill: print ? '#fff' : '#FBF6EC' });
        const G = st.layer('cups');
        const slotW = (W - 40) / cups.length;
        const waters = cups.map((c, i) => {
          const bw = 120 * c.w; const bh = (c.max / c.w) * unitH; const cx = 20 + slotW * (i + 0.5); const x0 = cx - bw / 2;
          const water = kit.el('rect', { x: x0 + 3, y: BOT, width: bw - 6, height: 0, fill: print ? '#D8D8D8' : '#98C8D6' }, G);
          kit.el('path', { d: `M${x0} ${BOT - bh - 8} L${x0} ${BOT} L${x0 + bw} ${BOT} L${x0 + bw} ${BOT - bh - 8}`, fill: 'none', stroke: '#3D352E', 'stroke-width': 3, 'stroke-linejoin': 'round' }, G);
          if (c.ticks) for (let k = 0; k <= (c.max / step) * minor; k++) {
            const amt = (k * step) / minor; const y = BOT - (amt / c.w) * unitH; const big = k % minor === 0;
            kit.el('line', { x1: x0, y1: y, x2: x0 + (big ? 22 : 12), y2: y, stroke: '#3D352E', 'stroke-width': big ? 2 : 1 }, G);
            if (big && amt > 0) kit.el('text', { x: x0 + 26, y: y + 5, 'font-size': print ? 19 : 13, class: 'pk-text', fill: '#3D352E' }, G).textContent = String(amt);
          }
          if (c.ticks) kit.el('text', { x: x0 + bw - 4, y: BOT - bh - 14, 'text-anchor': 'end', 'font-size': print ? 17 : 12, class: 'pk-text', fill: '#544B42' }, G).textContent = 'mL';
          if (c.label) kit.el('text', { x: cx, y: BOT + 26, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: '#3D352E' }, G).textContent = c.label;
          const amt = kit.el('text', { x: cx, y: 36, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: '#204C5A' }, G);
          return { water, amt, c };
        });
        const pourStep = o.pourStep || step / minor;
        if (panel && o.pour && !ro) stepper(panel, `${cups[0].label ? `${cups[0].label} 그릇 ` : ''}물 덜기·붓기`, (d) => { cups[0].v = K.clamp(r2(cups[0].v + d * pourStep), 0, cups[0].max); changed(); kit.tick(); });
        const split = !!o.split;
        const ans = answerBox('들이', split ? 'L' : 'mL', split ? 'mL' : null, (a, b) => (a == null && b == null ? null : (a || 0) * 1000 + (b || 0)), (v) => [Math.floor(v / 1000), v % 1000]);
        M.paint = () => waters.forEach(({ water, amt, c }) => {
          const hh = (c.v / c.w) * unitH; water.setAttribute('y', BOT - hh); water.setAttribute('height', hh);
          amt.textContent = o.showAmount && showVals() ? `${c.v} mL` : '';
        });
        M.state = () => ({ v: cups.map((c) => c.v), ans: ans.v });
        M.set = (s) => { if (Array.isArray(s.v)) s.v.forEach((v, i) => { if (cups[i]) cups[i].v = K.clamp(Number(v) || 0, 0, cups[i].max); }); if (s.ans !== undefined) ans.set(s.ans); };
        const per = step / minor;
        M.judge = (t) => {
          if (t.fill != null) {
            const v = cups[0].v;
            if (Math.abs(v - t.fill) > 1e-6) return { correct: false, feedback: v > t.fill ? '물이 너무 많아요. 조금 덜어요.' : '물이 아직 모자라요.', hint: '물의 윗면과 같은 높이의 눈금을 읽어요.', h3: `${t.fill} mL 눈금까지 붓거나 덜어요. 작은 칸 하나는 ${per} mL예요.` };
          }
          if (t.read != null) {
            if (ans.v == null) return { correct: false, incomplete: true, feedback: '읽은 들이를 답 칸에 써요.' };
            if (Math.abs(ans.v - t.read) > 1e-6) {
              if (split && Math.abs(ans.v - (Math.floor(t.read / 1000) * 1000 + (t.read % 1000) / 10)) < 1e-6) return { correct: false, feedback: '1 L = 1000 mL예요. L와 mL 칸을 다시 봐요.', hint: '1000 mL를 넘은 만큼만 mL 칸에 써요.', h3: `${t.read} mL = ${Math.floor(t.read / 1000)} L ${t.read % 1000} mL` };
              return { correct: false, feedback: ans.v > t.read ? '읽은 들이가 너무 커요.' : '읽은 들이가 너무 작아요.', hint: `큰 눈금 사이 작은 칸 하나가 몇 mL인지 알아봐요.`, h3: `작은 칸 하나는 ${per} mL예요. 물의 윗면 바로 아래 큰 눈금부터 세어요.` };
            }
          }
          return null;
        };
        M.solve = (t) => { if (t.fill != null) cups[0].v = t.fill; if (t.read != null) ans.set(t.read); };
        M.wrong = (t) => (t.fill != null ? { v: cups.map((c, i) => (i ? c.v : K.clamp(t.fill + per, 0, c.max))), ans: ans.v } : t.read != null ? { v: cups.map((c) => c.v), ans: r2(t.read + per) } : null);
        M.hint1 = (t) => (t.fill != null ? '눈금 한 칸이 얼마인지 먼저 알아보고, 물의 윗면이 어느 눈금에 닿는지 보며 부어요.' : '물의 윗면과 같은 높이에 있는 눈금을 읽어요. 작은 칸 하나의 크기부터 알아봐요.');
        M.dist = (a, b) => (a.v || []).reduce((d, v, i) => d + Math.abs(v - ((b.v || [])[i] || 0)) / pourStep, 0) + (a.ans === b.ans ? 0 : 1);
      }

      // ================= 단위 고르기 =================
      if (mode === 'unit') {
        const things = (Array.isArray(o.things) ? o.things : []).map((x) => (typeof x === 'string' ? { name: x } : x));
        const units = Array.isArray(o.units) && o.units.length ? o.units.map(String) : ['mm', 'cm', 'm', 'km'];
        const wrap = h('div', { class: `${P}-units`, role: 'group', 'aria-label': '알맞은 단위 고르기' }, box);
        const picks = things.map(() => null);
        const setters = things.map((x, i) => {
          const row = h('div', { class: `${P}-unit` }, wrap);
          h('p', { class: `${P}-q` }, row, `${i + 1}. ${x.name}${x.amount != null ? ` — 약 ${x.amount} (   )` : ''}`);
          if (ro) { h('p', { class: `${P}-q` }, row, units.join(' · ')); return () => {}; }
          const set = pickRow(row, `${x.name}의 단위`, units, (k) => { picks[i] = k; set(k); changed(); });
          return set;
        });
        M.paint = () => {};
        M.state = () => ({ picks: picks.slice() });
        M.set = (s) => { if (Array.isArray(s.picks)) s.picks.forEach((k, i) => { if (i < picks.length) { picks[i] = Number.isInteger(k) ? k : null; setters[i](picks[i]); } }); };
        M.judge = (t) => {
          if (!Array.isArray(t.units)) return null;
          if (t.units.some((_, i) => picks[i] == null)) return { correct: false, incomplete: true, feedback: '물건마다 단위를 하나씩 골라요.' };
          const bad = t.units.map((u, i) => (picks[i] === u ? -1 : i)).filter((i) => i >= 0);
          if (!bad.length) return null;
          const i = bad[0];
          return { correct: false, feedback: `${bad.length}개가 알맞지 않아요. 단위가 너무 크거나 작으면 수가 어색해져요.`, hint: '어림한 수와 단위를 함께 읽어 보고, 실제 크기와 어울리는지 생각해요.', h3: `${things[i].name}에는 ${units[t.units[i]]} 단위가 알맞아요.` };
        };
        M.solve = (t) => { if (Array.isArray(t.units)) M.set({ picks: t.units }); };
        M.wrong = (t) => (Array.isArray(t.units) && t.units.length ? { picks: t.units.map((u, i) => (i === 0 ? (u + 1) % units.length : u)) } : null);
        M.hint1 = () => '단위마다 몸이나 주변 물건으로 크기를 떠올려 보고, 그 물건과 어울리는 단위를 골라요.';
        M.dist = (a, b) => (a.picks || []).filter((k, i) => k !== (b.picks || [])[i]).length;
      }

      // ---------- 묻기 칸 ----------
      if (panel) {
        ask = askPanel(panel, o, () => log());
        if (panel.childNodes.length) box.appendChild(panel);
      }
      const state = () => Object.assign(M.state(), (o.ask ? { pick: ask.pick } : {}), (o.askNum ? { num: ask.num } : {}));
      log = () => kit.recorder.log('measure', state());
      const setState = (s) => { s = s || {}; M.set(s); ask.set(s); revealed = false; M.paint(); };
      const start = state();
      M.paint();
      function judge(t) {
        t = t || {};
        const r = M.judge(t); if (r) return r;
        const a = judgeAsk(t, state(), o); if (a) return a;
        return { correct: true, feedback: '맞아요!' };
      }
      const api = {
        getState: state,
        setState,
        reset() { setState(JSON.parse(JSON.stringify(start))); },
        check(t, opts) {
          const r = judge(t);
          if (!(opts && opts.forHint) && r.correct) { revealed = true; M.paint(); }
          delete r.h3; return r;
        },
        // 교사 시연: 잠깐 기다렸다가 목표 상태로 맞춘다
        demo(t) { return kit.wait(350).then(() => this.solve(t)); },
        solve(t) { t = t || {}; M.solve(t); const s = {}; if (t.pick != null) s.pick = t.pick; if (t.num != null) s.num = t.num; ask.set(s); revealed = false; M.paint(); log(); },
        hint(t, opts) {
          t = t || {};
          const r = judge(t); const lv = hintLevel(opts);
          const onlyAsk = Object.keys(t).every((k) => k === 'pick' || k === 'num');
          const h1 = onlyAsk ? '묻는 것을 교구에서 직접 재거나 견주어 본 뒤 답해요.' : M.hint1(t);
          if (r.correct) return { hint: h1, correct: true, level: 1 };
          if (lv === 1) return { hint: h1, correct: false, level: 1 };
          if (r.hint) return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
          // 아직 다 하지 않음(답 칸이 빔 등): 2단계 = 남은 일 + 그 모드의 단계 짚기, 3단계 = 풀이 — 대표 오답 상태의 판정 글을 빌려 온다(상태는 되돌린다)
          const keep = JSON.stringify(state()); let rw = null;
          try { const w = api.wrongAnswer(t); if (w) { setState(w); rw = judge(t); } } finally { setState(JSON.parse(keep)); }
          if (lv >= 3 && rw && rw.h3) return { hint: rw.h3, correct: false, level: lv };
          const step = rw && rw.hint && rw.hint !== r.feedback ? ` ${rw.hint}` : '';
          return { hint: `${r.feedback || '문제에서 하라는 것을 해 보세요.'}${step}`, correct: false, level: lv };
        },
        wrongAnswer(t) {
          t = t || {};
          const keep = JSON.stringify(state());
          let s = M.wrong(t);
          if (s == null && (t.pick != null || t.num != null)) {
            M.solve(t); s = M.state();
            if (t.pick != null) s.pick = (t.pick + 1) % Math.max(2, ((o.ask && o.ask.choices) || []).length);
            if (t.num != null) s.num = t.num + 1;
          } else if (s != null) {
            if (t.pick != null) s.pick = t.pick;
            if (t.num != null) s.num = t.num;
          }
          setState(JSON.parse(keep));
          return s ? Object.assign({}, o.ask ? { pick: null } : {}, o.askNum ? { num: null } : {}, s) : null;
        },
        distance(a, b) {
          let d = M.dist(a || {}, b || {});
          if ((a || {}).pick !== (b || {}).pick) d += 1;
          if ((a || {}).num !== (b || {}).num) d += Math.abs(((a || {}).num || 0) - ((b || {}).num || 0)) > 1 ? 2 : 1;
          return d;
        },
      };
      return api;
    },
  });
})(window.PaperKit);
