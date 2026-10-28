/* 마음 날씨 카드 — 상황 카드에 마음(감정) 날씨 카드를 짝 짓고(match), 감정의 크기를 눈금으로 고르고(scale), 상황에서 어떻게 할지 골라 결과를 본다(branch).
 * 공통 카드 판(_cards.js) 위의 겉모양 + 직접 그린 두 모드(scale·branch). 도덕·통합교과(마음·감정·배려·약속·규칙·공동체), 국어(인물의 마음), 체육(경기 예절)에 쓴다.
 *
 * ── 모드 (toolOptions.mode, 없으면 match) ─────────────────────────────────────────────────────────────────────────
 * | 모드   | 학생이 하는 일                                 | 옵션(필수 굵게)                                                    | target                                   |
 * |--------|------------------------------------------------|--------------------------------------------------------------------|------------------------------------------|
 * | match  | 왼쪽 상황 글 옆에 알맞은 마음 날씨 카드 놓기       | **cards**(마음 카드) **slots**([{ id, label: '상황 글', motif? }])    | { match: { 칸id: 카드id | [되는 카드id…] } } |
 * | sort   | 상황·말 카드를 마음 날씨 칸으로 나누기             | **cards** **slots**(['기쁨', '슬픔', …] — 마음 이름이면 날씨 그림이 붙음) | { sort: { 칸id: [카드id…] } }              |
 * | pick   | 조건에 맞는 말·행동 카드만 고르기(예: 친구를 배려하는 말) | **cards**, basket                                                | { pick: [카드id…] }                       |
 * | order  | 마음이 바뀐 차례대로 놓기                         | **cards**, slots                                                    | { order: [카드id…] }                      |
 * | fill   | 말풍선·문장 빈칸에 마음 낱말 넣기                  | **cards** **slots**([{ id, label: '___ 마음이 들었어요.' }])          | { fill: { 칸id: 카드id } }                 |
 * | scale  | 상황을 읽고 마음의 크기를 눈금에서 고르기           | situation(상황 글), feeling(마음 이름 — 날씨 그림), motif?, steps(3~7, 기본 5), scaleLabels?, ask?, after?(맞힌 뒤 보이는 한 문장) | { level: 수 | [가장 작은 수, 가장 큰 수] | 'any' } 'any' = 어느 크기든 맞음(내 마음 돌아보기) |
 * | branch | 상황에서 어떻게 할지 고르고 그 결과 보기            | situation, **choices**([{ id, text, result?, mood?, why? }]), ask?, who? | { choice: 보기id | [되는 보기id…] }        |
 *
 * ── 카드 판 모드 옵션 ── _cards.js 머리 표의 옵션 전부(cards·slots·shuffle·live·instant·showBack·revealAfterCheck·hint1·success·print·cardW·cardH).
 *   카드·칸 글이 마음 이름(기쁨·신남·설렘·슬픔·속상함·외로움·화남·짜증·걱정·불안·무서움·놀람·부끄러움·고마움·미안함·뿌듯함·편안함…)을 담고 motif·big이 없으면
 *   마음 날씨 그림이 저절로 붙는다(기쁨 sun, 신남 rainbow, 슬픔 rain, 화남 storm, 걱정 cloud, 무서움 moon, 놀람 wind, 고마움 flower, 뿌듯함 star, 편안함 leaf).
 *   weather: false 이면 붙이지 않는다. 이 파일이 더하는 모티프: rain 비, storm 천둥 구름, rainbow 무지개, wind 바람.
 * ── scale 옵션 ── steps 눈금 수, scaleLabels: ['조금', '', '', '', '아주 많이'] 또는 { 1: '조금', 5: '아주 많이' }(기본: 처음 '조금', 끝 '아주 많이'),
 *   ask: 눈금 위 질문(기본 '마음의 크기는 얼마나 될까요?'), after: 맞힌 뒤 보이는 한 문장(예: '이만큼 화가 나면 숨을 세 번 크게 쉬어요.').
 * ── branch 옵션 ── choices 2~4개. result = 그렇게 했을 때 생기는 일(고르면 바로 보임 — revealAfterCheck면 맞힌 뒤에만), mood = 결과의 마음 이름(날씨 그림),
 *   why = 그 보기를 골라 틀렸을 때 피드백 한 문장, ask: 보기 위 질문(기본 '어떻게 하면 좋을까요?'), who: 상황 카드 인물 이름(가명),
 *   motif: 상황 카드 그림(모티프 이름 — 예 'leaf'·'flower'·'tree'. 없으면 feeling의 날씨 그림, 그것도 없으면 'house'). 활동지(print)에도 이 그림이 찍힌다.
 *
 * ── 상태 (getState / setState) ──
 *   카드 판 모드: { at: { 카드id: 칸 번호|null } }    scale: { level: 1~steps | null }    branch: { choice: 보기id | null }
 * ── 판정·힌트 ── check(target) → { correct, incomplete?, feedback, hint }. hint(target, { level, attempts }) 1 = 생각 방법(정답 없음) 2 = 고른 것 짚기 3 = 풀이.
 *   wrongAnswer: scale = 반대쪽 끝 눈금(마음 크기를 지나치게 크게/작게), branch = 첫 번째 틀린 보기, 카드 판 모드 = _cards.js 규칙.
 *   distance: scale = 눈금 차, branch = 0/1, 카드 판 = 자리가 다른 카드 수.
 * ── 조작 ── scale: 눈금 막대를 누르거나, 눈금에서 방향키(←→↑↓)·숫자키·Enter(한 칸 올림). branch: 보기 누르기 / Tab·방향키로 옮기고 Enter.
 * ── 활동지(print) ── scale은 빈 눈금(동그라미 칠 자리), branch는 보기와 빈 결과 칸, 카드 판은 _cards.js 규칙.
 *
 * ── 짧은 예 ──
 *   match:  toolOptions: { cards: ['기쁨', '속상함', '화남'], slots: [{ id: 's1', label: '친구가 내 그림을 칭찬했어요' }, { id: 's2', label: '아끼던 연필을 잃어버렸어요' }] },
 *           target: { match: { s1: '기쁨', s2: '속상함' } }
 *   scale:  toolOptions: { mode: 'scale', situation: '줄을 서 있는데 친구가 새치기를 했어요.', feeling: '화남' }, target: { level: [2, 4] }
 *   branch: toolOptions: { mode: 'branch', situation: '친구가 넘어져 무릎을 다쳤어요.', choices: [{ id: 'help', text: '괜찮냐고 묻고 보건실에 같이 가요', result: '친구가 고맙다고 웃어요', mood: '고마움' },
 *           { id: 'laugh', text: '넘어진 모습을 보고 웃어요', result: '친구가 더 속상해해요', mood: '속상함', why: '웃음을 들은 친구의 마음을 떠올려 봐요.' }] },
 *           target: { choice: 'help' }
 */
(function (K) {
  'use strict';
  // 받침에 맞는 조사(수 뒤도: '3을', '2를')
  const jo = (w, a, b) => { const s = String(w).replace(/[’'"”)\]\s]+$/, ''); const c = s.charCodeAt(s.length - 1); if (c >= 0xac00 && c <= 0xd7a3) return `${w}${(c - 0xac00) % 28 ? a : b}`; return `${w}${/[013678]$/.test(s) ? a : b}`; };
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
  const pc = K.piece; const GAP2 = 12;

  // ---- 마음 날씨 모티프 ----
  const cloudD = 'M-24 8 Q-32 8 -30 -1 Q-29 -9 -19 -9 Q-17 -21 -3 -21 Q10 -21 13 -11 Q25 -13 27 -2 Q29 8 19 8 Z';
  B.addMotif('rain', (st, g, o) => {
    pc(st, g, { shape: { type: 'path', d: cloudD }, color: o.color || 'sky', depth: 2 });
    [-14, 0, 14].forEach((x, i) => pc(st, g, { shape: { type: 'path', d: `M${x} ${14 + (i % 2) * 5} q -5 8 0 11 q 5 -3 0 -11 Z` }, color: 'sky', depth: 0 }));
  });
  B.addMotif('storm', (st, g, o) => {
    pc(st, g, { shape: { type: 'path', d: cloudD }, color: o.color || 'lavender', depth: 2 });
    pc(st, g, { shape: { type: 'poly', points: '2,6 -8,22 0,22 -6,36 10,16 2,16 8,6' }, color: 'buttercup', depth: 1 });
  });
  B.addMotif('rainbow', (st, g, o) => {
    const band = (R, r) => `M${-R} 10 A${R} ${R} 0 0 1 ${R} 10 L${r} 10 A${r} ${r} 0 0 0 ${-r} 10 Z`;
    pc(st, g, { shape: { type: 'path', d: band(30, 23) }, color: 'rose', depth: 1 });
    pc(st, g, { shape: { type: 'path', d: band(23, 16) }, color: 'buttercup', depth: 1 });
    pc(st, g, { shape: { type: 'path', d: band(16, 9) }, color: o.color || 'sky', depth: 1 });
  });
  B.addMotif('wind', (st, g, o) => {
    const col = (P[o.color] || P.sky).layer;
    [['M-28 -10 H8 Q20 -10 18 -20 Q15 -27 8 -22', 0], ['M-30 2 H18 Q30 2 28 12 Q25 20 17 15', 0], ['M-22 14 H-2', 0]].forEach(([d]) => el('path', { d, fill: 'none', stroke: col, 'stroke-width': 5, 'stroke-linecap': 'round' }, g));
  });

  // 마음 이름 → 날씨 그림·색. 카드·칸 글에 이 말이 들어 있으면 쓴다
  const MOODS = [
    [/기쁘|기쁨|기뻐|즐거|행복|좋아/, 'sun', 'buttercup'], [/신나|신남|신난|설레|설렘/, 'rainbow', 'peach'],
    [/슬프|슬픔|슬퍼|속상|서운|외로/, 'rain', 'sky'], [/화나|화남|화가|짜증|분노|억울/, 'storm', 'rose'],
    [/걱정|불안|긴장|답답/, 'cloud', 'lavender'], [/무섭|무서|두려|겁/, 'moon', 'lavender'], [/놀라|놀람|놀란|당황/, 'wind', 'sky'],
    [/부끄|창피|쑥스/, 'flower', 'rose'], [/고마|고맙|감사/, 'flower', 'mint'], [/미안/, 'leaf', 'peach'],
    [/뿌듯|자랑|자신/, 'star', 'buttercup'], [/편안|편해|평온|차분|든든/, 'leaf', 'mint'],
  ];
  const moodOf = (s) => { const t = String(s || '').trim(); const m = MOODS.find(([re]) => re.test(t)); return m ? { motif: m[1], color: m[2] } : null; };
  const feltBoard = ({ cards, slots }) => cards.some((c) => moodOf(c.name)) || slots.some((x) => moodOf(x.label));
  function weatherize(list, isCard) {
    if (list == null || typeof list === 'number') return list;
    return arr(list).map((x) => {
      const o = typeof x === 'object' && x ? Object.assign({}, x) : (isCard ? { id: String(x), text: String(x) } : { label: String(x) });
      if (o.motif || o.big) return o;
      // 마음 낱말 카드만(짧은 글) — 상황 글에 그림을 붙이면 답이 보인다
      const t = String(isCard ? (o.text != null ? o.text : o.id) : o.label).trim();
      const m = t.length <= 6 ? moodOf(t) : null;
      if (!m) return o;
      o.motif = m.motif; if (isCard && !o.color) o.color = m.color;
      return o;
    });
  }

  // ---- scale: 마음 크기 눈금 ----
  const TINTS = ['mint', 'sky', 'buttercup', 'peach', 'rose'];
  const scale = {
    model(o) {
      const n = Math.max(3, Math.min(7, Number.isInteger(o.steps) ? o.steps : 5));
      let level = null;
      const range = (t) => {
        const L = t && t.level;
        if (L === 'any' || L == null) return [1, n];
        if (Array.isArray(L) && L.length) return [Math.max(1, Math.min(...L)), Math.min(n, Math.max(...L))];
        const v = Number(L); return Number.isFinite(v) ? [Math.max(1, Math.min(n, v)), Math.max(1, Math.min(n, v))] : [1, n];
      };
      const M = {
        n, range,
        hint1: '인물이 겪은 일이 얼마나 큰 일인지, 그때 몸에서 어떤 느낌(가슴이 두근두근, 주먹이 꽉)이 들지 떠올려 보고 눈금을 골라요.',
        getState: () => ({ level }),
        setState(s) { const v = s && s.level; level = Number.isInteger(v) && v >= 1 && v <= n ? v : null; },
        verdict(t) {
          if (level == null) return { correct: false, incomplete: true, feedback: '눈금을 눌러 마음의 크기를 하나 골라요.' };
          const [a, b] = range(t);
          if (level >= a && level <= b) return { correct: true, feedback: '맞아요! 그 상황에 어울리는 마음의 크기예요.' };
          return { correct: false, dir: level > b ? 1 : -1, feedback: level > b ? '그 일에 비해 마음의 크기를 크게 골랐어요. 정말 그만큼 큰 일인지 다시 생각해 봐요.' : '그 일에 비해 마음의 크기를 작게 골랐어요. 인물이 겪은 일을 다시 읽어 봐요.' };
        },
        hintAt(t, lv) {
          const v = M.verdict(t); const [a, b] = range(t);
          if (v.incomplete) return lv >= 3 ? `눈금 ${a === b ? jo(a, '을', '를') : `${a}에서 ${b} 사이를`} 골라요.` : '아직 고르지 않았어요. 먼저 눈금 하나를 눌러요.';
          if (lv === 2) return v.dir > 0 ? `지금 고른 눈금 ${level}은(는) 조금 커요. 같은 일을 겪은 친구라면 마음이 얼마나 움직일지 떠올려 봐요.` : `지금 고른 눈금 ${level}은(는) 조금 작아요. 인물이 얼마나 놀라거나 속상했을지 떠올려 봐요.`;
          return `이 상황에는 눈금 ${a === b ? jo(a, '이', '가') : `${a}에서 ${b} 사이가`} 어울려요.`;
        },
        solution(t) { const [a, b] = range(t); return { level: Math.round((a + b) / 2) }; },
        wrongAnswer(t) { const [a, b] = range(t); if (b < n) return { level: n }; if (a > 1) return { level: 1 }; return null; },
        distance(x, y) { return Math.abs(((x && x.level) || 0) - ((y && y.level) || 0)); },
      };
      return M;
    },
    view(S) {
      const { o, kit, M, print, box } = S; const n = M.n;
      const labels = Array.from({ length: n }, (_, i) => {
        const L = o.scaleLabels;
        if (Array.isArray(L)) return L[i] ? String(L[i]) : '';
        if (L && typeof L === 'object') return L[i + 1] ? String(L[i + 1]) : '';
        return i === 0 ? '조금' : i === n - 1 ? '아주 많이' : '';
      });
      const mood = moodOf(o.feeling) || {};
      const headH = o.situation ? 100 : 0; let y = PAD;
      const headY = y; if (headH) y += headH + 12;
      const askY = y + 14; y += 36;
      const gap = 10; const tw = Math.min(90, (W - 2 * PAD - gap * (n - 1)) / n); const x0 = (W - (n * tw + (n - 1) * gap)) / 2;
      const hMin = 64; const hMax = 136; const base = y + hMax;
      const numY = base + 24; y = numY + 8;
      const hasLabel = labels.some(Boolean); const labY = y + 14; if (hasLabel) y += 28;
      const afterY = y + 8; if (o.after) y += 62;
      const H = y + PAD;
      const st = kit.stage(box, { viewBox: [W, H], label: o.label || `마음 크기 눈금. ${n}칸 가운데 마음의 크기를 골라요.` });
      const L = st.layer('scale');
      if (headH) B.headCard(kit, st, L, { x: PAD, y: headY, w: W - 2 * PAD, h: headH, text: o.situation, sub: o.feeling ? `마음: ${o.feeling}` : (o.who || null), motif: o.motif || mood.motif || 'cloud', color: mood.color || 'cream', print });
      textBlock(L, o.ask || '마음의 크기는 얼마나 될까요?', { x: W / 2, y: askY, w: W - 40, h: 28, fs: 19, minFs: 15, maxLines: 1, fill: P.lavender.dark });
      const slider = el('g', { class: 'cb-scale', role: 'slider', 'aria-valuemin': 1, 'aria-valuemax': n, 'aria-label': '마음 크기 눈금' }, L);
      const tiles = [];
      for (let i = 0; i < n; i++) {
        const h = hMin + ((hMax - hMin) * i) / (n - 1); const cx = x0 + i * (tw + gap) + tw / 2;
        const g = el('g', { class: 'cb-step' }, slider); K.transform(g, { x: cx, y: base - h / 2 });
        B.hit(g, -tw / 2 - gap / 2, -(hMax - h / 2) - 8, tw + gap, hMax + 40);
        const tint = TINTS[Math.round((i * (TINTS.length - 1)) / (n - 1))];
        const p = kit.piece(st, g, { shape: { type: 'rect', w: tw, h, rx: 12 }, color: tint, depth: 1, fill: '#FFFDF8' });
        el('text', { x: 0, y: h / 2 + 24, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: INK }, g).textContent = String(i + 1);
        if (labels[i]) textBlock(g, labels[i], { x: i === 0 ? -tw / 2 : i === n - 1 ? tw / 2 : 0, y: labY - (base - h / 2), w: Math.min(150, tw + 60), h: 24, fs: 16, minFs: 13, maxLines: 1, fill: P.lavender.dark, anchor: i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle' });
        tiles.push({ g, p, tint });
        if (!print) g.addEventListener('click', () => set(i + 1, 'tap'));
      }
      let after = null;
      if (o.after) {
        after = el('g', { class: 'cb-after' }, L);
        kit.piece(st, after, { shape: { type: 'rect', x: PAD + 20, y: afterY, w: W - 2 * PAD - 40, h: 50, rx: 14 }, color: 'mint', depth: 1 });
        textBlock(after, o.after, { x: W / 2, y: afterY + 25, w: W - 2 * PAD - 70, h: 46, fs: 17, minFs: 13, maxLines: 2, fill: P.mint.dark });
      }
      function set(v, via) {
        M.setState({ level: v });
        S.changed(via, `마음 크기 ${v}을(를) 골랐어요.`);
      }
      if (!print) {
        slider.setAttribute('tabindex', '0');
        slider.addEventListener('keydown', (e) => {
          const cur = M.getState().level || 0; let v = null;
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp' || e.key === 'Enter' || e.key === ' ') v = cur >= n ? 1 : cur + 1;
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') v = cur <= 1 ? 1 : cur - 1;
          else if (e.key === 'Home') v = 1; else if (e.key === 'End') v = n;
          else if (/^[1-9]$/.test(e.key) && Number(e.key) <= n) v = Number(e.key);
          if (v == null) return;
          e.preventDefault(); e.stopPropagation(); set(v, 'keyboard');
        });
      }
      return {
        paint() {
          const lv = M.getState().level;
          tiles.forEach((t, i) => {
            const on = lv != null && i < lv;
            t.p.face.setAttribute('fill', on ? P[t.tint].base : '#FFFDF8');
            t.p.face.setAttribute('stroke', lv === i + 1 ? '#473B6B' : P[t.tint].layer); t.p.face.setAttribute('stroke-width', lv === i + 1 ? 3.5 : 1.5);
          });
          slider.setAttribute('aria-valuenow', lv == null ? 0 : lv);
          slider.setAttribute('aria-valuetext', lv == null ? '아직 고르지 않음' : `${n}칸 가운데 ${lv}`);
          if (after) after.setAttribute('display', S.revealed && !print ? 'inline' : 'none');
        },
        flag() { const lv = M.getState().level; if (lv) B.wobble(kit, tiles[lv - 1].g); },
      };
    },
  };

  // ---- branch: 어떻게 할까? 고르고 결과 보기 ----
  const branch = {
    model(o) {
      const choices = arr(o.choices).map((c, i) => {
        const x = typeof c === 'object' && c ? c : { text: String(c) };
        return { id: String(x.id != null ? x.id : x.text != null ? x.text : `c${i + 1}`), text: String(x.text != null ? x.text : x.id), result: x.result || null, mood: x.mood || null, why: x.why || null, motif: x.motif || null };
      });
      const byId = new Map(choices.map((c) => [c.id, c]));
      let choice = null;
      const ok = (t) => new Set(arr(t && t.choice).map(String));
      const nm = (c) => (c.text.length > 18 ? `${c.text.slice(0, 17)}…` : c.text);
      const M = {
        choices, byId,
        hint1: '보기마다 그렇게 했을 때 나와 다른 사람의 마음이 어떻게 될지 차례로 떠올려 보고 골라요.',
        getState: () => ({ choice }),
        setState(s) { const v = s && s.choice != null ? String(s.choice) : null; choice = v && byId.has(v) ? v : null; },
        verdict(t) {
          if (choice == null) return { correct: false, incomplete: true, feedback: '어떻게 할지 보기 하나를 골라요.' };
          if (ok(t).has(choice)) return { correct: true, feedback: '맞아요! 모두의 마음을 생각한 좋은 선택이에요.' };
          return { correct: false, feedback: byId.get(choice).why || '그렇게 하면 어떤 일이 생길지, 상대는 어떤 마음일지 떠올려 보고 다시 골라 봐요.' };
        },
        hintAt(t, lv) {
          const good = choices.find((c) => ok(t).has(c.id));
          if (choice == null) return lv >= 3 && good ? `‘${nm(good)}’ 쪽을 골라요.` : '먼저 보기 하나를 골라 봐요.';
          if (lv === 2) return `‘${nm(byId.get(choice))}’ 하면 상대는 어떤 마음이 들까요? 그 뒤에 어떤 일이 생길지 떠올려 봐요.`;
          return good ? `‘${nm(good)}’ 쪽이 모두의 마음을 지켜 줘요.` : M.hint1;
        },
        solution(t) { const good = choices.find((c) => ok(t).has(c.id)); return good ? { choice: good.id } : null; },
        wrongAnswer(t) { const bad = choices.find((c) => !ok(t).has(c.id)); return bad ? { choice: bad.id } : null; },
        distance(a, b) { return ((a && a.choice) || null) === ((b && b.choice) || null) ? 0 : 1; },
      };
      return M;
    },
    view(S) {
      const { o, kit, M, print, box } = S; const cs = M.choices; const n = cs.length;
      const mood = moodOf(o.feeling) || {};
      const headH = o.situation ? 100 : 0; let y = PAD;
      const headY = y; if (headH) y += headH + 12;
      const askY = y + 14; y += 34;
      const two = n >= 2 && n !== 3 && cs.every((c) => C.util.wrapLines(c.text, (W - 2 * PAD - GAP2) / 2 - 70, 18).length <= 2);
      const cols = two ? 2 : 1; const cw = (W - 2 * PAD - GAP2 * (cols - 1)) / cols; const chh = 72;
      const rows = Math.ceil(n / cols); const listY = y; y += rows * (chh + 10) - 10 + 14;
      const resY = y; const resH = 86; y += resH;
      const H = y + PAD;
      const st = kit.stage(box, { viewBox: [W, H], label: o.label || '상황 판단 카드. 어떻게 할지 고르면 결과가 보여요.' });
      const L = st.layer('branch');
      if (headH) B.headCard(kit, st, L, { x: PAD, y: headY, w: W - 2 * PAD, h: headH, text: o.situation, sub: o.who || null, motif: o.motif || mood.motif || 'house', color: mood.color || 'cream', print });
      textBlock(L, o.ask || '어떻게 하면 좋을까요?', { x: W / 2, y: askY, w: W - 40, h: 28, fs: 19, minFs: 15, maxLines: 1, fill: P.lavender.dark });
      const group = el('g', { role: 'radiogroup', 'aria-label': o.ask || '어떻게 하면 좋을까요?' }, L);
      const tiles = cs.map((c, i) => {
        const r = Math.floor(i / cols); const k = i % cols;
        const cx = PAD + k * (cw + GAP2) + cw / 2; const cy = listY + r * (chh + 10) + chh / 2;
        const g = el('g', { class: 'cb-choice' }, group); K.transform(g, { x: cx, y: cy });
        B.hit(g, -cw / 2, -chh / 2 - 4, cw, chh + 8);
        const tint = ['sky', 'peach', 'lavender', 'buttercup'][i % 4];
        const p = kit.piece(st, g, { shape: { type: 'rect', w: cw, h: chh, rx: 14 }, color: tint, depth: 1, fill: P[tint].light });
        kit.piece(st, g, { shape: { type: 'circle', r: 15, cx: -cw / 2 + 26, cy: 0 }, color: tint, depth: 1 });
        el('text', { x: -cw / 2 + 26, y: 6, 'text-anchor': 'middle', 'font-size': 17, class: 'pk-text', fill: P[tint].dark }, g).textContent = String(i + 1);
        textBlock(g, c.text, { x: 18, y: 0, w: cw - 76, h: chh - 10, fs: 18, minFs: 14, maxLines: 2, fill: P[tint].dark });
        return { g, p, c };
      });
      if (!print) tiles.forEach((t, i) => B.press(t.g, (via) => { M.setState({ choice: t.c.id }); S.changed(via, `‘${t.c.text}’을(를) 골랐어요.`); }, { role: 'radio', onKey: (k) => B.roving(tiles.map((x) => x.g), i, k) }));
      // 결과 칸
      const res = el('g', { class: 'cb-result' }, L);
      kit.piece(st, res, { shape: { type: 'rect', x: PAD, y: resY, w: W - 2 * PAD, h: resH, rx: 16 }, color: 'cream', depth: 1, fill: '#FFF9EE' });
      el('text', { x: PAD + 16, y: resY + 22, 'font-size': 15, class: 'pk-text', fill: P.peach.dark }, res).textContent = '그러면 어떻게 될까요?';
      const resBody = el('g', null, res);
      function drawResult() {
        while (resBody.firstChild) resBody.removeChild(resBody.firstChild);
        const cur = M.getState().choice; const c = cur && M.byId.get(cur);
        const show = c && c.result && !print && (S.reveal ? S.revealed : true);
        if (!show) {
          const t = print ? '' : S.reveal ? '알맞게 고르면 어떻게 되는지 여기에 나와요.' : cur ? '이 보기의 결과는 스스로 떠올려 봐요.' : '보기를 고르면 어떻게 되는지 여기에 나와요.';
          if (t) textBlock(resBody, t, { x: W / 2, y: resY + 54, w: W - 2 * PAD - 40, h: 40, fs: 17, minFs: 13, maxLines: 2, fill: '#8A7A6A' });
          return;
        }
        const m = moodOf(c.mood);
        if (m) B.iconAt(st, resBody, m, PAD + 46, resY + 52, 46);
        textBlock(resBody, c.result, { x: W / 2 + (m ? 34 : 0), y: resY + 52, w: W - 2 * PAD - (m ? 110 : 40), h: 56, fs: 18, minFs: 14, maxLines: 2, fill: INK });
      }
      return {
        paint() {
          const cur = M.getState().choice;
          tiles.forEach((t) => {
            const on = t.c.id === cur;
            t.p.face.setAttribute('stroke', on ? '#473B6B' : 'rgba(255,255,255,0.55)'); t.p.face.setAttribute('stroke-width', on ? 3.5 : 1);
            t.p.face.setAttribute('fill', on ? P.mint.light : P[['sky', 'peach', 'lavender', 'buttercup'][cs.indexOf(t.c) % 4]].light);
            if (!print) { t.g.setAttribute('aria-checked', String(on)); t.g.setAttribute('aria-label', `${cs.indexOf(t.c) + 1}번 보기: ${t.c.text}${on ? ', 고름' : ''}`); }
          });
          drawResult();
        },
        flag() { const cur = M.getState().choice; const t = tiles.find((x) => x.c.id === cur); if (t) B.wobble(kit, t.g); },
      };
    },
  };
  K.registerTool('emotion', B.tool('emotion', {
    name: '마음 날씨 카드',
    defaults: { mode: 'match' },
    prep(o) {
      if (o.weather !== false) { o.cards = weatherize(o.cards, true); o.slots = weatherize(o.slots, false); }
      return o;
    },
    custom: { scale, branch },
    card: {
      name: '마음 날씨 카드',
      mode: 'match',
      label: '마음 날씨 카드. 상황에 어울리는 마음 카드를 놓아요.',
      // 마음 낱말 카드·칸(기쁨·속상함…)이 있을 때만 '마음 날씨'를 말한다 — 체육 감상·생활 분류처럼 마음 낱말이 없는 짝 잇기·나누기는 중립 글
      hints: {
        match: (look) => (feltBoard(look) ? '상황 속 인물이 무엇을 겪었는지 먼저 읽고, 내가 그 자리에 있다면 마음이 어떤 날씨일지 떠올려 짝 지어요.'
          : '왼쪽 칸의 글을 먼저 읽고, 그것과 가장 잘 어울리는 카드를 하나씩 찾아 옆에 놓아요.'),
        sort: (look) => (feltBoard(look) ? '카드의 일을 겪으면 마음이 어떨지 떠올리고, 같은 마음 날씨 칸에 모아요.'
          : '칸 이름을 먼저 소리 내어 읽고, 카드를 하나씩 보며 그 칸에 맞는지 따져 넣어요.'),
        pick: '카드마다 그 말이나 행동을 들은 사람의 마음이 어떨지 생각해 보고, 조건에 맞는 것만 골라요.',
        order: '마음이 바뀌게 된 까닭을 찾아, 먼저 든 마음부터 차례로 놓아요.',
        fill: '빈칸에 마음 낱말을 넣고 문장을 소리 내어 읽어, 인물의 마음과 어울리는지 들어 봐요.',
      },
      cardSize({ mode }) { return mode === 'match' || mode === 'fill' ? { min: 104, max: 150 } : null; },
    },
  }));
})(window.PaperKit);
