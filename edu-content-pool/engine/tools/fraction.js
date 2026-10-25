/* 분수 피자·띠 조각 — 종이 피자(원)나 종이띠를 똑같이 n조각으로 자르고, 조각을 눌러 색칠한다.
 * 색칠하면 조각이 톡 들렸다 내려앉고(피자는 토핑이 올라간다), 옆 칸에 분수가 나타난다.
 * 옵션: shape 'pizza'|'strip', min/max(조각 수 범위), startN(처음 조각 수, 기본 1 = 자르지 않은 전체),
 *       color(색칠 색), showTerms(쉬움: 분자·분모 뜻 표시), hideFraction(도전: 분수 읽기 숨김),
 *       judge(‘똑같이 나누었나요?’ 판단 단추 + ‘겹쳐 보기’ — 조각 수 단추·색칠은 잠김. 판단이 틀리면 겹쳐 본 뒤에만 다시 고를 수 있다),
 *       judgeWhy(도전: 똑같지 않으면 가장 큰 조각도 눌러 근거를 보인다),
 *       write(거꾸로: 이미 색칠된 그림을 보고 분자·분모를 단추로 정해 분수로 쓴다 — 조각은 잠김),
 *       frame(활동지: 그림 옆에 빈 분수 쓰기 틀), print(활동지: 단추·분수 숨김, 색칠은 빗금)
 * 상태: { shape, n, cuts: null|[...], colored: [조각 번호], judge: null|true|false, equal, num, looked, picked, wNum, wDen }
 *   cuts — 피자: 자른 선의 각도(0°=12시, 시계 방향) 목록, 띠: 0~1 사이 안쪽 자른 자리 목록. null이면 똑같이 n조각.
 * target: { den, num? } (똑같이 den조각, 그중 num조각 색칠 / write면 분모·분자 쓰기) / { equal: true|false } (판단)
 *         / { proper: true } (짝 놀이: 분자가 분모보다 작은 분수를 아무거나 만들기)
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
      const st = kit.stage(box, { viewBox: vb, label: `${shape === 'pizza' ? '종이 피자' : '종이띠'} 분수 교구. 조각 수를 정하고 조각을 눌러 색칠하세요.`, background: print ? false : undefined });
      const geo = shape === 'pizza'
        ? (print ? { cx: 360, cy: 180, r: 150 } : { cx: 195, cy: 200, r: 156 })
        : (print ? { x: 20, y: 25, w: 500, h: 100 } : { x: 30, y: 62, w: 500, h: 108 });
      const ctrl = shape === 'pizza' ? { ox: 470, oy: 292, rx: 392, ry: 36, rw: 156, rh: 190 } : { ox: 420, oy: 288, rx: 30, ry: 198, rw: 270, rh: 182 };
      const baseL = st.layer('base'); const partL = st.layer('parts'); const uiL = st.layer('ui');

      // 빗금(활동지에서 색칠한 조각 표시: 흑백 인쇄에서도 구분된다)
      const hatchId = `fr-hatch-${Math.random().toString(36).slice(2, 8)}`;
      const pat = kit.el('pattern', { id: hatchId, width: 6, height: 6, patternUnits: 'userSpaceOnUse', patternTransform: 'rotate(45)' }, st.defs);
      kit.el('line', { x1: 0, y1: 0, x2: 0, y2: 6, stroke: '#000', 'stroke-width': 2.6 }, pat);
      // 활동지: 빈 분수 쓰기 틀(□ 위, 분수선, □ 아래) — 분수선 있는 분수 쓰기 연습
      if (print && o.frame && shape === 'pizza') {
        const fx = 548;
        [[92, 'num'], [196, 'den']].forEach(([y]) => kit.el('rect', { x: fx - 30, y, width: 60, height: 60, rx: 6, fill: 'none', stroke: '#222222', 'stroke-width': 2.6, 'stroke-dasharray': '6 4' }, st.svg));
        kit.el('line', { x1: fx - 42, y1: 172, x2: fx + 42, y2: 172, stroke: '#3D352E', 'stroke-width': 4, class: 'pk-text' }, st.svg);
      }

      if (shape === 'pizza') {
        kit.piece(st, baseL, { shape: { type: 'circle', r: geo.r + 13, cx: geo.cx, cy: geo.cy }, color: 'peach', depth: 3, texture: !print });
        kit.piece(st, baseL, { shape: { type: 'circle', r: geo.r + 4, cx: geo.cx, cy: geo.cy }, color: 'buttercup', depth: 1, fill: P.buttercup.light, flat: true });
      } else {
        kit.piece(st, baseL, { shape: { type: 'rect', w: geo.w + 16, h: geo.h + 16, x: geo.x - 8, y: geo.y - 8, rx: 12 }, color: 'lavender', depth: 3, texture: !print, fill: P.lavender.light });
      }

      let n = 1; let cuts = null; let colored = new Set(); let judge = null; let partEls = [];
      let looked = 0; let needLook = false; let picked = null; let wNum = null; let wDen = null;
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
            const fill = `url(#${hatchId})`; const a2 = { class: 'fr-hatch', 'pointer-events': 'none', fill };
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
          p.pc.setColor(on ? fillColor : offColor);
          if (!on) p.pc.face.setAttribute('fill', offFill);
          kit.transform(p.deco, { s: on && !print ? 1 : 0 });
          if (p.hatchEl) p.hatchEl.setAttribute('display', on ? 'inline' : 'none');
          if (picked === p.i) { p.pc.face.setAttribute('stroke', P.ink.base); p.pc.face.setAttribute('stroke-width', 4); }
          else if (o.judgeWhy) { p.pc.face.setAttribute('stroke', 'rgba(255,255,255,0.55)'); p.pc.face.setAttribute('stroke-width', 1); }
          p.g.setAttribute('aria-pressed', String(o.judgeWhy ? picked === p.i : on));
          // 판단 문항에서는 '크기가 다른 조각'이라고 읽어 주면 답을 알려 주는 셈이라 말하지 않는다
          p.g.setAttribute('aria-label', `${partEls.length}조각 중 ${p.i + 1}번째 조각${on ? ', 색칠함' : ''}${eq || o.judge ? '' : ' (크기가 다른 조각)'}${picked === p.i ? ', 가장 크다고 고름' : ''}`);
        });
        paintReadout();
      }
      function pop(p) {
        if (reduceMotion) return;
        kit.spring(1, 0, { stiffness: 260, damping: 9, velocity: 4, onUpdate: (v) => kit.transform(p.g, { x: p.home.x + p.lift.x * v, y: p.home.y + p.lift.y * v, s: 1 + v * 0.05 }) });
        if (colored.has(p.i)) kit.spring(1.8, 1, { stiffness: 300, damping: 10, onUpdate: (v) => kit.transform(p.deco, { s: v }) });
      }
      function toggle(p, via) {
        if (colored.has(p.i)) colored.delete(p.i); else colored.add(p.i);
        paintParts(); pop(p); kit.tick(colored.has(p.i) ? 'ok' : undefined); note('');
        kit.announce(readText());
        kit.recorder.log('fraction', Object.assign({ via }, state()));
      }
      function bindPick(p) {
        p.g.setAttribute('tabindex', '0'); p.g.setAttribute('role', 'button');
        p.g.classList.add('pk-draggable');
        const pick = (via) => { picked = p.i; paintParts(); pop(p); kit.tick(); kit.announce(`${p.i + 1}번째 조각을 가장 큰 조각으로 골랐어요.`); kit.recorder.log('fraction', Object.assign({ via }, state())); };
        p.g.addEventListener('click', () => pick('pointer'));
        p.g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick('keyboard'); } });
      }
      function bindPart(p) {
        p.g.setAttribute('tabindex', '0'); p.g.setAttribute('role', 'button');
        p.g.classList.add('pk-draggable');
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
        const word = t(wide ? fy - 8 : ctrl.ry + 158, wide ? 22 : 20, P.lavender.dark, wide ? 62 : 0);
        const t1 = t(wide ? fy + 22 : ctrl.ry + 180, 13, P.peach.dark, wide ? 62 : 0);
        const t2 = t(wide ? fy + 42 : ctrl.ry + 196, 13, P.peach.dark, wide ? 62 : 0);
        const msg = t(ctrl.ry + ctrl.rh / 2 + 6, 17, P.ink.base);
        return { num, bar, den, word, t1, t2, msg };
      })();
      if (!print && o.hideFraction && !o.judge && !o.write) {
        const g = kit.el('g', null, uiL);
        kit.piece(st, g, { shape: { type: 'rect', w: ctrl.rw, h: 64, x: ctrl.rx, y: ctrl.ry, rx: 16 }, color: 'lavender', depth: 1, fill: P.lavender.light });
        kit.el('text', { x: ctrl.rx + ctrl.rw / 2, y: ctrl.ry + 38, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: P.lavender.dark }, g).textContent = '분수를 말해 봐요';
      }
      function readText() {
        const c = colored.size; const k = partEls.length;
        if (!isEqual()) return `조각 ${k}개의 크기가 서로 달라요.`;
        if (k === 1) return c ? '자르지 않은 전체를 색칠했어요.' : '아직 자르지 않은 전체예요.';
        return c ? `${k}분의 ${c}` : `전체를 똑같이 ${k}조각으로 나누었어요.`;
      }
      function paintReadout() {
        if (!read) return;
        const c = colored.size; const k = partEls.length; const eq = isEqual();
        const showFrac = eq && k > 1 && c > 0;
        [read.num, read.den, read.word, read.t1, read.t2].forEach((e) => { e.textContent = ''; });
        read.bar.setAttribute('display', showFrac ? 'inline' : 'none');
        read.msg.textContent = '';
        if (!showFrac) {
          read.msg.textContent = !eq ? '크기가 달라요' : k === 1 ? '자르지 않은 전체' : `똑같이 ${k}조각`;
          if (o.showTerms && eq && k > 1) { read.t2.textContent = '조각을 눌러 색칠해요'; }
          if (!eq) read.t2.textContent = '분수로 나타낼 수 없어요';
          return;
        }
        read.num.textContent = c; read.den.textContent = k;
        read.word.textContent = c === k ? `${k}분의 ${c} (= 1)` : `${k}분의 ${c}`;
        if (o.showTerms) { read.t1.textContent = `분자 ${c}: 색칠한 조각 수`; read.t2.textContent = `분모 ${k}: 전체 조각 수`; }
      }

      // ---- 조각 수 단추(스테퍼) ----
      const button = (x, y, w, h, color, text, label, onPress, size = 30) => {
        const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': label, class: 'pk-draggable fr-btn' }, uiL);
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
        stepperG.push(lab, countText,
          button(ctrl.ox - 42, ctrl.oy + 36, 56, 56, 'lavender', '−', '조각 수 줄이기', (via) => setN(n - 1, via), 34).g,
          button(ctrl.ox + 42, ctrl.oy + 36, 56, 56, 'mint', '+', '조각 수 늘리기', (via) => setN(n + 1, via), 34).g);
        // 조각 수를 바꾸면 색칠이 지워진다는 것을 말해 준다(말없이 지워지면 3학년은 까닭을 모른다)
        noteText = kit.el('text', { x: ctrl.ox, y: ctrl.oy + 88, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: P.rose.dark }, uiL);
      }
      const note = (t) => { if (noteText) noteText.textContent = t; };
      const judgeBtns = [];
      let lookMsg = null;
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
          judgeBtns.push({ val, b }); return b;
        };
        kit.el('text', { x: pos.label[0], y: pos.label[1], 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: P.ink.base }, uiL).textContent = '똑같이 나누었나요?';
        mk(true, pos.t, '똑같이 나눴어요', 'mint');
        mk(false, pos.f, '똑같지 않아요', 'rose');
        button(pos.look[0], pos.look[1], pos.w, 54, 'sky', '겹쳐 보기', '겹쳐 보기: 가장 작은 조각을 가장 큰 조각 위에 겹쳐요', () => overlay(), 18);
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
          if (which === 'num') wNum = kit.clamp((wNum ?? 0) + d, 0, maxN); else wDen = kit.clamp((wDen ?? 0) + d, 1, maxN);
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

      const state = () => ({ shape, n: partEls.length, cuts: cuts ? [...cuts] : null, colored: [...colored].sort((a, b) => a - b), judge, equal: isEqual(), num: colored.size, looked, picked, wNum, wDen });
      function setState(s, animate) {
        s = s || {};
        cuts = Array.isArray(s.cuts) && s.cuts.length ? s.cuts.slice() : null;
        n = cuts ? (shape === 'pizza' ? cuts.length : cuts.length + 1) : kit.clamp(s.n || o.startN || 1, 1, maxN);
        colored = new Set((s.colored || []).filter((i) => i >= 0 && i < n));
        judge = s.judge === true || s.judge === false ? s.judge : null;
        picked = Number.isInteger(s.picked) ? s.picked : null; looked = s.looked || 0; needLook = false;
        wNum = s.wNum ?? null; wDen = s.wDen ?? null;
        buildParts(animate); paintCount(); paintJudge(); paintWrite();
      }
      const start = () => ({ n: o.startN || 1 });
      setState(start(), false);

      return {
        getState: state,
        setState: (s) => setState(s, false),
        reset() { setState(start(), false); },
        solve(t) {
          if ('equal' in t) { judge = t.equal; needLook = false; if (o.judgeWhy && !t.equal) picked = biggest()[0]; paintJudge(); paintParts(); return; }
          if (o.write && t.den) { wNum = t.num; wDen = t.den; paintWrite(); return; }
          if (t.proper) { cuts = null; n = 0; setN(5, 'solve', true); colored = new Set([0, 1]); paintParts(); return; }
          if (t.den) { cuts = null; n = 0; setN(t.den, 'solve', true); }
          if (t.num) { colored = new Set(Array.from({ length: t.num }, (_, i) => i)); paintParts(); }
        },
        check(t) {
          const terms = (d, c) => ` 분모 ${d}${eun(d)} 전체를 똑같이 나눈 조각 수, 분자 ${c}${eun(c)} 색칠한 조각 수예요.`;
          if ('equal' in t) {
            if (judge === null) return { correct: false, feedback: '‘똑같이 나눴어요’와 ‘똑같지 않아요’ 중 하나를 골라 주세요.', hint: '‘겹쳐 보기’를 눌러 조각끼리 크기를 견주어 보세요. 모든 조각의 크기가 같아야 똑같이 나눈 거예요.' };
            // 두 단추 중 하나라 틀린 뒤 반대 단추만 누르면 맞힐 수 있다 — 다시 고르기 전에 겹쳐 보기로 근거를 확인하게 한다
            if (needLook) return { correct: false, feedback: '먼저 ‘겹쳐 보기’를 눌러 조각의 크기를 견주어 본 뒤에 다시 골라요.', hint: '겹친 조각에 남거나 모자라는 부분이 있으면 크기가 다른 거예요.' };
            if (judge !== t.equal) {
              needLook = true;
              return { correct: false, feedback: '다시 살펴볼까요? 조각 수가 아니라 조각의 크기를 봐요. ‘겹쳐 보기’를 눌러 보세요.', hint: '가장 큰 조각과 가장 작은 조각을 겹쳐 보세요. 크기가 모두 같아야 똑같이 나눈 거예요.' };
            }
            if (o.judgeWhy && !t.equal && !biggest().includes(picked)) {
              return { correct: false, feedback: picked == null ? '맞아요, 똑같지 않아요. 그럼 가장 큰 조각은 어느 것인가요? 눌러 보세요.' : '고른 조각보다 더 큰 조각이 있어요.', hint: '조각을 둘씩 견주어 보세요. 다른 조각을 모두 덮을 만큼 넓은 조각이 가장 큰 조각이에요.' };
            }
            return { correct: true, feedback: t.equal ? '맞아요! 모든 조각의 크기가 같으니 똑같이 나눈 거예요.' : '맞아요! 조각의 크기가 서로 달라서 똑같이 나눈 것이 아니에요. 그래서 분수로 나타낼 수 없어요.' };
          }
          if (o.write) {
            const k = partEls.length; const c = colored.size;
            if (wNum == null || wDen == null) return { correct: false, feedback: '분자와 분모를 모두 정해 주세요.', hint: '전체 조각 수를 세어 분모(아래)에, 색칠한 조각 수를 세어 분자(위)에 써요.' };
            if (wNum === k && wDen === c && k !== c) return { correct: false, feedback: '분모와 분자가 바뀌었어요.', hint: '분모는 아래에 쓰는 수로, 전체를 똑같이 나눈 조각 수예요.' };
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
            return { correct: true, feedback: `${k}분의 ${c}${eul(c)} 만들었어요! 짝이 말한 분수와 같은지 짝에게 확인해요.${terms(k, c)}` };
          }
          if (!isEqual()) return { correct: false, feedback: '조각의 크기가 서로 달라요. 분수는 똑같이 나눈 조각으로 나타내요.', hint: `전체를 똑같이 ${t.den}조각으로 나누어요.` };
          if (k !== t.den) return { correct: false, feedback: `지금은 ${k}조각이에요. ${k < t.den ? '조금 더 잘라야 해요.' : '너무 많이 잘랐어요.'}`, hint: `분모 ${t.den}${eun(t.den)} 전체를 똑같이 나눈 조각 수예요. 단추로 조각 수를 ${t.den}${ro(t.den)} 맞춰요.` };
          if (t.num == null) return { correct: true, feedback: `맞아요! 전체를 똑같이 ${t.den}조각으로 나누었어요.` };
          if (c !== t.num) return { correct: false, feedback: `조각은 알맞게 나누었어요. 지금 색칠한 조각은 ${c}개예요.${c > t.num ? ' 칠한 조각을 한 번 더 누르면 색이 지워져요.' : ''}`, hint: `분자 ${t.num}${eun(t.num)} 색칠한 조각 수예요. 조각을 눌러 ${t.num}조각만 색칠해요.` };
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
