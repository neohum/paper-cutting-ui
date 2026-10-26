/* 이야기 판 — 이야기 장면 카드를 차례대로 놓고(order), 인물의 말풍선 빈칸에 낱말·문장 카드를 넣는다(fill). 공통 카드 판(_cards.js) 위의 겉모양.
 * 국어(이야기 순서·인물의 말·문장 완성), 통합교과·도덕(하루 일과·상황 이야기), 영어(대화 빈칸)에 쓴다.
 *
 * | 모드  | 화면                                       | slots                                                     | target                         |
 * |-------|--------------------------------------------|-----------------------------------------------------------|--------------------------------|
 * | order | 만화 칸(장면 틀)에 장면 카드를 차례로 놓기    | 수 또는 칸 이름(['처음','가운데','끝']) — 없으면 카드 수     | { order: [카드id…] }           |
 * | fill  | 인물 + 말풍선, 말풍선 안 '___' 자리에 카드     | [{ id, label: '___ 고마워.', who: '토끼', motif?: 'flower' }] | { fill: { 칸id: 카드id | [카드id…] } } |
 * | sort·match·pick | 공통 카드 판의 기본 배치                   | _cards.js 표                                               | _cards.js 표                   |
 *
 * 옵션: 공통 카드 판 옵션 전부(cards·slots·shuffle·live·instant·showBack·revealAfterCheck·hint1·success·print) + title(무대 맨 위 이야기 제목, 선택).
 * 카드: 장면 카드는 { id, text: '토끼가 낮잠을 자요', motif: 'tree' } 처럼 모티프 그림 + 짧은 글(한 줄 12자 안팎, 두 줄까지).
 *       말풍선 카드는 { id: '고마워', text: '고마워' } 처럼 글만.
 * 상태: { at: { 카드id: 칸 번호|null } }
 * 교구 계약(getState·setState·check·reset·solve·hint 1~3단계·wrongAnswer·distance)은 공통 카드 판(_cards.js)이 그대로 준다.
 * 예(order): toolOptions: { cards: [{ id: '출발', text: '토끼와 거북이 출발해요', motif: 'flower' }, { id: '낮잠', text: '토끼가 낮잠을 자요', motif: 'tree' }, { id: '도착', text: '거북이 먼저 도착해요', motif: 'star' }], slots: ['처음', '가운데', '끝'] },
 *            target: { order: ['출발', '낮잠', '도착'] }
 * 예(fill):  toolOptions: { mode: 'fill', cards: ['미안해', '고마워', '안녕'], slots: [{ id: 'b1', who: '곰', motif: 'tree', label: '길을 알려 줘서 ___.' }] },
 *            target: { fill: { b1: '고마워' } }
 */
(function (K) {
  'use strict';
  const C = K.cards;
  const { el, textBlock, textWidth, PAD, GAP, arrow } = C.util;

  K.registerTool('story', C.define('story', {
    name: '이야기 판',
    mode: 'order',
    label: '이야기 판. 장면 카드를 차례대로 놓거나 말풍선 빈칸에 알맞은 카드를 넣어요.',
    hints: {
      order: '이야기에서 맨 처음에 무슨 일이 있었는지 떠올리고, 그 일 때문에 다음에 생긴 일을 하나씩 이어 놓아요.',
      fill: '말풍선을 처음부터 소리 내어 읽고, 그 인물이 그 장면에서 할 만한 말인지 생각해요.',
      sort: '카드의 장면이나 말이 어느 칸의 성질에 맞는지 하나씩 따져 넣어요.',
      match: '인물이나 장면을 먼저 읽고, 그것과 꼭 어울리는 카드를 찾아 옆에 놓아요.',
    },
    cardSize({ mode, hasIcon }) {
      if (mode === 'order' && hasIcon) return { min: 132, max: 168 };
      if (mode === 'fill') return { min: 96, max: 168 };
      return null;
    },
    layout(ctx) {
      const { mode, W, cw, ch, slots, o } = ctx;
      const head = o.title ? 34 : 0;
      if (mode === 'order') {
        // 활동지에 카드를 함께 찍으면 칸은 번호만 쓰는 낮은 칸으로(그림이 작아지지 않게)
        const fw = cw + 14; const fh = ctx.print && o.printCards !== false ? 56 : ch + 14; const aw = 22; const n = slots.length; const lh = slots.some((s) => s.label) ? 26 : 0;
        const per = Math.max(1, Math.min(n, Math.floor((W - 2 * PAD + aw) / (fw + aw))));
        const rows = Math.ceil(n / per); const rowH = fh + lh + 18;
        slots.forEach((sl, i) => {
          const r = Math.floor(i / per); const k = i % per; const inRow = Math.min(per, n - r * per);
          const x0 = (W - (inRow * fw + (inRow - 1) * aw)) / 2;
          Object.assign(sl, { x: x0 + k * (fw + aw), y: PAD + head + r * rowH, w: fw, h: fh, top: 0, frame: true, lh });
        });
        return {
          H: PAD + head + rows * rowH - 8,
          decorate(layer) {
            for (let i = 0; i + 1 < n; i++) {
              const a = slots[i]; const b = slots[i + 1];
              if (Math.abs(a.y - b.y) < 1) arrow(layer, a.x + a.w + 3, a.y + a.h / 2, b.x - 4, b.y + b.h / 2, { width: 3, color: '#E69D7B' });
            }
          },
        };
      }
      if (mode === 'fill') {
        // 인물(왼쪽 동그라미) + 말풍선(오른쪽). 말풍선 안에서 앞말 · 빈칸 · 뒷말을 한 줄에, 넘치면 앞말을 윗줄로
        const fs = 20; const bw = cw + 10; const bh = ch + 10; const sx = PAD + 84; const bubW = W - sx - PAD; const avail = bubW - 36;
        let y = PAD + head;
        slots.forEach((sl) => {
          const parts = sl.label.split(/_{3,}/); const before = parts[0] || ''; const after = parts.slice(1).join(' ') || '';
          const wb = before ? textWidth(before, fs) + 10 : 0; const wa = after ? textWidth(after, fs) + 10 : 0;
          let rowH;
          if (wb + bw + wa <= avail) {
            rowH = Math.max(bh + 28, 92);
            const x0 = sx + 24 + (avail - (wb + bw + wa)) / 2; const by = y + (rowH - bh) / 2;
            Object.assign(sl, { x: x0 + wb, y: by, w: bw, h: bh, parts: [{ text: before, x: x0 + wb - 8, y: by + bh / 2, anchor: 'end', w: wb }, { text: after, x: x0 + wb + bw + 8, y: by + bh / 2, anchor: 'start', w: wa }] });
          } else {
            const lines = C.util.wrapLines(before, avail, fs).length; const th = before ? lines * fs * 1.25 + 6 : 0;
            rowH = Math.max(th + bh + 28, 92);
            const x0 = sx + 24; const by = y + 14 + th;
            Object.assign(sl, { x: x0, y: by, w: bw, h: bh, parts: [{ text: before, x: sx + bubW / 2 + 6, y: y + 14 + th / 2, anchor: 'middle', w: avail, lines: 3 }, { text: after, x: x0 + bw + 8, y: by + bh / 2, anchor: 'start', w: avail - bw - 8 }] });
          }
          Object.assign(sl, { top: 0, bubble: { x: sx + 10, y: y + 4, w: bubW - 10, h: rowH - 8 }, who: sl.who, face: { x: PAD + 36, y: y + rowH / 2 - 8 } });
          y += rowH + 10;
        });
        return { H: y - 10 + 6 };
      }
      return null;
    },
    decorate(ctx, layer) {
      if (!ctx.o.title) return;
      textBlock(layer, ctx.o.title, { x: ctx.W / 2, y: PAD + 14, w: ctx.W - 40, h: 28, fs: 20, minFs: 15, maxLines: 1, fill: '#6E3B21' });
    },
    drawSlot(ctx, sl, g, i) {
      const { kit, P, print } = ctx;
      if (sl.frame) {
        // 만화 칸: 두꺼운 테두리 + 왼쪽 위 번호, 아래에 칸 이름
        kit.piece(ctx.st, g, { shape: { type: 'rect', x: sl.x, y: sl.y, w: sl.w, h: sl.h, rx: 8 }, color: 'cream', depth: 2, fill: '#FFFDF8', stroke: print ? '#000' : '#6E3B21', strokeWidth: 2.5 });
        el('rect', { x: sl.x + 6, y: sl.y + 6, width: sl.w - 12, height: sl.h - 12, rx: 6, fill: 'none', stroke: print ? '#000' : P.peach.layer, 'stroke-width': 1.4, 'stroke-dasharray': '6 6', 'pointer-events': 'none' }, g);
        kit.piece(ctx.st, g, { shape: { type: 'circle', r: 13, cx: sl.x + 4, cy: sl.y + 4 }, color: 'peach', depth: 1 });
        el('text', { x: sl.x + 4, y: sl.y + 10, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: P.peach.dark }, g).textContent = String(i + 1);
        if (sl.label) textBlock(g, sl.label, { x: sl.x + sl.w / 2, y: sl.y + sl.h + 15, w: sl.w + 16, h: 24, fs: 17, minFs: 13, maxLines: 1, fill: P.peach.dark });
        return true;
      }
      if (sl.bubble) {
        const b = sl.bubble; const tint = ['sky', 'mint', 'lavender', 'buttercup'][i % 4];
        // 인물: 모티프 그림이나 이름 첫 글자를 동그라미 안에, 아래에 이름
        kit.piece(ctx.st, g, { shape: { type: 'circle', r: 30, cx: sl.face.x, cy: sl.face.y }, color: tint, depth: 2, fill: P[tint].light });
        if (sl.motif) ctx.iconAt(g, { motif: sl.motif }, sl.face.x, sl.face.y, 40);
        else if (sl.who) el('text', { x: sl.face.x, y: sl.face.y + 9, 'text-anchor': 'middle', 'font-size': 26, class: 'pk-text', fill: P[tint].dark }, g).textContent = String(sl.who).slice(0, 1);
        if (sl.who) textBlock(g, sl.who, { x: sl.face.x, y: sl.face.y + 44, w: 76, h: 20, fs: 15, minFs: 12, maxLines: 1, fill: P[tint].dark });
        // 말풍선: 둥근 네모 + 인물 쪽 꼬리
        const ty = Math.min(b.y + b.h - 18, sl.face.y);
        const d = `M${b.x + 16} ${b.y} H${b.x + b.w - 16} Q${b.x + b.w} ${b.y} ${b.x + b.w} ${b.y + 16} V${b.y + b.h - 16} Q${b.x + b.w} ${b.y + b.h} ${b.x + b.w - 16} ${b.y + b.h} H${b.x + 16} Q${b.x} ${b.y + b.h} ${b.x} ${b.y + b.h - 16} V${ty + 10} L${b.x - 14} ${ty} L${b.x} ${ty - 8} V${b.y + 16} Q${b.x} ${b.y} ${b.x + 16} ${b.y} Z`;
        kit.piece(ctx.st, g, { shape: { type: 'path', d }, color: 'cream', depth: 1, fill: '#FFFFFF', stroke: print ? '#000' : P[tint].layer, strokeWidth: 2 });
        sl.parts.forEach((p) => { if (p.text) textBlock(g, p.text, { x: p.x, y: p.y, w: Math.max(p.w, 40), fs: 20, minFs: 15, maxLines: p.lines || 1, anchor: p.anchor }); });
        kit.piece(ctx.st, g, { shape: { type: 'rect', x: sl.x, y: sl.y, w: sl.w, h: sl.h, rx: 10 }, color: 'cream', depth: 0, fill: P.buttercup.light, flat: true });
        el('rect', { x: sl.x + 3, y: sl.y + 3, width: sl.w - 6, height: sl.h - 6, rx: 8, fill: 'none', stroke: print ? '#000' : P.buttercup.layer, 'stroke-width': 1.6, 'stroke-dasharray': '6 5', 'pointer-events': 'none' }, g);
        return true;
      }
      return false;
    },
  }));
})(window.PaperKit);
