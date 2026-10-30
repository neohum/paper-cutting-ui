/* 1학년 1학기 1. 9까지의 수 — 단원 파일(차시 12개 가운데 5차시는 기존 차시 g1-math-count9).
 * 흐름: 1~5 세어 놓기(1) → 1~5 읽고 짝짓기(2) → 6~9 세어 놓기(3) → 수 카드 순서·빈칸(4) → 1만큼 더 큰 수·작은 수와 0(5, 기존)
 *      → 수 줄에서 앞뒤 수·거꾸로 세기(6) → 몇째(7) → 몇 개와 몇째 가르기(8) → 점 수 견주기(9) → 가장 큰·작은 수(10)
 *      → 세는 말과 읽는 말(11) → 단원 정리(12).
 */
(function () {
const UID = 'g1-math-1-01', CU = 'g1-수학-1학기-1', UT = '1. 9까지의 수', STD = ['[2수01-01]', '[2수01-03]'];
const BLANK = '(          )';
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
// 교구 단계 묶음: 놓기(사과 개수 만들기) / 세어 고르기(몇 개인지 수 고르기)
const PUT = { easy: { item: 'apple', showWord: true, cellNumbers: true, showGoal: true, revealAfterCheck: true }, base: { item: 'apple', showCount: false }, challenge: { item: 'apple', showCount: false, scatter: true } };
const PUTC = { easy: { item: 'chip', color: 'mint', showWord: true, cellNumbers: true, showGoal: true, revealAfterCheck: true }, base: { item: 'chip', color: 'mint', showCount: false }, challenge: { item: 'chip', color: 'mint', showCount: false, scatter: true } };
const SAY = { easy: { item: 'apple', cellNumbers: true, showCount: false, askNumber: true }, base: { item: 'apple', showCount: false, askNumber: true }, challenge: { item: 'apple', showCount: false, askNumber: true, scatter: true } };
const SAYC = { easy: { item: 'chip', color: 'sky', cellNumbers: true, showCount: false, askNumber: true }, base: { item: 'chip', color: 'sky', showCount: false, askNumber: true }, challenge: { item: 'chip', color: 'sky', showCount: false, askNumber: true, scatter: true } };
const LINE = { easy: { item: 'chip', color: 'mint', lineMode: true }, base: { item: 'chip', color: 'mint', lineMode: true }, challenge: { item: 'chip', color: 'mint', lineMode: true } };
const put = (prompt, count, d) => ({ prompt, target: { count }, difficulty: d });
const say = (prompt, count, d) => ({ prompt, state: { count }, target: { count }, difficulty: d });
const num = (n) => ({ id: String(n), text: String(n), big: String(n) });
const nums = (...a) => a.map(num);
const ord = (...a) => ({ order: a.map(String) });
const pair = (id, title, minutes, task, teacher, prompts, tool, levels) => ({ id, title, minutes, tool, pair: true, task, teacher, levels, items: prompts.map((prompt) => ({ prompt, free: true, difficulty: 0 })) });
const L = [];
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '사과를 하나씩 짚으며 세어 보기',
  objective: '1부터 5까지의 물건을 하나씩 짚으며 세어 모두 몇 개인지 말할 수 있다.',
  desc: 'a friendly rabbit picking apples from a small tree and putting them one by one into a basket',
  text: '사과가 몇 개일까요?',
  layers: [{ motif: 'tree', x: 110, y: 214, s: 1.2 }, { motif: 'apple', x: 92, y: 180, s: 0.42 }, { motif: 'apple', x: 122, y: 170, s: 0.42 }, { motif: 'apple', x: 108, y: 198, s: 0.42 }, { motif: 'flower', x: 330, y: 236 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"바구니에 사과를 담아요. 하나, 둘, 셋… 같이 세어 볼까요?" 시연 단추로 사과가 1개에서 4개로 늘어나는 모습을 보여 주고, 사과를 손가락으로 하나씩 짚으며 센다. "마지막에 센 수가 모두 몇 개인지 알려 줘요"라고 말해 준다. 센 사과를 또 세거나 빼먹는 학생이 있는지 살핀다.', '사과가 몇 개 있나요? 하나씩 짚으며 같이 세어 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 1 }, { count: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 사과를 수만큼 놓기', minutes: 9, tool: 'tenframe',
      task: '말한 수만큼 사과를 놓아요. 하나 놓을 때마다 소리 내어 세어요.',
      teacher: '"사과를 하나 놓을 때마다 수를 말해요." 칸에 놓은 사과를 다시 한 번 짚으며 세게 한다. 놓은 뒤 "몇 개예요?" 하고 물으면 처음부터 다시 세는 학생이 많다 — 마지막에 센 수가 모두의 수라고 말해 준다.',
      levels: PUT,
      items: [put('사과 1개를 놓아 보세요.', 1, 0), put('사과 세 개를 놓아 보세요.', 3, 0.05), put('사과 2개를 놓아 보세요.', 2, 0.03), put('사과 다섯 개를 놓아 보세요.', 5, 0.12)] },
    { id: 'a2', title: '활동 2. 사과를 세어 몇 개인지 고르기', minutes: 11, tool: 'tenframe',
      task: '칸에 놓인 사과를 하나씩 세어요. 모두 몇 개인지 수를 골라요.',
      teacher: '"손가락으로 하나씩 짚으며 세어요. 마지막에 센 수는 몇이에요?" 4개를 5개라고 고른 학생은 처음 센 사과를 한 번 더 센 것이다 — 짚은 사과에 손을 얹고 세게 한다.',
      levels: SAY,
      items: [say('나무에서 딴 사과예요. 모두 몇 개인가요?', 4, 0.05), say('바구니에 담긴 사과예요. 모두 몇 개인가요?', 2, 0.03), say('접시에 놓인 사과예요. 모두 몇 개인가요?', 5, 0.12),
        { prompt: '더 해 보기: 책상 위 사과예요. 모두 몇 개인가요?', state: { count: 3 }, target: { count: 3 }, extra: true, difficulty: 0.08 }] },
    pair('a3', '활동 3. 짝과 손가락으로 수 보여 주기', 6, '짝이 말한 수만큼 사과를 놓아요. 손가락으로도 그 수를 보여 줘요.',
      '짝끼리 번갈아 1부터 5까지의 수를 말하게 한다. "셋!" 하면 손가락 셋을 펴고 사과도 셋을 놓는다. 손가락과 사과의 수가 같은지 서로 세어 보게 한다.',
      ['짝이 말한 수만큼 사과를 놓고 "다 했어요"를 누르세요.', '이번에는 짝과 역할을 바꾸어 놓고 "다 했어요"를 누르세요.', '손가락 수와 사과 수가 같은지 세어 보고 "다 했어요"를 누르세요.'], 'tenframe', PUT),
  ],
  wrap: ['"사과를 셀 때 어떻게 했나요?" 짝에게 하나씩 짚으며 세는 모습을 보여 주게 한다. 출구 1번을 틀린 학생은 한 번 센 것을 또 세는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '"하나, 둘, 셋, 넷" 하고 세었어요. 모두 몇 개인가요?', options: ['3개', '4개', '5개'], answer: 1, difficulty: 0.08, explain: '마지막에 센 수가 모두의 수예요. 넷이니까 4개예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false }, prompt: '칩 2개를 놓아 보세요.', target: { count: 2 }, difficulty: 0.05 },
    { type: 'choice', prompt: '물건을 바르게 세는 방법에 ○ 하세요.', options: ['하나씩 짚으며 세어요', '눈으로 보고 아무 수나 말해요'], answer: 0, difficulty: 0.05, explain: '하나씩 짚으며 세면 빼먹거나 또 세지 않아요.' },
  ]],
  ws: { title: '사과 세기', items: [
    { type: 'figure', prompt: '사과는 몇 개인가요? 세어서 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 2 }, caption: BLANK }, { state: { count: 4 }, caption: BLANK }, { state: { count: 5 }, caption: BLANK }], answer: '2, 4, 5' },
    { type: 'figure', prompt: '수만큼 칸에 ○를 그리세요.', tool: 'tenframe', figures: [{ state: { count: 0 }, caption: '3' }, { state: { count: 0 }, caption: '1' }, { state: { count: 0 }, caption: '4' }], answer: '○를 3개, 1개, 4개 그려요(윗줄부터).' },
    { type: 'choice', prompt: '5개인 것에 ○ 하세요.', options: ['사과 3개', '사과 5개', '사과 4개'], answer: '사과 5개' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '하나, 둘, 셋, 넷, 다섯 → 모두 ___ 개', answer: '5' },
    { type: 'draw', prompt: '교실에서 3개 있는 물건을 찾아 그려 보세요.' },
  ], easy: { note: '하나 센 사과에는 손을 얹어요. 마지막에 센 수가 모두의 수예요.', items: [
    { type: 'figure', prompt: '사과는 몇 개인가요? 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 1 }, caption: BLANK }, { state: { count: 3 }, caption: BLANK }], answer: '1, 3' },
    { type: 'figure', prompt: '수만큼 칸에 ○를 그리세요.', tool: 'tenframe', figures: [{ state: { count: 0 }, caption: '2' }, { state: { count: 0 }, caption: '5' }], answer: '○를 2개, 5개 그려요.' },
    { type: 'choice', prompt: '4개인 것에 ○ 하세요.', options: ['사과 4개', '사과 2개'], answer: '사과 4개' },
    { type: 'draw', prompt: '사과를 2개 그려 보세요.' },
  ] } },
  diff: { easy: '칸에 1~10 번호가 있고 바구니 위에 "셋 · 3" 같은 목표가 나와요. 수를 고르는 문항에서도 칸 번호가 있어 하나씩 짚기 쉬워요.', base: '수 카드가 가려져 스스로 세어요. 놓은 뒤 몇 개인지 수를 직접 골라요.', challenge: '사과가 칸 여기저기에 흩어져 들어가서 "윗줄 5칸" 묶음으로 셀 수 없어요.' },
  notes: '자주 보이는 어려움: ① 같은 사과를 두 번 세거나 빠뜨린다 → 세는 사과에 손을 얹고 칸으로 옮겨 센다(일대일 대응). ② 다 센 뒤 "몇 개?"에 처음부터 다시 센다 → 마지막에 센 수가 모두의 수임을 짚는다. ③ 손가락을 펴는 수와 사과 수가 어긋난다 → 짝과 서로 세어 맞춰 본다. 6~9는 3차시에서 이어서 한다.',
}));
// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '1부터 5까지 수와 읽는 말 짝짓기',
  objective: '1부터 5까지의 수를 읽는 말(하나, 둘, 셋…)과 숫자로 나타내고 서로 짝지을 수 있다.',
  desc: 'a row of five colorful paper balloons floating over a park, each balloon carrying a big number from one to five',
  text: '1 2 3 4 5',
  layers: [{ motif: 'tree', x: 80, y: 216, s: 1.0 }, { motif: 'tree', x: 400, y: 218, s: 1.1, color: 'mint' }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'star', x: 330, y: 84, s: 0.6 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"어제는 사과를 세어 보았어요. 오늘은 수를 말로도 읽고 숫자로도 써 봐요." 시연 단추로 칩이 1개에서 5개까지 늘어나는 모습을 보여 주며 "하나, 둘, 셋, 넷, 다섯"을 함께 읽는다. 숫자 1부터 5를 칠판에 쓰며 "3은 셋이라고 읽어요" 하고 말해 준다.', '칩을 세어 보고 수를 말로 읽고 숫자로 써 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'chip', color: 'sky', showWord: true }, sequence: [{ count: 1 }, { count: 5 }] },
  acts: [
    { id: 'a1', title: '활동 1. 읽는 말을 듣고 칩 놓기', minutes: 9, tool: 'tenframe',
      task: '읽는 말을 보고 그만큼 칩을 놓아요.',
      teacher: '"넷은 몇 개예요? 손가락으로 먼저 보여 줘요." 말로 읽는 수와 칩의 수를 연결한다. 하나·둘·셋·넷·다섯과 일·이·삼·사·오 두 가지 읽기를 모두 인정하되, 지금은 하나·둘·셋을 먼저 쓴다.',
      levels: PUTC,
      items: [put('"넷"만큼 칩을 놓아 보세요.', 4, 0.05), put('"하나"만큼 칩을 놓아 보세요.', 1, 0), put('"다섯"만큼 칩을 놓아 보세요.', 5, 0.1), put('"둘"만큼 칩을 놓아 보세요.', 2, 0.03)] },
    { id: 'a2', title: '활동 2. 숫자와 읽는 말 잇기', minutes: 11, tool: 'mindmap',
      task: '숫자 옆에 읽는 말 카드를 놓아요.',
      teacher: '"3 옆에는 어떤 말을 놓을까요? 손가락 셋을 먼저 펴 봐요." 4를 "다섯"에 잇는 학생은 숫자를 세지 않고 순서로 짐작한 것이다 — 칩 4개를 놓아 세어 보게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '숫자와 읽는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '수 읽기', slots: [{ id: 's1', label: '1', big: '1' }, { id: 's2', label: '3', big: '3' }, { id: 's3', label: '2', big: '2' }], cards: ['셋', '둘', '하나'] }, target: { match: { s1: '하나', s2: '셋', s3: '둘' } }, difficulty: 0.05 },
        { prompt: '이번에는 4와 5를 읽는 말과 이어 보세요.', toolOptions: { mode: 'match', topic: '수 읽기', slots: [{ id: 's1', label: '5', big: '5' }, { id: 's2', label: '4', big: '4' }], cards: ['넷', '다섯', '셋'] }, target: { match: { s1: '다섯', s2: '넷' } }, difficulty: 0.1 },
        { prompt: '숫자 네 개를 읽는 말과 이어 보세요.', toolOptions: { mode: 'match', topic: '수 읽기', slots: [{ id: 's1', label: '4', big: '4' }, { id: 's2', label: '1', big: '1' }, { id: 's3', label: '5', big: '5' }, { id: 's4', label: '2', big: '2' }], cards: ['둘', '다섯', '넷', '하나'] }, target: { match: { s1: '넷', s2: '하나', s3: '다섯', s4: '둘' } }, difficulty: 0.18 },
      ] },
    { id: 'a3', title: '활동 3. 칩을 세어 수 고르기', minutes: 6, tool: 'tenframe',
      task: '칩을 하나씩 세어요. 모두 몇 개인지 숫자를 골라요.',
      teacher: '"마지막에 센 수가 숫자로 몇이에요?" 칩 5개를 4라고 고른 학생은 하나를 빼먹은 것이다 — 칸에 번호를 켜서 짚으며 다시 세게 한다.',
      levels: SAYC,
      items: [say('칩이 놓여 있어요. 모두 몇 개인가요?', 1, 0.02), say('칩이 윗줄에 놓여 있어요. 모두 몇 개인가요?', 5, 0.1), say('칩 몇 개가 놓여 있나요?', 2, 0.04)] },
  ],
  wrap: ['"4는 어떻게 읽어요? 숫자로는 어떻게 써요?" 손가락으로 보여 주며 말하게 한다. 출구 1번을 틀린 학생은 숫자와 읽는 말을 짝짓지 못한 것이므로 칩으로 다시 세게 한다.', [
    { type: 'choice', prompt: '3을 읽는 말은 무엇인가요?', options: ['둘', '셋', '넷'], answer: 1, difficulty: 0.08, explain: '손가락 셋을 펴 보세요. 3은 셋이라고 읽어요.' },
    { type: 'choice', prompt: '"다섯"을 숫자로 쓰면 무엇인가요?', options: ['4', '5', '1'], answer: 1, difficulty: 0.1, explain: '다섯은 손가락 한 손이에요. 숫자로 5예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'apple', showCount: false, askNumber: true }, state: { count: 3 }, prompt: '사과가 몇 개인지 수를 골라요.', target: { count: 3 }, difficulty: 0.1 },
  ]],
  ws: { title: '수를 읽고 쓰기', items: [
    { type: 'figure', prompt: '칩은 몇 개인가요? 숫자로 쓰세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky' }, figures: [{ state: { count: 1 }, caption: BLANK }, { state: { count: 3 }, caption: BLANK }, { state: { count: 5 }, caption: BLANK }], answer: '1, 3, 5' },
    { type: 'table', prompt: '숫자를 보고 읽는 말을 쓰세요.', columns: ['숫자', '1', '2', '4', '5'], cells: [['읽는 말', '하나', '', '', '']], answer: '둘, 넷, 다섯' },
    { type: 'choice', prompt: '"둘"과 같은 수에 ○ 하세요.', options: ['1', '2', '3'], answer: '2' },
    { type: 'blank', prompt: '빈칸에 알맞은 숫자를 쓰세요.', text: '셋 → ___ , 넷 → ___', answer: '3, 4' },
    { type: 'draw', prompt: '○를 4개 그리고, 아래에 숫자 4를 써 보세요.' },
  ], easy: { note: '1은 하나, 2는 둘, 3은 셋이에요. 손가락으로 먼저 보여 줘요.', items: [
    { type: 'figure', prompt: '칩은 몇 개인가요? 숫자로 쓰세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky' }, figures: [{ state: { count: 2 }, caption: BLANK }, { state: { count: 4 }, caption: BLANK }], answer: '2, 4' },
    { type: 'table', prompt: '숫자를 보고 읽는 말을 쓰세요.', columns: ['숫자', '1', '2', '3'], cells: [['읽는 말', '하나', '', '']], answer: '둘, 셋' },
    { type: 'choice', prompt: '"하나"와 같은 수에 ○ 하세요.', options: ['1', '2'], answer: '1' },
    { type: 'draw', prompt: '○를 3개 그려 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고, 수를 읽는 말이 목표로 나와요. 짝 잇기에서는 맞는 짝을 놓으면 바로 초록 테두리가 생겨요.', base: '칸 번호와 목표 없이 칩을 스스로 세어 놓고, 숫자와 읽는 말을 이어요.', challenge: '칩이 흩어져 들어가서 묶어 셀 수 없어요. 칩을 직접 하나씩 짚어 세어야 해요.' },
  notes: '자주 보이는 어려움: ① 숫자의 모양을 거꾸로 쓴다(2, 5) → 손가락으로 허공에 먼저 써 본다. ② 읽는 말을 순서로만 외워 수와 연결하지 못한다 → 칩을 놓아 세며 "셋"을 말하게 한다. ③ 하나·둘·셋(세는 말)과 일·이·삼(읽는 말)을 섞는다 → 두 가지를 모두 인정하고 11차시에서 쓰임을 가른다.',
}));
// ───────────────────────────── 3차시 (core) ─────────────────────────────
L.push(lesson(3, {
  title: '6, 7, 8, 9만큼 세어 놓기',
  objective: '6부터 9까지의 물건을 세어 그 수만큼 놓고, 모두 몇 개인지 말할 수 있다.',
  desc: 'a little bear lining up red and green strawberries in two rows of five on a wooden tray, with a few spaces left empty',
  text: '딸기가 몇 개일까요?',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.1 }, { motif: 'apple', x: 74, y: 182, s: 0.4 }, { motif: 'apple', x: 106, y: 172, s: 0.4 }, { motif: 'house', x: 390, y: 216, s: 0.9 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"어제까지 5까지 세었어요. 오늘은 5보다 더 많은 수를 세어 봐요." 시연 단추로 사과가 6개, 이어서 9개가 되는 모습을 보여 준다. 윗줄 5칸이 다 찬 뒤에 이어서 세는 것을 짚으며 "다섯 다음은 여섯" 하고 소리 내어 읽는다. 5칸 묶음을 보고 바로 5라고 말하는 학생을 칭찬한다.', '사과가 5개보다 많아요. 이어서 세어 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 6 }, { count: 9 }] },
  acts: [
    { id: 'a1', title: '활동 1. 5개 다음부터 이어 세어 놓기', minutes: 10, tool: 'tenframe',
      task: '윗줄 5칸을 채우고 아랫줄로 이어서 놓아요.',
      teacher: '"윗줄이 다 차면 몇 개예요? 그다음 하나를 더 놓으면?" 여섯부터 다시 하나, 둘로 세는 학생에게는 윗줄이 이미 다섯임을 손으로 덮어 보이며 "다섯 다음은 여섯"이라고 이어 준다.',
      levels: PUT,
      items: [put('사과 6개를 놓아 보세요.', 6, 0.1), put('사과 아홉 개를 놓아 보세요.', 9, 0.25), put('사과 7개를 놓아 보세요.', 7, 0.15), put('사과 여덟 개를 놓아 보세요.', 8, 0.2)] },
    { id: 'a2', title: '활동 2. 칩을 세어 몇 개인지 고르기', minutes: 11, tool: 'tenframe',
      task: '칩을 세어요. 모두 몇 개인지 수를 골라요.',
      teacher: '"윗줄은 5개예요. 아랫줄은 몇 개예요? 모두 몇 개일까요?" 8개를 9개로 센 학생에게는 빈칸이 몇 칸인지 물어 10에서 거꾸로 확인하게 한다. 흩어진 칩은 센 칩을 한쪽으로 모으며 세게 한다.',
      levels: SAYC,
      items: [say('칩이 놓여 있어요. 모두 몇 개인가요?', 7, 0.12), say('칩이 많이 놓여 있어요. 모두 몇 개인가요?', 9, 0.22), say('칩을 세어 몇 개인지 골라요.', 6, 0.1),
        { prompt: '더 해 보기: 칩을 세어 몇 개인지 골라요.', state: { count: 8 }, target: { count: 8 }, extra: true, difficulty: 0.2 }] },
    pair('a3', '활동 3. 짝이 말한 수만큼 놓기', 5, '짝이 6부터 9까지의 수를 말하면 그만큼 사과를 놓아요.',
      '짝끼리 번갈아 6부터 9까지의 수를 말하게 한다. "일곱!" 하면 사과 일곱 개를 놓고 짝에게 세어 보게 한다. 놓은 수가 맞는지 둘이 함께 센다.',
      ['짝이 6부터 9 가운데 한 수를 말하면 그만큼 놓고 "다 했어요"를 누르세요.', '짝과 바꾸어 6부터 9 가운데 한 수를 놓고 "다 했어요"를 누르세요.', '놓은 사과를 짝과 함께 세어 보고 "다 했어요"를 누르세요.'], 'tenframe', PUT),
  ],
  wrap: ['"여섯부터 아홉까지 소리 내어 세어 봐요." 손가락을 폈다 접으며 함께 센다. 출구 2번을 틀린 학생은 윗줄 5개를 묶어 보지 못하고 처음부터 센 것이므로 다음 시간에 5칸 묶음을 먼저 말하게 한다.', [
    { type: 'choice', prompt: '"여섯, 일곱, 여덟" 하고 세었어요. 마지막에 센 수는 무엇인가요?', options: ['6', '7', '8'], answer: 2, difficulty: 0.15, explain: '마지막에 센 수가 모두의 수예요. 여덟이니까 8이에요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'sky', showCount: false, askNumber: true }, state: { count: 6 }, prompt: '칩이 몇 개인지 수를 골라요.', target: { count: 6 }, difficulty: 0.15 },
    { type: 'tool', tool: 'tenframe', options: { item: 'apple', showCount: false }, prompt: '사과 9개를 놓아 보세요.', target: { count: 9 }, difficulty: 0.25 },
  ]],
  ws: { title: '6부터 9까지 세기', items: [
    { type: 'figure', prompt: '사과는 몇 개인가요? 세어서 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 6 }, caption: BLANK }, { state: { count: 9 }, caption: BLANK }, { state: { count: 7 }, caption: BLANK }], answer: '6, 9, 7' },
    { type: 'figure', prompt: '수만큼 칸에 ○를 그리세요.', tool: 'tenframe', figures: [{ state: { count: 0 }, caption: '8' }, { state: { count: 0 }, caption: '6' }, { state: { count: 0 }, caption: '9' }], answer: '○를 8개, 6개, 9개 그려요(윗줄부터).' },
    { type: 'choice', prompt: '7개인 것에 ○ 하세요.', options: ['칩 6개', '칩 7개', '칩 8개'], answer: '칩 7개' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '윗줄 5개, 아랫줄 3개 → 모두 ___ 개', answer: '8' },
    { type: 'short', prompt: '9개를 셀 때 5개 묶음을 어떻게 이용했나요? 써 보세요.' },
  ], easy: { note: '윗줄 다섯 칸이 다 차면 5예요. 그다음부터 이어서 세요.', items: [
    { type: 'figure', prompt: '사과는 몇 개인가요? 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 6 }, caption: BLANK }, { state: { count: 8 }, caption: BLANK }], answer: '6, 8' },
    { type: 'figure', prompt: '수만큼 칸에 ○를 그리세요.', tool: 'tenframe', figures: [{ state: { count: 0 }, caption: '7' }, { state: { count: 0 }, caption: '9' }], answer: '○를 7개, 9개 그려요.' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '윗줄 5개, 아랫줄 1개 → 모두 ___ 개', answer: '6' },
    { type: 'choice', prompt: '9개인 것에 ○ 하세요.', options: ['칩 7개', '칩 9개'], answer: '칩 9개' },
  ] } },
  diff: { easy: '칸 번호가 있고 목표 수가 보여요. 칩을 세는 문항에서도 칸 번호가 켜져 있어요.', base: '목표 없이 스스로 세어 놓고, 몇 개인지 수를 골라요.', challenge: '칩이 칸 여기저기에 흩어져 들어가서 윗줄 5개 묶음을 쓸 수 없어요.' },
  notes: '자주 보이는 어려움: ① 6부터 다시 하나, 둘로 센다 → 윗줄이 다섯임을 말하게 하고 이어 센다. ② 8과 9를 헷갈린다 → 빈칸이 몇 칸인지 보고 10에서 거꾸로 생각한다. ③ 칸에 놓을 때 줄을 건너뛴다 → 윗줄부터 차례로 채우게 한다. 수의 순서는 4차시에서 이어서 한다.',
}));
// ───────────────────────────── 4차시 (practice) ─────────────────────────────
L.push(lesson(4, {
  title: '수 카드를 순서대로 놓고 빈칸 채우기',
  objective: '1부터 9까지 수의 순서를 알고, 수 카드를 순서대로 놓거나 빠진 수를 채울 수 있다.',
  desc: 'nine paper stepping stones with big numbers across a small stream, and a duck waiting at the first stone',
  text: '1 2 3 4 5 6 7 8 9',
  layers: [{ motif: 'wave', y: 214 }, { motif: 'tree', x: 70, y: 214, s: 1.0 }, { motif: 'bird', x: 340, y: 84 }, { motif: 'flower', x: 410, y: 236 }],
  intro: ['"징검다리에 수가 쓰여 있어요. 1번 돌 다음은 몇 번일까요?" 칠판에 1부터 9까지를 순서대로 쓰고 손가락으로 짚으며 함께 센다. 돌 하나를 가리고 "여기에 들어갈 수는 몇일까요?" 하고 묻는다. 수 순서를 바로 말하지 못하면 앞의 수부터 다시 세어 보게 한다.', '1부터 9까지 수가 차례로 놓여 있어요. 빠진 수를 찾아봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 수 카드를 작은 수부터 놓기', minutes: 13, tool: 'mindmap',
      task: '수 카드를 작은 수부터 차례로 놓아요.',
      teacher: '"1 다음에는 어떤 수가 올까요?" 수 카드를 놓을 때마다 소리 내어 읽게 한다. 6 다음에 8을 놓는 학생에게는 칩 6개에 하나를 더 놓아 7이 되는 모습을 다시 보여 준다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '수 카드 1, 2, 3, 4를 작은 수부터 놓아요.', toolOptions: { mode: 'order', topic: '수 순서', cards: nums(1, 2, 3, 4) }, target: ord(1, 2, 3, 4), difficulty: 0.05 },
        { prompt: '수 카드 5부터 9까지를 차례로 놓아요.', toolOptions: { mode: 'order', topic: '수 순서', cards: nums(5, 6, 7, 8, 9) }, target: ord(5, 6, 7, 8, 9), difficulty: 0.15 },
        { prompt: '수 카드 3부터 7까지를 작은 수부터 놓아요.', toolOptions: { mode: 'order', topic: '수 순서', cards: nums(3, 4, 5, 6, 7) }, target: ord(3, 4, 5, 6, 7), difficulty: 0.15 },
        { prompt: '수 카드 2, 4, 6, 8을 작은 수부터 놓아요.', toolOptions: { mode: 'order', topic: '수 순서', cards: nums(2, 4, 6, 8) }, target: ord(2, 4, 6, 8), difficulty: 0.2 },
      ] },
    { id: 'a2', title: '활동 2. 빠진 수 카드 찾기', minutes: 13, tool: 'mindmap',
      task: '빈칸에 알맞은 수 카드를 놓아요.',
      teacher: '"2 다음에 오는 수와 4 앞에 오는 수는 같은 수예요. 몇일까요?" 빈칸의 앞과 뒤를 소리 내어 읽게 한다. 7과 9 사이에 6을 넣는 학생은 앞쪽 수만 보고 고른 것이다 — 양쪽 수 사이를 손가락으로 짚어 보게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '빠진 수 카드를 놓아요.', toolOptions: { mode: 'fill', topic: '빠진 수', slots: [{ id: 's1', label: '1, 2, ___, 4' }], cards: nums(3, 5, 7) }, target: { fill: { s1: '3' } }, difficulty: 0.05 },
        { prompt: '빈칸 두 곳에 알맞은 수를 놓아요.', toolOptions: { mode: 'fill', topic: '빠진 수', slots: [{ id: 's1', label: '5, ___, 7' }, { id: 's2', label: '7, 8, ___' }], cards: nums(6, 9, 4) }, target: { fill: { s1: '6', s2: '9' } }, difficulty: 0.12 },
        { prompt: '빈칸 세 곳에 알맞은 수를 놓아요.', toolOptions: { mode: 'fill', topic: '빠진 수', slots: [{ id: 's1', label: '2, ___, 4, 5' }, { id: 's2', label: '4, 5, ___, 7' }, { id: 's3', label: '6, 7, ___, 9' }], cards: nums(3, 6, 8, 1) }, target: { fill: { s1: '3', s2: '6', s3: '8' } }, difficulty: 0.2 },
      ] },
  ],
  wrap: ['"5 다음에 오는 수는 몇이에요? 5 바로 앞의 수는요?" 칠판의 수 순서를 보며 짝과 말하게 한다. 출구 2번을 틀린 학생은 빈칸의 양쪽을 모두 보지 않은 것이므로 다음 시간에 수 줄을 보며 다시 한다.', [
    { type: 'choice', prompt: '6 다음에 오는 수는 무엇인가요?', options: ['5', '7', '8'], answer: 1, difficulty: 0.08, explain: '여섯 다음은 일곱이에요. 7이에요.' },
    { type: 'choice', prompt: '3, 4, ___, 6에서 빈칸에 알맞은 수는 무엇인가요?', options: ['5', '7', '2'], answer: 0, difficulty: 0.12, explain: '4 다음이고 6 앞인 수는 5예요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'order', topic: '수 순서', cards: nums(7, 8, 9) }, prompt: '수 카드 7, 8, 9를 작은 수부터 놓아요.', target: ord(7, 8, 9), difficulty: 0.1 },
  ]],
  ws: { title: '수의 순서', items: [
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '1 - 2 - ___ - 4 - ___', answer: '3, 5' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '5 - ___ - 7 - 8 - ___', answer: '6, 9' },
    { type: 'choice', prompt: '8 바로 앞의 수에 ○ 하세요.', options: ['7', '9', '6'], answer: '7' },
    { type: 'choice', prompt: '4 바로 뒤의 수에 ○ 하세요.', options: ['3', '5', '6'], answer: '5' },
    { type: 'table', prompt: '1부터 9까지 수를 순서대로 써 보세요.', columns: ['1', '2', '', '', '', '', '', '', ''], cells: [['', '', '3', '', '', '', '', '', '']], answer: '1 2 3 4 5 6 7 8 9' },
  ], easy: { note: '손가락으로 앞의 수부터 짚으며 읽어요. 빈칸이 나오면 멈추고 다음 수를 생각해요.', items: [
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '1 - ___ - 3 - 4', answer: '2' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '6 - 7 - ___ - 9', answer: '8' },
    { type: 'choice', prompt: '5 바로 뒤의 수에 ○ 하세요.', options: ['4', '6'], answer: '6' },
    { type: 'choice', prompt: '3 바로 앞의 수에 ○ 하세요.', options: ['2', '4'], answer: '2' },
  ] } },
  diff: { easy: '맞는 칸에 놓은 수 카드에는 바로 초록 테두리가 생겨요. 맞지 않으면 까닭을 말하고 카드가 돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러 순서가 맞는지 봐요.', challenge: '2, 4, 6, 8처럼 한 칸씩 건너뛴 카드와 빈칸이 세 곳인 문제가 나와요.' },
  notes: '자주 보이는 어려움: ① 수 카드를 놓다가 6과 9처럼 모양이 비슷한 카드를 바꾼다 → 칩으로 세어 수를 확인한다. ② 빈칸의 앞 수만 보고 고른다 → 앞과 뒤를 모두 소리 내어 읽는다. ③ 순서를 외운 노래처럼만 말한다 → 칩을 하나 더 놓아 수가 하나 늘어나는 것과 연결한다. 5차시(g1-math-count9)에서 1만큼 더 큰 수와 작은 수를 배운다.',
}));
// ───────────────────────────── 6차시 (practice) ─────────────────────────────
L.push(lesson(6, {
  title: '수 줄에서 앞뒤 수 찾고 거꾸로 세기',
  objective: '수 줄에서 어떤 수의 바로 앞 수와 바로 뒤 수를 찾고, 9부터 거꾸로 수를 셀 수 있다.',
  desc: 'a paper ladder with nine rungs numbered one to nine leaning on an apple tree, and a squirrel climbing down rung by rung',
  text: '거꾸로 세어 봐요',
  layers: [{ motif: 'tree', x: 130, y: 214, s: 1.3 }, { motif: 'bird', x: 330, y: 80 }, { motif: 'flower', x: 350, y: 236 }, { motif: 'cloud', x: 300, y: 40, s: 0.7 }],
  intro: ['"다람쥐가 사다리를 내려가요. 9, 8, 7… 다음은 몇일까요?" 손가락 아홉을 펴고 하나씩 접으며 거꾸로 센다. 수 줄에서 7의 오른쪽 한 칸과 왼쪽 한 칸을 손가락으로 짚어 "뒤의 수, 앞의 수"라고 말해 준다. 1만큼 더 큰 수와 작은 수는 지난 시간에 배운 것임을 떠올리게 한다.', '수 줄에서 앞의 수와 뒤의 수를 찾아봐요. 9부터 거꾸로도 세어 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 수 줄에서 1만큼 더 큰 수, 더 작은 수', minutes: 10, tool: 'tenframe',
      task: '판은 가려져 있어요. 수 줄에서 알맞은 수를 눌러요.',
      teacher: '"1만큼 더 큰 수는 수 줄에서 오른쪽으로 한 칸, 1만큼 더 작은 수는 왼쪽으로 한 칸이에요." 4보다 1만큼 더 작은 수를 5로 누르는 학생은 방향이 반대인 것이다 — 손가락으로 4에서 왼쪽으로 한 칸 가 보게 한다.',
      levels: LINE,
      items: [
        { prompt: '4보다 1만큼 더 큰 수를 수 줄에서 눌러요.', target: { count: 4, more: 1 }, difficulty: 0.1 },
        { prompt: '9보다 1만큼 더 작은 수를 수 줄에서 눌러요.', target: { count: 9, less: 1 }, difficulty: 0.15 },
        { prompt: '1보다 1만큼 더 큰 수를 수 줄에서 눌러요.', target: { count: 1, more: 1 }, difficulty: 0.08 },
        { prompt: '7보다 1만큼 더 작은 수를 수 줄에서 눌러요.', target: { count: 7, less: 1 }, difficulty: 0.2 },
      ] },
    { id: 'a2', title: '활동 2. 큰 수부터 거꾸로 놓기', minutes: 10, tool: 'mindmap',
      task: '수 카드를 큰 수부터 차례로 놓아요.',
      teacher: '"9 다음에 하나 줄이면 몇이에요?" 거꾸로 놓을 때 마지막에 센 수를 가장 앞에 놓는 연습이다. 7 다음에 5를 놓는 학생에게는 6을 건너뛰었다고 짚고 손가락을 하나씩 접으며 다시 세게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '수 카드 5부터 9까지를 큰 수부터 놓아요.', toolOptions: { mode: 'order', topic: '거꾸로 세기', cards: nums(5, 6, 7, 8, 9) }, target: ord(9, 8, 7, 6, 5), difficulty: 0.2 },
        { prompt: '수 카드 1, 2, 3, 4를 큰 수부터 놓아요.', toolOptions: { mode: 'order', topic: '거꾸로 세기', cards: nums(1, 2, 3, 4) }, target: ord(4, 3, 2, 1), difficulty: 0.15 },
        { prompt: '수 카드 4부터 8까지를 큰 수부터 놓아요.', toolOptions: { mode: 'order', topic: '거꾸로 세기', cards: nums(4, 5, 6, 7, 8) }, target: ord(8, 7, 6, 5, 4), difficulty: 0.22 },
      ] },
    { id: 'a3', title: '활동 3. 바로 앞의 수와 바로 뒤의 수 잇기', minutes: 6, tool: 'mindmap',
      task: '말에 알맞은 수 카드를 이어요.',
      teacher: '"5 바로 앞의 수는 5보다 하나 작은 수예요." 앞과 뒤를 반대로 이은 학생에게는 수 줄에서 5의 왼쪽과 오른쪽을 손으로 짚어 보게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '5의 바로 앞의 수와 바로 뒤의 수를 이어요.', toolOptions: { mode: 'match', topic: '5', slots: [{ id: 's1', label: '5 바로 앞의 수' }, { id: 's2', label: '5 바로 뒤의 수' }], cards: nums(4, 6, 8) }, target: { match: { s1: '4', s2: '6' } }, difficulty: 0.1 },
        { prompt: '8의 바로 앞의 수와 바로 뒤의 수를 이어요.', toolOptions: { mode: 'match', topic: '8', slots: [{ id: 's1', label: '8 바로 뒤의 수' }, { id: 's2', label: '8 바로 앞의 수' }], cards: nums(7, 9, 3) }, target: { match: { s1: '9', s2: '7' } }, difficulty: 0.15 },
        { prompt: '3의 바로 앞의 수와 바로 뒤의 수를 이어요.', toolOptions: { mode: 'match', topic: '3', slots: [{ id: 's1', label: '3 바로 앞의 수' }, { id: 's2', label: '3 바로 뒤의 수' }], cards: nums(2, 4, 6) }, target: { match: { s1: '2', s2: '4' } }, difficulty: 0.12 },
      ] },
  ],
  wrap: ['"9부터 거꾸로 세어 봐요." 손가락을 하나씩 접으며 함께 센다. 출구 1번을 틀린 학생은 앞과 뒤를 헷갈린 것이므로 다음 시간에 수 줄 위에 손가락으로 먼저 짚어 보게 한다.', [
    { type: 'choice', prompt: '6 바로 앞의 수는 무엇인가요?', options: ['5', '7', '4'], answer: 0, difficulty: 0.1, explain: '6보다 하나 작은 수, 5예요.' },
    { type: 'choice', prompt: '거꾸로 세었어요. 9, 8, 7 다음에 올 수는 무엇인가요?', options: ['8', '5', '6'], answer: 2, difficulty: 0.12, explain: '하나씩 줄어요. 7 다음은 6이에요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', lineMode: true }, prompt: '2보다 1만큼 더 큰 수를 수 줄에서 눌러요.', target: { count: 2, more: 1 }, difficulty: 0.1 },
  ]],
  ws: { title: '앞의 수와 뒤의 수', items: [
    { type: 'blank', prompt: '바로 앞의 수를 쓰세요.', text: '___ - 7', answer: '6' },
    { type: 'blank', prompt: '바로 뒤의 수를 쓰세요.', text: '4 - ___', answer: '5' },
    { type: 'blank', prompt: '거꾸로 세어 빈칸에 알맞은 수를 쓰세요.', text: '9 - 8 - ___ - 6 - ___', answer: '7, 5' },
    { type: 'choice', prompt: '2보다 1만큼 더 작은 수에 ○ 하세요.', options: ['1', '3', '0'], answer: '1' },
    { type: 'short', prompt: '10을 모르는 친구에게 거꾸로 세는 방법을 한 문장으로 써 보세요.' },
  ], easy: { note: '수를 하나씩 줄이며 세어요. 손가락을 하나씩 접어요.', items: [
    { type: 'blank', prompt: '바로 앞의 수를 쓰세요.', text: '___ - 5', answer: '4' },
    { type: 'blank', prompt: '바로 뒤의 수를 쓰세요.', text: '8 - ___', answer: '9' },
    { type: 'blank', prompt: '거꾸로 세어 빈칸에 알맞은 수를 쓰세요.', text: '5 - 4 - ___ - 2', answer: '3' },
    { type: 'choice', prompt: '3보다 1만큼 더 큰 수에 ○ 하세요.', options: ['2', '4'], answer: '4' },
  ] } },
  diff: { easy: '맞는 칸에 놓은 카드에는 바로 초록 테두리가 생겨요. 수 줄 문항은 판이 가려져 있어도 처음 수가 보여요.', base: '카드를 모두 놓은 뒤 확인을 눌러 맞는지 봐요.', challenge: '카드가 5장이고, 큰 수부터 거꾸로 놓는 문제가 더 나와요.' },
  notes: '자주 보이는 어려움: ① 앞과 뒤를 반대로 센다 → 수 줄에서 왼쪽이 앞(작은 수), 오른쪽이 뒤(큰 수)임을 손으로 짚는다. ② 거꾸로 셀 때 한 수를 건너뛴다 → 손가락을 하나씩 접으며 센다. ③ 0은 아직 세지 않는다고 생각한다 → 5차시(g1-math-count9)의 0을 떠올리게 한다. 몇째는 7차시에서 다룬다.',
}));
// ───────────────────────────── 7차시 (core) ─────────────────────────────
L.push(lesson(7, {
  title: '줄에서 앞에서 몇째인지 말하기',
  objective: '순서를 나타내는 말(첫째, 둘째, 셋째…)을 알고 줄에서 몇째인지 말할 수 있다.',
  desc: 'five paper-cut animals in a line walking toward a small bridge, a rabbit first and a turtle last',
  text: '누가 몇째일까요?',
  layers: [{ motif: 'tree', x: 70, y: 216, s: 1.0 }, { motif: 'bird', x: 200, y: 84 }, { motif: 'flower', x: 400, y: 238 }, { motif: 'house', x: 410, y: 214, s: 0.8 }],
  intro: ['"토끼, 곰, 여우가 달리기를 해요. 누가 먼저 들어왔을까요?" 가장 먼저 들어온 동물을 "첫째", 다음을 "둘째", 그다음을 "셋째"라고 말해 준다. 시연 없이 손가락 하나, 둘, 셋을 펴 보이며 "하나는 첫째, 둘은 둘째" 하고 이어서 읽는다. 몇 개와 몇째를 섞는 학생이 있는지 살핀다.', '줄에서 앞에서 몇째인지 말해 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 들어온 순서대로 이름 놓기', minutes: 10, tool: 'mindmap',
      task: '이야기를 읽고 순서 칸에 이름 카드를 놓아요.',
      teacher: '"토끼가 가장 먼저 들어왔어요. 토끼는 몇째 칸일까요?" 이야기를 한 줄씩 읽으며 칸에 놓게 한다. 첫째 칸에 마지막 동물을 놓는 학생에게는 "가장 먼저 들어온 친구는 앞에서 첫째"라고 말해 준다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '토끼가 먼저, 그다음 곰, 그다음 여우, 마지막은 거북이 들어왔어요. 순서대로 놓아요.', toolOptions: { mode: 'order', topic: '달리기', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['토끼', '곰', '여우', '거북'] }, target: ord('토끼', '곰', '여우', '거북'), difficulty: 0.1 },
        { prompt: '버스에 민지가 먼저 타고, 준호, 수아 순서로 탔어요. 순서대로 놓아요.', toolOptions: { mode: 'order', topic: '버스 타기', slots: ['첫째', '둘째', '셋째'], cards: ['수아', '민지', '준호'] }, target: ord('민지', '준호', '수아'), difficulty: 0.12 },
        { prompt: '다람쥐가 나무를 맨 먼저 올랐고, 그다음 참새, 청설모, 고양이, 강아지 순서로 올랐어요.', toolOptions: { mode: 'order', topic: '나무 오르기', slots: ['첫째', '둘째', '셋째', '넷째', '다섯째'], cards: ['강아지', '청설모', '다람쥐', '고양이', '참새'] }, target: ord('다람쥐', '참새', '청설모', '고양이', '강아지'), difficulty: 0.25 },
      ] },
    { id: 'a2', title: '활동 2. 몇째인지 이름 잇기', minutes: 11, tool: 'mindmap',
      task: '줄에 선 순서를 보고, 몇째인지 이름 카드를 이어요.',
      teacher: '"앞에서부터 하나, 둘, 셋 하고 세면 셋째는 누구예요?" 앞에서 센 것과 뒤에서 센 것을 섞는 학생에게는 줄의 맨 앞이 어디인지 손으로 짚게 한다. 앞에서 넷째와 뒤에서 첫째가 다를 수 있음을 짚는다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '앞에서부터 사자, 호랑이, 사슴, 토끼, 다람쥐가 서 있어요. 둘째와 넷째를 이어요.', toolOptions: { mode: 'match', topic: '동물 줄', slots: [{ id: 's1', label: '둘째' }, { id: 's2', label: '넷째' }], cards: ['사자', '호랑이', '사슴', '토끼', '다람쥐'] }, target: { match: { s1: '호랑이', s2: '토끼' } }, difficulty: 0.15 },
        { prompt: '앞에서부터 사과, 배, 귤, 감이 놓여 있어요. 첫째와 셋째를 이어요.', toolOptions: { mode: 'match', topic: '과일 줄', slots: [{ id: 's1', label: '첫째' }, { id: 's2', label: '셋째' }], cards: ['사과', '배', '귤', '감'] }, target: { match: { s1: '사과', s2: '귤' } }, difficulty: 0.1 },
        { prompt: '앞에서부터 나비, 벌, 잠자리, 개미, 무당벌레, 나방이 날아요. 다섯째와 여섯째를 이어요.', toolOptions: { mode: 'match', topic: '곤충 줄', slots: [{ id: 's1', label: '다섯째' }, { id: 's2', label: '여섯째' }], cards: ['나비', '벌', '잠자리', '개미', '무당벌레', '나방'] }, target: { match: { s1: '무당벌레', s2: '나방' } }, difficulty: 0.28 },
      ] },
    pair('a3', '활동 3. 짝과 줄 서 보기', 5, '짝과 몇 명이 줄을 서서 앞에서 몇째인지 말해요.',
      '세 명, 다섯 명이 줄을 서 보게 한다. "앞에서 셋째는 누구예요?" 하고 서로 묻는다. 첫째와 하나를 섞어 말하는 학생에게는 "하나는 몇 개, 첫째는 순서"라고 말해 준다.',
      ['세 명이 줄을 서고 앞에서 몇째인지 서로 말한 뒤 "다 했어요"를 누르세요.', '다섯 명이 줄을 서고 앞에서 셋째가 누구인지 말한 뒤 "다 했어요"를 누르세요.', '맨 뒤에 선 친구가 몇째인지 말한 뒤 "다 했어요"를 누르세요.'], 'mindmap', { easy: {}, base: {}, challenge: {} }),
  ],
  wrap: ['"우리 줄에서 나는 앞에서 몇째일까요?" 몇 명의 학생에게 말하게 한다. 출구 2번을 틀린 학생은 앞에서 센 것과 뒤에서 센 것을 섞은 것이므로 다음 시간에 줄의 맨 앞을 먼저 짚게 한다.', [
    { type: 'choice', prompt: '가장 먼저 들어온 친구는 앞에서 몇째인가요?', options: ['첫째', '둘째', '셋째'], answer: 0, difficulty: 0.05, explain: '가장 먼저가 첫째예요.' },
    { type: 'choice', prompt: '앞에서부터 감자, 당근, 오이, 호박이 있어요. 셋째는 무엇인가요?', options: ['당근', '오이', '호박'], answer: 1, difficulty: 0.15, explain: '앞에서 하나, 둘, 셋 세면 셋째는 오이예요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'order', topic: '차례', slots: ['첫째', '둘째', '셋째'], cards: ['오리', '병아리', '닭'] }, prompt: '병아리가 먼저, 그다음 오리, 마지막은 닭이에요. 순서대로 놓아요.', target: ord('병아리', '오리', '닭'), difficulty: 0.1 },
  ]],
  ws: { title: '몇째일까요', items: [
    { type: 'choice', prompt: '앞에서부터 별, 달, 해, 구름이 있어요. 둘째에 ○ 하세요.', options: ['별', '달', '해', '구름'], answer: '달' },
    { type: 'blank', prompt: '앞에서부터 개, 고양이, 소, 말이 서 있어요. 알맞은 말을 쓰세요.', text: '소는 앞에서 ______ 입니다.', answer: '셋째' },
    { type: 'blank', prompt: '순서를 나타내는 말을 순서대로 쓰세요.', text: '첫째 - ______ - 셋째 - ______', answer: '둘째, 넷째' },
    { type: 'table', prompt: '앞에서부터 사과, 배, 귤, 감이 놓여 있어요. 빈칸에 쓰세요.', columns: ['몇째', '첫째', '둘째', '셋째', '넷째'], cells: [['과일', '사과', '', '', '']], answer: '배, 귤, 감' },
    { type: 'draw', prompt: '○를 5개 그리고, 셋째 ○에 색을 칠하세요.' },
  ], easy: { note: '앞에서부터 손가락으로 하나씩 짚으며 첫째, 둘째, 셋째를 말해요.', items: [
    { type: 'choice', prompt: '앞에서부터 별, 달, 해가 있어요. 첫째에 ○ 하세요.', options: ['별', '달', '해'], answer: '별' },
    { type: 'blank', prompt: '순서를 나타내는 말을 쓰세요.', text: '첫째 - ______ - 셋째', answer: '둘째' },
    { type: 'choice', prompt: '앞에서부터 개, 고양이, 소가 서 있어요. 셋째에 ○ 하세요.', options: ['개', '소'], answer: '소' },
    { type: 'draw', prompt: '○를 3개 그리고, 둘째 ○에 색을 칠하세요.' },
  ] } },
  diff: { easy: '카드를 맞는 칸에 놓으면 바로 초록 테두리가 생겨요. 칸에 첫째·둘째 이름이 보여요.', base: '카드를 모두 놓은 뒤 확인을 눌러 맞는지 봐요.', challenge: '줄이 다섯 명, 여섯 명으로 길어져서 다섯째·여섯째를 말해야 해요.' },
  notes: '자주 보이는 어려움: ① 몇 개(수량)와 몇째(순서)를 섞는다 → "셋은 모두 몇 개, 셋째는 앞에서 세 번째 하나"로 가른다. ② 앞에서 센 것과 뒤에서 센 것을 섞는다 → 줄의 맨 앞을 먼저 짚게 한다. ③ 첫째와 하나를 같은 말로 쓴다 → 8차시에서 구별 문제로 다시 본다.',
}));
// ───────────────────────────── 8차시 (practice) ─────────────────────────────
L.push(lesson(8, {
  title: '몇 개와 몇째 나누어 보기',
  objective: '물건이 모두 몇 개인지 묻는 말과 몇째인지 묻는 말을 구별하고, 각각에 알맞은 수로 말할 수 있다.',
  desc: 'a paper-cut school bus with seven children waiting at a stop, one child holding a sign with a big number',
  text: '몇 개? 몇째?',
  layers: [{ motif: 'house', x: 90, y: 216, s: 1.0 }, { motif: 'tree', x: 400, y: 216, s: 1.0 }, { motif: 'bird', x: 250, y: 82 }, { motif: 'flower', x: 260, y: 238 }],
  intro: ['"사과가 다섯 개 있어요. 그리고 다섯째 사과도 있어요. 같은 말일까요?" 사과 다섯 개를 한 줄로 놓고, 모두 세면 "다섯 개", 앞에서 다섯째만 가리키면 "다섯째"라고 보여 준다. "개는 모두 몇 개, 째는 몇 번째 하나"라고 말해 준다.', '몇 개와 몇째는 어떻게 다른지 알아봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 몇 개인지 몇째인지 나누기', minutes: 10, tool: 'mindmap',
      task: '카드를 읽고 몇 개인지 알려 주는 말과 몇째인지 알려 주는 말로 나누어요.',
      teacher: '"일곱 개는 모두 몇 개예요? 일곱째는요?" 둘 다 같은 칸에 놓는 학생에게는 줄을 세워 모두를 세는 손짓(원)과 한 곳만 짚는 손짓(손가락 하나)을 해 보게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '카드를 두 칸으로 나누어요.', toolOptions: { topic: '수 말', slots: ['모두 몇 개', '몇째'], cards: ['사과 세 개', '셋째 아이', '연필 일곱 자루', '일곱째 칸'] }, target: { sort: { '모두 몇 개': ['사과 세 개', '연필 일곱 자루'], 몇째: ['셋째 아이', '일곱째 칸'] } }, difficulty: 0.1 },
        { prompt: '이번 카드도 두 칸으로 나누어요.', toolOptions: { topic: '수 말', slots: ['모두 몇 개', '몇째'], cards: ['풍선 여섯 개', '여섯째 풍선', '네 명', '넷째 줄'] }, target: { sort: { '모두 몇 개': ['풍선 여섯 개', '네 명'], 몇째: ['여섯째 풍선', '넷째 줄'] } }, difficulty: 0.12 },
        { prompt: '카드 여섯 장을 두 칸으로 나누어요.', toolOptions: { topic: '수 말', slots: ['모두 몇 개', '몇째'], cards: ['첫째 자리', '두 마리', '아홉 송이', '여덟째 계단', '다섯째 버스', '꽃 두 송이'] }, target: { sort: { '모두 몇 개': ['두 마리', '아홉 송이', '꽃 두 송이'], 몇째: ['첫째 자리', '여덟째 계단', '다섯째 버스'] } }, difficulty: 0.22 },
      ] },
    { id: 'a2', title: '활동 2. 몇째를 나타내는 말만 고르기', minutes: 10, tool: 'mindmap',
      task: '몇째를 나타내는 말 카드만 골라요.',
      teacher: '"몇째라고 말하는 카드만 골라요. 개나 마리가 붙으면 몇 개예요." "둘"이나 "여섯"처럼 짧은 낱말은 순서가 아니라 수라는 것을 짚는다. 다섯 개를 다섯째로 고른 학생에게는 "다섯 개는 모두의 수"라고 다시 말해 준다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '몇째를 나타내는 카드를 모두 골라요.', toolOptions: { mode: 'pick', topic: '몇째', basket: '몇째 카드', cards: ['첫째', '넷째', '여섯 개', '둘'] }, target: { pick: ['첫째', '넷째'] }, difficulty: 0.1 },
        { prompt: '앞에서 몇째인지 말하는 카드를 골라요.', toolOptions: { mode: 'pick', topic: '몇째', basket: '몇째 카드', cards: ['아홉째', '일곱 마리', '셋째', '다섯 송이', '둘째'] }, target: { pick: ['아홉째', '셋째', '둘째'] }, difficulty: 0.18 },
        { prompt: '순서를 말하는 카드만 골라요. 개수를 말하는 카드는 고르지 않아요.', toolOptions: { mode: 'pick', topic: '순서', basket: '순서 카드', cards: ['일곱째', '여덟 개', '다섯 명', '여섯째'] }, target: { pick: ['일곱째', '여섯째'] }, difficulty: 0.2 },
      ] },
    { id: 'a3', title: '활동 3. 모두 몇 개인지 세어 고르기', minutes: 6, tool: 'tenframe',
      task: '칩을 세어 모두 몇 개인지 수를 골라요.',
      teacher: '"여기서는 순서가 아니라 모두 몇 개인지 물어요." 센 마지막 수를 고르게 하고, "몇째가 아니라 몇 개"라고 말하게 한다. 수를 고르는 데 시간이 걸리는 학생은 칩을 하나씩 짚으며 세게 한다.',
      levels: SAYC,
      items: [say('버스 정류장에 선 아이들이에요. 모두 몇 명인가요?', 7, 0.12), say('접시에 놓인 쿠키예요. 모두 몇 개인가요?', 4, 0.06), say('줄에 매달린 풍선이에요. 모두 몇 개인가요?', 8, 0.2)] },
  ],
  wrap: ['"여섯 개와 여섯째는 같은 말일까요, 다른 말일까요?" 이유를 한 문장으로 말하게 한다. 출구 1번을 틀린 학생은 몇 개와 몇째를 섞은 것이므로 다음 시간에 줄을 세워 보게 한다.', [
    { type: 'choice', prompt: '"셋째"는 무엇을 나타내는 말인가요?', options: ['모두 몇 개', '앞에서 몇째'], answer: 1, difficulty: 0.1, explain: '셋째는 순서를 나타내요.' },
    { type: 'choice', prompt: '사과가 모두 4개 있어요. 모두의 수를 나타내는 말은 무엇인가요?', options: ['네 개', '넷째'], answer: 0, difficulty: 0.1, explain: '모두 몇 개인지는 네 개라고 말해요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '순서', basket: '몇째 카드', cards: ['다섯째', '다섯 개', '둘째'] }, prompt: '몇째를 나타내는 카드를 모두 골라요.', target: { pick: ['다섯째', '둘째'] }, difficulty: 0.12 },
  ]],
  ws: { title: '몇 개와 몇째', items: [
    { type: 'choice', prompt: '모두 몇 개인지 알려 주는 말에 ○ 하세요.', options: ['다섯째', '다섯 개'], answer: '다섯 개' },
    { type: 'choice', prompt: '몇째인지 알려 주는 말에 ○ 하세요.', options: ['여덟 마리', '여덟째'], answer: '여덟째' },
    { type: 'table', prompt: '말을 읽고 알맞은 칸에 ○ 하세요.', columns: ['말', '모두 몇 개', '몇째'], cells: [['풍선 일곱 개', '', ''], ['둘째 아이', '', ''], ['공 세 개', '', '']], answer: '풍선 일곱 개 - 모두 몇 개, 둘째 아이 - 몇째, 공 세 개 - 모두 몇 개' },
    { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '줄에 앞에서부터 별 하나, 달 하나, 해 하나 → 달은 앞에서 ______', answer: '둘째' },
    { type: 'short', prompt: '일곱 개와 일곱째는 어떻게 다른지 써 보세요.' },
  ], easy: { note: '모두의 수는 개, 마리, 송이로 말해요. 순서는 첫째, 둘째로 말해요.', items: [
    { type: 'choice', prompt: '모두 몇 개인지 알려 주는 말에 ○ 하세요.', options: ['셋째', '세 개'], answer: '세 개' },
    { type: 'choice', prompt: '몇째인지 알려 주는 말에 ○ 하세요.', options: ['둘째', '두 마리'], answer: '둘째' },
    { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '앞에서부터 개, 소 → 소는 앞에서 ______', answer: '둘째' },
    { type: 'draw', prompt: '꽃 두 송이를 그려 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 칸에 놓으면 바로 초록 테두리가 생겨요. 칩을 세는 문항에는 칸 번호가 있어요.', base: '카드를 모두 놓은 뒤 확인을 눌러 맞는지 봐요.', challenge: '카드가 여섯 장으로 늘고, 칩이 흩어져 있어 직접 짚어 세어야 해요.' },
  notes: '자주 보이는 어려움: ① 몇 개와 몇째를 같은 말로 쓴다 → 모두를 세는 손짓과 한 곳만 짚는 손짓으로 가른다. ② "둘", "여섯"처럼 짧은 낱말을 순서로 고른다 → 개·마리·송이가 붙지 않았어도 수량이라고 짚는다. ③ 순서를 말할 때 뒤에서부터 센다 → 줄의 앞을 먼저 짚게 한다.',
}));
// ───────────────────────────── 9차시 (core) ─────────────────────────────
L.push(lesson(9, {
  title: '점 카드의 수를 세어 많고 적음 견주기',
  objective: '점의 수를 세어 두 수 가운데 어느 쪽이 더 많은지, 더 적은지 말하고 기준이 되는 수와 견줄 수 있다.',
  desc: 'two paper-cut baskets side by side, one holding many berries and the other holding only a few, with a squirrel pointing at the fuller basket',
  text: '어느 쪽이 더 많을까요?',
  layers: [{ motif: 'tree', x: 80, y: 214, s: 1.1 }, { motif: 'tree', x: 400, y: 216, s: 1.0, color: 'mint' }, { motif: 'bird', x: 260, y: 82 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"왼쪽 바구니에는 딸기가 많고, 오른쪽 바구니에는 적어요. 어떻게 알 수 있을까요?" 점 카드 두 장을 칠판에 붙이고 하나씩 짝지어 선으로 이으며 남는 쪽이 더 많다고 보여 준다. 세어서 5와 8을 말한 뒤 "8이 5보다 더 커요"라고 말해 준다.', '점이 더 많은 쪽을 찾아봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 점이 4개보다 많은지 적은지 나누기', minutes: 10, tool: 'mindmap',
      task: '점을 세어 기준보다 많은 칸과 적은 칸에 나누어요.',
      teacher: '"점을 하나씩 짚으며 세어요. 4보다 많은지 적은지 말해 봐요." 세지 않고 점이 길게 늘어선 카드를 많다고 하는 학생에게는 점 사이가 넓어도 개수가 같을 수 있음을 짚고 직접 세게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '점 카드를 4보다 많은 칸과 적은 칸에 나누어요.', toolOptions: { topic: '4와 견주기', slots: ['4보다 많아요', '4보다 적어요'], cards: [{ id: 'p6', text: '●●●●●●' }, { id: 'p2', text: '●●' }, { id: 'p7', text: '●●●●●●●' }, { id: 'p3', text: '●●●' }] }, target: { sort: { '4보다 많아요': ['p6', 'p7'], '4보다 적어요': ['p2', 'p3'] } }, difficulty: 0.1 },
        { prompt: '이번에는 6을 기준으로 점 카드를 나누어요.', toolOptions: { topic: '6과 견주기', slots: ['6보다 많아요', '6보다 적어요'], cards: [{ id: 'p8', text: '●●●●●●●●' }, { id: 'p5', text: '●●●●●' }, { id: 'p9', text: '●●●●●●●●●' }, { id: 'p4', text: '●●●●' }] }, target: { sort: { '6보다 많아요': ['p8', 'p9'], '6보다 적어요': ['p5', 'p4'] } }, difficulty: 0.15 },
        { prompt: '5와 같은 점 카드는 어느 칸에도 넣지 않아요. 나머지를 나누어요.', toolOptions: { topic: '5와 견주기', slots: ['5보다 많아요', '5보다 적어요'], cards: [{ id: 'p7', text: '●●●●●●●' }, { id: 'p5', text: '●●●●●' }, { id: 'p1', text: '●' }, { id: 'p9', text: '●●●●●●●●●' }] }, target: { sort: { '5보다 많아요': ['p7', 'p9'], '5보다 적어요': ['p1'] } }, difficulty: 0.25 },
      ] },
    { id: 'a2', title: '활동 2. 점이 더 많은 카드 고르기', minutes: 9, tool: 'mindmap',
      task: '말에 맞는 점 카드를 모두 골라요.',
      teacher: '"5보다 점이 많은 카드를 모두 고르세요. 5와 같은 것은 고르지 않아요." 5와 같은 카드를 고르는 학생에게는 "같으면 많지도 적지도 않아요"라고 말해 준다. 세기만 하고 고르는 데 어려워하는 학생은 점 카드를 5개씩 짝지어 보게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '점이 5개보다 많은 카드를 모두 골라요.', toolOptions: { mode: 'pick', topic: '5보다 많은 점', basket: '고른 카드', cards: [{ id: 'p3', text: '●●●' }, { id: 'p6', text: '●●●●●●' }, { id: 'p5', text: '●●●●●' }, { id: 'p8', text: '●●●●●●●●' }] }, target: { pick: ['p6', 'p8'] }, difficulty: 0.15 },
        { prompt: '점이 3개보다 적은 카드를 모두 골라요.', toolOptions: { mode: 'pick', topic: '3보다 적은 점', basket: '고른 카드', cards: [{ id: 'p1', text: '●' }, { id: 'p3', text: '●●●' }, { id: 'p2', text: '●●' }, { id: 'p4', text: '●●●●' }] }, target: { pick: ['p1', 'p2'] }, difficulty: 0.15 },
        { prompt: '점이 7개보다 많은 카드를 모두 골라요.', toolOptions: { mode: 'pick', topic: '7보다 많은 점', basket: '고른 카드', cards: [{ id: 'p9', text: '●●●●●●●●●' }, { id: 'p7', text: '●●●●●●●' }, { id: 'p6', text: '●●●●●●' }, { id: 'p8', text: '●●●●●●●●' }] }, target: { pick: ['p9', 'p8'] }, difficulty: 0.22 },
      ] },
    { id: 'a3', title: '활동 3. 점 카드를 적은 것부터 놓기', minutes: 7, tool: 'mindmap',
      task: '점 카드를 점이 적은 것부터 차례로 놓아요.',
      teacher: '"점이 가장 적은 카드는 어느 것이에요?" 가장 적은 카드를 먼저 놓고 하나씩 늘려 가며 말하게 한다. 4와 6의 자리를 바꾸는 학생에게는 두 카드의 점을 짝지어 어느 쪽이 남는지 보게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '점 카드를 점이 적은 것부터 놓아요.', toolOptions: { mode: 'order', topic: '점 세기', cards: [{ id: 'p4', text: '●●●●' }, { id: 'p2', text: '●●' }, { id: 'p6', text: '●●●●●●' }] }, target: { order: ['p2', 'p4', 'p6'] }, difficulty: 0.15 },
        { prompt: '점 카드 네 장을 점이 적은 것부터 놓아요.', toolOptions: { mode: 'order', topic: '점 세기', cards: [{ id: 'p7', text: '●●●●●●●' }, { id: 'p3', text: '●●●' }, { id: 'p9', text: '●●●●●●●●●' }, { id: 'p5', text: '●●●●●' }] }, target: { order: ['p3', 'p5', 'p7', 'p9'] }, difficulty: 0.22 },
        { prompt: '점 카드를 점이 많은 것부터 놓아요.', toolOptions: { mode: 'order', topic: '점 세기', cards: [{ id: 'p1', text: '●' }, { id: 'p8', text: '●●●●●●●●' }, { id: 'p4', text: '●●●●' }] }, target: { order: ['p8', 'p4', 'p1'] }, difficulty: 0.2 },
      ] },
  ],
  wrap: ['"점이 많은 쪽과 적은 쪽을 어떻게 알았어요?" 세어서 수로 말하게 한다. 출구 1번을 틀린 학생은 점의 수를 세지 않고 눈으로 길이만 본 것이므로 다음 시간에 다시 세어 보게 한다.', [
    { type: 'choice', prompt: '점이 3개인 카드와 7개인 카드가 있어요. 점이 더 많은 카드는 어느 것인가요?', options: ['3개인 카드', '7개인 카드'], answer: 1, difficulty: 0.08, explain: '3보다 7이 더 많아요.' },
    { type: 'choice', prompt: '5개보다 점이 적은 카드는 어느 것인가요?', options: ['점 2개', '점 5개', '점 8개'], answer: 0, difficulty: 0.12, explain: '5보다 적은 수는 2예요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '4보다 많은 점', basket: '고른 카드', cards: [{ id: 'p2', text: '●●' }, { id: 'p8', text: '●●●●●●●●' }, { id: 'p4', text: '●●●●' }] }, prompt: '점이 4개보다 많은 카드를 골라요.', target: { pick: ['p8'] }, difficulty: 0.12 },
  ]],
  ws: { title: '많고 적음 견주기', items: [
    { type: 'choice', prompt: '더 많은 쪽에 ○ 하세요.', options: ['4', '7'], answer: '7' },
    { type: 'choice', prompt: '더 적은 쪽에 ○ 하세요.', options: ['9', '6'], answer: '6' },
    { type: 'table', prompt: '두 수를 견주어 알맞은 말에 ○ 하세요.', columns: ['두 수', '더 많은 수', '더 적은 수'], cells: [['5와 8', '', ''], ['3와 2', '', ''], ['9와 6', '', '']], answer: '8, 5 / 3, 2 / 9, 6' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '6은 4보다 더 ______', answer: '많아요(커요)' },
    { type: 'draw', prompt: '네모 안에 ○를 5개보다 많게 그려 보세요.' },
  ], easy: { note: '두 수를 세어 보고, 수를 말한 뒤 더 많은 쪽을 골라요.', items: [
    { type: 'choice', prompt: '더 많은 쪽에 ○ 하세요.', options: ['2', '5'], answer: '5' },
    { type: 'choice', prompt: '더 적은 쪽에 ○ 하세요.', options: ['8', '3'], answer: '3' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '3은 7보다 ______', answer: '적어요(작아요)' },
    { type: 'draw', prompt: '○를 2개보다 많게 그려 보세요.' },
  ] } },
  diff: { easy: '맞는 칸에 놓은 카드에는 바로 초록 테두리가 생겨요. 점이 두세 줄로 나뉘어 있어 세기 쉬워요.', base: '카드를 모두 놓은 뒤 확인을 눌러 맞는지 봐요.', challenge: '기준과 같은 수의 카드는 어느 칸에도 넣지 않아야 하는 문제와 점이 많은 순서로 놓는 문제가 나와요.' },
  notes: '자주 보이는 어려움: ① 점이 줄 지은 길이로 많고 적음을 말한다 → 하나씩 짝지어 남는 쪽이 더 많다고 보여 준다. ② 같은 수를 더 많은 쪽에 넣는다 → "같으면 많지도 적지도 않아요"라고 말해 준다. ③ 많은 쪽이 큰 수임을 연결하지 못한다 → 점을 세어 수로 말한 뒤 큰 수를 고르게 한다. 가장 큰 수·가장 작은 수는 10차시에서 이어서 한다.',
}));
// ───────────────────────────── 10차시 (practice) ─────────────────────────────
L.push(lesson(10, {
  title: '가장 큰 수와 가장 작은 수 찾기',
  objective: '여러 수 가운데 가장 큰 수와 가장 작은 수를 찾고, 수를 큰 수부터 순서대로 놓을 수 있다.',
  desc: 'a row of paper-cut flower pots with different numbers of flowers, tallest pot on the right, and a bee flying above them',
  text: '가장 큰 수는?',
  layers: [{ motif: 'flower', x: 120, y: 214, s: 1.2 }, { motif: 'flower', x: 200, y: 216, s: 1.0, color: 'lavender' }, { motif: 'flower', x: 290, y: 218, s: 0.8 }, { motif: 'bird', x: 380, y: 82 }],
  intro: ['"수 카드가 네 장 있어요. 이 가운데 가장 큰 수는 무엇일까요?" 칠판에 3, 8, 5, 2를 붙이고 점 카드와 짝지어 가장 큰 쪽을 찾는다. "가장 큰 수는 수 줄에서 가장 오른쪽, 가장 작은 수는 가장 왼쪽에 있어요"라고 말해 준다.', '수 카드에서 가장 큰 수와 가장 작은 수를 찾아봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 가장 큰 수 카드 고르기', minutes: 8, tool: 'mindmap',
      task: '수 카드 가운데 가장 큰 수를 골라요.',
      teacher: '"먼저 두 수씩 견주어 봐요. 3과 8 중 어느 쪽이 더 커요?" 이긴 수와 다음 수를 이어 견주게 한다. 마지막으로 읽은 수나 맨 앞의 수를 큰 수로 고르는 학생에게는 수 줄에서 오른쪽에 있는 수를 찾게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '수 카드 가운데 가장 큰 수를 골라요.', toolOptions: { mode: 'pick', topic: '가장 큰 수', basket: '가장 큰 수', cards: nums(3, 8, 5) }, target: { pick: ['8'] }, difficulty: 0.1 },
        { prompt: '네 수 가운데 가장 큰 수를 골라요.', toolOptions: { mode: 'pick', topic: '가장 큰 수', basket: '가장 큰 수', cards: nums(2, 6, 9, 4) }, target: { pick: ['9'] }, difficulty: 0.15 },
        { prompt: '가장 큰 수 카드를 찾아요.', toolOptions: { mode: 'pick', topic: '가장 큰 수', basket: '가장 큰 수', cards: nums(7, 1, 4) }, target: { pick: ['7'] }, difficulty: 0.1 },
      ] },
    { id: 'a2', title: '활동 2. 가장 작은 수 카드 고르기', minutes: 8, tool: 'mindmap',
      task: '수 카드 가운데 가장 작은 수를 골라요.',
      teacher: '"이번에는 가장 작은 수예요. 수 줄에서 가장 왼쪽에 있는 수는 어느 것일까요?" 큰 수와 작은 수를 반대로 고르는 학생에게는 두 수의 점 카드를 짝지어 남는 쪽이 큰 수라고 다시 보여 준다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '수 카드 가운데 가장 작은 수를 골라요.', toolOptions: { mode: 'pick', topic: '가장 작은 수', basket: '가장 작은 수', cards: nums(6, 2, 9) }, target: { pick: ['2'] }, difficulty: 0.1 },
        { prompt: '네 수 가운데 가장 작은 수를 골라요.', toolOptions: { mode: 'pick', topic: '가장 작은 수', basket: '가장 작은 수', cards: nums(4, 8, 3, 7) }, target: { pick: ['3'] }, difficulty: 0.15 },
        { prompt: '가장 작은 수 카드를 찾아요.', toolOptions: { mode: 'pick', topic: '가장 작은 수', basket: '가장 작은 수', cards: nums(5, 9, 7) }, target: { pick: ['5'] }, difficulty: 0.1 },
      ] },
    { id: 'a3', title: '활동 3. 큰 수부터 순서대로 놓기', minutes: 10, tool: 'mindmap',
      task: '수 카드를 큰 수부터 차례로 놓아요.',
      teacher: '"가장 큰 수를 먼저 찾아 맨 앞에 놓아요. 그다음 큰 수는 무엇이에요?" 남은 카드에서 다시 가장 큰 수를 찾게 한다. 두 수의 자리를 바꾸는 학생에게는 두 수를 수 줄에서 짚어 오른쪽이 큰 수임을 다시 보게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '수 카드 7, 2, 9, 4를 큰 수부터 놓아요.', toolOptions: { mode: 'order', topic: '큰 수부터', cards: nums(7, 2, 9, 4) }, target: ord(9, 7, 4, 2), difficulty: 0.2 },
        { prompt: '수 카드 다섯 장을 큰 수부터 놓아요.', toolOptions: { mode: 'order', topic: '큰 수부터', cards: nums(6, 1, 8, 3, 5) }, target: ord(8, 6, 5, 3, 1), difficulty: 0.28 },
        { prompt: '수 카드 세 장을 큰 수부터 놓아요.', toolOptions: { mode: 'order', topic: '큰 수부터', cards: nums(4, 9, 2) }, target: ord(9, 4, 2), difficulty: 0.15 },
      ] },
  ],
  wrap: ['"가장 큰 수는 수 줄에서 어디에 있을까요?" 손가락으로 오른쪽 끝을 가리키게 한다. 출구 2번을 틀린 학생은 큰 수와 작은 수를 반대로 고른 것이므로 다음 시간에 점 카드를 짝지어 다시 견주게 한다.', [
    { type: 'choice', prompt: '6, 3, 9 가운데 가장 큰 수는 무엇인가요?', options: ['3', '6', '9'], answer: 2, difficulty: 0.1, explain: '9가 수 줄에서 가장 오른쪽에 있는 수예요.' },
    { type: 'choice', prompt: '5, 8, 2 가운데 가장 작은 수는 무엇인가요?', options: ['2', '5', '8'], answer: 0, difficulty: 0.1, explain: '2가 수 줄에서 가장 왼쪽에 있는 수예요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'order', topic: '큰 수부터', cards: nums(1, 5, 7) }, prompt: '수 카드를 큰 수부터 놓아요.', target: ord(7, 5, 1), difficulty: 0.12 },
  ]],
  ws: { title: '가장 큰 수, 가장 작은 수', items: [
    { type: 'choice', prompt: '가장 큰 수에 ○ 하세요.', options: ['4', '9', '6'], answer: '9' },
    { type: 'choice', prompt: '가장 작은 수에 ○ 하세요.', options: ['7', '3', '5'], answer: '3' },
    { type: 'blank', prompt: '큰 수부터 순서대로 쓰세요.', text: '5, 8, 3 → ___ , ___ , ___', answer: '8, 5, 3' },
    { type: 'blank', prompt: '작은 수부터 순서대로 쓰세요.', text: '6, 2, 9 → ___ , ___ , ___', answer: '2, 6, 9' },
    { type: 'short', prompt: '가장 큰 수를 어떻게 찾았는지 한 문장으로 써 보세요.' },
  ], easy: { note: '수 줄에서 오른쪽에 있는 수가 더 큰 수예요. 두 수씩 견주어요.', items: [
    { type: 'choice', prompt: '가장 큰 수에 ○ 하세요.', options: ['2', '7'], answer: '7' },
    { type: 'choice', prompt: '가장 작은 수에 ○ 하세요.', options: ['4', '1', '6'], answer: '1' },
    { type: 'blank', prompt: '큰 수부터 순서대로 쓰세요.', text: '3, 6 → ___ , ___', answer: '6, 3' },
    { type: 'draw', prompt: '수 카드 3, 8을 쓰고, 더 큰 수에 ○ 하세요.' },
  ] } },
  diff: { easy: '맞는 수를 고르면 바로 초록 테두리가 생겨요. 맞지 않으면 까닭을 말하고 카드가 돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러 맞는지 봐요.', challenge: '카드가 다섯 장으로 늘고, 큰 수부터 놓는 문제가 더 나와요.' },
  notes: '자주 보이는 어려움: ① 가장 큰 수와 가장 작은 수를 반대로 고른다 → 점 카드를 짝지어 남는 쪽이 큰 수임을 다시 보여 준다. ② 맨 앞이나 맨 뒤의 수를 가장 큰 수로 고른다 → 모든 수를 두 개씩 견주며 이긴 수를 이어 간다. ③ 큰 수부터 놓을 때 마지막 수를 먼저 놓는다 → 수 줄에서 오른쪽부터 읽게 한다.',
}));
// ───────────────────────────── 11차시 (core) ─────────────────────────────
L.push(lesson(11, {
  title: '세는 말과 읽는 말 가려 쓰기',
  objective: '개수를 셀 때 쓰는 말(하나, 둘, 셋…)과 번호·층을 읽을 때 쓰는 말(일, 이, 삼…)을 상황에 맞게 구별해 쓸 수 있다.',
  desc: 'a paper-cut apartment building with numbered floors and a few apples in a basket by the door, with a child pressing the elevator button',
  text: '셋일까요, 삼일까요?',
  layers: [{ motif: 'house', x: 110, y: 216, s: 1.2 }, { motif: 'house', x: 200, y: 218, s: 1.0, color: 'lavender' }, { motif: 'tree', x: 400, y: 216, s: 1.0 }, { motif: 'bird', x: 300, y: 80 }],
  intro: ['"사과는 세 개예요. 우리 집은 3층이에요. 같은 3인데 읽는 말이 어떻게 다를까요?" 칠판에 "3개"와 "3층"을 쓰고, "세 개", "삼 층"이라고 읽어 준다. "개수를 셀 때는 하나, 둘, 셋, 번호나 층은 일, 이, 삼"이라고 말해 준다. 두 가지 읽기를 섞어 말하는 학생이 있는지 살핀다.', '같은 숫자도 읽는 말이 다를 때가 있어요.'],
  acts: [
    { id: 'a1', title: '활동 1. 읽는 말에 따라 나누기', minutes: 10, tool: 'mindmap',
      task: '카드를 하나, 둘, 셋으로 읽는 것과 일, 이, 삼으로 읽는 것으로 나누어요.',
      teacher: '"3개는 세 개라고 읽어요. 3층은 뭐라고 읽어요?" 개·명·마리는 하나, 둘, 셋으로, 층·번은 일, 이, 삼으로 읽는다는 것을 한 쌍씩 짚는다. 5층을 다섯 층으로 읽는 학생은 층을 일, 이, 삼으로 읽는다고 말해 준다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '카드를 두 칸으로 나누어요.', toolOptions: { topic: '읽는 말', slots: ['하나, 둘, 셋으로 읽어요', '일, 이, 삼으로 읽어요'], cards: ['3개', '3층', '5명', '5번'] }, target: { sort: { '하나, 둘, 셋으로 읽어요': ['3개', '5명'], '일, 이, 삼으로 읽어요': ['3층', '5번'] } }, difficulty: 0.15 },
        { prompt: '이번 카드도 두 칸으로 나누어요.', toolOptions: { topic: '읽는 말', slots: ['하나, 둘, 셋으로 읽어요', '일, 이, 삼으로 읽어요'], cards: ['7마리', '7층', '9개', '9번'] }, target: { sort: { '하나, 둘, 셋으로 읽어요': ['7마리', '9개'], '일, 이, 삼으로 읽어요': ['7층', '9번'] } }, difficulty: 0.18 },
        { prompt: '카드 여섯 장을 두 칸으로 나누어요.', toolOptions: { topic: '읽는 말', slots: ['하나, 둘, 셋으로 읽어요', '일, 이, 삼으로 읽어요'], cards: ['2개', '2번', '4명', '4층', '6마리', '8번'] }, target: { sort: { '하나, 둘, 셋으로 읽어요': ['2개', '4명', '6마리'], '일, 이, 삼으로 읽어요': ['2번', '4층', '8번'] } }, difficulty: 0.25 },
      ] },
    { id: 'a2', title: '활동 2. 알맞게 읽는 말 잇기', minutes: 9, tool: 'mindmap',
      task: '숫자 글을 알맞게 읽는 말 카드와 이어요.',
      teacher: '"사과 4개는 뭐라고 읽어요? 4층은요?" 소리 내어 읽어 보고 어색하지 않은지 들어 보게 한다. "육 마리"처럼 어색한 짝을 고른 학생에게는 "마리와 개는 하나, 둘, 셋으로 세요"라고 다시 말해 준다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '글을 알맞게 읽는 말과 이어요.', toolOptions: { mode: 'match', topic: '읽는 말', slots: [{ id: 's1', label: '사과 4개' }, { id: 's2', label: '4층' }], cards: ['사 층', '네 개', '다섯 개'] }, target: { match: { s1: '네 개', s2: '사 층' } }, difficulty: 0.15 },
        { prompt: '글 세 개를 알맞게 읽는 말과 이어요.', toolOptions: { mode: 'match', topic: '읽는 말', slots: [{ id: 's1', label: '6마리' }, { id: 's2', label: '6번' }, { id: 's3', label: '8층' }], cards: ['팔 층', '여섯 마리', '육 번', '여덟 층'] }, target: { match: { s1: '여섯 마리', s2: '육 번', s3: '팔 층' } }, difficulty: 0.25 },
        { prompt: '숫자 글 두 개를 알맞게 읽는 말과 이어요.', toolOptions: { mode: 'match', topic: '읽는 말', slots: [{ id: 's1', label: '3명' }, { id: 's2', label: '1층' }], cards: ['일 층', '세 명', '삼 명'] }, target: { match: { s1: '세 명', s2: '일 층' } }, difficulty: 0.2 },
      ] },
    { id: 'a3', title: '활동 3. 칩을 세어 몇 개인지 고르기', minutes: 7, tool: 'tenframe',
      task: '칩을 세어 모두 몇 개인지 수를 골라요.',
      teacher: '"여기서는 층이 아니라 개수를 세어요. 하나, 둘, 셋 하고 세어요." 칩을 센 뒤 숫자로 고르게 한다. 센 수를 일, 이, 삼으로만 읽는 학생에게는 개수는 하나, 둘, 셋으로도 읽을 수 있음을 알려 준다.',
      levels: SAYC,
      items: [say('엘리베이터 앞에 선 사람 수예요. 모두 몇 명인가요?', 8, 0.2), say('우리 집 창가에 놓인 화분이에요. 모두 몇 개인가요?', 6, 0.12), say('책상 위에 놓인 지우개예요. 모두 몇 개인가요?', 9, 0.25)] },
  ],
  wrap: ['"4개는 어떻게 읽고, 4층은 어떻게 읽어요?" 한 명씩 소리 내어 읽게 한다. 출구 1번을 틀린 학생은 읽는 말을 하나로만 쓴 것이므로 다음 시간에 같은 숫자를 두 가지로 읽는 연습을 먼저 한다.', [
    { type: 'choice', prompt: '5층은 어떻게 읽을까요?', options: ['다섯 층', '오 층', '오 개'], answer: 1, difficulty: 0.15, explain: '층은 일, 이, 삼, 사, 오로 읽어서 오 층이에요.' },
    { type: 'choice', prompt: '귤 7개를 읽는 말에 ○ 하세요.', options: ['칠 개', '일곱 개'], answer: 1, difficulty: 0.12, explain: '개수는 하나, 둘, 셋으로 세어서 일곱 개예요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '읽는 말', slots: [{ id: 's1', label: '3개' }, { id: 's2', label: '3층' }], cards: ['삼 층', '세 개'] }, prompt: '글을 알맞게 읽는 말과 이어요.', target: { match: { s1: '세 개', s2: '삼 층' } }, difficulty: 0.12 },
  ]],
  ws: { title: '알맞게 읽기', items: [
    { type: 'choice', prompt: '"3개"를 읽는 말에 ○ 하세요.', options: ['세 개', '삼 개'], answer: '세 개' },
    { type: 'choice', prompt: '"9층"을 읽는 말에 ○ 하세요.', options: ['아홉 층', '구 층'], answer: '구 층' },
    { type: 'table', prompt: '글을 알맞게 읽는 말을 쓰세요.', columns: ['글', '읽는 말'], cells: [['2마리', ''], ['2층', ''], ['6명', ''], ['6번', '']], answer: '두 마리, 이 층, 여섯 명, 육 번' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '우리 집은 ___ 층이고, 사과는 ___ 개 있어요. (7과 4)', answer: '4, 7 (집 층과 개수는 상황에 맞게)' },
    { type: 'short', prompt: '3을 두 가지로 읽는 말을 쓰고 언제 쓰는지 한 문장으로 써 보세요.' },
  ], easy: { note: '개수는 하나, 둘, 셋으로 세요. 층과 번호는 일, 이, 삼으로 읽어요.', items: [
    { type: 'choice', prompt: '"2개"를 읽는 말에 ○ 하세요.', options: ['두 개', '이 개'], answer: '두 개' },
    { type: 'choice', prompt: '"1층"을 읽는 말에 ○ 하세요.', options: ['한 층', '일 층'], answer: '일 층' },
    { type: 'table', prompt: '글을 읽는 말을 쓰세요.', columns: ['글', '읽는 말'], cells: [['4명', ''], ['4층', '']], answer: '네 명, 사 층' },
    { type: 'draw', prompt: '사과 3개를 그리고 "세 개"라고 써 보세요.' },
  ] } },
  diff: { easy: '맞는 칸에 놓은 카드에는 바로 초록 테두리가 생겨요. 칩을 세는 문항에는 칸 번호가 있어요.', base: '카드를 모두 놓은 뒤 확인을 눌러 맞는지 봐요.', challenge: '카드가 여섯 장으로 늘고, 글 세 개를 한꺼번에 읽는 말과 이어야 해요.' },
  notes: '자주 보이는 어려움: ① 번호를 "하나 번"처럼 센다 → 번호와 층은 일, 이, 삼으로 읽음을 짚는다. ② 개수를 "삼 개"처럼 읽는다 → 개수는 하나, 둘, 셋으로 센다. ③ 같은 숫자인데 읽는 말이 둘이라 혼란스럽다 → 지금은 두 가지 읽기를 모두 보여 주고 자주 쓰는 짝(개·명·마리 / 층·번)만 익히게 한다.',
}));
// ───────────────────────────── 12차시 (wrap) ─────────────────────────────
L.push(lesson(12, {
  title: '9까지의 수 되짚어 보기',
  objective: '9까지의 수를 세어 나타내고, 순서와 크기를 말하며 배운 것을 스스로 점검할 수 있다.',
  desc: 'a paper-cut garden path with nine numbered stepping stones, children collecting apples in baskets, and a big smiling sun',
  text: '9까지의 수 잔치',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.2 }, { motif: 'tree', x: 400, y: 216, s: 1.1, color: 'mint' }, { motif: 'apple', x: 74, y: 182, s: 0.4 }, { motif: 'apple', x: 106, y: 172, s: 0.4 }, { motif: 'bird', x: 250, y: 82 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"이번 단원에서 수를 세고, 순서를 알고, 크기도 견주어 보았어요. 오늘은 되짚어 봐요." 시연 단추로 칩이 9개까지 늘어나는 모습을 보여 주며 하나씩 소리 내어 센다. "어느 것이 가장 헷갈렸나요?" 하고 물어 학생이 헷갈린 부분을 먼저 말하게 한다.', '9까지의 수 공부를 되짚어 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'chip', color: 'mint', showWord: true }, sequence: [{ count: 5 }, { count: 9 }] },
  acts: [
    { id: 'a1', title: '활동 1. 수만큼 세어 놓기', minutes: 8, tool: 'tenframe',
      task: '말한 수만큼 사과를 놓아요. 하나씩 소리 내어 세어요.',
      teacher: '"여덟은 윗줄 5개와 아랫줄 몇 개일까요?" 5칸 묶음을 이용해 빠르게 세는 학생을 칭찬한다. 놓은 뒤 처음부터 다시 세는 학생에게는 윗줄이 다섯임을 말해 이어서 세게 한다.',
      levels: PUT,
      items: [put('사과 8개를 놓아 보세요.', 8, 0.2), put('사과 여섯 개를 놓아 보세요.', 6, 0.1), put('사과 4개를 놓아 보세요.', 4, 0.05), put('마지막으로 사과를 9개 놓아 마무리해요.', 9, 0.25)] },
    { id: 'a2', title: '활동 2. 수 카드를 순서대로 놓기', minutes: 10, tool: 'mindmap',
      task: '수 카드를 순서대로 놓아요.',
      teacher: '"1부터 9까지 순서대로 놓아요. 어디가 헷갈려요?" 아홉 장을 한꺼번에 놓기 어려워하는 학생에게는 작은 수 세 장씩 나누어 놓게 한다. 큰 수부터 놓는 문항은 가장 큰 수가 어느 것인지 먼저 말하게 한다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '수 카드 1부터 9까지를 작은 수부터 놓아요.', toolOptions: { mode: 'order', topic: '수 순서', cards: nums(1, 2, 3, 4, 5, 6, 7, 8, 9) }, target: ord(1, 2, 3, 4, 5, 6, 7, 8, 9), difficulty: 0.25 },
        { prompt: '수 카드 6부터 9까지를 큰 수부터 놓아요.', toolOptions: { mode: 'order', topic: '큰 수부터', cards: nums(6, 7, 8, 9) }, target: ord(9, 8, 7, 6), difficulty: 0.2 },
        { prompt: '수 카드 3, 5, 1, 7을 작은 수부터 놓아요.', toolOptions: { mode: 'order', topic: '수 순서', cards: nums(3, 5, 1, 7) }, target: ord(1, 3, 5, 7), difficulty: 0.15 },
      ] },
    { id: 'a3', title: '활동 3. 5보다 큰 수와 작은 수 나누기', minutes: 8, tool: 'mindmap',
      task: '수 카드를 5보다 큰 수와 5보다 작은 수로 나누어요.',
      teacher: '"5보다 큰 수는 5 다음에 나오는 수예요." 5 카드는 어느 칸에도 넣지 않는 함정이다. 5를 큰 수 칸에 넣는 학생에게는 "같은 수는 큰 수도 작은 수도 아니에요"라고 말해 준다.',
      levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
      items: [
        { prompt: '수 카드를 5보다 큰 수와 작은 수로 나누어요. 5는 넣지 않아요.', toolOptions: { topic: '5와 견주기', slots: ['5보다 큰 수', '5보다 작은 수'], cards: nums(2, 5, 8, 4) }, target: { sort: { '5보다 큰 수': ['8'], '5보다 작은 수': ['2', '4'] } }, difficulty: 0.2 },
        { prompt: '5와 견주어 수 카드를 나누어요. 5는 넣지 않아요.', toolOptions: { topic: '5와 견주기', slots: ['5보다 큰 수', '5보다 작은 수'], cards: nums(9, 3, 7, 5, 1) }, target: { sort: { '5보다 큰 수': ['9', '7'], '5보다 작은 수': ['3', '1'] } }, difficulty: 0.25 },
        { prompt: '수 카드 가운데 5보다 큰 수만 모두 골라요.', toolOptions: { mode: 'pick', topic: '5보다 큰 수', basket: '5보다 큰 수', cards: nums(6, 4, 9, 2, 5) }, target: { pick: ['6', '9'] }, difficulty: 0.22 },
      ] },
  ],
  wrap: ['"이번 단원에서 알게 된 것을 하나 말해 봐요." 짝에게 가장 쉬웠던 것과 헷갈렸던 것을 말하게 한다. 출구에서 틀린 문항의 차시(몇 개 1~3, 순서 4~6, 몇째 7~8, 크기 9~10)로 돌아가 다시 살핀다.', [
    { type: 'choice', prompt: '7 바로 뒤의 수는 무엇인가요?', options: ['6', '8', '9'], answer: 1, difficulty: 0.1, explain: '7 다음은 8이에요.' },
    { type: 'choice', prompt: '앞에서부터 감, 배, 귤이 있어요. 둘째는 무엇인가요?', options: ['감', '배', '귤'], answer: 1, difficulty: 0.15, explain: '앞에서 둘째는 배예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'apple', showCount: false, askNumber: true }, state: { count: 9 }, prompt: '사과가 몇 개인지 수를 골라요.', target: { count: 9 }, difficulty: 0.2 },
  ]],
  ws: { title: '9까지의 수 정리', items: [
    { type: 'figure', prompt: '사과는 몇 개인가요? 세어서 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 5 }, caption: BLANK }, { state: { count: 8 }, caption: BLANK }, { state: { count: 9 }, caption: BLANK }], answer: '5, 8, 9' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '2 - 3 - ___ - 5 - ___ - 7', answer: '4, 6' },
    { type: 'choice', prompt: '9, 4, 6 가운데 가장 큰 수에 ○ 하세요.', options: ['9', '4', '6'], answer: '9' },
    { type: 'choice', prompt: '앞에서부터 별, 달, 해, 구름이 있어요. 해는 앞에서 몇째인가요?', options: ['첫째', '둘째', '셋째'], answer: '셋째' },
    { type: 'table', prompt: '자기 점검: 할 수 있으면 ○, 헷갈리면 △를 쓰세요.', columns: ['나는 이것을 할 수 있어요', '○/△'], cells: [['9까지 세어 수를 말해요', ''], ['수의 순서를 알아요', ''], ['몇째를 말해요', ''], ['큰 수와 작은 수를 찾아요', '']], answer: '스스로 표시' },
  ], easy: { note: '손가락으로 하나씩 짚으며 세고 순서를 말해 봐요.', items: [
    { type: 'figure', prompt: '사과는 몇 개인가요? 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 6 }, caption: BLANK }, { state: { count: 9 }, caption: BLANK }], answer: '6, 9' },
    { type: 'blank', prompt: '수의 순서대로 빈칸에 수를 쓰세요.', text: '4 - ___ - 6 - 7', answer: '5' },
    { type: 'choice', prompt: '3, 8 가운데 더 큰 수에 ○ 하세요.', options: ['3', '8'], answer: '8' },
    { type: 'table', prompt: '자기 점검: 할 수 있으면 ○, 헷갈리면 △를 쓰세요.', columns: ['나는 이것을 할 수 있어요', '○/△'], cells: [['9까지 세어요', ''], ['수의 순서를 알아요', '']], answer: '스스로 표시' },
  ] } },
  diff: { easy: '칸 번호와 목표 수가 보이고, 맞는 카드에는 바로 초록 테두리가 생겨요.', base: '목표 없이 스스로 세고 카드를 놓은 뒤 확인해요.', challenge: '사과가 흩어져 들어가고, 수 카드가 아홉 장으로 늘며 5와 같은 카드는 넣지 않아야 해요.' },
  notes: '자주 보이는 어려움: ① 5칸 묶음을 쓰지 않고 처음부터 센다 → 윗줄이 다섯임을 말해 이어 센다. ② 수 카드 아홉 장을 한꺼번에 놓지 못한다 → 세 장씩 나누어 놓게 한다. ③ 기준과 같은 수(5)를 큰 수나 작은 수 칸에 넣는다 → 같은 수는 어느 쪽도 아니라고 말해 준다. 단원 정리에서 틀린 문항은 해당 차시(1~3·4·6·7~8·9~10차시)로 돌아가 다시 본다.',
}));
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 1, subject: '수학', unitTitle: UT,
  flow: '1~3차시에서 사과와 칩을 하나씩 짚으며 1부터 9까지 세어 놓고 수를 읽는 말(하나, 둘, 셋…)과 숫자를 짝짓습니다. 4차시에는 수 카드를 순서대로 놓고 빠진 수를 찾아 수의 순서를 익히고, 5차시(기존 차시 g1-math-count9)에서 1만큼 더 큰 수와 작은 수, 0을 배웁니다. 6차시는 수 줄에서 바로 앞·뒤 수를 찾고 거꾸로 세며, 7~8차시에서는 몇째를 말하고 몇 개와 몇째를 가려 씁니다. 9~10차시에서는 점 카드를 세어 많고 적음을 견주고 가장 큰 수와 가장 작은 수를 찾으며, 11차시에서 개수를 세는 말과 번호·층을 읽는 말을 구별합니다. 12차시에서 단원을 되짚고 스스로 점검합니다.',
  refs: { 5: 'g1-math-count9' },
  lessons: L,
});
})();
