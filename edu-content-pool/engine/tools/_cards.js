/* 카드 판(공통) — 글·그림 카드를 칸에 놓는 교구들의 바탕. story·timeline·lifecycle·mindmap(그리고 emotion·wordcards·kitchen·economy)이 이 위에 선다.
 * 이 파일은 교구를 등록하지 않는다. 플레이어(registry.load)가 다른 교구보다 먼저 읽는다. 겉모양(skin)만 다른 교구 파일이 K.cards.define으로 교구를 만든다.
 *
 * ── 모드 (o.mode) ───────────────────────────────────────────────────────────────────────────────
 * | 모드  | 학생이 하는 일                         | 칸(slots)                         | target                                              |
 * |-------|----------------------------------------|-----------------------------------|-----------------------------------------------------|
 * | sort  | 이름 붙은 칸으로 나누기(칸 하나에 여러 장) | 칸 이름 목록(필수)                 | { sort: { 칸id: [카드id…] } }  목록에 없는 카드 = 카드 칸에 남겨야 하는 함정 카드 |
 * | order | 순서대로 놓기(자리 하나에 한 장)          | 수 또는 자리 이름(없으면 카드 수)   | { order: [카드id | [카드id…]] , cyclic?: true }  [ ] = 그 자리들 안에서는 순서 무관, cyclic = 돌고 도는 순서라 어디서 시작해도 됨 |
 * | match | 짝 잇기(왼쪽 말에 맞는 카드 한 장)        | 왼쪽에 보일 말(필수)               | { match: { 칸id: 카드id | [되는 카드id…] } }          |
 * | pick  | 조건에 맞는 카드 고르기                   | 없음('고른 카드' 바구니 하나)       | { pick: [카드id…] }  정확히 이 카드들만 골라야 맞음    |
 * | fill  | 빈칸(말풍선·문장)에 낱말 카드 넣기         | 빈칸이 든 글(필수, '___'가 빈칸 자리) | { fill: { 칸id: 카드id | [되는 카드id…] } }           |
 *
 * ── 옵션 (activity.levels[단계] → items[n].toolOptions → items[n].levels[단계].toolOptions 순으로 합쳐짐) ─────
 * | 옵션            | 모양                                              | 뜻                                                      |
 * |-----------------|---------------------------------------------------|---------------------------------------------------------|
 * | mode            | 'sort'|'order'|'match'|'pick'|'fill'              | 없으면 겉모양의 기본 모드                                 |
 * | cards (필수)     | ['글', …] 또는 [{ id, text, motif?, big?, color?, sub?, back?, why?, name? }] | 글만 쓰면 id = 글. motif = PaperKit.scene 모티프 이름(tree·flower·sun·moon·cloud·house·star·mountain·bird·leaf·snow…), big = 큰 글자(‘ㄱ’, ‘7’, ‘1443’), sub = 늘 보이는 작은 줄, back = 맞힌 뒤에 보이는 작은 줄(값·까닭), why = 그 카드를 잘못 놓았을 때 피드백 한 문장, color = 팔레트 이름 |
 * | slots           | 수 | ['칸 이름', …] | [{ id, label, sub?, motif?, big?, who?, cap? }] | id 없으면 label이 id. fill은 label에 '___'(밑줄 셋)를 빈칸 자리로 쓴다. cap = 칸에 들어갈 장 수 |
 * | shuffle         | 참(기본)/거짓                                      | 카드 칸의 처음 순서를 id로 정해진 순서로 섞음(차시마다 늘 같음) |
 * | basket          | 글                                                | pick 바구니 이름(기본 '고른 카드')                         |
 * | trayLabel       | 글                                                | 카드 칸 이름(기본 '카드')                                  |
 * | live            | 참/거짓                                            | (쉬움) 맞는 칸에 놓인 카드에 초록 테두리 — revealAfterCheck면 꺼짐 |
 * | instant         | 참/거짓                                            | (쉬움) 틀린 칸에 놓으면 까닭을 말하고 카드 칸으로 되돌림 — revealAfterCheck면 꺼짐 |
 * | showBack        | 참/거짓                                            | 카드의 back을 처음부터 보임(쉬움) — revealAfterCheck면 맞힌 뒤에만 |
 * | revealAfterCheck| 참/거짓                                            | 차시 문항 reveal:'after-check'이면 플레이어가 넣는다. back·live·instant를 맞힌 확인 전에는 숨김 |
 * | hint1           | 글                                                | 1단계 힌트(개념) 대신 쓸 글 — 정답 카드·칸 이름을 쓰지 않는다 |
 * | success         | 글                                                | 맞혔을 때 피드백 한 문장                                    |
 * | cardW, cardH    | 수                                                | 카드 크기(viewBox 단위, 무대 폭 560) — 보통은 겉모양이 정함   |
 * | print           | 참/거짓                                            | 활동지 그림(흑백, 조작 없음, back 숨김). printCards:false면 카드 칸을 그리지 않음(빈 칸만) |
 * | (겉모양 옵션)    | topic·center·axis·title …                          | 겉모양 파일 첫머리 표를 본다                                 |
 *
 * ── 상태 (getState / setState) ──────────────────────────────────────────────────────────────────
 *   { at: { 카드id: 칸 번호(0부터) | null } }   null = 카드 칸. pick의 바구니는 0번 칸이다.
 *   setState는 모르는 카드·없는 칸 번호를 버리고, 한 장만 들어가는 칸에 두 장이 오면 뒤의 것을 카드 칸에 둔다.
 *
 * ── 판정 ───────────────────────────────────────────────────────────────────────────────────────
 *   check(target) → { correct, incomplete?, feedback, hint }. incomplete = 아직 놓지 않은 카드(sort)·빈 자리(order·match·fill)·아무것도 안 고름(pick).
 *   hint(target, { level, attempts }) 3단계: 1 = 모드의 생각 방법(카드·칸 이름 없음) 2 = 어긋난 카드·자리 짚기 3 = 한 장의 풀이.
 *   wrongAnswer(target) = 대표 오개념: order는 이웃 두 장 바꿈, sort는 한 장을 다른 칸, match·fill은 두 짝 바꿈, pick은 함정 카드 한 장 더.
 *   distance(a, b) = 놓인 자리가 다른 카드 수.
 *
 * ── 조작 ───────────────────────────────────────────────────────────────────────────────────────
 *   끌어 놓기, 또는 카드를 눌러 고른 뒤 칸을 누르기. 키보드: 카드에서 방향키 = 다음/앞 칸으로 옮김, Enter = 고르고 칸 고르기(칸에서 방향키로 옮기고 Enter),
 *   1~9 = 그 번호 칸, 0·Backspace = 카드 칸, Esc = 고르기 취소. pick은 Enter·Space로 넣고 빼기.
 *
 * ── 겉모양 만들기: K.registerTool(id, K.cards.define(id, spec)) ───────────────────────────────────
 *   define은 교구를 등록하고 등록한 정의를 돌려준다(겉 파일에 registerTool('<id>'을 남기는 것은 검사가 교구 파일을 찾는 표시).
 *   spec = {
 *     name: '한국어 이름', mode: '기본 모드', label: '스크린리더 설명',
 *     cardSize(ctx) → [w, h] | { min, max } | null
 *                                              [w, h] = 카드 크기 못박기. { min, max } = 폭 범위(기본 112~168) — 가장 긴 글이 두 줄 안에, 낱말 하나가
 *                                              줄 가운데서 잘리지 않을 때까지 8씩 넓힌다. 높이 = 그림 46 + 글 줄 수×24 + 14 (+ sub·back 줄 22).
 *                                              ctx = { mode, cards, slots, o, hasIcon }. 차시는 toolOptions.cardW·cardH로 덮을 수 있다.
 *     layout(ctx) → { H } | null              ctx.slots 각각에 { x, y, w, h(놓는 곳), top(칸 머리 높이), cap, label 자리 } 를 적고 위쪽 판 높이 H를 돌려준다.
 *                                              null이면 그 모드의 기본 배치(K.cards.layouts[mode]). 카드 칸은 그 아래에 판이 붙인다.
 *     decorate(ctx, layer)                     칸 아래 장식(축·화살표·가지 줄·가운데 주제). layer = SVG g
 *     drawSlot(ctx, slot, g, i) → true|false   true면 기본 칸 그리기를 건너뜀(직접 그림)
 *     hints: { 모드: '1단계 글' | (look) → 글 }  모드별 1단계 힌트(정답 값 없이). 함수면 look = { o, mode, cards, slots, numeric }를 보고 고른다
 *                                              (예: 띠 양 끝 말이 시간이 아니면 중립 글). 차시 hints·hint1이 있으면 그쪽이 먼저다.
 *     prevWord: '일' | '단계' | (look) → 글     order 2단계 힌트 '바로 앞 ○ 다음에 올 수 있을까요?'의 ○(기본 '카드')
 *     controls(ctx, api)                       무대 아래 HTML 단추(선택). api = { box, flash(i) }
 *   }
 *   ctx = { mode, cards, slots, o, kit, P, W, cw, ch, print, st, util }. util = { el, textBlock, fitText, wrapLines, PAD, GAP, arrow }.
 *   칸 slot에 쓰는 자리: x,y,w,h = 놓는 곳(끌어 놓기 판정·카드 위치), top = 칸 머리(여러 장 칸에서 카드 줄이 시작하는 높이), cap,
 *     lx,ly = 칸 이름 글자 가운데(없으면 칸 머리 가운데), lw = 이름 폭, shape: 'rect'(기본)|'none'(칸 바탕을 겉모양이 그림).
 *
 * ── 짧은 예 (story·order) ──────────────────────────────────────────────────────────────────────
 *   toolOptions: { cards: [{ id: '씨', text: '씨를 심어요', motif: 'leaf' }, { id: '싹', text: '싹이 나요', motif: 'flower' }, { id: '열매', text: '열매가 열려요', motif: 'tree' }] },
 *   target: { order: ['씨', '싹', '열매'] }
 */
(function (K) {
  'use strict';
  if (!K || K.cards) return;
  const P = K.palette;
  const MODES = ['sort', 'order', 'match', 'pick', 'fill'];
  const TINT = ['buttercup', 'sky', 'mint', 'peach', 'lavender', 'rose'];
  const NO_MOTIF = new Set(['hills', 'wave', 'text']);
  const PAD = 12; const GAP = 10; const W0 = 560;
  // 받침에 맞는 조사(따옴표·수 뒤도): '‘봄’ 칸이', '‘우산’이'
  const jo = (w, a, b) => { const s = String(w).replace(/[’'"”)]s]+$/, ''); const c = s.charCodeAt(s.length - 1); if (c >= 0xac00 && c <= 0xd7a3) return `${w}${(c - 0xac00) % 28 ? a : b}`; return `${w}${/[013678]$/.test(s) ? a : b}`; };
  const INK = '#3D352E';
  const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
  const reduceMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- 글자 폭 어림(한글은 글자 크기만큼, 숫자·영문은 반쯤) — 휴대폰(무대 약 0.6배)에서 글자가 12px까지 커지는 것을 생각해 20 아래로는 어림하지 않는다 ----
  const wide = (ch) => /[ᄀ-ᇿ㄰-㆏가-힣一-鿿　-〿＀-￯]/.test(ch);
  function textWidth(s, fs) {
    const f = Math.max(fs, 20); let w = 0;
    for (const ch of String(s)) w += wide(ch) ? f * 0.98 : ch === ' ' ? f * 0.3 : /[0-9]/.test(ch) ? f * 0.6 : f * 0.62;
    return w;
  }
  function wrapLines(text, maxW, fs) {
    const out = []; let cur = '';
    for (const word of String(text).split(/\s+/).filter(Boolean)) {
      const cand = cur ? `${cur} ${word}` : word;
      if (textWidth(cand, fs) <= maxW) { cur = cand; continue; }
      if (cur) out.push(cur);
      if (textWidth(word, fs) <= maxW) { cur = word; continue; }
      // 띄어쓰기 없이 긴 낱말은 글자 단위로 자른다
      let piece = '';
      for (const ch of word) { if (textWidth(piece + ch, fs) > maxW && piece) { out.push(piece); piece = ch; } else piece += ch; }
      cur = piece;
    }
    if (cur) out.push(cur);
    return out.length ? out : [''];
  }
  function fitText(text, maxW, maxH, fs, minFs, maxLines) {
    for (let f = fs; f >= minFs; f -= 1) {
      const lines = wrapLines(text, maxW, f);
      if (lines.length <= maxLines && lines.length * Math.max(f, 20) * 1.2 <= maxH + 2) return { lines, fs: f };
    }
    const lines = wrapLines(text, maxW, minFs);
    if (lines.length > maxLines) { lines.length = maxLines; lines[maxLines - 1] = `${lines[maxLines - 1].replace(/.$/, '')}…`; }
    return { lines, fs: minFs };
  }
  function el(tag, attrs, parent) { return K.el(tag, attrs, parent); }
  // 여러 줄 글자: y는 글 덩어리의 가운데. tspan의 dy를 em으로 써서 휴대폰에서 글자가 커져도 줄 간격이 같이 늘어난다
  function textBlock(parent, text, opt) {
    const { lines, fs } = fitText(text, opt.w, opt.h || 999, opt.fs || 18, opt.minFs || Math.min(14, opt.fs || 18), opt.maxLines || 2);
    const t = el('text', { x: opt.x, y: opt.y, 'text-anchor': opt.anchor || 'middle', 'font-size': fs, class: `pk-text${opt.cls ? ` ${opt.cls}` : ''}`, fill: opt.fill || INK }, parent);
    if (opt.weight) t.setAttribute('font-weight', opt.weight);
    lines.forEach((ln, i) => {
      const sp = el('tspan', { x: opt.x, dy: i === 0 ? `${(-(lines.length - 1) * 0.6 + 0.36).toFixed(2)}em` : '1.2em' }, t);
      sp.textContent = ln;
    });
    return t;
  }
  // 화살표(선 + 머리). 장식층에 그린다
  function arrow(layer, x1, y1, x2, y2, opt = {}) {
    const g = el('g', { class: 'cd-arrow' }, layer);
    const col = opt.color || '#B8A6D9';
    const d = opt.d || `M${x1} ${y1} L${x2} ${y2}`;
    el('path', { d, fill: 'none', stroke: col, 'stroke-width': opt.width || 3, 'stroke-linecap': 'round', 'stroke-dasharray': opt.dash || null }, g);
    const a = opt.angle != null ? opt.angle : Math.atan2(y2 - y1, x2 - x1); const L = 9;
    el('polygon', { points: `${x2},${y2} ${x2 - L * Math.cos(a - 0.45)},${y2 - L * Math.sin(a - 0.45)} ${x2 - L * Math.cos(a + 0.45)},${y2 - L * Math.sin(a + 0.45)}`, fill: col }, g);
    return g;
  }

  // ---- 카드·칸 정리 ----
  function normCards(list) {
    const seen = new Set();
    return arr(list).map((c, i) => {
      const o = typeof c === 'object' && c ? c : { text: String(c) };
      let id = String(o.id != null ? o.id : o.text != null ? o.text : `c${i + 1}`);
      while (seen.has(id)) id += '*';
      seen.add(id);
      const text = o.text != null ? String(o.text) : String(o.id != null ? o.id : '');
      return { id, text, name: o.name || text || o.big || id, motif: o.motif || null, motifColor: o.motifColor || null, big: o.big != null ? String(o.big) : null, sub: o.sub || null, back: o.back || null, why: o.why || null, color: P[o.color] ? o.color : TINT[i % TINT.length], k: i };
    });
  }
  function normSlots(list, mode, cards, o) {
    if (mode === 'pick') return [{ id: 'picked', label: o.basket || '고른 카드', cap: Infinity, k: 0 }];
    let src = list;
    if (typeof src === 'number') src = Array.from({ length: Math.max(1, Math.floor(src)) }, () => ({ label: '' }));
    if (src == null || !arr(src).length) src = mode === 'order' ? cards.map(() => ({ label: '' })) : [{ label: '' }];
    const seen = new Set();
    return arr(src).map((s, i) => {
      const x = typeof s === 'object' && s ? s : { label: String(s) };
      let id = String(x.id != null ? x.id : x.label ? x.label : String(i + 1));
      while (seen.has(id)) id += '*';
      seen.add(id);
      const cap = Number.isFinite(x.cap) && x.cap >= 1 ? x.cap : mode === 'sort' ? Infinity : 1;
      return { id, label: x.label != null ? String(x.label) : '', sub: x.sub || null, motif: x.motif || null, big: x.big != null ? String(x.big) : null, who: x.who || null, cap, k: i };
    });
  }
  // 정해진 섞기: id 글자로 만든 수로 정렬(차시마다 늘 같은 순서). 정렬 결과가 처음과 같으면 한 칸 돌린다
  function hash(s) { let h = 2166136261; for (const ch of String(s)) { h ^= ch.codePointAt(0); h = Math.imul(h, 16777619) >>> 0; } return h; }
  function shuffled(cards) {
    const out = cards.slice().sort((a, b) => hash(`${a.id}~`) - hash(`${b.id}~`));
    if (out.length > 1 && out.every((c, i) => c === cards[i])) out.push(out.shift());
    return out;
  }

  // ---- 모델: DOM 없이 상태·판정·풀이·힌트를 계산한다(노드 단위 검사가 이 부분을 그대로 쓴다) ----
  function model(o, spec) {
    spec = spec || {};
    const mode = MODES.includes(o.mode) ? o.mode : (MODES.includes(spec.mode) ? spec.mode : 'sort');
    const cards = normCards(o.cards);
    const slots = normSlots(o.slots, mode, cards, o);
    const byId = new Map(cards.map((c) => [c.id, c]));
    const at = new Map(cards.map((c) => [c.id, null]));
    let target = null;
    const slotIdx = (key) => slots.findIndex((s) => s.id === String(key));
    const occupants = (i) => cards.filter((c) => at.get(c.id) === i);
    // 힌트·피드백에서 카드를 부르는 이름 — 영어 덩이 문장('Let's play basketball')이 잘려 헷갈리지 않게 28자까지 그대로
    const nameOf = (c) => { const n = String(c.name); return n.length > 28 ? `${n.slice(0, 27)}…` : n; };
    // 수·기호 카드(‘5분’ ‘3’ ‘1/2’)만 있으면 '낱말'이 아니라 '카드'라고 부른다
    const numeric = cards.length > 0 && cards.every((c) => /\d/.test(String(c.name)) || !/[가-힣A-Za-z]/.test(String(c.name)));
    // 겉모양 spec.hints[모드]·spec.prevWord는 글 또는 함수(look) — look = { o, mode, cards, slots, numeric }
    const look = { o, mode, cards, slots, numeric };
    const specText = (v) => (typeof v === 'function' ? v(look) : v);
    const slotName = (i) => {
      const s = slots[i];
      if (mode === 'pick') return s.label;
      if (mode === 'fill') return `${i + 1}번 빈칸`;
      if (mode === 'order') return s.label ? `‘${s.label}’ 자리` : `${i + 1}번째 자리`;
      return s.label ? `‘${s.label.replace(/_{3,}/g, '□')}’ 칸` : `${i + 1}번 칸`;
    };

    function place(id, idx) {
      if (!at.has(id)) return;
      const v = idx == null || idx < 0 || idx >= slots.length ? null : idx;
      const from = at.get(id);
      if (v === from) return;
      if (v != null && slots[v].cap !== Infinity) {
        const occ = occupants(v);
        if (occ.length >= slots[v].cap) {
          // 한 장 칸이 차 있으면 자리를 바꾼다(그 카드는 이 카드가 있던 곳으로)
          at.set(occ[0].id, from);
        }
      }
      at.set(id, v);
    }
    function getState() { return { at: Object.fromEntries(cards.map((c) => [c.id, at.get(c.id)])) }; }
    function setState(s) {
      cards.forEach((c) => at.set(c.id, null));
      const src = (s && s.at) || {};
      for (const c of cards) {
        const v = src[c.id];
        if (!Number.isInteger(v) || v < 0 || v >= slots.length) continue;
        if (slots[v].cap !== Infinity && occupants(v).length >= slots[v].cap) continue;
        at.set(c.id, v);
      }
    }
    function expect(t) {
      t = t || target || {};
      if (mode === 'sort' || mode === 'pick') {
        const allow = new Map(cards.map((c) => [c.id, new Set()]));
        if (mode === 'pick') { const want = new Set(arr(t.pick).map(String)); cards.forEach((c) => allow.get(c.id).add(want.has(c.id) ? 0 : null)); return { kind: 'card', allow }; }
        for (const [k, v] of Object.entries(t.sort || {})) {
          const si = slotIdx(k);
          if (si >= 0) arr(v).forEach((id) => { if (allow.has(String(id))) allow.get(String(id)).add(si); });
          else if (allow.has(k)) arr(v).forEach((b) => { const j = slotIdx(b); if (j >= 0) allow.get(k).add(j); });
        }
        cards.forEach((c) => { if (!allow.get(c.id).size) allow.get(c.id).add(null); });
        return { kind: 'card', allow };
      }
      let want;
      if (mode === 'order') {
        const seq = arr(t.order).flatMap((e) => (Array.isArray(e) ? e.map(() => new Set(e.map(String))) : [new Set([String(e)])]));
        want = slots.map((_, i) => seq[i] || null);
      } else {
        const src = t.match || t.fill || t.pairs || {};
        want = slots.map((s) => (src[s.id] != null ? new Set(arr(src[s.id]).map(String)) : null));
      }
      return { kind: 'slot', want, cyclic: mode === 'order' && !!t.cyclic && want.every(Boolean) };
    }
    // 판정 하나: { correct, incomplete, wrong: [카드id…], empty: [칸…], missing: [카드id…], rot }
    function verdict(t) {
      const e = expect(t);
      if (e.kind === 'card') {
        const wrong = []; const missing = []; const left = [];
        for (const c of cards) {
          const a = at.get(c.id); const ok = e.allow.get(c.id);
          if (ok.has(a)) continue;
          if (a == null) (mode === 'pick' ? missing : left).push(c.id); else wrong.push(c.id);
        }
        const none = mode === 'pick' && !cards.some((c) => at.get(c.id) === 0);
        return { e, wrong, missing, left, incomplete: none || left.length > 0, correct: !none && !wrong.length && !missing.length && !left.length };
      }
      const n = slots.length; const occ = slots.map((_, i) => occupants(i)[0] || null);
      const empty = slots.map((_, i) => i).filter((i) => e.want[i] && !occ[i]);
      let best = null;
      for (let r = 0; r < (e.cyclic ? n : 1); r++) {
        const wrongSlots = [];
        for (let i = 0; i < n; i++) { const w = e.want[(i - r + n) % n]; if (w && occ[i] && !w.has(occ[i].id)) wrongSlots.push(i); }
        if (!best || wrongSlots.length < best.wrongSlots.length) best = { r, wrongSlots };
      }
      return { e, occ, empty, wrongSlots: best.wrongSlots, rot: best.r, wrong: best.wrongSlots.map((i) => occ[i].id), incomplete: empty.length > 0, correct: !empty.length && !best.wrongSlots.length };
    }
    const doneText = { sort: '모두 알맞은 칸에 넣었어요.', order: '순서가 모두 맞아요.', match: '짝을 모두 알맞게 지었어요.', fill: '빈칸을 모두 알맞게 채웠어요.', pick: '조건에 맞는 카드만 골랐어요.' };
    function judge(t) {
      const v = verdict(t);
      if (v.correct) return { correct: true, feedback: o.success || `맞아요! ${v.e.cyclic ? '돌고 도는 순서가 맞아요.' : doneText[mode]}`, v };
      const why = v.wrong.map((id) => byId.get(id)).find((c) => c.why);
      if (v.incomplete) {
        if (mode === 'pick') return { correct: false, incomplete: true, feedback: `조건에 맞는 카드를 골라 ‘${slots[0].label}’ 칸에 넣어요.`, hint: hintAt(t, 2, 1), v };
        if (mode === 'sort') return { correct: false, incomplete: true, feedback: `아직 칸에 넣지 않은 카드가 ${v.left.length}장 있어요.`, hint: hintAt(t, 2, 1), v };
        return { correct: false, incomplete: true, feedback: `빈 ${mode === 'order' ? '자리가' : '칸이'} ${v.empty.length}개 있어요. 카드를 모두 놓아요.`, hint: hintAt(t, 2, 1), v };
      }
      let fb;
      if (why) fb = why.why;
      else if (mode === 'order') {
        const w = v.wrongSlots;
        fb = w.length === 2 && w[1] - w[0] === 1 ? '이웃한 두 카드의 순서가 서로 바뀌었어요.' : `${w.length}장의 순서가 맞지 않아요. 흔들리는 카드를 다시 보세요.`;
      } else if (mode === 'sort') fb = `${v.wrong.length + v.left.length}장이 알맞은 칸에 있지 않아요. 흔들리는 카드를 다시 보세요.`;
      else if (mode === 'match') fb = `짝이 맞지 않는 곳이 ${v.wrong.length}군데 있어요. 흔들리는 카드를 다시 보세요.`;
      else if (mode === 'fill') fb = numeric ? `알맞지 않은 카드가 ${v.wrong.length}군데 있어요. 빈칸마다 앞뒤 글과 다시 견주어 보세요.` : `알맞지 않은 낱말이 ${v.wrong.length}군데 있어요. 문장을 처음부터 소리 내어 읽어 보세요.`;
      else fb = v.wrong.length && v.missing.length ? '조건에 맞지 않는 카드가 섞였고, 맞는 카드도 더 있어요.' : v.wrong.length ? `조건에 맞지 않는 카드를 ${v.wrong.length}장 골랐어요.` : `조건에 맞는 카드가 ${v.missing.length}장 더 있어요.`;
      return { correct: false, feedback: fb, hint: hintAt(t, 2, 1), v };
    }
    const HINT1 = {
      sort: '칸 이름을 먼저 소리 내어 읽고, 카드를 하나씩 보며 그 칸의 성질과 같은지 따져 넣어요.',
      order: '무엇이 맨 먼저 일어나는지 찾고, 그다음에 이어지는 것을 하나씩 놓아요.',
      match: '한쪽 말을 먼저 읽고, 그것과 꼭 어울리는 카드를 찾아 옆에 놓아요.',
      fill: '빈칸에 카드를 넣고 문장을 처음부터 소리 내어 읽어 봐요. 말이 자연스러운지 들어요.',
      pick: '카드마다 문제의 조건에 맞는지 하나씩 따져 보고, 맞는 것만 골라요.',
    };
    function hintAt(t, level, attempts) {
      const v = verdict(t);
      const lv = Math.max(1, Math.min(3, Number.isInteger(level) ? level : 1, attempts == null ? 3 : attempts >= 2 ? 3 : attempts >= 1 ? 2 : 1));
      if (lv <= 1) return o.hint1 || specText(spec.hints && spec.hints[mode]) || HINT1[mode];
      const e = v.e;
      if (v.e.kind === 'card') {
        const bad = v.wrong[0] || v.left[0] || v.missing[0];
        if (!bad) return HINT1[mode];
        const c = byId.get(bad); const a = at.get(bad);
        if (lv === 2) {
          if (mode === 'pick') return v.wrong.length ? `‘${nameOf(c)}’ 카드가 문제의 조건에 정말 맞는지 다시 따져 봐요.` : '아직 고르지 않은 카드 가운데 조건에 맞는 것이 있어요. 하나씩 다시 봐요.';
          return a == null ? `‘${nameOf(c)}’ 카드를 아직 넣지 않았어요. 어느 칸 성질과 같은지 생각해 봐요.` : `‘${nameOf(c)}’ 카드가 ${slotName(a)}에 맞는지 다시 생각해 봐요.`;
        }
        const ok = [...e.allow.get(bad)];
        if (mode === 'pick') return ok[0] === 0 ? `‘${nameOf(c)}’ 카드도 조건에 맞아요. 바구니에 넣어요.` : `‘${nameOf(c)}’ 카드는 조건에 맞지 않아요. 빼요.`;
        return ok[0] == null ? `‘${nameOf(c)}’ 카드는 어느 칸에도 들어가지 않아요. 카드 칸에 그대로 두어요.` : `‘${nameOf(c)}’ 카드는 ${slotName(ok[0])}에 들어가요.`;
      }
      const i = v.wrongSlots[0] != null ? v.wrongSlots[0] : v.empty[0];
      if (i == null) return HINT1[mode];
      if (lv === 2) {
        if (!v.occ[i]) return `${jo(slotName(i), '이', '가')} 비어 있어요. 앞뒤를 보고 들어갈 카드를 찾아요.`;
        // 바로 앞 '일'(이야기·사건·조리 차례)인지 '단계'·'카드'인지는 겉모양이 정한다(spec.prevWord, 기본 '카드')
        const pw = specText(spec.prevWord) || '카드';
        return mode === 'order' ? `${slotName(i)}의 ‘${nameOf(v.occ[i])}’ 카드를 다시 보세요. ${pw === '일' ? '바로 앞의 일' : `바로 앞 ${pw}`} 다음에 올 수 있을까요?` : `${slotName(i)}의 ‘${nameOf(v.occ[i])}’ 카드가 정말 어울리는지 다시 읽어 봐요.`;
      }
      const n = slots.length; const w = e.want[(i - (v.rot || 0) + n) % n];
      const c = byId.get([...w][0]);
      return c ? `${slotName(i)}에는 ‘${nameOf(c)}’ 카드가 와요.` : HINT1[mode];
    }
    // 정답 상태: 칸마다 되는 카드를 하나씩(겹치지 않게 짝 찾기), sort·pick은 카드마다 첫 칸
    function solution(t) {
      const e = expect(t); const out = new Map(cards.map((c) => [c.id, null]));
      if (e.kind === 'card') { cards.forEach((c) => out.set(c.id, [...e.allow.get(c.id)][0])); return out; }
      const owner = new Map();
      const tryAssign = (i, seen) => {
        for (const id of e.want[i] || []) {
          if (!byId.has(id) || seen.has(id)) continue;
          seen.add(id);
          if (!owner.has(id) || tryAssign(owner.get(id), seen)) { owner.set(id, i); return true; }
        }
        return false;
      };
      e.want.forEach((w, i) => { if (w) tryAssign(i, new Set()); });
      for (const [id, i] of owner) out.set(id, i);
      return out;
    }
    function apply(map) { cards.forEach((c) => at.set(c.id, map.get(c.id) == null ? null : map.get(c.id))); }
    function wrongStates(t) {
      const sol = solution(t); const list = [];
      const st = (m) => ({ at: Object.fromEntries(cards.map((c) => [c.id, m.get(c.id) == null ? null : m.get(c.id)])) });
      const ok = (s) => { const keep = getState(); setState(s); const r = verdict(t); setState(keep); return !r.correct && !r.incomplete; };
      const push = (m) => { const s = st(m); if (ok(s)) list.push(s); };
      const e = expect(t);
      if (e.kind === 'slot') {
        const inSlot = slots.map((_, i) => [...sol].find(([, v]) => v === i)).map((x) => (x ? x[0] : null));
        // 이웃 두 장 바꾸기 → 떨어진 두 장 바꾸기 → 함정 카드 한 장 넣기
        for (let i = 0; i + 1 < slots.length; i++) if (inSlot[i] && inSlot[i + 1]) { const m = new Map(sol); m.set(inSlot[i], i + 1); m.set(inSlot[i + 1], i); push(m); }
        for (let i = 0; i < slots.length; i++) for (let j = i + 2; j < slots.length; j++) if (inSlot[i] && inSlot[j]) { const m = new Map(sol); m.set(inSlot[i], j); m.set(inSlot[j], i); push(m); }
        const spare = cards.filter((c) => sol.get(c.id) == null);
        for (const c of spare) for (let i = 0; i < slots.length; i++) if (inSlot[i]) { const m = new Map(sol); m.set(inSlot[i], null); m.set(c.id, i); push(m); }
      } else if (mode === 'pick') {
        const out = cards.filter((c) => sol.get(c.id) == null); const inn = cards.filter((c) => sol.get(c.id) === 0);
        for (const c of out) { const m = new Map(sol); m.set(c.id, 0); push(m); }
        for (const c of out) for (const d of inn) { const m = new Map(sol); m.set(c.id, 0); m.set(d.id, null); push(m); }
        if (inn.length > 1) for (const d of inn) { const m = new Map(sol); m.set(d.id, null); push(m); }
      } else {
        // 한 장을 이웃 칸에(기준이 흔들림) → 함정 카드를 아무 칸에
        for (const c of cards) {
          const a = sol.get(c.id);
          const others = slots.map((_, i) => i).filter((i) => i !== a).sort((x, y) => Math.abs(x - (a ?? 0)) - Math.abs(y - (a ?? 0)));
          for (const i of others) { const m = new Map(sol); m.set(c.id, i); push(m); }
        }
      }
      return list;
    }
    // 이 판(카드·칸)으로 목표를 만들 수 있는가 — 없는 카드·칸 이름을 쓴 목표는 이유 글, 만들 수 있으면 null(검사기가 단계별 보기마다 부른다)
    function achievable(t) {
      t = t || target || {};
      const card = (id) => byId.has(String(id)); const slot = (id) => slotIdx(id) >= 0;
      const miss = [];
      if (mode === 'pick') arr(t.pick).forEach((id) => { if (!card(id)) miss.push(`카드 ‘${id}’`); });
      else if (mode === 'sort') for (const [k, v] of Object.entries(t.sort || {})) { if (slot(k)) arr(v).forEach((id) => { if (!card(id)) miss.push(`카드 ‘${id}’`); }); else if (card(k)) arr(v).forEach((b) => { if (!slot(b)) miss.push(`칸 ‘${b}’`); }); else miss.push(`칸 ‘${k}’`); }
      else if (mode === 'order') { const seq = arr(t.order).flat(); seq.forEach((id) => { if (!card(id)) miss.push(`카드 ‘${id}’`); }); if (seq.length > slots.length) miss.push(`자리 ${seq.length}개(지금 ${slots.length}개)`); }
      else for (const [k, v] of Object.entries(t.match || t.fill || t.pairs || {})) { if (!slot(k)) miss.push(`칸 ‘${k}’`); if (!arr(v).some(card)) miss.push(`카드 ‘${arr(v).join('|')}’`); }
      return miss.length ? `이 단계의 카드·칸에 목표의 ${[...new Set(miss)].slice(0, 3).join(', ')}이(가) 없음` : null;
    }
    return {
      mode, cards, slots, byId, at, nameOf, slotName, place, getState, setState, expect, verdict, judge, hintAt, solution, apply, wrongStates, HINT1, achievable,
      setTarget(t) { target = t || null; }, get target() { return target; },
      distance(a, b) { const x = (a && a.at) || {}; const y = (b && b.at) || {}; let d = 0; for (const c of cards) if ((x[c.id] ?? null) !== (y[c.id] ?? null)) d++; return d; },
      wrongAnswer(t) { const cur = JSON.stringify(getState()); const list = wrongStates(t); return list.find((s) => JSON.stringify(s) !== cur) || list[0] || null; },
    };
  }

  // ---- 기본 배치: ctx.slots에 자리를 적고 위쪽 판 높이를 돌려준다 ----
  const layouts = {
    sort(ctx) {
      const { W, cw, ch, slots, cards } = ctx; const n = slots.length; const N = cards.length;
      const per = n <= 3 ? n : n === 4 ? 2 : 3; const rows = Math.ceil(n / per);
      const bw = (W - 2 * PAD - GAP * (per - 1)) / per;
      const s = Math.min(0.86, (bw - 12) / cw); const cols = Math.max(1, Math.floor((bw - 12 + 6) / (cw * s + 6)));
      const expectN = Math.min(N, Math.ceil(N / n) + 1);
      const top = 46; const bh = top + Math.ceil(expectN / cols) * (ch * s + 6) + 8;
      slots.forEach((sl, i) => {
        const r = Math.floor(i / per); const k = i % per; const inRow = Math.min(per, n - r * per);
        const x0 = PAD + (W - 2 * PAD - (inRow * bw + (inRow - 1) * GAP)) / 2;
        Object.assign(sl, { x: x0 + k * (bw + GAP), y: PAD + r * (bh + GAP), w: bw, h: bh, top, scale: s });
      });
      return { H: PAD + rows * (bh + GAP) - GAP + 6 };
    },
    order(ctx) {
      const { W, cw, ch, slots } = ctx; const n = slots.length; const aw = 26; const sw = cw + 10; const sh = ch + 10; const lh = slots.some((s) => s.label) ? 30 : 26;
      const per = Math.max(1, Math.min(n, Math.floor((W - 2 * PAD + aw) / (sw + aw))));
      const rows = Math.ceil(n / per); const rowH = lh + sh + 16;
      slots.forEach((sl, i) => {
        const r = Math.floor(i / per); const k = i % per; const inRow = Math.min(per, n - r * per);
        const x0 = (W - (inRow * sw + (inRow - 1) * aw)) / 2;
        Object.assign(sl, { x: x0 + k * (sw + aw), y: PAD + r * rowH + lh, w: sw, h: sh, top: 0, lx: x0 + k * (sw + aw) + sw / 2, ly: PAD + r * rowH + lh / 2 + 1, lw: sw + aw - 6, badge: true });
      });
      return {
        H: PAD + rows * rowH,
        decorate(layer) {
          for (let i = 0; i + 1 < n; i++) {
            const a = slots[i]; const b = slots[i + 1];
            if (Math.abs(a.y - b.y) < 1) arrow(layer, a.x + a.w + 4, a.y + a.h / 2, b.x - 5, b.y + b.h / 2, { width: 3 });
          }
        },
      };
    },
    match(ctx) {
      const { W, cw, ch, slots } = ctx; const rowH = ch + 18; const dw = cw + 10;
      const lw = W - 2 * PAD - dw - 44;
      slots.forEach((sl, i) => {
        const y = PAD + i * rowH;
        Object.assign(sl, { x: W - PAD - dw, y, w: dw, h: ch + 10, top: 0, left: { x: PAD, y, w: lw, h: ch + 10 } });
      });
      return {
        H: PAD + slots.length * rowH - 8 + 6,
        decorate(layer) { slots.forEach((s) => arrow(layer, s.left.x + s.left.w + 6, s.y + s.h / 2, s.x - 6, s.y + s.h / 2, { dash: '5 6', width: 2.5 })); },
      };
    },
    fill(ctx) {
      const { W, cw, ch, slots } = ctx; const fs = 20; const bw = cw + 10; const bh = ch + 10; const avail = W - 2 * PAD - 20;
      let y = PAD;
      slots.forEach((sl) => {
        const parts = sl.label.split(/_{3,}/); const before = parts[0] || ''; const after = parts.slice(1).join(' ') || '';
        const wb = before ? textWidth(before, fs) + 10 : 0; const wa = after ? textWidth(after, fs) + 10 : 0;
        if (wb + bw + wa <= avail) {
          const x0 = PAD + 10 + (avail - (wb + bw + wa)) / 2;
          Object.assign(sl, { x: x0 + wb, y, w: bw, h: bh, top: 0, parts: [{ text: before, x: x0 + wb - 8, y: y + bh / 2, anchor: 'end', w: wb }, { text: after, x: x0 + wb + bw + 8, y: y + bh / 2, anchor: 'start', w: wa }], row: { y, h: bh } });
          y += bh + 14;
        } else {
          const lines = wrapLines(before, avail, fs).length; const th = before ? lines * fs * 1.25 + 6 : 0;
          const x0 = PAD + 10 + Math.max(0, (avail - bw - Math.min(wa, avail - bw)) / 2);
          Object.assign(sl, { x: x0, y: y + th, w: bw, h: bh, top: 0, parts: [{ text: before, x: W / 2, y: y + th / 2, anchor: 'middle', w: avail, lines: 3 }, { text: after, x: x0 + bw + 8, y: y + th + bh / 2, anchor: 'start', w: avail - bw - 8 }], row: { y, h: th + bh } });
          y += th + bh + 14;
        }
      });
      return { H: y - 14 + PAD };
    },
    pick(ctx) {
      const { W, cw, ch, slots, cards } = ctx; const N = cards.length; const s = 0.8;
      const cols = Math.max(1, Math.floor((W - 2 * PAD - 12 + 6) / (cw * s + 6)));
      const top = 46; const h = top + Math.max(1, Math.ceil((Math.ceil(N / 2) + 1) / cols)) * (ch * s + 6) + 8;
      Object.assign(slots[0], { x: PAD, y: PAD, w: W - 2 * PAD, h, top, scale: s });
      return { H: PAD + h + 6 };
    },
  };

  // ---- 교구 만들기 ----
  function define(id, spec) {
    spec = spec || {};
    const def = {
      name: spec.name || id,
      create(box, o0, kit) { return createBoard(id, spec, box, Object.assign({}, spec.defaults || {}, o0 || {}), kit); },
    };
    K.registerTool(id, def);
    return def;
  }

  function createBoard(id, spec, box, o, kit) {
    const M = model(o, spec);
    const { mode, cards, slots } = M;
    const print = !!o.print; const reveal = !!o.revealAfterCheck;
    const W = W0;
    const hasIcon = cards.some((c) => c.motif || c.big);
    const hasSub = cards.some((c) => c.sub || c.back);
    // 카드 크기: 가장 긴 글이 두 줄(넘치면 세 줄) 안에 들도록 폭을 고른다 — 휴대폰에서 글자가 커지는 것까지 어림한다.
    // 겉모양 cardSize는 [w, h](못박기) 또는 { min, max }(폭 범위)를 돌려준다. sub·back 줄이 있으면 그 줄만큼 높인다
    const want = spec.cardSize && spec.cardSize({ mode, cards, slots, o, hasIcon });
    const ICON = 46; const LINE = 24; const BAND = hasSub ? 22 : 0;
    let cw; let ch;
    if (Array.isArray(want)) { cw = want[0]; ch = want[1] + BAND; } else {
      const r = Object.assign({ min: 112, max: 168 }, want || {});
      const lines = (w) => Math.max(1, ...cards.map((c) => (c.text && c.text !== c.big ? wrapLines(c.text, w - 14, 18).length : 0)));
      // 낱말 하나가 줄 가운데서 잘리지 않을 만큼(‘태어났어/요’ 막기) 넓힌다
      const whole = (w) => cards.every((c) => !(c.text && c.text !== c.big) || c.text.split(/\s+/).every((word) => textWidth(word, 18) <= w - 14));
      cw = r.min; while (cw < r.max && (lines(cw) > 2 || !whole(cw))) cw += 8;
      ch = Math.max(hasIcon ? 0 : 56, (hasIcon ? ICON + 6 : 0) + Math.min(3, lines(cw)) * LINE + 14) + BAND;
    }
    if (o.cardW) cw = o.cardW;
    if (o.cardH) ch = o.cardH;
    const util = { el, textBlock, fitText, wrapLines, textWidth, PAD, GAP, arrow };
    const ctx = { mode, cards, slots, o, kit, P, W, cw, ch, print, util, id };
    const L = (spec.layout && spec.layout(ctx)) || layouts[mode](ctx);
    // 카드 칸(아래)
    const showTray = !(print && o.printCards === false);
    const trayCols = Math.max(1, Math.floor((W - 2 * PAD - 12 + GAP) / (cw + GAP)));
    const trayRows = Math.max(1, Math.ceil(cards.length / trayCols));
    const tray = { x: PAD, y: L.H + 6, w: W - 2 * PAD, h: 30 + trayRows * (ch + GAP) + 2, cols: trayCols };
    const H = showTray ? tray.y + tray.h + PAD : L.H + PAD;
    const st = kit.stage(box, { viewBox: [W, H], label: o.label || spec.label || `${spec.name || '카드 판'}. 카드를 알맞은 칸에 놓아요.` });
    ctx.st = st; ctx.H = H; ctx.tray = tray;
    ctx.iconAt = iconAt;
    const decorL = st.layer('decor'); const slotL = st.layer('slots'); const trayL = st.layer('tray'); const cardL = st.layer('cards');
    if (spec.decorate) spec.decorate(ctx, decorL);
    if (L.decorate) L.decorate(decorL);

    // ---- 칸 그리기 ----
    const slotEls = slots.map((sl, i) => {
      const g = el('g', { class: 'cd-slot', role: 'button', 'aria-label': `${M.slotName(i)}${sl.sub ? `, ${sl.sub}` : ''}` }, slotL);
      if (!print) g.setAttribute('tabindex', '-1');
      if (!(spec.drawSlot && spec.drawSlot(ctx, sl, g, i))) drawSlot(sl, g, i);
      return g;
    });
    function drawSlot(sl, g, i) {
      const tint = mode === 'pick' ? 'mint' : ['peach', 'mint', 'lavender', 'sky', 'buttercup', 'rose'][i % 6];
      if (sl.left) {
        // 짝 잇기의 왼쪽 말
        const L2 = sl.left;
        kit.piece(st, g, { shape: { type: 'rect', x: L2.x, y: L2.y, w: L2.w, h: L2.h, rx: 14 }, color: tint, depth: 2, fill: P[tint].light });
        let tx = L2.x + L2.w / 2; let tw = L2.w - 20;
        if (sl.motif || sl.big) { iconAt(g, sl, L2.x + 8 + (L2.h - 12) / 2, L2.y + L2.h / 2, L2.h - 14); tx = L2.x + L2.h + (L2.w - L2.h) / 2; tw = L2.w - L2.h - 14; }
        textBlock(g, sl.label, { x: tx, y: L2.y + L2.h / 2, w: tw, h: L2.h - 8, fs: 19, minFs: 15, maxLines: 2, fill: P[tint].dark });
      }
      if (sl.parts) sl.parts.forEach((p) => { if (p.text) textBlock(g, p.text, { x: p.x, y: p.y, w: Math.max(p.w, 40), fs: 20, minFs: 16, maxLines: p.lines || 1, anchor: p.anchor }); });
      if (sl.shape !== 'none') {
        const multi = sl.cap === Infinity;
        kit.piece(st, g, { shape: { type: 'rect', x: sl.x, y: sl.y, w: sl.w, h: sl.h, rx: multi ? 16 : 12 }, color: multi ? tint : 'cream', depth: multi ? 2 : 1, fill: multi ? P[tint].light : '#FFFDF8', texture: multi && !print });
        el('rect', { x: sl.x + 5, y: sl.y + (multi ? sl.top - 4 : 5), width: sl.w - 10, height: sl.h - (multi ? sl.top - 4 : 5) - 5, rx: 10, fill: 'none', stroke: print ? '#000' : P.lavender.layer, 'stroke-width': 1.6, 'stroke-dasharray': '7 6', 'pointer-events': 'none' }, g);
        if (multi && sl.label) {
          const pw = Math.min(sl.w - 16, Math.max(96, textWidth(sl.label, 18) + 28));
          kit.piece(st, g, { shape: { type: 'rect', x: sl.x + sl.w / 2 - pw / 2, y: sl.y + 7, w: pw, h: 32, rx: 16 }, color: tint, depth: 1 });
          textBlock(g, sl.label, { x: sl.x + sl.w / 2, y: sl.y + 23, w: pw - 14, h: 30, fs: 18, minFs: 13, maxLines: 2, fill: P[tint].dark });
          // 칸 sub 글: 겉모양이 칸 머리를 높여 자리를 마련했을 때만(top ≥ 60) 이름 아래 한 줄로
          if (sl.sub && sl.top >= 60) textBlock(g, sl.sub, { x: sl.x + sl.w / 2, y: sl.y + 50, w: sl.w - 16, h: 20, fs: 14, minFs: 12, maxLines: 1, fill: P[tint].dark });
        }
      }
      if (sl.badge) {
        // 순서 자리 머리: 이름이 있으면 이름, 없으면 번호 동그라미
        if (sl.label) textBlock(g, sl.label, { x: sl.lx, y: sl.ly, w: sl.lw, h: 28, fs: 17, minFs: 13, maxLines: 1, fill: P.lavender.dark });
        else { kit.piece(st, g, { shape: { type: 'circle', r: 12, cx: sl.lx, cy: sl.ly }, color: 'lavender', depth: 1 }); el('text', { x: sl.lx, y: sl.ly + 6, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: P.lavender.dark }, g).textContent = String(i + 1); }
      }
    }
    // 그림 조각: 모티프(PaperKit.scene)나 큰 글자를 (x,y) 가운데 size 크기 안에 그린다
    function iconAt(parent, d, x, y, size) {
      if (d.big) {
        const fs = Math.min(size * 0.82, d.big.length > 2 ? size * 1.6 / d.big.length : size * 0.82);
        const t = el('text', { x, y: y + fs * 0.35, 'text-anchor': 'middle', 'font-size': Math.round(fs), class: 'pk-text', fill: INK }, parent); t.textContent = d.big;
        return;
      }
      const fn = K.motifs[d.motif]; if (!fn || NO_MOTIF.has(d.motif)) return;
      const outer = el('g', { 'pointer-events': 'none' }, parent); const inner = el('g', null, outer);
      fn(st, inner, { x: 0, y: 0, s: 1, color: d.motifColor || undefined });
      let bb = null; try { bb = inner.getBBox(); } catch (_) { bb = null; }
      if (!bb || !bb.width) bb = { x: -40, y: -40, width: 80, height: 80 };
      const s = Math.min(size / bb.width, size / bb.height);
      // 작은 모티프(눈송이 같은)를 크게 키우면 그림자 필터가 네모 얼룩으로 번진다 — 크게 키울 때는 그림자를 뺀다
      if (s > 1.5) inner.querySelectorAll('[filter]').forEach((n) => n.removeAttribute('filter'));
      K.transform(outer, { x: x - (bb.x + bb.width / 2) * s, y: y - (bb.y + bb.height / 2) * s, s });
    }

    // ---- 카드 칸 ----
    let trayEl = null;
    if (showTray) {
      trayEl = el('g', { class: 'cd-tray', role: 'button', 'aria-label': `${o.trayLabel || '카드'} 칸(놓지 않은 카드)` }, trayL);
      if (!print) trayEl.setAttribute('tabindex', '-1');
      kit.piece(st, trayEl, { shape: { type: 'rect', x: tray.x, y: tray.y, w: tray.w, h: tray.h, rx: 16 }, color: 'cream', depth: 2, fill: '#FFF9EE' });
      el('text', { x: tray.x + 16, y: tray.y + 20, 'font-size': 14, class: 'pk-text', fill: P.peach.dark }, trayEl).textContent = o.trayLabel || '카드';
    }

    // ---- 카드 ----
    const order0 = o.shuffle === false ? cards.slice() : shuffled(cards);
    const trayRank = new Map(order0.map((c, i) => [c.id, i]));
    let seq = 0; const seqOf = new Map();
    const V = new Map(); // 카드id → { g, face, hit, backT, subT }
    for (const c of cards) {
      const g = el('g', { class: 'cd-card' }, cardL);
      const hit = el('rect', { x: -cw / 2 - 4, y: -ch / 2 - 4, width: cw + 8, height: ch + 8, class: 'pk-hit' }, g);
      const p = kit.piece(st, g, { shape: { type: 'rect', w: cw, h: ch, rx: 12 }, color: c.color, depth: 1, fill: P[c.color].light });
      const hasText = !!c.text && c.text !== c.big; let ty; let th;
      if (c.motif || c.big) {
        const isz = hasText ? Math.min(ICON, ch - BAND - 40) : ch - BAND - 14;
        iconAt(g, c, 0, -ch / 2 + 6 + isz / 2, isz);
        th = ch - BAND - isz - 14; ty = -ch / 2 + 6 + isz + 4 + th / 2;
      } else { th = ch - BAND - 12; ty = -BAND / 2; }
      if (hasText) textBlock(g, c.text, { x: 0, y: ty, w: cw - 14, h: th, fs: 18, minFs: 14, maxLines: 3, fill: P[c.color].dark, cls: 'cd-text' });
      let subT = null; let backT = null;
      if (c.sub) { subT = textBlock(g, c.sub, { x: 0, y: ch / 2 - 12, w: cw - 12, h: 22, fs: 15, minFs: 12, maxLines: 1, fill: P[c.color].dark }); }
      if (c.back) { backT = textBlock(g, c.back, { x: 0, y: ch / 2 - 12, w: cw - 12, h: 22, fs: 15, minFs: 12, maxLines: 1, fill: P.mint.dark, cls: 'cd-back' }); backT.setAttribute('display', 'none'); }
      V.set(c.id, { g, face: p.face, hit, subT, backT });
      if (!print) bind(c);
    }

    // ---- 자리 계산 ----
    const anims = new WeakMap();
    function posOf(c) {
      const a = M.at.get(c.id);
      if (a != null) {
        const sl = slots[a];
        if (sl.cap === Infinity) {
          const mates = cards.filter((x) => M.at.get(x.id) === a).sort((x, y) => (seqOf.get(x.id) || 0) - (seqOf.get(y.id) || 0));
          const k = mates.indexOf(c); const n = mates.length;
          const ix = sl.x + 6; const iy = sl.y + sl.top; const iw = sl.w - 12; const ih = sl.h - sl.top - 6;
          let s = Math.min(sl.scale || 0.8, iw / cw); let cols = 1;
          for (;;) { cols = Math.max(1, Math.floor((iw + 6) / (cw * s + 6))); const rows = Math.ceil(n / cols); if (rows * (ch * s + 6) - 6 <= ih || s < 0.4) break; s *= 0.92; }
          const r = Math.floor(k / cols); const cc = k % cols; const inRow = Math.min(cols, n - r * cols);
          return { x: ix + iw / 2 + (cc - (inRow - 1) / 2) * (cw * s + 6), y: iy + (ch * s) / 2 + r * (ch * s + 6), s };
        }
        // 한 장 칸: 칸 머리(top) 아래 남은 곳 가운데에 맞춰 줄인다
        const top = sl.top || 0; const s = Math.min(1, (sl.w - 8) / cw, (sl.h - top - 8) / ch);
        return { x: sl.x + sl.w / 2, y: sl.y + top + (sl.h - top) / 2, s };
      }
      const list = cards.filter((x) => M.at.get(x.id) == null).sort((x, y) => trayRank.get(x.id) - trayRank.get(y.id));
      const i = list.indexOf(c); const n = list.length; const cols = tray.cols; const row = Math.floor(i / cols);
      const inRow = Math.min(cols, n - row * cols);
      return { x: W / 2 + ((i % cols) - (inRow - 1) / 2) * (cw + GAP), y: tray.y + 28 + ch / 2 + row * (ch + GAP), s: 1 };
    }
    function moveTo(c, t, animate) {
      const v = V.get(c.id); const token = {}; anims.set(v.g, token);
      // 작게 놓인 카드도 손가락으로 잡을 수 있게 판정 영역을 화면 44px 이상으로 둔다
      const hw = Math.max(cw + 8, 74 / t.s); const hh = Math.max(ch + 8, 74 / t.s);
      v.hit.setAttribute('x', -hw / 2); v.hit.setAttribute('y', -hh / 2); v.hit.setAttribute('width', hw); v.hit.setAttribute('height', hh);
      // 활동지에서 카드 칸을 그리지 않으면(printCards:false) 놓지 않은 카드도 숨긴다
      if (!showTray) v.g.setAttribute('display', M.at.get(c.id) == null ? 'none' : 'inline');
      if (!animate || reduceMotion) { kit.transform(v.g, { x: t.x, y: t.y, s: t.s, r: 0 }); return; }
      const f = Object.assign({ x: 0, y: 0, s: 1 }, v.g.__pk);
      kit.tween(260, (q) => { if (anims.get(v.g) !== token) return; kit.transform(v.g, { x: f.x + (t.x - f.x) * q, y: f.y + (t.y - f.y) * q, s: f.s + (t.s - f.s) * q, r: 0 }); });
    }
    const layout = (animate) => cards.forEach((c) => moveTo(c, posOf(c), animate));

    // ---- 보이는 표시 ----
    let revealed = false; let sel = null;
    const showBacks = () => (reveal ? revealed : (o.showBack || revealed)) && !print;
    function paint() {
      const t = M.target; const live = o.live && !reveal && t && !print;
      let v = null; if (live) v = M.verdict(t);
      for (const c of cards) {
        const x = V.get(c.id);
        if (x.backT) { x.backT.setAttribute('display', showBacks() ? 'inline' : 'none'); if (x.subT) x.subT.setAttribute('display', showBacks() ? 'none' : 'inline'); }
        const placed = M.at.get(c.id) != null;
        x.g.classList.toggle('pk-ok', !!(live && placed && !v.wrong.includes(c.id) && cardRight(c, v)));
        const on = sel === c;
        x.face.setAttribute('stroke', on ? '#473B6B' : 'rgba(255,255,255,0.55)'); x.face.setAttribute('stroke-width', on ? 3.5 : 1);
        if (!print) x.g.setAttribute('aria-pressed', String(on));
        const a = M.at.get(c.id);
        if (!print) x.g.setAttribute('aria-label', `${c.name} 카드. ${a == null ? '아직 놓지 않음' : `${M.slotName(a)}에 있음`}. ${mode === 'pick' ? 'Enter로 넣고 빼요.' : '방향키로 칸을 옮기거나 Enter로 고른 뒤 칸을 골라요.'}`);
      }
    }
    // live 표시용: 그 카드가 지금 자리에서 맞는가(돌고 도는 순서는 가장 잘 맞는 돌림 기준)
    function cardRight(c, v) {
      if (v.e.kind === 'card') return v.e.allow.get(c.id).has(M.at.get(c.id));
      const i = M.at.get(c.id); const n = slots.length; const w = v.e.want[(i - (v.rot || 0) + n) % n];
      return !!w && w.has(c.id);
    }
    let msg = null;
    if (!print && o.instant && !reveal) {
      msg = document.createElement('p'); msg.className = 'cd-msg'; msg.setAttribute('aria-live', 'polite');
      msg.style.cssText = 'margin:6px 2px 0;min-height:1.5em;font-weight:700;line-height:1.45;word-break:keep-all';
      box.appendChild(msg);
    }
    const log = (via) => kit.recorder.log(id, Object.assign({ via }, M.getState()));

    function placeAt(c, idx, via) {
      const before = M.at.get(c.id);
      M.place(c.id, idx);
      if (M.at.get(c.id) === before) { layout(true); paint(); return; }
      seqOf.set(c.id, ++seq);
      revealed = false;
      const now = M.at.get(c.id);
      if (msg) msg.textContent = '';
      if (o.instant && !reveal && M.target && now != null) {
        const v = M.verdict(M.target);
        if (!cardRight(c, v)) {
          kit.tick('no');
          const t = c.why || `‘${M.nameOf(c)}’ 카드는 ${M.slotName(now)}에 맞지 않아요. 다시 생각해 봐요.`;
          if (msg) msg.textContent = t; kit.announce(t);
          layout(true); paint();
          setTimeout(() => { if (M.at.get(c.id) === now) { M.place(c.id, null); layout(true); paint(); log('instant'); } }, 700);
          log(via); return;
        }
      }
      kit.tick(now != null && o.instant && !reveal && M.target ? 'ok' : undefined);
      layout(true); paint(); log(via);
      kit.announce(now == null ? `‘${M.nameOf(c)}’ 카드를 카드 칸으로 돌려놓았어요.` : `‘${M.nameOf(c)}’ 카드를 ${M.slotName(now)}에 놓았어요.`);
    }
    function select(c, focusSlot) {
      sel = c || null;
      slotEls.forEach((s) => s.setAttribute('tabindex', sel ? '0' : '-1'));
      if (trayEl) trayEl.setAttribute('tabindex', sel ? '0' : '-1');
      paint();
      if (sel) {
        const v = V.get(sel.id); kit.transform(v.g, { s: (posOf(sel).s || 1) * 1.06 });
        kit.announce(`‘${M.nameOf(sel)}’ 카드를 골랐어요. 놓을 칸을 고르세요.`);
        if (focusSlot) {
          const empty = slots.findIndex((s, i) => s.cap === Infinity || !cards.some((x) => M.at.get(x.id) === i));
          const f = slotEls[Math.max(0, empty)]; if (f) f.focus({ preventScroll: true });
        }
      } else layout(true);
    }
    function step(c, d) {
      const n = slots.length; const cur = M.at.get(c.id); const pos = cur == null ? 0 : cur + 1;
      const next = (pos + d + n + 1) % (n + 1);
      placeAt(c, next === 0 ? null : next - 1, 'keyboard');
    }
    function slotAt(x, y) {
      for (let i = 0; i < slots.length; i++) { const s = slots[i]; if (x >= s.x - 8 && x <= s.x + s.w + 8 && y >= s.y - 8 && y <= s.y + s.h + 8) return i; }
      if (mode === 'match') for (let i = 0; i < slots.length; i++) { const s = slots[i]; if (y >= s.y && y <= s.y + s.h && x >= s.left.x) return i; }
      return null;
    }
    function tap(c) {
      if (mode === 'pick') { placeAt(c, M.at.get(c.id) == null ? 0 : null, 'tap'); return; }
      if (sel && sel !== c) {
        if (M.at.get(c.id) != null) { const s = sel; select(null); placeAt(s, M.at.get(c.id), 'tap'); return; }
        select(c); return;
      }
      select(sel === c ? null : c);
    }
    function bind(c) {
      const v = V.get(c.id);
      // kit.drag의 방향키(자유 이동)보다 먼저 받는다: 방향키 = 다음·앞 칸으로, Enter = 고르고 칸 고르기
      v.g.addEventListener('keydown', (e) => {
        const k = e.key; let used = true;
        if (mode === 'pick') {
          if (k === 'Enter' || k === ' ') placeAt(c, M.at.get(c.id) == null ? 0 : null, 'keyboard');
          else if (k === 'ArrowRight' || k === 'ArrowDown') placeAt(c, M.at.get(c.id) == null ? 0 : null, 'keyboard');
          else if (k === 'ArrowLeft' || k === 'ArrowUp' || k === '0' || k === 'Backspace' || k === 'Delete') placeAt(c, null, 'keyboard');
          else used = false;
        } else if (k === 'ArrowRight' || k === 'ArrowDown') { select(null); step(c, 1); }
        else if (k === 'ArrowLeft' || k === 'ArrowUp') { select(null); step(c, -1); }
        else if (k === 'Enter' || k === ' ') { if (sel === c) select(null); else select(c, true); }
        else if (/^[1-9]$/.test(k) && Number(k) <= slots.length) { select(null); placeAt(c, Number(k) - 1, 'keyboard'); }
        else if (k === '0' || k === 'Backspace' || k === 'Delete') { select(null); placeAt(c, null, 'keyboard'); }
        else if (k === 'Escape') select(null);
        else used = false;
        if (used) { e.preventDefault(); e.stopImmediatePropagation(); }
      });
      let p0 = null; let moved = false;
      kit.drag(st, v.g, {
        bounds: [cw / 2, ch / 2, W - cw / 2, H - ch / 2],
        onStart() { moved = false; p0 = Object.assign({}, v.g.__pk); anims.set(v.g, {}); kit.transform(v.g, { s: (p0.s || 1) * 1.06 }); },
        onMove(x, y) { if (p0 && Math.hypot(x - p0.x, y - p0.y) > 8) moved = true; },
        snap(x, y) {
          if (!moved) { tap(c); const t = posOf(c); return t; }
          placeAt(c, slotAt(x, y), 'pointer');
          if (sel) select(null);
          return posOf(c);
        },
      });
    }
    slotEls.forEach((g, i) => {
      if (print) return;
      g.addEventListener('click', () => { if (sel) { const s = sel; select(null); placeAt(s, i, 'tap'); } });
      g.addEventListener('keydown', (e) => {
        const k = e.key; const n = slotEls.length; let used = true;
        if ((k === 'Enter' || k === ' ') && sel) { const s = sel; select(null); placeAt(s, i, 'keyboard'); V.get(s.id).g.focus({ preventScroll: true }); }
        else if (k === 'ArrowRight' || k === 'ArrowDown') (i + 1 < n ? slotEls[i + 1] : trayEl || slotEls[0]).focus({ preventScroll: true });
        else if (k === 'ArrowLeft' || k === 'ArrowUp') slotEls[(i - 1 + n) % n].focus({ preventScroll: true });
        else if (/^[1-9]$/.test(k) && Number(k) <= n && sel) { const s = sel; select(null); placeAt(s, Number(k) - 1, 'keyboard'); V.get(s.id).g.focus({ preventScroll: true }); }
        else if (k === 'Escape' && sel) { const s = sel; select(null); V.get(s.id).g.focus({ preventScroll: true }); }
        else used = false;
        if (used) e.preventDefault();
      });
    });
    if (trayEl && !print) {
      trayEl.addEventListener('click', () => { if (sel) { const s = sel; select(null); placeAt(s, null, 'tap'); } });
      trayEl.addEventListener('keydown', (e) => {
        if (!sel) return;
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); const s = sel; select(null); placeAt(s, null, 'keyboard'); V.get(s.id).g.focus({ preventScroll: true }); }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); slotEls[slotEls.length - 1].focus({ preventScroll: true }); }
        else if (e.key === 'Escape') { e.preventDefault(); const s = sel; select(null); V.get(s.id).g.focus({ preventScroll: true }); }
      });
    }
    function flagWrong(ids) {
      ids.forEach((cid) => {
        const v = V.get(cid); if (!v) return;
        v.g.classList.add('pk-no');
        kit.tween(500, (q) => kit.transform(v.g, { r: Math.sin(q * Math.PI * 4) * 5 * (1 - q), cx: 0, cy: 0 })).then(() => kit.transform(v.g, { r: 0 }));
        setTimeout(() => v.g.classList.remove('pk-no'), 2500);
      });
    }
    const api = {
      box,
      // 칸 하나를 잠깐 빛낸다(겉모양의 '돌려 보기' 같은 단추가 쓴다)
      flash(i) { const g = slotEls[i]; if (!g) return; g.classList.add('pk-ok'); setTimeout(() => g.classList.remove('pk-ok'), 520); },
      model: M,
    };
    if (spec.controls && !print) spec.controls(ctx, api);
    layout(false); paint();

    return {
      getState: M.getState,
      setState(s) { sel = null; M.setState(s); cards.forEach((c) => seqOf.set(c.id, M.at.get(c.id) == null ? 0 : ++seq)); revealed = false; layout(false); paint(); },
      setTarget(t) { M.setTarget(t); paint(); },
      reset() { sel = null; M.setState({}); revealed = false; if (msg) msg.textContent = ''; layout(false); paint(); },
      solve(t) { sel = null; M.apply(M.solution(t || M.target)); cards.forEach((c) => seqOf.set(c.id, ++seq)); layout(false); paint(); },
      check(t, opts) {
        const quiet = !!(opts && opts.forHint);
        const r = M.judge(t || M.target);
        if (!quiet) {
          if (r.correct) { revealed = true; kit.tick('ok'); } else if (!r.incomplete) { kit.tick('no'); flagWrong(r.v.wrong.concat(r.v.left || [])); }
          paint(); log('check');
        }
        const out = { correct: r.correct, feedback: r.feedback };
        if (r.incomplete) out.incomplete = true;
        if (!r.correct) out.hint = r.hint;
        return out;
      },
      hint(t, opts) {
        const tt = t || M.target;
        if (M.verdict(tt).correct) return { hint: '모두 알맞게 놓았어요.', correct: true };
        const lv = opts && Number.isInteger(opts.level) ? opts.level : 1; const att = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
        return { hint: M.hintAt(tt, lv, att), correct: false };
      },
      wrongAnswer: (t) => M.wrongAnswer(t || M.target),
      achievable: (t) => M.achievable(t || M.target),
      distance: M.distance,
      // 교사 시연: 카드가 한 장씩 제자리로 간다
      async demo(t) {
        const sol = M.solution(t || M.target);
        M.setState({}); layout(true); paint(); await kit.wait(400);
        const list = cards.filter((c) => sol.get(c.id) != null).sort((a, b) => sol.get(a.id) - sol.get(b.id));
        for (const c of list) { M.place(c.id, sol.get(c.id)); seqOf.set(c.id, ++seq); layout(true); paint(); kit.tick(); await kit.wait(450); }
        revealed = true; paint();
      },
    };
  }

  K.cards = { version: '1.0.0', define, model, layouts, MODES, util: { el, textBlock, fitText, wrapLines, textWidth, arrow, PAD, GAP, W: W0 } };
})(typeof window !== 'undefined' ? window.PaperKit : globalThis.PaperKit);
