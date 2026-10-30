/* 2학년 1학기 6. 곱셈 — 단원 파일(차시 11개, 기존 차시 없음).
 * 확인 필요: 없음(units-index 성취기준 [2수01-10] 그대로). 1학기 곱셈은 묶어 세기·몇 배·곱셈식의 뜻까지이고
 *            곱셈구구표 외우기는 2학기 g2-math-2-02 몫이라, 여기서는 곱이 30 이하인 수만 쓴다.
 * 흐름: 하나씩 세기와 2씩 묶어 세기(1) → 3·4·5씩 묶어 세기(2) → 몇씩 몇 묶음(3) → 몇의 몇 배(4)
 *      → 몇 곱하기 몇 곱셈식 쓰기(5) → 곱셈식 읽고 뜻 말하기(6) → 덧셈식을 곱셈식으로(7) → 그림·배열을 곱셈식으로(8)
 *      → 이야기 속 곱셈식 만들기(9) → 곱셈으로 풀 수 있는 상황 고르기(10) → 단원 정리(11).
 */
(function () {
const UID = 'g2-math-1-06', CU = 'g2-수학-1학기-6', UT = '6. 곱셈', STD = ['[2수01-10]'];
const BLANK = '(          )';
const two = (n) => String(n).padStart(2, '0');
const TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
const ill = (desc, text, extra) => ({
  prompt: `Layered paper-cut illustration of ${desc}${TAIL}`,
  scene: { viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    ...(extra || []), { motif: 'text', x: 240, y: 142, text, size: 22 },
  ] },
});
// 수업 하나의 공통 겉옷: 도입 7분 + 전개 26분 + 정리 7분 = 40분
const lesson = (n, d) => ({
  id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
  grade: 2, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: STD, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
// 묶어 세기 판: size 개씩 묶어 묶음 수를 쓴다(곱이 되는 count 는 size × 묶음 수)
const GL = { easy: { mode: 'group', showCount: true, revealAfterCheck: true }, base: { mode: 'group' }, challenge: { mode: 'group' } };
const gp = (prompt, count, size, d, extra) => Object.assign({ prompt, toolOptions: { count, maxSize: 10 }, target: { size, answer: count / size }, difficulty: d }, extra || {});
// 배열 판: 줄 수·한 줄 개수 만들기 / 잠근 배열에서 모두 몇 개인지 쓰기
const AL = { easy: { mode: 'array', bands: true, showCounts: true, maxRows: 6, maxCols: 6 }, base: { mode: 'array', bands: true, maxRows: 6, maxCols: 6 }, challenge: { mode: 'array', maxRows: 6, maxCols: 6 } };
const ar = (prompt, rows, cols, d, opt) => Object.assign({ prompt, toolOptions: Object.assign({ shape: 'circle' }, opt || {}), target: { rows, cols }, difficulty: d });
const arT = (prompt, rows, cols, d, opt) => ({ prompt, state: { rows, cols }, toolOptions: Object.assign({ lock: true, total: true, shape: 'circle' }, opt || {}), target: { rows, cols, total: true }, difficulty: d });
// 수직선 뛰어 세기: s 칸씩 뛴다
const JM = (s, max) => ({
  easy: { mode: 'jump', min: 0, max, step: s, labels: 'major', fixedFrom: 0, showValue: true },
  base: { mode: 'jump', min: 0, max, step: s, labels: 'major', fixedFrom: 0 },
  challenge: { mode: 'jump', min: 0, max, step: s, sub: s, labels: 'ends', fixedFrom: 0 },
});
const jc = (prompt, s, count, d, extra) => Object.assign({ prompt, target: { from: 0, size: s, count }, difficulty: d }, extra || {});
const num = (n) => ({ id: String(n), text: String(n), big: String(n) });
const cd = (v) => (typeof v === 'number' ? num(v) : typeof v === 'string' ? { id: v, text: v } : v);
const ML = (topic) => ({ easy: { topic, live: true }, base: { topic }, challenge: { topic } });
// 짝 잇기: pairs = [[칸 글, 정답 카드(수 또는 글)], …], cards = 보기 카드 전부
const mt = (prompt, topic, pairs, cards, d) => ({
  prompt, difficulty: d,
  toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: cards.map(cd) },
  target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, String(p[1])])) },
});
// 고르기: 조건에 맞는 카드만 바구니에 담는다
const pk = (prompt, topic, list, answers, d, basket) => ({ prompt, difficulty: d, toolOptions: { mode: 'pick', topic, basket: basket || '고른 것', cards: list.map(cd) }, target: { pick: answers.map(String) } });
// 말풍선 빈칸 채우기: rows = [[이름, 모티프, 글(___ 가 빈칸), 정답], …], extra = 함정 카드
const MOTIFS = ['sun', 'tree', 'flower', 'leaf', 'star', 'cloud'];
const fl = (prompt, rows, extra, d) => ({
  prompt, difficulty: d,
  toolOptions: { cards: [...rows.map((r) => r[3]), ...(extra || [])].map((n) => ({ id: String(n), text: String(n) })), slots: rows.map((r, i) => ({ id: `b${i + 1}`, who: r[0], motif: r[1] || MOTIFS[i], label: r[2] })) },
  target: { fill: Object.fromEntries(rows.map((r, i) => [`b${i + 1}`, String(r[3])])) },
});
const LVF = { easy: { mode: 'fill', live: true }, base: { mode: 'fill' }, challenge: { mode: 'fill' } };
// 수 배열 빈칸: seq 의 null 자리에 들어갈 수를 차례로
const pt = (prompt, seq, fill, d) => ({ prompt, toolOptions: { seq }, target: { fill }, difficulty: d });
const LVP = { easy: { mode: 'fill' }, base: { mode: 'fill' }, challenge: { mode: 'fill' } };
const pair = (id, title, minutes, task, teacher, prompts, tool, levels) => ({ id, title, minutes, tool, pair: true, task, teacher, levels, items: prompts.map((prompt) => ({ prompt, free: true, difficulty: 0 })) });
const L = [];
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '쿠키를 하나씩 세지 않고 2개씩 묶어 세기',
  objective: '물건을 하나씩 세는 대신 2개씩 묶어 세면 더 빠르게 셀 수 있음을 알고, 2개씩 묶음이 몇 개인지 말할 수 있다.',
  desc: 'a baker placing round cookies two at a time on small paper plates on a long wooden table',
  text: '2개씩 묶어 세기',
  layers: [{ motif: 'house', x: 110, y: 214, s: 1.0 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 330, y: 80, s: 0.6 }],
  intro: ['"쿠키가 12개 있어요. 하나, 둘, 셋 하고 끝까지 세면 오래 걸리지요? 2개씩 묶으면 어떻게 셀 수 있을까요?" 접시마다 쿠키를 2개씩 놓아 "2, 4, 6" 하고 센다. 묶음을 세지 않고 쿠키 수만 세려는 학생에게는 접시 하나가 쿠키 몇 개인지 먼저 말하게 한다.', '쿠키를 2개씩 접시에 놓았어요. 접시가 몇 개인지 세어 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 쿠키를 2개씩 묶어 접시 세기', minutes: 9, tool: 'multiply',
      task: '쿠키를 2개씩 묶어요. 접시, 곧 묶음이 몇 개인지 세어서 써요.',
      teacher: '"2개씩 묶으면 묶음이 몇 개 생겼나요?" 묶음을 손가락으로 하나씩 짚으며 센다. 묶음이 6개인데 쿠키 수 12를 쓰는 학생이 있다 — 묶음 수를 묻는 것이라고 다시 읽어 준다.',
      levels: GL,
      items: [
        gp('쿠키 8개를 2개씩 묶어요. 묶음은 몇 개인가요?', 8, 2, 0.05),
        gp('쿠키 12개를 2개씩 묶어요. 묶음은 몇 개인가요?', 12, 2, 0.1),
        gp('쿠키 14개를 2개씩 묶어요. 묶음은 몇 개인가요?', 14, 2, 0.12),
        gp('쿠키 20개를 2개씩 묶어요. 묶음은 몇 개인가요?', 20, 2, 0.18),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 2씩 뛰어 세기', minutes: 9, tool: 'numberline',
      task: '2개씩 묶음이 하나 늘 때마다 2칸씩 뛰어요. 몇 번 뛰었는지 세어요.',
      teacher: '"한 번 뛰면 쿠키가 몇 개 늘어요? 세 번 뛰면 몇 개일까요?" 뛸 때마다 "2, 4, 6" 하고 소리 내어 세게 한다. 2, 3, 4처럼 하나씩 세는 학생에게는 한 번 뛸 때 두 칸 가는 것임을 짚는다.',
      levels: JM(2, 20),
      items: [
        jc('2씩 4번 뛰어 세어 보세요. 어디에 닿나요?', 2, 4, 0.08),
        jc('2씩 6번 뛰어 세어 보세요.', 2, 6, 0.12),
        { prompt: '2씩 뛰어 세어 14에 닿아 보세요. 몇 번 뛰었나요?', target: { from: 0, size: 2, end: 14 }, difficulty: 0.15 },
        jc('2씩 10번 뛰어 세어 보세요. 마지막에 닿은 수는 얼마인가요?', 2, 10, 0.2),
      ] },
    pair('a3', '활동 3. 짝과 2개씩 묶어 세어 보이기', 8, '짝이 쿠키를 2개씩 묶어 세는지 같이 소리 내어 확인해요.',
      '짝끼리 번갈아 묶는 수를 2로 정하고 "2, 4, 6…" 하고 함께 센다. "마지막에 말한 수가 쿠키 모두의 수예요." 마지막 묶음을 빼먹고 센 학생은 묶음을 하나씩 짚으며 다시 세게 한다.',
      ['쿠키 10개를 2개씩 묶고 "다 했어요"를 누르세요.', '짝이 묶은 것을 같이 세어 보고 "다 했어요"를 누르세요.', '이번에는 쿠키 16개를 2개씩 묶고 "다 했어요"를 누르세요.'], 'multiply', GL),
  ],
  wrap: ['"2개씩 묶어 세면 하나씩 셀 때보다 무엇이 좋았나요?" 짝에게 한 문장으로 말하게 한다. 출구 2번을 틀린 학생은 묶음 수와 전체 개수를 섞고 있는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '장갑 한 켤레는 2개예요. 장갑 5켤레는 모두 몇 개인가요?', options: ['7개', '10개', '25개'], answer: 1, difficulty: 0.1, explain: '2씩 5번 뛰어 세면 2, 4, 6, 8, 10이라서 10개예요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'group', count: 16, maxSize: 10 }, prompt: '사탕 16개를 2개씩 묶어요. 묶음은 몇 개인가요?', target: { size: 2, answer: 8 }, difficulty: 0.15 },
    { type: 'choice', prompt: '2개씩 묶어 세는 말로 알맞은 것은 무엇인가요?', options: ['1, 2, 3, 4', '2, 4, 6, 8', '2, 3, 4, 5'], answer: 1, difficulty: 0.08, explain: '2개씩 묶으면 묶음이 하나 늘 때마다 2씩 커져요.' },
  ]],
  ws: { title: '2개씩 묶어 세기', items: [
    { type: 'figure', prompt: '2개씩 줄을 지었어요. 줄이 몇 개인지 세어 쓰세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'circle', bands: true }, figures: [{ state: { rows: 3, cols: 2 }, caption: '2개씩 ___줄' }, { state: { rows: 5, cols: 2 }, caption: '2개씩 ___줄' }, { state: { rows: 4, cols: 2 }, caption: '2개씩 ___줄' }], answer: '3, 5, 4' },
    { type: 'blank', prompt: '2씩 뛰어 세어 빈칸에 알맞은 수를 쓰세요.', text: '2 - 4 - ___ - 8 - ___ - 12', answer: '6, 10' },
    { type: 'choice', prompt: '신발 6켤레는 모두 몇 짝인지 2씩 뛰어 세어 ○ 하세요.', options: ['8짝', '12짝', '6짝'], answer: '12짝' },
    { type: 'table', prompt: '2개씩 묶음의 수를 보고 모두 몇 개인지 쓰세요.', columns: ['묶음 수', '1', '2', '3', '4'], cells: [['모두 몇 개', '2', '', '', '']], answer: '4개, 6개, 8개' },
    { type: 'draw', prompt: '꽃 10송이를 2송이씩 묶어서 그려 보고 묶음이 몇 개인지 써 보세요.' },
  ], easy: { note: '2개씩 묶음이 하나 늘 때마다 2, 4, 6… 하고 세어요.', items: [
    { type: 'figure', prompt: '2개씩 줄을 지었어요. 줄이 몇 개인지 쓰세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'circle', bands: true }, figures: [{ state: { rows: 2, cols: 2 }, caption: '2개씩 ___줄' }, { state: { rows: 4, cols: 2 }, caption: '2개씩 ___줄' }], answer: '2, 4' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 - ___ - 6 - 8', answer: '4' },
    { type: 'choice', prompt: '2씩 3번 뛰어 센 수에 ○ 하세요.', options: ['5', '6'], answer: '6' },
    { type: 'draw', prompt: '구슬 6개를 2개씩 묶어서 그려 보세요.' },
  ] } },
  diff: { easy: '묶음 판은 맞힌 뒤에 묶음 수가 보이고, 수직선에는 도착한 수가 바로 보여요.', base: '묶음 수와 도착한 수를 직접 세어 써요.', challenge: '수직선에 양 끝 수만 있어 2씩 스스로 세어 가고, 쿠키 수가 20개까지 늘어요.' },
  notes: '자주 보이는 어려움: ① 쿠키 수를 묶음 수로 쓴다(12개를 묶음 12개로) → 접시가 몇 개인지 손으로 짚어 센다. ② 2씩 뛰면서 하나씩 센다(1, 2, 3) → 한 번에 두 칸을 간다고 말해 준다. ③ 마지막 묶음을 빼고 센다 → 접시를 하나씩 짚는다. 3씩, 4씩, 5씩 묶는 것은 2차시에서 이어서 한다.',
}));
// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '3개씩 4개씩 5개씩 묶어 개수 세기',
  objective: '3개씩, 4개씩, 5개씩 묶어 세고 묶음 수를 말하거나 수 배열의 빈칸을 뛰어 세어 채울 수 있다.',
  desc: 'children arranging strawberries on plates in groups of three, four and five on a long picnic table',
  text: '3씩 4씩 5씩',
  layers: [{ motif: 'tree', x: 100, y: 214, s: 1.1 }, { motif: 'flower', x: 340, y: 236 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'star', x: 380, y: 90, s: 0.6 }],
  intro: ['"어제는 2개씩 묶어 세었어요. 딸기를 3개씩, 5개씩 묶으면 어떻게 셀까요?" 접시마다 딸기 5개를 놓고 "5, 10, 15" 하고 센다. 묶는 수가 바뀌어도 한 묶음이 몇 개인지를 먼저 확인한다고 말해 준다.', '딸기를 5개씩 접시에 놓았어요. 묶음이 하나 늘 때마다 몇씩 커질까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 딸기를 3개씩 4개씩 5개씩 묶기', minutes: 9, tool: 'multiply',
      task: '딸기를 문제에서 말한 수만큼씩 묶고 묶음이 몇 개인지 써요.',
      teacher: '"몇 개씩 묶는다고 했지요? 먼저 묶는 수를 정해 봐요." 묶는 수를 정한 뒤 묶음을 센다. 15개를 5개씩 묶었는데 3 대신 5를 쓰는 학생에게는 묶음이 몇 개인지 접시를 짚어 세게 한다.',
      levels: GL,
      items: [
        gp('딸기 12개를 3개씩 묶어요. 묶음은 몇 개인가요?', 12, 3, 0.08),
        gp('딸기 20개를 4개씩 묶어요. 묶음은 몇 개인가요?', 20, 4, 0.12),
        gp('딸기 15개를 5개씩 묶어요. 묶음은 몇 개인가요?', 15, 5, 0.1),
        gp('딸기 30개를 5개씩 묶어요. 묶음은 몇 개인가요?', 30, 5, 0.18),
      ] },
    { id: 'a2', title: '활동 2. 뛰어 센 수의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '같은 수씩 커지는 수가 놓여 있어요. 얼마씩 커지는지 찾아 빈칸에 써요.',
      teacher: '"5, 10 다음에는 몇이 올까요? 얼마씩 커지고 있는지 먼저 말해 봐요." 앞의 두 수의 차를 찾게 한다. 빈칸에 앞의 수보다 1 큰 수를 쓰는 학생에게는 두 수 사이가 얼마인지 수직선으로 확인하게 한다.',
      levels: LVP,
      items: [
        pt('5씩 커지는 수예요. 빈칸에 알맞은 수를 써 보세요.', [5, 10, null, 20, null], [15, 25], 0.08),
        pt('3씩 커지는 수예요. 빈칸에 알맞은 수를 써 보세요.', [3, 6, null, 12, 15, null], [9, 18], 0.12),
        pt('4씩 커지는 수예요. 빈칸을 채워 보세요.', [4, 8, 12, null, 20, null], [16, 24], 0.15),
        pt('얼마씩 커지는지 찾아 빈칸을 채워 보세요.', [10, 15, null, 25, null, 35], [20, 30], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 수직선에서 5씩 뛰어 세기', minutes: 8, tool: 'numberline',
      task: '5개씩 묶음이 하나 늘 때마다 5칸씩 뛰어요.',
      teacher: '"5씩 3번 뛰면 어디에 닿을까요? 손가락으로 뛴 횟수를 세 봐요." 5, 10, 15 하고 말하게 한다. 5씩 뛰었는데 6, 7, 8로 한 칸씩 세는 학생에게는 한 번에 눈금 하나를 간다고 짚는다.',
      levels: JM(5, 30),
      items: [
        jc('5씩 3번 뛰어 세어 보세요.', 5, 3, 0.08),
        jc('5씩 6번 뛰어 세어 보세요. 어디에 닿나요?', 5, 6, 0.15),
        { prompt: '5씩 뛰어 세어 20에 닿아 보세요.', target: { from: 0, size: 5, end: 20 }, difficulty: 0.12 },
      ] },
  ],
  wrap: ['"3개씩, 4개씩, 5개씩 묶을 때 가장 먼저 확인할 것은 무엇이었나요?" 한 묶음이 몇 개인지 말하게 한다. 출구 3번을 틀린 학생은 몇씩 커지는지 찾지 않고 하나씩 세는지 다음 시간에 살핀다.', [
    { type: 'choice', prompt: '귤 12개를 4개씩 묶으면 묶음은 몇 개인가요?', options: ['3개', '8개', '4개'], answer: 0, difficulty: 0.12, explain: '4씩 뛰어 세면 4, 8, 12라서 세 번 뛰어요. 묶음은 3개예요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'group', count: 25, maxSize: 10 }, prompt: '구슬 25개를 5개씩 묶어요. 묶음은 몇 개인가요?', target: { size: 5, answer: 5 }, difficulty: 0.15 },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: [6, 9, null, 15, null] }, prompt: '3씩 커지는 수예요. 빈칸에 알맞은 수를 써 보세요.', target: { fill: [12, 18] }, difficulty: 0.18 },
  ]],
  ws: { title: '여러 수씩 묶어 세기', items: [
    { type: 'blank', prompt: '5씩 뛰어 세어 빈칸에 알맞은 수를 쓰세요.', text: '5 - 10 - ___ - 20 - ___ - 30', answer: '15, 25' },
    { type: 'blank', prompt: '3씩 뛰어 세어 빈칸에 알맞은 수를 쓰세요.', text: '3 - ___ - 9 - ___ - 15', answer: '6, 12' },
    { type: 'figure', prompt: '같은 수씩 줄을 지었어요. 한 줄에 몇 개씩 몇 줄인지 쓰세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'square', bands: true }, figures: [{ state: { rows: 4, cols: 3 }, caption: '___개씩 ___줄' }, { state: { rows: 3, cols: 5 }, caption: '___개씩 ___줄' }, { state: { rows: 5, cols: 4 }, caption: '___개씩 ___줄' }], answer: '3개씩 4줄, 5개씩 3줄, 4개씩 5줄' },
    { type: 'choice', prompt: '배 20개를 4개씩 묶으면 묶음은 몇 개인지 ○ 하세요.', options: ['4개', '5개', '16개'], answer: '5개' },
    { type: 'short', prompt: '5개씩 묶어 세면 하나씩 셀 때보다 좋은 점을 써 보세요.' },
  ], easy: { note: '묶음이 하나 늘 때마다 같은 수만큼 커져요.', items: [
    { type: 'blank', prompt: '5씩 뛰어 세어 빈칸에 알맞은 수를 쓰세요.', text: '5 - 10 - ___ - 20', answer: '15' },
    { type: 'blank', prompt: '3씩 뛰어 세어 빈칸에 알맞은 수를 쓰세요.', text: '3 - 6 - ___ - 12', answer: '9' },
    { type: 'choice', prompt: '4개씩 3묶음이면 모두 몇 개인지 ○ 하세요.', options: ['7개', '12개'], answer: '12개' },
    { type: 'draw', prompt: '딸기 12개를 3개씩 묶어서 그려 보세요.' },
  ] } },
  diff: { easy: '묶음 판은 맞힌 뒤에 묶음 수가 보이고, 수직선에는 도착한 수가 바로 보여요.', base: '수 배열의 빈칸이 두 개이고 수직선에서 스스로 뛰어 세요.', challenge: '수직선에 양 끝 수만 있고, 얼마씩 커지는지 스스로 찾아 빈칸을 채워요.' },
  notes: '자주 보이는 어려움: ① 몇씩 묶는지 읽지 않고 묶음 수를 아무 수나 쓴다 → 먼저 한 묶음이 몇 개인지 말하게 한다. ② 수 배열에서 앞의 수보다 1 큰 수를 쓴다 → 앞의 두 수 사이가 얼마인지 수직선으로 확인한다. ③ 뛰어 세기를 중간에 멈춘다 → 마지막 수가 전체 개수라고 말해 준다. 2씩부터 5씩 묶어 세기는 곱셈구구가 아니라 곱셈의 뜻을 위한 것이다.',
}));
// ───────────────────────────── 3차시 (extend) ─────────────────────────────
L.push(lesson(3, {
  title: '몇 개씩 몇 줄로 놓고 모두 몇 개인지 말하기',
  objective: '같은 수씩 줄을 지어 놓은 것을 "몇 개씩 몇 줄(몇 묶음)"로 말하고 모두 몇 개인지 구할 수 있다.',
  desc: 'a cafe worker lining up paper cups in neat rows on a tray with the same number of cups in every row',
  text: '몇 개씩 몇 줄',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'flower', x: 370, y: 236 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'star', x: 330, y: 80, s: 0.6 }],
  intro: ['"컵이 한 줄에 4개씩 3줄 놓여 있어요. 모두 몇 개일까요?" 컵을 줄마다 짚으며 "4, 8, 12" 하고 센다. "몇 개씩 몇 줄"이라고 말하는 방법을 알려 주고, 줄 수와 한 줄의 개수를 바꿔 말하는 학생이 있는지 살핀다.', '컵이 한 줄에 몇 개씩, 몇 줄 놓여 있는지 말해 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 컵을 몇 개씩 몇 줄로 놓기', minutes: 9, tool: 'multiply',
      task: '말한 대로 한 줄에 몇 개씩, 몇 줄이 되게 컵을 놓아요.',
      teacher: '"한 줄에 몇 개씩이라고 했나요? 줄은 몇 줄이에요?" 가로로 한 줄에 놓는 수와 세로로 쌓인 줄 수를 손으로 짚게 한다. 4개씩 3줄을 3개씩 4줄로 만드는 학생에게는 "몇 개씩"이 한 줄의 개수라는 것을 다시 읽어 준다.',
      levels: AL,
      items: [
        ar('컵을 한 줄에 4개씩 3줄로 놓아 보세요.', 3, 4, 0.08),
        ar('컵을 한 줄에 5개씩 2줄로 놓아 보세요.', 2, 5, 0.1),
        ar('컵을 한 줄에 3개씩 5줄로 놓아 보세요.', 5, 3, 0.15),
        ar('컵을 한 줄에 2개씩 6줄로 놓아 보세요.', 6, 2, 0.18),
      ] },
    { id: 'a2', title: '활동 2. 몇 개씩 몇 접시를 모두 몇 개와 잇기', minutes: 9, tool: 'mindmap',
      task: '"몇 개씩 몇 접시"를 읽고 모두 몇 개인지 알맞은 수 카드와 이어요.',
      teacher: '"3개씩 4접시는 3과 4를 어떻게 하면 모두 몇 개인지 알 수 있을까요?" 3씩 4번 뛰어 센다고 말하게 한다. 3과 4를 더해 7이라고 하는 학생에게는 같은 수를 여러 번 더하는 것임을 보여 준다.',
      levels: ML('모두 몇 개'),
      items: [
        mt('한 접시에 놓은 수와 접시 수를 보고 모두 몇 개인지 이어 보세요.', '모두 몇 개', [['한 접시에 3개씩, 4접시', 12], ['한 접시에 5개씩, 3접시', 15], ['한 접시에 2개씩, 7접시', 14]], [12, 15, 14, 10], 0.1),
        mt('이번에는 네 칸을 모두 이어 보세요.', '모두 몇 개', [['한 상자에 4개씩, 2상자', 8], ['한 상자에 5개씩, 4상자', 20], ['한 상자에 3개씩, 3상자', 9], ['한 상자에 2개씩, 5상자', 10]], [8, 20, 9, 10, 7], 0.18),
        mt('한 봉지에 들어 있는 수와 봉지 수로 이어 보세요.', '모두 몇 개', [['한 봉지에 4개씩, 5봉지', 20], ['한 봉지에 3개씩, 6봉지', 18], ['한 봉지에 5개씩, 5봉지', 25]], [20, 18, 25, 15], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 몇씩 몇 묶음 말풍선 채우기', minutes: 8, tool: 'story',
      task: '친구들의 말에서 빈칸에 알맞은 수를 찾아 넣어요.',
      teacher: '"한 줄에 4개씩 3줄이면 4씩 몇 묶음일까요?" 줄 수가 묶음 수가 된다고 말하게 한다. 줄 수와 한 줄의 개수를 섞어 쓰는 학생에게는 컵 그림을 다시 보고 한 줄에 몇 개인지 먼저 세게 한다.',
      levels: LVF,
      items: [
        fl('말풍선의 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '한 줄에 4개씩 3줄이니까 4씩 ___묶음이야.', 3], ['준호', 'tree', '한 줄에 5개씩 2줄이니까 5씩 ___묶음이야.', 2]], [4, 5], 0.1),
        fl('이번에는 한 묶음에 몇 개인지 찾아 넣어 보세요.', [['민지', 'flower', '6개씩 4묶음이면 한 묶음은 ___개야.', 6], ['준호', 'leaf', '한 묶음이 3개이고 묶음이 5개이면 3씩 ___묶음이야.', 5]], [3, 4], 0.15),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '2개씩 8묶음이면 한 묶음은 ___개야.', 2], ['준호', 'cloud', '한 줄에 5개씩 4줄이니까 5씩 ___묶음이야.', 4]], [8, 5], 0.2),
      ] },
  ],
  wrap: ['"한 줄에 4개씩 3줄이면 모두 몇 개일까요?" 4씩 3번 뛰어 센 것을 말하게 한다. 출구 1번을 틀린 학생은 줄 수와 한 줄의 개수를 더했는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '한 상자에 5개씩 4상자가 있어요. 모두 몇 개인가요?', options: ['9개', '20개', '45개'], answer: 1, difficulty: 0.12, explain: '5씩 4번 뛰어 세면 5, 10, 15, 20이라서 20개예요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'array', maxRows: 6, maxCols: 6 }, prompt: '한 줄에 6개씩 3줄로 놓아 보세요.', target: { rows: 3, cols: 6 }, difficulty: 0.15 },
    { type: 'choice', prompt: '한 줄에 3개씩 5줄은 3씩 몇 묶음인가요?', options: ['3묶음', '5묶음', '8묶음'], answer: 1, difficulty: 0.1, explain: '줄이 5줄이니까 3씩 5묶음이에요.' },
  ]],
  ws: { title: '몇 개씩 몇 줄', items: [
    { type: 'figure', prompt: '한 줄에 몇 개씩 몇 줄인지 쓰세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'circle', bands: true }, figures: [{ state: { rows: 2, cols: 4 }, caption: '___개씩 ___줄' }, { state: { rows: 3, cols: 5 }, caption: '___개씩 ___줄' }, { state: { rows: 4, cols: 3 }, caption: '___개씩 ___줄' }], answer: '4개씩 2줄, 5개씩 3줄, 3개씩 4줄' },
    { type: 'table', prompt: '한 줄의 개수와 줄 수를 보고 모두 몇 개인지 쓰세요.', columns: ['한 줄에', '줄 수', '모두'], cells: [['3개', '4줄', ''], ['5개', '2줄', ''], ['2개', '6줄', '']], answer: '12개, 10개, 12개' },
    { type: 'choice', prompt: '한 줄에 4개씩 5줄이에요. 모두 몇 개인지 ○ 하세요.', options: ['9개', '20개', '24개'], answer: '20개' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 줄에 5개씩 3줄이면 5씩 ___묶음이고, 모두 ___개예요.', answer: '3, 15' },
    { type: 'draw', prompt: '한 줄에 3개씩 4줄로 동그라미를 그리고 모두 몇 개인지 써 보세요.' },
  ], easy: { note: '한 줄의 개수를 줄 수만큼 뛰어 세면 모두 몇 개인지 알 수 있어요.', items: [
    { type: 'figure', prompt: '한 줄에 몇 개씩 몇 줄인지 쓰세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'circle', bands: true }, figures: [{ state: { rows: 2, cols: 3 }, caption: '___개씩 ___줄' }, { state: { rows: 3, cols: 2 }, caption: '___개씩 ___줄' }], answer: '3개씩 2줄, 2개씩 3줄' },
    { type: 'table', prompt: '모두 몇 개인지 쓰세요.', columns: ['한 줄에', '줄 수', '모두'], cells: [['2개', '3줄', ''], ['5개', '2줄', '']], answer: '6개, 10개' },
    { type: 'choice', prompt: '한 줄에 3개씩 2줄이면 모두 몇 개인지 ○ 하세요.', options: ['5개', '6개'], answer: '6개' },
    { type: 'draw', prompt: '한 줄에 2개씩 3줄로 ○를 그려 보세요.' },
  ] } },
  diff: { easy: '배열 판에 "몇 개씩 몇 줄"과 줄 띠가 보이고, 이음 판에는 맞는 칸에 초록 테두리가 생겨요.', base: '줄 띠만 보고 직접 줄 수와 한 줄의 개수를 정해요.', challenge: '줄 띠 없이 컵을 놓고, 접시·상자·봉지처럼 이름이 바뀌어도 모두 몇 개인지 구해요.' },
  notes: '자주 보이는 어려움: ① 줄 수와 한 줄의 개수를 더한다(4개씩 3줄을 7개로) → 같은 수를 여러 번 더하는 것이라고 뛰어 세어 보인다. ② 한 줄의 개수와 줄 수를 바꾼다 → "몇 개씩"은 한 줄에 놓은 수라고 짚는다. ③ 접시·상자 같은 이름에 흔들린다 → 한 묶음이 무엇인지 먼저 말하게 한다. 곱셈식 쓰기는 5차시에서 한다.',
}));
// ───────────────────────────── 4차시 (extend) ─────────────────────────────
L.push(lesson(4, {
  title: '막대 길이를 견주며 몇의 몇 배 알아보기',
  objective: '어떤 수를 여러 번 더한 수를 "몇의 몇 배"라고 말하고 수직선에서 뛰어 세어 구할 수 있다.',
  desc: 'a short green paper strip and a long chain of identical green strips laid end to end on a wooden desk with a ruler',
  text: '몇의 몇 배',
  layers: [{ motif: 'house', x: 110, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 330, y: 84 }],
  intro: ['"초록 막대는 3칸이에요. 빨간 막대는 초록 막대 2개를 이어 붙인 길이예요. 몇 칸일까요?" 막대를 이어 붙여 6칸임을 보이고 "빨간 막대는 초록 막대의 2배예요"라고 말해 준다. "3의 2배"를 3 더하기 2로 생각하는 학생이 나올 수 있다는 것을 미리 염두에 둔다.', '초록 막대 2개를 이어 붙이면 몇 칸이 될까요? 어떻게 말하면 좋을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 3씩 뛰어 세어 3의 몇 배 찾기', minutes: 9, tool: 'numberline',
      task: '3의 몇 배는 3을 그만큼 여러 번 뛰어 센 수예요. 수직선에서 뛰어 봐요.',
      teacher: '"3의 2배는 3씩 몇 번 뛰는 것일까요?" 뛴 횟수가 배수라고 말하게 한다. 3의 4배를 3 더하기 4로 7이라고 하는 학생에게는 3씩 4번 뛰어 12에 닿는 것을 직접 보게 한다.',
      levels: JM(3, 18),
      items: [
        jc('3의 2배만큼 뛰어 세어 보세요. 어디에 닿나요?', 3, 2, 0.08),
        jc('3의 4배만큼 뛰어 세어 보세요.', 3, 4, 0.12),
        jc('3의 6배만큼 뛰어 세어 보세요. 마지막에 닿은 수는 얼마인가요?', 3, 6, 0.2),
      ] },
    { id: 'a2', title: '활동 2. 몇의 몇 배와 수 잇기', minutes: 9, tool: 'mindmap',
      task: '"몇의 몇 배"를 읽고 그 크기에 맞는 수 카드와 이어요.',
      teacher: '"5의 2배는 5를 몇 번 더한 걸까요?" 5와 5를 더해 10이라고 말하게 한다. 5의 2배를 7로 쓰는 학생에게는 5에 2를 더한 것이 아니라 5가 2번이라고 짚어 준다.',
      levels: ML('몇의 몇 배'),
      items: [
        mt('몇의 몇 배의 크기를 수와 이어 보세요.', '몇의 몇 배', [['2의 3배', 6], ['5의 2배', 10], ['4의 2배', 8]], [6, 10, 8, 7], 0.1),
        mt('이번에는 3의 3배, 5의 3배, 2의 5배를 이어 보세요.', '몇의 몇 배', [['3의 3배', 9], ['5의 3배', 15], ['2의 5배', 10]], [9, 15, 10, 12], 0.15),
        mt('네 칸을 모두 이어 보세요.', '몇의 몇 배', [['4의 3배', 12], ['2의 4배', 8], ['5의 4배', 20], ['3의 2배', 6]], [12, 8, 20, 6, 14], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 구슬을 묶어 몇 배인지 알아보기', minutes: 8, tool: 'multiply',
      task: '구슬을 문제의 수씩 묶어서 전체가 그 수의 몇 배인지 써요.',
      teacher: '"구슬 12개는 4의 몇 배일까요? 4개씩 묶어 볼까요?" 묶음 수가 곧 몇 배라고 말하게 한다. 묶음 수 대신 전체 개수를 쓰는 학생이 있다 — 몇 배는 묶음이 몇 개인지라고 다시 말해 준다.',
      levels: GL,
      items: [
        gp('구슬 12개는 4의 몇 배인가요? 4개씩 묶어 보세요.', 12, 4, 0.1),
        gp('연필 18자루는 3의 몇 배인가요? 3자루씩 묶어 보세요.', 18, 3, 0.15),
        gp('블록 20개는 5의 몇 배인가요? 5개씩 묶어 보세요.', 20, 5, 0.15),
        gp('인형 10개는 2의 몇 배인가요? 2개씩 묶어 보세요.', 10, 2, 0.1),
      ] },
  ],
  wrap: ['"3의 2배는 3과 2를 더한 것일까요, 3이 2번일까요?" 막대를 이어 붙인 그림으로 말하게 한다. 출구 2번을 틀린 학생은 몇 배를 더하는 수로 읽는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '3의 2배는 얼마인가요?', options: ['5', '6', '9'], answer: 1, difficulty: 0.1, explain: '3의 2배는 3이 2번이라서 3 + 3 = 6이에요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 20, step: 4, labels: 'major', fixedFrom: 0 }, prompt: '4의 3배만큼 뛰어 세어 보세요.', target: { from: 0, size: 4, count: 3 }, difficulty: 0.15 },
    { type: 'choice', prompt: '5의 3배는 5를 몇 번 더한 것인가요?', options: ['2번', '3번', '5번'], answer: 1, difficulty: 0.12, explain: '5의 3배는 5를 3번 더한 5 + 5 + 5 = 15예요.' },
  ]],
  ws: { title: '몇의 몇 배', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2의 4배는 2를 ___번 더한 수이고, 2 + 2 + 2 + 2 = ___이에요.', answer: '4, 8' },
    { type: 'table', prompt: '몇의 몇 배인지 보고 크기를 쓰세요.', columns: ['몇의 몇 배', '3의 3배', '5의 2배', '4의 4배'], cells: [['크기', '', '', '']], answer: '9, 10, 16' },
    { type: 'choice', prompt: '4의 3배는 얼마인지 ○ 하세요.', options: ['7', '12', '34'], answer: '12' },
    { type: 'figure', prompt: '점이 몇 번 뛰었는지 보고 3의 몇 배인지 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 0, max: 18, step: 3, labels: 'all', marks: [9] }, caption: '3의 ___배' }, { options: { mode: 'read', min: 0, max: 18, step: 3, labels: 'all', marks: [15] }, caption: '3의 ___배' }], answer: '3배, 5배' },
    { type: 'short', prompt: '"3의 2배"를 3 + 2로 계산하면 왜 틀리는지 써 보세요.' },
  ], easy: { note: '몇의 몇 배는 그 수를 여러 번 더한 것이에요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2의 3배 = 2 + 2 + 2 = ___', answer: '6' },
    { type: 'table', prompt: '크기를 쓰세요.', columns: ['몇의 몇 배', '3의 2배', '5의 2배'], cells: [['크기', '', '']], answer: '6, 10' },
    { type: 'choice', prompt: '4의 2배에 ○ 하세요.', options: ['6', '8'], answer: '8' },
    { type: 'draw', prompt: '막대 하나를 3칸으로 그리고, 그 막대의 2배 길이를 이어서 그려 보세요.' },
  ] } },
  diff: { easy: '수직선에 도착한 수가 바로 보이고, 이음 판은 맞는 칸에 초록 테두리가 생겨요.', base: '수직선의 큰 눈금을 읽으며 스스로 뛰어 세요.', challenge: '수직선에 양 끝 수만 있고, 이음 판에 헷갈리는 카드가 한 장 더 있어요.' },
  notes: '자주 보이는 어려움: ① "몇의 몇 배"를 더한다(3의 2배를 5로) → 같은 수가 몇 번인지 막대를 이어 붙여 보인다. ② 배수를 묶음 하나의 크기로 읽는다 → 배는 묶음 수라고 말해 준다. ③ 뛰기 횟수를 하나 틀린다 → 시작점 0은 세지 않는다고 짚는다. "×"를 쓰는 것은 5차시에서 한다.',
}));
// ───────────────────────────── 5차시 (core) ─────────────────────────────
L.push(lesson(5, {
  title: '사탕 봉지 수를 곱셈식 4 × 3 = 12로 쓰기',
  objective: '같은 수씩 묶음이 몇 개 있는 상황을 곱하기(×)를 써서 곱셈식으로 나타내고 곱을 구할 수 있다.',
  desc: 'a shop clerk lining up small paper bags with four candies in each bag on a counter and a small sign with a multiplication cross',
  text: '4 × 3 = 12',
  layers: [{ motif: 'house', x: 110, y: 214, s: 1.0 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 330, y: 80, s: 0.6 }],
  intro: ['"사탕이 4개씩 3봉지 있어요. 덧셈식으로 쓰면 4 + 4 + 4 = 12예요. 더 짧게 쓸 수 없을까요?" 칠판에 4 × 3 = 12를 써 주고 "4씩 3묶음을 4 × 3이라고 쓰고, 계산한 12를 곱이라고 해요"라고 말한다. × 앞에는 한 묶음의 수, 뒤에는 묶음 수가 온다고 정해 둔다.', '사탕이 4개씩 3봉지 있어요. 짧은 식으로 어떻게 쓸까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 몇씩 몇 묶음을 곱셈식과 잇기', minutes: 9, tool: 'mindmap',
      task: '"몇씩 몇 묶음"을 읽고 알맞은 곱셈식과 이어요. 앞의 수는 한 묶음에 몇 개인지예요.',
      teacher: '"3씩 4묶음은 곱셈식으로 어떻게 쓸까요? 앞에 올 수는 무엇일까요?" 한 묶음의 수가 먼저라고 말하게 한다. 4씩 3묶음을 3 × 4로 쓰는 학생에게는 "4씩"이 한 묶음의 수라고 다시 짚는다.',
      levels: ML('곱셈식 쓰기'),
      items: [
        mt('몇씩 몇 묶음을 곱셈식과 이어 보세요.', '곱셈식 쓰기', [['2씩 5묶음', '2 × 5'], ['3씩 4묶음', '3 × 4'], ['5씩 2묶음', '5 × 2']], ['2 × 5', '3 × 4', '5 × 2', '2 × 3'], 0.1),
        mt('곱까지 쓴 곱셈식과 이어 보세요.', '곱셈식 쓰기', [['4씩 3묶음', '4 × 3 = 12'], ['5씩 4묶음', '5 × 4 = 20'], ['2씩 6묶음', '2 × 6 = 12']], ['4 × 3 = 12', '5 × 4 = 20', '2 × 6 = 12', '4 × 3 = 7'], 0.15),
        mt('네 칸을 모두 이어 보세요.', '곱셈식 쓰기', [['3씩 5묶음', '3 × 5 = 15'], ['4씩 4묶음', '4 × 4 = 16'], ['2씩 8묶음', '2 × 8 = 16'], ['5씩 3묶음', '5 × 3 = 15']], ['3 × 5 = 15', '4 × 4 = 16', '2 × 8 = 16', '5 × 3 = 15', '3 × 5 = 8'], 0.2),
      ] },
    { id: 'a2', title: '활동 2. 곱셈식의 빈칸 채우기', minutes: 9, tool: 'story',
      task: '친구들이 쓴 곱셈식에서 빈칸에 알맞은 수를 넣어요.',
      teacher: '"4씩 3묶음은 4 × □ = 12예요. 빈칸에는 무엇이 들어갈까요?" 묶음 수가 × 뒤에 온다고 말하게 한다. 빈칸에 곱 12를 쓰는 학생에게는 × 뒤에는 묶음이 몇 개인지가 온다고 짚는다.',
      levels: LVF,
      items: [
        fl('곱셈식의 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '4씩 3묶음을 곱셈식으로 쓰면 4 × ___ = 12야.', 3], ['준호', 'tree', '5씩 2묶음을 곱셈식으로 쓰면 ___ × 2 = 10이야.', 5]], [2, 4], 0.1),
        fl('이번에는 곱을 구해서 넣어 보세요.', [['민지', 'flower', '2씩 6묶음이니까 2 × 6 = ___이야.', 12], ['준호', 'leaf', '3씩 4묶음이니까 3 × ___ = 12야.', 4]], [8, 6], 0.15),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '5씩 4묶음이니까 5 × 4 = ___이야.', 20], ['준호', 'cloud', '2씩 ___묶음이니까 2 × 5 = 10이야.', 5]], [9, 10], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 줄 놓인 구슬을 곱셈식으로 풀기', minutes: 8, tool: 'multiply',
      task: '구슬이 줄지어 놓여 있어요. 한 줄의 개수와 줄 수로 곱셈식을 떠올려 모두 몇 개인지 써요.',
      teacher: '"한 줄에 3개씩 4줄이면 곱셈식은 3 × 4예요. 곱은 얼마일까요?" 3씩 4번 뛰어 세어 보게 한다. 곱을 구할 때 3 + 4로 7을 쓰는 학생에게는 ×는 같은 수를 여러 번 더하는 것임을 보여 준다.',
      levels: { easy: { mode: 'array', bands: true, showCounts: true }, base: { mode: 'array', bands: true }, challenge: { mode: 'array' } },
      items: [
        arT('한 줄에 3개씩 4줄이에요. 3 × 4의 곱은 얼마인가요?', 4, 3, 0.1),
        arT('한 줄에 5개씩 2줄이에요. 모두 몇 개인가요?', 2, 5, 0.1),
        arT('한 줄에 2개씩 5줄이에요. 곱셈식으로 나타내면 2 × 5예요. 곱은 얼마인가요?', 5, 2, 0.12),
        arT('한 줄에 4개씩 3줄이에요. 모두 몇 개인가요?', 3, 4, 0.12),
      ] },
  ],
  wrap: ['"4씩 3묶음을 곱셈식으로 쓰면 어떻게 쓰나요? 앞의 수와 뒤의 수는 각각 무엇을 나타내나요?" 짝에게 말하게 한다. 출구 1번을 틀린 학생은 ×와 +를 섞는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '5씩 3묶음을 곱셈식으로 바르게 쓴 것은 무엇인가요?', options: ['5 + 3 = 8', '5 × 3 = 15', '3 × 3 = 9'], answer: 1, difficulty: 0.1, explain: '5씩 3묶음은 5 × 3이고, 5씩 3번 뛰어 세면 15예요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'array', lock: true, total: true, shape: 'circle' }, state: { rows: 3, cols: 5 }, prompt: '한 줄에 5개씩 3줄이에요. 5 × 3은 얼마인가요?', target: { rows: 3, cols: 5, total: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '2 × 4 = 8에서 2는 무엇을 나타내나요?', options: ['묶음 수', '한 묶음의 수', '곱'], answer: 1, difficulty: 0.15, explain: '앞의 2는 한 묶음에 2개씩이라는 뜻이에요. 4는 묶음 수, 8은 곱이에요.' },
  ]],
  ws: { title: '곱셈식으로 쓰기', items: [
    { type: 'table', prompt: '몇씩 몇 묶음을 곱셈식으로 쓰세요.', columns: ['몇씩 몇 묶음', '곱셈식'], cells: [['3씩 5묶음', '3 × 5 = ___'], ['4씩 2묶음', '___ × 2 = ___'], ['2씩 6묶음', '']], answer: '3 × 5 = 15, 4 × 2 = 8, 2 × 6 = 12' },
    { type: 'figure', prompt: '그림을 보고 곱셈식을 완성하세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'circle', bands: true }, figures: [{ state: { rows: 3, cols: 4 }, caption: '___ × ___ = ___' }, { state: { rows: 2, cols: 5 }, caption: '___ × ___ = ___' }, { state: { rows: 4, cols: 2 }, caption: '___ × ___ = ___' }], answer: '4 × 3 = 12, 5 × 2 = 10, 2 × 4 = 8' },
    { type: 'choice', prompt: '3씩 4묶음을 곱셈식으로 바르게 쓴 것에 ○ 하세요.', options: ['3 × 4', '4 × 4', '3 + 4'], answer: '3 × 4' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5씩 4묶음은 5 × ___ = ___이에요.', answer: '4, 20' },
    { type: 'short', prompt: '4 × 3 = 12에서 4, 3, 12는 각각 무엇을 나타내는지 써 보세요.' },
  ], easy: { note: '앞의 수는 한 묶음의 수, 뒤의 수는 묶음 수예요.', items: [
    { type: 'table', prompt: '곱셈식을 완성하세요.', columns: ['몇씩 몇 묶음', '곱셈식'], cells: [['2씩 3묶음', '2 × 3 = ___'], ['5씩 2묶음', '5 × 2 = ___']], answer: '6, 10' },
    { type: 'figure', prompt: '그림을 보고 곱셈식을 완성하세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'circle', bands: true }, figures: [{ state: { rows: 2, cols: 3 }, caption: '___ × ___ = ___' }], answer: '3 × 2 = 6' },
    { type: 'choice', prompt: '4씩 2묶음을 나타내는 식에 ○ 하세요.', options: ['4 × 2', '2 × 2'], answer: '4 × 2' },
    { type: 'draw', prompt: '3씩 2묶음을 ○로 그리고 곱셈식을 써 보세요.' },
  ] } },
  diff: { easy: '배열에 "몇 개씩 몇 줄"이 보이고, 말풍선 판은 맞는 카드에 초록 테두리가 생겨요.', base: '곱셈식을 직접 읽고 빈칸의 수를 골라요.', challenge: '곱까지 쓴 식과 이어야 하고, 빈칸이 묶음 수나 한 묶음의 수에 있어서 거꾸로 생각해요.' },
  notes: '자주 보이는 어려움: ① ×를 +처럼 계산한다(4 × 3을 7로) → 같은 수를 여러 번 더하는 것이라고 뛰어 세어 보인다. ② 앞뒤 수를 바꾸어 쓴다(4씩 3묶음을 3 × 4로) → 앞은 한 묶음의 수, 뒤는 묶음 수라고 약속한다. ③ 곱과 묶음 수를 섞는다 → 곱은 모두 몇 개인지라고 말해 준다. 읽는 말은 6차시에서 한다.',
}));
// ───────────────────────────── 6차시 (practice) ─────────────────────────────
L.push(lesson(6, {
  title: '곱셈식 읽는 법과 식에 담긴 뜻 말하기',
  objective: '곱셈식을 "곱하기"와 "~는 ~와 같습니다"로 읽고, 식이 나타내는 묶음의 뜻을 말할 수 있다.',
  desc: 'two children reading a multiplication sentence from a paper card aloud while pointing to rows of small paper stars',
  text: '곱하기로 읽기',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 250, y: 84, s: 0.7 }, { motif: 'flower', x: 340, y: 236 }],
  intro: ['"4 × 3 = 12를 소리 내어 읽어 볼까요? 4 곱하기 3은 12와 같습니다라고 읽어요." 식 아래에 읽는 말을 함께 써 준다. 4 더하기 3처럼 읽는 학생이 있다면 ×는 곱하기라고 다시 말해 주고, 읽은 뒤 식이 어떤 그림을 말하는지 손으로 보이게 한다. 곱하기를 더하기와 섞지 않게 하는 것이 오늘의 핵심이다.', '4 × 3 = 12를 어떻게 읽을까요? 짝에게 읽어 주세요.'],
  acts: [
    { id: 'a1', title: '활동 1. 곱셈식과 읽는 말 이어 보기', minutes: 9, tool: 'mindmap',
      task: '곱셈식과 읽는 말을 이어요. ×는 "곱하기"라고 읽어요.',
      teacher: '"2 × 4는 어떻게 읽을까요?" ×를 짚고 곱하기라고 말하게 한다. "2 더하기 4"로 읽는 학생에게는 ×와 +를 손가락으로 다시 짚으며 모양이 다르다고 말해 준다.',
      levels: ML('곱셈식 읽기'),
      items: [
        mt('곱셈식과 읽는 말을 이어 보세요.', '곱셈식 읽기', [['4 × 3', '4 곱하기 3'], ['5 × 2', '5 곱하기 2'], ['3 × 3', '3 곱하기 3']], ['4 곱하기 3', '5 곱하기 2', '3 곱하기 3', '4 더하기 3'], 0.1),
        mt('식 전체를 읽는 말과 이어 보세요.', '곱셈식 읽기', [['2 × 4 = 8', '2 곱하기 4는 8과 같습니다'], ['3 × 2 = 6', '3 곱하기 2는 6과 같습니다'], ['5 × 3 = 15', '5 곱하기 3은 15와 같습니다']], ['2 곱하기 4는 8과 같습니다', '3 곱하기 2는 6과 같습니다', '5 곱하기 3은 15와 같습니다', '5 더하기 3은 15와 같습니다'], 0.18),
        mt('곱셈식이 나타내는 묶음과 이어 보세요.', '곱셈식 읽기', [['3 × 4', '3씩 4묶음'], ['2 × 5', '2씩 5묶음'], ['5 × 2', '5씩 2묶음']], ['3씩 4묶음', '2씩 5묶음', '5씩 2묶음', '4씩 3묶음'], 0.2),
      ] },
    { id: 'a2', title: '활동 2. 곱셈식을 바르게 말한 것 고르기', minutes: 9, tool: 'mindmap',
      task: '곱셈식을 바르게 말한 것을 모두 골라 바구니에 담아요.',
      teacher: '"3 × 4 = 12를 바르게 말한 것은 어느 것일까요?" 한 가지 식을 여러 말로 바꾸어 말하게 한다. 3 더하기 4가 12라고 고르는 학생에게는 3 + 4는 7이라는 것을 직접 세어 보게 한다.',
      levels: ML('식 읽기 고르기'),
      items: [
        pk('3 × 4 = 12를 바르게 말한 것을 모두 골라 보세요.', '식 읽기 고르기', ['3씩 4묶음', '3 곱하기 4는 12', '3 더하기 4는 12'], ['3씩 4묶음', '3 곱하기 4는 12'], 0.1, '바른 말'),
        pk('5 × 2 = 10을 바르게 말한 것을 모두 골라 보세요.', '식 읽기 고르기', ['5씩 2묶음', '5 곱하기 2는 10', '5 더하기 2는 7'], ['5씩 2묶음', '5 곱하기 2는 10'], 0.12, '바른 말'),
        pk('4 × 2 = 8을 바르게 말한 것을 모두 골라 보세요.', '식 읽기 고르기', ['4 곱하기 2는 8', '4씩 2묶음', '4 더하기 2는 6', '4 빼기 2는 2'], ['4 곱하기 2는 8', '4씩 2묶음'], 0.18, '바른 말'),
      ] },
    { id: 'a3', title: '활동 3. 곱셈식의 뜻 말풍선 채우기', minutes: 8, tool: 'story',
      task: '곱셈식이 나타내는 뜻을 말풍선에 완성해요.',
      teacher: '"3 × 5는 3씩 몇 묶음이라는 뜻일까요?" 앞의 수와 뒤의 수가 각각 무엇인지 말하게 한다. 3씩 3묶음처럼 두 수를 모두 앞의 수로 읽는 학생에게는 × 뒤의 수가 묶음 수라고 짚는다.',
      levels: LVF,
      items: [
        fl('말풍선의 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '3 × 5는 3씩 ___묶음이라는 뜻이야.', 5], ['준호', 'tree', '4 × 2는 ___씩 2묶음이라는 뜻이야.', 4]], [3, 2], 0.1),
        fl('이번에는 몇 번 더하는지 찾아 넣어 보세요.', [['민지', 'flower', '2 × 6은 2를 ___번 더한 거야.', 6], ['준호', 'leaf', '5 × 3은 5를 ___번 더한 거야.', 3]], [2, 5], 0.15),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '3 × 4는 3씩 4번 뛰어 세어서 ___이야.', 12], ['준호', 'cloud', '2 × ___ = 8이야.', 4]], [7, 6], 0.2),
      ] },
  ],
  wrap: ['"5 × 3을 어떻게 읽나요? 어떤 그림을 말하는 식인가요?" 읽은 뒤 5씩 3묶음 그림을 그려 보게 한다. 출구 1번을 틀린 학생은 곱하기와 더하기를 섞어 읽는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '3 × 2 = 6은 어떻게 읽나요?', options: ['3 더하기 2는 6과 같습니다', '3 곱하기 2는 6과 같습니다', '3 빼기 2는 6과 같습니다'], answer: 1, difficulty: 0.1, explain: '×는 곱하기라고 읽어요. 3 곱하기 2는 6과 같습니다.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'array', lock: true, total: true, shape: 'circle' }, state: { rows: 2, cols: 4 }, prompt: '4 × 2는 한 줄에 4개씩 2줄이에요. 모두 몇 개인가요?', target: { rows: 2, cols: 4, total: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '2 × 5는 무엇을 나타내나요?', options: ['2씩 5묶음', '5씩 2묶음', '2 + 5'], answer: 0, difficulty: 0.15, explain: '앞의 수가 한 묶음의 수예요. 2 × 5는 2씩 5묶음이에요.' },
  ]],
  ws: { title: '곱셈식 읽기', items: [
    { type: 'table', prompt: '곱셈식을 읽는 말로 쓰세요.', columns: ['곱셈식', '읽기'], cells: [['2 × 3', '2 곱하기 3'], ['4 × 5', ''], ['3 × 6', '']], answer: '4 곱하기 5, 3 곱하기 6' },
    { type: 'choice', prompt: '5 × 4 = 20을 바르게 읽은 것에 ○ 하세요.', options: ['5 더하기 4는 20', '5 곱하기 4는 20과 같습니다', '5 빼기 4는 20'], answer: '5 곱하기 4는 20과 같습니다' },
    { type: 'figure', prompt: '그림을 보고 곱셈식으로 쓰고 읽어 보세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'star', bands: true }, figures: [{ state: { rows: 2, cols: 5 }, caption: '___ × ___ = ___' }, { state: { rows: 3, cols: 3 }, caption: '___ × ___ = ___' }], answer: '5 × 2 = 10, 3 × 3 = 9' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 × 4는 3씩 ___묶음이고, 3을 ___번 더한 수예요.', answer: '4, 4' },
    { type: 'short', prompt: '2 × 6을 "곱하기"를 넣어 읽고, 어떤 그림을 말하는지 써 보세요.' },
  ], easy: { note: '×는 곱하기라고 읽어요. 앞의 수는 한 묶음에 몇 개인지예요.', items: [
    { type: 'table', prompt: '읽는 말을 쓰세요.', columns: ['곱셈식', '읽기'], cells: [['3 × 2', '3 곱하기 2'], ['5 × 3', '']], answer: '5 곱하기 3' },
    { type: 'choice', prompt: '2 × 4를 바르게 읽은 것에 ○ 하세요.', options: ['2 곱하기 4', '2 더하기 4'], answer: '2 곱하기 4' },
    { type: 'figure', prompt: '그림을 보고 곱셈식을 쓰세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'star', bands: true }, figures: [{ state: { rows: 2, cols: 3 }, caption: '___ × ___ = ___' }], answer: '3 × 2 = 6' },
    { type: 'draw', prompt: '4 × 2를 ○로 그려 보세요.' },
  ] } },
  diff: { easy: '이음 판은 맞는 카드에 초록 테두리가 생기고, 말풍선 판은 고른 수가 식에 바로 보여요.', base: '읽는 말과 뜻을 직접 이어요.', challenge: '"더하기"나 "빼기"로 읽은 카드가 섞여 있어 곱하기로 읽은 것만 골라요.' },
  notes: '자주 보이는 어려움: ① ×를 "더하기"로 읽는다 → ×와 +를 나란히 쓰고 모양을 짚는다. ② 식의 앞뒤 수를 바꾸어 뜻을 말한다(3 × 4를 4씩 3묶음으로) → 앞의 수가 한 묶음의 수라고 약속을 다시 쓴다. ③ "~와 같습니다"를 빼먹는다 → 식의 =도 읽게 한다. 덧셈식을 곱셈식으로 바꾸는 것은 7차시에서 한다.',
}));
// ───────────────────────────── 7차시 (extend) ─────────────────────────────
L.push(lesson(7, {
  title: '같은 수를 여러 번 더한 식을 곱셈식으로 바꾸기',
  objective: '같은 수를 여러 번 더한 덧셈식을 곱셈식으로 바꾸어 쓰고, 곱셈식을 덧셈식으로 풀어 쓸 수 있다.',
  desc: 'a long paper ribbon made of repeated identical colorful pieces being folded into a short neat bundle on a craft table',
  text: '덧셈식 ↔ 곱셈식',
  layers: [{ motif: 'house', x: 110, y: 214, s: 1.0 }, { motif: 'tree', x: 385, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 330, y: 84 }],
  intro: ['"3 + 3 + 3 + 3이라고 길게 썼어요. 같은 수 3이 몇 번 나오나요? 곱셈식으로는 어떻게 쓸까요?" 3이 4번이니까 3 × 4라고 쓰는 것을 보여 준다. 더하는 수를 묶음 수로 착각해 3 × 3 = 9로 쓰는 학생이 나올 수 있다는 것을 미리 염두에 둔다.', '3 + 3 + 3 + 3에서 3은 몇 번 나오나요? 곱셈식으로 고쳐 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 덧셈식과 곱셈식 이어 보기', minutes: 9, tool: 'mindmap',
      task: '같은 수를 여러 번 더한 식과 같은 뜻인 곱셈식을 이어요.',
      teacher: '"5 + 5는 5가 몇 번 나오나요? 곱셈식으로 쓰면 5 × 몇일까요?" 더하는 수가 앞, 나오는 횟수가 뒤라고 말하게 한다. 5 + 5를 5 × 5로 쓰는 학생에게는 5가 몇 번 나오는지 손가락으로 세게 한다.',
      levels: ML('덧셈식과 곱셈식'),
      items: [
        mt('덧셈식을 곱셈식으로 바꾸어 이어 보세요.', '덧셈식과 곱셈식', [['3 + 3 + 3 + 3', '3 × 4'], ['5 + 5', '5 × 2'], ['2 + 2 + 2', '2 × 3']], ['3 × 4', '5 × 2', '2 × 3', '2 × 5'], 0.1),
        mt('답까지 쓴 곱셈식과 이어 보세요.', '덧셈식과 곱셈식', [['4 + 4 + 4 = 12', '4 × 3 = 12'], ['2 + 2 + 2 + 2 + 2 = 10', '2 × 5 = 10'], ['5 + 5 + 5 + 5 = 20', '5 × 4 = 20']], ['4 × 3 = 12', '2 × 5 = 10', '5 × 4 = 20', '5 × 5 = 20'], 0.18),
        mt('이번에는 곱셈식을 덧셈식으로 바꾸어 이어 보세요.', '덧셈식과 곱셈식', [['3 × 3', '3 + 3 + 3'], ['4 × 2', '4 + 4'], ['5 × 3', '5 + 5 + 5']], ['3 + 3 + 3', '4 + 4', '5 + 5 + 5', '3 + 3'], 0.2),
      ] },
    { id: 'a2', title: '활동 2. 같은 수가 몇 번 나오는지 빈칸 채우기', minutes: 9, tool: 'story',
      task: '덧셈식을 곱셈식으로 바꿀 때 빈칸에 알맞은 수를 넣어요.',
      teacher: '"4 + 4 + 4는 4가 몇 번이지요?" 더하는 수와 더한 횟수를 따로 말하게 한다. 4 + 4 + 4 = 4 × 4로 쓰는 학생에게는 4를 센 횟수가 3이라는 것을 점으로 표시해 보게 한다.',
      levels: LVF,
      items: [
        fl('덧셈식과 곱셈식이 같도록 빈칸에 수를 넣어 보세요.', [['민지', 'sun', '4 + 4 + 4 = 4 × ___', 3], ['준호', 'tree', '5 + 5 = 5 × ___', 2]], [4, 5], 0.1),
        fl('빈칸의 수를 찾아 넣어 보세요.', [['민지', 'flower', '3 + 3 + 3 + 3 + 3 = 3 × ___', 5], ['준호', 'leaf', '2 + 2 + 2 + 2 = ___ × 4', 2]], [3, 4], 0.15),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '5 + 5 + 5 = 5 × ___', 3], ['준호', 'cloud', '4 + 4 + 4 + 4 + 4 = ___ × 5', 4]], [5, 20], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 수직선에서 더해 곱셈식의 곱 구하기', minutes: 8, tool: 'numberline',
      task: '같은 수를 여러 번 더하는 것을 수직선에서 뛰어 세고, 곱셈식으로도 말해요.',
      teacher: '"4 + 4 + 4를 수직선에서 뛰어 보면 어디에 닿을까요? 곱셈식으로는 4 × 3이에요." 뛴 횟수가 ×의 뒤 수라고 말하게 한다. 뛴 크기와 횟수를 바꾸어 말하는 학생에게는 한 번에 뛴 칸 수가 앞의 수라고 짚는다.',
      levels: JM(4, 24),
      items: [
        jc('4 + 4 + 4를 수직선에서 뛰어 보세요. 곱셈식 4 × 3의 곱은 얼마인가요?', 4, 3, 0.1),
        jc('4를 5번 더하는 것을 뛰어 세어 보세요. 4 × 5는 얼마인가요?', 4, 5, 0.15),
        jc('4 × 6을 수직선에서 뛰어 세어 곱을 구해 보세요.', 4, 6, 0.2),
      ] },
  ],
  wrap: ['"2 + 2 + 2 + 2는 곱셈식으로 어떻게 쓸까요? 2는 몇 번 나오나요?" 점을 찍어 센 뒤 말하게 한다. 출구 1번을 틀린 학생은 더하는 수와 더한 횟수를 바꾸었는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '5 + 5 + 5 + 5를 곱셈식으로 바르게 쓴 것은 무엇인가요?', options: ['5 × 4', '4 × 4', '5 × 5'], answer: 0, difficulty: 0.12, explain: '5가 4번 나오니까 5 × 4예요.' },
    { type: 'choice', prompt: '3 × 4 = 12를 덧셈식으로 바르게 쓴 것은 무엇인가요?', options: ['3 + 4 = 7', '3 + 3 + 3 + 3 = 12', '4 + 4 + 4 = 12'], answer: 1, difficulty: 0.15, explain: '3 × 4는 3을 4번 더한 3 + 3 + 3 + 3이에요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 20, step: 5, labels: 'major', fixedFrom: 0 }, prompt: '5 × 4를 수직선에서 뛰어 세어 보세요.', target: { from: 0, size: 5, count: 4 }, difficulty: 0.18 },
  ]],
  ws: { title: '덧셈식과 곱셈식', items: [
    { type: 'blank', prompt: '덧셈식을 곱셈식으로 바꾸어 쓰세요.', text: '2 + 2 + 2 + 2 + 2 = 2 × ___ = ___', answer: '5, 10' },
    { type: 'blank', prompt: '곱셈식을 덧셈식으로 바꾸어 쓰세요.', text: '4 × 3 = ___ + ___ + ___ = 12', answer: '4, 4, 4' },
    { type: 'table', prompt: '표를 완성하세요.', columns: ['덧셈식', '곱셈식', '곱'], cells: [['3 + 3 + 3', '3 × 3', ''], ['5 + 5', '', '10'], ['2 + 2 + 2 + 2', '', '']], answer: '9, 5 × 2, 2 × 4, 8' },
    { type: 'choice', prompt: '4 + 4 + 4 + 4를 곱셈식으로 바르게 나타낸 것에 ○ 하세요.', options: ['4 × 4', '4 × 3', '4 × 5'], answer: '4 × 4' },
    { type: 'short', prompt: '5 + 5 + 5를 5 × 5로 쓰면 왜 틀리는지 써 보세요.' },
  ], easy: { note: '같은 수가 몇 번 나오는지 세어서 ×의 뒤에 써요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 + 3 + 3 = 3 × ___', answer: '3' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5 × 2 = ___ + ___', answer: '5, 5' },
    { type: 'choice', prompt: '2 + 2 + 2를 곱셈식으로 쓴 것에 ○ 하세요.', options: ['2 × 3', '3 × 3'], answer: '2 × 3' },
    { type: 'draw', prompt: '2 + 2 + 2를 ○로 그리고 곱셈식으로 써 보세요.' },
  ] } },
  diff: { easy: '수직선에 도착한 수가 바로 보이고, 맞는 카드에 초록 테두리가 생겨요.', base: '식을 읽으며 같은 수가 몇 번 나오는지 스스로 세어요.', challenge: '곱셈식을 덧셈식으로 거꾸로 쓰고, 5번 이상 더하는 식까지 바꾸어요.' },
  notes: '자주 보이는 어려움: ① 더하는 수와 횟수를 바꾼다(5 + 5 + 5를 3 × 5로) → 앞은 더하는 수, 뒤는 횟수로 약속한다. ② 더한 횟수를 하나 틀린다 → 같은 수 밑에 점을 찍어 센다. ③ 곱셈식에서 덧셈식으로 바꿀 때 서로 다른 수를 쓴다 → 같은 수만 여러 번이라고 짚는다. 그림을 곱셈식으로 나타내는 것은 8차시에서 한다.',
}));
// ───────────────────────────── 8차시 (extend) ─────────────────────────────
L.push(lesson(8, {
  title: '배열 그림을 보고 곱셈식 만들고 배열로 나타내기',
  objective: '줄지어 놓인 그림에서 한 줄의 개수와 줄 수를 찾아 곱셈식으로 쓰고, 곱셈식을 그림으로 나타낼 수 있다.',
  desc: 'neat rows of potted flowers on a long garden shelf with the same number of flowers in every row',
  text: '그림과 곱셈식',
  layers: [{ motif: 'tree', x: 100, y: 214, s: 1.1 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'flower', x: 340, y: 238, color: 'lavender' }, { motif: 'bird', x: 380, y: 84 }],
  intro: ['"화분이 한 줄에 5개씩 4줄 놓여 있어요. 곱셈식으로 쓰면 어떻게 될까요?" 줄 수와 한 줄의 개수를 찾아 5 × 4 = 20으로 쓴다. 한 줄에 놓은 수가 앞에 온다는 약속을 다시 말해 주고, 곱셈식을 거꾸로 그림으로 그려 보게 한다. 오늘은 그림에서 식으로, 식에서 그림으로 오가는 것이 핵심이다.', '화분 그림에서 한 줄에 몇 개씩, 몇 줄인지 찾아 곱셈식을 만들어 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 배열 그림의 모두 몇 개 구하기', minutes: 9, tool: 'multiply',
      task: '줄지어 놓인 화분 그림을 보고 모두 몇 개인지 곱셈식으로 구해요.',
      teacher: '"한 줄에 몇 개씩 몇 줄이에요? 곱셈식으로 말해 볼까요?" 줄마다 뛰어 세어 곱을 구하게 한다. 줄 수와 한 줄의 개수를 더한 수를 쓰는 학생에게는 줄마다 같은 수가 있다는 것을 짚어 준다.',
      levels: { easy: { mode: 'array', bands: true, showCounts: true }, base: { mode: 'array', bands: true }, challenge: { mode: 'array' } },
      items: [
        arT('한 줄에 5개씩 4줄이에요. 5 × 4는 얼마인가요?', 4, 5, 0.1, { shape: 'heart' }),
        arT('한 줄에 3개씩 6줄이에요. 모두 몇 개인가요?', 6, 3, 0.15, { shape: 'heart' }),
        arT('한 줄에 5개씩 5줄이에요. 모두 몇 개인가요?', 5, 5, 0.18, { shape: 'heart' }),
      ] },
    { id: 'a2', title: '활동 2. 곱셈식을 배열로 나타내기', minutes: 9, tool: 'multiply',
      task: '곱셈식이 말하는 배열을 줄과 개수를 정해서 만들어요. 앞의 수는 한 줄의 개수예요.',
      teacher: '"2 × 4는 한 줄에 몇 개씩 몇 줄을 만들까요?" 앞의 수가 한 줄의 개수라고 말하게 한다. 2 × 4를 2줄 4개씩으로 만드는 학생에게는 곱셈식을 읽는 말 "2씩 4묶음"으로 바꾸어 다시 읽게 한다.',
      levels: AL,
      items: [
        ar('2 × 4를 배열로 나타내 보세요. 한 줄에 2개씩 4줄이에요.', 4, 2, 0.1),
        ar('5 × 5를 배열로 나타내 보세요.', 5, 5, 0.15),
        ar('3 × 6을 배열로 나타내 보세요. 한 줄에 3개씩 놓아요.', 6, 3, 0.18),
        ar('4 × 4를 배열로 나타내 보세요.', 4, 4, 0.15),
      ] },
    { id: 'a3', title: '활동 3. 이야기에 맞는 곱셈식 고르기', minutes: 8, tool: 'mindmap',
      task: '그림 이야기를 읽고 알맞은 곱셈식을 골라 바구니에 담아요.',
      teacher: '"자전거 한 대에 바퀴가 2개씩이에요. 4대면 곱셈식은 무엇일까요?" 한 묶음의 수와 묶음 수를 먼저 말하게 한다. 2 + 4처럼 더하는 식을 고르는 학생에게는 같은 수가 여러 번이라고 짚는다.',
      levels: ML('이야기와 곱셈식'),
      items: [
        pk('자전거 한 대에 바퀴가 2개씩 있어요. 4대의 바퀴 수를 구하는 곱셈식을 골라 보세요.', '이야기와 곱셈식', ['2 × 4 = 8', '2 + 4 = 6', '4 × 4 = 16'], ['2 × 4 = 8'], 0.1, '알맞은 식'),
        pk('한 접시에 쿠키가 5개씩 3접시 있어요. 쿠키 수를 구하는 곱셈식을 골라 보세요.', '이야기와 곱셈식', ['5 + 3 = 8', '5 × 3 = 15', '3 × 3 = 9'], ['5 × 3 = 15'], 0.12, '알맞은 식'),
        pk('책꽂이 한 칸에 책이 4권씩 5칸 있어요. 책 수를 구하는 곱셈식을 골라 보세요.', '이야기와 곱셈식', ['4 × 5 = 20', '4 + 5 = 9', '5 × 5 = 25', '4 × 4 = 16'], ['4 × 5 = 20'], 0.2, '알맞은 식'),
      ] },
  ],
  wrap: ['"배열 그림에서 곱셈식을 쓸 때 먼저 찾을 두 가지는 무엇인가요?" 한 줄의 개수와 줄 수를 말하게 한다. 출구 2번을 틀린 학생은 한 줄의 개수와 줄 수를 바꿔 만드는지 다음 시간에 살핀다.', [
    { type: 'tool', tool: 'multiply', options: { mode: 'array', lock: true, total: true, shape: 'heart' }, state: { rows: 4, cols: 3 }, prompt: '한 줄에 3개씩 4줄이에요. 3 × 4는 얼마인가요?', target: { rows: 4, cols: 3, total: true }, difficulty: 0.12 },
    { type: 'tool', tool: 'multiply', options: { mode: 'array', maxRows: 6, maxCols: 6 }, prompt: '3 × 5를 배열로 나타내 보세요.', target: { rows: 5, cols: 3 }, difficulty: 0.15 },
    { type: 'choice', prompt: '한 줄에 4개씩 2줄인 배열을 나타내는 곱셈식은 무엇인가요?', options: ['4 × 2 = 8', '2 × 2 = 4', '4 + 2 = 6'], answer: 0, difficulty: 0.1, explain: '한 줄에 4개씩 2줄이니까 4 × 2 = 8이에요.' },
  ]],
  ws: { title: '그림과 곱셈식', items: [
    { type: 'figure', prompt: '그림을 보고 곱셈식을 완성하세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'heart', bands: true }, figures: [{ state: { rows: 4, cols: 5 }, caption: '___ × ___ = ___' }, { state: { rows: 3, cols: 6 }, caption: '___ × ___ = ___' }, { state: { rows: 5, cols: 4 }, caption: '___ × ___ = ___' }], answer: '5 × 4 = 20, 6 × 3 = 18, 4 × 5 = 20' },
    { type: 'table', prompt: '곱셈식을 보고 한 줄의 개수와 줄 수를 쓰세요.', columns: ['곱셈식', '한 줄에', '줄 수'], cells: [['3 × 5', '', ''], ['4 × 2', '', ''], ['5 × 3', '', '']], answer: '3개 5줄, 4개 2줄, 5개 3줄' },
    { type: 'choice', prompt: '책이 한 칸에 5권씩 2칸 있어요. 곱셈식으로 바르게 쓴 것에 ○ 하세요.', options: ['5 × 2 = 10', '5 + 2 = 7', '2 × 2 = 4'], answer: '5 × 2 = 10' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 줄에 3개씩 4줄이면 3 × ___ = ___이에요.', answer: '4, 12' },
    { type: 'draw', prompt: '4 × 3을 ○로 그려 보세요. 한 줄에 4개씩 3줄이에요.' },
  ], easy: { note: '한 줄에 몇 개씩 몇 줄인지 찾아서 곱셈식을 써요.', items: [
    { type: 'figure', prompt: '그림을 보고 곱셈식을 쓰세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'heart', bands: true }, figures: [{ state: { rows: 2, cols: 4 }, caption: '___ × ___ = ___' }, { state: { rows: 3, cols: 3 }, caption: '___ × ___ = ___' }], answer: '4 × 2 = 8, 3 × 3 = 9' },
    { type: 'table', prompt: '한 줄의 개수와 줄 수를 쓰세요.', columns: ['곱셈식', '한 줄에', '줄 수'], cells: [['2 × 3', '', ''], ['5 × 2', '', '']], answer: '2개 3줄, 5개 2줄' },
    { type: 'choice', prompt: '3 × 2에 맞는 그림에 ○ 하세요.', options: ['3개씩 2줄', '2개씩 3줄'], answer: '3개씩 2줄' },
    { type: 'draw', prompt: '2 × 4를 ○로 그려 보세요.' },
  ] } },
  diff: { easy: '배열에 줄 띠와 "몇 개씩 몇 줄"이 보이고, 이음 판은 맞는 카드에 초록 테두리가 생겨요.', base: '줄 띠만 보고 곱셈식의 수를 찾아 배열을 만들어요.', challenge: '줄 띠 없이 5 × 5까지 배열을 만들고, 틀리기 쉬운 식이 보기에 섞여 있어요.' },
  notes: '자주 보이는 어려움: ① 줄 수와 한 줄의 개수를 바꾼다(2 × 4를 4개씩 2줄로) → 앞의 수가 한 줄의 개수라고 약속을 다시 말한다. ② 곱 대신 두 수의 합을 쓴다 → 같은 수를 여러 번 더하는 것이라고 뛰어 세어 보인다. ③ 배열이 커지면 센 것을 놓친다 → 줄마다 짚으며 센다. 이야기 속 곱셈식은 9차시에서 이어서 한다.',
}));
// ───────────────────────────── 9차시 (core · application) ─────────────────────────────
L.push(lesson(9, {
  title: '이야기를 읽고 곱셈식 세워 답 구하기',
  objective: '같은 수씩 묶인 이야기를 읽고 한 묶음의 수와 묶음 수를 찾아 곱셈식을 세워 답을 구할 수 있다.',
  desc: 'a school hallway with identical wooden lockers in rows and children placing the same number of books into each locker',
  text: '이야기 속 곱셈식',
  layers: [{ motif: 'house', x: 110, y: 214, s: 1.0 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 330, y: 80, s: 0.6 }],
  intro: ['"사물함 한 칸에 책을 3권씩 넣었어요. 6칸이면 책은 모두 몇 권일까요?" 한 묶음은 3권, 묶음은 6개라고 먼저 말하게 한 뒤 3 × 6으로 쓴다. 문제 속 수를 아무렇게나 더하거나 곱하는 학생이 있다는 것을 알고, 먼저 "한 묶음이 몇 개이고 묶음이 몇 개인지" 찾는 습관을 세운다.', '사물함 한 칸에 책이 3권씩 있어요. 6칸이면 책은 모두 몇 권일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 이야기 속 빈칸에 알맞은 수 넣기', minutes: 9, tool: 'story',
      task: '이야기에서 한 묶음의 수와 묶음 수를 찾아 곱셈식의 빈칸에 알맞은 수를 넣어요.',
      teacher: '"자전거 한 대에 바퀴가 2개씩이에요. 7대면 몇 개일까요? 한 묶음은 무엇이에요?" 한 대의 바퀴 수가 한 묶음이라고 말하게 한다. 2 + 7로 9를 고르는 학생에게는 같은 수가 7번 나온다는 것을 그림으로 보인다.',
      levels: LVF,
      items: [
        fl('이야기를 읽고 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '자전거 한 대에 바퀴가 2개씩이야. 7대면 2 × 7 = ___개야.', 14], ['준호', 'tree', '한 모둠에 4명씩 3모둠이면 4 × 3 = ___명이야.', 12]], [9, 11], 0.1),
        fl('이번에는 한 판, 한 상자 이야기예요. 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'flower', '한 상자에 귤이 5개씩 6상자면 5 × 6 = ___개야.', 30], ['준호', 'leaf', '한 판에 달걀이 6개씩 3판이면 6 × 3 = ___개야.', 18]], [11, 24], 0.15),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '꽃병 한 개에 꽃이 3송이씩이야. 5개에는 3 × 5 = ___송이야.', 15], ['준호', 'cloud', '접시 한 개에 만두가 4개씩이야. 6접시에는 4 × 6 = ___개야.', 24]], [9, 10], 0.2),
      ] },
    { id: 'a2', title: '활동 2. 줄지은 물건의 수를 곱셈식으로 구하기', minutes: 9, tool: 'multiply',
      task: '이야기 속 물건이 줄지어 있어요. 한 줄의 개수와 줄 수로 곱셈식을 세워 모두 몇 개인지 써요.',
      teacher: '"책상이 한 줄에 4개씩 6줄이에요. 곱셈식은 어떻게 쓸까요?" 앞에는 한 줄의 개수를 쓴다고 말하게 한다. 한 줄의 수와 줄 수를 더해 10으로 쓰는 학생에게는 줄마다 4개가 있다는 것을 손가락으로 짚어 센다.',
      levels: { easy: { mode: 'array', bands: true, showCounts: true }, base: { mode: 'array', bands: true }, challenge: { mode: 'array' } },
      items: [
        arT('책상이 한 줄에 4개씩 6줄 있어요. 4 × 6은 얼마인가요?', 6, 4, 0.1, { shape: 'square' }),
        arT('공책이 한 묶음에 3권씩 8묶음 있어요. 공책은 모두 몇 권인가요?', 8, 3, 0.15, { shape: 'square' }),
        arT('의자가 한 줄에 2개씩 9줄 있어요. 의자는 모두 몇 개인가요?', 9, 2, 0.12, { shape: 'square' }),
      ] },
    { id: 'a3', title: '활동 3. 이야기에 알맞은 곱셈식 고르기', minutes: 8, tool: 'mindmap',
      task: '이야기를 읽고 알맞은 곱셈식을 골라 바구니에 담아요.',
      teacher: '"한 팀에 5명씩 4팀이에요. 한 묶음은 무엇이고 묶음은 몇 개일까요?" 5와 4가 각각 무엇인지 말하게 한 뒤 곱셈식을 고르게 한다. 식이 5 × 4와 4 × 4 중에서 헷갈리는 학생에게는 한 팀의 사람 수가 앞에 온다는 것을 짚어 준다.',
      levels: ML('이야기와 곱셈식 고르기'),
      items: [
        pk('한 팀에 5명씩 4팀이 있어요. 모두 몇 명인지 구하는 곱셈식을 골라 보세요.', '이야기와 곱셈식 고르기', ['5 × 4 = 20', '5 + 4 = 9', '4 × 4 = 16'], ['5 × 4 = 20'], 0.1, '알맞은 식'),
        pk('필통 한 개에 연필이 3자루씩 있어요. 7개의 필통에 든 연필 수를 구하는 곱셈식을 골라 보세요.', '이야기와 곱셈식 고르기', ['3 × 7 = 21', '3 + 7 = 10', '7 × 7 = 49'], ['3 × 7 = 21'], 0.15, '알맞은 식'),
        pk('한 봉지에 사탕이 6개씩 4봉지 있어요. 모두 몇 개인지 구하는 곱셈식을 골라 보세요.', '이야기와 곱셈식 고르기', ['6 × 4 = 24', '4 × 4 = 16', '6 + 4 = 10', '6 × 6 = 36'], ['6 × 4 = 24'], 0.2, '알맞은 식'),
      ] },
  ],
  wrap: ['"이야기를 읽고 곱셈식을 세울 때 먼저 찾을 것은 무엇이었나요?" 한 묶음의 수와 묶음 수를 말하게 한다. 출구 1번을 틀린 학생은 두 수를 더했는지 곱했는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '한 상자에 사과가 6개씩 3상자 있어요. 사과는 모두 몇 개인가요?', options: ['9개', '18개', '63개'], answer: 1, difficulty: 0.12, explain: '6씩 3번이니까 6 × 3 = 18이에요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'array', lock: true, total: true, shape: 'square' }, state: { rows: 5, cols: 4 }, prompt: '한 줄에 4개씩 5줄이에요. 4 × 5는 얼마인가요?', target: { rows: 5, cols: 4, total: true }, difficulty: 0.15 },
    { type: 'choice', prompt: '꽃병 한 개에 꽃이 3송이씩 6개 있어요. 알맞은 곱셈식은 무엇인가요?', options: ['3 + 6 = 9', '3 × 6 = 18', '6 × 6 = 36'], answer: 1, difficulty: 0.15, explain: '한 병에 3송이씩 6병이니까 3 × 6 = 18이에요.' },
  ]],
  ws: { title: '이야기 속 곱셈', items: [
    { type: 'blank', prompt: '이야기를 읽고 빈칸에 알맞은 수를 쓰세요.', text: '한 접시에 쿠키가 4개씩 5접시 있어요. 4 × ___ = ___개예요.', answer: '5, 20' },
    { type: 'blank', prompt: '이야기를 읽고 빈칸에 알맞은 수를 쓰세요.', text: '한 줄에 학생이 3명씩 7줄 서 있어요. ___ × 7 = ___명이에요.', answer: '3, 21' },
    { type: 'table', prompt: '이야기에서 한 묶음의 수와 묶음 수를 찾아 쓰세요.', columns: ['이야기', '한 묶음', '묶음 수', '곱셈식'], cells: [['한 봉지에 6개씩 3봉지', '6', '3', ''], ['한 상자에 5개씩 4상자', '', '', ''], ['한 줄에 2개씩 8줄', '', '', '']], answer: '6 × 3 = 18, 5 × 4 = 20, 2 × 8 = 16' },
    { type: 'choice', prompt: '자전거 한 대에 바퀴가 2개씩이에요. 6대의 바퀴 수를 구하는 식에 ○ 하세요.', options: ['2 + 6', '2 × 6', '6 × 6'], answer: '2 × 6' },
    { type: 'short', prompt: '"한 봉지에 사탕이 3개씩 5봉지"를 곱셈식으로 쓰고 답을 구해 보세요.' },
  ], easy: { note: '한 묶음에 몇 개인지, 묶음이 몇 개인지 먼저 찾아요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 접시에 3개씩 2접시이면 3 × ___ = ___개예요.', answer: '2, 6' },
    { type: 'table', prompt: '한 묶음과 묶음 수를 쓰세요.', columns: ['이야기', '한 묶음', '묶음 수'], cells: [['한 봉지에 4개씩 3봉지', '4', ''], ['한 상자에 5개씩 2상자', '', '']], answer: '3, 5와 2' },
    { type: 'choice', prompt: '한 줄에 2개씩 4줄이면 모두 몇 개인지 ○ 하세요.', options: ['6개', '8개'], answer: '8개' },
    { type: 'draw', prompt: '한 접시에 사과 3개씩 3접시를 그리고 곱셈식을 써 보세요.' },
  ] } },
  diff: { easy: '배열에 줄 띠와 "몇 개씩 몇 줄"이 보이고, 말풍선 판은 맞는 수 카드에 초록 테두리가 생겨요.', base: '이야기의 수를 스스로 찾아 곱셈식의 빈칸을 채워요.', challenge: '줄 띠 없이 이야기만 읽고 곱을 구하며, 곱셈식이 보기에 섞여 있어요.' },
  notes: '자주 보이는 어려움: ① 이야기 속 두 수를 더한다(2대, 7대라는 말에 2 + 7) → 같은 수가 몇 번 나오는지 묻는다. ② 한 묶음의 수와 묶음 수를 바꾼다 → 한 병·한 상자 속 수가 앞이라고 말해 준다. ③ 곱이 아니라 묶음 수를 답으로 쓴다 → 문제가 "모두 몇 개인지" 묻는지 다시 읽는다. 곱셈이 아닌 상황을 가려내는 것은 10차시에서 한다.',
}));
// ───────────────────────────── 10차시 (practice) ─────────────────────────────
L.push(lesson(10, {
  title: '곱셈으로 풀 수 있는 이야기와 아닌 이야기 가리기',
  objective: '같은 수씩 묶인 이야기만 곱셈식으로 나타낼 수 있음을 알고, 상황을 곱셈식으로 바꾸어 나타낼 수 있다.',
  desc: 'a market stall with some goods packed in identical boxes and some goods lying loose in different amounts, with a child sorting them',
  text: '같은 수씩인지 살피기',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 330, y: 84 }],
  intro: ['"사과 3개와 귤 4개는 모두 몇 개일까요? 3 × 4로 구할 수 있을까요?" 같은 수가 여러 번 나오지 않으면 곱셈이 아니라 덧셈이라고 말한다. "3개씩 4봉지는 곱셈이에요. 같은 수씩 묶여 있는지가 열쇠예요"라고 말해 준다. 숫자가 둘이면 무조건 곱하는 학생이 있다는 것을 알고 있다.', '3개씩 4봉지와 사과 3개 · 귤 4개는 무엇이 다를까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 같은 수씩 묶인 이야기 골라내기', minutes: 9, tool: 'mindmap',
      task: '같은 수씩 묶인 이야기만 골라 바구니에 담아요. 그런 이야기는 곱셈식으로 나타낼 수 있어요.',
      teacher: '"3개씩 담은 4봉지와 사과 3개, 귤 4개 중에서 같은 수씩 묶인 것은 어느 것일까요?" 같은 수가 반복되는지를 짚게 한다. 숫자가 둘이면 곱한다고 말하는 학생에게는 사과와 귤은 서로 다른 것이라고 말해 준다.',
      levels: ML('곱셈 이야기 고르기'),
      items: [
        pk('곱셈식으로 나타낼 수 있는 이야기를 모두 골라 보세요.', '곱셈 이야기 고르기', ['3개씩 담은 4봉지', '사과 3개와 귤 4개', '5명씩 선 3줄'], ['3개씩 담은 4봉지', '5명씩 선 3줄'], 0.1, '곱셈 이야기'),
        pk('같은 수씩 묶인 이야기를 모두 골라 보세요.', '곱셈 이야기 고르기', ['2개씩 든 6상자', '빨간 구슬 5개, 파란 구슬 2개', '4권씩 쌓은 5더미'], ['2개씩 든 6상자', '4권씩 쌓은 5더미'], 0.15, '곱셈 이야기'),
        pk('곱셈식으로 나타낼 수 있는 이야기를 모두 골라 보세요.', '곱셈 이야기 고르기', ['한 줄에 3명씩 4줄', '1반 25명, 2반 24명', '한 팀에 6명씩 3팀', '공책 2권, 연필 7자루'], ['한 줄에 3명씩 4줄', '한 팀에 6명씩 3팀'], 0.2, '곱셈 이야기'),
      ] },
    { id: 'a2', title: '활동 2. 이야기를 곱셈식과 곱으로 이어 보기', minutes: 9, tool: 'mindmap',
      task: '이야기를 읽고 곱을 구한 곱셈식과 이어요.',
      teacher: '"한 접시에 4개씩 7접시는 곱셈식으로 어떻게 쓰고 곱은 얼마일까요?" 앞의 수가 한 접시의 개수라고 말하게 한다. 4 + 7로 11을 고르는 학생에게는 한 접시의 수가 7번 나온다는 것을 다시 짚는다.',
      levels: ML('이야기와 곱'),
      items: [
        mt('이야기와 곱셈식을 이어 보세요.', '이야기와 곱', [['한 접시에 4개씩, 7접시', '4 × 7 = 28'], ['한 바구니에 5개씩, 6바구니', '5 × 6 = 30'], ['한 통에 2개씩, 9통', '2 × 9 = 18']], ['4 × 7 = 28', '5 × 6 = 30', '2 × 9 = 18', '4 + 7 = 11'], 0.12),
        mt('이번에는 상자·줄·컵 이야기와 이어 보세요.', '이야기와 곱', [['한 상자에 3개씩, 8상자', '3 × 8 = 24'], ['한 줄에 6명씩, 4줄', '6 × 4 = 24'], ['한 컵에 2개씩, 5컵', '2 × 5 = 10']], ['3 × 8 = 24', '6 × 4 = 24', '2 × 5 = 10', '3 + 8 = 11'], 0.18),
        mt('네 이야기를 모두 곱셈식과 이어 보세요.', '이야기와 곱', [['한 반에 5명씩, 5반', '5 × 5 = 25'], ['한 판에 3개씩, 9판', '3 × 9 = 27'], ['한 상자에 4개씩, 4상자', '4 × 4 = 16'], ['한 봉지에 2개씩, 7봉지', '2 × 7 = 14']], ['5 × 5 = 25', '3 × 9 = 27', '4 × 4 = 16', '2 × 7 = 14', '5 + 5 = 10'], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 곱셈식에서 모르는 수 찾기', minutes: 8, tool: 'story',
      task: '곱을 알고 있을 때 곱셈식의 빈칸에 알맞은 수를 찾아요. 뛰어 세어 곱에 닿는 횟수를 찾아요.',
      teacher: '"한 줄에 6개씩 놓았더니 24개예요. 6 × □ = 24에서 □는 몇일까요?" 6씩 뛰어 세어 24에 닿는 횟수를 세게 한다. 빈칸에 곱 24를 쓰는 학생에게는 빈칸은 묶음 수라고 짚어 준다.',
      levels: LVF,
      items: [
        fl('곱을 보고 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '한 줄에 6개씩 놓았더니 24개야. 6 × ___ = 24야.', 4], ['준호', 'tree', '한 통에 2개씩 담았더니 10개야. 2 × ___ = 10이야.', 5]], [3, 2], 0.12),
        fl('이번에는 한 묶음의 수나 묶음 수를 찾아 넣어 보세요.', [['민지', 'flower', '4 × ___ = 12야. 4씩 뛰어 세어 12에 닿는 횟수야.', 3], ['준호', 'leaf', '___ × 5 = 25야. 5씩 5번이야.', 5]], [4, 15], 0.18),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '3 × ___ = 21이야. 3씩 뛰어 세어 봐.', 7], ['준호', 'cloud', '___ × 3 = 18이야. 3씩 6번이야.', 6]], [4, 9], 0.2),
      ] },
  ],
  wrap: ['"어떤 이야기를 곱셈식으로 나타낼 수 있나요?" 같은 수씩 묶인 이야기라고 말하게 한다. 출구 1번을 틀린 학생은 숫자가 두 개이면 곱하는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '곱셈식으로 나타낼 수 있는 것은 무엇인가요?', options: ['한 상자에 4개씩 3상자', '사과 4개와 귤 3개', '연필 4자루와 지우개 3개'], answer: 0, difficulty: 0.12, explain: '같은 수 4개씩 3상자니까 4 × 3 = 12예요. 나머지는 서로 다른 물건이에요.' },
    { type: 'choice', prompt: '한 줄에 5명씩 4줄 서 있어요. 곱셈식과 곱으로 알맞은 것은 무엇인가요?', options: ['5 × 4 = 20', '5 + 4 = 9', '4 × 4 = 16'], answer: 0, difficulty: 0.1, explain: '5명씩 4줄이니까 5 × 4 = 20이에요.' },
    { type: 'tool', tool: 'story', options: { mode: 'fill', cards: [{ id: '5', text: '5' }, { id: '10', text: '10' }, { id: '3', text: '3' }], slots: [{ id: 'b1', who: '민지', motif: 'sun', label: '2 × ___ = 10이야.' }] }, prompt: '빈칸에 알맞은 수를 넣어 보세요.', target: { fill: { b1: '5' } }, difficulty: 0.18 },
  ]],
  ws: { title: '곱셈 이야기 가리기', items: [
    { type: 'choice', prompt: '곱셈식으로 나타낼 수 있는 이야기에 ○ 하세요.', options: ['한 줄에 3명씩 5줄', '남학생 12명과 여학생 14명', '사과 5개와 배 2개'], answer: '한 줄에 3명씩 5줄' },
    { type: 'table', prompt: '이야기를 곱셈식으로 쓰고 곱을 구하세요.', columns: ['이야기', '곱셈식', '곱'], cells: [['한 접시에 3개씩 4접시', '3 × 4', ''], ['한 상자에 5개씩 5상자', '', ''], ['한 줄에 2개씩 9줄', '', '']], answer: '12, 5 × 5 = 25, 2 × 9 = 18' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4 × ___ = 20이에요. 4씩 뛰어 세어 20에 닿는 횟수예요.', answer: '5' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '___ × 3 = 15예요. 5씩 3번 뛰어 세면 15예요.', answer: '5' },
    { type: 'short', prompt: '"사과 3개와 귤 4개"를 3 × 4로 구하면 안 되는 까닭을 써 보세요.' },
  ], easy: { note: '같은 수씩 묶여 있을 때만 곱셈식으로 쓸 수 있어요.', items: [
    { type: 'choice', prompt: '곱셈식으로 쓸 수 있는 이야기에 ○ 하세요.', options: ['한 줄에 2명씩 3줄', '사과 2개와 귤 3개'], answer: '한 줄에 2명씩 3줄' },
    { type: 'table', prompt: '곱셈식으로 쓰고 곱을 구하세요.', columns: ['이야기', '곱셈식', '곱'], cells: [['한 접시에 2개씩 3접시', '2 × 3', ''], ['한 상자에 5개씩 2상자', '', '']], answer: '6, 5 × 2 = 10' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 × ___ = 12', answer: '4' },
    { type: 'draw', prompt: '같은 수씩 묶인 이야기를 하나 만들어 곱셈식으로 써 보세요.' },
  ] } },
  diff: { easy: '맞는 카드에 초록 테두리가 생기고, 말풍선 판은 고른 수가 식에 바로 보여요.', base: '이야기가 곱셈 이야기인지 스스로 살피고 곱을 구해요.', challenge: '곱셈이 아닌 이야기가 더 많이 섞여 있고, 빈칸이 곱셈식의 앞이나 뒤에 있어서 거꾸로 생각해요.' },
  notes: '자주 보이는 어려움: ① 숫자가 둘이면 무조건 곱한다 → 같은 수씩 묶였는지 먼저 묻는다. ② 곱셈이 아닌 이야기에서 덧셈 대신 곱셈식을 쓴다 → 서로 다른 물건이면 더한다고 말해 준다. ③ 빈칸이 앞이나 뒤에 있을 때 곱을 쓴다 → 빈칸은 묶음 수 또는 한 묶음의 수임을 짚는다. 단원을 정리하는 11차시로 이어진다.',
}));
// ───────────────────────────── 11차시 (wrap) ─────────────────────────────
L.push(lesson(11, {
  title: '곱셈 한 단원 돌아보며 곱셈식으로 정리하기',
  objective: '묶어 세기, 몇 배, 곱셈식 읽기·쓰기를 정리하여 같은 수씩 묶인 상황을 곱셈식으로 나타내고 스스로 점검할 수 있다.',
  desc: 'a bulletin board where children pin paper cards showing groups, rows and multiplication sentences they learned during the unit',
  text: '곱셈 정리하기',
  layers: [{ motif: 'house', x: 110, y: 214, s: 1.0 }, { motif: 'tree', x: 385, y: 216 }, { motif: 'star', x: 250, y: 84, s: 0.7 }, { motif: 'flower', x: 330, y: 236 }],
  intro: ['"이번 단원에서 배운 것을 떠올려 봐요. 2개씩, 3개씩 묶어 세던 것이 지금은 어떤 식이 되었나요?" 묶어 세기에서 곱셈식까지 이어 온 말을 칠판에 한 줄로 쓴다. 곱셈식의 앞과 뒤의 수가 각각 무엇인지, ×와 +를 섞어 읽지 않았는지 되짚는다.', '묶어 세기부터 곱셈식까지 배운 말을 떠올려 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 곱셈 말과 곱셈식 이어 정리하기', minutes: 9, tool: 'mindmap',
      task: '곱셈 단원에서 배운 말과 식을 서로 이어요.',
      teacher: '"4 × 3 = 12에서 12는 무엇이라고 불렀지요?" 곱, 한 묶음의 수, 묶음 수를 각각 말하게 한다. 앞의 수를 묶음 수라고 부르는 학생에게는 4씩 3묶음에서 4가 무엇이었는지 다시 말하게 한다.',
      levels: ML('곱셈 정리'),
      items: [
        mt('곱셈식에서 각 수의 이름을 이어 보세요.', '곱셈 정리', [['4 × 3 = 12에서 12', '곱'], ['4 × 3에서 앞의 4', '한 묶음의 수'], ['4 × 3에서 뒤의 3', '묶음 수']], ['곱', '한 묶음의 수', '묶음 수', '합'], 0.1),
        mt('여러 가지 표현을 곱셈식과 이어 보세요.', '곱셈 정리', [['3씩 4묶음', '3 × 4 = 12'], ['3의 2배', '3 × 2 = 6'], ['5 + 5 + 5', '5 × 3 = 15']], ['3 × 4 = 12', '3 × 2 = 6', '5 × 3 = 15', '3 + 4 = 7'], 0.15),
        mt('네 가지 표현을 곱셈식과 모두 이어 보세요.', '곱셈 정리', [['2씩 7묶음', '2 × 7 = 14'], ['5의 4배', '5 × 4 = 20'], ['6 + 6 + 6', '6 × 3 = 18'], ['4씩 5묶음', '4 × 5 = 20']], ['2 × 7 = 14', '5 × 4 = 20', '6 × 3 = 18', '4 × 5 = 20', '2 + 7 = 9'], 0.2),
      ] },
    { id: 'a2', title: '활동 2. 배열로 만들고 곱 구하기', minutes: 9, tool: 'multiply',
      task: '곱셈식을 배열로 나타내고, 놓인 배열의 곱도 구해요.',
      teacher: '"3 × 4를 배열로 나타내면 한 줄에 몇 개씩 몇 줄일까요?" 앞의 수가 한 줄의 개수라고 말하게 한다. 줄 수와 한 줄의 개수가 바뀐 학생에게는 3씩 4묶음으로 읽어 보게 한다.',
      levels: AL,
      items: [
        ar('3 × 4를 배열로 나타내 보세요.', 4, 3, 0.1),
        arT('한 줄에 6개씩 4줄이에요. 6 × 4는 얼마인가요?', 4, 6, 0.15),
        ar('4 × 5를 배열로 나타내 보세요.', 5, 4, 0.15),
        arT('한 줄에 5개씩 3줄이에요. 모두 몇 개인지 곱셈식으로 구해 보세요.', 3, 5, 0.12),
      ] },
    { id: 'a3', title: '활동 3. 몇의 몇 배를 묶어 세어 확인하기', minutes: 8, tool: 'multiply',
      task: '전체가 한 묶음의 몇 배인지 묶어 세어 찾아요.',
      teacher: '"쿠키 15개는 3의 몇 배일까요? 3개씩 묶어 볼까요?" 묶음이 몇 개인지가 몇 배라고 말하게 한다. 15를 그대로 답하는 학생에게는 묶음을 세어 보게 한다.',
      levels: GL,
      items: [
        gp('쿠키 15개는 3의 몇 배인가요? 3개씩 묶어 보세요.', 15, 3, 0.1),
        gp('색연필 24자루는 6의 몇 배인가요? 6자루씩 묶어 보세요.', 24, 6, 0.15),
        gp('구슬 30개는 5의 몇 배인가요? 5개씩 묶어 보세요.', 30, 5, 0.2),
      ] },
  ],
  wrap: ['"곱셈 단원에서 가장 새로 알게 된 것은 무엇인가요?" 한 문장으로 말하게 한다. 출구 1번을 틀린 학생은 곱과 묶음 수를 섞어 쓰는지 살피고, 곱셈구구표를 외우는 것은 2학기에서 이어 배운다는 것을 알려 준다.', [
    { type: 'choice', prompt: '4 × 5 = 20에서 곱은 무엇인가요?', options: ['4', '5', '20'], answer: 2, difficulty: 0.1, explain: '곱셈의 결과를 곱이라고 해요. 4 × 5의 곱은 20이에요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'group', count: 18, maxSize: 10 }, prompt: '구슬 18개를 6개씩 묶어요. 묶음은 몇 개인가요?', target: { size: 6, answer: 3 }, difficulty: 0.15 },
    { type: 'choice', prompt: '같은 수를 여러 번 더하는 것을 짧게 나타내는 방법은 무엇인가요?', options: ['덧셈', '곱셈', '뺄셈'], answer: 1, difficulty: 0.08, explain: '같은 수를 여러 번 더한 것은 곱셈식 한 줄로 나타낼 수 있어요.' },
  ]],
  ws: { title: '곱셈 정리하기', items: [
    { type: 'table', prompt: '표를 완성하세요.', columns: ['표현', '덧셈식', '곱셈식'], cells: [['3씩 4묶음', '3 + 3 + 3 + 3', '3 × 4 = 12'], ['5씩 3묶음', '', ''], ['2씩 6묶음', '', '']], answer: '5 + 5 + 5, 5 × 3 = 15, 2 + 2 + 2 + 2 + 2 + 2, 2 × 6 = 12' },
    { type: 'figure', prompt: '그림을 보고 곱셈식을 완성하세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'circle', bands: true }, figures: [{ state: { rows: 5, cols: 3 }, caption: '___ × ___ = ___' }, { state: { rows: 4, cols: 6 }, caption: '___ × ___ = ___' }], answer: '3 × 5 = 15, 6 × 4 = 24' },
    { type: 'choice', prompt: '4의 3배를 바르게 나타낸 것에 ○ 하세요.', options: ['4 + 3', '4 × 3', '3 × 3'], answer: '4 × 3' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 상자에 5개씩 4상자이면 5 × ___ = ___개예요.', answer: '4, 20' },
    { type: 'check', prompt: '바른 말에 모두 ✓ 하세요.', options: ['5 × 3은 5를 3번 더한 것과 같아요', '2 × 4와 2 + 4는 같은 수예요', '같은 수씩 묶인 이야기는 곱셈식으로 쓸 수 있어요'], answer: '첫째와 셋째' },
  ], easy: { note: '같은 수씩 묶여 있으면 곱셈식으로 나타낼 수 있어요.', items: [
    { type: 'table', prompt: '표를 완성하세요.', columns: ['표현', '곱셈식'], cells: [['2씩 3묶음', '2 × 3 = ___'], ['5씩 2묶음', '']], answer: '6, 5 × 2 = 10' },
    { type: 'figure', prompt: '그림을 보고 곱셈식을 쓰세요.', tool: 'multiply', options: { mode: 'array', lock: true, shape: 'circle', bands: true }, figures: [{ state: { rows: 3, cols: 4 }, caption: '___ × ___ = ___' }], answer: '4 × 3 = 12' },
    { type: 'choice', prompt: '3의 2배에 ○ 하세요.', options: ['3 × 2', '3 + 2'], answer: '3 × 2' },
    { type: 'draw', prompt: '이번 단원에서 배운 곱셈을 그림으로 나타내고 곱셈식을 써 보세요.' },
  ] } },
  diff: { easy: '이음 판은 맞는 칸에 초록 테두리가 생기고, 배열에는 줄 띠와 개수가 보여요.', base: '말과 식을 스스로 이어 정리해요.', challenge: '배열에 줄 띠 없이 곱셈식을 나타내고, 헷갈리는 카드가 섞인 이음 판을 풀어요.' },
  notes: '자주 보이는 어려움: ① 곱과 묶음 수를 섞어 쓴다 → 4 × 5 = 20에서 곱은 모두의 수라고 말한다. ② ×를 +처럼 계산한다 → 같은 수를 여러 번 더하는 것임을 뛰어 세어 보인다. ③ 한 묶음의 수와 묶음 수를 바꾼다 → 앞의 수는 한 묶음의 수라고 약속한다. 이 단원은 곱셈의 뜻까지이고 곱셈구구표는 2학기 곱셈구구 단원(g2-math-2-02)에서 이어서 한다.',
}));
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 2, subject: '수학', unitTitle: UT,
  flow: '하나씩 세던 것을 2개씩 묶어 세면 더 빠르다는 경험에서 출발해, 1~2차시에 2·3·4·5씩 묶어 세고 수직선과 수 배열로 뛰어 셉니다. 3~4차시에는 줄지어 놓은 물건을 "몇 개씩 몇 줄"로 말하고 모두 몇 개인지 구한 뒤, 어떤 수를 여러 번 더한 것을 "몇의 몇 배"라고 부릅니다. 5~8차시에서 × 기호로 곱셈식을 쓰고 "곱하기"로 읽으며, 같은 수를 여러 번 더한 덧셈식과 배열 그림을 곱셈식으로 바꿉니다. 9~10차시는 이야기 속 한 묶음의 수와 묶음 수를 찾아 곱셈식을 세우고 곱셈으로 풀 수 없는 이야기를 가려내며, 11차시에서 정리합니다. 구구표를 외우는 것은 2학기 곱셈구구 단원의 몫이라 여기서는 곱이 30 이하인 수만 씁니다.',
  refs: {},
  lessons: L,
});
})();
