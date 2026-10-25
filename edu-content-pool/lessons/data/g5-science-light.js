/* 5학년 1학기 2. 빛의 성질 — 빛의 반사: 거울로 빛의 방향 바꾸기 */
PaperLessons.register({
  id: 'g5-science-light',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g5-과학-1학기-2', lesson: 4 },
  grade: 5, subject: '과학', unitTitle: '2. 빛의 성질',
  title: '거울로 빛의 방향 바꾸기',
  objective: '거울에 부딪힌 빛이 방향을 바꾸는 것(빛의 반사)을 보고, 거울을 돌려 빛을 원하는 곳으로 보낼 수 있다.',
  standards: ['[6과02-01]', '[6과02-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: [
    '손전등 빛이나 거울에 반사된 빛을 친구의 눈에 비추지 않아요.',
    '레이저 포인터는 쓰지 않아요. 눈에 들어가면 크게 다칠 수 있어요.',
    '햇빛을 거울로 반사해 사람에게 비추지 않고, 해를 직접 보지 않아요.',
    '거울 테두리는 테이프로 감싸 쓰고, 거울이 깨지면 손대지 말고 선생님께 알려요.',
  ],
  illustration: {
    prompt: 'Layered paper-cut illustration of a child in a cozy dark room shining a flashlight at a small hand mirror so the beam bounces up to light a golden paper star, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], background: '#EDE7F4', layers: [
      { motif: 'moon', x: 70, y: 60, s: 0.9 }, { motif: 'star', x: 400, y: 50 }, { motif: 'star', x: 330, y: 92, color: 'cream' },
      { motif: 'star', x: 170, y: 40, color: 'cream' }, { motif: 'cloud', x: 250, y: 70, s: 0.7 },
      { motif: 'hills', y: 205, colors: ['lavender', 'sky', 'mint'] }, { motif: 'house', x: 110, y: 222, color: 'buttercup' },
      { motif: 'tree', x: 380, y: 222, color: 'mint' }, { motif: 'text', x: 240, y: 150, text: '빛을 별까지 보낼 수 있을까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"손전등을 켜서 칠판의 별에 빛을 보내고 싶은데, 손전등은 움직일 수 없어요. 무엇을 쓰면 빛을 별까지 보낼 수 있을까요?" 학생 생각을 들은 뒤 시연 단추로 거울이 돌아가며 빛이 별에 닿는 모습을 보여 준다. 지난 시간에 배운 빛의 직진(빛은 곧게 나아간다)을 먼저 떠올리게 한다.',
      student: '빛은 어떻게 나아갈까요? 손전등 빛을 원하는 곳으로 보내는 방법을 생각해 봅시다.',
      demo: { tool: 'lightray', options: { scene: 'up', showAngles: true }, sequence: [{ hit: 'star' }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 거울 하나로 빛의 방향 바꾸기', minutes: 10, tool: 'lightray',
          task: '거울을 돌려 손전등 빛이 별에 닿게 해 봅시다. 빛은 곧게 나아가다(직진) 거울에 부딪히면 방향이 바뀌어요. 이것을 빛의 반사라고 해요.',
          teacher: '"빛이 거울에 부딪힌 뒤 어떻게 되었나요?" 거울 뒷면에 빛이 닿으면 반사되지 않는다는 점, 들어온 각과 나간 각이 같다는 점을 짚는다. 기본 단계도 빛이 별에 닿는 순간 거울에 수직인 점선과 각도가 나타나니 그 화면을 함께 보며 말하게 한다. 들어온 각·나간 각은 거울 면이 아니라 거울에 수직인 선(점선)을 기준으로 잰다.',
          levels: { easy: { step: 15, showAngles: true }, base: { step: 15, revealOnLit: true }, challenge: { step: 5, predict: true } },
          items: [
            { prompt: '거울을 돌려 오른쪽으로 가는 빛을 위에 있는 별로 보내 보세요.', target: { hit: 'star' }, toolOptions: { scene: 'up' }, difficulty: 0 },
            { prompt: '비스듬히(기울어져) 내려오는 빛을 오른쪽 별로 보내 보세요.', target: { hit: 'star' }, toolOptions: { scene: 'tilt' }, difficulty: 0.1 },
            { prompt: '빛을 왼쪽 아래의 별로 되돌려(온 쪽으로 다시) 보내 보세요. 거울의 반짝이는 앞면이 어느 쪽을 봐야 할까요?', target: { hit: 'star' }, toolOptions: { scene: 'back' }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 거울 두 개로 가림판 피하기', minutes: 10, tool: 'lightray',
          task: '가림판(빛을 막는 판)이 빛을 막고 있어요. 거울 두 개를 돌려 빛이 가림판을 피해 별에 닿게 해 봅시다. 거울 1부터 맞춰요.',
          teacher: '"잠망경은 거울 두 개로 어떻게 담 너머를 볼까요?" 첫 문항의 거울 배치가 잠망경과 같다는 것을 연결한다. 어느 거울부터 돌릴지 헤매면 "빛이 먼저 닿는 거울 1부터"를 짚는다. 우리가 물체를 보는 것은 물체에서 반사된 빛이 눈에 들어오기 때문임을 덧붙인다.',
          levels: { easy: { step: 15, showAngles: true }, base: { step: 15, revealOnLit: true }, challenge: { step: 15, predict: true } },
          items: [
            { prompt: '잠망경처럼 거울 두 개로 빛을 위로 올렸다가 오른쪽 별로 보내 보세요.', target: { hit: 'star', bounces: 2 }, toolOptions: { scene: 'periscope' }, difficulty: 0.2 },
            { prompt: '거울 두 개로 빛을 아래로 내렸다가 왼쪽 별로 보내 보세요.', target: { hit: 'star', bounces: 2 }, toolOptions: { scene: 'zigzag' }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 빛 보내기 설명하기', minutes: 6, tool: 'lightray', pair: true,
          task: '짝에게 거울을 어떻게 돌렸는지 말로 설명하며 빛을 별에 보내 봅시다. 짝은 설명이 맞는지 확인해요.',
          levels: { easy: { step: 15, showAngles: true }, base: { step: 15 }, challenge: { step: 5 } },
          items: [{ difficulty: 0, prompt: '짝과 번갈아 설명하며 빛을 별에 보낸 뒤 "다 했어요"를 누르세요.', free: true, toolOptions: { scene: 'periscope' } }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"빛이 거울에 부딪혀 방향이 바뀌어 나아가는 것을 무엇이라고 할까요?" 생활에서 반사를 이용하는 예(자동차 뒷거울, 잠망경, 굽은 길의 볼록 거울, 치과 거울)를 함께 찾는다.',
      exitTicket: [
        { type: 'choice', prompt: '빛이 나아가다가 거울에 부딪혀 방향이 바뀌어 나아가는 현상을 무엇이라고 하나요?', options: ['빛의 직진', '빛의 반사', '빛의 굴절'], answer: 1, difficulty: 0.05, explain: '빛이 거울에 부딪혀 방향이 바뀌는 것은 반사예요. 직진은 빛이 곧게 나아가는 것, 굴절은 빛이 물이나 유리를 지날 때 꺾이는 것이에요.' },
        { type: 'choice', prompt: '거울에 비스듬히 들어온 빛은 어떻게 나아가나요?', options: ['거울 속으로 들어가 사라진다', '들어온 각과 같은 각으로 방향을 바꾸어 나아간다', '들어온 길로 그대로 되돌아간다'], answer: 1, difficulty: 0.15, explain: '거울에 수직인 선(점선)을 기준으로 들어온 각과 나간 각이 같아요. 그래서 비스듬히 들어온 빛은 반대쪽으로 비스듬히 나가요.' },
        { type: 'tool', tool: 'lightray', options: { scene: 'down', step: 15 }, prompt: '거울을 돌려 빛을 아래의 별로 보내 보세요.', target: { hit: 'star' }, difficulty: 0.1, explain: '오른쪽으로 가던 빛을 아래로 꺾으려면 거울 앞면이 왼쪽 아래를 보게 비스듬히(45°) 세워요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '빛의 반사',
    items: [
      { type: 'figure', prompt: '손전등 빛이 거울에 부딪힌 뒤 나아가는 길을 화살표로 그리고, 별에 닿는지 쓰세요.', tool: 'lightray', options: { hideRay: true }, figures: [
        { options: { scene: 'up' }, state: { mirrors: [315] }, caption: '별에 닿나요? (    )' },
        { options: { scene: 'tilt' }, state: { mirrors: [15] }, caption: '별에 닿나요? (    )' },
        { options: { scene: 'back' }, state: { mirrors: [75] }, caption: '별에 닿나요? (    )' }], answer: '① 닿아요(위로 꺾여 별에 닿음) ② 닿아요(오른쪽으로 꺾여 별에 닿음) ③ 닿지 않아요(빛이 거울 뒷면에 닿아 막힘)' },
      { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '빛은 ___ 나아가다가 거울에 부딪히면 방향이 바뀌어 나아가요. 이것을 빛의 ___(이)라고 해요.', answer: '곧게, 반사' },
      { type: 'check', prompt: '생활에서 빛의 반사를 이용하는 것을 모두 고르세요.', options: ['자동차 뒷거울', '잠망경', '돋보기', '굽은 길의 볼록 거울', '치과 거울'], answer: '자동차 뒷거울, 잠망경, 굽은 길의 볼록 거울, 치과 거울(돋보기는 빛의 굴절)' },
      { type: 'short', prompt: '잠망경으로 담 너머를 볼 수 있는 까닭을 거울과 빛을 넣어 쓰세요.', answer: '물체에서 온 빛이 위쪽 거울에서 반사되어 아래로 내려가고, 아래쪽 거울에서 다시 반사되어 눈에 들어오기 때문이에요.' },
    ],
    easy: { note: '거울의 반짝이는 앞면만 빛을 반사해요. 들어온 각과 나간 각은 같아요.' },
  },
  differentiation: {
    easy: '거울이 15°씩 돌아가고, 거울에 수직인 점선과 들어온 각·나간 각이 숫자로 보여요.',
    base: '거울이 15°씩 돌아가요. 빛이 별에 닿으면 그때 각도 표시가 나타나요.',
    challenge: '각도 표시가 없고, 거울에서 나간 빛은 확인을 눌러야 보여요. 빛의 길을 먼저 예상해요(활동 1은 5°씩, 활동 2는 15°씩).',
  },
  teacherNotes: '흔한 오개념: ① 빛이 거울 속으로 들어갔다가 나온다고 생각한다 — 빛은 거울 면에서 방향을 바꾼다. ② 거울의 뒷면도 빛을 반사한다고 생각한다 — 뒷면 칠한 면은 빛을 반사하지 않아 교구에서도 막힌다. ③ 눈에서 빛이 나와 물체를 본다고 생각한다 — 물체에서 반사된 빛이 눈에 들어와서 본다. 입사각·반사각이라는 용어는 중학교에서 배우므로 "들어온 각과 나간 각이 같다" 정도로 다룬다. ④ 들어온 각·나간 각을 거울 면에서 잰다고 생각한다 — 거울에 수직인 선(교구의 점선)을 기준으로 잰다. 실제 실험은 손전등과 테두리를 감싼 거울로 하고, 레이저 포인터는 쓰지 않는다.',
});
