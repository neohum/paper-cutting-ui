/* 힘 실험대 — 수평 잡기(지레·막대 저울), 용수철 늘이기, 빗면에서 굴리기, 미는 힘의 크기, 물체의 빠르기(거리·시간)를 한 교구로 다룬다
 * (3학년 과학 물체의 무게, 4학년 수평 잡기, 5학년 물체의 운동, 6학년 지레·속력).
 *
 * 모드(o.mode)
 * | 모드 | 하는 일 | 상태 | target |
 * | --- | --- | --- | --- |
 * | 'lever'(기본) | 받침점 양쪽 자리(1~pegs칸)에 추를 올리고 내려 수평을 잡는다. o.fixed 추는 옮길 수 없다 | { w:[−pegs…+pegs 자리마다 내가 올린 추 수] } | { balance:true, at?:자리, count?:추 수 } · { tilt:'left'|'right' } |
 * | 'spring' | 용수철에 추를 매달아 늘인다(추 하나에 o.k cm) | { n, ans } | { n:추 수 } · { stretch:늘어난 cm } · { read:읽은 cm } |
 * | 'ramp' | 빗면 기울기·물체 무게·면을 정하고 '굴리기'로 내려가는 시간을 본다 | { angle, mass, surface, ran } | { set:{ angle?, mass?, surface? }, run?:true } · { move:true } |
 * | 'push' | 미는 힘·무게·면을 정하고 '밀기'로 미끄러진 거리를 본다 | { force, mass, surface, ran } | { set:{…}, run?:true } · { move:true } |
 * | 'speed' | 여러 물체가 같은 시각에 출발해 정한 거리를 정한 시간에 간다. o.control이면 첫 물체의 거리·시간을 바꾼다 | { ran } · control: { d, t, ran } | { speed:속력 } · { beat:번호 }(그 물체보다 빠르게) · { run:true } |
 * 모든 모드 공통: o.ask = { q, choices[], why?[] } → 상태 pick, target { pick } / o.askNum = { q, unit?, tol? } → 상태 num, target { num } (다른 target과 함께 써도 된다)
 *
 * 옵션
 * | 옵션 | 모드 | 뜻 |
 * | --- | --- | --- |
 * | pegs, fixed, maxPer, side, unitName, showMoment, showDist | lever | pegs 한쪽 자리 수(2~6, 기본 4), fixed [{ pos(−왼쪽 +오른쪽), n }], maxPer 한 자리 최대 추(기본 6), side 'right'|'left'|'both'(내가 올릴 쪽, 기본 both), showMoment(무게×거리 읽기 값), showDist(자리 번호, 기본 true) |
 * | k, natural, maxN, unitName, unitW, showStretch | spring | 추 하나에 늘어나는 cm(기본 2), 처음 길이 cm(기본 8), 최대 추 수(기본 6), 추 이름·무게(g), 늘어난 길이 읽기 값(기본 true) |
 * | angles, masses, surfaces | ramp·push | [최솟값, 최댓값, 한 칸] — angles 기본 [10,50,10]°, masses 기본 [1,4,1] 덩이; surfaces [{ name, mu }] (기본 매끄러운 면·거친 면) |
 * | forces | push | [0, 10, 1] N |
 * | lock | ramp·push | 바꿀 수 없게 잠글 변인 이름 배열(예 ['mass']) |
 * | movers, control, dRange, tRange, showSpeed, unitD, unitT | speed | movers [{ name, d, t }](최대 4), control 첫 물체 조절, dRange·tRange [최소, 최대, 한 칸], showSpeed 속력 읽기 값, 단위(기본 m·초) |
 * | readOnly, revealAfterCheck, print | 모두 | 조작 잠금 / 확인 전 읽기 값(무게×거리·늘어난 길이·속력) 숨김 / 활동지 흑백 |
 * 예) { mode:'lever', fixed:[{ pos:-2, n:3 }], side:'right' } + target { balance:true, at:3 }
 *     { mode:'spring', k:3 } + target { stretch:12 }   { mode:'ramp' } + target { set:{ angle:30 }, run:true }
 *     { mode:'speed', control:true, movers:[{ name:'나', d:60, t:10 }, { name:'민지', d:100, t:20 }] } + target { speed:8 }
 * 키보드: 막대 — ←→ 자리 고르기, ↑ 또는 Enter 추 올리기, ↓ 또는 Backspace 내리기. 그 밖은 −/+·고르기 단추(Tab).
 */
(function (K) {
  'use strict';
  // ---------- 공통 도우미(교구 파일마다 같은 모양) ----------
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  const josa = (w, a, b) => { const s = String(w); const c = s.charCodeAt(s.length - 1); return s + (c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 ? a : b); };
  const r2 = (v) => Math.round(v * 100) / 100;
  const P = 'fo';
  function ensureStyle() {
    if (document.getElementById(`${P}-style`)) return;
    const s = document.createElement('style'); s.id = `${P}-style`;
    s.textContent = `
.${P}-panel{display:grid;gap:10px;margin-top:10px}
.${P}-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.${P}-row .pl-btn{min-width:44px;justify-content:center}
.${P}-q{margin:0;font-weight:700;line-height:1.45;word-break:keep-all}
.${P}-val{display:inline-block;min-width:4.5em;text-align:center;font-weight:800;color:#473B6B}
.${P}-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}
.${P}-picks .pl-btn{white-space:normal;line-height:1.3;word-break:keep-all;min-height:44px}
.${P}-in{min-height:44px;width:5.5em;box-sizing:border-box;padding:6px 10px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.1em;font-weight:800;text-align:center;color:#275C46;background:#fff}
@media print{.${P}-panel{display:none}}
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
      if (s.pick !== t.pick) return { correct: false, feedback: (o.ask && o.ask.why && o.ask.why[s.pick]) || '고른 것이 맞지 않아요. 실험 결과를 다시 살펴보고 골라요.', hint: '보기마다 실험에서 본 것과 맞는지 하나씩 확인해요.', h3: (o.ask && o.ask.explain) || '바꾼 것 하나와 달라진 결과 하나를 짝지어 생각해요.' };
    }
    if (t.num != null) {
      if (s.num == null) return { correct: false, incomplete: true, feedback: '답 칸에 수를 써요.' };
      const tol = (o.askNum && o.askNum.tol) || 1e-6;
      if (Math.abs(s.num - t.num) > tol) return { correct: false, feedback: s.num > t.num ? '쓴 수가 너무 커요. 다시 계산해 봐요.' : '쓴 수가 너무 작아요. 다시 계산해 봐요.', hint: '무엇을 무엇으로 나누거나 곱하는지 식을 먼저 써 봐요.', h3: (o.askNum && o.askNum.explain) || '식을 쓰고 차례로 계산해요.' };
    }
    return null;
  }
  const range = (r, d) => { const v = Array.isArray(r) && r.length === 3 ? r : d; return { min: v[0], max: v[1], step: v[2] }; };
  const snapTo = (v, R) => K.clamp(r2(Math.round((v - R.min) / R.step) * R.step + R.min), R.min, R.max);

  K.registerTool('force', {
    name: '힘 실험대',
    create(box, o, kit) {
      ensureStyle();
      const mode = ['spring', 'ramp', 'push', 'speed'].includes(o.mode) ? o.mode : 'lever';
      const print = !!o.print; const ro = !!o.readOnly || print;
      // 활동지 그림 칸은 좁아서 그대로면 눈금 숫자가 읽히지 않는다
      const FS = print ? 1.6 : 1;
      let revealed = false;
      const showVals = () => !print && (!o.revealAfterCheck || revealed);
      let log = () => {};
      const panel = print ? null : document.createElement('div');
      if (panel) panel.className = `${P}-panel`;
      let ask = { pick: null, num: null, set() {} };
      const M = {};
      const changed = () => { revealed = false; M.paint(); log(); };
      // 값 하나를 −/+로 바꾸는 줄: 지금 값도 함께 보인다(조작하는 값이라 숨기지 않는다)
      function stepRow(parent, label, getText, onStep) {
        const row = h('div', { class: `${P}-row`, role: 'group', 'aria-label': label }, parent);
        h('span', { class: `${P}-q` }, row, label);
        button(row, '<i class="fi fi-rr-minus" aria-hidden="true"></i>', `${label} 줄이기`, () => onStep(-1));
        const val = h('span', { class: `${P}-val`, 'aria-live': 'polite' }, row, getText());
        button(row, '<i class="fi fi-rr-plus" aria-hidden="true"></i>', `${label} 늘리기`, () => onStep(1));
        return () => { val.textContent = getText(); };
      }
      const bg = (st, W, H) => kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 18 }, color: 'cream', depth: 1, texture: !print, fill: print ? '#fff' : '#FBF6EC' });

      // ================= 수평 잡기 =================
      if (mode === 'lever') {
        const N = K.clamp(Math.round(o.pegs || 4), 2, 6); const maxPer = o.maxPer || 6; const side = ['left', 'right'].includes(o.side) ? o.side : 'both';
        const unitName = o.unitName || '추';
        const fixed = new Array(2 * N + 1).fill(0);
        (Array.isArray(o.fixed) ? o.fixed : []).forEach((f) => { const p = Math.round(f.pos); if (p && Math.abs(p) <= N) fixed[p + N] += Math.max(0, Math.round(f.n || 1)); });
        const w = new Array(2 * N + 1).fill(0);
        const allowed = (p) => p !== 0 && (side === 'both' || (side === 'right' ? p > 0 : p < 0));
        const W = 640; const H = 340; const CX = 320; const CY = 140; const GAP = 270 / N;
        const st = kit.stage(box, { viewBox: [W, H], label: `수평 잡기 막대. 받침점 양쪽에 1부터 ${N}까지 자리가 있어요. 자리에 ${unitName}를 올려 막대가 수평이 되게 해요.` });
        bg(st, W, H);
        kit.piece(st, st.layer('base'), { shape: { type: 'poly', points: `${CX},${CY + 8} ${CX + 34},${CY + 120} ${CX - 34},${CY + 120}` }, color: 'lavender', depth: 2 });
        kit.piece(st, st.layer('base'), { shape: { type: 'rect', x: CX - 100, y: CY + 116, w: 200, h: 16, rx: 6 }, color: 'lavender', depth: 2 });
        const beam = kit.el('g', null, st.layer('beam'));
        kit.piece(st, beam, { shape: { type: 'rect', x: -N * GAP - 20, y: -8, w: 2 * N * GAP + 40, h: 16, rx: 8 }, color: 'peach', depth: 2 });
        const cursor = kit.el('rect', { x: -22, y: -40, width: 44, height: 160, rx: 10, fill: 'none', stroke: '#E69D7B', 'stroke-width': 3, display: 'none' }, beam);
        const tok = [];
        for (let p = -N; p <= N; p++) {
          const x = p * GAP; const col = [];
          if (p !== 0) {
            kit.el('circle', { cx: x, cy: 0, r: 3.5, fill: '#6E3B21' }, beam);
            if (o.showDist !== false) kit.el('text', { x, y: -16, 'text-anchor': 'middle', 'font-size': Math.round(15 * FS), class: 'pk-text', fill: '#6E3B21' }, beam).textContent = String(Math.abs(p));
            for (let i = 0; i < maxPer + 6; i++) {
              const g = kit.el('g', { display: 'none' }, beam);
              kit.el('line', { x1: x, y1: 8 + i * 16, x2: x, y2: 14 + i * 16, stroke: '#544B42', 'stroke-width': 1.5 }, g);
              const pc = kit.piece(st, g, { shape: { type: 'rect', x: x - 13, y: 14 + i * 16, w: 26, h: 14, rx: 4 }, color: 'mint', depth: 1 });
              col.push({ g, pc });
            }
            if (!ro && allowed(p)) {
              const hit = kit.el('rect', { x: x - GAP / 2, y: -40, width: GAP, height: 160, class: 'pk-hit' }, beam);
              hit.addEventListener('click', () => { sel = p; add(p, 1); });
            }
          }
          tok.push(col);
        }
        kit.el('text', { x: CX - N * GAP / 2, y: 36, 'text-anchor': 'middle', 'font-size': Math.round(16 * FS), class: 'pk-text', fill: '#544B42' }, st.layer('lab')).textContent = '왼쪽';
        kit.el('text', { x: CX + N * GAP / 2, y: 36, 'text-anchor': 'middle', 'font-size': Math.round(16 * FS), class: 'pk-text', fill: '#544B42' }, st.layer('lab')).textContent = '오른쪽';
        const momL = kit.el('text', { x: 120, y: 300, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: '#275C46' }, st.layer('lab'));
        const momR = kit.el('text', { x: 520, y: 300, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: '#275C46' }, st.layer('lab'));
        let sel = side === 'left' ? -1 : 1; let ang = 0; let stop = null;
        const tau = () => w.reduce((s, c, i) => s + (i - N) * (c + fixed[i]), 0);
        const tiltOf = (t) => (t === 0 ? 0 : Math.sign(t) * Math.min(12, 4 + Math.abs(t) * 1.2));
        const setAng = (a) => { ang = a; kit.transform(beam, { x: CX, y: CY, r: a }); };
        setAng(0);
        function add(p, d) {
          if (!allowed(p)) return;
          const i = p + N; const nv = K.clamp(w[i] + d, 0, maxPer); if (nv === w[i]) return;
          w[i] = nv; changed(); kit.tick();
          kit.announce(`${p < 0 ? '왼쪽' : '오른쪽'} ${Math.abs(p)}번째 자리에 내 ${unitName} ${w[i]}개`);
        }
        let selTxt = null;
        if (!ro) {
          const focus = kit.el('rect', { x: 20, y: 20, width: W - 40, height: 250, fill: 'transparent', tabindex: '0', role: 'application', 'aria-label': `막대. 왼쪽 오른쪽 방향키로 자리를 고르고, 위 방향키나 Enter로 ${unitName}를 올리고 아래 방향키나 Backspace로 내려요.` }, st.layer('base'));
          focus.addEventListener('focus', () => { cursor.setAttribute('display', 'inline'); paintCursor(); });
          focus.addEventListener('blur', () => cursor.setAttribute('display', 'none'));
          focus.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
              e.preventDefault(); let p = sel;
              for (let k = 0; k < 2 * N + 1; k++) { p += e.key === 'ArrowLeft' ? -1 : 1; if (p < -N) p = N; if (p > N) p = -N; if (allowed(p)) break; }
              sel = p; paintCursor(); kit.announce(`${p < 0 ? '왼쪽' : '오른쪽'} ${Math.abs(p)}번째 자리`); return;
            }
            if (e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); add(sel, 1); }
            if (e.key === 'ArrowDown' || e.key === 'Backspace' || e.key === 'Delete') { e.preventDefault(); add(sel, -1); }
          });
          if (panel) {
            selTxt = stepRow(panel, '고른 자리의 추', () => `${sel < 0 ? '왼쪽' : '오른쪽'} ${Math.abs(sel)}칸: ${w[sel + N]}개`, (d) => add(sel, d));
          }
        }
        function paintCursor() { cursor.setAttribute('x', sel * GAP - 22); if (selTxt) selTxt(); }
        M.paint = () => {
          for (let p = -N; p <= N; p++) {
            const col = tok[p + N]; if (!col.length) continue;
            const f = fixed[p + N]; const m = w[p + N];
            col.forEach((c, i) => {
              c.g.setAttribute('display', i < f + m ? 'inline' : 'none');
              c.pc.setColor(i < f ? 'lavender' : 'mint');
            });
          }
          const t = tauSplit();
          const show = o.showMoment && showVals();
          momL.textContent = show ? `왼쪽: 무게×거리 = ${t[0]}` : ''; momR.textContent = show ? `오른쪽: 무게×거리 = ${t[1]}` : '';
          if (stop) stop();
          const to = tiltOf(tau());
          if (print) setAng(to); else stop = kit.spring(ang, to, { onUpdate: setAng });
          paintCursor();
        };
        const tauSplit = () => { let l = 0; let r = 0; w.forEach((c, i) => { const p = i - N; const n = c + fixed[i]; if (p < 0) l += -p * n; else r += p * n; }); return [l, r]; };
        M.state = () => ({ w: w.slice() });
        M.set = (s) => { if (Array.isArray(s.w)) s.w.forEach((c, i) => { if (i < w.length) w[i] = allowed(i - N) ? K.clamp(Math.round(c) || 0, 0, maxPer) : 0; }); };
        const fixedTau = () => fixed.reduce((s, c, i) => s + (i - N) * c, 0);
        const mine = () => w.reduce((s, c) => s + c, 0);
        // 조건(at·count)을 지키며 수평이 되는 내 추 배치를 찾는다(자리 하나 → 둘)
        function findBalance(t) {
          const need = -fixedTau(); const pos = []; for (let p = -N; p <= N; p++) if (allowed(p) && (t.at == null || p === t.at)) pos.push(p);
          const ok = (arr) => (t.count == null || arr.reduce((s, x) => s + x[1], 0) === t.count) && arr.reduce((s, x) => s + x[1], 0) > 0;
          for (const p of pos.slice().sort((a, b) => Math.abs(b) - Math.abs(a))) for (let c = 1; c <= maxPer; c++) if (p * c === need && ok([[p, c]])) return [[p, c]];
          for (const p of pos) for (const q of pos) if (p < q) for (let a = 1; a <= maxPer; a++) for (let b = 1; b <= maxPer; b++) if (p * a + q * b === need && ok([[p, a], [q, b]])) return [[p, a], [q, b]];
          return null;
        }
        M.judge = (t) => {
          const T = tau();
          if (t.balance) {
            if (!mine() && fixedTau() !== 0) return { correct: false, incomplete: true, feedback: `막대 자리에 ${unitName}를 올려요.` };
            if (t.at != null && w.some((c, i) => c && i - N !== t.at)) return { correct: false, feedback: '정해진 자리가 아닌 곳에도 추를 올렸어요.', hint: '문제에서 말한 자리에만 추를 올려요.', h3: '다른 자리의 추를 모두 내리고, 정해진 자리의 추 수만 바꿔요.' };
            if (t.count != null && mine() !== t.count) return { correct: false, feedback: '올린 추의 수가 문제와 달라요.', hint: '추의 수를 정해진 만큼만 쓰고, 자리를 옮겨 수평을 잡아요.', h3: '받침점에서 멀리 둘수록 같은 추라도 막대를 더 세게 기울여요.' };
            if (T === 0) return null;
            const [l, r] = tauSplit();
            const sameCount = w.reduce((s, c, i) => s + (i < N ? c + fixed[i] : 0), 0) === w.reduce((s, c, i) => s + (i > N ? c + fixed[i] : 0), 0);
            const sol = findBalance(t);
            return { correct: false, feedback: sameCount ? '양쪽 추의 수는 같지만 받침점에서 떨어진 거리가 달라요.' : T > 0 ? '오른쪽이 내려갔어요.' : '왼쪽이 내려갔어요.', hint: '추의 무게와 받침점에서 떨어진 거리를 함께 생각해요. 멀수록 막대를 더 세게 기울여요.', h3: sol ? `${sol.map(([p, c]) => `${p < 0 ? '왼쪽' : '오른쪽'} ${Math.abs(p)}칸에 ${c}개`).join(', ')}를 올리면 수평이 돼요. (무게×거리: 왼쪽 ${l}, 오른쪽 ${r})` : `무게×거리를 견주어요: 왼쪽 ${l}, 오른쪽 ${r}.` };
          }
          if (t.tilt) {
            const ok = t.tilt === 'left' ? T < 0 : T > 0;
            if (ok) return null;
            return { correct: false, feedback: t.tilt === 'left' ? '왼쪽이 내려가게 해야 해요.' : '오른쪽이 내려가게 해야 해요.', hint: '내려갈 쪽에 추를 더 올리거나 받침점에서 더 먼 자리로 옮겨요.', h3: '무게×거리가 큰 쪽이 내려가요.' };
          }
          return null;
        };
        M.solve = (t) => {
          if (t.balance) { const sol = findBalance(t); if (sol) { w.fill(0); sol.forEach(([p, c]) => { w[p + N] = c; }); } }
          if (t.tilt) { w.fill(0); const p = t.tilt === 'left' ? -N : N; if (allowed(p)) w[p + N] = maxPer; else { const q = side === 'left' ? -1 : 1; w[q + N] = t.tilt === 'left' ? 0 : maxPer; } }
        };
        // 흔한 실수: 거리를 생각하지 않고 반대쪽에 같은 수의 추를 가까운 자리에 올린다
        M.wrong = (t) => {
          if (t.balance) {
            const sol = findBalance(t);
            const s = new Array(2 * N + 1).fill(0);
            if (sol && t.at != null) { s[t.at + N] = K.clamp(sol[0][1] + 1, 1, maxPer); if (s[t.at + N] === sol[0][1]) s[t.at + N] = sol[0][1] - 1; return { w: s }; }
            const fl = fixed.reduce((a, c, i) => a + (i < N ? c : 0), 0); const fr = fixed.reduce((a, c, i) => a + (i > N ? c : 0), 0);
            const p = fixedTau() <= 0 ? 1 : -1; const cnt = K.clamp(t.count || Math.abs(fl - fr) || 1, 1, maxPer);
            const q = allowed(p) ? p : -p; s[q + N] = cnt;
            const T = s.reduce((a, c, i) => a + (i - N) * c, 0) + fixedTau();
            if (T === 0) s[q + N] = cnt > 1 ? cnt - 1 : cnt + 1;
            return { w: s };
          }
          if (t.tilt) return { w: new Array(2 * N + 1).fill(0) };
          return null;
        };
        M.hint1 = (t) => (t.tilt ? '무거운 쪽, 그리고 받침점에서 더 먼 쪽이 내려가요.' : '추의 수만이 아니라 받침점에서 떨어진 거리도 함께 봐요. 같은 추라도 멀리 있을수록 막대를 더 세게 기울여요.');
        M.dist = (a, b) => (a.w || []).reduce((d, c, i) => d + Math.abs(c - ((b.w || [])[i] || 0)), 0);
      }

      // ================= 용수철 =================
      if (mode === 'spring') {
        const k = o.k || 2; const nat = o.natural || 8; const maxN = o.maxN || 6; const unitName = o.unitName || '추';
        const W = 640; const H = 400; const TOP = 40; const maxLen = nat + k * maxN; const PX = Math.min(16, 320 / maxLen); const SX = 300;
        const st = kit.stage(box, { viewBox: [W, H], label: `용수철과 자. 용수철에 ${unitName}를 하나씩 매달면 늘어나요.` });
        bg(st, W, H);
        const G = st.layer('spring');
        kit.piece(st, G, { shape: { type: 'rect', x: 150, y: 20, w: 340, h: 18, rx: 6 }, color: 'lavender', depth: 2 });
        // 자: 용수철 윗끝(0)부터 아래로
        kit.piece(st, G, { shape: { type: 'rect', x: SX - 110, y: TOP - 4, w: 54, h: Math.ceil(maxLen) * PX + 16, rx: 6 }, color: 'buttercup', depth: 1 });
        for (let c = 0; c <= Math.ceil(maxLen); c++) {
          const y = TOP + c * PX;
          kit.el('line', { x1: SX - 56, y1: y, x2: SX - 56 - (c % 5 === 0 ? 20 : 10), y2: y, stroke: '#3D352E', 'stroke-width': c % 5 === 0 ? 2 : 1 }, G);
          if (c % (PX < 9 ? 10 : 5) === 0) kit.el('text', { x: SX - 82, y: y + 5 * FS, 'text-anchor': 'end', 'font-size': Math.round(13 * FS), class: 'pk-text', fill: '#3D352E' }, G).textContent = String(c);
        }
        kit.el('text', { x: SX - 82, y: TOP - 10, 'text-anchor': 'end', 'font-size': Math.round(12 * FS), class: 'pk-text', fill: '#544B42' }, G).textContent = 'cm';
        kit.el('line', { x1: SX - 50, y1: TOP + nat * PX, x2: SX + 60, y2: TOP + nat * PX, stroke: '#702830', 'stroke-width': 1.5, 'stroke-dasharray': '5 4' }, G);
        kit.el('text', { x: SX + 64, y: TOP + nat * PX + 5 * FS, 'font-size': Math.round(13 * FS), class: 'pk-text', fill: '#702830' }, G).textContent = '처음 길이';
        const coil = kit.el('path', { fill: 'none', stroke: '#544B42', 'stroke-width': 3, 'stroke-linejoin': 'round' }, G);
        const hang = kit.el('g', null, G);
        const blocks = [];
        for (let i = 0; i < maxN; i++) { const g = kit.el('g', { display: 'none' }, hang); kit.piece(st, g, { shape: { type: 'rect', x: -22, y: 6 + i * 22, w: 44, h: 20, rx: 5 }, color: 'mint', depth: 1 }); blocks.push(g); }
        const readT = kit.el('text', { x: 470, y: 200, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: '#275C46' }, G);
        let n = 0; let len = nat; let stop = null;
        const drawAt = (L) => {
          len = L; const bot = TOP + L * PX; let d = `M${SX} ${TOP} L${SX} ${TOP + 6}`; const turns = 12;
          for (let i = 1; i <= turns; i++) d += ` L${SX + (i % 2 ? 16 : -16)} ${TOP + 6 + ((bot - TOP - 12) * (i - 0.5)) / turns}`;
          d += ` L${SX} ${bot - 6} L${SX} ${bot}`; coil.setAttribute('d', d); kit.transform(hang, { x: SX, y: bot });
        };
        drawAt(nat);
        let upd = null;
        if (panel && !ro) upd = stepRow(panel, `매단 ${unitName}`, () => `${n}개`, (d) => { n = K.clamp(n + d, 0, maxN); changed(); kit.tick(); });
        const ans = { v: null, set(v) { this.v = v; if (this.inp) this.inp.value = v == null ? '' : v; } };
        if (panel && !ro && o.answer !== false) {
          const row = h('div', { class: `${P}-row` }, panel);
          h('span', { class: `${P}-q` }, row, '늘어난 길이');
          ans.inp = numBox(row, '늘어난 길이', (v, typing) => { ans.v = v; if (!typing) ans.inp.value = v == null ? '' : v; log(); }, true);
          h('span', { class: `${P}-q` }, row, 'cm');
        }
        M.paint = () => {
          blocks.forEach((g, i) => g.setAttribute('display', i < n ? 'inline' : 'none'));
          const to = nat + k * n; if (stop) stop();
          if (print) drawAt(to); else stop = kit.spring(len, to, { onUpdate: drawAt });
          readT.textContent = o.showStretch !== false && showVals() ? `늘어난 길이 ${r2(k * n)} cm` : '';
          if (upd) upd();
        };
        M.state = () => ({ n, ans: ans.v });
        M.set = (s) => { if (s.n != null) n = K.clamp(Math.round(s.n), 0, maxN); if (s.ans !== undefined) ans.set(s.ans); };
        M.judge = (t) => {
          if (t.n != null && n !== t.n) return { correct: false, feedback: n > t.n ? `${unitName}를 너무 많이 매달았어요.` : `${unitName}가 모자라요.`, hint: `${unitName}를 하나씩 매달며 세어요.`, h3: `${unitName} ${t.n}개를 매달아요.` };
          if (t.stretch != null && Math.abs(k * n - t.stretch) > 1e-6) {
            if (Math.abs(nat + k * n - t.stretch) < 1e-6) return { correct: false, feedback: '전체 길이가 아니라 처음보다 늘어난 길이를 봐요.', hint: '늘어난 길이 = 지금 길이 − 처음 길이예요.', h3: `처음 길이 ${nat} cm를 빼고 생각해요.` };
            return { correct: false, feedback: k * n > t.stretch ? '너무 많이 늘어났어요.' : '아직 덜 늘어났어요.', hint: `${unitName} 하나를 매달 때마다 늘어나는 길이가 같아요. 그 길이를 먼저 알아봐요.`, h3: `${unitName} 하나에 ${k} cm씩 늘어나요. ${t.stretch} ÷ ${k} = ${r2(t.stretch / k)}개` };
          }
          if (t.read != null) {
            if (ans.v == null) return { correct: false, incomplete: true, feedback: '늘어난 길이를 답 칸에 써요.' };
            if (Math.abs(ans.v - t.read) > 1e-6) {
              if (Math.abs(ans.v - (t.read + nat)) < 1e-6) return { correct: false, feedback: '전체 길이를 썼어요. 처음 길이를 빼야 늘어난 길이예요.', hint: '늘어난 길이 = 지금 길이 − 처음 길이예요.', h3: `처음 길이는 ${nat} cm예요.` };
              return { correct: false, feedback: '늘어난 길이를 다시 재어 봐요.', hint: '처음 길이 선(점선)에서 지금 끝까지 자의 칸을 세어요.', h3: `${unitName} 하나에 ${k} cm씩 늘어나요.` };
            }
          }
          return null;
        };
        M.solve = (t) => { if (t.n != null) n = t.n; if (t.stretch != null) n = K.clamp(Math.round(t.stretch / k), 0, maxN); if (t.read != null) ans.set(t.read); };
        M.wrong = (t) => (t.n != null ? { n: K.clamp(t.n + 1, 0, maxN) === t.n ? t.n - 1 : K.clamp(t.n + 1, 0, maxN), ans: ans.v } : t.stretch != null ? { n: K.clamp(Math.round(t.stretch / k) + 1, 0, maxN) === Math.round(t.stretch / k) ? Math.round(t.stretch / k) - 1 : K.clamp(Math.round(t.stretch / k) + 1, 0, maxN), ans: ans.v } : t.read != null ? { n, ans: r2(t.read + nat) } : null);
        M.hint1 = (t) => (t.read != null ? '처음 길이에서 얼마나 더 늘어났는지 자로 재어요. 전체 길이와 늘어난 길이는 달라요.' : '추를 하나 더 매달 때마다 용수철이 늘어나는 길이가 같은지 살펴요.');
        M.dist = (a, b) => Math.abs((a.n || 0) - (b.n || 0)) + (a.ans === b.ans ? 0 : 1);
      }

      // ================= 빗면·밀기 =================
      if (mode === 'ramp' || mode === 'push') {
        const surfaces = Array.isArray(o.surfaces) && o.surfaces.length ? o.surfaces : [{ name: '매끄러운 면', mu: 0.08 }, { name: '거친 면', mu: 0.35 }];
        const V = {
          angle: Object.assign(range(o.angles, [10, 50, 10]), { label: '기울기', unit: '°' }),
          force: Object.assign(range(o.forces, [0, 10, 1]), { label: '미는 힘', unit: 'N' }),
          mass: Object.assign(range(o.masses, [1, 4, 1]), { label: '무게', unit: '덩이' }),
        };
        const vars = mode === 'ramp' ? ['angle', 'mass'] : ['force', 'mass'];
        const lock = Array.isArray(o.lock) ? o.lock : [];
        const val = { angle: V.angle.min + V.angle.step, force: V.force.min + V.force.step * 2, mass: V.mass.min, surface: 0 };
        let ran = false; let result = null;
        const W = 640; const H = 330; const FY = 270;
        const st = kit.stage(box, { viewBox: [W, H], label: mode === 'ramp' ? '빗면 실험. 기울기와 무게, 면을 정한 뒤 굴리기를 눌러요.' : '밀기 실험. 미는 힘과 무게, 면을 정한 뒤 밀기를 눌러요.' });
        bg(st, W, H);
        const G = st.layer('lab');
        kit.piece(st, G, { shape: { type: 'rect', x: 20, y: FY, w: W - 40, h: 22, rx: 4 }, color: 'buttercup', depth: 2 });
        const surfTxt = kit.el('text', { x: W - 30, y: FY + 16, 'text-anchor': 'end', 'font-size': 13, class: 'pk-text', fill: '#6E530F' }, G);
        const ramp = kit.el('polygon', { fill: print ? '#eee' : '#D7CBEB', stroke: '#473B6B', 'stroke-width': 2, points: '' }, G);
        const angTxt = kit.el('text', { 'font-size': 15, class: 'pk-text', fill: '#473B6B' }, G);
        const body = kit.el('g', null, st.layer('body'));
        const blocks = [];
        for (let i = 0; i < V.mass.max; i++) { const g = kit.el('g', null, body); kit.piece(st, g, { shape: { type: 'rect', x: -22, y: -20 - i * 18, w: 44, h: 18, rx: 4 }, color: i % 2 ? 'sky' : 'mint', depth: 1 }); blocks.push(g); }
        const wheels = kit.el('g', null, body);
        if (mode === 'ramp') { kit.el('circle', { cx: -13, cy: 2, r: 6, fill: '#3D352E' }, wheels); kit.el('circle', { cx: 13, cy: 2, r: 6, fill: '#3D352E' }, wheels); }
        const arrow = kit.el('g', null, st.layer('body'));
        const arrowLine = kit.el('rect', { x: 0, y: -4, width: 1, height: 8, fill: '#702830' }, arrow);
        const arrowHead = kit.el('polygon', { points: '0,-11 14,0 0,11', fill: '#702830' }, arrow);
        const outTxt = kit.el('text', { x: W / 2, y: 44, 'text-anchor': 'middle', 'font-size': 19, class: 'pk-text', fill: '#275C46' }, G);
        const RL = 300; const RX = 40; // 빗면 아래쪽 끝 x는 RX + 빗면 가로
        const geom = () => { const a = (val.angle * Math.PI) / 180; const w = RL * Math.cos(a); const hh = RL * Math.sin(a); return { a, w, hh, x1: RX + w, top: [RX, FY - hh] }; };
        const physics = () => {
          const mu = surfaces[val.surface].mu || 0;
          if (mode === 'ramp') { const a = (val.angle * Math.PI) / 180; const acc = 9.8 * (Math.sin(a) - mu * Math.cos(a)); return acc <= 0.05 ? { moved: false } : { moved: true, time: r2(Math.sqrt((2 * 1) / acc)) }; }
          const net = val.force - mu * val.mass * 9.8 * 0.5;
          if (net <= 0) return { moved: false };
          const v = (net / val.mass) * 0.6; return { moved: true, dist: Math.round(((v * v) / (2 * Math.max(0.05, mu) * 9.8)) * 100) };
        };
        const place = (p) => {
          // p: 0~1 이동 정도
          for (let i = 0; i < blocks.length; i++) blocks[i].setAttribute('display', i < val.mass ? 'inline' : 'none');
          if (mode === 'ramp') {
            const g = geom(); const x = RX + 26 + (g.w - 26) * Math.min(p, 1); const y = FY - g.hh + (x - RX) * Math.tan(g.a) - 6;
            const extra = p > 1 ? (p - 1) * 200 : 0;
            kit.transform(body, { x: x + extra, y: p >= 1 ? FY - 8 : y, r: p >= 1 ? 0 : val.angle, cx: 0, cy: 0 });
          } else kit.transform(body, { x: 120 + p * Math.min(400, (result && result.dist ? result.dist : 0) * 4), y: FY - 8 });
        };
        let anim = 0;
        const run = async () => {
          result = physics(); ran = true; const my = ++anim;
          outTxt.textContent = '';
          if (result.moved) {
            const ms = mode === 'ramp' ? Math.min(2600, result.time * 900) : 1200; const end = mode === 'ramp' ? 1.6 : 1;
            await kit.tween(ms, (q) => { if (my === anim) place(q * end); });
          } else { place(0); }
          if (my !== anim) return;
          M.paint(); log(); kit.tick('ok');
          kit.announce(outText());
        };
        const outText = () => (!ran || !result ? '' : !result.moved ? '움직이지 않았어요.' : mode === 'ramp' ? `빗면을 내려오는 데 ${result.time}초 걸렸어요.` : `${result.dist} cm 미끄러졌어요.`);
        const ups = [];
        if (panel && !ro) {
          for (const k of vars) if (!lock.includes(k)) ups.push(stepRow(panel, V[k].label, () => `${val[k]} ${V[k].unit}`, (d) => { val[k] = snapTo(val[k] + d * V[k].step, V[k]); ran = false; result = null; anim++; changed(); }));
          if (!lock.includes('surface') && surfaces.length > 1) {
            h('p', { class: `${P}-q` }, panel, '면');
            const setS = pickRow(panel, '면', surfaces.map((s) => s.name), (i) => { val.surface = i; setS(i); ran = false; result = null; anim++; changed(); });
            setS(val.surface); M._setS = setS;
          }
          const row = h('div', { class: `${P}-row` }, panel);
          button(row, `<i class="fi fi-rr-play" aria-hidden="true"></i> ${mode === 'ramp' ? '굴리기' : '밀기'}`, mode === 'ramp' ? '굴리기' : '밀기', () => run());
        }
        M.paint = () => {
          const g = geom();
          if (mode === 'ramp') {
            ramp.setAttribute('points', `${RX},${g.top[1]} ${g.x1},${FY} ${RX},${FY}`);
            angTxt.setAttribute('x', g.x1 - 70); angTxt.setAttribute('y', FY - 8); angTxt.textContent = `${val.angle}°`;
            arrow.setAttribute('display', 'none');
          } else {
            ramp.setAttribute('points', ''); angTxt.textContent = '';
            arrow.setAttribute('display', val.force > 0 ? 'inline' : 'none');
            const L = 8 + val.force * 7; kit.transform(arrow, { x: 92 - L - 14, y: FY - 20 }); arrowLine.setAttribute('width', L); arrowHead.setAttribute('transform', `translate(${L} 0)`);
          }
          surfTxt.textContent = surfaces[val.surface].name;
          if (!ran) place(0);
          outTxt.textContent = outText();
          ups.forEach((u) => u()); if (M._setS) M._setS(val.surface);
        };
        M.state = () => Object.assign({}, ...vars.map((k) => ({ [k]: val[k] })), { surface: val.surface, ran });
        M.set = (s) => { for (const k of vars) if (s[k] != null) val[k] = snapTo(Number(s[k]), V[k]); if (s.surface != null) val.surface = K.clamp(Math.round(s.surface), 0, surfaces.length - 1); if (s.ran !== undefined) { ran = !!s.ran; result = ran ? physics() : null; if (ran) place(mode === 'ramp' ? 1.6 : 1); } anim++; };
        M.judge = (t) => {
          if (t.set) {
            const bad = Object.keys(t.set).filter((k) => val[k] !== t.set[k]);
            if (bad.length) {
              const k = bad[0]; const lab = k === 'surface' ? '면' : V[k] ? V[k].label : k;
              return { correct: false, feedback: `${josa(lab, '이', '가')} 문제에서 말한 것과 달라요.`, hint: '바꿀 것 하나만 바꾸고, 나머지는 같게 두어야 공정한 실험이에요.', h3: k === 'surface' ? `면을 '${surfaces[t.set.surface].name}'으로 골라요.` : `${josa(lab, '을', '를')} ${t.set[k]} ${V[k].unit}로 맞춰요.` };
            }
          }
          if ((t.run || t.move) && !ran) return { correct: false, incomplete: true, feedback: `${mode === 'ramp' ? '굴리기' : '밀기'}를 눌러 실험해요.` };
          if (t.move && !(result && result.moved)) return { correct: false, feedback: '물체가 움직이지 않았어요.', hint: mode === 'ramp' ? '빗면이 더 기울어지거나 면이 더 매끄러우면 내려가기 쉬워요.' : '미는 힘이 마찰을 이기려면 더 세게 밀거나 면이 매끄러워야 해요.', h3: mode === 'ramp' ? '기울기를 더 크게 하고 다시 굴려요.' : '미는 힘을 늘리고 다시 밀어요.' };
          return null;
        };
        M.solve = (t) => {
          if (t.set) for (const k of Object.keys(t.set)) { if (k === 'surface') val.surface = t.set.surface; else if (V[k]) val[k] = t.set[k]; }
          if (t.move) { if (mode === 'ramp') { val.angle = V.angle.max; val.surface = surfaces.reduce((b, s, i) => (s.mu < surfaces[b].mu ? i : b), 0); } else { val.force = V.force.max; val.mass = V.mass.min; val.surface = surfaces.reduce((b, s, i) => (s.mu < surfaces[b].mu ? i : b), 0); } }
          if (t.run || t.move) { ran = true; result = physics(); place(mode === 'ramp' ? 1.6 : 1); }
          anim++;
        };
        // 흔한 실수: 바꾸라는 것 말고 다른 변인도 함께 바꾼다(공정하지 않은 실험)
        M.wrong = (t) => {
          if (t.set) {
            const s = Object.assign(M.state(), t.set);
            const k = Object.keys(t.set)[0];
            if (k === 'surface') s.surface = (t.set.surface + 1) % surfaces.length; else if (V[k]) s[k] = t.set[k] + V[k].step <= V[k].max ? t.set[k] + V[k].step : t.set[k] - V[k].step;
            if (t.run) s.ran = true;
            return s;
          }
          if (t.move) { const s = M.state(); if (mode === 'push') { s.force = V.force.min; } else { s.angle = V.angle.min; s.surface = surfaces.reduce((b, x, i) => (x.mu > surfaces[b].mu ? i : b), 0); } s.ran = true; return s; }
          return null;
        };
        M.hint1 = (t) => (t.set ? '알아보려는 것 하나만 바꾸고, 다른 조건은 모두 같게 해요.' : mode === 'ramp' ? '빗면의 기울기와 면의 거칠기가 내려가는 빠르기에 어떤 영향을 주는지 생각해요.' : '미는 힘이 클수록, 면이 매끄러울수록 물체가 더 멀리 가요.');
        M.dist = (a, b) => vars.reduce((d, k) => d + Math.abs((a[k] || 0) - (b[k] || 0)) / V[k].step, 0) + (a.surface !== b.surface ? 1 : 0) + (a.ran !== b.ran ? 1 : 0);
      }

      // ================= 빠르기 =================
      if (mode === 'speed') {
        const movers = (Array.isArray(o.movers) && o.movers.length ? o.movers : [{ name: '가', d: 100, t: 20 }, { name: '나', d: 100, t: 16 }]).slice(0, 4).map((m) => ({ name: String(m.name), d: Number(m.d) || 1, t: Number(m.t) || 1 }));
        const ctl = !!o.control; const DR = range(o.dRange, [10, 200, 10]); const TR = range(o.tRange, [5, 60, 5]);
        const uD = o.unitD || 'm'; const uT = o.unitT || '초';
        const W = 640; const lane = 64; const H = 70 + movers.length * lane;
        const st = kit.stage(box, { viewBox: [W, H], label: `빠르기 비교 길. ${movers.length}개가 함께 출발해요. 출발을 누르면 정한 거리를 정한 시간 동안 가요.` });
        bg(st, W, H);
        const G = st.layer('track'); const X0 = 150; const X1 = W - 40;
        let ran = false; let anim = 0;
        const maxD = () => Math.max(...movers.map((m) => m.d), ctl ? DR.max : 0);
        const rows = movers.map((m, i) => {
          const y = 40 + i * lane;
          kit.piece(st, G, { shape: { type: 'rect', x: X0 - 10, y: y + 4, w: X1 - X0 + 20, h: lane - 12, rx: 10 }, color: i % 2 ? 'sky' : 'mint', depth: 1, fill: print ? '#fff' : null });
          const nm = kit.el('text', { x: 20, y: y + 26, 'font-size': 16, class: 'pk-text', fill: '#3D352E' }, G); nm.textContent = m.name;
          const info = kit.el('text', { x: 20, y: y + 46, 'font-size': 13, class: 'pk-text', fill: '#544B42' }, G);
          const flag = kit.el('line', { y1: y + 6, y2: y + lane - 10, stroke: '#702830', 'stroke-width': 3 }, G);
          const runner = kit.el('g', null, st.layer('run'));
          kit.piece(st, runner, { shape: { type: 'circle', r: 14 }, color: ['peach', 'lavender', 'buttercup', 'rose'][i], depth: 2 });
          kit.el('text', { x: 0, y: 5, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#3D352E' }, runner).textContent = m.name.slice(0, 1);
          const sp = kit.el('text', { x: X1, y: y + 22, 'text-anchor': 'end', 'font-size': 14, class: 'pk-text', fill: '#275C46' }, G);
          return { y, info, flag, runner, sp };
        });
        kit.el('text', { x: X0, y: 28, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#544B42' }, G).textContent = '출발';
        const xOf = (d) => X0 + ((X1 - X0 - 20) * d) / maxD();
        const place = (q) => movers.forEach((m, i) => { const T = Math.max(...movers.map((x) => x.t)); const p = Math.min(1, (q * T) / m.t); kit.transform(rows[i].runner, { x: xOf(m.d * p), y: rows[i].y + lane / 2 - 4 }); });
        const run = async () => {
          ran = true; const my = ++anim;
          await kit.tween(2400, (q) => { if (my === anim) place(q); }, { ease: (x) => x });
          if (my !== anim) return; M.paint(); log(); kit.tick('ok');
        };
        let ups = [];
        if (panel && !ro) {
          if (ctl) {
            ups.push(stepRow(panel, `${movers[0].name}의 거리`, () => `${movers[0].d} ${uD}`, (d) => { movers[0].d = snapTo(movers[0].d + d * DR.step, DR); ran = false; anim++; changed(); }));
            ups.push(stepRow(panel, `${movers[0].name}의 시간`, () => `${movers[0].t} ${uT}`, (d) => { movers[0].t = snapTo(movers[0].t + d * TR.step, TR); ran = false; anim++; changed(); }));
          }
          const row = h('div', { class: `${P}-row` }, panel);
          button(row, '<i class="fi fi-rr-play" aria-hidden="true"></i> 출발', '출발', () => run());
        }
        const spd = (m) => r2(m.d / m.t);
        M.paint = () => {
          movers.forEach((m, i) => {
            const R = rows[i]; R.info.textContent = `${m.d} ${uD} · ${m.t}${uT}`;
            R.flag.setAttribute('x1', xOf(m.d)); R.flag.setAttribute('x2', xOf(m.d));
            R.sp.textContent = o.showSpeed && ran && showVals() ? `${spd(m)} ${uD}/${uT}` : '';
          });
          if (!ran) place(0);
          ups.forEach((u) => u());
        };
        M.state = () => (ctl ? { d: movers[0].d, t: movers[0].t, ran } : { ran });
        M.set = (s) => { if (ctl) { if (s.d != null) movers[0].d = snapTo(Number(s.d), DR); if (s.t != null) movers[0].t = snapTo(Number(s.t), TR); } if (s.ran !== undefined) { ran = !!s.ran; if (ran) place(1); } anim++; };
        M.judge = (t) => {
          if (t.speed != null && ctl) {
            const v = spd(movers[0]);
            if (Math.abs(v - t.speed) > 1e-6) return { correct: false, feedback: v > t.speed ? '목표보다 빨라요.' : '목표보다 느려요.', hint: '속력 = 간 거리 ÷ 걸린 시간이에요.', h3: `${t.speed} × 걸린 시간 = 간 거리가 되게 맞춰요. 예: 시간 ${movers[0].t}${uT}이면 거리 ${r2(t.speed * movers[0].t)} ${uD}` };
          }
          if (t.beat != null && ctl) {
            const other = movers[t.beat];
            if (other && !(spd(movers[0]) > spd(other))) return { correct: false, feedback: `${movers[0].name}가 ${other.name}보다 빠르지 않아요.`, hint: '같은 시간 동안 더 먼 거리를 가거나, 같은 거리를 더 짧은 시간에 가면 더 빨라요.', h3: `${other.name}의 속력은 ${spd(other)} ${uD}/${uT}예요. 그보다 크게 만들어요.` };
          }
          if (t.run && !ran) return { correct: false, incomplete: true, feedback: '출발을 눌러 견주어 봐요.' };
          return null;
        };
        M.solve = (t) => {
          if (ctl && t.speed != null) { let best = null; for (let tt = TR.min; tt <= TR.max + 1e-9; tt = r2(tt + TR.step)) { const dd = r2(t.speed * tt); if (dd >= DR.min && dd <= DR.max && Math.abs((dd - DR.min) / DR.step - Math.round((dd - DR.min) / DR.step)) < 1e-6) { best = [dd, tt]; break; } } if (best) { movers[0].d = best[0]; movers[0].t = best[1]; } }
          if (ctl && t.beat != null && movers[t.beat]) { movers[0].d = DR.max; movers[0].t = TR.min; }
          if (t.run) { ran = true; place(1); }
          anim++;
        };
        // 흔한 실수: 거리만(또는 시간만) 보고 판단한다 — 시간을 목표 속력에 맞추지 않고 거리만 바꾼 상태
        M.wrong = (t) => {
          if (ctl && t.speed != null) { M.solve(t); const s = M.state(); s.d = s.d + DR.step <= DR.max ? r2(s.d + DR.step) : r2(s.d - DR.step); s.ran = !!t.run || s.ran; return s; }
          if (ctl && t.beat != null && movers[t.beat]) { const s = M.state(); const o2 = movers[t.beat]; s.d = snapTo(o2.d, DR); s.t = snapTo(o2.t + TR.step, TR); if (s.d / s.t > spd(o2)) s.d = DR.min; s.ran = !!t.run; return s; }
          return null;
        };
        M.hint1 = () => '빠르기는 거리 하나나 시간 하나만으로 정할 수 없어요. 같은 시간 동안 간 거리(속력 = 거리 ÷ 시간)로 견주어요.';
        M.dist = (a, b) => Math.abs((a.d || 0) - (b.d || 0)) / DR.step + Math.abs((a.t || 0) - (b.t || 0)) / TR.step + (a.ran !== b.ran ? 1 : 0);
      }

      // ---------- 묻기 칸 ----------
      if (panel) {
        ask = askPanel(panel, o, () => log());
        if (panel.childNodes.length) box.appendChild(panel);
      }
      const state = () => Object.assign(M.state(), (o.ask ? { pick: ask.pick } : {}), (o.askNum ? { num: ask.num } : {}));
      log = () => kit.recorder.log('force', state());
      const setState = (s) => { s = s || {}; M.set(s); ask.set(s); revealed = false; M.paint(); };
      const start = state();
      M.paint();
      function judge(t) {
        t = t || {};
        const r = M.judge(t); if (r) return r;
        const a = judgeAsk(t, state(), o); if (a) return a;
        return { correct: true, feedback: '맞아요!' };
      }
      return {
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
          const h1 = onlyAsk ? '실험에서 바꾼 것과 달라진 것을 짝지어 생각한 뒤 답해요.' : M.hint1(t);
          if (r.correct) return { hint: h1, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: h1, correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
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
    },
  });
})(window.PaperKit);
