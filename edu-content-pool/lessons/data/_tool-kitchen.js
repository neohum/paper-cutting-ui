/* 검사용 차시 — 생활 설계 보드(kitchen) 교구의 모든 모드(sort·pick·order·match·fill·checklist)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-kitchen',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g5-실과-1학기-2', lesson: 16 },
  grade: 5, subject: '실과', unitTitle: '2. 생활 속 자원과 지속가능한 선택',
  title: '5가지 식품군으로 간식 식단 짜고 조리 순서 점검하기',
  objective: '음식을 5가지 식품군으로 나누어 골고루 담은 식단을 짜고, 간단한 간식을 만드는 순서와 안전·위생 점검 항목을 알맞게 고를 수 있다.',
  standards: ['[6실02-05]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: ['칼은 선생님이 나누어 준 어린이용 칼만 쓰고, 칼날이 몸 바깥쪽을 향하게 잡아요.', '조리 전에는 손을 비누로 30초 이상 씻고, 끝나면 조리대를 닦아요.'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a school lunch tray with five compartments holding rice, fish, vegetables, fruit and a carton of milk, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 200 },
      { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 226, color: 'mint' },
      { motif: 'text', x: 240, y: 138, text: '골고루 먹으려면 무엇을 담을까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"오늘 급식에는 어떤 음식이 나왔나요? 그 음식들은 어느 식품군일까요?" 시연 단추로 음식 카드가 식판 칸에 들어가는 모습을 보여 준다. "고구마는 채소일까요, 곡류일까요?" 처럼 헷갈리는 음식을 하나 묻고, 이름보다 몸에서 하는 일(힘을 내요)로 나누면 된다는 것을 짚는다.',
      student: '오늘 급식에 나온 음식을 떠올려 짝과 말해 봅시다.',
      demo: { tool: 'kitchen', options: { cards: ['밥', '생선', '시금치', '우유', '버터'], shuffle: false }, sequence: [{ sort: { 곡류: ['밥'], 고기: ['생선'], 채소: ['시금치'], 우유: ['우유'], 유지: ['버터'] } }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 식판에 골고루 담기', minutes: 10, tool: 'kitchen',
          teacher: '"이 음식은 주로 무엇으로 만들었나요? 몸에서 어떤 일을 하나요?" 카드를 놓을 때마다 까닭을 말하게 한다. 감자·고구마를 채소 칸에 놓는 학생에게 "힘을 내는 곡류에 들어가요"를 짚고, 두부를 채소로 놓는 학생에게 콩으로 만든다는 것을 알려 준다. 과자·사탕이 많은 식단을 고른 학생에게 유지·당류 칸이 가장 작다는 것을 보여 준다.',
          task: '음식 카드를 5가지 식품군 칸에 나누어 담아요. 카드를 끌거나, 눌러 고른 뒤 칸을 눌러요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '아침 밥상의 음식을 식품군 칸에 나누어 담아 보세요.', toolOptions: { cards: ['밥', '달걀', '시금치', '우유', '버터'] }, target: { sort: { 곡류: ['밥'], 고기: ['달걀'], 채소: ['시금치'], 우유: ['우유'], 유지: ['버터'] } }, difficulty: 0.1 },
            { prompt: '헷갈리기 쉬운 음식을 식품군 칸에 나누어 보세요.', toolOptions: { cards: ['고구마', '두부', '귤', '치즈', '꿀', '감자'] }, target: { sort: { 곡류: ['고구마', '감자'], 고기: ['두부'], 채소: ['귤'], 우유: ['치즈'], 유지: ['꿀'] } }, difficulty: 0.3 },
            { prompt: '간식 재료를 나누어 보세요. 다 맞히면 몸에서 하는 일이 보여요.', reveal: 'after-check', toolOptions: { cards: [{ id: '빵', text: '빵', back: '힘을 내요' }, { id: '햄', text: '햄', back: '몸을 만들어요' }, { id: '오이', text: '오이', back: '몸을 지켜요' }, { id: '요구르트', text: '요구르트', back: '뼈를 튼튼히' }] }, target: { sort: { 곡류: ['빵'], 고기: ['햄'], 채소: ['오이'], 우유: ['요구르트'] } }, difficulty: 0.2 },
            { prompt: '몸을 만드는 단백질이 많은 음식만 골라 보세요.', toolOptions: { mode: 'pick', basket: '단백질이 많은 음식', cards: ['닭고기', '사탕', '두부', '오이'] }, target: { pick: ['닭고기', '두부'] }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 조리 순서와 하루 일과 놓기', minutes: 8, tool: 'kitchen',
          teacher: '"샌드위치를 만들 때 맨 먼저 할 일은 무엇일까요?" 재료부터 자르는 학생에게 손과 재료를 먼저 씻어야 하는 까닭(세균)을 묻는다. 정리하기를 빠뜨리는 학생에게는 조리는 정리까지가 한 과정이라는 것을 말해 준다. 일과표에서는 간식 시간이 식사 바로 앞이면 밥맛이 줄어든다는 것을 함께 이야기한다.',
          task: '조리 순서를 차례대로 놓고, 하루 일과표의 시간 옆에 알맞은 일을 놓아요.',
          levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '과일 샌드위치를 만드는 순서대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '손', text: '손을 비누로 씻어요' }, { id: '재료', text: '과일을 씻어요' }, { id: '썰기', text: '과일을 얇게 썰어요' }, { id: '올리기', text: '빵에 과일을 올려요' }, { id: '정리', text: '조리대를 닦아요' }] }, target: { order: ['손', '재료', '썰기', '올리기', '정리'] }, difficulty: 0.15 },
            { prompt: '하루 일과표의 시간 옆에 알맞은 일을 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm', label: '아침 7시 30분' }, { id: 'a', label: '오후 3시 30분' }, { id: 'e', label: '저녁 6시 30분' }], cards: ['아침밥 먹기', '과일 간식 먹기', '저녁밥 먹기', '잠자리에서 과자 먹기'] }, target: { match: { m: '아침밥 먹기', a: '과일 간식 먹기', e: '저녁밥 먹기' } }, difficulty: 0.2 },
            { prompt: '위생 수칙 문장의 빈칸에 알맞은 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['흐르는 물', '뜨거운 기름', '찬 우유'], slots: [{ id: 'w', label: '채소와 과일은 ___에 씻어요.' }] }, target: { fill: { w: '흐르는 물' } }, difficulty: 0.1 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 조리 전·후 점검하기', minutes: 9, tool: 'kitchen',
          teacher: '"조리 전에 꼭 해야 할 일에만 표시해 볼까요?" 표시한 항목을 하나씩 소리 내어 읽게 한다. 텔레비전 켜기처럼 조리와 상관없는 항목에 표시한 학생에게 "이 일을 하지 않으면 무엇이 위험해지나요?"라고 묻는다. 마지막 스스로 점검은 실제로 한 일만 표시하도록 하고, 표시하지 못한 항목은 다음 시간 목표로 삼는다.',
          task: '목록을 읽고 알맞은 항목을 눌러 표시해요. 표시를 지우려면 한 번 더 눌러요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '조리하기 전에 해야 할 일에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '조리 전에 할 일', items: [{ id: 'hand', text: '손을 비누로 씻어요' }, { id: 'apron', text: '앞치마를 입어요' }, { id: 'tv', text: '텔레비전을 켜요' }, { id: 'hair', text: '긴 머리를 묶어요' }] }, target: { checklist: ['hand', 'apron', 'hair'] }, difficulty: 0.1 },
            { prompt: '조리가 끝난 뒤 정리할 일에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '조리 뒤 정리', items: [{ id: 'dish', text: '그릇을 씻어 제자리에 둬요' }, { id: 'trash', text: '음식물 쓰레기를 따로 버려요' }, { id: 'knife', text: '칼을 싱크대에 그냥 둬요' }, { id: 'wipe', text: '조리대를 닦아요' }, { id: 'snack', text: '남은 재료를 바로 먹어요' }] }, target: { checklist: ['dish', 'trash', 'wipe'] }, difficulty: 0.2 },
            { prompt: '오늘 실습에서 내가 실제로 한 일을 스스로 점검해 보세요.', toolOptions: { mode: 'checklist', title: '나의 실습 점검', items: ['손을 씻었어요', '칼을 바르게 잡았어요', '모둠 친구와 나누어 일했어요', '뒷정리를 했어요'] }, target: { selfCheck: true }, difficulty: 0.05 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 저녁 식단에 빠지기 쉬운 식품군은 무엇일까요?" 출구 질문에서 감자를 채소로 놓은 학생은 다음 시간에 곡류 카드를 다시 나누어 보게 한다.',
      exitTicket: [
        { type: 'tool', tool: 'kitchen', options: { cards: ['국수', '고등어', '상추', '치즈', '마요네즈'] }, prompt: '점심 식단의 음식을 식품군 칸에 나누어 담아 보세요.', target: { sort: { 곡류: ['국수'], 고기: ['고등어'], 채소: ['상추'], 우유: ['치즈'], 유지: ['마요네즈'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '조리를 시작하기 전에 가장 먼저 할 일은 무엇인가요?', options: ['재료를 썬다', '손을 씻는다', '그릇에 담는다'], answer: 1, explain: '손을 먼저 씻어야 세균이 음식에 옮지 않아요.' },
        { type: 'mood', prompt: '오늘 실과 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '골고루 식단과 조리 점검',
    items: [
      { type: 'figure', wide: true, prompt: '오늘 저녁에 먹고 싶은 음식을 식판의 식품군 칸에 하나씩 쓰세요.', tool: 'kitchen', figures: [{ options: { cards: ['밥'], printCards: false }, caption: '' }], answer: '칸마다 알맞은 음식' },
      { type: 'figure', wide: true, prompt: '조리 전에 해야 할 일에 ✓ 하세요.', tool: 'kitchen', figures: [{ options: { mode: 'checklist', items: ['손을 비누로 씻어요', '텔레비전을 켜요', '앞치마를 입어요'] }, caption: '' }], answer: '손 씻기 · 앞치마' },
      { type: 'table', prompt: '음식이 어느 식품군인지 쓰세요.', columns: ['음식', '식품군'], cells: [['감자', ''], ['두부', ''], ['요구르트', '']] },
      { type: 'short', prompt: '샌드위치를 만들 때 맨 먼저 할 일과 그 까닭을 쓰세요.' },
    ],
    easy: {
      note: '음식이 몸에서 하는 일(힘을 내요, 몸을 만들어요)을 먼저 떠올려요.',
      items: [
        { type: 'figure', wide: true, prompt: '조리 전에 해야 할 일에 ✓ 하세요.', tool: 'kitchen', figures: [{ options: { mode: 'checklist', items: ['손을 비누로 씻어요', '텔레비전을 켜요'] }, caption: '' }], answer: '손 씻기' },
        { type: 'choice', prompt: '곡류에 ○ 하세요.', options: ['밥', '우유'], answer: '밥' },
        { type: 'short', prompt: '내가 좋아하는 채소를 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '음식 카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 틀린 칸에 놓으면 까닭을 말해 주고 되돌아와요.',
    base: '모든 칸을 채운 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '헷갈리는 음식(고구마·두부·귤)을 나누고, 그 까닭을 몸에서 하는 일로 말해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 감자·고구마를 채소로 놓는다 → 힘을 내는 곡류라는 것을 짚는다. ② 두부를 채소로 놓는다 → 콩으로 만든 음식이라 고기·생선·달걀·콩류다. ③ 조리 순서에서 손 씻기·정리를 빠뜨린다 → 교구가 순서가 어긋난 카드를 흔들어 보여 준다.',
});
