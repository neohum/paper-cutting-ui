/* 기준표 글쓰기 — 짧은 글(1~5문장)을 쓰고 기준표 항목(3~5개)을 스스로 점검한다. 쓴 글은 교사 확인용으로 getState에 남는다.
 * 채점: 글자 수 범위 + 모든 기준 항목 자기 점검(target.selfCheck) + (선택) 꼭 넣을 낱말(target.mustInclude, 동의어 목록 허용).
 * 학생 개인정보(이름·연락처)를 쓰지 않도록 늘 안내하고, 연락처·주민번호·이메일 꼴(classroom-hub.mjs의 PII와 같은 정규식)이 보이면
 * 경고하고 정답 처리하지 않으며, getState에서는 그 부분을 '▒'로 가린다(허브가 개인정보 든 결과를 받지 않으므로 제출이 막히지 않게).
 *
 * ── 옵션 (toolOptions) ───────────────────────────────────────────────────────────────────────────────────────
 * | 옵션             | 모양                     | 뜻                                                                   |
 * |------------------|--------------------------|----------------------------------------------------------------------|
 * | topic            | 글                       | 글 주제·질문(판 위에 보임). 예: '학교 안 휴대폰 사용 규칙에 대한 내 의견을 쓰세요.' |
 * | minChars, maxChars | 수                     | 글자 수 범위(target.chars가 있으면 그쪽이 먼저). 화면에 늘 보이는 안내다       |
 * | countSpaces      | 참(기본)/거짓             | 글자 수에 띄어쓰기를 셀지                                                |
 * | minSentences, maxSentences | 수             | 문장 수 범위(문장 = . ! ? 로 끝나는 덩이, 끝에 마침표가 없어도 한 문장)        |
 * | criteria         | ['…', …]                 | target.selfCheck가 없을 때 보이는 기준표(출구·짝 활동용)                     |
 * | starter          | 글                       | 문장 시작 도움말 한 줄. 예: '나는 ~에 찬성한다. 왜냐하면 ~'                     |
 * | placeholder      | 글                       | 빈 글 칸 안내 글                                                        |
 * | sample           | 글                       | 예시 글 — 맞힌 확인 뒤에만 보인다(revealAfterCheck와 상관없이 늘 맞힌 뒤)      |
 * | lines            | 수(기본 5)               | 활동지 줄 칸 수                                                          |
 * | title            | 글                       | 그림 띠 머리 글(기본 '기준표 글쓰기')                                       |
 * | revealAfterCheck | 참/거짓                  | 이 교구는 확인 전에 숨길 읽기 값이 없다(글자 수는 안내). 예시 글만 맞힌 뒤에 보인다 |
 * | hint1, success   | 글                       | 1단계 힌트 대신 쓸 글(정답 낱말을 쓰지 않는다) / 맞혔을 때 피드백               |
 * | print            | 참/거짓                  | 활동지 그림: 주제 + 줄 칸 + 기준표 체크칸(활동지 figure에 wide: true)        |
 *
 * ── 상태 (getState / setState) ──
 *   { text: '쓴 글'(개인정보 꼴은 ▒로 가림), checks: [true|false, …](기준표 차례), chars: 글자 수(교사가 읽는 값 — setState는 무시) }
 *
 * ── target (준 칸이 모두 맞아야 정답) ──
 *   { selfCheck: ['근거를 하나 이상 썼다', '상대 입장을 언급했다', '내 의견으로 끝맺었다'],   기준표 — 모두 표시해야 함(3~5개 권장)
 *     chars?: [최소, 최대],                                                           글자 수 범위(없으면 옵션 minChars·maxChars)
 *     sentences?: [최소, 최대],                                                       문장 수 범위(없으면 옵션)
 *     mustInclude?: ['안전', ['왜냐하면', '때문에']] }                                  꼭 넣을 낱말 — 목록이면 그 가운데 하나
 *
 * ── 판정·힌트 ── check → { correct, incomplete?, feedback, hint }. incomplete = 빈 글 · 기준표를 하나도 표시하지 않음.
 *   개인정보 꼴이 있으면 correct: false(지우라는 피드백). 차례: 빈 글 → 개인정보 → 글자 수 → 문장 수 → 꼭 넣을 낱말 → 기준표.
 *   hint 1 = 쓰는 방법(낱말·수 없음) 2 = 어긋난 칸 짚기(지금 글자 수 등) 3 = 넣을 낱말·고칠 길.
 *   wrongAnswer = 글자 수 모자람(기준표는 다 표시) / 꼭 넣을 낱말 빠짐 / 기준표 하나 빠뜨림.  distance = 글자 수 차 ÷ 10 + 다른 점검 수.
 * ── 조작 ── 글 칸에 쓰기(키보드), 기준표 항목은 눌러서(Tab·Enter·Space) 표시. 글자 수·문장 수는 쓰는 동안 바로 보인다.
 *
 * ── 짧은 예 ──
 *   toolOptions: { topic: '등교 시간 휴대폰 수거에 대한 내 의견을 2~4문장으로 쓰세요.', minChars: 60, maxChars: 200, maxSentences: 4 },
 *   target: { selfCheck: ['내 의견을 첫 문장에 썼다', '근거를 하나 이상 썼다', '상대 입장을 언급했다'], mustInclude: [['왜냐하면', '때문에']] }
 */
(function (K) {
  'use strict';
  // classroom-hub.mjs 의 PII 와 같은 식이다(tests/edu-tools-dilemma.test.mjs 가 두 식이 글자 하나 다르지 않은지 본다)
  const PII = /(?<![\d.])\d{6}-?[1-4]\d{6}(?!\d)|(?<![\d.])01[016789]-?\d{3,4}-?\d{4}(?!\d)|[\w.+-]+@[\w-]+\.[\w.]+/;
  const PII_G = new RegExp(PII.source, 'g');
  // 이름·주소를 밝히는 말투 — 막지는 않고(‘주인공 이름은’ 같은 글도 있다) 다시 보라고 알린다
  const SELF_INFO = /(제|내|저의|나의)\s*이름은|이름\s*[:：]|(전화|휴대폰|핸드폰)\s*번호\s*[:：는은]|(사는|우리\s*집)\s*주소|주소\s*[:：]/;
  const arr = (v) => (v == null ? [] : Array.isArray(v) ? v : [v]);
  const jo = (w, a, b) => { const s = String(w).replace(/[’'"”)\]\s]+$/, ''); const c = s.charCodeAt(s.length - 1); if (c >= 0xac00 && c <= 0xd7a3) return `${w}${(c - 0xac00) % 28 ? a : b}`; return `${w}${/[013678]$/.test(s) ? a : b}`; };
  const short = (t, n = 24) => { const s = String(t); return s.length > n ? `${s.slice(0, n - 1)}…` : s; };
  const jq = (w, a, b) => `‘${short(w)}’${jo(short(w), a, b).slice(short(w).length)}`;
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    return Math.max(1, Math.min(3, want, a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1));
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const mask = (t) => String(t || '').replace(PII_G, (m) => '▒'.repeat(Math.min(m.length, 8)));

  const countChars = (text, o) => { const t = String(text || '').trim(); return [...((o && o.countSpaces === false) ? t.replace(/\s+/g, '') : t.replace(/\s+/g, ' '))].length; };
  const countSentences = (text) => String(text || '').trim().split(/(?<=[.!?。…])\s+|\n+/).filter((x) => x.trim()).length;
  const rangeOf = (tv, lo, hi) => { if (Array.isArray(tv) && tv.length) return [Number(tv[0]) || 0, tv[1] == null ? null : Number(tv[1])]; return [Number(lo) || 0, hi == null ? null : Number(hi)]; };
  const charRange = (t, o) => rangeOf(t && t.chars, o && o.minChars, o && o.maxChars);
  const sentRange = (t, o) => rangeOf(t && t.sentences, o && o.minSentences, o && o.maxSentences);
  const itemsOf = (t, o) => arr((t && t.selfCheck) || (o && o.criteria)).filter((x) => typeof x === 'string' && x.trim());
  const groupsOf = (t) => arr(t && t.mustInclude).map((g) => arr(g).map(String).filter(Boolean)).filter((g) => g.length);
  const has = (text, g) => g.some((w) => String(text).replace(/\s+/g, ' ').includes(w));

  function judge(s, t, o) {
    s = s || {}; t = t || {}; o = o || {};
    const text = String(s.text || '');
    if (!text.trim()) return { correct: false, incomplete: true, feedback: '글 칸에 내 생각을 써 보세요.', part: 'empty' };
    if (PII.test(text)) return { correct: false, part: 'pii', feedback: '전화번호·주민등록번호·이메일처럼 개인정보로 보이는 것이 있어요. 그 부분을 지우고 다시 확인해요.' };
    const n = countChars(text, o); const [lo, hi] = charRange(t, o);
    if (n < lo) return { correct: false, part: 'chars', n, lo, hi, feedback: `지금 ${n}자예요. ${lo}자 이상 써야 해요.` };
    if (hi != null && n > hi) return { correct: false, part: 'chars', n, lo, hi, feedback: `지금 ${n}자예요. ${hi}자 안으로 줄여요.` };
    const k = countSentences(text); const [slo, shi] = sentRange(t, o);
    if (k < slo) return { correct: false, part: 'sent', k, feedback: `지금 ${k}문장이에요. ${slo}문장 이상 써요.` };
    if (shi != null && k > shi) return { correct: false, part: 'sent', k, feedback: `지금 ${k}문장이에요. ${shi}문장 안으로 묶어요.` };
    const miss = groupsOf(t).filter((g) => !has(text, g));
    if (miss.length) return { correct: false, part: 'must', miss, feedback: `꼭 들어가야 할 낱말이 ${miss.length}개 빠졌어요. 문제 글을 다시 읽고 중요한 낱말을 찾아 넣어요.` };
    const items = itemsOf(t, o);
    if (items.length) {
      const got = arr(s.checks); const left = items.filter((_, i) => !got[i]);
      if (left.length === items.length) return { correct: false, incomplete: true, part: 'self', left, feedback: '기준표 항목을 하나씩 읽고 내 글에 있는 것을 눌러 표시해요.' };
      if (left.length) return { correct: false, part: 'self', left, feedback: `기준표에서 아직 표시하지 않은 항목이 ${left.length}개 있어요. 내 글에 없으면 고쳐 쓰고 표시해요.` };
    }
    return { correct: true, feedback: `잘 썼어요! ${n}자, ${k}문장으로 기준표를 모두 점검했어요.` };
  }

  // 정답 글 만들기 — 예시 글(sample)이 조건에 맞으면 그것, 아니면 꼭 넣을 낱말을 담아 범위에 맞춘 글
  const FILL = ['나는 이 의견에 찬성한다.', '모두가 함께 지키면 학교생활이 더 안전해지기 때문이다.', '반대하는 친구들이 불편을 걱정하는 마음도 이해한다.', '그래서 서로의 생각을 듣고 규칙을 함께 정하면 좋겠다.', '이렇게 하면 모두가 규칙을 스스로 지키게 될 것이다.'];
  function compose(t, o, words) {
    const [lo, hi] = charRange(t, o); const [slo, shi0] = sentRange(t, o); const shi = shi0 == null ? 6 : shi0;
    const ws = words.length ? [`${words.map((w) => `‘${w}’`).join(', ')}${jo(words[words.length - 1], '을', '를').slice(String(words[words.length - 1]).length)} 넣어 생각을 정리했다.`] : [];
    let out = ws.slice(); let i = 0;
    const fits = () => countChars(out.join(' '), o) >= lo && out.length >= Math.max(1, slo);
    while (!fits() && out.length < shi && i < FILL.length) out.push(FILL[i++]);
    // 문장 수가 다 찼는데 글자가 모자라면 마지막 문장을 늘린다
    let pad = 0; while (countChars(out.join(' '), o) < lo && pad < 40) { const j = out.length - 1; out[j] = out[j].replace(/\.$/, ', 그리고 그 까닭을 친구들과 나누고 싶다.'); pad++; if (j < 0) break; }
    // 너무 길면 뒤 채움 문장부터 뺀다
    while (hi != null && countChars(out.join(' '), o) > hi && out.length > Math.max(ws.length, 1, slo)) out.pop();
    return out.join(' ');
  }
  function solve(t, o) {
    t = t || {}; o = o || {};
    const words = groupsOf(t).map((g) => g[0]);
    let text = o.sample ? String(o.sample) : '';
    const okText = (x) => { const r = judge({ text: x, checks: itemsOf(t, o).map(() => true) }, t, o); return r.correct; };
    if (!text || !okText(text)) text = compose(t, o, words);
    return { text, checks: itemsOf(t, o).map(() => true), chars: countChars(text, o) };
  }
  function wrongAnswer(t, o, cur) {
    t = t || {}; o = o || {}; const good = solve(t, o); const list = [];
    const [lo, hi] = charRange(t, o);
    if (lo > 2) { const first = good.text.split(/(?<=[.!?。])\s+/)[0]; let x = first; if (countChars(x, o) >= lo) x = [...x].slice(0, Math.max(1, lo - 2)).join(''); list.push({ text: x, checks: good.checks.slice() }); } // 글자 수 모자람
    if (groupsOf(t).length) list.push({ text: compose(t, o, []), checks: good.checks.slice() }); // 꼭 넣을 낱말을 빠뜨림
    if (good.checks.length) { const a = { text: good.text, checks: good.checks.slice() }; a.checks[a.checks.length - 1] = false; list.push(a); } // 기준 하나를 점검하지 않음
    if (hi != null) list.push({ text: `${good.text} ${FILL.join(' ')} ${FILL.join(' ')}`.slice(0, hi * 3), checks: good.checks.slice() }); // 너무 김
    list.forEach((x) => { x.chars = countChars(x.text, o); });
    const curJ = JSON.stringify(cur || {});
    const cand = list.filter((x) => { const r = judge(x, t, o); return !r.correct && !r.incomplete; });
    return cand.find((x) => JSON.stringify(x) !== curJ) || cand[0] || null;
  }
  const HINT1 = '내 생각을 먼저 한 문장으로 쓰고, 그렇게 생각한 까닭을 붙인 뒤 마무리 문장으로 끝내요. 기준표를 한 줄씩 읽으며 내 글에서 그 부분을 찾아 표시해요. 이름·전화번호 같은 개인정보는 쓰지 않아요.';
  function hintFor(s, t, o, opts) {
    t = t || {}; o = o || {};
    const r = judge(s, t, o);
    if (r.correct) return { hint: '지금 상태가 맞아요.', correct: true };
    const lv = levelOf(opts);
    if (lv <= 1) return { hint: o.hint1 || HINT1, correct: false };
    if (r.part === 'empty') return { hint: lv >= 3 && o.starter ? `이렇게 시작해 봐요: ${o.starter}` : '주제를 다시 읽고, 내 생각을 한 문장으로 먼저 써 보세요.', correct: false };
    if (r.part === 'pii') return { hint: '숫자가 이어진 번호나 @가 들어간 주소를 찾아 지워요. 사람을 가리킬 때는 ‘친구’, ‘가족’처럼 써요.', correct: false };
    if (r.part === 'chars') return { hint: lv === 2 ? r.feedback : r.n < r.lo ? `까닭이나 예를 한 문장 더 붙여 ${r.lo - r.n}자쯤 늘려요.` : `되풀이한 말이나 꾸미는 말을 빼서 ${r.n - r.hi}자쯤 줄여요.`, correct: false };
    if (r.part === 'sent') return { hint: lv === 2 ? r.feedback : '길게 이어진 문장은 마침표로 나누고, 짧은 문장 여럿은 ‘그래서’, ‘하지만’으로 이어 봐요.', correct: false };
    if (r.part === 'must') return { hint: lv === 2 ? '주제를 말할 때 꼭 필요한 낱말이 아직 글에 없어요. 문제 글에서 중요한 낱말을 찾아요.' : `${jq(r.miss[0][0], '을', '를')}${r.miss[0].length > 1 ? `(또는 ${r.miss[0].slice(1).map((w) => `‘${w}’`).join(', ')})` : ''} 넣어 한 문장을 더 써요.`, correct: false };
    if (r.part === 'self') return { hint: lv === 2 ? `${jq(r.left[0], '이', '가')} 내 글의 어느 문장인지 찾아보세요.` : `${jq(r.left[0], '에', '에')} 맞는 문장이 없으면 그 문장을 써 넣고, 있으면 표시해요.`, correct: false };
    return { hint: r.feedback, correct: false };
  }
  function distance(a, b) {
    a = a || {}; b = b || {};
    let d = Math.abs(countChars(a.text) - countChars(b.text)) / 10;
    if (String(a.text || '') !== String(b.text || '') && d < 0.5) d = 0.5;
    const c1 = arr(a.checks); const c2 = arr(b.checks); for (let i = 0; i < Math.max(c1.length, c2.length); i++) if (!!c1[i] !== !!c2[i]) d++;
    return d;
  }
  function achievable(t, o) {
    const [lo, hi] = charRange(t, o); const [slo, shi] = sentRange(t, o);
    if (hi != null && lo > hi) return `글자 수 범위가 거꾸로예요(${lo}~${hi}).`;
    if (shi != null && slo > shi) return `문장 수 범위가 거꾸로예요(${slo}~${shi}).`;
    if (!solve(t, o) || !judge(solve(t, o), t, o).correct) return '이 범위와 낱말로 맞는 글을 만들 수 없어요(범위를 넓히거나 낱말을 줄여요).';
    return null;
  }
  const core = { judge, solve, wrongAnswer, hint: hintFor, distance, achievable, countChars, countSentences, mask, PII, SELF_INFO };

  function wrap(text, maxW, fs) {
    const cw = (ch) => (/[ᄀ-ᇿ㄰-㆏가-힣一-鿿]/.test(ch) ? fs * 0.95 : ch === ' ' ? fs * 0.3 : fs * 0.56);
    const out = []; let line = ''; let w = 0;
    for (const word of String(text).split(/(\s+)/)) {
      const ww = [...word].reduce((n, ch) => n + cw(ch), 0);
      if (w + ww > maxW && line.trim()) { out.push(line.trim()); line = ''; w = 0; if (/^\s+$/.test(word)) continue; }
      line += word; w += ww;
    }
    if (line.trim()) out.push(line.trim());
    return out;
  }

  let uid = 0;
  K.registerTool('rubric-writing', {
    name: '기준표 글쓰기',
    core,
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print; const W = 560;
      let target = null; let revealed = false;
      let text = ''; let checks = [];
      const items = () => itemsOf(target, o);
      const state = () => { const t = mask(text); return { text: t, checks: items().map((_, i) => !!checks[i]), chars: countChars(t, o) }; };

      // ---- 인쇄: 주제 + 줄 칸 + 기준표 ----
      if (print) {
        // 그림 칸 높이가 52mm로 묶이므로 글자를 키우고 줄 간격을 줄여 인쇄 글자 5.5pt 이상을 지킨다(wide: true 로 쓴다)
        const fs = 19; const topic = o.topic ? wrap(o.topic, W - 60, fs) : [];
        const lines = Math.max(2, Math.min(12, Number(o.lines) || 5));
        const crit = itemsOf(null, o).length ? itemsOf(null, o) : ['내 의견을 분명히 썼다', '까닭을 하나 이상 썼다', '다른 입장도 생각해 썼다'];
        const critL = crit.map((c) => wrap(c, W - 90, 18));
        const [lo, hi] = charRange(null, o);
        const RH = 30; const H = 14 + topic.length * 26 + 8 + 24 + lines * RH + 14 + 28 + critL.reduce((n, l) => n + l.length * 24 + 8, 0) + 10;
        const st = kit.stage(box, { viewBox: [W, H], label: '기준표 글쓰기 활동지' });
        const L = st.layer('print'); const tx = (t, x, y, f, a) => { kit.el('text', { x, y, 'font-size': f || fs, class: 'pk-text', fill: '#000', 'text-anchor': a || 'start' }, L).textContent = t; };
        let y = 16;
        topic.forEach((ln) => { tx(ln, 24, y + 20); y += 26; });
        y += 8;
        tx(lo || hi ? `글 쓰기 (${lo ? `${lo}자 이상` : ''}${lo && hi ? ' ~ ' : ''}${hi ? `${hi}자 이하` : ''})` : '글 쓰기', 24, y + 17, 17); y += 24;
        kit.piece(st, L, { shape: { type: 'rect', x: 16, y, w: W - 32, h: lines * RH + 6, rx: 8 }, color: 'cream', depth: 0 });
        for (let i = 1; i <= lines; i++) kit.el('line', { x1: 28, x2: W - 28, y1: y + i * RH, y2: y + i * RH, stroke: '#000', 'stroke-width': 0.7, 'stroke-dasharray': '3 3' }, L);
        y += lines * RH + 14;
        tx('기준표 — 내 글에 있으면 □에 ✓', 24, y + 19, 18); y += 28;
        critL.forEach((ls) => { kit.el('rect', { x: 28, y: y + 3, width: 18, height: 18, fill: '#fff', stroke: '#000', 'stroke-width': 1.2 }, L); ls.forEach((ln, i) => tx(ln, 56, y + 19 + i * 24, 18)); y += ls.length * 24 + 8; });
        const noop = () => {};
        return { getState: state, setState(s) { text = String((s && s.text) || ''); checks = arr(s && s.checks).map(Boolean); }, setTarget(t) { target = t || null; }, reset() { text = ''; checks = []; },
          solve(t) { const g = solve(t, o); text = g.text; checks = g.checks; }, check: (t) => { const r = judge(state(), t, o); return { correct: r.correct, incomplete: r.incomplete, feedback: r.feedback }; },
          hint: (t, op) => hintFor(state(), t, o, op), wrongAnswer: (t) => wrongAnswer(t, o, state()), distance, demo: noop };
      }

      // ---- 화면: 그림 띠 ----
      const BH = 80;
      const st = kit.stage(box, { viewBox: [W, BH], label: o.label || '기준표 글쓰기. 글을 쓰고 기준표 항목을 스스로 점검해요.' });
      const BL = st.layer('band');
      kit.piece(st, BL, { shape: { type: 'rect', x: 10, y: 8, w: W - 20, h: BH - 16, rx: 16 }, color: 'mint', depth: 2, fill: P.mint.light, texture: true });
      // 종이 한 장(줄 셋) 그림
      kit.piece(st, BL, { shape: { type: 'rect', x: 26, y: 16, w: 46, h: 48, rx: 6 }, color: 'cream', depth: 1 });
      [30, 40, 50].forEach((yy) => kit.el('line', { x1: 34, x2: 64, y1: yy, y2: yy, stroke: P.mint.layer, 'stroke-width': 3, 'stroke-linecap': 'round' }, BL));
      kit.el('text', { x: 88, y: 38, 'font-size': 21, class: 'pk-text', fill: P.mint.dark }, BL).textContent = short(o.title || '기준표 글쓰기', 18);
      const bandT = kit.el('text', { x: 88, y: 63, 'font-size': 16, class: 'pk-text', fill: P.ink.light }, BL);

      // ---- HTML 칸 ----
      const id = `rw-${++uid}`;
      const panel = document.createElement('div'); panel.className = 'rw-panel'; box.appendChild(panel);
      const [lo0, hi0] = charRange(null, o);
      panel.innerHTML = `${o.topic ? `<p class="rw-topic"><i class="fi fi-rr-comment-alt" aria-hidden="true"></i> ${esc(o.topic)}</p>` : ''}`
        + '<p class="rw-note"><i class="fi fi-rr-shield-check" aria-hidden="true"></i> 내 이름·친구 이름·전화번호·주소·이메일 같은 개인정보는 쓰지 않아요. 사람은 ‘친구’, ‘가족’처럼 써요.</p>'
        + `${o.starter ? `<p class="rw-starter"><i class="fi fi-rr-bulb" aria-hidden="true"></i> 이렇게 시작해 봐요: ${esc(o.starter)}</p>` : ''}`
        + `<label class="rw-label" for="${id}">내 글</label>`
        + `<textarea id="${id}" class="rw-text" rows="5" maxlength="${Math.max(400, (hi0 || 300) * 2)}" autocomplete="off" spellcheck="false" placeholder="${esc(o.placeholder || '여기에 내 생각을 써요.')}" aria-describedby="${id}-count ${id}-warn"></textarea>`
        + `<p class="rw-count" id="${id}-count"></p>`
        + `<p class="rw-warn" id="${id}-warn" role="alert" hidden></p>`
        + '<div class="rw-crit" role="group" aria-label="기준표"></div>'
        + '<div class="rw-sample" hidden></div>';
      const ta = panel.querySelector('textarea'); const countP = panel.querySelector('.rw-count'); const warnP = panel.querySelector('.rw-warn');
      const critBox = panel.querySelector('.rw-crit'); const sampleBox = panel.querySelector('.rw-sample');
      const msg = document.createElement('p'); msg.className = 'rw-msg'; msg.setAttribute('aria-live', 'polite'); box.appendChild(msg);
      const say = (t) => { msg.textContent = t; kit.announce(t); };
      function paintCount() {
        const [lo, hi] = charRange(target, o); const [slo, shi] = sentRange(target, o);
        const n = countChars(text, o); const k = text.trim() ? countSentences(text) : 0;
        const goal = lo || hi != null ? ` · 목표 ${lo ? `${lo}` : '0'}~${hi != null ? `${hi}자` : '자 이상'}` : '';
        const sg = slo > 1 || shi != null ? ` · 문장 ${slo || 1}~${shi != null ? shi : ''}개` : '';
        countP.textContent = `글자 수 ${n}자${goal} · 지금 ${k}문장${sg}${o.countSpaces === false ? ' (띄어쓰기 빼고 셈)' : ''}`;
        bandT.textContent = text.trim() ? `${n}자 · ${k}문장 · 기준 ${items().filter((_, i) => checks[i]).length}/${items().length}` : '글을 쓰고 기준표를 점검해요';
        const pii = PII.test(text); const self = !pii && SELF_INFO.test(text);
        warnP.hidden = !(pii || self);
        warnP.innerHTML = pii ? '<i class="fi fi-rr-exclamation" aria-hidden="true"></i> 전화번호·주민등록번호·이메일로 보이는 것이 있어요. 지워 주세요. 이대로는 정답 처리되지 않아요.'
          : self ? '<i class="fi fi-rr-info" aria-hidden="true"></i> 이름이나 주소를 밝히는 말이 있나요? 내 개인정보라면 지워 주세요.' : '';
      }
      function paintCrit() {
        const list = items();
        critBox.innerHTML = list.length ? `<p class="rw-h"><i class="fi fi-rr-list-check" aria-hidden="true"></i> 기준표 — 내 글에 있으면 눌러 표시해요</p>${list.map((x, i) => { const on = !!checks[i]; return `<button type="button" class="pl-btn pl-btn--small rw-check" role="checkbox" aria-checked="${on}" data-chk="${i}"><i class="fi ${on ? 'fi-rr-checkbox' : 'fi-rr-square'}" aria-hidden="true"></i><span>${esc(x)}</span></button>`; }).join('')}` : '';
      }
      function paintSample() {
        const show = revealed && !!o.sample;
        sampleBox.hidden = !show;
        sampleBox.innerHTML = show ? `<p class="rw-h"><i class="fi fi-rr-book-open-reader" aria-hidden="true"></i> 예시 글</p><p>${esc(o.sample)}</p>` : '';
      }
      const paint = () => { if (ta.value !== text) ta.value = text; paintCount(); paintCrit(); paintSample(); };
      ta.addEventListener('input', () => { text = ta.value; if (revealed) { revealed = false; paintSample(); } paintCount(); });
      ta.addEventListener('change', () => kit.recorder.log('rubric-writing', Object.assign({ via: 'type' }, state())));
      critBox.addEventListener('click', (e) => {
        const b = e.target.closest('[data-chk]'); if (!b) return;
        const i = Number(b.dataset.chk); checks = items().map((_, k) => !!checks[k]); checks[i] = !checks[i];
        revealed = false; paintCrit(); paintCount(); paintSample();
        const f = critBox.querySelector(`[data-chk="${i}"]`); if (f) f.focus();
        say(checks[i] ? '표시했어요.' : '표시를 지웠어요.');
        kit.recorder.log('rubric-writing', Object.assign({ via: 'check-item' }, state()));
      });
      const load = (s) => { text = String((s && s.text) || ''); checks = arr(s && s.checks).map(Boolean); revealed = false; msg.textContent = ''; paint(); };
      load({});
      return {
        getState: state,
        setState: load,
        setTarget(t) { target = t || null; paint(); },
        reset() { load({}); },
        solve(t) { load(solve(t || target, o)); },
        check(t, opts) {
          const r = judge({ text, checks: items().map((_, i) => !!checks[i]) }, t || target, o);
          if (!(opts && opts.forHint)) {
            if (r.correct) { kit.tick('ok'); revealed = true; paintSample(); } else if (!r.incomplete) kit.tick('no');
            kit.recorder.log('rubric-writing', Object.assign({ via: 'check' }, state()));
          }
          const out = { correct: r.correct, feedback: r.correct ? (o.success || r.feedback) : r.feedback };
          if (r.incomplete) out.incomplete = true;
          if (!r.correct) out.hint = hintFor({ text, checks }, t || target, o, { level: 2, attempts: 1 }).hint;
          return out;
        },
        hint: (t, opts) => hintFor({ text, checks: items().map((_, i) => !!checks[i]) }, t || target, o, opts),
        wrongAnswer: (t) => wrongAnswer(t || target, o, state()),
        achievable: (t) => achievable(t || target, o),
        distance,
        async demo(t) { load({}); await kit.wait(300); load(solve(t || target, o)); revealed = true; paintSample(); },
      };
    },
  });
})(window.PaperKit);
