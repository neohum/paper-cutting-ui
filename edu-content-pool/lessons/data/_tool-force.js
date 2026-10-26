/* 교구 검사 차시 — 힘 실험대(force)의 모드(지레·용수철·빗면·밀기·빠르기)와 묻기 칸을 모두 쓴다. 3학년 1학기 1. 힘과 우리 생활 */
PaperLessons.register({
  id: '_tool-force',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-과학-1학기-1', lesson: 1 },
  grade: 3, subject: '과학', unitTitle: '1. 힘과 우리 생활',
  title: '수평 잡기와 용수철로 힘 살펴보기',
  objective: '막대의 수평을 잡고 용수철이 늘어나는 길이를 재며, 빗면과 미는 힘에 따라 물체의 움직임이 어떻게 달라지는지 말할 수 있다.',
  standards: ['[4과01-01]', '[4과01-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: ['추를 높은 곳에서 떨어뜨리지 않고, 실험대 가운데에 놓아요.', '용수철은 너무 세게 당기지 않아요. 튕겨서 다칠 수 있어요.'],
  illustration: {
    prompt: 'Layered paper-cut illustration of children balancing a seesaw with small weights while a spring stretches under a hanging bag and a toy car rolls down a slope, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 110, y: 52 }, { motif: 'sun', x: 405, y: 60, s: 0.8 }, { motif: 'hills', y: 205 },
      { motif: 'tree', x: 95, y: 214 }, { motif: 'house', x: 390, y: 218, color: 'sky' }, { motif: 'star', x: 250, y: 70 },
      { motif: 'text', x: 240, y: 150, text: '어떻게 하면 수평이 될까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"시소에서 몸무게가 다른 친구와 수평을 맞추려면 어디에 앉아야 할까요?" 시연 단추로 왼쪽에 추 3개가 있을 때 오른쪽에 추를 올려 수평이 되는 모습을 보여 준다. 받침점에서 멀리 놓을수록 적은 추로도 수평이 됨을 함께 확인한다.',
      student: '시소를 탈 때 무거운 친구는 받침점에서 가까이 앉았는지, 멀리 앉았는지 떠올려 말해 봅시다.',
      demo: { tool: 'force', options: { mode: 'lever', fixed: [{ pos: -2, n: 3 }], side: 'right' }, sequence: [{ balance: true }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 막대의 수평 잡기', minutes: 9, tool: 'force',
          teacher: '"왼쪽 추와 같은 수를 같은 거리에 놓는 것 말고 다른 방법도 있을까요?" 추 수와 받침점까지의 거리를 함께 보게 한다. 추를 많이 올릴수록 수평이 된다고 생각하는 학생에게는 거리를 바꿔 보게 한다.',
          task: '막대 위 자리를 고르고 추를 올리거나 내려요. 방향키로 자리를 고르고, ↑ 또는 Enter로 올리고 ↓로 내려요.',
          levels: {
            easy: { mode: 'lever', pegs: 3 },
            base: { mode: 'lever', pegs: 4 },
            challenge: { mode: 'lever', pegs: 4, showMoment: true },
          },
          items: [
            { prompt: '왼쪽에 놓인 추와 수평이 되도록 오른쪽에 추를 올려 보세요.', toolOptions: { fixed: [{ pos: -2, n: 3 }], side: 'right' }, target: { balance: true }, difficulty: 0.1 },
            { prompt: '오른쪽 3번 자리에만 추를 올려 수평을 잡아 보세요.', toolOptions: { fixed: [{ pos: -3, n: 2 }], side: 'right' }, target: { balance: true, at: 3 }, difficulty: 0.2,
              predict: { q: '받침점에서 멀리 놓으면 추가 더 많이 필요할까요, 더 적게 필요할까요?', options: ['더 많이 필요해요', '더 적게 필요해요', '똑같아요'] },
              conclude: '받침점에서 멀리 놓을수록 적은 추로도 수평을 잡을 수 있어요.' },
            { prompt: '추 3개를 써서 수평을 잡아 보세요.', toolOptions: { fixed: [{ pos: -3, n: 2 }], side: 'right' }, target: { balance: true, count: 3 }, difficulty: 0.3, reveal: 'after-check' },
            { prompt: '더 해 보기: 막대의 왼쪽이 내려가도록 추를 올려 보세요.', toolOptions: { fixed: [{ pos: 1, n: 4 }] }, target: { tilt: 'left' }, extra: true, difficulty: 0.2 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 용수철에 추를 매달아 늘어난 길이 재기', minutes: 8, tool: 'force',
          teacher: '"추를 하나 더 매달 때마다 용수철은 얼마씩 늘어날까요?" 처음 길이와 늘어난 길이를 구별하게 한다. 늘어난 길이 대신 전체 길이를 쓰는 학생에게는 처음 길이를 빼게 한다.',
          task: '−/+ 단추로 추를 매달고 빼요. 늘어난 길이를 읽어 칸에 써요.',
          levels: {
            easy: { mode: 'spring', k: 2 },
            base: { mode: 'spring', k: 2 },
            challenge: { mode: 'spring', k: 3 },
          },
          items: [
            { prompt: '용수철이 8 cm 늘어나도록 추를 매달아 보세요.', target: { stretch: 8 }, difficulty: 0.15, reveal: 'after-check' },
            { prompt: '추 4개를 매단 용수철이 늘어난 길이를 읽어 쓰세요.', state: { n: 4 }, target: { read: 8 }, difficulty: 0.2,
              levels: { challenge: { prompt: '추 하나에 3 cm씩 늘어나는 용수철에 추 4개를 매달았어요. 늘어난 길이를 읽어 쓰세요.', target: { read: 12 } } } },
            { prompt: '추 하나에 3 cm씩 늘어나는 용수철을 9 cm 늘여 보세요.', toolOptions: { k: 3 }, target: { stretch: 9 }, difficulty: 0.25,
              conclude: '매단 추의 수가 늘어나면 용수철이 늘어난 길이도 같은 만큼씩 늘어나요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 빗면과 미는 힘, 빠르기 견주기', minutes: 9, tool: 'force',
          teacher: '"빗면을 더 기울이면 물체가 내려오는 시간은 어떻게 될까요?" 한 번에 하나만 바꾸어 견주게 한다. 빠르기 문항에서는 같은 시간 동안 간 거리를 견주면 빠르기를 알 수 있음을 짚는다.',
          task: '−/+ 단추로 기울기·힘을 정하고 굴리기·밀기 단추를 눌러 움직임을 봐요.',
          levels: {
            easy: { mode: 'ramp' },
            base: { mode: 'ramp' },
            challenge: { mode: 'ramp' },
          },
          items: [
            { prompt: '빗면의 기울기를 30°로 맞춘 뒤 굴려 보세요.', target: { set: { angle: 30 }, run: true }, difficulty: 0.15 },
            { prompt: '미는 힘을 6으로, 무게를 2덩이로 정하고 밀어 보세요.', toolOptions: { mode: 'push' }, target: { set: { force: 6, mass: 2 }, run: true }, difficulty: 0.2 },
            { prompt: '내 거리와 시간을 바꿔 1초에 8 m를 가는 빠르기로 만들어 보세요.', toolOptions: { mode: 'speed', control: true, movers: [{ name: '나', d: 60, t: 10 }, { name: '민지', d: 100, t: 20 }], showSpeed: true }, target: { speed: 8 }, difficulty: 0.3, reveal: 'after-check' },
            { prompt: '더 해 보기: 세 친구가 달린 거리와 시간을 보고 가장 빠른 친구를 고르세요.', toolOptions: { mode: 'speed', movers: [{ name: '가', d: 100, t: 20 }, { name: '나', d: 120, t: 20 }, { name: '다', d: 120, t: 30 }], ask: { q: '누가 가장 빠른가요?', choices: ['가', '나', '다'], explain: '같은 20초 동안 더 먼 거리를 간 친구가 더 빨라요.' } }, target: { pick: 1 }, extra: true, difficulty: 0.25 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"수평을 잡을 때 무엇과 무엇을 함께 보아야 했나요?" 추의 수와 받침점까지의 거리를 칠판에 정리한다. 출구 1번을 틀린 학생은 다음 시간에 같은 거리에서 추 수부터 맞춰 보게 한다.',
      exitTicket: [
        { type: 'tool', tool: 'force', options: { mode: 'lever', fixed: [{ pos: -4, n: 1 }], side: 'right' }, prompt: '오른쪽 2번 자리에 추를 올려 수평을 잡으세요.', target: { balance: true, at: 2 }, difficulty: 0.25 },
        { type: 'choice', prompt: '용수철에 추를 더 많이 매달면 어떻게 될까요?', options: ['더 짧아져요', '더 많이 늘어나요', '그대로예요'], answer: 1, difficulty: 0.15, explain: '매단 추가 무거울수록 용수철이 더 많이 늘어나요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '수평 잡기와 용수철',
    items: [
      { type: 'figure', prompt: '막대가 수평이 되려면 오른쪽 몇 번 자리에 추를 몇 개 놓아야 할까요?', tool: 'force', options: { mode: 'lever', pegs: 4, side: 'right' }, figures: [
        { options: { fixed: [{ pos: -2, n: 2 }] }, caption: '___번 자리에 ___개' }, { options: { fixed: [{ pos: -3, n: 2 }] }, caption: '___번 자리에 ___개' }], answer: '예: 2번 자리 2개(또는 4번 자리 1개), 예: 3번 자리 2개(또는 2번 자리 3개)' },
      { type: 'figure', prompt: '용수철이 늘어난 길이를 쓰세요.', tool: 'force', options: { mode: 'spring', k: 2 }, figures: [{ state: { n: 2 }, caption: '___ cm' }, { state: { n: 5 }, caption: '___ cm' }], answer: '4 cm, 10 cm' },
      { type: 'choice', prompt: '빗면의 기울기를 크게 하면 물체가 내려오는 시간은 어떻게 될까요?', options: ['짧아져요', '길어져요', '그대로예요'], answer: '짧아져요' },
      { type: 'table', prompt: '매단 추의 수와 늘어난 길이를 표에 쓰세요(추 하나에 2 cm).', columns: ['추의 수', '늘어난 길이(cm)'], cells: [['1개', ''], ['3개', ''], ['6개', '']], answer: '2, 6, 12' },
      { type: 'short', prompt: '우리 생활에서 수평을 잡는 모습을 하나 쓰세요.' },
    ],
    easy: {
      note: '받침점에서 같은 거리에 같은 수의 추를 놓으면 수평이 돼요.',
      items: [
        { type: 'figure', prompt: '수평이 되도록 오른쪽에 놓을 추의 수를 쓰세요.', tool: 'force', options: { mode: 'lever', pegs: 3, side: 'right' }, figures: [
          { options: { fixed: [{ pos: -1, n: 2 }] }, caption: '1번 자리에 ___개' }, { options: { fixed: [{ pos: -3, n: 1 }] }, caption: '3번 자리에 ___개' }], answer: '2개, 1개' },
        { type: 'choice', prompt: '용수철에 추를 매달면 용수철은 어떻게 되나요?', options: ['늘어나요', '줄어들어요', '사라져요'], answer: '늘어나요' },
        { type: 'short', prompt: '시소를 타 본 경험을 한 줄로 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '막대 한쪽 자리가 3칸이고, 같은 거리에 같은 수의 추를 놓는 문항부터 해요.',
    base: '자리가 4칸으로 늘고, 정해진 자리와 정해진 추 수로 수평을 잡아요.',
    challenge: '무게×거리 값이 보이고, 추 하나에 3 cm 늘어나는 용수철로 늘어난 길이를 구해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 추 수만 같으면 수평이 된다고 생각한다 → 교구는 같은 수를 다른 거리에 놓은 답을 따로 알아보고 거리를 보게 한다. ② 용수철의 전체 길이를 늘어난 길이로 쓴다 → 처음 길이를 빼게 한다. ③ 여러 변인을 한꺼번에 바꾼다 → 한 번에 하나만 바꾸게 한다. ④ 시간이 짧은 쪽을 느리다고 한다 → 같은 거리를 짧은 시간에 가면 빠르다.',
});
