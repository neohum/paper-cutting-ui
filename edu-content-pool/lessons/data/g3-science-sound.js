/* 3학년 2학기 3. 소리의 성질 — 소리가 나는 물체의 떨림, 소리의 세기와 높낮이 */
PaperLessons.register({
  id: 'g3-science-sound',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-과학-2학기-3', lesson: 2 },
  grade: 3, subject: '과학', unitTitle: '3. 소리의 성질',
  title: '소리가 나는 물체의 떨림과 소리의 세기·높낮이',
  objective: '소리가 나는 물체는 떨린다는 것을 관찰하고, 소리의 세기와 높낮이를 비교할 수 있다.',
  standards: ['[4과07-01]', '[4과07-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: [
    '고무줄은 눈과 얼굴에서 멀리 두고 당겨요. 끊어지거나 튕겨 나가면 다칠 수 있어요.',
    '고무줄을 너무 세게, 오래 당기지 않아요.',
    '작은북은 북채로만 치고, 친구 귀 가까이에서 세게 치지 않아요.',
    '목에 손을 댈 때는 살짝만 대요. 이어폰을 쓸 때는 소리를 작게 맞춰요.',
  ],
  illustration: {
    prompt: "Layered paper-cut illustration of a child plucking a rubber-band guitar made from a tissue box beside a little drum with paper confetti jumping into the air, the rubber bands stretched across the box opening and the small confetti pieces bouncing up just above the drum top as a stick taps it, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: "img/g3-science-sound.webp", size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.85 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'cloud', x: 290, y: 38, s: 0.7 },
      { motif: 'hills', y: 204, colors: ['mint', 'lavender', 'buttercup'] },
      { motif: 'tree', x: 60, y: 214, s: 0.9 }, { motif: 'house', x: 400, y: 222, color: 'sky', s: 0.8 },
      { motif: 'star', x: 200, y: 112, color: 'rose' }, { motif: 'star', x: 236, y: 92, color: 'buttercup' }, { motif: 'star', x: 272, y: 116, color: 'sky' },
      { motif: 'leaf', x: 180, y: 140, color: 'peach', r: -30 }, { motif: 'leaf', x: 296, y: 144, color: 'mint', r: 40 },
      { motif: 'bird', x: 150, y: 96 }, { motif: 'flower', x: 330, y: 226 }, { motif: 'flower', x: 140, y: 230, color: 'lavender' },
      { motif: 'text', x: 240, y: 178, text: '소리가 날 때 무엇이 떨릴까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"목에 손을 살짝 대고 \'아—\' 소리를 내 보세요. 소리를 멈추면 손끝 느낌은 어떻게 달라지나요?" 이어서 시연 단추로 작은북을 약하게, 세게 쳐서 종이 조각이 튀는 높이를 비교해 보여 준다.',
      student: '목에 손을 살짝 대고 "아—" 소리를 내 봅시다. 소리를 낼 때와 멈출 때 손에 무엇이 느껴지나요?',
      demo: { tool: 'soundwave', options: { showReadout: true }, sequence: [{ source: 'drum', loud: false }, { source: 'drum', loud: true }, { source: 'string', loud: true }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 소리가 나는 물체 관찰하기', minutes: 8, tool: 'soundwave',
          task: '고무줄을 튕기고 작은북을 쳐 봅시다. 소리가 날 때 고무줄과 작은북 위 종이 조각은 어떻게 되나요?',
          teacher: '"소리가 날 때 고무줄은 어떻게 보이나요? 떨리는 고무줄을 잡으면 소리는 어떻게 되나요?" 떨림이 보이지 않는 물체도 떨린다는 점을 종이 조각으로 확인하게 한다.',
          levels: { easy: { showReadout: true, showHints: true, pictureWords: true }, base: { showReadout: true }, challenge: { showReadout: false } },
          items: [
            // 첫 문항은 개념이 아니라 조작 방법에서 막히므로 단계와 상관없이 조작 안내를 보인다
            { prompt: '고무줄을 위나 아래로 당겼다 놓아 소리를 내고, 고무줄이 떨리는지 살펴보세요.', toolOptions: { showHints: true }, target: { vibrating: true, source: 'string' }, difficulty: 0.08 },
            { prompt: '북채를 위로 올렸다 놓아 작은북을 치고, 종이 조각이 어떻게 되는지 살펴보세요.', target: { vibrating: true, source: 'drum' }, difficulty: 0.05 },
            { prompt: '고무줄을 튕긴 뒤, 떨리고 있는 고무줄을 눌러 잡아 보세요. 소리는 어떻게 되나요?', target: { stopped: true }, difficulty: 0.14,
              predict: { q: '떨리는 고무줄을 손으로 잡으면 소리는 어떻게 될까요?', options: ['더 커져요', '그대로 나요', '멈춰요'], answer: 2 },
              conclude: '떨림이 멈추면 소리도 멈춰요. 소리가 나는 물체는 떨리고 있어요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 큰 소리와 작은 소리 비교하기', minutes: 9, tool: 'soundwave',
          task: '세게 또는 약하게 소리를 내 보고, 떨림의 크기와 종이 조각이 튀는 높이를 비교해 봅시다.',
          teacher: '"작은북을 세게 칠 때와 약하게 칠 때 종이 조각이 튀어 오르는 높이는 어떻게 다른가요?" 큰 소리는 떨림이 크다는 것을 학생 말로 정리하게 한다.',
          // 기본: 세기 글자('큰 소리')는 감추고 세기 막대만 보인다 — 막대 4칸 이상이 큰 소리. 쉬움만 글자까지 보인다.
          levels: { easy: { showReadout: true, showHints: true, pictureWords: true }, base: { showReadout: true, showLoud: false }, challenge: { showReadout: false } },
          items: [
            { prompt: '북채를 조금만 올렸다 놓아 작은북으로 작은 소리를 내 보세요.', target: { source: 'drum', loud: false }, difficulty: 0.12 },
            { prompt: '북채를 높이 올렸다 놓아 작은북으로 큰 소리를 내 보세요.', target: { source: 'drum', loud: true }, difficulty: 0.14,
              predict: { q: '작은북을 세게 치면 종이 조각은 어떻게 될까요?', options: ['더 높이 튀어요', '덜 튀어요', '똑같이 튀어요'], answer: 0 },
              conclude: '세게 치면 북이 크게 떨려서 종이 조각이 높이 튀고, 큰 소리가 나요.' },
            { prompt: '고무줄로 큰 소리를 내 보세요. 떨림의 크기는 어떤가요?', target: { source: 'string', loud: true }, difficulty: 0.16, reveal: 'after-check',
              conclude: '큰 소리는 떨림이 커요. 작은 소리는 떨림이 작아요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 높은 소리와 낮은 소리 만들기', minutes: 9, tool: 'soundwave', pair: true,
          task: '한 번에 한 가지만 바꾸어 봅시다. 받침을 옮겨 떨리는 길이를 바꾸거나, 손잡이로 팽팽함을 바꾸어 소리의 높낮이를 비교해 봅시다.',
          teacher: '"고무줄을 세게 튕기면 소리가 높아질까요?" 1·2번은 한 가지만 바꾸는 실험(변인 통제)이다 — 받침과 손잡이를 함께 바꾸면 무엇 때문인지 알 수 없다는 피드백이 나온다. 3번(높고 작은 소리)으로 세기와 높낮이가 다르다는 것을 확인한다. 짝과 한 사람은 조작하고 한 사람은 소리를 듣고 말하게 한다. 끝나면 3분 동안 실제 고무줄 기타(휴지 상자·고무줄·연필 받침)로 같은 실험을 해 본다.',
          // 채점은 '처음(이 문항을 연 때) 고무줄'과 비교한다. 기본은 높낮이 글자를 감추고(귀와 떨림 빠르기로 판단) 세기 막대만 둔다.
          // 도전은 처음 고무줄이 이미 짧고 팽팽한 상태에서 시작해, 두 변인을 함께 따져야 한다.
          levels: {
            easy: { showReadout: true, showHints: true, pictureWords: true },
            base: { showReadout: true, showPitch: false },
            challenge: { showReadout: false, start: { length: 2, tension: 4 } },
          },
          items: [
            { prompt: '손잡이는 그대로 두고 받침만 옮겨서, 처음보다 높은 소리가 나게 튕겨 보세요.', target: { pitch: 'higher', only: 'length' }, difficulty: 0.2,
              predict: { q: '떨리는 부분을 짧게 하면 소리는 어떻게 될까요?', options: ['높아져요', '낮아져요', '그대로예요'], answer: 0 },
              conclude: '떨리는 부분이 짧을수록 빠르게 떨려서 높은 소리가 나요.' },
            { prompt: '받침은 그대로 두고 손잡이만 옮겨서, 처음보다 낮은 소리가 나게 튕겨 보세요.', target: { pitch: 'lower', only: 'tension' }, difficulty: 0.22,
              predict: { q: '고무줄을 느슨하게 하면 소리는 어떻게 될까요?', options: ['높아져요', '낮아져요', '작아지기만 해요'], answer: 1 },
              conclude: '고무줄이 느슨할수록 천천히 떨려서 낮은 소리가 나요.' },
            { prompt: '처음보다 높으면서 작은 소리를 내 보세요.', target: { pitch: 'higher', loud: false }, difficulty: 0.27,
              predict: { q: '고무줄을 세게 튕기면 소리가 높아질까요?', options: ['네, 높아져요', '아니요, 커지기만 해요'], answer: 1 },
              conclude: '높낮이는 길이와 팽팽함으로, 세기는 튕기는 힘으로 정해져요. 큰 소리와 높은 소리는 달라요.' },
            { prompt: '이번에는 처음보다 높으면서 큰 소리를 내 보세요.', target: { pitch: 'higher', loud: true }, difficulty: 0.22, extra: true },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"큰 소리와 높은 소리는 같은 말일까요?" 출구 질문 결과를 보고, 세기와 높낮이를 섞어 답한 학생이 많으면 고무줄로 "높고 작은 소리", "낮고 큰 소리"를 다시 들려준다.',
      exitTicket: [
        // 수업에서 다루지 않은 물체(스피커)로 옮겨 묻는다 — 작은북 문항을 그대로 다시 묻지 않는다
        { type: 'choice', prompt: '음악이 나오는 스피커 위에 좁쌀을 올려놓았어요. 좁쌀은 어떻게 될까요?', options: ['떨리며 튀어 올라요', '가만히 있어요', '스피커 안으로 들어가요'], answer: 0, difficulty: 0.12,
          explain: '소리가 나는 스피커는 떨리고 있어서 그 위의 좁쌀도 떨리며 튀어요.' },
        { type: 'choice', prompt: '고무줄의 떨리는 부분을 짧게 하면 소리는 어떻게 되나요?', options: ['더 큰 소리가 나요', '더 높은 소리가 나요', '소리가 나지 않아요'], answer: 1, difficulty: 0.22,
          explain: '떨리는 부분이 짧으면 빠르게 떨려 높은 소리가 나요. 소리의 크기는 튕기는 세기로 달라져요.' },
        { type: 'tool', tool: 'soundwave', options: { showReadout: false, parts: 'guitar' }, prompt: '고무줄로 처음보다 낮으면서 큰 소리를 내 보세요.', target: { pitch: 'lower', loud: true }, difficulty: 0.26 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '소리의 떨림, 세기와 높낮이',
    items: [
      { type: 'figure', prompt: '작은북을 두 번 친 모습입니다. 더 큰 소리가 난 것의 기호에 ○표 하세요.', tool: 'soundwave', options: { parts: 'drum' }, figures: [
        { state: { last: { source: 'drum', strength: 20 } }, caption: '가' }, { state: { last: { source: 'drum', strength: 95 } }, caption: '나' }], answer: '나' },
      { type: 'figure', prompt: '받침의 위치만 다른 고무줄 기타입니다. 굵은 실선이 떨리는 부분이에요. 튕겼을 때 더 높은 소리가 나는 것의 기호에 ○표 하세요.', tool: 'soundwave', options: { parts: 'guitar' }, figures: [
        { state: { length: 5 }, caption: '가' }, { state: { length: 1 }, caption: '나' }], answer: '나' },
      { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '소리가 나는 물체는 ___ 있습니다. 큰 소리가 날 때는 떨림이 ___고, 작은 소리가 날 때는 떨림이 ___습니다.', answer: '떨리고, 크, 작' },
      { type: 'check', prompt: '소리의 높낮이가 달라지는 것을 모두 골라 □에 ✓표 하세요.', options: ['고무줄을 더 팽팽하게 한다', '고무줄을 더 세게 튕긴다', '받침을 옮겨 떨리는 부분을 짧게 한다', '작은북을 더 약하게 친다'], answer: '고무줄을 더 팽팽하게 한다, 받침을 옮겨 떨리는 부분을 짧게 한다' },
      { type: 'table', prompt: '한 가지만 바꾼 실험을 표에 정리해 보세요. 먼저 예상을 쓰고, 해 본 뒤 결과를 써요.', columns: ['바꾼 것', '예상 (높아짐/낮아짐/커짐/작아짐)', '관찰 결과', '알게 된 점'], rows: 3, answer: '학생마다 다름. 한 행에 한 가지만 바꾸었는지, 세기는 튕기거나 치는 힘으로, 높낮이는 떨리는 부분의 길이와 팽팽함으로 달라졌다고 썼는지 확인' },
      { type: 'short', prompt: '"큰 소리"와 "높은 소리"는 어떻게 다른지 내 말로 써 보세요.', answer: '큰 소리는 떨림이 커서 세기가 센 소리이고, 높은 소리는 빠르게 떨려서 높낮이가 높은 소리이다.' },
    ],
    // 쉬운 판: 정답을 알려 주는 도움말 대신 낱말 뜻과 낱말 상자만 준다
    easy: {
      note: '세기 = 소리가 크다·작다 (북을 세게 치면 종이 조각이 높이 튀어요). 높낮이 = 소리가 높다(삐—)·낮다(부—). 굵은 실선이 떨리는 부분이에요.',
      items: [
        { type: 'figure', prompt: '작은북을 두 번 친 모습입니다. 종이 조각이 더 높이 튄 것이 더 큰 소리예요. 큰 소리가 난 것에 ○표 하세요.', tool: 'soundwave', options: { parts: 'drum' }, figures: [
          { state: { last: { source: 'drum', strength: 20 } }, caption: '가' }, { state: { last: { source: 'drum', strength: 95 } }, caption: '나' }], answer: '나' },
        { type: 'figure', prompt: '받침의 위치만 다른 고무줄 기타입니다. 굵은 실선(떨리는 부분)의 길이를 견주어 보고, 더 높은 소리가 나는 것에 ○표 하세요.', tool: 'soundwave', options: { parts: 'guitar' }, figures: [
          { state: { length: 5 }, caption: '가' }, { state: { length: 1 }, caption: '나' }], answer: '나' },
        { type: 'blank', prompt: '[보기]에서 알맞은 말을 골라 써넣으세요. [보기] 떨리고, 크, 작', text: '소리가 나는 물체는 ___ 있습니다. 큰 소리가 날 때는 떨림이 ___고, 작은 소리가 날 때는 떨림이 ___습니다.', answer: '떨리고, 크, 작' },
        { type: 'check', prompt: '소리의 높낮이(삐—/부—)가 달라지는 것을 모두 골라 □에 ✓표 하세요.', options: ['고무줄을 더 팽팽하게 한다', '고무줄을 더 세게 튕긴다', '받침을 옮겨 떨리는 부분을 짧게 한다', '작은북을 더 약하게 친다'], answer: '고무줄을 더 팽팽하게 한다, 받침을 옮겨 떨리는 부분을 짧게 한다' },
        { type: 'table', prompt: '한 가지만 바꾼 실험을 표에 정리해 보세요. (높아짐/낮아짐/커짐/작아짐 중에서 골라 써요)', columns: ['바꾼 것', '예상', '관찰 결과', '알게 된 점'], rows: 3 },
        { type: 'short', prompt: '"큰 소리"와 "높은 소리"는 어떻게 다른가요? "큰 소리는 떨림이 …, 높은 소리는 …"으로 이어 써 보세요.', answer: '큰 소리는 떨림이 크고, 높은 소리는 빠르게 떨린다.' },
      ],
    },
  },
  differentiation: {
    easy: '높낮이와 세기 글자, 세기 막대가 보이고 "삐—/부—" 물결 그림과 곧은 줄·처진 줄 그림, "당겼다 놓아요" 같은 조작 안내가 함께 나와요. 기본은 세기 막대만 보이고 높낮이는 귀와 떨림의 빠르기로 판단해요.',
    challenge: '글자와 세기 막대가 숨겨져 있어서, 귀로 듣고 떨림의 크기와 빠르기를 눈으로 보며 판단해요. 활동 3은 이미 짧고 팽팽한 고무줄에서 시작해요.',
  },
  teacherNotes: '이 수업은 교과서 1~3차시(소리가 나는 물체·세기·높낮이)를 한 시간에 묶은 통합 차시다. 시간이 모자라면 활동 3을 다음 시간으로 넘겨도 된다. 가장 흔한 오개념은 "큰 소리 = 높은 소리"로 세기와 높낮이를 섞어 쓰는 것이다. 세게 튕기면 떨림이 커져 소리가 커질 뿐 높아지지 않으며, 높낮이는 떨리는 부분의 길이와 팽팽함(떨림의 빠르기)에 따라 달라진다는 것을 활동 3의 "높고 작은 소리" 문항으로 확인한다. 또 소리가 나도 떨림이 너무 작거나 빨라 눈에 보이지 않으면 "떨리지 않는다"고 생각하기 쉬우므로, 작은북 위 종이 조각이나 목에 댄 손처럼 떨림을 다른 것으로 확인하게 한다. 떨림을 멈추면 소리도 멈춘다는 것(활동 1의 3번)도 함께 짚는다. 디지털 교구는 실제 실험을 대신하지 않으므로 가능하면 고무줄 기타와 작은북으로 같은 실험을 해 본다. 크롬북 소리가 꺼져 있어도 떨림 모양과 종이 조각으로 과제를 할 수 있다.',
});
