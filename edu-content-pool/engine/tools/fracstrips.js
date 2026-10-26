/* 분수 띠 견주기 — 위 띠(잠김)와 아래 띠를 나란히 놓고 색칠한 끝이 같은 자리에서 끝나는지 본다.
 * 끝이 맞으면 '크기가 같아요' 선이 위 띠에서 아래 띠로 내려온다. 약분 모드에서는 분모와 분자를 나눌 수를 고르고 결과를 쓴다.
 * 옵션: top([분자, 분모] 위 띠), start({num, den} 아래 띠 처음), mode('make'|'divide'), maxDen(아래 띠 조각 수 한계, 기본 12),
 *       divisors(약분 모드 나눌 수 단추, 기본 [2,3,4,5,6]), showMarks(쉬움: 위 띠 자른 금을 아래로 이어 그림),
 *       showEqual(끝이 맞으면 바로 선을 보임 — revealAfterCheck보다 앞섬), markCommon(쉬움: 공약수 단추에 점 표시),
 *       hideStrip(도전 약분: 아래 띠를 확인 뒤에만 그림), noCuts(도전: 위 띠의 자른 금을 숨김), revealAfterCheck, ask({q, choices[], why?[]}), print
 * 상태: make { num, den } / divide { div, num, den } (+ pick)
 * target: { equalTo:[n,d], den?, smallest? } | { reduce:[a,b], div?, lowest? } | { ask }
 */
(function (K) {
  'use strict';
  const RM = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  // 분수 'n/d'는 'd분의 n'으로 읽으므로 분자 끝소리로 조사를 고른다
  const josa = (w, a, b) => { const c = String(w).split('/')[0].slice(-1); const has = '013678'.includes(c); return `${w}${has ? a : b}`; }; // 숫자 끝소리: 0(영)1(일)3(삼)6(육)7(칠)8(팔)
  const fr = (n, d) => `${n}/${d}`;
  const ro = (n) => `${n}${'036'.includes(String(n).slice(-1)) ? '으로' : '로'}`; // 삼으로·육으로·십으로, 이로·사로
  const eul = (n) => josa(n, '을', '를');
  // 힌트 단계(플레이어가 { level, attempts }를 준다): 1 개념·전략만(문항의 수·자리·이름 없음), 2 틀린 단계 짚기, 3 풀이 한 단계.
  // 시도 수보다 높은 단계는 주지 않는다 — 시도 0 → 1단계, 1 → 2단계까지, 2 이상 → 3단계까지
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };

  K.registerTool('fracstrips', {
    name: '분수 띠 견주기',
    create(box, o, kit) {
      const divide = o.mode === 'divide';
      const print = !!o.print;
      const narrow = !print && box.clientWidth > 0 && box.clientWidth < 460;
      const W = narrow ? 360 : 520; const SX0 = narrow ? 70 : 96; const SX1 = W - 18; const SW = SX1 - SX0;
      const TY = 30; const BY = 146; const SH = 46; const H = print ? 214 : 226;
      const [tn, td] = o.top || [1, 2];
      const maxDen = o.maxDen || (divide ? Math.max(24, td) : 12);
      const st = kit.stage(box, { viewBox: [W, H], label: `분수 띠 두 개. 위 띠는 ${td}조각 가운데 ${tn}조각을 색칠했어요. 아래 띠의 조각 수와 색칠한 조각을 바꿔 크기를 견주어 보세요.` });
      kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 14 }, color: 'cream', fill: '#FBF6EA', depth: 2, texture: true });

      // ---- 분수 글자(분자 / 가로줄 / 분모) ----
      const LX = SX0 / 2;
      const fracText = (y, color) => {
        const g = kit.el('g', { 'pointer-events': 'none' }, st.layer('labels'));
        const n = kit.el('text', { x: LX, y: y + 18, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: color }, g);
        kit.el('rect', { x: LX - 16, y: y + 24, width: 32, height: 2.4, fill: color }, g);
        const d = kit.el('text', { x: LX, y: y + 46, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: color }, g);
        return { set(a, b) { n.textContent = a == null ? '□' : String(a); d.textContent = b == null ? '□' : String(b); } };
      };

      // ---- 띠 ----
      const stripL = st.layer('strips');
      const topG = kit.el('g', { 'aria-label': `위 띠 ${fr(tn, td)}` }, stripL);
      const pw = SW / td;
      for (let i = 0; i < td; i++) kit.piece(st, topG, { shape: { type: 'rect', x: SX0 + i * pw, y: TY, w: pw, h: SH, rx: o.noCuts ? 0 : 4 }, color: i < tn ? 'sky' : 'cream', depth: 1, strokeWidth: o.noCuts ? 0 : 1, stroke: o.noCuts ? 'none' : undefined });
      // 인쇄에서는 종이 조각(.pk-face)이 흰색으로 바뀌므로 색칠한 칸을 회색 칸으로 덧그린다
      if (print) kit.el('rect', { x: SX0, y: TY, width: pw * tn, height: SH, fill: '#BDBDBD', 'pointer-events': 'none' }, topG);
      kit.el('rect', { x: SX0, y: TY, width: SW, height: SH, rx: 4, fill: 'none', stroke: '#204C5A', 'stroke-width': 1.6, 'pointer-events': 'none' }, topG);
      if (o.noCuts) { /* 도전: 금을 숨기고 겉 테두리만 */ } else for (let i = 1; i < td; i++) kit.el('line', { x1: SX0 + i * pw, y1: TY, x2: SX0 + i * pw, y2: TY + SH, stroke: '#204C5A', 'stroke-width': 1.2, 'pointer-events': 'none' }, topG);
      fracText(TY - 2, '#204C5A').set(tn, td);
      if (o.showMarks) for (let i = 1; i < td; i++) kit.el('line', { x1: SX0 + i * pw, y1: TY + SH, x2: SX0 + i * pw, y2: BY + SH, stroke: '#9DB8C2', 'stroke-width': 1, 'stroke-dasharray': '3 4', 'pointer-events': 'none' }, st.layer('back'));

      // 아래 띠: 조각 수마다 한 벌씩 처음 쓸 때 만들어 두고 보이기만 바꾼다(움직임은 transform만)
      const botWrap = kit.el('g', null, stripL);
      const sets = {};
      const setOf = (d) => {
        if (sets[d]) return sets[d];
        const g = kit.el('g', { display: 'none' }, botWrap); const w = SW / d; const items = [];
        for (let i = 0; i < d; i++) {
          const pg = kit.el('g', { class: 'fs-piece' }, g);
          kit.el('rect', { x: SX0 + i * w, y: BY - 4, width: w, height: SH + 8, class: 'pk-hit' }, pg);
          const p = kit.piece(st, pg, { shape: { type: 'rect', x: SX0 + i * w, y: BY, w, h: SH, rx: 4 }, color: 'cream', depth: 1 });
          if (!print) pg.addEventListener('click', () => { if (divide) return; setNum(num === i + 1 ? i : i + 1, true); });
          items.push(p);
        }
        kit.el('rect', { x: SX0, y: BY, width: SW, height: SH, rx: 4, fill: 'none', stroke: '#702830', 'stroke-width': 1.6, 'pointer-events': 'none' }, g);
        for (let i = 1; i < d; i++) kit.el('line', { x1: SX0 + i * w, y1: BY, x2: SX0 + i * w, y2: BY + SH, stroke: '#702830', 'stroke-width': 1.2, 'pointer-events': 'none' }, g);
        return (sets[d] = { g, items });
      };
      const botLabel = fracText(BY - 2, '#702830');
      const emptyStrip = kit.el('g', { display: 'none', 'pointer-events': 'none' }, stripL);
      kit.el('rect', { x: SX0, y: BY, width: SW, height: SH, rx: 4, fill: '#FFFFFF', stroke: '#B8A6A0', 'stroke-width': 1.4, 'stroke-dasharray': '5 4' }, emptyStrip);
      const emptyTxt = kit.el('text', { x: SX0 + SW / 2, y: BY + SH / 2 + 5, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#8C7F76' }, emptyStrip);

      // ---- '크기가 같아요' 선 ----
      const guideG = kit.el('g', { 'pointer-events': 'none', display: 'none' }, st.layer('guide'));
      const gx = SX0 + (SW * tn) / td;
      const drop = kit.el('g', null, guideG);
      kit.el('rect', { x: -1.6, y: 0, width: 3.2, height: 1, fill: '#275C46' }, drop);
      kit.transform(drop, { x: gx, y: TY + SH, sy: BY - TY - SH });
      const eqTag = kit.el('g', null, guideG);
      kit.piece(st, eqTag, { shape: { type: 'rect', x: -56, y: -14, w: 112, h: 28, rx: 14 }, color: 'mint', depth: 1 });
      kit.el('text', { x: 0, y: 5, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#173A2C' }, eqTag).textContent = '크기가 같아요';
      kit.transform(eqTag, { x: Math.min(SX1 - 58, Math.max(SX0 + 58, gx)), y: (TY + SH + BY) / 2 });
      const divTxt = kit.el('text', { x: SX0, y: (TY + SH + BY) / 2 + 5, 'font-size': 15, class: 'pk-text', fill: '#473B6B', 'pointer-events': 'none' }, st.layer('guide'));

      let num = divide ? null : 0; let den = divide ? null : 1; let div = null; let pick = null; let checked = false; let shownDen = null;
      if (o.start) { if (o.start.num != null) num = o.start.num; if (o.start.den != null) den = o.start.den; }
      const valid = () => Number.isInteger(den) && den >= 1 && den <= maxDen && Number.isInteger(num) && num >= 0 && num <= den;
      const equal = () => valid() && num * td === tn * den;
      let eqShown = false;
      function paint(animate) {
        // 아래 띠
        if (shownDen && sets[shownDen]) sets[shownDen].g.setAttribute('display', 'none');
        const hide = divide && o.hideStrip && !checked;
        if (valid() && !hide) {
          const s = setOf(den); s.g.setAttribute('display', 'inline'); shownDen = den;
          s.items.forEach((p, i) => p.setColor(i < num && !print ? 'peach' : 'cream'));
          emptyStrip.setAttribute('display', 'none');
        } else {
          shownDen = null; emptyStrip.setAttribute('display', 'inline');
          emptyTxt.textContent = hide ? '확인을 누르면 띠로 보여 줘요' : divide ? '분모와 분자를 쓰면 띠로 보여 줘요' : '';
        }
        botLabel.set(print ? null : num, print && o.start && o.start.den ? o.start.den : den);
        divTxt.textContent = divide && !print ? (div ? `분모와 분자를 ÷ ${div}` : '나눌 수를 골라요') : '';
        const live = o.showEqual === true || (!o.revealAfterCheck && !divide) || checked;
        const on = !print && equal() && live && !(divide && hide);
        guideG.setAttribute('display', on ? 'inline' : 'none');
        if (on && !eqShown && animate && !RM) kit.tween(420, (p) => kit.transform(drop, { sy: Math.max(0.01, (BY - TY - SH) * p) }));
        else if (on) kit.transform(drop, { sy: BY - TY - SH });
        divTxt.setAttribute('display', on ? 'none' : 'inline');
        eqShown = on;
        paintCtl();
      }

      // ---- 조작 칸(HTML 단추: 키보드·터치 그대로, 44px) ----
      const ctl = { };
      // 단추는 tabindex를 적어 둔다 — 교구 안 조작 칸을 [tabindex="0"]로 찾는 자동 검사·모의 수업이 같은 단추를 누르게
      const mk = (tag, css, txt) => { const e = document.createElement(tag); if (css) e.style.cssText = css; if (txt != null) e.textContent = txt; if (tag === 'button' || tag === 'input') e.setAttribute('tabindex', '0'); return e; };
      const BTN = 'min-width:48px;min-height:48px;font-size:20px;line-height:1;padding:0 10px';
      if (!print) {
        const wrap = mk('div', 'margin-top:10px;display:grid;gap:8px'); wrap.className = 'fs-ctl';
        const stepper = (label, get, setter) => {
          const row = mk('div', 'display:flex;align-items:center;gap:8px;flex-wrap:wrap'); row.setAttribute('role', 'group'); row.setAttribute('aria-label', label);
          const l = mk('span', 'font-weight:700;min-width:7.5em', label);
          const minus = mk('button', BTN, '−'); minus.type = 'button'; minus.className = 'pl-btn pl-btn--small'; minus.setAttribute('aria-label', `${label} 하나 줄이기`);
          const val = mk('span', 'min-width:2.2em;text-align:center;font-size:20px;font-weight:700'); val.setAttribute('aria-live', 'polite');
          const plus = mk('button', BTN, '+'); plus.type = 'button'; plus.className = 'pl-btn pl-btn--small'; plus.setAttribute('aria-label', `${label} 하나 늘리기`);
          minus.addEventListener('click', () => setter(get() - 1));
          plus.addEventListener('click', () => setter(get() + 1));
          row.append(l, minus, val, plus); wrap.appendChild(row);
          return { val, minus, plus };
        };
        if (divide) {
          const row = mk('div', 'display:grid;gap:6px');
          const q = mk('p', 'margin:0;font-weight:700', `${fr(tn, td)}의 분모와 분자를 어떤 수로 나눌까요?`); q.id = `fs-q-${Math.random().toString(36).slice(2, 8)}`;
          const chips = mk('div', 'display:flex;gap:8px;flex-wrap:wrap'); chips.setAttribute('role', 'radiogroup'); chips.setAttribute('aria-labelledby', q.id);
          ctl.chips = (o.divisors || [2, 3, 4, 5, 6]).map((k) => {
            const b = mk('button', BTN, `÷ ${k}`); b.type = 'button'; b.className = 'pl-btn pl-btn--small';
            b.setAttribute('role', 'radio'); b.dataset.div = k;
            if (o.markCommon && td % k === 0 && tn % k === 0) { b.title = '공약수'; b.textContent = `÷ ${k} •`; b.setAttribute('aria-label', `${ro(k)} 나누기, 공약수`); } else b.setAttribute('aria-label', `${ro(k)} 나누기`);
            b.addEventListener('click', () => { div = k; checked = false; kit.tick(); paint(); kit.recorder.log('fracstrips', state()); kit.announce(`분모와 분자를 ${ro(k)} 나누기로 했어요`); });
            chips.appendChild(b); return b;
          });
          ctl.chips.forEach((b, i, all) => b.addEventListener('keydown', (e) => { const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]; if (!step) return; e.preventDefault(); const nb = all[(i + step + all.length) % all.length]; nb.focus(); nb.click(); }));
          row.append(q, chips); wrap.appendChild(row);
          const res = mk('div', 'display:flex;align-items:center;gap:8px;flex-wrap:wrap');
          const inp = (label) => { const i = mk('input', 'width:4.2em;min-height:48px;font-size:20px;text-align:center;border-radius:10px;border:2px solid #CDBFA8'); i.type = 'text'; i.inputMode = 'numeric'; i.maxLength = 3; i.setAttribute('aria-label', label); i.autocomplete = 'off'; return i; };
          ctl.n = inp('약분한 분수의 분자'); ctl.d = inp('약분한 분수의 분모');
          const read = () => { const v = (x) => (x.value.trim() === '' ? null : Number(x.value.replace(/\D/g, '')) || 0); num = v(ctl.n); den = v(ctl.d); checked = false; paint(true); };
          [ctl.n, ctl.d].forEach((x) => { x.addEventListener('input', read); x.addEventListener('change', () => kit.recorder.log('fracstrips', state())); });
          res.append(mk('span', 'font-weight:700', '약분한 분수: 분자'), ctl.n, mk('span', 'font-weight:700', '분모'), ctl.d);
          wrap.appendChild(res);
        } else {
          ctl.den = stepper('조각 수(분모)', () => den, (v) => setDen(v));
          ctl.num = stepper('색칠한 조각(분자)', () => num, (v) => setNum(v, true));
        }
        ctl.wrap = wrap; box.appendChild(wrap);
      }
      function paintCtl() {
        if (print || !ctl.wrap) return;
        if (divide) {
          ctl.chips.forEach((b) => { const on = Number(b.dataset.div) === div; b.setAttribute('aria-checked', String(on)); b.style.background = on ? 'var(--pc-peach-light, #FBE3D6)' : ''; b.style.boxShadow = on ? '0 0 0 3px var(--pc-peach-layer, #E9A383)' : ''; });
          const show = (x, v) => { const s = v == null ? '' : String(v); if (x.value !== s && document.activeElement !== x) x.value = s; };
          show(ctl.n, num); show(ctl.d, den);
        } else {
          ctl.den.val.textContent = String(den); ctl.num.val.textContent = String(num);
          ctl.den.minus.disabled = den <= 1; ctl.den.plus.disabled = den >= maxDen;
          ctl.num.minus.disabled = num <= 0; ctl.num.plus.disabled = num >= den;
        }
      }
      function setDen(v) {
        v = Math.max(1, Math.min(maxDen, v)); if (v === den) return;
        // 조각 수를 바꿔도 색칠한 양(끝 자리)은 되도록 그대로 둔다 — 조각 수만 바꾸면 크기가 달라지는 것을 보게
        den = v; num = Math.min(num, den); checked = false; kit.tick(); paint(true);
        kit.recorder.log('fracstrips', state()); kit.announce(`아래 띠를 ${den}조각으로 나눴어요. 색칠한 조각 ${num}개`);
      }
      function setNum(v, say) {
        v = Math.max(0, Math.min(den, v)); if (v === num) return;
        num = v; checked = false; kit.tick(); paint(true);
        if (say) { kit.recorder.log('fracstrips', state()); kit.announce(`${den}조각 가운데 ${num}조각을 색칠했어요${equal() && (o.showEqual === true || !o.revealAfterCheck) ? '. 위 띠와 크기가 같아요' : ''}`); }
      }

      // ---- 고르기 칸 ----
      let askBtns = [];
      const askOpt = o.ask && Array.isArray(o.ask.choices) && !print ? o.ask : null;
      if (askOpt) {
        const wrap = mk('div', 'margin-top:10px;display:grid;gap:8px');
        const q = mk('p', 'margin:0;font-weight:700;line-height:1.45;word-break:keep-all', askOpt.q); q.id = `fs-ask-${Math.random().toString(36).slice(2, 8)}`;
        const row = mk('div', 'display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:8px'); row.setAttribute('role', 'radiogroup'); row.setAttribute('aria-labelledby', q.id);
        askBtns = askOpt.choices.map((text, i) => {
          const b = mk('button', 'white-space:normal;line-height:1.35;word-break:keep-all;min-height:44px', text); b.type = 'button'; b.className = 'pl-btn pl-btn--small';
          b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false');
          b.addEventListener('click', () => { setPick(i); kit.tick(); kit.recorder.log('fracstrips', state()); });
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
        const s = divide ? { div, num, den } : { num, den };
        if (askOpt) s.pick = pick;
        return s;
      }
      const start = { num, den };
      function setState(s) {
        s = s || {};
        if ('num' in s) num = s.num; if ('den' in s) den = s.den; if ('div' in s) div = s.div;
        if (askOpt && 'pick' in s) setPick(s.pick);
        checked = false; paint(false);
      }
      paint(false);

      // 같은 크기의 분수 가운데 분모를 고른다: 지정 > 가장 작은 것 > 위 띠와 다른 것 중 한계 안에서 가장 작은 것
      const pickDen = (n, d, t) => {
        if (t.den) return t.den;
        const g = gcd(n, d);
        if (t.smallest) return d / g;
        for (let k = d / g; k <= maxDen; k += d / g) if (k !== d) return k;
        return d;
      };
      // 채점만 한다(화면은 바꾸지 않는다) — 확인·힌트·오답 만들기가 함께 쓴다
      function judge(t) {
        t = t || {};
        const done = (fb) => ({ correct: true, feedback: fb });
        // keep: 아직 볼 것이 없는 틀림(조각 수부터 다름) — 확인해도 띠·선을 켜지 않는다
        // no(첫 피드백, 2단계 힌트(틀린 단계 짚기), 3단계 힌트(풀이 한 단계), keep)
        const no = (feedback, h2, h3, keep) => (keep ? { correct: false, feedback, hint: h2, h3, keep: true } : { correct: false, feedback, hint: h2, h3 });
        if (t.equalTo) {
          const [n, d] = t.equalTo;
          const k = t.den;
          if (k && den !== k) return no(`이번에는 아래 띠를 ${k}조각으로 나누어야 해요.`, `'조각 수(분모)' 단추로 ${k}조각을 만들어요.`, `'조각 수(분모)' 단추로 ${k}조각을 만들어요.`, true);
          if (num === 0) return { correct: false, incomplete: true, feedback: '아래 띠에 색칠한 조각이 없어요. 조각을 눌러 색칠해요.' };
          const same = num * d === n * den;
          // 2단계는 틀린 단계(분모에 한 계산)만 짚고, 곱하거나 나눈 수와 답은 3단계에만 넣는다
          const step2 = `분모가 ${d}에서 ${den}이 되었어요. 몇을 곱했는지(몇으로 나누었는지) 먼저 찾고, 분자에도 같은 계산을 해요.`;
          const step3 = d % den === 0 ? `분모 ${d} ÷ ${d / den} = ${den}이니, 분자도 ${n} ÷ ${d / den} = ${(n * den) / d}이에요.`
            : den % d === 0 ? `분모 ${d} × ${den / d} = ${den}이니, 분자도 ${n} × ${den / d} = ${(n * den) / d}이에요.`
              : '위 띠의 색칠한 끝과 아래 띠의 색칠한 끝이 같은 자리가 되게 해요.';
          if (!same) {
            if (num === n && den !== d) return no('조각 수(분모)만 바꾸고 색칠한 조각(분자)은 그대로 두었어요. 분모를 바꾸면 한 조각의 크기가 달라져요.', step2, step3);
            if ((n * den) % d !== 0) return no(`${den}조각으로는 색칠한 끝을 위 띠와 맞출 수 없어요.`, `${d}의 약수나 배수로 조각 수를 바꿔 봐요.`, `${d}의 약수나 배수로 조각 수를 바꿔 봐요.`);
            // 오개념: 분모에 더한(뺀) 수를 분자에도 더한다(뺀다)
            if (num - n === den - d) return no('분모와 분자에 같은 수를 더했거나 뺐어요. 더하거나 빼면 크기가 달라져요. 곱하거나 나눠야 해요.', step2, step3);
            // 방향(왼쪽·오른쪽)은 말하지 않는다 — 한 칸씩 바꿔 가며 확인으로 맞추지 않게
            return no('색칠한 끝이 위 띠와 같은 자리에서 끝나지 않아요. 분모와 분자를 똑같이 바꾸었는지 살펴봐요.', step2, step3);
          }
          if (den === d && !t.allowSame) return no('위 띠와 똑같은 분수예요. 조각 수를 바꿔서 크기가 같은 다른 분수를 만들어 봐요.', '조각 수(분모)를 늘리거나 줄여 보세요.', '조각 수(분모)를 늘리거나 줄여 보세요.');
          if (t.smallest && den !== d / gcd(n, d)) return no(`크기는 같아요! 그런데 분모가 더 작은 분수가 있어요. ${josa(num, '과', '와')} ${eul(den)} 더 나눌 수 있을까요?`, '분모와 분자를 둘 다 나누어떨어지게 하는 수로 나눠 봐요.', `${josa(n, '과', '와')} ${eul(d)} 둘 다 나누어떨어지게 하는 가장 큰 수는 ${gcd(n, d)}이에요.`);
          if (askOpt && Number.isInteger(t.ask) && pick !== t.ask) { if (pick == null) return { correct: false, incomplete: true, feedback: '띠는 맞아요. 이제 아래에서 답을 골라요.' }; return no((askOpt.why && askOpt.why[pick]) || '다시 생각해 볼까요?', askOpt.hint, askOpt.hint); }
          const how = den < d ? `분모와 분자를 똑같이 ${ro(d / den)} 나누었어요` : `분모와 분자에 똑같이 ${eul(den / d)} 곱했어요`;
          return done(`맞아요! ${josa(fr(n, d), '과', '와')} ${josa(fr(num, den), '은', '는')} 크기가 같아요. ${Number.isInteger(d / den) || Number.isInteger(den / d) ? how : '색칠한 끝이 같은 자리에서 끝나요'}.`);
        }
        if (t.reduce) {
          const [a, b] = t.reduce;
          if (div == null) return { correct: false, incomplete: true, feedback: '먼저 분모와 분자를 나눌 수를 골라요.' };
          if (num == null || den == null) return { correct: false, incomplete: true, feedback: '약분한 분수의 분자와 분모를 모두 써요.' };
          const g0 = gcd(a, b);
          const commons = []; for (let k = 2; k <= g0; k++) if (a % k === 0 && b % k === 0) commons.push(k);
          if (a % div || b % div) return no(`${ro(div)}는 ${josa(a, '과', '와')} ${eul(b)} 모두 나누어떨어지게 할 수 없어요. 분모와 분자의 공약수로 나눠요.`, `${josa(a, '과', '와')} ${b}의 약수를 각각 써 보고 둘 다에 있는 수를 찾아요.`, `${josa(a, '과', '와')} ${b}의 공약수(1 말고)는 ${commons.join(', ')}이에요.`);
          if (t.div && div !== t.div) return no(`이번에는 ${ro(t.div)} 나누어 약분해요.`, `'÷ ${t.div}' 단추를 골라요.`, `'÷ ${t.div}' 단추를 골라요.`);
          const ea = a / div; const eb = b / div;
          if (num === a && den === eb) return no('분모만 나누고 분자는 그대로 두었어요. 분모와 분자는 꼭 같은 수로 나눠요.', `분자 ${a}도 고른 수 ${ro(div)} 나누어 보세요.`, `${a} ÷ ${div} = ${ea}, ${b} ÷ ${div} = ${eb}`);
          if (num === ea && den === b) return no('분자만 나누고 분모는 그대로 두었어요. 분모와 분자는 꼭 같은 수로 나눠요.', `분모 ${b}도 고른 수 ${ro(div)} 나누어 보세요.`, `${a} ÷ ${div} = ${ea}, ${b} ÷ ${div} = ${eb}`);
          if (den === eb && num !== ea) return no('분모는 맞게 나누었는데 분자의 나눗셈이 달라요. 분자의 계산을 다시 해 봐요.', '분모와 분자는 꼭 같은 수로 나눠요.', `${a} ÷ ${div} = ${ea}`);
          if (num === ea && den !== eb) return no('분자는 맞게 나누었는데 분모의 나눗셈이 달라요. 분모의 계산을 다시 해 봐요.', '분모와 분자는 꼭 같은 수로 나눠요.', `${b} ÷ ${div} = ${eb}`);
          const same = num * b === a * den;
          if (!same) return no(`${josa(fr(num, den), '은', '는')} ${josa(fr(a, b), '과', '와')} 크기가 달라요. 분모와 분자를 같은 수로 나누었는지 살펴봐요.`, `분모와 분자를 모두 고른 수 ${ro(div)} 나눠요.`, `${a} ÷ ${div} = ${ea}, ${b} ÷ ${div} = ${eb}`);
          if (t.lowest) {
            const g = gcd(num, den);
            // 한 번 약분하고 멈추는 오개념 — 더 나눌 수는 3단계 힌트에만
            if (g > 1) return no(`크기는 같아요! 그런데 ${fr(num, den)}은 아직 더 약분할 수 있어요. 기약분수는 분모와 분자의 공약수가 1뿐인 분수예요.`, `${josa(num, '과', '와')} ${eul(den)} 둘 다 나누어떨어지게 하는 수가 아직 있는지 찾아요. 처음부터 가장 큰 공약수로 나누면 한 번에 끝나요.`, `${josa(a, '과', '와')} ${b}의 최대공약수는 ${g0}이에요. ${a} ÷ ${g0} = ${a / g0}, ${b} ÷ ${g0} = ${b / g0}`);
          } else if (den !== eb) return no(`크기는 같지만 ${ro(div)} 나눈 결과가 아니에요. ${fr(a, b)}의 분모와 분자를 ${ro(div)} 나눠요.`, `분모와 분자를 모두 ${ro(div)} 나눠요.`, `${a} ÷ ${div}, ${b} ÷ ${div}`);
          if (askOpt && Number.isInteger(t.ask) && pick !== t.ask) { if (pick == null) return { correct: false, incomplete: true, feedback: '약분은 맞아요. 이제 아래에서 답을 골라요.' }; return no((askOpt.why && askOpt.why[pick]) || '다시 생각해 볼까요?', askOpt.hint, askOpt.hint); }
          return done(`맞아요! ${fr(a, b)}의 분모와 분자를 ${ro(div)} 나누면 ${fr(num, den)}${t.lowest && gcd(num, den) === 1 ? '이고, 더 약분할 수 없는 기약분수예요' : '예요'}.`);
        }
        if (askOpt && Number.isInteger(t.ask)) {
          if (pick == null) return { correct: false, incomplete: true, feedback: '아래에서 답을 하나 골라요.' };
          if (pick !== t.ask) return no((askOpt.why && askOpt.why[pick]) || '다시 생각해 볼까요?', askOpt.hint, askOpt.hint);
          return done('맞아요!');
        }
        return { correct: false, feedback: '확인할 문제가 없어요.' };
      }

      return {
        getState: state,
        setState,
        reset() { div = null; setState({ num: start.num, den: start.den, pick: null }); if (ctl.n) { ctl.n.value = ''; ctl.d.value = ''; } },
        solve(t) {
          t = t || {};
          const s = {};
          if (t.equalTo) { const [n, d] = t.equalTo; const k = pickDen(n, d, t); s.den = k; s.num = (n * k) / d; }
          if (t.reduce) {
            const [a, b] = t.reduce; const g = gcd(a, b);
            const k = t.div || (t.lowest ? g : (o.divisors || [2, 3, 4, 5, 6]).find((x) => a % x === 0 && b % x === 0) || g);
            s.div = k; s.num = t.lowest ? a / g : a / k; s.den = t.lowest ? b / g : b / k;
          }
          if (askOpt && Number.isInteger(t.ask)) s.pick = t.ask;
          setState(s);
        },
        check(t, opts) {
          const r = judge(t || {});
          const keep = r.keep; delete r.keep; delete r.h3;
          // 확인 뒤 보임(크기가 같아요 선·약분 띠): revealAfterCheck면 맞힌 확인에서만, 아니면 틀린 확인에서도 보여 견주게 한다
          if (!(opts && opts.forHint) && !r.incomplete && (r.correct || (!o.revealAfterCheck && !keep))) { checked = true; paint(true); }
          return r;
        },
        // 힌트 3단계: 1 개념·전략(문항의 수 없음) / 2 틀린 단계 짚기(답은 아님) / 3 풀이 한 단계
        hint(t, opts) {
          t = t || {};
          const r = judge(t);
          const why = t.reduce ? '분모와 분자를 같은 수로 나누면 조각을 묶어 크게 만든 것이라 크기는 그대로예요. 둘 다 나누어떨어지는 수(공약수)로 나눠요.'
            : t.equalTo ? '분모와 분자에 같은 수를 곱하거나 같은 수로 나누면 크기가 같아요. 같은 수를 더하거나 빼면 크기가 달라져요.'
              : '두 띠의 색칠한 끝이 같은 자리에서 끝나면 크기가 같은 분수예요.';
          const lv = hintLevel(opts);
          if (r.correct) return { hint: why, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: why, correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        wrongAnswer(t) {
          t = t || {};
          const pickWrong = () => askBtns.findIndex((_, i) => i !== t.ask);
          if (t.equalTo) {
            const [n, d] = t.equalTo; const k = pickDen(n, d, t); const good = (n * k) / d;
            // 오개념: 분모에 더한(뺀) 수를 분자에도 똑같이 더한다(뺀다) — 1/2 → 3/4
            let nn = n + (k - d);
            if (!(nn >= 1 && nn <= k) || nn * d === n * k) nn = n <= k && n !== good ? n : (good + 1 <= k ? good + 1 : good - 1);
            if (k === d && !t.allowSame) nn = good; // 위 띠와 똑같은 분수로 내는 실수
            const s = { num: nn, den: k };
            if (askOpt) s.pick = Number.isInteger(t.ask) ? pickWrong() : pick;
            return s;
          }
          if (t.reduce) {
            const [a, b] = t.reduce; const g = gcd(a, b);
            const divs = o.divisors || [2, 3, 4, 5, 6];
            const common = divs.filter((x) => a % x === 0 && b % x === 0).sort((x, y) => x - y);
            const k = t.div || common[0] || g;
            const s = { div: k, num: a / k, den: b / k };
            // 기약분수 문항: 가장 작은 공약수로 한 번만 나누고 멈춘다 / 그렇게 해도 기약분수가 되면 분모만 나눈다
            if (!t.lowest || gcd(a / k, b / k) === 1) s.num = a;
            if (askOpt) s.pick = pick;
            return s;
          }
          if (askOpt && Number.isInteger(t.ask)) return Object.assign(state(), { pick: pickWrong() });
          return null;
        },
        async demo(t) {
          t = t || {};
          if (t.equalTo) {
            const [n, d] = t.equalTo; const k = pickDen(n, d, t);
            while (den !== k) { setDen(den + (k > den ? 1 : -1)); await kit.wait(220); }
            const want = (n * k) / d;
            while (num !== want) { setNum(num + (want > num ? 1 : -1), false); await kit.wait(220); }
            kit.announce(`${josa(fr(n, d), '과', '와')} ${josa(fr(want, k), '은', '는')} 크기가 같아요`);
          }
        },
      };
    },
  });
})(window.PaperKit);
