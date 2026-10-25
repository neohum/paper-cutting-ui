/* 계절 나무 분류판 — 봄·여름·가을·겨울 종이 나무 판에 그림 카드를 끌어 넣는다.
 * 나무는 계절마다 다르게 생겼고(벚꽃·짙은 잎·단풍·눈 덮인 가지) 꽃잎·낙엽·눈이 흩날린다.
 * 한 계절 판에 그 계절 카드가 모두 들어가면 나무가 흔들리며 잎을 날린다.
 * 옵션: cards(카드 이름 배열), seasons(판 부분집합), instant(쉬움: 잘못 넣으면 바로 되돌아옴),
 *       words(쉬움: 카드를 누르면 쉬운 낱말 뜻 한 줄, 힌트도 쉬운 말로),
 *       hideSeasonNames(도전: 판 이름 대신 ?), why({card, ask, choices[], hard?}: 까닭 고르기),
 *       whyHard(도전: why.hard 선택지를 더함), decorate(자유 꾸미기: 카드를 스티커처럼 아무 데나 여러 장 붙임),
 *       demoView(교사 화면 시연: 판을 크게), view:'tree'|'card' + season|card(활동지 낱장 그림), print
 * 상태: { placed: { 카드이름: '봄'|'여름'|'가을'|'겨울'|null }, why?: 고른 까닭 번호|null }
 *       꾸미기: { stickers: [{ card, x, y, s, season }] }
 * target: { sorted: { 카드이름: 계절 }, why?: 번호 } 또는 { season: '가을', cards: [...], why?: 번호 }(그 판에 정확히 그 카드들)
 * 기본·도전 단계에서는 확인 전에 '판이 다 찼다'는 축하를 보이지 않는다(정답 신호가 되므로). 쉬움·시연에서만 바로 보인다.
 * 키보드: 카드에서 Enter/Space = 다음 계절 판으로, 1~4 = 해당 판, 0 = 카드 칸으로. 방향키로 옮긴 뒤 Enter = 그 자리에 놓기.
 */
(function (K) {
  'use strict';
  const ALL = ['봄', '여름', '가을', '겨울'];
  const STYLE = {
    봄: { bg: 'rose', tag: 'rose', ground: 'mint' },
    여름: { bg: 'mint', tag: 'mint', ground: 'mint' },
    가을: { bg: 'peach', tag: 'buttercup', ground: 'buttercup' },
    겨울: { bg: 'sky', tag: 'lavender', ground: 'cream' },
  };
  const josa = (w, a, b) => { const c = w.charCodeAt(w.length - 1); if (c < 0xac00 || c > 0xd7a3) return w + b; return w + ((c - 0xac00) % 28 ? a : b); };
  const reduceMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 그림 카드: 아이콘은 (0,-10) 둘레 ±26 안에 종이 조각으로 그린다. clue는 정답 계절 이름을 말하지 않는 힌트.
  const CARDS = {
    벚꽃: { season: '봄', easy: '나무에 가득 피는 연분홍 꽃이에요.', clue: '날이 따뜻해지기 시작할 때 연분홍 꽃이 나무 가득 피어요.', draw(p) {
      for (let i = 0; i < 5; i++) p({ type: 'ellipse', rx: 7, ry: 10, cy: -10 }, 'rose', { x: 0, y: -10, r: i * 72 });
      p({ type: 'circle', r: 5 }, 'buttercup', { x: 0, y: -10 });
    } },
    새싹: { season: '봄', easy: '땅에서 처음 나온 작고 여린 잎이에요.', clue: '얼었던 땅이 녹으면 씨앗에서 작은 잎이 돋아나요.', draw(p) {
      p({ type: 'ellipse', rx: 22, ry: 6, cy: 10 }, 'peach', { depth: 2 });
      p({ type: 'rect', w: 4, h: 20, x: -2, y: -10 }, 'mint', { flat: true });
      p({ type: 'path', d: 'M0 -8 C -6 -22 -20 -24 -24 -18 C -18 -8 -8 -6 0 -8 Z' }, 'mint');
      p({ type: 'path', d: 'M0 -10 C 6 -26 20 -30 24 -24 C 18 -12 8 -8 0 -10 Z' }, 'mint');
    } },
    개나리: { season: '봄', easy: '노란 꽃이 가지에 줄줄이 피는 나무예요.', clue: '잎보다 먼저 노란 꽃이 가지를 따라 줄줄이 피어요.', draw(p) {
      p({ type: 'rect', w: 50, h: 4, x: -25, y: -2, rx: 2 }, 'peach', { y: -10, r: -24, flat: true });
      [[-15, -2], [2, -12], [17, -21]].forEach(([x, y]) => {
        for (let i = 0; i < 4; i++) p({ type: 'ellipse', rx: 4, ry: 7.5, cy: -6.5 }, 'buttercup', { x, y, r: i * 90 + 45, flat: i > 0 });
        p({ type: 'circle', r: 2 }, 'peach', { x, y, flat: true, depth: 0 });
      });
    } },
    나비: { season: '봄', easy: '날개가 넓고 예쁜 작은 곤충이에요.', clue: '꽃이 피기 시작하면 꽃을 찾아 팔랑팔랑 날아다녀요.', draw(p) {
      p({ type: 'ellipse', rx: 12, ry: 10 }, 'lavender', { x: -12, y: -18, r: -20 });
      p({ type: 'ellipse', rx: 12, ry: 10 }, 'lavender', { x: 12, y: -18, r: 20 });
      p({ type: 'ellipse', rx: 8, ry: 7 }, 'rose', { x: -10, y: -2, r: 20 });
      p({ type: 'ellipse', rx: 8, ry: 7 }, 'rose', { x: 10, y: -2, r: -20 });
      p({ type: 'ellipse', rx: 3, ry: 15 }, 'ink', { x: 0, y: -10, depth: 0 });
    } },
    수박: { season: '여름', easy: '크고 둥근 과일이에요. 속이 빨갛고 물이 많아요.', clue: '아주 더운 날 시원하게 먹는 물이 많은 과일이에요.', draw(p) {
      p({ type: 'path', d: 'M-26 -16 A26 26 0 0 0 26 -16 Z' }, 'mint', { depth: 2 });
      p({ type: 'path', d: 'M-21 -16 A21 21 0 0 0 21 -16 Z' }, 'rose');
      [[-10, -9], [0, -4], [10, -9], [-4, -12], [5, -12]].forEach(([x, y]) => p({ type: 'ellipse', rx: 1.6, ry: 2.6 }, 'ink', { x, y, depth: 0, flat: true }));
    } },
    부채: { season: '여름', easy: '손으로 흔들면 바람이 나와요.', clue: '더울 때 손으로 흔들어 바람을 만들어요.', draw(p) {
      p({ type: 'rect', w: 6, h: 16, x: -3, y: 4, rx: 2 }, 'peach');
      p({ type: 'path', d: 'M0 8 L-24 -20 A36 36 0 0 1 24 -20 Z' }, 'sky', { depth: 2 });
      p({ type: 'path', d: 'M0 8 L-13 -7 A20 20 0 0 1 13 -7 Z' }, 'cream', { flat: true });
    } },
    해바라기: { season: '여름', easy: '키가 크고 해처럼 둥근 노란 꽃이에요.', clue: '햇볕이 뜨거운 때 해를 닮은 큰 노란 꽃이 피어요.', draw(p) {
      p({ type: 'rect', w: 3, h: 22, x: -1.5, y: -4 }, 'mint', { flat: true });
      p({ type: 'ellipse', rx: 4, ry: 8 }, 'mint', { x: 7, y: 8, r: 50 });
      for (let i = 0; i < 12; i++) p({ type: 'ellipse', rx: 4, ry: 9, cy: -11 }, 'buttercup', { x: 0, y: -12, r: i * 30, flat: i % 2 === 1 });
      p({ type: 'circle', r: 8 }, 'peach', { x: 0, y: -12, fill: K.palette.peach.layer });
    } },
    튜브: { season: '여름', easy: '물에 둥둥 뜨는 동그란 고리예요.', clue: '바다나 수영장에서 물놀이할 때 몸에 끼워요.', draw(p) {
      p({ type: 'circle', r: 21 }, 'rose', { x: 0, y: -10, depth: 2 });
      for (let i = 0; i < 4; i++) p({ type: 'rect', w: 10, h: 12, x: -5, y: -21 }, 'cream', { x: 0, y: -10, r: i * 90 + 45, flat: true, depth: 0 });
      p({ type: 'circle', r: 9 }, 'sky', { x: 0, y: -10, depth: 0, fill: K.palette.sky.light });
    } },
    단풍잎: { season: '가을', easy: '빨갛고 노랗게 색이 바뀐 나뭇잎이에요.', clue: '선선해지면 초록 잎이 붉고 노랗게 물들어요.', draw(p) {
      p({ type: 'rect', w: 2.5, h: 12, x: -1.25, y: 4 }, 'peach', { flat: true });
      p({ type: 'poly', points: '0,-36 6,-22 18,-28 14,-14 26,-10 12,-2 16,8 2,2 0,12 -2,2 -16,8 -12,-2 -26,-10 -14,-14 -18,-28 -6,-22' }, 'peach', { depth: 2, fill: K.palette.peach.layer });
      p({ type: 'poly', points: '0,-26 4,-16 10,-18 8,-10 14,-8 6,-2 0,4 -6,-2 -14,-8 -8,-10 -10,-18 -4,-16' }, 'rose', { flat: true, depth: 0 });
    } },
    고추잠자리: { season: '가을', easy: '빨간 몸에 날개가 넷인 곤충이에요.', clue: '하늘이 높고 맑을 때 빨간 몸으로 무리 지어 날아다녀요.', draw(p) {
      p({ type: 'ellipse', rx: 13, ry: 4.5 }, 'lavender', { x: -3, y: -21, r: -14, fill: K.palette.lavender.light });
      p({ type: 'ellipse', rx: 13, ry: 4.5 }, 'lavender', { x: -3, y: -3, r: 14, fill: K.palette.lavender.light });
      p({ type: 'ellipse', rx: 11, ry: 4 }, 'lavender', { x: 9, y: -19, r: -24, fill: K.palette.lavender.light });
      p({ type: 'ellipse', rx: 11, ry: 4 }, 'lavender', { x: 9, y: -5, r: 24, fill: K.palette.lavender.light });
      p({ type: 'ellipse', rx: 20, ry: 3.2 }, 'peach', { x: 4, y: -12, fill: '#D9473B' });
      p({ type: 'circle', r: 5 }, 'peach', { x: -18, y: -12, fill: '#C23A2F' });
    } },
    밤: { season: '가을', easy: '가시 껍질 속에 든 갈색 열매예요.', clue: '뾰족한 가시 껍질 속에 들어 있는 열매가 익어 떨어져요.', draw(p) {
      p({ type: 'path', d: 'M0 -32 C 14 -24 24 -10 22 4 Q 0 14 -22 4 C -24 -10 -14 -24 0 -32 Z' }, 'peach', { depth: 2, fill: '#B9805F' });
      p({ type: 'path', d: 'M-22 4 Q 0 14 22 4 Q 18 13 0 15 Q -18 13 -22 4 Z' }, 'cream', { flat: true });
      p({ type: 'ellipse', rx: 3, ry: 6 }, 'cream', { x: -9, y: -14, r: 20, flat: true, depth: 0 });
    } },
    감: { season: '가을', easy: '주황색으로 둥글게 익는 열매예요.', clue: '나뭇잎이 붉게 물들 무렵 주황색 열매가 말랑하게 익어요.', draw(p) {
      p({ type: 'circle', r: 18 }, 'peach', { x: 0, y: -8, depth: 2, fill: '#F4A261' });
      for (let i = 0; i < 4; i++) p({ type: 'ellipse', rx: 3.5, ry: 7, cy: -6 }, 'mint', { x: 0, y: -25, r: i * 90 + 45, flat: i > 0 });
      p({ type: 'rect', w: 3, h: 6, x: -1.5, y: -34 }, 'peach', { flat: true, depth: 0, fill: '#8A5A3C' });
    } },
    눈사람: { season: '겨울', easy: '눈을 굴려서 만든 사람이에요.', clue: '하얀 눈이 쌓이면 눈을 굴려서 만들어요.', draw(p) {
      p({ type: 'circle', r: 27 }, 'sky', { x: 0, y: -10, flat: true, depth: 0, fill: K.palette.sky.light });
      p({ type: 'circle', r: 15 }, 'cream', { x: 0, y: 2, depth: 2, fill: '#FFFFFF' });
      p({ type: 'circle', r: 11 }, 'cream', { x: 0, y: -21, depth: 2, fill: '#FFFFFF' });
      p({ type: 'rect', w: 22, h: 3, x: -11, y: -31 }, 'lavender', { flat: true });
      p({ type: 'rect', w: 14, h: 9, x: -7, y: -39, rx: 2 }, 'lavender');
      p({ type: 'rect', w: 22, h: 5, x: -11, y: -12, rx: 2 }, 'rose', { flat: true });
      [[-4, -23], [4, -23], [0, 0], [0, 7]].forEach(([x, y]) => p({ type: 'circle', r: 1.6 }, 'ink', { x, y, flat: true, depth: 0 }));
      p({ type: 'poly', points: '0,-20 8,-18 0,-16' }, 'peach', { flat: true, depth: 0 });
    } },
    장갑: { season: '겨울', easy: '손에 끼는 따뜻한 옷이에요.', clue: '손이 꽁꽁 시릴 만큼 추울 때 손에 껴요.', draw(p) {
      p({ type: 'ellipse', rx: 6, ry: 9 }, 'sky', { x: -14, y: -4, r: -30 });
      p({ type: 'path', d: 'M-12 12 L-13 -12 C-13 -32 13 -32 13 -14 L13 12 Z' }, 'sky', { depth: 2 });
      p({ type: 'rect', w: 30, h: 10, x: -15, y: 6, rx: 3 }, 'lavender');
      [[0, -16], [-5, -6], [5, -6]].forEach(([x, y]) => p({ type: 'circle', r: 2 }, 'cream', { x, y, flat: true, depth: 0 }));
    } },
    목도리: { season: '겨울', easy: '목에 두르는 따뜻하고 긴 천이에요.', clue: '찬 바람이 불 때 목에 둘러 따뜻하게 해요.', draw(p) {
      p({ type: 'rect', w: 12, h: 30, x: 4, y: -16, rx: 2 }, 'rose', { depth: 2 });
      p({ type: 'rect', w: 12, h: 4, x: 4, y: -4 }, 'buttercup', { flat: true, depth: 0 });
      p({ type: 'rect', w: 12, h: 4, x: 4, y: 5 }, 'buttercup', { flat: true, depth: 0 });
      p({ type: 'path', d: 'M-26 -28 Q 0 -16 26 -28 L 26 -15 Q 0 -3 -26 -15 Z' }, 'rose', { depth: 2 });
      [5, 9, 13].forEach((x) => p({ type: 'rect', w: 2, h: 5, x, y: 14 }, 'rose', { flat: true, depth: 0 }));
    } },
    썰매: { season: '겨울', easy: '눈 위에서 타고 미끄러지는 놀이 기구예요.', clue: '눈 덮인 언덕에서 타고 미끄러져 내려와요.', draw(p) {
      p({ type: 'rect', w: 7, h: 22, x: -23, y: -32, rx: 2 }, 'peach');
      p({ type: 'rect', w: 3, h: 12, x: -14, y: -6 }, 'lavender', { flat: true });
      p({ type: 'rect', w: 3, h: 12, x: 10, y: -6 }, 'lavender', { flat: true });
      p({ type: 'rect', w: 46, h: 9, x: -23, y: -14, rx: 3 }, 'peach', { depth: 2 });
      p({ type: 'rect', w: 50, h: 4, x: -25, y: 4, rx: 2 }, 'sky');
      p({ type: 'circle', r: 5 }, 'sky', { x: 25, y: 0, depth: 0 });
    } },
  };

  K.registerTool('seasons', {
    name: '계절 나무 분류판',
    create(box, o, kit) {
      const P = kit.palette;
      const CW = 64; const CH = 84;
      const piece = (st, g, shape, color, extra) => kit.piece(st, g, Object.assign({ shape, color, depth: 1 }, extra || {}));

      // ---- 나무 한 그루 + 흩날리는 조각(파티클) ----
      function drawTree(st, panel, season, cx, base, pw) {
        const S = STYLE[season];
        const parts = [];
        if (season === '여름') {
          const sun = kit.el('g', null, panel);
          for (let i = 0; i < 8; i++) piece(st, sun, { type: 'poly', points: '-3,-15 3,-15 0,-22' }, 'buttercup', { flat: true, depth: 0, r: i * 45 });
          piece(st, sun, { type: 'circle', r: 11 }, 'buttercup', { flat: true });
          kit.transform(sun, { x: pw - 24, y: 30 });
          parts.push({ g: sun, kind: 'spin', x: pw - 24, y: 30 });
        }
        piece(st, panel, { type: 'ellipse', rx: pw / 2 - 12, ry: 11, cx, cy: base + 2 }, S.ground, { depth: 2, fill: season === '겨울' ? '#FFFFFF' : null });
        const tree = kit.el('g', { class: 'ss-tree' }, panel);
        kit.transform(tree, { x: cx, y: base });
        piece(st, tree, { type: 'path', d: 'M-8 0 C-6 -20 -6 -40 -5 -56 L-20 -74 L-15 -78 L-2 -64 L-1 -84 L4 -84 L4 -62 L17 -76 L21 -71 L6 -52 C6 -36 6 -18 8 0 Z' }, 'peach', { depth: 2, fill: P.peach.layer });
        const blob = (x, y, r, color, fill) => piece(st, tree, { type: 'circle', r, cx: x, cy: y }, color, { depth: 2, fill });
        if (season === '봄') {
          blob(-28, -70, 26, 'rose'); blob(28, -68, 26, 'rose'); blob(0, -90, 38, 'rose');
          [[-30, -78], [-12, -104], [14, -96], [30, -74], [-6, -78], [20, -112], [-26, -58], [8, -62], [36, -58]].forEach(([x, y], i) => {
            piece(st, tree, { type: 'circle', r: 5.5, cx: x, cy: y }, 'cream', { flat: true, depth: 0, fill: i % 2 ? '#FFFFFF' : P.rose.light });
            piece(st, tree, { type: 'circle', r: 1.8, cx: x, cy: y }, 'rose', { flat: true, depth: 0, fill: P.rose.layer });
          });
          piece(st, tree, { type: 'ellipse', rx: 5, ry: 3, cx: -8, cy: -46 }, 'mint', { flat: true, depth: 0 });
        } else if (season === '여름') {
          blob(0, -86, 44, 'mint', P.mint.layer); blob(-30, -66, 28, 'mint'); blob(30, -64, 28, 'mint'); blob(0, -96, 30, 'mint');
          [[-14, -100], [16, -82], [-24, -70]].forEach(([x, y]) => piece(st, tree, { type: 'circle', r: 9, cx: x, cy: y }, 'mint', { flat: true, depth: 0, fill: P.mint.light }));
        } else if (season === '가을') {
          blob(-28, -68, 25, 'buttercup'); blob(28, -66, 25, 'peach'); blob(0, -90, 36, 'buttercup');
          blob(-8, -76, 18, 'peach'); blob(16, -98, 14, 'rose');
          [[-20, -96], [26, -82]].forEach(([x, y]) => piece(st, tree, { type: 'path', d: `M${x} ${y - 7} Q ${x + 6} ${y - 2} ${x} ${y + 7} Q ${x - 6} ${y - 2} ${x} ${y - 7} Z` }, 'rose', { flat: true, depth: 0 }));
        } else {
          // 잎이 다 진 가지: 잔가지를 여러 갈래로 뻗고 끝마다 눈을 얹는다
          [[-17, -75, 26, -38], [18, -73, 28, 36], [-1, -83, 32, -14], [3, -83, 30, 18], [-7, -60, 24, -68], [6, -56, 22, 64], [-26, -95, 14, 12], [27, -95, 14, -10]].forEach(([x, y, len, ang]) => {
            piece(st, tree, { type: 'rect', w: 4, h: len, x: -2, y: -len, rx: 2 }, 'peach', { x, y, r: ang, depth: 1, fill: P.peach.layer, flat: true });
            const a = (ang * Math.PI) / 180;
            piece(st, tree, { type: 'ellipse', rx: 7, ry: 3.6 }, 'cream', { x: x + Math.sin(a) * len, y: y - Math.cos(a) * len + 1, r: ang * 0.4, depth: 1, fill: '#FFFFFF' });
          });
          [[-12, -66], [12, -64], [0, -84]].forEach(([x, y]) => piece(st, tree, { type: 'ellipse', rx: 8, ry: 3.4, cx: x, cy: y }, 'cream', { depth: 1, fill: '#FFFFFF' }));
        }
        // 흩날리는 조각: 꽃잎(봄)·낙엽(가을)·눈(겨울)
        const fall = { 봄: 5, 가을: 5, 겨울: 9 }[season] || 0;
        for (let i = 0; i < fall; i++) {
          const g = kit.el('g', null, panel);
          if (season === '봄') piece(st, g, { type: 'ellipse', rx: 3, ry: 5 }, 'rose', { flat: true, depth: 0, fill: i % 2 ? P.rose.base : P.rose.light });
          else if (season === '가을') piece(st, g, { type: 'path', d: 'M0 -6 Q 5 -2 0 6 Q -5 -2 0 -6 Z' }, ['peach', 'buttercup', 'rose'][i % 3], { flat: true, depth: 0 });
          else piece(st, g, { type: 'circle', r: 2.2 + (i % 3) }, 'cream', { flat: true, depth: 0, fill: '#FFFFFF' });
          const x0 = 14 + ((i * 37) % (pw - 28));
          parts.push({ g, kind: 'fall', x0, top: 44, range: base - 44, v: 14 + (i % 3) * 6, ph: (i * 53) % (base - 44), amp: 5 + (i % 2) * 4, spin: season !== '겨울' });
        }
        return { tree, parts };
      }

      // ---- 활동지 낱장 그림 ----
      if (o.view === 'tree') {
        const season = o.season || '봄'; const pw = 170;
        const st = kit.stage(box, { viewBox: [pw + 190, 210], label: '계절 나무 그림', background: false });
        const L = st.layer('board'); kit.transform(L, { x: 95, y: 0 });
        piece(st, L, { type: 'rect', w: pw, h: 210, x: 0, y: 0, rx: 16 }, STYLE[season].bg, { depth: 1, fill: P[STYLE[season].bg].light });
        const t = drawTree(st, L, season, pw / 2, 180, pw);
        t.parts.forEach((q, i) => { if (q.kind === 'fall') kit.transform(q.g, { x: q.x0, y: 60 + ((i * 41) % 110), r: i * 40 }); });
        return { getState: () => ({ season }), setState() {}, check: () => ({ correct: true, feedback: '' }), reset() {}, solve() {} };
      }
      if (o.view === 'card') {
        const name = o.card || '벚꽃';
        const st = kit.stage(box, { viewBox: [180, 100], label: `${name} 그림 카드`, background: false });
        const g = kit.el('g', null, st.layer('cards')); kit.transform(g, { x: 90, y: 50 });
        drawCard(st, g, name);
        return { getState: () => ({ card: name }), setState() {}, check: () => ({ correct: true, feedback: '' }), reset() {}, solve() {} };
      }

      function drawCard(st, g, name) {
        piece(st, g, { type: 'rect', w: CW, h: CH, x: -CW / 2, y: -CH / 2, rx: 10 }, 'cream', { depth: 2 });
        piece(st, g, { type: 'rect', w: CW - 10, h: 19, x: -(CW - 10) / 2, y: 20, rx: 6 }, 'buttercup', { flat: true, depth: 0, fill: P.buttercup.light });
        const icon = kit.el('g', null, g);
        CARDS[name].draw((shape, color, extra) => piece(st, icon, shape, color, extra));
        kit.el('text', { x: 0, y: 34.5, 'text-anchor': 'middle', 'font-size': name.length > 4 ? 10 : name.length > 3 ? 11.5 : 13, class: 'pk-text', fill: P.ink.base }, g).textContent = name;
      }

      // ---- 분류판 ----
      const seasons = (o.seasons || ALL).filter((s) => STYLE[s]);
      const deco = !!o.decorate;
      // 꾸미기는 카드 12장을 두 줄로 크게 늘어놓도록 카드 칸을 키운다(휴대폰 375px에서도 카드가 손가락 크기)
      const W = 640; const H = deco ? 566 : 476; const PH = 320; const PY = 8; const GAP = 10;
      const PW = (W - 24 - GAP * (seasons.length - 1)) / seasons.length;
      const BASE = 172; const SLOT_Y = 186;
      // 교사 화면 시연: 전자칠판 뒤에서도 보이게 판을 넓힌다(player의 .pl-demo 기본 폭 360px를 이 교구만 넓힘)
      if (o.demoView) { box.style.maxWidth = 'min(1100px, 92vw)'; box.style.width = '100%'; }
      const liveCheer = !!(o.instant || o.demoView);
      const st = kit.stage(box, { viewBox: [W, H], label: deco ? '계절 나무 꾸미기판. 그림 카드를 나무 판 아무 곳에나 스티커처럼 붙여요.' : '계절 나무 분류판. 그림 카드를 알맞은 계절 나무 판으로 옮기세요.' });
      const boardL = st.layer('board'); const fxL = st.layer('fx'); const stickL = st.layer('stickers'); const cardL = st.layer('cards');
      const panels = seasons.map((season, i) => {
        const px = 12 + i * (PW + GAP);
        const g = kit.el('g', { class: 'ss-panel', 'aria-label': `${o.hideSeasonNames ? `${i + 1}번` : season} 나무 판` }, boardL);
        kit.transform(g, { x: px, y: PY });
        const S = STYLE[season];
        piece(st, g, { type: 'rect', w: PW, h: PH, x: 0, y: 0, rx: 16 }, S.bg, { depth: 2, fill: P[S.bg].light, texture: !o.print });
        const t = drawTree(st, g, season, PW / 2, BASE, PW);
        if (!deco) piece(st, g, { type: 'rect', w: PW - 12, h: PH - SLOT_Y - 6, x: 6, y: SLOT_Y, rx: 12 }, 'cream', { flat: true, depth: 1, fill: 'rgba(255,253,249,0.75)' });
        const tag = kit.el('g', null, g);
        kit.transform(tag, { x: PW / 2, y: 22 });
        piece(st, tag, { type: 'rect', w: 62, h: 28, rx: 14 }, S.tag, { depth: 1 });
        const hidden = o.hideSeasonNames;
        kit.el('text', { x: 0, y: 6.5, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: P[S.tag].dark }, tag).textContent = hidden ? '?' : season;
        const burst = [];
        if (!o.print) {
          for (let k = 0; k < 8; k++) {
            const b = kit.el('g', null, fxL);
            if (season === '겨울') piece(st, b, { type: 'circle', r: 4 }, 'cream', { flat: true, depth: 0, fill: '#FFFFFF' });
            else if (season === '여름') piece(st, b, { type: 'poly', points: '0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2' }, 'buttercup', { flat: true, depth: 0 });
            else piece(st, b, { type: 'path', d: 'M0 -7 Q 6 -2 0 7 Q -6 -2 0 -7 Z' }, season === '봄' ? 'rose' : ['peach', 'buttercup', 'rose'][k % 3], { flat: true, depth: 0 });
            kit.transform(b, { x: px + PW / 2, y: PY + BASE - 80, s: 0 });
            burst.push(b);
          }
        }
        return { season, px, g, tree: t.tree, parts: t.parts, tag, burst, wob: 0, done: false };
      });
      piece(st, boardL, { type: 'rect', w: W - 24, h: H - PH - PY - 18, x: 12, y: PY + PH + 10, rx: 16 }, 'cream', { depth: 2, fill: '#FFF9EE' });

      // ---- 쉬운 낱말 줄(쉬움): 카드를 누르면 무엇인지 한 줄로 알려 준다(낱말을 모르는 학생도 그림과 뜻으로 고르게) ----
      let wordLine = null;
      const meaning = (name) => (CARDS[name] && CARDS[name].easy) || '';
      if (o.words && !o.print) {
        wordLine = document.createElement('p');
        wordLine.className = 'ss-word';
        wordLine.setAttribute('aria-live', 'polite');
        wordLine.style.cssText = 'margin:8px 2px 0;min-height:1.5em;font-weight:700;line-height:1.45;word-break:keep-all;text-wrap:pretty';
        wordLine.textContent = '카드를 누르면 무엇인지 알려 줘요.';
        box.appendChild(wordLine);
      }
      const showWord = (name) => { if (wordLine) wordLine.textContent = `${name}: ${meaning(name)}`; };
      const clueOf = (name) => (!CARDS[name] ? '' : o.words ? `${meaning(name)} ${CARDS[name].clue}` : CARDS[name].clue);

      // ---- 까닭 고르기: 분류한 근거(날씨·생활)를 하나 고른다 ----
      let whyPick = null; let whyBtns = [];
      const whyOpt = o.why && Array.isArray(o.why.choices) ? o.why : null;
      if (whyOpt && !o.print) {
        const choices = whyOpt.choices.concat(o.whyHard && whyOpt.hard ? [whyOpt.hard] : []);
        const wrap = document.createElement('div');
        wrap.className = 'ss-why';
        wrap.style.cssText = 'margin-top:10px;display:grid;gap:8px';
        const ask = document.createElement('p');
        ask.style.cssText = 'margin:0;font-weight:700;line-height:1.45;word-break:keep-all;text-wrap:pretty';
        ask.id = `ss-why-${Math.random().toString(36).slice(2, 8)}`;
        ask.textContent = `까닭 고르기: ${whyOpt.ask || '왜 그 계절일까요?'}`;
        const row = document.createElement('div');
        row.setAttribute('role', 'radiogroup'); row.setAttribute('aria-labelledby', ask.id);
        row.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px';
        whyBtns = choices.map((text, i) => {
          const b = document.createElement('button');
          b.type = 'button'; b.className = 'pl-btn pl-btn--small';
          b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false');
          b.style.cssText = 'white-space:normal;line-height:1.35;word-break:keep-all;min-height:44px';
          b.textContent = text;
          b.addEventListener('click', () => { setWhy(i); kit.tick(); kit.recorder.log('seasons', state()); });
          row.appendChild(b);
          return b;
        });
        wrap.append(ask, row);
        box.appendChild(wrap);
      }
      function setWhy(i) {
        whyPick = Number.isInteger(i) && i >= 0 && i < whyBtns.length ? i : null;
        whyBtns.forEach((b, k) => {
          const on = k === whyPick;
          b.setAttribute('aria-checked', String(on));
          b.style.background = on ? 'var(--pc-peach-light, #FBE3D6)' : '';
          b.style.boxShadow = on ? '0 0 0 3px var(--pc-peach-layer, #E9A383)' : '';
        });
      }

      // ---- 카드 ----
      let cards = []; // {name, g, at: season|null}
      const reject = (name) => !CARDS[name];
      function buildCards(names) {
        cards.forEach((c) => c.g.remove());
        names = names.filter((n) => !reject(n));
        cards = names.map((name) => {
          const g = kit.el('g', { class: 'ss-card' }, cardL);
          kit.el('rect', { x: -CW / 2 - 4, y: -CH / 2 - 4, width: CW + 8, height: CH + 8, class: 'pk-hit' }, g);
          drawCard(st, g, name);
          const c = { name, g, at: null };
          if (!o.print) { if (deco) bindStamp(c); else bindCard(c); }
          if (wordLine) g.addEventListener('focus', () => showWord(name));
          return c;
        });
        cards.forEach((c) => { const t = slotOf(c); kit.transform(c.g, t); });
        labelAll();
      }
      const panelOf = (season) => panels.find((p) => p.season === season);
      function slotOf(c) {
        // 판 사이에서 놓은 카드는 그 자리에 머문다 — 짧게 끊어 끄는 학생(트랙패드)이 이어서 끌 수 있게
        if (!c.at && c.float) return { x: c.float.x, y: c.float.y, s: 1, r: 0 };
        if (c.at) {
          const p = panelOf(c.at);
          const mates = cards.filter((x) => x.at === c.at); const k = mates.indexOf(c); const n = mates.length;
          // 1~2장이면 한 줄로 크게, 시연 화면에서는 더 크게
          const cols = n <= 4 ? 2 : 3; const rows = n <= 2 ? 1 : n <= 4 ? 2 : Math.ceil(n / 3);
          const s = n <= 2 ? (o.demoView && n === 1 ? 1.3 : 0.95) : n <= 4 ? 0.74 : n <= 6 ? 0.56 : 0.44;
          const aw = PW - 12; const ah = PH - SLOT_Y - 6;
          const cx = n === 1 ? 0.5 : (k % cols) + 0.5;
          return { x: p.px + 6 + (aw * cx) / (n === 1 ? 1 : cols), y: PY + SLOT_Y + (ah * (Math.floor(k / cols) + 0.5)) / rows, s, r: 0 };
        }
        const k = cards.indexOf(c); const n = cards.length;
        const two = n > 8; const per = two ? Math.ceil(n / 2) : n;
        // 한 줄이면 카드 칸 높이만큼 크게(휴대폰 375px에서 누르는 칸이 44px 안팎)
        const sp = Math.min(two ? 90 : 100, (W - 48) / per); const s = Math.min(two ? (deco ? 1.2 : 0.74) : 1.35, (sp - 8) / CW);
        const row = two ? Math.floor(k / per) : 0; const col = two ? k % per : k;
        const inRow = two && row === 1 ? n - per : per;
        const y0 = PY + PH + 10; const th = H - PH - PY - 18;
        return { x: W / 2 + (col - (inRow - 1) / 2) * sp, y: two ? y0 + th * (row === 0 ? 0.26 : 0.74) : y0 + th / 2, s, r: 0 };
      }
      function seasonAt(x, y) {
        if (y < PY || y > PY + PH) return null;
        const p = panels.find((q) => x >= q.px - GAP / 2 && x <= q.px + PW + GAP / 2);
        return p ? p.season : null;
      }
      const anims = new WeakMap();
      function moveTo(c, t, animate) {
        const token = {}; anims.set(c.g, token);
        if (!animate || reduceMotion) { kit.transform(c.g, t); return; }
        const f = Object.assign({ x: 0, y: 0, s: 1, r: 0 }, c.g.__pk);
        kit.tween(320, (q) => { if (anims.get(c.g) !== token) return; kit.transform(c.g, { x: f.x + (t.x - f.x) * q, y: f.y + (t.y - f.y) * q, s: f.s + (t.s - f.s) * q, r: f.r * (1 - q) }); });
      }
      const layout = (animate, except) => cards.forEach((c) => { if (c !== except) moveTo(c, slotOf(c), animate); });
      function labelAll() {
        if (deco) { cards.forEach((c) => c.g.setAttribute('aria-label', `${c.name} 스티커 카드. Enter를 누르면 나무 판에 한 장 붙여요.`)); return; }
        cards.forEach((c) => c.g.setAttribute('aria-label', `${c.name} 카드, ${c.at ? `${o.hideSeasonNames ? `${seasons.indexOf(c.at) + 1}번` : c.at} 판에 있음` : '아직 옮기지 않음'}. Enter를 누르면 다음 판으로 옮겨요.`));
      }
      const bounce = (c) => {
        const base = slotOf(c).s;
        kit.spring(base * 1.18, base, { stiffness: 300, damping: 12, onUpdate: (v) => kit.transform(c.g, { s: v }) });
      };
      const wobble = (g, amp) => kit.spring(amp, 0, { stiffness: 260, damping: 7, onUpdate: (v) => kit.transform(g, { r: v, cx: 0, cy: 0 }) });

      function placed(c, via) {
        labelAll();
        const p = c.at && panelOf(c.at);
        if (o.instant && c.at && CARDS[c.name].season !== c.at) {
          kit.tick('no'); wobble(c.g, 14);
          // 단정('어울리지 않아요') 대신 경험을 떠올리게 묻는다
          kit.announce(`음… ${josa(c.name, '을', '를')} 언제 많이 보았나요? 다시 생각해 봐요. ${CARDS[c.name].clue}`);
          setTimeout(() => { c.at = null; layout(true); labelAll(); kit.recorder.log('seasons', state()); }, 650);
        } else {
          kit.tick(o.instant && c.at ? 'ok' : undefined);
          kit.announce(c.at ? `${c.name} 카드를 ${o.hideSeasonNames ? `${seasons.indexOf(c.at) + 1}번` : c.at} 나무 판에 넣었어요.` : `${c.name} 카드를 카드 칸으로 돌려놓았어요.`);
          if (p) bounce(c);
        }
        kit.recorder.log('seasons', Object.assign({ via }, state()));
        celebrateCheck();
      }

      function bindCard(c) {
        kit.drag(st, c.g, {
          bounds: [20, 20, W - 20, H - 20],
          onStart() { c.keyMoved = false; anims.set(c.g, {}); kit.transform(c.g, { s: Math.max(1.06, ((c.g.__pk && c.g.__pk.s) || 1) * 1.06), r: -4, cx: 0, cy: 0 }); kit.tick(); showWord(c.name); },
          snap(x, y) {
            c.at = seasonAt(x, y);
            const home = c.at ? null : (c.float = null, slotOf(c));
            // 카드 칸 근처가 아니면(멀리 끌어 왔으면) 놓은 자리에 둔다
            c.float = !c.at && home && Math.hypot(x - home.x, y - home.y) > 40 ? { x, y } : null;
            const t = slotOf(c); layout(true, c); kit.transform(c.g, { s: t.s, r: 0 }); return t;
          },
          onDrop(x, y, via) { placed(c, via); },
          keyActivate() {
            const cur = c.g.__pk;
            if (c.keyMoved) c.at = seasonAt(cur.x, cur.y); // 방향키로 옮긴 뒤 Enter = 그 자리에 놓기
            else { const i = c.at ? seasons.indexOf(c.at) : -1; c.at = i + 1 < seasons.length ? seasons[i + 1] : null; }
            c.keyMoved = false;
            layout(true); placed(c, 'keyboard');
          },
        });
        c.g.addEventListener('keydown', (e) => {
          if (e.key.startsWith('Arrow')) { c.keyMoved = true; anims.set(c.g, {}); return; }
          const k = Number(e.key);
          if (!Number.isInteger(k) || k < 0 || k > seasons.length || e.key === ' ') return;
          e.preventDefault(); c.keyMoved = false; c.at = k === 0 ? null : seasons[k - 1]; layout(true); placed(c, 'keyboard');
        });
      }

      // ---- 자유 꾸미기: 카드 칸의 카드는 '도장'이고, 나무 판에 놓으면 그 자리에 스티커가 한 장 붙는다 ----
      // 정답이 없다. 같은 카드를 여러 장 붙여도 되고, 스티커를 누르면 크기가 바뀌며, 카드 칸으로 끌어 오면 떼어진다.
      const SIZES = [0.55, 0.8, 1.1]; const MAX_STICKERS = 40;
      let stickers = []; // {card, g, x, y, size}
      let stampTurn = 0;
      const boardTop = PY + PH;
      function addSticker(card, x, y, size, quiet) {
        if (stickers.length >= MAX_STICKERS) { kit.announce('스티커는 40장까지 붙일 수 있어요. 필요 없는 스티커를 카드 칸으로 끌어 떼어 봐요.'); return null; }
        const g = kit.el('g', { class: 'ss-sticker' }, stickL);
        kit.el('rect', { x: -CW / 2 - 4, y: -CH / 2 - 4, width: CW + 8, height: CH + 8, class: 'pk-hit' }, g);
        drawCard(st, g, card);
        const k = { card, g, x, y, size: size == null ? 1 : size };
        kit.transform(g, { x, y, s: SIZES[k.size], r: ((stickers.length * 37) % 17) - 8, cx: 0, cy: 0 });
        stickers.push(k);
        labelSticker(k);
        if (!o.print) bindSticker(k);
        if (!quiet) { kit.tick('ok'); kit.announce(`${card} 스티커를 ${seasonAt(x, y) && !o.hideSeasonNames ? `${seasonAt(x, y)} 나무 판에` : '판에'} 붙였어요.`); }
        return k;
      }
      function labelSticker(k) {
        const sz = ['작은', '보통', '큰'][k.size];
        k.g.setAttribute('aria-label', `${sz} ${k.card} 스티커${seasonAt(k.x, k.y) && !o.hideSeasonNames ? `, ${seasonAt(k.x, k.y)} 판` : ''}. 방향키로 옮기고 Enter로 크기를 바꾸며 Delete로 떼어요.`);
      }
      function removeSticker(k) {
        stickers = stickers.filter((q) => q !== k); k.g.remove();
        kit.announce(`${k.card} 스티커를 떼었어요.`); kit.recorder.log('seasons', state());
      }
      function resize(k) {
        k.size = (k.size + 1) % SIZES.length;
        kit.spring(SIZES[k.size] * 1.15, SIZES[k.size], { stiffness: 300, damping: 12, onUpdate: (v) => kit.transform(k.g, { s: v }) });
        labelSticker(k); kit.tick(); kit.recorder.log('seasons', state());
      }
      function bindStamp(c) {
        kit.drag(st, c.g, {
          bounds: [20, 20, W - 20, H - 20],
          onStart() { anims.set(c.g, {}); kit.transform(c.g, { s: Math.max(1.06, ((c.g.__pk && c.g.__pk.s) || 1) * 1.06), r: -4, cx: 0, cy: 0 }); kit.tick(); showWord(c.name); },
          snap(x, y) {
            if (y < boardTop) { addSticker(c.name, x, Math.min(y, boardTop - 30)); kit.recorder.log('seasons', Object.assign({ via: 'pointer' }, state())); }
            const t = slotOf(c); kit.transform(c.g, { s: t.s, r: 0 }); return t;
          },
          keyActivate() {
            // 키보드: Enter마다 다음 나무 판의 빈자리에 한 장씩 붙인다
            const p = panels[stampTurn % panels.length]; const n = stickers.filter((q) => seasonAt(q.x, q.y) === p.season).length;
            stampTurn++;
            addSticker(c.name, p.px + PW * (0.3 + 0.4 * ((n * 0.618) % 1)), PY + 70 + ((n * 53) % (PH - 110)));
            moveTo(c, slotOf(c), true);
            kit.recorder.log('seasons', Object.assign({ via: 'keyboard' }, state()));
          },
        });
      }
      function bindSticker(k) {
        let from = null;
        kit.drag(st, k.g, {
          bounds: [16, 16, W - 16, H - 16],
          onStart() { from = { x: k.x, y: k.y }; kit.tick(); showWord(k.card); },
          onMove(x, y) { if (!from) { k.x = x; k.y = Math.min(y, boardTop - 16); } }, // 방향키 이동
          snap(x, y) {
            const moved = from && Math.hypot(x - from.x, y - from.y) > 6;
            if (from && !moved) { from = null; resize(k); return { x: k.x, y: k.y }; } // 누르기만 하면 크기 바꾸기
            from = null;
            if (y > boardTop + 10) { removeSticker(k); return { x, y }; } // 카드 칸으로 끌어 오면 떼기
            k.x = x; k.y = Math.min(y, boardTop - 16); labelSticker(k); kit.recorder.log('seasons', state());
            return { x: k.x, y: k.y };
          },
          keyActivate() { k.x = k.g.__pk.x; k.y = Math.min(k.g.__pk.y, boardTop - 16); resize(k); },
        });
        k.g.addEventListener('keydown', (e) => {
          if (e.key === 'Delete' || e.key === 'Backspace' || e.key === '0') { e.preventDefault(); removeSticker(k); }
        });
      }

      // ---- 축하: 그 계절 카드가 빠짐없이(다른 계절 카드 없이) 모이면 나무가 흔들리며 조각을 날린다 ----
      // force: 확인에서 맞았을 때·시연에서는 단계와 상관없이 축하한다
      function celebrateCheck(quiet, force) {
        panels.forEach((p) => {
          const want = cards.filter((c) => CARDS[c.name].season === p.season);
          const inside = cards.filter((c) => c.at === p.season);
          const full = want.length > 0 && want.every((c) => c.at === p.season) && inside.length === want.length;
          if (full && !p.done && !quiet && !o.print && (liveCheer || force)) celebrate(p);
          p.done = full && (liveCheer || force || p.done);
        });
      }
      function celebrate(p) {
        kit.tick('ok');
        kit.spring(9, 0, { stiffness: 140, damping: 5, onUpdate: (v) => { p.wob = v; kit.transform(p.tree, { r: v, cx: 0, cy: 0 }); } });
        kit.spring(-14, 0, { stiffness: 320, damping: 9, onUpdate: (v) => kit.transform(p.tag, { y: 22 + v }) });
        p.burst.forEach((b, k) => {
          const a = (k / p.burst.length) * Math.PI * 2; const sx = p.px + PW / 2; const sy = PY + BASE - 84;
          const dx = Math.cos(a) * (34 + (k % 3) * 10); const dy = 40 + (k % 4) * 12;
          kit.tween(1100, (q) => kit.transform(b, { x: sx + dx * q, y: sy + dy * q - Math.sin(q * Math.PI) * 36, r: q * 300, cx: 0, cy: 0, s: q < 0.85 ? 1 : (1 - q) / 0.15 }), { ease: (t) => t });
        });
        kit.announce(`${o.hideSeasonNames ? '이' : p.season} 나무 판의 카드를 모두 찾았어요!`);
      }

      // ---- 흩날림(평소 움직임): 그림자 필터가 없는 작은 조각만 transform으로 움직인다 ----
      if (!o.print && !reduceMotion) {
        const t0 = performance.now();
        const loop = (now) => {
          if (!st.svg.isConnected) return;
          const t = (now - t0) / 1000;
          panels.forEach((p) => p.parts.forEach((q) => {
            if (q.kind === 'spin') { kit.transform(q.g, { r: t * 12, cx: 0, cy: 0 }); return; }
            const prog = (t * q.v + q.ph) % q.range;
            kit.transform(q.g, { x: q.x0 + Math.sin(t * 1.3 + q.ph) * q.amp, y: q.top + prog, r: q.spin ? t * 70 + q.ph : 0, cx: 0, cy: 0, s: Math.min(1, (q.range - prog) / 14) });
          }));
          requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
      } else {
        panels.forEach((p) => p.parts.forEach((q, i) => { if (q.kind === 'fall') kit.transform(q.g, { x: q.x0, y: q.top + ((i * 41) % q.range), r: i * 40 }); }));
      }

      const round1 = (v) => Math.round(v);
      function state() {
        if (deco) return { stickers: stickers.map((k) => ({ card: k.card, x: round1(k.x), y: round1(k.y), s: k.size, season: seasonAt(k.x, k.y) })) };
        const s = { placed: Object.fromEntries(cards.map((c) => [c.name, c.at])) };
        if (whyOpt) s.why = whyPick;
        return s;
      }
      const initial = o.cards || ['벚꽃', '수박', '단풍잎', '눈사람'];
      buildCards(initial);
      const namesOf = (t) => (t && (t.sorted ? Object.keys(t.sorted) : t.cards)) || [];
      const apply = (placedMap, animate) => {
        cards.forEach((c) => { if (placedMap && c.name in placedMap) c.at = seasons.includes(placedMap[c.name]) ? placedMap[c.name] : null; });
        layout(animate); labelAll(); celebrateCheck(!animate);
      };
      const solution = (t) => {
        if (t.sorted) return t.sorted;
        const m = {};
        cards.forEach((c) => { if (t.cards.includes(c.name)) m[c.name] = t.season; else if (c.at === t.season) m[c.name] = null; });
        return m;
      };
      function clearStickers() { stickers.forEach((k) => k.g.remove()); stickers = []; stampTurn = 0; }
      // 까닭을 묻는 문항: 카드가 다 맞으면 까닭을 본다
      // 틀린 카드에 빨간 테두리를 잠깐 두고 흔든다 — '1장이 틀렸어요'만으로는 어느 카드인지 몰라서(S2 아미라)
      function flagWrong(names) {
        for (const c of cards.filter((x) => names.includes(x.name))) {
          c.g.classList.add('pk-no');
          const base = Object.assign({}, c.g.__pk);
          kit.tween(500, (q) => kit.transform(c.g, { r: Math.sin(q * Math.PI * 4) * 6 * (1 - q), cx: 0, cy: 0 })).then(() => kit.transform(c.g, { r: base.r || 0 }));
          setTimeout(() => c.g.classList.remove('pk-no'), 2500);
        }
      }
      function checkWhy(t, okText) {
        if (!whyOpt || !Number.isInteger(t.why)) return { correct: true, feedback: okText };
        // 아직 까닭을 고르지 않았으면 '다 하지 않음'(incomplete) — 플레이어가 시도로 세지 않는다
        if (whyPick == null) return { correct: false, incomplete: true, feedback: '카드는 모두 알맞게 넣었어요. 이제 아래에서 까닭을 하나 골라요.', hint: `‘${whyOpt.card}’: ${clueOf(whyOpt.card)}` };
        if (whyPick !== t.why) return { correct: false, feedback: '카드는 맞아요. 고른 까닭을 다시 생각해 봐요. 그때 날씨는 어떤가요?', hint: `‘${whyOpt.card}’: ${clueOf(whyOpt.card)}` };
        return { correct: true, feedback: `${okText} 까닭도 알맞게 골랐어요.` };
      }

      return {
        getState: state,
        setState(s) {
          if (deco) { clearStickers(); ((s && s.stickers) || []).forEach((k) => { if (CARDS[k.card]) addSticker(k.card, k.x, k.y, k.s, true); }); return; }
          if (s && s.cards) buildCards(s.cards);
          apply((s && s.placed) || {}, false);
          if (whyOpt && s && 'why' in s) setWhy(s.why);
        },
        setTarget(t) {
          if (o.cards) return;
          const need = namesOf(t).filter((n) => !cards.some((c) => c.name === n));
          if (need.length) buildCards(cards.map((c) => c.name).filter((n) => namesOf(t).includes(n)).concat(need));
        },
        reset() { clearStickers(); cards.forEach((c) => { c.at = null; c.float = null; }); panels.forEach((p) => { p.done = false; }); setWhy(null); layout(true); labelAll(); },
        solve(t) {
          if (deco) { if (!stickers.length) addSticker(cards[0].name, panels[0].px + PW / 2, PY + 90, 1, true); return; }
          apply(solution(t), true);
          if (whyOpt && Number.isInteger(t.why)) setWhy(t.why);
        },
        check(t) {
          if (deco || !t) return { correct: true, feedback: '' };
          const s = state().placed;
          if (t.sorted) {
            const names = Object.keys(t.sorted);
            const left = names.filter((n) => !s[n]);
            const wrong = names.filter((n) => s[n] && s[n] !== t.sorted[n]);
            if (!left.length && !wrong.length) { const r = checkWhy(t, '맞아요! 모든 카드가 알맞은 계절 나무에 들어갔어요.'); if (r.correct) celebrateCheck(false, true); return r; }
            if (left.length) return { correct: false, feedback: `아직 옮기지 않은 카드가 ${left.length}장 있어요.`, hint: `‘${left[0]}’: ${clueOf(left[0])}` };
            flagWrong(wrong);
            return { correct: false, feedback: `${wrong.length}장이 다른 계절 나무에 들어가 있어요. 흔들리는 카드를 다시 보세요.`, hint: `‘${wrong[0]}’: ${clueOf(wrong[0])}` };
          }
          const label = o.hideSeasonNames ? '그 나무 판' : `${t.season} 나무 판`;
          const inside = Object.keys(s).filter((n) => s[n] === t.season);
          const missing = t.cards.filter((n) => s[n] !== t.season);
          const extra = inside.filter((n) => !t.cards.includes(n));
          if (!missing.length && !extra.length) { const r = checkWhy(t, `맞아요! ${label}에 가장 잘 어울리는 카드를 모두 찾았어요.`); if (r.correct) celebrateCheck(false, true); return r; }
          if (extra.length) flagWrong(extra);
          if (extra.length) return { correct: false, feedback: `${josa(extra[0], '은', '는')} ${josa(label, '과', '와')} 잘 어울리지 않아요.`, hint: `‘${extra[0]}’: ${clueOf(extra[0])}` };
          return { correct: false, feedback: `${label}에 들어갈 카드가 ${missing.length}장 더 있어요.`, hint: `‘${missing[0]}’: ${clueOf(missing[0])}` };
        },
        // 교사 시연: 카드가 하나씩 날아가 제자리를 찾는다. 이미 놓여 있으면 먼저 카드 칸으로 되돌려 다시 보여 준다.
        async demo(t) {
          if (cards.some((c) => c.at)) { cards.forEach((c) => { c.at = null; }); panels.forEach((p) => { p.done = false; }); layout(true); labelAll(); await kit.wait(600); }
          const m = solution(t);
          for (const c of cards) {
            if (!(c.name in m)) continue;
            c.at = m[c.name]; layout(true); labelAll();
            if (c.at) setTimeout(() => bounce(c), 330);
            celebrateCheck(false, true);
            await kit.wait(750);
          }
        },
      };
    },
  });
})(window.PaperKit);
