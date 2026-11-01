/* 갈림길 상황(딜레마) — 상황 장면을 읽고 선택지를 고르면 그 결과(누구에게 어떤 영향)가 나오고, 다음 장면에서 또 고른다(최대 3단계 나무).
 * 끝 장면에서 '내 선택의 근거' 카드를 고르고, 다른 선택을 했을 때의 결과와 견준다. 되돌아가 다른 길을 끝까지 가 볼 수 있다.
 * 중·고 사례·딜레마 학습(안전·권리·책임·관계·디지털 시민성), 정답 경로가 없는 열린 딜레마(토의용)도 쓴다.
 *
 * ── 옵션 (toolOptions) ───────────────────────────────────────────────────────────────────────────────────────────
 * | 옵션             | 모양                                                       | 뜻                                                              |
 * |------------------|------------------------------------------------------------|-----------------------------------------------------------------|
 * | scene (필수)      | { text, ask?, motif?, who?, choices: [선택…] }               | 첫 장면. 줄여 쓰기: 맨 위에 situation·choices·ask·motif를 두어도 된다 |
 * | 선택             | { id, text, result?, impact?, why?, next?, ending? }        | id = 장면 안에서 겹치지 않는 이름. result = 고르면 바로 보이는 결과 글 |
 * |   impact         | [{ who: '친구', text: '믿음이 깨져요', tone: -1 | 0 | 1 }]     | 누구에게 어떤 영향 — tone 1 도움, -1 피해, 0 그대로(글로도 붙는다)    |
 * |   why            | 글                                                         | 이 선택이 들어간 길을 골라 틀렸을 때 피드백 한 문장                  |
 * |   next           | 장면({ text, ask?, motif?, choices })                       | 고른 뒤 이어지는 장면. 없으면 이 선택이 끝 장면이다. 깊이 3을 넘는 장면은 버린다 |
 * |   ending         | 글                                                         | 끝 장면(next 없는 선택)에서 보이는 마무리 한 문장                    |
 * | reasons          | ['근거 글', …] 또는 [{ id, text, why? }] (2~6장)              | 끝에서 고르는 '내 선택의 근거' 카드. 글만 쓰면 id = 글. why = 잘못 골랐을 때 피드백 |
 * | maxReasons       | 수                                                         | 근거 카드를 몇 장까지 고를 수 있는지(없으면 제한 없음)                |
 * | compare          | 참(기본)/거짓                                               | 끝에서 '다른 선택을 했다면' — 지나온 장면마다 고르지 않은 선택의 결과·영향을 보인다 |
 * | title            | 글                                                         | 그림 띠 머리 글(기본 '갈림길 상황')                                 |
 * | revealAfterCheck | 참/거짓                                                     | 맞힌 확인 전에는 영향의 도움·피해 표시와 '다른 선택을 했다면' 칸을 숨긴다 |
 * | hint1            | 글                                                         | 1단계 힌트(생각 방법) 대신 쓸 글 — 선택 id·글을 쓰지 않는다            |
 * | success          | 글                                                         | 맞혔을 때 피드백 한 문장                                            |
 * | print            | 참/거짓                                                     | 활동지 그림: 첫 장면 글 + 선택(○ 칠 자리) + 빈 결과·영향 칸 + 근거 카드(□) + 까닭 줄(두 단 — 활동지 figure에 wide: true) |
 *
 * ── 상태 (getState / setState) ──
 *   { path: [선택id, …], reasons: [근거id, …], seen: ['a>b', …](끝까지 가 본 길), checks?: [true|false, …](target.selfCheck가 목록일 때) }
 *   path는 첫 장면부터 고른 차례. 끝 장면에 닿으면 seen에 그 길이 더해진다(되돌아가도 남는다).
 *
 * ── target (칸을 섞어 쓰면 모두 맞아야 정답. 어느 것이든 끝 장면까지 가야 한다) ──
 *   { path: ['a', 'b'] | [['a', 'b'], ['c', '*']] }   (a) 안전·권리 기준에 맞는 길(여러 길 허용). '*' = 그 단계는 무엇을 골라도 됨
 *   { reasons: ['r1', 'r3'], some?: true }           (b) 근거 카드 — 기본은 정확히 이 카드들, some이면 이 가운데 하나 이상만(다른 카드 없이)
 *   { explore: 2 }                                    서로 다른 끝 장면을 2개 이상 가 보기(되돌아가 다른 길 보기)
 *   { selfCheck: true | ['…', …] }                    (c) 토의용 — 끝까지 탐색 + 근거 한 장 이상(근거 카드가 있을 때). 목록이면 그 점검 항목도 모두 표시
 *   정답 길이 없는 열린 딜레마는 path 없이 { selfCheck: true } 또는 { reasons: [...] }를 쓴다.
 *
 * ── 판정·힌트 ── check(target) → { correct, incomplete?, feedback, hint }. incomplete = 끝 장면 전·근거 안 고름·점검 안 함.
 *   hint(target, { level, attempts }) 1 = 생각 방법(누가 영향을 받나·안전과 권리) 2 = 어긋난 단계·근거 짚기 3 = 그 단계에서 고를 선택·근거.
 *   wrongAnswer = 기준에 맞지 않는 끝까지 간 길 / 근거 한 장을 함정 카드로 / 길 하나만 가 봄 / 점검 하나 빠뜨림.
 *   distance = 갈라진 단계부터 다른 선택 수 + 다르게 고른 근거 수 + 다른 점검 수.
 * ── 조작 ── 선택 단추를 누르면(Tab으로 옮기고 Enter·Space) 결과가 나오고 다음 장면으로 간다. '한 단계 되돌리기'·'처음부터 다른 길'.
 *   끝 장면에서 근거 카드는 눌러서 넣고 뺀다.
 *
 * ── 짧은 예 ──
 *   toolOptions: { scene: { text: '단톡방에 친구 사진이 놀림 글과 함께 올라왔다.', motif: 'house', choices: [
 *       { id: 'join', text: '웃는 이모티콘을 단다', result: '놀림 글이 더 퍼진다.', impact: [{ who: '사진 속 친구', text: '더 큰 상처를 받는다', tone: -1 }] },
 *       { id: 'stop', text: '올린 친구에게 내리자고 말한다', result: '올린 친구가 머뭇거린다.', next: { text: '올린 친구가 "장난인데 왜 그래?"라고 한다.', choices: [
 *           { id: 'report', text: '담임 선생님께 알린다', result: '사진이 내려가고 사과가 이루어진다.', impact: [{ who: '사진 속 친구', text: '보호받는다', tone: 1 }] },
 *           { id: 'drop', text: '그냥 넘어간다', result: '사진이 그대로 남는다.' }] } }] },
 *     reasons: [{ id: 'right', text: '누구나 자기 사진이 함부로 쓰이지 않을 권리가 있다' }, { id: 'all', text: '다들 그러니까 괜찮다', why: '여럿이 한다고 옳은 일이 되지는 않아요.' }] },
 *   target: { path: [['stop', 'report']], reasons: ['right'] }
 */
(function (K) {
  'use strict';
  const MAX_DEPTH = 3;
  const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
  // 받침에 맞는 조사(따옴표 뒤도)
  const jo = (w, a, b) => { const s = String(w).replace(/[’'"”)\]\s]+$/, ''); const c = s.charCodeAt(s.length - 1); if (c >= 0xac00 && c <= 0xd7a3) return `${w}${(c - 0xac00) % 28 ? a : b}`; return `${w}${/[013678]$/.test(s) ? a : b}`; };
  const short = (t, n = 22) => { const s = String(t); return s.length > n ? `${s.slice(0, n - 1)}…` : s; };
  const jq = (w, a, b) => `‘${short(w)}’${jo(short(w), a, b).slice(short(w).length)}`;
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    return Math.max(1, Math.min(3, want, a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1));
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // ---- 나무 정리 ----
  function normScene(x, depth) {
    if (!x || typeof x !== 'object' || depth > MAX_DEPTH) return null;
    const seen = new Set();
    const choices = arr(x.choices).map((c, i) => {
      const y = typeof c === 'object' && c ? c : { text: String(c) };
      let id = String(y.id != null ? y.id : y.text != null ? y.text : `c${i + 1}`);
      while (seen.has(id)) id += '′';
      seen.add(id);
      const impact = arr(y.impact).map((m) => (typeof m === 'object' && m ? { who: String(m.who || ''), text: String(m.text || ''), tone: Number(m.tone) > 0 || m.tone === '+' ? 1 : Number(m.tone) < 0 || m.tone === '-' ? -1 : 0 } : { who: '', text: String(m), tone: 0 }));
      return { id, text: String(y.text != null ? y.text : id), result: y.result ? String(y.result) : '', impact, why: y.why ? String(y.why) : '', ending: y.ending ? String(y.ending) : '', next: depth < MAX_DEPTH ? normScene(y.next, depth + 1) : null };
    });
    return { text: String(x.text || ''), ask: x.ask ? String(x.ask) : '', motif: x.motif || null, who: x.who ? String(x.who) : '', choices };
  }
  function treeOf(o) {
    o = o || {};
    if (o.__dl) return o.__dl;
    const src = o.scene || { text: o.situation, ask: o.ask, motif: o.motif, who: o.who, choices: o.choices };
    const root = normScene(src, 1) || { text: '', ask: '', motif: null, who: '', choices: [] };
    const reasons = arr(o.reasons).map((r, i) => {
      const y = typeof r === 'object' && r ? r : { text: String(r) };
      return { id: String(y.id != null ? y.id : y.text != null ? y.text : `r${i + 1}`), text: String(y.text != null ? y.text : y.id), why: y.why ? String(y.why) : '' };
    });
    // 끝까지 가는 길 전부(깊이 우선, 선택 차례대로)
    const leaves = [];
    (function walk(n, path) { n.choices.forEach((c) => { const p = path.concat(c.id); if (c.next && c.next.choices.length) walk(c.next, p); else leaves.push(p); }); })(root, []);
    let depth = 0; leaves.forEach((p) => { depth = Math.max(depth, p.length); });
    const T = { root, reasons, leaves, depth };
    try { Object.defineProperty(o, '__dl', { value: T, enumerable: false }); } catch (_) { /* 얼린 옵션 */ }
    return T;
  }
  // 길을 따라가 본다: steps = [{ node, choice }], cur = 지금 장면(끝이면 null)
  function walkPath(T, path) {
    const steps = []; let node = T.root;
    for (const id of arr(path)) {
      if (!node) break;
      const c = node.choices.find((x) => x.id === String(id));
      if (!c) break;
      steps.push({ node, choice: c });
      node = c.next && c.next.choices.length ? c.next : null;
    }
    return { steps, cur: node, ended: !node && steps.length > 0 };
  }
  const keyOf = (p) => arr(p).join('>');
  function patterns(t) {
    const p = t && t.path;
    if (p == null) return null;
    const a = arr(p);
    return a.length && a.every((x) => Array.isArray(x)) ? a.map((x) => x.map(String)) : [a.map(String)];
  }
  const matches = (path, pat) => path.length === pat.length && pat.every((x, i) => x === '*' || x === path[i]);
  const prefixOk = (path, pats) => pats.some((pat) => path.length <= pat.length && path.every((x, i) => pat[i] === '*' || pat[i] === x));
  function cleanState(T, s) {
    s = s || {};
    const w = walkPath(T, s.path);
    const rid = new Set(T.reasons.map((r) => r.id));
    const leafKeys = new Set(T.leaves.map(keyOf));
    const out = { path: w.steps.map((x) => x.choice.id), reasons: [...new Set(arr(s.reasons).map(String))].filter((x) => rid.has(x)), seen: [...new Set(arr(s.seen).map(String))].filter((k) => leafKeys.has(k)) };
    if (w.ended && !out.seen.includes(keyOf(out.path))) out.seen.push(keyOf(out.path));
    if (s.checks) out.checks = arr(s.checks).map(Boolean);
    return out;
  }

  function judge(s0, t, o) {
    t = t || {}; const T = treeOf(o); const s = cleanState(T, s0);
    const pats = patterns(t);
    const parts = ['path', 'reasons', 'explore', 'selfCheck'].filter((k) => t[k] != null && t[k] !== false);
    if (!parts.length) return { correct: false, incomplete: true, feedback: '장면을 읽고 선택을 골라 끝까지 가 보세요.' };
    const w = walkPath(T, s.path);
    if (!w.ended) return { correct: false, incomplete: true, feedback: s.path.length ? `아직 ${s.path.length + 1}번째 장면이에요. 끝 장면까지 골라 가요.` : '첫 장면을 읽고 선택 하나를 골라요.', part: 'walk' };
    if (pats) {
      if (!pats.some((pat) => matches(s.path, pat))) {
        let at = 0; while (at < s.path.length && prefixOk(s.path.slice(0, at + 1), pats)) at++;
        at = Math.min(at, s.path.length - 1);
        const c = w.steps[at].choice;
        return { correct: false, part: 'path', at, feedback: c.why || `${at + 1}번째 장면에서 ${jq(c.text, '을', '를')} 고른 뒤 누가 어떤 영향을 받았는지 다시 읽어 봐요. 모두의 안전과 권리를 지키는 길인지 따져 봐요.` };
      }
    }
    const needReasons = t.reasons != null || (t.selfCheck != null && T.reasons.length > 0);
    if (needReasons && !s.reasons.length) return { correct: false, incomplete: true, feedback: '끝 장면 아래에서 내 선택의 근거 카드를 골라요.', part: 'reasons' };
    if (t.reasons != null) {
      const want = new Set(arr(t.reasons).map(String)); const got = s.reasons;
      const extra = got.filter((x) => !want.has(x)); const missing = [...want].filter((x) => !got.includes(x));
      if (extra.length) { const r = T.reasons.find((x) => x.id === extra[0]); return { correct: false, part: 'reasons', extra: extra[0], feedback: (r && r.why) || `${jq(r ? r.text : extra[0], '은', '는')} 이 결정을 받쳐 주는 근거로 알맞은지 다시 생각해 봐요.` }; }
      if (!t.some && missing.length) return { correct: false, part: 'reasons', missing: missing[0], feedback: `근거가 ${missing.length}장 더 필요해요. 내 선택이 누구의 안전과 권리를 지키는지 떠올려 보세요.` };
    }
    if (t.explore != null) {
      const need = Math.min(T.leaves.length, Math.max(1, Number(t.explore) || 1));
      if (s.seen.length < need) return { correct: false, part: 'explore', feedback: `다른 길도 끝까지 가 봐요. 지금 ${s.seen.length}개, ${need}개 길을 가 보아야 해요. '한 단계 되돌리기'를 눌러 보세요.` };
    }
    if (Array.isArray(t.selfCheck) && t.selfCheck.length) {
      const got = s.checks || []; const left = t.selfCheck.filter((_, i) => !got[i]);
      if (left.length === t.selfCheck.length && parts.length === 1 && !T.reasons.length) return { correct: false, incomplete: true, feedback: '끝 장면 아래 점검 목록에서 해낸 것을 표시해요.', part: 'self' };
      if (left.length) return { correct: false, part: 'self', left, feedback: `아직 표시하지 않은 점검 항목이 ${left.length}개 있어요.` };
    }
    const said = pats ? '모두의 안전과 권리를 지키는 길을 골랐어요' : t.reasons != null ? '결정을 받쳐 주는 근거를 알맞게 골랐어요' : '끝까지 가 보고 내 선택의 근거를 정했어요';
    return { correct: true, feedback: `맞아요! ${said}.` };
  }

  function solve(t, o) {
    t = t || {}; const T = treeOf(o); const pats = patterns(t);
    const path = (pats ? T.leaves.find((p) => pats.some((pat) => matches(p, pat))) : T.leaves[0]) || [];
    let reasons = [];
    if (t.reasons != null) reasons = t.some ? arr(t.reasons).slice(0, 1).map(String) : arr(t.reasons).map(String);
    else if (t.selfCheck != null && T.reasons.length) reasons = [T.reasons[0].id];
    const need = t.explore != null ? Math.min(T.leaves.length, Math.max(1, Number(t.explore) || 1)) : 1;
    const seen = [keyOf(path)]; for (const p of T.leaves) { if (seen.length >= need) break; if (!seen.includes(keyOf(p))) seen.push(keyOf(p)); }
    const s = { path: path.slice(), reasons, seen };
    if (Array.isArray(t.selfCheck)) s.checks = t.selfCheck.map(() => true);
    return s;
  }

  function wrongAnswer(t, o, cur) {
    t = t || {}; const T = treeOf(o); const good = solve(t, o); const list = []; const clone = () => JSON.parse(JSON.stringify(good));
    const pats = patterns(t);
    if (pats) {
      // 기준에 맞지 않는 길 — 첫 장면에서 갈라지는 길을 먼저(가장 흔한 오개념: 당장 편한 선택)
      const bad = T.leaves.filter((p) => !pats.some((pat) => matches(p, pat)));
      bad.sort((a, b) => (prefixOk(a.slice(0, 1), pats) ? 1 : 0) - (prefixOk(b.slice(0, 1), pats) ? 1 : 0));
      for (const p of bad.slice(0, 3)) { const a = clone(); a.path = p.slice(); a.seen = [keyOf(p)]; list.push(a); }
    }
    if (t.reasons != null) {
      const want = arr(t.reasons).map(String); const trap = T.reasons.find((r) => !want.includes(r.id));
      if (trap) { const a = clone(); a.reasons = t.some ? [want[0], trap.id] : want.concat(trap.id); list.push(a); }
      if (!t.some && want.length >= 2) { const a = clone(); a.reasons = want.slice(0, -1); list.push(a); }
    }
    if (t.explore != null && Number(t.explore) > 1) { const a = clone(); a.seen = [keyOf(a.path)]; list.push(a); }
    if (Array.isArray(t.selfCheck) && t.selfCheck.length) { const a = clone(); a.checks[a.checks.length - 1] = false; list.push(a); }
    const curJ = JSON.stringify(cur || {});
    const cand = list.filter((x) => { const r = judge(x, t, o); return !r.correct && !r.incomplete; });
    return cand.find((x) => JSON.stringify(x) !== curJ) || cand[0] || null;
  }

  // 이 장면(node)에서 prefix 다음으로 기준에 맞는 길을 잇는 선택 — 끝까지 맞는 길이 있는 것만
  function nextGood(node, prefix, pats) {
    return node.choices.find((c) => pats.some((pat) => pat.length > prefix.length && prefix.every((x, i) => pat[i] === '*' || pat[i] === x) && (pat[prefix.length] === '*' || pat[prefix.length] === c.id))) || null;
  }
  const HINT1 = '선택마다 나, 상대, 지켜보는 사람, 공동체가 각각 어떤 영향을 받는지 따져 보고, 누구의 안전과 권리도 해치지 않는 쪽을 골라요.';
  const HINT1_OPEN = '정답을 찾기보다 선택마다 누가 어떤 영향을 받는지 견주어 보고, 내 결정을 받쳐 줄 까닭을 하나 골라요.';
  function hintFor(s0, t, o, opts) {
    t = t || {}; o = o || {}; const T = treeOf(o); const s = cleanState(T, s0);
    const r = judge(s, t, o);
    if (r.correct) return { hint: '지금 상태가 맞아요.', correct: true };
    const lv = levelOf(opts);
    const pats = patterns(t);
    if (lv <= 1) return { hint: o.hint1 || (pats || t.reasons != null ? HINT1 : HINT1_OPEN), correct: false };
    if (r.part === 'walk') {
      if (lv >= 3 && pats) {
        const w = walkPath(T, s.path); const c = w.cur && nextGood(w.cur, s.path, pats);
        if (c) return { hint: `이 장면에서는 ${jq(c.text, '을', '를')} 골라 보세요.`, correct: false };
      }
      return { hint: '선택을 하나 고르면 결과가 나오고 다음 장면이 이어져요. 끝 장면이 나올 때까지 골라 가요.', correct: false };
    }
    if (r.part === 'path') {
      const w = walkPath(T, s.path); const step = w.steps[r.at];
      if (lv === 2) return { hint: `${r.at + 1}번째 장면의 선택 ${jq(step.choice.text, '이', '가')} 문제예요. 그 결과에서 피해를 보는 사람이 누구인지 찾아보세요.`, correct: false };
      const c = nextGood(step.node, s.path.slice(0, r.at), pats);
      return { hint: c ? `'한 단계 되돌리기'로 ${r.at + 1}번째 장면까지 돌아가 ${jq(c.text, '을', '를')} 골라요.` : `${r.at + 1}번째 장면으로 돌아가 다른 선택을 골라요.`, correct: false };
    }
    if (r.part === 'reasons') {
      const name = (id) => { const x = T.reasons.find((q) => q.id === id); return x ? x.text : id; };
      if (r.extra) return { hint: lv === 2 ? `${jq(name(r.extra), '은', '는')} 남이 하니까, 들키지 않으니까 같은 까닭은 아닌지 살펴요.` : `${jq(name(r.extra), '을', '를')} 빼요.`, correct: false };
      if (r.missing) return { hint: lv === 2 ? '고른 근거 말고도 결정을 받쳐 주는 카드가 더 있어요. 권리·안전·책임을 말하는 카드를 다시 읽어요.' : `${jq(name(r.missing), '도', '도')} 근거로 골라요.`, correct: false };
      const want = arr(t.reasons)[0];
      return { hint: lv >= 3 && want ? `${jq(name(String(want)), '을', '를')} 근거로 골라요.` : '끝 장면 아래 근거 카드 가운데 내 선택의 까닭을 골라요.', correct: false };
    }
    if (r.part === 'explore') return { hint: lv === 2 ? '한 길만 가 보았어요. 다른 선택을 하면 결과가 어떻게 달라지는지 끝까지 가 봐요.' : "'한 단계 되돌리기'를 누르고 이번에는 고르지 않았던 선택을 골라 끝 장면까지 가요.", correct: false };
    if (r.part === 'self') return { hint: r.left ? `${jq(r.left[0], '을', '를')} 해 보았는지 떠올리고 표시해요.` : '점검 목록에서 해낸 것을 표시해요.', correct: false };
    return { hint: r.feedback, correct: false };
  }

  function distance(a, b) {
    a = a || {}; b = b || {};
    const p = arr(a.path); const q = arr(b.path); let k = 0; while (k < p.length && k < q.length && p[k] === q[k]) k++;
    let d = Math.max(p.length, q.length) - k;
    const x = new Set(arr(a.reasons)); const y = new Set(arr(b.reasons));
    for (const v of x) if (!y.has(v)) d++;
    for (const v of y) if (!x.has(v)) d++;
    const c1 = arr(a.checks); const c2 = arr(b.checks); for (let i = 0; i < Math.max(c1.length, c2.length); i++) if (!!c1[i] !== !!c2[i]) d++;
    return d;
  }
  function achievable(t, o) {
    const T = treeOf(o); const pats = patterns(t || {});
    if (!T.leaves.length) return '장면에 선택이 없어요.';
    if (pats && !T.leaves.some((p) => pats.some((pat) => matches(p, pat)))) return 'target.path에 맞는 끝까지 가는 길이 장면 나무에 없어요.';
    if (t && t.reasons != null) {
      const ids = new Set(T.reasons.map((r) => r.id)); const miss = arr(t.reasons).map(String).find((x) => !ids.has(x));
      if (miss) return `근거 카드 '${miss}'가 reasons에 없어요.`;
      if (o && o.maxReasons && !t.some && arr(t.reasons).length > o.maxReasons) return `maxReasons(${o.maxReasons})보다 많은 근거를 골라야 해요.`;
    }
    return null;
  }
  const core = { judge, solve, wrongAnswer, hint: hintFor, distance, achievable, treeOf, walkPath, cleanState };

  // ---- 화면 ----
  // 글 줄 나누기(인쇄 그림): 한글은 글자 크기, 영문·숫자는 그 절반쯤으로 어림한다
  function wrap(text, maxW, fs) {
    const cw = (ch) => (/[ᄀ-ᇿ㄰-㆏가-힣一-鿿]/.test(ch) ? fs * 0.95 : ch === ' ' ? fs * 0.3 : fs * 0.56);
    const out = []; let line = ''; let w = 0;
    for (const word of String(text).split(/(\s+)/)) {
      const ww = [...word].reduce((n, ch) => n + cw(ch), 0);
      if (w + ww > maxW && line.trim()) { out.push(line.trim()); line = ''; w = 0; if (/^\s+$/.test(word)) continue; }
      if (ww > maxW) { for (const ch of word) { if (w + cw(ch) > maxW) { out.push(line); line = ''; w = 0; } line += ch; w += cw(ch); } continue; }
      line += word; w += ww;
    }
    if (line.trim()) out.push(line.trim());
    return out;
  }
  function iconAt(kit, st, parent, motif, x, y, size) {
    const fn = kit.motifs[motif]; if (!fn || ['hills', 'wave', 'text'].includes(motif)) return;
    const outer = kit.el('g', { 'pointer-events': 'none' }, parent); const inner = kit.el('g', null, outer);
    fn(st, inner, { x: 0, y: 0, s: 1 });
    let bb = null; try { bb = inner.getBBox(); } catch (_) { bb = null; }
    if (!bb || !bb.width) bb = { x: -40, y: -40, width: 80, height: 80 };
    const s = Math.min(size / bb.width, size / bb.height);
    kit.transform(outer, { x: x - (bb.x + bb.width / 2) * s, y: y - (bb.y + bb.height / 2) * s, s });
  }
  const TONE = { 1: ['fi-rr-arrow-trend-up', '도움', 'dl-tone--up'], '-1': ['fi-rr-arrow-trend-down', '피해', 'dl-tone--down'], 0: ['fi-rr-minus-small', '그대로', 'dl-tone--same'] };

  K.registerTool('dilemma', {
    name: '갈림길 상황',
    core,
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print; const T = treeOf(o);
      let target = null; let revealed = false;
      let s = cleanState(T, {});
      const W = 560;

      // ---- 인쇄: 첫 장면 활동지 ----
      if (print) {
        // 활동지 그림 칸은 높이 52mm로 묶이므로 두 단(왼쪽 장면·선택, 오른쪽 결과·근거·견주기)으로 낮고 넓게 그린다 — wide: true 로 쓴다
        const PW = 900; const CW = 420; const fs = 19; const lh = 27; const xL = 16; const xR = PW / 2 + 14;
        const sit = wrap(T.root.text, CW - 90, fs);
        const chs = T.root.choices.map((c) => wrap(c.text, CW - 40, fs));
        const rs = T.reasons.map((r) => wrap(r.text, CW - 36, 17));
        const sitH = Math.max(84, sit.length * lh + 22);
        const leftH = 14 + sitH + 12 + 30 + chs.reduce((n, l) => n + l.length * lh + 8, 0);
        const rightH = 14 + 30 + 2 * 32 + (rs.length ? 30 + rs.reduce((n, l) => n + l.length * 24 + 6, 0) : 0) + 30 + 2 * 32;
        const H0 = Math.max(leftH, rightH) + 14;
        const st = kit.stage(box, { viewBox: [PW, H0], label: '갈림길 상황 활동지' });
        const L = st.layer('print'); const tx = (t, x, yy, f) => { kit.el('text', { x, y: yy, 'font-size': f || fs, class: 'pk-text', fill: '#000' }, L).textContent = t; };
        const rule = (x, yy) => kit.el('line', { x1: x + 4, x2: x + CW, y1: yy, y2: yy, stroke: '#000', 'stroke-width': 0.8 }, L);
        let y = 14;
        kit.piece(st, L, { shape: { type: 'rect', x: xL, y, w: CW + 4, h: sitH, rx: 12 }, color: 'cream', depth: 1 });
        iconAt(kit, st, L, T.root.motif || 'house', xL + 36, y + sitH / 2, 50);
        sit.forEach((ln, i) => tx(ln, xL + 76, y + 30 + i * lh));
        y += sitH + 12;
        tx(T.root.ask || '어떻게 할까요? 고른 선택에 ○', xL + 4, y + 20, 18); y += 30;
        chs.forEach((lines) => { kit.el('circle', { cx: xL + 14, cy: y + 13, r: 9, fill: '#fff', stroke: '#000', 'stroke-width': 1.2 }, L); lines.forEach((ln, i) => tx(ln, xL + 32, y + 20 + i * lh)); y += lines.length * lh + 8; });
        kit.el('line', { x1: PW / 2, x2: PW / 2, y1: 14, y2: H0 - 14, stroke: '#000', 'stroke-width': 0.5, 'stroke-dasharray': '4 4' }, L);
        y = 14;
        tx('그렇게 하면 누구에게 어떤 일이 생길까요?', xR, y + 20, 18); y += 30;
        for (let i = 0; i < 2; i++) { y += 32; rule(xR, y); }
        if (rs.length) {
          y += 8; tx('내 선택의 근거에 □ 표시', xR, y + 20, 18); y += 22;
          rs.forEach((lines) => { kit.el('rect', { x: xR + 2, y: y + 6, width: 16, height: 16, fill: '#fff', stroke: '#000', 'stroke-width': 1.2 }, L); lines.forEach((ln, i) => tx(ln, xR + 26, y + 20 + i * 24, 17)); y += lines.length * 24 + 6; });
        }
        y += 8; tx('다른 선택을 했다면 무엇이 달라질까요?', xR, y + 20, 18); y += 22;
        for (let i = 0; i < 2; i++) { y += 32; rule(xR, y); }
        const noop = () => {};
        return { getState: () => JSON.parse(JSON.stringify(s)), setState(x) { s = cleanState(T, x); }, setTarget: noop, reset() { s = cleanState(T, {}); }, solve(t) { s = cleanState(T, solve(t, o)); },
          check: (t) => { const r = judge(s, t, o); return { correct: r.correct, incomplete: r.incomplete, feedback: r.feedback }; }, hint: (t, op) => hintFor(s, t, o, op), wrongAnswer: (t) => wrongAnswer(t, o, s), distance };
      }

      // ---- 화면: 그림 띠(장면 그림 + 단계 표시) ----
      const BH = 96;
      const st = kit.stage(box, { viewBox: [W, BH], label: o.label || '갈림길 상황. 장면을 읽고 선택을 고르면 결과와 다음 장면이 나와요.' });
      const L = st.layer('band');
      kit.piece(st, L, { shape: { type: 'rect', x: 10, y: 8, w: W - 20, h: BH - 16, rx: 16 }, color: 'lavender', depth: 2, fill: P.lavender.light, texture: true });
      const iconG = kit.el('g', null, L);
      kit.el('text', { x: 98, y: 44, 'font-size': 21, class: 'pk-text', fill: P.lavender.dark }, L).textContent = short(o.title || '갈림길 상황', 13);
      const stepT = kit.el('text', { x: 98, y: 72, 'font-size': 16, class: 'pk-text', fill: P.ink.light }, L);
      const dots = []; const n = Math.max(1, T.depth);
      for (let i = 0; i < n; i++) {
        const cx = W - 40 - (n - 1 - i) * 44;
        const g = kit.el('g', null, L);
        const c = kit.el('circle', { cx, cy: BH / 2, r: 15, fill: '#FFFDF8', stroke: P.lavender.layer, 'stroke-width': 2 }, g);
        const t = kit.el('text', { x: cx, y: BH / 2 + 6, 'font-size': 16, 'text-anchor': 'middle', class: 'pk-text', fill: P.lavender.dark }, g); t.textContent = String(i + 1);
        if (i < n - 1) kit.el('line', { x1: cx + 15, x2: cx + 29, y1: BH / 2, y2: BH / 2, stroke: P.lavender.layer, 'stroke-width': 3 }, L);
        dots.push(c);
      }
      let iconMotif = null;
      function paintBand() {
        const w = walkPath(T, s.path);
        const motif = (w.cur && w.cur.motif) || (w.steps.length && w.steps[w.steps.length - 1].node.motif) || T.root.motif || 'house';
        if (motif !== iconMotif) { iconG.textContent = ''; iconAt(kit, st, iconG, motif, 54, BH / 2, 58); iconMotif = motif; }
        // 휴대폰에서 글자가 1.5배까지 커지므로 오른쪽 단계 점과 겹치지 않게 짧게 쓴다
        stepT.textContent = w.ended ? '끝 장면 · 근거 고르기' : `${w.steps.length + 1}번째 장면`;
        dots.forEach((c, i) => { const done = i < w.steps.length; const now = !w.ended && i === w.steps.length; c.setAttribute('fill', done ? P.mint.base : now ? P.buttercup.base : '#FFFDF8'); c.setAttribute('stroke', now ? P.lavender.dark : P.lavender.layer); c.setAttribute('stroke-width', now ? 3 : 2); });
      }

      // ---- HTML 칸 ----
      const panel = document.createElement('div'); panel.className = 'dl-panel'; box.appendChild(panel);
      const msg = document.createElement('p'); msg.className = 'dl-msg'; msg.setAttribute('aria-live', 'polite'); box.appendChild(msg);
      const say = (t) => { msg.textContent = t; kit.announce(t); };
      const hideTone = () => !!o.revealAfterCheck && !revealed;
      const impactHtml = (c) => (c.impact.length ? `<ul class="dl-impact">${c.impact.map((m) => { const k = TONE[m.tone]; return `<li><i class="fi fi-rr-user" aria-hidden="true"></i> <b>${esc(m.who || '누군가')}</b> ${esc(m.text)}${hideTone() ? '' : ` <span class="dl-tone ${k[2]}"><i class="fi ${k[0]}" aria-hidden="true"></i> ${k[1]}</span>`}</li>`; }).join('')}</ul>` : '');
      const resultHtml = (c) => `${c.result ? `<p class="dl-result"><i class="fi fi-rr-arrow-small-right" aria-hidden="true"></i> ${esc(c.result)}</p>` : ''}${impactHtml(c)}`;
      const checksOf = () => (target && Array.isArray(target.selfCheck) ? target.selfCheck : null);
      function paint(focusSel) {
        const w = walkPath(T, s.path); const out = [];
        // 지나온 길
        if (w.steps.length) {
          out.push(`<ol class="dl-trail" aria-label="지나온 길">${w.steps.map((x, i) => `<li class="dl-step"><p class="dl-scene dl-scene--past">${esc(x.node.text)}</p><p class="dl-picked"><span class="dl-badge">${i + 1}번째 선택</span> ${esc(x.choice.text)}</p>${resultHtml(x.choice)}</li>`).join('')}</ol>`);
        }
        if (w.cur) {
          const k = w.steps.length;
          out.push(`<section class="dl-now" aria-label="${k + 1}번째 장면"><p class="dl-scene" tabindex="-1" data-dl-now>${esc(w.cur.text)}</p>${w.cur.who ? `<p class="dl-who">${esc(w.cur.who)}</p>` : ''}<p class="dl-ask">${esc(w.cur.ask || '어떻게 할까요?')}</p><div class="dl-choices" role="group" aria-label="선택">${w.cur.choices.map((c, i) => `<button type="button" class="pl-btn pl-btn--small dl-choice" data-pick="${esc(c.id)}"><span class="dl-num" aria-hidden="true">${i + 1}</span><span>${esc(c.text)}</span></button>`).join('')}</div></section>`);
        } else if (w.ended) {
          const last = w.steps[w.steps.length - 1].choice;
          const max = Number(o.maxReasons) || 0;
          out.push(`<section class="dl-end" aria-label="끝 장면"><p class="dl-ending" tabindex="-1" data-dl-now><i class="fi fi-rr-flag" aria-hidden="true"></i> ${esc(last.ending || '이 길의 끝이에요. 내 선택의 까닭을 정리해 봐요.')}</p>`);
          if (T.reasons.length) out.push(`<div class="dl-reasons" role="group" aria-label="내 선택의 근거"><p class="dl-h"><i class="fi fi-rr-scale" aria-hidden="true"></i> 내 선택의 근거${max ? ` — ${max}장까지` : ''}를 눌러 골라요</p>${T.reasons.map((r) => { const on = s.reasons.includes(r.id); return `<button type="button" class="pl-btn pl-btn--small dl-reason" role="checkbox" aria-checked="${on}" data-reason="${esc(r.id)}"><i class="fi ${on ? 'fi-rr-checkbox' : 'fi-rr-square'}" aria-hidden="true"></i><span>${esc(r.text)}</span></button>`; }).join('')}</div>`);
          if (checksOf()) out.push(`<div class="dl-reasons" role="group" aria-label="스스로 점검"><p class="dl-h"><i class="fi fi-rr-list-check" aria-hidden="true"></i> 스스로 점검 — 해낸 것을 눌러요</p>${checksOf().map((x, i) => { const on = !!(s.checks && s.checks[i]); return `<button type="button" class="pl-btn pl-btn--small dl-reason" role="checkbox" aria-checked="${on}" data-chk="${i}"><i class="fi ${on ? 'fi-rr-checkbox' : 'fi-rr-square'}" aria-hidden="true"></i><span>${esc(x)}</span></button>`; }).join('')}</div>`);
          if (o.compare !== false) {
            if (hideTone()) out.push('<p class="dl-compare-wait"><i class="fi fi-rr-lock" aria-hidden="true"></i> 확인에서 맞히면 다른 선택을 했을 때의 결과가 여기에 나와요.</p>');
            else {
              const rows = w.steps.map((x, i) => { const others = x.node.choices.filter((c) => c.id !== x.choice.id); return others.length ? `<li><p class="dl-h">${i + 1}번째 장면에서</p>${others.map((c) => `<div class="dl-alt"><p class="dl-picked">${esc(c.text)}</p>${resultHtml(c) || '<p class="dl-result">결과가 적혀 있지 않아요. 스스로 떠올려 봐요.</p>'}</div>`).join('')}</li>` : ''; }).join('');
              if (rows) out.push(`<details class="dl-compare"><summary><i class="fi fi-rr-shuffle" aria-hidden="true"></i> 다른 선택을 했다면</summary><ol>${rows}</ol></details>`);
            }
          }
          out.push(`<p class="dl-seen"><i class="fi fi-rr-route" aria-hidden="true"></i> 끝까지 가 본 길 ${s.seen.length}개 / 모두 ${T.leaves.length}개</p></section>`);
        }
        out.push(`<div class="dl-ctl"><button type="button" class="pl-btn pl-btn--small" data-dl="back"${s.path.length ? '' : ' disabled'}><i class="fi fi-rr-undo" aria-hidden="true"></i> 한 단계 되돌리기</button><button type="button" class="pl-btn pl-btn--small" data-dl="restart"${s.path.length ? '' : ' disabled'}><i class="fi fi-rr-refresh" aria-hidden="true"></i> 처음부터 다른 길</button></div>`);
        panel.innerHTML = out.join('');
        paintBand();
        if (focusSel) { const f = panel.querySelector(focusSel); if (f) f.focus({ preventScroll: false }); }
      }
      function changed(text, focusSel) {
        revealed = false; s = cleanState(T, s); paint(focusSel);
        if (text) say(text);
        kit.recorder.log('dilemma', JSON.parse(JSON.stringify(s)));
      }
      panel.addEventListener('click', (e) => {
        const b = e.target.closest('button'); if (!b || b.disabled) return;
        if (b.dataset.pick != null) {
          const w = walkPath(T, s.path); const c = w.cur && w.cur.choices.find((x) => x.id === b.dataset.pick); if (!c) return;
          s.path = s.path.concat(c.id); const w2 = walkPath(T, s.path);
          changed(`${jq(c.text, '을', '를')} 골랐어요. ${c.result || ''}${w2.ended ? ' 끝 장면이에요.' : ' 다음 장면이 이어져요.'}`, '[data-dl-now]');
          return;
        }
        if (b.dataset.reason != null) {
          const id = b.dataset.reason; const max = Number(o.maxReasons) || 0;
          if (s.reasons.includes(id)) s.reasons = s.reasons.filter((x) => x !== id);
          else if (max && s.reasons.length >= max) { say(`근거는 ${max}장까지 고를 수 있어요. 먼저 하나를 빼요.`); return; } else s.reasons = s.reasons.concat(id);
          changed(s.reasons.includes(id) ? '근거로 골랐어요.' : '근거에서 뺐어요.', `[data-reason="${CSS.escape(id)}"]`);
          return;
        }
        if (b.dataset.chk != null) { const i = Number(b.dataset.chk); s.checks = (checksOf() || []).map((_, k) => !!(s.checks && s.checks[k])); s.checks[i] = !s.checks[i]; changed(s.checks[i] ? '표시했어요.' : '표시를 지웠어요.', `[data-chk="${i}"]`); return; }
        if (b.dataset.dl === 'back') { s.path = s.path.slice(0, -1); changed('한 단계 되돌렸어요. 다른 선택을 골라 봐요.', '[data-dl-now]'); return; }
        if (b.dataset.dl === 'restart') { s.path = []; changed('첫 장면으로 돌아왔어요. 이번에는 다른 길을 가 봐요.', '[data-dl-now]'); }
      });
      paint();
      return {
        getState: () => JSON.parse(JSON.stringify(s)),
        setState(x) { s = cleanState(T, x); revealed = false; msg.textContent = ''; paint(); },
        setTarget(t) { target = t || null; paint(); },
        reset() { s = cleanState(T, {}); revealed = false; msg.textContent = ''; paint(); },
        solve(t) { s = cleanState(T, solve(t || target, o)); revealed = false; paint(); },
        check(t, opts) {
          const r = judge(s, t || target, o);
          if (!(opts && opts.forHint)) {
            if (r.correct) { kit.tick('ok'); if (o.revealAfterCheck) { revealed = true; paint(); } } else if (!r.incomplete) kit.tick('no');
            kit.recorder.log('dilemma', Object.assign({ via: 'check' }, s));
          }
          const out = { correct: r.correct, feedback: r.correct ? (o.success || r.feedback) : r.feedback };
          if (r.incomplete) out.incomplete = true;
          if (!r.correct) out.hint = hintFor(s, t || target, o, { level: 2, attempts: 1 }).hint;
          return out;
        },
        hint: (t, opts) => hintFor(s, t || target, o, opts),
        wrongAnswer: (t) => wrongAnswer(t || target, o, s),
        achievable: (t) => achievable(t || target, o),
        distance,
        async demo(t) {
          const goal = solve(t || target, o); s = cleanState(T, { reasons: [] }); paint();
          for (let i = 1; i <= goal.path.length; i++) { await kit.wait(600); s = cleanState(T, { path: goal.path.slice(0, i), seen: s.seen }); paint(); }
          s = cleanState(T, goal); revealed = !!o.revealAfterCheck; paint();
        },
      };
    },
  });
})(window.PaperKit);
