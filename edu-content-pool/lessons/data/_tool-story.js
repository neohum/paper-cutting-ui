/* 검사용 차시 — 이야기 판(story) 교구의 모든 모드(order·fill·sort·match·pick)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-story',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g1-국어-1학기-6', lesson: 12 },
  grade: 1, subject: '국어', unitTitle: '6. 또박또박 읽어요',
  title: '이야기 차례를 정리하고 인물의 말 넣기',
  objective: '이야기를 듣고 일이 일어난 차례대로 장면을 늘어놓고, 장면에 어울리는 인물의 말을 고를 수 있다.',
  standards: ['[2국05-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a rabbit and a turtle racing along a hill path past a big tree, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 196 },
      { motif: 'tree', x: 250, y: 206 }, { motif: 'flower', x: 90, y: 222 }, { motif: 'flower', x: 380, y: 226, color: 'lavender' },
      { motif: 'text', x: 240, y: 140, text: '무슨 일이 먼저 있었을까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"토끼와 거북이 달리기를 했어요. 누가 먼저 도착했을까요?" 이야기를 한 번 들려준 뒤 시연 단추로 장면 카드가 차례대로 놓이는 모습을 보여 준다. "낮잠을 잔 것은 출발하기 전일까요, 뒤일까요?"처럼 앞뒤를 묻는다. 그림만 보고 순서를 짐작하는 학생에게는 "이야기에서 무엇 때문에 그 일이 생겼지?"를 되묻는다.',
      student: '선생님이 들려주는 이야기를 듣고, 어떤 일이 있었는지 떠올려 봅시다.',
      demo: { tool: 'story', options: { cards: [{ id: '출발', text: '함께 출발해요', motif: 'flower' }, { id: '낮잠', text: '토끼가 낮잠을 자요', motif: 'tree' }, { id: '도착', text: '거북이 먼저 와요', motif: 'star' }], slots: ['처음', '가운데', '끝'], shuffle: false }, sequence: [{ order: ['출발', '낮잠', '도착'] }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 장면을 차례대로 놓기', minutes: 10, tool: 'story',
          teacher: '"맨 처음에 무슨 일이 있었나요?"부터 묻고, 장면 하나를 놓을 때마다 "그래서 다음에는?"으로 잇게 한다. 그림이 예쁜 순서나 카드 칸에 놓인 순서대로 놓는 학생에게 이야기를 다시 들려준다. 이웃한 두 장면을 바꾼 학생에게는 두 장면 사이의 까닭(낮잠을 자서 늦었다)을 말하게 한다.',
          task: '이야기를 떠올리며 장면 카드를 일이 일어난 차례대로 칸에 놓아요. 카드를 끌거나, 눌러 고른 뒤 칸을 눌러요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '토끼와 거북 이야기를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '출발', text: '함께 출발해요', motif: 'flower' }, { id: '낮잠', text: '토끼가 낮잠을 자요', motif: 'tree' }, { id: '도착', text: '거북이 먼저 와요', motif: 'star' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['출발', '낮잠', '도착'] }, difficulty: 0.1 },
            { prompt: '해와 바람 이야기를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '내기', text: '해와 바람이 내기를 해요', motif: 'cloud' }, { id: '바람', text: '바람이 세게 불어요', motif: 'leaf' }, { id: '외투', text: '나그네가 외투를 여며요', motif: 'house' }, { id: '햇볕', text: '해가 따뜻하게 비춰요', motif: 'sun' }, { id: '벗음', text: '나그네가 외투를 벗어요', motif: 'flower' }] },
              target: { order: ['내기', '바람', '외투', '햇볕', '벗음'] }, difficulty: 0.25,
              predict: { q: '바람이 세게 불면 나그네는 어떻게 할까요?', options: ['외투를 벗어요', '외투를 꼭 여며요', '잘 모르겠어요'] },
              conclude: '바람이 세게 불수록 나그네는 외투를 더 꼭 여몄어요. 그래서 해가 이겼어요.' },
            { prompt: '아기 새가 자라는 이야기를 차례대로 놓아 보세요. 다 놓으면 장면마다 걸린 날이 보여요.', reveal: 'after-check', toolOptions: { cards: [{ id: '둥지', text: '엄마 새가 알을 품어요', motif: 'bird', back: '첫날' }, { id: '깸', text: '아기 새가 알에서 나와요', motif: 'star', back: '보름 뒤' }, { id: '먹이', text: '엄마가 먹이를 줘요', motif: 'leaf', back: '날마다' }, { id: '날기', text: '아기 새가 날아요', motif: 'cloud', back: '한 달 뒤' }] },
              target: { order: ['둥지', '깸', '먹이', '날기'] }, difficulty: 0.2,
              levels: { challenge: { toolOptions: { cards: [{ id: '둥지', text: '엄마 새가 알을 품어요', motif: 'bird', back: '첫날' }, { id: '깸', text: '아기 새가 알에서 나와요', motif: 'star', back: '보름 뒤' }, { id: '먹이', text: '엄마가 먹이를 줘요', motif: 'leaf', back: '날마다' }, { id: '날기', text: '아기 새가 날아요', motif: 'cloud', back: '한 달 뒤' }, { id: '눈', text: '눈사람을 만들어요', motif: 'snow' }], slots: 4 } } } },
          ],
        },
        {
          id: 'a2', title: '활동 2. 말풍선에 인물의 말 넣기', minutes: 9, tool: 'story',
          teacher: '"이 장면에서 곰은 어떤 마음일까요? 그 마음이면 무슨 말을 할까요?" 말풍선을 넣은 뒤 반드시 소리 내어 읽게 한다. 고마운 장면에 "미안해"를 넣는 학생에게 장면에서 누가 누구를 도왔는지 다시 묻는다.',
          task: '장면을 보고 인물이 할 말을 골라 말풍선 빈칸에 넣어요. 넣은 뒤 소리 내어 읽어 봐요.',
          levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '길을 알려 준 토끼에게 곰이 할 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['미안해', '고마워', '잘 자'], slots: [{ id: 'b1', who: '곰', motif: 'tree', label: '길을 알려 줘서 ___.' }] }, target: { fill: { b1: '고마워' } }, difficulty: 0.08 },
            { prompt: '두 장면의 말풍선에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['미안해', '고마워', '축하해'], slots: [{ id: 'b1', who: '다람쥐', motif: 'leaf', label: '네 도토리를 밟아서 ___.' }, { id: 'b2', who: '여우', motif: 'star', label: '생일 ___!' }] }, target: { fill: { b1: '미안해', b2: '축하해' } }, difficulty: 0.15 },
            { prompt: '아침과 밤에 하는 인사를 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['안녕히 주무세요', '안녕히 다녀오세요', '맛있게 드세요'], slots: [{ id: 'm', who: '민지', motif: 'sun', label: '학교 가시는 할머니께 "___"' }, { id: 'n', who: '준호', motif: 'moon', label: '잠자리에 드시는 아빠께 "___"' }] }, target: { fill: { m: '안녕히 다녀오세요', n: '안녕히 주무세요' } }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 이야기 속 말과 인물 살펴보기', minutes: 7, tool: 'story',
          teacher: '"이 말을 들으면 기분이 어떨까요?" 고운 말과 거친 말을 나눈 뒤, 인물과 한 일을 짝 짓고, 이야기에 나온 것만 고르게 한다. 이야기에 없던 것을 고른 학생에게는 이야기를 한 번 더 떠올리게 한다.',
          task: '이야기 속 말과 인물을 살펴 나누고, 짝 짓고, 골라 봐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '친구에게 한 말을 고운 말과 거친 말로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['고운 말', '거친 말'], cards: ['같이 하자', '저리 가', '괜찮아?', '느림보야'] }, target: { sort: { '고운 말': ['같이 하자', '괜찮아?'], '거친 말': ['저리 가', '느림보야'] } }, difficulty: 0.1 },
            { prompt: '인물과 그 인물이 한 일을 짝 지어 보세요.', toolOptions: { mode: 'match', slots: [{ id: '토끼', label: '토끼', motif: 'flower' }, { id: '거북', label: '거북', motif: 'leaf' }], cards: ['쉬지 않고 걸었어요', '나무 아래서 잤어요'] }, target: { match: { 토끼: '나무 아래서 잤어요', 거북: '쉬지 않고 걸었어요' } }, difficulty: 0.15 },
            { prompt: '토끼와 거북 이야기에 나온 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이야기에 나온 것', cards: [{ id: '나무', text: '큰 나무', motif: 'tree' }, { id: '우산', text: '우산', motif: 'cloud' }, { id: '언덕', text: '언덕 위 깃발', motif: 'mountain' }, { id: '눈', text: '눈사람', motif: 'snow' }] }, target: { pick: ['나무', '언덕'] }, difficulty: 0.2 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 이야기의 차례를 친구에게 처음-가운데-끝으로 말해 볼까요?" 출구 질문에서 순서를 틀린 학생은 다음 시간에 장면 카드를 손으로 다시 늘어놓게 한다.',
      exitTicket: [
        { type: 'tool', tool: 'story', options: { cards: [{ id: '씨', text: '씨를 심어요', motif: 'leaf' }, { id: '싹', text: '싹이 나요', motif: 'flower' }, { id: '열매', text: '열매가 열려요', motif: 'tree' }], slots: ['처음', '가운데', '끝'] }, prompt: '씨앗 이야기를 차례대로 놓아 보세요.', target: { order: ['씨', '싹', '열매'] }, difficulty: 0.1 },
        { type: 'choice', prompt: '친구의 연필을 떨어뜨렸을 때 할 말은 무엇인가요?', options: ['고마워', '미안해', '축하해'], answer: 1, explain: '내가 잘못했을 때는 "미안해"라고 말해요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '이야기 차례',
    items: [
      { type: 'figure', wide: true, prompt: '장면을 일이 일어난 차례대로 생각하고, 칸에 장면 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '출발', text: '① 함께 출발해요', motif: 'flower' }, { id: '낮잠', text: '② 토끼가 낮잠을 자요', motif: 'tree' }, { id: '도착', text: '③ 거북이 먼저 와요', motif: 'star' }], slots: ['처음', '가운데', '끝'] }, caption: '처음 (   ) → 가운데 (   ) → 끝 (   )' }], answer: '① → ② → ③' },
      { type: 'figure', wide: true, prompt: '말풍선에 알맞은 말을 쓰세요.', tool: 'story', figures: [{ options: { mode: 'fill', printCards: false, cards: ['고마워'], slots: [{ id: 'b1', who: '곰', motif: 'tree', label: '길을 알려 줘서 ___.' }] }, caption: '' }], answer: '고마워' },
      { type: 'choice', prompt: '고운 말에 ○ 하세요.', options: ['"저리 가"', '"같이 하자"', '"느림보야"'], answer: '"같이 하자"' },
      { type: 'short', prompt: '토끼에게 하고 싶은 말을 한 문장으로 쓰세요.' },
    ],
    easy: {
      note: '맨 처음 장면을 먼저 찾고, "그래서 다음에는?" 하고 이어 가요.',
      items: [
        { type: 'figure', wide: true, prompt: '장면을 차례대로 생각하고, 칸에 장면 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '출발', text: '① 함께 출발해요', motif: 'flower' }, { id: '도착', text: '② 거북이 먼저 와요', motif: 'star' }], slots: ['처음', '끝'] }, caption: '처음 (   ) → 끝 (   )' }], answer: '① → ②' },
        { type: 'choice', prompt: '고운 말에 ○ 하세요.', options: ['"저리 가"', '"같이 하자"'], answer: '"같이 하자"' },
        { type: 'short', prompt: '거북에게 하고 싶은 말을 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 맞지 않는 칸에 놓으면 까닭을 말해 주고 되돌아와요.',
    base: '모든 칸을 채운 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '활동 1의 셋째 문항에 이야기와 상관없는 카드가 한 장 섞여 나와요. 그 카드는 카드 칸에 남겨 둬요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 카드 칸에 놓인 순서대로 칸에 옮긴다 → "이야기에서 맨 처음은?"부터 다시 묻는다. ② 이웃한 두 장면을 바꾼다(낮잠과 출발) → 두 장면 사이의 까닭을 말하게 한다. 교구는 이 실수에 "이웃한 두 카드의 순서가 서로 바뀌었어요"라고 답한다. ③ 말풍선에 장면과 상관없이 아는 인사를 넣는다 → 넣은 뒤 소리 내어 읽게 한다.',
});
