/* 한살이 회전판 — 둥근 판 위 자리에 한살이·순환 단계를 화살표 차례대로 놓는다. 공통 카드 판(_cards.js) 위의 겉모양.
 * 과학(동물·식물의 한살이, 물의 순환, 계절의 변화), 통합교과(생태·자람), 실과(작물 기르기), 사회(재활용 순환)에 쓴다.
 *
 * | 모드  | 화면                                                         | slots                                              | target |
 * |-------|--------------------------------------------------------------|----------------------------------------------------|--------|
 * | order | 둥근 판의 자리(맨 위에서 시계 방향)에 단계 카드를 화살표 차례로 | 수 또는 자리 이름 — 없으면 카드 수                    | { order: [카드id…], cyclic?: true } cyclic이면 어느 자리에서 시작해도 차례만 맞으면 정답 |
 * | match | 둥근 판의 이름 붙은 자리(예: '알에서 나온 뒤')에 카드 한 장       | 자리 이름(필수)                                     | { match: { 자리id: 카드id } } |
 * | sort·fill·pick | 공통 카드 판의 기본 배치(예: 동물을 사는 곳으로 나누기)   | _cards.js 표                                        | _cards.js 표 |
 *
 * 옵션: 공통 카드 판 옵션 전부 + center(판 가운데 글, 예 '배추흰나비의 한살이'), cycle(참(기본) = 마지막에서 처음으로 돌아가는 화살표를 그림.
 *       한살이가 끝나는 이야기면 거짓), spin(참(기본) = 무대 아래 '차례대로 따라가 보기' 단추 — 자리를 1번부터 차례로 빛냄, 상태는 바꾸지 않음).
 * 카드: { id, text: '알', motif?: 'egg' | big?: '1' , back?: '약 2주' }. 자리 수는 3~8개가 알맞다.
 * 이 파일이 더하는 모티프(카드·칸·도입 그림 scene에서 씀): egg 알, larva 애벌레, pupa 번데기, butterfly 나비, seed 씨, sprout 싹, tadpole 올챙이, frog 개구리, chick 병아리.
 * 상태: { at: { 카드id: 자리 번호|null } } (자리 0 = 맨 위, 시계 방향으로 1, 2, …)
 * 교구 계약(getState·setState·check·reset·solve·hint 1~3단계·wrongAnswer·distance)은 공통 카드 판(_cards.js)이 그대로 준다.
 * 예: toolOptions: { center: '개구리의 한살이', cards: [{ id: '알', text: '알', motif: 'egg' }, { id: '올챙이', text: '올챙이', motif: 'tadpole' }, { id: '개구리', text: '개구리', motif: 'frog' }] },
 *     target: { order: ['알', '올챙이', '개구리'], cyclic: true }
 */
(function (K) {
  'use strict';
  const C = K.cards;
  const { el, textBlock, PAD } = C.util;

  // 네모 칸 가장자리에서 나가는 점(가운데에서 (dx,dy) 쪽으로)
  function edge(s, dx, dy, pad) {
    const cx = s.x + s.w / 2; const cy = s.y + s.h / 2; const l = Math.hypot(dx, dy) || 1;
    const t = Math.min(dx ? (s.w / 2) / Math.abs(dx) : Infinity, dy ? (s.h / 2) / Math.abs(dy) : Infinity);
    return [cx + dx * t + (dx / l) * pad, cy + dy * t + (dy / l) * pad];
  }

  // 한살이 모티프 — 카드·칸·도입 그림(scene)에 쓴다. 이미 있으면 덮지 않는다.
  // egg 알 · larva 애벌레 · pupa 번데기 · butterfly 나비 · seed 씨 · sprout 싹 · tadpole 올챙이 · frog 개구리 · chick 병아리
  const M = K.motifs; const pc = K.piece;
  const add = (name, draw) => { if (!M[name]) M[name] = (st, p, o) => { const g = el('g', null, p); draw(st, g, o); K.transform(g, { x: o.x || 0, y: o.y || 0, s: o.s || 1 }); return g; }; };
  const dot = (g, x, y, r) => el('circle', { cx: x, cy: y, r: r || 2.2, fill: '#3D352E' }, g);
  add('egg', (st, g, o) => { pc(st, g, { shape: { type: 'ellipse', rx: 12, ry: 15 }, color: o.color || 'cream', depth: 2 }); });
  add('larva', (st, g, o) => { [-18, -9, 0, 9].forEach((x) => pc(st, g, { shape: { type: 'circle', r: 7, cx: x, cy: 2 }, color: o.color || 'mint', depth: 1 })); pc(st, g, { shape: { type: 'circle', r: 8.5, cx: 19, cy: 0 }, color: o.color || 'mint', depth: 1 }); dot(g, 21, -2, 1.8); });
  add('pupa', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M0 -20 C 11 -12 11 10 0 20 C -11 10 -11 -12 0 -20 Z' }, color: o.color || 'buttercup', depth: 2 }); el('path', { d: 'M-7 -4 H7 M-8 4 H8 M-6 11 H6', stroke: '#6E530F', 'stroke-width': 1.4, fill: 'none' }, g); });
  add('butterfly', (st, g, o) => { const c = o.color || 'lavender'; pc(st, g, { shape: { type: 'ellipse', rx: 12, ry: 9, cx: -11, cy: -7 }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'ellipse', rx: 12, ry: 9, cx: 11, cy: -7 }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'ellipse', rx: 8, ry: 7, cx: -8, cy: 8 }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'ellipse', rx: 8, ry: 7, cx: 8, cy: 8 }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'rect', w: 5, h: 26, rx: 2.5 }, color: 'ink', depth: 0, flat: true }); });
  add('seed', (st, g, o) => { pc(st, g, { shape: { type: 'ellipse', rx: 14, ry: 9 }, color: o.color || 'peach', depth: 2 }); el('path', { d: 'M-6 -2 Q 0 3 6 -2', stroke: '#6E3B21', 'stroke-width': 1.4, fill: 'none' }, g); });
  add('sprout', (st, g, o) => { pc(st, g, { shape: { type: 'rect', w: 4, h: 22, x: -2, y: -4 }, color: 'mint', depth: 0, flat: true }); pc(st, g, { shape: { type: 'path', d: 'M0 -4 Q -16 -18 -20 -6 Q -10 0 0 -4 Z' }, color: o.color || 'mint', depth: 1 }); pc(st, g, { shape: { type: 'path', d: 'M0 -8 Q 16 -22 20 -10 Q 10 -4 0 -8 Z' }, color: o.color || 'mint', depth: 1 }); pc(st, g, { shape: { type: 'rect', w: 30, h: 6, x: -15, y: 17, rx: 3 }, color: 'peach', depth: 1 }); });
  add('tadpole', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M2 0 Q 14 -6 26 2 Q 14 2 2 6 Z' }, color: o.color || 'sky', depth: 1 }); pc(st, g, { shape: { type: 'circle', r: 10 }, color: o.color || 'sky', depth: 2 }); dot(g, -4, -3); });
  add('frog', (st, g, o) => { const c = o.color || 'mint'; pc(st, g, { shape: { type: 'ellipse', rx: 20, ry: 13, cy: 4 }, color: c, depth: 2 }); pc(st, g, { shape: { type: 'circle', r: 6, cx: -9, cy: -9 }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'circle', r: 6, cx: 9, cy: -9 }, color: c, depth: 1 }); dot(g, -9, -9); dot(g, 9, -9); });
  add('chick', (st, g, o) => { pc(st, g, { shape: { type: 'circle', r: 15, cy: 3 }, color: o.color || 'buttercup', depth: 2 }); pc(st, g, { shape: { type: 'circle', r: 9, cx: 8, cy: -12 }, color: o.color || 'buttercup', depth: 1 }); pc(st, g, { shape: { type: 'poly', points: '16,-13 23,-11 16,-8' }, color: 'peach', depth: 0, flat: true }); dot(g, 10, -14, 1.8); });

  const LIFE = new Set(['egg', 'larva', 'pupa', 'butterfly', 'seed', 'sprout', 'tadpole', 'frog', 'chick']);
  const living = ({ o, cards, slots }) => /한살이|자라|자람|성장/.test(String(o.center || '')) || cards.some((c) => LIFE.has(c.motif)) || slots.some((x) => LIFE.has(x.motif));

  K.registerTool('lifecycle', C.define('lifecycle', {
    name: '한살이 회전판',
    mode: 'order',
    label: '한살이 회전판. 둥근 판의 자리에 단계 카드를 화살표 차례대로 놓아요.',
    // 생물의 한살이(한살이 모티프 카드·가운데 글 '한살이'·'자라')일 때만 '자라면서'를 말한다 — 화석이 되는 과정·물의 순환·땅의 변화는 중립 글
    hints: {
      order: (look) => (living(look) ? '가장 처음 모습을 찾아 맨 위 자리에 놓고, 자라면서 모습이 바뀌는 차례대로 화살표를 따라 놓아요.'
        : '가장 처음 단계를 찾아 맨 위 자리에 놓고, 화살표를 따라 그다음에 이어지는 단계를 차례대로 놓아요.'),
      match: '자리 이름을 먼저 읽고, 그때의 모습이나 일을 나타내는 카드를 찾아 놓아요.',
      sort: (look) => (living(look) ? '카드마다 생김새나 사는 곳, 자라는 방법을 살펴보고 같은 성질의 칸에 넣어요.'
        : '칸 이름을 먼저 소리 내어 읽고, 카드를 하나씩 보며 그 칸의 성질과 같은지 따져 넣어요.'),
    },
    prevWord: '단계',
    cardSize() { return { min: 100, max: 140 }; },
    layout(ctx) {
      const { mode, W, cw, ch, slots, o } = ctx; const n = slots.length;
      if (mode !== 'order' && mode !== 'match') return null;
      const sw = cw + 10; const sh = ch + 10; const lh = 26; // 자리 위 이름(없으면 번호 동그라미)
      const Rx = Math.max(60, (W - 2 * PAD - sw) / 2 - 4);
      const Ry = n <= 2 ? 0 : n >= 7 ? (sh + lh) * 1.5 : n === 3 ? sh * 0.95 + lh : n === 4 ? sh / 2 + lh + 46 : sh * 0.98 + lh + 16; // 넷이면 옆 자리와 위·아래 자리가 비껴 있어 판을 낮게
      const cx = W / 2; const cy = PAD + lh + sh / 2 + Ry;
      slots.forEach((sl, i) => {
        const a = n <= 2 ? (i === 0 ? -Math.PI / 2 : Math.PI / 2) : (i / n) * Math.PI * 2;
        const x = n <= 2 ? cx + (i === 0 ? -Rx : Rx) : cx + Rx * Math.sin(a); const y = n <= 2 ? cy : cy - Ry * Math.cos(a);
        // 자리 이름은 판 가장자리까지 쓸 수 있게(가장자리 자리의 긴 이름이 '…'로 잘리지 않게)
        const lw = Math.max(sw + 30, Math.min(sw + 80, 2 * Math.min(x - PAD, W - PAD - x)));
        Object.assign(sl, { x: x - sw / 2, y: y - sh / 2, w: sw, h: sh, top: 0, badge: true, lx: x, ly: y - sh / 2 - 13, lw, ring: { x, y } });
      });
      ctx.ring = { cx, cy, Rx, Ry };
      return { H: cy + Ry + sh / 2 + 10 };
    },
    decorate(ctx, layer) {
      if (!ctx.ring) return;
      const { slots, o, P, print, kit, st } = ctx; const { cx, cy, Rx, Ry } = ctx.ring; const n = slots.length;
      // 판: 옅은 둥근 바탕 + 가운데 이름
      kit.piece(st, layer, { shape: { type: 'ellipse', rx: Rx * 0.98, ry: Math.max(Ry, 40) * 0.98, cx, cy }, color: 'mint', depth: 1, fill: print ? '#fff' : P.mint.light, flat: true });
      if (o.center) {
        const rh = Math.max(44, Math.min(Ry * 0.75, 76)); let rw = Math.min(Rx * 1.05, 230);
        // 가운데 이름표가 옆 자리(칸·자리 이름)와 같은 높이에 있으면 그 사이로 좁힌다
        slots.forEach((sl) => {
          const top = sl.label ? sl.ly - 14 : sl.y; const bot = sl.y + sl.h;
          if (bot < cy - rh / 2 - 6 || top > cy + rh / 2 + 6) return;
          const half = Math.max(sl.w, sl.label ? sl.lw : 0) / 2;
          rw = Math.min(rw, 2 * (Math.abs(sl.ring.x - cx) - half - 8));
        });
        rw = Math.max(rw, 96);
        kit.piece(st, layer, { shape: { type: 'rect', x: cx - rw / 2, y: cy - rh / 2, w: rw, h: rh, rx: rh / 2 }, color: 'buttercup', depth: 2 });
        textBlock(layer, o.center, { x: cx, y: cy, w: rw - 24, h: rh - 8, fs: 19, minFs: 14, maxLines: 2, fill: P.buttercup.dark });
      }
      // 화살표: 칸 i → i+1 (cycle이면 마지막 → 처음). 판 바깥쪽으로 조금 휘게
      const col = print ? '#000' : '#82C2A8';
      const last = o.cycle === false ? n - 1 : n;
      for (let i = 0; i < last && n > 1; i++) {
        const a = slots[i]; const b = slots[(i + 1) % n]; if (a === b) continue;
        const ax = a.ring.x; const ay = a.ring.y; const bx = b.ring.x; const by = b.ring.y;
        const mx = (ax + bx) / 2; const my = (ay + by) / 2; let ox = mx - cx; let oy = my - cy; const ol = Math.hypot(ox, oy) || 1;
        if (n === 2) { ox = 0; oy = i === 0 ? -1 : 1; } else { ox /= ol; oy /= ol; }
        const bend = n === 2 ? Ry + 40 : 22;
        const qx = mx + ox * bend; const qy = my + oy * bend;
        const [x1, y1] = edge(a, qx - ax, qy - ay, 3); const [x2, y2] = edge(b, qx - bx, qy - by, 5);
        const gA = el('g', null, layer);
        el('path', { d: `M${x1} ${y1} Q${qx} ${qy} ${x2} ${y2}`, fill: 'none', stroke: col, 'stroke-width': 4, 'stroke-linecap': 'round' }, gA);
        const ang = Math.atan2(y2 - qy, x2 - qx); const L = 11;
        el('polygon', { points: `${x2},${y2} ${x2 - L * Math.cos(ang - 0.5)},${y2 - L * Math.sin(ang - 0.5)} ${x2 - L * Math.cos(ang + 0.5)},${y2 - L * Math.sin(ang + 0.5)}`, fill: col }, gA);
      }
    },
    controls(ctx, api) {
      if (!ctx.ring || ctx.o.spin === false || ctx.slots.length < 3) return;
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'pl-btn pl-btn--small cd-spin';
      b.style.cssText = 'min-height:44px;margin-top:8px';
      b.innerHTML = '<i class="fi fi-rr-refresh" aria-hidden="true"></i> 차례대로 따라가 보기';
      let busy = false;
      b.addEventListener('click', async () => {
        if (busy) return; busy = true;
        for (let i = 0; i < ctx.slots.length; i++) { api.flash(i); ctx.kit.tick(); await ctx.kit.wait(420); }
        busy = false;
        ctx.kit.announce('화살표를 따라 한 바퀴 돌았어요.');
      });
      api.box.appendChild(b);
    },
  }));
})(window.PaperKit);
