/* 교구 검사 차시 — 재기 실험대(measure)의 네 모드(자·저울·눈금 그릇·단위)와 묻기 칸을 모두 쓴다. 3학년 2학기 5. 들이와 무게 */
PaperLessons.register({
  id: '_tool-measure',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-수학-2학기-5', lesson: 1 },
  grade: 3, subject: '수학', unitTitle: '5. 들이와 무게',
  title: '자와 저울과 눈금 그릇으로 재어 보기',
  objective: '자로 길이를 바르게 읽고, 저울과 눈금 그릇으로 무게와 들이를 재며, 재는 것에 알맞은 단위를 고를 수 있다.',
  standards: ['[4수03-17]', '[4수03-20]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of children measuring a pencil with a ruler, weighing an apple on a balance scale and pouring water into a measuring cup, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'hills', y: 205 },
      { motif: 'house', x: 110, y: 218, color: 'sky' }, { motif: 'tree', x: 385, y: 214 }, { motif: 'star', x: 250, y: 72 },
      { motif: 'text', x: 240, y: 150, text: '얼마나 길고, 무겁고, 많을까요?', size: 21 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"자의 0이 아닌 곳에 연필을 대면 길이를 어떻게 읽을까요?" 시연 단추로 연필이 2 cm 눈금에서 시작하는 자를 보여 주고, 끝 눈금에서 시작 눈금을 빼야 함을 함께 말한다. "길이는 자로 재요. 무게와 들이는 무엇으로 잴까요?"라고 물어 오늘 쓸 저울과 눈금 그릇을 소개한다.',
      student: '우리 반에서 자, 저울, 눈금 그릇으로 재 볼 만한 물건을 하나씩 말해 봅시다.',
      demo: { tool: 'measure', options: { mode: 'ruler', object: { name: '연필', len: 7.5, start: 2 }, split: true }, sequence: [{ read: 7.5 }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 자로 길이 바르게 읽기', minutes: 8, tool: 'measure',
          teacher: '"물체의 왼쪽 끝이 어느 눈금에 있나요?" 시작이 0이 아닌 문항에서 끝 눈금만 읽은 학생에게는 처음과 끝 눈금을 손가락으로 짚게 한다. 1 cm 사이 작은 눈금 10칸이 1 mm라는 것을 띠 만들기 문항에서 다시 확인한다.',
          task: '자 위 물체의 길이를 읽어 칸에 써요. 띠 만들기 문항은 띠 끝을 끌거나 −/+ 단추로 길이를 맞춰요.',
          levels: {
            easy: { mode: 'ruler', max: 10 },
            base: { mode: 'ruler', max: 15 },
            challenge: { mode: 'ruler', max: 20 },
          },
          items: [
            { prompt: '지우개의 길이는 몇 cm 몇 mm인가요?', toolOptions: { object: { name: '지우개', len: 4.3 }, split: true }, target: { read: 4.3 }, difficulty: 0.1 },
            { prompt: '연필이 2 cm 눈금에서 시작해요. 연필의 길이는 몇 cm인가요?', toolOptions: { object: { name: '연필', len: 7, start: 2 }, mm: false }, target: { read: 7 }, difficulty: 0.2,
              predict: { q: '연필 끝이 9 cm 눈금에 있으면 연필 길이는 9 cm일까요?', options: ['네, 9 cm예요', '아니요, 더 짧아요', '잘 모르겠어요'] },
              conclude: '시작이 0이 아니면 끝 눈금에서 시작 눈금을 빼야 길이가 나와요.' },
            { prompt: '띠의 끝을 옮겨 길이가 6 cm 3 mm인 띠를 만들어 보세요.', toolOptions: { make: true }, target: { make: 6.3 }, difficulty: 0.2, reveal: 'after-check' },
            { prompt: '더 해 보기: 길이가 3 cm인 클립으로 책상 그림을 재면 클립 몇 개만큼인가요?', toolOptions: { object: { name: '책상', len: 12 }, tiles: { name: '클립', len: 3 } }, target: { read: 4 }, extra: true, difficulty: 0.25 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 저울과 눈금 그릇으로 무게와 들이 재기', minutes: 10, tool: 'measure',
          teacher: '"양팔저울이 수평이 되면 무엇을 알 수 있나요?" 바둑돌 수로 무게를 견주게 한 뒤, 용수철저울과 눈금 그릇에서는 큰 눈금 한 칸과 작은 눈금 한 칸이 각각 얼마인지 먼저 말하게 한다. 1 L가 1000 mL라는 것을 1 L 300 mL 문항에서 짚는다.',
          task: '저울은 −/+ 단추로 추를 올리고 내려요. 눈금 그릇은 물 붓기·덜기 단추를 누르거나 눈금을 읽어 칸에 써요.',
          levels: {
            easy: { mode: 'scale' },
            base: { mode: 'scale' },
            challenge: { mode: 'scale' },
          },
          items: [
            { prompt: '지우개와 무게가 같아지도록 오른쪽에 바둑돌을 올려 저울을 수평으로 만들어 보세요.', toolOptions: { mode: 'scale', left: [{ name: '지우개', w: 6 }], unit: { name: '바둑돌', w: 1 }, showAmount: true }, target: { balance: true }, difficulty: 0.1, reveal: 'after-check' },
            { prompt: '빈 그릇에 물을 부어 700 mL를 만들어 보세요.', toolOptions: { mode: 'volume', pour: true, beakers: [{ v: 0, max: 1000 }], step: 100, minor: 2 }, target: { fill: 700 }, difficulty: 0.15 },
            { prompt: '그릇에 든 물은 몇 L 몇 mL인가요?', toolOptions: { mode: 'volume', beakers: [{ v: 1300, max: 2000 }], step: 500, minor: 5, split: true }, target: { read: 1300 }, difficulty: 0.25,
              conclude: '1 L는 1000 mL라서 1300 mL는 1 L 300 mL예요.' },
            { prompt: '필통을 용수철저울에 매달고 눈금을 읽어 무게를 쓰세요.', toolOptions: { mode: 'scale', kind: 'spring', objects: [{ name: '필통', w: 350 }, { name: '공책', w: 120 }], max: 500, step: 100, minor: 10 }, target: { read: 350 }, difficulty: 0.25 },
            { prompt: '더 해 보기: 저울을 보고 어느 쪽이 더 무거운지 고르세요.', toolOptions: { mode: 'scale', left: [{ name: '풀', w: 4 }], right: [{ name: '가위', w: 7 }], ask: { q: '어느 쪽이 더 무거운가요?', choices: ['풀', '가위', '같아요'], explain: '내려간 쪽이 더 무거워요.' } }, target: { pick: 1 }, extra: true, difficulty: 0.1 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 알맞은 단위 고르기', minutes: 8, tool: 'measure',
          teacher: '"서울에서 부산까지를 cm로 말하면 어떨까요?" 수가 너무 커지거나 작아지는 단위를 직접 소리 내어 읽어 보게 하고, 재는 것의 크기에 맞는 단위를 고르게 한다.',
          task: '물건마다 알맞은 단위 단추를 눌러요. 방향키로도 고를 수 있어요.',
          levels: {
            easy: { mode: 'unit' },
            base: { mode: 'unit' },
            challenge: { mode: 'unit' },
          },
          items: [
            { prompt: '길이를 잴 때 알맞은 단위를 골라 보세요.', toolOptions: { things: [{ name: '연필의 길이', amount: 15 }, { name: '교실 긴 쪽', amount: 9 }, { name: '서울에서 부산', amount: 400 }], units: ['mm', 'cm', 'm', 'km'] }, target: { units: [1, 2, 3] }, difficulty: 0.15 },
            { prompt: '무게와 들이에 알맞은 단위를 골라 보세요.', toolOptions: { things: [{ name: '사과 한 개의 무게', amount: 300 }, { name: '쌀 한 포대의 무게', amount: 20 }, { name: '물병에 든 물', amount: 500 }, { name: '욕조에 든 물', amount: 200 }], units: ['g', 'kg', 'mL', 'L'] }, target: { units: [0, 1, 2, 3] }, difficulty: 0.25 },
            { prompt: '더 해 보기: 개미의 몸길이와 운동장 한 바퀴에 알맞은 단위를 골라 보세요.', toolOptions: { things: [{ name: '개미의 몸길이', amount: 5 }, { name: '운동장 한 바퀴', amount: 200 }], units: ['mm', 'cm', 'm', 'km'] }, target: { units: [0, 2] }, extra: true, difficulty: 0.2 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 잰 것 가운데 가장 어려웠던 것은 무엇인가요?" 시작이 0이 아닌 자 읽기와 L·mL 바꾸기를 칠판에 한 줄씩 정리한다. 출구 1번을 틀린 학생은 다음 시간에 작은 눈금 세기부터 다시 본다.',
      exitTicket: [
        { type: 'tool', tool: 'measure', options: { mode: 'ruler', object: { name: '크레파스', len: 8.6 }, split: true }, prompt: '크레파스의 길이는 몇 cm 몇 mm인가요?', target: { read: 8.6 }, difficulty: 0.15 },
        { type: 'choice', prompt: '1 L 200 mL와 같은 들이는 무엇인가요?', options: ['120 mL', '1200 mL', '12000 mL'], answer: 1, difficulty: 0.25, explain: '1 L는 1000 mL라서 1000 mL와 200 mL를 더하면 1200 mL예요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '자·저울·눈금 그릇',
    items: [
      { type: 'figure', prompt: '자를 보고 물체의 길이를 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10 }, figures: [
        { options: { object: { name: '못', len: 5.4 } }, caption: '___ cm ___ mm' }, { options: { object: { name: '열쇠', len: 4, start: 3 } }, caption: '___ cm' }], answer: '5 cm 4 mm, 4 cm' },
      { type: 'figure', prompt: '눈금 그릇에 든 물의 양을 쓰세요.', tool: 'measure', options: { mode: 'volume' }, figures: [
        { options: { beakers: [{ v: 600, max: 1000 }], step: 100, minor: 2 }, caption: '___ mL' }, { options: { beakers: [{ v: 1500, max: 2000 }], step: 500, minor: 5 }, caption: '___ L ___ mL' }], answer: '600 mL, 1 L 500 mL' },
      { type: 'choice', prompt: '무게를 잴 때 쓰는 단위에 ○ 하세요.', options: ['cm', 'kg', 'mL'], answer: 'kg' },
      { type: 'table', prompt: '같은 양이 되도록 빈칸을 채우세요.', columns: ['L와 mL', 'mL'], cells: [['2 L 300 mL', ''], ['', '1050 mL'], ['3 L', '']], answer: '2300 mL, 1 L 50 mL, 3000 mL' },
      { type: 'short', prompt: '집에서 무게를 재 보고 싶은 물건과 알맞은 단위를 쓰세요.' },
    ],
    easy: {
      note: '자는 물체의 한쪽 끝을 0에 맞추고 다른 쪽 끝의 눈금을 읽어요. 1 L는 1000 mL예요.',
      items: [
        { type: 'figure', prompt: '자를 보고 길이를 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [
          { options: { object: { name: '클립', len: 3 } }, caption: '___ cm' }, { options: { object: { name: '지우개', len: 5 } }, caption: '___ cm' }], answer: '3 cm, 5 cm' },
        { type: 'choice', prompt: '물의 양(들이)을 잴 때 쓰는 단위에 ○ 하세요.', options: ['mL', 'g', 'cm'], answer: 'mL' },
        { type: 'short', prompt: '교실에서 1 m보다 긴 물건을 하나 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '자가 10 cm까지만 보여서 눈금이 크고, 0에서 시작하는 물체부터 읽어요.',
    base: '15 cm 자로 시작이 0이 아닌 물체도 읽고, 저울과 눈금 그릇의 작은 눈금을 읽어요.',
    challenge: '20 cm 자에서 mm까지 읽고, L와 mL를 오가며 들이를 써요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 시작이 0이 아닌 자에서 끝 눈금만 읽는다 → 교구는 이 답을 따로 알아보고 시작 눈금을 다시 보게 한다. ② 작은 눈금 한 칸의 크기를 1로만 센다 → 큰 눈금 사이 칸 수를 먼저 세게 한다. ③ 1 L 300 mL를 130 mL로 쓴다 → 1 L = 1000 mL를 함께 쓴다. ④ 양팔저울에서 올라간 쪽을 무겁다고 한다 → 내려간 쪽이 무겁다.',
});
