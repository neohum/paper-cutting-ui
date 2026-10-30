/* 5학년 1학기 수학 2. 약수와 배수 — 단원 파일(차시 11개, 기존 차시 없음).
 * 확인 필요: units-index 의 plan 제목은 1~6차시가 '약수와 공약수, 최대공약수가 뜻하는 바 알고 찾아내기', 7~11차시가 '배수와 공배수, 최소공배수가 뜻하는 바 알고 구해 보기'
 *   (개념 확인·표현과 연결·적용과 설명)이고 catalogTool 은 모두 multiply 다. 단원 제목에 맞춰 약수(1~6) → 배수(7~11) 순서로 짰고,
 *   성취기준은 units-index·units-map 의 약수 쪽 [6수01-04](1~6차시), 배수 쪽 [6수01-05](7~10차시), 단원 정리(11차시)는 둘 다 달았다.
 * 교구: multiply 의 묶기(약수 판정)·배열(곱셈 짝)·곱셈표(배수 표), numberline 의 뛰어 세기(배수), pattern 의 수 배열 빈칸(배수·공배수 줄),
 *   카드 판(mindmap)의 고르기·나누기(겹친 그림 대신 세 칸)·잇기·빈칸이다. 겹친 그림(벤 다이어그램)은 교구에 없어 '12의 약수만 · 공약수 · 18의 약수만' 세 칸 나누기로 한다.
 * 약수·배수·공약수·공배수의 정답은 파일 안의 gcd·lcm·나머지 계산이 만든다. 손으로 적은 정답이 없다 — 보기 카드가 정답을 겹치게 만들면 파일을 읽는 순간 실패한다.
 * 예문·이야기는 이 단원을 위해 직접 지은 것이다. 학생 이름 예시(민지·준호)는 가명이다.
 * 흐름: 나누어떨어지게 하는 수가 약수(1) → 곱셈식 짝으로 약수를 빠짐없이 찾기(2) → 두 수의 약수를 세 칸에 나누어 공약수 보기(3)
 *      → 공약수 가운데 가장 큰 수가 최대공약수(4) → 남김없이 똑같이 나누는 사람 수(5) → 가장 큰 정사각형 한 변(6)
 *      → 뛰어 세어 얻는 수가 배수(7) → 곱셈표로 배수 찾기(8) → 두 수의 배수에서 공배수(9) → 가장 작은 공배수가 최소공배수(10) → 다시 만나는 때·단원 정리(11).
 */
(function () {
const UID = 'g5-math-1-02', CU = 'g5-수학-1학기-2', UT = '2. 약수와 배수';
const two = (n) => String(n).padStart(2, '0');
const STD_OF = (n) => (n <= 6 ? ['[6수01-04]'] : n <= 10 ? ['[6수01-05]'] : ['[6수01-04]', '[6수01-05]']);
const gcd = (a, b) => (b ? gcd(b, a % b) : a);
const lcm = (a, b) => (a / gcd(a, b)) * b;
const divs = (n) => { const r = []; for (let i = 1; i <= n; i++) if (n % i === 0) r.push(i); return r; };
const J = (arr) => arr.join(', ');
const uniq = (arr, what) => { if (new Set(arr).size !== arr.length) throw new Error('겹치는 보기: ' + what + ' ' + arr.join(',')); return arr; };
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
    title: d.title, objective: d.objective, standards: STD_OF(n), minutes: 40, formats: ['chromebook', 'projector', 'print'],
    illustration: ill(d.desc, d.text, d.layers),
    stages: [
      { id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] },
      { id: 'main', title: '전개', minutes: 26, activities: d.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
    ],
    worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
  };
};
const act = (id, title, tool, task, teacher, levels, items) => ({ id, title, minutes: 0, tool, task, teacher, levels, items });
const ML = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
const LVF = { easy: { mode: 'fill', live: true }, base: { mode: 'fill' }, challenge: { mode: 'fill' } };
const GL = { easy: { mode: 'group', showCount: true, revealAfterCheck: true }, base: { mode: 'group' }, challenge: { mode: 'group' } };
const AL = { easy: { mode: 'array', showCounts: true }, base: { mode: 'array', showCounts: true }, challenge: { mode: 'array', showCounts: true } };
const TL = { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } };
const NJ = { easy: { mode: 'jump', labels: 'major', fixedFrom: 0, showValue: true }, base: { mode: 'jump', labels: 'major', fixedFrom: 0 }, challenge: { mode: 'jump', labels: 'ends', fixedFrom: 0 } };
const PL = { easy: { mode: 'fill' }, base: { mode: 'fill' }, challenge: { mode: 'fill', revealAfterCheck: true } };
const withX = (o, hints, x) => Object.assign(o, hints ? { hints } : {}, x || {});
const pk = (prompt, basket, cards, ans, d, hints, x) => {
  uniq(cards, prompt);
  return withX({ prompt, toolOptions: { mode: 'pick', basket, cards: cards.map((c, i) => ({ id: `k${i + 1}`, text: c })) }, target: { pick: [`k${cards.indexOf(ans) + 1}`] }, difficulty: d }, hints, x);
};
const pkm = (prompt, basket, cards, anss, d, hints, x) => {
  uniq(cards, prompt);
  return withX({ prompt, toolOptions: { mode: 'pick', basket, cards: cards.map((c, i) => ({ id: `k${i + 1}`, text: c })) }, target: { pick: anss.map((a) => `k${cards.indexOf(a) + 1}`) }, difficulty: d }, hints, x);
};
// 수 카드 가운데 조건(pred)에 맞는 것을 모두 고르기 — 정답은 pred 가 만든다
const pickBy = (prompt, basket, nums, pred, d, hints, x) => {
  const ans = nums.filter(pred).map(String);
  if (!ans.length || ans.length === nums.length) throw new Error('고를 카드가 없거나 전부임: ' + prompt);
  return pkm(prompt, basket, nums.map(String), ans, d, hints, x);
};
const isDiv = (n) => (c) => n % c === 0;
const isMul = (n) => (c) => c % n === 0;
const dvPick = (n, nums, d, hints, x) => pickBy(`${n}의 약수를 모두 골라 보세요.`, '약수', nums, isDiv(n), d, hints, x);
const cdPick = (a, b, nums, ctx, d, hints, x) => pickBy(`${ctx}${a}와 ${b}의 공약수를 모두 골라 보세요.`, '공약수', nums, (c) => a % c === 0 && b % c === 0, d, hints, x);
const mlPick = (k, nums, d, hints, x) => pickBy(`${k}의 배수를 모두 골라 보세요.`, '배수', nums, isMul(k), d, hints, x);
const cmPick = (a, b, nums, d, hints, x) => pickBy(`${a}와 ${b}의 공배수를 모두 골라 보세요.`, '공배수', nums, (c) => c % a === 0 && c % b === 0, d, hints, x);
// 최대공약수 고르기 / 최소공배수 고르기: wrongs 에 다른 공약수·공배수·곱을 섞어 둔다
const gcdPick = (prompt, a, b, wrongs, d, hints, x) => {
  const g = gcd(a, b);
  return pk(prompt, '최대공약수', uniq([g, ...wrongs].map(String), prompt), String(g), d, hints, x);
};
const lcmPick = (prompt, a, b, wrongs, d, hints, x) => {
  const m = lcm(a, b);
  return pk(prompt, '최소공배수', uniq([m, ...wrongs].map(String), prompt), String(m), d, hints, x);
};
// 칸 둘로 나누기: names 는 [참인 칸, 아닌 칸], pred 가 참이면 첫 칸
const sortBy = (prompt, names, nums, pred, d, hints, x) => {
  const g = { [names[0]]: [], [names[1]]: [] };
  nums.forEach((n) => g[pred(n) ? names[0] : names[1]].push(String(n)));
  if (!g[names[0]].length || !g[names[1]].length) throw new Error('한쪽 칸이 빔: ' + prompt);
  const cards = nums.map(String); uniq(cards, prompt);
  return withX({ prompt, toolOptions: { mode: 'sort', slots: names, cards }, target: { sort: g }, difficulty: d }, hints, x);
};
// 겹친 그림 대신 세 칸: a만 · 공통 · b만. kind 'div' 는 약수, 'mul' 은 배수
const venn = (a, b, nums, kind, d, hints, x) => {
  const w = kind === 'div' ? '약수' : '배수'; const test = kind === 'div' ? (n, k) => k % n === 0 : (n, k) => n % k === 0;
  const g = { [`${a}의 ${w}만`]: [], [`공${w}`]: [], [`${b}의 ${w}만`]: [] }; const keys = Object.keys(g);
  nums.forEach((n) => { const ia = test(n, a); const ib = test(n, b); if (!ia && !ib) throw new Error('어느 쪽도 아닌 카드: ' + n); g[keys[ia && ib ? 1 : ia ? 0 : 2]].push(String(n)); });
  keys.forEach((k) => { if (!g[k].length) throw new Error('빈 칸: ' + k); });
  const cards = nums.map(String); uniq(cards, `${a},${b}`);
  return withX({ prompt: `${a}와 ${b}의 ${w}를 알맞은 칸에 나누어 놓아 보세요.`, toolOptions: { mode: 'sort', slots: keys, cards }, target: { sort: g }, difficulty: d }, hints, x);
};
// 식(왼쪽 글)과 값(오른쪽 카드) 잇기: 칸·카드 id 를 글로 둔다(문항이 달라지면 target 도 달라진다)
const match = (prompt, pairs, extra, d, hints, x) => {
  const slots = pairs.map((p) => ({ id: p[0], label: p[0] }));
  const cards = pairs.map((p) => ({ id: p[1], text: p[1] })).concat((extra || []).map((t) => ({ id: t, text: t })));
  uniq(cards.map((c) => c.text), prompt); uniq(slots.map((s) => s.id), prompt);
  const m = {}; pairs.forEach((p) => { m[p[0]] = p[1]; });
  return withX({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match: m }, difficulty: d }, hints, x);
};
const sr = (prompt, groups, d, hints, x) => {
  const slots = Object.keys(groups); const cards = slots.flatMap((s) => groups[s]); uniq(cards, prompt);
  return withX({ prompt, toolOptions: { mode: 'sort', slots, cards }, target: { sort: groups }, difficulty: d }, hints, x);
};
const MOTIFS = ['sun', 'tree', 'flower', 'leaf', 'star', 'cloud'];
// 말풍선 빈칸: rows = [[이름, 글(___ 가 빈칸), 정답 수], …], extras = 함정 수
const fq = (prompt, rows, extras, d, x) => {
  const ans = rows.map((r) => String(r[2])); const ex = (extras || []).map(String);
  uniq(ans, prompt + ' 정답'); uniq([...ans, ...ex], prompt + ' 보기');
  return Object.assign({ prompt,
    toolOptions: { cards: [...ans, ...ex].map((n) => ({ id: n, text: n })), slots: rows.map((r, i) => ({ id: `b${i + 1}`, who: r[0], motif: MOTIFS[i], label: r[1] })) },
    target: { fill: Object.fromEntries(rows.map((r, i) => [`b${i + 1}`, ans[i]])) }, difficulty: d }, x || {});
};
// 나누기 빈칸: parts = [[이름, 나누어지는 수, 나누는 수, 뒤에 붙는 말?], …] — 몫이 자연수가 아니면 실패
const dq = (prompt, parts, extras, d, x) => fq(prompt, parts.map((p) => {
  if (p[1] % p[2]) throw new Error('나누어떨어지지 않음: ' + p[1] + '÷' + p[2]);
  return [p[0], `${p[1]} ÷ ${p[2]} = ___${p[3] || ''}`, p[1] / p[2]];
}), extras, d, x);
// 곱셈식 빈칸: rows = [[이름, n, a], …] → n = a × ___
const mq = (prompt, rows, extras, d, x) => fq(prompt, rows.map((r) => {
  if (r[1] % r[2]) throw new Error('곱셈식이 안 맞음: ' + r[1] + '/' + r[2]);
  return [r[0], `${r[1]} = ${r[2]} × ___`, r[1] / r[2]];
}), extras, d, x);
// 묶기: count 개를 size 개씩 묶어 묶음 수와 남는 수를 쓴다
const grp = (prompt, count, size, d, x) => Object.assign({ prompt, toolOptions: { count, maxSize: count, ask: 'groups', rest: true }, target: { size, answer: Math.floor(count / size), rest: count % size }, difficulty: d }, x || {});
// 배열: n 개를 r 줄 c 개씩
const arr = (prompt, n, r, c, d, x) => {
  if (r * c !== n) throw new Error('배열이 안 맞음: ' + n);
  return Object.assign({ prompt, toolOptions: { mode: 'array', maxRows: 10, maxCols: 10, showCounts: true }, target: { rows: r, cols: c, anyOrder: true }, difficulty: d }, x || {});
};
// 곱셈표: rowsOf 줄 머리(곱해지는 수), blanks 는 [[줄 머리, 곱하는 수], …] — 곱이 세 자리 수 이하
const tb = (prompt, rowsOf, blanks, d, x) => Object.assign({ prompt, toolOptions: { mode: 'table', rowsOf, colsOf: [1, 2, 3, 4, 5, 6, 7, 8, 9], blanks }, target: { cells: true }, difficulty: d }, x || {});
// 뛰어 세기: size 씩 count 번
const nj = (prompt, size, count, d, x) => Object.assign({ prompt, toolOptions: { min: 0, max: size * (count + 1), step: size, hopSize: size }, target: { from: 0, size, count }, difficulty: d }, x || {});
// 수 배열 빈칸: k 의 배수 8개 가운데 blanks(0부터 번호) 자리를 비운다
const pm = (prompt, k, blanks, d, x) => {
  const seq = Array.from({ length: 8 }, (_, i) => (blanks.includes(i) ? null : k * (i + 1)));
  return Object.assign({ prompt, toolOptions: { seq }, target: { fill: blanks.map((i) => k * (i + 1)) }, difficulty: d }, x || {});
};
const exPick = (prompt, basket, cards, ans, d, explain) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket, cards: uniq(cards, prompt).map((c, i) => ({ id: `k${i + 1}`, text: c })) }, prompt, target: { pick: [`k${cards.indexOf(ans) + 1}`] }, difficulty: d, explain });
const L = [];

// ───────────────────────────── 1차시 (intro · 약수의 뜻) ─────────────────────────────
L.push(lesson(1, {
  title: '사탕 12개를 남김없이 똑같이 묶는 수 찾기',
  objective: '어떤 수를 나누어떨어지게 하는 수가 그 수의 약수임을 알고, 주어진 수의 약수를 가려낼 수 있다.',
  desc: 'a girl packing twelve paper candies into small bags on a table with some bags exactly full and one bag with leftover candies while a rabbit counts the bags',
  text: '12는 4로 나누어떨어져요',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'flower', x: 370, y: 236 }, { motif: 'star', x: 250, y: 90 }],
  intro: ['"사탕 12개를 봉지에 똑같이 담으려고 해요. 한 봉지에 몇 개씩 담으면 남는 것 없이 딱 맞을까요?" 학생이 말하는 수를 칠판에 적고 12를 그 수로 나누어 보게 한다. 5개씩 담으면 2개가 남는다는 것을 직접 보여 주며, 남는 것이 없는 수만 약수라고 이름을 붙인다. 12의 약수에 12를 넣지 않는 학생에게는 12개를 한 봉지에 담아도 남지 않는다고 짚는다.',
    '사탕 12개를 남김없이 똑같이 담을 수 있는 봉지의 개수를 찾아 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 사탕을 묶어 남는지 보기', 'multiply', '사탕 12개를 정한 개수씩 묶고, 묶음 수와 남는 사탕을 써요. 남는 사탕이 없으면 나누어떨어지는 거예요.',
      '"12개를 3개씩 묶으면 몇 묶음이고 남는 것은 몇 개일까요?" 묶음을 손가락으로 세며 남는 것이 있는지 말하게 한다. 5개씩 묶었을 때 2개가 남는 것을 보고도 맞게 묶었다고 하는 학생에게는 남은 것이 0이어야 나누어떨어진다고 알려 준다.',
      GL, [
        grp('사탕 12개를 3개씩 묶어요. 묶음 수와 남는 사탕을 써 보세요.', 12, 3, 0.08, { conclude: '12를 3으로 나누면 남는 것이 없어서 3은 12의 약수예요.' }),
        grp('사탕 12개를 5개씩 묶어요. 묶음 수와 남는 사탕을 써 보세요.', 12, 5, 0.12, { conclude: '5개씩 묶으면 2개가 남아서 5는 12의 약수가 아니에요.' }),
        grp('사탕 12개를 6개씩 묶어요. 묶음 수와 남는 사탕을 써 보세요.', 12, 6, 0.12),
        grp('더 해 보기: 사탕 12개를 8개씩 묶어요. 묶음 수와 남는 사탕을 써 보세요.', 12, 8, 0.18, { extra: true }),
      ]),
    act('a2', '활동 2. 나누어떨어지는 수 모두 고르기', 'mindmap', '수 카드 가운데 어떤 수를 나누어떨어지게 하는 수를 모두 골라요.',
      '"15를 나누어떨어지게 하는 수를 찾아 봐요. 3은 15를 나누면 남나요?" 나눗셈을 말로 해 보며 남는지 판단하게 한다. 15를 3으로 나누는 대신 15에 3을 곱해서 45를 쓰는 학생에게는 나누어떨어지는지만 묻는다고 되짚는다.',
      ML('pick', '약수'), [
        dvPick(12, [2, 5, 6, 8, 9], 0.1, null, { conclude: '나누어떨어지게 하는 수가 약수예요. 12의 약수는 이 가운데 2와 6이에요.' }),
        dvPick(15, [3, 4, 5, 10], 0.14),
        dvPick(20, [4, 6, 8, 10, 15], 0.18),
        dvPick(18, [4, 6, 8, 9, 12], 0.22, null, { extra: true }),
      ]),
    act('a3', '활동 3. 약수인 수와 아닌 수로 나누기', 'mindmap', '수 카드를 약수이다 칸과 약수가 아니다 칸으로 나누어요. 1과 자기 자신도 잘 살펴요.',
      '"1은 16의 약수일까요, 16은 16의 약수일까요?" 16÷1=16, 16÷16=1이 남는 것 없이 나누어떨어짐을 말하게 한다. 1과 자기 자신은 약수가 아니라고 생각하는 학생에게는 나눗셈을 직접 해 보게 한다.',
      ML('sort', '약수 나누기'), [
        sortBy('16을 나누어떨어지게 하는 수인지 알맞은 칸에 놓아 보세요.', ['약수이다', '약수가 아니다'], [2, 3, 4, 6, 8, 16], isDiv(16), 0.14),
        sortBy('21을 나누어떨어지게 하는 수인지 알맞은 칸에 놓아 보세요.', ['약수이다', '약수가 아니다'], [1, 3, 5, 7, 14, 21], isDiv(21), 0.18),
        sortBy('30을 나누어떨어지게 하는 수인지 알맞은 칸에 놓아 보세요.', ['약수이다', '약수가 아니다'], [2, 4, 5, 6, 10, 12], isDiv(30), 0.22),
        sortBy('더 해 보기: 24를 나누어떨어지게 하는 수인지 알맞은 칸에 놓아 보세요.', ['약수이다', '약수가 아니다'], [3, 5, 6, 7, 8, 9, 12], isDiv(24), 0.26, null, { extra: true }),
      ]),
  ],
  wrap: ['"어떤 수의 약수는 어떤 수일까요?" 그 수를 나누어떨어지게 하는 수라고 한 문장으로 말하게 한다. 출구 1번에서 10을 고르지 않은 학생은 큰 수는 약수가 될 수 없다고 생각한 것이므로 다음 시간에 곱셈식으로 약수의 짝을 찾는 활동에서 20=2×10을 보여 준다.', [
    exPick('20의 약수를 모두 골라야 해요. 다음 중 20의 약수는 어느 것일까요?', '약수', ['6', '10', '15'], '10', 0.14, '20÷10=2로 나누어떨어지므로 10은 20의 약수예요.'),
    { type: 'choice', prompt: '어떤 수의 약수는 어떤 수일까요?', options: ['그 수를 나누어떨어지게 하는 수', '그 수에 곱한 수', '그 수보다 작은 모든 수'], answer: 0, difficulty: 0.1, explain: '나누었을 때 남는 것이 없으면 약수예요.' },
  ]],
  ws: { title: '나누어떨어지는 수 찾기', items: [
    { type: 'table', prompt: '12를 나누어 몫과 나머지를 쓰고 약수이면 ○ 하세요.', columns: ['나누는 수', '3', '5', '6', '8'], cells: [['몫과 나머지', '4 ··· 0', '', '', ''], ['약수인가요?', '○', '', '', '']], answer: `5: ${Math.floor(12 / 5)}···${12 % 5} ×, 6: ${12 / 6}···0 ○, 8: ${Math.floor(12 / 8)}···${12 % 8} ×` },
    { type: 'choice', prompt: '18의 약수에 모두 ○ 하세요.', options: ['4', '6', '9'], answer: '6, 9' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `15 ÷ 3 = ______ ··· ______ 이므로 3은 15의 ______이에요.`, answer: `${15 / 3}, 0, 약수` },
    { type: 'blank', prompt: '21의 약수를 모두 쓰세요.', text: '21의 약수: ______', answer: J(divs(21)) },
    { type: 'short', prompt: '1과 자기 자신이 항상 약수가 되는 까닭을 20을 예로 들어 써 보세요.' },
  ], easy: { note: '나누었을 때 나머지가 0이면 나누는 수는 약수예요. 1과 자기 자신도 약수예요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '8 ÷ 2 = 4 ··· 0 이므로 2는 8의 ______이에요.', answer: '약수' },
    { type: 'choice', prompt: '10을 나누어떨어지게 하는 수에 ○ 하세요.', options: ['5', '4'], answer: '5' },
    { type: 'table', prompt: '8의 약수를 모두 찾아 ○ 하세요.', columns: ['수', '1', '2', '3', '4'], cells: [['약수인가요?', '○', '', '', '']], answer: '1, 2, 4' },
    { type: 'draw', prompt: '구슬 8개를 남김없이 똑같이 나누는 방법을 그림으로 그려 보세요.' },
  ] } },
  diff: {
    easy: '사탕 묶음 수가 보이고 맞게 고르면 초록 테두리가 생겨요. 활동지는 나누는 식이 미리 써 있어요.',
    base: '묶어 보고 남는 수를 쓰고, 약수를 모두 고르고, 약수이다·아니다로 나눠요.',
    challenge: '수 카드가 더 많고 1과 자기 자신을 포함한 약수를 빠짐없이 찾아 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 1과 자기 자신을 약수에서 빼놓는다(16을 2, 4, 8로만) → 16÷1, 16÷16도 남는 것이 없어서 약수이다. ② 약수를 곱해서 얻는 수로 오해한다(15의 약수를 30, 45로) → 약수는 그 수를 나누어떨어지게 하는 수이고 그 수 이하이다. ③ 나머지가 0이 아닌데 약수라고 한다 → 나머지가 0일 때만 약수이다. 곱셈식으로 약수를 빠짐없이 찾는 일은 2차시에서 이어서 한다.',
}));

// ───────────────────────────── 2차시 (practice · 곱셈 짝으로 약수 찾기) ─────────────────────────────
L.push(lesson(2, {
  title: '곱셈식 짝으로 18의 약수 빠짐없이 찾기',
  objective: '곱이 어떤 수가 되는 두 수가 모두 그 수의 약수임을 알고, 곱셈식 짝을 이용해 약수를 빠짐없이 찾을 수 있다.',
  desc: 'a boy arranging eighteen paper stones into neat rectangles of different shapes on a green mat while a rabbit writes each multiplication pair on a card',
  text: '18 = 2 × 9',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"바둑돌 18개를 빈틈없이 직사각형으로 놓으려고 해요. 몇 줄에 몇 개씩 놓을 수 있을까요?" 학생이 말한 줄 수와 개수를 곱셈식으로 칠판에 쓴다. 2×9=18이면 2와 9가 모두 18의 약수라는 것을 짚는다. 약수를 작은 쪽만 적는 학생에게는 곱셈식 짝의 큰 쪽도 약수라고 알려 준다.',
    '18을 곱셈식으로 나타내면 어떤 두 수의 곱이 될 수 있는지 찾아 짝과 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 바둑돌을 직사각형으로 놓기', 'multiply', '바둑돌을 줄과 칸으로 빈틈없이 놓아 곱셈식을 만들어요. 줄 수와 칸 수가 모두 약수예요.',
      '"18개를 2줄로 놓으면 한 줄에 몇 개일까요?" 곱셈식으로 말하게 한다. 18개를 4줄로 놓아 한 줄에 4개를 만들고 빈자리를 남기는 학생에게는 18÷4가 나누어떨어지지 않는다고 짚는다.',
      AL, [
        arr('바둑돌 18개를 빈틈없이 2줄로 놓아 보세요. 한 줄에 몇 개일까요?', 18, 2, 9, 0.1, { conclude: '2×9=18이라서 2와 9는 모두 18의 약수예요.' }),
        arr('바둑돌 18개를 빈틈없이 3줄로 놓아 보세요. 한 줄에 몇 개일까요?', 18, 3, 6, 0.12),
        arr('바둑돌 24개를 빈틈없이 4줄로 놓아 보세요. 한 줄에 몇 개일까요?', 24, 4, 6, 0.16),
        arr('더 해 보기: 바둑돌 30개를 빈틈없이 5줄로 놓아 보세요. 한 줄에 몇 개일까요?', 30, 5, 6, 0.2, { extra: true }),
      ]),
    act('a2', '활동 2. 곱셈식 빈칸 채우기', 'mindmap', '곱셈식의 빈칸에 알맞은 수 카드를 넣어 약수의 짝을 찾아요.',
      '"18 = 2 × ___에서 빈칸에는 어떤 수가 들어갈까요?" 18을 2로 나눈 몫이라고 말하게 한다. 18=2×16으로 더해서 18이 되게 하는 학생에게는 곱해서 18이 되는 수라고 짚는다.',
      LVF, [
        mq('곱셈식의 빈칸에 알맞은 수 카드를 넣어 보세요.', [['민지', 18, 2], ['준호', 18, 3]], [5, 8], 0.12),
        mq('곱셈식의 빈칸에 알맞은 수 카드를 넣어 보세요.', [['민지', 24, 3], ['준호', 24, 4]], [12], 0.16),
        mq('곱셈식의 빈칸에 알맞은 수 카드를 넣어 보세요.', [['민지', 30, 5], ['준호', 30, 6]], [10], 0.2),
        mq('더 해 보기: 곱셈식의 빈칸에 알맞은 수 카드를 넣어 보세요.', [['민지', 36, 4], ['준호', 36, 6]], [12], 0.24, { extra: true }),
      ]),
    act('a3', '활동 3. 빠뜨리지 않고 약수 모두 고르기', 'mindmap', '수 카드 가운데 약수를 모두 골라요. 1과 자기 자신, 곱셈식의 큰 쪽 수도 빠뜨리지 않아요.',
      '"28의 약수는 1×28, 2×14, 4×7의 짝으로 찾아요. 그러면 약수는 모두 몇 개일까요?" 짝마다 두 수를 적게 한다. 1, 2, 4, 7만 쓰는 학생에게는 곱셈식의 큰 쪽 14, 28도 약수라고 짚는다.',
      ML('pick', '약수'), [
        dvPick(28, [1, 3, 4, 7, 14, 20, 28], 0.14),
        dvPick(32, [1, 2, 4, 6, 8, 16, 32], 0.18),
        dvPick(45, [1, 3, 5, 9, 12, 15, 45], 0.22),
        dvPick(40, [1, 3, 5, 8, 10, 20, 40], 0.26, null, { extra: true }),
      ]),
  ],
  wrap: ['"약수를 빠짐없이 찾으려면 어떻게 하면 좋을까요?" 곱이 그 수가 되는 짝을 모두 찾아 두 수를 다 쓴다고 말하게 한다. 출구 1번에서 9를 고르지 않은 학생은 짝의 큰 쪽을 빠뜨린 것이므로 다음 시간에 두 수의 약수를 나란히 쓸 때 짝을 함께 쓰게 한다.', [
    exPick('36의 약수를 모두 쓸 때 4와 짝이 되는 약수는 얼마일까요?', '약수', ['6', '9', '12'], '9', 0.18, '36÷4=9이므로 4와 9가 짝을 이루는 약수예요.'),
    { type: 'choice', prompt: '곱셈식 24 = 3 × 8에서 3과 8은 24의 무엇일까요?', options: ['모두 약수', '3만 약수', '8만 약수'], answer: 0, difficulty: 0.12, explain: '곱해서 24가 되는 두 수는 모두 24의 약수예요.' },
  ]],
  ws: { title: '곱셈식으로 약수 찾기', items: [
    { type: 'table', prompt: '곱해서 20이 되는 두 수를 써서 20의 약수를 모두 찾으세요.', columns: ['곱셈식', '1 × 20', '2 × ___', '4 × ___'], cells: [['약수', '1, 20', '', '']], answer: `2, ${20 / 2}, 4, ${20 / 4}` },
    { type: 'choice', prompt: '24의 약수가 아닌 수에 ○ 하세요.', options: ['6', '8', '9'], answer: '9' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `30 = 5 × ______ 이므로 5와 ______ 은 30의 약수예요.`, answer: `${30 / 5}, ${30 / 5}` },
    { type: 'blank', prompt: '36의 약수를 모두 쓰세요.', text: '36의 약수: ______', answer: J(divs(36)) },
    { type: 'short', prompt: '약수를 곱셈식 짝으로 찾으면 빠뜨리지 않는 까닭을 써 보세요.' },
  ], easy: { note: '곱해서 어떤 수가 되는 두 수는 모두 그 수의 약수예요. 1과 자기 자신의 짝도 써요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '12 = 3 × ______ 이므로 3과 ______ 은 12의 약수예요.', answer: `${12 / 3}, ${12 / 3}` },
    { type: 'choice', prompt: '10의 약수에 모두 ○ 하세요.', options: ['2', '3', '5'], answer: '2, 5' },
    { type: 'table', prompt: '곱해서 10이 되는 짝을 써 보세요.', columns: ['곱셈식', '1 × 10', '2 × ___'], cells: [['약수', '1, 10', '']], answer: `2, ${10 / 2}` },
    { type: 'draw', prompt: '바둑돌 12개를 빈틈없이 직사각형으로 놓는 방법을 그림으로 그려 보세요.' },
  ] } },
  diff: {
    easy: '줄 수가 정해져 있고 칸 수만 구해요. 카드를 맞게 고르면 초록 테두리가 생겨요.',
    base: '곱셈식의 빈칸을 채워 짝을 찾고 약수를 모두 골라요.',
    challenge: '곱셈식 짝이 세 쌍 이상 있는 수(32, 40)의 약수를 빠짐없이 찾아요.',
  },
  notes: '자주 보이는 어려움: ① 곱셈식의 큰 쪽을 약수로 쓰지 않는다(28의 약수를 1, 2, 4, 7만) → 곱해서 28이 되는 두 수는 모두 약수이다. ② 곱해서 맞지 않는 수를 짝으로 쓴다(18 = 4 × 4) → 직접 곱해 18이 되는지 확인한다. ③ 짝을 하나만 찾고 멈춘다 → 작은 수부터 1, 2, 3 …으로 하나씩 나누어 본다. 두 수의 약수를 나란히 비교하는 일은 3차시에서 이어서 한다.',
}));

// ───────────────────────────── 3차시 (core · 겹친 약수 그림) ─────────────────────────────
L.push(lesson(3, {
  title: '12와 18의 약수를 세 칸에 나누어 쓰기',
  objective: '두 수의 약수를 하나는 첫째 수만, 하나는 둘째 수만, 하나는 두 수 모두의 칸으로 나누어 공약수의 자리를 나타낼 수 있다.',
  desc: 'two overlapping paper circles on a board, one holding the divisors of twelve and the other the divisors of eighteen, with shared number cards sitting in the overlapped part while a rabbit points at them',
  text: '겹친 곳은 공약수',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'flower', x: 370, y: 236 }, { motif: 'star', x: 250, y: 90 }],
  intro: ['"12의 약수와 18의 약수를 한꺼번에 놓으려고 해요. 두 곳에 모두 들어가는 수가 있을까요?" 12의 약수 1, 2, 3, 4, 6, 12와 18의 약수 1, 2, 3, 6, 9, 18을 칠판에 나란히 쓴다. 두 줄에 모두 있는 수에 같은 색으로 표시하게 하고 그 수를 공약수라고 부른다. 4처럼 한쪽에만 있는 수를 공약수라고 하는 학생에게는 18을 4로 나누어 보게 한다.',
    '12의 약수와 18의 약수를 나란히 쓰면 두 줄에 모두 있는 수는 무엇일까요? 짝과 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 12와 18의 약수 세 칸에 나누기', 'mindmap', '수 카드를 12의 약수만, 공약수, 18의 약수만 세 칸으로 나누어요.',
      '"6은 12의 약수이면서 18의 약수예요. 어느 칸에 들어갈까요?" 두 수를 모두 나누어떨어지게 하는지 확인하게 한다. 4를 가운데 칸에 놓는 학생에게는 18을 4로 나누면 2가 남는다고 보여 준다.',
      ML('sort', '약수 나누기'), [
        venn(12, 18, [1, 2, 4, 6, 9, 12, 18], 'div', 0.14, null, { conclude: '두 칸에 모두 있는 1, 2, 6은 12와 18의 공약수예요.' }),
        venn(20, 30, [2, 3, 4, 5, 10, 15, 20], 'div', 0.18),
        venn(16, 24, [1, 3, 4, 6, 8, 12, 16], 'div', 0.22),
        venn(28, 42, [2, 3, 4, 7, 14, 21, 28], 'div', 0.26, null, { extra: true }),
      ]),
    act('a2', '활동 2. 공약수 중 가장 큰 수 고르기', 'mindmap', '두 수의 공약수 가운데 가장 큰 수를 골라요. 한쪽의 약수 중 큰 수는 공약수가 아닐 수 있어요.',
      '"12와 18의 공약수는 1, 2, 3, 6이에요. 그 가운데 가장 큰 수는요?" 6이라고 말한 뒤 최대공약수라고 이름 붙인다. 12를 고르는 학생에게는 18이 12로 나누어떨어지는지 물어본다.',
      ML('pick', '최대공약수'), [
        gcdPick('12와 18의 공약수 중 가장 큰 수를 고르세요.', 12, 18, [3, 12], 0.14),
        gcdPick('20과 30의 공약수 중 가장 큰 수를 고르세요.', 20, 30, [5, 15], 0.18),
        gcdPick('16과 24의 공약수 중 가장 큰 수를 고르세요.', 16, 24, [4, 12], 0.22),
        gcdPick('더 해 보기: 28과 42의 공약수 중 가장 큰 수를 고르세요.', 28, 42, [7, 21], 0.26, null, { extra: true }),
      ]),
    act('a3', '활동 3. 두 수와 공약수 이어 보기', 'mindmap', '두 수와 그 두 수의 공약수를 모두 쓴 카드를 이어요. 함정 카드는 한 수의 약수를 모두 쓴 것이에요.',
      '"12와 18의 공약수는 두 수의 약수 중 겹치는 것만 써요." 겹치는 수에만 표시하게 한다. 18의 약수 전부를 고르는 학생에게는 12로도 나누어떨어지는 수만 골라야 한다고 짚는다.',
      ML('match', '공약수'), [
        match('두 수와 두 수의 공약수를 이어 보세요.', [[ '12와 18', J(divs(gcd(12, 18)).filter((d) => 12 % d === 0 && 18 % d === 0)) ], ['20과 30', J(divs(10))], ['16과 24', J(divs(8))]], [J(divs(18))], 0.16),
        match('두 수와 두 수의 공약수를 이어 보세요.', [['28과 42', J(divs(14))], ['24와 36', J(divs(12))], ['18과 27', J(divs(9))]], [J(divs(42))], 0.2),
        match('두 수와 두 수의 공약수를 이어 보세요.', [['36과 48', J(divs(12))], ['15와 25', J(divs(5))], ['32와 40', J(divs(8))]], [J(divs(48))], 0.24),
        match('더 해 보기: 두 수와 두 수의 공약수를 이어 보세요.', [['24와 40', J(divs(8))], ['21과 35', J(divs(7))], ['27과 36', J(divs(9))]], [J(divs(40))], 0.28, null, { extra: true }),
      ]),
  ],
  wrap: ['"두 수의 약수를 세 칸에 나누면 가운데 칸에는 어떤 수가 들어가나요?" 두 수를 모두 나누어떨어지게 하는 수, 곧 공약수라고 말하게 한다. 출구 1번에서 4를 고른 학생은 한쪽의 약수를 공약수로 본 것이므로 다음 시간에 공약수를 모두 고르는 문제에서 두 수로 각각 나눠 보게 한다.', [
    exPick('18과 30의 공약수를 고르세요.', '공약수', ['4', '5', '6'], '6', 0.16, '18÷6=3, 30÷6=5라서 6은 두 수의 공약수예요.'),
    { type: 'choice', prompt: '공약수는 어떤 수일까요?', options: ['두 수의 약수 가운데 같은 수', '두 수를 곱한 수', '두 수 가운데 큰 수'], answer: 0, difficulty: 0.1, explain: '두 수를 모두 나누어떨어지게 하는 수가 공약수예요.' },
  ]],
  ws: { title: '두 수의 약수와 공약수', items: [
    { type: 'table', prompt: '12와 18의 약수를 쓰고 공약수에 ○ 하세요.', columns: ['수', '약수'], cells: [['12', J(divs(12))], ['18', ''], ['공약수', '']], answer: `18: ${J(divs(18))}, 공약수: 1, 2, 3, 6` },
    { type: 'choice', prompt: '20과 30의 공약수에 모두 ○ 하세요.', options: ['2', '4', '5'], answer: '2, 5' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `16과 24의 공약수 중 가장 큰 수를 ______ 라고 하고 그 수는 ______ 이에요.`, answer: `최대공약수, ${gcd(16, 24)}` },
    { type: 'blank', prompt: '두 수의 공약수를 모두 쓰세요.', text: `28과 42의 공약수: ______`, answer: J(divs(14)) },
    { type: 'short', prompt: '12의 약수이지만 18의 약수가 아닌 수를 하나 찾아 까닭을 써 보세요.' },
  ], easy: { note: '두 수를 모두 나누어떨어지게 하는 수가 공약수예요. 그중 가장 큰 수가 최대공약수예요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `6의 약수: 1, 2, 3, 6 / 9의 약수: 1, 3, 9 → 공약수: ______`, answer: '1, 3' },
    { type: 'choice', prompt: '8과 12의 공약수에 ○ 하세요.', options: ['2', '3'], answer: '2' },
    { type: 'table', prompt: '10과 15의 공약수에 ○ 하세요.', columns: ['수', '1', '2', '5'], cells: [['공약수인가요?', '', '', '']], answer: '1, 5' },
    { type: 'draw', prompt: '두 원이 겹친 그림을 그리고 겹친 곳에 4와 6의 공약수를 써 보세요.' },
  ] } },
  diff: {
    easy: '약수 카드가 적고 맞게 놓으면 초록 테두리가 생겨요. 활동지는 약수가 미리 써 있어요.',
    base: '세 칸에 직접 나누고 가장 큰 공약수를 고르고 공약수를 이어 보아요.',
    challenge: '수가 큰 두 수(36과 48, 28과 42)의 공약수를 약수를 모두 쓰지 않고 찾아요.',
  },
  notes: '자주 보이는 어려움: ① 가운데 칸에 두 수의 곱이나 배수를 적는다 → 가운데 칸은 두 수를 나누어떨어지게 하는 수(약수)이다. ② 한쪽 수의 약수 가운데 큰 수를 최대공약수로 고른다(12와 18에서 12) → 18을 12로 나누면 남는다. ③ 1을 공약수에서 빼놓는다 → 1은 모든 수의 약수이다. 공약수 중 가장 큰 수를 찾는 연습은 4차시에서 이어서 한다.',
}));

// ───────────────────────────── 4차시 (practice · 최대공약수 찾기) ─────────────────────────────
L.push(lesson(4, {
  title: '공약수를 모두 찾고 가장 큰 수에 표시하기',
  objective: '두 수의 공약수를 모두 찾아 그중 가장 큰 수가 최대공약수임을 말하고 구할 수 있다.',
  desc: 'a girl sorting numbered paper cards into three trays labeled with two numbers and a shared tray while a rabbit marks the biggest shared card with a star',
  text: '가장 큰 공약수 ★',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"24와 36의 공약수를 찾으려면 어떻게 하면 좋을까요?" 24의 약수를 먼저 쓰고 그중 36을 나누어떨어지게 하는 수만 남기는 방법을 보여 준다. 36의 약수 전체를 쓰지 않아도 공약수를 찾을 수 있다고 말한다. 24의 약수 중 8을 36으로도 나누어떨어진다고 생각하는 학생에게는 36÷8을 직접 해 보게 한다.',
    '두 수의 공약수를 빠짐없이 찾는 방법을 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 공약수 모두 고르기', 'mindmap', '수 카드 가운데 두 수의 공약수를 모두 골라요. 한 수로만 나누어떨어지는 수는 공약수가 아니에요.',
      '"24와 36을 모두 나누어떨어지게 하는 수를 찾아요. 12는 어떨까요?" 24÷12와 36÷12를 말하게 한다. 8을 고르는 학생에게는 36을 8로 나눈 나머지를 구하게 한다.',
      ML('pick', '공약수'), [
        cdPick(24, 36, [2, 5, 8, 9, 12], '', 0.14),
        cdPick(30, 40, [2, 4, 5, 6, 10], '', 0.18),
        cdPick(18, 45, [3, 5, 6, 9, 15], '', 0.22),
        cdPick(27, 36, [3, 6, 9, 12, 18], '', 0.26, null, { extra: true }),
      ]),
    act('a2', '활동 2. 약수를 세 칸에 나누기', 'mindmap', '수 카드를 첫째 수의 약수만, 공약수, 둘째 수의 약수만 세 칸으로 나누어요.',
      '"18과 27의 공약수 1, 3, 9를 가운데 칸에 놓아요." 두 수로 모두 나누는지 확인하며 놓게 한다. 2를 가운데 칸에 놓는 학생에게는 27을 2로 나누면 1이 남는다고 짚는다.',
      ML('sort', '약수 나누기'), [
        venn(18, 27, [1, 2, 3, 6, 9, 18, 27], 'div', 0.14),
        venn(24, 32, [1, 2, 3, 4, 8, 12, 16], 'div', 0.18),
        venn(30, 45, [1, 2, 3, 5, 9, 15, 30], 'div', 0.22),
        venn(36, 60, [2, 3, 4, 9, 12, 18, 20], 'div', 0.26, null, { extra: true }),
      ]),
    act('a3', '활동 3. 최대공약수 고르기', 'mindmap', '두 수의 공약수 가운데 가장 큰 수를 골라요. 한쪽 수의 큰 약수는 공약수가 아닐 수 있어요.',
      '"24와 36의 공약수는 1, 2, 3, 4, 6, 12예요. 가장 큰 수는요?" 12라고 말하게 한다. 한쪽 수의 가장 큰 약수 24를 고르는 학생에게는 36이 24로 나누어떨어지는지 물어본다.',
      ML('pick', '최대공약수'), [
        gcdPick('24와 36의 최대공약수를 고르세요.', 24, 36, [6, 18], 0.16),
        gcdPick('30과 40의 최대공약수를 고르세요.', 30, 40, [5, 20], 0.2),
        gcdPick('18과 45의 최대공약수를 고르세요.', 18, 45, [3, 15], 0.24),
        gcdPick('더 해 보기: 27과 36의 최대공약수를 고르세요.', 27, 36, [3, 18], 0.28, null, { extra: true }),
      ]),
  ],
  wrap: ['"최대공약수는 어떤 수일까요? 어떻게 찾았나요?" 두 수의 공약수 가운데 가장 큰 수이고 한쪽 수의 약수를 쓴 뒤 다른 수로 나눠 본다고 말하게 한다. 출구 1번에서 15를 고른 학생은 한쪽의 약수를 최대공약수로 본 것이므로 다음 시간 이야기 문제에서 두 수로 모두 나눠 보게 한다.', [
    exPick('45와 60의 최대공약수를 고르세요.', '최대공약수', [String(gcd(45, 60)), '5', '30'], String(gcd(45, 60)), 0.2, '45와 60을 모두 나누어떨어지게 하는 가장 큰 수는 15예요.'),
    { type: 'choice', prompt: '최대공약수는 공약수 가운데 어떤 수일까요?', options: ['가장 큰 수', '가장 작은 수', '두 수를 곱한 수'], answer: 0, difficulty: 0.08, explain: '공약수 가운데 가장 큰 수가 최대공약수예요.' },
  ]],
  ws: { title: '공약수와 최대공약수 찾기', items: [
    { type: 'table', prompt: '24와 36의 약수를 쓰고 공약수에 ○ 하세요.', columns: ['수', '약수'], cells: [['24', J(divs(24))], ['36', ''], ['공약수', '']], answer: `36: ${J(divs(36))}, 공약수: 1, 2, 3, 4, 6, 12` },
    { type: 'choice', prompt: '30과 40의 최대공약수에 ○ 하세요.', options: ['5', '10', '20'], answer: '10' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `18과 45의 공약수는 ______ 이고 최대공약수는 ______ 이에요.`, answer: `1, 3, 9, ${gcd(18, 45)}` },
    { type: 'blank', prompt: '27과 36의 최대공약수를 구하세요.', text: `최대공약수: ______`, answer: String(gcd(27, 36)) },
    { type: 'short', prompt: '두 수의 최대공약수를 찾는 방법을 순서대로 써 보세요.' },
  ], easy: { note: '작은 수의 약수를 먼저 쓰고 큰 수로도 나누어떨어지는지 보아요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `6과 9의 공약수: 1, ______ 최대공약수: ______`, answer: `3, ${gcd(6, 9)}` },
    { type: 'choice', prompt: '8과 12의 최대공약수에 ○ 하세요.', options: ['2', '4'], answer: '4' },
    { type: 'table', prompt: '10과 15의 공약수에 ○ 하세요.', columns: ['수', '1', '2', '5'], cells: [['공약수', '', '', '']], answer: '1, 5' },
    { type: 'draw', prompt: '두 수 8과 12의 공약수를 찾는 과정을 그림이나 표로 나타내 보세요.' },
  ] } },
  diff: {
    easy: '수 카드가 적고 맞게 고르면 초록 테두리가 생겨요. 활동지는 약수가 미리 써 있어요.',
    base: '공약수를 고르고 세 칸에 나누어 최대공약수를 고르세요.',
    challenge: '수가 큰 두 수(36과 60, 45와 60)의 최대공약수를 약수를 모두 쓰지 않고 구해요.',
  },
  notes: '자주 보이는 어려움: ① 한쪽 수의 가장 큰 약수를 최대공약수로 쓴다(24와 36에서 24) → 다른 수로도 나누어떨어져야 한다. ② 공약수를 하나만 찾고 멈춘다 → 작은 약수부터 하나씩 두 수에 나누어 본다. ③ 1을 빼먹어 공약수가 없다고 한다 → 1은 언제나 공약수이다. 이 약수로 사람 수를 구하는 이야기 문제는 5차시에서 이어서 한다.',
}));

// ───────────────────────────── 5차시 (core · 남김없이 똑같이 나누는 사람 수) ─────────────────────────────
const shareQ = (what, a, b, nums, d, x) => pickBy(`${what} 남김없이 똑같이 나누어 줄 수 있는 사람 수를 모두 고르세요.`, '사람 수', nums, (c) => a % c === 0 && b % c === 0, d, null, x);
L.push(lesson(5, {
  title: '사탕 36개와 초콜릿 48개를 남김없이 나누어 줄 사람 수',
  objective: '두 가지 물건을 남김없이 똑같이 나누는 상황에서 나눌 수 있는 사람 수가 공약수이고, 가장 많은 사람 수가 최대공약수임을 알고 구할 수 있다.',
  desc: 'a rabbit teacher handing paper candies and chocolates into equal gift bags laid out in a row on a table while children check that nothing is left over',
  text: '남김없이 똑같이',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'flower', x: 370, y: 236 }, { motif: 'star', x: 250, y: 90 }],
  intro: ['"사탕 36개와 초콜릿 48개를 몇 명에게 남김없이 똑같이 나누어 줄 수 있을까요?" 학생이 말하는 사람 수마다 36과 48을 각각 나누어 보게 한다. 사탕은 9명에게 나누어떨어지지만 초콜릿은 3개가 남는 것을 보여 주며 두 가지 모두 나누어떨어져야 한다고 짚는다. 가장 많은 사람 수를 찾는 문제인데 두 수를 곱하는 학생에게는 곱하면 사람 수가 물건 수보다 커진다고 알려 준다.',
    '두 가지 물건을 모두 남김없이 나누려면 사람 수가 어떤 수여야 할지 짝과 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 나누어 줄 수 있는 사람 수 모두 고르기', 'mindmap', '두 물건을 모두 남김없이 똑같이 나눌 수 있는 사람 수를 모두 골라요.',
      '"36개와 48개를 모두 12명에게 나누면 남을까요?" 36÷12와 48÷12를 각각 말하게 한다. 사탕만 나누어떨어지는 9를 고르는 학생에게는 초콜릿을 9로 나눈 나머지를 구하게 한다.',
      ML('pick', '사람 수'), [
        shareQ('사탕 36개와 초콜릿 48개를', 36, 48, [5, 6, 8, 9, 12], 0.14, { conclude: '두 수를 모두 나누어떨어지게 하는 6과 12가 나누어 줄 수 있는 사람 수예요.' }),
        shareQ('연필 24자루와 지우개 40개를', 24, 40, [3, 4, 6, 8, 10], 0.18),
        shareQ('구슬 30개와 사탕 45개를', 30, 45, [3, 5, 6, 9, 15], 0.22),
        shareQ('더 해 보기: 색종이 28장과 풀 42개를', 28, 42, [2, 4, 7, 10, 14], 0.26, { extra: true }),
      ]),
    act('a2', '활동 2. 가장 많은 사람 수 고르기', 'mindmap', '남김없이 똑같이 나눌 수 있는 가장 많은 사람 수를 골라요. 두 수의 곱처럼 큰 수는 사람 수가 될 수 없어요.',
      '"가장 많은 사람이 받으려면 공약수 중 어느 것일까요?" 최대공약수를 말하게 한다. 가장 많은 사람이라서 가장 큰 수를 곱한 값으로 답하는 학생에게는 사람 수가 물건 수 이하여야 한다고 짚는다.',
      ML('pick', '최대공약수'), [
        gcdPick('사탕 36개와 초콜릿 48개를 남김없이 똑같이 나누어 줄 수 있는 가장 많은 사람 수를 고르세요.', 36, 48, [lcm(36, 48), 6], 0.16),
        gcdPick('연필 24자루와 지우개 40개를 남김없이 똑같이 나누어 줄 수 있는 가장 많은 사람 수를 고르세요.', 24, 40, [lcm(24, 40), 4], 0.2),
        gcdPick('구슬 30개와 사탕 45개를 남김없이 똑같이 나누어 줄 수 있는 가장 많은 사람 수를 고르세요.', 30, 45, [lcm(30, 45), 5], 0.24),
        gcdPick('더 해 보기: 색종이 28장과 풀 42개를 남김없이 똑같이 나누어 줄 수 있는 가장 많은 사람 수를 고르세요.', 28, 42, [lcm(28, 42), 7], 0.28, null, { extra: true }),
      ]),
    act('a3', '활동 3. 한 명이 받는 개수 구하기', 'mindmap', '가장 많은 사람에게 나눌 때 한 명이 받는 개수를 말풍선 빈칸에 넣어요.',
      '"12명에게 나누면 사탕은 한 명에게 몇 개일까요?" 36÷12의 몫을 말하게 한다. 사람 수 12를 한 명이 받는 개수로 쓰는 학생에게는 나눈 몫이 한 명 몫이라고 짚는다.',
      LVF, [
        dq('사탕 36개와 초콜릿 48개를 12명에게 똑같이 나누어요. 한 명이 받는 개수를 넣어 보세요.', [['사탕', 36, 12, '개'], ['초콜릿', 48, 12, '개']], [2, 6], 0.16),
        dq('연필 24자루와 지우개 40개를 8명에게 똑같이 나누어요. 한 명이 받는 개수를 넣어 보세요.', [['연필', 24, 8, '자루'], ['지우개', 40, 8, '개']], [2, 6], 0.2),
        dq('구슬 30개와 사탕 45개를 15명에게 똑같이 나누어요. 한 명이 받는 개수를 넣어 보세요.', [['구슬', 30, 15, '개'], ['사탕', 45, 15, '개']], [1, 5], 0.24),
        dq('더 해 보기: 색종이 28장과 풀 42개를 14명에게 똑같이 나누어요. 한 명이 받는 개수를 넣어 보세요.', [['색종이', 28, 14, '장'], ['풀', 42, 14, '개']], [1, 7], 0.28, null, { extra: true }),
      ]),
  ],
  wrap: ['"남김없이 똑같이 나누는 가장 많은 사람 수는 어떤 수일까요?" 두 수의 최대공약수라고 말하게 한다. 출구 1번에서 두 수의 곱 1008을 고른 학생은 가장 많다는 말만 보고 큰 수를 찾은 것이므로 다음 시간에 사람 수가 물건 수 이하라는 점을 먼저 짚게 한다.', [
    exPick('공책 18권과 연필 30자루를 남김없이 똑같이 나누어 줄 수 있는 가장 많은 사람 수를 고르세요.', '최대공약수', [String(gcd(18, 30)), String(lcm(18, 30)), '3'], String(gcd(18, 30)), 0.2, '18과 30을 모두 나누어떨어지게 하는 가장 큰 수는 6이에요.'),
    { type: 'choice', prompt: '두 가지 물건을 남김없이 똑같이 나눌 수 있는 사람 수는 어떤 수일까요?', options: ['두 수의 공약수', '두 수를 곱한 수', '두 수의 합'], answer: 0, difficulty: 0.1, explain: '두 수를 모두 나누어떨어지게 하는 수가 공약수예요.' },
  ]],
  ws: { title: '남김없이 똑같이 나누기', items: [
    { type: 'table', prompt: '사탕 36개와 초콜릿 48개를 나누어 보고 알맞게 쓰세요.', columns: ['사람 수', '6', '9', '12'], cells: [['사탕이 남나요?', '아니요', '', ''], ['초콜릿이 남나요?', '아니요', '', ''], ['나눌 수 있나요?', '○', '', '']], answer: '9: 사탕 남지 않음, 초콜릿 3개 남음 ×, 12: ○' },
    { type: 'choice', prompt: '24자루와 40개를 나눌 수 있는 가장 많은 사람 수에 ○ 하세요.', options: ['4', '8', '120'], answer: '8' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `30과 45의 최대공약수는 ______ 이므로 구슬은 한 명에게 ______ 개, 사탕은 ______ 개씩이에요.`, answer: `${gcd(30, 45)}, ${30 / gcd(30, 45)}, ${45 / gcd(30, 45)}` },
    { type: 'blank', prompt: '색종이 28장과 풀 42개를 나눌 수 있는 사람 수를 모두 쓰세요.', text: '사람 수: ______', answer: J(divs(14)) },
    { type: 'short', prompt: '가장 많은 사람에게 나누어 주는 문제를 최대공약수로 푸는 까닭을 써 보세요.' },
  ], easy: { note: '두 수를 모두 나누어떨어지게 하는 수가 나눌 수 있는 사람 수예요. 가장 많은 사람 수는 그중 가장 큰 수예요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `사탕 12개와 초콜릿 18개를 6명에게 나누면 한 명에게 사탕 ______ 개, 초콜릿 ______ 개예요.`, answer: `${12 / 6}, ${18 / 6}` },
    { type: 'choice', prompt: '8개와 12개를 남김없이 나눌 수 있는 사람 수에 ○ 하세요.', options: ['4', '5'], answer: '4' },
    { type: 'table', prompt: '10개와 15개를 나눌 수 있는 사람 수에 ○ 하세요.', columns: ['사람 수', '2', '3', '5'], cells: [['나눌 수 있나요?', '', '', '']], answer: '5' },
    { type: 'draw', prompt: '사탕 8개와 초콜릿 12개를 4명에게 똑같이 나누는 그림을 그려 보세요.' },
  ] } },
  diff: {
    easy: '사람 수 카드가 적고 맞게 고르면 초록 테두리가 생겨요. 활동지는 나누는 식이 미리 써 있어요.',
    base: '나눌 수 있는 사람 수를 모두 고르고 가장 많은 사람 수와 한 명이 받는 개수를 구해요.',
    challenge: '수가 큰 두 수(30과 45, 28과 42)로 사람 수를 구하고 한 명이 받는 개수까지 확인해요.',
  },
  notes: '자주 보이는 어려움: ① 한 가지 물건만 나누어떨어지는 수를 고른다(36에서 9) → 두 물건을 모두 나누어떨어지게 해야 한다. ② 가장 많은 사람 수 문제에 두 수의 곱이나 최소공배수를 쓴다 → 사람 수는 물건 수 이하이므로 최대공약수이다. ③ 한 명이 받는 개수를 구하지 않고 사람 수로 답한다 → 몫이 한 명 몫이다. 남김없이 나누는 다른 상황은 6차시에서 이어서 한다.',
}));

// ───────────────────────────── 6차시 (practice · 가장 큰 정사각형) ─────────────────────────────
const squareQ = (a, b, wrongs, d, x) => gcdPick(`가로 ${a}cm, 세로 ${b}cm인 직사각형 색종이를 남는 부분 없이 가장 큰 정사각형으로 자르려고 해요. 정사각형 한 변의 길이(cm)를 고르세요.`, a, b, wrongs, d, null, x);
L.push(lesson(6, {
  title: '직사각형 색종이를 가장 큰 정사각형으로 자르기',
  objective: '직사각형을 남는 부분 없이 같은 크기의 정사각형으로 자를 때 한 변의 길이가 두 변의 공약수이고, 가장 큰 정사각형의 한 변은 최대공약수임을 알고 구할 수 있다.',
  desc: 'a girl cutting a long rectangular sheet of colored paper into equal squares with scissors on a worktable while a rabbit lines up the squares in rows',
  text: '가장 큰 정사각형',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"가로 36cm, 세로 24cm인 색종이를 남는 부분 없이 똑같은 정사각형으로 자르려고 해요. 한 변을 몇 cm로 하면 될까요?" 학생이 말한 길이로 가로 36cm와 세로 24cm를 나누어 보게 한다. 5cm로 자르면 가로에 1cm가 남아 안 된다는 것을 그려서 보여 준다. 36cm와 24cm의 큰 쪽 약수인 36을 한 변으로 고르는 학생에게는 세로 24cm에 36cm가 들어가지 않는다고 짚는다.',
    '정사각형의 한 변이 될 수 있는 길이는 가로와 세로를 모두 나누어떨어지게 하는 수예요. 어떤 수일지 짝과 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 정사각형 한 변이 될 수 있는 길이 고르기', 'mindmap', '직사각형을 남는 부분 없이 자를 수 있는 정사각형의 한 변을 모두 골라요.',
      '"한 변이 6cm이면 가로 36cm와 세로 24cm가 남지 않을까요?" 36÷6과 24÷6을 말하게 한다. 한 변을 8cm로 고르는 학생에게는 36÷8의 나머지를 구하게 한다.',
      ML('pick', '한 변의 길이'), [
        pickBy('가로 36cm, 세로 24cm인 종이를 남는 부분 없이 정사각형으로 자르려고 해요. 정사각형의 한 변이 될 수 있는 길이(cm)를 모두 고르세요.', '한 변의 길이', [3, 5, 6, 8, 9], (c) => 36 % c === 0 && 24 % c === 0, 0.14, null, { conclude: '가로와 세로를 모두 나누어떨어지게 하는 3과 6이 한 변이 될 수 있어요.' }),
        pickBy('가로 30cm, 세로 18cm인 종이를 남는 부분 없이 정사각형으로 자르려고 해요. 한 변이 될 수 있는 길이(cm)를 모두 고르세요.', '한 변의 길이', [2, 4, 6, 9, 10], (c) => 30 % c === 0 && 18 % c === 0, 0.18),
        pickBy('가로 48cm, 세로 32cm인 종이를 남는 부분 없이 정사각형으로 자르려고 해요. 한 변이 될 수 있는 길이(cm)를 모두 고르세요.', '한 변의 길이', [4, 6, 8, 12, 16], (c) => 48 % c === 0 && 32 % c === 0, 0.22),
        pickBy('더 해 보기: 가로 45cm, 세로 27cm인 종이를 남는 부분 없이 정사각형으로 자르려고 해요. 한 변이 될 수 있는 길이(cm)를 모두 고르세요.', '한 변의 길이', [3, 5, 6, 9, 15], (c) => 45 % c === 0 && 27 % c === 0, 0.26, null, { extra: true }),
      ]),
    act('a2', '활동 2. 가장 큰 정사각형의 한 변 고르기', 'mindmap', '남는 부분 없이 자를 수 있는 가장 큰 정사각형의 한 변을 골라요.',
      '"한 변이 가장 크려면 공약수 중 어느 수일까요?" 최대공약수를 말하게 한다. 두 변의 곱처럼 큰 수를 고르는 학생에게는 한 변이 종이보다 길 수 없다고 짚는다.',
      ML('pick', '최대공약수'), [
        squareQ(36, 24, [lcm(36, 24), 6], 0.16),
        squareQ(30, 18, [lcm(30, 18), 3], 0.2),
        squareQ(48, 32, [lcm(48, 32), 8], 0.24),
        squareQ(45, 27, [lcm(45, 27), 3], 0.28, { extra: true }),
      ]),
    act('a3', '활동 3. 가로와 세로에 몇 개씩 나오는지 구하기', 'mindmap', '가장 큰 정사각형으로 자를 때 가로와 세로에 각각 몇 개씩 나오는지 말풍선 빈칸에 넣어요.',
      '"한 변이 12cm이면 가로 36cm에는 몇 개가 들어갈까요?" 36÷12의 몫을 말하게 한다. 가로와 세로의 개수를 곱해야 모두 몇 개인지 알 수 있다고 짚어 준다. 한 변의 길이 12를 개수로 쓰는 학생에게는 나눈 몫이 개수라고 알려 준다.',
      LVF, [
        dq('한 변이 12cm인 정사각형으로 36cm×24cm를 자르면 가로와 세로에 몇 개씩 나올까요?', [['가로', 36, 12, '개'], ['세로', 24, 12, '개']], [1, 12], 0.16),
        dq('한 변이 6cm인 정사각형으로 30cm×18cm를 자르면 가로와 세로에 몇 개씩 나올까요?', [['가로', 30, 6, '개'], ['세로', 18, 6, '개']], [1, 6], 0.2),
        dq('한 변이 16cm인 정사각형으로 48cm×32cm를 자르면 가로와 세로에 몇 개씩 나올까요?', [['가로', 48, 16, '개'], ['세로', 32, 16, '개']], [1, 16], 0.24),
        dq('더 해 보기: 한 변이 9cm인 정사각형으로 45cm×27cm를 자르면 가로와 세로에 몇 개씩 나올까요?', [['가로', 45, 9, '개'], ['세로', 27, 9, '개']], [1, 9], 0.28, null, { extra: true }),
      ]),
  ],
  wrap: ['"가장 큰 정사각형의 한 변은 어떻게 구하나요?" 가로와 세로의 최대공약수를 구한다고 말하게 한다. 출구 1번에서 가로와 세로의 곱 대신 48을 고른 학생은 큰 변의 길이를 한 변으로 본 것이므로 다음 시간에 배수 단원으로 넘어가기 전에 공약수를 하나 더 확인하게 한다.', [
    exPick('가로 20cm, 세로 12cm인 종이를 남는 부분 없이 가장 큰 정사각형으로 자르려고 해요. 한 변의 길이(cm)를 고르세요.', '최대공약수', [String(gcd(20, 12)), '2', '20'], String(gcd(20, 12)), 0.2, '20과 12를 모두 나누어떨어지게 하는 가장 큰 수는 4예요.'),
    { type: 'choice', prompt: '직사각형을 남는 부분 없이 정사각형으로 자를 때 한 변이 될 수 있는 길이는 어떤 수일까요?', options: ['가로와 세로의 공약수', '가로와 세로의 합', '가로와 세로 중 큰 수'], answer: 0, difficulty: 0.12, explain: '가로와 세로를 모두 나누어떨어지게 하는 수가 한 변이에요.' },
  ]],
  ws: { title: '가장 큰 정사각형으로 자르기', items: [
    { type: 'table', prompt: '가로 36cm, 세로 24cm인 종이를 한 변이 ○cm인 정사각형으로 자를 때 남는지 쓰세요.', columns: ['한 변', '5cm', '6cm', '8cm', '12cm'], cells: [['남나요?', '남음', '', '', '']], answer: '6cm: 남지 않음, 8cm: 남음, 12cm: 남지 않음' },
    { type: 'choice', prompt: '가로 30cm, 세로 18cm인 종이를 자를 수 있는 가장 큰 정사각형의 한 변에 ○ 하세요.', options: ['3cm', '6cm', '9cm'], answer: '6cm' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `48과 32의 최대공약수는 ______ 이므로 한 변이 ______ cm일 때 가로에 ______ 개, 세로에 ______ 개 나와요.`, answer: `${gcd(48, 32)}, ${gcd(48, 32)}, ${48 / gcd(48, 32)}, ${32 / gcd(48, 32)}` },
    { type: 'blank', prompt: '가로 45cm, 세로 27cm 종이를 자를 수 있는 정사각형의 한 변을 모두 쓰세요.', text: '한 변(cm): ______', answer: J(divs(9)) },
    { type: 'short', prompt: '가장 큰 정사각형의 한 변이 두 길이의 최대공약수인 까닭을 써 보세요.' },
  ], easy: { note: '가로와 세로를 모두 나누어떨어지게 하는 수가 한 변이에요. 가장 큰 수가 가장 큰 정사각형이에요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `가로 12cm, 세로 8cm 종이를 한 변 4cm로 자르면 가로 ______ 개, 세로 ______ 개예요.`, answer: `${12 / 4}, ${8 / 4}` },
    { type: 'choice', prompt: '가로 8cm, 세로 12cm인 종이를 자를 수 있는 한 변에 ○ 하세요.', options: ['4cm', '5cm'], answer: '4cm' },
    { type: 'table', prompt: '가로 10cm, 세로 15cm인 종이를 자를 수 있는 한 변에 ○ 하세요.', columns: ['한 변', '2cm', '5cm'], cells: [['남지 않나요?', '', '']], answer: '5cm' },
    { type: 'draw', prompt: '가로 12cm, 세로 8cm인 종이를 한 변 4cm인 정사각형으로 나눈 그림을 그려 보세요.' },
  ] } },
  diff: {
    easy: '한 변 후보가 적고 맞게 고르면 초록 테두리가 생겨요. 활동지는 나누는 식이 써 있어요.',
    base: '한 변이 될 수 있는 길이를 모두 고르고 가장 큰 한 변과 정사각형 개수를 구해요.',
    challenge: '수가 큰 종이(48cm×32cm, 45cm×27cm)에서 한 변과 개수를 모두 구해요.',
  },
  notes: '자주 보이는 어려움: ① 가로나 세로 한쪽에만 맞는 길이를 한 변으로 고른다(36×24에서 9) → 가로와 세로를 모두 나누어떨어지게 해야 남는 부분이 없다. ② 가장 큰 정사각형 문제에서 두 길이의 곱이나 최소공배수를 쓴다 → 한 변은 종이보다 길 수 없으므로 최대공약수이다. ③ 한 변의 길이와 개수를 헷갈린다 → 나눈 몫이 개수이다. 이제 약수에서 배수로 넘어간다. 7차시에서 이어서 한다.',
}));

// ───────────────────────────── 7차시 (core · 배수의 뜻) ─────────────────────────────
L.push(lesson(7, {
  title: '6씩 뛰어 세어 6의 배수 알아보기',
  objective: '어떤 수를 1배, 2배, 3배 … 한 수가 그 수의 배수임을 알고, 뛰어 세기로 배수를 구하고 고를 수 있다.',
  desc: 'a boy hopping along a long paper number path in equal jumps while a rabbit stamps a star on every landing spot and paper candy boxes of six are stacked beside the path',
  text: '6, 12, 18, 24 …',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"사탕이 한 상자에 6개씩 들어 있어요. 상자가 1개, 2개, 3개이면 사탕은 모두 몇 개일까요?" 6, 12, 18을 칠판에 쓰고 6을 1배, 2배, 3배 한 수라고 말한다. 이런 수를 6의 배수라고 한다. 0이나 5를 6의 배수라고 하는 학생에게는 6의 몇 배인지 물어서 6을 자연수 배 한 수만 배수라고 짚는다.',
    '6의 배수를 작은 수부터 몇 개 말해 보고 어떻게 구했는지 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 수직선에서 뛰어 세어 배수 찾기', 'numberline', '0에서 출발해 정해진 수만큼씩 뛰어 세어요. 닿은 수들이 배수예요.',
      '"6씩 4번 뛰면 어디에 닿을까요? 닿는 수들을 모두 말해 보세요." 6, 12, 18, 24를 말하게 한다. 한 번 더 뛴 수를 24가 아니라 30에서 시작해 쓰는 학생에게는 0에서 시작했는지 짚는다.',
      NJ, [
        nj('0에서 출발해 6씩 4번 뛰어 세어 보세요. 어디에 닿나요?', 6, 4, 0.1, { conclude: '6씩 뛰어 닿은 6, 12, 18, 24는 모두 6의 배수예요.' }),
        nj('0에서 출발해 7씩 5번 뛰어 세어 보세요. 어디에 닿나요?', 7, 5, 0.14),
        nj('0에서 출발해 9씩 3번 뛰어 세어 보세요. 어디에 닿나요?', 9, 3, 0.16),
        nj('더 해 보기: 0에서 출발해 8씩 6번 뛰어 세어 보세요. 어디에 닿나요?', 8, 6, 0.2, { extra: true }),
      ]),
    act('a2', '활동 2. 배수를 차례로 쓴 줄의 빈칸 채우기', 'pattern', '어떤 수의 배수를 작은 수부터 차례로 쓴 줄이에요. 빈칸에 알맞은 배수를 써요.',
      '"6, 12, □, 24에서 □는 12 다음 6의 배수예요." 6씩 커지는 것을 말하게 한다. 12 다음에 13을 쓰는 학생에게는 6씩 더해진다고 짚는다.',
      PL, [
        pm('6의 배수를 작은 수부터 쓴 줄이에요. 빈칸에 알맞은 수를 써 보세요.', 6, [2, 5], 0.12),
        pm('7의 배수를 작은 수부터 쓴 줄이에요. 빈칸에 알맞은 수를 써 보세요.', 7, [1, 4, 6], 0.16),
        pm('9의 배수를 작은 수부터 쓴 줄이에요. 빈칸에 알맞은 수를 써 보세요.', 9, [3, 5], 0.2),
        pm('더 해 보기: 12의 배수를 작은 수부터 쓴 줄이에요. 빈칸에 알맞은 수를 써 보세요.', 12, [2, 6], 0.24, { extra: true }),
      ]),
    act('a3', '활동 3. 배수 모두 고르기', 'mindmap', '수 카드 가운데 어떤 수의 배수를 모두 골라요. 자기 자신도 그 수의 1배라서 배수예요.',
      '"18은 6의 몇 배일까요?" 3배라고 말하게 한다. 18÷6으로 나누어떨어지는지로도 확인하게 한다. 16을 6의 배수로 고르는 학생에게는 6×□=16인 자연수가 있는지 물어본다.',
      ML('pick', '배수'), [
        mlPick(6, [9, 12, 16, 18, 24], 0.14),
        mlPick(7, [14, 17, 21, 27, 28], 0.18),
        mlPick(9, [18, 19, 27, 36, 39], 0.22),
        mlPick(5, [10, 15, 22, 35, 45], 0.26, null, { extra: true }),
      ]),
  ],
  wrap: ['"어떤 수의 배수는 어떻게 구하나요?" 그 수를 1배, 2배, 3배 …한 수이고, 뛰어 세어 얻는다고 말하게 한다. 출구 1번에서 15를 고른 학생은 6에 가깝다는 느낌으로 고른 것이므로 다음 시간에 6의 몇 배인지 곱셈식으로 확인하게 한다.', [
    exPick('6의 배수를 고르세요.', '배수', ['15', '30', '26'], '30', 0.14, '6×5=30이므로 30은 6의 배수예요.'),
    { type: 'choice', prompt: '어떤 수의 배수는 어떤 수일까요?', options: ['그 수를 1배, 2배, 3배 … 한 수', '그 수를 나누어떨어지게 하는 수', '그 수보다 작은 수'], answer: 0, difficulty: 0.1, explain: '그 수에 1, 2, 3 …을 곱한 수가 배수예요.' },
  ]],
  ws: { title: '뛰어 세어 배수 구하기', items: [
    { type: 'table', prompt: '7의 배수를 작은 수부터 써 보세요.', columns: ['몇 배', '1배', '2배', '3배', '4배', '5배'], cells: [['7의 배수', '7', '', '', '', '']], answer: `${7 * 2}, ${7 * 3}, ${7 * 4}, ${7 * 5}` },
    { type: 'choice', prompt: '9의 배수에 모두 ○ 하세요.', options: ['18', '19', '27'], answer: '18, 27' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `6의 배수: 6, 12, ______, 24, ______, 36`, answer: `18, 30` },
    { type: 'blank', prompt: '8의 배수를 작은 수부터 다섯 개 쓰세요.', text: '8, ______, ______, ______, ______', answer: '16, 24, 32, 40' },
    { type: 'short', prompt: '15가 5의 배수인 까닭을 곱셈식으로 써 보세요.' },
  ], easy: { note: '어떤 수에 1, 2, 3 …을 곱한 수가 배수예요. 같은 수씩 뛰어 세어도 배수가 나와요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `3, 6, ______, 12, ______`, answer: '9, 15' },
    { type: 'choice', prompt: '4의 배수에 ○ 하세요.', options: ['8', '9'], answer: '8' },
    { type: 'table', prompt: '2의 배수를 써 보세요.', columns: ['몇 배', '1배', '2배', '3배'], cells: [['2의 배수', '2', '', '']], answer: '4, 6' },
    { type: 'draw', prompt: '3씩 4번 뛰어 센 모습을 수직선으로 그려 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 도착한 수가 보이고 맞게 고르면 초록 테두리가 생겨요. 활동지는 곱셈식이 써 있어요.',
    base: '수직선에서 뛰어 세고 수 배열의 빈칸을 채우고 배수를 모두 골라요.',
    challenge: '12처럼 큰 수의 배수와 빈칸이 셋인 줄까지 곱셈식으로 확인하며 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 0을 배수에 넣는다(6의 배수를 0, 6, 12 …) → 배수는 1배, 2배 …한 자연수이다. ② 자기 자신을 배수에서 뺀다(6의 배수를 12, 18 …만) → 6은 6의 1배이다. ③ 약수와 배수를 헷갈려 6의 배수에 1, 2, 3을 쓴다 → 약수는 나누는 수이고 배수는 곱한 수이다. 곱셈표에서 배수를 찾는 일은 8차시에서 이어서 한다.',
}));

// ───────────────────────────── 8차시 (practice · 곱셈표로 배수 찾기) ─────────────────────────────
L.push(lesson(8, {
  title: '곱셈표에서 배수를 찾고 가려내기',
  objective: '곱셈표에서 어떤 수의 배수를 찾아 쓰고, 수 카드가 그 수의 배수인지 곱셈이나 나눗셈으로 가려낼 수 있다.',
  desc: 'a girl filling in a long multiplication table on a wall chart with colored markers while a rabbit sorts number cards into a box for multiples and a box for non multiples',
  text: '배수 표',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'flower', x: 370, y: 236 }, { motif: 'star', x: 250, y: 90 }],
  intro: ['"8의 단을 쓴 표에서 8, 16, 24 …는 모두 8의 배수예요. 40은 8의 배수일까요?" 8×5=40임을 곱셈표에서 찾아 말하게 한다. 큰 수일 때는 표에 없어도 나누어떨어지는지로 판단할 수 있다고 알려 준다. 8×9=72 다음에도 배수가 계속된다는 것을 모르는 학생에게는 8씩 더하면 배수가 끝없이 이어진다고 짚는다.',
    '곱셈표에 없는 큰 수가 8의 배수인지 어떻게 알 수 있을지 짝과 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 곱셈표 빈칸으로 배수 쓰기', 'multiply', '어떤 수의 배수를 작은 수부터 쓴 곱셈표예요. 빈칸에 알맞은 배수를 써요.',
      '"8의 3배, 6배는 얼마일까요?" 8×3, 8×6을 계산해 말하게 한다. 8의 3배를 8+3=11로 쓰는 학생에게는 3배는 8을 3번 더한 것이라고 짚는다.',
      TL, [
        tb('8의 배수를 작은 수부터 쓴 표예요. 빈칸을 채워 보세요.', [8], [[8, 3], [8, 6]], 0.12),
        tb('12의 배수를 작은 수부터 쓴 표예요. 빈칸을 채워 보세요.', [12], [[12, 2], [12, 5], [12, 8]], 0.16),
        tb('15의 배수를 작은 수부터 쓴 표예요. 빈칸을 채워 보세요.', [15], [[15, 3], [15, 7]], 0.2),
        tb('더 해 보기: 25의 배수를 작은 수부터 쓴 표예요. 빈칸을 채워 보세요.', [25], [[25, 4], [25, 9]], 0.24, { extra: true }),
      ]),
    act('a2', '활동 2. 배수를 모두 고르기', 'mindmap', '수 카드 가운데 어떤 수의 배수를 모두 골라요. 큰 수는 나누어떨어지는지로 확인해요.',
      '"24는 8의 배수일까요? 24÷8은 나누어떨어지나요?" 나누어떨어지면 배수라고 말하게 한다. 28을 8의 배수로 고르는 학생에게는 28÷8의 나머지를 구하게 한다.',
      ML('pick', '배수'), [
        mlPick(8, [12, 16, 20, 24, 28], 0.14),
        mlPick(12, [24, 30, 36, 42, 50], 0.18),
        mlPick(15, [30, 35, 45, 50, 60], 0.22),
        mlPick(20, [30, 40, 60, 70, 100], 0.26, null, { extra: true }),
      ]),
    act('a3', '활동 3. 배수이다·아니다로 나누기', 'mindmap', '수 카드를 어떤 수의 배수이다 칸과 배수가 아니다 칸으로 나누어요.',
      '"22는 11의 몇 배일까요?" 2배라고 말하게 한다. 40을 11의 배수 칸에 놓는 학생에게는 11×□=40인 자연수가 있는지 물어본다.',
      ML('sort', '배수 나누기'), [
        sortBy('수 카드를 4의 배수인지 알맞은 칸에 놓아 보세요.', ['4의 배수이다', '4의 배수가 아니다'], [8, 10, 14, 16, 20, 22], isMul(4), 0.16),
        sortBy('수 카드를 9의 배수인지 알맞은 칸에 놓아 보세요.', ['9의 배수이다', '9의 배수가 아니다'], [18, 27, 29, 36, 40, 45], isMul(9), 0.2),
        sortBy('수 카드를 11의 배수인지 알맞은 칸에 놓아 보세요.', ['11의 배수이다', '11의 배수가 아니다'], [22, 33, 40, 44, 55, 60], isMul(11), 0.24),
        sortBy('더 해 보기: 수 카드를 13의 배수인지 알맞은 칸에 놓아 보세요.', ['13의 배수이다', '13의 배수가 아니다'], [26, 39, 40, 52, 60, 65], isMul(13), 0.28, null, { extra: true }),
      ]),
  ],
  wrap: ['"어떤 수가 다른 수의 배수인지 어떻게 알 수 있나요?" 곱셈식으로 만들 수 있거나 나누어떨어지면 배수라고 말하게 한다. 출구 1번에서 35를 고른 학생은 표에 가까운 수를 고른 것이므로 다음 시간에 나눗셈을 직접 해서 확인하게 한다.', [
    exPick('12의 배수를 고르세요.', '배수', ['30', '36', '50'], '36', 0.16, '12×3=36이므로 36은 12의 배수예요.'),
    { type: 'choice', prompt: '어떤 수가 8의 배수인지 알아보는 방법은 무엇일까요?', options: ['8로 나누어떨어지는지 본다', '8에 8을 더한다', '8보다 큰지 본다'], answer: 0, difficulty: 0.1, explain: '8로 나누어떨어지면 8의 배수예요.' },
  ]],
  ws: { title: '곱셈표와 배수', items: [
    { type: 'table', prompt: '9의 배수를 작은 수부터 써 보세요.', columns: ['몇 배', '1배', '2배', '3배', '4배', '5배'], cells: [['9의 배수', '9', '', '', '', '']], answer: `${9 * 2}, ${9 * 3}, ${9 * 4}, ${9 * 5}` },
    { type: 'choice', prompt: '15의 배수에 모두 ○ 하세요.', options: ['30', '35', '45'], answer: '30, 45' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `40 ÷ 8 = ______ 이므로 40은 8의 ______ 이에요.`, answer: `${40 / 8}, 배수` },
    { type: 'blank', prompt: '12의 배수를 작은 수부터 다섯 개 쓰세요.', text: '12, ______, ______, ______, ______', answer: `${12 * 2}, ${12 * 3}, ${12 * 4}, ${12 * 5}` },
    { type: 'short', prompt: '곱셈표에 없는 수 96이 8의 배수인지 어떻게 알 수 있는지 써 보세요.' },
  ], easy: { note: '어떤 수에 1, 2, 3 …을 곱해 표를 채워요. 나누어떨어지는 수도 배수예요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `4, 8, ______, 16, ______`, answer: '12, 20' },
    { type: 'choice', prompt: '5의 배수에 ○ 하세요.', options: ['10', '12'], answer: '10' },
    { type: 'table', prompt: '3의 배수를 써 보세요.', columns: ['몇 배', '1배', '2배', '3배'], cells: [['3의 배수', '3', '', '']], answer: '6, 9' },
    { type: 'draw', prompt: '5의 배수를 가로로 다섯 개 쓰고 어떻게 구했는지 설명해 보세요.' },
  ] } },
  diff: {
    easy: '곱셈표의 빈칸이 적고 맞게 고르면 초록 테두리가 생겨요. 활동지는 곱셈식이 써 있어요.',
    base: '곱셈표의 빈칸을 채우고 배수를 모두 고르고 배수이다·아니다로 나눠요.',
    challenge: '25와 같이 곱이 세 자리 수가 되는 표와 13처럼 큰 수의 배수까지 나누어떨어지는지로 가려내요.',
  },
  notes: '자주 보이는 어려움: ① 배수를 곱이 아니라 합으로 구한다(8의 3배를 8+3) → 3배는 8을 3번 더한 것이다. ② 비슷한 크기의 수를 배수로 고른다(8의 배수에 28) → 나누어떨어지는지 계산한다. ③ 곱셈표에 없는 수는 배수가 아니라고 한다 → 표는 일부이고 배수는 끝없이 이어진다. 두 수의 공배수는 9차시에서 이어서 한다.',
}));

// ───────────────────────────── 9차시 (core · 공배수) ─────────────────────────────
L.push(lesson(9, {
  title: '4의 배수와 6의 배수를 나란히 쓰고 공배수 찾기',
  objective: '두 수의 배수를 나란히 쓰거나 세 칸에 나누어 두 수에 모두 있는 수가 공배수임을 알고, 가장 작은 공배수가 최소공배수임을 말할 수 있다.',
  desc: 'two long paper strips of numbers placed side by side with multiples of four on one strip and multiples of six on the other while a rabbit circles the numbers that appear on both strips',
  text: '두 줄에 모두 있는 수',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'star', x: 250, y: 90 }],
  intro: ['"4의 배수를 쓴 줄과 6의 배수를 쓴 줄을 나란히 놓으면 두 줄에 모두 있는 수가 보여요. 어떤 수일까요?" 4, 8, 12, 16, 20, 24와 6, 12, 18, 24를 칠판에 쓰고 12와 24에 같은 색 동그라미를 치게 한다. 이런 수를 공배수라고 하고 그중 가장 작은 12를 최소공배수라고 이름 붙인다. 8이 두 줄에 모두 있다고 하는 학생에게는 6의 배수 줄에서 8을 찾아보게 한다.',
    '4의 배수와 6의 배수 두 줄에 모두 있는 수를 찾고 가장 작은 수가 무엇인지 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 두 수의 배수를 표로 나란히 쓰기', 'multiply', '두 수의 배수를 나란히 쓴 곱셈표예요. 빈칸에 알맞은 배수를 쓰고 두 줄에 모두 있는 수를 찾아요.',
      '"4의 6배와 6의 4배는 얼마일까요?" 둘 다 24가 된다는 것을 말하게 한다. 4와 6의 줄에서 같은 위치의 칸을 견주는 학생에게는 같은 수가 나오는 칸은 서로 다른 위치일 수 있다고 짚는다.',
      TL, [
        tb('4의 배수와 6의 배수를 나란히 쓴 표예요. 빈칸을 채워 보세요.', [4, 6], [[4, 3], [4, 6], [6, 2], [6, 4]], 0.14),
        tb('3의 배수와 4의 배수를 나란히 쓴 표예요. 빈칸을 채워 보세요.', [3, 4], [[3, 4], [3, 8], [4, 3], [4, 6]], 0.18),
        tb('6의 배수와 8의 배수를 나란히 쓴 표예요. 빈칸을 채워 보세요.', [6, 8], [[6, 4], [6, 8], [8, 3], [8, 6]], 0.22),
        tb('더 해 보기: 10의 배수와 15의 배수를 나란히 쓴 표예요. 빈칸을 채워 보세요.', [10, 15], [[10, 3], [10, 6], [15, 2], [15, 4]], 0.26, { extra: true }),
      ]),
    act('a2', '활동 2. 배수를 세 칸에 나누기', 'mindmap', '수 카드를 첫째 수의 배수만, 공배수, 둘째 수의 배수만 세 칸으로 나누어요.',
      '"12는 4의 배수이면서 6의 배수예요. 어느 칸에 놓을까요?" 4와 6으로 모두 나누어떨어지는지 확인하게 한다. 8을 가운데 칸에 놓는 학생에게는 8÷6의 나머지를 구하게 한다.',
      ML('sort', '배수 나누기'), [
        venn(4, 6, [4, 6, 8, 12, 16, 18, 24], 'mul', 0.16, null, { conclude: '두 수의 배수에 모두 있는 12와 24가 4와 6의 공배수예요.' }),
        venn(3, 4, [3, 4, 8, 9, 12, 16, 24], 'mul', 0.2),
        venn(6, 8, [6, 8, 12, 16, 18, 24, 48], 'mul', 0.24),
        venn(10, 15, [10, 15, 20, 30, 45, 60], 'mul', 0.28, null, { extra: true }),
      ]),
    act('a3', '활동 3. 최소공배수 고르기', 'mindmap', '두 수의 공배수 가운데 가장 작은 수를 골라요. 두 수의 곱이 가장 작은 공배수가 아닐 수 있어요.',
      '"4와 6의 공배수는 12, 24, 36 …이에요. 가장 작은 수는요?" 12라고 말하게 한다. 두 수의 곱 24를 고르는 학생에게는 12도 4와 6의 배수인지 물어본다.',
      ML('pick', '최소공배수'), [
        lcmPick('4와 6의 공배수 가운데 가장 작은 수를 고르세요.', 4, 6, [24, 10], 0.18),
        lcmPick('3과 4의 공배수 가운데 가장 작은 수를 고르세요.', 3, 4, [24, 7], 0.22),
        lcmPick('6과 8의 공배수 가운데 가장 작은 수를 고르세요.', 6, 8, [48, 14], 0.26),
        lcmPick('더 해 보기: 10과 15의 공배수 가운데 가장 작은 수를 고르세요.', 10, 15, [150, 25], 0.3, null, { extra: true }),
      ]),
  ],
  wrap: ['"공배수와 최소공배수는 무엇인가요?" 두 수의 배수 가운데 같은 수가 공배수이고 그중 가장 작은 수가 최소공배수라고 말하게 한다. 출구 1번에서 24를 고른 학생은 두 수의 곱을 최소공배수로 본 것이므로 다음 시간에 공배수를 작은 수부터 나열하게 한다.', [
    exPick('6과 9의 공배수 가운데 가장 작은 수를 고르세요.', '최소공배수', [String(lcm(6, 9)), '54', '27'], String(lcm(6, 9)), 0.2, '6의 배수 6, 12, 18과 9의 배수 9, 18 가운데 처음 같은 수는 18이에요.'),
    { type: 'choice', prompt: '공배수는 어떤 수일까요?', options: ['두 수의 배수 가운데 같은 수', '두 수를 나누어떨어지게 하는 수', '두 수의 합'], answer: 0, difficulty: 0.1, explain: '두 수의 배수에 모두 들어 있는 수가 공배수예요.' },
  ]],
  ws: { title: '두 수의 공배수 찾기', items: [
    { type: 'table', prompt: '4의 배수와 6의 배수를 쓰고 공배수에 ○ 하세요.', columns: ['수', '배수'], cells: [['4', '4, 8, 12, 16, 20, 24'], ['6', ''], ['공배수', '']], answer: '6: 6, 12, 18, 24, 공배수: 12, 24' },
    { type: 'choice', prompt: '3과 4의 최소공배수에 ○ 하세요.', options: ['7', '12', '24'], answer: '12' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `6의 배수: 6, 12, 18, 24, ______ / 8의 배수: 8, 16, ______, 32 / 최소공배수: ______`, answer: `30, ${8 * 3}, ${lcm(6, 8)}` },
    { type: 'blank', prompt: '10과 15의 공배수를 작은 수부터 세 개 쓰세요.', text: '공배수: ______', answer: `${lcm(10, 15)}, ${lcm(10, 15) * 2}, ${lcm(10, 15) * 3}` },
    { type: 'short', prompt: '4와 6의 최소공배수가 24가 아니라 12인 까닭을 써 보세요.' },
  ], easy: { note: '두 수의 배수를 나란히 쓰고 두 줄에 모두 있는 수를 찾아요. 가장 작은 수가 최소공배수예요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `2의 배수: 2, 4, 6, 8 / 3의 배수: 3, 6, 9 → 처음 겹치는 수: ______`, answer: String(lcm(2, 3)) },
    { type: 'choice', prompt: '2와 4의 공배수에 ○ 하세요.', options: ['4', '6'], answer: '4' },
    { type: 'table', prompt: '3과 6의 배수에 ○ 하세요.', columns: ['수', '6', '9', '12'], cells: [['3과 6의 공배수인가요?', '', '', '']], answer: '6, 12' },
    { type: 'draw', prompt: '두 줄에 4의 배수와 6의 배수를 써서 겹치는 수에 동그라미를 쳐 보세요.' },
  ] } },
  diff: {
    easy: '표의 빈칸이 적고 맞게 고르면 초록 테두리가 생겨요. 활동지는 배수 줄이 일부 써 있어요.',
    base: '두 수의 배수 표를 채우고 세 칸에 나누어 최소공배수를 고르세요.',
    challenge: '수가 큰 두 수(10과 15)의 공배수를 배수를 모두 쓰지 않고 찾고 두 수의 곱과 견주어요.',
  },
  notes: '자주 보이는 어려움: ① 한쪽 줄에만 있는 수를 공배수로 고른다(4의 배수 8) → 두 수의 배수에 모두 있어야 한다. ② 최소공배수를 두 수의 곱으로 쓴다(4와 6에서 24) → 더 작은 공배수가 있는지 작은 수부터 확인한다. ③ 공배수를 한 개만 찾는다 → 최소공배수의 배수도 모두 공배수이다. 공배수를 규칙으로 정리하는 일은 10차시에서 이어서 한다.',
}));

// ───────────────────────────── 10차시 (practice · 최소공배수 구하기) ─────────────────────────────
const lmPattern = (a, b, blanks, d, x) => pm(`${a}와 ${b}의 공배수를 작은 수부터 쓴 줄이에요. 빈칸에 알맞은 수를 써 보세요.`, lcm(a, b), blanks, d, x);
L.push(lesson(10, {
  title: '공배수는 최소공배수의 배수라는 규칙 찾기',
  objective: '두 수의 공배수를 작은 수부터 늘어놓으면 최소공배수의 배수가 됨을 알고, 두 수의 최소공배수를 구할 수 있다.',
  desc: 'a rabbit teacher stamping colored stars on a long number strip at every twelfth position while two children check that the stars land on the multiples of two different numbers',
  text: '12, 24, 36 …',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'flower', x: 370, y: 236 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"4와 6의 공배수 12, 24, 36 …을 보면 어떤 규칙이 있나요?" 학생이 12씩 커지는 것을 찾게 한다. 공배수는 최소공배수의 배수라고 정리한다. 4와 6의 공배수에 12, 24 다음에 28을 쓰는 학생에게는 4씩 커지는 규칙이 아니라 최소공배수씩 커진다고 짚는다.',
    '4와 6의 공배수는 몇씩 커지는지 찾아 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 공배수를 차례로 쓴 줄의 빈칸 채우기', 'pattern', '두 수의 공배수를 작은 수부터 쓴 줄이에요. 빈칸에 알맞은 공배수를 써요.',
      '"12, 24, □, 48에서 □는 얼마일까요?" 12씩 커지는 것을 말하게 한다. 24 다음에 28을 쓰는 학생에게는 4와 6의 공배수는 12의 배수라고 짚는다.',
      PL, [
        lmPattern(4, 6, [2, 4], 0.14),
        lmPattern(3, 5, [1, 4], 0.18),
        lmPattern(6, 8, [2, 5], 0.22),
        lmPattern(4, 10, [3, 6], 0.26, { extra: true }),
      ]),
    act('a2', '활동 2. 공배수 모두 고르기', 'mindmap', '수 카드 가운데 두 수의 공배수를 모두 골라요. 한 수의 배수이기만 한 수는 공배수가 아니에요.',
      '"12는 4의 배수이고 6의 배수예요. 30은 어떨까요?" 4로 나누어떨어지는지 말하게 한다. 30을 공배수로 고르는 학생에게는 30÷4의 나머지를 구하게 한다.',
      ML('pick', '공배수'), [
        cmPick(4, 6, [8, 12, 18, 24, 30], 0.16),
        cmPick(3, 5, [10, 15, 20, 30, 45], 0.2),
        cmPick(6, 8, [12, 16, 24, 36, 48], 0.24),
        cmPick(9, 12, [18, 24, 36, 48, 72], 0.28, null, { extra: true }),
      ]),
    act('a3', '활동 3. 두 수와 최소공배수 이어 보기', 'mindmap', '두 수와 그 두 수의 최소공배수를 이어요. 함정 카드는 두 수를 곱한 수예요.',
      '"3과 4의 최소공배수는 얼마일까요?" 3의 배수와 4의 배수를 작은 수부터 쓰며 처음 같은 수를 찾게 한다. 두 수의 곱을 고르는 학생에게는 곱보다 작은 공배수가 있는지 보게 한다.',
      ML('match', '최소공배수'), [
        match('두 수와 두 수의 최소공배수를 이어 보세요.', [['3과 4', String(lcm(3, 4))], ['6과 8', String(lcm(6, 8))], ['10과 15', String(lcm(10, 15))]], [String(10 * 15)], 0.18),
        match('두 수와 두 수의 최소공배수를 이어 보세요.', [['4와 10', String(lcm(4, 10))], ['9와 12', String(lcm(9, 12))], ['5와 6', String(lcm(5, 6))]], [String(9 * 12)], 0.22),
        match('두 수와 두 수의 최소공배수를 이어 보세요.', [['8과 12', String(lcm(8, 12))], ['6과 9', String(lcm(6, 9))], ['12와 18', String(lcm(12, 18))]], [String(12 * 18)], 0.26),
        match('더 해 보기: 두 수와 두 수의 최소공배수를 이어 보세요.', [['14와 21', String(lcm(14, 21))], ['15와 20', String(lcm(15, 20))], ['18과 24', String(lcm(18, 24))]], [String(18 * 24)], 0.3, null, { extra: true }),
      ]),
  ],
  wrap: ['"두 수의 공배수는 어떤 규칙으로 늘어나나요?" 최소공배수의 배수라고 말하게 한다. 출구 1번에서 108을 고른 학생은 두 수의 곱을 최소공배수로 본 것이므로 다음 시간 이야기 문제에서 곱보다 작은 공배수가 있는지 먼저 따져 보게 한다.', [
    exPick('9와 12의 최소공배수를 고르세요.', '최소공배수', [String(lcm(9, 12)), String(9 * 12), '72'], String(lcm(9, 12)), 0.22, '9의 배수 9, 18, 27, 36과 12의 배수 12, 24, 36에서 처음 같은 수는 36이에요.'),
    { type: 'choice', prompt: '4와 6의 공배수는 몇씩 커질까요?', options: ['12씩', '4씩', '6씩'], answer: 0, difficulty: 0.14, explain: '공배수는 최소공배수 12의 배수예요.' },
  ]],
  ws: { title: '공배수와 최소공배수 구하기', items: [
    { type: 'table', prompt: '3과 5의 공배수를 작은 수부터 써 보세요.', columns: ['차례', '1번째', '2번째', '3번째', '4번째'], cells: [['공배수', '15', '', '', '']], answer: `${15 * 2}, ${15 * 3}, ${15 * 4}` },
    { type: 'choice', prompt: '6과 8의 공배수에 모두 ○ 하세요.', options: ['24', '36', '48'], answer: '24, 48' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `4와 10의 최소공배수는 ______ 이고 공배수는 ______, 40, ______ …예요.`, answer: `${lcm(4, 10)}, ${lcm(4, 10)}, 60` },
    { type: 'blank', prompt: '두 수의 최소공배수를 쓰세요.', text: `8과 12: ______ / 6과 9: ______`, answer: `${lcm(8, 12)}, ${lcm(6, 9)}` },
    { type: 'short', prompt: '두 수의 공배수가 최소공배수의 배수가 되는 까닭을 4와 6을 예로 들어 써 보세요.' },
  ], easy: { note: '두 수의 배수를 작은 수부터 쓰다 처음 같은 수를 찾아요. 그 수가 최소공배수예요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `2와 3의 공배수: 6, ______, 18`, answer: String(6 * 2) },
    { type: 'choice', prompt: '2와 5의 최소공배수에 ○ 하세요.', options: ['7', '10'], answer: '10' },
    { type: 'table', prompt: '3과 6의 최소공배수를 구하세요.', columns: ['수', '3의 배수', '6의 배수'], cells: [['처음 겹치는 수', '', '']], answer: '6' },
    { type: 'draw', prompt: '수직선에 4의 배수는 ○, 6의 배수는 △로 표시하고 둘 다 해당하는 수를 찾아 보세요.' },
  ] } },
  diff: {
    easy: '빈칸이 적고 맞게 고르면 초록 테두리가 생겨요. 활동지는 배수 줄이 일부 써 있어요.',
    base: '공배수 줄의 빈칸을 채우고 공배수를 모두 고르고 최소공배수를 이어요.',
    challenge: '수가 큰 두 수(14와 21, 18과 24)의 최소공배수를 구하고 곱과 견주어 까닭을 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 공배수를 줄에 쓸 때 한 수의 배수 간격으로 쓴다(4와 6의 공배수를 12, 16, 20) → 공배수는 최소공배수씩 커진다. ② 두 수가 서로소처럼 보일 때만 곱이 최소공배수가 되는데 모든 경우에 곱을 쓴다 → 곱보다 작은 공배수가 있는지 확인한다. ③ 공배수를 하나만 찾고 끝낸다 → 공배수는 끝없이 이어진다. 최소공배수를 쓰는 이야기 문제는 11차시에서 이어서 한다.',
}));

// ───────────────────────────── 11차시 (wrap · 다시 만나는 때와 단원 정리) ─────────────────────────────
const meetQ = (prompt, a, b, wrongs, d, x) => lcmPick(prompt, a, b, wrongs, d, null, x);
const timesQ = (a, b, d, unit, x) => {
  const m = lcm(a, b);
  return dq(`두 ${unit}가 ${m}분 뒤 다시 동시에 출발해요. 그동안 ${a}분마다 오는 ${unit}와 ${b}분마다 오는 ${unit}는 각각 몇 번 출발할까요?`, [[`${a}분`, m, a, '번'], [`${b}분`, m, b, '번']], [1, 4], d, x);
};
L.push(lesson(11, {
  title: '두 버스가 다시 동시에 출발하는 때와 단원 정리',
  objective: '일정한 간격으로 되풀이되는 두 상황에서 다시 동시에 일어나는 때를 최소공배수로 구하고, 최대공약수와 최소공배수를 쓰는 문제를 가려낼 수 있다.',
  desc: 'two paper buses leaving a small station at different intervals while a rabbit clerk checks the clock and the schedule board shows when both buses depart together again',
  text: '다시 같이 출발하는 때',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'star', x: 250, y: 90 }],
  intro: ['"버스는 8분마다, 마을버스는 12분마다 출발해요. 오전 9시에 두 버스가 동시에 출발했어요. 다음에 동시에 출발하는 때는 몇 분 뒤일까요?" 학생이 말하는 시각을 두 버스의 출발 시각표로 확인하게 한다. 두 수를 곱한 96분이라고 답하는 학생에게는 96분보다 먼저 두 버스가 만나는 때가 있는지 시각표로 짚는다.',
    '두 버스가 다시 동시에 출발하는 때를 구하는 방법을 짝에게 말해 보고, 어떤 문제에 최대공약수를 쓰는지도 떠올려 봐요.'],
  acts: [
    act('a1', '활동 1. 다시 동시에 일어나는 때 고르기', 'mindmap', '일정한 간격으로 되풀이되는 두 일이 처음으로 다시 동시에 일어나는 때를 골라요.',
      '"두 버스가 동시에 출발한 뒤 다시 동시에 출발하려면 8분의 배수이면서 12분의 배수여야 해요." 공배수 중 가장 작은 수를 찾게 한다. 96분을 고르는 학생에게는 24분에도 두 버스가 모두 출발하는지 보게 한다.',
      ML('pick', '최소공배수'), [
        meetQ('버스가 8분마다, 마을버스가 12분마다 출발해요. 동시에 출발한 뒤 처음으로 다시 동시에 출발하는 것은 몇 분 뒤일까요?', 8, 12, [96, 20], 0.18, { conclude: '8의 배수이면서 12의 배수 중 가장 작은 수 24분 뒤예요.' }),
        meetQ('가로등이 6초마다, 간판이 9초마다 깜박여요. 동시에 깜박인 뒤 처음으로 다시 동시에 깜박이는 것은 몇 초 뒤일까요?', 6, 9, [54, 12], 0.22),
        meetQ('두 알람이 30분마다, 45분마다 울려요. 동시에 울린 뒤 처음으로 다시 동시에 울리는 것은 몇 분 뒤일까요?', 30, 45, [180, 75], 0.26),
        meetQ('더 해 보기: 도서관은 15일마다, 수영장은 20일마다 가요. 오늘 함께 간 뒤 처음으로 다시 같은 날 가는 것은 며칠 뒤일까요?', 15, 20, [300, 35], 0.3, { extra: true }),
      ]),
    act('a2', '활동 2. 최대공약수 문제와 최소공배수 문제 나누기', 'mindmap', '이야기를 읽고 최대공약수로 푸는 문제와 최소공배수로 푸는 문제로 나누어요.',
      '"똑같이 나누거나 가장 큰 정사각형으로 자르는 문제는 어떤 수를 쓸까요? 다시 만나는 때는요?" 나누는 문제는 약수, 되풀이되는 때는 배수라고 말하게 한다. 가장 많은 사람이라는 말에 최소공배수를 고르는 학생에게는 사람 수가 물건 수 이하라는 점을 짚는다.',
      ML('sort', '문제 나누기'), [
        sr('이야기를 최대공약수로 푸는지 최소공배수로 푸는지 나누어 보세요.', { '최대공약수': ['사탕 24개와 젤리 36개를 똑같이 나누기', '가로 20cm 세로 30cm 종이를 가장 큰 정사각형으로 자르기'], '최소공배수': ['6분, 8분마다 오는 버스가 다시 같이 오는 때', '4일, 6일마다 가는 두 가게에 같이 가는 날'] }, 0.18),
        sr('이야기를 최대공약수로 푸는지 최소공배수로 푸는지 나누어 보세요.', { '최대공약수': ['가로 16cm 세로 24cm를 가장 큰 정사각형으로', '공책 30권과 연필 45자루를 똑같이 나눌 최대 모둠 수'], '최소공배수': ['3일, 4일마다 가는 곳에 같이 가는 날', '5초, 6초마다 깜박이는 두 전등이 같이 켜지는 때'] }, 0.22),
        sr('이야기를 최대공약수로 푸는지 최소공배수로 푸는지 나누어 보세요.', { '최대공약수': ['구슬 28개와 단추 42개를 똑같이 나눌 최대 사람 수', '가로 27cm 세로 36cm 천을 가장 큰 정사각형으로 나누기'], '최소공배수': ['톱니 12개, 18개 두 톱니바퀴가 처음 다시 맞물리는 때', '10분, 15분마다 울리는 두 알람이 같이 울리는 때'] }, 0.26),
        sr('더 해 보기: 이야기를 최대공약수로 푸는지 최소공배수로 푸는지 나누어 보세요.', { '최대공약수': ['색종이 48장과 풀 32개를 남김없이 똑같이 나누기', '가로 45cm 세로 60cm를 가장 큰 정사각형으로 나누기'], '최소공배수': ['12일, 20일마다 가는 두 곳에 함께 가는 날', '7분, 14분마다 출발하는 버스가 다시 동시에 출발하는 때'] }, 0.3, null, { extra: true }),
      ]),
    act('a3', '활동 3. 그동안 각각 몇 번인지 구하기', 'mindmap', '두 번 일이 처음으로 다시 동시에 일어날 때까지 각각 몇 번 일어나는지 말풍선 빈칸에 넣어요.',
      '"24분 동안 8분마다 오는 버스는 몇 번 출발할까요?" 24÷8을 말하게 한다. 출발한 횟수에서 처음 동시에 출발한 때를 빼는지 학생과 함께 점검한다. 24분 뒤를 횟수로 쓰는 학생에게는 24는 걸린 시간이고 나눈 몫이 횟수라고 알려 준다.',
      LVF, [
        timesQ(8, 12, 0.18, '버스'),
        timesQ(6, 9, 0.22, '버스'),
        timesQ(4, 10, 0.26, '버스'),
        timesQ(6, 15, 0.3, '버스', { extra: true }),
      ]),
  ],
  wrap: ['"최대공약수와 최소공배수는 어떤 문제에서 쓰나요?" 똑같이 나누거나 가장 큰 크기를 찾으면 최대공약수, 다시 같이 일어나는 때를 찾으면 최소공배수라고 말하게 한다. 출구 1번에서 최대공약수를 고른 학생은 되풀이되는 때를 나누는 문제로 본 것이므로 단원 평가 전에 두 문제를 나란히 놓고 키워드를 표시하게 한다.', [
    exPick('두 가게에 4일마다, 6일마다 가요. 오늘 같이 가고 처음으로 다시 같은 날 가는 것은 며칠 뒤일까요?', '최소공배수', [String(lcm(4, 6)), '24', '2'], String(lcm(4, 6)), 0.2, '4의 배수이면서 6의 배수 중 가장 작은 수는 12예요.'),
    { type: 'choice', prompt: '사탕 24개와 젤리 36개를 남김없이 똑같이 나누어 줄 수 있는 가장 많은 사람 수를 구할 때 쓰는 것은 무엇일까요?', options: ['최대공약수', '최소공배수'], answer: 0, difficulty: 0.14, explain: '남김없이 똑같이 나누는 가장 큰 수는 최대공약수예요.' },
    { type: 'choice', prompt: '두 수의 공배수 가운데 가장 작은 수를 무엇이라고 할까요?', options: ['최소공배수', '최대공약수'], answer: 0, difficulty: 0.08, explain: '공배수 중 가장 작은 수가 최소공배수예요.' },
  ]],
  ws: { title: '약수와 배수 정리하기', items: [
    { type: 'table', prompt: '이야기에 알맞은 것에 ○ 하고 답을 구하세요.', columns: ['이야기', '최대공약수', '최소공배수', '답'], cells: [['사탕 24개와 젤리 36개를 똑같이 나눌 최대 사람 수', '', '', ''], ['8분, 12분마다 오는 버스가 다시 같이 오는 때', '', '', '']], answer: `최대공약수 ${gcd(24, 36)}명, 최소공배수 ${lcm(8, 12)}분` },
    { type: 'choice', prompt: '9와 12의 최소공배수에 ○ 하세요.', options: ['3', '36', '108'], answer: '36' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: `6초와 9초마다 깜박이는 가로등이 동시에 깜박인 뒤 처음 다시 동시에 깜박이는 때는 ______ 초 뒤이고, 그동안 6초마다는 ______ 번, 9초마다는 ______ 번 깜박여요.`, answer: `${lcm(6, 9)}, ${lcm(6, 9) / 6}, ${lcm(6, 9) / 9}` },
    { type: 'blank', prompt: '두 수의 최대공약수와 최소공배수를 쓰세요.', text: `12와 18: 최대공약수 ______ , 최소공배수 ______`, answer: `${gcd(12, 18)}, ${lcm(12, 18)}` },
    { type: 'short', prompt: '최대공약수를 쓰는 문제와 최소공배수를 쓰는 문제를 구별하는 방법을 써 보세요.' },
  ], easy: { note: '똑같이 나누거나 가장 큰 크기를 찾으면 최대공약수예요. 다시 같이 일어나는 때를 찾으면 최소공배수예요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: `3분, 4분마다 오는 버스가 다시 같이 오는 때는 ______ 분 뒤예요. (최소공배수)`, answer: String(lcm(3, 4)) },
    { type: 'choice', prompt: '사탕 8개와 젤리 12개를 똑같이 나눌 때 쓰는 것에 ○ 하세요.', options: ['최대공약수', '최소공배수'], answer: '최대공약수' },
    { type: 'table', prompt: '4와 6의 최대공약수와 최소공배수를 써 보세요.', columns: ['이름', '최대공약수', '최소공배수'], cells: [['값', '', '']], answer: `${gcd(4, 6)}, ${lcm(4, 6)}` },
    { type: 'draw', prompt: '이번 단원에서 알게 된 약수, 공약수, 배수, 공배수를 한 장의 그림으로 정리해 보세요.' },
  ] } },
  diff: {
    easy: '이야기가 짧고 맞게 고르면 초록 테두리가 생겨요. 활동지는 어떤 수를 쓰는지 알려 주는 말이 있어요.',
    base: '다시 만나는 때를 고르고 최대공약수·최소공배수 문제로 나누고 횟수를 구해요.',
    challenge: '수가 큰 두 수(30과 45, 15와 20)로 다시 만나는 때를 구하고 문제의 낱말을 근거로 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 다시 만나는 때를 구하는 문제에 두 수의 곱을 쓴다(8분과 12분에서 96분) → 곱보다 작은 공배수가 있는지 시각표로 확인한다. ② 가장 많은 사람이나 가장 큰 정사각형 문제에 최소공배수를 쓴다 → 나누는 문제는 약수, 되풀이되는 문제는 배수이다. ③ 횟수를 구할 때 걸린 시간을 그대로 쓴다 → 걸린 시간을 간격으로 나눈 몫이 횟수이다. 이 단원의 약수와 배수는 다음 단원에서 분수의 약분과 통분을 배울 때 다시 쓴다.',
}));

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 5, subject: '수학', unitTitle: UT,
  flow: '4학년까지 곱셈과 나눗셈을 배운 경험에서 출발해, 1차시에 사탕을 똑같이 묶어 남는 것이 없으면 나누어떨어지고 그 수가 약수임을 확인하고, 2차시에 곱셈식의 짝으로 약수를 빠짐없이 찾습니다. 3~4차시는 두 수의 약수를 첫째 수만·공통·둘째 수만 세 칸에 나누어 공약수의 자리를 보고, 공약수 가운데 가장 큰 수가 최대공약수임을 압니다. 5~6차시에서 사탕과 초콜릿을 남김없이 나누는 가장 많은 사람 수와 직사각형을 가장 큰 정사각형으로 자르는 한 변을 최대공약수로 구합니다. 7~8차시는 배수를 뛰어 세기와 곱셈표로 알아보고 나누어떨어지는지로 가려내며, 9~10차시에서 두 수의 배수를 나란히 놓아 공배수와 최소공배수를 찾고 공배수가 최소공배수의 배수임을 정리합니다. 마지막 11차시에서는 두 버스가 다시 동시에 출발하는 때를 구하고 최대공약수 문제와 최소공배수 문제를 가려내어 단원을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
