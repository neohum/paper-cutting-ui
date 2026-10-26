/* 검사용 차시: 종이 몸(body) 교구의 모든 모드(layers·find·path·match·arm·parts·ask)를 한 차시에서 쓴다. 5학년 1학기 4. 우리 몸의 구조와 기능 */
PaperLessons.register({
  id: '_tool-body',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g5-과학-1학기-4', lesson: 1 },
  grade: 5, subject: '과학', unitTitle: '4. 우리 몸의 구조와 기능',
  title: '종이 몸을 한 겹씩 벗겨 뼈와 근육, 몸속 기관 알아보기',
  objective: '뼈와 근육이 함께 움직이는 모습과 소화·호흡·배설 기관의 자리와 하는 일을 종이 몸 모형으로 나타내어 설명할 수 있다.',
  standards: ['[6과04-01]', '[6과04-02]', '[6과04-03]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a friendly paper child figure whose skin layer is peeling back like a paper flap to show pastel muscles, white paper bones and soft colorful organs, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], background: '#FBF7EF', layers: [
      { motif: 'sun', x: 90, y: 90, s: 0.6 }, { motif: 'star', x: 400, y: 60 }, { motif: 'star', x: 420, y: 150, s: 0.7 },
      { motif: 'text', x: 260, y: 220, text: '내 몸속은 어떻게 생겼을까요?', size: 22, fill: '#3D352E' },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"피부 밑에는 무엇이 있을까요?" 시연 단추로 종이 몸의 피부·근육·뼈를 한 겹씩 벗겨 몸속 기관이 나타나는 모습을 보여 준다. 학생에게 자기 팔을 만져 단단한 곳(뼈)과 말랑한 곳(근육)을 찾게 한다.',
      student: '내 팔을 만져 보며 단단한 곳과 말랑한 곳을 찾아봅시다.',
      demo: { tool: 'body', options: { mode: 'layers' }, sequence: [{ layer: '기관' }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 몸의 겹과 뼈·근육', minutes: 9, tool: 'body', options: { mode: 'layers' },
          teacher: '"팔을 굽힐 때 위팔 앞쪽 근육은 어떻게 될까요?" 자기 팔을 굽혔다 펴며 근육이 두꺼워지고 얇아지는 것을 만져 보게 한다. 근육이 뼈에 붙어 있어 근육이 줄어들면 뼈가 움직인다는 것을 짚는다.',
          task: '‘한 겹 벗기기’ 단추로 겹을 벗기고, 팔 그림은 아래팔을 끌거나 방향키로 굽혀요.',
          levels: { easy: { readout: true }, base: {}, challenge: { readout: false } },
          items: [
            { prompt: '한 겹씩 벗겨 뼈가 맨 위에 보이게 해 보세요.', state: { peeled: 0 }, target: { layer: '뼈' }, difficulty: 0.1,
              predict: { q: '피부를 벗기면 바로 무엇이 나올까요?', options: ['뼈', '근육', '몸속 기관'] },
              conclude: '우리 몸은 겉에서부터 피부, 근육, 뼈, 몸속 기관 차례로 되어 있어요.' },
            { prompt: '근육이 맨 위에 보이게 해 보세요. 맨 위 겹 이름은 확인한 뒤에 보여요.', state: { peeled: 3 }, toolOptions: { readout: true }, target: { layer: '근육' }, difficulty: 0.2, reveal: 'after-check' },
            { prompt: '아래팔을 끌어 팔을 굽혀 보세요.', toolOptions: { mode: 'arm' }, state: { angle: 0 }, target: { bent: true }, difficulty: 0.15,
              conclude: '팔을 굽히면 안쪽 근육이 짧아지면서 아래팔뼈를 끌어 올려요.' },
            { prompt: '바깥쪽 근육이 짧아지도록 팔을 움직여 보세요.', toolOptions: { mode: 'arm', readout: true }, state: { angle: 120 }, target: { shorter: '바깥쪽' }, difficulty: 0.3 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 몸속 기관 찾기와 하는 일', minutes: 9, tool: 'body', options: { mode: 'find' },
          teacher: '"음식물의 영양소를 흡수하는 곳은 어디일까요?" 기관의 자리를 내 몸의 가슴·배에 손으로 짚어 보게 한다. 위와 간의 자리를 바꾸는 학생이 많다.',
          task: '몸속 그림에서 기관을 눌러 골라요. 하는 일 잇기는 아래 단추를 눌러 보기를 바꿔요.',
          levels: { easy: { names: true, readout: true }, base: {}, challenge: { names: false } },
          items: [
            { prompt: '숨을 쉴 때 산소를 받아들이는 기관을 눌러 보세요.', target: { sel: '폐' }, difficulty: 0.1 },
            { prompt: '펌프처럼 뛰어 피를 온몸으로 보내는 기관을 눌러 보세요.', target: { job: '펌프처럼 뛰어 피를 온몸으로 보내요' }, difficulty: 0.15 },
            { prompt: '피 속의 노폐물을 걸러 오줌을 만드는 기관을 눌러 보세요.', target: { sel: '콩팥' }, difficulty: 0.3 },
            { prompt: '기관마다 하는 일을 골라 이어 보세요.', toolOptions: { mode: 'match', organs: ['심장', '폐', '위', '콩팥'] }, target: { match: 'auto' }, difficulty: 0.3,
              conclude: '기관은 저마다 하는 일이 달라요. 여러 기관이 함께 일해서 우리가 살아가요.' },
            { prompt: '그림의 번호마다 기관 이름을 골라 보세요.', toolOptions: { mode: 'match', matchBy: 'name', organs: ['간', '위', '작은창자', '큰창자'] }, target: { match: 'auto' }, difficulty: 0.35 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 지나가는 차례와 몸의 부분', minutes: 9, tool: 'body', options: { mode: 'path' },
          teacher: '"우리가 먹은 음식물은 어떤 차례로 지나갈까요?" 입에서 항문까지 손가락으로 몸 위를 따라가게 한다. 간은 음식물이 지나가지 않는 소화 기관이라는 것을 짚는다. 체육과 이을 때는 운동 전 풀어 줄 곳을 고르게 한다.',
          task: '기관을 차례대로 눌러요. 잘못 눌렀으면 ‘하나 되돌리기’를 눌러요.',
          levels: { easy: { readout: true }, base: {}, challenge: { readout: false } },
          items: [
            { prompt: '음식물이 지나가는 차례대로 기관을 눌러 보세요.', target: { system: '소화' }, difficulty: 0.3,
              predict: { q: '음식물은 간을 지나갈까요?', options: ['지나간다', '지나가지 않는다'] },
              conclude: '음식물은 입 → 식도 → 위 → 작은창자 → 큰창자 → 항문 차례로 지나가요. 간은 소화를 돕지만 음식물이 지나가지 않아요.' },
            { prompt: '숨을 들이쉴 때 공기가 지나가는 차례대로 눌러 보세요. 이름은 확인한 뒤에 보여요.', toolOptions: { revealAfterCheck: true }, target: { system: '호흡' }, difficulty: 0.2, reveal: 'after-check' },
            { prompt: '줄넘기 전에 풀어 주면 좋은 곳: 발목과 무릎을 모두 골라 보세요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'] }, target: { parts: ['무릎', '발목'] }, difficulty: 0.2 },
            { prompt: '그림을 보고 고르세요. 번호가 가리키는 기관이 하는 일은?', toolOptions: { mode: 'find', readOnly: true, numbers: ['작은창자'], ask: { q: '①이 하는 일은?', choices: ['음식물의 영양소를 흡수해요', '오줌을 모았다가 내보내요', '피를 온몸으로 보내요'], why: [null, '오줌을 모으는 곳은 배 아래쪽의 방광이에요.', '피를 보내는 곳은 가슴의 심장이에요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 찾은 기관 가운데 하나를 골라, 그 기관이 일을 멈추면 어떻게 될지 말해 볼까요?" 출구 질문에서 위와 작은창자가 하는 일을 바꿔 쓴 학생은 다음 시간에 차례 모형으로 다시 짚는다.',
      exitTicket: [
        { type: 'tool', tool: 'body', options: { mode: 'find' }, prompt: '음식물의 영양소를 흡수하는 기관을 누르세요.', target: { sel: '작은창자' }, difficulty: 0.2 },
        { type: 'choice', prompt: '팔을 굽힐 때 안쪽 근육은 어떻게 될까요?', options: ['짧아진다', '길어진다', '그대로다'], answer: 0, difficulty: 0.2, explain: '안쪽 근육이 짧아지며 아래팔뼈를 끌어 올려 팔이 굽혀져요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '종이 몸 관찰 기록',
    items: [
      { type: 'figure', prompt: '번호가 가리키는 기관의 이름을 쓰세요.', tool: 'body', options: { mode: 'find', numbers: ['폐', '심장', '위', '작은창자'] }, figures: [{ state: {}, caption: '①(      ) ②(      ) ③(      ) ④(      )' }], wide: true, answer: '폐, 심장, 위, 작은창자' },
      { type: 'figure', prompt: '팔을 굽힐 때와 펼 때, 짧아지는 근육을 쓰세요.', tool: 'body', options: { mode: 'arm' }, figures: [{ state: { angle: 120 }, caption: '굽힐 때: (        ) 근육' }, { state: { angle: 0 }, caption: '펼 때: (        ) 근육' }], answer: '안쪽, 바깥쪽' },
      { type: 'table', prompt: '기관이 하는 일을 쓰세요.', columns: ['기관', '하는 일'], cells: [['위', ''], ['폐', ''], ['콩팥', '']] },
      { type: 'short', prompt: '음식물이 지나가는 차례를 화살표로 쓰세요.' },
    ],
    easy: {
      note: '몸은 겉에서부터 피부, 근육, 뼈, 몸속 기관 차례로 되어 있어요.',
      items: [
        { type: 'figure', prompt: '번호가 가리키는 기관을 보기에서 골라 쓰세요. (보기: 폐, 위)', tool: 'body', options: { mode: 'find', numbers: ['폐', '위'] }, figures: [{ state: {}, caption: '①(      ) ②(      )' }], answer: '폐, 위' },
        { type: 'choice', prompt: '숨을 쉴 때 산소를 받아들이는 기관은?', options: ['폐', '위'], answer: '폐' },
        { type: 'short', prompt: '내 몸에서 뼈가 만져지는 곳을 하나 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '누른 기관의 이름과 하는 일, 맨 위 겹 이름이 바로 보여 조작 결과를 곧바로 확인해요.',
    base: '이름 없이 그림 속 자리와 모양을 보고 판단해요.',
    challenge: '읽기 글자가 사라져 몸 그림만 보고 판단해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 뼈가 피부 바로 밑에 있다고 생각한다 → 겹 벗기기로 근육이 먼저 나온다는 것을 보여 준다. ② 팔을 굽힐 때 바깥쪽 근육이 짧아진다고 생각한다. ③ 위와 간의 자리를 바꾼다. ④ 음식물이 간을 지나간다고 생각한다. ⑤ 기관(숨길)과 식도를 헷갈린다.',
});
