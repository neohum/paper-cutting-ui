/* 3학년 1학기 수학 4. 곱셈 — 단원 파일(차시 8개, 기존 차시 없음).
 * 확인 필요: units-index 의 plan 제목은 1~4차시가 '세 자리 수 범위의 곱셈', 5~8차시가 '자연수의 어림셈'이다.
 *   이 단원은 (두 자리 수) × (한 자리 수)까지만 다루고 곱이 세 자리 수가 되는 것까지 포함한다. 2학기 g3-math-2-01 의 (세 자리 수) × (한 자리 수)와
 *   (두 자리 수) × (두 자리 수)는 다루지 않는다. 어림셈(5~8차시)은 곱셈의 어림, 곧 한 자리 수 곱하기 몇십 가까운 수로 한정한다.
 * 예문·이야기(사탕 상자, 공책 쪽수, 체험학습 줄, 과일 상자 등)는 이 단원을 위해 직접 지은 것이다. 학생 이름 예시(민지·준호)는 가명이다.
 * 흐름: 몇십 × 몇(1) → 올림 없는 (두 자리) × (한 자리)(2) → 일의 자리에서 올림이 있는 곱셈(3) → 십의 자리에서 올림이 있는 곱셈(4)
 *      → 가까운 몇십으로 어림하기(5) → 어림한 곱과 정확한 곱 견주기(6) → 어림으로 계산 결과 검토하기(7) → 곱셈 이야기 풀고 어림으로 확인하기(8).
 */
(function () {
const UID = 'g3-math-1-04', CU = 'g3-수학-1학기-4', UT = '4. 곱셈', STD = ['[4수01-04]', '[4수01-08]'];
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
    grade: 3, subject: '수학', unitTitle: UT,
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
const GL = { easy: { mode: 'group', showCount: true, revealAfterCheck: true }, base: { mode: 'group' }, challenge: { mode: 'group' } };
// 묶어 덜어내기(포함제): size 개씩 묶어 묶음 수를 쓴다. rest 가 있으면 남은 것 칸도 쓴다
const gp = (prompt, count, size, d, x, rest) => Object.assign({ prompt, toolOptions: { count, maxSize: 10 }, target: Object.assign({ size, answer: Math.floor(count / size) }, rest != null ? { rest } : {}), difficulty: d }, x || {});
// 똑같이 나누어 담기(등분제): plates 개 접시에 똑같이 나눠 한 접시의 수를 쓴다
const gq = (prompt, count, plates, d, x, rest) => Object.assign({ prompt, toolOptions: { count, by: 'plates', ask: 'size', maxSize: 10 }, target: Object.assign({ plates, answer: Math.floor(count / plates) }, rest != null ? { rest } : {}), difficulty: d }, x || {});
const AL = { easy: { mode: 'array', bands: true, showCounts: true, maxRows: 9, maxCols: 9 }, base: { mode: 'array', bands: true, maxRows: 9, maxCols: 9 }, challenge: { mode: 'array', maxRows: 9, maxCols: 9 } };
const ar = (prompt, rows, cols, d, x, o) => Object.assign({ prompt, toolOptions: Object.assign({ shape: 'circle' }, o || {}), target: { rows, cols }, difficulty: d }, x || {});
const arT = (prompt, rows, cols, d, x, o) => Object.assign({ prompt, state: { rows, cols }, toolOptions: Object.assign({ lock: true, total: true, shape: 'circle' }, o || {}), target: { rows, cols, total: true }, difficulty: d }, x || {});
const TL = { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } };
const COLS = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tbl = (prompt, rows, blanks, d, x, cols) => Object.assign({ prompt, toolOptions: { mode: 'table', rowsOf: rows, colsOf: cols || COLS, blanks }, target: { cells: true }, difficulty: d }, x || {});
const JL = { easy: { mode: 'jump', labels: 'major', showValue: true }, base: { mode: 'jump', labels: 'major' }, challenge: { mode: 'jump', labels: 'ends' } };
// 수직선에서 from 에서 s 씩 뒤로 뛰어 0 까지 덜어내기
const back = (prompt, from, s, d, x) => Object.assign({ prompt, toolOptions: { min: 0, max: from, step: s, fixedFrom: from, hopSize: s }, target: { from, size: s, end: 0 }, difficulty: d }, x || {});
const ML = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
const match = (prompt, pairs, extra, d, hints, x) => {
  const slots = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
  const cards = pairs.map((p, i) => ({ id: `c${i + 1}`, text: p[1] })).concat((extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t })));
  const m = {}; pairs.forEach((p, i) => { m[`s${i + 1}`] = `c${i + 1}`; });
  return Object.assign({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match: m }, difficulty: d, hints }, x || {});
};
const pick = (prompt, basket, cards, d, hints, x) => Object.assign({ prompt,
  toolOptions: { mode: 'pick', basket, cards: cards.map((c, i) => ({ id: `k${i + 1}`, text: c[0] })) },
  target: { pick: cards.map((c, i) => (c[1] ? `k${i + 1}` : null)).filter(Boolean) }, difficulty: d, hints }, x || {});
// 말풍선 빈칸: rows = [[이름, 모티프, 글(___ 가 빈칸), 정답], …], extra = 함정 카드
const MOTIFS = ['sun', 'tree', 'flower', 'leaf', 'star', 'cloud'];
const fill = (prompt, rows, extra, d, x) => Object.assign({ prompt,
  toolOptions: { cards: [...rows.map((r) => r[3]), ...(extra || [])].map((n) => ({ id: String(n), text: String(n) })), slots: rows.map((r, i) => ({ id: `b${i + 1}`, who: r[0], motif: r[1] || MOTIFS[i], label: r[2] })) },
  target: { fill: Object.fromEntries(rows.map((r, i) => [`b${i + 1}`, String(r[3])])) }, difficulty: d }, x || {});
const LVF = { easy: { mode: 'fill', live: true }, base: { mode: 'fill' }, challenge: { mode: 'fill' } };
const wsArr = (prompt, list, answer, o) => ({ type: 'figure', prompt, tool: 'multiply', figures: list.map((f) => ({ options: Object.assign({ mode: 'array', lock: true, showCounts: false, maxRows: 6, maxCols: 6 }, o || {}), state: { rows: f[0], cols: f[1] }, caption: f[2] })), answer });
const wsTbl = (prompt, rows, blanks, caption, answer, cols) => ({ type: 'figure', prompt, tool: 'multiply', wide: true, figures: [{ options: { mode: 'table', rowsOf: rows, colsOf: cols || COLS, blanks }, caption }], answer });
// 수직선에서 0 부터 s 씩 count 번 뛰기
const jc = (prompt, s, count, max, d, x) => Object.assign({ prompt, toolOptions: { min: 0, max, step: s, fixedFrom: 0, hopSize: s }, target: { from: 0, size: s, count }, difficulty: d }, x || {});
// 곱셈표 빈칸: 줄 머리 a, 칸 머리 b 의 곱을 쓴다 (b 가 몇십·몇이면 부분곱)
const part = (prompt, a, bs, d, x) => Object.assign({ prompt, toolOptions: { mode: 'table', rowsOf: [a], colsOf: bs, blanks: bs.map((b) => [a, b]) }, target: { cells: true }, difficulty: d }, x || {});
const grid = (prompt, rows, cols, blanks, d, x) => Object.assign({ prompt, toolOptions: { mode: 'table', rowsOf: rows, colsOf: cols, blanks }, target: { cells: true }, difficulty: d }, x || {});
const L = [];

// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '10이 몇 개인지 세어 몇십 곱하기 몇 구하기',
  objective: '몇십에 한 자리 수를 곱할 때 10이 몇 개인지 생각하여 곱을 구할 수 있다.',
  desc: 'neat stacks of paper coin-shaped sticker rolls each holding ten stickers and a rabbit counting how many rolls there are on a wooden shelf',
  text: '10이 몇 개일까?',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 236 }],
  intro: ['"스티커 한 묶음에 10장이 있어요. 20장짜리 묶음이 3개 있으면 모두 몇 장일까요?" 시연 단추로 수직선에서 20씩 3번 뛰는 모습을 보여 준다. "20은 10이 몇 개일까요? 3묶음이면 10이 몇 개일까요?"로 이어 묻는다. 20 × 3을 6이라고 답하는 학생이 있으면 10이 6개라서 60이라고 알려 주고, 0을 빠뜨리지 않게 한다.',
    '묶음으로 파는 물건을 집에서 본 적이 있는지 떠올려 짝에게 말해 봐요.'],
  demo: { tool: 'numberline', options: { mode: 'jump', min: 0, max: 100, step: 20, fixedFrom: 0, hopSize: 20 }, sequence: [{ from: 0, hops: [20, 20, 20], size: 20 }] },
  acts: [
    act('a1', '활동 1. 몇십씩 뛰어 세기', 'numberline', '몇십씩 몇 번 뛰어 센 곳이 곱이에요. 수직선에서 뛰어 세어 곱을 구해요.',
      '"한 번 뛰면 몇이 늘어나요? 3번 뛰면 어디에 닿나요?" 뛸 때마다 20, 40, 60을 소리 내어 읽게 한다. 도착한 곳을 6이라고 읽는 학생에게는 수직선의 눈금 이름을 다시 읽게 한다.',
      { easy: { mode: 'jump', labels: 'major', showValue: true }, base: { mode: 'jump', labels: 'major' }, challenge: { mode: 'jump', labels: 'ends' } }, [
        jc('20씩 3번 뛰어 세어 보세요. 어디에 닿나요?', 20, 3, 100, 0.08, { predict: { q: '20씩 3번 뛰면 20 × 3의 곱이 돼요. 곱은 6일까요, 60일까요?', options: ['6', '60'], answer: 1 }, conclude: '20은 10이 2개이니까 20씩 3번이면 10이 6개, 곧 60이에요.' }),
        jc('20씩 4번 뛰어 세어 보세요. 어디에 닿나요?', 20, 4, 100, 0.12),
        jc('30씩 3번 뛰어 세어 보세요. 어디에 닿나요?', 30, 3, 90, 0.18),
        jc('더 해 보기: 50씩 2번 뛰어 세어 보세요. 어디에 닿나요?', 50, 2, 100, 0.22, { extra: true }),
      ]),
    act('a2', '활동 2. 몇십 곱하기 몇 표 채우기', 'multiply', '곱셈표의 빈칸에 곱을 써요. 몇십은 10이 몇 개인지 생각하면 쉬워요.',
      '"20 × 2는 10이 몇 개와 같을까요?" 먼저 2 × 2를 하고 뒤에 0을 붙이는 방법을 살피게 한다. 곱에 0을 붙이면서도 이유를 말하지 못하는 학생에게는 10이 몇 개인지 말하게 한다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        grid('곱셈표의 20열 빈칸을 채워 보세요.', [2, 3, 4], [10, 20, 30], 'col:20', 0.1),
        grid('곱셈표의 5행 빈칸을 채워 보세요.', [5, 6], [20, 30, 40], 'row:5', 0.15),
        grid('곱셈표의 빈칸 세 칸을 채워 보세요.', [3, 7], [10, 40, 50], [[3, 40], [7, 50], [7, 10]], 0.2),
      ]),
    act('a3', '활동 3. 10이 몇 개인지 말풍선에 넣기', 'mindmap', '곱셈에서 10이 몇 개인지 알아보고 곱을 말풍선 빈칸에 넣어요.',
      '"30 × 4는 10이 몇 개일까요? 3 × 4를 먼저 해 볼까요?" 3 × 4 = 12이니 10이 12개라고 연결해 준다. 10이 12개를 12라고만 쓰는 학생에게는 10이 12개이면 120이라고 보여 준다.',
      LVF, [
        fill('10이 몇 개인지 빈칸에 넣어 보세요.', [['민지', 'sun', '20 × 3은 10이 ___개예요.', '6'], ['준호', 'tree', '40 × 2는 10이 ___개예요.', '8']], ['4', '60'], 0.1),
        fill('10이 몇 개인지 빈칸에 넣어 보세요.', [['민지', 'sun', '50 × 3은 10이 ___개예요.', '15'], ['준호', 'tree', '30 × 4는 10이 ___개예요.', '12']], ['7', '20'], 0.16),
        fill('곱을 빈칸에 넣어 보세요.', [['민지', 'sun', '20 × 5 = ___', '100'], ['준호', 'tree', '60 × 2 = ___', '120']], ['80', '12'], 0.22),
      ]),
  ],
  wrap: ['"30 × 4를 계산할 때 왜 곱의 끝에 0이 붙었나요?" 30은 10이 3개, 3 × 4 = 12는 10이 12개, 그래서 120이라고 말하게 한다. 출구 2번에서 12를 고른 학생은 0을 빠뜨린 것이므로 다음 시간 처음에 10이 몇 개인지 다시 세어 보게 한다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [4], colsOf: [20, 30], blanks: 'all' }, prompt: '곱셈표의 빈칸을 채워 보세요.', target: { cells: true }, difficulty: 0.12 },
    { type: 'choice', prompt: '10이 12개이면 얼마일까요?', options: ['12', '120', '1200'], answer: 1, difficulty: 0.12, explain: '10이 12개이면 12 × 10 = 120이에요.' },
    { type: 'choice', prompt: '30 × 3의 값은 얼마일까요?', options: ['9', '90', '33'], answer: 1, difficulty: 0.1, explain: '30은 10이 3개, 3 × 3 = 9이니까 10이 9개, 곧 90이에요.' },
  ]],
  ws: { title: '몇십 곱하기 몇', items: [
    wsTbl('3단과 몇십 곱셈표의 빈칸을 채우세요.', [3], [[3, 10], [3, 20], [3, 30], [3, 40]], '3 × 몇십', '30, 60, 90, 120', [10, 20, 30, 40]),
    { type: 'table', prompt: '곱을 쓰세요.', columns: ['식', '20 × 2', '40 × 3', '50 × 4', '60 × 5'], cells: [['곱', '40', '', '', '']], answer: '120, 200, 300' },
    { type: 'choice', prompt: '70 × 2와 같은 것에 ○ 하세요.', options: ['10이 14개', '10이 9개', '10이 72개'], answer: '10이 14개' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '40 × 5는 10이 ____개이므로 ____이에요.', answer: '20, 200' },
    { type: 'short', prompt: '60 × 3의 곱에 0이 붙는 까닭을 10이 몇 개인지로 설명해 보세요.' },
  ], easy: { note: '몇십은 10이 몇 개인지 생각해요. 20은 10이 2개, 30은 10이 3개예요.', items: [
    wsTbl('빈칸을 채우세요.', [2], [[2, 10], [2, 30]], '2 × 몇십', '20, 60', [10, 20, 30]),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '20 × 2는 10이 ____개이므로 ____이에요.', answer: '4, 40' },
    { type: 'choice', prompt: '30 × 2의 값에 ○ 하세요.', options: ['6', '60'], answer: '60' },
    { type: 'draw', prompt: '10장 묶음을 그려서 20 × 3을 나타내 보세요.' },
  ] } },
  diff: {
    easy: '수직선에 도착한 수가 바로 보이고, 말풍선은 맞는 카드에 초록 테두리가 생겨요.',
    base: '도착한 수와 곱을 직접 써요.',
    challenge: '수직선에 양 끝 수만 보여 몇십씩 스스로 세고, 50 × 3 같은 곱이 100을 넘는 식도 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 20 × 3의 곱을 6으로 쓴다(0을 빠뜨림) → 20은 10이 2개이니 곱도 10이 6개라고 말하게 한다. ② 곱하는 수와 몇십을 더해 23으로 쓴다 → 20씩 3번 뛴 곳이 곱이라고 수직선으로 보인다. ③ 3 × 4 = 12를 곱 12로 쓴다 → 10이 12개이면 120이라고 짚는다. 두 자리 수의 일의 자리까지 곱하는 것은 2차시에서 이어서 한다.',
}));

// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '십의 자리와 일의 자리로 나누어 곱하기',
  objective: '올림이 없는 (두 자리 수) × (한 자리 수)를 십의 자리와 일의 자리로 나누어 곱한 뒤 더해 구할 수 있다.',
  desc: 'a rabbit baker arranging 23 cookies in each tray with two full ten-cookie rows and three single cookies, three trays in a row on a table',
  text: '23 × 3',
  layers: [{ motif: 'tree', x: 100, y: 214, s: 1.1 }, { motif: 'flower', x: 340, y: 236 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"한 판에 쿠키가 23개씩 있어요. 3판이면 모두 몇 개일까요?" 시연 단추로 23을 20과 3으로 나누고 각각 3배 하는 모습을 보여 준다. "20 × 3은 얼마이고, 3 × 3은 얼마일까요?" 하고 따로 묻는다. 십의 자리 2만 곱하고 일의 자리 3을 곱하지 않는 학생에게는 낱개 쿠키도 3판이 있음을 짚는다.',
    '한 판에 몇 개씩 담긴 물건이 몇 판 있는 적이 있는지 떠올려 이야기해 봐요.'],
  demo: { tool: 'multiply', options: { mode: 'table', rowsOf: [3], colsOf: [20, 3], blanks: [] }, sequence: [] },
  acts: [
    act('a1', '활동 1. 20과 3으로 나누어 곱하기', 'multiply', '두 자리 수를 몇십과 몇으로 나누어 각각 곱해요. 곱셈표 칸에 부분곱을 써요.',
      '"23을 20과 3으로 나누어요. 각각 3배 하면 얼마일까요?" 십의 자리와 일의 자리를 따로 곱하게 한다. 20 × 3을 6으로 쓰는 학생에게는 1차시에 10이 몇 개인지 세던 것을 떠올리게 한다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        part('23 × 3을 20 × 3과 3 × 3으로 나누어 부분곱을 써 보세요.', 3, [20, 3], 0.1),
        part('41 × 2를 40 × 2와 1 × 2로 나누어 부분곱을 써 보세요.', 2, [40, 1], 0.15),
        part('22 × 4를 20 × 4와 2 × 4로 나누어 부분곱을 써 보세요.', 4, [20, 2], 0.2),
      ]),
    act('a2', '활동 2. 부분곱을 더해 곱 구하기', 'mindmap', '십의 자리 곱과 일의 자리 곱을 더하면 두 자리 수 곱하기 한 자리 수의 곱이에요.',
      '"60과 9를 합하면 23 × 3이 돼요. 더한 값은 얼마일까요?" 두 부분곱을 세로로 써서 더하게 한다. 60 + 9를 609로 쓰는 학생에게는 십의 자리와 일의 자리를 맞추어 더하는 것임을 짚는다.',
      LVF, [
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요.', [['민지', 'sun', '23 × 3 = 60 + 9 = ___', '69'], ['준호', 'tree', '41 × 2 = 80 + 2 = ___', '82']], ['62', '79'], 0.1),
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요.', [['민지', 'sun', '32 × 3 = 90 + 6 = ___', '96'], ['준호', 'tree', '12 × 4 = 40 + 8 = ___', '48']], ['98', '52'], 0.15),
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요. 곱이 100을 넘는 식도 있어요.', [['민지', 'sun', '21 × 5 = 100 + 5 = ___', '105'], ['준호', 'tree', '33 × 3 = 90 + 9 = ___', '99']], ['95', '93'], 0.2),
      ]),
    act('a3', '활동 3. 곱셈표에 곧바로 곱 쓰기', 'multiply', '나누어 곱하지 않고 한 번에 곱셈표 칸에 곱을 써요. 나누어 곱한 방법을 떠올려요.',
      '"머릿속으로 십의 자리와 일의 자리를 나누어 곱해 봐요." 말로 풀이를 설명하게 한다. 일의 자리 곱을 빼먹는 학생에게는 34 × 2에서 4 × 2를 어디에 더했는지 물어본다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        part('34 × 2의 값을 곱셈표 칸에 써 보세요.', 2, [34], 0.12),
        part('31 × 3의 값을 곱셈표 칸에 써 보세요.', 3, [31], 0.16),
        part('21 × 4의 값을 곱셈표 칸에 써 보세요.', 4, [21], 0.2),
      ]),
  ],
  wrap: ['"23 × 3을 계산할 때 어떻게 나누어서 곱했나요?" 20 × 3과 3 × 3으로 나누어 곱한 뒤 더했다고 짝에게 말하게 한다. 출구 2번을 틀린 학생은 일의 자리 곱을 빠뜨린 것이므로 다음 시간 처음에 14 × 2를 쓴 풀이를 다시 보게 한다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [2], colsOf: [43], blanks: [[2, 43]] }, prompt: '43 × 2의 값을 곱셈표 칸에 써 보세요.', target: { cells: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '14 × 2의 값은 얼마일까요?', options: ['16', '28', '18'], answer: 1, difficulty: 0.12, explain: '10 × 2 = 20과 4 × 2 = 8을 더하면 28이에요.' },
    { type: 'choice', prompt: '24 × 2를 20 × 2와 4 × 2로 나누어 곱했어요. 각각의 곱을 더하면 얼마일까요?', options: ['40 + 8 = 48', '40 + 4 = 44', '20 + 8 = 28'], answer: 0, difficulty: 0.15, explain: '20 × 2 = 40, 4 × 2 = 8이니까 40 + 8 = 48이에요.' },
  ]],
  ws: { title: '올림 없는 (두 자리 수) × (한 자리 수)', items: [
    wsTbl('나누어 곱한 부분곱을 써 보세요. 23 × 3은 20 × 3과 3 × 3이에요.', [3], [[3, 20], [3, 3]], '23 × 3', '60, 9', [20, 3]),
    { type: 'blank', prompt: '부분곱을 더해 곱을 쓰세요.', text: '32 × 2 = 60 + ____ = ____', answer: '4, 64' },
    { type: 'choice', prompt: '42 × 2의 값에 ○ 하세요.', options: ['44', '84', '48'], answer: '84' },
    { type: 'table', prompt: '십의 자리와 일의 자리로 나누어 곱하세요.', columns: ['식', '십의 자리 곱', '일의 자리 곱', '합'], cells: [['31 × 3', '90', '3', '93'], ['24 × 2', '', '', ''], ['12 × 4', '', '', '']], answer: '40, 8, 48 / 40, 8, 48' },
    { type: 'short', prompt: '22 × 3을 나누어 곱하는 방법을 말로 써 보세요.' },
  ], easy: { note: '두 자리 수를 몇십과 몇으로 나누고 각각 곱한 뒤 더해요.', items: [
    wsTbl('부분곱을 써 보세요. 12 × 3은 10 × 3과 2 × 3이에요.', [3], [[3, 10], [3, 2]], '12 × 3', '30, 6', [10, 2]),
    { type: 'blank', prompt: '부분곱을 더해 곱을 쓰세요.', text: '12 × 3 = 30 + ____ = ____', answer: '6, 36' },
    { type: 'choice', prompt: '21 × 3의 값에 ○ 하세요.', options: ['63', '24'], answer: '63' },
    { type: 'draw', prompt: '11 × 4를 10개 묶음 4개와 낱개 4개로 그려 보세요.' },
  ] } },
  diff: {
    easy: '곱셈표 부분곱 칸 위에 나누어 쓴 수가 보이고, 말풍선은 맞는 카드에 초록 테두리가 생겨요.',
    base: '나누어 곱한 값을 직접 쓰고, 더하기는 말풍선으로 확인해요.',
    challenge: '나누지 않고 한 번에 곱을 쓰고, 곱이 100을 넘는 21 × 5 같은 식도 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 십의 자리 2만 곱하고 일의 자리 3은 곱하지 않는다 → 낱개도 3판이다. ② 부분곱을 이어 붙여 609로 쓴다(60과 9) → 더하는 것이다. ③ 20 × 3을 6으로 쓴다 → 10이 몇 개인지 세어 보게 한다. 일의 자리 곱이 10 이상이 되는 경우는 3차시에서 이어서 한다.',
}));

// ───────────────────────────── 3차시 (core · representation) ─────────────────────────────
L.push(lesson(3, {
  title: '일의 자리 곱이 10을 넘을 때 올려 곱하기',
  objective: '일의 자리 곱이 10 이상인 (두 자리 수) × (한 자리 수)를 부분곱으로 나누어 구하고, 올림이 생기는 까닭을 말할 수 있다.',
  desc: 'a rabbit packing fifteen paper cherries in each of three baskets with a pile of loose cherries tied into a new bunch of ten beside the baskets',
  text: '15 × 3',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216, color: 'mint' }, { motif: 'star', x: 330, y: 84, s: 0.6 }],
  intro: ['"한 바구니에 체리가 15개씩 있어요. 3바구니이면 모두 몇 개일까요?" 시연 단추로 15를 10과 5로 나누고 각각 3배 하는 모습을 보여 준다. "5 × 3은 15인데 낱개가 15개가 되었어요. 낱개 10개는 십 묶음 하나로 바꿀 수 있을까요?" 하고 묻는다. 일의 자리에 15를 그대로 쓰는 학생에게는 낱개 10개를 묶으면 십의 자리가 하나 늘어난다고 짚는다.',
    '낱개 10개를 묶어 한 묶음이 된 적이 있는지 떠올려 짝에게 말해 봐요.'],
  demo: { tool: 'multiply', options: { mode: 'table', rowsOf: [3], colsOf: [10, 5], blanks: [] }, sequence: [] },
  acts: [
    act('a1', '활동 1. 일의 자리 곱이 큰 부분곱 쓰기', 'multiply', '두 자리 수를 십의 자리와 일의 자리로 나누어 각각 곱해요. 일의 자리 곱이 10을 넘는 식이에요.',
      '"15를 10과 5로 나누고 각각 3배 해요. 5 × 3은 얼마일까요?" 일의 자리 곱이 15가 된다는 것을 칸에 직접 쓰게 한다. 일의 자리 곱을 한 자리 수로만 쓰려는 학생에게는 15개는 낱개 15개임을 짚는다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        part('15 × 3을 10 × 3과 5 × 3으로 나누어 부분곱을 써 보세요.', 3, [10, 5], 0.1),
        part('18 × 4를 10 × 4와 8 × 4로 나누어 부분곱을 써 보세요.', 4, [10, 8], 0.15),
        part('27 × 3을 20 × 3과 7 × 3으로 나누어 부분곱을 써 보세요.', 3, [20, 7], 0.2),
      ]),
    act('a2', '활동 2. 부분곱을 더해 곱 구하기', 'mindmap', '십의 자리 곱과 일의 자리 곱을 더해요. 일의 자리에서 올림이 생겨요.',
      '"30과 15를 더하면 얼마일까요?" 일의 자리 5를 쓰고 올림 1을 십의 자리에 더하게 한다. 올림을 잊고 35라고 쓰는 학생에게는 낱개 15개 가운데 10개가 십 묶음 하나가 되었음을 그림으로 짚는다.',
      LVF, [
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요.', [['민지', 'sun', '15 × 3 = 30 + 15 = ___', '45'], ['준호', 'tree', '18 × 4 = 40 + 32 = ___', '72']], ['35', '62'], 0.1),
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요.', [['민지', 'sun', '27 × 3 = 60 + 21 = ___', '81'], ['준호', 'tree', '19 × 2 = 20 + 18 = ___', '38']], ['71', '79'], 0.16),
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요. 곱이 100을 넘는 식도 있어요.', [['민지', 'sun', '36 × 4 = 120 + 24 = ___', '144'], ['준호', 'tree', '28 × 3 = 60 + 24 = ___', '84']], ['154', '74'], 0.22),
      ]),
    act('a3', '활동 3. 올림이 생기는 식 가려내기', 'mindmap', '일의 자리 곱이 10 이상이면 올림이 생겨요. 올림이 생기는 식과 곱을 바르게 구한 식을 골라요.',
      '"일의 자리끼리 곱해서 10이 넘는 식을 찾아요." 일의 자리 곱을 손으로 가리고 따로 계산하게 한다. 십의 자리 곱도 10이 넘으면 올림이라고 생각하는 학생에게는 이 시간에는 일의 자리에서 올림이 생기는 경우만 찾는다고 말해 준다.',
      ML('pick', '올림 찾기'), [
        pick('일의 자리 곱이 10 이상인 식만 골라 보세요.', '올림이 생기는 식', [['14 × 2', 0], ['16 × 3', 1], ['21 × 4', 0], ['25 × 2', 1], ['32 × 3', 0], ['19 × 5', 1]], 0.12,
          ['일의 자리 수끼리 곱해서 10이 넘는지 따져 봐요.', '십의 자리 수는 손으로 가리고 일의 자리 곱만 보아요.', '6 × 3 = 18, 5 × 2 = 10, 9 × 5 = 45가 10 이상이에요.']),
        pick('일의 자리끼리 곱한 값이 15인 식만 골라 보세요.', '일의 자리 곱이 15', [['15 × 3', 1], ['25 × 3', 1], ['13 × 5', 1], ['14 × 3', 0], ['16 × 2', 0], ['18 × 2', 0]], 0.18),
        pick('곱을 바르게 구한 식만 골라 보세요.', '바른 곱', [['17 × 3 = 51', 1], ['24 × 4 = 96', 1], ['16 × 5 = 70', 0], ['38 × 2 = 66', 0], ['29 × 2 = 58', 1]], 0.24,
          ['십의 자리 곱과 일의 자리 곱을 따로 구해 더해 봐요.', '일의 자리 곱이 10 이상이면 십의 자리에 올림을 더해요.', '16 × 5는 50 + 30 = 80, 38 × 2는 60 + 16 = 76이에요.'],
          { conclude: '일의 자리 곱이 10 이상이면 십의 자리에 올림을 더해요.' }),
      ]),
  ],
  wrap: ['"일의 자리 곱이 15일 때 5만 쓰고 1은 어디에 더했나요?" 십의 자리 곱에 더한다고 말하게 한다. 출구 3번에서 5를 고른 학생은 올림한 수 대신 일의 자리를 말한 것이므로 다음 시간 처음에 8 × 4 = 32를 십 묶음으로 바꾸어 보게 한다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [5], colsOf: [10, 6], blanks: 'all' }, prompt: '16 × 5를 10 × 5와 6 × 5로 나누어 부분곱을 써 보세요.', target: { cells: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '24 × 3의 값은 얼마일까요?', options: ['62', '72', '66'], answer: 1, difficulty: 0.15, explain: '20 × 3 = 60, 4 × 3 = 12이니까 60 + 12 = 72예요.' },
    { type: 'choice', prompt: '8 × 4 = 32에서 십의 자리로 올림하는 수는 얼마일까요?', options: ['2', '3', '32'], answer: 1, difficulty: 0.2, explain: '낱개 32개는 십 묶음 3개와 낱개 2개이니까 십의 자리로 3을 올려요.' },
  ]],
  ws: { title: '일의 자리에서 올림이 있는 곱셈', items: [
    wsTbl('나누어 곱한 부분곱을 써 보세요. 16 × 4는 10 × 4와 6 × 4예요.', [4], [[4, 10], [4, 6]], '16 × 4', '40, 24', [10, 6]),
    { type: 'blank', prompt: '부분곱을 더해 곱을 쓰세요.', text: '16 × 4 = 40 + ____ = ____', answer: '24, 64' },
    { type: 'choice', prompt: '25 × 3의 값에 ○ 하세요.', options: ['65', '75', '615'], answer: '75' },
    { type: 'table', prompt: '십의 자리 곱과 일의 자리 곱으로 나누어 곱하세요.', columns: ['식', '십의 자리 곱', '일의 자리 곱', '합'], cells: [['17 × 3', '30', '21', '51'], ['26 × 3', '', '', ''], ['19 × 4', '', '', '']], answer: '60, 18, 78 / 40, 36, 76' },
    { type: 'short', prompt: '35 × 2에서 일의 자리 곱 10을 어떻게 처리했는지 써 보세요.' },
  ], easy: { note: '일의 자리 곱이 10 이상이면 10개 묶음은 십의 자리에 더해요.', items: [
    wsTbl('부분곱을 써 보세요. 13 × 4는 10 × 4와 3 × 4예요.', [4], [[4, 10], [4, 3]], '13 × 4', '40, 12', [10, 3]),
    { type: 'blank', prompt: '부분곱을 더해 곱을 쓰세요.', text: '13 × 4 = 40 + ____ = ____', answer: '12, 52' },
    { type: 'choice', prompt: '15 × 2의 값에 ○ 하세요.', options: ['30', '25'], answer: '30' },
    { type: 'draw', prompt: '낱개 12개를 십 묶음 1개와 낱개 2개로 바꾸어 그려 보세요.' },
  ] } },
  diff: {
    easy: '곱셈표 부분곱 칸에 나누어 쓴 수가 보이고, 말풍선은 맞는 카드에 초록 테두리가 생겨요.',
    base: '부분곱을 직접 쓰고 더해요.',
    challenge: '곱이 100을 넘는 36 × 4와 올림이 생기는 식을 바르게 가려내는 문제가 더 나와요.',
  },
  notes: '자주 보이는 어려움: ① 올림을 더하지 않고 일의 자리와 십의 자리를 따로 쓴다(15 × 3 = 3015) → 부분곱을 더해야 곱이다. ② 올림한 수를 십의 자리 곱에 곱한다 → 올림은 더하는 것이다. ③ 일의 자리 곱이 10 미만인 식도 올림이라고 한다 → 일의 자리 곱을 따로 계산해 본다. 십의 자리에서 올림이 있는 곱은 4차시에서 이어서 한다.',
}));

// ───────────────────────────── 4차시 (core · application) ─────────────────────────────
L.push(lesson(4, {
  title: '십의 자리 곱이 100을 넘을 때 곱하기',
  objective: '십의 자리 곱이 10 이상이어서 곱이 세 자리 수가 되는 (두 자리 수) × (한 자리 수)를 구하고, 곱의 크기를 설명할 수 있다.',
  desc: 'a rabbit stacking boxes of fifty-two paper marbles into four tall piles that reach above a classroom shelf, with a fox counting the marbles on a board',
  text: '52 × 4',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 390, y: 232, color: 'lavender' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"한 상자에 구슬이 52개씩 있어요. 4상자이면 모두 몇 개일까요?" 시연 단추로 52를 50과 2로 나누어 50 × 4 = 200, 2 × 4 = 8을 구하는 모습을 보여 준다. "곱이 세 자리 수가 되었네요. 어림해 보면 50 × 4와 같으니 200쯤이에요." 200과 8을 이어 붙여 2008로 쓰는 학생에게는 두 수를 더해야 한다고 짚는다.',
    '곱해서 세 자리 수가 되는 경우를 본 적이 있는지 떠올려 짝에게 말해 봐요.'],
  demo: { tool: 'multiply', options: { mode: 'table', rowsOf: [4], colsOf: [50, 2], blanks: [] }, sequence: [] },
  acts: [
    act('a1', '활동 1. 몇십 곱이 큰 부분곱 쓰기', 'multiply', '십의 자리 곱이 100이 넘는 두 자리 수 곱하기 한 자리 수를 나누어 곱해요.',
      '"52를 50과 2로 나누어요. 50 × 4는 10이 몇 개일까요?" 50 × 4는 10이 20개라고 말하게 한다. 십의 자리 곱을 20으로 쓰는 학생에게는 5 × 4 = 20은 10이 20개, 곧 200임을 짚는다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        part('52 × 4를 50 × 4와 2 × 4로 나누어 부분곱을 써 보세요.', 4, [50, 2], 0.1),
        part('63 × 3을 60 × 3과 3 × 3으로 나누어 부분곱을 써 보세요.', 3, [60, 3], 0.15),
        part('71 × 5를 70 × 5와 1 × 5로 나누어 부분곱을 써 보세요.', 5, [70, 1], 0.22),
      ]),
    act('a2', '활동 2. 부분곱을 더해 세 자리 수 곱 구하기', 'mindmap', '십의 자리 곱과 일의 자리 곱을 더하면 곱이 세 자리 수가 돼요.',
      '"200과 8을 더하면 얼마일까요?" 백의 자리, 십의 자리, 일의 자리를 말하며 읽게 한다. 200 + 8을 28로 쓰는 학생에게는 200은 이백이라고 읽게 한다.',
      LVF, [
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요.', [['민지', 'sun', '52 × 4 = 200 + 8 = ___', '208'], ['준호', 'tree', '63 × 3 = 180 + 9 = ___', '189']], ['218', '198'], 0.1),
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요.', [['민지', 'sun', '82 × 3 = 240 + 6 = ___', '246'], ['준호', 'tree', '91 × 2 = 180 + 2 = ___', '182']], ['236', '172'], 0.16),
        fill('부분곱을 더한 값을 빈칸에 넣어 보세요. 일의 자리에서도 올림이 생겨요.', [['민지', 'sun', '45 × 5 = 200 + 25 = ___', '225'], ['준호', 'tree', '74 × 4 = 280 + 16 = ___', '296']], ['235', '286'], 0.22),
      ]),
    act('a3', '활동 3. 곱셈표에 곧바로 곱 쓰기', 'multiply', '곱이 세 자리 수가 되는 곱을 곱셈표 칸에 써요. 나누어 곱한 방법을 떠올려요.',
      '"십의 자리 곱이 얼마인지 먼저 어림해 봐요." 곱의 크기를 말로 먼저 어림하게 한다. 일의 자리 곱을 빠뜨리는 학생에게는 34 × 6에서 4 × 6은 어디에 더했는지 물어본다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        part('34 × 6의 값을 곱셈표 칸에 써 보세요.', 6, [34], 0.16),
        part('27 × 8의 값을 곱셈표 칸에 써 보세요.', 8, [27], 0.2),
        part('53 × 7의 값을 곱셈표 칸에 써 보세요.', 7, [53], 0.24),
      ]),
  ],
  wrap: ['"52 × 4의 곱은 왜 세 자리 수가 되었나요?" 십의 자리 곱 50 × 4가 200이어서 백의 자리가 생겼다고 말하게 한다. 출구 3번을 틀린 학생은 십의 자리 곱이 10 이상이 되는 식을 찾지 못한 것이므로 다음 시간에 5 × 2 = 10 같은 식을 짝과 확인해 본다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [4], colsOf: [64], blanks: [[4, 64]] }, prompt: '64 × 4의 값을 곱셈표 칸에 써 보세요.', target: { cells: true }, difficulty: 0.18 },
    { type: 'choice', prompt: '75 × 2의 값은 얼마일까요?', options: ['140', '150', '170'], answer: 1, difficulty: 0.15, explain: '70 × 2 = 140과 5 × 2 = 10을 더하면 150이에요.' },
    { type: 'choice', prompt: '십의 자리에서 올림이 생기는 식은 어느 것일까요?', options: ['21 × 4', '32 × 3', '54 × 2'], answer: 2, difficulty: 0.2, explain: '54 × 2에서 5 × 2 = 10이어서 십의 자리 곱이 100이 되어 백의 자리가 생겨요.' },
  ]],
  ws: { title: '십의 자리에서 올림이 있는 곱셈', items: [
    wsTbl('나누어 곱한 부분곱을 써 보세요. 61 × 5는 60 × 5와 1 × 5예요.', [5], [[5, 60], [5, 1]], '61 × 5', '300, 5', [60, 1]),
    { type: 'blank', prompt: '부분곱을 더해 곱을 쓰세요.', text: '61 × 5 = 300 + ____ = ____', answer: '5, 305' },
    { type: 'choice', prompt: '83 × 3의 값에 ○ 하세요.', options: ['249', '2409', '169'], answer: '249' },
    { type: 'table', prompt: '십의 자리 곱과 일의 자리 곱으로 나누어 곱하세요.', columns: ['식', '십의 자리 곱', '일의 자리 곱', '합'], cells: [['72 × 4', '280', '8', '288'], ['93 × 3', '', '', ''], ['56 × 5', '', '', '']], answer: '270, 9, 279 / 250, 30, 280' },
    { type: 'short', prompt: '곱이 세 자리 수가 되는 까닭을 십의 자리 곱을 예로 들어 써 보세요.' },
  ], easy: { note: '십의 자리 곱은 10이 몇 개인지 생각해서 구해요. 두 부분곱을 더하면 곱이에요.', items: [
    wsTbl('부분곱을 써 보세요. 52 × 3은 50 × 3과 2 × 3이에요.', [3], [[3, 50], [3, 2]], '52 × 3', '150, 6', [50, 2]),
    { type: 'blank', prompt: '부분곱을 더해 곱을 쓰세요.', text: '52 × 3 = 150 + ____ = ____', answer: '6, 156' },
    { type: 'choice', prompt: '60 × 2의 값에 ○ 하세요.', options: ['12', '120'], answer: '120' },
    { type: 'draw', prompt: '10장 묶음 12개를 그려서 60 × 2를 나타내 보세요.' },
  ] } },
  diff: {
    easy: '곱셈표 부분곱 칸에 나누어 쓴 수가 보이고, 말풍선은 맞는 카드에 초록 테두리가 생겨요.',
    base: '부분곱을 직접 쓰고 더해요.',
    challenge: '곱셈표에 곧바로 곱을 쓰고 일의 자리에서도 올림이 생기는 45 × 5 같은 식을 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 부분곱을 이어 붙여 2008로 쓴다 → 더하는 것이다. ② 50 × 4를 20으로 쓴다 → 5 × 4는 10이 20개이니 200이다. ③ 올림이 두 번 생기는 식에서 한 번을 빠뜨린다 → 일의 자리 곱과 십의 자리 곱을 각각 따로 써서 더한다. 곱의 크기를 어림하는 방법은 5차시에서 이어서 한다.',
}));

// ───────────────────────────── 5차시 (core · concept) ─────────────────────────────
L.push(lesson(5, {
  title: '가까운 몇십으로 어림해서 곱하기',
  objective: '두 자리 수를 가까운 몇십으로 어림하고, 어림한 수에 한 자리 수를 곱해 곱을 어림할 수 있다.',
  desc: 'a rabbit shopkeeper looking at bags of thirty-eight paper beads and rounding the count to forty on a small paper sign above the shelf',
  text: '약 40개',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 236 }],
  intro: ['"한 봉지에 구슬이 38개씩 들어 있어요. 4봉지이면 대략 몇 개일까요? 정확하게 계산하지 않고도 어림해 볼 수 있어요." 시연 단추로 38이 40에 가까운 모습을 수직선으로 보여 준다. "38은 30과 40 가운데 어디에 더 가까울까요?" 하고 묻고, 40 × 4 = 160쯤이라고 말한다. 8이 큰 수라서 30으로 어림하는 학생에게는 수직선에서 38과 40 사이의 거리를 직접 재어 보게 한다.',
    '정확한 수 대신 대략으로 말했던 적이 있는지 떠올려 짝에게 이야기해 봐요.'],
  demo: { tool: 'numberline', options: { mode: 'read', min: 30, max: 40, step: 10, sub: 10, choices: ['약 30', '약 40'], question: '38은 약 몇십일까요?', marks: [38] }, sequence: [] },
  acts: [
    act('a1', '활동 1. 가까운 몇십 찾기', 'mindmap', '두 자리 수를 가까운 몇십으로 어림해요. 일의 자리가 5보다 작으면 내려 어림하고, 5 이상이면 올려 어림해요.',
      '"38은 30과 40 사이에서 어느 쪽에 더 가깝나요?" 일의 자리 수가 5보다 작은지 큰지 보게 한다. 일의 자리가 8이어서 30으로 내려 어림하는 학생에게는 38에서 40까지 2, 30까지 8임을 보여 준다.',
      LVF, [
        fill('가까운 몇십을 빈칸에 넣어 보세요.', [['민지', 'sun', '38을 몇십으로 어림하면 약 ___이에요.', '40'], ['준호', 'tree', '52를 몇십으로 어림하면 약 ___이에요.', '50']], ['30', '60'], 0.1),
        fill('가까운 몇십을 빈칸에 넣어 보세요.', [['민지', 'sun', '67을 몇십으로 어림하면 약 ___이에요.', '70'], ['준호', 'tree', '83을 몇십으로 어림하면 약 ___이에요.', '80']], ['90', '60'], 0.15),
        fill('가까운 몇십을 빈칸에 넣어 보세요.', [['민지', 'sun', '24를 몇십으로 어림하면 약 ___이에요.', '20'], ['준호', 'tree', '46을 몇십으로 어림하면 약 ___이에요.', '50']], ['40', '30'], 0.2),
      ]),
    act('a2', '활동 2. 어림한 수로 곱하기', 'multiply', '어림한 몇십에 한 자리 수를 곱해요. 곱셈표 칸에 어림한 곱을 써요.',
      '"38 × 4는 40 × 4와 비슷해요. 40 × 4는 10이 몇 개일까요?" 몇십 곱하기 몇을 1차시처럼 10이 몇 개로 구하게 한다. 어림한 곱을 정확한 곱이라고 말하는 학생에게는 약이라는 말을 붙여 읽게 한다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        part('38 × 4를 어림하여 40 × 4의 값을 곱셈표 칸에 써 보세요.', 4, [40], 0.1),
        part('51 × 3을 어림하여 50 × 3의 값을 곱셈표 칸에 써 보세요.', 3, [50], 0.15),
        part('69 × 6을 어림하여 70 × 6의 값을 곱셈표 칸에 써 보세요.', 6, [70], 0.2),
      ]),
    act('a3', '활동 3. 어림 방법 맞게 말하기', 'mindmap', '어림하는 방법이 맞는 말만 골라요. 가까운 몇십으로 어림해야 해요.',
      '"이 말이 맞는지 수직선에서 가까운 쪽을 찾아 말해 봐요." 일의 자리가 5 이상이면 올림, 5 미만이면 버림이라는 말을 짝에게 해 보게 한다. 4와 5 사이에서 갈등하는 학생에게는 45처럼 한가운데 수는 올려 어림하는 약속이 있다고 알려 준다.',
      ML('pick', '어림하기'), [
        pick('가까운 몇십으로 알맞게 어림한 식만 골라 보세요.', '알맞은 어림', [['41 × 3 ≈ 40 × 3', 1], ['58 × 2 ≈ 60 × 2', 1], ['27 × 4 ≈ 30 × 4', 1], ['34 × 5 ≈ 40 × 5', 0], ['62 × 3 ≈ 70 × 3', 0]], 0.12,
          ['두 자리 수가 가까운 몇십이 어디인지 찾아 봐요.', '일의 자리 수가 5보다 작은지 큰지 살펴요.', '41은 40, 58은 60, 27은 30에 가까워요. 34는 30, 62는 60에 가까워요.']),
        pick('어림하여 곱한 값이 200이 되는 식만 골라 보세요.', '어림한 곱이 200', [['39 × 5 ≈ 40 × 5', 1], ['51 × 4 ≈ 50 × 4', 1], ['62 × 3 ≈ 60 × 3', 0], ['48 × 4 ≈ 50 × 4', 1], ['21 × 9 ≈ 20 × 9', 0]], 0.18),
        pick('가까운 몇십으로 알맞게 어림한 말만 골라 보세요.', '알맞은 말', [['44는 약 40이에요', 1], ['76은 약 80이에요', 1], ['32는 약 40이에요', 0], ['58은 약 50이에요', 0], ['91은 약 90이에요', 1]], 0.22,
          ['수직선에서 가까운 몇십을 찾아 봐요.', '일의 자리 수가 5보다 작으면 내려 어림해요.', '44는 40, 76은 80, 91은 90에 가까워요. 32는 30, 58은 60이에요.'],
          { conclude: '일의 자리가 5보다 작으면 내려서, 5 이상이면 올려서 가까운 몇십으로 어림해요.' }),
      ]),
  ],
  wrap: ['"47을 어림하면 약 몇십일까요? 그렇게 말한 까닭은 무엇인가요?" 일의 자리 7이 5 이상이라서 50에 더 가깝다고 말하게 한다. 출구 3번을 틀린 학생은 내림과 올림 기준을 놓친 것이므로 다음 시간에 수직선에서 거리를 재어 본다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [5], colsOf: [60], blanks: [[5, 60]] }, prompt: '59 × 5를 어림하여 60 × 5의 값을 곱셈표 칸에 써 보세요.', target: { cells: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '49 × 3을 가까운 몇십으로 어림하여 계산하면 약 얼마일까요?', options: ['약 120', '약 150', '약 200'], answer: 1, difficulty: 0.15, explain: '49는 약 50이고 50 × 3 = 150이라서 약 150이에요.' },
    { type: 'choice', prompt: '28을 가까운 몇십으로 어림하면 얼마일까요?', options: ['20', '30', '28'], answer: 1, difficulty: 0.1, explain: '일의 자리가 8이어서 30에 더 가까워요.' },
  ]],
  ws: { title: '가까운 몇십으로 어림하기', items: [
    wsTbl('어림한 곱을 곱셈표에 써 보세요. 39 × 4는 40 × 4로 어림해요.', [4], [[4, 40]], '39 × 4 ≈ 40 × 4', '160', [40]),
    { type: 'table', prompt: '가까운 몇십으로 어림하고 어림한 곱을 쓰세요.', columns: ['식', '어림한 수', '어림한 곱'], cells: [['41 × 5', '40', '200'], ['58 × 3', '', ''], ['72 × 4', '', '']], answer: '60, 180 / 70, 280' },
    { type: 'choice', prompt: '63을 가까운 몇십으로 어림한 것에 ○ 하세요.', options: ['60', '70', '63'], answer: '60' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '29 × 6은 약 ____ × 6 = ____이에요.', answer: '30, 180' },
    { type: 'short', prompt: '일의 자리 수가 5보다 작을 때와 5 이상일 때 어떻게 어림하는지 써 보세요.' },
  ], easy: { note: '두 자리 수가 어느 몇십에 가까운지 보고, 그 몇십에 곱해요.', items: [
    wsTbl('어림한 곱을 곱셈표에 써 보세요. 19 × 3은 20 × 3으로 어림해요.', [3], [[3, 20]], '19 × 3 ≈ 20 × 3', '60', [20]),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '31을 어림하면 약 ____이에요.', answer: '30' },
    { type: 'choice', prompt: '49를 가까운 몇십으로 어림한 것에 ○ 하세요.', options: ['40', '50'], answer: '50' },
    { type: 'short', prompt: '22 × 2를 어림하는 식을 써 보세요.' },
  ] } },
  diff: {
    easy: '수직선에서 가까운 몇십이 어디인지 보이고, 말풍선은 맞는 카드에 초록 테두리가 생겨요.',
    base: '가까운 몇십을 스스로 찾고 어림한 곱을 직접 써요.',
    challenge: '어림한 곱이 같은 식을 골라 가까운 몇십이 다른 식과 비교하고, 69 × 6 같은 큰 곱을 어림해요.',
  },
  notes: '자주 보이는 어려움: ① 일의 자리가 큰 수를 내려서 어림한다(38 → 30) → 38과 40, 38과 30 사이의 거리를 비교한다. ② 어림한 곱을 정확한 곱이라고 말한다 → "약"을 붙여 읽는다. ③ 어림한 수 대신 처음 수에 곱한다 → 어림한 몇십에 곱한다. 어림한 곱과 정확한 곱을 견주는 것은 6차시에서 이어서 한다.',
}));

// ───────────────────────────── 6차시 (practice) ─────────────────────────────
L.push(lesson(6, {
  title: '어림한 곱과 정확한 곱 견주기',
  objective: '어림한 곱과 정확한 곱을 견주어 어느 쪽이 더 큰지, 얼마나 차이 나는지 말할 수 있다.',
  desc: 'a rabbit comparing two paper price tags, one with an approximate amount and one with the exact amount, on a small wooden market stall',
  text: '어림 vs 정확',
  layers: [{ motif: 'tree', x: 100, y: 214, s: 1.1 }, { motif: 'flower', x: 340, y: 236 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"어제는 38 × 4를 40 × 4로 어림해서 약 160이라고 했어요. 정확한 곱은 얼마일까요?" 38 × 4 = 152를 구해 주고 "160과 152 가운데 어느 쪽이 더 클까요?" 하고 묻는다. 어림한 값이 항상 정확한 값보다 크다고 말하는 학생에게는 41 × 4를 40 × 4로 어림하는 반대 경우를 보여 준다.',
    '장을 볼 때 대략 얼마가 들지 어림해 본 적이 있는지 짝에게 말해 봐요.'],
  demo: { tool: 'multiply', options: { mode: 'table', rowsOf: [4], colsOf: [40, 38], blanks: [] }, sequence: [] },
  acts: [
    act('a1', '활동 1. 어림한 곱 구하기', 'multiply', '두 자리 수를 가까운 몇십으로 어림해서 곱해요. 어림한 곱을 곱셈표 칸에 써요.',
      '"19는 가까운 몇십으로 20이에요. 20 × 7은 얼마일까요?" 어림한 수를 먼저 말한 뒤 곱하게 한다. 19 × 7에 곧바로 일의 자리를 곱하려는 학생에게는 어림은 쉽게 계산하려는 것이라고 짚는다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        part('19 × 7을 어림하여 20 × 7의 값을 곱셈표 칸에 써 보세요.', 7, [20], 0.1),
        part('62 × 5를 어림하여 60 × 5의 값을 곱셈표 칸에 써 보세요.', 5, [60], 0.15),
        part('29 × 8을 어림하여 30 × 8의 값을 곱셈표 칸에 써 보세요.', 8, [30], 0.2),
      ]),
    act('a2', '활동 2. 어림한 곱이 큰지 작은지 가려내기', 'mindmap', '어림한 곱과 정확한 곱을 견주어요. 두 자리 수를 올려 어림하면 어림한 곱이 더 크고, 내려 어림하면 더 작아요.',
      '"29 × 3은 87, 어림한 30 × 3은 90이에요. 어느 쪽이 더 클까요?" 어림한 수가 처음 수보다 큰지 작은지 먼저 보게 한다. 곱의 크기를 일의 자리끼리만 견주는 학생에게는 올려 어림했는지 내려 어림했는지 짚는다.',
      ML('pick', '어림과 정확'), [
        pick('어림한 곱이 정확한 곱보다 큰 식만 골라 보세요.', '어림한 곱이 더 큰 식', [['29 × 3 (≈ 30 × 3)', 1], ['41 × 4 (≈ 40 × 4)', 0], ['58 × 2 (≈ 60 × 2)', 1], ['52 × 3 (≈ 50 × 3)', 0], ['39 × 5 (≈ 40 × 5)', 1]], 0.12,
          ['어림한 수가 처음 수보다 큰지 작은지 먼저 살펴봐요.', '올려 어림하면 어림한 곱이 커져요.', '29는 30으로, 58은 60으로, 39는 40으로 올려 어림해서 어림한 곱이 더 커요.']),
        pick('어림한 곱이 정확한 곱보다 작은 식만 골라 보세요.', '어림한 곱이 더 작은 식', [['21 × 6 (≈ 20 × 6)', 1], ['48 × 3 (≈ 50 × 3)', 0], ['32 × 4 (≈ 30 × 4)', 1], ['69 × 2 (≈ 70 × 2)', 0], ['53 × 5 (≈ 50 × 5)', 1]], 0.18),
        pick('어림한 곱과 정확한 곱의 차이가 5보다 작은 식만 골라 보세요.', '차이가 작은 식', [['31 × 4 (≈ 30 × 4)', 1], ['49 × 2 (≈ 50 × 2)', 1], ['62 × 5 (≈ 60 × 5)', 0], ['28 × 3 (≈ 30 × 3)', 0], ['51 × 3 (≈ 50 × 3)', 1], ['38 × 4 (≈ 40 × 4)', 0]], 0.22,
          ['정확한 곱을 구해 어림한 곱과 얼마나 차이 나는지 빼서 알아봐요.', '어림한 수와 처음 수의 차이가 작고 곱하는 수도 작을수록 두 곱의 차이가 작아요.', '31 × 4 = 124와 120은 4, 49 × 2 = 98과 100은 2, 51 × 3 = 153과 150은 3 차이예요.']),
      ]),
    act('a3', '활동 3. 이야기에서 어림한 곱 이어 보기', 'mindmap', '물건 이야기를 읽고 알맞은 어림한 곱을 이어요.',
      '"한 봉지에 21개씩 4봉지는 약 몇 개일까요?" 가까운 몇십을 먼저 말하게 한다. 4봉지를 곱하는 수가 아니라 더하는 수로 생각하는 학생에게는 같은 수를 4번 더하는 것이 곱셈이라고 짚는다.',
      ML('match', '어림한 곱'), [
        match('물건 이야기와 어림한 곱을 이어 보세요.', [['한 봉지에 21개씩 4봉지는 약 몇 개일까요?', '약 80개'], ['한 줄에 39명씩 3줄은 약 몇 명일까요?', '약 120명'], ['한 상자에 52개씩 5상자는 약 몇 개일까요?', '약 250개']], ['약 200개'], 0.14,
          ['한 번에 담긴 수를 가까운 몇십으로 어림해 봐요.', '어림한 몇십에 곱하는 수를 곱해요.', '20 × 4, 40 × 3, 50 × 5를 계산해요.']),
        match('쪽수와 사람 수 이야기도 어림한 곱과 이어 보세요.', [['문제집 한 권이 28쪽씩 6권은 약 몇 쪽일까요?', '약 180쪽'], ['한 반에 31명씩 3반은 약 몇 명일까요?', '약 90명'], ['구슬 한 줄에 62개씩 4줄은 약 몇 개일까요?', '약 240개']], ['약 300쪽'], 0.2),
        match('큰 수 이야기도 어림한 곱과 이어 보세요.', [['색종이 한 묶음 48장씩 2묶음은 약 몇 장일까요?', '약 100장'], ['달걀 한 판 72개씩 3판은 약 몇 개일까요?', '약 210개'], ['딱지 한 상자 41장씩 6상자는 약 몇 장일까요?', '약 240장']], ['약 120장'], 0.24),
      ]),
  ],
  wrap: ['"어림한 곱이 정확한 곱보다 클 때는 두 자리 수를 어떻게 어림한 걸까요?" 올려서 어림한 경우라고 말하게 한다. 출구 3번에서 약 80을 고른 학생은 일의 자리를 버린 것이므로 다음 시간 처음에 가까운 몇십을 다시 찾게 한다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [9], colsOf: [40], blanks: [[9, 40]] }, prompt: '39 × 9를 어림하여 40 × 9의 값을 곱셈표 칸에 써 보세요.', target: { cells: true }, difficulty: 0.18 },
    { type: 'choice', prompt: '58 × 3과 어림한 60 × 3 가운데 더 큰 곱은 어느 쪽일까요?', options: ['58 × 3', '60 × 3'], answer: 1, difficulty: 0.12, explain: '58 × 3 = 174, 60 × 3 = 180이라서 어림한 곱이 더 커요.' },
    { type: 'choice', prompt: '한 봉지에 42개씩 2봉지를 어림하면 약 몇 개일까요?', options: ['약 80개', '약 90개', '약 100개'], answer: 0, difficulty: 0.15, explain: '42는 약 40이고 40 × 2 = 80이라서 약 80개예요.' },
  ]],
  ws: { title: '어림한 곱과 정확한 곱', items: [
    wsTbl('어림한 곱을 곱셈표에 써 보세요. 48 × 6은 50 × 6으로 어림해요.', [6], [[6, 50]], '48 × 6 ≈ 50 × 6', '300', [50]),
    { type: 'table', prompt: '정확한 곱과 어림한 곱을 쓰고 어느 쪽이 더 큰지 쓰세요.', columns: ['식', '정확한 곱', '어림한 곱', '더 큰 곱'], cells: [['29 × 3', '87', '90', '어림한 곱'], ['41 × 5', '', '', ''], ['58 × 4', '', '', '']], answer: '205, 200, 정확한 곱 / 232, 240, 어림한 곱' },
    { type: 'choice', prompt: '어림한 곱이 정확한 곱보다 작은 식에 ○ 하세요.', options: ['39 × 4 ≈ 40 × 4', '31 × 4 ≈ 30 × 4'], answer: '31 × 4 ≈ 30 × 4' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '29 × 6은 약 ____ × 6 = ____이에요.', answer: '30, 180' },
    { type: 'short', prompt: '어림한 곱이 정확한 곱보다 커지는 때와 작아지는 때를 써 보세요.' },
  ], easy: { note: '올려서 어림하면 어림한 곱이 더 크고, 내려서 어림하면 더 작아요.', items: [
    wsTbl('어림한 곱을 곱셈표에 써 보세요. 21 × 3은 20 × 3으로 어림해요.', [3], [[3, 20]], '21 × 3 ≈ 20 × 3', '60', [20]),
    { type: 'choice', prompt: '19를 어림하면 20일 때 어림한 곱이 어떤가요?', options: ['더 커요', '더 작아요'], answer: '더 커요' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '42 × 2는 약 ____ × 2 = ____이에요.', answer: '40, 80' },
    { type: 'draw', prompt: '수직선에서 42와 가까운 몇십을 찾아 표시해 보세요.' },
  ] } },
  diff: {
    easy: '곱셈표 어림 칸에 어림한 수가 보이고, 이야기 이어 보기는 맞는 카드에 초록 테두리가 생겨요.',
    base: '어림한 수를 스스로 찾아 어림한 곱을 직접 써요.',
    challenge: '어림한 곱이 더 큰지 작은지를 올림·내림으로 설명하고, 어림한 곱과 정확한 곱의 차이도 구해요.',
  },
  notes: '자주 보이는 어려움: ① 어림한 곱은 늘 정확한 곱보다 크다고 생각한다 → 내려서 어림하면 작아진다. ② 일의 자리를 곱하지 않고 처음 수에 곱한다 → 어림한 몇십에 곱한다. ③ 이야기의 큰 수를 어림하지 못한다 → 한 번에 담긴 수를 가까운 몇십으로 먼저 말한다. 어림으로 계산 결과를 검토하는 방법은 7차시에서 이어서 한다.',
}));

// ───────────────────────────── 7차시 (core · representation) ─────────────────────────────
L.push(lesson(7, {
  title: '어림으로 곱셈 계산 결과 검토하기',
  objective: '어림한 곱과 견주어 곱셈 계산 결과가 알맞은지 판단하고, 틀린 결과를 찾을 수 있다.',
  desc: 'a rabbit teacher holding a magnifying glass over a paper notebook where a multiplication answer is circled while a fox points at a rough estimate on the board',
  text: '맞는지 어림해요',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216, color: 'mint' }, { motif: 'star', x: 330, y: 84, s: 0.6 }],
  intro: ['"친구가 62 × 4를 148이라고 했어요. 맞을까요? 계산하기 전에 어림해 볼까요?" 62를 60으로 어림해 60 × 4 = 240을 구하고, 148은 240과 너무 다르다는 것을 보여 준다. "어림한 값과 비슷해야 믿을 수 있어요." 정확한 값이 아니라고 어림을 믿지 않는 학생에게는 어림은 틀린 답을 빨리 찾아내는 데 쓴다고 알려 준다.',
    '계산한 뒤에 맞는지 확인하는 방법에 무엇이 있는지 짝에게 말해 봐요.'],
  demo: { tool: 'multiply', options: { mode: 'table', rowsOf: [4], colsOf: [60], blanks: [] }, sequence: [] },
  acts: [
    act('a1', '활동 1. 어림으로 알맞은 곱 가려내기', 'mindmap', '계산한 곱이 어림한 곱과 비슷한지 살펴 알맞은 곱만 골라요.',
      '"먼저 가까운 몇십으로 어림해 봐요. 계산한 곱이 어림한 값과 비슷한가요?" 어림한 곱과 100 가까이 차이 나면 틀렸다고 말하게 한다. 일의 자리만 보고 맞다고 하는 학생에게는 백의 자리가 같은지 먼저 보게 한다.',
      ML('pick', '곱 검토'), [
        pick('어림한 곱과 비슷한, 알맞은 곱만 골라 보세요.', '알맞은 곱', [['38 × 5 = 190', 1], ['62 × 4 = 148', 0], ['29 × 3 = 87', 1], ['41 × 6 = 146', 0], ['53 × 2 = 106', 1]], 0.12,
          ['먼저 가까운 몇십으로 어림해서 어림한 곱을 구해 봐요.', '계산한 곱이 어림한 곱과 크게 다르면 틀렸을 가능성이 커요.', '62 × 4는 약 240인데 148은 너무 작고, 41 × 6은 약 240인데 146은 너무 작아요.']),
        pick('어림으로 보아 계산이 틀린 식만 골라 보세요.', '틀린 식', [['72 × 3 = 126', 1], ['48 × 2 = 96', 0], ['35 × 4 = 140', 0], ['59 × 3 = 147', 1], ['26 × 5 = 130', 0]], 0.18),
        pick('곱이 100보다 큰 식만 골라 보세요. 정확히 계산해야 하는 식도 있어요.', '곱이 100보다 큰 식', [['21 × 5', 1], ['19 × 4', 0], ['33 × 3', 0], ['26 × 4', 1], ['17 × 6', 1]], 0.24,
          ['어림해서 100보다 많이 크거나 작으면 바로 알 수 있어요. 헷갈리면 정확히 계산해 봐요.', '어림한 곱이 100에 가까우면 정확히 계산해야 해요.', '21 × 5 = 105, 26 × 4 = 104, 17 × 6 = 102는 100보다 커요.'],
          { conclude: '어림한 곱이 100에 가까우면 어림만으로 알 수 없어서 정확히 계산해요.' }),
      ]),
    act('a2', '활동 2. 식과 어림한 곱 이어 보기', 'mindmap', '곱셈식과 어림한 곱을 이어요. 두 자리 수를 가까운 몇십으로 어림해요.',
      '"식마다 가까운 몇십으로 어림한 곱을 구해요." 어림한 몇십을 먼저 말하게 한다. 곱하는 수를 빼고 어림한 몇십만 말하는 학생에게는 곱셈식 전체의 어림한 곱을 말하게 한다.',
      ML('match', '어림한 곱'), [
        match('곱셈식과 어림한 곱을 이어 보세요.', [['38 × 5', '약 200'], ['62 × 4', '약 240'], ['49 × 6', '약 300']], ['약 180'], 0.14,
          ['두 자리 수를 가까운 몇십으로 어림한 뒤 곱해 봐요.', '38은 40, 62는 60, 49는 50으로 어림해요.', '40 × 5, 60 × 4, 50 × 6을 계산해요.']),
        match('큰 곱셈식도 어림한 곱과 이어 보세요.', [['23 × 8', '약 160'], ['71 × 3', '약 210'], ['58 × 5', '약 300']], ['약 250'], 0.2),
        match('곱하는 수가 다른 곱셈식과 어림한 곱을 이어 보세요.', [['32 × 7', '약 210'], ['81 × 4', '약 320'], ['47 × 3', '약 150']], ['약 120'], 0.24),
      ]),
    act('a3', '활동 3. 어림한 곱 빈칸에 넣기', 'mindmap', '곱셈식을 어림한 곱으로 바꾸어 빈칸에 넣어요.',
      '"48 × 6을 어림하려면 48을 어떻게 바꿀까요?" 가까운 몇십을 먼저 말하게 한다. 곱하는 수까지 어림하는 학생에게는 한 자리 수는 그대로 둔다고 짚는다.',
      LVF, [
        fill('어림한 곱을 빈칸에 넣어 보세요.', [['민지', 'sun', '48 × 6을 어림하면 약 ___이에요.', '300'], ['준호', 'tree', '52 × 7을 어림하면 약 ___이에요.', '350']], ['280', '320'], 0.14),
        fill('어림한 곱을 빈칸에 넣어 보세요.', [['민지', 'sun', '31 × 9를 어림하면 약 ___이에요.', '270'], ['준호', 'tree', '69 × 4를 어림하면 약 ___이에요.', '280']], ['240', '360'], 0.2),
        fill('어림한 곱을 빈칸에 넣어 보세요.', [['민지', 'sun', '88 × 3을 어림하면 약 ___이에요.', '270'], ['준호', 'tree', '19 × 8을 어림하면 약 ___이에요.', '160']], ['200', '240'], 0.24, { prompt: '어림한 곱을 빈칸에 넣어 보세요. 큰 수에서도 같은 방법이에요.' }),
      ]),
  ],
  wrap: ['"계산이 맞는지 어림으로 어떻게 확인했나요?" 가까운 몇십으로 어림한 곱과 계산한 곱이 비슷한지 살펴보았다고 말하게 한다. 출구 2번을 틀린 학생은 어림한 곱과 정확한 곱을 같은 값이어야 한다고 생각한 것이므로 다음 시간 처음에 약이라는 말의 뜻을 다시 이야기한다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [7], colsOf: [30], blanks: [[7, 30]] }, prompt: '28 × 7을 어림하여 30 × 7의 값을 곱셈표 칸에 써 보세요.', target: { cells: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '73 × 4를 어림하면 약 280이에요. 계산 결과로 알맞은 것은 어느 것일까요?', options: ['192', '292', '392'], answer: 1, difficulty: 0.18, explain: '70 × 4 = 280과 비슷한 292가 알맞아요.' },
    { type: 'choice', prompt: '어림한 곱이 약 150인데 계산한 곱이 250이에요. 어떻게 해야 할까요?', options: ['그대로 둬요', '다시 계산해 봐요'], answer: 1, difficulty: 0.12, explain: '어림한 곱과 크게 다르면 계산을 다시 해 보아야 해요.' },
  ]],
  ws: { title: '어림으로 계산 결과 검토하기', items: [
    wsTbl('어림한 곱을 곱셈표에 써 보세요. 61 × 8은 60 × 8로 어림해요.', [8], [[8, 60]], '61 × 8 ≈ 60 × 8', '480', [60]),
    { type: 'table', prompt: '어림한 곱을 쓰고 계산 결과가 알맞은지 ○, × 하세요.', columns: ['식', '계산 결과', '어림한 곱', '알맞아요?'], cells: [['41 × 5', '205', '200', '○'], ['72 × 4', '188', '', ''], ['59 × 3', '177', '', '']], answer: '280, × / 180, ○' },
    { type: 'choice', prompt: '38 × 6을 어림한 곱으로 알맞은 것에 ○ 하세요.', options: ['약 180', '약 240', '약 300'], answer: '약 240' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '49 × 4는 약 ____ × 4 = ____이에요.', answer: '50, 200' },
    { type: 'short', prompt: '계산한 곱이 어림한 곱과 많이 다르면 어떻게 해야 하는지 써 보세요.' },
  ], easy: { note: '먼저 가까운 몇십으로 어림해 보고, 계산한 값이 어림한 값과 비슷한지 비교해요.', items: [
    wsTbl('어림한 곱을 곱셈표에 써 보세요. 21 × 4는 20 × 4로 어림해요.', [4], [[4, 20]], '21 × 4 ≈ 20 × 4', '80', [20]),
    { type: 'choice', prompt: '어림한 곱이 약 80일 때 알맞은 계산 결과에 ○ 하세요.', options: ['84', '184'], answer: '84' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '32 × 3은 약 ____ × 3 = ____이에요.', answer: '30, 90' },
    { type: 'short', prompt: '58 × 2를 어림하는 식을 써 보세요.' },
  ] } },
  diff: {
    easy: '곱셈식 옆에 가까운 몇십이 보이고, 이어 보기는 맞는 카드에 초록 테두리가 생겨요.',
    base: '가까운 몇십을 스스로 찾아 어림하고 계산 결과를 견주어요.',
    challenge: '100에 가까운 곱처럼 어림만으로 알기 어려운 식은 정확히 계산해 판단해요.',
  },
  notes: '자주 보이는 어려움: ① 어림한 곱과 정확한 곱이 꼭 같아야 한다고 생각한다 → 어림은 비슷한지만 본다. ② 어림한 곱과 차이가 큰데도 일의 자리만 맞으면 맞다고 한다 → 백의 자리부터 견준다. ③ 어림한 값이 100 가까이인 식은 어림만으로 판단한다 → 그런 식은 정확히 계산한다. 곱셈 이야기를 풀고 어림으로 확인하는 것은 8차시에서 이어서 한다.',
}));

// ───────────────────────────── 8차시 (wrap · application) ─────────────────────────────
L.push(lesson(8, {
  title: '곱셈 이야기 풀고 어림으로 확인하기',
  objective: '곱셈으로 풀 수 있는 이야기를 식으로 나타내 풀고, 어림한 곱으로 답이 알맞은지 설명할 수 있다.',
  desc: 'a rabbit and a fox sorting boxes of paper items on a wooden table, a small notebook open to a multiplication story and a rough estimate written beside it',
  text: '풀고 확인해요',
  layers: [{ motif: 'tree', x: 100, y: 214, s: 1.1 }, { motif: 'flower', x: 340, y: 236 }, { motif: 'star', x: 380, y: 90, s: 0.6 }],
  intro: ['"한 상자에 사탕이 24개씩 들어 있어요. 5상자에는 모두 몇 개일까요?" 시연 단추로 24 × 5를 20 × 5와 4 × 5로 나누어 구하는 모습을 보여 준 뒤 "어림하면 약 100이니 120은 알맞아요"라고 확인한다. 이야기에서 곱셈과 덧셈 가운데 무엇을 쓸지 헷갈리는 학생에게는 같은 수가 여러 번 있는지 찾아보게 한다.',
    '곱셈으로 풀 수 있는 이야기를 우리 주변에서 하나 찾아 짝에게 말해 봐요.'],
  demo: { tool: 'multiply', options: { mode: 'table', rowsOf: [5], colsOf: [24], blanks: [] }, sequence: [] },
  acts: [
    act('a1', '활동 1. 이야기의 곱 구하기', 'multiply', '곱셈 이야기를 읽고 곱을 구해 곱셈표 칸에 써요.',
      '"한 상자에 몇 개씩 몇 상자인가요? 같은 수가 몇 번 있나요?" 한 번에 담긴 수와 횟수를 짚게 한다. 한 상자의 수와 상자 수를 더하는 학생에게는 같은 수를 여러 번 더하는 것이 곱셈이라고 짚는다.',
      { easy: { mode: 'table' }, base: { mode: 'table' }, challenge: { mode: 'table' } }, [
        part('한 상자에 사탕이 24개씩 들어 있어요. 5상자에는 모두 몇 개일까요? 곱셈표 칸에 써 보세요.', 5, [24], 0.12),
        part('한 줄에 학생이 36명씩 서 있어요. 4줄에는 모두 몇 명일까요? 곱셈표 칸에 써 보세요.', 4, [36], 0.18),
        part('한 봉지에 호두가 47개씩 들어 있어요. 6봉지에는 모두 몇 개일까요? 곱셈표 칸에 써 보세요.', 6, [47], 0.24),
      ]),
    act('a2', '활동 2. 이야기에 맞는 곱셈식 찾기', 'mindmap', '이야기를 읽고 곱셈식으로 나타낼 수 있는 것을 골라요.',
      '"같은 수가 여러 번 있나요, 아니면 두 수를 합치거나 덜어내나요?" 이야기마다 말해 보게 한다. 합하는 이야기도 곱셈이라고 생각하는 학생에게는 같은 수가 반복되지 않으면 곱셈이 아니라고 짚는다.',
      ML('match', '곱셈식'), [
        match('이야기와 곱셈식을 이어 보세요.', [['한 줄에 15명씩 6줄이면 모두 몇 명일까요?', '15 × 6'], ['한 권에 28쪽인 책 3권은 모두 몇 쪽일까요?', '28 × 3'], ['한 봉지에 12개씩 담은 4봉지는 모두 몇 개일까요?', '12 × 4']], ['15 + 6'], 0.12,
          ['한 번에 몇 개씩, 몇 번인지 찾아 곱셈식으로 써 봐요.', '먼저 한 번에 담긴 수를 쓰고 곱하는 수를 뒤에 써요.', '15명씩 6줄은 15 × 6, 28쪽씩 3권은 28 × 3, 12개씩 4봉지는 12 × 4예요.']),
        match('다른 곱셈 이야기도 곱셈식과 이어 보세요.', [['색종이 한 묶음이 35장이에요. 5묶음이면 모두 몇 장일까요?', '35 × 5'], ['한 봉지 18개짜리 6봉지는 모두 몇 개일까요?', '18 × 6'], ['한 층에 22칸씩 4층이면 모두 몇 칸일까요?', '22 × 4']], ['35 + 5'], 0.18),
        pick('곱셈으로 풀어야 하는 이야기만 골라 보세요.', '곱셈 이야기', [['한 상자에 16개씩 5상자는 모두 몇 개일까요?', 1], ['귤 45개 중 8개를 먹었어요. 몇 개가 남았나요?', 0], ['한 줄에 25개씩 3줄은 모두 몇 개일까요?', 1], ['사탕 30개와 12개를 합하면 몇 개일까요?', 0], ['한 봉지에 14개씩 4봉지는 모두 몇 개일까요?', 1]], 0.22,
          ['같은 수가 여러 번 있는 이야기인지 살펴봐요.', '합하거나 덜어내는 이야기는 덧셈이나 뺄셈이에요.', '16개씩 5상자, 25개씩 3줄, 14개씩 4봉지가 곱셈이에요.']),
      ]),
    act('a3', '활동 3. 정확한 곱과 어림한 곱 확인하기', 'mindmap', '정확한 곱과 어림한 곱을 모두 구해 알맞은지 확인해요.',
      '"먼저 어림해서 대략 얼마인지 말해 봐요. 정확한 곱이 어림한 곱과 비슷한가요?" 두 값을 나란히 쓰게 한다. 어림한 곱을 정확한 곱 자리에 쓰는 학생에게는 정확한 곱과 어림한 곱은 서로 다른 값이라고 짚는다.',
      LVF, [
        fill('정확한 곱과 어림한 곱을 빈칸에 넣어 보세요.', [['민지', 'sun', '18 × 6의 값은 ___이에요.', '108'], ['준호', 'tree', '어림하면 20 × 6 = ___이에요.', '120']], ['118', '126'], 0.14),
        fill('정확한 곱과 어림한 곱을 빈칸에 넣어 보세요.', [['민지', 'sun', '53 × 4의 값은 ___이에요.', '212'], ['준호', 'tree', '어림하면 50 × 4 = ___이에요.', '200']], ['182', '240'], 0.2),
        fill('정확한 곱과 어림한 곱을 빈칸에 넣어 보세요. 일의 자리에서 올림이 생겨요.', [['민지', 'sun', '29 × 7의 값은 ___이에요.', '203'], ['준호', 'tree', '어림하면 30 × 7 = ___이에요.', '210']], ['213', '193'], 0.24),
      ]),
  ],
  wrap: ['"곱셈 이야기를 풀고 답이 알맞은지 어떻게 확인했나요?" 어림한 곱과 정확한 곱이 비슷한지 살펴보았다고 말하게 한다. 출구 3번을 틀린 학생은 어림한 몇십을 잘못 고른 것이므로 다음 시간 처음에 수직선에서 가까운 몇십을 다시 찾게 한다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [3], colsOf: [48], blanks: [[3, 48]] }, prompt: '한 상자에 귤이 48개씩 들어 있어요. 3상자에는 모두 몇 개일까요? 곱셈표 칸에 써 보세요.', target: { cells: true }, difficulty: 0.18 },
    { type: 'choice', prompt: '한 봉지에 27개씩 3봉지의 곱을 어림하면 약 몇 개일까요?', options: ['약 60개', '약 90개', '약 120개'], answer: 1, difficulty: 0.15, explain: '27은 약 30이고 30 × 3 = 90이라서 약 90개예요.' },
    { type: 'choice', prompt: '24 × 4 = 96이에요. 어림한 곱 20 × 4 = 80과 견주면 어떤 말이 맞을까요?', options: ['정확한 곱이 더 커요', '정확한 곱이 더 작아요'], answer: 0, difficulty: 0.2, explain: '24를 20으로 내려 어림했으니 정확한 곱 96이 어림한 곱 80보다 커요.' },
  ]],
  ws: { title: '곱셈 정리', items: [
    wsTbl('이야기의 곱을 곱셈표에 써 보세요. 한 봉지에 26개씩 3봉지예요.', [3], [[3, 26]], '26 × 3', '78', [26]),
    { type: 'table', prompt: '정확한 곱과 어림한 곱을 써 보세요.', columns: ['식', '정확한 곱', '어림한 곱'], cells: [['34 × 6', '204', '180'], ['58 × 3', '', ''], ['91 × 4', '', '']], answer: '174, 180 / 364, 360' },
    { type: 'choice', prompt: '곱셈으로 풀 수 있는 이야기에 ○ 하세요.', options: ['한 줄에 14명씩 5줄이면 모두 몇 명일까요?', '사탕 30개 중 8개를 먹었어요'], answer: '한 줄에 14명씩 5줄이면 모두 몇 명일까요?' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 상자에 32개씩 4상자는 ____ × ____ = ____개예요.', answer: '32, 4, 128' },
    { type: 'short', prompt: '이 단원에서 배운 곱셈 방법과 어림하는 방법을 한 가지씩 써 보세요.' },
  ], easy: { note: '곱셈은 같은 수를 여러 번 더하는 것이에요. 풀고 나서 어림한 곱과 견주어 봐요.', items: [
    wsTbl('이야기의 곱을 곱셈표에 써 보세요. 한 봉지에 12개씩 4봉지예요.', [4], [[4, 12]], '12 × 4', '48', [12]),
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '21 × 3은 20 × 3과 1 × 3을 더한 ____이에요.', answer: '63' },
    { type: 'choice', prompt: '곱셈으로 풀 수 있는 이야기에 ○ 하세요.', options: ['한 줄에 6개씩 5줄', '사탕 6개와 5개를 합해요'], answer: '한 줄에 6개씩 5줄' },
    { type: 'short', prompt: '31 × 2를 나누어 곱하는 식을 써 보세요.' },
  ] } },
  diff: {
    easy: '곱셈표 칸 위에 이야기의 수가 보이고, 말풍선은 맞는 카드에 초록 테두리가 생겨요.',
    base: '곱과 어림한 곱을 모두 직접 구해요.',
    challenge: '곱셈 이야기와 덧셈·뺄셈 이야기를 함께 가려내고, 일의 자리에서 올림이 생기는 큰 곱을 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 같은 수가 반복되는 이야기를 덧셈식으로 쓴다 → 같은 수를 여러 번 더하는 것이 곱셈이다. ② 어림한 곱을 정확한 곱 자리에 쓴다 → 두 값은 서로 다르다. ③ 어림한 몇십을 잘못 골라 답이 크게 달라진다 → 가까운 몇십을 수직선으로 확인한다. 곱셈의 범위를 세 자리 수와 두 자리 수끼리로 넓히는 것은 2학기 g3-math-2-01에서 이어서 한다.',
}));
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 3, subject: '수학', unitTitle: UT,
  flow: '1학년·2학년에서 배운 곱셈구구와 1학기 덧셈·뺄셈에서 출발해, 1차시에 몇십 곱하기 몇을 10이 몇 개인지 세어 구합니다. 2차시에서는 두 자리 수를 십의 자리와 일의 자리로 나누어 곱한 뒤 더해 올림이 없는 (두 자리 수) × (한 자리 수)를 구하고, 3차시에서 일의 자리 곱이 10 이상일 때 올림을 십의 자리에 더하는 방법을, 4차시에서 십의 자리 곱이 100을 넘어 곱이 세 자리 수가 되는 경우를 다룹니다. 5~7차시는 곱셈의 어림셈입니다. 가까운 몇십으로 어림해 곱을 구하고, 어림한 곱과 정확한 곱의 크기를 견주며, 어림한 곱으로 계산 결과가 알맞은지 검토합니다. 8차시에서는 곱셈 이야기를 식으로 나타내 풀고 어림한 곱으로 확인하며 단원을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
