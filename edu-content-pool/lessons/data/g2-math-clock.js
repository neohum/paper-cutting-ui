/* 2학년 2학기 4. 시각과 시간 — 몇 시 몇 분 읽기 (참조 차시: 다른 차시는 이 모양을 따른다) */
PaperLessons.register({
  id: 'g2-math-clock',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g2-수학-2학기-4', lesson: 2 },
  grade: 2, subject: '수학', unitTitle: '4. 시각과 시간',
  title: '몇 시 몇 분을 읽고 시계에 나타내기',
  objective: '시계의 긴바늘과 짧은바늘을 보고 몇 시 몇 분을 1분 단위까지 읽고 시계에 나타낼 수 있다.',
  standards: ['[2수03-07]'],
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
      teacher: '"민지는 8시 30분에 학교에 와요. 시계로 8시 30분은 어떻게 보일까요?" 시연 단추로 바늘이 7시에서 8시 30분까지 도는 모습을 보여 준다. 긴바늘이 한 바퀴 도는 동안 짧은바늘이 7에서 8로 한 칸만 가는 것을 짚는다(긴바늘은 분, 짧은바늘은 시). 앞 차시(5분 단위)를 떠올리게 한 뒤 "작은 눈금 한 칸은 몇 분일까요?"로 오늘의 1분 단위로 잇는다.',
      student: '그림을 보고 우리가 아침에 몇 시에 일어나는지 이야기해 봅시다.',
      demo: { tool: 'clock', options: { showMinuteNumbers: true, showDigital: true }, sequence: [{ h: 7, m: 0 }, { h: 8, m: 30 }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 시계를 읽고 만들기 (5분 단위)', minutes: 10, tool: 'clock',
          teacher: '"긴바늘(분침)이 3을 가리키면 몇 분일까요? 5, 10, 15… 같이 세어 봐요." 읽기 두 문항에서 틀린 보기(4시 15분, 8시 50분)를 고른 학생에게 짧은바늘이 어느 두 숫자 사이에 있는지 손으로 짚게 한다.',
          task: '시계를 보고 몇 시 몇 분인지 읽고, 시각에 맞게 바늘을 돌려 봅시다. 긴바늘(분침)은 분, 짧은바늘(시침)은 시를 나타내요.',
          levels: {
            // 쉬움: 바깥에 5·10·15…가 보이고, 짧은바늘이 있어야 할 두 숫자 사이가 연하게 칠해지며, 짧은바늘이 긴바늘을 따라가지 않음
            easy: { showMinuteNumbers: true, minuteStep: 5, independent: true, hourZone: true },
            base: { minuteStep: 5 },
            challenge: { minuteStep: 1, showMinuteMarks: true },
          },
          items: [
            { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요.', state: { h: 3, m: 15 }, toolOptions: { readOnly: true, choices: ['3시 3분', '3시 15분', '4시 15분'] }, target: { pick: 1, h: 3, m: 15 }, difficulty: 0.05,
              conclude: '긴바늘이 3을 가리키면 15분이에요. 숫자 한 칸이 5분이에요.' },
            { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요. 짧은바늘을 잘 보세요.', state: { h: 7, m: 50 }, toolOptions: { readOnly: true, choices: ['8시 50분', '10시 40분', '7시 50분'] }, target: { pick: 2, h: 7, m: 50 }, difficulty: 0.2,
              predict: { q: '짧은바늘이 8에 아주 가까워요. 몇 시라고 읽어야 할까요?', options: ['7시', '8시', '잘 모르겠어요'] },
              conclude: '짧은바늘이 8에 가까워도 8에 닿기 전까지는 7시예요.' },
            { prompt: '6시 40분을 만들어 보세요.', target: { h: 6, m: 40 }, state: { h: 4, m: 10 }, difficulty: 0.1, reveal: 'after-check' },
            { prompt: '9시 5분을 만들어 보세요.', target: { h: 9, m: 5 }, state: { h: 8, m: 30 }, difficulty: 0.12, reveal: 'after-check' },
            { prompt: '더 해 보기: 11시 55분을 만들어 보세요. 짧은바늘은 어디쯤일까요?', target: { h: 11, m: 55 }, state: { h: 2, m: 0 }, extra: true, difficulty: 0.3, reveal: 'after-check',
              conclude: '11시 55분의 짧은바늘은 12에 거의 닿았지만 아직 11과 12 사이예요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 1분 단위로 읽고 내 하루 시계 만들기', minutes: 10, tool: 'clock',
          teacher: '"작은 눈금 한 칸은 1분이에요. 35분에서 작은 눈금 2칸을 더 가면?" 4시 37분을 함께 센 뒤, 7시 50분 문항에서 "8시에 가까운데 왜 7시라고 읽을까요?"를 묻는다. 짧은바늘이 아직 8에 닿지 않았음을 확인한다.',
          task: '작은 눈금 한 칸은 1분이에요. 1분 단위로 읽고, 내가 하는 일의 시각을 시계에 나타내 봅시다.',
          levels: {
            easy: { showMinuteNumbers: true, minuteStep: 1, independent: true, hourZone: true },
            base: { minuteStep: 1 },
            challenge: { minuteStep: 1 },
          },
          items: [
            { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요. 작은 눈금도 세어 봐요.', state: { h: 4, m: 37 }, toolOptions: { readOnly: true, choices: ['4시 37분', '4시 7분', '5시 37분'] }, target: { pick: 0, h: 4, m: 37 }, difficulty: 0.15,
              conclude: '35분에서 작은 눈금 2칸을 더 가면 37분이에요.' },
            { prompt: '아침을 먹는 시각 7시 50분을 만들어 보세요. 짧은바늘은 어디에 있을까요?', target: { h: 7, m: 50 }, state: { h: 5, m: 0 }, difficulty: 0.18, reveal: 'after-check',
              predict: { q: '7시 50분일 때 짧은바늘은 어디에 있을까요?', options: ['7을 똑바로 가리켜요', '7과 8 사이, 8에 가까워요', '8을 똑바로 가리켜요'] },
              conclude: '7시 50분의 짧은바늘은 8에 가깝지만 아직 8에 닿지 않아서 7시예요.' },
            { prompt: '학교에 도착한 시각 8시 12분을 만들어 보세요.', target: { h: 8, m: 12 }, state: { h: 8, m: 0 }, difficulty: 0.15, reveal: 'after-check' },
            { prompt: '점심 시각 12시 26분을 만들어 보세요.', target: { h: 12, m: 26 }, state: { h: 11, m: 0 }, difficulty: 0.12, reveal: 'after-check' },
            { prompt: '더 해 보기: 학원 버스가 3시 47분에 와요. 만들어 보세요.', target: { h: 3, m: 47 }, state: { h: 1, m: 0 }, extra: true, difficulty: 0.15, reveal: 'after-check' },
            { prompt: '더 해 보기: 7시 58분을 만들고, 몇 분 더 지나면 8시가 될지 짝에게 말해 보세요.', target: { h: 7, m: 58 }, state: { h: 6, m: 0 }, extra: true, difficulty: 0.25, reveal: 'after-check',
              conclude: '7시 58분에서 2분이 더 지나면 긴바늘이 12에 오고, 짧은바늘이 8을 가리켜 8시가 돼요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 시계 퀴즈', minutes: 6, tool: 'clock', pair: true,
          teacher: '한 학생이 시계를 만들면 짝이 소리 내어 읽는다(만들기 ↔ 읽기를 번갈아). 읽은 시각이 다르면 긴바늘부터 함께 센다.',
          task: '내가 시계를 만들면 짝이 읽어요. 번갈아 해 봅시다.',
          levels: { easy: { showMinuteNumbers: true, minuteStep: 5, independent: true }, base: { minuteStep: 1 }, challenge: { minuteStep: 1 } },
          items: [{ prompt: '시계를 만들어 짝에게 읽게 하고 "다 했어요"를 누르세요.', free: true }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"긴바늘이 4를 가리키고 작은 눈금 3칸을 더 갔으면 몇 분일까요?" 출구 질문 결과를 모아 보고 틀린 학생이 많은 문항을 다시 짚는다. 1번(읽기)과 3번(짧은바늘 자리)을 틀린 학생은 다음 시간에 먼저 살핀다.',
      exitTicket: [
        { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['3시 50분', '10시 10분', '2시 50분'] }, state: { h: 2, m: 50 }, prompt: '시계를 보고 몇 시 몇 분인지 고르세요.', target: { pick: 2, h: 2, m: 50 }, difficulty: 0.15 },
        { type: 'tool', tool: 'clock', options: { minuteStep: 1 }, state: { h: 12, m: 0 }, prompt: '5시 43분을 만들어 보세요.', target: { h: 5, m: 43 }, difficulty: 0.15 },
        { type: 'choice', prompt: '9시 55분일 때 짧은바늘은 어디에 있나요?', options: ['9를 똑바로 가리켜요', '9와 10 사이, 10에 아주 가까워요', '10을 똑바로 가리켜요'], answer: 1, difficulty: 0.15, explain: '분이 지날수록 짧은바늘은 다음 숫자 쪽으로 가요. 그래서 9시 55분에는 10에 아주 가깝지만 아직 9시예요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '몇 시 몇 분',
    items: [
      { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', figures: [
        { state: { h: 2, m: 10 }, caption: '___시 ___분' }, { state: { h: 11, m: 50 }, caption: '___시 ___분' }, { state: { h: 7, m: 43 }, caption: '___시 ___분' }], answer: '2시 10분, 11시 50분, 7시 43분' },
      { type: 'figure', prompt: '시각에 맞게 짧은바늘과 긴바늘을 그려 넣으세요.', tool: 'clock', figures: [
        { options: { hideHands: true }, caption: '4시 30분' }, { options: { hideHands: true }, caption: '8시 15분' }, { options: { hideHands: true }, caption: '1시 56분' }], answer: '짧은바늘: 4와 5 사이(가운데), 8과 9 사이(8 가까이), 1과 2 사이(2에 아주 가까이)' },
      { type: 'choice', prompt: '6시 50분을 바르게 읽은 친구에 ○ 하세요. (짧은바늘이 7에 가까워요)', options: ['"7시 50분이에요"', '"6시 50분이에요"', '"10시 30분이에요"'], answer: '"6시 50분이에요"' },
      { type: 'short', prompt: '나는 몇 시 몇 분에 학교에 오나요? 시각을 쓰고, 그때 무엇을 하는지 쓰세요.' },
    ],
    easy: {
      note: '긴바늘부터 읽어요. 숫자 한 칸은 5분, 작은 눈금 한 칸은 1분이에요. 짧은바늘은 지나온 숫자를 읽어요.',
      items: [
        { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
          { state: { h: 2, m: 10 }, caption: '___시 ___분' }, { state: { h: 5, m: 25 }, caption: '___시 ___분' }, { state: { h: 9, m: 45 }, caption: '___시 ___분' }], answer: '2시 10분, 5시 25분, 9시 45분' },
        { type: 'figure', prompt: '시각에 맞게 짧은바늘과 긴바늘을 그려 넣으세요.', tool: 'clock', figures: [
          { options: { hideHands: true, showMinuteNumbers: true }, caption: '4시 30분' }, { options: { hideHands: true, showMinuteNumbers: true }, caption: '8시 15분' }], answer: '짧은바늘: 4와 5 사이, 8과 9 사이' },
        { type: 'short', prompt: '나는 몇 시 몇 분에 학교에 오나요?' },
      ],
    },
  },
  differentiation: {
    easy: '시계 바깥에 5분 단위 숫자가 보이고, 짧은바늘이 있어야 할 두 숫자 사이가 연하게 칠해져요. 짧은바늘이 긴바늘을 따라 움직이지 않아 긴바늘 먼저, 짧은바늘 나중으로 맞춰요. 디지털 숫자는 보이지 않아 바늘을 읽어야 해요.',
    base: '활동 1은 5분, 활동 2는 1분 단위로 맞춰요. 짧은바늘이 긴바늘을 따라 함께 움직여요.',
    challenge: '활동 1부터 1분 단위로 맞추고, 더 해 보기 문항(11시 55분, 3시 47분, 7시 58분)이 나와요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 짧은바늘이 두 숫자 사이에 있을 때 가까운 숫자를 읽는다(7시 50분을 8시 50분으로) → 짧은바늘은 "지나온 숫자"를 읽는다. 교구는 이 오답에 "아직 8에 닿지 않았어요"라고 따로 답한다. ② 긴바늘과 짧은바늘을 바꿔 읽는다(7시 50분을 10시 40분으로) → 길이로 구별하게 하고, 교구는 "바늘이 바뀌었어요"라고 짚는다. ③ 긴바늘이 가리키는 숫자를 그대로 분으로 읽는다(3시 15분을 3시 3분으로) → 숫자 한 칸은 5분. ④ 작은 눈금을 셀 때 숫자 눈금에서 다시 1부터 센다 → "35분에서 1, 2"처럼 이어 센다. ⑤ 12시 26분처럼 12 다음이 1인 것을 헷갈린다. 바늘 이름은 교과서처럼 "긴바늘·짧은바늘"로 부르고, "분침·시침"은 활동 1 과제에서 한 번만 소개한다.',
});
