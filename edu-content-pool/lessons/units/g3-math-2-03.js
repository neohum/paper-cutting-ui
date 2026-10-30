/* 3학년 2학기 3. 원 — 단원 파일(차시 7개 가운데 2차시는 기존 차시 g3-math-compass-circle).
 * 흐름: 둥근 모양 가려내고 원의 중심 찾기(1) → [2차시 기존: 컴퍼스로 원 그리기와 반지름·지름] → 반지름·지름 구별하고 길이 관계(3)
 *      → 접시·시계 지름으로 필요한 길이 구하기(4) → 컴퍼스 폭이 반지름인 까닭과 그리는 순서(5)
 *      → 중심을 정해 크기가 다른 원으로 무늬 만들기(6) → 정한 크기로 그리고 맞는지 확인(7).
 * 성취기준 [4수03-06]은 1·3·4차시, [4수03-07]은 5~7차시.
 */
(function () {
const UID = 'g3-math-2-03', CU = 'g3-수학-2학기-3', UT = '3. 원';
const two = (n) => String(n).padStart(2, '0');
const TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
const ill = (desc, text, extra) => ({
  prompt: `Layered paper-cut illustration of ${desc}${TAIL}`,
  scene: { viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    ...(extra || []), { motif: 'text', x: 240, y: 142, text, size: 22 },
  ] },
});
const lesson = (n, d) => ({
  id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
  grade: 3, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: d.std, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  ...(d.safety ? { safety: d.safety } : {}),
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
const S1 = ['[4수03-06]'], S2 = ['[4수03-07]'];
const NEEDLE = [
  '컴퍼스 침은 뾰족해요. 침이 위로 가게 들고 다니지 않고, 친구 쪽으로 향하지 않아요.',
  '컴퍼스를 돌릴 때는 손잡이만 잡고, 다 쓴 컴퍼스는 다리를 오므려 필통에 넣어요.',
];
const CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
const PICKL = { easy: {}, base: {}, challenge: {} };
const CLSL = { easy: { mode: 'classify' }, base: { mode: 'classify' }, challenge: { mode: 'classify' } };
const DRAWL = { easy: { showWidth: true }, base: { showWidth: true, revealAfterCheck: true }, challenge: { showWidth: false } };
const RULEL = { easy: { mode: 'ruler', mm: false, max: 15 }, base: { mode: 'ruler', mm: false, max: 15 }, challenge: { mode: 'ruler', mm: false, max: 15 } };
const NLL = {
  easy: { mode: 'place', min: 0, max: 12, step: 1, labels: 'all', showValue: true },
  base: { mode: 'place', min: 0, max: 12, step: 1, labels: 'all' },
  challenge: { mode: 'place', min: 0, max: 12, step: 1, labels: 'ends' },
};
const IT = (d, extra) => ({ difficulty: d, ...(extra ? { extra: true } : {}) });
// 원 위의 선분·점 고르기
const cpick = (prompt, pick, radius, marks, d, extra) => ({ prompt, toolOptions: { mode: 'pick', radius, ...(marks ? { marks } : {}) }, target: { pick }, ...IT(d, extra) });
// 컴퍼스로 원 그리기(처음 벌린 폭은 1cm)
const cdraw = (prompt, target, d, extra) => ({ prompt, state: { width: 1 }, target, ...IT(d, extra) });
const cls = (prompt, cards, bins, d, extra) => { const ids = 'abcdefgh'; const cs = cards.map((c, i) => Object.assign({ id: ids[i], shape: c[0], label: c[1] }, c[3] ? { rot: c[3] } : {}));
  return { prompt, toolOptions: { cards: cs, bins }, target: { bins: Object.fromEntries(cards.map((c, i) => [ids[i], c[2]])) }, ...IT(d, extra) }; };
const sortCards = (prompt, topic, slots, cards, d, extra) => ({ prompt, toolOptions: { topic, slots, cards: cards.map((c) => c[0]) },
  target: { sort: Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c[1] === s).map((c) => c[0])])) }, ...IT(d, extra) });
const matchCards = (prompt, topic, pairs, spare, d, extra) => ({ prompt, toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p) => p[1]), ...(spare || [])] },
  target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, p[1]])) }, ...IT(d, extra) });
const pickCards = (prompt, topic, cards, right, d, extra) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: '고른 카드', cards }, target: { pick: right }, ...IT(d, extra) });
const orderCards = (prompt, topic, steps, d, extra) => ({ prompt, toolOptions: { mode: 'order', topic, cards: steps.map((s) => ({ id: s, text: s })) }, target: { order: steps }, ...IT(d, extra) });
// 재기: 띠 길이 읽고 수 쓰기 / 띠 만들기
const askLen = (prompt, name, len, q, num, d, extra) => ({ prompt, toolOptions: { object: { name, len }, askNum: { q, unit: 'cm' } }, target: { num }, ...IT(d, extra) });
const makeLen = (prompt, len, d, extra) => ({ prompt, toolOptions: { make: true }, state: { len: 1 }, target: { make: len }, ...IT(d, extra) });
const talk = (prompts) => prompts.map((prompt) => ({ prompt, free: true, talk: true, difficulty: 0 }));
const L = [];

// ───────────────────────────── 1차시 (intro · concept) ─────────────────────────────
L.push(lesson(1, {
  std: S1,
  title: '둥근 모양을 가려내고 원의 한가운데 찾기',
  objective: '둥근 모양 가운데 원을 가려내고, 원의 한가운데에 있는 점이 원의 중심임을 알아 원 위에서 찾을 수 있다.',
  desc: 'a round paper clock, a coin and a plate on a classroom table next to an oval mirror, with a child pressing a finger on the middle of the round clock',
  text: '원의 한가운데는 어디?',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 300, y: 84 }],
  intro: ['"교실 시계, 동전, 접시는 모두 둥글어요. 그런데 달걀 모양 거울도 원일까요?" 시연 단추로 컴퍼스가 침을 꽂은 점을 가운데에 두고 한 바퀴 도는 모습을 보여 준다. 둥글기만 하면 원이라고 말하는 학생이 있으면 길쭉한 달걀 모양을 손으로 그려 보게 하고, 원은 어느 방향으로 재도 가운데에서 둘레까지의 거리가 같다고 짚는다.', '둥근 모양 중에 원은 무엇일까요? 원의 한가운데를 찾아봐요.'],
  demo: { tool: 'compass', options: { showWidth: true }, sequence: [{ radius: 3 }] },
  acts: [
    { id: 'a1', title: '활동 1. 원인 물건과 원이 아닌 물건 나누기', minutes: 9, tool: 'shapes',
      task: '물건 카드를 눌러 원이에요 칸과 원이 아니에요 칸으로 나누어요. 둥글어도 길쭉하면 원이 아니에요.',
      teacher: '"원은 한가운데에서 둘레의 어느 쪽까지나 거리가 같아요. 길쭉한 달걀 모양은 짧은 쪽과 긴 쪽의 거리가 달라요." 길쭉한 거울을 원 칸에 넣은 학생에게는 두 손가락으로 가장 긴 곳과 가장 짧은 곳을 재어 보게 한다.',
      levels: CLSL,
      items: [
        cls('물건 카드를 원이에요 칸과 원이 아니에요 칸으로 나누어 보세요.', [['circle', '동전', 0], ['oval', '달걀 모양 거울', 1], ['square', '비스킷', 1], ['circle', '접시', 0]], ['원이에요', '원이 아니에요'], 0.1),
        cls('이번에도 원인 것만 골라 원이에요 칸에 넣어 보세요.', [['circle', '교실 시계', 0], ['oval', '럭비공 그림', 1], ['circle', '훌라후프', 0], ['hexagon', '육각 너트', 1], ['triangle', '삼각 표지판', 1]], ['원이에요', '원이 아니에요'], 0.14),
        cls('마지막으로 원이 아닌 것을 찾아 나누어 보세요.', [['oval', '길쭉한 쟁반', 1], ['circle', '자전거 바퀴', 0], ['rectangle', '엽서', 1], ['circle', '단추', 0], ['oval', '타원 풍선', 1]], ['원이에요', '원이 아니에요'], 0.18),
      ] },
    { id: 'a2', title: '활동 2. 원의 한가운데 점 찾기', minutes: 10, tool: 'compass',
      task: '컴퍼스 침을 꽂았던 점을 원의 중심이라고 해요. 그려진 원에서 중심을 찾아 눌러요.',
      teacher: '"컴퍼스 침을 꽂은 자리가 원의 중심이에요. 원 위의 어느 점까지나 거리가 같아요." 원 안에 있는 점이면 모두 중심이라고 생각하는 학생에게는 그 점에서 원 위의 두 곳까지 뼘으로 재어 거리가 같은지 확인하게 한다.',
      levels: PICKL,
      items: [
        cpick('컴퍼스 침을 꽂았던 점은 어디일까요? 원의 한가운데 점을 눌러 보세요.', 'center', 3, null, 0.1),
        cpick('원 위의 어느 점까지나 거리가 같은 점을 찾아 눌러 보세요.', 'center', 4, ['radius', 'chord'], 0.14,
          { predict: { q: '원 안에 있는 점은 모두 원의 중심일까요?', options: ['네, 모두 중심이에요', '아니요, 한 점뿐이에요'], answer: 1 },
            conclude: '원 위의 어느 점까지나 거리가 같은 점은 한가운데 한 점뿐이고, 그 점이 원의 중심이에요.' }),
        cpick('원의 중심에서 원 위의 한 점까지 곧게 이은 선분을 찾아 눌러 보세요.', 'radius', 3.5, ['chord', 'radius'], 0.18),
        cpick('세 선분 가운데 중심에서 시작해 원 위의 점에서 끝나는 선분을 찾으세요.', 'radius', 2.5, ['diameter', 'radius', 'chord'], 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 종이접기로 원의 중심 찾기', minutes: 7, tool: 'compass', pair: true,
      task: '짝과 둥글게 오린 종이를 반으로 접어 중심을 찾아요.',
      teacher: '"원 모양 종이를 반으로 접고, 다시 다른 방향으로 반을 접어 보세요. 접은 선 두 개가 만나는 곳이 원의 중심이에요." 접은 선이 한 개뿐이면 중심이 어디인지 알 수 없다고 짚고, 두 번째 접은 선을 어디로 접어도 같은 점에서 만나는지 확인하게 한다.',
      levels: PICKL,
      items: talk(['원 모양 종이를 반으로 접어 펼친 뒤, 다른 방향으로 한 번 더 접어 펼쳤으면 "다 했어요"를 누르세요.', '접은 선 두 개가 만나는 점에 ●표를 하고 짝에게 이 점이 원의 중심인 까닭을 말했으면 "다 했어요"를 누르세요.', '크기가 다른 원 모양 종이로도 중심을 찾아 둘의 중심을 짝과 견주었으면 "다 했어요"를 누르세요.']) },
  ],
  wrap: ['"원의 중심은 어디에 있는 점일까요?" 짝에게 접은 종이를 가리키며 말하게 한다. 출구 2번을 틀린 학생은 둥글기만 하면 원이라고 여기는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'compass', options: { mode: 'pick', radius: 3 }, prompt: '그림에서 원의 중심을 찾아 눌러 보세요.', target: { pick: 'center' }, difficulty: 0.1 },
    { type: 'choice', prompt: '달걀 모양 접시가 원이 아닌 까닭은 무엇인가요?', options: ['둘레가 둥글지 않아서', '한가운데에서 둘레까지의 거리가 다 같지 않아서', '색이 달라서'], answer: 1, difficulty: 0.15, explain: '원은 한가운데에서 둘레의 어느 곳까지나 거리가 같아요. 길쭉하면 짧은 쪽과 긴 쪽이 달라요.' },
    { type: 'choice', prompt: '원 모양 종이를 반으로 접고 다시 반으로 접었어요. 접은 선이 만나는 점은 무엇인가요?', options: ['원의 중심', '원 위의 점', '원의 바깥'], answer: 0, difficulty: 0.12, explain: '접은 선은 모두 한가운데를 지나서 만나는 점이 원의 중심이에요.' },
  ]],
  ws: {
    title: '원의 중심 찾기',
    items: [
      { type: 'figure', prompt: '그림에서 원의 중심에 ●표 하세요.', tool: 'compass', figures: [
        { options: { radius: 3, show: 'none' }, caption: '중심은 원의 한가운데' }, { options: { radius: 2, show: 'none' }, caption: '작은 원' }], answer: '두 원 모두 한가운데 점이 중심' },
      { type: 'choice', prompt: '원인 물건에 ○ 하세요.', options: ['동전', '길쭉한 달걀 모양 거울', '비스킷'], answer: '동전' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '컴퍼스 침을 꽂는 점이 원의 ______이에요. 이 점에서 원 위의 점까지는 거리가 모두 ______.', answer: '중심, 같아요' },
      { type: 'table', prompt: '둥근 물건을 찾아 원이면 ○, 아니면 ×를 쓰세요.', columns: ['물건', '시계', '길쭉한 쟁반', '훌라후프', '타원 풍선'], cells: [['원인가요?', '', '', '', '']], answer: '○, ×, ○, ×' },
      { type: 'short', prompt: '원 모양 종이를 두 번 접으면 왜 중심을 찾을 수 있는지 써 보세요.', answer: '접은 선이 둘 다 한가운데를 지나기 때문에 만나는 점이 중심이다.' },
    ],
    easy: {
      note: '원의 중심은 컴퍼스 침을 꽂는 한가운데 점이에요. 중심에서 원 위의 어느 점까지나 거리가 같아요.',
      items: [
        { type: 'figure', prompt: '원의 중심에 ●표 하세요.', tool: 'compass', figures: [{ options: { radius: 3, show: 'none' }, caption: '한가운데' }], answer: '한가운데 점' },
        { type: 'choice', prompt: '원 모양인 것에 ○ 하세요.', options: ['동전', '길쭉한 거울'], answer: '동전' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '컴퍼스 침을 꽂는 점이 원의 ______이에요.', answer: '중심' },
        { type: 'draw', prompt: '컵 바닥을 본떠 원을 그리고 접어서 중심을 찾아 ●표 해 보세요.' },
      ],
    },
  },
  diff: {
    easy: '카드가 칸에 맞게 놓이는지 바로 알려 주고, 원 모양 카드가 4개로 줄어요.',
    base: '카드를 모두 놓고 확인을 눌러야 알려 줘요.',
    challenge: '길쭉한 타원과 육각형 등 헷갈리는 카드가 늘고, 중심을 찾을 때 지름 선분까지 함께 보여요.',
  },
  notes: '자주 보이는 어려움: ① 둥글기만 하면 원이라고 한다(달걀 모양 거울) → 한가운데에서 둘레까지 거리가 모두 같아야 원. ② 원 안의 아무 점이나 중심이라고 한다 → 중심에서 둘레까지 거리가 모두 같다는 것을 뼘으로 확인. ③ 접은 선이 한 개인데 중심을 찾았다고 한다 → 접은 선 두 개가 만나야 한 점. 실물 활동으로 원 모양 종이를 미리 오려 두면 활동 3이 수월하다. 반지름·지름 이름은 3차시에서 이어서 다룬다.',
}));

// ───────────────────────────── 3차시 (core · representation) ─────────────────────────────
L.push(lesson(3, {
  std: S1,
  title: '원 위에 선분을 그어 반지름과 지름 구별하기',
  objective: '원 안에 그은 선분을 보고 반지름과 지름을 구별하고, 한 원에서 지름은 반지름의 2배임을 수직선에 나타낼 수 있다.',
  desc: 'a large paper circle with a red string from its middle point to the edge and a blue string across through the middle, laid on a craft table with scissors and rulers',
  text: '반지름과 지름',
  layers: [{ motif: 'flower', x: 100, y: 232 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'cloud', x: 330, y: 70, s: 0.7 }],
  intro: ['"지난 시간에 찾은 원의 중심에서 원 위의 한 점까지 줄을 그으면 무슨 이름일까요?" 시연 단추로 원이 그려지고 반지름 선이 나타나는 모습을 보여 준다. 선분을 보고 "길이가 긴 것이 지름"이라고만 말하는 학생이 있는지 살피고, 중심을 지나는지가 기준이라고 짚는다.', '원 안의 선분이 반지름인지 지름인지, 어떻게 알 수 있을까요?'],
  demo: { tool: 'compass', options: { showWidth: true }, sequence: [{ radius: 2 }] },
  acts: [
    { id: 'a1', title: '활동 1. 선분을 보고 이름 붙이기', minutes: 8, tool: 'compass',
      task: '원에 선분이 세 개 그려져 있어요. 물어보는 이름에 맞는 선분을 눌러요.',
      teacher: '"원의 중심에서 시작해서 원 위의 점에서 끝나면 반지름이에요. 양쪽 끝이 원 위에 있고 중심을 지나면 지름이에요." 원 위의 두 점을 이은 짧은 선분을 지름이라고 하는 학생에게는 "중심을 지나나요?"를 묻는다.',
      levels: PICKL,
      items: [
        cpick('원의 중심에서 원 위의 한 점까지 이은 선분을 눌러 보세요.', 'radius', 4, ['chord', 'diameter', 'radius'], 0.12),
        cpick('중심을 지나서 원 위의 두 점을 이은 선분을 눌러 보세요.', 'diameter', 3, ['radius', 'chord', 'diameter'], 0.16,
          { predict: { q: '원 위의 두 점을 이은 선분 가운데 가장 긴 것은 어떤 선분일까요?', options: ['중심을 지나는 선분', '중심을 지나지 않는 선분'], answer: 0 },
            conclude: '원 위의 두 점을 이은 선분 가운데 중심을 지나는 지름이 가장 길어요.' }),
        cpick('지름이 아니라 반지름인 선분을 찾아 눌러 보세요.', 'radius', 2.5, ['diameter', 'chord', 'radius'], 0.2),
        cpick('원 위의 두 점을 이은 선분 가운데 지름을 찾아 눌러 보세요.', 'diameter', 3.5, ['chord', 'diameter'], 0.24, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 설명 카드를 이름 칸에 나누기', minutes: 9, tool: 'mindmap',
      task: '설명 카드를 읽고 반지름, 지름, 둘 다 아니에요 칸에 알맞게 놓아요.',
      teacher: '"한 원에서 반지름은 몇 개 그을 수 있을까요? 길이는 어떨까요?" 모두 같고 셀 수 없이 많다고 확인한다. 중심을 지나지 않는 선분을 지름 칸에 넣은 학생에게는 "이 선분은 중심을 지나나요?"를 묻는다.',
      levels: CARD,
      items: [
        sortCards('설명 카드를 반지름, 지름, 둘 다 아니에요 칸으로 나누어 보세요.', '원 위의 선분', ['반지름', '지름', '둘 다 아니에요'], [
          ['중심에서 원 위의 한 점까지 이은 선분', '반지름'], ['중심을 지나 원 위의 두 점을 이은 선분', '지름'], ['중심을 지나지 않고 원 위의 두 점을 이은 선분', '둘 다 아니에요'], ['한 원에서 길이가 모두 같은 선분', '반지름']], 0.14),
        sortCards('이번에는 길이와 개수로 설명한 카드를 나누어 보세요.', '원 위의 선분', ['반지름', '지름', '둘 다 아니에요'], [
          ['한 원에서 가장 긴 선분', '지름'], ['중심에서 원 위의 점까지의 길이', '반지름'], ['원 안에 곧게 그은 아무 선분', '둘 다 아니에요'], ['반지름의 2배인 선분', '지름'], ['중심에서 원 바깥까지 그은 선분', '둘 다 아니에요']], 0.2),
        sortCards('한 번 더, 말한 친구의 설명을 나누어 보세요.', '원 위의 선분', ['반지름', '지름', '둘 다 아니에요'], [
          ['"컴퍼스를 벌린 폭이에요"', '반지름'], ['"원 위의 점끼리 이었는데 중심을 안 지나요"', '둘 다 아니에요'], ['"원을 똑같이 반으로 나누어요"', '지름'], ['"한 원에서 무수히 많이 그을 수 있고 길이가 같아요"', '반지름']], 0.24, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 반지름을 지름으로 바꾸어 수직선에 나타내기', minutes: 9, tool: 'numberline',
      task: '지름은 반지름의 2배예요. 지름이나 반지름의 길이를 수직선 위에 점으로 나타내요.',
      teacher: '"반지름이 3cm이면 지름은 몇 cm일까요? 3cm를 두 번 이어 붙여 봐요." 반지름 3cm인 원의 지름을 3cm라고 하는 학생에게는 중심을 지나 양쪽으로 반지름이 하나씩 있다고 그림으로 그려 보게 한다.',
      levels: NLL,
      items: [
        { prompt: '반지름이 3cm인 원의 지름은 몇 cm일까요? 수직선에 점으로 나타내 보세요.', toolOptions: { names: ['지름'] }, target: { points: [6] }, ...IT(0.14),
          predict: { q: '반지름이 3cm인 원의 지름은 3cm보다 길까요?', options: ['더 길어요', '같아요', '더 짧아요'], answer: 0 },
          conclude: '지름은 반지름 두 개를 이은 길이라서 반지름의 2배예요.' },
        { prompt: '지름이 10cm인 접시의 반지름은 몇 cm일까요? 점으로 나타내 보세요.', toolOptions: { names: ['반지름'] }, target: { points: [5] }, ...IT(0.18) },
        { prompt: '지름이 8cm인 원의 반지름은 몇 cm일까요? 점으로 나타내 보세요.', toolOptions: { names: ['반지름'] }, target: { points: [4] }, ...IT(0.2) },
        { prompt: '반지름이 6cm인 원의 지름은 몇 cm일까요? 점으로 나타내 보세요.', toolOptions: { names: ['지름'] }, target: { points: [12] }, ...IT(0.26), extra: true },
      ] },
  ],
  wrap: ['"지름은 반지름의 몇 배일까요? 한 원에서 지름은 몇 개 그을 수 있을까요?" 짝에게 설명하게 한다. 출구 3번을 틀린 학생은 반지름을 지름이라고 읽는지 다음 시간에 먼저 짚어 본다.', [
    { type: 'tool', tool: 'compass', options: { mode: 'pick', radius: 3, marks: ['diameter', 'radius', 'chord'] }, prompt: '그림에서 반지름을 찾아 눌러 보세요.', target: { pick: 'radius' }, difficulty: 0.14 },
    { type: 'choice', prompt: '한 원에서 지름이 14cm이면 반지름은 몇 cm인가요?', options: ['7cm', '14cm', '28cm'], answer: 0, difficulty: 0.15, explain: '지름은 반지름의 2배라서 14를 2로 나눈 7cm가 반지름이에요.' },
    { type: 'choice', prompt: '원 위의 두 점을 이은 선분이 지름이 되려면 꼭 필요한 것은 무엇인가요?', options: ['길이가 5cm일 것', '중심을 지날 것', '원 안쪽에 있을 것'], answer: 1, difficulty: 0.2, explain: '원 위의 두 점을 이은 선분 가운데 중심을 지나는 선분만 지름이에요.' },
  ]],
  ws: {
    title: '반지름과 지름',
    items: [
      { type: 'figure', prompt: '선분이 반지름인지 지름인지 쓰세요.', tool: 'compass', figures: [
        { options: { radius: 3, show: 'radius' }, caption: '(          )' }, { options: { radius: 3, show: 'diameter' }, caption: '(          )' }], answer: '반지름, 지름' },
      { type: 'table', prompt: '표의 빈칸에 알맞은 길이를 쓰세요.', columns: ['반지름', '지름'], cells: [['4cm', ''], ['', '18cm'], ['7cm', ''], ['', '12cm']], answer: '8cm, 9cm, 14cm, 6cm' },
      { type: 'choice', prompt: '다음 중 지름은 반지름의 몇 배일까요?', options: ['1배', '2배', '3배'], answer: '2배' },
      { type: 'check', prompt: '옳은 설명을 모두 골라 □에 ✓표 하세요.', options: ['한 원에서 반지름은 모두 같다', '지름은 중심을 지난다', '원 위의 두 점을 이은 선분은 모두 지름이다', '지름은 반지름보다 길다'], answer: '한 원에서 반지름은 모두 같다, 지름은 중심을 지난다, 지름은 반지름보다 길다' },
      { type: 'short', prompt: '중심을 지나지 않는 선분을 지름이라고 할 수 없는 까닭을 써 보세요.', answer: '지름은 중심을 지나 원 위의 두 점을 이은 선분이기 때문이다.' },
    ],
    easy: {
      note: '반지름: 중심에서 원 위의 한 점까지. 지름: 중심을 지나 원 위의 두 점까지. 지름 = 반지름 × 2.',
      items: [
        { type: 'figure', prompt: '선분이 반지름인지 지름인지 쓰세요.', tool: 'compass', figures: [{ options: { radius: 3, show: 'radius' }, caption: '(          )' }, { options: { radius: 3, show: 'diameter' }, caption: '(          )' }], answer: '반지름, 지름' },
        { type: 'table', prompt: '빈칸에 알맞은 길이를 쓰세요.', columns: ['반지름', '지름'], cells: [['2cm', ''], ['', '10cm']], answer: '4cm, 5cm' },
        { type: 'choice', prompt: '중심을 지나는 선분에 ○ 하세요.', options: ['반지름', '지름'], answer: '지름' },
        { type: 'draw', prompt: '원을 그리고 중심에서 원 위의 한 점까지 반지름을 그어 보세요.' },
      ],
    },
  },
  diff: {
    easy: '선분 세 개의 순서가 쉽게 보이고, 설명 카드가 맞는 칸에 들어가면 초록 테두리가 보여요. 수직선 점에 값이 보여요.',
    base: '수직선 눈금이 모두 보이지만 값은 알려 주지 않아요.',
    challenge: '수직선에 양 끝 숫자만 있어서 스스로 눈금을 세어야 하고, 길이로 설명한 카드가 늘어요.',
  },
  notes: '자주 보이는 어려움: ① 가장 긴 선분이 지름이니 길이만 보고 고른다(중심을 지나지 않는 긴 선분) → 중심을 지나는지 먼저 본다. ② 반지름과 지름 사이의 2배 관계를 반대로 쓴다(반지름 3cm → 지름 1.5cm) → 반지름 두 개를 이어 붙이는 그림으로 확인. ③ 지름과 반지름 읽기를 바꾼다 → 활동 2의 설명 카드에서 "중심에서 시작하는가"를 소리 내어 읽기. 길이를 직접 재는 활동은 4차시에서 한다.',
}));

// ───────────────────────────── 4차시 (core · application) ─────────────────────────────
L.push(lesson(4, {
  std: S1,
  title: '접시와 쿠키의 지름·반지름으로 필요한 길이 구하기',
  objective: '원 모양 물건의 지름을 자로 재어 반지름을 구하고, 반지름이 주어지면 지름만큼의 길이를 만들어 크기를 비교할 수 있다.',
  desc: 'a round paper plate, a round cookie and a round clock lined up on a kitchen counter beside a wooden ruler and a measuring tape',
  text: '지름 재어 보기',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'flower', x: 400, y: 232, color: 'rose' }, { motif: 'bird', x: 280, y: 84 }, { motif: 'tree', x: 60, y: 220, s: 0.8 }],
  intro: ['"접시에 쿠키를 올리려고 해요. 접시의 가장 긴 곳은 어디를 재면 될까요?" 시연 단추로 컴퍼스가 반지름 4cm인 원을 그리고 지름 선이 나타나는 모습을 보여 준다. 접시 가장자리 아무 곳이나 재도 된다고 말하는 학생이 있으면, 중심을 지나게 재어야 한다고 짚는다.', '접시나 시계는 어디를 재야 지름일까요? 자로 재어 봐요.'],
  demo: { tool: 'compass', options: { showWidth: true }, sequence: [{ radius: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 접시의 지름을 재어 반지름 구하기', minutes: 9, tool: 'measure',
      task: '띠는 원 모양 물건의 지름이에요. 자로 길이를 확인하고 반지름을 수로 써요.',
      teacher: '"지름이 10cm이면 반지름은 몇 cm일까요? 반으로 접어 보면 어떤 모양이 돼요?" 지름 길이를 그대로 반지름으로 쓰는 학생에게는 띠를 반으로 접어 재어 보게 한다.',
      levels: RULEL,
      items: [
        askLen('종이 접시의 지름은 띠의 길이예요. 반지름은 몇 cm일까요?', '접시 지름', 10, '반지름은 몇 cm일까요?', 5, 0.14),
        askLen('둥근 쿠키의 지름은 띠의 길이예요. 반지름을 써 보세요.', '쿠키 지름', 8, '반지름은 몇 cm일까요?', 4, 0.16),
        askLen('벽시계의 지름이 띠의 길이예요. 반지름은 몇 cm일까요?', '시계 지름', 14, '반지름은 몇 cm일까요?', 7, 0.2),
        askLen('둥근 쟁반의 지름이 띠의 길이예요. 반지름을 써 보세요.', '쟁반 지름', 12, '반지름은 몇 cm일까요?', 6, 0.22, true),
      ] },
    { id: 'a2', title: '활동 2. 반지름에 맞는 지름 띠 만들기', minutes: 9, tool: 'measure',
      task: '반지름이 주어지면 지름만큼의 띠를 끌어 만들어요. 지름은 반지름의 2배예요.',
      teacher: '"반지름이 5cm인 원 모양 컵받침을 올릴 상자는 가로가 몇 cm 이상이어야 할까요?" 반지름만큼만 띠를 만든 학생에게는 컵받침의 한쪽 끝에서 다른 쪽 끝까지 손으로 짚어 보게 한다.',
      levels: { easy: { mode: 'ruler', mm: false, max: 15, make: true }, base: { mode: 'ruler', mm: false, max: 15, make: true }, challenge: { mode: 'ruler', mm: false, max: 15, make: true } },
      items: [
        makeLen('반지름이 4cm인 원 모양 쿠키가 있어요. 지름만큼 띠를 만들어 보세요.', 8, 0.18),
        makeLen('반지름이 5cm인 컵받침을 놓을 칸의 가로 길이는 지름만큼이에요. 띠를 만들어 보세요.', 10, 0.2),
        makeLen('반지름이 6cm인 쟁반이에요. 쟁반의 지름만큼 띠를 만들어 보세요.', 12, 0.24),
        makeLen('반지름이 7cm인 큰 접시가 상자에 들어가려면 가로가 지름만큼은 되어야 해요. 띠를 만들어 보세요.', 14, 0.28, true),
      ] },
    { id: 'a3', title: '활동 3. 크기가 같은 원 고르기', minutes: 8, tool: 'mindmap',
      task: '기준 원과 크기가 같은 원 카드를 모두 골라요. 지름과 반지름을 같은 기준으로 바꾸어 견줘요.',
      teacher: '"반지름 5cm인 원과 지름 10cm인 원은 크기가 같을까요?" 두 수를 그대로 견주어 "5cm와 10cm니까 다르다"고 말하는 학생에게는 반지름으로 맞춰 다시 말하게 한다.',
      levels: CARD,
      items: [
        pickCards('반지름이 5cm인 원과 크기가 같은 원을 모두 골라 보세요.', '반지름 5cm', ['지름 10cm인 원', '지름 5cm인 원', '반지름 10cm인 원', '반지름 5cm인 다른 원'], ['지름 10cm인 원', '반지름 5cm인 다른 원'], 0.2),
        pickCards('지름이 6cm인 원과 크기가 같은 원을 모두 골라 보세요.', '지름 6cm', ['반지름 3cm인 원', '반지름 6cm인 원', '지름 3cm인 원', '지름 6cm인 다른 원'], ['반지름 3cm인 원', '지름 6cm인 다른 원'], 0.24),
        pickCards('반지름이 4cm인 원보다 큰 원을 모두 골라 보세요.', '반지름 4cm', ['지름 9cm인 원', '지름 6cm인 원', '반지름 3cm인 원', '반지름 5cm인 원'], ['지름 9cm인 원', '반지름 5cm인 원'], 0.28),
      ] },
  ],
  wrap: ['"접시 지름이 16cm이면 반지름은 몇 cm일까요? 어떻게 알았어요?" 짝에게 "반으로 나눈다"를 말하게 한다. 출구 2번을 틀린 학생은 지름과 반지름을 바꾸어 계산하는지 다음 시간에 먼저 짚어 본다.', [
    { type: 'tool', tool: 'measure', options: { mode: 'ruler', mm: false, max: 15, object: { name: '컵 지름', len: 6 }, askNum: { q: '반지름은 몇 cm일까요?', unit: 'cm' } }, prompt: '컵 지름이 띠의 길이예요. 반지름을 써 보세요.', target: { num: 3 }, difficulty: 0.14 },
    { type: 'choice', prompt: '반지름이 9cm인 원의 지름은 몇 cm인가요?', options: ['4.5cm', '9cm', '18cm'], answer: 2, difficulty: 0.15, explain: '지름은 반지름의 2배라서 9의 2배인 18cm예요.' },
    { type: 'choice', prompt: '지름 12cm인 원 모양 접시를 반지름으로 말하면 몇 cm인가요?', options: ['6cm', '12cm', '24cm'], answer: 0, difficulty: 0.15, explain: '12를 2로 나눈 6cm가 반지름이에요.' },
  ]],
  ws: {
    title: '지름과 반지름으로 길이 구하기',
    items: [
      { type: 'table', prompt: '빈칸에 알맞은 수를 써 넣으세요.', columns: ['원 모양 물건', '지름', '반지름'], cells: [['접시', '16cm', ''], ['쿠키', '', '3cm'], ['시계', '20cm', ''], ['쟁반', '', '5cm']], answer: '8cm, 6cm, 10cm, 10cm' },
      { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '지름이 18cm인 원의 반지름은 ___cm이고, 반지름이 9cm인 원의 지름은 ___cm이에요.', answer: '9, 18' },
      { type: 'choice', prompt: '반지름이 6cm인 원과 크기가 같은 원에 ○ 하세요.', options: ['지름 6cm인 원', '지름 12cm인 원', '지름 3cm인 원'], answer: '지름 12cm인 원' },
      { type: 'check', prompt: '크기가 같은 원끼리 짝지은 것을 모두 골라 □에 ✓표 하세요.', options: ['반지름 4cm와 지름 8cm', '반지름 5cm와 지름 5cm', '반지름 2cm와 지름 4cm', '반지름 6cm와 지름 6cm'], answer: '반지름 4cm와 지름 8cm, 반지름 2cm와 지름 4cm' },
      { type: 'short', prompt: '지름이 10cm인 원의 반지름을 5cm라고 구한 방법을 써 보세요.', answer: '지름은 반지름의 2배이므로 10을 2로 나누어 5cm를 구한다.' },
    ],
    easy: {
      note: '지름은 반지름의 2배, 반지름은 지름의 반이에요. 지름을 2로 나누면 반지름이에요.',
      items: [
        { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['지름', '반지름'], cells: [['8cm', ''], ['', '5cm']], answer: '4cm, 10cm' },
        { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '반지름이 3cm이면 지름은 ___cm예요.', answer: '6' },
        { type: 'choice', prompt: '지름이 6cm인 원과 크기가 같은 것에 ○ 하세요.', options: ['반지름 3cm인 원', '반지름 6cm인 원'], answer: '반지름 3cm인 원' },
        { type: 'draw', prompt: '컵을 본떠 원을 그리고 자로 지름을 재어 반지름을 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '띠 길이를 한 칸씩 끌어도 눈금이 보이고, 크기가 같은 원 카드가 맞는 칸에 들어가면 초록 테두리가 보여요.',
    base: '자 눈금은 보이지만 맞는 길이는 알려 주지 않아요.',
    challenge: '지름이 큰 원(반지름 7cm)과 지름·반지름이 섞인 비교 카드가 나와요.',
  },
  notes: '자주 보이는 어려움: ① 반지름을 구하라는데 지름을 그대로 쓴다 → 지름을 반으로 접어 확인. ② 반지름을 구할 때 곱해서 지름보다 크게 쓴다(8cm → 16cm) → 반지름은 지름보다 짧다는 어림으로 점검. ③ 크기 비교에서 숫자만 보고 같다고 한다(반지름 5cm vs 지름 5cm) → 두 수를 반지름 기준으로 바꾼 뒤 비교. 실제 접시를 가져와 지름을 재는 활동을 3분 정도 곁들이면 좋다.',
}));

// ───────────────────────────── 5차시 (core · concept) ─────────────────────────────
L.push(lesson(5, {
  std: S2,
  safety: NEEDLE,
  title: '컴퍼스를 벌린 폭이 반지름이 되는 까닭 알아보기',
  objective: '컴퍼스를 벌린 폭이 그리려는 원의 반지름이 됨을 알고, 원을 그리는 순서를 정해 반지름과 지름이 주어진 원을 그릴 수 있다.',
  desc: 'a drawing compass opened wide with its metal point on a dot in the middle of a sheet and its pencil leg touching a ruler, next to a freshly drawn circle',
  text: '컴퍼스 폭 = 반지름',
  layers: [{ motif: 'flower', x: 110, y: 232, color: 'sky' }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 300, y: 84 }, { motif: 'star', x: 170, y: 92, s: 0.6 }],
  intro: ['"누름 못과 띠 종이로 원을 그리면 못에서 연필까지의 길이가 변하지 않았어요. 컴퍼스에서는 무엇이 그 길이일까요?" 시연 단추로 컴퍼스가 반지름 3cm인 원을 그리는 모습을 보여 준다. 컴퍼스를 얼마나 벌려야 원이 커지는지 말하게 하고, 벌린 폭이 곧 반지름이라고 짚는다.', '컴퍼스를 얼마나 벌리면 원의 크기가 정해질까요?'],
  demo: { tool: 'compass', options: { showWidth: true }, sequence: [{ radius: 3 }] },
  acts: [
    { id: 'a1', title: '활동 1. 반지름이 정해진 원 그리기', minutes: 9, tool: 'compass',
      task: '연필 다리 끝을 자의 눈금에 맞춰 벌리고 손잡이를 돌려 원을 그려요. 침은 중심에 있어요.',
      teacher: '"자의 0에 침을 맞추고 연필 끝이 닿는 눈금을 읽어요." 0이 아니라 1에 침을 맞추고 끝 눈금을 그대로 읽는 학생에게는 침 자리부터 몇 cm인지 세어 보게 한다.',
      options: { mode: 'draw' },
      levels: DRAWL,
      items: [
        cdraw('반지름이 2cm인 원을 그려 보세요.', { radius: 2 }, 0.12),
        cdraw('반지름이 5cm인 큰 원을 그려 보세요.', { radius: 5 }, 0.18,
          { predict: { q: '반지름 2cm인 원보다 반지름 5cm인 원은 컴퍼스를 얼마나 벌려야 할까요?', options: ['더 많이', '더 적게', '똑같이'], answer: 0 },
            conclude: '컴퍼스를 더 벌릴수록 반지름이 길어져서 더 큰 원이 그려져요.' }),
        cdraw('반지름이 3cm인 원을 그려 보세요. 0에서 3까지 센 눈금에 연필 끝을 맞추어요.', { radius: 3 }, 0.14),
      ] },
    { id: 'a2', title: '활동 2. 원을 그리는 순서 정하기', minutes: 8, tool: 'mindmap',
      task: '컴퍼스로 원을 그릴 때 해야 할 일을 순서대로 놓아요.',
      teacher: '"먼저 무엇을 정해야 컴퍼스를 얼마나 벌릴지 알 수 있을까요?" 원의 크기를 정하지 않고 침부터 꽂는 학생에게는 반지름 몇 cm인 원을 그릴지부터 말하게 한다.',
      levels: CARD,
      items: [
        orderCards('반지름이 4cm인 원을 그리는 순서대로 카드를 놓아 보세요.', '원 그리는 순서', ['원의 중심으로 할 점 찍기', '컴퍼스를 4cm 벌리기', '침을 중심에 꽂기', '손잡이를 잡고 한 바퀴 돌리기'], 0.2),
        orderCards('지름이 6cm인 원을 그리는 순서대로 카드를 놓아 보세요.', '지름으로 그리기', ['지름의 반인 3cm 계산하기', '컴퍼스를 3cm 벌리기', '중심에 침 꽂기', '한 바퀴 돌려 원 그리기'], 0.24),
        orderCards('그린 원이 맞는지 확인하는 순서대로 카드를 놓아 보세요.', '그린 뒤 확인', ['원을 다 그리기', '중심에서 원 위의 점까지 자로 재기', '다른 곳에서도 재어 보기', '길이가 모두 같은지 말하기'], 0.28, true),
      ] },
    { id: 'a3', title: '활동 3. 지름이 정해진 원 그리기', minutes: 9, tool: 'compass', pair: true,
      task: '지름이 주어지면 컴퍼스를 지름의 반만큼 벌려요. 짝과 어떻게 벌릴지 먼저 말해요.',
      teacher: '"지름 8cm인 원을 그리려면 컴퍼스를 몇 cm 벌릴까요?" 지름 그대로 8cm를 벌리는 학생에게는 지름의 반이 컴퍼스를 벌린 폭이라고 지난 활동의 순서 카드로 짚는다.',
      options: { mode: 'draw' },
      levels: DRAWL,
      items: [
        cdraw('지름이 4cm인 원을 그려 보세요.', { diameter: 4 }, 0.2),
        cdraw('지름이 8cm인 원을 그려 보세요. 컴퍼스를 몇 cm 벌릴지 먼저 말해요.', { diameter: 8 }, 0.26,
          { predict: { q: '지름 8cm인 원을 그리려면 컴퍼스를 몇 cm 벌릴까요?', options: ['8cm', '4cm', '16cm'], answer: 1 },
            conclude: '컴퍼스를 벌린 폭은 반지름이라서 지름 8cm의 반인 4cm만 벌려요.' }),
        cdraw('지름이 10cm인 원을 그려 보세요.', { diameter: 10 }, 0.3),
      ] },
  ],
  wrap: ['"컴퍼스를 벌린 폭은 원의 무엇일까요?" 짝에게 반지름이라고 말하며 손으로 벌린 폭을 보여 주게 한다. 출구에서 지름만큼 벌린 학생을 확인하고, 다음 시간에 먼저 반지름과 지름의 2배 관계를 짚는다.', [
    { type: 'tool', tool: 'compass', options: { mode: 'draw', showWidth: false }, state: { width: 1 }, prompt: '반지름이 4.5cm인 원을 그려 보세요.', target: { radius: 4.5 }, difficulty: 0.26 },
    { type: 'choice', prompt: '지름이 12cm인 원을 그리려면 컴퍼스를 몇 cm 벌려야 하나요?', options: ['6cm', '12cm', '24cm'], answer: 0, difficulty: 0.2, explain: '컴퍼스를 벌린 폭은 반지름이고, 지름 12cm의 반인 6cm예요.' },
    { type: 'choice', prompt: '컴퍼스로 원을 그릴 때 침은 어디에 꽂아야 하나요?', options: ['원의 중심', '원 위의 점', '원 바깥'], answer: 0, difficulty: 0.1, explain: '침을 꽂은 점이 원의 중심이 되어요.' },
  ]],
  ws: {
    title: '컴퍼스를 벌린 폭',
    items: [
      { type: 'figure', prompt: '반지름을 나타내는 선분을 따라 쓰고, 컴퍼스를 몇 cm 벌려야 하는지 쓰세요.', tool: 'compass', figures: [
        { options: { radius: 3, show: 'radius' }, caption: '벌린 폭 ___cm' }, { options: { radius: 2, show: 'radius' }, caption: '벌린 폭 ___cm' }], answer: '3cm, 2cm' },
      { type: 'table', prompt: '원을 그리려면 컴퍼스를 몇 cm 벌려야 하는지 쓰세요.', columns: ['주어진 것', '반지름 3cm', '지름 8cm', '지름 10cm', '반지름 6cm'], cells: [['벌릴 폭', '', '', '', '']], answer: '3cm, 4cm, 5cm, 6cm' },
      { type: 'choice', prompt: '컴퍼스를 벌린 폭은 원의 무엇과 같은가요?', options: ['반지름', '지름', '둘레'], answer: '반지름' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '컴퍼스로 원을 그릴 때 침을 꽂는 점은 원의 ______이고, 벌린 폭은 ______이에요.', answer: '중심, 반지름' },
      { type: 'draw', prompt: '컴퍼스로 반지름이 2cm인 원을 그리고 중심에 ●표를 해 보세요.', answer: '침을 꽂은 점에 ●표, 컴퍼스를 2cm 벌렸는지 확인' },
    ],
    easy: {
      note: '컴퍼스를 벌린 폭이 반지름이에요. 지름이 주어지면 반으로 줄인 길이만 벌려요.',
      items: [
        { type: 'figure', prompt: '컴퍼스를 몇 cm 벌려야 하는지 쓰세요.', tool: 'compass', figures: [{ options: { radius: 3, show: 'radius' }, caption: '벌린 폭 ___cm' }], answer: '3cm' },
        { type: 'table', prompt: '빈칸에 컴퍼스를 벌린 폭을 쓰세요.', columns: ['주어진 것', '반지름 4cm', '지름 6cm'], cells: [['벌릴 폭', '', '']], answer: '4cm, 3cm' },
        { type: 'choice', prompt: '컴퍼스로 원을 그릴 때 침을 꽂는 곳에 ○ 하세요.', options: ['원의 중심', '원 위의 점'], answer: '원의 중심' },
        { type: 'draw', prompt: '컴퍼스로 반지름 3cm인 원을 그려 보세요.' },
      ],
    },
  },
  diff: {
    easy: '벌린 폭이 글자로 보이고, 지름 문항에서도 반만큼 벌린다는 안내가 따라붙어요.',
    base: '벌린 폭은 맞힌 뒤에만 보여서 자의 눈금을 읽어야 해요.',
    challenge: '벌린 폭 글자가 없고 4.5cm처럼 작은 눈금까지 읽어야 하는 문항이 있어요.',
  },
  notes: '가장 흔한 실수는 지름이 주어졌을 때 컴퍼스를 지름만큼 벌리는 것이다. 교구는 이 경우를 알려 주지만, 실제 컴퍼스에서는 침이 미끄러지거나 다리가 저절로 움직일 수 있으니 활동 3 뒤에 공책에 반지름 3cm와 지름 4cm 원을 직접 그려 겹쳐 본다(3분). ① 침을 중심에서 움직이면 원이 어긋난다 → 침 손으로 누르지 않고 손잡이만 돌리기. ② 연필 끝을 0이 아닌 곳에 맞춘다 → 자의 0에 침을 맞추는 것부터 확인. ③ 순서를 바꿔 중심 없이 벌린다 → 순서 카드를 말로 다시 읽기.',
}));

// ───────────────────────────── 6차시 (core · representation) ─────────────────────────────
L.push(lesson(6, {
  std: S2,
  safety: NEEDLE,
  title: '중심을 정해 크기가 다른 원으로 무늬 만들기',
  objective: '같은 중심에서 반지름만 달리하거나 중심을 옮겨 가며 크기가 다른 원을 그려 무늬를 만들고, 각 원의 중심과 반지름을 말할 수 있다.',
  desc: 'a paper target made of five nested circles with the same middle point next to a chain of overlapping rings in different colors on a classroom board',
  text: '원으로 무늬 만들기',
  layers: [{ motif: 'flower', x: 100, y: 232, color: 'rose' }, { motif: 'flower', x: 380, y: 236, color: 'lavender' }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'tree', x: 420, y: 218, s: 0.7 }],
  intro: ['"과녁은 어떤 모양이 겹쳐 있나요? 올림픽 고리는요?" 시연 단추로 컴퍼스가 반지름 2cm인 원을 그리는 모습을 보여 준다. 과녁처럼 중심이 같은 원과, 중심이 다른 원 무늬를 구분해 말하게 하고, 무늬마다 침을 꽂는 자리가 어디인지 짚는다.', '크기가 다른 원은 컴퍼스로 어떻게 그릴까요? 침 자리를 눈여겨봐요.'],
  demo: { tool: 'compass', options: { showWidth: true }, sequence: [{ radius: 2 }] },
  acts: [
    { id: 'a1', title: '활동 1. 중심은 같고 크기가 다른 원 그리기', minutes: 9, tool: 'compass',
      task: '침 자리는 그대로 두고 컴퍼스를 점점 더 벌려 크기가 다른 원을 차례로 그려요.',
      teacher: '"침을 그대로 두고 벌린 폭만 바꾸면 원의 무엇이 달라질까요?" 중심이 같아도 반지름이 다르면 원의 크기가 달라진다고 확인한다. 폭을 바꿀 때 침까지 옮기는 학생에게는 중심을 표시해 두고 시작하게 한다.',
      options: { mode: 'draw' },
      levels: DRAWL,
      items: [
        cdraw('과녁 가장 안쪽 원이에요. 반지름이 1.5cm인 원을 그려 보세요.', { radius: 1.5 }, 0.16),
        cdraw('안쪽 원을 감싸는 둘째 원이에요. 반지름이 3cm인 원을 그려 보세요.', { radius: 3 }, 0.2),
        cdraw('둘째 원을 감싸는 셋째 원이에요. 반지름이 4.5cm인 원을 그려 보세요.', { radius: 4.5 }, 0.24),
        cdraw('가장 바깥 원이에요. 반지름이 5cm인 원을 그려 보세요.', { radius: 5 }, 0.28, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 무늬와 그리는 방법 짝짓기', minutes: 9, tool: 'mindmap',
      task: '무늬 이름과 그리는 방법을 짝지어요. 침을 어디에 꽂는지 생각해요.',
      teacher: '"과녁 무늬는 침을 몇 곳에 꽂았을까요?" 한 곳, 중심은 같고 반지름만 다르다. 올림픽 고리처럼 이어진 원은 침 자리를 옮겼다고 말한다. 중심을 옮기면 무늬가 달라진다는 점을 짚는다.',
      levels: CARD,
      items: [
        matchCards('무늬 이름에 맞는 그리는 방법을 짝지어 보세요.', '원 무늬', [['과녁 무늬', '침은 한 곳, 폭만 바꿔요'], ['고리를 이은 무늬', '침 자리를 옮겨요'], ['꽃잎 무늬', '둘레 위의 점에 침을 꽂아요']], ['침 없이 손으로 그려요'], 0.22),
        matchCards('원의 크기가 모두 같은 무늬와 다른 무늬를 방법과 짝지어 보세요.', '원 무늬', [['크기가 모두 같은 원 무늬', '폭을 그대로 두고 침만 옮겨요'], ['크기가 다른 원 무늬', '폭을 바꿔 가며 그려요'], ['한 점에서 퍼지는 파문 무늬', '침은 그대로, 폭만 늘려요']], ['폭도 침도 바꾸지 않아요'], 0.26),
        matchCards('눈사람 무늬를 그리는 방법과 각 부분을 짝지어 보세요.', '눈사람 그리기', [['큰 몸통 원', '반지름을 크게 벌려요'], ['작은 머리 원', '반지름을 작게 벌려요'], ['두 원이 닿게 하기', '머리의 중심을 몸통 위쪽에 옮겨요']], ['몸통과 머리에 같은 폭을 써요'], 0.3, true),
      ] },
    { id: 'a3', title: '활동 3. 모둠이 무늬 하나를 정해 그리기', minutes: 8, tool: 'compass', pair: true,
      task: '모둠이 컴퍼스로 무늬를 하나 그리고, 침 자리와 반지름을 표시해요.',
      teacher: '"우리 무늬에서 원의 중심은 몇 개일까요? 원의 크기는 모두 같을까요?" 무늬를 그린 뒤 중심에 ●표를 하고 반지름을 자로 재어 쓰게 한다. 무늬 모양에만 신경 쓰고 중심 표시를 빠뜨리는 모둠에게는 어느 원이 어느 중심에서 나왔는지 물어본다.',
      levels: PICKL,
      items: talk(['컴퍼스로 무늬를 하나 그리기로 정하고 침 자리를 어디에 둘지 말했으면 "다 했어요"를 누르세요.', '무늬를 그린 뒤 각 원의 중심에 ●표를 하고 반지름을 자로 재어 쓴 뒤 "다 했어요"를 누르세요.', '다른 모둠 무늬에서 침 자리와 반지름이 몇 개인지 찾아 말했으면 "다 했어요"를 누르세요.']) },
  ],
  wrap: ['"우리가 만든 무늬에서 침은 몇 곳에 꽂았나요? 가장 큰 원의 반지름은 몇 cm였나요?" 중심 표시가 없는 무늬는 어느 원이 어느 중심에서 나왔는지 설명하기 어렵다고 짚는다. 출구 1번을 틀린 학생은 컴퍼스를 벌린 폭 읽기를 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'compass', options: { mode: 'draw', showWidth: false }, state: { width: 1 }, prompt: '과녁의 한 칸이에요. 반지름이 5.5cm인 원을 그려 보세요.', target: { radius: 5.5 }, difficulty: 0.28 },
    { type: 'choice', prompt: '과녁 무늬는 침을 어떻게 꽂아 그린 걸까요?', options: ['한 점에 꽂고 컴퍼스 폭만 바꿈', '그릴 때마다 다른 점에 꽂음', '침 없이 그림'], answer: 0, difficulty: 0.16, explain: '과녁 무늬는 중심이 같고 반지름만 다른 원이에요.' },
    { type: 'choice', prompt: '크기가 같은 원 세 개를 이어서 그리려면 컴퍼스를 어떻게 하나요?', options: ['폭은 그대로, 침 자리만 옮김', '폭을 바꿔 가며 같은 곳에 꽂음', '폭도 침 자리도 바꿈'], answer: 0, difficulty: 0.2, explain: '크기가 같으면 반지름이 같아서 컴퍼스 폭을 그대로 두고 침 자리만 옮겨요.' },
  ]],
  ws: {
    title: '원으로 만든 무늬',
    items: [
      { type: 'figure', prompt: '그림을 보고 컴퍼스를 몇 cm 벌려 그렸는지 쓰세요.', tool: 'compass', figures: [
        { options: { radius: 2, show: 'radius' }, caption: '벌린 폭 ___cm' }, { options: { radius: 4, show: 'radius' }, caption: '벌린 폭 ___cm' }], answer: '2cm, 4cm' },
      { type: 'choice', prompt: '중심은 같고 반지름이 다른 원으로 그린 무늬에 ○ 하세요.', options: ['과녁 무늬', '고리를 이은 무늬', '꽃잎 무늬'], answer: '과녁 무늬' },
      { type: 'table', prompt: '무늬마다 침을 꽂는 곳이 몇 곳인지 쓰세요.', columns: ['무늬', '과녁', '눈사람', '고리 3개'], cells: [['침 자리 수', '', '', '']], answer: '1곳, 2곳, 3곳' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '컴퍼스 폭을 바꾸면 원의 ______가 달라지고, 침 자리를 바꾸면 원의 ______이 달라져요.', answer: '크기(반지름), 위치(중심)' },
      { type: 'draw', prompt: '컴퍼스로 중심이 같은 원 세 개를 그리고 가장 작은 원의 반지름과 가장 큰 원의 반지름을 쓰세요.', answer: '침을 한 곳에 꽂고 폭을 세 번 다르게 벌렸는지 확인' },
    ],
    easy: {
      note: '과녁 무늬: 침은 한 곳, 폭만 바꿔요. 고리 무늬: 폭은 같고 침 자리를 옮겨요.',
      items: [
        { type: 'figure', prompt: '컴퍼스를 몇 cm 벌려 그렸는지 쓰세요.', tool: 'compass', figures: [{ options: { radius: 3, show: 'radius' }, caption: '벌린 폭 ___cm' }], answer: '3cm' },
        { type: 'choice', prompt: '침을 한 곳에만 꽂는 무늬에 ○ 하세요.', options: ['과녁 무늬', '고리를 이은 무늬'], answer: '과녁 무늬' },
        { type: 'blank', prompt: '빈칸에 쓰세요.', text: '폭을 바꾸면 원의 ______가 달라져요.', answer: '크기' },
        { type: 'draw', prompt: '컴퍼스로 중심이 같은 원 두 개를 그려 보세요.' },
      ],
    },
  },
  diff: {
    easy: '벌린 폭이 보이고, 과녁의 안쪽부터 한 겹씩 반지름이 커져요.',
    base: '벌린 폭은 맞힌 뒤에만 보이고, 짝짓기 카드가 하나 더 많아요.',
    challenge: '반지름 1.5cm·4.5cm·5.5cm처럼 0.5cm 눈금까지 읽어야 하는 원이 있어요.',
  },
  notes: '자주 보이는 어려움: ① 침 자리를 표시하지 않아 어느 원이 어느 중심에서 나왔는지 설명하지 못한다 → 그리기 전 중심에 ●표 하게 한다. ② 컴퍼스 폭을 바꿀 때마다 침까지 옮긴다 → 침 자리를 한 곳에 고정했는지 확인. ③ 크기가 같은 원 무늬에서 폭을 바꾸어 버린다 → 폭을 그대로 두고 침만 옮기는 규칙을 말로 확인. 디지털 교구는 중심을 옮길 수 없으므로 활동 3은 실제 종이에 컴퍼스로 그린다.',
}));

// ───────────────────────────── 7차시 (wrap · application) ─────────────────────────────
L.push(lesson(7, {
  std: S2,
  safety: NEEDLE,
  title: '정한 크기로 원을 그리고 맞게 그렸는지 확인하기',
  objective: '정한 반지름이나 지름에 맞추어 원을 그리고, 컴퍼스 폭을 재어 그린 원이 맞는지 확인하며 잘못 그리는 까닭을 설명할 수 있다.',
  desc: 'a child checking the width of an opened drawing compass against a ruler beside a freshly drawn circle and a smudged circle with a crooked line on craft paper',
  text: '맞게 그렸나 확인',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 280, y: 84 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"컴퍼스로 반지름이 5cm인 원을 그렸다고 해요. 정말 맞게 그렸는지 어떻게 확인할 수 있을까요?" 시연 단추로 컴퍼스가 반지름 5cm인 원을 그리는 모습을 보여 준다. 그린 뒤 중심에서 원 위의 여러 곳까지 재어 길이가 같은지 보는 방법을 말하게 하고, 침이 움직여 어긋난 원은 다시 그려야 한다고 짚는다.', '그린 원이 맞는지 어떻게 확인할 수 있을까요?'],
  demo: { tool: 'compass', options: { showWidth: true }, sequence: [{ radius: 5 }] },
  acts: [
    { id: 'a1', title: '활동 1. 반지름과 지름이 섞인 원 그리기', minutes: 9, tool: 'compass',
      task: '반지름이나 지름이 섞여서 주어져요. 컴퍼스를 얼마나 벌릴지 정하고 원을 그려요.',
      teacher: '"문제가 반지름이면 그대로, 지름이면 반만큼 벌려요." 지름 문제에서 폭을 지름만큼 벌린 학생에게는 컴퍼스 폭이 반지름임을 지난 시간의 순서 카드로 짚는다.',
      options: { mode: 'draw' },
      levels: DRAWL,
      items: [
        cdraw('반지름이 2.5cm인 원을 그려 보세요.', { radius: 2.5 }, 0.2),
        cdraw('지름이 7cm인 원을 그려 보세요. 컴퍼스를 얼마나 벌릴지 정하고 그려요.', { diameter: 7 }, 0.28),
        cdraw('반지름이 5.5cm인 원을 그려 보세요.', { radius: 5.5 }, 0.3),
        cdraw('지름이 5cm인 원을 그려 보세요.', { diameter: 5 }, 0.26, true),
      ] },
    { id: 'a2', title: '활동 2. 컴퍼스 폭으로 원의 지름 알아보기', minutes: 9, tool: 'measure',
      task: '띠는 컴퍼스를 벌린 폭이에요. 이 폭으로 그린 원의 지름은 몇 cm일까요?',
      teacher: '"컴퍼스를 벌린 폭이 반지름이에요. 그러면 지름은 몇 cm일까요?" 벌린 폭을 그대로 지름이라고 쓰는 학생에게는 폭이 중심에서 원 위까지임을 그림으로 다시 그려 보게 한다.',
      levels: RULEL,
      items: [
        askLen('컴퍼스를 이만큼 벌려 원을 그렸어요. 그린 원의 지름은 몇 cm일까요?', '벌린 폭', 4, '지름은 몇 cm일까요?', 8, 0.2),
        askLen('연필 다리가 닿은 자리까지가 띠예요. 이 폭으로 그린 원의 지름을 써 보세요.', '벌린 폭', 6, '지름은 몇 cm일까요?', 12, 0.24),
        askLen('컴퍼스를 이만큼 벌렸을 때 그려지는 원의 지름은 몇 cm일까요?', '벌린 폭', 3, '지름은 몇 cm일까요?', 6, 0.22),
      ] },
    { id: 'a3', title: '활동 3. 잘못 그린 방법 찾기', minutes: 8, tool: 'mindmap',
      task: '원을 잘못 그린 방법을 모두 골라요. 왜 잘못인지 짝에게 말해요.',
      teacher: '"지름 6cm인 원을 컴퍼스 6cm 벌려 그리면 실제 지름은 몇 cm가 될까요?" 12cm라고 계산해 보게 한다. 침이 움직였는데 이어서 그리는 학생에게는 처음 점에서 원 위 여러 곳까지 길이가 달라진다는 점을 짝에게 말로 설명하게 한다.',
      levels: CARD,
      items: [
        pickCards('원을 잘못 그린 방법을 모두 골라 보세요.', '잘못된 방법', ['지름 6cm인 원인데 컴퍼스를 6cm 벌렸어요', '반지름 3cm인 원을 컴퍼스 3cm 벌려 그렸어요', '그리는 도중에 침이 자꾸 움직였어요', '침을 중심에 꽂고 손잡이만 돌렸어요'], ['지름 6cm인 원인데 컴퍼스를 6cm 벌렸어요', '그리는 도중에 침이 자꾸 움직였어요'], 0.22),
        pickCards('반지름 4cm인 원을 그리려는 친구 중 잘못 설명한 사람을 모두 골라 보세요.', '친구들 설명', ['"자의 0에 침을 맞추고 4에 연필을 맞췄어"', '"컴퍼스를 8cm 벌렸어"', '"컴퍼스를 2cm 벌렸어"', '"폭이 4cm가 되도록 벌렸어"'], ['"컴퍼스를 8cm 벌렸어"', '"컴퍼스를 2cm 벌렸어"'], 0.26),
        pickCards('그린 원이 맞는지 확인하는 좋은 방법을 모두 골라 보세요.', '확인 방법', ['중심에서 원 위 여러 곳까지 재어 같은지 보기', '모양이 둥글면 확인 끝내기', '컴퍼스 폭을 자로 다시 재어 보기', '중심에서 한 곳만 재고 끝내기'], ['중심에서 원 위 여러 곳까지 재어 같은지 보기', '컴퍼스 폭을 자로 다시 재어 보기'], 0.3, true),
      ] },
  ],
  wrap: ['"오늘 그린 원이 맞는지 어떻게 확인했나요?" 짝에게 "중심에서 여러 곳까지 재었다"를 말하게 한다. 출구에서 지름이나 폭을 헷갈린 학생은 단원 평가 전에 컴퍼스 폭이 반지름이라는 것을 다시 짚는다.', [
    { type: 'tool', tool: 'compass', options: { mode: 'draw', showWidth: false }, state: { width: 1 }, prompt: '지름이 9cm인 원을 그려 보세요.', target: { diameter: 9 }, difficulty: 0.3 },
    { type: 'choice', prompt: '컴퍼스를 3.5cm 벌려 그린 원의 지름은 몇 cm인가요?', options: ['3.5cm', '7cm', '1.75cm'], answer: 1, difficulty: 0.24, explain: '벌린 폭이 반지름 3.5cm라서 지름은 그 2배인 7cm예요.' },
    { type: 'choice', prompt: '한 원에서 중심에서 원 위의 여러 곳까지 길이를 재었더니 모두 같았어요. 무엇을 뜻하나요?', options: ['원이 잘 그려졌어요', '컴퍼스가 고장 났어요', '지름이 반지름과 같아요'], answer: 0, difficulty: 0.2, explain: '원의 중심에서 원 위의 어느 점까지나 거리가 같으면 침이 움직이지 않고 잘 그려진 원이에요.' },
  ]],
  ws: {
    title: '원 그리고 확인하기',
    items: [
      { type: 'figure', prompt: '그림의 원에서 선분이 반지름이면 반, 지름이면 지라고 쓰고 길이를 쓰세요.', tool: 'compass', figures: [
        { options: { radius: 3, show: 'radius' }, caption: '(  ) 3cm → 지름 ___cm' }, { options: { radius: 4, show: 'diameter' }, caption: '(  ) 8cm → 반지름 ___cm' }], answer: '반 6cm, 지 4cm' },
      { type: 'table', prompt: '표를 완성하세요.', columns: ['주어진 것', '반지름 3cm', '지름 10cm', '반지름 2.5cm', '지름 7cm'], cells: [['컴퍼스 벌릴 폭', '', '', '', '']], answer: '3cm, 5cm, 2.5cm, 3.5cm' },
      { type: 'choice', prompt: '지름이 8cm인 원을 컴퍼스로 그리려고 해요. 벌릴 폭은 얼마인가요?', options: ['4cm', '8cm', '16cm'], answer: '4cm' },
      { type: 'check', prompt: '원을 잘 그리는 방법을 모두 골라 □에 ✓표 하세요.', options: ['침이 움직이지 않게 한다', '컴퍼스를 지름만큼 벌린다', '손잡이를 잡고 돌린다', '중심을 먼저 정한다'], answer: '침이 움직이지 않게 한다, 손잡이를 잡고 돌린다, 중심을 먼저 정한다' },
      { type: 'short', prompt: '지름 6cm인 원을 컴퍼스 6cm 벌려 그렸을 때 생기는 문제를 써 보세요.', answer: '컴퍼스를 벌린 폭이 반지름이라 지름 12cm인 큰 원이 그려진다.' },
    ],
    easy: {
      note: '컴퍼스를 벌린 폭이 반지름이에요. 지름이 주어지면 반으로 나누어 벌려요.',
      items: [
        { type: 'figure', prompt: '그림의 선분을 보고 알맞은 말에 ○ 하세요.', tool: 'compass', figures: [{ options: { radius: 3, show: 'radius' }, caption: '반지름 / 지름' }], answer: '반지름' },
        { type: 'table', prompt: '컴퍼스를 벌릴 폭을 쓰세요.', columns: ['주어진 것', '반지름 2cm', '지름 6cm'], cells: [['벌릴 폭', '', '']], answer: '2cm, 3cm' },
        { type: 'choice', prompt: '컴퍼스 폭이 3cm이면 지름은 몇 cm일까요?', options: ['3cm', '6cm'], answer: '6cm' },
        { type: 'draw', prompt: '컴퍼스로 반지름 3cm인 원을 그리고 자로 재어 확인해 보세요.' },
      ],
    },
  },
  diff: {
    easy: '벌린 폭이 글자로 보이고, 지름 문항도 폭을 먼저 물어봐요.',
    base: '벌린 폭은 맞힌 뒤에만 보이고, 잘못 그린 방법 카드는 둘로 정해져 있어요.',
    challenge: '반지름 5.5cm처럼 작은 눈금이 필요한 문항과, 맞는 설명이 둘 이상 섞인 카드가 나와요.',
  },
  notes: '자주 보이는 어려움: ① 지름이 주어졌을 때 폭을 지름만큼 벌린다 → 폭 = 반지름이라는 규칙을 순서 카드로 다시 말하기. ② 폭을 재고도 지름으로 바꾸지 않는다 → 띠 길이를 2배 하는 것까지가 한 문제. ③ 원이 둥글어 보이면 맞는다고 확인을 끝낸다 → 중심에서 여러 곳까지 재어 같은지 본다. 단원 마무리로 반지름·지름의 2배 관계와 컴퍼스 폭 읽기를 짝에게 설명하게 하면 좋다.',
}));

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 3, subject: '수학', unitTitle: UT,
  flow: '1차시에서 둥근 모양 가운데 원만 가려내고, 컴퍼스 침을 꽂는 한가운데 점이 원의 중심임을 종이접기로 확인합니다. 2차시(기존 차시)에서 반지름·지름을 알고 컴퍼스로 원을 그린 뒤, 3차시는 선분을 보고 반지름과 지름을 구별하며 지름이 반지름의 2배임을 수직선에 나타냅니다. 4차시는 접시·쿠키의 지름을 재어 반지름을 구하고 크기를 견줍니다. 5~7차시는 컴퍼스를 벌린 폭이 반지름임을 바탕으로 원 그리는 순서를 정하고, 중심을 정해 크기가 다른 원으로 무늬를 만들며, 정한 크기로 그리고 잘못 그린 방법을 찾아 단원을 정리합니다.',
  refs: { 2: 'g3-math-compass-circle' },
  lessons: L,
});
})();
