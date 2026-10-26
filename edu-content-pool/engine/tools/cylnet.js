/* 원기둥 펼치기 — 종이 원기둥을 바닥에 한 바퀴 굴려 옆면을 펼치면 직사각형이 되고, 두 밑면(원)은 옆면의 위와 아래에 붙는다.
 * 굴러간 자국에 밑면 테두리와 같은 분홍 선이 찍혀 '옆면의 가로 = 밑면의 둘레(지름 × 원주율)'가 눈에 보인다. 세로는 원기둥의 높이다.
 * 옵션: start({r, h, unrolled}), labels('numbers'|'words'|'none'), fixed(반지름·높이 조절 숨김), given('radius'|'diameter': 밑면에 적는 주어진 길이),
 *       ask('width'|'height': 옆면의 가로/세로가 원기둥의 어느 부분인지 고르기), pad(옆면의 가로 길이 입력),
 *       steps(쉬움: 지름 = 반지름 × 2 도움 줄), judge({r, h, nets:['ok'|'same'|'short'|'size', …]}: 바른 전개도 고르기),
 *       steppers('r': 반지름 조절만), revealAfterCheck(길이 이름표를 '확인' 뒤에만 보이고, 다시 움직이면 감춘다), rMax(기본 6), hMax(기본 8), print
 * 상태: { r, h, unrolled, pick, value, judge }
 * target: { unrolled:true, width?:'밑면의 둘레', height?:'원기둥의 높이', r? } | { width: 길이, r } (가로 길이 채점, r은 문항의 반지름)
 *       | { r, findR:true } (가로 길이에 맞는 반지름 찾기 — pad와 padFor:'diameter'면 지름을 먼저 써야 하고, 틀린 확인은 그 반지름의 가로·길고 짧음을 말하지 않는다)
 *       | { judge: 번호 }
 */
(function (K) {
  'use strict';
  const PI = 3.14;
  const RM = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = (v) => String(Math.round(v * 100) / 100);
  const same = (a, b) => a != null && Math.round(a * 100) === Math.round(b * 100);
  const PICKS = ['밑면의 둘레', '밑면의 지름', '밑면의 반지름', '원기둥의 높이'];
  const ASK = { width: { part: '가로', answer: '밑면의 둘레' }, height: { part: '세로', answer: '원기둥의 높이' } };
  const josa = (w, a, b) => { const c = String(w).charCodeAt(String(w).length - 1); return w + (c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 ? a : b); };

  // 교구 안 HTML 단추(고르기·조절)의 공통 모양 — 플레이어 밖(카탈로그 미리보기)에서도 44px 이상이 되게 직접 둔다
  function ensureStyle() {
    if (document.getElementById('cy-rb-style')) return;
    const s = document.createElement('style'); s.id = 'cy-rb-style';
    s.textContent = `
.cy-panel,.rb-panel{display:grid;gap:10px;margin-top:10px}
.cy-row,.rb-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.cy-q,.rb-q{margin:0;font-weight:700;line-height:1.45;word-break:keep-all}
.cy-picks,.rb-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px}
.cy-b,.rb-b{min-height:44px;min-width:44px;padding:6px 12px;border-radius:12px;border:1px solid rgba(61,53,46,.22);background:#FFFDF9;color:#3D352E;font:inherit;font-weight:700;line-height:1.3;white-space:normal;word-break:keep-all;cursor:pointer}
.cy-b[aria-checked="true"],.rb-b[aria-checked="true"]{background:#FDF1EA;box-shadow:0 0 0 3px #E69D7B}
.cy-b[aria-disabled="true"]{opacity:.55;cursor:progress}
.cy-b--main{background:#EAF7F1;border-color:#82C2A8}
.cy-step,.rb-step{display:inline-flex;align-items:center;gap:4px;padding:2px 4px;border-radius:14px;background:#F4F0FA}
.cy-step b,.rb-step b{min-width:6.5em;min-height:44px;display:inline-flex;align-items:center;justify-content:center;font-weight:800;color:#473B6B}
.cy-in,.rb-in{min-height:44px;width:7em;box-sizing:border-box;padding:6px 10px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.1em;font-weight:800;text-align:center;color:#275C46;background:#fff}
.rb-in--sm{width:4.2em}
.cy-pad,.rb-pad{display:flex;flex-wrap:wrap;gap:8px;align-items:center;padding:8px 10px;border-radius:14px;background:#EAF7F1;color:#275C46;font-weight:700}
.rb-frac{display:inline-grid;justify-items:center;gap:2px}
.rb-frac hr{width:100%;margin:0;border:0;border-top:3px solid #275C46}
@media print{.cy-panel,.rb-panel{display:none}}
`;
    document.head.appendChild(s);
  }
  // 고르기 단추 묶음: Tab 한 번으로 들어가 방향키로 고른다(라디오처럼). 고른 것은 aria-checked
  function pickGroup(parent, label, choices, onPick) {
    const row = document.createElement('div'); row.className = 'cy-picks'; row.setAttribute('role', 'radiogroup'); row.setAttribute('aria-label', label);
    const btns = choices.map((text, i) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'cy-b'; b.textContent = text;
      b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false'); b.setAttribute('tabindex', i === 0 ? '0' : '-1');
      b.addEventListener('click', () => onPick(i));
      b.addEventListener('keydown', (e) => {
        const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) return;
        e.preventDefault(); const j = (i + d + btns.length) % btns.length; onPick(j); btns[j].focus();
      });
      row.appendChild(b); return b;
    });
    parent.appendChild(row);
    return (k) => btns.forEach((b, i) => { b.setAttribute('aria-checked', String(i === k)); b.setAttribute('tabindex', (k == null ? i === 0 : i === k) ? '0' : '-1'); });
  }
  // − 값 + 조절기. 값 글자에도 Tab이 서고 방향키로 바꾼다
  function stepper(parent, label, get, set) {
    const w = document.createElement('div'); w.className = 'cy-step'; w.setAttribute('role', 'group'); w.setAttribute('aria-label', label);
    const minus = document.createElement('button'); minus.type = 'button'; minus.className = 'cy-b'; minus.textContent = '−'; minus.setAttribute('aria-label', `${label} 줄이기`); minus.setAttribute('tabindex', '0');
    const val = document.createElement('b'); val.setAttribute('role', 'spinbutton'); val.setAttribute('tabindex', '0'); val.setAttribute('aria-label', label);
    const plus = document.createElement('button'); plus.type = 'button'; plus.className = 'cy-b'; plus.textContent = '+'; plus.setAttribute('aria-label', `${label} 늘리기`); plus.setAttribute('tabindex', '0');
    minus.addEventListener('click', () => set(get() - 1)); plus.addEventListener('click', () => set(get() + 1));
    val.addEventListener('keydown', (e) => { const d = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1 }[e.key]; if (!d) return; e.preventDefault(); set(get() + d); });
    w.append(minus, val, plus); parent.appendChild(w);
    return val;
  }

  // 힌트 단계(플레이어가 { level, attempts }를 준다): 1 개념·전략만(문항의 수·자리·이름 없음), 2 틀린 단계 짚기, 3 풀이 한 단계.
  // 시도 수보다 높은 단계는 주지 않는다 — 시도 0 → 1단계, 1 → 2단계까지, 2 이상 → 3단계까지
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  K.registerTool('cylnet', {
    name: '원기둥 펼치기',
    create(box, o, kit) {
      ensureStyle();
      const controls = !o.print;
      const judge = o.judge && Array.isArray(o.judge.nets) ? o.judge : null;
      const ask = controls && !judge && ASK[o.ask] ? o.ask : null;
      const pad = controls && !judge && !!o.pad;
      const labels = o.labels || 'words';
      const W = 600; const H = o.print ? 300 : o.fixed ? 340 : 380;
      const st = kit.stage(box, { viewBox: [W, H], label: judge ? '원기둥의 전개도 세 가지. 바른 전개도를 고르세요.' : '종이 원기둥. 펼치기를 눌러 옆면을 굴려 펼쳐 보세요.' });
      const back = st.layer('back');
      kit.piece(st, back, { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 16 }, color: 'cream', fill: '#FBF6EC', depth: 2, texture: true });

      const start = Object.assign({ r: 3, h: 5, unrolled: false }, o.start || {});
      const rMax = o.rMax || 6; const hMax = o.hMax || 8;
      // 한 교구 안에서는 1 cm의 화면 크기를 고정한다 — 반지름을 늘리면 원기둥이 실제로 커져 보이게
      // fixed(길이가 주어진 문항)이면 지금 원기둥이 무대를 넉넉히 채우게 맞춘다
      const kFor = (rr, hh) => Math.min(400 / (2 * Math.PI * rr), (H - 50) / (4 * rr + hh), 24);
      const kOf = () => (o.fixed || o.print ? kFor(r, h) : kFor(rMax, Math.min(hMax, 8)));
      let r = start.r; let h = start.h; let unrolled = !!start.unrolled; let pick = null; let judgePick = null; let busy = false; let revealed = false;
      let X0 = 64;
      const geo = () => {
        const k = kOf();
        const C = 2 * Math.PI * r * k; const rk = r * k; const hk = h * k;
        const Y0 = Math.round((H - (4 * r + h) * k) / 2 + 2 * rk);
        X0 = Math.max(24, Math.round((W - C - 160) / 2)); // 오른쪽에 세로 이름표 자리(160)를 남긴다
        return { C, rk, hk, Y0, cx: X0 + C / 2 };
      };

      // ---- 바른 전개도 고르기: 작은 전개도 세 장(움직이지 않음) ----
      if (judge) {
        const jr = judge.r || 2; const jh = judge.h || 4; const n = judge.nets.length;
        const slot = (W - 40) / n;
        kit.el('text', { x: W / 2, y: H - 16, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#3D352E' }, st.layer('nets')).textContent = `만들려는 원기둥: 밑면의 반지름 ${jr} cm, 높이 ${jh} cm`;
        judge.nets.forEach((kind, i) => {
          const g = kit.el('g', null, st.layer('nets'));
          const kk = Math.min((slot - 30) / (2 * Math.PI * jr), (H - 90) / (4 * jr + jh));
          const wcm = kind === 'short' ? 2 * jr * 2 : 2 * PI * jr; // 'short': 가로가 지름의 2배뿐(둘레보다 짧다)
          const rr = jr * kk; const ww = (kind === 'short' ? wcm : 2 * Math.PI * jr) * kk; const hh = jh * kk;
          const ox = 20 + i * slot + (slot - ww) / 2; const oy = 40 + (H - 90 - (4 * jr + jh) * kk) / 2 + 2 * rr;
          kit.piece(st, g, { shape: { type: 'rect', x: ox, y: oy, w: ww, h: hh, rx: 2 }, color: 'sky', depth: 1 });
          const r2 = kind === 'size' ? rr * 0.62 : rr;
          const topX = ox + ww / 2; const botX = kind === 'same' ? ox + ww / 2 : ox + ww / 2;
          kit.piece(st, g, { shape: { type: 'circle', r: rr, cx: topX - (kind === 'same' ? rr * 1.1 : 0), cy: oy - rr }, color: 'peach', depth: 1 });
          if (kind === 'same') kit.piece(st, g, { shape: { type: 'circle', r: rr, cx: topX + rr * 1.1, cy: oy - rr }, color: 'peach', depth: 1 });
          else kit.piece(st, g, { shape: { type: 'circle', r: r2, cx: botX, cy: oy + hh + r2 }, color: 'peach', depth: 1 });
          const t = (x, y, s, size = 13) => { const e = kit.el('text', { x, y, 'text-anchor': 'middle', 'font-size': size, class: 'pk-text', fill: '#3D352E' }, g); e.textContent = s; return e; };
          t(20 + i * slot + slot / 2, 30, ['가', '나', '다', '라'][i], 20);
          t(ox + ww / 2, oy + hh / 2 + 5, `가로 ${fmt(wcm)} cm`, 12);
        });
      }

      // ---- 원기둥과 펼친 전개도(조각은 한 번만 만들고 transform으로만 움직인다) ----
      const NS = { 'vector-effect': 'non-scaling-stroke' };
      // 크기 1짜리 조각을 늘려 쓰므로 종이 두께층·그림자 필터는 빼고(늘리면 함께 커진다) 칼선만 둔다
      const unit = (parent, shape, color, extra) => { const p = kit.piece(st, parent, Object.assign({ shape, color }, extra || {}, { depth: 0, flat: true, stroke: '#3D352E', strokeWidth: 1.2 })); [p.face, ...p.under].forEach((e) => e.setAttribute('vector-effect', 'non-scaling-stroke')); return p; };
      const net = kit.el('g', { display: judge ? 'none' : 'inline' }, st.layer('work'));
      // 펼친 옆면(굴러간 자국): 가로 길이는 sx로 늘린다
      const side = kit.el('g', { 'pointer-events': 'none' }, net); unit(side, { type: 'rect', x: 0, y: 0, w: 1, h: 1 }, 'sky', { flat: true });
      const rimT = kit.el('rect', { x: 0, y: -0.5, width: 1, height: 1, fill: '#C9566A' }, net);
      const rimB = kit.el('rect', { x: 0, y: -0.5, width: 1, height: 1, fill: '#C9566A' }, net);
      // 두 밑면(원): 반지름 1짜리를 s로 키운다. 테두리는 분홍(굴러간 자국과 같은 색)
      const disc = (pp) => { const g = kit.el('g', { 'pointer-events': 'none' }, pp); unit(g, { type: 'circle', r: 1 }, 'peach'); kit.el('circle', { r: 1, fill: 'none', stroke: '#C9566A', 'stroke-width': 4, ...NS }, g); return g; };
      const topD = disc(net); const botD = disc(net);
      // 서 있는 원기둥: 몸통(sx = 지름, sy = 높이) + 윗면 타원 + 아랫면 앞 반 타원
      const cyl = kit.el('g', { 'pointer-events': 'none' }, net);
      const body = kit.el('g', null, cyl); unit(body, { type: 'rect', x: -0.5, y: 0, w: 1, h: 1 }, 'sky');
      const stripes = kit.el('g', null, cyl);
      [-0.3, 0, 0.3].forEach((x) => kit.el('line', { x1: x, y1: 0, x2: x, y2: 1, stroke: '#98C8D6', 'stroke-width': 2, ...NS }, stripes));
      const botRim = kit.el('path', { d: 'M-1 0 A1 0.32 0 0 0 1 0', fill: 'none', stroke: '#C9566A', 'stroke-width': 4, ...NS }, cyl);
      const topE = kit.el('g', null, cyl); unit(topE, { type: 'ellipse', rx: 1, ry: 0.32 }, 'peach'); kit.el('ellipse', { rx: 1, ry: 0.32, fill: 'none', stroke: '#C9566A', 'stroke-width': 4, ...NS }, topE);

      // 주어진 길이(반지름·지름·높이)와 답이 되는 길이 이름표
      const lab = kit.el('g', { 'pointer-events': 'none', display: judge ? 'none' : 'inline' }, st.layer('labels'));
      const T = (fill, anchor = 'middle', size = 15) => kit.el('text', { 'font-size': size, class: 'pk-text', fill, 'text-anchor': anchor }, lab);
      const radLine = kit.el('rect', { x: 0, y: -1.5, width: 1, height: 3, fill: '#473B6B' }, lab);
      const radTxt = T('#473B6B', 'start', 14);
      const hBar = kit.el('rect', { x: -1.5, y: 0, width: 3, height: 1, fill: '#473B6B' }, lab);
      const hTxt = T('#473B6B', 'start', 14);
      const wBar = kit.el('rect', { x: 0, y: -1.5, width: 1, height: 3, fill: '#702830' }, lab);
      const wTxt = T('#702830', 'middle', 15);
      const vBar = kit.el('rect', { x: -1.5, y: 0, width: 3, height: 1, fill: '#204C5A' }, lab);
      const vTxt = T('#204C5A', 'end', 15);
      const stepTxt = T('#275C46', 'start', 13);
      const show = (els, on) => els.forEach((e) => e.setAttribute('display', on ? 'inline' : 'none'));

      function pose(p) {
        // p: 0(서 있는 원기둥) → 0.75(한 바퀴 굴러감) → 1(밑면이 위·아래에 붙음)
        const { C, rk, hk, Y0, cx } = geo();
        const q = Math.min(1, p / 0.75); const f = Math.max(0, (p - 0.75) / 0.25);
        const dx = (C - 2 * rk) * q;
        const ccx = X0 + rk + dx;
        const shrink = 1 - f;
        kit.transform(body, { x: ccx + rk * f, y: Y0, sx: 2 * rk * shrink, sy: hk });
        kit.transform(stripes, { x: ccx + rk * f, y: Y0, sx: 2 * rk * shrink, sy: hk });
        kit.transform(topE, { x: ccx + rk * f, y: Y0, sx: rk * shrink, sy: rk });
        kit.transform(botRim, { x: ccx + rk * f, y: Y0 + hk, sx: rk * shrink, sy: rk });
        cyl.setAttribute('display', p >= 1 ? 'none' : 'inline');
        const tw = p <= 0 ? 0 : p < 0.75 ? rk + dx : rk + dx + (C - rk - dx) * f;
        side.setAttribute('display', p <= 0 ? 'none' : 'inline');
        kit.transform(side, { x: X0, y: Y0, sx: Math.max(0.01, tw), sy: hk });
        [rimT, rimB].forEach((e, i) => { e.setAttribute('display', p <= 0 ? 'none' : 'inline'); kit.transform(e, { x: X0, y: Y0 + (i ? hk : 0), sx: Math.max(0.01, tw), sy: 5 }); });
        const ds = Math.max(0.001, rk * f);
        kit.transform(topD, { x: cx, y: Y0 - rk, s: ds }); kit.transform(botD, { x: cx, y: Y0 + hk + rk, s: ds });
        show([topD, botD], f > 0);
      }
      const answersHidden = () => o.revealAfterCheck && !revealed;
      function paintLabels() {
        const { C, rk, hk, Y0, cx } = geo();
        const flat = unrolled && !busy; const up = !unrolled && !busy;
        // 주어진 길이: 서 있을 때는 윗면에, 펼쳤을 때는 윗밑면에 반지름(또는 지름)을 적는다
        const dia = o.given === 'diameter';
        const ccx = flat ? cx : X0 + rk; const ccy = flat ? Y0 - rk : Y0;
        show([radLine, radTxt], !busy && o.showR !== false);
        kit.transform(radLine, { x: dia ? ccx - rk : ccx, y: ccy, sx: dia ? 2 * rk : rk, sy: 1 });
        radTxt.setAttribute('x', (ccx + rk + 8).toFixed(1)); radTxt.setAttribute('y', (ccy + 5).toFixed(1));
        // labels:'none'(길이를 말로만 다루는 문항)에서는 주어진 길이도 숫자 없이 이름만 적는다. 길이를 구하는 문항(pad)은 숫자가 문제의 조건이라 둔다
        const bare = labels === 'none' && !pad;
        radTxt.textContent = dia ? (bare ? '지름' : `지름 ${2 * r} cm`) : (bare ? '반지름' : `반지름 ${r} cm`);
        show([hBar, hTxt], up);
        kit.transform(hBar, { x: X0 + 2 * rk + 12, y: Y0, sx: 1, sy: hk });
        hTxt.setAttribute('x', (X0 + 2 * rk + 20).toFixed(1)); hTxt.setAttribute('y', (Y0 + hk / 2 + 5).toFixed(1)); hTxt.textContent = bare ? '높이' : `높이 ${h} cm`;
        // 펼친 옆면의 가로·세로 이름표
        const shown = flat && labels !== 'none';
        const hideW = answersHidden() || (ask && pick !== ASK.width.answer && (ask === 'width' || labels === 'none'));
        const hideH = answersHidden() || (ask === 'height' && pick !== ASK.height.answer) || (ask === 'width' && pick !== ASK.width.answer);
        // 가로 이름표는 옆면 안 위쪽에, 세로 이름표는 옆면 오른쪽(자리가 없으면 옆면 안 아래쪽)에 둔다 — 밑면 원과 겹치지 않게
        show([wBar, wTxt], shown || (flat && ask === 'width'));
        kit.transform(wBar, { x: X0, y: Y0 + 8, sx: C, sy: 1 });
        // 옆면이 좁으면(반지름이 작을 때) 가로 이름표를 아래 밑면 밑으로 뺀다
        wTxt.setAttribute('x', (X0 + C / 2).toFixed(1)); wTxt.setAttribute('y', (C < 180 ? Y0 + hk + 2 * rk + 22 : Y0 + 26).toFixed(1));
        wTxt.textContent = hideW ? '가로 = ?' : labels === 'numbers' && !pad ? `가로 = 밑면의 둘레 = ${2 * r}×${PI} = ${fmt(2 * r * PI)} cm` : '가로 = 밑면의 둘레';
        show([vBar, vTxt], shown || (flat && ask === 'height'));
        const roomRight = X0 + C + 160 < W;
        kit.transform(vBar, { x: X0 + C - 8, y: Y0, sx: 1, sy: hk });
        vTxt.setAttribute('text-anchor', roomRight ? 'start' : 'end');
        vTxt.setAttribute('x', (roomRight ? X0 + C + 10 : X0 + C - 16).toFixed(1));
        vTxt.setAttribute('y', (roomRight ? Y0 + hk / 2 + 5 : Y0 + hk - 10).toFixed(1));
        vTxt.textContent = hideH ? '세로 = ?' : labels === 'numbers' ? `세로 = 높이 = ${h} cm` : '세로 = 원기둥의 높이';
        show([stepTxt], !!o.steps && !o.print && !busy);
        stepTxt.setAttribute('x', '20'); stepTxt.setAttribute('y', '30');
        stepTxt.textContent = dia ? `둘레 = 지름 × ${PI}` : `지름 = 반지름 × 2 = ${r} × 2 = ${2 * r} cm,  둘레 = 지름 × ${PI}`;
        if (o.print) { show([wBar, wTxt, vBar, vTxt, stepTxt], false); }
      }

      // ---- 조작 칸(HTML) ----
      let toggleBtn = null; let rVal = null; let hVal = null; let setPick = null; let setJudge = null; let input = null;
      const panel = document.createElement('div'); panel.className = 'cy-panel';
      if (controls) {
        const row = document.createElement('div'); row.className = 'cy-row';
        if (!judge) {
          toggleBtn = document.createElement('button'); toggleBtn.type = 'button'; toggleBtn.className = 'cy-b cy-b--main'; toggleBtn.setAttribute('tabindex', '0');
          toggleBtn.addEventListener('click', () => { if (busy) { kit.announce('움직이는 중이에요. 잠깐 기다려요.'); return; } setUnrolled(!unrolled, true); });
          row.appendChild(toggleBtn);
          if (!o.fixed) {
            rVal = stepper(row, '밑면의 반지름', () => r, (v) => setR(v, h));
            if (o.steppers !== 'r') hVal = stepper(row, '원기둥의 높이', () => h, (v) => setR(r, v));
          }
          panel.appendChild(row);
        }
        if (ask) {
          const q = document.createElement('p'); q.className = 'cy-q'; q.textContent = `펼친 옆면의 ${ASK[ask].part}는 원기둥의 어느 부분과 길이가 같나요?`;
          panel.appendChild(q);
          setPick = pickGroup(panel, q.textContent, PICKS, (i) => { pick = PICKS[i]; setPick(i); paintLabels(); log(); kit.announce(`${ASK[ask].part}: ${pick}`); });
        }
        if (judge) {
          const q = document.createElement('p'); q.className = 'cy-q'; q.textContent = '원기둥의 전개도로 알맞은 것을 고르세요.';
          panel.appendChild(q);
          setJudge = pickGroup(panel, q.textContent, judge.nets.map((_, i) => ['가', '나', '다', '라'][i]), (i) => { judgePick = i; setJudge(i); log(); kit.announce(`${['가', '나', '다', '라'][i]}를 골랐어요`); });
        }
        if (pad) {
          const p = document.createElement('label'); p.className = 'cy-pad';
          p.append(o.padFor === 'diameter' ? '밑면의 지름 =' : '옆면의 가로 =');
          input = document.createElement('input'); input.className = 'cy-in'; input.type = 'text'; input.setAttribute('tabindex', '0'); input.setAttribute('inputmode', 'decimal'); input.setAttribute('autocomplete', 'off');
          input.setAttribute('aria-label', o.padFor === 'diameter' ? '밑면의 지름(cm)' : '옆면의 가로 길이(cm)');
          input.addEventListener('input', () => { input.value = input.value.replace(/[^0-9.]/g, '').slice(0, 7); revealed = false; paintLabels(); });
          input.addEventListener('change', () => log());
          // 숫자 입력칸처럼 ↑↓로 1씩 바꿀 수 있다
          input.addEventListener('keydown', (e) => { const d = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!d) return; e.preventDefault(); const v = Math.max(0, Math.round(((Number(input.value) || 0) + d) * 100) / 100); input.value = String(v); log(); });
          p.append(input, 'cm');
          const tip = document.createElement('span'); tip.textContent = `(원주율 ${PI})`; tip.style.fontWeight = '400'; p.append(tip);
          panel.appendChild(p);
        }
        box.appendChild(panel);
      }
      function paintUI() {
        if (toggleBtn) { toggleBtn.textContent = unrolled ? '다시 말기' : '펼치기'; toggleBtn.setAttribute('aria-disabled', String(busy)); toggleBtn.setAttribute('aria-label', unrolled ? '옆면을 다시 말아 원기둥으로' : '원기둥을 굴려 옆면 펼치기'); }
        if (rVal) { rVal.textContent = `반지름 ${r} cm`; rVal.setAttribute('aria-valuenow', r); rVal.setAttribute('aria-valuetext', `반지름 ${r} 센티미터`); }
        if (hVal) { hVal.textContent = `높이 ${h} cm`; hVal.setAttribute('aria-valuenow', h); hVal.setAttribute('aria-valuetext', `높이 ${h} 센티미터`); }
      }
      const value = () => (input && input.value !== '' && input.value !== '.' ? Number(input.value) : null);
      const state = () => ({ r, h, unrolled, pick, value: value(), judge: judgePick });
      const log = () => kit.recorder.log('cylnet', state());

      function setR(nr, nh) {
        nr = K.clamp(nr, 1, rMax); nh = K.clamp(nh, 1, hMax);
        if (busy || (nr === r && nh === h)) return;
        r = nr; h = nh; revealed = false;
        pose(unrolled ? 1 : 0); paintLabels(); paintUI(); log();
        kit.announce(`반지름 ${r} 센티미터, 높이 ${h} 센티미터`);
      }
      async function setUnrolled(on, animate) {
        if (!animate || RM || o.print) { unrolled = on; pose(on ? 1 : 0); paintLabels(); paintUI(); return; }
        busy = true; unrolled = on; revealed = false; paintLabels(); paintUI();
        const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
        await kit.tween(on ? 1800 : 1000, (P) => pose(on ? P : 1 - P), { ease });
        busy = false; pose(on ? 1 : 0); paintLabels(); paintUI(); log();
        kit.announce(on ? '원기둥을 한 바퀴 굴려 옆면을 펼쳤어요. 굴러간 자국의 분홍 선이 밑면의 둘레예요.' : '다시 원기둥으로 말았어요.');
      }

      function setState(s) {
        s = s || {};
        if (s.r != null) r = s.r; if (s.h != null) h = s.h;
        if (s.unrolled != null) unrolled = !!s.unrolled;
        if (s.pick !== undefined) { pick = s.pick; if (setPick) setPick(pick == null ? null : PICKS.indexOf(pick)); }
        if (s.judge !== undefined) { judgePick = s.judge; if (setJudge) setJudge(judgePick); }
        if (input && s.value !== undefined) input.value = s.value == null ? '' : String(s.value);
        revealed = false; busy = false;
        pose(unrolled ? 1 : 0); paintLabels(); paintUI();
      }
      setState(start);

      // 채점만 한다(화면은 바꾸지 않는다) — 확인·힌트·오답 만들기가 함께 쓴다
      function grade(t) {
        const s = state();
        if (t.judge != null) {
          if (s.judge == null) return { correct: false, incomplete: true, feedback: '가, 나, 다 가운데 하나를 골라요.' };
          const kind = judge.nets[s.judge]; const jr = judge.r || 2;
          if (s.judge === t.judge) return { correct: true, feedback: '맞아요! 두 밑면이 옆면의 위와 아래에 하나씩 있고, 옆면의 가로가 밑면의 둘레와 같아요.' };
          const why = {
            same: '두 밑면이 옆면의 같은 쪽에 붙어 있어요. 접으면 한쪽은 막히지 않고 다른 쪽은 두 장이 겹쳐요.',
            short: '옆면의 가로가 밑면의 둘레보다 짧아요. 말면 밑면을 다 두르지 못해요. 밑면의 둘레를 직접 계산해 견주어 보세요.',
            size: '두 밑면의 크기가 달라요. 원기둥의 두 밑면은 크기가 같은(합동인) 원이에요.',
            ok: '그 전개도도 맞아요.',
          }[kind] || '다시 살펴볼까요?';
          return { correct: false, feedback: why, hint: '두 밑면의 자리(위와 아래), 두 밑면의 크기, 옆면의 가로 = 밑면의 둘레를 차례로 살펴요.', h3: `밑면의 둘레는 ${2 * jr} × ${PI} = ${fmt(2 * jr * PI)} cm예요. 두 밑면이 위·아래에 하나씩 있고 크기가 같으며 옆면의 가로가 이 길이인 것을 골라요.` };
        }
        if (t.findR) {
          const W2 = 2 * t.r * PI; const v = s.value;
          const h3 = `${fmt(W2)} ÷ ${PI} = ${2 * t.r}(지름), ${2 * t.r} ÷ 2 = ${t.r}이라 반지름은 ${t.r} cm예요.`;
          if (pad) {
            if (v == null) return { correct: false, incomplete: true, feedback: '먼저 옆면의 가로로 밑면의 지름을 구해 칸에 써요.', hint: '옆면의 가로 = 밑면의 둘레 = 지름 × 3.14예요.' };
            if (!same(v, 2 * t.r)) {
              if (same(v, t.r)) return { correct: false, feedback: '칸에는 반지름이 아니라 지름을 써요. 가로 ÷ 3.14를 하면 지름이 나와요.', hint: '둘레 = 지름 × 3.14이니, 둘레 ÷ 3.14 = 지름이에요.', h3 };
              if (same(v, W2 / 2)) return { correct: false, feedback: '가로를 2로 나누었어요. 둘레에서 지름을 구할 때는 3.14로 나눠요.', hint: '둘레 = 지름 × 3.14 — 거꾸로 하면 3.14로 나누기예요.', h3 };
              if (same(v, W2 * PI)) return { correct: false, feedback: '3.14를 곱했어요. 둘레에서 지름을 거꾸로 구할 때는 3.14로 나눠요.', hint: '둘레 = 지름 × 3.14 — 거꾸로 하면 3.14로 나누기예요.', h3 };
              return { correct: false, feedback: '칸에 쓴 지름이 가로 ÷ 3.14와 달라요. 나눗셈을 다시 해 봐요.', hint: '옆면의 가로 ÷ 3.14 = 지름이에요.', h3 };
            }
          }
          if (s.r === t.r) return { correct: true, feedback: `맞아요! 반지름이 ${s.r} cm이면 둘레는 ${2 * s.r} × ${PI} = ${fmt(2 * s.r * PI)} cm예요.` };
          // 그 반지름의 가로와 '길어요/짧아요'는 말하지 않는다 — 단추를 한 칸씩 눌러 가며 확인으로 맞추지 않게
          if (pad && s.r === 2 * t.r) return { correct: false, feedback: '지름을 반지름으로 맞췄어요. 반지름은 지름의 반이에요.', hint: '지름 ÷ 2 = 반지름이에요.', h3 };
          if (pad && s.r === Math.round(W2 / 2)) return { correct: false, feedback: '가로를 2로 나눈 수를 반지름으로 맞췄어요. 둘레에서는 3.14로 먼저 나눠 지름을 구해요.', hint: '가로 ÷ 3.14 = 지름, 지름 ÷ 2 = 반지름이에요.', h3 };
          return { correct: false, feedback: pad ? '칸에 쓴 지름과 맞지 않는 반지름이에요. 지름과 반지름의 관계를 다시 생각해 봐요.' : '그 반지름으로는 옆면의 가로가 맞지 않아요. 가로 ÷ 3.14로 지름부터 구해 봐요.', hint: '가로 ÷ 3.14 = 지름, 지름 ÷ 2 = 반지름이에요.', h3 };
        }
        if (typeof t.width === 'number') {
          const rr = t.r != null ? t.r : s.r; const v = s.value;
          // 2단계 힌트는 수 없이 틀린 단계(반지름 → 지름)를 짚고, 수를 넣은 식은 3단계에만
          const dia = o.given === 'diameter';
          const hint = dia ? '주어진 길이가 지름이에요. 둘레는 지름에 원주율 3.14를 곱해요.' : '주어진 길이가 반지름이에요. 둘레에는 반지름이 아니라 무엇이 필요할까요?';
          const h3 = `옆면의 가로 = 밑면의 둘레 = 지름 × ${PI} = ${2 * rr} × ${PI}를 계산해요.${dia ? '' : ` (지름 = ${rr} × 2 = ${2 * rr} cm)`}`;
          if (v == null) return { correct: false, incomplete: true, feedback: '옆면의 가로 길이를 칸에 써 넣어요.', hint };
          if (same(v, t.width)) return { correct: true, feedback: `맞아요! 옆면의 가로 = 밑면의 둘레 = ${2 * rr} × ${PI} = ${fmt(t.width)} (cm)예요.` };
          if (same(v, rr * PI)) return { correct: false, feedback: `반지름 × ${PI}만 했어요. 둘레는 지름(반지름 × 2) × ${PI}예요.`, hint, h3 };
          if (same(v, 4 * rr * PI)) return { correct: false, feedback: '지름에 2를 한 번 더 곱했어요. 지름이 주어졌으면 2를 곱하지 않고 바로 3.14를 곱해요.', hint, h3 };
          if (same(v, 2 * rr)) return { correct: false, feedback: `지름만 썼어요. 둘레는 지름 × 원주율(${PI})이에요.`, hint, h3 };
          if (same(v, rr)) return { correct: false, feedback: '반지름을 그대로 썼어요. 가로는 밑면의 둘레예요.', hint, h3 };
          if (same(v, s.h)) return { correct: false, feedback: '높이를 썼어요. 높이는 옆면의 세로이고, 가로는 밑면의 둘레예요.', hint, h3 };
          if (same(v, rr * rr * PI)) return { correct: false, feedback: '밑면(원)의 넓이를 구했어요. 가로는 둘레(지름 × 원주율)예요.', hint, h3 };
          return { correct: false, feedback: '다시 계산해 볼까요? 지름부터 구해요.', hint, h3 };
        }
        if (t.unrolled != null) {
          if (t.r != null && s.r !== t.r) return { correct: false, feedback: `이번에는 밑면의 반지름을 ${t.r} cm로 맞춰요.`, hint: '반지름 옆의 + − 단추를 눌러요.' };
          if (s.unrolled !== t.unrolled) return { correct: false, feedback: '아직 원기둥을 펼치지 않았어요.', hint: '"펼치기"를 눌러 원기둥을 한 바퀴 굴려 보세요.' };
          const want = typeof t.width === 'string' ? { part: '가로', answer: t.width } : typeof t.height === 'string' ? { part: '세로', answer: t.height } : null;
          if (want && s.pick == null) return { correct: false, incomplete: true, feedback: `옆면의 ${want.part}가 원기둥의 어느 부분과 같은지 아래에서 골라요.` };
          if (want && s.pick !== want.answer) {
            const why = {
              '가로:밑면의 지름': '지름은 둘레보다 짧아요. 굴러간 자국(분홍 선)은 밑면 테두리가 한 바퀴 닿은 길이예요.',
              '가로:밑면의 반지름': '반지름은 원의 중심에서 테두리까지예요. 가로에는 밑면 테두리 한 바퀴가 펴져 있어요.',
              '가로:원기둥의 높이': '높이는 옆면의 세로예요. 가로는 원기둥이 한 바퀴 굴러간 길이예요.',
              '세로:밑면의 둘레': '밑면의 둘레는 가로예요. 세로는 서 있던 원기둥의 키와 같아요.',
              '세로:밑면의 지름': '지름은 밑면(원)의 길이예요. 세로는 원기둥의 키와 같아요.',
              '세로:밑면의 반지름': '반지름은 밑면(원)의 길이예요. 세로는 원기둥의 키와 같아요.',
            }[`${want.part}:${s.pick}`] || '다시 골라 볼까요?';
            const hint = want.part === '가로' ? '분홍 선(밑면 테두리)이 옆면의 가로를 따라 찍혔어요. 다시 말기·펼치기로 굴러가는 모습을 보세요.' : '펼치기 전 원기둥 옆에 적힌 높이와 옆면의 세로를 견주어 보세요.';
            return { correct: false, feedback: why, hint };
          }
          if (want) return { correct: true, feedback: `맞아요! 옆면의 ${want.part}는 ${josa(want.answer, '과', '와')} 같아요.` };
          return { correct: true, feedback: '펼쳤어요! 옆면은 직사각형이고, 두 밑면은 크기가 같은 원이에요.' };
        }
        return { correct: false, feedback: '확인할 문제가 없어요.' };
      }

      return {
        getState: state,
        setState,
        reset() { setState(Object.assign({}, start, { pick: null, judge: null, value: null })); },
        solve(t) {
          const s = {};
          if (t.judge != null) s.judge = t.judge;
          if (t.unrolled != null) s.unrolled = t.unrolled;
          if (t.findR) { s.r = t.r; if (pad) s.value = 2 * t.r; } else if (t.r != null && t.width == null && t.unrolled != null) s.r = t.r;
          if (t.width != null && typeof t.width === 'string') s.pick = t.width;
          if (t.height != null && typeof t.height === 'string') s.pick = t.height;
          if (typeof t.width === 'number') s.value = t.width;
          setState(s);
        },
        check(t, opts) {
          const r = grade(t); delete r.h3;
          // 길이 이름표(revealAfterCheck)는 맞힌 확인에서만 켠다 — 틀린 확인·힌트는 아무것도 드러내지 않는다
          if (r.correct && !(opts && opts.forHint)) { revealed = true; paintLabels(); }
          return r;
        },
        // 힌트 3단계: 1 개념(수 없음) / 2 틀린 단계 짚기(반지름 → 지름 등, 수 없음) / 3 수를 넣은 풀이 한 단계
        hint(t, opts) {
          t = t || {};
          const r = grade(t);
          const why = t.judge != null ? '접었을 때 두 밑면이 위와 아래를 하나씩 막고, 옆면의 가로가 밑면 둘레를 꼭 한 바퀴 둘러야 원기둥이 돼요.'
            : t.findR ? '옆면의 가로는 밑면의 둘레예요. 둘레를 구할 때 한 계산을 거꾸로 해 보세요.'
              : typeof t.width === 'number' ? '옆면은 원기둥을 한 바퀴 굴린 자국이라 가로가 밑면의 둘레예요. 둘레는 지름 × 원주율이에요.'
                : typeof t.width === 'string' ? '원기둥을 한 바퀴 굴리면 밑면 테두리가 바닥에 한 바퀴 닿아요. 그 자국(분홍 선)이 옆면의 가로예요.'
                  : typeof t.height === 'string' ? '옆면을 펼쳐도 키는 그대로예요. 펼치기 전 원기둥의 키와 옆면의 세로를 견주어 보세요.'
                    : '"펼치기"를 눌러 원기둥을 한 바퀴 굴려 보세요. 옆면은 직사각형, 두 밑면은 크기가 같은 원이에요.';
          const lv = hintLevel(opts);
          if (r.correct) return { hint: why, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: why, correct: false, level: 1 };
          if (lv >= 3) {
            const rr = t.r != null ? t.r : state().r;
            const h3 = r.h3 || (typeof t.width === 'number' ? `옆면의 가로 = 지름 × ${PI} = ${2 * rr} × ${PI}를 계산해요.` : t.findR ? `${fmt(2 * t.r * PI)} ÷ ${PI} = ${2 * t.r}(지름), 지름 ÷ 2 = 반지름이에요.` : r.hint);
            return { hint: h3, correct: false, level: 3 };
          }
          return { hint: r.hint, correct: false, level: 2 };
        },
        wrongAnswer(t) {
          t = t || {};
          const s = state();
          if (t.judge != null && judge) {
            // 두 밑면이 같은 쪽에 붙은 전개도, 없으면 정답이 아닌 첫 전개도
            const i = judge.nets.findIndex((k, n) => k === 'same' && n !== t.judge);
            return Object.assign(s, { judge: i >= 0 ? i : judge.nets.findIndex((_, n) => n !== t.judge) });
          }
          if (t.findR) {
            // 가로 ÷ 3.14로 구한 지름을 반지름으로 쓰거나 2로 두 번 나누는 실수
            let rr = Math.max(1, Math.round(t.r / 2));
            if (rr === t.r) rr = t.r > 1 ? t.r - 1 : t.r + 1;
            return Object.assign(s, pad ? { r: rr, value: 2 * t.r } : { r: rr });
          }
          if (typeof t.width === 'number') {
            // 옆면의 가로를 밑면의 둘레 대신 지름으로 쓰는 오개념
            const rr = t.r != null ? t.r : s.r;
            return Object.assign(s, { value: 2 * rr });
          }
          const base = Object.assign(s, { unrolled: t.unrolled != null ? !!t.unrolled : s.unrolled });
          if (t.r != null && t.width == null && t.height == null) return Object.assign(base, { r: t.r > 1 ? t.r - 1 : t.r + 1 });
          if (typeof t.width === 'string') return Object.assign(base, { pick: '밑면의 지름' });
          if (typeof t.height === 'string') return Object.assign(base, { pick: '밑면의 둘레' });
          return Object.assign(base, { unrolled: !t.unrolled });
        },
        async demo(t) {
          if (t && t.r != null && t.r !== r) { setR(t.r, t.h != null ? t.h : h); await kit.wait(400); }
          if (t && t.unrolled != null && t.unrolled !== unrolled) await setUnrolled(t.unrolled, true);
          if (t && t.unrolled == null && !unrolled) await setUnrolled(true, true);
        },
      };
    },
  });
})(window.PaperKit);
