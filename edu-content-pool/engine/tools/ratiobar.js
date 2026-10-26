/* 비율 띠 — 띠 전체가 기준량이다. 띠를 몇 칸으로 나누고 비교하는 양만큼 색칠한 뒤, 비율을 분수와 소수로 쓴다.
 * 띠 칸 수는 기준량과 같지 않아도 된다: 200 mL를 50 mL씩 4칸으로 나누고 1칸을 칠해도 비율은 같다(크기가 같은 분수).
 * 옵션: scene({ baseName, base, compareName, compare, unit, other?:{name, n}, hideCompare? }), wholeOrder(고르기 보기 순서), hideWhole(활동지: 띠 이름을 비움),
 *       askBase(띠 전체로 삼을 양 고르기: 보기는 scene의 base·compare·other·합계), cut(칸 수·색칠 조절, 기본 참),
 *       fraction(분수 칸), decimal(소수 칸), read({ q, choices, answer? }: 비 읽기 고르기),
 *       labels('words'|'base'|'none': 띠에 '기준량'·'비교하는 양' 낱말을 붙일지), maxParts(기본 40), print
 * 상태: { whole, parts, shaded, num, den, dec, read }
 * target: { bar?:true, whole?:번호, fraction?:true|'lowest', decimal?:true, read?:번호 } — 비율은 scene의 compare/base로 채점한다
 */
(function (K) {
  'use strict';
  const fmt = (v) => String(Math.round(v * 10000) / 10000);
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  const josa = (w, a, b) => { const c = String(w).charCodeAt(String(w).length - 1); return w + (c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 ? a : b); };

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
  function pickGroup(parent, label, choices, onPick) {
    const row = document.createElement('div'); row.className = 'rb-picks'; row.setAttribute('role', 'radiogroup'); row.setAttribute('aria-label', label);
    const btns = choices.map((text, i) => {
      const b = document.createElement('button'); b.type = 'button'; b.className = 'rb-b'; b.textContent = text;
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
  // 숫자 칸: 직접 쓰거나 ↑↓(또는 − + 단추)로 1씩 바꾼다
  function numBox(parent, label, onSet, opts = {}) {
    const wrap = document.createElement('span'); wrap.className = 'rb-step';
    const mk = (t, d) => { const b = document.createElement('button'); b.type = 'button'; b.className = 'rb-b'; b.textContent = t; b.setAttribute('tabindex', '0'); b.setAttribute('aria-label', `${label} ${d > 0 ? '늘리기' : '줄이기'}`); b.addEventListener('click', () => { onSet((Number(inp.value) || 0) + d); }); return b; };
    const inp = document.createElement('input'); inp.className = `rb-in ${opts.small ? 'rb-in--sm' : ''}`; inp.type = 'text'; inp.setAttribute('tabindex', '0');
    inp.setAttribute('inputmode', opts.decimal ? 'decimal' : 'numeric'); inp.setAttribute('autocomplete', 'off'); inp.setAttribute('aria-label', label);
    inp.addEventListener('input', () => { inp.value = inp.value.replace(opts.decimal ? /[^0-9.]/g : /[^0-9]/g, '').slice(0, 7); onSet(inp.value === '' ? null : inp.value, true); });
    inp.addEventListener('keydown', (e) => { const d = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!d) return; e.preventDefault(); onSet(Math.round(((Number(inp.value) || 0) + d * (opts.decimal ? 0.1 : 1)) * 100) / 100); });
    if (opts.buttons) wrap.append(mk('−', -1), inp, mk('+', 1)); else wrap.append(inp);
    parent.appendChild(wrap);
    return inp;
  }

  // 힌트 단계(플레이어가 { level, attempts }를 준다): 1 개념·전략만(문항의 수·자리·이름 없음), 2 틀린 단계 짚기, 3 풀이 한 단계.
  // 시도 수보다 높은 단계는 주지 않는다 — 시도 0 → 1단계, 1 → 2단계까지, 2 이상 → 3단계까지
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  K.registerTool('ratiobar', {
    name: '비율 띠',
    create(box, o, kit) {
      ensureStyle();
      const sc = Object.assign({ baseName: '반 학생 수', base: 25, compareName: '안경 쓴 학생 수', compare: 10, unit: '명' }, o.scene || {});
      const controls = !o.print;
      const cut = o.cut !== false;
      const maxParts = o.maxParts || 40;
      const labels = o.labels || 'base';
      const W = 600; const H = 200;
      const st = kit.stage(box, { viewBox: [W, H], label: `비율 띠. 띠 전체는 ${sc.baseName} ${josa(`${sc.base}${sc.unit}`, '이에요', '예요')}.` });
      kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 16 }, color: 'cream', fill: '#FBF6EC', depth: 2, texture: true });
      const BX = 40; const BW = W - 80; const BY = 78; const BH = 52;
      // 띠 받침과 칸(최대 maxParts개를 미리 만들고 칸 수에 따라 자리·너비만 바꾼다).
      // 칸은 종이 조각이 아닌 맨 사각형이다: 인쇄 규칙이 조각 윗면을 흰 바탕으로 바꿔 색칠한 칸이 사라지기 때문
      const bar = st.layer('bar');
      kit.piece(st, bar, { shape: { type: 'rect', x: BX - 4, y: BY - 4, w: BW + 8, h: BH + 8, rx: 8 }, color: 'lavender', depth: 2 });
      const cells = [];
      for (let i = 0; i < maxParts; i++) {
        cells.push(kit.el('rect', { x: BX, y: BY, width: 1, height: BH, display: 'none', fill: '#FFFDF9', stroke: '#8A7FA6', 'stroke-width': 1.4, 'pointer-events': 'none' }, bar));
      }
      const lab = st.layer('labels');
      const T = (x, y, anchor, size, fill) => kit.el('text', { x, y, 'text-anchor': anchor, 'font-size': size, class: 'pk-text', fill }, lab);
      const topBrace = kit.el('rect', { x: BX, y: BY - 18, width: BW, height: 3, fill: '#473B6B' }, lab);
      const topTxt = T(W / 2, BY - 26, 'middle', 16, '#473B6B');
      const botBrace = kit.el('rect', { x: BX, y: BY + BH + 14, width: 1, height: 3, fill: '#702830' }, lab);
      const botTxt = T(BX, BY + BH + 36, 'start', 15, '#702830');
      const partTxt = T(W - BX, BY + BH + 36, 'end', 13, '#473B6B');

      // ---- 상태 ----
      const wholeChoices = [`${sc.baseName} ${sc.base}${sc.unit}`, `${sc.compareName} ${sc.hideCompare ? '?' : sc.compare}${sc.unit}`]
        .concat(sc.other ? [`${sc.other.name} ${sc.other.n}${sc.unit}`] : []);
      const askBase = controls && !!o.askBase;
      const st0 = Object.assign({ parts: 1, shaded: 0 }, o.start || {});
      let whole = askBase || (o.print && o.hideWhole) ? null : 0; let parts = st0.parts; let shaded = st0.shaded;
      let num = null; let den = null; let dec = null; let read = null;

      function paint() {
        const w = BW / parts; const wholeOk = whole != null;
        for (let i = 0; i < maxParts; i++) {
          const c = cells[i];
          if (i >= parts) { c.setAttribute('display', 'none'); continue; }
          c.setAttribute('display', 'inline'); c.setAttribute('x', BX + i * w); c.setAttribute('width', w);
          c.setAttribute('fill', i < shaded ? (o.print ? '#BDBDBD' : '#F5B8BE') : '#FFFDF9');
        }
        // 띠 전체 이름: 고르기 전에는 '띠 전체 = ?'
        const wholeName = wholeOk ? wholeChoices[whole] : '?';
        const word = labels !== 'none' ? '기준량: ' : '';
        topTxt.textContent = whole == null ? '띠 전체 = ?' : whole === 0 ? `띠 전체 = ${word}${wholeName}` : `띠 전체 = ${wholeName}`;
        const sh = shaded > 0;
        botBrace.setAttribute('display', sh ? 'inline' : 'none'); botTxt.setAttribute('display', sh ? 'inline' : 'none');
        kit.transform(botBrace, { x: BX, sx: w * shaded, sy: 1 });
        const per = sc.base / parts;
        botTxt.textContent = `색칠: ${shaded}칸${labels === 'words' ? ' (비교하는 양)' : ''}`;
        partTxt.textContent = o.print ? '' : `${parts}칸으로 나눔${whole === 0 && Number.isInteger(per) && parts > 1 ? ` · 한 칸 = ${per}${sc.unit}` : ''}`;
      }

      // ---- 조작 칸(HTML) ----
      let setWhole = null; let setRead = null; let partsIn = null; let shadeIn = null; let numIn = null; let denIn = null; let decIn = null;
      const log = () => kit.recorder.log('ratiobar', state());
      if (controls) {
        const panel = document.createElement('div'); panel.className = 'rb-panel';
        if (askBase) {
          const q = document.createElement('p'); q.className = 'rb-q'; q.textContent = '띠 전체(기준량)로 삼을 양을 고르세요.';
          panel.appendChild(q);
          // 보기 순서(wholeOrder): 정답이 늘 첫째 단추가 되지 않게 섞어 보인다. 상태는 원래 번호(0=기준량)로 둔다
          const order = Array.isArray(o.wholeOrder) && o.wholeOrder.length === wholeChoices.length ? o.wholeOrder : wholeChoices.map((_, i) => i);
          const sel = pickGroup(panel, q.textContent, order.map((i) => wholeChoices[i]), (j) => { whole = order[j]; setWhole(whole); paint(); log(); kit.announce(`띠 전체: ${wholeChoices[whole]}`); });
          setWhole = (w) => sel(w == null ? null : order.indexOf(w));
        }
        if (cut) {
          const row = document.createElement('div'); row.className = 'rb-row';
          const l1 = document.createElement('span'); l1.textContent = '칸 수'; row.appendChild(l1);
          partsIn = numBox(row, '띠를 나눈 칸 수', (v, typing) => setParts(v, typing), { buttons: true, small: true });
          const l2 = document.createElement('span'); l2.textContent = '색칠한 칸'; row.appendChild(l2);
          shadeIn = numBox(row, '색칠한 칸 수', (v, typing) => setShaded(v, typing), { buttons: true, small: true });
          panel.appendChild(row);
        }
        if (o.fraction || o.decimal) {
          const row = document.createElement('div'); row.className = 'rb-pad';
          row.append('비율 =');
          if (o.fraction) {
            const fr = document.createElement('span'); fr.className = 'rb-frac';
            numIn = numBox(fr, '분자', (v, typing) => { num = v == null ? null : Math.max(0, Math.round(Number(v))); if (!typing) numIn.value = num == null ? '' : num; log(); }, { small: true });
            fr.appendChild(document.createElement('hr'));
            denIn = numBox(fr, '분모', (v, typing) => { den = v == null ? null : Math.max(0, Math.round(Number(v))); if (!typing) denIn.value = den == null ? '' : den; log(); }, { small: true });
            row.appendChild(fr);
          }
          if (o.fraction && o.decimal) row.append('=');
          if (o.decimal) decIn = numBox(row, '비율을 소수로', (v, typing) => { dec = v == null || v === '.' ? null : (typing ? v : String(Math.max(0, v))); if (!typing) decIn.value = dec == null ? '' : dec; log(); }, { decimal: true });
          panel.appendChild(row);
        }
        if (o.read && Array.isArray(o.read.choices)) {
          const q = document.createElement('p'); q.className = 'rb-q'; q.textContent = o.read.q || '알맞은 것을 고르세요.';
          panel.appendChild(q);
          setRead = pickGroup(panel, q.textContent, o.read.choices, (i) => { read = i; setRead(i); log(); kit.announce(o.read.choices[i]); });
        }
        box.appendChild(panel);
      }
      function setParts(v, typing) {
        if (v == null) { if (typing) return; v = 1; }
        parts = K.clamp(Math.round(Number(v)) || 1, 1, maxParts); shaded = Math.min(shaded, parts);
        if (partsIn && !typing) partsIn.value = parts; if (shadeIn) shadeIn.value = shaded;
        paint(); log(); if (!typing) kit.announce(`띠를 ${parts}칸으로 나눴어요`);
      }
      function setShaded(v, typing) {
        if (v == null) { if (typing) return; v = 0; }
        shaded = K.clamp(Math.round(Number(v)) || 0, 0, parts);
        if (shadeIn && !typing) shadeIn.value = shaded;
        paint(); log(); if (!typing) kit.announce(`${shaded}칸을 색칠했어요`);
      }

      const decVal = () => (dec == null || dec === '' || dec === '.' ? null : Number(dec));
      const state = () => ({ whole, parts, shaded, num, den, dec: decVal(), read });
      function setState(s) {
        s = s || {};
        if (s.whole !== undefined) { whole = s.whole; if (setWhole) setWhole(whole); }
        if (s.parts != null) parts = K.clamp(s.parts, 1, maxParts);
        if (s.shaded != null) shaded = Math.min(s.shaded, parts);
        if (s.num !== undefined) num = s.num; if (s.den !== undefined) den = s.den; if (s.dec !== undefined) dec = s.dec == null ? null : String(s.dec);
        if (s.read !== undefined) { read = s.read; if (setRead) setRead(read); }
        if (partsIn) partsIn.value = parts; if (shadeIn) shadeIn.value = shaded;
        if (numIn) numIn.value = num == null ? '' : num; if (denIn) denIn.value = den == null ? '' : den; if (decIn) decIn.value = dec == null ? '' : dec;
        paint();
      }
      setState(st0);

      const C = sc.compare; const B = sc.base; const unit = sc.unit;
      // 2단계 힌트는 낱말 식까지만, 수를 넣은 나눗셈은 3단계에만
      const hint = '분모(나누는 수)에 쓴 것이 "~에 대한" 앞에 있는 양인지 확인해요. 비율 = 비교하는 양 ÷ 기준량이에요.';
      const h3 = sc.hideCompare ? '비율을 분모가 기준량인 분수로 바꿔 보세요. (예: 0.5 = 5/10)' : `기준량은 ${sc.baseName} ${B}${unit}, 비교하는 양은 ${sc.compareName} ${C}${unit}이에요. 비율 = ${C} ÷ ${B}`;
      // 채점만 한다(화면은 바꾸지 않는다) — 확인·힌트·오답 만들기가 함께 쓴다
      function judge(t) {
        const s = state();
        if (t.whole != null) {
          if (s.whole == null) return { correct: false, incomplete: true, feedback: '먼저 띠 전체(기준량)로 삼을 양을 위에서 골라요.' };
          if (s.whole !== t.whole) {
            const picked = wholeChoices[s.whole];
            // 첫 오답은 답(기준량 이름)을 말하지 않고 오개념만 짚는다 — 학생이 '~에 대한'을 다시 읽어 스스로 고르게
            const fb = s.whole === 1 ? `${josa(picked, '은', '는')} 견주어 보는 쪽(비교하는 양)이에요. 문장에서 "~에 대한" 바로 앞에 있는 낱말을 다시 읽어 보세요.`
              : `${josa(picked, '은', '는')} 두 양을 더한 전체예요. 기준량이 언제나 전체인 것은 아니에요. 문장에서 "~에 대한" 바로 앞에 있는 낱말을 다시 읽어 보세요.`;
            return { correct: false, feedback: fb, hint: '"■에 대한 ▲의 비"에서 ■가 기준량, ▲가 비교하는 양이에요. 문장의 "~에 대한" 앞 낱말에 밑줄을 그어 보세요.', h3: `"${sc.baseName}에 대한"이므로 기준량은 ${josa(sc.baseName, '이에요', '예요')}.` };
          }
        }
        if (t.bar) {
          const v = s.shaded / s.parts;
          if (s.parts === 1 && s.shaded === 0) return { correct: false, feedback: '띠를 아직 나누지 않았어요.', hint: `띠 전체가 ${josa(`${B}${unit}`, '이에요', '예요')}. 칸 수를 정해 나눠 보세요.` };
          if (Math.abs(v - C / B) > 1e-9) {
            if (s.parts === C && s.shaded === B) return { correct: false, feedback: '기준량과 비교하는 양이 바뀌었어요. 띠 전체가 기준량이에요.', hint, h3 };
            if (Math.abs(v - (B - C) / B) < 1e-9) return { correct: false, feedback: `색칠한 칸이 ${josa(sc.compareName, '이', '가')} 아닌 나머지를 나타내요.`, hint: `${sc.compareName}만큼 색칠해요.`, h3 };
            if (B % s.parts !== 0 && s.parts !== B) return { correct: false, feedback: `${B}${unit}를 ${s.parts}칸으로 똑같이 나누면 한 칸이 딱 떨어지지 않아요.`, hint: `${B}를 나누어떨어지게 하는 칸 수를 골라요. 한 칸이 몇 ${unit}인지 생각해요.`, h3 };
            const per = B / s.parts;
            if (sc.hideCompare) return { correct: false, feedback: `한 칸이 ${josa(`${fmt(per)}${unit}`, '이니', '니')} ${s.shaded}칸은 ${josa(`${fmt(per * s.shaded)}${unit}`, '이에요', '예요')}. 색칠한 양 ÷ 기준량이 문제의 비율과 같아야 해요.`, hint: '비율을 분모가 기준량인 분수로 바꿔 보세요. (예: 0.5 = 5/10)', h3 };
            // 한 칸 크기로 비교하는 양을 칠할 수 없는 칸 수(예: 200 mL를 5칸 → 한 칸 40 mL로는 50 mL를 못 칠함)
            if (C % per !== 0) return { correct: false, feedback: `${s.parts}칸으로 나누면 한 칸이 ${josa(`${fmt(per)}${unit}`, '이라', '라')} ${josa(`${C}${unit}`, '을', '를')} 칸으로 칠할 수 없어요. 한 칸의 크기를 다시 정해요.`, hint: `${C}${unit}도 ${B}${unit}도 똑같은 칸으로 나누어지게 칸 수를 골라요.`, h3 };
            return { correct: false, feedback: `한 칸이 ${josa(`${fmt(per)}${unit}`, '이니', '니')} ${s.shaded}칸은 ${josa(`${fmt(per * s.shaded)}${unit}`, '이에요', '예요')}. ${josa(`${C}${unit}`, '이', '가')} 되게 칠해요.`, hint, h3 };
          }
        }
        if (t.fraction) {
          if (s.num == null || s.den == null) return { correct: false, incomplete: true, feedback: '분자와 분모를 모두 써요.' };
          if (s.den === 0) return { correct: false, feedback: '분모에는 0을 쓸 수 없어요.', hint, h3 };
          const ok = s.num * B === s.den * C;
          if (!ok) {
            if (s.num * C === s.den * B) return { correct: false, feedback: '분모와 분자가 바뀌었어요. 분모에는 기준량(무엇에 대한)을 써요.', hint, h3 };
            if (sc.other && s.den === sc.other.n && s.num === C) return { correct: false, feedback: `분모에 ${josa(sc.other.name, '을', '를')} 썼어요. 문장에서 "~에 대한" 앞 낱말을 다시 읽어 보세요.`, hint, h3 };
            if (s.den === B + C && s.num === C) return { correct: false, feedback: '두 양을 더한 전체를 분모에 썼어요. 분모에는 "~에 대한" 쪽 양(기준량)만 써요.', hint, h3 };
            if (B > C && s.den > 0 && s.num * (B - C) === s.den * C) return { correct: false, feedback: '색칠하지 않은 나머지를 분모에 썼어요. 분모에는 띠 전체(기준량)를 써요.', hint, h3 };
            return { correct: false, feedback: '비율을 다시 써 볼까요? 분자는 비교하는 양, 분모는 기준량이에요.', hint, h3 };
          }
          if (t.fraction === 'lowest' && gcd(s.num, s.den) !== 1) return { correct: false, feedback: '크기는 맞아요! 이번에는 기약분수로 나타내요. 분모와 분자를 둘 다 나눌 수 있는 수가 아직 있어요.', hint: '분모와 분자를 같은 수로 더 나눌 수 없을 때까지 약분해요.', h3: `${s.num}과 ${s.den}의 최대공약수는 ${gcd(s.num, s.den)}이에요.` };
        }
        if (t.decimal) {
          const v = s.dec;
          if (v == null) return { correct: false, incomplete: true, feedback: '비율을 소수로 써요.' };
          if (Math.abs(v - C / B) > 1e-6) {
            if (Math.abs(v - B / C) < 1e-6) return { correct: false, feedback: '기준량과 비교하는 양을 바꿔 나누었어요. 비교하는 양 ÷ 기준량이에요.', hint, h3 };
            if (Math.abs(v - C / 100) < 1e-6 || Math.abs(v - C / 10) < 1e-6) return { correct: false, feedback: '분자에 소수점만 찍었어요. 분모를 10이나 100으로 만든 뒤 소수로 써요.', hint: '분모가 10이나 100인 크기가 같은 분수로 바꾸거나, 분자 ÷ 분모를 계산해요.', h3 };
            if (Math.abs(v - C) < 1e-6) return { correct: false, feedback: '비교하는 양을 그대로 썼어요. 비율은 기준량을 1로 볼 때의 크기예요.', hint, h3 };
            return { correct: false, feedback: '소수로 바꾸는 계산을 다시 해 볼까요?', hint: '분자 ÷ 분모를 계산하거나, 분모가 100인 분수로 바꿔 보세요.', h3 };
          }
        }
        if (t.read != null) {
          if (s.read == null) return { correct: false, incomplete: true, feedback: '아래에서 하나를 골라요.' };
          if (s.read !== t.read) return { correct: false, feedback: (o.read.why && o.read.why[s.read]) || '다시 골라 볼까요?', hint: '"■ : ▲"는 "■ 대 ▲", "▲에 대한 ■의 비", "■의 ▲에 대한 비"로 읽어요. 기준량은 ▲예요.', h3: '"■ : ▲"는 "■ 대 ▲", "▲에 대한 ■의 비", "■의 ▲에 대한 비"로 읽어요. 기준량은 ▲예요.' };
        }
        const parts2 = [t.fraction ? `${s.num}/${s.den}` : null, t.decimal ? String(s.dec) : null].filter(Boolean).join(' = ');
        return { correct: true, feedback: parts2 ? `맞아요! ${sc.baseName}에 대한 ${sc.compareName}의 비율: ${parts2}` : t.read != null ? '맞아요!' : `맞아요! 띠 전체(${B}${unit}) 가운데 ${C}${unit}만큼 칠했어요.` };
      }

      return {
        getState: state,
        setState,
        reset() { setState(Object.assign({ whole: askBase ? null : 0, num: null, den: null, dec: null, read: null }, st0)); },
        solve(t) {
          const s = {};
          if (t.whole != null) s.whole = t.whole;
          if (t.bar) { const g = gcd(C, B); const p = B <= maxParts ? B : B / g; s.parts = p; s.shaded = (C * p) / B; }
          if (t.fraction) { const g = t.fraction === 'lowest' ? gcd(C, B) : 1; s.num = C / g; s.den = B / g; }
          if (t.decimal) s.dec = Math.round((C / B) * 10000) / 10000;
          if (t.read != null) s.read = t.read;
          setState(s);
        },
        check(t) { const r = judge(t); delete r.h3; return r; },
        // 힌트 3단계: 1 개념(수 없음) / 2 틀린 단계(낱말 식) / 3 수를 넣은 식
        hint(t, opts) {
          t = t || {};
          const r = judge(t);
          const why = t.whole != null ? '"■에 대한 ▲의 비"에서 견주는 기준이 되는 ■가 기준량이에요. 띠 전체는 기준량을 나타내요.'
            : t.bar ? '띠 전체가 기준량이에요. 한 칸이 몇인지 정한 뒤, 비교하는 양만큼만 색칠해요.'
              : t.fraction || t.decimal ? '비율 = 비교하는 양 ÷ 기준량이에요. 분모(나누는 수)에는 기준량을 써요.'
                : '"■ : ▲"에서 ▲가 기준량이에요. "▲에 대한 ■의 비"로 읽어요.';
          const lv = hintLevel(opts);
          if (r.correct) return { hint: why, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: why, correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        wrongAnswer(t) {
          t = t || {};
          const g = gcd(C, B); const p = B <= maxParts ? B : B / g;
          const s = { whole: t.whole != null ? t.whole : whole, parts, shaded, num, den, dec: decVal(), read };
          if (t.bar) { s.parts = p; s.shaded = (C * p) / B; }
          if (t.fraction) { const k = t.fraction === 'lowest' ? g : 1; s.num = C / k; s.den = B / k; }
          if (t.decimal) s.dec = Math.round((C / B) * 10000) / 10000;
          if (t.read != null) s.read = t.read;
          // 가장 흔한 실수: 기준량과 비교하는 양을 바꾼다(분자·분모 뒤집기, 큰 쪽 ÷ 작은 쪽, 비교하는 양을 띠 전체로 고르기)
          if (t.fraction) { [s.num, s.den] = [s.den, s.num]; return s; }
          if (t.decimal) { s.dec = Math.round((B / C) * 10000) / 10000; return s; }
          if (t.whole != null && t.whole !== 1) { s.whole = 1; return s; }
          if (t.bar) {
            // 띠에서는 바꿔 칠할 수 없을 때가 많아 남은 쪽(기준량 − 비교하는 양)을 칠하는 실수로 대신한다
            if (C < B && 2 * C !== B) s.shaded = p - s.shaded;
            else s.shaded = Math.max(0, s.shaded - 1);
            return s;
          }
          if (t.read != null && o.read && Array.isArray(o.read.choices)) { s.read = o.read.choices.findIndex((_, i) => i !== t.read); return s; }
          return null;
        },
        async demo(t) {
          const g = gcd(C, B); const p = B <= maxParts ? B : B / g;
          if (askBase) { whole = 0; if (setWhole) setWhole(0); paint(); await kit.wait(500); }
          for (const step of [Math.ceil(p / 2), p]) { setParts(step); await kit.wait(350); }
          for (let i = 1; i <= (C * p) / B; i++) { setShaded(i); await kit.wait(Math.max(60, 600 / p)); }
          if (t && (t.fraction || t.decimal)) { setState({ num: C / (t.fraction === 'lowest' ? g : 1), den: B / (t.fraction === 'lowest' ? g : 1), dec: t.decimal ? C / B : null }); }
        },
      };
    },
  });
})(window.PaperKit);
