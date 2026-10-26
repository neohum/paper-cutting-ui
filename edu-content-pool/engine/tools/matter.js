/* 물질 실험대 — 고체·액체·기체 입자 상자(온도), 물질 카드 분류(성질), 용해와 진하기, 혼합물 분리를 한 교구로 다룬다
 * (3학년 물질의 성질·물질의 상태, 4학년 혼합물의 분리·물의 상태 변화, 5학년 용해와 용액).
 *
 * 모드(o.mode)
 * | 모드 | 하는 일 | 상태 | target |
 * | --- | --- | --- | --- |
 * | 'particles'(기본) | 온도를 −/+로 바꾸면 입자 배열·움직임이 고체·액체·기체로 바뀐다. o.boxes면 고정된 상자 여러 개를 견준다 | { temp } · boxes: {} | { phase:'solid'|'liquid'|'gas' } · { temp:°C } |
 * | 'sort' | 물질(물체) 카드를 성질에 따라 칸에 넣는다 | { placed:{ 카드id: 칸번호|null } } | { bins:{ 카드id: 칸번호 } } |
 * | 'dissolve' | 물의 양·녹이는 숟가락 수(·물 온도)를 바꿔 녹는 양과 진하기를 본다 | { water, spoons, temp? } | { set:{ water?, spoons?, temp? } } · { saturated:true }(처음으로 녹지 않고 남을 때까지) · { conc:물 100 mL당 숟가락 } · { sameAs:견줄 그릇 번호 } |
 * | 'separate' | 자석·체·물 붓기·뜬 것 건지기·거르기·증발을 차례로 골라 섞인 것을 나눈다 | { steps:['magnet'…] } | { separated:true } · { got:'성분 이름' }(그것만 따로 모으기) · { steps:[…] }(그 순서 그대로) |
 * 모든 모드 공통: o.ask = { q, choices[], why?[] } → 상태 pick, target { pick } / o.askNum = { q, unit?, tol? } → 상태 num, target { num } (다른 target과 함께 써도 된다)
 *
 * 옵션
 * | 옵션 | 모드 | 뜻 |
 * | --- | --- | --- |
 * | substance | particles | { name, melt(녹는 온도 °C), boil(끓는 온도 °C) } 기본 물 { 0, 100 } |
 * | temps | particles | [최저, 최고, 한 칸] °C (기본 [−20, 120, 10]) |
 * | boxes | particles | ['solid'|'liquid'|'gas', …] 고정 상자(이름 가·나·다) — 온도 조절 없음, ask와 함께 쓴다 |
 * | showLabel | particles | 상태 이름(고체·액체·기체) 읽기 값(기본 true, revealAfterCheck면 맞힌 확인 뒤에만) |
 * | cards, bins | sort | cards [{ id, name, icon?:'fi-rr-…', props?:['단단해요', …] }], bins 칸 이름 배열 |
 * | solute | dissolve | { name, perSpoon(g, 기본 5), limit(물 100 mL에 녹는 최대 g, 기본 35) } |
 * | waters, maxSpoons, temps | dissolve | waters [최소, 최대, 한 칸] mL(기본 [50, 200, 50]), 최대 숟가락(기본 12), temps [{ name, limit }](물 온도 고르기) |
 * | compare | dissolve | [{ water, spoons, label }] 견줄 고정 그릇(진하기 비교) |
 * | showConc | dissolve | 진하기(100 mL당 g) 읽기 값 |
 * | parts | separate | [{ name, magnet?, big?, dissolve?, float? }] (자석에 붙음·알갱이 큼·물에 녹음·물에 뜸) |
 * | tools | separate | 쓸 도구: 'magnet' 'sieve' 'water' 'float' 'filter' 'evaporate' (기본 모두) |
 * | readOnly, revealAfterCheck, print | 모두 | 조작 잠금 / 확인 전 읽기 값 숨김 / 활동지 흑백 |
 * 예) { mode:'particles', substance:{ name:'물', melt:0, boil:100 } } + target { phase:'gas' }
 *     { mode:'dissolve', solute:{ name:'소금', perSpoon:5, limit:35 } } + target { saturated:true }
 *     { mode:'separate', parts:[{ name:'철 가루', magnet:true }, { name:'소금', dissolve:true }, { name:'모래' }] } + target { separated:true }
 * 키보드: 모든 조작은 단추(Tab, Enter). 카드는 Enter로 다음 칸, 숫자 1~9 그 칸, 0 되돌리기.
 */
(function (K) {
  'use strict';
  // ---------- 공통 도우미(교구 파일마다 같은 모양) ----------
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  const josa = (w, a, b) => { const s = String(w); const c = s.charCodeAt(s.length - 1); return s + (c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 ? a : b); };
  const r2 = (v) => Math.round(v * 100) / 100;
  const P = 'mt';
  function ensureStyle() {
    if (document.getElementById(`${P}-style`)) return;
    const s = document.createElement('style'); s.id = `${P}-style`;
    s.textContent = `
.${P}-panel{display:grid;gap:10px;margin-top:10px}
.${P}-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.${P}-q{margin:0;font-weight:700;line-height:1.45;word-break:keep-all}
.${P}-val{display:inline-block;min-width:4.5em;text-align:center;font-weight:800;color:#473B6B}
.${P}-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:8px}
.${P}-picks .pl-btn{white-space:normal;line-height:1.3;word-break:keep-all;min-height:44px}
.${P}-in{min-height:44px;width:5.5em;box-sizing:border-box;padding:6px 10px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.1em;font-weight:800;text-align:center;color:#275C46;background:#fff}
.${P}-cls{display:grid;gap:10px}
.${P}-tray{display:flex;flex-wrap:wrap;gap:8px;min-height:60px;padding:8px;border-radius:14px;background:#FFFDF9;border:1px dashed rgba(61,53,46,.25)}
.${P}-bins{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px}
.${P}-bin{display:grid;align-content:start;gap:6px;min-height:100px;padding:6px;border-radius:14px;background:#EAF7F1;border:2px solid #82C2A8}
.${P}-bin>button{min-height:44px;width:100%;white-space:normal;line-height:1.25;word-break:keep-all}
.${P}-binc{display:flex;flex-wrap:wrap;gap:6px}
.${P}-card{display:inline-grid;justify-items:center;gap:2px;min-width:72px;min-height:56px;padding:6px 8px;border-radius:12px;border:1px solid rgba(61,53,46,.22);background:#fff;color:#3D352E;font:inherit;font-size:.9em;font-weight:800;cursor:pointer;line-height:1.25;word-break:keep-all}
.${P}-card .fi{font-size:22px;color:#473B6B;line-height:1}
.${P}-card small{font-weight:600;font-size:.82em;color:#544B42}
.${P}-card[aria-pressed="true"]{box-shadow:0 0 0 3px #E69D7B;background:#FDF1EA}
.${P}-steps{margin:0;font-weight:700;color:#473B6B;line-height:1.45;word-break:keep-all}
@media print{.${P}-panel{display:none}.${P}-card,.${P}-bin,.${P}-tray{background:#fff!important;border-color:#000!important;box-shadow:none!important}}
`;
    document.head.appendChild(s);
  }
  const h = (tag, attrs, parent, text) => {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    if (parent) parent.appendChild(n);
    return n;
  };
  const button = (parent, html, label, onClick) => {
    const b = h('button', { type: 'button', class: 'pl-btn pl-btn--small', tabindex: '0', 'aria-label': label }, parent);
    b.innerHTML = html; b.addEventListener('click', onClick); return b;
  };
  function pickRow(parent, label, choices, onPick) {
    const row = h('div', { class: `${P}-picks`, role: 'radiogroup', 'aria-label': label }, parent);
    const btns = choices.map((text, i) => {
      const b = h('button', { type: 'button', class: 'pl-btn pl-btn--small', role: 'radio', 'aria-checked': 'false', tabindex: '0' }, row, text);
      b.addEventListener('click', () => onPick(i));
      b.addEventListener('keydown', (e) => {
        const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!d) return;
        e.preventDefault(); const j = (i + d + btns.length) % btns.length; onPick(j); btns[j].focus();
      });
      return b;
    });
    return (k) => btns.forEach((b, i) => b.setAttribute('aria-checked', String(i === k)));
  }
  function numBox(parent, label, onSet, decimal) {
    const inp = h('input', { class: `${P}-in`, type: 'text', inputmode: decimal ? 'decimal' : 'numeric', autocomplete: 'off', 'aria-label': label, tabindex: '0' }, parent);
    inp.addEventListener('input', () => { inp.value = inp.value.replace(decimal ? /[^0-9.]/g : /[^0-9]/g, '').slice(0, 6); onSet(inp.value === '' || inp.value === '.' ? null : Number(inp.value), true); });
    inp.addEventListener('keydown', (e) => { const d = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!d) return; e.preventDefault(); onSet(Math.max(0, r2((Number(inp.value) || 0) + d * (decimal ? 0.1 : 1)))); });
    return inp;
  }
  function askPanel(panel, o, log) {
    const a = { pick: null, num: null, setPick: null, numIn: null };
    if (o.ask && Array.isArray(o.ask.choices)) {
      h('p', { class: `${P}-q` }, panel, o.ask.q || '알맞은 것을 고르세요.');
      a.setPick = pickRow(panel, o.ask.q || '고르기', o.ask.choices, (i) => { a.pick = i; a.setPick(i); log(); K.announce(o.ask.choices[i]); });
    }
    if (o.askNum) {
      const row = h('div', { class: `${P}-row` }, panel);
      h('span', { class: `${P}-q` }, row, o.askNum.q || '수를 쓰세요.');
      a.numIn = numBox(row, o.askNum.q || '답', (v, typing) => { a.num = v; if (!typing) a.numIn.value = v == null ? '' : v; log(); }, true);
      if (o.askNum.unit) h('span', { class: `${P}-q` }, row, o.askNum.unit);
    }
    a.set = (s) => {
      if (s.pick !== undefined) { a.pick = s.pick; if (a.setPick) a.setPick(a.pick); }
      if (s.num !== undefined) { a.num = s.num; if (a.numIn) a.numIn.value = a.num == null ? '' : a.num; }
    };
    return a;
  }
  function judgeAsk(t, s, o) {
    if (t.pick != null) {
      if (s.pick == null) return { correct: false, incomplete: true, feedback: '아래에서 알맞은 것을 하나 골라요.' };
      if (s.pick !== t.pick) return { correct: false, feedback: (o.ask && o.ask.why && o.ask.why[s.pick]) || '고른 것이 맞지 않아요. 실험 결과를 다시 살펴보고 골라요.', hint: '보기마다 교구에서 본 것과 맞는지 하나씩 확인해요.', h3: (o.ask && o.ask.explain) || '입자의 배열과 움직임, 또는 물질의 성질을 하나씩 견주어요.' };
    }
    if (t.num != null) {
      if (s.num == null) return { correct: false, incomplete: true, feedback: '답 칸에 수를 써요.' };
      const tol = (o.askNum && o.askNum.tol) || 1e-6;
      if (Math.abs(s.num - t.num) > tol) return { correct: false, feedback: s.num > t.num ? '쓴 수가 너무 커요.' : '쓴 수가 너무 작아요.', hint: '교구에서 본 값을 다시 확인해요.', h3: (o.askNum && o.askNum.explain) || '실험 결과를 차례로 다시 살펴요.' };
    }
    return null;
  }
  // 같은 차시는 늘 같은 입자 배치(교구 글자·상태가 출구에서 같게) — 씨앗 있는 난수
  const rng = (seed) => () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
  const PHASE_KO = { solid: '고체', liquid: '액체', gas: '기체' };
  const TOOLS = {
    magnet: { name: '자석 대기', icon: 'fi-rr-magnet', pile: '자석에 붙은 것' },
    sieve: { name: '체로 치기', icon: 'fi-rr-filter', pile: '체에 남은 것' },
    water: { name: '물 붓기', icon: 'fi-rr-water', pile: '' },
    float: { name: '뜬 것 건지기', icon: 'fi-rr-hand-holding-water', pile: '물에 뜬 것' },
    filter: { name: '거름종이로 거르기', icon: 'fi-rr-flask', pile: '거름종이에 남은 것' },
    evaporate: { name: '물 증발시키기', icon: 'fi-rr-fire-flame-curved', pile: '증발 접시에 남은 것' },
  };
  const PART_COLOR = ['#544B42', '#E8D8B0', '#FFFFFF', '#E69D7B', '#82C2A8', '#B8A6D9'];

  K.registerTool('matter', {
    name: '물질 실험대',
    create(box, o, kit) {
      ensureStyle();
      const mode = ['sort', 'dissolve', 'separate'].includes(o.mode) ? o.mode : 'particles';
      const print = !!o.print; const ro = !!o.readOnly || print;
      // 활동지 그림 칸은 좁아서 그대로면 눈금 숫자와 이름이 읽히지 않는다
      const FS = print ? 1.5 : 1;
      let revealed = false;
      const showVals = () => !print && (!o.revealAfterCheck || revealed);
      let log = () => {};
      const panel = print ? null : document.createElement('div');
      if (panel) panel.className = `${P}-panel`;
      let ask = { pick: null, num: null, set() {} };
      const M = {};
      const changed = () => { revealed = false; M.paint(); log(); };
      function stepRow(parent, label, getText, onStep) {
        const row = h('div', { class: `${P}-row`, role: 'group', 'aria-label': label }, parent);
        h('span', { class: `${P}-q` }, row, label);
        button(row, '<i class="fi fi-rr-minus" aria-hidden="true"></i>', `${label} 줄이기`, () => onStep(-1));
        const val = h('span', { class: `${P}-val`, 'aria-live': 'polite' }, row, getText());
        button(row, '<i class="fi fi-rr-plus" aria-hidden="true"></i>', `${label} 늘리기`, () => onStep(1));
        return () => { val.textContent = getText(); };
      }
      const bg = (st, W, H) => kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 18 }, color: 'cream', depth: 1, texture: !print, fill: print ? '#fff' : '#FBF6EC' });

      // ================= 입자 상자 =================
      if (mode === 'particles') {
        const sub = Object.assign({ name: '물', melt: 0, boil: 100 }, o.substance || {});
        const TR = Array.isArray(o.temps) && o.temps.length === 3 ? { min: o.temps[0], max: o.temps[1], step: o.temps[2] } : { min: -20, max: 120, step: 10 };
        const fixedBoxes = Array.isArray(o.boxes) && o.boxes.length ? o.boxes.slice(0, 3).map((b) => (PHASE_KO[b] ? b : 'solid')) : null;
        const cnt = K.clamp(o.count || 20, 8, 30);
        const nb = fixedBoxes ? fixedBoxes.length : 1;
        const W = 640; const H = 330; const BW = fixedBoxes ? (W - 40 - (nb - 1) * 20) / nb : 340; const BH = 230; const BY = 40;
        let temp = K.clamp(o.start != null ? o.start : 20, TR.min, TR.max);
        const phaseOf = (tc) => (tc < sub.melt ? 'solid' : tc >= sub.boil ? 'gas' : 'liquid');
        const st = kit.stage(box, { viewBox: [W, H], label: fixedBoxes ? `입자 상자 ${nb}개. 상자마다 입자의 배열과 움직임이 달라요.` : `${sub.name} 입자 상자와 온도계. 온도를 바꾸면 입자의 배열과 움직임이 바뀌어요.` });
        bg(st, W, H);
        const G = st.layer('boxes');
        const rand = rng(97 + cnt);
        const boxes = Array.from({ length: nb }, (_, b) => {
          const x0 = fixedBoxes ? 20 + b * (BW + 20) : 40; const y0 = BY;
          kit.el('rect', { x: x0, y: y0, width: BW, height: BH, rx: 12, fill: print ? '#fff' : '#EDF7FA', stroke: '#204C5A', 'stroke-width': 3 }, G);
          const lab = kit.el('text', { x: x0 + BW / 2, y: y0 + BH + 24 + 6 * FS, 'text-anchor': 'middle', 'font-size': Math.round(18 * FS), class: 'pk-text', fill: '#3D352E' }, G);
          const ps = [];
          for (let i = 0; i < cnt; i++) {
            const g = kit.el('g', null, G);
            kit.el('circle', { r: 8, fill: print ? '#fff' : '#5E9BD6', stroke: print ? '#000' : '#204C5A', 'stroke-width': 1.5 }, g);
            ps.push({ g, x: x0 + 20 + rand() * (BW - 40), y: y0 + 20 + rand() * (BH - 40), vx: rand() * 2 - 1, vy: rand() * 2 - 1, hx: 0, hy: 0, ph: rand() * 6.28 });
          }
          return { x0, y0, ps, lab, phase: fixedBoxes ? fixedBoxes[b] : phaseOf(temp) };
        });
        // 고체: 바닥에 촘촘한 줄, 액체: 바닥 쪽에 모여 서로 미끄러짐, 기체: 상자 가득 빠르게
        const homes = (bx) => {
          const cols = Math.min(cnt, Math.max(4, Math.floor((BW - 40) / 20))); const sCols = Math.ceil(Math.sqrt(cnt)) + 1; const rr = rng(7 + bx.x0);
          bx.ps.forEach((p, i) => {
            if (bx.phase === 'solid') { const c = i % sCols; const r = Math.floor(i / sCols); p.hx = bx.x0 + BW / 2 + (c - (sCols - 1) / 2) * 18; p.hy = bx.y0 + BH - 16 - r * 18; }
            else if (bx.phase === 'liquid') { const c = i % (cols + 1); const r = Math.floor(i / (cols + 1)); p.hx = bx.x0 + 20 + (c + rr() * 0.5) * ((BW - 40) / (cols + 1)); p.hy = bx.y0 + BH - 14 - r * 17 - rr() * 4; }
          });
        };
        boxes.forEach(homes);
        const thermo = kit.el('g', null, st.layer('thermo'));
        let tFill = null; let tTxt = null;
        if (!fixedBoxes) {
          const TX = 470; const TY = 50; const TL = 200;
          kit.el('rect', { x: TX - 10, y: TY, width: 20, height: TL, rx: 10, fill: '#fff', stroke: '#702830', 'stroke-width': 2.5 }, thermo);
          kit.el('circle', { cx: TX, cy: TY + TL + 12, r: 16, fill: print ? '#ddd' : '#E8655A', stroke: '#702830', 'stroke-width': 2.5 }, thermo);
          tFill = kit.el('rect', { x: TX - 5, width: 10, fill: print ? '#bbb' : '#E8655A' }, thermo);
          for (let c = TR.min; c <= TR.max; c += TR.step * (TR.max - TR.min > 100 ? 2 : 1)) { const y = TY + TL - ((c - TR.min) / (TR.max - TR.min)) * TL; kit.el('line', { x1: TX + 10, y1: y, x2: TX + 20, y2: y, stroke: '#702830', 'stroke-width': 1.5 }, thermo); kit.el('text', { x: TX + 24, y: y + 5 * FS, 'font-size': Math.round(13 * FS), class: 'pk-text', fill: '#702830' }, thermo).textContent = String(c); }
          tTxt = kit.el('text', { x: TX, y: TY + TL + 34 + 18 * FS, 'text-anchor': 'middle', 'font-size': Math.round(18 * FS), class: 'pk-text', fill: '#702830' }, thermo);
          tFill.__TY = TY; tFill.__TL = TL;
        }
        let upd = null;
        if (panel && !ro && !fixedBoxes) upd = stepRow(panel, '온도', () => `${temp} °C`, (d) => { temp = K.clamp(temp + d * TR.step, TR.min, TR.max); changed(); kit.tick(); });
        const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
        const stepP = (bx, dt, still) => {
          const speed = bx.phase === 'gas' ? 2.2 + Math.max(0, fixedBoxes ? 1 : (temp - sub.boil) / 40) : 1;
          for (const p of bx.ps) {
            if (bx.phase === 'gas' && !still) {
              p.x += p.vx * speed * dt; p.y += p.vy * speed * dt;
              if (p.x < bx.x0 + 10 || p.x > bx.x0 + BW - 10) { p.vx = -p.vx; p.x = K.clamp(p.x, bx.x0 + 10, bx.x0 + BW - 10); }
              if (p.y < bx.y0 + 10 || p.y > bx.y0 + BH - 10) { p.vy = -p.vy; p.y = K.clamp(p.y, bx.y0 + 10, bx.y0 + BH - 10); }
            } else if (bx.phase === 'gas') { /* 멈춘 그림: 지금 자리 */ }
            else {
              const a = still ? 1 : 0.12;
              p.ph += dt * (bx.phase === 'solid' ? 0.35 : 0.08);
              const j = bx.phase === 'solid' ? 1.6 : 5;
              const tx = p.hx + (still ? 0 : Math.sin(p.ph) * j); const ty = p.hy + (still ? 0 : Math.cos(p.ph * 1.3) * j * 0.6);
              p.x += (tx - p.x) * a; p.y += (ty - p.y) * a;
            }
            kit.transform(p.g, { x: p.x, y: p.y });
          }
        };
        let raf = 0; let last = 0;
        const loop = (t) => {
          if (!st.svg.isConnected) { raf = 0; return; }
          const dt = last ? Math.min(3, (t - last) / 16.7) : 1; last = t;
          boxes.forEach((bx) => stepP(bx, dt, false));
          raf = requestAnimationFrame(loop);
        };
        const settle = () => boxes.forEach((bx) => { if (bx.phase === 'gas') { const rr = rng(13 + bx.x0); bx.ps.forEach((p) => { p.x = bx.x0 + 14 + rr() * (BW - 28); p.y = bx.y0 + 14 + rr() * (BH - 28); }); } stepP(bx, 1, true); });
        settle();
        if (!print && !reduce) raf = requestAnimationFrame(loop);
        void raf;
        M.paint = () => {
          if (!fixedBoxes) { const ph = phaseOf(temp); if (ph !== boxes[0].phase) { boxes[0].phase = ph; homes(boxes[0]); if (print || reduce || ph === 'gas') settle(); } }
          boxes.forEach((bx, i) => { bx.lab.textContent = fixedBoxes ? `${'가나다'[i]}${o.showLabel !== false && showVals() && o.revealAfterCheck ? ` (${PHASE_KO[bx.phase]})` : ''}` : o.showLabel !== false && showVals() ? `${sub.name}: ${PHASE_KO[bx.phase]}` : sub.name; });
          if (tFill) { const y = tFill.__TY + tFill.__TL - ((temp - TR.min) / (TR.max - TR.min)) * tFill.__TL; tFill.setAttribute('y', y); tFill.setAttribute('height', tFill.__TY + tFill.__TL + 6 - y); tTxt.textContent = `${temp} °C`; }
          if (upd) upd();
        };
        M.state = () => (fixedBoxes ? {} : { temp });
        M.set = (s) => { if (!fixedBoxes && s.temp != null) temp = K.clamp(Math.round(Number(s.temp)), TR.min, TR.max); };
        const tempFor = (ph) => { for (let c = TR.min; c <= TR.max; c += TR.step) if (phaseOf(c) === ph && c !== temp) return c; for (let c = TR.min; c <= TR.max; c += TR.step) if (phaseOf(c) === ph) return c; return null; };
        M.judge = (t) => {
          if (fixedBoxes) return null;
          if (t.phase != null && phaseOf(temp) !== t.phase) {
            const now = phaseOf(temp);
            return { correct: false, feedback: `지금 ${josa(sub.name, '은', '는')} ${PHASE_KO[t.phase]} 상태가 아니에요.`, hint: now === 'solid' ? '입자가 제자리에서 떨기만 해요. 온도를 바꾸면 어떻게 될지 생각해요.' : now === 'gas' ? '입자가 상자 가득 빠르게 날아다녀요. 온도를 바꾸면 어떻게 될지 생각해요.' : '입자가 바닥에 모여 미끄러지듯 움직여요. 온도를 바꾸면 어떻게 될지 생각해요.', h3: `${josa(sub.name, '은', '는')} ${sub.melt} °C보다 낮으면 고체, ${sub.boil} °C 이상이면 기체, 그 사이는 액체예요.` };
          }
          if (t.temp != null && temp !== t.temp) return { correct: false, feedback: temp > t.temp ? '온도가 너무 높아요.' : '온도가 너무 낮아요.', hint: '온도계의 눈금을 보며 한 칸씩 바꿔요.', h3: `온도계가 ${t.temp} °C를 가리키게 해요.` };
          return null;
        };
        M.solve = (t) => { if (fixedBoxes) return; if (t.phase != null) { const c = tempFor(t.phase); if (c != null) temp = c; } if (t.temp != null) temp = t.temp; };
        M.wrong = (t) => {
          if (fixedBoxes) return null;
          if (t.phase != null) { const other = t.phase === 'gas' ? 'liquid' : t.phase === 'solid' ? 'liquid' : 'gas'; const c = tempFor(other); return c == null ? null : { temp: c }; }
          if (t.temp != null) return { temp: K.clamp(t.temp + TR.step, TR.min, TR.max) === t.temp ? t.temp - TR.step : K.clamp(t.temp + TR.step, TR.min, TR.max) };
          return null;
        };
        M.hint1 = (t) => (t.phase != null ? '온도가 올라가면 입자가 더 활발하게 움직이고, 내려가면 입자가 서로 가까이 모여요.' : '온도계의 눈금 한 칸이 몇 도인지 먼저 알아봐요.');
        M.dist = (a, b) => Math.abs((a.temp || 0) - (b.temp || 0)) / TR.step;
      }

      // ================= 물질 분류 카드 =================
      if (mode === 'sort') {
        const cards = (Array.isArray(o.cards) ? o.cards : []).filter((c) => c && c.id != null).map((c) => Object.assign({}, c, { id: String(c.id) }));
        const bins = Array.isArray(o.bins) && o.bins.length ? o.bins.map(String) : ['가', '나'];
        const wrap = h('div', { class: `${P}-cls`, role: 'group', 'aria-label': '물질 카드 분류' }, box);
        const tray = h('div', { class: `${P}-tray` }, wrap);
        const binsEl = h('div', { class: `${P}-bins` }, wrap);
        const placedMap = {}; let sel = null; const els = {};
        const binBoxes = bins.map((name, i) => {
          const b = h('div', { class: `${P}-bin` }, binsEl);
          const hd = h('button', { type: 'button', class: 'pl-btn pl-btn--small', tabindex: '0', 'aria-label': `${i + 1}번 칸 ${name}에 넣기` }, b, `${i + 1}. ${name}`);
          if (!ro) hd.addEventListener('click', () => { if (sel != null) put(sel, i); });
          return h('div', { class: `${P}-binc` }, b);
        });
        if (!ro) { const back = button(wrap, '<i class="fi fi-rr-undo" aria-hidden="true"></i> 고른 카드 되돌리기', '고른 카드를 카드 칸으로 되돌리기', () => { if (sel != null) put(sel, null); }); back.style.justifySelf = 'start'; }
        cards.forEach((c) => {
          placedMap[c.id] = null;
          const b = h('button', { type: 'button', class: `${P}-card`, tabindex: '0', 'aria-pressed': 'false', 'aria-label': `카드 ${c.name}${Array.isArray(c.props) ? `: ${c.props.join(', ')}` : ''}` }, tray);
          if (typeof c.icon === 'string' && /^fi-rr-[a-z0-9-]+$/.test(c.icon)) h('i', { class: `fi ${c.icon}`, 'aria-hidden': 'true' }, b);
          h('span', null, b, c.name || c.id);
          if (Array.isArray(c.props)) h('small', null, b, c.props.join(' · '));
          if (!ro) {
            b.addEventListener('click', () => { if (sel === c.id) cycle(c.id); else select(c.id); });
            b.addEventListener('keydown', (e) => {
              if (/^[0-9]$/.test(e.key)) { e.preventDefault(); const k = Number(e.key); put(c.id, k === 0 ? null : Math.min(k - 1, bins.length - 1)); select(c.id); }
              else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); select(c.id); cycle(c.id); }
            });
          }
          els[c.id] = b;
        });
        function select(id) { sel = id; for (const k in els) els[k].setAttribute('aria-pressed', String(k === id)); }
        function cycle(id) { const v = placedMap[id]; put(id, v == null ? 0 : v + 1 >= bins.length ? null : v + 1); }
        function put(id, v) { placedMap[id] = v; place(id); revealed = false; log(); kit.tick(); kit.announce(v == null ? '카드를 카드 칸으로 되돌렸어요' : `카드를 ${bins[v]} 칸에 넣었어요`); els[id].focus(); }
        function place(id) { const v = placedMap[id]; (v == null ? tray : binBoxes[v]).appendChild(els[id]); }
        M.state = () => ({ placed: Object.assign({}, placedMap) });
        M.set = (s) => { if (s.placed) for (const c of cards) { const v = s.placed[c.id]; placedMap[c.id] = Number.isInteger(v) && v >= 0 && v < bins.length ? v : null; place(c.id); } };
        M.paint = () => {};
        M.judge = (t) => {
          if (!t.bins) return null;
          const ids = Object.keys(t.bins);
          if (ids.some((id) => placedMap[id] == null)) return { correct: false, incomplete: true, feedback: '카드를 모두 칸에 넣어요.' };
          const bad = ids.filter((id) => placedMap[id] !== t.bins[id]);
          if (!bad.length) return null;
          const c = cards.find((x) => x.id === bad[0]);
          return { correct: false, feedback: `잘못 들어간 카드가 ${bad.length}장 있어요. 칸의 기준과 카드의 성질을 하나씩 견주어 봐요.`, hint: '물체의 이름이 아니라 그 물체를 이루는 물질의 성질(단단함, 휘어짐, 물에 뜸 등)을 봐요.', h3: `'${c ? c.name : bad[0]}' 카드는 ${bins[t.bins[bad[0]]]} 칸이에요.` };
        };
        M.solve = (t) => { if (t.bins) M.set({ placed: Object.assign({}, placedMap, t.bins) }); };
        M.wrong = (t) => { if (!t.bins || bins.length < 2) return null; const ids = Object.keys(t.bins); if (!ids.length) return null; const p = Object.assign({}, placedMap, t.bins); p[ids[0]] = (t.bins[ids[0]] + 1) % bins.length; return { placed: p }; };
        M.hint1 = () => '칸의 이름이 말하는 성질 하나만 보고 나누어요. 크기나 색이 아니라 그 성질이 있는지를 봐요.';
        M.dist = (a, b) => Object.keys(Object.assign({}, a.placed, b.placed)).filter((k) => (a.placed || {})[k] !== (b.placed || {})[k]).length;
      }

      // ================= 용해·진하기 =================
      if (mode === 'dissolve') {
        const sol = Object.assign({ name: '설탕', perSpoon: 5, limit: 35 }, o.solute || {});
        const WR = Array.isArray(o.waters) && o.waters.length === 3 ? { min: o.waters[0], max: o.waters[1], step: o.waters[2] } : { min: 50, max: 200, step: 50 };
        const maxS = o.maxSpoons || 12;
        const temps = Array.isArray(o.temps) && o.temps.length ? o.temps : null;
        const cmp = (Array.isArray(o.compare) ? o.compare : []).slice(0, 2).map((c, i) => ({ water: Number(c.water) || 100, spoons: Number(c.spoons) || 0, label: c.label || '나다'[i] }));
        let water = K.clamp(o.startWater || 100, WR.min, WR.max); let spoons = 0; let temp = 0;
        const limitOf = (ti) => (temps ? Number(temps[ti].limit) : sol.limit);
        const calc = (w, s, ti) => { const g = s * sol.perSpoon; const cap = (limitOf(ti) * w) / 100; const dis = Math.min(g, cap); return { g, dis, rest: r2(g - dis), conc: w ? (dis * 100) / w : 0 }; };
        const W = 640; const H = 340; const BOT = 290;
        const st = kit.stage(box, { viewBox: [W, H], label: `${sol.name} 녹이기. 물의 양과 넣는 숟가락 수를 바꾸며 녹는 모습과 진하기를 봐요.` });
        bg(st, W, H);
        const G = st.layer('cups');
        const all = [{ main: true, label: cmp.length ? '가' : '' }].concat(cmp);
        const slot = (W - 40) / all.length;
        const cups = all.map((c, i) => {
          const cx = 20 + slot * (i + 0.5); const bw = Math.min(150, slot - 40); const x0 = cx - bw / 2; const bh = 220;
          const liq = kit.el('rect', { x: x0 + 3, width: bw - 6, fill: '#BDE0EA' }, G);
          const grains = kit.el('g', null, G);
          kit.el('path', { d: `M${x0} ${BOT - bh} L${x0} ${BOT} L${x0 + bw} ${BOT} L${x0 + bw} ${BOT - bh}`, fill: 'none', stroke: '#3D352E', 'stroke-width': 3 }, G);
          for (let mL = 50; mL <= 200; mL += 50) { const y = BOT - (mL / 200) * (bh - 20); kit.el('line', { x1: x0, y1: y, x2: x0 + 14, y2: y, stroke: '#3D352E', 'stroke-width': 1.5 }, G); kit.el('text', { x: x0 + 18, y: y + 5 * FS, 'font-size': Math.round(12 * FS), class: 'pk-text', fill: '#3D352E' }, G).textContent = String(mL); }
          const lab = kit.el('text', { x: cx, y: BOT + 24 + 6 * FS, 'text-anchor': 'middle', 'font-size': Math.round(16 * FS), class: 'pk-text', fill: '#3D352E' }, G);
          const info = kit.el('text', { x: cx, y: 34, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#204C5A' }, G);
          return { x0, bw, bh, liq, grains, lab, info, c };
        });
        const ups = [];
        if (panel && !ro) {
          ups.push(stepRow(panel, '물의 양', () => `${water} mL`, (d) => { water = K.clamp(water + d * WR.step, WR.min, WR.max); changed(); kit.tick(); }));
          ups.push(stepRow(panel, `${sol.name} 숟가락`, () => `${spoons}숟가락`, (d) => { spoons = K.clamp(spoons + d, 0, maxS); changed(); kit.tick(); }));
          if (temps) { h('p', { class: `${P}-q` }, panel, '물의 온도'); const setT = pickRow(panel, '물의 온도', temps.map((x) => x.name), (i) => { temp = i; setT(i); changed(); }); setT(0); M._setT = setT; }
        }
        const paintCup = (cu, w, s, ti) => {
          const r = calc(w, s, ti); const hh = (w / 200) * (cu.bh - 20);
          cu.liq.setAttribute('y', BOT - hh); cu.liq.setAttribute('height', hh);
          const k = Math.min(1, r.conc / 40);
          cu.liq.setAttribute('fill', print ? `rgb(${Math.round(240 - 110 * k)},${Math.round(240 - 110 * k)},${Math.round(240 - 110 * k)})` : `rgb(${Math.round(189 + (230 - 189) * k)},${Math.round(224 - (224 - 157) * k)},${Math.round(234 - (234 - 123) * k)})`);
          while (cu.grains.firstChild) cu.grains.removeChild(cu.grains.firstChild);
          const n = Math.min(40, Math.ceil(r.rest / 1.5)); const rr = rng(5 + Math.round(cu.x0));
          for (let i = 0; i < n; i++) kit.el('rect', { x: cu.x0 + 8 + rr() * (cu.bw - 16), y: BOT - 6 - rr() * 10, width: 5, height: 5, fill: print ? '#555' : '#FFFFFF', stroke: '#6E530F', 'stroke-width': 1 }, cu.grains);
          return r;
        };
        M.paint = () => {
          cups.forEach((cu, i) => {
            const w = i === 0 ? water : cu.c.water; const s = i === 0 ? spoons : cu.c.spoons; const r = paintCup(cu, w, s, i === 0 ? temp : 0);
            cu.lab.textContent = `${cu.c.label ? `${cu.c.label}: ` : ''}물 ${w} mL · ${s}숟가락`;
            cu.info.textContent = o.showConc && showVals() ? `100 mL당 ${r2(r.conc)} g` : '';
          });
          ups.forEach((u) => u()); if (M._setT) M._setT(temp);
        };
        M.state = () => Object.assign({ water, spoons }, temps ? { temp } : {});
        M.set = (s) => { if (s.water != null) water = K.clamp(Number(s.water), WR.min, WR.max); if (s.spoons != null) spoons = K.clamp(Math.round(s.spoons), 0, maxS); if (temps && s.temp != null) temp = K.clamp(Math.round(s.temp), 0, temps.length - 1); };
        const concOf = (w, s) => (w ? (s * 100) / w : 0);
        M.judge = (t) => {
          const r = calc(water, spoons, temp);
          if (t.set) {
            const bad = Object.keys(t.set).filter((k) => M.state()[k] !== t.set[k]);
            if (bad.length) { const k = bad[0]; const lab = { water: '물의 양', spoons: '숟가락 수', temp: '물의 온도' }[k] || k; return { correct: false, feedback: `${josa(lab, '이', '가')} 문제에서 말한 것과 달라요.`, hint: '알아보려는 조건 하나만 바꾸고 나머지는 같게 두어요.', h3: k === 'temp' ? `물의 온도를 '${temps[t.set.temp].name}'으로 골라요.` : `${josa(lab, '을', '를')} ${t.set[k]}${k === 'water' ? ' mL' : '숟가락'}로 맞춰요.` }; }
          }
          if (t.saturated) {
            if (!spoons) return { correct: false, incomplete: true, feedback: `${josa(sol.name, '을', '를')} 한 숟가락씩 넣어 봐요.` };
            const prev = calc(water, spoons - 1, temp);
            if (r.rest <= 0) return { correct: false, feedback: '아직 모두 녹았어요. 녹지 않고 남을 때까지 더 넣어요.', hint: '한 숟가락씩 넣고 바닥에 남는 알갱이가 생기는지 봐요.', h3: '바닥에 알갱이가 처음 남는 때에서 멈춰요.' };
            if (prev.rest > 0) return { correct: false, feedback: '너무 많이 넣었어요. 이미 전에도 녹지 않고 남아 있었어요.', hint: '바닥에 알갱이가 처음 남은 때가 언제인지 찾아요.', h3: '한 숟가락씩 덜어 보며 알갱이가 사라지는 때를 찾아요.' };
          }
          if (t.conc != null && Math.abs(concOf(water, spoons) - t.conc) > 1e-6) return { correct: false, feedback: concOf(water, spoons) > t.conc ? '용액이 목표보다 진해요.' : '용액이 목표보다 묽어요.', hint: '같은 양의 물에 녹인 양이 많을수록 진해요. 물의 양이 바뀌면 녹이는 양도 같은 비율로 바꿔요.', h3: `물 100 mL마다 ${t.conc}숟가락이 되게 해요. 물 ${water} mL이면 ${r2((t.conc * water) / 100)}숟가락이에요.` };
          if (t.sameAs != null && cmp[t.sameAs - 1]) {
            const c = cmp[t.sameAs - 1];
            if (Math.abs(concOf(water, spoons) - concOf(c.water, c.spoons)) > 1e-6) return { correct: false, feedback: `${c.label} 그릇과 진하기가 달라요.`, hint: '물의 양과 녹인 양의 비율이 같아야 진하기가 같아요.', h3: `${c.label}: 물 ${c.water} mL에 ${c.spoons}숟가락. 물이 두 배면 숟가락도 두 배예요.` };
          }
          return null;
        };
        M.solve = (t) => {
          if (t.set) M.set(t.set);
          if (t.saturated) { let s = 1; while (s <= maxS && calc(water, s, temp).rest <= 0) s++; spoons = Math.min(s, maxS); }
          if (t.conc != null) { for (let w = WR.min; w <= WR.max; w += WR.step) { const s = (t.conc * w) / 100; if (Number.isInteger(s) && s <= maxS) { water = w; spoons = s; break; } } }
          if (t.sameAs != null && cmp[t.sameAs - 1]) {
            // 견줄 그릇과 물의 양이 다른 짝을 먼저 찾는다(같은 양이면 그대로 따라 하기일 뿐)
            const c = cmp[t.sameAs - 1]; let pick = null;
            for (let w = WR.min; w <= WR.max; w += WR.step) { const s = (c.spoons * w) / c.water; if (Number.isInteger(s) && s <= maxS && (!pick || pick[0] === c.water)) pick = [w, s]; }
            if (pick) { water = pick[0]; spoons = pick[1]; }
          }
        };
        // 흔한 실수: 물의 양을 바꾸고 녹이는 양은 그대로 둔다(진하기), 알갱이가 남은 뒤에도 더 넣는다(포화)
        M.wrong = (t) => {
          const s = M.state();
          if (t.set) { const k = Object.keys(t.set)[0]; Object.assign(s, t.set); if (k === 'water') s.water = t.set.water + WR.step <= WR.max ? t.set.water + WR.step : t.set.water - WR.step; else if (k === 'spoons') s.spoons = t.set.spoons + 1 <= maxS ? t.set.spoons + 1 : t.set.spoons - 1; else if (k === 'temp') s.temp = (t.set.temp + 1) % temps.length; return s; }
          if (t.saturated) { M.solve(t); const x = M.state(); M.set(s); x.spoons = Math.min(maxS, x.spoons + 1); return x; }
          if (t.conc != null) { M.solve(t); const x = M.state(); M.set(s); x.water = x.water + WR.step <= WR.max ? x.water + WR.step : x.water - WR.step; return x; }
          if (t.sameAs != null && cmp[t.sameAs - 1]) { const c = cmp[t.sameAs - 1]; const w = c.water + WR.step <= WR.max ? c.water + WR.step : c.water - WR.step; return Object.assign(s, { water: w, spoons: c.spoons }); }
          return null;
        };
        M.hint1 = (t) => (t.saturated ? '물에 녹을 수 있는 양에는 한계가 있어요. 한 숟가락씩 넣으며 바닥을 살펴요.' : t.conc != null || t.sameAs != null ? '진하기는 물의 양에 견주어 녹인 양이 얼마나 되는지로 정해져요.' : '알아보려는 조건 하나만 바꾸고 나머지는 같게 두어요.');
        M.dist = (a, b) => Math.abs((a.water || 0) - (b.water || 0)) / WR.step + Math.abs((a.spoons || 0) - (b.spoons || 0)) + (a.temp !== b.temp ? 1 : 0);
      }

      // ================= 혼합물 분리 =================
      if (mode === 'separate') {
        const parts = (Array.isArray(o.parts) && o.parts.length ? o.parts : [{ name: '철 가루', magnet: true }, { name: '소금', dissolve: true }, { name: '모래' }]).slice(0, 6).map((p, i) => Object.assign({ i }, p, { name: String(p.name) }));
        const tools = (Array.isArray(o.tools) && o.tools.length ? o.tools : Object.keys(TOOLS)).filter((k) => TOOLS[k]);
        let steps = [];
        // 차례대로 도구를 써 본 결과: 섞인 것(mix), 물(water), 물에 녹은 것(dis), 모은 더미(piles)
        const simulate = (seq) => {
          const S = { mix: parts.map((p) => p.i), water: false, dis: [], piles: [], idle: [] };
          seq.forEach((k, n) => {
            const take = (f) => { const got = S.mix.filter((i) => f(parts[i])); S.mix = S.mix.filter((i) => !f(parts[i])); return got; };
            let got = [];
            if (k === 'magnet') got = take((p) => p.magnet);
            else if (k === 'sieve') got = take((p) => p.big);
            else if (k === 'float') got = S.water ? take((p) => p.float) : [];
            else if (k === 'water') { if (!S.water) { S.water = true; const d = S.mix.filter((i) => parts[i].dissolve); S.dis = S.dis.concat(d); S.mix = S.mix.filter((i) => !parts[i].dissolve); } else S.idle.push(n); }
            else if (k === 'filter') got = S.water ? take(() => true) : [];
            // 거르지 않고 증발시키면 녹지 않은 것도 접시에 함께 남는다
            else if (k === 'evaporate') { if (S.water) { got = S.dis.concat(S.mix); S.dis = []; S.mix = []; S.water = false; } }
            if (k !== 'water') { if (got.length) S.piles.push({ by: k, parts: got }); else S.idle.push(n); }
          });
          return S;
        };
        // 그릇 안에 남은 것(섞인 것 + 물에 녹은 것)은 한 무리다. 물에 녹아 있는 것은 아직 따로 모은 것이 아니다(증발까지 해야 한다)
        const inCup = (S) => S.mix.concat(S.dis);
        const alone = (S, i) => S.piles.some((p) => p.parts.length === 1 && p.parts[0] === i) || (inCup(S).length === 1 && S.mix[0] === i && !S.dis.length);
        const separated = (S) => S.piles.every((p) => p.parts.length === 1) && (inCup(S).length === 0 || (inCup(S).length === 1 && !S.dis.length));
        const W = 640; const H = 330;
        const st = kit.stage(box, { viewBox: [W, H], label: `섞인 것: ${parts.map((p) => p.name).join(', ')}. 도구를 차례로 골라 나누어요.` });
        bg(st, W, H);
        const G = st.layer('sep');
        kit.el('text', { x: 130, y: 36, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: '#3D352E' }, G).textContent = '섞인 것';
        kit.el('ellipse', { cx: 130, cy: 120, rx: 100, ry: 56, fill: print ? '#fff' : '#FFF6DE', stroke: '#6E530F', 'stroke-width': 3 }, G);
        const waterEl = kit.el('ellipse', { cx: 130, cy: 120, rx: 92, ry: 48, fill: '#BDE0EA', opacity: 0.7, display: 'none' }, G);
        const mixG = kit.el('g', null, G);
        const mixTxt = kit.el('text', { x: 130, y: 200, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#544B42' }, G);
        const pileG = kit.el('g', null, G);
        const legend = kit.el('g', null, G);
        parts.forEach((p, i) => {
          const y = 236 + Math.floor(i / 3) * 26; const x = 30 + (i % 3) * 200;
          kit.el('circle', { cx: x, cy: y - 5, r: 8, fill: print ? '#fff' : PART_COLOR[i], stroke: '#3D352E', 'stroke-width': 1.5 }, legend);
          kit.el('text', { x: x + 14, y, 'font-size': 14, class: 'pk-text', fill: '#3D352E' }, legend).textContent = p.name;
        });
        const dots = (parent, cx, cy, ids, rx, ry, seed) => {
          const rr = rng(seed);
          ids.forEach((i) => { for (let k = 0; k < 7; k++) { const a = rr() * 6.283; const d = Math.sqrt(rr()); kit.el('circle', { cx: cx + Math.cos(a) * d * rx, cy: cy + Math.sin(a) * d * ry, r: parts[i].big ? 7 : 4.5, fill: print ? '#fff' : PART_COLOR[i], stroke: '#3D352E', 'stroke-width': 1 }, parent); } });
        };
        let stepsTxt = null;
        if (panel && !ro) {
          h('p', { class: `${P}-q` }, panel, '쓸 도구를 차례로 누르세요.');
          const row = h('div', { class: `${P}-row` }, panel);
          tools.forEach((k) => button(row, `<i class="fi ${TOOLS[k].icon}" aria-hidden="true"></i> ${TOOLS[k].name}`, TOOLS[k].name, () => { if (steps.length < 8) { steps.push(k); changed(); kit.tick(); kit.announce(`${TOOLS[k].name}`); } }));
          const row2 = h('div', { class: `${P}-row` }, panel);
          button(row2, '<i class="fi fi-rr-undo" aria-hidden="true"></i> 한 단계 되돌리기', '한 단계 되돌리기', () => { if (steps.length) { steps.pop(); changed(); } });
          stepsTxt = h('p', { class: `${P}-steps`, 'aria-live': 'polite' }, panel);
        }
        M.paint = () => {
          const S = simulate(steps);
          while (mixG.firstChild) mixG.removeChild(mixG.firstChild);
          while (pileG.firstChild) pileG.removeChild(pileG.firstChild);
          waterEl.setAttribute('display', S.water ? 'inline' : 'none');
          dots(mixG, 130, 120, S.mix.concat(S.water ? [] : S.dis), 80, 36, 31);
          mixTxt.textContent = S.water ? (S.dis.length ? '물에 녹은 것이 있어요' : '물') : '';
          S.piles.slice(-4).forEach((p, j) => {
            const cx = 300 + (j % 2) * 160 + 60; const cy = 70 + Math.floor(j / 2) * 90;
            kit.el('ellipse', { cx, cy, rx: 62, ry: 26, fill: print ? '#fff' : '#F4F0FA', stroke: '#473B6B', 'stroke-width': 2 }, pileG);
            dots(pileG, cx, cy, p.parts, 44, 14, 50 + j);
            kit.el('text', { x: cx, y: cy + 44, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#473B6B' }, pileG).textContent = TOOLS[p.by].pile;
          });
          if (stepsTxt) stepsTxt.textContent = steps.length ? `한 순서: ${steps.map((k, n) => `${n + 1}. ${TOOLS[k].name}${S.idle.includes(n) ? '(나뉜 것 없음)' : ''}`).join(' → ')}` : '아직 쓴 도구가 없어요.';
        };
        M.state = () => ({ steps: steps.slice() });
        M.set = (s) => { if (Array.isArray(s.steps)) steps = s.steps.filter((k) => TOOLS[k] && tools.includes(k)).slice(0, 8); };
        const find = (ok) => {
          let q = [[]];
          for (let d = 0; d <= 6; d++) {
            for (const seq of q) if (ok(simulate(seq), seq)) return seq;
            const nx = []; for (const seq of q) for (const k of tools) if (seq[seq.length - 1] !== k) nx.push(seq.concat(k)); q = nx.slice(0, 4000);
          }
          return null;
        };
        const gotOk = (S, name) => { const i = parts.findIndex((p) => p.name === name); return i >= 0 && alone(S, i); };
        M.judge = (t) => {
          const S = simulate(steps);
          if ((t.separated || t.got != null || t.steps) && !steps.length) return { correct: false, incomplete: true, feedback: '도구를 골라 섞인 것을 나누어 봐요.' };
          if (t.steps && t.steps.join() !== steps.join()) return { correct: false, feedback: '도구를 쓴 순서가 달라요.', hint: '먼저 쓴 도구가 다음 도구가 할 일을 바꾸지 않는지 생각해요.', h3: `순서: ${t.steps.map((k) => TOOLS[k] ? TOOLS[k].name : k).join(' → ')}` };
          if (t.got != null && !gotOk(S, t.got)) { const sol = find((x) => gotOk(x, t.got)); return { correct: false, feedback: `${josa(t.got, '이', '가')} 아직 따로 모이지 않았어요.`, hint: `${josa(t.got, '이', '가')} 다른 것과 다른 성질(자석에 붙음, 알갱이 크기, 물에 녹음, 물에 뜸)이 무엇인지 생각해요.`, h3: sol ? `이렇게 해 보세요: ${sol.map((k) => TOOLS[k].name).join(' → ')}` : '성질 하나로 하나씩 떼어 내요.' }; }
          if (t.separated && !separated(S)) {
            const mixed = S.piles.map((p) => p.parts).concat([inCup(S)]).find((g) => g.length > 1);
            const sol = find((x) => separated(x));
            return { correct: false, feedback: mixed ? `아직 함께 섞여 있는 것이 있어요: ${mixed.map((i) => parts[i].name).join(', ')}.` : `${josa(parts[S.dis[0]].name, '이', '가')} 아직 물에 녹아 있어요. 녹은 것을 다시 얻는 방법을 생각해요.`, hint: '섞인 것들이 서로 어떤 성질이 다른지 찾아, 그 성질을 쓰는 도구를 골라요.', h3: sol ? `이렇게 해 보세요: ${sol.map((k) => TOOLS[k].name).join(' → ')}` : '성질 하나로 하나씩 떼어 내요.' };
          }
          return null;
        };
        M.solve = (t) => {
          if (t.steps) { steps = t.steps.slice(); return; }
          const sol = find((x) => (!t.separated || separated(x)) && (t.got == null || gotOk(x, t.got)));
          if (sol) steps = sol;
        };
        // 흔한 실수: 물에 녹은 것을 거름종이로 걸러 내려 하고 증발을 빠뜨린다(풀이의 마지막 단계를 빼거나 바꾼다)
        M.wrong = (t) => {
          const sol = t.steps ? t.steps.slice() : find((x) => (!t.separated || separated(x)) && (t.got == null || gotOk(x, t.got)));
          if (!sol || !sol.length) return null;
          const bad = (seq) => seq.length && !(t.steps ? seq.join() === t.steps.join() : (!t.separated || separated(simulate(seq))) && (t.got == null || gotOk(simulate(seq), t.got)));
          const tries = [sol.slice(0, -1), sol.slice(1), sol.slice().reverse(), sol.concat(sol[0])];
          const w = tries.find(bad);
          return w ? { steps: w } : null;
        };
        M.hint1 = () => '섞인 것마다 다른 성질(자석에 붙는가, 알갱이가 큰가, 물에 녹는가, 물에 뜨는가)을 먼저 정리한 뒤 도구를 골라요.';
        M.dist = (a, b) => { const x = a.steps || []; const y = b.steps || []; let i = 0; while (i < x.length && i < y.length && x[i] === y[i]) i++; return x.length - i + (y.length - i); };
      }

      // ---------- 묻기 칸 ----------
      if (panel) {
        ask = askPanel(panel, o, () => log());
        if (panel.childNodes.length) box.appendChild(panel);
      }
      const state = () => Object.assign(M.state(), (o.ask ? { pick: ask.pick } : {}), (o.askNum ? { num: ask.num } : {}));
      log = () => kit.recorder.log('matter', state());
      const setState = (s) => { s = s || {}; M.set(s); ask.set(s); revealed = false; M.paint(); };
      const start = state();
      M.paint();
      function judge(t) {
        t = t || {};
        const r = M.judge(t); if (r) return r;
        const a = judgeAsk(t, state(), o); if (a) return a;
        return { correct: true, feedback: '맞아요!' };
      }
      return {
        getState: state,
        setState,
        reset() { setState(JSON.parse(JSON.stringify(start))); },
        check(t, opts) {
          const r = judge(t);
          if (!(opts && opts.forHint) && r.correct) { revealed = true; M.paint(); }
          delete r.h3; return r;
        },
        // 교사 시연: 잠깐 기다렸다가 목표 상태로 맞춘다
        demo(t) { return kit.wait(350).then(() => this.solve(t)); },
        solve(t) { t = t || {}; M.solve(t); const s = {}; if (t.pick != null) s.pick = t.pick; if (t.num != null) s.num = t.num; ask.set(s); revealed = false; M.paint(); log(); },
        hint(t, opts) {
          t = t || {};
          const r = judge(t); const lv = hintLevel(opts);
          const onlyAsk = Object.keys(t).every((k) => k === 'pick' || k === 'num');
          const h1 = onlyAsk ? '입자의 배열과 움직임, 또는 물질의 성질을 하나씩 살펴본 뒤 답해요.' : M.hint1(t);
          if (r.correct) return { hint: h1, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: h1, correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        wrongAnswer(t) {
          t = t || {};
          const keep = JSON.stringify(state());
          let s = M.wrong(t);
          if (s == null && (t.pick != null || t.num != null)) {
            M.solve(t); s = M.state();
            if (t.pick != null) s.pick = (t.pick + 1) % Math.max(2, ((o.ask && o.ask.choices) || []).length);
            if (t.num != null) s.num = t.num + 1;
          } else if (s != null) {
            if (t.pick != null) s.pick = t.pick;
            if (t.num != null) s.num = t.num;
          }
          setState(JSON.parse(keep));
          return s ? Object.assign({}, o.ask ? { pick: null } : {}, o.askNum ? { num: null } : {}, s) : null;
        },
        distance(a, b) {
          let d = M.dist(a || {}, b || {});
          if ((a || {}).pick !== (b || {}).pick) d += 1;
          if ((a || {}).num !== (b || {}).num) d += Math.abs(((a || {}).num || 0) - ((b || {}).num || 0)) > 1 ? 2 : 1;
          return d;
        },
      };
    },
  });
})(window.PaperKit);
