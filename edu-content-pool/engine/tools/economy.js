/* 시장·가게 놀이판 — 가격표를 보고 동전·지폐로 값 맞추기(pay), 예산 막대 안에서 물건 고르기(budget), 생산·소비·교환 나누기(sort).
 * 공통 카드 판(_cards.js) 위의 겉모양 + 직접 그린 두 모드(pay·budget). 사회(경제·시장·생산과 소비·합리적 선택), 실과(용돈 관리·자원), 수학(돈 계산·거스름돈)에 쓴다.
 *
 * ── 모드 (toolOptions.mode, 없으면 sort) ───────────────────────────────────────────────────────────────────────────
 * | 모드   | 학생이 하는 일                                         | 옵션(필수 굵게)                                                                  | target                                         |
 * |--------|--------------------------------------------------------|----------------------------------------------------------------------------------|------------------------------------------------|
 * | pay    | 지갑의 동전·지폐를 눌러 낸 돈 칸에 놓아 값 만들기          | item?({ text, motif?, price }) 또는 price, paid?(낸 돈 — 거스름돈 문제), coins?, wallet?, ask? | { pay: 금액, fewest?: true } fewest = 가장 적은 개수로 |
 * | budget | 예산 막대를 넘지 않게 물건 고르기                         | **items**([{ id, text, price, motif? }]), **budget**(예산), ask?                     | { budget: { max?, min?, must?: [id…], not?: [id…], count? } } max 없으면 예산 |
 * | sort   | 카드를 생산·소비·교환(또는 원하는 칸)으로 나누기              | **cards**, slots(없으면 ['생산', '소비', '교환'])                                     | { sort: { 칸id: [카드id…] } }                    |
 * | match·order·pick·fill | 공통 카드 판(예: 가게와 파는 물건 짝, 물건이 오기까지의 차례)  | _cards.js 표                                                              | _cards.js 표                                    |
 *
 * ── pay 옵션 ── coins: 쓸 돈 단위(기본 [10, 50, 100, 500, 1000]; 5000·10000·50000도 됨 — 1000부터 지폐 그림), wallet: { 단위: 최대 개수 }(기본 단위마다 9개),
 *   item: 가격표 { text: '연필', motif: 'pencil', price: 700 }(price만 줘도 됨), paid: 낸 돈(있으면 가격표에 '낸 돈'을 함께 보이고 학생은 거스름돈을 만든다 — target.pay = paid − price),
 *   ask: 가격표 아래 질문, showTotal: 거짓이면 '낸 돈 합계' 줄을 처음부터 숨긴다(직접 세기). revealAfterCheck면 합계는 맞힌 뒤에만 보인다.
 * ── budget 옵션 ── items 2~12개(값은 원), budget: 예산(원), ask: 막대 위 질문. 막대는 고른 물건 값의 합을 늘 보여 주고, 숫자 합계는 revealAfterCheck면 맞힌 뒤에만.
 * ── 카드 판 모드 옵션 ── _cards.js 옵션 전부. 이 파일이 더하는 모티프: coin 동전, bill 지폐, shop 가게, basket 장바구니, factory 공장, cart 수레, pencil 연필·book 책·ball 공(없으면).
 * ── 상태 ── pay: { n: { '10': 개수, '50': 개수, … } }     budget: { picked: [물건id…] }     카드 판 모드: { at: { 카드id: 칸 번호|null } }
 * ── 판정·힌트 ── check(target) → { correct, incomplete?, feedback, hint }. hint 1 = 생각 방법(금액·물건 이름 없음) 2 = 지금 놓은 것 짚기 3 = 풀이.
 *   wrongAnswer: pay = 큰 돈 하나를 작은 돈 여럿으로 바꿈(fewest) / 한 단위 아래 동전으로 착각(100원 대신 50원), budget = 예산을 넘게 한 개 더, 카드 판 = _cards.js 규칙.
 *   distance: pay = 개수 차의 합, budget = 고름이 다른 물건 수, 카드 판 = 자리가 다른 카드 수.
 * ── 조작 ── pay: 지갑의 돈을 누르면(Enter·Space·↑) 한 개 놓고, 낸 돈 칸의 돈을 누르면(Enter·Space) 한 개 뺌(지갑에서 ↓·Backspace도 뺌). budget: 물건 누르기 / Tab·방향키 + Enter.
 * ── 활동지(print) ── pay는 가격표·지갑과 빈 '낸 돈' 칸, budget은 물건 가격표와 빈 막대, 카드 판은 _cards.js 규칙.
 *
 * ── 짧은 예 ──
 *   pay:    toolOptions: { mode: 'pay', item: { text: '공책', motif: 'book', price: 1300 } }, target: { pay: 1300, fewest: true }
 *   거스름: toolOptions: { mode: 'pay', item: { text: '지우개', price: 300 }, paid: 1000, coins: [10, 50, 100, 500] }, target: { pay: 700 }
 *   budget: toolOptions: { mode: 'budget', budget: 3000, items: [{ id: 'pen', text: '연필', price: 500 }, { id: 'note', text: '공책', price: 1200 }, { id: 'toy', text: '장난감', price: 2500 }] },
 *           target: { budget: { must: ['note'], min: 1700 } }
 *   sort:   toolOptions: { cards: ['빵을 구워요', '빵을 사 먹어요', '빵과 우유를 바꿔요'] }, target: { sort: { 생산: ['빵을 구워요'], 소비: ['빵을 사 먹어요'], 교환: ['빵과 우유를 바꿔요'] } }
 */
(function (K) {
  'use strict';
  // ── cards-b 공통(이 블록은 emotion·wordcards·kitchen·economy 네 파일에 글자 하나 다르지 않게 들어 있다 — 먼저 읽힌 파일의 것을 쓴다.
  //    고칠 때는 네 파일을 함께 고친다. tests/edu-tools-cards-b.test.mjs가 네 블록이 같은지 본다) ──
  if (!K.cardsB) K.cardsB = (function () {
    const C = K.cards; const P = K.palette; const { el, textBlock } = C.util;
    const W = C.util.W; const PAD = C.util.PAD; const GAP = C.util.GAP; const INK = '#3D352E';
    const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
    const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
    const NO_MOTIF = new Set(['hills', 'wave', 'text']);
    const won = (n) => `${String(Math.round(Number(n) || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`;

    // 그림 조각: 모티프(PaperKit.scene)나 큰 글자를 (x,y) 가운데 size 크기 안에 그린다(_cards.js의 카드 그림과 같은 규칙)
    function iconAt(st, parent, d, x, y, size) {
      if (!d) return;
      if (d.big) {
        const b = String(d.big); const fs = Math.min(size * 0.82, b.length > 2 ? (size * 1.6) / b.length : size * 0.82);
        el('text', { x, y: y + fs * 0.35, 'text-anchor': 'middle', 'font-size': Math.round(fs), class: 'pk-text', fill: INK }, parent).textContent = b;
        return;
      }
      const fn = K.motifs[d.motif]; if (!fn || NO_MOTIF.has(d.motif)) return;
      const outer = el('g', { 'pointer-events': 'none' }, parent); const inner = el('g', null, outer);
      fn(st, inner, { x: 0, y: 0, s: 1, color: d.motifColor || undefined });
      let bb = null; try { bb = inner.getBBox(); } catch (_) { bb = null; }
      if (!bb || !bb.width) bb = { x: -40, y: -40, width: 80, height: 80 };
      const s = Math.min(size / bb.width, size / bb.height);
      if (s > 1.5) inner.querySelectorAll('[filter]').forEach((n) => n.removeAttribute('filter'));
      K.transform(outer, { x: x - (bb.x + bb.width / 2) * s, y: y - (bb.y + bb.height / 2) * s, s });
    }
    // 모티프 더하기 — 이미 있으면 덮지 않는다
    function addMotif(name, draw) {
      if (K.motifs[name]) return;
      K.motifs[name] = (st, p, o) => { o = o || {}; const g = el('g', null, p); draw(st, g, o); K.transform(g, { x: o.x || 0, y: o.y || 0, s: o.s || 1 }); return g; };
    }
    // 누를 수 있는 조각: 클릭·Enter·Space = onPress, 그 밖의 키는 onKey(key)가 참을 돌려주면 쓴 것으로 본다
    function press(g, onPress, opt) {
      opt = opt || {};
      g.setAttribute('tabindex', opt.tabindex == null ? '0' : String(opt.tabindex));
      g.setAttribute('role', opt.role || 'button');
      g.style.cursor = 'pointer';
      g.addEventListener('click', () => onPress('tap'));
      g.addEventListener('keydown', (e) => {
        let used = true;
        if (e.key === 'Enter' || e.key === ' ') onPress('keyboard');
        else if (!(opt.onKey && opt.onKey(e.key))) used = false;
        if (used) { e.preventDefault(); e.stopPropagation(); }
      });
    }
    // 방향키로 형제 조각 사이를 옮겨 다니기
    function roving(list, i, key) {
      const n = list.length; let j = null;
      if (key === 'ArrowRight' || key === 'ArrowDown') j = (i + 1) % n;
      else if (key === 'ArrowLeft' || key === 'ArrowUp') j = (i - 1 + n) % n;
      else if (key === 'Home') j = 0; else if (key === 'End') j = n - 1;
      if (j == null) return false;
      list[j].focus({ preventScroll: true }); return true;
    }
    function hit(g, x, y, w, h) { return el('rect', { x, y, width: w, height: h, class: 'pk-hit' }, g); }
    function wobble(kit, g) {
      if (!g) return;
      g.classList.add('pk-no');
      kit.tween(500, (q) => kit.transform(g, { r: Math.sin(q * Math.PI * 4) * 4 * (1 - q), cx: 0, cy: 0 })).then(() => kit.transform(g, { r: 0 }));
      setTimeout(() => g.classList.remove('pk-no'), 2500);
    }
    // 머리 카드(상황·가격표·낱말 그림): 왼쪽 그림 + 글. 높이 h
    function headCard(kit, st, parent, d) {
      const g = el('g', { class: 'cb-head' }, parent);
      const color = P[d.color] ? d.color : 'cream';
      kit.piece(st, g, { shape: { type: 'rect', x: d.x, y: d.y, w: d.w, h: d.h, rx: 16 }, color, depth: 2, fill: color === 'cream' ? '#FFFDF8' : P[color].light, texture: !d.print });
      const icon = d.motif || d.big;
      const iw = icon ? Math.min(d.h - 16, 76) : 0;
      if (icon) iconAt(st, g, d, d.x + 14 + iw / 2, d.y + d.h / 2, iw);
      const tx = d.x + (icon ? iw + 24 : 16); const tw = d.x + d.w - 16 - tx;
      if (d.text) textBlock(g, d.text, { x: tx + tw / 2, y: d.y + d.h / 2 - (d.sub ? 12 : 0), w: tw, h: d.h - (d.sub ? 34 : 12), fs: d.fs || 20, minFs: 15, maxLines: d.sub ? 2 : 3, fill: color === 'cream' ? INK : P[color].dark });
      if (d.sub) textBlock(g, d.sub, { x: tx + tw / 2, y: d.y + d.h - 20, w: tw, h: 24, fs: 17, minFs: 13, maxLines: 1, fill: color === 'cream' ? '#6E3B21' : P[color].dark });
      return g;
    }
    // 영어 발음 — 누를 때만 부른다(자동 읽기 없음). 'ok' | 'off'(소리 꺼짐) | 'none'(이 기기에 음성 없음)
    function speak(kit, text, lang) {
      if (!text) return 'none';
      if (kit.soundOn && !kit.soundOn()) return 'off';
      try {
        const ss = window.speechSynthesis;
        if (!ss || typeof SpeechSynthesisUtterance === 'undefined') return 'none';
        ss.cancel();
        const L = lang || 'en-US'; const u = new SpeechSynthesisUtterance(String(text));
        u.lang = L; u.rate = 0.8;
        const vs = ss.getVoices() || [];
        const v = vs.find((x) => String(x.lang).replace('_', '-').toLowerCase() === L.toLowerCase()) || vs.find((x) => /^en/i.test(x.lang));
        if (v) u.voice = v;
        ss.speak(u); return 'ok';
      } catch (_) { return 'none'; }
    }
    function speakSay(kit, msg, text) {
      const r = speak(kit, text);
      const t = r === 'off' ? '소리가 꺼져 있어요. 위의 소리 단추를 켜고 다시 눌러요.' : r === 'none' ? '이 기기에서는 소리가 나지 않아요. 선생님께 읽어 달라고 해요.' : '';
      if (msg) msg.textContent = t;
      if (t) kit.announce(t);
      return r;
    }
    function htmlButton(box, icon, label, onClick) {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'pl-btn pl-btn--small cb-ctl';
      b.style.cssText = 'min-height:44px;margin:8px 8px 0 0';
      const i = document.createElement('i'); i.className = `fi ${icon}`; i.setAttribute('aria-hidden', 'true');
      b.append(i, document.createTextNode(` ${label}`));
      b.addEventListener('click', onClick);
      box.appendChild(b); return b;
    }
    function note(box) {
      const p = document.createElement('p'); p.className = 'cb-msg'; p.setAttribute('aria-live', 'polite');
      p.style.cssText = 'margin:6px 2px 0;min-height:1.4em;font-weight:700;line-height:1.45;word-break:keep-all';
      box.appendChild(p); return p;
    }
    // 힌트 단계: level(요청 번호)은 attempts+1을 넘지 않는다
    function levelOf(opts) {
      const lv = opts && Number.isInteger(opts.level) ? opts.level : 1;
      const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
      return Math.max(1, Math.min(3, lv, a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1));
    }

    // ---- 직접 만든 모드(카드 판이 아닌 것)의 교구 계약 ----
    // cm = { model(o) → { getState, setState(s|null), verdict(t) → { correct, incomplete?, feedback, bad? }, hintAt(t, lv), solution(t) → 상태|null, wrongAnswer(t) → 상태|null, distance(a,b), hint1 },
    //        view(S) → { paint(), flag?(verdict) } }   S = { id, o, kit, M, box, print, reveal, revealed, target, changed(via, 알림글) }
    function custom(id, cm, box, o, kit) {
      const M = cm.model(o);
      const S = { id, o, kit, M, box, print: !!o.print, reveal: !!o.revealAfterCheck, revealed: false, target: null };
      S.changed = (via, text) => { S.revealed = false; S.view.paint(); kit.recorder.log(id, Object.assign({ via }, M.getState())); if (text) kit.announce(text); };
      S.view = cm.view(S);
      S.view.paint();
      const tg = (t) => t || S.target || {};
      return {
        getState: () => M.getState(),
        setState(s) { M.setState(s); S.revealed = false; S.view.paint(); },
        setTarget(t) { S.target = t || null; S.view.paint(); },
        reset() { M.setState(null); S.revealed = false; S.view.paint(); },
        solve(t) { const s = M.solution(tg(t)); if (s) M.setState(s); S.view.paint(); },
        check(t, opts) {
          const quiet = !!(opts && opts.forHint);
          const r = M.verdict(tg(t));
          if (!quiet) {
            if (r.correct) { S.revealed = true; kit.tick('ok'); } else if (!r.incomplete) { kit.tick('no'); if (S.view.flag) S.view.flag(r); }
            S.view.paint(); kit.recorder.log(id, Object.assign({ via: 'check' }, M.getState()));
          }
          const out = { correct: !!r.correct, feedback: r.correct ? (o.success || r.feedback) : r.feedback };
          if (r.incomplete) out.incomplete = true;
          if (!r.correct) out.hint = M.hintAt(tg(t), 2);
          return out;
        },
        hint(t, opts) {
          const tt = tg(t);
          if (M.verdict(tt).correct) return { hint: '지금 상태가 맞아요.', correct: true };
          const lv = levelOf(opts);
          return { hint: lv <= 1 ? (o.hint1 || M.hint1) : M.hintAt(tt, lv), correct: false };
        },
        wrongAnswer: (t) => M.wrongAnswer(tg(t)),
        distance: (a, b) => M.distance(a, b),
        async demo(t) {
          M.setState(null); S.revealed = false; S.view.paint(); await kit.wait(400);
          const s = M.solution(tg(t)); if (s) M.setState(s); kit.tick(); S.revealed = true; S.view.paint();
        },
      };
    }
    // 카드 판 교구의 목표를 겉모양 목표에서 카드 판 목표로 바꿔 넘긴다(예: { spell: 'cat' } → { fill: … })
    function mapTargets(inst, map) {
      const out = Object.assign({}, inst);
      for (const k of ['check', 'solve', 'hint', 'wrongAnswer', 'achievable', 'demo', 'setTarget']) {
        if (typeof inst[k] === 'function') out[k] = (t, ...rest) => inst[k](t == null ? t : map(t), ...rest);
      }
      return out;
    }
    // 겉 교구 등록: spec = { name, defaults?, card: _cards 겉모양 spec, prep?(o) → 카드 판 옵션, target?(t, o) → 카드 판 목표, custom?: { 모드: cm } }
    function tool(id, spec) {
      const cardDef = C.define(id, spec.card);
      const prep = (o) => (spec.prep ? spec.prep(Object.assign({}, o)) : o);
      const tmap = (o) => (t) => (spec.target ? spec.target(t, o) : t);
      const def = {
        name: spec.name,
        create(box, o0, kit) {
          const o = Object.assign({}, spec.defaults || {}, o0 || {});
          const cm = spec.custom && spec.custom[o.mode];
          if (cm) return custom(id, cm, box, o, kit);
          const o2 = prep(o);
          const inst = cardDef.create(box, o2, kit);
          return spec.target ? mapTargets(inst, tmap(o2)) : inst;
        },
        // DOM 없는 판정 모델(노드 검사용): 모드와 상관없이 같은 모양
        model(o0) {
          const o = Object.assign({}, spec.defaults || {}, o0 || {});
          const cm = spec.custom && spec.custom[o.mode];
          if (cm) {
            const M = cm.model(o);
            return { mode: o.mode, getState: M.getState, setState: M.setState, verdict: M.verdict, solve: (t) => M.setState(M.solution(t)), solution: M.solution,
              hint: (t, lv) => (lv <= 1 ? (o.hint1 || M.hint1) : M.hintAt(t, lv)), wrongAnswer: M.wrongAnswer, distance: M.distance };
          }
          const o2 = prep(o); const M = C.model(o2, spec.card); const mt = tmap(o2);
          return { mode: M.mode, options: o2, getState: M.getState, setState: M.setState, verdict: (t) => { const j = M.judge(mt(t)); return { correct: j.correct, incomplete: !!j.incomplete, feedback: j.feedback }; }, solve: (t) => M.apply(M.solution(mt(t))), solution: (t) => { const keep = M.getState(); M.apply(M.solution(mt(t))); const s = M.getState(); M.setState(keep); return s; },
            hint: (t, lv) => M.hintAt(mt(t), lv, lv >= 3 ? 2 : lv - 1), wrongAnswer: (t) => M.wrongAnswer(mt(t)), distance: M.distance };
        },
      };
      K.registerTool(id, def);
      return def;
    }
    // 부분집합 훑기(물건 14개까지)
    function subsets(n, fn) { const lim = 1 << Math.min(n, 14); for (let m = 0; m < lim; m++) fn(m); }

    return { tool, custom, iconAt, addMotif, press, roving, hit, wobble, headCard, speak, speakSay, htmlButton, note, levelOf, subsets, won, arr, reduce, W, PAD, GAP, INK };
  })();
  const B = K.cardsB; const C = K.cards; const P = K.palette;
  const { el, textBlock } = C.util; const { W, PAD, INK, arr, won } = B;
  const pc = K.piece;

  // ---- 시장 모티프 ----
  B.addMotif('coin', (st, g, o) => { pc(st, g, { shape: { type: 'circle', r: 20 }, color: o.color || 'buttercup', depth: 2 }); el('circle', { cx: 0, cy: 0, r: 14, fill: 'none', stroke: '#FFFDF8', 'stroke-width': 2 }, g); });
  B.addMotif('bill', (st, g, o) => { pc(st, g, { shape: { type: 'rect', w: 54, h: 30, rx: 4 }, color: o.color || 'mint', depth: 2 }); el('circle', { cx: 0, cy: 0, r: 8, fill: 'none', stroke: '#FFFDF8', 'stroke-width': 2 }, g); });
  B.addMotif('shop', (st, g, o) => { pc(st, g, { shape: { type: 'rect', x: -24, y: -6, w: 48, h: 30, rx: 2 }, color: 'cream', depth: 2, fill: '#FFFDF8' }); pc(st, g, { shape: { type: 'path', d: 'M-28 -6 L-22 -22 H22 L28 -6 Z' }, color: o.color || 'rose', depth: 1 }); pc(st, g, { shape: { type: 'rect', x: -7, y: 6, w: 14, h: 18 }, color: 'peach', depth: 0, flat: true }); });
  B.addMotif('basket', (st, g, o) => { el('path', { d: 'M-14 -6 Q0 -28 14 -6', fill: 'none', stroke: (P[o.color] || P.peach).layer, 'stroke-width': 4 }, g); pc(st, g, { shape: { type: 'path', d: 'M-24 -6 H24 L18 20 H-18 Z' }, color: o.color || 'peach', depth: 2 }); });
  B.addMotif('factory', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-26 22 V-2 L-12 -12 V-2 L2 -12 V-2 L16 -12 V-24 H24 V22 Z' }, color: o.color || 'lavender', depth: 2 }); pc(st, g, { shape: { type: 'rect', x: -18, y: 6, w: 10, h: 10 }, color: 'buttercup', depth: 0, flat: true }); pc(st, g, { shape: { type: 'rect', x: 2, y: 6, w: 10, h: 10 }, color: 'buttercup', depth: 0, flat: true }); });
  B.addMotif('pencil', (st, g, o) => { pc(st, g, { shape: { type: 'rect', x: -24, y: -6, w: 36, h: 12, rx: 2 }, color: o.color || 'buttercup', depth: 1 }); pc(st, g, { shape: { type: 'poly', points: '12,-6 26,0 12,6' }, color: 'peach', depth: 1 }); pc(st, g, { shape: { type: 'rect', x: -30, y: -6, w: 7, h: 12, rx: 2 }, color: 'rose', depth: 1 }); });
  B.addMotif('book', (st, g, o) => { const c = o.color || 'mint'; pc(st, g, { shape: { type: 'path', d: 'M0 -14 Q-12 -20 -26 -16 V16 Q-12 12 0 18 Z' }, color: c, depth: 2 }); pc(st, g, { shape: { type: 'path', d: 'M0 -14 Q12 -20 26 -16 V16 Q12 12 0 18 Z' }, color: c, depth: 2 }); });
  B.addMotif('ball', (st, g, o) => { pc(st, g, { shape: { type: 'circle', r: 20 }, color: o.color || 'rose', depth: 2 }); el('path', { d: 'M-20 0 H20 M0 -20 Q-12 0 0 20', stroke: '#FFFDF8', 'stroke-width': 3, fill: 'none' }, g); });
  B.addMotif('cart', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-26 -14 H-18 L-12 8 H18 L24 -8 H-16' }, color: o.color || 'sky', depth: 1 }); pc(st, g, { shape: { type: 'circle', r: 5, cx: -8, cy: 16 }, color: 'ink', depth: 0 }); pc(st, g, { shape: { type: 'circle', r: 5, cx: 14, cy: 16 }, color: 'ink', depth: 0 }); });

  const SLOTS3 = [{ id: '생산', label: '생산', motif: 'factory', sub: '만들거나 기르기' }, { id: '소비', label: '소비', motif: 'basket', sub: '사서 쓰기' }, { id: '교환', label: '교환', motif: 'coin', sub: '바꾸거나 사고팔기' }];
  const MONEY = { 10: 'peach', 50: 'cream', 100: 'cream', 500: 'buttercup', 1000: 'sky', 5000: 'peach', 10000: 'mint', 50000: 'buttercup' };

  // ---- pay: 값 맞추기 ----
  const pay = {
    model(o) {
      const denoms = [...new Set(arr(o.coins && o.coins.length ? o.coins : [10, 50, 100, 500, 1000]).map(Number).filter((v) => Number.isInteger(v) && v > 0))].sort((a, b) => a - b);
      const cap = (d) => { const w = o.wallet && o.wallet[d]; return Number.isInteger(w) && w >= 0 ? w : 9; };
      let n = Object.fromEntries(denoms.map((d) => [d, 0]));
      const total = (m) => denoms.reduce((s, d) => s + d * ((m || n)[d] || 0), 0);
      const count = (m) => denoms.reduce((s, d) => s + ((m || n)[d] || 0), 0);
      // 가장 적은 개수로 amount 만들기(단위마다 개수 제한) — 동적 계획법
      function fewest(amount) {
        if (!(amount > 0)) return null;
        const g = denoms.reduce((a, d) => { let x = a; let y = d; while (y) [x, y] = [y, x % y]; return x; }, 0);
        if (amount % g) return null;
        const U = amount / g; if (U > 20000) return null;
        // 뒤 단위부터: 앞 단위들만으로 만든 최소 개수 표를 보고 이 단위를 몇 개 쓸지 고른다
        const out = Object.fromEntries(denoms.map((d) => [d, 0]));
        let v = U;
        for (let i = denoms.length - 1; i >= 0; i--) {
          const d = denoms[i]; const u = d / g;
          // i번 단위까지 쓴 최적값 표를 다시 만든다
          const tab = new Array(U + 1).fill(Infinity); tab[0] = 0;
          for (let j = 0; j < i; j++) { const dj = denoms[j]; const uj = dj / g; const nx = tab.slice(); for (let w = 1; w <= U; w++) for (let k = 1; k <= cap(dj) && k * uj <= w; k++) { const c = tab[w - k * uj] + k; if (c < nx[w]) nx[w] = c; } for (let w = 0; w <= U; w++) tab[w] = nx[w]; }
          let bestK = 0; let bestC = Infinity;
          for (let k = 0; k <= cap(d) && k * u <= v; k++) { const c = tab[v - k * u] + k; if (c < bestC) { bestC = c; bestK = k; } }
          out[d] = bestK; v -= bestK * u;
        }
        return v === 0 ? out : null;
      }
      const amountOf = (t) => Number(t && t.pay);
      const parts = (m) => denoms.slice().reverse().filter((d) => m[d]).map((d) => `${won(d)} ${m[d]}개`).join(', ');
      const M = {
        denoms, cap, total, count,
        hint1: '큰 돈부터 낼 수 있는 만큼 놓고, 남은 값을 그다음 작은 돈으로 채워요. 놓은 돈은 큰 돈부터 차례로 세어 봐요.',
        getState: () => ({ n: Object.fromEntries(denoms.map((d) => [String(d), n[d] || 0])) }),
        setState(s) { const src = (s && s.n) || {}; n = Object.fromEntries(denoms.map((d) => { const v = Number(src[d] != null ? src[d] : src[String(d)]); return [d, Number.isInteger(v) ? Math.max(0, Math.min(cap(d), v)) : 0]; })); },
        add(d, k) { n[d] = Math.max(0, Math.min(cap(d), (n[d] || 0) + k)); return n[d]; },
        get: (d) => n[d] || 0,
        verdict(t) {
          const a = amountOf(t); const s = total();
          if (!s) return { correct: false, incomplete: true, feedback: '지갑의 돈을 눌러 낸 돈 칸에 놓아요.' };
          if (s > a) return { correct: false, dir: 1, feedback: '놓은 돈이 내야 할 값보다 많아요. 큰 돈부터 다시 세어 봐요.' };
          if (s < a) return { correct: false, dir: -1, feedback: '놓은 돈이 내야 할 값보다 적어요. 얼마가 모자란지 세어 봐요.' };
          if (t && t.fewest) { const f = fewest(a); if (f && count() > count(f)) return { correct: false, dir: 0, feedback: '값은 맞아요. 그런데 작은 돈 여러 개를 큰 돈 하나로 바꿔 더 적은 개수로 낼 수 있어요.' }; }
          return { correct: true, feedback: `맞아요! ${won(a)}을 알맞게 냈어요.` };
        },
        hintAt(t, lv) {
          const a = amountOf(t); const s = total(); const f = fewest(a);
          if (lv >= 3) return f ? `${parts(f)}를 놓으면 돼요.` : M.hint1;
          if (!s) return '먼저 지갑에서 가장 큰 돈 가운데 값보다 크지 않은 것을 찾아 놓아요.';
          if (s > a) return `지금 놓은 돈은 모두 ${won(s)}이에요. 내야 할 값보다 많아요.`;
          if (s < a) return `지금 놓은 돈은 모두 ${won(s)}이에요. 내야 할 값보다 적어요.`;
          return '같은 값을 큰 돈 하나로 바꿀 수 있는 묶음(예: 같은 동전 다섯 개나 열 개)이 있는지 찾아봐요.';
        },
        solution(t) { const f = fewest(amountOf(t)); return f ? { n: Object.fromEntries(denoms.map((d) => [String(d), f[d]])) } : null; },
        wrongAnswer(t) {
          const f = fewest(amountOf(t)); if (!f) return null;
          const st = (m) => ({ n: Object.fromEntries(denoms.map((d) => [String(d), m[d] || 0])) });
          if (t && t.fewest) {
            // 큰 돈 하나를 작은 돈 여럿으로(같은 값, 개수만 많음)
            for (let i = denoms.length - 1; i > 0; i--) {
              const d = denoms[i]; if (!f[d]) continue;
              for (let j = i - 1; j >= 0; j--) { const e = denoms[j]; const k = d / e; if (Number.isInteger(k) && f[e] + k <= cap(e)) { const m = Object.assign({}, f); m[d] -= 1; m[e] += k; return st(m); } }
            }
          }
          // 한 단위 아래 돈으로 착각(100원 자리에 50원)
          for (let i = denoms.length - 1; i > 0; i--) { const d = denoms[i]; const e = denoms[i - 1]; if (f[d] && f[e] < cap(e)) { const m = Object.assign({}, f); m[d] -= 1; m[e] += 1; return st(m); } }
          const d0 = denoms[0]; if (f[d0] < cap(d0)) { const m = Object.assign({}, f); m[d0] += 1; return st(m); }
          return null;
        },
        distance(x, y) { const a = (x && x.n) || {}; const b = (y && y.n) || {}; return denoms.reduce((s, d) => s + Math.abs((a[d] || 0) - (b[d] || 0)), 0); },
      };
      return M;
    },
    view(S) {
      const { o, kit, M, print, box } = S; const ds = M.denoms; const k = ds.length;
      const item = o.item || {}; const price = item.price != null ? item.price : o.price;
      const headH = 92; const headY = PAD;
      let y = PAD + headH + 10;
      const askY = o.ask ? y + 12 : 0; if (o.ask) y += 30;
      const colW = Math.min(104, (W - 2 * PAD - 8 * (k - 1)) / k); const x0 = (W - (k * colW + (k - 1) * 8)) / 2;
      const walletY = y + 22; const wh = 92; y = walletY + wh + 14;
      const trayY = y + 22; const th = 118; y = trayY + th + 8;
      const totalY = y + 16; y += 34;
      const H = y + PAD;
      const st = kit.stage(box, { viewBox: [W, H], label: o.label || '돈 놓기 판. 지갑의 돈을 눌러 낸 돈 칸에 놓아요.' });
      const L = st.layer('pay');
      const sub = price != null ? (o.paid != null ? `값 ${won(price)} · 낸 돈 ${won(o.paid)}` : `값 ${won(price)}`) : (o.paid != null ? `낸 돈 ${won(o.paid)}` : null);
      B.headCard(kit, st, L, { x: PAD, y: headY, w: W - 2 * PAD, h: headH, text: item.text || (o.paid != null ? '거스름돈을 만들어요' : '이 값을 돈으로 내요'), sub, motif: item.motif || 'shop', big: item.big, color: 'buttercup', fs: 22, print });
      if (o.ask) textBlock(L, o.ask, { x: W / 2, y: askY, w: W - 40, h: 26, fs: 18, minFs: 14, maxLines: 1, fill: P.lavender.dark });
      el('text', { x: PAD + 4, y: walletY - 8, 'font-size': 16, class: 'pk-text', fill: P.peach.dark }, L).textContent = print ? '지갑' : '지갑 — 눌러서 놓아요';
      el('text', { x: PAD + 4, y: trayY - 8, 'font-size': 16, class: 'pk-text', fill: P.peach.dark }, L).textContent = print ? '낸 돈(그려 넣어요)' : '낸 돈 — 눌러서 빼요';
      kit.piece(st, L, { shape: { type: 'rect', x: PAD, y: trayY, w: W - 2 * PAD, h: th, rx: 16 }, color: 'cream', depth: 2, fill: '#FFF9EE' });
      const money = (g, d, x, yy, s) => {
        const col = MONEY[d] || 'cream'; const bill = d >= 1000;
        const p = bill ? kit.piece(st, g, { shape: { type: 'rect', x: x - 34 * s, y: yy - 18 * s, w: 68 * s, h: 36 * s, rx: 4 }, color: col, depth: 1, fill: col === 'cream' ? '#ECE6DA' : P[col].base })
          : kit.piece(st, g, { shape: { type: 'circle', r: (d >= 500 ? 25 : d >= 100 ? 23 : 21) * s, cx: x, cy: yy }, color: col, depth: 1, fill: col === 'cream' ? '#E2DDD3' : P[col].base });
        el('text', { x, y: yy + 6 * s, 'text-anchor': 'middle', 'font-size': Math.round((String(d).length >= 5 ? 14 : 17) * s), class: 'pk-text', fill: INK }, g).textContent = String(d);
        return p;
      };
      const wallet = []; const trays = [];
      ds.forEach((d, i) => {
        const cx = x0 + i * (colW + 8) + colW / 2;
        const g = el('g', { class: 'cb-wallet' }, L);
        B.hit(g, cx - colW / 2, walletY, colW, wh);
        kit.piece(st, g, { shape: { type: 'rect', x: cx - colW / 2, y: walletY, w: colW, h: wh, rx: 14 }, color: 'mint', depth: 1, fill: P.mint.light });
        money(g, d, cx, walletY + 38, 1);
        // 좁은 칸(단위가 많을 때)은 돈 그림의 수로 충분하다 — '10,000원'이 칸 밖으로 넘치지 않게
        if (colW >= 80) el('text', { x: cx, y: walletY + wh - 10, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: P.mint.dark }, g).textContent = won(d);

        wallet.push(g);
        const tg = el('g', { class: 'cb-tray' }, L);
        B.hit(tg, cx - colW / 2, trayY, colW, th);
        const pile = el('g', null, tg); const cnt = el('text', { x: cx, y: trayY + th - 12, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: INK }, tg);
        trays.push({ g: tg, pile, cnt, cx, d });
      });
      const totalT = el('text', { x: W / 2, y: totalY + 6, 'text-anchor': 'middle', 'font-size': 19, class: 'pk-text', fill: P.lavender.dark }, L);
      if (!print) {
        const say = (d, v, put) => `${won(d)}을 ${put ? '놓았어요' : '뺐어요'}. ${won(d)} ${v}개.`;
        wallet.forEach((g, i) => B.press(g, (via) => { const d = ds[i]; const v = M.add(d, 1); S.changed(via, say(d, v, true)); }, {
          onKey: (key) => {
            const d = ds[i];
            if (key === 'ArrowUp') { S.changed('keyboard', say(d, M.add(d, 1), true)); return true; }
            if (key === 'ArrowDown' || key === 'Backspace' || key === 'Delete') { S.changed('keyboard', say(d, M.add(d, -1), false)); return true; }
            return B.roving(wallet, i, key);
          },
        }));
        trays.forEach((t, i) => B.press(t.g, (via) => { if (!M.get(t.d)) return; S.changed(via, say(t.d, M.add(t.d, -1), false)); }, { tabindex: -1 }));
        wallet.forEach((g, i) => g.setAttribute('aria-label', `지갑의 ${won(ds[i])}. 눌러서 한 개 놓아요. 아래 방향키로 빼요.`));
      }
      return {
        paint() {
          trays.forEach((t) => {
            while (t.pile.firstChild) t.pile.removeChild(t.pile.firstChild);
            const v = print ? 0 : M.get(t.d); const show = Math.min(v, 5);
            for (let j = 0; j < show; j++) money(t.pile, t.d, t.cx + (j - (show - 1) / 2) * 3, trayY + 34 + j * 7, t.d >= 1000 ? 0.92 : 0.86);
            t.cnt.textContent = v ? `${v}개` : '';
            if (!print) { t.g.setAttribute('tabindex', v ? '0' : '-1'); t.g.setAttribute('aria-label', `낸 돈 칸의 ${won(t.d)} ${v}개. 눌러서 한 개 빼요.`); }
          });
          const s = M.total();
          const showTotal = !print && o.showTotal !== false && (S.reveal ? S.revealed : true);
          totalT.textContent = print ? '낸 돈: ________원' : showTotal ? `낸 돈 합계: ${won(s)}` : '낸 돈을 큰 돈부터 세어 보세요.';
        },
        flag() { trays.forEach((t) => { if (M.get(t.d)) B.wobble(kit, t.g); }); },
      };
    },
  };

  // ---- budget: 예산 막대 안에서 고르기 ----
  const budget = {
    model(o) {
      const items = arr(o.items).map((x, i) => { const v = typeof x === 'object' && x ? x : { text: String(x) }; return { id: String(v.id != null ? v.id : v.text != null ? v.text : `i${i + 1}`), text: String(v.text != null ? v.text : v.id), price: Math.max(0, Number(v.price) || 0), motif: v.motif || null, big: v.big || null }; });
      const ids = items.map((x) => x.id); const byId = new Map(items.map((x) => [x.id, x]));
      let on = new Set();
      const sum = (set) => items.reduce((s, x) => s + (set.has(x.id) ? x.price : 0), 0);
      const rule = (t) => { const b = (t && t.budget) || {}; return { max: b.max != null ? Number(b.max) : Number(o.budget) || Infinity, min: b.min != null ? Number(b.min) : 0, must: arr(b.must).map(String), not: arr(b.not).map(String), count: Number.isInteger(b.count) ? b.count : null }; };
      const fails = (set, r) => {
        const s = sum(set); const out = [];
        if (s > r.max) out.push('over');
        if (r.must.some((x) => !set.has(x))) out.push('must');
        if (r.not.some((x) => set.has(x))) out.push('not');
        if (r.count != null && set.size !== r.count) out.push('count');
        if (s < r.min) out.push('min');
        return out;
      };
      const nm = (id) => { const s = byId.get(id).text; return s.length > 14 ? `${s.slice(0, 13)}…` : s; };
      function best(t) {
        const r = rule(t); let pick = null; let pv = -1;
        B.subsets(items.length, (m) => { const set = new Set(ids.filter((_, i) => m & (1 << i))); if (!set.size || fails(set, r).length) return; const s = sum(set); if (s > pv || (s === pv && set.size < pick.size)) { pv = s; pick = set; } });
        return pick;
      }
      const M = {
        items, byId, sum: () => sum(on), max: (t) => rule(t).max,
        hint1: '물건마다 값을 더해 가며, 막대가 예산 선을 넘지 않게 꼭 필요한 것부터 골라요.',
        getState: () => ({ picked: ids.filter((x) => on.has(x)) }),
        setState(s) { on = new Set(arr(s && s.picked).map(String).filter((x) => byId.has(x))); },
        toggle(id) { if (on.has(id)) on.delete(id); else on.add(id); return on.has(id); },
        isOn: (id) => on.has(id),
        verdict(t) {
          if (!on.size) return { correct: false, incomplete: true, feedback: '사고 싶은 물건을 눌러 골라요.' };
          const r = rule(t); const f = fails(on, r); const s = sum(on);
          if (!f.length) return { correct: true, feedback: `맞아요! 예산 안에서 알맞게 골랐어요. 쓴 돈은 ${won(s)}이에요.`, bad: [] };
          const bad = f[0] === 'not' ? r.not.filter((x) => on.has(x)) : [];
          const fb = { over: `예산보다 ${won(s - r.max)} 많아요. 꼭 필요하지 않은 물건을 빼 봐요.`, must: '꼭 사야 할 물건이 빠졌어요. 문제를 다시 읽어 봐요.', not: '이번에 사지 않기로 한 물건이 들어 있어요.', count: `물건을 ${r.count}개 골라야 해요.`, min: '예산이 아직 넉넉해요. 문제에 맞게 더 골라 봐요.' }[f[0]];
          return { correct: false, bad, feedback: fb };
        },
        hintAt(t, lv) {
          const r = rule(t); const f = fails(on, r); const s = sum(on);
          if (lv >= 3) { const b = best(t); return b ? `${[...b].map((x) => `‘${nm(x)}’`).join(', ')}을(를) 고르면 돼요.` : M.hint1; }
          if (!on.size) return '먼저 문제에서 꼭 사야 한다고 한 물건이 있는지 찾아봐요.';
          if (f[0] === 'over') return `지금 고른 물건 값을 더하면 ${won(s)}이에요. 막대가 예산 선을 넘었어요.`;
          if (f[0] === 'must') return '문제에서 꼭 사라고 한 물건을 다시 찾아봐요.';
          if (f[0] === 'not') return `‘${nm(r.not.find((x) => on.has(x)))}’은(는) 이번에 사지 않기로 했어요.`;
          if (f[0] === 'count') return `고른 물건이 ${on.size}개예요. 문제에서 몇 개를 고르라고 했는지 다시 읽어 봐요.`;
          return `지금 ${won(s)}을 썼어요. 예산 안에서 더 고를 수 있어요.`;
        },
        solution(t) { const b = best(t); return b ? { picked: ids.filter((x) => b.has(x)) } : null; },
        wrongAnswer(t) {
          const b = best(t); if (!b) return null; const r = rule(t);
          const outside = items.filter((x) => !b.has(x.id) && !r.not.includes(x.id)).sort((x, y) => x.price - y.price);
          for (const x of outside) { const set = new Set(b); set.add(x.id); if (sum(set) > r.max) return { picked: ids.filter((i) => set.has(i)) }; }
          const nx = r.not.find((x) => byId.has(x)); if (nx) { const set = new Set(b); set.add(nx); return { picked: ids.filter((i) => set.has(i)) }; }
          if (r.must.length && b.size > 1) { const set = new Set(b); set.delete(r.must[0]); return { picked: ids.filter((i) => set.has(i)) }; }
          for (const x of outside) { const set = new Set(b); set.add(x.id); if (fails(set, r).length) return { picked: ids.filter((i) => set.has(i)) }; }
          return null;
        },
        distance(a, b) { const x = new Set(arr(a && a.picked)); const y = new Set(arr(b && b.picked)); let d = 0; for (const k of ids) if (x.has(k) !== y.has(k)) d++; return d; },
      };
      return M;
    },
    view(S) {
      const { o, kit, M, print, box } = S; const its = M.items; const n = its.length;
      const bud = Number(o.budget) || its.reduce((s, x) => s + x.price, 0);
      const cols = n <= 3 ? n : n === 4 ? 4 : n <= 6 ? 3 : 4; const rows = Math.ceil(n / cols); const gap = 10;
      const cw = Math.min(150, (W - 2 * PAD - gap * (cols - 1)) / cols); const ch = 122;
      let y = PAD; const askY = o.ask ? y + 12 : 0; if (o.ask) y += 30;
      const barLabelY = y + 14; const barY = y + 28; const barH = 34; y = barY + barH + 34;
      const gridY = y; y += rows * (ch + gap) - gap;
      const H = y + PAD;
      const st = kit.stage(box, { viewBox: [W, H], label: o.label || `예산 막대. 예산 ${won(bud)}을 넘지 않게 물건을 골라요.` });
      const L = st.layer('budget');
      if (o.ask) textBlock(L, o.ask, { x: W / 2, y: askY, w: W - 40, h: 26, fs: 18, minFs: 14, maxLines: 1, fill: P.lavender.dark });
      // 막대: 전체 = 예산의 1.5배, 예산 선은 2/3 자리
      const bx = PAD + 4; const bw = W - 2 * PAD - 8; const full = bud * 1.5; const lineX = bx + (bw * bud) / full;
      el('text', { x: bx, y: barLabelY, 'font-size': 17, class: 'pk-text', fill: P.peach.dark }, L).textContent = `예산 ${won(bud)}`;
      const spentT = el('text', { x: bx + bw, y: barLabelY, 'text-anchor': 'end', 'font-size': 17, class: 'pk-text', fill: P.lavender.dark }, L);
      kit.piece(st, L, { shape: { type: 'rect', x: bx, y: barY, w: bw, h: barH, rx: 10 }, color: 'cream', depth: 1, fill: '#FFFDF8', stroke: print ? '#000' : P.cream.layer, strokeWidth: 1.5 });
      const fillOk = el('rect', { x: bx + 2, y: barY + 3, width: 0, height: barH - 6, rx: 8, fill: P.mint.base }, L);
      const fillOver = el('rect', { x: lineX, y: barY + 3, width: 0, height: barH - 6, fill: P.rose.base }, L);
      el('path', { d: `M${lineX} ${barY - 6} V${barY + barH + 6}`, stroke: print ? '#000' : '#702830', 'stroke-width': 3, 'stroke-dasharray': '5 4' }, L);
      el('text', { x: lineX, y: barY + barH + 24, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#702830' }, L).textContent = '예산 선';
      const tiles = its.map((it, i) => {
        const r = Math.floor(i / cols); const k = i % cols; const inRow = Math.min(cols, n - r * cols);
        const x0 = (W - (inRow * cw + (inRow - 1) * gap)) / 2;
        const cx = x0 + k * (cw + gap) + cw / 2; const cy = gridY + r * (ch + gap) + ch / 2;
        const g = el('g', { class: 'cb-item' }, L); K.transform(g, { x: cx, y: cy });
        B.hit(g, -cw / 2, -ch / 2, cw, ch);
        const tint = ['sky', 'peach', 'lavender', 'mint', 'buttercup', 'rose'][i % 6];
        const p = kit.piece(st, g, { shape: { type: 'rect', w: cw, h: ch, rx: 14 }, color: tint, depth: 1, fill: P[tint].light });
        if (it.motif || it.big) B.iconAt(st, g, it, 0, -28, 46);
        textBlock(g, it.text, { x: 0, y: it.motif || it.big ? 14 : -10, w: cw - 14, h: 26, fs: 18, minFs: 13, maxLines: 1, fill: P[tint].dark });
        kit.piece(st, g, { shape: { type: 'rect', x: -cw / 2 + 12, y: ch / 2 - 36, w: cw - 24, h: 26, rx: 13 }, color: 'buttercup', depth: 0, fill: '#FFFDF8', stroke: print ? '#000' : P.buttercup.layer, strokeWidth: 1.5 });
        el('text', { x: 0, y: ch / 2 - 17, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: INK }, g).textContent = won(it.price);
        const mark = el('g', null, g);
        kit.piece(st, mark, { shape: { type: 'circle', r: 14, cx: cw / 2 - 16, cy: -ch / 2 + 16 }, color: 'mint', depth: 1 });
        el('path', { d: `M${cw / 2 - 23} ${-ch / 2 + 16} L${cw / 2 - 18} ${-ch / 2 + 21} L${cw / 2 - 9} ${-ch / 2 + 11}`, fill: 'none', stroke: '#173A2C', 'stroke-width': 3.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, mark);
        return { g, p, mark, it, tint };
      });
      if (!print) tiles.forEach((t, i) => B.press(t.g, (via) => { const v = M.toggle(t.it.id); S.changed(via, `‘${t.it.text}’ ${v ? '골랐어요' : '뺐어요'}.`); }, { role: 'checkbox', onKey: (k) => B.roving(tiles.map((x) => x.g), i, k) }));
      return {
        paint() {
          const s = print ? 0 : M.sum();
          const okW = Math.min(s, bud) / full * bw; const overW = Math.max(0, Math.min(s, full) - bud) / full * bw;
          fillOk.setAttribute('width', Math.max(0, okW - 2)); fillOver.setAttribute('width', overW);
          const showNum = !print && (S.reveal ? S.revealed : true);
          spentT.textContent = print ? '쓴 돈: ________원' : showNum ? `쓴 돈 ${won(s)}` : '쓴 돈: 직접 더해 봐요';
          tiles.forEach((t) => {
            const v = !print && M.isOn(t.it.id);
            t.mark.setAttribute('display', v ? 'inline' : 'none');
            t.p.face.setAttribute('stroke', v ? '#473B6B' : 'rgba(255,255,255,0.55)'); t.p.face.setAttribute('stroke-width', v ? 3.5 : 1);
            if (!print) { t.g.setAttribute('aria-checked', String(v)); t.g.setAttribute('aria-label', `${t.it.text} ${won(t.it.price)}${v ? ', 고름' : ''}`); }
          });
        },
        flag(r) { (r.bad && r.bad.length ? r.bad : []).forEach((id) => { const t = tiles.find((x) => x.it.id === id); if (t) B.wobble(kit, t.g); }); },
      };
    },
  };

  K.registerTool('economy', B.tool('economy', {
    name: '시장·가게 놀이판',
    defaults: { mode: 'sort' },
    prep(o) {
      if (o.mode === 'sort' && o.slots == null) o.slots = SLOTS3.map((s) => Object.assign({}, s));
      return o;
    },
    custom: { pay, budget },
    card: {
      name: '시장·가게 놀이판',
      mode: 'sort',
      label: '시장·가게 놀이판. 카드를 알맞은 칸에 놓아요.',
      hints: {
        sort: '카드의 일이 무엇을 만들거나 기르는 일인지, 사서 쓰는 일인지, 서로 바꾸거나 사고파는 일인지 따져 칸에 넣어요.',
        match: '가게나 사람의 이름을 먼저 읽고, 그곳에서 하는 일이나 파는 물건을 찾아 짝 지어요.',
        order: '물건이 처음 만들어지는 곳에서 우리 손에 오기까지 어떤 차례를 거치는지 떠올려 놓아요.',
        pick: '카드마다 문제의 조건에 맞는지 하나씩 따져 보고, 맞는 것만 골라요.',
        fill: '빈칸에 카드를 넣고 문장을 처음부터 소리 내어 읽어, 경제 생활의 말과 맞는지 들어 봐요.',
      },
    },
  }));
})(window.PaperKit);
