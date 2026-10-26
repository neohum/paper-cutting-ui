/* 연표 — 시간 띠(왼쪽 = 옛날, 오른쪽 = 오늘날) 위에 사건 카드를 놓는다. 공통 카드 판(_cards.js) 위의 겉모양.
 * 사회(역사·우리 지역의 변화·옛날과 오늘날), 국어(이야기 시간 흐름), 과학(계절·하루의 변화), 실과(발달 과정)에 쓴다.
 *
 * | 모드  | 화면                                                          | slots                                                 | target |
 * |-------|---------------------------------------------------------------|-------------------------------------------------------|--------|
 * | order | 시간 띠 위 눈금마다 사건 한 장, 먼저 일어난 것부터 왼쪽에          | 수 또는 눈금 이름(['1392년','1443년',…]) — 없으면 카드 수 | { order: [카드id…] } |
 * | match | 눈금(연도·세기·시대 이름)마다 그때 일어난 사건 카드 한 장          | 눈금 이름(필수)                                        | { match: { 눈금id: 카드id } } |
 * | sort  | 시간 띠를 시대(구간)로 나눈 칸에 사건 카드를 여러 장씩              | 시대 이름(['고려','조선'])                              | { sort: { 시대id: [카드id…] } } |
 * | fill·pick | 공통 카드 판의 기본 배치                                     | _cards.js 표                                           | _cards.js 표 |
 *
 * 옵션: 공통 카드 판 옵션 전부 + axis: ['옛날', '오늘날'](띠 양 끝 말, order 기본 ['먼저', '나중'], 그 밖 ['옛날', '오늘날']),
 *       toScale: 참이면 slots의 at(수, 예: 연도)에 비례해 눈금 간격을 둔다(겹치지 않게 최소 간격은 지킴). 기본은 같은 간격.
 * 칸: { id, label: '1443년', at?: 1443, sub?: '조선' }. 카드: { id, text: '훈민정음을 만들어요', big?: '1443', back?: '1443년' } — back은 맞힌 뒤에 보임(값이 드러나는 교구 → reveal 'after-check'과 함께).
 * 눈금이 많으면(5개 넘게) 카드가 띠 위·아래로 번갈아 놓인다.
 * 상태: { at: { 카드id: 눈금 번호|null } }
 * 교구 계약(getState·setState·check·reset·solve·hint 1~3단계·wrongAnswer·distance)은 공통 카드 판(_cards.js)이 그대로 준다.
 * 예: toolOptions: { cards: ['고조선을 세움', '고려를 세움', '조선을 세움'], axis: ['옛날', '오늘날'] }, target: { order: ['고조선을 세움', '고려를 세움', '조선을 세움'] }
 */
(function (K) {
  'use strict';
  const C = K.cards;
  const { el, textBlock, PAD, GAP, arrow } = C.util;

  const endsOf = (ctx) => (Array.isArray(ctx.o.axis) && ctx.o.axis.length === 2 ? ctx.o.axis.map(String) : ctx.mode === 'order' ? ['먼저', '나중'] : ['옛날', '오늘날']);
  // 띠 끝 말이 차지할 폭(한 줄로 들어가게, 너무 길면 두 줄)
  const insetOf = (ctx) => Math.min(80, Math.max(40, ...endsOf(ctx).map((e) => C.util.textWidth(e, 15) + 8)));
  function axisEnds(layer, ctx, y) {
    const { W, o, P, print } = ctx;
    const ends = endsOf(ctx); const E = insetOf(ctx);
    // 띠 양 끝 말은 띠와 같은 높이에(눈금 이름표와 겹치지 않게) — 띠는 두 말 사이에 놓인다
    const t1 = textBlock(layer, ends[0], { x: PAD + E / 2, y, w: E, h: 48, fs: 15, minFs: 12, maxLines: 2, fill: P.sky.dark });
    const t2 = textBlock(layer, ends[1], { x: W - PAD - E / 2, y, w: E, h: 48, fs: 15, minFs: 12, maxLines: 2, fill: P.sky.dark });
    arrow(layer, PAD + E + 2, y, W - PAD - E - 2, y, { color: print ? '#000' : '#98C8D6', width: 6 });
    return [t1, t2];
  }

  K.registerTool('timeline', C.define('timeline', {
    name: '연표',
    mode: 'order',
    label: '연표. 왼쪽은 옛날, 오른쪽은 오늘날이에요. 사건 카드를 일어난 때에 맞게 시간 띠 위에 놓아요.',
    hints: {
      order: '사건마다 때를 알려 주는 말(옛날·처음·그 뒤·요즘 같은 말)을 찾고, 먼저 일어난 일부터 왼쪽에 놓아요.',
      match: '눈금의 때를 먼저 읽고, 카드의 사건이 그때 일어난 일인지 단서를 찾아 견주어요.',
      sort: '구간 이름을 먼저 읽고, 사건이 어느 때의 일인지 단서를 찾아 그 구간에 넣어요.',
    },
    cardSize() { return { min: 104, max: 152 }; },
    layout(ctx) {
      const { mode, W, cw, ch, slots, o } = ctx; const n = slots.length;
      if (mode === 'order' || mode === 'match') {
        const E = insetOf(ctx); const sw = cw + 10; const sh = ch + 10; const span = W - 2 * PAD - 2 * E - 20 - sw; const x0 = PAD + E + 10 + sw / 2;
        const alt = n > 1 && span / (n - 1) < sw + 8; // 넘치면 위·아래로 번갈아
        let xs;
        const ats = slots.map((s) => Number(s.at != null ? s.at : NaN));
        if (o.toScale && n > 1 && ats.every(Number.isFinite)) {
          const lo = Math.min(...ats); const hi = Math.max(...ats) || lo + 1;
          xs = ats.map((a) => x0 + ((a - lo) / (hi - lo || 1)) * span);
          const gapMin = alt ? (sw + 8) / 2 : sw + 8;
          for (let i = 1; i < n; i++) xs[i] = Math.max(xs[i], xs[i - 1] + gapMin);
          const over = xs[n - 1] - (x0 + span);
          if (over > 0) for (let i = n - 1; i >= 0; i--) { xs[i] -= over; if (i < n - 1) xs[i] = Math.min(xs[i], xs[i + 1] - gapMin); }
        } else xs = slots.map((_, i) => (n === 1 ? W / 2 : x0 + (i * span) / (n - 1)));
        const axisY = PAD + sh + 46;
        slots.forEach((sl, i) => {
          const down = alt && i % 2 === 1;
          Object.assign(sl, { x: xs[i] - sw / 2, y: down ? axisY + 46 : PAD, w: sw, h: sh, top: 0, tick: { x: xs[i], y: axisY, down } });
        });
        ctx.axisY = axisY;
        return { H: alt ? axisY + 46 + sh + 8 : axisY + 44 };
      }
      if (mode === 'sort') {
        // 시대 구간: 한 줄에 나란히(4개까지), 아래에 시간 띠
        const per = Math.min(n, 4); const rows = Math.ceil(n / per);
        const bw = (W - 2 * PAD - GAP * (per - 1)) / per; const s = Math.min(0.78, (bw - 12) / cw);
        const cols = Math.max(1, Math.floor((bw - 12 + 6) / (cw * s + 6)));
        const expectN = Math.min(ctx.cards.length, Math.ceil(ctx.cards.length / n) + 1);
        const top = 46; const bh = top + Math.ceil(expectN / cols) * (ch * s + 6) + 8;
        slots.forEach((sl, i) => {
          const r = Math.floor(i / per); const k = i % per;
          Object.assign(sl, { x: PAD + k * (bw + GAP), y: PAD + r * (bh + GAP), w: bw, h: bh, top, scale: s });
        });
        ctx.axisY = PAD + rows * (bh + GAP) + 12;
        return { H: ctx.axisY + 34 };
      }
      return null;
    },
    decorate(ctx, layer) {
      const { mode, slots, P, print } = ctx;
      if (ctx.axisY == null) return;
      axisEnds(layer, ctx, ctx.axisY);
      if (mode === 'sort') {
        // 구간 경계 눈금
        slots.forEach((sl, i) => { if (i > 0 && Math.abs(sl.y - slots[i - 1].y) < 1) el('line', { x1: sl.x - GAP / 2, y1: ctx.axisY - 12, x2: sl.x - GAP / 2, y2: ctx.axisY + 12, stroke: print ? '#000' : P.sky.dark, 'stroke-width': 3 }, layer); });
        return;
      }
      slots.forEach((sl) => {
        const t = sl.tick;
        el('line', { x1: t.x, y1: t.down ? sl.y : sl.y + sl.h, x2: t.x, y2: t.y, stroke: print ? '#000' : P.sky.layer, 'stroke-width': 2.5, 'stroke-dasharray': '4 4' }, layer);
        el('circle', { cx: t.x, cy: t.y, r: 7, fill: print ? '#fff' : P.sky.dark, stroke: print ? '#000' : '#fff', 'stroke-width': 2 }, layer);
        if (sl.label) {
          const g = el('g', null, layer);
          const pw = Math.min(sl.w + 18, Math.max(64, C.util.textWidth(sl.label, 15) + 18));
          const py = t.down ? t.y - 34 : t.y + 12;
          ctx.kit.piece(ctx.st, g, { shape: { type: 'rect', x: t.x - pw / 2, y: py, w: pw, h: 24, rx: 12 }, color: 'sky', depth: 1, fill: P.sky.light });
          textBlock(g, sl.label, { x: t.x, y: py + 12, w: pw - 10, h: 22, fs: 15, minFs: 12, maxLines: 1, fill: P.sky.dark });
        }
      });
    },
  }));
})(window.PaperKit);
