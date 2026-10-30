/* 5학년 1학기 5. 분수의 덧셈과 뺄셈 — 단원 파일(차시 11개, 기존 차시 없음).
 * 흐름: 조각 크기가 달라 그냥 못 더하는 까닭(1) → 크기가 같은 분수로 바꿔 분모 맞추기(2) → 통분하고 더하기, 합이 1보다 작을 때(3)
 *      → 합이 1보다 클 때 대분수로(4) → 띠 그림으로 빼기(5) → 수직선에서 더하고 빼기(6) → 그림의 각 부분과 식 짝짓기(7)
 *      → 계산 순서·약분해서 답 쓰기(8) → 대분수의 덧셈(9) → 받아내림이 있는 대분수의 뺄셈(10) → 단원 정리(11).
 * 성취기준: 전 차시 [6수01-08](분모가 다른 분수의 덧셈과 뺄셈). units-index plan 의 주제 순서(개념 4 → 표현 4 → 적용 3)를 따른다.
 * 교구: 분수 띠(fraction: 같은 조각으로 나눈 띠에 색칠·지우기), 분수 띠 견주기(fracstrips: 크기가 같은 분수·약분), 수직선(numberline: 합과 차의 점 놓기),
 *      생각 그물(mindmap: 식·설명 카드 이어 보기·나누기·고르기·빈칸·순서).
 * 띠 교구는 조각 수를 정한 판에서 색칠하므로 띠가 이미 공통분모로 나뉘어 있는 그림에서 시작하고, 통분 계산 자체는 카드·수직선·약분 교구로 다룬다.
 * 모든 정답 수는 아래 도우미(lcm·합차 계산)가 문항 글의 분수에서 직접 계산해 target 과 카드 글을 만든다.
 */
(function () {
const UID = 'g5-math-1-05', CU = 'g5-수학-1학기-5', UT = '5. 분수의 덧셈과 뺄셈';
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
    title: d.title, objective: d.objective, standards: ['[6수01-08]'], minutes: 40, formats: ['chromebook', 'projector', 'print'],
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
const ML = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
// ── 분수 계산 도우미: 분수는 [분자, 분모], 대분수는 [자연수, 분자, 분모] ──
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a / gcd(a, b)) * b;
const range = (n) => Array.from({ length: n }, (_, i) => i);
const P = (x) => (x.length === 3 ? `${x[0]} ${x[1]}/${x[2]}` : `${x[0]}/${x[1]}`);
const imp = (x) => (x.length === 3 ? [x[0] * x[2] + x[1], x[2]] : x);
const mixedStr = (f) => { const g = gcd(f[0], f[1]); const n = f[0] / g; const d = f[1] / g; const w = Math.floor(n / d); const r = n % d; return r ? (w ? `${w} ${r}/${d}` : `${r}/${d}`) : String(w); };
const calc = (x, y, o) => { const [a, b] = imp(x); const [c, e] = imp(y); const L = lcm(b, e); const p = a * (L / b); const q = c * (L / e); return [o === '-' ? p - q : p + q, L]; };
const ans = (x, y, o) => mixedStr(calc(x, y, o));
const wrongSum = (x, y) => { const [a, b] = imp(x); const [c, e] = imp(y); return `${a + c}/${b + e}`; };
// 통분: 두 분수를 공통분모(최소공배수)로 바꾼 글 '3/6, 2/6'
const tong = (x, y) => { const [a, b] = x; const [c, e] = y; const L = lcm(b, e); return `${(a * L) / b}/${L}, ${(c * L) / e}/${L}`; };
// 식·설명 카드 이어 보기: pairs = [[칸 글, 카드 글], …], extra = 함정 카드
const match = (prompt, pairs, extra, d, hints, x) => {
  const slots = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
  const cards = pairs.map((p, i) => ({ id: `c${i + 1}`, text: p[1] })).concat((extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t })));
  const m = {}; pairs.forEach((p, i) => { m[`s${i + 1}`] = `c${i + 1}`; });
  return Object.assign({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match: m }, difficulty: d, hints }, x || {});
};
const pick = (prompt, basket, cards, d, hints, x) => Object.assign({ prompt,
  toolOptions: { mode: 'pick', basket, cards: cards.map((c, i) => ({ id: `k${i + 1}`, text: c[0] })) },
  target: { pick: cards.map((c, i) => (c[1] ? `k${i + 1}` : null)).filter(Boolean) }, difficulty: d, hints }, x || {});
const srt = (prompt, topic, groups, d, hints, x) => {
  const names = Object.keys(groups); const cards = []; const tg = {};
  names.forEach((nm, gi) => { tg[`g${gi + 1}`] = []; groups[nm].forEach((t, i) => { const id = `g${gi + 1}c${i + 1}`; tg[`g${gi + 1}`].push(id); cards.push({ id, text: t }); }); });
  const mixed = cards.filter((_, i) => i % 2 === 0).concat(cards.filter((_, i) => i % 2 === 1));
  return Object.assign({ prompt, toolOptions: { mode: 'sort', topic, slots: names.map((nm, gi) => ({ id: `g${gi + 1}`, label: nm })), cards: mixed }, target: { sort: tg }, difficulty: d, hints }, x || {});
};
const fill = (prompt, pairs, extra, d, hints, x) => {
  const slots = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
  const cards = pairs.map((p, i) => ({ id: `c${i + 1}`, text: p[1] })).concat((extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t })));
  const m = {}; pairs.forEach((p, i) => { m[`s${i + 1}`] = `c${i + 1}`; });
  return Object.assign({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill: m }, difficulty: d, hints }, x || {});
};
// 순서 놓기: steps = 바른 차례의 글, extra = 함정 카드(자리는 steps 수만큼)
const ord = (prompt, steps, extra, d, hints, x) => {
  const cards = steps.map((t, i) => ({ id: `o${i + 1}`, text: t })).concat((extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t })));
  return Object.assign({ prompt, toolOptions: { mode: 'order', slots: steps.length, cards }, target: { order: steps.map((_, i) => `o${i + 1}`) }, difficulty: d, hints }, x || {});
};
// 식 ↔ 답 이어 보기(답은 계산해 만든다): list = [[x, '+'|'-', y], …]; 첫 식의 분모끼리·분자끼리 더한 틀린 답 카드를 함정으로 붙인다
const calcMatch = (prompt, list, d, hints, x, trap) => {
  const pairs = list.map(([a, o, b]) => [`${P(a)} ${o === '-' ? '−' : '+'} ${P(b)}`, ans(a, b, o)]);
  const extra = trap === false ? [] : Array.isArray(trap) ? trap : (list[0][1] === '+' ? [wrongMixed(list[0][0], list[0][2])] : []);
  uniq(pairs.map((p) => p[1]).concat(extra), prompt);
  return match(prompt, pairs, extra, d, hints, x);
};
// 계산 단계 빈칸: 통분한 두 분수와 합(차)을 채운다 — 공통분모는 L, 둘 다 진분수
const stepFill = (prompt, x, y, o, d, hints, x2) => {
  const [a, b] = x; const [c, e] = y; const L = lcm(b, e);
  const t1 = `${(a * L) / b}/${L}`; const t2 = `${(c * L) / e}/${L}`; const r = calc(x, y, o);
  return fill(prompt, [[`${P(x)} ${o === '-' ? '−' : '+'} ${P(y)}에서 분모를 ${L}로 맞추면 ${P(x)} = ___`, t1], [`분모를 ${L}로 맞추면 ${P(y)} = ___`, t2], [`그래서 ${o === '-' ? '차' : '합'}은 ___`, `${r[0]}/${r[1]}`]], [o === '-' ? `${Math.abs(a - c)}/${Math.max(b, e)}` : wrongSum(x, y)], d, hints, x2);
};
// 띠(fraction): 같은 조각으로 나눈 띠에 색칠해 합(차)을 만든다. x, y 는 진분수이고 공통분모 L 은 12 이하
const FR = { easy: { shape: 'strip', showTerms: true }, base: { shape: 'strip' }, challenge: { shape: 'strip', hideFraction: true } };
const stripAdd = (x, y, d, ex) => {
  const [a, b] = x; const [c, e] = y; const L = lcm(b, e); const p = (a * L) / b; const q = (c * L) / e;
  return Object.assign({ prompt: `${P(x)} + ${P(y)}의 합을 ${L}조각 띠에 색칠해 보세요.`,
    toolOptions: { startN: L, min: L, max: L, locked: range(p) }, state: { n: L }, target: { den: L, num: p + q }, difficulty: d,
    hints: ['처음 분수가 띠에서 몇 조각인지 세고, 더하는 분수는 같은 크기 조각으로 몇 개인지 생각해요.', '이미 칠해진 조각에 이어서 더하는 분수만큼 칠해요. 칠한 조각이 모두 몇 개인지 세어요.', `${P(x)}는 ${L}조각 중 ${p}조각, ${P(y)}는 ${q}조각이에요. ${p} + ${q} = ${p + q}이므로 ${L}분의 ${p + q}예요.`] }, ex || {});
};
const stripSub = (x, y, d, ex) => {
  const [a, b] = x; const [c, e] = y; const L = lcm(b, e); const p = (a * L) / b; const q = (c * L) / e;
  return Object.assign({ prompt: `${P(x)}이 칠해진 ${L}조각 띠에서 ${P(y)}만큼 지우고 남은 양을 나타내 보세요.`,
    toolOptions: { startN: L, min: L, max: L }, state: { n: L, colored: range(p) }, target: { den: L, num: p - q }, difficulty: d,
    hints: ['칠해진 조각 가운데 빼는 분수만큼을 같은 크기 조각으로 세어 지워요.', '지운 뒤에 남은 칠한 조각이 몇 개인지 세어 보세요.', `${P(x)}는 ${p}조각, ${P(y)}는 ${q}조각이에요. ${p} − ${q} = ${p - q}이므로 ${L}분의 ${p - q}가 남아요.`] }, ex || {});
};
// 분수 띠 견주기(fracstrips): 크기가 같은 분수 만들기, 약분하기
const FS = { easy: { showMarks: true, showEqual: true }, base: {}, challenge: { noCuts: true } };
const FSD = { easy: { mode: 'divide', markCommon: true, showEqual: true }, base: { mode: 'divide' }, challenge: { mode: 'divide', hideStrip: true } };
const fsEq = (top, den, d, ex) => {
  const [n, m] = top; const k = den / m;
  return Object.assign({ prompt: `위 띠는 ${P(top)}이에요. 아래 띠를 ${den}조각으로 나누어 크기가 같은 분수를 만드세요.`, toolOptions: { top }, target: { equalTo: top, den }, difficulty: d,
    hints: ['아래 띠의 조각 수가 바뀌어도 색칠한 끝은 위 띠와 같은 자리여야 해요.', '분모가 몇 배(또는 몇 분의 1)가 되었는지 보고 분자도 같은 수만큼 바꾸어요.', `분모에 ${den / m}를 곱해 ${den}이 되었으니 분자 ${n}에도 ${den / m}를 곱해 ${(n * den) / m}로 해요.`] }, ex || {});
};
// 수직선(numberline): 0 이상 max 이하, 큰 눈금 하나를 den 칸으로 나눈 판에 점을 놓는다. 점은 문자열 분수('5/6')나 대분수('1 1/6')
const NL = { easy: { labels: 'all', showValue: true }, base: { labels: 'major' }, challenge: { labels: 'ends' } };
const nl = (prompt, max, den, points, d, hints, x, mixed) => Object.assign({ prompt, toolOptions: Object.assign({ min: 0, max, step: 1, sub: den, format: 'frac', den, count: points.length }, mixed ? { mixed: true } : {}), target: { points }, difficulty: d, hints }, x || {});
// ── 추가 도우미 ──
const uniq = (arr, what) => { if (new Set(arr).size !== arr.length) throw new Error(`중복 카드: ${what} ${arr.join(' | ')}`); return arr; };
const wrongMixed = (x, y) => (x.length === 3 && y.length === 3 ? `${x[0] + y[0]} ${x[1] + y[1]}/${x[2] + y[2]}` : wrongSum(x, y));
const OPS = (o) => (o === '-' ? '−' : '+');
// 수직선: 식의 값을 점으로 놓는다(식 글은 prompt 에 직접 쓰고 점은 계산해서 넣는다). 값의 분모는 den 의 약수여야 한다
const nlOp = (prompt, x, y, o, max, den, d, ex) => {
  const r = calc(x, y, o); const g = gcd(r[0], r[1]);
  if (den % (r[1] / g) !== 0 || r[0] / r[1] > max) throw new Error(`수직선에 안 놓임: ${P(x)} ${o} ${P(y)}`);
  const val = mixedStr(r); const proper = r[0] < r[1];
  return nl(prompt, max, den, [val], d,
    ['눈금 한 칸이 얼마인지 먼저 살피고, 식을 통분해 계산한 값이 어디쯤인지 짐작해요.', proper ? '값이 1보다 작은지 큰지 먼저 어림하고, 0에서 몇 칸째인지 세어요.' : '값이 1보다 큰지 어림하고, 자연수 눈금에서 몇 칸 더 가는지 세어요.', `통분해 계산하면 ${r[0] / g}/${r[1] / g}${r[0] >= r[1] ? `, 대분수로는 ${val}` : ''}이에요. 그 자리에 점을 놓아요.`], ex, mixed(r));
};
const mixed = (r) => r[0] >= r[1];
// 띠 쓰기(fraction write): 합은 칠한 조각 수를 분수로 쓴다. 처음 분수는 잠긴 조각
const FRW = { easy: { shape: 'strip', write: true, showTerms: true }, base: { shape: 'strip', write: true }, challenge: { shape: 'strip', write: true } };
const stripWriteAdd = (x, y, d, ex) => {
  const [a, b] = x; const [c, e] = y; const Lc = lcm(b, e); const p = (a * Lc) / b; const q = (c * Lc) / e;
  return Object.assign({ prompt: `${P(x)} + ${P(y)}의 합이 칠해져 있어요. 분수로 써 보세요.`, toolOptions: { startN: Lc, min: Lc, max: Lc, locked: range(p) }, state: { n: Lc, colored: range(p + q) }, target: { den: Lc, num: p + q }, difficulty: d,
    hints: ['띠를 똑같이 나눈 조각 수가 분모, 칠한 조각 수가 분자예요.', '점무늬로 잠긴 조각까지 모두 포함해 칠한 조각을 세어 보세요.', `띠는 ${Lc}조각이고 칠한 조각은 ${p + q}개이므로 ${Lc}분의 ${p + q}예요.`] }, ex || {});
};
const stripWriteSub = (x, y, d, ex) => {
  const [a, b] = x; const [c, e] = y; const Lc = lcm(b, e); const p = (a * Lc) / b; const q = (c * Lc) / e;
  return Object.assign({ prompt: `${P(x)} − ${P(y)}의 차가 칠해져 있어요. 분수로 써 보세요.`, toolOptions: { startN: Lc, min: Lc, max: Lc }, state: { n: Lc, colored: range(p - q) }, target: { den: Lc, num: p - q }, difficulty: d,
    hints: ['띠를 똑같이 나눈 조각 수가 분모, 칠한 조각 수가 분자예요.', '칠해진 조각만 세고 칠하지 않은 조각은 세지 않아요.', `띠는 ${Lc}조각이고 칠한 조각은 ${p - q}개이므로 ${Lc}분의 ${p - q}예요.`] }, ex || {});
};
// 그림의 각 부분 ↔ 식의 수 이어 보기
const partsMatch = (prompt, x, y, o, d, ex) => {
  const [a, b] = x; const [c, e] = y; const Lc = lcm(b, e); const p = (a * Lc) / b; const q = (c * Lc) / e; const r = o === '-' ? p - q : p + q;
  const plus = o !== '-';
  return match(prompt, [['띠 전체를 나눈 조각 수', `${Lc}`], [`처음 분수 ${P(x)}의 조각`, `${p}/${Lc}`], [`${plus ? '더하는' : '빼는'} 분수 ${P(y)}의 조각`, `${q}/${Lc}`], [`${plus ? '합' : '남은 양'}의 조각`, `${r}/${Lc}`]], [], d,
    ['먼저 띠 전체가 몇 조각으로 나누어졌는지 보고, 그 수를 분모로 써요.', '처음 분수와 더하거나 빼는 분수를 각각 같은 크기 조각의 수로 바꾸어 봐요.', `통분하면 ${P(x)}는 ${p}/${Lc}, ${P(y)}는 ${q}/${Lc}이고 ${plus ? '합' : '차'}은 ${r}/${Lc}이에요.`], ex);
};
// 약분: 계산 결과(통분한 채)를 기약분수로
const redItem = (x, y, o, d, ex) => {
  const r = calc(x, y, o);
  return Object.assign({ prompt: `${P(x)} ${OPS(o)} ${P(y)} = ${r[0]}/${r[1]}이에요. 기약분수로 나타내세요.`, toolOptions: { top: r }, target: { reduce: r, lowest: true }, difficulty: d }, ex || {});
};
// 대분수 덧셈 빈칸: 자연수끼리, 분수끼리 더한다(받아올림 없음)
const mixedFill = (prompt, x, y, d, hints, x2) => {
  const f = calc([x[1], x[2]], [y[1], y[2]], '+'); if (f[0] >= f[1]) throw new Error('받아올림');
  const t3 = ans(x, y, '+');
  return fill(prompt, [[`${P(x)} + ${P(y)}에서 자연수끼리 더하면 ___`, String(x[0] + y[0])], [`분수끼리 통분해 더하면 ___`, mixedStr(f)], ['그래서 합은 ___', t3]], [wrongMixed(x, y)], d, hints, x2);
};
// 받아내림 빈칸: x 의 분수가 y 의 분수보다 작을 때
const borrowFill = (prompt, x, y, d, hints, x2) => {
  const Lc = lcm(x[2], y[2]); const xn = (x[1] * Lc) / x[2]; const yn = (y[1] * Lc) / y[2]; if (xn >= yn) throw new Error('받아내림 없음');
  return fill(prompt, [[`${P(y)}의 분수 부분을 분모 ${Lc}로 통분하면 ___`, `${yn}/${Lc}`], [`자연수 ${x[0]}에서 1을 받아내려 분수 부분 ${xn}/${Lc}와 합치면 ___`, `${Lc + xn}/${Lc}`], ['차를 기약분수·대분수로 쓰면 ___', ans(x, y, '-')]], [`${xn}/${Lc}`], d, hints, x2);
};
const L = [];

// ───────────────────────────── 1차시 (intro · concept) ─────────────────────────────
L.push(lesson(1, {
  title: '조각 크기가 다른 두 분수를 한 띠에서 합쳐 보기',
  objective: '분모가 다른 두 분수는 한 조각의 크기가 달라 분모끼리, 분자끼리 그냥 더할 수 없음을 알고, 같은 크기 조각으로 나눈 띠에서 합을 구할 수 있다.',
  desc: 'two long paper strips on a picnic table, one cut into two big halves and the other cut into four small quarters, with a child laying the pieces side by side', text: '조각 크기가 달라요',
  layers: [{ motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 226 }, { motif: 'bird', x: 250, y: 80 }],
  intro: ['"피자 1/2판과 1/4판을 먹었어요. 모두 몇 판 먹었을까요?" 먼저 어림해 보게 한 뒤 "2/6판이요"처럼 분모끼리, 분자끼리 더한 대답이 나오면 지우지 말고 칠판에 적어 둔다. 1/2 조각과 1/4 조각을 겹쳐 보여 주며 "두 조각의 크기가 같은가요?"라고 묻고, 이 시간 끝에 그 답을 다시 확인하겠다고 말한다.',
    '1/2판 조각과 1/4판 조각은 크기가 같을까요? 크기가 다른 두 조각을 어떻게 더할 수 있을지 짝에게 말해 봐요.'],
  demo: { tool: 'fraction', options: { shape: 'strip', startN: 4, min: 4, max: 4, locked: [0, 1], color: 'mint' }, sequence: [{ den: 4, num: 3 }] },
  acts: [
    act('a1', '활동 1. 조각 크기를 맞춘 띠에서 합 구하기', 'fraction', '띠는 두 분수의 한 조각 크기가 같아지도록 이미 똑같이 나누어져 있어요. 복숭아색이 처음 분수이니 더하는 분수만큼 더 색칠해 합을 구해요.',
      '"1/2은 4조각 가운데 몇 조각일까요?" 1/2을 같은 크기의 작은 조각으로 바꾸어 센다고 말하게 한다. 합을 2/6이라고 답하는 학생에게는 "6조각으로 나눈 띠가 어디 있나요?" 하고 띠의 조각 수를 직접 세어 보게 한다.',
      FR, [
        stripAdd([1, 2], [1, 4], 0.1, { predict: { q: '1/2 + 1/4는 얼마일까요?', options: ['2/6', '3/4', '잘 모르겠어요'], answer: 1 }, conclude: '1/2은 4조각 중 2조각이라서 1조각을 더하면 4분의 3이에요.' }),
        stripAdd([2, 3], [1, 6], 0.15),
        stripAdd([1, 2], [1, 8], 0.18, { conclude: '8조각 띠에서 1/2은 4조각이에요. 4조각에 1조각을 더하면 8분의 5예요.' }),
        stripAdd([3, 4], [1, 8], 0.24, { extra: true }),
      ]),
    act('a2', '활동 2. 바로 더할 수 있을까?', 'mindmap', '조각의 크기가 같을 때만 분자끼리 더할 수 있어요. 식을 보고 분모가 같은지 확인해요.',
      '"2/7 + 3/7은 바로 더할 수 있고 1/2 + 1/3은 왜 바로 더할 수 없을까요?" 분모가 같으면 조각 크기가 같다는 말이 나오게 한다. 1/2 + 1/3처럼 분모가 다른 식도 분자끼리 더하는 학생에게는 두 조각을 겹쳐 크기를 견주게 한다.',
      ML('sort', '더하기 전에'), [
        srt('식을 바로 더할 수 있는 것과 먼저 조각 크기를 맞춰야 하는 것으로 나누어 보세요.', '더하기 전에', { '바로 더해요': ['2/7 + 3/7', '4/9 + 2/9', '1/8 + 5/8'], '조각 크기부터 맞춰요': ['1/2 + 1/3', '3/4 + 1/6', '2/5 + 1/10'] }, 0.14,
          ['두 분수의 분모가 같은지 먼저 살펴보세요.', '분모는 한 조각의 크기를 알려 줘요. 분모가 다르면 조각 크기도 달라요.', '분모가 같은 식은 분자끼리 더하고, 분모가 다른 식은 먼저 같은 크기 조각으로 바꾸어야 해요.']),
        pick('1/2 + 1/4를 계산하기 전에 알맞은 일을 모두 골라 보세요.', '알맞은 일', [['두 분수의 한 조각 크기를 같게 맞춰요', 1], ['분모끼리 더해서 새 분모를 만들어요', 0], ['1/2을 2/4로 바꾸어 생각해요', 1], ['분자끼리만 먼저 더해요', 0]], 0.18,
          ['더하는 두 조각의 크기가 같은지를 생각해요.', '1/2과 크기가 같으면서 분모가 4인 분수를 찾아봐요.', '조각 크기를 같게 맞추려고 1/2을 2/4로 바꾸는 것이 알맞아요. 분모끼리 더하면 조각 크기가 달라져요.'],
          { conclude: '더하기 전에 두 분수의 한 조각 크기를 같게 맞추어요.' }),
        fill('빈칸에 알맞은 말을 놓아 보세요.', [['1/2 조각과 1/4 조각은 크기가 ___', '달라요'], ['더하려면 조각의 크기를 ___ 만들어요', '같게'], ['크기가 같은 조각이 되면 ___끼리 더해요', '분자']], ['분모'], 0.22,
          ['첫 빈칸은 두 조각을 겹쳐 보았을 때의 모습이에요.', '크기가 같아야 개수를 더할 수 있어요.', '분모가 같아진 뒤에는 분모는 그대로 두고 분자끼리 더해요.']),
      ]),
    act('a3', '활동 3. 틀린 계산 찾아 고치기', 'mindmap', '분모끼리, 분자끼리 더한 계산은 왜 틀렸는지 생각하고 바르게 계산한 식을 찾아요.',
      '"1/3 + 1/4 = 2/7이라고 계산한 친구가 있어요. 2/7은 1/3보다 클까요, 작을까요?" 합이 더한 분수보다 작아지면 말이 안 된다는 것을 어림으로 말하게 한다. 분모끼리 더하는 학생에게는 1/3과 1/4 조각을 겹쳐 놓고 조각이 7개로 나뉘지 않음을 보여 준다.',
      ML('sort', '맞게 계산했나요'), [
        srt('맞게 계산한 식과 틀리게 계산한 식으로 나누어 보세요.', '맞게 계산했나요', { '맞아요': ['1/2 + 1/4 = 3/4', '1/3 + 1/6 = 3/6', '2/3 + 1/6 = 5/6'], '틀렸어요': ['1/2 + 1/3 = 2/5', '1/4 + 1/8 = 2/12', '2/5 + 1/10 = 3/15'] }, 0.2,
          ['식의 오른쪽 분모가 두 분모를 더한 수인지 살펴보세요.', '합의 분모가 두 분모를 더한 수로 나오면 조각 크기를 맞추지 않은 계산이에요.', '같은 크기 조각으로 바꾼 뒤 더한 식이 맞아요. 분모끼리 더한 식은 틀려요.']),
        pick('1/3 + 1/4 = 2/7이 틀린 까닭으로 알맞은 카드를 모두 골라 보세요.', '틀린 까닭', [['합 2/7이 더하는 분수 1/3보다도 작아요', 1], ['1/3과 1/4은 한 조각의 크기가 달라요', 1], ['분자끼리 더하는 것은 언제나 틀려요', 0], ['분모를 7로 만들면 조각 수가 맞아요', 0]], 0.24,
          ['합이 더하는 분수보다 작아도 되는지 생각해요.', '합이 처음 분수보다 작아지는 계산은 말이 되지 않아요. 두 조각의 크기도 견주어 보세요.', '분모가 다른 두 조각은 크기가 달라서 분모끼리 더할 수 없고, 합이 더하는 분수보다 작아지는 것도 이상해요.']),
        stepFill('1/4 + 1/8을 통분해서 더하는 과정을 빈칸에 채워 보세요.', [1, 4], [1, 8], '+', 0.26,
          ['먼저 분모를 같게 만드는 일을 해요.', '크기가 같은 분수로 바꾸고 분모는 그대로 둔 채 분자끼리 더해요.', '1/4은 2/8, 1/8은 1/8이라서 합은 3/8이에요.']),
      ]),
  ],
  wrap: ['"1/2 + 1/4를 2/6이라고 하지 않고 3/4이라고 해야 하는 까닭을 띠로 말해 볼까요?" 크기가 같은 조각으로 바꾼 뒤 조각의 개수를 더했다고 짝에게 말하게 한다. 출구 3번을 틀린 학생은 분모의 뜻이 한 조각의 크기임을 다음 시간 첫머리에 띠로 다시 보여 준다.',
    [{ type: 'tool', tool: 'fraction', options: { shape: 'strip', startN: 12, min: 12, max: 12, locked: [0, 1, 2, 3] }, state: { n: 12 }, prompt: '1/3 + 1/12의 합을 12조각 띠에 색칠해 보세요.', target: { den: 12, num: 5 }, difficulty: 0.2 },
      { type: 'choice', prompt: '1/2 + 1/4를 계산하기 전에 먼저 해야 할 일은 무엇인가요?', options: ['한 조각의 크기를 같게 맞춰요', '분모끼리 더해요', '분자끼리 더해요'], answer: 0, difficulty: 0.12, explain: '분모가 다르면 조각 크기가 달라요. 먼저 크기를 같게 맞춘 뒤에 더해요.' },
      { type: 'choice', prompt: '1/3 + 1/4 = 2/7이라고 계산한 것에 대해 알맞게 말한 것은 무엇인가요?', options: ['조각 크기가 달라서 이렇게 더하면 안 돼요', '분모끼리 더하는 것은 언제나 맞아요', '합이 더하는 분수보다 작아도 괜찮아요'], answer: 0, difficulty: 0.18, explain: '1/3과 1/4은 한 조각의 크기가 달라서 분모끼리 더할 수 없어요. 합 2/7은 1/3보다도 작아서 말이 안 돼요.' }]],
  ws: {
    title: '조각 크기가 다른 분수의 합',
    items: [
      { type: 'figure', prompt: '그림을 보고 덧셈식을 완성하세요. 점무늬는 처음 분수, 빗금은 더한 분수예요.', tool: 'fraction', options: { shape: 'strip', frame: true, locked: [0, 1] }, figures: [
        { state: { n: 4, colored: [0, 1, 2] }, caption: '1/2 + 1/4 = (     )' }], answer: '3/4' },
      { type: 'table', prompt: '분모가 같으면 ○, 다르면 ×를 쓰세요.', columns: ['식', '분모가 같은가요?'], cells: [['2/7 + 3/7', ''], ['1/2 + 1/3', ''], ['3/8 + 1/8', ''], ['1/4 + 1/6', '']], answer: '○, ×, ○, ×' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1/2은 2/4와 크기가 같아요. 1/2 + 1/4 = ___/4 + 1/4 = ___/4', answer: '2, 3' },
      { type: 'choice', prompt: '민지는 "1/2 + 1/4 = 2/6"이라고 계산했어요. 바르게 고친 답에 ○ 하세요.', options: ['2/6', '3/4', '2/4'], answer: '3/4' },
      { type: 'short', prompt: '민지의 계산이 왜 틀렸는지 조각의 크기를 넣어 써 보세요.', answer: '1/2 조각과 1/4 조각은 크기가 달라서 분모끼리, 분자끼리 더할 수 없다. 1/2을 2/4로 바꾸어 3/4이다.' },
    ],
    easy: { note: '분모가 같을 때만 분자끼리 더해요. 분모가 다르면 먼저 크기가 같은 분수로 바꾸어요.', items: [
      { type: 'table', prompt: '식의 분모를 보고 ○ 또는 ×를 쓰세요.', columns: ['식', '바로 더할 수 있나요?'], cells: [['3/5 + 1/5', ''], ['1/2 + 1/5', ''], ['2/9 + 4/9', '']], answer: '○, ×, ○' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1/2 = ___/4 이므로 1/2 + 1/4 = ___/4', answer: '2, 3' },
      { type: 'choice', prompt: '더하기 전에 같게 맞추는 것은 무엇인가요?', options: ['조각의 크기(분모)', '분자의 크기'], answer: '조각의 크기(분모)' },
      { type: 'draw', prompt: '종이띠를 4칸으로 나누어 1/2과 1/4를 두 가지 색으로 칠하고 합을 써 보세요.' },
    ] },
  },
  diff: {
    easy: '띠 옆에 분자·분모의 뜻이 글로 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
    base: '분수 읽기 칸이 그대로 보이고, 식을 보고 분모가 같은지 스스로 가려요.',
    challenge: '띠 옆의 분수 읽기 칸이 숨겨져 조각 수를 직접 세고, 통분해서 더하는 과정을 빈칸으로 채워요.',
  },
  notes: '자주 보이는 어려움: ① 분모끼리, 분자끼리 더한다(1/3 + 1/4 = 2/7) → 분모는 한 조각의 크기를 알려 주므로 크기가 다른 조각의 개수를 그대로 더할 수 없다고 띠로 보인다. ② 합이 처음 분수보다 작아져도 이상하게 여기지 않는다 → "더했는데 더 작아져도 되나요?" 하고 어림으로 확인한다. ③ 1/2과 2/4가 같다는 것을 믿지 못한다 → 띠를 겹쳐 본다. 크기가 같은 분수를 만드는 방법은 2차시, 통분해서 더하는 계산은 3차시로 이어진다.',
}));

// ───────────────────────────── 2차시 (practice · concept) ─────────────────────────────
L.push(lesson(2, {
  title: '크기가 같은 분수로 바꾸어 분모를 같게 맞추기',
  objective: '두 분모의 공배수를 찾아 크기가 같은 분수로 바꾸어 분모를 같게 만드는 통분을 할 수 있다.',
  desc: 'two paper strips with different cut lines laid over one long cream ruler strip so that the cut lines meet at shared marks', text: '분모를 맞춰요',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'leaf', x: 360, y: 214, color: 'mint' }, { motif: 'flower', x: 250, y: 228 }],
  intro: ['"1/2 조각과 1/3 조각이 있어요. 두 조각을 모두 똑같이 잘게 나누어 크기를 같게 만들려면 한 조각을 몇 개로 나누면 좋을까요?" 2로도 나누어지고 3으로도 나누어지는 수를 찾는다고 말하게 한다. "6이요", "12요" 같은 대답을 모두 받아 적고 어느 수든 같은 크기로 만들 수 있다는 것을 활동에서 직접 해 본다.',
    '1/2을 똑같이 더 잘게 나누면 1/4, 1/6처럼 바꿀 수 있어요. 1/3도 그렇게 바꿀 수 있을까요?'],
  demo: { tool: 'fracstrips', options: { top: [1, 2], showEqual: true }, sequence: [{ equalTo: [1, 2], den: 6 }] },
  acts: [
    act('a1', '활동 1. 위 띠와 크기가 같은 분수 만들기', 'fracstrips', '아래 띠의 조각 수를 바꾸고 조각을 눌러 색칠해요. 색칠한 끝이 위 띠와 같은 자리에서 끝나면 두 분수의 크기가 같아요.',
      '"분모가 3에서 12가 되었어요. 분모에 무엇을 곱했나요?" 분모에 곱한 수를 분자에도 똑같이 곱한다고 말하게 한다. 분모만 바꾸고 분자를 그대로 두는 학생에게는 색칠한 끝이 어긋난 것을 짚어 보게 한다.',
      FS, [
        fsEq([1, 3], 12, 0.12, { predict: { q: '1/3과 크기가 같은 12조각 띠에는 몇 조각을 칠할까요?', options: ['1조각', '3조각', '4조각'], answer: 2 }, conclude: '분모와 분자에 똑같이 4를 곱하면 1/3 = 4/12예요.' }),
        fsEq([3, 4], 12, 0.14, { reveal: 'after-check' }),
        fsEq([2, 5], 10, 0.14, { reveal: 'after-check' }),
        fsEq([5, 6], 12, 0.22, { extra: true, reveal: 'after-check' }),
      ]),
    act('a2', '활동 2. 공통분모가 될 수 있는 수 찾기', 'mindmap', '두 분모의 공배수를 공통분모로 쓸 수 있어요. 두 분모가 모두 약수인 수를 찾아요.',
      '"4와 6 모두로 나누어떨어지는 수에는 무엇이 있나요?" 4의 배수와 6의 배수를 차례로 적어 겹치는 수를 찾게 한다. 8이나 18처럼 한쪽의 배수만 고르는 학생에게는 8 ÷ 6을 직접 계산해 나누어떨어지는지 확인하게 한다.',
      ML('pick', '공통분모'), [
        pick('1/4과 1/6의 공통분모가 될 수 있는 수를 모두 골라 보세요.', '공통분모', [['8', 0], ['12', 1], ['18', 0], ['24', 1]], 0.15,
          ['공통분모는 두 분모로 모두 나누어떨어지는 수예요.', '각 수를 두 분모로 나누어 나머지가 없는지 확인해요.', '12와 24는 두 분모로 모두 나누어떨어지고, 8은 한 분모로만, 18도 한 분모로만 나누어떨어져요.'],
          { conclude: '공통분모는 두 분모의 공배수예요.' }),
        pick('1/3과 1/5의 공통분모가 될 수 있는 수를 모두 골라 보세요.', '공통분모', [['10', 0], ['15', 1], ['25', 0], ['30', 1]], 0.2,
          ['두 분모의 배수 가운데 겹치는 수를 찾아요.', '3의 배수와 5의 배수에 모두 들어 있는 수를 찾아봐요.', '15와 30은 3의 배수이면서 5의 배수예요.']),
        match('두 분수의 가장 작은 공통분모를 이어 보세요.', [['1/2과 1/5', '10'], ['1/4과 1/6', '12'], ['1/3과 1/8', '24']], ['20', '16'], 0.26,
          ['두 분모의 배수를 작은 수부터 적어 처음 겹치는 수를 찾아요.', '한 분모의 배수 가운데 다른 분모로도 나누어떨어지는 가장 작은 수를 찾아요.', '2와 5는 10, 4와 6은 12, 3과 8은 24가 처음 겹쳐요.']),
      ]),
    act('a3', '활동 3. 통분한 모양 이어 보기', 'mindmap', '분모를 같게 만드는 것을 통분한다고 해요. 두 분수를 같은 크기 조각으로 바꾼 모양을 이어 보아요.',
      '"1/2과 1/3을 통분하면 3/6과 2/6이 되어요. 분모 6은 어떻게 찾았나요?" 2와 3의 공배수에서 찾았다고 말하게 한다. 분모만 같게 하고 분자는 그대로 두는 학생에게는 크기가 같은 분수 만들기를 다시 떠올리게 한다.',
      ML('match', '통분하기'), [
        match('두 분수를 통분한 모양을 이어 보세요.', [['1/2과 1/3', tong([1, 2], [1, 3])], ['1/4과 1/6', tong([1, 4], [1, 6])], ['2/3과 3/4', tong([2, 3], [3, 4])]], ['2/6, 3/6', '2/12, 3/12'], 0.18,
          ['통분은 두 분수의 분모를 같게 만드는 일이에요.', '공통분모를 찾은 뒤 각 분수의 분모에 곱한 수를 분자에도 곱해요.', '1/2과 1/3은 6, 1/4과 1/6은 12, 2/3과 3/4은 12를 공통분모로 써요.']),
        match('두 분수를 통분한 모양을 이어 보세요. 분모가 2, 5, 8처럼 달라요.', [['1/2과 3/5', tong([1, 2], [3, 5])], ['3/4과 1/8', tong([3, 4], [1, 8])], ['5/6과 3/8', tong([5, 6], [3, 8])]], ['4/10, 5/10'], 0.24,
          ['공통분모를 먼저 찾고 각 분수에 곱한 수를 분모와 분자에 똑같이 곱해요.', '1/2과 3/5의 분모 2와 5로 모두 나누어떨어지는 수가 공통분모예요.', '10, 8, 24를 공통분모로 써서 분자도 같은 수를 곱해 바꾸어요.']),
        match('두 분수를 통분한 모양을 이어 보세요. 분모가 큰 분수도 있어요.', [['1/6과 2/9', tong([1, 6], [2, 9])], ['3/10과 1/4', tong([3, 10], [1, 4])], ['2/3과 1/12', tong([2, 3], [1, 12])]], ['3/18, 4/18'], 0.3,
          ['분모 하나가 다른 분모의 배수인지 먼저 살펴요.', '분모 3과 12는 12가 3의 배수이므로 12를 공통분모로 쓰기 좋아요.', '6과 9는 18, 10과 4는 20, 3과 12는 12를 공통분모로 써요.'], { extra: true }),
      ]),
  ],
  wrap: ['"두 분수의 분모를 같게 만드는 것을 무엇이라고 하나요? 공통분모는 어떤 수예요?" 통분과 공배수 두 낱말을 짝에게 설명하게 한다. 출구 3번을 틀린 학생은 공통분모를 두 분모의 곱으로만 알고 있는지 살피고, 작은 공통분모도 가능함을 다음 시간에 보여 준다.',
    [{ type: 'tool', tool: 'fracstrips', options: { top: [3, 5], revealAfterCheck: true }, prompt: '아래 띠를 10조각으로 나누어 3/5과 크기가 같은 분수를 만드세요.', target: { equalTo: [3, 5], den: 10 }, difficulty: 0.16, explain: '분모 5에 2를 곱하면 10이 되니 분자 3에도 2를 곱해 6/10이에요.' },
      { type: 'choice', prompt: '1/2과 1/3을 통분할 때 공통분모로 알맞은 수는 무엇인가요?', options: ['5', '6', '4'], answer: 1, difficulty: 0.14, explain: '2와 3으로 모두 나누어떨어지는 수는 6이에요. 5와 4는 2와 3 가운데 하나로만 나누어떨어져요.' },
      { type: 'choice', prompt: '3과 4의 공배수가 아닌 수는 무엇인가요?', options: ['12', '24', '16'], answer: 2, difficulty: 0.2, explain: '16 ÷ 3은 나누어떨어지지 않아요. 12와 24는 3과 4로 모두 나누어떨어져요.' }]],
  ws: {
    title: '크기가 같은 분수와 통분',
    items: [
      { type: 'figure', prompt: '위 띠와 크기가 같도록 아래 띠에 색칠하고, □에 알맞은 수를 쓰세요.', tool: 'fracstrips', figures: [
        { options: { top: [1, 3], start: { den: 6 } }, caption: '1/3 = □/6' },
        { options: { top: [3, 4], start: { den: 8 } }, caption: '3/4 = □/8' }], answer: '1/3 = 2/6, 3/4 = 6/8' },
      { type: 'table', prompt: '두 분수의 공통분모가 될 수 있는 수에 ○ 하세요.', columns: ['두 분수', '8', '12', '15'], cells: [['1/4과 1/6', '', '', ''], ['1/3과 1/5', '', '', '']], answer: '1/4과 1/6: 12에 ○, 1/3과 1/5: 15에 ○' },
      { type: 'blank', prompt: '두 분수를 통분해서 빈칸에 알맞은 수를 쓰세요.', text: '1/2과 1/3 → ___/6과 ___/6', answer: '3, 2' },
      { type: 'choice', prompt: '5/6과 3/8을 통분할 때 공통분모로 알맞은 수에 ○ 하세요.', options: ['14', '24', '30'], answer: '24' },
      { type: 'short', prompt: '1/4과 1/6을 통분할 때 12를 공통분모로 쓸 수 있는 까닭을 써 보세요.', answer: '12는 4와 6으로 모두 나누어떨어지는 두 수의 공배수이기 때문이다.' },
    ],
    easy: { note: '분모에 곱한 수를 분자에도 똑같이 곱해요. 예: 1/2 = (1×3)/(2×3) = 3/6', items: [
      { type: 'figure', prompt: '위 띠의 점선을 따라 아래 띠에 색칠하고, □에 알맞은 수를 쓰세요.', tool: 'fracstrips', figures: [
        { options: { top: [1, 2], start: { den: 6 }, showMarks: true }, caption: '1/2 = □/6' },
        { options: { top: [2, 3], start: { den: 6 }, showMarks: true }, caption: '2/3 = □/6' }], answer: '1/2 = 3/6, 2/3 = 4/6' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1/3 = (1×4)/(3×4) = ___/12', answer: '4' },
      { type: 'choice', prompt: '2와 5의 공배수에 ○ 하세요.', options: ['10', '12'], answer: '10' },
      { type: 'draw', prompt: '종이띠를 6칸으로 나누어 1/2과 같은 크기만큼 칠하고 분수로 써 보세요.' },
    ] },
  },
  diff: {
    easy: '위 띠의 자른 금이 아래 띠까지 점선으로 이어지고, 색칠한 끝이 맞으면 "크기가 같아요" 선이 보여요.',
    base: '점선 없이 위 띠와 아래 띠의 끝을 맞추고, 공통분모를 스스로 찾아요.',
    challenge: '위 띠의 자른 금이 보이지 않고, 분모가 큰 분수(1/6과 2/9, 5/6과 3/8)도 통분해요.',
  },
  notes: '자주 보이는 어려움: ① 분모만 바꾸고 분자는 그대로 둔다(1/3 → 1/12) → 색칠한 끝이 위 띠와 맞지 않음을 짚는다. ② 공통분모가 반드시 두 분모의 곱이어야 한다고 생각한다 → 4와 6은 24가 아니라 12로도 통분된다고 보여 준다(어느 공배수든 되지만 작은 수가 계산이 쉽다). ③ 공배수와 약수를 헷갈린다 → 두 분모로 나누어떨어지는 수를 찾는다고 말한다. 크기가 같은 분수 만들기와 약분은 4학년 2학기와 이 학년 앞 단원에서 배운 내용을 떠올리게 하면 좋다. 통분한 뒤 더하는 계산은 3차시에서 한다.',
}));

// ───────────────────────────── 3차시 (extend · concept) ─────────────────────────────
L.push(lesson(3, {
  title: '통분한 뒤 분자끼리 더해 합이 1보다 작은 덧셈 하기',
  objective: '분모가 다른 진분수의 합이 1보다 작을 때 통분한 뒤 분자끼리 더해 합을 구하고, 그 까닭을 설명할 수 있다.',
  desc: 'a child pouring juice from two measuring cups of different sizes into one big glass marked with equal paper-cut lines', text: '통분하고 더해요',
  layers: [{ motif: 'tree', x: 100, y: 216 }, { motif: 'flower', x: 360, y: 228 }, { motif: 'bird', x: 250, y: 80 }],
  intro: ['"주스 1/3 L와 1/4 L를 한 컵에 따랐어요. 모두 몇 L일까요?" 지난 시간에 배운 통분으로 계산할 수 있을지 묻고 어떤 수를 공통분모로 쓸지 물어본다. 3과 4의 공배수 12를 말하게 하고 "12조각 띠에서 1/3은 몇 조각일까요?"로 활동 1과 이어 간다.',
    '1/3과 1/4을 같은 크기 조각으로 바꾸면 어떻게 될까요? 어떤 수를 공통분모로 쓰면 좋을지 이야기해 봐요.'],
  demo: { tool: 'fraction', options: { shape: 'strip', startN: 12, min: 12, max: 12, locked: [0, 1, 2, 3], color: 'mint' }, sequence: [{ den: 12, num: 7 }] },
  acts: [
    act('a1', '활동 1. 통분한 띠에서 합 구하기', 'fraction', '복숭아색이 처음 분수예요. 띠는 공통분모로 나누어져 있어요. 더하는 분수만큼 더 색칠해 합을 구해요.',
      '"1/3 + 1/4에서 1/3은 12조각 중 몇 조각, 1/4은 몇 조각일까요?" 통분한 분수의 분자를 말하게 한 뒤 합의 분자는 4 + 3이라고 정리한다. 합을 2/7이라고 쓰는 학생에게는 띠의 조각 수가 12임을 다시 세게 한다.',
      FR, [
        stripAdd([1, 3], [1, 4], 0.14, { predict: { q: '1/3 + 1/4의 합은 얼마일까요?', options: ['2/7', '7/12', '잘 모르겠어요'], answer: 1 }, conclude: '12조각 중 1/3은 4조각, 1/4은 3조각이라서 합은 12분의 7이에요.' }),
        stripAdd([1, 4], [1, 6], 0.16),
        stripAdd([2, 5], [1, 2], 0.18),
        stripAdd([1, 6], [3, 4], 0.26, { extra: true }),
      ]),
    act('a2', '활동 2. 식과 답 이어 보기', 'mindmap', '통분해서 더한 값을 식과 이어 보아요. 분모끼리 더한 틀린 답도 섞여 있어요.',
      '"1/2 + 1/3을 계산할 때 공통분모로 무엇을 써야 하나요?" 6으로 통분하면 3/6 + 2/6이 된다고 말하게 한다. 합을 2/5로 쓰는 학생에게는 합 2/5가 1/2보다 작은지 어림해 보게 한다.',
      ML('match', '식과 답'), [
        calcMatch('식과 알맞은 합을 이어 보세요. 분모가 작은 식부터예요.', [[[1, 2], '+', [1, 3]], [[1, 4], '+', [1, 6]], [[2, 5], '+', [1, 2]]], 0.18,
          ['먼저 두 분수의 분모를 같게 통분해요.', '통분한 뒤 분모는 그대로 두고 분자끼리 더해요.', '1/2 + 1/3은 6, 1/4 + 1/6은 12, 2/5 + 1/2은 10을 공통분모로 써서 계산해요.']),
        calcMatch('식과 알맞은 합을 이어 보세요. 분모가 4, 5처럼 커져요.', [[[3, 4], '+', [1, 5]], [[1, 3], '+', [2, 5]], [[2, 9], '+', [1, 2]]], 0.24,
          ['각 식의 두 분모로 모두 나누어떨어지는 수를 공통분모로 찾아요.', '통분하면 분모가 같아지니 분자끼리만 더하면 돼요.', '3/4 + 1/5는 20, 1/3 + 2/5는 15, 2/9 + 1/2은 18을 공통분모로 써서 계산해요.']),
        calcMatch('식과 알맞은 합을 이어 보세요. 합을 어림하며 이어요.', [[[1, 2], '+', [3, 8]], [[1, 6], '+', [3, 4]], [[3, 5], '+', [1, 4]]], 0.28,
          ['합이 1보다 작은지 어림하면서 통분해요.', '각 식에서 공통분모를 정하고 분자를 같은 수만큼 곱해 바꾸어 더해요.', '1/2 + 3/8은 8, 1/6 + 3/4는 12, 3/5 + 1/4는 20을 공통분모로 써요.'], { extra: true }),
      ]),
    act('a3', '활동 3. 계산 과정 빈칸 채우기', 'mindmap', '통분한 분수와 합을 차례로 빈칸에 놓으며 계산 과정을 말해요.',
      '"먼저 무엇을 하고 그다음에 무엇을 했나요?" 통분, 분자끼리 더하기 순서로 말하게 한다. 합의 분모를 두 분모의 합으로 쓰는 학생에게는 통분한 뒤 분모는 그대로라는 점을 띠로 보인다.',
      ML('fill', '계산 과정'), [
        stepFill('3/4 + 1/6의 계산 과정을 빈칸에 놓아 보세요.', [3, 4], [1, 6], '+', 0.2,
          ['통분한 뒤 각 분수를 크기가 같은 분수로 써요.', '분모를 같게 바꾼 분수에서 분자끼리 더해요.', '3/4은 9/12, 1/6은 2/12이고 합은 11/12예요.']),
        stepFill('2/5 + 1/4의 계산 과정을 빈칸에 놓아 보세요.', [2, 5], [1, 4], '+', 0.24,
          ['5와 4의 공배수를 공통분모로 정해요.', '분모와 분자에 같은 수를 곱해 크기가 같은 분수로 바꾸어요.', '2/5는 8/20, 1/4은 5/20이고 합은 13/20이에요.']),
        stepFill('1/6 + 3/8의 계산 과정을 빈칸에 놓아 보세요.', [1, 6], [3, 8], '+', 0.28,
          ['6과 8의 공배수 가운데 작은 수를 공통분모로 써요.', '각 분수를 공통분모에 맞게 바꾼 뒤 분자끼리 더해요.', '1/6은 4/24, 3/8은 9/24이고 합은 13/24예요.']),
      ]),
  ],
  wrap: ['"분모가 다른 분수를 더할 때 순서를 말해 볼까요?" 통분하기 → 분자끼리 더하기 → 답 확인하기 세 걸음을 짝에게 말하게 한다. 출구 3번을 틀린 학생은 통분한 뒤에도 분모를 더하는지 살펴 다음 시간에 띠로 다시 보여 준다.',
    [{ type: 'tool', tool: 'fraction', options: { shape: 'strip', startN: 10, min: 10, max: 10, locked: [0, 1, 2, 3, 4] }, state: { n: 10 }, prompt: '1/2 + 1/10의 합을 10조각 띠에 색칠해 보세요.', target: { den: 10, num: 6 }, difficulty: 0.2 },
      { type: 'choice', prompt: '1/2 + 1/5를 통분해서 바르게 계산한 것은 무엇인가요?', options: ['5/10 + 2/10 = 7/10', '1/7 + 1/7 = 2/7', '2/10 + 5/10 = 7/20'], answer: 0, difficulty: 0.18, explain: '2와 5의 공통분모 10으로 통분하면 5/10 + 2/10이고, 분모는 그대로 두고 분자끼리 더해 7/10이에요.' },
      { type: 'choice', prompt: '3/8 + 1/4에서 통분한 뒤의 분모는 무엇인가요?', options: ['8', '12', '32'], answer: 0, difficulty: 0.15, explain: '8은 4의 배수라서 8을 공통분모로 쓸 수 있어요. 1/4은 2/8이고 합은 5/8이에요.' }]],
  ws: {
    title: '통분해서 더하기(합이 1보다 작을 때)',
    items: [
      { type: 'table', prompt: '통분해서 더하는 과정을 완성하세요.', columns: ['식', '통분', '합'], cells: [['1/2 + 1/6', '3/6 + 1/6', ''], ['1/3 + 1/4', '4/12 + 3/12', ''], ['2/5 + 1/10', '', '']], answer: '4/6, 7/12, 4/10 + 1/10 = 5/10' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3/4 + 1/6 = ___/12 + ___/12 = ___/12', answer: '9, 2, 11' },
      { type: 'choice', prompt: '준호는 "1/3 + 1/6 = 2/9"라고 계산했어요. 바른 합에 ○ 하세요.', options: ['2/9', '3/6', '2/6'], answer: '3/6' },
      { type: 'blank', prompt: '물통에 물이 1/2 L 있었는데 1/5 L를 더 부었어요. 식과 답을 쓰세요.', text: '식: 1/2 + 1/5 = ___   답: ___ L', answer: '7/10, 7/10' },
      { type: 'short', prompt: '분모가 다른 분수를 더할 때 통분하는 까닭을 써 보세요.', answer: '분모가 다르면 한 조각의 크기가 달라서 더할 수 없으므로 같은 크기 조각으로 바꾸기 위해서이다.' },
    ],
    easy: { note: '통분하면 분모가 같아져요. 분모는 그대로 두고 분자끼리 더해요. 예: 1/2 + 1/4 = 2/4 + 1/4 = 3/4', items: [
      { type: 'table', prompt: '통분한 뒤 합을 쓰세요.', columns: ['식', '통분', '합'], cells: [['1/2 + 1/6', '3/6 + 1/6', ''], ['1/3 + 1/6', '2/6 + 1/6', '']], answer: '4/6, 3/6' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1/2 + 1/8 = ___/8 + 1/8 = ___/8', answer: '4, 5' },
      { type: 'choice', prompt: '통분한 뒤 더할 때 그대로 두는 것은 무엇인가요?', options: ['분모', '분자'], answer: '분모' },
      { type: 'draw', prompt: '종이띠를 6칸으로 나누어 1/2과 1/6을 두 가지 색으로 칠하고 합을 써 보세요.' },
    ] },
  },
  diff: {
    easy: '띠 옆에 분자·분모의 뜻이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
    base: '띠에서 분수 읽기가 보이고, 식과 합을 스스로 이어요.',
    challenge: '분수 읽기가 숨겨져 조각을 직접 세고, 분모가 큰 분수의 통분 과정도 빈칸으로 채워요.',
  },
  notes: '자주 보이는 어려움: ① 통분한 뒤에도 분모끼리 더한다(3/12 + 4/12 = 7/24) → 분모는 한 조각의 크기라서 더해도 그대로라고 짚는다. ② 한쪽 분수만 바꾸고 다른 분수는 그대로 둔다 → 두 분수 모두 공통분모로 바꾸는지 확인한다. ③ 합을 어림하지 않는다 → 1/2 + 1/3이 1/2보다 크고 1보다 작은지 먼저 어림한다. 합이 1보다 큰 덧셈은 4차시에서 이어서 다룬다. 약분은 8차시 계산 점검에서 다시 만난다.',
}));
// ───────────────────────────── 4차시 (extend · concept) ─────────────────────────────
L.push(lesson(4, {
  title: '합이 1보다 큰 두 분수를 더해 대분수로 나타내기',
  objective: '분모가 다른 두 진분수의 합이 1보다 클 때 통분해서 더한 뒤 가분수를 대분수로 바꾸어 나타낼 수 있다.',
  desc: 'two paper pitchers of different sizes pouring juice into one tall glass so that the juice rises above the line marked for one whole', text: '합이 1보다 커요',
  layers: [{ motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 80 }],
  intro: ['"주스 2/3 L와 3/4 L를 한 병에 합치면 1 L보다 많을까요, 적을까요?" 두 분수가 모두 1/2보다 크다는 점으로 어림해 보게 한 뒤 어림한 답을 칠판에 적어 둔다. "합이 17/12처럼 가분수로 나오면 어떻게 쓸까요?"라고 물어 대분수로 바꾸는 활동으로 이어 간다.',
    '2/3와 3/4를 더하면 1보다 클지 작을지 짝과 어림해 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 합을 수직선에 점으로 놓기', 'numberline', '통분해서 더한 값이 1보다 크면 점은 1의 오른쪽에 놓여요. 눈금 한 칸이 얼마인지 보고 합의 자리를 찾아요.',
      '"눈금 한 칸이 얼마를 나타내나요?" 1을 몇 칸으로 나누었는지 세어 분모를 정하게 한다. 합이 1보다 큰데 1보다 작은 곳에 놓는 학생에게는 두 분수를 먼저 어림해 보게 한다.',
      NL, [
        nlOp('3/4 + 5/8의 합을 수직선에 점으로 놓아 보세요.', [3, 4], [5, 8], '+', 2, 8, 0.2, { predict: { q: '3/4 + 5/8는 1보다 클까요?', options: ['1보다 커요', '1보다 작아요'], answer: 0 }, conclude: '3/4은 6/8이라서 6/8 + 5/8 = 11/8이고, 1과 3/8이에요.' }),
        nlOp('2/3 + 5/6의 합을 수직선에 점으로 놓아 보세요.', [2, 3], [5, 6], '+', 2, 6, 0.22),
        nlOp('1/2 + 3/4의 합을 수직선에 점으로 놓아 보세요.', [1, 2], [3, 4], '+', 2, 4, 0.18),
        nlOp('4/5 + 3/10의 합을 수직선에 점으로 놓아 보세요.', [4, 5], [3, 10], '+', 2, 10, 0.26, { extra: true }),
      ].map((it) => Object.assign(it, { toolOptions: Object.assign(it.toolOptions, { mixed: true }) }))),
    act('a2', '활동 2. 식과 대분수로 쓴 합 이어 보기', 'mindmap', '합이 가분수로 나오면 대분수로 바꾸어 써요. 식과 알맞은 합을 이어 보아요.',
      '"11/8을 대분수로 나타내면 어떻게 되나요?" 분자를 분모로 나누어 몫이 자연수 부분, 나머지가 분자라고 말하게 한다. 가분수 그대로 쓰는 학생에게는 1보다 큰 수를 읽기 쉽게 쓰는 방법임을 알려 준다.',
      ML('match', '합과 대분수'), [
        calcMatch('식과 알맞은 합을 이어 보세요. 대분수로 써요.', [[[2, 3], '+', [3, 4]], [[1, 2], '+', [5, 6]], [[3, 5], '+', [7, 10]]], 0.22,
          ['먼저 통분해서 더하고, 합이 가분수면 대분수로 바꾸어요.', '분자를 분모로 나눈 몫이 자연수 부분이에요.', '통분해 더한 합을 분자 ÷ 분모로 나누어 대분수로 써요.']),
        calcMatch('식과 알맞은 합을 이어 보세요. 분모가 더 커졌어요.', [[[5, 6], '+', [3, 8]], [[3, 4], '+', [4, 5]], [[7, 9], '+', [1, 2]]], 0.28,
          ['분모가 서로 다른 식이니 먼저 통분해요.', '합의 분자가 분모보다 크면 대분수로 바꾸어 써요.', '통분해 더하고 분자를 분모로 나누어 자연수 부분을 찾아요.']),
        calcMatch('식과 알맞은 합을 이어 보세요. 약분이 필요한 식도 있어요.', [[[7, 10], '+', [4, 5]], [[5, 6], '+', [1, 4]], [[2, 3], '+', [7, 12]]], 0.3,
          ['통분해 더한 뒤 대분수로 바꾸고, 분수 부분이 약분되는지 살펴요.', '분수 부분의 분자와 분모가 공약수를 가지면 약분해서 써요.', '통분해 더한 합을 대분수로 바꾼 뒤 분수 부분을 기약분수로 나타내요.'], { extra: true }),
      ]),
    act('a3', '활동 3. 합이 1보다 큰지 어림하고 대분수로 바꾸기', 'mindmap', '계산하기 전에 합이 1보다 작은지 큰지 어림해 보고, 가분수는 대분수로 바꾸어 봐요.',
      '"1/2 + 3/6은 계산하지 않고도 얼마인지 알 수 있나요?" 3/6이 1/2과 같으므로 합이 1이라고 말하게 한다. 합이 1보다 큰 식을 1보다 작은 칸에 넣는 학생에게는 두 분수가 1/2보다 큰지 작은지 먼저 보게 한다.',
      ML('sort', '합은 1보다'), [
        srt('식의 합이 1보다 작은지, 같은지, 큰지 나누어 보세요.', '합은 1보다', { '1보다 작아요': ['1/2 + 1/3', '1/4 + 1/6'], '1과 같아요': ['1/2 + 3/6', '1/4 + 6/8'], '1보다 커요': ['2/3 + 1/2', '3/4 + 3/5'] }, 0.2,
          ['두 분수를 1/2과 견주어 합이 1보다 큰지 어림해요.', '둘 다 1/2보다 작으면 합이 1보다 작고, 둘 다 1/2보다 크면 1보다 커요.', '1/2과 같은 분수를 하나 더하면 합이 1이 되기도 해요.']),
        fill('가분수를 대분수로 바꾸는 과정을 빈칸에 놓아 보세요.', [['5/6 + 3/4 = 10/12 + 9/12 = ___', '19/12'], ['19/12는 12/12와 7/12를 더한 수이니 ___', '1 7/12'], ['1 7/12는 1보다 ___만큼 더 큰 수', '7/12']], ['1 5/12'], 0.24,
          ['통분해 더한 가분수를 먼저 구해요.', '분자에서 분모만큼을 1로 덜어 내고 남은 분자를 분수로 써요.', '5/6은 10/12, 3/4은 9/12이고 합 19/12에서 12/12를 덜면 7/12가 남아요.']),
        pick('가분수를 대분수로 바르게 나타낸 것을 모두 골라 보세요.', '바른 대분수', [['17/12 = 1 5/12', 1], ['17/12 = 1 7/12', 0], ['9/6 = 1 3/6 = 1 1/2', 1], ['11/8 = 1 1/8', 0]], 0.26,
          ['분자를 분모로 나누었을 때 몫과 나머지를 살펴요.', '나머지가 대분수의 분수 부분의 분자가 돼요. 약분도 확인해요.', '17 ÷ 12는 몫 1 나머지 5이고, 9 ÷ 6은 몫 1 나머지 3이라 3/6을 1/2로 약분해요.'],
          { conclude: '가분수의 분자를 분모로 나눈 몫은 자연수 부분, 나머지는 분수 부분의 분자예요.' }),
      ]),
  ],
  wrap: ['"합이 19/12라고 나오면 무엇을 해야 하나요?" 대분수 1 7/12로 바꾸고, 분수 부분이 약분되는지도 본다고 짝에게 말하게 한다. 출구 3번을 틀린 학생은 분자를 분모로 나눈 나머지를 분자로 쓰는지 살펴 다음 시간에 몫과 나머지로 다시 보여 준다.',
    [{ type: 'tool', tool: 'numberline', options: { min: 0, max: 2, step: 1, sub: 6, format: 'frac', den: 6, count: 1, mixed: true }, prompt: '5/6 + 1/2의 합을 수직선에 점으로 놓아 보세요.', target: { points: ['1 1/3'] }, difficulty: 0.24 },
      { type: 'choice', prompt: '2/3 + 5/6을 바르게 계산한 것은 무엇인가요?', options: ['4/6 + 5/6 = 9/6 = 1 1/2', '2/3 + 5/6 = 7/9', '4/6 + 5/6 = 9/12'], answer: 0, difficulty: 0.2, explain: '6으로 통분하면 4/6 + 5/6이고 분모는 그대로 두고 분자끼리 더해 9/6, 대분수로 바꾸면 1 3/6 = 1 1/2이에요.' },
      { type: 'choice', prompt: '합이 1보다 큰 식은 무엇인가요?', options: ['1/3 + 1/4', '2/3 + 3/4', '1/5 + 1/10'], answer: 1, difficulty: 0.14, explain: '2/3과 3/4은 둘 다 1/2보다 커서 합이 1보다 커요. 나머지 식은 둘 다 1/2보다 작아요.' }]],
  ws: {
    title: '합이 1보다 큰 덧셈',
    items: [
      { type: 'table', prompt: '통분해서 더한 뒤 대분수로 나타내세요.', columns: ['식', '통분해 더하기', '대분수'], cells: [['2/3 + 3/4', '8/12 + 9/12 = 17/12', ''], ['5/6 + 1/2', '5/6 + 3/6 = 8/6', ''], ['3/5 + 7/10', '', '']], answer: '1 5/12, 1 1/3, 6/10 + 7/10 = 13/10 = 1 3/10' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5/8 + 3/4 = 5/8 + ___/8 = ___/8 = ___', answer: '6, 11, 1 3/8' },
      { type: 'choice', prompt: '합이 1보다 큰 식에 ○ 하세요.', options: ['1/4 + 1/6', '3/4 + 2/3', '1/8 + 1/2'], answer: '3/4 + 2/3' },
      { type: 'blank', prompt: '주스가 2/3 L와 3/5 L 있어요. 모두 몇 L인지 쓰세요.', text: '식: 2/3 + 3/5 = ___/15 + ___/15 = ___/15 = ___ L', answer: '10, 9, 19, 1 4/15' },
      { type: 'short', prompt: '19/12를 대분수로 바꾸는 방법을 써 보세요.', answer: '19를 12로 나누면 몫이 1, 나머지가 7이므로 1 7/12이다.' },
    ],
    easy: { note: '분자가 분모보다 크면 1보다 큰 수예요. 분자를 분모로 나누어 몫은 자연수, 나머지는 분자로 써요. 예: 11/8 = 1 3/8', items: [
      { type: 'table', prompt: '가분수를 대분수로 나타내세요.', columns: ['가분수', '대분수'], cells: [['7/6', ''], ['9/4', ''], ['11/8', '']], answer: '1 1/6, 2 1/4, 1 3/8' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1/2 + 3/4 = 2/4 + 3/4 = ___/4 = 1 ___/4', answer: '5, 1' },
      { type: 'choice', prompt: '합이 1보다 큰 식에 ○ 하세요.', options: ['1/3 + 1/4', '3/4 + 2/3'], answer: '3/4 + 2/3' },
      { type: 'draw', prompt: '수직선에 0, 1, 2를 쓰고 1 1/4의 자리에 점을 찍어 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선에 모든 눈금의 분수가 적혀 있고, 점을 놓으면 지금 수가 점 위에 보여요.',
    base: '자연수 눈금만 적혀 있어 눈금을 세어 분수를 찾아요.',
    challenge: '양 끝 눈금만 적혀 있고, 분모가 큰 분수(4/5 + 3/10)와 약분이 필요한 식도 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 합 19/12를 그대로 두거나 1 19/12처럼 쓴다 → 분수 부분은 진분수가 되어야 한다고 알려 준다. ② 분자를 분모로 나눈 나머지 대신 몫을 분자로 쓴다 → 12/12를 1로 덜어 낸 남은 조각이 분자라고 띠로 보인다. ③ 대분수의 분수 부분이 약분되는데 그대로 둔다(1 3/6) → 기약분수로 쓰는지 확인한다. 약분과 계산 순서는 8차시에서 한 번 더 정리한다.',
}));

// ───────────────────────────── 5차시 (core · representation) ─────────────────────────────
L.push(lesson(5, {
  title: '띠에서 조각을 지워 보며 분모가 다른 분수의 뺄셈 하기',
  objective: '분모가 다른 두 분수의 뺄셈을 같은 크기 조각으로 나눈 띠 그림에서 지워 나타내고, 통분해서 계산할 수 있다.',
  desc: 'a paper strip cut into twelve equal pieces on a desk with a child lifting away a few colored pieces and counting the pieces that remain', text: '지우고 남은 양',
  layers: [{ motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 226 }, { motif: 'leaf', x: 250, y: 90, color: 'peach' }],
  intro: ['"피자 3/4판이 남아 있는데 1/6판을 먹었어요. 남은 피자는 얼마일까요?" 먼저 어림하게 하고 "2/2판이요"처럼 분자끼리, 분모끼리 뺀 대답이 나오면 칠판에 적어 둔다. 지난 시간의 덧셈처럼 조각 크기를 같게 맞춘 뒤 지워 보자고 하며 띠를 보여 준다.',
    '3/4판에서 1/6판을 덜어 내려면 조각 크기가 같아야 할까요? 짝에게 말해 봐요.'],
  demo: { tool: 'fraction', options: { shape: 'strip', startN: 12, min: 12, max: 12, color: 'mint' }, sequence: [{ den: 12, num: 7 }] },
  acts: [
    act('a1', '활동 1. 칠한 띠에서 빼는 만큼 지우기', 'fraction', '처음 분수만큼 칠해진 띠에서 빼는 분수만큼 조각을 지워요. 띠는 두 분수의 조각 크기가 같아지도록 나누어져 있어요.',
      '"3/4은 12조각 중 몇 조각, 1/6은 몇 조각일까요?" 같은 크기 조각의 수로 말하게 한 뒤 지운 조각만큼 빼야 한다고 정리한다. 남은 양을 2/10처럼 분모를 빼서 쓰는 학생에게는 띠의 조각 수가 12로 그대로임을 세게 한다.',
      FR, [
        stripSub([3, 4], [1, 6], 0.16, { predict: { q: '3/4 − 1/6은 얼마일까요?', options: ['2/2', '7/12', '잘 모르겠어요'], answer: 1 }, conclude: '12조각 중 9조각에서 2조각을 지우면 7조각이 남아 12분의 7이에요.' }),
        stripSub([5, 6], [1, 3], 0.2),
        stripSub([7, 8], [1, 4], 0.22),
        stripSub([2, 3], [1, 4], 0.28, { extra: true }),
      ]),
    act('a2', '활동 2. 식과 차 이어 보기', 'mindmap', '통분해서 뺀 값을 식과 이어 보아요. 분자끼리, 분모끼리 뺀 틀린 답도 섞여 있어요.',
      '"3/4 − 2/5에서 어떤 수를 공통분모로 쓸까요?" 4와 5의 공배수 20을 말하게 한다. 분모끼리 빼 보려는 학생에게는 4 − 5가 되는 것이 이상하다는 점을 짚어 준다.',
      ML('match', '식과 차'), [
        calcMatch('식과 알맞은 차를 이어 보세요.', [[[3, 4], '-', [2, 5]], [[2, 3], '-', [1, 2]], [[5, 6], '-', [3, 8]]], 0.2,
          ['먼저 두 분수의 분모를 통분해요.', '통분한 뒤 분모는 그대로 두고 분자끼리 빼요.', '3/4 − 2/5는 20, 2/3 − 1/2은 6, 5/6 − 3/8은 24를 공통분모로 써서 계산해요.'], undefined, ['1/1']),
        calcMatch('식과 알맞은 차를 이어 보세요. 분모가 더 커졌어요.', [[[4, 5], '-', [1, 3]], [[7, 8], '-', [1, 6]], [[3, 4], '-', [1, 3]]], 0.26,
          ['식마다 공통분모를 정하고 분자의 차를 구해요.', '통분하면 분모가 같으니 큰 분자에서 작은 분자를 빼요.', '4/5 − 1/3은 15, 7/8 − 1/6은 24, 3/4 − 1/3은 12를 공통분모로 써요.'], undefined, ['3/2']),
        calcMatch('식과 알맞은 차를 이어 보세요. 값이 작은 식도 있어요.', [[[5, 6], '-', [2, 9]], [[7, 10], '-', [1, 4]], [[9, 10], '-', [3, 4]]], 0.3,
          ['통분한 뒤 두 분수의 분자를 견주어 큰 쪽에서 빼요.', '약분이 되는지도 살펴요.', '5/6 − 2/9는 18, 7/10 − 1/4과 9/10 − 3/4은 20을 공통분모로 써요.'], { extra: true }, ['4/6']),
      ]),
    act('a3', '활동 3. 뺄셈 과정 빈칸 채우기', 'mindmap', '통분한 분수와 차를 차례로 빈칸에 놓으며 계산 과정을 말해요.',
      '"먼저 무엇을 하고, 그다음에 무엇을 했나요?" 통분한 뒤 분자끼리 빼고 분모는 그대로 둔다고 말하게 한다. 분모끼리 빼는 학생에게는 조각 크기를 맞추면 분모는 그대로라는 것을 띠로 보인다.',
      ML('fill', '뺄셈 과정'), [
        stepFill('5/6 − 1/4의 계산 과정을 빈칸에 놓아 보세요.', [5, 6], [1, 4], '-', 0.2,
          ['통분하면 두 분수의 한 조각 크기가 같아져요.', '분모를 같게 바꾼 뒤 큰 분자에서 작은 분자를 빼요.', '5/6은 10/12, 1/4은 3/12이고 차는 7/12예요.']),
        stepFill('2/3 − 3/5의 계산 과정을 빈칸에 놓아 보세요.', [2, 3], [3, 5], '-', 0.26,
          ['3과 5의 공배수를 공통분모로 써요.', '크기가 같은 분수로 바꾸어 분자끼리 빼요.', '2/3는 10/15, 3/5는 9/15이고 차는 1/15예요.']),
        stepFill('3/4 − 5/8의 계산 과정을 빈칸에 놓아 보세요.', [3, 4], [5, 8], '-', 0.24,
          ['4는 8의 약수이니 8을 공통분모로 쓸 수 있어요.', '한 분수만 바꾸고 다른 분수는 그대로 두어도 돼요.', '3/4은 6/8이고 6/8 − 5/8 = 1/8이에요.']),
      ]),
  ],
  wrap: ['"분모가 다른 분수의 뺄셈은 어떤 순서로 하나요?" 통분하기 → 분자끼리 빼기 → 남은 양 확인하기를 짝에게 말하게 한다. 출구 2번을 틀린 학생은 분모끼리도 빼는지 살펴 다음 시간에 수직선으로 다시 보여 준다.',
    [{ type: 'tool', tool: 'fraction', options: { shape: 'strip', startN: 12, min: 12, max: 12 }, state: { n: 12, colored: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] }, prompt: '5/6이 칠해진 12조각 띠에서 3/4만큼 지우고 남은 양을 나타내 보세요.', target: { den: 12, num: 1 }, difficulty: 0.26 },
      { type: 'choice', prompt: '3/4 − 1/6을 계산하기 전에 먼저 해야 할 일은 무엇인가요?', options: ['두 분수를 통분해요', '분모끼리 빼요', '분자끼리 빼요'], answer: 0, difficulty: 0.14, explain: '조각 크기가 다르면 뺄 수 없어요. 통분해서 크기를 같게 맞춘 뒤 분자끼리 빼요.' },
      { type: 'choice', prompt: '2/3 − 1/2 = 1/1이라고 계산한 것이 틀린 까닭은 무엇인가요?', options: ['분자끼리, 분모끼리 빼서 조각 크기가 사라졌어요', '통분을 두 번 해서요', '분자끼리만 빼서요'], answer: 0, difficulty: 0.2, explain: '2/3 − 1/2은 6으로 통분해 4/6 − 3/6 = 1/6이에요. 분모끼리 빼면 조각 크기가 사라져요.' }]],
  ws: {
    title: '분모가 다른 분수의 뺄셈',
    items: [
      { type: 'table', prompt: '통분해서 빼는 과정을 완성하세요.', columns: ['식', '통분', '차'], cells: [['3/4 − 1/6', '9/12 − 2/12', ''], ['5/6 − 1/3', '5/6 − 2/6', ''], ['7/8 − 1/4', '', '']], answer: '7/12, 3/6, 7/8 − 2/8 = 5/8' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2/3 − 1/4 = ___/12 − ___/12 = ___/12', answer: '8, 3, 5' },
      { type: 'choice', prompt: '지호는 "5/6 − 1/2 = 4/4"라고 계산했어요. 바른 차에 ○ 하세요.', options: ['4/4', '2/6', '4/3'], answer: '2/6' },
      { type: 'blank', prompt: '피자가 3/4판 있었는데 1/6판을 먹었어요. 남은 피자를 쓰세요.', text: '식: 3/4 − 1/6 = ___   답: ___판', answer: '7/12, 7/12' },
      { type: 'short', prompt: '분모가 다른 분수를 빼기 전에 통분하는 까닭을 써 보세요.', answer: '분모가 다르면 한 조각의 크기가 달라서 뺄 수 없으므로 같은 크기 조각으로 바꾸어야 한다.' },
    ],
    easy: { note: '통분하면 분모가 같아져요. 분모는 그대로 두고 분자끼리 빼요. 예: 1/2 − 1/4 = 2/4 − 1/4 = 1/4', items: [
      { type: 'table', prompt: '통분한 뒤 차를 쓰세요.', columns: ['식', '통분', '차'], cells: [['1/2 − 1/6', '3/6 − 1/6', ''], ['2/3 − 1/6', '4/6 − 1/6', '']], answer: '2/6, 3/6' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3/4 − 1/8 = ___/8 − 1/8 = ___/8', answer: '6, 5' },
      { type: 'choice', prompt: '통분한 뒤 빼면 분모는 어떻게 되나요?', options: ['그대로예요', '빼서 0이 돼요'], answer: '그대로예요' },
      { type: 'draw', prompt: '종이띠를 8칸으로 나누어 5칸을 칠한 뒤 2칸을 지워 남은 양을 써 보세요.' },
    ] },
  },
  diff: {
    easy: '띠 옆에 분자·분모의 뜻이 보이고 카드를 놓으면 맞는지 바로 알려 줘요.',
    base: '띠에서 분수 읽기가 보이고, 식과 차를 스스로 이어요.',
    challenge: '분수 읽기가 숨겨져 남은 조각을 직접 세고, 분모가 큰 분수의 차(5/6 − 2/9)도 구해요.',
  },
  notes: '자주 보이는 어려움: ① 분자끼리, 분모끼리 뺀다(2/3 − 1/2 = 1/1) → 분모는 한 조각의 크기라서 빼도 그대로라고 띠로 보인다. ② 큰 분수에서 작은 분수를 뺀다는 것을 놓치고 분자를 바꾸어 뺀다 → 통분한 뒤 분자의 크기를 먼저 견준다. ③ 지운 조각을 세지 않고 칠한 조각 수를 그대로 쓴다 → 남은 칠한 조각만 센다고 말한다. 대분수의 뺄셈은 9~10차시에서 다룬다.',
}));

// ───────────────────────────── 6차시 (practice · representation) ─────────────────────────────
L.push(lesson(6, {
  title: '수직선 위에서 오른쪽·왼쪽으로 이동해 합과 차 찾기',
  objective: '분수의 덧셈과 뺄셈을 수직선 위의 이동으로 나타내고, 도착한 점의 값을 구할 수 있다.',
  desc: 'a long paper number line on a classroom floor with a child stepping right and left along equal paper marks between zero and one', text: '수직선에서 이동',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216, color: 'mint' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"줄넘기 줄 위에 0부터 1까지 6칸을 표시하고 1/2 칸까지 걸어갔어요. 거기서 1/3 칸만큼 더 가면 어디에 서게 될까요?" 한 칸이 얼마인지 말하게 하고 두 이동 거리를 같은 칸의 수로 바꾸게 한다. 오른쪽으로 가면 더하기, 왼쪽으로 가면 빼기라는 점을 짚는다.',
    '0부터 1까지를 6칸으로 나누면 한 칸은 얼마일까요? 1/2은 몇 칸일까요?'],
  acts: [
    act('a1', '활동 1. 오른쪽으로 이동해 합 찾기', 'numberline', '처음 점에서 더하는 분수만큼 오른쪽으로 가면 합이에요. 눈금 한 칸의 크기를 먼저 보고 합의 자리에 점을 놓아요.',
      '"1/2은 눈금 몇 칸이고 1/3은 몇 칸일까요?" 눈금 한 칸이 1/6임을 말하고 3칸 + 2칸이라고 정리한다. 눈금을 세지 않고 분모끼리 더한 곳에 점을 놓는 학생에게는 오른쪽으로 간 칸 수를 직접 세게 한다.',
      NL, [
        nlOp('1/2 + 1/3의 합을 수직선에 점으로 놓아 보세요.', [1, 2], [1, 3], '+', 1, 6, 0.14, { conclude: '눈금 한 칸이 1/6이라서 3칸에 2칸을 더해 5칸, 곧 5/6이에요.' }),
        nlOp('3/8 + 1/4의 합을 수직선에 점으로 놓아 보세요.', [3, 8], [1, 4], '+', 1, 8, 0.18),
        nlOp('1/6 + 1/2의 합을 수직선에 점으로 놓아 보세요.', [1, 6], [1, 2], '+', 1, 6, 0.2),
        nlOp('1/4 + 2/3의 합을 수직선에 점으로 놓아 보세요.', [1, 4], [2, 3], '+', 1, 12, 0.28, { extra: true }),
      ]),
    act('a2', '활동 2. 왼쪽으로 이동해 차 찾기', 'numberline', '처음 점에서 빼는 분수만큼 왼쪽으로 가면 차예요. 한 칸의 크기를 보고 도착한 점을 놓아요.',
      '"5/6에서 왼쪽으로 1/3만큼 가면 눈금 몇 칸을 가나요?" 1/3은 2칸이므로 5칸에서 2칸 줄어 3칸이라고 말하게 한다. 오른쪽으로 가서 합을 놓는 학생에게는 빼기는 왼쪽으로 가는 것임을 짚는다.',
      NL, [
        nlOp('5/6 − 1/3의 차를 수직선에 점으로 놓아 보세요.', [5, 6], [1, 3], '-', 1, 6, 0.16),
        nlOp('7/8 − 1/4의 차를 수직선에 점으로 놓아 보세요.', [7, 8], [1, 4], '-', 1, 8, 0.2),
        nlOp('3/4 − 1/3의 차를 수직선에 점으로 놓아 보세요.', [3, 4], [1, 3], '-', 1, 12, 0.26),
        nlOp('1 1/2 − 3/4의 차를 수직선에 점으로 놓아 보세요.', [1, 1, 2], [3, 4], '-', 2, 4, 0.3, { extra: true }),
      ].map((it) => Object.assign(it, { toolOptions: Object.assign(it.toolOptions, { mixed: true }) }))),
    act('a3', '활동 3. 수직선으로 구하는 차례 놓기', 'mindmap', '수직선에서 합이나 차를 찾는 일을 차례대로 놓아 보아요.',
      '"어디에서 출발하고 어느 쪽으로 몇 칸 가나요?" 눈금 한 칸의 크기, 출발점, 이동 방향과 칸 수, 도착점 순서로 말하게 한다. 도착점부터 먼저 읽는 학생에게는 출발점을 먼저 찾게 한다.',
      ML('order', '수직선 이동'), [
        ord('1/2 + 1/3을 수직선에서 구하는 차례대로 놓아 보세요.', ['0과 1 사이를 6칸으로 나누어요', '1/2의 자리인 3칸째에 점을 찍어요', '오른쪽으로 2칸 가요', '도착한 점은 5/6이에요'], ['왼쪽으로 2칸 가요'], 0.2,
          ['눈금 한 칸의 크기를 정하는 일이 가장 먼저예요.', '출발점을 찍은 뒤 이동하고, 마지막에 도착한 점을 읽어요.', '더하기이므로 출발점에서 오른쪽으로 가요.']),
        ord('5/6 − 1/3을 수직선에서 구하는 차례대로 놓아 보세요.', ['0과 1 사이를 6칸으로 나누어요', '5/6의 자리인 5칸째에 점을 찍어요', '왼쪽으로 2칸 가요', '도착한 점은 3/6이에요'], ['오른쪽으로 2칸 가요'], 0.24,
          ['눈금 한 칸의 크기를 먼저 정해요.', '빼기이므로 출발점에서 어느 쪽으로 가는지 생각해요.', '출발점을 찍은 뒤 왼쪽으로 가서 도착한 점의 눈금을 읽어요.']),
        ord('3/4 − 1/6을 수직선에서 구하는 차례대로 놓아 보세요.', ['0과 1 사이를 12칸으로 나누어요', '3/4의 자리인 9칸째에 점을 찍어요', '왼쪽으로 2칸 가요', '도착한 점은 7/12예요'], ['오른쪽으로 2칸 가요'], 0.28,
          ['3/4과 1/6을 모두 나타낼 수 있도록 눈금을 나누어요.', '출발점 → 이동 → 도착점 순서예요.', '1/6은 12칸 중 2칸이에요. 빼기이니 왼쪽으로 2칸 가요.']),
      ]),
  ],
  wrap: ['"수직선에서 더하기와 빼기는 어느 쪽으로 가나요? 눈금 한 칸의 크기는 어떻게 정했나요?" 오른쪽은 더하기, 왼쪽은 빼기, 한 칸의 크기는 두 분모의 공배수로 정했다고 짝에게 말하게 한다. 출구 2번을 틀린 학생은 눈금 칸 수를 세지 않고 분모끼리 더하는지 살핀다.',
    [{ type: 'tool', tool: 'numberline', options: { min: 0, max: 1, step: 1, sub: 8, format: 'frac', den: 8, count: 1 }, prompt: '1/8 + 3/4의 합을 수직선에 점으로 놓아 보세요.', target: { points: ['7/8'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '수직선에서 1/2에서 오른쪽으로 1/4만큼 가면 도착하는 수는 무엇인가요?', options: ['3/4', '2/6', '1/8'], answer: 0, difficulty: 0.14, explain: '1/2은 2/4이고 오른쪽으로 1칸 가면 3/4이에요.' },
      { type: 'choice', prompt: '5/6에서 왼쪽으로 1/3만큼 가면 도착하는 수는 무엇인가요?', options: ['1/2', '4/3', '5/3'], answer: 0, difficulty: 0.2, explain: '5/6에서 2칸 왼쪽으로 가면 3/6이고, 3/6은 1/2과 같아요.' }]],
  ws: {
    title: '수직선에서 합과 차 구하기',
    items: [
      { type: 'blank', prompt: '0과 1 사이를 6칸으로 나눈 수직선이에요. 빈칸에 알맞은 수를 쓰세요.', text: '1/2은 ___칸, 1/3은 ___칸, 1/2 + 1/3은 ___칸이므로 ___/6이에요.', answer: '3, 2, 5, 5' },
      { type: 'table', prompt: '한 칸의 크기가 1/8인 수직선이에요. 이동한 뒤 도착한 곳을 쓰세요.', columns: ['출발', '이동', '도착'], cells: [['3/8', '오른쪽으로 1/4', ''], ['7/8', '왼쪽으로 1/4', ''], ['1/2', '오른쪽으로 1/8', '']], answer: '5/8, 5/8, 5/8' },
      { type: 'choice', prompt: '5/6에서 1/3을 뺄 때 이동하는 쪽에 ○ 하세요.', options: ['오른쪽', '왼쪽'], answer: '왼쪽' },
      { type: 'blank', prompt: '3/4 − 1/6을 수직선(12칸)으로 구해요.', text: '3/4은 ___칸, 1/6은 ___칸이므로 ___칸 = ___/12', answer: '9, 2, 7, 7' },
      { type: 'short', prompt: '수직선에서 분수의 덧셈과 뺄셈을 할 때 눈금 한 칸의 크기를 어떻게 정하는지 써 보세요.', answer: '두 분수의 분모의 공배수(통분한 분모)만큼 1을 나누어 한 칸의 크기를 정한다.' },
    ],
    easy: { note: '눈금 한 칸이 얼마인지 먼저 정해요. 더하기는 오른쪽으로, 빼기는 왼쪽으로 가요.', items: [
      { type: 'blank', prompt: '0과 1 사이를 4칸으로 나눈 수직선이에요.', text: '1/2은 ___칸, 1/4은 ___칸, 1/2 + 1/4은 ___칸 = ___/4', answer: '2, 1, 3, 3' },
      { type: 'choice', prompt: '빼기는 어느 쪽으로 가나요?', options: ['오른쪽', '왼쪽'], answer: '왼쪽' },
      { type: 'table', prompt: '한 칸이 1/6인 수직선에서 도착한 칸 수를 쓰세요.', columns: ['식', '도착한 칸'], cells: [['1/2 + 1/6', ''], ['5/6 − 1/3', '']], answer: '4칸, 3칸' },
      { type: 'draw', prompt: '0과 1 사이를 6칸으로 나눈 수직선을 그리고 1/3 + 1/6의 자리에 점을 찍어 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선의 모든 눈금에 분수가 적혀 있고, 점을 놓으면 지금 수가 점 위에 보여요.',
    base: '자연수 눈금만 적혀 있어 눈금을 세어 합과 차를 찾아요.',
    challenge: '양 끝만 적혀 있고, 눈금이 12칸인 문항과 1보다 큰 수에서 빼는 문항(1 1/2 − 3/4)도 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 눈금 한 칸의 크기를 분모에 맞추지 않고 세어 엉뚱한 곳에 점을 놓는다 → 0과 1 사이가 몇 칸인지 먼저 센다. ② 빼기인데 오른쪽으로 간다 → 빼기는 줄어드니 왼쪽이라고 짚는다. ③ 이동한 칸 수를 분모와 분자를 헷갈려 쓴다 → 도착한 칸 수가 분자, 전체 칸 수가 분모라고 말한다. 같은 식을 띠 그림과 수직선으로 나란히 보며 서로 어떻게 이어지는지는 7차시에서 다룬다.',
}));

// ───────────────────────────── 7차시 (extend · representation) ─────────────────────────────
L.push(lesson(7, {
  title: '띠 그림의 각 부분이 식의 어느 수인지 짚어 말하기',
  objective: '띠 그림의 칠한 조각, 전체 조각 수와 식의 분자·분모·통분한 분수를 이어 그림과 식이 서로 대응하는 모습을 설명할 수 있다.',
  desc: 'a paper strip cut into twelve pieces with colored pieces matched by thin ribbons to paper number cards showing fractions on the table beside it', text: '그림과 식 이어요',
  layers: [{ motif: 'tree', x: 100, y: 216 }, { motif: 'flower', x: 360, y: 228 }, { motif: 'leaf', x: 250, y: 92, color: 'lavender' }],
  intro: ['"띠 그림에서 칠한 조각이 7개예요. 식 3/4 − 1/6의 어느 수와 이어질까요?" 칠한 조각 수와 식의 수를 하나씩 이어 보게 한다. 7이 식에 직접 나오지 않는다는 점을 짚으며 통분해서 9/12, 2/12가 되어야 보인다고 말해 준다.',
    '식에는 없는 숫자가 띠 그림에는 있어요. 어디에서 나온 수일까요? 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 칠한 조각을 보고 합 쓰기', 'fraction', '점무늬는 처음 분수, 나머지 칠한 조각은 더한 분수예요. 칠한 조각이 모두 몇 개인지 세어 합을 분수로 써요.',
      '"처음 분수와 더한 분수를 모두 합해 칠한 조각은 몇 개인가요?" 잠긴 조각까지 모두 세게 한다. 새로 칠한 조각만 분자로 쓰는 학생에게는 합은 처음 분수와 더한 분수의 합이라는 점을 짚는다.',
      FRW, [
        stripWriteAdd([1, 4], [2, 3], 0.18, { conclude: '12조각 중 3조각에 8조각을 더해 11조각, 12분의 11이에요.' }),
        stripWriteAdd([1, 10], [3, 5], 0.2),
        stripWriteAdd([3, 8], [1, 4], 0.22),
        stripWriteAdd([1, 3], [2, 9], 0.28, { extra: true }),
      ]),
    act('a2', '활동 2. 남은 조각을 보고 차 쓰기', 'fraction', '칠한 조각은 빼고 남은 양이에요. 띠의 전체 조각 수와 칠한 조각 수를 세어 차를 분수로 써요.',
      '"남은 양은 칠한 조각만 세면 되나요?" 칠하지 않은 조각은 이미 덜어 낸 양과 처음부터 없던 부분이라고 말하게 한다. 칠하지 않은 조각까지 세어 분자로 쓰는 학생에게는 칠한 조각만 분자라고 짚는다.',
      FRW, [
        stripWriteSub([2, 3], [1, 4], 0.18),
        stripWriteSub([7, 8], [1, 2], 0.2),
        stripWriteSub([4, 5], [1, 2], 0.24),
        stripWriteSub([3, 4], [2, 3], 0.28, { extra: true }),
      ]),
    act('a3', '활동 3. 그림의 부분과 식의 수 이어 보기', 'mindmap', '띠 그림의 각 부분이 식의 어느 수인지 이어 보아요. 통분한 분수가 그림과 이어져요.',
      '"전체를 12조각으로 나눈 것은 식의 어느 수와 이어질까요?" 통분한 분모 12와 이어진다고 말하게 한다. 처음 분수가 차지한 조각을 식의 분자 3과 이으려는 학생에게는 3/4을 12분모로 바꾼 9/12와 이어진다고 알려 준다.',
      ML('match', '그림과 식'), [
        partsMatch('3/4 + 1/6 띠 그림의 각 부분과 알맞은 수를 이어 보세요.', [3, 4], [1, 6], '+', 0.22),
        partsMatch('5/6 − 1/4 띠 그림의 각 부분과 알맞은 수를 이어 보세요.', [5, 6], [1, 4], '-', 0.26),
        partsMatch('2/3 + 1/4 띠 그림의 각 부분과 알맞은 수를 이어 보세요.', [2, 3], [1, 4], '+', 0.24),
      ]),
  ],
  wrap: ['"띠 그림의 12조각은 식의 어느 수를 통분해서 생긴 수인가요?" 분모 4와 6을 통분한 12라고 말하게 하고 그림과 식을 나란히 놓고 짝에게 설명하게 한다. 출구 2번을 틀린 학생은 칠한 조각만 세는지 칠하지 않은 조각까지 세는지 살펴 다음 시간에 띠로 다시 보여 준다.',
    [{ type: 'tool', tool: 'fraction', options: { shape: 'strip', write: true, startN: 9, min: 9, max: 9, locked: [0, 1] }, state: { n: 9, colored: [0, 1, 2, 3, 4] }, prompt: '2/9 + 1/3의 합이 칠해져 있어요. 분수로 써 보세요.', target: { den: 9, num: 5 }, difficulty: 0.22 },
      { type: 'choice', prompt: '3/4 + 1/6 띠 그림에서 띠를 똑같이 나눈 조각 수 12는 어떻게 나온 수인가요?', options: ['4와 6의 공배수로 통분해서', '4와 6을 더해서', '3과 1을 더해서'], answer: 0, difficulty: 0.18, explain: '4와 6의 공배수 12로 통분하면 3/4 = 9/12, 1/6 = 2/12가 돼요. 4 + 6 = 10 조각이면 조각 크기가 달라져요.' },
      { type: 'choice', prompt: '5/6 − 1/4의 남은 양을 띠에서 읽을 때 분자로 쓰는 것은 무엇인가요?', options: ['칠한 조각만의 수', '칠하지 않은 조각의 수', '전체 조각의 수'], answer: 0, difficulty: 0.14, explain: '남은 양이 칠한 조각이에요. 칠한 조각 수가 분자, 전체 조각 수가 분모예요.' }]],
  ws: {
    title: '그림과 식 이어 보기',
    items: [
      { type: 'figure', prompt: '그림을 보고 덧셈식을 완성하세요. 점무늬는 처음 분수, 빗금은 더한 분수예요.', tool: 'fraction', options: { shape: 'strip', frame: true, locked: [0, 1, 2] }, figures: [
        { state: { n: 12, colored: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }, caption: '1/4 + 2/3 = (     )' }], answer: '11/12' },
      { type: 'table', prompt: '3/4 + 1/6을 띠로 나타낼 때 알맞은 수를 쓰세요.', columns: ['띠의 부분', '알맞은 수'], cells: [['띠 전체의 조각 수(통분한 분모)', ''], ['3/4의 조각 수', ''], ['1/6의 조각 수', ''], ['합의 조각 수', '']], answer: '12, 9, 2, 11' },
      { type: 'choice', prompt: '5/6 − 1/4의 띠 그림에서 남은 양의 조각 수에 ○ 하세요.', options: ['5', '7', '10'], answer: '7' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2/3 − 1/4에서 띠를 ___조각으로 나누면 2/3은 ___조각, 1/4은 ___조각이고 남은 양은 ___/12예요.', answer: '12, 8, 3, 5' },
      { type: 'short', prompt: '식에 없는 수 12가 띠 그림에 나오는 까닭을 써 보세요.', answer: '두 분수의 분모 4와 6을 통분한 공통분모가 12이기 때문이다.' },
    ],
    easy: { note: '띠를 나눈 조각 수가 분모, 칠한 조각 수가 분자예요. 처음 분수의 점무늬도 함께 세요.', items: [
      { type: 'table', prompt: '띠를 보고 알맞은 수를 쓰세요. (1/2 + 1/4, 띠는 4조각)', columns: ['띠의 부분', '알맞은 수'], cells: [['1/2의 조각 수', ''], ['1/4의 조각 수', ''], ['합의 조각 수', '']], answer: '2, 1, 3' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '띠를 4조각으로 나누어 3조각을 칠했어요. 분수로 쓰면 ___/___', answer: '3, 4' },
      { type: 'choice', prompt: '분자는 무엇을 세어 쓰나요?', options: ['칠한 조각', '전체 조각'], answer: '칠한 조각' },
      { type: 'draw', prompt: '종이띠를 6칸으로 나누어 1/3 + 1/6의 합만큼 칠하고 분수로 써 보세요.' },
    ] },
  },
  diff: {
    easy: '띠 옆에 분자·분모의 뜻이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
    base: '띠에서 칠한 조각을 스스로 세어 분수로 쓰고 그림과 식을 이어요.',
    challenge: '분모가 큰 식(1/3 + 2/9, 3/4 − 2/3)도 그림으로 풀고 그림과 식의 대응을 말로 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 새로 칠한 조각만 세어 분자를 쓴다 → 처음 분수의 점무늬도 합에 들어간다고 짚는다. ② 식의 수(3과 1)를 그림의 조각 수와 곧바로 이으려 한다 → 통분하면 9/12, 2/12가 되어 그림과 이어진다고 설명한다. ③ 뺄셈에서 칠하지 않은 조각을 분자로 쓴다 → 남은 양이 칠한 부분임을 짚는다. 이 차시에서 만든 "그림과 식 나란히 설명하기"는 8차시 계산 순서 정리로 이어진다.',
}));

// ───────────────────────────── 8차시 (extend · representation) ─────────────────────────────
L.push(lesson(8, {
  title: '계산 차례를 정리하고 답을 기약분수로 약분해 쓰기',
  objective: '분모가 다른 분수의 덧셈과 뺄셈을 통분, 계산, 약분의 차례로 정리하고 답을 기약분수로 나타낼 수 있다.',
  desc: 'four paper steps like stepping stones across a stream labeled with small fraction cards leading to a smaller simplified fraction card on the far bank', text: '통분 계산 약분',
  layers: [{ motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"1/6 + 1/3 = 3/6이라고 썼어요. 이 답은 다 된 걸까요?" 3/6은 1/2과 크기가 같으니 약분해서 가장 간단한 분수로 쓸 수 있다고 말하게 한다. 지난 시간까지 한 통분과 계산 뒤에 약분까지 해야 답이 끝난다는 흐름을 칠판에 세 칸으로 적는다.',
    '1/6 + 1/3의 답 3/6은 더 간단하게 쓸 수 있을까요? 짝과 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 계산 차례 놓기', 'mindmap', '통분 → 분자끼리 계산 → 약분 → 답 쓰기의 차례를 놓아 보아요.',
      '"통분하기 전에 약분부터 해도 될까요?" 계산한 뒤의 분수를 약분한다고 말하게 한다. 약분을 마지막에 하지 않고 통분한 분수를 곧바로 약분하는 학생에게는 두 분수를 먼저 같은 분모로 맞추는 이유를 다시 떠올리게 한다.',
      ML('order', '계산 차례'), [
        ord('1/6 + 1/3을 계산하는 차례대로 놓아 보세요.', ['1/3을 2/6으로 통분해요', '1/6 + 2/6 = 3/6이에요', '분모와 분자를 3으로 약분해요', '답은 1/2이에요'], ['분모끼리 더해 2/9라고 써요'], 0.18,
          ['통분이 가장 먼저이고, 약분은 계산 결과를 간단히 만드는 마지막 일이에요.', '계산한 뒤 답을 기약분수로 고쳐 써요.', '통분 → 분자끼리 더하기 → 약분 → 답 쓰기 차례예요.']),
        ord('5/6 − 1/2을 계산하는 차례대로 놓아 보세요.', ['1/2을 3/6으로 통분해요', '5/6 − 3/6 = 2/6이에요', '분모와 분자를 2로 약분해요', '답은 1/3이에요'], ['답은 2/6이에요'], 0.22,
          ['통분해서 크기를 맞춘 뒤 빼요.', '뺀 결과가 약분되는지 살펴 마지막에 기약분수로 써요.', '통분 → 분자끼리 빼기 → 약분 → 답 쓰기 차례예요.']),
        ord('3/4 + 1/12를 계산하는 차례대로 놓아 보세요.', ['3/4을 9/12로 통분해요', '9/12 + 1/12 = 10/12이에요', '분모와 분자를 2로 약분해요', '답은 5/6이에요'], ['답은 4/16이에요'], 0.24,
          ['한 분수만 통분해도 돼요. 큰 분모에 맞추어요.', '더한 뒤 약분이 되는지 살펴요.', '3/4은 9/12로 바꾸고 더한 뒤 공약수로 나누어 기약분수로 써요.']),
        ord('7/10 − 1/5를 계산하는 차례대로 놓아 보세요.', ['1/5을 2/10으로 통분해요', '7/10 − 2/10 = 5/10이에요', '분모와 분자를 5로 약분해요', '답은 1/2이에요'], ['답은 5/10이에요'], 0.26, undefined, { extra: true }),
      ]),
    act('a2', '활동 2. 계산한 답 약분하기', 'fracstrips', '통분해서 계산한 답이 약분되면 분모와 분자를 공약수로 나누어 기약분수로 나타내요.',
      '"10과 12는 어떤 수로 모두 나누어떨어질까요?" 공약수 2를 찾게 한 뒤 5/6이 더 약분되지 않는다고 확인한다. 한 번만 나누고 멈추는 학생에게는 나눈 결과의 분모와 분자의 공약수가 더 있는지 다시 묻는다.',
      FSD, [
        redItem([3, 4], [1, 12], '+', 0.16),
        redItem([7, 10], [1, 5], '-', 0.2),
        redItem([5, 12], [1, 4], '+', 0.22),
        redItem([11, 12], [1, 6], '-', 0.28, { extra: true }),
      ]),
    act('a3', '활동 3. 계산하고 약분한 답 이어 보기', 'mindmap', '계산한 뒤 기약분수로 나타낸 값을 식과 이어 보아요. 약분이 필요 없는 식도 있어요.',
      '"이 답은 더 약분할 수 있나요?" 분모와 분자의 공약수가 1뿐인지 확인하게 한다. 약분이 필요한 답을 그대로 이으려는 학생에게는 분모와 분자를 모두 나눌 수 있는 수가 있는지 묻는다.',
      ML('match', '약분한 답'), [
        calcMatch('식과 약분한 답을 이어 보세요.', [[[1, 6], '+', [1, 3]], [[1, 2], '+', [1, 10]], [[3, 4], '-', [1, 12]]], 0.2,
          ['통분해서 계산한 뒤 답이 약분되는지 살펴요.', '분모와 분자를 공약수로 나누어 더 약분되지 않을 때까지 해요.', '1/6 + 1/3 = 3/6, 1/2 + 1/10 = 6/10, 3/4 − 1/12 = 8/12이고 각각 약분해요.']),
        calcMatch('식과 약분한 답을 이어 보세요. 약분이 되는 식을 찾아요.', [[[7, 10], '-', [1, 2]], [[1, 4], '+', [1, 12]], [[2, 3], '-', [1, 6]]], 0.24,
          ['계산한 값의 분모와 분자를 공약수로 나눌 수 있는지 보아요.', '2나 3처럼 작은 수로 나누어떨어지는지 먼저 확인해요.', '7/10 − 1/2 = 2/10, 1/4 + 1/12 = 4/12, 2/3 − 1/6 = 3/6이고 각각 약분해요.']),
        calcMatch('식과 알맞은 답을 이어 보세요. 약분이 필요 없는 식도 있어요.', [[[5, 8], '-', [1, 4]], [[3, 10], '+', [2, 5]], [[7, 12], '-', [1, 3]]], 0.28,
          ['계산한 값이 이미 기약분수인지 살펴요.', '분모와 분자의 공약수가 1뿐이면 약분하지 않아요.', '5/8 − 1/4와 3/10 + 2/5는 더 약분할 수 없고, 7/12 − 1/3은 3/12라서 약분해요.'], { extra: true }),
      ]),
  ],
  wrap: ['"분수의 덧셈과 뺄셈의 답을 쓸 때 마지막으로 꼭 확인할 것은 무엇인가요?" 답이 기약분수인지, 1보다 크면 대분수로 썼는지 확인한다고 짝에게 말하게 한다. 출구 1번을 틀린 학생은 한 번만 약분하고 멈추는지 살펴 다음 시간에 공약수를 다시 찾게 한다.',
    [{ type: 'tool', tool: 'fracstrips', options: { mode: 'divide', top: [4, 6], divisors: [2, 3, 4, 6] }, prompt: '1/6 + 1/2 = 4/6이에요. 기약분수로 나타내세요.', target: { reduce: [4, 6], lowest: true }, difficulty: 0.2, explain: '4와 6의 최대공약수는 2예요. 4 ÷ 2 = 2, 6 ÷ 2 = 3이므로 2/3이에요.' },
      { type: 'choice', prompt: '5/6 − 1/2 = 2/6을 가장 간단하게 나타내면 무엇인가요?', options: ['1/3', '2/6', '1/6'], answer: 0, difficulty: 0.14, explain: '2/6의 분모와 분자를 2로 나누면 1/3이에요. 1/3은 더 약분할 수 없어요.' },
      { type: 'choice', prompt: '분수의 덧셈과 뺄셈에서 약분을 하는 까닭으로 알맞은 것은 무엇인가요?', options: ['답을 기약분수로 간단히 쓰려고', '분모를 더 크게 만들려고', '분자를 없애려고'], answer: 0, difficulty: 0.12, explain: '크기는 그대로이면서 더 간단한 분수로 쓰기 위해 약분해요.' }]],
  ws: {
    title: '통분, 계산, 약분',
    items: [
      { type: 'table', prompt: '계산하고 기약분수로 나타내세요.', columns: ['식', '통분해 계산', '기약분수'], cells: [['1/6 + 1/3', '1/6 + 2/6 = 3/6', ''], ['5/6 − 1/2', '5/6 − 3/6 = 2/6', ''], ['7/12 − 1/3', '', '']], answer: '1/2, 1/3, 7/12 − 4/12 = 3/12 = 1/4' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3/4 + 1/12 = ___/12 + 1/12 = ___/12 = ___/6', answer: '9, 10, 5' },
      { type: 'choice', prompt: '더 이상 약분되지 않는 분수에 ○ 하세요.', options: ['4/12', '5/8', '6/9'], answer: '5/8' },
      { type: 'short', prompt: '지호는 5/6 − 1/2 = 2/6이라고만 쓰고 끝냈어요. 더 해야 할 일은 무엇인가요?', answer: '2/6의 분모와 분자를 2로 나누어 기약분수 1/3으로 쓴다.' },
      { type: 'short', prompt: '통분 → 계산 → 약분의 차례를 지켜야 하는 까닭을 써 보세요.', answer: '통분해야 크기가 같은 조각의 수를 더하거나 뺄 수 있고, 계산한 뒤 약분하면 가장 간단한 분수로 답을 쓸 수 있다.' },
    ],
    easy: { note: '답을 쓰기 전에 분모와 분자를 모두 나눌 수 있는 수가 있는지 확인해요. 예: 2/6 → 1/3', items: [
      { type: 'table', prompt: '기약분수로 나타내세요.', columns: ['분수', '기약분수'], cells: [['2/4', ''], ['3/6', ''], ['4/10', '']], answer: '1/2, 1/2, 2/5' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1/2 + 1/6 = ___/6 + 1/6 = ___/6 = 2/___', answer: '3, 4, 3' },
      { type: 'choice', prompt: '3/6을 약분하면 무엇인가요?', options: ['1/2', '1/3'], answer: '1/2' },
      { type: 'draw', prompt: '1/2 + 1/6을 띠 그림으로 나타내고 답을 기약분수로 써 보세요.' },
    ] },
  },
  diff: {
    easy: '공약수 단추에 점(•)이 찍혀 있고, 위 띠와 아래 띠의 크기가 같아지면 선이 보여요.',
    base: '공약수를 스스로 찾아 약분하고, 계산 차례를 스스로 정리해요.',
    challenge: '아래 띠가 확인 뒤에만 보여 수로 약분하고, 한 번에 기약분수까지 나누는 연습(11/12 − 1/6)도 해요.',
  },
  notes: '자주 보이는 어려움: ① 약분을 하지 않고 답을 끝낸다(5/6 − 1/2 = 2/6) → 답을 쓴 뒤 분모와 분자의 공약수를 찾는 습관을 갖게 한다. ② 한 번만 약분하고 멈춘다(8/12 → 4/6) → 최대공약수로 한 번에 나누거나 더 약분되는지 다시 살핀다. ③ 계산 전에 약분부터 한다 → 통분해서 계산한 뒤 약분하는 차례를 지킨다. 대분수의 덧셈은 9차시에서 이어진다.',
}));
// ───────────────────────────── 9차시 (core · application) ─────────────────────────────
L.push(lesson(9, {
  title: '리본 길이를 대분수로 합하기',
  objective: '대분수끼리의 덧셈에서 자연수끼리, 분수끼리 통분해 더하고 분수 부분이 1이 넘으면 자연수로 올려 대분수로 나타낼 수 있다.',
  desc: 'two long paper ribbons of different colors being tied end to end across a craft table with a child reading marks from a paper measuring strip', text: '리본을 이어 붙여요',
  layers: [{ motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'flower', x: 360, y: 228 }, { motif: 'leaf', x: 250, y: 92, color: 'mint' }],
  intro: ['"빨간 리본 1 1/2 m와 파란 리본 2 1/3 m를 이어 붙이면 몇 m일까요?" 자연수는 자연수끼리, 분수는 분수끼리 더하면 되는지 물어 어림해 보게 한다. 먼저 3 m보다 길고 4 m보다 짧겠다는 어림을 칠판에 적어 두고, 계산한 뒤 어림과 견주게 한다.',
    '1 1/2 m와 2 1/3 m를 이어 붙이면 얼마쯤 될까요? 계산 전에 짝과 어림해 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 식과 대분수의 합 이어 보기', 'mindmap', '대분수의 덧셈은 자연수끼리, 분수끼리 더해요. 분수 부분의 합이 1이 넘으면 자연수 부분에 1을 더해요.',
      '"자연수 부분의 합과 분수 부분의 합을 따로 구해 볼까요?" 분수 부분은 통분해서 더한다고 말하게 한다. 분수 부분의 합이 1보다 크면 자연수 부분에 1을 더해 올린다는 것을 강조하고, 분모끼리 더하는 학생에게는 지난 시간의 띠 그림을 떠올리게 한다.',
      ML('match', '대분수의 합'), [
        calcMatch('식과 알맞은 합을 이어 보세요. 분수 부분의 합이 1보다 작아요.', [[[1, 1, 2], '+', [2, 1, 3]], [[2, 3, 4], '+', [1, 1, 6]], [[1, 2, 5], '+', [1, 3, 10]]], 0.2,
          ['자연수끼리 더하고, 분수끼리는 통분해서 더해요.', '분수 부분의 합이 1보다 작은지 먼저 어림해요.', '자연수 부분의 합에 통분해서 더한 분수 부분을 이어 붙여 대분수로 써요.']),
        calcMatch('식과 알맞은 합을 이어 보세요. 분수 부분의 합이 1보다 커요.', [[[1, 5, 6], '+', [2, 3, 4]], [[2, 2, 3], '+', [1, 4, 5]], [[3, 1, 4], '+', [1, 5, 8]]], 0.3,
          ['분수끼리 통분해 더했을 때 1보다 큰지 살펴요.', '분수 부분의 합이 가분수가 되면 1을 자연수 부분으로 올려요.', '분수 부분의 합을 대분수로 바꾸어 자연수 부분에 더해요.']),
        calcMatch('대분수의 식과 알맞은 합을 이어 보세요. 약분이 필요한 식도 있어요.', [[[2, 1, 2], '+', [3, 1, 3]], [[1, 3, 4], '+', [2, 1, 2]], [[4, 5, 6], '+', [1, 1, 4]]], 0.28,
          ['통분해 더한 분수 부분이 약분되는지, 1을 넘는지 살펴요.', '분수 부분이 가분수이면 대분수로 바꾸어 자연수에 더해요.', '분수 부분의 합이 약분되면 기약분수로 쓰고, 1보다 크면 자연수 부분을 올려요.'], { extra: true }),
      ]),
    act('a2', '활동 2. 자연수끼리, 분수끼리 더하기 빈칸 채우기', 'mindmap', '자연수끼리 더하고 분수끼리 통분해서 더한 뒤 합쳐 보아요.',
      '"자연수 부분의 합은 얼마이고 분수 부분의 합은 얼마인가요?" 두 값을 따로 구하고 마지막에 이어 붙여 쓴다고 말하게 한다. 자연수끼리도 분모를 곱하는 학생에게는 자연수 부분은 몇 m인지 직접 세어 보게 한다.',
      ML('fill', '대분수의 덧셈'), [
        mixedFill('2 1/4 + 1 1/3의 계산 과정을 빈칸에 놓아 보세요.', [2, 1, 4], [1, 1, 3], 0.2,
          ['자연수 부분과 분수 부분을 따로 계산해요.', '분수 부분은 두 분모를 통분해서 더해요.', '자연수 부분은 3, 분수 부분은 3/12 + 4/12 = 7/12이므로 합은 3 7/12예요.']),
        mixedFill('1 1/6 + 2 3/8의 계산 과정을 빈칸에 놓아 보세요.', [1, 1, 6], [2, 3, 8], 0.26,
          ['분수 부분의 분모 6과 8을 통분해서 더해요.', '자연수 부분은 따로 더해요.', '자연수 부분은 3이고 분수 부분은 4/24 + 9/24 = 13/24이므로 합은 3 13/24예요.']),
        mixedFill('3 2/5 + 1 1/10의 계산 과정을 빈칸에 놓아 보세요. 약분도 해요.', [3, 2, 5], [1, 1, 10], 0.28,
          ['분수 부분을 통분해 더한 뒤 약분이 되는지 살펴요.', '자연수 부분은 더하고 분수 부분은 기약분수로 써요.', '분수 부분은 4/10 + 1/10 = 5/10이고 약분하면 1/2이므로 합은 4 1/2이에요.']),
      ]),
    act('a3', '활동 3. 리본 길이를 수직선에 놓기', 'numberline', '이어 붙인 리본의 길이를 수직선에 점으로 놓아 어림한 값과 견주어 봐요.',
      '"1 1/2 m와 1 1/3 m를 이으면 2 m보다 길까요, 짧을까요?" 자연수 부분의 합이 2이므로 2보다 길다고 말하게 한다. 눈금을 세지 않고 점을 놓는 학생에게는 자연수 눈금에서 몇 칸 더 가는지 세게 한다.',
      NL, [
        nlOp('빨간 리본 1 1/2 m와 파란 리본 1 1/3 m를 이은 길이를 수직선에 놓아 보세요.', [1, 1, 2], [1, 1, 3], '+', 3, 6, 0.22, { conclude: '자연수 부분은 2, 분수 부분은 3/6 + 2/6 = 5/6이라서 2 5/6예요.' }),
        nlOp('노란 리본 1 1/4 m와 초록 리본 1 1/2 m를 이은 길이를 수직선에 놓아 보세요.', [1, 1, 4], [1, 1, 2], '+', 3, 4, 0.24),
        nlOp('보라 리본 2 1/2 m와 분홍 리본 1 1/4 m를 이은 길이를 수직선에 놓아 보세요.', [2, 1, 2], [1, 1, 4], '+', 4, 4, 0.26),
        nlOp('흰 리본 1 1/6 m와 하늘색 리본 2 1/2 m를 이은 길이를 수직선에 놓아 보세요.', [1, 1, 6], [2, 1, 2], '+', 4, 6, 0.3, { extra: true }),
      ].map((it) => Object.assign(it, { toolOptions: Object.assign(it.toolOptions, { mixed: true }) }))),
  ],
  wrap: ['"1 3/4 + 1 1/2는 분수 부분의 합이 5/4가 되었어요. 이때 자연수 부분은 어떻게 하나요?" 1을 자연수 부분으로 올려 3 1/4이 된다고 짝에게 말하게 한다. 출구 3번을 틀린 학생은 분수 부분이 1이 넘을 때 자연수로 올리는지 살펴 다음 시간에 수직선으로 다시 보여 준다.',
    [{ type: 'tool', tool: 'numberline', options: { min: 0, max: 4, step: 1, sub: 4, format: 'frac', den: 4, count: 1, mixed: true }, prompt: '1 3/4 + 1 1/2의 합을 수직선에 점으로 놓아 보세요.', target: { points: ['3 1/4'] }, difficulty: 0.28 },
      { type: 'choice', prompt: '노란 리본 1 1/4 m와 초록 리본 2 1/2 m를 이어 붙이면 몇 m인가요?', options: ['3 3/4 m', '3 2/6 m', '4 1/4 m'], answer: 0, difficulty: 0.18, explain: '자연수끼리 1 + 2 = 3, 분수끼리 1/4 + 2/4 = 3/4이라서 3 3/4 m예요.' },
      { type: 'choice', prompt: '3 5/6 + 1 3/4의 합은 얼마인가요?', options: ['5 7/12', '4 7/12', '5 1/12'], answer: 0, difficulty: 0.28, explain: '분수끼리 10/12 + 9/12 = 19/12 = 1 7/12이고 자연수 3 + 1에 1을 더해 5 7/12예요.' }]],
  ws: {
    title: '대분수의 덧셈',
    items: [
      { type: 'table', prompt: '자연수끼리, 분수끼리 더해 합을 구하세요.', columns: ['식', '자연수끼리', '분수끼리', '합'], cells: [['1 1/3 + 2 1/4', '3', '7/12', ''], ['2 1/6 + 1 1/2', '', '', ''], ['1 3/4 + 2 5/6', '', '', '']], answer: '3 7/12, 3과 4/6=2/3 → 3 2/3, 3과 19/12 → 4 7/12' },
      { type: 'blank', prompt: '리본 2 1/3 m와 1 1/2 m를 이어 붙인 길이를 구하세요.', text: '식: 2 1/3 + 1 1/2 = 2 2/6 + 1 3/6 = ___ m', answer: '3 5/6' },
      { type: 'choice', prompt: '지호는 "1 1/2 + 1 1/3 = 2 2/5"라고 계산했어요. 바른 합에 ○ 하세요.', options: ['2 2/5', '2 5/6', '2 1/6'], answer: '2 5/6' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 3/4 + 1 5/6 = 3 ___/12 + ___ = 4 ___/12', answer: '19, 1(올림), 7' },
      { type: 'short', prompt: '대분수의 덧셈에서 분수 부분의 합이 가분수가 되면 어떻게 하는지 써 보세요.', answer: '가분수를 대분수로 바꾸어 자연수 부분을 올려 자연수끼리의 합에 더한다.' },
    ],
    easy: { note: '자연수는 자연수끼리, 분수는 분수끼리 더해요. 분수끼리 더할 때는 통분해요. 예: 1 1/2 + 1 1/4 = 2 + 3/4', items: [
      { type: 'table', prompt: '자연수끼리, 분수끼리 더하세요.', columns: ['식', '자연수끼리', '분수끼리', '합'], cells: [['1 1/2 + 2 1/4', '3', '3/4', ''], ['2 1/4 + 1 1/2', '', '', '']], answer: '3 3/4, 3 3/4' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 1/3 + 1 1/6 = 1 2/6 + 1 1/6 = ___ ___/6', answer: '2, 3 (2 3/6 = 2 1/2)' },
      { type: 'choice', prompt: '자연수끼리 더한 값에 ○ 하세요. (1 1/2 + 2 1/3)', options: ['3', '2', '5'], answer: '3' },
      { type: 'draw', prompt: '수직선에 0부터 4까지 쓰고 2 3/4의 자리에 점을 찍어 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선의 모든 눈금에 분수가 적혀 있고, 점을 놓으면 지금 수가 점 위에 보여요.',
    base: '자연수 눈금만 적혀 있어 눈금을 세어 합의 자리를 찾아요.',
    challenge: '양 끝만 적혀 있고, 분수 부분의 합이 1을 넘어 자연수를 올리는 식(3 5/6 + 1 3/4)도 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 자연수끼리도, 분모끼리도 더한다(1 1/2 + 1 1/3 = 2 2/5) → 자연수는 단위가 같아서 그대로 더하고, 분수는 통분해서 더한다고 짚는다. ② 분수 부분의 합이 1보다 큰데 그대로 둔다(3 19/12) → 자연수 부분으로 올려 4 7/12로 쓴다고 알려 준다. ③ 한쪽 대분수만 가분수로 바꾸고 다른 쪽은 그대로 계산한다 → 두 대분수를 같은 방법으로 계산한다. 가분수로 바꾸어 계산하는 방법을 원하는 학생에게는 10차시 뺄셈에서 함께 견주어 보여 준다.',
}));

// ───────────────────────────── 10차시 (practice · application) ─────────────────────────────
L.push(lesson(10, {
  title: '물통에 남은 물의 양 구하기(받아내림이 있는 대분수의 뺄셈)',
  objective: '대분수끼리의 뺄셈에서 분수 부분이 모자랄 때 자연수에서 1을 받아내려 계산하고 답을 기약분수나 대분수로 나타낼 수 있다.',
  desc: 'a large paper water jug being poured into smaller paper cups on a table with measuring lines painted on the jug and one cup left nearly empty', text: '남은 물은 얼마?',
  layers: [{ motif: 'tree', x: 100, y: 216 }, { motif: 'flower', x: 370, y: 228, color: 'sky' }, { motif: 'bird', x: 250, y: 82 }],
  intro: ['"물통에 물이 3 1/6 L 있었는데 1 1/2 L를 마셨어요. 남은 물은 얼마일까요?" 자연수끼리 3 − 1 = 2이고 분수끼리는 1/2 − 1/6 = 1/3이라서 2 1/3 L라고 답하는 학생이 있으면 칠판에 적어 둔다. 1/6에서 1/2을 뺄 수 있는지 물어 수직선과 어림으로 다시 살펴보게 한다.',
    '3 1/6에서 1 1/2을 빼면 2보다 클까요, 작을까요? 어림해서 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 받아내림이 없는 식과 있는 식 이어 보기', 'mindmap', '분수 부분끼리 뺄 수 있을 때는 그대로 빼고, 모자랄 때는 자연수에서 1을 받아내려요.',
      '"분수 부분을 통분했을 때 빼지는 수가 더 큰가요?" 분수 부분을 먼저 비교해 받아내림이 필요한지 정하게 한다. 큰 분수에서 작은 분수를 거꾸로 빼는 학생에게는 처음 양보다 남은 양이 더 커지는지 어림으로 물어본다.',
      ML('match', '대분수의 차'), [
        calcMatch('식과 알맞은 차를 이어 보세요. 받아내림이 필요 없어요.', [[[3, 5, 6], '-', [1, 1, 3]], [[4, 3, 4], '-', [2, 1, 2]], [[5, 7, 8], '-', [3, 1, 4]]], 0.2,
          ['분수 부분을 통분해 빼는 쪽이 더 작은지 먼저 살펴요.', '빼지는 분수가 더 크면 자연수끼리, 분수끼리 따로 빼요.', '자연수끼리 빼고 분수 부분은 통분해서 빼 대분수로 써요.'], undefined, ['2 4/3']),
        calcMatch('식과 알맞은 차를 이어 보세요. 받아내림이 필요해요.', [[[3, 1, 6], '-', [1, 1, 2]], [[4, 1, 4], '-', [1, 2, 3]], [[5, 1, 5], '-', [2, 3, 4]]], 0.3,
          ['분수 부분을 통분해 빼지는 분수가 빼는 분수보다 작은지 살펴요.', '모자라면 자연수 부분에서 1을 받아내려 분수 부분에 더해요.', '받아내린 뒤 자연수끼리, 분수끼리 빼서 대분수로 써요.'], undefined, ['2 1/3']),
        calcMatch('식과 알맞은 차를 이어 보세요. 값이 1보다 작은 것도 있어요.', [[[2, 1, 3], '-', [1, 3, 4]], [[6, 1, 2], '-', [3, 5, 6]], [[4, 1, 10], '-', [2, 1, 4]]], 0.32,
          ['어느 식이든 분수 부분을 통분해 뺄 수 있는지부터 봐요.', '받아내림이 필요한 식은 자연수 부분을 먼저 1 줄이고 분수 부분에 더해요.', '차가 약분되거나 가분수가 되는지 마지막에 확인해요.'], { extra: true }, ['1 5/12']),
      ]),
    act('a2', '활동 2. 받아내림하는 과정 빈칸 채우기', 'mindmap', '모자란 분수 부분을 자연수에서 받아내려 채우는 과정을 차례로 빈칸에 놓아요.',
      '"자연수에서 1을 받아내리면 분수 부분은 얼마가 되나요?" 1을 통분한 분모로 바꾸어 더하는 과정을 말하게 한다. 받아내린 뒤에도 자연수를 줄이지 않는 학생에게는 3 = 2와 1로 나눈 것임을 수직선으로 보인다.',
      ML('fill', '받아내림'), [
        borrowFill('2 1/4 − 1 1/2의 계산 과정을 빈칸에 놓아 보세요.', [2, 1, 4], [1, 1, 2], 0.24,
          ['빼지는 분수 부분이 빼는 분수 부분보다 작아요. 자연수에서 1을 받아내려요.', '받아내린 1을 통분한 분모로 바꾸어 분수 부분에 더해요.', '2 1/4 = 1 5/4이고 1 5/4 − 1 2/4 = 3/4이에요.']),
        borrowFill('3 1/3 − 1 3/4의 계산 과정을 빈칸에 놓아 보세요.', [3, 1, 3], [1, 3, 4], 0.3,
          ['통분하면 1/3은 3/4보다 작은 분수예요. 받아내림이 필요해요.', '자연수 3을 2와 1로 나누고, 1을 12분모로 바꾸어 분수 부분에 더해요.', '3 4/12 = 2 16/12이고 2 16/12 − 1 9/12 = 1 7/12예요.']),
        borrowFill('4 1/8 − 2 1/2의 계산 과정을 빈칸에 놓아 보세요.', [4, 1, 8], [2, 1, 2], 0.28,
          ['1/8과 1/2의 크기를 통분해서 견주어 보세요.', '모자라면 자연수 부분 4에서 1을 받아내려요.', '4 1/8 = 3 9/8이고 3 9/8 − 2 4/8 = 1 5/8이에요.']),
      ]),
    act('a3', '활동 3. 남은 물의 양을 수직선에 놓기', 'numberline', '물통에서 쓰고 남은 양을 수직선에 점으로 놓아 어림한 값과 견주어 봐요.',
      '"3 1/2 L에서 1 3/4 L를 쓰면 남은 양은 2 L보다 많을까요?" 3 − 1 = 2에서 분수 부분이 모자라므로 2보다 적다고 말하게 한다. 눈금을 세지 않고 2 1/4에 점을 놓는 학생에게는 3 2/4에서 왼쪽으로 몇 칸 가는지 세게 한다.',
      NL, [
        nlOp('물통에 물이 3 1/2 L 있었어요. 1 3/4 L를 쓰고 남은 양을 수직선에 놓아 보세요.', [3, 1, 2], [1, 3, 4], '-', 4, 4, 0.26, { conclude: '3 2/4에서 1 3/4을 빼면 1 3/4이에요. 분수 부분이 모자라 자연수에서 1을 받아내렸어요.' }),
        nlOp('물통에 물이 2 1/6 L 있었어요. 1 1/2 L를 쓰고 남은 양을 수직선에 놓아 보세요.', [2, 1, 6], [1, 1, 2], '-', 3, 6, 0.3),
        nlOp('물통에 물이 4 1/3 L 있었어요. 2 5/6 L를 쓰고 남은 양을 수직선에 놓아 보세요.', [4, 1, 3], [2, 5, 6], '-', 5, 6, 0.32),
        nlOp('물통에 물이 6 1/5 L 있었어요. 3 1/2 L를 쓰고 남은 양을 수직선에 놓아 보세요.', [6, 1, 5], [3, 1, 2], '-', 6, 10, 0.34, { extra: true }),
      ].map((it) => Object.assign(it, { toolOptions: Object.assign(it.toolOptions, { mixed: true }) }))),
  ],
  wrap: ['"5 1/4 − 2 1/2에서 5 1/4를 어떻게 바꾸어야 빼기 쉬울까요?" 5를 4와 1로 나누어 4 5/4로 바꾼다고 짝에게 말하게 한다. 출구 2번을 틀린 학생은 받아내린 1을 분수로 바꿀 때 분모를 맞추는지 살펴 다음 시간에 수직선으로 다시 보여 준다.',
    [{ type: 'tool', tool: 'numberline', options: { min: 0, max: 4, step: 1, sub: 4, format: 'frac', den: 4, count: 1, mixed: true }, prompt: '리본 4 1/4 m에서 1 1/2 m를 잘라 냈어요. 남은 길이를 수직선에 놓아 보세요.', target: { points: ['2 3/4'] }, difficulty: 0.3 },
      { type: 'choice', prompt: '5 1/4 − 2 1/2를 계산하려면 5 1/4를 어떻게 바꾸어야 하나요?', options: ['4 5/4', '5 5/4', '4 1/4'], answer: 0, difficulty: 0.24, explain: '5 1/4에서 1을 받아내리면 자연수가 4가 되고 분수 부분은 1/4 + 4/4 = 5/4가 돼요.' },
      { type: 'choice', prompt: '3 1/4 − 1 1/2의 값은 얼마인가요?', options: ['1 3/4', '2 3/4', '1 1/2'], answer: 0, difficulty: 0.28, explain: '3 1/4 = 2 5/4이고 1 1/2 = 1 2/4이라서 2 5/4 − 1 2/4 = 1 3/4이에요.' }]],
  ws: {
    title: '받아내림이 있는 대분수의 뺄셈',
    items: [
      { type: 'table', prompt: '자연수에서 1을 받아내려 계산하세요.', columns: ['식', '받아내림 뒤', '차'], cells: [['2 1/4 − 1 1/2', '1 5/4 − 1 2/4', ''], ['3 1/3 − 1 3/4', '2 16/12 − 1 9/12', ''], ['4 1/8 − 2 1/2', '', '']], answer: '3/4, 1 7/12, 3 9/8 − 2 4/8 = 1 5/8' },
      { type: 'blank', prompt: '물통에 물이 3 1/2 L 있었어요. 1 3/4 L를 쓰고 남은 양을 구하세요.', text: '식: 3 1/2 − 1 3/4 = 3 2/4 − 1 3/4 = 2 ___/4 − 1 3/4 = ___ L', answer: '6, 1 3/4' },
      { type: 'choice', prompt: '지호는 "3 1/6 − 1 1/2 = 2 1/3"이라고 계산했어요. 바른 차에 ○ 하세요.', options: ['2 1/3', '1 2/3', '1 1/3'], answer: '1 2/3' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5 1/4에서 1을 받아내리면 4 ___/4이에요.', answer: '5' },
      { type: 'short', prompt: '지호의 계산이 왜 틀렸는지 써 보세요.', answer: '분수 부분에서 1/6이 1/2보다 작은데 큰 수에서 작은 수를 거꾸로 뺐다. 자연수에서 1을 받아내려 계산해야 한다.' },
    ],
    easy: { note: '분수 부분이 모자라면 자연수에서 1을 받아내려요. 1은 통분한 분모만큼의 분수로 바꾸어 더해요. 예: 2 1/4 = 1 5/4', items: [
      { type: 'table', prompt: '받아내려 쓰세요.', columns: ['대분수', '받아내린 모양'], cells: [['2 1/4', '1 ___/4'], ['3 1/3', '2 ___/3']], answer: '1 5/4, 2 4/3' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 1/4 − 1 2/4 = 1 5/4 − 1 2/4 = ___/4', answer: '3' },
      { type: 'choice', prompt: '받아내림이 필요한 식에 ○ 하세요.', options: ['3 5/6 − 1 1/3', '3 1/6 − 1 1/2'], answer: '3 1/6 − 1 1/2' },
      { type: 'draw', prompt: '수직선에 0부터 4까지 쓰고 3 1/2에서 1 3/4만큼 왼쪽으로 가는 화살표를 그려 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선의 모든 눈금에 분수가 적혀 있고, 점을 놓으면 지금 수가 점 위에 보여요.',
    base: '자연수 눈금만 적혀 있어 눈금을 세어 남은 양의 자리를 찾아요.',
    challenge: '양 끝만 적혀 있고, 분모가 10인 눈금(6 1/5 − 3 1/2)과 받아내림 과정 빈칸도 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 큰 분수에서 작은 분수를 거꾸로 뺀다(3 1/6 − 1 1/2 = 2 1/3) → "처음 양보다 남은 양이 더 크지 않나요?" 하고 어림으로 확인한다. ② 받아내림을 해도 자연수를 줄이지 않는다 → 3 1/6 = 2 7/6처럼 수 전체의 크기가 변하지 않음을 수직선으로 보인다. ③ 받아내린 1을 분모에 맞는 분수로 바꾸지 않는다 → 1 = 6/6처럼 통분한 분모만큼의 분수로 바꾼다. 가분수로 바꾸어 계산하는 방법(3 1/6 = 19/6)도 같은 답이 나오는지 견주어 볼 수 있다.',
}));

// ───────────────────────────── 11차시 (wrap · application) ─────────────────────────────
L.push(lesson(11, {
  title: '분수의 덧셈과 뺄셈 단원 정리: 틀린 풀이 고치고 순서 말하기',
  objective: '분모가 다른 분수의 덧셈과 뺄셈 풀이에서 틀린 곳을 찾아 고치고, 통분·계산·약분(또는 대분수로 나타내기) 순서를 설명할 수 있다.',
  desc: 'a bulletin board of paper worksheets with some marked correct by green paper stars and some corrected with pink notes, with a child pointing at the notes', text: '틀린 곳을 고쳐요',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'star', x: 250, y: 82 }],
  intro: ['"친구가 1/3 + 1/5 = 2/8이라고 풀었어요. 어디가 틀렸는지 찾아 줄 수 있나요?" 이 단원에서 배운 통분이 빠진 풀이임을 말하게 하고, 단원 전체에서 가장 자주 틀린 풀이를 짝과 이야기하게 한다. 오늘은 틀린 풀이를 고치며 한 단원을 정리한다고 말한다.',
    '이 단원에서 가장 헷갈렸던 풀이는 무엇인가요? 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 맞는 풀이와 틀린 풀이 가르기', 'mindmap', '풀이 카드를 보고 맞는 풀이와 틀린 풀이를 나누고, 틀린 까닭을 찾아요.',
      '"이 풀이는 어느 단계에서 잘못되었을까요?" 통분하지 않았는지, 받아내림을 하지 않았는지, 약분을 빠뜨렸는지 단계별로 짚게 한다. 맞는 풀이를 틀리다고 하는 학생에게는 식을 직접 다시 계산해 보게 한다.',
      ML('sort', '풀이 점검'), [
        srt('풀이 카드를 맞는 풀이와 틀린 풀이로 나누어 보세요.', '풀이 점검', { '맞는 풀이': ['1/2 + 1/3 = 3/6 + 2/6 = 5/6', '5/6 − 1/4 = 10/12 − 3/12 = 7/12', '2 1/2 + 1 1/3 = 3 5/6'], '틀린 풀이': ['1/3 + 1/5 = 2/8', '3 1/6 − 1 1/2 = 2 1/3', '3/4 − 1/6 = 2/4'] }, 0.22,
          ['식마다 먼저 통분했는지 살펴보세요.', '대분수의 뺄셈은 분수 부분이 모자란지, 합이 1을 넘는지도 살펴요.', '분모끼리 더했거나, 큰 분수에서 작은 분수를 뺐거나, 통분하지 않고 뺀 풀이가 틀려요.']),
        pick('3 1/6 − 1 1/2 = 2 1/3이 틀린 까닭으로 알맞은 카드를 모두 골라 보세요.', '틀린 까닭', [['1/6이 1/2보다 작은데 큰 분수에서 작은 분수를 뺐어요', 1], ['자연수 3에서 1을 받아내리지 않았어요', 1], ['분수를 통분한 것이 잘못이에요', 0], ['바르게 계산하면 1 2/3이에요', 1]], 0.28,
          ['분수 부분을 통분해서 어느 쪽이 더 큰지 견주어 보세요.', '분수 부분이 모자라면 어떻게 해야 했는지 생각해요.', '3 1/6 = 2 7/6로 받아내려 2 7/6 − 1 3/6 = 1 4/6 = 1 2/3이에요.']),
        match('틀린 풀이와 틀린 까닭을 이어 보세요.', [['1/3 + 1/5 = 2/8', '분모끼리, 분자끼리 더했어요'], ['3 1/6 − 1 1/2 = 2 1/3', '큰 분수에서 작은 분수를 뺐어요'], ['3/4 − 1/6 = 2/4', '통분하지 않고 분자만 뺐어요']], ['답을 약분하지 않았어요'], 0.26,
          ['풀이의 오른쪽 답이 어떻게 나왔는지 식을 거꾸로 살펴요.', '분모 8, 분자 2는 각각 더한 값인지, 뺀 값인지 확인해요.', '2/8은 1 + 1과 3 + 5, 2 1/3은 3 − 1과 1/2 − 1/6, 2/4는 3 − 1과 분모 4를 그대로 둔 것이에요.']),
      ]),
    act('a2', '활동 2. 띠 그림으로 확인하기', 'fraction', '띠 그림에서 더하거나 지워 계산한 답을 확인해요.',
      '"띠에서 5/6는 6조각 중 몇 조각이고 2/3는 몇 조각인가요?" 같은 크기 조각으로 바꾸어 지운다고 말하게 한다. 지운 조각 수와 남은 조각 수를 헷갈리는 학생에게는 칠한 조각만 센다고 짚는다.',
      FR, [
        stripSub([5, 6], [2, 3], 0.2),
        stripAdd([3, 8], [1, 2], 0.22),
        stripSub([5, 8], [1, 4], 0.24),
        stripAdd([1, 5], [1, 2], 0.28, { extra: true }),
      ]),
    act('a3', '활동 3. 여러 가지 식의 값 이어 보고 풀이 차례 놓기', 'mindmap', '덧셈, 뺄셈, 대분수의 식과 값을 이어 보고 대분수 뺄셈의 풀이 차례를 놓아 보아요.',
      '"이 식은 통분만 하면 되나요, 받아내림도 해야 하나요?" 식마다 필요한 단계를 말하고 풀이 차례를 소리 내어 읽게 한다. 마지막 약분을 빼먹는 학생에게는 답이 기약분수인지 확인하게 한다.',
      ML('match', '식과 값'), [
        calcMatch('식과 알맞은 값을 이어 보세요. 덧셈과 뺄셈이 섞여 있어요.', [[[1, 2], '+', [3, 5]], [[3, 1, 2], '-', [1, 5, 6]], [[2, 2, 3], '+', [1, 3, 4]]], 0.28,
          ['식마다 필요한 단계를 정해 통분하고 계산해요.', '대분수의 뺄셈은 분수 부분이 모자라면 받아내려요.', '합이 가분수이면 대분수로 바꾸고, 차나 합이 약분되면 기약분수로 써요.']),
        calcMatch('식과 알맞은 값을 이어 보세요. 값이 큰 식도 있어요.', [[[7, 8], '-', [1, 3]], [[1, 1, 4], '+', [2, 5, 6]], [[5, 1, 3], '-', [2, 1, 2]]], 0.3,
          ['식마다 통분을 먼저 하고, 대분수가 있으면 자연수 부분도 함께 살펴요.', '합의 분수 부분이 1을 넘거나 차의 분수 부분이 모자라는지 확인해요.', '통분해서 계산한 값을 대분수나 기약분수로 고쳐 써요.'], undefined, ['5/11']),
        ord('3 1/2 − 1 5/6의 풀이를 차례대로 놓아 보세요.', ['분수 부분을 통분해요 (3 3/6 − 1 5/6)', '자연수 3에서 1을 받아내려요 (2 9/6 − 1 5/6)', '자연수끼리, 분수끼리 빼요 (1 4/6)', '약분해서 답을 써요 (1 2/3)'], ['분모끼리 빼요'], 0.3,
          ['받아내림이 필요한지는 통분한 뒤에 알 수 있어요.', '받아내린 뒤에 자연수끼리, 분수끼리 빼고 마지막에 약분해요.', '통분 → 받아내림 → 빼기 → 약분의 차례예요.']),
      ]),
  ],
  wrap: ['"분모가 다른 분수의 덧셈과 뺄셈은 어떤 순서로 하나요? 단원에서 배운 것을 세 문장으로 말해 볼까요?" 통분하기, 분자끼리 계산하기(받아올림·받아내림), 약분과 대분수로 나타내기를 말하게 한다. 출구 1번을 틀린 학생은 큰 분수에서 작은 분수를 빼는 습관이 남아 있는지 살펴 다음 수업 전에 수직선으로 다시 보여 준다.',
    [{ type: 'tool', tool: 'fraction', options: { shape: 'strip', startN: 12, min: 12, max: 12 }, state: { n: 12, colored: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, prompt: '3/4가 칠해진 12조각 띠에서 1/3만큼 지우고 남은 양을 나타내 보세요.', target: { den: 12, num: 5 }, difficulty: 0.26 },
      { type: 'choice', prompt: '분모가 다른 분수의 덧셈과 뺄셈을 바르게 말한 것은 무엇인가요?', options: ['통분한 뒤 분자끼리 계산하고 답을 간단히 나타내요', '분모끼리, 분자끼리 계산해요', '큰 분수에서 작은 분수를 빼요'], answer: 0, difficulty: 0.14, explain: '분모가 다르면 조각의 크기가 다르니 통분한 뒤 계산하고, 답은 약분이나 대분수로 간단히 나타내요.' },
      { type: 'choice', prompt: '3 1/6 − 1 2/3의 값은 얼마인가요?', options: ['1 1/2', '2 1/2', '1 1/3'], answer: 0, difficulty: 0.3, explain: '3 1/6 = 2 7/6이고 1 2/3 = 1 4/6이라서 2 7/6 − 1 4/6 = 1 3/6 = 1 1/2이에요.' }]],
  ws: {
    title: '분수의 덧셈과 뺄셈 정리',
    items: [
      { type: 'table', prompt: '계산하고 기약분수나 대분수로 나타내세요.', columns: ['식', '값'], cells: [['2/3 + 1/4', ''], ['5/6 − 3/8', ''], ['1 1/2 + 2 1/3', ''], ['4 1/6 − 1 3/4', '']], answer: '11/12, 11/24, 3 5/6, 2 5/12' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '분모가 다른 분수는 먼저 ___해서 분모를 같게 하고, 계산한 뒤에는 ___해서 기약분수로 나타내요. 합이 1보다 크면 ___로 바꾸어 써요.', answer: '통분, 약분, 대분수' },
      { type: 'choice', prompt: '"5/6 − 1/4 = 4/2"라고 계산한 풀이가 틀린 까닭에 ○ 하세요.', options: ['통분하지 않고 분자끼리, 분모끼리 뺐어요', '약분을 하지 않았어요'], answer: '통분하지 않고 분자끼리, 분모끼리 뺐어요' },
      { type: 'short', prompt: '민지는 "2 1/3 − 1 3/4 = 1 2/1"이라고 풀었어요. 바르게 고쳐 쓰고 틀린 까닭을 말해 보세요.', answer: '분수 부분을 통분하면 4/12가 9/12보다 작아 자연수에서 1을 받아내려야 한다. 2 4/12 = 1 16/12이고 1 16/12 − 1 9/12 = 7/12이다.' },
      { type: 'short', prompt: '이 단원에서 새로 알게 된 것과 아직 헷갈리는 것을 한 가지씩 써 보세요.' },
    ],
    easy: { note: '통분 → 분자끼리 계산 → 약분(또는 대분수로) 순서로 풀어요. 대분수 뺄셈은 분수 부분이 모자라면 자연수에서 1을 받아내려요.', items: [
      { type: 'table', prompt: '순서에 맞게 쓰세요.', columns: ['식', '통분', '값'], cells: [['1/2 + 1/4', '2/4 + 1/4', ''], ['2/3 − 1/6', '4/6 − 1/6', '']], answer: '3/4, 3/6 = 1/2' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '분모가 다르면 먼저 ______해요.', answer: '통분' },
      { type: 'choice', prompt: '분모가 같아진 뒤 분모는 어떻게 하나요?', options: ['그대로 써요', '더해요'], answer: '그대로 써요' },
      { type: 'draw', prompt: '이 단원에서 가장 어려웠던 식 하나를 쓰고, 띠 그림이나 수직선으로 나타내 보세요.' },
    ] },
  },
  diff: {
    easy: '띠 옆에 분자·분모의 뜻이 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
    base: '풀이 카드와 식·값 카드를 스스로 나누고 이어요.',
    challenge: '띠의 분수 읽기 칸이 숨겨지고, 받아내림이 필요한 대분수 식(5 1/3 − 2 1/2)과 풀이 차례도 풀어요.',
  },
  notes: '이 단원에서 자주 보이는 어려움: ① 분모끼리, 분자끼리 더하거나 뺀다 → 한 조각의 크기를 같게 맞춘 뒤 조각의 개수를 계산한다. ② 계산 뒤 약분을 빠뜨린다 → 답을 쓸 때 기약분수인지 확인한다. ③ 대분수의 덧셈에서 분수 부분의 합이 1을 넘을 때 자연수로 올리지 않는다. ④ 대분수의 뺄셈에서 모자란 분수 부분을 받아내림하지 않고 큰 분수에서 작은 분수를 뺀다. 이 차시의 출구 결과를 보고 어려워한 단계(통분, 계산, 약분, 받아올림·받아내림)를 모아 다음 수업 앞부분에서 한 번 더 다룬다.',
}));
// @@NEXT@@
// @@END@@
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 5, subject: '수학', unitTitle: UT,
  flow: '분모가 다른 분수를 더하고 빼려면 먼저 조각 크기를 같게 맞춰야 한다는 것에서 출발합니다. 1~2차시에서 분모끼리, 분자끼리 더하는 오개념을 띠 그림으로 깨고 크기가 같은 분수로 바꾸어 분모를 같게 맞추는 통분을 익힙니다. 3~4차시는 통분해서 더하기이며 합이 1보다 크면 가분수를 대분수로 나타냅니다. 5~8차시는 같은 계산을 띠 그림, 수직선, 그림과 식의 짝짓기로 나타내고 계산한 답을 약분해 기약분수로 쓰는 차례를 정리합니다. 9~10차시는 리본과 물통 이야기로 대분수의 덧셈과 받아내림이 있는 뺄셈을 하고, 11차시는 틀린 풀이를 고치며 단원을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
