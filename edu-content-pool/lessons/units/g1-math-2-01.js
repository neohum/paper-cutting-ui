/* 1학년 2학기 1. 100까지의 수 — 단원 파일(차시 12개, 기존 차시 없음).
 * 확인 필요: 없음(units-index 성취기준 [2수01-01] [2수01-03] [2수01-04] 그대로).
 * 1학기 5단원(50까지의 수)에서 이어 51부터 100까지, 몇십, 크기 견주기, 짝수·홀수, 두 수로 가르고 모으기를 다룬다.
 * 흐름: 묶음 10개는 100과 몇십(1) → 51~60 묶음과 낱개(2) → 61~99 쓰고 읽기(3) → 99 다음 100과 수 순서(4)
 *      → 2씩·5씩·10씩 뛰어 세기(5) → 수 배열표 가로·세로 규칙(6) → 두 수 견주기(7) → 큰 수부터·작은 수부터 늘어놓기(8)
 *      → 둘씩 짝 지어 짝수와 홀수(9) → 100까지 짝수·홀수 가리기(10) → 몇십 몇을 가르고 모으기(11) → 단원 정리(12).
 */
(function () {
const UID = 'g1-math-2-01', CU = 'g1-수학-2학기-1', UT = '1. 100까지의 수', STD = ['[2수01-01]', '[2수01-03]', '[2수01-04]'];
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
  grade: 1, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: STD, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
// 십칸 보드(10까지): 놓기 / 세어 고르기
const PUT = { easy: { item: 'apple', showWord: true, cellNumbers: true, showGoal: true, revealAfterCheck: true }, base: { item: 'apple', showCount: false }, challenge: { item: 'apple', showCount: false, scatter: true } };
const SAY = { easy: { item: 'apple', cellNumbers: true, showCount: false, askNumber: true }, base: { item: 'apple', showCount: false, askNumber: true }, challenge: { item: 'apple', showCount: false, askNumber: true, scatter: true } };
const put = (prompt, count, d) => ({ prompt, target: { count }, difficulty: d });
const say = (prompt, count, d) => ({ prompt, state: { count }, target: { count }, difficulty: d });
// 묶어 세기 판: 10개씩 묶고 묶음 수·남은 낱개를 쓴다
const GL = { easy: { mode: 'group', maxSize: 10, showCount: true, revealAfterCheck: true }, base: { mode: 'group', maxSize: 10 }, challenge: { mode: 'group' } };
const grp = (prompt, count, answer, rest, d, extra) => Object.assign({ prompt, toolOptions: { count }, target: Object.assign({ size: 10, answer }, rest ? { rest } : {}), difficulty: d }, extra || {});
const num = (n) => ({ id: String(n), text: String(n), big: String(n) });
const nums = (...a) => a.map(num);
const ord = (...a) => ({ order: a.map(String) });
// 카드 놓기 판: 어떤 모드든 쉬움은 맞는 곳에 초록 테두리
const ML = (topic) => ({ easy: { topic, live: true }, base: { topic }, challenge: { topic } });
const cd = (v) => (typeof v === 'number' ? num(v) : v);
// 짝 잇기: pairs = [[칸 글, 정답 카드(수 또는 글), 칸 큰 글?], …], cards = 보기 카드 전부(수 또는 글)
const mt = (prompt, topic, pairs, cards, d) => ({
  prompt, difficulty: d,
  toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => Object.assign({ id: `s${i + 1}`, label: p[0] }, p[2] ? { big: p[2] } : {})), cards: cards.map(cd) },
  target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, String(p[1])])) },
});
const ordItem = (prompt, topic, list, d) => ({ prompt, toolOptions: { mode: 'order', topic, cards: nums(...list) }, target: ord(...[...list].sort((a, b) => a - b)), difficulty: d });
// 묶음·낱개가 늘 보이는 수 카드(견주기 첫 시간용)
const numc = (n) => ({ id: String(n), text: String(n), big: String(n), sub: `묶음 ${Math.floor(n / 10)} · 낱개 ${n % 10}` });
// 고르기: 조건에 맞는 수 카드만 바구니에 담는다
const pk = (prompt, topic, list, answers, d, basket, sub) => ({ prompt, difficulty: d, toolOptions: { mode: 'pick', topic, basket: basket || '고른 수', cards: list.map(sub ? numc : num) }, target: { pick: answers.map(String) } });
// 나누기: sortMap = { 칸 이름: [수…] } (칸 이름이 곧 칸 id)
const srt = (prompt, topic, sortMap, d) => ({ prompt, difficulty: d, toolOptions: { mode: 'sort', topic, slots: Object.keys(sortMap), cards: [].concat(...Object.values(sortMap)).map(cd) }, target: { sort: Object.fromEntries(Object.entries(sortMap).map(([k, v]) => [k, v.map(String)])) } });
// 말풍선 빈칸 채우기: rows = [[이름, 모티프, 글(___ 가 빈칸), 정답 수], …], extra = 함정 카드 수
const MOTIFS = ['sun', 'tree', 'flower', 'leaf', 'star', 'cloud'];
const fl = (prompt, rows, extra, d) => ({
  prompt, difficulty: d,
  toolOptions: { cards: [...rows.map((r) => r[3]), ...(extra || [])].map((n) => ({ id: String(n), text: String(n) })), slots: rows.map((r, i) => ({ id: `b${i + 1}`, who: r[0], motif: r[1] || MOTIFS[i], label: r[2] })) },
  target: { fill: Object.fromEntries(rows.map((r, i) => [`b${i + 1}`, String(r[3])])) },
});
// 수 배열 빈칸: seq 의 null 자리에 들어갈 수를 차례로
const pt = (prompt, seq, fill, d) => ({ prompt, toolOptions: { seq }, target: { fill }, difficulty: d });
const LVP = { easy: { mode: 'fill' }, base: { mode: 'fill' }, challenge: { mode: 'fill' } };
const LVF = { easy: { mode: 'fill', live: true }, base: { mode: 'fill' }, challenge: { mode: 'fill' } };
const pair = (id, title, minutes, task, teacher, prompts, tool, levels) => ({ id, title, minutes, tool, pair: true, task, teacher, levels, items: prompts.map((prompt) => ({ prompt, free: true, difficulty: 0 })) });
const LVO = { easy: { mode: 'odd' }, base: { mode: 'odd' }, challenge: { mode: 'odd' } };
// 둘씩 짝 짓기 판(짝수·홀수): 2개씩 묶고 짝이 몇 개, 남는 것이 몇 개인지 쓴다
const GL2 = { easy: { mode: 'group', maxSize: 4, showCount: true, revealAfterCheck: true }, base: { mode: 'group', maxSize: 6 }, challenge: { mode: 'group' } };
const grp2 = (prompt, count, answer, rest, d) => Object.assign({ prompt, toolOptions: { count }, target: Object.assign({ size: 2, answer }, rest ? { rest } : {}), difficulty: d });
const odd = (prompt, seq, at, d) => ({ prompt, toolOptions: { mode: 'odd', seq }, target: { odd: at }, difficulty: d });
const JMP = (max) => ({
  easy: { mode: 'jump', min: 0, max, step: 10, labels: 'major', fixedFrom: 0, showValue: true },
  base: { mode: 'jump', min: 0, max, step: 10, labels: 'major', fixedFrom: 0 },
  challenge: { mode: 'jump', min: 0, max, step: 10, sub: 10, labels: 'ends', fixedFrom: 0 },
});
const READ = (a, b) => ({ easy: { mode: 'read', min: a, max: b, step: 1, labels: 'all', showValue: true }, base: { mode: 'read', min: a, max: b, step: 1, labels: 'all' }, challenge: { mode: 'read', min: a, max: b, step: 1, labels: 'ends' } });
const L = [];
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '10개씩 묶음 10개로 100 만들기',
  objective: '10개씩 묶음의 수로 60, 70, 80, 90과 100을 세어 읽고, 묶음 10개가 100임을 말할 수 있다.',
  desc: 'ten tall bundles of paper stars lined up in a row like a tower of one hundred stars on a classroom table',
  text: '묶음 10개는 100',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216, s: 1.1 }, { motif: 'star', x: 170, y: 84, s: 0.6 }, { motif: 'star', x: 320, y: 80, s: 0.6 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"지난 학기에는 50까지 세었어요. 색종이 묶음이 5개이면 50장이었지요. 묶음이 6개, 7개로 늘어나면 몇 장일까요?" 묶음을 하나씩 짚으며 "열, 스물, 서른…" 하고 센다. 묶음이 10개가 되면 "백"이라고 읽는다고 알려 준다. 묶음 10개를 "열십"처럼 읽는 학생이 있으면 백이라는 새로운 이름이 있다고 말해 준다.', '색종이 묶음이 하나씩 늘어나요. 묶음이 열 개가 되면 몇 장일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 10씩 뛰어 세어 100까지', minutes: 9, tool: 'numberline',
      task: '10씩 뛰어 세어요. 한 번 뛸 때마다 묶음이 하나씩 늘어요.',
      teacher: '"묶음이 하나 늘 때마다 수가 얼마나 커지나요? 10씩 커져요." 뛸 때마다 소리 내어 세게 한다. 90 다음을 "100"이 아니라 "910"으로 쓰는 학생에게는 묶음이 하나 더 생겨 열 번째 묶음이 된다고 보여 준다.',
      levels: JMP(100),
      items: [
        { prompt: '10씩 6번 뛰어 세어 보세요. 어디에 닿나요?', target: { from: 0, size: 10, count: 6 }, difficulty: 0.08 },
        { prompt: '10씩 뛰어 세어 80에 닿아 보세요.', target: { from: 0, size: 10, end: 80 }, difficulty: 0.12 },
        { prompt: '10씩 9번 뛰어 세어 보세요. 100이 되려면 한 번 더 뛰어야 해요.', target: { from: 0, size: 10, count: 9 }, difficulty: 0.15 },
        { prompt: '10씩 뛰어 세어 100에 닿아 보세요. 묶음이 모두 몇 개인가요?', target: { from: 0, size: 10, end: 100 }, difficulty: 0.2 },
      ] },
    { id: 'a2', title: '활동 2. 묶음 수와 몇십 이어 보기', minutes: 8, tool: 'mindmap',
      task: '"묶음 7개"는 70이에요. 묶음의 수에 알맞은 수 카드를 놓아요.',
      teacher: '"묶음이 7개이면 10이 7번이니까 몇일까요?" 손가락으로 묶음을 세며 수를 말하게 한다. 묶음 9개를 9로만 쓰는 학생에게는 묶음 하나가 10이라 90이라고 짚는다.',
      levels: ML('묶음 수와 몇십'),
      items: [
        mt('묶음의 수에 알맞은 수를 이어 보세요.', '묶음 수와 몇십', [['묶음 6개', 60], ['묶음 8개', 80], ['묶음 7개', 70]], [60, 80, 70, 90], 0.08),
        mt('이번에는 묶음이 더 많아요. 이어 보세요.', '묶음 수와 몇십', [['묶음 9개', 90], ['묶음 10개', 100]], [90, 100, 10, 80], 0.15),
        mt('네 칸을 모두 이어 보세요.', '묶음 수와 몇십', [['묶음 9개', 90], ['묶음 7개', 70], ['묶음 10개', 100], ['묶음 6개', 60]], [90, 70, 100, 60, 80], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 60, 70, 80, 90, 100 읽는 말 이어 보기', minutes: 9, tool: 'mindmap',
      task: '수 옆에 읽는 말 카드를 놓아요. 육십, 예순처럼 두 가지로 읽을 수 있어요.',
      teacher: '"60은 육십이라고도 읽고 예순이라고도 읽어요." 두 가지를 모두 인정하고 소리 내어 읽게 한다. 70을 "칠 십"처럼 끊어 읽거나 100을 "일영영"으로 읽는 학생이 있다 — 100은 백이라고 따로 읽는다고 알려 준다.',
      levels: ML('몇십 읽기'),
      items: [
        mt('수를 읽는 말과 이어 보세요.', '몇십 읽기', [['60', '육십', '60'], ['80', '팔십', '80'], ['70', '칠십', '70']], ['육십', '팔십', '칠십', '오십'], 0.1),
        mt('이번에는 예순처럼 우리말로 읽는 말과 이어 보세요.', '몇십 읽기', [['90', '아흔', '90'], ['70', '일흔', '70'], ['80', '여든', '80']], ['아흔', '일흔', '여든', '예순'], 0.18),
        mt('100과 90, 60을 읽는 말과 이어 보세요.', '몇십 읽기', [['100', '백', '100'], ['90', '구십', '90'], ['60', '예순', '60']], ['백', '구십', '예순', '육십', '천'], 0.22),
      ] },
  ],
  wrap: ['"묶음이 10개이면 몇일까요? 어떻게 읽을까요?" 손가락으로 묶음 열 개를 보이며 "백"이라고 말하게 한다. 출구 2번을 틀린 학생은 몇십과 몇을 섞어 읽는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '10개씩 묶음 7개는 모두 몇 개인가요?', options: ['7개', '17개', '70개'], answer: 2, difficulty: 0.12, explain: '묶음 하나가 10이라서 묶음 7개는 70개예요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 100, step: 10, labels: 'major', fixedFrom: 0 }, prompt: '10씩 7번 뛰어 세어 보세요.', target: { from: 0, size: 10, count: 7 }, difficulty: 0.15 },
    { type: 'choice', prompt: '90 다음에 오는 몇십은 무엇인가요?', options: ['91', '100', '910'], answer: 1, difficulty: 0.15, explain: '묶음 9개 다음은 묶음 10개예요. 백이라고 읽고 100이라고 써요.' },
  ]],
  ws: { title: '60부터 100까지', items: [
    { type: 'table', prompt: '묶음의 수를 몇십으로 쓰세요.', columns: ['묶음', '수'], cells: [['6개', ''], ['8개', ''], ['10개', '']], answer: '60, 80, 100' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10씩 뛰어 세면 60 - 70 - ___ - 90 - ___', answer: '80, 100' },
    { type: 'table', prompt: '수를 읽는 말로 쓰세요.', columns: ['수', '십 읽기', '우리말 읽기'], cells: [['70', '칠십', ''], ['80', '', '여든'], ['90', '', '']], answer: '일흔, 팔십, 구십·아흔' },
    { type: 'choice', prompt: '묶음 10개를 나타낸 수에 ○ 하세요.', options: ['10', '90', '100'], answer: '100' },
    { type: 'figure', prompt: '점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 0, max: 100, step: 10, labels: 'major', marks: [60] }, caption: BLANK }, { options: { mode: 'read', min: 0, max: 100, step: 10, labels: 'major', marks: [90] }, caption: BLANK }], answer: '60, 90' },
  ], easy: { note: '묶음 하나가 10이에요. 묶음이 열 개가 되면 100이에요.', items: [
    { type: 'table', prompt: '묶음의 수를 몇십으로 쓰세요.', columns: ['묶음', '수'], cells: [['6개', ''], ['9개', '']], answer: '60, 90' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10씩 뛰어 세면 70 - ___ - 90', answer: '80' },
    { type: 'choice', prompt: '묶음 8개는 몇인가요?', options: ['8', '80'], answer: '80' },
    { type: 'draw', prompt: '묶음 6개를 막대 6개로 그리고 60이라고 써 보세요.' },
  ] } },
  diff: { easy: '수직선에 뛴 수가 보이고, 카드를 맞는 칸에 놓으면 초록 테두리가 생겨요.', base: '수직선에는 큰 눈금 숫자만 있어요. 카드는 모두 놓은 뒤 확인해요.', challenge: '수직선에 양 끝 숫자만 있고, 묶음 10개와 100을 잇는 문제가 나와요. 카드가 한 장 더 있어요.' },
  notes: '자주 보이는 어려움: ① 묶음 7개를 7로 쓴다 → 묶음 하나가 10이라 70이라고 말한다. ② 90 다음을 910처럼 쓴다 → 열 번째 묶음이 되어 100이라는 새 이름이 있다. ③ 우리말 읽기(예순, 일흔)를 낯설어한다 → 두 가지를 모두 인정한다. 61 이상의 수는 2차시부터 낱개와 함께 센다.',
}));
// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '51부터 60까지 묶음과 낱개로 세기',
  objective: '10개씩 묶음 5개와 낱개로 51부터 59까지, 묶음 6개로 60을 세어 쓸 수 있다.',
  desc: 'a farmer sorting fifty-some persimmons into baskets of ten with a few loose ones on a wooden crate',
  text: '50 다음 수',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.1 }, { motif: 'apple', x: 74, y: 182, s: 0.4, color: 'peach' }, { motif: 'house', x: 390, y: 214, s: 0.9 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"곶감이 10개씩 묶음 5개 있고 낱개가 2개 더 있어요. 모두 몇 개일까요?" 지난 학기에 배운 50을 먼저 떠올리고 낱개를 이어서 센다. "50, 51, 52" 하고 소리 내어 읽게 한다. 묶음 5개와 낱개 2개를 5와 2의 합 7로 말하는 학생에게는 묶음 5개가 50이라고 짚는다.', '곶감 묶음 5개와 낱개 2개를 이어서 세어 봐요. 모두 몇 개일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 곶감을 묶음과 낱개로 세기', minutes: 10, tool: 'multiply',
      task: '곶감을 10개씩 묶어요. 묶음은 몇 개이고 낱개는 몇 개인지 써요.',
      teacher: '"묶음은 몇 개예요? 낱개는요?" 묶음 수와 낱개 수를 따로 말한 뒤 수로 읽게 한다. 59를 "5와 9"로만 읽는 학생에게는 묶음 5개는 50이라고 짚는다.',
      levels: GL,
      items: [
        grp('곶감 53개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 53, 5, 3, 0.1),
        grp('곶감 58개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 58, 5, 8, 0.15),
        grp('곶감 51개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 51, 5, 1, 0.08),
        grp('곶감 60개를 10개씩 묶어요. 묶음은 몇 개인가요?', 60, 6, 0, 0.12),
      ] },
    { id: 'a2', title: '활동 2. 50부터 60까지 수직선에서 읽기', minutes: 8, tool: 'numberline',
      task: '수직선의 점이 나타내는 수를 골라요. 50에서 하나씩 세어요.',
      teacher: '"50에서 몇 칸 갔나요? 하나씩 세어 볼까요?" 눈금을 짚으며 51, 52를 읽게 한다. 눈금이 아니라 눈금 사이를 세어 하나 작게 답하는 학생이 있다 — 점이 놓인 눈금의 숫자를 읽게 한다.',
      levels: READ(50, 60),
      items: [
        { prompt: '가 점이 나타내는 수를 골라 보세요.', toolOptions: { marks: [54], choices: ['53', '54', '55'], why: ['53은 한 칸 덜 갔어요. 점이 있는 눈금의 수를 읽어요.', '', '55는 한 칸 더 갔어요. 50에서 몇 칸인지 다시 세어요.'] }, target: { pick: 1 }, difficulty: 0.08 },
        { prompt: '가 점은 어떤 수를 나타내나요?', toolOptions: { marks: [57], choices: ['56', '58', '57'], why: ['56은 한 칸 덜 갔어요. 눈금을 하나씩 짚어요.', '58은 한 칸 더 갔어요. 50에서 시작해 세어요.', ''] }, target: { pick: 2 }, difficulty: 0.15 },
        { prompt: '점이 나타내는 수를 골라 보세요.', toolOptions: { marks: [59], choices: ['59', '60', '58'], why: ['', '60은 한 칸 더 갔어요. 60 바로 앞이에요.', '58은 한 칸 덜 갔어요. 60 바로 앞의 눈금이에요.'] }, target: { pick: 0 }, difficulty: 0.12 },
      ] },
    { id: 'a3', title: '활동 3. 묶음 5개와 낱개 수 이어 보기', minutes: 8, tool: 'mindmap',
      task: '"묶음 5개, 낱개 2개"는 52예요. 칸에 알맞은 수 카드를 놓아요.',
      teacher: '"묶음 5개는 몇이에요? 낱개가 2개 더 있으면요?" 50 뒤에 낱개를 이어 세게 한다. 묶음 5개와 낱개 0개를 5로 쓰는 학생에게는 낱개가 없어도 0을 써서 50이 된다고 말해 준다.',
      levels: ML('51~60 쓰기'),
      items: [
        mt('묶음과 낱개를 수와 이어 보세요.', '51~60 쓰기', [['묶음 5개, 낱개 2개', 52], ['묶음 5개, 낱개 6개', 56], ['묶음 5개, 낱개 9개', 59]], [52, 56, 59, 25], 0.1),
        mt('이번에는 낱개가 다른 수들을 이어 보세요.', '51~60 쓰기', [['묶음 5개, 낱개 4개', 54], ['묶음 5개, 낱개 7개', 57], ['묶음 6개, 낱개 0개', 60]], [54, 57, 60, 45], 0.15),
        mt('네 칸을 모두 이어 보세요.', '51~60 쓰기', [['묶음 5개, 낱개 1개', 51], ['묶음 5개, 낱개 8개', 58], ['묶음 5개, 낱개 3개', 53], ['묶음 5개, 낱개 5개', 55]], [51, 58, 53, 55, 15], 0.2),
      ] },
  ],
  wrap: ['"묶음 5개와 낱개 4개는 몇일까요?" 50 뒤에 4를 이어 세어 말하게 한다. 출구 2번을 틀린 학생은 묶음 수와 낱개 수를 바꾸는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '10개씩 묶음 5개와 낱개 6개는 모두 몇 개인가요?', options: ['11개', '56개', '65개'], answer: 1, difficulty: 0.12, explain: '묶음 5개는 50이고 낱개 6개를 더해 56이에요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'group', count: 55, maxSize: 10 }, prompt: '밤 55개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', target: { size: 10, answer: 5, rest: 5 }, difficulty: 0.15 },
    { type: 'choice', prompt: '59보다 1 큰 수는 무엇인가요?', options: ['58', '60', '510'], answer: 1, difficulty: 0.18, explain: '낱개가 10개가 되어 묶음이 하나 늘어요. 59 다음은 60이에요.' },
  ]],
  ws: { title: '51부터 60까지', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['5', '3', ''], ['5', '9', ''], ['6', '0', '']], answer: '53, 59, 60' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '57은 10개씩 묶음 ___ 개와 낱개 ___ 개예요.', answer: '5, 7' },
    { type: 'choice', prompt: '묶음 5개와 낱개 2개를 나타낸 수에 ○ 하세요.', options: ['7', '25', '52'], answer: '52' },
    { type: 'figure', prompt: '점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 50, max: 60, step: 1, labels: 'all', marks: [52] }, caption: BLANK }, { options: { mode: 'read', min: 50, max: 60, step: 1, labels: 'all', marks: [58] }, caption: BLANK }], answer: '52, 58' },
    { type: 'draw', prompt: '○를 54개 그리고 10개씩 묶어 보세요.' },
  ], easy: { note: '50 뒤에 낱개를 이어 세요. 낱개가 없으면 0을 써요.', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['5', '4', ''], ['6', '0', '']], answer: '54, 60' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '52는 묶음 5개와 낱개 ___ 개예요.', answer: '2' },
    { type: 'choice', prompt: '묶음 5개와 낱개 1개는 몇인가요?', options: ['51', '6'], answer: '51' },
    { type: 'draw', prompt: '○를 51개 그려 보세요. 10개씩 묶어요.' },
  ] } },
  diff: { easy: '묶음 판은 맞힌 뒤에 묶음과 낱개가 보이고, 수직선에는 점의 수가 보여요. 카드는 맞는 칸에 놓으면 초록 테두리가 생겨요.', base: '묶음 판은 스스로 세어 써요. 수직선은 눈금 숫자를 하나씩 읽어요.', challenge: '묶는 수도 스스로 골라요. 수직선에는 양 끝 숫자만 있고, 카드가 한 장 더 있어요.' },
  notes: '자주 보이는 어려움: ① 묶음 5개와 낱개 2개를 5+2=7로 센다 → 묶음 5개는 50이라고 먼저 말한다. ② 59 다음을 510으로 쓴다 → 낱개가 10이 되면 묶음이 하나 늘어난다. ③ 52를 25처럼 바꿔 쓴다 → 묶음의 수를 먼저 쓴다. 61 이상은 3차시에서 이어서 한다.',
}));
// ───────────────────────────── 3차시 (core) ─────────────────────────────
L.push(lesson(3, {
  title: '61부터 99까지 쓰고 읽기',
  objective: '10개씩 묶음과 낱개로 61부터 99까지의 수를 쓰고 육십일, 칠십사처럼 읽을 수 있다.',
  desc: 'a girl at a school fair counting bundles of ten tickets and loose tickets in colorful paper boxes',
  text: '61부터 99까지',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 80 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"학교 장터에서 표를 10장씩 묶었어요. 묶음 7개와 낱장 4장이면 몇 장일까요?" 70 뒤에 4를 이어 세어 74를 만든다. 74를 칠십사 또는 일흔넷이라고 읽는 것을 알려 준다. 묶음 7개와 낱장 4장을 "47"로 쓰는 학생에게는 묶음을 먼저 쓴다고 보여 준다.', '표 묶음 7개와 낱장 4장이 있어요. 모두 몇 장일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 묶음과 낱개를 수로 쓰기', minutes: 9, tool: 'mindmap',
      task: '묶음과 낱개를 읽고 알맞은 수 카드를 놓아요.',
      teacher: '"묶음 9개와 낱개 2개는 얼마일까요?" 90 뒤에 낱개를 이어 세게 한다. 묶음 6개와 낱개 8개를 14로 합하는 학생이 있다 — 묶음 6개는 60이라고 짚는다.',
      levels: ML('61~99 쓰기'),
      items: [
        mt('묶음과 낱개를 수와 이어 보세요.', '61~99 쓰기', [['묶음 7개, 낱개 4개', 74], ['묶음 6개, 낱개 8개', 68], ['묶음 9개, 낱개 2개', 92]], [74, 68, 92, 47], 0.1),
        mt('이번에는 낱개가 0이거나 9인 수예요. 이어 보세요.', '61~99 쓰기', [['묶음 8개, 낱개 5개', 85], ['묶음 9개, 낱개 9개', 99], ['묶음 7개, 낱개 0개', 70]], [85, 99, 70, 58], 0.15),
        mt('네 칸을 모두 이어 보세요.', '61~99 쓰기', [['묶음 6개, 낱개 3개', 63], ['묶음 8개, 낱개 7개', 87], ['묶음 9개, 낱개 6개', 96], ['묶음 7개, 낱개 9개', 79]], [63, 87, 96, 79, 36], 0.22),
      ] },
    { id: 'a2', title: '활동 2. 수와 읽는 말 이어 보기', minutes: 9, tool: 'mindmap',
      task: '수 옆에 읽는 말 카드를 놓아요. 칠십사처럼 읽는 말과 일흔넷처럼 읽는 말이 있어요.',
      teacher: '"74는 칠십사라고도, 일흔넷이라고도 읽어요." 두 가지를 모두 인정한다. 칠십사를 "칠사십"처럼 순서를 바꾸어 읽는 학생에게는 몇십을 먼저 읽고 낱개를 이어 읽는다고 말해 준다.',
      levels: ML('61~99 읽기'),
      items: [
        mt('수를 읽는 말과 이어 보세요.', '61~99 읽기', [['74', '칠십사', '74'], ['68', '육십팔', '68'], ['92', '구십이', '92']], ['칠십사', '육십팔', '구십이', '구십오'], 0.12),
        mt('이번에는 일흔넷처럼 우리말로 읽는 말과 이어 보세요.', '61~99 읽기', [['83', '여든셋', '83'], ['65', '예순다섯', '65'], ['97', '아흔일곱', '97']], ['여든셋', '예순다섯', '아흔일곱', '일흔셋'], 0.18),
        mt('네 수를 읽는 말과 이어 보세요.', '61~99 읽기', [['71', '칠십일', '71'], ['89', '팔십구', '89'], ['66', '육십육', '66'], ['99', '구십구', '99']], ['칠십일', '팔십구', '육십육', '구십구', '팔십일'], 0.22),
      ] },
    { id: 'a3', title: '활동 3. 60부터 100 사이 수직선 읽기', minutes: 8, tool: 'numberline',
      task: '수직선의 점이 나타내는 수를 골라요. 몇십에서 시작해 하나씩 세어요.',
      teacher: '"70에서 몇 칸 갔나요? 하나씩 세어 볼까요?" 눈금 숫자를 소리 내어 읽게 한다. 90 근처에서 눈금 숫자를 건너뛰어 읽는 학생에게는 한 칸씩 짚으며 세게 한다.',
      levels: READ(60, 70),
      items: [
        { prompt: '가 점이 나타내는 수를 골라 보세요.', toolOptions: { min: 70, max: 80, marks: [76], choices: ['75', '77', '76'], why: ['75는 한 칸 덜 갔어요. 점이 있는 눈금의 수를 읽어요.', '77은 한 칸 더 갔어요. 70에서 몇 칸인지 세어요.', ''] }, target: { pick: 2 }, difficulty: 0.1 },
        { prompt: '이번 수직선에서 가 점이 나타내는 수를 골라 보세요.', toolOptions: { min: 80, max: 90, marks: [83], choices: ['83', '84', '82'], why: ['', '84는 한 칸 더 갔어요. 80에서 세 칸이에요.', '82는 한 칸 덜 갔어요. 눈금을 하나씩 짚어요.'] }, target: { pick: 0 }, difficulty: 0.15 },
        { prompt: '가 점은 어떤 수를 나타내나요?', toolOptions: { min: 90, max: 100, marks: [97], choices: ['96', '97', '98'], why: ['96은 한 칸 덜 갔어요. 90에서 일곱 칸이에요.', '', '98은 한 칸 더 갔어요. 100 바로 앞에서 세어요.'] }, target: { pick: 1 }, difficulty: 0.18 },
      ] },
  ],
  wrap: ['"묶음 8개와 낱개 3개는 몇일까요? 어떻게 읽을까요?" 80 뒤에 3을 이어 세어 팔십삼 또는 여든셋이라고 읽게 한다. 출구 1번을 틀린 학생은 묶음 수와 낱개 수를 바꾸는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '10개씩 묶음 8개와 낱개 3개를 수로 쓰면 무엇인가요?', options: ['38', '83', '11'], answer: 1, difficulty: 0.12, explain: '묶음 8개는 80이고 낱개 3개를 더해 83이에요.' },
    { type: 'choice', prompt: '"구십일"을 숫자로 쓰면 무엇인가요?', options: ['19', '91', '90'], answer: 1, difficulty: 0.15, explain: '구십일은 90과 1을 합친 수라서 91이에요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '61~99 쓰기', slots: [{ id: 's1', label: '묶음 7개, 낱개 8개' }, { id: 's2', label: '묶음 9개, 낱개 4개' }], cards: [num(78), num(94), num(49)] }, prompt: '묶음과 낱개를 수와 이어 보세요.', target: { match: { s1: '78', s2: '94' } }, difficulty: 0.18 },
  ]],
  ws: { title: '61부터 99까지', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['7', '2', ''], ['9', '8', ''], ['6', '5', '']], answer: '72, 98, 65' },
    { type: 'table', prompt: '수를 읽는 말로 쓰세요.', columns: ['수', '십 읽기', '우리말 읽기'], cells: [['84', '팔십사', ''], ['76', '', '일흔여섯'], ['91', '', '']], answer: '여든넷, 칠십육, 구십일·아흔하나' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '86은 10개씩 묶음 ___ 개와 낱개 ___ 개예요.', answer: '8, 6' },
    { type: 'choice', prompt: '"육십이"와 같은 수에 ○ 하세요.', options: ['26', '62', '60'], answer: '62' },
    { type: 'figure', prompt: '점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 80, max: 90, step: 1, labels: 'all', marks: [86] }, caption: BLANK }, { options: { mode: 'read', min: 90, max: 100, step: 1, labels: 'all', marks: [94] }, caption: BLANK }], answer: '86, 94' },
  ], easy: { note: '몇십 뒤에 낱개를 이어서 읽어요. 낱개가 없으면 0을 써요.', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['7', '3', ''], ['8', '0', '']], answer: '73, 80' },
    { type: 'table', prompt: '수를 읽는 말로 쓰세요.', columns: ['수', '십 읽기'], cells: [['72', '칠십이'], ['85', '']], answer: '팔십오' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '묶음 6개와 낱개 4개 → ___', answer: '64' },
    { type: 'choice', prompt: '"칠십일"과 같은 수에 ○ 하세요.', options: ['71', '17'], answer: '71' },
  ] } },
  diff: { easy: '카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 수직선에는 점의 수가 보여요.', base: '카드를 모두 놓은 뒤 확인을 눌러요. 수직선은 눈금 숫자를 하나씩 읽어요.', challenge: '수직선에 양 끝 숫자만 있고, 읽는 말 카드가 한 장 더 있어요.' },
  notes: '자주 보이는 어려움: ① 묶음과 낱개를 합쳐 14처럼 센다 → 묶음 6개는 60이다. ② 칠십사를 74가 아닌 704처럼 쓴다 → 몇십 다음 낱개를 한 자리로 쓴다. ③ 일흔넷의 "넷"을 74의 4와 잇지 못한다 → 낱개 4개를 하나씩 세게 한다. 99 다음은 4차시에서 이어서 한다.',
}));
// ───────────────────────────── 4차시 (core) ─────────────────────────────
L.push(lesson(4, {
  title: '99 다음 수 100과 수 순서 찾기',
  objective: '100까지의 수에서 바로 앞의 수, 바로 뒤의 수, 두 수 사이의 수를 찾고 99 다음 수가 100임을 말할 수 있다.',
  desc: 'a winding path of ninety-nine paper stepping stones up a hill ending at a big hundredth stone with a flag',
  text: '99 다음은 100',
  layers: [{ motif: 'hills', y: 206 }, { motif: 'tree', x: 90, y: 216, s: 1.0 }, { motif: 'bird', x: 340, y: 84 }, { motif: 'flower', x: 410, y: 238 }],
  intro: ['"징검다리를 한 칸씩 올라가요. 99번 돌 다음은 몇 번 돌일까요?" 칠판에 수를 차례로 쓰며 소리 내어 읽는다. 99에서 낱개가 9개 더 늘 수 없어 묶음이 하나 늘어 100이 된다고 말해 준다. 99 다음을 "910"이라고 쓰는 학생에게는 묶음 10개가 100이라고 짚는다.', '징검다리 돌에 수가 차례로 쓰여 있어요. 99 다음 돌은 몇 번일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 수 배열의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '수가 차례로 놓여 있어요. 앞의 수보다 1 큰 수를 빈칸에 써요.',
      teacher: '"78 다음 수는 무엇일까요? 앞에서부터 소리 내어 읽어 봐요." 빈칸의 앞과 뒤를 모두 읽게 한다. 99 다음 빈칸에 90을 쓰는 학생에게는 99 다음은 묶음이 열 개가 되어 100이라고 보여 준다.',
      levels: LVP,
      items: [
        pt('수가 차례로 놓여 있어요. 빈칸에 알맞은 수를 써 보세요.', [78, 79, null, 81, null, 83], [80, 82], 0.1),
        pt('끝에 100이 나와요. 빈칸을 채워 보세요.', [96, 97, null, 99, null], [98, 100], 0.2),
        pt('빈칸이 세 개예요. 수가 커지는 차례로 채워 보세요.', [65, null, 67, 68, null, 70, null], [66, 69, 71], 0.18),
        pt('90대 수의 빈칸을 채워 보세요.', [88, null, 90, 91, null, 93], [89, 92], 0.15),
      ] },
    { id: 'a2', title: '활동 2. 바로 앞의 수와 바로 뒤의 수 잇기', minutes: 9, tool: 'mindmap',
      task: '"바로 뒤의 수"는 1 큰 수, "바로 앞의 수"는 1 작은 수예요. 알맞은 수 카드를 놓아요.',
      teacher: '"69 바로 뒤의 수는 무엇일까요?" 손가락으로 69 다음 칸을 짚게 한다. 69 바로 뒤를 610이라고 말하는 학생에게는 낱개가 10개가 되면 묶음 하나가 늘어난다고 보여 준다.',
      levels: ML('앞의 수, 뒤의 수'),
      items: [
        mt('말에 알맞은 수를 이어 보세요.', '앞의 수, 뒤의 수', [['69 바로 뒤의 수', 70], ['80 바로 앞의 수', 79], ['99 바로 뒤의 수', 100]], [70, 79, 100, 98], 0.15),
        mt('이번에는 몇십 가까이의 수예요. 이어 보세요.', '앞의 수, 뒤의 수', [['89 바로 뒤의 수', 90], ['100 바로 앞의 수', 99], ['75 바로 앞의 수', 74]], [90, 99, 74, 76], 0.18),
        mt('네 칸을 모두 이어 보세요.', '앞의 수, 뒤의 수', [['59 바로 뒤의 수', 60], ['70 바로 앞의 수', 69], ['94 바로 뒤의 수', 95], ['81 바로 앞의 수', 80]], [60, 69, 95, 80, 71], 0.22),
      ] },
    { id: 'a3', title: '활동 3. 두 수 사이의 수를 수직선에 놓기', minutes: 8, tool: 'numberline',
      task: '두 수 사이에 있는 수는 하나씩 세어서 찾아요. 점을 알맞은 눈금에 놓아요.',
      teacher: '"98과 100 사이에는 어떤 수가 있을까요?" 눈금 숫자를 소리 내어 읽으며 찾게 한다. 사이의 수를 98이나 100이라고 하는 학생에게는 두 수는 빼고 가운데 눈금을 찾는다고 말해 준다.',
      levels: {
        easy: { mode: 'place', min: 0, max: 10, step: 1, labels: 'all', showValue: true },
        base: { mode: 'place', min: 0, max: 10, step: 1, labels: 'all' },
        challenge: { mode: 'place', min: 0, max: 10, step: 1, labels: 'ends' },
      },
      items: [
        { prompt: '98과 100 사이의 수를 수직선에 놓아 보세요.', toolOptions: { min: 95, max: 100 }, target: { points: [99] }, difficulty: 0.15 },
        { prompt: '69와 71 사이의 수를 수직선에 놓아 보세요.', toolOptions: { min: 66, max: 75 }, target: { points: [70] }, difficulty: 0.18 },
        { prompt: '85 바로 뒤의 수를 수직선에 놓아 보세요.', toolOptions: { min: 82, max: 90 }, target: { points: [86] }, difficulty: 0.12 },
      ] },
  ],
  wrap: ['"99 바로 뒤의 수는 무엇이었지요? 왜 100일까요?" 낱개가 열 개가 되면 묶음이 하나 늘고, 묶음이 열 개가 되면 100이 된다는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 다음 시간에 수 배열을 소리 내어 읽게 한다.', [
    { type: 'choice', prompt: '99 바로 뒤의 수는 무엇인가요?', options: ['90', '100', '910'], answer: 1, difficulty: 0.15, explain: '묶음이 열 개가 되면 100이에요. 99 바로 뒤의 수는 100이에요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: [92, 93, null, 95, null] }, prompt: '수가 차례로 놓여 있어요. 빈칸에 알맞은 수를 써 보세요.', target: { fill: [94, 96] }, difficulty: 0.15 },
    { type: 'choice', prompt: '78과 80 사이의 수는 무엇인가요?', options: ['77', '79', '81'], answer: 1, difficulty: 0.12, explain: '78 다음이 79, 79 다음이 80이에요. 사이의 수는 79예요.' },
  ]],
  ws: { title: '100까지의 수 순서', items: [
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '71 - 72 - ___ - 74 - ___ - 76', answer: '73, 75' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '97 - ___ - 99 - ___', answer: '98, 100' },
    { type: 'table', prompt: '바로 앞의 수와 바로 뒤의 수를 쓰세요.', columns: ['바로 앞', '수', '바로 뒤'], cells: [['', '60', ''], ['', '79', ''], ['', '99', '']], answer: '59-61, 78-80, 98-100' },
    { type: 'choice', prompt: '87과 89 사이의 수에 ○ 하세요.', options: ['86', '88', '90'], answer: '88' },
    { type: 'figure', prompt: '점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 95, max: 100, step: 1, labels: 'all', marks: [98] }, caption: BLANK }, { options: { mode: 'read', min: 66, max: 75, step: 1, labels: 'all', marks: [70] }, caption: BLANK }], answer: '98, 70' },
  ], easy: { note: '앞의 수에서 하나씩 세어 가요. 9 다음에는 묶음이 하나 늘어요.', items: [
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '81 - 82 - ___ - 84', answer: '83' },
    { type: 'table', prompt: '바로 뒤의 수를 쓰세요.', columns: ['수', '바로 뒤'], cells: [['69', ''], ['99', '']], answer: '70, 100' },
    { type: 'choice', prompt: '90 바로 앞의 수에 ○ 하세요.', options: ['89', '91'], answer: '89' },
    { type: 'draw', prompt: '98 다음 수와 그 다음 수를 쓰세요.' },
  ] } },
  diff: { easy: '카드를 맞는 칸에 놓으면 초록 테두리가 생겨요. 수직선에는 눈금마다 숫자가 있고 점의 수도 보여요.', base: '수 배열의 빈칸을 스스로 채우고, 수직선은 눈금 숫자를 읽으며 점을 놓아요.', challenge: '빈칸이 세 개이고 100이 나와요. 수직선에는 양 끝 숫자만 있어 하나씩 세어요.' },
  notes: '자주 보이는 어려움: ① 99 다음을 90이나 910처럼 쓴다 → 묶음이 열 개가 되면 100이라는 새 이름이 있다. ② 바로 앞과 바로 뒤를 바꾼다 → 앞은 1 작은 수, 뒤는 1 큰 수로 손짓 신호를 정한다. ③ 사이의 수에 두 수 자체를 넣는다 → 두 수는 빼고 가운데를 찾는다. 뛰어 세기는 5차시에서 한다.',
}));
// ───────────────────────────── 5차시 (core) ─────────────────────────────
const J5 = {
  easy: { mode: 'jump', min: 0, max: 50, step: 5, labels: 'major', fixedFrom: 0, showValue: true },
  base: { mode: 'jump', min: 0, max: 50, step: 5, labels: 'major', fixedFrom: 0 },
  challenge: { mode: 'jump', min: 0, max: 50, step: 5, sub: 5, labels: 'ends', fixedFrom: 0 },
};
const J2 = {
  easy: { mode: 'jump', min: 0, max: 30, step: 2, labels: 'major', fixedFrom: 0, showValue: true },
  base: { mode: 'jump', min: 0, max: 30, step: 2, labels: 'major', fixedFrom: 0 },
  challenge: { mode: 'jump', min: 0, max: 30, step: 2, sub: 2, labels: 'ends', fixedFrom: 0 },
};
L.push(lesson(5, {
  title: '5씩, 2씩, 10씩 건너뛰며 세기',
  objective: '2씩, 5씩, 10씩 뛰어 세고 건너뛴 수의 규칙을 말할 수 있다.',
  desc: 'a frog hopping across lily pads in jumps of different sizes with numbers painted on the pads',
  text: '건너뛰며 세어요',
  layers: [{ motif: 'wave', y: 214 }, { motif: 'tree', x: 80, y: 214, s: 1.0 }, { motif: 'bird', x: 330, y: 84 }, { motif: 'flower', x: 410, y: 236 }],
  intro: ['"개구리가 연잎 위를 5칸씩 건너뛰어요. 0에서 출발해 5, 10, 15… 다음은 어디일까요?" 손뼉을 치며 5씩 건너 세게 한다. "하나씩 세지 않아도 빨리 셀 수 있어요"라고 말해 준다. 5씩 뛰어 세다가 6, 7처럼 다시 하나씩 세는 학생에게는 한 번에 다섯 칸을 뛴다고 말해 준다.', '개구리가 5칸씩 뛰어요. 0에서 출발해 다음 칸을 말해 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 5씩 뛰어 세기', minutes: 9, tool: 'numberline',
      task: '5씩 뛰어 세어요. 한 번 뛸 때마다 5가 늘어요.',
      teacher: '"5, 10, 15… 한 번 뛸 때마다 수가 얼마나 커지나요?" 뛸 때마다 소리 내어 세게 한다. 5씩 4번 뛰었는데 9에 닿는 것처럼 더하기 4로 센 학생이 있다 — 한 번에 5를 더한다고 짚는다.',
      levels: J5,
      items: [
        { prompt: '5씩 4번 뛰어 세어 보세요. 어디에 닿나요?', target: { from: 0, size: 5, count: 4 }, difficulty: 0.08 },
        { prompt: '5씩 뛰어 세어 35에 닿아 보세요.', target: { from: 0, size: 5, end: 35 }, difficulty: 0.12 },
        { prompt: '5씩 9번 뛰어 세어 보세요.', target: { from: 0, size: 5, count: 9 }, difficulty: 0.15 },
        { prompt: '5씩 뛰어 세어 50에 닿아 보세요. 몇 번 뛰었나요?', target: { from: 0, size: 5, end: 50 }, difficulty: 0.18 },
      ] },
    { id: 'a2', title: '활동 2. 건너뛴 수의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '수가 일정하게 커져요. 얼마씩 커지는지 보고 빈칸에 알맞은 수를 써요.',
      teacher: '"앞의 수와 뒤의 수가 얼마나 차이 나나요?" 10, 20, 30에서 10씩 커지는 것을 먼저 찾게 한다. 5씩 커지는 수 배열에서 1씩 커진다고 생각하고 6, 7을 쓰는 학생이 있다 — 앞의 두 수의 차이를 먼저 말하게 한다.',
      levels: LVP,
      items: [
        pt('10씩 커지는 수예요. 빈칸을 채워 보세요.', [10, 20, 30, null, 50, null], [40, 60], 0.1),
        pt('5씩 커지는 수예요. 빈칸을 채워 보세요.', [5, 10, null, 20, null, 30], [15, 25], 0.12),
        pt('2씩 커지는 수예요. 빈칸을 채워 보세요.', [2, 4, 6, null, 10, null], [8, 12], 0.15),
        pt('20씩 커지는 수예요. 빈칸을 채워 보세요.', [20, 40, null, 80, null], [60, 100], 0.22),
      ] },
    { id: 'a3', title: '활동 3. 2씩 뛰어 세기', minutes: 8, tool: 'numberline',
      task: '2씩 뛰어 세어요. 한 번 뛸 때마다 두 칸씩 가요.',
      teacher: '"2, 4, 6… 한 번에 두 칸씩 가요." 눈금을 하나 건너뛰며 읽게 한다. 2씩 뛰는데 1칸만 가서 1, 2, 3으로 세는 학생이 있다 — 눈금 두 칸이 한 번이라고 짚는다.',
      levels: J2,
      items: [
        { prompt: '2씩 5번 뛰어 세어 보세요. 어디에 닿나요?', target: { from: 0, size: 2, count: 5 }, difficulty: 0.1 },
        { prompt: '2씩 뛰어 세어 16에 닿아 보세요.', target: { from: 0, size: 2, end: 16 }, difficulty: 0.15 },
        { prompt: '2씩 12번 뛰어 세어 보세요.', target: { from: 0, size: 2, count: 12 }, difficulty: 0.2 },
      ] },
  ],
  wrap: ['"5씩 뛰어 세면 5 다음은 무엇이지요? 10 다음은요?" 손뼉을 치며 이어 세게 한다. 출구 2번을 틀린 학생에게는 다음 시간 처음에 "몇씩 커져요?"를 먼저 물어본다.', [
    { type: 'choice', prompt: '5씩 뛰어 세었어요. 15 다음 수는 무엇인가요?', options: ['16', '20', '25'], answer: 1, difficulty: 0.12, explain: '5씩 뛰어 세면 15 다음은 20이에요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: [10, 20, null, 40, null] }, prompt: '10씩 커지는 수예요. 빈칸에 알맞은 수를 써 보세요.', target: { fill: [30, 50] }, difficulty: 0.15 },
    { type: 'choice', prompt: '2씩 뛰어 세었어요. 6 다음 수는 무엇인가요?', options: ['7', '8', '10'], answer: 1, difficulty: 0.15, explain: '2씩 뛰어 세면 6 다음은 8이에요.' },
  ]],
  ws: { title: '건너뛰며 세기', items: [
    { type: 'blank', prompt: '5씩 뛰어 센 수를 빈칸에 쓰세요.', text: '5 - 10 - ___ - 20 - ___ - 30', answer: '15, 25' },
    { type: 'blank', prompt: '10씩 뛰어 센 수를 빈칸에 쓰세요.', text: '30 - ___ - 50 - ___ - 70', answer: '40, 60' },
    { type: 'blank', prompt: '2씩 뛰어 센 수를 빈칸에 쓰세요.', text: '12 - 14 - ___ - 18 - ___', answer: '16, 20' },
    { type: 'choice', prompt: '5씩 뛰어 센 것에 ○ 하세요.', options: ['20, 25, 30, 35', '20, 22, 24, 26', '20, 30, 40, 50'], answer: '20, 25, 30, 35' },
    { type: 'figure', prompt: '2씩 뛴 화살표를 보고 닿은 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'jump', min: 0, max: 30, step: 2, fixedFrom: 0, labels: 'major' }, state: { from: 0, hops: [2, 2, 2, 2] }, caption: BLANK }], answer: '8' },
  ], easy: { note: '얼마씩 뛰는지 먼저 찾고, 그만큼씩 더해 가요.', items: [
    { type: 'blank', prompt: '5씩 뛰어 센 수를 빈칸에 쓰세요.', text: '5 - 10 - ___ - 20', answer: '15' },
    { type: 'blank', prompt: '10씩 뛰어 센 수를 빈칸에 쓰세요.', text: '10 - ___ - 30', answer: '20' },
    { type: 'choice', prompt: '2씩 뛰어 센 것에 ○ 하세요.', options: ['2, 4, 6, 8', '2, 3, 4, 5'], answer: '2, 4, 6, 8' },
    { type: 'draw', prompt: '5씩 뛰는 화살표를 0에서 20까지 그려 보세요.' },
  ] } },
  diff: { easy: '수직선에 뛴 수가 보이고, 눈금마다 숫자가 있어 한 번에 얼마를 가는지 쉽게 볼 수 있어요.', base: '큰 눈금 숫자만 있어요. 빈칸 수 배열에서는 얼마씩 커지는지 스스로 찾아요.', challenge: '수직선에 양 끝 숫자만 있고, 20씩 커지는 수처럼 큰 수도 나와요.' },
  notes: '자주 보이는 어려움: ① 5씩 뛰다가 하나씩 센다 → 한 번에 다섯 칸을 간다고 말한다. ② 2씩 뛰면서 눈금 하나만 간다 → 두 칸이 한 번이다. ③ 얼마씩 커지는지 보지 않고 1씩 늘려 쓴다 → 앞의 두 수 차이를 먼저 말하게 한다. 수 배열표는 6차시에서 한다.',
}));
// ───────────────────────────── 6차시 (practice) ─────────────────────────────
L.push(lesson(6, {
  title: '수 배열표에서 가로와 세로의 규칙 찾기',
  objective: '수 배열표에서 오른쪽으로 갈수록 1씩, 아래로 갈수록 10씩 커진다는 규칙을 찾아 빈칸을 채울 수 있다.',
  desc: 'a big paper hundred chart on a classroom wall with colorful sticky notes covering a few numbers in the grid',
  text: '수 배열표',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 250, y: 80, s: 0.7 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"교실 벽에 수 배열표가 붙어 있어요. 한 줄에 10개씩이에요. 오른쪽으로 한 칸 가면 얼마가 커질까요?" 손가락으로 오른쪽으로 한 칸씩 짚으며 1씩 커지는 것을 말하게 한다. 아래로 내려가면 10씩 커진다고 말해 준다. 아래 칸을 1이 커진다고 말하는 학생에게는 한 줄이 열 칸임을 보여 준다.', '수 배열표에서 오른쪽으로 가면 얼마씩 커질까요? 아래로 내려가면요?'],
  acts: [
    { id: 'a1', title: '활동 1. 수 배열표의 빈칸 채우기', minutes: 10, tool: 'pattern',
      task: '수 배열표의 빈칸을 채워요. 가로로는 1씩, 세로로는 10씩 커져요.',
      teacher: '"빈칸의 왼쪽 수와 오른쪽 수를 먼저 읽어 봐요." 가로 규칙으로 찾고 세로 규칙으로 확인하게 한다. 한 줄이 끝나고 다음 줄 첫 칸에서 가로로 이어 읽지 못하는 학생에게는 줄이 바뀌어도 1씩 커진다고 보여 준다.',
      levels: LVP,
      items: [
        { prompt: '71부터 86까지 수 배열표예요. 빈칸을 채워 보세요.', toolOptions: { seq: [71, 72, 73, 74, null, 76, 77, 78, null, 80, 81, 82, null, 84, 85, 86], perRow: 10 }, target: { fill: [75, 79, 83] }, difficulty: 0.15 },
        { prompt: '41부터 56까지 수 배열표예요. 빈칸을 채워 보세요.', toolOptions: { seq: [41, 42, 43, null, 45, 46, 47, 48, null, 50, 51, null, 53, 54, 55, 56], perRow: 10 }, target: { fill: [44, 49, 52] }, difficulty: 0.2 },
        pt('세로로 10씩 커지는 수예요. 빈칸을 채워 보세요.', [23, 33, null, 53, null, 73], [43, 63], 0.18),
      ] },
    { id: 'a2', title: '활동 2. 수 배열표에서 이웃한 칸 찾기', minutes: 8, tool: 'mindmap',
      task: '"바로 오른쪽 칸"은 1 큰 수, "바로 아래 칸"은 10 큰 수예요. 알맞은 수 카드를 놓아요.',
      teacher: '"57 바로 아래 칸은 무엇일까요? 한 줄 아래이니 10이 커져요." 손으로 표를 짚으며 말하게 한다. 바로 아래 칸을 58이라고 하는 학생에게는 오른쪽과 아래가 다르다고 짚는다.',
      levels: ML('이웃한 칸'),
      items: [
        mt('수 배열표에서 이웃한 칸의 수를 이어 보세요.', '이웃한 칸', [['57 바로 아래 칸', 67], ['84 바로 위 칸', 74], ['63 바로 오른쪽 칸', 64]], [67, 74, 64, 73], 0.15),
        mt('이번에는 90에 가까운 수예요. 이어 보세요.', '이웃한 칸', [['82 바로 아래 칸', 92], ['95 바로 왼쪽 칸', 94], ['78 바로 위 칸', 68]], [92, 94, 68, 83], 0.2),
        mt('네 칸을 모두 이어 보세요.', '이웃한 칸', [['45 바로 아래 칸', 55], ['71 바로 오른쪽 칸', 72], ['99 바로 위 칸', 89], ['60 바로 왼쪽 칸', 59]], [55, 72, 89, 59, 61], 0.25),
      ] },
    { id: 'a3', title: '활동 3. 같은 세로줄에 있는 수 고르기', minutes: 8, tool: 'mindmap',
      task: '아래로 한 칸씩 내려가면 10씩 커져요. 같은 세로줄에 있는 수를 모두 골라요.',
      teacher: '"24에서 아래로 내려가면 어떤 수가 나올까요?" 24, 34, 44처럼 낱개가 같다는 것을 짚는다. 낱개가 다른 수를 같은 세로줄에 넣는 학생에게는 세로줄은 낱개의 수가 같다고 말해 준다.',
      levels: ML('세로줄 수'),
      items: [
        pk('24 아래로 내려가면 만나는 수를 모두 골라 보세요.', '세로줄 수', [34, 44, 35, 64, 54, 43], [34, 44, 54, 64], 0.2, '같은 세로줄'),
        pk('71 아래로 내려가면 만나는 수를 모두 골라 보세요.', '세로줄 수', [81, 91, 72, 80, 92], [81, 91], 0.18, '같은 세로줄'),
        pk('56 아래로 내려가면 만나는 수를 모두 골라 보세요.', '세로줄 수', [66, 76, 86, 96, 65, 67], [66, 76, 86, 96], 0.22, '같은 세로줄'),
      ] },
  ],
  wrap: ['"수 배열표에서 아래로 한 칸 가면 얼마가 커질까요?" 손으로 짚으며 10이라고 말하게 한다. 출구 2번을 틀린 학생에게는 다음 시간 처음에 "오른쪽은 얼마, 아래는 얼마 커져요?"를 다시 물어본다.', [
    { type: 'choice', prompt: '수 배열표에서 38 바로 아래 칸의 수는 무엇인가요?', options: ['39', '48', '28'], answer: 1, difficulty: 0.15, explain: '아래로 한 칸 가면 10이 커져서 48이에요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: [12, 22, null, 42, null] }, prompt: '세로로 10씩 커지는 수예요. 빈칸에 알맞은 수를 써 보세요.', target: { fill: [32, 52] }, difficulty: 0.15 },
    { type: 'choice', prompt: '수 배열표에서 67 바로 오른쪽 칸의 수는 무엇인가요?', options: ['66', '68', '77'], answer: 1, difficulty: 0.12, explain: '오른쪽으로 한 칸 가면 1이 커져서 68이에요.' },
  ]],
  ws: { title: '수 배열표', items: [
    { type: 'blank', prompt: '가로로 1씩 커지는 수를 빈칸에 쓰세요.', text: '61 - 62 - ___ - 64 - ___', answer: '63, 65' },
    { type: 'blank', prompt: '세로로 10씩 커지는 수를 빈칸에 쓰세요.', text: '15 - 25 - ___ - 45 - ___', answer: '35, 55' },
    { type: 'table', prompt: '수 배열표의 일부예요. 빈칸을 채우세요.', columns: ['', '', ''], cells: [['52', '53', '54'], ['62', '', '64'], ['', '73', '74']], answer: '63, 72' },
    { type: 'choice', prompt: '86 바로 아래 칸의 수에 ○ 하세요.', options: ['76', '87', '96'], answer: '96' },
    { type: 'short', prompt: '수 배열표에서 오른쪽으로 갈 때와 아래로 갈 때 수가 어떻게 달라지는지 써 보세요.' },
  ], easy: { note: '오른쪽으로 한 칸은 1 커지고, 아래로 한 칸은 10 커져요.', items: [
    { type: 'blank', prompt: '가로로 1씩 커지는 수를 빈칸에 쓰세요.', text: '31 - 32 - ___ - 34', answer: '33' },
    { type: 'blank', prompt: '세로로 10씩 커지는 수를 빈칸에 쓰세요.', text: '14 - 24 - ___', answer: '34' },
    { type: 'choice', prompt: '45 바로 오른쪽 칸의 수에 ○ 하세요.', options: ['46', '55'], answer: '46' },
    { type: 'draw', prompt: '수 배열표에서 27 바로 아래 칸의 수를 써 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말하고 카드가 돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러요. 빈칸 수는 스스로 규칙을 찾아 써요.', challenge: '빈칸이 세 개이고 함정 카드가 더 있어요. 세로줄 수를 모두 골라야 해요.' },
  notes: '자주 보이는 어려움: ① 아래 칸을 1 큰 수로 말한다 → 한 줄이 열 칸이라 10이 커진다. ② 줄이 바뀔 때 가로 규칙을 놓친다 → 10 다음 11처럼 줄이 바뀌어도 1씩 커진다. ③ 같은 세로줄은 낱개의 수가 같다는 것을 놓친다 → 24, 34, 44의 낱개를 읽게 한다. 크기 견주기는 7차시에서 한다.',
}));
// ───────────────────────────── 7차시 (core) ─────────────────────────────
L.push(lesson(7, {
  title: '100까지 두 수의 크기 견주기',
  objective: '100까지의 두 수를 묶음 수와 낱개 수로 견주어 어느 수가 더 큰지 말할 수 있다.',
  desc: 'two children comparing how many bundled ice-cream sticks each has, one holding a taller stack than the other',
  text: '어느 수가 더 클까요?',
  layers: [{ motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'tree', x: 400, y: 218 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"아이스크림 막대를 민지는 63개, 준호는 58개 모았어요. 누가 더 많이 모았을까요?" 묶음 수를 먼저 견주는 것을 보여 준다. "63은 묶음이 6개, 58은 묶음이 5개예요"라고 말해 준다. 낱개 8이 3보다 크다고 58을 고르는 학생에게는 묶음 하나가 10이라고 짚는다.', '막대를 63개 모은 친구와 58개 모은 친구 중 누가 더 많이 모았을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 두 수 중 더 큰 수·더 작은 수 고르기', minutes: 9, tool: 'mindmap',
      task: '카드에 묶음과 낱개가 쓰여 있어요. 묶음이 더 많은 수를 먼저 찾아요. 같으면 낱개를 견주어요.',
      teacher: '"묶음이 몇 개씩이에요? 묶음 수가 같으면 무엇을 견줄까요?" 묶음 수를 먼저 말하게 한다. 76과 79에서 묶음은 같은데 7과 9를 견주는 학생이 있다 — 낱개 6과 9를 견주게 한다.',
      levels: { easy: { topic: '더 큰 수, 더 작은 수', live: true }, base: { topic: '더 큰 수, 더 작은 수' }, challenge: { topic: '더 큰 수, 더 작은 수' } },
      items: [
        pk('두 수 중 더 큰 수를 골라 보세요.', '더 큰 수, 더 작은 수', [63, 58], [63], 0.1, '더 큰 수', true),
        pk('묶음 수를 먼저 견주어 더 큰 수를 골라 보세요.', '더 큰 수, 더 작은 수', [87, 91], [91], 0.12, '더 큰 수', true),
        pk('묶음 수가 같아요. 낱개를 견주어 더 큰 수를 골라 보세요.', '더 큰 수, 더 작은 수', [76, 79], [79], 0.15, '더 큰 수', true),
        pk('이번에는 더 작은 수를 골라 보세요.', '더 큰 수, 더 작은 수', [82, 28], [28], 0.2, '더 작은 수', true),
      ] },
    { id: 'a2', title: '활동 2. 묶음이 7개 이상인 수 가려내기', minutes: 9, tool: 'mindmap',
      task: '수 카드를 묶음이 7개 이상인 칸과 6개 이하인 칸으로 나누어요.',
      teacher: '"85는 묶음이 몇 개예요?" 십의 자리 숫자가 묶음 수임을 짚는다. 69를 낱개 9가 크다고 7개 이상 칸에 넣는 학생에게는 69의 묶음이 6개뿐이라고 말해 준다.',
      levels: ML('묶음 수 견주기'),
      items: [
        srt('수 카드를 묶음 수에 따라 나누어 보세요.', '묶음 수 견주기', { '묶음이 7개 이상': [72, 85, 99], '묶음이 6개 이하': [48, 63] }, 0.12),
        srt('이번에는 몇십 카드도 있어요. 묶음 수에 따라 나누어 보세요.', '묶음 수 견주기', { '묶음이 7개 이상': [70, 88, 94], '묶음이 6개 이하': [59, 60] }, 0.2),
        srt('낱개가 큰 수도 있어요. 묶음 수를 보고 나누어 보세요.', '묶음 수 견주기', { '묶음이 7개 이상': [71, 80], '묶음이 6개 이하': [39, 69, 52] }, 0.22),
      ] },
    { id: 'a3', title: '활동 3. 수직선에서 두 수의 자리 비교', minutes: 8, tool: 'numberline',
      task: '수직선에서는 더 큰 수가 오른쪽에 있어요. 두 점을 알맞은 자리에 놓아요.',
      teacher: '"더 큰 수는 오른쪽에 있을까요, 왼쪽에 있을까요?" 점을 놓은 뒤 어느 점이 더 오른쪽인지 말하게 한다. 먼저 말한 수가 더 크다고 생각하는 학생이 있다 — 이름 순서가 아니라 수의 자리를 보게 한다.',
      levels: {
        easy: { mode: 'place', min: 50, max: 100, step: 10, sub: 10, count: 2, labels: 'major', showValue: true },
        base: { mode: 'place', min: 50, max: 100, step: 10, sub: 10, count: 2, labels: 'major' },
        challenge: { mode: 'place', min: 50, max: 100, step: 10, sub: 10, count: 2, labels: 'ends' },
      },
      items: [
        { prompt: '가는 67, 나는 82예요. 두 점을 수직선에 놓아 보세요.', target: { points: [67, 82] }, difficulty: 0.12 },
        { prompt: '가는 91, 나는 74예요. 두 점을 수직선에 놓아 보세요.', target: { points: [91, 74] }, difficulty: 0.15 },
        { prompt: '가는 55, 나는 100이에요. 두 점을 수직선에 놓아 보세요.', target: { points: [55, 100] }, difficulty: 0.18 },
      ] },
  ],
  wrap: ['"63과 58 중 어느 수가 더 클까요? 어떻게 알았나요?" 묶음 수를 먼저 견주었다는 말이 나오게 한다. 출구 1번을 틀린 학생은 낱개 수만 보고 고르는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요. 69와 74 중 어느 수가 더 큰가요?', options: ['69', '74'], answer: 1, difficulty: 0.15, explain: '74는 묶음이 7개, 69는 묶음이 6개예요. 묶음이 더 많은 74가 더 커요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '더 큰 수, 더 작은 수', basket: '더 큰 수', cards: [num(85), num(88)] }, prompt: '85와 88 중 더 큰 수를 골라 보세요.', target: { pick: ['88'] }, difficulty: 0.15 },
    { type: 'choice', prompt: '묶음 수가 같으면 무엇을 견주어 더 큰 수를 찾나요?', options: ['낱개 수', '모두 같아요', '읽는 말'], answer: 0, difficulty: 0.12, explain: '묶음 수가 같으면 남은 낱개 수를 견주어요.' },
  ]],
  ws: { title: '100까지 크기 견주기', items: [
    { type: 'table', prompt: '더 큰 수에 ○ 하세요.', columns: ['첫째 수', '둘째 수', '더 큰 수'], cells: [['64', '71', ''], ['93', '89', ''], ['77', '75', '']], answer: '71, 93, 77' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '묶음 수가 같으면 ___ 수를 견주어요.', answer: '낱개' },
    { type: 'choice', prompt: '더 작은 수에 ○ 하세요. 58과 85 중에서요.', options: ['58', '85'], answer: '58' },
    { type: 'figure', prompt: '수직선을 보고 두 점의 수를 쓰고 더 큰 수에 ○ 하세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'place', min: 50, max: 100, step: 10, sub: 10, labels: 'major', count: 2 }, state: { points: [68, 84] }, caption: '가 ___ , 나 ___ 더 큰 수는 ___' }], answer: '가 68, 나 84, 더 큰 수는 나(84)' },
    { type: 'short', prompt: '63과 58 중 더 큰 수를 어떻게 찾는지 한 문장으로 써 보세요.' },
  ], easy: { note: '묶음이 더 많은 수가 더 큰 수예요. 묶음이 같으면 낱개를 견주어요.', items: [
    { type: 'table', prompt: '더 큰 수에 ○ 하세요.', columns: ['첫째 수', '둘째 수', '더 큰 수'], cells: [['52', '67', ''], ['84', '79', '']], answer: '67, 84' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '73은 묶음이 ___ 개, 81은 묶음이 ___ 개예요.', answer: '7, 8' },
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요.', options: ['66', '69'], answer: '69' },
    { type: 'draw', prompt: '○를 61개와 58개 그리고 10개씩 묶어 견주어 보세요.' },
  ] } },
  diff: { easy: '카드에 묶음 수와 낱개 수가 늘 보이고, 수직선에는 점의 수가 보여요. 맞는 곳에 놓으면 초록 테두리가 생겨요.', base: '카드에는 수만 있어서 십의 자리를 스스로 봐요. 수직선에는 큰 눈금 숫자만 있어요.', challenge: '몇십 카드와 낱개가 큰 수가 섞이고, 수직선에는 양 끝 숫자만 있어요.' },
  notes: '자주 보이는 어려움: ① 낱개 수가 큰 쪽을 더 큰 수로 고른다(58과 63) → 묶음 하나가 10이라 묶음 수를 먼저 견준다. ② 묶음 수가 같은데 묶음 수로 견주려 한다 → 같은 묶음은 덮고 낱개를 견준다. ③ 몇십 카드(60)를 가장 작게 본다 → 60은 묶음 6개라 59보다 크다. 세 수 이상은 8차시에서 한다.',
}));
// ───────────────────────────── 8차시 (core) ─────────────────────────────
L.push(lesson(8, {
  title: '수 카드를 큰 수부터, 작은 수부터 늘어놓기',
  objective: '100까지의 세 수 이상을 견주어 큰 수부터 또는 작은 수부터 차례로 늘어놓고 가장 큰 수와 가장 작은 수를 말할 수 있다.',
  desc: 'five paper medals of different sizes hung on a rope across a sports day field, with the biggest medal in the middle',
  text: '큰 수부터 차례로',
  layers: [{ motif: 'hills', y: 206 }, { motif: 'tree', x: 80, y: 216, s: 1.0 }, { motif: 'flower', x: 410, y: 238 }, { motif: 'star', x: 250, y: 80, s: 0.7 }],
  intro: ['"운동회에서 줄넘기를 넘은 횟수가 민지 45번, 준호 82번, 하나 67번이에요. 많이 넘은 순서대로 말해 볼까요?" 가장 큰 수부터 찾아 하나씩 지워 가며 차례를 정한다. 두 수씩만 견주고 하나를 빠뜨리는 학생에게는 세 수를 모두 견주어야 한다고 짚는다.', '줄넘기를 많이 넘은 순서대로 말해 봐요. 가장 큰 수가 먼저 나와요.'],
  acts: [
    { id: 'a1', title: '활동 1. 큰 수부터, 작은 수부터 놓기', minutes: 10, tool: 'mindmap',
      task: '수 카드를 말한 차례대로 놓아요. 맨 앞이 가장 큰 수 또는 가장 작은 수예요.',
      teacher: '"큰 수부터 놓으면 맨 앞에는 어떤 수가 와야 할까요?" 문제의 "큰 수부터"와 "작은 수부터"를 손가락으로 짚게 한다. 큰 수부터 놓으라는데 작은 수부터 놓는 학생에게는 가장 큰 수부터 먼저 고르게 한다.',
      levels: ML('수 늘어놓기'),
      items: [
        { prompt: '큰 수부터 차례로 놓아 보세요.', difficulty: 0.15, toolOptions: { mode: 'order', topic: '수 늘어놓기', cards: nums(45, 82, 67) }, target: ord(82, 67, 45) },
        { prompt: '네 수를 큰 수부터 차례로 놓아 보세요.', difficulty: 0.2, toolOptions: { mode: 'order', topic: '수 늘어놓기', cards: nums(53, 91, 78, 60) }, target: ord(91, 78, 60, 53) },
        { prompt: '작은 수부터 차례로 놓아 보세요.', difficulty: 0.15, toolOptions: { mode: 'order', topic: '수 늘어놓기', cards: nums(74, 58, 96) }, target: ord(58, 74, 96) },
        { prompt: '묶음 수가 같은 수도 있어요. 작은 수부터 놓아 보세요.', difficulty: 0.25, toolOptions: { mode: 'order', topic: '수 늘어놓기', cards: nums(87, 83, 90, 85) }, target: ord(83, 85, 87, 90) },
      ] },
    { id: 'a2', title: '활동 2. 가장 큰 수·가장 작은 수 고르기', minutes: 9, tool: 'mindmap',
      task: '수 카드 중에서 가장 큰 수 또는 가장 작은 수를 골라요.',
      teacher: '"묶음이 가장 많은 수부터 찾아볼까요?" 같은 묶음끼리는 낱개를 견주게 한다. 93과 97이 함께 있을 때 묶음이 같은데 93을 고르는 학생이 있다 — 낱개 3과 7을 견주게 한다.',
      levels: ML('가장 큰 수, 가장 작은 수'),
      items: [
        pk('세 수 중 가장 큰 수를 골라 보세요.', '가장 큰 수, 가장 작은 수', [69, 84, 71], [84], 0.12, '가장 큰 수'),
        pk('네 수 중 가장 작은 수를 골라 보세요.', '가장 큰 수, 가장 작은 수', [75, 62, 98, 66], [62], 0.18, '가장 작은 수'),
        pk('묶음이 같은 수가 있어요. 가장 큰 수를 골라 보세요.', '가장 큰 수, 가장 작은 수', [93, 97, 89], [97], 0.22, '가장 큰 수'),
      ] },
    { id: 'a3', title: '활동 3. 기준 수보다 큰 수·작은 수 모두 고르기', minutes: 7, tool: 'mindmap',
      task: '기준 수보다 큰 수 또는 작은 수를 모두 골라요. 기준 수는 들어가지 않아요.',
      teacher: '"70보다 큰 수는 70이 들어갈까요?" 70은 같은 수라 들어가지 않는다고 말한다. 기준 수 70을 함께 고르는 학생에게는 "보다 큰"이 같은 수를 뺀다고 짚는다.',
      levels: ML('기준 수와 견주기'),
      items: [
        pk('70보다 큰 수를 모두 골라 보세요.', '기준 수와 견주기', [68, 73, 70, 85, 59], [73, 85], 0.2, '70보다 큰 수'),
        pk('50보다 작은 수를 모두 골라 보세요.', '기준 수와 견주기', [49, 52, 38, 50, 61], [49, 38], 0.2, '50보다 작은 수'),
        pk('90보다 큰 수를 모두 골라 보세요.', '기준 수와 견주기', [89, 95, 100, 90, 78], [95, 100], 0.25, '90보다 큰 수'),
      ] },
  ],
  wrap: ['"가장 큰 수를 찾을 때 어떻게 했나요?" 묶음 수를 먼저 견주었다는 말이 나오게 한다. 출구 2번을 틀린 학생은 다음 시간에 두 수씩 짝지어 견주는 방법을 다시 보여 준다.', [
    { type: 'choice', prompt: '56, 91, 83 중 가장 큰 수는 무엇인가요?', options: ['56', '91', '83'], answer: 1, difficulty: 0.15, explain: '묶음이 가장 많은 91이 가장 큰 수예요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'order', topic: '수 늘어놓기', cards: nums(64, 49, 77) }, prompt: '작은 수부터 차례로 놓아 보세요.', target: ord(49, 64, 77), difficulty: 0.18 },
    { type: 'choice', prompt: '큰 수부터 늘어놓았어요. 알맞은 것에 ○ 하세요.', options: ['95, 72, 48', '48, 72, 95', '72, 95, 48'], answer: 0, difficulty: 0.18, explain: '큰 수부터 놓으면 95, 72, 48이에요.' },
  ]],
  ws: { title: '큰 수부터, 작은 수부터', items: [
    { type: 'table', prompt: '가장 큰 수와 가장 작은 수를 쓰세요.', columns: ['세 수', '가장 큰 수', '가장 작은 수'], cells: [['63, 88, 54', '', ''], ['91, 79, 85', '', ''], ['96, 99, 92', '', '']], answer: '88·54, 91·79, 99·92' },
    { type: 'blank', prompt: '큰 수부터 빈칸에 쓰세요.', text: '57, 92, 74 → ___ , ___ , ___', answer: '92, 74, 57' },
    { type: 'blank', prompt: '작은 수부터 빈칸에 쓰세요.', text: '86, 61, 100 → ___ , ___ , ___', answer: '61, 86, 100' },
    { type: 'choice', prompt: '80보다 큰 수에 모두 ○ 하세요.', options: ['79', '81', '80', '99'], answer: '81, 99' },
    { type: 'figure', prompt: '수직선을 보고 가장 작은 수에 ○ 하세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'place', min: 50, max: 100, step: 10, sub: 10, labels: 'major', count: 3 }, state: { points: [72, 58, 90] }, caption: '가 ___ , 나 ___ , 다 ___ 가장 작은 수는 ___' }], answer: '가 72, 나 58, 다 90, 가장 작은 수는 나(58)' },
  ], easy: { note: '묶음이 가장 많은 수가 가장 큰 수예요. 묶음이 같으면 낱개를 견주어요.', items: [
    { type: 'table', prompt: '가장 큰 수를 쓰세요.', columns: ['세 수', '가장 큰 수'], cells: [['62, 85, 71', ''], ['94, 58, 77', '']], answer: '85, 94' },
    { type: 'blank', prompt: '작은 수부터 빈칸에 쓰세요.', text: '71, 66 → ___ , ___', answer: '66, 71' },
    { type: 'choice', prompt: '가장 작은 수에 ○ 하세요.', options: ['68', '91', '75'], answer: '68' },
    { type: 'draw', prompt: '수 83, 59, 74를 작은 수부터 써 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생겨요. 수직선에는 점의 수가 보여요.', base: '수 카드에는 수만 있어요. 놓은 뒤 확인을 눌러 순서가 맞는지 봐요.', challenge: '묶음이 같은 수가 섞이고, 기준 수가 함께 나와 "보다 큰 수"를 모두 골라야 해요.' },
  notes: '자주 보이는 어려움: ① 두 수만 견주고 나머지를 빠뜨린다 → 세 수를 모두 읽고 견준다. ② 큰 수부터와 작은 수부터를 거꾸로 놓는다 → 맨 앞에 올 수를 먼저 말하게 한다. ③ "70보다 큰 수"에 70을 넣는다 → 같은 수는 빼야 한다고 말한다. 짝수와 홀수는 9차시에서 한다.',
}));
// ───────────────────────────── 9차시 (core) ─────────────────────────────
L.push(lesson(9, {
  title: '둘씩 짝 지어 짝수와 홀수 나누기',
  objective: '물건을 둘씩 짝 지어 남는 것이 없으면 짝수, 하나가 남으면 홀수라고 나눌 수 있다.',
  desc: 'children lining up in pairs for a school trip while one child is left without a partner at the end of the line',
  text: '둘씩 짝을 지어요',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216, s: 1.0 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"소풍을 갈 때 둘씩 짝을 지어 걸어요. 친구가 6명이면 짝이 몇 쌍일까요? 7명이면요?" 6명은 짝이 3쌍으로 남는 사람이 없고, 7명은 한 명이 남는 것을 그림으로 보여 준다. 남는 것이 없으면 짝수, 하나가 남으면 홀수라고 이름을 알려 준다. 7명을 3쌍으로만 말하고 남는 한 명을 놓치는 학생에게는 남은 한 명을 손으로 짚게 한다.', '친구들이 둘씩 짝을 지어요. 짝이 다 맞을 때와 한 명이 남을 때는 어떻게 다를까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 둘씩 짝 지어 보기', minutes: 9, tool: 'multiply',
      task: '2개씩 짝을 지어요. 짝은 몇 개이고 남는 것은 몇 개인지 써요.',
      teacher: '"2개씩 짝을 지으면 몇 쌍이에요? 남는 것은 있나요?" 짝 하나하나를 손으로 묶으며 세게 한다. 남는 것이 하나 있어도 "짝이 모두 맞아요"라고 하는 학생이 있다 — 남은 하나는 짝이 없다고 말해 준다.',
      levels: GL2,
      items: [
        grp2('사탕 6개를 2개씩 짝 지어요. 짝은 몇 개인가요?', 6, 3, 0, 0.08),
        grp2('사탕 7개를 2개씩 짝 지어요. 짝은 몇 개, 남는 사탕은 몇 개인가요?', 7, 3, 1, 0.12),
        grp2('구슬 10개를 2개씩 짝 지어요. 짝은 몇 개인가요?', 10, 5, 0, 0.15),
        grp2('구슬 9개를 2개씩 짝 지어요. 짝은 몇 개, 남는 구슬은 몇 개인가요?', 9, 4, 1, 0.18),
      ] },
    { id: 'a2', title: '활동 2. 수 카드를 짝수와 홀수로 나누기', minutes: 9, tool: 'mindmap',
      task: '둘씩 짝을 지어 남는 것이 없는 수는 짝수, 하나가 남는 수는 홀수예요. 수 카드를 나누어요.',
      teacher: '"8은 둘씩 짝을 지으면 남을까요?" 칩을 놓아 보게 한 뒤 카드를 나누게 한다. 큰 수를 짝수라고 생각하는 학생이 있다 — 수의 크기가 아니라 둘씩 짝을 지었을 때 남는지로 정한다고 말해 준다.',
      levels: ML('짝수와 홀수'),
      items: [
        srt('수 카드를 짝수와 홀수로 나누어 보세요.', '짝수와 홀수', { '짝수': [2, 6, 8], '홀수': [3, 5] }, 0.1),
        srt('이번에는 10보다 큰 수예요. 짝수와 홀수로 나누어 보세요.', '짝수와 홀수', { '짝수': [12, 14, 22], '홀수': [11, 13, 21] }, 0.18),
        srt('수 카드가 더 많아요. 짝수와 홀수로 나누어 보세요.', '짝수와 홀수', { '짝수': [16, 20, 18], '홀수': [15, 17, 19] }, 0.22),
      ] },
    { id: 'a3', title: '활동 3. 규칙에 어긋난 수 찾기', minutes: 8, tool: 'pattern',
      task: '짝수만 있는 줄에 홀수가 섞여 있거나, 홀수만 있는 줄에 짝수가 섞여 있어요. 어긋난 수를 눌러요.',
      teacher: '"이 줄은 짝수만 있어야 해요. 홀수가 하나 섞여 있어요." 수를 하나씩 읽으며 둘씩 짝을 지어 보게 한다. 규칙을 모르고 가장 큰 수를 고르는 학생이 있다 — 먼저 줄에 있는 수가 짝수인지 홀수인지 묻는다.',
      levels: LVO,
      items: [
        odd('짝수만 늘어선 줄에 홀수가 하나 섞여 있어요. 찾아 눌러 보세요.', [2, 4, 6, 9, 10, 12], 3, 0.12),
        odd('홀수만 늘어선 줄에 짝수가 하나 섞여 있어요. 찾아 눌러 보세요.', [1, 3, 5, 8, 9, 11], 3, 0.15),
        odd('짝수 줄에 섞인 홀수를 찾아 눌러 보세요.', [12, 14, 15, 16, 18], 2, 0.18),
      ] },
  ],
  wrap: ['"8을 둘씩 짝을 지으면 남을까요? 그럼 8은 짝수일까요, 홀수일까요?" 칩을 놓아 보이며 말하게 한다. 출구 2번을 틀린 학생은 크기와 짝 지음을 헷갈리는지 다음 시간 처음에 다시 물어본다.', [
    { type: 'choice', prompt: '둘씩 짝을 지었더니 하나가 남았어요. 이 수는 무엇인가요?', options: ['짝수', '홀수'], answer: 1, difficulty: 0.12, explain: '둘씩 짝을 지어 하나가 남으면 홀수예요.' },
    { type: 'choice', prompt: '짝수에 ○ 하세요.', options: ['5', '12', '9'], answer: 1, difficulty: 0.15, explain: '12는 둘씩 짝을 지으면 6쌍이고 남는 것이 없어요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '짝수와 홀수', slots: ['짝수', '홀수'], cards: [num(4), num(7), num(10), num(13)] }, prompt: '수 카드를 짝수와 홀수로 나누어 보세요.', target: { sort: { '짝수': ['4', '10'], '홀수': ['7', '13'] } }, difficulty: 0.18 },
  ]],
  ws: { title: '짝수와 홀수', items: [
    { type: 'table', prompt: '2개씩 짝을 지을 때 짝 수와 남는 것을 쓰세요.', columns: ['수', '짝', '남는 것'], cells: [['8', '4', ''], ['9', '', '1'], ['12', '', '']], answer: '0, 4, 6·0' },
    { type: 'blank', prompt: '짝수는 ○, 홀수는 △를 쓰세요.', text: '4 → ___ , 7 → ___ , 10 → ___', answer: '○, △, ○' },
    { type: 'choice', prompt: '홀수에 ○ 하세요.', options: ['6', '11', '14'], answer: '11' },
    { type: 'choice', prompt: '둘씩 짝을 지으면 남는 것이 없는 수에 ○ 하세요.', options: ['5', '8', '13'], answer: '8' },
    { type: 'draw', prompt: '○를 7개 그리고 둘씩 짝을 지어 묶어 보세요. 남는 것에 △ 해 보세요.' },
  ], easy: { note: '둘씩 짝을 지어 남는 것이 없으면 짝수, 하나가 남으면 홀수예요.', items: [
    { type: 'table', prompt: '2개씩 짝을 지을 때 짝 수를 쓰세요.', columns: ['수', '짝', '남는 것'], cells: [['6', '3', ''], ['7', '', '1']], answer: '0, 3' },
    { type: 'blank', prompt: '짝수는 ○, 홀수는 △를 쓰세요.', text: '2 → ___ , 5 → ___', answer: '○, △' },
    { type: 'choice', prompt: '짝수에 ○ 하세요.', options: ['3', '4'], answer: '4' },
    { type: 'draw', prompt: '○를 6개 그리고 둘씩 묶어 보세요.' },
  ] } },
  diff: { easy: '묶는 수가 4까지만 있고, 짝 수와 남는 수가 맞힌 뒤에 보여요. 카드를 맞는 곳에 놓으면 초록 테두리가 생겨요.', base: '짝 수와 남는 수를 스스로 세어 써요. 어긋난 수 찾기에서는 줄의 규칙을 먼저 정해요.', challenge: '묶는 수를 스스로 골라야 하고, 15부터 20까지의 수도 나누어요.' },
  notes: '자주 보이는 어려움: ① 큰 수는 짝수라고 생각한다 → 크기가 아니라 둘씩 짝을 지었을 때 남는지로 정한다. ② 남은 하나를 짝에 넣는다 → 남은 하나는 짝이 없다. ③ 짝수와 홀수 이름을 헷갈린다 → 칩을 둘씩 놓아 보며 이름을 반복한다. 큰 수의 짝수·홀수는 10차시에서 한다.',
}));
// ───────────────────────────── 10차시 (practice) ─────────────────────────────
L.push(lesson(10, {
  title: '낱개의 수로 짝수와 홀수 가려내기',
  objective: '100까지의 수에서 낱개의 수가 0, 2, 4, 6, 8이면 짝수, 1, 3, 5, 7, 9이면 홀수임을 알고 가려낼 수 있다.',
  desc: 'a row of paper doors numbered in the nineties and eighties where children paint even numbers green and odd numbers orange',
  text: '짝수는 초록, 홀수는 주황',
  layers: [{ motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'house', x: 390, y: 214, s: 0.9 }, { motif: 'star', x: 250, y: 80, s: 0.7 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"큰 수도 둘씩 짝을 지어 볼 수 있을까요? 36을 둘씩 짝 지으면 남을까요?" 10개씩 묶음은 둘씩 나누어 떨어지니 낱개만 보면 된다고 알려 준다. "낱개가 6이면 둘씩 짝이 되니 짝수, 낱개가 7이면 하나가 남으니 홀수예요"라고 말해 준다. 십의 자리 수로 짝수를 정하려는 학생에게는 낱개의 수를 짚어 준다.', '큰 수도 낱개의 수만 보면 짝수인지 홀수인지 알 수 있을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 100까지 수 카드를 짝수와 홀수로 나누기', minutes: 9, tool: 'mindmap',
      task: '낱개의 수를 보고 수 카드를 짝수와 홀수로 나누어요.',
      teacher: '"37은 낱개가 몇이에요? 7은 짝수일까요, 홀수일까요?" 낱개의 수에 밑줄을 긋게 한다. 24를 십의 자리 2만 보고 판단하는 학생이 있다 — 24의 낱개 4를 보게 한다.',
      levels: ML('짝수와 홀수'),
      items: [
        srt('낱개의 수를 보고 짝수와 홀수로 나누어 보세요.', '짝수와 홀수', { '짝수': [24, 50, 86], '홀수': [37, 61, 95] }, 0.15),
        srt('이번에는 100도 있어요. 짝수와 홀수로 나누어 보세요.', '짝수와 홀수', { '짝수': [42, 78, 100], '홀수': [53, 89, 67] }, 0.2),
        srt('수 카드를 모두 나누어 보세요.', '짝수와 홀수', { '짝수': [30, 64, 92], '홀수': [41, 77, 99] }, 0.22),
      ] },
    { id: 'a2', title: '활동 2. 짝수만, 홀수만 모두 고르기', minutes: 9, tool: 'mindmap',
      task: '말한 수를 모두 골라요. 낱개의 수를 보고 판단해요.',
      teacher: '"낱개가 0, 2, 4, 6, 8이면 짝수예요." 낱개를 읽으며 하나씩 고르게 한다. 낱개가 0인 60을 홀수라고 말하는 학생이 있다 — 60은 10개씩 묶음만 있어 둘씩 짝이 모두 맞는다고 말해 준다.',
      levels: ML('고르기'),
      items: [
        pk('짝수를 모두 골라 보세요.', '고르기', [31, 44, 58, 67, 72], [44, 58, 72], 0.15, '짝수'),
        pk('홀수를 모두 골라 보세요.', '고르기', [26, 35, 49, 60, 83], [35, 49, 83], 0.18, '홀수'),
        pk('이번에도 짝수를 모두 골라 보세요.', '고르기', [51, 66, 73, 80, 98], [66, 80, 98], 0.22, '짝수'),
      ] },
    { id: 'a3', title: '활동 3. 하나 건너 늘어선 수 채우기', minutes: 8, tool: 'pattern',
      task: '짝수끼리, 홀수끼리 2씩 커져요. 빈칸에 알맞은 수를 써요.',
      teacher: '"31, 33, 다음은 무엇일까요? 하나 건너뛰어요." 2씩 커지는 것을 손으로 건너뛰며 보게 한다. 홀수 줄에서 1씩 커져 34를 쓰는 학생에게는 앞의 두 수 차이가 2임을 짚어 준다.',
      levels: LVP,
      items: [
        pt('홀수가 2씩 커져요. 빈칸을 채워 보세요.', [31, 33, null, 37, null], [35, 39], 0.15),
        pt('짝수가 2씩 커져요. 빈칸을 채워 보세요.', [62, 64, null, 68, null], [66, 70], 0.15),
        pt('홀수가 2씩 커져요. 빈칸이 둘이에요.', [81, 83, 85, null, 89, null], [87, 91], 0.2),
        pt('짝수가 2씩 커져요. 빈칸을 채워 보세요.', [90, 92, null, 96], [94], 0.15),
      ] },
  ],
  wrap: ['"37은 짝수일까요, 홀수일까요? 낱개의 수 7을 보면 알 수 있어요." 낱개의 수를 보고 말하게 한다. 출구 2번을 틀린 학생은 십의 자리로 판단하는지 다음 시간 처음에 다시 물어본다.', [
    { type: 'choice', prompt: '낱개의 수가 6인 수는 짝수일까요, 홀수일까요?', options: ['짝수', '홀수'], answer: 0, difficulty: 0.12, explain: '낱개의 수가 6이면 둘씩 짝이 모두 맞아서 짝수예요.' },
    { type: 'choice', prompt: '홀수에 ○ 하세요.', options: ['48', '75', '90'], answer: 1, difficulty: 0.15, explain: '75는 낱개가 5라서 하나가 남아요. 홀수예요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '고르기', basket: '짝수', cards: [num(23), num(46), num(51), num(78)] }, prompt: '짝수를 모두 골라 보세요.', target: { pick: ['46', '78'] }, difficulty: 0.18 },
  ]],
  ws: { title: '짝수와 홀수 가려내기', items: [
    { type: 'table', prompt: '짝수에는 ○, 홀수에는 △를 쓰세요.', columns: ['수', '낱개의 수', '짝수 · 홀수'], cells: [['28', '8', ''], ['53', '3', ''], ['70', '0', '']], answer: '○, △, ○' },
    { type: 'blank', prompt: '낱개의 수가 어떤 수이면 짝수인지 쓰세요.', text: '짝수는 낱개의 수가 0, ___ , ___ , ___ , ___ 인 수예요.', answer: '2, 4, 6, 8' },
    { type: 'choice', prompt: '짝수에 모두 ○ 하세요.', options: ['34', '57', '80', '91'], answer: '34, 80' },
    { type: 'blank', prompt: '2씩 커지는 수를 빈칸에 쓰세요.', text: '71 - 73 - ___ - 77 - ___', answer: '75, 79' },
    { type: 'short', prompt: '우리 반 번호 중 짝수 번호와 홀수 번호를 한 개씩 쓰고, 어떻게 알았는지 써 보세요.' },
  ], easy: { note: '낱개의 수만 보면 돼요. 0, 2, 4, 6, 8은 짝수, 1, 3, 5, 7, 9는 홀수예요.', items: [
    { type: 'table', prompt: '짝수에는 ○, 홀수에는 △를 쓰세요.', columns: ['수', '낱개의 수', '짝수 · 홀수'], cells: [['26', '6', ''], ['41', '1', '']], answer: '○, △' },
    { type: 'blank', prompt: '2씩 커지는 수를 빈칸에 쓰세요.', text: '61 - 63 - ___', answer: '65' },
    { type: 'choice', prompt: '짝수에 ○ 하세요.', options: ['52', '53'], answer: '52' },
    { type: 'draw', prompt: '내가 좋아하는 두 자리 수를 쓰고 짝수인지 홀수인지 써 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생겨요. 틀리면 까닭을 말하고 카드가 돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러요. 고르는 문제는 낱개의 수를 보고 스스로 골라요.', challenge: '100과 낱개가 0인 수가 섞여 있고, 빈칸이 둘인 수 배열도 나와요.' },
  notes: '자주 보이는 어려움: ① 십의 자리 수로 짝수를 정한다(24를 2로 보고) → 낱개의 수를 본다. ② 낱개가 0인 수를 홀수로 생각한다 → 10개씩 묶음은 둘씩 짝이 맞아 짝수다. ③ 홀수 줄에서 1씩 커져 짝수를 섞는다 → 앞의 두 수 차이가 2임을 말하게 한다. 가르기와 모으기는 11차시에서 한다.',
}));
// ───────────────────────────── 11차시 (core) ─────────────────────────────
L.push(lesson(11, {
  title: '몇십 몇을 가르고 모으기',
  objective: '100까지의 수를 몇십과 몇으로 가르고, 여러 가지 두 수로 갈라 다시 모으면 같은 수가 됨을 확인할 수 있다.',
  desc: 'a boy splitting seventy-three crayons into a box of seventy and three loose ones, and then putting them back together',
  text: '73은 70과 3',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"크레파스가 73자루 있어요. 70자루는 상자에, 나머지는 필통에 넣었어요. 필통에는 몇 자루일까요?" 73을 70과 3으로 가르는 모습을 칠판에 그린다. "70과 3을 다시 모으면 73이에요"라고 말해 준다. 3을 30으로 쓰는 학생에게는 낱개 3자루는 3이라고 짚는다.', '크레파스 73자루를 두 곳에 나누어 담아요. 한 곳이 70자루이면 다른 곳은 몇 자루일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 몇십과 몇으로 가르기', minutes: 10, tool: 'story',
      task: '수를 몇십과 몇으로 갈라요. 말풍선의 빈칸에 알맞은 수를 넣어요.',
      teacher: '"73은 70과 몇으로 가를 수 있을까요?" 몇십 뒤에 이어 세어 보게 한다. 58을 50과 58로 가르는 학생이 있다 — 50과 58을 모으면 108이 된다는 것을 보여 준다.',
      levels: LVF,
      items: [
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '73은 70과 ___이야.', 3], ['준호', 'tree', '58은 ___과 8이야.', 50]], [5, 80], 0.15),
        fl('이번에는 90에 가까운 수예요. 빈칸을 채워 보세요.', [['민지', 'flower', '86은 80과 ___이야.', 6], ['준호', 'leaf', '94는 ___과 4로 가를 수 있어.', 90]], [4, 60], 0.2),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '65는 60과 ___이야.', 5], ['준호', 'cloud', '72는 ___과 2로 가를 수 있어.', 70]], [6, 20], 0.18),
        fl('100을 두 수로 가르는 방법이에요. 빈칸을 채워 보세요.', [['민지', 'sun', '100은 60과 ___이야.', 40], ['준호', 'tree', '100은 ___과 30이야.', 70]], [50, 10], 0.25),
      ] },
    { id: 'a2', title: '활동 2. 두 수를 모아 하나의 수로', minutes: 8, tool: 'mindmap',
      task: '"60과 5"를 모으면 65예요. 두 수를 모은 수 카드를 놓아요.',
      teacher: '"60과 5를 모으면 몇일까요?" 60 뒤에 낱개 5를 이어 세게 한다. 60과 5를 합해 11이라고 하는 학생이 있다 — 60은 묶음 6개이니 60 뒤에 이어 센다고 말해 준다.',
      levels: ML('모아서 하나의 수'),
      items: [
        mt('두 수를 모아 하나의 수로 만들어 보세요.', '모아서 하나의 수', [['60과 5', 65], ['70과 8', 78], ['90과 9', 99]], [65, 78, 99, 56], 0.15),
        mt('이번에는 네 칸이에요. 모아서 이어 보세요.', '모아서 하나의 수', [['50과 3', 53], ['80과 6', 86], ['40과 9', 49], ['70과 1', 71]], [53, 86, 49, 71, 35], 0.2),
        mt('낱개가 아닌 두 수를 모아서 이어 보세요.', '모아서 하나의 수', [['35와 40', 75], ['50과 30', 80], ['45와 45', 90]], [75, 80, 90, 57], 0.25),
      ] },
    { id: 'a3', title: '활동 3. 합이 같은 짝끼리 나누기', minutes: 8, tool: 'mindmap',
      task: '두 수를 모았을 때 같은 수가 되는 카드끼리 한 칸에 모아요.',
      teacher: '"70과 8을 모으면 몇일까요? 60과 18은요?" 두 수를 이어 세어 확인한 뒤 같은 수가 되는 카드를 한 칸에 모으게 한다. 60과 18을 18로만 읽는 학생에게는 60 뒤에 18을 이어 센다고 말해 준다.',
      levels: ML('합이 같은 짝'),
      items: [
        srt('두 수를 모았을 때 같은 수가 되는 것끼리 나누어 보세요.', '합이 같은 짝', { '78': ['70과 8', '60과 18', '77과 1'], '85': ['80과 5', '50과 35', '84와 1'] }, 0.22),
        srt('이번에는 63과 91이에요. 같은 수끼리 나누어 보세요.', '합이 같은 짝', { '63': ['60과 3', '50과 13', '62와 1'], '91': ['90과 1', '80과 11', '89와 2'] }, 0.25),
        srt('100이 되는 짝과 56이 되는 짝으로 나누어 보세요.', '합이 같은 짝', { '56': ['50과 6', '40과 16', '55와 1'], '100': ['90과 10', '50과 50', '99와 1'] }, 0.28),
      ] },
  ],
  wrap: ['"86은 80과 몇으로 가를 수 있었나요? 다시 모으면 몇일까요?" 갈랐다가 모으는 말을 이어서 하게 한다. 출구 1번을 틀린 학생은 낱개 수와 몇십 수를 바꾸는지 다음 시간 처음에 다시 물어본다.', [
    { type: 'choice', prompt: '94는 90과 몇으로 가를 수 있나요?', options: ['4', '40', '94'], answer: 0, difficulty: 0.15, explain: '94는 90과 낱개 4로 가를 수 있어요.' },
    { type: 'choice', prompt: '70과 6을 모으면 몇이 되나요?', options: ['13', '76', '706'], answer: 1, difficulty: 0.15, explain: '70 뒤에 낱개 6을 이어 세면 76이에요.' },
    { type: 'tool', tool: 'story', options: { mode: 'fill', cards: [{ id: '8', text: '8' }, { id: '80', text: '80' }, { id: '18', text: '18' }], slots: [{ id: 'b1', who: '민지', motif: 'sun', label: '88은 ___과 8이야.' }] }, prompt: '빈칸에 알맞은 수를 넣어 보세요.', target: { fill: { b1: '80' } }, difficulty: 0.2 },
  ]],
  ws: { title: '가르기와 모으기', items: [
    { type: 'table', prompt: '수를 가르고 빈칸을 채우세요.', columns: ['수', '몇십', '낱개의 수'], cells: [['76', '70', ''], ['83', '', '3'], ['95', '90', '']], answer: '6, 80, 5' },
    { type: 'blank', prompt: '두 수를 모아 쓰세요.', text: '60과 4 → ___ , 80과 7 → ___', answer: '64, 87' },
    { type: 'choice', prompt: '두 수를 모으면 72가 되는 짝에 ○ 하세요.', options: ['70과 2', '60과 2', '70과 20'], answer: '70과 2' },
    { type: 'choice', prompt: '100을 바르게 가른 것에 ○ 하세요.', options: ['60과 40', '50과 40', '70과 20'], answer: '60과 40' },
    { type: 'short', prompt: '90을 두 수로 가르는 방법을 두 가지 써 보세요.' },
  ], easy: { note: '두 수를 이어 세어 모아 보아요. 가르는 방법은 하나가 아니에요.', items: [
    { type: 'table', prompt: '수를 가르고 빈칸을 채우세요.', columns: ['수', '몇십', '낱개의 수'], cells: [['74', '70', ''], ['62', '', '2']], answer: '4, 60' },
    { type: 'blank', prompt: '두 수를 모아 쓰세요.', text: '70과 5 → ___', answer: '75' },
    { type: 'choice', prompt: '두 수를 모으면 85가 되는 짝에 ○ 하세요.', options: ['80과 5', '80과 3'], answer: '80과 5' },
    { type: 'draw', prompt: '○ 12개를 두 묶음으로 나누어 그리고 수로 써 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말하고 돌아와요.', base: '말풍선 빈칸은 스스로 계산해서 골라요. 카드는 모두 놓은 뒤 확인해요.', challenge: '함정 카드가 한 장 더 있고, 100이나 낱개가 아닌 두 수를 모으는 문제도 나와요.' },
  notes: '자주 보이는 어려움: ① 가른 낱개 수를 몇십으로 쓴다(3을 30으로) → 낱개 3은 그대로 3이다. ② 70과 6을 7+6=13으로 센다 → 70 뒤에 이어 세면 76이다. ③ 합이 같은 짝을 하나만 찾고 멈춘다 → 짝이 여럿이라고 말하고 하나씩 이어 세어 확인한다. 단원 정리는 12차시에서 한다.',
}));
// ───────────────────────────── 12차시 (wrap) ─────────────────────────────
L.push(lesson(12, {
  title: '100까지의 수를 세고, 견주고, 나누며 정리하기',
  objective: '100까지의 수를 묶음과 낱개로 세어 쓰고, 두 수를 견주고, 짝수와 홀수로 나누고, 몇십 몇을 가르는 것을 스스로 점검할 수 있다.',
  desc: 'a bright classroom wall with a giant paper hundred chart where children place stickers on their favorite numbers',
  text: '100까지의 수',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216, s: 1.1 }, { motif: 'star', x: 150, y: 84, s: 0.6 }, { motif: 'star', x: 330, y: 80, s: 0.6 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"이번 단원에서 100까지 세어 보고, 수를 견주고, 짝수와 홀수로 나누어 보았어요. 오늘은 배운 것을 모아 볼까요?" 칠판에 세기, 견주기, 짝수와 홀수, 가르기 네 가지를 쓰고 하나씩 되새긴다. 이전 시간에 어려워했던 부분을 학생이 직접 고르게 한다.', '100까지의 수를 세고, 견주고, 나누며 배운 것을 모아 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 수 배열의 빈칸 채우기', minutes: 8, tool: 'pattern',
      task: '수가 일정하게 커져요. 얼마씩 커지는지 보고 빈칸을 채워요.',
      teacher: '"앞의 두 수가 얼마나 차이 나는지 먼저 봐요." 1씩, 2씩, 5씩 커지는 수 배열을 구분하게 한다. 5씩 커지는 수 배열에서 1씩 커지는 수를 쓰는 학생에게는 앞의 두 수 차이를 말하게 한다.',
      levels: LVP,
      items: [
        pt('1씩 커지는 수예요. 빈칸을 채워 보세요.', [56, 57, null, 59, 60, null], [58, 61], 0.12),
        pt('1씩 커지는 수예요. 빈칸이 둘이에요.', [93, 94, null, 96, null, 98], [95, 97], 0.15),
        pt('5씩 커지는 수예요. 빈칸을 채워 보세요.', [15, 20, null, 30, null], [25, 35], 0.2),
      ] },
    { id: 'a2', title: '활동 2. 크기와 짝수를 알맞게 고르기', minutes: 9, tool: 'mindmap',
      task: '수 카드에서 조건에 맞는 수를 골라요. 묶음 수를 먼저 견주고 낱개의 수도 살펴요.',
      teacher: '"가장 큰 수는 묶음이 가장 많은 수예요." 같은 묶음끼리는 낱개를 견주게 한다. 짝수를 고르라는데 낱개가 0인 80을 빼는 학생이 있다 — 낱개가 0이면 짝수라고 알려 준다.',
      levels: ML('크기와 짝수'),
      items: [
        pk('세 수 중 가장 큰 수를 골라 보세요.', '크기와 짝수', [74, 89, 81], [89], 0.12, '가장 큰 수'),
        pk('세 수 중 가장 작은 수를 골라 보세요.', '크기와 짝수', [67, 52, 90], [52], 0.12, '가장 작은 수'),
        pk('짝수를 모두 골라 보세요.', '크기와 짝수', [45, 62, 77, 80, 93], [62, 80], 0.2, '짝수'),
      ] },
    { id: 'a3', title: '활동 3. 수를 가르고 빈칸 채우기', minutes: 9, tool: 'story',
      task: '수를 두 수로 갈라요. 말풍선의 빈칸에 알맞은 수를 넣어요.',
      teacher: '"83은 80과 몇으로 가를 수 있을까요? 다시 모으면 83이 될까요?" 갈랐다가 모아 확인하게 한다. 67을 60과 67로 가르는 학생이 있다 — 60과 67을 모으면 127이라는 것을 보여 준다.',
      levels: LVF,
      items: [
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '83은 80과 ___이야.', 3], ['준호', 'tree', '67은 ___과 7이야.', 60]], [30, 8], 0.18),
        fl('이번에는 100에 가까운 수예요. 빈칸을 채워 보세요.', [['민지', 'flower', '91은 90과 ___이야.', 1], ['준호', 'leaf', '100은 ___과 50이야.', 50]], [10, 5], 0.22),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '76은 70과 ___이야.', 6], ['준호', 'cloud', '88은 ___과 8이야.', 80]], [18, 60], 0.2),
      ] },
  ],
  wrap: ['"100까지의 수를 세고 견주고 나누면서 가장 재미있었던 것은 무엇이었나요?" 한 가지를 골라 말하게 하고, 어려웠던 것도 하나 말하게 한다. 출구 질문에서 틀린 문항을 짚어 다음 단원 전에 다시 물어본다.', [
    { type: 'choice', prompt: '10개씩 묶음 7개와 낱개 6개는 모두 몇 개인가요?', options: ['13개', '67개', '76개'], answer: 2, difficulty: 0.15, explain: '묶음 7개는 70이고 낱개 6개를 더해 76이에요.' },
    { type: 'choice', prompt: '둘씩 짝을 지으면 남는 것이 없는 수에 ○ 하세요.', options: ['37', '48', '55'], answer: 1, difficulty: 0.15, explain: '48은 낱개가 8이라서 둘씩 짝을 지으면 남는 것이 없어요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'place', min: 50, max: 100, step: 10, sub: 10, count: 1, labels: 'major' }, prompt: '가 점을 83이 있는 자리에 놓아 보세요.', target: { points: [83] }, difficulty: 0.2 },
  ]],
  ws: { title: '100까지의 수 정리', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['7', '4', ''], ['9', '0', ''], ['6', '8', '']], answer: '74, 90, 68' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '97 - ___ - 99 - ___', answer: '98, 100' },
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요. 78과 87 중에서요.', options: ['78', '87'], answer: '87' },
    { type: 'table', prompt: '짝수에는 ○, 홀수에는 △를 쓰세요.', columns: ['수', '짝수 · 홀수'], cells: [['36', ''], ['59', ''], ['80', '']], answer: '○, △, ○' },
    { type: 'short', prompt: '이번 단원에서 가장 어려웠던 것과 쉬웠던 것을 한 가지씩 써 보세요.' },
  ], easy: { note: '묶음은 10이 몇 번인지 세고, 낱개를 이어서 써요.', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['7', '3', ''], ['8', '0', '']], answer: '73, 80' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '88 - ___ - 90', answer: '89' },
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요.', options: ['64', '71'], answer: '71' },
    { type: 'draw', prompt: '내가 좋아하는 두 자리 수를 쓰고 짝수인지 홀수인지 써 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생기고, 말풍선 빈칸은 틀리면 까닭을 말해 줘요.', base: '수 배열과 카드 고르기를 스스로 해요. 확인을 누른 뒤에 맞는지 봐요.', challenge: '5씩 커지는 수 배열과 100을 가르는 문제가 나와요. 함정 카드가 더 있어요.' },
  notes: '자주 보이는 어려움: ① 묶음과 낱개 수를 합해 센다(묶음 7개, 낱개 6개를 13으로) → 묶음 7개는 70이다. ② 낱개가 0인 수의 짝수·홀수를 헷갈린다 → 낱개가 0이면 짝수다. ③ 크기 견주기에서 낱개만 본다 → 묶음 수를 먼저 견준다. 다음 단원에서는 덧셈과 뺄셈으로 100까지의 수를 쓴다.',
}));

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 1, subject: '수학', unitTitle: UT,
  flow: '1학기에 배운 50까지의 수에서 이어, 첫 시간에 10개씩 묶음 10개가 100임을 알고 60부터 100까지 몇십을 읽습니다. 2~3차시에서 묶음과 낱개로 51부터 99까지 세어 쓰고 읽으며, 4차시에서 99 다음 수가 100임과 바로 앞·뒤의 수, 사이의 수를 찾습니다. 5~6차시는 2씩, 5씩, 10씩 뛰어 세고 수 배열표에서 가로는 1씩, 세로는 10씩 커지는 규칙을 찾습니다. 7~8차시에서 묶음 수를 먼저, 같으면 낱개 수를 견주어 큰 수와 작은 수를 말하고 큰 수부터 늘어놓습니다. 9~10차시에서 둘씩 짝을 지어 짝수와 홀수를 나누고 낱개의 수로 가려내며, 11~12차시에서 몇십 몇을 가르고 모으고 단원을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
