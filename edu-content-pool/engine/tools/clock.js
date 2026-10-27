/* 종이 아날로그 시계 — 짧은바늘·긴바늘을 끌어 돌린다(나타내기). readOnly이면 바늘이 잠기고 보기 중에서 시각을 고른다(읽기).
 * 긴바늘 값은 누적 각도(바퀴 수 포함)라서 12를 지나면 짧은바늘이 따라 한 칸 넘어간다.
 * 옵션: independent(쉬움: 짧은바늘이 긴바늘을 따라가지 않음), minuteStep(분 스냅, 기본 1), hourOnly(정각만: 긴바늘 고정 0분),
 *       showDigital(디지털 시각 — 켤 때만 보임; 기본 단계에서 켜면 바늘을 안 읽고 글자만 맞춘다),
 *       revealAfterCheck(디지털 시각·시각 안내를 '확인'을 누른 뒤에만 보이고, 바늘을 다시 움직이면 감춘다),
 *       showMinuteMarks(작은 눈금: 기본 = 보통 굵기로 보임, true = 더 길고 진하게(1분 세기 쉬움 단계), false = 숨김(도전)),
 *       showMinuteNumbers(바깥 5·10·15…), hourZone(쉬움: 짧은바늘이 있어야 할 두 숫자 사이를 연하게 칠함),
 *       freeHour(짧은바늘을 분과 상관없이 아무 자리에나 놓을 수 있음 — 기본은 분에 맞춰 저절로 옮겨 감. 켜면 짧은바늘 자리도 판정한다:
 *         '9시 40분인데 짧은바늘이 9에 똑바로' 같은 오개념을 만들기 문항·읽기 보기 그림으로 낼 수 있다. 상태에 hourAt(짧은바늘이 가리키는 수 0~12)가 붙는다),
 *       readOnly + choices(['7시 50분', …]: 읽기 문항) + ask(보기 위 머리말, 기본 '몇 시 몇 분일까요?'), hideHands(인쇄용 빈 시계판), print
 * 상태: { h: 1~12, m: 0~59 } (readOnly이면 + pick: 고른 보기 번호|null, freeHour이면 + hourAt: 0~12 — setState에 hourAt이 없으면 분에 맞춘 자리)
 * check: 나타내기 {h, m} / 읽기 {pick, h?, m?} — 읽기 오답은 보기 글자를 시각으로 풀어 어떤 오개념인지 말해 준다.
 */
(function (K) {
  // 숫자 읽기(일·이·삼…)의 받침에 맞는 조사: 3을, 4를, 7과, 2와
  const BATCHIM = { 0: 1, 1: 1, 3: 1, 6: 1, 7: 1, 8: 1, 10: 1, 11: 1 };
  const josa = (n, a, b) => (BATCHIM[n] ? a : b);
  // 힌트 단계(새 계약): 1 = 방법만(시도 전에도, 시각·숫자를 말하지 않음), 2 = 틀린 바늘 짚기, 3 = 그 바늘 풀어 보이기
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    const cap = a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1;
    return Math.max(1, Math.min(3, want, cap));
  };
  // 두 바늘을 바꿔 놓았는가/읽었는가: 바늘 위치(숫자 단위, 0~12)로 견준다.
  // 7시 50분(짧은바늘 ≈ 7.8, 긴바늘 10)을 바꾸면 10시 40분 무렵(짧은바늘 ≈ 10.7, 긴바늘 8)이 된다 — 분이 정확히 맞지 않아도 잡는다
  const circ = (a, b) => { const d = Math.abs((((a - b) % 12) + 12) % 12); return Math.min(d, 12 - d); };
  const swapped = (s, t) => {
    const tm = t.m || 0; const tShort = (t.h % 12) + tm / 60; const tLong = tm / 5;
    if (circ(tShort, tLong) < 1.5) return false; // 두 바늘이 거의 겹친 시각은 바꿔도 구별되지 않는다
    const sShort = (s.h % 12) + (s.m || 0) / 60; const sLong = (s.m || 0) / 5;
    return circ(sShort, tLong) <= 0.8 && circ(sLong, tShort) <= 0.8;
  };
  const parse = (text) => { const m = /(\d+)\s*시(?:\s*(\d+)\s*분)?/.exec(String(text || '')); return m ? { h: Number(m[1]), m: Number(m[2] || 0) } : null; };
  K.registerTool('clock', {
    name: '종이 아날로그 시계',
    create(box, o, kit) {
      const readOnly = !!o.readOnly && !o.print;
      const st = kit.stage(box, { viewBox: [320, 360], label: readOnly ? '종이 아날로그 시계. 바늘을 보고 몇 시 몇 분인지 아래에서 고르세요.' : '종이 아날로그 시계. 짧은바늘과 긴바늘을 돌려 시각을 만드세요.' });
      const L = st.layer('clock');
      const cx = 160; const cy = 165;
      // 레이어드 시계판: 바깥 테두리(복숭아) → 판(크림) → 안쪽 원(하늘)
      kit.piece(st, L, { shape: { type: 'circle', r: 142, cx, cy }, color: 'peach', depth: 3, texture: true });
      kit.piece(st, L, { shape: { type: 'circle', r: 126, cx, cy }, color: 'cream', depth: 2 });
      kit.piece(st, L, { shape: { type: 'circle', r: 92, cx, cy }, color: o.faceColor || 'sky', depth: 1, fill: kit.palette.sky.light });
      const zoneL = st.layer('zone');
      for (let i = 0; i < 60; i++) {
        const a = (i * 6 * Math.PI) / 180; const big = i % 5 === 0;
        if (!big && o.showMinuteMarks === false) continue;
        const strong = o.showMinuteMarks === true; // 켜면 작은 눈금을 길고 진하게(1분 눈금 세기를 돕는 단계)
        const r1 = big ? 108 : strong ? 111 : 114; const r2 = 120;
        kit.el('line', { x1: cx + Math.sin(a) * r1, y1: cy - Math.cos(a) * r1, x2: cx + Math.sin(a) * r2, y2: cy - Math.cos(a) * r2, stroke: strong && !big ? '#3D352E' : '#544B42', 'stroke-width': big ? 3 : strong ? 2 : 1.2, 'stroke-linecap': 'round', class: 'pk-text' }, L);
      }
      if (o.showMinuteNumbers) {
        for (let n = 1; n <= 12; n++) {
          const a = (n * 30 * Math.PI) / 180;
          kit.el('text', { x: cx + Math.sin(a) * 136, y: cy - Math.cos(a) * 136 + 4, 'text-anchor': 'middle', 'font-size': 10, class: 'pk-text', fill: '#6E3B21' }, L).textContent = (n * 5) % 60;
        }
      }
      // 바늘: 판정 영역을 바늘보다 넓게(52 단위 — 휴대폰에서 0.85배로 줄어도 44px)
      const hand = (len, w, color, label) => {
        const g = kit.el('g', { class: 'pk-hand', 'aria-label': label }, st.layer('hands'));
        kit.el('rect', { x: cx - 26, y: cy - len - 10, width: 52, height: len + 20, class: 'pk-hit' }, g);
        kit.piece(st, g, { shape: { type: 'path', d: `M${cx - w / 2} ${cy + 12} L${cx - w / 2.6} ${cy - len + 10} Q${cx} ${cy - len - 6} ${cx + w / 2.6} ${cy - len + 10} L${cx + w / 2} ${cy + 12} Z` }, color, depth: 2 });
        return g;
      };
      if (o.hideHands) st.layer('hands').setAttribute('display', 'none'); // 활동지: 학생이 바늘을 직접 그린다
      // 긴바늘은 바깥 눈금(108~120)까지 닿게 길게, 짧은바늘은 숫자 원 안쪽까지만 — 길이 차로 둘을 구별한다
      // 긴바늘을 먼저, 짧은바늘을 위에 둔다: 두 바늘이 겹친 12시에도 짧은바늘을 잡을 수 있다
      const minG = hand(114, 9, 'mint', '긴바늘');
      const hourG = hand(58, 16, 'lavender', '짧은바늘');
      kit.piece(st, st.layer('hands'), { shape: { type: 'circle', r: 9, cx, cy }, color: 'rose', depth: 1 });
      // 숫자 조각은 바늘 위층에 둔다 — 긴바늘이 가리키는 숫자를 덮지 않게(눌림은 아래 바늘로 통과)
      const N = st.layer('numerals');
      N.setAttribute('pointer-events', 'none');
      const numColors = ['rose', 'buttercup', 'mint', 'lavender'];
      for (let n = 1; n <= 12; n++) {
        const a = (n * 30 * Math.PI) / 180;
        const x = cx + Math.sin(a) * 92; const y = cy - Math.cos(a) * 92;
        kit.piece(st, N, { shape: { type: 'circle', r: 15, cx: x, cy: y }, color: numColors[n % 4], depth: 1 });
        kit.el('text', { x, y: y + 6, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: '#3D352E' }, N).textContent = n;
      }
      const digital = kit.el('text', { x: cx, y: 345, 'text-anchor': 'middle', 'font-size': 22, class: 'pk-text', fill: '#473B6B' }, st.layer('top'));

      const step = o.hourOnly ? 60 : o.minuteStep || 1;
      let total = 0; // 0시 0분부터 흐른 분
      let revealed = false; let target = null; let pick = null;
      // freeHour: 짧은바늘 각도를 따로 둔다(분이 움직여도 따라가지 않고, 시는 짧은바늘이 지나온 숫자)
      const freeHour = !!o.freeHour && !o.hourOnly; let hourAng = 0;
      const hourAtNow = () => Math.round(((((hourAng % 360) + 360) % 360) / 30) * 100) / 100 % 12;
      const state = () => {
        const t = ((Math.round(total) % 720) + 720) % 720; let h = Math.floor(t / 60);
        if (freeHour) h = Math.floor(hourAtNow() + 1e-6) % 12;
        const s = { h: h === 0 ? 12 : h, m: (((Math.round(total) % 60) + 60) % 60) };
        if (freeHour) s.hourAt = hourAtNow();
        if (readOnly) s.pick = pick; return s;
      };
      const fmtOf = (s) => `${s.h}시${s.m ? ` ${s.m}분` : ''}`;
      const fmt = () => fmtOf(state());
      const showTime = () => o.showDigital === true && !o.print && (!o.revealAfterCheck || revealed);
      // 바늘 위치를 그대로 말로(스크린리더): 시각을 계산해 주지 않고, 눈으로 보이는 것만 알려 준다
      const pointText = (deg, short) => {
        const v = ((deg % 360) + 360) % 360; const k = v / 30; const near = Math.round(k) % 12 || 12;
        if (Math.abs(k - Math.round(k)) < 0.08) return `${short ? '짧은바늘' : '긴바늘'}이 ${near}${josa(near, '을', '를')} 가리켜요`;
        const a = Math.floor(k) % 12 || 12; const b = (a % 12) + 1;
        return `${short ? '짧은바늘' : '긴바늘'}이 ${a}${josa(a, '과', '와')} ${b} 사이에 있어요`;
      };
      const paintDigital = () => { digital.textContent = showTime() ? fmt() : ''; };
      const paintZone = () => {
        zoneL.textContent = '';
        if (!o.hourZone || o.print) return;
        const t = readOnly ? state() : target;
        if (!t || t.h == null || !(t.m || 0)) return; // 정각이면 사이가 없다
        const a0 = ((t.h % 12) * 30 * Math.PI) / 180; const a1 = (((t.h % 12) + 1) * 30 * Math.PI) / 180; const r = 76;
        kit.el('path', { d: `M${cx} ${cy} L${cx + Math.sin(a0) * r} ${cy - Math.cos(a0) * r} A${r} ${r} 0 0 1 ${cx + Math.sin(a1) * r} ${cy - Math.cos(a1) * r} Z`, fill: kit.palette.lavender.base, 'fill-opacity': 0.35, stroke: kit.palette.lavender.dark, 'stroke-dasharray': '4 4', 'pointer-events': 'none' }, zoneL);
      };
      const paint = () => { minR.set(total * 6); hourR.set(freeHour ? hourAng : total * 0.5); paintDigital(); };
      const changed = () => { revealed = false; paintDigital(); };
      const announceMove = () => kit.announce(showTime() ? fmt() : `${pointText(total * 6)}. ${pointText(total * 0.5, true)}.`);
      let lock = false;
      const minR = kit.rotate(st, minG, {
        center: [cx, cy], step: step * 6, value: 0, label: '긴바늘',
        enabled: () => !o.hourOnly && !readOnly,
        valueText: (v) => pointText(v),
        onChange(v) { if (lock) return; lock = true; total = v / 6; if (!freeHour) hourR.set(total * 0.5); changed(); lock = false; },
        onStart() { kit.tick(); }, onEnd() { kit.recorder.log('clock', state()); announceMove(); },
      });
      const hourR = kit.rotate(st, hourG, {
        center: [cx, cy], step: o.hourOnly ? 30 : step * 0.5, value: 0, label: '짧은바늘',
        enabled: () => !readOnly,
        valueText: (v) => pointText(v, true),
        onChange(v) {
          if (lock) return; lock = true;
          if (freeHour) { hourAng = v; changed(); lock = false; return; }
          // independent(쉬움): 짧은바늘을 돌려도 맞춰 둔 긴바늘은 그대로 — '긴바늘 먼저, 짧은바늘 나중' 순서로 풀 수 있게
          if (o.independent) { const m = ((Math.round(total) % 60) + 60) % 60; const h = Math.round((v - m * 0.5) / 30); total = h * 60 + m; minR.set(total * 6); changed(); lock = false; return; }
          total = v * 2; minR.set(total * 6); changed(); lock = false; },
        onStart() { kit.tick(); }, onEnd() { if (o.independent && !freeHour) { lock = true; hourR.set(total * 0.5); lock = false; } kit.recorder.log('clock', state()); announceMove(); },
      });
      if (readOnly) {
        // 읽기 문항: 바늘은 Tab으로 잡히지 않고, 아래 보기 단추로 고른다
        [minG, hourG].forEach((g) => { g.setAttribute('tabindex', '-1'); g.style.cursor = 'default'; });
      }

      // ---- 읽기 보기 단추 ----
      const choices = readOnly && Array.isArray(o.choices) ? o.choices.map(String) : [];
      let bar = null;
      const paintPick = () => { if (bar) bar.querySelectorAll('button').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.i) === pick))); };
      if (choices.length) {
        bar = document.createElement('div');
        bar.className = 'ck-read';
        bar.setAttribute('role', 'group'); bar.setAttribute('aria-label', '몇 시 몇 분인지 고르기');
        bar.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;justify-content:center;margin-top:8px';
        bar.innerHTML = `<span style="font-weight:700;width:100%;text-align:center">${String(o.ask || '몇 시 몇 분일까요?').replace(/[&<>"]/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]))}</span>${choices.map((c, i) => `<button type="button" class="pl-btn ck-pick" data-i="${i}" tabindex="0" aria-pressed="false" style="min-width:104px;min-height:48px;font-size:19px">${c.replace(/[&<>]/g, '')}</button>`).join('')}`;
        box.appendChild(bar);
        bar.addEventListener('click', (e) => {
          const b = e.target.closest('button[data-i]'); if (!b) return;
          pick = Number(b.dataset.i); paintPick(); kit.tick();
          kit.recorder.log('clock', state());
          kit.announce(`${choices[pick]}을 골랐어요.`);
        });
        // 보기는 라디오 묶음처럼: 화살표가 옆 보기로 옮기며 고른다
        bar.addEventListener('keydown', (e) => {
          const b = e.target.closest('button[data-i]'); if (!b || !/^Arrow(Right|Left|Up|Down)$/.test(e.key)) return;
          e.preventDefault();
          const d = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1;
          const j = (Number(b.dataset.i) + d + choices.length) % choices.length;
          const nb = bar.querySelector(`button[data-i="${j}"]`); nb.focus(); nb.click();
        });
      }

      const setState = (s) => { total = ((s.h % 12) * 60) + (s.m || 0); hourAng = (Number.isFinite(s.hourAt) ? s.hourAt : (s.h % 12) + (s.m || 0) / 60) * 30; if (readOnly) pick = s.pick == null ? null : s.pick; lock = true; paint(); lock = false; revealed = false; paintDigital(); paintZone(); paintPick(); };
      setState(o.start || { h: 12, m: 0 });

      // ---- 피드백 ----
      const hintsFor = (t) => {
        const tm = t.m || 0; const next = (t.h % 12) + 1;
        // 짧은바늘은 정각이 아니면 두 숫자 '사이'에 있다(3시 15분의 짧은바늘은 3이 아니라 3과 4 사이)
        const hourHint = tm === 0 ? `짧은바늘이 ${t.h}${josa(t.h, '을', '를')} 똑바로 가리키게 해요.`
          : `짧은바늘은 ${t.h}${josa(t.h, '과', '와')} ${next} 사이에 있어요. 분이 지날수록 ${next} 쪽으로 조금씩 가지만, ${next}에 닿기 전까지는 ${t.h}시예요.`;
        const n = tm / 5;
        const minHint = tm % 5 === 0 ? `긴바늘이 ${n || 12}${josa(n || 12, '을', '를')} 가리키면 ${tm}분이에요. 숫자 한 칸은 5분이에요.`
          : `긴바늘이 ${Math.floor(n) || 12}에서 작은 눈금 ${tm % 5}칸을 더 가면 ${tm}분이에요. (${Math.floor(n) * 5}분에서 ${tm % 5}분 더)`;
        return { hourHint, minHint };
      };
      // 흔한 오개념을 골라 말해 준다: 시를 한 칸 넘겨 읽기, 두 바늘을 바꿔 읽기, 긴바늘 숫자를 그대로 분으로 읽기
      // make: s = 학생이 만든 시각, t = 목표 / read: s = 학생이 고른 보기, t = 시계가 가리키는 시각
      const diagnose = (s, t, read) => {
        const tm = t.m || 0; const H = (x) => ((x % 12) + 12) % 12;
        const same = s.h === t.h && s.m === tm;
        if (same) return null;
        if (s.m === tm && tm > 0 && H(s.h) === H(t.h + 1)) {
          // '가깝지만'은 30분이 지났을 때만 맞는 말이다(3시 15분의 짧은바늘은 4보다 3에 가깝다)
          const near = tm >= 30;
          return read ? `짧은바늘이 ${near ? `${s.h}에 가깝지만 ` : ''}아직 ${s.h}에 닿지 않았어요. 그래서 아직 ${t.h}시예요.`
            : `짧은바늘이 벌써 ${s.h}${josa(s.h, '을', '를')} 지났어요. 그러면 ${s.h}시 ${tm}분이에요. ${t.h}시 ${tm}분이면 짧은바늘은 ${near ? `${s.h}에 가깝지만 ` : ''}아직 ${s.h}에 닿지 않아요.`;
        }
        if (s.m === tm && tm > 0 && H(s.h) === H(t.h - 1)) {
          return read ? `짧은바늘이 벌써 ${t.h}${josa(t.h, '을', '를')} 지났어요. 그래서 ${t.h}시예요.`
            : `짧은바늘이 아직 ${t.h}에 오지 않았어요. 짧은바늘은 ${t.h}${josa(t.h, '과', '와')} ${(t.h % 12) + 1} 사이에 있어야 해요.`;
        }
        if (swapped(s, t)) {
          return read ? '바늘이 바뀌었어요. 긴바늘과 짧은바늘을 바꿔 읽었어요. 짧은바늘이 시를, 긴바늘이 분을 나타내요.' : '바늘이 바뀌었어요. 긴바늘을 짧은바늘 자리에, 짧은바늘을 긴바늘 자리에 놓았어요. 긴바늘은 분을, 짧은바늘은 시를 나타내요.';
        }
        if (read && s.h === t.h && tm % 5 === 0 && s.m === tm / 5) {
          return `긴바늘이 가리키는 숫자 ${s.m}${josa(s.m, '을', '를')} 그대로 읽었어요. 숫자 한 칸은 5분이라서 ${tm}분이에요.`;
        }
        if (!read && s.h === t.h && tm % 10 === 0 && tm > 0 && s.m === tm / 2) {
          const k = tm / 10;
          return `긴바늘이 ${k}${josa(k, '을', '를')} 가리키면 ${tm / 2}분이에요. 숫자 한 칸은 5분이라서 ${tm}분은 ${tm / 5}${josa(tm / 5, '을', '를')} 가리켜요.`;
        }
        if (!read && s.h === t.h && tm > 0 && tm <= 12 && s.m === (tm * 5) % 60) {
          return `긴바늘이 ${tm}${josa(tm, '을', '를')} 가리키면 ${(tm * 5) % 60}분이에요. 긴바늘은 숫자 한 칸에 5분씩 세요.`;
        }
        if (read && s.h === t.h && s.m !== tm) return `긴바늘을 다시 세어 봐요. 숫자 한 칸은 5분, 작은 눈금 한 칸은 1분이에요.`;
        return null;
      };

      // 읽기 문항의 고른 보기가 어떤 실수인지(diagnose와 같은 갈래). 힌트는 이 갈래로 까닭만 말하고 시각은 말하지 않는다
      const mistakeOf = (s, t) => {
        if (!s) return null;
        const tm = t.m || 0; const H = (x) => ((x % 12) + 12) % 12;
        if (s.h === t.h && s.m === tm) return null;
        if (s.m === tm && tm > 0 && H(s.h) === H(t.h + 1)) return 'ahead';
        if (s.m === tm && tm > 0 && H(s.h) === H(t.h - 1)) return 'behind';
        if (swapped(s, t)) return 'swap';
        if (s.h === t.h && tm % 5 === 0 && s.m === tm / 5) return 'numeral';
        if (s.h === t.h) return 'minute';
        return 'other';
      };
      const readHint = (text, shown) => ({
        ahead: '짧은바늘이 다음 숫자에 가까워도, 그 숫자에 닿기 전까지는 지나온 앞 숫자가 ‘시’예요.',
        behind: '짧은바늘이 숫자를 막 지났으면 그 숫자가 ‘시’예요. 짧은바늘이 지나온 숫자를 읽어요.',
        swap: '짧고 굵은 바늘이 ‘시’, 길고 가는 바늘이 ‘분’이에요. 두 바늘의 길이를 먼저 견주어 봐요.',
        numeral: '긴바늘이 가리키는 숫자는 분이 아니에요. 숫자 한 칸이 5분이라서 12부터 5, 10, 15… 하고 5씩 세어요.',
        minute: '‘시’는 맞게 읽었어요. 긴바늘을 12부터 숫자 한 칸에 5분씩 세고, 작은 눈금 한 칸은 1분으로 더해요.',
      }[mistakeOf(parse(text), shown)] || '짧은바늘부터 봐요. 두 숫자 사이에 있으면 앞 숫자가 ‘시’예요. 그다음 긴바늘을 5분씩 세어요.');

      return {
        getState: state,
        setState,
        setTarget(t) { target = t || null; paintZone(); },
        reset() { setState(o.start || { h: 12, m: 0 }); },
        solve(t) { if (readOnly) { pick = t.pick; paintPick(); return; } setState(t); },
        check(t, opts) {
          const r = judge(t);
          // 힌트용 검사는 아무것도 켜지 않는다. 디지털 시각은 맞힌 확인에서만 켠다(틀린 확인을 연달아 눌러 시각을 읽어 가지 않게)
          if (!(opts && opts.forHint) && r.correct) { revealed = true; paintDigital(); }
          return r;
        },
        hint(t, opts) {
          if (!t) return { hint: '' };
          const r = judge(t);
          if (r.correct) return { hint: '두 바늘이 모두 알맞은 자리에 있어요.', correct: true };
          return { hint: hintAt(t, levelOf(opts)), correct: false };
        },
        // 흔한 오개념 순서로 후보를 만들고, 지금 시계와 같은 오답은 건너뛴다(같은 오답을 다시 내면 시도로 세지 않는다)
        wrongAnswer(t) {
          if (readOnly || (t && t.pick != null)) {
            // 보기 가운데 시를 한 칸 넘겨 읽기 → 두 바늘 바꿔 읽기 → 긴바늘 숫자를 그대로 분으로 → 그 밖의 보기
            const shown = state(); const kinds = choices.map((c) => mistakeOf(parse(c), shown));
            const order = ['ahead', 'swap', 'numeral', 'behind', 'minute', 'other'].flatMap((k) => kinds.map((x, j) => (x === k ? j : -1)).filter((j) => j >= 0));
            const idx = order.concat(choices.map((_, j) => j)).filter((j) => j !== t.pick);
            const i = idx.find((j) => j !== pick); const k = i != null ? i : idx[0];
            return k == null ? null : { h: shown.h, m: shown.m, pick: k };
          }
          const tm = t.m || 0; const next = (t.h % 12) + 1; const H = (x) => ((x - 1 + 12) % 12) + 1;
          const list = [];
          if (freeHour && tm >= 10) list.push({ h: t.h, m: tm, hourAt: t.h % 12 }); // 짧은바늘을 시 숫자에 똑바로(분만큼 가지 않음)
          if (tm >= 30) list.push({ h: next, m: tm }); // 다음 숫자에 가까우니 시를 한 칸 넘겨 놓기
          if (tm > 0 && tm * 5 < 60) list.push({ h: t.h, m: tm * 5 }); // 9시 5분 → 긴바늘을 숫자 5에
          if (tm > 0 && tm % 10 === 0) list.push({ h: t.h, m: tm / 2 }); // 40분 → 긴바늘을 숫자 4에
          if (!o.hourOnly) {
            // 두 바늘 바꿔 놓기: 긴바늘을 짧은바늘 자리(분 = 짧은바늘 위치 × 5)에, 짧은바늘을 긴바늘 숫자 쪽에
            const sm = (Math.round((((t.h % 12) + tm / 60) * 5) / step) * step) % 60; const sh = H(Math.round(tm / 5 - sm / 60) || 12);
            if ((sh !== t.h || sm !== tm) && swapped({ h: sh, m: sm }, t)) list.push({ h: sh, m: sm });
          }
          list.push({ h: next, m: tm }, { h: H(t.h - 1), m: tm });
          if (!o.hourOnly) list.push({ h: t.h, m: (tm + step) % 60 });
          const cur = state(); const ok = list.filter((x) => !(x.h === t.h && x.m === tm) || x.hourAt != null);
          return ok.find((x) => x.h !== cur.h || x.m !== cur.m || (x.hourAt != null && x.hourAt !== cur.hourAt)) || ok[0] || null;
        },
        // 교사 시연용: 목표 시각까지 바늘이 스스로 돌아간다
        async demo(t) { const from = total; const to = (t.h % 12) * 60 + (t.m || 0); await kit.tween(1400, (p) => { total = from + (to - from) * p; lock = true; paint(); lock = false; }); },
      };
      // 단계별 힌트 글. 1단계는 목표 시각·숫자·바늘 자리를 말하지 않는다(어느 바늘을 어떻게 읽는지만).
      // 2단계는 틀린 바늘을 짚되 자리는 말하지 않는다. 3단계는 그 바늘 하나를 풀어 보인다.
      function hintAt(t, lv) {
        const read = readOnly || (t && t.pick != null);
        const fine = step === 1 && !o.hourOnly ? ' 작은 눈금 한 칸은 1분이에요.' : '';
        if (read) {
          const shown = state();
          if (lv <= 1 || pick == null) return `짧은바늘부터 보세요. 두 숫자 사이에 있으면 지나온 숫자가 ‘시’예요. 그다음 긴바늘을 맨 위 숫자부터 숫자 하나를 지날 때마다 ‘오 분, 십 분, 십오 분…’ 하고 세어요.${fine}`;
          const said = parse(choices[pick]);
          if (lv === 2) return readHint(choices[pick], shown);
          const { hourHint, minHint } = hintsFor(shown);
          const k = mistakeOf(said, shown);
          return k === 'minute' || k === 'numeral' ? minHint : hourHint;
        }
        if (lv <= 1) return o.hourOnly ? '짧은바늘이 시를 나타내요. 짧은바늘이 시 숫자를 똑바로 가리키게 돌려요.' : `긴바늘은 분, 짧은바늘은 시를 나타내요. 긴바늘부터 맞추고 짧은바늘은 마지막에 봐요. 긴바늘은 맨 위 숫자부터 숫자 하나를 지날 때마다 ‘오 분, 십 분…’ 하고 세어요.${fine}`;
        const s = state(); const tm = t.m || 0; const H = (x) => ((x % 12) + 12) % 12;
        const { hourHint, minHint } = hintsFor(t);
        if (swapped(s, t)) return lv === 2 ? '바늘이 바뀌었어요. 길고 가는 긴바늘이 분, 짧고 굵은 짧은바늘이 시예요. 두 바늘의 길이를 먼저 견주어 봐요.' : `${minHint} 짧은바늘은 시를 나타내요.`;
        if (s.m !== tm) return lv === 2 ? `긴바늘이 아직 맞지 않아요. 12에서부터 숫자 한 칸에 5분씩 세며 긴바늘을 돌려 봐요.${fine}` : minHint;
        if (lv === 2) {
          if (tm > 0 && H(s.h) === H(t.h + 1)) return '긴바늘은 맞았어요. 짧은바늘이 다음 숫자를 벌써 지났어요. 그 숫자에 닿기 전까지는 앞 숫자가 ‘시’예요.';
          if (tm > 0 && H(s.h) === H(t.h - 1)) return '긴바늘은 맞았어요. 짧은바늘이 아직 시 숫자에 오지 않았어요.';
          return '긴바늘은 맞았어요. 이제 짧은바늘로 시를 맞춰요. 분이 지날수록 짧은바늘은 다음 숫자 쪽으로 조금씩 가요.';
        }
        return hourHint;
      }
      function judge(t) {
          const h2 = () => hintAt(t, 2);
          if (readOnly || (t && t.pick != null)) {
            if (pick == null) return { correct: false, incomplete: true, feedback: '시계를 보고 아래에서 시각을 하나 골라요.' };
            const shown = state();
            if (pick === t.pick) return { correct: true, feedback: `맞아요! 긴바늘은 ${shown.m}분, 짧은바늘은 ${shown.h}시를 나타내서 ${fmtOf(shown)}이에요.` };
            const said = parse(choices[pick]);
            const why = said && diagnose(said, shown, true);
            return { correct: false, feedback: why || '다시 볼까요? 짧은바늘부터 읽어요.', hint: h2() };
          }
          const s = state(); const tm = t.m || 0;
          const ok = s.h === t.h && s.m === tm;
          if (ok && freeHour) {
            // 짧은바늘 자리: 분이 지난 만큼 다음 숫자 쪽으로(9시 40분 → 9와 10 사이, 10에 가깝게)
            const want = (t.h % 12) + tm / 60; const next = (t.h % 12) + 1;
            if (circ(s.hourAt, want) > 0.2) {
              const straight = tm >= 10 && circ(s.hourAt, t.h % 12) < 0.1;
              return { correct: false, feedback: straight ? `짧은바늘이 ${t.h}${josa(t.h, '을', '를')} 똑바로 가리켜요. ${tm}분이 지났으니 짧은바늘은 ${t.h}${josa(t.h, '과', '와')} ${next} 사이에서 ${next} 쪽으로 조금 가 있어야 해요.`
                : `시와 분은 맞지만 짧은바늘 자리가 맞지 않아요. 분이 지난 만큼만 ${next} 쪽으로 옮겨요.`, hint: h2() };
            }
          }
          if (ok) return { correct: true, feedback: `맞아요! ${fmt()}이에요.` };
          const now = `지금 시계는 ${fmt()}이에요.`;
          const why = diagnose(s, t);
          if (why) return { correct: false, feedback: `${now} ${why}`, hint: h2() };
          if (s.m === tm) return { correct: false, feedback: `${now} 긴바늘은 맞았어요. 짧은바늘을 다시 보세요.`, hint: h2() };
          if (s.h === t.h) return { correct: false, feedback: `${now} 짧은바늘은 맞았어요. 긴바늘을 다시 보세요.`, hint: h2() };
          return { correct: false, feedback: `${now} 긴바늘부터 맞춰 볼까요?`, hint: h2() };
      }
    },
  });
})(window.PaperKit);
