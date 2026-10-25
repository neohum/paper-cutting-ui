/* 한글 글자 조립 — 종이 자음·모음 조각을 글자 틀에 모아 받침 없는 글자를 만든다.
 * 글자 틀 모양은 모음에 따라 바뀐다: 세로로 긴 모음(ㅏ ㅑ ㅓ ㅕ ㅣ …) → 자음 오른쪽, 가로로 긴 모음(ㅗ ㅛ ㅜ ㅠ ㅡ) → 자음 아래.
 * 조작: 끌어서 틀에 놓기. 자음은 누르기·Enter로 바로 틀에 들어간다.
 *       모음은 autoSlot(쉬움)이면 누르기만 해도 알맞은 자리로 간다. 아니면 누른 모음이 들려 있고, 틀의 '오른쪽'·'아래' 자리를
 *       한 번 더 눌러(키보드는 →·↓ 또는 Tab+Enter) 직접 고른다 — 모음 자리를 고르는 것이 이 차시의 목표다.
 *       모음을 맞지 않는 자리(예: ㅗ를 오른쪽)에 놓으면 돌아가며 까닭을 말과 소리로 알려 준다.
 *       틀에 들어간 조각은 눌러도 빠지지 않는다(다른 조각을 놓으면 바뀌고, 틀 밖으로 끌어내면 바구니로 돌아간다).
 * 합성: 0xAC00 + (초성*21 + 중성)*28. 받침(종성)은 다루지 않는다(1학년 1학기 '받침 없는 글자').
 * 옵션: consonants, vowels(배열), slotHints(빈 자리에 '자음'·'모음' 글씨), autoSlot, showSyllable(기본 true), speak(기본 true),
 *       silentMark(쉬움: ㅇ 조각 아래 '소리 없음'), print
 * 상태: { cho, jung, syllable } / check({ syllable: '나' })
 */
(function (K) {
  const CHO = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ';
  const JUNG = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ';
  const VERT = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅣ'; const HORZ = 'ㅗㅛㅜㅠㅡ';
  const NAMES = { ㄱ: '기역', ㄴ: '니은', ㄷ: '디귿', ㄹ: '리을', ㅁ: '미음', ㅂ: '비읍', ㅅ: '시옷', ㅇ: '이응', ㅈ: '지읒', ㅊ: '치읓', ㅋ: '키읔', ㅌ: '티읕', ㅍ: '피읖', ㅎ: '히읗' };
  const VSOUND = { ㅏ: '아', ㅐ: '애', ㅑ: '야', ㅓ: '어', ㅔ: '에', ㅕ: '여', ㅗ: '오', ㅛ: '요', ㅜ: '우', ㅠ: '유', ㅡ: '으', ㅣ: '이' };
  const typeOf = (j) => (HORZ.includes(j) ? 'h' : 'v');
  const compose = (c, j) => String.fromCharCode(0xAC00 + (CHO.indexOf(c) * 21 + JUNG.indexOf(j)) * 28);
  const decompose = (s) => {
    const k = String(s || '').charCodeAt(0) - 0xAC00;
    if (!(k >= 0 && k <= 11171)) return null;
    return { cho: CHO[Math.floor(k / 588)], jung: JUNG[Math.floor((k % 588) / 28)], jong: k % 28 };
  };
  const okCho = (c) => CHO.includes(c); const okJung = (j) => VERT.includes(j) || HORZ.includes(j);
  // 짧은 획 방향만 다른 거울 모양 모음(1학년이 가장 자주 바꿔 고른다)
  const MIRROR = { ㅏ: 'ㅓ', ㅓ: 'ㅏ', ㅗ: 'ㅜ', ㅜ: 'ㅗ', ㅑ: 'ㅕ', ㅕ: 'ㅑ', ㅛ: 'ㅠ', ㅠ: 'ㅛ' };
  const STROKE = { ㅏ: '짧은 획이 오른쪽(바깥)', ㅓ: '짧은 획이 왼쪽(자음 쪽)', ㅗ: '짧은 획이 위쪽(자음 쪽)', ㅜ: '짧은 획이 아래쪽', ㅑ: '짧은 획 두 개가 오른쪽', ㅕ: '짧은 획 두 개가 왼쪽', ㅛ: '짧은 획 두 개가 위쪽', ㅠ: '짧은 획 두 개가 아래쪽' };
  const where = (j) => (typeOf(j) === 'v' ? '오른쪽' : '아래');

  K.registerTool('hangul', {
    name: '한글 글자 조립',
    create(box, o, kit) {
      const print = !!o.print;
      const cons = (o.consonants || ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅇ']).filter(okCho);
      const vows = (o.vowels || ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ']).filter(okJung);
      const showSyl = o.showSyllable !== false && !print;
      const W = 520;
      // 바구니 줄: 한 줄에 6개까지, 줄 수가 늘면 고르게 나눈다(판정 영역 78×80 = 375px 휴대폰에서도 44px 이상)
      const rowsOf = (n) => { const r = Math.max(1, Math.ceil(n / 6)); const per = Math.ceil(n / r); return Array.from({ length: r }, (_, i) => Math.min(per, n - i * per)); };
      const SP = 80; const ROW = 80; const TOP = 244;
      const consRows = rowsOf(cons.length); const vowRows = rowsOf(vows.length);
      const vowTop = TOP + 22 + consRows.length * ROW + 6;
      const H = vowTop + 22 + vowRows.length * ROW + 4;
      const homeOf = (idx, rows, y0) => {
        let r = 0; let k = idx;
        while (k >= rows[r]) { k -= rows[r]; r++; }
        return { x: W / 2 + (k - (rows[r] - 1) / 2) * SP, y: y0 + 22 + r * ROW + ROW / 2 - 2 };
      };
      const st = kit.stage(box, { viewBox: [W, H], label: '한글 글자 조립. 자음과 모음 조각을 글자 틀에 모아 글자를 만들어요.' });
      const B = { x: 40, y: 24, s: 180 };
      if (print) st.svg.setAttribute('viewBox', `${B.x - 6} ${B.y - 6} ${B.s + 12} ${B.s + 14}`);

      // ---- 글자 틀: 라벤더 판 → 크림 판 → 점선 자리 ----
      const F = st.layer('frame');
      kit.piece(st, F, { shape: { type: 'rect', x: B.x, y: B.y, w: B.s, h: B.s, rx: 24 }, color: 'lavender', depth: 3, texture: true });
      kit.piece(st, F, { shape: { type: 'rect', x: B.x + 8, y: B.y + 8, w: B.s - 16, h: B.s - 16, rx: 18 }, color: 'cream', depth: 1 });
      const ix = B.x + 12; const iy = B.y + 12; const half = 76; const full = 156; const g2 = 4;
      const LAYOUT = {
        none: { cho: [ix, iy, half, half], v: [ix + half + g2, iy, half, half], h: [ix, iy + half + g2, half, half] },
        v: { cho: [ix, iy, half, full], v: [ix + half + g2, iy, half, full] },
        h: { cho: [ix, iy, full, half], h: [ix, iy + half + g2, full, half] },
      };
      const center = (r) => ({ x: r[0] + r[2] / 2, y: r[1] + r[3] / 2 });
      const slotG = {}; const hintT = {};
      for (const key of Object.keys(LAYOUT)) {
        const g = kit.el('g', { class: `hg-slots hg-slots--${key}` }, F);
        slotG[key] = g; hintT[key] = {};
        for (const [name, r] of Object.entries(LAYOUT[key])) {
          kit.el('rect', { x: r[0], y: r[1], width: r[2], height: r[3], rx: 12, fill: print ? 'none' : kit.palette[name === 'cho' ? 'sky' : 'rose'].light, stroke: print ? '#9a948d' : kit.palette.lavender.layer, 'stroke-width': 2, 'stroke-dasharray': '7 6' }, g);
          if (o.slotHints && !print) {
            const c = center(r);
            const t = kit.el('text', { x: c.x, y: c.y + 6, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: kit.palette[name === 'cho' ? 'sky' : 'rose'].dark, opacity: 0.6 }, g);
            t.textContent = name === 'cho' ? '자음' : name === 'v' ? '모음 →' : '모음 ↓';
            hintT[key][name] = t;
          }
        }
      }

      // ---- 글자 카드(오른쪽) + 안내 줄 ----
      let sylG = null; let sylT = null; let eqT = null; let msgT = null;
      if (!print) {
        const C = st.layer('card');
        kit.piece(st, C, { shape: { type: 'rect', x: 244, y: 24, w: 256, h: 180, rx: 24 }, color: 'buttercup', depth: 3 });
        kit.piece(st, C, { shape: { type: 'rect', x: 256, y: 36, w: 232, h: 156, rx: 18 }, color: 'buttercup', depth: 0, flat: true, fill: kit.palette.buttercup.light });
        sylG = kit.el('g', null, C);
        kit.transform(sylG, { x: 372, y: 112 });
        sylT = kit.el('text', { x: 0, y: 40, 'text-anchor': 'middle', 'font-size': 112, class: 'pk-text', fill: kit.palette.ink.base }, sylG);
        eqT = kit.el('text', { x: 372, y: 184, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: kit.palette.buttercup.dark }, C);
        msgT = kit.el('text', { x: 260, y: 230, 'text-anchor': 'middle', 'font-size': 19, 'font-weight': 700, class: 'pk-text', fill: kit.palette.rose.dark }, C);
        const T = st.layer('tray');
        const tray = (y0, rows, title, color) => {
          const h = 22 + rows.length * ROW;
          kit.piece(st, T, { shape: { type: 'rect', x: 14, y: y0 - 4, w: W - 28, h, rx: 18 }, color, depth: 2, fill: kit.palette[color].light });
          kit.el('text', { x: 30, y: y0 + 13, 'font-size': 13, class: 'pk-text', fill: kit.palette[color].dark }, T).textContent = title;
        };
        tray(TOP, consRows, '자음', 'sky');
        tray(vowTop, vowRows, '모음', 'rose');
        // 조각이 틀에 가 있는 동안 바구니 자리에 흐린 그림자를 남긴다(어디서 왔는지 보이게)
        const ghost = (ch, home, color) => {
          const g = kit.el('g', { opacity: 0.35, 'pointer-events': 'none' }, T);
          kit.el('rect', { x: home.x - 30, y: home.y - 32, width: 60, height: 64, rx: 14, fill: 'none', stroke: kit.palette[color].dark, 'stroke-width': 1.5, 'stroke-dasharray': '5 5' }, g);
          kit.el('text', { x: home.x, y: home.y + 14, 'text-anchor': 'middle', 'font-size': 42, class: 'pk-text', fill: kit.palette[color].layer }, g).textContent = ch;
        };
        cons.forEach((c, i) => ghost(c, homeOf(i, consRows, TOP), 'sky'));
        vows.forEach((v, i) => ghost(v, homeOf(i, vowRows, vowTop), 'rose'));
      }

      // ---- 조각 ----
      const L = st.layer('tiles');
      const tiles = [];
      const makeTile = (ch, kind, home) => {
        const color = kind === 'c' ? 'sky' : 'rose';
        const g = kit.el('g', { class: `hg-tile hg-tile--${kind}` }, L);
        kit.el('rect', { x: -39, y: -40, width: 78, height: 80, class: 'pk-hit' }, g);
        kit.piece(st, g, { shape: { type: 'rect', w: 60, h: 64, rx: 14 }, color, depth: 2 });
        kit.piece(st, g, { shape: { type: 'rect', w: 50, h: 54, rx: 11 }, color, depth: 0, flat: true, fill: kit.palette[color].light, stroke: 'rgba(255,255,255,0.8)' });
        // 오려 낸 글자: 아래층 글자(진한 층 색) 위에 윗면 글자를 살짝 올려 종이 두께를 낸다
        kit.el('text', { x: 1.3, y: 15.6, 'text-anchor': 'middle', 'font-size': 42, class: 'pk-text pk-under', fill: kit.palette[color].layer }, g).textContent = ch;
        kit.el('text', { x: 0, y: 14, 'text-anchor': 'middle', 'font-size': 42, class: 'pk-text', fill: kit.palette[color].dark }, g).textContent = ch;
        if (o.silentMark && ch === 'ㅇ' && kind === 'c') kit.el('text', { x: 0, y: 30, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: kit.palette[color].dark }, g).textContent = '소리 없음';
        const t = { ch, kind, g, home, slot: null };
        g.setAttribute('aria-label', kind === 'c' ? `자음 ${ch}${NAMES[ch] ? `(${NAMES[ch]})` : ''}` : `모음 ${ch}`);
        kit.transform(g, { x: home.x, y: home.y, s: 1 });
        tiles.push(t);
        if (!print) bindDrag(t);
        return t;
      };

      let cho = null; let jung = null; // 틀에 놓인 조각
      const layout = () => (jung ? typeOf(jung.ch) : 'none');
      const slotRect = (name) => LAYOUT[layout()][name === 'cho' ? 'cho' : typeOf(jung.ch)];
      const SC = 1.18;
      const scaleTo = (t, s, pop) => {
        const from = (t.g.__pk && t.g.__pk.s) || 1;
        kit.spring(pop ? s * 1.15 : from, s, { stiffness: 300, damping: pop ? 10 : 20, onUpdate: (v) => kit.transform(t.g, { s: v }) });
      };
      const syllable = () => (cho && jung ? compose(cho.ch, jung.ch) : '');
      const state = () => ({ cho: cho ? cho.ch : null, jung: jung ? jung.ch : null, syllable: syllable() });

      const paint = (bounce) => {
        const lay = layout();
        for (const k of Object.keys(slotG)) slotG[k].setAttribute('display', k === lay ? 'inline' : 'none');
        const ht = hintT[lay] || {};
        if (ht.cho) ht.cho.setAttribute('display', cho ? 'none' : 'inline');
        for (const k of ['v', 'h']) if (ht[k]) ht[k].setAttribute('display', jung ? 'none' : 'inline');
        if (print) { tiles.forEach((t) => t.g.setAttribute('display', t.slot ? 'inline' : 'none')); return; }
        const s = syllable();
        sylT.textContent = showSyl ? (s || (cho ? cho.ch : jung ? jung.ch : '')) : (s ? '?' : '');
        sylT.setAttribute('fill', s ? kit.palette.ink.base : kit.palette.buttercup.layer);
        eqT.textContent = cho || jung ? `${cho ? cho.ch : '□'} + ${jung ? jung.ch : '□'}${s && showSyl ? ` = ${s}` : ''}` : '자음과 모음을 모아요';
        if (bounce && s) kit.spring(1.25, 1, { stiffness: 260, damping: 10, onUpdate: (v) => kit.transform(sylG, { s: v }) });
      };
      // 안내 줄은 다음 조작까지 남긴다(2.6초는 1학년이 읽기에 짧았다).
      let lastWrong = null; // 마지막으로 틀린 자리에 놓으려 한 모음 — 확인 피드백에도 다시 쓴다
      const say = (text) => {
        if (msgT) msgT.textContent = text;
        kit.announce(text);
      };
      const clearMsg = () => { if (msgT) msgT.textContent = ''; };
      const wrongSlot = (ch) => {
        lastWrong = ch;
        say(`${ch}는 ${where(ch)}에 붙여요!`);
        kit.tick('no');
        flashZone(typeOf(ch));
      };

      // 틀 안 조각을 지금 모양에 맞는 자리로 옮긴다(모음이 바뀌면 자음도 따라 움직인다)
      const relayout = (skip, instant) => {
        for (const t of [cho, jung]) {
          if (!t || t === skip) continue;
          const c = center(slotRect(t.kind === 'c' ? 'cho' : 'jung'));
          if (instant) kit.transform(t.g, { x: c.x, y: c.y, s: SC, r: 0 });
          else kit.animateTo(t.g, c);
        }
      };
      const sendHome = (t, instant) => {
        if (cho === t) cho = null; if (jung === t) jung = null;
        t.slot = null;
        if (instant) kit.transform(t.g, { x: t.home.x, y: t.home.y, s: 1, r: 0 });
        else { kit.animateTo(t.g, t.home); scaleTo(t, 1); }
      };
      const place = (t, instant) => {
        const prev = t.kind === 'c' ? cho : jung;
        if (prev && prev !== t) sendHome(prev, instant);
        if (t.kind === 'c') cho = t; else jung = t;
        t.slot = t.kind === 'c' ? 'cho' : 'jung';
        if (!instant) scaleTo(t, SC, true);
      };

      function bindDrag(t) {
        kit.drag(st, t.g, {
          bounds: [20, 20, W - 20, H - 20],
          onStart() { kit.tick(); },
          snap(x, y) {
            const rest = t.slot ? center(slotRect(t.slot)) : t.home;
            const moved = Math.hypot(x - rest.x, y - rest.y);
            const inBlock = x > B.x - 8 && x < B.x + B.s + 8 && y > B.y - 8 && y < B.y + B.s + 8;
            clearMsg();
            if (moved < 6) {
              // 누르기: 틀 안 조각은 그대로 둔다(눌러서 빠지면 '한 번 더 누르면 놓인다'고 여긴 아이가 헷갈렸다)
              if (t.slot) { say('바꾸려면 다른 조각을 눌러요.'); return rest; }
              if (t.kind === 'v' && !o.autoSlot) { pick(t); return rest; }
            } else if (!inBlock) { unpick(); sendHome(t); relayout(t); return t.home; }
            if (t.kind === 'v' && moved >= 6 && !o.autoSlot) {
              // 자음 자리(왼쪽 위) 기준으로 오른쪽으로 놓았는지, 아래로 놓았는지
              const c0 = center(LAYOUT.none.cho);
              const want = x - c0.x >= y - c0.y ? 'v' : 'h';
              if (want !== typeOf(t.ch)) { unpick(); wrongSlot(t.ch); return rest; }
            }
            unpick();
            place(t);
            relayout(t);
            return center(slotRect(t.slot));
          },
          onDrop(_x, _y, via) { dropped(t, via); },
        });
      }

      function dropped(t, via) {
        paint(true);
        const s = state();
        kit.recorder.log('hangul', s);
        if (s.syllable) { lastWrong = null; kit.announce(`${s.cho} + ${s.jung} = ${s.syllable}`); }
        else if (via === 'keyboard' && !picked) { const ul = t.kind === 'c' ? '을' : '를'; kit.announce(t.slot ? `${t.ch}${ul} 놓았어요.` : `${t.ch}${ul} 바구니로 돌려놓았어요.`); }
        if (via) kit.tick();
      }

      // ---- 모음 자리 고르기(autoSlot이 아닌 단계): 들어 올린 모음 + 틀의 '오른쪽'·'아래' 자리 단추 ----
      let picked = null; const zones = {};
      if (!print && !o.autoSlot) {
        const P = st.layer('pick');
        P.setAttribute('display', 'none');
        const R = LAYOUT.none;
        for (const [k, r, lab] of [['v', R.v, '자음 오른쪽 자리'], ['h', R.h, '자음 아래 자리']]) {
          const z = kit.el('rect', { x: r[0], y: r[1], width: r[2], height: r[3], rx: 12, fill: kit.palette.rose.light, 'fill-opacity': 0.75, stroke: kit.palette.rose.dark, 'stroke-width': 3, 'stroke-dasharray': '8 5', tabindex: '0', role: 'button', 'aria-label': lab, class: 'hg-zone', style: 'cursor:pointer' }, P);
          const go = (e) => { if (e) e.preventDefault(); choose(k); };
          z.addEventListener('click', go);
          z.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') go(e);
            else if (e.key === 'ArrowRight') { e.preventDefault(); choose('v'); } else if (e.key === 'ArrowDown') { e.preventDefault(); choose('h'); } else if (e.key === 'Escape') { e.preventDefault(); unpick(true); }
          });
          zones[k] = z;
        }
        zones.layer = P;
      }
      function pick(t) {
        if (picked && picked !== t) unpick();
        picked = t;
        tiles.forEach((x) => x.g.classList.toggle('pk-lifted', x === t));
        scaleTo(t, 1.12);
        zones.layer.setAttribute('display', 'inline');
        st.svg.appendChild(zones.layer); // 조각 위에 올려 눌리게
        say(`${t.ch}를 어디에 붙일까요? 오른쪽이나 아래를 눌러요.`);
        // 키보드 사용자는 Enter 다음에 바로 자리를 고를 수 있게 초점을 옮긴다
        setTimeout(() => { if (picked === t && document.activeElement === t.g) zones.v.focus(); }, 0);
      }
      function unpick(back) {
        if (!picked) return;
        const t = picked; picked = null;
        t.g.classList.remove('pk-lifted');
        if (!t.slot) scaleTo(t, 1);
        if (zones.layer) zones.layer.setAttribute('display', 'none');
        if (back) { clearMsg(); t.g.focus(); }
      }
      function choose(k) {
        const t = picked; if (!t) return;
        const kb = document.activeElement && document.activeElement.classList && document.activeElement.classList.contains('hg-zone');
        if (k !== typeOf(t.ch)) { wrongSlot(t.ch); return; } // 들린 채로 두어 다시 고르게 한다
        unpick();
        clearMsg();
        L.appendChild(t.g);
        place(t); relayout(t);
        kit.animateTo(t.g, center(slotRect(t.slot)));
        dropped(t, kb ? 'keyboard' : 'pointer');
        if (kb) t.g.focus();
      }
      let flashTimer = 0;
      function flashZone(k) {
        const z = zones[k]; if (!z) return;
        clearTimeout(flashTimer);
        z.setAttribute('stroke-width', 6);
        flashTimer = setTimeout(() => z.setAttribute('stroke-width', 3), 900);
      }

      cons.forEach((c, i) => makeTile(c, 'c', homeOf(i, consRows, TOP)));
      vows.forEach((v, i) => makeTile(v, 'v', homeOf(i, vowRows, vowTop)));
      const find = (ch, kind) => {
        let t = tiles.find((x) => x.ch === ch && x.kind === kind);
        // 옵션에 없는 글자를 상태로 받으면(활동지 그림 등) 조각을 하나 더 만든다
        if (!t) t = makeTile(ch, kind, { x: W / 2, y: H - 30 });
        return t;
      };

      const setState = (s) => {
        unpick(); clearMsg(); lastWrong = null;
        tiles.slice().forEach((t) => sendHome(t, true));
        const d = s && s.syllable ? decompose(s.syllable) : s || {};
        if (d && d.cho && okCho(d.cho)) place(find(d.cho, 'c'), true);
        if (d && d.jung && okJung(d.jung)) place(find(d.jung, 'v'), true);
        relayout(null, true);
        paint(false);
      };

      const celebrate = () => {
        [cho, jung].filter(Boolean).forEach((t, j) => setTimeout(() => kit.spring(j ? -12 : 12, 0, { stiffness: 300, damping: 7, onUpdate: (v) => kit.transform(t.g, { r: v, cx: 0, cy: 0 }) }), j * 90));
        if (sylG) kit.spring(1.35, 1, { stiffness: 240, damping: 8, onUpdate: (v) => kit.transform(sylG, { s: v }) });
      };

      const speak = () => {
        const s = syllable();
        if (!s) { say('자음과 모음을 모두 놓으면 읽어 줄게요.'); return; }
        try {
          const ss = window.speechSynthesis;
          if (!ss || typeof SpeechSynthesisUtterance === 'undefined') { kit.announce(s); return; }
          ss.cancel();
          const u = new SpeechSynthesisUtterance(s);
          u.lang = 'ko-KR'; u.rate = 0.8;
          const v = ss.getVoices().find((x) => /^ko/i.test(x.lang));
          if (v) u.voice = v;
          ss.speak(u);
        } catch (_) { kit.announce(s); }
        if (sylG) kit.spring(1.15, 1, { stiffness: 260, damping: 10, onUpdate: (v) => kit.transform(sylG, { s: v }) });
      };
      if (!print && o.speak !== false) {
        const bar = document.createElement('div');
        bar.className = 'hg-bar';
        bar.style.cssText = 'display:flex;justify-content:center;margin-top:8px';
        bar.innerHTML = '<button type="button" class="pl-btn hg-speak" style="min-height:44px"><i class="fi fi-rr-volume" aria-hidden="true"></i> 소리 듣기</button>';
        box.appendChild(bar);
        bar.querySelector('button').addEventListener('click', speak);
      }

      setState(o.start || {});
      return {
        getState: state,
        setState,
        reset() { setState(o.start || {}); },
        solve(t) { setState({ syllable: t.syllable }); },
        speak,
        check(t) {
          const want = decompose(t.syllable); const s = state();
          if (!want) return { correct: false, feedback: '문항 글자를 읽을 수 없어요.' };
          const okC = s.cho === want.cho; const okJ = s.jung === want.jung;
          if (okC && okJ) {
            celebrate();
            return { correct: true, feedback: `맞아요! ${want.cho}과 ${want.jung}를 모아 '${t.syllable}'를 만들었어요.` };
          }
          const silent = want.cho === 'ㅇ' ? ' 첫소리 ㅇ은 소리가 없어요.' : '';
          if (!s.cho && !s.jung) return { correct: false, feedback: '자음과 모음 조각을 글자 틀에 놓아 보세요.', hint: `'${t.syllable}'를 소리 내어 읽고, 첫소리 자음부터 찾아요.${silent}` };
          if (okC) {
            // 거울 모양(ㅏ↔ㅓ, ㅗ↔ㅜ)은 둘째 시도부터 자동으로 뜨는 힌트에서 짧은 획 방향을 짚어 준다
            const mirror = s.jung && MIRROR[want.jung] === s.jung;
            const fb = s.jung ? (mirror ? `자음은 맞았어요. ${s.jung}와 ${want.jung}는 짧은 획 방향이 달라요.` : '자음은 맞았어요. 모음을 다시 보세요.')
              : lastWrong ? `자음은 맞았어요. ${lastWrong}는 ${where(lastWrong)}에 붙여요.` : '자음은 맞았어요. 이제 모음을 놓아요.';
            const hint = mirror ? `${want.jung}는 ${STROKE[want.jung]}에 있어요. '${VSOUND[want.jung]}' 소리를 내며 찾아요.` : `'${VSOUND[want.jung]}' 소리가 나는 모음 ${want.jung}를 찾아 ${where(want.jung)}에 놓아요.`;
            return { correct: false, feedback: fb, hint };
          }
          if (okJ) return { correct: false, feedback: s.cho ? '모음은 맞았어요. 자음을 다시 보세요.' : '모음은 맞았어요. 이제 자음을 놓아요.', hint: want.cho === 'ㅇ' ? `첫소리 ㅇ은 소리가 없어요. '${t.syllable}'는 ㅇ과 ${want.jung}를 모아요.` : `자음 ${want.cho}${NAMES[want.cho] ? `(${NAMES[want.cho]})` : ''}을 찾아 놓아요.` };
          return { correct: false, feedback: '다시 해 볼까요? 글자를 소리 내어 천천히 읽어 보세요.', hint: `'${t.syllable}'는 ${want.cho}과 ${want.jung}를 모아요.` };
        },
        // 교사 시연: 자음이 먼저 들어가고 모음이 붙으면서 틀 모양이 바뀐다
        async demo(t) {
          const d = decompose(t.syllable); if (!d) return;
          tiles.forEach((x) => { if (x.slot) sendHome(x); });
          paint(false); await kit.wait(400);
          for (const [ch, kind] of [[d.cho, 'c'], [d.jung, 'v']]) {
            const tile = find(ch, kind);
            L.appendChild(tile.g);
            place(tile); relayout(tile);
            await kit.animateTo(tile.g, center(slotRect(tile.slot)));
            kit.tick(); paint(true);
            await kit.wait(500);
          }
          celebrate();
          kit.announce(`${d.cho} + ${d.jung} = ${t.syllable}`);
        },
      };
    },
  });
})(window.PaperKit);
