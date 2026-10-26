/* 검사용 차시 — 한살이 회전판(lifecycle) 교구의 모든 모드(order·match·sort·fill·pick)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-lifecycle',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-과학-1학기-4', lesson: 3 },
  grade: 3, subject: '과학', unitTitle: '4. 생물의 한살이',
  title: '배추흰나비와 개구리의 한살이 돌려 보기',
  objective: '동물과 식물이 자라면서 거치는 단계를 차례대로 늘어놓고, 한살이가 되풀이된다는 것을 설명할 수 있다.',
  standards: ['[4과04-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: ['배추흰나비 애벌레를 관찰할 때는 손으로 만지지 않고 붓으로 옮겨요.', '관찰한 뒤에는 손을 비누로 씻어요.'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a cabbage leaf with a tiny egg, a green caterpillar, a pupa and a white butterfly arranged in a circle, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.7 }, { motif: 'hills', y: 210 }, { motif: 'larva', x: 150, y: 160, s: 1.6 }, { motif: 'butterfly', x: 330, y: 150, s: 1.6 },
      { motif: 'flower', x: 240, y: 218 }, { motif: 'bird', x: 120, y: 80 },
      { motif: 'text', x: 240, y: 118, text: '자라면서 어떻게 바뀔까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"우리가 기르는 배추흰나비 알에서 무엇이 나올까요? 나비가 바로 나올까요?" 시연 단추로 알 → 애벌레 → 번데기 → 어른벌레가 둥근 판에 차례로 놓이는 모습을 보여 준다. 어른벌레에서 다시 알로 가는 화살표를 짚으며 "그다음은?"이라고 묻는다.',
      student: '배추흰나비를 기르며 본 모습을 떠올려 봅시다.',
      demo: { tool: 'lifecycle', options: { center: '배추흰나비의 한살이', shuffle: false, cards: [{ id: '알', text: '알', motif: 'egg' }, { id: '애벌레', text: '애벌레', motif: 'larva' }, { id: '번데기', text: '번데기', motif: 'pupa' }, { id: '어른벌레', text: '어른벌레', motif: 'butterfly' }] }, sequence: [{ order: ['알', '애벌레', '번데기', '어른벌레'] }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 한살이를 화살표 차례로 놓기', minutes: 10, tool: 'lifecycle',
          teacher: '"가장 처음 모습은 무엇일까요? 어디서부터 시작해도 화살표를 따라가면 같은 차례가 될까요?" 번데기와 애벌레를 바꾸는 학생에게 기르기 상자에서 본 차례를 떠올리게 한다. 판 아래 "차례대로 따라가 보기" 단추로 화살표를 함께 따라간다.',
          task: '둥근 판의 자리에 한살이 단계 카드를 화살표 차례대로 놓아요. 카드를 끌거나, 눌러 고른 뒤 자리를 눌러요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '배추흰나비의 한살이를 화살표 차례대로 놓아 보세요.', toolOptions: { center: '배추흰나비의 한살이', cards: [{ id: '알', text: '알', motif: 'egg' }, { id: '애벌레', text: '애벌레', motif: 'larva' }, { id: '번데기', text: '번데기', motif: 'pupa' }, { id: '어른벌레', text: '어른벌레', motif: 'butterfly' }] }, target: { order: ['알', '애벌레', '번데기', '어른벌레'], cyclic: true }, difficulty: 0.1 },
            { prompt: '개구리의 한살이를 놓아 보세요. 다 맞히면 단계마다 걸리는 때가 보여요.', reveal: 'after-check', toolOptions: { center: '개구리의 한살이', cards: [{ id: '알', text: '알', motif: 'egg', back: '봄' }, { id: '올챙이', text: '올챙이', motif: 'tadpole', back: '약 2주 뒤' }, { id: '뒷다리', text: '뒷다리가 난 올챙이', motif: 'tadpole', back: '약 6주 뒤' }, { id: '개구리', text: '개구리', motif: 'frog', back: '약 3달 뒤' }] },
              target: { order: ['알', '올챙이', '뒷다리', '개구리'], cyclic: true }, difficulty: 0.2,
              predict: { q: '올챙이는 앞다리와 뒷다리 가운데 무엇이 먼저 날까요?', options: ['앞다리', '뒷다리', '같이 나요'] },
              conclude: '올챙이는 뒷다리가 먼저 나고, 앞다리가 난 뒤 꼬리가 줄어들어 개구리가 돼요.' },
            { prompt: '강낭콩이 자라는 차례를 놓아 보세요.', toolOptions: { center: '강낭콩의 한살이', cards: [{ id: '씨', text: '씨', motif: 'seed' }, { id: '싹', text: '싹이 터요', motif: 'sprout' }, { id: '꽃', text: '꽃이 펴요', motif: 'flower' }, { id: '꼬투리', text: '꼬투리가 열려요', motif: 'tree' }] }, target: { order: ['씨', '싹', '꽃', '꼬투리'], cyclic: true }, difficulty: 0.15,
              levels: { challenge: { toolOptions: { center: '강낭콩의 한살이', cards: [{ id: '씨', text: '씨', motif: 'seed' }, { id: '싹', text: '싹이 터요', motif: 'sprout' }, { id: '꽃', text: '꽃이 펴요', motif: 'flower' }, { id: '꼬투리', text: '꼬투리가 열려요', motif: 'tree' }, { id: '번데기', text: '번데기', motif: 'pupa' }], slots: 4 } } } },
          ],
        },
        {
          id: 'a2', title: '활동 2. 자리 이름에 맞는 모습 놓기', minutes: 8, tool: 'lifecycle',
          teacher: '"허물을 벗은 뒤의 모습은 어떨까요?" 자리 이름을 소리 내어 읽게 한 뒤 카드를 놓게 한다. 물이 돌고 도는 길에서는 "하늘의 물은 어떻게 다시 바다로 갈까요?"를 묻는다.',
          task: '판의 자리 이름을 읽고, 그때의 모습이나 일을 나타내는 카드를 놓아요.',
          levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '자리 이름에 맞는 배추흰나비의 모습을 놓아 보세요.', toolOptions: { mode: 'match', center: '배추흰나비', slots: [{ id: 's1', label: '알에서 막 나옴' }, { id: 's2', label: '허물을 4번 벗음' }, { id: 's3', label: '움직이지 않음' }], cards: ['작은 애벌레', '큰 애벌레', '번데기'] }, target: { match: { s1: '작은 애벌레', s2: '큰 애벌레', s3: '번데기' } }, difficulty: 0.2 },
            { prompt: '물이 돌고 도는 길에서 자리마다 일어나는 일을 놓아 보세요.', toolOptions: { mode: 'match', center: '물의 여행', slots: [{ id: '바다', label: '바다' }, { id: '하늘', label: '하늘' }, { id: '산', label: '산과 들' }], cards: ['물이 증발해요', '비가 내려요', '강으로 흘러요'] }, target: { match: { 바다: '물이 증발해요', 하늘: '비가 내려요', 산: '강으로 흘러요' } }, difficulty: 0.25 },
            { prompt: '닭이 자라는 자리마다 알맞은 모습을 놓아 보세요.', toolOptions: { mode: 'match', center: '닭의 한살이', cycle: false, slots: [{ id: 'd1', label: '처음' }, { id: 'd2', label: '알에서 나옴' }, { id: 'd3', label: '다 자람' }], cards: ['알', '병아리', '닭'] }, target: { match: { d1: '알', d2: '병아리', d3: '닭' } }, difficulty: 0.1 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 한살이 견주기', minutes: 8, tool: 'lifecycle',
          teacher: '"번데기를 거치는 곤충과 거치지 않는 곤충이 있어요." 나누기, 문장 채우기, 고르기를 한 뒤 "모든 동물이 번데기 단계를 거칠까요?"를 묻는다. 알을 낳지 않는 동물을 고른 학생에게는 새끼를 낳는 동물을 떠올리게 한다.',
          task: '동물의 한살이를 견주어 나누고, 문장을 채우고, 골라 봐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '번데기를 거치는 곤충과 거치지 않는 곤충으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['번데기를 거쳐요', '번데기가 없어요'], cards: ['나비', '메뚜기', '무당벌레', '잠자리'] }, target: { sort: { '번데기를 거쳐요': ['나비', '무당벌레'], '번데기가 없어요': ['메뚜기', '잠자리'] } }, difficulty: 0.25 },
            { prompt: '문장의 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['배춧잎', '꿀', '허물'], slots: [{ id: 'f1', label: '배추흰나비 애벌레는 ___을 먹고 자라요.' }, { id: 'f2', label: '애벌레는 자라면서 ___을 벗어요.' }] }, target: { fill: { f1: '배춧잎', f2: '허물' } }, difficulty: 0.15 },
            { prompt: '알을 낳는 동물만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알을 낳아요', cards: ['닭', '강아지', '거북', '고양이'] }, target: { pick: ['닭', '거북'] }, difficulty: 0.15 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"한살이가 끝나면 어떻게 될까요? 어른벌레가 알을 낳으면 다시 처음으로 돌아가요." 출구 질문에서 번데기 자리를 틀린 학생은 다음 시간 관찰 기록장을 먼저 함께 본다.',
      exitTicket: [
        { type: 'tool', tool: 'lifecycle', options: { center: '사슴벌레의 한살이', cards: [{ id: '알', text: '알', motif: 'egg' }, { id: '애벌레', text: '애벌레', motif: 'larva' }, { id: '번데기', text: '번데기', motif: 'pupa' }, { id: '어른벌레', text: '어른벌레', motif: 'butterfly' }] }, prompt: '사슴벌레의 한살이를 화살표 차례대로 놓아 보세요.', target: { order: ['알', '애벌레', '번데기', '어른벌레'], cyclic: true }, difficulty: 0.15 },
        { type: 'choice', prompt: '배추흰나비가 번데기 다음에 되는 모습은 무엇인가요?', options: ['알', '애벌레', '어른벌레'], answer: 2, explain: '번데기에서 날개를 단 어른벌레가 나와요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '한살이 회전판',
    items: [
      { type: 'figure', wide: true, prompt: '배추흰나비의 한살이를 화살표 차례대로 생각하고, 빈 자리에 단계 이름을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '배추흰나비의 한살이', printCards: false, cards: ['알', '애벌레', '번데기', '어른벌레'] }, state: { at: { 알: 0 } }, caption: '' }], answer: '알 → 애벌레 → 번데기 → 어른벌레 → (다시 알)' },
      { type: 'choice', prompt: '번데기 단계를 거치는 곤충에 ○ 하세요.', options: ['메뚜기', '무당벌레', '잠자리'], answer: '무당벌레' },
      { type: 'blank', prompt: '배추흰나비 애벌레는 (        )을 먹고 자라요.', answer: '배춧잎' },
      { type: 'short', prompt: '한살이가 "돌고 돈다"는 말은 무슨 뜻인지 쓰세요.' },
    ],
    easy: {
      note: '가장 작고 처음인 모습부터 화살표를 따라가요.',
      items: [
        { type: 'figure', wide: true, prompt: '빈 자리에 단계 이름을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '배추흰나비', printCards: false, cards: ['알', '애벌레', '번데기', '어른벌레'] }, state: { at: { 알: 0, 번데기: 2 } }, caption: '' }], answer: '애벌레, 어른벌레' },
        { type: 'choice', prompt: '알을 낳는 동물에 ○ 하세요.', options: ['닭', '강아지'], answer: '닭' },
        { type: 'short', prompt: '배추흰나비 애벌레가 먹는 것을 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀린 자리에 놓으면 까닭을 말해 주고 되돌아와요.',
    base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 어느 자리에서 시작해도 화살표 차례가 맞으면 정답이에요.',
    challenge: '활동 1 셋째 문항에 다른 생물의 카드가 섞여 나와요. 그 카드는 판에 놓지 않아요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 애벌레와 번데기의 차례를 바꾼다 → 기르기 상자 관찰 기록을 날짜 차례로 다시 본다. 교구는 이웃 두 장 바꿈에 따로 답한다. ② 한살이를 어른벌레에서 끝난다고 생각한다 → 마지막 화살표가 처음으로 돌아가는 것을 짚는다. ③ 모든 곤충이 번데기를 거친다고 생각한다 → 메뚜기·잠자리를 견준다.',
});
