/* 영어 낱말 플립 카드 — 앞(그림·뜻)과 뒤(영어)를 뒤집어 보고(flip), 그림과 낱말을 짝 짓고(match), 듣고 고르고(listen), 알파벳 카드로 철자를 맞춘다(spell).
 * 공통 카드 판(_cards.js) 위의 겉모양 + 직접 그린 flip 모드. 발음은 speechSynthesis en-US로 **누를 때만** 낸다(자동 읽기·자동 재생 없음, 소리 끄기를 따름).
 * 영어(낱말·인사·숫자·색깔·동물·과일·교실 물건·날씨·문장 빈칸) 차시 전부에 쓴다.
 *
 * ── 낱말 목록(words) — 모드 대부분이 이것 하나로 카드·칸을 만든다 ──────────────────────────────────────────────
 *   words: [{ en: 'apple', ko: '사과', motif?: 'apple', big?: '7' }, …]   카드·칸 id = en(영어 낱말 그대로). motif = PaperKit.scene 모티프 이름(apple·cat·dog·sun·tree·star…), big = 큰 글자(숫자·기호).
 *   이 파일이 더하는 모티프: cat 고양이, dog 개, fish2 물고기, ball 공, book 책, pencil 연필, apple 사과, banana 바나나, egg 알(없으면), umbrella 우산.
 *
 * ── 모드 (toolOptions.mode, 없으면 match) ─────────────────────────────────────────────────────────────────────────
 * | 모드   | 학생이 하는 일                                       | 옵션(필수 굵게)                                                    | target                                 |
 * |--------|------------------------------------------------------|--------------------------------------------------------------------|----------------------------------------|
 * | flip   | 앞면(그림·뜻)을 보고 조건에 맞는 카드만 뒤집어 영어 보기 | **words**, front: 'ko'(기본, 앞=그림·뜻) | 'en'(앞=영어, 뒤=그림·뜻), speak(참 기본: 영어 면이 보이게 뒤집을 때 발음) | { flip: [en…] } 정확히 이 카드들만 뒤집힘 |
 * | match  | 왼쪽 그림·뜻 옆에 영어 낱말 카드 놓기                  | **words** (또는 cards·slots 직접), reverse(참 = 왼쪽 영어, 카드 그림·뜻) | { match: { en: en, … } }               |
 * | listen | 듣기 단추를 눌러 들은 낱말의 그림 카드 고르기            | **words**, say?(들려줄 낱말 — 없으면 target의 낱말)                  | { listen: en | [en…] }                 |
 * | spell  | 듣고(그림·뜻을 보고) 알파벳 카드를 차례대로 놓아 낱말 만들기 | **word**('apple') 또는 words[0], ko?, motif?, extra?(['b','x'] 섞을 글자) | { spell: 'apple' }                      |
 * | sort·pick·order·fill | 공통 카드 판(예: 낱말을 무리로 나누기, 문장 빈칸)   | words 또는 cards·slots(_cards.js 표)                               | _cards.js 표                            |
 *
 * ── 옵션 ── 카드 판 모드: _cards.js 옵션 전부(shuffle·live·instant·showBack·revealAfterCheck·hint1·success·print·cardW·cardH) + 위 표.
 *   words로 만든 카드: match = 영어 글 카드, listen = 그림·뜻 카드(영어 없음), sort·pick·order·fill = 영어 글(+그림) 카드.
 *   listen·spell은 무대 아래에 '듣기' 단추가 있다(누를 때만 발음). 소리가 꺼져 있거나 음성이 없으면 안내만 하고 낱말을 글로 보여 주지 않는다.
 *   flip은 무대 아래 '다시 듣기' 단추(마지막으로 뒤집은 영어).
 * ── 상태 ── 카드 판 모드: { at: { 카드id: 칸 번호|null } } (spell의 카드 id = 글자, 같은 글자 둘째부터 'p*', 'p**')   flip: { up: [en…] }
 * ── 판정·힌트 ── check(target) → { correct, incomplete?, feedback, hint }. hint 1 = 생각 방법(낱말 없음) 2 = 어긋난 카드 짚기 3 = 풀이.
 *   wrongAnswer: flip = 조건에 맞지 않는 카드 한 장 더 뒤집음, spell = 이웃 두 글자 바꿈, match·listen = _cards.js 규칙(두 짝 바꿈·다른 그림 고름).
 *   distance: flip = 뒤집힘이 다른 카드 수, 카드 판 = 자리가 다른 카드 수.
 * ── 조작 ── flip: 카드 누르기 / Tab·방향키로 옮기고 Enter·Space. 그 밖은 _cards.js 조작(끌기, 누르고 칸 누르기, 방향키·숫자키).
 * ── 활동지(print) ── flip은 앞면과 쓰는 줄, spell은 그림·뜻과 빈 글자 칸(printCards:false면 알파벳 카드 없이), 그 밖은 _cards.js 규칙.
 *
 * ── 짧은 예 ──
 *   flip:   toolOptions: { mode: 'flip', words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'dog', ko: '개', motif: 'dog' }, { en: 'apple', ko: '사과', motif: 'apple' }] },
 *           target: { flip: ['cat', 'dog'] }        (문항: '동물 카드만 뒤집어 영어 이름을 보세요.')
 *   match:  toolOptions: { words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'dog', ko: '개', motif: 'dog' }] }, target: { match: { cat: 'cat', dog: 'dog' } }
 *   listen: toolOptions: { mode: 'listen', words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'dog', ko: '개', motif: 'dog' }] }, target: { listen: 'dog' }
 *   spell:  toolOptions: { mode: 'spell', word: 'cat', ko: '고양이', motif: 'cat', extra: ['b'] }, target: { spell: 'cat' }
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
      for (const k of ['check', 'solve', 'hint', 'wrongAnswer', 'demo', 'setTarget']) {
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
  const { el, textBlock, textWidth } = C.util; const { W, PAD, GAP, INK, arr } = B;
  const pc = K.piece;

  // ---- 낱말 그림 모티프 ----
  const dot = (g, x, y, r) => el('circle', { cx: x, cy: y, r: r || 2.2, fill: INK }, g);
  B.addMotif('cat', (st, g, o) => { const c = o.color || 'buttercup'; pc(st, g, { shape: { type: 'poly', points: '-18,-6 -14,-26 -4,-14' }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'poly', points: '18,-6 14,-26 4,-14' }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'circle', r: 19, cy: 2 }, color: c, depth: 2 }); dot(g, -7, -1); dot(g, 7, -1); el('path', { d: 'M-4 8 Q0 11 4 8 M-20 6 H-9 M20 6 H9', stroke: INK, 'stroke-width': 1.4, fill: 'none' }, g); });
  B.addMotif('dog', (st, g, o) => { const c = o.color || 'peach'; pc(st, g, { shape: { type: 'circle', r: 18, cy: 2 }, color: c, depth: 2 }); pc(st, g, { shape: { type: 'ellipse', rx: 7, ry: 14, cx: -19, cy: 2 }, color: 'ink', depth: 1 }); pc(st, g, { shape: { type: 'ellipse', rx: 7, ry: 14, cx: 19, cy: 2 }, color: 'ink', depth: 1 }); dot(g, -6, -2); dot(g, 6, -2); pc(st, g, { shape: { type: 'ellipse', rx: 5, ry: 4, cy: 8 }, color: 'ink', depth: 0, flat: true }); });
  B.addMotif('fish2', (st, g, o) => { const c = o.color || 'sky'; pc(st, g, { shape: { type: 'poly', points: '14,0 30,-12 30,12' }, color: c, depth: 1 }); pc(st, g, { shape: { type: 'ellipse', rx: 20, ry: 13 }, color: c, depth: 2 }); dot(g, -10, -3); });
  B.addMotif('ball', (st, g, o) => { pc(st, g, { shape: { type: 'circle', r: 20 }, color: o.color || 'rose', depth: 2 }); el('path', { d: 'M-20 0 H20 M0 -20 Q-12 0 0 20', stroke: '#FFFDF8', 'stroke-width': 3, fill: 'none' }, g); });
  B.addMotif('book', (st, g, o) => { const c = o.color || 'mint'; pc(st, g, { shape: { type: 'path', d: 'M0 -14 Q-12 -20 -26 -16 V16 Q-12 12 0 18 Z' }, color: c, depth: 2 }); pc(st, g, { shape: { type: 'path', d: 'M0 -14 Q12 -20 26 -16 V16 Q12 12 0 18 Z' }, color: c, depth: 2 }); });
  B.addMotif('pencil', (st, g, o) => { pc(st, g, { shape: { type: 'rect', x: -24, y: -6, w: 36, h: 12, rx: 2 }, color: o.color || 'buttercup', depth: 1 }); pc(st, g, { shape: { type: 'poly', points: '12,-6 26,0 12,6' }, color: 'peach', depth: 1 }); pc(st, g, { shape: { type: 'rect', x: -30, y: -6, w: 7, h: 12, rx: 2 }, color: 'rose', depth: 1 }); });
  B.addMotif('apple', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M0 -12 Q16 -22 20 -2 Q20 18 0 20 Q-20 18 -20 -2 Q-16 -22 0 -12 Z' }, color: o.color || 'rose', depth: 2 }); pc(st, g, { shape: { type: 'path', d: 'M1 -13 Q8 -26 16 -22 Q10 -14 1 -13 Z' }, color: 'mint', depth: 0 }); });
  B.addMotif('banana', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-22 -10 Q-14 18 22 8 Q24 4 20 2 Q-6 8 -14 -14 Z' }, color: o.color || 'buttercup', depth: 2 }); });
  B.addMotif('egg', (st, g, o) => { pc(st, g, { shape: { type: 'ellipse', rx: 12, ry: 15 }, color: o.color || 'cream', depth: 2 }); });
  B.addMotif('umbrella', (st, g, o) => { pc(st, g, { shape: { type: 'path', d: 'M-26 2 Q-24 -22 0 -22 Q24 -22 26 2 Q18 -4 13 2 Q6 -4 0 2 Q-6 -4 -13 2 Q-18 -4 -26 2 Z' }, color: o.color || 'lavender', depth: 2 }); el('path', { d: 'M0 2 V20 Q0 25 -5 24', stroke: INK, 'stroke-width': 2.5, fill: 'none', 'stroke-linecap': 'round' }, g); });

  const normWords = (list) => arr(list).map((w) => (typeof w === 'object' && w ? w : { en: String(w) })).filter((w) => w.en != null).map((w) => ({ en: String(w.en), ko: w.ko != null ? String(w.ko) : '', motif: w.motif || null, big: w.big != null ? String(w.big) : null }));
  const TINT = ['sky', 'mint', 'buttercup', 'peach', 'lavender', 'rose'];
  // 철자 카드: 같은 글자 둘째부터 id에 *를 붙인다
  function letters(word) {
    const seen = {}; return [...String(word)].filter((ch) => ch.trim()).map((ch) => { const k = seen[ch] = (seen[ch] || 0) + 1; return { id: ch + '*'.repeat(k - 1), ch }; });
  }

  // ---- flip: 뒤집는 낱말 카드 ----
  const flip = {
    model(o) {
      const ws = normWords(o.words); const ids = ws.map((w) => w.en); const byId = new Map(ws.map((w) => [w.en, w]));
      let up = new Set();
      const want = (t) => (t && t.flip === 'all' ? new Set(ids) : new Set(arr(t && t.flip).map(String).filter((x) => byId.has(x))));
      const nm = (id) => { const w = byId.get(id); return o.front === 'en' ? w.en : (w.ko || w.en); };
      const diff = (t) => { const w = want(t); return { extra: ids.filter((x) => up.has(x) && !w.has(x)), missing: ids.filter((x) => !up.has(x) && w.has(x)) }; };
      const M = {
        ws, byId,
        hint1: o.front === 'en' ? '영어 낱말을 소리 내어 읽고 뜻을 떠올린 뒤, 문제의 조건에 맞는 카드만 뒤집어 확인해요.' : '카드 앞면의 그림과 뜻을 보고 문제의 조건에 맞는지 하나씩 따져 본 뒤, 맞는 카드만 뒤집어요.',
        getState: () => ({ up: ids.filter((x) => up.has(x)) }),
        setState(s) { up = new Set(arr(s && s.up).map(String).filter((x) => byId.has(x))); },
        toggle(id) { if (up.has(id)) up.delete(id); else up.add(id); return up.has(id); },
        isUp: (id) => up.has(id),
        verdict(t) {
          if (!up.size) return { correct: false, incomplete: true, feedback: '조건에 맞는 카드를 눌러 뒤집어요.' };
          const d = diff(t);
          if (!d.extra.length && !d.missing.length) return { correct: true, feedback: '맞아요! 알맞은 카드만 뒤집었어요. 영어 낱말을 소리 내어 읽어 봐요.', bad: [] };
          return { correct: false, bad: d.extra, feedback: d.extra.length && d.missing.length ? '조건에 맞지 않는 카드가 섞였고, 더 뒤집을 카드도 있어요.' : d.extra.length ? `조건에 맞지 않는 카드를 ${d.extra.length}장 뒤집었어요. 앞면의 뜻을 다시 보세요.` : `조건에 맞는 카드가 ${d.missing.length}장 더 있어요.` };
        },
        hintAt(t, lv) {
          const d = diff(t); const x = d.extra[0]; const y = d.missing[0];
          if (lv === 2) return x ? `‘${nm(x)}’ 카드가 문제의 조건에 정말 맞는지 다시 생각해 봐요.` : y ? '아직 뒤집지 않은 카드 가운데 조건에 맞는 것이 있어요. 하나씩 다시 봐요.' : M.hint1;
          return x ? `‘${nm(x)}’ 카드는 조건에 맞지 않아요. 다시 덮어요.` : y ? `‘${nm(y)}’ 카드도 뒤집어요.` : M.hint1;
        },
        solution(t) { return { up: ids.filter((x) => want(t).has(x)) }; },
        wrongAnswer(t) {
          const w = want(t); const extra = ids.find((x) => !w.has(x));
          if (extra) return { up: ids.filter((x) => w.has(x) || x === extra) };
          if (w.size > 1) { const drop = ids.find((x) => w.has(x)); return { up: ids.filter((x) => w.has(x) && x !== drop) }; }
          return null;
        },
        distance(a, b) { const x = new Set(arr(a && a.up)); const y = new Set(arr(b && b.up)); let d = 0; for (const k of ids) if (x.has(k) !== y.has(k)) d++; return d; },
      };
      return M;
    },
    view(S) {
      const { o, kit, M, print, box } = S; const ws = M.ws; const n = ws.length;
      const cols = n <= 4 ? Math.max(1, n) : n <= 6 ? 3 : 4; const rows = Math.ceil(n / cols);
      const cw = Math.min(150, (W - 2 * PAD - GAP * (cols - 1)) / cols); const ch = 150; const lineH = print ? 34 : 0;
      const H = PAD + rows * (ch + lineH + GAP) - GAP + PAD;
      const st = kit.stage(box, { viewBox: [W, H], label: o.label || '영어 낱말 플립 카드. 카드를 눌러 뒤집어요.' });
      const L = st.layer('flip');
      const enFront = o.front === 'en';
      const tiles = ws.map((w, i) => {
        const r = Math.floor(i / cols); const k = i % cols; const inRow = Math.min(cols, n - r * cols);
        const x0 = (W - (inRow * cw + (inRow - 1) * GAP)) / 2;
        const cx = x0 + k * (cw + GAP) + cw / 2; const cy = PAD + r * (ch + lineH + GAP) + ch / 2;
        const g = el('g', { class: 'cb-flip' }, L); K.transform(g, { x: cx, y: cy });
        B.hit(g, -cw / 2, -ch / 2, cw, ch);
        const inner = el('g', null, g);
        const tint = TINT[i % TINT.length];
        const p = kit.piece(st, inner, { shape: { type: 'rect', w: cw, h: ch, rx: 14 }, color: tint, depth: 2, fill: P[tint].light });
        // 그림·뜻 면
        const pic = el('g', null, inner);
        if (w.motif || w.big) B.iconAt(st, pic, w, 0, -18, 70);
        if (w.ko) textBlock(pic, w.ko, { x: 0, y: w.motif || w.big ? 44 : 0, w: cw - 16, h: w.motif || w.big ? 34 : ch - 20, fs: w.motif || w.big ? 20 : 26, minFs: 14, maxLines: w.motif || w.big ? 1 : 3, fill: P[tint].dark });
        // 영어 면
        const eng = el('g', null, inner);
        const fs = Math.max(18, Math.min(34, (cw - 20) / Math.max(1, textWidth(w.en, 30) / 30)));
        textBlock(eng, w.en, { x: 0, y: w.ko && !enFront ? -10 : 0, w: cw - 14, h: 70, fs: Math.round(fs), minFs: 16, maxLines: 2, fill: INK });
        if (w.ko && !enFront) textBlock(eng, w.ko, { x: 0, y: 44, w: cw - 16, h: 26, fs: 15, minFs: 12, maxLines: 1, fill: P[tint].dark });
        if (print) el('path', { d: `M${-cw / 2 + 8} ${ch / 2 + 26} H${cw / 2 - 8}`, stroke: '#000', 'stroke-width': 1.4 }, g);
        return { g, inner, p, pic, eng, w, tint };
      });
      let msg = null; let last = null;
      const side = (t, upNow) => { const showEn = enFront ? !upNow : upNow; t.pic.setAttribute('display', showEn ? 'none' : 'inline'); t.eng.setAttribute('display', showEn ? 'inline' : 'none'); return showEn; };
      if (!print) {
        tiles.forEach((t, i) => B.press(t.g, (via) => {
          const nowUp = M.toggle(t.w.en);
          const showEn = enFront ? !nowUp : nowUp;
          if (showEn) last = t.w.en;
          const done = () => { S.changed(via, `‘${t.w.ko || t.w.en}’ 카드를 ${nowUp ? '뒤집었어요' : '다시 덮었어요'}.`); };
          if (showEn && o.speak !== false) B.speakSay(kit, msg, t.w.en);
          if (B.reduce) { done(); return; }
          side(t, !nowUp);
          kit.tween(130, (q) => kit.transform(t.inner, { sx: 1 - q })).then(() => { done(); return kit.tween(130, (q) => kit.transform(t.inner, { sx: q })); }).then(() => kit.transform(t.inner, { sx: 1 }));
        }, { onKey: (k) => B.roving(tiles.map((x) => x.g), i, k) }));
        B.htmlButton(box, 'fi-rr-volume', '다시 듣기', () => { if (!last) { if (msg) msg.textContent = '카드를 뒤집으면 그 낱말을 들을 수 있어요.'; return; } B.speakSay(kit, msg, last); });
        msg = B.note(box);
      }
      return {
        paint() {
          tiles.forEach((t) => {
            const u = !print && M.isUp(t.w.en);
            side(t, u);
            t.p.face.setAttribute('fill', u ? '#FFFDF8' : P[t.tint].light);
            t.p.face.setAttribute('stroke', u ? P[t.tint].layer : 'rgba(255,255,255,0.55)'); t.p.face.setAttribute('stroke-width', u ? 2.5 : 1);
            if (!print) { t.g.setAttribute('aria-pressed', String(u)); t.g.setAttribute('aria-label', `${t.w.ko || t.w.en} 카드. ${u ? `뒤집힘: ${enFront ? (t.w.ko || t.w.en) : t.w.en}` : '앞면'}. Enter로 뒤집어요.`); }
          });
        },
        flag(r) { (r.bad || []).forEach((id) => { const t = tiles.find((x) => x.w.en === id); if (t) B.wobble(kit, t.g); }); },
      };
    },
  };

  // ---- 카드 판 모드: words → cards·slots ----
  function prep(o) {
    const ws = normWords(o.words);
    const mode = o.mode || 'match';
    if (mode === 'listen') {
      o.mode = 'pick'; o.listen = true; o.basket = o.basket || '들은 낱말';
      if (!o.cards) o.cards = ws.map((w) => ({ id: w.en, text: w.ko || '', motif: w.motif, big: w.big, name: w.ko || w.en }));
      if (!o.hint1) o.hint1 = '듣기 단추를 눌러 낱말을 잘 듣고, 들은 소리와 뜻이 같은 그림 카드를 찾아 골라요.';
      return o;
    }
    if (mode === 'spell') {
      const w0 = ws[0] || {}; const word = String(o.word || w0.en || '');
      o.spellWord = word; o.spellKo = o.ko != null ? o.ko : w0.ko || ''; o.spellIcon = { motif: o.motif || w0.motif || null, big: o.big || w0.big || null };
      const ls = letters(word); const extra = arr(o.extra).map(String).filter((x) => x.trim());
      const all = ls.slice(); const seen = {};
      ls.forEach((l) => { seen[l.ch] = (seen[l.ch] || 0) + 1; });
      extra.forEach((ch) => { const k = seen[ch] = (seen[ch] || 0) + 1; all.push({ id: ch + '*'.repeat(k - 1), ch }); });
      o.mode = 'fill';
      o.cards = all.map((l, i) => ({ id: l.id, text: '', big: l.ch, name: l.ch, color: TINT[i % TINT.length], why: '낱말을 다시 들으며 첫소리부터 소리와 글자를 차례로 맞춰 봐요.' }));
      o.slots = ls.map((_, i) => ({ id: String(i + 1), label: '___' }));
      if (!o.hint1) o.hint1 = '낱말을 듣고 첫소리부터 차례로 소리를 나누어 보세요. 소리 하나에 알맞은 알파벳을 왼쪽 칸부터 놓아요.';
      return o;
    }
    if (mode === 'match' && ws.length) {
      if (o.reverse) {
        if (!o.slots) o.slots = ws.map((w) => ({ id: w.en, label: w.en }));
        if (!o.cards) o.cards = ws.map((w) => ({ id: w.en, text: w.ko || '', motif: w.motif, big: w.big, name: w.ko || w.en }));
      } else {
        if (!o.slots) o.slots = ws.map((w) => ({ id: w.en, label: w.ko || '', motif: w.motif, big: w.big }));
        if (!o.cards) o.cards = ws.map((w) => ({ id: w.en, text: w.en }));
      }
    } else if (ws.length && !o.cards) o.cards = ws.map((w) => ({ id: w.en, text: w.en, motif: w.motif, big: w.big }));
    return o;
  }
  // { spell: 'apple' } → 칸마다 그 글자(같은 글자 카드는 어느 것이든)
  function target(t, o) {
    if (!t || typeof t !== 'object') return t;
    if (t.listen != null) return { pick: arr(t.listen).map(String) };
    if (t.spell != null) {
      const ls = letters(String(t.spell)); const ids = (o.cards || []).map((c) => c.id);
      const fill = {};
      ls.forEach((l, i) => { fill[String(i + 1)] = ids.filter((id) => id.replace(/\*+$/, '') === l.ch); });
      return { fill };
    }
    return t;
  }

  K.registerTool('wordcards', B.tool('wordcards', {
    name: '영어 낱말 플립 카드',
    defaults: { mode: 'match' },
    prep, target,
    custom: { flip },
    card: {
      name: '영어 낱말 플립 카드',
      mode: 'match',
      label: '영어 낱말 카드. 그림과 뜻에 맞는 영어 낱말 카드를 놓아요.',
      hints: {
        match: '그림과 뜻을 먼저 보고, 영어 낱말 카드를 소리 내어 읽어 본 뒤 서로 같은 것을 짝 지어요.',
        sort: '영어 낱말을 소리 내어 읽고 뜻을 떠올린 뒤, 같은 무리의 칸에 넣어요.',
        pick: '카드마다 낱말의 뜻을 떠올려 보고, 문제의 조건에 맞는 것만 골라요.',
        order: '문장에서 누가, 무엇을 하는지 차례를 떠올리며 낱말 카드를 왼쪽부터 놓아요.',
        fill: '빈칸에 낱말을 넣고 문장을 처음부터 영어로 소리 내어 읽어 봐요. 말이 자연스러운지 들어요.',
      },
      cardSize({ o, mode }) {
        if (o.spellWord) return [62, 68];
        if (mode === 'match' && !o.reverse) return { min: 104, max: 150 };
        return null;
      },
      layout(ctx) {
        const { o, W: W0, cw, ch, slots } = ctx;
        if (!o.spellWord) return null;
        // 철자: 위에 그림·뜻 머리, 아래에 글자 칸 한 줄(넘치면 두 줄)
        const headH = 84; const bw = cw + 8; const bh = ch + 8; const g = 8;
        const per = Math.max(1, Math.min(slots.length, Math.floor((W0 - 2 * PAD + g) / (bw + g)))); const rows = Math.ceil(slots.length / per);
        slots.forEach((sl, i) => {
          const r = Math.floor(i / per); const k = i % per; const inRow = Math.min(per, slots.length - r * per);
          const x0 = (W0 - (inRow * bw + (inRow - 1) * g)) / 2;
          Object.assign(sl, { x: x0 + k * (bw + g), y: PAD + headH + 12 + r * (bh + 12), w: bw, h: bh, top: 0 });
        });
        return { H: PAD + headH + 12 + rows * (bh + 12) };
      },
      decorate(ctx, layer) {
        const { o, kit, st, print } = ctx;
        if (!o.spellWord) return;
        B.headCard(kit, st, layer, { x: PAD, y: PAD, w: W - 2 * PAD, h: 84, text: o.spellKo || '낱말을 듣고 철자를 맞춰요', sub: `알파벳 ${letters(o.spellWord).length}개`, motif: o.spellIcon.motif, big: o.spellIcon.big, color: 'sky', print });
      },
      controls(ctx, api) {
        const { o, kit } = ctx;
        if (!o.listen && !o.spellWord) return;
        let msg = null;
        B.htmlButton(api.box, 'fi-rr-volume', o.spellWord ? '낱말 듣기' : '듣기', () => {
          const t = api.model.target;
          const word = o.spellWord || o.say || (t && arr(t.pick)[0]);
          if (!word) { if (msg) msg.textContent = '들려줄 낱말이 없어요. 선생님께 읽어 달라고 해요.'; return; }
          B.speakSay(kit, msg, String(word).replace(/\*+$/, ''));
        });
        msg = B.note(api.box);
      },
    },
  }));
})(window.PaperKit);
