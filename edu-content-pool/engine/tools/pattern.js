/* 규칙 판 — 색·모양·수·글자 조각이 늘어선 줄에서 규칙을 찾는다: 빈칸(다음 조각) 채우기, 규칙 고르기, 틀린 조각 찾기, 규칙 만들기.
 * 1·2학년 규칙 찾기, 4학년 규칙과 대응·수의 배열, 국어(글자 되풀이)·음악(박자 무늬)·미술(무늬 꾸미기)에도 쓴다.
 *
 * 조각(piece) 쓰는 법: 수 3 → 수 조각 · 'circle:rose' → 모양:색 · 'star' → 모양(기본 색) · '가' → 글자 조각
 *   또는 { s: 모양, c: 색, n?: 수, t?: 글자, k?: 작은 모양 개수(늘어나는 무늬), r?: 돌린 각도 }
 *   모양: circle square triangle star heart diamond hexagon arrow · 색: mint peach lavender buttercup sky rose cream ink
 *
 * 옵션(toolOptions·levels)
 * | 키 | 뜻 | 기본 |
 * | mode | 'fill' 빈칸 채우기 · 'rule' 규칙 고르기 · 'odd' 틀린 조각 찾기 · 'make' 규칙 만들기 | 'fill' |
 * | seq | 조각 줄. fill에서 null은 빈칸(가운데·끝 어디든) | [] |
 * | palette | 고를 조각들(fill·make) | seq에 나온 조각들 |
 * | input | 'number'면 빈칸에 수를 쓴다(palette 대신) | 수만 있는 줄이고 palette가 없으면 'number' |
 * | digits | 수 칸에 쓸 수 있는 자릿수(큰 수 뛰어 세기 등) | 4와 seq 의 가장 긴 수 자릿수 가운데 큰 값 |
 * | length | make: 만들 조각 수(4~12) | 8 |
 * | start | make + 수: 첫 수 힌트(solve 기본 시작 수) | 1 |
 * | choices, question, why | rule: 보기 글 배열·질문 글·보기마다 틀렸을 때 할 말 | — |
 * | perRow | 한 줄에 놓을 조각 수 | 8 |
 * | names | 빈칸 이름 | ['가','나','다',…] |
 * | revealAfterCheck | 틀린 확인에서 어느 칸이 틀렸는지 표시·말하지 않는다 | — |
 * | print | 활동지 그림(색은 무늬 결로 바꿔 흑백에서도 구별, 빈칸은 비움) | — |
 *
 * 상태
 * | fill | { fill: [팔레트 번호|null, …] } (수 입력이면 [수|null, …]) — 빈칸 차례 |
 * | make | { seq: [팔레트 번호|null, …] } (수 입력이면 [수|null, …]) |
 * | rule · odd | { pick: 번호|null } — odd는 조각 자리 번호(0부터) |
 *
 * target
 * | fill | { fill: [조각, …] } — 빈칸 차례대로 들어갈 조각(위의 조각 쓰는 법) |
 * | rule | { pick: 번호 } |
 * | odd | { odd: 자리 번호 } |
 * | make | { rule: 'repeat', period?: 되풀이 묶음 길이, minRepeats?: 2, uses?: 최소 서로 다른 조각 수 } · { rule: 'add', step?: 더하는 수 } · { rule: 'core', core: [조각…] } |
 *
 * 예) 빈칸: toolOptions { seq: ['circle:rose','square:sky','circle:rose','square:sky',null,null] }, target { fill: ['circle:rose','square:sky'] }
 *     수 배열: toolOptions { seq: [3, 6, null, 12, 15, null] }, target { fill: [9, 18] }
 *     만들기: toolOptions { mode: 'make', palette: ['star:buttercup','heart:rose','circle:sky'], length: 9 }, target { rule: 'repeat', period: 3 }
 * 키보드: 빈칸·만들기 칸에 Tab → ↑/↓(또는 →/←)로 조각 바꾸기, Delete 지우기, 수 칸은 숫자 키. 아래 팔레트 단추 Tab+Enter = 고른 칸에 넣기.
 */
(function (K) {
  'use strict';
  const SHAPES = ['circle', 'square', 'triangle', 'star', 'heart', 'diamond', 'hexagon', 'arrow'];
  const COLORS = { mint: '초록', peach: '주황', lavender: '보라', buttercup: '노랑', sky: '파랑', rose: '분홍', cream: '흰', ink: '검정' };
  const SHAPE_KO = { circle: '동그라미', square: '네모', triangle: '세모', star: '별', heart: '하트', diamond: '마름모', hexagon: '육각형', arrow: '화살표' };
  // 흑백 활동지에서 색 대신 보일 결(무늬)
  const TEX = { mint: 'dots', peach: 'diag', lavender: 'hline', sky: 'vline', rose: 'cross', ink: 'solid', buttercup: 'none', cream: 'none' };
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  const intOrNull = (v) => (Number.isFinite(Number(v)) && v !== null && v !== '' ? Math.round(Number(v)) : null);
  // 조각 안 글자 크기: 짧으면 big, 4~5자 small, 큰 수(6자 이상)는 칸(64) 안에 들도록 더 줄인다
  const numFont = (txt, small, big) => (txt.length > 7 ? 11 : txt.length > 5 ? 14 : txt.length > 3 ? small : big);
  function norm(p) {
    if (p == null) return null;
    if (typeof p === 'number') return { n: p };
    if (typeof p === 'string') {
      const m = /^([a-z]+):([a-z]+)$/.exec(p);
      if (m && SHAPES.includes(m[1])) return { s: m[1], c: m[2] };
      if (SHAPES.includes(p)) return { s: p, c: 'peach' };
      if (/^-?\d+(\.\d+)?$/.test(p)) return { n: Number(p) };
      return { t: p };
    }
    if (typeof p === 'object') {
      const q = {};
      if (p.s) { q.s = SHAPES.includes(p.s) ? p.s : 'circle'; q.c = p.c || 'peach'; }
      if (p.n != null) q.n = Number(p.n);
      if (p.t != null) q.t = String(p.t);
      if (p.k != null) q.k = Math.max(1, Math.min(16, Math.round(p.k)));
      if (p.r) q.r = ((Math.round(p.r) % 360) + 360) % 360;
      return q;
    }
    return null;
  }
  const keyOf = (p) => { const q = norm(p); if (!q) return ''; return ['s', 'c', 'n', 't', 'k', 'r'].map((k) => (q[k] == null ? '' : q[k])).join('|'); };
  // 받침에 맞는 조사(따옴표·괄호·수 뒤도: 'ㄱ'은, 손뼉이, 3이, 돌림)이) — 마지막 한글 글자나 숫자를 본다
  function jo(w, a, b) {
    const s = String(w).replace(/[’'"”)\]\s°]+$/, ''); const ch = s.charCodeAt(s.length - 1);
    if (ch >= 0xac00 && ch <= 0xd7a3) return `${w}${(ch - 0xac00) % 28 ? a : b}`;
    return `${w}${/[013678]$/.test(s) ? a : b}`;
  }
  function say(p) {
    const q = norm(p); if (!q) return '빈칸';
    if (q.t != null) return `'${q.t}'`;
    if (q.n != null && !q.s) return String(q.n);
    let w = `${COLORS[q.c] || ''} ${SHAPE_KO[q.s] || '조각'}`.trim();
    if (q.k) w += ` ${q.k}개`;
    if (q.r) w += `(${q.r}° 돌림)`;
    return w;
  }
  function shapePath(s, r) {
    switch (s) {
      case 'square': return { type: 'rect', w: r * 1.7, h: r * 1.7, rx: r * 0.25 };
      case 'triangle': return { type: 'poly', points: `0,${-r * 1.05} ${r * 1.0},${r * 0.75} ${-r * 1.0},${r * 0.75}` };
      case 'diamond': return { type: 'poly', points: `0,${-r * 1.1} ${r * 0.85},0 0,${r * 1.1} ${-r * 0.85},0` };
      case 'hexagon': { const p = []; for (let i = 0; i < 6; i++) { const a = (Math.PI / 3) * i; p.push(`${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`); } return { type: 'poly', points: p.join(' ') }; }
      case 'star': { const p = []; for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i - Math.PI / 2; const q = i % 2 ? r * 0.45 : r * 1.1; p.push(`${(Math.cos(a) * q).toFixed(1)},${(Math.sin(a) * q).toFixed(1)}`); } return { type: 'poly', points: p.join(' ') }; }
      case 'heart': return { type: 'path', d: `M0 ${r * 0.95} C ${-r * 1.5} ${-r * 0.1} ${-r * 0.75} ${-r * 1.25} 0 ${-r * 0.45} C ${r * 0.75} ${-r * 1.25} ${r * 1.5} ${-r * 0.1} 0 ${r * 0.95} Z` };
      case 'arrow': return { type: 'poly', points: `0,${-r * 1.1} ${r * 0.9},${-r * 0.1} ${r * 0.35},${-r * 0.1} ${r * 0.35},${r * 1.0} ${-r * 0.35},${r * 1.0} ${-r * 0.35},${-r * 0.1} ${-r * 0.9},${-r * 0.1}` };
      default: return { type: 'circle', r };
    }
  }
  function ensureStyle() {
    if (document.getElementById('pt-style')) return;
    const s = document.createElement('style'); s.id = 'pt-style';
    s.textContent = `
.pt-panel{display:grid;gap:8px;margin-top:8px}
.pt-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.pt-q{margin:0;font-weight:700;line-height:1.45;word-break:keep-all}
.pt-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px}
.pt-b{min-height:48px;min-width:48px;padding:4px 10px;border-radius:12px;border:1px solid rgba(61,53,46,.22);background:#FFFDF9;color:#3D352E;font:inherit;font-weight:700;line-height:1.3;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;word-break:keep-all}
.pt-b svg{width:36px;height:36px;display:block}
.pt-b .fi{display:inline-flex;line-height:1}
.pt-b[aria-checked="true"],.pt-b[aria-pressed="true"]{background:#EAF7F1;box-shadow:0 0 0 3px #82C2A8}
.pt-in{min-height:44px;width:4.6em;box-sizing:border-box;padding:6px 8px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.1em;font-weight:800;text-align:center;color:#275C46;background:#fff}
.pt-lab{display:inline-flex;align-items:center;gap:4px;font-weight:800;color:#473B6B}
@media print{.pt-panel{display:none}}
`;
    document.head.appendChild(s);
  }
  function button(parent, html, label, onClick, cls) {
    const b = document.createElement('button'); b.type = 'button'; b.className = `pt-b${cls ? ` ${cls}` : ''}`; b.setAttribute('tabindex', '0');
    b.innerHTML = html; if (label) b.setAttribute('aria-label', label);
    b.addEventListener('click', onClick); parent.appendChild(b); return b;
  }

  K.registerTool('pattern', {
    name: '규칙 판',
    create(box, o, kit) {
      ensureStyle();
      const mode = ['fill', 'rule', 'odd', 'make'].includes(o.mode) ? o.mode : 'fill';
      const controls = !o.print;
      const names = Array.isArray(o.names) && o.names.length ? o.names : ['가', '나', '다', '라', '마', '바', '사', '아', '자', '차', '카', '타'];
      const seq = (Array.isArray(o.seq) ? o.seq : []).slice(0, 16).map(norm);
      const allNum = seq.filter(Boolean).length > 0 && seq.filter(Boolean).every((p) => p.n != null && !p.s && p.t == null);
      // 팔레트: 주어지지 않으면 줄에 나온 조각을 한 번씩(나온 차례)
      let palette = Array.isArray(o.palette) ? o.palette.map(norm).filter(Boolean) : [];
      if (!palette.length) { const seen = new Set(); for (const p of seq) if (p && !seen.has(keyOf(p))) { seen.add(keyOf(p)); palette.push(p); } }
      const digits = Math.max(1, Math.min(12, intOrNull(o.digits) || Math.max(4, ...seq.filter((p) => p && p.n != null).map((p) => String(Math.abs(Math.round(p.n))).length))));
      const numInput = o.input === 'number' || (o.input == null && !Array.isArray(o.palette) && (mode === 'fill' ? allNum : mode === 'make' && allNum));
      const blanksAt = mode === 'fill' ? seq.map((p, i) => (p == null ? i : -1)).filter((i) => i >= 0) : [];
      const length = mode === 'make' ? Math.max(4, Math.min(12, o.length || 8)) : seq.length;
      const slots = mode === 'make' ? length : seq.length;
      let perRow = Math.max(3, Math.min(10, o.perRow || 8));
      // 휴대폰(좁은 상자): 판 폭을 줄이고 한 줄 조각 수를 그에 맞춰 줄여, 칸 누름 영역(조각+4)이 화면 46px 이상이 되게 한다.
      // 넓은 화면·활동지는 폭 640 그대로
      let W = 640;
      const boxW = o.print ? 0 : box.clientWidth || 0;
      if (boxW && boxW < 520) { W = Math.min(640, Math.floor((boxW * 68) / 47)); perRow = Math.min(perRow, Math.max(3, Math.floor((W - 30) / 74))); }
      const nRows = Math.max(1, Math.ceil(slots / perRow));
      const cols = Math.min(perRow, Math.max(1, slots));
      const TS = Math.min(64, Math.floor((W - 40) / cols) - 10); const GAP = 10;
      const H = 30 + nRows * (TS + 26) + 18;
      const st = kit.stage(box, { viewBox: [W, H], label: mode === 'make' ? '규칙 판. 조각을 골라 규칙이 있게 늘어놓으세요.' : mode === 'odd' ? '규칙 판. 규칙에 맞지 않는 조각을 고르세요.' : mode === 'rule' ? '규칙 판. 조각이 늘어선 규칙을 찾으세요.' : '규칙 판. 규칙을 찾아 빈칸에 알맞은 조각을 넣으세요.' });
      kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 16 }, color: 'cream', fill: '#FBF6EC', depth: 2, texture: true });
      // 흑백 결 무늬(인쇄): 색 조각 위에 겹친다
      const texId = (c) => `${st.shadow.slice(5, -1).replace('-shadow', '')}-pt-${TEX[c] || 'none'}`;
      if (o.print) {
        const d = st.defs;
        const mk = (name, body) => { const p = kit.el('pattern', { id: texId(Object.keys(TEX).find((k) => TEX[k] === name)), width: 6, height: 6, patternUnits: 'userSpaceOnUse' }, d); body(p); };
        mk('dots', (p) => kit.el('circle', { cx: 3, cy: 3, r: 1.2, fill: '#000' }, p));
        mk('diag', (p) => kit.el('path', { d: 'M0 6 L6 0', stroke: '#000', 'stroke-width': 1 }, p));
        mk('hline', (p) => kit.el('path', { d: 'M0 3 L6 3', stroke: '#000', 'stroke-width': 1 }, p));
        mk('vline', (p) => kit.el('path', { d: 'M3 0 L3 6', stroke: '#000', 'stroke-width': 1 }, p));
        mk('cross', (p) => { kit.el('path', { d: 'M0 6 L6 0 M0 0 L6 6', stroke: '#000', 'stroke-width': 0.8 }, p); });
        mk('solid', (p) => kit.el('rect', { width: 6, height: 6, fill: '#555' }, p));
      }
      const posOf = (i) => { const r = Math.floor(i / perRow); const c = i % perRow; const rowN = Math.min(perRow, slots - r * perRow); const ox = (W - (rowN * (TS + GAP) - GAP)) / 2; return [ox + c * (TS + GAP) + TS / 2, 26 + r * (TS + 26) + TS / 2]; };

      // 조각 하나를 묶음(g) 안에 한 번 그린다. 빈칸은 팔레트 조각을 모두 미리 그려 두고 보이기만 바꾼다(조각 DOM을 다시 만들지 않음)
      function drawPiece(g, p, size) {
        const q = norm(p); if (!q) return;
        if (q.s) {
          if (q.k && q.k > 1) {
            const mc = Math.ceil(Math.sqrt(q.k)); const sp = size / (mc + 0.4); const r = sp * 0.36;
            for (let j = 0; j < q.k; j++) {
              const x = (j % mc - (mc - 1) / 2) * sp; const y = (Math.floor(j / mc) - (Math.ceil(q.k / mc) - 1) / 2) * sp;
              kit.piece(st, g, { shape: shapePath(q.s, r), color: q.c, depth: 1, x, y, r: q.r || 0 }).g.setAttribute('pointer-events', 'none');
              if (o.print && TEX[q.c] && TEX[q.c] !== 'none') { const t = kit.el('g', { 'pointer-events': 'none' }, g); kit.transform(t, { x, y, r: q.r || 0 }); shapeEl(shapePath(q.s, r), t, q.c); }
            }
          } else {
            const r = size * 0.33;
            kit.piece(st, g, { shape: shapePath(q.s, r), color: q.c, depth: 1, r: q.r || 0 }).g.setAttribute('pointer-events', 'none');
            if (o.print && TEX[q.c] && TEX[q.c] !== 'none') { const t = kit.el('g', { 'pointer-events': 'none' }, g); kit.transform(t, { r: q.r || 0 }); shapeEl(shapePath(q.s, r), t, q.c); }
          }
          if (q.n != null) kit.el('text', { x: 0, y: size * 0.12, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: '#3D352E' }, g).textContent = String(q.n);
          return;
        }
        const txt = q.t != null ? q.t : String(q.n);
        kit.el('text', { x: 0, y: 8, 'text-anchor': 'middle', 'font-size': numFont(txt, 18, 24), class: 'pk-text', fill: '#3D352E' }, g).textContent = txt;
      }
      function shapeEl(sh, parent, c) {
        const fill = `url(#${texId(c)})`;
        if (sh.type === 'circle') return kit.el('circle', { r: sh.r, fill, stroke: 'none' }, parent);
        if (sh.type === 'rect') return kit.el('rect', { x: -sh.w / 2, y: -sh.h / 2, width: sh.w, height: sh.h, rx: sh.rx, fill }, parent);
        if (sh.type === 'poly') return kit.el('polygon', { points: sh.points, fill }, parent);
        return kit.el('path', { d: sh.d, fill }, parent);
      }

      // ---- 칸(타일) ----
      const tiles = [];
      const TL = st.layer('tiles');
      for (let i = 0; i < slots; i++) {
        const [x, y] = posOf(i);
        const g = kit.el('g', null, TL);
        kit.transform(g, { x, y });
        const isBlank = mode === 'make' || (mode === 'fill' && seq[i] == null);
        const bg = kit.piece(st, g, { shape: { type: 'rect', w: TS, h: TS, rx: 12 }, color: isBlank ? 'cream' : 'cream', fill: isBlank ? '#FFFFFF' : '#FFFDF9', depth: isBlank ? 0 : 1 });
        if (isBlank) { bg.face.setAttribute('stroke', '#E69D7B'); bg.face.setAttribute('stroke-width', 2); bg.face.setAttribute('stroke-dasharray', '5 4'); }
        kit.el('rect', { x: -TS / 2 - 2, y: -TS / 2 - 2, width: TS + 4, height: TS + 4, class: 'pk-hit' }, g);
        const inner = kit.el('g', { 'pointer-events': 'none' }, g);
        const tag = kit.el('text', { x: 0, y: TS / 2 + 21, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#702830' }, g);
        const ring = kit.el('rect', { x: -TS / 2 - 4, y: -TS / 2 - 4, width: TS + 8, height: TS + 8, rx: 14, fill: 'none', stroke: '#473B6B', 'stroke-width': 3, display: 'none', 'pointer-events': 'none' }, g);
        const t = { g, inner, tag, ring, bg, isBlank, variants: [], num: null };
        tiles.push(t);
        if (!isBlank && seq[i]) drawPiece(inner, seq[i], TS);
        if (isBlank && !o.print) {
          if (numInput) t.num = kit.el('text', { x: 0, y: 8, 'text-anchor': 'middle', 'font-size': 24, class: 'pk-text', fill: '#204C5A' }, inner);
          else t.variants = palette.map((p) => { const v = kit.el('g', { display: 'none' }, inner); drawPiece(v, p, TS); return v; });
        }
      }

      let fill = blanksAt.map(() => null);      // fill: 팔레트 번호 또는 수
      let made = Array(mode === 'make' ? length : 0).fill(null);
      let pick = null; let sel = 0; let revealed = false;
      const log = () => kit.recorder.log('pattern', state());
      const valueAt = (slot) => (mode === 'make' ? made[slot] : fill[slot]);
      const pieceOf = (v) => (v == null ? null : numInput ? { n: v } : palette[v] || null);
      const editable = () => (mode === 'fill' ? blanksAt.length : mode === 'make' ? length : 0);
      const slotTile = (j) => (mode === 'fill' ? tiles[blanksAt[j]] : tiles[j]);
      function paint() {
        if (mode === 'fill' || mode === 'make') {
          for (let j = 0; j < editable(); j++) {
            const t = slotTile(j);
            showValue(t, valueAt(j));
            t.tag.textContent = mode === 'fill' ? names[j] || '' : '';
            t.ring.setAttribute('display', controls && j === sel ? 'inline' : 'none');
          }
        }
        if (mode === 'odd') tiles.forEach((t, i) => t.ring.setAttribute('display', pick === i ? 'inline' : 'none'));
        for (const [j, inp] of inputs.entries()) inp.value = valueAt(j) == null ? '' : String(valueAt(j));
        syncPalette();
      }
      function showValue(t, v) {
        if (t.num) { t.num.textContent = v == null ? '' : String(v); t.num.setAttribute('font-size', numFont(String(v == null ? '' : v), 24, 24)); }
        t.variants.forEach((g, k) => g.setAttribute('display', v === k ? 'inline' : 'none'));
      }
      function setSlot(j, v) {
        if (j == null || j < 0 || j >= editable()) return;
        if (mode === 'make') made[j] = v; else fill[j] = v;
        revealed = false; clearMarks(); paint(); log();
        kit.announce(v == null ? `${mode === 'fill' ? names[j] : j + 1}칸을 비웠어요` : `${mode === 'fill' ? `${names[j]} 칸` : `${j + 1}번째 칸`}: ${say(pieceOf(v))}`);
      }
      function nextEmpty(from) { for (let k = 1; k <= editable(); k++) { const j = (from + k) % editable(); if (valueAt(j) == null) return j; } return from; }
      function selectSlot(j) { sel = j; paint(); }

      // ---- 칸 조작(키보드·누르기) ----
      if (controls) tiles.forEach((t, i) => {
        if (mode === 'fill' || mode === 'make') {
          if (!t.isBlank) return;
          const j = mode === 'fill' ? blanksAt.indexOf(i) : i;
          t.g.setAttribute('tabindex', '0'); t.g.setAttribute('role', 'button');
          t.g.setAttribute('aria-label', mode === 'fill' ? `${names[j]} 빈칸` : `${j + 1}번째 칸`);
          t.g.addEventListener('click', () => selectSlot(j));
          t.g.addEventListener('focus', () => { sel = j; paint(); });
          t.g.addEventListener('keydown', (e) => {
            if (numInput && /^[0-9]$/.test(e.key)) { e.preventDefault(); const cur = valueAt(j) == null ? '' : String(valueAt(j)); setSlot(j, Number((cur + e.key).slice(-4))); return; }
            if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); setSlot(j, null); return; }
            const d = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key];
            if (d) {
              e.preventDefault();
              const cur = valueAt(j);
              if (numInput) setSlot(j, Math.max(0, (cur == null ? 0 : cur) + d));
              else if (palette.length) setSlot(j, cur == null ? (d > 0 ? 0 : palette.length - 1) : (cur + d + palette.length) % palette.length);
              return;
            }
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectSlot(j); }
          });
        } else if (mode === 'odd') {
          t.g.setAttribute('tabindex', '0'); t.g.setAttribute('role', 'radio'); t.g.setAttribute('aria-checked', 'false');
          t.g.setAttribute('aria-label', `${i + 1}번째 조각 ${say(seq[i])}`);
          const choose = () => { pick = i; tiles.forEach((x, k) => x.g.setAttribute('aria-checked', String(k === i))); clearMarks(); paint(); log(); kit.announce(`${i + 1}번째 조각을 골랐어요`); };
          t.g.addEventListener('click', choose);
          t.g.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(); return; }
            const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) return;
            e.preventDefault(); const k = (i + d + tiles.length) % tiles.length; tiles[k].g.focus(); pick = k; tiles.forEach((x, m) => x.g.setAttribute('aria-checked', String(m === k))); paint(); log();
          });
        }
      });

      // ---- 아래 칸: 팔레트·수 입력·보기 ----
      const panel = controls ? document.createElement('div') : null; if (panel) panel.className = 'pt-panel';
      const inputs = []; let palBtns = []; let setRule = null;
      function miniSvg(p) {
        const q = norm(p);
        if (!q.s) return `<span style="font-size:1.25em;font-weight:800">${String(q.t != null ? q.t : q.n).replace(/[<&]/g, '')}</span>`;
        const ns = 'http://www.w3.org/2000/svg';
        const svg = document.createElementNS(ns, 'svg'); svg.setAttribute('viewBox', '-24 -24 48 48'); svg.setAttribute('aria-hidden', 'true');
        const c = kit.colorOf(q.c);
        const add = (sh, x, y, r) => {
          let e;
          if (sh.type === 'circle') { e = document.createElementNS(ns, 'circle'); e.setAttribute('r', sh.r); }
          else if (sh.type === 'rect') { e = document.createElementNS(ns, 'rect'); e.setAttribute('x', -sh.w / 2); e.setAttribute('y', -sh.h / 2); e.setAttribute('width', sh.w); e.setAttribute('height', sh.h); e.setAttribute('rx', sh.rx); }
          else if (sh.type === 'poly') { e = document.createElementNS(ns, 'polygon'); e.setAttribute('points', sh.points); }
          else { e = document.createElementNS(ns, 'path'); e.setAttribute('d', sh.d); }
          e.setAttribute('fill', c.base); e.setAttribute('stroke', c.dark); e.setAttribute('stroke-width', '1.4');
          e.setAttribute('transform', `translate(${x} ${y}) rotate(${q.r || 0})`); svg.appendChild(e);
          void r;
        };
        if (q.k && q.k > 1) { const mc = Math.ceil(Math.sqrt(q.k)); const sp = 44 / (mc + 0.4); for (let j = 0; j < q.k; j++) add(shapePath(q.s, sp * 0.36), (j % mc - (mc - 1) / 2) * sp, (Math.floor(j / mc) - (Math.ceil(q.k / mc) - 1) / 2) * sp); }
        else add(shapePath(q.s, 15), 0, 0);
        return svg.outerHTML + (q.n != null ? `<span>${q.n}</span>` : '');
      }
      function syncPalette() {
        const cur = editable() ? valueAt(sel) : null;
        palBtns.forEach((b, k) => b.setAttribute('aria-pressed', String(cur === k)));
      }
      if (controls && (mode === 'fill' || mode === 'make')) {
        if (numInput) {
          const row = document.createElement('div'); row.className = 'pt-row';
          for (let j = 0; j < editable(); j++) {
            const lab = document.createElement('label'); lab.className = 'pt-lab';
            lab.append(mode === 'fill' ? `${names[j]}` : `${j + 1}`);
            const inp = document.createElement('input'); inp.className = 'pt-in'; inp.type = 'text'; inp.setAttribute('tabindex', '0');
            if (digits > 4) inp.style.width = `${(digits * 0.7 + 1.8).toFixed(1)}em`;
            inp.setAttribute('inputmode', 'numeric'); inp.setAttribute('autocomplete', 'off'); inp.setAttribute('aria-label', mode === 'fill' ? `${names[j]} 칸에 들어갈 수` : `${j + 1}번째 수`);
            inp.addEventListener('focus', () => { sel = j; paintRings(); });
            inp.addEventListener('input', () => { inp.value = inp.value.replace(/[^0-9]/g, '').slice(0, digits); const v = inp.value === '' ? null : Number(inp.value); if (mode === 'make') made[j] = v; else fill[j] = v; revealed = false; clearMarks(); showValue(slotTile(j), v); log(); });
            inp.addEventListener('keydown', (e) => { const d = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!d) return; e.preventDefault(); setSlot(j, Math.max(0, (valueAt(j) == null ? 0 : valueAt(j)) + d)); });
            lab.appendChild(inp); row.appendChild(lab); inputs.push(inp);
          }
          panel.appendChild(row);
        } else {
          const q = document.createElement('p'); q.className = 'pt-q'; q.textContent = mode === 'make' ? '조각을 누르면 고른 칸에 들어가요.' : '조각을 누르면 고른 빈칸에 들어가요.'; panel.appendChild(q);
          const row = document.createElement('div'); row.className = 'pt-row'; row.setAttribute('aria-label', '조각 고르기');
          palBtns = palette.map((p, k) => button(row, miniSvg(p), say(p), () => { const j = sel; setSlot(j, k); sel = nextEmpty(j); paint(); }));
          button(row, '<i class="fi fi-rr-eraser" aria-hidden="true"></i>지우기', '고른 칸 지우기', () => setSlot(sel, null));
          if (mode === 'make') button(row, '<i class="fi fi-rr-refresh" aria-hidden="true"></i>모두 지우기', '모든 칸 지우기', () => { made = made.map(() => null); sel = 0; revealed = false; clearMarks(); paint(); log(); });
          panel.appendChild(row);
        }
      }
      function paintRings() { for (let j = 0; j < editable(); j++) slotTile(j).ring.setAttribute('display', j === sel ? 'inline' : 'none'); }
      if (controls && mode === 'rule') {
        const q = document.createElement('p'); q.className = 'pt-q'; q.textContent = o.question || '어떤 규칙으로 늘어놓았나요?'; panel.appendChild(q);
        const row = document.createElement('div'); row.className = 'pt-picks'; row.setAttribute('role', 'radiogroup'); row.setAttribute('aria-label', q.textContent);
        const btns = (o.choices || []).map((c, k) => { const b = button(row, '', null, () => { pick = k; setRule(k); log(); kit.announce(String(c)); }, 'pk-choice'); b.textContent = String(c); b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false'); return b; });
        setRule = (k) => btns.forEach((b, i) => b.setAttribute('aria-checked', String(i === k)));
        panel.appendChild(row);
      }
      if (controls && mode === 'odd') { const q = document.createElement('p'); q.className = 'pt-q'; q.textContent = o.question || '규칙에 맞지 않는 조각을 눌러 고르세요.'; panel.appendChild(q); }
      if (panel && panel.childNodes.length) box.appendChild(panel);

      function clearMarks() { tiles.forEach((t) => t.g.classList.remove('pk-ok', 'pk-no')); }
      function state() {
        if (mode === 'fill') return { fill: fill.slice() };
        if (mode === 'make') return { seq: made.slice() };
        return { pick };
      }
      const cleanV = (v) => (v == null || v === '' || !Number.isFinite(Number(v)) ? null : (numInput ? Number(v) : (Number(v) >= 0 && Number(v) < palette.length ? Math.round(Number(v)) : null)));
      function setState(s) {
        s = s || {};
        if (mode === 'fill') fill = blanksAt.map((_, j) => cleanV(Array.isArray(s.fill) ? s.fill[j] : null));
        else if (mode === 'make') made = made.map((_, j) => cleanV(Array.isArray(s.seq) ? s.seq[j] : null));
        else {
          pick = Number.isInteger(s.pick) ? s.pick : null;
          if (setRule) setRule(pick);
          if (mode === 'odd') tiles.forEach((x, k) => x.g.setAttribute('aria-checked', String(k === pick)));
        }
        if (editable()) sel = Math.max(0, Math.min(editable() - 1, valueAt(0) == null ? 0 : nextEmpty(0)));
        revealed = false; clearMarks(); paint();
      }
      setState({});

      // ---- 규칙 알아내기(힌트·풀이용) ----
      const fullSeq = (t) => { const out = seq.slice(); if (mode === 'fill' && t && Array.isArray(t.fill)) blanksAt.forEach((i, j) => { out[i] = norm(t.fill[j]); }); return out; };
      function periodOf(arr) {
        const ks = arr.map(keyOf);
        for (let p = 1; p <= Math.floor(ks.length / 2) + 1 && p < ks.length; p++) { let ok = true; for (let i = p; i < ks.length; i++) if (ks[i] !== ks[i - p]) { ok = false; break; } if (ok) return p; }
        return 0;
      }
      function numRule(arr) {
        const v = arr.map((p) => (p && p.n != null ? p.n : null));
        if (v.some((x) => x == null) || v.length < 3) return null;
        const d = v.slice(1).map((x, i) => x - v[i]);
        if (d.every((x) => x === d[0])) return d[0] >= 0 ? `앞의 수에 ${d[0]}씩 더해요.` : `앞의 수에서 ${-d[0]}씩 빼요.`;
        const r = v.slice(1).map((x, i) => (v[i] ? x / v[i] : NaN));
        if (r.every((x) => Math.abs(x - r[0]) < 1e-9) && Number.isInteger(r[0])) return `앞의 수에 ${r[0]}씩 곱해요.`;
        const dd = d.slice(1).map((x, i) => x - d[i]);
        if (dd.every((x) => x === dd[0])) return `더하는 수가 ${dd[0]}씩 커져요(${d.slice(0, 3).join(', ')}…).`;
        return null;
      }
      function ruleText(t) {
        const full = fullSeq(t);
        const nr = numRule(full); if (nr) return nr;
        const p = periodOf(full);
        if (p >= 2) return `${jo(full.slice(0, p).map(say).join(', '), '이', '가')} 차례로 되풀이돼요.`;
        return '앞의 조각들과 견주어 무엇이 바뀌는지 찾아요.';
      }

      function judge(t) {
        t = t || {};
        if (mode === 'fill') {
          const want = (t.fill || []).map(norm);
          const empty = fill.findIndex((v) => v == null);
          if (empty >= 0) return { correct: false, incomplete: true, feedback: `${names[empty]} 칸을 채워요.` };
          const bad = [];
          for (let j = 0; j < want.length; j++) if (keyOf(pieceOf(fill[j])) !== keyOf(want[j])) bad.push(j);
          if (!bad.length) return { correct: true, feedback: '맞아요! 규칙에 맞게 빈칸을 채웠어요.' };
          const j = bad[0]; const i = blanksAt[j]; const got = pieceOf(fill[j]);
          const prev = i > 0 ? seq[i - 1] || pieceOf(fill[j - 1]) : null;
          let why = '규칙과 달라요.';
          if (got && got.n != null && want[j] && want[j].n != null) why = got.n > want[j].n ? '규칙보다 큰 수예요. 얼마씩 변하는지 다시 보세요.' : '규칙보다 작은 수예요. 얼마씩 변하는지 다시 보세요.';
          else if (prev && keyOf(prev) === keyOf(got)) why = '바로 앞 조각을 그대로 따라 했어요. 몇 개씩 되풀이되는지 묶어 보세요.';
          const fb = o.revealAfterCheck ? `규칙과 다른 빈칸이 ${bad.length}개 있어요.` : `${names[j]} 칸이 ${why}`;
          return { correct: false, bad: bad.map((x) => blanksAt[x]), feedback: fb, hint: `${names[j]} 칸 바로 앞의 조각들을 되풀이되는 묶음으로 끊어 읽어 보세요.`, h3: `${ruleText(t)} ${names[j]} 칸에 들어갈 것: ${say(want[j])}` };
        }
        if (mode === 'make') {
          const empty = made.findIndex((v) => v == null);
          if (empty >= 0) return { correct: false, incomplete: true, feedback: `칸을 모두 채워요. 아직 ${made.filter((v) => v == null).length}칸이 비었어요.` };
          const arr = made.map(pieceOf);
          if (t.rule === 'add' || t.rule === 'mul') {
            const v = arr.map((p) => p.n);
            const d = v.slice(1).map((x, i) => (t.rule === 'add' ? x - v[i] : x / v[i]));
            const ok = d.every((x) => x === d[0]) && (t.rule === 'add' ? d[0] !== 0 : d[0] !== 1) && (t.step == null || d[0] === t.step);
            if (!ok) {
              const at = d.findIndex((x) => x !== d[0]);
              return { correct: false, feedback: at >= 0 ? `${at + 2}번째 수에서 규칙이 바뀌었어요. 한 칸 갈 때마다 늘 같은 수만큼 변해야 해요.` : t.step != null ? '문제에서 정한 수만큼 변하게 만들어요.' : '수가 변하지 않아요. 일정하게 커지거나 작아지게 만들어요.', hint: '이웃한 두 수의 차이를 차례로 적어 보세요. 모두 같아야 해요.', h3: t.step != null ? `한 칸 갈 때마다 ${t.step}씩 ${t.rule === 'add' ? '더해요' : '곱해요'}.` : '예: 2, 4, 6, 8처럼 같은 수씩 더해요.' };
            }
            return { correct: true, feedback: `맞아요! ${t.rule === 'add' ? `${d[0]}씩 ${d[0] > 0 ? '커지는' : '작아지는'}` : `${d[0]}씩 곱하는`} 규칙을 만들었어요.` };
          }
          if (t.rule === 'core') {
            const core = (t.core || []).map(norm);
            const bad = arr.findIndex((p, i) => keyOf(p) !== keyOf(core[i % core.length]));
            if (bad >= 0) return { correct: false, feedback: `${bad + 1}번째 칸이 정한 묶음과 달라요.`, hint: '정한 묶음을 처음부터 끝까지 차례로 되풀이해요.', h3: `${jo(core.map(say).join(', '), '을', '를')} 차례로 되풀이해요.` };
            return { correct: true, feedback: '맞아요! 정한 묶음을 되풀이했어요.' };
          }
          const p = periodOf(arr); const minR = t.minRepeats || 2;
          if (!p || p < 2) return { correct: false, feedback: p === 1 ? '모두 같은 조각이에요. 두 가지 이상을 차례로 되풀이해요.' : '되풀이되는 묶음이 보이지 않아요. 앞의 묶음을 그대로 다시 놓아요.', hint: '처음 몇 개를 한 묶음으로 정하고, 그 묶음을 똑같이 되풀이해요.', h3: '예: ○, △, ○, △처럼 같은 묶음을 차례로 되풀이해요.' };
          if (t.period && p !== t.period) return { correct: false, feedback: '묶음의 길이가 문제와 달라요. 몇 개씩 되풀이하는지 다시 읽어 보세요.', hint: '한 묶음에 들어가는 조각 수를 세어 보세요.', h3: `${t.period}개를 한 묶음으로 해서 되풀이해요.` };
          if (arr.length < p * minR) return { correct: false, feedback: '묶음이 두 번 이상 되풀이되게 칸을 채워요.', hint: '묶음 하나를 다 놓은 뒤 처음부터 다시 놓아요.' };
          if (t.uses && new Set(arr.map(keyOf)).size < t.uses) return { correct: false, feedback: '조각을 더 여러 가지 써 보세요.', hint: '묶음 안에 서로 다른 조각을 넣어요.' };
          return { correct: true, feedback: `맞아요! ${p}개씩 되풀이되는 규칙을 만들었어요.` };
        }
        if (mode === 'odd') {
          if (pick == null) return { correct: false, incomplete: true, feedback: '규칙에 맞지 않는 조각을 하나 골라요.' };
          if (pick !== t.odd) return { correct: false, feedback: '그 조각은 규칙에 맞아요. 되풀이되는 묶음과 하나씩 견주어 보세요.', hint: `${pick + 1}번째 조각의 앞과 뒤를 함께 보세요. 규칙이 그 자리에서도 이어지나요?`, h3: `${t.odd + 1}번째 조각이 규칙과 달라요.` };
          return { correct: true, feedback: `맞아요! ${t.odd + 1}번째 조각이 규칙에 맞지 않아요.` };
        }
        // rule
        if (pick == null) return { correct: false, incomplete: true, feedback: '아래에서 규칙을 하나 골라요.' };
        if (pick !== t.pick) return { correct: false, feedback: (o.why && o.why[pick]) || '그 규칙으로는 줄의 몇 조각이 맞지 않아요. 처음부터 하나씩 견주어 보세요.', hint: '고른 규칙대로 처음부터 조각을 하나씩 짚어 보세요. 맞지 않는 곳이 있나요?', h3: `규칙: ${ruleText(t)}` };
        return { correct: true, feedback: '맞아요! 규칙을 찾았어요.' };
      }
      function strategy(t) {
        if (mode === 'make') return t && (t.rule === 'add' || t.rule === 'mul') ? '첫 수를 정하고, 한 칸 갈 때마다 늘 같은 수만큼 변하게 만들어요.' : '처음 몇 조각을 한 묶음으로 정하고, 그 묶음을 똑같이 되풀이해요.';
        if (allNum) return '이웃한 두 수가 얼마씩 커지거나 작아지는지 차례로 살펴보아요.';
        return '앞에서부터 조각을 몇 개씩 끊어 읽으며 되풀이되는 묶음을 찾아요. 색과 모양을 따로 보아도 좋아요.';
      }
      // 팔레트에서 그 조각의 번호(없으면 -1)
      const palIndex = (p) => palette.findIndex((q) => keyOf(q) === keyOf(p));

      const api = {
        getState: state,
        setState,
        reset() { setState({}); },
        check(t, opts) {
          const r = judge(t); const bad = r.bad; delete r.bad; delete r.h3;
          if (!(opts && opts.forHint)) {
            clearMarks();
            if (r.correct) { revealed = true; kit.tick('ok'); (mode === 'odd' ? [tiles[pick]] : tiles.filter((x) => x.isBlank)).forEach((x) => x && x.g.classList.add('pk-ok')); }
            else if (!r.incomplete && !o.revealAfterCheck && bad) bad.forEach((i) => tiles[i].g.classList.add('pk-no'));
          }
          return r;
        },
        solve(t) {
          t = t || {};
          if (mode === 'fill') setState({ fill: (t.fill || []).map((p) => (numInput ? norm(p).n : palIndex(p))) });
          else if (mode === 'make') {
            if (t.rule === 'add' || t.rule === 'mul') { const a = o.start != null ? o.start : 1; const d = t.step != null ? t.step : 2; setState({ seq: made.map((_, i) => (t.rule === 'add' ? a + i * d : a * d ** i)) }); }
            else if (t.rule === 'core') setState({ seq: made.map((_, i) => palIndex((t.core || [])[i % (t.core || []).length])) });
            else {
              const want = t.period || Math.max(2, Math.min(3, t.uses || 2)); const L = palette.length;
              if (L >= want || !t.period) { const p = Math.min(L, want); setState({ seq: made.map((_, i) => i % p) }); }
              else {
                // 조각 수(L)가 묶음 길이(period)보다 적으면 같은 조각을 묶음 안에 되풀이해 그 길이의 묶음을 만든다(조각 3개로 4박 묶음: 0 1 2 0)
                const N = Math.max(made.length, want * 2);
                const minP = (c) => { const sq = Array.from({ length: N }, (_, i) => c[i % want]); for (let q = 1; q < want; q++) if (sq.every((v, i) => v === sq[i % q])) return q; return want; };
                const cands = [Array.from({ length: want }, (_, i) => i % L), Array.from({ length: want }, (_, i) => Math.floor((i * L) / want)), Array.from({ length: want }, (_, i) => (i === want - 1 ? Math.min(1, L - 1) : 0))];
                const uses = (c) => new Set(c).size;
                const core = cands.find((c) => minP(c) === want && (!t.uses || uses(c) === t.uses)) || cands.find((c) => minP(c) === want) || cands[0];
                setState({ seq: made.map((_, i) => core[i % want]) });
              }
            }
          } else if (mode === 'odd') setState({ pick: t.odd });
          else setState({ pick: t.pick });
        },
        hint(t, opts) {
          const r = judge(t || {}); const lv = hintLevel(opts);
          if (r.correct) return { hint: strategy(t), correct: true, level: 1 };
          if (lv === 1 || r.incomplete || !r.hint) return { hint: strategy(t), correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        // 흔한 실수: 바로 앞 조각을 따라 한다 · 수 규칙에서 한 번 더/덜 더한다 · 묶음이 중간에 끊긴다
        wrongAnswer(t) {
          t = t || {};
          if (mode === 'fill') {
            const want = (t.fill || []).map(norm); if (!want.length) return null;
            const s = want.map((p) => (numInput ? p.n : palIndex(p)));
            if (numInput) { s[0] = want[0].n + 1; return { fill: s }; }
            const i = blanksAt[0]; const prev = i > 0 ? seq[i - 1] : null;
            let k = prev ? palIndex(prev) : -1;
            if (k < 0 || keyOf(palette[k]) === keyOf(want[0])) k = palette.findIndex((q) => keyOf(q) !== keyOf(want[0]));
            if (k < 0) return null;
            s[0] = k; return { fill: s };
          }
          if (mode === 'make') {
            api.solve(t); const s = state().seq.slice();
            if (numInput) { s[s.length - 1] += 1; return { seq: s }; }
            const last = s.length - 1; const alt = palette.findIndex((_, k) => k !== s[last] && k !== s[last - 1]);
            s[last] = alt >= 0 ? alt : (s[last] + 1) % palette.length;
            if (palette.length < 2) return null;
            return { seq: s };
          }
          if (mode === 'odd') return { pick: ((t.odd || 0) + 1) % Math.max(1, seq.length) };
          const n = (o.choices || []).length; if (n < 2) return null;
          return { pick: ((t.pick || 0) + 1) % n };
        },
        distance(a, b) {
          a = a || {}; b = b || {};
          const one = (x, y) => (x === y ? 0 : x == null || y == null ? 1 : numInput ? Math.abs(x - y) : 1);
          if (mode === 'fill' || mode === 'make') { const A = a.fill || a.seq || []; const B = b.fill || b.seq || []; let d = 0; for (let i = 0; i < Math.max(A.length, B.length); i++) d += one(A[i], B[i]); return d; }
          return a.pick === b.pick ? 0 : 1;
        },
        async demo(t) {
          if (mode === 'fill' && t) { const want = (t.fill || []); for (let j = 0; j < want.length; j++) { await kit.wait(500); setSlot(j, numInput ? norm(want[j]).n : palIndex(want[j])); } return; }
          if (t) api.solve(t);
        },
      };
      return api;
    },
  });
})(window.PaperKit);
