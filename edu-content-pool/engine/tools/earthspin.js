/* 지구의 자전 낮과 밤 — 북극 위에서 내려다본 종이 지구를 서쪽→동쪽(시계 반대 방향)으로 돌린다.
 * 태양은 왼쪽에 가만히 있고, 태양 빛을 받는 반쪽은 낮, 반대쪽은 밤이다. 우리나라 표시가 어느 쪽에 있는지로 때를 읽는다.
 * 옵션: start({hour}), step(회전 스냅 각도, 15°=1시간), readout('full'|'phase'|'none'), showSides(낮·밤 글자), showArrow(자전 방향 화살표, 기본 참),
 *       oneWay(반대로 돌리면 되돌아감, 기본 참), showStart(처음 자리 표시), print,
 *       revealAfterCheck(우리나라의 때 글자는 '확인'을 눌러야 보이고, 다시 돌리면 숨는다 — 플레이어의 reveal:'after-check'),
 *       showLocal(우리나라 사람 옆에 동·서 방향 표시 — 지구가 돌면 함께 돈다),
 *       ask({q, choices, why?[]}) — 지구 아래에 고르는 단추를 둔다. check({…, ask: 정답 번호}). why[고른 번호]는 그 보기의 오개념을 짚는 말
 * 상태: { hour, time:'낮'|'밤'|'경계', phase:'아침'|'낮'|'저녁'|'밤', elapsed(돌린 시간) }
 *   time은 phase와 같은 구간을 쓴다: 낮 08~16시, 밤 20~04시, 그 사이(아침·저녁)는 낮과 밤의 경계라 '경계'.
 * check({time}) | check({phase:'해 뜰 무렵'|'해 질 무렵'|'한낮'|'한밤중'|…}) | check({hour}) | check({elapsed}) | check({…, ask})
 *   ask를 쓰면 상태에 pick(고른 번호)이 들어가고, 고르기 전에는 incomplete로 돌려준다.
 */
(function (K) {
  const W = 480; const E = { x: 300, y: 172 }; const R = 104;
  const RM = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PHASE = { '아침': '아침', '해 뜰 무렵': '아침', '낮': '낮', '한낮': '낮', '정오': '낮', '저녁': '저녁', '해 질 무렵': '저녁', '밤': '밤', '한밤중': '밤' };
  const PHASE_HOUR = { '아침': 6, '낮': 12, '저녁': 18, '밤': 0 };
  const PHASE_TEXT = { '아침': '아침(해 뜰 무렵)', '낮': '낮', '저녁': '저녁(해 질 무렵)', '밤': '밤' };
  const phaseOf = (h) => (h >= 4.5 && h < 7.5 ? '아침' : h >= 7.5 && h < 16.5 ? '낮' : h >= 16.5 && h < 19.5 ? '저녁' : '밤');
  // 해 뜰·질 무렵(경계)은 낮도 밤도 아니다 — '밤이 되게'에 저녁을 정답으로 받지 않는다
  const timeOf = (h) => { const p = phaseOf(h); return p === '낮' ? '낮' : p === '밤' ? '밤' : '경계'; };
  const clockText = (h) => (h === 0 ? '밤 12시' : h < 12 ? `오전 ${h}시` : h === 12 ? '낮 12시' : `오후 ${h - 12}시`);
  // 회전값(kit.rotate: 12시 방향 0°, 시계 방향 +)과 우리나라 시각: 태양 쪽(9시 방향, 270°)이 정오
  const valueOfHour = (h) => 270 - (h - 12) * 15;
  const hourOf = (v) => { const h = (12 + (270 - K.norm(v)) / 15) % 24; return ((Math.round(h) % 24) + 24) % 24; };

  // 힌트 단계(플레이어가 { level, attempts }를 준다): 1 개념·전략만(문항의 수·자리·이름 없음), 2 틀린 단계 짚기, 3 풀이 한 단계.
  // 시도 수보다 높은 단계는 주지 않는다 — 시도 0 → 1단계, 1 → 2단계까지, 2 이상 → 3단계까지
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  K.registerTool('earthspin', {
    name: '지구의 자전 낮과 밤',
    create(box, o, kit) {
      const H = o.print ? 334 : 360; // 활동지는 아래 안내 띠가 없어 낮게
      const st = kit.stage(box, { viewBox: [W, H], label: '북극 위에서 내려다본 지구. 지구를 돌려 우리나라가 낮인지 밤인지 알아보세요.', background: '#EDE7F4' });
      const step = o.step || 15;
      const readout = o.print ? 'none' : (o.readout || 'phase');
      const back = st.layer('back');

      // 우주 바탕과 별 조각
      kit.piece(st, back, { shape: { type: 'rect', x: 6, y: 6, w: W - 12, h: H - 12, rx: 14 }, color: 'lavender', depth: 1, texture: true });
      [[150, 40], [420, 34], [460, 120], [170, 316], [458, 250], [120, 90], [370, 318]].forEach(([x, y], i) => {
        kit.transform(kit.motifs.star(st, back, { x, y, color: i % 2 ? 'cream' : 'buttercup' }), { s: 0.55 });
      });

      // 태양(왼쪽, 움직이지 않음)과 빛줄기
      const sunG = kit.motifs.sun(st, back, { x: 46, y: E.y, s: 1.35 });
      sunG.setAttribute('aria-label', '태양');
      [-78, -40, 0, 40, 78].forEach((dy) => {
        kit.piece(st, back, { shape: { type: 'poly', points: `112,${E.y + dy - 3} 178,${E.y + dy * 1.05 - 2} 178,${E.y + dy * 1.05 + 2} 112,${E.y + dy + 3}` }, color: 'buttercup', depth: 0, flat: true });
      });
      kit.el('text', { x: 46, y: E.y + 82, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#6E530F' }, back).textContent = '태양';

      // 지구 받침(정적)
      kit.piece(st, back, { shape: { type: 'circle', r: R + 9, cx: E.x, cy: E.y }, color: 'sky', fill: '#DCEFF5', depth: 3 });

      // 도는 지구: 바다·땅·북극·우리나라 사람
      const earth = kit.el('g', { class: 'es-earth' }, st.layer('earth'));
      kit.el('circle', { cx: E.x, cy: E.y, r: R + 14, class: 'pk-hit' }, earth);
      kit.piece(st, earth, { shape: { type: 'circle', r: R, cx: E.x, cy: E.y }, color: 'sky', depth: 2 });
      const blob = (ang, dist, d, color) => {
        const g = kit.el('g', null, earth);
        kit.piece(st, g, { shape: { type: 'path', d }, color, depth: 1 });
        const a = (ang * Math.PI) / 180;
        kit.transform(g, { x: E.x + Math.sin(a) * dist, y: E.y - Math.cos(a) * dist, r: ang, cx: 0, cy: 0 });
      };
      blob(0, 72, 'M-26 -6 C -20 -26 8 -30 24 -14 C 34 -2 18 16 2 12 C -10 22 -32 10 -26 -6 Z', 'mint');
      blob(100, 66, 'M-22 -10 C -6 -30 26 -18 22 4 C 18 22 -8 26 -18 12 C -28 4 -30 -2 -22 -10 Z', 'mint');
      blob(190, 70, 'M-30 -4 C -24 -22 0 -18 10 -24 C 28 -24 34 0 18 10 C 4 20 -26 18 -30 -4 Z', 'buttercup');
      blob(275, 62, 'M-16 -14 C 0 -26 22 -10 16 8 C 10 22 -14 20 -20 6 C -24 -2 -22 -8 -16 -14 Z', 'mint');
      kit.piece(st, earth, { shape: { type: 'circle', r: 15, cx: E.x, cy: E.y }, color: 'cream', depth: 1 });
      // 우리나라 사람: 지구 겉(12시 방향)에 선 종이 사람과 깃발
      const person = kit.el('g', { 'aria-label': '우리나라' }, earth);
      kit.piece(st, person, { shape: { type: 'poly', points: '0,-14 12,-20 0,-26' }, color: 'rose', depth: 1 });
      kit.el('line', { x1: 0, y1: -2, x2: 0, y2: -26, stroke: '#3D352E', 'stroke-width': 2, 'pointer-events': 'none' }, person);
      kit.piece(st, person, { shape: { type: 'rect', x: -14, y: -14, w: 10, h: 14, rx: 4 }, color: 'peach', depth: 1 });
      kit.piece(st, person, { shape: { type: 'circle', r: 6, cx: -9, cy: -20 }, color: 'peach', depth: 1 });
      kit.transform(person, { x: E.x, y: E.y - R + 6, s: 1.35 });

      // 밤 그림자(정적, 지구 위에 덮인다): 태양 반대쪽 반원
      const night = kit.el('g', { 'pointer-events': 'none' }, st.layer('night'));
      kit.el('path', { d: `M${E.x} ${E.y - R - 1} A${R + 1} ${R + 1} 0 0 1 ${E.x} ${E.y + R + 1} Z`, fill: '#2A241F', opacity: 0.5, class: 'es-night' }, night);
      kit.el('path', { d: `M${E.x} ${E.y - R} A${R} ${R} 0 0 0 ${E.x} ${E.y + R}`, fill: 'none', stroke: '#FFF6C8', 'stroke-width': 4, opacity: 0.8 }, night);
      kit.el('text', { x: E.x, y: E.y + 5, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#3D352E' }, night).textContent = '북극';
      if (o.showSides && !o.print) {
        kit.el('text', { x: E.x - R / 2, y: E.y + R + 36, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#6E530F' }, night).textContent = '낮인 쪽';
        kit.el('text', { x: E.x + R / 2, y: E.y + R + 36, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#473B6B' }, night).textContent = '밤인 쪽';
      }

      // 자전 방향 화살표(시계 반대 방향, 서→동)
      const arrow = kit.el('g', { 'pointer-events': 'none' }, st.layer('night'));
      if (o.showArrow !== false) {
        const ar = R + 34; const a1 = (150 * Math.PI) / 180; const a2 = (30 * Math.PI) / 180;
        const p1 = [E.x + Math.sin(a1) * ar, E.y - Math.cos(a1) * ar]; const p2 = [E.x + Math.sin(a2) * ar, E.y - Math.cos(a2) * ar];
        kit.el('path', { d: `M${p1[0].toFixed(1)} ${p1[1].toFixed(1)} A${ar} ${ar} 0 0 0 ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`, fill: 'none', stroke: '#B8A6D9', 'stroke-width': 9, 'stroke-linecap': 'round', class: 'es-arrow' }, arrow);
        const head = kit.piece(st, arrow, { shape: { type: 'poly', points: '-9,6 9,6 0,-12' }, color: 'lavender', depth: 1 });
        kit.transform(head.g, { x: p2[0], y: p2[1], r: -60, cx: 0, cy: 0 });
        kit.el('text', { x: 436, y: 300, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#473B6B' }, arrow).textContent = '자전 방향';
        kit.el('text', { x: 436, y: 316, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#473B6B' }, arrow).textContent = '서→동';
      }

      // 우리나라 이름표(글자가 거꾸로 서지 않게 돌지 않는 층에서 사람을 따라간다)
      const tag = kit.el('g', { 'pointer-events': 'none' }, st.layer('tag'));
      kit.piece(st, tag, { shape: { type: 'rect', x: -32, y: -12, w: 64, h: 24, rx: 12 }, color: 'cream', depth: 1 });
      kit.el('text', { x: 0, y: 5, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#702830' }, tag).textContent = '우리나라';
      const say = kit.el('g', { 'pointer-events': 'none' }, st.layer('tag'));
      const sayBg = kit.piece(st, say, { shape: { type: 'rect', x: -150, y: -17, w: 300, h: 34, rx: 17 }, color: 'buttercup', depth: 1 });
      const sayTxt = kit.el('text', { x: 0, y: 6, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: '#3D352E' }, say);
      kit.transform(say, { x: 240, y: H - 26 });
      // 확인을 눌러야 때 글자가 보이는 모드: 돌리면 다시 숨긴다(돌려 맞히기 대신 먼저 판단하게)
      const hideUntilCheck = !!o.revealAfterCheck && !o.print && readout !== 'none';
      let shown = !hideUntilCheck;
      const sayVisible = () => readout !== 'none' && shown;
      if (!sayVisible()) say.setAttribute('display', 'none');

      // 동·서 표시: 우리나라 사람의 자리에서 지구 둘레를 따라 동쪽(자전하는 쪽)과 서쪽을 가리킨다.
      // 북극 위에서 보면 지구는 시계 반대 방향으로 돌므로, 화면 각 φ 자리의 동쪽은 (-cos φ, -sin φ).
      const local = kit.el('g', { 'pointer-events': 'none', display: 'none' }, st.layer('tag'));
      // 사람 몸을 가리지 않게 가운데를 비운 짧은 선 두 개
      const localLines = [0, 1].map(() => kit.el('line', { stroke: '#702830', 'stroke-width': 2.6, 'stroke-linecap': 'round' }, local));
      const localE = kit.el('text', { 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#702830' }, local);
      const localW = kit.el('text', { 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#473B6B' }, local);
      localE.textContent = '동'; localW.textContent = '서';
      const showLocal = !!o.showLocal;
      if (showLocal) local.setAttribute('display', 'inline');
      function paintLocal(v) {
        if (!showLocal) return;
        const phi = (K.norm(v) * Math.PI) / 180; const lr = R + 24;
        const c = { x: E.x + Math.sin(phi) * lr, y: E.y - Math.cos(phi) * lr };
        const east = { x: -Math.cos(phi), y: -Math.sin(phi) }; const L = 26; const gap = 13;
        localLines.forEach((ln, k) => {
          const sg = k ? -1 : 1;
          ln.setAttribute('x1', (c.x + east.x * gap * sg).toFixed(1)); ln.setAttribute('y1', (c.y + east.y * gap * sg).toFixed(1));
          ln.setAttribute('x2', (c.x + east.x * L * sg).toFixed(1)); ln.setAttribute('y2', (c.y + east.y * L * sg).toFixed(1));
        });
        const tx = (k) => ({ x: c.x + east.x * (L + 12) * k, y: c.y + east.y * (L + 12) * k + 5 });
        const pe = tx(1); const pw = tx(-1);
        localE.setAttribute('x', pe.x.toFixed(1)); localE.setAttribute('y', pe.y.toFixed(1));
        localW.setAttribute('x', pw.x.toFixed(1)); localW.setAttribute('y', pw.y.toFixed(1));
      }

      // 고르는 칸(HTML 단추: 키보드·터치 그대로)
      const askO = (o.ask && Array.isArray(o.ask.choices) && !o.print) ? o.ask : null;
      let pick = null; let pickBtns = [];
      // 고른 단추는 색으로도 보이게(플레이어 CSS에 aria-pressed 모양이 없다)
      const markPick = () => pickBtns.forEach((b, i) => { const on = i === pick; b.setAttribute('aria-pressed', String(on)); b.style.background = on ? '#FEE396' : ''; b.style.boxShadow = on ? 'inset 0 0 0 2px #6E530F' : ''; });
      if (askO) {
        const wrap = document.createElement('div'); wrap.className = 'es-ask'; wrap.setAttribute('role', 'group');
        wrap.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;align-items:center';
        const q = document.createElement('p'); q.style.cssText = 'flex-basis:100%;margin:0;font-weight:700;color:#473B6B';
        q.textContent = askO.q || ''; q.id = `es-ask-${Math.random().toString(36).slice(2, 8)}`; wrap.setAttribute('aria-labelledby', q.id);
        wrap.appendChild(q);
        pickBtns = askO.choices.map((label, i) => {
          const b = document.createElement('button'); b.type = 'button'; b.className = 'pl-btn pl-btn--small'; b.textContent = label;
          b.style.minHeight = '44px'; b.setAttribute('aria-pressed', 'false');
          b.addEventListener('click', () => { pick = i; markPick(); kit.tick(); kit.recorder.log('earthspin', state()); kit.announce(label); });
          wrap.appendChild(b); return b;
        });
        box.appendChild(wrap);
      }

      const startHour = (o.start && o.start.hour != null) ? o.start.hour : 12;
      // 처음 자리 표시: 지구 둘레 바깥에 점선 고리 — 우리나라가 여기로 돌아오면 한 바퀴(하루)
      const startMark = kit.el('g', { 'pointer-events': 'none', display: 'none' }, st.layer('tag'));
      kit.el('circle', { r: 11, fill: 'none', stroke: '#702830', 'stroke-width': 2.4, 'stroke-dasharray': '4 3' }, startMark);
      const startTxt = kit.el('text', { y: -16, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#702830' }, startMark);
      startTxt.textContent = '처음 자리';
      const markStart = (h) => {
        if (!o.showStart || o.print) return;
        const phi = (K.norm(valueOfHour(h)) * Math.PI) / 180; const mr = R + 20;
        kit.transform(startMark, { x: E.x + Math.sin(phi) * mr, y: E.y - Math.cos(phi) * mr });
        startMark.setAttribute('display', 'inline');
      };
      let committed = valueOfHour(startHour); let elapsed = 0; let lastPhase = null; let warn = false; let warnedAt = -1e9;
      const rot = kit.rotate(st, earth, {
        center: [E.x, E.y], step, value: committed, label: '지구',
        // 화면 읽기도 화면과 같은 정보만 준다(기본 단계는 때만, 시각은 쉬움에서만)
        valueText: (v) => (sayVisible() ? `우리나라 ${PHASE_TEXT[phaseOf(hourOf(v))]}${readout === 'full' ? `, ${clockText(hourOf(v))}` : ''}` : '지구'),
        onChange(v) { paint(v); },
        onStart() { kit.tick(); },
        onEnd(v) { commit(v); },
      });
      function commit(v) {
        if (o.oneWay !== false && v > committed + 0.5) {
          // 지구는 서쪽에서 동쪽으로만 돈다: 반대로 돌리면 되돌아가며 알려 준다
          const now = Date.now();
          if (now - warnedAt > 2000) kit.announce('지구는 서쪽에서 동쪽으로, 시계 반대 방향으로 돌아요.');
          warnedAt = now;
          warn = true; say.setAttribute('display', 'inline');
          sayTxt.textContent = '반대 방향이에요! 서→동으로 돌려요';
          sayBg.setColor('rose');
          if (!o.print) wobble(arrow);
          rot.set(committed, true);
          setTimeout(() => { warn = false; sayBg.setColor('buttercup'); if (!sayVisible()) say.setAttribute('display', 'none'); paint(rot.get()); }, 1600);
          return;
        }
        const moved = Math.round((committed - v) / 15);
        elapsed += moved; committed = v;
        if (hideUntilCheck && moved) { shown = false; say.setAttribute('display', 'none'); }
        paint(v); hop();
        kit.recorder.log('earthspin', state());
        if (sayVisible()) kit.announce(`우리나라는 지금 ${PHASE_TEXT[phaseOf(hourOf(v))]}이에요.`);
      }
      // 키보드: → ↑ 는 시간이 앞으로 가는 쪽(서→동, 시계 반대 방향), ← ↓ 는 거꾸로. PageUp은 5시간 앞으로.
      // kit.rotate의 기본 매핑(→=시계 방향)이 지구에서는 '반대 방향' 경고만 부르므로 먼저 가로챈다.
      earth.addEventListener('keydown', (e) => {
        const k = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 5, PageDown: -5 }[e.key];
        if (!k) return;
        e.preventDefault(); e.stopImmediatePropagation();
        const target = Math.round(rot.get() / step) * step - k * step;
        rot.set(target); commit(target);
      }, true);
      const keyHelp = kit.el('text', { x: 240, y: 22, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#473B6B', display: 'none', 'pointer-events': 'none' }, st.layer('tag'));
      keyHelp.textContent = `→ 키: ${step / 15}시간 앞으로 · PageUp: ${(step / 15) * 5}시간 앞으로`;
      if (!o.print) {
        earth.addEventListener('focus', () => keyHelp.setAttribute('display', 'inline'));
        earth.addEventListener('blur', () => keyHelp.setAttribute('display', 'none'));
      }

      function paint(v) {
        const phi = (K.norm(v) * Math.PI) / 180; const tr = R - 36;
        kit.transform(tag, { x: E.x + Math.sin(phi) * tr, y: E.y - Math.cos(phi) * tr });
        paintLocal(v);
        const h = hourOf(v); const ph = phaseOf(h);
        if (readout !== 'none' && !warn) sayTxt.textContent = `우리나라: ${PHASE_TEXT[ph]}${readout === 'full' ? ` · ${clockText(h)}` : ''}`;
        if (ph !== lastPhase && lastPhase && !o.print && !RM) kit.spring(1.12, 1, { stiffness: 260, damping: 12, onUpdate: (s) => kit.transform(say, { s }) });
        lastPhase = ph;
      }
      function hop() {
        if (o.print || RM) return;
        kit.spring(-10, 0, { stiffness: 260, damping: 9, onUpdate: (dy) => kit.transform(person, { y: E.y - R + 6 + dy }) });
      }
      function wobble(g) {
        kit.spring(14, 0, { stiffness: 300, damping: 6, onUpdate: (r) => kit.transform(g, { r, cx: E.x, cy: E.y }) });
      }
      const state = () => { const h = hourOf(committed); const s = { hour: h, time: timeOf(h), phase: phaseOf(h), elapsed }; if (askO) s.pick = pick; return s; };
      const setHour = (h, el) => {
        committed = valueOfHour(h); elapsed = el || 0;
        if (hideUntilCheck) { shown = false; say.setAttribute('display', 'none'); }
        rot.set(committed); paint(committed); if (!el) markStart(h);
      };
      setHour(startHour, 0);

      const want = (t) => {
        if (t.hour != null) return t.hour;
        if (t.phase) return PHASE_HOUR[PHASE[t.phase]];
        if (t.time) return t.time === '낮' ? 12 : 0;
        return null;
      };
      const ok = (s, t) => (t.hour == null || s.hour === t.hour) && (!t.phase || s.phase === PHASE[t.phase]) && (!t.time || s.time === t.time) && (t.elapsed == null || s.elapsed === t.elapsed);
      // 지금부터 시계 반대 방향으로 몇 시간 돌리면 되는지(앞으로만)
      const forward = (t) => {
        const s = state();
        if (t.elapsed != null) return Math.max(0, t.elapsed - s.elapsed);
        const h = want(t); if (h == null) return 0;
        return ((h - s.hour) % 24 + 24) % 24;
      };

      // 채점만 한다(화면은 바꾸지 않는다) — 확인·힌트·오답 만들기가 함께 쓴다
      function judge(t) {
        const s = state();
        // 때 글자를 숨기는 동안에는 틀린 확인의 말에도 지금의 때를 넣지 않는다
        const now = hideUntilCheck && !shown ? '' : `지금 우리나라는 ${PHASE_TEXT[s.phase]}이에요. `;
        if (t.ask != null && ok(s, t)) {
          const where = PHASE_TEXT[s.phase];
          const look = showLocal ? '우리나라 사람 옆의 동·서 표시 가운데 태양을 보고 있는 쪽을 찾아봐요.' : '지구가 서쪽에서 동쪽으로 돈다는 것을 떠올려 봐요.';
          if (pick == null) return { correct: false, incomplete: true, feedback: '아래에서 하나를 골라요.', hint: look };
          // 숨김 문항에서는 틀린 말에도 지금의 때를 넣지 않는다(고른 보기의 오개념만 짚는다)
          if (pick !== t.ask) return { correct: false, feedback: (askO.why && askO.why[pick]) || `고른 답을 다시 생각해 볼까요? ${look}`, hint: look, h3: `정답은 "${askO.choices[t.ask]}"예요. ${look}` };
          return { correct: true, feedback: `맞아요! 우리나라가 ${where}일 때 ${askO.ok || `답은 ${askO.choices[t.ask]}예요.`}` };
        }
        if (ok(s, t)) {
          if (t.elapsed != null) return { correct: true, feedback: `맞아요! 지구가 ${t.elapsed === 24 ? '한 바퀴(하루)' : `${t.elapsed}시간 동안`} 돌아 우리나라는 ${PHASE_TEXT[s.phase]}이에요.` };
          const side = s.time === '낮' ? '태양 빛을 받는 쪽에 있어'
            : s.time === '밤' ? '태양 빛을 받지 못하는 쪽에 있어'
              : s.phase === '아침' ? '밤인 쪽에서 낮인 쪽으로 막 들어가는 자리(낮과 밤이 바뀌는 경계)에 있어' : '낮인 쪽에서 밤인 쪽으로 막 들어가는 자리(낮과 밤이 바뀌는 경계)에 있어';
          return { correct: true, feedback: `맞아요! 우리나라가 ${side} ${PHASE_TEXT[s.phase]}이에요.` };
        }
        if (t.elapsed != null && !(t.hour != null && s.hour === t.hour && s.elapsed !== t.elapsed)) {
          // 몇 시간 더(덜) 돌릴지는 말하지 않는다 — 한 칸씩 돌리며 확인으로 맞추지 않게
          const h3 = `${t.elapsed}시간 = ${t.elapsed}칸(${t.elapsed * 15}°)이에요. 처음으로 돌아가 ${t.elapsed}칸을 세며 돌려요.`;
          if (t.elapsed !== 24 && s.elapsed % 24 === t.elapsed % 24 && s.elapsed !== t.elapsed) return { correct: false, feedback: '시각은 같지만 돌린 시간이 문제와 달라요. 한 바퀴(24시간)를 더 돌렸거나 덜 돌렸어요.', hint: '지구는 하루(24시간)에 한 바퀴 돌아요.', h3 };
          return { correct: false, feedback: '돌린 시간이 문제의 시간과 달라요. 처음으로 돌아가 한 칸이 몇 시간인지 생각하며 세어 보세요.', hint: '한 칸(15°)이 1시간이에요. 지구는 하루(24시간)에 한 바퀴(360°) 돌아요.', h3 };
        }
        if (t.elapsed != null) {
          const h3 = `${t.elapsed}시간 = ${t.elapsed}칸이에요.`;
          return { correct: false, feedback: '시각은 맞지만 날짜가 달라요. 지구를 하루(한 바퀴) 더 돌렸거나 덜 돌렸어요.', hint: '다음 날 시각이면 밤 12시를 지나요. 몇 시간 뒤인지 먼저 세어 봐요.', h3 };
        }
        const goal = PHASE[t.phase] || t.time;
        const hint = goal === '아침' ? '밤인 쪽에서 낮인 쪽으로 막 들어가는 자리가 해 뜰 무렵이에요.'
          : goal === '저녁' ? '낮인 쪽에서 밤인 쪽으로 막 들어가는 자리가 해 질 무렵이에요.'
            : goal === '밤' ? '태양 반대쪽(그림자 쪽)에 우리나라가 오게 돌려 보세요.' : '태양을 마주 보는 쪽에 우리나라가 오게 돌려 보세요.';
        const h3 = t.hour != null || goal ? `지금에서 ${forward(t)}시간(${forward(t)}칸) 더 돌리면 돼요.` : hint;
        // 방향·남은 시간은 말하지 않는다. 오개념(경계를 낮·밤으로, 해 뜰·질 무렵을 바꿔 앎)만 짚는다
        if (s.time === '경계' && (goal === '밤' || goal === '낮')) {
          return { correct: false, feedback: `${now}낮과 밤이 바뀌는 자리(경계)는 아직 ${goal}이 아니에요.`, hint, h3 };
        }
        if ((goal === '아침' && s.phase === '저녁') || (goal === '저녁' && s.phase === '아침')) return { correct: false, feedback: `${now}해 뜰 무렵과 해 질 무렵을 바꿔 생각했을 수 있어요. 지구는 서쪽에서 동쪽으로 돌아요. 밤 쪽에서 빛을 받는 쪽으로 들어가는 자리가 해 뜰 무렵이에요.`, hint, h3 };
        if (t.hour != null) return { correct: false, feedback: `${now}시각이 달라요. 처음 시각에서 몇 시간 뒤인지 먼저 세어 보세요.`, hint, h3 };
        return { correct: false, feedback: `${now || '아직 아니에요. '}우리나라가 태양 빛을 받는 쪽인지, 받지 못하는 쪽인지, 그 경계인지 다시 살펴봐요.`, hint, h3 };
      }

      return {
        getState: state,
        setState(s) {
          if (hideUntilCheck) { shown = false; say.setAttribute('display', 'none'); }
          if (s && s.hour != null) setHour(s.hour, s.elapsed || 0);
          if (askO && s && 'pick' in s) { pick = s.pick; markPick(); }
        },
        reset() { pick = null; markPick(); setHour(startHour, 0); },
        solve(t) {
          const d = forward(t); const s = state(); if (d) setHour((s.hour + d) % 24, s.elapsed + d);
          if (askO && t && t.ask != null) { pick = t.ask; markPick(); }
        },
        check(t, opts) {
          const r = judge(t); delete r.h3;
          // 맞힌 확인에서만 때 글자를 보인다 — 틀린 확인마다 보이면 확인을 눌러 가며 때를 읽어 맞춘다
          if (r.correct && hideUntilCheck && !shown && !(opts && opts.forHint)) { shown = true; say.setAttribute('display', 'inline'); paint(committed); }
          return r;
        },
        // 힌트 3단계: 1 개념(시각·칸 수 없음) / 2 틀린 단계 짚기(때를 드러내지 않음) / 3 몇 칸 돌릴지
        hint(t, opts) {
          t = t || {};
          const hidden = hideUntilCheck && !shown;
          const r = judge(t);
          // 1단계는 목표(때 이름·시간 수)를 말하지 않는다 — 규칙과 볼 곳만
          const why = t.ask != null ? '태양은 그대로 있고 지구가 서쪽에서 동쪽으로 돌아요. 지구가 돌 때 우리나라 사람의 어느 쪽이 태양을 향하는지 살펴봐요.'
            : t.elapsed != null ? '한 칸(15°)이 1시간이에요. 몇 시간인지 먼저 세고, 그만큼 칸을 세며 돌려요.'
              : t.hour != null ? '지구는 1시간에 15°씩, 시계 반대 방향(서→동)으로 돌아요. 지금 시각에서 몇 시간 뒤인지 먼저 세어 봐요.'
                : '태양은 그대로 있고 지구가 서쪽에서 동쪽으로 돌아요. 우리나라가 태양 빛을 받는 쪽인지, 받지 못하는 쪽인지, 그 경계에서 어느 쪽으로 들어가는 중인지 살펴봐요.';
          const lv = hintLevel(opts);
          if (!hidden && r.correct) return { hint: why, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: why, correct: false, level: 1 };
          // 2단계 힌트는 목표(때·시간)에 맞춘 규칙이라 숨긴 때·맞음 여부를 드러내지 않는다
          if (lv === 2) return { hint: r.hint, correct: false, level: 2 };
          return { hint: r.h3 || r.hint, correct: false, level: 3 };
        },
        wrongAnswer(t) {
          t = t || {};
          const s = state(); const mod = (x) => ((x % 24) + 24) % 24;
          const origin = mod(s.hour - s.elapsed); // 이 문항을 시작한 시각
          const at = (h) => ({ hour: mod(h), elapsed: mod(h - origin) });
          if (t.ask != null && askO) {
            // 때는 맞게 돌렸지만 동·서를 거꾸로 고른다(태양이 지는 쪽을 동쪽으로 착각)
            const h = want(t); const base = h == null ? s : at(h);
            return Object.assign({}, base, { pick: askO.choices.findIndex((_, i) => i !== t.ask) });
          }
          if (t.elapsed != null) {
            // 12시간 어긋나게: 하루를 반 바퀴로, 반나절을 하루로 생각한다
            const e = t.elapsed >= 12 ? t.elapsed - 12 : t.elapsed + 12;
            return { hour: mod(origin + e), elapsed: e };
          }
          const h = want(t); if (h == null) return null;
          const bad = (c) => !ok({ hour: mod(c), phase: phaseOf(mod(c)), time: timeOf(mod(c)), elapsed: mod(c - origin) }, t) && mod(c) !== origin;
          const goal = PHASE[t.phase] || t.time;
          // 반대로(동→서) 같은 만큼 돌림 → 12시간 어긋남 → 해 뜰·질 무렵을 낮·밤으로 착각(경계에서 멈춤)
          const cands = [2 * origin - h, h + 12, goal === '밤' ? 18 : goal === '낮' ? 6 : h + 6];
          const c = cands.find(bad);
          return c == null ? null : at(c);
        },
        async demo(t) {
          const d = forward(t); const from = committed; const to = committed - d * 15; const e0 = elapsed;
          await kit.tween(Math.max(600, d * 160), (p) => { const v = from + (to - from) * p; rot.set(v); paint(v); });
          committed = to; elapsed = e0 + d; paint(to); hop();
          kit.announce(`우리나라는 지금 ${PHASE_TEXT[phaseOf(hourOf(to))]}이에요.`);
        },
      };
    },
  });
})(window.PaperKit);
