/* 분수 피자·띠 조각 — 종이 피자(원)나 종이띠를 똑같이 n조각으로 자르고, 조각을 눌러 색칠한다.
 * 색칠하면 조각이 톡 들렸다 내려앉고(피자는 토핑이 올라간다), 옆 칸에 분수가 나타난다.
 * 옵션: shape 'pizza'|'strip', min/max(조각 수 범위), startN(처음 조각 수, 기본 1 = 자르지 않은 전체),
 *       color(색칠 색), showTerms(쉬움: 분자·분모 뜻 표시), hideFraction(도전: 분수 읽기 숨김),
 *       judge(‘똑같이 나누었나요?’ 판단 단추 + ‘겹쳐 보기’ — 조각 수 단추·색칠은 잠김. 판단이 틀리면 겹쳐 본 뒤에만 다시 고를 수 있다),
 *       judgeWhy(도전: 똑같지 않으면 가장 큰 조각도 눌러 근거를 보인다),
 *       write(거꾸로: 이미 색칠된 그림을 보고 분자·분모를 단추로 정해 분수로 쓴다 — 조각은 잠김),
 *       frame(활동지: 그림 옆에 빈 분수 쓰기 틀), print(활동지: 단추·분수 숨김, 색칠은 빗금),
 *       freeCut(학생이 칼집을 직접 옮겨 나눈다 — 띠는 세로 칼집을 좌우로 끌고, 피자는 가장자리 손잡이를 돌린다.
 *               cutsCount: 움직이는 칼집 수(띠 = 조각 수 − 1, 피자 = 조각 수 − 1, 피자의 12시 칼집은 고정). 둘 다 24칸 눈금에 붙는다.
 *               ticks:false면 눈금을 숨긴다(도전). 똑같은지 여부는 확인을 누르기 전에는 보여 주지 않는다),
 *       locked(처음부터 색칠되어 지울 수 없는 조각 번호 — 분수의 덧셈), lockColor(그 조각 색, 기본 peach),
 *       revealAfterCheck(분수 읽기 칸을 확인을 누른 뒤에만 보인다 — 다시 조작하면 또 숨는다)
 * 상태: { shape, n, cuts: null|[...], colored: [조각 번호], judge: null|true|false, equal, num, looked, picked, wNum, wDen, firstGuess }
 *   cuts — 피자: 자른 선의 각도(0°=12시, 시계 방향) 목록, 띠: 0~1 사이 안쪽 자른 자리 목록. null이면 똑같이 n조각.
 * target: { den, num? } (똑같이 den조각, 그중 num조각 색칠 / write면 분모·분자 쓰기) / { equal: true|false } (판단)
 *         / { proper: true, minDen?, lessThanHalf? } (짝 놀이: 분자가 분모보다 작은 분수, 조건이 붙을 수 있다)
 */
(function (K) {
  'use strict';
  // 수(한자어 읽기: 일·이·삼…십) 뒤 조사: 받침 유무와 ㄹ 받침(으로/로)
  const jong = (v) => { const d = v % 10; if (d === 0) return v === 0 ? 'ng' : 'b'; return ['', 'l', '', 'm', '', '', 'g', 'l', 'l', ''][d]; };
  const eun = (v) => (jong(v) ? '은' : '는');
  const eul = (v) => (jong(v) ? '을' : '를');
  const ro = (v) => (jong(v) && jong(v) !== 'l' ? '으로' : '로');
  const ieyo = (v) => (jong(v) ? '이에요' : '예요');
  const reduceMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // 힌트 단계(hint(target, { level, attempts })): 1 = 개념·전략만(늘 열림, 문항의 수를 말하지 않는다), 2 = 한 번 틀린 뒤 지금 어긋난 단계, 3 = 두 번 틀린 뒤 풀이 한 걸음
  const hintLevel = (opts) => { const a = (opts && opts.attempts) || 0; const l = (opts && opts.level) || 1; return Math.max(1, Math.min(l, a >= 2 ? 3 : a >= 1 ? 2 : 1)); };

  K.registerTool('fraction', {
    name: '분수 피자·띠 조각',
    create(box, o, kit) {
      const P = kit.palette;
      const shape = o.shape === 'strip' ? 'strip' : 'pizza';
      const print = !!o.print;
      const minN = o.min || 1; const maxN = o.max || (shape === 'pizza' ? 12 : 10);
      const fillColor = o.color || (shape === 'pizza' ? 'rose' : 'mint');
      const offColor = shape === 'pizza' ? 'buttercup' : 'sky';
      const offFill = shape === 'pizza' ? '#FFF6D6' : '#F4FAFC';
      const vb = print ? (shape === 'pizza' ? [720, 360] : [540, 150]) : [560, 400];
      const freeCut = !print && !o.judge && !o.write && !!o.freeCut;
      const GRID = 24; // 칼집 눈금 칸 수(2·3·4·6·8·12로 똑같이 나눌 수 있다)
      const locked = new Set(o.locked || []);
      const lockColor = o.lockColor || 'peach';
      const revealMode = !print && (!!o.revealAfterCheck || freeCut);
      let revealed = !revealMode;
      const st = kit.stage(box, { viewBox: vb, label: `${shape === 'pizza' ? '종이 피자' : '종이띠'} 분수 교구. ${freeCut ? '칼집을 옮겨 나누고' : '조각 수를 정하고'} 조각을 눌러 색칠하세요.`, background: print ? false : undefined });
      const geo = shape === 'pizza'
        ? (print ? { cx: 360, cy: 180, r: 150 } : { cx: 195, cy: 200, r: 156 })
        : (print ? { x: 20, y: 25, w: 500, h: 100 } : { x: 30, y: 62, w: 500, h: 108 });
      const ctrl = shape === 'pizza' ? { ox: 470, oy: 292, rx: 392, ry: 36, rw: 156, rh: 190 } : { ox: 420, oy: 288, rx: 30, ry: 198, rw: 270, rh: 182 };
      const baseL = st.layer('base'); const partL = st.layer('parts'); const uiL = st.layer('ui');

      // 빗금(활동지에서 색칠한 조각 표시: 흑백 인쇄에서도 구분된다)
      const hatchId = `fr-hatch-${Math.random().toString(36).slice(2, 8)}`;
      const pat = kit.el('pattern', { id: hatchId, width: 6, height: 6, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, st.defs);
      kit.el('line', { x1: 0, y1: 0, x2: 0, y2: 6, stroke: '#000', 'stroke-width': 2.6 }, pat);
      // 덧셈 활동지: 처음 분수(잠긴 조각)는 점무늬, 더한 조각은 빗금 — 흑백에서도 '처음 + 더한 양'이 구별된다
      const dotsId = `${hatchId}-dots`;
      const pat2 = kit.el('pattern', { id: dotsId, width: 8, height: 8, patternUnits: 'userSpaceOnUse' }, st.defs);
      kit.el('circle', { cx: 4, cy: 4, r: 1.9, fill: '#000' }, pat2);
      // 활동지: 빈 분수 쓰기 틀(□ 위, 분수선, □ 아래) — 분수선 있는 분수 쓰기 연습
      if (print && o.frame && shape === 'pizza') {
        // 3학년 숫자 쓰기에 넉넉하게(칸 80) 피자 가장자리에서 띄운다
        const fx = 610;
        [74, 190].forEach((y) => kit.el('rect', { x: fx - 40, y, width: 80, height: 80, rx: 6, fill: 'none', stroke: '#222222', 'stroke-width': 2.6, 'stroke-dasharray': '6 4' }, st.svg));
        kit.el('line', { x1: fx - 54, y1: 172, x2: fx + 54, y2: 172, stroke: '#3D352E', 'stroke-width': 4, class: 'pk-text' }, st.svg);
      }

      if (shape === 'pizza') {
        kit.piece(st, baseL, { shape: { type: 'circle', r: geo.r + 13, cx: geo.cx, cy: geo.cy }, color: 'peach', depth: 3, texture: !print });
        kit.piece(st, baseL, { shape: { type: 'circle', r: geo.r + 4, cx: geo.cx, cy: geo.cy }, color: 'buttercup', depth: 1, fill: P.buttercup.light, flat: true });
      } else {
        kit.piece(st, baseL, { shape: { type: 'rect', w: geo.w + 16, h: geo.h + 16, x: geo.x - 8, y: geo.y - 8, rx: 12 }, color: 'lavender', depth: 3, texture: !print, fill: P.lavender.light });
      }

      let n = 1; let cuts = null; let colored = new Set(); let judge = null; let partEls = [];
      let looked = 0; let needLook = false; let picked = null; let wNum = null; let wDen = null;
      // 판단 문항: 첫 확인 전에는 겹쳐 보기를 열지 않는다(눈어림 먼저). 첫 판단은 결과에 남긴다.
      let checkedOnce = false; let firstGuess = null;
      const hide = () => { if (revealMode) revealed = false; };
      const sizes = () => bounds().map(([a, z]) => z - a);
      const biggest = () => { const sz = sizes(); const m = Math.max(...sz); return sz.map((v, i) => (Math.abs(v - m) < (shape === 'pizza' ? 0.5 : 0.002) ? i : -1)).filter((i) => i >= 0); };
      const bounds = () => {
        if (shape === 'pizza') { const c = cuts ? [...cuts].sort((a, b) => a - b) : Array.from({ length: n }, (_, i) => (360 * i) / n); return c.map((a, i) => [a, i + 1 < c.length ? c[i + 1] : c[0] + 360]); }
        const c = [0, ...(cuts ? [...cuts].sort((a, b) => a - b) : Array.from({ length: n - 1 }, (_, i) => (i + 1) / n)), 1];
        return c.slice(1).map((b, i) => [c[i], b]);
      };
      const isEqual = () => { if (!cuts) return true; const b = bounds(); const s = b.map(([a, z]) => z - a); return s.every((v) => Math.abs(v - s[0]) < (shape === 'pizza' ? 0.5 : 0.002)); };
      const rad = (d) => (d * Math.PI) / 180;

      function buildParts(animate) {
        partEls.forEach((p) => p.g.remove());
        const b = bounds();
        partEls = b.map(([a, z], i) => {
          const g = kit.el('g', { class: 'fr-part' }, partL);
          let shp; let lift; let home; const deco = kit.el('g', { 'pointer-events': 'none' });
          if (shape === 'pizza') {
            const R = geo.r; const m = rad((a + z) / 2);
            if (b.length === 1) shp = { type: 'circle', r: R };
            else {
              const x1 = Math.sin(rad(a)) * R; const y1 = -Math.cos(rad(a)) * R; const x2 = Math.sin(rad(z)) * R; const y2 = -Math.cos(rad(z)) * R;
              shp = { type: 'path', d: `M0 0 L${x1.toFixed(2)} ${y1.toFixed(2)} A${R} ${R} 0 ${z - a > 180 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z` };
            }
            const gap = b.length > 1 ? 4 : 0;
            home = { x: geo.cx + Math.sin(m) * gap, y: geo.cy - Math.cos(m) * gap };
            lift = { x: Math.sin(m) * 12, y: -Math.cos(m) * 12 };
            // 토핑(페퍼로니): 색칠하면 올라간다
            const span = z - a; const spots = b.length === 1 ? [[0.55, 0], [0.55, 120], [0.55, 240], [0, 0]] : span >= 80 ? [[0.62, -0.22], [0.62, 0.22], [0.32, 0]] : span >= 40 ? [[0.62, 0], [0.34, 0]] : [[0.66, 0]];
            spots.forEach(([rr, off]) => {
              const ang = b.length === 1 ? rad(off) : m + off * rad(span);
              kit.piece(st, deco, { shape: { type: 'circle', r: Math.min(13, 4 + span / 10), cx: Math.sin(ang) * R * rr, cy: -Math.cos(ang) * R * rr }, color: 'rose', depth: 1, fill: '#D9666F', flat: true });
            });
          } else {
            const w = (z - a) * geo.w;
            shp = { type: 'rect', w: Math.max(4, w - (b.length > 1 ? 5 : 0)), h: geo.h, rx: 6 };
            home = { x: geo.x + ((a + z) / 2) * geo.w, y: geo.y + geo.h / 2 };
            lift = { x: 0, y: -12 };
            kit.piece(st, deco, { shape: { type: 'circle', r: Math.min(9, w / 5) }, color: 'buttercup', depth: 0, flat: true, y: -geo.h / 4 });
          }
          const pc = kit.piece(st, g, { shape: shp, color: 'cream', depth: 2 });
          g.appendChild(deco);
          let hatchEl = null;
          if (print) {
            const fill = `url(#${locked.has(i) ? dotsId : hatchId})`; const a2 = { class: 'fr-hatch', 'pointer-events': 'none', fill };
            hatchEl = shp.type === 'circle' ? kit.el('circle', Object.assign({ r: shp.r }, a2), g)
              : shp.type === 'rect' ? kit.el('rect', Object.assign({ x: -shp.w / 2, y: -shp.h / 2, width: shp.w, height: shp.h, rx: shp.rx }, a2), g)
                : kit.el('path', Object.assign({ d: shp.d }, a2), g);
          }
          const part = { g, pc, deco, home, lift, i, hatchEl, a, z, shp };
          kit.transform(g, { x: home.x, y: home.y, s: 1 });
          if (!print && !o.judge && !o.write) bindPart(part);
          else if (!print && o.judge && o.judgeWhy) bindPick(part);
          return part;
        });
        paintParts();
        if (animate && !reduceMotion && b.length > 1) {
          // 칼질: 조각들이 가운데로 모였다가 스프링으로 벌어진다
          kit.spring(1, 0, { stiffness: 200, damping: 11, velocity: -2, onUpdate: (v) => partEls.forEach((p) => { const k = shape === 'pizza' ? 0.9 : 0.6; kit.transform(p.g, { x: p.home.x + p.lift.x * v * k, y: p.home.y + (shape === 'pizza' ? p.lift.y * v * k : 0), s: 1 - Math.abs(v) * 0.04 }); }) });
        }
      }
      function paintParts() {
        const eq = isEqual();
        partEls.forEach((p) => {
          const on = colored.has(p.i);
          p.pc.setColor(on ? (locked.has(p.i) ? lockColor : fillColor) : offColor);
          if (!on) p.pc.face.setAttribute('fill', offFill);
          kit.transform(p.deco, { s: on && !print ? 1 : 0 });
          if (p.hatchEl) p.hatchEl.setAttribute('display', on ? 'inline' : 'none');
          if (picked === p.i) { p.pc.face.setAttribute('stroke', P.ink.base); p.pc.face.setAttribute('stroke-width', 4); }
          else if (o.judgeWhy) { p.pc.face.setAttribute('stroke', 'rgba(255,255,255,0.55)'); p.pc.face.setAttribute('stroke-width', 1); }
          p.g.setAttribute('aria-pressed', String(o.judgeWhy ? picked === p.i : on));
          // 판단 문항에서는 '크기가 다른 조각'이라고 읽어 주면 답을 알려 주는 셈이라 말하지 않는다
          p.g.setAttribute('aria-label', `${partEls.length}조각 중 ${p.i + 1}번째 조각${on ? (locked.has(p.i) ? ', 처음부터 색칠됨' : ', 색칠함') : ''}${eq || o.judge || freeCut ? '' : ' (크기가 다른 조각)'}${picked === p.i ? ', 가장 크다고 고름' : ''}`);
        });
        paintReadout();
      }
      function pop(p) {
        if (reduceMotion) return;
        kit.spring(1, 0, { stiffness: 260, damping: 9, velocity: 4, onUpdate: (v) => kit.transform(p.g, { x: p.home.x + p.lift.x * v, y: p.home.y + p.lift.y * v, s: 1 + v * 0.05 }) });
        if (colored.has(p.i)) kit.spring(1.8, 1, { stiffness: 300, damping: 10, onUpdate: (v) => kit.transform(p.deco, { s: v }) });
      }
      function toggle(p, via) {
        if (locked.has(p.i)) { kit.tick('no'); kit.announce('처음부터 색칠되어 있던 조각이에요. 지울 수 없어요.'); pop(p); return; }
        if (colored.has(p.i)) colored.delete(p.i); else colored.add(p.i);
        hide();
        paintParts(); pop(p); kit.tick(colored.has(p.i) ? 'ok' : undefined); note('');
        kit.announce(readText());
        kit.recorder.log('fraction', Object.assign({ via }, state()));
      }
      // 조각은 누르는 단추라 pk-draggable을 달지 않는다 — 달면 무대가 그 위의 touchmove를 막아 피자·띠 위에서 화면이 굴러가지 않았다
      // (끄는 칼집 손잡이는 kit.drag·kit.rotate가 스스로 pk-draggable·pk-rotatable을 단다)
      function bindPick(p) {
        p.g.setAttribute('tabindex', '0'); p.g.setAttribute('role', 'button');
        const pick = (via) => { picked = p.i; paintParts(); pop(p); kit.tick(); kit.announce(`${p.i + 1}번째 조각을 가장 큰 조각으로 골랐어요.`); kit.recorder.log('fraction', Object.assign({ via }, state())); };
        p.g.addEventListener('click', () => pick('pointer'));
        p.g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick('keyboard'); } });
      }
      function bindPart(p) {
        p.g.setAttribute('tabindex', '0'); p.g.setAttribute('role', 'button');
        p.g.addEventListener('click', () => toggle(p, 'pointer'));
        p.g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(p, 'keyboard'); } });
      }

      // ---- 분수 읽기 칸 ----
      const read = print || o.hideFraction || o.judge || o.write ? null : (() => {
        const g = kit.el('g', null, uiL);
        kit.piece(st, g, { shape: { type: 'rect', w: ctrl.rw, h: ctrl.rh, x: ctrl.rx, y: ctrl.ry, rx: 16 }, color: 'cream', depth: 2 });
        const t = (y, size, fill, dx = 0) => kit.el('text', { x: ctrl.rx + ctrl.rw / 2 + dx, y, 'text-anchor': 'middle', 'font-size': size, class: 'pk-text', fill }, g);
        const wide = shape === 'strip';
        const fx = wide ? -62 : 0; const fy = ctrl.ry + (wide ? 82 : 72);
        const num = t(fy - 12, 38, P.rose.dark, fx);
        const bar = kit.el('rect', { x: ctrl.rx + ctrl.rw / 2 + fx - 26, y: fy, width: 52, height: 4, rx: 2, fill: P.ink.base, class: 'pk-text' }, g);
        const den = t(fy + 42, 38, P.ink.base, fx);
        const word = t(wide ? fy - 8 : ctrl.ry + 148, wide ? 22 : 20, P.lavender.dark, wide ? 62 : 0);
        const t1 = t(wide ? fy + 22 : ctrl.ry + 168, 13, P.peach.dark, wide ? 62 : 0);
        const t2 = t(wide ? fy + 42 : ctrl.ry + 186, 13, P.peach.dark, wide ? 62 : 0);
        const msg = t(ctrl.ry + ctrl.rh / 2 + 6, 19, P.ink.base);
        return { num, bar, den, word, t1, t2, msg };
      })();
      if (!print && o.hideFraction && !o.judge && !o.write) {
        const g = kit.el('g', null, uiL);
        kit.piece(st, g, { shape: { type: 'rect', w: ctrl.rw, h: 64, x: ctrl.rx, y: ctrl.ry, rx: 16 }, color: 'lavender', depth: 1, fill: P.lavender.light });
        kit.el('text', { x: ctrl.rx + ctrl.rw / 2, y: ctrl.ry + 38, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: P.lavender.dark }, g).textContent = '분수를 말해 봐요';
      }
      function readText() {
        const c = colored.size; const k = partEls.length;
        // 확인 전에는 똑같은지·분수를 말하지 않는다(화면 읽기 학생도 같은 과제를 하게)
        if (!revealed) return c ? `${k}조각 중 ${c}조각을 색칠했어요.` : `${k}조각으로 나누었어요.`;
        if (!isEqual()) return `조각 ${k}개의 크기가 서로 달라요.`;
        if (k === 1) return c ? '자르지 않은 전체를 색칠했어요.' : '아직 자르지 않은 전체예요.';
        return c ? `${k}분의 ${c}` : `전체를 똑같이 ${k}조각으로 나누었어요.`;
      }
      function paintReadout() {
        if (!read) return;
        const c = colored.size; const k = partEls.length; const eq = isEqual();
        const showFrac = eq && k > 1 && c > 0;
        [read.num, read.den, read.word, read.t1, read.t2].forEach((e) => { e.textContent = ''; });
        // 휴대폰(390px)에서 교구가 약 0.64배로 줄어든다 — 안내 줄은 19(약 12px)로, 짧게 쓴다
        read.t1.setAttribute('font-size', 16); read.t2.setAttribute('font-size', 16);
        read.bar.setAttribute('display', showFrac ? 'inline' : 'none');
        read.msg.textContent = '';
        if (!revealed) {
          read.bar.setAttribute('display', 'none');
          read.msg.textContent = freeCut ? `조각 ${k}개` : '분수는 확인 뒤에';
          const hintEl = read[shape === 'pizza' ? 't1' : 't2'];
          hintEl.setAttribute('font-size', 19);
          hintEl.textContent = freeCut ? '확인해 봐요' : '먼저 읽어요';
          return;
        }
        if (!showFrac) {
          read.msg.textContent = !eq ? '크기가 달라요' : k === 1 ? '자르지 않은 전체' : `똑같이 ${k}조각`;
          if (o.showTerms && eq && k > 1) { read.t2.textContent = '조각을 눌러 색칠해요'; }
          if (!eq) read.t2.textContent = '분수가 아니에요';
          return;
        }
        read.num.textContent = c; read.den.textContent = k;
        read.word.textContent = c === k ? `${k}분의 ${c} (= 1)` : `${k}분의 ${c}`;
        const lk = [...locked].filter((i) => colored.has(i)).length;
        if (lk && c > lk) {
          // 덧셈: 처음 칠한 조각 + 더 칠한 조각 — 단위분수가 몇 개인지가 보이게
          read.t1.setAttribute('font-size', 18); read.t2.setAttribute('font-size', 18);
          read.t1.textContent = `${k}분의 1이 ${c}개`;
          read.t2.textContent = `${lk}개 + ${c - lk}개`;
          return;
        }
        if (o.showTerms) { read.t1.textContent = `분자 ${c}: 색칠한 조각 수`; read.t2.textContent = `분모 ${k}: 전체 조각 수`; }
      }

      // ---- 조각 수 단추(스테퍼) ----
      const button = (x, y, w, h, color, text, label, onPress, size = 30) => {
        const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': label, class: 'fr-btn' }, uiL);
        kit.transform(g, { x, y });
        kit.el('rect', { x: -Math.max(w, 48) / 2, y: -Math.max(h, 48) / 2, width: Math.max(w, 48), height: Math.max(h, 48), class: 'pk-hit' }, g);
        const pc = kit.piece(st, g, { shape: w === h ? { type: 'circle', r: w / 2 } : { type: 'rect', w, h, rx: 16 }, color, depth: 2 });
        const tx = kit.el('text', { x: 0, y: size * 0.36, 'text-anchor': 'middle', 'font-size': size, class: 'pk-text', fill: P[color].dark }, g); tx.textContent = text;
        const press = (via) => { kit.spring(0.86, 1, { stiffness: 380, damping: 12, onUpdate: (v) => kit.transform(g, { s: v }) }); onPress(via); };
        g.addEventListener('click', () => press('pointer'));
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); press('keyboard'); } });
        return { g, pc, tx };
      };
      let countText = null;
      const fixedCut = () => cuts !== null;
      const stepperG = [];
      let noteText = null;
      if (!print && !o.judge && !o.write) {
        const lab = kit.el('text', { x: ctrl.ox, y: ctrl.oy - 44, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: P.ink.light }, uiL);
        lab.textContent = '몇 조각으로 자를까요?';
        countText = kit.el('text', { x: ctrl.ox, y: ctrl.oy - 8, 'text-anchor': 'middle', 'font-size': 30, class: 'pk-text', fill: P.ink.base }, uiL);
        // 조각 수가 정해진 문항(min = max, 분수의 덧셈)은 단추 없이 조각 수만 보인다
        if (minN === maxN) { lab.textContent = '똑같이 나눈 조각 수'; stepperG.push(lab, countText); }
        else stepperG.push(lab, countText,
          button(ctrl.ox - 42, ctrl.oy + 36, 56, 56, 'lavender', '−', '조각 수 줄이기', (via) => setN(n - 1, via), 34).g,
          button(ctrl.ox + 42, ctrl.oy + 36, 56, 56, 'mint', '+', '조각 수 늘리기', (via) => setN(n + 1, via), 34).g);
        // 조각 수를 바꾸면 색칠이 지워진다는 것을 말해 준다(말없이 지워지면 3학년은 까닭을 모른다)
        noteText = kit.el('text', { x: ctrl.ox, y: ctrl.oy + 88, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: P.rose.dark }, uiL);
      }
      const note = (t) => { if (noteText) noteText.textContent = t; };
      const judgeBtns = [];
      let lookMsg = null; let lookBtn = null;
      if (!print && o.judge) {
        // 피자: 오른쪽에 세로로, 띠: 띠 아래에 가로로 단추를 놓는다
        const pos = shape === 'pizza'
          ? { label: [ctrl.ox, 150], t: [ctrl.ox, 200], f: [ctrl.ox, 268], look: [ctrl.ox, 336], msg: [ctrl.ox, 386], w: 166 }
          : { label: [280, 212], t: [105, 262], f: [280, 262], look: [455, 262], msg: [280, 318], w: 160 };
        const mk = (val, xy, text, color) => {
          const b = button(xy[0], xy[1], pos.w, 54, color, text, text, (via) => {
            judge = val; paintJudge();
            kit.tick(); kit.announce(`‘${text}’를 골랐어요.`);
            kit.recorder.log('fraction', Object.assign({ via }, state()));
          }, 18);
          // 두 판단 단추는 한 묶음이라 화살표로 다른 쪽을 고른다(라디오 묶음과 같은 키 동작)
          b.g.addEventListener('keydown', (e) => {
            if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
            e.preventDefault();
            const other = judgeBtns.find((j) => j.val !== val); if (!other) return;
            other.b.g.focus(); judge = other.val; paintJudge();
            kit.tick(); kit.announce(`‘${other.val ? '똑같이 나눴어요' : '똑같지 않아요'}’를 골랐어요.`);
            kit.recorder.log('fraction', Object.assign({ via: 'keyboard' }, state()));
          });
          judgeBtns.push({ val, b }); return b;
        };
        kit.el('text', { x: pos.label[0], y: pos.label[1], 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: P.ink.base }, uiL).textContent = '똑같이 나누었나요?';
        mk(true, pos.t, '똑같이 나눴어요', 'mint');
        mk(false, pos.f, '똑같지 않아요', 'rose');
        // 겹쳐 보기는 눈으로 어림해 고르고 확인을 한 번 누른 뒤에 열린다 — 먼저 누르면 답이 그대로 보여 판단이 '단추 읽기'로 줄어든다
        lookBtn = button(pos.look[0], pos.look[1], pos.w, 54, 'sky', '겹쳐 보기', '겹쳐 보기: 가장 작은 조각을 가장 큰 조각 위에 겹쳐요. 먼저 눈으로 어림해 고르고 확인을 누른 뒤에 쓸 수 있어요', () => {
          if (!checkedOnce) {
            if (lookMsg) lookMsg.textContent = '먼저 눈으로 어림해 고르고 확인을 눌러요';
            kit.tick('no'); kit.announce('먼저 눈으로 어림해서 고르고 확인을 눌러 봐요. 그다음 겹쳐서 확인해요.');
            kit.recorder.log('fraction', Object.assign({ via: 'overlay-early' }, state()));
            return;
          }
          overlay();
        }, 18);
        lookBtn.g.setAttribute('opacity', 0.55);
        lookMsg = kit.el('text', { x: pos.msg[0], y: pos.msg[1], 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: P.ink.light }, uiL);
        if (o.judgeWhy) lookMsg.textContent = '똑같지 않으면 가장 큰 조각도 눌러요';
      }
      // 겹쳐 보기: 가장 작은 조각의 본을 떠서 가장 큰 조각 위로 옮겨 겹친다 — 남는 부분이 보이면 똑같이 나눈 것이 아니다
      let ghost = null;
      async function overlay() {
        const b = bounds(); const sz = b.map(([a, z]) => z - a);
        let big = sz.indexOf(Math.max(...sz)); let small = sz.indexOf(Math.min(...sz));
        if (big === small) { big = 0; small = b.length > 1 ? 1 : 0; }
        looked++; needLook = false;
        if (ghost) ghost.remove();
        ghost = kit.el('g', { 'pointer-events': 'none' }, uiL);
        const style = { fill: P.ink.base, 'fill-opacity': 0.28, stroke: P.ink.base, 'stroke-width': 3, 'stroke-dasharray': '7 5' };
        const pb = partEls[big]; const ps = partEls[small];
        // 도전(judgeWhy)은 가장 큰 조각을 스스로 찾아야 하므로 테두리로 알려 주지 않는다
        if (!o.judgeWhy) { pb.pc.face.setAttribute('stroke', P.sky.dark); pb.pc.face.setAttribute('stroke-width', 4); }
        kit.tick(); kit.announce('가장 작은 조각을 가장 큰 조각 위에 겹쳐 보았어요. 남거나 모자라는 부분이 있는지 보세요.');
        kit.recorder.log('fraction', Object.assign({ via: 'overlay' }, state()));
        if (shape === 'pizza') {
          const el = kit.el('path', Object.assign({ d: ps.shp.type === 'circle' ? `M0 ${-geo.r} A${geo.r} ${geo.r} 0 1 1 -0.01 ${-geo.r} Z` : ps.shp.d }, style), ghost);
          const d = b[big][0] - b[small][0];
          const at = (k) => el.setAttribute('transform', `translate(${geo.cx} ${geo.cy}) rotate(${(d * k).toFixed(2)})`);
          at(0);
          await kit.tween(reduceMotion ? 1 : 800, (k) => at(k));
        } else {
          const w = (b[small][1] - b[small][0]) * geo.w;
          const el = kit.el('rect', Object.assign({ y: geo.y - 4, width: w, height: geo.h + 8, rx: 6 }, style), ghost);
          const x0 = geo.x + b[small][0] * geo.w; const x1 = geo.x + b[big][0] * geo.w;
          const at = (k) => el.setAttribute('x', (x0 + (x1 - x0) * k).toFixed(2));
          at(0);
          await kit.tween(reduceMotion ? 1 : 800, (k) => at(k));
        }
        if (lookMsg) lookMsg.textContent = o.judgeWhy ? '남거나 모자라는 부분이 있나요?' : '파란 테두리가 가장 큰 조각이에요';
        const mine = ghost;
        await kit.wait(2600);
        if (ghost === mine) { ghost.remove(); ghost = null; paintParts(); }
      }

      // ---- 거꾸로(분수 쓰기): 분자·분모를 단추로 정한다 ----
      let wNumText = null; let wDenText = null;
      if (!print && o.write) {
        const L = shape === 'pizza' ? { fx: 470, fy: 150 } : { fx: 165, fy: 292 };
        const g = kit.el('g', null, uiL);
        kit.piece(st, g, { shape: { type: 'rect', w: 160, h: 196, x: L.fx - 80, y: L.fy - 112, rx: 16 }, color: 'cream', depth: 2 });
        const t = (x, y, size, fill, text) => { const e = kit.el('text', { x, y, 'text-anchor': 'middle', 'font-size': size, class: 'pk-text', fill }, uiL); if (text != null) e.textContent = text; return e; };
        t(L.fx, L.fy - 90, 15, P.ink.light, o.hideFraction ? '위 수' : '분자');
        wNumText = t(L.fx, L.fy - 38, 36, P.rose.dark);
        kit.el('rect', { x: L.fx - 26, y: L.fy - 14, width: 52, height: 4, rx: 2, fill: P.ink.base, class: 'pk-text' }, uiL);
        wDenText = t(L.fx, L.fy + 38, 36, P.ink.base);
        t(L.fx, L.fy + 76, 15, P.ink.light, o.hideFraction ? '아래 수' : '분모');
        const setW = (which, d, via) => {
          // 쓰기 단추는 조각 수보다 크게도 쓸 수 있어야 한다 — 분모끼리 더한 답(예: 14)을 쓸 수 있어야 그 실수를 알려 줄 수 있다
          const top = Math.max(24, maxN * 2);
          if (which === 'num') wNum = kit.clamp((wNum ?? 0) + d, 0, top); else wDen = kit.clamp((wDen ?? 0) + d, 1, top);
          paintWrite(); kit.tick();
          kit.announce(`${which === 'num' ? (o.hideFraction ? '위 수' : '분자') : (o.hideFraction ? '아래 수' : '분모')} ${which === 'num' ? wNum : wDen}`);
          kit.recorder.log('fraction', Object.assign({ via }, state()));
        };
        button(L.fx - 56, L.fy - 50, 44, 44, 'lavender', '−', '분자 줄이기', (via) => setW('num', -1, via), 28);
        button(L.fx + 56, L.fy - 50, 44, 44, 'mint', '+', '분자 늘리기', (via) => setW('num', 1, via), 28);
        button(L.fx - 56, L.fy + 26, 44, 44, 'lavender', '−', '분모 줄이기', (via) => setW('den', -1, via), 28);
        button(L.fx + 56, L.fy + 26, 44, 44, 'mint', '+', '분모 늘리기', (via) => setW('den', 1, via), 28);
        if (o.showTerms) {
          const tx = shape === 'pizza' ? [L.fx, 312] : [420, 262];
          t(tx[0], tx[1], 13, P.peach.dark, '분자: 색칠한 조각 수');
          t(tx[0], tx[1] + 20, 13, P.peach.dark, '분모: 전체 조각 수');
        }
      }
      function paintWrite() {
        if (!wNumText) return;
        wNumText.textContent = wNum == null ? '?' : wNum;
        wDenText.textContent = wDen == null ? '?' : wDen;
      }
      function paintJudge() {
        judgeBtns.forEach(({ val, b }) => {
          const on = judge === val;
          b.pc.face.setAttribute('fill', on ? P[val ? 'mint' : 'rose'].layer : P[val ? 'mint' : 'rose'].base);
          b.pc.face.setAttribute('stroke', on ? P.ink.base : 'rgba(255,255,255,0.55)');
          b.pc.face.setAttribute('stroke-width', on ? 3 : 1);
          b.g.setAttribute('aria-pressed', String(on));
        });
      }
      function paintCount() {
        if (!countText) return;
        countText.textContent = `${partEls.length}조각`;
        stepperG.forEach((e) => e.setAttribute('display', fixedCut() ? 'none' : 'inline'));
      }

      function setN(v, via, quiet) {
        if (fixedCut()) return;
        v = kit.clamp(v, minN, maxN);
        if (v === n && partEls.length) { if (!quiet) kit.tick('no'); return; }
        const hadColor = colored.size > 0;
        n = v; colored = new Set(); buildParts(!quiet); paintCount();
        note(hadColor && !quiet ? '조각 수를 바꾸어 색칠이 지워졌어요' : '');
        if (!quiet) { kit.tick(); kit.announce(`${hadColor ? '조각 수를 바꾸면 색칠이 지워져요. ' : ''}${readText()}`); kit.recorder.log('fraction', Object.assign({ via }, state())); }
      }

      // ---- 칼집 직접 옮기기(freeCut) ----
      // 띠: 0~1 사이 칼집 자리, 피자: 12시(0°)는 고정 칼집이고 나머지를 돌린다. 둘 다 24칸 눈금에 붙는다.
      const cutL = st.layer('cuts');
      let markers = [];
      const cellPx = () => geo.w / GRID;
      const defaultCuts = () => {
        const c = Math.max(1, o.cutsCount || 2);
        if (shape === 'strip') return Array.from({ length: c }, (_, i) => r4(Math.round((GRID * (i + 1)) / (c + 2)) / GRID));
        return [0, ...Array.from({ length: c }, (_, i) => Math.round(((i + 1) * 360) / (c + 2) / 15) * 15)];
      };
      const collides = (val, self) => cuts.some((c, j) => j !== self && Math.abs(c - val) < (shape === 'pizza' ? 7 : 0.5 / GRID));
      function cutsChanged(via) {
        hide(); colored = new Set([...colored].filter((i) => locked.has(i)));
        buildParts(false); paintCount();
        kit.tick(); kit.announce(readText());
        kit.recorder.log('fraction', Object.assign({ via }, state()));
      }
      function buildMarkers() {
        markers.forEach((m) => m.g.remove()); markers = [];
        if (!freeCut || !cuts) return;
        if (shape === 'pizza') {
          // 가장자리 눈금(15°마다) — 같은 칸 수로 나누면 똑같은 조각이다
          if (o.ticks !== false) {
            const tg = kit.el('g', { 'pointer-events': 'none' }, cutL);
            for (let k = 0; k < GRID; k++) {
              const a = rad(k * 15); const r1 = geo.r + 6; const r2 = geo.r + (k % 6 === 0 ? 16 : 11);
              kit.el('line', { x1: geo.cx + Math.sin(a) * r1, y1: geo.cy - Math.cos(a) * r1, x2: geo.cx + Math.sin(a) * r2, y2: geo.cy - Math.cos(a) * r2, stroke: P.peach.dark, 'stroke-width': k % 6 === 0 ? 2.4 : 1.4 }, tg);
            }
            markers.push({ g: tg });
          }
          cuts.forEach((ang, j) => {
            const g = kit.el('g', { class: 'fr-cut' }, cutL);
            kit.el('line', { x1: geo.cx, y1: geo.cy, x2: geo.cx, y2: geo.cy - geo.r - 4, stroke: P.ink.base, 'stroke-width': 3, 'stroke-dasharray': j === 0 ? null : '8 5', 'pointer-events': 'none' }, g);
            if (j === 0) { kit.transform(g, { r: 0, cx: geo.cx, cy: geo.cy }); markers.push({ g }); return; }
            kit.el('circle', { cx: geo.cx, cy: geo.cy - geo.r - 24, r: 24, class: 'pk-hit' }, g);
            kit.piece(st, g, { shape: { type: 'circle', cx: geo.cx, cy: geo.cy - geo.r - 24, r: 14 }, color: 'lavender', depth: 2 });
            // 손잡이 무늬: 돌리는 방향(좌우) 화살 — 회전해도 뜻이 같게 칼집과 직각으로 놓는다
            kit.el('path', { d: `M${geo.cx - 8} ${geo.cy - geo.r - 24} l4 -4 M${geo.cx - 8} ${geo.cy - geo.r - 24} l4 4 M${geo.cx + 8} ${geo.cy - geo.r - 24} l-4 -4 M${geo.cx + 8} ${geo.cy - geo.r - 24} l-4 4`, stroke: P.lavender.dark, 'stroke-width': 2.2, fill: 'none', 'stroke-linecap': 'round', 'pointer-events': 'none' }, g);
            let prev = ang;
            const rh = kit.rotate(st, g, {
              center: [geo.cx, geo.cy], step: 15, value: ang, label: `칼집 ${j + 1}. 좌우 방향키로 15도씩 돌려요`,
              valueText: (v) => `12시에서 시계 방향으로 ${Math.round(K.norm(v) / 15)}칸`,
              onStart() { kit.tick(); },
              onEnd(v) {
                const a = K.norm(Math.round(v / 15) * 15);
                if (a === 0 || collides(a, j)) { rh.set(prev); kit.tick('no'); kit.announce('다른 칼집과 겹쳐서 되돌렸어요.'); return; }
                prev = a; cuts[j] = a; cutsChanged('cut');
              },
            });
            markers.push({ g });
          });
          return;
        }
        // 띠: 위쪽 눈금자(24칸) + 세로 칼집
        if (o.ticks !== false) {
          const tg = kit.el('g', { 'pointer-events': 'none' }, cutL);
          for (let k = 0; k <= GRID; k++) {
            const x = geo.x + k * cellPx(); const big = k % 6 === 0;
            kit.el('line', { x1: x, y1: geo.y - 10, x2: x, y2: geo.y - (big ? 26 : 18), stroke: P.lavender.dark, 'stroke-width': big ? 2.2 : 1.2 }, tg);
          }
          markers.push({ g: tg });
        }
        cuts.forEach((pos, j) => {
          const g = kit.el('g', { class: 'fr-cut' }, cutL);
          const top = geo.y - 34; const h = geo.h + 48;
          kit.el('rect', { x: -22, y: top - 10, width: 44, height: h + 10, class: 'pk-hit' }, g);
          kit.el('line', { x1: 0, y1: geo.y - 6, x2: 0, y2: geo.y + geo.h + 6, stroke: P.ink.base, 'stroke-width': 3, 'stroke-dasharray': '8 5', 'pointer-events': 'none' }, g);
          // 손잡이는 띠 한가운데(아래 읽기 칸과 겹치지 않게)
          const ky = geo.y + geo.h / 2;
          kit.piece(st, g, { shape: { type: 'rect', x: -15, y: ky - 18, w: 30, h: 36, rx: 10 }, color: 'lavender', depth: 2 });
          kit.el('path', { d: `M-9 ${ky} l5 -5 M-9 ${ky} l5 5 M9 ${ky} l-5 -5 M9 ${ky} l-5 5`, stroke: P.lavender.dark, 'stroke-width': 2.2, fill: 'none', 'stroke-linecap': 'round', 'pointer-events': 'none' }, g);
          g.setAttribute('aria-label', `칼집 ${j + 1}. 좌우 방향키로 한 칸씩 옮기고 Enter로 내려놓아요`);
          kit.transform(g, { x: geo.x + pos * geo.w, y: 0 });
          const snapPos = (x) => r4(Math.round(((x - geo.x) / geo.w) * GRID) / GRID);
          kit.drag(st, g, {
            role: 'slider', keyStep: cellPx(), bounds: [geo.x + cellPx(), 0, geo.x + geo.w - cellPx(), 0],
            snap: (x) => { const p = snapPos(x); if (p <= 0 || p >= 1 || collides(p, j)) return null; return { x: geo.x + p * geo.w, y: 0 }; },
            onDrop: (x) => { const p = snapPos(x); if (p !== cuts[j]) { cuts[j] = p; cutsChanged('cut'); } },
            onReject: () => { kit.tick('no'); kit.announce('다른 칼집과 겹쳐서 되돌렸어요.'); },
          });
          // 키보드: 방향키 한 번마다 바로 내려놓는다(Enter를 따로 누르지 않아도 조각이 바뀐다)
          g.addEventListener('keydown', (e) => {
            if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
            const t = g.__pk; const p = snapPos(t.x);
            if (p <= 0 || p >= 1 || collides(p, j)) { kit.transform(g, { x: geo.x + cuts[j] * geo.w }); kit.tick('no'); return; }
            kit.transform(g, { x: geo.x + p * geo.w });
            if (p !== cuts[j]) { cuts[j] = p; cutsChanged('keyboard'); }
          });
          markers.push({ g });
        });
      }

      // 자리 값은 소수 넷째 자리까지만 — 긴 소수(0.3333333333…)가 수집 서버의 주민번호 모양 거름에 걸린다
      const r4 = (v) => Math.round(v * 10000) / 10000;
      const state = () => ({ shape, n: partEls.length, cuts: cuts ? cuts.map(r4) : null, colored: [...colored].sort((a, b) => a - b), judge, equal: isEqual(), num: colored.size, looked, picked, wNum, wDen, firstGuess });
      function setState(s, animate) {
        s = s || {};
        cuts = Array.isArray(s.cuts) && s.cuts.length ? s.cuts.slice() : freeCut ? defaultCuts() : null;
        // 칼집 옮기기에서 들어온 자리는 손으로 옮길 수 있는 자리(눈금, 띠 안쪽)로만 받는다 — 판단 문항은 눈금에 맞추지 않는다
        if (cuts && freeCut) {
          cuts = shape === 'pizza'
            ? cuts.map((c) => ((Math.round((Number(c) || 0) / (360 / GRID)) * (360 / GRID)) % 360 + 360) % 360)
            : cuts.map((c) => r4(kit.clamp(Math.round((Number(c) || 0) * GRID), 1, GRID - 1) / GRID));
          cuts.sort((a, b) => a - b);
        } else if (cuts) {
          // 판단 문항의 칼집(눈금 밖 자리)도 띠 안쪽·한 바퀴 안으로 묶어 조각 폭이 음수가 되지 않게
          cuts = (shape === 'pizza' ? cuts.map((c) => (((Number(c) || 0) % 360) + 360) % 360) : cuts.map((c) => kit.clamp(Number(c) || 0, 0.02, 0.98))).sort((a, b) => a - b);
        }
        n = cuts ? (shape === 'pizza' ? cuts.length : cuts.length + 1) : kit.clamp(s.n || o.startN || 1, 1, maxN);
        colored = new Set((s.colored || []).concat([...locked]).filter((i) => i >= 0 && i < n));
        judge = s.judge === true || s.judge === false ? s.judge : null;
        picked = Number.isInteger(s.picked) ? s.picked : null; looked = s.looked || 0; needLook = false;
        wNum = s.wNum ?? null; wDen = s.wDen ?? null;
        checkedOnce = false; firstGuess = null; if (lookBtn) lookBtn.g.setAttribute('opacity', 0.55);
        hide();
        buildParts(animate); buildMarkers(); paintCount(); paintJudge(); paintWrite();
      }
      const start = () => ({ n: o.startN || 1 });
      setState(start(), false);

      return {
        getState: state,
        setState: (s) => setState(s, false),
        reset() { setState(start(), false); },
        // 다 했지만 틀린 상태(모의 수업·검사용): 진분수 문항은 모두 칠한 분수, 판단 문항은 반대 판단
        wrongAnswer(t) {
          if ('equal' in t) return Object.assign(state(), { judge: !t.equal });
          // 짝 놀이: 조건을 하나 어긴 진분수(절반 조건이면 반대쪽, 분자 조건이면 단위분수), 조건이 없으면 모두 칠한 분수
          if (t.proper) {
            const k = Math.max(5, t.minDen || 0);
            if (t.lessThanHalf) return { n: k, colored: Array.from({ length: Math.ceil(k / 2) }, (_, i) => i) };
            if (t.moreThanHalf) return { n: k, colored: [0] };
            if (t.minNum) return { n: k, colored: [0] };
            return { n: k, colored: Array.from({ length: k }, (_, i) => i) };
          }
          // 칼집 옮기기: 칼집 하나를 한 칸 비켜 둔 '거의 똑같은' 나누기(눈으로는 같아 보이는 흔한 실수)
          if (freeCut && t.den) {
            const c = shape === 'pizza' ? Array.from({ length: t.den }, (_, i) => (360 * i) / t.den) : Array.from({ length: t.den - 1 }, (_, i) => r4((i + 1) / t.den));
            c[shape === 'pizza' ? 1 : 0] += shape === 'pizza' ? 360 / GRID : 1 / GRID;
            return { cuts: c.map(r4) };
          }
          // 분수 쓰기: 처음 분수가 잠긴 덧셈은 분모끼리 더한 답, 그 밖은 분자·분모를 바꿔 쓴 답
          if (o.write && t.den && t.num != null && t.num !== t.den) return Object.assign(state(), locked.size ? { wNum: t.num, wDen: 2 * t.den } : { wNum: t.den, wDen: t.num });
          // 색칠: 조각 수는 맞게 나누고 한 조각 더(또는 덜) 칠한 상태 — 조각 수가 정해진 문항에서도 학생이 만들 수 있는 오답
          if (!o.write && t.den && t.num != null) { const c = t.num < t.den ? t.num + 1 : t.num - 1; return { n: t.den, colored: Array.from({ length: c }, (_, i) => i) }; }
          return null;
        },
        solve(t) {
          if ('equal' in t) { judge = t.equal; needLook = false; if (o.judgeWhy && !t.equal) picked = biggest()[0]; paintJudge(); paintParts(); return; }
          if (o.write && t.den) {
            // 그림이 문항과 달라졌으면(검사·모의 수업이 조각 수를 바꾼 뒤) 문항의 그림으로 되돌린 뒤 쓴다
            if (partEls.length !== t.den || colored.size !== t.num) { cuts = null; n = 0; setN(t.den, 'solve', true); const want = new Set([...locked].filter((i) => i < t.den)); for (let i = 0; want.size < t.num && i < t.den; i++) want.add(i); colored = want; paintParts(); }
            wNum = t.num; wDen = t.den; paintWrite(); return;
          }
          if (t.proper) {
            const k = Math.max(5, t.minDen || 0);
            const c = t.lessThanHalf ? Math.max(1, Math.floor((k - 1) / 2)) : t.moreThanHalf ? Math.floor(k / 2) + 1 : Math.max(2, t.minNum || 0);
            cuts = null; n = 0; setN(k, 'solve', true); colored = new Set(Array.from({ length: c }, (_, i) => i)); paintParts(); return;
          }
          if (t.den && freeCut) {
            cuts = shape === 'pizza' ? Array.from({ length: t.den }, (_, i) => (360 * i) / t.den) : Array.from({ length: t.den - 1 }, (_, i) => r4((i + 1) / t.den));
            n = t.den; colored = new Set([...locked]); buildParts(false); buildMarkers(); paintCount();
          } else if (t.den) { cuts = null; n = 0; setN(t.den, 'solve', true); colored = new Set([...locked].filter((i) => i < t.den)); }
          if (t.num) { const want = new Set([...locked]); for (let i = 0; want.size < t.num && i < partEls.length; i++) want.add(i); colored = want; paintParts(); }
        },
        // 힌트(forHint)는 확인이 아니다 — 숨긴 값을 드러내지 않고, 판단 문항의 첫 판단·겹쳐 보기 잠금도 건드리지 않는다.
        // 확인 전 숨김(reveal:'after-check')은 맞힌 확인 뒤에만, 칼집 옮기기(freeCut)는 확인할 때마다 읽기 칸을 보인다.
        check(t, opts) {
          const fh = !!(opts && opts.forHint);
          const r = this.judgeNow(t, fh);
          if (!fh && revealMode && !revealed && (freeCut || r.correct)) { revealed = true; paintReadout(); }
          return r;
        },
        // 새 힌트 계약: 1단계는 늘 열리고 문항의 수(합·분모·분자)를 말하지 않는다. 지금 상태가 맞아도 '맞아요'라고 알려 주지 않는다.
        hint(t, opts) {
          t = t || {}; const lv = hintLevel(opts);
          const r = this.judgeNow(t, true);
          if (lv === 1 || r.correct) return { hint: this.conceptHint(t), level: 1 };
          if (lv === 2) return { hint: r.feedback || this.conceptHint(t), level: 2 };
          return { hint: r.hint || r.feedback || '', level: 3 };
        },
        conceptHint(t) {
          if ('equal' in t) return '조각 수가 아니라 조각의 크기를 봐요. 모든 조각의 크기가 같아야 똑같이 나눈 거예요.';
          if (o.write) return locked.size ? '더한 뒤에도 전체를 똑같이 나눈 조각 수는 그대로예요. 한 조각짜리 분수가 모두 몇 개인지 세어요.' : '분모(아래 수)는 전체를 똑같이 나눈 조각 수, 분자(위 수)는 색칠한 조각 수예요.';
          if (t.proper) return '분자가 분모보다 작은 분수예요. 문제에 붙은 조건을 하나씩 따져 보고 만들어요.';
          if (freeCut) return `${shape === 'pizza' ? '피자 가장자리' : '띠 위'}의 눈금 칸을 세어, 조각마다 칸 수가 같아지게 칼집을 옮겨요.`;
          if (locked.size) return '복숭아색은 처음 분수예요. 더하는 분수만큼 몇 조각을 더 칠해야 할까요?';
          if (t.num == null) return '분모는 전체를 똑같이 나눈 조각 수예요. 문제의 분수에서 분모를 먼저 찾아요.';
          return '분모는 전체를 똑같이 나눈 조각 수, 분자는 색칠한 조각 수예요. 문제의 분수에서 분모와 분자를 먼저 짚어요.';
        },
        judgeNow(t, fh) {
          const terms = (d, c) => ` 분모 ${d}${eun(d)} 전체를 똑같이 나눈 조각 수, 분자 ${c}${eun(c)} 색칠한 조각 수예요.`;
          if ('equal' in t) {
            if (judge === null) return { correct: false, incomplete: true, feedback: '‘똑같이 나눴어요’와 ‘똑같지 않아요’ 중 하나를 골라 주세요.', hint: '조각끼리 크기를 눈으로 견주어 보세요. 모든 조각의 크기가 같아야 똑같이 나눈 거예요.' };
            // 두 단추 중 하나라 틀린 뒤 반대 단추만 누르면 맞힐 수 있다 — 다시 고르기 전에 겹쳐 보기로 근거를 확인하게 한다
            if (needLook) return { correct: false, incomplete: true, feedback: '먼저 ‘겹쳐 보기’를 눌러 조각의 크기를 견주어 본 뒤에 다시 골라요.', hint: '겹친 조각에 남거나 모자라는 부분이 있으면 크기가 다른 거예요.' };
            if (!fh && !checkedOnce) { checkedOnce = true; firstGuess = judge; if (lookBtn) lookBtn.g.setAttribute('opacity', 1); if (lookMsg && !o.judgeWhy) lookMsg.textContent = '이제 겹쳐 보기를 쓸 수 있어요'; }
            if (judge !== t.equal) {
              if (!fh) needLook = true;
              return { correct: false, feedback: '다시 살펴볼까요? 조각 수가 아니라 조각의 크기를 봐요. ‘겹쳐 보기’를 눌러 보세요.', hint: '가장 큰 조각과 가장 작은 조각을 겹쳐 보세요. 크기가 모두 같아야 똑같이 나눈 거예요.' };
            }
            if (o.judgeWhy && !t.equal && !biggest().includes(picked)) {
              return { correct: false, feedback: picked == null ? '맞아요, 똑같지 않아요. 그럼 가장 큰 조각은 어느 것인가요? 눌러 보세요.' : '고른 조각보다 더 큰 조각이 있어요.', hint: '조각을 둘씩 견주어 보세요. 다른 조각을 모두 덮을 만큼 넓은 조각이 가장 큰 조각이에요.' };
            }
            return { correct: true, feedback: t.equal ? '맞아요! 모든 조각의 크기가 같으니 똑같이 나눈 거예요.' : '맞아요! 조각의 크기가 서로 달라서 똑같이 나눈 것이 아니에요. 그래서 분수로 나타낼 수 없어요.' };
          }
          if (o.write) {
            // 정답은 문항의 분수다(그림이 처음 분수만 칠한 채여도 — 출구 질문은 더한 양을 그림 없이 셈해야 한다)
            const k = t.den ?? partEls.length; const c = t.num ?? colored.size;
            if (wNum == null || wDen == null) return { correct: false, feedback: '분자와 분모를 모두 정해 주세요.', hint: '전체 조각 수를 세어 분모(아래)에, 색칠한 조각 수를 세어 분자(위)에 써요.' };
            if (wNum === k && wDen === c && k !== c) return { correct: false, feedback: '분모와 분자가 바뀌었어요.', hint: '분모는 아래에 쓰는 수로, 전체를 똑같이 나눈 조각 수예요.' };
            if (locked.size && wDen === 2 * k && wNum === c) return { correct: false, feedback: `분모끼리 더했네요. 분모를 더하면 한 조각의 크기가 바뀌어요. 전체를 똑같이 나눈 수는 그대로 ${k}${ieyo(k)}.`, hint: `${k}분의 1이 몇 개인지 세어 분자에 써요. 분모는 ${k} 그대로예요.` };
            if (wDen !== k) return { correct: false, feedback: '분모를 다시 살펴봐요.', hint: '분모(아래 수)는 전체를 똑같이 나눈 조각 수예요. 색칠하지 않은 조각까지 모두 세어요.' };
            if (wNum !== c) return { correct: false, feedback: wNum === k - c ? '색칠하지 않은 조각을 센 것 같아요.' : '분자를 다시 살펴봐요.', hint: '분자(위 수)는 색칠한 조각 수예요.' };
            return { correct: true, feedback: `맞아요! ${k}분의 ${c}${ieyo(c)}.${terms(k, c)}` };
          }
          const k = partEls.length; const c = colored.size;
          if (t.proper) {
            if (!isEqual()) return { correct: false, feedback: '조각의 크기가 서로 달라요.', hint: '단추로 조각 수를 정하면 똑같이 나뉘어요.' };
            if (k < 2) return { correct: false, feedback: '먼저 짝이 말한 분모만큼 똑같이 잘라요.', hint: '분모는 전체를 똑같이 나눈 조각 수예요. + 단추로 조각 수를 정해요.' };
            if (c === 0) return { correct: false, feedback: `똑같이 ${k}조각으로 나누었어요. 이제 짝이 말한 분자만큼 색칠해요.`, hint: '분자는 색칠한 조각 수예요.' };
            if (c >= k) return { correct: false, feedback: `${k}조각을 모두 색칠했어요. 오늘은 분자가 분모보다 작은 분수만 만들어요.`, hint: '분모보다 적은 수만큼만 색칠해요. 칠한 조각을 한 번 더 누르면 색이 지워져요.' };
            if (t.minDen && k < t.minDen) return { correct: false, feedback: `지금 분모는 ${k}${ieyo(k)}. 분모가 ${t.minDen - 1}보다 커야 해요.`, hint: `${t.minDen}조각 이상으로 나누고, 색칠한 조각이 나머지보다 적어야 해요.` };
            if (t.minNum && c < t.minNum) return { correct: false, feedback: `지금 분자는 ${c}${ieyo(c)}. 분자가 ${t.minNum - 1}보다 커야 해요.`, hint: `${t.minNum}조각 이상 색칠하되, 모두 칠하지는 않아요.` };
            if (t.moreThanHalf && c * 2 <= k) return { correct: false, feedback: `${k}분의 ${c}${eun(c)} 절반보다 많지 않아요. 색칠한 조각이 색칠하지 않은 조각보다 많아야 해요.`, hint: `${k}조각의 절반은 ${k / 2}조각이에요. 그보다 많이, 그러나 모두는 아니게 색칠해요.` };
            if (t.lessThanHalf && c * 2 >= k) return { correct: false, feedback: `${k}분의 ${c}${eun(c)} 피자의 절반보다 적지 않아요. 색칠한 조각이 색칠하지 않은 조각보다 적어야 해요.`, hint: `${k}조각의 절반은 ${k / 2}조각이에요. 그보다 적게 색칠해요.` };
            return { correct: true, feedback: `${k}분의 ${c}${eul(c)} 만들었어요! 짝이 말한 분수와 같은지 짝에게 확인해요.${terms(k, c)}` };
          }
          if (!isEqual()) {
            if (freeCut) {
              if (!fh) overlay();
              const sz = sizes(); const cells = (v) => Math.round(v * (shape === 'pizza' ? GRID / 360 : GRID));
              const big = cells(Math.max(...sz)); const small = cells(Math.min(...sz));
              return { correct: false, feedback: `${shape === 'pizza' ? '가장 큰 조각과 가장 작은 조각' : '가장 긴 조각과 가장 짧은 조각'}의 크기가 달라요(${big}칸과 ${small}칸). 겹쳐 보면 남는 부분이 보여요. 조각 수가 맞아도 크기가 다르면 똑같이 나눈 것이 아니에요.`,
                hint: `${shape === 'pizza' ? '피자 가장자리' : '띠 위'} 눈금은 모두 ${GRID}칸이에요. ${t.den}조각이 모두 같은 칸 수가 되게 칼집을 옮겨요. ${GRID}칸을 ${t.den}묶음으로 똑같이 나누면 한 묶음은 몇 칸일까요?` };
            }
            return { correct: false, feedback: '조각의 크기가 서로 달라요. 분수는 똑같이 나눈 조각으로 나타내요.', hint: `전체를 똑같이 ${t.den}조각으로 나누어요.` };
          }
          if (k !== t.den) return { correct: false, feedback: `지금은 ${k}조각이에요. 분모 ${t.den}${eun(t.den)} 전체를 똑같이 ${t.den}조각으로 나눈다는 뜻이에요.`, hint: `분모 ${t.den}${eun(t.den)} 전체를 똑같이 나눈 조각 수예요. 단추로 조각 수를 ${t.den}${ro(t.den)} 맞춰요.` };
          if (t.num == null) return { correct: true, feedback: freeCut ? `맞아요! 칼집을 옮겨 조각마다 ${GRID / t.den}칸씩, 전체를 똑같이 ${t.den}조각으로 나누었어요. 한 조각은 전체의 ${t.den}분의 1이에요.` : `맞아요! 전체를 똑같이 ${t.den}조각으로 나누었어요.` };
          if (c !== t.num) {
            // 덧셈(잠긴 조각): 합을 말하지 않고 '처음 + 더하는 양'의 풀이 한 걸음만 짚는다
            const lk = [...locked].filter((i) => i < k).length;
            const hint = lk ? `처음 분수는 복숭아색 ${lk}조각이에요. 더하는 분수의 분자만큼 조각을 더 칠해요.` : `분자 ${t.num}${eun(t.num)} 색칠한 조각 수예요. 조각을 눌러 ${t.num}조각만 색칠해요.`;
            return { correct: false, feedback: `조각은 알맞게 나누었어요. 지금 색칠한 조각은 ${c}개예요.${c > t.num ? ' 칠한 조각을 한 번 더 누르면 색이 지워져요.' : ''}`, hint };
          }
          if (locked.size) { const lk = [...locked].length; return { correct: true, feedback: `맞아요! ${t.den}분의 ${lk}에 ${t.den}분의 ${t.num - lk}${eul(t.num - lk)} 더하면 ${t.den}분의 1이 ${t.num}개, ${t.den}분의 ${t.num}${ieyo(t.num)}. 분모 ${t.den}${eun(t.den)} 그대로예요.` }; }
          return { correct: true, feedback: `맞아요! 전체를 똑같이 ${t.den}${ro(t.den)} 나눈 것 중의 ${t.num}, ${t.den}분의 ${t.num}${ieyo(t.num)}.${terms(t.den, t.num)}` };
        },
        // 교사 시연: 한 칼씩 잘라 나가고, 조각을 하나씩 색칠한다
        async demo(t) {
          if ('equal' in t) { judge = t.equal; paintJudge(); return; }
          const savedCuts = cuts; cuts = null;
          if (savedCuts) setState(start(), false);
          if (t.den) for (let v = n + (n < t.den ? 1 : -1); n !== t.den; v += n < t.den ? 1 : -1) { setN(v, 'demo'); await kit.wait(420); }
          for (let i = 0; i < (t.num || 0); i++) { if (!colored.has(i)) toggle(partEls[i], 'demo'); await kit.wait(450); }
        },
      };
    },
  });
})(window.PaperKit);
