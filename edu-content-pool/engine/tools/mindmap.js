/* 생각 그물 — 가운데 주제에서 뻗은 가지 칸에 생각 카드를 나누어 넣고(sort), 가지마다 그 생각을 뒷받침하는 근거 카드를 잇는다(match).
 * 공통 카드 판(_cards.js) 위의 겉모양. 국어(낱말 묶기·중심 생각과 뒷받침 문장), 도덕(가치와 행동·까닭), 사회(조건과 사례),
 * 과학(성질에 따라 묶기), 통합교과·실과·영어(주제 낱말 모으기) — 카탈로그에서 가장 많이 쓰는 교구다.
 *
 * | 모드  | 화면                                                             | slots                                         | target |
 * |-------|------------------------------------------------------------------|-----------------------------------------------|--------|
 * | sort  | 가운데 주제 + 둘레 가지 칸(2~6개). 칸마다 카드 여러 장             | 가지 이름(필수, 예 ['봄','여름'])               | { sort: { 가지id: [카드id…] } } — 목록에 없는 카드는 어느 가지에도 넣지 않는 함정 카드 |
 * | match | 가운데 주제 + 가지(주장·생각). 가지마다 근거 카드 한 장을 잇는다    | 가지 글(필수, 예 '친구를 도와요')               | { match: { 가지id: 카드id | [되는 카드id…] } } |
 * | pick  | 주제와 관련 있는 카드만 바구니에(바구니 이름 기본 = topic)          | 없음                                           | { pick: [카드id…] } |
 * | order·fill | 공통 카드 판의 기본 배치                                     | _cards.js 표                                   | _cards.js 표 |
 *
 * 옵션: 공통 카드 판 옵션 전부 + topic(가운데 주제 글, 짧게 — 14자 안팎), basket(pick 바구니 이름).
 * 칸: { id, label: '여름', sub?: '덥고 비가 많아요', motif?: 'sun' }. 카드: 글 또는 { id, text, motif?, big?, why? }.
 * 상태: { at: { 카드id: 가지 번호|null } }
 * 교구 계약(getState·setState·check·reset·solve·hint 1~3단계·wrongAnswer·distance)은 공통 카드 판(_cards.js)이 그대로 준다.
 * 예(sort):  toolOptions: { topic: '우리 동네 계절', slots: ['봄', '겨울'], cards: ['벚꽃', '눈사람', '새싹', '썰매'] },
 *            target: { sort: { 봄: ['벚꽃', '새싹'], 겨울: ['눈사람', '썰매'] } }
 * 예(match): toolOptions: { mode: 'match', topic: '정직', slots: [{ id: 's1', label: '거짓말하지 않아요' }], cards: ['깨뜨린 컵을 먼저 말해요', '숙제를 베껴요'] },
 *            target: { match: { s1: '깨뜨린 컵을 먼저 말해요' } }
 */
(function (K) {
  'use strict';
  const C = K.cards;
  const { el, textBlock, PAD, GAP } = C.util;

  K.registerTool('mindmap', C.define('mindmap', {
    name: '생각 그물',
    mode: 'sort',
    label: '생각 그물. 가운데 주제에서 뻗은 가지에 알맞은 카드를 넣어요.',
    hints: {
      sort: '가운데 주제를 먼저 읽고, 카드마다 어느 가지 생각과 가장 가까운지 따져 넣어요.',
      match: '가지마다 쓰인 생각을 읽고, 그 생각이 옳다고 말할 수 있는 까닭(근거) 카드를 찾아 이어요.',
      pick: '바구니 이름(주제)을 소리 내어 읽고, 카드마다 그 주제와 이어지는지 하나씩 따져 골라요.',
    },
    cardSize({ mode }) { return mode === 'match' ? { min: 144, max: 196 } : { min: 112, max: 160 }; },
    layout(ctx) {
      const { mode, W, cw, ch, slots, o, cards } = ctx; const n = slots.length;
      if (mode === 'pick') { if (!o.basket && o.topic) slots[0].label = o.topic; return null; }
      if (mode !== 'sort' && mode !== 'match') return null;
      // 가지 칸: 왼쪽 줄 = 앞의 절반, 오른쪽 줄 = 나머지. 가운데 줄에 주제
      const cwc = n === 1 ? 0 : 112; const one = n === 1;
      const bw = one ? W - 2 * PAD - 150 : (W - 2 * PAD - cwc - 2 * GAP) / 2;
      const left = one ? 1 : Math.ceil(n / 2); const right = n - left;
      let s; let top; let bh;
      if (mode === 'sort') {
        // 가지 칸이 좁으면 한 줄에 한 장씩(글이 작아지지 않게), 넉넉하면 두 장씩
        s = Math.min(0.95, (bw - 12) / cw); if (((bw - 12 + 6) / 2 - 6) / cw >= 0.8) s = ((bw - 12 + 6) / 2 - 6) / cw; s = Math.min(0.95, s); top = 46;
        const expectN = Math.min(cards.length, Math.max(2, Math.ceil(cards.length / n))); // 넘치면 칸 안에서 카드가 줄어든다
        const cols = Math.max(1, Math.floor((bw - 12 + 6) / (cw * s + 6)));
        bh = top + Math.ceil(expectN / cols) * (ch * s + 6) + 8;
      } else {
        const longest = Math.max(...slots.map((x) => x.label.length));
        top = longest > 9 ? 58 : 44; s = Math.min(0.92, (bw - 14) / cw); bh = top + ch * s + 16;
      }
      const rows = Math.max(left, right); const areaH = rows * bh + (rows - 1) * GAP;
      slots.forEach((sl, i) => {
        const onLeft = i < left; const r = onLeft ? i : i - left; const colN = onLeft ? left : right;
        const y0 = PAD + (areaH - (colN * bh + (colN - 1) * GAP)) / 2;
        const x = one ? W - PAD - bw : onLeft ? PAD : W - PAD - bw;
        Object.assign(sl, { x, y: y0 + r * (bh + GAP), w: bw, h: bh, top, scale: s, side: one ? 1 : onLeft ? -1 : 1 });
      });
      const cxm = one ? PAD + 70 : W / 2;
      ctx.hub = { x: cxm, y: PAD + areaH / 2, w: one ? 136 : cwc - 8 };
      return { H: PAD + areaH + 8 };
    },
    decorate(ctx, layer) {
      if (!ctx.hub) return;
      const { slots, o, P, print, kit, st } = ctx; const h = ctx.hub;
      const col = print ? '#000' : '#B8A6D9';
      // 가지 줄: 주제 가장자리 → 칸 안쪽 가운데
      slots.forEach((sl) => {
        const sx = h.x + (sl.side < 0 ? -h.w / 2 : h.w / 2) * 0.9; const sy = h.y;
        const ex = sl.side < 0 ? sl.x + sl.w : sl.x; const ey = sl.y + Math.min(sl.top / 2 + 6, sl.h / 2);
        const mx = (sx + ex) / 2;
        el('path', { d: `M${sx} ${sy} C${mx} ${sy}, ${mx} ${ey}, ${ex} ${ey}`, fill: 'none', stroke: col, 'stroke-width': 5, 'stroke-linecap': 'round' }, layer);
      });
      const rh = Math.max(64, Math.min(110, 30 + C.util.wrapLines(o.topic || '주제', h.w - 22, 19).length * 24));
      kit.piece(st, layer, { shape: { type: 'rect', x: h.x - h.w / 2, y: h.y - rh / 2, w: h.w, h: rh, rx: 22 }, color: 'buttercup', depth: 3 });
      textBlock(layer, o.topic || '주제', { x: h.x, y: h.y, w: h.w - 18, h: rh - 10, fs: 19, minFs: 14, maxLines: 3, fill: P.buttercup.dark });
    },
    drawSlot(ctx, sl, g, i) {
      if (!ctx.hub) return false;
      const { kit, st, P, print } = ctx; const tint = ['peach', 'mint', 'lavender', 'sky', 'rose', 'buttercup'][i % 6];
      kit.piece(st, g, { shape: { type: 'rect', x: sl.x, y: sl.y, w: sl.w, h: sl.h, rx: 18 }, color: tint, depth: 2, fill: P[tint].light, texture: !print });
      // 가지 이름(그림이 있으면 왼쪽에 작게)
      let tx = sl.x + sl.w / 2; let tw = sl.w - 20;
      if (sl.motif || sl.big) { ctx.iconAt(g, sl, sl.x + 24, sl.y + sl.top / 2, 30); tx += 14; tw -= 30; }
      textBlock(g, sl.label, { x: tx, y: sl.y + sl.top / 2 + 1, w: tw, h: sl.top - 8, fs: 18, minFs: 14, maxLines: 2, fill: P[tint].dark });
      el('rect', { x: sl.x + 6, y: sl.y + sl.top - 2, width: sl.w - 12, height: sl.h - sl.top - 4, rx: 12, fill: 'none', stroke: print ? '#000' : P[tint].layer, 'stroke-width': 1.6, 'stroke-dasharray': '7 6', 'pointer-events': 'none' }, g);
      return true;
    },
  }));
})(window.PaperKit);
