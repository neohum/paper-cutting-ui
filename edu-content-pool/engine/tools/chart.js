/* 그래프 판 — 그림그래프·막대그래프·꺾은선그래프·원그래프·띠그래프. 자료 표를 보고 그래프를 완성하거나(build), 그래프를 읽고 답한다(read).
 * 수학(2학년 표와 그래프 ~ 6학년 비율그래프), 사회(인구·생산량·기후 자료), 과학(실험 결과·기온 변화) 자료 표현 차시에 두루 쓴다.
 *
 * 옵션(toolOptions·levels)
 * | 키 | 뜻 | 기본 |
 * | type | 'picture' 그림 · 'bar' 막대 · 'line' 꺾은선 · 'circle' 원 · 'band' 띠 | 'bar' |
 * | mode | 'build' 표를 보고 그래프 완성 · 'read' 그래프 읽기 | 'build' |
 * | data | [{ label, value }] 또는 [['봄', 5], …] — 원·띠는 백분율(합계 100) | [] |
 * | title, unit | 그래프 제목, 단위(명·개·°C·kg…) | '', '' |
 * | xLabel, yLabel | 가로·세로 축(표 머리) 이름 — 예 '계절', '학생 수' | '항목', '수' |
 * | scale | (막대·꺾은선) 눈금 한 칸의 크기 | 자료에 맞게(1·2·5·10…) |
 * | max, from | (막대·꺾은선) 눈금 끝 수, 꺾은선 눈금 시작 수(0보다 크면 물결선) | 자료에 맞게, 0 |
 * | step | build: 한 번 누를 때 바뀌는 크기 | 자료가 눈금으로 나뉘면 scale, 아니면 1 |
 * | horizontal | 가로 막대그래프 | false |
 * | icons | (그림) 그림 단위 [{ value: 10, name: '10명' }, { value: 1, name: '1명' }] — 큰 것부터 2~3개 | 10과 1 |
 * | icon | (그림) 그림 모양 'circle'|'star'|'square'|'heart'|'person' | 'circle' |
 * | anyIcons | (그림) 큰 그림으로 바꿀 수 있어도 작은 그림을 많이 써도 맞음 | false |
 * | tickPct | (원·띠) 눈금 한 칸 백분율 | 5 |
 * | given | build: 미리 그려 둔(잠긴) 항목 번호 배열 | [] |
 * | showTable | 자료 표를 보인다 | build는 true, read는 false |
 * | total | 표에 합계 칸 | 원·띠는 true |
 * | tableBlanks | read: 표에서 비워 둘 항목 번호 — 그래프를 읽고 채운다(target { table: true }) | [] |
 * | question, choices, why, explain | read: 질문·보기·보기마다 틀렸을 때 할 말·3단계 풀이 글 | — |
 * | showValues | 막대 끝·점·조각에 지금 값을 보인다(쉬움) — revealAfterCheck면 맞힌 뒤에만 | read의 원·띠는 true |
 * | revealAfterCheck | 살아 있는 값을 숨기고, 틀린 확인에서 어느 항목이 틀렸는지 말하지 않는다 | — |
 * | print | 활동지 그림(조작 칸 없음; build는 given만 그린다) | — |
 *
 * 상태
 * | build(막대·꺾은선·원·띠) | { values: [수|null, …] } — null은 아직 그리지 않음 |
 * | build(그림) | { icons: [[큰 그림 수, (중간,) 작은 그림 수], …] } |
 * | read | { pick: 번호|null } · { answer: 수|null } · { table: [수|null, …] } |
 *
 * target
 * | build | { build: true } (given 밖의 모든 항목) 또는 { build: [항목 번호…] } |
 * | read | { pick: 번호 } · { value: 수 } (수 쓰기) · { table: true } (표 빈칸 채우기) |
 *
 * 예) 막대 완성: toolOptions { type: 'bar', data: [['봄',5],['여름',8],['가을',3],['겨울',6]], unit: '명', given: [0] }, target { build: true }
 *     그림그래프: toolOptions { type: 'picture', data: [['가 마을',32],['나 마을',15]], unit: '그루', icons: [{ value: 10 }, { value: 1 }] }, target { build: true }
 *     읽기: toolOptions { type: 'line', mode: 'read', data: [['9시',12],['10시',15],['11시',19]], unit: '°C', from: 10, choices: ['9시','10시','11시'], question: '기온이 가장 높은 때는?' }, target { pick: 2 }
 * 키보드: 막대·점에 Tab → ↑/↓(가로 막대는 →/←) 한 칸, 그림그래프 줄에 Tab → →/← 작은 그림, PageUp/PageDown 큰 그림.
 *         원·띠·공통: 아래 '−/+' 단추와 항목 단추(Tab+Enter). 읽기 보기·표 빈칸도 Tab으로 간다.
 */
(function (K) {
  'use strict';
  const COLORS = ['sky', 'peach', 'mint', 'lavender', 'buttercup', 'rose'];
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  const r6 = (v) => Math.round(v * 1e6) / 1e6;
  const josa = (w, a, b) => { const s = String(w); const c = s.charCodeAt(s.length - 1); if (c >= 0xAC00 && c <= 0xD7A3) return s + ((c - 0xAC00) % 28 ? a : b); return s + (/[013678]$/.test(s) ? a : b); };
  // ‘5분이에요’ ‘1번이에요’ ‘10명이에요’ ‘3개예요’ — 받침(수는 읽는 소리)을 따라
  const ieyo = (w) => josa(w, '이에요', '예요');
  function ensureStyle() {
    if (document.getElementById('ch-style')) return;
    const s = document.createElement('style'); s.id = 'ch-style';
    s.textContent = `
.ch-panel{display:grid;gap:8px;margin-top:8px}
.ch-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.ch-row > span{font-weight:700}
.ch-q{margin:0;font-weight:700;line-height:1.45;word-break:keep-all}
.ch-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}
.ch-b{min-height:44px;min-width:44px;padding:6px 12px;border-radius:12px;border:1px solid rgba(61,53,46,.22);background:#FFFDF9;color:#3D352E;font:inherit;font-weight:700;line-height:1.3;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;word-break:keep-all}
.ch-b .fi{display:inline-flex;line-height:1}
.ch-b[aria-checked="true"],.ch-b[aria-pressed="true"]{background:#EAF7F1;box-shadow:0 0 0 3px #82C2A8}
.ch-cur{min-width:6.5em;min-height:44px;display:inline-flex;align-items:center;justify-content:center;font-weight:800;color:#473B6B;background:#F4F0FA;border-radius:12px;padding:0 10px}
.ch-in{min-height:44px;width:4.6em;box-sizing:border-box;padding:6px 8px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.05em;font-weight:800;text-align:center;color:#275C46;background:#fff}
.ch-tw{overflow-x:auto;margin-bottom:8px}
.ch-table{border-collapse:collapse;margin:0 auto;font-weight:700;background:#FFFDF9}
.ch-table th,.ch-table td{border:1.5px solid #8A7FA6;padding:6px 10px;text-align:center;min-width:2.6em;word-break:keep-all}
.ch-table th{background:#F4F0FA;color:#473B6B}
.ch-table .ch-in{width:3.6em;min-height:40px}
@media (max-width:480px){.ch-table{font-size:.86em}.ch-table th,.ch-table td{padding:4px 4px;min-width:1.8em}}
.ch-blank{display:inline-block;min-width:2.4em;min-height:1.4em}
.pk-tool--chart g[tabindex]:focus-visible .ch-bar{stroke:#473B6B;stroke-width:4}
.pk-tool--chart g[tabindex]{outline:none}
@media print{.ch-panel{display:none}.ch-table th{background:#fff}.ch-table th,.ch-table td{border-color:#000;color:#000}}
`;
    document.head.appendChild(s);
  }
  function button(parent, html, label, onClick, cls) {
    const b = document.createElement('button'); b.type = 'button'; b.className = `ch-b${cls ? ` ${cls}` : ''}`; b.setAttribute('tabindex', '0');
    b.innerHTML = html; if (label) b.setAttribute('aria-label', label);
    b.addEventListener('click', onClick); parent.appendChild(b); return b;
  }
  function iconShape(kind, r) {
    if (kind === 'square') return { type: 'rect', w: r * 1.7, h: r * 1.7, rx: r * 0.3 };
    if (kind === 'star') { const p = []; for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i - Math.PI / 2; const q = i % 2 ? r * 0.46 : r * 1.1; p.push(`${(Math.cos(a) * q).toFixed(1)},${(Math.sin(a) * q).toFixed(1)}`); } return { type: 'poly', points: p.join(' ') }; }
    if (kind === 'heart') return { type: 'path', d: `M0 ${r * 0.9} C ${-r * 1.4} ${-r * 0.1} ${-r * 0.7} ${-r * 1.2} 0 ${-r * 0.45} C ${r * 0.7} ${-r * 1.2} ${r * 1.4} ${-r * 0.1} 0 ${r * 0.9} Z` };
    if (kind === 'person') return { type: 'path', d: `M0 ${-r} a ${r * 0.42} ${r * 0.42} 0 1 1 0.01 0 Z M ${-r * 0.75} ${r} C ${-r * 0.75} ${-r * 0.2} ${r * 0.75} ${-r * 0.2} ${r * 0.75} ${r} Z` };
    return { type: 'circle', r };
  }
  const niceScale = (mx) => { for (const s of [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000]) if (mx / s <= 12) return s; return 10000; };

  K.registerTool('chart', {
    name: '그래프 판',
    create(box, o, kit) {
      ensureStyle();
      const type = ['picture', 'bar', 'line', 'circle', 'band'].includes(o.type) ? o.type : 'bar';
      const mode = o.mode === 'read' ? 'read' : 'build';
      const controls = !o.print;
      const ratio = type === 'circle' || type === 'band';
      const data = (Array.isArray(o.data) ? o.data : []).slice(0, type === 'picture' ? 6 : ratio ? 8 : 12)
        .map((d) => (Array.isArray(d) ? { label: String(d[0]), value: Number(d[1]) } : { label: String(d.label), value: Number(d.value) }))
        .filter((d) => Number.isFinite(d.value));
      const n = data.length;
      const unit = o.unit || (ratio ? '%' : '');
      const pct = ratio ? '%' : unit;
      const given = new Set(mode === 'build' ? (o.given || []).filter((i) => i >= 0 && i < n) : []);
      const noun = type === 'bar' ? '막대' : type === 'line' ? '점' : type === 'picture' ? '그림' : '부분';
      const maxData = Math.max(1, ...data.map((d) => d.value));
      const from = type === 'line' ? Number(o.from) || 0 : 0;
      const scale = o.scale > 0 ? Number(o.scale) : niceScale(maxData - from);
      const axisMax = o.max > from ? Number(o.max) : Math.ceil((maxData + (mode === 'build' ? scale : 0)) / scale) * scale;
      const tickPct = o.tickPct > 0 ? Number(o.tickPct) : 5;
      const step = o.step > 0 ? Number(o.step) : ratio ? tickPct : data.every((d) => Math.abs((d.value - from) / scale - Math.round((d.value - from) / scale)) < 1e-9) ? scale : 1;
      const iconsDef = (Array.isArray(o.icons) && o.icons.length ? o.icons : [{ value: 10 }, { value: 1 }]).slice(0, 3).map((x) => ({ value: Number(x.value) || 1, name: x.name || `${x.value}${unit}` })).sort((a, b) => b.value - a.value);
      const greedy = (v) => { let left = v; return iconsDef.map((ic) => { const k = Math.floor(left / ic.value + 1e-9); left = r6(left - k * ic.value); return k; }); };
      const showTable = o.showTable != null ? !!o.showTable : mode === 'build';
      const blanks = mode === 'read' && Array.isArray(o.tableBlanks) ? o.tableBlanks.filter((i) => i >= 0 && i < n) : [];
      const showVal0 = o.showValues != null ? !!o.showValues : mode === 'read' && ratio;
      let revealed = false;
      const showLive = () => showVal0 && !o.print && (mode === 'read' || !o.revealAfterCheck || revealed);
      const log = () => kit.recorder.log('chart', state());

      // ---- 자료 표(HTML): 가로로 항목, 아래 줄에 수 ----
      let tableInputs = [];
      let tblVals = blanks.map(() => null);
      if (showTable || blanks.length) {
        const wrap = document.createElement('div'); wrap.className = 'ch-tw';
        const t = document.createElement('table'); t.className = 'ch-table';
        const cap = o.title ? `${o.title}` : '';
        if (cap) { const c = document.createElement('caption'); c.textContent = cap; c.style.fontWeight = '800'; c.style.padding = '0 0 4px'; t.appendChild(c); }
        const hr = document.createElement('tr'); const vr = document.createElement('tr');
        const th0 = document.createElement('th'); th0.textContent = o.xLabel || '항목'; hr.appendChild(th0);
        const tv0 = document.createElement('th'); tv0.textContent = `${o.yLabel || (ratio ? '비율' : '수')}${pct ? `(${pct})` : ''}`; vr.appendChild(tv0);
        data.forEach((d, i) => {
          const h = document.createElement('th'); h.textContent = d.label; hr.appendChild(h);
          const c = document.createElement('td');
          const bi = blanks.indexOf(i);
          if (bi >= 0) {
            if (controls) {
              const inp = document.createElement('input'); inp.className = 'ch-in'; inp.type = 'text'; inp.setAttribute('tabindex', '0'); inp.setAttribute('inputmode', 'numeric'); inp.setAttribute('autocomplete', 'off');
              inp.setAttribute('aria-label', `${d.label}의 수`);
              inp.addEventListener('input', () => { inp.value = inp.value.replace(/[^0-9.]/g, '').slice(0, 6); tblVals[bi] = inp.value === '' || inp.value === '.' ? null : Number(inp.value); log(); });
              inp.addEventListener('keydown', (e) => { const dd = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!dd) return; e.preventDefault(); tblVals[bi] = Math.max(0, r6((tblVals[bi] || 0) + dd * step)); inp.value = String(tblVals[bi]); log(); });
              c.appendChild(inp); tableInputs.push(inp);
            } else { const sp = document.createElement('span'); sp.className = 'ch-blank'; c.appendChild(sp); }
          } else c.textContent = String(d.value);
          vr.appendChild(c);
        });
        if (o.total != null ? o.total : ratio) {
          const h = document.createElement('th'); h.textContent = '합계'; hr.appendChild(h);
          const c = document.createElement('td'); c.textContent = String(r6(data.reduce((a, d) => a + d.value, 0))); vr.appendChild(c);
        }
        t.append(hr, vr); wrap.appendChild(t); box.appendChild(wrap);
      }

      // ---- 무대 ----
      const W = 640;
      const H = type === 'band' ? 250 : type === 'picture' ? Math.max(220, 96 + n * 58) : 400;
      const st = kit.stage(box, { viewBox: [W, H], label: `${o.title || '그래프'}. ${{ picture: '그림그래프', bar: '막대그래프', line: '꺾은선그래프', circle: '원그래프', band: '띠그래프' }[type]}${mode === 'build' ? '를 완성하세요.' : '를 읽으세요.'}` });
      kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 16 }, color: 'cream', fill: '#FBF6EC', depth: 2, texture: true });
      const T = (parent, x, y, txt, size, fill, anchor) => { const t = kit.el('text', { x, y, 'text-anchor': anchor || 'middle', 'font-size': size, class: 'pk-text', fill: fill || '#3D352E' }, parent); t.textContent = txt; return t; };
      const AX = st.layer('axes');
      if (o.title && type !== 'picture') T(AX, W / 2, 34, o.title, 18, '#473B6B');
      const colorOf = (i) => kit.colorOf(COLORS[i % COLORS.length]);
      const printFill = (i) => ['#FFFFFF', '#BDBDBD', '#E6E6E6', '#8C8C8C', '#D0D0D0', '#A6A6A6'][i % 6];

      // values: 막대·꺾은선·원·띠 / icons: 그림그래프
      let values = data.map((d, i) => (mode === 'read' || given.has(i) ? d.value : null));
      let icons = data.map((d, i) => (mode === 'read' || given.has(i) ? greedy(d.value) : iconsDef.map(() => 0)));
      let sel = data.findIndex((_, i) => !given.has(i)); if (sel < 0) sel = 0;
      const editable = (i) => mode === 'build' && controls && !given.has(i);
      const valueOfIcons = (arr) => r6(arr.reduce((a, k, j) => a + k * iconsDef[j].value, 0));

      // ===== 막대·꺾은선 좌표 =====
      const hz = type === 'bar' && !!o.horizontal;
      const PL = hz ? 110 : 74; const PR = 28; const PT = 56; const PB = hz ? 56 : 74;
      const plotW = W - PL - PR; const plotH = H - PT - PB;
      const slot = (hz ? plotH : plotW) / Math.max(1, n);
      const catPos = (i) => (hz ? PT + slot * (i + 0.5) : PL + slot * (i + 0.5));
      const valPos = (v) => (hz ? PL + ((v - from) / (axisMax - from)) * plotW : PT + plotH - ((v - from) / (axisMax - from)) * plotH);
      const fromPointer = (p) => { const f = hz ? (p.x - PL) / plotW : (PT + plotH - p.y) / plotH; const v = from + f * (axisMax - from); return Math.max(type === 'line' ? from : 0, Math.min(axisMax, Math.round(v / step) * step)); };
      const bars = []; const pts = []; let poly = null; const valTxt = [];
      if (type === 'bar' || type === 'line') {
        const lines = Math.round((axisMax - from) / scale);
        const minGap = 22; const pxPer = (hz ? plotW : plotH) / Math.max(1, lines);
        const every = Math.max(1, Math.ceil(minGap / pxPer));
        for (let k = 0; k <= lines; k++) {
          const v = r6(from + k * scale); const p = valPos(v);
          if (hz) kit.el('line', { x1: p, y1: PT, x2: p, y2: PT + plotH, stroke: k ? '#D9CFC0' : '#3D352E', 'stroke-width': k ? 1 : 2.4 }, AX);
          else kit.el('line', { x1: PL, y1: p, x2: PL + plotW, y2: p, stroke: k ? '#D9CFC0' : '#3D352E', 'stroke-width': k ? 1 : 2.4 }, AX);
          if (k % every === 0) { if (hz) T(AX, p, PT + plotH + 22, String(v), 14); else T(AX, PL - 10, p + 5, String(v), 14, '#3D352E', 'end'); }
        }
        if (hz) kit.el('line', { x1: PL, y1: PT, x2: PL, y2: PT + plotH, stroke: '#3D352E', 'stroke-width': 2.4 }, AX);
        else kit.el('line', { x1: PL, y1: PT - 6, x2: PL, y2: PT + plotH, stroke: '#3D352E', 'stroke-width': 2.4 }, AX);
        if (from > 0 && !hz) kit.el('path', { d: `M ${PL - 9} ${PT + plotH - 6} l 6 -5 l 6 10 l 6 -5`, fill: 'none', stroke: '#3D352E', 'stroke-width': 2 }, AX);
        // 축 이름: 세로 눈금 단위는 왼쪽 위, 가로 항목 이름은 오른쪽 아래
        T(AX, hz ? PL + plotW : 20, hz ? H - 14 : PT - 14, `(${unit || '수'})`, 13, '#473B6B', hz ? 'end' : 'start');
        if (o.xLabel) T(AX, hz ? 16 : W - PR, hz ? PT - 14 : H - 14, `(${o.xLabel})`, 13, '#473B6B', hz ? 'start' : 'end');
        const LBL = st.layer('cats');
        const lf = slot < 56 ? 13 : 15;
        data.forEach((d, i) => { if (hz) T(LBL, PL - 10, catPos(i) + 5, d.label, lf, '#3D352E', 'end'); else T(LBL, catPos(i), PT + plotH + 24, d.label, lf); });
        const BL = st.layer('bars');
        const bw = Math.min(56, slot * 0.58);
        if (type === 'line') poly = kit.el('path', { fill: 'none', stroke: o.print ? '#000' : '#E69D7B', 'stroke-width': 3, 'stroke-linejoin': 'round' }, BL);
        data.forEach((d, i) => {
          const g = kit.el('g', null, BL);
          // 항목 칸 전체가 누르는 자리(작은 막대·점을 맞히기 어려운 터치 화면)
          const hit = hz ? kit.el('rect', { x: PL, y: catPos(i) - slot / 2, width: plotW, height: slot, class: 'pk-hit' }, g) : kit.el('rect', { x: catPos(i) - slot / 2, y: PT - 10, width: slot, height: plotH + 10, class: 'pk-hit' }, g);
          if (type === 'bar') {
            const c = colorOf(i);
            bars[i] = kit.el('rect', { rx: 4, fill: o.print ? printFill(1) : c.base, stroke: o.print ? '#000' : c.layer, 'stroke-width': 1.6, class: 'ch-bar' }, g);
            bars[i].__w = bw;
          } else {
            const pg = kit.el('g', null, g);
            kit.el('rect', { x: -22, y: -22, width: 44, height: 44, class: 'pk-hit' }, pg);
            kit.piece(st, pg, { shape: { type: 'circle', r: 8 }, color: given.has(i) || mode === 'read' ? 'ink' : 'peach', depth: 1 });
            pts[i] = pg;
          }
          valTxt[i] = T(g, 0, 0, '', 14, '#204C5A');
          if (editable(i)) {
            const tgt = type === 'bar' ? g : pts[i];
            tgt.setAttribute('tabindex', '0'); tgt.setAttribute('role', 'slider'); tgt.classList.add('pk-draggable');
            tgt.setAttribute('aria-label', `${d.label} ${noun}. ${hz ? '왼쪽 오른쪽' : '위 아래'} 방향키로 바꿔요`);
            let dragging = false;
            const down = (e) => { e.preventDefault(); sel = i; dragging = true; hit.setPointerCapture(e.pointerId); setVal(i, fromPointer(st.point(e)), true); };
            hit.addEventListener('pointerdown', down);
            if (type === 'line') pts[i].addEventListener('pointerdown', (e) => { e.stopPropagation(); down(e); });
            hit.addEventListener('pointermove', (e) => { if (dragging) setVal(i, fromPointer(st.point(e)), true); });
            const end = () => { if (!dragging) return; dragging = false; log(); syncCur(); kit.announce(`${d.label} ${josa(noun, '을', '를')} 바꿨어요`); };
            hit.addEventListener('pointerup', end); hit.addEventListener('pointercancel', end);
            tgt.addEventListener('focus', () => { sel = i; syncCur(); });
            tgt.addEventListener('keydown', (e) => {
              const up = hz ? { ArrowRight: 1, ArrowLeft: -1, ArrowUp: 1, ArrowDown: -1 } : { ArrowUp: 1, ArrowDown: -1, ArrowRight: 1, ArrowLeft: -1 };
              const dd = up[e.key] || { PageUp: 5, PageDown: -5 }[e.key];
              if (!dd) return; e.preventDefault(); bump(i, dd);
            });
          }
        });
      }

      // ===== 그림그래프 =====
      const rowsG = []; const iconEls = [];
      if (type === 'picture') {
        const PTp = o.title ? 52 : 24; const LW = 120; const rowH = Math.min(58, (H - PTp - 70) / Math.max(1, n));
        const L = st.layer('pic');
        if (o.title) T(L, W / 2, 34, o.title, 18, '#473B6B');
        kit.el('rect', { x: 24, y: PTp, width: W - 48, height: rowH * n, fill: 'none', stroke: '#8A7FA6', 'stroke-width': 1.6 }, L);
        kit.el('line', { x1: 24 + LW, y1: PTp, x2: 24 + LW, y2: PTp + rowH * n, stroke: '#8A7FA6', 'stroke-width': 1.6 }, L);
        const kind = o.icon || 'circle';
        const rBig = Math.min(15, rowH * 0.3); const rads = iconsDef.length === 3 ? [rBig, rBig * 0.72, rBig * 0.5] : [rBig, rBig * 0.55];
        data.forEach((d, i) => {
          const y = PTp + rowH * (i + 0.5);
          if (i) kit.el('line', { x1: 24, y1: PTp + rowH * i, x2: W - 24, y2: PTp + rowH * i, stroke: '#8A7FA6', 'stroke-width': 1 }, L);
          T(L, 24 + LW / 2, y + 5, d.label, 15);
          const g = kit.el('g', null, L);
          kit.el('rect', { x: 24 + LW, y: y - rowH / 2, width: W - 48 - LW, height: rowH, class: 'pk-hit' }, g);
          const ring = kit.el('rect', { x: 24 + LW + 2, y: y - rowH / 2 + 2, width: W - 52 - LW, height: rowH - 4, rx: 8, fill: 'none', stroke: '#473B6B', 'stroke-width': 2.4, display: 'none' }, g);
          rowsG[i] = { g, ring, y };
          iconEls[i] = iconsDef.map((ic, j) => { const arr = []; for (let k = 0; k < 12; k++) { const p = kit.piece(st, g, { shape: iconShape(kind, rads[j]), color: j === 0 ? 'peach' : j === 1 && iconsDef.length === 3 ? 'buttercup' : 'sky', depth: 1 }); p.g.setAttribute('pointer-events', 'none'); arr.push(p.g); } return { arr, r: rads[j] }; });
          if (editable(i)) {
            g.setAttribute('tabindex', '0'); g.setAttribute('role', 'group'); g.classList.add('ch-row-g');
            g.setAttribute('aria-label', `${d.label} 줄. 오른쪽 왼쪽 방향키는 작은 그림, PageUp PageDown은 큰 그림`);
            g.addEventListener('click', () => { sel = i; syncCur(); paint(); });
            g.addEventListener('focus', () => { sel = i; syncCur(); paint(); });
            g.addEventListener('keydown', (e) => {
              const small = iconsDef.length - 1;
              const m = { ArrowRight: [small, 1], ArrowUp: [small, 1], ArrowLeft: [small, -1], ArrowDown: [small, -1], PageUp: [0, 1], PageDown: [0, -1] }[e.key];
              if (!m) return; e.preventDefault(); setIcon(i, m[0], icons[i][m[0]] + m[1]);
            });
          }
        });
        // 범례: 그림 하나가 얼마인지
        const ly = PTp + rowH * n + 30; let lx = 40;
        T(L, lx, ly + 5, '그림 하나:', 14, '#473B6B', 'start'); lx += 92;
        iconsDef.forEach((ic, j) => { const p = kit.piece(st, L, { shape: iconShape(kind, rads[j]), color: j === 0 ? 'peach' : j === 1 && iconsDef.length === 3 ? 'buttercup' : 'sky', depth: 1 }); kit.transform(p.g, { x: lx, y: ly }); T(L, lx + rads[j] + 6, ly + 5, `= ${ic.name}`, 14, '#3D352E', 'start'); lx += 34 + rads[j] + ic.name.length * 14; });
      }

      // ===== 원·띠 =====
      const segs = [];
      const CX = W / 2; const CY = 216; const R = 140;
      const BX0 = 40; const BX1 = W - 40; const BY = 96; const BH = 64;
      if (ratio) {
        const L = st.layer('ratio');
        if (type === 'circle') kit.el('circle', { cx: CX, cy: CY, r: R, fill: '#FFFDF9', stroke: '#3D352E', 'stroke-width': 2 }, L);
        else kit.el('rect', { x: BX0, y: BY, width: BX1 - BX0, height: BH, fill: '#FFFDF9', stroke: '#3D352E', 'stroke-width': 2 }, L);
        const SL = st.layer('segs');
        data.forEach((d, i) => {
          const c = colorOf(i);
          const p = kit.el('path', { fill: o.print ? '#FFFFFF' : c.base, stroke: o.print ? '#000' : '#3D352E', 'stroke-width': 1.6, class: 'ch-seg' }, SL);
          const nm = T(SL, 0, 0, d.label, 15); const pv = T(SL, 0, 0, '', 14, '#204C5A');
          segs[i] = { p, nm, pv };
          if (editable(i)) { p.addEventListener('click', () => { sel = i; syncCur(); }); }
        });
        // 눈금: 원은 둘레에, 띠는 위쪽에
        const TL = st.layer('ticks');
        const nt = Math.round(100 / tickPct);
        for (let k = 0; k < nt; k++) {
          const big = (k * tickPct) % 10 === 0 || nt <= 10;
          if (type === 'circle') { const a = (k / nt) * Math.PI * 2; const r1 = R; const r2 = R + (big ? 10 : 6); kit.el('line', { x1: CX + Math.sin(a) * r1, y1: CY - Math.cos(a) * r1, x2: CX + Math.sin(a) * r2, y2: CY - Math.cos(a) * r2, stroke: '#3D352E', 'stroke-width': big ? 2 : 1.2 }, TL); }
          else { const x = BX0 + (k / nt) * (BX1 - BX0); kit.el('line', { x1: x, y1: BY - (big ? 10 : 6), x2: x, y2: BY, stroke: '#3D352E', 'stroke-width': big ? 2 : 1.2 }, TL); }
        }
        if (type === 'band') for (let k = 0; k <= 10; k++) T(TL, BX0 + (k / 10) * (BX1 - BX0), BY - 16, String(k * 10), 13);
        if (type === 'circle') [0, 25, 50, 75].forEach((v) => { const a = (v / 100) * Math.PI * 2; T(TL, CX + Math.sin(a) * (R + 24), CY - Math.cos(a) * (R + 24) + 5, String(v), 13); });
      }

      // ---- 아래 조작 칸 ----
      const panel = controls ? document.createElement('div') : null; if (panel) panel.className = 'ch-panel';
      let curOut = null; let catBtns = []; let pickBtns = []; let ansIn = null; let pick = null; let answer = null;
      const anyEditable = data.some((_, i) => editable(i));
      if (controls && mode === 'build' && anyEditable) {
        const row = document.createElement('div'); row.className = 'ch-row';
        if (type === 'picture') {
          iconsDef.forEach((ic, j) => {
            const lab = document.createElement('span'); lab.textContent = `${ic.name} 그림`; row.appendChild(lab);
            button(row, '<i class="fi fi-rr-minus" aria-hidden="true"></i>', `${ic.name} 그림 빼기`, () => setIcon(sel, j, icons[sel][j] - 1));
            button(row, '<i class="fi fi-rr-plus" aria-hidden="true"></i>', `${ic.name} 그림 더하기`, () => setIcon(sel, j, icons[sel][j] + 1));
          });
          curOut = document.createElement('output'); curOut.className = 'ch-cur'; row.prepend(curOut);
        } else {
          button(row, '<i class="fi fi-rr-minus" aria-hidden="true"></i>', '고른 항목 줄이기', () => bump(sel, -1));
          curOut = document.createElement('output'); curOut.className = 'ch-cur'; row.appendChild(curOut);
          button(row, '<i class="fi fi-rr-plus" aria-hidden="true"></i>', '고른 항목 늘리기', () => bump(sel, 1));
        }
        panel.appendChild(row);
        const row2 = document.createElement('div'); row2.className = 'ch-picks'; row2.setAttribute('aria-label', '그릴 항목 고르기');
        catBtns = data.map((d, i) => { if (!editable(i)) return null; const b = button(row2, '', `${d.label} 고르기`, () => { sel = i; syncCur(); paint(); }, 'pk-choice'); b.textContent = d.label; return b; });
        panel.appendChild(row2);
      }
      if (controls && mode === 'read' && !blanks.length) {
        const q = document.createElement('p'); q.className = 'ch-q'; q.textContent = o.question || '그래프를 보고 답하세요.'; panel.appendChild(q);
        if (Array.isArray(o.choices) && o.choices.length) {
          const row = document.createElement('div'); row.className = 'ch-picks'; row.setAttribute('role', 'radiogroup'); row.setAttribute('aria-label', q.textContent);
          pickBtns = o.choices.map((c, k) => { const b = button(row, '', null, () => { pick = k; syncPick(); log(); kit.announce(String(c)); }, 'pk-choice'); b.textContent = String(c); b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false'); return b; });
          panel.appendChild(row);
        } else {
          const row = document.createElement('div'); row.className = 'ch-row';
          ansIn = document.createElement('input'); ansIn.className = 'ch-in'; ansIn.type = 'text'; ansIn.setAttribute('tabindex', '0'); ansIn.setAttribute('inputmode', 'decimal'); ansIn.setAttribute('autocomplete', 'off'); ansIn.setAttribute('aria-label', q.textContent);
          ansIn.addEventListener('input', () => { ansIn.value = ansIn.value.replace(/[^0-9.]/g, '').slice(0, 7); answer = ansIn.value === '' || ansIn.value === '.' ? null : Number(ansIn.value); log(); });
          ansIn.addEventListener('keydown', (e) => { const dd = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!dd) return; e.preventDefault(); answer = Math.max(0, r6((answer || 0) + dd)); ansIn.value = String(answer); log(); });
          row.appendChild(ansIn);
          if (unit) { const u = document.createElement('span'); u.textContent = unit; row.appendChild(u); }
          panel.appendChild(row);
        }
      }
      if (panel && panel.childNodes.length) box.appendChild(panel);
      const syncPick = () => pickBtns.forEach((b, k) => b.setAttribute('aria-checked', String(k === pick)));
      function syncCur() {
        catBtns.forEach((b, i) => b && b.setAttribute('aria-pressed', String(i === sel)));
        if (!curOut) return;
        const d = data[sel];
        if (type === 'picture') curOut.textContent = `${d.label} 줄`;
        else curOut.textContent = showLive() && values[sel] != null ? `${d.label}: ${values[sel]}${pct}` : d.label;
      }

      function setVal(i, v, quiet) {
        if (!editable(i)) return;
        values[i] = v == null ? null : Math.max(type === 'line' ? from : 0, Math.min(ratio ? 100 : axisMax, r6(v)));
        revealed = false; paint();
        if (!quiet) { log(); kit.announce(`${data[i].label} ${josa(noun, '을', '를')} 바꿨어요`); }
      }
      function bump(i, d) {
        if (!editable(i)) return;
        const cur = values[i];
        setVal(i, cur == null ? (d > 0 ? (type === 'line' ? from : 0) + step * d : (type === 'line' ? from : 0)) : cur + d * step);
      }
      function setIcon(i, j, k) {
        if (!editable(i)) return;
        icons[i] = icons[i].slice(); icons[i][j] = Math.max(0, Math.min(12, k));
        revealed = false; paint(); log(); kit.announce(`${data[i].label}: ${iconsDef[j].name} 그림 ${icons[i][j]}개`);
      }

      function paint() {
        const live = showLive();
        if (type === 'bar') {
          data.forEach((d, i) => {
            const v = values[i]; const b = bars[i]; const bw = b.__w;
            if (v == null || (o.print && mode === 'build' && !given.has(i))) { b.setAttribute('display', 'none'); valTxt[i].textContent = ''; return; }
            b.setAttribute('display', 'inline');
            if (hz) { b.setAttribute('x', PL); b.setAttribute('y', catPos(i) - bw / 2); b.setAttribute('width', Math.max(0, valPos(v) - PL)); b.setAttribute('height', bw); valTxt[i].setAttribute('x', valPos(v) + 18); valTxt[i].setAttribute('y', catPos(i) + 5); }
            else { b.setAttribute('x', catPos(i) - bw / 2); b.setAttribute('y', valPos(v)); b.setAttribute('width', bw); b.setAttribute('height', Math.max(0, PT + plotH - valPos(v))); valTxt[i].setAttribute('x', catPos(i)); valTxt[i].setAttribute('y', valPos(v) - 8); }
            valTxt[i].textContent = live ? String(v) : '';
          });
        }
        if (type === 'line') {
          const ptsXY = [];
          data.forEach((d, i) => {
            const v = values[i];
            const hide = v == null || (o.print && mode === 'build' && !given.has(i));
            if (hide) { pts[i].setAttribute('display', editable(i) && v == null && !o.print ? 'inline' : 'none'); if (editable(i) && v == null) { kit.transform(pts[i], { x: catPos(i), y: PT + plotH + 0 }); pts[i].setAttribute('opacity', '0.35'); } valTxt[i].textContent = ''; ptsXY.push(null); return; }
            pts[i].setAttribute('display', 'inline'); pts[i].setAttribute('opacity', '1');
            kit.transform(pts[i], { x: catPos(i), y: valPos(v) });
            valTxt[i].setAttribute('x', catPos(i)); valTxt[i].setAttribute('y', valPos(v) - 14);
            valTxt[i].textContent = live ? String(v) : '';
            ptsXY.push([catPos(i), valPos(v)]);
          });
          // 이웃한 두 항목에 모두 점이 있을 때만 선분으로 잇는다(빈 항목에서 끊김)
          let dstr = '';
          ptsXY.forEach((p, k) => { if (!p) return; dstr += `${k && ptsXY[k - 1] ? 'L' : 'M'} ${p[0]} ${p[1]} `; });
          poly.setAttribute('d', dstr.trim() || 'M 0 0');
          poly.setAttribute('display', ptsXY.some((p, k) => p && k && ptsXY[k - 1]) ? 'inline' : 'none');
        }
        if (type === 'picture') {
          data.forEach((d, i) => {
            const cnt = o.print && mode === 'build' && !given.has(i) ? iconsDef.map(() => 0) : icons[i];
            const startX = 24 + 120 + 22; const avail = W - 48 - 120 - 30;
            const need = cnt.reduce((a, k, j) => a + k * (iconEls[i][j].r * 2 + 6), 0) + 14 * cnt.filter(Boolean).length;
            const sq = need > avail ? avail / need : 1;
            let x = startX;
            iconEls[i].forEach((grp, j) => {
              grp.arr.forEach((g, k) => {
                if (k < cnt[j]) { g.setAttribute('display', 'inline'); kit.transform(g, { x: x + grp.r, y: rowsG[i].y }); x += (grp.r * 2 + 6) * sq; }
                else g.setAttribute('display', 'none');
              });
              if (cnt[j]) x += 14 * sq;
            });
            rowsG[i].ring.setAttribute('display', editable(i) && i === sel ? 'inline' : 'none');
          });
        }
        if (ratio) {
          let acc = 0;
          data.forEach((d, i) => {
            const v = o.print && mode === 'build' && !given.has(i) ? null : values[i];
            const s = segs[i];
            if (v == null || v <= 0) { s.p.setAttribute('display', 'none'); s.nm.textContent = ''; s.pv.textContent = ''; return; }
            const a0 = Math.min(100, acc); const a1 = Math.min(100, acc + v); acc += v;
            s.p.setAttribute('display', 'inline');
            s.p.setAttribute('stroke-width', editable(i) && i === sel && controls ? 3.2 : 1.6);
            let lx; let ly;
            if (type === 'circle') {
              const t0 = (a0 / 100) * Math.PI * 2; const t1 = (a1 / 100) * Math.PI * 2;
              const p0 = [CX + Math.sin(t0) * R, CY - Math.cos(t0) * R]; const p1 = [CX + Math.sin(t1) * R, CY - Math.cos(t1) * R];
              s.p.setAttribute('d', a1 - a0 >= 99.999 ? `M ${CX} ${CY - R} A ${R} ${R} 0 1 1 ${CX - 0.01} ${CY - R} Z` : `M ${CX} ${CY} L ${p0[0]} ${p0[1]} A ${R} ${R} 0 ${a1 - a0 > 50 ? 1 : 0} 1 ${p1[0]} ${p1[1]} Z`);
              const tm = ((a0 + a1) / 200) * Math.PI * 2; const rr = a1 - a0 < 9 ? R + 34 : R * 0.6;
              lx = CX + Math.sin(tm) * rr; ly = CY - Math.cos(tm) * rr;
            } else {
              const x0 = BX0 + (a0 / 100) * (BX1 - BX0); const x1 = BX0 + (a1 / 100) * (BX1 - BX0);
              s.p.setAttribute('d', `M ${x0} ${BY} H ${x1} V ${BY + BH} H ${x0} Z`);
              lx = (x0 + x1) / 2; ly = BY + BH / 2 + (x1 - x0 < 56 ? BH : 0);
            }
            s.nm.setAttribute('x', lx); s.nm.setAttribute('y', ly - (live ? 2 : -5)); s.nm.textContent = d.label;
            s.pv.setAttribute('x', lx); s.pv.setAttribute('y', ly + 16); s.pv.textContent = live ? `${v}%` : '';
          });
        }
        syncCur();
      }
      paint();

      // ---- 상태 ----
      function state() {
        if (mode === 'read') { if (blanks.length) return { table: tblVals.slice() }; if (pickBtns.length || Array.isArray(o.choices)) return { pick }; return { answer }; }
        if (type === 'picture') return { icons: icons.map((a) => a.slice()) };
        return { values: values.slice() };
      }
      function setState(s) {
        s = s || {};
        if (mode === 'read') {
          if (Array.isArray(s.table)) { tblVals = blanks.map((_, k) => (s.table[k] == null ? null : Number(s.table[k]))); tableInputs.forEach((inp, k) => { inp.value = tblVals[k] == null ? '' : String(tblVals[k]); }); }
          if (s.pick !== undefined) { pick = Number.isInteger(s.pick) ? s.pick : null; syncPick(); }
          if (s.answer !== undefined) { answer = s.answer == null ? null : Number(s.answer); if (ansIn) ansIn.value = answer == null ? '' : String(answer); }
        } else if (type === 'picture') {
          if (Array.isArray(s.icons)) icons = data.map((d, i) => (given.has(i) ? greedy(d.value) : iconsDef.map((_, j) => Math.max(0, Math.min(12, Math.round(Number((s.icons[i] || [])[j]) || 0))))));
        } else if (Array.isArray(s.values)) {
          values = data.map((d, i) => (given.has(i) ? d.value : s.values[i] == null || !Number.isFinite(Number(s.values[i])) ? null : r6(Number(s.values[i]))));
        }
        revealed = false; paint();
      }
      const start0 = JSON.parse(JSON.stringify(state()));

      // ---- 채점 ----
      const checkIdx = (t) => (Array.isArray(t.build) ? t.build.filter((i) => i >= 0 && i < n) : data.map((_, i) => i).filter((i) => !given.has(i)));
      const valNow = (i) => (type === 'picture' ? valueOfIcons(icons[i]) : values[i]);
      function judge(t) {
        t = t || {};
        if (mode === 'build') {
          const idx = checkIdx(t);
          const notYet = idx.filter((i) => (type === 'picture' ? icons[i].every((k) => !k) : values[i] == null));
          if (notYet.length) return { correct: false, incomplete: true, feedback: `아직 그리지 않은 것: ${notYet.map((i) => data[i].label).join(', ')}` };
          const bad = idx.filter((i) => Math.abs(valNow(i) - data[i].value) > 1e-6);
          if (ratio && !bad.length) { const sum = r6(values.reduce((a, v) => a + (v || 0), 0)); if (Math.abs(sum - 100) > 1e-6) return { correct: false, feedback: `모두 더하면 ${sum}%예요. 100%가 되어야 해요.`, hint: '각 부분의 백분율을 모두 더해 100인지 확인해요.', h3: `표의 백분율대로 다시 그려요: ${data.map((d) => `${d.label} ${d.value}%`).join(', ')} — 모두 더하면 100%예요.` }; }
          if (bad.length) {
            const i = bad[0]; const d = data[i]; const v = valNow(i);
            let why = `${josa(`${d.label} ${noun}`, '이', '가')} 표의 수와 달라요.`;
            if ((type === 'bar' || type === 'line') && scale > 1 && Math.abs(v - from - (d.value - from) / scale) < 1e-6) why = `눈금 한 칸이 ${ieyo(`${scale}${unit}`)}. 칸 수가 아니라 눈금이 나타내는 수를 읽어요.`;
            else if (ratio && Math.abs(v - (100 - d.value)) < 1e-6 && 100 - d.value !== d.value) why = `${d.label} 부분이 나머지 크기로 그려졌어요.`;
            const fb = o.revealAfterCheck ? `표와 다른 ${josa(noun, '이', '가')} ${bad.length}개 있어요.` : why;
            const more = v > d.value;
            const h3 = type === 'picture'
              ? `${d.label}: ${d.value}${unit} → ${greedy(d.value).map((k, j) => `${iconsDef[j].name} 그림 ${k}개`).join(', ')}`
              : ratio ? `${d.label}: ${d.value}% → 눈금 ${Math.round(d.value / tickPct)}칸(한 칸 ${tickPct}%)`
                : `${d.label}: ${d.value}${unit} → 눈금 ${r6((d.value - from) / scale)}칸(한 칸 ${scale}${unit})`;
            return { correct: false, bad, feedback: fb, hint: `${d.label} ${josa(noun, '을', '를')} 표와 견주어 보세요. 지금은 ${more ? '많아요(높아요)' : '적어요(낮아요)'}.`, h3 };
          }
          if (type === 'picture' && !o.anyIcons) {
            const loose = idx.find((i) => icons[i].some((k, j) => j > 0 && k * iconsDef[j].value >= iconsDef[j - 1].value));
            if (loose != null) return { correct: false, feedback: `${data[loose].label}: 작은 그림을 모으면 큰 그림으로 바꿀 수 있어요. 큰 그림부터 그려요.`, hint: '큰 그림으로 나타낼 수 있는 만큼 먼저 큰 그림을 그려요.', h3: `${data[loose].label}: ${greedy(data[loose].value).map((k, j) => `${iconsDef[j].name} 그림 ${k}개`).join(', ')}`, bad: [loose] };
          }
          return { correct: true, feedback: `맞아요! 표를 보고 ${{ picture: '그림그래프', bar: '막대그래프', line: '꺾은선그래프', circle: '원그래프', band: '띠그래프' }[type]}를 완성했어요.` };
        }
        if (t.table) {
          const empty = tblVals.findIndex((v) => v == null);
          if (empty >= 0) return { correct: false, incomplete: true, feedback: `표의 빈칸(${data[blanks[empty]].label})을 채워요.` };
          const k = blanks.findIndex((i, j) => Math.abs(tblVals[j] - data[i].value) > 1e-6);
          if (k >= 0) { const d = data[blanks[k]]; const v = tblVals[k]; return { correct: false, feedback: o.revealAfterCheck ? '표에 그래프와 다른 수가 있어요.' : (type === 'bar' || type === 'line') && scale > 1 && Math.abs(v - (d.value - from) / scale) < 1e-6 ? `${d.label}: 칸 수를 썼어요. 눈금 한 칸은 ${ieyo(`${scale}${unit}`)}.` : `${d.label}의 수를 그래프에서 다시 읽어 보세요.`, hint: `${d.label} ${josa(noun, '이', '가')} 어느 눈금까지 오는지 손가락으로 따라가 보세요.`, h3: type === 'picture' ? `${d.label}: ${greedy(d.value).map((c, j) => `${iconsDef[j].name}×${c}`).join(' + ')} = ${d.value}${unit}` : `${josa(d.label, '은', '는')} ${ieyo(`${d.value}${pct}`)}.` }; }
          return { correct: true, feedback: '맞아요! 그래프를 읽어 표를 채웠어요.' };
        }
        if (t.pick != null) {
          if (pick == null) return { correct: false, incomplete: true, feedback: '아래에서 하나를 골라요.' };
          if (pick !== t.pick) return { correct: false, feedback: (o.why && o.why[pick]) || '고른 답이 그래프의 어느 부분을 말하는지 짚어 보고, 그래프와 다시 견주어 골라 볼까요?', hint: '고른 답이 그래프의 어느 부분인지 짚어 보고, 다른 것과 견주어 보세요.', h3: o.explain || '가장 긴(높은) 것과 가장 짧은(낮은) 것을 먼저 찾아 견주어요.' };
          return { correct: true, feedback: `맞아요! ${o.choices[t.pick]}` };
        }
        if (answer == null) return { correct: false, incomplete: true, feedback: '수를 써요.' };
        if (Math.abs(answer - t.value) > 1e-6) return { correct: false, feedback: (type === 'bar' || type === 'line') && scale > 1 && Number.isInteger(t.value / scale) && Math.abs(answer - t.value / scale) < 1e-6 ? `칸 수를 썼어요. 눈금 한 칸은 ${ieyo(`${scale}${unit}`)}.` : '그래프를 다시 읽어 볼까요?', hint: `쓴 수가 ${answer > t.value ? '커요' : '작아요'}. 눈금 한 칸의 크기를 다시 확인해요.`, h3: o.explain || `눈금 한 칸은 ${ieyo(`${scale}${unit}`)}. 끝이 닿은 눈금을 차례로 세어 읽어요.` };
        return { correct: true, feedback: `맞아요! ${t.value}${unit}` };
      }
      // 아직 다 하지 않은 상태의 2·3단계 힌트(1단계는 strategy)
      function pending(t, lv) {
        const h3Of = (d) => (type === 'picture' ? `${d.label}: ${d.value}${unit} → ${greedy(d.value).map((k, j) => `${iconsDef[j].name} 그림 ${k}개`).join(', ')}`
          : ratio ? `${d.label}: ${d.value}% → 눈금 ${Math.round(d.value / tickPct)}칸(한 칸 ${tickPct}%)` : `${d.label}: ${d.value}${unit} → 눈금 ${r6((d.value - from) / scale)}칸(한 칸 ${scale}${unit})`);
        if (mode === 'build') {
          const i = checkIdx(t).find((k) => (type === 'picture' ? icons[k].every((x) => !x) : values[k] == null));
          const d = data[i != null ? i : checkIdx(t)[0]];
          if (!d) return strategy();
          return lv >= 3 ? h3Of(d) : `아직 ‘${d.label}’ ${josa(noun, '을', '를')} 그리지 않았어요. 표에서 ${d.label}의 수를 찾고, 눈금 한 칸이 얼마인지 견주어 그려요.`;
        }
        if (t.table) {
          const k = tblVals.findIndex((v) => v == null); const d = data[blanks[k >= 0 ? k : 0]];
          if (!d) return strategy();
          return lv >= 3 ? `${josa(d.label, '은', '는')} ${ieyo(`${d.value}${pct}`)}.` : `빈칸 ‘${d.label}’의 ${josa(noun, '이', '가')} 어느 눈금까지 오는지 손가락으로 따라가 보세요.`;
        }
        if (t.pick != null) return lv >= 3 ? (o.explain || '가장 긴(높은) 것과 가장 짧은(낮은) 것을 먼저 찾아 견주어요.') : '보기마다 그래프의 어느 부분을 말하는지 하나씩 짚어 보고, 그래프와 맞지 않는 보기를 지워 가요.';
        return lv >= 3 ? (o.explain || `눈금 한 칸은 ${ieyo(`${scale}${unit}`)}. 끝이 닿은 눈금까지 한 칸씩 세어 읽어요.`)
          : `묻는 항목의 ${josa(noun, '을', '를')} 찾아, 그 끝에서 눈금 쪽으로 줄을 그어 닿는 눈금을 읽어요.`;
      }
      function strategy() {
        if (mode === 'build') {
          if (type === 'picture') return '그림 하나가 나타내는 수를 먼저 보고, 큰 그림부터 그린 뒤 나머지를 작은 그림으로 그려요.';
          if (ratio) return '눈금 한 칸이 몇 %인지 알아보고, 표의 차례대로 그 칸 수만큼 나누어 그려요. 모두 더하면 100%예요.';
          return '세로 눈금 한 칸이 얼마인지 먼저 알아보고, 표의 수만큼 그려요.'.replace('세로', hz ? '가로' : '세로');
        }
        return '제목과 눈금 한 칸의 크기(그림 하나의 크기)를 먼저 읽고, 묻는 항목을 그래프에서 찾아요.';
      }

      const api = {
        getState: state,
        setState,
        reset() { setState(JSON.parse(JSON.stringify(start0))); },
        check(t, opts) {
          const r = judge(t); const bad = r.bad; delete r.bad; delete r.h3;
          if (!(opts && opts.forHint)) {
            if (r.correct) { revealed = true; paint(); kit.tick('ok'); }
            else if (bad && !o.revealAfterCheck && controls) { sel = bad[0]; paint(); }
          }
          return r;
        },
        solve(t) {
          t = t || {};
          if (mode === 'build') {
            const idx = new Set(checkIdx(t));
            if (type === 'picture') setState({ icons: data.map((d, i) => (idx.has(i) || given.has(i) ? greedy(d.value) : icons[i])) });
            else setState({ values: data.map((d, i) => (idx.has(i) || given.has(i) || ratio ? d.value : values[i])) });
          } else if (t.table) setState({ table: blanks.map((i) => data[i].value) });
          else if (t.pick != null) setState({ pick: t.pick });
          else setState({ answer: t.value });
        },
        // 힌트 사다리: 1 = 읽는 방법(strategy) · 2 = 어긋난(아직 안 한) 항목 짚기 · 3 = 그 항목의 풀이. 아직 다 하지 않은 상태에서도 단계마다 다른 글
        hint(t, opts) {
          t = t || {};
          const r = judge(t); const lv = hintLevel(opts);
          if (r.correct) return { hint: strategy(), correct: true, level: 1 };
          if (lv === 1) return { hint: strategy(), correct: false, level: 1 };
          if (r.incomplete || !r.hint) return { hint: pending(t, lv), correct: false, level: lv };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        // 흔한 실수: 눈금 칸 수를 값으로 읽는다 · 그림 단위를 바꿔 센다 · 원·띠에서 두 항목 자리를 바꾼다 · 한 칸 어긋난다
        wrongAnswer(t) {
          t = t || {};
          if (mode === 'build') {
            api.solve(t); const s = JSON.parse(JSON.stringify(state())); const idx = checkIdx(t); if (!idx.length) return null;
            const i = idx[0]; const d = data[i];
            if (type === 'picture') {
              const g = greedy(d.value); const sw = g.slice().reverse();
              s.icons[i] = sw.every((k) => k <= 12) && valueOfIcons(sw) !== d.value ? sw : g.map((k, j) => (j === g.length - 1 ? Math.min(12, k + 1) : k));
              if (valueOfIcons(s.icons[i]) === d.value) s.icons[i][s.icons[i].length - 1] += 1;
              return s;
            }
            if (ratio) {
              const j = idx.find((k) => k !== i && data[k].value !== d.value);
              if (j != null) { s.values[i] = data[j].value; s.values[j] = d.value; return s; }
              const k2 = (i + 1) % n; s.values[i] = d.value + tickPct; s.values[k2] = Math.max(0, data[k2].value - tickPct); return s;
            }
            const cells = r6((d.value - from) / scale);
            s.values[i] = scale > 1 && Number.isInteger(cells) && from + cells !== d.value && from + cells >= from ? r6(from + cells) : r6(d.value + step <= axisMax ? d.value + step : d.value - step);
            return s;
          }
          if (t.table) { const s = { table: blanks.map((i) => data[i].value) }; if (!s.table.length) return null; const d = data[blanks[0]].value; s.table[0] = (type === 'bar' || type === 'line') && scale > 1 ? r6((d - from) / scale) : d + step; if (s.table[0] === d) s.table[0] = d + 1; return s; }
          if (t.pick != null) { const c = (o.choices || []).length; return c > 1 ? { pick: (t.pick + 1) % c } : null; }
          return { answer: (type === 'bar' || type === 'line') && scale > 1 && Number.isInteger(t.value / scale) && t.value / scale !== t.value ? t.value / scale : t.value + step };
        },
        distance(a, b) {
          a = a || {}; b = b || {};
          const one = (x, y, u) => (x == null && y == null ? 0 : x == null || y == null ? 1 : Math.abs(x - y) / (u || 1));
          if (a.icons || b.icons) { let d = 0; const A = a.icons || []; const B = b.icons || []; for (let i = 0; i < Math.max(A.length, B.length); i++) for (let j = 0; j < iconsDef.length; j++) d += Math.abs(((A[i] || [])[j] || 0) - ((B[i] || [])[j] || 0)); return d; }
          if (a.values || b.values) { let d = 0; const A = a.values || []; const B = b.values || []; for (let i = 0; i < Math.max(A.length, B.length); i++) d += one(A[i], B[i], step); return d; }
          if (a.table || b.table) { let d = 0; const A = a.table || []; const B = b.table || []; for (let i = 0; i < Math.max(A.length, B.length); i++) d += one(A[i], B[i], 1); return d; }
          if ('answer' in a || 'answer' in b) return one(a.answer, b.answer, 1);
          return a.pick === b.pick ? 0 : 1;
        },
        async demo(t) {
          if (mode !== 'build' || !t) { if (t) api.solve(t); return; }
          for (const i of checkIdx(t)) {
            if (type === 'picture') { const g = greedy(data[i].value); icons[i] = iconsDef.map(() => 0); for (let j = 0; j < g.length; j++) for (let k = 0; k < g[j]; k++) { icons[i][j] = k + 1; paint(); await kit.wait(120); } }
            else { const target = data[i].value; let v = type === 'line' ? from : 0; values[i] = v; while (v < target - 1e-9) { v = Math.min(target, r6(v + step)); values[i] = v; paint(); await kit.wait(60); } }
          }
        },
      };
      return api;
    },
  });
})(window.PaperKit);
