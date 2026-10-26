/* 종이 전기 회로판 — 점(집게)과 점 사이 칸마다 전지·전구·스위치·도선·전자석 조각을 놓아 회로를 잇는다.
 * 회로는 작은 계산기로 푼다(전지 1개 = 1, 전구·전자석 = 저항 1). 그래서 직렬·병렬, 전지 방향, 합선, 스위치, 전자석 세기가 실제처럼 나온다.
 *
 * 칸 이름: 가로 칸 'h<열>-<행>'(점 (열,행)–(열+1,행)), 세로 칸 'v<열>-<행>'(점 (열,행)–(열,행+1)). 왼쪽 위 점이 (0,0).
 * 조각 코드: 'wire' 도선, 'bulb' 전구, 'bat+'(+극이 오른쪽/아래), 'bat-'(+극이 왼쪽/위), 'sw0' 열린 스위치, 'sw1' 닫힌 스위치, 'coil' 전자석(못에 감은 에나멜선)
 *
 * 상태   { parts: { 'h0-0': 'wire', 'v0-0': 'bat-', … }, pick?: 번호|null }
 * target (모두 함께 쓸 수 있다 — 적은 것만 본다)
 *   lit: 'all'(놓은 전구가 모두 켜짐, 1개 이상) | 수(켜진 전구 수, 0이면 모두 꺼짐)
 *   bulbs: 수(놓은 전구 수) · batteries: 수(놓은 전지 수) · connection: 'series'|'parallel'(전구 잇는 방법)
 *   batteryLink: 'series'|'parallel'(전지 잇는 방법) · switch: 'open'|'closed'(스위치가 있고 그 상태)
 *   magnet: true|false(전자석에 전기가 흐름) · strong: true(전지 2개 이상을 직렬로 — 클립이 더 많이 붙음) · coilN: 'left'|'right'|'top'|'bottom'(N극 쪽)
 *   solution: { 칸: 코드 }(선택 — solve가 이 회로를 그대로 놓는다. 없으면 둘레 고리·사다리 꼴에서 찾는다) · pick(ask 보기)
 * 옵션
 *   grid [열 점 수, 행 점 수](기본 [4,3]) · parts(조각함 차례, 기본 ['wire','bulb','battery','switch'], 'coil' 더하기)
 *   stock { bulb: 3, battery: 2, switch: 1, coil: 1 }(놓을 수 있는 개수, 도선은 끝없음)
 *   lock: true(시작 상태의 조각은 고정, 연보라 바탕으로 보임 — 스위치는 여닫을 수 있음) | ['칸', …] · readout(켜진 전구 수·클립 수 글자)
 *   glow(전구 빛, 기본 참) · revealAfterCheck(전구 빛·클립·N/S는 맞힌 확인 뒤에만) · ask { q, choices[], why?[] } · readOnly · print
 * 조작: 조각함에서 조각을 고른 뒤 칸을 누른다. 같은 조각을 다시 누르면 빠진다(전지는 방향이 바뀐다). 스위치는 누를 때마다 열고 닫는다. 지우개로 뺀다.
 * 키보드: 칸마다 Tab, Enter/Space = 고른 조각 놓기, ↑/↓ = 이 칸의 조각을 차례로 바꾸기. 조각함은 교구 아래 단추.
 * solve가 찾을 수 있도록 고정(lock) 조각은 판 둘레 칸(직렬)이나 왼쪽 세로줄(병렬의 전지)에 둔다. 그 밖이면 target.solution을 적는다.
 * 예) 불 켜기: options:{ lock:true }, state:{ parts:{ 'v0-0':'bat-', 'h1-0':'bulb' } }, target:{ lit:'all' }
 *     병렬: options:{ grid:[4,2] }, target:{ lit:'all', bulbs:2, connection:'parallel' }
 *     전자석: options:{ parts:['wire','battery','coil','switch'] }, target:{ magnet:true, strong:true }
 */
(function (K) {
  'use strict';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    return Math.max(1, Math.min(3, want, a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1));
  };
  const CODES = ['wire', 'bulb', 'bat+', 'bat-', 'sw0', 'sw1', 'coil'];
  const typeOf = (c) => (c === 'bat+' || c === 'bat-' ? 'battery' : c === 'sw0' || c === 'sw1' ? 'switch' : c);
  const PART_NAME = { wire: '도선', bulb: '전구', battery: '전지', switch: '스위치', coil: '전자석', eraser: '지우개' };
  const PART_ICON = { wire: 'fi-rr-minus', bulb: 'fi-rr-bulb', battery: 'fi-rr-battery-full', switch: 'fi-rr-toggle-on', coil: 'fi-rr-magnet', eraser: 'fi-rr-eraser' };
  const EMF = 1; const RINT = 0.05; const LIT = 0.15; const SHORT = 4;

  // ---- 회로 풀기: 도선·닫힌 스위치로 이어진 점을 하나로 묶고(union-find), 전지는 노턴 등가(전류원 + 내부 저항)로 놓아 마디 전압을 푼다 ----
  function analyze(parts, cols, rows, opts) {
    const N = cols * rows; const id = (c, r) => r * cols + c;
    const ends = (k) => { const m = /^([hv])(\d+)-(\d+)$/.exec(k); if (!m) return null; const c = +m[2]; const r = +m[3]; return m[1] === 'h' ? [id(c, r), id(c + 1, r)] : [id(c, r), id(c, r + 1)]; };
    const off = (opts && opts.off) || null;
    const par = Array.from({ length: N }, (_, i) => i); const find = (x) => (par[x] === x ? x : (par[x] = find(par[x])));
    const els = [];
    for (const [k, code] of Object.entries(parts)) {
      const e = ends(k); if (!e || !code || k === off) continue;
      if (code === 'wire' || code === 'sw1') par[find(e[0])] = find(e[1]);
      else if (code === 'bulb' || code === 'coil' || code === 'bat+' || code === 'bat-') els.push({ k, code, a: e[0], b: e[1] });
    }
    const roots = [...new Set(Array.from({ length: N }, (_, i) => find(i)))]; const idx = new Map(roots.map((r, i) => [r, i]));
    const n = roots.length; const G = Array.from({ length: n }, () => new Float64Array(n + 1));
    const stamp = (a, b, g) => { G[a][a] += g; G[b][b] += g; G[a][b] -= g; G[b][a] -= g; };
    for (const e of els) {
      const a = idx.get(find(e.a)); const b = idx.get(find(e.b)); e.na = a; e.nb = b;
      if (a === b) continue;
      if (e.code === 'bulb' || e.code === 'coil') stamp(a, b, 1);
      else { stamp(a, b, 1 / RINT); const plus = e.code === 'bat+' ? b : a; const minus = e.code === 'bat+' ? a : b; G[plus][n] += EMF / RINT; G[minus][n] -= EMF / RINT; }
    }
    for (let i = 0; i < n; i++) G[i][i] += 1e-7;
    // 가우스 소거
    for (let c = 0; c < n; c++) {
      let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(G[r][c]) > Math.abs(G[p][c])) p = r;
      [G[c], G[p]] = [G[p], G[c]];
      const d = G[c][c] || 1e-12;
      for (let r = 0; r < n; r++) { if (r === c) continue; const f = G[r][c] / d; if (!f) continue; for (let k = c; k <= n; k++) G[r][k] -= f * G[c][k]; }
    }
    const V = G.map((row, i) => row[n] / (row[i] || 1e-12));
    const cur = {}; let short = false; const batI = {};
    for (const e of els) {
      const dv = V[e.na] - V[e.nb];
      if (e.code === 'bulb' || e.code === 'coil') cur[e.k] = e.na === e.nb ? 0 : dv; // a→b 방향 +
      else { const vpm = e.code === 'bat+' ? -dv : dv; const i = e.na === e.nb ? EMF / RINT : (EMF - vpm) / RINT; batI[e.k] = i; if (Math.abs(i) > SHORT) short = true; }
    }
    return { cur, short, batI };
  }

  K.registerTool('circuit', {
    name: '전기 회로판',
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print; const ink = print ? '#000' : '#3D352E';
      const [COLS, ROWS] = Array.isArray(o.grid) && o.grid.length === 2 ? o.grid.map((v) => Math.max(2, Math.min(6, Math.round(v)))) : [4, 3];
      const palette = (Array.isArray(o.parts) && o.parts.length ? o.parts : ['wire', 'bulb', 'battery', 'switch']).filter((p) => PART_NAME[p] && p !== 'eraser');
      const stock = Object.assign({ bulb: 3, battery: 2, switch: 1, coil: 1, wire: 99 }, o.stock || {});
      const readOnly = !!o.readOnly;
      const S = Math.min(150, Math.floor(480 / Math.max(1, COLS - 1)), Math.floor(300 / Math.max(1, ROWS - 1)));
      const X0 = 40 + (480 - S * (COLS - 1)) / 2; const Y0 = 74;
      // 칸이 넓으면 부품도 키운다(도선 끝은 늘 점에 닿는다)
      const KS = Math.max(1, Math.min(1.5, S / 110));
      const W = 560; const H = Y0 + S * (ROWS - 1) + 70;
      const st = kit.stage(box, { viewBox: [W, H], label: '전기 회로판. 점과 점 사이 칸에 부품을 놓아 회로를 이어요.' });
      const nodeXY = (c, r) => ({ x: X0 + c * S, y: Y0 + r * S });
      const keys = []; for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) { if (c + 1 < COLS) keys.push(`h${c}-${r}`); if (r + 1 < ROWS) keys.push(`v${c}-${r}`); }
      const geo = (k) => { const m = /^([hv])(\d+)-(\d+)$/.exec(k); const c = +m[2]; const r = +m[3]; const a = nodeXY(c, r); const vert = m[1] === 'v'; return { vert, mx: a.x + (vert ? 0 : S / 2), my: a.y + (vert ? S / 2 : 0), c, r }; };
      // 조각 안쪽 좌표(가로로 놓인 꼴) → 무대 좌표
      const toW = (g, lx, ly) => (g.vert ? { x: g.mx - ly, y: g.my + lx } : { x: g.mx + lx, y: g.my + ly });

      // 바탕 판
      const base = st.layer('board');
      kit.piece(st, base, { shape: { type: 'rect', x: 12, y: 12, w: W - 24, h: H - 24, rx: 18 }, color: 'sky', depth: 2, fill: print ? '#FFFFFF' : '#EDF7FA', texture: !print });
      let parts = {}; let locked = new Set(); let lockAll = o.lock === true; let tool = palette[0] || 'wire'; let pick = null; let revealed = false; let target = null; let firstSet = true;
      if (Array.isArray(o.lock)) o.lock.forEach((k) => locked.add(k));
      const edgeL = st.layer('edges'); const labelL = st.layer('labels'); labelL.setAttribute('pointer-events', 'none');
      const slots = {};
      keys.forEach((k) => {
        const g = geo(k);
        const sg = kit.el('g', { class: 'cc-slot', tabindex: print || readOnly ? null : 0, role: print ? null : 'button' }, edgeL);
        const inner = kit.el('g', null, sg);
        kit.transform(inner, { x: g.mx, y: g.my, r: g.vert ? 90 : 0, cx: 0, cy: 0 });
        kit.el('rect', { x: -S / 2 + 12, y: -36, width: S - 24, height: 72, class: 'pk-hit' }, inner);
        const art = kit.el('g', { transform: `scale(${KS})` }, inner);
        slots[k] = { sg, art, g };
        if (!print && !readOnly) {
          sg.addEventListener('click', () => act(k));
          sg.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(k); }
            else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); cycle(k, e.key === 'ArrowUp' ? 1 : -1); }
          });
        }
      });
      // 집게(점)는 칸 위에
      const nodeL = st.layer('nodes'); nodeL.setAttribute('pointer-events', 'none');
      for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) { const p = nodeXY(c, r); kit.el('circle', { cx: p.x, cy: p.y, r: 7, fill: print ? '#FFFFFF' : '#C3952A', stroke: ink, 'stroke-width': 1.5 }, nodeL); }
      const readT = o.readout && !print ? kit.el('text', { x: W - 26, y: H - 22, 'text-anchor': 'end', 'font-size': 16, class: 'pk-text', fill: ink }, st.layer('readout')) : null;

      // ---- 조각 그리기 ----
      let res = { cur: {}, short: false, batI: {} };
      const live = () => !print && o.glow !== false && !(o.revealAfterCheck && !revealed);
      function drawSlot(k) {
        const s = slots[k]; const code = parts[k]; const g = s.g; const a = s.art; a.textContent = ''; const isLocked = locked.has(k);
        const L = S / 2 / KS; const tw = (lx, ly) => toW(g, lx * KS, ly * KS); const lead = (x1, x2) => kit.el('line', { x1, y1: 0, x2, y2: 0, stroke: print ? '#000' : '#6E3B21', 'stroke-width': 5 / KS, 'stroke-linecap': 'round' }, a);
        if (code && isLocked && !print) kit.el('rect', { x: -L + 14, y: -17, width: 2 * L - 28, height: 34, rx: 12, fill: '#DCD3F0', opacity: 0.5, class: 'cc-locked' }, a);
        if (!code) { kit.el('line', { x1: -L + 14, y1: 0, x2: L - 14, y2: 0, stroke: print ? '#999' : 'rgba(32,76,90,0.35)', 'stroke-width': 2, 'stroke-dasharray': '6 7' }, a); s.sg.setAttribute('aria-label', `${label(k)} 빈칸. ${PART_NAME[tool]}을 놓으려면 Enter.`); return; }
        if (code === 'wire') lead(-L, L);
        else if (code === 'bulb') {
          lead(-L, -16); lead(16, L);
          const on = live() && Math.abs(res.cur[k] || 0) > LIT && !res.short;
          if (on) kit.el('circle', { cx: 0, cy: -10, r: 34, fill: '#FEE396', opacity: Math.min(0.95, 0.35 + Math.abs(res.cur[k]) * 0.6), class: 'cc-glow' }, a);
          kit.piece(st, a, { shape: { type: 'rect', x: -10, y: -4, w: 20, h: 12, rx: 3 }, color: 'lavender', depth: 1 });
          kit.piece(st, a, { shape: { type: 'circle', r: 16, cy: -16 }, color: on ? 'buttercup' : 'cream', depth: 1, fill: on ? '#FFF3B8' : '#FFFFFF' });
          kit.el('path', { d: 'M-6 -4 L-6 -16 Q0 -24 6 -16 L6 -4', fill: 'none', stroke: on ? '#C3952A' : '#8A7F72', 'stroke-width': 1.8 }, a);
          kit.el('line', { x1: -16, y1: 0, x2: 16, y2: 0, stroke: print ? '#000' : '#6E3B21', 'stroke-width': 3 }, a);
        } else if (code === 'bat+' || code === 'bat-') {
          const plusRight = code === 'bat+'; lead(-L, -30); lead(30, L);
          kit.piece(st, a, { shape: { type: 'rect', x: -30, y: -14, w: 60, h: 28, rx: 6 }, color: 'peach', depth: 1 });
          kit.piece(st, a, { shape: { type: 'rect', x: plusRight ? 6 : -30, y: -14, w: 24, h: 28, rx: 6 }, color: 'rose', depth: 0 });
          kit.el('rect', { x: plusRight ? 30 : -35, y: -6, width: 5, height: 12, rx: 1.5, fill: ink }, a);
          const pp = tw(plusRight ? 18 : -18, -26); const mp = tw(plusRight ? -18 : 18, -26);
          if (g.vert) { pp.x = g.mx + 30 * KS; mp.x = g.mx + 30 * KS; }
          kit.el('text', { x: pp.x, y: pp.y + 6, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: ink }, labelL).textContent = '+';
          kit.el('text', { x: mp.x, y: mp.y + 6, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: ink }, labelL).textContent = '−';
        } else if (code === 'sw0' || code === 'sw1') {
          lead(-L, -18); lead(18, L);
          kit.el('circle', { cx: -18, cy: 0, r: 5, fill: ink }, a); kit.el('circle', { cx: 18, cy: 0, r: 5, fill: ink }, a);
          kit.el('line', { x1: -18, y1: 0, x2: code === 'sw1' ? 18 : 12, y2: code === 'sw1' ? -2 : -20, stroke: print ? '#000' : '#473B6B', 'stroke-width': 5, 'stroke-linecap': 'round' }, a);
          const tp = tw(0, 30); if (g.vert) tp.x = g.mx + 34 * KS;
          kit.el('text', { x: tp.x, y: tp.y + 5, 'text-anchor': g.vert ? 'start' : 'middle', 'font-size': 12, class: 'pk-text', fill: ink }, labelL).textContent = code === 'sw1' ? '닫힘' : '열림';
        } else if (code === 'coil') {
          lead(-L, -32); lead(32, L);
          kit.piece(st, a, { shape: { type: 'rect', x: -40, y: -5, w: 80, h: 10, rx: 2 }, color: 'cream', depth: 1, fill: '#B8B2AA' });
          for (let i = -26; i <= 26; i += 7) kit.el('ellipse', { cx: i, cy: 0, rx: 3, ry: 10, fill: 'none', stroke: print ? '#000' : '#B8463D', 'stroke-width': 2 }, a);
          const I = res.cur[k] || 0; const on = live() && Math.abs(I) > LIT && !res.short;
          if (on) {
            const n = Math.min(8, Math.max(1, Math.round(Math.abs(I) * 4)));
            for (let i = 0; i < n; i++) { const cx = -36 + (i % 4) * 24 + (i >= 4 ? 12 : 0); const cy = 18 + (i >= 4 ? 12 : 0); kit.el('rect', { x: cx - 7, y: cy - 4, width: 14, height: 8, rx: 4, fill: 'none', stroke: '#5E9BD6', 'stroke-width': 2 }, a); }
            // N극: 전류가 a→b로 흐르면 b 쪽(오른쪽/아래)이 N
            const nAtB = I > 0; const np = tw(nAtB ? 46 : -46, -16); const sp = tw(nAtB ? -46 : 46, -16);
            kit.el('text', { x: np.x, y: np.y + 5, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#B8463D' }, labelL).textContent = 'N';
            kit.el('text', { x: sp.x, y: sp.y + 5, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#3F74A8' }, labelL).textContent = 'S';
          }
        }
        s.sg.setAttribute('aria-label', `${label(k)}: ${codeName(code)}${isLocked ? '(고정)' : ''}.`);
      }
      const label = (k) => { const g = geo(k); return g.vert ? `${g.c + 1}째 세로줄 ${g.r + 1}째 칸` : `${g.r + 1}째 가로줄 ${g.c + 1}째 칸`; };
      const codeName = (c) => (c === 'bat+' || c === 'bat-' ? `전지(+극 ${geo2(c)})` : c === 'sw0' ? '열린 스위치' : c === 'sw1' ? '닫힌 스위치' : PART_NAME[c]);
      const geo2 = (c) => (c === 'bat+' ? '오른쪽·아래' : '왼쪽·위');
      function paint() {
        res = analyze(parts, COLS, ROWS);
        labelL.textContent = '';
        keys.forEach(drawSlot);
        if (readT) {
          if (!(o.revealAfterCheck && !revealed)) { const lit = Object.keys(parts).filter((k) => parts[k] === 'bulb' && Math.abs(res.cur[k] || 0) > LIT && !res.short).length; const coil = Object.keys(parts).find((k) => parts[k] === 'coil'); readT.textContent = res.short ? '합선!' : `켜진 전구 ${lit}개${coil ? ` · 클립 ${Math.abs(res.cur[coil] || 0) > LIT ? Math.min(8, Math.round(Math.abs(res.cur[coil]) * 4)) : 0}개` : ''}`; }
          else readT.textContent = '확인하면 보여요';
        }
      }

      // ---- 조각함(HTML) ----
      let pal = null; let askRow = null;
      if (!print && !readOnly) {
        pal = document.createElement('div'); pal.className = 'cc-palette'; pal.setAttribute('role', 'radiogroup'); pal.setAttribute('aria-label', '놓을 부품 고르기');
        pal.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px';
        box.appendChild(pal);
        pal.addEventListener('click', (e) => { const b = e.target.closest('[data-tool]'); if (!b) return; tool = b.dataset.tool; paintPal(); kit.announce(`${PART_NAME[tool]}을 골랐어요. 칸을 눌러 놓아요.`); });
      }
      if (!print && o.ask && Array.isArray(o.ask.choices)) {
        askRow = document.createElement('div'); askRow.setAttribute('role', 'radiogroup'); askRow.setAttribute('aria-label', o.ask.q || '고르기');
        askRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px';
        askRow.innerHTML = `${o.ask.q ? `<span style="font-weight:700;flex-basis:100%">${esc(o.ask.q)}</span>` : ''}${o.ask.choices.map((c, i) => `<button type="button" class="pl-btn pl-btn--small" tabindex="0" role="radio" aria-checked="false" data-pick="${i}" style="min-height:44px">${esc(c)}</button>`).join('')}`;
        askRow.addEventListener('click', (e) => { const b = e.target.closest('[data-pick]'); if (!b) return; pick = Number(b.dataset.pick); paintPick(); changed(); kit.announce(`${o.ask.choices[pick]}을 골랐어요.`); });
        box.appendChild(askRow);
      }
      const used = (t) => Object.values(parts).filter((c) => typeOf(c) === t).length;
      function paintPal() {
        if (!pal) return;
        pal.innerHTML = palette.concat('eraser').map((p) => {
          const left = p === 'eraser' || p === 'wire' ? '' : ` ${Math.max(0, stock[p] - used(p))}`;
          return `<button type="button" class="pl-btn pl-btn--small" tabindex="0" role="radio" aria-checked="${p === tool}" data-tool="${p}" style="min-height:44px" aria-label="${PART_NAME[p]}${left ? `, 남은 개수${left}` : ''}"><i class="fi ${PART_ICON[p]}" aria-hidden="true"></i>${PART_NAME[p]}${left}</button>`;
        }).join('');
      }
      function paintPick() { if (askRow) askRow.querySelectorAll('[data-pick]').forEach((b) => b.setAttribute('aria-checked', String(Number(b.dataset.pick) === pick))); }
      const changed = () => { revealed = false; paint(); paintPal(); kit.tick(); kit.recorder.log('circuit', state()); };
      function put(k, code) {
        if (locked.has(k)) return false;
        const t = typeOf(code); const cur = parts[k];
        if (code && t !== typeOf(cur) && used(t) >= stock[t]) { kit.announce(`남은 ${PART_NAME[t]}이 없어요. 다른 칸의 ${PART_NAME[t]}을 빼고 놓아요.`); kit.tick('no'); return false; }
        if (code) parts[k] = code; else delete parts[k];
        return true;
      }
      function act(k) {
        const cur = parts[k];
        if (cur && typeOf(cur) === 'switch' && tool !== 'eraser') { parts[k] = cur === 'sw0' ? 'sw1' : 'sw0'; changed(); kit.announce(parts[k] === 'sw1' ? '스위치를 닫았어요.' : '스위치를 열었어요.'); return; }
        if (locked.has(k)) { kit.announce('고정된 부품이에요.'); kit.tick('no'); return; }
        let next;
        if (tool === 'eraser') next = null;
        else if (tool === 'battery') next = cur === 'bat-' ? 'bat+' : cur === 'bat+' ? null : 'bat-';
        else if (tool === 'switch') next = 'sw0';
        else next = cur === tool ? null : tool;
        if (put(k, next)) { changed(); kit.announce(next ? `${label(k)}에 ${codeName(next)}을 놓았어요.` : `${label(k)}을 비웠어요.`); }
      }
      const CYCLE = [null].concat(palette.flatMap((p) => (p === 'battery' ? ['bat-', 'bat+'] : p === 'switch' ? ['sw0', 'sw1'] : [p])));
      function cycle(k, d) {
        if (locked.has(k)) { if (typeOf(parts[k]) === 'switch') act(k); return; }
        let i = CYCLE.indexOf(parts[k] || null);
        for (let n = 0; n < CYCLE.length; n++) { i = (i + d + CYCLE.length) % CYCLE.length; const c = CYCLE[i]; if (!c || typeOf(c) === typeOf(parts[k]) || used(typeOf(c)) < stock[typeOf(c)]) break; }
        put(k, CYCLE[i]); changed(); kit.announce(CYCLE[i] ? codeName(CYCLE[i]) : '빈칸');
      }

      // ---- 판정 ----
      const bulbKeys = (p) => Object.keys(p).filter((k) => p[k] === 'bulb');
      const batKeys = (p) => Object.keys(p).filter((k) => typeOf(p[k]) === 'battery');
      const litOf = (p, r) => bulbKeys(p).filter((k) => Math.abs(r.cur[k] || 0) > LIT && !r.short);
      function linkOf(p, list) {
        // 하나를 뺐을 때 나머지가 모두 꺼지면 직렬, 모두 켜져 있으면 병렬
        if (list.length < 2) return null;
        let series = true; let parallel = true;
        for (const k of list) {
          const r2 = analyze(p, COLS, ROWS, { off: k });
          const others = bulbKeys(p).filter((x) => x !== k);
          const anyOn = others.some((x) => Math.abs(r2.cur[x] || 0) > LIT && !r2.short);
          const allOn = others.length > 0 && others.every((x) => Math.abs(r2.cur[x] || 0) > LIT && !r2.short);
          if (anyOn) series = false; if (!allOn) parallel = false;
        }
        return series ? 'series' : parallel ? 'parallel' : 'mixed';
      }
      function judgeParts(p, t) {
        const r = analyze(p, COLS, ROWS);
        const bulbs = bulbKeys(p); const bats = batKeys(p); const lit = litOf(p, r);
        const coil = Object.keys(p).find((k) => p[k] === 'coil'); const coilI = coil ? r.cur[coil] || 0 : 0;
        const sw = Object.keys(p).find((k) => typeOf(p[k]) === 'switch');
        const wantsBulb = t.lit != null || t.bulbs != null || t.connection;
        if (!Object.keys(p).length) return { correct: false, incomplete: true, feedback: '아래 조각함에서 부품을 골라 칸에 놓아요.', hint: '전지부터 놓아 봐요.' };
        if (!bats.length) return { correct: false, incomplete: true, feedback: '전지가 없어요. 전기를 보내 줄 전지를 놓아요.', hint: '조각함에서 전지를 골라 칸에 놓아요.' };
        if (wantsBulb && !bulbs.length && t.lit !== 0) return { correct: false, incomplete: true, feedback: '전구를 놓아요.', hint: '조각함에서 전구를 골라 칸에 놓아요.' };
        if ((t.magnet != null || t.strong || t.coilN) && !coil) return { correct: false, incomplete: true, feedback: '전자석 조각을 놓아요.', hint: '조각함에서 전자석을 골라요.' };
        if (r.short) return { correct: false, feedback: '전지의 두 극이 도선으로만 이어져 합선됐어요. 아주 위험해요!', hint: '전지에서 나온 길에 전구나 전자석이 꼭 하나는 끼어 있게 해요.' };
        if (t.switch && !sw) return { correct: false, feedback: '스위치가 없어요. 회로 안에 스위치를 넣어요.', hint: '조각함에서 스위치를 골라 길 위의 칸에 놓아요.' };
        if (t.switch && (t.switch === 'closed') !== (p[sw] === 'sw1')) return { correct: false, feedback: `스위치가 ${p[sw] === 'sw1' ? '닫혀' : '열려'} 있어요.`, hint: '스위치를 눌러 열고 닫을 수 있어요.' };
        if (t.bulbs != null && bulbs.length !== t.bulbs) return { correct: false, feedback: `전구가 ${bulbs.length}개예요. 문제가 말한 개수를 다시 보세요.`, hint: '조각함의 남은 개수와 판 위의 전구를 세어 봐요.' };
        if (t.batteries != null && bats.length !== t.batteries) return { correct: false, feedback: `전지가 ${bats.length}개예요. 문제가 말한 개수를 다시 보세요.`, hint: '판 위의 전지를 세어 봐요.' };
        const offAll = bulbs.length && !lit.length && !(Math.abs(coilI) > LIT);
        const opposed = bats.length >= 2 && Object.values(r.batI).every((i) => Math.abs(i) < 0.05) && (() => { const rr = analyze(Object.fromEntries(Object.entries(p).filter(([k]) => k !== bats[1])), COLS, ROWS); return Object.values(rr.cur).some((i) => Math.abs(i) > LIT); })();
        if (t.lit === 'all' || (Number.isFinite(t.lit) && t.lit > 0)) {
          if (opposed) return { correct: false, feedback: '전지 두 개의 방향이 서로 반대라 전기가 흐르지 않아요.', hint: '전지의 (+)극이 다음 전지의 (−)극과 이어지게 놓아요.' };
          if (!lit.length) return { correct: false, feedback: sw && p[sw] === 'sw0' ? '스위치가 열려 있어서 전기가 흐르지 않아요.' : '전구에 불이 켜지지 않아요. 전지의 (+)극에서 나와 (−)극으로 돌아오는 길이 끊긴 곳이 있어요.', hint: sw && p[sw] === 'sw0' ? '스위치를 눌러 닫아요.' : '전지에서 출발해 도선을 손가락으로 따라가 다시 전지로 돌아오는지 봐요.' };
          if (t.lit === 'all' && lit.length < bulbs.length) return { correct: false, feedback: `전구 ${bulbs.length}개 가운데 ${lit.length}개만 켜졌어요.`, hint: '꺼진 전구의 두 끝이 모두 길에 이어졌는지 봐요.' };
          if (Number.isFinite(t.lit) && lit.length !== t.lit) return { correct: false, feedback: `켜진 전구가 ${lit.length}개예요.`, hint: '어느 전구에 전기가 지나가는지 길을 따라가 봐요.' };
        }
        if (t.lit === 0 && (lit.length || Math.abs(coilI) > LIT)) return { correct: false, feedback: '아직 전기가 흘러요. 전기가 지나는 길을 끊어요.', hint: sw ? '스위치를 열어 봐요.' : '도선 하나를 빼 봐요.' };
        if (t.connection) {
          const lk = linkOf(p, bulbs);
          if (lk !== t.connection) return { correct: false, feedback: lk === 'series' ? '전구가 한 줄로 이어졌어요(직렬). 하나를 빼면 다른 전구도 꺼져요.' : lk === 'parallel' ? '전구가 갈라진 길에 따로 이어졌어요(병렬). 하나를 빼도 다른 전구는 켜져요.' : '전구 잇는 방법을 다시 보세요.', hint: t.connection === 'series' ? '전기가 갈라지지 않고 전구를 차례로 하나씩 지나가게 이어요.' : '전지에서 나온 길이 두 갈래로 나뉘어 전구마다 따로 지나가게 이어요.' };
        }
        if (t.batteryLink) {
          const bk = (() => { if (bats.length < 2) return null; const base = Math.max(...Object.values(r.cur).map(Math.abs)); const r1 = analyze(p, COLS, ROWS, { off: bats[0] }); const one = Math.max(0, ...Object.values(r1.cur).map(Math.abs)); return one < LIT ? 'series' : Math.abs(one - base) < 0.15 ? 'parallel' : 'mixed'; })();
          if (bk !== t.batteryLink) return { correct: false, feedback: bk === 'series' ? '전지가 한 줄로(직렬) 이어졌어요.' : bk === 'parallel' ? '전지가 나란히(병렬) 이어졌어요.' : '전지 두 개가 한 회로에 이어지지 않았어요.', hint: t.batteryLink === 'series' ? '한 전지의 (+)극을 다음 전지의 (−)극에 이어요.' : '두 전지의 같은 극끼리 이어요.' };
        }
        if (t.magnet != null) {
          const on = Math.abs(coilI) > LIT;
          if (on !== !!t.magnet) return { correct: false, feedback: on ? '전자석에 아직 전기가 흘러요.' : (opposed ? '전지 두 개의 방향이 서로 반대예요.' : '전자석에 전기가 흐르지 않아요. 길이 끊긴 곳을 찾아요.'), hint: on ? '스위치를 열거나 길을 끊어요.' : '전지 → 전자석 → 전지로 돌아오는 길을 만들어요.' };
        }
        if (t.strong && Math.abs(coilI) < 1.4) return { correct: false, feedback: '전자석이 약해요. 클립이 더 붙게 하려면 전지를 어떻게 이어야 할까요?', hint: '전지 두 개를 한 줄로(직렬) 이어 봐요.' };
        if (t.coilN) {
          const g = geo(coil); const nAtB = coilI > 0; const side = g.vert ? (nAtB ? 'bottom' : 'top') : (nAtB ? 'right' : 'left');
          if (side !== t.coilN) return { correct: false, feedback: 'N극이 반대쪽에 생겼어요.', hint: '전지의 방향을 바꾸면 전자석의 극도 바뀌어요.' };
        }
        void offAll;
        return { correct: true, feedback: t.connection === 'parallel' ? '맞아요! 전구가 병렬로 이어져 하나를 빼도 다른 전구가 켜져요.' : t.connection === 'series' ? '맞아요! 전구가 직렬로 이어졌어요.' : t.strong ? '맞아요! 전지를 직렬로 이으니 전자석이 세졌어요.' : t.coilN ? '맞아요! 전류 방향을 바꾸니 극이 바뀌었어요.' : t.magnet ? '맞아요! 전자석에 전기가 흘러 클립이 붙어요.' : t.lit === 0 ? '맞아요! 길이 끊기면 전구가 꺼져요.' : '맞아요! 전기가 지나는 길이 이어졌어요.' };
      }
      const circuitTarget = (t) => ['lit', 'bulbs', 'batteries', 'connection', 'batteryLink', 'switch', 'magnet', 'strong', 'coilN'].some((k) => t[k] != null);
      function judge(t, quiet) {
        t = t || target || {};
        let main = circuitTarget(t) ? judgeParts(parts, t) : null;
        if (main && !main.correct && !quiet) flagSlots();
        let pr = null;
        if (t.pick != null) pr = pick == null ? { correct: false, incomplete: true, feedback: '아래 보기에서 하나를 골라요.', hint: '회로를 보고 알맞은 보기를 골라요.' } : pick !== t.pick ? { correct: false, feedback: (o.ask && o.ask.why && o.ask.why[pick]) || '고른 보기를 회로와 다시 견주어 보세요.', hint: '전지에서 출발해 길을 따라가 봐요.' } : { correct: true, feedback: '맞아요! 회로를 잘 읽었어요.' };
        if (main && !main.correct) return main;
        if (pr && !pr.correct) return pr;
        return main || pr || { correct: false, incomplete: true, feedback: '회로를 만들어 보세요.', hint: '문제를 다시 읽어요.' };
      }
      function flagSlots() { Object.values(slots).forEach((s) => { s.sg.classList.add('pk-no'); setTimeout(() => s.sg.classList.remove('pk-no'), 1600); }); }

      // ---- 풀이 찾기: 둘레 고리(직렬)·사다리(병렬) 꼴에 고정 조각을 맞춰 넣는다 ----
      function perimeter() {
        const out = []; // [key, forward] forward = 고리 방향이 칸의 a→b(왼→오, 위→아래)와 같음
        for (let c = 0; c < COLS - 1; c++) out.push([`h${c}-0`, true]);
        for (let r = 0; r < ROWS - 1; r++) out.push([`v${COLS - 1}-${r}`, true]);
        for (let c = COLS - 2; c >= 0; c--) out.push([`h${c}-${ROWS - 1}`, false]);
        for (let r = ROWS - 2; r >= 0; r--) out.push([`v0-${r}`, false]);
        return out;
      }
      const lockedParts = () => Object.fromEntries([...locked].filter((k) => parts[k]).map((k) => [k, parts[k]]));
      function need(t) {
        const coil = t.magnet != null || t.strong || t.coilN ? 1 : 0;
        const nb = t.bulbs != null ? t.bulbs : t.connection ? 2 : Number.isFinite(t.lit) && t.lit > 0 ? t.lit : (t.lit === 'all' || t.lit === 0) && !coil ? 1 : 0;
        const nbat = t.batteries != null ? t.batteries : t.strong || t.batteryLink ? 2 : 1;
        const sw = t.switch ? 1 : 0;
        return { nb, nbat, coil, sw };
      }
      function seriesLayout(t, flip) {
        const ring = perimeter(); const L = lockedParts(); const ringKeys = new Set(ring.map((x) => x[0]));
        if (Object.keys(L).some((k) => !ringKeys.has(k) && L[k] !== 'wire')) return null;
        const n = need(t); const p = Object.assign({}, L);
        const fw = (() => { const lb = ring.find(([k]) => typeOf(L[k]) === 'battery'); if (!lb) return !flip; return (L[lb[0]] === 'bat+') === lb[1]; })();
        const free = ring.filter(([k]) => !p[k]);
        const have = (ty) => Object.values(p).filter((c) => typeOf(c) === ty).length;
        const take = (fromEnd) => (fromEnd ? free.pop() : free.shift());
        for (let i = have('battery'); i < n.nbat; i++) { const e = take(true); if (!e) return null; p[e[0]] = (fw === e[1]) ? 'bat+' : 'bat-'; }
        for (let i = have('bulb'); i < n.nb; i++) { const e = take(false); if (!e) return null; p[e[0]] = 'bulb'; }
        for (let i = have('coil'); i < n.coil; i++) { const e = take(false); if (!e) return null; p[e[0]] = 'coil'; }
        for (let i = have('switch'); i < n.sw; i++) { const e = take(false); if (!e) return null; p[e[0]] = 'sw1'; }
        free.forEach(([k]) => { p[k] = 'wire'; });
        const swk = Object.keys(p).find((k) => typeOf(p[k]) === 'switch'); if (swk) p[swk] = t.switch === 'open' || (t.lit === 0 && swk) ? 'sw0' : 'sw1';
        if ((t.lit === 0 || t.magnet === false) && !swk) { const w = ring.find(([k]) => p[k] === 'wire' && !locked.has(k)); if (w) delete p[w[0]]; }
        return p;
      }
      function ladderLayout(t, flip, batParallel) {
        // 왼쪽 세로줄 = 전지, 가운데·오른쪽 세로줄 = 갈래(전구), 맨 위·맨 아래 가로줄 = 도선
        if (COLS < 3) return null;
        const n = need(t); const L = lockedParts(); const p = {};
        const col = (c) => Array.from({ length: ROWS - 1 }, (_, r) => `v${c}-${r}`);
        for (let c = 0; c < COLS - 1; c++) { p[`h${c}-0`] = 'wire'; p[`h${c}-${ROWS - 1}`] = 'wire'; }
        const left = col(0); left.forEach((k) => { p[k] = 'wire'; });
        const fwd = !flip; // 전지 +극이 위(bat-)
        const batCols = batParallel ? [0, 1] : [0];
        batCols.forEach((c, ci) => { const ks = col(c); ks.forEach((k) => { p[k] = 'wire'; }); const cnt = batParallel ? 1 : n.nbat; for (let i = 0; i < cnt && i < ks.length; i++) p[ks[i]] = fwd ? 'bat-' : 'bat+'; void ci; });
        const rungs = []; for (let c = batParallel ? 2 : 1; c < COLS; c++) rungs.push(c);
        const loads = []; for (let i = 0; i < n.nb; i++) loads.push('bulb'); if (n.coil) loads.push('coil');
        if (!loads.length || loads.length > rungs.length) return null;
        rungs.forEach((c, i) => { const ks = col(c); if (i < loads.length) { ks.forEach((k) => { p[k] = 'wire'; }); p[ks[0]] = loads[i]; } });
        // 쓰지 않은 갈래 오른쪽 가로줄은 비운다
        const lastRung = rungs[loads.length - 1];
        for (let c = lastRung; c < COLS - 1; c++) { delete p[`h${c}-0`]; delete p[`h${c}-${ROWS - 1}`]; }
        if (n.sw) p['h0-0'] = t.switch === 'open' || t.lit === 0 ? 'sw0' : 'sw1';
        if (Object.entries(L).some(([k, c]) => !(p[k] === c || (typeOf(p[k]) === 'switch' && typeOf(c) === 'switch')))) return null;
        return p;
      }
      function solvedParts(t) {
        t = t || target || {};
        if (t.solution && typeof t.solution === 'object') return Object.assign({}, lockedParts(), t.solution);
        if (!circuitTarget(t)) return Object.assign({}, parts);
        const cands = [];
        const stockOk = (p) => ['bulb', 'battery', 'switch', 'coil'].every((ty) => Object.values(p).filter((c) => typeOf(c) === ty).length <= stock[ty]);
        const wantPar = t.connection === 'parallel'; const wantBatPar = t.batteryLink === 'parallel';
        if (!wantPar && !wantBatPar) [false, true].forEach((f) => cands.push(seriesLayout(t, f)));
        [false, true].forEach((f) => cands.push(ladderLayout(t, f, wantBatPar)));
        if (wantPar || wantBatPar) [false, true].forEach((f) => cands.push(seriesLayout(t, f)));
        for (const p of cands) if (p && stockOk(p) && judgeParts(p, t).correct) return p;
        return null;
      }

      function state() { const s = { parts: Object.fromEntries(keys.filter((k) => parts[k]).map((k) => [k, parts[k]])) }; if (askRow || (o.ask && o.ask.choices)) s.pick = pick; return s; }
      function apply(s) {
        s = s || {};
        const src = s.parts && typeof s.parts === 'object' ? s.parts : {};
        parts = {}; keys.forEach((k) => { if (CODES.includes(src[k])) parts[k] = src[k]; });
        if (lockAll && firstSet && Object.keys(parts).length) { locked = new Set(Object.keys(parts)); firstSet = false; }
        // 고정 조각은 늘 그 자리에 있다(스위치 여닫음만 상태를 따른다)
        if (startLocked) Object.entries(startLocked).forEach(([k, c]) => { if (!parts[k] || typeOf(parts[k]) !== typeOf(c)) parts[k] = c; });
        if (lockAll && !startLocked && locked.size) startLocked = Object.fromEntries([...locked].map((k) => [k, parts[k]]).filter(([, c]) => c));
        pick = Number.isInteger(s.pick) ? s.pick : null; paintPick();
        paint(); paintPal();
      }
      let startLocked = null; let wrongTurn = 0;
      if (Array.isArray(o.lock) && o.start && o.start.parts) startLocked = Object.fromEntries(o.lock.filter((k) => o.start.parts[k]).map((k) => [k, o.start.parts[k]]));
      apply(o.start || {});
      const isWrong = (s, t) => { const save = state(); apply(s); const r = judge(t, true); apply(save); return !r.correct && !r.incomplete; };

      return {
        getState: state,
        setState(s) { apply(s); },
        setTarget(t) { target = t || null; },
        reset() { revealed = false; apply(o.start || {}); },
        check(t, opts) {
          const quiet = !!(opts && opts.forHint);
          const r = judge(t, quiet);
          if (!quiet && r.correct) { revealed = true; paint(); }
          return r;
        },
        hint(t, opts) {
          t = t || target || {};
          const r = judge(t, true);
          if (r.correct) return { hint: '회로가 알맞게 이어졌어요.', correct: true };
          const lv = levelOf(opts);
          if (lv === 1) {
            if (!circuitTarget(t)) return { hint: '전지의 (+)극에서 출발해 손가락으로 길을 따라가며 전기가 어디를 지나는지 봐요.', correct: false };
            if (t.connection === 'parallel') return { hint: '전지에서 나온 길이 갈라져 전구마다 따로 지나가게 만들어 봐요.', correct: false };
            if (t.connection === 'series') return { hint: '전기가 갈라지지 않고 전구를 차례로 지나가게 한 줄로 이어 봐요.', correct: false };
            if (t.strong || t.batteryLink) return { hint: '전지를 잇는 방법에 따라 전기가 얼마나 세게 흐르는지 달라져요. 극의 방향을 살펴요.', correct: false };
            if (t.coilN) return { hint: '전자석의 극은 전기가 흐르는 방향에 따라 정해져요. 전지 방향을 살펴요.', correct: false };
            return { hint: '전지의 (+)극에서 나온 길이 부품을 지나 (−)극으로 끊김 없이 돌아오면 전기가 흘러요.', correct: false };
          }
          if (lv === 2) return { hint: r.hint || r.feedback, correct: false };
          const p = solvedParts(t);
          if (p) {
            const diff = keys.filter((k) => (p[k] || null) !== (parts[k] || null));
            const k = diff.find((x) => p[x] && typeOf(p[x]) !== 'wire') || diff[0];
            if (k) return { hint: p[k] ? `${label(k)}에 ${codeName(p[k])}을 놓아요.${diff.length > 1 ? ` 바꿀 칸이 ${diff.length - 1}개 더 있어요.` : ''}` : `${label(k)}의 ${codeName(parts[k])}을 빼요.`, correct: false };
          }
          if (t.pick != null && o.ask) return { hint: `답은 ‘${o.ask.choices[t.pick]}’이에요. 회로에서 그 까닭을 찾아봐요.`, correct: false };
          return { hint: r.hint || '문제를 다시 읽어요.', correct: false };
        },
        solve(t) {
          t = t || target || {};
          const p = solvedParts(t);
          const s = { parts: p || parts };
          if (t.pick != null) s.pick = t.pick; else s.pick = pick;
          apply(s);
        },
        // 그럴듯한 오개념: 길 하나 끊김, 전지 하나를 거꾸로, 직렬↔병렬, 스위치 반대, 전구를 도선으로(합선)
        wrongAnswer(t) {
          t = t || target || {};
          const good = solvedParts(t) || Object.assign({}, parts); const cands = [];
          const mk = (p) => Object.assign({ parts: p }, t.pick != null ? { pick: t.pick } : askRow ? { pick } : {});
          if (circuitTarget(t)) {
            if (t.connection) { const other = Object.assign({}, t, { connection: t.connection === 'series' ? 'parallel' : 'series' }); const save = target; const p2 = t.connection === 'series' ? ladderLayout(other, false, false) : seriesLayout(other, false); target = save; if (p2) cands.push(mk(p2)); }
            if (t.batteryLink) { const p2 = t.batteryLink === 'series' ? ladderLayout(Object.assign({}, t, { batteryLink: 'parallel' }), false, true) : seriesLayout(Object.assign({}, t, { batteryLink: 'series' }), false); if (p2) cands.push(mk(p2)); }
            Object.keys(good).filter((k) => typeOf(good[k]) === 'battery' && !locked.has(k)).forEach((k) => cands.push(mk(Object.assign({}, good, { [k]: good[k] === 'bat+' ? 'bat-' : 'bat+' }))));
            Object.keys(good).filter((k) => typeOf(good[k]) === 'switch').forEach((k) => {
              const flip = Object.assign({}, good, { [k]: good[k] === 'sw1' ? 'sw0' : 'sw1' }); cands.push(mk(flip));
              // 스위치만 움직일 수 있는 고정 회로: 끝이 떠 있는 도선을 더한 꼴도 같은 오답이다(앞 오답과 다른 상태로 셀 수 있게)
              keys.filter((x) => !flip[x] && !locked.has(x)).forEach((x) => cands.push(mk(Object.assign({}, flip, { [x]: 'wire' }))));
            });
            Object.keys(good).filter((k) => good[k] === 'wire' && !locked.has(k)).forEach((k) => { const p = Object.assign({}, good); delete p[k]; cands.push(mk(p)); });
            Object.keys(good).filter((k) => good[k] === 'bulb' && !locked.has(k)).forEach((k) => cands.push(mk(Object.assign({}, good, { [k]: 'wire' }))));
            keys.filter((k) => !good[k]).forEach((k) => cands.push(mk(Object.assign({}, good, { [k]: 'wire' }))));
          }
          // 같은 오개념에 끝이 떠 있는 도선 하나를 더한 꼴 — 지금 상태가 그 오답과 같을 때도 다른 오답을 낼 수 있게
          cands.slice().forEach((c) => { const x = keys.find((k) => !c.parts[k] && !locked.has(k)); if (x) cands.push(Object.assign({}, c, { parts: Object.assign({}, c.parts, { [x]: 'wire' }) })); });
          if (t.pick != null && o.ask) o.ask.choices.forEach((_, i) => { if (i !== t.pick) cands.push({ parts: good, pick: i }); });
          // 상태 비교는 칸 차례를 맞춘 꼴로 한다. 부를 때마다 다른 오답부터 찾아 연달아 틀려 볼 수 있게 한다
          const canon = (s) => JSON.stringify({ parts: Object.fromEntries(keys.filter((k) => s.parts && s.parts[k]).map((k) => [k, s.parts[k]])), pick: s.pick == null ? null : s.pick });
          const cur = canon(state()); const n = cands.length; const from = n ? wrongTurn++ % n : 0;
          for (let i = 0; i < n; i++) { const c = cands[(from + i) % n]; if (canon(c) !== cur && isWrong(c, t)) return c; }
          return null;
        },
        distance(a, b) {
          const pa = (a && a.parts) || {}; const pb = (b && b.parts) || {};
          let d = keys.filter((k) => (pa[k] || null) !== (pb[k] || null)).length;
          if ((a && a.pick) !== (b && b.pick)) d += 1;
          return d;
        },
        async demo(t) {
          const p = solvedParts(t || {}); if (!p) return;
          const order = Object.keys(p).sort((x, y) => (typeOf(p[x]) === 'wire') - (typeOf(p[y]) === 'wire'));
          for (const k of order) { parts[k] = p[k]; paint(); kit.tick(); await kit.wait(220); }
          revealed = true; paint();
        },
      };
    },
  });
})(window.PaperKit);
