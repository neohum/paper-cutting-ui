/* 1학년 1학기 5. 50까지의 수 — 단원 파일(차시 12개, 기존 차시 없음).
 * 확인 필요: 없음(units-index 성취기준 [2수01-01] [2수01-03] [2수01-04] 그대로).
 * 흐름: 열 개를 묶어 10(1) → 10과 낱개 11~15(2) → 16~19와 읽는 말(3) → 20~50을 묶음과 낱개로 세고 쓰기(4)
 *      → 묶음 수로 두 수 견주기(5) → 낱개 수로 견주기(6) → 수 순서와 앞뒤·사이 수(7) → 가장 큰 수·작은 수(8)
 *      → 몇십 몇을 묶음과 낱개로 가르기(9) → 두 수로 가르고 모으기(10) → 20~50 가르기 모으기 활용(11) → 단원 정리(12).
 */
(function () {
const UID = 'g1-math-1-05', CU = 'g1-수학-1학기-5', UT = '5. 50까지의 수', STD = ['[2수01-01]', '[2수01-03]', '[2수01-04]'];
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
const L = [];
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '낱개 열 개를 한 묶음으로 묶어 보기',
  objective: '낱개 열 개를 한 묶음으로 묶어 10이라고 말하고, 10개씩 묶음이 몇 개인지 셀 수 있다.',
  desc: 'a friendly squirrel tying ten acorns into one neat bundle with a ribbon, beside a wooden basket',
  text: '열 개는 한 묶음',
  layers: [{ motif: 'tree', x: 100, y: 214, s: 1.2 }, { motif: 'apple', x: 86, y: 182, s: 0.42 }, { motif: 'apple', x: 118, y: 172, s: 0.42 }, { motif: 'flower', x: 340, y: 236 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"9까지 세었어요. 사과가 9개 있는데 하나를 더 놓으면 몇 개가 될까요?" 시연 단추로 사과가 9개에서 10개로 늘어나 칸이 가득 차는 모습을 보여 준다. "열 개가 되면 한 묶음이라고 해요"라고 말해 준다. 10을 1과 0 두 글자로 쓰는 것을 낯설어하는 학생은 칸이 가득 찬 모습과 함께 보게 한다.', '사과 9개에 하나를 더 놓으면 몇 개가 될까요? 칸을 가득 채워 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 9 }, { count: 10 }] },
  acts: [
    { id: 'a1', title: '활동 1. 사과로 칸을 가득 채우기', minutes: 9, tool: 'tenframe',
      task: '사과를 칸에 놓아 열 개를 만들어요. 칸이 가득 차면 열 개예요.',
      teacher: '"사과가 몇 개 있어요? 하나 더 놓으면 몇 개가 될까요?" 칸 번호를 짚으며 하나씩 센다. 열 번째 사과를 놓고 "하나, 둘, … 열" 하고 끝까지 세게 한다. 열 개를 다 센 뒤에도 "열하나"로 이어 가려는 학생이 있다면 칸이 더는 없다는 것을 짚어 준다.',
      levels: PUT,
      items: [
        { prompt: '사과가 9개 놓여 있어요. 하나 더 놓아 칸을 가득 채워 보세요.', state: { count: 9 }, target: { count: 10 }, difficulty: 0.05 },
        put('사과 열 개를 놓아 보세요.', 10, 0.1),
        { prompt: '칸이 가득 찼어요. 사과는 모두 몇 개인가요?', state: { count: 10 }, toolOptions: { askNumber: true, showCount: false, showGoal: false, showWord: false }, target: { count: 10 }, difficulty: 0.1 },
        { prompt: '칸 한 줄에 5개씩 두 줄을 놓아요. 모두 몇 개가 되나요? 사과를 놓아 보세요.', target: { count: 10 }, difficulty: 0.12 },
      ] },
    { id: 'a2', title: '활동 2. 10개씩 묶어 묶음 세기', minutes: 11, tool: 'multiply',
      task: '구슬을 10개씩 묶어요. 묶음이 몇 개인지 세어서 써요.',
      teacher: '"구슬을 몇 개씩 묶으면 좋을까요?" 열 개씩 묶는 약속을 먼저 정한다. 20을 "2개"라고만 읽고 낱개가 20개인 것은 놓치는 학생이 있다 — 묶음 하나가 10개라는 것을 묶음마다 손가락으로 짚으며 말하게 한다.',
      levels: GL,
      items: [
        grp('구슬 10개가 있어요. 10개씩 묶으면 묶음은 몇 개인가요?', 10, 1, 0, 0.05),
        grp('구슬 20개를 10개씩 묶어요. 묶음은 몇 개인가요?', 20, 2, 0, 0.1),
        grp('구슬 30개를 10개씩 묶어요. 묶음은 몇 개인가요?', 30, 3, 0, 0.15),
      ] },
    pair('a3', '활동 3. 짝과 열 개 만들어 보이기', 6, '짝이 열 개를 만들었는지 같이 세어요. 열 개는 몇 줄인지도 말해 봐요.',
      '짝끼리 번갈아 사과 열 개를 놓게 한다. "열 개는 한 묶음이에요. 한 줄에 몇 개씩 두 줄일까요?" 하고 묻고, 둘이 소리 내어 끝까지 세어 맞는지 확인하게 한다.',
      ['사과 열 개를 놓고 "다 했어요"를 누르세요.', '짝이 놓은 사과를 같이 세어 열 개인지 확인하고 "다 했어요"를 누르세요.', '이번에는 역할을 바꾸어 열 개를 놓고 "다 했어요"를 누르세요.'], 'tenframe', PUT),
  ],
  wrap: ['"열 개를 한 묶음이라고 했어요. 구슬이 20개면 묶음은 몇 개일까요?" 손가락으로 묶음을 세며 말하게 한다. 출구 2번을 틀린 학생은 묶음 수와 낱개 수를 섞고 있는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '사과가 9개 있어요. 하나를 더 놓으면 모두 몇 개인가요?', options: ['8개', '10개', '11개'], answer: 1, difficulty: 0.08, explain: '9 다음 수는 10이에요. 칸이 가득 차서 열 개가 돼요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false }, prompt: '칩 열 개를 놓아 칸을 가득 채워 보세요.', target: { count: 10 }, difficulty: 0.1 },
    { type: 'choice', prompt: '구슬 40개를 10개씩 묶으면 묶음은 몇 개인가요?', options: ['4개', '10개', '40개'], answer: 0, difficulty: 0.15, explain: '10개씩 묶은 묶음이 4개예요.' },
  ]],
  ws: { title: '열 개 묶기', items: [
    { type: 'figure', prompt: '사과는 몇 개인가요? 세어서 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 10 }, caption: BLANK }, { state: { count: 8 }, caption: BLANK }, { state: { count: 9 }, caption: BLANK }], answer: '10, 8, 9' },
    { type: 'figure', prompt: '칸이 가득 차도록 ○를 더 그리세요. 모두 몇 개가 되나요?', tool: 'tenframe', figures: [{ state: { count: 7 }, caption: BLANK }, { state: { count: 9 }, caption: BLANK }], answer: '○를 3개, 1개 더 그려요. 모두 10개예요.' },
    { type: 'choice', prompt: '열 개를 한 묶음으로 묶은 것에 ○ 하세요.', options: ['사과 9개', '사과 10개', '사과 11개'], answer: '사과 10개' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10개씩 묶음이 2개이면 모두 ___ 개예요.', answer: '20' },
    { type: 'draw', prompt: '연필 10자루를 한 묶음으로 묶어서 그려 보세요.' },
  ], easy: { note: '칸이 가득 차면 열 개예요. 하나씩 짚으며 세어요.', items: [
    { type: 'figure', prompt: '사과는 몇 개인가요? 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 10 }, caption: BLANK }, { state: { count: 6 }, caption: BLANK }], answer: '10, 6' },
    { type: 'figure', prompt: '칸이 가득 차도록 ○를 더 그리세요.', tool: 'tenframe', figures: [{ state: { count: 8 }, caption: BLANK }], answer: '○를 2개 더 그려요.' },
    { type: 'choice', prompt: '열 개인 것에 ○ 하세요.', options: ['10개', '5개'], answer: '10개' },
    { type: 'draw', prompt: '구슬 열 개를 그려 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 "열 · 10" 같은 목표가 나와요. 묶음 판에서는 묶는 수가 10까지만 있고 묶음이 몇 개인지 맞힌 뒤에 보여요.', base: '칸 번호와 목표 없이 스스로 세어요. 구슬을 10개씩 묶어 묶음 수를 직접 써요.', challenge: '사과가 칸 여기저기에 들어가 줄로 세기 어려워요. 묶는 수도 10이 아닌 수까지 골라 볼 수 있어요.' },
  notes: '자주 보이는 어려움: ① 열 개가 되었는데 한 개를 더 놓으려 한다 → 칸이 가득 차면 열 개, 한 묶음이라고 말해 준다. ② 20을 2개로만 읽는다 → 묶음 하나가 10개임을 손으로 짚는다. ③ 10을 "일영"이라고 읽는다 → 십 또는 열이라고 읽는 것은 3차시에서 이어서 한다. 11 이상은 2차시부터 낱개와 함께 센다.',
}));
// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '10개 묶음과 낱개로 11부터 15까지 세기',
  objective: '10개씩 묶음 1개와 낱개를 합쳐 11부터 15까지의 수를 세고 쓸 수 있다.',
  desc: 'a squirrel holding one full basket of ten acorns while a few loose acorns lie on the grass beside it',
  text: '묶음 1개와 낱개',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.1 }, { motif: 'tree', x: 390, y: 216, s: 1.0, color: 'mint' }, { motif: 'flower', x: 230, y: 236, color: 'lavender' }, { motif: 'star', x: 300, y: 84, s: 0.6 }],
  intro: ['"어제는 구슬 열 개를 한 묶음으로 묶었어요. 구슬이 열 개와 하나 더 있으면 몇 개일까요?" 도토리 한 묶음 옆에 낱개 하나를 놓고 "열 다음은 열하나"라고 말해 준다. 묶음 옆의 낱개를 다시 처음부터 세는 학생에게는 묶음은 이미 10이라고 말해 준다.', '도토리 한 묶음 옆에 낱개가 몇 개 있어요? 합치면 몇 개일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 한 묶음과 낱개로 나누어 세기', minutes: 10, tool: 'multiply',
      task: '도토리를 10개씩 묶어요. 묶음은 몇 개이고, 남은 낱개는 몇 개인지 써요.',
      teacher: '"묶음 하나는 몇 개예요? 남은 낱개는 몇 개예요?" 묶음 수와 낱개 수를 따로 말하게 한다. 13을 "묶음 3개, 낱개 1개"로 거꾸로 쓰는 학생이 있다 — 묶음은 10이 하나뿐이라고 짚는다.',
      levels: GL,
      items: [
        grp('도토리 12개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 12, 1, 2, 0.08),
        grp('도토리 14개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 14, 1, 4, 0.1),
        grp('도토리 11개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 11, 1, 1, 0.05),
        grp('도토리 15개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 15, 1, 5, 0.12),
      ] },
    { id: 'a2', title: '활동 2. 묶음과 낱개를 수와 짝짓기', minutes: 9, tool: 'mindmap',
      task: '"묶음 1개와 낱개 2개"처럼 쓴 칸에 알맞은 수 카드를 놓아요.',
      teacher: '"묶음 1개와 낱개 3개는 어떤 수일까요?" 칠판에 10과 3을 나란히 써 놓고 합쳐 13이라고 읽는다. 1과 3을 따로 읽어 "일 삼"이라고 하는 학생이 있다 — 10이 한 묶음 있다고 말하게 한다.',
      levels: ML('11~15'),
      items: [
        mt('묶음과 낱개를 수와 이어 보세요.', '11~15', [['묶음 1개, 낱개 2개', 12], ['묶음 1개, 낱개 4개', 14], ['묶음 1개, 낱개 1개', 11]], [12, 14, 11, 15], 0.08),
        mt('이번에는 낱개가 3개, 5개, 2개인 수를 이어 보세요.', '11~15', [['묶음 1개, 낱개 5개', 15], ['묶음 1개, 낱개 3개', 13], ['묶음 1개, 낱개 2개', 12]], [13, 15, 12, 14], 0.12),
        mt('네 칸을 모두 이어 보세요.', '11~15', [['묶음 1개, 낱개 4개', 14], ['묶음 1개, 낱개 1개', 11], ['묶음 1개, 낱개 5개', 15], ['묶음 1개, 낱개 3개', 13]], [14, 11, 15, 13, 12], 0.18),
      ] },
    { id: 'a3', title: '활동 3. 수직선에서 수 읽기', minutes: 7, tool: 'numberline',
      task: '수직선의 점이 나타내는 수를 골라요. 10 다음부터 하나씩 세어요.',
      teacher: '"10에서 시작해서 하나씩 세어 볼까요? 점은 10에서 몇 칸 갔나요?" 손가락으로 칸을 세게 한다. 눈금이 아니라 눈금 사이를 세어 하나 작게 답하는 학생이 있다 — 점이 있는 눈금의 숫자를 읽게 한다.',
      levels: {
        easy: { mode: 'read', min: 10, max: 20, step: 1, labels: 'all', showValue: true },
        base: { mode: 'read', min: 10, max: 20, step: 1, labels: 'all' },
        challenge: { mode: 'read', min: 10, max: 20, step: 1, labels: 'ends' },
      },
      items: [
        { prompt: '가 점이 나타내는 수를 골라 보세요.', toolOptions: { marks: [13], choices: ['12', '13', '14'], why: ['12는 한 칸 덜 갔어요. 점이 있는 눈금의 수를 읽어요.', '', '14는 한 칸 더 갔어요. 10에서 몇 칸인지 다시 세어요.'] }, target: { pick: 1 }, difficulty: 0.08 },
        { prompt: '가 점은 어떤 수를 나타내나요?', toolOptions: { marks: [16], choices: ['15', '17', '16'], why: ['15는 한 칸 덜 갔어요. 눈금을 하나씩 짚어요.', '17은 한 칸 더 갔어요. 10에서 시작해 세어요.', ''] }, target: { pick: 2 }, difficulty: 0.15 },
        { prompt: '점이 나타내는 수를 골라 보세요.', toolOptions: { marks: [11], choices: ['11', '10', '12'], why: ['', '10에는 점이 없어요. 10 바로 다음 눈금이에요.', '12는 한 칸 더 갔어요. 10에서 한 칸만 가요.'] }, target: { pick: 0 }, difficulty: 0.05 },
      ] },
  ],
  wrap: ['"묶음 1개와 낱개 4개는 몇일까요?" 손으로 10과 4를 보이며 말하게 한다. 출구 1번을 틀린 학생은 묶음 수를 수로 읽었는지 확인하고, 다음 시간에 묶음이 10개라는 것을 먼저 짚는다.', [
    { type: 'choice', prompt: '10개씩 묶음 1개와 낱개 3개는 모두 몇 개인가요?', options: ['4개', '13개', '31개'], answer: 1, difficulty: 0.1, explain: '10과 3을 합쳐 13개예요. 묶음 하나는 10개예요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'group', count: 13, maxSize: 10 }, prompt: '귤 13개를 10개씩 묶어요. 묶음과 낱개를 써 보세요.', target: { size: 10, answer: 1, rest: 3 }, difficulty: 0.15 },
    { type: 'choice', prompt: '묶음 1개와 낱개 5개를 수로 쓰면 무엇인가요?', options: ['15', '51', '6'], answer: 0, difficulty: 0.12, explain: '묶음이 1개이니 십의 자리에 1, 낱개가 5개이니 5를 써요.' },
  ]],
  ws: { title: '묶음과 낱개', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['1', '2', ''], ['1', '4', ''], ['1', '5', '']], answer: '12, 14, 15' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '14는 10개씩 묶음 ___ 개와 낱개 ___ 개예요.', answer: '1, 4' },
    { type: 'choice', prompt: '묶음 1개와 낱개 1개를 나타낸 수에 ○ 하세요.', options: ['2', '11', '12'], answer: '11' },
    { type: 'figure', prompt: '점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 10, max: 20, step: 1, labels: 'all', marks: [12] }, caption: BLANK }, { options: { mode: 'read', min: 10, max: 20, step: 1, labels: 'all', marks: [15] }, caption: BLANK }], answer: '12, 15' },
    { type: 'draw', prompt: '○를 13개 그리고 10개씩 묶어 보세요.' },
  ], easy: { note: '묶음은 10개예요. 10에 낱개를 더해 읽어요.', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['1', '3', ''], ['1', '1', '']], answer: '13, 11' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '12는 묶음 1개와 낱개 ___ 개예요.', answer: '2' },
    { type: 'choice', prompt: '묶음 1개와 낱개 4개는 몇인가요?', options: ['14', '5'], answer: '14' },
    { type: 'draw', prompt: '○를 11개 그려 보세요. 10개는 묶어요.' },
  ] } },
  diff: { easy: '묶음 판에 묶음 수와 남은 낱개가 맞힌 뒤에 보이고, 카드를 맞는 칸에 놓으면 초록 테두리가 생겨요. 수직선에는 점의 수가 보여요.', base: '묶음 수와 낱개를 스스로 세어서 써요. 수직선은 눈금 숫자를 하나씩 읽어요.', challenge: '수직선에 양 끝 숫자만 있어 하나씩 세어야 하고, 묶는 수도 직접 골라요. 카드가 하나 더 있어 헷갈려요.' },
  notes: '자주 보이는 어려움: ① 낱개를 처음부터 다시 센다 → 묶음은 이미 10이라 낱개만 이어서 센다. ② 12를 "일 이"라고 따로 읽는다 → 10과 2를 합친 수라고 말한다. ③ 묶음과 낱개 수를 바꿔 쓴다(21로 쓰기) → 묶음이 하나이고 낱개가 둘이면 12라고 칠판에 보여 준다. 16~19는 3차시에서 한다.',
}));
// ───────────────────────────── 3차시 (core) ─────────────────────────────
L.push(lesson(3, {
  title: '16부터 19까지 세고 두 가지로 읽기',
  objective: '16부터 19까지의 수를 묶음과 낱개로 세어 쓰고 "십육", "열여섯"처럼 읽을 수 있다.',
  desc: 'four paper kites with big numbers sixteen to nineteen flying in a row over green hills',
  text: '16 17 18 19',
  layers: [{ motif: 'tree', x: 80, y: 216, s: 1.0 }, { motif: 'bird', x: 200, y: 80 }, { motif: 'bird', x: 340, y: 100 }, { motif: 'flower', x: 400, y: 236 }],
  intro: ['"연이 열여섯 개 날고 있어요. 열여섯은 어떻게 쓸까요?" 칠판에 묶음 하나와 낱개 여섯 개를 그리고 16이라고 쓴다. "16을 십육이라고도 읽고 열여섯이라고도 읽어요. 몇 개인지 셀 때는 열여섯 개라고 해요"라고 말해 준다. 6을 십 앞에 쓰는 학생에게는 묶음을 먼저 쓰는 것을 보여 준다.', '연이 몇 개 날고 있나요? 10개씩 묶어 세어 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 16부터 19까지 묶어 세기', minutes: 9, tool: 'multiply',
      task: '연을 10개씩 묶어요. 낱개가 몇 개 남는지 써요.',
      teacher: '"10개씩 한 묶음, 남은 연은 몇 개예요?" 낱개를 하나씩 짚으며 센다. 낱개가 6개 남았는데 묶음 수 1을 빼고 6만 쓰는 학생에게는 10이 한 묶음 있다고 다시 보여 준다.',
      levels: GL,
      items: [
        grp('연 16개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 16, 1, 6, 0.1),
        grp('연 18개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 18, 1, 8, 0.12),
        grp('연 17개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 17, 1, 7, 0.1),
        grp('연 19개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 19, 1, 9, 0.15),
      ] },
    { id: 'a2', title: '활동 2. 수와 읽는 말 이어 보기', minutes: 10, tool: 'mindmap',
      task: '수 옆에 읽는 말 카드를 놓아요. 십육, 십칠처럼 읽는 말을 써 봐요.',
      teacher: '"16은 어떻게 읽을까요? 십육, 열여섯 둘 다 맞아요." 두 가지 읽는 말을 모두 인정한다. "열 여섯"을 "십 여섯"처럼 섞어 읽는 학생에게는 십육은 십과 육, 열여섯은 열과 여섯이라고 나누어 읽어 준다.',
      levels: ML('16~19 읽기'),
      items: [
        mt('수를 읽는 말과 이어 보세요.', '16~19 읽기', [['16', '십육', '16'], ['18', '십팔', '18'], ['17', '십칠', '17']], ['십육', '십팔', '십칠', '십구'], 0.1),
        mt('이번에는 열여섯처럼 개수를 셀 때 쓰는 말과 이어 보세요.', '16~19 읽기', [['19', '열아홉', '19'], ['16', '열여섯', '16'], ['18', '열여덟', '18']], ['열여섯', '열아홉', '열여덟', '열일곱'], 0.15),
        mt('네 수를 열일곱처럼 읽는 말과 이어 보세요.', '16~19 읽기', [['17', '열일곱', '17'], ['19', '열아홉', '19'], ['18', '열여덟', '18'], ['16', '열여섯', '16']], ['열일곱', '열아홉', '열여덟', '열여섯', '열다섯'], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 수직선에 수를 놓기', minutes: 7, tool: 'numberline',
      task: '점을 말한 수가 있는 눈금에 놓아요. 15 다음부터 하나씩 세어요.',
      teacher: '"15 다음 수는 무엇이에요? 점을 한 칸씩 옮겨 볼까요?" 눈금 숫자를 소리 내어 읽으며 점을 놓게 한다. 18을 놓으려고 17과 18 사이에 점을 놓는 학생에게는 숫자가 적힌 눈금 위에 놓는다고 알려 준다.',
      levels: {
        easy: { mode: 'place', min: 14, max: 20, step: 1, labels: 'all', showValue: true },
        base: { mode: 'place', min: 14, max: 20, step: 1, labels: 'all' },
        challenge: { mode: 'place', min: 14, max: 20, step: 1, labels: 'ends' },
      },
      items: [
        { prompt: '가 점을 18이 있는 자리에 놓아 보세요.', target: { points: [18] }, difficulty: 0.1 },
        { prompt: '가 점을 열일곱이 있는 자리에 놓아 보세요.', target: { points: [17] }, difficulty: 0.15 },
        { prompt: '가 점을 19가 있는 자리에 놓아 보세요.', target: { points: [19] }, difficulty: 0.12 },
      ] },
  ],
  wrap: ['"19는 어떻게 읽을까요? 열아홉이라고도 하고 십구라고도 해요." 두 가지로 읽어 보게 한다. 출구 2번을 틀린 학생은 열여섯과 열일곱을 섞는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '10개씩 묶음 1개와 낱개 7개를 수로 쓰면 무엇인가요?', options: ['71', '17', '8'], answer: 1, difficulty: 0.1, explain: '묶음이 1개, 낱개가 7개이니 17이에요.' },
    { type: 'choice', prompt: '"십팔"을 숫자로 쓰면 무엇인가요?', options: ['81', '18', '19'], answer: 1, difficulty: 0.12, explain: '십팔은 10과 8을 합친 수라서 18이에요.' },
    { type: 'tool', tool: 'multiply', options: { mode: 'group', count: 17, maxSize: 10 }, prompt: '풍선 17개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', target: { size: 10, answer: 1, rest: 7 }, difficulty: 0.15 },
  ]],
  ws: { title: '16부터 19까지', items: [
    { type: 'table', prompt: '수를 읽는 말로 쓰세요.', columns: ['수', '십 읽기', '열 읽기'], cells: [['16', '십육', ''], ['17', '', '열일곱'], ['19', '', '']], answer: '열여섯, 십칠, 십구·열아홉' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '18은 10개씩 묶음 ___ 개와 낱개 ___ 개예요.', answer: '1, 8' },
    { type: 'choice', prompt: '"열여섯"과 같은 수에 ○ 하세요.', options: ['17', '16', '6'], answer: '16' },
    { type: 'figure', prompt: '점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 14, max: 20, step: 1, labels: 'all', marks: [17] }, caption: BLANK }, { options: { mode: 'read', min: 14, max: 20, step: 1, labels: 'all', marks: [19] }, caption: BLANK }], answer: '17, 19' },
    { type: 'short', prompt: '우리 반에서 열아홉 개가 있는 물건을 찾아 이름을 써 보세요.' },
  ], easy: { note: '십육은 10과 6, 열여섯은 열과 여섯이에요. 하나씩 세어 쓰세요.', items: [
    { type: 'table', prompt: '수를 읽는 말로 쓰세요.', columns: ['수', '십 읽기'], cells: [['16', '십육'], ['17', '']], answer: '십칠' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '묶음 1개와 낱개 9개는 ___ 이에요.', answer: '19' },
    { type: 'choice', prompt: '"열여덟"과 같은 수에 ○ 하세요.', options: ['18', '16'], answer: '18' },
    { type: 'draw', prompt: '○를 16개 그리고 10개씩 묶어 보세요.' },
  ] } },
  diff: { easy: '수직선에 점의 수가 보이고, 맞는 카드에는 초록 테두리가 생겨요. 묶음 판은 맞힌 뒤에 묶음과 낱개 수가 보여요.', base: '수직선은 숫자를 읽으며 직접 놓아요. 읽는 말 카드는 틀리면 확인 뒤에 알려 줘요.', challenge: '수직선에 양 끝 숫자만 있어 하나씩 세어야 하고, 읽는 말 카드가 한 장 더 있어요.' },
  notes: '자주 보이는 어려움: ① 열여섯을 "십 여섯"처럼 섞어 읽는다 → 십육·열여섯 두 가지로 나누어 읽는다. ② 17을 71로 쓴다 → 묶음을 먼저 쓰고 낱개를 뒤에 쓴다. ③ 열일곱과 열여덟처럼 비슷한 말을 바꾼다 → 낱개를 하나씩 세며 "열일곱 개"를 말한다. 20부터는 4차시에서 한다.',
}));
// ───────────────────────────── 4차시 (core) ─────────────────────────────
const JMP10 = {
  easy: { mode: 'jump', min: 0, max: 50, step: 10, labels: 'major', fixedFrom: 0, showValue: true },
  base: { mode: 'jump', min: 0, max: 50, step: 10, labels: 'major', fixedFrom: 0 },
  challenge: { mode: 'jump', min: 0, max: 50, step: 10, sub: 10, labels: 'ends', fixedFrom: 0 },
};
L.push(lesson(4, {
  title: '묶음과 낱개로 20부터 50까지 세어 쓰기',
  objective: '10개씩 묶음의 수와 낱개의 수로 20부터 50까지의 수를 세어 쓰고 읽을 수 있다.',
  desc: 'a girl stacking bundles of ten colorful paper cards on a table with a few loose cards beside them',
  text: '묶음과 낱개',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 330, y: 80, s: 0.6 }],
  intro: ['"색종이를 10장씩 묶었더니 묶음이 2개예요. 모두 몇 장일까요?" 묶음을 하나씩 손으로 짚으며 "열, 스물"이라고 센다. 칠판에 20을 쓰고 "이십 또는 스물"이라고 읽어 준다. 묶음이 2개인데 "2장"이라고 말하는 학생에게는 묶음 하나가 10장임을 다시 짚는다.', '색종이를 10장씩 묶었어요. 묶음이 2개이면 모두 몇 장일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 10씩 뛰어 세어 20부터 50까지', minutes: 8, tool: 'numberline',
      task: '10씩 뛰어 세어요. 한 번 뛸 때마다 묶음이 하나씩 늘어요.',
      teacher: '"10, 20, … 한 번 뛰면 묶음이 하나 늘어요. 4번 뛰면 어디에 닿을까요?" 뛸 때마다 소리 내어 세게 한다. 10씩 뛰면서 11, 12처럼 하나씩 세는 학생에게는 한 번에 묶음 하나씩 뛰는 것이라고 말해 준다.',
      levels: JMP10,
      items: [
        { prompt: '10씩 2번 뛰어 세어 보세요. 어디에 닿나요?', target: { from: 0, size: 10, count: 2 }, difficulty: 0.08 },
        { prompt: '10씩 4번 뛰어 세어 보세요.', target: { from: 0, size: 10, count: 4 }, difficulty: 0.12 },
        { prompt: '10씩 뛰어 세어 30에 닿아 보세요.', target: { from: 0, size: 10, end: 30 }, difficulty: 0.1 },
        { prompt: '10씩 뛰어 세어 50에 닿아 보세요. 몇 번 뛰었나요?', target: { from: 0, size: 10, end: 50 }, difficulty: 0.15 },
      ] },
    { id: 'a2', title: '활동 2. 색종이를 10장씩 묶고 낱개 세기', minutes: 10, tool: 'multiply',
      task: '색종이를 10장씩 묶어요. 묶음은 몇 개이고 낱장은 몇 장인지 써요.',
      teacher: '"묶음은 몇 개예요? 남은 낱장은 몇 장이에요?" 묶음 수와 낱장 수를 따로 말한 뒤 수로 읽게 한다. 묶음 4개와 낱장 7장을 "47"이 아니라 "11"이라고 합하는 학생이 있다 — 묶음 4개는 40이라고 먼저 말하게 한다.',
      levels: GL,
      items: [
        grp('색종이 23장을 10장씩 묶어요. 묶음은 몇 개, 낱장은 몇 장인가요?', 23, 2, 3, 0.1),
        grp('색종이 35장을 10장씩 묶어요. 묶음은 몇 개, 낱장은 몇 장인가요?', 35, 3, 5, 0.15),
        grp('색종이 47장을 10장씩 묶어요. 묶음은 몇 개, 낱장은 몇 장인가요?', 47, 4, 7, 0.2),
        grp('색종이 50장을 10장씩 묶어요. 묶음은 몇 개인가요?', 50, 5, 0, 0.12),
      ] },
    { id: 'a3', title: '활동 3. 묶음과 낱개를 수로 쓰기', minutes: 8, tool: 'mindmap',
      task: '"묶음 2개, 낱개 6개"를 수로 쓰면 26이에요. 칸에 알맞은 수 카드를 놓아요.',
      teacher: '"묶음 3개, 낱개 0개는 어떤 수일까요?" 낱개가 0이면 0을 꼭 써야 한다고 말한다. 30을 3으로만 쓰는 학생에게는 묶음 3개는 10이 3번이라고 보여 준다.',
      levels: ML('20~50 쓰기'),
      items: [
        mt('묶음과 낱개를 수와 이어 보세요.', '20~50 쓰기', [['묶음 2개, 낱개 6개', 26], ['묶음 3개, 낱개 2개', 32], ['묶음 4개, 낱개 0개', 40]], [26, 32, 40, 23], 0.1),
        mt('이번에는 낱개가 많은 수를 이어 보세요.', '20~50 쓰기', [['묶음 3개, 낱개 8개', 38], ['묶음 5개, 낱개 0개', 50], ['묶음 2개, 낱개 9개', 29]], [38, 50, 29, 28], 0.15),
        mt('네 칸을 모두 이어 보세요.', '20~50 쓰기', [['묶음 4개, 낱개 5개', 45], ['묶음 2개, 낱개 0개', 20], ['묶음 3개, 낱개 7개', 37], ['묶음 4개, 낱개 9개', 49]], [45, 20, 37, 49, 54], 0.2),
      ] },
  ],
  wrap: ['"묶음 3개와 낱개 4개는 몇일까요? 묶음은 10이 3번이라 30이에요." 손으로 묶음과 낱개를 보이며 말하게 한다. 출구 2번을 틀린 학생은 묶음 수와 낱개 수를 바꾸어 쓰는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '10개씩 묶음 3개와 낱개 4개는 모두 몇 개인가요?', options: ['7개', '34개', '43개'], answer: 1, difficulty: 0.12, explain: '묶음 3개는 30이고 낱개 4개를 더해 34예요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 50, step: 10, labels: 'major', fixedFrom: 0 }, prompt: '10씩 3번 뛰어 세어 보세요.', target: { from: 0, size: 10, count: 3 }, difficulty: 0.1 },
    { type: 'choice', prompt: '묶음 4개와 낱개 0개를 수로 쓰면 무엇인가요?', options: ['4', '40', '44'], answer: 1, difficulty: 0.15, explain: '낱개가 없어도 0을 써서 40이에요.' },
  ]],
  ws: { title: '20부터 50까지', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['2', '5', ''], ['3', '0', ''], ['4', '6', '']], answer: '25, 30, 46' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '38은 10개씩 묶음 ___ 개와 낱개 ___ 개예요.', answer: '3, 8' },
    { type: 'choice', prompt: '10개씩 묶음 5개를 나타낸 수에 ○ 하세요.', options: ['5', '15', '50'], answer: '50' },
    { type: 'table', prompt: '수를 읽는 말로 쓰세요.', columns: ['수', '십 읽기', '열 읽기'], cells: [['20', '이십', ''], ['30', '', '서른'], ['40', '', '']], answer: '스물, 삼십, 사십·마흔' },
    { type: 'draw', prompt: '○를 34개 그리고 10개씩 묶어 보세요.' },
  ], easy: { note: '묶음은 10이 몇 번인지 세어요. 낱개는 그대로 이어 써요.', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['2', '4', ''], ['3', '0', '']], answer: '24, 30' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '묶음 4개는 ___ 이에요.', answer: '40' },
    { type: 'choice', prompt: '묶음 2개와 낱개 7개에 알맞은 수에 ○ 하세요.', options: ['27', '9'], answer: '27' },
    { type: 'draw', prompt: '○를 21개 그려 보세요. 10개씩 묶어요.' },
  ] } },
  diff: { easy: '수직선에 뛴 수가 보이고, 묶음 판은 맞힌 뒤에 묶음과 낱개가 보여요. 카드는 맞는 칸에 놓으면 초록 테두리가 생겨요.', base: '수를 직접 세어 써요. 수직선은 큰 눈금 숫자만 있어요.', challenge: '수직선에 양 끝 숫자만 있고 묶는 수도 스스로 골라요. 카드가 한 장 더 있어 헷갈려요.' },
  notes: '자주 보이는 어려움: ① 묶음 4개와 낱개 7개를 4+7=11로 센다 → 묶음은 10이 4번이라 40이라고 말한다. ② 30을 3으로 쓴다 → 낱개가 없어도 0을 써야 자리가 맞다. ③ 묶음과 낱개 수를 바꿔 쓴다(47을 74로) → 묶음을 먼저 쓴다. 읽기는 십 읽기와 열 읽기를 모두 인정한다.',
}));
// ───────────────────────────── 5차시 (core) ─────────────────────────────
L.push(lesson(5, {
  title: '묶음이 더 많은 수가 더 큰 수',
  objective: '두 수를 10개씩 묶음의 수로 먼저 견주어 어느 수가 더 큰지 말할 수 있다.',
  desc: 'two children comparing two baskets of bundled pencils, one basket holding more bundles than the other',
  text: '어느 쪽이 더 많을까요?',
  layers: [{ motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'tree', x: 400, y: 218 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"연필을 10자루씩 묶었어요. 민지 연필은 묶음이 2개, 준호 연필은 묶음이 3개예요. 누구 연필이 더 많을까요?" 묶음 수를 먼저 견주는 것을 보여 준다. 낱개가 많은 쪽이 더 크다고 말하는 학생에게는 묶음 하나가 10자루임을 짚는다.', '묶음이 2개인 연필과 3개인 연필 중 어느 쪽이 더 많을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 두 수 중 더 큰 수 고르기', minutes: 9, tool: 'mindmap',
      task: '카드에 묶음과 낱개가 쓰여 있어요. 묶음이 더 많은 수를 골라요.',
      teacher: '"묶음이 몇 개씩이에요? 묶음이 더 많은 쪽이 더 큰 수예요." 묶음 수를 소리 내어 읽고 견주게 한다. 19와 24에서 낱개 9가 크다고 19를 고르는 학생이 있다 — 묶음은 10이 1번과 2번이라고 짚는다.',
      levels: { easy: { topic: '큰 수 고르기', live: true }, base: { topic: '큰 수 고르기' }, challenge: { topic: '큰 수 고르기' } },
      items: [
        pk('두 수 중 더 큰 수를 골라 보세요.', '큰 수 고르기', [23, 31], [31], 0.08, '더 큰 수', true),
        pk('묶음 수를 먼저 견주어 더 큰 수를 골라 보세요.', '큰 수 고르기', [45, 28], [45], 0.12, '더 큰 수', true),
        pk('낱개가 많아도 묶음이 적으면 더 작아요. 더 큰 수를 골라 보세요.', '큰 수 고르기', [19, 24], [24], 0.2, '더 큰 수', true),
        pk('색종이 두 묶음을 견주어 더 많은 쪽을 골라 보세요.', '큰 수 고르기', [36, 14], [36], 0.1, '더 큰 수', true),
      ] },
    { id: 'a2', title: '활동 2. 묶음 수에 따라 수 카드 나누기', minutes: 9, tool: 'mindmap',
      task: '수 카드를 묶음이 3개 이상인 칸과 2개 이하인 칸으로 나누어요.',
      teacher: '"41은 묶음이 몇 개예요?" 십의 자리 숫자가 묶음 수임을 짚는다. 29를 낱개 9가 크다고 3개 이상 칸에 넣는 학생에게는 29의 묶음이 2개뿐이라고 말해 준다.',
      levels: ML('묶음 수 견주기'),
      items: [
        srt('수 카드를 묶음 수에 따라 나누어 보세요.', '묶음 수 견주기', { '묶음이 3개 이상': [38, 41], '묶음이 2개 이하': [12, 26, 19] }, 0.1),
        srt('이번에는 수가 더 많아요. 묶음 수에 따라 나누어 보세요.', '묶음 수 견주기', { '묶음이 3개 이상': [33, 47, 50], '묶음이 2개 이하': [18, 24] }, 0.15),
        srt('낱개가 많은 수도 있어요. 묶음 수를 보고 나누어 보세요.', '묶음 수 견주기', { '묶음이 3개 이상': [35, 42], '묶음이 2개 이하': [11, 29, 16] }, 0.2),
      ] },
    { id: 'a3', title: '활동 3. 수직선에서 더 오른쪽에 있는 수', minutes: 8, tool: 'numberline',
      task: '수직선에서는 더 큰 수가 오른쪽에 있어요. 두 점을 알맞은 자리에 놓아요.',
      teacher: '"더 큰 수는 오른쪽에 있을까요, 왼쪽에 있을까요?" 점을 놓은 뒤 어느 점이 더 오른쪽인지 말하게 한다. 가를 먼저 말했으니 가가 더 크다고 생각하는 학생이 있다 — 이름 순서가 아니라 수의 자리를 보게 한다.',
      levels: {
        easy: { mode: 'place', min: 20, max: 40, step: 5, sub: 5, count: 2, labels: 'major', showValue: true },
        base: { mode: 'place', min: 20, max: 40, step: 5, sub: 5, count: 2, labels: 'major' },
        challenge: { mode: 'place', min: 20, max: 40, step: 5, sub: 5, count: 2, labels: 'ends' },
      },
      items: [
        { prompt: '가는 23, 나는 31이에요. 두 점을 수직선에 놓아 보세요.', target: { points: [23, 31] }, difficulty: 0.1 },
        { prompt: '가는 34, 나는 28이에요. 두 점을 수직선에 놓아 보세요.', target: { points: [34, 28] }, difficulty: 0.15 },
        { prompt: '가는 25, 나는 40이에요. 두 점을 수직선에 놓아 보세요.', target: { points: [25, 40] }, difficulty: 0.12 },
      ] },
  ],
  wrap: ['"23과 31 중 어느 수가 더 클까요? 어떻게 알았나요?" 묶음 수를 견주었다는 말이 나오게 한다. 출구 1번을 틀린 학생은 낱개 수만 보고 고르는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요. 17과 25 중 어느 수가 더 큰가요?', options: ['17', '25'], answer: 1, difficulty: 0.15, explain: '25는 묶음이 2개, 17은 묶음이 1개예요. 묶음이 더 많은 25가 더 커요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '큰 수 고르기', basket: '더 큰 수', cards: [num(32), num(44)] }, prompt: '32와 44 중 더 큰 수를 골라 보세요.', target: { pick: ['44'] }, difficulty: 0.12 },
    { type: 'choice', prompt: '묶음이 3개인 수는 묶음이 2개인 수보다 어떤가요?', options: ['더 커요', '더 작아요', '같아요'], answer: 0, difficulty: 0.12, explain: '묶음 하나가 10이라서 묶음이 더 많으면 더 큰 수예요.' },
  ]],
  ws: { title: '더 큰 수 찾기', items: [
    { type: 'table', prompt: '더 큰 수에 ○ 하세요.', columns: ['첫째 수', '둘째 수', '더 큰 수'], cells: [['21', '35', ''], ['48', '29', ''], ['16', '12', '']], answer: '35, 48, 16' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '묶음이 더 ___ 수가 더 큰 수예요.', answer: '많은' },
    { type: 'choice', prompt: '37과 43 중 더 큰 수에 ○ 하세요.', options: ['37', '43'], answer: '43' },
    { type: 'figure', prompt: '수직선을 보고 더 큰 수에 ○ 하세요. (두 점은 각각 어떤 수인가요?)', tool: 'numberline', wide: true, figures: [{ options: { mode: 'place', min: 20, max: 40, step: 5, sub: 5, labels: 'major', count: 2 }, state: { points: [26, 34] }, caption: '가 ___ , 나 ___ 더 큰 수는 ___' }], answer: '가 26, 나 34, 더 큰 수는 나(34)' },
    { type: 'short', prompt: '묶음 수가 다르면 어떻게 견주면 되는지 한 문장으로 써 보세요.' },
  ], easy: { note: '묶음이 더 많은 수가 더 큰 수예요. 십의 자리 숫자를 먼저 봐요.', items: [
    { type: 'table', prompt: '더 큰 수에 ○ 하세요.', columns: ['첫째 수', '둘째 수', '더 큰 수'], cells: [['13', '26', ''], ['41', '18', '']], answer: '26, 41' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '27은 묶음이 ___ 개, 31은 묶음이 ___ 개예요.', answer: '2, 3' },
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요.', options: ['22', '34'], answer: '34' },
    { type: 'draw', prompt: '○를 12개와 21개 그리고 10개씩 묶어 견주어 보세요.' },
  ] } },
  diff: { easy: '카드에 묶음 수와 낱개 수가 늘 보이고, 수직선에는 점의 수가 보여요. 맞는 곳에 놓으면 초록 테두리가 생겨요.', base: '카드에는 수만 있어서 십의 자리를 스스로 봐요. 수직선에는 큰 눈금 숫자만 있어요.', challenge: '낱개가 많아도 묶음이 적은 수가 섞이고, 수직선에는 양 끝 숫자만 있어요.' },
  notes: '자주 보이는 어려움: ① 낱개 수가 큰 쪽을 더 큰 수로 고른다(19와 24) → 묶음 하나가 10이라 묶음 수를 먼저 견준다. ② 앞에서 말한 수를 더 크다고 느낀다 → 수직선 위 자리로 확인한다. ③ 십의 자리 숫자를 낱개로 읽는다 → 3은 묶음 3개, 30이라고 말한다. 같은 묶음 수일 때는 6차시에서 한다.',
}));
// ───────────────────────────── 6차시 (practice) ─────────────────────────────
L.push(lesson(6, {
  title: '묶음 수가 같으면 낱개 수로 견주기',
  objective: '묶음 수가 같은 두 수는 낱개 수를 견주어 어느 수가 더 큰지 말할 수 있다.',
  desc: 'two stacks of paper cups on a picnic mat, both with three full bundles but different numbers of loose cups',
  text: '묶음이 같을 때는?',
  layers: [{ motif: 'tree', x: 90, y: 216, s: 1.1, color: 'mint' }, { motif: 'house', x: 390, y: 214, s: 0.9 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 150, y: 84, s: 0.6 }],
  intro: ['"종이컵이 두 줄 있어요. 둘 다 10개씩 묶음이 3개예요. 낱개는 4개와 7개예요. 어느 줄이 더 많을까요?" 묶음이 같을 때는 낱개를 견준다고 말해 준다. 묶음이 같은데도 모르겠다고 하는 학생에게는 묶음을 같이 덮고 낱개만 보게 한다.', '묶음이 같은 두 줄이 있어요. 어느 줄이 더 많을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 낱개를 견주어 더 큰 수 고르기', minutes: 9, tool: 'mindmap',
      task: '묶음 수가 같아요. 낱개 수를 견주어 더 큰 수를 골라요.',
      teacher: '"묶음은 둘 다 몇 개예요? 그럼 무엇을 견주면 될까요?" 낱개 수를 소리 내어 견주게 한다. 34와 38에서 3과 4를 견주는 학생이 있다 — 묶음 3개는 같으니 낱개 4와 8을 견주라고 짚는다.',
      levels: { easy: { topic: '낱개로 견주기', live: true }, base: { topic: '낱개로 견주기' }, challenge: { topic: '낱개로 견주기' } },
      items: [
        pk('묶음 수가 같아요. 낱개를 견주어 더 큰 수를 골라 보세요.', '낱개로 견주기', [34, 38], [38], 0.1, '더 큰 수'),
        pk('두 수 중 더 큰 수를 골라 보세요.', '낱개로 견주기', [41, 47], [47], 0.12, '더 큰 수'),
        pk('이번에는 더 작은 수를 골라 보세요.', '낱개로 견주기', [29, 22], [22], 0.15, '더 작은 수'),
        pk('낱개를 견주어 더 큰 수를 골라 보세요.', '낱개로 견주기', [35, 31], [35], 0.1, '더 큰 수'),
      ] },
    { id: 'a2', title: '활동 2. 같은 묶음끼리 작은 수부터 놓기', minutes: 9, tool: 'mindmap',
      task: '묶음 수가 같은 수 카드를 작은 수부터 차례로 놓아요.',
      teacher: '"낱개가 가장 작은 수부터 놓아요." 카드를 놓을 때마다 읽게 한다. 낱개가 0인 40을 가장 큰 수로 놓는 학생이 있다 — 40은 묶음 4개에 낱개가 없다는 것을 보여 준다.',
      levels: ML('작은 수부터'),
      items: [
        ordItem('묶음 수가 같아요. 작은 수부터 놓아 보세요.', '작은 수부터', [32, 36, 31], 0.1),
        ordItem('네 수를 작은 수부터 차례로 놓아 보세요.', '작은 수부터', [43, 45, 41, 48], 0.18),
        ordItem('낱개를 견주어 작은 수부터 놓아 보세요.', '작은 수부터', [25, 29, 27], 0.15),
      ] },
    { id: 'a3', title: '활동 3. 더 큰 수·더 작은 수 짝짓기', minutes: 8, tool: 'mindmap',
      task: '두 수를 견주어 말에 알맞은 수 카드를 이어요.',
      teacher: '"23과 27 중 더 큰 수는 무엇이에요?" 묶음이 같으니 낱개를 견준다고 말하게 한다. 더 큰 수를 묻는데 더 작은 수를 이으려는 학생이 있다 — 말 끝의 "큰", "작은"을 손가락으로 짚어 읽게 한다.',
      levels: ML('더 큰 수, 더 작은 수'),
      items: [
        mt('두 수를 견주어 말에 알맞은 수를 이어 보세요.', '더 큰 수, 더 작은 수', [['23, 27 중 더 큰 수', 27], ['34, 31 중 더 큰 수', 34], ['45, 42 중 더 작은 수', 42]], [27, 34, 42, 31], 0.12),
        mt('이번에는 더 작은 수도 이어 보세요.', '더 큰 수, 더 작은 수', [['38, 36 중 더 큰 수', 38], ['21, 25 중 더 작은 수', 21], ['49, 43 중 더 큰 수', 49]], [38, 21, 49, 36], 0.15),
        mt('네 칸을 모두 이어 보세요.', '더 큰 수, 더 작은 수', [['32, 37 중 더 큰 수', 37], ['44, 41 중 더 작은 수', 41], ['26, 29 중 더 큰 수', 29], ['35, 30 중 더 작은 수', 30]], [37, 41, 29, 30, 32], 0.2),
      ] },
  ],
  wrap: ['"34와 38은 묶음이 같아요. 어떻게 견주나요?" 낱개를 견준다는 말을 학생 말로 하게 한다. 출구 1번을 틀린 학생은 다음 시간에 두 수의 묶음 수를 먼저 말하게 한다.', [
    { type: 'choice', prompt: '묶음 수가 같은 24와 29 중 더 큰 수는 무엇인가요?', options: ['24', '29'], answer: 1, difficulty: 0.12, explain: '묶음은 둘 다 2개예요. 낱개가 더 많은 29가 더 커요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'order', topic: '작은 수부터', cards: nums(46, 42, 44) }, prompt: '수 카드 42, 44, 46을 작은 수부터 놓아 보세요.', target: ord(42, 44, 46), difficulty: 0.15 },
    { type: 'choice', prompt: '묶음이 같을 때는 무엇을 견주면 되나요?', options: ['낱개 수', '묶음 수', '모두 같아요'], answer: 0, difficulty: 0.1, explain: '묶음 수가 같으면 남은 낱개 수를 견주어요.' },
  ]],
  ws: { title: '낱개로 견주기', items: [
    { type: 'table', prompt: '더 큰 수에 ○ 하세요.', columns: ['첫째 수', '둘째 수', '더 큰 수'], cells: [['33', '36', ''], ['42', '40', ''], ['27', '28', '']], answer: '36, 42, 28' },
    { type: 'blank', prompt: '작은 수부터 빈칸에 쓰세요.', text: '34, 37, 31 → ___ , ___ , ___', answer: '31, 34, 37' },
    { type: 'choice', prompt: '더 작은 수에 ○ 하세요. 45와 48 중에서요.', options: ['45', '48'], answer: '45' },
    { type: 'figure', prompt: '수직선을 보고 두 점의 수를 쓰고 더 큰 수에 ○ 하세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'place', min: 20, max: 40, step: 5, sub: 5, labels: 'major', count: 2 }, state: { points: [32, 36] }, caption: '가 ___ , 나 ___ 더 큰 수는 ___' }], answer: '가 32, 나 36, 더 큰 수는 나(36)' },
    { type: 'draw', prompt: '○를 23개와 26개 그리고 10개씩 묶어 어느 쪽이 더 많은지 ○ 해 보세요.' },
  ], easy: { note: '묶음 수가 같으면 낱개를 견주어요. 낱개가 많은 쪽이 더 큰 수예요.', items: [
    { type: 'table', prompt: '더 큰 수에 ○ 하세요.', columns: ['첫째 수', '둘째 수', '더 큰 수'], cells: [['21', '25', ''], ['38', '32', '']], answer: '25, 38' },
    { type: 'blank', prompt: '작은 수부터 빈칸에 쓰세요.', text: '22, 25 → ___ , ___', answer: '22, 25' },
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요.', options: ['41', '43'], answer: '43' },
    { type: 'draw', prompt: '○를 31개와 34개 그려 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말하고 카드가 돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러요. 작은 수부터 놓을 때 수는 3개예요.', challenge: '네 수를 놓고, 더 큰 수·더 작은 수를 섞어 이어야 해요. 카드가 한 장 더 있어요.' },
  notes: '자주 보이는 어려움: ① 묶음 수가 같은데 묶음 수로 견주려 한다 → 같은 묶음은 덮고 낱개만 본다. ② 낱개가 0인 수를 크게 본다(40과 43) → 0은 낱개가 없다는 뜻이다. ③ 더 큰 수와 더 작은 수를 헷갈린다 → 문제 끝 말을 손가락으로 짚어 읽는다. 수 순서와 사이 수는 7차시에서 한다.',
}));
// ───────────────────────────── 7차시 (core) ─────────────────────────────
L.push(lesson(7, {
  title: '수 줄에서 바로 앞의 수와 바로 뒤의 수 찾기',
  objective: '50까지의 수에서 어떤 수의 바로 앞의 수, 바로 뒤의 수, 두 수 사이의 수를 찾을 수 있다.',
  desc: 'a long row of paper stepping stones with big numbers across a river, and a frog missing one stone in the middle',
  text: '빠진 수는 무엇일까요?',
  layers: [{ motif: 'wave', y: 214 }, { motif: 'tree', x: 70, y: 214, s: 1.0 }, { motif: 'bird', x: 340, y: 84 }, { motif: 'flower', x: 420, y: 236 }],
  intro: ['"징검다리 돌에 수가 쓰여 있어요. 돌 하나가 사라졌어요. 34 다음 돌은 무엇일까요?" 칠판에 수를 차례로 쓰고 하나를 가린다. 빠진 돌의 앞뒤를 소리 내어 읽으며 찾게 한다. 39 다음에 40이 아니라 310이라고 쓰는 학생이 있다면 묶음이 하나 늘어난다는 것을 짚는다.', '징검다리 돌에 수가 차례로 쓰여 있어요. 빠진 수를 찾아봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 수 배열의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '수가 차례로 놓여 있어요. 앞의 수보다 1 큰 수를 빈칸에 써요.',
      teacher: '"34 다음 수는 무엇일까요? 앞에서부터 소리 내어 읽어 봐요." 빈칸의 앞과 뒤를 모두 읽게 한다. 49 다음 빈칸에 40을 쓰는 학생에게는 49 다음은 묶음이 하나 더 늘어 50이라고 말해 준다.',
      levels: LVP,
      items: [
        pt('수가 차례로 놓여 있어요. 빈칸에 알맞은 수를 써 보세요.', [31, 32, null, 34, 35, null, 37], [33, 36], 0.08),
        pt('이번에는 앞의 수가 41부터예요. 빈칸을 채워 보세요.', [41, null, 43, 44, null, 46], [42, 45], 0.12),
        pt('빈칸이 세 개예요. 수가 커지는 차례로 채워 보세요.', [44, null, 46, null, 48, 49, null], [45, 47, 50], 0.2),
        pt('20대 수의 빈칸을 채워 보세요.', [24, null, 26, 27, 28, null], [25, 29], 0.15),
      ] },
    { id: 'a2', title: '활동 2. 바로 앞의 수와 바로 뒤의 수 잇기', minutes: 9, tool: 'mindmap',
      task: '"바로 뒤의 수"는 1 큰 수, "바로 앞의 수"는 1 작은 수예요. 알맞은 수 카드를 놓아요.',
      teacher: '"29 바로 뒤의 수는 무엇일까요?" 손가락으로 29 다음 칸을 짚게 한다. 29 바로 뒤를 210이라고 말하는 학생에게는 낱개가 10개가 되면 묶음 하나가 늘어난다는 것을 보여 준다.',
      levels: ML('앞의 수, 뒤의 수'),
      items: [
        mt('말에 알맞은 수를 이어 보세요.', '앞의 수, 뒤의 수', [['29 바로 뒤의 수', 30], ['40 바로 앞의 수', 39], ['35 바로 뒤의 수', 36]], [30, 39, 36, 38], 0.12),
        mt('이번에는 50 가까이의 수예요. 이어 보세요.', '앞의 수, 뒤의 수', [['49 바로 뒤의 수', 50], ['20 바로 앞의 수', 19], ['43 바로 앞의 수', 42]], [50, 19, 42, 44], 0.15),
        mt('네 칸을 모두 이어 보세요.', '앞의 수, 뒤의 수', [['19 바로 뒤의 수', 20], ['30 바로 앞의 수', 29], ['38 바로 뒤의 수', 39], ['41 바로 앞의 수', 40]], [20, 29, 39, 40, 31], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 두 수 사이의 수를 수직선에 놓기', minutes: 8, tool: 'numberline',
      task: '두 수 사이에 있는 수는 하나씩 세어서 찾아요. 점을 알맞은 눈금에 놓아요.',
      teacher: '"27과 29 사이에는 어떤 수가 있을까요?" 눈금 숫자를 소리 내어 읽으며 찾게 한다. 사이의 수를 27이나 29라고 하는 학생에게는 두 수는 빼고 가운데 눈금을 찾는다고 말해 준다.',
      levels: {
        easy: { mode: 'place', min: 0, max: 10, step: 1, labels: 'all', showValue: true },
        base: { mode: 'place', min: 0, max: 10, step: 1, labels: 'all' },
        challenge: { mode: 'place', min: 0, max: 10, step: 1, labels: 'ends' },
      },
      items: [
        { prompt: '27과 29 사이의 수를 수직선에 놓아 보세요.', toolOptions: { min: 25, max: 32 }, target: { points: [28] }, difficulty: 0.1 },
        { prompt: '39와 41 사이의 수를 수직선에 놓아 보세요.', toolOptions: { min: 36, max: 45 }, target: { points: [40] }, difficulty: 0.18 },
        { prompt: '44 바로 앞의 수를 수직선에 놓아 보세요.', toolOptions: { min: 40, max: 48 }, target: { points: [43] }, difficulty: 0.12 },
      ] },
  ],
  wrap: ['"39 바로 뒤의 수는 무엇이었지요? 왜 40일까요?" 낱개가 9개에서 하나 더 늘면 묶음이 하나 생긴다는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 다음 시간에 수 배열을 소리 내어 읽게 한다.', [
    { type: 'choice', prompt: '19 바로 뒤의 수는 무엇인가요?', options: ['18', '20', '110'], answer: 1, difficulty: 0.15, explain: '낱개가 10개가 되면 묶음이 하나 더 생겨요. 19 바로 뒤의 수는 20이에요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: [36, 37, null, 39, null] }, prompt: '수가 차례로 놓여 있어요. 빈칸에 알맞은 수를 써 보세요.', target: { fill: [38, 40] }, difficulty: 0.15 },
    { type: 'choice', prompt: '46과 48 사이의 수는 무엇인가요?', options: ['45', '47', '49'], answer: 1, difficulty: 0.12, explain: '46 다음이 47, 47 다음이 48이에요. 사이의 수는 47이에요.' },
  ]],
  ws: { title: '수의 순서', items: [
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '21 - 22 - ___ - 24 - ___ - 26', answer: '23, 25' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '37 - ___ - 39 - ___ - 41', answer: '38, 40' },
    { type: 'table', prompt: '바로 앞의 수와 바로 뒤의 수를 쓰세요.', columns: ['바로 앞', '수', '바로 뒤'], cells: [['', '30', ''], ['', '45', ''], ['', '19', '']], answer: '29-31, 44-46, 18-20' },
    { type: 'choice', prompt: '33과 35 사이의 수에 ○ 하세요.', options: ['32', '34', '36'], answer: '34' },
    { type: 'figure', prompt: '점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 25, max: 35, step: 1, labels: 'all', marks: [29] }, caption: BLANK }, { options: { mode: 'read', min: 25, max: 35, step: 1, labels: 'all', marks: [33] }, caption: BLANK }], answer: '29, 33' },
  ], easy: { note: '앞의 수에서 하나씩 세어 가요. 9 다음에는 묶음이 하나 늘어요.', items: [
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '31 - 32 - ___ - 34', answer: '33' },
    { type: 'table', prompt: '바로 뒤의 수를 쓰세요.', columns: ['수', '바로 뒤'], cells: [['27', ''], ['39', '']], answer: '28, 40' },
    { type: 'choice', prompt: '45 바로 앞의 수에 ○ 하세요.', options: ['44', '46'], answer: '44' },
    { type: 'draw', prompt: '34 다음 수와 그 다음 수를 쓰세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생겨요. 수직선에는 눈금마다 숫자가 있고 점의 수도 보여요.', base: '수 배열에서 빈칸을 스스로 채우고, 수직선은 눈금 숫자를 읽으며 점을 놓아요.', challenge: '빈칸이 세 개이고 50이 나와요. 수직선에는 양 끝 숫자만 있어 하나씩 세어요.' },
  notes: '자주 보이는 어려움: ① 39 다음을 310이나 40이 아닌 수로 쓴다 → 낱개가 10이 되면 묶음 하나가 늘어난다. ② 바로 앞과 바로 뒤를 바꾼다 → 앞은 1 작은 수, 뒤는 1 큰 수로 손가락 신호를 정한다. ③ 사이의 수에 두 수 자체를 넣는다 → 두 수는 빼고 가운데를 찾는다. 가장 큰 수는 8차시에서 한다.',
}));
// ───────────────────────────── 8차시 (core) ─────────────────────────────
L.push(lesson(8, {
  title: '세 수와 네 수 중 가장 큰 수, 가장 작은 수',
  objective: '세 수 이상의 수에서 가장 큰 수와 가장 작은 수를 찾아 큰 수부터 또는 작은 수부터 늘어놓을 수 있다.',
  desc: 'a row of four paper trophies of different heights on a shelf, the tallest one wearing a small gold star',
  text: '가장 큰 수는?',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'star', x: 330, y: 80, s: 0.7 }, { motif: 'tree', x: 400, y: 218 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"딸기 상자 세 개에 딸기가 27개, 34개, 21개 들어 있어요. 가장 많은 상자는 어느 것일까요?" 묶음 수부터 견주어 보게 한다. 두 수씩만 견주어 하나를 빠뜨리는 학생이 있다 — 세 수를 모두 견주어야 한다고 짚는다.', '딸기 상자 세 개 중 딸기가 가장 많은 상자는 어느 것일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 가장 큰 수·가장 작은 수 고르기', minutes: 10, tool: 'mindmap',
      task: '수 카드 중에서 가장 큰 수 또는 가장 작은 수를 골라요.',
      teacher: '"묶음이 가장 많은 수부터 찾아볼까요?" 묶음 수를 먼저 견주고 같으면 낱개를 견주게 한다. 42와 49가 함께 있을 때 둘 다 묶음이 4개인데 42를 고르는 학생이 있다 — 낱개 2와 9를 견주게 한다.',
      levels: ML('가장 큰 수, 가장 작은 수'),
      items: [
        pk('세 수 중 가장 큰 수를 골라 보세요.', '가장 큰 수, 가장 작은 수', [27, 34, 21], [34], 0.1, '가장 큰 수'),
        pk('네 수 중 가장 큰 수를 골라 보세요.', '가장 큰 수, 가장 작은 수', [45, 38, 42, 49], [49], 0.18, '가장 큰 수'),
        pk('세 수 중 가장 작은 수를 골라 보세요.', '가장 큰 수, 가장 작은 수', [38, 24, 31], [24], 0.12, '가장 작은 수'),
        pk('이번에도 가장 작은 수를 골라 보세요.', '가장 큰 수, 가장 작은 수', [16, 30, 25], [16], 0.1, '가장 작은 수'),
      ] },
    { id: 'a2', title: '활동 2. 큰 수부터, 작은 수부터 늘어놓기', minutes: 9, tool: 'mindmap',
      task: '수 카드를 말한 차례대로 놓아요. 맨 앞이 가장 큰 수 또는 가장 작은 수예요.',
      teacher: '"큰 수부터 놓으면 맨 앞에는 어떤 수가 와야 할까요?" 문제의 "큰 수부터"와 "작은 수부터"를 손가락으로 짚게 한다. 큰 수부터 놓으라는데 작은 수부터 놓는 학생에게는 가장 큰 수를 먼저 고르게 한다.',
      levels: ML('수 늘어놓기'),
      items: [
        { prompt: '큰 수부터 차례로 놓아 보세요.', difficulty: 0.15, toolOptions: { mode: 'order', topic: '수 늘어놓기', cards: nums(33, 48, 25, 40) }, target: ord(48, 40, 33, 25) },
        { prompt: '네 수를 큰 수부터 차례로 놓아 보세요.', difficulty: 0.2, toolOptions: { mode: 'order', topic: '수 늘어놓기', cards: nums(17, 29, 50, 36) }, target: ord(50, 36, 29, 17) },
        { prompt: '작은 수부터 차례로 놓아 보세요.', difficulty: 0.15, toolOptions: { mode: 'order', topic: '수 늘어놓기', cards: nums(22, 46, 34, 15) }, target: ord(15, 22, 34, 46) },
      ] },
    { id: 'a3', title: '활동 3. 세 점을 수직선에 놓기', minutes: 7, tool: 'numberline',
      task: '세 점을 수직선에 놓아요. 가장 오른쪽이 가장 큰 수예요.',
      teacher: '"세 점 중에서 가장 오른쪽에 있는 점이 가장 큰 수예요." 점을 놓은 뒤 가장 큰 수와 가장 작은 수를 말하게 한다. 두 점만 견주고 마는 학생에게는 세 점을 왼쪽부터 차례로 읽게 한다.',
      levels: {
        easy: { mode: 'place', min: 10, max: 50, step: 10, sub: 10, count: 3, labels: 'major', showValue: true },
        base: { mode: 'place', min: 10, max: 50, step: 10, sub: 10, count: 3, labels: 'major' },
        challenge: { mode: 'place', min: 10, max: 50, step: 10, sub: 10, count: 3, labels: 'ends' },
      },
      items: [
        { prompt: '가는 18, 나는 30, 다는 45예요. 세 점을 수직선에 놓아 보세요.', target: { points: [18, 30, 45] }, difficulty: 0.15 },
        { prompt: '가는 22, 나는 49, 다는 36이에요. 세 점을 수직선에 놓아 보세요.', target: { points: [22, 49, 36] }, difficulty: 0.2 },
        { prompt: '가는 41, 나는 13, 다는 27이에요. 세 점을 수직선에 놓아 보세요.', target: { points: [41, 13, 27] }, difficulty: 0.18 },
      ] },
  ],
  wrap: ['"세 수 중 가장 큰 수를 찾을 때 어떻게 했나요?" 묶음 수를 먼저 견주었다는 말이 나오게 한다. 출구 2번을 틀린 학생은 다음 시간에 두 수씩 짝지어 견주는 방법을 다시 보여 준다.', [
    { type: 'choice', prompt: '26, 41, 38 중 가장 큰 수는 무엇인가요?', options: ['26', '41', '38'], answer: 1, difficulty: 0.15, explain: '묶음이 가장 많은 41이 가장 큰 수예요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '가장 작은 수', basket: '가장 작은 수', cards: nums(35, 19, 28) }, prompt: '세 수 중 가장 작은 수를 골라 보세요.', target: { pick: ['19'] }, difficulty: 0.15 },
    { type: 'choice', prompt: '가장 작은 수부터 늘어놓았어요. 알맞은 것에 ○ 하세요.', options: ['12, 25, 31', '31, 25, 12', '25, 12, 31'], answer: 0, difficulty: 0.18, explain: '작은 수부터 놓으면 12, 25, 31이에요.' },
  ]],
  ws: { title: '가장 큰 수와 작은 수', items: [
    { type: 'table', prompt: '가장 큰 수와 가장 작은 수를 쓰세요.', columns: ['세 수', '가장 큰 수', '가장 작은 수'], cells: [['23, 40, 17', '', ''], ['35, 28, 31', '', ''], ['44, 49, 41', '', '']], answer: '40·17, 35·28, 49·41' },
    { type: 'blank', prompt: '큰 수부터 빈칸에 쓰세요.', text: '14, 38, 27 → ___ , ___ , ___', answer: '38, 27, 14' },
    { type: 'choice', prompt: '가장 큰 수에 ○ 하세요.', options: ['19', '32', '28'], answer: '32' },
    { type: 'figure', prompt: '수직선을 보고 가장 큰 수에 ○ 하세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'place', min: 10, max: 50, step: 10, sub: 10, labels: 'major', count: 3 }, state: { points: [16, 43, 29] }, caption: '가 ___ , 나 ___ , 다 ___ 가장 큰 수는 ___' }], answer: '가 16, 나 43, 다 29, 가장 큰 수는 나(43)' },
    { type: 'short', prompt: '세 수 중 가장 작은 수를 어떻게 찾았는지 한 문장으로 써 보세요.' },
  ], easy: { note: '묶음이 가장 적은 수가 가장 작은 수예요. 묶음이 같으면 낱개를 견주어요.', items: [
    { type: 'table', prompt: '가장 큰 수를 쓰세요.', columns: ['세 수', '가장 큰 수'], cells: [['21, 35, 18', ''], ['42, 29, 37', '']], answer: '35, 42' },
    { type: 'blank', prompt: '작은 수부터 빈칸에 쓰세요.', text: '31, 24 → ___ , ___', answer: '24, 31' },
    { type: 'choice', prompt: '가장 작은 수에 ○ 하세요.', options: ['16', '43', '27'], answer: '16' },
    { type: 'draw', prompt: '수 25, 18, 37을 작은 수부터 써 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생겨요. 수직선에는 점의 수가 보여요.', base: '수 카드에는 수만 있어요. 가장 큰 수를 스스로 찾아 골라요.', challenge: '네 수 중에서 고르고, 수직선에는 양 끝 숫자만 있어요.' },
  notes: '자주 보이는 어려움: ① 두 수만 견주고 나머지를 빠뜨린다 → 세 수를 모두 읽고 견준다. ② 묶음이 같은 수(42와 49)에서 묶음만 견주다 멈춘다 → 같으면 낱개를 견준다. ③ 큰 수부터와 작은 수부터를 거꾸로 놓는다 → 맨 앞에 올 수를 먼저 말하게 한다. 가르기는 9차시에서 한다.',
}));
// ───────────────────────────── 9차시 (core) ─────────────────────────────
L.push(lesson(9, {
  title: '몇십 몇을 묶음과 낱개로 가르기',
  objective: '20부터 50까지의 수를 묶음의 수와 낱개의 수 두 수로 가르고, 다시 모아 하나의 수로 말할 수 있다.',
  desc: 'a boy splitting a box of forty-seven crayons into four full bundles of ten and seven loose crayons',
  text: '47은 40과 7',
  layers: [{ motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'tree', x: 390, y: 216, s: 1.1 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"크레파스가 47자루 있어요. 10자루씩 묶으면 몇 묶음이고 낱개는 몇 자루일까요?" 묶음 4개와 낱개 7개를 나누어 보이며 "47은 40과 7로 가를 수 있어요"라고 말해 준다. 가른 두 수를 다시 합치면 47이 된다는 것을 확인하게 한다. 7을 70으로 쓰는 학생이 있으면 낱개 7개는 7이라고 짚는다.', '크레파스 47자루를 묶음과 낱개로 가르면 어떻게 될까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 수를 둘로 가르고 빈칸 채우기', minutes: 10, tool: 'story',
      task: '수를 묶음의 수와 낱개의 수로 갈라요. 말풍선의 빈칸에 알맞은 수를 넣어요.',
      teacher: '"23은 20과 몇으로 가를 수 있을까요?" 묶음은 몇십, 낱개는 몇이라고 말하게 한다. 23을 20과 23으로 말하는 학생이 있다 — 20과 23을 합치면 43이 된다는 것을 보여 준다.',
      levels: LVF,
      items: [
        fl('수를 묶음의 수와 낱개의 수로 가르고 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '23은 20과 ___이야.', 3], ['준호', 'tree', '38은 30과 ___이야.', 8]], [2, 5], 0.1),
        fl('이번에는 앞의 수나 뒤의 수를 찾아 빈칸에 넣어 보세요.', [['민지', 'flower', '41은 40과 ___이야.', 1], ['준호', 'leaf', '26은 ___과 6이야.', 20]], [10, 4], 0.15),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '47은 40과 ___이야.', 7], ['준호', 'cloud', '35는 ___과 5로 가를 수 있어.', 30]], [3, 25], 0.2),
        fl('50을 두 수로 가르는 방법이에요. 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '50은 40과 ___로도 가를 수 있어.', 10], ['준호', 'tree', '50은 ___과 20으로도 가를 수 있어.', 30]], [5, 40], 0.25),
      ] },
    { id: 'a2', title: '활동 2. 두 수를 모아 하나의 수로', minutes: 8, tool: 'mindmap',
      task: '"20과 4"를 모으면 24예요. 두 수를 모은 수 카드를 놓아요.',
      teacher: '"20과 4를 모으면 몇일까요?" 20 옆에 낱개 4개를 놓아 이어 세게 한다. 20과 4를 합쳐 6이라고 하는 학생이 있다 — 20은 묶음 2개이니 20 뒤에 이어 센다고 말해 준다.',
      levels: ML('모아서 하나의 수'),
      items: [
        mt('두 수를 모아 하나의 수로 만들어 보세요.', '모아서 하나의 수', [['20과 4', 24], ['30과 6', 36], ['40과 1', 41]], [24, 36, 41, 14], 0.12),
        mt('이번에는 네 칸이에요. 모아서 이어 보세요.', '모아서 하나의 수', [['10과 5', 15], ['20과 8', 28], ['30과 9', 39], ['40과 7', 47]], [15, 28, 39, 47, 17], 0.18),
        mt('두 수를 모은 수를 이어 보세요.', '모아서 하나의 수', [['30과 2', 32], ['20과 10', 30], ['40과 10', 50]], [32, 30, 50, 22], 0.22),
      ] },
    { id: 'a3', title: '활동 3. 묶음에서 낱개를 더 세기', minutes: 8, tool: 'numberline',
      task: '묶음의 수에서 출발해 낱개만큼 한 칸씩 뛰어요. 어디에 닿는지 읽어요.',
      teacher: '"30에서 한 칸씩 4번 뛰면 어디에 닿을까요?" 뛸 때마다 31, 32, 33, 34를 소리 내어 세게 한다. 4칸이 아니라 5칸을 뛰는 학생이 있다 — 출발한 눈금은 세지 않고 다음 칸부터 센다고 말해 준다.',
      levels: {
        easy: { mode: 'jump', min: 20, max: 50, step: 10, sub: 10, labels: 'major', fixedFrom: 20, showValue: true },
        base: { mode: 'jump', min: 20, max: 50, step: 10, sub: 10, labels: 'major', fixedFrom: 20 },
        challenge: { mode: 'jump', min: 20, max: 50, step: 10, sub: 10, labels: 'ends', fixedFrom: 20 },
      },
      items: [
        { prompt: '20에서 한 칸씩 3번 뛰어 보세요. 몇에 닿나요?', target: { from: 20, size: 1, count: 3 }, difficulty: 0.1 },
        { prompt: '30에서 한 칸씩 6번 뛰어 보세요. 몇에 닿나요?', toolOptions: { fixedFrom: 30 }, target: { from: 30, size: 1, count: 6 }, difficulty: 0.15 },
        { prompt: '40에서 한 칸씩 8번 뛰어 보세요. 몇에 닿나요?', toolOptions: { fixedFrom: 40 }, target: { from: 40, size: 1, count: 8 }, difficulty: 0.2 },
      ] },
  ],
  wrap: ['"36은 30과 몇으로 가를 수 있었나요? 다시 모으면 몇일까요?" 갈랐다가 모으는 말을 이어서 하게 한다. 출구 1번을 틀린 학생은 묶음과 낱개 수를 바꾸는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '28은 20과 몇으로 가를 수 있나요?', options: ['2', '8', '28'], answer: 1, difficulty: 0.12, explain: '28은 묶음이 20이고 낱개가 8이에요. 20과 8로 가를 수 있어요.' },
    { type: 'tool', tool: 'story', options: { mode: 'fill', cards: [{ id: '4', text: '4' }, { id: '40', text: '40' }, { id: '14', text: '14' }], slots: [{ id: 'b1', who: '민지', motif: 'sun', label: '44는 ___과 4로 가를 수 있어.' }] }, prompt: '빈칸에 알맞은 수를 넣어 보세요.', target: { fill: { b1: '40' } }, difficulty: 0.18 },
    { type: 'choice', prompt: '30과 5를 모으면 몇이 되나요?', options: ['8', '35', '53'], answer: 1, difficulty: 0.15, explain: '30 뒤에 낱개 5개가 붙어 35예요.' },
  ]],
  ws: { title: '수 가르기와 모으기', items: [
    { type: 'table', prompt: '수를 가르고 빈칸을 채우세요.', columns: ['수', '묶음의 수', '낱개의 수'], cells: [['25', '20', ''], ['32', '', '2'], ['47', '40', '']], answer: '5, 30, 7' },
    { type: 'blank', prompt: '두 수를 모아 쓰세요.', text: '20과 9 → ___ , 40과 3 → ___', answer: '29, 43' },
    { type: 'choice', prompt: '34를 바르게 가른 것에 ○ 하세요.', options: ['30과 4', '3과 40', '30과 34'], answer: '30과 4' },
    { type: 'figure', prompt: '수직선에서 30에서 한 칸씩 뛰어 닿은 점의 수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', min: 30, max: 40, step: 1, labels: 'all', marks: [35] }, caption: '30과 ___ → ___' }], answer: '30과 5 → 35' },
    { type: 'short', prompt: '내 나이나 번호에서 몇십 몇이 되는 수를 하나 정해 묶음과 낱개로 갈라 써 보세요.' },
  ], easy: { note: '몇십 몇은 묶음의 수(몇십)와 낱개의 수로 갈라요. 다시 모으면 처음 수가 돼요.', items: [
    { type: 'table', prompt: '수를 가르고 빈칸을 채우세요.', columns: ['수', '묶음의 수', '낱개의 수'], cells: [['24', '20', ''], ['36', '', '6']], answer: '4, 30' },
    { type: 'blank', prompt: '두 수를 모아 쓰세요.', text: '20과 5 → ___', answer: '25' },
    { type: 'choice', prompt: '41을 바르게 가른 것에 ○ 하세요.', options: ['40과 1', '4와 10'], answer: '40과 1' },
    { type: 'draw', prompt: '○를 26개 그리고 20개와 6개로 나누어 묶어 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말하고 돌아와요. 수직선에는 뛴 수가 보여요.', base: '빈칸에 들어갈 수를 스스로 골라요. 수직선에는 큰 눈금 숫자만 있어요.', challenge: '함정 카드가 한 장 더 있고, 50을 여러 방법으로 가르는 문제가 나와요. 수직선에는 양 끝 숫자만 있어요.' },
  notes: '자주 보이는 어려움: ① 낱개 수를 70처럼 몇십으로 쓴다 → 낱개 7개는 7이다. ② 가른 두 수를 더해 처음 수와 같은지 확인하지 않는다 → 20과 3을 모으면 23인지 소리 내어 확인한다. ③ 20과 4를 모아 6이라고 쓴다 → 20 뒤에 이어 세어 24가 된다. 다른 방법으로 가르기는 10차시에서 한다.',
}));
// ───────────────────────────── 10차시 (practice) ─────────────────────────────
const TW = {
  easy: { twoColor: true, item: 'apple', showWord: true, cellNumbers: true, showGoal: true },
  base: { twoColor: true, item: 'apple', showCount: false, askNumber: true, showGoal: true },
  challenge: { twoColor: true, item: 'chip', showCount: false, askNumber: true, scatter: true },
};
const TWF = {
  easy: { twoColor: true, item: 'apple', showWord: true, cellNumbers: true },
  base: { twoColor: true, item: 'apple', showWord: true },
  challenge: { twoColor: true, item: 'chip', showCount: false, scatter: true },
};
L.push(lesson(10, {
  title: '열 개를 두 가지 색으로 가르고 모으기',
  objective: '10을 두 수로 가르고, 두 수를 모아 10이 되는 짝을 여러 가지로 말할 수 있다.',
  desc: 'a girl sorting ten apples into a red basket and a green basket on a sunny picnic cloth',
  text: '10은 얼마와 얼마?',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.1 }, { motif: 'apple', x: 74, y: 182, s: 0.4 }, { motif: 'apple', x: 108, y: 172, s: 0.4 }, { motif: 'flower', x: 360, y: 236 }, { motif: 'bird', x: 280, y: 84 }],
  intro: ['"사과 열 개를 빨간 바구니와 초록 바구니에 나누어 담아요. 빨간 바구니에 4개를 담으면 초록 바구니에는 몇 개일까요?" 시연 단추로 빨간 사과 4개와 초록 사과 6개가 놓이는 모습을 보여 준다. "4와 6을 모으면 다시 10이에요"라고 말해 준다. 한쪽이 늘면 다른 쪽이 줄어드는 것을 알아차리는 학생을 칭찬한다.', '사과 열 개를 빨간 사과와 초록 사과로 나누어 봐요.'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [4, 0] }, { parts: [4, 6] }] },
  acts: [
    { id: 'a1', title: '활동 1. 두 수를 모아 열 만들기', minutes: 9, tool: 'tenframe',
      task: '빨간 사과와 초록 사과를 수만큼 놓고 모두 몇 개인지 알아봐요.',
      teacher: '"빨간 사과 4개 뒤에 초록 사과를 이어서 놓아요." 앞의 수에서 이어 세는 모습을 칭찬한다. 모은 수를 10이 아니라 10보다 작은 수로 말하는 학생에게는 칸이 가득 찼는지 보게 한다.',
      levels: TW,
      items: [
        { prompt: '빨간 사과 4개, 초록 사과 6개. 모으면 모두 몇 개일까요?', target: { parts: [4, 6], ask: 'total' }, difficulty: 0.1 },
        { prompt: '빨간 사과 7개, 초록 사과 3개. 모으면 모두 몇 개일까요?', target: { parts: [7, 3], ask: 'total' }, difficulty: 0.12 },
        { prompt: '빨간 사과 2개, 초록 사과 8개. 모으면 모두 몇 개일까요?', target: { parts: [2, 8], ask: 'total' }, difficulty: 0.15 },
        { prompt: '빨간 사과 5개, 초록 사과 5개. 모으면 모두 몇 개일까요?', target: { parts: [5, 5], ask: 'total' }, difficulty: 0.1 },
      ] },
    { id: 'a2', title: '활동 2. 열을 한쪽 수로 가르기', minutes: 9, tool: 'tenframe',
      task: '10개를 모두 놓아요. 빨간 사과 수를 맞추고 초록 사과는 몇 개인지 세어요.',
      teacher: '"10을 3과 몇으로 가를 수 있을까요?" 10개를 먼저 채우고 빨간 사과 수를 맞추게 한다. 10을 3과 3으로 가르는 학생이 있다 — 모두 몇 개인지 칸을 가득 채워 확인하게 한다.',
      levels: TW,
      items: [
        { prompt: '10을 3과 몇으로 갈라요. 빨간 사과는 3개, 초록 사과는 몇 개?', target: { total: 10, parts: [3, null], ask: 'b' }, difficulty: 0.15 },
        { prompt: '10을 6과 몇으로 갈라요. 빨간 사과는 6개, 초록 사과는 몇 개?', target: { total: 10, parts: [6, null], ask: 'b' }, difficulty: 0.15 },
        { prompt: '10을 8과 몇으로 갈라요. 빨간 사과는 8개, 초록 사과는 몇 개?', target: { total: 10, parts: [8, null], ask: 'b' }, difficulty: 0.18 },
        { prompt: '10을 1과 몇으로 갈라요. 빨간 사과는 1개, 초록 사과는 몇 개?', target: { total: 10, parts: [1, null], ask: 'b' }, difficulty: 0.2 },
      ] },
    { id: 'a3', title: '활동 3. 열을 여러 가지로 가르는 짝 활동', minutes: 8, tool: 'tenframe', pair: true,
      task: '10을 여러 가지 방법으로 갈라 봐요. 짝과 어떤 방법을 찾았는지 견주어 봐요.',
      teacher: '"빨간 사과가 하나 늘면 초록 사과는 어떻게 될까요?" 짝과 찾은 방법을 말하고 하나 늘면 하나 줄어드는 규칙을 찾게 한다. 5와 5만 가른 학생에게는 다른 방법을 하나 더 찾아보라고 말한다.',
      levels: TWF,
      items: [
        { prompt: '사과 10개를 두 가지 색으로 갈라 보세요. 어떻게 가를지는 스스로 정해요.', target: { total: 10, parts: [null, null] }, difficulty: 0.1 },
        { prompt: '10을 5와 5는 빼고 다른 방법으로 갈라 보세요.', target: { total: 10, parts: [null, null], avoid: [[5, 5]] }, difficulty: 0.2,
          conclude: '10은 1과 9, 2와 8, 3과 7, 4와 6, 5와 5로 가를 수 있어요. 한쪽이 1 늘면 다른 쪽은 1 줄어요.' },
        { prompt: '더 해 보기: 10을 똑같은 두 수로 갈라 보세요.', target: { total: 10, parts: [5, 5] }, extra: true, difficulty: 0.15 },
      ] },
  ],
  wrap: ['"10을 가르는 방법을 몇 가지 찾았나요?" 짝이 찾은 방법을 1과 9부터 차례로 칠판에 모아 규칙을 함께 말한다. 출구 2번을 틀린 학생은 다음 시간에 사과를 직접 나누어 보게 한다.', [
    { type: 'choice', prompt: '4와 6을 모으면 몇이 되나요?', options: ['9', '10', '11'], answer: 1, difficulty: 0.12, explain: '4에서 6을 이어 세면 10이에요.' },
    { type: 'choice', prompt: '10은 7과 몇으로 가를 수 있나요?', options: ['2', '3', '4'], answer: 1, difficulty: 0.2, explain: '7과 3을 모으면 10이라서 10은 7과 3으로 가를 수 있어요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true }, prompt: '10을 4와 몇으로 갈라요. 하늘색 칩은 4개, 주황색 칩은 몇 개?', target: { total: 10, parts: [4, null], ask: 'b' }, difficulty: 0.2 },
  ]],
  ws: { title: '10 가르기와 모으기', items: [
    { type: 'figure', prompt: '두 가지 색 사과를 모으면 모두 몇 개인가요? 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [3, 7] }, caption: BLANK }, { state: { parts: [6, 4] }, caption: BLANK }, { state: { parts: [1, 9] }, caption: BLANK }], answer: '10, 10, 10' },
    { type: 'table', prompt: '10이 되도록 빈칸에 알맞은 수를 쓰세요.', columns: ['한쪽', '다른 쪽', '모두'], cells: [['2', '', '10'], ['', '5', '10'], ['9', '', '10']], answer: '8, 5, 1' },
    { type: 'choice', prompt: '10이 되는 짝에 ○ 하세요.', options: ['3과 6', '4와 6', '5과 4'], answer: '4와 6' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10은 8과 ___ , 10은 ___ 과 7이에요.', answer: '2, 3' },
    { type: 'draw', prompt: '○ 10개를 두 가지 색으로 나누어 칠하고 어떻게 나누었는지 수로 써 보세요.' },
  ], easy: { note: '10개를 모두 채우고 나눠요. 한쪽이 늘면 다른 쪽이 줄어요.', items: [
    { type: 'figure', prompt: '두 가지 색 사과를 모으면 모두 몇 개인가요?', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [5, 5] }, caption: BLANK }, { state: { parts: [2, 8] }, caption: BLANK }], answer: '10, 10' },
    { type: 'table', prompt: '10이 되도록 빈칸에 알맞은 수를 쓰세요.', columns: ['한쪽', '다른 쪽', '모두'], cells: [['3', '', '10'], ['', '6', '10']], answer: '7, 4' },
    { type: 'choice', prompt: '10이 되는 짝에 ○ 하세요.', options: ['5와 5', '5와 4'], answer: '5와 5' },
    { type: 'draw', prompt: '○ 10개 중 3개만 칠하고, 남은 것은 몇 개인지 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 "10 = 3 + □" 같은 목표가 나와요. 두 가지 색을 놓을 때마다 개수가 보여요.', base: '수 카드가 가려져 스스로 세어요. 놓은 뒤 몇 개인지 수를 직접 골라요.', challenge: '칩이 칸 여기저기에 흩어져 들어가서 줄로 세기 어려워요. 다른 방법으로 가르는 문제도 있어요.' },
  notes: '자주 보이는 어려움: ① 두 수를 모았는데 칸이 가득 차지 않았는데도 10이라고 한다 → 칸을 가득 채워 세어 본다. ② 가르기에서 한쪽만 놓고 멈춘다 → 모두 10개가 되게 먼저 채운다. ③ 한쪽이 늘면 다른 쪽이 줄어드는 규칙을 모른다 → 짝 활동에서 방법을 차례로 나열한다. 몇십 몇의 가르기는 11차시에서 한다.',
}));
// ───────────────────────────── 11차시 (core) ─────────────────────────────
L.push(lesson(11, {
  title: '같은 수를 여러 가지 두 수로 가르고 모으기',
  objective: '20부터 50까지의 수를 묶음과 낱개가 아닌 여러 가지 두 수로 갈라 보고, 두 수를 모아 같은 수가 되는지 확인할 수 있다.',
  desc: 'two children arranging a row of thirty-five colorful beads into different pairs of groups on a long wooden tray',
  text: '35는 어떻게 가를까?',
  layers: [{ motif: 'house', x: 100, y: 214, s: 0.9 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'star', x: 250, y: 80, s: 0.7 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"구슬 35개를 두 통에 나누어 담아요. 30개와 5개로 나눌 수도 있고 20개와 15개로 나눌 수도 있어요." 여러 가지로 나누어도 모으면 모두 35개인 것을 이어 세어 확인한다. 가를 때마다 합이 바뀐다고 생각하는 학생에게는 처음 수를 먼저 말하고 시작하게 한다.', '구슬 35개를 두 통에 나누는 방법은 몇 가지일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 같은 수가 되는 가르기 식 모으기', minutes: 9, tool: 'mindmap',
      task: '가르기 식 카드를 모으면 어느 수가 되는지 보고 알맞은 칸에 놓아요.',
      teacher: '"20과 6을 모으면 몇일까요? 10과 16은요?" 두 수를 소리 내어 이어 센 뒤 같은 수가 되는 카드를 한 칸에 모으게 한다. 10과 16을 16으로만 읽는 학생에게는 10 뒤에 16개를 이어 센다고 말해 준다.',
      levels: ML('같은 수 가르기'),
      items: [
        srt('두 수를 모았을 때 같은 수가 되는 것끼리 나누어 보세요.', '같은 수 가르기', { '26': ['20과 6', '10과 16', '25와 1'], '34': ['30과 4', '24와 10', '33과 1'] }, 0.15),
        srt('이번에는 40보다 큰 수예요. 같은 수끼리 나누어 보세요.', '같은 수 가르기', { '42': ['40과 2', '30과 12', '41과 1'], '47': ['40과 7', '45와 2', '20과 27'] }, 0.2),
        srt('모은 수가 같은 것끼리 나누어 보세요.', '같은 수 가르기', { '19': ['10과 9', '15와 4', '18과 1'], '25': ['20과 5', '12와 13', '24와 1'] }, 0.18),
      ] },
    { id: 'a2', title: '활동 2. 가른 수 중 빠진 수 채우기', minutes: 9, tool: 'story',
      task: '수를 두 수로 갈랐어요. 말풍선의 빈칸에 알맞은 수를 넣어요.',
      teacher: '"25는 10과 몇으로 가를 수 있을까요?" 10에서 25까지 이어 세어 보게 한다. 25는 10과 25라고 하는 학생이 있다 — 10과 25를 모으면 35가 된다는 것을 보여 준다.',
      levels: LVF,
      items: [
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '25는 10과 ___이야.', 15], ['준호', 'tree', '42는 30과 ___이야.', 12]], [5, 20], 0.18),
        fl('앞의 수 또는 뒤의 수를 찾아 빈칸에 넣어 보세요.', [['민지', 'flower', '33은 20과 ___이야.', 13], ['준호', 'leaf', '47은 ___과 17이야.', 30]], [3, 14], 0.22),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '28은 10과 ___이야.', 18], ['준호', 'cloud', '39는 ___과 9로 가를 수 있어.', 30]], [8, 29], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 합이 같은 짝 고르기', minutes: 8, tool: 'mindmap',
      task: '두 수를 모아 목표 수가 되는 짝을 모두 골라요.',
      teacher: '"35가 되는 짝을 모두 골라 봐요." 짝마다 이어 세어 합을 확인하게 한다. 한 짝만 고르고 멈추는 학생이 있다 — 맞는 짝이 여럿이라고 말해 준다.',
      levels: ML('합이 같은 짝'),
      items: [
        pk('두 수를 모아 35가 되는 짝을 모두 골라 보세요.', '합이 같은 짝', ['30과 5', '20과 15', '25와 10', '40과 5', '10과 20'], ['30과 5', '20과 15', '25와 10'], 0.2, '35가 되는 짝'),
        pk('두 수를 모아 40이 되는 짝을 모두 골라 보세요.', '합이 같은 짝', ['30과 10', '20과 20', '35와 5', '25와 10', '10과 20'], ['30과 10', '20과 20', '35와 5'], 0.22, '40이 되는 짝'),
        pk('두 수를 모아 28이 되는 짝을 모두 골라 보세요.', '합이 같은 짝', ['20과 8', '10과 18', '14와 14', '20과 10', '8과 10'], ['20과 8', '10과 18', '14와 14'], 0.25, '28이 되는 짝'),
      ] },
  ],
  wrap: ['"35를 20과 몇으로 가를 수 있었나요? 다시 모으면 몇이 될까요?" 가른 두 수를 이어 세어 확인하게 한다. 출구 2번을 틀린 학생은 다음 시간에 이어 세기로 두 수를 모아 보게 한다.', [
    { type: 'choice', prompt: '24와 같은 수에 ○ 하세요. 두 수를 모아 보아요.', options: ['20과 4', '10과 4', '20과 40'], answer: 0, difficulty: 0.15, explain: '20 뒤에 4를 이어 세면 24예요.' },
    { type: 'choice', prompt: '30은 10과 몇으로 가를 수 있나요?', options: ['10', '20', '30'], answer: 1, difficulty: 0.2, explain: '10과 20을 모으면 30이라서 30은 10과 20으로 가를 수 있어요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '합이 같은 짝', basket: '45가 되는 짝', cards: ['40과 5', '30과 15', '20과 20', '25과 20'] }, prompt: '두 수를 모아 45가 되는 짝을 모두 골라 보세요.', target: { pick: ['40과 5', '30과 15'] }, difficulty: 0.25 },
  ]],
  ws: { title: '여러 가지로 가르기', items: [
    { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['수', '가르기', '가르기'], cells: [['27', '20과 ', '10과 '], ['36', '30과 ', '20과 ']], answer: '27: 7, 17 / 36: 6, 16' },
    { type: 'blank', prompt: '두 수를 모아 쓰세요.', text: '30과 8 → ___ , 20과 15 → ___', answer: '38, 35' },
    { type: 'choice', prompt: '두 수를 모으면 41이 되는 짝에 ○ 하세요.', options: ['40과 1', '30과 10', '20과 2'], answer: '40과 1' },
    { type: 'choice', prompt: '25를 가른 것이 아닌 것에 ○ 하세요.', options: ['20과 5', '10과 15', '15와 20'], answer: '15와 20' },
    { type: 'short', prompt: '30을 두 수로 가르는 방법을 두 가지 써 보세요.' },
  ], easy: { note: '두 수를 이어 세어 모아 보아요. 가르는 방법은 하나가 아니에요.', items: [
    { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['수', '가르기'], cells: [['27', '20과 '], ['34', '30과 ']], answer: '7, 4' },
    { type: 'blank', prompt: '두 수를 모아 쓰세요.', text: '20과 9 → ___', answer: '29' },
    { type: 'choice', prompt: '두 수를 모으면 35가 되는 짝에 ○ 하세요.', options: ['30과 5', '30과 3'], answer: '30과 5' },
    { type: 'draw', prompt: '○ 12개를 두 묶음으로 나누어 그리고 수로 써 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말하고 카드가 돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러요. 말풍선 빈칸은 스스로 계산해서 골라요.', challenge: '함정 카드가 한 장 더 있고, 맞는 짝이 세 개나 되어 모두 골라야 해요.' },
  notes: '자주 보이는 어려움: ① 가를 때마다 합이 달라진다고 생각한다 → 처음 수를 먼저 말한다. ② 20과 15를 20+1+5처럼 낱개만 세어 헷갈린다 → 20 뒤에 15를 이어 세어 35로 맞춘다. ③ 맞는 짝을 하나만 찾고 멈춘다 → 짝이 여럿이라고 말하고 하나씩 이어 세어 확인한다. 단원 정리는 12차시에서 한다.',
}));
// ───────────────────────────── 12차시 (wrap) ─────────────────────────────
L.push(lesson(12, {
  title: '50까지의 수를 세고, 견주고, 가르기 단원 정리',
  objective: '50까지의 수를 묶음과 낱개로 세어 쓰고, 두 수를 견주고, 몇십 몇을 두 수로 가르는 것을 스스로 점검할 수 있다.',
  desc: 'a cheerful classroom wall covered with paper number cards from one to fifty and children pointing at their favorite numbers',
  text: '50까지의 수',
  layers: [{ motif: 'house', x: 100, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216, s: 1.1 }, { motif: 'star', x: 150, y: 84, s: 0.6 }, { motif: 'star', x: 330, y: 80, s: 0.6 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"이번 단원에서 열 개씩 묶어 50까지 세어 보았어요. 오늘은 배운 것을 모아 볼까요?" 칠판에 세기, 견주기, 가르기 세 가지를 쓰고 한 가지씩 되새긴다. 이전 시간에 어려워했던 부분을 학생이 직접 고르게 한다.', '50까지의 수를 세고, 견주고, 가르며 배운 것을 모아 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 수 순서 빈칸 채우기', minutes: 8, tool: 'pattern',
      task: '수가 차례로 놓여 있어요. 빈칸에 알맞은 수를 써요.',
      teacher: '"빈칸 앞의 수와 뒤의 수를 소리 내어 읽고 빈칸을 채워 봐요." 49 다음을 50으로 쓰는지 살핀다. 낱개가 9에서 다음 칸으로 넘어갈 때 묶음이 늘어나는 것을 놓치는 학생에게 칸을 짚으며 다시 세게 한다.',
      levels: LVP,
      items: [
        pt('수가 차례로 놓여 있어요. 빈칸을 채워 보세요.', [38, 39, null, 41, null, 43], [40, 42], 0.12),
        pt('작은 수에서 시작해요. 빈칸을 채워 보세요.', [12, null, 14, null, 16, 17], [13, 15], 0.1),
        pt('끝 수가 50이에요. 빈칸을 채워 보세요.', [46, 47, null, 49, null], [48, 50], 0.18),
      ] },
    { id: 'a2', title: '활동 2. 묶음과 낱개로 세어 쓰기', minutes: 9, tool: 'multiply',
      task: '단추를 10개씩 묶어요. 묶음은 몇 개이고 낱개는 몇 개인지 써요.',
      teacher: '"묶음은 몇 개, 낱개는 몇 개예요? 수로는 어떻게 쓸까요?" 묶음과 낱개를 말한 뒤 수를 쓰게 한다. 낱개가 0인 50을 5로 쓰는 학생이 있다 — 낱개가 없어도 0을 쓴다고 알려 준다.',
      levels: GL,
      items: [
        grp('단추 36개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 36, 3, 6, 0.12),
        grp('단추 42개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 42, 4, 2, 0.12),
        grp('단추 29개를 10개씩 묶어요. 묶음은 몇 개, 낱개는 몇 개인가요?', 29, 2, 9, 0.15),
        grp('단추 40개를 10개씩 묶어요. 묶음은 몇 개인가요?', 40, 4, 0, 0.1),
      ] },
    { id: 'a3', title: '활동 3. 크기를 견주어 알맞은 수 고르기', minutes: 9, tool: 'mindmap',
      task: '수 카드에서 조건에 맞는 수를 골라요. 묶음 수를 먼저 견주어요.',
      teacher: '"묶음이 가장 많은 수부터 찾아봐요." 같은 묶음이면 낱개를 견주게 한다. 40보다 큰 수를 고르라는데 40까지 넣는 학생이 있다 — "보다 큰"은 40이 들어가지 않는다고 알려 준다.',
      levels: ML('크기 견주기'),
      items: [
        pk('세 수 중 가장 큰 수를 골라 보세요.', '크기 견주기', [28, 41, 37], [41], 0.12, '가장 큰 수'),
        pk('마지막으로 가장 작은 수를 골라 보세요.', '크기 견주기', [33, 21, 26], [21], 0.12, '가장 작은 수'),
        pk('40보다 큰 수를 모두 골라 보세요.', '크기 견주기', [38, 42, 45, 40, 35], [42, 45], 0.2, '40보다 큰 수'),
      ] },
  ],
  wrap: ['"50까지의 수를 세고 견주고 가르면서 가장 재미있었던 것은 무엇이었나요?" 한 가지를 골라 말하게 하고, 어려웠던 것도 하나 말하게 한다. 출구 질문에서 틀린 문항을 짚어 다음 단원 전에 다시 살핀다.', [
    { type: 'choice', prompt: '10개씩 묶음 4개와 낱개 6개는 모두 몇 개인가요?', options: ['10개', '46개', '64개'], answer: 1, difficulty: 0.15, explain: '묶음 4개는 40이고 낱개 6개를 더해 46이에요.' },
    { type: 'choice', prompt: '37과 43 중 더 큰 수는 무엇인가요?', options: ['37', '43'], answer: 1, difficulty: 0.15, explain: '43은 묶음이 4개, 37은 묶음이 3개예요. 묶음이 더 많은 43이 더 커요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '가르기', slots: [{ id: 's1', label: '45는 40과 몇?' }, { id: 's2', label: '31은 30과 몇?' }], cards: [num(5), num(1), num(15)] }, prompt: '45와 31을 묶음과 낱개로 갈라 알맞은 수를 이어 보세요.', target: { match: { s1: '5', s2: '1' } }, difficulty: 0.2 },
  ]],
  ws: { title: '50까지의 수 정리', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['3', '4', ''], ['4', '0', ''], ['2', '9', '']], answer: '34, 40, 29' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '28 - 29 - ___ - 31 - ___', answer: '30, 32' },
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요. 39와 41 중에서요.', options: ['39', '41'], answer: '41' },
    { type: 'table', prompt: '수를 두 수로 가르고 빈칸을 채우세요.', columns: ['수', '묶음의 수', '낱개의 수'], cells: [['36', '30', ''], ['48', '', '8'], ['25', '20', '']], answer: '6, 40, 5' },
    { type: 'short', prompt: '이번 단원에서 가장 어려웠던 것과 쉬웠던 것을 한 가지씩 써 보세요.' },
  ], easy: { note: '묶음은 10이 몇 번인지 세고, 낱개를 이어서 써요.', items: [
    { type: 'table', prompt: '묶음과 낱개를 수로 쓰세요.', columns: ['묶음', '낱개', '수'], cells: [['2', '3', ''], ['3', '0', '']], answer: '23, 30' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '34 - ___ - 36', answer: '35' },
    { type: 'choice', prompt: '더 큰 수에 ○ 하세요.', options: ['21', '32'], answer: '32' },
    { type: 'draw', prompt: '내가 좋아하는 수 하나를 정해 묶음과 낱개 그림으로 나타내 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 곳에 놓으면 초록 테두리가 생기고, 묶음 판은 맞힌 뒤에 묶음과 낱개 수가 보여요.', base: '수 배열과 묶음 판을 스스로 세어 써요. 카드는 모두 놓은 뒤 확인해요.', challenge: '50이 나오고 40보다 큰 수를 모두 골라야 해요. 묶는 수도 스스로 골라요.' },
  notes: '자주 보이는 어려움: ① 낱개가 0일 때 0을 쓰지 않는다(40을 4로) → 묶음 4개는 40임을 보여 준다. ② 49 다음 수를 410이나 40으로 쓴다 → 낱개가 10이 되면 묶음이 하나 늘어난다. ③ 크기 견주기에서 낱개만 본다 → 묶음 수를 먼저 견준다. 다음 단원 수 100까지는 2학기 1단원에서 이어진다.',
}));

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 1, subject: '수학', unitTitle: UT,
  flow: '9까지의 수를 배운 뒤, 첫 시간에 낱개 열 개를 한 묶음으로 묶어 10을 만들고, 2~3차시에서 묶음 1개와 낱개로 11부터 19까지를 세어 쓰고 읽습니다. 4차시에는 10개씩 묶음의 수와 낱개의 수로 20부터 50까지 세어 쓰고, 5~6차시에서 묶음 수를 먼저, 같으면 낱개 수를 견주어 큰 수와 작은 수를 말합니다. 7~8차시는 수 순서, 바로 앞과 뒤의 수, 사이의 수, 가장 큰 수와 가장 작은 수를 수직선과 카드로 확인합니다. 9~11차시에서 몇십 몇을 묶음과 낱개로 가르고 10을 두 수로 가른 뒤 여러 가지 두 수로 가르고 모으며, 12차시에서 세기·견주기·가르기를 정리합니다.',
  refs: {},
  lessons: L,
});
})();
