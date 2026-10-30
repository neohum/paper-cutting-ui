/* 4학년 2학기 과학 1. 밤하늘 관찰 — 11차시
 * 달(1~4) → 태양계의 행성(5~8) → 별과 북극성(9~11). 실제 밤 관찰은 집·학교에서 하고, 디지털 판은 관찰 전후의 정리와 연습을 맡는다.
 */
(function () {
  const U = { grade: 4, subject: '과학', unitTitle: '1. 밤하늘 관찰' };
  const CU = 'g4-과학-2학기-1';
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const L = (n, rest) => Object.assign({
    id: `g4-sci-2-01-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: CU, lesson: n }, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, U, rest);
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const EZ = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const NIGHT = ['밤에 달·별을 볼 때는 어른과 함께 나가고, 혼자 어두운 길을 걷지 않아요.', '쌍안경·망원경·돋보기로 해를 절대 보지 않아요. 눈을 크게 다칠 수 있어요.'];

  const lessons = [
    // ───────────────────────── 1차시 (intro) ─────────────────────────
    L(1, {
      title: '달의 밝은 곳·어두운 곳 찾고 날짜별 모양 이름 붙이기',
      objective: '달 표면에서 밝은 곳과 어두운 곳을 가르고, 음력 날짜에 따라 달 모양이 달라진다는 것을 말할 수 있다.',
      standards: ['[4과13-01]'],
      safety: NIGHT,
      illustration: {
        prompt: P('a big round moon with darker patches and small craters above quiet hills, with a small crescent moon and a half moon floating beside it'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'moon', x: 240, y: 92, s: 1.6 }, { motif: 'star', x: 90, y: 52, s: 0.6, color: 'buttercup' }, { motif: 'star', x: 400, y: 70, s: 0.7, color: 'cream' },
          { motif: 'hills', y: 220, colors: ['lavender', 'sky', 'mint'] }, { motif: 'text', x: 240, y: 206, text: '달은 매일 같은 모양일까요?', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 7,
          teacher: '"어젯밤이나 며칠 전 밤하늘에서 달을 본 사람?" 보름달 사진과 가느다란 달 사진을 나란히 띄운다. "같은 달인데 왜 모양이 다를까요?" 이때 "구름이 가려서" 또는 "지구 그림자가 가려서"라는 대답이 자주 나오니 칠판 한쪽에 적어 두었다가 정리에서 다시 견준다. 달 표면의 어두운 얼룩과 하얀 부분도 함께 눈여겨보게 한다.',
          student: '달 사진 두 장을 견주어 봐요. 모양이 다른 까닭은 무엇일까요?',
          demo: { tool: 'earth', options: { mode: 'moon', days: [3, 15] }, sequence: [{ moon: 'auto' }] },
        },
        {
          id: 'main', title: '전개', minutes: 25,
          activities: [
            {
              id: 'a1', title: '활동 1. 달 표면 살펴보기', minutes: 12, tool: 'mindmap',
              task: '달 표면을 설명한 카드를 읽고, 알맞은 가지나 바구니에 놓아요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
              teacher: '"달에서 하얗게 보이는 곳과 검게 보이는 곳은 어떻게 다를까요?" 밝은 곳은 높고 울퉁불퉁한 땅, 어두운 곳은 낮고 평평한 땅이라고 짚는다. 어두운 곳을 \'바다\'라고 부르니 물이 있다고 답하는 학생이 있으면 "달에는 물로 된 바다가 없어요. 이름만 바다예요"라고 바로잡는다.',
              levels: EZ,
              items: [
                { prompt: '달 표면의 밝은 곳과 어두운 곳에 알맞은 설명을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '달 표면', slots: [{ id: '밝은', label: '밝게 보이는 곳' }, { id: '어두운', label: '어둡게 보이는 곳' }],
                    cards: ['높고 울퉁불퉁한 땅', '낮고 평평한 땅', { id: '물바다', text: '물이 가득 찬 바다', why: '달의 어두운 곳을 바다라고 부르지만 물은 없어요.' }] },
                  target: { match: { 밝은: '높고 울퉁불퉁한 땅', 어두운: '낮고 평평한 땅' } }, difficulty: 0.15 },
                { prompt: '민지가 망원경 사진으로 달을 보고 쓴 기록이에요. 밝은 곳과 어두운 곳으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '달 사진 기록', slots: ['밝은 곳', '어두운 곳'], cards: ['하얗게 보이는 넓은 부분', '검게 보이는 넓은 부분', '구덩이가 많고 거칠어 보여요', '비교적 매끈하고 평평해 보여요'] },
                  target: { sort: { '밝은 곳': ['하얗게 보이는 넓은 부분', '구덩이가 많고 거칠어 보여요'], '어두운 곳': ['검게 보이는 넓은 부분', '비교적 매끈하고 평평해 보여요'] } }, difficulty: 0.2 },
                { prompt: '달 표면에 대해 옳은 설명만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '달 표면', basket: '옳아요', cards: ['움푹 파인 구덩이가 있어요', '어두운 곳을 바다라고 부르지만 물은 없어요', { id: '토끼', text: '토끼가 실제로 살고 있어요', why: '토끼 모양은 어두운 곳의 무늬를 그렇게 보는 것뿐이에요.' }, { id: '매끈', text: '표면이 어디나 매끈해요', why: '구덩이와 울퉁불퉁한 곳이 많아요.' }] },
                  target: { pick: ['움푹 파인 구덩이가 있어요', '어두운 곳을 바다라고 부르지만 물은 없어요'] }, difficulty: 0.25,
                  conclude: '달 표면에는 밝고 울퉁불퉁한 곳과 어둡고 평평한 곳이 있고, 구덩이도 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 날짜에 따른 달 모양에 이름 붙이기', minutes: 13, tool: 'earth',
              task: '같은 곳에서 저녁에 본 달이에요. 날짜 카드를 눌러 달 모양 이름을 바꿔 가며 알맞은 이름을 골라요.',
              teacher: '"음력 15일 무렵에 가장 둥글어요. 그 앞과 뒤의 달은 어느 쪽이 밝을까요?" 처음에는 오른쪽부터 차오르고, 보름이 지나면 오른쪽부터 줄어든다는 것을 손으로 따라 그리게 한다. 상현달과 하현달, 초승달과 그믐달의 밝은 쪽을 바꿔 고르는 학생이 많다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '음력 3일, 15일, 27일에 본 달의 모양 이름을 골라 보세요.',
                  toolOptions: { mode: 'moon', days: [3, 15, 27] }, target: { moon: 'auto' }, difficulty: 0.15,
                  predict: { q: '음력 15일 무렵의 달은 어떤 모양일까요?', options: ['가느다란 달', '반달', '둥근 달'], answer: 2 },
                  conclude: '음력 15일 무렵에 가장 둥근 보름달이 보이고, 그 앞뒤로 점점 얇아져요.' },
                { prompt: '음력 7일과 22일에 본 달이에요. 모양 이름을 골라 보세요.',
                  toolOptions: { mode: 'moon', days: [7, 22] }, target: { moon: 'auto' }, difficulty: 0.2 },
                { prompt: '그림 속 달은 오른쪽이 반만 밝아요. 이 달의 이름을 고르세요.',
                  toolOptions: { mode: 'moon', days: [8], readOnly: true, dayLabel: '어느 날 저녁', ask: { q: '이 달의 이름은?', choices: ['초승달', '상현달', '하현달'], why: ['초승달은 더 가느다랗게 보여요.', '', '하현달은 왼쪽이 밝아요.'] } },
                  state: { moon: { 8: '상현달' } }, target: { pick: 1 }, difficulty: 0.25 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 칠판에 적은 "구름이 가려서", "지구 그림자 때문에"를 다시 가리킨다. "구름이 낀 날과 맑은 날의 보름달 모양이 달랐나요?" 달은 스스로 빛나는 것이 아니라 햇빛을 받은 부분이 밝게 보이고, 날짜에 따라 우리 눈에 보이는 밝은 부분이 달라진다고 정리한다. 출구 질문 1번에서 밝은 쪽을 바꿔 고른 학생에게는 다음 시간 첫 문항을 짝과 함께 풀게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'earth', options: { mode: 'moon', days: [4, 28] }, prompt: '음력 4일과 28일에 본 달의 모양 이름을 골라 보세요.', target: { moon: 'auto' }, difficulty: 0.25 },
            { type: 'choice', prompt: '달 모양이 날짜마다 달라지는 까닭으로 가장 알맞은 것은 무엇인가요?', options: ['구름이 달을 가려서', '지구의 그림자가 달을 덮어서', '날짜에 따라 우리가 보는 달의 밝은 부분이 달라져서'], answer: 2, difficulty: 0.25, explain: '달은 햇빛을 받은 부분이 밝게 보이는데, 날짜에 따라 그중 우리 눈에 보이는 부분이 달라져요.' },
            { type: 'choice', prompt: '달에서 어둡게 보이는 곳을 부르는 이름은 무엇인가요?', options: ['바다', '호수', '구름'], answer: 0, difficulty: 0.15, explain: '어두운 곳을 바다라고 부르지만 물이 있는 것은 아니에요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '달의 표면과 날짜별 모양',
        items: [
          { type: 'figure', wide: true, prompt: '음력 3일·15일·27일 저녁에 본 달이에요. 달 모양 이름을 쓰세요.', tool: 'earth', options: { mode: 'moon', days: [3, 15, 27], printShapes: true }, figures: [{ options: {}, caption: '___달   ___달   ___달' }], answer: '초승달, 보름달, 그믐달' },
          { type: 'table', prompt: '달 표면 사진을 보고 밝은 곳과 어두운 곳을 견주어 쓰세요.', columns: ['견줄 점', '밝은 곳', '어두운 곳'], cells: [['색', '', ''], ['땅의 모습', '', '']], answer: '밝은 곳: 하얗고 높고 울퉁불퉁함 / 어두운 곳: 검고 낮고 평평함' },
          { type: 'choice', prompt: '달 모양이 날마다 달라지는 까닭에 ○ 하세요.', options: ['구름이 가려서', '날짜에 따라 보이는 밝은 부분이 달라서', '달이 스스로 모양을 바꿔서'], answer: '날짜에 따라 보이는 밝은 부분이 달라서' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '달에서 어둡게 보이는 곳을 ___라고 부르지만, 그곳에 ___은 없습니다.', answer: '바다, 물' },
          { type: 'short', prompt: '"달의 모양은 지구의 그림자 때문에 바뀐다."는 친구의 말을 고쳐 써 보세요.', answer: '달 모양은 날짜에 따라 우리 눈에 보이는 밝은 부분이 달라져서 바뀐다.' },
        ],
        easy: {
          note: '음력 15일 무렵에 가장 둥근 보름달이 떠요. 그 앞은 점점 커지고, 그 뒤는 점점 작아져요.',
          items: [
            { type: 'choice', prompt: '가장 둥근 달에 ○ 하세요.', options: ['초승달', '보름달', '그믐달'], answer: '보름달' },
            { type: 'choice', prompt: '달에서 어둡게 보이는 곳의 이름에 ○ 하세요.', options: ['바다', '구름'], answer: '바다' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '달 모양은 ___에 따라 달라져요.', answer: '날짜' },
            { type: 'draw', prompt: '보름달과 가느다란 달을 한 칸씩 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 달 모양을 두 번 틀리면 힌트가 먼저 나와요.',
        base: '달 그림 카드를 모두 고른 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '구덩이·바다처럼 함정 설명이 섞이고, 반달의 밝은 쪽을 보고 상현·하현을 가려야 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 달 모양이 변하는 까닭을 구름이나 지구 그림자 탓으로 돌린다 → 지구 그림자가 달을 가리는 것은 월식이라는 다른 현상이니 이 단원에서 깊이 다루지 않는다. ② 상현달과 하현달의 밝은 쪽을 헷갈린다 → 저녁에 보면 처음엔 오른쪽부터 밝아진다. ③ 달의 \'바다\'에 물이 있다고 여긴다. 이 단원의 날짜는 모두 음력이고, 달 모양은 날짜에 따라 대표적인 모양으로 보여 준다. 사진이 필요하면 학교 도서관이나 천문 기관 누리집의 달 사진을 쓴다.',
    }),

    // ───────────────────────── 2차시 (practice) ─────────────────────────
    L(2, {
      title: '날짜와 달 모양의 짝을 맞추고 달 모양 돌고 돌기',
      objective: '여러 날짜의 달 모양을 이름으로 말하고, 달 모양이 약 한 달을 주기로 되풀이된다는 것을 설명할 수 있다.',
      standards: ['[4과13-01]'],
      illustration: {
        prompt: P('five paper moons in a ring on a dark blue sky, from a thin crescent growing to a full circle and shrinking again, with small curved arrows between them'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'star', x: 70, y: 56, s: 0.6, color: 'cream' }, { motif: 'star', x: 410, y: 48, s: 0.6, color: 'buttercup' },
          { motif: 'moon', x: 130, y: 120, s: 0.9 }, { motif: 'moon', x: 240, y: 90, s: 1.2 }, { motif: 'moon', x: 350, y: 120, s: 0.9 },
          { motif: 'hills', y: 222 }, { motif: 'text', x: 240, y: 190, text: '달 모양은 되풀이돼요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"지난 시간에 음력 15일 달은 어떤 모양이었죠?" 그다음 "보름달이 뜬 날에서 한 달쯤 뒤에는 어떤 달이 뜰까요?"를 묻고, 예상을 손들기로 센다. 달 모양이 계속 변하기만 할 뿐이라고 답하는 학생이 있으면 오늘의 질문 "달 모양은 되풀이될까요?"로 이어 준다.',
          student: '보름달이 뜬 날에서 한 달쯤 지나면 어떤 달이 뜰까요?',
          demo: { tool: 'earth', options: { mode: 'moon', days: [2, 15] }, sequence: [{ moon: 'auto' }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 날짜 카드에 달 모양 고르기', minutes: 13, tool: 'earth',
              task: '날짜 카드를 눌러 달 모양 이름을 바꾸며, 날짜에 알맞은 이름을 골라요. 마지막 문항은 달 그림을 보고 보기에서 골라요.',
              teacher: '"음력 2일과 28일의 달은 모두 가느다란데 어떻게 가릴까요?" 저녁에 보이는지 새벽에 보이는지, 밝은 쪽이 오른쪽인지 왼쪽인지를 짚게 한다. 3번의 4일은 초승달인데 반달이라고 답하는 학생에게는 "밝은 부분이 반이 안 돼요. 더 얇은 달이에요"라고 되묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '음력 4일, 8일, 23일의 달 모양 이름을 골라 보세요.',
                  toolOptions: { mode: 'moon', days: [4, 8, 23] }, target: { moon: 'auto' }, difficulty: 0.15 },
                { prompt: '음력 2일, 15일, 28일의 달 모양 이름을 골라 보세요.',
                  toolOptions: { mode: 'moon', days: [2, 15, 28] }, target: { moon: 'auto' }, difficulty: 0.2 },
                { prompt: '날짜 네 개의 달 모양을 한꺼번에 골라 보세요.',
                  toolOptions: { mode: 'moon', days: [3, 7, 22, 27] }, target: { moon: 'auto' }, difficulty: 0.3 },
                { prompt: '그림 속 달은 왼쪽이 반만 밝아요. 이 달의 이름을 고르세요.',
                  toolOptions: { mode: 'moon', days: [23], readOnly: true, dayLabel: '어느 날', ask: { q: '이 달의 이름은?', choices: ['상현달', '하현달', '그믐달'], why: ['상현달은 오른쪽이 밝아요.', '', '그믐달은 훨씬 가느다랗게 보여요.'] } },
                  state: { moon: { 23: '하현달' } }, target: { pick: 1 }, difficulty: 0.3 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 달 모양이 되풀이되는 판 돌리기', minutes: 13, tool: 'lifecycle',
              task: '달 모양 카드를 둥근 판의 자리에 놓아요. 판을 한 바퀴 돌면 달 모양이 되풀이되는 것을 알 수 있어요.',
              teacher: '"초승달부터 시작해서 그믐달까지 가면 그다음은 무엇일까요?" 그믐달과 초승달 사이에는 달이 거의 보이지 않는 날이 있다고 알려 준다. 달 모양이 약 한 달(29일 남짓)마다 같은 순서로 되풀이된다는 것을 말하게 하고, 첫 문항의 시작 카드가 달라도 순서가 맞으면 정답임을 짚는다.',
              levels: EZ,
              items: [
                { prompt: '달 모양 다섯 장을 차오르는 차례로 돌아가며 판에 놓아 보세요.',
                  toolOptions: { center: '달 모양 되풀이', cards: [{ id: '초승', text: '초승달', motif: 'moon' }, { id: '상현', text: '상현달', motif: 'moon' }, { id: '보름', text: '보름달', motif: 'moon' }, { id: '하현', text: '하현달', motif: 'moon' }, { id: '그믐', text: '그믐달', motif: 'moon' }] },
                  target: { order: ['초승', '상현', '보름', '하현', '그믐'], cyclic: true }, difficulty: 0.2 },
                { prompt: '앞 달 모양 다음에 오는 모양을 이어 보세요.',
                  toolOptions: { mode: 'match', center: '다음 모양', cycle: false, slots: [{ id: 's1', label: '초승달 다음' }, { id: 's2', label: '보름달 다음' }, { id: 's3', label: '그믐달 다음' }], cards: ['상현달', '하현달', '초승달'] },
                  target: { match: { s1: '상현달', s2: '하현달', s3: '초승달' } }, difficulty: 0.25 },
                { prompt: '달이 점점 커지는 때와 점점 작아지는 때로 나누어 보세요. 가장 둥근 달은 남겨 두세요.',
                  toolOptions: { mode: 'sort', center: '커짐·작아짐', slots: ['점점 커지는 때', '점점 작아지는 때'], cards: ['초승달', '상현달', { id: '보름', text: '보름달', why: '보름달은 가장 둥근 때예요. 커지는 때도 작아지는 때도 아니에요.' }, '하현달', '그믐달'] },
                  target: { sort: { '점점 커지는 때': ['초승달', '상현달'], '점점 작아지는 때': ['하현달', '그믐달'] } }, difficulty: 0.25,
                  conclude: '달 모양은 약 한 달 동안 차오르다 줄어들고, 그 뒤 다시 처음부터 되풀이돼요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"보름달에서 한 달쯤 뒤에는 어떤 달이 뜬다고 했나요?" 도입에서 손든 예상과 견주어 본다. 되풀이된다는 말을 학생이 자기 말로 하게 하고, 한 바퀴가 약 한 달이라는 것을 확인한다. 출구 질문 2번에서 하현달을 고른 학생에게는 보름달이 지난 뒤라는 것을 판에서 다시 짚게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'lifecycle', options: { center: '달 모양 되풀이', cards: [{ id: '상현', text: '상현달', motif: 'moon' }, { id: '보름', text: '보름달', motif: 'moon' }, { id: '하현', text: '하현달', motif: 'moon' }, { id: '그믐', text: '그믐달', motif: 'moon' }] }, prompt: '보름달 다음부터 차례로 돌아가며 판에 놓아 보세요.', target: { order: ['보름', '하현', '그믐', '상현'], cyclic: true }, difficulty: 0.3 },
            { type: 'choice', prompt: '그믐달이 뜬 뒤 여러 날이 지나면 어떤 달이 다시 보일까요?', options: ['가느다란 초승달', '곧바로 보름달', '하현달'], answer: 0, difficulty: 0.2, explain: '그믐달 뒤 달이 거의 안 보이는 날을 지나 다시 가느다란 초승달부터 되풀이돼요.' },
            { type: 'choice', prompt: '달 모양이 한 바퀴 되풀이되는 데는 대략 얼마나 걸릴까요?', options: ['하루', '약 한 달', '약 1년'], answer: 1, difficulty: 0.15, explain: '달 모양은 약 한 달(29일 남짓)을 주기로 되풀이돼요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '날짜와 달 모양 짝짓기',
        items: [
          { type: 'figure', wide: true, prompt: '음력 7일·15일·23일에 본 달이에요. 달 모양 이름을 쓰세요.', tool: 'earth', options: { mode: 'moon', days: [7, 15, 23], printShapes: true }, figures: [{ options: {}, caption: '___달   ___달   ___달' }], answer: '상현달, 보름달, 하현달' },
          { type: 'table', prompt: '달 모양 이름을 달라지는 차례대로 번호(1~5)를 쓰세요. 1은 초승달이에요.', columns: ['달 모양', '차례'], cells: [['보름달', ''], ['그믐달', ''], ['초승달', '1'], ['하현달', ''], ['상현달', '']], answer: '초승달 1, 상현달 2, 보름달 3, 하현달 4, 그믐달 5' },
          { type: 'check', prompt: '점점 작아지는 때의 달에 모두 ✓ 하세요.', options: ['초승달', '상현달', '하현달', '그믐달'], answer: '하현달, 그믐달' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '달 모양은 약 ___ 동안 달라졌다가 다시 ___됩니다.', answer: '한 달, 되풀이' },
          { type: 'draw', prompt: '달 모양이 되풀이되는 것을 동그란 판에 다섯 개의 달로 그리고 화살표로 이어 보세요.' },
        ],
        easy: {
          note: '초승달 → 상현달 → 보름달 → 하현달 → 그믐달 → 다시 초승달 순서로 돌고 돌아요.',
          items: [
            { type: 'choice', prompt: '초승달 다음에 오는 달에 ○ 하세요.', options: ['상현달', '하현달'], answer: '상현달' },
            { type: 'choice', prompt: '달 모양이 되풀이되는 데 걸리는 시간에 ○ 하세요.', options: ['하루', '약 한 달'], answer: '약 한 달' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '보름달 다음에는 ___달이 와요.', answer: '하현' },
            { type: 'draw', prompt: '가장 둥근 달과 반달을 한 칸씩 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 초록 테두리가 생기고, 달 모양 판에 처음 카드가 놓여 있어요.',
        base: '달 모양 다섯 장을 스스로 돌려 놓고 확인해요.',
        challenge: '보름달처럼 어느 쪽에도 넣지 않을 카드를 가려내고, 어느 카드부터 시작해도 되는 판을 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 달 모양이 계속 변하기만 한다고 여기고 되풀이됨을 놓친다 → 판 한 바퀴를 손가락으로 돌려 보게 한다. ② 초승달과 그믐달을 구별하지 못한다 → 저녁에 서쪽 하늘 낮은 곳에 보이는 쪽이 초승달, 새벽에 동쪽에서 보이는 쪽이 그믐달이다. ③ 반달을 모두 같은 것으로 본다 → 상현달은 처음 차오르는 반달(오른쪽 밝음), 하현달은 줄어드는 반달(왼쪽 밝음). 달이 거의 보이지 않는 날의 이름(삭)은 외우지 않아도 되고 \'거의 안 보이는 날\'이 있다는 것만 짚는다.',
    }),

    // ───────────────────────── 3차시 (core, 자료 표현) ─────────────────────────
    L(3, {
      title: '관찰한 날짜 차례대로 달 그림 늘어놓고 기록의 요건 찾기',
      objective: '관찰한 달 모양을 날짜 차례대로 늘어놓아 변화를 설명하고, 관찰 기록에 날짜·시각·모양이 꼭 들어가야 하는 까닭을 말할 수 있다.',
      standards: ['[4과13-01]'],
      illustration: {
        prompt: P('a paper notebook page with a row of small drawn moons from thin to round, each with a small date label and a pencil lying beside it'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'star', x: 70, y: 56, s: 0.6, color: 'buttercup' }, { motif: 'cloud', x: 390, y: 52 },
          { motif: 'moon', x: 110, y: 128, s: 0.7 }, { motif: 'moon', x: 190, y: 128, s: 0.8 }, { motif: 'moon', x: 280, y: 128, s: 1 }, { motif: 'moon', x: 380, y: 128, s: 1.1 },
          { motif: 'hills', y: 224 }, { motif: 'text', x: 240, y: 196, text: '날짜를 적어야 차례를 알아요', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '날짜 없이 달 그림만 네 장 섞어 칠판에 붙인다. "이 그림들은 어떤 차례로 본 걸까요? 어떻게 알 수 있나요?" 학생이 모양만 보고 서로 다른 차례를 말하면 "날짜가 있으면 누구나 같은 순서로 놓을 수 있어요"라고 이어 준다. 오늘은 날짜를 적은 달 그림을 차례대로 놓고, 기록에 무엇이 꼭 들어가야 하는지 찾는다고 알린다.',
          student: '날짜 없이 달 그림만 있으면 어떤 차례인지 알 수 있을까요?',
          demo: { tool: 'timeline', options: { shuffle: false, axis: ['먼저 본 날', '나중에 본 날'], cards: [{ id: 'a', text: '가느다란 달', sub: '음력 3일' }, { id: 'b', text: '반달', sub: '음력 7일' }] }, sequence: [{ order: ['a', 'b'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 날짜 차례대로 달 그림 놓기', minutes: 13, tool: 'timeline',
              task: '관찰한 달 카드를 읽고, 먼저 본 날부터 띠의 왼쪽에 놓아요. 카드의 작은 글이 본 날짜예요.',
              teacher: '"날짜가 작을수록 먼저예요. 날짜를 보고 놓아 볼까요?" 3번처럼 날짜가 한 달을 넘어 이어질 때 그믐달 다음에 초승달이 오는 것을 놓치기 쉽다. 이럴 때는 날짜의 월과 일을 소리 내어 읽게 한다.',
              levels: EZ,
              items: [
                { prompt: '관찰한 달 카드를 먼저 본 날부터 띠에 놓아 보세요.',
                  toolOptions: { axis: ['먼저 본 날', '나중에 본 날'], cards: [{ id: 'c1', text: '둥근 달', sub: '음력 15일' }, { id: 'c2', text: '가느다란 달', sub: '음력 3일' }, { id: 'c3', text: '반달(오른쪽 밝음)', sub: '음력 7일' }] },
                  target: { order: ['c2', 'c3', 'c1'] }, difficulty: 0.15 },
                { prompt: '둥근 달을 본 뒤의 관찰 카드예요. 먼저 본 날부터 띠에 놓아 보세요.',
                  toolOptions: { axis: ['먼저 본 날', '나중에 본 날'], cards: [{ id: 'd1', text: '반달(왼쪽 밝음)', sub: '음력 22일' }, { id: 'd2', text: '둥근 달', sub: '음력 15일' }, { id: 'd3', text: '아주 가느다란 달', sub: '음력 27일' }, { id: 'd4', text: '조금 이지러진 달', sub: '음력 18일' }] },
                  target: { order: ['d2', 'd4', 'd1', 'd3'] }, difficulty: 0.25 },
                { prompt: '같은 달이 한 번 더 차오르는 것을 기록했어요. 먼저 본 날부터 띠에 놓아 보세요.',
                  toolOptions: { axis: ['먼저 본 날', '나중에 본 날'], cards: [{ id: 'e1', text: '아주 가느다란 달', sub: '음력 28일' }, { id: 'e2', text: '가느다란 달', sub: '다음 달 음력 3일' }, { id: 'e3', text: '반달(오른쪽 밝음)', sub: '다음 달 음력 7일' }] },
                  target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.3,
                  conclude: '날짜를 적어 두면 달 모양이 바뀌는 차례를 누구나 같게 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 관찰 기록에 꼭 필요한 것 찾기', minutes: 13, tool: 'mindmap',
              task: '관찰 기록을 읽고, 가지나 바구니에 알맞은 카드를 놓아요.',
              teacher: '"날짜가 없는 기록과 날짜가 있는 기록 중 어느 것이 변화를 말해 줄까요?" 두 기록을 나란히 견주게 한다. "달이 예뻤다"처럼 느낌만 적은 기록은 나중에 비교할 수 없다는 점을 짚고, 같은 시각에 본 기록끼리 견주어야 달 모양 변화가 보인다는 것을 말하게 한다.',
              levels: EZ,
              items: [
                { prompt: '달 관찰 기록에 꼭 적어야 하는 것만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '관찰 기록', basket: '꼭 적어요', cards: ['관찰한 날짜', '관찰한 시각', '달의 모양 그림', { id: '밥', text: '그날 저녁 반찬', why: '달 모양과 관계없어요.' }, { id: '숙제', text: '그날의 학교 숙제', why: '달 모양을 비교하는 데 필요하지 않아요.' }] },
                  target: { pick: ['관찰한 날짜', '관찰한 시각', '달의 모양 그림'] }, difficulty: 0.15 },
                { prompt: '기록을 바르게 쓴 것과 고쳐야 할 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '기록 점검', slots: ['바르게 썼어요', '고쳐 써요'], cards: ['3월 5일 저녁 7시, 오른쪽이 가느다랗게 빛나요', '달이 예뻤다', '날짜 없이 달 모양만 그렸어요', '3월 9일 저녁 7시, 오른쪽이 반만 밝아요'] },
                  target: { sort: { '바르게 썼어요': ['3월 5일 저녁 7시, 오른쪽이 가느다랗게 빛나요', '3월 9일 저녁 7시, 오른쪽이 반만 밝아요'], '고쳐 써요': ['달이 예뻤다', '날짜 없이 달 모양만 그렸어요'] } }, difficulty: 0.2 },
                { prompt: '기록이 이렇게 되었을 때 생기는 어려움을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '이럴 때는?', slots: [{ id: 'nodate', label: '날짜를 적지 않았어요' }, { id: 'time', label: '날마다 시각이 달랐어요' }], cards: ['변화의 차례를 알 수 없어요', '모양과 위치를 같은 조건에서 견주기 어려워요', '달이 더 밝아져요'] },
                  target: { match: { nodate: '변화의 차례를 알 수 없어요', time: '모양과 위치를 같은 조건에서 견주기 어려워요' } }, difficulty: 0.3,
                  predict: { q: '날짜를 적지 않으면 어떤 점이 가장 어려울까요?', options: ['차례를 알 수 없어요', '달이 안 보여요', '잘 모르겠어요'], answer: 0 },
                  conclude: '날짜와 시각을 함께 적어야 달 모양 변화를 같은 조건에서 견줄 수 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"도입에서 날짜 없는 그림은 차례를 어떻게 정했나요?" 이제는 어떻게 하면 되는지 말하게 한다. 날짜·시각·모양 세 가지를 손가락으로 꼽으며 다시 말해 본다. 출구 질문 2번에서 시각을 고르지 못한 학생에게는 날마다 다른 시각에 보면 달의 위치도 달라 보인다고 알려 준다.',
          exitTicket: [
            { type: 'tool', tool: 'timeline', options: { axis: ['먼저 본 날', '나중에 본 날'], cards: [{ id: 'x1', text: '반달(오른쪽 밝음)', sub: '음력 8일' }, { id: 'x2', text: '둥근 달', sub: '음력 15일' }, { id: 'x3', text: '가느다란 달', sub: '음력 2일' }] }, prompt: '먼저 본 날부터 띠에 놓아 보세요.', target: { order: ['x3', 'x1', 'x2'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '달 관찰 기록에 가장 꼭 필요하지 않은 것은 무엇인가요?', options: ['관찰한 날짜', '관찰한 시각', '그날 먹은 간식'], answer: 2, difficulty: 0.15, explain: '날짜·시각·달 모양이 있어야 변화를 견줄 수 있어요.' },
            { type: 'choice', prompt: '민지는 날짜 없이 달 모양만 그렸어요. 가장 알맞은 조언은 무엇인가요?', options: ['날짜도 함께 적어요', '그림을 더 크게 그려요', '색을 더 예쁘게 칠해요'], answer: 0, difficulty: 0.2, explain: '날짜가 있어야 모양이 어떤 차례로 바뀌었는지 알 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '달 관찰 기록 정리하기',
        items: [
          { type: 'table', prompt: '달 관찰 기록표를 채우세요. 보이지 않은 날은 까닭도 적어요.', columns: ['날짜', '시각', '달 모양(그림이나 이름)', '보인 방향'], cells: [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], answer: '관찰한 날에 따라 다름. 같은 시각에 보았는지, 날짜가 적혔는지 확인' },
          { type: 'figure', wide: true, prompt: '음력 4일·8일·15일의 달이에요. 날짜 차례대로 달 모양 이름을 쓰세요.', tool: 'earth', options: { mode: 'moon', days: [4, 8, 15], printShapes: true }, figures: [{ options: {}, caption: '___달   ___달   ___달' }], answer: '초승달, 상현달, 보름달' },
          { type: 'check', prompt: '달 관찰 기록에 꼭 적을 것에 모두 ✓ 하세요.', options: ['관찰한 날짜', '관찰한 시각', '달 모양 그림', '그날의 점심 메뉴'], answer: '관찰한 날짜, 관찰한 시각, 달 모양 그림' },
          { type: 'short', prompt: '날짜 없이 달 모양만 그리면 어떤 점이 불편한지 써 보세요.', answer: '모양이 바뀌는 차례를 알 수 없어 변화를 설명하기 어렵다.' },
          { type: 'draw', prompt: '이번 주에 본 달(또는 사진 속 달)을 날짜를 적어 세 칸에 차례대로 그려 보세요.' },
        ],
        easy: {
          note: '달 그림 아래에 날짜와 시각을 꼭 적어요. 날짜가 있어야 차례를 알 수 있어요.',
          items: [
            { type: 'choice', prompt: '달 관찰 기록에 꼭 적을 것에 ○ 하세요.', options: ['관찰한 날짜', '그날의 반찬'], answer: '관찰한 날짜' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '달 모양을 비교하려면 ___와 시각을 함께 적어요.', answer: '날짜' },
            { type: 'table', prompt: '달 그림을 날짜 차례대로 놓고 표를 채워요.', columns: ['날짜', '달 모양'], cells: [['', ''], ['', '']] },
            { type: 'draw', prompt: '오늘 본 달을 날짜를 적어 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 초록 테두리가 생기고, 날짜가 짧은 숫자로만 이어져요.',
        base: '날짜 카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '한 달을 넘어가는 날짜를 차례대로 놓고, 원인과 어려움을 이어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 달 모양만 그리고 날짜를 적지 않는다. ② 시각을 날마다 다르게 하고도 같은 조건이라고 생각한다. ③ 날짜가 달을 넘어갈 때 차례를 헷갈린다. 비·구름 때문에 못 본 날은 칸을 비우지 않고 \'구름이 많아 못 봄\'이라고 적게 한다. 관찰 일지 양식은 이 차시 활동지 표를 그대로 4~5칸 더 늘려 쓸 수 있다.',
    }),

    // ───────────────────────── 4차시 (core, 탐구 적용) ─────────────────────────
    L(4, {
      title: '일주일 달 관찰 계획 세우고 안전 약속 점검하기',
      objective: '같은 시각·같은 장소에서 달을 관찰하는 계획을 세우고, 밤에 관찰할 때 지킬 안전 수칙을 고를 수 있다.',
      standards: ['[4과13-01]'],
      safety: [...NIGHT, '비 오는 날이나 바람이 센 날, 컴컴한 날은 나가지 않고 창문 안에서 보거나 쉬어요.', '관찰 장소는 차가 다니지 않고 넘어질 곳이 없는 곳으로 어른과 함께 정해요.'],
      illustration: {
        prompt: P('a child and a parent standing together on a quiet hillside at dusk pointing at a crescent moon, with a small notebook and a flashlight on the grass'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'moon', x: 360, y: 70, s: 1 }, { motif: 'star', x: 90, y: 50, s: 0.6, color: 'buttercup' }, { motif: 'star', x: 200, y: 40, s: 0.5, color: 'cream' },
          { motif: 'hills', y: 214, colors: ['mint', 'lavender', 'sky'] }, { motif: 'tree', x: 90, y: 214 }, { motif: 'house', x: 400, y: 214 },
          { motif: 'text', x: 240, y: 160, text: '같은 시각, 같은 곳에서', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"일주일 동안 달을 관찰해 오라고 하면 무엇부터 정해야 할까요?" 학생들이 말한 것을 장소·시각·준비물·안전으로 묶어 칠판에 적는다. "달이 처음 본 날과 다른 장소에서 보이면 비교가 어려워요. 같은 곳에서 같은 시각에 보는 이유가 뭘까요?"라고 물어 같은 조건으로 관찰하는 까닭을 말하게 한다.',
          student: '일주일 동안 달을 관찰하려면 무엇을 정해야 할까요?',
          demo: { tool: 'story', options: { shuffle: false, slots: ['먼저', '다음'], cards: [{ id: 'p', text: '장소와 시각을 정해요' }, { id: 'q', text: '어른과 함께 나가요' }] }, sequence: [{ order: ['p', 'q'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 관찰하는 차례 정하기', minutes: 9, tool: 'story',
              task: '카드를 읽고, 알맞은 차례로 자리에 놓거나 때(전·중·후)에 맞는 칸에 놓아요.',
              teacher: '"장소와 시각을 정하는 것은 관찰하기 전일까요, 후일까요?" 학생이 순서를 헷갈리면 준비 → 관찰 → 기록 → 반복의 큰 틀로 말하게 한다. 2번에서 구름 때문에 못 본 날에 아무것도 적지 않는 학생이 있으면 "비워 둔 칸을 보면 나중에 어떻게 생각할까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '달을 관찰하는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: [{ id: 'n1', text: '장소와 시각을 정해요' }, { id: 'n2', text: '어른과 함께 정한 곳으로 나가요' }, { id: 'n3', text: '달 모양과 보이는 방향을 살펴봐요' }, { id: 'n4', text: '날짜·시각·모양을 기록해요' }, { id: 'n5', text: '다음 날 같은 시각에 다시 관찰해요' }] },
                  target: { order: ['n1', 'n2', 'n3', 'n4', 'n5'] }, difficulty: 0.15 },
                { prompt: '구름이 많아 달이 보이지 않았어요. 알맞은 차례로 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'c1', text: '하늘을 둘러봐요' }, { id: 'c2', text: '구름에 가려 달이 보이지 않아요' }, { id: 'c3', text: '기록장에 "구름 때문에 못 봄"이라고 써요' }, { id: 'c4', text: '다음 날 같은 시각에 다시 나가요' }] },
                  target: { order: ['c1', 'c2', 'c3', 'c4'] }, difficulty: 0.2 },
                { prompt: '관찰 전·관찰하는 동안·관찰한 뒤로 알맞은 칸에 나누어 보세요.',
                  toolOptions: { mode: 'sort', slots: ['관찰 전', '관찰하는 동안', '관찰한 뒤'], cards: ['어른과 장소를 정해요', '손전등을 챙겨요', '달 모양을 그려요', '보이는 방향을 살펴요', '기록을 날짜 차례로 모아요', '달 모양 변화를 말해 봐요'] },
                  target: { sort: { '관찰 전': ['어른과 장소를 정해요', '손전등을 챙겨요'], '관찰하는 동안': ['달 모양을 그려요', '보이는 방향을 살펴요'], '관찰한 뒤': ['기록을 날짜 차례로 모아요', '달 모양 변화를 말해 봐요'] } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 밤 관찰 안전 약속 가리기', minutes: 9, tool: 'mindmap',
              task: '카드를 읽고, 안전한 행동과 위험한 행동으로 나누거나 알맞은 방법을 이어요.',
              teacher: '"해를 쌍안경이나 망원경으로 보면 어떻게 될까요?" 눈을 크게 다칠 수 있으니 해는 어떤 도구로도 보지 않는다고 분명히 말한다. 달을 맨눈으로 보는 것은 안전하다는 점도 함께 짚는다. 3번에서 짝에게 말하지 않고 혼자 나간다고 답하는 학생에게는 "가족이 걱정하지 않게 먼저 알려야 해요"라고 말해 준다.',
              levels: EZ,
              items: [
                { prompt: '안전하게 관찰하는 행동과 고쳐야 할 행동으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '밤 관찰 약속', slots: ['안전해요', '고쳐요'], cards: ['어른과 함께 나가요', '해를 쌍안경으로 봐요', '혼자 어두운 길을 걸어요', '밝은 길에서 달을 맨눈으로 봐요'] },
                  target: { sort: { '안전해요': ['어른과 함께 나가요', '밝은 길에서 달을 맨눈으로 봐요'], '고쳐요': ['해를 쌍안경으로 봐요', '혼자 어두운 길을 걸어요'] } }, difficulty: 0.15 },
                { prompt: '밤에 달을 관찰하러 나갈 때 알맞은 준비만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '준비', basket: '알맞아요', cards: ['기록장과 연필', '가족에게 말하고 나가기', { id: '큰소리', text: '큰 소리로 노래 부르며 뛰기', why: '어두운 곳에서 뛰면 넘어지기 쉬워요.' }, { id: '도로', text: '차가 다니는 도로 가운데서 보기', why: '도로에서는 사고가 날 수 있어요.' }] },
                  target: { pick: ['기록장과 연필', '가족에게 말하고 나가기'] }, difficulty: 0.2 },
                { prompt: '상황에 알맞은 안전한 방법을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '이럴 때는?', slots: [{ id: 'sun', label: '낮에 해를 관찰하고 싶어요' }, { id: 'dark', label: '밤에 달을 보러 나가요' }], cards: ['해는 도구로도 맨눈으로도 보지 않아요', '어른과 함께 밝은 길로 나가요', '혼자 숲속에 가요'] },
                  target: { match: { sun: '해는 도구로도 맨눈으로도 보지 않아요', dark: '어른과 함께 밝은 길로 나가요' } }, difficulty: 0.25,
                  conclude: '밤 관찰은 어른과 함께, 해는 어떤 도구로도 보지 않는 것이 약속이에요.' },
              ],
            },
            {
              id: 'a3', title: '활동 3. 관찰 전 점검표 만들기', minutes: 8, tool: 'kitchen',
              task: '관찰 전에 해야 할 일, 하지 말아야 할 일을 읽고 해야 할 일에만 표시해요.',
              teacher: '"가방에 달 관찰 기록장은 넣었나요? 날씨는 확인했나요?" 점검표는 나가기 전에 한 번씩 소리 내어 읽는 습관을 들인다. 2번에서 구름·비 예보를 무시하는 학생에게 "구름이 많은 날은 어떻게 하기로 했죠?"라고 이전 활동을 떠올리게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '일주일 달 관찰을 시작하기 전에 해야 할 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '관찰 전 준비', items: [{ id: 'pen', text: '기록장과 연필을 챙겨요' }, { id: 'time', text: '같은 시각과 장소를 정해요' }, { id: 'sleep', text: '밤새 혼자 나가 있어요' }, { id: 'adult', text: '어른께 말씀드려요' }] },
                  target: { checklist: ['pen', 'time', 'adult'] }, difficulty: 0.15 },
                { prompt: '관찰하러 나가는 날, 하늘과 날씨를 보고 알맞게 행동하는 것에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '날씨 점검', items: [{ id: 'cloud', text: '구름이 많으면 창가에서 보거나 쉬어요' }, { id: 'rain', text: '비가 오면 나가지 않아요' }, { id: 'storm', text: '바람이 세도 그냥 나가요' }, { id: 'write', text: '못 본 날은 까닭을 적어요' }] },
                  target: { checklist: ['cloud', 'rain', 'write'] }, difficulty: 0.2 },
                { prompt: '관찰을 마치고 집에 들어와서 하는 일에만 표시해 보세요.',
                  toolOptions: { mode: 'checklist', title: '관찰 뒤', items: [{ id: 'rec', text: '기록장에 날짜·시각·모양을 정리해요' }, { id: 'tell', text: '가족에게 잘 다녀왔다고 말해요' }, { id: 'lost', text: '기록장을 밖에 두고 와요' }, { id: 'next', text: '다음 관찰 시각을 다시 확인해요' }] },
                  target: { checklist: ['rec', 'tell', 'next'] }, difficulty: 0.2 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"우리가 정한 관찰 장소와 시각을 한 번씩 말해 볼까요?" 학생마다 다르게 말해도 괜찮지만 자기 기록 안에서는 날마다 같아야 한다고 짚는다. 출구 질문 2번에서 해를 쌍안경으로 본다고 고른 학생에게는 해는 어떤 도구로도 보지 않는다는 약속을 한 번 더 읽게 한다. "오늘 정한 계획으로 이번 주에 직접 관찰해 와요." 하고 과제를 낸다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: 'o1', text: '장소와 시각을 정해요' }, { id: 'o2', text: '달 모양을 그려요' }, { id: 'o3', text: '날짜와 시각을 적어요' }] }, prompt: '달을 관찰하는 차례대로 자리에 놓아 보세요.', target: { order: ['o1', 'o2', 'o3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '밤에 달을 관찰할 때 가장 알맞은 약속은 무엇인가요?', options: ['어른과 함께 나가요', '혼자 어두운 숲에 가요', '쌍안경으로 해를 봐요'], answer: 0, difficulty: 0.1, explain: '밤에는 어른과 함께 나가고, 해는 어떤 도구로도 보지 않아요.' },
            { type: 'choice', prompt: '달 모양을 비교하려고 해요. 관찰 조건으로 가장 알맞은 것은 무엇인가요?', options: ['날마다 시각을 다르게 해요', '같은 시각과 장소에서 보아요', '보고 싶을 때만 아무 때나 봐요'], answer: 1, difficulty: 0.2, explain: '같은 시각과 장소에서 보아야 달 모양 변화를 제대로 견줄 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '달 관찰 계획표와 관찰 일지',
        items: [
          { type: 'table', prompt: '내가 정한 일주일 달 관찰 계획을 채워 보세요.', columns: ['정할 것', '내 계획'], cells: [['관찰할 장소', ''], ['관찰할 시각', ''], ['함께 나갈 사람', ''], ['준비물', '']], answer: '학생마다 다름. 장소·시각이 하나로 정해졌는지, 어른과 함께하는 계획인지 확인' },
          { type: 'table', prompt: '관찰 일지를 써 보세요. 달이 보이지 않은 날은 까닭도 적어요.', columns: ['날짜', '시각', '달 모양', '보인 방향·날씨'], cells: [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], answer: '관찰한 날에 따라 다름' },
          { type: 'check', prompt: '밤에 달을 관찰할 때 지킬 약속에 모두 ✓ 하세요.', options: ['어른과 함께 나가요', '해를 쌍안경으로 봐요', '밝고 안전한 곳에서 봐요', '혼자 어두운 길을 걸어요'], answer: '어른과 함께 나가요, 밝고 안전한 곳에서 봐요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '달 모양 변화를 비교하려면 ___ 시각과 ___ 장소에서 관찰해요.', answer: '같은, 같은' },
          { type: 'short', prompt: '구름 때문에 달을 보지 못한 날에는 기록장에 어떻게 쓰면 좋을지 써 보세요.', answer: '"구름 때문에 못 봄"이라고 날짜와 함께 적는다.' },
        ],
        easy: {
          note: '밤에는 어른과 함께, 같은 시각·같은 장소에서 보아요. 해는 어떤 도구로도 보지 않아요.',
          items: [
            { type: 'choice', prompt: '밤에 달을 보러 나갈 때 알맞은 것에 ○ 하세요.', options: ['어른과 함께 나가요', '혼자 어두운 길로 가요'], answer: '어른과 함께 나가요' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '달을 관찰할 때는 ___ 시각에 봐요.', answer: '같은' },
            { type: 'table', prompt: '관찰 일지를 써 보세요.', columns: ['날짜', '달 모양'], cells: [['', ''], ['', '']] },
            { type: 'draw', prompt: '오늘 밤 보고 싶은 달을 그려 보세요. 날짜도 적어요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 차례 카드에 번호가 함께 보여요.',
        base: '차례와 안전 점검표를 스스로 채우고 확인해요.',
        challenge: '날씨와 안전 상황을 따져, 해야 할 일과 하지 말아야 할 일을 가려요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 관찰 시각을 날마다 다르게 정하고도 같은 조건이라고 적는다. ② 구름·비 때문에 못 본 날을 빈칸으로 두거나 거짓으로 그려 넣는다 → 못 본 날도 기록임을 알려 준다. ③ 쌍안경·망원경으로 달을 보는 것과 해를 보는 것을 구분하지 못한다 → 해는 어떤 도구로도 보지 않는다는 약속만 분명히 한다. 실제 관찰은 보호자와 함께 이번 주에 하도록 가정에 안내문을 보낸다.',
    }),

    // ───────────────────────── 5차시 (core, 개념) ─────────────────────────
    L(5, {
      title: '태양계 식구 가려내고 태양은 별, 지구는 행성임 알기',
      objective: '태양계에 드는 것과 들지 않는 것을 가르고, 태양·행성·달(위성)의 차이를 말할 수 있다.',
      standards: ['[4과13-02]'],
      illustration: {
        prompt: P('a bright round paper sun in the middle with eight small paper planets circling around it and a tiny moon beside the third planet, on a deep blue paper sky'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 90, y: 130, s: 1.8 }, { motif: 'star', x: 190, y: 70, s: 0.5, color: 'lavender' }, { motif: 'star', x: 260, y: 170, s: 0.6, color: 'sky' },
          { motif: 'star', x: 330, y: 90, s: 0.5, color: 'peach' }, { motif: 'star', x: 410, y: 160, s: 0.7, color: 'mint' },
          { motif: 'moon', x: 360, y: 220, s: 0.6 }, { motif: 'text', x: 280, y: 40, text: '태양계 식구는 누구일까요?', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '저녁 서쪽 하늘에 밝게 보이는 금성 사진을 띄우고 "이 밝은 점은 별일까요, 행성일까요?"를 묻는다. 밝게 보이면 모두 행성이거나 모두 별이라는 생각이 나올 수 있으니 칠판에 예상을 적어 둔다. "오늘은 태양을 가운데로 도는 식구들을 알아봐요. 태양은 무엇이고 지구는 무엇일까요?"로 오늘의 문제를 만든다.',
          student: '밤하늘에서 밝게 보이는 점은 모두 같은 종류일까요?',
          demo: { tool: 'earth', options: { mode: 'planets', planets: ['지구', '화성'] }, sequence: [{ order: ['지구', '화성'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 태양계 식구 가르기', minutes: 14, tool: 'mindmap',
              task: '카드를 읽고, 태양계에 드는 것과 들지 않는 것, 또는 별·행성·위성으로 알맞게 나누어요.',
              teacher: '"태양을 가운데에 두고 도는 것들이 태양계예요. 달은 무엇 둘레를 돌까요?" 달은 지구 둘레를 도는 위성이고 태양계에 든다는 것을 짚는다. 북극성이나 시리우스는 태양계 밖의 별인데 밝게 보인다고 태양계에 넣는 학생이 많다. "밝다고 가깝지는 않아요. 태양과 함께 도는 식구일까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '태양계에 드는 것과 들지 않는 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '태양계', slots: ['태양계에 들어요', '태양계에 들지 않아요'], cards: ['태양', '지구', '목성', '북극성', '시리우스'] },
                  target: { sort: { '태양계에 들어요': ['태양', '지구', '목성'], '태양계에 들지 않아요': ['북극성', '시리우스'] } }, difficulty: 0.15 },
                { prompt: '별, 행성, 위성으로 나누어 보세요. 지구 둘레를 도는 것도 있어요.',
                  toolOptions: { mode: 'sort', topic: '태양계 식구', slots: ['별', '행성', '위성'], cards: ['태양', '지구', '화성', '토성', '달'] },
                  target: { sort: { 별: ['태양'], 행성: ['지구', '화성', '토성'], 위성: ['달'] } }, difficulty: 0.2 },
                { prompt: '태양계에 대해 옳은 설명만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '태양계', basket: '옳아요', cards: ['태양을 가운데에 두고 행성들이 돌아요', '행성은 모두 8개예요', '달은 지구 둘레를 돌아요', { id: '태양행성', text: '태양은 행성이에요', why: '태양은 스스로 빛을 내는 별이에요.' }, { id: '모두행성', text: '밤하늘에서 밝게 보이면 모두 행성이에요', why: '밝은 점 중에는 별도 많아요.' }] },
                  target: { pick: ['태양을 가운데에 두고 행성들이 돌아요', '행성은 모두 8개예요', '달은 지구 둘레를 돌아요'] }, difficulty: 0.25,
                  conclude: '태양은 별이고, 행성은 태양 둘레를 돌며, 달은 지구 둘레를 도는 위성이에요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 행성 그림 읽고 알아맞히기', minutes: 12, tool: 'earth',
              task: '태양에서 가까운 차례로 놓인 행성 그림이에요. 그림을 읽고 질문에 알맞은 보기를 골라요.',
              teacher: '"그림에서 왼쪽이 태양 쪽이에요. 지구는 몇째일까요?" 그림의 번호를 손가락으로 세어 보게 한다. 가장 큰 행성이 태양에서 가장 먼 행성이라고 짐작하는 학생이 있으니 크기와 거리를 따로 읽게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '그림은 태양에서 가까운 차례로 놓은 모습이에요. 지구는 태양에서 몇째 행성일까요?',
                  toolOptions: { mode: 'planets', readOnly: true, ask: { q: '지구는 몇째 행성일까요?', choices: ['둘째', '셋째', '넷째'], why: ['금성이 둘째예요. 그림에서 세어 보세요.', '', '넷째는 화성이에요.'] } },
                  state: { order: ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'] }, target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '그림에서 태양에서 가장 먼 곳에 있는 행성은 무엇일까요?',
                  toolOptions: { mode: 'planets', readOnly: true, ask: { q: '가장 먼 행성은?', choices: ['토성', '천왕성', '해왕성'], why: ['토성보다 더 먼 행성이 있어요.', '천왕성 뒤에 한 행성이 더 있어요.'] } },
                  state: { order: ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'] }, target: { pick: 2 }, difficulty: 0.2 },
                { prompt: '화성과 토성 사이에 놓인 행성은 무엇일까요?',
                  toolOptions: { mode: 'planets', readOnly: true, ask: { q: '화성과 토성 사이는?', choices: ['목성', '천왕성', '금성'], why: ['', '천왕성은 토성보다 바깥에 있어요.', '금성은 화성보다 태양에 가까워요.'] } },
                  state: { order: ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'] }, target: { pick: 0 }, difficulty: 0.2,
                  conclude: '행성은 태양에서 가까운 쪽부터 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이에요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 적어 둔 예상 "밝으면 행성이다/별이다"를 다시 본다. "금성은 행성이라 태양 둘레를 돌고, 시리우스는 태양계 밖의 별이에요." 밝기만으로는 별인지 행성인지 알 수 없다는 점을 한 문장으로 말하게 한다. 출구 질문 2번에서 달을 행성이라고 고른 학생에게는 달이 무엇 둘레를 도는지 다시 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '태양계', slots: ['태양계에 들어요', '태양계에 들지 않아요'], cards: ['해왕성', '태양', '북두칠성의 별들', '카시오페이아자리의 별들'] }, prompt: '태양계에 드는 것과 들지 않는 것으로 나누어 보세요.', target: { sort: { '태양계에 들어요': ['해왕성', '태양'], '태양계에 들지 않아요': ['북두칠성의 별들', '카시오페이아자리의 별들'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '달에 대해 가장 알맞은 설명은 무엇인가요?', options: ['태양 둘레를 도는 별이에요', '지구 둘레를 도는 위성이에요', '스스로 빛나는 행성이에요'], answer: 1, difficulty: 0.2, explain: '달은 지구 둘레를 도는 위성이에요.' },
            { type: 'choice', prompt: '밤하늘에서 아주 밝게 보이는 점에 대해 알맞은 생각은 무엇인가요?', options: ['모두 행성이에요', '밝기만으로는 별인지 행성인지 알 수 없어요', '모두 태양계에 들어요'], answer: 1, difficulty: 0.25, explain: '밝은 점 중에는 별도 있고 행성도 있어서 밝기만으로 가를 수 없어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '태양계 식구 알아보기',
        items: [
          { type: 'figure', wide: true, prompt: '태양에서 가까운 행성부터 칸에 이름을 쓰세요.', tool: 'earth', options: { mode: 'planets' }, figures: [{ options: { slotLabels: ['1', '2', '3', '4', '5', '6', '7', '8'] }, caption: '' }], answer: '수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성' },
          { type: 'table', prompt: '카드를 별·행성·위성으로 나누어 써 보세요.', columns: ['별', '행성', '위성'], cells: [['', '', '']], answer: '별: 태양 / 행성: 지구, 화성, 목성 등 / 위성: 달' },
          { type: 'choice', prompt: '태양계에 들지 않는 것에 ○ 하세요.', options: ['지구', '목성', '북극성', '태양'], answer: '북극성' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '태양은 ___이고, 지구는 ___입니다. 달은 지구 둘레를 도는 ___입니다.', answer: '별, 행성, 위성' },
          { type: 'short', prompt: '"밤하늘에서 밝게 보이는 것은 모두 행성이다."라는 말이 틀린 까닭을 써 보세요.', answer: '밝은 점 중에는 별도 많아서 밝기만으로 별과 행성을 가를 수 없다.' },
        ],
        easy: {
          note: '태양은 별, 지구는 행성, 달은 위성이에요. 태양을 가운데로 행성이 돌아요.',
          items: [
            { type: 'choice', prompt: '태양과 같은 종류에 ○ 하세요.', options: ['별', '행성'], answer: '별' },
            { type: 'choice', prompt: '지구 둘레를 도는 것에 ○ 하세요.', options: ['달', '화성'], answer: '달' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '행성은 모두 ___개예요.', answer: '8' },
            { type: 'draw', prompt: '태양과 지구를 그리고, 지구가 태양 둘레를 도는 모양을 화살표로 나타내 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 행성 그림에 번호가 보여요.',
        base: '카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '태양계 밖의 별과 함정 문장이 섞여 있어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 밝게 보이면 모두 행성이라고 여긴다 → 행성은 스스로 빛나지 않고 햇빛을 반사한다는 점은 9차시에서 별과 견주며 다시 다룬다. ② 태양을 행성으로 분류한다. ③ 달을 행성으로 분류한다 → 지구 둘레를 도는 위성. 거리·크기 수치는 외우지 않아도 되며 이 차시에서는 \'차례\'만 다룬다. 행성 수는 8개로 안내한다.',
    }),

    // ───────────────────────── 6차시 (core, 자료 표현) ─────────────────────────
    L(6, {
      title: '행성을 태양에서 가까운 차례로 늘어놓고 크기 차례와 견주기',
      objective: '행성을 태양에서 가까운 차례로 늘어놓아 나타내고, 거리 차례와 크기 차례가 다르다는 것을 설명할 수 있다.',
      standards: ['[4과13-02]'],
      illustration: {
        prompt: P('eight paper planets in a row from a small one near a bright sun to a far one, each with different sizes and colors, and a small ruler-like arrow beneath showing the distance from the sun'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 54, y: 130, s: 1.4 }, { motif: 'star', x: 130, y: 128, s: 0.4, color: 'sky' }, { motif: 'star', x: 190, y: 128, s: 0.5, color: 'buttercup' },
          { motif: 'star', x: 250, y: 128, s: 0.6, color: 'mint' }, { motif: 'star', x: 320, y: 128, s: 0.9, color: 'peach' }, { motif: 'star', x: 400, y: 128, s: 0.8, color: 'lavender' },
          { motif: 'hills', y: 232 }, { motif: 'text', x: 240, y: 200, text: '가까운 차례와 큰 차례는 달라요', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '행성 카드 네 장(수성·지구·목성·토성)을 일부러 섞어 칠판에 붙이고 "태양에서 가까운 차례로 늘어놓으면?"을 묻는다. 큰 카드부터 놓는 학생이 있으면 "크기 차례와 거리 차례는 같을까요?"라고 되묻는다. 오늘은 두 가지 차례를 따로따로 놓아 보고 견준다고 알린다.',
          student: '가까운 차례와 큰 차례는 같을까요, 다를까요?',
          demo: { tool: 'earth', options: { mode: 'planets', planets: ['수성', '지구'] }, sequence: [{ order: ['수성', '지구'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 행성을 차례대로 늘어놓기', minutes: 14, tool: 'earth',
              task: '행성 카드를 눌러 칸에 하나씩 놓아요. 문제가 말하는 차례(태양에서 가까운 차례, 큰 차례)를 잘 읽어요.',
              teacher: '"이 문제는 가까운 차례일까요, 큰 차례일까요?" 문제의 낱말을 먼저 밑줄 치게 한다. 3번에서 가까운 차례로 놓은 학생에게 "수성은 가깝지만 가장 작아요. 이 문제의 차례는 무엇이죠?"라고 되묻는다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '태양에서 가까운 차례로 행성 여덟 개를 놓아 보세요.',
                  toolOptions: { mode: 'planets' }, target: { order: ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'] }, difficulty: 0.25 },
                { prompt: '태양에서 가까운 행성 네 개를 가까운 차례로 놓아 보세요.',
                  toolOptions: { mode: 'planets', planets: ['수성', '금성', '지구', '화성'] }, target: { order: ['수성', '금성', '지구', '화성'] }, difficulty: 0.15 },
                { prompt: '이번에는 크기가 큰 행성부터 놓아 보세요. 크기는 그림의 동그라미로 견주어요.',
                  toolOptions: { mode: 'planets', planets: ['수성', '지구', '목성', '토성', '천왕성'], slotLabels: ['가장 큼', '', '', '', '가장 작음'] },
                  target: { order: ['목성', '토성', '천왕성', '지구', '수성'] }, difficulty: 0.3,
                  conclude: '태양에서 가까운 차례와 크기 차례는 달라요. 가까운 수성은 가장 작아요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 거리와 크기 이야기 가르기', minutes: 12, tool: 'mindmap',
              task: '카드를 읽고, 알맞은 가지나 바구니에 놓아요.',
              teacher: '"이 문장은 가까운 차례 이야기일까요, 큰 차례 이야기일까요?" 둘을 섞어 쓰는 학생이 많아서 문장의 핵심 낱말(가장 멀다, 가장 크다)을 짚게 한다. 표로 정리할 때 칸 제목을 어떻게 할지도 함께 정한다.',
              levels: EZ,
              items: [
                { prompt: '행성을 태양에서 가까운 쪽과 먼 쪽으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '태양에서의 거리', slots: ['태양에서 가까운 쪽', '태양에서 먼 쪽'], cards: ['수성', '금성', '화성', '목성', '토성', '해왕성'] },
                  target: { sort: { '태양에서 가까운 쪽': ['수성', '금성', '화성'], '태양에서 먼 쪽': ['목성', '토성', '해왕성'] } }, difficulty: 0.2 },
                { prompt: '거리 이야기와 크기 이야기로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '무엇 이야기?', slots: ['태양에서의 거리 이야기', '크기 이야기'], cards: ['수성이 태양에서 가장 가까워요', '목성이 가장 커요', '해왕성이 가장 멀어요', '토성이 둘째로 커요'] },
                  target: { sort: { '태양에서의 거리 이야기': ['수성이 태양에서 가장 가까워요', '해왕성이 가장 멀어요'], '크기 이야기': ['목성이 가장 커요', '토성이 둘째로 커요'] } }, difficulty: 0.25 },
                { prompt: '토성에 대해 조사했어요. 표에 적을 수 있는 내용만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '토성 조사', basket: '표에 적어요', cards: ['둘레에 넓은 고리가 보여요', '태양에서 여섯째 행성이에요', { id: '살아', text: '토성에는 사람이 살아요', why: '토성에 사람이 산다는 근거는 없어요.' }, { id: '붉은', text: '붉은 흙으로 덮여 있어요', why: '붉은 땅은 화성의 특징이에요.' }] },
                  target: { pick: ['둘레에 넓은 고리가 보여요', '태양에서 여섯째 행성이에요'] }, difficulty: 0.25 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 학생이 놓은 순서를 다시 가리키며 "태양에서 가까운 차례는 어떻게 놓았나요?" 하고 묻는다. 크기 차례와 거리 차례가 다르다는 것을 수성과 목성을 예로 들어 한 문장으로 말하게 한다. 출구 질문 3번에서 거리 문제인데 크기로 답한 학생에게는 문제의 낱말을 다시 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'earth', options: { mode: 'planets', planets: ['지구', '화성', '목성'] }, prompt: '지구, 화성, 목성을 태양에서 가까운 차례로 놓아 보세요.', target: { order: ['지구', '화성', '목성'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '태양에서 가장 가까운 행성은 무엇인가요?', options: ['수성', '금성', '지구'], answer: 0, difficulty: 0.1, explain: '수성이 태양에서 가장 가까운 행성이에요.' },
            { type: 'choice', prompt: '"가까운 차례와 큰 차례는 같다."는 말에 대한 생각으로 알맞은 것은 무엇인가요?', options: ['같아요', '달라요. 가까운 수성은 가장 작아요', '모든 행성의 크기가 같아요'], answer: 1, difficulty: 0.25, explain: '수성은 태양에서 가장 가깝지만 가장 작은 행성이에요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '행성 차례 나타내기',
        items: [
          { type: 'figure', wide: true, prompt: '태양에서 가까운 차례로 행성 이름을 칸에 쓰세요.', tool: 'earth', options: { mode: 'planets', planets: ['수성', '금성', '지구', '화성'] }, figures: [{ options: { slotLabels: ['1', '2', '3', '4'] }, caption: '' }], answer: '수성, 금성, 지구, 화성' },
          { type: 'table', prompt: '조사한 행성의 특징을 표로 정리하세요.', columns: ['행성', '태양에서 몇째', '눈에 띄는 모습'], cells: [['토성', '', ''], ['화성', '', '']], answer: '토성 여섯째·고리 / 화성 넷째·붉은빛 땅' },
          { type: 'check', prompt: '거리 이야기에 모두 ✓ 하세요.', options: ['수성이 태양에서 가장 가까워요', '목성이 가장 커요', '해왕성이 태양에서 가장 멀어요', '토성이 둘째로 커요'], answer: '수성이 태양에서 가장 가까워요, 해왕성이 태양에서 가장 멀어요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '태양에서 가장 가까운 행성은 ___이고, 가장 큰 행성은 ___입니다.', answer: '수성, 목성' },
          { type: 'short', prompt: '"태양에서 가까운 행성은 가장 크다."는 말을 고쳐 써 보세요.', answer: '가까운 차례와 큰 차례는 다르다. 수성은 태양에서 가장 가깝지만 가장 작다.' },
        ],
        easy: {
          note: '수성 → 금성 → 지구 → 화성 → 목성 → 토성 → 천왕성 → 해왕성 순서로 멀어져요.',
          items: [
            { type: 'choice', prompt: '태양에서 가장 가까운 행성에 ○ 하세요.', options: ['수성', '목성'], answer: '수성' },
            { type: 'choice', prompt: '가장 큰 행성에 ○ 하세요.', options: ['목성', '수성'], answer: '목성' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '지구는 태양에서 ___째 행성이에요.', answer: '셋' },
            { type: 'draw', prompt: '태양과 가까운 행성 세 개를 가까운 차례로 그려 이름을 써 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '틀린 자리에 놓으면 카드가 돌아오고, 행성 수가 네 개로 줄어요.',
        base: '행성을 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '여덟 개 행성을 한꺼번에 놓고, 같은 판에서 크기 차례도 따로 놓아요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 행성을 크기 차례로 늘어놓고 가까운 차례라고 적는다 → 문제의 \'가까운\'과 \'큰\'을 먼저 밑줄 긋는다. ② 지구를 태양에서 가장 가까운 행성이라고 생각한다. ③ 행성 이름을 외우는 데 시간을 다 쓴다 → 수·금·지·화·목·토·천·해 같은 앞 글자 외우기 노래는 학생이 만든 것을 쓴다. 이 단원에서는 거리·크기를 숫자로 외우지 않는다.',
    }),

    // ───────────────────────── 7차시 (practice) ─────────────────────────
    L(7, {
      title: '행성의 모습 특징 짝짓고 행성 위치 그림으로 답하기',
      objective: '행성마다 눈에 띄는 모습을 조사한 내용과 짝지어 말하고, 행성 위치 그림을 읽어 질문에 답할 수 있다.',
      standards: ['[4과13-02]'],
      illustration: {
        prompt: P('four paper planets each with a distinct look, one with a wide ring, one reddish, one with horizontal stripes, and one wrapped in thick clouds, floating on a dark blue sky with small stars'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'star', x: 90, y: 62, s: 0.5, color: 'cream' }, { motif: 'star', x: 190, y: 120, s: 1, color: 'peach' }, { motif: 'star', x: 290, y: 100, s: 1.2, color: 'buttercup' },
          { motif: 'star', x: 390, y: 126, s: 0.9, color: 'lavender' }, { motif: 'hills', y: 232 }, { motif: 'text', x: 240, y: 204, text: '행성마다 모습이 달라요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"고리가 있는 행성은 어떤 행성일까요?" 토성 그림을 보여 주고, 다른 행성도 그림만 보고 특징을 말하게 한다. 이때 "행성은 모두 지구처럼 생겼다"는 생각이 나오면 칠판에 적어 두었다가 정리에서 견준다. 지난 시간에 행성 차례를 배웠으니 "오늘은 행성의 모습을 이름과 짝지어 봐요." 하고 문제를 연다.',
          student: '행성들은 모두 같은 모습일까요?',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '행성', slots: [{ id: 'a', label: '토성' }], cards: ['둘레에 넓은 고리가 있어요'] }, sequence: [{ match: { a: '둘레에 넓은 고리가 있어요' } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 행성과 모습 짝짓기', minutes: 14, tool: 'mindmap',
              task: '조사한 모습 카드를 읽고, 알맞은 행성 이름에 이어요. 맞지 않는 카드는 남겨 둬요.',
              teacher: '"이 모습은 어느 행성에서 본 것일까요?" 조사한 책이나 사진을 근거로 말하게 한다. 3번에서 금성이 스스로 빛을 낸다고 고르는 학생에게 "금성이 밝게 보이는 까닭이 정말 스스로 빛나서일까요? 다음 시간에 알아봐요"라고 열어 둔다.',
              levels: EZ,
              items: [
                { prompt: '조사한 모습을 알맞은 행성 이름에 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '행성의 모습', slots: [{ id: '토성', label: '토성' }, { id: '화성', label: '화성' }, { id: '목성', label: '목성' }, { id: '금성', label: '금성' }], cards: ['둘레에 넓은 고리가 있어요', '땅이 붉은빛을 띠어요', '가로 줄무늬가 보이고 가장 큰 행성이에요', '두꺼운 구름에 싸여 있어요'] },
                  target: { match: { 토성: '둘레에 넓은 고리가 있어요', 화성: '땅이 붉은빛을 띠어요', 목성: '가로 줄무늬가 보이고 가장 큰 행성이에요', 금성: '두꺼운 구름에 싸여 있어요' } }, difficulty: 0.2 },
                { prompt: '다른 행성의 모습이에요. 알맞은 행성 이름에 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '행성의 모습', slots: [{ id: '지구', label: '지구' }, { id: '수성', label: '수성' }, { id: '해왕성', label: '해왕성' }], cards: ['물이 있고 생물이 살아요', '구덩이가 많은 울퉁불퉁한 표면이에요', '푸른빛을 띠는 가장 바깥 행성이에요', '고리가 가장 넓어요'] },
                  target: { match: { 지구: '물이 있고 생물이 살아요', 수성: '구덩이가 많은 울퉁불퉁한 표면이에요', 해왕성: '푸른빛을 띠는 가장 바깥 행성이에요' } }, difficulty: 0.25 },
                { prompt: '금성에 대해 조사한 내용 가운데 옳은 것만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '금성', basket: '옳아요', cards: ['저녁 서쪽이나 새벽 동쪽 하늘에서 밝게 보여요', '두꺼운 구름에 싸여 있어요', { id: '자체', text: '스스로 빛을 내요', why: '행성은 햇빛을 받아 밝게 보여요.' }, { id: '큰', text: '가장 큰 행성이에요', why: '가장 큰 행성은 목성이에요.' }] },
                  target: { pick: ['저녁 서쪽이나 새벽 동쪽 하늘에서 밝게 보여요', '두꺼운 구름에 싸여 있어요'] }, difficulty: 0.3,
                  conclude: '행성마다 눈에 띄는 모습이 달라요. 이름과 모습을 짝지어 기억해요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 행성 위치 그림 읽고 답하기', minutes: 12, tool: 'earth',
              task: '태양에서 가까운 차례로 놓인 행성 그림이에요. 그림을 읽고 알맞은 보기를 골라요.',
              teacher: '"토성 바로 안쪽에는 어떤 행성이 있나요? 그림에서 토성을 손가락으로 짚어 보세요." 안쪽·바깥쪽 낱말이 낯설면 \'태양에 더 가까운 쪽\'과 \'더 먼 쪽\'으로 바꿔 말해 준다. 3번은 목성 오른쪽 칸을 세어서 답하게 한다.',
              levels: { easy: {}, base: {}, challenge: {} },
              items: [
                { prompt: '토성보다 태양에 한 칸 더 가까운 행성은 무엇일까요?',
                  toolOptions: { mode: 'planets', readOnly: true, ask: { q: '토성보다 한 칸 가까운 행성은?', choices: ['목성', '천왕성', '화성'], why: ['', '천왕성은 토성보다 더 멀어요.', '화성은 목성보다도 가까워요.'] } },
                  state: { order: ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'] }, target: { pick: 0 }, difficulty: 0.2 },
                { prompt: '지구보다 태양에서 먼 행성은 어느 것일까요?',
                  toolOptions: { mode: 'planets', readOnly: true, ask: { q: '지구보다 먼 행성은?', choices: ['수성', '금성', '화성'], why: ['수성은 지구보다 태양에 가까워요.', '금성도 지구보다 가까워요.'] } },
                  state: { order: ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'] }, target: { pick: 2 }, difficulty: 0.2 },
                { prompt: '목성보다 태양에서 먼 행성은 모두 몇 개일까요?',
                  toolOptions: { mode: 'planets', readOnly: true, ask: { q: '목성보다 먼 행성은 몇 개?', choices: ['2개', '3개', '4개'], why: ['토성, 천왕성, 해왕성이에요. 하나 더 세어 보세요.', '', '목성 오른쪽을 다시 세어 보세요.'] } },
                  state: { order: ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'] }, target: { pick: 1 }, difficulty: 0.3 },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입의 "행성은 모두 지구처럼 생겼다"를 다시 본다. 고리, 줄무늬, 붉은빛처럼 서로 다른 모습을 한 가지씩 말하게 한다. 출구 질문 1번에서 목성과 화성을 바꾼 학생에게는 줄무늬와 붉은빛 중 어느 쪽이 화성인지 사진으로 다시 확인하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '행성의 모습', slots: [{ id: '토성', label: '토성' }, { id: '수성', label: '수성' }], cards: ['구덩이가 많은 표면이에요', '넓은 고리가 있어요', '붉은 구름으로 가득해요'] }, prompt: '모습에 알맞은 행성에 이어 보세요.', target: { match: { 토성: '넓은 고리가 있어요', 수성: '구덩이가 많은 표면이에요' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '고리가 있는 행성으로 가장 잘 알려진 행성은 무엇인가요?', options: ['토성', '지구', '수성'], answer: 0, difficulty: 0.1, explain: '토성은 둘레에 넓은 고리가 있어요.' },
            { type: 'choice', prompt: '그림에서 화성 바로 바깥(더 먼 쪽)에 있는 행성은 무엇인가요? 차례는 수성, 금성, 지구, 화성, 목성, 토성…이에요.', options: ['금성', '목성', '지구'], answer: 1, difficulty: 0.15, explain: '화성 다음은 목성이에요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '행성의 모습과 위치',
        items: [
          { type: 'figure', wide: true, prompt: '행성이 태양에서 가까운 차례대로 놓여 있어요. 지구와 목성의 칸에 이름을 쓰세요.', tool: 'earth', options: { mode: 'planets', planets: ['수성', '지구', '화성', '목성'] }, figures: [{ options: { slotLabels: ['1', '2', '3', '4'] }, caption: '' }], answer: '수성, 지구, 화성, 목성' },
          { type: 'table', prompt: '행성 이름과 알맞은 모습을 선으로 이어 쓰세요.', columns: ['행성', '눈에 띄는 모습'], cells: [['토성', ''], ['화성', ''], ['금성', '']], answer: '토성 고리 / 화성 붉은빛 땅 / 금성 두꺼운 구름' },
          { type: 'choice', prompt: '목성에 대한 설명으로 알맞은 것에 ○ 하세요.', options: ['가로 줄무늬가 보이는 가장 큰 행성', '구덩이가 많은 가장 작은 행성', '붉은 땅의 행성'], answer: '가로 줄무늬가 보이는 가장 큰 행성' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '둘레에 넓은 고리가 있는 행성은 ___이고, 붉은빛을 띠는 행성은 ___입니다.', answer: '토성, 화성' },
          { type: 'short', prompt: '행성이 모두 지구와 같은 모습이 아님을 한 가지 예를 들어 써 보세요.', answer: '토성에는 고리가 있고 지구에는 없다.' },
        ],
        easy: {
          note: '토성은 고리, 화성은 붉은빛, 목성은 줄무늬, 금성은 두꺼운 구름이 떠올라요.',
          items: [
            { type: 'choice', prompt: '고리가 있는 행성에 ○ 하세요.', options: ['토성', '지구'], answer: '토성' },
            { type: 'choice', prompt: '붉은빛을 띠는 행성에 ○ 하세요.', options: ['화성', '목성'], answer: '화성' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '가장 큰 행성은 ___이에요.', answer: '목성' },
            { type: 'draw', prompt: '토성을 그리고 고리도 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 초록 테두리가 생기고, 짝지을 카드가 행성 수만큼만 있어요.',
        base: '카드를 이은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '남는 카드와 함정 문장이 섞여 있어, 근거가 없는 말을 가려내야 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 행성이 모두 지구와 비슷하게 생겼다고 생각한다. ② 목성과 토성을 헷갈린다 → 고리가 가장 눈에 띄는 쪽이 토성. ③ 금성이 스스로 빛난다고 생각한다. 이 차시에서는 수치를 외우지 않고 모습의 특징만 짝짓는다. 조사 자료는 교과서·도서관 자료·천문 기관의 행성 사진을 쓴다.',
    }),

    // ───────────────────────── 8차시 (core, 탐구 적용) ─────────────────────────
    L(8, {
      title: '금성과 화성 조사 내용을 행성별 기록장에 나누어 적기',
      objective: '관측 프로그램이나 책으로 행성의 모습을 조사하고, 조사한 내용을 행성별로 나누어 출처와 함께 기록할 수 있다.',
      standards: ['[4과13-02]'],
      illustration: {
        prompt: P('two children at a table with a tablet showing a paper planet and an open notebook with two columns, a small reddish planet and a cloudy planet drawn at the top of each column'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'star', x: 80, y: 56, s: 0.5, color: 'buttercup' }, { motif: 'star', x: 400, y: 60, s: 0.6, color: 'cream' },
          { motif: 'star', x: 160, y: 130, s: 1, color: 'peach' }, { motif: 'star', x: 310, y: 130, s: 1, color: 'buttercup' },
          { motif: 'hills', y: 226 }, { motif: 'text', x: 240, y: 192, text: '행성별로 나누어 적어요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"행성을 조사하려고 해요. 인터넷에서 무엇을 찾아 적을까요?" 행성의 크기·거리를 나타낸 큰 숫자 표를 보여 주고 "이 숫자를 모두 외워서 적어야 할까요?"라고 묻는다. 숫자를 베끼는 데만 매달리면 정작 어떤 모습인지 놓치기 쉬우니, 오늘은 \'눈에 띄는 모습\'과 \'자료를 찾은 곳\'을 행성별로 나누어 적는다고 알려 준다.',
          student: '행성을 조사할 때 무엇을 적으면 좋을까요?',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '행성 기록', slots: ['금성', '화성'], cards: ['두꺼운 구름', '붉은빛 땅'] }, sequence: [{ sort: { 금성: ['두꺼운 구름'], 화성: ['붉은빛 땅'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 조사하는 차례와 출처 적기', minutes: 13, tool: 'story',
              task: '카드를 읽고, 알맞은 차례로 자리에 놓거나 모습 기록과 출처 기록으로 나누어요.',
              teacher: '"조사는 무엇부터 시작할까요?" 조사할 행성을 먼저 정해야 찾을 것이 보인다는 것을 짚는다. 3번에서 출처를 적지 않는 학생에게 "친구가 이 내용이 정말이냐고 물으면 어디서 봤다고 말할까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '행성을 조사하는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: [{ id: 'r1', text: '조사할 행성 두 개를 골라요' }, { id: 'r2', text: '관측 프로그램이나 책에서 모습을 찾아봐요' }, { id: 'r3', text: '눈에 띄는 모습을 그림과 글로 적어요' }, { id: 'r4', text: '행성별로 칸을 나누어 정리해요' }, { id: 'r5', text: '친구에게 발표해요' }] },
                  target: { order: ['r1', 'r2', 'r3', 'r4', 'r5'] }, difficulty: 0.15 },
                { prompt: '관측 프로그램으로 행성을 살펴보는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'p1', text: '관측 프로그램을 열어요' }, { id: 'p2', text: '조사할 행성 이름을 찾아 골라요' }, { id: 'p3', text: '화면에 나온 모습을 살펴봐요' }, { id: 'p4', text: '본 것을 행성별 기록장에 적어요' }] },
                  target: { order: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.2 },
                { prompt: '화성을 조사한 내용이에요. 모습 기록과 출처 기록으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', slots: ['모습 기록', '출처 기록'], cards: ['땅이 붉은빛을 띠어요', '극 지방에 하얀 부분이 보여요', '책 이름과 쪽수를 적어요', '누리집 이름과 본 날짜를 적어요'] },
                  target: { sort: { '모습 기록': ['땅이 붉은빛을 띠어요', '극 지방에 하얀 부분이 보여요'], '출처 기록': ['책 이름과 쪽수를 적어요', '누리집 이름과 본 날짜를 적어요'] } }, difficulty: 0.25 },
              ],
            },
            {
              id: 'a2', title: '활동 2. 행성별 기록장 나누기', minutes: 13, tool: 'mindmap',
              task: '조사한 내용 카드를 읽고, 행성별 칸에 나누거나 알맞은 방법에 이어요.',
              teacher: '"이 내용은 금성 이야기일까요, 화성 이야기일까요?" 카드마다 근거가 되는 낱말(구름, 붉은빛)을 짚게 한다. 숫자 정보만 늘어놓은 기록과 모습이 담긴 기록을 견주며 "무엇을 더 적으면 좋을까요?"를 묻는다.',
              levels: EZ,
              items: [
                { prompt: '조사한 내용을 금성 기록과 화성 기록으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '행성 조사', slots: ['금성 기록', '화성 기록'], cards: ['두꺼운 구름에 싸여 있어요', '저녁이나 새벽 하늘에서 밝게 보여요', '땅이 붉은빛을 띠어요', '극 지방에 하얀 부분이 보여요'] },
                  target: { sort: { '금성 기록': ['두꺼운 구름에 싸여 있어요', '저녁이나 새벽 하늘에서 밝게 보여요'], '화성 기록': ['땅이 붉은빛을 띠어요', '극 지방에 하얀 부분이 보여요'] } }, difficulty: 0.2 },
                { prompt: '행성 기록장에 적으면 좋은 것만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '기록장', basket: '적어요', cards: ['행성 이름', '눈에 띄는 모습', '자료를 찾은 곳', { id: '베낌', text: '친구 기록을 그대로 베껴 적어요', why: '직접 조사한 내용이 아니라서 근거를 말할 수 없어요.' }, { id: '안조사', text: '조사하지 않은 행성의 내용', why: '이번에 고른 행성의 내용만 적어요.' }] },
                  target: { pick: ['행성 이름', '눈에 띄는 모습', '자료를 찾은 곳'] }, difficulty: 0.2 },
                { prompt: '아쉬운 기록과 고쳐 쓰는 방법을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '이럴 때는?', slots: [{ id: 'num', label: '큰 숫자만 잔뜩 적었어요' }, { id: 'src', label: '어디서 찾았는지 적지 않았어요' }], cards: ['눈에 띄는 모습도 함께 적어요', '자료를 찾은 곳을 적어요', '더 큰 숫자를 찾아 적어요'] },
                  target: { match: { num: '눈에 띄는 모습도 함께 적어요', src: '자료를 찾은 곳을 적어요' } }, difficulty: 0.3,
                  conclude: '행성 조사는 눈에 띄는 모습과 출처를 행성별로 나누어 적으면 돼요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 나온 "숫자를 모두 외워야 하나요?"를 다시 묻는다. 눈에 띄는 모습과 출처를 행성별로 적는 것이 오늘의 기준임을 말하게 한다. 출구 질문 2번에서 두 행성 내용을 한 칸에 섞어 적은 학생에게는 칸 제목을 먼저 쓰고 시작하게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '행성 기록', slots: ['금성 기록', '화성 기록'], cards: ['구름이 두꺼워요', '붉은빛을 띠어요'] }, prompt: '내용을 행성별 기록장에 나누어 보세요.', target: { sort: { '금성 기록': ['구름이 두꺼워요'], '화성 기록': ['붉은빛을 띠어요'] } }, difficulty: 0.15 },
            { type: 'choice', prompt: '행성 조사 기록에 꼭 있으면 좋은 것은 무엇인가요?', options: ['눈에 띄는 모습과 자료를 찾은 곳', '큰 숫자만 길게 적은 것', '친구의 기록을 그대로 베낀 것'], answer: 0, difficulty: 0.2, explain: '직접 조사한 모습과 출처를 적으면 근거를 말할 수 있어요.' },
            { type: 'choice', prompt: '금성과 화성 내용을 한 칸에 섞어 적었어요. 가장 알맞은 고침은 무엇인가요?', options: ['행성별로 칸을 나누어 적어요', '지우고 하나만 남겨요', '더 길게 이어 적어요'], answer: 0, difficulty: 0.2, explain: '행성별로 칸을 나누어야 어느 행성 내용인지 한눈에 알 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '행성 조사 기록장',
        items: [
          { type: 'table', prompt: '내가 고른 행성 두 개를 조사해 행성별 기록장을 채워 보세요.', columns: ['행성 이름', '눈에 띄는 모습', '자료를 찾은 곳'], cells: [['', '', ''], ['', '', '']], answer: '학생이 고른 행성에 따라 다름. 행성별 칸이 나뉘고 출처가 적혔는지 확인' },
          { type: 'check', prompt: '행성 기록장에 적으면 좋은 것에 모두 ✓ 하세요.', options: ['행성 이름', '눈에 띄는 모습', '자료를 찾은 곳', '친구 기록을 그대로 베낀 글'], answer: '행성 이름, 눈에 띄는 모습, 자료를 찾은 곳' },
          { type: 'choice', prompt: '"붉은빛을 띠는 땅"은 어느 행성의 모습인지 ○ 하세요.', options: ['금성', '화성', '토성'], answer: '화성' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '행성을 조사한 내용은 ___별로 나누어 적고, 자료를 찾은 ___도 함께 적어요.', answer: '행성, 곳' },
          { type: 'draw', prompt: '조사한 행성 두 개의 모습을 한 칸씩 그리고 이름을 써 보세요.' },
        ],
        easy: {
          note: '행성 이름, 눈에 띄는 모습, 자료를 찾은 곳을 한 줄씩 적어요.',
          items: [
            { type: 'choice', prompt: '기록장에 적을 것에 ○ 하세요.', options: ['눈에 띄는 모습', '친구 기록 베끼기'], answer: '눈에 띄는 모습' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '조사한 내용은 ___별로 나누어 적어요.', answer: '행성' },
            { type: 'table', prompt: '행성 하나를 조사해 적어 보세요.', columns: ['행성 이름', '눈에 띄는 모습'], cells: [['', '']] },
            { type: 'draw', prompt: '조사한 행성의 모습을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 카드에 행성 이름이 보여요.',
        base: '카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '출처 기록과 모습 기록을 가르고, 함정 카드를 가려 기록의 질을 따져요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 크기·거리 숫자를 찾아 베끼는 데 매달려 행성의 모습을 놓친다. ② 두 행성 내용을 한 칸에 섞어 적는다. ③ 자료를 찾은 곳을 적지 않는다. 조사 자료는 교과서, 학교 도서관 책, 천문 기관 누리집의 행성 소개 사진을 쓴다. 숫자가 필요하면 자료에 적힌 대로 옮기되 출처를 함께 적게 하고, 확실하지 않은 숫자는 적지 않게 한다.',
    }),

    // ───────────────────────── 9차시 (core, 개념) ─────────────────────────
    L(9, {
      title: '스스로 빛나는 별과 햇빛을 받는 행성·달 가르고 북극성 알기',
      objective: '별은 스스로 빛을 내고 행성과 달은 햇빛을 받아 빛나 보인다는 것을 말하고, 북극성의 특징을 설명할 수 있다.',
      standards: ['[4과13-03]'],
      illustration: {
        prompt: P('a bright paper sun and a few twinkling paper stars in the sky, with a small planet and a crescent moon shining softly beside them, and a single star above the northern horizon marked with an arrow'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'sun', x: 90, y: 70, s: 1 }, { motif: 'star', x: 200, y: 56, s: 0.6, color: 'buttercup' }, { motif: 'star', x: 280, y: 100, s: 0.5, color: 'cream' },
          { motif: 'moon', x: 380, y: 70, s: 0.8 }, { motif: 'star', x: 420, y: 150, s: 1, color: 'lavender' }, { motif: 'hills', y: 226 },
          { motif: 'text', x: 240, y: 196, text: '스스로 빛나는 것은 무엇일까요?', size: 20 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"밤하늘에 반짝이는 점 가운데 어떤 것은 스스로 빛나고, 어떤 것은 그렇지 않대요. 알 수 있을까요?" 달과 별 사진을 나란히 놓고 예상을 묻는다. "움직이지 않으면 별이다"라는 대답이 나오면 칠판에 적어 두었다가 정리에서 견준다. 태양이 가장 가까운 별이라는 사실로 오늘의 질문을 연다.',
          student: '밤하늘의 밝은 점은 모두 스스로 빛을 낼까요?',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '빛', slots: ['스스로 빛나요', '햇빛을 받아 빛나 보여요'], cards: ['태양', '달'] }, sequence: [{ sort: { '스스로 빛나요': ['태양'], '햇빛을 받아 빛나 보여요': ['달'] } }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 별과 행성·달 가르기', minutes: 14, tool: 'mindmap',
              task: '카드를 읽고, 스스로 빛나는 것과 햇빛을 받아 빛나 보이는 것으로 나누거나 알맞은 설명에 이어요.',
              teacher: '"달이 밝은 까닭은 달 자체가 빛나서일까요?" 달은 햇빛을 받아 밝게 보인다고 짚는다. 금성은 아주 밝지만 스스로 빛나지 않는다는 점도 같은 방법으로 말하게 한다. 밝기와 스스로 빛나는지는 다른 이야기라는 것을 명확히 구분하도록 돕는다.',
              levels: EZ,
              items: [
                { prompt: '스스로 빛을 내는 것과 햇빛을 받아 빛나 보이는 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '빛', slots: ['스스로 빛을 내요', '햇빛을 받아 빛나 보여요'], cards: ['태양', '시리우스', '금성', '달', '목성'] },
                  target: { sort: { '스스로 빛을 내요': ['태양', '시리우스'], '햇빛을 받아 빛나 보여요': ['금성', '달', '목성'] } }, difficulty: 0.2 },
                { prompt: '별에 대해 옳은 설명만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '별', basket: '옳아요', cards: ['스스로 빛을 내요', '태양도 별이에요', '아주 멀리 있어 작은 점처럼 보여요', { id: '반사', text: '햇빛을 받아 반사해서 빛나요', why: '햇빛을 반사하는 것은 행성이나 달이에요.' }, { id: '같은밝기', text: '모든 별의 밝기가 똑같아요', why: '별마다 밝기가 달라 보여요.' }] },
                  target: { pick: ['스스로 빛을 내요', '태양도 별이에요', '아주 멀리 있어 작은 점처럼 보여요'] }, difficulty: 0.25 },
                { prompt: '이름과 알맞은 설명을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '이름과 설명', slots: [{ id: '태양', label: '태양' }, { id: '금성', label: '금성' }, { id: '달', label: '달' }], cards: ['스스로 빛을 내는 우리와 가장 가까운 별', '햇빛을 반사해 저녁·새벽에 밝은 행성', '햇빛을 반사하는 지구의 위성'] },
                  target: { match: { 태양: '스스로 빛을 내는 우리와 가장 가까운 별', 금성: '햇빛을 반사해 저녁·새벽에 밝은 행성', 달: '햇빛을 반사하는 지구의 위성' } }, difficulty: 0.3,
                  conclude: '별은 스스로 빛을 내고, 행성과 달은 햇빛을 반사해 빛나 보여요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 북극성 알아보기', minutes: 12, tool: 'mindmap',
              task: '북극성에 대한 카드를 읽고, 옳은 설명을 고르거나 별자리와 모양을 이어요.',
              teacher: '"북극성은 가장 밝은 별일까요?" 북극성은 밤하늘에서 가장 밝은 별이 아니라고 짚고, 북쪽 하늘에서 거의 같은 자리에 있는 것처럼 보인다는 특징을 말하게 한다. 가장 밝은 별을 북극성이라 여기는 학생에게는 "밝기로 찾으면 다른 별을 가리킬 수 있어요. 무엇을 길잡이로 삼을까요?"라고 되묻는다.',
              levels: EZ,
              items: [
                { prompt: '북극성에 대해 옳은 설명만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '북극성', basket: '옳아요', cards: ['북쪽 하늘에서 볼 수 있어요', '거의 같은 자리에 있는 것처럼 보여요', '북두칠성이나 카시오페이아자리로 찾을 수 있어요', { id: '가장밝은', text: '밤하늘에서 가장 밝은 별이에요', why: '북극성은 가장 밝은 별이 아니에요.' }, { id: '서쪽', text: '동쪽에서 떠서 서쪽으로 져요', why: '북극성은 거의 제자리에 있는 것처럼 보여요.' }] },
                  target: { pick: ['북쪽 하늘에서 볼 수 있어요', '거의 같은 자리에 있는 것처럼 보여요', '북두칠성이나 카시오페이아자리로 찾을 수 있어요'] }, difficulty: 0.25 },
                { prompt: '별자리 이름과 모양 설명을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '별자리 모양', slots: [{ id: '북두', label: '북두칠성' }, { id: '카시', label: '카시오페이아자리' }], cards: ['국자 모양으로 별 일곱 개가 이어져요', 'W나 M 모양으로 별 다섯 개가 이어져요', '십자 모양으로 별 네 개가 이어져요'] },
                  target: { match: { 북두: '국자 모양으로 별 일곱 개가 이어져요', 카시: 'W나 M 모양으로 별 다섯 개가 이어져요' } }, difficulty: 0.25 },
                { prompt: '북극성을 찾는 데 도움이 되는 것만 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '길잡이', basket: '도움이 돼요', cards: ['북두칠성', '카시오페이아자리', { id: '밝은별', text: '가장 밝게 보이는 별 아무거나', why: '밝은 별은 북극성이 아닐 수 있어요.' }, { id: '달', text: '달의 모양', why: '달 모양은 날짜마다 달라져 길잡이가 되지 않아요.' }] },
                  target: { pick: ['북두칠성', '카시오페이아자리'] }, difficulty: 0.25,
                  conclude: '북극성은 가장 밝은 별이 아니고, 북쪽 하늘에서 북두칠성이나 카시오페이아자리로 찾아요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '도입에서 적어 둔 "움직이지 않으면 별이다"를 다시 읽는다. "그러면 달은 별일까요?" 스스로 빛을 내는지가 별을 가르는 기준임을 말하게 한다. 출구 질문 3번에서 가장 밝은 별을 북극성이라고 고른 학생에게는 북두칠성이 길잡이라는 것을 다시 읽게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '빛', slots: ['스스로 빛을 내요', '햇빛을 받아 빛나 보여요'], cards: ['북극성', '화성', '지구의 달'] }, prompt: '스스로 빛을 내는 것과 햇빛을 받아 빛나 보이는 것으로 나누어 보세요.', target: { sort: { '스스로 빛을 내요': ['북극성'], '햇빛을 받아 빛나 보여요': ['화성', '지구의 달'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '별을 행성과 가르는 가장 알맞은 기준은 무엇인가요?', options: ['스스로 빛을 내는가', '밝게 보이는가', '움직이지 않는가'], answer: 0, difficulty: 0.2, explain: '별은 스스로 빛을 내고, 행성과 달은 햇빛을 반사해요.' },
            { type: 'choice', prompt: '북극성에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['밤하늘에서 가장 밝은 별이에요', '북쪽 하늘에서 거의 같은 자리에 있는 것처럼 보여요', '달처럼 모양이 변해요'], answer: 1, difficulty: 0.2, explain: '북극성은 북쪽 하늘에 거의 제자리에 있는 것처럼 보이는 별이에요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '별과 행성, 북극성 알아보기',
        items: [
          { type: 'table', prompt: '카드를 스스로 빛을 내는 것과 햇빛을 받아 빛나 보이는 것으로 나누어 쓰세요. 카드: 태양, 금성, 달, 시리우스', columns: ['스스로 빛을 내요', '햇빛을 받아 빛나 보여요'], cells: [['', '']], answer: '스스로: 태양, 시리우스 / 햇빛 받아: 금성, 달' },
          { type: 'choice', prompt: '북극성에 대한 설명으로 알맞은 것에 ○ 하세요.', options: ['가장 밝은 별이에요', '북쪽 하늘에서 거의 같은 자리에 보여요', '동쪽에서 떠서 서쪽으로 져요'], answer: '북쪽 하늘에서 거의 같은 자리에 보여요' },
          { type: 'check', prompt: '북극성을 찾는 데 도움이 되는 것에 모두 ✓ 하세요.', options: ['북두칠성', '카시오페이아자리', '가장 밝은 별 아무거나', '달 모양'], answer: '북두칠성, 카시오페이아자리' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '별은 ___ 빛을 내고, 행성과 달은 ___을 받아 빛나 보여요.', answer: '스스로, 햇빛' },
          { type: 'short', prompt: '"가장 밝은 별이 북극성이다."라는 말이 틀린 까닭을 써 보세요.', answer: '북극성은 밤하늘에서 가장 밝은 별이 아니라서 밝기로 찾으면 다른 별을 가리킬 수 있다.' },
        ],
        easy: {
          note: '별은 스스로 빛을 내요. 행성과 달은 햇빛을 반사해요. 북극성은 북쪽 하늘에 있어요.',
          items: [
            { type: 'choice', prompt: '스스로 빛을 내는 것에 ○ 하세요.', options: ['태양', '달'], answer: '태양' },
            { type: 'choice', prompt: '북극성을 볼 수 있는 쪽에 ○ 하세요.', options: ['북쪽 하늘', '남쪽 땅'], answer: '북쪽 하늘' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '달은 ___을 받아 빛나 보여요.', answer: '햇빛' },
            { type: 'draw', prompt: '북두칠성의 국자 모양을 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 카드가 세 장 이내로 적어요.',
        base: '카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '함정 설명이 섞여 있어, 별 하나하나를 근거를 들어 가려야 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 밤하늘에서 움직이지 않으면 별이라고 여긴다. ② 아주 밝은 금성을 별이라고 여긴다 → 스스로 빛나는지로 가른다. ③ 가장 밝은 별을 북극성이라고 가리킨다. 북두칠성은 큰곰자리의 일부이지만 이 단원에서는 \'북극성을 찾는 길잡이\'로 북두칠성이라는 이름만 쓴다. 별의 거리나 밝기 등급은 다루지 않는다.',
    }),

    // ───────────────────────── 10차시 (core, 자료 표현) ─────────────────────────
    L(10, {
      title: '별자리 별 수 그림그래프와 점·선 별자리 그림 그리기',
      objective: '별자리를 이루는 별의 수를 그림그래프로 나타내고, 별자리를 점과 선으로 그려 북극성의 자리를 표시할 수 있다.',
      standards: ['[4과13-03]'],
      illustration: {
        prompt: P('a ladle-shaped group of seven paper stars joined by thin lines next to a W-shaped group of five stars, with one small marked star between them and a pencil drawing dots on a notebook'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'star', x: 70, y: 100, s: 0.6, color: 'buttercup' }, { motif: 'star', x: 110, y: 124, s: 0.6, color: 'buttercup' }, { motif: 'star', x: 150, y: 110, s: 0.6, color: 'buttercup' },
          { motif: 'star', x: 230, y: 70, s: 0.8, color: 'peach' },
          { motif: 'star', x: 310, y: 110, s: 0.6, color: 'lavender' }, { motif: 'star', x: 350, y: 90, s: 0.6, color: 'lavender' }, { motif: 'star', x: 390, y: 118, s: 0.6, color: 'lavender' },
          { motif: 'hills', y: 226 }, { motif: 'text', x: 240, y: 190, text: '점을 찍고 선으로 이어요', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '북두칠성 사진에서 별을 점으로 표시하고 이웃한 점끼리 선으로 이어 보인다. "점만 있으면 어떤 모양인지 알기 어렵고, 선을 이으면 국자 모양이 보이죠?" 선을 마음대로 이으면 모양이 달라진다는 점을 짚어, 오늘은 정해진 별자리 모양대로 점과 선으로 나타낸다고 알린다.',
          student: '별을 점으로 찍고 선으로 이으면 어떤 모양이 보일까요?',
          demo: { tool: 'story', options: { shuffle: false, slots: ['먼저', '다음'], cards: [{ id: 'a', text: '별을 점으로 찍어요' }, { id: 'b', text: '점을 선으로 이어요' }] }, sequence: [{ order: ['a', 'b'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 별자리 별 수를 그림그래프로', minutes: 13, tool: 'chart',
              task: '별자리의 별 수 표를 보고 별 모양 그림을 눌러 그림그래프를 완성하거나, 그래프를 읽고 답해요.',
              teacher: '"별 하나를 그림 하나로 나타냈어요. 북두칠성은 별이 몇 개일까요?" 그림 하나가 별 하나라는 것을 먼저 확인하게 한다. 그래프를 읽을 때 그림의 개수를 세지 않고 가장 긴 줄만 보는 학생에게는 "그림을 하나씩 손가락으로 세 봐요"라고 말한다.',
              levels: { easy: { showValues: true }, base: {}, challenge: {} },
              items: [
                { prompt: '별자리 별 수 표를 보고 그림그래프를 완성하세요. 그림 하나는 별 1개예요.',
                  toolOptions: { type: 'picture', title: '별자리를 이루는 별의 수', unit: '개', data: [['북두칠성', 7], ['카시오페이아자리', 5], ['작은곰자리', 7]], icons: [{ value: 1, name: '별 1개' }], icon: 'star', given: [0] },
                  target: { build: true }, difficulty: 0.15 },
                { prompt: '그림그래프를 보고 별이 가장 적은 별자리를 고르세요.',
                  toolOptions: { type: 'picture', mode: 'read', title: '별자리를 이루는 별의 수', unit: '개', data: [['북두칠성', 7], ['카시오페이아자리', 5], ['작은곰자리', 7]], icons: [{ value: 1, name: '별 1개' }], icon: 'star', question: '별이 가장 적은 별자리는?', choices: ['북두칠성', '카시오페이아자리', '작은곰자리'], why: ['북두칠성은 별이 일곱 개예요.', '', '작은곰자리도 별이 일곱 개예요.'], explain: '카시오페이아자리가 5개로 가장 적어요.' },
                  target: { pick: 1 }, difficulty: 0.15 },
                { prompt: '그림그래프를 보고 북두칠성의 별은 몇 개인지 고르세요.',
                  toolOptions: { type: 'picture', mode: 'read', title: '별자리를 이루는 별의 수', unit: '개', data: [['북두칠성', 7], ['카시오페이아자리', 5], ['작은곰자리', 7]], icons: [{ value: 1, name: '별 1개' }], icon: 'star', question: '북두칠성의 별은 몇 개?', choices: ['5개', '7개', '9개'], why: ['5개는 카시오페이아자리예요.', '', '그림을 하나씩 세어 보세요.'], explain: '북두칠성은 그림이 7개예요.' },
                  target: { pick: 1 }, difficulty: 0.2,
                  conclude: '그림그래프에서 그림 하나가 별 하나예요. 그림 수를 세면 별 수를 알 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 점과 선으로 별자리 그리기', minutes: 13, tool: 'mindmap',
              task: '별자리를 그리는 차례와 점·선의 뜻, 바른 그림과 고쳐야 할 그림을 카드로 가려요.',
              teacher: '"점은 무엇을 나타낼까요? 선은요?" 점은 별 하나, 선은 별자리 모양을 알아보기 쉽게 이은 것이라고 짚는다. 선을 마음대로 그으면 같은 별도 다른 모양이 되어 친구와 이야기가 통하지 않는다고 말해 준다.',
              levels: EZ,
              items: [
                { prompt: '별자리 그림을 그리는 차례를 가지에 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '별자리 그리기', slots: ['먼저 하는 일', '나중에 하는 일'], cards: ['별을 점으로 찍어요', '점의 자리를 보고 확인해요', '점을 선으로 이어 모양을 만들어요', '북극성에 표시하고 이름을 써요'] },
                  target: { sort: { '먼저 하는 일': ['별을 점으로 찍어요', '점의 자리를 보고 확인해요'], '나중에 하는 일': ['점을 선으로 이어 모양을 만들어요', '북극성에 표시하고 이름을 써요'] } }, difficulty: 0.2 },
                { prompt: '그림 속 모양과 그 뜻을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '그림 속 모양', slots: [{ id: '점', label: '동그란 점' }, { id: '선', label: '점을 잇는 선' }, { id: '별표', label: '북극성 옆 표시' }], cards: ['별 하나', '별자리 모양을 알아보기 쉽게 이은 것', '북극성의 자리'] },
                  target: { match: { 점: '별 하나', 선: '별자리 모양을 알아보기 쉽게 이은 것', 별표: '북극성의 자리' } }, difficulty: 0.25 },
                { prompt: '별자리 그림을 바르게 그린 것과 고쳐야 할 것으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '그림 점검', slots: ['바르게 그렸어요', '고쳐야 해요'], cards: ['별마다 점을 찍고 이웃한 점끼리 이었어요', '북극성에 표시하고 이름을 썼어요', '선을 마음대로 그어 모양이 달라졌어요', '점 없이 선만 그렸어요'] },
                  target: { sort: { '바르게 그렸어요': ['별마다 점을 찍고 이웃한 점끼리 이었어요', '북극성에 표시하고 이름을 썼어요'], '고쳐야 해요': ['선을 마음대로 그어 모양이 달라졌어요', '점 없이 선만 그렸어요'] } }, difficulty: 0.25,
                  conclude: '별마다 점을 찍고 정해진 모양대로 이으며, 북극성의 자리에 표시하면 별자리를 나타낼 수 있어요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '"점과 선으로 나타낸 별자리 그림에서 점은 무엇이었죠?" 도입에서 학생이 마음대로 이었던 선이 있으면 정해진 모양과 견주어 보게 한다. 출구 질문 1번에서 별의 수를 세지 못한 학생은 그림을 손가락으로 짚으며 소리 내어 세게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '모둠이 찾은 별', unit: '개', data: [['가 모둠', 6], ['나 모둠', 3], ['다 모둠', 4]], icons: [{ value: 1, name: '별 1개' }], icon: 'star', question: '별을 가장 많이 찾은 모둠은?', choices: ['가 모둠', '나 모둠', '다 모둠'] }, prompt: '그림그래프를 보고 별을 가장 많이 찾은 모둠을 고르세요.', target: { pick: 0 }, difficulty: 0.15 },
            { type: 'choice', prompt: '별자리 그림에서 점은 무엇을 나타내나요?', options: ['별 하나', '구름 하나', '행성의 고리'], answer: 0, difficulty: 0.1, explain: '점은 별 하나를 나타내요.' },
            { type: 'choice', prompt: '별자리 그림에서 선을 마음대로 그으면 어떻게 될까요?', options: ['별자리 모양이 달라져 알아보기 어려워요', '별이 더 밝아져요', '북극성이 사라져요'], answer: 0, difficulty: 0.2, explain: '정해진 모양대로 이어야 별자리를 알아볼 수 있어요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '별자리 그림 나타내기',
        items: [
          { type: 'figure', wide: true, prompt: '그림그래프를 보고 별자리마다 별이 몇 개인지 쓰세요.', tool: 'chart', options: { type: 'picture', mode: 'read', title: '별자리를 이루는 별의 수', unit: '개', data: [['북두칠성', 7], ['카시오페이아자리', 5]], icons: [{ value: 1, name: '별 1개' }], icon: 'star' }, figures: [{ options: {}, caption: '북두칠성 ___개   카시오페이아자리 ___개' }], answer: '북두칠성 7개, 카시오페이아자리 5개' },
          { type: 'table', prompt: '별자리를 이루는 별의 수를 표로 정리하세요.', columns: ['별자리', '별의 수(개)'], cells: [['북두칠성', ''], ['카시오페이아자리', ''], ['작은곰자리', '']], answer: '7, 5, 7' },
          { type: 'draw', prompt: '북두칠성을 점 일곱 개와 선으로 그리고, 북극성이 있을 자리에 ☆ 표시와 이름을 쓰세요.' },
          { type: 'choice', prompt: '별자리 그림에서 선의 뜻으로 알맞은 것에 ○ 하세요.', options: ['별자리 모양을 알아보기 쉽게 이은 것', '별 하나', '행성의 길'], answer: '별자리 모양을 알아보기 쉽게 이은 것' },
          { type: 'short', prompt: '별자리를 그릴 때 선을 마음대로 그으면 안 되는 까닭을 써 보세요.', answer: '선을 마음대로 그으면 별자리 모양이 달라져 다른 사람이 알아보기 어렵다.' },
        ],
        easy: {
          note: '그림 하나가 별 하나예요. 별마다 점을 찍고, 이웃한 점을 선으로 이어요.',
          items: [
            { type: 'choice', prompt: '별자리 그림에서 점이 나타내는 것에 ○ 하세요.', options: ['별 하나', '달 하나'], answer: '별 하나' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '북두칠성의 별은 ___개예요.', answer: '7' },
            { type: 'table', prompt: '별 수를 써 보세요.', columns: ['별자리', '별의 수(개)'], cells: [['카시오페이아자리', '']] },
            { type: 'draw', prompt: '별 다섯 개로 W 모양을 점과 선으로 그려 보세요.' },
          ],
        },
      },
      differentiation: {
        easy: '그림그래프에 별 수가 보이고, 맞는 칸에 초록 테두리가 생겨요.',
        base: '그림그래프와 별자리 그림을 스스로 완성하고 확인해요.',
        challenge: '그래프를 읽어 답하고, 잘못 그린 별자리 그림을 근거를 들어 고쳐요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 그림그래프의 그림을 세지 않고 눈대중으로 답한다. ② 별자리 선을 마음대로 이어 서로 다른 모양을 그린다. ③ 북극성의 자리를 별자리 그림에 표시하지 않는다. 별자리를 이루는 별의 수는 대표적인 별만 센 것이며 더 어두운 별은 세지 않는다. 작은곰자리의 별 수도 같은 방식으로 센 값이다.',
    }),

    // ───────────────────────── 11차시 (wrap) ─────────────────────────
    L(11, {
      title: '북두칠성·카시오페이아자리로 북극성 찾고 단원 돌아보기',
      objective: '북두칠성이나 카시오페이아자리를 이용해 북극성을 찾는 차례를 말하고, 밤하늘 관찰에서 배운 달·행성·별의 특징을 묶어 정리할 수 있다.',
      standards: ['[4과13-03]', '[4과13-01]', '[4과13-02]'],
      safety: NIGHT,
      illustration: {
        prompt: P('a night sky with a ladle-shaped group of stars and a W-shaped group of stars, thin dotted lines leading from each toward a single star in the middle marked with a small arrow, above quiet hills'),
        scene: { viewBox: [480, 270], layers: [
          { motif: 'star', x: 90, y: 90, s: 0.6, color: 'buttercup' }, { motif: 'star', x: 140, y: 110, s: 0.6, color: 'buttercup' }, { motif: 'star', x: 190, y: 96, s: 0.6, color: 'buttercup' },
          { motif: 'star', x: 250, y: 70, s: 1, color: 'peach' },
          { motif: 'star', x: 320, y: 100, s: 0.6, color: 'lavender' }, { motif: 'star', x: 370, y: 82, s: 0.6, color: 'lavender' }, { motif: 'star', x: 420, y: 110, s: 0.6, color: 'lavender' },
          { motif: 'hills', y: 226 }, { motif: 'text', x: 240, y: 192, text: '길잡이 별자리로 북극성 찾기', size: 22 },
        ] },
      },
      stages: [
        {
          id: 'intro', title: '도입', minutes: 6,
          teacher: '"길을 잃었을 때 북쪽을 알려 주는 별이 있어요. 가장 밝은 별을 찾으면 될까요?" 지난 시간에 배운 북극성의 특징을 떠올리게 한다. 밝기로 찾으면 다른 별을 가리킬 수 있으니 북두칠성이나 카시오페이아자리가 길잡이가 된다고 이어 말한다. 오늘은 찾는 차례를 놓아 보고 단원 전체를 정리한다고 알린다.',
          student: '북극성은 어떻게 찾을 수 있을까요?',
          demo: { tool: 'story', options: { shuffle: false, slots: ['1', '2'], cards: [{ id: 'a', text: '북두칠성을 찾아요' }, { id: 'b', text: '북극성을 찾아요' }] }, sequence: [{ order: ['a', 'b'] }] },
        },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: [
            {
              id: 'a1', title: '활동 1. 북극성 찾는 차례 놓기', minutes: 14, tool: 'story',
              task: '북극성을 찾는 차례를 읽고 자리에 놓아요. 마지막 문항은 두 방법의 카드를 알맞은 칸으로 나누어요.',
              teacher: '"북두칠성에서 북극성까지 가려면 어느 두 별을 이어야 할까요?" 국자 끝 쪽 두 별이라고 짚게 한다. "선을 얼마나 늘려야 할까요?" 두 별 사이 거리의 약 5배라고 말하게 한다. 선을 늘리지 않고 이은 선 위의 아무 별이나 북극성이라고 하는 학생이 있으면 "5배 늘린 곳 가까이에서 찾아요"라고 되짚는다.',
              levels: EZ,
              items: [
                { prompt: '북두칠성을 이용해 북극성을 찾는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: [{ id: 'b1', text: '북쪽 하늘에서 국자 모양의 북두칠성을 찾아요' }, { id: 'b2', text: '국자 끝쪽 두 별을 찾아요' }, { id: 'b3', text: '두 별을 이어 선을 그어요' }, { id: 'b4', text: '그 거리의 약 5배를 늘려요' }, { id: 'b5', text: '늘린 곳 가까이에서 북극성을 찾아요' }] },
                  target: { order: ['b1', 'b2', 'b3', 'b4', 'b5'] }, difficulty: 0.25 },
                { prompt: '카시오페이아자리를 이용해 북극성을 찾는 차례대로 자리에 놓아 보세요.',
                  toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: [{ id: 'c1', text: 'W나 M 모양의 카시오페이아자리를 찾아요' }, { id: 'c2', text: '바깥쪽 두 선을 길게 늘려요' }, { id: 'c3', text: '늘린 두 선이 만나는 점을 찾아요' }, { id: 'c4', text: '그 점과 가운데 별을 이어요' }, { id: 'c5', text: '그 선을 약 5배 늘린 곳 가까이에서 북극성을 찾아요' }] },
                  target: { order: ['c1', 'c2', 'c3', 'c4', 'c5'] }, difficulty: 0.3 },
                { prompt: '두 방법의 카드를 북두칠성 방법과 카시오페이아자리 방법으로 나누어 보세요.',
                  toolOptions: { mode: 'sort', slots: ['북두칠성 방법', '카시오페이아자리 방법'], cards: ['국자 끝쪽 두 별을 이어요', '그 두 별 사이 거리의 약 5배를 늘려요', '바깥쪽 두 선을 늘려 만나는 점을 찾아요', '그 점과 가운데 별을 이어요'] },
                  target: { sort: { '북두칠성 방법': ['국자 끝쪽 두 별을 이어요', '그 두 별 사이 거리의 약 5배를 늘려요'], '카시오페이아자리 방법': ['바깥쪽 두 선을 늘려 만나는 점을 찾아요', '그 점과 가운데 별을 이어요'] } }, difficulty: 0.3,
                  conclude: '북극성은 북두칠성이나 카시오페이아자리를 길잡이로 삼아 찾을 수 있어요.' },
              ],
            },
            {
              id: 'a2', title: '활동 2. 단원 내용 묶기', minutes: 12, tool: 'mindmap',
              task: '이 단원에서 배운 문장 카드를 달·행성·별로 나누고, 옳은 문장을 고르고, 질문에 맞는 답을 이어요.',
              teacher: '"이 문장은 어느 시간에 배웠나요? 달 이야기일까요, 행성 이야기일까요?" 가지마다 대표 문장을 하나씩 소리 내어 읽게 한다. 2번에서 달 모양이 구름 때문에 변한다는 도입 시간의 생각이 다시 나오면 그때 정리한 근거를 짚는다.',
              levels: EZ,
              items: [
                { prompt: '배운 문장을 달·행성·별로 나누어 보세요.',
                  toolOptions: { mode: 'sort', topic: '밤하늘', slots: ['달', '행성', '별'], cards: ['약 한 달을 주기로 모양이 되풀이돼요', '음력 15일 무렵 보름달이 떠요', '태양 둘레를 돌고 햇빛을 반사해요', '토성은 둘레에 고리가 있어요', '스스로 빛을 내요', '북극성은 북쪽 하늘에 거의 같은 자리에 보여요'] },
                  target: { sort: { 달: ['약 한 달을 주기로 모양이 되풀이돼요', '음력 15일 무렵 보름달이 떠요'], 행성: ['태양 둘레를 돌고 햇빛을 반사해요', '토성은 둘레에 고리가 있어요'], 별: ['스스로 빛을 내요', '북극성은 북쪽 하늘에 거의 같은 자리에 보여요'] } }, difficulty: 0.25 },
                { prompt: '단원에서 배운 것 가운데 옳은 문장만 골라 바구니에 넣어 보세요.',
                  toolOptions: { mode: 'pick', topic: '옳은 문장', basket: '옳아요', cards: ['달은 스스로 빛을 내지 않아요', '태양은 별이에요', '행성은 모두 8개예요', { id: '밝은북극성', text: '북극성은 가장 밝은 별이에요', why: '북극성은 가장 밝은 별이 아니에요.' }, { id: '구름달', text: '달 모양이 변하는 것은 구름 때문이에요', why: '날짜에 따라 보이는 밝은 부분이 달라지기 때문이에요.' }] },
                  target: { pick: ['달은 스스로 빛을 내지 않아요', '태양은 별이에요', '행성은 모두 8개예요'] }, difficulty: 0.25 },
                { prompt: '질문과 알맞은 답을 이어 보세요.',
                  toolOptions: { mode: 'match', topic: '묻고 답하기', slots: [{ id: 'q1', label: '달 관찰 기록에 꼭 필요한 것은?' }, { id: 'q2', label: '행성을 나타낼 때 쓴 차례는?' }, { id: 'q3', label: '북극성을 찾는 길잡이는?' }], cards: ['날짜·시각·달 모양', '태양에서 가까운 차례', '북두칠성이나 카시오페이아자리'] },
                  target: { match: { q1: '날짜·시각·달 모양', q2: '태양에서 가까운 차례', q3: '북두칠성이나 카시오페이아자리' } }, difficulty: 0.2,
                  conclude: '달은 날짜별 모양, 행성은 차례와 모습, 별은 스스로 빛남과 북극성 찾기로 묶어서 기억해요.' },
              ],
            },
          ],
        },
        {
          id: 'wrapup', title: '정리', minutes: 8,
          teacher: '단원 첫 시간의 질문 "달은 매일 같은 모양일까요?"를 다시 던지고, 지금은 어떻게 답할 수 있는지 들어 본다. 오늘 찾은 북극성 길잡이를 짝에게 한 번씩 설명해 보게 한다. 출구 질문 3번에서 선을 늘리지 않고 이은 곳의 별을 북극성이라고 답한 학생은 다음 시간에 5배 늘리는 그림을 다시 그려 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'story', options: { slots: ['1', '2', '3'], cards: [{ id: 'k1', text: '바깥쪽 두 선을 늘려요' }, { id: 'k2', text: '만나는 점과 가운데 별을 이어요' }, { id: 'k3', text: '약 5배 늘린 곳에서 북극성을 찾아요' }] }, prompt: '카시오페이아자리로 북극성을 찾는 차례대로 자리에 놓아 보세요.', target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '행성에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['스스로 빛을 내는 별이에요', '태양 둘레를 돌고 햇빛을 반사해요', '지구 둘레를 도는 위성이에요'], answer: 1, difficulty: 0.2, explain: '행성은 태양 둘레를 돌고, 햇빛을 반사해 빛나 보여요.' },
            { type: 'choice', prompt: '북두칠성을 이용해 북극성을 찾을 때 알맞은 방법은 무엇인가요?', options: ['국자 끝쪽 두 별을 이어 그 거리의 약 5배를 늘려요', '가장 밝은 별을 곧바로 가리켜요', '달이 보이는 쪽으로 걸어가요'], answer: 0, difficulty: 0.25, explain: '국자 끝쪽 두 별을 이어 약 5배 늘린 곳 가까이에서 북극성을 찾아요.' },
            MOOD,
          ],
        },
      ],
      worksheet: {
        title: '북극성 찾기와 단원 돌아보기',
        items: [
          { type: 'draw', prompt: '북두칠성을 점과 선으로 그리고, 국자 끝쪽 두 별을 이어 5배 늘린 곳에 북극성을 ☆로 표시하세요.' },
          { type: 'figure', wide: true, prompt: '가지마다 이 단원에서 배운 것을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '밤하늘 관찰', printCards: false, slots: ['달', '행성', '별'], cards: ['보기'] }, caption: '' }], answer: '예: 달 — 약 한 달 주기로 모양이 되풀이 / 행성 — 태양 둘레를 돌고 햇빛을 반사 / 별 — 스스로 빛을 냄' },
          { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○, 아직이면 △ 하세요.', columns: ['할 수 있는 것', '○ / △'], cells: [['달 모양 이름을 날짜와 짝지을 수 있다', ''], ['행성을 태양에서 가까운 차례로 말할 수 있다', ''], ['별과 행성의 차이를 말할 수 있다', ''], ['북극성을 찾는 방법을 말할 수 있다', '']] },
          { type: 'check', prompt: '북극성을 찾을 때 쓸 수 있는 것에 모두 ✓ 하세요.', options: ['북두칠성', '카시오페이아자리', '가장 밝은 별 아무거나', '달 모양'], answer: '북두칠성, 카시오페이아자리' },
          { type: 'short', prompt: '단원 첫 시간의 질문 "달은 매일 같은 모양일까요?"에 지금의 내 말로 답하세요.', answer: '달은 날짜에 따라 모양이 달라지고, 약 한 달을 주기로 같은 모양이 되풀이된다.' },
        ],
        easy: {
          note: '달은 한 달 주기로 모양이 되풀이돼요. 별은 스스로 빛나요. 북극성은 북두칠성에서 찾아요.',
          items: [
            { type: 'choice', prompt: '북극성을 찾는 데 쓰는 별자리에 ○ 하세요.', options: ['북두칠성', '달'], answer: '북두칠성' },
            { type: 'choice', prompt: '스스로 빛을 내는 것에 ○ 하세요.', options: ['별', '행성'], answer: '별' },
            { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '달 모양은 약 ___ 주기로 되풀이돼요.', answer: '한 달' },
            { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○ 하세요.', columns: ['할 수 있는 것', '○'], cells: [['달 모양 이름 말하기', ''], ['행성 차례 말하기', ''], ['북극성 찾는 방법 말하기', '']] },
          ],
        },
      },
      differentiation: {
        easy: '맞는 자리에 초록 테두리가 생기고, 북극성 찾는 카드에 번호가 함께 보여요.',
        base: '두 가지 방법의 차례를 스스로 놓고, 단원 문장을 세 가지로 나누어요.',
        challenge: '두 방법의 카드가 섞여 있어, 방법을 가르고 함정 문장을 가려내야 해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 가장 밝은 별을 북극성이라고 가리킨다. ② 선을 \'약 5배\' 늘리는 것을 놓친다 → 종이에 두 점을 찍어 자로 직접 늘려 보게 한다. ③ 단원 전체를 따로따로 기억한다 → 달(날짜별 모양) → 행성(차례·모습) → 별(스스로 빛남·북극성)으로 묶는다. 실제 하늘에서 북극성을 찾는 활동은 어른과 함께 맑은 날 저녁에 하도록 안내하고, 안 보이는 날은 관측 프로그램으로 대신한다. 자기 점검에서 △가 많은 항목은 다음 단원 시작 전 복습 거리로 쓴다.',
    }),

  ];

  PaperLessons.registerUnit({
    id: 'g4-sci-2-01', schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 4, subject: '과학', unitTitle: '1. 밤하늘 관찰',
    flow: '1~4차시는 달이다. 달 표면의 밝은 곳·어두운 곳과 날짜별 달 모양 이름을 알고(1), 달 모양이 약 한 달을 주기로 되풀이된다는 것을 판을 돌려 확인하고(2), 날짜 차례로 달 그림을 늘어놓으며 관찰 기록에 날짜·시각·모양이 왜 필요한지 찾고(3), 같은 시각·장소로 일주일 관찰할 계획과 밤 안전 약속을 점검한다(4). 5~8차시는 태양계로, 태양계 식구를 가려 태양은 별·지구는 행성·달은 위성임을 알고(5), 행성을 태양에서 가까운 차례와 큰 차례로 따로 늘어놓고(6), 행성의 모습을 이름과 짝지으며 위치 그림을 읽고(7), 행성 두 개를 조사해 행성별 기록장에 출처와 함께 나누어 적는다(8). 9~11차시는 별로, 스스로 빛나는 별과 햇빛을 받는 행성·달을 가르고 북극성의 특징을 알고(9), 별자리 별 수를 그림그래프로 나타내고 점·선으로 별자리 그림을 그리고(10), 북두칠성·카시오페이아자리로 북극성을 찾는 차례를 익히며 단원을 정리한다(11).',
    refs: {},
    lessons,
  });
})();
