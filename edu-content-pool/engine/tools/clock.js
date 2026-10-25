/* 종이 아날로그 시계 — 시침·분침을 끌어 돌린다.
 * 분침 값은 누적 각도(바퀴 수 포함)라서 12를 지나면 시침이 따라 한 칸 넘어간다.
 * 옵션: independent(쉬움: 시침이 분침을 끌고 가지 않음), minuteStep(분 스냅, 기본 1), hourOnly(정각만: 분침 고정 0분), showDigital(디지털 시각 — 켤 때만 보임; 기본 단계에서 켜면 바늘을 안 읽고 글자만 맞춘다), showMinuteMarks, showMinuteNumbers, hideHands(인쇄용 빈 시계판)
 * 상태: { h: 1~12, m: 0~59 } / check({h,m})
 */
(function (K) {
  // 숫자 읽기(일·이·삼…)의 받침에 맞는 조사: 3을, 4를, 7과, 2와
  const BATCHIM = { 1: 1, 3: 1, 6: 1, 7: 1, 8: 1, 10: 1, 11: 1 };
  const josa = (n, a, b) => (BATCHIM[n] ? a : b);
  K.registerTool('clock', {
    name: '종이 아날로그 시계',
    create(box, o, kit) {
      const st = kit.stage(box, { viewBox: [320, 360], label: '종이 아날로그 시계. 시침과 분침을 돌려 시각을 만드세요.' });
      const L = st.layer('clock');
      const cx = 160; const cy = 165;
      // 레이어드 시계판: 바깥 테두리(복숭아) → 판(크림) → 안쪽 원(하늘)
      kit.piece(st, L, { shape: { type: 'circle', r: 142, cx, cy }, color: 'peach', depth: 3, texture: true });
      kit.piece(st, L, { shape: { type: 'circle', r: 126, cx, cy }, color: 'cream', depth: 2 });
      kit.piece(st, L, { shape: { type: 'circle', r: 92, cx, cy }, color: o.faceColor || 'sky', depth: 1, fill: kit.palette.sky.light });
      for (let i = 0; i < 60; i++) {
        const a = (i * 6 * Math.PI) / 180; const big = i % 5 === 0;
        if (!big && o.showMinuteMarks === false) continue;
        const r1 = big ? 108 : 114; const r2 = 120;
        kit.el('line', { x1: cx + Math.sin(a) * r1, y1: cy - Math.cos(a) * r1, x2: cx + Math.sin(a) * r2, y2: cy - Math.cos(a) * r2, stroke: '#544B42', 'stroke-width': big ? 3 : 1.2, 'stroke-linecap': 'round', class: 'pk-text' }, L);
      }
      const numColors = ['rose', 'buttercup', 'mint', 'lavender'];
      for (let n = 1; n <= 12; n++) {
        const a = (n * 30 * Math.PI) / 180;
        const x = cx + Math.sin(a) * 92; const y = cy - Math.cos(a) * 92;
        kit.piece(st, L, { shape: { type: 'circle', r: 15, cx: x, cy: y }, color: numColors[n % 4], depth: 1 });
        kit.el('text', { x, y: y + 6, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: '#3D352E' }, L).textContent = n;
        if (o.showMinuteNumbers) {
          kit.el('text', { x: cx + Math.sin(a) * 136, y: cy - Math.cos(a) * 136 + 4, 'text-anchor': 'middle', 'font-size': 10, class: 'pk-text', fill: '#6E3B21' }, L).textContent = (n * 5) % 60;
        }
      }
      // 바늘: 손잡이를 크게(터치 44px 이상) — 투명 판정 영역을 바늘보다 넓게 깐다
      const hand = (len, w, color, label) => {
        const g = kit.el('g', { class: 'pk-hand', 'aria-label': label }, st.layer('hands'));
        kit.el('rect', { x: cx - 22, y: cy - len - 10, width: 44, height: len + 20, class: 'pk-hit' }, g);
        kit.piece(st, g, { shape: { type: 'path', d: `M${cx - w / 2} ${cy + 12} L${cx - w / 2.6} ${cy - len + 10} Q${cx} ${cy - len - 6} ${cx + w / 2.6} ${cy - len + 10} L${cx + w / 2} ${cy + 12} Z` }, color, depth: 2 });
        return g;
      };
      if (o.hideHands) st.layer('hands').setAttribute('display', 'none'); // 활동지: 학생이 바늘을 직접 그린다
      // 분침을 먼저, 시침을 위에 둔다: 두 바늘이 겹친 12시에도 짧은 시침을 잡을 수 있고, 시침보다 바깥을 잡으면 분침이 잡힌다
      const minG = hand(92, 11, 'mint', '분침');
      const hourG = hand(58, 16, 'lavender', '시침');
      kit.piece(st, st.layer('hands'), { shape: { type: 'circle', r: 9, cx, cy }, color: 'rose', depth: 1 });
      const digital = kit.el('text', { x: cx, y: 345, 'text-anchor': 'middle', 'font-size': 22, class: 'pk-text', fill: '#473B6B' }, st.layer('hands'));

      const step = o.hourOnly ? 60 : o.minuteStep || 1;
      let total = 0; // 0시 0분부터 흐른 분
      const fmt = () => { const s = state(); return `${s.h}시${s.m ? ` ${s.m}분` : ''}`; };
      const state = () => { const t = ((Math.round(total) % 720) + 720) % 720; const h = Math.floor(t / 60); return { h: h === 0 ? 12 : h, m: t % 60 }; };
      const paint = () => {
        minR.set(total * 6); hourR.set(total * 0.5);
        digital.textContent = (o.showDigital !== true || o.print) ? '' : fmt();
      };
      let lock = false;
      const minR = kit.rotate(st, minG, {
        center: [cx, cy], step: step * 6, value: 0, label: '분침',
        enabled: () => !o.hourOnly,
        valueText: () => fmt(),
        onChange(v) { if (lock) return; lock = true; total = v / 6; hourR.set(total * 0.5); digital.textContent = (o.showDigital !== true || o.print) ? '' : fmt(); lock = false; },
        onStart() { kit.tick(); }, onEnd() { kit.recorder.log('clock', state()); kit.announce(fmt()); },
      });
      const hourR = kit.rotate(st, hourG, {
        center: [cx, cy], step: o.hourOnly ? 30 : step * 0.5, value: 0, label: '시침',
        valueText: () => fmt(),
        onChange(v) {
          if (lock) return; lock = true;
          // independent(쉬움): 시침을 돌려도 맞춰 둔 분침은 그대로 — '긴바늘 먼저, 짧은바늘 나중' 순서로 풀 수 있게
          if (o.independent) { const m = ((Math.round(total) % 60) + 60) % 60; const h = Math.round((v - m * 0.5) / 30); total = h * 60 + m; minR.set(total * 6); digital.textContent = (o.showDigital !== true || o.print) ? '' : fmt(); lock = false; return; }
          total = v * 2; minR.set(total * 6); digital.textContent = (o.showDigital !== true || o.print) ? '' : fmt(); lock = false; },
        onStart() { kit.tick(); }, onEnd() { if (o.independent) { lock = true; hourR.set(total * 0.5); lock = false; } kit.recorder.log('clock', state()); kit.announce(fmt()); },
      });
      const setState = (s) => { total = ((s.h % 12) * 60) + (s.m || 0); lock = true; paint(); lock = false; };
      setState(o.start || { h: 12, m: 0 });
      return {
        getState: state,
        setState,
        reset() { setState(o.start || { h: 12, m: 0 }); },
        solve(t) { setState(t); },
        check(t) {
          const s = state(); const tm = t.m || 0;
          const ok = s.h === t.h && s.m === tm;
          if (ok) return { correct: true, feedback: `맞아요! ${fmt()}이에요.` };
          const next = (t.h % 12) + 1;
          // 시침은 정각이 아니면 두 숫자 '사이'에 있다(3시 15분의 시침은 3이 아니라 3과 4 사이)
          const hourHint = tm === 0 ? `짧은 바늘이 ${t.h}${josa(t.h, '을', '를')} 똑바로 가리키게 해요.`
            : `짧은 바늘은 ${t.h}${josa(t.h, '과', '와')} ${next} 사이에 있어요. 분이 지날수록 ${next} 쪽으로 조금씩 가요.`;
          const n = tm / 5;
          const minHint = tm % 5 === 0 ? `긴 바늘이 ${n || 12}${josa(n || 12, '을', '를')} 가리키면 ${tm}분이에요.`
            : `긴 바늘이 ${Math.floor(n) || 12}에서 작은 눈금 ${tm % 5}칸을 더 가면 ${tm}분이에요.`;
          if (s.m === tm) return { correct: false, feedback: '긴 바늘(분침)은 맞았어요. 짧은 바늘(시침)을 다시 보세요.', hint: hourHint };
          if (s.h === t.h) return { correct: false, feedback: '짧은 바늘(시침)은 맞았어요. 긴 바늘(분침)을 다시 보세요.', hint: minHint };
          return { correct: false, feedback: '다시 해 볼까요? 긴 바늘부터 맞춰요.', hint: `${minHint} ${hourHint}` };
        },
        // 교사 시연용: 목표 시각까지 바늘이 스스로 돌아간다
        async demo(t) { const from = total; const to = (t.h % 12) * 60 + (t.m || 0); await kit.tween(1400, (p) => { total = from + (to - from) * p; lock = true; paint(); lock = false; }); },
      };
    },
  });
})(window.PaperKit);
