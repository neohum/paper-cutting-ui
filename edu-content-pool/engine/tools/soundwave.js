/* 종이 줄 떨림 실험대 — 휴지 상자 고무줄 기타 + 종이 조각을 올린 작은북.
 * - 고무줄: 위아래로 당겼다 놓으면(키보드: 방향키로 당기고 Enter) 떨린다. 당긴 만큼 떨림이 크고 소리가 크다.
 *   떨리는 고무줄을 다시 누르면(키보드: Enter/Esc) 떨림과 소리가 함께 멈춘다.
 * - 받침(연필): 좌우로 옮겨 떨리는 부분의 길이를 바꾼다(짧을수록 높은 소리).
 * - 팽팽함 손잡이: 느슨하게 ↔ 팽팽하게(팽팽할수록 높은 소리).
 * - 작은북: 북채를 위로 끌어 올렸다 놓으면(키보드: ↑ 후 Enter) 친다. 세게 칠수록 종이 조각이 높이 튄다.
 * 옵션: showReadout(높낮이·세기 글자와 세기 막대, 기본 true), showPitch(높낮이 줄, 기본 showReadout), showLoud(세기 글자 줄, 기본 showReadout),
 *       showHints(조작 안내 글자), pictureWords(쉬움: 높낮이·팽팽함 낱말 옆 그림 단서), parts('guitar'|'drum'|'both'),
 *       start({length,tension} 처음 상태), sound(false면 소리 끔 — kit.soundOn()이 거짓이어도 끈다), print(활동지: 글자·소리 없음, 상태를 멈춘 그림으로),
 *       revealAfterCheck(높낮이·세기 글자와 세기 막대를 확인을 누른 뒤에만 보인다 — 다시 소리를 내면 또 숨는다)
 * 상태: { length:1~5(1=가장 짧다), tension:1~5(5=가장 팽팽), pitch:'low'|'mid'|'high', rel:'higher'|'lower'|'same'(처음 상태와 비교), sounds,
 *        last:{source,strength(0~100),pitch,length,tension}|null, stopped }
 * 목표: {vibrating:true, source?}, {loud:true|false, source?}, {pitch:'higher'|'lower', loud?, only?:'length'|'tension'}(처음 상태보다 높게/낮게 — 높낮이는 비교 개념.
 *        only가 있으면 그 변인 하나만 바꿔야 한다: 변인 통제),
 *       {pitch:'high'|'low', loud?}(절대 3단계), {stopped:true}
 * 세기: 61 이상 = 큰 소리(세기 막대 4칸 이상), 40 이하 = 작은 소리(2칸 이하)
 */
(function (K) {
  const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const PITCH_NAME = { high: '높은 소리', mid: '중간 높이 소리', low: '낮은 소리' };
  // 힌트 단계(hint(target, { level, attempts })): 1 = 개념·전략만(늘 열림, 받침·손잡이를 어느 쪽으로 옮길지 말하지 않는다), 2 = 한 번 틀린 뒤 어긋난 단계, 3 = 두 번 틀린 뒤 풀이 한 걸음
  const hintLevel = (opts) => { const a = (opts && opts.attempts) || 0; const l = (opts && opts.level) || 1; return Math.max(1, Math.min(l, a >= 2 ? 3 : a >= 1 ? 2 : 1)); };
  const pitchOf = (L, T) => { const d = T - L; return d >= 2 ? 'high' : d <= -2 ? 'low' : 'mid'; };
  const LOUD = 61; const QUIET = 40;
  const loudName = (s) => (s >= LOUD ? '큰 소리' : s <= QUIET ? '작은 소리' : '중간 세기 소리');
  const REL_NAME = { higher: '처음보다 높은 소리', lower: '처음보다 낮은 소리', same: '처음과 같은 높이' };

  K.registerTool('soundwave', {
    name: '종이 줄 떨림 실험대',
    create(box, o, kit) {
      const W = 520; const H = 300;
      const st = kit.stage(box, { viewBox: [W, H], background: false, label: '종이 줄 떨림 실험대. 고무줄을 당겼다 놓거나 작은북을 쳐서 소리를 내고 떨림을 관찰하세요.' });
      // 좁은 화면(휴대폰)에서는 작은북을 기타 아래로 내려 세로로 쌓는다 — 글자와 손잡이가 너무 작아지지 않게
      const compact = !o.print && !o.parts && box.clientWidth > 0 && box.clientWidth < 520;
      const crop = o.parts === 'guitar' ? [0, 0, 345, H] : o.parts === 'drum' ? [335, 0, 185, H] : compact ? [0, 0, 345, 600] : [0, 0, W, H];
      st.svg.setAttribute('viewBox', crop.join(' '));
      kit.el('rect', { x: crop[0], y: 0, width: crop[2], height: crop[3], rx: 18, fill: '#F8F4EC', class: 'pk-bg' }, st.svg);
      const mute = !!o.print || o.sound === false;
      const showReadout = !o.print && o.showReadout !== false;
      const showPitch = showReadout && (o.showPitch ?? true);
      const showLoud = showReadout && (o.showLoud ?? true);
      const showHints = !o.print && !!o.showHints;
      const pictures = !o.print && !!o.pictureWords;
      const NS = (tag, a, p) => kit.el(tag, a, p);

      // ---------- 고무줄 기타 ----------
      const BY = 176; const X0 = 46; const XR = 326; const PIN = 28;
      const spanOf = (L) => 100 + (L - 1) * 42; // 길이 1단계=100, 5단계=268
      const freqOf = (span, T) => 262 * (184 / span) * Math.sqrt(T / 3);
      const G = st.layer('guitar');
      kit.piece(st, G, { shape: { type: 'rect', x: 16, y: 120, w: 320, h: 112, rx: 16 }, color: 'peach', depth: 3, texture: true });
      kit.piece(st, G, { shape: { type: 'rect', x: 16, y: 204, w: 320, h: 16, rx: 4 }, color: 'buttercup', depth: 1 });
      kit.piece(st, G, { shape: { type: 'rect', x: 24, y: 126, w: 304, h: 10, rx: 5 }, color: 'rose', depth: 1 });
      [[60, 150, 'mint'], [300, 150, 'lavender'], [96, 216, 'sky'], [262, 214, 'mint']].forEach(([x, y, c]) => kit.piece(st, G, { shape: { type: 'circle', cx: x, cy: y, r: 5 }, color: c, depth: 1 }));
      kit.piece(st, G, { shape: { type: 'circle', cx: 186, cy: BY, r: 42 }, color: 'buttercup', depth: 2 });
      kit.piece(st, G, { shape: { type: 'circle', cx: 186, cy: BY, r: 33 }, color: 'ink', depth: 1 });
      kit.piece(st, G, { shape: { type: 'rect', x: 40, y: BY, w: 12, h: 30, rx: 3 }, color: 'mint', depth: 1 });
      kit.piece(st, G, { shape: { type: 'circle', cx: PIN, cy: BY, r: 7 }, color: 'lavender', depth: 1 });
      // 오른쪽 줄감개: 팽팽함에 따라 돌아간다
      const peg = NS('g', null, G);
      kit.piece(st, peg, { shape: { type: 'rect', x: XR - 4, y: BY - 22, w: 8, h: 44, rx: 4 }, color: 'lavender', depth: 1 });
      kit.piece(st, peg, { shape: { type: 'circle', cx: XR, cy: BY, r: 9 }, color: 'lavender', depth: 1 });

      // 고무줄을 잡는 판정 영역(아래) → 받침(가운데) → 고무줄 그림(위, 포인터 없음)
      const hitG = NS('g', { class: 'pk-draggable', tabindex: 0, role: 'button', 'aria-label': '고무줄. 위아래로 당겼다 놓으면 소리가 나요. 키보드는 위·아래 방향키로 당기고 Enter로 놓아요.' }, G);
      NS('rect', { x: 0, y: -28, width: 1, height: 56, class: 'pk-hit' }, hitG);
      const bridge = NS('g', { class: 'pk-draggable', tabindex: 0, role: 'slider', 'aria-label': '받침. 옮기면 떨리는 고무줄 길이가 바뀌어요', 'aria-valuemin': 1, 'aria-valuemax': 5 }, G);
      NS('rect', { x: -24, y: BY - 22, width: 48, height: 64, class: 'pk-hit' }, bridge);
      kit.piece(st, bridge, { shape: { type: 'rect', x: -8, y: BY, w: 16, h: 34, rx: 3 }, color: 'buttercup', depth: 2 });
      kit.piece(st, bridge, { shape: { type: 'poly', points: `-8,${BY + 34} 8,${BY + 34} 0,${BY + 46}` }, color: 'peach', depth: 1 });
      if (!o.print) NS('text', { x: 0, y: BY + 60, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#6E530F' }, bridge).textContent = '받침';

      const band = NS('g', { 'pointer-events': 'none' }, G);
      const bandStroke = '#C2606B';
      const line = (d, p, extra) => NS('path', Object.assign({ d, fill: 'none', stroke: bandStroke, 'stroke-linecap': 'round', 'vector-effect': 'non-scaling-stroke' }, extra || {}), p);
      // 활동지(흑백 인쇄): 떨리는 부분(고정점~받침)은 굵은 실선, 떨리지 않는 부분은 가는 점선으로 구분한다
      const still = o.print ? { 'stroke-width': 1.6, 'stroke-dasharray': '4 4', stroke: '#544B42' } : { 'stroke-width': 4 };
      line(`M${PIN} ${BY} L${X0} ${BY}`, band, still);
      const bandR = NS('g', null, band); const bandRPath = line('M0 0 L1 0', bandR, still);
      // 떨림 덮개(렌즈 모양): 떨리는 동안 흐릿하게 보이는 폭
      let sinPts = ''; let lensUp = ''; let lensDn = '';
      for (let i = 0; i <= 24; i++) { const x = i / 24; const y = Math.sin(Math.PI * x); sinPts += `${i ? 'L' : 'M'}${x.toFixed(4)} ${(-y).toFixed(4)} `; lensUp += `${i ? 'L' : 'M'}${x.toFixed(4)} ${(-y).toFixed(4)} `; lensDn = `L${x.toFixed(4)} ${y.toFixed(4)} ` + lensDn; }
      const env = NS('g', { display: 'none' }, band);
      NS('path', { d: `${lensUp}${lensDn}Z`, fill: kit.palette.lavender.base, 'fill-opacity': 0.55 }, env);
      const vibShadow = NS('g', null, band); const vibShadowPath = NS('path', { d: sinPts, fill: 'none', stroke: 'rgba(46,30,20,0.28)', 'stroke-linecap': 'round', 'vector-effect': 'non-scaling-stroke' }, vibShadow);
      const vib = NS('g', null, band); const vibPath = NS('path', { d: sinPts, fill: 'none', stroke: bandStroke, 'stroke-linecap': 'round', 'vector-effect': 'non-scaling-stroke' }, vib);
      // 소리 퍼짐 고리(구멍에서 퍼져 나감)
      const rings = [0, 1, 2].map(() => NS('circle', { cx: 0, cy: 0, r: 30, fill: 'none', stroke: kit.palette.sky.dark, 'stroke-width': 2, opacity: 0, 'pointer-events': 'none', 'vector-effect': 'non-scaling-stroke' }, G));

      // 팽팽함 손잡이
      const TY = 272; const TX = (T) => 100 + (T - 1) * 40;
      kit.piece(st, G, { shape: { type: 'rect', x: 94, y: TY - 5, w: 172, h: 10, rx: 5 }, color: 'cream', depth: 1 });
      for (let t = 1; t <= 5; t++) NS('circle', { cx: TX(t), cy: TY, r: 3, fill: '#B8A6D9', 'pointer-events': 'none' }, G);
      NS('text', { x: 52, y: TY + 4, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#473B6B' }, G).textContent = '느슨하게';
      NS('text', { x: 306, y: TY + 4, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#473B6B' }, G).textContent = '팽팽하게';
      const knob = NS('g', { class: 'pk-draggable', tabindex: 0, role: 'slider', 'aria-label': '팽팽함 손잡이', 'aria-valuemin': 1, 'aria-valuemax': 5 }, G);
      NS('rect', { x: -24, y: TY - 24, width: 48, height: 48, class: 'pk-hit' }, knob);
      kit.piece(st, knob, { shape: { type: 'rect', x: -14, y: TY - 14, w: 28, h: 28, rx: 9 }, color: 'lavender', depth: 2 });
      kit.piece(st, knob, { shape: { type: 'rect', x: -2, y: TY - 8, w: 4, h: 16, rx: 2 }, color: 'cream', depth: 0, flat: true });

      // 읽기 글자 + 세기 막대
      const RO = st.layer('readout');
      const roPitch = NS('text', { x: 24, y: 44, 'font-size': 15, class: 'pk-text', fill: '#473B6B' }, RO);
      const roLoud = NS('text', { x: 24, y: 68, 'font-size': 15, class: 'pk-text', fill: '#6E3B21' }, RO);
      const meter = [0, 1, 2, 3, 4].map((i) => {
        const h = 12 + i * 9;
        return kit.piece(st, RO, { shape: { type: 'rect', x: 254 + i * 15, y: 100 - h, w: 11, h, rx: 3 }, color: 'cream', depth: 1 });
      });
      NS('text', { x: 291, y: 116, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#6E3B21' }, RO).textContent = '소리 세기';
      if (!showReadout) RO.setAttribute('display', 'none');
      // 확인 뒤에만 보이기: 예상하고 들은 다음 글자로 확인한다(글자를 보고 맞히지 않게)
      const revealMode = showReadout && !!o.revealAfterCheck;
      let revealed = !revealMode;
      const setReveal = (v) => { if (!revealMode) return; revealed = v; RO.setAttribute('display', v ? 'inline' : 'none'); };
      setReveal(!revealMode);
      if (!showPitch) { roPitch.setAttribute('display', 'none'); roLoud.setAttribute('y', 44); }
      if (!showLoud) roLoud.setAttribute('display', 'none');
      if (pictures) {
        // 낱말 그림 단서(쉬움): 높낮이 = 떨림의 빠르기(촘촘한 물결 '삐—' / 성긴 물결 '부—'), 팽팽함 = 곧은 줄 / 처진 줄
        const wave = (x0, w, cycles, y) => { let d = `M${x0} ${y}`; const n = cycles * 8; for (let i = 1; i <= n; i++) d += ` L${(x0 + (w * i) / n).toFixed(1)} ${(y - 4 * Math.sin((2 * Math.PI * cycles * i) / n)).toFixed(1)}`; return d; };
        if (showPitch) {
          NS('path', { d: wave(24, 30, 5, 18), fill: 'none', stroke: '#473B6B', 'stroke-width': 1.6, 'pointer-events': 'none' }, RO);
          NS('text', { x: 58, y: 22, 'font-size': 11, class: 'pk-text', fill: '#473B6B' }, RO).textContent = '삐— 높은 소리';
          NS('path', { d: wave(140, 30, 1, 18), fill: 'none', stroke: '#473B6B', 'stroke-width': 1.6, 'pointer-events': 'none' }, RO);
          NS('text', { x: 174, y: 22, 'font-size': 11, class: 'pk-text', fill: '#473B6B' }, RO).textContent = '부— 낮은 소리';
        }
        NS('path', { d: 'M34 252 Q52 266 70 252', fill: 'none', stroke: bandStroke, 'stroke-width': 2.5, 'stroke-linecap': 'round', 'pointer-events': 'none' }, G);
        NS('path', { d: 'M288 258 L324 258', fill: 'none', stroke: bandStroke, 'stroke-width': 2.5, 'stroke-linecap': 'round', 'pointer-events': 'none' }, G);
        [[34, 252], [70, 252], [288, 258], [324, 258]].forEach(([x, y]) => NS('circle', { cx: x, cy: y, r: 3, fill: '#8E7BB5', 'pointer-events': 'none' }, G));
      }
      if (showHints) {
        NS('text', { x: 118, y: 108, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#702830' }, G).textContent = '↕ 고무줄을 당겼다 놓아요';
        NS('text', { x: 186, y: 251, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#6E530F' }, G).textContent = '◀ 짧게   받침을 옮겨요   길게 ▶';
      }

      // ---------- 작은북 ----------
      const D = st.layer('drum');
      const DX = 430; const DY = 194;
      kit.piece(st, D, { shape: { type: 'rect', x: 372, y: DY, w: 116, h: 66, rx: 10 }, color: 'sky', depth: 3, texture: true });
      kit.piece(st, D, { shape: { type: 'rect', x: 368, y: 248, w: 124, h: 12, rx: 5 }, color: 'buttercup', depth: 1 });
      NS('polyline', { points: '378,206 396,244 414,206 432,244 450,206 468,244 484,206', fill: 'none', stroke: '#DE939B', 'stroke-width': 3, 'stroke-linejoin': 'round', 'pointer-events': 'none' }, D);
      const head = NS('g', null, D);
      kit.piece(st, head, { shape: { type: 'ellipse', rx: 62, ry: 16 }, color: 'buttercup', depth: 2 });
      kit.piece(st, head, { shape: { type: 'ellipse', rx: 55, ry: 12.5 }, color: 'cream', depth: 1 });
      kit.transform(head, { x: DX, y: DY });
      if (!o.print) NS('text', { x: DX, y: 288, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#204C5A' }, D).textContent = '작은북';
      const BITS = [
        { x: 398, y: 192, c: 'rose', s: { type: 'rect', x: -6, y: -4, w: 12, h: 8, rx: 1.5 } },
        { x: 414, y: 186, c: 'mint', s: { type: 'poly', points: '-6,4 6,4 0,-6' } },
        { x: 430, y: 195, c: 'lavender', s: { type: 'rect', x: -5, y: -5, w: 10, h: 10, rx: 1.5 } },
        { x: 446, y: 187, c: 'peach', s: { type: 'circle', r: 5 } },
        { x: 460, y: 194, c: 'buttercup', s: { type: 'rect', x: -7, y: -3, w: 14, h: 7, rx: 1.5 } },
        { x: 424, y: 184, c: 'sky', s: { type: 'poly', points: '-5,-5 5,-3 2,5 -6,3' } },
      ];
      const bits = BITS.map((b) => { const p = kit.piece(st, D, { shape: b.s, color: b.c, depth: 1 }); kit.transform(p.g, { x: b.x, y: b.y }); return Object.assign({ g: p.g }, b); });
      const marks = NS('g', { 'pointer-events': 'none' }, D); // 인쇄용 튐 자국
      // 북채
      const REST = -36; const PULL_MAX = 64;
      const stick = NS('g', { class: 'pk-draggable', tabindex: 0, role: 'button', 'aria-label': '북채. 위로 끌어 올렸다 놓으면 작은북을 쳐요. 키보드는 위 방향키로 올리고 Enter로 쳐요.' }, D);
      NS('rect', { x: 440, y: 46, width: 72, height: 150, class: 'pk-hit' }, stick);
      kit.piece(st, stick, { shape: { type: 'poly', points: '494,66 504,70 462,170 454,166' }, color: 'peach', depth: 1 });
      kit.piece(st, stick, { shape: { type: 'poly', points: '492,58 508,64 498,90 484,84' }, color: 'rose', depth: 1 });
      kit.piece(st, stick, { shape: { type: 'circle', cx: 457, cy: 172, r: 9 }, color: 'buttercup', depth: 1 });
      kit.transform(stick, { y: REST });
      if (showHints) NS('text', { x: 470, y: 30, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#204C5A' }, D).textContent = '↑ 올렸다 놓아요';
      if (compact) D.setAttribute('transform', 'translate(-258 300)');
      if (o.parts === 'guitar') D.setAttribute('display', 'none');
      if (o.parts === 'drum') { G.setAttribute('display', 'none'); RO.setAttribute('display', 'none'); }

      // ---------- 소리(WebAudio) — 없거나 막혀도 교구는 그대로 돈다 ----------
      let ac = null; let voice = null; let lastSoundAt = -1e9;
      const audio = () => {
        if (mute || (typeof kit.soundOn === 'function' && !kit.soundOn())) return null;
        // 연타로 교실이 시끄러워지지 않게: 250ms 안에 다시 시작하는 소리는 내지 않는다(떨림 그림은 그대로)
        const now = performance.now();
        if (now - lastSoundAt < 250) return null;
        lastSoundAt = now;
        const AC = window.AudioContext || window.webkitAudioContext;
        if (!AC) return null;
        try { ac = ac || new AC(); if (ac.state === 'suspended') ac.resume(); return ac; } catch (_) { return null; }
      };
      const stopVoice = () => {
        if (!voice || !ac) return;
        try { const t = ac.currentTime; voice.g.gain.cancelScheduledValues(t); voice.g.gain.setTargetAtTime(0.0001, t, 0.02); voice.oscs.forEach((x) => x.stop(t + 0.15)); } catch (_) { /* 이미 끝남 */ }
        voice = null;
      };
      function tone(f, s) {
        const a = audio(); if (!a) return;
        try {
          stopVoice();
          const t = a.currentTime; const g = a.createGain(); const peak = 0.02 + s * 0.18;
          g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(peak, t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + 2.2);
          const o1 = a.createOscillator(); o1.type = 'triangle'; o1.frequency.value = f;
          const o2 = a.createOscillator(); o2.type = 'sine'; o2.frequency.value = f * 2;
          const g2 = a.createGain(); g2.gain.value = 0.22;
          o1.connect(g); o2.connect(g2).connect(g); g.connect(a.destination);
          o1.start(t); o2.start(t); o1.stop(t + 2.3); o2.stop(t + 2.3);
          voice = { g, oscs: [o1, o2] };
        } catch (_) { /* 소리는 부가 기능 */ }
      }
      function thump(s) {
        const a = audio(); if (!a) return;
        try {
          const t = a.currentTime; const g = a.createGain(); const peak = 0.04 + s * 0.3;
          g.gain.setValueAtTime(peak, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
          const osc = a.createOscillator(); osc.type = 'sine'; osc.frequency.setValueAtTime(150, t); osc.frequency.exponentialRampToValueAtTime(55, t + 0.3);
          osc.connect(g).connect(a.destination); osc.start(t); osc.stop(t + 0.5);
          const len = Math.floor(a.sampleRate * 0.12); const buf = a.createBuffer(1, len, a.sampleRate); const d = buf.getChannelData(0);
          for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
          const src = a.createBufferSource(); src.buffer = buf; const lp = a.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1400;
          const gn = a.createGain(); gn.gain.value = peak * 0.6; src.connect(lp).connect(gn).connect(a.destination); src.start(t);
        } catch (_) { /* 소리는 부가 기능 */ }
      }

      // ---------- 상태 ----------
      const init = Object.assign({ length: 3, tension: 3 }, o.start || {});
      let L = init.length; let T = init.tension; let xb = X0 + spanOf(L);
      let sounds = 0; let last = null; let stopped = false;
      let vibrating = false; let pull = 0; let rafId = 0; let stickPull = 0;
      let drumFocus = false; let relMode = false;
      // '처음보다 높은/낮은 소리'는 이 교구를 연 때의 고무줄과 비교한다(높낮이는 상대 비교 개념)
      const ref = { L: init.length, T: init.tension };
      const fOf = (l, t) => freqOf(spanOf(l), t);
      const relOf = (l, t) => { const d = fOf(l, t) - fOf(ref.L, ref.T); return d > 0.5 ? 'higher' : d < -0.5 ? 'lower' : 'same'; };
      const pitchWord = () => (relMode ? REL_NAME[relOf(L, T)] : PITCH_NAME[pitchOf(L, T)]);
      const state = () => ({ length: L, tension: T, pitch: pitchOf(L, T), rel: relOf(L, T), sounds, last: last ? Object.assign({}, last) : null, stopped });

      const setVib = (a) => {
        const span = xb - X0; const sy = Math.abs(a) < 0.05 ? 0.05 : a;
        vib.setAttribute('transform', `translate(${X0} ${BY}) scale(${span.toFixed(2)} ${sy.toFixed(3)})`);
        vibShadow.setAttribute('transform', `translate(${X0} ${BY + 2.5}) scale(${span.toFixed(2)} ${sy.toFixed(3)})`);
      };
      const setEnv = (a) => {
        if (a < 0.6) { env.setAttribute('display', 'none'); return; }
        env.setAttribute('display', 'inline');
        env.setAttribute('transform', `translate(${X0} ${BY}) scale(${(xb - X0).toFixed(2)} ${a.toFixed(3)})`);
      };
      function layout() {
        const span = xb - X0;
        kit.transform(bridge, { x: xb });
        hitG.setAttribute('transform', `translate(${X0} ${BY}) scale(${span.toFixed(2)} 1)`);
        bandR.setAttribute('transform', `translate(${xb.toFixed(2)} ${BY}) scale(${(XR - xb).toFixed(2)} 1)`);
        const sw = 6.4 - T * 0.7;
        vibPath.setAttribute('stroke-width', (o.print ? sw + 2.5 : sw).toFixed(1));
        if (!o.print) bandRPath.setAttribute('stroke-width', sw.toFixed(1));
        vibShadowPath.setAttribute('stroke-width', sw.toFixed(1));
        kit.transform(peg, { r: (T - 1) * 40, cx: XR, cy: BY });
        kit.transform(knob, { x: TX(T) });
        bridge.setAttribute('aria-valuenow', String(L)); bridge.setAttribute('aria-valuetext', `길이 ${L}단계${L === 1 ? ' (가장 짧아요)' : L === 5 ? ' (가장 길어요)' : ''}`);
        knob.setAttribute('aria-valuenow', String(T)); knob.setAttribute('aria-valuetext', `팽팽함 ${T}단계${T === 1 ? ' (가장 느슨해요)' : T === 5 ? ' (가장 팽팽해요)' : ''}`);
        if (!vibrating) setVib(pull);
        paintReadout();
      }
      function paintReadout() {
        roPitch.textContent = drumFocus ? '높낮이: 고무줄로 알아봐요' : `높낮이: ${pitchWord()}`;
        roLoud.textContent = last ? `세기: ${last.source === 'drum' ? '작은북' : '고무줄'} ${loudName(last.strength)}` : '세기: 아직 소리 전';
        const n = last ? Math.max(1, Math.ceil(last.strength / 20)) : 0;
        const cs = ['mint', 'mint', 'buttercup', 'peach', 'rose'];
        meter.forEach((m, i) => m.setColor(i < n ? cs[i] : 'cream'));
      }

      // 떨림 애니메이션: 기본 진동(정상파) 하나, 진폭은 지수적으로 줄어든다
      function vibrate(a0, f) {
        cancelAnimationFrame(rafId);
        vibrating = true;
        const fv = 2.5 + Math.max(0, f - 100) / 520 * 6.5; const t0 = performance.now(); const tau = 0.75;
        if (reduce) { setVib(0); setEnv(a0); rafId = 0; setTimeout(() => { if (vibrating) { vibrating = false; setEnv(0); } }, 1400); return; }
        const frame = (now) => {
          if (!vibrating) return;
          const t = (now - t0) / 1000; const a = a0 * Math.exp(-t / tau);
          if (a < 0.4) { vibrating = false; setVib(0); setEnv(0); return; }
          setVib(a * Math.cos(2 * Math.PI * fv * t)); setEnv(a);
          rafId = requestAnimationFrame(frame);
        };
        rafId = requestAnimationFrame(frame);
      }
      function rippleRings(s, cx, cy) {
        if (reduce || o.print) return;
        rings.forEach((r, i) => {
          r.setAttribute('cx', cx); r.setAttribute('cy', cy);
          setTimeout(() => kit.tween(900, (p) => { r.setAttribute('transform', `translate(${cx} ${cy}) scale(${(0.6 + p * (0.8 + s)).toFixed(3)}) translate(${-cx} ${-cy})`); r.setAttribute('opacity', ((1 - p) * (0.25 + s * 0.6)).toFixed(3)); }, { ease: (x) => x }), i * 160);
        });
      }
      function pluck(s, opts = {}) {
        s = kit.clamp(s, 0.05, 1);
        const span = xb - X0; const f = freqOf(span, T); const pitch = pitchOf(L, T);
        last = { source: 'string', strength: Math.round(s * 100), pitch, length: L, tension: T }; sounds++; stopped = false; pull = 0; drumFocus = false;
        if (!opts.silent) tone(f, s);
        vibrate(4 + s * 32, f);
        rippleRings(s, 186, BY);
        paintReadout();
        kit.recorder.log('soundwave', state());
        setReveal(false);
        // 화면에 높낮이·세기 글자가 없으면 읽어 주는 말에도 넣지 않는다(화면 읽기 학생도 같은 판단 과제를 한다)
        const sayPitch = showPitch && revealed; const sayLoud = showLoud && revealed;
        const said = [sayPitch ? (relMode ? REL_NAME[relOf(L, T)] : PITCH_NAME[pitch]) : null, sayLoud ? loudName(last.strength) : null].filter(Boolean);
        if (!opts.quiet) kit.announce(`고무줄이 떨리며 소리가 나요. ${said.length ? `${said.join(', ')}예요.` : '떨림의 크기와 빠르기를 보고 귀로 비교해 보세요.'}${opts.tap ? ' 더 많이 당겼다 놓으면 크게 떨려요.' : ''}`);
      }
      function damp(opts = {}) {
        if (!vibrating) return false;
        vibrating = false; cancelAnimationFrame(rafId); setVib(0); setEnv(0); stopVoice();
        stopped = true;
        kit.recorder.log('soundwave', state());
        if (!opts.quiet) kit.announce('떨림을 멈추니 소리도 멈췄어요.');
        return true;
      }
      function jumpBits(s) {
        if (reduce) return;
        bits.forEach((b, i) => {
          const h = (10 + s * 100) * (0.7 + ((i * 37) % 10) / 16);
          const dx = ((i % 3) - 1) * (4 + s * 10); const spin = (i % 2 ? 1 : -1) * (90 + s * 270);
          const dur = 420 + s * 380;
          kit.tween(dur, (p) => kit.transform(b.g, { x: b.x + dx * Math.sin(Math.PI * p), y: b.y - h * 4 * p * (1 - p), r: spin * p }), { ease: (x) => x })
            .then(() => kit.tween(220, (p) => kit.transform(b.g, { y: b.y - h * 0.18 * 4 * p * (1 - p), r: spin }), { ease: (x) => x }));
        });
      }
      function wobbleHead(s) {
        if (reduce) return;
        kit.spring(1 - 0.05 - s * 0.08, 1, { stiffness: 420, damping: 9, onUpdate: (v) => kit.transform(head, { s: v }) });
      }
      function hitDrum(s, opts = {}) {
        s = kit.clamp(s, 0.05, 1);
        last = { source: 'drum', strength: Math.round(s * 100), pitch: null }; sounds++; stopped = false; drumFocus = true;
        if (!opts.silent) thump(s);
        wobbleHead(s); jumpBits(s); rippleRings(s, DX, DY);
        paintReadout();
        kit.recorder.log('soundwave', state());
        setReveal(false);
        if (!opts.quiet) kit.announce(`작은북이 떨려 종이 조각이 ${s >= 0.6 ? '높이' : s <= 0.4 ? '조금' : ''} 튀어 올랐어요.${showLoud && revealed ? ` ${loudName(last.strength)}예요.` : ''}`);
      }
      async function swing(s, opts) {
        const from = (stick.__pk || {}).y ?? REST;
        await kit.tween(110, (p) => kit.transform(stick, { y: from + (0 - from) * p }), { ease: (x) => x * x });
        hitDrum(s, opts);
        kit.spring(0, REST, { stiffness: 220, damping: 14, onUpdate: (v) => kit.transform(stick, { y: v }) });
        stickPull = 0;
      }
      const configChanged = () => { if (last && last.source === 'string') last = null; drumFocus = false; damp({ quiet: true }); stopped = false; setReveal(false); };

      // ---------- 조작 ----------
      if (!o.print) {
        // 고무줄 당기기
        let grabbing = false; let moved = false; let wasVib = false;
        hitG.addEventListener('pointerdown', (e) => {
          e.preventDefault(); hitG.setPointerCapture(e.pointerId);
          wasVib = damp(); // 떨리는 고무줄을 잡으면 떨림이 멈춘다
          grabbing = true; moved = false;
        });
        hitG.addEventListener('pointermove', (e) => {
          if (!grabbing) return;
          const p = st.point(e);
          const np = kit.clamp(p.y - BY, -40, 40);
          if (Math.abs(np) > 3) moved = true;
          if (!moved) return;
          pull = np; setVib(pull);
        });
        const release = () => {
          if (!grabbing) return; grabbing = false;
          if (moved && Math.abs(pull) >= 4) pluck(Math.abs(pull) / 40);
          else if (!moved && !wasVib) pluck(0.3, { tap: true }); // 터치 화면의 첫 시도는 대개 탭이다: 약하게 튕긴다
          else { pull = 0; if (!vibrating) setVib(0); }
        };
        hitG.addEventListener('pointerup', release); hitG.addEventListener('pointercancel', release);
        hitG.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault(); if (vibrating) damp({ quiet: true });
            pull = kit.clamp(pull + (e.key === 'ArrowUp' ? -10 : 10), -40, 40); setVib(pull);
            kit.announce(`고무줄을 ${Math.round(Math.abs(pull) / 10)}칸 당겼어요. Enter로 놓아요.`);
          } else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (pull) pluck(Math.abs(pull) / 40); else if (vibrating) damp(); else pluck(0.5);
          } else if (e.key === 'Escape') { if (damp()) e.preventDefault(); }
        });
        hitG.addEventListener('focus', () => vibPath.setAttribute('stroke', '#473B6B'));
        hitG.addEventListener('blur', () => vibPath.setAttribute('stroke', bandStroke));

        // 받침 옮기기(길이)
        const setLength = (nl, via) => {
          nl = kit.clamp(nl, 1, 5); const changed = nl !== L; L = nl;
          const to = X0 + spanOf(L); const from = xb;
          kit.spring(from, to, { stiffness: 260, damping: 18, onUpdate: (v) => { xb = v; layout(); } });
          if (changed || via === 'pointer') { configChanged(); kit.tick(); kit.recorder.log('soundwave', state()); kit.announce(`고무줄 길이 ${L}단계.${showPitch && revealed ? ` ${pitchWord()}가 나요.` : ''}`); }
          paintReadout();
        };
        let bGrab = null;
        bridge.addEventListener('pointerdown', (e) => { e.preventDefault(); bridge.setPointerCapture(e.pointerId); bGrab = st.point(e).x - xb; bridge.classList.add('pk-lifted'); damp({ quiet: true }); });
        bridge.addEventListener('pointermove', (e) => { if (bGrab == null) return; xb = kit.clamp(st.point(e).x - bGrab, X0 + spanOf(1), X0 + spanOf(5)); layout(); });
        const bEnd = () => { if (bGrab == null) return; bGrab = null; bridge.classList.remove('pk-lifted'); setLength(Math.round((xb - X0 - 100) / 42) + 1, 'pointer'); };
        bridge.addEventListener('pointerup', bEnd); bridge.addEventListener('pointercancel', bEnd);
        bridge.addEventListener('keydown', (e) => {
          const d = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1 }[e.key];
          if (d) { e.preventDefault(); setLength(L + d, 'keyboard'); }
        });

        // 팽팽함 손잡이
        const setTension = (nt) => {
          nt = kit.clamp(nt, 1, 5); const changed = nt !== T; T = nt;
          const from = (knob.__pk || {}).x ?? TX(T);
          layout();
          kit.spring(from, TX(T), { stiffness: 260, damping: 18, onUpdate: (v) => kit.transform(knob, { x: v }) });
          if (changed) { configChanged(); kit.tick(); kit.recorder.log('soundwave', state()); kit.announce(`팽팽함 ${T}단계.${showPitch && revealed ? ` ${pitchWord()}가 나요.` : ''}`); }
        };
        let kGrab = null;
        knob.addEventListener('pointerdown', (e) => { e.preventDefault(); knob.setPointerCapture(e.pointerId); kGrab = st.point(e).x - TX(T); knob.classList.add('pk-lifted'); });
        knob.addEventListener('pointermove', (e) => {
          if (kGrab == null) return;
          const x = kit.clamp(st.point(e).x - kGrab, TX(1), TX(5));
          const nt = Math.round((x - 100) / 40) + 1;
          if (nt !== T) { T = nt; configChanged(); layout(); }
          kit.transform(knob, { x });
        });
        const kEnd = () => {
          if (kGrab == null) return; kGrab = null; knob.classList.remove('pk-lifted');
          const from = (knob.__pk || {}).x ?? TX(T);
          kit.spring(from, TX(T), { stiffness: 260, damping: 18, onUpdate: (v) => kit.transform(knob, { x: v }) });
          kit.tick(); kit.recorder.log('soundwave', state()); kit.announce(`팽팽함 ${T}단계.${showPitch && revealed ? ` ${pitchWord()}가 나요.` : ''}`);
        };
        knob.addEventListener('pointerup', kEnd); knob.addEventListener('pointercancel', kEnd);
        knob.addEventListener('keydown', (e) => {
          const d = { ArrowLeft: -1, ArrowDown: -1, ArrowRight: 1, ArrowUp: 1 }[e.key];
          if (d) { e.preventDefault(); setTension(T + d); }
        });

        // 북채
        let sGrab = null;
        const setStick = (p) => { stickPull = kit.clamp(p, 0, PULL_MAX); kit.transform(stick, { y: REST - stickPull }); };
        stick.addEventListener('pointerdown', (e) => { e.preventDefault(); stick.setPointerCapture(e.pointerId); sGrab = { y: st.point(e).y, p: stickPull, moved: false }; stick.classList.add('pk-lifted'); });
        stick.addEventListener('pointermove', (e) => { if (!sGrab) return; const dy = sGrab.y - st.point(e).y; if (Math.abs(dy) > 3) sGrab.moved = true; if (sGrab.moved) setStick(sGrab.p + dy); });
        const sEnd = () => {
          if (!sGrab) return; const g = sGrab; sGrab = null; stick.classList.remove('pk-lifted');
          swing(g.moved && stickPull >= 4 ? stickPull / PULL_MAX : 0.5);
        };
        stick.addEventListener('pointerup', sEnd); stick.addEventListener('pointercancel', sEnd);
        stick.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); setStick(stickPull + (e.key === 'ArrowUp' ? 16 : -16)); kit.announce(`북채를 ${Math.round(stickPull / 16)}칸 올렸어요. Enter로 쳐요.`); }
          else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); swing(stickPull ? stickPull / PULL_MAX : 0.5); }
        });
      }

      // ---------- 멈춘 그림(활동지·상태 복원) ----------
      function freeze() {
        while (marks.firstChild) marks.removeChild(marks.firstChild);
        setEnv(0); setVib(0);
        bits.forEach((b) => kit.transform(b.g, { x: b.x, y: b.y, r: 0 }));
        if (!last) return;
        const s = last.strength / 100;
        if (last.source === 'string') { setEnv(4 + s * 32); return; }
        bits.forEach((b, i) => {
          const h = (10 + s * 100) * (0.7 + ((i * 37) % 10) / 16);
          kit.transform(b.g, { x: b.x, y: b.y - h, r: (i % 2 ? 1 : -1) * (20 + s * 40) });
          NS('line', { x1: b.x, y1: b.y - h + 10, x2: b.x, y2: b.y - 6, stroke: '#544B42', 'stroke-width': 1.2, 'stroke-dasharray': '3 4', class: 'pk-text' }, marks);
        });
      }

      function setState(s) {
        s = s || {};
        damp({ quiet: true });
        L = kit.clamp(s.length ?? init.length, 1, 5); T = kit.clamp(s.tension ?? init.tension, 1, 5);
        xb = X0 + spanOf(L); sounds = s.sounds ?? (s.last ? 1 : 0); last = s.last ? Object.assign(s.last.source === 'string' ? { pitch: pitchOf(L, T), length: L, tension: T } : { pitch: null }, s.last) : null;
        drumFocus = !!(last && last.source === 'drum');
        stopped = !!s.stopped; pull = 0;
        layout();
        if (o.print || s.freeze) freeze();
      }
      setState(init);

      let hinting = false;
      function celebrate() {
        if (hinting) return;
        if (o.print || reduce) return;
        jumpBits(0.22); wobbleHead(0.2);
        kit.spring(-10, 0, { stiffness: 380, damping: 9, onUpdate: (v) => meter.forEach((m, i) => kit.transform(m.g, { y: v * (0.4 + i * 0.15) })) });
      }

      const cfgFor = (pitch) => (pitch === 'high' || pitch === 'higher' ? { length: 1, tension: 5 } : pitch === 'low' || pitch === 'lower' ? { length: 5, tension: 1 } : { length: 3, tension: 3 });
      const strengthFor = (t) => (t.loud === true ? 0.85 : t.loud === false ? 0.25 : 0.55);
      const isRel = (p) => p === 'higher' || p === 'lower';
      // 학생이 실제로 바꾼 변인만 말한다(변인 통제) — 처음 상태와 비교
      const changes = (l, tt) => {
        const out = [];
        if (l < ref.L) out.push('떨리는 부분을 짧게'); else if (l > ref.L) out.push('떨리는 부분을 길게');
        if (tt > ref.T) out.push('고무줄을 팽팽하게'); else if (tt < ref.T) out.push('고무줄을 느슨하게');
        return out;
      };
      const HINT_UP = '받침을 옮겨 떨리는 고무줄을 짧게 하거나, 손잡이를 팽팽하게 쪽으로 옮긴 뒤 다시 튕겨요.';
      const HINT_DOWN = '받침을 옮겨 떨리는 고무줄을 길게 하거나, 손잡이를 느슨하게 쪽으로 옮긴 뒤 다시 튕겨요.';
      const HINT_LOUD = (drum) => `${drum ? '북채를 더 높이 올렸다가 놓으면 세게 쳐서' : '고무줄을 더 많이 당겼다 놓으면 떨림이 커지고'} 큰 소리가 나요. 세기 막대가 4칸 이상 차면 큰 소리예요. 소리를 꺼 두었다면 ${drum ? '종이 조각이 튀는 높이' : '떨리는 폭'}로 알 수 있어요.`;
      const HINT_QUIET = (drum) => `${drum ? '북채를 조금만 올렸다가 놓으면 약하게 쳐서' : '고무줄을 조금만 당겼다 놓으면 떨림이 작아서'} 작은 소리가 나요. 세기 막대가 2칸 이하면 작은 소리예요.`;

      const judgeNow = (t) => {
        t = t || {};
        const no = (feedback, hint) => ({ correct: false, feedback, hint });
        const yes = (feedback) => { celebrate(); return { correct: true, feedback }; };
        if (t.stopped) {
          if (stopped) return yes('맞아요! 떨림을 멈추니 소리도 멈췄어요.');
          if (!sounds) return { correct: false, incomplete: true, feedback: '먼저 고무줄을 당겼다 놓아 소리를 내요.', hint: '고무줄을 튕긴 뒤, 떨리고 있을 때 고무줄을 한 번 눌러요.' };
          return no('고무줄이 떨리는 동안 고무줄을 잡아 보세요.', '고무줄을 튕기자마자 고무줄을 한 번 눌러요(키보드는 Enter). 떨림이 멈추면 소리도 멈춰요.');
        }
        const src = t.source || (t.pitch ? 'string' : null);
        if (!last || (src && last.source !== src)) {
          // 아직 아무 소리도 내지 않은 확인은 시도로 세지 않는다
          if (!last) return { correct: false, incomplete: true, feedback: src === 'drum' ? '북채를 올렸다 놓아 작은북을 먼저 쳐 보세요.' : src ? '고무줄을 당겼다 놓아 먼저 소리를 내 보세요.' : '아직 소리를 내지 않았어요.', hint: src === 'drum' ? '북채를 위로 끌어 올렸다가 놓으면 작은북을 쳐요.' : '고무줄을 위나 아래로 끌어 당겼다가 놓아요.' };
          return no(src === 'drum' ? '이번에는 작은북을 쳐 보세요.' : (last && last.source === 'drum' ? '이번에는 고무줄을 튕겨 보세요.' : '고무줄을 당겼다 놓아 소리를 내 보세요.'),
            src === 'drum' ? '북채를 위로 끌어 올렸다가 놓으면 작은북을 쳐요.' : '고무줄을 위나 아래로 끌어 당겼다가 놓아요. 길이나 팽팽함을 바꾸었다면 다시 튕겨야 해요.');
        }
        const lL = last.length ?? L; const lT = last.tension ?? T;
        const ch = changes(lL, lT);
        // 변인 통제: 한 가지만 바꾸라는 문항에서 다른 변인도 바꾸었으면 결과가 맞아도 무엇 때문인지 알 수 없다
        if (t.only === 'length' && lT !== ref.T) return no('손잡이(팽팽함)는 처음 그대로 두어야 해요. 한 가지만 바꿔야 무엇 때문에 소리가 달라졌는지 알 수 있어요.', '처음으로를 눌러 되돌린 뒤, 받침만 옮기고 튕겨요.');
        if (t.only === 'tension' && lL !== ref.L) return no('받침은 처음 자리에 그대로 두어야 해요. 한 가지만 바꿔야 무엇 때문에 소리가 달라졌는지 알 수 있어요.', '처음으로를 눌러 되돌린 뒤, 손잡이만 옮기고 튕겨요.');
        if (isRel(t.pitch)) {
          const want = t.pitch; const got = relOf(lL, lT); const up = want === 'higher';
          if (got !== want) {
            if (got === 'same' && !ch.length) {
              return no(`높낮이는 처음과 같아요. ${last.strength >= LOUD ? '세게 튕기면 소리가 커질 뿐 높아지지 않아요.' : last.strength <= QUIET ? '약하게 튕기면 소리가 작아질 뿐 낮아지지 않아요.' : '튕기는 세기로는 높낮이가 바뀌지 않아요.'}`, up ? HINT_UP : HINT_DOWN);
            }
            if (got === 'same') return no('길이와 팽팽함을 함께 바꾸어서 높낮이가 처음과 같아졌어요.', up ? HINT_UP : HINT_DOWN);
            return no(`${ch.join(' 하고 ')} 했더니 ${REL_NAME[got]}가 났어요.`, up ? HINT_UP : HINT_DOWN);
          }
        } else if (t.pitch && last.pitch !== t.pitch) {
          return no(`지금은 ${PITCH_NAME[last.pitch]}가 났어요.${!ch.length && last.strength >= LOUD ? ' 세게 튕기면 소리가 커질 뿐 높아지지 않아요.' : ''}`, t.pitch === 'high' ? HINT_UP : HINT_DOWN);
        }
        const pitchOk = t.pitch ? '높낮이는 맞았어요. 그런데 ' : '';
        if (t.loud === true && last.strength < LOUD) return no(`${pitchOk}소리가 작았어요.`, HINT_LOUD(src === 'drum'));
        // 높낮이를 맞힌 뒤 세기만 틀렸으면, 높낮이 조작을 되돌리지 않게 할 일 하나만 짚는다
        if (t.loud === false && last.strength > QUIET) return no(`${pitchOk}소리가 너무 컸어요.${t.pitch && src !== 'drum' ? ' 받침과 손잡이는 그대로 두고, 고무줄만 조금 당겼다 놓아 보세요.' : ''}`, `${t.pitch && src !== 'drum' ? '높낮이는 받침·손잡이로, 세기는 당기는 정도로 정해져요. ' : ''}${HINT_QUIET(src === 'drum')}`);
        if (t.loud === true && t.pitch && last.strength < LOUD) return no(`${pitchOk}소리가 작았어요. 받침과 손잡이는 그대로 두고, 고무줄을 더 많이 당겼다 놓아 보세요.`, `높낮이는 받침·손잡이로, 세기는 당기는 정도로 정해져요. ${HINT_LOUD(false)}`);
        if (t.pitch) {
          const up = t.pitch === 'higher' || t.pitch === 'high';
          const how = ch.length ? `${ch.join(' 하고 ')} 하니 떨림이 ${up ? '빨라져' : '느려져'} ` : '';
          const what = isRel(t.pitch) ? REL_NAME[t.pitch] : PITCH_NAME[t.pitch];
          if (t.loud === false) return yes(`맞아요! ${how}${what}가 났고, 조금만 당겨서 작은 소리예요. 높낮이와 세기는 서로 달라요.`);
          return yes(`맞아요! ${how}${what}가 났어요.`);
        }
        if (t.loud === true) return yes(src === 'drum' ? '맞아요! 세게 치니 떨림이 커서 종이 조각이 높이 튀었어요.' : '맞아요! 많이 당길수록 크게 떨리고 큰 소리가 나요.');
        if (t.loud === false) return yes(src === 'drum' ? '맞아요! 약하게 치니 떨림이 작아서 종이 조각이 조금만 튀었어요.' : '맞아요! 조금 당기니 작게 떨리고 작은 소리가 나요.');
        return yes(`맞아요! 소리가 날 때 ${last.source === 'drum' ? '작은북이' : '고무줄이'} 떨렸어요.`);
      };
      return {
        getState: state,
        setState,
        setTarget(t) { relMode = !!(t && isRel(t.pitch)); paintReadout(); },
        reset() { setState(init); kit.transform(stick, { y: REST }); stickPull = 0; },
        // 다 했지만 틀린 상태(모의 수업·검사용) — 흔한 오개념 쪽으로: 높은 소리를 내라는데 길이·팽팽함은 반대로 두고 세게만 튕기기,
        // 큰 소리를 내라는데 약하게, 떨림 멈추기 문항에서 튕기기만 하기
        wrongAnswer(t) {
          t = t || {};
          const src = t.source || 'string';
          const shot = (cfg, strength) => Object.assign({}, cfg, { sounds: 1, stopped: false, last: Object.assign({ source: src, strength }, src === 'string' ? { length: cfg.length, tension: cfg.tension } : {}) });
          const here = { length: ref.L, tension: ref.T };
          if (t.stopped) return shot(here, 60);
          if (t.pitch) {
            const opp = { higher: 'lower', high: 'low', lower: 'higher', low: 'high' }[t.pitch] || 'low';
            const cfg = cfgFor(opp);
            if (t.only === 'length') cfg.tension = ref.T; else if (t.only === 'tension') cfg.length = ref.L;
            return shot(cfg, t.loud === false ? 25 : 85);
          }
          if (t.loud === true) return shot(here, 25);
          if (t.loud === false) return shot(here, 85);
          // 무엇이든 소리를 내면 되는 문항은 다른 물체를 울린 상태(작은북을 치라는데 고무줄 튕기기)
          const other = src === 'drum' ? 'string' : 'drum';
          return { length: ref.L, tension: ref.T, sounds: 1, stopped: false, last: Object.assign({ source: other, strength: 55 }, other === 'string' ? { length: ref.L, tension: ref.T } : {}) };
        },
        solve(t) {
          t = t || {};
          const cfg = t.pitch ? cfgFor(t.pitch) : { length: L, tension: T };
          if (t.only === 'length') cfg.tension = ref.T; else if (t.only === 'tension') cfg.length = ref.L;
          setState(Object.assign({}, cfg));
          if (t.stopped) { pluck(0.6, { silent: true, quiet: true }); damp({ quiet: true }); return; }
          if ((t.source || 'string') === 'drum') hitDrum(strengthFor(t), { silent: true, quiet: true });
          else pluck(strengthFor(t), { silent: true, quiet: true });
        },
        // 확인 전 숨김(reveal:'after-check'): 맞힌 확인 뒤에만 읽기 값을 보인다. 힌트는 확인이 아니라 아무것도 드러내지 않는다
        check(t, opts) {
          const r = judgeNow(t);
          if (r.correct && !(opts && opts.forHint)) setReveal(true);
          return r;
        },
        // 새 힌트 계약: 1단계는 늘 열리고 개념만 말한다. 지금 상태가 맞아도 '맞아요'라고 알려 주지 않는다(힌트가 정답 확인 단추가 되지 않게).
        hint(t, opts) {
          t = t || {}; const lv = hintLevel(opts);
          const concept = t.stopped ? '소리가 나는 물체는 떨리고 있어요. 떨림을 멈추게 하면 소리는 어떻게 될지 생각해 봐요.'
            : t.only ? '한 번에 한 가지만 바꾸어야 무엇 때문에 소리가 달라졌는지 알 수 있어요. 문제에서 바꾸라고 한 것만 움직여요.'
              : t.pitch && t.loud != null ? '소리의 높낮이와 세기는 서로 달라요. 높낮이는 떨리는 부분의 길이와 팽팽함으로, 세기는 얼마나 크게 떨리게 하는지로 정해져요.'
                : t.pitch ? '소리의 높낮이는 무엇이 얼마나 빠르게 떨리는지와 관계있어요. 떨리는 부분의 길이와 팽팽함 가운데 무엇을 바꿀 수 있나요?'
                  : t.loud != null ? '소리의 세기는 떨림의 크기와 관계있어요. 떨림을 크게, 또는 작게 하려면 어떻게 소리를 내야 할까요?'
                    : '소리가 날 때 물체를 잘 보세요. 떨림이 잘 보이지 않으면 종이 조각처럼 함께 움직이는 것을 살펴봐요.';
          hinting = true;
          try {
            const r = judgeNow(t);
            if (lv === 1 || r.correct) return { hint: concept, level: 1 };
            if (lv === 2) return { hint: r.feedback || concept, level: 2 };
            return { hint: r.hint || r.feedback || '', level: 3 };
          } finally { hinting = false; }
        },
        async demo(t) {
          t = t || {};
          if (t.pitch) {
            const cfg = cfgFor(t.pitch); const fx = xb; const fk = TX(T);
            L = cfg.length; T = cfg.tension; configChanged();
            await kit.tween(700, (p) => { xb = fx + (X0 + spanOf(L) - fx) * p; layout(); kit.transform(knob, { x: fk + (TX(T) - fk) * p }); });
            layout();
          }
          const s = strengthFor(t);
          if ((t.source || 'string') === 'drum') {
            await kit.tween(500, (p) => { stickPull = s * PULL_MAX * p; kit.transform(stick, { y: REST - stickPull }); });
            await kit.wait(150); await swing(s);
          } else if (t.stopped) {
            pluck(0.6); await kit.wait(500); damp();
          } else {
            await kit.tween(500, (p) => { pull = -s * 40 * p; setVib(pull); });
            await kit.wait(120); pluck(s);
          }
          await kit.wait(1200);
        },
      };
    },
  });
})(window.PaperKit);
