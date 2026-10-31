/* 종이 직각 — 할핀으로 이은 종이 띠 두 장과 종이 삼각자. 3학년 '각과 직각'용(각도는 아직 배우지 않으므로 숫자를 쓰지 않는다).
 * 모드(o.mode)
 *  - 'make'(기본): 복숭아색 띠를 할핀 둘레로 돌려 각을 만든다. target { right:true } | { kind:'less'|'more' }
 *                 (less = 직각보다 작은 각, more = 직각보다 큰 각)
 *  - 'judge'     : 놓인 각(state.angle, o.turn만큼 기울어짐)을 삼각자로 대 보고 '직각보다 작아요/직각이에요/직각보다 커요' 중 고른다.
 *                 target { judge:'less'|'right'|'more' }
 *  - 'compare'   : 변의 길이가 다른 두 각 가·나 가운데 더 큰 각을 고른다(o.pair = [{angle, arm}, {angle, arm}]).
 *                 target { bigger:'가'|'나'|'same' }
 *  - 'parts'     : 각의 꼭짓점이나 변을 눌러 고른다. target { part:'vertex'|'side' }
 * 옵션: step(돌리기 단위, 기본 15), showKind(지금 각의 이름 글자 — 확인 뒤에도 늘), square(삼각자 대 보기 단추, 기본 true),
 *       turn(각 전체를 기울이는 각도 — 직각이 늘 반듯하게 놓이지 않게), start(make 처음 각, 기본 30), arm(변 길이 배율), print
 * 상태: { angle, square(삼각자를 대 보았는지), choice, part }
 */
(function (K) {
  'use strict';
  // 무대가 화면에 그려질 배율(화면 px ÷ viewBox 단위) 어림: 상자 안쪽 폭과 무대 높이 제한(max-height)을 함께 본다. 모르면 1
  const stageScale = (box, W, H) => {
    if (!box || !(box.clientWidth > 0) || typeof getComputedStyle !== 'function') return 1;
    const cs = getComputedStyle(box); const bw = box.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    let mh = Infinity;
    try { const t = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); t.setAttribute('class', 'pk-stage'); box.appendChild(t); const v = parseFloat(getComputedStyle(t).maxHeight); t.remove(); if (Number.isFinite(v) && v > 0) mh = v; } catch (_) { /* 높이 제한 모름 */ }
    return bw > 0 ? Math.min(bw / W, H ? mh / H : Infinity) : 1;
  };
  const kindOf = (a) => (a > 0 && a < 90 ? 'less' : a === 90 ? 'right' : a > 90 && a < 180 ? 'more' : null);
  const WORD = { less: '직각보다 작은 각', right: '직각', more: '직각보다 큰 각' };
  // 힌트 단계(hint(target, { level, attempts })): 1 = 개념·전략만(늘 열림, 답이 될 각의 이름·기호를 말하지 않는다), 2 = 한 번 틀린 뒤 지금 어긋난 단계, 3 = 두 번 틀린 뒤 풀이 한 걸음
  const hintLevel = (opts) => { const a = (opts && opts.attempts) || 0; const l = (opts && opts.level) || 1; return Math.max(1, Math.min(l, a >= 2 ? 3 : a >= 1 ? 2 : 1)); };

  K.registerTool('rightangle', {
    name: '종이 직각',
    create(box, o, kit) {
      const print = !!o.print;
      const mode = ['judge', 'compare', 'parts'].includes(o.mode) ? o.mode : 'make';
      const step = o.step || 15;
      const btnRow = !print && (mode === 'judge' || mode === 'compare');
      const W = 400; const H = btnRow ? 330 : 280;
      const st = kit.stage(box, { viewBox: [W, H], label: { make: '종이 띠 두 장으로 각을 만들어요. 복숭아색 띠를 돌려요.', judge: '종이 띠로 만든 각이에요. 삼각자를 대 보고 직각인지 알아봐요.', compare: '변의 길이가 다른 두 각 가와 나예요. 더 큰 각을 골라요.', parts: '종이 띠로 만든 각이에요. 꼭짓점이나 변을 눌러 골라요.' }[mode] });
      if (print) st.svg.setAttribute('viewBox', mode === 'compare' ? '10 40 380 230' : '40 40 320 230');
      const NS = (tag, a, p) => kit.el(tag, a, p);
      // 화면 px → viewBox 단위: 누르는 곳을 화면 48px 이상으로 잡는다(휴대폰에서 무대가 줄면 단추가 43px이 되던 문제)
      const zoom = Math.max(1, 1 / stageScale(box, W, H)); const px = (n) => n * zoom;
      const showKind = !print && mode === 'make' && !!o.showKind;
      const squareOn = !print && o.square !== false && (mode === 'make' || mode === 'judge');

      // 각 하나 그리기: 꼭짓점 V, 고정 띠는 오른쪽, 움직이는 띠는 12시 방향에서 v만큼 돈다(각 a = 90 − v)
      function buildAngle(parent, V, armK, turn) {
        const G = NS('g', null, parent);
        if (turn) kit.transform(G, { r: -turn, cx: V[0], cy: V[1] });
        const A = Math.round(150 * armK);
        const fixedG = NS('g', { class: 'ra-side' }, G);
        const fh = Math.max(22, px(48)); NS('rect', { x: V[0] + 12, y: V[1] - fh / 2, width: A - 12, height: fh, class: 'pk-hit' }, fixedG);
        kit.piece(st, fixedG, { shape: { type: 'rect', x: V[0] - 12, y: V[1] - 11, w: A + 12, h: 22, rx: 11 }, color: 'mint', depth: 2 });
        NS('line', { x1: V[0], y1: V[1], x2: V[0] + A - 8, y2: V[1], stroke: '#275C46', 'stroke-width': 1.6, 'stroke-dasharray': '6 5', 'pointer-events': 'none' }, fixedG);
        const sq = NS('g', { display: 'none', 'pointer-events': 'none' }, G);
        kit.piece(st, sq, { shape: { type: 'poly', points: `${V[0]},${V[1]} ${V[0] + 96},${V[1]} ${V[0]},${V[1] - 96}` }, color: 'lavender', depth: 1, fill: 'rgba(215,203,235,0.72)' });
        NS('path', { d: `M${V[0] + 16} ${V[1]} V${V[1] - 16} H${V[0]}`, fill: 'none', stroke: '#473B6B', 'stroke-width': 2 }, sq);
        const mv = NS('g', { class: 'ra-side ra-arm' }, G);
        const aw = Math.max(52, px(50)); NS('rect', { x: V[0] - aw / 2, y: V[1] - A - 10, width: aw, height: A - 10, class: 'pk-hit' }, mv);
        kit.piece(st, mv, { shape: { type: 'rect', x: V[0] - 11, y: V[1] - A, w: 22, h: A + 12, rx: 11 }, color: 'peach', depth: 2 });
        NS('line', { x1: V[0], y1: V[1] - A + 8, x2: V[0], y2: V[1], stroke: '#6E3B21', 'stroke-width': 1.6, 'stroke-dasharray': '6 5', 'pointer-events': 'none' }, mv);
        if (mode === 'make' && !print) {
          kit.piece(st, mv, { shape: { type: 'circle', cx: V[0], cy: V[1] - A + 11, r: 15 }, color: 'peach', depth: 2 });
          kit.piece(st, mv, { shape: { type: 'circle', cx: V[0], cy: V[1] - A + 11, r: 6 }, color: 'cream', depth: 0 });
        }
        const brad = NS('g', { class: 'ra-vertex' }, G);
        NS('circle', { cx: V[0], cy: V[1], r: Math.max(24, px(25)), class: 'pk-hit' }, brad);
        kit.piece(st, brad, { shape: { type: 'circle', cx: V[0], cy: V[1], r: 10 }, color: 'buttercup', depth: 2 });
        kit.piece(st, brad, { shape: { type: 'circle', cx: V[0], cy: V[1], r: 4.5 }, color: 'peach', depth: 0 });
        const setA = (a) => kit.transform(mv, { r: 90 - a, cx: V[0], cy: V[1] });
        return { G, mv, fixedG, brad, sq, setA, V };
      }

      let angle = o.start ?? (mode === 'make' ? 30 : 90);
      let choice = null; let part = null; let usedSquare = false; let sqShown = false;
      const L = st.layer('angle');
      const angles = [];
      if (mode === 'compare') {
        const pair = o.pair || [{ angle: 40, arm: 1 }, { angle: 65, arm: 0.45 }];
        [[40, 230], [236, 230]].forEach((V, k) => {
          const an = buildAngle(L, V, pair[k].arm || 1, 0); an.setA(pair[k].angle); angles.push(an);
          NS('text', { x: V[0] - 22, y: V[1] + 34, 'font-size': 20, class: 'pk-text', fill: '#3D352E' }, L).textContent = k ? '나' : '가';
        });
      } else {
        const an = buildAngle(L, [mode === 'make' ? 160 : 150, 236], o.arm || 1, o.turn || 0); an.setA(angle); angles.push(an);
      }
      const main = angles[0];

      // ---- 지금 각의 이름(쉬움) ----
      const kindText = showKind ? NS('text', { x: 300, y: 40, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: '#473B6B' }, st.layer('kind')) : null;
      const paintKind = () => { if (kindText) { const k = kindOf(angle); kindText.textContent = k ? WORD[k] : angle === 0 ? '아직 각이 없어요' : '곧은 선'; } };

      // ---- 만들기: 띠 돌리기 ----
      let rot = null;
      if (mode === 'make' && !print) {
        const V = [160, 236];
        rot = kit.rotate(st, main.mv, {
          center: V, step, value: 90 - angle,
          label: '움직이는 종이 띠. 방향키로 조금씩 벌리거나 좁혀요',
          valueText: () => (showKind && kindOf(angle) ? WORD[kindOf(angle)] : '움직이는 띠'),
          onChange(v) { if (v < -90 || v > 90) { rot && rot.set(kit.clamp(v, -90, 90)); return; } angle = Math.round(kit.clamp(90 - v, 0, 180)); paintKind(); },
          onStart() { kit.tick(); },
          onEnd() { kit.recorder.log('rightangle', state()); const k = kindOf(angle); kit.announce(showKind && k ? `${WORD[k]}이에요.` : '띠를 놓았어요.'); },
        });
      }

      // ---- 삼각자 대 보기 단추 ----
      const btn = (layer, x, y, w, label, aria, color, press) => {
        const g = NS('g', { tabindex: 0, role: 'button', 'aria-label': aria }, layer);
        kit.transform(g, { x, y });
        const bh = Math.max(50, px(50)); NS('rect', { x: -w / 2 - 2, y: -bh / 2, width: w + 4, height: bh, class: 'pk-hit' }, g);
        const pc = kit.piece(st, g, { shape: { type: 'rect', x: -w / 2, y: -22, w, h: 44, rx: 12 }, color, depth: 2 });
        NS('text', { x: 0, y: 6, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: kit.palette[color].dark }, g).textContent = label;
        const go = (via) => { kit.spring(0.9, 1, { stiffness: 380, damping: 12, onUpdate: (v) => kit.transform(g, { s: v }) }); press(via); };
        g.addEventListener('click', () => go('pointer'));
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('keyboard'); } });
        return { g, pc };
      };
      const UI = st.layer('ui');
      let sqBtn = null;
      const paintSq = () => { main.sq.setAttribute('display', sqShown ? 'inline' : 'none'); if (sqBtn) sqBtn.pc.setColor(sqShown ? 'lavender' : 'cream'); };
      if (squareOn) {
        sqBtn = btn(UI, mode === 'make' ? 74 : 316, 36, 128, '삼각자 대 보기', '종이 삼각자를 꼭짓점에 대 보기', 'cream', (via) => {
          sqShown = !sqShown; if (sqShown) usedSquare = true; paintSq(); kit.tick();
          kit.recorder.log('rightangle', Object.assign({ via, act: 'square' }, state()));
          kit.announce(sqShown ? '삼각자의 직각을 꼭짓점에 대고, 한 변을 초록 띠에 맞췄어요. 다른 변과 복숭아색 띠를 견주어 보세요.' : '삼각자를 치웠어요.');
        });
      }

      // ---- 고르기 단추(판단·비교) ----
      const choiceBtns = [];
      if (btnRow) {
        const opts = mode === 'judge'
          ? [['less', '직각보다 작아요'], ['right', '직각이에요'], ['more', '직각보다 커요']]
          : [['가', '가가 더 커요'], ['나', '나가 더 커요'], ['same', '크기가 같아요']];
        opts.forEach(([key, label], k) => {
          const b = btn(UI, 70 + k * 130, 302, 122, label, label, 'cream', (via) => {
            choice = key; kit.tick();
            choiceBtns.forEach((c) => { c.pc.setColor(c.key === key ? 'buttercup' : 'cream'); c.g.setAttribute('aria-pressed', String(c.key === key)); });
            kit.recorder.log('rightangle', Object.assign({ via, act: 'choose' }, state()));
          });
          choiceBtns.push(Object.assign(b, { key }));
        });
      }

      // ---- 겹쳐 보기(비교): 가의 각을 본떠 나의 꼭짓점·초록 띠에 맞춰 겹친다 — 눈어림 대신 겹쳐서 견준다 ----
      let looked = 0; let ghost = null;
      if (mode === 'compare' && !print) {
        btn(UI, 316, 36, 128, '겹쳐 보기', '가의 각을 본떠 나 위에 겹쳐 보기', 'sky', async (via) => {
          looked++; if (ghost) ghost.remove();
          const pair = o.pair || [{ angle: 40, arm: 1 }, { angle: 65, arm: 0.45 }];
          const V = angles[1].V; const len = 150 * Math.max(pair[0].arm || 1, pair[1].arm || 1) + 10;
          ghost = NS('g', { 'pointer-events': 'none' }, st.layer('ghost'));
          const style = { stroke: '#204C5A', 'stroke-width': 4, 'stroke-dasharray': '9 6', 'stroke-linecap': 'round', fill: 'none' };
          NS('line', Object.assign({ x1: V[0], y1: V[1], x2: V[0] + len, y2: V[1] }, style), ghost);
          const arm = NS('line', Object.assign({ x1: V[0], y1: V[1], x2: V[0] + len, y2: V[1] }, style), ghost);
          const a0 = pair[0].angle;
          await kit.tween(700, (p) => { const r = (a0 * p * Math.PI) / 180; arm.setAttribute('x2', (V[0] + len * Math.cos(r)).toFixed(1)); arm.setAttribute('y2', (V[1] - len * Math.sin(r)).toFixed(1)); });
          kit.tick(); kit.announce('가의 각을 본떠 나의 꼭짓점과 초록 띠에 맞춰 겹쳤어요. 나의 복숭아색 띠가 점선보다 안쪽인지, 꼭 맞는지, 바깥쪽인지 보세요.');
          kit.recorder.log('rightangle', Object.assign({ via, act: 'overlay' }, state()));
          const mine = ghost; setTimeout(() => { if (ghost === mine) { ghost.remove(); ghost = null; } }, 3200);
        });
      }

      // ---- 꼭짓점·변 고르기 ----
      if (mode === 'parts' && !print) {
        const mark = (g, key, label) => {
          g.setAttribute('tabindex', 0); g.setAttribute('role', 'button'); g.setAttribute('aria-label', label);
          const go = (via) => {
            part = key; kit.tick();
            [main.brad, main.fixedG, main.mv].forEach((x) => x.classList.toggle('pk-ok', false));
            g.classList.add('pk-ok');
            kit.spring(0.92, 1, { stiffness: 320, damping: 10, onUpdate: (v) => g.setAttribute('opacity', v) });
            kit.recorder.log('rightangle', Object.assign({ via, act: 'part' }, state()));
            kit.announce(`${label}을 골랐어요.`);
          };
          g.addEventListener('click', () => go('pointer'));
          g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('keyboard'); } });
        };
        mark(main.brad, 'vertex', '할핀이 있는 점');
        mark(main.fixedG, 'side', '초록 띠');
        mark(main.mv, 'side', '복숭아색 띠');
      }

      const state = () => {
        const s = { mode, angle, square: usedSquare };
        if (btnRow) s.choice = choice;
        if (mode === 'compare') s.looked = looked;
        if (mode === 'parts') s.part = part;
        return s;
      };
      const setState = (s) => {
        s = s || {};
        if (s.angle != null && mode !== 'compare') { angle = kit.clamp(Math.round(s.angle), 0, 180); main.setA(angle); if (rot) rot.set(90 - angle); }
        choice = s.choice ?? null; part = s.part ?? null; usedSquare = !!s.square; sqShown = false; paintSq(); looked = s.looked || 0;
        choiceBtns.forEach((c) => c.pc.setColor(c.key === choice ? 'buttercup' : 'cream'));
        paintKind();
      };
      setState({ angle });

      let hinting = false;
      function celebrate() {
        if (print || hinting) return;
        angles.forEach((an) => kit.tween(600, (p) => kit.transform(an.brad, { r: p * 360, cx: an.V[0], cy: an.V[1] })));
      }

      return {
        getState: state,
        setState,
        reset() { setState({ angle: o.start ?? (mode === 'make' ? 30 : angle) }); },
        // 다 했지만 틀린 상태(모의 수업·검사용) — 흔한 오개념 쪽으로: 기울어진 직각을 '아니다'로, 변이 긴 쪽을 '더 크다'로
        wrongAnswer(t) {
          t = t || {};
          if (mode === 'make') return { angle: t.right ? 70 : t.kind === 'less' ? 120 : 60 };
          if (mode === 'judge') return { choice: t.judge === 'right' ? 'less' : 'right', square: true };
          if (mode === 'compare') return { choice: t.bigger === '가' ? '나' : '가' };
          return { part: t.part === 'vertex' ? 'side' : 'vertex' };
        },
        solve(t) {
          t = t || {};
          if (mode === 'make') { setState({ angle: t.right ? 90 : t.kind === 'less' ? 45 : 135 }); return; }
          if (mode === 'judge') { setState({ choice: t.judge, square: true }); return; }
          if (mode === 'compare') { setState({ choice: t.bigger }); return; }
          setState({ part: t.part });
        },
        check(t) {
          t = t || {};
          const no = (feedback, hint) => ({ correct: false, feedback, hint });
          const yes = (feedback) => { celebrate(); return { correct: true, feedback }; };
          const k = kindOf(angle);
          if (mode === 'make') {
            if (angle === 0) return no('아직 두 띠가 겹쳐 있어요. 각이 없어요.', '복숭아색 띠를 잡고 할핀 둘레로 돌려 벌려요.');
            if (angle === 180) return no('두 띠가 곧은 선이 되었어요. 곧은 선은 각이 아니에요.', '복숭아색 띠를 조금 좁혀요.');
            const sq = squareOn ? ' 삼각자를 대 보세요.' : '';
            if (t.right) {
              if (k === 'right') return yes('맞아요! 삼각자의 직각과 꼭 맞는 직각이에요.');
              return no(k === 'less' ? `직각보다 작아요.${sq}` : `직각보다 커요.${sq}`, '삼각자를 대고, 삼각자의 두 변에 두 띠가 꼭 맞게 돌려요. 공책 모서리처럼 반듯한 각이에요.');
            }
            if (t.kind) {
              if (k === t.kind) return yes(`맞아요! ${WORD[k]}이에요.`);
              if (k === 'right') return no(`지금은 직각이에요. ${t.kind === 'less' ? '더 좁혀요' : '더 벌려요'}.`, `삼각자의 직각보다 ${t.kind === 'less' ? '안쪽으로 좁게' : '바깥쪽으로 넓게'} 벌려요.`);
              return no(`지금은 ${WORD[k]}이에요.`, `삼각자를 대 보고, 복숭아색 띠가 삼각자의 변보다 ${t.kind === 'less' ? '안쪽' : '바깥쪽'}에 오게 해요.`);
            }
          }
          if (mode === 'judge') {
            if (!choice) return { correct: false, incomplete: true, feedback: '세 단추 가운데 하나를 골라요.', hint: '삼각자 대 보기를 눌러 직각과 견주어 보세요.' };
            // 삼각자를 대 보기 전의 판단은 맞든 틀리든 시도로 세지 않는다 — 단추를 차례로 눌러 맞히지 않게
            if (!usedSquare) return { correct: false, incomplete: true, feedback: '먼저 "삼각자 대 보기"를 눌러 삼각자의 직각과 견주어 본 뒤에 확인해요.', hint: '삼각자의 직각을 꼭짓점에 대고 한 변을 초록 띠에 맞춰요.' };
            if (choice === t.judge) return yes(t.judge === 'right' ? (o.turn ? '맞아요! 비스듬히 놓여 있어도 삼각자의 직각과 꼭 맞으니 직각이에요.' : '맞아요! 삼각자의 직각과 꼭 맞아요.') : `맞아요! 삼각자의 직각보다 ${t.judge === 'less' ? '좁아요' : '넓어요'}.`);
            // 기울어진 직각: 첫 오답은 '다시 보기'만 — 교정 문장(기울어져도 직각)을 바로 주면 삼각자를 다시 보지 않고 답만 바꾼다
            if (t.judge === 'right' && o.turn) return no('삼각자의 두 변이 두 띠와 꼭 맞는지 다시 보세요. 남는 틈이나 겹치는 곳이 있나요?', '기울어져 있어도 삼각자의 직각과 꼭 맞으면 직각이에요. 놓인 방향은 각의 크기와 관계없어요.');
            if (t.judge !== 'right' && choice === 'right') return no('삼각자의 직각과 꼭 맞지 않아요. 복숭아색 띠가 삼각자의 변보다 안쪽인지 바깥쪽인지 보세요.', '삼각자의 직각을 꼭짓점에 대고 한 변을 초록 띠에 맞춰요.');
            return no('삼각자를 대 본 모습을 다시 살펴봐요. 복숭아색 띠가 삼각자의 변보다 안쪽인가요, 바깥쪽인가요?', '삼각자의 직각을 꼭짓점에 대고 한 변을 초록 띠에 맞추면, 복숭아색 띠가 삼각자의 다른 변 안쪽인지·꼭 맞는지·바깥쪽인지 보여요.');
          }
          if (mode === 'compare') {
            if (!choice) return { correct: false, incomplete: true, feedback: '세 단추 가운데 하나를 골라요.', hint: '두 각이 벌어진 정도를 견주어 보세요.' };
            if (choice === t.bigger) return yes('맞아요! 각의 크기는 변의 길이가 아니라 두 변이 벌어진 정도로 정해져요.');
            const longer = (o.pair || [{ arm: 1 }, { arm: 0.45 }])[0].arm >= (o.pair || [{ arm: 1 }, { arm: 0.45 }])[1].arm ? '가' : '나';
            if (choice === longer && t.bigger !== longer) return no(`변이 길다고 각이 큰 것은 아니에요.${looked ? '' : ' "겹쳐 보기"를 눌러 두 각을 겹쳐 보세요.'}`, '변의 길이는 생각하지 말고, 두 변이 얼마나 벌어졌는지만 견주어요. 겹쳐 보기로 가의 각을 나 위에 겹쳐 보세요.');
            return no('다시 견주어 볼까요?', '두 변이 벌어진 정도를 견주어요. 변의 길이는 각의 크기와 관계없어요.');
          }
          if (!part) return { correct: false, incomplete: true, feedback: '꼭짓점이나 변을 눌러 골라요.', hint: '각은 한 점에서 그은 두 반직선으로 이루어져요.' };
          if (part === t.part) return yes(t.part === 'vertex' ? '맞아요! 두 변이 만나는 점이 꼭짓점이에요.' : '맞아요! 꼭짓점에서 뻗어 나간 띠가 각의 변이에요.');
          return no(part === 'vertex' ? '그 점은 꼭짓점이에요.' : '그것은 각의 변이에요.', t.part === 'vertex' ? '두 띠가 만나는 할핀 자리를 찾아요.' : '꼭짓점에서 뻗어 나간 띠를 찾아요.');
        },
        // 새 힌트 계약: 1단계는 늘 열리고 답(각의 이름·고를 기호)을 말하지 않는다. 지금 상태가 맞아도 '맞아요'라고 알려 주지 않는다.
        hint(t, opts) {
          t = t || {}; const lv = hintLevel(opts);
          hinting = true;
          try {
            const r = this.check(t);
            const concept = mode === 'parts' ? '각은 한 점에서 그은 두 반직선으로 이루어져요. 두 띠가 만나는 점과, 그 점에서 뻗어 나간 띠를 살펴봐요.'
              : mode === 'compare' ? '변의 길이는 생각하지 말고 두 변이 벌어진 정도만 견주어요. "겹쳐 보기"로 한 각을 다른 각 위에 겹쳐 볼 수 있어요.'
                : mode === 'judge' ? '"삼각자 대 보기"를 눌러, 꼭짓점과 초록 띠에 맞춘 삼각자의 다른 변과 복숭아색 띠를 견주어요.'
                  : t.right ? '삼각자를 대 보고, 삼각자의 두 변에 두 띠가 꼭 맞게 돌려요.' : '삼각자를 대 보고, 복숭아색 띠가 삼각자의 변보다 안쪽에 있는지 바깥쪽에 있는지 견주어요.';
            if (lv === 1 || r.correct) return { hint: concept, level: 1 };
            if (lv === 2) return { hint: r.feedback || concept, level: 2 };
            return { hint: r.hint || r.feedback || '', level: 3 };
          } finally { hinting = false; }
        },
        async demo(t) {
          if (mode !== 'make' || print) return;
          const from = angle; const to = t && t.right ? 90 : t && t.kind === 'more' ? 135 : 45;
          await kit.tween(1100, (p) => { const a = from + (to - from) * p; rot.set(90 - a); });
          setState({ angle: to }); sqShown = true; paintSq(); celebrate();
        },
      };
    },
  });
})(window.PaperKit);
