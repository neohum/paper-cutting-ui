/* 십칸 수 모형 보드 — 바구니의 종이 사과(또는 동그란 칩)를 2×5 십칸에 끌어 놓고 센다.
 * 조작: 끌어서 칸에 놓기(가까운 빈칸에 딱 붙음), 칸 밖으로 끌면 바구니로 돌아감.
 *       누르기(탭)·Enter·Space = 바구니 → 다음 빈칸 / 칸 → 바구니. 방향키로 옮긴 뒤 Enter로 내려놓을 수도 있다.
 * 옵션: item('apple'|'chip'), color(칩 색), supply(바구니 개수, 기본 10), showCount(기본 true), showWord(수 읽기 '일곱 · 칠'),
 *       cellNumbers(칸 순서 번호 1~10, 쉬움), start({count}|{filled}), print(활동지: 바구니·수 카드 숨김)
 *       showGoal(쉬움: 바구니에 '일곱 · 7', '5에 하나 더' 같은 목표 표시), scatter(도전: 조각이 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없음)
 *       askNumber(놓은 뒤 '몇이 되었나요?' 수 세 개 중 고르기 — 수 카드를 가린 단계에서 '말할 수 있다'를 확인)
 * 상태: { count, filled: [칸 번호 0~9], said? } / check({count, more?, less?}) — 목표 수 = count + more − less
 */
(function (K) {
  // 받침에 맞는 목적격 조사: 사과를, 칩을 / 숫자는 읽는 소리(일·삼·육·칠·팔·십)로 — 8을, 4를
  const obj = (w) => { const c = w.charCodeAt(w.length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 ? '을' : '를'; };
  const NUM_OBJ = { 0: '을', 1: '을', 2: '를', 3: '을', 4: '를', 5: '를', 6: '을', 7: '을', 8: '을', 9: '를', 10: '을' };
  const WORDS = ['영', '하나', '둘', '셋', '넷', '다섯', '여섯', '일곱', '여덟', '아홉', '열'];
  const SINO = ['영', '일', '이', '삼', '사', '오', '육', '칠', '팔', '구', '십'];
  // '개' 같은 단위 앞에서는 꼴이 바뀐다: 한 개·두 개·세 개·네 개(하나 개·넷 개가 아님)
  const UNIT = ['영', '한', '두', '세', '네', '다섯', '여섯', '일곱', '여덟', '아홉', '열'];
  // 도전(scatter)에서 조각이 들어가는 칸 차례 — 줄마다 섞여 '윗줄 5칸' 묶음으로 셀 수 없다
  const SCATTER = [6, 2, 8, 0, 4, 9, 3, 7, 1, 5];
  // 숫자를 읽었을 때 받침이 없으면 '예요'(2 이, 4 사, 5 오, 9 구), 있으면 '이에요'
  const ieyo = (n) => ([2, 4, 5, 9].includes(n) ? `${n}예요` : `${n}이에요`);
  const goalOf = (t) => (t.count || 0) + (t.more || 0) - (t.less || 0);
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
      const noun = apple ? '사과' : '칩';
      const showCount = o.showCount !== false && !print;
      const supply = Math.max(1, Math.min(10, o.supply || 10));
      const order = o.scatter ? SCATTER : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      let said = null; let target = null;
      const W = 480; const H = 380;
      const st = kit.stage(box, { viewBox: [W, H], label: `십칸 수 모형 보드. ${noun}${obj(noun)} 끌어 칸에 놓거나, 눌러서 넣고 빼요.` });
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
      let cardG = null; let numT = null; let wordT = null; let goalT = null;
      if (!print) {
        cardG = kit.el('g', null, st.layer('card'));
        kit.piece(st, cardG, { shape: { type: 'rect', x: -34, y: -79, w: 68, h: 158, rx: 16 }, color: 'buttercup', depth: 2 });
        kit.piece(st, cardG, { shape: { type: 'rect', x: -27, y: -66, w: 54, h: 86, rx: 12 }, color: 'cream', depth: 1 });
        numT = kit.el('text', { x: 0, y: 0, 'text-anchor': 'middle', 'font-size': 58, class: 'pk-text', fill: kit.palette.ink.base }, cardG);
        wordT = kit.el('text', { x: 0, y: 50, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: kit.palette.buttercup.dark }, cardG);
        kit.transform(cardG, { x: 430, y: by + bh / 2 });
      }

      // ---- 바구니 ----
      const homes = [];
      if (!print) {
        const T = st.layer('tray');
        kit.piece(st, T, { shape: { type: 'rect', x: 40, y: 192, w: 400, h: 176, rx: 26 }, color: 'lavender', depth: 3, texture: true });
        kit.piece(st, T, { shape: { type: 'rect', x: 54, y: 206, w: 372, h: 148, rx: 20 }, color: 'lavender', depth: 0, flat: true, fill: kit.palette.lavender.light });
        kit.el('text', { x: 66, y: 226, 'font-size': 12, class: 'pk-text', fill: kit.palette.lavender.dark, opacity: 0.8 }, T).textContent = `${noun} 바구니`;
        if (o.showGoal) goalT = kit.el('text', { x: 414, y: 228, 'text-anchor': 'end', 'font-size': 18, 'font-weight': 700, class: 'pk-text', fill: kit.palette.rose.dark }, T);
        for (let i = 0; i < supply; i++) {
          // 손으로 쏟아 놓은 듯 살짝 흐트러진 자리
          const jx = [4, -5, 3, -2, 6, -4, 2, -6, 5, -3][i]; const jy = [-4, 5, -2, 6, -5, 3, -6, 2, 4, -3][i];
          homes.push({ x: 240 + ((i % 5) - 2) * 74 + jx, y: (i < 5 ? 254 : 318) + jy });
        }
      } else for (let i = 0; i < supply; i++) homes.push({ x: 0, y: 0 });

      // ---- 조각(사과/칩) ----
      const CL = st.layer('counters');
      const cells = new Array(10).fill(-1); // 칸 → 조각 번호
      const placedScale = 1.25;
      const counters = homes.map((home, i) => {
        const g = kit.el('g', { class: 'tf-counter' }, CL);
        kit.el('circle', { r: 37, class: 'pk-hit' }, g); // 74 단위 = 375px 휴대폰에서도 44px 이상
        if (apple) {
          kit.piece(st, g, { shape: { type: 'path', d: APPLE_D }, color: 'rose', depth: 2 });
          kit.piece(st, g, { shape: { type: 'rect', x: -1.6, y: -21, w: 3.2, h: 10, rx: 1.5 }, color: 'peach', depth: 0, fill: kit.palette.peach.dark, flat: true });
          kit.piece(st, g, { shape: { type: 'path', d: 'M2 -15 Q 11 -24 17 -17 Q 9 -11 2 -15 Z' }, color: 'mint', depth: 1, flat: true });
          kit.el('ellipse', { cx: -9, cy: -3, rx: 3.5, ry: 6, fill: '#fff', opacity: 0.5, 'pointer-events': 'none', class: 'tf-gloss' }, g);
        } else {
          const c = o.color || 'sky';
          kit.piece(st, g, { shape: { type: 'circle', r: 19 }, color: c, depth: 2 });
          kit.piece(st, g, { shape: { type: 'circle', r: 11 }, color: c, depth: 0, flat: true, fill: kit.palette[c] ? kit.palette[c].light : '#fff' });
        }
        kit.transform(g, { x: home.x, y: home.y, s: 1 });
        const ct = { i, g, home, cell: -1 };
        g.__ct = ct;
        return ct;
      });

      const count = () => cells.filter((v) => v >= 0).length;
      const firstEmpty = () => { const k = order.find((c) => cells[c] < 0); return k == null ? null : k; };
      let seq = 0; // 놓은 차례(키보드 로빙 탭: 마지막에 놓은 조각 하나만 Tab에 잡힌다)
      const label = (ct) => ct.g.setAttribute('aria-label', ct.cell >= 0 ? `${noun} ${ct.i + 1}, ${ct.cell + 1}번 칸` : `${noun} ${ct.i + 1}, 바구니`);
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

      const paint = (bounce) => {
        if (print) {
          counters.forEach((ct) => ct.g.setAttribute('display', ct.cell >= 0 ? 'inline' : 'none'));
          return;
        }
        const n = count();
        numT.textContent = showCount ? String(n) : '?';
        wordT.textContent = showCount && o.showWord ? (n === 0 ? '영' : `${WORDS[n]} · ${SINO[n]}`) : '';
        if (bounce) kit.spring(1.18, 1, { stiffness: 260, damping: 11, onUpdate: (v) => kit.transform(cardG, { s: v }) });
      };
      // 키보드: 바구니의 다음 조각 하나와 마지막에 놓은 조각 하나만 Tab 칸으로 둔다(조각 10개가 모두 Tab 칸이면 Tab이 너무 많다)
      const nextInTray = () => counters.find((c) => c.cell < 0);
      const lastPlaced = () => counters.reduce((m, c) => (c.cell >= 0 && (!m || c.seq > m.seq) ? c : m), null);
      const rove = () => {
        if (print) return;
        const keep = [nextInTray(), lastPlaced()];
        counters.forEach((c) => c.g.setAttribute('tabindex', keep.includes(c) ? '0' : '-1'));
      };
      const after = (via, ct) => {
        const n = count();
        paint(true);
        rove();
        if (via === 'keyboard') {
          // 엔터를 이어 누르면 하나씩 더 놓이게: 넣었으면 바구니의 다음 조각, 뺐으면 마지막 조각으로 초점을 옮긴다
          const f = ct && ct.cell >= 0 ? (nextInTray() || lastPlaced()) : (lastPlaced() || nextInTray());
          if (f) f.g.focus();
        }
        kit.recorder.log('tenframe', state());
        kit.announce(`${n}개${showCount ? `, ${WORDS[n]}` : ''}`);
        if (via) kit.tick();
      };

      counters.forEach((ct) => {
        label(ct);
        if (print) return;
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
        const want = s && Array.isArray(s.filled) ? s.filled.filter((k) => k >= 0 && k < 10) : order.slice(0, Math.min(10, (s && s.count) || 0));
        want.slice(0, counters.length).forEach((k, j) => put(counters[j], k));
        said = s && s.said != null ? s.said : null;
        paintAsk();
        paint(false);
        rove();
      };
      const state = () => {
        const s = { count: count(), filled: cells.map((v, k) => (v >= 0 ? k : -1)).filter((k) => k >= 0) };
        if (o.askNumber) s.said = said;
        return s;
      };

      // ---- '몇이 되었나요?' 수 고르기(askNumber) ----
      let askBar = null;
      const choicesOf = (t) => { const c = (t && t.count) || 0; return [c - 1, c, c + 1].filter((v) => v >= 0 && v <= 10); };
      function paintAsk() {
        if (!askBar) return;
        askBar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.n) === said)));
      }
      const buildAsk = () => {
        if (!askBar) return;
        const list = choicesOf(target);
        askBar.innerHTML = `<span style="font-weight:700">몇이 되었나요?</span>${list.map((v) => `<button type="button" class="pl-btn tf-say" data-n="${v}" aria-pressed="false" style="min-width:56px;min-height:48px;font-size:22px">${v}</button>`).join('')}`;
        paintAsk();
      };
      if (o.askNumber && !print) {
        askBar = document.createElement('div');
        askBar.className = 'tf-ask';
        askBar.setAttribute('role', 'group');
        askBar.setAttribute('aria-label', '몇이 되었는지 수 고르기');
        askBar.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin-top:8px';
        box.appendChild(askBar);
        askBar.addEventListener('click', (e) => {
          const b = e.target.closest('button[data-n]'); if (!b) return;
          said = Number(b.dataset.n); paintAsk(); kit.tick();
          kit.recorder.log('tenframe', state());
        });
        buildAsk();
      }
      const paintGoal = () => {
        if (!goalT) return;
        if (!target) { goalT.textContent = ''; return; }
        goalT.textContent = target.more ? `${target.count}에 하나 더` : target.less ? `${target.count}에서 하나 빼기` : `${WORDS[target.count]} · ${target.count}`;
      };

      const celebrate = () => {
        counters.filter((ct) => ct.cell >= 0).forEach((ct, j) => {
          setTimeout(() => kit.spring(j % 2 ? -16 : 16, 0, { stiffness: 300, damping: 7, onUpdate: (v) => kit.transform(ct.g, { r: v, cx: 0, cy: 0 }) }), j * 55);
        });
        if (cardG) kit.spring(1.3, 1, { stiffness: 240, damping: 9, onUpdate: (v) => kit.transform(cardG, { s: v }) });
      };

      setState(o.start || { count: 0 });
      return {
        getState: state,
        setState,
        reset() { setState(o.start || { count: 0 }); },
        setTarget(t) { target = t || null; buildAsk(); paintGoal(); },
        solve(t) { setState({ count: goalOf(t), said: o.askNumber ? goalOf(t) : null }); },
        check(t) {
          const goal = goalOf(t); const n = count();
          if (n === goal && o.askNumber && said !== goal) {
            if (said == null) return { correct: false, feedback: `잘 놓았어요. 이제 몇이 되었는지 아래에서 수를 골라요.`, hint: `칸에 놓인 ${noun}${obj(noun)} 하나씩 세어 보고, 그 수를 눌러요.` };
            return { correct: false, feedback: `놓은 것은 맞아요. 고른 수 ${said}${NUM_OBJ[said] || '를'} 다시 보세요.`, hint: t.less ? `하나 빼면 ${t.count}보다 작아져요. ${t.count} 바로 앞의 수예요.` : `하나 더 놓으면 ${t.count}보다 커져요. ${t.count} 바로 뒤의 수예요.` };
          }
          if (n === goal) {
            celebrate();
            if (t.more) return { correct: true, feedback: `맞아요! ${t.count}보다 1만큼 더 큰 수는 ${ieyo(goal)}.` };
            if (t.less) return { correct: true, feedback: `맞아요! ${t.count}보다 1만큼 더 작은 수는 ${ieyo(goal)}.` };
            return { correct: true, feedback: goal === 0 ? '맞아요! 하나도 없으면 0(영)이에요.' : `맞아요! ${noun} ${UNIT[goal]} 개, ${ieyo(goal)}.` };
          }
          const five = goal > 5 && !o.scatter ? ' 윗줄 5칸이 다 차면 5예요. 6부터 이어 세어요.' : '';
          if (n < goal) {
            return {
              correct: false, feedback: '아직 모자라요. 하나씩 세면서 더 놓아 볼까요?',
              hint: t.more ? `${t.count}개를 놓고 하나만 더 놓아요.${five}` : t.less ? `${t.count}개에서 하나만 빼요.` : `손가락으로 하나씩 짚으며 ${goal}까지 세어요.${five}`,
            };
          }
          return {
            correct: false, feedback: '너무 많아요. 하나씩 빼 볼까요?',
            hint: t.less ? `${t.count}개에서 딱 하나만 빼요. 누르면 바구니로 돌아가요.` : t.more ? `${t.count}개에 하나만 더 놓아요. 더 많이 놓았어요.` : `칸에 놓인 ${noun}${obj(noun)} 처음부터 다시 세어 ${goal}개만 남겨요.`,
          };
        },
        // 교사 시연: 사과가 하나씩 톡톡 칸으로 들어가거나 바구니로 돌아간다
        async demo(t) {
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
          celebrate();
        },
      };
    },
  });
})(window.PaperKit);
