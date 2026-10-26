/* 선대칭 접기 종이 — 모눈 종이 위 대칭축(점선)과 도형의 반쪽이 있다. 학생은 대응점 핀을 모눈 교점에 끌어 놓고,
 * '접기'를 누르면 종이가 대칭축을 따라 접혀(한 방향 늘이기 sx/sy: 1 → -1) 핀이 원래 꼭짓점과 포개지는지 보여 준다.
 * 채점은 대응점 쌍마다 따로 한다: 건너편에 있는가, 대칭축과 수직인 선 위에 있는가, 대칭축까지의 칸 수가 같은가.
 * 옵션: cols·rows(모눈 칸, 기본 10×7), axis('v'|'h'), at(대칭축 자리, 기본 가운데), half([[x,y]…] 반쪽 꼭짓점 — 처음·끝은 대칭축 위),
 *       only(핀을 줄 꼭짓점 이름들; 나머지 대응점은 미리 찍혀 나옴), showDistance(쉬움: 대칭축까지 칸 수), showLinks(대응점을 잇는 선),
 *       allowFold(접기 단추, 기본 참), revealAfterCheck(완성 모양을 확인 뒤에만 보임 — 접어 보기도 확인을 누른 뒤에 한 번씩만 열린다), ask({q, choices[], why?[]}: 고르기 칸), print
 * 상태: { pins: { ㄴ: [x,y]|null, … }, pick? } / target: { complete:true } | { pins:['ㄴ'] } (+ ask: 정답 번호)
 */
(function (K) {
  'use strict';
  const NAMES = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ', 'ㅈ', 'ㅊ'];
  const RM = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  // 힌트 단계(플레이어가 { level, attempts }를 준다): 1 개념·전략만(문항의 수·자리·이름 없음), 2 틀린 단계 짚기, 3 풀이 한 단계.
  // 시도 수보다 높은 단계는 주지 않는다 — 시도 0 → 1단계, 1 → 2단계까지, 2 이상 → 3단계까지
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  const josa = (w, a, b) => { const c = String(w).replace(/'$/, '').slice(-1).charCodeAt(0); const has = (c >= 0x3131 && c <= 0x314E) || (c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 !== 0); return `${w}${has ? a : b}`; };

  K.registerTool('mirrorfold', {
    name: '선대칭 접기 종이',
    create(box, o, kit) {
      const COLS = o.cols || 10; const ROWS = o.rows || 7; const C = 36; const OX = 20; const OY = 20;
      const vAxis = o.axis !== 'h';
      const A = o.at != null ? o.at : (vAxis ? COLS / 2 : ROWS / 2);
      const half = (o.half || [[A, 1], [A - 3, 3], [A - 2, 3], [A - 2, 6], [A, 6]]).map((p) => p.slice());
      const print = !!o.print;
      const W = OX * 2 + COLS * C;
      const trayRow = ROWS + 1;
      const H = print ? OY * 2 + ROWS * C : OY + trayRow * C + 24 + 64;
      const st = kit.stage(box, { viewBox: [W, H], label: '모눈 종이 위 대칭축과 도형의 반쪽. 대응점 핀을 모눈 교점에 놓아 선대칭도형을 완성하세요.' });
      const px = (p) => ({ x: OX + p[0] * C, y: OY + p[1] * C });
      // 대칭축 기준 좌표: along(축을 따라), d(축까지 부호 있는 칸 수)
      const along = (p) => (vAxis ? p[1] : p[0]);
      const dist = (p) => (vAxis ? p[0] - A : p[1] - A);
      const mirror = (p) => (vAxis ? [2 * A - p[0], p[1]] : [p[0], 2 * A - p[1]]);
      const same = (a, b) => a && b && a[0] === b[0] && a[1] === b[1];

      const verts = half.map((p, i) => ({ id: NAMES[i], p, onAxis: dist(p) === 0 }));
      const off = verts.filter((v) => !v.onAxis);
      const movable = new Set(Array.isArray(o.only) ? o.only : off.map((v) => v.id));
      const pinIds = off.filter((v) => movable.has(v.id)).map((v) => v.id);
      const vOf = Object.fromEntries(verts.map((v) => [v.id, v]));
      const side = Math.sign(dist(off[0] ? off[0].p : [A + 1, A + 1])) || -1; // 도형이 놓인 쪽

      // ---- 종이와 모눈 ----
      const back = st.layer('back');
      kit.piece(st, back, { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: (print ? H : OY + ROWS * C + 12) - 16 + 8, rx: 14 }, color: 'cream', fill: '#FBF6EA', depth: 2, texture: true });
      for (let c = 0; c <= COLS; c++) kit.el('line', { x1: OX + c * C, y1: OY, x2: OX + c * C, y2: OY + ROWS * C, stroke: '#CDBFA8', 'stroke-width': 1, class: 'mf-grid' }, back);
      for (let r = 0; r <= ROWS; r++) kit.el('line', { x1: OX, y1: OY + r * C, x2: OX + COLS * C, y2: OY + r * C, stroke: '#CDBFA8', 'stroke-width': 1, class: 'mf-grid' }, back);

      // 층 순서: 도형(아래) → 접히는 종이·핀(위). 도형·안내 층은 누르기를 받지 않아 그 위에 놓인 핀도 다시 집을 수 있다
      const figL = st.layer('figure'); figL.setAttribute('pointer-events', 'none');
      // 접히는 쪽 종이(핀이 놓이는 쪽) — 접을 때 이 묶음 전체가 대칭축을 따라 뒤집힌다
      const foldG = kit.el('g', null, st.layer('fold'));
      const ax = vAxis ? OX + A * C : OY + A * C;
      const flapRect = vAxis
        ? (side < 0 ? { x: ax, y: OY, w: OX + COLS * C - ax, h: ROWS * C } : { x: OX, y: OY, w: ax - OX, h: ROWS * C })
        : (side < 0 ? { x: OX, y: ax, w: COLS * C, h: OY + ROWS * C - ax } : { x: OX, y: OY, w: COLS * C, h: ax - OY });
      const flap = kit.el('rect', { x: flapRect.x, y: flapRect.y, width: flapRect.w, height: flapRect.h, fill: '#EEE6F7', opacity: 0, 'pointer-events': 'none' }, foldG);

      // 도형의 반쪽(고정)
      const pts = (arr) => arr.map((p) => { const q = px(p); return `${q.x},${q.y}`; }).join(' ');
      kit.el('polygon', { points: pts(half), fill: print ? '#FFFFFF' : '#FBD9C9', opacity: print ? 1 : 0.85, stroke: 'none', class: 'mf-half' }, figL);
      kit.el('polyline', { points: pts(half), fill: 'none', stroke: print ? '#000' : '#702830', 'stroke-width': 3, 'stroke-linejoin': 'round', 'stroke-linecap': 'round' }, figL);
      // 대칭축
      const axisLine = vAxis ? { x1: ax, y1: OY - 10, x2: ax, y2: OY + ROWS * C + 10 } : { x1: OX - 10, y1: ax, x2: OX + COLS * C + 10, y2: ax };
      kit.el('line', Object.assign({ stroke: print ? '#000' : '#473B6B', 'stroke-width': 2.4, 'stroke-dasharray': '8 6' }, axisLine), figL);
      // 이름표는 핀 쪽(도형 반대쪽)에 둔다 — 대칭축 위 꼭짓점 이름표는 도형 쪽이라 서로 겹치지 않는다
      const axTag = kit.el('text', vAxis ? { x: ax - side * 6, y: OY - 6, 'text-anchor': side < 0 ? 'start' : 'end', 'font-size': 13, class: 'pk-text', fill: '#473B6B' } : { x: OX + COLS * C - 4, y: ax - side * 16 + (side < 0 ? 0 : 10), 'text-anchor': 'end', 'font-size': 13, class: 'pk-text', fill: '#473B6B' }, figL);
      axTag.textContent = '대칭축';
      const labelAt = (p, d) => {
        // 이름표는 대칭축 바깥쪽으로 비켜 쓴다
        const q = px(p); const s = Math.sign(d) || 1;
        if (vAxis) return { x: q.x + s * 13, y: q.y - 8, 'text-anchor': s > 0 ? 'start' : 'end' };
        const right = q.x + 26 > OX + COLS * C + 14;
        return { x: right ? q.x - 9 : q.x + 9, y: q.y + s * 18, 'text-anchor': right ? 'end' : 'start' };
      };
      verts.forEach((v) => {
        const q = px(v.p);
        kit.el('circle', { cx: q.x, cy: q.y, r: 5, fill: print ? '#000' : '#702830' }, figL);
        kit.el('text', Object.assign({ 'font-size': 16, class: 'pk-text', fill: '#702830' }, labelAt(v.p, v.onAxis ? side : dist(v.p))), figL).textContent = v.id;
      });

      // 쉬움: 대칭축까지 칸 수(꼭짓점)
      const guideL = st.layer('guide'); guideL.setAttribute('pointer-events', 'none');
      if (o.showDistance) {
        off.forEach((v) => {
          const q = px(v.p); const f = px(vAxis ? [A, v.p[1]] : [v.p[0], A]);
          kit.el('line', { x1: q.x, y1: q.y, x2: f.x, y2: f.y, stroke: '#204C5A', 'stroke-width': 1.6, 'stroke-dasharray': '3 3' }, guideL);
          const n = Math.abs(dist(v.p));
          kit.el('text', vAxis ? { x: (q.x + f.x) / 2, y: q.y + 16, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#204C5A' } : { x: q.x - 6, y: (q.y + f.y) / 2 + 4, 'text-anchor': 'end', 'font-size': 13, class: 'pk-text', fill: '#204C5A' }, guideL).textContent = `${n}칸`;
        });
      }

      // 미리 찍혀 나오는 대응점(only로 핀을 주지 않은 꼭짓점)
      const givenL = kit.el('g', null, foldG);
      off.filter((v) => !movable.has(v.id)).forEach((v) => {
        const q = px(mirror(v.p));
        kit.el('circle', { cx: q.x, cy: q.y, r: 5, fill: print ? '#000' : '#702830' }, givenL);
        kit.el('text', Object.assign({ 'font-size': 16, class: 'pk-text', fill: '#702830' }, labelAt(mirror(v.p), -dist(v.p))), givenL).textContent = `${v.id}'`;
      });

      // 학생이 완성한 모양(모든 핀을 놓으면 보인다)
      const shape = kit.el('polygon', { points: '', fill: 'none', stroke: '#275C46', 'stroke-width': 2.6, 'stroke-dasharray': '7 4', 'stroke-linejoin': 'round', display: 'none', 'pointer-events': 'none' }, st.layer('shape'));
      const links = st.layer('links'); links.setAttribute('pointer-events', 'none');
      const linkEls = {};
      const distTxt = {};

      // ---- 핀 ----
      const pins = {}; const pinG = {};
      const trayX = (k) => (1 + 2 * (pinIds.length - 1) <= COLS - 3 ? 1 + 2 * k : 1 + k);
      const home = (id) => px([trayX(pinIds.indexOf(id)), trayRow]);
      const canDrag = !print;
      let folded = false; let busy = false; let checked = false; let pick = null;
      // 확인 전 숨김 문항: 접어 보기는 확인(맞든 틀리든)을 한 번 누를 때마다 한 번 열린다 — 접었다 폈다 하며 맞추지 않게
      let foldTokens = o.revealAfterCheck ? 0 : Infinity;
      if (!print && pinIds.length) {
        const trayY = OY + trayRow * C;
        kit.piece(st, back, { shape: { type: 'rect', x: 10, y: trayY - 24, w: W - 20, h: 48, rx: 14 }, color: 'lavender', fill: kit.palette.lavender.light, depth: 1 });
        kit.el('text', { x: W - 18, y: trayY + 5, 'text-anchor': 'end', 'font-size': 12, class: 'pk-text', fill: '#473B6B' }, back).textContent = '핀 놓는 곳';
      }
      pinIds.forEach((id) => {
        if (o.showLinks) linkEls[id] = kit.el('line', { stroke: '#204C5A', 'stroke-width': 1.6, 'stroke-dasharray': '2 4', display: 'none' }, links);
        if (o.showDistance) distTxt[id] = kit.el('text', { 'font-size': 13, class: 'pk-text', fill: '#275C46', 'text-anchor': 'middle', display: 'none', 'pointer-events': 'none' }, guideL);
        if (print) return;
        const g = kit.el('g', { class: 'mf-pin', 'aria-label': `점 ${id}'` }, foldG);
        kit.el('circle', { r: 26, class: 'pk-hit' }, g);
        kit.piece(st, g, { shape: { type: 'circle', r: 11 }, color: 'mint', depth: 2 });
        kit.el('circle', { r: 3, fill: '#173A2C', 'pointer-events': 'none' }, g);
        kit.el('text', { x: 0, y: -16, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#173A2C' }, g).textContent = `${id}'`;
        pinG[id] = g; pins[id] = null;
        kit.transform(g, home(id));
        let pointer = false;
        g.addEventListener('pointerdown', () => { pointer = true; });
        const at = (x, y) => [Math.round((x - OX) / C), Math.round((y - OY) / C)];
        const inGrid = ([c, r]) => c >= 0 && c <= COLS && r >= 0 && r <= ROWS;
        const taken = (q) => pinIds.some((k) => k !== id && same(pins[k], q));
        kit.drag(st, g, {
          keyStep: C,
          enabled: () => !folded && !busy,
          onStart() { kit.tick(); },
          // 키보드로 옮기는 중에도 놓인 자리를 바로 반영한다(Enter를 누르지 않은 학생도 같은 상태가 되게)
          onMove(x, y) { if (pointer) return; const q = at(x, y); if (inGrid(q) && !taken(q)) { pins[id] = q; paint(); } },
          snap(x, y) { const q = at(x, y); if (!inGrid(q)) return home(id); if (taken(q)) return null; return px(q); },
          onDrop(x, y) {
            pointer = false;
            const q = at(x, y); pins[id] = inGrid(q) ? q : null;
            checked = false; kit.tick('ok'); paint();
            kit.recorder.log('mirrorfold', state());
            kit.announce(pins[id] ? `점 ${josa(`${id}'`, '을', '를')} 놓았어요. 대칭축에서 ${Math.abs(dist(pins[id]))}칸${dist(pins[id]) === 0 ? ', 대칭축 위' : ''}이에요.` : `점 ${id}'을 핀 놓는 곳으로 돌려 놓았어요.`);
          },
          onReject() { pointer = false; kit.tick('no'); kit.announce('그 점에는 이미 다른 핀이 있어요'); },
        });
      });

      function outline() {
        // 반쪽 꼭짓점 → 대응점(거꾸로). 대칭축 위의 처음·끝 점은 함께 쓴다
        const back2 = [];
        for (let i = verts.length - 1; i >= 0; i--) {
          const v = verts[i]; if (v.onAxis) continue;
          back2.push(movable.has(v.id) ? pins[v.id] : mirror(v.p));
        }
        return back2.every(Boolean) ? half.concat(back2) : null;
      }
      function paint() {
        if (print) return;
        const full = outline();
        const show = full && !folded && (!o.revealAfterCheck || checked);
        shape.setAttribute('display', show ? 'inline' : 'none');
        if (full) shape.setAttribute('points', pts(full));
        pinIds.forEach((id) => {
          const q = pins[id];
          if (linkEls[id]) {
            if (q && !folded) { const a = px(vOf[id].p); const b = px(q); Object.entries({ x1: a.x, y1: a.y, x2: b.x, y2: b.y }).forEach(([k, v]) => linkEls[id].setAttribute(k, v)); linkEls[id].setAttribute('display', 'inline'); } else linkEls[id].setAttribute('display', 'none');
          }
          if (distTxt[id]) {
            if (q && !folded) { const b = px(q); distTxt[id].setAttribute('x', b.x); distTxt[id].setAttribute('y', b.y + 22); distTxt[id].textContent = `${Math.abs(dist(q))}칸`; distTxt[id].setAttribute('display', 'inline'); } else distTxt[id].setAttribute('display', 'none');
          }
        });
      }

      // ---- 접기 단추와 안내 줄 ----
      const U = st.layer('controls');
      const by = OY + trayRow * C + 32;
      const statusText = kit.el('text', { x: o.allowFold === false ? W / 2 : 168, y: by + 30, 'text-anchor': o.allowFold === false ? 'middle' : 'start', 'font-size': 14, class: 'pk-text', fill: '#473B6B' }, U);
      if (!print && o.allowFold !== false) {
        const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': '대칭축을 따라 접기', class: 'pk-draggable mf-btn' }, U);
        kit.el('rect', { x: 18, y: by - 2, width: 136, height: 54, rx: 14, class: 'pk-hit' }, g);
        kit.piece(st, g, { shape: { type: 'rect', x: 18, y: by, w: 136, h: 50, rx: 14 }, color: 'mint', depth: 2 });
        kit.el('text', { x: 86, y: by + 32, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: '#173A2C' }, g).textContent = '접어 보기';
        const go = (e) => { e.preventDefault(); fold(); };
        g.addEventListener('click', go);
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') go(e); });
      }
      const status = (t) => { statusText.textContent = t || ''; };

      const marks = kit.el('g', { 'pointer-events': 'none' }, st.layer('marks'));
      const setFold = (s) => kit.transform(foldG, vAxis ? { x: ax * (1 - s), y: 0, sx: s, sy: 1 } : { x: 0, y: ax * (1 - s), sx: 1, sy: s });
      async function fold() {
        if (busy || folded) return;
        if (foldTokens <= 0) { status('확인을 누른 뒤에 한 번 접어 볼 수 있어요'); kit.announce('확인을 누른 뒤에 한 번 접어 볼 수 있어요'); kit.tick('no'); return; }
        foldTokens--;
        busy = true; folded = true; paint(); kit.tick();
        flap.setAttribute('opacity', 0.55);
        await kit.tween(RM ? 0 : 1100, (p) => setFold(Math.cos(Math.PI * p)), { ease: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2) });
        // 포개진 꼭짓점에 동그라미, 어긋난 꼭짓점에 점선 동그라미
        marks.textContent = '';
        let okN = 0;
        pinIds.forEach((id) => {
          const ok = same(pins[id], mirror(vOf[id].p)); if (ok) okN++;
          const q = px(vOf[id].p);
          kit.el('circle', { cx: q.x, cy: q.y, r: 14, fill: 'none', stroke: ok ? '#275C46' : '#B23A48', 'stroke-width': 3, 'stroke-dasharray': ok ? null : '4 3' }, marks);
        });
        const msg = okN === pinIds.length ? '모든 핀이 꼭짓점과 포개졌어요!' : `포개진 점 ${okN}개 / ${pinIds.length}개`;
        status(msg); kit.announce(`접어 보니 ${msg}`); kit.tick(okN === pinIds.length ? 'ok' : 'no');
        kit.recorder.log('mirrorfold-fold', { ok: okN, of: pinIds.length });
        await kit.wait(1400);
        await kit.tween(RM ? 0 : 800, (p) => setFold(-Math.cos(Math.PI * p)));
        setFold(1); flap.setAttribute('opacity', 0); marks.textContent = '';
        folded = false; busy = false; paint();
      }

      // ---- 고르기 칸(HTML 단추: 키보드·터치 그대로) ----
      let askBtns = [];
      const askOpt = o.ask && Array.isArray(o.ask.choices) && !print ? o.ask : null;
      if (askOpt) {
        const wrap = document.createElement('div');
        wrap.className = 'mf-ask'; wrap.style.cssText = 'margin-top:10px;display:grid;gap:8px';
        const q = document.createElement('p');
        q.id = `mf-ask-${Math.random().toString(36).slice(2, 8)}`;
        q.style.cssText = 'margin:0;font-weight:700;line-height:1.45;word-break:keep-all';
        q.textContent = askOpt.q;
        const row = document.createElement('div');
        row.setAttribute('role', 'radiogroup'); row.setAttribute('aria-labelledby', q.id);
        row.style.cssText = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px';
        askBtns = askOpt.choices.map((text, i) => {
          const b = document.createElement('button');
          b.type = 'button'; b.className = 'pl-btn pl-btn--small';
          b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false');
          b.style.cssText = 'white-space:normal;line-height:1.35;word-break:keep-all;min-height:44px';
          b.textContent = text;
          b.addEventListener('click', () => { setPick(i); kit.tick(); kit.recorder.log('mirrorfold', state()); });
          row.appendChild(b); return b;
        });
        // 라디오 묶음: 화살표로 옆 답을 고른다(ARIA radiogroup)
        askBtns.forEach((b, i, all) => b.addEventListener('keydown', (e) => { const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!step) return; e.preventDefault(); const nb = all[(i + step + all.length) % all.length]; nb.focus(); nb.click(); }));
        wrap.append(q, row); box.appendChild(wrap);
      }
      function setPick(i) {
        pick = Number.isInteger(i) && i >= 0 && i < askBtns.length ? i : null;
        askBtns.forEach((b, k) => { const on = k === pick; b.setAttribute('aria-checked', String(on)); b.style.background = on ? 'var(--pc-mint-light, #DDF2E6)' : ''; b.style.boxShadow = on ? '0 0 0 3px var(--pc-mint-layer, #7CC4A0)' : ''; });
      }

      function state() {
        const s = { pins: {} };
        pinIds.forEach((id) => { s.pins[id] = pins[id] ? pins[id].slice() : null; });
        if (askOpt) s.pick = pick;
        return s;
      }
      function setState(s) {
        s = s || {};
        pinIds.forEach((id) => {
          const q = s.pins && s.pins[id];
          pins[id] = q ? q.slice() : null;
          if (pinG[id]) kit.transform(pinG[id], q ? px(q) : home(id));
        });
        if (askOpt && 'pick' in s) setPick(s.pick);
        checked = false; status(''); paint();
      }
      setState({});

      const why = (id) => {
        const v = vOf[id].p; const q = pins[id]; const want = Math.abs(dist(v)); const P = `${id}'`;
        const line = vAxis ? '가로줄' : '세로줄';
        const h3 = `점 ${josa(id, '은', '는')} 대칭축에서 ${want}칸 떨어져 있어요. 같은 ${line}을 따라 대칭축 건너편으로 ${want}칸 간 곳이 ${P}이에요.`;
        if (!q) return { feedback: `점 ${josa(P, '을', '를')} 아직 놓지 않았어요.`, hint: '핀 놓는 곳의 핀을 모눈 교점으로 끌어 놓아요.', h3 };
        const d = dist(q);
        if (d === 0) return { feedback: `점 ${josa(P, '이', '가')} 대칭축 위에 있어요. 대칭축 위의 점은 자기 자신이 대응점이에요. 점 ${josa(id, '은', '는')} 대칭축 위에 있지 않아요.`, hint: '대응점은 대칭축을 사이에 두고 꼭짓점의 반대쪽에 있어요.', h3 };
        if (Math.sign(d) === Math.sign(dist(v))) return { feedback: `점 ${josa(P, '이', '가')} 점 ${josa(id, '과', '와')} 같은 쪽에 있어요. 대응점은 대칭축의 건너편에 있어야 해요.`, hint: '종이를 대칭축에서 접으면 건너편 점이 꼭짓점과 포개져요.', h3 };
        if (along(q) !== along(v)) return { feedback: `점 ${josa(P, '이', '가')} 대칭축과 수직인 선 위에 있지 않아요. 점 ${id}에서 대칭축에 수직으로 그은 선(같은 ${line}) 위에 있어야 해요.`, hint: `점 ${id}에서 대칭축까지 수직으로 선을 긋고, 그 선을 건너편으로 늘여서 찾아요.`, h3 };
        if (Math.abs(d) === 2 * want) return { feedback: `점 ${josa(P, '은', '는')} 꼭짓점에서 대칭축까지 거리의 두 배를 건너갔어요. 대응점은 꼭짓점이 아니라 대칭축에서 재요.`, hint: `점 ${id}에서 대칭축까지 칸을 하나씩 세고, 대칭축에서부터 건너편으로 같은 칸 수를 세어요.`, h3 };
        return { feedback: `점 ${josa(P, '은', '는')} 대칭축에서 ${Math.abs(d)}칸이에요. 점 ${id}에서 대칭축까지 몇 칸인지 세어 견주어 보세요.`, hint: `점 ${id}에서 대칭축까지 칸을 하나씩 세고, 건너편으로 같은 칸 수만큼 가요.`, h3 };
      };

      // 채점만 한다(화면은 바꾸지 않는다) — 확인·힌트·오답 만들기가 함께 쓴다
      function judge(t) {
        t = t || {};
        const need = Array.isArray(t.pins) ? t.pins.filter((id) => pinIds.includes(id)) : (t.complete ? pinIds : []);
        const missing = need.filter((id) => !pins[id]);
        if (missing.length && missing.length === need.length && askOpt && pick == null) return { correct: false, incomplete: true, feedback: '핀을 모눈에 놓고, 아래에서 답도 골라요.' };
        if (missing.length) return { correct: false, incomplete: true, feedback: `점 ${josa(missing.map((id) => `${id}'`).join(', '), '을', '를')} 아직 모눈에 놓지 않았어요.`, hint: '핀 놓는 곳의 핀을 끌어 모눈 교점에 놓아요.' };
        const bad = need.filter((id) => !same(pins[id], mirror(vOf[id].p)));
        if (bad.length) {
          const w = why(bad[0]);
          return { correct: false, feedback: `${w.feedback}${bad.length > 1 ? ' 다른 점도 다시 살펴봐요.' : ''}`, hint: w.hint, h3: w.h3 };
        }
        if (askOpt && Number.isInteger(t.ask)) {
          if (pick == null) return { correct: false, incomplete: true, feedback: need.length ? '점은 모두 맞게 놓았어요. 이제 아래에서 답을 골라요.' : '아래에서 답을 골라요.' };
          if (pick !== t.ask) return { correct: false, feedback: (askOpt.why && askOpt.why[pick]) || '다시 생각해 볼까요? 점과 대응점을 이은 선을 보세요.', hint: askOpt.hint || '대응점을 이은 선분이 대칭축과 만나는 모양을 보세요.', h3: askOpt.hint || '대응점을 이은 선분이 대칭축과 만나는 모양을 보세요.' };
        }
        const one = need.length === 1 ? need[0] : null;
        if (!need.length && askOpt) return { correct: true, feedback: `맞아요! ${askOpt.ok || ''}`.trim() };
        const okText = one
          ? `맞아요! 점 ${josa(`${one}'`, '은', '는')} 점 ${josa(one, '과', '와')} 똑같이 대칭축에서 ${Math.abs(dist(vOf[one].p))}칸 떨어져 있어요.`
          : need.length ? '맞아요! 대응점이 모두 대칭축에서 같은 거리에 있어 선대칭도형이 완성되었어요.' : '맞아요!';
        return { correct: true, feedback: okText };
      }

      return {
        getState: state,
        setState,
        reset() { foldTokens = o.revealAfterCheck ? 0 : Infinity; setState({ pins: {}, pick: null }); },
        solve(t) {
          const s = { pins: {} };
          pinIds.forEach((id) => { s.pins[id] = mirror(vOf[id].p); });
          if (askOpt && t && Number.isInteger(t.ask)) s.pick = t.ask;
          setState(s);
        },
        check(t, opts) {
          const r = judge(t || {}); delete r.h3;
          // 완성 모양(revealAfterCheck)은 맞힌 확인에서만 그린다 — 틀린 확인마다 보이면 모양을 보며 핀을 옮겨 맞춘다
          if (!(opts && opts.forHint) && !r.incomplete) {
            if (r.correct) { checked = true; paint(); }
            // 확인을 누를 때마다 접어 보기 한 번(쌓이지 않는다)
            if (o.revealAfterCheck) foldTokens = 1;
          }
          return r;
        },
        // 힌트 3단계: 1 개념(수·자리 없음) / 2 틀린 단계(건너편·수직인 줄·칸 세기) / 3 그 점의 칸 수로 풀이 한 단계
        hint(t, opts) {
          t = t || {};
          const r = judge(t);
          const why = '선대칭도형에서 대응점은 대칭축의 건너편, 대칭축과 수직인 같은 줄 위에서 대칭축까지 꼭짓점과 똑같은 거리만큼 떨어져 있어요.';
          const lv = hintLevel(opts);
          if (r.correct) return { hint: why, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: why, correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        wrongAnswer(t) {
          t = t || {};
          const need = Array.isArray(t.pins) ? t.pins.filter((id) => pinIds.includes(id)) : (t.complete ? pinIds : []);
          // 점을 묻지 않는 문항(고르기만)은 지금 놓인 핀을 그대로 둔다
          const s = need.length ? { pins: {} } : state();
          if (need.length) pinIds.forEach((id) => { s.pins[id] = mirror(vOf[id].p); });
          if (askOpt) s.pick = Number.isInteger(t.ask) ? t.ask : pick;
          const inGrid = (q) => q[0] >= 0 && q[0] <= COLS && q[1] >= 0 && q[1] <= ROWS;
          const free = (q, id) => !pinIds.some((k) => k !== id && same(s.pins[k], q));
          const id = need[0];
          if (id) {
            // 오개념: 건너편이긴 한데 대칭축까지 칸 수를 하나 더(또는 덜) 센다. 안 되면 같은 쪽에 같은 칸 수로 놓는다
            const v = vOf[id].p; const d = dist(v); const sg = -Math.sign(d);
            const at = (k) => (vAxis ? [A + sg * k, v[1]] : [v[0], A + sg * k]);
            const cands = [at(Math.abs(d) + 1), at(Math.abs(d) - 1), v.slice()];
            const q = cands.find((c) => inGrid(c) && dist(c) !== 0 && free(c, id) && !same(c, mirror(v)));
            if (q) { s.pins[id] = q; return s; }
          }
          if (askOpt && Number.isInteger(t.ask)) { s.pick = askBtns.findIndex((_, i) => i !== t.ask); return s; }
          return null;
        },
        async demo(t) {
          for (const id of pinIds) {
            const to = px(mirror(vOf[id].p)); const from = Object.assign({}, pinG[id].__pk);
            await kit.tween(600, (p) => kit.transform(pinG[id], { x: from.x + (to.x - from.x) * p, y: from.y + (to.y - from.y) * p }));
            pins[id] = mirror(vOf[id].p); paint(); await kit.wait(200);
          }
          if (!(t && t.noFold)) await fold();
        },
      };
    },
  });
})(window.PaperKit);
