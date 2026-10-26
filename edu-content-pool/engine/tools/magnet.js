/* 종이 자석 실험대 — N극(빨강)·S극(파랑) 막대자석과 나침반. 자석의 극, 극끼리 끌어당기고 밀어내는 성질, 나침반 바늘을 다룬다.
 * 모드(o.mode)
 *  - 'compass'(기본): 막대자석을 끌어 옮기고 돌리기 단추로 돌린다. 둘레 나침반 바늘이 자석 쪽으로 돈다
 *     (바늘 N극은 자석 S극으로, 바늘 S극은 자석 N극으로 끌린다. 자석이 멀면 지구 때문에 북쪽(위)을 가리킨다).
 *     target { needle:'북'|'동'|'남'|'서', compass?: 번호 } — 그 나침반 바늘의 N극이 그 방위를 가리키게 자석을 놓는다
 *            { away:true } — 자석을 치워 모든 바늘이 북쪽을 가리키는지 본다
 *  - 'poles'  : 고정 자석 가와 움직이는 자석 나. 나를 끌어 가의 끝에 대면, 다른 극이면 붙고 같은 극이면 밀려난다.
 *     target { attract:true } | { repel:true }
 *  - 'hidden' : 극 표시가 지워진 자석과 움직이는 나침반 하나. 나침반을 양 끝에 대 보고 N극인 끝(ㄱ|ㄴ)을 고른다.
 *     target { nEnd:'ㄱ'|'ㄴ' } (o.hiddenN으로 실제 N극 끝을 정한다)
 * 옵션: mode, compasses([[x,y]…]), start({x,y,r} 자석 처음 자리), showWords(붙어요·밀어내요 글자, 기본 true), hiddenN, print,
 *       labels(print에서 자석의 N·S 글자를 쓸지, 기본 true)
 * 상태: compass { magnet:{x,y,r}|null, needles:[방위…] } · poles { b:{x,y,r}, event:'attract'|'repel'|null } · hidden { probe:{x,y}, choice, probed:[ㄱ|ㄴ…] }
 * 방위는 지도처럼 화면 위쪽이 북쪽이다.
 */
(function (K) {
  'use strict';
  const DIRS = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
  const BEAR = { 북: 0, 동: 90, 남: 180, 서: 270 };
  const HALF = 54; // 막대자석 반 길이
  const POLE = 42; // 중심에서 극(힘이 모인 곳)까지
  const EARTH = 1 / 52000; // 지구 자기장(위쪽) — 자석에서 약 230 떨어지면 지구 쪽이 이긴다
  const rad = (d) => (d * Math.PI) / 180;
  const dirName = (b) => DIRS[Math.round(K.norm(b) / 45) % 8];
  const angDiff = (a, b) => { const d = K.norm(a - b); return d > 180 ? 360 - d : d; };
  // 힌트 단계(hint(target, { level, attempts })): 1 = 개념·전략만(늘 열림, 답의 방위·극·자리 없음),
  // 2 = 한 번 틀린 뒤 지금 무엇이 어긋났는지, 3 = 두 번 틀린 뒤 풀이 한 걸음
  const hintLevel = (opts) => { const a = (opts && opts.attempts) || 0; const l = (opts && opts.level) || 1; return Math.max(1, Math.min(l, a >= 2 ? 3 : a >= 1 ? 2 : 1)); };

  K.registerTool('magnet', {
    name: '종이 자석 실험대',
    create(box, o, kit) {
      const print = !!o.print;
      const mode = ['poles', 'hidden'].includes(o.mode) ? o.mode : 'compass';
      const btnRow = !print;
      const W = 440; const H = btnRow ? 350 : 300;
      const st = kit.stage(box, { viewBox: [W, H], label: { compass: '막대자석과 나침반 실험대. 자석을 끌어 옮기면 나침반 바늘이 돌아가요. 화면 위쪽이 북쪽이에요.', poles: '막대자석 두 개. 움직이는 자석 나를 끌어 자석 가의 끝에 대어 보세요.', hidden: '극 표시가 지워진 막대자석과 나침반. 나침반을 자석 양 끝에 대어 보세요.' }[mode] });
      const NS = (tag, a, p) => kit.el(tag, a, p);
      const showWords = o.showWords !== false && !print;
      // 활동지 wide: 그림 한 장이 줄 전체를 쓰고 더 높게(기본 52mm에서는 나침반 바늘의 검은 N극이 구별되지 않았다)
      if (print && o.wide) { const fig = box.closest('figure'); if (fig) fig.style.gridColumn = '1 / -1'; st.svg.style.maxHeight = '92mm'; }

      // ---- 실험대(책상) ----
      const T = st.layer('table');
      kit.piece(st, T, { shape: { type: 'rect', x: 10, y: 10, w: W - 20, h: 290 - 20, rx: 18 }, color: 'buttercup', depth: 2, texture: !print, fill: print ? '#FFFFFF' : '#FFF6DE' });
      // 방위 표시(위쪽이 북쪽)
      if (mode !== 'poles') {
        const g = NS('g', null, T);
        NS('path', { d: 'M412 30 l7 16 h-14 Z', fill: '#C2414F', class: 'pk-text' }, g);
        NS('text', { x: 412, y: 62, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#3D352E' }, g).textContent = '북';
      }

      // ---- 막대자석 그리기 ----
      const magnetG = (parent, opts = {}) => {
        const g = NS('g', { class: 'mg-magnet' }, parent);
        NS('rect', { x: -HALF - 6, y: -30, width: 2 * HALF + 12, height: 60, class: 'pk-hit' }, g);
        const hidden = !!opts.hidden;
        const nP = kit.piece(st, g, { shape: { type: 'rect', x: 0, y: -16, w: HALF, h: 32, rx: 6 }, color: hidden ? 'cream' : 'rose', depth: 2 });
        const sP = kit.piece(st, g, { shape: { type: 'rect', x: -HALF, y: -16, w: HALF, h: 32, rx: 6 }, color: hidden ? 'cream' : 'sky', depth: 2 });
        const lab = opts.labels !== false;
        // 글자는 자석이 돌아도 바로 서 있게 따로 거꾸로 돌린다
        const letters = [];
        const letter = (x, y, text, fill, size) => { const lg = NS('g', null, g); NS('text', { x, y: y + size * 0.35, 'text-anchor': 'middle', 'font-size': size, class: 'pk-text', fill }, lg).textContent = text; letters.push({ lg, x, y }); };
        if (!hidden && lab) { letter(HALF - 16, 0, 'N', '#702830', 20); letter(-HALF + 16, 0, 'S', '#204C5A', 20); }
        if (opts.tag) letter(0, -30, opts.tag, '#3D352E', 16);
        const upright = (r) => letters.forEach((l) => kit.transform(l.lg, { r: -r, cx: l.x, cy: l.y }));
        return { g, nP, sP, upright };
      };
      // 극 자리(화면 좌표). r=0이면 N극이 오른쪽.
      const polesOf = (m) => { const c = Math.cos(rad(m.r)); const s = Math.sin(rad(m.r)); return { N: [m.x + POLE * c, m.y + POLE * s], S: [m.x - POLE * c, m.y - POLE * s] }; };
      // 자기장: N극에서 나오고 S극으로 들어간다 + 지구(위쪽)
      const field = (p, mags) => {
        let bx = 0; let by = -EARTH;
        for (const m of mags) {
          const P = polesOf(m);
          for (const [q, pp] of [[1, P.N], [-1, P.S]]) {
            const dx = p[0] - pp[0]; const dy = p[1] - pp[1]; const d2 = Math.max(dx * dx + dy * dy, 400); const d3 = d2 * Math.sqrt(d2);
            bx += (q * dx) / d3; by += (q * dy) / d3;
          }
        }
        return (Math.atan2(bx, -by) * 180) / Math.PI; // 0 = 위(북), 시계 방향
      };

      // ---- 나침반 ----
      const compassG = (parent, x, y, k) => {
        const g = NS('g', { class: 'mg-compass' }, parent);
        kit.transform(g, { x, y });
        // 휴대폰(390px)에서 지름 40px·바늘 25px이면 바늘 끝이 어느 방위인지 보이지 않았다 — 판을 키우고 N극 끝에 화살촉을 단다
        kit.piece(st, g, { shape: { type: 'circle', r: 33 }, color: 'lavender', depth: 2 });
        kit.piece(st, g, { shape: { type: 'circle', r: 28 }, color: 'cream', depth: 0 });
        const nd = NS('g', null, g);
        kit.piece(st, nd, { shape: { type: 'path', d: 'M0 -25 L8 -13 L4 -13 L4 0 L-4 0 L-4 -13 L-8 -13 Z' }, color: 'rose', depth: 1 });
        kit.piece(st, nd, { shape: { type: 'path', d: 'M4 0 L4 22 L-4 22 L-4 0 Z' }, color: 'sky', depth: 1 });
        // 활동지(흑백)에서는 색이 사라지므로 바늘 N극 쪽을 검게 칠한다
        if (print) NS('path', { d: 'M0 -25 L8 -13 L4 -13 L4 0 L-4 0 L-4 -13 L-8 -13 Z', fill: '#3D352E', class: 'pk-text' }, nd);
        kit.piece(st, g, { shape: { type: 'circle', r: 3.5 }, color: 'ink', depth: 0, flat: true });
        if (k != null) NS('text', { x: 0, y: 52, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#473B6B' }, g).textContent = `나침반 ${k + 1}`;
        return { g, nd, bear: 0, stop: null };
      };
      const swing = (c, to, animate) => {
        let from = c.bear; let d = to - K.norm(from); if (d > 180) d -= 360; if (d < -180) d += 360;
        const target = from + d; c.bear = target;
        if (c.stop) { c.stop(); c.stop = null; }
        if (!animate || print) { kit.transform(c.nd, { r: target }); return; }
        c.stop = kit.spring(from, target, { stiffness: 160, damping: 9, onUpdate: (v) => kit.transform(c.nd, { r: v }) });
      };

      // ---- 단추 ----
      const UI = st.layer('ui');
      const btn = (x, w, label, aria, color, press) => {
        const g = NS('g', { tabindex: 0, role: 'button', 'aria-label': aria }, UI);
        kit.transform(g, { x, y: 322 });
        NS('rect', { x: -w / 2 - 2, y: -25, width: w + 4, height: 50, class: 'pk-hit' }, g);
        const pc = kit.piece(st, g, { shape: { type: 'rect', x: -w / 2, y: -22, w, h: 44, rx: 12 }, color, depth: 2 });
        NS('text', { x: 0, y: 6, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: kit.palette[color].dark }, g).textContent = label;
        const go = (via) => { kit.spring(0.9, 1, { stiffness: 380, damping: 12, onUpdate: (v) => kit.transform(g, { s: v }) }); press(via); };
        g.addEventListener('click', () => go('pointer'));
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('keyboard'); } });
        return { g, pc };
      };
      const word = showWords ? NS('text', { x: W / 2, y: 40, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: '#473B6B' }, st.layer('word')) : null;
      const say = (t) => { if (word) word.textContent = t || ''; };

      const M = st.layer('magnets');
      const C = st.layer('compasses');
      let hinting = false; // hint()가 check()를 빌려 쓸 때는 맞음 움직임을 보이지 않는다(힌트 단추가 정답 알림이 되지 않게)
      let state; let setState; let check; let solve; let demo; let wrong = () => null; let hintFor = () => '';

      if (mode === 'compass') {
        const spots = o.compasses || [[96, 92], [344, 92], [96, 232], [344, 232]];
        const cs = spots.map(([x, y], k) => compassG(C, x, y, spots.length > 1 ? k : null));
        const mag = { x: 220, y: 162, r: 0, away: false };
        Object.assign(mag, o.start || {});
        const mg = magnetG(M, { labels: o.labels });
        const place = () => { kit.transform(mg.g, { x: mag.x, y: mag.y, r: mag.r, cx: 0, cy: 0 }); mg.upright(mag.r); mg.g.setAttribute('display', mag.away ? 'none' : 'inline'); };
        const bearings = () => cs.map((c) => (mag.away ? 0 : field([c.g.__pk.x, c.g.__pk.y], [mag])));
        const update = (animate) => { const b = bearings(); cs.forEach((c, k) => swing(c, b[k], animate)); };
        if (!print) {
          kit.drag(st, mg.g, {
            keyStep: 10, bounds: [60, 50, 380, 250],
            snap: (x, y) => ({ x: Math.round(x), y: Math.round(y) }),
            onStart() { kit.tick(); },
            onMove(x, y) { mag.x = x; mag.y = y; update(false); },
            onDrop(x, y, via) { mag.x = x; mag.y = y; update(true); kit.recorder.log('magnet', Object.assign({ via, act: 'move' }, state())); kit.announce(`자석을 옮겼어요. ${cs.length === 1 ? '' : '나침반 1의 '}바늘 N극은 ${dirName(cs[0].bear)}쪽을 가리켜요.`); },
          });
          mg.g.setAttribute('aria-label', '막대자석. 끌거나 방향키로 옮기고 Enter로 내려놓아요.');
          btn(90, 140, '↻ 자석 돌리기', '자석을 45도 돌리기', 'lavender', (via) => {
            if (mag.away) return; mag.r = K.norm(mag.r + 45); place(); update(true); kit.tick();
            kit.recorder.log('magnet', Object.assign({ via, act: 'turn' }, state()));
          });
          btn(240, 140, 'N·S 뒤집기', '자석의 N극과 S극 자리를 바꾸기', 'lavender', (via) => {
            if (mag.away) return; mag.r = K.norm(mag.r + 180); place(); update(true); kit.tick();
            kit.recorder.log('magnet', Object.assign({ via, act: 'flip' }, state()));
          });
          const awayB = btn(370, 112, '자석 치우기', '자석을 실험대에서 치우거나 다시 꺼내기', 'mint', (via) => {
            mag.away = !mag.away; place(); update(true); kit.tick(); paintAway();
            kit.recorder.log('magnet', Object.assign({ via, act: mag.away ? 'away' : 'back' }, state()));
            kit.announce(mag.away ? '자석을 치웠어요. 나침반 바늘을 보세요.' : '자석을 다시 꺼냈어요.');
          });
          var paintAway = () => { awayB.g.querySelector('text').textContent = mag.away ? '자석 꺼내기' : '자석 치우기'; };
        }
        state = () => ({ mode, magnet: mag.away ? null : { x: Math.round(mag.x), y: Math.round(mag.y), r: mag.r }, needles: cs.map((c) => dirName(c.bear)) });
        setState = (s) => {
          s = s || {};
          if (s.magnet === null) mag.away = true; else if (s.magnet) Object.assign(mag, s.magnet, { away: false });
          place(); update(false); if (typeof paintAway === 'function') paintAway();
        };
        // 목표 방위를 만드는 자석 자리: 나침반에서 그 방위 반대쪽 50 떨어진 곳에 S극이 오게 놓는다(바늘 N극은 S극으로 끌린다)
        const solveFor = (t) => {
          if (t.away) return null;
          const c = cs[t.compass || 0]; const b = BEAR[t.needle] ?? 90; const [cx, cy] = [c.g.__pk.x, c.g.__pk.y];
          // S극을 나침반의 그 방위 쪽 70 자리에 두고, 자석은 그 방향으로 뻗게(N극이 더 멀리)
          const sx = cx + 70 * Math.sin(rad(b)); const sy = cy - 70 * Math.cos(rad(b));
          const r = K.norm(b - 90); // 자석의 S→N 방향이 b가 되게
          const x = sx + POLE * Math.sin(rad(b)); const y = sy - POLE * Math.cos(rad(b));
          return { x: Math.round(x), y: Math.round(y), r };
        };
        solve = (t) => { t = t || {}; const m = solveFor(t); setState({ magnet: m }); };
        // 다 했지만 틀린 상태: 바늘이 반대쪽을 가리키는 자리(자석을 거꾸로 둔 흔한 실수), 치우기 문항은 자석을 그대로 둔 채
        wrong = (t) => { t = t || {}; if (t.away) return { magnet: { x: 220, y: 162, r: 0 } }; const opp = { 북: '남', 남: '북', 동: '서', 서: '동' }[t.needle] || '서'; return { magnet: solveFor(Object.assign({}, t, { needle: opp })) }; };
        check = (t) => {
          t = t || {};
          const no = (feedback, hint) => ({ correct: false, feedback, hint });
          if (t.away) {
            if (!mag.away) return no('자석이 아직 실험대 위에 있어요.', '"자석 치우기"를 눌러 자석을 치운 뒤 바늘을 보세요.');
            if (!hinting) cs.forEach((c) => kit.spring(1.15, 1, { stiffness: 300, damping: 9, onUpdate: (v) => kit.transform(c.g, { s: v }) }));
            return { correct: true, feedback: '맞아요! 자석이 없으면 나침반 바늘의 N극은 모두 북쪽을 가리켜요.' };
          }
          const k = t.compass || 0; const c = cs[k]; const want = BEAR[t.needle];
          if (mag.away) return no('자석을 치운 상태예요.', '"자석 꺼내기"를 눌러 자석을 다시 꺼내요.');
          const now = dirName(c.bear);
          if (angDiff(c.bear, want) <= 25) { if (!hinting) kit.spring(1.15, 1, { stiffness: 300, damping: 9, onUpdate: (v) => kit.transform(c.g, { s: v }) }); return { correct: true, feedback: `맞아요! 바늘 N극이 ${t.needle}쪽을 가리켜요. 바늘 N극은 자석의 S극에 끌려가요.` }; }
          const P = polesOf(mag); const cp = [c.g.__pk.x, c.g.__pk.y];
          const dN = Math.hypot(P.N[0] - cp[0], P.N[1] - cp[1]); const dS = Math.hypot(P.S[0] - cp[0], P.S[1] - cp[1]);
          if (Math.min(dN, dS) > 150) return no(`자석이 ${cs.length > 1 ? `나침반 ${k + 1}` : '나침반'}에서 너무 멀어요. 지금 바늘 N극은 ${now}쪽을 가리켜요.`, `자석을 ${cs.length > 1 ? `나침반 ${k + 1}` : '나침반'} 가까이 옮겨요.`);
          if (dN < dS && angDiff(c.bear, K.norm(want + 180)) <= 45) return no(`바늘 N극이 반대쪽(${now}쪽)을 가리켜요. 바늘 N극은 자석의 N극을 밀어내요.`, `자석의 S극이 나침반의 ${t.needle}쪽에 오게 해 보세요. 'N·S 뒤집기'를 써도 돼요.`);
          return no(`지금 바늘 N극은 ${now}쪽을 가리켜요.`, `바늘 N극은 자석의 S극 쪽으로 끌려가요. 자석의 S극을 나침반의 ${t.needle}쪽 가까이에 두어 보세요.`);
        };
        hintFor = (t, lv) => {
          t = t || {};
          if (t.away) {
            if (lv === 1) return '자석이 없을 때 나침반 바늘을 돌리는 것은 무엇일지 생각해 보고, 자석을 치운 뒤 바늘을 살펴봐요.';
            return mag.away ? '자석을 치웠어요. 이제 확인을 눌러 봐요.' : '아직 자석이 실험대 위에 있어요. "자석 치우기"를 눌러요.';
          }
          // 1단계는 활동 1과 잇는 질문만 — 어느 극을 어디에 둘지는 말하지 않는다
          if (lv === 1) return '처음 실험을 떠올려요. 다른 극끼리는 어떻게 되었나요? 바늘의 빨간 끝(N극)도 자석의 한 극이에요.';
          const c = cs[t.compass || 0]; const P = polesOf(mag); const cp = [c.g.__pk.x, c.g.__pk.y];
          const dN = Math.hypot(P.N[0] - cp[0], P.N[1] - cp[1]); const dS = Math.hypot(P.S[0] - cp[0], P.S[1] - cp[1]);
          if (lv === 2) {
            if (mag.away) return '자석을 치운 상태예요. "자석 꺼내기"를 눌러요.';
            if (Math.min(dN, dS) > 150) return '자석이 나침반에서 멀어서 바늘이 거의 북쪽만 가리켜요. 먼저 자석을 나침반 가까이 가져가요.';
            return `지금 ${cs.length > 1 ? `나침반 ${(t.compass || 0) + 1}` : '나침반'}에 더 가까운 자석의 끝은 ${dN < dS ? 'N극' : 'S극'}이에요. 그 극은 바늘의 빨간 끝(N극)을 끌어당길까요, 밀어낼까요?`;
          }
          return check(t).hint || '';
        };
        demo = async (t) => {
          const m = solveFor(t || {}) || { x: 220, y: 162, r: 0 };
          const from = { x: mag.x, y: mag.y }; mag.away = false; mag.r = m.r; place();
          await kit.tween(1300, (p) => { mag.x = from.x + (m.x - from.x) * p; mag.y = from.y + (m.y - from.y) * p; place(); update(false); });
          update(true);
        };
        setState({});
      } else if (mode === 'poles') {
        const A = { x: 210, y: 170, r: 0 };
        const ag = magnetG(M, { tag: '가' });
        kit.transform(ag.g, { x: A.x, y: A.y, r: A.r, cx: 0, cy: 0 });
        const B = Object.assign({ x: 360, y: 170, r: 0 }, o.start || {});
        const bg = magnetG(M, { tag: '나' });
        let event = null; let pair = null; // pair: 실제로 맞닿은 끝 { ka: 가의 극, kb: 나의 극 }
        const placeB = () => { kit.transform(bg.g, { x: B.x, y: B.y, r: B.r, cx: 0, cy: 0 }); bg.upright(B.r); };
        // 맞닿은 끝: 나는 '가를 향한 끝', 가는 '나를 향한 끝'으로만 닿는다.
        // (예전에는 네 극 쌍 가운데 가장 가까운 쌍을 골라서, 나의 S극을 가의 N극에 대고 조금 지나치게 놓으면
        //  나의 S극과 가의 S극이 더 가까워져 'S-S, 같은 극'이라고 거꾸로 가르쳤다)
        const facing = (P, q) => (Math.hypot(P.N[0] - q[0], P.N[1] - q[1]) <= Math.hypot(P.S[0] - q[0], P.S[1] - q[1]) ? 'N' : 'S');
        const contact = () => {
          const pa = polesOf(A); const pb = polesOf(B);
          const ka = facing(pa, [B.x, B.y]); const kb = facing(pb, [A.x, A.y]);
          const d = Math.hypot(pa[ka][0] - pb[kb][0], pa[ka][1] - pb[kb][1]);
          // 나의 가운데가 가의 가운데와 거의 같으면 어느 끝이 닿았는지 알 수 없다(완전히 겹쳐 놓음)
          const stacked = Math.hypot(B.x - A.x, B.y - A.y) < 16;
          return { d, ka, kb, stacked };
        };
        const NAME = { N: 'N극', S: 'S극' };
        const home = () => Object.assign({ x: 360, y: 170 }, o.start || {});
        const react = (via) => {
          const c = contact();
          if (c.stacked) {
            event = null; pair = null; say('가의 끝에 닿게 놓아요');
            const h = home(); const f = { x: B.x, y: B.y };
            kit.tween(320, (p) => { B.x = f.x + (h.x - f.x) * p; B.y = f.y + (h.y - f.y) * p; placeB(); }).then(() => { B.x = h.x; B.y = h.y; placeB(); });
            kit.tick('no'); kit.announce('자석 나를 가 위에 겹쳐 놓았어요. 나의 한쪽 끝이 가의 끝에 닿게 놓아요.');
            kit.recorder.log('magnet', Object.assign({ via, act: 'stacked' }, state()));
            return;
          }
          if (c.d > 70) { event = null; pair = null; say(''); return; }
          pair = { ka: c.ka, kb: c.kb };
          const pa = polesOf(A)[c.ka]; const pb = polesOf(B)[c.kb];
          // 가의 끝에서 바깥쪽 방향
          const out = c.ka === 'N' ? [Math.cos(rad(A.r)), Math.sin(rad(A.r))] : [-Math.cos(rad(A.r)), -Math.sin(rad(A.r))];
          if (c.ka !== c.kb) {
            event = 'attract';
            // 끌려와 붙는다: 나의 그 끝이 가의 끝에서 바깥쪽 24 자리에 오게(겹쳐 놓았어도 가의 바깥으로 나와 붙는다)
            const gx = pa[0] + out[0] * (HALF - POLE) * 2 - (pb[0] - B.x); const gy = pa[1] + out[1] * (HALF - POLE) * 2 - (pb[1] - B.y);
            const f = { x: B.x, y: B.y };
            kit.tween(260, (p) => { B.x = f.x + (gx - f.x) * p; B.y = f.y + (gy - f.y) * p; placeB(); }).then(() => { B.x = gx; B.y = gy; placeB(); });
            say(`${NAME[c.ka]}과 ${NAME[c.kb]}: 끌어당겨 붙었어요`); kit.tick('ok');
            kit.announce(`가의 ${NAME[c.ka]}과 나의 ${NAME[c.kb]}이 만나 서로 끌어당겨 붙었어요.`);
          } else {
            event = 'repel';
            // 밀려난다: 나의 그 끝이 가의 끝에서 바깥쪽으로 70 떨어진 자리까지 밀어 낸다(겹쳐 놓았어도 바깥으로 나온다)
            const f = { x: B.x, y: B.y };
            const gx = kit.clamp(pa[0] + out[0] * 70 - (pb[0] - B.x), 60, 380); const gy = kit.clamp(pa[1] + out[1] * 70 - (pb[1] - B.y), 60, 260);
            kit.spring(0, 1, { stiffness: 220, damping: 11, onUpdate: (p) => { B.x = f.x + (gx - f.x) * p; B.y = f.y + (gy - f.y) * p; placeB(); }, onDone: () => { B.x = gx; B.y = gy; placeB(); } });
            say(`${NAME[c.ka]}과 ${NAME[c.kb]}: 밀어냈어요`); kit.tick('no');
            kit.announce(`가의 ${NAME[c.ka]}과 나의 ${NAME[c.kb]}이 만나 서로 밀어냈어요.`);
          }
          kit.recorder.log('magnet', Object.assign({ via, act: event }, state()));
        };
        if (!print) {
          kit.drag(st, bg.g, {
            keyStep: 10, bounds: [60, 60, 380, 260],
            snap: (x, y) => ({ x: Math.round(x), y: Math.round(y) }),
            onStart() { kit.tick(); event = null; pair = null; say(''); },
            onMove(x, y) { B.x = x; B.y = y; },
            onDrop(x, y, via) { B.x = x; B.y = y; react(via); },
          });
          bg.g.setAttribute('aria-label', '움직이는 자석 나. 끌거나 방향키로 옮기고 Enter로 내려놓아요.');
          btn(130, 150, 'N·S 뒤집기', '자석 나의 N극과 S극 자리를 바꾸기', 'lavender', (via) => {
            B.r = K.norm(B.r + 180); event = null; pair = null; say(''); placeB(); kit.tick();
            kit.recorder.log('magnet', Object.assign({ via, act: 'flip' }, state()));
            kit.announce(`자석 나를 뒤집었어요. 이제 왼쪽 끝이 ${K.norm(B.r) === 180 ? 'N극' : 'S극'}이에요.`);
          });
          btn(310, 150, '처음 자리로', '자석 나를 처음 자리로 옮기기', 'cream', (via) => {
            Object.assign(B, home()); event = null; pair = null; say(''); placeB(); kit.tick();
            kit.recorder.log('magnet', Object.assign({ via, act: 'home' }, state()));
          });
        }
        state = () => ({ mode, b: { x: Math.round(B.x), y: Math.round(B.y), r: B.r }, event, pair: pair ? `${pair.ka}-${pair.kb}` : null });
        // 상태를 넣을 때는 놓인 자리에서 맞닿은 끝을 다시 계산한다 — 적힌 event가 놓인 자리와 어긋나 거꾸로 가르치지 않게
        setState = (s) => {
          s = s || {}; if (s.b) Object.assign(B, s.b); placeB(); say('');
          const c = contact();
          pair = s.event && !c.stacked && c.d <= 70 ? { ka: c.ka, kb: c.kb } : null;
          event = pair ? (pair.ka === pair.kb ? 'repel' : 'attract') : null;
        };
        // 붙은 자리: 나의 S극(왼쪽 끝)이 가의 N극 바로 오른쪽 / 밀려난 자리: 뒤집은 나(왼쪽 N극)가 가의 N극에서 조금 떨어진 곳
        solve = (t) => { t = t || {}; setState({ b: t.repel ? { x: 360, y: 170, r: 180 } : { x: 318, y: 170, r: 0 }, event: true }); };
        wrong = (t) => { t = t || {}; return t.repel ? { b: { x: 318, y: 170, r: 0 }, event: 'attract' } : { b: { x: 360, y: 170, r: 180 }, event: 'repel' }; };
        check = (t) => {
          t = t || {};
          const no = (feedback, hint) => ({ correct: false, feedback, hint });
          const want = t.repel ? 'repel' : 'attract';
          // 끝에 대 보지 않은 확인은 시도로 세지 않는다
          if (!event) return { correct: false, incomplete: true, feedback: '자석 나를 끌어 나의 한쪽 끝을 자석 가의 끝에 닿게 놓아요.', hint: '나의 한쪽 끝이 가의 끝에 닿을 만큼 가까이 옮기고 놓아요.' };
          // 피드백은 실제로 맞닿은 두 극을 그대로 말한다 — 'S극과 N극인데 같은 극'처럼 관찰과 어긋난 말을 하지 않게
          const met = `가의 ${NAME[pair.ka]}과 나의 ${NAME[pair.kb]}이 만났어요.`;
          if (event === want) return { correct: true, feedback: want === 'attract' ? `맞아요! ${met} 다른 극끼리는 서로 끌어당겨요.` : `맞아요! ${met} 같은 극끼리는 서로 밀어내요.` };
          return no(event === 'attract' ? `이번에는 붙었어요. ${met} 다른 극끼리 만났기 때문이에요.` : `이번에는 밀려났어요. ${met} 같은 극끼리 만났기 때문이에요.`, want === 'repel' ? '"N·S 뒤집기"로 나를 뒤집거나, 가의 다른 쪽 끝에 대어 같은 극끼리 만나게 해요.' : '가의 N극에는 나의 S극을, 가의 S극에는 나의 N극을 대어요.');
        };
        hintFor = (t, lv) => {
          if (lv === 1) return '나의 한쪽 끝을 가의 끝에 닿게 놓아요. 놓기 전에 어느 극과 어느 극이 만날지 먼저 말해 봐요.';
          if (lv === 2) return !event ? '아직 나의 끝이 가의 끝에 닿지 않았어요. 더 가까이 놓아요.' : `지금은 가의 ${NAME[pair.ka]}과 나의 ${NAME[pair.kb]}이 만났어요. 문제에서 대라고 한 극과 같은지 보세요.`;
          return check(t).hint || '';
        };
        demo = async (t) => { solve(t); };
        setState({});
      } else {
        // hidden: 극 표시가 지워진 자석 + 움직이는 나침반
        const nAt = o.hiddenN === 'ㄴ' ? 'ㄴ' : 'ㄱ';
        const mag = { x: 220, y: 150, r: nAt === 'ㄱ' ? 180 : 0 }; // ㄱ은 왼쪽 끝
        const mg = magnetG(M, { hidden: true });
        kit.transform(mg.g, { x: mag.x, y: mag.y, r: mag.r, cx: 0, cy: 0 });
        NS('text', { x: mag.x - HALF - 18, y: mag.y + 6, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: '#3D352E' }, M).textContent = 'ㄱ';
        NS('text', { x: mag.x + HALF + 18, y: mag.y + 6, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: '#3D352E' }, M).textContent = 'ㄴ';
        const probe = Object.assign({ x: 220, y: 250 }, o.start || {});
        const pc = compassG(C, probe.x, probe.y, null);
        NS('circle', { r: 30, class: 'pk-hit' }, pc.g);
        const probed = new Set(); let choice = null;
        const update = (animate) => {
          swing(pc, field([probe.x, probe.y], [mag]), animate);
          const P = polesOf(mag); const L = mag.r === 180 ? P.N : P.S; const R = mag.r === 180 ? P.S : P.N;
          if (Math.hypot(probe.x - L[0], probe.y - L[1]) < 80) probed.add('ㄱ');
          if (Math.hypot(probe.x - R[0], probe.y - R[1]) < 80) probed.add('ㄴ');
        };
        const choiceBtns = [];
        if (!print) {
          kit.drag(st, pc.g, {
            keyStep: 10, bounds: [40, 50, 400, 268],
            snap: (x, y) => ({ x: Math.round(x), y: Math.round(y) }),
            onStart() { kit.tick(); },
            onMove(x, y) { probe.x = x; probe.y = y; update(false); },
            onDrop(x, y, via) { probe.x = x; probe.y = y; update(true); kit.recorder.log('magnet', Object.assign({ via, act: 'probe' }, state())); kit.announce(`나침반 바늘 N극이 ${dirName(pc.bear)}쪽을 가리켜요.`); },
          });
          pc.g.setAttribute('aria-label', '나침반. 끌거나 방향키로 옮겨 자석 끝에 대어 보세요.');
          [['ㄱ', 'ㄱ 끝이 N극이에요'], ['ㄴ', 'ㄴ 끝이 N극이에요']].forEach(([key, label], k) => {
            const b = btn(120 + k * 200, 170, label, label, 'cream', (via) => {
              choice = key; choiceBtns.forEach((c) => c.pc.setColor(c.key === key ? 'buttercup' : 'cream')); kit.tick();
              kit.recorder.log('magnet', Object.assign({ via, act: 'choose' }, state()));
            });
            choiceBtns.push(Object.assign(b, { key }));
          });
        }
        state = () => ({ mode, probe: { x: Math.round(probe.x), y: Math.round(probe.y) }, choice, probed: [...probed].sort() });
        setState = (s) => {
          s = s || {};
          if (s.probe) Object.assign(probe, s.probe); kit.transform(pc.g, { x: probe.x, y: probe.y });
          probed.clear(); (s.probed || []).forEach((p) => probed.add(p)); choice = s.choice || null;
          choiceBtns.forEach((c) => c.pc.setColor(c.key === choice ? 'buttercup' : 'cream'));
          update(false);
        };
        solve = (t) => { t = t || {}; setState({ probe: { x: 220 + (nAt === 'ㄱ' ? -110 : 110), y: 150 }, choice: t.nEnd, probed: ['ㄱ', 'ㄴ'] }); };
        wrong = (t) => { t = t || {}; return { probe: { x: 220 + (nAt === 'ㄱ' ? -110 : 110), y: 150 }, choice: t.nEnd === 'ㄱ' ? 'ㄴ' : 'ㄱ', probed: ['ㄱ', 'ㄴ'] }; };
        check = (t) => {
          t = t || {};
          const no = (feedback, hint) => ({ correct: false, feedback, hint });
          // 관찰 없이 고른 답은 맞아도 확인하지 않는다(시도로 세지 않음) — 반반 찍기와 단추 번갈아 누르기로 통과하지 않게
          if (!choice) return { correct: false, incomplete: true, feedback: '나침반을 자석 끝에 대어 본 뒤, 아래 두 단추 가운데 하나를 골라요.', hint: '나침반을 자석의 한쪽 끝에 대어 바늘의 어느 극이 끌려가는지 보세요.' };
          if (!probed.has(choice)) return { correct: false, incomplete: true, feedback: `먼저 나침반을 ${choice} 끝 가까이에 대어 보세요. 바늘을 보고 골라요.`, hint: `나침반을 끌어 ${choice} 끝 가까이에 놓고 바늘을 보세요.` };
          // 학생이 실제로 대 본 끝의 바늘 모습만 말한다
          if (choice === t.nEnd) return { correct: true, feedback: `맞아요! ${choice} 끝에 대니 바늘의 S극(파랑)이 끌려갔어요. 다른 극끼리 끌어당기니 ${choice} 끝이 N극이에요.` };
          return no(`${choice} 끝에는 바늘의 N극(빨강)이 끌려갔어요. 바늘 N극을 끌어당긴 끝은 다른 극, 곧 S극이에요.`, '바늘의 N극(빨강)은 자석의 S극으로, 바늘의 S극(파랑)은 자석의 N극으로 끌려가요.');
        };
        hintFor = (t, lv) => {
          if (lv === 1) return '나침반 바늘도 자석이에요. 자석의 끝에 나침반을 대면 바늘의 어느 쪽이 그 끝으로 끌려가는지 보세요.';
          if (lv === 2) {
            if (!probed.size) return '아직 나침반을 자석 끝에 대어 보지 않았어요. 나침반을 끌어 한쪽 끝 가까이에 놓아요.';
            const one = [...probed].sort().join('·');
            return `${one} 끝에 대어 보았어요. 그때 바늘의 빨간 끝과 파란 끝 가운데 어느 쪽이 자석을 향했나요? 다른 극끼리 끌어당겨요.`;
          }
          return check(t).hint || '';
        };
        demo = async () => {};
        setState({});
      }

      return {
        getState: () => state(),
        setState: (s) => setState(s),
        reset() { setState(mode === 'compass' ? { magnet: Object.assign({ x: 220, y: 162, r: 0 }, o.start || {}) } : mode === 'poles' ? { b: Object.assign({ x: 360, y: 170, r: 0 }, o.start || {}) } : { probe: Object.assign({ x: 220, y: 250 }, o.start || {}) }); },
        solve: (t) => solve(t),
        wrongAnswer: (t) => wrong(t),
        check: (t) => check(t),
        // 새 힌트 계약: 1단계는 늘 열리고 답(극·방위·자리)을 말하지 않는다. 지금 상태가 맞아도 '맞아요'라고 알려 주지 않는다(힌트로 정답 확인 금지).
        hint(t, opts) {
          const lv = hintLevel(opts);
          hinting = true;
          try { return { hint: hintFor(t, lv) || '', level: lv }; } finally { hinting = false; }
        },
        demo: (t) => demo(t),
      };
    },
  });
})(window.PaperKit);
