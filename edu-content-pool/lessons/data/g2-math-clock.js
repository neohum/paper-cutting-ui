/* 2학년 2학기 4. 시각과 시간 — 몇 시 몇 분 읽기 (참조 차시: 다른 차시는 이 모양을 따른다) */
PaperLessons.register({
  id: 'g2-math-clock',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g2-수학-2학기-4', lesson: 2 },
  grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
  title: '몇 시 몇 분을 읽고 시계에 나타내기',
  objective: '시계의 긴바늘과 짧은바늘을 보고 몇 시 몇 분을 읽고 나타낼 수 있다.',
  standards: ['[2수03-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a cheerful paper clock tower in a small village at morning, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: "img/g2-math-clock.webp", size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 400, y: 60, s: 0.9 }, { motif: 'cloud', x: 120, y: 56 }, { motif: 'cloud', x: 300, y: 40, s: 0.7 },
      { motif: 'hills', y: 200 }, { motif: 'house', x: 110, y: 214 }, { motif: 'house', x: 360, y: 218, color: 'buttercup', s: 0.8 },
      { motif: 'tree', x: 230, y: 214 }, { motif: 'bird', x: 200, y: 90 }, { motif: 'text', x: 240, y: 150, text: '지금 몇 시 몇 분일까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"민지는 8시 30분에 학교에 와요. 시계로 8시 30분은 어떻게 보일까요?" 전자칠판에서 시계 바늘이 저절로 도는 시연(시연 단추)을 보여 준다.',
      student: '그림을 보고 우리가 아침에 몇 시에 일어나는지 이야기해 봅시다.',
      demo: { tool: 'clock', options: { showMinuteNumbers: true, showDigital: true }, sequence: [{ h: 7, m: 0 }, { h: 8, m: 30 }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 긴바늘로 분 읽기', minutes: 10, tool: 'clock',
          teacher: '"숫자 1칸은 몇 분일까요? 5, 10, 15… 같이 세어 봐요." 짧은바늘이 숫자 사이에 있는 까닭을 3시 15분으로 짚어 준다.',
          task: '긴바늘(분침)을 돌려 시각을 만들어 봅시다. 숫자 1칸은 5분이에요.',
          levels: { easy: { showMinuteNumbers: true, minuteStep: 5, showDigital: true, independent: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 1 } },
          items: [
            { prompt: '3시 15분을 만들어 보세요.', target: { h: 3, m: 15 }, state: { h: 1, m: 0 } },
            { prompt: '6시 40분을 만들어 보세요.', target: { h: 6, m: 40 }, state: { h: 4, m: 10 } },
            { prompt: '9시 5분을 만들어 보세요.', target: { h: 9, m: 5 }, state: { h: 8, m: 30 } },
            { prompt: '더 해 보기: 11시 55분을 만들어 보세요. 짧은바늘은 어디쯤일까요?', target: { h: 11, m: 55 }, state: { h: 2, m: 0 }, extra: true, difficulty: 0.25 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 내 하루 시계', minutes: 10, tool: 'clock',
          teacher: '"7시 50분은 8시에 가까운데 왜 7시라고 읽을까요?" 짧은바늘이 아직 8에 닿지 않았음을 확인한다.',
          task: '내가 하는 일과 시각을 시계에 나타내 봅시다.',
          levels: { easy: { showMinuteNumbers: true, minuteStep: 5, showDigital: true, independent: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 1 } },
          items: [
            { prompt: '아침을 먹는 시각 7시 50분을 만들어 보세요. (짧은 바늘이 8에 가까워요!)', target: { h: 7, m: 50 }, state: { h: 5, m: 0 } },
            { prompt: '점심 시각 12시 20분을 만들어 보세요.', target: { h: 12, m: 20 }, state: { h: 11, m: 0 } },
            { prompt: '잠자는 시각 9시 35분을 만들어 보세요.', target: { h: 9, m: 35 }, state: { h: 11, m: 0 } },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 시계 퀴즈', minutes: 6, tool: 'clock', pair: true,
          task: '짝이 말한 시각을 시계로 만들고, 서로 맞는지 확인해 봅시다.',
          levels: { easy: { showMinuteNumbers: true, minuteStep: 5, showDigital: true, independent: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 1 } },
          items: [{ prompt: '짝이 말한 시각을 만들고 "다 했어요"를 누르세요.', free: true }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"긴바늘이 4를 가리키면 몇 분일까요?" 출구 질문 결과를 모아 보고 틀린 학생이 많은 문항을 다시 짚는다.',
      exitTicket: [
        { type: 'choice', prompt: '긴바늘이 6을 가리키면 몇 분인가요?', options: ['6분', '30분', '60분'], answer: 1, explain: '긴바늘은 숫자 한 칸에 5분이에요. 6칸이면 30분이에요.' },
        { type: 'tool', tool: 'clock', options: { minuteStep: 5 }, state: { h: 2, m: 0 }, prompt: '4시 45분을 만들어 보세요.', target: { h: 4, m: 45 } },
        { type: 'choice', prompt: '3시 50분일 때 짧은 바늘은 어디에 있나요?', options: ['3을 똑바로 가리켜요', '3과 4 사이, 4에 가까워요', '4를 똑바로 가리켜요'], answer: 1, explain: '분이 지날수록 짧은 바늘은 다음 숫자 쪽으로 가요. 그래서 3시 50분에는 4에 가깝지만 아직 3시예요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '몇 시 몇 분',
    items: [
      { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', figures: [
        { state: { h: 2, m: 10 }, caption: '___시 ___분' }, { state: { h: 5, m: 25 }, caption: '___시 ___분' }, { state: { h: 11, m: 50 }, caption: '___시 ___분' }] },
      { type: 'figure', prompt: '시각에 맞게 시침과 분침을 그려 넣으세요.', tool: 'clock', figures: [
        { options: { hideHands: true }, caption: '4시 30분' }, { options: { hideHands: true }, caption: '8시 15분' }, { options: { hideHands: true }, caption: '1시 55분' }] },
      { type: 'short', prompt: '나는 몇 시 몇 분에 학교에 오나요? 시각을 쓰고, 그때 무엇을 하는지 쓰세요.' },
    ],
    easy: { note: '숫자 옆 작은 수(5, 10, 15 …)를 보며 풀어요.' },
  },
  differentiation: {
    easy: '시계 바깥에 5분 단위 숫자가 보이고, 분침이 5분씩 딱딱 맞춰져요.',
    challenge: '1분 단위로 맞추고, 디지털 숫자가 보이지 않아요.',
  },
  teacherNotes: '짧은바늘이 두 숫자 사이에 있을 때 앞 숫자를 읽는다는 점을 3시 50분 같은 예로 확인한다(4시로 읽는 오개념).',
});
