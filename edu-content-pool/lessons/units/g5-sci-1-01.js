/* 5학년 1학기 과학 1. 지층과 화석 — 12차시
 * 지층(1~4) → 퇴적암(5~8) → 화석(9~12). 실물 실험(지층 모형·퇴적암 관찰·화석 모형)을 디지털 카드·자·그래프로 앞뒤에서 받친다.
 */
(function () {
  const U = { grade: 5, subject: '과학', unitTitle: '1. 지층과 화석' };
  const CU = 'g5-과학-1학기-1';
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const L = (n, rest) => Object.assign({
    id: `g5-sci-1-01-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: CU, lesson: n }, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, U, rest);
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  // 층 카드 색 — 같은 재료는 단원 내내 같은 색으로 보여 준다
  const C = { 자갈: 'lavender', 모래: 'buttercup', 진흙: 'peach', 흰모래: 'cream', 검은모래: 'sky', 붉은흙: 'rose' };

  const lessons = [
    // ───────────────────────── 1차시 (intro) ─────────────────────────
    L(1, {
      title: '지층 줄무늬를 세고 층의 두께와 색 견주기',
      objective: '지층을 보고 층의 개수를 세고, 층마다 두께와 색이 다르다는 것을 근거를 들어 말할 수 있다.',
      standards: ['[6과01-01]'],
      safety: ['돋보기로 해를 보지 않아요. 눈을 크게 다칠 수 있어요.', '바깥에서 지층을 볼 때는 선생님과 함께 가고, 절벽 아래나 비탈 끝에 서지 않아요.'],
      illustration: {
        prompt: P('a seaside cliff showing horizontal stripes of rock layers in different thicknesses and colors, with two children pointing at the stripes from the beach'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 120, y: 48 },
          { motif: 'mountain', x: 160, y: 210, s: 1.4, color: 'peach' }, { motif: 'mountain', x: 320, y: 214, s: 1.2, color: 'lavender' },
          { motif: 'wave', y: 236 }, { motif: 'bird', x: 300, y: 70 },
          { motif: 'text', x: 240, y: 134, text: '줄무늬가 몇 줄일까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 7,
          teacher: '"바닷가 절벽이나 길을 내려고 깎은 산비탈에서 이런 줄무늬를 본 적 있나요?" 지층 사진을 띄우고 줄무늬가 몇 줄인지 손가락으로 짚으며 함께 센다. "자갈, 모래, 진흙 같은 것이 층층이 쌓여 줄무늬가 보이는 것을 지층이라고 해요." 색이 다른 까닭을 물으면 "물감이 스며들어서"라는 대답이 자주 나오니, 칠판 한쪽에 적어 두고 활동 1 끝에 다시 견준다.',
          student: '바닷가 절벽이나 깎인 산비탈에서 본 줄무늬를 떠올려 봐요. 줄무늬는 왜 생겼을까요?',
          demo: { tool: 'measure', options: { mode: 'ruler', max: 10, object: { name: '모래층', len: 3 } }, sequence: [{ ans: 3 }] },
        },
        {
          id: 'main', title: '전개', minutes: 25,
          activities: [
            {
              id: 'a1', title: '활동 1. 지층의 특징 찾기', minutes: 13, tool: 'mindmap',
              task: '지층을 설명하는 카드를 읽고, 알맞은 카드만 바구니나 가지에 넣어요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
              teacher: '"지층이라면 어디에서나 볼 수 있는 모습은 무엇일까요?" 카드를 고른 뒤 왜 골랐는지 한 명씩 말하게 한다. 3번 문항에서 "물감이 스며들어서"를 고른 학생에게 "산비탈에 누가 물감을 부었을까요? 층마다 쌓인 알갱이를 돋보기로 보면 무엇이 다를까요?"라고 되묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '지층을 바르게 설명한 카드만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '지층', basket: '지층의 특징', cards: [
                    { id: '줄무늬', text: '층층이 줄무늬가 보여요' }, { id: '두께', text: '층마다 두께가 달라요' }, { id: '색', text: '층마다 색이 달라요' },
                    { id: '한덩어리', text: '처음부터 한 덩어리 바위예요', why: '지층은 여러 겹이 차례로 쌓여 생겨요.' },
                    { id: '같은두께', text: '모든 층의 두께가 똑같아요', why: '층마다 쌓인 양이 달라 두께도 달라요.' }] },
                  target: { pick: ['줄무늬', '두께', '색'] }, difficulty: 0.1,
                  levels: { challenge: { toolOptions: { cards: [
                    { id: '줄무늬', text: '층층이 줄무늬가 보여요' }, { id: '두께', text: '층마다 두께가 달라요' }, { id: '색', text: '층마다 색이 달라요' },
                    { id: '한덩어리', text: '처음부터 한 덩어리 바위예요' }, { id: '같은두께', text: '모든 층의 두께가 똑같아요' },
                    { id: '얇아짐', text: '위로 갈수록 층이 늘 얇아져요', why: '위층이 더 두꺼운 지층도 많아요.' }] } } } },
                { prompt: '민지가 도로 옆 지층을 보고 쓴 관찰 기록이에요. 두께·색·알갱이 가운데 무엇을 본 기록인지 가지에 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '도로 옆 지층', slots: ['두께', '색', '알갱이'], cards: [
                    '맨 위층이 가장 두꺼워요', '가운데 층은 손가락 하나만큼 얇아요', '아래층은 붉은빛을 띠어요', '맨 위층은 잿빛이에요', '맨 아래층에 자갈이 박혀 있어요', '가운데 층은 고운 모래예요'] },
                  target: { sort: { 두께: ['맨 위층이 가장 두꺼워요', '가운데 층은 손가락 하나만큼 얇아요'], 색: ['아래층은 붉은빛을 띠어요', '맨 위층은 잿빛이에요'], 알갱이: ['맨 아래층에 자갈이 박혀 있어요', '가운데 층은 고운 모래예요'] } }, difficulty: 0.15 },
                { prompt: '지층에서 본 것과 그 까닭을 이어 보세요. 까닭이 아닌 카드는 남겨 둬요.',
                  toolOptions: { mode: 'match', topic: '왜 다를까?', slots: [{ id: 'c1', label: '층마다 색이 달라요' }, { id: 'c2', label: '층마다 두께가 달라요' }], cards: [
                    { id: '재료', text: '쌓인 알갱이의 종류가 달라서' }, { id: '양', text: '쌓인 양이 달라서' },
                    { id: '물감', text: '물감이 스며들어서', why: '지층의 색은 쌓인 알갱이 자체의 색이에요.' }, { id: '햇빛', text: '햇빛을 받은 시간이 달라서' }] },
                  target: { match: { c1: '재료', c2: '양' } }, difficulty: 0.25,
                  predict: { q: '층마다 색이 다른 까닭은 무엇일까요?', options: ['쌓인 알갱이가 달라서', '물감이 스며들어서', '잘 모르겠어요'], answer: 0 },
                  conclude: '층마다 쌓인 알갱이의 종류가 달라 색이 다르고, 쌓인 양이 달라 두께가 달라요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 자로 층의 두께 재기', minutes: 12, tool: 'measure',
              task: '지층 그림에서 한 층만 오려 자에 대었어요. 층의 두께를 읽고 답 칸을 ↑↓ 단추로 맞춰요.',
              teacher: '"두께가 다르다고 말하려면 무엇이 있어야 할까요? 맞아요, 잰 값이 근거가 돼요." 2번처럼 층이 자의 0에서 시작하지 않으면 끝 눈금을 그대로 읽는 학생이 많다. "시작한 눈금에서 끝 눈금까지 몇 칸인지 세어 봐요"라고 짚는다.',
              levels: { easy: { mode: 'ruler', max: 10, mm: false }, base: { mode: 'ruler', max: 10 }, challenge: { mode: 'ruler', max: 15 } },
              items: [
                { prompt: '지층 그림에서 오린 모래층이에요. 모래층의 두께는 몇 cm인가요?', toolOptions: { object: { name: '모래층', len: 4 } }, target: { read: 4 }, difficulty: 0.1 },
                { prompt: '진흙층을 자의 2 cm 눈금부터 대었어요. 진흙층의 두께는 몇 cm인가요?', toolOptions: { object: { name: '진흙층', len: 3, start: 2 } }, target: { read: 3 }, difficulty: 0.2,
                  levels: { challenge: { toolOptions: { object: { name: '진흙층', len: 2.5, start: 3 } }, prompt: '진흙층을 자의 3 cm 눈금부터 대었어요. 진흙층의 두께는 몇 cm 몇 mm인가요?', target: { read: 2.5 } } } },
                { prompt: '같은 지층의 자갈층이에요. 자갈층의 두께를 재어 보세요.', toolOptions: { object: { name: '자갈층', len: 6 } }, target: { read: 6 }, difficulty: 0.2,
                  levels: { base: { toolOptions: { object: { name: '자갈층', len: 6.3 } }, prompt: '같은 지층의 자갈층이에요. 자갈층의 두께는 몇 cm 몇 mm인가요?', target: { read: 6.3 } },
                    challenge: { toolOptions: { object: { name: '자갈층', len: 6.3, start: 1.5 } }, prompt: '자갈층을 1.5 cm 눈금부터 대었어요. 자갈층의 두께는 몇 cm 몇 mm인가요?', target: { read: 6.3 } } },
                  conclude: '한 지층 안에서도 층마다 두께가 달라요. 잰 값을 근거로 말할 수 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"도입에서 칠판에 적은 \'물감이 스며들어서\'는 맞았나요?" 쌓인 알갱이의 종류가 달라 색이 다르다는 것을 한 문장으로 말하게 한다. 출구 질문 2번(경계선과 층의 개수)을 틀린 학생은 종이를 접어 경계선 3개를 만들고 칸을 세어 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 10, object: { name: '붉은 모래층', len: 3.7 } }, prompt: '붉은 모래층의 두께는 몇 cm 몇 mm인가요?', target: { read: 3.7 }, difficulty: 0.2 },
            { type: 'choice', prompt: '어떤 지층에 층과 층 사이 경계선이 3개 보여요. 이 지층은 모두 몇 개의 층으로 되어 있나요?', options: ['3개', '4개', '5개'], answer: 1, difficulty: 0.25, explain: '경계선 3개가 지층을 네 부분으로 나눠요.' },
            { type: 'choice', prompt: '지층의 층마다 색이 다른 까닭으로 가장 알맞은 것은 무엇인가요?', options: ['물감이 스며들어서', '쌓인 알갱이의 종류가 달라서', '비가 온 날이 달라서'], answer: 1, difficulty: 0.15, explain: '층마다 자갈·모래·진흙처럼 쌓인 알갱이가 달라 색이 달라요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '지층의 층 세기와 두께 재기',
        items: [
          { type: 'figure', prompt: '지층에서 오린 층의 두께를 자로 읽어 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10 }, figures: [
            { options: { object: { name: '모래층', len: 2.4 } }, caption: '___ cm ___ mm' }, { options: { object: { name: '자갈층', len: 5, start: 2 } }, caption: '___ cm' }], answer: '2 cm 4 mm, 5 cm' },
          { type: 'table', prompt: '사진이나 그림 속 지층을 아래층부터 관찰해 표를 채우세요.', columns: ['층', '두께(두꺼움·얇음)', '색', '알갱이(자갈·모래·진흙)'], cells: [['맨 아래층', '', '', ''], ['가운데 층', '', '', ''], ['맨 위층', '', '', '']], answer: '관찰한 지층에 따라 다름. 층마다 두께·색·알갱이를 따로 적었는지 확인' },
          { type: 'choice', prompt: '층과 층 사이 경계선이 4개 있는 지층은 층이 몇 개인지 ○ 하세요.', options: ['4개', '5개', '6개'], answer: '5개' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '자갈, 모래, 진흙 등이 층층이 쌓여 줄무늬가 보이는 것을 ___이라고 합니다. 층마다 쌓인 알갱이가 달라 ___이 다릅니다.', answer: '지층, 색' },
          { type: 'short', prompt: '"지층의 색은 물감이 스며들어서 생겼다."는 친구의 말을 고쳐 써 보세요.', answer: '지층의 색은 층마다 쌓인 알갱이의 종류가 달라서 다르다.' },
        ],
        easy: {
          note: '층과 층 사이 경계선을 손가락으로 짚으며 세어요. 경계선보다 층이 하나 더 많아요.',
          items: [
            { type: 'figure', prompt: '자의 0부터 대었어요. 층의 두께를 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [
              { options: { object: { name: '모래층', len: 2 } }, caption: '___ cm' }, { options: { object: { name: '진흙층', len: 5 } }, caption: '___ cm' }], answer: '2 cm, 5 cm' },
            { type: 'choice', prompt: '경계선이 2개 있는 지층은 층이 몇 개인지 ○ 하세요.', options: ['2개', '3개'], answer: '3개' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '층층이 쌓여 줄무늬가 보이는 것을 ___이라고 해요.', answer: '지층' },
            { type: 'draw', prompt: '색이 다른 층 세 개가 쌓인 지층을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 자에는 mm 눈금 없이 cm 눈금만 있어요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 자갈층은 mm까지 읽어요.',
        challenge: '함정 카드가 하나 더 있고, 층이 자의 0이 아닌 곳에서 시작해 두 눈금의 차를 구해야 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 지층의 색을 물감·햇빛 탓으로 돌린다 → 층마다 알갱이 종류가 다르다는 것을 실제 모래·진흙 색으로 보여 준다. ② 경계선 수를 층 수로 센다 → 경계선 + 1. ③ 0이 아닌 눈금에서 시작한 층의 끝 눈금을 그대로 읽는다. 지층 사진은 학교 주변이나 교과서 사진을 쓰고, 사진이 없으면 색 모래를 컵에 층층이 부어 보여 준다.',
    }),

    // ───────────────────────── 2차시 (practice) ─────────────────────────
    L(2, {
      title: '여러 곳의 지층을 견주어 공통점과 차이점 가르기',
      objective: '여러 곳의 지층을 견주어 공통점과 차이점을 가르고, 지층이 수평인지 휘었는지 끊어졌는지 말할 수 있다.',
      standards: ['[6과01-01]'],
      illustration: {
        prompt: P('three paper rock walls side by side, one with flat stripes, one with stripes bent into an arch, and one with stripes broken and shifted along a crack, under a soft sky'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 60, y: 54, s: 0.7 }, { motif: 'cloud', x: 360, y: 46 }, { motif: 'hills', y: 214, colors: ['peach', 'buttercup', 'lavender'] },
          { motif: 'mountain', x: 110, y: 212, color: 'buttercup' }, { motif: 'mountain', x: 240, y: 212, s: 1.2, color: 'peach' }, { motif: 'mountain', x: 370, y: 212, color: 'lavender' },
          { motif: 'text', x: 240, y: 112, text: '세 지층은 무엇이 같고 다를까요?', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '지난 시간의 지층 사진과 함께 다른 곳의 지층 사진 두 장(평평한 줄무늬, 휘어진 줄무늬)을 나란히 띄운다. "세 지층에 모두 있는 것은 무엇일까요? 한 곳에만 있는 것은요?" 공통점은 "층이 있다, 줄무늬가 보인다"처럼 모두에 해당해야 한다는 것을 짚는다. 휘어진 지층을 보고 "처음부터 휘어지게 쌓였을까요?"를 오늘의 질문으로 남긴다.',
          student: '지난 시간에 본 지층과 오늘 본 지층 사진을 견주어 봐요. 무엇이 같고 무엇이 다른가요?',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '두 지층', slots: ['공통점', '차이점'], cards: ['둘 다 줄무늬가 있어요', '한쪽만 층이 휘었어요'] }, sequence: [{ sort: { 공통점: ['둘 다 줄무늬가 있어요'], 차이점: ['한쪽만 층이 휘었어요'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 공통점과 차이점 나누기', minutes: 13, tool: 'mindmap',
              task: '두 곳의 지층을 견준 문장 카드를 공통점과 차이점 가지로 나누어요. 두 지층 모두에 맞는 말만 공통점이에요.',
              teacher: '"공통점은 두 지층에 모두 맞아야 해요. 한 곳에만 맞으면?" 하고 기준을 먼저 말하게 한다. "둘 다 층이 수평이에요"처럼 한 곳에만 맞는 카드를 공통점에 넣는 학생에게 문장의 \'둘 다\'를 손가락으로 짚게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '바닷가 절벽 지층과 산비탈 지층을 견주었어요. 카드를 공통점과 차이점으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '절벽과 산비탈', slots: ['공통점', '차이점'], cards: ['둘 다 줄무늬가 보여요', '둘 다 여러 층이 쌓여 있어요', '절벽은 층이 평평하고 산비탈은 휘었어요', '절벽은 층이 5개, 산비탈은 3개예요'] },
                  target: { sort: { 공통점: ['둘 다 줄무늬가 보여요', '둘 다 여러 층이 쌓여 있어요'], 차이점: ['절벽은 층이 평평하고 산비탈은 휘었어요', '절벽은 층이 5개, 산비탈은 3개예요'] } }, difficulty: 0.1 },
                { prompt: '강가 지층과 채석장 지층을 견주었어요. 카드를 공통점과 차이점으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '강가와 채석장', slots: ['공통점', '차이점'], cards: ['둘 다 알갱이가 쌓여 생겼어요', '둘 다 층마다 색이 달라요', '강가 지층이 더 노란빛이에요', '채석장 지층은 층이 끊어져 어긋났어요'] },
                  target: { sort: { 공통점: ['둘 다 알갱이가 쌓여 생겼어요', '둘 다 층마다 색이 달라요'], 차이점: ['강가 지층이 더 노란빛이에요', '채석장 지층은 층이 끊어져 어긋났어요'] } }, difficulty: 0.15 },
                { prompt: '세 곳의 지층을 견주었어요. 세 곳 모두에 맞는 것만 공통점에 넣고, 맞지 않는 말은 남겨 두세요.',
                  toolOptions: { mode: 'sort', topic: '세 곳의 지층', slots: ['공통점', '차이점'], cards: [
                    '세 곳 모두 층이 있어요', '층의 개수가 서로 달라요', '한 곳만 층이 휘었어요',
                    { id: '모두수평', text: '세 곳 모두 층이 평평해요', why: '휘어진 지층이 있으니 세 곳 모두에 맞지 않아요.' }] },
                  target: { sort: { 공통점: ['세 곳 모두 층이 있어요'], 차이점: ['층의 개수가 서로 달라요', '한 곳만 층이 휘었어요'] } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 평평한·휘어진·끊어진 지층', minutes: 13, tool: 'mindmap',
              task: '지층의 모습을 설명한 카드를 읽고, 알맞은 이름 가지에 이어요.',
              teacher: '"줄무늬가 활처럼 구부러진 것은 어떤 지층일까요?" 칠판에 세 모양을 손으로 그려 보게 한다. 마지막 문항 전에 "지층은 처음 쌓일 때 어떤 모양이었을까요?"를 예상하게 하고, 물이 담긴 통에 모래를 부으면 바닥에 평평하게 쌓이는 것을 떠올리게 한다. 휘거나 끊어진 것은 쌓인 뒤에 큰 힘을 받아서라는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '설명에 맞는 지층 이름에 카드를 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '지층의 모습', slots: [{ id: '수평', label: '평평한 지층' }, { id: '휜', label: '휘어진 지층' }, { id: '끊', label: '끊어진 지층' }],
                    cards: ['줄무늬가 나란히 평평해요', '줄무늬가 물결처럼 구부러졌어요', '줄무늬가 금을 따라 어긋났어요'] },
                  target: { match: { 수평: '줄무늬가 나란히 평평해요', 휜: '줄무늬가 물결처럼 구부러졌어요', 끊: '줄무늬가 금을 따라 어긋났어요' } }, difficulty: 0.1 },
                { prompt: '이번에는 다른 곳의 관찰 기록이에요. 지층 이름에 알맞은 기록을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '관찰 기록', slots: [{ id: '수평', label: '평평한 지층' }, { id: '휜', label: '휘어진 지층' }, { id: '끊', label: '끊어진 지층' }],
                    cards: ['층이 활처럼 위로 볼록해요', '한쪽 층만 아래로 내려앉았어요', '층이 바닥과 나란해요', '층이 무지개 색이에요'] },
                  target: { match: { 수평: '층이 바닥과 나란해요', 휜: '층이 활처럼 위로 볼록해요', 끊: '한쪽 층만 아래로 내려앉았어요' } }, difficulty: 0.2 },
                { prompt: '지층이 처음 쌓일 때의 모습에 가장 가까운 카드를 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '처음 쌓일 때', basket: '처음 모습', cards: ['평평하게 나란히 쌓여요', '활처럼 휘어지게 쌓여요', '금을 따라 어긋나게 쌓여요'] },
                  target: { pick: ['평평하게 나란히 쌓여요'] }, difficulty: 0.3,
                  predict: { q: '물속에 모래를 부으면 바닥에 어떻게 쌓일까요?', options: ['평평하게', '휘어지게', '어긋나게'], answer: 0 },
                  conclude: '지층은 처음에 평평하게 쌓이고, 쌓인 뒤 큰 힘을 받으면 휘어지거나 끊어져요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"오늘 본 지층들에 모두 있는 것을 한 문장으로 말해 볼까요?" (여러 층이 쌓여 줄무늬가 보인다.) "휘어진 지층은 처음부터 휘어져 쌓였나요?"라고 다시 물어 쌓인 뒤 힘을 받았다는 대답을 확인한다. 출구 질문 1번에서 차이점을 공통점에 넣은 학생은 다음 시간 시작 때 \'둘 다\' 규칙을 다시 짚는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떤 지층일까?', slots: [{ id: '휜', label: '휘어진 지층' }, { id: '끊', label: '끊어진 지층' }], cards: ['층이 계단처럼 어긋났어요', '층이 그릇처럼 아래로 오목해요', '층이 평평하게 쌓였어요'] }, prompt: '관찰 기록에 맞는 지층 이름에 카드를 이어 보세요.', target: { match: { 휜: '층이 그릇처럼 아래로 오목해요', 끊: '층이 계단처럼 어긋났어요' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '여러 곳의 지층에서 볼 수 있는 공통점은 무엇인가요?', options: ['모두 층이 휘어져 있어요', '모두 여러 층이 쌓여 줄무늬가 보여요', '모두 층이 세 개예요'], answer: 1, difficulty: 0.1, explain: '지층은 곳마다 모양·두께·층 수가 달라도, 여러 층이 쌓여 줄무늬가 보이는 것은 같아요.' },
            { type: 'choice', prompt: '산에서 휘어진 지층을 보았어요. 이 지층에 대한 생각으로 알맞은 것은 무엇인가요?', options: ['처음부터 휘어지게 쌓였어요', '평평하게 쌓인 뒤 큰 힘을 받아 휘었어요', '물감으로 그린 줄무늬예요'], answer: 1, difficulty: 0.25, explain: '지층은 처음에 평평하게 쌓이고, 나중에 큰 힘을 받아 휘어져요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '여러 곳의 지층 견주기',
        items: [
          { type: 'figure', wide: true, prompt: '가지마다 그 모습을 설명하는 말을 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '지층의 모습', printCards: false, slots: ['평평한 지층', '휘어진 지층', '끊어진 지층'], cards: ['보기'] }, caption: '' }], answer: '평평: 줄무늬가 나란해요 / 휘어진: 줄무늬가 구부러졌어요 / 끊어진: 줄무늬가 어긋났어요' },
          { type: 'table', prompt: '사진 두 장의 지층을 견주어 표를 채우세요.', columns: ['견줄 점', '가 지층', '나 지층'], cells: [['층의 개수', '', ''], ['층의 모양(평평·휨·끊김)', '', ''], ['가장 두꺼운 층의 색', '', '']], answer: '사진에 따라 다름' },
          { type: 'check', prompt: '여러 곳의 지층에서 볼 수 있는 공통점에 모두 ✓ 하세요.', options: ['여러 층이 쌓여 있다', '줄무늬가 보인다', '층이 모두 휘어져 있다', '층이 모두 세 개다'], answer: '여러 층이 쌓여 있다, 줄무늬가 보인다' },
          { type: 'short', prompt: '휘어진 지층은 어떻게 생겼을지 "처음에"와 "나중에"를 넣어 써 보세요.', answer: '처음에 평평하게 쌓인 지층이 나중에 큰 힘을 받아 휘어졌다.' },
          { type: 'draw', prompt: '평평한 지층, 휘어진 지층, 끊어진 지층을 한 칸씩 그려 보세요.' },
        ],
        easy: {
          note: '공통점은 "둘 다" 맞는 것, 차이점은 한쪽만 맞는 것이에요. 지층은 처음에 평평하게 쌓여요.',
          items: [
            { type: 'choice', prompt: '줄무늬가 물결처럼 구부러진 지층에 ○ 하세요.', options: ['평평한 지층', '휘어진 지층', '끊어진 지층'], answer: '휘어진 지층' },
            { type: 'choice', prompt: '두 지층의 공통점에 ○ 하세요.', options: ['둘 다 줄무늬가 보여요', '한쪽만 층이 휘었어요'], answer: '둘 다 줄무늬가 보여요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지층은 처음에 ___하게 쌓여요.', answer: '평평' },
            { type: 'draw', prompt: '평평한 지층과 휘어진 지층을 한 칸씩 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말하며 카드가 돌아와요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '셋째 문항처럼 어느 가지에도 넣지 않을 함정 카드가 섞여 있어 \'세 곳 모두\'를 끝까지 따져야 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 한 지층에만 맞는 말을 공통점에 넣는다 → \'둘 다·세 곳 모두\'를 넣어 읽게 한다. ② 휘어진 지층이 처음부터 휘어 쌓였다고 생각한다 → 물속에 모래를 부으면 평평하게 쌓인다는 것을 실제로 보여 준다. ③ 끊어진 지층과 휘어진 지층을 헷갈린다 → 줄무늬가 이어져 있는지(휨), 금을 따라 어긋났는지(끊김)를 본다. 휘거나 끊어지게 하는 힘이 무엇인지는 이 단원에서 깊이 다루지 않는다.',
    }),

    // ───────────────────────── 3차시 (core, chart) ─────────────────────────
    L(3, {
      title: '지층 모형의 쌓인 차례와 두께를 그림·그래프로',
      objective: '지층 모형의 층마다 재료 이름을 붙여 아래에서 위로 쌓인 차례를 나타내고, 층의 두께를 막대그래프로 나타낼 수 있다.',
      standards: ['[6과01-01]'],
      illustration: {
        prompt: P('a clear plastic cup filled with layers of purple gravel, yellow sand and peach clay, with an upward arrow drawn beside it and a small paper bar chart next to it'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 412, y: 54, s: 0.7 }, { motif: 'cloud', x: 96, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'star', x: 160, y: 120, color: 'lavender' }, { motif: 'star', x: 320, y: 120, color: 'buttercup' },
          { motif: 'text', x: 240, y: 168, text: '먼저 넣은 재료는 어디에?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '투명 컵에 자갈, 모래, 진흙을 차례로 부어 보이거나 사진을 띄운다. "가장 먼저 부은 재료는 어디에 있나요? 가장 나중에 부은 재료는요?" 학생 몇이 "위에 있는 것이 먼저"라고 답하면 실제 컵을 다시 보여 주고 바닥부터 손가락으로 짚게 한다. "그림으로 나타낼 때는 아래에서 위로 화살표를 그려 쌓인 차례를 보여 줘요."',
          student: '컵에 재료를 차례로 부으면 어떤 재료가 맨 아래에 있을까요?',
          demo: { tool: 'story', options: { shuffle: false, slots: ['맨 아래 층', '가운데 층', '맨 위 층'], cards: [{ id: '자갈', text: '자갈', color: C.자갈 }, { id: '모래', text: '모래', color: C.모래 }, { id: '진흙', text: '진흙', color: C.진흙 }] }, sequence: [{ order: ['자갈', '모래', '진흙'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 부은 차례대로 층 놓기', minutes: 9, tool: 'story',
              task: '재료를 부은 차례를 읽고, 층 자리(맨 아래부터)에 재료 카드를 놓아요.',
              teacher: '"먼저 부은 재료는 그 위에 다른 재료가 덮이니 어디에 남을까요?" 1번 예상을 고른 뒤 확인한다. 맨 위 층 자리에 첫 재료를 놓는 학생이 있으면 컵을 그린 그림에 아래에서 위로 화살표를 그리며 부은 차례를 소리 내어 따라가게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '준호 모둠은 자갈 → 모래 → 진흙 차례로 부었어요. 층 자리에 재료를 놓아 보세요.',
                  toolOptions: { slots: ['맨 아래 층', '가운데 층', '맨 위 층'], cards: [{ id: '자갈', text: '자갈', color: C.자갈 }, { id: '모래', text: '모래', color: C.모래 }, { id: '진흙', text: '진흙', color: C.진흙 }] },
                  target: { order: ['자갈', '모래', '진흙'] }, difficulty: 0.1,
                  predict: { q: '가장 먼저 부은 자갈은 어디에 있을까요?', options: ['맨 아래', '맨 위', '가운데'], answer: 0 },
                  conclude: '먼저 부은 재료일수록 아래에 있어요. 지층도 아래층이 먼저 쌓였어요.' },
                { prompt: '민지 모둠은 진흙 → 자갈 → 모래 차례로 부었어요. 층 자리에 재료를 놓아 보세요.',
                  toolOptions: { slots: ['맨 아래 층', '가운데 층', '맨 위 층'], cards: [{ id: '자갈', text: '자갈', color: C.자갈 }, { id: '모래', text: '모래', color: C.모래 }, { id: '진흙', text: '진흙', color: C.진흙 }] },
                  target: { order: ['진흙', '자갈', '모래'] }, difficulty: 0.15 },
                { prompt: '흰 모래 → 검은 모래 → 자갈 → 붉은 흙 차례로 부었어요. 네 층 자리에 놓아 보세요.',
                  toolOptions: { slots: ['맨 아래 층', '둘째 층', '셋째 층', '맨 위 층'], cards: [{ id: '흰모래', text: '흰 모래', color: C.흰모래 }, { id: '검은모래', text: '검은 모래', color: C.검은모래 }, { id: '자갈', text: '자갈', color: C.자갈 }, { id: '붉은흙', text: '붉은 흙', color: C.붉은흙 }] },
                  target: { order: ['흰모래', '검은모래', '자갈', '붉은흙'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 먼저 쌓인 층부터 띠에 놓기', minutes: 9, tool: 'timeline',
              task: '지층 그림의 층 카드를 읽고, 먼저 쌓인 층을 띠의 왼쪽부터 놓아요. 카드의 작은 글이 층의 자리예요.',
              teacher: '"이번에는 거꾸로예요. 층의 자리를 보고 쌓인 차례를 찾아요." 위층이 먼저 쌓였다고 생각하는 학생에게 "맨 위층이 먼저 쌓였다면 그 아래층은 공중에 떠서 기다렸을까요?"라고 되묻는다. 띠의 왼쪽 → 오른쪽이 그림에서 아래 → 위 화살표와 같다는 것을 이어 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '먼저 쌓인 층부터 띠에 놓아 보세요.',
                  toolOptions: { axis: ['먼저 쌓임', '나중에 쌓임'], cards: [{ id: '잿빛', text: '잿빛 진흙층', sub: '맨 위' }, { id: '노란', text: '노란 모래층', sub: '가운데' }, { id: '자갈', text: '자갈층', sub: '맨 아래' }] },
                  target: { order: ['자갈', '노란', '잿빛'] }, difficulty: 0.15 },
                { prompt: '네 층으로 된 지층이에요. 먼저 쌓인 층부터 띠에 놓아 보세요.',
                  toolOptions: { axis: ['먼저 쌓임', '나중에 쌓임'], cards: [{ id: '붉은', text: '붉은 진흙층', sub: '아래에서 둘째' }, { id: '흰', text: '흰 모래층', sub: '맨 위' }, { id: '검은', text: '검은 진흙층', sub: '맨 아래' }, { id: '자갈', text: '자갈층', sub: '위에서 둘째' }] },
                  target: { order: ['검은', '붉은', '자갈', '흰'] }, difficulty: 0.25 },
                { prompt: '산비탈 지층에서 가장 나중에 쌓인 층이 오른쪽 끝에 오게 띠를 완성해 보세요.',
                  toolOptions: { axis: ['먼저 쌓임', '나중에 쌓임'], cards: [{ id: '모래', text: '모래층', sub: '맨 아래' }, { id: '진흙', text: '진흙층', sub: '가운데' }, { id: '자갈', text: '자갈층', sub: '맨 위' }] },
                  target: { order: ['모래', '진흙', '자갈'] }, difficulty: 0.2,
                  conclude: '아래에 있는 층일수록 먼저 쌓였고, 맨 위층이 가장 나중에 쌓였어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 층 두께를 막대그래프로', minutes: 9, tool: 'chart',
              task: '모형에서 잰 층 두께 표를 보고 막대그래프를 완성하거나, 그래프를 읽고 답을 골라요.',
              teacher: '"표와 그래프 가운데 어느 쪽이 두꺼운 층을 한눈에 보여 줄까요?" 그래프의 막대 순서를 맨 아래 층부터 둔 까닭(쌓인 차례)을 말하게 한다. 눈금 한 칸이 1 cm인지 먼저 확인하게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '준호 모둠 모형의 층 두께 표를 보고 막대그래프를 완성하세요.',
                  toolOptions: { type: 'bar', title: '준호 모둠 모형의 층 두께', data: [['자갈층', 3], ['모래층', 5], ['진흙층', 2]], unit: 'cm', xLabel: '층(아래부터)', yLabel: '두께', scale: 1, given: [0] },
                  target: { build: true }, difficulty: 0.15 },
                { prompt: '네 층으로 된 모형의 층 두께 표를 보고 막대그래프를 완성하세요.',
                  toolOptions: { type: 'bar', title: '네 층 모형의 층 두께', data: [['흰 모래', 2], ['검은 모래', 1], ['자갈', 4], ['붉은 흙', 3]], unit: 'cm', xLabel: '층(아래부터)', yLabel: '두께', scale: 1, given: [0] },
                  target: { build: true }, difficulty: 0.2 },
                { prompt: '그래프를 보고 가장 두껍게 쌓인 층을 골라 보세요.',
                  toolOptions: { type: 'bar', mode: 'read', title: '민지 모둠 모형의 층 두께', data: [['진흙층', 2], ['자갈층', 4], ['모래층', 3]], unit: 'cm', xLabel: '층(아래부터)', scale: 1, choices: ['진흙층', '자갈층', '모래층'], question: '가장 두꺼운 층은?', why: ['진흙층 막대가 가장 낮아요.', '', '모래층 막대는 자갈층보다 낮아요.'], explain: '자갈층 막대가 4 cm로 가장 높아요.' },
                  target: { pick: 1 }, difficulty: 0.15 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"지층 그림에 화살표를 그린다면 어느 쪽에서 어느 쪽으로 그려야 할까요?" 아래에서 위로라는 대답과 까닭(아래층이 먼저 쌓였다)을 함께 말하게 한다. 출구 질문 2번에서 위층을 고른 학생에게는 다음 시간 모형 실험에서 직접 부어 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { slots: ['맨 아래 층', '가운데 층', '맨 위 층'], cards: [{ id: '자갈', text: '자갈', color: C.자갈 }, { id: '모래', text: '모래', color: C.모래 }, { id: '진흙', text: '진흙', color: C.진흙 }] }, prompt: '모래 → 진흙 → 자갈 차례로 부었어요. 층 자리에 재료를 놓아 보세요.', target: { order: ['모래', '진흙', '자갈'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '맨 아래 자갈층, 가운데 진흙층, 맨 위 모래층으로 된 지층에서 가장 먼저 쌓인 층은 무엇인가요?', options: ['모래층', '진흙층', '자갈층'], answer: 2, difficulty: 0.2, explain: '아래에 있는 층이 먼저 쌓였어요. 맨 아래 자갈층이 가장 먼저예요.' },
            { type: 'choice', prompt: '지층 그림에 쌓인 차례를 화살표로 나타낼 때 알맞은 방향은 무엇인가요?', options: ['위에서 아래로', '아래에서 위로', '왼쪽에서 오른쪽으로'], answer: 1, difficulty: 0.15, explain: '아래층부터 차례로 쌓였으니 화살표는 아래에서 위로 그려요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '지층 모형 나타내기',
        items: [
          { type: 'figure', wide: true, prompt: '모래 → 자갈 → 진흙 차례로 부은 모형이에요. 층 자리 칸에 재료 이름을 쓰세요.', tool: 'story', figures: [{ options: { printCards: false, slots: ['맨 아래 층', '가운데 층', '맨 위 층'], cards: ['보기'] }, caption: '' }], answer: '맨 아래 모래, 가운데 자갈, 맨 위 진흙' },
          { type: 'draw', prompt: '표를 보고 막대그래프를 그리세요. 가로에 층 이름, 세로에 두께(cm)를 쓰고, 한 칸을 1 cm로 해요. (모래층 4 cm, 자갈층 2 cm, 진흙층 3 cm)' },
          { type: 'draw', prompt: '오늘 만든(본) 지층 모형을 그리고, 층마다 재료 이름을 쓰고, 쌓인 차례를 화살표로 나타내세요.' },
          { type: 'choice', prompt: '지층에서 가장 나중에 쌓인 층에 ○ 하세요.', options: ['맨 아래층', '가운데 층', '맨 위층'], answer: '맨 위층' },
          { type: 'short', prompt: '"맨 위층이 가장 먼저 쌓였다."는 말이 틀린 까닭을 써 보세요.', answer: '재료는 아래부터 차례로 쌓이므로 아래층이 먼저 쌓이고 맨 위층이 가장 나중에 쌓였다.' },
        ],
        easy: {
          note: '먼저 부은 것이 맨 아래! 화살표는 아래에서 위로 그려요.',
          items: [
            { type: 'figure', wide: true, prompt: '자갈 → 모래 → 진흙 차례로 부었어요. 칸에 재료 이름을 쓰세요.', tool: 'story', figures: [{ options: { printCards: false, slots: ['맨 아래 층', '가운데 층', '맨 위 층'], cards: ['보기'] }, caption: '' }], answer: '자갈, 모래, 진흙' },
            { type: 'choice', prompt: '가장 먼저 쌓인 층에 ○ 하세요.', options: ['맨 아래층', '맨 위층'], answer: '맨 아래층' },
            { type: 'choice', prompt: '쌓인 차례를 나타내는 화살표 방향에 ○ 하세요.', options: ['아래에서 위로', '위에서 아래로'], answer: '아래에서 위로' },
            { type: 'draw', prompt: '세 층으로 된 지층 모형을 그리고 아래에서 위로 화살표를 그리세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 그래프 막대 끝에 값이 보여요.',
        base: '모두 놓은 뒤 확인을 눌러요. 그래프 값은 눈금으로 읽어요.',
        challenge: '값 표시 없이 눈금만 보고 그래프를 그리고, 네 층 모형까지 다뤄요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 위층을 먼저 쌓인 층으로 거꾸로 나타낸다 → 컵에 재료를 부어 보는 실물로 확인하고, 그림에는 아래에서 위로 화살표를 그리게 한다. ② 그래프 막대 순서를 아무렇게나 둔다 → 맨 아래 층부터 두면 쌓인 차례도 함께 보인다. ③ 그래프 눈금 한 칸의 크기를 확인하지 않는다. 실제 지층은 이 모형과 달리 아주 오랜 시간에 걸쳐 쌓인다는 것은 4차시에서 견준다.',
    }),

    // ───────────────────────── 4차시 (core, procedure) ─────────────────────────
    L(4, {
      title: '찰흙 지층 모형을 만들어 자른 면 살피기',
      objective: '색이 다른 찰흙을 차례로 쌓아 지층 모형을 만들고, 자른 면에서 쌓인 차례를 확인해 실제 지층과 견줄 수 있다.',
      standards: ['[6과01-01]'],
      safety: ['플라스틱 칼은 칼날이 몸 바깥쪽을 향하게 하고, 찰흙을 누른 손가락 앞으로 자르지 않아요.', '찰흙과 흙을 입에 넣지 않고, 실험이 끝나면 손을 비누로 씻어요.', '물이 든 통은 책상 가운데에 두고, 쏟은 물은 바로 닦아요.'],
      illustration: {
        prompt: P('three flat sheets of colored clay stacked on a desk and cut in half with a plastic knife, showing stripes on the cut face, beside a jar of water with settled gravel, sand and mud layers'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'cloud', x: 100, y: 50 }, { motif: 'sun', x: 404, y: 56, s: 0.7 }, { motif: 'hills', y: 214, colors: ['rose', 'buttercup', 'lavender'] },
          { motif: 'house', x: 96, y: 220, color: 'cream' }, { motif: 'tree', x: 392, y: 216, s: 0.9 },
          { motif: 'text', x: 240, y: 124, text: '잘라 보면 층이 보일까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 5,
          teacher: '"지난 시간 컵 모형은 옆에서 층을 봤어요. 진짜 지층은 땅속에 있는데, 우리는 어떻게 층을 보게 될까요?" 길을 내려고 산을 깎은 비탈 사진을 다시 보여 주며 \'깎인 면 = 자른 면\'이라는 것을 잇는다. 오늘은 찰흙으로 지층을 쌓고 잘라서 자른 면을 본다고 알린다. 재료(색 찰흙 세 가지, 플라스틱 칼, 밀대)를 모둠마다 나눠 준다.',
          student: '산을 깎은 비탈에서 지층이 보이는 까닭을 떠올려 봐요. 오늘은 찰흙으로 지층을 쌓고 잘라 봐요.',
          demo: { tool: 'story', options: { shuffle: false, cards: [{ id: '펴기', text: '찰흙을 납작하게 펴요' }, { id: '쌓기', text: '한 장씩 차례로 쌓아요' }, { id: '자르기', text: '반으로 잘라요' }] }, sequence: [{ order: ['펴기', '쌓기', '자르기'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 28,
          activities: [
            {
              id: 'a1', title: '활동 1. 실험 차례 정하기', minutes: 9, tool: 'story',
              task: '모형을 만드는 차례를 장면 칸에 놓아요. 차례를 정한 뒤 모둠에서 실제로 만들어 봐요.',
              teacher: '"재료를 한꺼번에 섞어 넣으면 어떻게 될까요?" 차례를 정한 뒤 바로 실물을 만들게 한다. 자르기 전에 "자른 면에서 맨 아래에 보일 색은?"을 모둠별로 공책에 적게 하고 잘라서 견준다. 누르기를 빼먹는 모둠은 자를 때 층이 뭉개지니, 눌러야 층이 단단히 붙는다고 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '찰흙 지층 모형을 만드는 차례대로 장면을 놓아 보세요.',
                  toolOptions: { cards: [{ id: '펴기', text: '찰흙 세 가지를 납작하게 펴요' }, { id: '쌓기', text: '한 장씩 차례로 쌓아요' }, { id: '누르기', text: '손바닥으로 위에서 꾹 눌러요' }, { id: '자르기', text: '플라스틱 칼로 반을 잘라요' }, { id: '보기', text: '자른 면에서 층의 차례를 봐요' }] },
                  target: { order: ['펴기', '쌓기', '누르기', '자르기', '보기'] }, difficulty: 0.15 },
                { prompt: '물이 든 통으로 만드는 지층 모형이에요. 실험 차례대로 장면을 놓아 보세요.',
                  toolOptions: { cards: [{ id: '물', text: '통에 물을 반쯤 부어요' }, { id: '자갈', text: '자갈을 넣고 가라앉길 기다려요' }, { id: '모래', text: '모래를 넣고 가라앉길 기다려요' }, { id: '진흙', text: '진흙을 넣고 하루 그대로 둬요' }, { id: '관찰', text: '통 옆에서 층을 살펴요' }] },
                  target: { order: ['물', '자갈', '모래', '진흙', '관찰'] }, difficulty: 0.2,
                  predict: { q: '재료를 하나씩 넣고 기다리는 까닭은 무엇일까요?', options: ['층이 나뉘게', '빨리 끝내려고', '물을 아끼려고'], answer: 0 },
                  conclude: '재료를 하나씩 넣고 가라앉기를 기다려야 층이 섞이지 않고 나뉘어요.' },
                { prompt: '잘못된 장면 하나가 섞여 있어요. 그 장면은 빼고 바른 차례대로 놓아 보세요.',
                  toolOptions: { slots: 4, cards: [{ id: '펴기', text: '찰흙 세 가지를 납작하게 펴요' }, { id: '섞기', text: '찰흙을 모두 한데 섞어요', why: '섞으면 층이 생기지 않아요.' }, { id: '쌓기', text: '한 장씩 차례로 쌓아요' }, { id: '누르기', text: '위에서 꾹 눌러요' }, { id: '자르기', text: '반을 잘라 자른 면을 봐요' }] },
                  target: { order: ['펴기', '쌓기', '누르기', '자르기'] }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 실험이 잘못된 까닭 찾기', minutes: 9, tool: 'mindmap',
              task: '다른 모둠이 겪은 일을 읽고, 알맞은 까닭 카드를 이어요.',
              teacher: '"층이 생기지 않은 모둠이 \'재료가 나빠서\'라고 했어요. 정말 재료 탓일까요?" 결과가 다른 모둠의 모형을 함께 보며 무엇을 다르게 했는지 찾게 한다. 재료 탓으로 돌리는 대답이 나오면 같은 재료로 차례를 지켜 다시 만든 모둠의 모형을 나란히 보여 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '모둠이 겪은 일에 알맞은 까닭을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '왜 그랬을까?', slots: [{ id: 'm1', label: '층이 생기지 않았어요' }, { id: 'm2', label: '자를 때 층이 떨어졌어요' }],
                    cards: [{ id: '섞음', text: '재료를 한데 섞어 넣어서' }, { id: '안누름', text: '쌓은 뒤 누르지 않아서' }, { id: '재료탓', text: '찰흙 색이 예쁘지 않아서', why: '색이 아니라 만드는 차례가 결과를 바꿔요.' }] },
                  target: { match: { m1: '섞음', m2: '안누름' } }, difficulty: 0.15 },
                { prompt: '물이 든 통 모형에서 생긴 일이에요. 알맞은 까닭을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '물통 모형', slots: [{ id: 'm1', label: '층 경계가 흐릿해요' }, { id: 'm2', label: '층이 두 개만 보여요' }],
                    cards: [{ id: '빨리', text: '가라앉기 전에 다음 재료를 부어서' }, { id: '빠짐', text: '재료 하나를 넣지 않아서' }, { id: '통', text: '통이 투명해서' }] },
                  target: { match: { m1: '빨리', m2: '빠짐' } }, difficulty: 0.2 },
                { prompt: '찰흙 모형과 실제 지층을 견주었어요. 카드를 모형과 실제 지층 가지로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '모형과 실제', slots: ['찰흙 모형', '실제 지층'], cards: ['몇 분 만에 쌓아요', '아주 오랜 시간 동안 쌓여요', '손바닥으로 눌러요', '위에 쌓인 것의 무게로 눌려요'] },
                  target: { sort: { '찰흙 모형': ['몇 분 만에 쌓아요', '손바닥으로 눌러요'], '실제 지층': ['아주 오랜 시간 동안 쌓여요', '위에 쌓인 것의 무게로 눌려요'] } }, difficulty: 0.25,
                  conclude: '모형은 몇 분 만에 손으로 만들지만, 실제 지층은 아주 오랜 시간 동안 쌓이고 그 무게로 눌려요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 실험 전·뒤 점검', minutes: 10, tool: 'kitchen',
              task: '실험 전과 뒤에 해야 할 일에만 표시해요. 하지 않아야 할 일은 그대로 둬요.',
              teacher: '"칼을 쓰는 실험이에요. 무엇을 먼저 약속해야 할까요?" 점검 목록을 고른 뒤 실제로 그 약속을 지키며 정리하게 한다. 자른 면을 손가락으로 문지르면 층 경계가 뭉개지니 눈으로만 보고 사진이나 그림으로 남기게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '찰흙을 자르기 전에 할 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '자르기 전에', items: [{ id: 'dir', text: '칼날이 몸 바깥쪽을 향하게 잡아요' }, { id: 'flat', text: '모형을 책상에 평평하게 놓아요' }, { id: 'hand', text: '누른 손가락 바로 앞을 잘라요' }, { id: 'press', text: '쌓은 찰흙을 위에서 눌러 두어요' }] },
                  target: { checklist: ['dir', 'flat', 'press'] }, difficulty: 0.1 },
                { prompt: '자른 면을 관찰할 때 할 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '자른 면 관찰', items: [{ id: 'count', text: '층의 개수를 세어요' }, { id: 'order', text: '맨 아래 층의 색부터 적어요' }, { id: 'rub', text: '경계를 손가락으로 문질러요' }, { id: 'draw', text: '자른 면을 그림으로 남겨요' }] },
                  target: { checklist: ['count', 'order', 'draw'] }, difficulty: 0.15 },
                { prompt: '실험이 끝난 뒤 할 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '실험 뒤 정리', items: [{ id: 'wash', text: '손을 비누로 씻어요' }, { id: 'knife', text: '칼을 정해진 통에 넣어요' }, { id: 'sink', text: '흙물을 세면대에 바로 버려요' }, { id: 'wipe', text: '책상을 닦아요' }, { id: 'taste', text: '찰흙 맛을 봐요' }] },
                  target: { checklist: ['wash', 'knife', 'wipe'] }, difficulty: 0.15 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '모둠마다 자른 면 그림을 들고 "맨 아래 층은 무슨 색이고, 그 까닭은?"을 발표하게 한다. "우리 모형은 몇 분 만에 만들었는데, 실제 지층도 그럴까요?"라고 물어 아주 오랜 시간에 걸쳐 쌓인다는 것을 짚는다. 층이 생기지 않은 모둠에는 "재료를 바꾸지 않고 차례만 지켜 다시 만들면 어떻게 될까요?"라고 묻고 남은 찰흙으로 다시 쌓아 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { cards: [{ id: '노랑', text: '노란 찰흙을 깔아요' }, { id: '파랑', text: '파란 찰흙을 올려요' }, { id: '빨강', text: '빨간 찰흙을 올려요' }, { id: '자르기', text: '눌러서 반을 잘라요' }] }, prompt: '맨 아래가 노랑, 가운데가 파랑, 맨 위가 빨강인 모형을 만드는 차례대로 놓아 보세요.', target: { order: ['노랑', '파랑', '빨강', '자르기'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '지층 모형에서 층이 생기지 않았어요. 가장 먼저 의심할 까닭은 무엇인가요?', options: ['찰흙 색이 어두워서', '재료를 한데 섞어 넣어서', '교실이 추워서'], answer: 1, difficulty: 0.2, explain: '재료를 한 가지씩 차례로 쌓아야 층이 생겨요.' },
            { type: 'choice', prompt: '찰흙 지층 모형과 실제 지층이 다른 점은 무엇인가요?', options: ['실제 지층은 아주 오랜 시간 동안 쌓여요', '실제 지층은 위층이 먼저 쌓여요', '실제 지층은 층이 없어요'], answer: 0, difficulty: 0.2, explain: '모형은 몇 분이면 되지만 실제 지층은 아주 오랜 시간 동안 쌓여요. 아래층이 먼저인 것은 같아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '지층 모형 만들기 기록',
        items: [
          { type: 'table', prompt: '우리 모둠이 쌓은 차례를 적으세요.', columns: ['쌓은 차례', '찰흙 색', '자른 면에서 본 자리'], cells: [['첫째', '', ''], ['둘째', '', ''], ['셋째', '', '']], answer: '첫째로 쌓은 색이 자른 면의 맨 아래에 있어야 함' },
          { type: 'draw', prompt: '자른 면을 그리고, 층마다 색 이름을 쓰고, 쌓인 차례를 화살표로 나타내세요.' },
          { type: 'check', prompt: '찰흙 모형과 실제 지층이 같은 점에 모두 ✓ 하세요.', options: ['아래층이 먼저 쌓였다', '층마다 색이 다르다', '몇 분 만에 만들어진다', '손으로 눌러 만든다'], answer: '아래층이 먼저 쌓였다, 층마다 색이 다르다' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '재료를 한데 ___어 넣으면 층이 생기지 않는다. 실제 지층은 아주 ___ 시간 동안 쌓인다.', answer: '섞, 오랜' },
          { type: 'short', prompt: '"우리 모둠은 재료가 나빠서 층이 안 생겼다."는 말을 듣고 다시 실험한다면 무엇을 바꿀지 써 보세요.', answer: '재료를 섞지 않고 한 가지씩 차례로 쌓은 뒤 눌러서 자른다.' },
        ],
        easy: {
          note: '찰흙을 한 장씩 차례로 쌓고 → 누르고 → 잘라요. 먼저 쌓은 색이 맨 아래에 있어요.',
          items: [
            { type: 'choice', prompt: '층이 잘 생기게 하는 방법에 ○ 하세요.', options: ['한데 섞어 넣기', '한 가지씩 차례로 쌓기'], answer: '한 가지씩 차례로 쌓기' },
            { type: 'choice', prompt: '맨 처음 쌓은 찰흙은 자른 면 어디에 있는지 ○ 하세요.', options: ['맨 아래', '맨 위'], answer: '맨 아래' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '실제 지층은 아주 ___ 시간 동안 쌓여요.', answer: '오랜' },
            { type: 'draw', prompt: '자른 면을 그리고 색 이름을 쓰세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말하며 카드가 돌아와요.',
        base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '잘못된 장면 카드를 스스로 골라 빼야 하고, 실험 결과의 까닭을 모형과 실제 지층의 차이까지 이어 말해요.',
      },
      teacherNotes: '준비물(모둠): 색이 다른 찰흙(지점토) 세 가지, 밀대, 플라스틱 칼, 물티슈. 물통 모형을 함께 하려면 투명 통, 자갈·모래·진흙, 물. 자주 보이는 어려움: ① 재료를 섞어 넣고 층이 안 생긴 것을 재료 탓으로 돌린다 → 같은 재료로 차례를 지켜 다시 만들어 견준다. ② 모형과 실제 지층의 시간 차이를 생각하지 않는다 → 실제 지층은 아주 오랜 시간 동안 쌓인다. ③ 흙물을 세면대에 바로 버리면 배수구가 막히니 정해진 통에 모은다.',
    }),

    // ───────────────────────── 5차시 (core, concept) ─────────────────────────
    L(5, {
      title: '알갱이 크기로 이암·사암·역암 가르기',
      objective: '퇴적암의 알갱이 크기를 근거로 이암, 사암, 역암을 갈라 이름을 붙이고 그 까닭을 말할 수 있다.',
      standards: ['[6과01-02]'],
      safety: ['돋보기로 해를 보지 않아요.', '암석 시료는 던지거나 부딪치지 않아요. 깨진 조각이 튈 수 있어요.', '관찰이 끝나면 손을 씻어요.'],
      illustration: {
        prompt: P('three paper rock samples on a tray: a smooth fine-grained mudstone, a gritty sandstone and a conglomerate dotted with round pebbles, with a magnifying glass resting beside them'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 214, colors: ['cream', 'buttercup', 'lavender'] },
          { motif: 'mountain', x: 120, y: 212, s: 0.9, color: 'peach' }, { motif: 'mountain', x: 240, y: 212, s: 0.9, color: 'buttercup' }, { motif: 'mountain', x: 360, y: 212, s: 0.9, color: 'lavender' },
          { motif: 'text', x: 240, y: 118, text: '알갱이는 얼마나 클까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"지층을 이루는 바위를 깨뜨려 보면 무엇으로 되어 있을까요?" 지층 모형에서 쓴 자갈, 모래, 진흙을 떠올리게 한다. "자갈, 모래, 진흙 같은 것이 쌓여 굳어진 암석을 퇴적암이라고 해요. 오늘은 퇴적암 세 가지를 알갱이의 크기로 갈라 봐요." 시료를 만져 본 학생이 "매끄러우니까 이암"처럼 느낌만 말하면 "알갱이는 보였나요?"라고 되묻는다.',
          student: '지층 모형에 쓴 자갈, 모래, 진흙을 떠올려 봐요. 이것이 굳으면 어떤 바위가 될까요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '굳으면?', slots: [{ id: '모래', label: '모래가 굳으면' }], cards: ['사암', '이암'] }, sequence: [{ match: { 모래: '사암' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 쌓인 알갱이와 퇴적암 잇기', minutes: 9, tool: 'mindmap',
              task: '쌓인 알갱이(퇴적물)와 그것이 굳어서 된 퇴적암 카드를 이어요.',
              teacher: '"모래가 굳으면 사암, 진흙이 굳으면 이암이에요. 자갈이 굳으면?" 셋을 이은 뒤 "세 암석을 가르는 기준은 무엇이었나요?"를 묻는다. 색이나 무게를 기준으로 말하면 같은 사암도 색이 여러 가지라는 사진을 보여 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '쌓인 알갱이가 굳어서 된 퇴적암을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '퇴적물 → 퇴적암', slots: [{ id: '진흙', label: '진흙' }, { id: '모래', label: '모래' }, { id: '자갈', label: '자갈과 모래' }], cards: ['이암', '사암', '역암'] },
                  target: { match: { 진흙: '이암', 모래: '사암', 자갈: '역암' } }, difficulty: 0.1 },
                { prompt: '퇴적암 이름에 그 암석을 이루는 주된 알갱이를 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '무엇이 굳었을까?', slots: [{ id: '역암', label: '역암' }, { id: '이암', label: '이암' }, { id: '사암', label: '사암' }], cards: ['자갈', '진흙', '모래', '물감'] },
                  target: { match: { 역암: '자갈', 이암: '진흙', 사암: '모래' } }, difficulty: 0.15 },
                { prompt: '퇴적암을 이암·사암·역암으로 나누는 기준을 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '나누는 기준', basket: '기준', cards: ['알갱이의 크기', '암석의 색', '암석의 무게', '암석의 모양'] },
                  target: { pick: ['알갱이의 크기'] }, difficulty: 0.2,
                  predict: { q: '세 암석을 무엇으로 가를까요?', options: ['알갱이 크기', '색', '무게'], answer: 0 },
                  conclude: '이암·사암·역암은 색이나 무게가 아니라 알갱이의 크기로 나눠요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 관찰 기록으로 암석 이름 붙이기', minutes: 18, tool: 'matter',
              task: '암석 카드의 관찰 기록(알갱이 크기)을 읽고, 이암·사암·역암 칸에 넣어요. 카드를 누를 때마다 다음 칸으로 가요.',
              teacher: '"이름을 붙인 근거가 무엇인지 카드의 말로 대 볼까요?" 매끄럽다는 느낌만 보고 이암에 넣는 학생에게 "알갱이 크기는 카드 어디에 적혀 있나요?"라고 묻는다. 활동이 끝나면 모둠에 실제 시료 세 개를 나눠 주고 돋보기로 같은 방법을 써 보게 한다(관찰 방법은 8차시에서 더 다룬다).',
              levels: { easy: { mode: 'sort' }, base: { mode: 'sort' }, challenge: { mode: 'sort' } },
              items: [
                { prompt: '암석 가·나·다의 관찰 기록을 읽고 알맞은 이름 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 'ga', name: '암석 가', props: ['알갱이가 너무 작아 보이지 않아요'] },
                    { id: 'na', name: '암석 나', props: ['콩만 한 자갈이 박혀 있어요'] },
                    { id: 'da', name: '암석 다', props: ['모래 알갱이가 보여요'] }] },
                  target: { bins: { ga: 0, na: 2, da: 1 } }, difficulty: 0.1,
                  hints: ['알갱이의 크기를 적은 말을 찾아 진흙·모래·자갈 가운데 어느 것과 비슷한지 견주어 봐요.'] },
                { prompt: '모둠이 관찰한 네 암석을 알맞은 이름 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 'r1', name: '암석 1', props: ['둥근 자갈과 모래가 섞였어요'] },
                    { id: 'r2', name: '암석 2', props: ['깨알만 한 알갱이가 고르게 보여요'] },
                    { id: 'r3', name: '암석 3', props: ['돋보기로도 알갱이가 거의 안 보여요'] },
                    { id: 'r4', name: '암석 4', props: ['손가락 마디만 한 자갈이 많아요'] }] },
                  target: { bins: { r1: 2, r2: 1, r3: 0, r4: 2 } }, difficulty: 0.2,
                  hints: ['알갱이가 맨눈으로 보이는지, 보인다면 모래만 한지 그보다 큰지 차례로 따져 봐요.'] },
                { prompt: '느낌과 알갱이 크기가 함께 적힌 기록이에요. 알갱이 크기를 근거로 이름 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 'k1', name: '암석 ㄱ', props: ['겉이 닳아 매끄러워요', '모래 알갱이가 보여요'] },
                    { id: 'k2', name: '암석 ㄴ', props: ['손에 고운 가루가 묻어요', '알갱이가 안 보여요'] },
                    { id: 'k3', name: '암석 ㄷ', props: ['울퉁불퉁해요', '자갈이 박혀 있어요'] }] },
                  target: { bins: { k1: 1, k2: 0, k3: 2 } }, difficulty: 0.3,
                  hints: ['만졌을 때의 느낌보다 알갱이의 크기를 적은 말을 먼저 봐요.'],
                  predict: { q: '겉이 매끄러운 암석 ㄱ은 무엇일까요?', options: ['이암', '사암', '역암'], answer: 1 },
                  conclude: '겉이 닳아 매끄러워도 모래 알갱이가 보이면 사암이에요. 느낌보다 알갱이 크기가 기준이에요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"오늘 이름을 붙인 근거를 한 문장으로 말해 볼까요?" (알갱이가 작으면 이암, 모래만 하면 사암, 자갈이 섞이면 역암.) 출구 질문에서 \'매끄러우니까 이암\'처럼 느낌만 쓴 학생은 다음 시간에 돋보기로 알갱이를 다시 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'matter', options: { mode: 'sort', bins: ['이암', '사암', '역암'], cards: [{ id: 'x1', name: '시료 A', props: ['모래만 한 알갱이가 빽빽해요'] }, { id: 'x2', name: '시료 B', props: ['밤톨만 한 자갈이 보여요'] }, { id: 'x3', name: '시료 C', props: ['알갱이가 보이지 않을 만큼 고와요'] }] }, prompt: '시료 A·B·C의 관찰 기록을 읽고 알맞은 이름 칸에 넣어 보세요.', target: { bins: { x1: 1, x2: 2, x3: 0 } }, difficulty: 0.15 },
            { type: 'choice', prompt: '자갈이 박혀 있는 퇴적암의 이름은 무엇인가요?', options: ['이암', '사암', '역암'], answer: 2, difficulty: 0.1, explain: '자갈처럼 큰 알갱이가 섞여 굳은 퇴적암은 역암이에요.' },
            { type: 'choice', prompt: '민지가 "이 암석은 매끄러우니까 이암이야."라고 했어요. 더 확인해야 할 것은 무엇인가요?', options: ['암석의 무게', '알갱이의 크기', '암석의 색'], answer: 1, difficulty: 0.25, explain: '겉이 닳아 매끄러운 사암도 있어요. 알갱이의 크기를 확인해야 해요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '퇴적암 가르기',
        items: [
          { type: 'figure', wide: true, prompt: '관찰 기록을 읽고 암석 이름을 칸에 쓰세요.', tool: 'matter', options: { mode: 'sort', bins: ['이암', '사암', '역암'] }, figures: [{ options: { cards: [{ id: 'p1', name: '암석 ①', props: ['자갈이 박혀 있어요'] }, { id: 'p2', name: '암석 ②', props: ['알갱이가 안 보여요'] }, { id: 'p3', name: '암석 ③', props: ['모래 알갱이가 보여요'] }] }, caption: '① (      )  ② (      )  ③ (      )' }], answer: '① 역암, ② 이암, ③ 사암' },
          { type: 'table', prompt: '세 퇴적암을 정리하세요.', columns: ['암석', '주된 알갱이', '알갱이 크기'], cells: [['이암', '', ''], ['사암', '', ''], ['역암', '', '']], answer: '이암 — 진흙, 아주 작음 / 사암 — 모래, 중간 / 역암 — 자갈과 모래, 큼' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '자갈, 모래, 진흙 등이 쌓여 굳어진 암석을 ___이라고 합니다. 퇴적암은 ___의 크기에 따라 이암, 사암, 역암으로 나눕니다.', answer: '퇴적암, 알갱이' },
          { type: 'short', prompt: '"매끄러우니까 이암이다."라는 말이 틀릴 수 있는 까닭을 써 보세요.', answer: '겉이 닳아 매끄러운 사암도 있으므로 만진 느낌이 아니라 알갱이의 크기를 확인해야 한다.' },
        ],
        easy: {
          note: '알갱이가 안 보이면 이암, 모래만 하면 사암, 자갈이 섞이면 역암이에요.',
          items: [
            { type: 'choice', prompt: '모래가 굳어서 된 암석에 ○ 하세요.', options: ['이암', '사암', '역암'], answer: '사암' },
            { type: 'choice', prompt: '진흙이 굳어서 된 암석에 ○ 하세요.', options: ['이암', '역암'], answer: '이암' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '자갈이 섞여 굳은 암석은 ___이에요.', answer: '역암' },
            { type: 'draw', prompt: '역암을 그려 보세요. 자갈을 크게 그려요.' },
          ],
        },
      },
      differentiation: {
        easy: '퇴적물과 암석 잇기에서 맞는 칸에 초록 테두리가 생겨요. 암석 카드는 알갱이 크기만 적혀 있어요.',
        base: '네 암석 가운데 역암이 둘이에요. 칸마다 한 장씩이라고 생각하지 않아요.',
        challenge: '느낌과 알갱이 크기가 함께 적힌 카드에서 알갱이 크기를 골라 근거로 써요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 손으로 만진 느낌만으로 이름을 정한다 → 겉이 닳아 매끄러운 사암을 예로 들고, 알갱이 크기를 먼저 보게 한다. ② 색으로 나눈다 → 같은 사암도 색이 여러 가지다. ③ 역암은 자갈만으로 된다고 생각한다 → 자갈 사이를 모래·진흙이 채우고 있다. 알갱이 크기는 대략 진흙(아주 작아 맨눈으로 안 보임) < 모래 < 자갈(약 2 mm보다 큼)이다.',
    }),

    // ───────────────────────── 6차시 (practice) ─────────────────────────
    L(6, {
      title: '모래가 사암이 되기까지 차례 놓고 모형과 견주기',
      objective: '퇴적물이 쌓이고 눌려 굳어 퇴적암이 되는 차례를 늘어놓고, 퇴적암 모형의 재료와 과정을 실제 퇴적암과 견주어 말할 수 있다.',
      standards: ['[6과01-02]'],
      safety: ['물풀이나 모래가 눈에 들어가지 않게 하고, 들어가면 비비지 말고 물로 씻어요.', '모래는 책상 위 쟁반 안에서만 다루고, 끝나면 손을 씻어요.'],
      illustration: {
        prompt: P('a river carrying sand grains down to a calm sea floor where layers of sand pile up and press into a block of sandstone, shown as a cross section'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 64, y: 54, s: 0.7 }, { motif: 'cloud', x: 300, y: 44 }, { motif: 'mountain', x: 110, y: 190, s: 1.2 },
          { motif: 'wave', y: 214 }, { motif: 'bird', x: 380, y: 76 },
          { motif: 'text', x: 280, y: 128, text: '모래가 바위가 되려면?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '바닷가 모래사장 사진과 사암 사진을 나란히 띄운다. "모래사장의 모래는 손으로 쥐면 흘러내려요. 그런데 사암은 단단해요. 모래가 어떻게 단단한 바위가 되었을까요?" 학생 생각을 칠판에 적어 둔다. "햇볕에 말라서"라는 대답이 나오면 바닷가 모래는 아무리 말라도 바위가 되지 않는다는 것을 짚고, 오늘 차례를 찾아본 뒤 다시 견준다.',
          student: '모래사장의 모래와 단단한 사암을 견주어 봐요. 모래가 어떻게 바위가 되었을까요?',
          demo: { tool: 'timeline', options: { shuffle: false, axis: ['먼저', '나중'], cards: [{ id: '운반', text: '강물이 모래를 옮겨요' }, { id: '쌓임', text: '바다 바닥에 쌓여요' }, { id: '굳음', text: '눌리고 굳어요' }] }, sequence: [{ order: ['운반', '쌓임', '굳음'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 퇴적암이 되는 차례 놓기', minutes: 9, tool: 'timeline',
              task: '퇴적암이 만들어지는 장면 카드를 먼저 일어난 일부터 띠 왼쪽에 놓아요.',
              teacher: '"위에 계속 쌓이면 아래에 있는 모래는 어떤 힘을 받을까요?" 손바닥 위에 책을 한 권씩 올려 보게 하며 누르는 힘을 느끼게 한다. \'굳는다\'를 \'마른다\'로 말하는 학생에게 알갱이 사이를 다른 물질이 채워 붙인다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '모래가 사암이 되는 차례대로 카드를 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '운반', text: '강물이 모래를 옮겨요' }, { id: '쌓임', text: '모래가 바다 바닥에 쌓여요' }, { id: '누름', text: '위에 쌓인 것들이 눌러요' }, { id: '굳음', text: '알갱이가 붙어 굳어요' }] },
                  target: { order: ['운반', '쌓임', '누름', '굳음'] }, difficulty: 0.15 },
                { prompt: '진흙이 이암이 되는 차례대로 카드를 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], cards: [{ id: '흙탕물', text: '흙탕물이 호수로 흘러들어요' }, { id: '가라앉음', text: '고운 진흙이 천천히 가라앉아요' }, { id: '두꺼워짐', text: '진흙층이 점점 두꺼워져요' }, { id: '빈틈', text: '눌려서 빈틈이 줄어들어요' }, { id: '이암', text: '단단한 이암이 돼요' }] },
                  target: { order: ['흙탕물', '가라앉음', '두꺼워짐', '빈틈', '이암'] }, difficulty: 0.2 },
                { prompt: '퇴적암이 되는 일과 관계없는 카드가 하나 섞였어요. 그 카드는 빼고 차례대로 놓아 보세요.',
                  toolOptions: { axis: ['먼저', '나중'], slots: 4, cards: [{ id: '운반', text: '물이 자갈과 모래를 옮겨요' }, { id: '쌓임', text: '자갈과 모래가 쌓여요' }, { id: '햇볕', text: '햇볕에 바싹 말라요', why: '말리기만 해서는 알갱이가 붙지 않아요.' }, { id: '누름', text: '오랫동안 눌려요' }, { id: '역암', text: '굳어서 역암이 돼요' }] },
                  target: { order: ['운반', '쌓임', '누름', '역암'] }, difficulty: 0.3,
                  conclude: '퇴적물은 위에 쌓인 것들에 눌리고, 알갱이 사이가 붙어 오랜 시간에 걸쳐 굳어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 퇴적암 모형과 실제 견주기', minutes: 10, tool: 'mindmap',
              task: '모래에 물풀을 섞어 종이컵에 눌러 담고 하루 말리는 퇴적암 모형이에요. 모형의 재료·과정이 실제의 무엇과 같은지 이어요.',
              teacher: '실제로 모래에 물풀을 섞어 종이컵에 눌러 담는 모습을 보여 주거나 모둠별로 만들게 한다(다음 시간에 꺼내 본다). "물풀은 실제 퇴적암에서 무엇과 같을까요?" 하루 말린 것을 "실제로도 하루면 된다"로 생각하는 학생에게 실제는 아주 오랜 시간이 걸린다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '모형의 재료와 과정이 실제 퇴적암의 무엇과 같은지 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '모형 = 실제', slots: [{ id: '모래', label: '모래' }, { id: '물풀', label: '물풀' }, { id: '누르기', label: '손으로 누르기' }],
                    cards: ['쌓인 퇴적물', '알갱이를 붙이는 물질', '위에 쌓인 것들의 무게'] },
                  target: { match: { 모래: '쌓인 퇴적물', 물풀: '알갱이를 붙이는 물질', 누르기: '위에 쌓인 것들의 무게' } }, difficulty: 0.2 },
                { prompt: '빈칸에 알맞은 카드를 넣어 모형과 실제를 견주는 문장을 완성해 보세요.',
                  toolOptions: { mode: 'fill', topic: '모형과 실제', cards: ['하루', '아주 오랜 시간', '물풀', '햇볕'], slots: [{ id: 'f1', label: '모형은 ___ 말려서 굳혀요.' }, { id: 'f2', label: '실제 퇴적암은 ___에 걸쳐 굳어요.' }] },
                  target: { fill: { f1: '하루', f2: '아주 오랜 시간' } }, difficulty: 0.2 },
                { prompt: '퇴적암 모형이 실제 퇴적암과 다른 점만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '다른 점', basket: '다른 점', cards: ['짧은 시간에 굳혀요', '사람이 손으로 눌러요', '알갱이가 서로 붙어 있어요', '모래 알갱이로 되어 있어요'] },
                  target: { pick: ['짧은 시간에 굳혀요', '사람이 손으로 눌러요'] }, difficulty: 0.25,
                  conclude: '모형과 실제 모두 알갱이가 붙어 굳지만, 실제는 위에 쌓인 무게로 아주 오랜 시간 동안 굳어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 쌓인 곳을 보고 될 암석 정하기', minutes: 8, tool: 'matter',
              task: '퇴적물이 쌓이는 곳이나 모둠이 만든 모형의 재료를 읽고, 그것이 굳으면 어떤 퇴적암이 될지 이암·사암·역암 칸에 넣어요.',
              teacher: '"물살이 세게 흐르는 곳과 물이 거의 멈춘 곳 가운데, 고운 진흙이 가라앉을 수 있는 곳은 어디일까요?" 흙탕물을 컵에 담아 흔든 뒤 세워 두면 무거운 알갱이가 먼저, 고운 진흙이 나중에 가라앉는 것을 보여 준다. 둘째 문항은 오늘 모둠이 만든 모형을 떠올리며 하게 한다. "강 상류에는 진흙도 흘러오는데 왜 역암이 될까요?"라고 물어, 물살이 세면 고운 알갱이는 쓸려 내려간다는 것을 짚는다.',
              levels: { easy: { mode: 'sort' }, base: { mode: 'sort' }, challenge: { mode: 'sort' } },
              items: [
                { prompt: '세 곳에 쌓이는 퇴적물을 읽고, 그것이 굳으면 될 암석 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 't1', name: '잔잔한 호수 바닥', props: ['고운 진흙이 천천히 가라앉아요'] },
                    { id: 't2', name: '산골짜기 강바닥', props: ['둥근 자갈과 모래가 쌓여요'] },
                    { id: 't3', name: '바닷가 얕은 바닥', props: ['모래가 두껍게 쌓여요'] }] },
                  target: { bins: { t1: 0, t2: 2, t3: 1 } }, difficulty: 0.15,
                  hints: ['쌓이는 것이 진흙·모래·자갈 가운데 무엇인지 먼저 찾아요.'] },
                { prompt: '세 모둠이 만든 퇴적암 모형이에요. 넣은 재료를 보고 어떤 퇴적암을 닮았는지 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 'g1', name: '1모둠 모형', props: ['작은 자갈과 모래에 물풀을 섞었어요'] },
                    { id: 'g2', name: '2모둠 모형', props: ['고운 흙가루에 물풀을 섞었어요'] },
                    { id: 'g3', name: '3모둠 모형', props: ['모래에 물풀을 섞었어요'] }] },
                  target: { bins: { g1: 2, g2: 0, g3: 1 } }, difficulty: 0.2,
                  hints: ['물풀은 붙이는 일만 해요. 섞은 알갱이가 무엇인지만 보고 정해요.'] },
                { prompt: '강물이 산에서 바다로 흘러가요. 물살을 읽고 곳마다 쌓여 굳을 암석 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 'r1', name: '산골짜기', props: ['물살이 아주 세요'] },
                    { id: 'r2', name: '강이 바다와 만나는 곳', props: ['물살이 느려져요'] },
                    { id: 'r3', name: '먼 바다 깊은 바닥', props: ['물이 거의 움직이지 않아요'] },
                    { id: 'r4', name: '넓은 강의 가운데', props: ['물살이 조금 느려져요', '자갈은 거의 없어요'] }] },
                  target: { bins: { r1: 2, r2: 1, r3: 0, r4: 1 } }, difficulty: 0.35,
                  hints: ['물살이 세면 작은 알갱이는 쓸려 가고 큰 알갱이만 남아요. 물이 잔잔할수록 더 작은 알갱이까지 가라앉아요.'],
                  predict: { q: '물이 거의 움직이지 않는 먼 바다 깊은 바닥에는 어떤 알갱이가 쌓일까요?', options: ['자갈', '모래', '고운 진흙'], answer: 2 },
                  conclude: '물살이 센 곳에는 자갈이 쌓여 역암이, 느린 곳에는 모래가 쌓여 사암이, 잔잔한 곳에는 진흙이 쌓여 이암이 돼요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '도입에서 칠판에 적은 생각("햇볕에 말라서" 등)을 다시 읽고 "오늘 찾은 차례와 무엇이 다른가요?"라고 묻는다. 쌓임 → 눌림 → 알갱이가 붙어 굳음의 세 낱말로 한 문장을 만들게 한다. 모둠이 만든 퇴적암 모형은 하루 말려 다음 시간에 꺼내 본다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { axis: ['먼저', '나중'], cards: [{ id: 'a', text: '조약돌과 모래가 쌓여요' }, { id: 'b', text: '그 위에 또 쌓여 눌려요' }, { id: 'c', text: '알갱이 사이가 붙어요' }, { id: 'd', text: '역암이 돼요' }] }, prompt: '조약돌이 역암이 되는 차례대로 카드를 놓아 보세요.', target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '퇴적암 모형에서 물풀이 하는 일은 실제 퇴적암에서 무엇과 같나요?', options: ['알갱이를 옮기는 강물', '알갱이 사이를 붙이는 물질', '위에서 누르는 무게'], answer: 1, difficulty: 0.2, explain: '물풀은 모래 알갱이를 서로 붙여 굳게 해요. 실제에서는 알갱이 사이를 채우는 물질이 그 일을 해요.' },
            { type: 'choice', prompt: '모래사장의 모래가 그대로 햇볕에 마르면 어떻게 될까요?', options: ['곧 사암이 돼요', '흩어지는 모래 그대로예요', '이암이 돼요'], answer: 1, difficulty: 0.25, explain: '모래가 사암이 되려면 쌓이고 눌리고 붙는 데 아주 오랜 시간이 걸려요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '퇴적암이 되기까지',
        items: [
          { type: 'figure', wide: true, prompt: '모래가 사암이 되는 차례예요. 띠 위 칸에 알맞은 말을 쓰세요.', tool: 'timeline', figures: [{ options: { printCards: false, axis: ['먼저', '나중'], slots: 4, cards: ['보기'] }, caption: '' }], answer: '옮겨짐 → 쌓임 → 눌림 → 알갱이가 붙어 굳음' },
          { type: 'table', prompt: '퇴적암 모형과 실제 퇴적암을 견주어 표를 채우세요.', columns: ['견줄 점', '퇴적암 모형', '실제 퇴적암'], cells: [['알갱이', '모래', ''], ['붙이는 것', '', ''], ['누르는 것', '', ''], ['걸리는 시간', '', '']], answer: '실제: 퇴적물 / 붙이는 것 모형 물풀·실제 알갱이 사이를 채우는 물질 / 누르는 것 모형 손·실제 위에 쌓인 것의 무게 / 시간 모형 하루·실제 아주 오랜 시간' },
          { type: 'choice', prompt: '진흙이 굳어서 된 퇴적암에 ○ 하세요.', options: ['이암', '사암', '역암'], answer: '이암' },
          { type: 'short', prompt: '"모래는 햇볕에 마르면 사암이 된다."는 말을 바르게 고쳐 써 보세요.', answer: '모래가 쌓이고 위에 쌓인 것에 눌리며 알갱이 사이가 붙어 오랜 시간에 걸쳐 굳으면 사암이 된다.' },
        ],
        easy: {
          note: '쌓여요 → 눌려요 → 붙어 굳어요. 아주 오랜 시간이 걸려요.',
          items: [
            { type: 'choice', prompt: '모래가 굳어서 된 암석에 ○ 하세요.', options: ['이암', '사암'], answer: '사암' },
            { type: 'choice', prompt: '퇴적암 모형에서 물풀이 하는 일에 ○ 하세요.', options: ['알갱이를 붙여요', '알갱이를 옮겨요'], answer: '알갱이를 붙여요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '퇴적물이 쌓이고 ___ 굳으면 퇴적암이 돼요.', answer: '눌려' },
            { type: 'draw', prompt: '모래가 바다 바닥에 층층이 쌓인 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 초록 테두리가 생기고, 차례 카드는 네 장이에요.',
        base: '다섯 장의 차례를 놓고, 모형과 실제를 문장으로 견주어요.',
        challenge: '관계없는 카드(햇볕에 마름)를 스스로 빼고, 물살의 세기만 보고 그곳에 쌓여 굳을 암석을 정해요.',
      },
      teacherNotes: '물살과 알갱이: 물살이 셀수록 큰 알갱이만 남고, 잔잔할수록 고운 진흙까지 가라앉는다(교과서 수준에서는 "센 곳=자갈, 느린 곳=모래, 잔잔한 곳=진흙"까지). 퇴적암 모형(모둠): 모래 한 컵, 물에 갠 물풀, 종이컵, 나무 막대. 모래와 물풀을 섞어 종이컵에 눌러 담고 하루 이상 말린 뒤 컵을 찢어 꺼낸다. 자주 보이는 어려움: ① 퇴적암이 햇볕에 말라 생긴다고 생각한다 → 쌓임·눌림·붙음의 차례를 짚는다. ② 모형처럼 실제도 하루면 된다고 생각한다. ③ 색이 다르면 다른 암석이라고 생각한다 → 같은 이암도 검은빛·잿빛 등 여러 색이다.',
    }),

    // ───────────────────────── 7차시 (core, chart) ─────────────────────────
    L(7, {
      title: '퇴적암 관찰 결과를 표·그래프로 정리하기',
      objective: '세 퇴적암을 알갱이가 큰 차례로 늘어놓고, 관찰 결과를 표와 막대그래프로 정리해 나눈 기준(알갱이 크기)을 설명할 수 있다.',
      standards: ['[6과01-02]'],
      safety: ['돋보기로 해를 보지 않아요.', '시료의 날카로운 깨진 모서리는 손가락으로 문지르지 않아요.'],
      illustration: {
        prompt: P('a classroom table chart with three columns for mudstone, sandstone and conglomerate, rock samples lined up from the biggest grains to the smallest, and a paper bar graph pinned above'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 216 },
          { motif: 'star', x: 140, y: 112, color: 'lavender' }, { motif: 'star', x: 240, y: 100, color: 'buttercup' }, { motif: 'star', x: 340, y: 112, color: 'peach' },
          { motif: 'text', x: 240, y: 168, text: '기준이 보이게 정리해요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '지난 시간 만든 퇴적암 모형을 꺼내 보게 하고, 두 모둠의 정리 표를 띄운다. 한 표에는 암석 이름만, 다른 표에는 이름·알갱이 크기·느낌이 있다. "어느 표를 보면 다른 사람도 같은 이름을 붙일 수 있을까요?" 이름만 적은 표는 나눈 기준이 보이지 않는다는 것을 짚고, 오늘은 기준이 보이게 정리한다고 알린다.',
          student: '두 모둠의 표를 견주어 봐요. 어느 표가 나눈 까닭을 더 잘 보여 주나요?',
          demo: { tool: 'timeline', options: { shuffle: false, axis: ['알갱이가 큼', '알갱이가 작음'], cards: ['역암', '사암', '이암'] }, sequence: [{ order: ['역암', '사암', '이암'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 알갱이 크기 차례로 늘어놓기', minutes: 8, tool: 'timeline',
              task: '퇴적암이나 시료 카드를 띠의 양 끝 말에 맞추어 알갱이 크기 차례로 놓아요. 띠 끝의 말을 먼저 읽어요.',
              teacher: '"띠의 왼쪽 끝은 무엇이라고 쓰여 있나요?" 문항마다 띠 방향이 바뀌니 먼저 읽게 한다. 셋째 문항에서 사암 둘의 차례를 고민하면 "알갱이 크기가 같은 무리끼리는 어느 쪽이 먼저여도 돼요"라고 말해 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '세 퇴적암을 알갱이가 큰 것부터 띠에 놓아 보세요.',
                  toolOptions: { axis: ['알갱이가 큼', '알갱이가 작음'], cards: [{ id: '이암', text: '이암' }, { id: '역암', text: '역암' }, { id: '사암', text: '사암' }] },
                  target: { order: ['역암', '사암', '이암'] }, difficulty: 0.1,
                  hints: ['띠 양 끝에 쓰인 말을 먼저 읽어요. 그다음 세 암석을 이루는 알갱이가 진흙·모래·자갈 가운데 무엇인지 떠올려 견주어요.'] },
                { prompt: '시료의 관찰 기록을 읽고, 알갱이가 작은 것부터 띠에 놓아 보세요.',
                  toolOptions: { axis: ['알갱이가 작음', '알갱이가 큼'], cards: [{ id: '가', text: '시료 가', sub: '모래알이 보여요' }, { id: '나', text: '시료 나', sub: '알갱이가 안 보여요' }, { id: '다', text: '시료 다', sub: '자갈이 박혔어요' }] },
                  target: { order: ['나', '가', '다'] }, difficulty: 0.2,
                  hints: ['띠 양 끝에 쓰인 말을 먼저 읽어요. 그다음 카드마다 알갱이가 진흙·모래·자갈 가운데 무엇만 한지 찾아 견주어요.'] },
                { prompt: '네 시료를 알갱이가 작은 것부터 놓아 보세요. 알갱이 크기가 같은 무리는 어느 쪽이 먼저여도 돼요.',
                  toolOptions: { axis: ['알갱이가 작음', '알갱이가 큼'], cards: [{ id: '1', text: '시료 1', sub: '굵은 모래알' }, { id: '2', text: '시료 2', sub: '조약돌이 박힘' }, { id: '3', text: '시료 3', sub: '고운 모래알' }, { id: '4', text: '시료 4', sub: '알갱이 안 보임' }] },
                  target: { order: ['4', ['1', '3'], '2'] }, difficulty: 0.3,
                  hints: ['띠 양 끝에 쓰인 말을 먼저 읽어요. 굵은 모래알과 고운 모래알은 둘 다 모래라는 것을 떠올리고, 진흙·모래·자갈 크기와 견주어요.'],
                  conclude: '이암 → 사암 → 역암 차례로 알갱이가 커져요. 이 차례가 세 암석을 나누는 기준이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 모은 시료 수를 그래프로', minutes: 9, tool: 'chart',
              task: '우리 반이 모은 시료를 나눈 결과 표를 보고 그래프를 완성하거나 읽어요.',
              teacher: '"이 그래프만 보고도 이암·사암·역암으로 나눈 기준을 알 수 있을까요?" 그래프는 개수를 보여 줄 뿐 기준은 표나 설명에 함께 적어야 한다는 것을 짚는다. 그림그래프에서 큰 그림 하나가 몇 개인지 먼저 확인하게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '우리 반이 모은 시료를 나눈 결과예요. 표를 보고 막대그래프를 완성하세요.',
                  toolOptions: { type: 'bar', title: '우리 반이 모은 퇴적암', data: [['이암', 7], ['사암', 11], ['역암', 5]], unit: '개', xLabel: '암석', yLabel: '시료 수', scale: 1, given: [0] },
                  target: { build: true }, difficulty: 0.15 },
                { prompt: '옆 반이 모은 시료예요. 표를 보고 그림그래프를 완성하세요.',
                  toolOptions: { type: 'picture', title: '옆 반이 모은 퇴적암', data: [['이암', 13], ['사암', 21], ['역암', 8]], unit: '개', xLabel: '암석', yLabel: '시료 수', icons: [{ value: 10, name: '10개' }, { value: 1, name: '1개' }], icon: 'circle', given: [0] },
                  target: { build: true }, difficulty: 0.2 },
                { prompt: '그래프를 보고 가장 적게 모은 퇴적암을 골라 보세요.',
                  toolOptions: { type: 'bar', mode: 'read', title: '3모둠이 모은 퇴적암', data: [['이암', 6], ['사암', 4], ['역암', 9]], unit: '개', xLabel: '암석', scale: 1, choices: ['이암', '사암', '역암'], question: '가장 적게 모은 암석은?', why: ['이암 막대는 사암보다 높아요.', '', '역암 막대가 가장 높아요.'], explain: '사암 막대가 4개로 가장 낮아요.' },
                  target: { pick: 1 }, difficulty: 0.15 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 알갱이 지름 그래프로 이름 붙이기', minutes: 10, tool: 'chart',
              task: '돋보기와 자로 잰 가장 큰 알갱이의 지름 그래프예요. 자갈은 지름이 2 mm보다 커요. 그래프를 읽고 답을 골라요.',
              teacher: '"자갈과 모래를 가르는 기준이 2 mm라면, 이 그래프에서 어느 시료가 역암일까요?" 기준선을 그래프에 손가락으로 그어 보게 한다. 이암은 알갱이가 너무 작아 자로 잴 수 없어 그래프에 넣지 않았다는 것도 짚는다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '사암으로 볼 수 있는 시료를 골라 보세요. 자갈은 지름이 2 mm보다 커요.',
                  toolOptions: { type: 'bar', mode: 'read', title: '가장 큰 알갱이의 지름', data: [['시료 가', 6], ['시료 나', 1], ['시료 다', 12]], unit: 'mm', xLabel: '시료', scale: 1, choices: ['시료 가', '시료 나', '시료 다'], question: '사암으로 볼 수 있는 시료는?', why: ['6 mm 알갱이는 자갈이에요.', '', '12 mm 알갱이는 자갈이에요.'], explain: '시료 나의 알갱이는 1 mm로 2 mm보다 작은 모래예요.' },
                  target: { pick: 1 }, difficulty: 0.2 },
                { prompt: '알갱이가 가장 큰 시료를 골라 보세요.',
                  toolOptions: { type: 'bar', mode: 'read', title: '가장 큰 알갱이의 지름', data: [['시료 라', 9], ['시료 마', 15], ['시료 바', 2]], unit: 'mm', xLabel: '시료', scale: 1, choices: ['시료 라', '시료 마', '시료 바'], question: '알갱이가 가장 큰 시료는?', explain: '시료 마의 막대가 15 mm로 가장 높아요.' },
                  target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '시료 사의 가장 큰 알갱이는 지름이 몇 mm인가요? 그래프를 읽어 답을 써 보세요.',
                  toolOptions: { type: 'bar', mode: 'read', title: '가장 큰 알갱이의 지름', data: [['시료 사', 7], ['시료 아', 3], ['시료 자', 1]], unit: 'mm', xLabel: '시료', scale: 1, question: '시료 사의 알갱이 지름은 몇 mm?' },
                  target: { value: 7 }, difficulty: 0.25,
                  conclude: '그래프에 기준(2 mm)을 함께 보면 어느 시료가 역암이고 어느 시료가 사암인지 근거를 들어 말할 수 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"오늘 만든 표에서 이름 말고 꼭 있어야 하는 칸은 무엇이었나요?" 알갱이 크기 칸이 나눈 기준이라는 것을 말하게 한다. 출구 질문 2번에서 이름만 적은 표를 고른 학생은 활동지 표를 다시 채우게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', title: '4모둠이 모은 퇴적암', data: [['이암', 5], ['사암', 8], ['역암', 3]], unit: '개', xLabel: '암석', yLabel: '시료 수', scale: 1, given: [0] }, prompt: '4모둠이 모은 시료 표를 보고 막대그래프를 완성하세요.', target: { build: true }, difficulty: 0.15 },
            { type: 'choice', prompt: '퇴적암 정리 표에 꼭 있어야 나눈 기준이 보이는 칸은 무엇인가요?', options: ['암석을 모은 날짜', '알갱이의 크기', '암석의 무게'], answer: 1, difficulty: 0.2, explain: '이암·사암·역암은 알갱이 크기로 나누니, 알갱이 크기 칸이 있어야 기준이 보여요.' },
            { type: 'choice', prompt: '가장 큰 알갱이의 지름이 8 mm인 퇴적암은 무엇일까요? (자갈은 2 mm보다 커요)', options: ['이암', '사암', '역암'], answer: 2, difficulty: 0.25, explain: '8 mm는 2 mm보다 크니 자갈이에요. 자갈이 섞인 퇴적암은 역암이에요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '퇴적암 관찰 정리',
        items: [
          { type: 'table', prompt: '세 퇴적암을 관찰한 결과를 표로 정리하세요.', columns: ['암석', '알갱이 크기', '만졌을 때 느낌', '주된 알갱이'], cells: [['이암', '', '', ''], ['사암', '', '', ''], ['역암', '', '', '']], answer: '이암: 아주 작음·매끄러움·진흙 / 사암: 중간·까끌까끌함·모래 / 역암: 큼·울퉁불퉁함·자갈과 모래' },
          { type: 'draw', prompt: '표를 보고 막대그래프를 그리세요. 가로에 암석 이름, 세로에 시료 수(개)를 쓰고, 한 칸을 1개로 해요. (이암 4개, 사암 6개, 역암 3개)' },
          { type: 'draw', prompt: '세 퇴적암을 알갱이가 큰 차례로 그리고, 그 아래에 이름을 쓰세요.' },
          { type: 'short', prompt: '위 표에서 세 암석을 나눈 기준을 한 문장으로 쓰세요.', answer: '알갱이의 크기에 따라 작으면 이암, 모래만 하면 사암, 자갈이 섞이면 역암으로 나누었다.' },
        ],
        easy: {
          note: '이암(작음) → 사암(중간) → 역암(큼). 표에는 이름과 함께 알갱이 크기를 꼭 써요.',
          items: [
            { type: 'table', prompt: '알갱이 크기 칸을 채우세요.', columns: ['암석', '알갱이 크기(작음·중간·큼)'], cells: [['이암', ''], ['사암', ''], ['역암', '']], answer: '작음, 중간, 큼' },
            { type: 'choice', prompt: '알갱이가 가장 큰 퇴적암에 ○ 하세요.', options: ['이암', '사암', '역암'], answer: '역암' },
            { type: 'choice', prompt: '알갱이가 가장 작은 퇴적암에 ○ 하세요.', options: ['이암', '역암'], answer: '이암' },
            { type: 'draw', prompt: '이암과 역암의 알갱이를 그려 견주어 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 초록 테두리가 생기고, 그래프 막대 끝에 값이 보여요.',
        base: '띠의 방향이 문항마다 바뀌어 양 끝 말을 읽고 놓아요.',
        challenge: '크기가 같은 무리(사암 둘)를 함께 다루고, 2 mm 기준으로 그래프를 읽어 이름을 정해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 표에 암석 이름만 적고 기준(알갱이 크기) 칸을 비운다. ② 띠나 표의 방향(큰 것부터·작은 것부터)을 읽지 않고 놓는다. ③ 그래프의 개수와 알갱이 크기를 헷갈린다 — 활동 2는 개수, 활동 3은 크기 그래프임을 머리말로 짚는다. 2 mm는 자갈과 모래를 가르는 대략의 기준이며, 이암의 알갱이(진흙)는 맨눈으로 보이지 않을 만큼 작다.',
    }),

    // ───────────────────────── 8차시 (core, procedure) ─────────────────────────
    L(8, {
      title: '돋보기로 시료의 깨진 면 보고 차례로 늘어놓기',
      objective: '돋보기로 퇴적암 시료의 깨진 면을 관찰해 알갱이 크기를 견주고, 정한 기준에 따라 작은 것부터 늘어놓을 수 있다.',
      standards: ['[6과01-02]'],
      safety: ['돋보기로 해를 보지 않아요. 눈을 크게 다칠 수 있어요.', '시료를 깨뜨리는 일은 선생님이 보안경을 쓰고 해요. 학생은 깨진 시료만 받아 관찰해요.', '날카로운 깨진 모서리는 손가락으로 문지르지 않아요.'],
      illustration: {
        prompt: P('a child holding a magnifying glass over the broken face of a rock sample, with three rock pieces lined up from fine to coarse grains on a paper tray'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 64, y: 56, s: 0.7 }, { motif: 'cloud', x: 360, y: 48 }, { motif: 'hills', y: 214, colors: ['cream', 'sky', 'lavender'] },
          { motif: 'mountain', x: 150, y: 212, s: 0.7, color: 'peach' }, { motif: 'mountain', x: 240, y: 212, s: 0.85, color: 'buttercup' }, { motif: 'mountain', x: 340, y: 212, s: 1, color: 'lavender' },
          { motif: 'text', x: 240, y: 118, text: '깨진 면을 들여다봐요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 5,
          teacher: '겉에 이끼가 끼어 매끄럽고 거무스름한 시료를 보여 준다. "겉만 보면 무슨 암석 같나요?" 몇이 이암이라고 하면, 미리 깨 둔 같은 시료의 깨진 면을 실물화상기로 확대한다. 모래알이 보이면 "겉면은 비바람에 닳거나 덮여서 속과 다를 수 있어요. 오늘은 깨진 면을 봐요."라고 말한다.',
          student: '겉이 매끄러운 이 암석, 속은 어떨까요? 깨진 면을 함께 봐요.',
          demo: { tool: 'story', options: { shuffle: false, cards: [{ id: '겉', text: '겉면을 봐요' }, { id: '깨진', text: '깨진 면을 돋보기로 봐요' }, { id: '이름', text: '이름을 붙여요' }] }, sequence: [{ order: ['겉', '깨진', '이름'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 28,
          activities: [
            {
              id: 'a1', title: '활동 1. 관찰 차례 정하기', minutes: 8, tool: 'story',
              task: '시료를 관찰하는 차례와 돋보기 쓰는 차례를 장면 칸에 놓아요. 정한 차례대로 실제 시료를 관찰해요.',
              teacher: '"돋보기는 눈 가까이 대고, 시료를 앞뒤로 움직여 또렷하게 맞춰요." 직접 시범을 보인다. 돋보기를 시료에 바짝 대는 학생이 많으니 초점이 맞는 거리를 찾게 한다. 정한 차례대로 모둠 시료를 관찰하고 공책에 기록하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '퇴적암 시료를 관찰하는 차례대로 장면을 놓아 보세요.',
                  toolOptions: { cards: [{ id: '겉', text: '맨눈으로 겉면을 봐요' }, { id: '깨진', text: '돋보기로 깨진 면을 봐요' }, { id: '기록', text: '알갱이 크기를 적어요' }, { id: '이름', text: '기준에 따라 이름을 붙여요' }] },
                  target: { order: ['겉', '깨진', '기록', '이름'] }, difficulty: 0.15 },
                { prompt: '돋보기로 알갱이를 크게 보는 차례대로 장면을 놓아 보세요.',
                  toolOptions: { cards: [{ id: '눈', text: '돋보기를 눈 가까이 대요' }, { id: '시료', text: '시료를 돋보기 아래로 가져와요' }, { id: '움직', text: '시료를 앞뒤로 천천히 움직여요' }, { id: '멈춤', text: '알갱이가 또렷하면 멈춰요' }] },
                  target: { order: ['눈', '시료', '움직', '멈춤'] }, difficulty: 0.2 },
                { prompt: '빠뜨리면 안 되는 일이 있어요. 잘못된 장면은 빼고 관찰 차례대로 놓아 보세요.',
                  toolOptions: { slots: 4, cards: [{ id: '겉', text: '맨눈으로 겉면을 봐요' }, { id: '겉만', text: '겉면만 보고 이름을 정해요', why: '겉면은 닳거나 덮여서 속과 다를 수 있어요.' }, { id: '깨진', text: '돋보기로 깨진 면을 봐요' }, { id: '기록', text: '알갱이 크기를 적어요' }, { id: '이름', text: '기준에 따라 이름을 붙여요' }] },
                  target: { order: ['겉', '깨진', '기록', '이름'] }, difficulty: 0.3,
                  conclude: '겉면은 닳거나 덮여 속과 다를 수 있어요. 깨진 면의 알갱이를 보고 이름을 붙여요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 겉면과 깨진 면이 다른 시료', minutes: 10, tool: 'matter',
              task: '시료 카드에는 겉면과 깨진 면의 관찰이 함께 있어요. 깨진 면의 알갱이를 근거로 이름 칸에 넣어요.',
              teacher: '"두 줄 가운데 어느 줄을 근거로 썼나요?" 겉면 관찰만 보고 이름을 붙이는 학생에게 깨진 면 줄을 소리 내어 읽게 한다. 실물 시료도 같은 방법으로 견주게 한다.',
              levels: { easy: { mode: 'sort' }, base: { mode: 'sort' }, challenge: { mode: 'sort' } },
              items: [
                { prompt: '깨진 면의 알갱이를 보고 세 시료를 이름 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 'q1', name: '시료 ㄱ', props: ['깨진 면: 모래알이 빽빽해요'] },
                    { id: 'q2', name: '시료 ㄴ', props: ['깨진 면: 자갈이 박혔어요'] },
                    { id: 'q3', name: '시료 ㄷ', props: ['깨진 면: 알갱이가 안 보여요'] }] },
                  target: { bins: { q1: 1, q2: 2, q3: 0 } }, difficulty: 0.15,
                  hints: ['깨진 면에서 본 알갱이가 진흙·모래·자갈 가운데 무엇과 같은 크기인지 견주어 봐요.'] },
                { prompt: '겉면과 깨진 면이 달라 보이는 시료예요. 깨진 면을 근거로 이름 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 'w1', name: '시료 1', props: ['겉면: 이끼로 덮여 매끄러워요', '깨진 면: 모래알이 보여요'] },
                    { id: 'w2', name: '시료 2', props: ['겉면: 흙이 묻어 거칠어요', '깨진 면: 알갱이가 안 보여요'] },
                    { id: 'w3', name: '시료 3', props: ['겉면: 매끄럽게 닳았어요', '깨진 면: 조약돌이 박혔어요'] }] },
                  target: { bins: { w1: 1, w2: 0, w3: 2 } }, difficulty: 0.3,
                  hints: ['두 줄 가운데 속을 보여 주는 줄은 어느 것일까요? 그 줄만 보고 판단해요.'],
                  predict: { q: '겉면이 매끄러운 시료 1은 무엇일까요?', options: ['이암', '사암', '역암'], answer: 1 },
                  conclude: '겉면이 매끄러워도 깨진 면에 모래알이 보이면 사암이에요. 이름은 깨진 면의 알갱이로 정해요.' },
                { prompt: '네 시료를 깨진 면을 근거로 이름 칸에 넣어 보세요.',
                  toolOptions: { bins: ['이암', '사암', '역암'], cards: [
                    { id: 'v1', name: '시료 A', props: ['겉면: 붉게 물들었어요', '깨진 면: 고운 모래알'] },
                    { id: 'v2', name: '시료 B', props: ['겉면: 하얗게 바랬어요', '깨진 면: 알갱이가 안 보여요'] },
                    { id: 'v3', name: '시료 C', props: ['겉면: 모래가 붙어 있어요', '깨진 면: 알갱이가 안 보여요'] },
                    { id: 'v4', name: '시료 D', props: ['겉면: 매끈해요', '깨진 면: 콩만 한 자갈'] }] },
                  target: { bins: { v1: 1, v2: 0, v3: 0, v4: 2 } }, difficulty: 0.35,
                  hints: ['겉면 줄은 가리고 깨진 면 줄만 읽어 봐요.'] },
              ],
            },
            {
              id: 'a3', title: '활동 3. 작은 것부터 늘어놓기', minutes: 10, tool: 'timeline',
              task: '관찰 기록을 읽고 알갱이가 작은 시료부터 띠 왼쪽에 놓아요. 실제 시료도 같은 차례로 책상에 늘어놓아요.',
              teacher: '"가장 작은 알갱이는 어느 시료일까요? 무엇을 보고 알았나요?" 띠를 완성한 뒤 모둠 책상에 실제 시료를 같은 차례로 놓게 하고, 옆 모둠과 차례가 같은지 견주게 한다. 다르면 누가 겉면을 보고 놓았는지 서로 확인하게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '세 시료 가운데 겉은 달라도 속이 같은 둘이 있어요. 깨진 면을 근거로 작은 것부터 놓되, 속이 같은 둘은 한 무리로 나란히 놓아 보세요.',
                  toolOptions: { axis: ['알갱이가 작음', '알갱이가 큼'], cards: [{ id: 'x', text: '시료 X', sub: '겉 이끼, 속 모래알' }, { id: 'y', text: '시료 Y', sub: '겉 붉음, 속 모래알' }, { id: 'z', text: '시료 Z', sub: '겉 모래 묻음, 속 알갱이 안 보임' }] },
                  target: { order: ['z', ['x', 'y']] }, difficulty: 0.2,
                  hints: ['띠 양 끝에 쓰인 말을 먼저 읽어요. 카드에서 속(깨진 면)을 적은 말만 보고 알갱이 크기를 견주어요.'] },
                { prompt: '겉면과 깨진 면이 다른 시료예요. 깨진 면을 근거로 작은 것부터 놓아 보세요.',
                  toolOptions: { axis: ['알갱이가 작음', '알갱이가 큼'], cards: [{ id: 'p', text: '시료 P', sub: '겉 매끈, 속 자갈' }, { id: 'q', text: '시료 Q', sub: '겉 거칠, 속 진흙' }, { id: 'r', text: '시료 R', sub: '겉 매끈, 속 모래' }] },
                  target: { order: ['q', 'r', 'p'] }, difficulty: 0.3,
                  hints: ['띠 양 끝에 쓰인 말을 먼저 읽어요. 카드에서 속(깨진 면)을 적은 말만 보고 알갱이 크기를 견주어요.'] },
                { prompt: '다섯 시료를 작은 것부터 놓아 보세요. 같은 무리끼리는 어느 쪽이 먼저여도 돼요.',
                  toolOptions: { axis: ['알갱이가 작음', '알갱이가 큼'], cards: [{ id: 'k1', text: '시료 1', sub: '조약돌' }, { id: 'k2', text: '시료 2', sub: '알갱이 안 보임' }, { id: 'k3', text: '시료 3', sub: '모래알' }, { id: 'k4', text: '시료 4', sub: '알갱이 안 보임' }, { id: 'k5', text: '시료 5', sub: '모래알' }] },
                  target: { order: [['k2', 'k4'], ['k3', 'k5'], 'k1'] }, difficulty: 0.3,
                  hints: ['띠 양 끝에 쓰인 말을 먼저 읽어요. 알갱이 크기가 같은 카드끼리 먼저 묶고, 그 묶음을 진흙·모래·자갈 크기와 견주어요.'],
                  conclude: '알갱이가 작은 것부터 이암 → 사암 → 역암 차례로 늘어놓을 수 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '"오늘 시료 1을 처음에 이암이라고 생각한 사람은 무엇을 보고 그랬나요? 무엇을 보고 바꾸었나요?" 겉면이 아니라 깨진 면을 봐야 하는 까닭을 말하게 한다. 돋보기와 시료를 정해진 통에 되돌리고 손을 씻는다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { axis: ['알갱이가 작음', '알갱이가 큼'], cards: [{ id: 'm', text: '시료 M', sub: '속 모래알' }, { id: 'n', text: '시료 N', sub: '속 조약돌' }, { id: 'o', text: '시료 O', sub: '속 알갱이 안 보임' }] }, prompt: '시료 M·N·O를 알갱이가 작은 것부터 띠에 놓아 보세요.', target: { order: ['o', 'm', 'n'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '겉은 매끄럽고 깨진 면에 모래알이 보이는 시료의 이름은 무엇인가요?', options: ['이암', '사암', '역암'], answer: 1, difficulty: 0.25, explain: '이름은 깨진 면의 알갱이로 정해요. 모래알이 보이면 사암이에요.' },
            { type: 'choice', prompt: '돋보기로 시료를 볼 때 바른 방법은 무엇인가요?', options: ['돋보기를 눈 가까이 대고 시료를 움직여 맞춰요', '돋보기로 해를 비춰 시료를 밝게 해요', '돋보기를 시료에 바짝 붙여요'], answer: 0, difficulty: 0.15, explain: '돋보기는 눈 가까이 대고 시료를 앞뒤로 움직여 또렷하게 맞춰요. 해를 보면 눈을 다쳐요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '시료 관찰 기록',
        items: [
          { type: 'table', prompt: '시료마다 겉면과 깨진 면을 관찰해 기록하세요.', columns: ['시료', '겉면', '깨진 면의 알갱이', '이름'], rows: 3, answer: '이름은 깨진 면의 알갱이 크기를 근거로 적었는지 확인' },
          { type: 'figure', wide: true, prompt: '관찰한 시료를 알갱이가 작은 것부터 띠 위 칸에 쓰세요.', tool: 'timeline', figures: [{ options: { printCards: false, axis: ['알갱이가 작음', '알갱이가 큼'], slots: 3, cards: ['보기'] }, caption: '' }], answer: '이암 → 사암 → 역암 (시료 이름으로 써도 됨)' },
          { type: 'choice', prompt: '퇴적암의 이름을 정할 때 근거로 삼을 곳에 ○ 하세요.', options: ['이끼 낀 겉면', '깨진 면의 알갱이', '시료의 색'], answer: '깨진 면의 알갱이' },
          { type: 'short', prompt: '시료의 겉면만 보고 이름을 정하면 왜 틀릴 수 있는지 써 보세요.', answer: '겉면은 비바람에 닳거나 이끼·흙에 덮여 속의 알갱이와 다르게 보일 수 있기 때문이다.' },
        ],
        easy: {
          note: '돋보기는 눈 가까이! 시료를 움직여 맞춰요. 이름은 깨진 면의 알갱이로 정해요.',
          items: [
            { type: 'choice', prompt: '돋보기로 보지 않아야 하는 것에 ○ 하세요.', options: ['해', '시료'], answer: '해' },
            { type: 'choice', prompt: '깨진 면에 자갈이 보이는 시료에 ○ 하세요.', options: ['이암', '역암'], answer: '역암' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '이름은 ___ 면의 알갱이를 보고 정해요.', answer: '깨진' },
            { type: 'draw', prompt: '돋보기로 본 시료의 알갱이를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 초록 테두리가 생겨요. 시료 카드는 깨진 면 기록만 있어요.',
        base: '겉면과 깨진 면이 함께 적힌 카드에서 근거를 골라요.',
        challenge: '같은 무리가 둘씩 있는 다섯 시료를 늘어놓고, 겉면이 헷갈리게 적힌 시료까지 다뤄요.',
      },
      teacherNotes: '준비물: 모둠마다 이암·사암·역암 시료(가능하면 미리 깨어 둔 것), 돋보기, 쟁반. 시료는 교사가 보안경을 쓰고 천에 싸서 망치로 깬다. 자주 보이는 어려움: ① 겉면만 보고 깨진 면 안쪽 알갱이를 보지 않는다. ② 돋보기를 시료에 바짝 대 초점이 맞지 않는다. ③ 색이 다르면 다른 암석이라 여긴다. 이암을 물에 적시면 진흙 냄새가 나고, 사암은 손톱으로 긁으면 모래알이 떨어지는 경우가 있어 보조 근거로 쓸 수 있다.',
    }),

    // ───────────────────────── 9차시 (core, concept) ─────────────────────────
    L(9, {
      title: '화석인 것을 가르고 화석이 되는 조건 찾기',
      objective: '화석인 것과 아닌 것을 가르고, 생물이 화석이 되려면 어떤 조건이 필요한지 근거를 들어 말할 수 있다.',
      standards: ['[6과01-03]'],
      illustration: {
        prompt: P('a cross section of a sea floor where a shell is being buried under layers of mud and sand, with a fern leaf print and a small trilobite shape hidden in the rock layers below'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 120, y: 46 }, { motif: 'wave', y: 150 },
          { motif: 'hills', y: 232, colors: ['peach', 'buttercup', 'lavender'] }, { motif: 'leaf', x: 160, y: 214, s: 1.2 }, { motif: 'star', x: 320, y: 216, color: 'cream' },
          { motif: 'text', x: 240, y: 104, text: '무엇이 화석일까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '삼엽충 화석, 공룡 발자국 화석, 오래된 토기 사진을 띄운다. "이 셋 가운데 화석이 아닌 것은?" 토기도 오래되었으니 화석이라는 대답이 나오면 "화석은 옛날에 살았던 생물의 몸이나 흔적이 암석에 남은 것이에요. 토기는 생물이었나요?"라고 되묻는다. 발자국처럼 몸이 아닌 흔적도 화석이라는 것을 짚는다.',
          student: '박물관에서 본 화석을 떠올려 봐요. 오래된 것이면 모두 화석일까요?',
          demo: { tool: 'mindmap', options: { mode: 'pick', topic: '화석', basket: '화석', cards: ['바위 속 조개 모양', '옛날 토기'] }, sequence: [{ pick: ['바위 속 조개 모양'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 화석인 것 가르기', minutes: 9, tool: 'mindmap',
              task: '카드를 읽고 화석인 것만 고르거나, 몸이 남은 화석·흔적이 남은 화석·화석이 아님으로 나누어요.',
              teacher: '"생물이었나요? 암석에 남았나요? 아주 오래되었나요?" 세 질문을 칠판에 적고 카드마다 따져 보게 한다. 어제 진흙에 찍힌 강아지 발자국을 화석으로 고른 학생에게 "얼마나 오래되었나요? 암석이 되었나요?"라고 묻는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '화석인 것만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '화석일까?', basket: '화석', cards: [
                    '바위 속 삼엽충 모양', '바위에 찍힌 공룡 발자국', '바위 속 고사리 잎 자국',
                    { id: '토기', text: '옛날 사람이 만든 토기', why: '사람이 만든 물건은 생물이 아니라 화석이 아니에요.' },
                    { id: '동전', text: '땅에서 나온 오래된 동전', why: '오래되었어도 생물의 몸이나 흔적이 아니에요.' }] },
                  target: { pick: ['바위 속 삼엽충 모양', '바위에 찍힌 공룡 발자국', '바위 속 고사리 잎 자국'] }, difficulty: 0.15 },
                { prompt: '카드를 몸이 남은 화석, 흔적이 남은 화석, 화석이 아님으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '어떤 화석?', slots: ['몸이 남은 화석', '흔적이 남은 화석', '화석이 아님'], cards: ['암석 속 물고기 뼈', '암석 속 조개껍데기', '암석에 남은 벌레 기어간 자국', '암석에 찍힌 새 발자국', '어제 진흙에 찍힌 강아지 발자국', '박물관의 옛날 거울'] },
                  target: { sort: { '몸이 남은 화석': ['암석 속 물고기 뼈', '암석 속 조개껍데기'], '흔적이 남은 화석': ['암석에 남은 벌레 기어간 자국', '암석에 찍힌 새 발자국'], '화석이 아님': ['어제 진흙에 찍힌 강아지 발자국', '박물관의 옛날 거울'] } }, difficulty: 0.25 },
                { prompt: '화석인지 따질 때 물어야 할 질문만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '따질 질문', basket: '물어볼 것', cards: [
                    { id: '생물', text: '옛날에 살았던 생물인가?' }, { id: '암석', text: '암석 속에 남아 있나?' }, { id: '오래', text: '아주 오래되었나?' },
                    { id: '값', text: '값비싼 물건인가?', why: '값이 싸든 비싸든 화석인지와는 관계없어요.' },
                    { id: '땅', text: '땅속에서 파냈나?', why: '땅에서 나온 동전처럼, 땅속에서 나왔다고 모두 화석은 아니에요.' },
                    { id: '색', text: '색이 예쁜가?', why: '색은 화석인지 가르는 기준이 아니에요.' }] },
                  target: { pick: ['생물', '암석', '오래'] }, difficulty: 0.3,
                  hints: ['도입에서 본 토기와 삼엽충을 떠올려요. 둘을 가를 수 있는 질문인지 하나씩 대어 봐요.'],
                  predict: { q: '오래된 물건이면 모두 화석일까요?', options: ['네', '아니요'], answer: 1 },
                  conclude: '화석은 아주 옛날에 살았던 생물의 몸이나 흔적이 암석에 남은 것이에요. 사람이 만든 물건은 화석이 아니에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 화석이 되기 쉬운 조건', minutes: 9, tool: 'mindmap',
              task: '생물이 죽은 뒤의 일을 읽고, 화석이 되기 쉬운 경우와 어려운 경우로 나누어요.',
              teacher: '"죽은 물고기가 강가 모래밭 위에 그대로 있으면 어떻게 될까요?" 새나 다른 동물이 먹거나 썩어 없어진다는 대답을 끌어낸다. 그래서 빨리 묻혀야 하고, 뼈·껍데기처럼 단단한 부분이 남기 쉽다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '화석이 되기 쉬운 경우와 어려운 경우로 카드를 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '화석이 될까?', slots: ['되기 쉬워요', '되기 어려워요'], cards: ['죽은 뒤 바로 진흙에 묻혀요', '뼈나 껍데기가 단단해요', '땅 위에 오래 드러나 있어요', '몸이 부드러워 금방 썩어요'] },
                  target: { sort: { '되기 쉬워요': ['죽은 뒤 바로 진흙에 묻혀요', '뼈나 껍데기가 단단해요'], '되기 어려워요': ['땅 위에 오래 드러나 있어요', '몸이 부드러워 금방 썩어요'] } }, difficulty: 0.15 },
                { prompt: '두 생물 가운데 화석이 되기 쉬운 것과 그 까닭을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '왜 쉬울까?', slots: [{ id: 'e1', label: '해파리보다 조개가 쉬워요' }, { id: 'e2', label: '숲 바닥보다 호수 바닥이 쉬워요' }],
                    cards: [{ id: '단단', text: '단단한 껍데기가 있어서' }, { id: '묻힘', text: '진흙에 빨리 묻혀서' }, { id: '크기', text: '몸집이 커서' }] },
                  target: { match: { e1: '단단', e2: '묻힘' } }, difficulty: 0.25 },
                { prompt: '화석이 되기 가장 쉬운 경우만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '가장 쉬운 경우', basket: '화석이 되기 쉬워요', cards: ['바다 바닥에 가라앉아 곧 묻힌 조개', '숲속 땅 위에서 썩어 가는 버섯', '바닷가에 떠밀려 온 해파리', '강바닥 진흙에 빨리 묻힌 물고기'] },
                  target: { pick: ['바다 바닥에 가라앉아 곧 묻힌 조개', '강바닥 진흙에 빨리 묻힌 물고기'] }, difficulty: 0.3,
                  conclude: '생물이 죽은 뒤 퇴적물에 빨리 묻히고, 뼈나 껍데기처럼 단단한 부분이 있으면 화석이 되기 쉬워요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 조개가 화석이 되기까지', minutes: 9, tool: 'lifecycle',
              task: '조개가 화석이 되어 우리 눈에 띄기까지의 일을 둥근 판 자리(맨 위부터 시계 방향)에 차례로 놓아요.',
              teacher: '"묻힌 다음에는 무슨 일이 일어날까요? 땅속 깊이 있던 화석을 우리는 어떻게 보게 될까요?" 지층이 솟아오르고 깎여 드러난다는 것을 2차시의 휘어진 지층과 이어 준다. \'묻힘\' 단계를 빼고 곧바로 굳는다고 놓는 학생에게 활동 2의 조건을 다시 읽게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '조개가 화석이 되는 차례대로 판의 자리에 놓아 보세요.',
                  toolOptions: { center: '조개 화석', cycle: false, cards: [{ id: '죽음', text: '조개가 죽어 바닥에 가라앉아요' }, { id: '묻힘', text: '모래와 진흙에 묻혀요' }, { id: '굳음', text: '퇴적물이 쌓여 굳어요' }, { id: '드러남', text: '땅이 솟고 깎여 드러나요' }] },
                  target: { order: ['죽음', '묻힘', '굳음', '드러남'] }, difficulty: 0.15,
                  hints: ['조개가 죽은 뒤 썩거나 흩어지지 않으려면 무엇이 먼저 일어나야 할지, 땅속의 화석을 우리가 보려면 마지막에 무슨 일이 있어야 할지 떠올려요.'] },
                { prompt: '자리 이름에 맞는 공룡 뼈의 모습을 놓아 보세요.',
                  toolOptions: { mode: 'match', center: '공룡 뼈 화석', cycle: false, slots: [{ id: 'd1', label: '죽은 직후' }, { id: 'd2', label: '묻힌 뒤' }, { id: 'd3', label: '아주 오랜 뒤' }, { id: 'd4', label: '오늘날' }],
                    cards: ['강가에 쓰러진 공룡', '진흙에 덮인 뼈', '암석 속에 남은 뼈', '깎인 비탈에서 찾은 뼈'] },
                  target: { match: { d1: '강가에 쓰러진 공룡', d2: '진흙에 덮인 뼈', d3: '암석 속에 남은 뼈', d4: '깎인 비탈에서 찾은 뼈' } }, difficulty: 0.25,
                  hints: ['자리 이름이 말하는 때를 먼저 읽고, 그때 공룡의 몸이 어디에 어떤 모습으로 있을지 떠올려요.'] },
                { prompt: '잘못된 카드 하나는 빼고 고사리가 화석이 되는 차례대로 놓아 보세요.',
                  toolOptions: { center: '고사리 화석', cycle: false, slots: 4, cards: [{ id: '떨어짐', text: '고사리 잎이 호수에 떨어져요' }, { id: '덮임', text: '진흙에 덮여요' }, { id: '마름', text: '햇볕에 바싹 말라요', why: '땅 위에서 마르면 부서지거나 썩어 남기 어려워요.' }, { id: '자국', text: '굳은 암석에 잎 자국이 남아요' }, { id: '발견', text: '지층이 깎여 자국이 보여요' }] },
                  target: { order: ['떨어짐', '덮임', '자국', '발견'] }, difficulty: 0.3,
                  hints: ['활동 2에서 찾은 화석이 되기 쉬운 조건과 맞지 않는 카드를 먼저 찾아 빼요. 그다음 잎이 썩지 않고 남으려면 무엇이 먼저 일어나야 할지 생각해요.'],
                  conclude: '생물이 묻히고, 퇴적물이 굳어 암석이 되고, 오랜 뒤 지층이 솟고 깎여야 화석이 드러나요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '도입의 토기 사진을 다시 띄우고 "이제 화석이 아닌 까닭을 말할 수 있나요?"라고 묻는다. 화석이 되는 조건 두 가지(빨리 묻힘, 단단한 부분)를 짝에게 말하게 한다. 출구 질문 2번에서 오래된 물건을 고른 학생은 활동 1의 세 질문을 공책에 적게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '화석일까?', basket: '화석', cards: ['암석 속 상어 이빨', '사암에 찍힌 공룡 발자국', '할머니 댁 오래된 그릇', '모래밭의 오늘 찍힌 갈매기 발자국'] }, prompt: '화석인 것만 골라 바구니에 넣어 보세요.', target: { pick: ['암석 속 상어 이빨', '사암에 찍힌 공룡 발자국'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '다음 가운데 화석이 아닌 것은 무엇인가요?', options: ['암석 속 나뭇잎 자국', '아주 오래된 돌도끼', '암석 속 삼엽충'], answer: 1, difficulty: 0.2, explain: '돌도끼는 사람이 만든 물건이에요. 화석은 옛날 생물의 몸이나 흔적이에요.' },
            { type: 'choice', prompt: '해파리 화석이 조개 화석보다 드문 까닭은 무엇일까요?', options: ['해파리는 몸이 부드러워 금방 썩어서', '해파리는 바다에 살지 않아서', '해파리는 크기가 커서'], answer: 0, difficulty: 0.25, explain: '단단한 부분이 없는 생물은 묻히기 전에 썩기 쉬워 화석으로 남기 어려워요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '화석과 화석이 되는 조건',
        items: [
          { type: 'check', prompt: '화석인 것에 모두 ✓ 하세요.', options: ['암석 속 조개껍데기', '암석에 찍힌 공룡 발자국', '오래된 기와', '암석 속 고사리 잎 자국'], answer: '암석 속 조개껍데기, 암석에 찍힌 공룡 발자국, 암석 속 고사리 잎 자국' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '화석은 아주 옛날에 살았던 ___의 몸이나 흔적이 ___ 속에 남아 있는 것입니다.', answer: '생물, 암석' },
          { type: 'figure', wide: true, prompt: '조개가 화석이 되는 차례예요. 빈 자리에 알맞은 일을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '조개 화석', cycle: false, printCards: false, cards: ['죽어 가라앉음', '묻힘', '굳음', '드러남'] }, state: { at: { '죽어 가라앉음': 0, '드러남': 3 } }, caption: '' }], answer: '모래와 진흙에 묻혀요, 퇴적물이 쌓여 굳어요' },
          { type: 'table', prompt: '생물이 화석이 되기 쉬운 조건을 정리하세요.', columns: ['조건', '까닭'], cells: [['죽은 뒤 빨리 묻힘', ''], ['단단한 부분이 있음', '']], answer: '썩거나 먹히기 전에 덮여서 / 부드러운 부분보다 오래 남아서' },
          { type: 'short', prompt: '"땅에서 나온 오래된 동전도 화석이다."라는 말이 틀린 까닭을 써 보세요.', answer: '화석은 옛날 생물의 몸이나 흔적인데 동전은 사람이 만든 물건이기 때문이다.' },
        ],
        easy: {
          note: '화석: ① 옛날 생물이었나? ② 암석 속에 남았나? 두 질문에 모두 "네"면 화석이에요.',
          items: [
            { type: 'choice', prompt: '화석인 것에 ○ 하세요.', options: ['암석 속 삼엽충', '오래된 동전'], answer: '암석 속 삼엽충' },
            { type: 'choice', prompt: '화석이 되기 쉬운 것에 ○ 하세요.', options: ['단단한 조개껍데기', '부드러운 해파리'], answer: '단단한 조개껍데기' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '생물이 죽은 뒤 빨리 ___ 화석이 되기 쉬워요.', answer: '묻혀야' },
            { type: 'draw', prompt: '내가 알고 있는 화석 하나를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 까닭을 말하며 카드가 돌아와요.',
        base: '몸이 남은 화석과 흔적이 남은 화석까지 나누어요.',
        challenge: '화석이 되는 차례에서 틀린 카드(햇볕에 마름)를 빼고, 두 생물을 견주어 까닭을 이어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 오래된 것이면 모두 화석이라 여겨 토기·동전 같은 사람이 만든 물건까지 넣는다 → "생물이었나? 암석에 남았나?" 두 질문. ② 발자국·기어간 자국 같은 흔적은 화석이 아니라고 여긴다. ③ 생물이 묻히는 단계를 빼고 생각한다. 화석이 땅 위로 드러나는 것은 지층이 솟아오르고 비바람에 깎이기 때문이며, 땅속 깊이 있는 화석은 대부분 발견되지 않는다.',
    }),

    // ───────────────────────── 10차시 (practice) ─────────────────────────
    L(10, {
      title: '화석을 근거로 옛날 그곳의 환경 추리하기',
      objective: '화석 속 생물이 사는 곳의 특징을 근거로 그 지층이 쌓일 때의 환경을 추리하고, 화석으로 알 수 있는 것을 말할 수 있다.',
      standards: ['[6과01-03]'],
      illustration: {
        prompt: P('a tall mountain with a tiny shell fossil near its peak, and a dreamy faded picture of an ancient shallow sea with shells and fish floating above the same mountain'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'cloud', x: 100, y: 46 }, { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'wave', y: 96 },
          { motif: 'mountain', x: 240, y: 222, s: 1.8, color: 'lavender' }, { motif: 'star', x: 240, y: 150, color: 'cream', s: 0.8 },
          { motif: 'text', x: 240, y: 246, text: '산에서 조개 화석이?', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"높은 산에서 조개 화석이 나왔어요. 조개가 산을 기어 올라갔을까요?" 웃음이 나온 뒤 "조개는 지금 어디에 사나요?"라고 물어 바다라는 대답을 끌어낸다. "그렇다면 이 산은 옛날에 어떤 곳이었을까요?" 오늘은 화석 속 생물이 사는 곳을 근거로 옛 환경을 추리한다고 알린다. 근거 없이 "그냥 바다였을 것 같아요"라고 말하면 "무엇을 보고 그렇게 생각했나요?"를 붙인다.',
          student: '높은 산에서 조개 화석이 나왔어요. 옛날 그곳은 어떤 곳이었을까요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '옛 환경', slots: [{ id: '조개', label: '조개 화석' }], cards: ['바다', '사막'] }, sequence: [{ match: { 조개: '바다' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 화석과 옛 환경 잇기', minutes: 9, tool: 'mindmap',
              task: '화석 속 생물이 오늘날 어디에 사는지 떠올리고, 그 화석이 나온 곳의 옛 환경 카드를 이어요.',
              teacher: '"고사리는 오늘날 어떤 곳에서 잘 자라나요? 붕어는 바다에 사나요, 강이나 호수에 사나요?" 생물이 사는 곳 → 옛 환경으로 이어 말하게 한다. 붕어처럼 민물에 사는 물고기와 바다에 사는 물고기가 따로 있다는 것을 짚는다. 산호를 그냥 \'바다\'로만 말하면 "산호는 차가운 깊은 바다에도 많을까요?"라고 물어 따뜻하고 얕은 바다까지 좁히게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '화석이 나온 곳의 옛 환경을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '화석 → 옛 환경', slots: [{ id: '조개', label: '조개 화석' }, { id: '고사리', label: '고사리 화석' }, { id: '붕어', label: '붕어(민물고기) 화석' }], cards: ['바다', '따뜻하고 축축한 땅', '호수나 강'] },
                  target: { match: { 조개: '바다', 고사리: '따뜻하고 축축한 땅', 붕어: '호수나 강' } }, difficulty: 0.15,
                  hints: ['화석 속 생물이 오늘날 어디에 사는지 하나씩 떠올려요. 그곳이 옛 환경의 근거예요.'] },
                { prompt: '다른 화석이에요. 화석이 나온 곳의 옛 환경을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '화석 → 옛 환경', slots: [{ id: '산호', label: '산호 화석' }, { id: '발자국', label: '공룡 발자국 화석' }, { id: '나뭇잎', label: '참나무 잎 화석' }], cards: ['따뜻하고 얕은 바다', '물가의 무른 진흙 땅', '나무가 자라던 숲 가까이', '얼음으로 덮인 땅'] },
                  target: { match: { 산호: '따뜻하고 얕은 바다', 발자국: '물가의 무른 진흙 땅', 나뭇잎: '나무가 자라던 숲 가까이' } }, difficulty: 0.25 },
                { prompt: '물속에 살던 생물의 화석과 땅에 살던 생물의 화석으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '어디에 살았을까?', slots: ['물속', '땅'], cards: ['삼엽충 화석', '암모나이트 화석', '고사리 화석', '공룡 뼈 화석', '조개 화석', '잠자리 화석'] },
                  target: { sort: { 물속: ['삼엽충 화석', '암모나이트 화석', '조개 화석'], 땅: ['고사리 화석', '공룡 뼈 화석', '잠자리 화석'] } }, difficulty: 0.3,
                  conclude: '화석 속 생물이 살던 곳을 알면 그 지층이 쌓일 때 그곳이 바다였는지 땅이었는지 추리할 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 한 곳의 변화 이야기', minutes: 10, tool: 'lifecycle',
              task: '화석이 나온 곳이 어떻게 바뀌어 왔는지 판의 자리(맨 위부터 시계 방향)에 차례로 놓아요.',
              teacher: '"바다였던 곳이 어떻게 산이 되었을까요?" 2차시의 휘어진 지층을 떠올리게 해 땅이 큰 힘을 받아 솟아오를 수 있다는 것을 잇는다. 셋째 문항에서는 "아래층일수록 먼저 쌓였다"는 3차시의 규칙을 함께 써야 한다고 말해 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '산꼭대기에서 조개 화석이 나오기까지의 차례대로 놓아 보세요.',
                  toolOptions: { center: '산꼭대기 조개 화석', cycle: false, cards: [{ id: '바다', text: '옛날 그곳은 바다였어요' }, { id: '묻힘', text: '조개가 바다 바닥에 묻혔어요' }, { id: '솟음', text: '땅이 높이 솟아올랐어요' }, { id: '발견', text: '깎인 산에서 화석이 나왔어요' }] },
                  target: { order: ['바다', '묻힘', '솟음', '발견'] }, difficulty: 0.2,
                  hints: ['조개가 살던 곳에서 시작해요. 땅이 어떻게 움직여야 그 화석이 높은 산에서 보일지 생각해요.'] },
                { prompt: '석탄층에서 고사리 화석이 나오기까지의 차례대로 놓아 보세요.',
                  toolOptions: { center: '석탄층 고사리 화석', cycle: false, cards: [{ id: '숲', text: '따뜻하고 축축한 고사리 숲' }, { id: '쓰러짐', text: '고사리가 쓰러져 진흙에 묻혀요' }, { id: '눌림', text: '오랫동안 쌓이고 눌려요' }, { id: '석탄', text: '석탄층에서 고사리 화석이 나와요' }] },
                  target: { order: ['숲', '쓰러짐', '눌림', '석탄'] }, difficulty: 0.25,
                  hints: ['고사리가 살아 있던 때부터 시작해요. 묻힌 뒤 오랜 시간 무슨 일이 생기는지 차례로 떠올려요.'] },
                { prompt: '맨 아래층에 조개, 가운데 층에 붕어(민물고기), 맨 위층에 고사리 화석이 있어요. 자리 이름에 맞는 옛 환경을 놓아 보세요.',
                  toolOptions: { mode: 'match', center: '한 지층의 변화', cycle: false, slots: [{ id: 'old', label: '가장 옛날' }, { id: 'mid', label: '그다음' }, { id: 'new', label: '가장 나중' }], cards: ['바다', '호수(민물)', '따뜻하고 축축한 땅'] },
                  target: { match: { old: '바다', mid: '호수(민물)', new: '따뜻하고 축축한 땅' } }, difficulty: 0.35,
                  hints: ['어느 층이 먼저 쌓였는지 먼저 정해요. 그다음 층마다 화석 속 생물이 사는 곳을 떠올려 견주어요.'],
                  predict: { q: '세 층 가운데 가장 먼저 쌓인 층은?', options: ['맨 아래층', '가운데 층', '맨 위층'], answer: 0 },
                  conclude: '아래층의 화석일수록 더 옛날 환경을 알려 줘요. 이곳은 바다에서 호수로, 그리고 땅으로 바뀌었어요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 화석으로 알 수 있는 것', minutes: 8, tool: 'mindmap',
              task: '화석으로 알 수 있는 것과 화석만으로는 알기 어려운 것을 가려요.',
              teacher: '"화석이 없었다면 우리는 공룡이 살았다는 것을 알 수 있었을까요?" 화석이 옛 생물의 모습, 옛 환경, 생물이 바뀌어 온 모습을 알려 준다는 것을 정리한다. 석탄·석유도 옛 생물에서 만들어진 연료라는 것을 덧붙인다. 공룡의 몸 색깔까지 안다고 생각하는 학생에게 화석은 대개 뼈·껍데기·자국만 남는다고 말해 준다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '화석으로 알 수 있는 것만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '화석이 알려 주는 것', basket: '알 수 있어요', cards: ['옛 생물의 생김새', '그 생물이 살던 곳의 환경', '생물이 바뀌어 온 모습', '그 생물의 울음소리', '그 생물의 이름표'] },
                  target: { pick: ['옛 생물의 생김새', '그 생물이 살던 곳의 환경', '생물이 바뀌어 온 모습'] }, difficulty: 0.15 },
                { prompt: '공룡 뼈 화석으로 알 수 있는 것과 알기 어려운 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '공룡 뼈 화석', slots: ['알 수 있어요', '알기 어려워요'], cards: ['몸집의 크기', '다리의 수', '몸 색깔', '좋아한 놀이'] },
                  target: { sort: { '알 수 있어요': ['몸집의 크기', '다리의 수'], '알기 어려워요': ['몸 색깔', '좋아한 놀이'] } }, difficulty: 0.2 },
                { prompt: '공룡 발자국 화석이 한 줄로 이어져 있어요. 이것으로 알 수 있는 것만 골라 보세요.',
                  toolOptions: { mode: 'pick', topic: '발자국이 알려 주는 것', basket: '알 수 있어요', cards: ['공룡이 걸어간 방향', '그곳이 무른 진흙 땅이었음', '공룡의 몸 색깔', '공룡의 이름'] },
                  target: { pick: ['공룡이 걸어간 방향', '그곳이 무른 진흙 땅이었음'] }, difficulty: 0.3,
                  conclude: '화석은 옛 생물의 모습과 생활, 그때의 환경을 알려 주는 귀한 자료예요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '도입 질문으로 돌아가 "산에서 나온 조개 화석으로 무엇을 추리할 수 있나요? 근거는요?"라고 묻고, \'근거(조개는 바다에 산다) → 추리(그곳은 옛날 바다였다)\' 틀로 말하게 한다. 출구 질문 2번에서 근거 없이 답한 학생은 활동지 짧은 글 문항을 근거와 함께 다시 쓰게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '화석 → 옛 환경', slots: [{ id: 'g1', label: '암모나이트 화석' }, { id: 'g2', label: '나무줄기 화석' }], cards: ['바다', '숲이 있던 땅', '사막'] }, prompt: '두 화석이 나온 곳의 옛 환경을 이어 보세요.', target: { match: { g1: '바다', g2: '숲이 있던 땅' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '조개 화석이 산에서 발견되었어요. 그곳이 옛날에 어떤 곳이었는지 근거와 함께 알맞게 말한 것은 무엇인가요?', options: ['조개는 바다에 사니 그곳은 옛날에 바다였어요', '조개가 산을 기어 올라왔어요', '산은 옛날에도 산이었어요'], answer: 0, difficulty: 0.2, explain: '화석 속 생물이 사는 곳(바다)이 근거가 되어, 지층이 쌓일 때 그곳이 바다였다고 추리해요.' },
            { type: 'choice', prompt: '화석으로 알기 가장 어려운 것은 무엇인가요?', options: ['옛 생물의 생김새', '옛 생물이 살던 환경', '옛 생물의 울음소리'], answer: 2, difficulty: 0.15, explain: '화석에는 대개 뼈·껍데기·자국이 남아 소리는 알기 어려워요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '화석으로 옛 환경 추리하기',
        items: [
          { type: 'table', prompt: '화석을 근거로 옛 환경을 추리해 표를 채우세요.', columns: ['화석', '그 생물이 사는(살던) 곳', '추리한 옛 환경'], cells: [['조개 화석', '', ''], ['고사리 화석', '', ''], ['산호 화석', '', '']], answer: '조개 — 바다 — 바다 / 고사리 — 따뜻하고 축축한 땅 — 따뜻하고 축축한 땅 / 산호 — 따뜻하고 얕은 바다 — 따뜻하고 얕은 바다' },
          { type: 'figure', wide: true, prompt: '산꼭대기에서 조개 화석이 나오기까지의 차례예요. 빈 자리에 알맞은 일을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '산꼭대기 조개 화석', cycle: false, printCards: false, cards: ['바다', '묻힘', '솟음', '발견'] }, state: { at: { 바다: 0 } }, caption: '' }], answer: '조개가 바다 바닥에 묻혀요 → 땅이 솟아올라요 → 깎인 산에서 화석이 나와요' },
          { type: 'check', prompt: '화석으로 알 수 있는 것에 모두 ✓ 하세요.', options: ['옛 생물의 생김새', '그때의 환경', '옛 생물의 울음소리', '생물이 바뀌어 온 모습'], answer: '옛 생물의 생김새, 그때의 환경, 생물이 바뀌어 온 모습' },
          { type: 'short', prompt: '조개 화석이 산에서 발견되었습니다. 그곳이 옛날에 어떤 곳이었을지 근거와 함께 쓰세요.', answer: '조개는 바다에 사는 생물이므로, 조개 화석이 나온 지층이 쌓일 때 그곳은 바다였다. 그 뒤 땅이 솟아올라 산이 되었다.' },
          { type: 'draw', prompt: '고사리 화석이 나온 곳의 옛 모습을 상상해 그리고, 한 문장으로 설명하세요.' },
        ],
        easy: {
          note: '화석 속 생물이 지금 어디에 사는지 떠올려요. 그곳이 옛 환경의 근거예요.',
          items: [
            { type: 'choice', prompt: '조개 화석이 나온 곳의 옛 환경에 ○ 하세요.', options: ['바다', '사막'], answer: '바다' },
            { type: 'choice', prompt: '고사리 화석이 나온 곳의 옛 환경에 ○ 하세요.', options: ['따뜻하고 축축한 땅', '깊은 바다'], answer: '따뜻하고 축축한 땅' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '조개는 ___에 사니까, 조개 화석이 나온 곳은 옛날에 바다였어요.', answer: '바다' },
            { type: 'draw', prompt: '옛날 바다였던 산의 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 초록 테두리가 생기고, 화석과 환경을 하나씩 이어요.',
        base: '함정 카드가 섞인 짝 잇기와 물속·땅 나누기를 해요.',
        challenge: '세 층의 화석을 쌓인 차례와 함께 따져 그곳의 환경 변화를 추리해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 근거 없이 결론만 말한다 → "화석 속 생물은 어디에 사나? → 그러니 그곳은 ~였다" 틀. ② 아래층과 위층 화석의 시간 차례를 생각하지 않는다 → 3차시 규칙(아래층이 먼저). ③ 화석으로 생물의 모든 것을 알 수 있다고 여긴다. 암모나이트·삼엽충은 지금은 사라진 바다 생물이다. 고사리는 따뜻하고 축축한 곳에서 잘 자라며, 석탄은 옛 식물이 묻혀 오랜 시간 눌려 만들어졌다. 이 차시의 조개는 교과서처럼 바다 조개로 다룬다(민물조개를 묻는 학생에게는 "이 화석은 바다 조개예요"라고 정해 준다). 물고기는 바다·강·호수 어디에나 살아서 물고기 화석이라는 것만으로는 바다인지 호수인지 가를 수 없다 → 그래서 문항에서는 붕어처럼 민물에 사는 물고기로 못박았다.',
    }),

    // ───────────────────────── 11차시 (core, chart) ─────────────────────────
    L(11, {
      title: '화석이 되는 과정을 네 컷과 그래프로 나타내기',
      objective: '화석이 만들어지는 과정을 네 컷 장면으로 나타내고, 층마다 나온 화석 수 그래프를 읽어 옛 환경을 추리할 수 있다.',
      standards: ['[6과01-03]'],
      illustration: {
        prompt: P('a four-panel paper comic strip showing a fish dying, sinking and being covered by mud, the mud turning into rock, and children finding the fish fossil on an eroded slope'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 64, y: 54, s: 0.7 }, { motif: 'cloud', x: 380, y: 48 }, { motif: 'wave', y: 168 },
          { motif: 'hills', y: 228, colors: ['peach', 'buttercup', 'lavender'] }, { motif: 'star', x: 120, y: 120, color: 'sky' }, { motif: 'star', x: 360, y: 120, color: 'rose' },
          { motif: 'text', x: 240, y: 112, text: '네 컷으로 그려 볼까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '한 학생이 그린 세 컷 그림(물고기가 헤엄침 → 돌 속 물고기 뼈 → 사람이 찾음)을 띄운다. "이 그림에서 빠진 장면은 무엇일까요?" 묻히는 장면이 빠지면 화석이 될 수 없다는 것을 9차시의 조건과 이어 짚는다. 오늘은 컷마다 일어난 일을 짧은 글과 함께 나타낸다고 알린다.',
          student: '세 컷 그림에서 빠진 장면을 찾아봐요. 그 장면이 없으면 화석이 될 수 있을까요?',
          demo: { tool: 'story', options: { shuffle: false, slots: ['1컷', '2컷', '3컷'], cards: [{ id: '죽음', text: '물고기가 죽어요', motif: 'wave' }, { id: '묻힘', text: '진흙에 묻혀요', motif: 'hills' }, { id: '발견', text: '화석을 찾아요', motif: 'mountain' }] }, sequence: [{ order: ['죽음', '묻힘', '발견'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 네 컷 장면 놓기', minutes: 9, tool: 'story',
              task: '화석이 만들어지는 장면 카드를 1컷부터 차례로 놓아요. 놓은 뒤 공책에 같은 네 컷을 그려요.',
              teacher: '"2컷과 3컷 사이에는 얼마나 긴 시간이 흘렀을까요?" 장면 사이에 아주 오랜 시간이 걸린다는 것을 짚는다. 장면을 놓은 뒤 공책에 네 컷을 그리고, 컷마다 한 줄 글을 쓰게 한다. 굳은 장면만 크게 그리는 학생에게 묻히는 장면을 꼭 넣게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '물고기 화석이 만들어지는 장면을 1컷부터 놓아 보세요.',
                  toolOptions: { slots: ['1컷', '2컷', '3컷', '4컷'], cards: [{ id: '죽음', text: '물고기가 죽어 가라앉아요', motif: 'wave' }, { id: '묻힘', text: '진흙과 모래에 묻혀요', motif: 'hills' }, { id: '굳음', text: '층이 쌓여 굳어요', motif: 'mountain' }, { id: '발견', text: '깎인 비탈에서 찾아요', motif: 'sun' }] },
                  target: { order: ['죽음', '묻힘', '굳음', '발견'] }, difficulty: 0.15 },
                { prompt: '나뭇잎 화석이 만들어지는 장면을 1컷부터 놓아 보세요.',
                  toolOptions: { slots: ['1컷', '2컷', '3컷', '4컷'], cards: [{ id: '떨어짐', text: '잎이 호수에 떨어져요', motif: 'leaf' }, { id: '덮임', text: '고운 진흙에 덮여요', motif: 'hills' }, { id: '자국', text: '굳은 암석에 잎 자국이 남아요', motif: 'mountain' }, { id: '쪼갬', text: '암석을 쪼개니 잎 자국이 보여요', motif: 'star' }] },
                  target: { order: ['떨어짐', '덮임', '자국', '쪼갬'] }, difficulty: 0.2 },
                { prompt: '삼엽충 화석을 다섯 컷으로 나타내요. 장면을 1컷부터 놓아 보세요.',
                  toolOptions: { slots: ['1컷', '2컷', '3컷', '4컷', '5컷'], cards: [{ id: '삶', text: '삼엽충이 바다 바닥을 기어요', motif: 'wave' }, { id: '죽음', text: '죽어서 바닥에 놓여요', motif: 'wave' }, { id: '묻힘', text: '진흙에 빨리 묻혀요', motif: 'hills' }, { id: '굳음', text: '오랜 시간 눌려 굳어요', motif: 'mountain' }, { id: '솟음', text: '땅이 솟고 깎여 드러나요', motif: 'sun' }] },
                  target: { order: ['삶', '죽음', '묻힘', '굳음', '솟음'] }, difficulty: 0.25,
                  conclude: '화석은 죽음 → 묻힘 → 굳음 → 드러남의 차례로 만들어지고, 그사이에 아주 오랜 시간이 흘러요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 컷마다 설명 쓰기', minutes: 9, tool: 'story',
              task: '네 컷 만화의 말 칸 빈자리에 알맞은 낱말 카드를 넣어 설명을 완성해요.',
              teacher: '"컷마다 한 줄 글이 있으면 그림만 있을 때보다 무엇이 좋을까요?" 빈칸을 채운 뒤 공책의 네 컷에도 같은 방식으로 설명을 붙이게 한다. 셋째 문항에서 묻히는 장면 대신 \'햇볕에 말라요\'를 고르는 학생에게 9차시의 조건을 떠올리게 한다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '물고기 화석 네 컷의 설명 빈칸에 알맞은 카드를 넣어 보세요.',
                  toolOptions: { mode: 'fill', cards: ['가라앉아요', '묻혀요', '굳어요', '날아가요'], slots: [{ id: 'f1', who: '1컷', motif: 'wave', label: '죽은 물고기가 바닥에 ___.' }, { id: 'f2', who: '2컷', motif: 'hills', label: '진흙과 모래에 ___.' }, { id: 'f3', who: '3컷', motif: 'mountain', label: '층이 쌓이고 눌려 ___.' }] },
                  target: { fill: { f1: '가라앉아요', f2: '묻혀요', f3: '굳어요' } }, difficulty: 0.15 },
                { prompt: '공룡 발자국 화석 설명의 빈칸에 알맞은 카드를 넣어 보세요.',
                  toolOptions: { mode: 'fill', cards: ['진흙', '모래', '솟아', '바위'], slots: [{ id: 'g1', who: '1컷', motif: 'hills', label: '공룡이 무른 ___ 위를 걸어요.' }, { id: 'g2', who: '2컷', motif: 'wave', label: '발자국 위에 ___가 덮여요.' }, { id: 'g3', who: '4컷', motif: 'mountain', label: '땅이 ___오르고 깎여 발자국이 보여요.' }] },
                  target: { fill: { g1: '진흙', g2: '모래', g3: '솟아' } }, difficulty: 0.25 },
                { prompt: '네 컷 만화에 묻히는 장면이 빠졌어요. 빠진 장면 카드를 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', basket: '빠진 장면', cards: ['진흙과 모래에 덮여요', '햇볕에 바싹 말라요', '물 위로 떠올라요', '새가 물어 가요'] },
                  target: { pick: ['진흙과 모래에 덮여요'] }, difficulty: 0.2,
                  conclude: '생물이 퇴적물에 덮이는 장면이 있어야 화석이 될 수 있어요. 이 장면을 빼면 안 돼요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 층마다 나온 화석 그래프', minutes: 9, tool: 'chart',
              task: '한 지층에서 층마다 나온 화석 수를 그래프로 완성하거나 읽고, 그곳의 옛 환경을 추리해요.',
              teacher: '"이 그래프에서 조개 화석이 나온 층이 쌓일 때 그곳은 어떤 곳이었을까요? 조개 화석이 하나도 없는 층은요?" 그래프 → 화석 → 옛 환경의 차례로 말하게 한다. 화석이 많이 나온 층일수록 "더 바다"였다고 말하는 학생에게 "조개 화석이 한 개만 나와도 그 층이 쌓일 때 바다였다는 근거가 될까요?"라고 되묻는다. 화석 수는 많고 적음보다 나왔는지 안 나왔는지가 옛 환경의 근거라는 것을 짚는다. 가로축의 층이 맨 아래층부터 놓였다는 것(왼쪽이 더 옛날)을 먼저 확인하게 한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '층마다 나온 조개 화석 수 표를 보고 막대그래프를 완성하세요.',
                  toolOptions: { type: 'bar', title: '층마다 나온 조개 화석 수', data: [['맨 아래층', 2], ['가운데 층', 9], ['맨 위층', 0]], unit: '개', xLabel: '층(아래부터)', yLabel: '화석 수', scale: 1, given: [0] },
                  target: { build: true }, difficulty: 0.15 },
                { prompt: '그래프를 보고 조개 화석이 하나도 나오지 않은 층을 골라 보세요.',
                  toolOptions: { type: 'bar', mode: 'read', title: '층마다 나온 조개 화석 수', data: [['맨 아래층', 1], ['가운데 층', 8], ['맨 위층', 0]], unit: '개', xLabel: '층(아래부터)', scale: 1, choices: ['맨 아래층', '가운데 층', '맨 위층'], question: '조개 화석이 나오지 않은 층은?', why: ['막대는 낮아도 조개 화석이 1개 나왔어요. 이 층이 쌓일 때도 바다였다는 근거예요.', '조개 화석이 8개 나왔어요.', ''], explain: '맨 위층 막대만 0이에요. 조개 화석이 나온 맨 아래층과 가운데 층은 쌓일 때 바다였다는 근거가 있고, 맨 위층은 조개 화석으로는 바다였다고 말할 수 없어요.' },
                  target: { pick: 2 }, difficulty: 0.25 },
                { prompt: '고사리 화석 그래프에서 가운데 층의 화석은 몇 개인가요? 그래프를 읽어 답을 써 보세요.',
                  toolOptions: { type: 'bar', mode: 'read', title: '층마다 나온 고사리 화석 수', data: [['맨 아래층', 0], ['가운데 층', 6], ['맨 위층', 2]], unit: '개', xLabel: '층(아래부터)', scale: 1, question: '가운데 층의 고사리 화석 수는?' },
                  target: { value: 6 }, difficulty: 0.2,
                  conclude: '고사리 화석이 나온 층이 쌓일 때 그곳 가까이에는 따뜻하고 축축한 땅이 있었다고 추리할 수 있어요. 화석은 몇 개인지보다 나왔는지가 근거예요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 7,
          teacher: '공책에 그린 네 컷을 짝과 바꿔 보게 하고 "묻히는 장면이 있나요? 컷마다 설명이 있나요?" 두 가지를 서로 점검하게 한다. "그래프로 나타내면 어떤 점이 좋았나요?"라고 물어 층마다 화석 수를 한눈에 견줄 수 있다는 대답을 끌어낸다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { slots: ['1컷', '2컷', '3컷', '4컷'], cards: [{ id: 'a', text: '암모나이트가 죽어요', motif: 'wave' }, { id: 'b', text: '바다 바닥 진흙에 묻혀요', motif: 'hills' }, { id: 'c', text: '진흙이 굳어 이암이 돼요', motif: 'mountain' }, { id: 'd', text: '땅이 솟고 깎여 보여요', motif: 'sun' }] }, prompt: '암모나이트 화석이 만들어지는 장면을 1컷부터 놓아 보세요.', target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '화석이 만들어지는 과정을 그릴 때 꼭 들어가야 하는 장면은 무엇인가요?', options: ['생물이 퇴적물에 묻히는 장면', '생물이 햇볕에 마르는 장면', '사람이 화석을 파는 장면'], answer: 0, difficulty: 0.15, explain: '생물이 퇴적물에 묻혀야 썩거나 흩어지지 않고 화석이 될 수 있어요.' },
            { type: 'choice', prompt: '어떤 지층의 맨 아래층에서만 산호 화석이 나왔어요. 알맞은 추리는 무엇인가요?', options: ['맨 아래층이 쌓일 때 따뜻하고 얕은 바다였어요', '맨 위층이 쌓일 때 바다였어요', '처음부터 산이었어요'], answer: 0, difficulty: 0.25, explain: '산호는 따뜻하고 얕은 바다에 살아요. 산호 화석이 나온 층이 쌓일 때 그곳이 그런 바다였어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '화석이 만들어지는 네 컷',
        items: [
          { type: 'draw', prompt: '화석이 만들어지는 과정을 네 컷으로 그리고, 컷마다 일어난 일을 한 줄로 쓰세요.' },
          { type: 'figure', wide: true, prompt: '나뭇잎 화석이 만들어지는 컷이에요. 빈 칸에 알맞은 장면을 쓰세요.', tool: 'story', figures: [{ options: { printCards: false, slots: ['1컷', '2컷', '3컷', '4컷'], cards: ['보기'] }, caption: '1컷 잎이 호수에 떨어져요 → 2컷 (      ) → 3컷 (      ) → 4컷 암석을 쪼개니 잎 자국이 보여요' }], answer: '2컷 고운 진흙에 덮여요, 3컷 쌓여 굳어 암석에 잎 자국이 남아요' },
          { type: 'table', prompt: '층마다 나온 물고기 화석 수를 보고, 화석이 나오지 않은 층 칸에 ○ 를 쓰세요.', columns: ['층(아래부터)', '맨 아래층', '가운데 층', '맨 위층'], cells: [['물고기 화석 수(개)', '7', '1', '0'], ['나오지 않은 층', '', '', '']], answer: '맨 위층 칸 ○' },
          { type: 'short', prompt: '물고기 화석이 나온 층이 쌓일 때의 환경은 어땠을지 쓰세요.', answer: '물속(강·호수·바다)이었다.' },
          { type: 'choice', prompt: '화석이 만들어지는 과정에서 생물이 묻힌 뒤에 일어나는 일에 ○ 하세요.', options: ['퇴적물이 쌓여 굳어요', '생물이 다시 살아나요', '물 위로 떠올라요'], answer: '퇴적물이 쌓여 굳어요' },
          { type: 'short', prompt: '"화석은 생물이 바로 돌로 바뀐 것이다."라는 친구의 말을 고쳐 써 보세요.', answer: '생물이 퇴적물에 묻히고, 퇴적물이 아주 오랜 시간 쌓여 굳는 동안 생물의 몸이나 흔적이 암석 속에 남은 것이다.' },
        ],
        easy: {
          note: '죽어요 → 묻혀요 → 굳어요 → 드러나요. 묻히는 컷을 꼭 그려요.',
          items: [
            { type: 'choice', prompt: '화석이 되려면 꼭 있어야 하는 장면에 ○ 하세요.', options: ['진흙에 묻혀요', '햇볕에 말라요'], answer: '진흙에 묻혀요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '죽어요 → ___ → 굳어요 → 드러나요', answer: '묻혀요' },
            { type: 'choice', prompt: '물고기 화석이 나온 층이 쌓일 때의 환경에 ○ 하세요.', options: ['물속', '사막'], answer: '물속' },
            { type: 'draw', prompt: '물고기가 진흙에 묻히는 장면을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 초록 테두리가 생기고, 그래프 막대 끝에 값이 보여요.',
        base: '네 컷 장면과 설명 빈칸을 스스로 채우고, 그래프를 눈금으로 읽어요.',
        challenge: '다섯 컷으로 나누어 놓고, 화석 수 그래프와 쌓인 차례를 함께 따져 추리해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 그림에서 생물이 묻히는 단계를 빼고 굳어진 장면만 그린다 → 짝 점검에서 묻힘 장면을 꼭 확인. ② 화석을 생물이 바로 돌로 바뀐 것이라 여긴다. ③ 그래프 가로축(층의 차례)을 확인하지 않는다. 물고기 화석은 강·호수·바다 어디에서나 나올 수 있으니 \'물속\'까지만 추리하고 바다라고 단정하지 않게 한다.',
    }),

    // ───────────────────────── 12차시 (wrap) ─────────────────────────
    L(12, {
      title: '석고로 화석 모형 만들고 단원 돌아보기',
      objective: '찰흙과 석고로 화석 모형을 만들어 실제 화석이 만들어지는 과정과 견주고, 지층·퇴적암·화석에서 배운 것을 묶어 스스로 평가할 수 있다.',
      standards: ['[6과01-03]', '[6과01-01]', '[6과01-02]'],
      safety: ['석고 가루는 들이마시지 않게 마스크를 쓰고, 가루를 털거나 날리지 않아요.', '석고 반죽은 굳으면서 따뜻해져요. 반죽에 손을 넣어 두지 않아요.', '남은 석고 반죽은 세면대에 버리지 않고 정해진 통에 모아요(배수구가 막혀요).', '끝나면 손을 비누로 씻어요.'],
      illustration: {
        prompt: P('children pressing a seashell into a flat slab of clay, pouring white plaster into the print, and holding up a finished plaster shell fossil model next to a real shell fossil'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 110, y: 46 }, { motif: 'hills', y: 214, colors: ['cream', 'mint', 'sky'] },
          { motif: 'star', x: 170, y: 128, color: 'cream', s: 1.2 }, { motif: 'leaf', x: 310, y: 130, s: 1.2 },
          { motif: 'text', x: 240, y: 186, text: '나만의 화석을 만들어요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 5,
          teacher: '실제 조개 화석(또는 사진)과 조개껍데기를 나란히 보여 준다. "이 조개껍데기로 화석과 비슷한 것을 40분 안에 만들 수 있을까요? 실제 화석은 얼마나 걸렸을까요?" 오늘은 화석 모형을 만들며 실제 과정과 견주고, 단원 전체를 돌아본다고 알린다. 석고 가루를 다룰 때의 약속(마스크, 가루 날리지 않기, 손 넣어 두지 않기)을 먼저 읽게 한다.',
          student: '조개껍데기로 화석 모형을 만들어요. 실제 화석은 이렇게 빨리 만들어질까요?',
          demo: { tool: 'lifecycle', options: { shuffle: false, center: '화석 모형', cycle: false, cards: [{ id: '누르기', text: '찰흙에 조개를 눌러요' }, { id: '붓기', text: '석고를 부어요' }, { id: '떼기', text: '굳으면 떼어 내요' }] }, sequence: [{ order: ['누르기', '붓기', '떼기'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 27,
          activities: [
            {
              id: 'a1', title: '활동 1. 화석 모형 만들기와 실제 견주기', minutes: 12, tool: 'lifecycle',
              task: '화석 모형을 만드는 차례를 판에 놓고 실제로 만들어요. 석고가 굳는 동안 모형의 각 단계가 실제의 무엇과 같은지 이어요.',
              teacher: '차례를 놓은 뒤 모둠별로 바로 만든다. 석고가 굳는 15~20분 동안 둘째·셋째 문항을 한다. "찰흙은 실제의 무엇과 같을까요? 석고가 굳는 데 20분이면, 실제 퇴적물이 굳는 데는?" 모형 만들기에만 매달려 시간 차이를 생각하지 않는 학생에게 실제는 아주 오랜 시간이 걸린다는 것을 짚는다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '화석 모형을 만드는 차례대로 판의 자리에 놓아 보세요.',
                  toolOptions: { center: '조개 화석 모형', cycle: false, cards: [{ id: '펴기', text: '찰흙을 평평하게 펴요' }, { id: '누르기', text: '조개껍데기를 눌렀다 떼요' }, { id: '두르기', text: '둘레에 종이 띠를 둘러요' }, { id: '붓기', text: '석고 반죽을 부어요' }, { id: '떼기', text: '굳으면 찰흙에서 떼어 내요' }] },
                  target: { order: ['펴기', '누르기', '두르기', '붓기', '떼기'] }, difficulty: 0.15,
                  hints: ['석고 반죽을 부으려면 그 전에 무엇이 준비되어 있어야 할지 거꾸로 생각해 봐요.'] },
                { prompt: '모형의 단계가 실제 화석이 만들어지는 과정의 무엇과 같은지 자리에 놓아 보세요.',
                  toolOptions: { mode: 'match', center: '모형 = 실제', cycle: false, slots: [{ id: 'm1', label: '찰흙' }, { id: 'm2', label: '조개 자국' }, { id: 'm3', label: '석고가 굳음' }, { id: 'm4', label: '떼어 냄' }],
                    cards: ['쌓인 퇴적물', '퇴적물에 남은 생물의 흔적', '퇴적물이 굳어 암석이 됨', '지층이 깎여 화석이 드러남'] },
                  target: { match: { m1: '쌓인 퇴적물', m2: '퇴적물에 남은 생물의 흔적', m3: '퇴적물이 굳어 암석이 됨', m4: '지층이 깎여 화석이 드러남' } }, difficulty: 0.3,
                  hints: ['모형에서 그 재료나 단계가 하는 일을 떠올리고, 실제 화석이 만들어질 때 같은 일을 하는 것을 찾아요.'] },
                { prompt: '화석 모형과 실제 화석을 견주어 카드를 나누어 보세요.',
                  toolOptions: { mode: 'sort', center: '모형과 실제', slots: ['화석 모형', '실제 화석'], cards: ['20분쯤이면 굳어요', '아주 오랜 시간이 걸려요', '석고가 자국을 본떠요', '퇴적물이 생물을 덮어 굳어요'] },
                  target: { sort: { '화석 모형': ['20분쯤이면 굳어요', '석고가 자국을 본떠요'], '실제 화석': ['아주 오랜 시간이 걸려요', '퇴적물이 생물을 덮어 굳어요'] } }, difficulty: 0.25,
                  hints: ['카드마다 걸리는 시간과 무엇이 덮는지를 보고, 오늘 교실에서 한 일인지 자연에서 일어난 일인지 가려요.'],
                  conclude: '모형은 20분쯤이면 되지만 실제 화석은 퇴적물이 아주 오랜 시간 쌓이고 굳어야 만들어져요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 단원 낱말 묶기', minutes: 8, tool: 'mindmap',
              task: '이 단원에서 배운 문장 카드를 지층·퇴적암·화석 가지로 나누어요.',
              teacher: '"이 문장은 어느 차시에서 배웠나요?" 가지마다 대표 문장을 하나씩 소리 내어 읽게 한다. 셋 사이의 관계(퇴적물이 쌓여 지층 → 굳어 퇴적암 → 그 속에 화석)를 칠판에 화살표로 그린다.',
              levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
              items: [
                { prompt: '단원에서 배운 문장을 알맞은 가지에 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '지층과 화석', slots: ['지층', '퇴적암', '화석'], cards: ['아래층이 먼저 쌓여요', '층마다 두께와 색이 달라요', '알갱이 크기로 나눠요', '모래가 굳으면 사암이에요', '생물의 흔적도 될 수 있어요', '옛 환경을 알려 줘요'] },
                  target: { sort: { 지층: ['아래층이 먼저 쌓여요', '층마다 두께와 색이 달라요'], 퇴적암: ['알갱이 크기로 나눠요', '모래가 굳으면 사암이에요'], 화석: ['생물의 흔적도 될 수 있어요', '옛 환경을 알려 줘요'] } }, difficulty: 0.2 },
                { prompt: '단원에서 배운 것 가운데 옳은 문장만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '옳은 문장', basket: '옳아요', cards: ['지층은 처음에 평평하게 쌓여요', '역암에는 자갈이 섞여 있어요', '오래된 토기도 화석이에요', '맨 위층이 가장 먼저 쌓여요', '화석으로 옛 환경을 추리해요'] },
                  target: { pick: ['지층은 처음에 평평하게 쌓여요', '역암에는 자갈이 섞여 있어요', '화석으로 옛 환경을 추리해요'] }, difficulty: 0.25 },
                { prompt: '퇴적물이 쌓여 지층과 화석이 우리 눈에 띄기까지의 큰 흐름을 판에 차례로 놓아 보세요.',
                  toolOptions: { mode: 'order', center: '단원 한눈에', cycle: false, cards: [{ id: '옮김', text: '물이 자갈·모래·진흙을 옮겨요' }, { id: '쌓임', text: '층층이 쌓이며 생물도 묻혀요' }, { id: '굳음', text: '눌리고 굳어 퇴적암이 돼요' }, { id: '드러남', text: '솟고 깎여 지층과 화석이 보여요' }] },
                  target: { order: ['옮김', '쌓임', '굳음', '드러남'] }, difficulty: 0.25,
                  conclude: '퇴적물이 쌓여 지층이 되고, 굳어 퇴적암이 되며, 그 속에 묻힌 생물이 화석으로 남아요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 근거와 약속 점검', minutes: 7, tool: 'kitchen',
              task: '이 단원에서 판단의 근거로 쓴 것과 실험 약속에만 표시해요. 그다음 활동지의 \'나의 단원 점검\' 표를 채워요.',
              teacher: '"이 단원에서 우리는 무엇을 근거로 판단했나요?" 짐작·만진 느낌만으로 판단한 적이 있었는지 떠올리게 한다. 셋째 문항은 오늘 실제로 지킨 약속을 고르게 하고, 지키지 못한 모둠은 정리할 때 바로 고치게 한다. 끝나면 활동지의 \'나의 단원 점검\' 표에 솔직하게 ○·△를 하게 하고 "△가 다음에 공부할 거리예요"라고 말해 준다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '지층을 관찰할 때 근거가 되는 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '지층 관찰의 근거', items: [{ id: 'count', text: '층의 개수를 센다' }, { id: 'ruler', text: '층의 두께를 자로 잰다' }, { id: 'guess', text: '보지 않고 짐작으로 쓴다' }, { id: 'color', text: '층마다 색을 적는다' }] },
                  target: { checklist: ['count', 'ruler', 'color'] }, difficulty: 0.1 },
                { prompt: '퇴적암과 화석을 판단할 때 근거로 쓰는 것에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '판단의 근거', items: [{ id: 'grain', text: '깨진 면의 알갱이 크기' }, { id: 'feel', text: '겉면을 만진 느낌만' }, { id: 'life', text: '옛날에 살았던 생물인지' }, { id: 'where', text: '화석 속 생물이 사는 곳' }] },
                  target: { checklist: ['grain', 'life', 'where'] }, difficulty: 0.2 },
                { prompt: '오늘 화석 모형을 만들며 지킨 안전 약속에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '석고 다루기 약속', items: [{ id: 'mask', text: '마스크를 쓰고 가루를 날리지 않아요' }, { id: 'hand', text: '굳는 반죽에 손을 넣어 둬요' }, { id: 'bin', text: '남은 반죽은 정해진 통에 모아요' }, { id: 'sink', text: '남은 반죽을 세면대에 부어요' }, { id: 'wash', text: '끝나면 손을 비누로 씻어요' }] },
                  target: { checklist: ['mask', 'bin', 'wash'] }, difficulty: 0.1 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '굳은 화석 모형을 찰흙에서 떼어 내 실제 화석과 나란히 놓고 "무엇이 같고 무엇이 다른가요?"를 모둠별로 한 가지씩 말하게 한다. 단원 첫 시간의 질문 "줄무늬는 왜 생겼을까요?"를 다시 던지고, 이제는 어떻게 답할 수 있는지 들어 본다. 자기 점검에서 표시하지 못한 항목을 출구 질문 마지막 칸에 적게 한다.',
          exitTicket: [
            { type: 'choice', prompt: '석고 화석 모형과 실제 화석이 다른 점으로 가장 알맞은 것은 무엇인가요?', options: ['실제 화석은 아주 오랜 시간 동안 만들어져요', '실제 화석은 사람이 만들어요', '실제 화석은 생물과 관계없어요'], answer: 0, difficulty: 0.15, explain: '모형은 20분쯤이면 굳지만, 실제 화석은 퇴적물이 아주 오랜 시간 쌓이고 굳어야 해요.' },
            { type: 'choice', prompt: '어떤 산의 지층 맨 아래층은 역암이고 조개 화석이 나왔어요. 바르게 말한 것은 무엇인가요?', options: ['맨 아래층은 가장 나중에 쌓였어요', '맨 아래층에는 자갈이 섞여 있고, 쌓일 때 그곳은 바다였어요', '조개는 산에 살았어요'], answer: 1, difficulty: 0.3, explain: '역암에는 자갈이 섞여 있고, 조개 화석은 그 층이 쌓일 때 그곳이 바다였다는 근거예요. 아래층은 먼저 쌓였어요.' },
            { type: 'short', prompt: '이 단원에서 아직 자신 없는 것 하나와, 그것을 다시 공부할 방법을 쓰세요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '화석 모형과 단원 돌아보기',
        items: [
          { type: 'table', prompt: '화석 모형과 실제 화석을 견주어 표를 채우세요.', columns: ['견줄 점', '화석 모형', '실제 화석'], cells: [['생물(또는 자국)', '조개껍데기 자국', ''], ['덮는 것', '', ''], ['굳는 데 걸리는 시간', '', '']], answer: '실제: 옛 생물의 몸이나 흔적 / 덮는 것 모형 석고·실제 퇴적물 / 시간 모형 20분쯤·실제 아주 오랜 시간' },
          { type: 'figure', wide: true, prompt: '가지마다 이 단원에서 배운 것을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '지층과 화석', printCards: false, slots: ['지층', '퇴적암', '화석'], cards: ['보기'] }, caption: '' }], answer: '예: 지층 — 아래층이 먼저 쌓인다 / 퇴적암 — 알갱이 크기로 이암·사암·역암 / 화석 — 옛 환경을 알려 준다' },
          { type: 'draw', prompt: '퇴적물이 쌓여 지층이 되고 그 속에 화석이 생기기까지를 한 장의 그림으로 그리고 화살표로 차례를 나타내세요.' },
          { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○, 아직이면 △ 하세요.', columns: ['할 수 있는 것', '○ / △'], cells: [['지층이 쌓인 차례를 말할 수 있다', ''], ['이암·사암·역암을 가를 수 있다', ''], ['화석이 되는 과정을 그릴 수 있다', ''], ['화석으로 옛 환경을 추리할 수 있다', '']] },
          { type: 'short', prompt: '단원 첫 시간의 질문 "지층의 줄무늬는 왜 생겼을까요?"에 지금의 내 말로 답하세요.', answer: '알갱이의 크기와 색이 다른 퇴적물이 차례로 쌓이고 굳어 층마다 색과 두께가 달라졌기 때문이다.' },
        ],
        easy: {
          note: '쌓여요(지층) → 굳어요(퇴적암) → 묻힌 생물이 남아요(화석). 실제 화석은 아주 오랜 시간이 걸려요.',
          items: [
            { type: 'choice', prompt: '화석 모형에서 석고가 굳는 것은 실제의 무엇과 같은지 ○ 하세요.', options: ['퇴적물이 굳어 암석이 됨', '생물이 다시 살아남'], answer: '퇴적물이 굳어 암석이 됨' },
            { type: 'choice', prompt: '먼저 쌓인 층에 ○ 하세요.', options: ['맨 아래층', '맨 위층'], answer: '맨 아래층' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '실제 화석은 아주 ___ 시간이 걸려 만들어져요.', answer: '오랜' },
            { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○ 하세요.', columns: ['할 수 있는 것', '○'], cells: [['지층이 쌓인 차례 말하기', ''], ['이암·사암·역암 가르기', ''], ['화석으로 옛 환경 추리하기', '']] },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 초록 테두리가 생기고, 모형 만들기 차례 카드가 판에 함께 보여요.',
        base: '모형의 단계와 실제 과정을 스스로 잇고, 단원 문장을 세 가지로 나누어요.',
        challenge: '틀린 문장이 섞인 카드에서 옳은 것만 고르고, 단원 전체의 흐름을 한 판에 놓아요.',
      },
      teacherNotes: '준비물(모둠): 찰흙(지점토) 한 덩이, 조개껍데기·나뭇잎, 두꺼운 종이 띠와 집게, 석고 가루, 물, 종이컵·나무 막대, 마스크, 신문지. 석고는 물과 섞어 요구르트 정도로 묽게 개어 붓고 15~20분 뒤 뗀다. 자주 보이는 어려움: ① 모형을 만드는 데만 매달려 실제 화석이 만들어지는 데 걸리는 시간을 생각하지 않는다. ② 지층·퇴적암·화석의 관계를 따로따로 기억한다 → 쌓임 → 굳음 → 묻힌 생물이 남음의 한 흐름으로 묶는다. 자기 점검에서 △가 많은 항목은 다음 단원 시작 전 5분 복습 거리로 쓴다.',
    }),
  ];

  PaperLessons.registerUnit({
    id: 'g5-sci-1-01', schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 5, subject: '과학', unitTitle: '1. 지층과 화석',
    flow: '1~4차시는 지층이다. 지층 사진에서 층을 세고 두께·색을 견준 뒤(1), 여러 곳의 지층을 견주어 평평한·휘어진·끊어진 지층을 가르고(2), 컵 모형으로 아래층이 먼저 쌓인다는 것을 그림·그래프로 나타내고(3), 지층 모형을 직접 만들어 실제 지층과 견준다(4). 5~8차시는 지층을 이루는 퇴적암을 알갱이 크기로 이암·사암·역암으로 나누고(5), 퇴적암이 만들어지는 과정을 모형과 견주며(6), 관찰을 표·그래프로 정리하고(7), 돋보기로 시료의 깨진 면을 관찰해 차례로 늘어놓는다(8). 9~12차시는 화석이 되는 조건과 만들어지는 과정을 알고(9), 화석으로 옛 환경을 추리하고(10), 그 과정과 추리를 네 컷·그래프로 나타낸 뒤(11), 화석 모형을 만들어 실제 화석과 견주며 단원을 정리한다(12).',
    refs: {},
    lessons,
  });
})();
