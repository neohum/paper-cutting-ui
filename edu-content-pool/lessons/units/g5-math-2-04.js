/* 5학년 2학기 수학 4. 소수의 곱셈 — 단원 파일(차시 11개, 기존 차시 없음).
 * 확인 필요: units-index 의 plan 은 11차시 모두 같은 주제('소수끼리 곱하는 셈의 이치를 탐구하고 계산 해내기')를 개념·표현·적용 세 틀로 나눈 것이고
 *   같은 제목이 role 만 달리 세 번씩 나온다. 단원 제목(교과서 단원)과 사용자 지시에 맞춰 (소수)×(자연수)(1~4), (자연수)×(소수)(5~6), (소수)×(소수)(7~8),
 *   곱의 소수점 위치와 어림(9), 생활 문제 적용(10), 단원 정리(11) 순으로 새로 짰다. 성취기준은 units-map 의 단원 성취기준 [6수01-13] 하나다.
 * 교구: 수직선(numberline)은 소수 눈금(0.1)에서 '같은 수를 여러 번 뛰어 세기'(jump)·점 놓기(place)·점 읽기(read), 종이 자(measure ruler)는 소수 길이의 띠 만들기,
 *   생각 그물(mindmap)은 빈칸 채우기(fill)·짝짓기(match)·나누기(sort)·고르기(pick)·순서 놓기(order)에 쓴다. 곱·보기 값은 아래 P()(소수 문자열 정확 곱셈)로 만들고
 *   값의 크기에 따라 나누는 문항(sortBy·pickBy·ordBy)은 계산한 값에서 정답을 뽑아, 손으로 적은 답이 어긋나지 않게 했다.
 *   소수 둘째 자리 곱의 모눈(100칸) 그림 교구는 없어, 분수로 고쳐 쓰는 빈칸 문항과 수직선(0~1, 작은 눈금 0.1)에서 '0.6의 0.5배' 같은 점 놓기로 의미를 다룬다.
 * 예문·이야기는 이 단원을 위해 직접 지은 것이다. 학생 이름 예시는 쓰지 않았다.
 * 흐름: 같은 소수를 여러 번 더하기와 뛰어 세기(1) → 0.1의 개수로 계산(2) → 1보다 큰 소수×자연수를 분수로 고쳐 계산(3) → 길이·무게 이야기와 식 세우기(4)
 *      → 자연수×(1보다 작은 소수)(5) → 자연수×(1보다 큰 소수)와 곱이 자연수가 되는 경우(6) → (소수)×(소수)의 뜻(7) → 소수점 아래 자릿수로 계산(8)
 *      → 곱의 소수점 위치와 10·100·0.1·0.01 곱하기(9) → 어림하여 생활 문제 풀기(10) → 계산 실수 찾기와 단원 정리(11).
 */
(function () {
const UID = 'g5-math-2-04', CU = 'g5-수학-2학기-4', UT = '4. 소수의 곱셈', STD = ['[6수01-13]'];
const two = (n) => String(n).padStart(2, '0');
const TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
const ill = (desc, text, extra) => ({
  prompt: `Layered paper-cut illustration of ${desc}${TAIL}`,
  scene: { viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    ...(extra || []), { motif: 'text', x: 240, y: 142, text, size: 22 },
  ] },
});
const lesson = (n, d) => {
  const k = d.acts.length; const mins = k === 3 ? [9, 9, 8] : k === 2 ? [13, 13] : [26];
  d.acts.forEach((a, i) => { a.minutes = mins[i]; });
  return {
    id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
    grade: 5, subject: '수학', unitTitle: UT,
    title: d.title, objective: d.objective, standards: STD, minutes: 40, formats: ['chromebook', 'projector', 'print'],
    illustration: ill(d.desc, d.text, d.layers),
    stages: [
      Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
      { id: 'main', title: '전개', minutes: 26, activities: d.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
    ],
    worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
  };
};
const act = (id, title, tool, task, teacher, levels, items) => ({ id, title, minutes: 0, tool, task, teacher, levels, items });
const withHints = (o, hints) => (hints ? Object.assign(o, { hints }) : o);

// ───── 소수 정확 계산: 문자열 소수끼리 곱해 문자열로 돌려준다(부동소수 오차 없음) ─────
const nd = (s) => { const t = String(s); const i = t.indexOf('.'); return i < 0 ? 0 : t.length - i - 1; };
const ni = (s) => Number(String(s).replace('.', ''));
const P = (a, b) => {
  const d = nd(a) + nd(b); const v = ni(a) * ni(b);
  let t = String(v);
  if (d > 0) { t = t.padStart(d + 1, '0'); t = `${t.slice(0, t.length - d)}.${t.slice(t.length - d)}`; t = t.replace(/0+$/, '').replace(/\.$/, ''); }
  return t;
};
const V = (a, b) => Number(P(a, b));
const X = (a, b) => `${a} × ${b}`;
const uniq = (arr) => new Set(arr).size === arr.length;

// ───── 수직선(numberline) ─────
const NLJ = (o) => ({ easy: { mode: 'jump', ...o, labels: 'all', showValue: true }, base: { mode: 'jump', ...o, labels: 'major' }, challenge: { mode: 'jump', ...o, labels: 'ends' } });
const NLP = (o) => ({ easy: { mode: 'place', ...o, labels: 'all', showValue: true }, base: { mode: 'place', ...o, labels: 'major' }, challenge: { mode: 'place', ...o, labels: 'ends' } });
const NLR = (o) => ({ easy: { mode: 'read', ...o, labels: 'all' }, base: { mode: 'read', ...o, labels: 'major' }, challenge: { mode: 'read', ...o, labels: 'ends' } });
const DEC = (max) => ({ min: 0, max, step: 1, sub: 10, format: 'dec' });
// a씩 n번 뛰어 세기(출발 0). max 를 따로 줄 수 있다
const jmp = (prompt, a, n, d, x, max) => withHints(Object.assign({ prompt, toolOptions: max ? { max } : {}, target: { from: 0, size: Number(a), count: n }, difficulty: d }, x || {}), null);
const plc = (prompt, val, d, x, max) => Object.assign({ prompt, toolOptions: max ? { max } : {}, target: { points: [Number(val)] }, difficulty: d }, x || {});
const rdn = (prompt, mark, d, x, max) => Object.assign({ prompt, toolOptions: Object.assign({ marks: [Number(mark)], input: 'number' }, max ? { max } : {}), target: { value: Number(mark), form: 'dec' }, difficulty: d }, x || {});

// ───── 생각 그물(mindmap) ─────
const ML = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
const pk = (prompt, basket, cards, ans, d, hints, x) => withHints(Object.assign({ prompt,
  toolOptions: { mode: 'pick', basket, cards: cards.map((t, i) => ({ id: `k${i + 1}`, text: t })) },
  target: { pick: ans.map((a) => `k${cards.indexOf(a) + 1}`) }, difficulty: d }, x || {}), hints);
const match = (prompt, pairs, extra, d, hints, x) => {
  const slots = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
  const cards = pairs.map((p, i) => ({ id: `c${i + 1}`, text: p[1] })).concat((extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t })));
  const m = {}; pairs.forEach((p, i) => { m[`s${i + 1}`] = `c${i + 1}`; });
  return withHints(Object.assign({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match: m }, difficulty: d }, x || {}), hints);
};
const srt = (prompt, map, d, hints, x) => {
  const slots = Object.keys(map).map((n, i) => ({ id: `g${i + 1}`, label: n }));
  const cards = []; const t = {};
  Object.keys(map).forEach((n, i) => { t[`g${i + 1}`] = map[n].map((cd, j) => { const id = `g${i + 1}c${j + 1}`; cards.push({ id, text: cd }); return id; }); });
  cards.sort((a, b) => (a.text < b.text ? -1 : 1));
  return withHints(Object.assign({ prompt, toolOptions: { mode: 'sort', slots, cards }, target: { sort: t }, difficulty: d }, x || {}), hints);
};
const fill = (prompt, slotsText, cardTexts, ans, d, hints, x) => {
  if (!uniq(cardTexts)) throw new Error(`카드 글 중복: ${cardTexts.join(' / ')}`);
  const slots = slotsText.map((t, i) => ({ id: `f${i + 1}`, label: t }));
  const cards = cardTexts.map((t, i) => ({ id: `w${i + 1}`, text: t }));
  const m = {}; ans.forEach((a, i) => { if (!cardTexts.includes(a)) throw new Error(`정답 카드 없음: ${a}`); m[`f${i + 1}`] = `w${cardTexts.indexOf(a) + 1}`; });
  return withHints(Object.assign({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill: m }, difficulty: d }, x || {}), hints);
};
// 식 목록 [[a, b], …]을 값으로 나눈다: bins = 칸 이름, which(값, a, b) = 칸 번호
const sortBy = (prompt, pairs, bins, which, d, hints, x) => {
  const map = {}; bins.forEach((b) => { map[b] = []; });
  pairs.forEach(([a, b]) => { map[bins[which(V(a, b), Number(a), Number(b))]].push(X(a, b)); });
  bins.forEach((b) => { if (!map[b].length) throw new Error(`빈 칸: ${b} (${prompt})`); });
  return srt(prompt, map, d, hints, x);
};
const pickBy = (prompt, basket, pairs, pred, d, hints, x) => {
  const cards = pairs.map(([a, b]) => X(a, b));
  const ans = pairs.filter(([a, b]) => pred(V(a, b), Number(a), Number(b))).map(([a, b]) => X(a, b));
  if (!ans.length || ans.length === cards.length) throw new Error(`고르기 정답 수가 이상함: ${prompt}`);
  return pk(prompt, basket, cards, ans, d, hints, x);
};
// 식을 값이 작은 것부터 순서대로 놓기
const ordBy = (prompt, pairs, d, hints, x) => {
  const vals = pairs.map(([a, b]) => V(a, b));
  if (!uniq(vals)) throw new Error(`값이 같은 식이 있음: ${prompt}`);
  const steps = pairs.slice().sort((p, q) => V(p[0], p[1]) - V(q[0], q[1])).map(([a, b]) => X(a, b));
  return withHints(Object.assign({ prompt, toolOptions: { mode: 'order', slots: steps.length, cards: steps.slice().reverse() }, target: { order: steps }, difficulty: d }, x || {}), hints);
};
// (소수)×(자연수)·(자연수)×(소수)를 분수로 고쳐 계산하는 세 칸 빈칸(소수 한 자리) — a 는 소수, n 은 자연수, 곱하는 순서는 front 로 정한다
const stepsFill = (a, n, d, x, hints, front) => {
  const ka = ni(a); const prod = ka * n; const val = P(a, String(n));
  const mulText = front ? `${n} × ${ka}/10` : `${ka}/10 × ${n}`;
  const title = front ? `${n} × ${a}` : `${a} × ${n}`;
  return fill(`${title}의 값을 분수로 고쳐 계산해요. 빈칸에 알맞은 카드를 놓으세요.`,
    [`${a} = ___ (분수로 쓰기)`, `${mulText} = ___ (분수의 곱셈)`, `${prod}/10 = ___ (소수로 쓰기)`],
    [`${ka}/10`, `${prod}/10`, val, String(prod)], [`${ka}/10`, `${prod}/10`, val], d, hints, x);
};
// (소수 한 자리)×(소수 한 자리)를 분수로 고쳐 계산
const stepsFill2 = (a, b, d, x, hints) => {
  const ka = ni(a); const kb = ni(b); const prod = ka * kb; const val = P(a, b);
  return fill(`${X(a, b)}의 값을 분수로 고쳐 계산해요. 빈칸에 알맞은 카드를 놓으세요.`,
    [`${a} = ___ (분수로 쓰기)`, `${ka}/10 × ${kb}/10 = ___ (분수의 곱셈)`, `${prod}/100 = ___ (소수로 쓰기)`],
    [`${ka}/10`, `${prod}/100`, val, `${prod}/10`], [`${ka}/10`, `${prod}/100`, val], d, hints, x);
};
// 소수점을 빼고 자연수로 계산한 뒤 소수점을 찍는 세 칸 빈칸
const digitsFill = (a, b, d, x, hints) => {
  const prod = ni(a) * ni(b); const val = P(a, b); const dg = nd(a) + nd(b);
  const wrong = P(val, '10');
  return fill(`${X(a, b)}의 값을 소수점을 빼고 계산한 뒤 소수점을 찍어 구해요. 빈칸에 알맞은 카드를 놓으세요.`,
    [`소수점을 빼고 계산한 ${ni(a)} × ${ni(b)} = ___`, `소수점 아래 자리 수: ${a} → ${nd(a)}자리, ${b} → ${nd(b)}자리이므로 곱은 ___자리 수`, `${X(a, b)} = ___`],
    [String(prod), String(dg), val, wrong], [String(prod), String(dg), val], d, hints, x);
};

// ───── 종이 자(measure ruler)로 소수 길이의 띠 만들기 ─────
const RUL = { easy: { mode: 'ruler', max: 12, make: true, guides: true }, base: { mode: 'ruler', max: 12, make: true }, challenge: { mode: 'ruler', max: 12, make: true } };
const mk = (prompt, a, n, d, x) => Object.assign({ prompt, toolOptions: { mode: 'ruler', max: 12, make: true }, target: { make: V(a, String(n)) }, difficulty: d }, x || {});

// ───── 선택 문항(곱 보기 세 개: 정답과 소수점이 한 자리 어긋난 값) ─────
const near = (a, b, idx) => { const v = P(a, b); const bad = [P(v, '10'), P(v, '0.1')]; const o = [bad[0], bad[1]]; o.splice(idx, 0, v); return { options: o, answer: idx }; };
const xcalc = (a, b, idx, d, explain, prompt) => { const o = near(a, b, idx); return { type: 'choice', prompt: prompt || `${X(a, b)}의 값은 얼마일까요?`, options: o.options, answer: o.answer, difficulty: d, explain }; };
const xc = (prompt, options, answer, d, explain) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
const wc = (prompt, options, ans) => ({ type: 'choice', prompt, options, answer: options[ans] });
const L = [];

// ───────────────────────────── 1차시 (intro · 같은 소수를 여러 번 더하기) ─────────────────────────────
L.push(lesson(1, {
  title: '0.3씩 뛰어 세어 곱 구하기',
  objective: '(1보다 작은 소수)×(자연수)를 같은 소수를 여러 번 더하는 것으로 이해하고, 수직선에서 뛰어 세어 곱을 구할 수 있다.',
  desc: 'a girl laying four short pastel ribbons end to end along a ruler on a craft table, with small paper arrows showing equal hops',
  text: '0.3씩 4번 뛰어 세기',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 236 }],
  intro: ['"리본 0.3m짜리 4개를 이어 붙이면 모두 몇 m일까요?" 학생이 "0.3+0.3+0.3+0.3"이라고 말하면 곱셈식 0.3 × 4와 이어 준다. 시연 단추로 0에서 0.3씩 네 번 뛰는 모습을 보여 주고 도착한 눈금을 읽게 한다. 3 × 4=12이니까 답이 12라고 말하는 학생에게는 수직선에서 12가 어디쯤인지 물어 소수점의 자리를 짚는다.',
    '같은 길이의 리본을 여러 개 이어 붙이면 모두 얼마나 되는지 수직선에 뛰어 세어 알아봐요.'],
  demo: { tool: 'numberline', options: { mode: 'jump', ...DEC(2), labels: 'major', fixedFrom: 0 }, sequence: [{ from: 0, hops: [0.3, 0.3, 0.3, 0.3], size: 0.3 }] },
  acts: [
    act('a1', '활동 1. 같은 소수씩 뛰어 세기', 'numberline', '수직선의 0에서 출발해 같은 길이씩 여러 번 뛰어요. 도착한 눈금이 곱셈의 값이에요.',
      '"0.3씩 4번 뛰면 어디에 닿을까요? 0.3을 네 번 더하는 것과 같지요." 한 번 뛸 때마다 눈금을 소리 내어 읽게 한다(0.3, 0.6, 0.9, 1.2). 4번 뛴 곳을 1.2가 아니라 1.4라고 읽는 학생에게는 작은 눈금 한 칸이 0.1임을 다시 짚는다.',
      NLJ(DEC(2)), [
        jmp('리본 0.3m를 4개 이어 붙였어요. 0.3씩 4번 뛰어 세어 보세요.', '0.3', 4, 0.08, { predict: { q: '0.3을 4번 더하면 1보다 클까요, 작을까요?', options: ['1보다 커요', '1보다 작아요', '딱 1이에요'], answer: 0 }, conclude: '0.3 × 4는 0.3을 4번 더한 값이라서 1.2예요.' }),
        jmp('0.5씩 3번 뛰어 0.5 × 3의 값을 구해 보세요.', '0.5', 3, 0.12),
        jmp('0.4씩 5번 뛰어 세어 보세요. 도착한 곳은 자연수일까요?', '0.4', 5, 0.16, { conclude: '0.4 × 5=2.0이라서 소수점 아래 0은 쓰지 않고 2라고 써요.' }),
        jmp('더 해 보기: 0.6씩 3번 뛰어 0.6 × 3의 값을 구해 보세요.', '0.6', 3, 0.2, { extra: true }),
      ]),
    act('a2', '활동 2. 곱한 값을 수직선에 나타내기', 'numberline', '곱셈식의 값을 계산해서 수직선에 점으로 나타내요. 곱이 어디쯤인지 먼저 어림해 보아요.',
      '"0.7 × 2는 0.7을 두 번 더한 것이에요. 1보다 클까요, 작을까요?" 1보다 크다는 것을 어림한 뒤 점을 놓게 한다. 점을 1.4가 아니라 14 근처로 옮기려는 학생에게는 수직선의 끝 눈금을 다시 읽어 보게 한다.',
      NLP(DEC(3)), [
        plc('0.2 × 6의 값을 수직선에 점으로 나타내세요.', P('0.2', '6'), 0.1),
        plc('0.7 × 2의 값을 수직선에 점으로 나타내세요.', P('0.7', '2'), 0.14),
        plc('0.9 × 3의 값을 수직선에 점으로 나타내세요.', P('0.9', '3'), 0.18),
        plc('더 해 보기: 0.5 × 7의 값을 수직선에 점으로 나타내세요.', P('0.5', '7'), 0.22, { extra: true }, 4),
      ]),
    act('a3', '활동 3. 곱셈식과 덧셈식 이어 보기', 'mindmap', '곱셈식과 같은 뜻의 덧셈식이나 값을 이어요. 곱셈은 같은 수를 여러 번 더하는 것이에요.',
      '"0.3 × 4는 0.3을 몇 번 더한 것일까요?" 곱하는 자연수가 더하는 횟수임을 말하게 한다. 0.3 × 4를 0.3+4로 이어 붙이는 학생에게는 0.3을 4번 쓴 덧셈식을 직접 써 보게 한다.',
      ML('match', '곱셈과 덧셈'), [
        match('곱셈식과 같은 뜻의 덧셈식을 이으세요.', [[X('0.3', 4), '0.3+0.3+0.3+0.3'], [X('0.5', 3), '0.5+0.5+0.5'], [X('0.2', 6), '0.2+0.2+0.2+0.2+0.2+0.2']], ['0.3+4'], 0.1,
          ['곱하는 자연수가 같은 수를 몇 번 더하는지 알려 줘요.', '더하는 수는 곱셈식의 소수예요.', '소수를 곱하는 자연수만큼 되풀이해서 더해요.']),
        match('곱셈식과 곱을 이으세요.', [[X('0.4', 3), P('0.4', '3')], [X('0.5', 3), P('0.5', '3')], [X('0.6', 3), P('0.6', '3')]], [P('0.4', '30')], 0.14),
        match('말과 곱셈식을 이으세요.', [['0.7을 5번 더하기', X('0.7', 5)], ['0.4씩 3번 뛰기', X('0.4', 3)], ['0.9를 2번 더하기', X('0.9', 2)]], ['0.9 + 2'], 0.18),
      ]),
  ],
  wrap: ['"0.3 × 4는 어떤 뜻이었나요?" 0.3을 4번 더한 것, 수직선에서 0.3씩 4번 뛴 것이라고 말하게 한다. 출구 2번에서 15m를 고른 학생은 소수점 위치를 놓친 것이므로 다음 시간에 0.1이 몇 개인지로 소수점의 자리를 짚어 본다.', [
    xcalc('0.4', '3', 1, 0.1, '0.4를 3번 더하면 0.4+0.4+0.4=1.2예요.'),
    xc('길이가 0.3m인 리본 5개를 이어 붙이면 모두 몇 m일까요?', [`${P('0.3', '5')}m`, `${P('0.3', '50')}m`, `${P('0.3', '0.5')}m`], 0, 0.14, '0.3 × 5는 0.3을 5번 더한 값이라서 1.5m예요.'),
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', ...DEC(2), labels: 'major', fixedFrom: 0 }, prompt: '0.2씩 7번 뛰어 세어 0.2 × 7의 값을 구해 보세요.', target: { from: 0, size: 0.2, count: 7 }, difficulty: 0.18 },
  ]],
  ws: { title: '0.3씩 뛰어 세기', items: [
    { type: 'figure', wide: true, prompt: '0에서 0.3씩 4번 뛰어 닿은 곳에 점이 있어요. 점이 나타내는 수를 쓰세요.', tool: 'numberline', figures: [{ options: { mode: 'read', ...DEC(2), labels: 'major', marks: [V('0.3', '4')] }, caption: '0.3 × 4 = ___' }], answer: P('0.3', '4') },
    wc('0.6 × 4를 바르게 말한 것은 어느 것인가요?', ['0.6을 4번 더한 값이에요', '0.6과 4를 더한 값이에요', '0.6을 4로 나눈 값이에요'], 0),
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '0.2 × 5', '0.5 × 4', '0.3 × 6', '0.8 × 3'], cells: [['곱', '', '', '', '']], answer: [['0.2', '5'], ['0.5', '4'], ['0.3', '6'], ['0.8', '3']].map(([a, b]) => P(a, b)).join(', ') },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.3을 4번 더하면 0.3+0.3+0.3+0.3=____이므로 0.3 × 4=____이에요.', answer: `${P('0.3', '4')}, ${P('0.3', '4')}` },
    { type: 'short', prompt: '0.5 × 3을 덧셈식으로 쓰고 값을 구해 보세요.', answer: `0.5+0.5+0.5=${P('0.5', '3')}` },
  ], easy: { note: '곱셈은 같은 수를 여러 번 더하는 것이에요. 0.3 × 4는 0.3을 4번 더한 값이에요.', items: [
    wc('0.2 × 3은 0.2를 몇 번 더한 것일까요?', ['2번', '3번', '5번'], 1),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.2+0.2+0.2=____', answer: P('0.2', '3') },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '0.1 × 5', '0.4 × 2'], cells: [['곱', '', '']], answer: `${P('0.1', '5')}, ${P('0.4', '2')}` },
    { type: 'draw', prompt: '수직선에 0.5씩 4번 뛰는 화살표를 그리고 도착한 수를 써 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 모든 눈금의 수가 보이고 지금까지 뛴 곳의 수가 위에 나타나요. 짝짓기 카드는 맞게 이으면 초록 테두리가 생겨요.',
    base: '큰 눈금의 수만 보고 한 번에 뛰는 크기를 스스로 맞추어 곱을 구해요.',
    challenge: '양 끝의 수만 보고 뛰어 세고, 곱이 자연수가 되는 경우와 어림(1보다 큰지 작은지)까지 말해요.',
  },
  notes: '자주 보이는 어려움: ① 0.3 × 4를 3 × 4=12라고만 계산하고 소수점을 잊는다 → 수직선에서 어디에 닿는지로 크기를 확인한다. ② 0.3 × 4를 0.3+4로 쓴다 → 곱하는 자연수는 더하는 횟수이다. ③ 작은 눈금 한 칸을 1이나 0.01로 읽는다 → 0과 1 사이가 10칸이므로 한 칸이 0.1이다. ④ 0.4 × 5=2.0을 "2.0"으로만 쓴다 → 소수점 아래 끝의 0은 지워 2라고 쓸 수 있다. 0.1의 개수로 계산하는 것은 2차시에서 이어서 한다.',
}));
// ───────────────────────────── 2차시 (practice · 0.1의 개수로 계산) ─────────────────────────────
const tenFill = (a, n, d, x, hints) => {
  const ka = ni(a); const total = ka * n; const val = P(a, String(n));
  return fill(`${X(a, n)}의 값을 0.1의 개수로 계산해요. 빈칸에 알맞은 카드를 놓으세요.`,
    [`${a} = 0.1이 ___개`, `0.1이 ${ka}개씩 ${n}묶음이면 0.1이 모두 ___개`, `0.1이 ${total}개 = ___`],
    [String(ka), String(total), val, P(val, '0.1')], [String(ka), String(total), val], d, hints, x);
};
const cmp1 = ['1보다 작아요', '1이에요', '1보다 커요'];
const cmp2 = ['2보다 작아요', '2예요', '2보다 커요'];
const rel = (v, k) => (Math.abs(v - k) < 1e-9 ? 1 : v < k ? 0 : 2);
L.push(lesson(2, {
  title: '0.1이 몇 개인지 세어 곱 구하기',
  objective: '(소수 한 자리)×(자연수)를 0.1의 개수로 바꾸어 자연수의 곱셈으로 계산하고 소수점을 알맞게 찍을 수 있다.',
  desc: 'a boy stacking small tenth-sized paper tiles into equal groups on a tray, with a cloth bag of tiles labeled one tenth beside him',
  text: '0.1이 몇 개일까요?',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"0.4m 막대 3개의 길이를 구해 볼까요? 0.4는 0.1이 몇 개인 수였지요?" 0.1이 4개씩 3묶음이면 0.1이 12개이고, 0.1이 12개이면 1.2임을 말하게 한다. 0.1이 12개를 그냥 12라고 쓰는 학생에게는 0.1이 10개면 1이라는 것을 짚어 준다. 소수점을 어디에 찍어야 하는지는 0.1이 몇 개인지로 따져 보게 한다.',
    '소수를 0.1이 몇 개인 수로 바꾸어 곱을 구하는 방법을 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 0.1의 개수로 곱 구하기', 'mindmap', '소수를 0.1이 몇 개인 수로 바꾸고, 자연수의 곱셈으로 개수를 구한 뒤 다시 소수로 나타내요.',
      '"0.4는 0.1이 몇 개일까요? 3묶음이면 모두 몇 개일까요?" 먼저 개수를 구하고 그 개수를 소수로 바꾸게 한다. 0.1이 12개를 1.2가 아닌 0.12로 쓰는 학생에게는 0.1이 10개일 때 1이 된다는 것을 떠올리게 한다.',
      ML('fill', '0.1의 개수'), [
        tenFill('0.4', 3, 0.1, null, ['소수를 0.1이 몇 개인 수로 바꾸어 생각해 봐요.', '먼저 0.1의 개수를 곱셈으로 구하고, 그 개수가 몇 묶음의 10개인지 봐요.', '0.1이 10개이면 1이에요. 12개이면 1과 0.1이 2개예요.']),
        tenFill('0.6', 5, 0.14),
        tenFill('0.7', 4, 0.18),
        tenFill('0.9', 6, 0.22, { extra: true }),
      ]),
    act('a2', '활동 2. 뛰어 센 곳의 수 읽기', 'numberline', '같은 소수씩 여러 번 뛴 곳에 점이 있어요. 점이 나타내는 수가 곱이에요. 0.1이 몇 개인지 세어 읽어요.',
      '"0.8씩 4번 뛴 곳이에요. 0.1이 모두 몇 개일까요?" 개수를 세어 소수로 읽게 한다. 점이 나타내는 수를 32로 쓰는 학생에게는 작은 눈금 한 칸이 0.1임을 짚어 주고 큰 눈금 3과 비교하게 한다.',
      NLR(DEC(6)), [
        rdn(`${'0.8'}씩 4번 뛴 곳에 점이 있어요. 점이 나타내는 수를 쓰세요.`, P('0.8', '4'), 0.12),
        rdn('0.6씩 6번 뛴 곳에 점이 있어요. 점이 나타내는 수를 쓰세요.', P('0.6', '6'), 0.16),
        rdn('0.9씩 5번 뛴 곳에 점이 있어요. 점이 나타내는 수를 쓰세요.', P('0.9', '5'), 0.2),
        rdn('더 해 보기: 0.7씩 8번 뛴 곳에 점이 있어요. 점이 나타내는 수를 쓰세요.', P('0.7', '8'), 0.24, { extra: true }),
      ]),
    act('a3', '활동 3. 곱의 크기 견주어 나누기', 'mindmap', '곱셈식을 계산해 보고 곱이 기준이 되는 수보다 작은지, 같은지, 큰지에 따라 나누어요.',
      '"0.2 × 4는 0.1이 몇 개일까요? 0.1이 10개보다 많을까요, 적을까요?" 0.1의 개수로 1과 견주게 한다. 곱하는 자연수가 크면 곱이 무조건 1보다 크다고 말하는 학생에게는 0.1 × 9=0.9를 계산해 보게 한다.',
      ML('sort', '곱의 크기'), [
        sortBy('곱을 구해서 1과 견주어 나누세요.', [['0.2', 4], ['0.5', 2], ['0.3', 5], ['0.1', 9], ['0.4', 3], ['0.2', 5]], cmp1, (v) => rel(v, 1), 0.12,
          ['먼저 곱을 0.1의 개수로 바꾸어 구해 봐요.', '0.1이 10개이면 1이에요. 개수가 10보다 많은지 적은지 견주어 봐요.', '0.1이 10개보다 적으면 1보다 작고, 10개이면 1, 10개보다 많으면 1보다 커요.']),
        sortBy('이번에도 곱을 구해서 1과 견주어 나누세요.', [['0.1', 10], ['0.3', 3], ['0.2', 7], ['0.5', 4], ['0.4', 2], ['0.6', 3]], cmp1, (v) => rel(v, 1), 0.16),
        sortBy('곱을 구해서 2와 견주어 나누세요.', [['0.5', 3], ['0.4', 5], ['0.6', 4], ['0.9', 2], ['0.5', 4], ['0.8', 3]], cmp2, (v) => rel(v, 2), 0.22),
      ]),
  ],
  wrap: ['"0.7 × 6은 0.1이 몇 개일까요?" 7 × 6=42이므로 0.1이 42개이고 4.2임을 말하게 한다. 출구 1번에서 13개를 고른 학생은 7과 6을 더한 것이므로 곱하는 것임을 다시 짚는다. 출구 2번에서 40을 고른 학생에게는 0.1이 40개이면 몇인지 물어본다.', [
    xc('0.7 × 6은 0.1이 몇 개인 수와 같을까요?', ['13개', '42개', '4.2개'], 1, 0.12, '0.7은 0.1이 7개이고 6묶음이면 7 × 6=42개예요.'),
    xcalc('0.5', '8', 1, 0.14, '0.5는 0.1이 5개이고 8묶음이면 40개예요. 0.1이 40개는 4예요.'),
    { type: 'tool', tool: 'numberline', options: { mode: 'read', ...DEC(3), labels: 'major', marks: [V('0.7', '3')], input: 'number' }, prompt: '0.7씩 3번 뛴 곳에 점이 있어요. 점이 나타내는 수를 쓰세요.', target: { value: V('0.7', '3'), form: 'dec' }, difficulty: 0.16 },
  ]],
  ws: { title: '0.1의 개수로 곱 구하기', items: [
    { type: 'table', prompt: '0.1이 몇 개인지 쓰고 곱을 구하세요.', columns: ['식', '0.3 × 6', '0.8 × 4', '0.6 × 7'], cells: [['0.1의 개수', '', '', ''], ['곱', '', '', '']], answer: [['0.3', 6], ['0.8', 4], ['0.6', 7]].map(([a, n]) => `${ni(a) * n}개, ${P(a, String(n))}`).join(' / ') },
    { type: 'figure', wide: true, prompt: '0.4씩 5번 뛴 곳에 점이 있어요. 점이 나타내는 수를 쓰세요.', tool: 'numberline', figures: [{ options: { mode: 'read', ...DEC(3), labels: 'major', marks: [V('0.4', '5')] }, caption: '0.4 × 5 = ___' }], answer: P('0.4', '5') },
    wc('0.1이 36개이면 얼마일까요?', ['0.36', '3.6', '36'], 1),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.9 × 4에서 0.9는 0.1이 ____개이고, 4묶음이면 0.1이 ____개이므로 0.9 × 4=____이에요.', answer: `9, 36, ${P('0.9', '4')}` },
    { type: 'short', prompt: '0.2 × 7의 곱을 0.1의 개수를 이용하여 구하는 방법을 써 보세요.', answer: `0.2는 0.1이 2개이고 7묶음이면 0.1이 14개예요. 0.1이 14개는 ${P('0.2', '7')}예요.` },
  ], easy: { note: '소수를 0.1이 몇 개인 수로 바꾸면 자연수의 곱셈으로 구할 수 있어요. 0.1이 10개이면 1이에요.', items: [
    wc('0.3은 0.1이 몇 개일까요?', ['3개', '30개', '0.3개'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.1이 12개이면 ____이에요.', answer: P('0.1', '12') },
    { type: 'table', prompt: '0.1의 개수를 쓰세요.', columns: ['식', '0.2 × 3', '0.5 × 2'], cells: [['0.1의 개수', '', '']], answer: '6개, 10개' },
    { type: 'draw', prompt: '0.1짜리 네모 칸을 그려서 0.3 × 4를 나타내고 곱을 써 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 모든 눈금의 수가 보이고, 카드는 맞는 칸에 놓이면 초록 테두리가 생겨요.',
    base: '큰 눈금의 수만 보고 0.1의 개수를 세어 읽고, 곱을 1이나 2와 견주어요.',
    challenge: '양 끝의 수만 보고 점의 수를 읽고, 곱이 1이나 2와 같은 경우까지 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 0.1이 몇 개인지 구한 뒤 소수점을 잘못 찍는다(12개 → 0.12) → 0.1이 10개가 1임을 확인한다. ② 0.4 × 3에서 4와 3을 더한다 → 곱하는 자연수는 묶음 수이다. ③ 곱하는 자연수가 크면 곱이 1보다 크다고 생각한다(0.1 × 9=0.9) → 0.1의 개수가 10보다 많은지 본다. ④ 0.1이 10개 모인 것을 10이라고 쓴다 → 0.1이 10개이면 1이다. 1보다 큰 소수를 곱하는 것은 3차시에서 이어서 한다.',
}));

// ───────────────────────────── 3차시 (extend · 1보다 큰 소수 × 자연수) ─────────────────────────────
const range3 = (lo, hi, vs) => vs.map(([a, n]) => [a, n]);
const jmpBig = { mode: 'jump', min: 0, step: 1, sub: 10, format: 'dec', fixedFrom: 0, hopSize: 1 };
const NLJB = { easy: { ...jmpBig, labels: 'all', showValue: true }, base: { ...jmpBig, labels: 'major' }, challenge: { ...jmpBig, labels: 'ends' } };
L.push(lesson(3, {
  title: '1.4를 분수로 바꾸어 3배 구하기',
  objective: '(1보다 큰 소수)×(자연수)를 소수를 분수로 고쳐서 계산하거나 수직선에서 뛰어 세어 구할 수 있다.',
  desc: 'a girl measuring a long ribbon of one and four tenths meters three times along a wall with a paper tape measure and tenth marks',
  text: '1.4를 3번 더하면?',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 236 }],
  intro: ['"끈 1.4m를 3번 이어 붙이면 모두 몇 m일까요? 1.4는 분수로 어떻게 쓰지요?" 1.4=14/10임을 말하게 하고 14/10 × 3=42/10이 되는 과정을 칠판에 쓴다. 42/10을 4.2로 바꾸는 방법을 묻는다. 1.4 × 3을 1 × 3=3과 0.4 × 3=1.2를 따로 구해 3+1.2로 구하는 학생이 나오면 같은 답이 나오는 것을 확인하게 한다.',
    '1보다 큰 소수도 분수로 고치면 곱을 구할 수 있는지 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 분수로 고쳐 곱 구하기', 'mindmap', '1보다 큰 소수를 분모가 10인 분수로 고쳐 자연수를 곱하고, 다시 소수로 나타내요.',
      '"1.4는 0.1이 14개이니까 14/10이에요. 3묶음이면 분자는 어떻게 될까요?" 분모는 그대로이고 분자에만 곱한다는 것을 짚는다. 14/10 × 3을 42/30으로 쓰는 학생에게는 분모에는 곱하지 않는 까닭을 0.1의 개수로 설명하게 한다.',
      ML('fill', '분수로 고쳐 곱하기'), [
        stepsFill('1.4', 3, 0.1, null, ['소수를 분모가 10인 분수로 고쳐 봐요.', '분수에 자연수를 곱할 때는 분자에만 곱해요.', '분모는 그대로 두고 분자에만 곱한 뒤 소수로 바꿔요.']),
        stepsFill('2.3', 4, 0.14),
        stepsFill('1.6', 5, 0.18),
        stepsFill('3.2', 6, 0.22, { extra: true }),
      ]),
    act('a2', '활동 2. 1보다 큰 소수씩 뛰어 세기', 'numberline', '1보다 큰 소수씩 여러 번 뛰어 곱을 구해요. 처음 뛰는 크기는 1이에요. 크기를 알맞게 바꿔요.',
      '"1.2씩 3번 뛰면 3보다 클까요, 작을까요?" 1씩 3번이 3이므로 3보다 크다는 것을 어림하게 한다. 1.2씩 뛰기를 12씩 뛰는 것으로 읽는 학생에게는 작은 눈금 한 칸이 0.1임을 다시 짚는다.',
      NLJB, [
        jmp('1.2씩 3번 뛰어 1.2 × 3의 값을 구해 보세요.', '1.2', 3, 0.12, { predict: { q: '1.2 × 3은 3보다 클까요, 작을까요?', options: ['3보다 커요', '3보다 작아요', '딱 3이에요'], answer: 0 }, conclude: '1.2는 1보다 크니까 3번 더하면 3보다 커져요.' }, 4),
        jmp('1.5씩 4번 뛰어 1.5 × 4의 값을 구해 보세요.', '1.5', 4, 0.16, null, 6),
        jmp('1.1씩 5번 뛰어 1.1 × 5의 값을 구해 보세요.', '1.1', 5, 0.2, null, 6),
        jmp('더 해 보기: 2.3씩 3번 뛰어 2.3 × 3의 값을 구해 보세요.', '2.3', 3, 0.24, { extra: true }, 7),
      ]),
    act('a3', '활동 3. 곱이 들어갈 구간 어림하기', 'mindmap', '곱셈식의 값을 구한 뒤, 곱이 어느 두 자연수 사이에 있는지에 따라 나누어요.',
      '"1.4 × 3은 1 × 3=3과 2 × 3=6 사이에 있어요. 더 가까운 것은 어느 쪽일까요?" 곱이 자연수 두 개 사이에 있음을 어림하게 한다. 곱을 구한 뒤 소수점 아래를 무시하고 가장 가까운 자연수로 쓰는 학생에게는 구간을 정확히 읽게 한다.',
      ML('sort', '곱의 구간'), [
        sortBy('곱을 구해서 어느 두 수 사이에 있는지 나누세요.', [['1.8', 2], ['1.6', 2], ['1.4', 3], ['1.5', 3], ['1.7', 3], ['1.9', 3]], ['3과 4 사이', '4와 5 사이', '5와 6 사이'], (v) => Math.floor(v) - 3, 0.14,
          ['먼저 곱을 구하고 정수 부분을 봐요.', '곱이 어떤 자연수보다 크고 그 다음 자연수보다 작은지 살펴봐요.', '정수 부분이 3이면 3과 4 사이, 4이면 4와 5 사이, 5이면 5와 6 사이예요.']),
        sortBy('곱을 구해서 5와 8 사이의 어느 두 수 사이에 있는지 나누세요.', [['1.3', 4], ['1.4', 4], ['1.6', 4], ['1.7', 4], ['1.8', 4], ['1.9', 4]], ['5와 6 사이', '6과 7 사이', '7과 8 사이'], (v) => Math.floor(v) - 5, 0.2),
        sortBy('곱을 구해서 2와 4 사이의 어느 두 수 사이에 있는지 나누세요.', [['1.1', 2], ['1.3', 2], ['1.7', 2], ['1.9', 2]], ['2와 3 사이', '3과 4 사이'], (v) => Math.floor(v) - 2, 0.24),
      ]),
  ],
  wrap: ['"1.4 × 3을 분수로 고쳐서 계산해 볼까요?" 14/10 × 3=42/10=4.2의 순서를 말하게 한다. 출구 2번에서 4.2가 아니라 3.12를 쓴 학생은 1.4에 3을 따로 곱해 붙인 것이므로 14/10의 분자에 곱하는 것임을 짚는다.', [
    xcalc('1.4', '3', 1, 0.12, '1.4=14/10이므로 14/10 × 3=42/10=4.2예요.'),
    xcalc('1.6', '5', 2, 0.16, '1.6=16/10이므로 16/10 × 5=80/10=8이에요.'),
    { type: 'tool', tool: 'numberline', options: { ...jmpBig, max: 5, labels: 'major' }, prompt: '1.3씩 3번 뛰어 1.3 × 3의 값을 구해 보세요.', target: { from: 0, size: 1.3, count: 3 }, difficulty: 0.18 },
  ]],
  ws: { title: '1보다 큰 소수 × 자연수', items: [
    { type: 'table', prompt: '분수로 고쳐 곱을 구하세요.', columns: ['식', '1.5 × 4', '2.4 × 3', '1.8 × 5'], cells: [['분수로 쓰기', '', '', ''], ['곱', '', '', '']], answer: [['1.5', 4], ['2.4', 3], ['1.8', 5]].map(([a, n]) => `${ni(a)}/10 × ${n}=${ni(a) * n}/10=${P(a, String(n))}`).join(' / ') },
    { type: 'figure', wide: true, prompt: '1.5씩 2번 뛴 곳에 점이 있어요. 점이 나타내는 수를 쓰세요.', tool: 'numberline', figures: [{ options: { mode: 'read', ...DEC(4), labels: 'major', marks: [V('1.5', '2')] }, caption: '1.5 × 2 = ___' }], answer: P('1.5', '2') },
    wc('2.3 × 4를 분수로 고쳐 바르게 계산한 것은 어느 것일까요?', ['23/10 × 4=92/10', '23/10 × 4=92/40', '23/10 × 4=23/40'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1.4 × 3에서 1.4=____/10이므로 ____/10 × 3=____/10=____이에요.', answer: `14, 14, 42, ${P('1.4', '3')}` },
    { type: 'short', prompt: '1.2 × 3의 곱이 3보다 큰지 작은지 어림하고 까닭을 써 보세요.', answer: '3보다 커요. 1.2는 1보다 큰 수라서 1.2를 3번 더하면 1을 3번 더한 3보다 커져요.' },
  ], easy: { note: '1.4는 0.1이 14개이므로 14/10이에요. 분수에 자연수를 곱할 때는 분자에만 곱해요.', items: [
    wc('1.6을 분수로 쓰면 어느 것일까요?', ['16/10', '1/6', '6/10'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '12/10 × 2=____/10=____', answer: `24, ${P('1.2', '2')}` },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '1.1 × 3', '1.5 × 2'], cells: [['곱', '', '']], answer: `${P('1.1', '3')}, ${P('1.5', '2')}` },
    { type: 'draw', prompt: '수직선에 1.2씩 3번 뛰는 화살표를 그리고 도착한 수를 써 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 모든 눈금의 수와 지금 뛴 곳의 수가 보여요. 카드는 맞는 칸에 놓이면 초록 테두리가 생겨요.',
    base: '큰 눈금의 수만 보고 처음 뛰는 크기 1을 알맞게 바꾸어 곱을 구해요.',
    challenge: '양 끝의 수만 보고 뛰어 세고, 곱이 어느 두 자연수 사이에 있는지 어림해요.',
  },
  notes: '자주 보이는 어려움: ① 1.4=1/4로 쓴다 → 소수점은 분모 10으로, 1.4는 0.1이 14개이다. ② 14/10 × 3을 42/30으로 쓴다 → 분모는 묶음 수와 상관없이 그대로 둔다. ③ 1.4 × 3을 1 × 3과 4 × 3을 붙여 3.12로 쓴다 → 0.4 × 3=1.2이므로 3+1.2=4.2이다. ④ 1보다 큰 소수를 곱하면 곱이 곱해지는 자연수보다 작아진다고 생각한다 → 1.2씩 3번 뛰면 3보다 멀리 간다. 문장제로 이어 가는 것은 4차시에서 한다.',
}));

// ───────────────────────────── 4차시 (extend · 길이와 무게 이야기) ─────────────────────────────
L.push(lesson(4, {
  title: '소수 길이의 띠 이어 붙여 곱 만들기',
  objective: '소수로 나타낸 길이나 무게가 여러 개 있는 이야기에서 곱셈식을 세우고 곱을 구할 수 있다.',
  desc: 'a child lining up several short colored paper strips of equal decimal length end to end on a paper ruler, next to a bag of rice and a juice bottle on a scale',
  text: '같은 길이를 이어 붙이면',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"1.2cm짜리 띠 4개를 이어 붙이면 모두 몇 cm일까요? 자 위에서 직접 만들어 볼까요?" 띠 하나의 길이와 개수로 곱셈식 1.2 × 4를 세우고 자에서 4.8cm가 되는 것을 확인한다. 1.2 × 4를 1.2+4로 쓰는 학생에게는 1.2cm가 4번 있다는 그림을 그려 보게 한다. "쌀 한 봉지가 0.8kg이면 3봉지는요?" 하고 무게로 넓혀 묻는다.',
    '길이나 무게가 같은 물건이 여러 개 있을 때 곱셈식을 어떻게 세우는지 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 자 위에서 띠 이어 붙이기', 'measure', '띠 끝을 끌어서 소수 길이의 띠를 이어 붙인 길이를 만들어요. 곱셈으로 먼저 계산하고 자에서 확인해요.',
      '"1.2cm가 4개이면 모두 몇 cm일까요? 곱셈식을 먼저 말해 보세요." 식을 세운 뒤 띠 끝을 끌어 확인하게 한다. 띠를 4.8이 아니라 48 근처로 옮기려는 학생에게는 자의 끝 눈금을 읽어 보게 한다.',
      RUL, [
        mk('길이가 1.2cm인 띠 4개를 이어 붙였어요. 모두 몇 cm인지 자 위에서 만들어 보세요.', '1.2', 4, 0.1, { conclude: '1.2 × 4=4.8이라서 띠의 끝이 4.8cm에 와요.' }),
        mk('길이가 0.9cm인 단추 7개를 한 줄로 늘어놓았어요. 모두 몇 cm인지 자 위에서 만들어 보세요.', '0.9', 7, 0.14),
        mk('길이가 2.4cm인 막대 3개를 이어 붙였어요. 모두 몇 cm인지 자 위에서 만들어 보세요.', '2.4', 3, 0.18),
        mk('더 해 보기: 길이가 2.5cm인 클립 4개를 이어 붙였어요. 모두 몇 cm인지 자 위에서 만들어 보세요.', '2.5', 4, 0.22, { extra: true }),
      ]),
    act('a2', '활동 2. 이야기와 곱셈식 이어 보기', 'mindmap', '이야기에 알맞은 곱셈식을 이어요. 같은 양이 몇 개인지를 찾으면 곱셈식이 보여요.',
      '"한 봉지가 0.8kg인 쌀이 3봉지 있어요. 같은 양이 몇 번 반복되지요?" 한 번의 양과 반복 횟수를 말하게 한다. 정삼각형의 둘레를 한 변과 3을 더하는 식으로 쓰는 학생에게는 변이 3개 있는 그림을 그려 보게 한다.',
      ML('match', '곱셈식 세우기'), [
        match('이야기에 알맞은 곱셈식을 이으세요.', [['한 봉지가 0.8kg인 쌀 3봉지의 무게', X('0.8', 3)], ['한 병이 1.5L인 주스 4병의 양', X('1.5', 4)], ['한 변이 0.6m인 정삼각형의 둘레', X('0.6', 3)]], ['0.6 + 3'], 0.12,
          ['한 번의 양과 몇 번 반복되는지를 찾아봐요.', '정삼각형은 같은 길이의 변이 몇 개일까요?', '한 번의 양을 몇 번 반복하는지가 곱하는 자연수예요.']),
        match('계단·물·정사각형 이야기에 알맞은 곱셈식을 이으세요.', [['한 칸이 0.5m인 계단 7칸의 높이', X('0.5', 7)], ['1분에 0.4L씩 나오는 물을 6분 받은 양', X('0.4', 6)], ['한 변이 1.2cm인 정사각형의 네 변의 길이의 합', X('1.2', 4)]], ['1.2 + 4'], 0.16),
        match('구슬·걸음·자 이야기에 알맞은 곱셈식을 이으세요.', [['한 개에 2.5g인 구슬 8개의 무게', X('2.5', 8)], ['한 걸음이 0.6m인 사람이 9걸음 간 거리', X('0.6', 9)], ['한 칸이 1.5cm인 자 6칸의 길이', X('1.5', 6)]], ['2.5 + 8'], 0.2),
      ]),
    act('a3', '활동 3. 문장제 답 빈칸 채우기', 'mindmap', '이야기의 곱셈식을 계산해 빈칸에 알맞은 수를 놓아요.',
      '"식을 세운 다음 계산하고 단위를 붙여서 읽어 보세요." 곱한 값과 단위를 함께 말하게 한다. 쌀의 무게를 24kg처럼 소수점을 빠뜨려 쓰는 학생에게는 한 봉지가 1kg보다 가벼운지 되묻는다.',
      ML('fill', '문장제 답'), [
        fill('이야기의 빈칸에 알맞은 수 카드를 놓으세요.', ['쌀 한 봉지가 0.8kg일 때 3봉지는 ___kg이에요.', '주스 한 병이 1.5L일 때 4병은 ___L예요.', '리본 한 줄이 2.5m일 때 5줄은 ___m예요.'], [P('0.8', '3'), P('1.5', '4'), P('2.5', '5'), P('0.8', '30')], [P('0.8', '3'), P('1.5', '4'), P('2.5', '5')], 0.14,
          ['한 번의 양을 몇 번 반복하는지 곱셈식으로 먼저 써 봐요.', '곱을 구한 뒤 소수점을 알맞게 찍었는지 어림해 봐요.', '식을 계산해서 단위를 붙인 값을 빈칸에 놓아요.']),
        fill('걸음·사과·물통 이야기의 빈칸에 알맞은 수 카드를 놓으세요.', ['한 걸음이 0.6m인 사람이 8걸음 가면 ___m예요.', '사과 한 개가 1.2kg일 때 5개는 ___kg이에요.', '물통 한 개가 2.4L일 때 3개는 ___L예요.'], [P('0.6', '8'), P('1.2', '5'), P('2.4', '3'), P('0.6', '80')], [P('0.6', '8'), P('1.2', '5'), P('2.4', '3')], 0.2),
        fill('테이프·클립·화단 이야기의 빈칸에 알맞은 수 카드를 놓으세요.', ['색 테이프 한 장이 3.5cm일 때 6장을 이으면 ___cm예요.', '한 개에 0.9g인 클립 7개는 ___g이에요.', '한 변이 1.5m인 정사각형 화단의 둘레는 ___m예요.'], [P('3.5', '6'), P('0.9', '7'), P('1.5', '4'), P('3.5', '60')], [P('3.5', '6'), P('0.9', '7'), P('1.5', '4')], 0.24),
      ]),
  ],
  wrap: ['"같은 길이의 띠가 여러 개일 때 어떤 식으로 전체 길이를 구했나요?" 한 번의 길이와 개수를 곱한다고 말하게 한다. 출구 3번에서 띠를 24cm 근처로 옮긴 학생은 소수점을 놓친 것이므로 다음 시간에 어림부터 하게 한다.', [
    xcalc('1.8', '5', 1, 0.14, '1.8cm가 5개이면 1.8 × 5=9cm예요.', '길이가 1.8cm인 띠 5개를 이어 붙이면 모두 몇 cm일까요?'),
    xc('한 병이 0.7L인 우유 6병은 모두 몇 L일까요?', [`${P('0.7', '6')}L`, `${P('0.7', '60')}L`, `${P('0.7', '0.6')}L`], 0, 0.16, '0.7 × 6=4.2이므로 4.2L예요.'),
    { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 12, make: true }, prompt: '길이가 2.5cm인 막대 4개를 이어 붙였어요. 모두 몇 cm인지 자 위에서 만들어 보세요.', target: { make: V('2.5', '4') }, difficulty: 0.2 },
  ]],
  ws: { title: '길이와 무게 곱하기', items: [
    { type: 'figure', wide: true, prompt: '자로 띠 하나의 길이를 읽고 4개를 이어 붙인 길이를 구하세요.', tool: 'measure', figures: [{ options: { mode: 'ruler', max: 6, object: { name: '띠', len: 1.5 } }, caption: '띠 하나 ___cm, 4개 ___cm' }], answer: `1.5cm, ${P('1.5', '4')}cm` },
    wc('한 병이 1.5L인 주스 3병의 양을 구하는 식은 어느 것일까요?', ['1.5 × 3', '1.5 + 3', '1.5 − 3'], 0),
    { type: 'table', prompt: '이야기를 곱셈식으로 쓰고 값을 구하세요.', columns: ['이야기', '한 봉지 0.8kg인 쌀 4봉지', '한 걸음 0.6m로 7걸음'], cells: [['곱셈식', '', ''], ['값', '', '']], answer: `0.8 × 4=${P('0.8', '4')}kg / 0.6 × 7=${P('0.6', '7')}m` },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 변이 0.9m인 정사각형의 네 변의 길이의 합은 0.9 × ____=____m예요.', answer: `4, ${P('0.9', '4')}` },
    { type: 'short', prompt: '쌀 한 봉지가 0.8kg인데 3봉지의 무게를 24kg이라고 썼어요. 잘못된 까닭을 써 보세요.', answer: `한 봉지가 1kg보다 가벼운데 3봉지가 24kg일 수는 없어요. 0.8 × 3=${P('0.8', '3')}kg이에요.` },
  ], easy: { note: '같은 길이나 같은 무게가 몇 번 있는지 찾아 곱셈식으로 써요. 곱한 뒤 단위를 붙여요.', items: [
    wc('0.5kg짜리 상자 4개의 무게를 구하는 식은 어느 것일까요?', ['0.5 × 4', '0.5 + 4'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.3m 리본 6개의 길이는 0.3 × 6=____m예요.', answer: P('0.3', '6') },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '0.4 × 5', '0.7 × 3'], cells: [['곱', '', '']], answer: `${P('0.4', '5')}, ${P('0.7', '3')}` },
    { type: 'draw', prompt: '0.6m 리본 3개를 이어 붙인 그림을 그리고 전체 길이를 써 보세요.' },
  ] } },
  diff: {
    easy: '자에 띠 끝에서 눈금으로 내려오는 점선이 보여요. 카드는 맞게 이으면 초록 테두리가 생겨요.',
    base: '곱셈식을 먼저 세운 뒤 자 위에서 만든 길이로 확인해요.',
    challenge: '여러 가지 이야기에서 곱셈식을 세우고 소수점 위치를 어림으로 확인해요.',
  },
  notes: '자주 보이는 어려움: ① 같은 양이 여러 번 있는데 더하기로 식을 쓴다(1.2+4) → 한 번의 양을 몇 번 반복하는지 그림으로 확인한다. ② 정삼각형·정사각형의 둘레를 한 변에 변의 수를 더해 구한다 → 변이 몇 개인지 세어 곱한다. ③ 곱한 뒤 소수점을 빠뜨린다(0.8 × 3=24) → 한 봉지가 1kg보다 가벼운지 어림해 본다. ④ 단위를 쓰지 않거나 곱하는 자연수에 단위를 붙인다 → 답의 단위는 한 번의 양의 단위이다. 자연수에 소수를 곱하는 것은 5차시에서 이어서 한다.',
}));
// ───────────────────────────── 5차시 (core · 자연수 × 1보다 작은 소수) ─────────────────────────────
const asExit = (it, tool) => ({ type: 'tool', tool, options: it.toolOptions, prompt: it.prompt, target: it.target, difficulty: it.difficulty });
const NL01 = { min: 0, max: 1, step: 1, sub: 10, format: 'dec' };
L.push(lesson(5, {
  title: '3 × 0.4를 분수로 바꾸어 구하기',
  objective: '(자연수)×(1보다 작은 소수)를 소수를 분수로 고쳐 계산하거나 수직선에 나타내어 구하고, 곱이 처음 자연수보다 작아짐을 알 수 있다.',
  desc: 'a boy pouring four tenths of a full juice jar into a cup with tenth marks, with a measuring card showing three jars in a row',
  text: '3의 0.4배',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 236 }],
  intro: ['"주스 3L의 0.4배만 마시려고 해요. 3 × 0.4를 분수로 바꾸어 구해 볼까요?" 0.4=4/10이므로 3 × 4/10=12/10=1.2임을 말하게 하고, 3L보다 적게 마시는 것이 맞는지 어림하게 한다. 3 × 0.4=12라고 쓰는 학생에게는 수직선에서 3보다 오른쪽인지 왼쪽인지 짚어 보게 한다. 곱하는 소수가 1보다 작으면 곱이 처음 수보다 작아진다는 점을 짚는다.',
    '어떤 수의 0.4배, 0.7배를 구할 때 곱이 처음 수보다 커지는지 작아지는지 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 분수로 고쳐 자연수에 곱하기', 'mindmap', '자연수에 1보다 작은 소수를 곱할 때, 소수를 분모가 10인 분수로 고쳐 곱하고 다시 소수로 나타내요.',
      '"0.4는 4/10이에요. 3 × 4/10은 3을 4/10번 더하는 것이 아니라 3의 4/10예요. 분자는 어떻게 될까요?" 자연수와 분자를 곱하고 분모는 그대로 둔다는 것을 짚는다. 3 × 4/10을 12/30으로 쓰는 학생에게는 분모에 곱하지 않는 까닭을 말하게 한다.',
      ML('fill', '자연수 × 소수'), [
        stepsFill('0.4', 3, 0.1, null, ['소수를 분모가 10인 분수로 고쳐 봐요.', '자연수와 분수를 곱할 때는 자연수를 분자에만 곱해요.', '분모는 그대로 두고 분자에만 자연수를 곱한 뒤 소수로 바꿔요.'], true),
        stepsFill('0.7', 5, 0.14, null, null, true),
        stepsFill('0.5', 6, 0.18, null, null, true),
        stepsFill('0.9', 8, 0.22, { extra: true }, null, true),
      ]),
    act('a2', '활동 2. 곱을 수직선에 나타내기', 'numberline', '자연수 × 소수의 값을 구해 수직선에 나타내요. 곱이 처음 자연수보다 왼쪽에 놓이는지 확인해요.',
      '"5 × 0.6은 5보다 클까요, 작을까요?" 곱하는 수가 1보다 작으니 5보다 왼쪽에 놓일 것을 어림하게 한다. 점을 5의 오른쪽에 놓는 학생에게는 0.6배는 5를 조금만 가져온 것임을 말하게 한다.',
      NLP(DEC(5)), [
        plc('5 × 0.6의 값을 수직선에 점으로 나타내세요.', V('5', '0.6'), 0.1, { predict: { q: '5 × 0.6은 5보다 클까요, 작을까요?', options: ['5보다 커요', '5보다 작아요', '5와 같아요'], answer: 1 }, conclude: '0.6은 1보다 작아서 5 × 0.6은 5보다 작아요.' }),
        plc('8 × 0.5의 값을 수직선에 점으로 나타내세요.', V('8', '0.5'), 0.14),
        plc('4 × 0.7의 값을 수직선에 점으로 나타내세요.', V('4', '0.7'), 0.18),
        plc('더 해 보기: 9 × 0.2의 값을 수직선에 점으로 나타내세요.', V('9', '0.2'), 0.22, { extra: true }),
      ]),
    act('a3', '활동 3. 곱이 커지는지 작아지는지 가려내기', 'mindmap', '곱을 구해서 조건에 맞는 곱셈식을 모두 골라요. 곱하는 소수가 1보다 작은지 큰지를 살펴요.',
      '"6 × 0.5는 6보다 작아질까요, 커질까요? 계산하기 전에 짐작해 보세요." 곱하는 수가 1보다 작은지 큰지로 먼저 짐작하게 한다. 소수를 곱하면 곱이 항상 커진다고 말하는 학생에게는 6 × 0.5를 수직선에서 확인하게 한다.',
      ML('pick', '곱의 크기'), [
        pickBy('곱이 6보다 작은 식을 모두 고르세요.', '6보다 작아요', [['6', '0.5'], ['6', '1.5'], ['6', '0.9'], ['6', '2.5'], ['6', '0.2']], (v) => v < 6, 0.12,
          ['곱하는 수가 1보다 큰지 작은지 먼저 봐요.', '1보다 작은 수를 곱하면 처음 수보다 작아져요.', '곱하는 소수가 1보다 작은 식만 골라요.']),
        pickBy('곱이 8보다 큰 식을 모두 고르세요.', '8보다 커요', [['8', '0.4'], ['8', '1.2'], ['8', '2'], ['8', '1.5'], ['8', '0.7']], (v) => v > 8, 0.18),
        pickBy('곱이 5와 같은 식을 모두 고르세요.', '5와 같아요', [['5', '1'], ['10', '0.5'], ['2', '2.5'], ['4', '1.5'], ['50', '0.1']], (v) => Math.abs(v - 5) < 1e-9, 0.24),
      ]),
  ],
  wrap: ['"자연수에 1보다 작은 소수를 곱하면 곱은 처음 수보다 커질까요, 작아질까요?" 작아진다고 말하고 까닭을 3 × 0.4=1.2로 설명하게 한다. 출구 2번에서 9 × 2를 고른 학생은 곱하는 수가 1보다 커서 곱이 커지는 것을 놓친 것이므로 다음 시간에 곱하는 수를 1과 견주게 한다.', [
    xcalc('6', '0.5', 1, 0.12, '0.5=5/10이므로 6 × 5/10=30/10=3이에요.'),
    xc('9에 어떤 수를 곱했더니 9보다 작아졌어요. 곱한 수는 어느 것일까요?', ['1.2', '0.8', '2'], 1, 0.16, '1보다 작은 수 0.8을 곱하면 곱이 처음 수보다 작아져요.'),
    { type: 'tool', tool: 'numberline', options: { mode: 'place', ...DEC(3), labels: 'major' }, prompt: '7 × 0.3의 값을 수직선에 점으로 나타내세요.', target: { points: [V('7', '0.3')] }, difficulty: 0.18 },
  ]],
  ws: { title: '자연수 × 1보다 작은 소수', items: [
    { type: 'table', prompt: '분수로 고쳐 곱을 구하세요.', columns: ['식', '5 × 0.6', '4 × 0.7', '8 × 0.5'], cells: [['분수의 곱셈', '', '', ''], ['곱', '', '', '']], answer: [['5', '0.6'], ['4', '0.7'], ['8', '0.5']].map(([n, a]) => `${n} × ${ni(a)}/10=${Number(n) * ni(a)}/10=${P(n, a)}`).join(' / ') },
    { type: 'figure', wide: true, prompt: '3의 0.4배에 점이 있어요. 점이 나타내는 수를 쓰세요.', tool: 'numberline', figures: [{ options: { mode: 'read', ...DEC(3), labels: 'major', marks: [V('3', '0.4')] }, caption: '3 × 0.4 = ___' }], answer: P('3', '0.4') },
    wc('곱이 9보다 작은 식은 어느 것일까요?', ['9 × 0.8', '9 × 1.2', '9 × 2'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '6 × 0.5에서 0.5=____/10이므로 6 × ____/10=____/10=____이에요.', answer: `5, 5, 30, ${P('6', '0.5')}` },
    { type: 'short', prompt: '자연수에 1보다 작은 소수를 곱하면 곱이 처음 자연수보다 작아지는 까닭을 써 보세요.', answer: '1보다 작은 소수는 자연수의 일부만 가져오는 것이라서(예: 0.5배는 반) 곱이 처음 자연수보다 작아져요.' },
  ], easy: { note: '1보다 작은 소수를 곱하면 곱이 처음 수보다 작아져요. 소수를 분수로 고쳐 분자에만 곱해요.', items: [
    wc('0.3을 분수로 쓰면 어느 것일까요?', ['3/10', '3/100', '30/10'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4 × 3/10=____/10=____', answer: `12, ${P('4', '0.3')}` },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '2 × 0.5', '6 × 0.3'], cells: [['곱', '', '']], answer: `${P('2', '0.5')}, ${P('6', '0.3')}` },
    { type: 'draw', prompt: '수직선을 그리고 5 × 0.4의 값을 점으로 나타내 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 모든 눈금의 수가 보이고 점을 놓은 자리의 수가 위에 나타나요. 카드는 맞게 놓으면 초록 테두리가 생겨요.',
    base: '큰 눈금의 수만 보고 곱을 구해 점을 놓고, 곱이 처음 수보다 작아지는지 말해요.',
    challenge: '양 끝의 수만 보고 곱을 구하고 곱이 처음 수와 같거나 큰 경우까지 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 3 × 0.4를 3 × 4=12로 쓴다 → 0.4는 4/10이므로 12/10=1.2이다. ② 3 × 4/10을 12/30으로 쓴다 → 자연수는 분자에만 곱한다. ③ 소수를 곱하면 곱이 항상 커진다고 생각한다 → 1보다 작은 수를 곱하면 곱이 작아진다. ④ 곱이 처음 수와 같아지는 경우를 모른다 → 곱하는 수가 1이거나 10 × 0.5와 5 × 1처럼 값이 같은 경우를 확인한다. 1보다 큰 소수를 곱하는 것은 6차시에서 이어서 한다.',
}));

// ───────────────────────────── 6차시 (practice · 자연수 × 1보다 큰 소수) ─────────────────────────────
const NAT = ['곱이 자연수예요', '곱이 소수예요'];
L.push(lesson(6, {
  title: '자연수에 1보다 큰 소수 곱하고 끝의 0 지우기',
  objective: '(자연수)×(1보다 큰 소수)를 분수로 고쳐 계산하고, 곱의 소수점 아래 끝의 0은 쓰지 않음과 곱이 자연수가 되는 경우를 알 수 있다.',
  desc: 'a girl measuring paint into four equal buckets of one and a half liters each, with a paper scale marked in tenths',
  text: '4 × 1.5=6',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"물통 4개에 물을 1.5L씩 담으면 모두 몇 L일까요? 4 × 1.5를 분수로 고쳐 볼까요?" 1.5=15/10이므로 4 × 15/10=60/10=6임을 말하게 한다. 6.0이라고 쓰는 학생에게는 소수점 아래 끝의 0은 지워 6이라고 쓴다는 것을 알려 준다. "자연수에 1보다 큰 소수를 곱하면 처음 수보다 커질까요, 작아질까요?"를 묻는다.',
    '자연수에 1보다 큰 소수를 곱하면 어떻게 되는지, 곱이 자연수가 되는 경우가 있는지 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 분수로 고쳐 계산하기', 'mindmap', '자연수에 1보다 큰 소수를 곱할 때 소수를 분수로 고쳐 곱하고 소수로 나타내요. 끝의 0은 지워요.',
      '"1.5는 15/10이에요. 4 × 15/10의 분자는 얼마일까요?" 4 × 15=60이 분자가 됨을 말하게 한다. 60/10을 6.0이나 60으로 쓰는 학생에게는 60/10은 60을 10으로 나눈 몫이므로 6이라고 말하게 한다.',
      ML('fill', '자연수 × 1보다 큰 소수'), [
        stepsFill('1.5', 4, 0.1, null, ['소수를 분모가 10인 분수로 고쳐 봐요.', '자연수는 분자에만 곱하고 분모는 그대로 둬요.', '분자에 곱한 뒤 분모 10으로 나눈 값을 소수나 자연수로 써요.'], true),
        stepsFill('2.4', 3, 0.14, null, null, true),
        stepsFill('1.2', 5, 0.18, null, null, true),
        stepsFill('3.5', 6, 0.22, { extra: true }, null, true),
      ]),
    act('a2', '활동 2. 곱하는 순서를 바꾸어 뛰어 세기', 'numberline', '3 × 2.4는 2.4씩 3번 뛴 것과 같아요. 곱하는 순서를 바꾸어도 곱은 같아요. 수직선에서 뛰어 세어 확인해요.',
      '"3 × 2.4와 2.4 × 3은 같을까요?" 2.4씩 3번 뛰는 장면을 보며 곱하는 순서를 바꾸어도 곱이 같음을 말하게 한다. 3 × 2.4를 3씩 2.4번 뛴다고 생각하는 학생에게는 2.4번 뛰는 것은 어렵다는 것을 짚고 순서를 바꾸게 한다.',
      NLJB, [
        jmp('2.4씩 3번 뛰어 3 × 2.4의 값을 구해 보세요. 곱하는 순서를 바꾸어도 같아요.', '2.4', 3, 0.12, { predict: { q: '3 × 2.4와 2.4 × 3은 같을까요?', options: ['같아요', '달라요'], answer: 0 }, conclude: '곱하는 순서를 바꾸어도 곱은 같아서 3 × 2.4는 2.4씩 3번 뛴 값이에요.' }, 8),
        jmp('3.5씩 2번 뛰어 2 × 3.5의 값을 구해 보세요.', '3.5', 2, 0.16, null, 8),
        jmp('1.8씩 5번 뛰어 5 × 1.8의 값을 구해 보세요.', '1.8', 5, 0.2, null, 10),
        jmp('더 해 보기: 2.2씩 4번 뛰어 4 × 2.2의 값을 구해 보세요.', '2.2', 4, 0.24, { extra: true }, 9),
      ]),
    act('a3', '활동 3. 곱이 자연수인지 소수인지 나누기', 'mindmap', '곱을 구해서 곱이 자연수인 식과 소수인 식으로 나누어요. 소수점 아래 끝의 0은 지우므로 자연수가 될 수 있어요.',
      '"4 × 1.5는 6이에요. 소수를 곱했는데 곱이 자연수가 될 수 있네요. 어떤 경우일까요?" 소수점 아래 숫자가 5와 짝수 등의 곱에서 0이 되는 경우를 살펴보게 한다. 곱이 자연수가 되면 계산이 틀렸다고 말하는 학생에게는 분수로 고쳐 확인하게 한다.',
      ML('sort', '곱의 모양'), [
        sortBy('곱을 구해서 곱이 자연수인지 소수인지 나누세요.', [['4', '1.5'], ['3', '2.4'], ['5', '1.2'], ['6', '0.5'], ['7', '0.3'], ['2', '3.5']], NAT, (v) => (Number.isInteger(v) ? 0 : 1), 0.14,
          ['곱을 구한 뒤 소수점 아래에 숫자가 남는지 봐요.', '소수점 아래가 모두 0이면 자연수예요.', '곱을 분수로 고쳐 분자가 분모로 나누어떨어지면 자연수예요.']),
        sortBy('이번에도 곱이 자연수인지 소수인지 나누세요.', [['4', '2.5'], ['5', '1.6'], ['3', '1.4'], ['9', '0.4'], ['6', '0.5'], ['2', '4.5']], NAT, (v) => (Number.isInteger(v) ? 0 : 1), 0.2),
        sortBy('자연수 × 소수의 곱을 자연수인지 소수인지 나누세요.', [['12', '0.5'], ['15', '0.4'], ['7', '0.6'], ['20', '0.3'], ['9', '0.5'], ['11', '0.2']], NAT, (v) => (Number.isInteger(v) ? 0 : 1), 0.24),
      ]),
  ],
  wrap: ['"4 × 1.5의 곱은 6.0이라고 써도 될까요?" 소수점 아래 끝의 0은 쓰지 않아 6이라고 말하게 한다. 출구 2번에서 3 × 1.4를 고른 학생은 곱이 4.2가 되는 것을 몰랐으므로 분수로 고쳐 계산하게 한다.', [
    xcalc('4', '1.5', 1, 0.12, '4 × 15/10=60/10=6이에요. 끝의 0은 쓰지 않아요.'),
    xc('곱이 자연수가 되는 식은 어느 것일까요?', ['3 × 1.4', '5 × 1.2', '7 × 0.3'], 1, 0.16, '5 × 1.2=6이에요. 나머지는 4.2와 2.1이라 소수예요.'),
    { type: 'tool', tool: 'numberline', options: { ...jmpBig, max: 8, labels: 'major' }, prompt: '2.5씩 3번 뛰어 3 × 2.5의 값을 구해 보세요.', target: { from: 0, size: 2.5, count: 3 }, difficulty: 0.18 },
  ]],
  ws: { title: '자연수 × 1보다 큰 소수', items: [
    { type: 'table', prompt: '분수로 고쳐 곱을 구하세요.', columns: ['식', '4 × 2.5', '6 × 1.5', '3 × 3.2'], cells: [['분수의 곱셈', '', '', ''], ['곱', '', '', '']], answer: [['4', '2.5'], ['6', '1.5'], ['3', '3.2']].map(([n, a]) => `${n} × ${ni(a)}/10=${Number(n) * ni(a)}/10=${P(n, a)}`).join(' / ') },
    wc('곱이 자연수인 식은 어느 것일까요?', ['2 × 1.5', '3 × 1.4', '5 × 1.1'], 0),
    { type: 'figure', wide: true, prompt: '4 × 1.5의 값에 점이 있어요. 점이 나타내는 수를 쓰세요.', tool: 'numberline', figures: [{ options: { mode: 'read', ...DEC(7), labels: 'major', marks: [V('4', '1.5')] }, caption: '4 × 1.5 = ___' }], answer: P('4', '1.5') },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5 × 1.2에서 1.2=____/10이므로 5 × ____/10=____/10=____이에요.', answer: `12, 12, 60, ${P('5', '1.2')}` },
    { type: 'short', prompt: '6 × 1.5=9.0이라고 쓴 친구에게 알려 줄 말을 써 보세요.', answer: '소수점 아래 끝의 0은 쓰지 않으니 9라고 써요.' },
  ], easy: { note: '1보다 큰 소수를 곱하면 곱이 처음 수보다 커져요. 소수점 아래 끝의 0은 지워요.', items: [
    wc('1.5를 분수로 쓰면 어느 것일까요?', ['15/10', '1/5', '5/10'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 × 15/10=____/10=____', answer: `30, ${P('2', '1.5')}` },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '2 × 1.2', '3 × 1.5'], cells: [['곱', '', '']], answer: `${P('2', '1.2')}, ${P('3', '1.5')}` },
    { type: 'draw', prompt: '수직선에 1.5씩 4번 뛰는 화살표를 그리고 곱을 써 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 모든 눈금의 수가 보이고 지금 뛴 곳의 수가 나타나요. 카드는 맞는 칸에 놓이면 초록 테두리가 생겨요.',
    base: '큰 눈금의 수만 보고 곱하는 순서를 바꾸어 뛰어 세고 곱이 자연수인지 가려내요.',
    challenge: '양 끝의 수만 보고 뛰어 세고, 자연수가 곱해진 두 자리 수 문항까지 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 곱을 6.0으로 쓴다 → 소수점 아래 끝의 0은 지운다. ② 곱이 자연수가 되면 계산이 틀렸다고 생각한다 → 분수로 고쳐 나누어떨어지는지 확인한다. ③ 3 × 2.4를 3씩 2.4번 뛴다고 생각하다 막힌다 → 곱하는 순서를 바꾸어 2.4씩 3번 뛴다. ④ 1보다 큰 소수를 곱하면 곱이 작아진다고 생각한다 → 4 × 1.5는 4보다 크다. (소수)×(소수)는 7차시에서 다룬다.',
}));

// ───────────────────────────── 7차시 (extend · (소수)×(소수)의 뜻) ─────────────────────────────
L.push(lesson(7, {
  title: '0.6의 0.5배를 수직선과 분수로 구하기',
  objective: '(소수)×(소수)를 수직선에 나타내거나 분수로 고쳐 계산하고, 1보다 작은 소수를 곱하면 곱이 처음 수보다 작아짐을 알 수 있다.',
  desc: 'a girl shading half of a paper strip that is already cut into ten parts with six parts colored, to show half of six tenths',
  text: '0.6의 0.5배',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 236 }],
  intro: ['"초콜릿 바 0.6개의 반, 곧 0.5배를 먹었어요. 먹은 양은 얼마일까요?" 0.6의 반이므로 0.3임을 수직선에서 확인하게 한다. 0.6 × 0.5=6/10 × 5/10=30/100=0.3으로 분수로 고쳐 쓰는 방법을 소개한다. 0.6 × 0.5를 3이라고 쓰는 학생에게는 0.6의 반이 0.6보다 큰지 작은지 물어 소수점의 자리를 짚는다.',
    '0.6의 반, 0.8의 반을 수직선에서 찾아보고 소수끼리 곱한 값이 어떻게 되는지 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 소수의 소수배를 수직선에 나타내기', 'numberline', '수직선의 0과 1 사이에서 소수의 반이나 0.2배를 찾아 점으로 나타내요. 곱하는 수가 1보다 작으면 처음 수보다 왼쪽에 놓여요.',
      '"0.6의 0.5배는 0.6의 반이에요. 0.6보다 오른쪽일까요, 왼쪽일까요?" 왼쪽에 놓인다는 것을 어림하게 한다. 점을 0.6의 오른쪽에 놓는 학생에게는 0.5배는 반만 가져오는 것임을 말하게 한다.',
      NLP(NL01), [
        plc('0.6의 0.5배, 곧 0.6 × 0.5의 값을 수직선에 점으로 나타내세요.', V('0.6', '0.5'), 0.1, { predict: { q: '0.6 × 0.5는 0.6보다 클까요, 작을까요?', options: ['0.6보다 커요', '0.6보다 작아요', '0.6과 같아요'], answer: 1 }, conclude: '0.5배는 반만 가져오는 것이라서 0.6의 반인 0.3이에요.' }),
        plc('0.8의 0.5배, 곧 0.8 × 0.5의 값을 수직선에 점으로 나타내세요.', V('0.8', '0.5'), 0.14),
        plc('0.5의 0.2배, 곧 0.5 × 0.2의 값을 수직선에 점으로 나타내세요.', V('0.5', '0.2'), 0.18),
        plc('더 해 보기: 1.2의 0.5배, 곧 1.2 × 0.5의 값을 수직선에 점으로 나타내세요.', V('1.2', '0.5'), 0.22, { extra: true }),
      ]),
    act('a2', '활동 2. 분수로 고쳐 소수끼리 곱하기', 'mindmap', '소수를 분모가 10인 분수로 고쳐 곱하고 다시 소수로 나타내요. 분모끼리도 곱해서 100이 돼요.',
      '"6/10 × 5/10에서 분자끼리, 분모끼리 곱하면 어떻게 될까요?" 분모가 10 × 10=100이 되는 것을 말하게 한다. 30/100을 0.30이 아니라 3.0이나 0.3 중 어느 것으로 쓰는지 소수 둘째 자리로 읽어 확인하게 한다.',
      ML('fill', '소수 × 소수'), [
        stepsFill2('0.6', '0.5', 0.12, null, ['소수를 분모가 10인 분수로 고쳐 봐요.', '분수끼리 곱할 때는 분자끼리, 분모끼리 곱해요.', '분모가 100이 되면 소수 둘째 자리까지 나타내요. 끝의 0은 지워요.']),
        stepsFill2('0.7', '0.3', 0.16),
        stepsFill2('0.4', '0.8', 0.2),
        stepsFill2('1.2', '0.5', 0.24, { extra: true }),
      ]),
    act('a3', '활동 3. 곱의 크기 짐작해서 가려내기', 'mindmap', '곱하는 수가 1보다 작은지 큰지로 곱의 크기를 짐작하고, 계산해서 맞는지 확인해요.',
      '"0.8 × 0.5는 0.8보다 작을까요, 클까요? 계산하기 전에 짐작해 보세요." 곱하는 수를 1과 견주게 한다. 곱하는 소수가 모두 0.5 이상이면 곱도 0.5 이상이라고 말하는 학생에게는 0.6 × 0.5=0.3을 보여 준다.',
      ML('pick', '곱의 크기'), [
        pickBy('곱이 0.5보다 작은 식을 모두 고르세요.', '0.5보다 작아요', [['0.6', '0.5'], ['0.8', '0.8'], ['0.5', '0.5'], ['0.9', '0.4'], ['0.7', '0.9']], (v) => v < 0.5, 0.14,
          ['곱하는 두 수가 모두 1보다 작으면 곱은 어느 수보다도 작아져요.', '계산하기 전에 0.5 근처인지 짐작해 봐요.', '두 수를 분수로 고쳐 곱해서 0.5와 견주어 봐요.']),
        sortBy('처음 수(앞의 수)보다 곱이 작아지는지 커지는지 나누세요.', [['0.8', '0.5'], ['0.8', '1.5'], ['0.6', '0.9'], ['0.6', '1.2'], ['0.4', '0.5'], ['0.4', '2.5']], ['처음 수보다 작아져요', '처음 수보다 커져요'], (v, a) => (v < a ? 0 : 1), 0.2),
        pickBy('곱이 1보다 큰 식을 모두 고르세요.', '1보다 커요', [['1.2', '0.5'], ['1.2', '1.5'], ['0.9', '1.2'], ['0.8', '1.2'], ['1.5', '1.5']], (v) => v > 1, 0.24),
      ]),
  ],
  wrap: ['"0.6 × 0.5를 분수로 고쳐서 계산해 볼까요?" 6/10 × 5/10=30/100=0.3의 순서를 말하게 한다. 출구 1번에서 3.6을 고른 학생은 곱의 크기를 어림하지 않은 것이므로 곱이 0.6의 반이 되어야 한다는 것을 수직선에서 짚어 본다.', [
    xcalc('0.9', '0.4', 0, 0.12, '0.9 × 0.4=9/10 × 4/10=36/100=0.36이에요.'),
    xc('0.8 × 0.5는 0.8의 몇 배일까요?', ['0.5배', '5배', '8배'], 0, 0.14, '0.8 × 0.5는 0.8의 0.5배이고, 0.5배는 반이에요.'),
    { type: 'tool', tool: 'numberline', options: { mode: 'place', ...NL01, labels: 'major' }, prompt: '0.4의 0.5배를 수직선에 점으로 나타내세요.', target: { points: [V('0.4', '0.5')] }, difficulty: 0.16 },
  ]],
  ws: { title: '소수 × 소수의 뜻', items: [
    { type: 'table', prompt: '분수로 고쳐 곱을 구하세요.', columns: ['식', '0.6 × 0.5', '0.7 × 0.4', '0.9 × 0.2'], cells: [['분수의 곱셈', '', '', ''], ['곱', '', '', '']], answer: [['0.6', '0.5'], ['0.7', '0.4'], ['0.9', '0.2']].map(([a, b]) => `${ni(a)}/10 × ${ni(b)}/10=${ni(a) * ni(b)}/100=${P(a, b)}`).join(' / ') },
    { type: 'figure', wide: true, prompt: '0.8의 0.5배에 점이 있어요. 점이 나타내는 수를 쓰세요.', tool: 'numberline', figures: [{ options: { mode: 'read', ...NL01, labels: 'major', marks: [V('0.8', '0.5')] }, caption: '0.8 × 0.5 = ___' }], answer: P('0.8', '0.5') },
    wc('0.5 × 0.2의 곱은 어느 것일까요?', ['1', '0.1', '0.01'], 1),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.7 × 0.3에서 0.7=____/10, 0.3=____/10이므로 ____/10 × ____/10=____/100=____이에요.', answer: `7, 3, 7, 3, 21, ${P('0.7', '0.3')}` },
    { type: 'short', prompt: '0.6 × 0.5의 곱이 0.6보다 작아지는 까닭을 써 보세요.', answer: '0.5배는 반만 가져오는 것이라서 0.6의 반인 0.3이 되어 0.6보다 작아져요.' },
  ], easy: { note: '소수끼리 곱할 때도 분수로 고쳐서 분자끼리, 분모끼리 곱하면 구할 수 있어요.', items: [
    wc('0.3을 분수로 쓰면 어느 것일까요?', ['3/10', '3/100', '30/10'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3/10 × 2/10=____/100=____', answer: `6, ${P('0.3', '0.2')}` },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '0.4 × 0.5', '0.2 × 0.3'], cells: [['곱', '', '']], answer: `${P('0.4', '0.5')}, ${P('0.2', '0.3')}` },
    { type: 'draw', prompt: '길이 1의 띠를 10칸으로 나누고 0.6만큼 색칠한 뒤 그 반을 다른 색으로 칠해 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 모든 눈금의 수가 보이고 점을 놓은 자리의 수가 나타나요. 카드는 맞게 놓으면 초록 테두리가 생겨요.',
    base: '0과 1 사이 눈금의 수만 보고 점을 놓고 분수로 고쳐 곱해요.',
    challenge: '양 끝의 수만 보고 점을 놓고, 1보다 큰 소수를 곱하는 경우까지 곱의 크기를 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 0.6 × 0.5를 3으로 쓴다 → 0.6의 반이므로 0.6보다 작은 0.3이다. ② 6/10 × 5/10을 30/10으로 쓴다 → 분모끼리도 곱해 100이 된다. ③ 30/100을 3.0으로 쓴다 → 100분의 30은 0.30, 즉 0.3이다. ④ 소수끼리 곱하면 항상 두 수보다 커진다고 생각한다 → 1보다 작은 소수끼리 곱하면 곱은 두 수보다 작아진다. 소수점 아래 자릿수로 계산하는 것은 8차시에서 이어서 한다.',
}));

// ───────────────────────────── 8차시 (extend · 소수점 아래 자릿수로 계산) ─────────────────────────────
const MAG = ['0.1보다 작아요', '0.1 이상 1 미만이에요', '1 이상이에요'];
const magOf = (v) => (v < 0.1 ? 0 : v < 1 ? 1 : 2);
L.push(lesson(8, {
  title: '소수점을 빼고 계산한 뒤 소수점 찍기',
  objective: '(소수)×(소수)를 소수점을 빼고 자연수처럼 계산한 뒤, 두 수의 소수점 아래 자리 수의 합만큼 소수점을 찍어 곱을 구할 수 있다.',
  desc: 'a child multiplying decimal cards by first covering the decimal points with small round stickers and then counting digits to put the point back',
  text: '소수점 자리를 세어요',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"0.12 × 0.3을 소수점을 잠깐 가리고 12 × 3으로 계산해 볼까요?" 12 × 3=36이고, 0.12는 소수점 아래 2자리, 0.3은 1자리이므로 곱은 3자리 수 0.036이 되는 것을 말하게 한다. 36에 소수점을 찍어 0.36이라고 쓰는 학생에게는 0.12 × 0.3이 0.12보다 큰지 작은지 어림하게 한다. 0.4 × 0.25처럼 곱의 끝에 0이 생기는 경우는 끝의 0을 지울 수 있음을 짚는다.',
    '소수끼리 곱할 때 소수점을 어디에 찍는지, 자릿수를 어떻게 세는지 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 소수점을 빼고 계산해 소수점 찍기', 'mindmap', '소수점을 빼고 자연수처럼 계산한 뒤, 두 수의 소수점 아래 자리 수를 더한 만큼 소수점을 찍어요.',
      '"0.12는 소수점 아래 몇 자리, 0.3은 몇 자리일까요? 곱은 몇 자리 수가 될까요?" 자리 수를 더한 값이 곱의 소수점 아래 자리 수임을 말하게 한다. 곱의 자리 수를 두 수의 자리 수 중 큰 쪽으로 정하는 학생에게는 분수로 고쳐 분모가 얼마가 되는지 확인하게 한다.',
      ML('fill', '소수점 찍기'), [
        digitsFill('0.12', '0.3', 0.12, null, ['소수점을 빼고 자연수끼리 곱해 봐요.', '두 수의 소수점 아래 자리 수를 더해요.', '자연수 곱에 더한 자리 수만큼 오른쪽에서 소수점을 찍어요.']),
        digitsFill('0.4', '0.25', 0.16),
        digitsFill('2.3', '0.12', 0.2),
        digitsFill('0.15', '0.2', 0.24, { extra: true }),
      ]),
    act('a2', '활동 2. 자리 수가 달라지는 곱 이어 보기', 'mindmap', '곱하는 소수의 자리가 달라지면 곱의 소수점 위치도 달라져요. 곱셈식과 곱을 알맞게 이어요.',
      '"0.6 × 0.7과 0.06 × 0.7은 소수점 아래 자리 수가 달라요. 곱의 자리 수도 달라질까요?" 곱의 숫자 배열은 같고 소수점의 위치만 달라지는 것을 짚는다. 0.06 × 0.7을 0.42로 이어 붙이는 학생에게는 0.06이 0.6의 10분의 1임을 떠올리게 한다.',
      ML('match', '소수점 위치'), [
        match('곱하는 수의 자리가 달라지는 곱셈식과 곱을 이으세요.', [[X('0.6', '0.7'), P('0.6', '0.7')], [X('0.06', '0.7'), P('0.06', '0.7')], [X('0.006', '0.7'), P('0.006', '0.7')]], [P('6', '0.7')], 0.14,
          ['곱의 숫자는 같고 소수점의 위치만 달라져요.', '곱하는 소수의 자리 수가 늘면 곱의 소수점 아래 자리 수도 늘어요.', '앞의 수가 10분의 1이 될 때마다 곱도 10분의 1이 돼요.']),
        match('0.3을 곱하는 곱셈식과 곱을 이으세요.', [[X('1.2', '0.3'), P('1.2', '0.3')], [X('0.12', '0.3'), P('0.12', '0.3')], [X('0.012', '0.3'), P('0.012', '0.3')]], [P('12', '0.3')], 0.2),
        match('0.8과 0.09를 곱하는 식과 곱을 이으세요.', [[X('0.8', '0.9'), P('0.8', '0.9')], [X('0.8', '0.09'), P('0.8', '0.09')], [X('0.08', '0.09'), P('0.08', '0.09')]], [P('8', '0.9')], 0.24),
      ]),
    act('a3', '활동 3. 곱의 크기로 나누기', 'mindmap', '소수끼리 곱한 값이 0.1보다 작은지, 0.1과 1 사이인지, 1 이상인지로 나누어요.',
      '"0.2 × 0.3은 0.1보다 작을까요? 0.2의 0.3배이니까 0.2보다 훨씬 작아요." 계산하기 전에 짐작하게 한 뒤 계산으로 확인한다. 소수끼리 곱하면 곱이 항상 0.1보다 크다고 말하는 학생에게는 0.05 × 0.4를 계산해 보게 한다.',
      ML('sort', '곱의 크기'), [
        sortBy('곱을 구해서 세 무리로 나누세요.', [['0.2', '0.3'], ['0.5', '0.4'], ['1.5', '0.8'], ['0.12', '0.5'], ['0.9', '0.9'], ['1.2', '1.5']], MAG, (v) => magOf(v), 0.14,
          ['곱을 소수점 위치까지 정확히 구해 0.1, 1과 견주어 봐요.', '0.1은 소수 첫째 자리 수 중 가장 작은 수예요.', '곱이 0.1보다 작으면 첫째 칸, 1보다 작으면 둘째 칸이에요.']),
        sortBy('다른 곱도 세 무리로 나누세요.', [['0.05', '0.4'], ['0.7', '0.6'], ['2.5', '0.4'], ['0.15', '0.2'], ['1.1', '0.9'], ['1.4', '0.8']], MAG, (v) => magOf(v), 0.2),
        sortBy('소수점 아래 자리가 많은 곱도 세 무리로 나누세요.', [['0.03', '0.5'], ['0.25', '0.4'], ['1.6', '1.5'], ['0.08', '0.8'], ['0.55', '1.2'], ['0.2', '0.2']], MAG, (v) => magOf(v), 0.24),
      ]),
  ],
  wrap: ['"0.12 × 0.3은 소수점을 빼고 12 × 3으로 계산한 뒤 소수점을 어디에 찍었나요?" 소수점 아래 2+1=3자리가 되도록 찍어 0.036이 되었다고 말하게 한다. 출구 1번에서 0.2를 고른 학생은 자리 수를 하나만 센 것이므로 다음 시간에 두 수의 자리 수를 각각 써 보게 한다.', [
    xcalc('0.05', '0.4', 0, 0.14, '5 × 4=20이고 소수점 아래 2+1=3자리이므로 0.020, 곧 0.02예요.'),
    xc('0.3 × 0.12의 곱은 소수점 아래 몇 자리 수일까요?', ['2자리', '3자리', '1자리'], 1, 0.16, '0.3은 1자리, 0.12는 2자리라서 곱은 1+2=3자리 수 0.036이에요.'),
    asExit(digitsFill('0.5', '0.14', 0.2), 'mindmap'),
  ]],
  ws: { title: '소수점 찍기', items: [
    { type: 'table', prompt: '소수점을 빼고 계산한 뒤 곱을 구하세요.', columns: ['식', '0.12 × 0.4', '1.5 × 0.06', '0.7 × 0.25'], cells: [['소수점을 빼고 계산한 값', '', '', ''], ['곱', '', '', '']], answer: [['0.12', '0.4'], ['1.5', '0.06'], ['0.7', '0.25']].map(([a, b]) => `${ni(a) * ni(b)} → ${P(a, b)}`).join(' / ') },
    wc('0.3 × 0.12의 곱은 어느 것일까요?', ['0.36', '0.036', '3.6'], 1),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.4 × 0.25에서 4 × 25=____이고 소수점 아래 ____자리이므로 0.100, 곧 ____이에요.', answer: `100, 3, ${P('0.4', '0.25')}` },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2.3 × 0.12에서 23 × 12=____이고 소수점 아래 1+2=____자리이므로 ____이에요.', answer: `276, 3, ${P('2.3', '0.12')}` },
    { type: 'short', prompt: '0.15 × 0.2를 계산해서 0.3이라고 쓴 친구에게 알려 줄 말을 써 보세요.', answer: `15 × 2=30이고 소수점 아래 2+1=3자리이므로 0.030, 곧 ${P('0.15', '0.2')}이에요. 소수점 아래 자리 수를 더하지 않았어요.` },
  ], easy: { note: '소수점을 빼고 곱한 뒤, 두 수의 소수점 아래 자리 수를 더한 만큼 소수점을 찍어요.', items: [
    wc('0.2는 소수점 아래 몇 자리 수일까요?', ['1자리', '2자리'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.3 × 0.4에서 3 × 4=____이고 소수점 아래 ____자리이므로 ____이에요.', answer: `12, 2, ${P('0.3', '0.4')}` },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '0.2 × 0.2', '0.5 × 0.6'], cells: [['곱', '', '']], answer: `${P('0.2', '0.2')}, ${P('0.5', '0.6')}` },
    { type: 'draw', prompt: '0.12 × 0.3을 소수점을 빼고 계산한 뒤 소수점을 찍는 과정을 그림으로 나타내 보세요.' },
  ] } },
  diff: {
    easy: '빈칸 카드가 맞는 칸에 놓이면 초록 테두리가 생겨요. 활동지는 소수점 아래 자리가 적은 곱이에요.',
    base: '소수점을 빼고 계산한 뒤 두 수의 자리 수를 더해 소수점을 스스로 찍어요.',
    challenge: '곱의 끝에 0이 생기는 경우와 곱이 0.1보다 작아지는 경우까지 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 소수점 아래 자리 수를 큰 쪽으로만 센다(0.12 × 0.3을 0.36으로 쓴다) → 두 수의 자리 수를 더한다. ② 곱의 끝에 생긴 0을 그대로 둔다(0.100) → 소수점 아래 끝의 0은 지운다. ③ 소수점을 빼고 계산한 뒤 소수점을 곱 앞에 붙인다 → 자리 수만큼 오른쪽에서 센다. ④ 소수끼리 곱한 값은 항상 0.1보다 크다고 생각한다 → 0.05 × 0.4=0.02는 0.1보다 작다. 곱의 소수점 위치 규칙은 9차시에서 이어서 한다.',
}));
// ───────────────────────────── 9차시 (core · 곱의 소수점 위치) ─────────────────────────────
// x 에 곱하는 수 ms 를 하나씩 곱한 값을 빈칸에 놓는다(곱하는 수가 10배씩 커지거나 10분의 1씩 작아질 때 소수점이 움직인다)
const shiftFill = (prompt, x, ms, extraCard, d, xtra, hints) => {
  const ans = ms.map((m) => P(x, m));
  return fill(prompt, ms.map((m) => `${x} × ${m} = ___`), ans.concat([extraCard]), ans, d, hints, xtra);
};
const DIR = ['소수점이 오른쪽으로 옮겨져요', '소수점이 왼쪽으로 옮겨져요'];
L.push(lesson(9, {
  title: '곱할 때 소수점은 어디로 움직일까',
  objective: '소수에 10, 100, 1000이나 0.1, 0.01을 곱할 때 소수점이 어느 쪽으로 몇 칸 옮겨지는지 알고, 자연수의 곱셈 결과를 이용해 소수점을 알맞게 찍을 수 있다.',
  desc: 'a child sliding a round movable decimal point sticker along a long paper number strip, with arrows pointing right for tens and left for tenths',
  text: '소수점이 움직여요',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 236 }],
  intro: ['"3.45에 10을 곱하면 얼마일까요? 100을 곱하면요?" 곱하는 수의 0이 하나씩 늘 때마다 소수점이 오른쪽으로 한 칸씩 옮겨지는 것을 수 카드로 보여 준다. "그러면 0.1을 곱하면 소수점은 어느 쪽으로 갈까요?" 하고 묻는다. 3.45 × 10을 3.450으로 쓰는 학생에게는 3.45가 10배가 되면 30과 40 사이가 되어야 함을 짚는다. 곱하는 수에서 0의 개수나 소수점 아래 자리 수가 소수점이 옮겨지는 칸 수라고 짚어 준다.',
    '곱하는 수에 따라 곱의 소수점이 어느 쪽으로 몇 칸 옮겨지는지 규칙을 찾아 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 10, 100, 1000과 0.1, 0.01 곱하기', 'mindmap', '곱셈식의 값을 구해 알맞은 칸에 놓아요. 곱하는 수의 0의 개수나 소수점 아래 자리 수만큼 소수점이 움직여요.',
      '"3.45 × 10은 34.5, 3.45 × 100은 345예요. 곱하는 수의 0이 늘 때 소수점은 어떻게 변했나요?" 규칙을 말로 정리하게 한다. 3.45 × 1000에서 소수점이 한 칸 더 갈 곳이 없다고 말하는 학생에게는 끝에 0을 붙여 3450으로 쓰게 한다.',
      ML('fill', '소수점 이동'), [
        shiftFill('3.45에 10, 100, 1000을 곱한 값을 알맞게 놓으세요.', '3.45', ['10', '100', '1000'], P('3.45', '0.1'), 0.1, null, ['곱하는 수의 0이 하나 늘 때마다 소수점이 어느 쪽으로 몇 칸 가는지 살펴봐요.', '10을 곱하면 소수점이 한 칸, 100을 곱하면 두 칸 옮겨져요.', '오른쪽으로 옮겨 갈 자리가 모자라면 끝에 0을 채워요.']),
        shiftFill('0.72에 10, 100, 1000을 곱한 값을 알맞게 놓으세요.', '0.72', ['10', '100', '1000'], P('0.72', '0.1'), 0.14),
        shiftFill('64에 0.1, 0.01, 0.001을 곱한 값을 알맞게 놓으세요.', '64', ['0.1', '0.01', '0.001'], P('64', '10'), 0.2, { extra: true }),
      ]),
    act('a2', '활동 2. 소수점이 가는 쪽 가려내기', 'mindmap', '곱하는 수가 1보다 큰지 작은지에 따라 곱의 소수점이 오른쪽으로 가는지 왼쪽으로 가는지 나누어요.',
      '"2.9에 100을 곱하면 소수점은 어느 쪽으로 갈까요? 0.1을 곱하면요?" 곱하는 수가 1보다 크면 곱이 커져 소수점이 오른쪽, 작으면 왼쪽으로 가는 것을 말하게 한다. 1보다 작은 수를 곱하는데 소수점을 오른쪽으로 옮기는 학생에게는 곱이 처음 수보다 작아져야 함을 짚는다.',
      ML('sort', '소수점 이동 방향'), [
        sortBy('2.9에 곱하는 수에 따라 소수점이 가는 쪽으로 나누세요.', [['2.9', '100'], ['2.9', '0.1'], ['2.9', '1000'], ['2.9', '0.01']], DIR, (v, a, b) => (b > 1 ? 0 : 1), 0.12,
          ['곱하는 수가 1보다 큰지 작은지 먼저 봐요.', '곱이 처음 수보다 커지면 소수점이 오른쪽으로 가요.', '1보다 작은 수를 곱하면 곱이 작아져서 소수점이 왼쪽으로 가요.']),
        sortBy('40.5에 곱하는 수에 따라 소수점이 가는 쪽으로 나누세요.', [['40.5', '10'], ['40.5', '0.001'], ['40.5', '100'], ['40.5', '0.1']], DIR, (v, a, b) => (b > 1 ? 0 : 1), 0.18),
        sortBy('7.2에 곱하는 수에 따라 곱이 커지는지 작아지는지 나누세요.', [['7.2', '10'], ['7.2', '0.1'], ['7.2', '1.5'], ['7.2', '0.5'], ['7.2', '100'], ['7.2', '0.01']], ['곱이 처음 수보다 커져요', '곱이 처음 수보다 작아져요'], (v, a, b) => (b > 1 ? 0 : 1), 0.24),
      ]),
    act('a3', '활동 3. 자연수의 곱으로 소수점 위치 찾기', 'mindmap', '자연수의 곱셈 결과를 알고 있을 때, 소수점 위치만 다른 곱셈식과 곱을 알맞게 이어요.',
      '"15 × 23=345를 알고 있다면 1.5 × 2.3은 얼마일까요?" 소수점 아래 자리 수의 합만큼 소수점을 찍는다고 말하게 한다. 0.15 × 2.3을 3.45나 0.345 가운데 헷갈려 하는 학생에게는 0.15가 2자리, 2.3이 1자리이므로 모두 3자리라는 것을 세어 보게 한다.',
      ML('match', '소수점 위치'), [
        match('15 × 23=345일 때 소수점 위치만 다른 곱셈식과 곱을 이으세요.', [[X('1.5', '2.3'), P('1.5', '2.3')], [X('15', '2.3'), P('15', '2.3')], [X('0.15', '2.3'), P('0.15', '2.3')], [X('0.15', '0.23'), P('0.15', '0.23')]], [P('0.15', '23')], 0.14,
          ['두 수의 소수점 아래 자리 수를 각각 세어 더해 봐요.', '소수점 아래 자리 수가 많을수록 곱이 더 작은 수가 돼요.', '345에서 오른쪽으로 자리 수만큼 소수점을 찍어요.']),
        match('4 × 7=28일 때 소수점 위치만 다른 곱셈식과 곱을 이으세요.', [[X('0.4', '7'), P('0.4', '7')], [X('0.4', '0.7'), P('0.4', '0.7')], [X('0.04', '0.7'), P('0.04', '0.7')], [X('0.4', '70'), P('0.4', '70')]], [P('4', '0.7')], 0.2),
        match('12 × 5=60일 때 소수점 위치만 다른 곱셈식과 곱을 이으세요.', [[X('12', '0.5'), P('12', '0.5')], [X('1.2', '0.5'), P('1.2', '0.5')], [X('0.12', '0.5'), P('0.12', '0.5')], [X('0.012', '0.5'), P('0.012', '0.5')]], [P('120', '0.5')], 0.24),
      ]),
  ],
  wrap: ['"2.5에 100을 곱하면 소수점은 어느 쪽으로 몇 칸 가나요?" 오른쪽으로 두 칸 가서 250이 된다고 말하게 한다. 출구 1번에서 2500을 고른 학생은 소수점을 세 칸 옮긴 것이므로 곱하는 수의 0의 개수를 세어 보게 한다. 0.6에 0.01을 곱하는 출구 2번을 틀린 학생에게는 0.01이 소수점 아래 2자리임을 짚는다.', [
    xcalc('2.5', '100', 1, 0.12, '곱하는 수 100에는 0이 2개 있어서 소수점이 오른쪽으로 두 칸 가요. 2.5는 250이 돼요.'),
    xcalc('0.6', '0.01', 2, 0.16, '0.6 × 0.01은 6 × 1=6에서 소수점 아래 1+2=3자리이므로 0.006이에요.'),
    asExit(shiftFill('1.8에 10, 100, 0.1을 곱한 값을 알맞게 놓으세요.', '1.8', ['10', '100', '0.1'], P('1.8', '1000'), 0.18), 'mindmap'),
  ]],
  ws: { title: '곱과 소수점 위치', items: [
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '4.2 × 10', '4.2 × 100', '4.2 × 0.1', '4.2 × 0.01'], cells: [['곱', '', '', '', '']], answer: ['10', '100', '0.1', '0.01'].map((m) => P('4.2', m)).join(', ') },
    wc('5.6에 0.1을 곱하면 소수점은 어떻게 옮겨질까요?', ['오른쪽으로 한 칸', '왼쪽으로 한 칸', '왼쪽으로 두 칸'], 1),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3.45 × 100은 소수점이 오른쪽으로 ____칸 옮겨져 ____이에요.', answer: `2, ${P('3.45', '100')}` },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요. (15 × 23=345예요.)', text: '1.5 × 2.3=____, 0.15 × 0.23=____', answer: `${P('1.5', '2.3')}, ${P('0.15', '0.23')}` },
    { type: 'short', prompt: '0.8 × 0.1=8이라고 쓴 친구에게 어디가 잘못되었는지 알려 주는 말을 써 보세요.', answer: `1보다 작은 0.1을 곱하면 곱이 0.8보다 작아져야 해요. 소수점 아래 1+1=2자리이므로 ${P('0.8', '0.1')}이에요.` },
  ], easy: { note: '10, 100을 곱하면 소수점이 오른쪽으로, 0.1, 0.01을 곱하면 왼쪽으로 옮겨져요.', items: [
    wc('2.5 × 10의 소수점은 어느 쪽으로 갈까요?', ['오른쪽', '왼쪽'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2.5 × 10=____', answer: P('2.5', '10') },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '3.2 × 100', '3.2 × 0.1'], cells: [['곱', '', '']], answer: `${P('3.2', '100')}, ${P('3.2', '0.1')}` },
    { type: 'draw', prompt: '수 카드 1.4를 쓰고 소수점을 화살표로 옮겨 1.4 × 10의 값을 나타내 보세요.' },
  ] } },
  diff: {
    easy: '카드는 맞는 칸에 놓이면 초록 테두리가 생겨요. 활동지는 10과 0.1만 곱해요.',
    base: '곱하는 수의 0의 개수나 소수점 아래 자리 수를 세어 소수점을 알맞게 옮겨요.',
    challenge: '1000과 0.001처럼 세 칸을 옮기는 경우와 자연수의 곱으로 소수점 위치만 다른 곱까지 구해요.',
  },
  notes: '자주 보이는 어려움: ① 100을 곱할 때 소수점을 한 칸만 옮긴다 → 곱하는 수의 0의 개수만큼 옮긴다. ② 0.1을 곱하는데 오른쪽으로 옮긴다 → 1보다 작은 수를 곱하면 곱이 작아지므로 왼쪽으로 옮긴다. ③ 3.45 × 1000에서 옮길 자리가 모자라면 막힌다 → 끝에 0을 채워 3450으로 쓴다. ④ 0.01을 곱할 때 소수점 아래 자리 수를 1자리로 센다 → 0.01은 2자리이므로 두 칸 옮긴다. 어림으로 곱을 확인하는 것은 10차시에서 이어서 한다.',
}));

// ───────────────────────────── 10차시 (practice · 어림하고 생활 문제 풀기) ─────────────────────────────
const est = (prompt, a, b, rough, d, hints, x) => {
  const v = P(a, b);
  return pk(prompt.replace('{rough}', rough), '알맞은 곱', [P(v, '0.1'), v, P(v, '10')], [v], d, hints, x);
};
L.push(lesson(10, {
  title: '어림해 보고 생활 문제 풀기',
  objective: '소수가 들어간 생활 문제에서 곱셈식을 세우고 곱을 어림해 본 뒤 계산하여, 어림한 값과 견주어 소수점 위치가 알맞은지 확인할 수 있다.',
  desc: 'a child at a school market stall estimating the weight of apples and the price of ribbon, with price tags and a long paper receipt',
  text: '어림하고 계산하기',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"쇠막대가 1m에 1.5kg이에요. 2.4m이면 무게가 얼마쯤일까요? 계산하기 전에 어림해 볼까요?" 1.5는 약 2, 2.4는 약 2로 보아 2 × 2=4 근처일 것을 짐작하고 계산한 값 3.6과 견주게 한다. 어림한 값과 계산한 값이 크게 다르면 소수점을 다시 확인하게 한다. 곱이 0.36이나 36이 되었다고 말하는 학생에게는 어림한 4kg과 견주어 보게 한다.',
    '곱셈 문제를 풀기 전에 어림으로 답이 얼마쯤일지 짐작하면 좋은 점을 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 이야기에 알맞은 곱셈식 이어 보기', 'mindmap', '생활 이야기에서 소수가 곱해지는 상황을 찾아 알맞은 곱셈식을 이어요. 넓이와 무게, 거리 문제가 나와요.',
      '"1m에 1.5kg인 막대 2.4m의 무게는 어떤 식으로 구할까요?" 한 번의 양과 몇 배인지를 찾게 한다. 정사각형의 넓이를 한 변과 한 변을 더하는 식으로 쓰는 학생에게는 가로와 세로를 곱한다는 것을 짚는다.',
      ML('match', '곱셈식 세우기'), [
        match('이야기와 알맞은 곱셈식을 이으세요.', [['1m에 1.5kg인 쇠막대 2.4m의 무게', X('1.5', '2.4')], ['1L로 12.5km를 가는 자동차가 0.8L를 쓸 때 가는 거리', X('12.5', '0.8')], ['한 변이 3.5cm인 정사각형의 넓이', X('3.5', '3.5')]], ['3.5 + 3.5'], 0.14,
          ['한 번의 양과 그 양의 몇 배인지를 찾아봐요.', '넓이는 가로와 세로를 곱해서 구해요.', '단위 양에 몇 배를 곱하는 식을 세워요.']),
        match('가게와 운동장 이야기에 알맞은 곱셈식을 이으세요.', [['1kg에 4500원인 사과 1.2kg의 값', X('4500', '1.2')], ['1분에 0.6L씩 나오는 물을 2.5분 받은 양', X('0.6', '2.5')], ['가로 2.4m, 세로 1.5m인 꽃밭의 넓이', X('2.4', '1.5')]], ['2.4 + 1.5'], 0.2),
        match('책과 걷기 이야기에 알맞은 곱셈식을 이으세요.', [['한 권이 0.35kg인 책 4권의 무게', X('0.35', '4')], ['1시간에 4.6km를 걷는 사람이 0.5시간 걸은 거리', X('4.6', '0.5')], ['한 변이 2.5m인 정삼각형의 둘레', X('2.5', '3')]], ['2.5 + 3'], 0.24),
      ]),
    act('a2', '활동 2. 어림한 값과 견주어 알맞은 곱 고르기', 'mindmap', '곱을 어림해 본 뒤, 소수점 위치가 알맞은 곱을 하나 골라요.',
      '"4.9는 약 5, 2.1은 약 2이니까 곱은 약 10이에요. 이 근처에 있는 값을 찾아볼까요?" 어림한 값과 크기가 비슷한 값을 고르게 한다. 숫자는 같고 소수점 위치만 다른 세 값 중에서 첫 번째를 고르는 학생에게는 어림한 값과 몇 배 차이 나는지 물어본다.',
      ML('pick', '어림과 계산'), [
        est('4.9 × 2.1을 어림하면 약 {rough} 정도예요. 알맞은 곱을 고르세요.', '4.9', '2.1', '10', 0.12, ['곱하는 두 수를 가까운 자연수로 바꾸어 어림해 봐요.', '어림한 값과 크기가 비슷한 값이 알맞은 곱이에요.', '어림한 값과 몇 배나 차이 나는지 살펴봐요.']),
        est('0.52 × 0.8을 어림하면 약 {rough} 정도예요. 알맞은 곱을 고르세요.', '0.52', '0.8', '0.4', 0.18),
        est('1.9 × 3.1을 어림하면 약 {rough} 정도예요. 알맞은 곱을 고르세요.', '1.9', '3.1', '6', 0.22),
        est('더 해 보기: 6.8 × 0.45를 어림하면 약 {rough} 정도예요. 알맞은 곱을 고르세요.', '6.8', '0.45', '3.5', 0.26, null, { extra: true }),
      ]),
    act('a3', '활동 3. 문제의 답 빈칸 채우기', 'mindmap', '이야기를 곱셈식으로 나타내 계산하고, 단위를 붙인 답의 수를 빈칸에 놓아요.',
      '"식을 세운 뒤 계산하고 단위까지 읽어 보세요." 곱한 값을 어림한 값과 견주어 보게 한다. 정사각형의 넓이를 cm로 쓰는 학생에게는 넓이의 단위가 cm²임을 짚는다.',
      ML('fill', '생활 문제 답'), [
        fill('쇠막대, 자동차, 정사각형 이야기의 빈칸에 알맞은 수 카드를 놓으세요.', ['1m에 1.5kg인 쇠막대 2.4m의 무게는 ___kg이에요.', '1L로 12.5km를 가는 자동차가 0.8L를 쓰면 ___km를 가요.', '한 변이 3.5cm인 정사각형의 넓이는 ___cm²예요.'], [P('1.5', '2.4'), P('12.5', '0.8'), P('3.5', '3.5'), P(P('3.5', '3.5'), '0.1')], [P('1.5', '2.4'), P('12.5', '0.8'), P('3.5', '3.5')], 0.14,
          ['식을 세워 계산한 값을 어림한 값과 견주어 봐요.', '1보다 작은 수를 곱한 값은 처음 수보다 작아져요.', '곱셈식을 계산한 값을 단위와 함께 읽어 빈칸에 놓아요.']),
        fill('사과, 물, 꽃밭 이야기의 빈칸에 알맞은 수 카드를 놓으세요.', ['1kg에 4500원인 사과 1.2kg의 값은 ___원이에요.', '1분에 0.6L씩 나오는 물을 2.5분 받으면 ___L예요.', '가로 2.4m, 세로 1.5m인 꽃밭의 넓이는 ___m²예요.'], [P('4500', '1.2'), P('0.6', '2.5'), P('2.4', '1.5'), '540'], [P('4500', '1.2'), P('0.6', '2.5'), P('2.4', '1.5')], 0.2),
        fill('책, 걷기, 삼각형 이야기의 빈칸에 알맞은 수 카드를 놓으세요.', ['한 권이 0.35kg인 책 4권은 ___kg이에요.', '1시간에 4.6km를 걷는 사람이 0.5시간 걸으면 ___km예요.', '한 변이 2.5m인 정삼각형의 둘레는 ___m예요.'], [P('0.35', '4'), P('4.6', '0.5'), P('2.5', '3'), '14'], [P('0.35', '4'), P('4.6', '0.5'), P('2.5', '3')], 0.24),
      ]),
  ],
  wrap: ['"계산하기 전에 어림을 하면 어떤 점이 좋았나요?" 소수점 위치가 맞는지 바로 알 수 있었다고 말하게 한다. 출구 2번에서 58.9를 고른 학생은 어림한 6과 견주지 않은 것이므로 다음 시간에 어림한 값부터 쓰게 한다.', [
    xc('4.9 × 2.1을 어림하면 약 몇일까요?', ['약 1', '약 10', '약 100'], 1, 0.1, '4.9는 약 5, 2.1은 약 2이니까 약 5 × 2=10이에요.'),
    xcalc('1.9', '3.1', 1, 0.16, '1.9는 약 2, 3.1은 약 3이므로 약 6이에요. 알맞은 곱은 5.89예요.'),
    asExit(est('3.8 × 1.9를 어림하면 약 {rough} 정도예요. 알맞은 곱을 고르세요.', '3.8', '1.9', '8', 0.2), 'mindmap'),
  ]],
  ws: { title: '어림하고 계산하기', items: [
    { type: 'table', prompt: '어림한 값을 쓰고 곱을 구하세요.', columns: ['식', '4.8 × 2.1', '0.9 × 5.2', '3.1 × 1.9'], cells: [['어림한 값', '', '', ''], ['계산한 값', '', '', '']], answer: `약 10, 약 5, 약 6 / ${P('4.8', '2.1')}, ${P('0.9', '5.2')}, ${P('3.1', '1.9')}` },
    wc('1m에 2.5kg인 철사 1.6m의 무게를 구하는 식은 어느 것일까요?', ['2.5 × 1.6', '2.5 + 1.6', '2.5 ÷ 1.6'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1kg에 4500원인 사과 1.2kg의 값은 4500 × 1.2=____원이에요.', answer: P('4500', '1.2') },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '가로 2.4m, 세로 1.5m인 꽃밭의 넓이는 2.4 × 1.5=____m²예요.', answer: P('2.4', '1.5') },
    { type: 'short', prompt: '5.2 × 0.9를 계산해서 46.8이라고 쓴 친구에게 어림을 이용해 알려 주는 말을 써 보세요.', answer: `5.2는 약 5, 0.9는 약 1이므로 곱은 약 5예요. 46.8은 너무 크니 소수점 위치를 다시 보고 ${P('5.2', '0.9')}로 고쳐야 해요.` },
  ], easy: { note: '곱을 구하기 전에 가까운 자연수로 어림해 보면 소수점 위치가 맞는지 알 수 있어요.', items: [
    wc('2.1 × 3.9를 어림하면 약 몇일까요?', ['약 8', '약 80', '약 0.8'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1.5 × 2=____', answer: P('1.5', '2') },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '0.5 × 1.2', '2.5 × 0.4'], cells: [['곱', '', '']], answer: `${P('0.5', '1.2')}, ${P('2.5', '0.4')}` },
    { type: 'draw', prompt: '우리 주변에서 소수가 들어간 곱셈 이야기를 하나 만들고 어림한 값과 계산한 값을 써 보세요.' },
  ] } },
  diff: {
    easy: '카드는 맞는 칸에 놓이면 초록 테두리가 생겨요. 활동지는 어림이 쉬운 수만 나와요.',
    base: '이야기에서 곱셈식을 세우고 어림한 값과 견주어 소수점 위치를 확인해요.',
    challenge: '소수 두 자리 수가 들어간 이야기와 어림값이 정확한 값과 조금 달라지는 경우까지 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 어림을 하지 않고 계산해 소수점 위치가 틀려도 모른다 → 가까운 자연수로 어림한 값과 먼저 견준다. ② 넓이를 한 변과 한 변을 더하는 식으로 쓴다 → 가로와 세로를 곱한다. ③ 넓이의 단위를 cm로 쓴다 → cm²로 쓴다. ④ 소수점 아래 자리 수를 잘못 세어 곱이 10배나 10분의 1배가 된다 → 어림한 값과 몇 배 차이 나는지 본다. 단원 전체의 정리는 11차시에서 한다.',
}));

// ───────────────────────────── 11차시 (wrap · 계산 실수 찾기와 단원 정리) ─────────────────────────────
// 곱셈식에 곱을 적은 글(맞게 적었는지 틀리게 적었는지는 값으로 판단): rows = [[a, b, 틀린 곱 또는 null]]
const chk = (prompt, rows, d, hints, x) => {
  const map = { '바르게 계산했어요': [], '잘못 계산했어요': [] };
  rows.forEach(([a, b, wrong]) => {
    if (wrong != null && wrong === P(a, b)) throw new Error(`틀린 곱이 정답과 같음: ${a} × ${b}`);
    map[wrong == null ? '바르게 계산했어요' : '잘못 계산했어요'].push(`${a} × ${b} = ${wrong == null ? P(a, b) : wrong}`);
  });
  return srt(prompt, map, d, hints, x);
};
L.push(lesson(11, {
  title: '계산 실수 찾고 단원 정리하기',
  objective: '소수의 곱셈에서 소수점 위치나 자릿수를 잘못 찍은 계산을 찾아 고치고, 이 단원에서 배운 곱셈 방법을 정리해 말할 수 있다.',
  desc: 'a teacher desk with a red pencil circling a misplaced decimal point on a worksheet and neat colored sticky notes summarizing the rules of decimal multiplication',
  text: '실수를 찾아 고쳐요',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 236 }],
  intro: ['"어떤 친구가 0.3 × 4를 12라고 썼어요. 어디가 틀렸을까요?" 0.3을 4번 더하면 1 근처인데 12는 너무 크다는 것을 말하게 한다. 소수점 위치를 잘못 찍은 계산을 찾아 고치는 것이 오늘 공부임을 알려 준다. 틀린 계산의 소수점만 고치려는 학생에게는 숫자 배열이 맞는지 분수로 고쳐 확인하게 한다.',
    '소수의 곱셈에서 자주 하는 실수를 떠올려 보고, 어림으로 틀린 곳을 찾는 방법을 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 바르게 계산한 식과 잘못 계산한 식 나누기', 'mindmap', '곱셈식과 적힌 곱을 보고 바르게 계산한 것과 잘못 계산한 것으로 나누어요. 어림을 이용하면 쉽게 찾을 수 있어요.',
      '"0.3 × 4=12는 맞을까요? 0.3을 4번 더하면 12가 될까요?" 어림으로 먼저 거르고 자세히 계산해 확인하게 한다. 숫자는 맞는데 소수점만 틀린 것을 맞게 계산했다고 하는 학생에게는 곱이 얼마쯤이어야 하는지 물어본다.',
      ML('sort', '계산 실수'), [
        chk('곱셈식을 바르게 계산한 것과 잘못 계산한 것으로 나누세요.', [['0.3', '4', '12'], ['2.5', '0.4', null], ['0.12', '0.5', null], ['1.5', '6', '0.9'], ['0.8', '0.5', '4'], ['3.2', '5', null]], 0.12,
          ['곱이 얼마쯤이어야 하는지 어림해서 먼저 걸러 봐요.', '1보다 작은 수를 곱했는데 곱이 커졌다면 잘못 계산한 것이에요.', '어림이 맞지 않는 식은 소수점 위치를 다시 따져 봐요.']),
        chk('이번 곱셈식도 바르게 계산한 것과 잘못 계산한 것으로 나누세요.', [['0.7', '0.3', '2.1'], ['4', '2.5', null], ['0.05', '0.4', null], ['1.2', '1.5', '18'], ['9', '0.6', null], ['0.6', '0.6', '0.036']], 0.18),
        chk('소수점 아래 자리가 많은 곱셈식도 바르게 계산한 것과 잘못 계산한 것으로 나누세요.', [['0.25', '4', null], ['6', '0.15', null], ['2.4', '0.5', null], ['1.6', '0.25', '0.04'], ['7', '0.8', '56'], ['0.9', '0.08', null]], 0.24),
      ]),
    act('a2', '활동 2. 뛰어 세어 곱 확인하기', 'numberline', '같은 소수씩 여러 번 뛰어서 곱을 확인해요. 곱셈이 같은 수를 여러 번 더하는 것임을 다시 떠올려요.',
      '"0.8씩 6번 뛰면 5보다 오른쪽일까요, 왼쪽일까요?" 어림하고 뛰어서 확인하게 한다. 한 번 뛸 때마다 눈금을 읽지 않고 처음과 끝만 보는 학생에게는 중간 눈금도 소리 내어 읽게 한다.',
      NLJB, [
        jmp('0.8씩 6번 뛰어 0.8 × 6의 값을 구해 보세요.', '0.8', 6, 0.12, { predict: { q: '0.8 × 6은 5보다 클까요, 작을까요?', options: ['5보다 커요', '5보다 작아요', '딱 5예요'], answer: 1 }, conclude: '0.8은 1보다 작으니까 6번 더해도 6보다 작은 4.8이에요.' }, 5),
        jmp('0.7씩 9번 뛰어 0.7 × 9의 값을 구해 보세요.', '0.7', 9, 0.18, null, 7),
        jmp('1.5씩 5번 뛰어 1.5 × 5의 값을 구해 보세요.', '1.5', 5, 0.22, null, 8),
        jmp('더 해 보기: 3.5씩 2번 뛰어 3.5 × 2의 값을 구해 보세요.', '3.5', 2, 0.26, { extra: true }, 8),
      ]),
    act('a3', '활동 3. 곱의 크기 순서대로 놓기', 'mindmap', '곱셈식을 계산하지 않고 어림하거나 계산해서 곱이 작은 것부터 순서대로 놓아요.',
      '"0.6 × 0.05, 0.6 × 0.5, 6 × 0.5, 60 × 0.5를 비교해 볼까요? 곱하는 수가 10배씩 커지면 곱은 어떻게 될까요?" 10배씩 커지는 규칙으로 크기를 순서 지을 수 있음을 짚는다. 곱하는 수의 자리만 보고 순서를 정하는 학생에게는 곱을 직접 계산해 보게 한다.',
      ML('order', '곱의 크기'), [
        ordBy('곱이 작은 것부터 순서대로 놓으세요.', [['0.6', '0.05'], ['0.6', '0.5'], ['6', '0.5'], ['60', '0.5']], 0.14,
          ['곱하는 수가 10배씩 커지면 곱도 10배씩 커져요.', '곱을 구하지 않아도 어느 수가 10배인지 살펴봐요.', '가장 작은 곱부터 차례로 놓아요.']),
        ordBy('이번에도 곱이 작은 것부터 순서대로 놓으세요.', [['0.25', '0.4'], ['2.5', '0.4'], ['2.5', '4'], ['0.025', '0.4']], 0.2),
        ordBy('곱이 작은 것부터 순서대로 놓아 보세요. 1보다 큰 수와 작은 수가 섞여 있어요.', [['1.2', '1.5'], ['1.2', '0.5'], ['12', '1.5'], ['0.12', '0.5']], 0.24),
      ]),
  ],
  wrap: ['"소수의 곱셈에서 소수점은 어떻게 찍었나요? 어림은 어떻게 도움이 되었나요?" 소수점 아래 자리 수의 합만큼 찍고, 어림으로 크기를 확인했다고 말하게 한다. 출구 1번에서 30을 고른 학생은 0.6 × 0.5의 곱이 0.6보다 작아져야 함을 놓친 것이므로 다음 시간에 수직선으로 확인하게 한다.', [
    xc('어떤 친구가 0.6 × 0.5=3이라고 썼어요. 바르게 고친 것은 어느 것일까요?', [P('0.6', '0.5'), P('0.6', '50'), P('0.6', '0.05')], 0, 0.16, '0.6 × 0.5는 6/10 × 5/10=30/100=0.3이에요.'),
    xcalc('1.4', '0.5', 1, 0.2, '1.4 × 0.5는 14/10 × 5/10=70/100=0.7이에요.'),
    asExit(ordBy('곱이 작은 것부터 순서대로 놓으세요.', [['3', '0.4'], ['3', '0.04'], ['3', '4'], ['0.3', '0.04']], 0.22), 'mindmap'),
  ]],
  ws: { title: '소수의 곱셈 정리', items: [
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['', '(소수)×(자연수)', '(자연수)×(소수)', '(소수)×(소수)'], cells: [['식', '0.3 × 4', '4 × 0.3', '0.3 × 0.4'], ['곱', '', '', '']], answer: `${P('0.3', '4')}, ${P('4', '0.3')}, ${P('0.3', '0.4')}` },
    wc('곱이 0.1보다 작은 식은 어느 것일까요?', ['0.2 × 0.3', '0.5 × 0.4', '0.9 × 0.9'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 말이나 수를 쓰세요.', text: '소수끼리 곱할 때는 소수점을 빼고 계산한 뒤 두 수의 소수점 아래 자리 수를 ______ 만큼 소수점을 찍어요. 0.12 × 0.3=____이에요.', answer: `더한, ${P('0.12', '0.3')}` },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4.5 × 10=____, 4.5 × 0.1=____', answer: `${P('4.5', '10')}, ${P('4.5', '0.1')}` },
    { type: 'short', prompt: '소수의 곱셈에서 소수점 위치가 맞는지 확인하는 방법을 어림이라는 말을 넣어 써 보세요.', answer: '곱하는 두 수를 가까운 자연수로 어림해 곱이 얼마쯤인지 먼저 짐작하고, 계산한 값이 그 근처인지 견주어 확인해요.' },
  ], easy: { note: '곱하는 수가 1보다 작으면 곱이 처음 수보다 작아지고, 1보다 크면 곱이 처음 수보다 커져요.', items: [
    wc('0.5 × 4의 곱은 4보다 클까요, 작을까요?', ['4보다 작아요', '4보다 커요'], 0),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.3 × 3=____', answer: P('0.3', '3') },
    { type: 'table', prompt: '곱을 구해 쓰세요.', columns: ['식', '0.2 × 0.4', '1.5 × 2'], cells: [['곱', '', '']], answer: `${P('0.2', '0.4')}, ${P('1.5', '2')}` },
    { type: 'draw', prompt: '이 단원에서 배운 소수의 곱셈 규칙을 한 가지 골라 그림이나 식으로 나타내 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 모든 눈금의 수가 보이고 카드는 맞는 칸에 놓이면 초록 테두리가 생겨요. 활동지는 간단한 곱이에요.',
    base: '어림으로 틀린 계산을 걸러 내고 곱의 크기 순서를 스스로 정해요.',
    challenge: '소수점 아래 자리 수가 많은 곱의 실수까지 찾아 고치고 곱의 크기를 10배씩 변하는 규칙으로 말해요.',
  },
  notes: '자주 보이는 어려움: ① 숫자는 맞는데 소수점 위치가 틀린 계산을 맞다고 한다 → 어림으로 곱이 얼마쯤인지 먼저 정한다. ② 곱의 소수점 아래 자리 수를 두 수 중 큰 쪽만 센다 → 두 수의 자리 수를 더한다. ③ 소수를 곱하면 곱이 항상 커진다고 생각한다 → 1보다 작은 수를 곱하면 작아진다. ④ 곱이 자연수가 되는 것은 계산이 틀렸다고 생각한다 → 소수점 아래 끝의 0은 지운다. 이 단원의 평가는 분수로 고쳐 계산하기, 소수점 위치 찍기, 어림하기로 구성한다.',
}));

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 5, subject: '수학', unitTitle: UT,
  flow: '1~2차시에서는 (소수)×(자연수)를 같은 소수를 여러 번 더하는 것과 수직선의 뛰어 세기로 이해하고, 0.1이 몇 개인지로 소수점의 자리를 정합니다. 3~4차시에서는 1보다 큰 소수를 분수로 고쳐 곱하고 길이와 무게 이야기에서 곱셈식을 세웁니다. 5~6차시에서는 (자연수)×(소수)를 분수로 고쳐 계산하며 1보다 작은 소수를 곱하면 곱이 작아지고 곱의 끝에 생긴 0은 쓰지 않는다는 것을 알아봅니다. 7~8차시에서는 (소수)×(소수)를 수직선과 분수로 이해한 뒤 소수점을 빼고 계산하고 두 수의 소수점 아래 자리 수의 합만큼 소수점을 찍습니다. 9차시에서는 10·100·0.1·0.01을 곱할 때 소수점이 움직이는 규칙을 찾고, 10차시에서는 어림으로 소수점 위치를 확인하며 생활 문제를 풉니다. 11차시에서는 틀린 계산을 찾아 고치고 곱의 크기 순서를 정하며 단원을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
