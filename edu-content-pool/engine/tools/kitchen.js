/* 생활 설계 보드 — 식단(5가지 식품군 칸에 음식 카드 나누기), 하루 일과 배치, 조리·정리 순서, 체크리스트. 공통 카드 판(_cards.js) 위의 겉모양 + 직접 그린 checklist 모드.
 * 실과(식생활·옷·주거·가정생활·자원 관리·재배·동물 돌보기·발명), 통합교과(생활 습관), 체육·보건(안전 점검)에 쓴다.
 *
 * ── 모드 (toolOptions.mode, 없으면 sort) ───────────────────────────────────────────────────────────────────────────
 * | 모드      | 학생이 하는 일                                     | 옵션(필수 굵게)                                                          | target                                        |
 * |-----------|----------------------------------------------------|--------------------------------------------------------------------------|-----------------------------------------------|
 * | sort      | 음식 카드를 식품군 칸(식판)에 나누기                 | **cards**, slots(없으면 5가지 식품군 칸 — 아래), groups: false면 기본 칸 없음 | { sort: { 칸id: [카드id…] } } 칸에 넣지 않을 함정 카드도 됨 |
 * | order     | 조리·정리·빨래 순서, 하루 일과를 차례대로 놓기          | **cards**, slots(수 또는 ['아침 7시', '8시', …] 시간 이름)                  | { order: [카드id…] }                          |
 * | match     | 시간·장소·도구 옆에 알맞은 일 카드 놓기(일과표·쓰임)     | **cards** **slots**([{ id, label: '아침 7시' }])                           | { match: { 칸id: 카드id } }                    |
 * | pick      | 조건에 맞는 것 고르기(예: 단백질이 많은 음식)           | **cards**, basket                                                        | { pick: [카드id…] }                           |
 * | fill      | 문장 빈칸에 낱말 카드                               | **cards** **slots**                                                       | { fill: { 칸id: 카드id } }                     |
 * | checklist | 할 일 목록에서 알맞은 항목에 표시하기(조리 전 준비·정리 점검) | **items**(['손을 씻어요', …] 또는 [{ id, text, motif? }]), title?        | { checklist: [항목id…] } 정확히 이 항목들만 표시 / { selfCheck: true | [항목id…] } 스스로 한 일 점검(모두·목록 항목을 표시하면 맞음) |
 *
 * 5가지 식품군 칸(기본 slots, id → 칸 이름): 곡류 → '곡류'(밥·빵·국수·감자), 고기 → '고기·생선·달걀·콩류', 채소 → '채소·과일류', 우유 → '우유·유제품류', 유지 → '유지·당류'.
 *   target 예: { sort: { 곡류: ['밥'], 고기: ['달걀'], 채소: ['시금치'], 우유: ['우유'], 유지: ['버터'] } }
 * ── 카드 판 모드 옵션 ── _cards.js 옵션 전부(cards·slots·shuffle·live·instant·showBack·revealAfterCheck·hint1·success·print·cardW·cardH).
 *   카드 글이 흔한 음식 이름(밥·빵·국수·감자·고구마·생선·고기·닭고기·달걀·두부·콩·채소·당근·시금치·김치·오이·사과·바나나·귤·딸기·포도·우유·치즈·요구르트·버터·기름·설탕·꿀…)이고
 *   motif·big이 없으면 음식 그림이 저절로 붙는다(autoMotif: false면 끔). 이 파일이 더하는 모티프: rice 밥, bread 빵, fish 생선, meat 고기, egg 달걀(없으면), carrot 채소,
 *   fruit 과일, milk 우유, oil 기름, pot 냄비, broom 빗자루, shirt 옷.
 * ── checklist 옵션 ── items 2~10개(7개부터 두 줄), title: 목록 위 이름(예: '조리 전에 할 일'). 표시는 체크 상자 안에 칼선 체크 표시를 그린다.
 * ── 상태 ── 카드 판 모드: { at: { 카드id: 칸 번호|null } }     checklist: { checked: [항목id…] }
 * ── 판정·힌트 ── check(target) → { correct, incomplete?, feedback, hint }. hint 1 = 생각 방법(정답 없음) 2 = 어긋난 카드·항목 짚기 3 = 풀이.
 *   wrongAnswer: checklist = 표시하면 안 되는 항목 한 개 더(selfCheck는 오답이 없어 null), 카드 판 = _cards.js 규칙(이웃 두 장 바꿈·한 장 다른 칸).
 *   distance: checklist = 표시가 다른 항목 수, 카드 판 = 자리가 다른 카드 수.
 * ── 조작 ── checklist: 항목 누르기 / Tab·방향키로 옮기고 Enter·Space. 그 밖은 _cards.js 조작.
 * ── 활동지(print) ── checklist는 빈 체크 상자 목록, 식단은 빈 식판 칸(printCards:false면 카드 없이), 그 밖은 _cards.js 규칙.
 *
 * ── 짧은 예 ──
 *   식단:   toolOptions: { cards: ['밥', '달걀', '시금치', '우유', '버터'] }, target: { sort: { 곡류: ['밥'], 고기: ['달걀'], 채소: ['시금치'], 우유: ['우유'], 유지: ['버터'] } }
 *   순서:   toolOptions: { mode: 'order', cards: ['손 씻기', '재료 씻기', '썰기', '담기'] }, target: { order: ['손 씻기', '재료 씻기', '썰기', '담기'] }
 *   점검:   toolOptions: { mode: 'checklist', title: '조리 전에 할 일', items: [{ id: 'hand', text: '손을 비누로 씻어요' }, { id: 'apron', text: '앞치마를 입어요' }, { id: 'tv', text: '텔레비전을 켜요' }] },
 *           target: { checklist: ['hand', 'apron'] }
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
  const { el, textBlock } = C.util; const { W, PAD, INK, arr } = B;
  const pc = K.piece;

  // ---- 음식·생활 모티프 ----
  B.addMotif('rice', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-20 -6 Q-18 -22 0 -22 Q18 -22 20 -6 Z' }, color: 'cream', depth: 1, fill: '#FFFFFF' }); pc(st, g, { shape: { type: 'path', d: 'M-26 -6 H26 Q24 18 0 18 Q-24 18 -26 -6 Z' }, color: o.color || 'sky', depth: 2 }); });
  B.addMotif('bread', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-22 16 V-4 Q-26 -20 -8 -20 H8 Q26 -20 22 -4 V16 Z' }, color: o.color || 'peach', depth: 2 }); pc(st, g, { shape: { type: 'path', d: 'M-16 12 V-2 Q-18 -14 -6 -14 H6 Q18 -14 16 -2 V12 Z' }, color: 'buttercup', depth: 0, flat: true }); });
  B.addMotif('fish', (st, g, o) => { const c = o.color || 'sky'; pc(st, g, { shape: { type: 'poly', points: '14,0 30,-12 30,12' }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'ellipse', rx: 20, ry: 12 }, color: c, depth: 2 }); el('circle', { cx: -10, cy: -3, r: 2.2, fill: INK }, g); });
  B.addMotif('meat', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-20 -4 Q-20 -20 0 -18 Q22 -16 20 4 Q18 20 -2 18 Q-22 16 -20 -4 Z' }, color: o.color || 'rose', depth: 2 }); pc(st, g, { shape: { type: 'circle', r: 6, cx: 4, cy: 0 }, color: 'cream', depth: 0, fill: '#FFFDF8' }); });
  B.addMotif('egg', (st, g, o) => { pc(st, g, { shape: { type: 'ellipse', rx: 13, ry: 16 }, color: o.color || 'cream', depth: 2 }); });
  B.addMotif('carrot', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-6 -14 L6 -14 L0 24 Z' }, color: o.color || 'peach', depth: 2 }); pc(st, g, { shape: { type: 'path', d: 'M0 -14 Q-12 -28 -10 -18 Q-14 -26 -2 -14 Q2 -30 6 -16 Q14 -26 4 -14 Z' }, color: 'mint', depth: 1 }); });
  B.addMotif('fruit', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M0 -12 Q16 -22 20 -2 Q20 18 0 20 Q-20 18 -20 -2 Q-16 -22 0 -12 Z' }, color: o.color || 'rose', depth: 2 }); pc(st, g, { shape: { type: 'path', d: 'M1 -13 Q8 -26 16 -22 Q10 -14 1 -13 Z' }, color: 'mint', depth: 0 }); });
  B.addMotif('milk', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-14 22 V-8 L-8 -20 H8 L14 -8 V22 Z' }, color: o.color || 'cream', depth: 2, fill: '#FFFFFF' }); pc(st, g, { shape: { type: 'rect', x: -14, y: 0, w: 28, h: 12 }, color: 'sky', depth: 0, flat: true }); });
  B.addMotif('oil', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-10 22 V-2 Q-10 -10 -4 -14 V-22 H4 V-14 Q10 -10 10 -2 V22 Z' }, color: o.color || 'buttercup', depth: 2 }); });
  B.addMotif('pot', (st, g, o) => { pc(st, g, { shape: { type: 'rect', x: -22, y: -8, w: 44, h: 26, rx: 6 }, color: o.color || 'lavender', depth: 2 }); pc(st, g, { shape: { type: 'rect', x: -26, y: -14, w: 52, h: 8, rx: 4 }, color: o.color || 'lavender', depth: 1 }); pc(st, g, { shape: { type: 'rect', x: -5, y: -20, w: 10, h: 6, rx: 3 }, color: 'ink', depth: 0, flat: true }); });
  B.addMotif('broom', (st, g, o) => { pc(st, g, { shape: { type: 'rect', x: -2.5, y: -26, w: 5, h: 30 }, color: 'peach', depth: 1 }); pc(st, g, { shape: { type: 'path', d: 'M-14 22 L-8 4 H8 L14 22 Z' }, color: o.color || 'buttercup', depth: 2 }); });
  B.addMotif('shirt', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-8 -20 Q0 -14 8 -20 L24 -10 L18 0 L12 -4 V20 H-12 V-4 L-18 0 L-24 -10 Z' }, color: o.color || 'sky', depth: 2 }); });

  const FOOD = [
    [/밥|쌀|빵|국수|떡|감자|고구마|시리얼|라면|옥수수/, 'rice', 'cream'], [/생선|고등어|멸치|새우|오징어/, 'fish', 'sky'],
    [/고기|닭|햄|소시지|돼지|소고기/, 'meat', 'rose'], [/달걀|계란|두부|콩/, 'egg', 'cream'],
    [/채소|당근|시금치|배추|오이|양파|버섯|김치|토마토|나물|상추|브로콜리/, 'carrot', 'mint'], [/과일|사과|바나나|귤|딸기|포도|수박|복숭아|오렌지/, 'fruit', 'peach'],
    [/우유|치즈|요구르트|요거트|아이스크림/, 'milk', 'sky'], [/기름|버터|마요네즈|설탕|사탕|초콜릿|과자|꿀|잼/, 'oil', 'buttercup'],
  ];
  function foodize(list) {
    if (list == null || typeof list === 'number') return list;
    return arr(list).map((x) => {
      const o = typeof x === 'object' && x ? Object.assign({}, x) : { id: String(x), text: String(x) };
      if (o.motif || o.big) return o;
      const t = String(o.text != null ? o.text : o.id).trim();
      const m = t.length <= 8 ? FOOD.find(([re]) => re.test(t)) : null;
      if (m) { o.motif = m[1]; if (!o.color) o.color = m[2]; }
      return o;
    });
  }
  const GROUPS = [
    { id: '곡류', label: '곡류', motif: 'rice' }, { id: '고기', label: '고기·생선·달걀·콩류', motif: 'fish' }, { id: '채소', label: '채소·과일류', motif: 'carrot' },
    { id: '우유', label: '우유·유제품류', motif: 'milk' }, { id: '유지', label: '유지·당류', motif: 'oil' },
  ];

  // ---- checklist ----
  const checklist = {
    model(o) {
      const items = arr(o.items).map((x, i) => { const v = typeof x === 'object' && x ? x : { text: String(x) }; return { id: String(v.id != null ? v.id : v.text != null ? v.text : `c${i + 1}`), text: String(v.text != null ? v.text : v.id), motif: v.motif || null, big: v.big || null }; });
      const ids = items.map((x) => x.id); const byId = new Map(items.map((x) => [x.id, x]));
      let on = new Set();
      const selfOf = (t) => (t && t.selfCheck != null ? (t.selfCheck === true ? new Set(ids) : new Set(arr(t.selfCheck).map(String))) : null);
      const want = (t) => selfOf(t) || new Set(arr(t && t.checklist).map(String));
      const nm = (id) => { const s = byId.get(id).text; return s.length > 18 ? `${s.slice(0, 17)}…` : s; };
      const diff = (t) => { const w = want(t); const self = !!selfOf(t); return { self, extra: self ? [] : ids.filter((x) => on.has(x) && !w.has(x)), missing: ids.filter((x) => !on.has(x) && w.has(x)) }; };
      const M = {
        items, ids,
        hint1: '항목을 하나씩 소리 내어 읽고, 지금 하려는 일에 꼭 필요한지(또는 내가 실제로 했는지) 따져 본 뒤 표시해요.',
        getState: () => ({ checked: ids.filter((x) => on.has(x)) }),
        setState(s) { on = new Set(arr(s && s.checked).map(String).filter((x) => byId.has(x))); },
        toggle(id) { if (on.has(id)) on.delete(id); else on.add(id); return on.has(id); },
        isOn: (id) => on.has(id),
        verdict(t) {
          const d = diff(t);
          if (!on.size) return { correct: false, incomplete: true, feedback: '알맞은 항목을 눌러 표시해요.' };
          if (d.self) return d.missing.length ? { correct: false, incomplete: true, feedback: `아직 표시하지 않은 항목이 ${d.missing.length}개 있어요. 해 본 뒤 표시해요.` } : { correct: true, feedback: '모든 항목을 스스로 점검했어요.' };
          if (!d.extra.length && !d.missing.length) return { correct: true, feedback: '맞아요! 꼭 필요한 항목만 표시했어요.', bad: [] };
          return { correct: false, bad: d.extra, feedback: d.extra.length && d.missing.length ? '필요 없는 항목이 표시되었고, 빠진 항목도 있어요.' : d.extra.length ? `지금 할 일과 맞지 않는 항목을 ${d.extra.length}개 표시했어요.` : `꼭 해야 할 항목이 ${d.missing.length}개 더 있어요.` };
        },
        hintAt(t, lv) {
          const d = diff(t); const x = d.extra[0]; const y = d.missing[0];
          if (lv === 2) return x ? `‘${nm(x)}’ 항목이 지금 하려는 일에 정말 필요한지 다시 생각해 봐요.` : y ? '아직 표시하지 않은 항목 가운데 꼭 해야 할 것이 있어요.' : M.hint1;
          return x ? `‘${nm(x)}’ 항목은 표시하지 않아요.` : y ? `‘${nm(y)}’ 항목도 표시해요.` : M.hint1;
        },
        solution(t) { return { checked: ids.filter((x) => want(t).has(x)) }; },
        wrongAnswer(t) {
          if (selfOf(t)) return null;
          const w = want(t); const extra = ids.find((x) => !w.has(x));
          if (extra) return { checked: ids.filter((x) => w.has(x) || x === extra) };
          if (w.size > 1) { const drop = ids.find((x) => w.has(x)); return { checked: ids.filter((x) => w.has(x) && x !== drop) }; }
          return null;
        },
        distance(a, b) { const x = new Set(arr(a && a.checked)); const y = new Set(arr(b && b.checked)); let d = 0; for (const k of ids) if (x.has(k) !== y.has(k)) d++; return d; },
      };
      return M;
    },
    view(S) {
      const { o, kit, M, print, box } = S; const its = M.items; const n = its.length;
      const cols = n >= 7 ? 2 : 1; const rows = Math.ceil(n / cols); const rh = 64; const gap = 10;
      const cw = (W - 2 * PAD - gap * (cols - 1)) / cols;
      const titleH = o.title ? 36 : 0;
      const H = PAD + titleH + rows * (rh + gap) - gap + PAD;
      const st = kit.stage(box, { viewBox: [W, H], label: o.label || `${o.title || '체크리스트'}. 알맞은 항목을 눌러 표시해요.` });
      const L = st.layer('list');
      if (o.title) textBlock(L, o.title, { x: W / 2, y: PAD + 14, w: W - 40, h: 30, fs: 20, minFs: 15, maxLines: 1, fill: P.peach.dark });
      const tiles = its.map((it, i) => {
        const r = cols === 2 ? i % rows : i; const k = cols === 2 ? Math.floor(i / rows) : 0;
        const cx = PAD + k * (cw + gap) + cw / 2; const cy = PAD + titleH + r * (rh + gap) + rh / 2;
        const g = el('g', { class: 'cb-check' }, L); K.transform(g, { x: cx, y: cy });
        B.hit(g, -cw / 2, -rh / 2 - 4, cw, rh + 8);
        const p = kit.piece(st, g, { shape: { type: 'rect', w: cw, h: rh, rx: 14 }, color: 'cream', depth: 1, fill: '#FFFDF8' });
        const bx = -cw / 2 + 14;
        kit.piece(st, g, { shape: { type: 'rect', x: bx, y: -17, w: 34, h: 34, rx: 8 }, color: 'mint', depth: 1, fill: '#FFFFFF', stroke: print ? '#000' : P.mint.layer, strokeWidth: 2 });
        const mark = el('path', { d: `M${bx + 7} 0 L${bx + 15} 9 L${bx + 29} -9`, fill: 'none', stroke: P.mint.dark, 'stroke-width': 5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, g);
        let tx = bx + 46; const icon = it.motif || it.big;
        if (icon) { B.iconAt(st, g, it, tx + 20, 0, 40); tx += 48; }
        const tw = cw / 2 - 12 - tx;
        textBlock(g, it.text, { x: tx + tw / 2, y: 0, w: tw, h: rh - 10, fs: 18, minFs: 14, maxLines: 2, fill: INK });
        return { g, p, mark, it };
      });
      if (!print) tiles.forEach((t, i) => B.press(t.g, (via) => { const v = M.toggle(t.it.id); S.changed(via, `‘${t.it.text}’ ${v ? '표시했어요' : '표시를 지웠어요'}.`); }, { role: 'checkbox', onKey: (k) => B.roving(tiles.map((x) => x.g), i, k) }));
      return {
        paint() {
          tiles.forEach((t) => {
            const v = !print && M.isOn(t.it.id);
            t.mark.setAttribute('display', v ? 'inline' : 'none');
            t.p.face.setAttribute('fill', v ? P.mint.light : '#FFFDF8');
            t.p.face.setAttribute('stroke', v ? '#473B6B' : P.cream.layer); t.p.face.setAttribute('stroke-width', v ? 3 : 1.2);
            if (!print) { t.g.setAttribute('aria-checked', String(v)); t.g.setAttribute('aria-label', `${t.it.text}${v ? ', 표시함' : ''}`); }
          });
        },
        flag(r) { (r.bad || []).forEach((id) => { const t = tiles.find((x) => x.it.id === id); if (t) B.wobble(kit, t.g); }); },
      };
    },
  };

  K.registerTool('kitchen', B.tool('kitchen', {
    name: '생활 설계 보드',
    defaults: { mode: 'sort' },
    prep(o) {
      if (o.mode === 'sort' && o.slots == null && o.groups !== false) o.slots = GROUPS.map((g) => Object.assign({}, g));
      if (o.autoMotif !== false) o.cards = foodize(o.cards);
      return o;
    },
    custom: { checklist },
    card: {
      name: '생활 설계 보드',
      mode: 'sort',
      label: '생활 설계 보드. 카드를 알맞은 칸이나 차례에 놓아요.',
      hints: {
        // 식품군 문구는 식단 칸(기본 5가지 식품군 칸이거나 칸 이름이 식품군)일 때만 — 옷차림·가정일 나누기는 중립 글
        sort: ({ slots }) => (slots.length && slots.every((x) => GROUPS.some((g) => g.id === x.id || g.label === x.label) || /식품군|곡류|채소|과일|유제품|당류/.test(x.label))
          ? '음식마다 무엇으로 만들었는지, 몸에서 어떤 일을 하는지 떠올리고 같은 식품군 칸에 넣어요.'
          : '칸 이름을 먼저 소리 내어 읽고, 카드를 하나씩 보며 그 칸에 맞는 까닭을 따져 넣어요.'),
        order: '무엇을 먼저 해야 안전하고 깨끗한지 생각하며, 맨 처음 할 일부터 하나씩 놓아요.',
        match: '시간이나 장소 이름을 먼저 읽고, 그때 그곳에서 하기에 알맞은 일을 찾아 놓아요.',
        pick: '카드마다 문제의 조건에 맞는지 하나씩 따져 보고, 맞는 것만 골라요.',
        fill: '빈칸에 카드를 넣고 문장을 처음부터 소리 내어 읽어, 생활 속 쓰임과 맞는지 들어 봐요.',
      },
      prevWord: '일',
      cardSize({ mode }) { return mode === 'sort' ? { min: 96, max: 140 } : null; },
      // 나누기 칸: 칸 머리를 높여 그림 + 두 줄 이름(‘고기·생선·달걀·콩류’가 글자 중간에서 잘리지 않게)
      layout(ctx) {
        if (ctx.mode !== 'sort') return null;
        const L = C.layouts.sort(ctx); const extra = 20;
        const ys = [...new Set(ctx.slots.map((s) => s.y))].sort((a, b) => a - b);
        ctx.slots.forEach((s) => { const r = ys.indexOf(s.y); s.y += r * extra; s.h += extra; s.top += extra; s.tray = true; });
        return { H: L.H + ys.length * extra };
      },
      drawSlot(ctx, sl, g, i) {
        if (!sl.tray) return false;
        const { kit, st, print } = ctx; const tint = ['peach', 'mint', 'lavender', 'sky', 'buttercup', 'rose'][i % 6];
        kit.piece(st, g, { shape: { type: 'rect', x: sl.x, y: sl.y, w: sl.w, h: sl.h, rx: 16 }, color: tint, depth: 2, fill: P[tint].light, texture: !print });
        el('rect', { x: sl.x + 5, y: sl.y + sl.top - 4, width: sl.w - 10, height: sl.h - sl.top - 1, rx: 10, fill: 'none', stroke: print ? '#000' : P.lavender.layer, 'stroke-width': 1.6, 'stroke-dasharray': '7 6', 'pointer-events': 'none' }, g);
        const icon = sl.motif || sl.big; const iw = icon ? 34 : 0;
        if (icon) B.iconAt(st, g, sl, sl.x + 10 + iw / 2, sl.y + (sl.top - 4) / 2, iw);
        // 긴 이름은 가운데 '·' 뒤에서 한 번 끊어 두 줄로
        let name = sl.label; const dots = [...name.matchAll(/·/g)].map((m) => m.index);
        if (name.length > 6 && dots.length) { const mid = dots.reduce((a, b) => (Math.abs(b - name.length / 2) < Math.abs(a - name.length / 2) ? b : a)); name = `${name.slice(0, mid + 1)} ${name.slice(mid + 1)}`; }
        const tx = sl.x + 10 + iw + (sl.w - 20 - iw) / 2;
        textBlock(g, name, { x: tx, y: sl.y + (sl.top - 4) / 2, w: sl.w - 24 - iw, h: sl.top - 10, fs: 18, minFs: 14, maxLines: 2, fill: P[tint].dark });
        return true;
      },
    },
  }));
})(window.PaperKit);
