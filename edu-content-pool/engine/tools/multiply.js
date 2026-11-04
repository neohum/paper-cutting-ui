/* 곱셈 배열판 — 행·열 배열 만들기, 똑같이 묶어 세기(나눗셈 묶기·나머지), 곱셈구구 표 채우기.
 * 2학년 곱셈·곱셈구구, 3학년 나눗셈·곱셈, 4학년 규칙(곱셈표 규칙)에 쓴다. 문항 내용은 모두 차시 데이터로 들어온다.
 *
 * 옵션(toolOptions·levels)
 * | 키 | 뜻 | 기본 |
 * | mode | 'array' 배열 · 'group' 묶어 세기 · 'table' 곱셈표 | 'array' |
 * | shape, color | 낱개 모양('circle'|'square'|'star'|'heart')·색(팔레트 이름) | 'circle', 'peach' |
 * | (array) maxRows, maxCols | 만들 수 있는 줄 수·한 줄 개수 최대 | 10, 10 |
 * | (array) lock | 배열을 잠근다(state의 rows·cols를 보고 곱만 쓴다) | false |
 * | (array) total | '모두 몇 개' 칸을 보인다(target.total이 있으면 저절로 켜짐) | false |
 * | (array) showCounts | 'n줄'·'m개씩' 글을 보인다 | lock이면 false, 아니면 true |
 * | (array) showTotal | '3 × 4 = 12' 식을 보인다(쉬움) — revealAfterCheck면 곱은 맞힌 뒤에만 | false |
 * | (array) bands | 줄마다 띠를 둘러 '몇 개씩 몇 묶음'으로 보이게 한다 | false |
 * | (array) 배치(옵션 아님, 화면 폭에 따라 저절로) | 칸 한 칸이 화면에서 44px 이상이거나 마우스가 주 입력(pointer: fine, 크롬북 등)이면 칸을 눌러 배열을 정한다. 터치가 주 입력이고 칸이 44px 미만(휴대폰·태블릿)이면 칸은 '가로 n개, 세로 m줄' 보기 전용 그림이 되고, 판 아래에 '한 줄의 개수'·'줄 수' 번호 띠(44px 단추, 다섯 개씩 접어 줄 바꿈)가 나타나 눌러서 그 수로 맞춘다. −/+ 칸과 모서리 손잡이는 어느 폭에서나 그대로 | — |
 * | (group) count | 낱개 수(1~60) | 12 |
 * | (group) by | 'size' 몇 개씩 묶기(포함제) · 'plates' 접시 몇 개에 똑같이 나누기(등분제) | 'size' |
 * | (group) ask | 쓰는 칸: 'groups' 묶음 수 · 'size' 한 묶음의 수 · 'total' 전체 · 'none' | target.answer가 있으면 by에 맞게 |
 * | (group) askLabel | 쓰는 칸 이름을 바꾼다 | — |
 * | (group) rest | '남은 것' 칸을 보인다(target.rest가 있으면 저절로 켜짐) | false |
 * | (group) showCount | '묶음 n개 · 남은 것 m개'를 보인다(쉬움) — revealAfterCheck면 맞힌 뒤에만 | false |
 * | (group) maxSize | 묶는 수·접시 수 최대 | count |
 * | (table) rowsOf | 줄 머리(단) 배열 | [2,3,4,5,6,7,8,9] |
 * | (table) colsOf | 칸 머리(곱하는 수) 배열 | [1,…,9] |
 * | (table) blanks | 빈칸: [[단, 곱하는 수], …] · 'all' · 'row:3' · 'col:4' | [] |
 * | (table) op | '×' 또는 '+'(덧셈표) | '×' |
 * | (table) digits | 빈칸에 쓸 수 있는 자릿수 | 3과 빈칸 정답의 가장 긴 자릿수 가운데 큰 값 |
 * | revealAfterCheck | 살아 있는 식·묶음 수를 숨기고, 틀린 확인에서 어느 칸이 틀렸는지 표시하지 않는다 | — |
 * | print | 활동지 그림(조작 칸 없음, 식·입력 값 숨김) | — |
 *
 * 상태
 * | array | { rows, cols, total: 수|null } |
 * | group | { size: 수|null, plates: 수|null, answer: 수|null, rest: 수|null } |
 * | table | { cells: { '3x4': 수|null, … } } — 빈칸만 |
 *
 * target
 * | array | { rows?, cols?, product?, anyOrder?: true, total?: true } — 4개씩 3줄: { rows: 3, cols: 4 }, 12개를 배열로: { product: 12 } |
 * | group | { size?, plates?, groups?, answer?, rest? } — 12를 3씩: { size: 3, answer: 4 }, 14를 4씩: { size: 4, answer: 3, rest: 2 } |
 * | table | { cells: true } — 빈칸이 모두 맞아야 한다 |
 *
 * 예) 배열 만들기: toolOptions { mode: 'array' }, state { rows: 1, cols: 1 }, target { rows: 3, cols: 5 }
 *     나눗셈: toolOptions { mode: 'group', count: 15, ask: 'groups' }, target { size: 5, answer: 3 }
 *     곱셈표: toolOptions { mode: 'table', rowsOf: [3], colsOf: [1,2,3,4,5,6,7,8,9], blanks: 'row:3' }, target { cells: true }
 * 키보드: 배열 모서리 단추에 Tab → ←/→ 한 줄 개수, ↑/↓ 줄 수. 표 빈칸에 Tab → 숫자 키·↑/↓·Backspace. 나머지는 아래 단추(Tab+Enter).
 */
(function (K) {
  'use strict';
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  const intOr = (v, d) => (Number.isFinite(Number(v)) && v !== null && v !== '' ? Math.round(Number(v)) : d);
  function ensureStyle() {
    if (document.getElementById('mu-style')) return;
    const s = document.createElement('style'); s.id = 'mu-style';
    s.textContent = `
.mu-panel{display:grid;gap:8px;margin-top:8px}
.mu-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.mu-row > span{font-weight:700}
.mu-b{min-height:44px;min-width:44px;padding:6px 12px;border-radius:12px;border:1px solid rgba(61,53,46,.22);background:#FFFDF9;color:#3D352E;font:inherit;font-weight:700;line-height:1.3;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;word-break:keep-all}
.mu-b .fi{display:inline-flex;line-height:1}
.mu-step{display:inline-flex;align-items:center;gap:4px;padding:2px 4px;border-radius:14px;background:#F4F0FA}
.mu-in{min-height:44px;width:4.6em;box-sizing:border-box;padding:6px 8px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.1em;font-weight:800;text-align:center;color:#275C46;background:#fff}
.mu-ticks{display:grid;gap:4px;max-width:260px}
.mu-ticks .mu-b{padding:6px 4px}
.mu-ticks .mu-b[aria-pressed="true"]{background:#82C2A8;border-color:#275C46;color:#173A2B}
.mu-strip{display:grid;gap:4px}
.mu-strip > span{font-weight:700}
.mu-pad{display:grid;grid-template-columns:repeat(6,minmax(44px,1fr));gap:6px;max-width:420px}
@media print{.mu-panel{display:none}}
`;
    document.head.appendChild(s);
  }
  function button(parent, html, label, onClick) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'mu-b'; b.setAttribute('tabindex', '0');
    b.innerHTML = html; if (label) b.setAttribute('aria-label', label);
    b.addEventListener('click', onClick); parent.appendChild(b); return b;
  }
  // 숫자 칸: 직접 쓰거나 − + 단추·↑↓로 1씩 바꾼다
  function numBox(parent, label, onSet) {
    const wrap = document.createElement('span'); wrap.className = 'mu-step';
    const inp = document.createElement('input'); inp.className = 'mu-in'; inp.type = 'text'; inp.setAttribute('tabindex', '0');
    inp.setAttribute('inputmode', 'numeric'); inp.setAttribute('autocomplete', 'off'); inp.setAttribute('aria-label', label);
    const bump = (d) => onSet(Math.max(0, (Number(inp.value) || 0) + d));
    const minus = button(wrap, '<i class="fi fi-rr-minus" aria-hidden="true"></i>', `${label} 줄이기`, () => bump(-1));
    wrap.appendChild(inp);
    button(wrap, '<i class="fi fi-rr-plus" aria-hidden="true"></i>', `${label} 늘리기`, () => bump(1));
    void minus;
    inp.addEventListener('input', () => { inp.value = inp.value.replace(/[^0-9]/g, '').slice(0, 4); onSet(inp.value === '' ? null : Number(inp.value), true); });
    inp.addEventListener('keydown', (e) => { const d = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!d) return; e.preventDefault(); bump(d); });
    parent.appendChild(wrap);
    return inp;
  }
  function shapeOf(kind, r) {
    if (kind === 'square') return { type: 'rect', w: r * 1.8, h: r * 1.8, rx: r * 0.35 };
    if (kind === 'star') { const p = []; for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i - Math.PI / 2; const q = i % 2 ? r * 0.48 : r * 1.1; p.push(`${(Math.cos(a) * q).toFixed(1)},${(Math.sin(a) * q).toFixed(1)}`); } return { type: 'poly', points: p.join(' ') }; }
    if (kind === 'heart') return { type: 'path', d: `M0 ${r * 0.9} C ${-r * 1.4} ${-r * 0.1} ${-r * 0.7} ${-r * 1.2} 0 ${-r * 0.45} C ${r * 0.7} ${-r * 1.2} ${r * 1.4} ${-r * 0.1} 0 ${r * 0.9} Z` };
    return { type: 'circle', r };
  }

  // 무대가 작게 그려지면(휴대폰) 투명 누름 영역을 화면 HIT_PX 이상으로 넓힌다 — 보이는 그림과 넓은 화면의 누름 영역은 그대로.
  // list: 사각형 요소, 또는 [요소, { x0, x1, y0, y1 }] — 그 요소 좌표계에서 넓혀도 되는 한계(이웃 누름 영역과 겹치지 않게)
  const HIT_PX = 46;
  function fitHits(st, list) {
    const base = list.map((it) => { const [el, lim] = Array.isArray(it) ? it : [it, null]; return { el, lim, x: +el.getAttribute('x'), y: +el.getAttribute('y'), w: +el.getAttribute('width'), h: +el.getAttribute('height') }; });
    const grow = (a, len, need, lo, hi) => { const n = Math.max(len, Math.min(need, hi - lo)); const s = Math.min(Math.max(a - (n - len) / 2, lo), hi - n); const x = Math.min(a, s); return [x, Math.max(a + len, s + n) - x]; };
    const run = () => {
      const rc = st.svg.getBoundingClientRect(); if (!rc.width || !rc.height) return;
      const need = HIT_PX / Math.min(rc.width / st.width, rc.height / st.height);
      for (const b of base) {
        const L = b.lim || {};
        const [x, w] = grow(b.x, b.w, need, L.x0 ?? -Infinity, L.x1 ?? Infinity);
        const [y, h] = grow(b.y, b.h, need, L.y0 ?? -Infinity, L.y1 ?? Infinity);
        b.el.setAttribute('x', x); b.el.setAttribute('width', w); b.el.setAttribute('y', y); b.el.setAttribute('height', h);
      }
    };
    run(); if (typeof ResizeObserver === 'function') new ResizeObserver(run).observe(st.svg);
    return run;
  }

  K.registerTool('multiply', {
    name: '곱셈 배열판',
    create(box, o, kit) {
      ensureStyle();
      const mode = ['array', 'group', 'table'].includes(o.mode) ? o.mode : 'array';
      const controls = !o.print;
      const color = o.color || 'peach'; const kind = o.shape || 'circle';
      const log = () => kit.recorder.log('multiply', state());
      let revealed = false;
      const panel = controls ? document.createElement('div') : null; if (panel) panel.className = 'mu-panel';
      let target = null;

      // ================= array =================
      const maxR = Math.max(1, Math.min(10, o.maxRows || 10)); const maxC = Math.max(1, Math.min(10, o.maxCols || 10));
      let rows = 1; let cols = 1; let total = null;
      let dots = []; let rowTxt; let colTxt; let eqTxt; let corner; let bandEls = []; let totalIn = null; let rowsIn = null; let colsIn = null;
      const lock = !!o.lock;
      let L = null; let arrCS = 0; const cellRects = []; let tapCells = true; let strips = null; const rowTicks = []; const colTicks = [];
      const showCounts = o.showCounts != null ? !!o.showCounts : !lock;
      // ================= group =================
      const count = Math.max(1, Math.min(60, intOr(o.count, 12)));
      const by = o.by === 'plates' ? 'plates' : 'size';
      const maxSize = Math.max(1, Math.min(count, intOr(o.maxSize, count)));
      let size = null; let plates = null; let answer = null; let rest = null;
      let items = []; let plateEls = []; let gTxt; let ansIn = null; let restIn = null; let sizeOut = null;
      // ================= table =================
      const rowsOf = (Array.isArray(o.rowsOf) && o.rowsOf.length ? o.rowsOf : [2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 10).map(Number);
      const colsOf = (Array.isArray(o.colsOf) && o.colsOf.length ? o.colsOf : [1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 10).map(Number);
      const op = o.op === '+' ? '+' : '×';
      const calc = (a, b) => (op === '+' ? a + b : a * b);
      const keyOf = (a, b) => `${a}x${b}`;
      let blanks = [];
      const cellVals = {}; const cellEls = {}; let selKey = null; let cellDigits = 3;

      let W = 560; let H = 400;
      // 곱셈표 줄 높이: 휴대폰에서 칸 폭(48)은 화면 46px 를 넘는데 높이(42)만 모자라면 줄 높이만 늘린다(넓은 화면은 42 그대로).
      // 칸 폭부터 모자란 큰 표(열 8개 이상)는 그대로 둔다 — 아래 숫자 단추의 '다음 빈칸'으로 칸을 옮길 수 있다
      let TCH = 42;
      if (mode === 'table') {
        W = Math.max(300, (colsOf.length + 1) * 48 + 24);
        const kx = !o.print && box.clientWidth ? box.clientWidth / W : 1;
        if (48 * kx >= HIT_PX && 42 * kx < HIT_PX) TCH = Math.ceil(HIT_PX / kx);
        H = Math.max(120, (rowsOf.length + 1) * TCH + 24);
      }
      if (mode === 'group') H = 360;
      const st = kit.stage(box, { viewBox: [W, H], label: mode === 'array' ? '곱셈 배열판. 몇 개씩 몇 줄인지 배열을 만드세요.' : mode === 'group' ? `묶어 세기 판. ${count}개를 똑같이 묶어 보세요.` : '곱셈표. 빈칸에 알맞은 수를 쓰세요.' });
      kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 16 }, color: 'cream', fill: '#FBF6EC', depth: 2, texture: true });

      if (mode === 'array') {
        const GX = 96; const GY = 64; const CS = Math.min(lock ? 56 : 34, Math.floor(Math.min((W - GX - 40) / maxC, (H - GY - 70) / maxR)));
        L = st.layer('grid');
        // 바탕 칸(누르면 그 칸까지 배열이 된다). 칸이 화면에서 44px 미만이면 보기 전용 그림으로 바꾸고 번호 띠로 고른다(fitArray)
        for (let r = 0; r < maxR; r++) for (let c = 0; c < maxC; c++) {
          const cell = kit.el('rect', { x: GX + c * CS + 2, y: GY + r * CS + 2, width: CS - 4, height: CS - 4, rx: 6, fill: o.print ? 'none' : '#F1E9DB', class: 'mu-cell' }, L);
          if (controls && !lock) cell.addEventListener('click', () => { if (tapCells) setArray(r + 1, c + 1); });
          cellRects.push(cell);
        }
        arrCS = CS;
        const bandL = st.layer('bands');
        for (let r = 0; r < maxR; r++) bandEls.push(kit.el('rect', { x: GX - 3, y: GY + r * CS, width: 1, height: CS, rx: CS / 2, fill: 'none', stroke: '#B8A6D9', 'stroke-width': 2.2, display: 'none' }, bandL));
        const DL = st.layer('dots');
        for (let r = 0; r < maxR; r++) for (let c = 0; c < maxC; c++) {
          const p = kit.piece(st, DL, { shape: shapeOf(kind, CS * 0.34), color, depth: 1, x: GX + c * CS + CS / 2, y: GY + r * CS + CS / 2 });
          p.g.setAttribute('pointer-events', 'none'); dots.push({ r, c, g: p.g });
        }
        const T = (x, y, a, s, f) => kit.el('text', { x, y, 'text-anchor': a, 'font-size': s, class: 'pk-text', fill: f }, st.layer('labels'));
        colTxt = T(GX + (maxC * CS) / 2, GY - 18, 'middle', 17, '#473B6B');
        rowTxt = T(GX - 14, GY + (maxR * CS) / 2, 'end', 17, '#473B6B');
        eqTxt = T(W / 2, H - 22, 'middle', 20, '#275C46');
        // 모서리 손잡이: 끌거나 방향키로 배열 크기를 바꾼다
        corner = kit.el('g', null, st.layer('corner'));
        const cornerHit = kit.el('rect', { x: -24, y: -24, width: 48, height: 48, class: 'pk-hit' }, corner);
        kit.piece(st, corner, { shape: { type: 'circle', r: 11 }, color: 'mint', depth: 1 });
        kit.el('path', { d: 'M-5 -1 L0 4 L5 -1', fill: 'none', stroke: '#275C46', 'stroke-width': 2.2, transform: 'rotate(-45)' }, corner);
        if (controls && !lock) {
          fitHits(st, [cornerHit]); // 휴대폰에서는 칸이 보기 전용 그림이라(번호 띠로 고름) 손잡이 누름 영역만 화면 46px 로 넓힌다
          corner.classList.add('pk-draggable'); corner.setAttribute('tabindex', '0'); corner.setAttribute('role', 'button');
          corner.setAttribute('aria-label', '배열 모서리. 왼쪽 오른쪽 방향키는 한 줄의 개수, 위 아래 방향키는 줄 수');
          let dragging = false;
          corner.addEventListener('pointerdown', (e) => { e.preventDefault(); dragging = true; corner.setPointerCapture(e.pointerId); corner.classList.add('pk-lifted'); });
          corner.addEventListener('pointermove', (e) => { if (!dragging) return; const p = st.point(e); setArray(Math.round((p.y - GY) / CS), Math.round((p.x - GX) / CS), true); });
          const end = (e) => { if (!dragging) return; dragging = false; corner.classList.remove('pk-lifted'); try { corner.releasePointerCapture(e.pointerId); } catch (_) { /* 이미 풀림 */ } log(); kit.announce(`${cols}개씩 ${rows}줄`); };
          corner.addEventListener('pointerup', end); corner.addEventListener('pointercancel', end);
          corner.addEventListener('keydown', (e) => {
            const d = { ArrowRight: [0, 1], ArrowLeft: [0, -1], ArrowDown: [1, 0], ArrowUp: [-1, 0] }[e.key];
            if (!d) return; e.preventDefault(); setArray(rows + d[0], cols + d[1]);
          });
        }
        var paintArray = () => { // eslint-disable-line no-var
          dots.forEach((d) => d.g.setAttribute('display', d.r < rows && d.c < cols ? 'inline' : 'none'));
          bandEls.forEach((b, r) => { const on = !!o.bands && r < rows; b.setAttribute('display', on ? 'inline' : 'none'); b.setAttribute('width', cols * CS + 6); });
          kit.transform(corner, { x: GX + cols * CS, y: GY + rows * CS });
          corner.setAttribute('display', controls && !lock ? 'inline' : 'none');
          colTxt.setAttribute('x', GX + (cols * CS) / 2); rowTxt.setAttribute('y', GY + (rows * CS) / 2 + 6);
          colTxt.textContent = showCounts ? `${cols}개씩` : ''; rowTxt.textContent = showCounts ? `${rows}줄` : '';
          const live = o.showTotal && !o.print;
          eqTxt.textContent = live ? `${cols} × ${rows} = ${!o.revealAfterCheck || revealed ? cols * rows : '?'}` : '';
          if (rowsIn) rowsIn.value = rows; if (colsIn) colsIn.value = cols;
          colTicks.forEach((b, i) => b.setAttribute('aria-pressed', String(i + 1 === cols)));
          rowTicks.forEach((b, i) => b.setAttribute('aria-pressed', String(i + 1 === rows)));
          fitArray();
          if (!tapCells) L.setAttribute('aria-label', `가로 ${cols}개, 세로 ${rows}줄 배열 그림`);
          if (totalIn) totalIn.value = total == null ? '' : total;
        };
        if (controls) {
          if (!lock) {
            // 번호 띠: 좁은 화면에서만 보인다. 눌러서 그 개수·줄 수로 바로 맞춘다
            strips = document.createElement('div'); strips.className = 'mu-panel'; strips.style.marginTop = '0'; strips.style.display = 'none'; // .mu-panel 의 display:grid 가 hidden 속성을 이긴다
            const strip = (label, n, list, name, onPick) => {
              const w = document.createElement('div'); w.className = 'mu-strip'; w.setAttribute('role', 'group'); w.setAttribute('aria-label', `${label} 번호 띠`);
              const t = document.createElement('span'); t.textContent = label; w.appendChild(t);
              const g = document.createElement('div'); g.className = 'mu-ticks'; g.style.gridTemplateColumns = `repeat(${Math.min(n, 5)}, minmax(44px, 1fr))`;
              for (let i = 1; i <= n; i++) list.push(button(g, String(i), name(i), () => onPick(i)));
              w.appendChild(g); strips.appendChild(w);
            };
            strip('한 줄의 개수', maxC, colTicks, (i) => `한 줄에 ${i}개`, (i) => setArray(rows, i));
            strip('줄 수', maxR, rowTicks, (i) => `${i}줄`, (i) => setArray(i, cols));
            panel.appendChild(strips);
            if (typeof ResizeObserver === 'function') new ResizeObserver(() => fitArray()).observe(st.svg);
            const row = document.createElement('div'); row.className = 'mu-row';
            const l1 = document.createElement('span'); l1.textContent = '한 줄에'; row.appendChild(l1);
            colsIn = numBox(row, '한 줄의 개수', (v, typing) => { if (v == null) return; setArray(rows, v, typing); });
            const l2 = document.createElement('span'); l2.textContent = '개씩'; row.appendChild(l2);
            rowsIn = numBox(row, '줄 수', (v, typing) => { if (v == null) return; setArray(v, cols, typing); });
            const l3 = document.createElement('span'); l3.textContent = '줄'; row.appendChild(l3);
            panel.appendChild(row);
          }
          if (o.total) addTotal();
        }
      }
      function addTotal() {
        if (totalIn || !panel) return;
        const row = document.createElement('div'); row.className = 'mu-row';
        const l = document.createElement('span'); l.textContent = o.totalLabel || '모두 몇 개인가요?'; row.appendChild(l);
        totalIn = numBox(row, '모두 몇 개', (v, typing) => { total = v; if (!typing && totalIn) totalIn.value = v == null ? '' : v; revealed = false; paint(); log(); });
        panel.appendChild(row);
      }
      // 칸 한 칸이 화면에서 44px 이상이거나 마우스가 주 입력이면 칸 누르기, 아니면(터치 + 작은 칸) 보기 전용 그림 + 번호 띠
      function fitArray() {
        if (!strips || !L) return;
        const rc = st.svg.getBoundingClientRect();
        if (!rc.width || !rc.height) return; // 아직 화면에 없으면 지금 배치를 둔다
        const pitch = arrCS * Math.min(rc.width / W, rc.height / H);
        // 마우스(정밀 포인터)가 주 입력이면 작은 칸도 누를 수 있으니 지금처럼 둔다 — 크롬북에선 칸이 30px 남짓이다
        const fine = typeof matchMedia === 'function' && matchMedia('(pointer: fine)').matches;
        const tap = fine || pitch >= 44;
        if (tap === tapCells && (strips.style.display === 'none') === tap) return;
        tapCells = tap; strips.style.display = tap ? 'none' : '';
        cellRects.forEach((cell) => { cell.setAttribute('class', tap ? 'mu-cell' : 'mu-cell-view'); cell.style.pointerEvents = tap ? '' : 'none'; });
        if (tap) { L.removeAttribute('role'); L.removeAttribute('aria-label'); } else { L.setAttribute('role', 'img'); L.setAttribute('aria-label', `가로 ${cols}개, 세로 ${rows}줄 배열 그림`); }
      }
      function setArray(r, c, quiet) {
        r = Math.max(1, Math.min(maxR, Math.round(Number(r)) || 1)); c = Math.max(1, Math.min(maxC, Math.round(Number(c)) || 1));
        if (r === rows && c === cols) { paint(); return; }
        rows = r; cols = c; revealed = false; paint();
        if (!quiet) { log(); kit.announce(`${cols}개씩 ${rows}줄`); }
      }

      if (mode === 'group') {
        const IL = st.layer('items');
        const PL = st.layer('plates');
        IL.parentNode.insertBefore(PL, IL);
        for (let i = 0; i < count; i++) {
          const p = kit.piece(st, IL, { shape: shapeOf(kind, 9), color, depth: 1 });
          p.g.setAttribute('pointer-events', 'none'); items.push(p.g);
        }
        for (let i = 0; i < count; i++) plateEls.push(kit.el('rect', { rx: 14, fill: o.print ? '#FFFFFF' : '#FFF9E8', stroke: o.print ? '#000000' : '#EDC96C', 'stroke-width': 2.4, display: 'none' }, PL));
        gTxt = kit.el('text', { x: W / 2, y: H - 20, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: '#275C46' }, st.layer('labels'));
        if (controls) {
          const row = document.createElement('div'); row.className = 'mu-row';
          const l = document.createElement('span'); l.textContent = by === 'plates' ? '접시(묶음) 수' : '몇 개씩 묶을까요?'; row.appendChild(l);
          button(row, '<i class="fi fi-rr-minus" aria-hidden="true"></i>', by === 'plates' ? '접시 수 줄이기' : '묶는 수 줄이기', () => setGroup(((by === 'plates' ? plates : size) || 2) - 1));
          sizeOut = document.createElement('output'); sizeOut.className = 'mu-in'; sizeOut.style.display = 'inline-flex'; sizeOut.style.alignItems = 'center'; sizeOut.style.justifyContent = 'center'; row.appendChild(sizeOut);
          button(row, '<i class="fi fi-rr-plus" aria-hidden="true"></i>', by === 'plates' ? '접시 수 늘리기' : '묶는 수 늘리기', () => setGroup(((by === 'plates' ? plates : size) || 0) + 1));
          button(row, '<i class="fi fi-rr-refresh" aria-hidden="true"></i>풀기', '묶음 풀기', () => setGroup(null));
          panel.appendChild(row);
        }
      }
      const askKind = () => {
        if (o.ask) return o.ask;
        if (target && target.answer != null) return by === 'plates' ? 'size' : 'groups';
        return 'none';
      };
      function addAsk() {
        if (!panel || ansIn) return;
        const k = askKind(); if (k === 'none') return;
        const row = document.createElement('div'); row.className = 'mu-row';
        const l = document.createElement('span'); l.textContent = o.askLabel || (k === 'groups' ? '묶음은 몇 개인가요?' : k === 'size' ? '한 묶음에 몇 개인가요?' : '모두 몇 개인가요?'); row.appendChild(l);
        ansIn = numBox(row, l.textContent, (v, typing) => { answer = v; if (!typing && ansIn) ansIn.value = v == null ? '' : v; revealed = false; paint(); log(); });
        panel.appendChild(row);
      }
      function addRest() {
        if (!panel || restIn) return;
        const row = document.createElement('div'); row.className = 'mu-row';
        const l = document.createElement('span'); l.textContent = '남은 것은 몇 개인가요?'; row.appendChild(l);
        restIn = numBox(row, '남은 것', (v, typing) => { rest = v; if (!typing && restIn) restIn.value = v == null ? '' : v; log(); });
        panel.appendChild(row);
      }
      if (mode === 'group' && controls) { if (o.ask && o.ask !== 'none') addAsk(); if (o.rest) addRest(); }
      const groupsNow = () => (by === 'plates' ? (plates || 0) : size ? Math.floor(count / size) : 0);
      const eachNow = () => (by === 'plates' ? (plates ? Math.floor(count / plates) : 0) : size || 0);
      const restNow = () => count - groupsNow() * eachNow();
      function setGroup(v, quiet) {
        v = v == null ? null : Math.max(1, Math.min(maxSize, Math.round(Number(v)) || 1));
        if (by === 'plates') plates = v; else size = v;
        revealed = false; paint();
        if (!quiet) { log(); kit.announce(v == null ? '묶음을 풀었어요' : by === 'plates' ? `접시 ${v}개에 나누었어요` : `${v}개씩 묶었어요`); }
      }
      function paintGroup() {
        const n = groupsNow(); const each = eachNow(); const left = count - n * each;
        if (sizeOut) sizeOut.textContent = (by === 'plates' ? plates : size) == null ? '?' : String(by === 'plates' ? plates : size);
        const AX = 24; const AY = 24; const AW = W - 48; const AH = H - 84;
        const pos = [];
        if (!each || !n) {
          const per = o.perRow || Math.min(10, Math.ceil(Math.sqrt(count * 1.7)));
          const sp = Math.min(40, AW / per, AH / Math.ceil(count / per));
          const ox = AX + (AW - per * sp) / 2 + sp / 2; const oy = AY + (AH - Math.ceil(count / per) * sp) / 2 + sp / 2;
          for (let i = 0; i < count; i++) pos.push([ox + (i % per) * sp, oy + Math.floor(i / per) * sp]);
          plateEls.forEach((p) => p.setAttribute('display', 'none'));
        } else {
          // 접시(묶음) 배치: 묶음 안은 작은 격자, 접시는 줄 바꿈하며 놓는다. 넘치면 간격을 줄인다
          const mc = Math.ceil(Math.sqrt(each)); const mr = Math.ceil(each / mc);
          let sp = 24; let layout;
          for (let tries = 0; tries < 12; tries++) {
            const pw = mc * sp + 14; const ph = mr * sp + 14; const gap = 10;
            const perRow = Math.max(1, Math.floor((AW + gap) / (pw + gap)));
            const leftW = left ? Math.min(left, 6) * sp + 14 : 0;
            const slots = n + (left ? 1 : 0);
            const rowsNeed = Math.ceil(slots / perRow);
            if (rowsNeed * (ph + gap) <= AH || sp <= 12) { layout = { pw, ph, gap, perRow, leftW }; break; }
            sp -= 2;
          }
          const { pw, ph, gap, perRow } = layout;
          const used = Math.min(perRow, n + (left ? 1 : 0));
          const ox = AX + (AW - (used * (pw + gap) - gap)) / 2;
          const totalRows = Math.ceil((n + (left ? 1 : 0)) / perRow);
          const oy = AY + Math.max(0, (AH - (totalRows * (ph + gap) - gap)) / 2);
          let k = 0;
          for (let g = 0; g < n; g++) {
            const px = ox + (g % perRow) * (pw + gap); const py = oy + Math.floor(g / perRow) * (ph + gap);
            const pe = plateEls[g]; pe.setAttribute('display', 'inline'); pe.setAttribute('x', px); pe.setAttribute('y', py); pe.setAttribute('width', pw); pe.setAttribute('height', ph);
            for (let j = 0; j < each; j++) pos[k++] = [px + 7 + sp / 2 + (j % mc) * sp, py + 7 + sp / 2 + Math.floor(j / mc) * sp];
          }
          for (let g = n; g < plateEls.length; g++) plateEls[g].setAttribute('display', 'none');
          // 남은 것: 마지막 자리에 접시 없이
          const sg = n; const px = ox + (sg % perRow) * (pw + gap); const py = oy + Math.floor(sg / perRow) * (ph + gap);
          for (let j = 0; j < left; j++) pos[k++] = [px + 7 + sp / 2 + (j % 6) * sp, py + 7 + sp / 2 + Math.floor(j / 6) * sp];
        }
        items.forEach((g, i) => kit.transform(g, { x: pos[i][0], y: pos[i][1] }));
        const live = o.showCount && !o.print && (!o.revealAfterCheck || revealed);
        gTxt.textContent = live && each && n ? `묶음 ${n}개 · 한 묶음 ${each}개 · 남은 것 ${left}개` : '';
        if (ansIn) ansIn.value = answer == null ? '' : answer;
        if (restIn) restIn.value = rest == null ? '' : rest;
      }

      if (mode === 'table') {
        if (o.blanks === 'all') blanks = rowsOf.flatMap((a) => colsOf.map((b) => [a, b]));
        else if (typeof o.blanks === 'string' && /^row:\d+$/.test(o.blanks)) { const a = Number(o.blanks.slice(4)); blanks = colsOf.map((b) => [a, b]); }
        else if (typeof o.blanks === 'string' && /^col:\d+$/.test(o.blanks)) { const b = Number(o.blanks.slice(4)); blanks = rowsOf.map((a) => [a, b]); }
        else if (Array.isArray(o.blanks)) blanks = o.blanks.filter((x) => Array.isArray(x) && x.length === 2).map((x) => [Number(x[0]), Number(x[1])]);
        blanks = blanks.filter(([a, b]) => rowsOf.includes(a) && colsOf.includes(b));
        const isBlank = (a, b) => blanks.some(([x, y]) => x === a && y === b);
        cellDigits = Math.max(1, Math.min(6, intOr(o.digits, 0) || Math.max(3, ...blanks.map(([a, b]) => String(Math.abs(calc(a, b))).length))));
        const CW = 48; const CH = TCH; const OX = 12; const OY = 12;
        const L = st.layer('table');
        const pf = (c) => (o.print ? '#FFFFFF' : c);
        const cellT = (x, y, txt, fill, size) => { const t = kit.el('text', { x, y, 'text-anchor': 'middle', 'font-size': size || 17, class: 'pk-text', fill }, L); t.textContent = txt; return t; };
        kit.el('rect', { x: OX, y: OY, width: CW, height: CH, fill: pf('#D7CBEB'), stroke: '#8A7FA6', 'stroke-width': 1 }, L);
        cellT(OX + CW / 2, OY + CH / 2 + 7, op, '#473B6B', 20);
        colsOf.forEach((b, j) => { kit.el('rect', { x: OX + (j + 1) * CW, y: OY, width: CW, height: CH, fill: pf('#EAF7F1'), stroke: '#8A7FA6', 'stroke-width': 1 }, L); cellT(OX + (j + 1.5) * CW, OY + CH / 2 + 6, String(b), '#275C46'); });
        rowsOf.forEach((a, i) => {
          kit.el('rect', { x: OX, y: OY + (i + 1) * CH, width: CW, height: CH, fill: pf('#FDF1EA'), stroke: '#8A7FA6', 'stroke-width': 1 }, L);
          cellT(OX + CW / 2, OY + (i + 1.5) * CH + 6, String(a), '#6E3B21');
          colsOf.forEach((b, j) => {
            const x = OX + (j + 1) * CW; const y = OY + (i + 1) * CH;
            if (!isBlank(a, b)) { kit.el('rect', { x, y, width: CW, height: CH, fill: '#FFFDF9', stroke: '#C9BFA9', 'stroke-width': 1 }, L); cellT(x + CW / 2, y + CH / 2 + 6, String(calc(a, b)), '#3D352E', 16); return; }
            const k = keyOf(a, b); cellVals[k] = null;
            const g = kit.el('g', { class: 'mu-blank' }, L);
            kit.el('rect', { x, y, width: CW, height: CH, class: 'pk-hit' }, g); // 칸 전체가 누름 영역(이웃 칸과 맞닿고 겹치지 않음)
            const bg = kit.el('rect', { x: x + 3, y: y + 3, width: CW - 6, height: CH - 6, rx: 6, fill: '#FFFFFF', stroke: '#E69D7B', 'stroke-width': 2, 'stroke-dasharray': '4 3', class: 'pk-face' }, g);
            const t = kit.el('text', { x: x + CW / 2, y: y + CH / 2 + 6, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: '#204C5A' }, g);
            cellEls[k] = { g, bg, t, a, b };
            if (controls) {
              g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.setAttribute('aria-label', `${a} ${op} ${b} 빈칸`);
              g.addEventListener('click', () => select(k));
              g.addEventListener('focus', () => select(k, true));
              g.addEventListener('keydown', (e) => {
                if (/^[0-9]$/.test(e.key)) { e.preventDefault(); const cur = cellVals[k] == null ? '' : String(cellVals[k]); setCell(k, Number((cur + e.key).slice(-cellDigits))); return; }
                if (e.key === 'Backspace' || e.key === 'Delete') { e.preventDefault(); const cur = cellVals[k] == null ? '' : String(cellVals[k]); setCell(k, cur.length > 1 ? Number(cur.slice(0, -1)) : null); return; }
                const d = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key];
                if (d) { e.preventDefault(); setCell(k, Math.max(0, (cellVals[k] == null ? 0 : cellVals[k]) + d)); }
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(k); }
              });
            }
          });
        });
        if (controls && blanks.length) {
          const row = document.createElement('div'); row.className = 'mu-pad'; row.setAttribute('aria-label', '숫자 단추');
          for (const dgt of ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) button(row, dgt, `${dgt} 쓰기`, () => { if (!selKey) select(Object.keys(cellEls)[0], true); const cur = cellVals[selKey] == null ? '' : String(cellVals[selKey]); setCell(selKey, Number((cur + dgt).slice(-cellDigits))); });
          button(row, '<i class="fi fi-rr-eraser" aria-hidden="true"></i>', '고른 칸 지우기', () => { if (selKey) setCell(selKey, null); });
          button(row, '<i class="fi fi-rr-angle-right" aria-hidden="true"></i>', '다음 빈칸', () => { const ks = Object.keys(cellEls); select(ks[(ks.indexOf(selKey) + 1) % ks.length]); });
          panel.appendChild(row);
        }
      }
      function select(k, quiet) {
        selKey = k;
        for (const [kk, c] of Object.entries(cellEls)) c.bg.setAttribute('stroke-width', kk === k ? 4 : 2);
        if (!quiet && cellEls[k]) { try { cellEls[k].g.focus(); } catch (_) { /* 포커스 불가 */ } }
      }
      function setCell(k, v) {
        if (!(k in cellVals)) return;
        cellVals[k] = v == null || !Number.isFinite(v) ? null : v; revealed = false; paint(); log();
        kit.announce(cellVals[k] == null ? '칸을 지웠어요' : `칸에 쓴 수: ${cellVals[k]}`);
      }
      function paintTable() {
        for (const [k, c] of Object.entries(cellEls)) { c.t.textContent = o.print || cellVals[k] == null ? '' : String(cellVals[k]); c.g.classList.remove('pk-ok', 'pk-no'); }
      }
      function paint() { if (mode === 'array') paintArray(); else if (mode === 'group') paintGroup(); else paintTable(); }
      if (panel && controls) box.appendChild(panel);

      function state() {
        if (mode === 'array') return { rows, cols, total };
        if (mode === 'group') return { size, plates, answer, rest };
        return { cells: Object.assign({}, cellVals) };
      }
      function setState(s) {
        s = s || {};
        if (mode === 'array') {
          if (s.rows != null) rows = Math.max(1, Math.min(maxR, intOr(s.rows, 1)));
          if (s.cols != null) cols = Math.max(1, Math.min(maxC, intOr(s.cols, 1)));
          if (s.total !== undefined) total = s.total == null ? null : intOr(s.total, null);
        } else if (mode === 'group') {
          if (s.size !== undefined) size = s.size == null ? null : Math.max(1, Math.min(maxSize, intOr(s.size, 1)));
          if (s.plates !== undefined) plates = s.plates == null ? null : Math.max(1, Math.min(maxSize, intOr(s.plates, 1)));
          if (s.answer !== undefined) answer = s.answer == null ? null : intOr(s.answer, null);
          if (s.rest !== undefined) rest = s.rest == null ? null : intOr(s.rest, null);
        } else if (s.cells && typeof s.cells === 'object') {
          for (const k of Object.keys(cellVals)) if (k in s.cells) cellVals[k] = s.cells[k] == null ? null : intOr(s.cells[k], null);
        }
        revealed = false; paint();
      }
      const start0 = mode === 'array' ? { rows: 1, cols: 1, total: null } : mode === 'group' ? { size: null, plates: null, answer: null, rest: null } : { cells: Object.assign({}, cellVals) };
      setState(start0);

      // ---- 채점 ----
      function judge(t) {
        t = t || {};
        if (mode === 'array') {
          const p = rows * cols;
          const okRC = (r, c) => (t.anyOrder ? (rows === r && cols === c) || (rows === c && cols === r) : rows === r && cols === c);
          if (t.rows != null && t.cols != null && !okRC(t.rows, t.cols)) {
            if (rows === t.cols && cols === t.rows) return { correct: false, feedback: '줄 수와 한 줄의 개수가 바뀌었어요. "몇 개씩"은 한 줄(가로)에 놓는 수예요.', hint: '"■개씩 ▲줄"에서 ■는 가로 한 줄의 개수, ▲는 줄(세로로 쌓인 줄) 수예요.', h3: `한 줄에 ${t.cols}개씩, ${t.rows}줄을 만들어요.` };
            const which = rows !== t.rows && cols !== t.cols ? '줄 수와 한 줄의 개수' : rows !== t.rows ? '줄 수' : '한 줄의 개수';
            return { correct: false, feedback: o.revealAfterCheck ? '배열이 문제와 달라요. 줄 수와 한 줄의 개수를 다시 세어 보세요.' : `${which}가 문제와 달라요. 하나씩 다시 세어 보세요.`, hint: `${which}를 문제와 견주어 보세요.`, h3: `한 줄에 ${t.cols}개씩, ${t.rows}줄을 만들어요.` };
          }
          if (t.rows != null && t.cols == null && rows !== t.rows) return { correct: false, feedback: '줄 수가 문제와 달라요.', hint: '세로로 쌓인 줄이 몇 개인지 세어 보세요.', h3: `${t.rows}줄을 만들어요.` };
          if (t.cols != null && t.rows == null && cols !== t.cols) return { correct: false, feedback: '한 줄의 개수가 문제와 달라요.', hint: '가로 한 줄에 몇 개가 있는지 세어 보세요.', h3: `한 줄에 ${t.cols}개씩 놓아요.` };
          if (t.product != null && p !== t.product) return { correct: false, feedback: o.revealAfterCheck ? '모두 몇 개인지가 문제와 달라요.' : `지금 배열은 모두 ${p}개예요. ${p > t.product ? '너무 많아요.' : '모자라요.'}`, hint: `지금 배열이 문제보다 ${p > t.product ? '많아요' : '적어요'}. 한 줄의 개수 × 줄 수를 생각해요.`, h3: `${t.product}개가 되는 곱셈을 찾아요. 예: ${(() => { for (let c = Math.min(maxC, t.product); c >= 1; c--) if (t.product % c === 0 && t.product / c <= maxR) return `${c}개씩 ${t.product / c}줄`; return '여러 줄'; })()}` };
          if (t.minSide && (rows < t.minSide || cols < t.minSide)) return { correct: false, feedback: `줄이 하나뿐인 배열 말고, ${t.minSide}줄 이상인 배열을 만들어 보세요.`, hint: '한 줄로 늘어놓지 말고 여러 줄로 나누어 보세요.' };
          if (t.total) {
            if (total == null) return { correct: false, incomplete: true, feedback: '모두 몇 개인지 수를 써요.' };
            if (total !== p) {
              if (total === rows + cols) return { correct: false, feedback: '두 수를 더했어요. 같은 수를 여러 번 더하는 것은 곱셈이에요.', hint: '한 줄의 개수를 줄 수만큼 여러 번 더해 보세요.', h3: `${cols} × ${rows} = ${p}` };
              return { correct: false, feedback: '모두 몇 개인지 다시 세어 볼까요? 한 줄씩 뛰어 세어 보세요.', hint: `쓴 수가 ${total > p ? '많아요' : '적어요'}. 한 줄의 개수씩 뛰어 세어 보세요.`, h3: `${cols}씩 ${rows}번 뛰어 세면 ${p}이에요.` };
            }
          }
          return { correct: true, feedback: `맞아요! ${cols}개씩 ${rows}줄은 ${cols} × ${rows} = ${p}, 모두 ${p}개예요.` };
        }
        if (mode === 'group') {
          const chosen = by === 'plates' ? plates : size;
          const needChoose = !(askKind() === 'total' && t.size == null && t.plates == null && t.groups == null);
          if (needChoose && chosen == null) return { correct: false, incomplete: true, feedback: by === 'plates' ? '먼저 접시(묶음) 수를 정해요.' : '먼저 몇 개씩 묶을지 정해요.' };
          const n = groupsNow(); const each = eachNow(); const left = restNow();
          if (t.size != null && by === 'size' && size !== t.size) return { correct: false, feedback: o.revealAfterCheck ? '묶는 수가 문제와 달라요.' : `지금은 ${size}개씩 묶었어요. 문제에서 몇 개씩 묶는지 다시 읽어 보세요.`, hint: '문제에서 "몇 개씩"을 찾아 그 수만큼 묶어요.', h3: `${t.size}개씩 묶어요.` };
          if (t.plates != null && by === 'plates' && plates !== t.plates) return { correct: false, feedback: '접시 수가 문제와 달라요. 몇 명(몇 곳)에 나누는지 다시 읽어 보세요.', hint: '문제에서 나누어 주는 사람(곳)의 수를 찾아요.', h3: `접시를 ${t.plates}개로 해요.` };
          if (t.size != null && by === 'plates' && each !== t.size) return { correct: false, feedback: '한 접시에 놓인 수가 문제와 달라요.', hint: '접시 수를 바꾸어 한 접시의 수를 맞춰 보세요.', h3: `한 접시에 ${t.size}개가 되게 나누어요.` };
          if (t.groups != null && n !== t.groups) return { correct: false, feedback: '묶음 수가 문제와 달라요.', hint: '묶는 수를 바꾸어 묶음이 몇 개 생기는지 보세요.', h3: `묶음이 ${t.groups}개가 되게 해요.` };
          if (t.answer != null) {
            if (answer == null) return { correct: false, incomplete: true, feedback: '알맞은 수를 칸에 써요.' };
            if (answer !== t.answer) {
              let fb = '쓴 수를 다시 세어 볼까요?';
              if (answer === count) fb = '전체 개수를 썼어요. 묶음이 몇 개인지(한 묶음이 몇 개인지) 물어요.';
              else if (askKind() === 'groups' && answer === each) fb = '한 묶음의 개수를 썼어요. 묶음이 모두 몇 개인지 세어요.';
              else if (askKind() === 'size' && answer === n) fb = '묶음(접시) 수를 썼어요. 한 묶음에 몇 개씩인지 세어요.';
              return { correct: false, feedback: fb, hint: askKind() === 'groups' ? '접시(묶음)를 하나씩 세어 보세요.' : '한 접시 안의 낱개를 세어 보세요.', h3: `${count} ÷ ${askKind() === 'groups' ? each || '?' : n || '?'} = ${t.answer}${t.rest ? ` … 남은 것 ${t.rest}` : ''}` };
            }
          }
          if (t.rest != null) {
            if (rest == null) return { correct: false, incomplete: true, feedback: '남은 것이 몇 개인지 써요.' };
            if (rest !== t.rest) return { correct: false, feedback: rest >= (each || 1) && each ? '남은 것으로 한 묶음을 더 만들 수 있어요. 남은 것은 나누는 수보다 작아야 해요.' : '남은 것을 다시 세어 보세요. 접시 밖에 있는 것이에요.', hint: '접시에 들어가지 못한 낱개를 세어요.', h3: `남은 것은 ${t.rest}개예요.` };
          }
          return { correct: true, feedback: left ? `맞아요! ${each}개씩 ${n}묶음이고 ${left}개가 남아요.` : `맞아요! ${each}개씩 ${n}묶음이에요.` };
        }
        // table
        const keys = Object.keys(cellVals);
        const empty = keys.filter((k) => cellVals[k] == null);
        if (empty.length) return { correct: false, incomplete: true, feedback: `빈칸 ${empty.length}개를 더 채워요.` };
        const bad = keys.filter((k) => cellVals[k] !== calc(cellEls[k].a, cellEls[k].b));
        if (bad.length) {
          const c = cellEls[bad[0]];
          const v = cellVals[bad[0]]; const right = calc(c.a, c.b);
          const near = op === '×' && (v === right + c.a || v === right - c.a);
          return { correct: false, bad, feedback: o.revealAfterCheck ? `틀린 칸이 ${bad.length}개 있어요.` : near ? `${c.a} ${op} ${c.b} 칸이 옆 칸 값과 같아요. 곱하는 수를 다시 보세요.` : `${c.a} ${op} ${c.b} 칸을 다시 계산해 보세요.`, hint: `${c.a} ${op} ${c.b} 칸을 옆 칸과 견주어 보세요. ${op === '×' ? `오른쪽으로 한 칸 갈 때마다 ${c.a}씩 커져요.` : '오른쪽으로 한 칸 갈 때마다 1씩 커져요.'}`, h3: `${c.a} ${op} ${c.b} = ${right}` };
        }
        return { correct: true, feedback: '맞아요! 빈칸을 모두 바르게 채웠어요.' };
      }
      function strategy() {
        if (mode === 'array') return '한 줄(가로)에 몇 개씩인지, 그런 줄이 몇 줄인지 차례로 세어요. 같은 수씩 여러 번 더하는 것이 곱셈이에요.';
        if (mode === 'group') return by === 'plates' ? '하나씩 접시에 돌아가며 놓듯이 똑같이 나누어요. 한 접시에 몇 개인지, 남은 것이 있는지 보세요.' : '똑같은 수씩 묶고, 묶음이 몇 개인지와 묶이지 않고 남은 것이 몇 개인지 세어요.';
        return op === '×' ? '곱셈표에서 오른쪽으로 한 칸 가면 그 줄의 단 수만큼 커져요. 옆 칸에서 더하거나 빼 보세요.' : '덧셈표에서 오른쪽으로 한 칸 가면 1씩 커져요.';
      }
      function setTarget(t) {
        target = t || null;
        if (!controls || !t) return;
        if (mode === 'array' && t.total) addTotal();
        if (mode === 'group') { if (t.answer != null) addAsk(); if (t.rest != null) addRest(); }
        paint();
      }

      const api = {
        getState: state,
        setState,
        setTarget,
        reset() { setState(JSON.parse(JSON.stringify(start0))); },
        check(t, opts) {
          const r = judge(t); const bad = r.bad; delete r.h3; delete r.bad;
          if (!(opts && opts.forHint)) {
            if (r.correct) { revealed = true; paint(); kit.tick('ok'); if (mode === 'table') Object.values(cellEls).forEach((c) => c.g.classList.add('pk-ok')); }
            else if (mode === 'table' && bad && !o.revealAfterCheck) { paint(); bad.forEach((k) => cellEls[k].g.classList.add('pk-no')); }
          }
          return r;
        },
        solve(t) {
          t = t || {};
          if (mode === 'array') {
            let r = t.rows != null ? t.rows : rows; let c = t.cols != null ? t.cols : cols;
            if (t.product != null && (t.rows == null || t.cols == null)) {
              const ms = t.minSide || 1;
              if (t.rows != null) c = t.product / t.rows; else if (t.cols != null) r = t.product / t.cols;
              else { r = null; for (let cc = Math.min(maxC, t.product); cc >= 1 && r == null; cc--) if (t.product % cc === 0 && t.product / cc <= maxR && cc >= ms && t.product / cc >= ms) { c = cc; r = t.product / cc; } if (r == null) { r = 1; c = t.product; } }
            }
            setState({ rows: r, cols: c, total: t.total ? r * c : total });
          } else if (mode === 'group') {
            const s = {};
            if (by === 'size') s.size = t.size != null ? t.size : t.groups != null ? (() => { for (let k = 1; k <= maxSize; k++) if (Math.floor(count / k) === t.groups && (t.rest == null ? count % k === 0 : count % k === t.rest)) return k; return 1; })() : (t.answer != null && askKind() === 'groups' ? Math.floor(count / t.answer) : size || 1);
            else s.plates = t.plates != null ? t.plates : t.groups != null ? t.groups : t.size != null ? Math.floor(count / t.size) : (t.answer != null && askKind() === 'size' ? Math.floor(count / t.answer) : plates || 1);
            if (t.answer != null) s.answer = t.answer;
            if (t.rest != null) s.rest = t.rest;
            setState(s);
          } else {
            const cells = {}; for (const k of Object.keys(cellVals)) cells[k] = calc(cellEls[k].a, cellEls[k].b);
            setState({ cells });
          }
        },
        hint(t, opts) {
          const r = judge(t || {}); const lv = hintLevel(opts);
          if (r.correct) return { hint: strategy(), correct: true, level: 1 };
          if (lv === 1 || r.incomplete || !r.hint) return { hint: strategy(), correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        // 흔한 실수: 줄 수와 한 줄 개수를 바꾼다 · 곱 대신 두 수를 더한다 · 묶음 수 대신 한 묶음 개수를 쓴다 · 곱셈표에서 옆 칸 값을 쓴다
        wrongAnswer(t) {
          t = t || {};
          api.solve(t); const s = state();
          if (mode === 'array') {
            if (t.total) { const p = s.rows * s.cols; s.total = s.rows + s.cols !== p ? s.rows + s.cols : p + 1; return s; }
            if (t.rows != null && t.cols != null && !t.anyOrder && t.rows !== t.cols && t.cols <= maxR && t.rows <= maxC) return { rows: t.cols, cols: t.rows, total: s.total };
            return { rows: s.rows < maxR ? s.rows + 1 : s.rows - 1, cols: s.cols, total: s.total };
          }
          if (mode === 'group') {
            if (t.answer != null) { const alt = askKind() === 'groups' ? eachNow() : groupsNow(); s.answer = alt !== t.answer ? alt : t.answer + 1; return s; }
            if (t.rest != null) { s.rest = t.rest + (eachNow() || 1); return s; }
            if (by === 'size' && s.size != null) { s.size = s.size < maxSize ? s.size + 1 : s.size - 1; return s; }
            if (s.plates != null) { s.plates = s.plates < maxSize ? s.plates + 1 : s.plates - 1; return s; }
            return null;
          }
          const ks = Object.keys(cellVals); if (!ks.length) return null;
          const c = cellEls[ks[0]]; s.cells[ks[0]] = op === '×' ? calc(c.a, c.b) + c.a : calc(c.a, c.b) + 1;
          return s;
        },
        distance(a, b) {
          a = a || {}; b = b || {};
          let d = 0;
          const num = (x, y) => (x == null && y == null ? 0 : x == null || y == null ? 1 : Math.abs(x - y));
          if (mode === 'array') return num(a.rows, b.rows) + num(a.cols, b.cols) + num(a.total, b.total);
          if (mode === 'group') return num(a.size, b.size) + num(a.plates, b.plates) + num(a.answer, b.answer) + num(a.rest, b.rest);
          const A = a.cells || {}; const B = b.cells || {};
          for (const k of new Set([...Object.keys(A), ...Object.keys(B)])) d += num(A[k], B[k]);
          return d;
        },
        async demo(t) {
          if (mode === 'array' && t) { const tg = Object.assign({}, t, { total: false }); api.solve(tg); const fr = rows; const fc = cols; for (let c = 1; c <= fc; c++) { setArray(1, c, true); await kit.wait(160); } for (let r = 2; r <= fr; r++) { setArray(r, fc, true); await kit.wait(220); } return; }
          if (t) api.solve(t);
        },
      };
      return api;
    },
  });
})(window.PaperKit);
