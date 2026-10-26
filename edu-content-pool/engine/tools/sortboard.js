/* 분류판 — 종이 단추 카드를 기준에 따라 칸에 나누어 넣고, 칸마다 몇 개인지 센다(2학년 1학기 5. 분류하기).
 * 순서: ① 기준 단추(색깔·구멍 수·모양·'예쁜 것/안 예쁜 것')를 고른다 → ② 그 기준의 값만큼 칸이 생긴다 → ③ 카드를 끌어 넣는다
 *       → ④ (세기 문항) 칸마다 몇 개인지 − / + 로 수를 넣는다.
 * '예쁜 것/안 예쁜 것'은 분명하지 않은 기준이다. 고르면 칸을 만들지 않고 '친구마다 다르게 나눌 수 있어요'라고 알려 준다.
 * 기준을 바꾸면 카드가 모두 카드 칸으로 돌아온다(같은 카드라도 기준이 바뀌면 묶음이 바뀐다).
 * 옵션: cards(카드 id 배열, 예 'r2c' = 빨강·구멍 2개·동그라미), criteria(기준 단추 목록, 기본 ['색','구멍','모양']),
 *       by(기준을 미리 정해 잠금 — 시연·활동지), limit(쉬움: 카드 수 줄이기), more(도전: 덱에서 카드 n장 더),
 *       instant(쉬움: 맞지 않는 칸에 넣으면 까닭을 말하고 되돌아옴), showCount(칸 이름 옆에 지금 개수 — 쉬움),
 *       askCount(칸마다 수 넣기; 문항 target.counts가 있으면 setTarget으로도 켜짐),
 *       revealAfterCheck(showCount가 켜져 있어도 확인을 누르기 전에는 개수를 숨김), print
 * 상태: { by, placed: { 카드id: 칸 값|null }, counts?: { 칸 값: 수|null }, unclear?: '예쁜' 기준을 고른 횟수 }
 * target: { by: '색' } | { clear: true, not?: '색' }(분명한 기준이면 무엇이든) + counts?: true
 * 키보드: 기준 단추 Tab+Enter, 카드 Enter/Space = 다음 칸으로, 1~3 = 그 칸, 0 = 카드 칸. 방향키로 옮긴 뒤 Enter = 그 자리.
 */
(function (K) {
  'use strict';
  const COLORS = { r: { name: '빨강', adj: '빨간', color: 'rose', fill: '#E8655A', layer: '#B8463D' }, b: { name: '파랑', adj: '파란', color: 'sky', fill: '#5E9BD6', layer: '#3F74A8' }, y: { name: '노랑', adj: '노란', color: 'buttercup', fill: '#F2C14E', layer: '#C3952A' } };
  const SHAPES = { c: '동그라미', s: '네모', t: '세모' };
  const ATTR = {
    색: { label: '색깔', of: (c) => c.색, values: ['빨강', '파랑', '노랑'] },
    구멍: { label: '구멍 수', of: (c) => c.구멍, values: ['구멍 2개', '구멍 4개'] },
    모양: { label: '모양', of: (c) => c.모양, values: ['동그라미', '네모', '세모'] },
    예쁜: { label: '예쁜 것 / 안 예쁜 것', unclear: true },
  };
  const josa = (w, a, b) => { const c = w.charCodeAt(w.length - 1); if (c < 0xac00 || c > 0xd7a3) return w + b; return w + ((c - 0xac00) % 28 ? a : b); };
  // '으로/로': 받침이 없거나 ㄹ 받침이면 '로'(색깔로, 구멍 수로, 모양으로)
  const ro = (w) => { const c = w.charCodeAt(w.length - 1); const j = c >= 0xac00 && c <= 0xd7a3 ? (c - 0xac00) % 28 : 0; return w + (j && j !== 8 ? '으로' : '로'); };
  const reduceMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cardOf = (id) => {
    const m = /^([rby])([24])([cst])$/.exec(id); if (!m) return null;
    const col = COLORS[m[1]];
    return { id, 색: col.name, 구멍: `구멍 ${m[2]}개`, 모양: SHAPES[m[3]], holes: Number(m[2]), shape: m[3], col, label: `${col.adj} ${SHAPES[m[3]]} 단추, 구멍 ${m[2]}개` };
  };
  // 장면 모티프 '단추' — 도입 그림에 분류할 단추를 놓는다(교구와 같은 종이 단추)
  if (K.motifs && !K.motifs.button) {
    K.motifs.button = (st, p, o) => {
      const g = K.el('g', null, p); const col = COLORS[o.c || 'r'];
      K.piece(st, g, { shape: { type: 'circle', r: 14 }, color: col.color, depth: 2, fill: col.fill });
      (o.holes === 4 ? [[-4, -4], [4, -4], [-4, 4], [4, 4]] : [[-4, 0], [4, 0]]).forEach(([x, y]) => K.el('circle', { cx: x, cy: y, r: 2, fill: '#3D352E' }, g));
      K.transform(g, { x: o.x, y: o.y, s: o.s || 1 });
      return g;
    };
  }
  const DECK = [];
  for (const c of 'rby') for (const h of '24') for (const s of 'cst') DECK.push(`${c}${h}${s}`);

  K.registerTool('sortboard', {
    name: '분류판',
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print;
      let ids = (o.cards || ['r2c', 'b4s', 'y2t', 'r4s', 'b2c', 'y4c']).filter((x) => cardOf(x));
      if (o.limit) ids = ids.slice(0, o.limit);
      if (o.more) ids = ids.concat(DECK.filter((x) => !ids.includes(x)).filter((_, i) => i % 3 === 1).slice(0, o.more));
      const criteria = (o.criteria || ['색', '구멍', '모양']).filter((k) => ATTR[k]);
      let by = null; let unclear = 0; let counts = {}; let askCount = !!o.askCount; let revealed = false; let target = null;

      const W = 560; const BY = 8; const BH = 200; const GAP = 10; const TY = BY + BH + 12;
      const PER = 6; const trayRows = Math.max(1, Math.ceil(ids.length / PER));
      const TH = 26 + trayRows * 84; const H = TY + TH + 8;
      const st = kit.stage(box, { viewBox: [W, H], label: '분류판. 기준을 고르고 단추 카드를 알맞은 칸에 나누어 넣어요.' });
      if (print) st.svg.setAttribute('viewBox', o.by ? `0 0 ${W} ${BY + BH + 6}` : `0 ${TY - 4} ${W} ${TH + 10}`);

      // ---- 기준 단추 줄(교구 위) + 안내 줄·세기 줄(교구 아래) ----
      let bar = null; let msg = null; let countRow = null; const critBtns = {};
      if (!print) {
        bar = document.createElement('div');
        bar.className = 'sb-criteria'; bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', '무엇으로 나눌까요');
        bar.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:8px';
        bar.innerHTML = `<span style="font-weight:700">무엇으로 나눌까요?</span>${criteria.map((k) => `<button type="button" class="pl-btn pl-btn--small sb-crit" data-by="${k}" aria-pressed="false" tabindex="0" style="min-height:44px">${ATTR[k].label}</button>`).join('')}`;
        bar.querySelectorAll('[data-by]').forEach((b) => { critBtns[b.dataset.by] = b; b.addEventListener('click', () => choose(b.dataset.by)); });
        // 방향키: 기준 단추 사이를 옮겨 다니며 고른다(라디오 묶음처럼)
        bar.addEventListener('keydown', (e) => {
          const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; const b = e.target.closest('[data-by]');
          if (!d || !b) return;
          e.preventDefault();
          const i = (criteria.indexOf(b.dataset.by) + d + criteria.length) % criteria.length;
          critBtns[criteria[i]].focus(); choose(criteria[i]);
        });
        if (o.by) bar.style.display = 'none';
        box.prepend(bar);
        msg = document.createElement('p');
        msg.className = 'sb-msg'; msg.setAttribute('aria-live', 'polite');
        msg.style.cssText = 'margin:8px 2px 0;min-height:1.5em;font-weight:700;line-height:1.45;word-break:keep-all;text-wrap:pretty';
        box.appendChild(msg);
        countRow = document.createElement('div');
        countRow.className = 'sb-counts'; countRow.setAttribute('role', 'group'); countRow.setAttribute('aria-label', '칸마다 몇 개인지 수 넣기');
        countRow.style.cssText = 'display:none;flex-wrap:wrap;gap:10px 16px;align-items:center;justify-content:center;margin-top:8px';
        box.appendChild(countRow);
        const bump = (v, d, refocus) => {
          const cur = counts[v];
          counts[v] = Math.max(0, Math.min(20, (cur == null ? 0 : cur) + d));
          paintCounts(); kit.tick(); kit.recorder.log('sortboard', state());
          kit.announce(`${v} ${counts[v]}개`);
          if (refocus) { const f = countRow.querySelector(refocus(v)); if (f) f.focus(); }
        };
        countRow.addEventListener('click', (e) => {
          const b = e.target.closest('button[data-v]'); if (!b) return;
          bump(b.dataset.v, Number(b.dataset.d), (v) => `button[data-v="${v}"][data-d="${b.dataset.d}"]`);
        });
        // 수 칸은 스핀 단추: 위·오른쪽 방향키 = 하나 더, 아래·왼쪽 = 하나 적게
        countRow.addEventListener('keydown', (e) => {
          const sp = e.target.closest('[role="spinbutton"]'); const d = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key];
          if (!sp || !d) return;
          e.preventDefault(); bump(sp.dataset.v, d, (v) => `[role="spinbutton"][data-v="${v}"]`);
        });
      }
      const say = (t) => { if (msg) msg.textContent = t; kit.announce(t); };

      // ---- 칸(판): 기준이 정해질 때마다 다시 그린다(움직이지 않는 판이라 다시 만들어도 된다) ----
      const boardL = st.layer('board'); const cardL = st.layer('cards');
      let boards = []; // {value, x, w, tagT}
      const values = () => (by && ATTR[by].values) || [];
      function drawBoards() {
        boardL.textContent = '';
        const vs = values();
        if (!vs.length) {
          kit.piece(st, boardL, { shape: { type: 'rect', x: 12, y: BY, w: W - 24, h: BH, rx: 16 }, color: 'cream', depth: 1, fill: '#FFF9EE' });
          kit.el('rect', { x: 26, y: BY + 14, width: W - 52, height: BH - 28, rx: 12, fill: 'none', stroke: P.lavender.layer, 'stroke-width': 2, 'stroke-dasharray': '8 6' }, boardL);
          if (!print) kit.el('text', { x: W / 2, y: BY + BH / 2 + 7, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: P.lavender.dark }, boardL).textContent = '기준을 고르면 칸이 생겨요';
          boards = []; return;
        }
        const bw = (W - 24 - GAP * (vs.length - 1)) / vs.length;
        const tint = ['peach', 'mint', 'lavender'];
        boards = vs.map((value, i) => {
          const x = 12 + i * (bw + GAP);
          const g = kit.el('g', { 'aria-label': `${value} 칸` }, boardL);
          kit.piece(st, g, { shape: { type: 'rect', x, y: BY, w: bw, h: BH, rx: 16 }, color: tint[i % 3], depth: 2, fill: P[tint[i % 3]].light, texture: !print });
          kit.piece(st, g, { shape: { type: 'rect', x: x + bw / 2 - 66, y: BY + 8, w: 132, h: 32, rx: 16 }, color: tint[i % 3], depth: 1 });
          const tagT = kit.el('text', { x: x + bw / 2, y: BY + 32, 'text-anchor': 'middle', 'font-size': 22, class: 'pk-text', fill: P[tint[i % 3]].dark }, g);
          return { value, x, w: bw, tagT };
        });
        paintTags();
      }
      const liveCount = () => !!o.showCount && !print && !(o.revealAfterCheck && !revealed);
      const inBoard = (v) => cards.filter((c) => c.at === v).length;
      // 활동지에서는 칸 이름을 비운다('어떤 기준으로 나누었을까요?'의 답이 되므로). printTags면 보인다.
      function paintTags() { boards.forEach((b) => { b.tagT.textContent = print && !o.printTags ? '(        )' : liveCount() ? `${b.value} · ${inBoard(b.value)}개` : b.value; }); }
      function paintCounts() {
        if (!countRow) return;
        const show = askCount && boards.length > 0;
        countRow.style.display = show ? 'flex' : 'none';
        if (!show) { countRow.innerHTML = ''; return; }
        countRow.innerHTML = `<span style="font-weight:700;flex-basis:100%;text-align:center">칸마다 몇 개인지 세어 넣어요</span>${boards.map((b) => {
          const n = counts[b.value];
          return `<span style="display:inline-flex;align-items:center;gap:6px"><b>${b.value}</b><button type="button" class="pl-btn pl-btn--small" data-v="${b.value}" data-d="-1" aria-label="${b.value} 하나 적게" style="min-width:44px;min-height:44px"><i class="fi fi-rr-minus" aria-hidden="true" style="font-size:18px"></i></button><span role="spinbutton" tabindex="0" data-v="${b.value}" aria-label="${b.value} 개수" aria-valuemin="0" aria-valuemax="20" ${n == null ? 'aria-valuetext="아직 안 셈"' : `aria-valuenow="${n}"`} style="display:inline-block;min-width:2.2em;min-height:44px;line-height:44px;text-align:center;font-size:22px;font-weight:800;border-radius:10px">${n == null ? '?' : n}</span><button type="button" class="pl-btn pl-btn--small" data-v="${b.value}" data-d="1" aria-label="${b.value} 하나 더" style="min-width:44px;min-height:44px"><i class="fi fi-rr-plus" aria-hidden="true" style="font-size:18px"></i></button></span>`;
        }).join('')}`;
      }

      // ---- 카드(단추) ----
      const cards = ids.map((id, k) => {
        const d = cardOf(id);
        const g = kit.el('g', { class: 'sb-card' }, cardL);
        kit.el('rect', { x: -39, y: -39, width: 78, height: 78, class: 'pk-hit' }, g);
        kit.piece(st, g, { shape: { type: 'rect', w: 70, h: 70, rx: 14 }, color: 'cream', depth: 1, fill: '#FFFDF8' });
        const sh = d.shape === 'c' ? { type: 'circle', r: 25 } : d.shape === 's' ? { type: 'rect', w: 46, h: 46, rx: 7 } : { type: 'poly', points: '0,-27 27,21 -27,21' };
        const ic = kit.el('g', null, g);
        const p = kit.piece(st, ic, { shape: sh, color: d.col.color, depth: 2, fill: d.col.fill });
        p.under.forEach((u) => u.setAttribute('fill', d.col.layer));
        const hy = d.shape === 't' ? 6 : 0; const sp = d.shape === 't' ? 6 : 7.5;
        const holes = d.holes === 2 ? [[-sp, hy], [sp, hy]] : [[-sp, hy - sp], [sp, hy - sp], [-sp, hy + sp], [sp, hy + sp]];
        holes.forEach(([x, y]) => kit.el('circle', { cx: x, cy: y, r: 3.6, fill: '#3D352E', 'pointer-events': 'none' }, ic));
        if (print) kit.transform(ic, { y: -6, s: 0.86 }); // 아래에 색 이름 자리를 낸다
        // 흑백 활동지에서도 색을 알 수 있게 색 이름을 작게 적는다(화면에서는 색으로 본다)
        if (print) kit.el('text', { x: 0, y: 32, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#000' }, g).textContent = d.색;
        g.setAttribute('aria-label', d.label);
        const c = Object.assign(d, { g, at: null, k });
        if (!print) bindCard(c);
        return c;
      });
      const byId = (id) => cards.find((c) => c.id === id);
      const nameOf = (c) => `${c.col.adj} ${c.모양} 단추`;

      function slotOf(c) {
        if (c.at && boards.length) {
          const b = boards.find((x) => x.value === c.at);
          if (b) {
            const mates = cards.filter((x) => x.at === c.at); const i = mates.indexOf(c); const n = mates.length;
            const cols = boards.length === 2 ? 4 : 3; const rows = Math.max(1, Math.ceil(n / cols));
            const s = Math.min(0.78, (b.w - 12) / cols / 76, (BH - 50) / rows / 76);
            const cw = (b.w - 12) / cols; const ch = Math.min(76 * s + 4, (BH - 50) / rows);
            const inRow = Math.min(cols, n - Math.floor(i / cols) * cols);
            return { x: b.x + b.w / 2 + ((i % cols) - (inRow - 1) / 2) * cw, y: BY + 48 + ch * (Math.floor(i / cols) + 0.5), s, r: 0 };
          }
        }
        if (c.float) return { x: c.float.x, y: c.float.y, s: 1, r: 0 };
        const tray = cards.filter((x) => !x.at || !boards.length); const i = Math.max(0, tray.indexOf(c));
        const n = tray.length; const rows = Math.max(1, Math.ceil(n / PER)); const row = Math.floor(i / PER);
        const inRow = row === rows - 1 ? n - row * PER : PER;
        return { x: W / 2 + ((i % PER) - (inRow - 1) / 2) * 88, y: TY + 13 + 42 + row * 84, s: 1, r: 0 };
      }
      const anims = new WeakMap();
      function moveTo(c, t, animate) {
        const token = {}; anims.set(c.g, token);
        if (!animate || reduceMotion) { kit.transform(c.g, t); return Promise.resolve(); }
        const f = Object.assign({ x: 0, y: 0, s: 1, r: 0 }, c.g.__pk);
        return kit.tween(300, (q) => { if (anims.get(c.g) !== token) return; kit.transform(c.g, { x: f.x + (t.x - f.x) * q, y: f.y + (t.y - f.y) * q, s: f.s + (t.s - f.s) * q, r: f.r * (1 - q) }); });
      }
      const layout = (animate, except) => cards.forEach((c) => { if (c !== except) moveTo(c, slotOf(c), animate); });
      function valueAt(x, y) {
        if (y < BY || y > BY + BH) return null;
        const b = boards.find((q) => x >= q.x - GAP / 2 && x <= q.x + q.w + GAP / 2);
        return b ? b.value : null;
      }
      function labelAll() { cards.forEach((c) => c.g.setAttribute('aria-label', `${c.label}. ${c.at ? `${c.at} 칸에 있음` : '아직 나누지 않음'}.${boards.length ? ' Enter를 누르면 다음 칸으로 옮겨요.' : ' 먼저 기준을 골라요.'}`)); }

      // 카드 칸 아래로 보내 놓은 카드 테두리
      let trayDrawn = false;
      function drawTray() {
        if (trayDrawn) return; trayDrawn = true;
        const T = kit.el('g', null, boardL.parentNode.insertBefore(kit.el('g', { class: 'pk-layer pk-layer--tray' }), boardL.nextSibling));
        kit.piece(st, T, { shape: { type: 'rect', x: 12, y: TY, w: W - 24, h: TH, rx: 16 }, color: 'cream', depth: 2, fill: '#FFF9EE' });
        if (!print) kit.el('text', { x: 28, y: TY + 17, 'font-size': 13, class: 'pk-text', fill: P.peach.dark, opacity: 0.85 }, T).textContent = '단추 카드';
      }

      function placed(c, via) {
        revealed = false;
        labelAll(); paintTags();
        if (o.instant && c.at && ATTR[by].of(c) !== c.at) {
          kit.tick('no');
          say(`이 단추는 ${ATTR[by].of(c)}예요. ${ATTR[by].label}만 보고 넣어요.`);
          setTimeout(() => { c.at = null; layout(true); labelAll(); paintTags(); kit.recorder.log('sortboard', state()); }, 650);
        } else {
          kit.tick(o.instant && c.at ? 'ok' : undefined);
          if (msg) msg.textContent = '';
          kit.announce(c.at ? `${nameOf(c)}를 ${c.at} 칸에 넣었어요.` : `${nameOf(c)}를 카드 칸으로 돌려놓았어요.`);
          if (c.at) { const s = slotOf(c).s; kit.spring(s * 1.15, s, { stiffness: 300, damping: 12, onUpdate: (v) => kit.transform(c.g, { s: v }) }); }
        }
        kit.recorder.log('sortboard', Object.assign({ via }, state()));
      }
      function needBy() { say('먼저 무엇으로 나눌지 위에서 기준을 골라요.'); kit.tick('no'); }

      function bindCard(c) {
        kit.drag(st, c.g, {
          bounds: [20, 20, W - 20, H - 20],
          onStart() { c.keyMoved = false; anims.set(c.g, {}); kit.transform(c.g, { s: Math.max(1.06, ((c.g.__pk && c.g.__pk.s) || 1) * 1.06), r: -4, cx: 0, cy: 0 }); kit.tick(); },
          snap(x, y) {
            if (!boards.length && y < TY) { needBy(); c.float = null; const t = slotOf(c); kit.transform(c.g, { s: t.s, r: 0 }); return t; }
            c.at = valueAt(x, y);
            c.float = null;
            const home = c.at ? null : slotOf(c);
            c.float = !c.at && home && y > TY && Math.hypot(x - home.x, y - home.y) > 40 ? { x, y: Math.max(y, TY + 40) } : null;
            const t = slotOf(c); layout(true, c); kit.transform(c.g, { s: t.s, r: 0 }); return t;
          },
          onDrop(_x, _y, via) { placed(c, via); },
          keyActivate() {
            if (!boards.length) { c.keyMoved = false; layout(true); needBy(); return; }
            const cur = c.g.__pk;
            if (c.keyMoved) c.at = valueAt(cur.x, cur.y);
            else { const vs = values(); const i = c.at ? vs.indexOf(c.at) : -1; c.at = i + 1 < vs.length ? vs[i + 1] : null; }
            c.keyMoved = false; c.float = null;
            layout(true); placed(c, 'keyboard');
          },
        });
        c.g.addEventListener('keydown', (e) => {
          if (e.key.startsWith('Arrow')) { c.keyMoved = true; anims.set(c.g, {}); return; }
          const k = Number(e.key); const vs = values();
          if (e.key === ' ' || !Number.isInteger(k) || k < 0 || k > vs.length) return;
          e.preventDefault();
          if (!vs.length) { needBy(); return; }
          c.keyMoved = false; c.float = null; c.at = k === 0 ? null : vs[k - 1]; layout(true); placed(c, 'keyboard');
        });
      }

      // ---- 기준 고르기 ----
      function paintCrit() {
        Object.entries(critBtns).forEach(([k, b]) => {
          const on = k === by; b.setAttribute('aria-pressed', String(on));
          b.style.background = on ? 'var(--pc-peach-light, #FBE3D6)' : '';
          b.style.boxShadow = on ? '0 0 0 3px var(--pc-peach-layer, #E9A383)' : '';
        });
      }
      function setBy(k, quiet) {
        by = k && ATTR[k] && !ATTR[k].unclear ? k : null;
        cards.forEach((c) => { c.at = null; c.float = null; });
        counts = {}; revealed = false;
        drawBoards(); paintCrit(); paintCounts(); labelAll(); layout(!quiet);
      }
      function choose(k) {
        if (ATTR[k].unclear) {
          unclear++;
          kit.tick('no');
          say('‘예쁜 것’은 친구마다 다르게 나눌 수 있어요. 누가 나누어도 똑같이 나뉘는 기준을 골라요.');
          kit.recorder.log('sortboard', state());
          return;
        }
        if (k === by) return;
        const moved = cards.some((c) => c.at);
        setBy(k);
        kit.tick();
        say(moved ? `기준을 ${ro(ATTR[k].label)} 바꾸었어요. 단추를 다시 나누어요.` : `${ro(ATTR[k].label)} 나누어요. 칸이 ${values().length}개 생겼어요.`);
        kit.recorder.log('sortboard', state());
      }

      function state() {
        const s = { by, placed: Object.fromEntries(cards.map((c) => [c.id, c.at])) };
        if (askCount) s.counts = Object.fromEntries(values().map((v) => [v, counts[v] == null ? null : counts[v]]));
        if (unclear) s.unclear = unclear;
        return s;
      }
      const truth = (k) => Object.fromEntries((ATTR[k].values || []).map((v) => [v, cards.filter((c) => ATTR[k].of(c) === v).length]));
      const pickBy = (t) => (t.by && ATTR[t.by] && !ATTR[t.by].unclear ? t.by : criteria.find((k) => !ATTR[k].unclear && k !== t.not) || '색');
      function apply(k, withCounts) {
        setBy(k, true);
        cards.forEach((c) => { c.at = ATTR[k].of(c); });
        if (withCounts) counts = truth(k);
        layout(false); labelAll(); paintTags(); paintCounts();
      }
      function flagWrong(list) {
        list.forEach((c) => {
          c.g.classList.add('pk-no');
          const base = Object.assign({}, c.g.__pk);
          kit.tween(500, (q) => kit.transform(c.g, { r: Math.sin(q * Math.PI * 4) * 6 * (1 - q), cx: 0, cy: 0 })).then(() => kit.transform(c.g, { r: base.r || 0 }));
          setTimeout(() => c.g.classList.remove('pk-no'), 2500);
        });
      }

      drawTray(); drawBoards();
      if (o.by) setBy(o.by, true); else { labelAll(); layout(false); }

      return {
        getState: state,
        setState(s) {
          s = s || {};
          unclear = s.unclear || 0;
          setBy(s.by || o.by || null, true);
          if (by && s.sorted) cards.forEach((c) => { c.at = ATTR[by].of(c); });
          else if (by && s.placed) cards.forEach((c) => { const v = s.placed[c.id]; c.at = values().includes(v) ? v : null; });
          if (s.counts) counts = Object.assign({}, s.counts);
          layout(false); labelAll(); paintTags(); paintCounts();
        },
        setTarget(t) { target = t || null; if (t && t.counts) { askCount = true; paintCounts(); } },
        reset() { unclear = 0; setBy(o.by || null, false); if (msg) msg.textContent = ''; },
        solve(t) { t = t || target || {}; apply(pickBy(t), !!(t.counts || askCount)); },
        check(t, opts) {
          const r = judge(t, !!(opts && opts.forHint));
          // 칸 개수는 맞힌 확인에서만 보인다(틀린 확인을 연달아 눌러 개수를 읽어 가지 않게). 힌트용 검사는 아무것도 바꾸지 않는다
          if (!(opts && opts.forHint) && r.correct) { revealed = true; paintTags(); }
          return r;
        },
        hint(t) {
          t = t || target || {};
          const r = judge(t, true);
          if (r.correct) return { hint: '모두 알맞게 나누었어요.', correct: true };
          if (!by && !unclear) return { hint: '누가 나누어도 똑같이 나뉘는 기준을 골라요. 색깔·구멍 수·모양은 누가 보아도 같아요.' };
          // 수를 넣는 단계의 자동 힌트는 개수를 말하지 않는다 — 그대로 쓴다
          return { hint: r.hint || '한 번 정한 기준만 보고, 단추를 하나씩 알맞은 칸에 넣어요.', correct: false };
        },
        // 모의 수업·자동 검사용 오답: '예쁜 것'처럼 분명하지 않은 기준 / 쓰지 말라는 기준 / 단추 하나를 다른 기준으로 보고 넣기 / 하나를 두 번 세기
        // 지금 판과 같은 오답은 건너뛴다(같은 오답을 다시 내면 시도로 세지 않는다)
        wrongAnswer(t) {
          t = t || target || {};
          const want = pickBy(t); const withCounts = !!(t.counts || askCount);
          const sorted = (k) => Object.fromEntries(cards.map((c) => [c.id, ATTR[k].of(c)]));
          const vs = ATTR[want].values; const list = [];
          if (t.clear && !t.not && criteria.includes('예쁜')) list.push({ by: null, placed: Object.fromEntries(cards.map((c) => [c.id, null])), unclear: 1 });
          if (t.not && criteria.includes(t.not)) list.push(Object.assign({ by: t.not, placed: sorted(t.not) }, withCounts ? { counts: truth(t.not) } : {}));
          if (withCounts) {
            // 나누기는 맞고, 한 칸을 하나 더(센 단추를 다시 셈) 또는 하나 덜 세었다
            const real = truth(want);
            vs.forEach((v) => [1, -1].forEach((d) => { if (real[v] + d >= 0) list.push({ by: want, placed: sorted(want), counts: Object.assign({}, real, { [v]: real[v] + d }) }); }));
          }
          // 다른 기준으로 같은 단추 옆에 넣는다: 한 칸에 모양(또는 색)이 같은 단추가 섞이는 실수 → 그 밖의 칸 하나 틀리기
          const other = Object.keys(ATTR).filter((k) => k !== want && !ATTR[k].unclear);
          const moved = (c, v) => { const pm = sorted(want); pm[c.id] = v; return Object.assign({ by: want, placed: pm }, withCounts ? { counts: truth(want) } : {}); };
          cards.forEach((c) => other.forEach((k) => {
            const mate = cards.find((x) => x !== c && ATTR[k].of(x) === ATTR[k].of(c) && ATTR[want].of(x) !== ATTR[want].of(c));
            if (mate) list.push(moved(c, ATTR[want].of(mate)));
          }));
          cards.forEach((c) => vs.filter((v) => v !== ATTR[want].of(c)).forEach((v) => list.push(moved(c, v))));
          const key = (x) => JSON.stringify([x.by || null, x.placed, x.counts || null, x.unclear || 0]);
          const cur = key(state());
          return list.find((x) => key(x) !== cur) || list[0] || null;
        },
        // 교사 시연: 기준이 정해지고 카드가 하나씩 제 칸으로 날아간다. 다시 누르면 처음부터.
        async demo(t) {
          t = t || {};
          setBy(pickBy(t), false);
          if (bar) paintCrit();
          await kit.wait(500);
          for (const c of cards) {
            c.at = ATTR[by].of(c); labelAll();
            cardL.appendChild(c.g);
            layout(true);
            kit.tick(); paintTags();
            await kit.wait(420);
          }
          revealed = true; paintTags();
          kit.announce(`${ro(ATTR[by].label)} 나누었어요.`);
        },
      };
      function judge(t, quiet) {
          t = t || target || {};
          if (!by) {
            if (unclear) return { correct: false, feedback: '‘예쁜 것’은 사람마다 생각이 달라서 분명한 기준이 아니에요. 다른 기준 단추를 골라요.', hint: '색깔·구멍 수·모양처럼 누가 보아도 똑같이 말할 수 있는 것을 골라요.' };
            return { correct: false, incomplete: true, feedback: '먼저 무엇으로 나눌지 위에서 기준을 골라요.', hint: '색깔·구멍 수·모양 가운데 하나를 골라요.' };
          }
          if (t.by && t.by !== by) return { correct: false, feedback: `문제는 ${ro(ATTR[t.by].label)} 나누라고 했어요. 지금은 ${ro(ATTR[by].label)} 나누고 있어요.`, hint: `위의 ‘${ATTR[t.by].label}’ 단추를 눌러 다시 나누어요.` };
          if (t.not && t.not === by) return { correct: false, feedback: `${ATTR[t.not].label} 말고 다른 기준으로 나누어 보세요.`, hint: '남은 기준 단추 가운데 하나를 골라요.' };
          const A = ATTR[by];
          const left = cards.filter((c) => !c.at);
          if (left.length) return { correct: false, feedback: `아직 나누지 않은 단추가 ${left.length}개 있어요.`, hint: `‘${nameOf(left[0])}’의 ${josa(A.label, '을', '를')} 보고 알맞은 칸에 넣어요.` };
          const wrong = cards.filter((c) => A.of(c) !== c.at);
          if (wrong.length) {
            if (!quiet) flagWrong(wrong);
            // 한 칸 안의 단추가 고른 기준이 아니라 다른 기준으로 같으면 '기준이 섞였다'고 짚는다
            for (const b of boards) {
              const inside = cards.filter((c) => c.at === b.value);
              if (inside.length < 2 || !inside.some((c) => wrong.includes(c))) continue;
              const other = Object.keys(ATTR).find((k) => k !== by && !ATTR[k].unclear && inside.every((c) => ATTR[k].of(c) === ATTR[k].of(inside[0])));
              if (other) return { correct: false, feedback: `${b.value} 칸의 단추는 ${josa(A.label, '이', '가')} 아니라 ${josa(ATTR[other].label, '이', '가')} 같아요. 기준이 섞였어요.`, hint: `한 번 정한 기준(${A.label})만 끝까지 보고 나누어요. 흔들리는 단추의 ${josa(A.label, '을', '를')} 다시 보세요.` };
            }
            return { correct: false, feedback: `${wrong.length}개가 맞지 않는 칸에 들어가 있어요. 흔들리는 단추의 ${josa(A.label, '을', '를')} 다시 보세요.`, hint: `‘${nameOf(wrong[0])}’는 ${A.of(wrong[0])} 칸에 들어가요.` };
          }
          if (t.counts || askCount) {
            const real = truth(by);
            const empty = values().filter((v) => counts[v] == null);
            if (empty.length) return { correct: false, incomplete: true, feedback: '잘 나누었어요. 이제 칸마다 몇 개인지 세어 아래에 수를 넣어요.', hint: '단추를 하나씩 짚으며 세어요.' };
            const off = values().filter((v) => counts[v] !== real[v]);
            if (off.length) {
              const v = off[0]; const sum = values().reduce((a, x) => a + counts[x], 0);
              const tip = sum !== cards.length ? ` 넣은 수를 모두 더하면 ${sum}개인데, 단추는 모두 ${cards.length}개예요.` : '';
              return { correct: false, feedback: `나누기는 맞아요. ${v} 칸의 수를 다시 세어 보세요.${tip}`, hint: `${v} 칸의 단추를 왼쪽부터 하나씩 짚으며 세어요. 센 단추는 다시 세지 않아요.` };
            }
            const parts = values().map((v) => (by === '구멍' ? `${v}인 단추 ${real[v]}개` : `${v} ${real[v]}개`)).join(', ');
            return { correct: true, feedback: `맞아요! ${ro(A.label)} 나누면 ${parts}예요. 모두 ${cards.length}개예요.` };
          }
          return { correct: true, feedback: `맞아요! ${ro(A.label)} 나누니 누가 나누어도 똑같이 나뉘어요.` };
      }
    },
  });
})(window.PaperKit);
