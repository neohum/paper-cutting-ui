/* 4학년 2학기 과학 2. 생물과 환경 — 11차시
 * 생태계 구성 요소(1~4) → 먹이 사슬과 먹이그물(5~8) → 생태계 보전(9~11). 야외 조사는 학교 화단·연못에서 하고, 디지털 판은 조사 전후의 분류와 정리를 맡는다.
 */
(function () {
  const U = { grade: 4, subject: '과학', unitTitle: '2. 생물과 환경' };
  const CU = 'g4-과학-2학기-2';
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const L = (n, rest) => Object.assign({
    id: `g4-sci-2-02-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: CU, lesson: n }, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, U, rest);
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const EZ = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const FIELD = ['야외 조사는 선생님과 함께 정한 곳에서만 하고, 연못이나 물가 가까이에 가지 않아요.', '벌레·풀·버섯은 맨손으로 만지거나 입에 대지 않고, 조사를 마치면 손을 비누로 씻어요.'];
  const BV = '생물 요소';
  const NV = '비생물 요소';

  const lessons = [
    // ───────────────────────── 1차시 (intro) ─────────────────────────
    L(1, {
      title: '학교 화단에서 살아 있는 것과 아닌 것 가르기',
      objective: '생태계를 이루는 것을 생물 요소와 비생물 요소로 가르고, 눈에 잘 보이지 않는 공기·온도도 구성 요소임을 말할 수 있다.',
      standards: ['[4과14-01]'],
      safety: FIELD,
      illustration: {
        prompt: P('a school flower bed with flowers, an ant and an earthworm on the soil, small stones, and warm sunlight above, with two children looking closely with magnifying glasses'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214, colors: ['mint', 'peach', 'buttercup'] },
          { motif: 'flower', x: 150, y: 214 }, { motif: 'flower', x: 250, y: 214, color: 'rose' }, { motif: 'tree', x: 360, y: 214 },
          { motif: 'text', x: 240, y: 134, text: '화단에는 무엇이 있을까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 7,
          teacher: '"화단에 가면 무엇이 보이나요?" 학생이 말한 것을 칠판에 모두 적는다. "꽃, 개미, 흙, 돌멩이… 이 중에서 살아 있는 것과 아닌 것을 나눌 수 있을까요?" 이때 공기·햇빛·온도는 눈에 안 보인다고 빠뜨리는 경우가 많으니 "눈에 안 보여도 화단에 있는 것이 또 있을까요?"라고 되묻는다.',
          student: '화단에서 볼 수 있는 것을 말해 봐요. 살아 있는 것과 아닌 것으로 나눌 수 있을까요?',
          demo: { tool: 'lifecycle', options: { mode: 'sort', center: '화단', slots: [BV, NV], cards: [{ id: '개미', text: '개미' }, { id: '돌', text: '돌멩이' }] }, sequence: [{ sort: { [BV]: ['개미'], [NV]: ['돌'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 25,
          activities: [
            {
              id: 'a1', title: '활동 1. 화단·숲의 구성 요소 가르기', minutes: 13, tool: 'lifecycle',
              task: '카드를 읽고 생물 요소와 비생물 요소 칸으로 나눠요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
              teacher: '"살아 있는 것은 어떤 특징이 있나요?" 자라고, 먹고, 새끼를 낳거나 번식한다는 말을 이끌어 낸다. 버섯과 곰팡이를 비생물 요소에 넣는 학생이 많으니 "버섯은 자라나요? 죽은 돌은 자라나요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '학교 화단에서 찾은 것들이에요. 생물 요소와 비생물 요소로 나누어 보세요.',
                  toolOptions: { mode: 'sort', center: '화단', slots: [BV, NV], cards: [{ id: '꽃', text: '장미꽃', motif: 'flower' }, { id: '개미', text: '개미' }, { id: '지렁이', text: '지렁이' }, { id: '흙', text: '흙' }, { id: '햇빛', text: '햇빛', motif: 'sun' }, { id: '돌', text: '돌멩이' }] },
                  target: { sort: { [BV]: ['꽃', '개미', '지렁이'], [NV]: ['흙', '햇빛', '돌'] } }, difficulty: 0.15 },
                { prompt: '뒷산 숲에서 찾은 것들이에요. 생물 요소와 비생물 요소로 나누어 보세요.',
                  toolOptions: { mode: 'sort', center: '숲', slots: [BV, NV], cards: [{ id: '참나무', text: '참나무', motif: 'tree' }, { id: '다람쥐', text: '다람쥐' }, { id: '버섯', text: '버섯' }, { id: '바위', text: '바위' }, { id: '공기', text: '공기' }, { id: '빗물', text: '빗물' }] },
                  target: { sort: { [BV]: ['참나무', '다람쥐', '버섯'], [NV]: ['바위', '공기', '빗물'] } }, difficulty: 0.2 },
                { prompt: '눈에 잘 보이지 않는 것들이에요. 생물 요소와 비생물 요소로 나누어 보세요.',
                  toolOptions: { mode: 'sort', center: '안 보이지만', slots: [BV, NV], cards: [{ id: '공기', text: '공기' }, { id: '온도', text: '따뜻함·차가움(온도)' }, { id: '곰팡이', text: '빵에 핀 곰팡이' }, { id: '햇빛', text: '햇빛', motif: 'sun' }] },
                  target: { sort: { [BV]: ['곰팡이'], [NV]: ['공기', '온도', '햇빛'] } }, difficulty: 0.3,
                  predict: { q: '공기와 온도는 생태계를 이루는 것에 들어갈까요?', options: ['들어가요', '눈에 안 보여서 안 들어가요', '잘 모르겠어요'], answer: 0 },
                  conclude: '눈에 안 보여도 공기·햇빛·온도는 생태계를 이루는 비생물 요소예요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 비생물 요소가 하는 일 알아보기', minutes: 12, tool: 'mindmap',
              task: '카드를 읽고 알맞은 설명에 이어요. 맞지 않는 카드는 남겨 둬요.',
              teacher: '"햇빛이 없으면 화단의 식물은 어떻게 될까요?" 식물이 햇빛을 받아 양분을 만든다는 것을 짚는다. 2번에서 "생태계는 생물만 모인 곳이에요"라고 답하는 학생에게는 "화단에서 흙과 물을 모두 치우면 꽃은 어떻게 될까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '비생물 요소가 생물에게 하는 일을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '비생물 요소', slots: [{ id: '햇빛', label: '햇빛' }, { id: '물', label: '물' }, { id: '흙', label: '흙' }], cards: ['식물이 양분을 만드는 데 써요', '생물이 몸을 이루고 살아가는 데 필요해요', '식물이 뿌리를 내리고 작은 동물이 살아요', { id: '투명', text: '생물을 투명하게 만들어요', why: '그런 일은 하지 않아요.' }] },
                  target: { match: { 햇빛: '식물이 양분을 만드는 데 써요', 물: '생물이 몸을 이루고 살아가는 데 필요해요', 흙: '식물이 뿌리를 내리고 작은 동물이 살아요' } }, difficulty: 0.2 },
                { prompt: '생태계에 대해 옳은 설명만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '생태계', basket: '옳아요', cards: ['생물 요소와 비생물 요소가 함께 있어요', '생물은 비생물 요소의 영향을 받아요', { id: '생물만', text: '생태계는 생물만 모인 곳이에요', why: '흙·물·햇빛 같은 비생물 요소도 함께 이루어요.' }, { id: '큰것', text: '눈에 잘 띄는 큰 것만 생태계에 들어요', why: '작은 생물과 공기·온도도 생태계를 이루어요.' }] },
                  target: { pick: ['생물 요소와 비생물 요소가 함께 있어요', '생물은 비생물 요소의 영향을 받아요'] }, difficulty: 0.25 },
                { prompt: '화단에서 흙을 모두 치우면 생기는 일로 알맞은 것만 골라 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '흙이 없으면?', basket: '일어나요', cards: ['식물이 뿌리를 내리기 어려워요', '흙 속에 사는 지렁이가 살기 어려워요', { id: '그대로', text: '아무 일도 생기지 않아요', why: '흙은 식물과 작은 동물이 살아가는 바탕이에요.' }] },
                  target: { pick: ['식물이 뿌리를 내리기 어려워요', '흙 속에 사는 지렁이가 살기 어려워요'] }, difficulty: 0.3,
                  conclude: '생물은 햇빛·물·흙 같은 비생물 요소와 서로 영향을 주고받으며 살아가요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 칠판에 적은 것을 다시 두 갈래로 나누게 한다. "공기, 온도는 어느 쪽에 넣었나요?" 눈에 안 보여도 비생물 요소라는 것을 말하게 한다. 출구 질문 3번에서 버섯을 비생물 요소라고 고른 학생에게는 버섯이 자라는 모습을 사진으로 다시 보여 준다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { mode: 'sort', center: '꽃밭', slots: [BV, NV], cards: [{ id: '나비', text: '나비' }, { id: '물', text: '물' }, { id: '민들레', text: '민들레', motif: 'flower' }, { id: '바람', text: '시원한 바람' }] }, prompt: '꽃밭에서 찾은 것을 생물 요소와 비생물 요소로 나누어 보세요.', target: { sort: { [BV]: ['나비', '민들레'], [NV]: ['물', '바람'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '다음 중 비생물 요소는 무엇인가요?', options: ['개미', '햇빛', '지렁이'], answer: 1, difficulty: 0.1, explain: '햇빛은 살아 있는 것이 아니라 비생물 요소예요.' },
            { type: 'choice', prompt: '버섯은 어느 요소일까요?', options: ['생물 요소', '비생물 요소', '둘 다 아니에요'], answer: 0, difficulty: 0.25, explain: '버섯은 자라는 생물이라서 생물 요소예요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '화단의 생물 요소와 비생물 요소',
        items: [
          { type: 'table', prompt: '화단에서 찾은 것을 생물 요소와 비생물 요소로 나누어 쓰세요. 카드: 장미꽃, 개미, 흙, 햇빛, 돌멩이, 지렁이', columns: [BV, NV], cells: [['', ''], ['', ''], ['', '']], answer: '생물 요소: 장미꽃, 개미, 지렁이 / 비생물 요소: 흙, 햇빛, 돌멩이' },
          { type: 'choice', prompt: '눈에 보이지 않지만 생태계를 이루는 것에 ○ 하세요.', options: ['공기', '그림자만', '이름표'], answer: '공기' },
          { type: 'check', prompt: '비생물 요소에 모두 ✓ 하세요.', options: ['햇빛', '버섯', '공기', '지렁이'], answer: '햇빛, 공기' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '생태계는 살아 있는 ___ 요소와 살아 있지 않은 ___ 요소로 이루어져요.', answer: '생물, 비생물' },
          { type: 'short', prompt: '"공기와 온도는 눈에 안 보이니까 생태계에 들지 않는다."는 말을 고쳐 써 보세요.', answer: '눈에 안 보여도 공기와 온도는 생태계를 이루는 비생물 요소이다.' },
        ],
        easy: {
          note: '살아 있는 것은 자라요. 햇빛·물·공기·흙·온도는 살아 있지 않은 것(비생물 요소)이에요.',
          items: [
            { type: 'choice', prompt: '살아 있는 것에 ○ 하세요.', options: ['개미', '돌멩이'], answer: '개미' },
            { type: 'choice', prompt: '비생물 요소에 ○ 하세요.', options: ['햇빛', '지렁이'], answer: '햇빛' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '버섯은 ___ 요소예요.', answer: '생물' },
            { type: 'draw', prompt: '화단에서 본 것을 생물은 ○, 비생물은 △를 붙여 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말하며 카드가 돌아와요.',
        base: '카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '공기·온도·곰팡이처럼 눈에 잘 안 보이는 것이 섞이고, 함정 설명이 있어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 공기·온도·햇빛은 눈에 안 보인다고 구성 요소에서 뺀다. ② 눈에 띄는 큰 것(나무, 새)만 적고 흙이나 물을 빠뜨린다. ③ 버섯·곰팡이를 비생물 요소로 분류한다. 이 단원에서는 생산자·소비자·분해자 같은 말은 다루지 않고 생물 요소와 비생물 요소의 두 갈래만 쓴다. 야외 조사 때는 곤충·식물 관찰 후 반드시 손을 씻게 한다.',
    }),

    // ───────────────────────── 2차시 (practice) ─────────────────────────
    L(2, {
      title: '연못·갯벌·사막의 구성 요소를 견주어 가르기',
      objective: '서로 다른 곳의 구성 요소를 견주어 그곳에만 있는 것과 어디에나 있는 것을 가르고, 생물 요소와 비생물 요소로 나눌 수 있다.',
      standards: ['[4과14-01]'],
      illustration: {
        prompt: P('a pond with lily pads and a frog, a muddy tidal flat with a crab and a clam, and a sandy desert with a cactus, drawn side by side under one warm sun'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 240, y: 46, s: 0.9 }, { motif: 'wave', y: 232 }, { motif: 'hills', y: 214, colors: ['sky', 'peach', 'buttercup'] },
          { motif: 'tree', x: 90, y: 214, color: 'mint' }, { motif: 'leaf', x: 240, y: 212 }, { motif: 'mountain', x: 390, y: 214, color: 'buttercup' },
          { motif: 'text', x: 240, y: 134, text: '곳마다 무엇이 다를까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '연못, 갯벌, 사막 사진을 한 줄로 보여 준다. "세 곳에 모두 있는 것은 무엇일까요? 한 곳에만 있는 것은요?" 생물은 곳마다 다르지만 햇빛·공기 같은 비생물 요소는 어디에나 있다는 답이 나올 수 있도록 유도한다. 사막에는 생물이 없다고 말하는 학생에게는 선인장 사진을 보여 준다.',
          student: '연못, 갯벌, 사막에 모두 있는 것은 무엇일까요?',
          demo: { tool: 'lifecycle', options: { mode: 'sort', center: '연못', slots: [BV, NV], cards: [{ id: '개구리', text: '개구리', motif: 'frog' }, { id: '물', text: '물' }] }, sequence: [{ sort: { [BV]: ['개구리'], [NV]: ['물'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 여러 곳의 구성 요소 가르기', minutes: 13, tool: 'lifecycle',
              task: '카드를 읽고 생물 요소와 비생물 요소 칸으로 나눠요.',
              teacher: '"갯벌의 갯지렁이는 생물일까요, 아닐까요?" 눈에 잘 띄지 않는 생물도 생물 요소라는 것을 짚는다. 3번에서 사막의 모래를 생물 요소로 넣는 학생에게 "모래는 자라나요? 숨을 쉬나요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '연못에서 찾은 것들이에요. 생물 요소와 비생물 요소로 나누어 보세요.',
                  toolOptions: { mode: 'sort', center: '연못', slots: [BV, NV], cards: [{ id: '연꽃', text: '연꽃', motif: 'flower' }, { id: '붕어', text: '붕어' }, { id: '개구리', text: '개구리', motif: 'frog' }, { id: '물', text: '연못물' }, { id: '진흙', text: '바닥 진흙' }, { id: '햇빛', text: '햇빛', motif: 'sun' }] },
                  target: { sort: { [BV]: ['연꽃', '붕어', '개구리'], [NV]: ['물', '진흙', '햇빛'] } }, difficulty: 0.15 },
                { prompt: '갯벌에서 찾은 것들이에요. 생물 요소와 비생물 요소로 나누어 보세요.',
                  toolOptions: { mode: 'sort', center: '갯벌', slots: [BV, NV], cards: [{ id: '조개', text: '조개' }, { id: '게', text: '게' }, { id: '갯지렁이', text: '갯지렁이' }, { id: '바닷물', text: '밀려온 바닷물' }, { id: '갯벌흙', text: '갯벌 흙' }, { id: '공기', text: '바닷바람' }] },
                  target: { sort: { [BV]: ['조개', '게', '갯지렁이'], [NV]: ['바닷물', '갯벌흙', '공기'] } }, difficulty: 0.2 },
                { prompt: '사막에서 찾은 것들이에요. 생물 요소와 비생물 요소로 나누어 보세요.',
                  toolOptions: { mode: 'sort', center: '사막', slots: [BV, NV], cards: [{ id: '선인장', text: '선인장' }, { id: '낙타', text: '낙타' }, { id: '도마뱀', text: '도마뱀' }, { id: '모래', text: '모래' }, { id: '바위', text: '바위' }, { id: '햇빛', text: '뜨거운 햇빛', motif: 'sun' }] },
                  target: { sort: { [BV]: ['선인장', '낙타', '도마뱀'], [NV]: ['모래', '바위', '햇빛'] } }, difficulty: 0.25,
                  conclude: '곳마다 사는 생물은 달라도 모두 생물 요소와 비생물 요소로 나눌 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 그곳에만 있는 것과 어디에나 있는 것', minutes: 13, tool: 'mindmap',
              task: '카드를 읽고, 한 곳에만 있는 것과 두 곳에 모두 있는 것으로 나누어요.',
              teacher: '"햇빛은 연못에만 있을까요, 숲에도 있을까요?" 어디에나 있는 비생물 요소를 짚는다. 사막에도 생물이 있다는 것을 선인장·낙타로 확인하며 "생물이 없는 곳은 없을까요? 있다고 해서 생태계가 아닐까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '연못과 숲을 견주었어요. 한 곳에만 있는 것과 둘 다에 있는 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '연못과 숲', slots: ['연못에만 있어요', '숲에만 있어요', '둘 다에 있어요'], cards: ['연꽃', '참나무', '햇빛', '공기'] },
                  target: { sort: { '연못에만 있어요': ['연꽃'], '숲에만 있어요': ['참나무'], '둘 다에 있어요': ['햇빛', '공기'] } }, difficulty: 0.2 },
                { prompt: '바다와 사막을 견주었어요. 한 곳에만 있는 것과 둘 다에 있는 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '바다와 사막', slots: ['바다에만 있어요', '사막에만 있어요', '둘 다에 있어요'], cards: ['산호', '선인장', '햇빛', '공기'] },
                  target: { sort: { '바다에만 있어요': ['산호'], '사막에만 있어요': ['선인장'], '둘 다에 있어요': ['햇빛', '공기'] } }, difficulty: 0.25 },
                { prompt: '서로 다른 곳을 견주어 알게 된 것으로 옳은 설명만 골라 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '견주어 알게 된 것', basket: '옳아요', cards: ['곳마다 사는 생물이 달라요', '어느 곳에나 햇빛과 공기 같은 비생물 요소가 있어요', { id: '사막없음', text: '사막에는 생물이 하나도 없어요', why: '선인장, 낙타처럼 사막에도 사는 생물이 있어요.' }, { id: '같아', text: '모든 곳의 구성 요소가 똑같아요', why: '곳마다 있는 생물이 달라요.' }] },
                  target: { pick: ['곳마다 사는 생물이 달라요', '어느 곳에나 햇빛과 공기 같은 비생물 요소가 있어요'] }, difficulty: 0.3,
                  conclude: '곳마다 생물 요소는 달라도, 모든 곳에는 비생물 요소와 생물 요소가 함께 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 학생이 말한 "세 곳에 모두 있는 것"을 다시 가리킨다. 햇빛·공기처럼 어디에나 있는 비생물 요소와 곳마다 다른 생물 요소를 한 문장으로 말하게 한다. 출구 질문 2번에서 사막에 생물이 없다고 고른 학생에게는 선인장 사진을 다시 보여 준다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { mode: 'sort', center: '개울', slots: [BV, NV], cards: [{ id: '가재', text: '가재' }, { id: '자갈', text: '자갈' }, { id: '물풀', text: '물풀', motif: 'leaf' }, { id: '개울물', text: '개울물' }] }, prompt: '개울에서 찾은 것을 생물 요소와 비생물 요소로 나누어 보세요.', target: { sort: { [BV]: ['가재', '물풀'], [NV]: ['자갈', '개울물'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '사막과 바다에 모두 있는 비생물 요소는 무엇인가요?', options: ['선인장', '햇빛', '산호'], answer: 1, difficulty: 0.15, explain: '햇빛과 공기는 어디에나 있는 비생물 요소예요.' },
            { type: 'choice', prompt: '"사막에는 생물이 하나도 없다."는 말은 맞을까요?', options: ['맞아요', '틀려요. 선인장, 낙타가 살아요', '모래가 생물이에요'], answer: 1, difficulty: 0.25, explain: '사막에도 선인장, 낙타, 도마뱀 같은 생물이 살아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '여러 곳의 구성 요소 견주기',
        items: [
          { type: 'table', prompt: '연못, 갯벌, 사막에서 찾은 것을 생물 요소와 비생물 요소로 나누어 쓰세요.', columns: ['곳', BV, NV], cells: [['연못', '', ''], ['갯벌', '', ''], ['사막', '', '']], answer: '연못 연꽃·붕어 / 물·진흙, 갯벌 조개·게 / 바닷물·갯벌 흙, 사막 선인장·낙타 / 모래·햇빛 등' },
          { type: 'check', prompt: '모든 곳에 있는 비생물 요소에 모두 ✓ 하세요.', options: ['햇빛', '공기', '연꽃', '산호'], answer: '햇빛, 공기' },
          { type: 'choice', prompt: '곳마다 다른 것에 ○ 하세요.', options: ['사는 생물', '햇빛이 있다는 것', '공기가 있다는 것'], answer: '사는 생물' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '곳마다 ___ 요소는 달라도, 모든 곳에는 ___ 요소와 생물 요소가 함께 있어요.', answer: '생물, 비생물' },
          { type: 'short', prompt: '"사막에는 생물이 없다."는 말을 고쳐 써 보세요.', answer: '사막에도 선인장, 낙타 같은 생물이 살고 있다.' },
        ],
        easy: {
          note: '곳마다 사는 생물은 달라요. 햇빛과 공기는 어디에나 있어요.',
          items: [
            { type: 'choice', prompt: '어디에나 있는 것에 ○ 하세요.', options: ['햇빛', '연꽃'], answer: '햇빛' },
            { type: 'choice', prompt: '사막에 사는 생물에 ○ 하세요.', options: ['선인장', '산호'], answer: '선인장' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '곳마다 사는 ___은 달라요.', answer: '생물' },
            { type: 'draw', prompt: '연못에서 찾은 생물 하나와 비생물 하나를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 카드가 네 장으로 줄어요.',
        base: '카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '한 곳에만 있는 것과 어디에나 있는 것을 세 칸으로 가르고, 함정 설명을 가려내요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 사막에는 생물이 없다고 생각한다. ② 눈에 안 띄는 생물(갯지렁이, 곰팡이)을 빠뜨린다. ③ 곳이 달라지면 구성 요소의 종류도 아예 달라진다고 생각한다 → 햇빛·공기·물 같은 것은 어디에나 있다. 갯벌·사막 사진은 학교 도서관 자료나 공공 기관 누리집의 것을 쓴다.',
    }),

    // ───────────────────────── 3차시 (core, 자료 표현) ─────────────────────────
    L(3, {
      title: '조사한 것을 두 갈래 표로 만들고 그림에 표시하기',
      objective: '조사한 구성 요소를 두 갈래로 나눈 표로 정리하고, 그림에 생물과 비생물을 서로 다른 표시로 나타낼 수 있다.',
      standards: ['[4과14-01]'],
      illustration: {
        prompt: P('a drawn park scene with trees, a green lawn, birds and soil, and a two-column table beside it with circles for living things and triangles for non-living things'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 190, y: 214 }, { motif: 'bird', x: 300, y: 80 },
          { motif: 'text', x: 240, y: 152, text: '○ 생물, △ 비생물', size: 24 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '공원 그림을 칠판에 붙이고 "여기서 찾은 것을 한 줄로 적을 수 있을까요?" 학생이 말하는 대로 나열해 적은 뒤 "이걸 보면 어느 것이 살아 있는지 한눈에 보이나요?" 하고 묻는다. 이름만 적으면 갈래를 알기 어렵다는 점을 느끼게 하고, 두 갈래로 나눈 표와 그림 표시로 나타낼 수 있다고 연결한다.',
          student: '찾은 것을 이름만 적으면 어느 것이 생물인지 한눈에 알 수 있을까요?',
          demo: { tool: 'lifecycle', options: { mode: 'sort', center: '공원', slots: [BV, NV], cards: [{ id: '참새', text: '참새', motif: 'bird' }, { id: '벤치흙', text: '흙' }] }, sequence: [{ sort: { [BV]: ['참새'], [NV]: ['벤치흙'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 두 갈래 표 만들기', minutes: 13, tool: 'lifecycle',
              task: '조사한 이름 카드를 읽고, 두 갈래 표의 칸에 알맞게 놓아요.',
              teacher: '"표 안에 같은 이름이 두 번 들어가도 될까요?" 한 가지는 한 갈래에만 들어간다고 짚는다. 3번에서 빠뜨리기 쉬운 공기와 온도를 가리키며 "표에 이 둘도 적었나요?" 하고 짝끼리 서로 점검하게 한다.',
              levels: EZ,
              items: [
                { prompt: '공원에서 조사한 것들이에요. 표의 알맞은 칸에 놓아 보세요.',
                  toolOptions: { mode: 'sort', center: '공원', slots: [BV, NV], cards: [{ id: '느티나무', text: '느티나무', motif: 'tree' }, { id: '잔디', text: '잔디' }, { id: '참새', text: '참새', motif: 'bird' }, { id: '흙', text: '흙' }, { id: '햇빛', text: '햇빛', motif: 'sun' }, { id: '빗물', text: '고인 빗물' }] },
                  target: { sort: { [BV]: ['느티나무', '잔디', '참새'], [NV]: ['흙', '햇빛', '빗물'] } }, difficulty: 0.2 },
                { prompt: '학교 연못 가에서 조사한 것들이에요. 표의 알맞은 칸에 놓아 보세요.',
                  toolOptions: { mode: 'sort', center: '연못 가', slots: [BV, NV], cards: [{ id: '부들', text: '부들' }, { id: '잠자리', text: '잠자리' }, { id: '붕어', text: '붕어' }, { id: '돌', text: '물가의 돌' }, { id: '물', text: '연못물' }, { id: '바람', text: '시원한 바람' }] },
                  target: { sort: { [BV]: ['부들', '잠자리', '붕어'], [NV]: ['돌', '물', '바람'] } }, difficulty: 0.25 },
                { prompt: '조사표에 빠뜨리기 쉬운 것들까지 모두 넣어 보세요.',
                  toolOptions: { mode: 'sort', center: '빠뜨리기 쉬운 것', slots: [BV, NV], cards: [{ id: '공기', text: '공기' }, { id: '온도', text: '따뜻함·차가움(온도)' }, { id: '이끼', text: '바위 위의 이끼' }, { id: '곰팡이', text: '빵 위의 곰팡이' }] },
                  target: { sort: { [BV]: ['이끼', '곰팡이'], [NV]: ['공기', '온도'] } }, difficulty: 0.3,
                  conclude: '공기·온도 같은 비생물 요소와 이끼·곰팡이 같은 작은 생물도 표에 꼭 넣어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 표와 그림에 표시하기', minutes: 13, tool: 'mindmap',
              task: '표를 만들고 그림에 표시하는 차례와 방법을 카드로 정리해요.',
              teacher: '"그림에 표시할 때 ○와 △를 섞어 쓰면 어떻게 될까요?" 생물은 ○, 비생물은 △처럼 한 가지 약속을 정해 끝까지 지켜야 한다고 짚는다. 표에는 이름만 적고 어느 갈래인지 표시하지 않은 기록을 보여 주며 "어느 쪽 요소인지 알 수 있나요?"라고 묻는다.',
              levels: EZ,
              items: [
                { prompt: '조사한 내용을 표로 만드는 차례로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '표 만들기', slots: ['먼저 하는 일', '나중에 하는 일'], cards: ['찾은 것의 이름을 모두 적어요', '이름을 두 갈래로 나누어요', '표에서 빠진 것이 없는지 살펴요', '그림에 표시해요'] },
                  target: { sort: { '먼저 하는 일': ['찾은 것의 이름을 모두 적어요', '이름을 두 갈래로 나누어요'], '나중에 하는 일': ['표에서 빠진 것이 없는지 살펴요', '그림에 표시해요'] } }, difficulty: 0.2 },
                { prompt: '표와 그림을 바르게 만든 것과 고쳐야 할 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '표 점검', slots: ['바르게 만들었어요', '고쳐야 해요'], cards: ['생물은 ○, 비생물은 △로 약속을 정해 표시했어요', '이름마다 어느 갈래인지 표에 적었어요', '이름만 적고 갈래는 적지 않았어요', '○와 △를 섞어 마음대로 썼어요'] },
                  target: { sort: { '바르게 만들었어요': ['생물은 ○, 비생물은 △로 약속을 정해 표시했어요', '이름마다 어느 갈래인지 표에 적었어요'], '고쳐야 해요': ['이름만 적고 갈래는 적지 않았어요', '○와 △를 섞어 마음대로 썼어요'] } }, difficulty: 0.25 },
                { prompt: '그림에 표시할 때 알맞은 일만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '그림에 표시', basket: '알맞아요', cards: ['표시 약속을 정해 그림 구석에 적어요', '생물과 비생물에 서로 다른 모양을 써요', { id: '섞어', text: '생물과 비생물에 같은 모양을 써요', why: '같은 모양이면 갈래를 구별할 수 없어요.' }, { id: '지워', text: '비생물은 그림에서 지워요', why: '비생물 요소도 생태계의 일부라 표시해야 해요.' }] },
                  target: { pick: ['표시 약속을 정해 그림 구석에 적어요', '생물과 비생물에 서로 다른 모양을 써요'] }, difficulty: 0.25,
                  conclude: '생물과 비생물을 서로 다른 모양으로 표시하고 약속을 적어 두면 한눈에 알 수 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 이름만 적은 목록과 오늘 만든 표를 견주게 한다. "표로 나누니까 무엇이 좋아졌나요?" 갈래별로 한눈에 보인다는 대답을 확인한다. 출구 질문 2번에서 표시 약속 없이 모양을 섞어 쓴다고 고른 학생에게는 범례 칸에 약속을 쓰는 활동을 하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { mode: 'sort', center: '운동장 가', slots: [BV, NV], cards: [{ id: '민들레', text: '민들레', motif: 'flower' }, { id: '모래', text: '모래' }, { id: '개미', text: '개미' }, { id: '공기', text: '공기' }] }, prompt: '운동장 가에서 찾은 것을 표의 알맞은 칸에 놓아 보세요.', target: { sort: { [BV]: ['민들레', '개미'], [NV]: ['모래', '공기'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '그림에 생물과 비생물을 표시할 때 알맞은 방법은 무엇인가요?', options: ['서로 다른 모양으로 표시하고 약속을 적어요', '같은 모양으로 모두 표시해요', '표시하지 않아요'], answer: 0, difficulty: 0.15, explain: '서로 다른 모양과 약속이 있어야 갈래를 알아볼 수 있어요.' },
            { type: 'choice', prompt: '표를 만들 때 빠뜨리기 쉬운 것으로 알맞은 것은 무엇인가요?', options: ['공기와 온도', '큰 나무', '눈에 띄는 꽃'], answer: 0, difficulty: 0.2, explain: '눈에 안 보이는 공기와 온도를 자주 빠뜨려요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '두 갈래 표와 그림 표시',
        items: [
          { type: 'table', prompt: '학교 화단이나 운동장에서 찾은 것을 표에 정리하세요.', columns: [BV, NV], cells: [['', ''], ['', ''], ['', ''], ['', '']], answer: '조사한 곳에 따라 다름. 공기·햇빛 같은 비생물 요소를 빠뜨리지 않았는지, 갈래가 맞는지 확인' },
          { type: 'draw', prompt: '조사한 곳을 그림으로 그리고, 생물은 ○, 비생물은 △로 표시하세요. 그림 구석에 표시 약속도 쓰세요.' },
          { type: 'check', prompt: '표를 바르게 만든 것에 모두 ✓ 하세요.', options: ['이름을 두 갈래로 나누었다', '공기·햇빛도 적었다', '이름만 쓰고 갈래는 적지 않았다', '○와 △를 섞어 마음대로 썼다'], answer: '이름을 두 갈래로 나누었다, 공기·햇빛도 적었다' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '표를 만들면 생물과 ___을 한눈에 구분할 수 있어요.', answer: '비생물' },
          { type: 'short', prompt: '이름만 길게 적은 목록보다 두 갈래 표가 더 좋은 점을 써 보세요.', answer: '어느 것이 생물이고 비생물인지 갈래별로 한눈에 알 수 있다.' },
        ],
        easy: {
          note: '생물은 ○, 비생물은 △로 약속을 정하고, 그림 구석에 약속을 적어요.',
          items: [
            { type: 'choice', prompt: '비생물 요소에 ○ 하세요.', options: ['공기', '개미'], answer: '공기' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '표를 만들 때 ___과 온도도 빠뜨리지 않아요.', answer: '공기' },
            { type: 'table', prompt: '찾은 것을 표에 써 보세요.', columns: [BV, NV], cells: [['', ''], ['', '']] },
            { type: 'draw', prompt: '찾은 것 두 가지를 그리고 ○, △를 붙여 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 카드가 네 장 이내로 줄어요.',
        base: '카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '이끼·곰팡이·공기처럼 빠뜨리기 쉬운 것을 가려 표에 모두 넣어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 표에 이름만 적고 어느 갈래인지 표시하지 않는다. ② 그림에서 생물만 표시하고 비생물 요소를 빠뜨린다. ③ 한 가지 이름을 두 갈래에 걸쳐 적는다. 활동지는 실제 조사한 곳의 그림으로 대체해도 좋다. 표시 약속(○·△)은 학생이 정한 다른 모양도 허용하되 한 장 안에서는 일관되어야 한다.',
    }),

    // ───────────────────────── 4차시 (core, 탐구 적용) ─────────────────────────
    L(4, {
      title: '학교 화단 조사 계획 세우고 빠짐없이 찾아 목록 만들기',
      objective: '정한 장소에서 눈에 띄는 것과 잘 안 보이는 것을 빠짐없이 찾아 적고, 생물 요소와 비생물 요소의 목록으로 만들 수 있다.',
      standards: ['[4과14-01]'],
      safety: [...FIELD, '풀밭에서는 긴 바지와 운동화를 신고, 벌이나 모기가 있으면 가까이 가지 않고 선생님께 알려요.'],
      illustration: {
        prompt: P('children in hats crouching around a school flower bed with clipboards, a magnifying glass over the soil, and a simple checklist drawn on the clipboard'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 120, y: 48 }, { motif: 'hills', y: 214, colors: ['mint', 'peach', 'lavender'] },
          { motif: 'flower', x: 160, y: 214 }, { motif: 'flower', x: 260, y: 214, color: 'peach' }, { motif: 'leaf', x: 350, y: 212 },
          { motif: 'text', x: 240, y: 148, text: '빠짐없이 찾아 적어요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"화단을 조사할 때 눈에 띄는 큰 것만 적으면 어떻게 될까요?" 흙이나 물, 작은 벌레를 놓치기 쉽다는 점을 짚는다. 조사 계획에 장소·시간·찾을 것·안전을 정해야 한다고 알린다. 바깥에 나가기 전에 지킬 약속(맨손으로 만지지 않기, 물가 가까이 가지 않기, 끝나면 손 씻기)을 함께 읽는다.',
          student: '화단을 조사할 때 빠뜨리지 않으려면 무엇을 계획해야 할까요?',
          demo: { tool: 'story', options: { shuffle: false, slots: ['먼저', '다음'], cards: [{ id: 'a', text: '조사할 곳을 정해요' }, { id: 'b', text: '눈에 띄는 것을 찾아 적어요' }] }, sequence: [{ order: ['a', 'b'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 조사하는 차례 정하기', minutes: 9, tool: 'story',
              task: '카드를 읽고 알맞은 차례로 자리에 놓거나 때(전·중·후)에 맞는 칸에 나누어요.',
              teacher: '"조사 전에 정할 것과 조사하면서 할 것은 무엇일까요?" 안전 약속은 나가기 전에 읽는다는 점을 짚는다. 2번에서 목록을 만드는 일을 조사 전에 놓는 학생에게는 "아직 찾은 것이 없는데 목록을 만들 수 있을까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '화단 조사를 하는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: [{ id: 'a1', text: '조사할 곳과 안전 약속을 정해요' }, { id: 'a2', text: '눈에 띄는 것을 찾아 적어요' }, { id: 'a3', text: '흙·물·공기처럼 잘 안 보이는 것도 찾아요' }, { id: 'a4', text: '찾은 것을 두 갈래로 나누어요' }, { id: 'a5', text: '손을 씻고 목록을 정리해요' }] },
                  target: { order: ['a1', 'a2', 'a3', 'a4', 'a5'] }, difficulty: 0.2 },
                { prompt: '조사한 것을 목록으로 만드는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'b1', text: '찾은 것의 이름을 모두 적어요' }, { id: 'b2', text: '살아 있는 것과 아닌 것으로 나누어요' }, { id: 'b3', text: '빠진 것이 없는지 다시 살펴요' }, { id: 'b4', text: '표나 목록으로 깨끗이 옮겨 적어요' }] },
                  target: { order: ['b1', 'b2', 'b3', 'b4'] }, difficulty: 0.2 },
                { prompt: '조사 전·조사하는 동안·조사한 뒤로 알맞은 칸에 나누어 보세요.',
                  toolOptions: { mode: 'sort', slots: ['조사 전', '조사하는 동안', '조사한 뒤'], cards: ['안전 약속을 읽어요', '기록장과 돋보기를 챙겨요', '벌레는 맨손으로 만지지 않고 살펴봐요', '찾은 것을 그때그때 적어요', '손을 비누로 씻어요', '갈래별 목록을 만들어요'] },
                  target: { sort: { '조사 전': ['안전 약속을 읽어요', '기록장과 돋보기를 챙겨요'], '조사하는 동안': ['벌레는 맨손으로 만지지 않고 살펴봐요', '찾은 것을 그때그때 적어요'], '조사한 뒤': ['손을 비누로 씻어요', '갈래별 목록을 만들어요'] } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 빠뜨리기 쉬운 것 찾기', minutes: 9, tool: 'mindmap',
              task: '카드를 읽고, 알맞은 가지나 바구니에 놓아요.',
              teacher: '"큰 나무는 잘 보이는데 흙 속의 지렁이는 어떻게 찾을까요?" 낙엽을 살짝 들춰 보거나 돋보기를 쓰는 방법을 말하게 한다. 3번에서 "눈에 보이지 않으니 적지 않아요"라고 하는 학생에게는 공기가 없으면 어떻게 될지 물어 비생물 요소의 중요성을 떠올리게 한다.',
              levels: EZ,
              items: [
                { prompt: '조사할 때 빠뜨리기 쉬운 것과 눈에 잘 띄는 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '빠뜨리기 쉬운 것', slots: ['눈에 잘 띄는 것', '빠뜨리기 쉬운 것'], cards: ['큰 나무', '활짝 핀 꽃', '흙 속의 지렁이', '공기와 온도'] },
                  target: { sort: { '눈에 잘 띄는 것': ['큰 나무', '활짝 핀 꽃'], '빠뜨리기 쉬운 것': ['흙 속의 지렁이', '공기와 온도'] } }, difficulty: 0.2 },
                { prompt: '빠뜨리지 않고 찾는 방법만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '빠짐없이 찾기', basket: '좋은 방법', cards: ['돋보기로 작은 것을 살펴봐요', '낙엽 밑이나 돌 밑도 살펴봐요', '흙·물·햇빛도 목록에 넣어요', { id: '큰것만', text: '눈에 띄는 큰 것만 적어요', why: '작은 생물과 비생물 요소를 놓쳐요.' }] },
                  target: { pick: ['돋보기로 작은 것을 살펴봐요', '낙엽 밑이나 돌 밑도 살펴봐요', '흙·물·햇빛도 목록에 넣어요'] }, difficulty: 0.25 },
                { prompt: '조사 기록에서 아쉬운 점과 고쳐 쓰는 방법을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '이럴 때는?', slots: [{ id: 'big', label: '나무와 꽃만 적었어요' }, { id: 'air', label: '공기와 햇빛을 적지 않았어요' }], cards: ['작은 생물도 찾아 적어요', '비생물 요소도 목록에 넣어요', '더 큰 나무를 찾아요'] },
                  target: { match: { big: '작은 생물도 찾아 적어요', air: '비생물 요소도 목록에 넣어요' } }, difficulty: 0.3,
                  conclude: '작은 생물과 공기·햇빛 같은 비생물 요소까지 빠짐없이 찾아야 해요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 조사 점검표 확인하기', minutes: 8, tool: 'kitchen',
              task: '조사 점검표를 읽고, 알맞게 한 일에만 표시해요.',
              teacher: '"점검표에서 지키지 않은 것이 있으면 어떻게 할까요?" 안전 약속은 한 번이라도 어기면 안 된다고 분명히 말한다. 조사를 마친 뒤 손 씻기를 빠뜨리는 학생이 많으니 마지막 문항에서 짚는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '조사하러 나가기 전에 해야 할 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '조사 전', items: [{ id: 'safe', text: '안전 약속을 읽어요' }, { id: 'tools', text: '기록장과 돋보기를 챙겨요' }, { id: 'pond', text: '혼자 연못 가까이 가요' }, { id: 'team', text: '선생님이 정한 곳을 확인해요' }] },
                  target: { checklist: ['safe', 'tools', 'team'] }, difficulty: 0.15 },
                { prompt: '조사하는 동안 알맞게 한 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '조사 중', items: [{ id: 'look', text: '벌레를 맨손으로 만지지 않고 살펴봐요' }, { id: 'write', text: '찾은 것을 그때그때 적어요' }, { id: 'mush', text: '버섯을 따서 입에 대 봐요' }, { id: 'under', text: '돌 밑·낙엽 밑도 조심히 살펴봐요' }] },
                  target: { checklist: ['look', 'write', 'under'] }, difficulty: 0.2 },
                { prompt: '조사를 마치고 해야 할 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '조사 뒤', items: [{ id: 'wash', text: '비누로 손을 씻어요' }, { id: 'list', text: '찾은 것을 두 갈래 목록으로 만들어요' }, { id: 'toss', text: '찾은 풀과 벌레를 가져와 교실에 풀어요' }, { id: 'leave', text: '그 자리에 쓰레기를 남기지 않아요' }] },
                  target: { checklist: ['wash', 'list', 'leave'] }, difficulty: 0.2 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"우리가 만든 목록에 공기와 햇빛이 들어 있나요?" 목록을 바꿔 서로 읽으며 빠진 것이 없는지 짝끼리 확인하게 한다. 출구 질문 3번에서 조사한 생물을 가져와 교실에 풀겠다고 고른 학생에게는 생물이 살던 곳에 그대로 두는 것이 약속이라고 다시 말해 준다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: 'e1', text: '조사할 곳과 안전 약속을 정해요' }, { id: 'e2', text: '찾은 것을 적어요' }, { id: 'e3', text: '두 갈래 목록으로 나누어요' }] }, prompt: '조사하는 차례대로 자리에 놓아 보세요.', target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '화단 조사에서 빠뜨리기 쉬운 것은 무엇인가요?', options: ['큰 나무', '공기와 흙 속의 작은 생물', '활짝 핀 꽃'], answer: 1, difficulty: 0.2, explain: '눈에 잘 안 띄는 작은 생물과 공기·온도도 꼭 찾아야 해요.' },
            { type: 'choice', prompt: '조사를 마친 뒤에 가장 알맞은 행동은 무엇인가요?', options: ['찾은 벌레를 교실에 가져와요', '비누로 손을 씻어요', '버섯을 맛봐요'], answer: 1, difficulty: 0.1, explain: '조사 뒤에는 손을 씻고, 생물은 살던 곳에 그대로 둬요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '화단 조사 계획과 목록',
        items: [
          { type: 'table', prompt: '내가 정한 화단 조사 계획을 채워 보세요.', columns: ['정할 것', '내 계획'], cells: [['조사할 곳', ''], ['조사할 시간', ''], ['준비물', ''], ['지킬 안전 약속', '']], answer: '학생마다 다름. 장소·준비물·안전 약속이 정해졌는지 확인' },
          { type: 'table', prompt: '조사한 것을 두 갈래 목록으로 만드세요.', columns: [BV, NV], cells: [['', ''], ['', ''], ['', ''], ['', '']], answer: '조사한 곳에 따라 다름' },
          { type: 'check', prompt: '빠짐없이 찾는 방법에 모두 ✓ 하세요.', options: ['돋보기로 작은 것을 살펴본다', '낙엽·돌 밑도 살펴본다', '눈에 띄는 큰 것만 적는다', '공기·햇빛도 목록에 넣는다'], answer: '돋보기로 작은 것을 살펴본다, 낙엽·돌 밑도 살펴본다, 공기·햇빛도 목록에 넣는다' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '조사를 마치면 ___로 손을 씻고, 찾은 생물은 살던 곳에 그대로 ___.', answer: '비누, 둬요' },
          { type: 'short', prompt: '조사 기록에서 빠진 것이 있는지 확인하는 방법을 한 가지 써 보세요.', answer: '짝과 목록을 바꿔 읽으며 공기·햇빛·작은 생물이 빠졌는지 살핀다.' },
        ],
        easy: {
          note: '나가기 전 안전 약속을 읽고, 흙·물·공기도 목록에 넣어요.',
          items: [
            { type: 'choice', prompt: '조사 뒤에 하는 일에 ○ 하세요.', options: ['손을 씻어요', '벌레를 가져와요'], answer: '손을 씻어요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '목록에는 ___과 햇빛도 넣어요.', answer: '공기' },
            { type: 'table', prompt: '찾은 것을 목록으로 써 보세요.', columns: [BV, NV], cells: [['', ''], ['', '']] },
            { type: 'draw', prompt: '찾은 작은 생물 하나를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 차례 카드에 번호가 보여요.',
        base: '차례와 점검표를 스스로 채우고 확인해요.',
        challenge: '빠뜨리기 쉬운 것과 안전 행동을 따져 함정 카드를 가려내요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 눈에 띄는 큰 생물만 적고 흙이나 물 같은 것은 빠뜨린다. ② 조사 중 안전 약속을 잊는다(맨손으로 벌레 잡기, 버섯 따기). ③ 목록에 같은 것을 두 갈래에 적는다. 조사 장소는 학교 화단·운동장 가장자리처럼 안전한 곳으로 하고, 연못은 멀리서만 본다. 알레르기가 있는 학생(꽃가루, 벌 등)은 미리 가정에 확인한다.',
    }),

    // ───────────────────────── 5차시 (core, 개념) ─────────────────────────
    L(5, {
      title: '풀밭의 먹이 사슬 화살표를 먹히는 쪽에서 먹는 쪽으로 놓기',
      objective: '먹고 먹히는 관계를 먹이 사슬로 나타낼 때 화살표가 먹히는 쪽에서 먹는 쪽을 향한다는 것을 설명할 수 있다.',
      standards: ['[4과14-02]'],
      illustration: {
        prompt: P('a grass blade, a grasshopper, a frog and a snake lined up in a row with curved arrows from each one to the one that eats it, on a green meadow'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'hills', y: 214, colors: ['mint', 'buttercup', 'sky'] },
          { motif: 'leaf', x: 100, y: 202 }, { motif: 'bird', x: 220, y: 110 }, { motif: 'flower', x: 340, y: 210 },
          { motif: 'text', x: 240, y: 140, text: '누가 누구를 먹을까요?', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"메뚜기가 풀을 먹고, 개구리가 메뚜기를 먹고, 뱀이 개구리를 먹어요. 이것을 화살표로 이으면 어느 쪽으로 그릴까요?" 학생들이 칠판에 화살표를 그리게 해서 방향이 갈리는 모습을 그대로 둔다. 먹는 쪽에서 먹히는 쪽으로 그리는 학생이 많으니, 정답을 바로 알려 주지 않고 오늘 알아볼 질문으로 남긴다.',
          student: '메뚜기가 풀을 먹어요. 화살표는 어느 쪽으로 그려야 할까요?',
          demo: { tool: 'lifecycle', options: { shuffle: false, center: '먹이 사슬', cycle: false, cards: [{ id: '풀', text: '풀', motif: 'leaf' }, { id: '메뚜기', text: '메뚜기' }] }, sequence: [{ order: ['풀', '메뚜기'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 먹이 사슬 차례대로 놓기', minutes: 14, tool: 'lifecycle',
              task: '먹이 사슬 카드를 판의 자리에 놓아요. 화살표는 먹히는 쪽에서 먹는 쪽으로 향해요. 첫째 자리가 사슬의 시작이에요.',
              teacher: '"사슬의 시작에는 무엇이 올까요? 풀처럼 스스로 양분을 만드는 식물이에요." 화살표가 향하는 쪽이 먹는 생물이라고 판의 화살표를 짚으며 소리 내어 읽게 한다. 도입에서 거꾸로 그린 학생에게 "이 화살표가 향하는 곳에서 먹는다는 뜻이에요"라고 다시 말한다.',
              levels: EZ,
              items: [
                { prompt: '풀밭의 먹이 사슬이에요. 먹히는 쪽에서 먹는 쪽으로 판에 놓아 보세요.',
                  toolOptions: { center: '풀밭', cycle: false, cards: [{ id: '풀', text: '풀', motif: 'leaf' }, { id: '메뚜기', text: '메뚜기' }, { id: '개구리', text: '개구리', motif: 'frog' }, { id: '뱀', text: '뱀' }] },
                  target: { order: ['풀', '메뚜기', '개구리', '뱀'] }, difficulty: 0.15 },
                { prompt: '숲의 먹이 사슬이에요. 먹히는 쪽에서 먹는 쪽으로 판에 놓아 보세요.',
                  toolOptions: { center: '숲', cycle: false, cards: [{ id: '풀잎', text: '풀잎', motif: 'leaf' }, { id: '애벌레', text: '애벌레', motif: 'larva' }, { id: '박새', text: '박새', motif: 'bird' }, { id: '매', text: '매' }] },
                  target: { order: ['풀잎', '애벌레', '박새', '매'] }, difficulty: 0.2 },
                { prompt: '이번 사슬은 도토리에서 시작해요. 먹히는 쪽에서 먹는 쪽으로 놓아 보세요.',
                  toolOptions: { center: '도토리 숲', cycle: false, cards: [{ id: '도토리', text: '도토리' }, { id: '들쥐', text: '들쥐' }, { id: '뱀', text: '뱀' }, { id: '매', text: '매' }] },
                  target: { order: ['도토리', '들쥐', '뱀', '매'] }, difficulty: 0.25,
                  conclude: '먹이 사슬의 화살표는 먹히는 쪽에서 먹는 쪽으로 향해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 먹는 쪽과 먹히는 쪽 가르기', minutes: 12, tool: 'mindmap',
              task: '카드를 읽고, 먹는 쪽과 먹히는 쪽으로 나누거나 옳은 설명을 골라요.',
              teacher: '"개구리가 메뚜기를 잡아먹으면 먹는 쪽은 누구일까요?" 문장의 \'~가 ~를\'에서 \'가\' 앞이 먹는 쪽이라고 짚는다. 3번에서 "화살표는 먹는 쪽에서 먹히는 쪽으로 그려요"를 고르는 학생이 많아, 도입에서 그린 화살표를 다시 보게 한다.',
              levels: EZ,
              items: [
                { prompt: '"개구리가 메뚜기를 잡아먹어요." 먹는 쪽과 먹히는 쪽으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '개구리와 메뚜기', slots: ['먹는 쪽', '먹히는 쪽'], cards: ['개구리', '메뚜기'] },
                  target: { sort: { '먹는 쪽': ['개구리'], '먹히는 쪽': ['메뚜기'] } }, difficulty: 0.1 },
                { prompt: '"뱀이 들쥐를 잡아먹어요." 먹는 쪽과 먹히는 쪽으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '뱀과 들쥐', slots: ['먹는 쪽', '먹히는 쪽'], cards: ['뱀', '들쥐'] },
                  target: { sort: { '먹는 쪽': ['뱀'], '먹히는 쪽': ['들쥐'] } }, difficulty: 0.15 },
                { prompt: '먹이 사슬의 화살표에 대해 옳은 설명만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '화살표', basket: '옳아요', cards: ['화살표는 먹히는 쪽에서 먹는 쪽으로 그려요', '풀 → 메뚜기 → 개구리는 바른 먹이 사슬이에요', { id: '거꾸로', text: '화살표는 먹는 쪽에서 먹히는 쪽으로 그려요', why: '화살표는 먹히는 쪽에서 먹는 쪽으로 향해요.' }, { id: '개구리먼저', text: '개구리 → 메뚜기 → 풀도 같은 먹이 사슬이에요', why: '메뚜기가 개구리를 먹는 것이 되어 버려요.' }] },
                  target: { pick: ['화살표는 먹히는 쪽에서 먹는 쪽으로 그려요', '풀 → 메뚜기 → 개구리는 바른 먹이 사슬이에요'] }, difficulty: 0.25,
                  predict: { q: '메뚜기가 풀을 먹어요. 화살표는 어느 쪽을 향할까요?', options: ['풀에서 메뚜기 쪽', '메뚜기에서 풀 쪽', '잘 모르겠어요'], answer: 0 },
                  conclude: '화살표는 먹히는 쪽(풀)에서 먹는 쪽(메뚜기)을 향해요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 갈렸던 화살표 방향을 다시 본다. "풀에서 메뚜기로 그은 화살표는 어떤 뜻일까요?" 풀이 메뚜기에게 먹힌다는 뜻이라고 말하게 한다. 출구 질문 3번에서 거꾸로 고른 학생에게는 \'먹는 쪽으로 가는 화살표\'라고 입으로 읽으며 다시 놓게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { center: '들판', cycle: false, cards: [{ id: '풀', text: '풀', motif: 'leaf' }, { id: '토끼', text: '토끼' }, { id: '여우', text: '여우' }] }, prompt: '먹히는 쪽에서 먹는 쪽으로 판에 놓아 보세요.', target: { order: ['풀', '토끼', '여우'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '먹이 사슬의 가장 첫 자리에 오는 것은 무엇인가요?', options: ['풀 같은 식물', '뱀', '매'], answer: 0, difficulty: 0.15, explain: '식물은 스스로 양분을 만들어 먹이 사슬의 시작이 돼요.' },
            { type: 'choice', prompt: '"메뚜기가 풀을 먹어요."를 화살표로 나타낸 것으로 알맞은 것은 무엇인가요?', options: ['풀 → 메뚜기', '메뚜기 → 풀', '풀 ↔ 메뚜기'], answer: 0, difficulty: 0.2, explain: '화살표는 먹히는 풀에서 먹는 메뚜기로 그려요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '먹이 사슬 화살표',
        items: [
          { type: 'figure', wide: true, prompt: '먹히는 쪽에서 먹는 쪽으로 번호 칸에 이름을 쓰세요. (풀, 메뚜기, 개구리, 뱀)', tool: 'lifecycle', figures: [{ options: { center: '풀밭', cycle: false, printCards: false, slots: ['1', '2', '3', '4'], cards: ['보기'] }, caption: '' }], answer: '1 풀, 2 메뚜기, 3 개구리, 4 뱀' },
          { type: 'check', prompt: '먹는 쪽에 모두 ✓ 하세요. ("개구리가 메뚜기를 먹어요.")', options: ['개구리', '메뚜기'], answer: '개구리' },
          { type: 'choice', prompt: '"들쥐가 도토리를 먹어요."를 화살표로 바르게 나타낸 것에 ○ 하세요.', options: ['도토리 → 들쥐', '들쥐 → 도토리'], answer: '도토리 → 들쥐' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '먹이 사슬의 화살표는 ___는 쪽에서 ___는 쪽으로 그려요.', answer: '먹히, 먹' },
          { type: 'short', prompt: '"화살표는 먹는 쪽에서 먹히는 쪽으로 그린다."는 친구의 말을 고쳐 써 보세요.', answer: '화살표는 먹히는 쪽에서 먹는 쪽으로 그린다.' },
        ],
        easy: {
          note: '화살표는 먹히는 쪽에서 먹는 쪽으로 가요. 풀 → 메뚜기 → 개구리 → 뱀이에요.',
          items: [
            { type: 'choice', prompt: '먹는 쪽에 ○ 하세요. (메뚜기가 풀을 먹어요)', options: ['메뚜기', '풀'], answer: '메뚜기' },
            { type: 'choice', prompt: '맞는 화살표에 ○ 하세요.', options: ['풀 → 메뚜기', '메뚜기 → 풀'], answer: '풀 → 메뚜기' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '먹이 사슬은 ___같은 식물에서 시작해요.', answer: '풀' },
            { type: 'draw', prompt: '풀, 메뚜기, 개구리를 그리고 화살표로 이어 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 초록 테두리가 생기고, 사슬 카드가 세 장 이내로 줄어요.',
        base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '도토리처럼 낯선 시작에서 네 단계를 놓고, 거꾸로 된 설명을 가려내요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 화살표를 먹는 쪽에서 먹히는 쪽으로 그린다 → \'화살표가 향하는 곳이 먹는 쪽\'. ② 사슬의 시작에 동물을 놓는다. ③ 먹이 사슬은 한 줄로만 이어진다고 생각한다 → 다음 시간에 먹이그물로 확장한다. 생산자·소비자 같은 낱말은 쓰지 않고 \'식물에서 시작\'이라고만 말한다. 먹이는 대표적인 것만 다룬다.',
    }),

    // ───────────────────────── 6차시 (core, 자료 표현) ─────────────────────────
    L(6, {
      title: '풀밭 먹이 관계를 여러 갈래로 이어 먹이그물 만들기',
      objective: '여러 생물의 먹이 관계를 짝지어 먹이그물로 나타내고, 갈래가 많은 생물을 찾을 수 있다.',
      standards: ['[4과14-02]'],
      illustration: {
        prompt: P('a web of paper arrows connecting a grass blade, a grasshopper, a field mouse, a sparrow, a frog, a snake and a hawk in one tangled pattern, on a soft green background'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 90, y: 50 }, { motif: 'hills', y: 214 },
          { motif: 'leaf', x: 90, y: 200 }, { motif: 'bird', x: 220, y: 110 }, { motif: 'bird', x: 340, y: 90, color: 'peach' }, { motif: 'tree', x: 400, y: 212 },
          { motif: 'text', x: 240, y: 150, text: '여러 갈래로 얽혀 있어요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"뱀은 개구리만 먹을까요?" 지난 시간의 한 줄 사슬을 보여 주고 뱀이 들쥐도 먹는다는 사실을 말해 준다. "그렇다면 먹이 사슬을 한 줄로만 그리면 무엇이 빠질까요?" 한 줄로 그리면 다른 먹이 관계가 빠진다는 것을 느끼게 하고, 여러 줄이 서로 얽힌 것을 먹이그물이라고 부른다고 알린다.',
          student: '뱀은 개구리만 먹을까요? 한 줄로 그리면 무엇이 빠질까요?',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '풀밭', slots: ['풀을 먹어요', '메뚜기를 먹어요'], cards: ['들쥐', '개구리'] }, sequence: [{ sort: { '풀을 먹어요': ['들쥐'], '메뚜기를 먹어요': ['개구리'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 먹이 관계를 짝지어 그물 만들기', minutes: 14, tool: 'mindmap',
              task: '먹이 관계 카드를 읽고, 먹이가 되는 생물 가지에 먹는 생물을 놓아요. 한 생물은 한 가지에만 놓아요.',
              teacher: '"풀을 먹는 생물은 누구누구일까요?" 풀을 먹는 생물이 둘 이상일 수 있다는 것을 짚는다. 매가 들쥐도 뱀도 먹는데 한 가지에만 놓아야 해서 헷갈린다는 학생에게는 "지금 가지에는 가장 먼저 떠오르는 짝만 놓아요. 나머지 짝은 그림에서 이어 봐요"라고 말해 준다.',
              levels: EZ,
              items: [
                { prompt: '먹이가 되는 생물 가지에 그것을 먹는 생물을 놓아 보세요.',
                  toolOptions: { mode: 'sort', topic: '풀밭 먹이그물', slots: ['풀을 먹어요', '메뚜기를 먹어요', '들쥐를 먹어요'], cards: ['메뚜기', '들쥐', '개구리', '참새', '뱀', '매'] },
                  target: { sort: { '풀을 먹어요': ['메뚜기', '들쥐'], '메뚜기를 먹어요': ['개구리', '참새'], '들쥐를 먹어요': ['뱀', '매'] } }, difficulty: 0.3 },
                { prompt: '먹이가 두 가지 이상인 생물만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '먹이가 여러 가지', basket: '두 가지 이상', cards: [{ id: '뱀', text: '뱀 (개구리와 들쥐를 먹어요)' }, { id: '매', text: '매 (뱀·들쥐·참새를 먹어요)' }, { id: '메뚜기', text: '메뚜기 (풀을 먹어요)', why: '메뚜기는 먹이가 풀 하나뿐이에요.' }, { id: '개구리', text: '개구리 (메뚜기를 먹어요)', why: '이 그물에서 개구리의 먹이는 메뚜기 하나뿐이에요.' }] },
                  target: { pick: ['뱀', '매'] }, difficulty: 0.25 },
                { prompt: '먹이그물에 대해 옳은 설명만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '먹이그물', basket: '옳아요', cards: ['여러 먹이 사슬이 서로 얽혀 그물처럼 보여요', '한 생물이 여러 생물을 먹고 여러 생물에게 먹히기도 해요', { id: '한줄', text: '먹이 관계는 언제나 한 줄로만 이어져요', why: '실제로는 여러 갈래로 얽혀 있어요.' }, { id: '뱀만', text: '뱀은 개구리만 먹어요', why: '뱀은 들쥐도 먹어요.' }] },
                  target: { pick: ['여러 먹이 사슬이 서로 얽혀 그물처럼 보여요', '한 생물이 여러 생물을 먹고 여러 생물에게 먹히기도 해요'] }, difficulty: 0.25,
                  conclude: '먹이 사슬 여러 개가 얽힌 것을 먹이그물이라고 해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 사슬 줄기와 먹이 가르기', minutes: 12, tool: 'lifecycle',
              task: '먹이 사슬의 줄기를 판에 놓거나, 풀을 먹는 생물과 다른 동물을 먹는 생물로 나누어요.',
              teacher: '"같은 풀밭에서 풀에서 시작하는 사슬이 한 줄만 있을까요?" 한 그물 안에서 짧은 사슬과 긴 사슬이 다 나온다는 것을 짚는다. 3번에서 들쥐를 다른 동물을 먹는 쪽에 넣는 학생에게 "들쥐는 도토리나 풀씨 같은 식물을 먹어요"라고 알려 준다.',
              levels: EZ,
              items: [
                { prompt: '풀에서 시작해 참새를 지나 매로 이어지는 사슬을 판에 놓아 보세요.',
                  toolOptions: { center: '짧은 사슬', cycle: false, cards: [{ id: '풀', text: '풀', motif: 'leaf' }, { id: '메뚜기', text: '메뚜기' }, { id: '참새', text: '참새', motif: 'bird' }, { id: '매', text: '매' }] },
                  target: { order: ['풀', '메뚜기', '참새', '매'] }, difficulty: 0.2 },
                { prompt: '같은 풀밭에서 가장 긴 사슬을 판에 놓아 보세요.',
                  toolOptions: { center: '긴 사슬', cycle: false, cards: [{ id: '풀', text: '풀', motif: 'leaf' }, { id: '메뚜기', text: '메뚜기' }, { id: '개구리', text: '개구리', motif: 'frog' }, { id: '뱀', text: '뱀' }, { id: '매', text: '매' }] },
                  target: { order: ['풀', '메뚜기', '개구리', '뱀', '매'] }, difficulty: 0.25 },
                { prompt: '풀을 먹는 생물과 다른 동물을 먹는 생물로 나누어 보세요.',
                  toolOptions: { mode: 'sort', center: '누가 무엇을 먹나', slots: ['풀을 먹어요', '다른 동물을 먹어요'], cards: ['메뚜기', '들쥐', '개구리', '뱀', '매'] },
                  target: { sort: { '풀을 먹어요': ['메뚜기', '들쥐'], '다른 동물을 먹어요': ['개구리', '뱀', '매'] } }, difficulty: 0.25,
                  conclude: '한 먹이그물 안에는 짧은 사슬도 긴 사슬도 들어 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 던진 "한 줄로 그리면 무엇이 빠질까요?"를 다시 묻는다. 뱀이 들쥐도 먹는다는 관계가 빠진다는 대답을 확인한다. 출구 질문 3번에서 먹이그물을 한 줄 사슬이라고 고른 학생에게는 오늘 만든 그물의 얽힌 모양을 다시 가리키게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '먹이그물', slots: ['풀을 먹어요', '메뚜기를 먹어요'], cards: ['들쥐', '개구리', '메뚜기', '참새'] }, prompt: '먹이가 되는 생물 가지에 먹는 생물을 놓아 보세요.', target: { sort: { '풀을 먹어요': ['들쥐', '메뚜기'], '메뚜기를 먹어요': ['개구리', '참새'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '먹이그물이란 무엇인가요?', options: ['먹이 사슬 한 줄', '여러 먹이 사슬이 서로 얽힌 것', '식물만 모아 놓은 것'], answer: 1, difficulty: 0.15, explain: '여러 먹이 사슬이 얽혀 그물처럼 된 것이 먹이그물이에요.' },
            { type: 'choice', prompt: '다음 중 먹이가 두 가지 이상인 생물은 무엇인가요? (메뚜기는 풀, 뱀은 개구리와 들쥐를 먹어요)', options: ['메뚜기', '뱀', '풀'], answer: 1, difficulty: 0.2, explain: '뱀은 개구리와 들쥐 두 가지를 먹어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '먹이그물 만들기',
        items: [
          { type: 'table', prompt: '먹이 관계를 표로 정리하세요. 먹이가 되는 생물에서 먹는 생물로 화살표 방향을 생각하세요.', columns: ['먹이가 되는 생물', '먹는 생물'], cells: [['풀', ''], ['메뚜기', ''], ['들쥐', '']], answer: '풀 → 메뚜기·들쥐 / 메뚜기 → 개구리·참새 / 들쥐 → 뱀·매' },
          { type: 'draw', prompt: '풀, 메뚜기, 들쥐, 개구리, 뱀, 매를 그리고 먹이 관계를 화살표로 이어 먹이그물을 만들어 보세요. 갈래가 가장 많은 생물에 ○ 하세요.' },
          { type: 'choice', prompt: '먹이가 두 가지 이상인 생물에 ○ 하세요.', options: ['뱀(개구리·들쥐를 먹음)', '메뚜기(풀만 먹음)'], answer: '뱀(개구리·들쥐를 먹음)' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '여러 먹이 사슬이 서로 얽힌 것을 ___라고 합니다.', answer: '먹이그물' },
          { type: 'short', prompt: '먹이 관계를 한 줄 사슬로만 그리면 어떤 점이 빠지는지 써 보세요.', answer: '한 생물이 여러 생물을 먹거나 여러 생물에게 먹히는 관계가 빠진다.' },
        ],
        easy: {
          note: '화살표는 먹히는 쪽에서 먹는 쪽으로 그려요. 풀 → 메뚜기, 풀 → 들쥐처럼 여러 줄이 생겨요.',
          items: [
            { type: 'choice', prompt: '먹이가 두 가지 이상인 생물에 ○ 하세요.', options: ['뱀', '메뚜기'], answer: '뱀' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '여러 사슬이 얽힌 것을 ___라고 해요.', answer: '먹이그물' },
            { type: 'table', prompt: '먹이 관계를 써 보세요.', columns: ['먹히는 생물', '먹는 생물'], cells: [['풀', '']] },
            { type: 'draw', prompt: '풀, 메뚜기, 들쥐를 그리고 화살표로 이어 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 카드가 네 장으로 줄어요.',
        base: '그물 카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '여섯 생물 모두의 관계를 가지에 나누고, 한 줄 사슬의 함정을 가려내요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 생물을 한 줄로만 이어 여러 갈래를 나타내지 못한다. ② 화살표를 거꾸로 그린다. ③ 갈래가 많은 생물을 찾을 때 화살표가 나오는 쪽만 센다 → 들어오는 화살표와 나가는 화살표를 모두 센다. 이 그물은 대표적인 먹이만 다룬 단순화한 그림이며, 실제 자연의 먹이 관계는 이보다 훨씬 복잡하다.',
    }),

    // ───────────────────────── 7차시 (practice) ─────────────────────────
    L(7, {
      title: '연못 먹이그물 만들고 먹이 사슬의 시작 찾기',
      objective: '새로운 곳(연못)의 먹이 관계를 짝지어 그물로 나타내고, 먹이 사슬이 식물에서 시작하며 한 생물이 사라지면 이웃 생물이 영향을 받는다는 것을 설명할 수 있다.',
      standards: ['[4과14-02]'],
      illustration: {
        prompt: P('a pond scene with tiny water plants, a water flea, a small fish, a tadpole and a heron standing at the edge, connected by a few soft curved arrows'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'wave', y: 214 },
          { motif: 'hills', y: 196, colors: ['mint', 'sky', 'buttercup'] }, { motif: 'bird', x: 340, y: 110 }, { motif: 'leaf', x: 160, y: 212 },
          { motif: 'text', x: 240, y: 150, text: '연못에서는 누가 누구를 먹을까요?', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '연못 사진을 보여 주고 "여기서도 먹고 먹히는 관계가 있을까요?" 하고 묻는다. 학생들이 말한 생물을 칠판에 적고, 물속 작은 식물과 물벼룩 같은 작은 생물도 있다고 알려 준다. "먹이 사슬은 어디에서 시작할까요?" 풀밭에서는 풀이었으니 연못에서는 무엇일지 예상해 보게 한다.',
          student: '연못에서 먹이 사슬은 무엇에서 시작할까요?',
          demo: { tool: 'lifecycle', options: { shuffle: false, center: '연못', cycle: false, cards: [{ id: '식물', text: '물속 작은 식물' }, { id: '벼룩', text: '물벼룩' }] }, sequence: [{ order: ['식물', '벼룩'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 연못 먹이그물 짝짓기', minutes: 14, tool: 'mindmap',
              task: '먹이 관계 카드를 읽고 가지에 놓거나 옳은 설명을 골라요.',
              teacher: '"왜가리는 송사리와 올챙이를 모두 먹을 수 있어요. 송사리만 사라지면 왜가리는 어떻게 될까요?" 먹이가 여러 가지면 하나가 줄어도 다른 먹이를 먹을 수 있다는 점을 말하게 한다. 3번에서 "아무 영향이 없어요"를 고르는 학생에게는 물벼룩이 사라지면 송사리의 먹이가 줄어든다는 것을 화살표로 따라가게 한다.',
              levels: EZ,
              items: [
                { prompt: '먹이가 되는 생물 가지에 그것을 먹는 생물을 놓아 보세요.',
                  toolOptions: { mode: 'sort', topic: '연못 먹이그물', slots: ['물속 작은 식물을 먹어요', '물벼룩을 먹어요', '송사리를 먹어요'], cards: ['물벼룩', '올챙이', '송사리', '왜가리'] },
                  target: { sort: { '물속 작은 식물을 먹어요': ['물벼룩', '올챙이'], '물벼룩을 먹어요': ['송사리'], '송사리를 먹어요': ['왜가리'] } }, difficulty: 0.25 },
                { prompt: '연못 먹이그물에서 먹이가 두 가지인 생물을 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '먹이가 여러 가지', basket: '두 가지', cards: [{ id: '왜가리', text: '왜가리 (송사리와 올챙이를 먹어요)' }, { id: '송사리', text: '송사리 (물벼룩을 먹어요)', why: '이 그물에서 송사리의 먹이는 물벼룩 하나뿐이에요.' }, { id: '물벼룩', text: '물벼룩 (물속 작은 식물을 먹어요)', why: '물벼룩의 먹이는 물속 작은 식물 하나뿐이에요.' }] },
                  target: { pick: ['왜가리'] }, difficulty: 0.2 },
                { prompt: '연못에서 물벼룩이 모두 사라지면 어떻게 될지 옳은 것만 골라 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '물벼룩이 사라지면?', basket: '일어날 수 있어요', cards: ['물벼룩을 먹던 송사리가 먹을 것이 줄어 힘들어져요', '송사리를 먹는 왜가리에게도 영향이 갈 수 있어요', { id: '영향없음', text: '다른 생물에게는 아무 영향이 없어요', why: '먹이 관계로 이어져 있어서 영향이 퍼질 수 있어요.' }] },
                  target: { pick: ['물벼룩을 먹던 송사리가 먹을 것이 줄어 힘들어져요', '송사리를 먹는 왜가리에게도 영향이 갈 수 있어요'] }, difficulty: 0.3,
                  conclude: '먹이 관계로 이어져 있어서 한 생물이 줄면 이웃 생물도 영향을 받아요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 사슬 놓기와 시작 찾기', minutes: 12, tool: 'lifecycle',
              task: '먹이 사슬을 먹히는 쪽에서 먹는 쪽으로 판에 놓거나, 사슬의 시작을 골라요.',
              teacher: '"사슬의 처음은 언제나 어떤 생물일까요?" 풀·벼·물속 작은 식물처럼 스스로 양분을 만드는 식물이 처음에 온다는 것을 짚는다. 3번에서 동물을 시작으로 고르는 학생에게는 "그 동물은 무엇을 먹고 살까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '연못의 먹이 사슬을 먹히는 쪽에서 먹는 쪽으로 판에 놓아 보세요.',
                  toolOptions: { center: '연못', cycle: false, cards: [{ id: '식물', text: '물속 작은 식물' }, { id: '벼룩', text: '물벼룩' }, { id: '송사리', text: '송사리' }, { id: '왜가리', text: '왜가리', motif: 'bird' }] },
                  target: { order: ['식물', '벼룩', '송사리', '왜가리'] }, difficulty: 0.2 },
                { prompt: '바다의 먹이 사슬을 먹히는 쪽에서 먹는 쪽으로 판에 놓아 보세요.',
                  toolOptions: { center: '바다', cycle: false, cards: [{ id: '식물플', text: '식물 플랑크톤' }, { id: '동물플', text: '동물 플랑크톤' }, { id: '멸치', text: '멸치' }, { id: '갈치', text: '갈치' }] },
                  target: { order: ['식물플', '동물플', '멸치', '갈치'] }, difficulty: 0.3 },
                { prompt: '먹이 사슬의 시작에 오는 것만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', center: '시작', basket: '시작이에요', cards: [{ id: '풀', text: '풀' }, { id: '메뚜기', text: '메뚜기', why: '메뚜기는 풀을 먹어요. 시작이 아니에요.' }, { id: '개구리', text: '개구리', why: '개구리는 메뚜기를 먹어요.' }, { id: '뱀', text: '뱀', why: '뱀은 다른 동물을 먹어요.' }] },
                  target: { pick: ['풀'] }, difficulty: 0.15,
                  conclude: '먹이 사슬은 풀이나 물속 작은 식물처럼 스스로 양분을 만드는 식물에서 시작해요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 학생들이 예상한 시작을 다시 묻는다. "연못에서도 풀밭처럼 식물에서 시작했나요?" 어떤 곳이든 사슬은 식물에서 시작한다는 것을 말하게 한다. 출구 질문 2번에서 한 생물이 사라져도 이웃은 괜찮다고 고른 학생에게는 오늘 짚은 화살표를 따라 영향이 번지는 것을 다시 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { center: '논', cycle: false, cards: [{ id: '벼', text: '벼', motif: 'leaf' }, { id: '메뚜기', text: '메뚜기' }, { id: '참새', text: '참새', motif: 'bird' }] }, prompt: '먹히는 쪽에서 먹는 쪽으로 판에 놓아 보세요.', target: { order: ['벼', '메뚜기', '참새'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '연못에서 물벼룩이 크게 줄어들면 송사리에게는 어떤 일이 생길까요?', options: ['먹이가 줄어 힘들어질 수 있어요', '더 쉽게 먹이를 구해요', '아무 일도 없어요'], answer: 0, difficulty: 0.25, explain: '송사리는 물벼룩을 먹기 때문에 물벼룩이 줄면 먹이가 줄어요.' },
            { type: 'choice', prompt: '먹이 사슬의 시작으로 알맞은 것은 무엇인가요?', options: ['물속 작은 식물', '송사리', '왜가리'], answer: 0, difficulty: 0.15, explain: '먹이 사슬은 스스로 양분을 만드는 식물에서 시작해요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '연못과 바다의 먹이 관계',
        items: [
          { type: 'figure', wide: true, prompt: '연못의 먹이 사슬이에요. 먹히는 쪽에서 먹는 쪽으로 번호 칸에 이름을 쓰세요. (물속 작은 식물, 물벼룩, 송사리, 왜가리)', tool: 'lifecycle', figures: [{ options: { center: '연못', cycle: false, printCards: false, slots: ['1', '2', '3', '4'], cards: ['보기'] }, caption: '' }], answer: '1 물속 작은 식물, 2 물벼룩, 3 송사리, 4 왜가리' },
          { type: 'table', prompt: '연못 먹이 관계를 표로 정리하세요.', columns: ['먹이가 되는 생물', '먹는 생물'], cells: [['물속 작은 식물', ''], ['물벼룩', ''], ['송사리', '']], answer: '물벼룩·올챙이 / 송사리 / 왜가리' },
          { type: 'check', prompt: '먹이 사슬의 시작에 올 수 있는 것에 모두 ✓ 하세요.', options: ['풀', '벼', '뱀', '물속 작은 식물'], answer: '풀, 벼, 물속 작은 식물' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '연못에서 물벼룩이 줄면 물벼룩을 먹는 ___도 먹이가 줄어 영향을 받아요.', answer: '송사리' },
          { type: 'short', prompt: '한 생물이 줄어들면 다른 생물에게도 영향이 가는 까닭을 써 보세요.', answer: '먹이 관계로 이어져 있어서 한 생물이 줄면 그것을 먹는 생물의 먹이가 줄기 때문이다.' },
        ],
        easy: {
          note: '사슬은 식물에서 시작해요. 한 생물이 줄면 그것을 먹는 생물이 먹이가 줄어요.',
          items: [
            { type: 'choice', prompt: '먹이 사슬의 시작에 ○ 하세요.', options: ['식물', '동물'], answer: '식물' },
            { type: 'choice', prompt: '물벼룩이 줄면 힘들어지는 생물에 ○ 하세요.', options: ['송사리', '물속 작은 식물'], answer: '송사리' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '송사리는 ___을 먹어요.', answer: '물벼룩' },
            { type: 'draw', prompt: '연못 먹이 사슬의 앞 두 칸을 그려 화살표로 이어 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 초록 테두리가 생기고, 사슬 카드가 세 장 이내로 줄어요.',
        base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '낯선 바다 사슬과 영향 퍼짐까지 근거를 들어 추리해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 사슬의 시작에 동물을 놓는다. ② 한 생물이 사라져도 다른 생물과는 상관없다고 생각한다. ③ 낯선 생물(물벼룩, 플랑크톤)이 나오면 먹이 관계를 짐작하지 못한다 → 카드의 설명이나 책 자료를 근거로 말하게 한다. 연못과 바다의 먹이 관계는 대표적인 예만 다룬 단순화한 것이다.',
    }),

    // ───────────────────────── 8차시 (core, 탐구 적용) ─────────────────────────
    L(8, {
      title: '숲 생물의 먹이를 자료로 조사하고 먹이 관계 모형 만들기',
      objective: '숲에 사는 생물이 무엇을 먹는지 자료로 조사해 짝을 지어 적고, 이름표와 실로 먹이 관계 모형을 만들어 갈래를 확인할 수 있다.',
      standards: ['[4과14-02]'],
      safety: ['모형을 만들 때 가위는 손잡이 쪽을 잡고 건네고, 날 끝을 사람 쪽으로 두지 않아요.', '실을 손가락이나 목에 감지 않아요. 실이 엉키면 가위로 무리하게 당기지 않고 천천히 풀어요.'],
      illustration: {
        prompt: P('children standing in a circle each holding a name card of a forest animal or plant and passing a ball of yarn between them to form a web of crossing lines'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 50, s: 0.7 }, { motif: 'cloud', x: 100, y: 46 }, { motif: 'hills', y: 214, colors: ['mint', 'lavender', 'sky'] },
          { motif: 'tree', x: 90, y: 212 }, { motif: 'tree', x: 380, y: 212, color: 'peach' }, { motif: 'bird', x: 240, y: 90 },
          { motif: 'text', x: 240, y: 152, text: '실로 먹이 관계를 이어 봐요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"숲에 사는 생물이 무엇을 먹는지 어떻게 알 수 있을까요?" 책이나 도감, 관측 자료를 찾아보는 방법을 이야기한다. "한 가지만 찾고 끝내면 어떻게 될까요?" 한 생물이 여러 가지를 먹을 수 있으니 자료를 더 찾아야 한다고 짚는다. 오늘은 짝을 적고 실로 이어 모형까지 만든다고 알린다.',
          student: '숲 생물이 무엇을 먹는지는 어떻게 알아볼 수 있을까요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '먹이', slots: [{ id: 'a', label: '박새' }], cards: ['애벌레'] }, sequence: [{ match: { a: '애벌레' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 자료로 먹이 짝 찾기', minutes: 14, tool: 'mindmap',
              task: '조사한 자료 카드를 읽고, 생물과 그 생물이 먹는 것을 이어요.',
              teacher: '"자료에 \'박새는 애벌레를 먹는다\'고 적혀 있어요. 박새의 먹이는 무엇일까요?" 먹는 쪽과 먹히는 쪽을 바르게 찾는지 확인한다. 3번에서 "먹이는 짐작으로 적어도 돼요"를 고르는 학생에게는 근거가 없으면 친구가 믿기 어렵다는 점을 짚는다.',
              levels: EZ,
              items: [
                { prompt: '자료를 읽고 먹는 생물과 그 먹이를 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '숲 조사', slots: [{ id: '애벌레', label: '애벌레의 먹이' }, { id: '박새', label: '박새의 먹이' }, { id: '매', label: '매의 먹이' }], cards: ['나뭇잎', '애벌레', '박새'] },
                  target: { match: { 애벌레: '나뭇잎', 박새: '애벌레', 매: '박새' } }, difficulty: 0.25 },
                { prompt: '다른 숲 생물의 자료예요. 먹는 생물과 그 먹이를 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '숲 조사', slots: [{ id: '들쥐', label: '들쥐의 먹이' }, { id: '올빼미', label: '올빼미의 먹이' }, { id: '두더지', label: '두더지의 먹이' }], cards: ['도토리', '들쥐', '지렁이'] },
                  target: { match: { 들쥐: '도토리', 올빼미: '들쥐', 두더지: '지렁이' } }, difficulty: 0.3 },
                { prompt: '먹이를 조사할 때 알맞은 태도만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '조사 태도', basket: '알맞아요', cards: ['책이나 도감에서 근거를 찾아요', '한 생물이 여러 가지를 먹을 수 있는지 살펴요', { id: '짐작', text: '먹이를 짐작으로 적어요', why: '근거가 없으면 친구가 믿기 어려워요.' }, { id: '하나만', text: '먹이를 하나만 찾으면 충분해요', why: '한 생물이 여러 가지를 먹기도 해요.' }] },
                  target: { pick: ['책이나 도감에서 근거를 찾아요', '한 생물이 여러 가지를 먹을 수 있는지 살펴요'] }, difficulty: 0.25,
                  conclude: '먹이 관계는 짐작이 아니라 자료의 근거로 적고, 먹이가 여럿일 수 있는지도 살펴요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 먹이 관계 모형 만드는 차례', minutes: 12, tool: 'story',
              task: '이름표와 실로 모형을 만드는 차례를 놓고, 화살표 쪽 이름을 알맞게 이어요.',
              teacher: '"실이 이어지는 쪽이 먹는 쪽일까요, 먹히는 쪽일까요?" 화살표 규칙을 한 번 더 말하게 한다. 실이 많이 모이는 이름표를 찾는 순서에서는 "들어오는 실과 나가는 실을 모두 세어 봐요"라고 안내한다. 모형을 만드는 동안 안전 약속(가위, 실)을 지키는지 둘러본다.',
              levels: EZ,
              items: [
                { prompt: '숲 생물 이름표로 먹이 관계 모형을 만드는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: [{ id: 'm1', text: '생물 이름표를 원 모양으로 놓아요' }, { id: 'm2', text: '먹이 관계 짝을 자료로 확인해요' }, { id: 'm3', text: '먹히는 쪽에서 먹는 쪽으로 실을 이어요' }, { id: 'm4', text: '실이 얽힌 모양을 살펴봐요' }, { id: 'm5', text: '실이 가장 많이 닿는 생물에 표시해요' }] },
                  target: { order: ['m1', 'm2', 'm3', 'm4', 'm5'] }, difficulty: 0.2 },
                { prompt: '모형을 만든 뒤 하는 일의 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'n1', text: '모형 사진을 찍거나 그려 기록해요' }, { id: 'n2', text: '실을 풀고 이름표를 모아요' }, { id: 'n3', text: '가위와 실을 정해진 곳에 정리해요' }, { id: 'n4', text: '손을 씻어요' }] },
                  target: { order: ['n1', 'n2', 'n3', 'n4'] }, difficulty: 0.2 },
                { prompt: '실로 먹이 관계를 이을 때 화살표의 머리와 꼬리에 알맞은 생물을 이어 보세요.',
                  toolOptions: { mode: 'match', slots: [{ id: 'tail', label: '화살표가 시작하는 쪽' }, { id: 'head', label: '화살표가 향하는 쪽' }], cards: ['먹히는 생물', '먹는 생물', { id: '무관', text: '먹이와 관계없는 생물', why: '먹이와 관계가 없으면 그물에 이어 넣지 않아요.' }] },
                  target: { match: { tail: '먹히는 생물', head: '먹는 생물' } }, difficulty: 0.25,
                  conclude: '화살표는 먹히는 생물에서 시작해 먹는 생물을 향해요. 실이 많이 닿는 생물이 갈래가 많아요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '모형에서 실이 가장 많이 닿은 생물을 모둠별로 발표하게 한다. "그 생물이 사라지면 모형은 어떻게 될까요?" 한 생물이 많은 실로 이어져 있으면 영향도 크다는 점을 말하게 한다. 출구 질문 2번에서 먹이를 짐작으로 적는 태도를 고른 학생에게는 자료를 어디서 찾았는지 한 번 더 적게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '숲 조사', slots: [{ id: '다람쥐', label: '다람쥐의 먹이' }, { id: '올빼미', label: '올빼미의 먹이' }], cards: ['도토리', '들쥐', '소나무'] }, prompt: '먹는 생물과 그 먹이를 이어 보세요.', target: { match: { 다람쥐: '도토리', 올빼미: '들쥐' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '생물의 먹이를 조사할 때 알맞은 방법은 무엇인가요?', options: ['책이나 도감 같은 자료에서 근거를 찾아요', '먹이를 짐작해서 적어요', '친구의 답을 그대로 베껴요'], answer: 0, difficulty: 0.15, explain: '자료의 근거로 먹이 관계를 적어야 믿을 수 있어요.' },
            { type: 'choice', prompt: '실로 먹이 관계 모형을 만들 때 실을 이은 방향으로 알맞은 것은 무엇인가요?', options: ['먹히는 생물에서 먹는 생물로', '먹는 생물에서 먹히는 생물로', '아무 방향이나'], answer: 0, difficulty: 0.2, explain: '화살표와 같이 먹히는 생물에서 먹는 생물 쪽으로 이어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '숲 생물 먹이 조사 기록장',
        items: [
          { type: 'table', prompt: '숲에 사는 생물이 무엇을 먹는지 조사해 짝을 적고, 자료를 찾은 곳도 쓰세요.', columns: ['생물', '먹는 것', '자료를 찾은 곳'], cells: [['박새', '', ''], ['들쥐', '', ''], ['올빼미', '', '']], answer: '박새: 애벌레 등 / 들쥐: 도토리·씨앗 등 / 올빼미: 들쥐 등. 자료 이름 확인' },
          { type: 'draw', prompt: '모형을 만들어 본 먹이 관계를 이름과 화살표로 그려 보세요. 실이 가장 많이 닿은 생물에 ○ 하세요.' },
          { type: 'choice', prompt: '화살표의 방향으로 알맞은 것에 ○ 하세요.', options: ['먹히는 쪽 → 먹는 쪽', '먹는 쪽 → 먹히는 쪽'], answer: '먹히는 쪽 → 먹는 쪽' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '먹이 관계는 짐작이 아니라 ___에서 찾은 ___로 적어요.', answer: '자료, 근거' },
          { type: 'short', prompt: '한 생물의 먹이를 한 가지만 찾고 끝내면 안 되는 까닭을 써 보세요.', answer: '한 생물이 여러 가지를 먹을 수 있어서 한 가지만 적으면 다른 먹이 관계가 빠진다.' },
        ],
        easy: {
          note: '자료에서 먹이를 찾아 적고, 화살표는 먹히는 쪽에서 먹는 쪽으로 그려요.',
          items: [
            { type: 'choice', prompt: '먹이를 알아보는 방법에 ○ 하세요.', options: ['책에서 찾아요', '짐작으로 써요'], answer: '책에서 찾아요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '박새는 ___를 먹어요.', answer: '애벌레' },
            { type: 'table', prompt: '먹이를 적어 보세요.', columns: ['생물', '먹는 것'], cells: [['들쥐', '']] },
            { type: 'draw', prompt: '박새와 애벌레를 그리고 화살표로 이어 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 이름표가 세 개로 줄어요.',
        base: '조사한 짝을 이어 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '함정 태도 카드를 가려내고, 갈래가 가장 많은 생물을 근거로 찾아요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 한 생물이 한 가지만 먹는다고 가정하고 다른 먹이를 조사하지 않는다. ② 실의 방향(화살표 방향)을 거꾸로 잇는다. ③ 자료를 찾은 곳을 적지 않는다. 모형은 이름표 카드 6~8장과 털실, 클립만으로 만들고 가위는 자르는 모둠에서만 쓴다. 학생이 고른 생물의 먹이가 자료마다 다르면 자료에 적힌 대로 쓰되 출처를 함께 적게 한다.',
    }),

    // ───────────────────────── 9차시 (core, 개념) ─────────────────────────
    L(9, {
      title: '대기·수질·토양 오염 사례 가르고 생물에게 미치는 영향 따라가기',
      objective: '오염의 원인과 현상을 대기오염·수질오염·토양오염으로 가르고, 사람의 활동이 다른 생물에게도 영향을 준다는 것을 단계를 이어 설명할 수 있다.',
      standards: ['[4과14-03]'],
      illustration: {
        prompt: P('a split scene with smoky chimneys and a hazy sky on one side, a stream with floating trash in the middle, and a patch of bare dry soil on the other side, with a worried fish and a small bird watching'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'cloud', x: 100, y: 52 }, { motif: 'cloud', x: 220, y: 70, color: 'lavender' }, { motif: 'hills', y: 214, colors: ['lavender', 'sky', 'peach'] },
          { motif: 'wave', y: 232 }, { motif: 'bird', x: 380, y: 90 }, { motif: 'house', x: 90, y: 212 },
          { motif: 'text', x: 240, y: 150, text: '오염은 누구에게 영향을 줄까요?', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '강에 쓰레기가 떠 있는 사진을 보여 준다. "이 쓰레기는 누가 힘들게 할까요?" 학생들이 \'사람\'이라고만 답하면 "물속에 사는 물고기는요? 그 물고기를 먹는 새는요?"라고 되묻는다. 오염이 사람에게만 나쁘다고 생각하는 학생의 생각은 칠판에 적어 두었다가 정리에서 다시 본다.',
          student: '강에 쓰레기를 버리면 누가 힘들어질까요?',
          demo: { tool: 'lifecycle', options: { shuffle: false, center: '쓰레기', cycle: false, cards: [{ id: 'a', text: '쓰레기를 강에 버려요' }, { id: 'b', text: '물이 더러워져요' }] }, sequence: [{ order: ['a', 'b'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 오염 사례 가르기', minutes: 14, tool: 'mindmap',
              task: '카드를 읽고 대기오염·수질오염·토양오염으로 나누거나 옳은 설명을 골라요.',
              teacher: '"공기가 더러워지는 것, 물이 더러워지는 것, 땅이 더러워지는 것은 각각 무엇이라고 부를까요?" 이름 앞의 낱말(대기·수질·토양)로 갈래를 정한다고 짚는다. 3번에서 "사람에게만 나빠요"를 고르는 학생에게 "물이 더러워지면 물속 생물은 어떨까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '오염을 일으키는 일을 대기오염·수질오염·토양오염으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '오염의 원인', slots: ['대기오염', '수질오염', '토양오염'], cards: ['자동차 매연이 하늘로 퍼져요', '공장 연기가 공기를 흐리게 해요', '기름이 바다로 흘러들어요', '집의 더러운 물이 그대로 강으로 가요', '쓰레기를 땅에 마구 묻어요', '농약을 지나치게 많이 뿌려요'] },
                  target: { sort: { 대기오염: ['자동차 매연이 하늘로 퍼져요', '공장 연기가 공기를 흐리게 해요'], 수질오염: ['기름이 바다로 흘러들어요', '집의 더러운 물이 그대로 강으로 가요'], 토양오염: ['쓰레기를 땅에 마구 묻어요', '농약을 지나치게 많이 뿌려요'] } }, difficulty: 0.25 },
                { prompt: '오염 때문에 보이는 모습을 대기오염·수질오염·토양오염으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '오염의 모습', slots: ['대기오염', '수질오염', '토양오염'], cards: ['하늘이 뿌옇게 흐려요', '공장 굴뚝에서 검은 연기가 나와요', '강물이 탁하고 냄새가 나요', '바다에 기름띠가 떠다녀요', '쓰레기 더미 주변에서 풀이 잘 안 자라요', '땅이 썩은 냄새를 풍겨요'] },
                  target: { sort: { 대기오염: ['하늘이 뿌옇게 흐려요', '공장 굴뚝에서 검은 연기가 나와요'], 수질오염: ['강물이 탁하고 냄새가 나요', '바다에 기름띠가 떠다녀요'], 토양오염: ['쓰레기 더미 주변에서 풀이 잘 안 자라요', '땅이 썩은 냄새를 풍겨요'] } }, difficulty: 0.3 },
                { prompt: '오염이 생물에게 주는 영향으로 옳은 설명만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '오염의 영향', basket: '옳아요', cards: ['물이 오염되면 물속 생물이 살기 어려워져요', '오염된 곳의 생물을 먹는 동물도 영향을 받을 수 있어요', { id: '사람만', text: '오염은 사람에게만 나빠요', why: '다른 생물도 영향을 받아요.' }, { id: '똑같이', text: '오염된 물에서도 모든 생물이 똑같이 살아요', why: '오염에 약한 생물은 살기 어려워져요.' }] },
                  target: { pick: ['물이 오염되면 물속 생물이 살기 어려워져요', '오염된 곳의 생물을 먹는 동물도 영향을 받을 수 있어요'] }, difficulty: 0.25,
                  predict: { q: '강물이 오염되면 누가 영향을 받을까요?', options: ['사람만', '물속 생물과 그것을 먹는 동물도', '잘 모르겠어요'], answer: 1 },
                  conclude: '오염은 사람뿐 아니라 그곳에 사는 생물과 그 생물을 먹는 동물에게도 영향을 줘요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 영향이 이어지는 차례 놓기', minutes: 12, tool: 'lifecycle',
              task: '오염에서 시작해 영향이 이어지는 차례대로 판에 놓아요. 화살표는 일이 이어지는 쪽을 향해요.',
              teacher: '"쓰레기를 강에 버린 다음에 가장 먼저 일어나는 일은 무엇일까요? 그다음은요?" 원인과 결과를 한 단계씩 소리 내어 읽게 한다. 마지막 칸에서 "그 생물을 먹는 새"까지 이어 보지 못하는 학생에게 지난 단원의 먹이 관계를 떠올리게 한다.',
              levels: EZ,
              items: [
                { prompt: '쓰레기를 강에 버렸을 때의 영향을 차례로 판에 놓아 보세요.',
                  toolOptions: { center: '강 쓰레기', cycle: false, cards: [{ id: 'a', text: '쓰레기를 강에 버려요' }, { id: 'b', text: '강물이 더러워져요' }, { id: 'c', text: '물속 생물이 살기 어려워져요' }, { id: 'd', text: '그 생물을 먹는 새도 먹이가 줄어요' }] },
                  target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.2 },
                { prompt: '자동차 매연이 늘어날 때의 영향을 차례로 판에 놓아 보세요.',
                  toolOptions: { center: '매연', cycle: false, cards: [{ id: 'a', text: '자동차 매연이 늘어요' }, { id: 'b', text: '공기가 탁해져요' }, { id: 'c', text: '숨 쉬기 힘든 생물이 생겨요' }] },
                  target: { order: ['a', 'b', 'c'] }, difficulty: 0.2 },
                { prompt: '농약을 지나치게 뿌렸을 때의 영향을 차례로 판에 놓아 보세요.',
                  toolOptions: { center: '농약', cycle: false, cards: [{ id: 'a', text: '농약을 지나치게 뿌려요' }, { id: 'b', text: '흙이 오염돼요' }, { id: 'c', text: '흙 속 작은 생물이 줄어요' }, { id: 'd', text: '식물이 자라기 어려워져요' }] },
                  target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.3,
                  conclude: '오염은 한 단계에서 끝나지 않고 먹이 관계를 따라 다른 생물에게도 이어져요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 적어 둔 "오염은 사람에게만 나빠요"를 다시 본다. 오늘 놓아 본 사슬에서 사람 말고 영향을 받은 생물을 짚어 보게 한다. 출구 질문 2번에서 갈래를 헷갈린 학생에게는 낱말 앞글자(대기·수질·토양)를 손가락으로 짚으며 다시 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { center: '기름 유출', cycle: false, cards: [{ id: 'a', text: '기름이 바다로 흘러들어요' }, { id: 'b', text: '바닷물이 오염돼요' }, { id: 'c', text: '바다 생물이 살기 어려워져요' }] }, prompt: '영향이 이어지는 차례대로 판에 놓아 보세요.', target: { order: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '"공장 굴뚝에서 나온 검은 연기가 공기를 흐리게 해요."는 어떤 오염일까요?', options: ['대기오염', '수질오염', '토양오염'], answer: 0, difficulty: 0.15, explain: '공기가 더러워지는 것은 대기오염이에요.' },
            { type: 'choice', prompt: '오염에 대한 생각으로 알맞은 것은 무엇인가요?', options: ['사람에게만 나빠요', '그곳의 생물과 그것을 먹는 동물에게도 영향을 줘요', '생물에게는 영향이 없어요'], answer: 1, difficulty: 0.2, explain: '오염은 사람 말고 그곳의 생물과 먹이 관계를 따라 다른 동물에게도 영향을 줘요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '오염과 생물에게 미치는 영향',
        items: [
          { type: 'table', prompt: '오염 사례를 갈래별로 나누어 쓰세요. 사례: 자동차 매연, 기름이 흘러듦, 쓰레기를 땅에 묻음, 하늘이 뿌옇게 흐림', columns: ['대기오염', '수질오염', '토양오염'], cells: [['', '', '']], answer: '대기: 자동차 매연, 하늘이 뿌옇게 흐림 / 수질: 기름이 흘러듦 / 토양: 쓰레기를 땅에 묻음' },
          { type: 'figure', wide: true, prompt: '쓰레기를 강에 버렸을 때 영향이 이어지는 차례대로 번호 칸에 글을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '강 쓰레기', cycle: false, printCards: false, slots: ['1', '2', '3', '4'], cards: ['보기'] }, caption: '' }], answer: '1 쓰레기를 강에 버림 2 강물이 더러워짐 3 물속 생물이 살기 어려워짐 4 그 생물을 먹는 새도 먹이가 줄어듦' },
          { type: 'choice', prompt: '오염의 영향으로 알맞은 것에 ○ 하세요.', options: ['사람에게만 나빠요', '다른 생물에게도 영향을 줘요'], answer: '다른 생물에게도 영향을 줘요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '공기가 더러워지는 것은 ___오염, 물이 더러워지는 것은 ___오염입니다.', answer: '대기, 수질' },
          { type: 'short', prompt: '강물이 오염되면 물속 생물 말고 어떤 생물에게도 영향이 가는지 까닭과 함께 써 보세요.', answer: '물속 생물을 먹는 새나 동물도 먹이가 줄어 영향을 받는다.' },
        ],
        easy: {
          note: '대기는 공기, 수질은 물, 토양은 땅이에요. 오염은 사람 말고 다른 생물에게도 영향을 줘요.',
          items: [
            { type: 'choice', prompt: '물이 더러워지는 것에 ○ 하세요.', options: ['수질오염', '대기오염'], answer: '수질오염' },
            { type: 'choice', prompt: '오염의 영향으로 알맞은 것에 ○ 하세요.', options: ['다른 생물에게도 영향을 줘요', '사람에게만 영향을 줘요'], answer: '다른 생물에게도 영향을 줘요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '땅이 더러워지는 것은 ___오염이에요.', answer: '토양' },
            { type: 'draw', prompt: '쓰레기가 떠 있는 강과 힘들어하는 물고기를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 카드가 네 장으로 줄어요.',
        base: '사례와 차례를 스스로 놓은 뒤 확인해요.',
        challenge: '원인과 모습을 구분해 가르고, 한 단계씩 이어지는 영향을 끝까지 추리해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 오염이 사람에게만 나쁘다고 여긴다. ② 오염의 원인(매연)과 결과(뿌연 하늘)를 같은 것으로 본다. ③ 오염 갈래 이름(대기·수질·토양)을 헷갈린다. 사진은 뉴스·공공 기관 자료를 쓰되 충격적인 사진은 피한다. 이 차시에서는 오염 물질의 이름이나 농도 같은 수치는 다루지 않는다.',
    }),

    // ───────────────────────── 10차시 (core, 자료 표현) ─────────────────────────
    L(10, {
      title: '오염 문제와 실천 방법을 짝지어 표로 만들고 안내 자료 꾸미기',
      objective: '사람의 활동이 남긴 영향과 우리가 할 수 있는 일을 짝지어 표로 정리하고, 안내 자료에 꼭 들어갈 것을 골라 발표할 수 있다.',
      standards: ['[4과14-03]'],
      illustration: {
        prompt: P('a hand-drawn poster being made by children with columns of problems and matching small action drawings like a bicycle, a recycling bin and a reusable cup, with colored pencils nearby'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 50, s: 0.7 }, { motif: 'cloud', x: 100, y: 46 }, { motif: 'hills', y: 214, colors: ['mint', 'sky', 'peach'] },
          { motif: 'tree', x: 90, y: 212 }, { motif: 'flower', x: 190, y: 214 }, { motif: 'leaf', x: 380, y: 210 },
          { motif: 'text', x: 240, y: 150, text: '문제와 실천을 짝지어요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"쓰레기를 줄이자"라고만 적힌 포스터와 "쓰레기를 줄이면 땅이 덜 오염돼요"라고 적힌 포스터를 나란히 보여 준다. "어느 쪽이 더 잘 설득될까요?" 실천 방법만 적으면 왜 해야 하는지 알기 어렵다는 점을 느끼게 하고, "오늘은 문제와 실천을 짝지어 적어요." 하고 오늘의 할 일을 말해 준다.',
          student: '실천 방법만 적은 포스터와 까닭도 적은 포스터 중 어느 쪽이 더 설득력 있을까요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '문제와 실천', slots: [{ id: 'a', label: '수질오염' }], cards: ['기름을 하수구에 버리지 않기'] }, sequence: [{ match: { a: '기름을 하수구에 버리지 않기' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 문제와 실천 짝짓기', minutes: 14, tool: 'mindmap',
              task: '실천 방법 카드를 읽고, 줄이려는 문제 칸에 이어요. 두 문항은 실천 방법을 골라요.',
              teacher: '"자전거를 타는 것은 어떤 오염을 줄이는 일일까요?" 실천마다 줄이려는 문제를 말하게 한다. 3번에서 문제 없이 실천만 적은 글을 고르는 학생에게는 "왜 하는지 알 수 있나요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '오염 문제와 알맞은 실천 방법을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '문제와 실천', slots: [{ id: '대기', label: '대기오염' }, { id: '수질', label: '수질오염' }, { id: '토양', label: '토양오염' }], cards: ['가까운 곳은 걷거나 자전거를 타요', '기름과 음식물을 하수구에 버리지 않아요', '쓰레기를 분리배출하고 줄여요'] },
                  target: { match: { 대기: '가까운 곳은 걷거나 자전거를 타요', 수질: '기름과 음식물을 하수구에 버리지 않아요', 토양: '쓰레기를 분리배출하고 줄여요' } }, difficulty: 0.2 },
                { prompt: '실천 방법을 줄이려는 문제별로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '실천 방법', slots: ['대기오염을 줄여요', '수질오염을 줄여요', '토양오염을 줄여요'], cards: ['대중교통을 이용해요', '세제를 알맞은 양만 써요', '일회용품을 줄여요', '불필요한 차 타기를 줄여요', '강가에 쓰레기를 버리지 않아요', '재활용품을 분리해서 버려요'] },
                  target: { sort: { '대기오염을 줄여요': ['대중교통을 이용해요', '불필요한 차 타기를 줄여요'], '수질오염을 줄여요': ['세제를 알맞은 양만 써요', '강가에 쓰레기를 버리지 않아요'], '토양오염을 줄여요': ['일회용품을 줄여요', '재활용품을 분리해서 버려요'] } }, difficulty: 0.3 },
                { prompt: '안내 자료의 글로 알맞은 것만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '안내 글', basket: '알맞아요', cards: ['쓰레기를 줄이면 땅이 덜 오염돼요', '기름을 하수구에 버리지 않으면 물속 생물을 지킬 수 있어요', { id: '실천만', text: '쓰레기를 줄이자.', why: '왜 해야 하는지(어떤 문제를 줄이는지)가 없어요.' }, { id: '문제만', text: '땅이 더러워졌다.', why: '우리가 할 수 있는 일이 없어요.' }] },
                  target: { pick: ['쓰레기를 줄이면 땅이 덜 오염돼요', '기름을 하수구에 버리지 않으면 물속 생물을 지킬 수 있어요'] }, difficulty: 0.25,
                  conclude: '실천 방법은 어떤 문제를 줄이려는 것인지 함께 적어야 이해가 쉬워요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 안내 자료 만들기', minutes: 12, tool: 'mindmap',
              task: '안내 자료를 만드는 차례와 꼭 들어갈 내용, 바르게 쓴 문구를 카드로 가려요.',
              teacher: '"안내 자료에는 무엇이 꼭 있어야 할까요?" 문제 이름, 우리가 할 수 있는 일, 그 까닭을 하나씩 짚는다. 그림만 크게 그리고 글은 적지 않은 자료를 보여 주며 "읽는 사람이 무엇을 해야 하는지 알까요?"라고 묻는다.',
              levels: EZ,
              items: [
                { prompt: '안내 자료에 꼭 들어갈 것만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '안내 자료', basket: '꼭 넣어요', cards: ['어떤 문제인지', '우리가 할 수 있는 일', '그렇게 하는 까닭', { id: '낙서', text: '내용과 관계없는 낙서', why: '읽는 사람이 헷갈려요.' }] },
                  target: { pick: ['어떤 문제인지', '우리가 할 수 있는 일', '그렇게 하는 까닭'] }, difficulty: 0.15 },
                { prompt: '안내 자료를 만드는 차례를 먼저와 나중으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '만드는 차례', slots: ['먼저 하는 일', '나중에 하는 일'], cards: ['문제와 실천을 표로 정리해요', '꼭 넣을 내용을 고르고 문구를 정해요', '그림과 글을 꾸며요', '친구에게 발표하고 의견을 들어요'] },
                  target: { sort: { '먼저 하는 일': ['문제와 실천을 표로 정리해요', '꼭 넣을 내용을 고르고 문구를 정해요'], '나중에 하는 일': ['그림과 글을 꾸며요', '친구에게 발표하고 의견을 들어요'] } }, difficulty: 0.2 },
                { prompt: '문구를 바르게 쓴 것과 고쳐야 할 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '문구 점검', slots: ['바르게 썼어요', '고쳐야 해요'], cards: ['수질오염을 줄이려고 기름을 하수구에 버리지 않아요', '대기오염을 줄이려고 가까운 곳은 걸어요', '쓰레기를 줄이자', '환경을 아껴요'] },
                  target: { sort: { '바르게 썼어요': ['수질오염을 줄이려고 기름을 하수구에 버리지 않아요', '대기오염을 줄이려고 가까운 곳은 걸어요'], '고쳐야 해요': ['쓰레기를 줄이자', '환경을 아껴요'] } }, difficulty: 0.25,
                  conclude: '문제 이름, 실천, 까닭이 함께 있는 문구가 안내 자료로 알맞아요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입의 두 포스터를 다시 본다. "실천만 적은 글과 까닭까지 적은 글 중 왜 뒤의 것이 좋았나요?" 읽는 사람이 이유를 알아야 따라 한다는 대답을 확인한다. 출구 질문 3번에서 "쓰레기를 줄이자"만 골라도 괜찮다는 학생에게는 어떤 문제를 줄이는지 한 줄 붙이게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '문제와 실천', slots: [{ id: '수질', label: '수질오염' }, { id: '토양', label: '토양오염' }], cards: ['강가에 쓰레기를 버리지 않아요', '재활용품을 분리해서 버려요', '밤늦게까지 불을 켜요'] }, prompt: '오염 문제와 알맞은 실천 방법을 이어 보세요.', target: { match: { 수질: '강가에 쓰레기를 버리지 않아요', 토양: '재활용품을 분리해서 버려요' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '안내 자료에 꼭 있어야 하는 내용은 무엇인가요?', options: ['문제, 실천 방법, 그 까닭', '그림만 크게', '내용과 관계없는 장식'], answer: 0, difficulty: 0.15, explain: '문제와 실천, 까닭이 있어야 읽는 사람이 이해하고 따라 해요.' },
            { type: 'choice', prompt: '다음 중 안내 자료의 문구로 가장 알맞은 것은 무엇인가요?', options: ['쓰레기를 줄이자', '쓰레기를 줄이면 땅이 덜 오염돼요', '환경은 중요해요'], answer: 1, difficulty: 0.2, explain: '문제와 실천이 함께 있어서 까닭을 알 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '오염 문제와 실천 방법 표',
        items: [
          { type: 'table', prompt: '오염 문제와 우리가 할 수 있는 일을 짝지어 쓰세요.', columns: ['오염 문제', '내가 할 수 있는 일', '그렇게 하는 까닭'], cells: [['대기오염', '', ''], ['수질오염', '', ''], ['토양오염', '', '']], answer: '대기: 걷기·자전거 / 수질: 기름·음식물을 하수구에 안 버림 / 토양: 쓰레기 분리·줄이기. 까닭은 각 오염을 줄이기 위해' },
          { type: 'draw', prompt: '실천 방법 하나를 골라 안내 포스터를 꾸며요. 문제 이름, 실천, 까닭이 모두 들어가게 그리고 써 보세요.' },
          { type: 'check', prompt: '안내 자료에 꼭 들어갈 것에 모두 ✓ 하세요.', options: ['어떤 문제인지', '할 수 있는 일', '그렇게 하는 까닭', '내용과 관계없는 낙서'], answer: '어떤 문제인지, 할 수 있는 일, 그렇게 하는 까닭' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '실천 방법은 어떤 ___를 줄이려는 것인지 함께 적어요.', answer: '문제' },
          { type: 'short', prompt: '"쓰레기를 줄이자"에 까닭을 더해 한 문장으로 다시 써 보세요.', answer: '쓰레기를 줄이면 땅이 덜 오염돼요.' },
        ],
        easy: {
          note: '문제 이름, 할 수 있는 일, 까닭을 함께 적어요. 걷기는 대기오염, 기름 안 버리기는 수질오염을 줄여요.',
          items: [
            { type: 'choice', prompt: '수질오염을 줄이는 일에 ○ 하세요.', options: ['기름을 하수구에 버리지 않아요', '차를 자주 타요'], answer: '기름을 하수구에 버리지 않아요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '걷거나 자전거를 타면 ___오염을 줄여요.', answer: '대기' },
            { type: 'table', prompt: '짝을 지어 써 보세요.', columns: ['오염 문제', '할 수 있는 일'], cells: [['수질오염', '']] },
            { type: 'draw', prompt: '내가 할 수 있는 실천 하나를 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 카드가 세 장 이내로 줄어요.',
        base: '문제와 실천을 이은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '실천 여섯 가지를 세 갈래로 나누고, 까닭이 빠진 문구를 가려내요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 실천 방법만 적고 줄이려는 문제를 잇지 않는다. ② 한 실천이 한 가지 오염에만 관계된다고 생각한다 → 실제로는 여러 오염을 함께 줄일 수 있지만 이 차시에서는 가장 알맞은 한 쌍으로 연결한다. ③ 안내 자료를 그림만으로 만든다. 학생 안내 자료는 교실 게시나 학교 누리집에 올릴 때 학생 이름 대신 모둠 이름을 쓴다.',
    }),

    // ───────────────────────── 11차시 (wrap) ─────────────────────────
    L(11, {
      title: '학급 실천 계획 세우고 일주일 기록하며 단원 정리하기',
      objective: '학급에서 실천할 보전 활동 하나의 계획을 세워 실천 결과를 기록하는 방법을 알고, 생물과 환경에서 배운 것을 묶어 스스로 평가할 수 있다.',
      standards: ['[4과14-03]', '[4과14-01]', '[4과14-02]'],
      safety: ['쓰레기를 주울 때는 집게와 장갑을 쓰고, 깨진 유리나 날카로운 것은 만지지 않고 선생님께 말해요.', '끝나면 손을 비누로 씻어요.'],
      illustration: {
        prompt: P('children wearing gloves picking up litter in a small school garden with a tally chart pinned to a board, and flowers and a small bird nearby'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 410, y: 50, s: 0.8 }, { motif: 'cloud', x: 100, y: 46 }, { motif: 'hills', y: 214, colors: ['mint', 'peach', 'sky'] },
          { motif: 'flower', x: 150, y: 214 }, { motif: 'tree', x: 380, y: 212 }, { motif: 'bird', x: 250, y: 84 },
          { motif: 'text', x: 240, y: 150, text: '계획하고 실천하고 기록해요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"우리 반이 일주일 동안 실천할 한 가지를 정해 볼까요?" 지난 시간에 만든 짝 표에서 실천 방법을 하나 골라 보게 한다. "계획만 세우고 기록하지 않으면 어떻게 될까요?" 결과를 남기지 않으면 무엇이 달라졌는지 알 수 없다는 점을 짚고, 오늘은 계획 → 실천 → 기록 → 점검의 틀을 잡는다고 알린다.',
          student: '우리 반이 일주일 동안 실천할 한 가지는 무엇이 좋을까요?',
          demo: { tool: 'story', options: { shuffle: false, slots: ['먼저', '다음'], cards: [{ id: 'a', text: '실천할 일을 정해요' }, { id: 'b', text: '실천하고 기록해요' }] }, sequence: [{ order: ['a', 'b'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 실천 계획과 기록 차례 놓기', minutes: 9, tool: 'story',
              task: '카드를 읽고 알맞은 차례로 자리에 놓거나, 계획·실천·점검 칸에 나누어요.',
              teacher: '"일주일 실천에서 가장 먼저 하는 일은 무엇일까요?" 계획을 정하는 일이 먼저임을 짚는다. 2번에서 기록을 가장 마지막에만 몰아 쓰자고 하는 학생에게는 "날마다 쓰면 어떤 점이 좋을까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '학급 실천을 하는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: [{ id: 'p1', text: '실천할 일 하나를 정해요' }, { id: 'p2', text: '언제 어떻게 할지 계획을 써요' }, { id: 'p3', text: '날마다 실천해요' }, { id: 'p4', text: '실천 결과를 그날그날 기록해요' }, { id: 'p5', text: '일주일 뒤 잘된 점과 고칠 점을 점검해요' }] },
                  target: { order: ['p1', 'p2', 'p3', 'p4', 'p5'] }, difficulty: 0.15 },
                { prompt: '실천 결과를 기록하는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'r1', text: '그날 실천한 일을 해요' }, { id: 'r2', text: '실천 표에 ○를 해요' }, { id: 'r3', text: '느낀 점을 한 줄 써요' }, { id: 'r4', text: '일주일 모은 표를 함께 봐요' }] },
                  target: { order: ['r1', 'r2', 'r3', 'r4'] }, difficulty: 0.2 },
                { prompt: '계획할 일, 실천할 일, 점검할 일로 알맞은 칸에 나누어 보세요.',
                  toolOptions: { mode: 'sort', slots: ['계획', '실천', '점검'], cards: ['실천할 일과 방법을 정해요', '누가 언제 할지 정해요', '쓰레기를 분리해서 버려요', '일회용품을 쓰지 않아요', '실천 표를 보고 달라진 점을 찾아요', '다음 주에 고칠 점을 말해요'] },
                  target: { sort: { 계획: ['실천할 일과 방법을 정해요', '누가 언제 할지 정해요'], 실천: ['쓰레기를 분리해서 버려요', '일회용품을 쓰지 않아요'], 점검: ['실천 표를 보고 달라진 점을 찾아요', '다음 주에 고칠 점을 말해요'] } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 실천 점검표 확인하기', minutes: 8, tool: 'kitchen',
              task: '실천 점검표를 읽고, 알맞게 한 일에만 표시해요.',
              teacher: '"점검표에 ○를 하려면 정말 실천해야 해요. 실천하지 않았는데 ○를 해도 될까요?" 기록은 솔직해야 한다고 분명히 말한다. 3번의 안전 점검에서 맨손으로 쓰레기를 줍는 학생이 있으면 장갑·집게를 쓰도록 바로잡는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '일주일 실천 계획을 세울 때 꼭 정할 것에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '계획 점검', items: [{ id: 'what', text: '무엇을 실천할지 정해요' }, { id: 'when', text: '언제 실천할지 정해요' }, { id: 'rec', text: '어떻게 기록할지 정해요' }, { id: 'skip', text: '기록은 안 해도 된다고 정해요' }] },
                  target: { checklist: ['what', 'when', 'rec'] }, difficulty: 0.15 },
                { prompt: '실천 기록을 쓸 때 알맞은 태도에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '기록 태도', items: [{ id: 'real', text: '실제로 한 일만 ○ 해요' }, { id: 'day', text: '그날그날 바로 써요' }, { id: 'fake', text: '하지 않은 일도 ○ 해요' }, { id: 'sad', text: '못 한 날은 까닭을 써요' }] },
                  target: { checklist: ['real', 'day', 'sad'] }, difficulty: 0.2 },
                { prompt: '교실 밖에서 쓰레기를 주울 때 알맞은 행동에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '줍기 안전', items: [{ id: 'glove', text: '장갑을 끼고 집게를 써요' }, { id: 'glass', text: '깨진 유리는 선생님께 말해요' }, { id: 'bare', text: '맨손으로 다 만져요' }, { id: 'wash', text: '끝나면 비누로 손을 씻어요' }] },
                  target: { checklist: ['glove', 'glass', 'wash'] }, difficulty: 0.2 },
              ],
            },
            {
              id: 'a3', title: '활동 3. 단원 내용 묶기', minutes: 9, tool: 'mindmap',
              task: '이 단원에서 배운 문장을 생물 요소·먹이 관계·보전 가지로 나누고, 옳은 것을 골라요.',
              teacher: '"이 문장은 어느 시간에 배웠나요? 구성 요소 이야기일까요, 먹이 관계 이야기일까요?" 가지마다 대표 문장을 하나씩 소리 내어 읽게 한다. 2번에서 "공기는 생물 요소"나 "화살표는 먹는 쪽에서 먹히는 쪽"을 옳다고 고르는 학생에게는 도입의 질문들로 되돌아가 다시 생각하게 한다.',
              levels: EZ,
              items: [
                { prompt: '단원에서 배운 문장을 세 가지로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '생물과 환경', slots: ['구성 요소', '먹이 관계', '생태계 보전'], cards: ['햇빛과 공기는 비생물 요소예요', '버섯은 생물 요소예요', '화살표는 먹히는 쪽에서 먹는 쪽을 향해요', '여러 먹이 사슬이 얽힌 것이 먹이그물이에요', '오염은 다른 생물에게도 영향을 줘요', '문제와 실천을 함께 적어 안내해요'] },
                  target: { sort: { '구성 요소': ['햇빛과 공기는 비생물 요소예요', '버섯은 생물 요소예요'], '먹이 관계': ['화살표는 먹히는 쪽에서 먹는 쪽을 향해요', '여러 먹이 사슬이 얽힌 것이 먹이그물이에요'], '생태계 보전': ['오염은 다른 생물에게도 영향을 줘요', '문제와 실천을 함께 적어 안내해요'] } }, difficulty: 0.25 },
                { prompt: '단원에서 배운 것 가운데 옳은 문장만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '옳은 문장', basket: '옳아요', cards: ['생태계는 생물 요소와 비생물 요소로 이루어져요', '먹이 사슬은 식물에서 시작해요', '오염은 그곳의 생물에게도 영향을 줘요', { id: '공기생물', text: '공기는 생물 요소예요', why: '공기는 살아 있지 않은 비생물 요소예요.' }, { id: '거꾸로', text: '화살표는 먹는 쪽에서 먹히는 쪽으로 그려요', why: '화살표는 먹히는 쪽에서 먹는 쪽으로 향해요.' }] },
                  target: { pick: ['생태계는 생물 요소와 비생물 요소로 이루어져요', '먹이 사슬은 식물에서 시작해요', '오염은 그곳의 생물에게도 영향을 줘요'] }, difficulty: 0.25 },
                { prompt: '질문과 알맞은 답을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '묻고 답하기', slots: [{ id: 'q1', label: '조사할 때 빠뜨리기 쉬운 것은?' }, { id: 'q2', label: '먹이 사슬의 시작은?' }, { id: 'q3', label: '안내 자료에 꼭 있을 것은?' }], cards: ['공기·온도 같은 비생물 요소', '풀 같은 식물', '문제, 실천 방법, 그 까닭'] },
                  target: { match: { q1: '공기·온도 같은 비생물 요소', q2: '풀 같은 식물', q3: '문제, 실천 방법, 그 까닭' } }, difficulty: 0.2,
                  conclude: '생물과 환경은 서로 영향을 주고받으며, 사람의 실천이 생태계를 지켜요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"우리 반이 실천할 일은 무엇으로 정했나요?" 각 모둠이 정한 실천과 기록 방법을 한 문장으로 말하게 한다. 단원 첫 시간의 질문 "화단에는 무엇이 있을까요?"를 다시 던져, 이제는 생물 요소와 비생물 요소를 모두 말할 수 있는지 들어 본다. 자기 점검에서 표시하지 못한 항목은 출구 질문 마지막 칸에 적게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: 'z1', text: '실천할 일을 정해요' }, { id: 'z2', text: '날마다 실천하고 기록해요' }, { id: 'z3', text: '결과를 점검해요' }] }, prompt: '학급 실천을 하는 차례대로 자리에 놓아 보세요.', target: { order: ['z1', 'z2', 'z3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '실천 결과를 기록하는 이유로 가장 알맞은 것은 무엇인가요?', options: ['무엇이 달라졌는지 확인할 수 있어서', '글씨 연습을 하려고', '친구에게 자랑하려고'], answer: 0, difficulty: 0.2, explain: '기록이 있어야 실천 뒤에 무엇이 달라졌는지 알 수 있어요.' },
            { type: 'choice', prompt: '먹이 사슬에서 화살표의 방향으로 알맞은 것은 무엇인가요?', options: ['먹히는 쪽에서 먹는 쪽으로', '먹는 쪽에서 먹히는 쪽으로', '아무 방향이나'], answer: 0, difficulty: 0.15, explain: '화살표는 먹히는 쪽에서 먹는 쪽을 향해요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '일주일 실천 기록과 단원 돌아보기',
        items: [
          { type: 'table', prompt: '우리 반이 실천할 일을 정하고, 일주일 실천 기록표를 채우세요. 실제로 한 날만 ○ 하세요.', columns: ['날짜', '실천한 일', '○ / ×', '느낀 점'], cells: [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], answer: '실천 내용에 따라 다름. 실제로 한 날만 ○, 못 한 날의 까닭이 적혔는지 확인' },
          { type: 'figure', wide: true, prompt: '가지마다 이 단원에서 배운 것을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '생물과 환경', printCards: false, slots: ['구성 요소', '먹이 관계', '생태계 보전'], cards: ['보기'] }, caption: '' }], answer: '예: 구성 요소 — 생물 요소와 비생물 요소 / 먹이 관계 — 먹히는 쪽에서 먹는 쪽으로 화살표 / 보전 — 문제와 실천을 함께 적어 안내' },
          { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○, 아직이면 △ 하세요.', columns: ['할 수 있는 것', '○ / △'], cells: [['생물 요소와 비생물 요소를 나눌 수 있다', ''], ['먹이 사슬 화살표 방향을 말할 수 있다', ''], ['먹이그물이 무엇인지 설명할 수 있다', ''], ['오염이 다른 생물에게 주는 영향을 말할 수 있다', ''], ['문제와 실천을 짝지어 안내 글을 쓸 수 있다', '']] },
          { type: 'check', prompt: '실천 기록을 쓸 때 알맞은 태도에 모두 ✓ 하세요.', options: ['실제로 한 일만 ○ 한다', '그날그날 바로 쓴다', '하지 않은 일도 ○ 한다', '못 한 날은 까닭을 쓴다'], answer: '실제로 한 일만 ○ 한다, 그날그날 바로 쓴다, 못 한 날은 까닭을 쓴다' },
          { type: 'short', prompt: '단원 첫 시간의 질문 "화단에는 무엇이 있을까요?"에 지금의 내 말로 답하세요.', answer: '화단에는 꽃·개미 같은 생물 요소와 흙·햇빛·공기 같은 비생물 요소가 함께 있다.' },
        ],
        easy: {
          note: '계획하고, 실천하고, 그날그날 기록하고, 점검해요. 기록에는 실제로 한 일만 ○ 해요.',
          items: [
            { type: 'choice', prompt: '기록에서 ○ 를 할 때 알맞은 것에 ○ 하세요.', options: ['실제로 한 일', '하지 않은 일'], answer: '실제로 한 일' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '먹이 사슬의 화살표는 ___ 쪽에서 먹는 쪽으로 향해요.', answer: '먹히는' },
            { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○ 하세요.', columns: ['할 수 있는 것', '○'], cells: [['생물·비생물 나누기', ''], ['먹이 사슬 화살표', ''], ['오염의 영향 말하기', '']] },
            { type: 'draw', prompt: '우리 반이 실천할 일을 하나 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 계획 차례 카드에 번호가 보여요.',
        base: '실천 차례와 점검표를 스스로 채우고, 단원 문장을 세 가지로 나누어요.',
        challenge: '틀린 문장이 섞인 카드에서 옳은 것만 고르고, 단원 전체를 질문과 답으로 이어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 계획만 세우고 실천 결과를 기록하지 않아 변화를 확인하지 못한다. ② 하지 않은 일도 ○ 로 적는다 → 기록은 솔직해야 함을 먼저 약속한다. ③ 단원 내용을 따로따로 기억한다 → 구성 요소 → 먹이 관계 → 오염과 보전의 흐름으로 묶는다. 일주일 실천 기록은 이 차시 활동지 표를 그대로 쓰고, 학생 이름 대신 모둠 이름이나 번호를 쓰게 한다. 자기 점검에서 △가 많은 항목은 다음 단원 시작 전 복습 거리로 쓴다.',
    }),

  ];

  PaperLessons.registerUnit({
    id: 'g4-sci-2-02', schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 4, subject: '과학', unitTitle: '2. 생물과 환경',
    flow: '1~4차시는 생태계의 구성 요소다. 화단의 것을 생물 요소와 비생물 요소로 가르고 눈에 안 보이는 공기·온도도 구성 요소임을 알고(1), 연못·갯벌·사막을 견주어 곳마다 다른 생물과 어디에나 있는 비생물 요소를 가르고(2), 조사한 것을 두 갈래 표와 그림 표시로 나타내고(3), 화단 조사 계획과 안전 약속을 정해 빠짐없이 찾아 목록을 만든다(4). 5~8차시는 먹이 관계로, 먹이 사슬의 화살표가 먹히는 쪽에서 먹는 쪽을 향함을 알고(5), 여러 사슬이 얽힌 먹이그물을 만들어 갈래 많은 생물을 찾고(6), 연못·바다의 새 상황에서 사슬의 시작과 영향 퍼짐을 따져 보고(7), 숲 생물의 먹이를 자료로 조사해 실 모형으로 확인한다(8). 9~11차시는 생태계 보전으로, 대기·수질·토양 오염의 사례와 생물에게 가는 영향을 알고(9), 오염 문제와 실천을 짝지어 안내 자료를 만들고(10), 학급 실천을 계획·기록하며 단원을 정리한다(11).',
    refs: {},
    lessons,
  });
})();
