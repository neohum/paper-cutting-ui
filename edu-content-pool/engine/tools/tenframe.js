/* 십칸 수 모형 보드 — 바구니의 종이 사과(또는 동그란 칩)를 2×5 십칸에 끌어 놓고 센다.
 * 조작: 끌어서 칸에 놓기(가까운 빈칸에 딱 붙음), 칸 밖으로 끌면 바구니로 돌아감.
 *       누르기(탭)·Enter·Space = 바구니 → 다음 빈칸 / 칸 → 바구니. 방향키로 옮긴 뒤 Enter로 내려놓을 수도 있다.
 * 옵션: item('apple'|'chip'), color(칩 색), supply(바구니 개수, 기본 10), showCount(기본 true), showWord(수 읽기 '일곱 · 칠'),
 *       cellNumbers(칸 순서 번호 1~10, 쉬움), start({count}|{filled}|{parts}), print(활동지: 바구니·수 카드 숨김)
 *       showGoal(쉬움: 바구니에 '일곱 · 7', '5에 하나 더' 같은 목표 표시), scatter(도전: 조각이 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없음)
 *       askNumber(놓은 뒤 '몇이 되었나요?' 수 세 개 중 고르기 — 수 카드를 가린 단계에서 '말할 수 있다'를 확인)
 *       revealAfterCheck(수 카드·수 줄 강조를 '확인' 뒤에만 보이고, 조각을 바꾸면 다시 가림 — 카드만 보고 누르지 않게)
 *       numberLine(판 아래 0~10 수 줄 — 지금 개수의 수가 강조된다. 수 카드를 가린 단계에서는 확인·수 고르기 뒤에만)
 *       lineMode(반구체→추상 단계: 판을 종이로 덮고 수 줄의 수를 눌러 답한다. 상태의 count는 문항이 정한다)
 *       twoColor(모으기·가르기: 두 바구니(빨강·초록 사과 / 하늘·복숭아 칩)에서 꺼내 놓는다. 상태에 색별 개수 parts가 남는다)
 * 상태: { count, filled: [칸 번호 0~9], said?, parts?: [가, 나], colors?: [칸 순서대로 0|1] }
 * check: {count, more?, less?, of?: {more|less, is}} — 목표 수 = count + more − less (of는 '어떤 수보다 1 큰 수가 6' 같은 거꾸로 문항의 피드백용)
 *        twoColor: {total?, parts: [가|null, 나|null], ask?: 'total'|'b', avoid?: [[가,나]…]} — 모으기(합 고르기)·가르기(한쪽 정해 주기)·다른 방법 찾기
 */
(function (K) {
  // 받침에 맞는 목적격 조사: 사과를, 칩을 / 숫자는 읽는 소리(일·삼·육·칠·팔·십)로 — 8을, 4를
  const obj = (w) => { const c = w.charCodeAt(w.length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 ? '을' : '를'; };
  const NUM_OBJ = { 0: '을', 1: '을', 2: '를', 3: '을', 4: '를', 5: '를', 6: '을', 7: '을', 8: '을', 9: '를', 10: '을' };
  const NUM_GWA = { 0: '과', 1: '과', 2: '와', 3: '과', 4: '와', 5: '와', 6: '과', 7: '과', 8: '과', 9: '와', 10: '과' };
  const WORDS = ['영', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉', '열'];
  const SINO = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십'];
  // '개' 같은 단위 앞에서는 꼴이 바뀐다: 한 개·두 개·세 개·네 개(하나 개·넷 개가 아님)
  const UNIT = ['영', '한', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉', '열'];
  // 도전(scatter)에서 조각이 들어가는 칸 차례 — 줄마다 섞여 '윗줄 5칸' 묶음으로 셀 수 없다
  const SCATTER = [6, 2, 8, 0, 4, 9, 3, 7, 1, 5];
  // 숫자를 읽었을 때 받침이 없으면 '예요'(2 이, 4 사, 5 오, 9 구), 있으면 '이에요'
  const ieyo = (n) => ([2, 4, 5, 9].includes(n) ? `${n}예요` : `${n}이에요`);
  const nun = (n) => ([2, 4, 5, 9].includes(n) ? `${n}는` : `${n}은`);
  // 낱말 조사: 사과가/칩이, 사과와/칩과, 사과는/칩은
  const fin = (w) => { const c = w.charCodeAt(w.length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28; };
  const ga = (w) => `${w}${fin(w) ? '이' : '가'}`; const wa = (w) => `${w}${fin(w) ? '과' : '와'}`; const eun = (w) => `${w}${fin(w) ? '은' : '는'}`;
  // 숫자 + 로/으로: 받침 ㄹ(1 일, 7 칠, 8 팔)과 받침 없는 수는 '로', 나머지 받침(0 영, 3 삼, 6 육, 10 십)은 '으로'
  const ro = (n) => `${n}${[0, 3, 6, 10].includes(n) ? '으로' : '로'}`;
  // 힌트 단계(새 계약): 1 = 방법만(시도 전에도, 목표 수를 말하지 않음), 2 = 틀린 단계 짚기, 3 = 풀이 한 걸음
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    const cap = a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1;
    return Math.max(1, Math.min(3, want, cap));
  };
  const APPLE_D = 'M0 -11 C -7 -18 -21 -16 -20 -1 C -19 13 -8 21 0 17 C 8 21 19 13 20 -1 C 21 -16 7 -18 0 -11 Z';

  // 장면 모티프 '사과' — 수 세기 도입 그림의 나무에 셀 수 있는 사과를 단다(교구와 같은 종이 사과)
  if (K.motifs && !K.motifs.apple) {
    K.motifs.apple = (st, p, o) => {
      const g = K.el('g', null, p);
      K.piece(st, g, { shape: { type: 'path', d: APPLE_D }, color: o.color || 'rose', depth: 2 });
      K.piece(st, g, { shape: { type: 'path', d: 'M2 -15 Q 11 -24 17 -17 Q 9 -11 2 -15 Z' }, color: 'mint', depth: 1, flat: true });
      K.transform(g, { x: o.x, y: o.y, s: o.s || 0.5 });
      return g;
    };
  }

  K.registerTool('tenframe', {
    name: '십칸 수 모형 보드',
    create(box, o, kit) {
      const print = !!o.print;
      const apple = (o.item || 'apple') === 'apple';
      const two = !!o.twoColor;
      const lineMode = !!o.lineMode && !print;
      const noun = apple ? '사과' : '칩';
      // 두 색: 사과는 빨강·초록, 칩은 하늘·복숭아(흑백 인쇄에서도 구별되게 둘째 색 조각에는 안쪽 무늬를 둔다)
      const COL = two ? (apple ? [{ c: 'rose', n: '빨간 사과' }, { c: 'mint', n: '초록 사과' }] : [{ c: o.color || 'sky', n: '하늘색 칩' }, { c: 'peach', n: '주황색 칩' }]) : [{ c: apple ? 'rose' : (o.color || 'sky'), n: noun }];
      const liveCount = o.showCount !== false && !print;
      let revealed = false;
      const countOn = () => liveCount && !lineMode && (!o.revealAfterCheck || revealed);
      const supply = two ? 9 : Math.max(1, Math.min(10, o.supply || 10));
      const order = o.scatter ? SCATTER : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let said = null; let target = null;
      const W = 480; const LINE_Y = 392; const H = (o.numberLine || lineMode) && !print ? 446 : 380;
      const st = kit.stage(box, { viewBox: [W, H], label: lineMode ? '수 줄. 판은 가려져 있어요. 수 줄에서 알맞은 수를 눌러요.' : `십칸 수 모형 보드. ${noun}${obj(noun)} 끌어 칸에 놓거나, 눌러서 넣고 빼요.` });
      const CELL = 62; const GAP = 6; const PAD = 14;
      const bx = 20; const by = 14;
      const bw = PAD * 2 + 5 * CELL + 4 * GAP; const bh = PAD * 2 + 2 * CELL + GAP;
      if (print) st.svg.setAttribute('viewBox', `${bx - 4} ${by - 4} ${bw + 8} ${bh + 10}`);

      // ---- 보드: 복숭아 판(종이 결) 위에 크림색 창 10개 ----
      const B = st.layer('board');
      kit.piece(st, B, { shape: { type: 'rect', x: bx, y: by, w: bw, h: bh, rx: 20 }, color: 'peach', depth: 3, texture: true });
      const cellPos = (i) => ({ x: bx + PAD + (i % 5) * (CELL + GAP) + CELL / 2, y: by + PAD + Math.floor(i / 5) * (CELL + GAP) + CELL / 2 });
      for (let i = 0; i < 10; i++) {
        const c = cellPos(i);
        kit.piece(st, B, { shape: { type: 'rect', x: c.x - CELL / 2, y: c.y - CELL / 2, w: CELL, h: CELL, rx: 12 }, color: 'cream', depth: 0, flat: true, fill: kit.palette.cream.light, stroke: kit.palette.peach.layer, strokeWidth: 1.5 });
        if (o.cellNumbers && !print) kit.el('text', { x: c.x - CELL / 2 + 7, y: c.y - CELL / 2 + 18, 'font-size': 16, class: 'pk-text', fill: kit.palette.peach.dark, opacity: 0.7 }, B).textContent = i + 1;
      }

      // ---- 수 카드(오른쪽): 숫자 + 읽기 ----
      let cardG = null; let numT = null; let wordT = null; let goalT = null; let partT = null;
      if (!print) {
        cardG = kit.el('g', null, st.layer('card'));
        kit.piece(st, cardG, { shape: { type: 'rect', x: -34, y: -79, w: 68, h: 158, rx: 16 }, color: 'buttercup', depth: 2 });
        kit.piece(st, cardG, { shape: { type: 'rect', x: -27, y: -66, w: 54, h: 86, rx: 12 }, color: 'cream', depth: 1 });
        numT = kit.el('text', { x: 0, y: 0, 'text-anchor': 'middle', 'font-size': 58, class: 'pk-text', fill: kit.palette.ink.base }, cardG);
        wordT = kit.el('text', { x: 0, y: 50, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: kit.palette.buttercup.dark }, cardG);
        kit.transform(cardG, { x: 430, y: by + bh / 2 });
      }

      // ---- 바구니 ----
      const homes = []; // [{x,y,col}]
      const pileAt = [{ x: 150, y: 290 }, { x: 330, y: 290 }];
      if (!print) {
        const T = st.layer('tray');
        kit.piece(st, T, { shape: { type: 'rect', x: 40, y: 192, w: 400, h: 176, rx: 26 }, color: 'lavender', depth: 3, texture: true });
        kit.piece(st, T, { shape: { type: 'rect', x: 54, y: 206, w: 372, h: 148, rx: 20 }, color: 'lavender', depth: 0, flat: true, fill: kit.palette.lavender.light });
        if (two) {
          // 두 바구니: 조각이 한자리에 쌓여 있고, 누를 때마다 한 개씩 칸으로 간다(18개를 펼쳐 두면 손가락 크기가 안 나온다)
          COL.forEach((cl, k) => {
            const p = pileAt[k];
            kit.piece(st, T, { shape: { type: 'rect', x: p.x - 78, y: 214, w: 156, h: 132, rx: 18 }, color: cl.c, depth: 1, fill: kit.palette[cl.c].light });
            kit.el('text', { x: p.x, y: 236, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: kit.palette[cl.c].dark }, T).textContent = `${cl.n} 바구니`;
          });
          for (let k = 0; k < 2; k++) for (let i = 0; i < supply; i++) homes.push({ x: pileAt[k].x + ((i % 3) - 1) * 3, y: pileAt[k].y + 14 - Math.floor(i / 3) * 3, col: k });
        } else {
          kit.el('text', { x: 66, y: 226, 'font-size': 12, class: 'pk-text', fill: kit.palette.lavender.dark, opacity: 0.8 }, T).textContent = `${noun} 바구니`;
          for (let i = 0; i < supply; i++) {
            // 손으로 쏟아 놓은 듯 살짝 흐트러진 자리
            const jx = [4, -5, 3, -2, 6, -4, 2, -6, 5, -3][i]; const jy = [-4, 5, -2, 6, -5, 3, -6, 2, 4, -3][i];
            homes.push({ x: 240 + ((i % 5) - 2) * 74 + jx, y: (i < 5 ? 254 : 318) + jy, col: 0 });
          }
        }
        if (o.showGoal) goalT = two ? kit.el('text', { x: 240, y: 188, 'text-anchor': 'middle', 'font-size': 18, 'font-weight': 700, class: 'pk-text', fill: kit.palette.rose.dark }, st.layer('goal'))
          : kit.el('text', { x: 414, y: 228, 'text-anchor': 'end', 'font-size': 18, 'font-weight': 700, class: 'pk-text', fill: kit.palette.rose.dark }, T);
      } else for (let i = 0; i < (two ? supply * 2 : supply); i++) homes.push({ x: 0, y: 0, col: two ? Math.floor(i / supply) : 0 });

      // ---- 조각(사과/칩) ----
      const CL = st.layer('counters');
      const cells = new Array(10).fill(-1); // 칸 → 조각 번호
      const placedScale = 1.25;
      const counters = homes.map((home, i) => {
        const g = kit.el('g', { class: 'tf-counter' }, CL);
        kit.el('circle', { r: 37, class: 'pk-hit' }, g); // 74 단위 = 375px 휴대폰에서도 44px 이상
        const c = COL[home.col].c;
        if (apple) {
          kit.piece(st, g, { shape: { type: 'path', d: APPLE_D }, color: c, depth: 2 });
          kit.piece(st, g, { shape: { type: 'rect', x: -1.6, y: -21, w: 3.2, h: 10, rx: 1.5 }, color: 'peach', depth: 0, fill: kit.palette.peach.dark, flat: true });
          kit.piece(st, g, { shape: { type: 'path', d: 'M2 -15 Q 11 -24 17 -17 Q 9 -11 2 -15 Z' }, color: home.col ? 'buttercup' : 'mint', depth: 1, flat: true });
          kit.el('ellipse', { cx: -9, cy: -3, rx: 3.5, ry: 6, fill: '#fff', opacity: 0.5, 'pointer-events': 'none', class: 'tf-gloss' }, g);
        } else {
          kit.piece(st, g, { shape: { type: 'circle', r: 19 }, color: c, depth: 2 });
          kit.piece(st, g, { shape: { type: 'circle', r: 11 }, color: c, depth: 0, flat: true, fill: kit.palette[c] ? kit.palette[c].light : '#fff' });
        }
        // 둘째 색에는 무늬(가로줄)를 둔다 — 흑백 인쇄·색각이 다른 학생도 두 색을 구별하게
        if (home.col === 1) kit.el('path', { d: 'M-9 -2 H9 M-9 4 H9', stroke: kit.palette.ink.light, 'stroke-width': 2.4, 'stroke-linecap': 'round', fill: 'none', class: 'pk-text' }, g);
        kit.transform(g, { x: home.x, y: home.y, s: 1 });
        const ct = { i, g, home, col: home.col, cell: -1 };
        g.__ct = ct;
        return ct;
      });

      const count = () => cells.filter((v) => v >= 0).length;
      const parts = () => { const p = [0, 0]; cells.forEach((v) => { if (v >= 0) p[counters[v].col]++; }); return p; };
      const firstEmpty = () => { const k = order.find((c) => cells[c] < 0); return k == null ? null : k; };
      let seq = 0; // 놓은 차례(키보드 로빙 탭: 마지막에 놓은 조각 하나만 Tab에 잡힌다)
      const nameOf = (ct) => COL[ct.col].n;
      const label = (ct) => ct.g.setAttribute('aria-label', ct.cell >= 0 ? `${nameOf(ct)}, ${ct.cell + 1}번 칸` : `${nameOf(ct)}, 바구니${two ? `(남은 ${counters.filter((x) => x.col === ct.col && x.cell < 0).length}개)` : ''}`);
      const scaleTo = (ct, s, pop) => {
        const from = (ct.g.__pk && ct.g.__pk.s) || 1;
        kit.spring(pop ? from * 0.8 : from, s, { stiffness: 320, damping: pop ? 12 : 22, onUpdate: (v) => kit.transform(ct.g, { s: v }) });
      };
      const assign = (ct, to) => {
        if (ct.cell >= 0) cells[ct.cell] = -1;
        ct.cell = to; ct.seq = to >= 0 ? ++seq : 0;
        if (to >= 0) cells[to] = ct.i;
        label(ct);
      };
      const nearestEmpty = (x, y, own) => {
        let best = null; let bd = Infinity;
        for (let k = 0; k < 10; k++) {
          if (cells[k] >= 0 && k !== own) continue;
          const p = cellPos(k); const d = Math.hypot(p.x - x, p.y - y);
          if (d < bd) { bd = d; best = k; }
        }
        return best;
      };
      const inBoard = (x, y) => x > bx - 10 && x < bx + bw + 10 && y > by - 10 && y < by + bh + 10;

      // ---- 수 줄(numberLine / lineMode) ----
      const lineCells = [];
      if ((o.numberLine || lineMode) && !print) {
        const NL = st.layer('line');
        const n = 11; const cw = 40; const x0 = (W - n * cw) / 2;
        kit.el('text', { x: x0, y: LINE_Y - 12, 'font-size': 13, class: 'pk-text', fill: kit.palette.ink.light }, NL).textContent = lineMode ? '수 줄에서 알맞은 수를 눌러요' : '수 줄';
        for (let k = 0; k < n; k++) {
          const g = kit.el('g', { class: 'tf-line' }, NL);
          kit.transform(g, { x: x0 + k * cw + cw / 2, y: LINE_Y + 22 });
          // 수 줄 칸은 40 단위지만 판정 영역은 위아래로 길게(48) — 누르는 학생은 lineMode에서만
          const bg = kit.el('rect', { x: -cw / 2 + 2, y: -22, width: cw - 4, height: 44, rx: 8, fill: kit.palette.cream.light, stroke: kit.palette.sky.layer, 'stroke-width': 1.5 }, g);
          kit.el('text', { x: 0, y: 8, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: kit.palette.ink.base }, g).textContent = k;
          if (lineMode) {
            kit.el('rect', { x: -cw / 2, y: -26, width: cw, height: 52, class: 'pk-hit' }, g);
            g.setAttribute('tabindex', '0'); g.setAttribute('role', 'radio'); g.setAttribute('aria-label', `수 ${k}`); g.style.cursor = 'pointer';
            const go = (e) => { if (e) e.preventDefault(); said = k; revealed = false; paint(false); kit.tick(); kit.recorder.log('tenframe', state()); kit.announce(`${k}${NUM_OBJ[k]} 골랐어요.`); };
            g.addEventListener('click', go);
            // 수 줄은 라디오 묶음처럼: 화살표가 옆 수로 옮기며 바로 고른다(키보드 학생도 한 번에 답한다)
            g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') go(e); else if (/^Arrow(Right|Left|Up|Down)$/.test(e.key)) { e.preventDefault(); const d = e.key === 'ArrowRight' || e.key === 'ArrowUp' ? 1 : -1; const j = Math.min(n - 1, Math.max(0, (said == null ? k : said) + d)); lineCells[j].g.dispatchEvent(new Event('click')); lineCells[j].g.focus(); } });
          }
          lineCells.push({ g, bg });
        }
      }
      // 판 덮개(lineMode): 칩은 있지만 보지 않고 수만으로 생각한다
      if (lineMode) {
        const cover = kit.el('g', { 'pointer-events': 'none' }, st.layer('cover'));
        kit.piece(st, cover, { shape: { type: 'rect', x: bx - 2, y: by - 2, w: bw + 4, h: bh + 4, rx: 20 }, color: 'sky', depth: 2, fill: kit.palette.sky.light });
        kit.el('text', { x: bx + bw / 2, y: by + bh / 2 + 8, 'text-anchor': 'middle', 'font-size': 22, class: 'pk-text', fill: kit.palette.sky.dark }, cover).textContent = '판을 가렸어요. 수만 보고 생각해요';
        st.layer('tray').setAttribute('display', 'none'); CL.setAttribute('display', 'none');
      }
      const paintLine = () => {
        if (!lineCells.length) return;
        const n = count();
        const hl = lineMode ? said : (countOn() || (o.askNumber ? said != null && revealed : revealed) ? n : null);
        lineCells.forEach((c, k) => { c.bg.setAttribute('fill', k === hl ? kit.palette.buttercup.base : kit.palette.cream.light); c.bg.setAttribute('stroke-width', k === hl ? 3 : 1.5); if (lineMode) c.g.setAttribute('aria-checked', String(k === said)); });
      };

      const paint = (bounce) => {
        if (print) {
          counters.forEach((ct) => ct.g.setAttribute('display', ct.cell >= 0 ? 'inline' : 'none'));
          return;
        }
        const n = count(); const on = countOn();
        numT.textContent = lineMode ? (said == null ? '?' : String(said)) : on ? String(n) : '?';
        wordT.textContent = on && o.showWord ? (n === 0 ? '영' : `${WORDS[n]} · ${SINO[n]}`) : '';
        paintLine();
        if (bounce) kit.spring(1.18, 1, { stiffness: 260, damping: 11, onUpdate: (v) => kit.transform(cardG, { s: v }) });
      };
      // 키보드: 바구니마다 다음 조각 하나와 마지막에 놓은 조각 하나만 Tab 칸으로 둔다(조각이 모두 Tab 칸이면 Tab이 너무 많다)
      const nextInTray = (col) => counters.find((c) => c.cell < 0 && (col == null || c.col === col));
      const lastPlaced = () => counters.reduce((m, c) => (c.cell >= 0 && (!m || c.seq > m.seq) ? c : m), null);
      const rove = () => {
        if (print || lineMode) { counters.forEach((c) => c.g.setAttribute('tabindex', '-1')); return; }
        const keep = two ? [nextInTray(0), nextInTray(1), lastPlaced()] : [nextInTray(), lastPlaced()];
        counters.forEach((c) => c.g.setAttribute('tabindex', keep.includes(c) ? '0' : '-1'));
        // 쌓인 바구니에서는 맨 위 조각이 눌리게 순서를 맞춘다
        if (two) [0, 1].forEach((k) => { const top = nextInTray(k); if (top) CL.appendChild(top.g); });
        counters.forEach(label);
      };
      const after = (via, ct) => {
        const n = count();
        revealed = false;
        paint(true);
        rove();
        if (via === 'keyboard') {
          // 엔터를 이어 누르면 하나씩 더 놓이게: 넣었으면 같은 바구니의 다음 조각, 뺐으면 마지막 조각으로 초점을 옮긴다
          const f = ct && ct.cell >= 0 ? (nextInTray(two ? ct.col : null) || lastPlaced()) : (lastPlaced() || nextInTray(two ? ct.col : null));
          if (f) f.g.focus();
        }
        kit.recorder.log('tenframe', state());
        kit.announce(countOn() ? `${n}개, ${WORDS[n]}` : (ct && ct.cell >= 0 ? `${nameOf(ct)} 하나를 놓았어요.` : `${ct ? nameOf(ct) : noun} 하나를 바구니로 보냈어요.`));
        if (via) kit.tick();
      };

      counters.forEach((ct) => {
        label(ct);
        if (print || lineMode) return;
        kit.drag(st, ct.g, {
          bounds: [20, 20, W - 20, H - 20],
          onStart() { kit.tick(); },
          snap(x, y) {
            const rest = ct.cell >= 0 ? cellPos(ct.cell) : ct.home;
            const moved = Math.hypot(x - rest.x, y - rest.y);
            let to;
            if (moved < 6) to = ct.cell >= 0 ? -1 : firstEmpty(); // 누르기 = 넣고 빼기
            else if (inBoard(x, y)) to = nearestEmpty(x, y, ct.cell);
            else to = -1;
            if (to == null) { kit.announce('칸이 모두 찼어요.'); kit.tick('no'); return rest; }
            const was = ct.cell;
            assign(ct, to);
            if (was !== to) scaleTo(ct, to >= 0 ? placedScale : 1, to >= 0);
            return to >= 0 ? cellPos(to) : ct.home;
          },
          onDrop(_x, _y, via) { after(via, ct); },
        });
      });

      // 즉시 배치(setState·solve용, 애니메이션 없음)
      const put = (ct, to) => {
        assign(ct, to);
        const p = to >= 0 ? cellPos(to) : ct.home;
        kit.transform(ct.g, { x: p.x, y: p.y, s: to >= 0 ? placedScale : 1, r: 0 });
      };
      const setState = (s) => {
        counters.forEach((ct) => put(ct, -1));
        s = s || {};
        if (two && Array.isArray(s.parts)) {
          // 가 색을 먼저, 나 색을 뒤에 칸 차례대로
          let k = 0;
          [0, 1].forEach((col) => { const pool = counters.filter((c) => c.col === col); for (let j = 0; j < Math.min(pool.length, s.parts[col] || 0) && k < 10; j++) put(pool[j], order[k++]); });
        } else {
          const want = Array.isArray(s.filled) ? s.filled.filter((k) => k >= 0 && k < 10) : order.slice(0, Math.min(10, s.count || 0));
          const cols = Array.isArray(s.colors) ? s.colors : null;
          const pools = [counters.filter((c) => c.col === 0), counters.filter((c) => c.col === 1)];
          want.forEach((k, j) => { const col = cols ? (cols[j] ? 1 : 0) : 0; const ct = pools[col].shift(); if (ct) put(ct, k); });
        }
        if (lineMode) lineCount = s.count || 0;
        said = s.said != null ? s.said : null;
        revealed = false;
        paintAsk();
        paint(false);
        rove();
      };
      let lineCount = 0;
      const state = () => {
        const s = { count: lineMode ? lineCount : count(), filled: cells.map((v, k) => (v >= 0 ? k : -1)).filter((k) => k >= 0) };
        if (o.askNumber || lineMode) s.said = said;
        if (two) { s.parts = parts(); s.colors = s.filled.map((k) => counters[cells[k]].col); }
        return s;
      };

      // ---- '몇이 되었나요?' 수 고르기(askNumber) ----
      let askBar = null;
      const goalOf = (t) => {
        if (!t) return 0;
        if (two) return t.total != null ? t.total : (t.parts || []).reduce((a, b) => a + (b || 0), 0);
        return (t.count || 0) + (t.more || 0) - (t.less || 0);
      };
      // askNumber가 묻는 수: 보통은 모두 몇인지, 가르기(ask:'b')면 둘째 색이 몇인지
      const answerOf = (t) => (two && t && t.ask === 'b' ? goalOf(t) - (t.parts[0] || 0) : goalOf(t));
      const choicesOf = (t) => {
        if (!t) return [];
        const c = answerOf(t); const list = [c - 1, c, c + 1];
        // 가르기(ask:'b')는 모두의 수도 보기에 넣는다 — '7을 3과 7로' 고르는 오개념이 드러나게
        if (two && t.ask === 'b') list.push(goalOf(t));
        return [...new Set(list)].filter((v) => v >= 0 && v <= 10).sort((x, y) => x - y);
      };
      function paintAsk() {
        if (!askBar) return;
        askBar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.n) === said)));
      }
      const askText = () => (two && target && target.ask === 'b' ? `${eun(COL[1].n)} 몇 개인가요?` : two ? '모두 몇 개인가요?' : '몇이 되었나요?');
      const buildAsk = () => {
        if (!askBar) return;
        const list = choicesOf(target);
        askBar.innerHTML = `<span style="font-weight:700">${askText()}</span>${list.map((v) => `<button type="button" class="pl-btn tf-say" data-n="${v}" aria-pressed="false" style="min-width:56px;min-height:48px;font-size:22px">${v}</button>`).join('')}`;
        paintAsk();
      };
      if (o.askNumber && !print && !lineMode) {
        askBar = document.createElement('div');
        askBar.className = 'tf-ask';
        askBar.setAttribute('role', 'group');
        askBar.setAttribute('aria-label', '수 고르기');
        askBar.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin-top:8px';
        box.appendChild(askBar);
        askBar.addEventListener('click', (e) => {
          const b = e.target.closest('button[data-n]'); if (!b) return;
          said = Number(b.dataset.n); paintAsk(); paintLine(); kit.tick();
          kit.recorder.log('tenframe', state());
        });
        buildAsk();
      }
      const paintGoal = () => {
        if (!goalT) return;
        if (!target) { goalT.textContent = ''; return; }
        // 수 그림 줄: 문장에만 있던 수 관계를 기호로(모으기 '3 과 2 → ?', 가르기 '6 → 2 와 ?'). 묻는 수는 늘 ?로 둔다
        if (two) { const p0 = target.parts || []; goalT.textContent = target.ask === 'total' ? `${p0[0]}${NUM_GWA[p0[0]]} ${p0[1]} → ?` : target.ask === 'b' ? `${goalOf(target)} → ${p0[0]}${NUM_GWA[p0[0]]} ?` : p0[0] != null && p0[1] != null ? `${p0[0]}${NUM_GWA[p0[0]]} ${p0[1]}` : `모두 ${goalOf(target)}`; return; }
        if (target.of) { goalT.textContent = `? → ${target.of.more ? '하나 더' : '하나 빼기'} → ${target.of.is}`; return; }
        goalT.textContent = target.more ? `${target.count} → 하나 더` : target.less ? `${target.count} → 하나 빼기` : `${WORDS[target.count]} · ${target.count}`;
      };

      const celebrate = () => {
        counters.filter((ct) => ct.cell >= 0).forEach((ct, j) => {
          setTimeout(() => kit.spring(j % 2 ? -16 : 16, 0, { stiffness: 300, damping: 7, onUpdate: (v) => kit.transform(ct.g, { r: v, cx: 0, cy: 0 }) }), j * 55);
        });
        if (cardG) kit.spring(1.3, 1, { stiffness: 240, damping: 9, onUpdate: (v) => kit.transform(cardG, { s: v }) });
      };

      // ---- 판정 ----
      const orderLine = (t, goal) => (t.more ? `${t.count} 바로 뒤의 수가 ${ieyo(goal)}.` : t.less ? `${t.count} 바로 앞의 수가 ${ieyo(goal)}.` : '');
      function checkLine(t) {
        const goal = goalOf(t);
        if (said == null) return { correct: false, incomplete: true, feedback: '수 줄에서 수를 하나 눌러요.' };
        if (said === goal) { return { correct: true, feedback: `맞아요! ${t.more ? `${t.count}보다 1만큼 더 큰 수는 ${ieyo(goal)}` : t.less ? `${t.count}보다 1만큼 더 작은 수는 ${ieyo(goal)}` : ieyo(goal)}. ${orderLine(t, goal)}` }; }
        if (t.more && said === t.count - 1) return { correct: false, feedback: `${nun(said)} ${t.count}에서 하나를 뺀 수예요. 1만큼 더 큰 수는 수 줄에서 오른쪽(뒤)으로 한 칸이에요.`, hint: `${t.count}에서 오른쪽으로 한 칸 가요.` };
        if (t.less && said === t.count + 1) return { correct: false, feedback: `${said}${NUM_OBJ[said]} 고르면 하나를 더 놓은 수예요. 1만큼 더 작은 수는 수 줄에서 왼쪽(앞)으로 한 칸이에요.`, hint: `${t.count}에서 왼쪽으로 한 칸 가요.` };
        if (said === t.count) return { correct: false, feedback: `${nun(said)} 처음 수 그대로예요. 하나를 더하거나 빼면 수가 바뀌어요.`, hint: t.more ? `${t.count}에서 오른쪽으로 한 칸 가요.` : `${t.count}에서 왼쪽으로 한 칸 가요.` };
        return { correct: false, feedback: '수 줄에서 처음 수를 먼저 찾아요. 1만큼 차이 나는 수는 바로 옆에 있어요.', hint: t.more ? `${t.count}에서 오른쪽으로 한 칸 가요.` : `${t.count}에서 왼쪽으로 한 칸 가요.` };
      }
      function checkTwo(t) {
        const total = goalOf(t); const n = count(); const p = parts(); const [A, Bn] = [COL[0].n, COL[1].n];
        const want = t.parts || [null, null];
        const h2 = () => hintTwo(t, 2);
        // 모으기(ask:'total'): 묻는 답이 '모두의 수'이므로 피드백·힌트에 모두의 수를 쓰지 않고 색별 개수만 견준다
        if (t.ask === 'total') {
          for (const k of [0, 1]) {
            if (p[k] !== want[k]) {
              const nm = k ? Bn : A; const other = k ? A : Bn;
              const okOther = p[1 - k] === want[1 - k];
              return { correct: false, feedback: `${okOther ? `${eun(other)} ${want[1 - k]}개 맞아요. ` : ''}${eun(nm)} ${want[k]}개 놓아야 해요. 지금은 ${p[k]}개예요.`, hint: h2() };
            }
          }
        } else if (n !== total) {
          if (n < total) return { correct: false, feedback: `모두 ${total}개가 되어야 해요. 지금은 ${n}개예요. 더 놓아 볼까요?`, hint: h2() };
          return { correct: false, feedback: `모두 ${total}개가 되어야 해요. 지금은 ${n}개라서 ${n - total}개가 더 있어요.`, hint: h2() };
        }
        for (const k of [0, 1]) {
          if (want[k] != null && p[k] !== want[k]) {
            const nm = k ? Bn : A;
            return { correct: false, feedback: `모두 ${total}개는 맞아요. ${ga(nm)} ${want[k]}개가 되어야 하는데 지금은 ${p[k]}개예요.`, hint: h2() };
          }
        }
        if (want[0] == null && want[1] == null && (p[0] === 0 || p[1] === 0)) return { correct: false, feedback: '두 가지 색이 모두 있어야 둘로 가른 거예요. 지금은 한 가지 색뿐이에요.', hint: h2() };
        if (Array.isArray(t.avoid) && t.avoid.some((x) => x[0] === p[0] && x[1] === p[1])) return { correct: false, feedback: `${p[0]}${NUM_GWA[p[0]]} ${nun(p[1])} 앞에서 찾은 방법이에요. 다른 방법으로 갈라 봐요.`, hint: h2() };
        if (o.askNumber) {
          const ans = answerOf(t);
          if (said == null) return { correct: false, incomplete: true, feedback: '잘 놓았어요. 이제 아래에서 수를 골라요.' };
          if (said !== ans) {
            if (t.ask === 'b' && said === total) return { correct: false, feedback: `${nun(total)} 모두의 수예요. ${eun(A)} 세지 않고 ${Bn}만 세어요.`, hint: h2() };
            return t.ask === 'b'
              ? { correct: false, feedback: `${total}개 가운데 ${A} ${p[0]}개를 빼고 남은 ${Bn}${obj(Bn)} 세어 봐요. 고른 수 ${said}${NUM_OBJ[said] || '를'} 다시 보세요.`, hint: h2() }
              : { correct: false, feedback: `놓은 것은 맞아요. ${A} ${p[0]}개에서 이어서 ${Bn}${obj(Bn)} 세어 봐요. 고른 수 ${said}${NUM_OBJ[said] || '를'} 다시 보세요.`, hint: h2() };
          }
        }
        if (t.ask === 'total') return { correct: true, feedback: `맞아요! ${p[0]}${NUM_GWA[p[0]]} ${p[1]}${NUM_OBJ[p[1]]} 모으면 ${ieyo(total)}. ${p[0]}에서 ${Array.from({ length: p[1] }, (_, j) => p[0] + j + 1).join(', ')} 하고 이어 세었어요.` };
        return { correct: true, feedback: `맞아요! ${nun(total)} ${p[0]}${NUM_GWA[p[0]]} ${ro(p[1])} 가를 수 있어요. ${p[0]}${NUM_GWA[p[0]]} ${p[1]}${NUM_OBJ[p[1]]} 모으면 ${ieyo(total)}.` };
      }
      // 두 색 문항의 단계별 힌트. 1단계는 수를 말하지 않는다. 2단계는 틀린 단계(색별 개수 / 모두의 수 / 수 고르기)를 짚는다.
      // 3단계는 그 단계를 한 걸음 풀어 보인다(모으기는 첫 수에서 이어 세기의 첫 걸음까지만).
      function hintTwo(t, lv) {
        const total = goalOf(t); const n = count(); const p = parts(); const [A, Bn] = [COL[0].n, COL[1].n];
        const want = t.parts || [null, null];
        if (lv <= 1) {
          if (t.ask === 'total') return `${A}${obj(A)} 문제에 나온 만큼 먼저 놓고, 이어서 ${Bn}${obj(Bn)} 놓아요. 다 놓으면 ${A} 수에서부터 이어 세어요.`;
          if (t.ask === 'b') return `모두의 수만큼 먼저 채워요. ${A} 수를 맞춘 다음 ${Bn}만 하나씩 세어요.`;
          return '두 가지 색을 섞어 문제의 수만큼 채워요. 한쪽 색이 하나 늘면 다른 색은 하나 줄어요.';
        }
        if (t.ask === 'total') {
          for (const k of [0, 1]) {
            if (p[k] !== want[k]) {
              const nm = k ? Bn : A;
              return lv === 2 ? `${nm} 수가 문제와 달라요. ${nm}만 하나씩 짚으며 세어 보세요.` : `${nm}${obj(nm)} 하나씩 짚으며 세어 ${want[k]}에서 멈춰요.${p[k] > want[k] ? ' 남는 것은 눌러서 바구니로 보내요.' : ''}`;
            }
          }
          return lv === 2 ? `놓은 것은 맞아요. 처음부터 다시 세지 말고 ${A} 수 ${p[0]}에서 이어 세어요: ${p[0]} … 다음은?` : `${p[0]}에서 ${Bn}${obj(Bn)} 하나씩 짚으며 이어 세어요: ${p[0]}, ${p[0] + 1}, … 마지막에 센 수가 모두의 수예요.`;
        }
        if (n !== total) return lv === 2 ? (n < total ? '모두의 수가 모자라요. 칸을 하나씩 짚으며 세어 보세요.' : '모두의 수보다 많아요. 칸을 하나씩 짚으며 세어 보세요.') : `칸을 하나씩 짚으며 세어 ${total}에서 멈춰요.${n > total ? ' 남는 것은 바구니로 보내요.' : ''}`;
        for (const k of [0, 1]) {
          if (want[k] != null && p[k] !== want[k]) {
            const nm = k ? Bn : A;
            return lv === 2 ? `모두의 수는 맞아요. ${nm} 수가 문제와 달라요.` : `${nm}${obj(nm)} ${want[k]}개만 놓고, 나머지 칸은 다른 색으로 채워요.`;
          }
        }
        if (want[0] == null && want[1] == null && (p[0] === 0 || p[1] === 0)) return lv === 2 ? '한 가지 색뿐이에요. 둘로 가르려면 두 색이 모두 있어야 해요.' : `한 가지 색 하나를 빼고 그 자리에 다른 색을 놓아 보세요.`;
        if (Array.isArray(t.avoid) && t.avoid.some((x) => x[0] === p[0] && x[1] === p[1])) return lv === 2 ? '앞에서 찾은 방법이에요. 한쪽 색을 바꿔 보세요.' : `${A}${obj(A)} 하나 더 놓거나 하나 빼 보세요. ${Bn}도 따라서 바뀌어요.`;
        if (o.askNumber && t.ask === 'b') return lv === 2 ? (said === total ? `고른 수는 모두의 수예요. ${Bn}만 세어요.` : `${Bn}만 다시 세어 보세요. ${eun(A)} 세지 않아요.`) : `${Bn}${obj(Bn)} 하나씩 짚으며 ‘하나, 둘, …’ 하고 세어요. 마지막에 센 수를 골라요.`;
        return '놓은 것을 하나씩 짚으며 세어 보고, 아래에서 그 수를 골라요.';
      }
      // 한 색 문항(수 놓기·1만큼 더 큰/작은 수·수 줄)의 단계별 힌트. 1단계는 문제의 수를 말하지 않는다.
      function hintOne(t, lv) {
        const goal = goalOf(t); const n = count();
        if (lv <= 1) {
          if (lineMode) return '1만큼 더 큰 수는 수 줄에서 바로 오른쪽(뒤), 1만큼 더 작은 수는 바로 왼쪽(앞)에 있어요.';
          if (t.of) return '거꾸로 생각해요. □에 하나를 더하거나 빼서 문제의 수가 되었어요. 문제의 수를 먼저 놓고 거꾸로 해 봐요.';
          if (t.more) return '하나를 더 놓으면 1만큼 더 큰 수가 돼요. 놓은 다음 처음부터 하나씩 세어 봐요.';
          if (t.less) return '하나를 빼면 1만큼 더 작은 수가 돼요. 뺀 다음 남은 것을 하나씩 세어 봐요.';
          return '하나 놓을 때마다 소리 내어 세어요. 윗줄이 꽉 차면 다섯이에요. 마지막에 센 수가 모두의 수예요.';
        }
        if (lineMode) {
          if (said == null) return `수 줄에서 처음 수 ${t.count}${NUM_OBJ[t.count] || '를'} 먼저 찾아요.`;
          if (lv === 2) return said === t.count ? '처음 수 그대로예요. 한 칸 옮겨야 해요.' : `수 줄에서 처음 수 ${t.count}${NUM_OBJ[t.count] || '를'} 찾고, 거기서 ${t.more ? '오른쪽' : '왼쪽'}으로 한 칸만 가요.`;
          return `${t.count}에서 ${t.more ? '오른쪽' : '왼쪽'}으로 한 칸 간 수를 눌러요.`;
        }
        if (n === goal && o.askNumber) return lv === 2 ? '놓은 것은 맞아요. 칸을 하나씩 짚으며 세어 보고 그 수를 골라요.' : `${t.more ? `${t.count} 바로 뒤의 수` : t.less ? `${t.count} 바로 앞의 수` : '마지막에 센 수'}를 골라요.`;
        if (t.of) {
          const is = t.of.is; const d = t.of.more ? 1 : -1;
          if (lv === 2) return n === is ? `${is}개는 '1만큼 더 ${d > 0 ? '큰' : '작은'} 수'예요. □는 아직 아니에요.` : `${is}개를 먼저 놓아 보세요. 거기서 거꾸로 생각해요.`;
          return `${is}개를 놓고 하나를 ${d > 0 ? '빼' : '더 놓아'} 보세요.`;
        }
        if (t.more || t.less) {
          if (lv === 2) return n === t.count ? `처음 수 그대로예요. 하나를 ${t.more ? '더 놓아요' : '빼요'}.` : n < goal ? '아직 모자라요. 처음 수부터 다시 세어 보세요.' : '너무 많아요. 하나씩 짚으며 다시 세어 보세요.';
          return t.more ? `${t.count}개를 놓고 딱 하나만 더 놓아요.` : `${t.count}개에서 딱 하나만 빼요. 누르면 바구니로 돌아가요.`;
        }
        if (lv === 2) return n < goal ? '아직 모자라요. 하나씩 짚으며 다시 세어 보세요.' : '너무 많아요. 하나씩 짚으며 다시 세어 보세요.';
        return `손가락으로 하나씩 짚으며 ${goal}까지 세고 멈춰요.${goal > 5 && !o.scatter ? ' 윗줄 5칸이 다 차면 5예요.' : ''}`;
      }

      setState(o.start || { count: 0 });
      // 출구 질문처럼 setTarget을 부르지 않는 자리에서도 수 고르기 보기가 문항에 맞게 만들어지도록 옵션으로도 받는다
      if (o.target) { target = o.target; buildAsk(); paintGoal(); }
      return {
        getState: state,
        setState,
        reset() { setState(o.start || { count: 0 }); },
        setTarget(t) { target = t || null; if (lineMode && t) { lineCount = t.count || 0; } buildAsk(); paintGoal(); },
        solve(t) {
          if (lineMode) { said = goalOf(t); paint(false); return; }
          if (two) {
            const total = goalOf(t); const w = t.parts || [null, null];
            let a = w[0] != null ? w[0] : w[1] != null ? total - w[1] : Math.ceil(total / 2);
            if (Array.isArray(t.avoid)) { let guard = 0; while (t.avoid.some((x) => x[0] === a && x[1] === total - a) && guard++ < 12) a = (a % (total - 1)) + 1; }
            setState({ parts: [a, total - a] });
            if (o.askNumber) { said = answerOf(t); paintAsk(); paintLine(); }
            return;
          }
          setState({ count: goalOf(t), said: o.askNumber ? goalOf(t) : null });
        },
        check(t, opts) {
          const r = judge(t);
          // 수 카드·수 줄 강조는 맞힌 확인에서만 켠다. 틀린 확인·힌트용 검사는 지금 개수를 드러내지 않는다
          if (!(opts && opts.forHint) && r.correct) { revealed = true; paint(false); if (!lineMode) celebrate(); }
          return r;
        },
        hint(t, opts) {
          if (!t) return { hint: '' };
          const r = judge(t);
          if (r.correct) return { hint: '알맞게 놓았어요.', correct: true };
          const lv = levelOf(opts);
          return { hint: two && !lineMode ? hintTwo(t, lv) : hintOne(t, lv), correct: false };
        },
        // 모의 수업·자동 검사용 오답: 목표보다 하나 많거나 적게(세다가 하나를 두 번 세거나 빠뜨림)
        // 지금 판과 같은 오답은 건너뛴다(같은 오답을 다시 내면 시도로 세지 않는다)
        wrongAnswer(t) {
          const goal = goalOf(t); const list = [];
          const okN = (v) => v >= 0 && v <= 10;
          if (lineMode) {
            // 1만큼 더 큰/작은 수: 처음 수에 머무르기 → 반대쪽으로 한 칸 → 하나 더 가기
            const c = [t.more || t.less ? t.count : null, t.more ? t.count - 1 : t.less ? t.count + 1 : null, goal + 1, goal - 1];
            c.filter((v) => v != null && okN(v) && v !== goal).forEach((v) => list.push({ count: lineCount, said: v }));
          } else if (two) {
            const w = t.parts || [null, null];
            const a = w[0] != null ? w[0] : w[1] != null ? goal - w[1] : Math.ceil(goal / 2);
            // 가르기는 모두의 수를 고르는 오개념(⑤)을 먼저 낸다
            if (o.askNumber) { const ans = answerOf(t); [...(t.ask === 'b' ? [goal] : []), ans + 1, ans - 1].filter((v) => okN(v) && v !== ans).forEach((v) => list.push({ parts: [a, goal - a], said: v })); }
            // 이어 세다가 하나 더/덜 놓기 → 정해 준 색을 하나 더/덜(모두는 맞음) → 앞에서 찾은 방법 → 한 가지 색만
            [1, -1].forEach((d) => { const b = goal - a + d; if (b >= 0 && a + b <= 10) list.push({ parts: [a, b] }); });
            if (w[0] != null || w[1] != null) [1, -1].forEach((d) => { const a2 = a + d; if (a2 >= 0 && a2 <= goal) list.push({ parts: [a2, goal - a2] }); });
            if (Array.isArray(t.avoid)) t.avoid.forEach((x) => list.push({ parts: x.slice(0, 2) }));
            list.push({ parts: [goal, 0] });
            if (o.askNumber) list.forEach((x) => { if (x.said == null) x.said = answerOf(t); });
          } else {
            // 1만큼 더 큰 수 → 하나를 덜 놓음(처음 수 그대로), 1만큼 더 작은 수 → 하나를 더 놓음. 그냥 수는 하나 더 셈
            const c = t.more ? [goal - 1, goal + 1] : t.less ? [goal + 1, goal - 1] : [goal + 1, goal - 1];
            c.concat([goal + 2, goal - 2]).filter((v) => okN(v) && v <= supply && v !== goal).forEach((v) => list.push(o.askNumber ? { count: v, said: v } : { count: v }));
          }
          const cur = state(); const key = (x) => JSON.stringify([x.count != null ? x.count : null, x.parts || null, x.said != null ? x.said : null]);
          const ck = key({ count: two ? null : cur.count, parts: cur.parts, said: cur.said });
          return list.find((x) => key(x) !== ck) || list[0] || null;
        },
        // 교사 시연: 사과가 하나씩 톡톡 칸으로 들어가거나 바구니로 돌아간다
        async demo(t) {
          const was = revealed; revealed = true;
          if (two) {
            const total = goalOf(t); const w = t.parts || [Math.ceil(total / 2), null]; const a = w[0] != null ? w[0] : total - w[1];
            const want = [a, total - a];
            counters.forEach((ct) => { if (ct.cell >= 0) put(ct, -1); }); paint(false); rove();
            for (const col of [0, 1]) for (let j = 0; j < want[col]; j++) {
              const ct = nextInTray(col); const to = firstEmpty(); if (!ct || to == null) break;
              CL.appendChild(ct.g); assign(ct, to); scaleTo(ct, placedScale, true);
              await kit.animateTo(ct.g, cellPos(to)); kit.tick(); paint(true); await kit.wait(240);
            }
            celebrate(); rove(); revealed = was || !o.revealAfterCheck; return;
          }
          const goal = Math.max(0, Math.min(counters.length, goalOf(t)));
          while (count() < goal) {
            const ct = counters.find((c) => c.cell < 0); const to = firstEmpty();
            CL.appendChild(ct.g); assign(ct, to); scaleTo(ct, placedScale, true);
            await kit.animateTo(ct.g, cellPos(to)); kit.tick(); paint(true); kit.announce(WORDS[count()]);
            await kit.wait(260);
          }
          while (count() > goal) {
            const k = cells.reduce((m, v, idx) => (v >= 0 ? idx : m), -1);
            const ct = counters[cells[k]];
            assign(ct, -1); scaleTo(ct, 1);
            await kit.animateTo(ct.g, ct.home); kit.tick(); paint(true);
            await kit.wait(260);
          }
          celebrate(); revealed = was || !o.revealAfterCheck;
        },
      };
      function judge(t) {
          if (lineMode) return checkLine(t);
          if (two) return checkTwo(t);
          const goal = goalOf(t); const n = count();
          if (n === goal && o.askNumber && said !== goal) {
            if (said == null) return { correct: false, incomplete: true, feedback: '잘 놓았어요. 이제 몇이 되었는지 아래에서 수를 골라요.' };
            return { correct: false, feedback: `놓은 것은 맞아요. 고른 수 ${said}${NUM_OBJ[said] || '를'} 다시 보세요.`, hint: t.less ? `하나 빼면 ${t.count}보다 작아져요. ${t.count} 바로 앞의 수예요.` : `하나 더 놓으면 ${t.count}보다 커져요. ${t.count} 바로 뒤의 수예요.` };
          }
          if (n === goal) {
            if (t.more) return { correct: true, feedback: `맞아요! ${t.count}보다 1만큼 더 큰 수는 ${ieyo(goal)}. ${orderLine(t, goal)}` };
            if (t.less) return { correct: true, feedback: goal === 0 ? `맞아요! ${t.count}보다 1만큼 더 작은 수는 0이에요. 하나도 없으면 0(영)이에요.` : `맞아요! ${t.count}보다 1만큼 더 작은 수는 ${ieyo(goal)}. ${orderLine(t, goal)}` };
            if (t.of) return { correct: true, feedback: `맞아요! ${goal}보다 1만큼 더 ${t.of.more ? '큰' : '작은'} 수가 ${ieyo(t.of.is)}. 그래서 □는 ${ieyo(goal)}.` };
            return { correct: true, feedback: goal === 0 ? '맞아요! 하나도 없으면 0(영)이에요.' : `맞아요! ${noun} ${UNIT[goal]} 개, ${ieyo(goal)}.` };
          }
          // 거꾸로 문항(어떤 수보다 1 큰 수가 6): 6을 놓거나 7을 놓는 실수를 따로 짚는다
          if (t.of) {
            const is = t.of.is; const d = t.of.more ? 1 : -1;
            if (n === is) return { correct: false, feedback: `${is}개만 놓았어요. ${nun(is)} '1만큼 더 ${d > 0 ? '큰' : '작은'} 수'예요. □는 ${is} 바로 ${d > 0 ? '앞' : '뒤'}의 수예요.`, hint: `${is}개를 놓고 하나를 ${d > 0 ? '빼' : '더 놓아'} 보세요.` };
            if (n === is + d) return { correct: false, feedback: `${is}보다 1만큼 더 ${d > 0 ? '큰' : '작은'} 수를 놓았어요. 거꾸로 생각해요: □에 하나를 ${d > 0 ? '더하면' : '빼면'} ${ieyo(is)}.`, hint: `${is}개를 놓고 하나를 ${d > 0 ? '빼' : '더 놓아'} 보세요.` };
          }
          // 빈 판에서 시작한 문항: 처음 수까지만 만들고 멈춘 경우
          if ((t.more || t.less) && n === t.count) return { correct: false, feedback: `${t.count}${NUM_OBJ[t.count]} 만들었어요. 이제 1만큼 더 ${t.more ? '큰' : '작은'} 수가 되게 하나를 ${t.more ? '더 놓아요' : '빼요'}.`, hint: t.more ? `${t.count} 바로 뒤의 수를 생각해요.` : `${t.count} 바로 앞의 수를 생각해요.` };
          const five = goal > 5 && !o.scatter ? ' 윗줄 5칸이 다 차면 5예요. 6부터 이어 세어요.' : '';
          if (n < goal) {
            return {
              correct: false, feedback: `아직 모자라요. 하나씩 세면서 더 놓아 볼까요?`,
              hint: t.more ? `${t.count}개를 놓고 하나만 더 놓아요.${five}` : t.less ? `${t.count}개에서 하나만 빼요.` : `손가락으로 하나씩 짚으며 ${goal}까지 세어요.${five}`,
            };
          }
          return {
            correct: false, feedback: `너무 많아요. 칸을 하나씩 짚으며 세어 보세요. 몇 개가 더 있나요?`,
            hint: t.less ? `${t.count}개에서 딱 하나만 빼요. 누르면 바구니로 돌아가요.` : t.more ? `${t.count}개에 하나만 더 놓아요. 더 많이 놓았어요.` : `칸을 하나씩 짚으며 세어 ${goal}에서 멈추고, 남는 것을 바구니로 보내요.`,
          };
      }
    },
  });
})(window.PaperKit);
