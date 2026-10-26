/* 정육면체 전개도 접기 — 정사각형 6장을 모눈에 끌어 놓아 전개도를 만들고, '접기'를 누르면 실제로 접혀 정육면체가 되는지 보여 준다.
 * 접기는 진짜 3차원 계산이다: 한 면을 바닥으로 두고 이웃 면을 경첩(맞닿은 변)마다 90° 돌린 뒤 정사영한다.
 * 평면 정사각형을 3차원에서 돌려 정사영하면 2차원 아핀 변환이므로, 면마다 transform="matrix(...)"만 바꾼다(조각을 다시 그리지 않음).
 * 전개도 판정도 같은 계산을 쓴다: 6면이 변으로 이어지고, 접었을 때 6면의 자리가 모두 다르면 정육면체가 된다(11가지 전개도와 일치).
 * 옵션: cols/rows(모눈, 기본 6×4), start(처음 칸들), locked(조각 고정), paint(색칠 모드), allowFold(접기 단추, 기본 true),
 *       showStatus(이어진 면 수 안내), revealPairs(접기 성공 뒤 마주 보는 면을 같은 색으로 보여 줌), print,
 *       blank(활동지 그리기 칸: 면 없이 이어진 모눈만 그린다 — 종이에 전개도를 직접 그리게)
 * 조작: 끌어 놓기, 방향키 + Enter, 또는 '면을 눌러 고르고 빈칸을 눌러 놓기'(휴대폰에서 끌기가 어려운 학생)
 * 상태: { cells:{ㄱ:[c,r],…}, paint:{ㄱ:'rose'|null,…} }
 * target: { valid:true, line4?:true|false, notCross?:true, shape?:'3-3' } | { opposite:['ㄱ','ㅂ'] } | { pairs:true }
 *   notCross: 네 면 줄이 있어도 십자(+) 모양(양쪽 날개가 줄 가운데 같은 칸에 붙음)은 받지 않는다 — 1번과 같은 십자를 다시 내지 않게
 */
(function (K) {
  'use strict';
  // 받침에 맞는 조사(경찰서는/학교는, 면 ㄱ과). 자모 글자(ㄱ~ㅎ)는 이름(기역·니은…)이 받침으로 끝난다.
  const josa = (w, withB, noB) => { const c = String(w).charCodeAt(String(w).length - 1); const has = (c >= 0x3131 && c <= 0x314E) || (c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 !== 0); return `${w}${has ? withB : noB}`; };
  const IDS = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ'];
  const FACE_COLORS = ['rose', 'peach', 'buttercup', 'mint', 'sky', 'lavender'];
  const PAINTS = ['rose', 'mint', 'sky'];
  const PAINT_NAME = { rose: '분홍', mint: '연두', sky: '하늘' };
  const NETS = {
    cross: { ㄱ: [1, 0], ㄴ: [0, 1], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [1, 2] }, // 1-4-1
    step: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] }, // 2-3-1
    zig: { ㄱ: [0, 0], ㄴ: [0, 1], ㄷ: [1, 1], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [3, 2] }, // 1-4-1, 십자가 아님
    three: { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [2, 0], ㄹ: [2, 1], ㅁ: [3, 1], ㅂ: [4, 1] }, // 3-3
  };

  // ---- 3차원 접기 계산 ----
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  const scl = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
  const cross3 = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  // 점 p를 (점 a, 단위 방향 d) 축 둘레로 th만큼 돌린다(로드리게스)
  function rot(p, a, d, th) {
    const v = sub(p, a); const c = Math.cos(th); const s = Math.sin(th);
    const r = add(add(scl(v, c), scl(cross3(d, v), s)), scl(d, dot(d, v) * (1 - c)));
    return add(r, a);
  }

  // cells → { ok, connected, tree:{id:{parent, a, d}}, root, order }
  function analyze(cells) {
    const at = {}; for (const id of IDS) at[cells[id].join(',')] = id;
    const nb = (id) => { const [c, r] = cells[id]; return [[1, 0], [-1, 0], [0, 1], [0, -1]].map(([dc, dr]) => at[`${c + dc},${r + dr}`]).filter(Boolean); };
    // 바닥 면: 이웃이 가장 많은 면(접는 모습이 가장 자연스럽다)
    let root = IDS[0]; for (const id of IDS) if (nb(id).length > nb(root).length) root = id;
    const tree = { [root]: null }; const order = [root]; let edges = 0;
    for (let i = 0; i < order.length; i++) {
      const p = order[i];
      for (const q of nb(p)) {
        edges++;
        if (q in tree) continue;
        const [pc, pr] = cells[p]; const [qc, qr] = cells[q];
        // 맞닿은 변: 두 칸의 공통 변
        let a; let d;
        if (qc !== pc) { const x = Math.max(pc, qc); a = [x, pr, 0]; d = [0, 1, 0]; } else { const y = Math.max(pr, qr); a = [pc, y, 0]; d = [1, 0, 0]; }
        // 바깥(시청자에게서 먼 쪽, z<0)으로 접히는 방향을 고른다 → 앞면(글자 쪽)이 정육면체 바깥이 된다
        const ctr = [qc + 0.5, qr + 0.5, 0];
        if (rot(ctr, a, d, 0.3)[2] > 0) d = scl(d, -1);
        tree[q] = { parent: p, a, d };
        order.push(q);
      }
    }
    const connected = order.length === 6;
    return { root, tree, order, connected, cycles: edges / 2 > 5 };
  }
  // 면 id의 평면 점 p를 접힘 정도 th로 3차원에 놓는다
  function place(info, id, p, th) {
    let cur = id; let q = p;
    while (info.tree[cur]) { const h = info.tree[cur]; q = rot(q, h.a, h.d, th); cur = h.parent; }
    return q;
  }
  function foldResult(cells) {
    const info = analyze(cells);
    if (!info.connected) return { info, valid: false, why: 'disconnected' };
    const ctr = {}; const keys = new Set();
    for (const id of IDS) { const [c, r] = cells[id]; const q = place(info, id, [c + 0.5, r + 0.5, 0], Math.PI / 2); ctr[id] = q; keys.add(q.map((v) => Math.round(v * 2)).join(',')); }
    const valid = keys.size === 6;
    // 겹치는 두 면(전개도가 아닐 때 어느 면끼리 부딪히는지 알려 준다)
    let clash = null;
    if (!valid) { const seen = {}; for (const id of IDS) { const k = ctr[id].map((v) => Math.round(v * 2)).join(','); if (seen[k] && !clash) clash = [seen[k], id]; seen[k] = seen[k] || id; } }
    let opp = null;
    if (valid) {
      const m = scl(IDS.reduce((s, id) => add(s, ctr[id]), [0, 0, 0]), 1 / 6);
      opp = {};
      for (const a of IDS) for (const b of IDS) if (a !== b && Math.hypot(...add(sub(ctr[a], m), sub(ctr[b], m))) < 0.01) opp[a] = b;
    }
    return { info, valid, why: valid ? null : 'overlap', opp, clash };
  }
  // 가로나 세로로 곧게 이어진 면의 가장 긴 줄
  function maxLine(cells) {
    const set = new Set(IDS.map((id) => cells[id].join(','))); let best = 1;
    for (const id of IDS) {
      const [c, r] = cells[id];
      for (const [dc, dr] of [[1, 0], [0, 1]]) { let k = 1; while (set.has(`${c + dc * k},${r + dr * k}`)) k++; best = Math.max(best, k); }
    }
    return best;
  }
  // 십자(+) 모양: 네 면 줄의 가운데 칸(2·3번째) 하나에 양쪽 날개가 함께 붙은 꼴
  function isCross(cells) {
    const list = IDS.map((id) => cells[id]); const set = new Set(list.map((p) => p.join(',')));
    for (const [c, r] of list) {
      for (const horiz of [true, false]) {
        const line = [0, 1, 2, 3].map((k) => (horiz ? [c + k, r] : [c, r + k]));
        if (!line.every((p) => set.has(p.join(',')))) continue;
        const key = new Set(line.map((p) => p.join(',')));
        const rest = list.filter((p) => !key.has(p.join(',')));
        if (rest.length !== 2) continue;
        const along = rest.map((p) => (horiz ? p[0] - c : p[1] - r));
        const side = rest.map((p) => (horiz ? p[1] - r : p[0] - c));
        if (along[0] === along[1] && (along[0] === 1 || along[0] === 2) && side[0] === -side[1] && Math.abs(side[0]) === 1) return true;
      }
    }
    return false;
  }
  function hasLine4(cells) {
    const set = new Set(IDS.map((id) => cells[id].join(',')));
    for (const id of IDS) {
      const [c, r] = cells[id];
      if ([0, 1, 2, 3].every((k) => set.has(`${c + k},${r}`)) || [0, 1, 2, 3].every((k) => set.has(`${c},${r + k}`))) return true;
    }
    return false;
  }

  // 네 면 줄의 같은 쪽에 남은 두 면이 붙은 꼴(가장 흔한 오답). tip: 한 면을 반대쪽으로 옮길 빈칸
  function sameSideWings(cells) {
    const list = IDS.map((id) => cells[id]); const set = new Set(list.map((p) => p.join(',')));
    for (const [c, r] of list) {
      for (const horiz of [true, false]) {
        const line = [0, 1, 2, 3].map((k) => (horiz ? [c + k, r] : [c, r + k]));
        if (!line.every((p) => set.has(p.join(',')))) continue;
        const key = new Set(line.map((p) => p.join(',')));
        const rest = list.filter((p) => !key.has(p.join(',')));
        if (rest.length !== 2) continue;
        const side = rest.map((p) => (horiz ? p[1] - r : p[0] - c));
        const along = rest.map((p) => (horiz ? p[0] - c : p[1] - r));
        if (side[0] === side[1] && Math.abs(side[0]) === 1 && along.every((x) => x >= 0 && x <= 3)) {
          const w = rest[1]; const tip = horiz ? [w[0], r - side[0]] : [c - side[0], w[1]];
          return { tip: tip[0] >= 0 && tip[1] >= 0 ? tip : null };
        }
      }
    }
    return null;
  }
  // 세 면씩 두 줄(3-3) 모양
  function isThreeThree(cells) {
    const rows = {}; const cols = {};
    IDS.forEach((id) => { const [c, r] = cells[id]; (rows[r] = rows[r] || []).push(c); (cols[c] = cols[c] || []).push(r); });
    const ok = (g) => { const ks = Object.keys(g); if (ks.length !== 2) return false; return ks.every((k) => { const v = g[k].slice().sort((x, y) => x - y); return v.length === 3 && v[2] - v[0] === 2; }); };
    return ok(rows) || ok(cols);
  }

  // 힌트 단계(플레이어가 { level, attempts }를 준다): 1 개념·전략만(문항의 수·자리·이름 없음), 2 틀린 단계 짚기, 3 풀이 한 단계.
  // 시도 수보다 높은 단계는 주지 않는다 — 시도 0 → 1단계, 1 → 2단계까지, 2 이상 → 3단계까지
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  K.registerTool('cubenet', {
    name: '정육면체 전개도 접기',
    create(box, o, kit) {
      const COLS = o.cols || 6; const ROWS = o.rows || 4; const C = 56;
      const OX = 24; const OY = 20;
      const BW = COLS * C; const BH = ROWS * C;
      const W = OX * 2 + BW; const H = o.print ? OY * 2 + BH : OY + BH + (o.paint ? 122 : 100); // 색칠은 붓 이름 글자 한 줄을 더 쓴다
      const st = kit.stage(box, { viewBox: [W, H], label: '모눈 위 정사각형 6장. 끌어 옮겨 정육면체의 전개도를 만들고 접기를 누르세요.' });
      const B = st.layer('board');
      kit.piece(st, B, { shape: { type: 'rect', x: OX - 8, y: OY - 8, w: BW + 16, h: BH + 16, rx: 16 }, color: 'cream', depth: 3, texture: true, fill: '#FBF6EA' });
      if (o.blank) {
        // 그리기 칸: 1 cm 모눈처럼 이어진 점선(칸마다 떨어진 네모가 아니라 선을 따라 그릴 수 있게)
        for (let c = 0; c <= COLS; c++) kit.el('line', { x1: OX + c * C, y1: OY, x2: OX + c * C, y2: OY + BH, stroke: '#9C8F7A', 'stroke-width': 1, 'stroke-dasharray': '3 3' }, B);
        for (let r = 0; r <= ROWS; r++) kit.el('line', { x1: OX, y1: OY + r * C, x2: OX + BW, y2: OY + r * C, stroke: '#9C8F7A', 'stroke-width': 1, 'stroke-dasharray': '3 3' }, B);
        if (o.startCell) kit.el('rect', { x: OX + o.startCell[0] * C, y: OY + o.startCell[1] * C, width: C, height: C, fill: '#D9D2C5', stroke: '#3D352E', 'stroke-width': 1.6, class: 'cn-start' }, B);
      } else for (let c = 0; c < COLS; c++) for (let r = 0; r < ROWS; r++) {
        kit.el('rect', { x: OX + c * C + 3, y: OY + r * C + 3, width: C - 6, height: C - 6, rx: 6, fill: 'none', stroke: '#CDBFA8', 'stroke-width': 1.2, 'stroke-dasharray': '4 4' }, B);
      }
      // 쉬움: 옮겨 볼 칸을 점선으로 깜빡여 알려 준다
      const tipCell = kit.el('rect', { x: 2, y: 2, width: C - 4, height: C - 4, rx: 8, fill: '#FEE396', 'fill-opacity': 0.5, stroke: '#702830', 'stroke-width': 2.4, 'stroke-dasharray': '6 4', display: 'none', 'pointer-events': 'none', class: 'cn-tip' }, B);
      let tipStop = null;
      const showTip = (cell) => {
        if (tipStop) { tipStop(); tipStop = null; }
        if (!cell) { tipCell.setAttribute('display', 'none'); return; }
        kit.transform(tipCell, { x: OX + cell[0] * C, y: OY + cell[1] * C });
        tipCell.setAttribute('display', 'inline');
        let on = true; const id = setInterval(() => { on = !on; tipCell.setAttribute('opacity', on ? 1 : 0.35); }, 450);
        tipStop = () => { clearInterval(id); tipCell.setAttribute('opacity', 1); };
      };
      const F = st.layer('faces');
      if (o.blank) F.setAttribute('display', 'none');
      const paintMode = !!o.paint;
      const canDrag = !o.locked && !o.print && !paintMode;
      let folded = false; let busy = false;
      const cells = {}; const paint = {}; const faces = {};
      const posOf = ([c, r]) => ({ x: OX + c * C, y: OY + r * C });

      for (let i = 0; i < 6; i++) {
        const id = IDS[i];
        const g = kit.el('g', { class: 'cn-face', 'aria-label': `면 ${id}` }, F);
        const inner = kit.el('g', null, g);
        kit.el('rect', { x: 0, y: 0, width: C, height: C, class: 'pk-hit' }, inner);
        const pc = kit.piece(st, inner, { shape: { type: 'rect', x: 1.5, y: 1.5, w: C - 3, h: C - 3, rx: 5 }, color: paintMode ? 'cream' : FACE_COLORS[i], depth: 1 });
        kit.el('text', { x: C / 2, y: C / 2 + 8, 'text-anchor': 'middle', 'font-size': 22, class: 'pk-text', fill: '#3D352E' }, inner).textContent = id;
        faces[id] = { g, inner, pc, base: paintMode ? 'cream' : FACE_COLORS[i] };
        paint[id] = null;
      }

      // ---- 끌어 옮기기(모눈 칸에 딱 맞춤) ----
      const cellAt = (x, y) => [Math.round((x - OX) / C), Math.round((y - OY) / C)];
      const occupied = (c, r, except) => IDS.some((id) => id !== except && cells[id][0] === c && cells[id][1] === r);
      // 눌러 고르기: 끌지 않고 면을 누르면 골라지고, 빈칸을 누르면 그 칸으로 간다
      let picked = null;
      const selRing = kit.el('rect', { x: -3, y: -3, width: C + 6, height: C + 6, rx: 9, fill: 'none', stroke: '#473B6B', 'stroke-width': 3.5, display: 'none', 'pointer-events': 'none' }, F);
      const pickFace = (id) => {
        picked = id;
        if (!id) { selRing.setAttribute('display', 'none'); return; }
        kit.transform(selRing, posOf(cells[id])); selRing.setAttribute('display', 'inline'); F.appendChild(selRing);
        kit.announce(`면 ${josa(id, '을', '를')} 골랐어요. 놓을 빈칸을 누르세요.`);
      };
      if (canDrag) {
        for (let c = 0; c < COLS; c++) for (let r = 0; r < ROWS; r++) {
          const hit = kit.el('rect', { x: OX + c * C, y: OY + r * C, width: C, height: C, fill: 'transparent', class: 'cn-cell' }, B);
          hit.addEventListener('click', () => {
            if (!picked || folded || busy || occupied(c, r, picked)) return;
            const id = picked; cells[id] = [c, r]; pickFace(null); showTip(null);
            kit.tick('ok'); hop(faces[id].g, posOf(cells[id]));
            kit.recorder.log('cubenet', state()); kit.announce(placedText(id)); status();
          });
        }
        for (const id of IDS) {
          const g = faces[id].g;
          let from = null;
          kit.drag(st, g, {
            keyStep: C,
            enabled: () => !folded && !busy,
            onStart: () => { kit.tick(); restoreColors(); from = cells[id].join(','); },
            snap: (x, y) => {
              let [c, r] = cellAt(x, y);
              c = K.clamp(c, 0, COLS - 1); r = K.clamp(r, 0, ROWS - 1);
              if (occupied(c, r, id)) return null; // 이미 다른 면이 있는 칸 → 제자리로
              return posOf([c, r]);
            },
            onDrop: (x, y, via) => {
              const at = cellAt(x, y);
              // 제자리에 놓은 포인터 누르기 = 고르기(다시 누르면 고르기 해제)
              if (via === 'pointer' && at.join(',') === from) { pickFace(picked === id ? null : id); return; }
              cells[id] = at; pickFace(null); showTip(null); kit.tick('ok'); hop(g, posOf(cells[id]));
              kit.recorder.log('cubenet', state()); kit.announce(placedText(id));
              status();
            },
            onReject: () => { kit.tick('no'); kit.announce('그 칸에는 이미 다른 면이 있어요'); },
          });
        }
      }

      // 화면 낭독: '줄/칸'은 행·열이 헷갈리므로 '왼쪽에서 몇째, 위에서 몇째'로 말하고, 변이 닿은 면도 알린다
      function placedText(id) {
        const [c, r] = cells[id];
        const nb = IDS.filter((x) => x !== id && Math.abs(cells[x][0] - c) + Math.abs(cells[x][1] - r) === 1);
        const tail = nb.length ? `${nb.map((x) => `면 ${x}`).join(', ')}${josa(nb[nb.length - 1], '과', '와').slice(-1)} 이어져요.` : '변이 닿은 면이 없어요.';
        return `면 ${josa(id, '을', '를')} 왼쪽에서 ${c + 1}번째, 위에서 ${r + 1}번째 칸에 놓았어요. ${tail}`;
      }

      // ---- 색칠(마주 보는 면 찾기) ----
      let brush = 'rose';
      if (paintMode && !o.print) {
        for (const id of IDS) {
          const g = faces[id].g;
          g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button'); g.classList.add('pk-draggable');
          const go = () => { if (folded || busy) return; setPaint(id, brush === 'eraser' ? null : (paint[id] === brush ? null : brush)); kit.tick('ok'); hop(g, posOf(cells[id])); kit.recorder.log('cubenet', state()); kit.announce(paint[id] ? `면 ${josa(id, '을', '를')} ${PAINT_NAME[paint[id]]}색으로 칠했어요` : `면 ${id}의 색을 지웠어요`); status(); };
          g.addEventListener('click', go);
          g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
        }
      }
      function setPaint(id, color) { paint[id] = color; faces[id].pc.setColor(color || faces[id].base); }

      // ---- 아래 단추줄: 접기 · 붓 ----
      const U = st.layer('controls');
      const by = OY + BH + 20;
      let foldBtnText = null; let foldBtn = null; const brushBtns = [];
      const setFoldLabel = (t) => { if (foldBtnText) foldBtnText.textContent = t; if (foldBtn) foldBtn.setAttribute('aria-label', t); };
      const statusText = kit.el('text', { x: W / 2, y: H - 6, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#473B6B' }, U);
      const button = (x, y, w, h, color, label, onPress) => {
        const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': label, class: 'pk-draggable cn-btn' }, U);
        kit.el('rect', { x, y: y - 2, width: w, height: Math.max(h, 48), rx: 14, class: 'pk-hit' }, g);
        kit.piece(st, g, { shape: { type: 'rect', x, y, w, h, rx: 14 }, color, depth: 2 });
        const press = () => { kit.tween(180, (p) => g.setAttribute('transform', `translate(0 ${(Math.sin(p * Math.PI) * 2.5).toFixed(2)})`)).then(() => g.removeAttribute('transform')); onPress(); };
        g.addEventListener('click', press);
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); press(); } });
        return g;
      };
      if (!o.print) {
        if (o.allowFold !== false) {
          const bw = paintMode ? 112 : 132;
          const fb = foldBtn = button(OX, by, bw, 50, 'mint', '접기', () => toggleFold());
          foldBtnText = kit.el('text', { x: OX + bw / 2, y: by + 32, 'text-anchor': 'middle', 'font-size': 19, class: 'pk-text', fill: '#173A2C' }, fb);
          foldBtnText.textContent = '접기';
        }
        if (paintMode) {
          const opts = PAINTS.concat('eraser');
          opts.forEach((p, k) => {
            const cx = OX + BW - 26 - (opts.length - 1 - k) * 52; const cy = by + 25;
            const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': p === 'eraser' ? '지우개' : `${PAINT_NAME[p]}색 붓`, class: 'pk-draggable cn-brush' }, U);
            kit.el('rect', { x: cx - 26, y: cy - 26, width: 52, height: 72, class: 'pk-hit' }, g);
            const ring = kit.el('circle', { cx, cy, r: 24, fill: 'none', stroke: '#473B6B', 'stroke-width': 3 }, g);
            kit.piece(st, g, { shape: { type: 'circle', r: 19, cx, cy }, color: p === 'eraser' ? 'cream' : p, depth: 2 });
            // 지우개는 빨간 X(틀림 표시처럼 보임) 대신 회색 지우개 아이콘(fi-rr-eraser 글꼴 글자)
            if (p === 'eraser') kit.el('text', { x: cx, y: cy + 7, 'text-anchor': 'middle', 'font-size': 20, 'font-family': 'uicons-regular-rounded', fill: '#6E655B', 'aria-hidden': 'true' }, g).textContent = '\ue60f';
            // 색 이름을 글자로도 쓴다(색 이름이 낯선 학생이 '연두'와 '하늘'을 헷갈리지 않게)
            kit.el('text', { x: cx, y: cy + 43, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#3D352E' }, g).textContent = p === 'eraser' ? '지우기' : PAINT_NAME[p];
            const pick = () => { brush = p; brushBtns.forEach((b) => b.ring.setAttribute('opacity', b.p === brush ? 1 : 0)); kit.tick(); kit.announce(p === 'eraser' ? '지우개를 골랐어요' : `${PAINT_NAME[p]}색 붓을 골랐어요`); };
            g.addEventListener('click', pick);
            g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(); } });
            brushBtns.push({ p, ring });
          });
          brushBtns.forEach((b) => b.ring.setAttribute('opacity', b.p === brush ? 1 : 0));
        }
      }
      function status(msg) {
        if (o.print) { statusText.textContent = ''; return; }
        if (msg != null) { statusText.textContent = msg; return; }
        if (o.showStatus && paintMode) {
          // 쉬움: 세 쌍 칠하기에서 맞게 칠한 짝 수를 보여 준다
          const opp = target && target.pairs ? opposites() : null;
          statusText.textContent = opp ? `마주 보는 짝을 맞게 칠한 색: ${pairsOk(opp)} / 3` : '';
        } else if (o.showStatus) {
          // 이어짐만 알리면 정답 신호로 읽힌다 — 판정은 접어서 하게 두고, 늘 겹치는 두 모양만 미리 짚는다
          const a = analyze(cells);
          if (!a.connected) statusText.textContent = `변으로 이어진 면: ${a.order.length}개 / 6개`;
          else if (maxLine(cells) >= 5) statusText.textContent = '한 줄에 다섯 면 이상: 접으면 겹쳐요';
          else if (a.cycles) statusText.textContent = '2×2로 모인 네 면: 접으면 겹쳐요';
          else statusText.textContent = '모두 이어졌어요. 정육면체가 될지 접어 봐요';
        } else statusText.textContent = '';
      }

      // ---- 움직임 ----
      function hop(g, at) {
        kit.spring(-8, 0, { stiffness: 300, damping: 14, velocity: 0, onUpdate: (v) => kit.transform(g, { x: at.x, y: at.y + v }), onDone: () => kit.transform(g, at) });
      }
      function setInner(id, m) { faces[id].inner.setAttribute('transform', m ? `matrix(${m.map((v) => Math.round(v * 1000) / 1000).join(' ')})` : ''); }
      let zOrder = '';
      // p: 0(펼침)~1(접힘). 면마다 아핀 행렬을 계산한다.
      function frame(info, p, lift) {
        const th = (Math.PI / 2) * p;
        const spin = (-28 * p * Math.PI) / 180; const tilt = (58 * p * Math.PI) / 180;
        const cz = Math.cos(spin); const sz = Math.sin(spin); const cx = Math.cos(tilt); const sx = Math.sin(tilt);
        const pts = {};
        for (const id of IDS) {
          const [c, r] = cells[id];
          pts[id] = [[c, r, 0], [c + 1, r, 0], [c, r + 1, 0], [c + 0.5, r + 0.5, 0]].map((q) => place(info, id, q, th));
        }
        const m = scl(IDS.reduce((s, id) => add(s, pts[id][3]), [0, 0, 0]), 1 / 6);
        const view = (q) => { const v = sub(q, m); const x1 = v[0] * cz - v[1] * sz; const y1 = v[0] * sz + v[1] * cz; return [x1, y1 * cx - v[2] * sx, y1 * sx + v[2] * cx]; };
        // 평면일 때의 무게중심에서 모눈 가운데로 옮겨 간다
        const flat = [OX + m[0] * C, OY + m[1] * C];
        const goal = [OX + BW / 2, OY + BH / 2 - 4];
        const tx = flat[0] + (goal[0] - flat[0]) * p; const ty = flat[1] + (goal[1] - flat[1]) * p - (lift || 0);
        const depth = [];
        const k = 1 + 0.55 * p; // 접힌 정육면체는 모눈 한 칸보다 크게 보여 준다
        for (const id of IDS) {
          const [O, X, Y, Ct] = pts[id].map(view);
          const so = [tx + O[0] * C * k, ty + O[1] * C * k];
          const ax = [(X[0] - O[0]) * k, (X[1] - O[1]) * k]; const ay = [(Y[0] - O[0]) * k, (Y[1] - O[1]) * k];
          const pos = posOf(cells[id]);
          setInner(id, [ax[0], ax[1], ay[0], ay[1], so[0] - pos.x, so[1] - pos.y]);
          depth.push([Ct[2], id]);
        }
        depth.sort((a, b) => a[0] - b[0]);
        const key = depth.map((d) => d[1]).join('');
        if (key !== zOrder) { zOrder = key; depth.forEach(([, id]) => F.appendChild(faces[id].g)); }
      }
      let lastInfo = null;
      async function toggleFold() {
        if (busy) return;
        if (folded) { await unfold(); return; }
        const res = foldResult(cells);
        if (!res.info.connected) {
          kit.tick('no'); shakeAll();
          status('모든 면이 변으로 이어져야 접을 수 있어요.');
          kit.announce('모든 면이 변으로 이어져야 접을 수 있어요');
          return;
        }
        busy = true; lastInfo = res.info; restoreColors();
        kit.tick();
        await kit.tween(1500, (p) => frame(res.info, p), { ease: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2) });
        folded = true; setFoldLabel('펼치기');
        kit.recorder.log('cubenet-fold', { valid: res.valid });
        if (res.valid) {
          // 통! 하고 뛰어오른다
          await kit.tween(420, (p) => frame(res.info, 1, Math.sin(p * Math.PI) * 14));
          kit.tick('ok');
          status('정육면체가 되었어요!'); kit.announce('접어 보니 정육면체가 되었어요');
          busy = false;
          if (o.revealPairs && res.opp) { await kit.wait(700); await unfold(); revealPairs(res.opp); }
        } else {
          kit.tick('no');
          await kit.tween(500, (p) => frame(res.info, 1 - Math.sin(p * Math.PI * 3) * 0.04 * (1 - p)));
          status('겹치는 면이 생기고 빈 곳이 남아요. 다시 옮겨 봐요.'); kit.announce('접어 보니 겹치는 면이 있어 정육면체가 되지 않아요');
          await kit.wait(900); busy = false; await unfold(true);
        }
      }
      async function unfold(keepStatus) {
        if (!folded || !lastInfo) return;
        busy = true;
        await kit.tween(900, (p) => frame(lastInfo, 1 - p));
        IDS.forEach((id) => setInner(id, null));
        folded = false; busy = false; setFoldLabel('접기');
        if (!keepStatus) status();
      }
      function flatNow() { IDS.forEach((id) => setInner(id, null)); folded = false; busy = false; setFoldLabel('접기'); }
      let pairShown = false;
      function revealPairs(opp) {
        const done = new Set(); let k = 0;
        for (const a of IDS) { if (done.has(a)) continue; const b = opp[a]; done.add(a); done.add(b); faces[a].pc.setColor(PAINTS[k]); faces[b].pc.setColor(PAINTS[k]); k++; }
        pairShown = true; status('같은 색끼리 마주 보는 면이에요.');
      }
      function restoreColors() { if (!pairShown) return; pairShown = false; IDS.forEach((id) => faces[id].pc.setColor(paint[id] || faces[id].base)); }
      function shakeAll() {
        kit.tween(450, (p) => { const dx = Math.sin(p * Math.PI * 5) * 4 * (1 - p); IDS.forEach((id) => { const q = posOf(cells[id]); kit.transform(faces[id].g, { x: q.x + dx, y: q.y }); }); })
          .then(() => IDS.forEach((id) => kit.transform(faces[id].g, posOf(cells[id]))));
      }

      function state() {
        const c = {}; IDS.forEach((id) => { c[id] = cells[id].slice(); });
        const s = { cells: c };
        if (paintMode) { s.paint = {}; IDS.forEach((id) => { s.paint[id] = paint[id]; }); }
        return s;
      }
      function setState(s) {
        s = s || {};
        flatNow(); restoreColors();
        const start = s.cells || o.start || (() => { const r = {}; IDS.forEach((id, i) => { r[id] = [i % COLS, ROWS - 1 - Math.floor(i / COLS)]; }); return r; })();
        IDS.forEach((id) => { cells[id] = start[id].slice(); kit.transform(faces[id].g, posOf(cells[id])); });
        IDS.forEach((id) => setPaint(id, (s.paint && s.paint[id]) || null));
        zOrder = ''; wrongs = 0; pickFace(null); showTip(null); status();
      }
      let target = null; let wrongs = 0;
      const opposites = () => { const r = foldResult(cells); return r.valid ? r.opp : null; };
      setState({});

      const pairsOk = (opp) => PAINTS.filter((c) => { const f = IDS.filter((id) => paint[id] === c); return f.length === 2 && opp[f[0]] === f[1]; }).length;
      // 채점만 한다(화면은 바꾸지 않는다) — 확인·힌트·오답 만들기가 함께 쓴다
      function judge(t, quiet) {
        const res = foldResult(cells);
        // 접기 없는 단계(도전·출구)에서는 첫 오답에 겹치는 면 이름을 주지 않는다 — 머릿속으로 접어 보기 전에 답의 절반을 받지 않게
        const named = o.allowFold !== false || wrongs > 0;
        const wrong = (feedback, hint) => { if (!quiet) { wrongs++; shakeAll(); } return { correct: false, feedback, hint }; };
        const tryFold = o.allowFold !== false ? ' 접기를 눌러 확인해요.' : ' 머릿속으로 접어 보세요.';
        const cheer = () => { if (!quiet) IDS.forEach((id, i) => setTimeout(() => { if (!folded) hop(faces[id].g, posOf(cells[id])); }, i * 70)); };
        // 두 면이 한 줄 위에서 가운데 면 하나를 사이에 두고 있는지(한 줄 세 면의 양 끝)
        const skipLine = (a, b) => {
          const [ac, ar] = cells[a]; const [bc, br] = cells[b];
          if (!((ac === bc && Math.abs(ar - br) === 2) || (ar === br && Math.abs(ac - bc) === 2))) return false;
          const mid = [(ac + bc) / 2, (ar + br) / 2];
          return IDS.some((id) => cells[id][0] === mid[0] && cells[id][1] === mid[1]);
        };
        const ruleHint = (a) => {
          const b = res.opp && res.opp[a];
          if (b && !skipLine(a, b)) return `면 ${josa(a, '은', '는')} 한 줄 위에 짝이 없어요. 'ㄹ'자처럼 꺾여 이어진 네 면에서는 양 끝 면이 마주 보아요.${o.allowFold !== false ? ` 접기를 눌러 면 ${josa(a, '이', '가')} 어디로 가는지 보세요.` : ''}`;
          return '한 줄로 이어진 세 면에서 가운데 면을 하나 건너뛴 면끼리 마주 보아요. 변이 닿은 면은 옆면이에요.';
        };
        if (t.valid) {
          if (!res.info.connected) return wrong('떨어져 있는 면이 있어요. 6개의 면이 모두 변으로 이어져야 해요.', '꼭짓점만 닿은 것은 이어진 것이 아니에요. 변과 변이 맞닿게 놓아요.');
          if (!res.valid) {
            // 원인별 힌트: 다섯 면 줄 / 2×2 묶음 / 네 면 줄의 같은 쪽 두 면 / 그 밖(실제로 부딪히는 두 면을 알려 준다)
            const [p1, p2] = res.clash || [];
            const where = p1 && named ? ` 면 ${josa(p1, '과', '와')} 면 ${josa(p2, '이', '가')} 같은 자리에 와요.` : '';
            const wing = sameSideWings(cells);
            let hint;
            if (maxLine(cells) >= 5) hint = '한 줄에 면이 다섯 개 이상 있으면 접었을 때 겹쳐요. 한 줄은 네 면까지예요.';
            else if (res.info.cycles) hint = '네 면이 2×2 네모로 모이면 한 꼭짓점에 면이 4개 모여 접을 수 없어요.';
            else if (wing) {
              hint = '네 면 줄의 같은 쪽에 두 면을 붙이면 접었을 때 둘 다 같은 뚜껑 자리로 가서 겹쳐요. 하나는 줄 위쪽, 하나는 줄 아래쪽에 붙여 보세요.';
              if (o.showStatus && !quiet) showTip(wing.tip);
            } else hint = `겹치는 면 하나를 다른 칸으로 옮겨 봐요.${tryFold}`;
            return wrong(`접으면 겹치는 면이 생겨요.${where}`, hint);
          }
          if (t.line4 === true && !hasLine4(cells)) return wrong('정육면체 전개도는 맞아요! 그런데 네 면이 한 줄로 이어져 있지 않아요.', '네 면을 가로나 세로로 한 줄로 놓고, 남은 두 면을 위와 아래에 하나씩 붙여 보세요.');
          if (t.notCross && isCross(cells)) return wrong('네 면 줄은 맞지만 1번에서 많이 만든 십자(+) 모양이에요. 다른 모양을 만들어 봐요.', '위나 아래에 붙은 면 하나를 줄의 다른 칸 옆으로 옮겨 보세요. 그래도 정육면체가 되는지 확인해요.');
          if (t.line4 === false && hasLine4(cells)) return wrong('정육면체 전개도는 맞아요! 그런데 네 면이 한 줄로 이어진 곳이 있어요.', '세 면 줄과 두 면 줄을 계단처럼 엇갈리게 놓아 보세요.');
          if (t.shape === '3-3' && !isThreeThree(cells)) return wrong('정육면체 전개도는 맞아요! 그런데 세 면씩 두 줄로 이어진 모양이 아니에요.', '세 면을 한 줄로 놓고, 남은 세 면도 한 줄로 놓아 두 줄이 한 칸만 겹치게 이어 보세요.');
          cheer();
          return { correct: true, feedback: `정육면체의 전개도가 맞아요!${o.allowFold !== false ? ' 접기를 눌러 직접 확인해 보세요.' : ''}` };
        }
        if (t.opposite) {
          const [a, b] = t.opposite;
          if (!res.valid) return wrong('먼저 정육면체의 전개도가 되어야 해요.', '면이 겹치지 않게 놓아요.');
          const ca = paint[a];
          const same = IDS.filter((id) => ca && paint[id] === ca);
          if (ca && paint[b] === ca && same.length === 2) { cheer(); return { correct: true, feedback: `맞아요! 면 ${josa(a, '과', '와')} 면 ${josa(b, '은', '는')} 서로 마주 보아요.` }; }
          if (!ca) return wrong(`면 ${a}에 먼저 색을 칠하세요.`, '붓을 고르고 면을 눌러요.');
          const caName = PAINT_NAME[ca];
          // 면은 맞게 골랐는데 붓 색만 다를 때
          if (paint[b] && paint[b] !== ca && same.length === 1) return wrong(`면 ${josa(b, '을', '를')} 칠한 ${PAINT_NAME[paint[b]]}색이 면 ${a}의 ${caName}색과 달라요. ${caName}색 붓을 골라 다시 칠해요.`, `아래 붓에서 '${caName}'이라고 쓰인 동그라미를 누른 뒤 면을 눌러요.`);
          const other = same.find((id) => id !== a);
          if (other && res.opp[a] !== other && same.length === 2) {
            const cs = cells; const touch = Math.abs(cs[a][0] - cs[other][0]) + Math.abs(cs[a][1] - cs[other][1]) === 1;
            return wrong(touch ? `면 ${josa(other, '은', '는')} 면 ${josa(a, '과', '와')} 변이 맞닿아 있어서 접으면 옆면이 돼요.${tryFold}` : `면 ${josa(other, '은', '는')} 면 ${josa(a, '과', '와')} 마주 보지 않아요.${tryFold}`, ruleHint(a));
          }
          if (same.length > 2) return wrong(`${caName}색으로 칠한 면이 ${same.length}개예요. 면 ${josa(a, '과', '와')} 마주 보는 면은 하나뿐이에요.`, '면 하나와 마주 보는 면은 꼭 하나예요. 이웃한 면은 옆면이 돼요.');
          const others = IDS.filter((id) => id !== a && paint[id]);
          return wrong(others.length ? `면 ${josa(others[0], '을', '를')} ${PAINT_NAME[paint[others[0]]]}색으로 칠했어요. 면 ${a}처럼 ${caName}색 붓으로 마주 보는 면을 칠해요.` : `${caName}색으로 칠한 면이 아직 면 ${a}뿐이에요. ${caName}색 붓을 골라 마주 보는 면을 눌러요.${tryFold}`, ruleHint(a));
        }
        if (t.pairs) {
          if (!res.valid) return wrong('먼저 정육면체의 전개도가 되어야 해요.', '면이 겹치지 않게 놓아요.');
          if (IDS.some((id) => !paint[id])) return wrong('아직 칠하지 않은 면이 있어요.', '여섯 면을 모두 칠해요. 세 가지 색을 두 면씩 써요.');
          // 색별로 틀린 까닭을 말한다: 개수가 2가 아닌 색 → 짝이 마주 보지 않는 색
          const byColor = PAINTS.map((c) => ({ c, f: IDS.filter((id) => paint[id] === c) }));
          const many = byColor.find((x) => x.f.length > 2); const few = byColor.find((x) => x.f.length > 0 && x.f.length < 2); const none = byColor.find((x) => !x.f.length);
          if (many) return wrong(`${PAINT_NAME[many.c]}색을 칠한 면이 ${many.f.length}개예요. 한 색은 두 면에만 써요.`, `${none ? `${PAINT_NAME[none.c]}색은 아직 쓰지 않았어요. ` : ''}세 가지 색을 두 면씩 써요.`);
          if (few) return wrong(`${PAINT_NAME[few.c]}색을 칠한 면이 ${few.f.length}개뿐이에요. 한 색은 두 면에 써요.`, '세 가지 색을 두 면씩 써요.');
          const badPair = byColor.find((x) => res.opp[x.f[0]] !== x.f[1]);
          if (!badPair) { cheer(); return { correct: true, feedback: '마주 보는 면 세 쌍을 모두 찾았어요!' }; }
          const [f1, f2] = badPair.f; const touch = Math.abs(cells[f1][0] - cells[f2][0]) + Math.abs(cells[f1][1] - cells[f2][1]) === 1;
          // 맞은 짝 수는 쉬움 단계에만 — 기본 단계에서 색을 바꿔 가며 찍는 것을 줄인다
          const nOk = o.showStatus ? ` (맞은 짝 ${pairsOk(res.opp)}개)` : '';
          return wrong(`${PAINT_NAME[badPair.c]}색 면 ${josa(f1, '과', '와')} 면 ${josa(f2, '은', '는')} ${touch ? '변이 맞닿아 있어서 접으면 옆면이 돼요' : '접었을 때 마주 보지 않아요'}.${nOk}${tryFold}`, ruleHint(f1));
        }
        return { correct: false, feedback: '확인할 문제가 없어요.' };
      }

      return {
        getState: state,
        setState,
        reset() { setState({}); },
        setTarget(t) { target = t || null; status(); },
        solve(t) {
          if (t.valid) {
            const ok = foldResult(cells).valid && (t.line4 == null || hasLine4(cells) === t.line4) && !(t.notCross && isCross(cells));
            const okShape = t.shape !== '3-3' || isThreeThree(cells);
            if (!ok || !okShape) setState({ cells: t.shape === '3-3' ? NETS.three : t.line4 === false ? NETS.step : t.notCross ? NETS.zig : NETS.cross, paint: state().paint });
          }
          if (t.opposite) {
            const [a, b] = t.opposite; const col = paint[a] || 'rose';
            IDS.forEach((id) => { if (paint[id] === col) setPaint(id, null); });
            setPaint(a, col); setPaint(b, col);
          }
          if (t.pairs) {
            if (!foldResult(cells).valid) setState({ cells: NETS.cross });
            const opp = opposites(); const done = new Set(); let k = 0;
            for (const a of IDS) { if (done.has(a)) continue; done.add(a); done.add(opp[a]); setPaint(a, PAINTS[k]); setPaint(opp[a], PAINTS[k]); k++; }
          }
        },
        // forHint(힌트·자동 검사): 흔들기·틀린 횟수 세기·안내 칸 같은 화면 변화 없이 채점만 한다
        check(t, opts) { return judge(t || {}, !!(opts && opts.forHint)); },
        // 힌트 3단계: 1 개념(면 이름 없음) / 2 틀린 까닭에 맞춘 규칙 / 3 풀이 한 단계(마주 보는 짝 하나를 짚음)
        hint(t, opts) {
          t = t || {};
          const r = judge(t, true);
          const why = t.opposite || t.pairs ? '접으면 변이 맞닿은 면끼리는 옆면이 돼요. 한 줄로 이어진 세 면에서 가운데를 하나 건너뛴 면끼리 마주 보아요.'
            : '정육면체의 전개도는 6면이 변으로 이어지고, 접었을 때 겹치는 면이 없어야 해요. 한 줄은 네 면까지이고, 남은 두 면은 줄의 위와 아래에 하나씩 붙여요.';
          const lv = hintLevel(opts);
          if (r.correct) return { hint: why, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: why, correct: false, level: 1 };
          if (lv >= 3) {
            const res = foldResult(cells);
            if (t.opposite && res.valid) return { hint: `${r.hint} 면 ${josa(t.opposite[0], '과', '와')} 마주 보는 면은 면 ${t.opposite[1]}이에요.`, correct: false, level: 3 };
            if (t.pairs && res.valid) {
              const a = IDS.find((id) => paint[id] && res.opp[id] !== IDS.find((x) => x !== id && paint[x] === paint[id])) || IDS[0];
              return { hint: `${r.hint} 예를 들어 면 ${josa(a, '과', '와')} 마주 보는 면은 면 ${res.opp[a]}이에요.`, correct: false, level: 3 };
            }
          }
          return { hint: r.hint, correct: false, level: lv };
        },
        wrongAnswer(t) {
          t = t || {};
          const s = state();
          // 네 면 줄의 같은 쪽에 두 날개 / 2×3 네모 묶음 — 정육면체 전개도 그리기에서 가장 흔한 두 실수
          const WINGS = { ㄱ: [0, 0], ㄴ: [2, 0], ㄷ: [0, 1], ㄹ: [1, 1], ㅁ: [2, 1], ㅂ: [3, 1] };
          const BLOCK = { ㄱ: [0, 0], ㄴ: [1, 0], ㄷ: [2, 0], ㄹ: [0, 1], ㅁ: [1, 1], ㅂ: [2, 1] };
          if (t.valid) return Object.assign(s, { cells: t.shape === '3-3' || t.line4 === false ? BLOCK : WINGS });
          const net = foldResult(cells).valid ? s.cells : NETS.cross;
          const opp = foldResult(net).opp;
          const paintOf = (cs) => { const p = {}; IDS.forEach((id) => { p[id] = null; }); Object.assign(p, cs); return p; };
          if (t.opposite) {
            // 변이 맞닿은 이웃 면을 마주 보는 면으로 칠한다
            const [a, b] = t.opposite; const col = (s.paint && s.paint[a]) || 'rose';
            const [ac, ar] = net[a];
            const nb = IDS.find((id) => id !== a && id !== b && Math.abs(net[id][0] - ac) + Math.abs(net[id][1] - ar) === 1) || IDS.find((id) => id !== a && id !== b);
            return { cells: net, paint: paintOf({ [a]: col, [nb]: col }) };
          }
          if (t.pairs) {
            // 한 쌍만 맞게 칠하고, 남은 네 면은 옆면끼리 짝지어 칠한다
            const x = IDS[0]; const rest = IDS.filter((id) => id !== x && id !== opp[x]);
            const y = rest[0]; const z = rest.find((id) => id !== y && id !== opp[y]);
            const p = { [x]: PAINTS[0], [opp[x]]: PAINTS[0], [y]: PAINTS[1], [z]: PAINTS[1] };
            rest.filter((id) => !(id in p)).forEach((id) => { p[id] = PAINTS[2]; });
            return { cells: net, paint: paintOf(p) };
          }
          return null;
        },
        // 교사 시연: 주어진 전개도로 조각이 옮겨 간 뒤 접힌다
        async demo(t) {
          const target = (t && t.cells) || NETS.cross;
          if (folded) await unfold();
          const from = {}; IDS.forEach((id) => { from[id] = posOf(cells[id]); });
          await kit.tween(800, (p) => IDS.forEach((id) => { const to = posOf(target[id]); kit.transform(faces[id].g, { x: from[id].x + (to.x - from[id].x) * p, y: from[id].y + (to.y - from[id].y) * p }); }));
          IDS.forEach((id) => { cells[id] = target[id].slice(); });
          await kit.wait(300);
          await toggleFold();
          await kit.wait(900);
          await unfold();
        },
      };
    },
  });
})(window.PaperKit);
