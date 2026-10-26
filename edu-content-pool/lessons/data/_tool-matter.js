/* 교구 검사 차시 — 물질 실험대(matter)의 네 모드(입자 상자·분류·용해·분리)와 묻기 칸을 모두 쓴다. 4학년 1학기 2. 물의 상태 변화 */
PaperLessons.register({
  id: '_tool-matter',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-과학-1학기-2', lesson: 1 },
  grade: 4, subject: '과학', unitTitle: '2. 물의 상태 변화',
  title: '온도에 따라 바뀌는 물의 상태와 섞인 물질 나누기',
  objective: '온도에 따라 물이 얼음·물·수증기로 바뀌는 모습을 입자로 나타내고, 물질을 상태와 성질에 따라 나누며, 녹이고 거르는 방법으로 섞인 물질을 나눌 수 있다.',
  standards: ['[4과10-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: ['뜨거운 물과 가열 기구는 선생님과 함께 다뤄요.', '실험에 쓴 물질은 맛보지 않고, 끝나면 손을 씻어요.'],
  illustration: {
    prompt: 'Layered paper-cut illustration of children watching ice cubes melt into water and steam rise from a kettle, beside a magnet pulling iron filings out of sand, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 105, y: 50 }, { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'hills', y: 205 },
      { motif: 'house', x: 115, y: 218, color: 'sky' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 250, y: 72 },
      { motif: 'text', x: 240, y: 150, text: '얼음은 어떻게 물이 될까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"냉동실에서 꺼낸 얼음을 그대로 두면 어떻게 될까요?" 시연 단추로 입자 상자의 온도를 올려 얼음 → 물 → 수증기로 바뀌는 모습을 보여 준다. 입자가 촘촘히 붙어 있다가 점점 자유롭게 움직이는 것을 함께 본다.',
      student: '얼음이 녹거나 물이 끓는 것을 본 경험을 말해 봅시다.',
      demo: { tool: 'matter', options: { mode: 'particles' }, sequence: [{ phase: 'liquid' }, { phase: 'gas' }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 온도를 바꾸어 물의 상태 살펴보기', minutes: 9, tool: 'matter',
          teacher: '"물이 끓으면 입자는 어떻게 움직일까요?" 입자 사이의 거리와 움직임을 말로 설명하게 한다. 기체가 되면 물이 없어진다고 생각하는 학생에게는 입자 수가 그대로임을 세어 보게 한다.',
          task: '−/+ 단추로 온도를 바꿔 입자가 어떻게 움직이는지 봐요.',
          levels: {
            easy: { mode: 'particles' },
            base: { mode: 'particles' },
            challenge: { mode: 'particles', showLabel: false },
          },
          items: [
            { prompt: '물이 수증기(기체)가 되도록 온도를 올려 보세요.', target: { phase: 'gas' }, difficulty: 0.1, reveal: 'after-check',
              predict: { q: '물이 수증기가 되면 입자는 어떻게 될까요?', options: ['사라져요', '멀리 떨어져 빠르게 움직여요', '더 촘촘히 붙어요'] },
              conclude: '기체가 되어도 입자는 사라지지 않고 서로 멀리 떨어져 빠르게 움직여요.' },
            { prompt: '물이 얼음(고체)이 되도록 온도를 내려 보세요.', target: { phase: 'solid' }, difficulty: 0.1 },
            { prompt: '세 상자의 입자를 보고 기체인 상자를 고르세요.', toolOptions: { boxes: ['liquid', 'gas', 'solid'], ask: { q: '기체는 어느 상자인가요?', choices: ['가', '나', '다'], explain: '기체 입자는 서로 멀리 떨어져 자유롭게 움직여요.' } }, target: { pick: 1 }, difficulty: 0.2 },
            { prompt: '더 해 보기: 30 °C에서 녹는 초콜릿을 50 °C로 데워 보세요.', toolOptions: { substance: { name: '초콜릿', melt: 30, boil: 200 }, temps: [0, 60, 10] }, target: { temp: 50 }, extra: true, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 물질을 나누고 녹여 보기', minutes: 9, tool: 'matter',
          teacher: '"물에 소금을 계속 넣으면 끝없이 녹을까요?" 더 녹지 않고 바닥에 남는 때를 찾게 한다. 진하기 문항에서는 물의 양과 넣은 양을 함께 보아야 함을 짚는다.',
          task: '카드는 누른 뒤 칸 단추를 눌러 넣어요. 녹이기는 −/+ 단추로 물의 양과 숟가락 수를 바꿔요.',
          levels: {
            easy: { mode: 'sort' },
            base: { mode: 'sort' },
            challenge: { mode: 'sort' },
          },
          items: [
            { prompt: '물질 카드를 고체·액체·기체로 나누어 보세요.', toolOptions: { cards: [{ id: 'ice', name: '얼음', icon: 'fi-rr-snowflake', props: ['단단해요'] }, { id: 'milk', name: '우유', icon: 'fi-rr-glass', props: ['흘러요'] }, { id: 'air', name: '풍선 속 공기', icon: 'fi-rr-wind', props: ['보이지 않아요'] }, { id: 'stone', name: '돌', props: ['모양이 그대로예요'] }, { id: 'juice', name: '주스', props: ['그릇 모양을 따라요'] }], bins: ['고체', '액체', '기체'] },
              target: { bins: { ice: 0, milk: 1, air: 2, stone: 0, juice: 1 } }, difficulty: 0.15 },
            { prompt: '소금을 한 숟가락씩 넣어 더 녹지 않고 남기 시작할 때까지 넣어 보세요.', toolOptions: { mode: 'dissolve', solute: { name: '소금', perSpoon: 5, limit: 35 } }, target: { saturated: true }, difficulty: 0.25 },
            { prompt: '옆 그릇과 진하기가 같도록 물의 양과 숟가락 수를 맞춰 보세요.', toolOptions: { mode: 'dissolve', compare: [{ water: 100, spoons: 2, label: '나' }] }, target: { sameAs: 1 }, difficulty: 0.3,
              conclude: '물의 양이 두 배이면 녹이는 양도 두 배여야 진하기가 같아요.' },
            { prompt: '더 해 보기: 따뜻한 물을 골라 소금 네 숟가락을 녹여 보세요.', toolOptions: { mode: 'dissolve', temps: [{ name: '차가운 물', limit: 20 }, { name: '따뜻한 물', limit: 40 }] }, target: { set: { temp: 1, spoons: 4 } }, extra: true, difficulty: 0.2 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 섞인 물질 나누기', minutes: 8, tool: 'matter',
          teacher: '"철 가루, 소금, 모래가 섞여 있어요. 무엇부터 해야 할까요?" 각 물질의 성질(자석에 붙음·물에 녹음·알갱이 크기)을 먼저 말하게 한 뒤 도구를 고르게 한다. 물에 녹인 소금은 증발시켜야 다시 얻을 수 있음을 짚는다.',
          task: '도구 단추를 차례로 눌러 섞인 것을 나눠요. 되돌리기 단추로 마지막 단계를 뺄 수 있어요.',
          levels: {
            easy: { mode: 'separate' },
            base: { mode: 'separate' },
            challenge: { mode: 'separate' },
          },
          items: [
            { prompt: '철 가루, 소금, 모래를 하나씩 따로 나누어 보세요.', toolOptions: { parts: [{ name: '철 가루', magnet: true }, { name: '소금', dissolve: true }, { name: '모래' }] }, target: { separated: true }, difficulty: 0.35 },
            { prompt: '콩, 좁쌀, 스타이로폼 알갱이 가운데 좁쌀만 모아 보세요.', toolOptions: { parts: [{ name: '콩', big: true }, { name: '좁쌀' }, { name: '스타이로폼', float: true }] }, target: { got: '좁쌀' }, difficulty: 0.25 },
            { prompt: '더 해 보기: 클립, 팥, 쌀을 하나씩 따로 나누어 보세요.', toolOptions: { parts: [{ name: '클립', magnet: true }, { name: '팥', big: true }, { name: '쌀' }] }, target: { separated: true }, extra: true, difficulty: 0.25 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"물이 얼음이 될 때와 수증기가 될 때 입자는 어떻게 달랐나요?" 세 상태의 입자 그림을 칠판에 나란히 그린다. 출구 1번을 틀린 학생은 다음 시간에 녹는 온도와 끓는 온도를 수직선에 표시해 보게 한다.',
      exitTicket: [
        { type: 'tool', tool: 'matter', options: { mode: 'particles' }, state: { temp: -10 }, prompt: '얼음을 녹여 물(액체)이 되도록 온도를 바꾸세요.', target: { phase: 'liquid' }, difficulty: 0.15 },
        { type: 'choice', prompt: '모래와 소금이 섞여 있어요. 소금을 다시 얻는 순서로 알맞은 것은 무엇인가요?', options: ['자석을 댄다', '물에 녹여 거른 뒤 증발시킨다', '체로 친다'], answer: 1, difficulty: 0.3, explain: '소금은 물에 녹고 모래는 녹지 않아요. 거른 물을 증발시키면 소금이 남아요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '물의 상태와 섞인 물질',
    items: [
      { type: 'figure', prompt: '입자 그림을 보고 고체·액체·기체 가운데 무엇인지 쓰세요.', tool: 'matter', options: { mode: 'particles' }, figures: [
        { state: { temp: -10 }, caption: '(       )' }, { state: { temp: 20 }, caption: '(       )' }, { state: { temp: 110 }, caption: '(       )' }], answer: '고체, 액체, 기체' },
      { type: 'figure', prompt: '두 그릇 가운데 더 진한 소금물에 ○ 하세요.', tool: 'matter', options: { mode: 'dissolve' }, figures: [
        { state: { water: 100, spoons: 2 }, caption: '가 (   )' }, { state: { water: 100, spoons: 4 }, caption: '나 (   )' }], answer: '나' },
      { type: 'choice', prompt: '철 가루와 모래를 나눌 때 쓰기 좋은 도구에 ○ 하세요.', options: ['자석', '체', '거름종이'], answer: '자석' },
      { type: 'table', prompt: '물질의 상태를 표에 쓰세요.', columns: ['물질', '상태'], cells: [['얼음', ''], ['우유', ''], ['풍선 속 공기', '']], answer: '고체, 액체, 기체' },
      { type: 'short', prompt: '우리 생활에서 물이 수증기가 되는 모습을 하나 쓰세요.' },
    ],
    easy: {
      note: '고체는 모양이 그대로이고, 액체는 그릇 모양을 따르며, 기체는 눈에 보이지 않고 퍼져요.',
      items: [
        { type: 'figure', prompt: '입자 그림을 보고 고체인지 기체인지 쓰세요.', tool: 'matter', options: { mode: 'particles' }, figures: [
          { state: { temp: -10 }, caption: '(       )' }, { state: { temp: 110 }, caption: '(       )' }], answer: '고체, 기체' },
        { type: 'choice', prompt: '얼음이 녹으면 무엇이 되나요?', options: ['물', '돌', '소금'], answer: '물' },
        { type: 'short', prompt: '집에서 볼 수 있는 액체를 하나 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '입자 상자에 상태 이름이 보이고, 고체·기체처럼 차이가 큰 것부터 견줘요.',
    base: '상태 이름을 보며 온도를 바꾸고, 소금이 더 녹지 않는 때와 섞인 물질 나누기를 해요.',
    challenge: '상태 이름이 숨겨져 입자 움직임만 보고 판단하고, 진하기를 같게 맞춰요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 물이 수증기가 되면 없어진다고 생각한다 → 입자 수가 그대로임을 세게 한다. ② 소금이 물에 녹으면 사라진다고 생각한다 → 증발시키면 다시 나온다. ③ 섞인 물질을 나누는 순서를 정하지 못한다 → 물질마다 성질을 먼저 적게 한다. ④ 진하기를 넣은 양만으로 판단한다 → 물의 양도 함께 보게 한다.',
});
