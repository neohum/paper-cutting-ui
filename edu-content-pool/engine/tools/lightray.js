/* 거울과 빛의 길 — 손전등 빛이 곧게 나아가다 거울에서 반사되어 별에 닿게 한다.
 * 거울은 반짝이는 앞면만 빛을 반사한다(뒷면은 막힘). 반사는 "들어온 각 = 나간 각"으로 계산한다.
 * 옵션: scene('up'|'tilt'|'back'|'periscope'|'zigzag'|'down'), step(거울 회전 스냅, 기본 15°), showAngles(들어온 각·나간 각 표시),
 *       hideRay(활동지: 빛의 길을 학생이 그린다), start(거울 처음 각도 배열), print,
 *       revealOnLit(빛이 별에 닿으면 각도 표시를 한 번 보여 줌 — 기본 단계), predict(도전: 거울에서 나간 빛은 '확인'을 눌러야 보임)
 * 상태: { mirrors:[각도…], hit:'star'|'back'|'block'|'wall', bounces } / check({hit:'star', bounces?})
 */
(function (K) {
  const W = 480; const H = 320; const HALF = 36; const SR = 20; const EDGE = 8;
  const RM = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // 시작 각도는 정답에서 60~90° 떨어뜨린다(한두 칸만 돌려 맞히지 않게). 정답: up 315, tilt 15, back 255, down 225, periscope 315·135, zigzag 225·315
  // 각도: 화면 기준 0°=오른쪽, 시계 방향 +. 거울 각도도 같은 기준(kit.rotate 값과 같다).
  const SCENES = {
    up: { lamp: { x: 56, y: 240, a: 0 }, mirrors: [{ x: 300, y: 240, start: -15 }], star: { x: 300, y: 70 }, blocks: [] },
    tilt: { lamp: { x: 56, y: 70, a: 30 }, mirrors: [{ x: 264, y: 190, start: -75 }], star: { x: 430, y: 190 }, blocks: [] },
    back: { lamp: { x: 56, y: 80, a: 0 }, mirrors: [{ x: 380, y: 80, start: -15 }], star: { x: 120, y: 230 }, blocks: [] },
    down: { lamp: { x: 56, y: 150, a: 0 }, mirrors: [{ x: 300, y: 150, start: 330 }], star: { x: 300, y: 284 }, blocks: [] },
    periscope: {
      lamp: { x: 56, y: 260, a: 0 }, mirrors: [{ x: 160, y: 260, start: 255 }, { x: 160, y: 80, start: 60 }],
      star: { x: 420, y: 80 }, blocks: [{ x: 244, y: 130, w: 52, h: 182 }],
    },
    zigzag: {
      lamp: { x: 56, y: 70, a: 0 }, mirrors: [{ x: 330, y: 70, start: 300 }, { x: 330, y: 250, start: 15 }],
      star: { x: 120, y: 250 }, blocks: [{ x: 170, y: 110, w: 60, h: 90 }],
    },
  };
  const rad = (d) => (d * Math.PI) / 180;
  const deg = (r) => (r * 180) / Math.PI;

  K.registerTool('lightray', {
    name: '거울과 빛의 길',
    create(box, o, kit) {
      const sc = SCENES[o.scene] || SCENES.up;
      const lamp = sc.lamp; const mirrors = sc.mirrors; const star = sc.star; const blocks = sc.blocks;
      const step = o.step || 15;
      const st = kit.stage(box, { viewBox: [W, H], label: '거울과 빛의 길. 거울을 돌려 손전등 빛이 별에 닿게 하세요.', background: '#F3EEE4' });
      const back = st.layer('back');
      const rayL = st.layer('ray');
      const top = st.layer('top');

      // 밤하늘 느낌의 바닥 종이(정적, 큰 조각이라 결 텍스처 사용)
      kit.piece(st, back, { shape: { type: 'rect', x: 6, y: 6, w: W - 12, h: H - 12, rx: 14 }, color: 'lavender', fill: kit.palette.lavender.light, depth: 1, texture: true });
      [[90, 40], [200, 30], [440, 140], [40, 300], [460, 290]].forEach(([x, y], i) => {
        kit.piece(st, back, { shape: { type: 'circle', r: 2.5 + (i % 2) }, color: 'cream', depth: 0, flat: true, x, y });
      });

      // 가림판
      blocks.forEach((b) => {
        kit.piece(st, back, { shape: { type: 'rect', x: b.x, y: b.y, w: b.w, h: b.h, rx: 6 }, color: 'peach', depth: 3, texture: true });
        kit.piece(st, back, { shape: { type: 'rect', x: b.x + 6, y: b.y + 6, w: b.w - 12, h: Math.min(26, b.h - 12), rx: 4 }, color: 'cream', depth: 1 });
        kit.el('text', { x: b.x + b.w / 2, y: b.y + 6 + Math.min(26, b.h - 12) / 2 + 5, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#6E3B21' }, back).textContent = '가림판';
      });

      // 별(목표): 바깥 g는 자리, 안쪽 g는 통통 튀는 움직임
      const starG = kit.el('g', { class: 'lr-star', 'aria-label': '별' }, back);
      kit.transform(starG, { x: star.x, y: star.y });
      const glow = kit.el('g', null, starG);
      kit.el('circle', { r: 30, fill: '#FEE396', opacity: 0.55 }, glow);
      for (let i = 0; i < 8; i++) {
        kit.piece(st, glow, { shape: { type: 'poly', points: '-3,-30 3,-30 0,-42' }, color: 'buttercup', depth: 0, flat: true, r: i * 45 });
      }
      kit.transform(glow, { s: 0.001 });
      const starIn = kit.el('g', null, starG);
      const pts = []; for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i - Math.PI / 2; const r = i % 2 ? 9 : 21; pts.push(`${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`); }
      const starP = kit.piece(st, starIn, { shape: { type: 'poly', points: pts.join(' ') }, color: 'lavender', depth: 2 });

      // 손전등(정적): 몸통·머리·렌즈·단추 종이
      const lampG = kit.el('g', { 'aria-label': '손전등' }, top);
      kit.piece(st, lampG, { shape: { type: 'rect', x: -44, y: -10, w: 36, h: 20, rx: 6 }, color: 'peach', depth: 2 });
      kit.piece(st, lampG, { shape: { type: 'poly', points: '-12,-11 8,-17 8,17 -12,11' }, color: 'buttercup', depth: 2 });
      kit.piece(st, lampG, { shape: { type: 'rect', x: 6, y: -15, w: 6, h: 30, rx: 3 }, color: 'cream', depth: 1 });
      kit.piece(st, lampG, { shape: { type: 'circle', r: 4, cx: -28, cy: -10 }, color: 'rose', depth: 1 });
      kit.transform(lampG, { x: lamp.x, y: lamp.y, r: lamp.a });

      // 빛줄기: 고정된 조각 묶음을 transform(평행이동·회전·길이 늘이기)으로만 바꾼다
      const MAXSEG = 6;
      const segs = [];
      for (let i = 0; i < MAXSEG; i++) {
        const g = kit.el('g', { class: 'lr-seg', 'pointer-events': 'none' }, rayL);
        kit.el('rect', { x: 0, y: -6, width: 1, height: 12, fill: '#FEE396', opacity: 0.55 }, g);
        kit.el('rect', { x: 0, y: -1.8, width: 1, height: 3.6, fill: '#FFF6C8' }, g);
        g.setAttribute('display', 'none');
        segs.push(g);
      }
      const photons = [];
      if (!o.print && !RM) for (let i = 0; i < 4; i++) photons.push(kit.el('circle', { r: 3.6, fill: '#FFFFFF', stroke: '#EDC96C', 'stroke-width': 1.5, 'pointer-events': 'none' }, rayL));
      if (o.hideRay) rayL.setAttribute('display', 'none');
      const endDot = kit.el('g', { 'pointer-events': 'none' }, rayL);
      kit.el('circle', { r: 6, fill: '#3D352E', opacity: 0.35 }, endDot);

      // 법선(거울에 수직인 선)과 각도 표시: 쉬움 단계에서만
      const showAnglesOpt = o.showAngles && !o.print;
      const predict = !!o.predict && !o.print; let revealed = false;
      let showAngles = showAnglesOpt;
      const normals = mirrors.map(() => {
        const g = kit.el('g', { 'pointer-events': 'none', display: 'none' }, rayL);
        kit.el('line', { x1: 0, y1: 0, x2: 46, y2: 0, stroke: '#473B6B', 'stroke-width': 1.6, 'stroke-dasharray': '4 4' }, g);
        return g;
      });
      const readout = kit.el('text', { x: W / 2, y: 28, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#473B6B' }, top);

      // 거울: 반짝이는 앞면(하늘색)이 각도 0°일 때 위쪽(-y)을 본다. 뒷면은 복숭아색 빗금.
      const angles = mirrors.map((m, i) => ((o.start && o.start[i] != null) ? o.start[i] : m.start));
      const rots = mirrors.map((m, i) => {
        const g = kit.el('g', { class: 'lr-mirror' }, top);
        kit.el('circle', { cx: m.x, cy: m.y, r: 40, class: 'pk-hit' }, g);
        kit.piece(st, g, { shape: { type: 'rect', x: m.x - HALF, y: m.y, w: HALF * 2, h: 9, rx: 3 }, color: 'peach', depth: 1 });
        for (let k = 0; k < 7; k++) kit.el('line', { x1: m.x - HALF + 6 + k * 10, y1: m.y + 8, x2: m.x - HALF + 12 + k * 10, y2: m.y + 2, stroke: '#6E3B21', 'stroke-width': 1.2, 'pointer-events': 'none' }, g);
        kit.piece(st, g, { shape: { type: 'rect', x: m.x - HALF, y: m.y - 6, w: HALF * 2, h: 6, rx: 2 }, color: 'sky', fill: '#DDEFF5', depth: 1 });
        kit.el('line', { x1: m.x - HALF + 6, y1: m.y - 4, x2: m.x - 4, y2: m.y - 4, stroke: '#FFFFFF', 'stroke-width': 1.6, 'stroke-linecap': 'round', 'pointer-events': 'none' }, g);
        kit.piece(st, g, { shape: { type: 'circle', r: 8, cx: m.x + HALF + 6, cy: m.y }, color: 'rose', depth: 1 });
        kit.piece(st, g, { shape: { type: 'circle', r: 4, cx: m.x, cy: m.y }, color: 'cream', depth: 0 });
        const r = kit.rotate(st, g, {
          center: [m.x, m.y], step, value: angles[i], label: mirrors.length > 1 ? `거울 ${i + 1}` : '거울',
          valueText: (v) => `${mirrors.length > 1 ? `거울 ${i + 1}` : '거울'} ${Math.round(kit.norm(v))}도`,
          onChange(v, via) { angles[i] = v; if (via !== 'program') revealed = false; paint(true); },
          onStart() { kit.tick(); },
          onEnd(v) { angles[i] = v; paint(true); kit.recorder.log('lightray', state()); kit.announce(predict ? `${mirrors.length > 1 ? `거울 ${i + 1}` : '거울'} ${Math.round(kit.norm(v))}도` : sayState()); },
        });
        return r;
      });

      // ---- 빛의 길 계산(직진 + 반사) ----
      function trace(ang) {
        const a0 = rad(lamp.a);
        let d = { x: Math.cos(a0), y: Math.sin(a0) };
        let p = { x: lamp.x + d.x * 14, y: lamp.y + d.y * 14 };
        const path = [p]; const hits = []; let hit = 'wall'; let bounces = 0; let last = -1; let backOf = -1;
        for (let k = 0; k < MAXSEG; k++) {
          let best = { t: Infinity, kind: 'wall' };
          // 벽(무대 가장자리)
          const tx = d.x > 1e-9 ? (W - EDGE - p.x) / d.x : d.x < -1e-9 ? (EDGE - p.x) / d.x : Infinity;
          const ty = d.y > 1e-9 ? (H - EDGE - p.y) / d.y : d.y < -1e-9 ? (EDGE - p.y) / d.y : Infinity;
          best.t = Math.min(tx, ty);
          mirrors.forEach((m, i) => {
            if (i === last) return;
            const r = rad(ang[i]); const u = { x: Math.cos(r), y: Math.sin(r) };
            const det = -d.x * u.y + u.x * d.y;
            if (Math.abs(det) < 1e-9) return;
            const wx = m.x - p.x; const wy = m.y - p.y;
            const t = (-wx * u.y + u.x * wy) / det; const s = (d.x * wy - d.y * wx) / det;
            if (t > 1e-6 && Math.abs(s) <= HALF && t < best.t) best = { t, kind: 'mirror', i, u };
          });
          blocks.forEach((b) => {
            let t0 = -Infinity; let t1 = Infinity;
            for (const [pp, dd, lo, hi] of [[p.x, d.x, b.x, b.x + b.w], [p.y, d.y, b.y, b.y + b.h]]) {
              if (Math.abs(dd) < 1e-9) { if (pp < lo || pp > hi) { t0 = Infinity; } continue; }
              const a = (lo - pp) / dd; const c = (hi - pp) / dd;
              t0 = Math.max(t0, Math.min(a, c)); t1 = Math.min(t1, Math.max(a, c));
            }
            if (t0 <= t1 && t0 > 1e-6 && t0 < best.t) best = { t: t0, kind: 'block' };
          });
          {
            const wx = star.x - p.x; const wy = star.y - p.y; const pr = wx * d.x + wy * d.y;
            const dist2 = wx * wx + wy * wy - pr * pr;
            if (pr > 0 && dist2 < SR * SR) { const t = pr - Math.sqrt(SR * SR - dist2); if (t < best.t) best = { t, kind: 'star' }; }
          }
          const q = { x: p.x + d.x * best.t, y: p.y + d.y * best.t };
          path.push(q);
          if (best.kind === 'mirror') {
            const n = { x: best.u.y, y: -best.u.x }; // 앞면 쪽 법선
            const dn = d.x * n.x + d.y * n.y;
            if (dn >= 0) { hit = 'back'; backOf = best.i; break; }
            const nd = { x: d.x - 2 * dn * n.x, y: d.y - 2 * dn * n.y };
            hits.push({ i: best.i, x: q.x, y: q.y, n, inc: Math.round(deg(Math.acos(Math.min(1, -dn)))) });
            d = nd; p = q; last = best.i; bounces++;
            continue;
          }
          hit = best.kind; break;
        }
        return { path, hits, hit, bounces, backOf };
      }

      let cur = trace(angles);
      let lit = false;
      let lens = []; let total = 0;
      function paint(anim) {
        cur = trace(angles);
        // 기본 단계: 별에 닿은 순간에는 각도 표시를 보여 준다(들어온 각 = 나간 각을 한 번은 눈으로 보게)
        showAngles = showAnglesOpt || (!!o.revealOnLit && !o.print && cur.hit === 'star' && (!predict || revealed));
        const hideOut = predict && !revealed; // 도전: 거울에서 나간 빛은 확인 전까지 숨긴다
        lens = []; total = 0;
        for (let i = 0; i < MAXSEG; i++) {
          const a = cur.path[i]; const b = cur.path[i + 1];
          if (!b || (hideOut && i > 0)) { segs[i].setAttribute('display', 'none'); continue; }
          const len = Math.hypot(b.x - a.x, b.y - a.y);
          lens.push(len); total += len;
          segs[i].setAttribute('display', 'inline');
          segs[i].setAttribute('transform', `translate(${a.x.toFixed(2)} ${a.y.toFixed(2)}) rotate(${deg(Math.atan2(b.y - a.y, b.x - a.x)).toFixed(2)}) scale(${len.toFixed(2)} 1)`);
        }
        const end = cur.path[cur.path.length - 1];
        kit.transform(endDot, { x: end.x, y: end.y });
        endDot.setAttribute('display', (cur.hit === 'back' || cur.hit === 'block') && !(hideOut && cur.path.length > 2) ? 'inline' : 'none');
        normals.forEach((g, i) => {
          const h = showAngles && cur.hits.find((x) => x.i === i);
          if (!h) { g.setAttribute('display', 'none'); return; }
          g.setAttribute('display', 'inline');
          kit.transform(g, { x: h.x, y: h.y, r: deg(Math.atan2(h.n.y, h.n.x)), cx: 0, cy: 0 });
        });
        if (showAngles && cur.hits.length) {
          readout.textContent = cur.hits.map((h, k) => `${mirrors.length > 1 ? `거울 ${h.i + 1}: ` : ''}들어온 각 ${h.inc}° · 나간 각 ${h.inc}°`).join('   ');
        } else if (showAngles && cur.hit === 'back') readout.textContent = '거울 뒷면은 빛을 반사하지 않아요';
        else if (hideOut) readout.textContent = '빛이 어디로 갈지 예상하고 확인을 눌러 보세요';
        else readout.textContent = '';
        const nowLit = cur.hit === 'star' && !hideOut;
        if (nowLit !== lit) setLit(nowLit, anim);
      }
      let stopStar = null; let stopGlow = null;
      function setLit(on, animate) {
        lit = on;
        starP.setColor(on ? 'buttercup' : 'lavender');
        // 끌다가 정답을 지나쳐도 빛무리가 남지 않게 두 스프링을 모두 멈춘다
        if (stopStar) { stopStar(); stopStar = null; }
        if (stopGlow) { stopGlow(); stopGlow = null; }
        if (on && animate && !o.print) {
          stopStar = kit.spring(1.5, 1, { stiffness: 220, damping: 10, onUpdate: (v) => kit.transform(starIn, { s: v, r: (v - 1) * 40 }) });
          stopGlow = kit.spring(0.001, 1, { stiffness: 160, damping: 12, onUpdate: (v) => { if (lit) kit.transform(glow, { s: Math.max(0.001, v) }); } });
        } else {
          kit.transform(starIn, { s: 1, r: 0 });
          kit.transform(glow, { s: on && !o.print ? 1 : 0.001 });
        }
      }

      // 빛 알갱이가 길을 따라 흐른다(transform만, 화면에서 떼어지면 멈춘다)
      if (photons.length) {
        const t0 = performance.now();
        const loop = (t) => {
          if (!st.svg.isConnected) return;
          if (total > 0) {
            photons.forEach((ph, k) => {
              let dpos = (((t - t0) / 1000) * 150 + (k * total) / photons.length) % total;
              let i = 0; while (i < lens.length - 1 && dpos > lens[i]) { dpos -= lens[i]; i++; }
              const a = cur.path[i]; const b = cur.path[i + 1]; const f = lens[i] ? dpos / lens[i] : 0;
              kit.transform(ph, { x: a.x + (b.x - a.x) * f, y: a.y + (b.y - a.y) * f });
            });
          }
          requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
      }

      const sayState = () => ({ star: '빛이 별에 닿았어요!', back: '빛이 거울 뒷면에 막혔어요.', block: '빛이 가림판에 막혔어요.', wall: '빛이 별을 비껴 갔어요.' }[cur.hit]);
      const state = () => ({ mirrors: angles.map((a) => Math.round(kit.norm(a))), hit: cur.hit, bounces: cur.bounces });
      const setAngles = (arr, animate) => {
        arr.forEach((a, i) => { if (i < rots.length && a != null) { angles[i] = a; rots[i].set(a); } });
        paint(!!animate);
      };
      const ok = (s, t) => s.hit === (t.hit || 'star') && (t.bounces == null || s.bounces === t.bounces);
      function find(t) {
        for (const sstep of [step, 5, 1]) {
          const n = Math.round(360 / sstep);
          const combos = mirrors.length === 1 ? n : n * n;
          for (let c = 0; c < combos; c++) {
            const arr = mirrors.length === 1 ? [c * sstep] : [Math.floor(c / n) * sstep, (c % n) * sstep];
            if (ok(trace(arr), t)) return arr;
          }
        }
        return null;
      }
      paint(false);

      return {
        getState: state,
        setState(s) { if (s && s.mirrors) setAngles(s.mirrors, false); },
        reset() { revealed = false; setAngles(mirrors.map((m, i) => ((o.start && o.start[i] != null) ? o.start[i] : m.start)), false); },
        solve(t) { const arr = find(t || { hit: 'star' }); if (arr) setAngles(arr, true); },
        check(t) {
          if (predict && !revealed) { revealed = true; paint(true); }
          const s = state();
          if (ok(s, t)) return { correct: true, feedback: `맞아요! 빛이 거울${s.bounces > 1 ? ` ${s.bounces}개` : ''}에서 방향을 바꿔 별에 닿았어요.` };
          if (s.hit === 'star') return { correct: false, feedback: `별에 닿았지만, 이번에는 거울 ${t.bounces}개를 거쳐야 해요.`, hint: '가림판을 피해 거울을 모두 지나가게 해 보세요.' };
          if (s.hit === 'back' && !(mirrors.length > 1 && cur.backOf === 1)) return { correct: false, feedback: `빛이 ${mirrors.length > 1 ? `거울 ${cur.backOf + 1}의 ` : '거울 '}뒷면에 닿았어요. 뒷면은 빛을 반사하지 않아요.`, hint: '반짝이는 하늘색 앞면이 빛이 오는 쪽을 보도록 거울을 돌려 보세요.' };
          if (s.hit === 'block') return { correct: false, feedback: '빛이 가림판에 막혔어요. 빛은 곧게 나아가요.', hint: mirrors.length > 1 ? '첫 번째 거울로 빛을 두 번째 거울에 보내고, 두 번째 거울로 별에 보내 보세요.' : '거울을 돌려 가림판을 피해 보세요.' };
          if (mirrors.length > 1) {
            // 거울 1부터: 빛이 거울 2에 닿았는지(앞면이든 뒷면이든)로 어느 거울을 고칠지 알려 준다
            const reached2 = cur.hits.some((h) => h.i === 1) || cur.backOf === 1;
            if (!reached2) return { correct: false, feedback: '빛이 거울 2에 닿지 않았어요. 거울 1부터 맞춰요.', hint: '먼저 거울 1을 돌려 빛을 거울 2로 보내요. 그다음 거울 2를 돌려 별로 보내요.' };
            if (s.hit === 'back') return { correct: false, feedback: '거울 1은 잘 맞췄어요. 빛이 거울 2의 뒷면에 닿았어요.', hint: '거울 2의 반짝이는 하늘색 앞면이 거울 1 쪽을 보도록 돌려 보세요.' };
            return { correct: false, feedback: '거울 1은 잘 맞췄어요. 이제 거울 2를 돌려 빛을 별로 보내요.', hint: '빛이 거울에 들어온 각과 나간 각은 같아요. 거울 2에서 나간 빛이 별 쪽으로 가도록 기울여 보세요.' };
          }
          return { correct: false, feedback: '빛이 별을 비껴 갔어요. 거울을 조금씩 돌려 보세요.', hint: '빛이 거울에 들어온 각과 나간 각은 같아요. 거울에 부딪힌 빛이 별 쪽으로 가도록 거울을 기울여 보세요.' };
        },
        async demo(t) {
          const arr = find(t || { hit: 'star' }); if (!arr) return;
          const from = angles.slice();
          const to = arr.map((a, i) => { let d = ((a - from[i]) % 360 + 540) % 360 - 180; return from[i] + d; });
          await kit.tween(1400, (p) => { to.forEach((v, i) => { angles[i] = from[i] + (v - from[i]) * p; rots[i].set(angles[i]); }); }); paint(true);
          kit.announce(sayState());
        },
      };
    },
  });
})(window.PaperKit);
