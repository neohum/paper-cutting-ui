/* 검사용 차시: 색종이 콜라주(collage) 교구의 모든 판정(대칭·반복·색 대비·개수·겹치기·따라 만들기·자유 작품 점검)을 한 차시에서 쓴다.
 * 4학년 1학기 미술 2. 표현 */
PaperLessons.register({
  id: '_tool-collage',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-미술-1학기-2', lesson: 5 },
  grade: 4, subject: '미술', unitTitle: '2. 표현',
  title: '색종이 조각으로 대칭·반복·대비 무늬 꾸미기',
  objective: '색종이 조각을 고르고 옮기고 돌려 대칭·반복·색 대비가 드러나는 무늬를 만들고 표현 의도를 말할 수 있다.',
  standards: ['[4미02-04]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a colorful paper butterfly and a row of repeating paper flowers on a craft table, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 100, y: 50 }, { motif: 'sun', x: 410, y: 60, s: 0.8 }, { motif: 'hills', y: 204 },
      { motif: 'flower', x: 90, y: 226, color: 'rose' }, { motif: 'flower', x: 150, y: 226, color: 'sky' }, { motif: 'flower', x: 210, y: 226, color: 'rose' },
      { motif: 'flower', x: 270, y: 226, color: 'sky' }, { motif: 'leaf', x: 360, y: 214, r: 30 },
      { motif: 'text', x: 240, y: 140, text: '접고, 되풀이하고, 맞대어 봐요', size: 22 },
    ] },
  },
  safety: ['자리에서 일어나 친구 화면을 만질 때는 먼저 물어봐요.'],
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"나비 날개는 왼쪽과 오른쪽이 어떻게 생겼나요?" 시연 단추로 하트 조각이 접는 선 양쪽에 거울처럼 놓이는 모습을 보여 준다. 같은 거리라는 것과 방향이 거울처럼 뒤집힌다는 것을 짚는다. 이어 교실 바닥 무늬를 가리키며 "같은 묶음이 되풀이되는 곳을 찾아보자"고 반복을 연다.',
      student: '나비와 꽃 무늬를 보고 똑같이 되풀이되거나 양쪽이 같은 곳을 찾아 말해 봅시다.',
      demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ symmetry: 'vertical', has: [{ shape: 'heart', color: '분홍', size: 'l', min: 2 }] }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 접는 선으로 대칭 무늬 만들기', minutes: 9, tool: 'collage',
          teacher: '"접는 선에서 몇 칸 떨어져 있나요? 반대쪽도 같은 칸 수만큼 떨어져야 해요." 판의 점을 세게 한다. 짝 조각을 같은 쪽으로 돌려 놓는 학생에게는 "거울에 비친 모양은 반대로 돌아 있어요"라고 말하며 손바닥 두 개를 마주 대어 보게 한다.',
          task: '접는 선을 거울이라고 생각하고, 한쪽 조각과 똑같은 조각을 반대쪽 같은 거리에 놓아요.',
          levels: {
            easy: { shapes: ['circle', 'square', 'heart', 'triangle'], colors: ['빨강', '노랑', '파랑', '초록', '분홍'], sizes: ['m', 'l'] },
            base: { shapes: ['circle', 'square', 'triangle', 'heart', 'leaf', 'semi'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍'] },
            challenge: {},
          },
          items: [
            { prompt: '왼쪽 날개를 보고 오른쪽 날개를 똑같이 만들어 나비를 완성해요.', state: { pieces: [{ shape: 'heart', color: '분홍', size: 'l', x: 200, y: 160, r: 270 }, { shape: 'circle', color: '노랑', size: 's', x: 200, y: 260, r: 0 }] }, target: { symmetry: 'vertical' }, difficulty: 0.2,
              predict: { q: '왼쪽 하트가 왼쪽을 보고 있어요. 오른쪽 짝은 어느 쪽을 볼까요?', options: ['왼쪽', '오른쪽', '위쪽'] },
              conclude: '거울에 비친 짝은 같은 거리에, 방향은 반대로 놓여요.' },
            { prompt: '가로 접는 선 위아래가 똑같은 세모 무늬를 만들어요. 세모를 두 개 넘게 써요.', target: { symmetry: 'horizontal', has: [{ shape: 'triangle', min: 2 }] }, difficulty: 0.35 },
            { prompt: '세로 접는 선을 기준으로 대칭인 얼굴 가면을 조각 네 개 넘게 써서 만들어요.', target: { symmetry: 'vertical', pieces: { min: 4 } }, difficulty: 0.3 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 되풀이 무늬와 색 대비', minutes: 9, tool: 'collage',
          teacher: '"한 묶음은 몇 조각인가요? 그 묶음이 몇 번 되풀이되나요?" 묶음을 손가락으로 감싸 보게 한다. 대비 문항에서는 빨강과 초록을 붙인 판과 떼어 놓은 판을 함께 보여 주며 "어느 쪽이 더 눈에 띄나요?"를 묻는다.',
          task: '같은 묶음을 되풀이해 무늬를 만들거나, 서로 반대되는 색을 맞대어 눈에 띄게 꾸며요.',
          levels: {
            easy: { shapes: ['circle', 'square', 'triangle'], sizes: ['m'] },
            base: { shapes: ['circle', 'square', 'triangle', 'star', 'leaf'] },
            challenge: {},
          },
          items: [
            { prompt: '두 조각을 한 묶음으로 정하고, 그 묶음을 세 번 넘게 되풀이해 띠 무늬를 만들어요.', target: { repeat: { times: 3, unit: 2 } }, difficulty: 0.25,
              conclude: '같은 묶음이 같은 차례로 이어지면 되풀이 무늬예요.' },
            { prompt: '보색(빨강-초록처럼 서로 반대인 색) 조각을 맞대어 꽃을 꾸며요.', state: { pieces: [{ shape: 'circle', color: '빨강', size: 'm', x: 160, y: 200, r: 0 }] }, target: { contrast: 'complement' }, difficulty: 0.25 },
            { prompt: '따뜻한 색 조각과 차가운 색 조각을 맞대어 세 조각 넘게 놓아요.', target: { contrast: 'warm-cool', pieces: { min: 3 } }, difficulty: 0.3 },
            { prompt: '동그라미 세 개와 세모 두 개만 써서 얼굴을 꾸며요.', toolOptions: { shapes: ['circle', 'triangle', 'square'] }, target: { has: [{ shape: 'circle', n: 3 }, { shape: 'triangle', n: 2 }], pieces: { n: 5 } }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 보고 따라 만들고 내 작품 점검하기', minutes: 8, tool: 'collage',
          teacher: '"보기 그림의 조각을 하나씩 짚으며 모양, 색, 크기, 자리, 방향을 차례로 봐요." 따라 만들기 뒤에는 자유 작품을 만들고, 겹쳐 놓기·색 대비 가운데 쓴 방법을 짝에게 말한 뒤에만 점검을 표시하게 한다.',
          task: '보기 작품을 똑같이 만들어 보고, 나만의 작품을 만들어 스스로 점검해요.',
          levels: {
            easy: { sizes: ['m', 'l'] },
            base: {},
            challenge: { rotStep: 45 },
          },
          items: [
            { prompt: '파랑 큰 네모 위에 빨강 큰 세모를 얹은 집을 판 가운데에 만들어요.', target: { match: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 240, r: 0 }, { shape: 'triangle', color: '빨강', size: 'l', x: 280, y: 160, r: 0 }] }, difficulty: 0.3 },
            { prompt: '조각 두 쌍 넘게 겹쳐서 꽃밭을 꾸며요. 위로·아래로로 순서를 바꿔 봐요.', target: { overlap: 2 }, difficulty: 0.25 },
            { prompt: '나만의 작품을 만들고, 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['조각을 다섯 개 넘게 썼어요', '겹치기나 색 대비를 써 보았어요', '짝에게 표현하려던 것을 말했어요'], minPieces: 5 }, difficulty: 0.1 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"오늘 만든 무늬 가운데 대칭, 반복, 대비가 보이는 곳을 하나씩 가리켜 볼까요?" 출구 1번에서 방향을 같은 쪽으로 놓은 학생, 2번에서 보색을 잘못 고른 학생은 다음 시간에 거울과 색상환으로 다시 본다.',
      exitTicket: [
        { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'leaf', 'triangle'], colors: ['초록', '노랑', '빨강'] }, state: { pieces: [{ shape: 'leaf', color: '초록', size: 'm', x: 220, y: 200, r: 315 }] }, prompt: '세로 접는 선에 맞추어 나뭇잎의 짝을 놓아 대칭을 만들어 보세요.', target: { symmetry: 'vertical' }, difficulty: 0.25 },
        { type: 'choice', prompt: '보색끼리 짝 지은 것은 무엇인가요?', options: ['빨강-주황', '노랑-보라', '파랑-초록'], answer: 1, difficulty: 0.25, explain: '노랑과 보라는 색상환에서 서로 마주 보는 보색이에요.' },
        { type: 'short', prompt: '오늘 만든 작품에서 가장 마음에 드는 곳과 그 까닭을 쓰세요.' },
        { type: 'mood', prompt: '오늘 미술 활동은 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '대칭·반복·대비 무늬',
    items: [
      { type: 'figure', prompt: '접는 선을 기준으로 나머지 반쪽 조각을 그려 대칭 무늬를 완성하세요.', tool: 'collage', options: { guide: 'vertical' }, figures: [{ state: { pieces: [{ shape: 'heart', color: '분홍', size: 'l', x: 200, y: 160, r: 270 }, { shape: 'circle', color: '노랑', size: 's', x: 220, y: 260, r: 0 }, { shape: 'triangle', color: '파랑', size: 'm', x: 120, y: 280, r: 0 }] }, caption: '왼쪽을 보고 오른쪽 완성하기' }], answer: '접는 선에서 같은 거리, 하트는 오른쪽을 보게' },
      { type: 'figure', prompt: '되풀이되는 묶음을 찾아 ○로 묶고, 다음에 올 두 조각을 그리세요.', tool: 'collage', figures: [{ state: { pieces: [{ shape: 'circle', color: '빨강', size: 'm', x: 60, y: 200, r: 0 }, { shape: 'triangle', color: '초록', size: 'm', x: 120, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 'm', x: 180, y: 200, r: 0 }, { shape: 'triangle', color: '초록', size: 'm', x: 240, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 'm', x: 300, y: 200, r: 0 }, { shape: 'triangle', color: '초록', size: 'm', x: 360, y: 200, r: 0 }] }, caption: '빨강 동그라미 · 초록 세모 · …' }], answer: '빨강 동그라미, 초록 세모' },
      { type: 'choice', prompt: '두 색을 맞대었을 때 가장 눈에 띄는 짝은 무엇인가요?', options: ['빨강-분홍', '주황-파랑', '노랑-주황', '파랑-보라'], answer: '주황-파랑' },
      { type: 'check', prompt: '내 작품에서 쓴 방법에 ✓ 하세요.', options: ['대칭', '반복', '색 대비', '겹치기'] },
      { type: 'short', prompt: '내 작품의 제목과 표현하고 싶었던 것을 쓰세요.' },
    ],
    easy: {
      note: '접는 선에서 같은 칸 수만큼 떨어지게 그려요. 묶음은 손가락으로 감싸며 찾아요.',
      items: [
        { type: 'figure', prompt: '접는 선을 기준으로 나머지 반쪽을 그리세요.', tool: 'collage', options: { guide: 'vertical' }, figures: [{ state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 200, y: 200, r: 0 }] }, caption: '반쪽 완성하기' }] },
        { type: 'choice', prompt: '보색 짝에 ○ 하세요.', options: ['빨강-초록', '빨강-주황'], answer: '빨강-초록' },
        { type: 'short', prompt: '내 작품의 제목을 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '모양 네 가지, 색 다섯 가지, 크기 두 가지만 나와 고르기가 쉬워요.',
    base: '모양 여섯 가지와 무지개 색을 쓰고, 조각을 45°씩 돌려요.',
    challenge: '모든 모양·색·크기를 쓰고, 가로 대칭과 겹치기 문항에서 순서(위로·아래로)를 생각해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 짝 조각을 같은 방향으로 돌려 놓는다 → 손바닥을 마주 대어 거울 방향을 느끼게 한다(교구가 "방향이 거울처럼 뒤집혀 있지 않아요"라고 답한다). ② 접는 선에서의 거리를 눈대중으로 맞춘다 → 판의 점을 센다. ③ 되풀이 무늬에서 마지막 묶음의 차례를 바꾼다 → 묶음을 손가락으로 감싸 견준다. ④ 보색을 비슷한 색(빨강-주황)으로 고른다 → 색상환에서 마주 보는 색. 작품 전체가 결과에 남으므로 교사 화면에서 학생 작품을 다시 볼 수 있다.',
});
