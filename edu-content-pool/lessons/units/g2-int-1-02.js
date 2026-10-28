/* 2학년 1학기 통합교과 2. 자연 — 48차시
 * 1~16차시 [바른 생활] 사람과 자연이 함께 사는 생태환경 실천: 둘레의 생물과 서로 돕는 일 알기(1~6) → 화분 돌보기·물과 종이 아끼기 실천(7~11) → 달라진 것 돌아보기·함께 지킬 약속(12~16)
 * 17~32차시 [슬기로운 생활] 사람, 자연, 동식물이 어우러진 생태 탐구: 살펴볼 생물 고르고 물음 만들기(17~22) → 사흘 관찰·기록 읽기(23~27) → 알아낸 것 설명하기(28~32)
 * 33~48차시 [슬기로운 생활] 생활과 관련된 지속가능성 사례 탐색: 걱정되는 일을 물음으로(33~38) → 교실 쓰레기 세어 읽기(39~43) → 할 일 정해 알리기·단원 정리(44~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 예문·이야기·자료(세어 본 수)는 모두 직접 지은 것이다. 학생 이름은 가명(민지·준호·서아·하준)만 쓴다.
 */
(function () {
  var UNIT = 'g2-통합교과-1학기-2';
  var TITLE = '2. 자연';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g2-int-1-02-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 2, subject: '통합교과', unitTitle: TITLE,
    };
    var tail = { standards: [], minutes: 40, formats: ['chromebook', 'projector', 'print'] };
    var out = {};
    [head, { title: x.title, objective: x.objective }, tail].forEach(function (o) { for (var k in o) out[k] = o[k]; });
    for (var k in x) if (!(k in out)) out[k] = x[k];
    return out;
  }
  // 그림: prompt 틀 + 벡터 장면(배경 + 차시 모티프 + 한 줄 글)
  function ART(what, text, more) {
    return {
      prompt: HEAD + what + TAIL,
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 204 },
      ].concat(more || []).concat([{ motif: 'text', x: 240, y: 140, text: text, size: 22 }]) },
    };
  }
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드나 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 밖에서 생물을 살펴보는 차시의 안전 약속
  var OUTSIDE = ['화단에서는 뛰지 않고 정해진 길로만 다녀요.', '벌이 가까이 오면 손을 휘두르지 말고 천천히 물러나요.', '생물을 살펴본 뒤에는 손을 비누로 씻어요.'];
  // 낱말 카드 + 그림
  function c(id, motif) { return motif ? { id: id, text: id, motif: motif } : id; }

  var lessons = [];

  // ───────────────────────── 1~6차시: 둘레의 생물과 서로 돕는 일(생활 맥락 이해) ─────────────────────────

  lessons.push(L(1, {
    title: '봄 화단에서 살아 있는 것 찾아 이름 대기',
    objective: '학교 화단에서 볼 수 있는 것을 살아 있는 것과 살아 있지 않은 것으로 나누고, 생물의 이름을 댈 수 있다.',
    illustration: ART('a spring school flower bed with dandelions, a sparrow, ants and a small stone, two children crouching to look closely', '화단에 누가 살까요?', [
      { motif: 'flower', x: 120, y: 222 }, { motif: 'bird', x: 340, y: 96 }, { motif: 'tree', x: 400, y: 212 }, { motif: 'flower', x: 190, y: 230, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"지난 주말에 밖에서 만난 동물이나 식물이 있나요?" 두세 명의 이야기를 듣는다. "이번 단원에서는 우리 둘레에서 사람과 함께 사는 생물을 살펴보고, 함께 잘 사는 방법을 찾아요." 시연 단추로 민들레·참새 카드가 \'살아 있어요\' 칸에, 돌멩이 카드가 \'살아 있지 않아요\' 칸에 놓이는 모습을 보여 준다. 동물만 생물이라고 여기는 학생에게 "민들레도 자라고 씨를 퍼뜨릴까요?"라고 묻는다.',
        student: '밖에서 만난 동물이나 식물의 이름을 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '화단에서 찾은 것', slots: ['살아 있어요', '살아 있지 않아요'], cards: [c('민들레', 'flower'), c('참새', 'bird'), '돌멩이'], shuffle: false }, sequence: [{ sort: { '살아 있어요': ['민들레', '참새'], '살아 있지 않아요': ['돌멩이'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 살아 있는 것과 살아 있지 않은 것 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이것은 자랄까요? 물이나 먹이가 필요할까요?" 두 물음으로 카드마다 따지게 한다. 움직이면 살아 있다고 말하는 학생에게 "바람도 움직이고 그네도 움직여요. 바람이 자라나요?"라고 되묻는다. 풀과 나무도 생물이라는 것을 짚는다.',
            task: '카드를 읽고 살아 있는 것과 살아 있지 않은 것으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '화단에서 찾은 것을 살아 있는 것과 살아 있지 않은 것으로 나누어 보세요.', toolOptions: { topic: '화단에서 찾은 것', slots: ['살아 있어요', '살아 있지 않아요'], cards: [c('민들레', 'flower'), '개미', '돌멩이', '모래'] },
                target: { sort: { '살아 있어요': ['민들레', '개미'], '살아 있지 않아요': ['돌멩이', '모래'] } }, difficulty: 0.05 },
              { prompt: '운동장에서 찾은 것을 나누어 보세요.', toolOptions: { topic: '운동장에서 찾은 것', slots: ['살아 있어요', '살아 있지 않아요'], cards: [c('참새', 'bird'), '지렁이', '미끄럼틀', '물뿌리개'] },
                target: { sort: { '살아 있어요': ['참새', '지렁이'], '살아 있지 않아요': ['미끄럼틀', '물뿌리개'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '운동장에서 찾은 것을 나누어 보세요. 움직이는 것이 모두 살아 있는지 따져 봐요.', toolOptions: { cards: [c('참새', 'bird'), '지렁이', '미끄럼틀', '물뿌리개', c('구름', 'cloud')] },
                  target: { sort: { '살아 있어요': ['참새', '지렁이'], '살아 있지 않아요': ['미끄럼틀', '물뿌리개', '구름'] } } } } },
              { prompt: '학교 뒤뜰에서 찾은 것을 나누어 보세요.', toolOptions: { topic: '학교 뒤뜰에서 찾은 것', slots: ['살아 있어요', '살아 있지 않아요'], cards: [c('나무', 'tree'), '무당벌레', '토끼풀', c('바람', 'cloud'), '그네'] },
                target: { sort: { '살아 있어요': ['나무', '무당벌레', '토끼풀'], '살아 있지 않아요': ['바람', '그네'] } }, difficulty: 0.2,
                predict: { q: '바람은 움직여요. 바람은 살아 있을까요?', options: ['살아 있어요', '살아 있지 않아요'], answer: 1 },
                conclude: '움직인다고 다 살아 있는 것은 아니에요. 생물은 자라고, 물과 먹이가 있어야 살아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 생물은 자라요 — 차례 놓기', minutes: 12, tool: 'lifecycle',
            teacher: '"민들레는 처음부터 노란 꽃이었을까요?" 학교 화단의 민들레 솜털을 보여 주거나 떠올리게 한다. "생물은 자라면서 모습이 바뀌어요. 돌멩이는 자라서 바위가 될까요?" 하고 견주게 한다. 솜털 씨앗 다음에 무엇이 오는지 화살표를 손가락으로 따라가게 한다.',
            task: '둥근 판의 자리에 생물이 자라는 차례대로 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '민들레가 자라는 차례대로 카드를 놓아 보세요.', toolOptions: { center: '민들레가 자라요', cards: [c('씨', 'seed'), c('싹', 'sprout'), { id: '노란 꽃', text: '노란 꽃', motif: 'flower' }, { id: '솜털 씨앗', text: '하얀 솜털 씨앗', motif: 'cloud' }] },
                target: { order: ['씨', '싹', '노란 꽃', '솜털 씨앗'], cyclic: true }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: [c('씨', 'seed'), c('싹', 'sprout'), { id: '노란 꽃', text: '노란 꽃', motif: 'flower' }, { id: '솜털 씨앗', text: '하얀 솜털 씨앗', motif: 'cloud' }, '돌멩이'], slots: 4 } } } },
              { prompt: '개구리가 자라는 차례대로 카드를 놓아 보세요.', toolOptions: { center: '개구리가 자라요', cards: [c('알', 'egg'), c('올챙이', 'tadpole'), { id: '뒷다리', text: '뒷다리가 난 올챙이', motif: 'tadpole' }, c('개구리', 'frog')] },
                target: { order: ['알', '올챙이', '뒷다리', '개구리'], cyclic: true }, difficulty: 0.2 },
              { prompt: '닭이 자라는 차례대로 카드를 놓아 보세요.', toolOptions: { center: '닭이 자라요', cards: [c('달걀', 'egg'), c('병아리', 'chick'), { id: '닭', text: '다 자란 닭' }] },
                target: { order: ['달걀', '병아리', '닭'], cyclic: true }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 찾은 생물 가운데 다음 시간에 화단에서 직접 찾아보고 싶은 것은 무엇이에요?" 출구 첫 문항에서 의자를 \'살아 있어요\'에 넣은 학생에게는 "의자가 물을 먹고 자랄까요?"라고 다시 묻는다. 다음 시간에는 생물이 어디에 사는지 살펴본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '교실 창가에서 본 것', slots: ['살아 있어요', '살아 있지 않아요'], cards: [c('까치', 'bird'), '해바라기', '의자'] }, prompt: '교실 창가에서 본 것을 살아 있는 것과 아닌 것으로 나누어 보세요.', target: { sort: { '살아 있어요': ['까치', '해바라기'], '살아 있지 않아요': ['의자'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '살아 있는 것은 무엇인가요?', options: ['구름', '달팽이', '공'], answer: 1, difficulty: 0.1, explain: '달팽이는 먹이를 먹고 자라요. 구름과 공은 움직여도 자라지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '화단에서 찾은 생물',
      items: [
        { type: 'choice', prompt: '살아 있는 것에 ○ 하세요.', options: ['미끄럼틀', '개미', '모래', '물뿌리개'], answer: '개미' },
        { type: 'check', prompt: '살아 있는 것에 모두 ✓ 하세요.', options: ['민들레', '바람', '참새', '돌멩이', '토끼풀'] },
        { type: 'table', prompt: '화단에서 찾은 생물의 이름을 쓰세요.', columns: ['동물', '식물'], rows: 2 },
        { type: 'draw', prompt: '화단에서 만나고 싶은 생물을 그려 보세요.' },
      ],
      easy: {
        note: '자라고, 물과 먹이가 있어야 사는 것이 생물이에요.',
        items: [
          { type: 'choice', prompt: '살아 있는 것에 ○ 하세요.', options: ['참새', '그네'], answer: '참새' },
          { type: 'choice', prompt: '살아 있는 것에 ○ 하세요.', options: ['돌멩이', '민들레'], answer: '민들레' },
          { type: 'draw', prompt: '화단에서 만나고 싶은 생물을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '움직이지만 살아 있지 않은 카드(구름)와 판에 놓지 않을 카드(돌멩이)가 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 움직이면 살아 있다고 여긴다(바람·구름·그네) → "자라나요? 먹이와 물이 필요해요?" 두 물음으로 따진다. ② 식물은 생물이 아니라고 여긴다 → 민들레가 씨에서 꽃이 되는 차례를 함께 따라간다. ③ 생물 이름을 몰라 "벌레"라고만 한다 → 이름을 함께 붙여 주고 칠판 생물 이름표에 더한다.',
  }));

  lessons.push(L(2, {
    title: '생물과 사는 곳을 짝 지어 보기',
    objective: '학교 둘레의 생물을 그 생물이 사는 곳과 짝 짓고, 그곳에서 사는 까닭을 한 가지 말할 수 있다.',
    illustration: ART('a school garden cross-section showing an earthworm in the soil, tadpoles in a small pond and a magpie nest on a tree branch', '누가 어디에 살까요?', [
      { motif: 'tree', x: 380, y: 210 }, { motif: 'bird', x: 360, y: 110 }, { motif: 'wave', x: 120, y: 236 }]),
    safety: OUTSIDE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"지렁이를 물속에 넣으면 어떻게 될까요? 물고기를 흙 속에 넣으면요?" 짧게 대답을 듣는다. "생물마다 살기 좋은 곳이 달라요. 오늘은 생물과 사는 곳을 짝 지어 봐요." 시연 단추로 \'흙 속\' 자리에 지렁이 카드가 놓이는 모습을 보여 준다. 화단 둘레를 5분 동안 함께 걸으며 돌 밑, 꽃 위, 나뭇가지를 살펴보고 들어온다.',
        student: '화단을 걸으며 돌 밑, 꽃 위, 나뭇가지에서 무엇을 보았는지 기억해 와요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '누가 어디에?', slots: [{ id: 's1', label: '흙 속' }], cards: ['지렁이', '까치'], shuffle: false }, sequence: [{ match: { s1: '지렁이' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 사는 곳과 생물 짝 짓기', minutes: 14, tool: 'mindmap',
            teacher: '"이 생물을 어디에서 보았나요? 다른 곳에서도 살 수 있을까요?" 산책에서 본 것을 근거로 대게 한다. 나비와 벌처럼 같은 곳에 오는 생물은 한 문항에 함께 넣지 않았다는 것을 교사가 알고, 학생이 "개미는 돌 밑에도 있어요"처럼 말하면 맞다고 인정하고 카드에 쓰인 곳을 다시 읽게 한다.',
            task: '사는 곳 옆에 그곳에 사는 생물 카드를 하나씩 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '사는 곳마다 그곳에 사는 생물 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누가 어디에 살까?', slots: [{ id: 's1', label: '흙 속' }, { id: 's2', label: '연못 물속' }, { id: 's3', label: '나뭇가지 위 둥지' }], cards: ['지렁이', c('올챙이', 'tadpole'), c('까치', 'bird')] },
                target: { match: { s1: '지렁이', s2: '올챙이', s3: '까치' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['지렁이', c('올챙이', 'tadpole'), c('까치', 'bird'), '고래'] } } } },
              { prompt: '세 곳에 사는 생물 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누가 어디에 살까?', slots: [{ id: 's1', label: '꽃 위' }, { id: 's2', label: '거미줄' }, { id: 's3', label: '축축한 돌 밑' }], cards: [c('나비', 'butterfly'), '거미', '공벌레'] },
                target: { match: { s1: '나비', s2: '거미', s3: '공벌레' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: [c('나비', 'butterfly'), '거미', '공벌레', '금붕어'] } } } },
              { prompt: '땅에서 사는 생물과 물에서 사는 생물로 나누어 보세요.', toolOptions: { topic: '어디에 살까?', slots: ['땅에서 살아요', '물에서 살아요'], cards: ['개미', '지렁이', '송사리', c('올챙이', 'tadpole')] },
                target: { sort: { '땅에서 살아요': ['개미', '지렁이'], '물에서 살아요': ['송사리', '올챙이'] } }, difficulty: 0.15,
                predict: { q: '올챙이를 땅 위에 두면 어떻게 될까요?', options: ['잘 살아요', '살기 힘들어요'], answer: 1 },
                conclude: '올챙이는 물속에서 숨을 쉬어요. 생물마다 살기 좋은 곳이 따로 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그곳에 사는 까닭 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"지렁이는 왜 흙 속에 살까요?" 대답이 막히면 "지렁이는 무엇을 먹을까요?"로 바꾸어 묻는다. 까닭 카드를 이은 뒤 "~해서 ~에 살아요"라는 문장으로 짝에게 말하게 한다.',
            task: '생물이 사는 곳을 읽고, 그곳에 사는 까닭 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생물마다 그곳에 사는 까닭 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 거기 살까?', slots: [{ id: 's1', label: '지렁이는 흙 속에 살아요' }, { id: 's2', label: '물고기는 물속에 살아요' }, { id: 's3', label: '새는 나무에 둥지를 지어요' }], cards: ['흙 속 썩은 잎을 먹어요', '물속에서 숨을 쉬어요', '알과 새끼를 지켜요'] },
                target: { match: { s1: '흙 속 썩은 잎을 먹어요', s2: '물속에서 숨을 쉬어요', s3: '알과 새끼를 지켜요' } }, difficulty: 0.2 },
              { prompt: '두 생물이 그곳에 자주 보이는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 거기 있을까?', slots: [{ id: 's1', label: '달팽이는 비 온 뒤 잘 보여요' }, { id: 's2', label: '나비는 꽃에 자주 앉아요' }], cards: ['축축한 곳을 좋아해요', '꽃의 꿀을 먹어요'] },
                target: { match: { s1: '축축한 곳을 좋아해요', s2: '꽃의 꿀을 먹어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['축축한 곳을 좋아해요', '꽃의 꿀을 먹어요', '추운 곳을 좋아해요'] } } } },
              { prompt: '흙 속에 집이 있는 생물만 골라 보세요.', toolOptions: { mode: 'pick', topic: '흙 속에 집이 있어요', cards: ['지렁이', '개미', '송사리', c('참새', 'bird')] },
                target: { pick: ['지렁이', '개미'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 학교에서 가장 많은 생물이 사는 곳은 어디였을까요?" 두세 명의 생각을 듣는다. 출구 첫 문항에서 짝을 바꾸어 놓은 학생은 산책에서 본 곳을 다시 떠올리게 한다. 다음 시간에는 생물이 사람에게 주는 도움을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '누가 어디에 살까?', slots: [{ id: 'e1', label: '냇물 속' }, { id: 'e2', label: '높은 나무 위' }], cards: ['송사리', c('까치', 'bird')] }, prompt: '두 곳에 사는 생물 카드를 이어 보세요.', target: { match: { e1: '송사리', e2: '까치' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '달팽이가 비 온 뒤에 잘 보이는 까닭은 무엇일까요?', options: ['축축한 곳을 좋아해서', '추운 곳을 좋아해서', '물속에서 숨을 쉬어서'], answer: 0, difficulty: 0.15, explain: '달팽이는 몸이 마르지 않게 축축한 곳을 좋아해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '누가 어디에 살까요',
      items: [
        { type: 'figure', wide: true, prompt: '생물과 사는 곳을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어디에 살까?', slots: [{ id: 's1', label: '흙 속' }, { id: 's2', label: '연못 물속' }], cards: ['올챙이', '지렁이'] }, caption: '' }], answer: '흙 속-지렁이, 연못 물속-올챙이' },
        { type: 'choice', prompt: '물에서 사는 생물에 ○ 하세요.', options: ['개미', '송사리', '참새'], answer: '송사리' },
        { type: 'blank', prompt: '새는 알과 새끼를 지키려고 나무에 (        )을 지어요.', answer: '둥지' },
        { type: 'short', prompt: '화단 산책에서 본 생물과 그 생물이 있던 곳을 쓰세요.' },
      ],
      easy: {
        note: '그 생물을 어디에서 보았는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '흙 속에 사는 생물에 ○ 하세요.', options: ['지렁이', '까치'], answer: '지렁이' },
          { type: 'choice', prompt: '물에서 사는 생물에 ○ 하세요.', options: ['송사리', '나비'], answer: '송사리' },
          { type: 'draw', prompt: '산책에서 본 생물을 그 곳과 함께 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '학교에 살지 않는 생물(고래·금붕어)이나 틀린 까닭 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "개미는 어디에나 있어요"처럼 사는 곳을 하나로 정하기 어려워한다 → 맞는 말이라고 인정하고 카드에 쓰인 곳 가운데 가장 알맞은 곳을 고르게 한다. ② 사는 곳과 까닭을 섞는다 → "어디에?"와 "왜?"를 칠판에 나누어 쓴다. ③ 산책 중 생물을 잡으려 한다 → 눈으로만 보고 제자리에 두는 약속을 나가기 전에 다시 말한다.',
  }));

  lessons.push(L(3, {
    title: '생물이 사람에게 주는 도움 찾기',
    objective: '나무·벌·지렁이 같은 생물이 사람에게 주는 도움을 찾아 짝 짓고, 그 도움을 문장으로 말할 수 있다.',
    illustration: ART('children resting in the shade of a big tree, a bee visiting an apple blossom and an earthworm under the soil of a vegetable patch', '생물이 주는 선물', [
      { motif: 'tree', x: 120, y: 206, s: 1.2 }, { motif: 'flower', x: 330, y: 226 }, { motif: 'leaf', x: 400, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"오늘 아침에 먹은 것 가운데 생물에게서 온 것이 있나요?" 밥, 달걀, 우유, 과일처럼 대답이 나오면 칠판에 적는다. "먹을 것 말고도 생물이 우리에게 주는 것이 또 있어요. 더운 날 운동장 나무 아래는 어땠나요?" 시연 단추로 나무 옆에 \'그늘을 만들어 줘요\' 카드가 놓이는 모습을 보여 준다.',
        student: '오늘 먹은 것 가운데 생물에게서 온 것을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '생물이 주는 도움', slots: [{ id: 's1', label: '나무' }], cards: ['그늘을 만들어 줘요', '눈을 내려 줘요'], shuffle: false }, sequence: [{ match: { s1: '그늘을 만들어 줘요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 생물과 도움 짝 짓기', minutes: 14, tool: 'mindmap',
            teacher: '"이 생물이 없으면 우리에게 무엇이 없어질까요?" 거꾸로 물어 도움을 찾게 한다. 지렁이나 거미를 징그럽다고 하는 학생에게 "징그러워 보여도 우리를 돕는 생물이 있어요. 무엇을 돕는지 찾아볼까요?"라고 말한다.',
            task: '생물 옆에 그 생물이 사람에게 주는 도움 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생물마다 사람에게 주는 도움 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '생물이 주는 도움', slots: [{ id: 's1', label: '나무', motif: 'tree' }, { id: 's2', label: '벌' }, { id: 's3', label: '닭' }], cards: ['그늘을 만들어 줘요', '꿀을 모아 줘요', '달걀을 낳아 줘요'] },
                target: { match: { s1: '그늘을 만들어 줘요', s2: '꿀을 모아 줘요', s3: '달걀을 낳아 줘요' } }, difficulty: 0.1 },
              { prompt: '작은 생물이 주는 도움 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '작은 생물의 도움', slots: [{ id: 's1', label: '지렁이' }, { id: 's2', label: '무당벌레' }, { id: 's3', label: '거미' }], cards: ['흙을 부드럽게 해요', '진딧물을 먹어 채소를 지켜요', '모기와 파리를 잡아요'] },
                target: { match: { s1: '흙을 부드럽게 해요', s2: '진딧물을 먹어 채소를 지켜요', s3: '모기와 파리를 잡아요' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['흙을 부드럽게 해요', '진딧물을 먹어 채소를 지켜요', '모기와 파리를 잡아요', '우유를 만들어 줘요'] } } } },
              { prompt: '생물이 주는 도움을 먹을 것과 쉴 곳으로 나누어 보세요.', toolOptions: { topic: '생물이 주는 것', slots: ['먹을 것을 줘요', '쉴 곳을 줘요'], cards: ['사과나무의 사과', '젖소의 우유', '느티나무 그늘', '푹신한 잔디밭'] },
                target: { sort: { '먹을 것을 줘요': ['사과나무의 사과', '젖소의 우유'], '쉴 곳을 줘요': ['느티나무 그늘', '푹신한 잔디밭'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '생물이 주는 도움을 먹을 것과 쉴 곳으로 나누어 보세요. 생물이 주지 않는 것은 남겨요.', toolOptions: { cards: ['사과나무의 사과', '젖소의 우유', '느티나무 그늘', '푹신한 잔디밭', '플라스틱 의자'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도움을 문장으로 말하기', minutes: 12, tool: 'story',
            teacher: '"벌이 꽃가루를 옮기지 않으면 사과가 열릴까요?" 꽃이 열매가 되려면 꽃가루가 옮겨져야 한다는 것을 사과꽃 사진이나 그림으로 짚는다. 빈칸을 채운 뒤 문장 전체를 소리 내어 읽게 한다.',
            task: '문장의 빈칸에 알맞은 낱말 카드를 넣어요. 남는 카드도 있어요.',
            levels: CARD_LV,
            items: [
              { prompt: '벌이 주는 도움을 말하는 문장을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['열매', '돌', '꿀'], slots: [{ id: 'f1', who: '벌', label: '벌이 꽃가루를 옮겨 주어 ___가 열려요.' }, { id: 'f2', who: '벌', label: '벌집에서 달콤한 ___을 얻어요.' }] },
                target: { fill: { f1: '열매', f2: '꿀' } }, difficulty: 0.15 },
              { prompt: '나무가 주는 도움을 말하는 문장을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['그늘', '공기', '소금'], slots: [{ id: 'f1', who: '나무', label: '여름에 나무 아래 ___에서 쉬어요.' }, { id: 'f2', who: '나무', label: '나뭇잎은 맑은 ___를 만들어요.' }] },
                target: { fill: { f1: '그늘', f2: '공기' } }, difficulty: 0.2 },
              { prompt: '지렁이가 주는 도움을 말하는 문장을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['부드러워', '딱딱해', '채소'], slots: [{ id: 'f1', who: '지렁이', label: '지렁이가 흙을 뚫고 다니면 흙이 ___져요.' }, { id: 'f2', who: '지렁이', label: '그 흙에서 ___가 잘 자라요.' }] },
                target: { fill: { f1: '부드러워', f2: '채소' } }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 알게 된 도움 가운데 가장 놀라웠던 것은 무엇이에요?" 지렁이·거미처럼 작은 생물의 도움을 고른 학생의 말을 칭찬한다. 출구 둘째 문항을 틀린 학생은 사과꽃과 벌 그림을 다시 보게 한다. 다음 시간에는 거꾸로 사람이 생물을 돕는 일을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '생물이 주는 도움', slots: [{ id: 'e1', label: '젖소' }, { id: 'e2', label: '누에' }], cards: ['우유를 줘요', '비단실을 줘요'] }, prompt: '두 생물이 주는 도움 카드를 이어 보세요.', target: { match: { e1: '우유를 줘요', e2: '비단실을 줘요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '벌이 꽃가루를 옮겨 주면 어떤 일이 생길까요?', options: ['열매가 열려요', '눈이 내려요', '흙이 딱딱해져요'], answer: 0, difficulty: 0.15, explain: '꽃가루가 옮겨져야 꽃이 지고 열매가 맺혀요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '생물이 주는 도움',
      items: [
        { type: 'figure', wide: true, prompt: '생물과 그 생물이 주는 도움을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '생물이 주는 도움', slots: [{ id: 's1', label: '나무' }, { id: 's2', label: '닭' }], cards: ['달걀을 낳아 줘요', '그늘을 만들어 줘요'] }, caption: '' }], answer: '나무-그늘을 만들어 줘요, 닭-달걀을 낳아 줘요' },
        { type: 'blank', prompt: '지렁이가 다니면 흙이 (        )져요.', answer: '부드러워' },
        { type: 'choice', prompt: '진딧물을 먹어 채소를 지켜 주는 생물에 ○ 하세요.', options: ['무당벌레', '송사리', '참새'], answer: '무당벌레' },
        { type: 'short', prompt: '내가 고마운 생물 하나와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '그 생물이 없으면 무엇이 없어질지 떠올려요.',
        items: [
          { type: 'choice', prompt: '꿀을 모아 주는 생물에 ○ 하세요.', options: ['벌', '거미'], answer: '벌' },
          { type: 'choice', prompt: '그늘을 만들어 주는 생물에 ○ 하세요.', options: ['나무', '닭'], answer: '나무' },
          { type: 'draw', prompt: '고마운 생물을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 문장 빈칸에는 남는 카드가 하나씩 있어요.',
      challenge: '맞지 않는 도움 카드와 생물이 주지 않는 것(플라스틱 의자)이 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 먹을 것만 도움이라고 여긴다 → 그늘·맑은 공기·부드러운 흙처럼 눈에 덜 띄는 도움을 짚는다. ② 벌레는 모두 해롭다고 여긴다 → 무당벌레·거미·지렁이의 도움을 먼저 보여 준다. ③ 누에·비단실을 처음 듣는다 → 출구 질문 전에 그림 한 장으로 짧게 소개한다.',
  }));

  lessons.push(L(4, {
    title: '생물을 돕는 일과 힘들게 하는 일 나누기',
    objective: '학교와 동네에서 하는 행동을 생물을 돕는 일과 힘들게 하는 일로 나누고, 생물을 돕는 행동을 고를 수 있다.',
    illustration: ART('a child hanging a bird feeder on a tree while another child watering flowers, with a small butterfly nearby', '생물을 도와요', [
      { motif: 'tree', x: 110, y: 208 }, { motif: 'bird', x: 150, y: 100 }, { motif: 'flower', x: 340, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 생물이 우리를 돕는 일을 찾았어요. 그럼 우리는 생물에게 무엇을 해 줄 수 있을까요?" 대답을 두세 개 듣는다. "생물을 돕는 줄 알았는데 힘들게 하는 일도 있어요. 잠자리를 잡아 통에 오래 넣어 두면 잠자리는 어떨까요?" 시연 단추로 \'화분에 물을 줘요\' 카드가 \'생물을 도와요\' 칸에 놓이는 모습을 보여 준다.',
        student: '내가 생물에게 해 준 일이 있으면 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '내가 하는 일', slots: ['생물을 도와요', '생물을 힘들게 해요'], cards: ['화분에 물을 줘요', '꽃을 꺾어요'], shuffle: false }, sequence: [{ sort: { '생물을 도와요': ['화분에 물을 줘요'], '생물을 힘들게 해요': ['꽃을 꺾어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 돕는 일, 힘들게 하는 일 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이렇게 하면 생물은 어떤 마음일까요? 생물이 말을 할 수 있다면 뭐라고 할까요?" 생물의 자리에서 생각하게 한다. 재미로 하는 일(잠자리 잡기)도 오래 가두면 생물이 힘들다는 것을 짚는다. 셋째 문항의 점심 카드처럼 생물과 상관없는 일은 어느 칸에도 넣지 않는다고 알려 준다.',
            task: '카드를 읽고 생물을 돕는 일과 힘들게 하는 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '화단에서 하는 일을 생물을 돕는 일과 힘들게 하는 일로 나누어 보세요.', toolOptions: { topic: '화단에서 하는 일', slots: ['생물을 도와요', '생물을 힘들게 해요'], cards: ['화분에 물을 줘요', '새 먹이통을 달아요', '꽃을 꺾어요', '개미집을 밟아요'] },
                target: { sort: { '생물을 도와요': ['화분에 물을 줘요', '새 먹이통을 달아요'], '생물을 힘들게 해요': ['꽃을 꺾어요', '개미집을 밟아요'] } }, difficulty: 0.05 },
              { prompt: '동네 공원에서 하는 일을 나누어 보세요.', toolOptions: { topic: '공원에서 하는 일', slots: ['생물을 도와요', '생물을 힘들게 해요'], cards: ['떨어진 쓰레기를 주워요', '나뭇가지에 매달려요', '잡은 올챙이를 연못에 돌려보내요', '잠자리를 잡아 통에 가둬 둬요'] },
                target: { sort: { '생물을 도와요': ['떨어진 쓰레기를 주워요', '잡은 올챙이를 연못에 돌려보내요'], '생물을 힘들게 해요': ['나뭇가지에 매달려요', '잠자리를 잡아 통에 가둬 둬요'] } }, difficulty: 0.15 },
              { prompt: '학교에서 하는 일을 나누어 보세요. 생물과 상관없는 일은 남겨요.', toolOptions: { topic: '학교에서 하는 일', slots: ['생물을 도와요', '생물을 힘들게 해요'], cards: ['잔디밭 안에 들어가 뛰어요', '텃밭의 잡초를 뽑아요', '점심을 먹어요', '연못에 돌을 던져요'] },
                target: { sort: { '생물을 도와요': ['텃밭의 잡초를 뽑아요'], '생물을 힘들게 해요': ['잔디밭 안에 들어가 뛰어요', '연못에 돌을 던져요'] } }, difficulty: 0.2,
                predict: { q: '"점심을 먹어요" 카드는 어디에 놓을까요?', options: ['도와요', '힘들게 해요', '안 놓아요'], answer: 2 },
                conclude: '생물에게 아무 일도 생기지 않는 일은 돕는 일도 힘들게 하는 일도 아니에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이럴 때 어떻게 할까', minutes: 13, tool: 'emotion',
            teacher: '"내가 그 자리에 있다면 어떻게 할래요? 그렇게 하면 생물은 어떻게 될까요?" 보기를 고르면 결과를 소리 내어 읽게 한다. 둥지를 만지고 싶어 하는 학생에게 사람 냄새가 남거나 어미 새가 놀라 둥지를 떠날 수 있다는 것을 알려 준다.',
            task: '이야기를 읽고 생물을 돕는 행동을 골라 결과를 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '화단에 사탕 껍질이 떨어져 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '하준이가 화단 꽃 사이에서 사탕 껍질을 보았어요.', who: '하준', choices: [
                { id: 'pick', text: '주워서 쓰레기통에 버려요', result: '화단이 깨끗해지고 꽃이 잘 자라요.', mood: '뿌듯함' },
                { id: 'pass', text: '내가 버린 게 아니니 지나가요', result: '껍질이 그대로 남아 화단이 지저분해요.', mood: '속상함', why: '내가 버리지 않았어도 화단의 꽃에게는 똑같이 해로워요.' },
                { id: 'kick', text: '발로 차서 흙 속에 묻어요', result: '썩지 않는 껍질이 흙 속에 남아요.', mood: '걱정', why: '사탕 껍질은 흙 속에서도 썩지 않아요.' }] }, target: { choice: 'pick' }, difficulty: 0.1 },
              { prompt: '친구가 줄지어 가는 개미를 밟으려 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '운동장 가에 개미들이 줄지어 먹이를 옮기고 있어요. 준호가 발을 들었어요.', who: '준호', choices: [
                { id: 'stop', text: '"개미가 먹이를 옮기고 있어. 비켜 가자" 하고 말해요', result: '개미들이 먹이를 집으로 무사히 옮겨요.', mood: '편안함' },
                { id: 'join', text: '나도 같이 밟아요', result: '개미들이 다치고 집에 먹이를 못 가져가요.', mood: '속상함', why: '개미도 집에서 기다리는 친구들이 있는 생물이에요.' },
                { id: 'water', text: '물을 부어 개미 줄을 흩어요', result: '개미들이 길을 잃고 흩어져요.', mood: '걱정', why: '물을 부으면 개미가 길을 잃어요.' }] }, target: { choice: 'stop' }, difficulty: 0.1 },
              { prompt: '나무 위에서 새 둥지를 찾았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '서아가 학교 나무 위에서 작은 새 둥지를 찾았어요. 둥지 안에 알이 있어요.', who: '서아', choices: [
                { id: 'take', text: '알을 꺼내 교실에서 길러요', result: '어미 새가 알을 찾지 못해요.', mood: '슬픔', why: '알은 어미 새가 품어야 깨어나요.' },
                { id: 'look', text: '멀리서 조용히 보고 선생님께 알려요', result: '어미 새가 돌아와 알을 품어요.', mood: '기쁨' },
                { id: 'touch', text: '가까이 가서 둥지를 만져 봐요', result: '어미 새가 놀라 둥지를 떠날 수 있어요.', mood: '걱정', why: '사람이 가까이 오면 어미 새가 놀라요.' }] }, target: { choice: 'look' }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘부터 내가 할 수 있는 생물 돕기 한 가지는 무엇이에요?" 손을 들어 두세 명이 말하게 한다. 출구 첫 문항에서 상관없는 카드를 바구니에 넣은 학생에게는 "그렇게 하면 생물에게 무슨 일이 생겨요?"라고 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '생물을 도와요', cards: ['새 물그릇을 채워요', '꽃밭에 울타리를 쳐요', '나뭇잎을 뜯어 던져요', '친구와 줄넘기를 해요'] }, prompt: '생물을 돕는 일만 골라 바구니에 넣어 보세요.', target: { pick: ['새 물그릇을 채워요', '꽃밭에 울타리를 쳐요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '잠자리를 잡아 통에 오래 가두면 잠자리는 어떨까요?', options: ['신나요', '힘들어요', '아무렇지 않아요'], answer: 1, difficulty: 0.1, explain: '좁은 통에서는 날지도 먹지도 못해 잠자리가 힘들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '생물을 돕는 일',
      items: [
        { type: 'table', prompt: '생물을 돕는 일과 힘들게 하는 일을 하나씩 쓰세요.', columns: ['돕는 일', '힘들게 하는 일'], rows: 2 },
        { type: 'choice', prompt: '새 둥지를 찾았을 때 알맞은 행동에 ○ 하세요.', options: ['알을 꺼내요', '멀리서 보고 알려요', '둥지를 만져요'], answer: '멀리서 보고 알려요' },
        { type: 'check', prompt: '생물을 돕는 일에 모두 ✓ 하세요.', options: ['화분에 물 주기', '꽃 꺾기', '쓰레기 줍기', '개미집 밟기'] },
        { type: 'draw', prompt: '내가 생물을 돕는 모습을 그리세요.' },
      ],
      easy: {
        note: '그렇게 하면 생물이 웃을지, 울지 생각해요.',
        items: [
          { type: 'choice', prompt: '생물을 돕는 일에 ○ 하세요.', options: ['꽃 꺾기', '물 주기'], answer: '물 주기' },
          { type: 'choice', prompt: '개미 줄을 보면 어떻게 할까요?', options: ['비켜 가요', '밟아요'], answer: '비켜 가요' },
          { type: 'draw', prompt: '내가 생물을 돕는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 고른 행동의 결과가 바로 보여요.',
      base: '모두 나눈 뒤 확인을 눌러요. 셋째 문항에는 생물과 상관없는 카드가 하나 있어요.',
      challenge: '확인 전에 고른 행동의 결과를 짝에게 먼저 말해 보고 눌러요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생물을 좋아해서 하는 일(둥지 만지기, 올챙이 집에 데려가기)은 돕는 일이라고 여긴다 → "그 생물에게는 어떨까?"로 생물의 자리에서 따지게 한다. ② 내가 버리지 않은 쓰레기는 주울 까닭이 없다고 여긴다 → 쓰레기가 누구 것이든 생물에게는 똑같이 해롭다는 것을 짚는다. ③ 잠자리 잡기를 아예 금지로 받아들인다 → 잠깐 보고 바로 놓아주는 것과 오래 가두는 것을 견준다.',
  }));

  lessons.push(L(5, {
    title: '자연 속 돌고 도는 고리 이어 보기',
    objective: '낙엽·흙·나무처럼 자연에서 서로 이어진 일을 차례대로 잇고, 사람과 생물이 주고받는 것을 나눌 수 있다.',
    illustration: ART('a circle of paper leaves falling from a tree onto soil where an earthworm lives, with a young sapling growing and arrows linking them in a loop', '돌고 도는 자연', [
      { motif: 'tree', x: 380, y: 206, s: 1.1 }, { motif: 'leaf', x: 110, y: 226 }, { motif: 'leaf', x: 160, y: 236, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"가을에 떨어진 나뭇잎은 다 어디로 갈까요? 해마다 떨어지는데 왜 산이 낙엽으로 가득 차지 않을까요?" 학생들의 생각을 듣는다. 시연 단추로 낙엽 → 지렁이 → 흙 → 나무 카드가 둥근 판에 놓이는 모습을 보여 주고 "그다음은?" 하며 화살표를 처음으로 따라간다. "자연에서는 하나가 끝나면 다른 것이 시작돼요."',
        student: '떨어진 나뭇잎이 어디로 가는지 내 생각을 말해 봐요.',
        demo: { tool: 'lifecycle', options: { center: '낙엽의 여행', shuffle: false, cards: [c('나뭇잎이 떨어져요', 'leaf'), '지렁이가 잎을 먹어요', '흙이 기름져요', c('나무가 잘 자라요', 'tree')] }, sequence: [{ order: ['나뭇잎이 떨어져요', '지렁이가 잎을 먹어요', '흙이 기름져요', '나무가 잘 자라요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 돌고 도는 차례 잇기', minutes: 14, tool: 'lifecycle',
            teacher: '"이 일이 일어나려면 먼저 무엇이 있어야 할까요?" 카드마다 앞의 일을 찾게 한다. 차례를 다 놓으면 \'차례대로 따라가 보기\' 단추를 눌러 "그래서 … 그래서 …" 하고 이야기로 이어 말하게 한다. 마지막 카드에서 처음으로 돌아가는 화살표를 꼭 짚는다.',
            task: '둥근 판의 자리에 일이 일어나는 차례대로 카드를 놓아요. 어느 자리에서 시작해도 차례만 맞으면 돼요.',
            levels: CARD_LV,
            items: [
              { prompt: '꽃과 벌이 이어진 차례대로 카드를 놓아 보세요.', toolOptions: { center: '꽃과 벌', cards: [c('씨가 싹을 틔워요', 'sprout'), c('꽃이 피어요', 'flower'), '벌이 꽃가루를 옮겨요', c('열매와 씨가 생겨요', 'seed')] },
                target: { order: ['씨가 싹을 틔워요', '꽃이 피어요', '벌이 꽃가루를 옮겨요', '열매와 씨가 생겨요'], cyclic: true }, difficulty: 0.2,
                hints: ['처음 일을 하나 정하고, 그 일 다음에 꼭 있어야 하는 일을 화살표 방향으로 하나씩 이어요.', '어긋난 자리 앞뒤 두 카드를 "그래서"로 이어 읽어 보세요. 말이 되지 않으면 차례가 바뀐 거예요.', '씨 → 싹 → 꽃 → 벌이 꽃가루를 옮김 → 열매와 씨 → 다시 싹, 이 차례로 돌아요.'],
                levels: { challenge: { toolOptions: { cards: [c('씨가 싹을 틔워요', 'sprout'), c('꽃이 피어요', 'flower'), '벌이 꽃가루를 옮겨요', c('열매와 씨가 생겨요', 'seed'), '눈사람을 만들어요'], slots: 4 } } } },
              { prompt: '사람과 텃밭 채소가 이어진 차례대로 카드를 놓아 보세요.', toolOptions: { center: '텃밭의 고리', cards: [c('텃밭에 씨를 심어요', 'seed'), c('채소가 자라요', 'sprout'), '사람이 채소를 먹어요', '껍질로 거름을 만들어요'] },
                target: { order: ['텃밭에 씨를 심어요', '채소가 자라요', '사람이 채소를 먹어요', '껍질로 거름을 만들어요'], cyclic: true }, difficulty: 0.25,
                hints: ['사람이 하는 일과 채소에게 일어나는 일이 번갈아 와요. 하나를 정하고 그다음 일을 찾아요.', '어긋난 카드 앞뒤를 "그래서"로 이어 읽어 보세요. 먹기 전에 무엇이 있어야 하는지 따져요.', '심어요 → 자라요 → 먹어요 → 껍질로 거름을 만들어 다시 텃밭에 줘요. 거름은 다음 씨가 자라게 도와요.'],
                predict: { q: '채소 껍질을 거름으로 만들면 어디에 쓰일까요?', options: ['쓰레기통', '텃밭 흙'], answer: 1 },
                conclude: '남은 껍질도 거름이 되어 다시 채소를 자라게 해요. 사람도 자연의 고리 안에 있어요.' },
              { prompt: '도토리와 다람쥐가 이어진 차례대로 카드를 놓아 보세요.', toolOptions: { center: '도토리의 여행', cards: [c('도토리가 떨어져요', 'seed'), '다람쥐가 땅에 묻어요', c('남은 도토리에서 싹이 터요', 'sprout'), c('참나무가 자라요', 'tree')] },
                target: { order: ['도토리가 떨어져요', '다람쥐가 땅에 묻어요', '남은 도토리에서 싹이 터요', '참나무가 자라요'], cyclic: true }, difficulty: 0.25,
                hints: ['떨어진 것이 누구를 만나고, 그 뒤에 무엇이 되는지 화살표를 따라 이야기로 말해 보세요.', '어긋난 카드 앞뒤를 이어 읽어 보세요. 싹이 트려면 먼저 땅속에 들어가야 해요.', '떨어진 도토리 → 다람쥐가 묻음 → 잊어버린 도토리에서 싹 → 참나무 → 다시 도토리가 떨어져요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 사람과 생물이 주고받는 것', minutes: 13, tool: 'mindmap',
            teacher: '"사람이 상추에게 해 주는 것은 무엇이고, 상추가 사람에게 주는 것은 무엇일까요?" 화살표 두 개를 칠판에 그려 주고받기를 보여 준다. 한쪽만 주는 것이 아니라 서로 주고받는다는 것을 짚는다.',
            task: '카드를 읽고 사람이 생물에게 해 주는 것과 생물이 사람에게 주는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '사람과 상추가 주고받는 것을 나누어 보세요.', toolOptions: { topic: '사람과 상추', slots: ['사람이 상추에게', '상추가 사람에게'], cards: ['물을 줘요', '잡초를 뽑아 줘요', '싱싱한 잎을 줘요'] },
                target: { sort: { '사람이 상추에게': ['물을 줘요', '잡초를 뽑아 줘요'], '상추가 사람에게': ['싱싱한 잎을 줘요'] } }, difficulty: 0.15 },
              { prompt: '사람과 새가 주고받는 것을 나누어 보세요.', toolOptions: { topic: '사람과 새', slots: ['사람이 새에게', '새가 사람에게'], cards: ['먹이통에 씨앗을 넣어 줘요', '둥지 나무를 베지 않아요', '나무의 벌레를 잡아먹어요', '고운 노랫소리를 들려줘요'] },
                target: { sort: { '사람이 새에게': ['먹이통에 씨앗을 넣어 줘요', '둥지 나무를 베지 않아요'], '새가 사람에게': ['나무의 벌레를 잡아먹어요', '고운 노랫소리를 들려줘요'] } }, difficulty: 0.2 },
              { prompt: '사람과 지렁이가 주고받는 것을 나누어 보세요.', toolOptions: { topic: '사람과 지렁이', slots: ['사람이 지렁이에게', '지렁이가 사람에게'], cards: ['길 위 지렁이를 흙으로 옮겨 줘요', '텃밭 흙을 부드럽게 해 줘요', '화단에 약을 뿌리지 않아요'] },
                target: { sort: { '사람이 지렁이에게': ['길 위 지렁이를 흙으로 옮겨 줘요', '화단에 약을 뿌리지 않아요'], '지렁이가 사람에게': ['텃밭 흙을 부드럽게 해 줘요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '사람과 지렁이가 주고받는 것을 나누어 보세요. 주고받는 것이 아닌 카드는 남겨요.', toolOptions: { cards: ['길 위 지렁이를 흙으로 옮겨 줘요', '텃밭 흙을 부드럽게 해 줘요', '화단에 약을 뿌리지 않아요', '지렁이는 눈이 없어요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 이은 고리 가운데 사람이 들어 있는 고리는 무엇이었나요?" 텃밭 고리를 떠올리게 한다. 출구 첫 문항의 차례가 끊긴 학생은 카드 두 장을 "그래서"로 이어 읽게 한다. 다음 시간에는 고리에서 생물 하나가 사라지면 어떻게 될지 생각한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'lifecycle', options: { center: '사과나무의 고리', cards: [c('사과꽃이 피어요', 'flower'), '벌이 꽃가루를 옮겨요', c('사과가 열려요', 'tree'), c('사과 씨가 땅에 떨어져요', 'seed')] }, prompt: '사과나무와 벌이 이어진 차례대로 카드를 놓아 보세요.', target: { order: ['사과꽃이 피어요', '벌이 꽃가루를 옮겨요', '사과가 열려요', '사과 씨가 땅에 떨어져요'], cyclic: true }, difficulty: 0.2 },
          { type: 'choice', prompt: '떨어진 나뭇잎을 지렁이가 먹으면 흙은 어떻게 될까요?', options: ['기름진 흙이 돼요', '모래가 돼요', '아무 일도 없어요'], answer: 0, difficulty: 0.15, explain: '지렁이가 잎을 먹고 흙을 섞어 나무가 잘 자라는 기름진 흙이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '돌고 도는 자연',
      items: [
        { type: 'figure', wide: true, prompt: '낙엽의 여행을 생각하며 빈 자리에 알맞은 말을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '낙엽의 여행', printCards: false, cards: ['나뭇잎이 떨어져요', '지렁이가 잎을 먹어요', '흙이 기름져요', '나무가 잘 자라요'] }, state: { at: { '나뭇잎이 떨어져요': 0, '흙이 기름져요': 2 } }, caption: '' }], answer: '지렁이가 잎을 먹어요, 나무가 잘 자라요' },
        { type: 'table', prompt: '사람과 텃밭 채소가 주고받는 것을 쓰세요.', columns: ['사람이 채소에게', '채소가 사람에게'], rows: 2 },
        { type: 'choice', prompt: '다람쥐가 묻고 잊어버린 도토리는 어떻게 될까요?', options: ['돌이 돼요', '싹이 터요', '사라져요'], answer: '싹이 터요' },
        { type: 'short', prompt: '오늘 이은 고리 가운데 하나를 골라 "그래서"를 넣어 이야기로 쓰세요.' },
      ],
      easy: {
        note: '앞의 일이 있어야 뒤의 일이 생겨요.',
        items: [
          { type: 'choice', prompt: '꽃이 핀 다음에 오는 일에 ○ 하세요.', options: ['벌이 꽃가루를 옮겨요', '씨를 심어요'], answer: '벌이 꽃가루를 옮겨요' },
          { type: 'choice', prompt: '사람이 상추에게 해 주는 일에 ○ 하세요.', options: ['물 주기', '잎 주기'], answer: '물 주기' },
          { type: 'draw', prompt: '낙엽이 다시 나무를 자라게 하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 어느 자리에서 시작해도 차례만 맞으면 정답이에요.',
      challenge: '고리와 상관없는 카드가 섞여 나와 판에 놓지 않고 골라내야 해요. 주고받는 것이 아닌 사실 카드도 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 고리를 끝이 있는 줄로 생각한다 → 마지막 카드에서 처음으로 가는 화살표를 손가락으로 따라가게 한다. ② 사람은 자연 밖에 있다고 여긴다 → 텃밭 고리에서 사람이 하는 일을 짚는다. ③ "다람쥐가 도토리를 다 먹으면?"처럼 되묻는다 → 다람쥐가 묻어 두고 잊는 도토리가 있다는 것을 알려 주고 좋은 질문이라고 칭찬한다.',
  }));

  lessons.push(L(6, {
    title: '생물이 사라지면 생길 일 생각하기',
    objective: '둘레의 생물 하나가 사라졌을 때 사람과 다른 생물에게 생길 일을 짝 짓고, 사람만 잘 살면 된다는 생각에 까닭을 들어 답할 수 있다.',
    illustration: ART('a quiet vegetable garden with no bees and drooping plants on one side, and a lively garden with bees, ladybugs and birds on the other side', '벌이 사라지면?', [
      { motif: 'flower', x: 110, y: 226, color: 'lavender' }, { motif: 'flower', x: 360, y: 226 }, { motif: 'bird', x: 380, y: 96 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어느 날 우리 동네에서 벌이 모두 사라졌어요. 사람에게는 아무 일도 없을까요?" 손을 들어 \'아무 일도 없어요\'와 \'일이 생겨요\'에 표를 받는다. 시연 단추로 \'벌이 사라지면\' 옆에 \'열매가 적게 열려요\' 카드가 놓이는 모습을 보여 준다. "지난 시간에 이은 고리를 떠올려 보세요. 고리 하나가 빠지면 어떻게 될까요?"',
        student: '벌이 모두 사라지면 무슨 일이 생길지 내 생각을 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '사라지면?', slots: [{ id: 's1', label: '벌이 사라지면' }], cards: ['열매가 적게 열려요', '눈이 많이 와요'], shuffle: false }, sequence: [{ match: { s1: '열매가 적게 열려요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 사라지면 생기는 일 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 생물이 하던 일을 이제 누가 하지요?" 3차시에 찾은 생물의 도움을 떠올려 이어 보게 한다. 결과 카드를 이은 뒤 "그래서 사람에게는 …" 하고 한 번 더 이어 말하게 한다.',
            task: '생물이 사라졌을 때 생길 일을 카드로 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생물이 사라지면 생길 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '사라지면 생기는 일', slots: [{ id: 's1', label: '벌이 사라지면' }, { id: 's2', label: '지렁이가 사라지면' }, { id: 's3', label: '나무가 사라지면' }], cards: ['열매가 적게 열려요', '흙이 딱딱해져요', '새가 둥지를 못 지어요'] },
                target: { match: { s1: '열매가 적게 열려요', s2: '흙이 딱딱해져요', s3: '새가 둥지를 못 지어요' } }, difficulty: 0.15 },
              { prompt: '작은 생물이 사라지면 생길 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '사라지면 생기는 일', slots: [{ id: 's1', label: '무당벌레가 사라지면' }, { id: 's2', label: '거미가 사라지면' }], cards: ['진딧물이 많아져 채소가 시들어요', '모기와 파리가 많아져요'] },
                target: { match: { s1: '진딧물이 많아져 채소가 시들어요', s2: '모기와 파리가 많아져요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['진딧물이 많아져 채소가 시들어요', '모기와 파리가 많아져요', '무지개가 더 자주 떠요'] } } } },
              { prompt: '물가와 숲의 생물이 사라지면 생길 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '사라지면 생기는 일', slots: [{ id: 's1', label: '개구리가 사라지면' }, { id: 's2', label: '참새가 사라지면' }], cards: ['논에 모기가 많아져요', '애벌레가 늘어 잎을 갉아 먹어요'] },
                target: { match: { s1: '논에 모기가 많아져요', s2: '애벌레가 늘어 잎을 갉아 먹어요' } }, difficulty: 0.25,
                predict: { q: '개구리가 사라지면 사람에게도 일이 생길까요?', options: ['생겨요', '안 생겨요'], answer: 0 },
                conclude: '개구리가 모기를 덜 잡아먹으면 사람도 모기에 더 많이 물려요. 생물 하나가 사라지면 사람에게도 일이 생겨요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. "사람만 잘 살면 돼"에 답하기', minutes: 13, tool: 'emotion',
            teacher: '"민지는 사람만 잘 살면 벌레는 없어도 된다고 말했어요. 여러분은 민지에게 뭐라고 말해 줄래요?" 보기를 고른 뒤 까닭을 꼭 한 문장으로 말하게 한다. 민지를 탓하지 않고, 몰라서 한 말에는 알려 주면 된다는 것을 짚는다.',
            task: '이야기를 읽고 알맞은 말과 행동을 고르거나, 마음의 크기를 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '민지에게 어떤 말을 해 줄까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 "사람만 잘 살면 돼. 벌레는 없어도 돼."라고 말했어요.', choices: [
                { id: 'why', text: '"벌이 없으면 사과도 안 열려" 하고 알려 줘요', result: '민지가 "그렇구나, 몰랐어" 하고 고개를 끄덕여요.', mood: '고마움' },
                { id: 'agree', text: '"맞아, 벌레는 다 없어도 돼" 하고 말해요', result: '둘 다 벌레가 하는 일을 모른 채로 있어요.', mood: '걱정', why: '벌레가 사라지면 사람에게 생기는 일을 떠올려 봐요.' },
                { id: 'mock', text: '"그것도 몰라?" 하고 놀려요', result: '민지가 부끄러워 말을 안 해요.', mood: '속상함', why: '놀림을 들은 민지의 마음을 떠올려 봐요.' }] }, target: { choice: 'why' }, difficulty: 0.1 },
              { prompt: '텃밭 상추에 진딧물과 무당벌레가 함께 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호네 텃밭 상추잎에 진딧물이 붙어 있고, 무당벌레도 한 마리 앉아 있어요.', choices: [
                { id: 'all', text: '벌레를 모두 잡아 버려요', result: '진딧물을 먹어 줄 무당벌레까지 사라져요.', mood: '걱정', why: '무당벌레는 진딧물을 먹어 상추를 지켜 줘요.' },
                { id: 'keep', text: '무당벌레는 그대로 두어요', result: '무당벌레가 진딧물을 먹어 상추가 싱싱해요.', mood: '기쁨' },
                { id: 'spray', text: '약을 잔뜩 뿌려요', result: '흙 속 지렁이도 다칠 수 있어요.', mood: '걱정', why: '약은 상추를 돕는 생물까지 다치게 해요.' }] }, target: { choice: 'keep' }, difficulty: 0.2 },
              { prompt: '학교 꽃밭이 모두 뽑혀 벌과 나비가 오지 않아요. 걱정되는 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '학교 꽃밭의 꽃이 모두 뽑혀서, 날마다 오던 벌과 나비가 한 마리도 오지 않아요.', feeling: '걱정', after: '꽃밭이 다시 생기면 벌과 나비도 돌아와요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '학교 꽃밭이 모두 뽑혀 벌과 나비가 오지 않아요. 걱정되는 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 민지에게 해 줄 말을 집에 가서 가족에게도 해 볼까요?" 1~6차시 동안 알게 된 생물의 도움을 칠판 생물 이름표 옆에 붙인다. 출구 둘째 문항에서 \'아니요\'를 고른 학생 수를 세어 두고, 다음 차시 화분 돌보기를 시작할 때 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '사라지면 생기는 일', slots: [{ id: 'e1', label: '나비가 사라지면' }, { id: 'e2', label: '공벌레가 사라지면' }], cards: ['꽃가루가 덜 옮겨져요', '썩은 잎이 쌓여요'] }, prompt: '두 생물이 사라지면 생길 일을 이어 보세요.', target: { match: { e1: '꽃가루가 덜 옮겨져요', e2: '썩은 잎이 쌓여요' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '사람만 잘 살면 둘레의 생물은 없어도 될까요?', options: ['네, 없어도 돼요', '아니요, 생물이 없으면 사람도 힘들어요'], answer: 1, difficulty: 0.1, explain: '벌·지렁이·나무가 하던 일이 사라지면 사람도 먹을 것과 쉴 곳을 잃어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '생물이 사라지면',
      items: [
        { type: 'figure', wide: true, prompt: '생물이 사라지면 생길 일을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '사라지면?', slots: [{ id: 's1', label: '벌이 사라지면' }, { id: 's2', label: '지렁이가 사라지면' }], cards: ['흙이 딱딱해져요', '열매가 적게 열려요'] }, caption: '' }], answer: '벌-열매가 적게 열려요, 지렁이-흙이 딱딱해져요' },
        { type: 'choice', prompt: '텃밭의 무당벌레를 보면 어떻게 할까요?', options: ['잡아 버려요', '그대로 두어요', '약을 뿌려요'], answer: '그대로 두어요' },
        { type: 'short', prompt: '"사람만 잘 살면 돼"라고 말한 친구에게 해 줄 말을 쓰세요.' },
        { type: 'draw', prompt: '벌과 나비가 돌아온 꽃밭을 그려 보세요.' },
      ],
      easy: {
        note: '그 생물이 하던 일이 없어진다고 생각해요.',
        items: [
          { type: 'choice', prompt: '벌이 사라지면 어떻게 될까요?', options: ['열매가 적게 열려요', '열매가 많이 열려요'], answer: '열매가 적게 열려요' },
          { type: 'choice', prompt: '생물이 없어도 사람은 괜찮을까요?', options: ['괜찮아요', '사람도 힘들어요'], answer: '사람도 힘들어요' },
          { type: 'draw', prompt: '벌과 나비가 돌아온 꽃밭을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 마음 크기는 세 칸이에요.',
      base: '모두 이은 뒤 확인을 눌러요. 고른 행동의 결과를 읽고 까닭을 말해요.',
      challenge: '생물과 상관없는 결과 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사람만 잘 살면 둘레의 생물은 상관없다고 여긴다(이 단원의 핵심 오개념) → 벌·지렁이·개구리가 사라졌을 때 사람에게 오는 일까지 한 번 더 이어 말하게 한다. ② 해충은 모두 없애야 한다고 여긴다 → 무당벌레처럼 해충을 먹는 생물도 함께 사라진다는 것을 짚는다. ③ 결과를 지나치게 무섭게 상상한다 → "그래서 우리가 할 수 있는 일"을 바로 이어 말하게 한다.',
  }));

  // ───────────────────────── 7~11차시: 화분 돌보기·물과 종이 아끼기(바른 생활 실천) ─────────────────────────

  lessons.push(L(7, {
    title: '화분에 물 주는 차례 익히고 직접 해 보기',
    objective: '흙을 만져 보고 물을 줄지 정한 뒤, 화분에 물을 주는 차례대로 직접 해낼 수 있다.',
    illustration: ART('three classroom flower pots on a sunny windowsill, a child touching the soil with one finger and a small watering can beside the pots', '흙을 먼저 만져 봐요', [
      { motif: 'flower', x: 140, y: 224 }, { motif: 'flower', x: 240, y: 226, color: 'rose' }, { motif: 'leaf', x: 340, y: 228 }]),
    safety: ['물을 흘리면 바로 걸레로 닦아 미끄러지지 않게 해요.', '화분은 두 손으로 들고, 창틀 위에서 옮기지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반 화분 세 개 가운데 잎이 축 처진 화분은 어느 것일까요?" 실제 화분을 교탁에 놓고 보게 한다. "물을 날마다 가득 주면 화분이 좋아할까요?" 대답을 듣고, 물이 너무 많으면 뿌리가 숨을 못 쉰다는 것을 짧게 알려 준다. "오늘부터 우리가 화분 돌보기를 맡아요. 먼저 흙을 만져 보는 것부터 배워요." 시연 단추로 물 주는 차례 카드가 놓이는 모습을 보여 준다.',
        student: '화분의 잎과 흙을 눈으로 살펴보고, 어느 화분이 목말라 보이는지 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', shuffle: false, cards: ['흙을 만져 봐요', '물뿌리개에 물을 받아요', '흙에 천천히 부어요'] }, sequence: [{ order: ['흙을 만져 봐요', '물뿌리개에 물을 받아요', '흙에 천천히 부어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물 주는 차례와 할 일 알기', minutes: 13, tool: 'kitchen',
            teacher: '"물을 주기 전에 꼭 해야 할 일은 무엇일까요?" 흙 만져 보기를 빼먹는 학생이 많다. "흙이 촉촉한데 물을 또 주면 어떻게 될까요?"라고 되묻는다. 받침에 고인 물을 버리는 까닭(뿌리가 썩지 않게)도 짚는다.',
            task: '화분을 돌보는 차례대로 카드를 놓고, 돌볼 때 할 일을 골라 표시해요.',
            levels: CARD_LV,
            items: [
              { prompt: '화분에 물을 주는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['흙을 손가락으로 만져 봐요', '물뿌리개에 물을 반쯤 받아요', '흙에 천천히 부어요', '받침에 고인 물을 버려요'] },
                target: { order: ['흙을 손가락으로 만져 봐요', '물뿌리개에 물을 반쯤 받아요', '흙에 천천히 부어요', '받침에 고인 물을 버려요'] }, difficulty: 0.15,
                hints: ['물을 주기 전에 화분에게 물이 필요한지 먼저 알아봐야 해요. 알아보는 일부터 놓아요.', '어긋난 자리를 짚어 보세요. 물을 붓기 전에 물이 준비되어 있어야 하고, 고인 물은 다 준 뒤에 버려요.', '만져 보기 → 물 받기 → 천천히 붓기 → 받침 물 버리기 차례예요.'],
                levels: { challenge: { toolOptions: { cards: ['흙을 손가락으로 만져 봐요', '물뿌리개에 물을 반쯤 받아요', '흙에 천천히 부어요', '받침에 고인 물을 버려요', '잎을 한 장 뜯어 봐요'], slots: 4 } } } },
              { prompt: '화분에 씨앗을 심는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['화분에 흙을 담아요', '손가락으로 얕은 구멍을 내요', '씨앗을 넣고 흙을 덮어요', '물을 살살 줘요'] },
                target: { order: ['화분에 흙을 담아요', '손가락으로 얕은 구멍을 내요', '씨앗을 넣고 흙을 덮어요', '물을 살살 줘요'] }, difficulty: 0.15,
                hints: ['씨앗이 들어갈 자리가 먼저 있어야 해요. 아무것도 없는 빈 화분에서 시작한다고 생각해요.', '어긋난 카드 앞뒤를 짚어 보세요. 구멍은 흙이 있어야 낼 수 있고, 물은 씨앗을 덮은 뒤에 줘요.', '흙 담기 → 구멍 내기 → 씨앗 넣고 덮기 → 물 주기 차례예요.'] },
              { prompt: '화분을 돌볼 때 할 일만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '화분 돌보기', items: [{ id: 'touch', text: '흙이 말랐는지 만져 봐요' }, { id: 'sun', text: '햇빛이 드는 창가에 두어요' }, { id: 'tear', text: '잎을 손으로 뜯어 봐요' }, { id: 'flood', text: '날마다 물을 가득 부어요' }] },
                target: { checklist: ['touch', 'sun'] }, difficulty: 0.2,
                hints: ['그렇게 하면 식물이 잘 자랄지, 힘들어할지 항목마다 하나씩 따져요.', '표시한 것 가운데 식물을 다치게 하거나 물이 너무 많아지는 일이 있는지 살펴봐요.', '흙 만져 보기와 햇빛 드는 곳에 두기만 표시해요. 물을 날마다 가득 주면 뿌리가 숨을 못 쉬어요.'],
                predict: { q: '물을 날마다 가득 주면 화분은 어떻게 될까요?', options: ['잘 자라요', '뿌리가 힘들어요'], answer: 1 },
                conclude: '식물도 물이 너무 많으면 뿌리가 숨을 못 쉬어요. 흙을 만져 보고 마를 때 줘요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 화분 직접 돌보기', minutes: 14, tool: 'mindmap',
            teacher: '"손가락 한 마디만큼 흙에 넣어 보세요. 손끝에 흙이 묻어나나요, 보슬보슬 떨어지나요?" 모둠마다 화분 하나씩 흙을 만져 보게 한 뒤 물을 줄지 정하게 한다. 물은 모둠에서 한 사람만 주고 나머지는 차례를 살펴 말해 준다. 젖은 바닥은 바로 닦는다.',
            task: '모둠 화분의 흙을 만져 보고, 살펴본 모습으로 물을 줄지 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 화분의 흙을 손가락 한 마디만큼 넣어 만져 보고 "다 했어요"를 누르세요.', free: true },
              { prompt: '살펴본 모습을 보고 물을 줄 때와 아직 주지 않을 때로 나누어 보세요.', toolOptions: { topic: '물을 줄까?', slots: ['지금 물을 줘요', '아직 주지 않아요'], cards: ['흙이 바싹 말랐어요', '잎이 축 처졌어요', '흙이 촉촉해요', '받침에 물이 고여 있어요'] },
                target: { sort: { '지금 물을 줘요': ['흙이 바싹 말랐어요', '잎이 축 처졌어요'], '아직 주지 않아요': ['흙이 촉촉해요', '받침에 물이 고여 있어요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '살펴본 모습을 보고 물을 줄 때와 아직 주지 않을 때로 나누어 보세요. 물과 상관없는 모습은 남겨요.', toolOptions: { cards: ['흙이 바싹 말랐어요', '잎이 축 처졌어요', '흙이 촉촉해요', '받침에 물이 고여 있어요', '화분 색이 분홍이에요'] } } } },
              { prompt: '모둠 친구가 물을 너무 많이 부으려 해요. 어떻게 말할까요?', toolOptions: { mode: 'pick', topic: '친구에게 할 말', cards: ['"흙을 먼저 만져 보자"', '"받침에 물이 넘치겠어"', '"그냥 다 부어 버려"', '"물은 많을수록 좋아"'] },
                target: { pick: ['"흙을 먼저 만져 보자"', '"받침에 물이 넘치겠어"'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 우리 모둠 화분은 물을 주었나요, 주지 않았나요? 왜 그렇게 정했어요?" 모둠마다 한 명이 까닭을 말한다. 출구 첫 문항의 차례가 틀린 학생은 실제 물뿌리개를 들고 차례를 몸으로 해 보게 한다. 다음 시간에는 물을 아끼는 방법을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: ['상추밭 흙을 만져 봐요', '물뿌리개에 물을 받아요', '뿌리 쪽에 물을 줘요', '물뿌리개를 제자리에 둬요'] }, prompt: '텃밭 상추에 물을 주는 차례대로 카드를 놓아 보세요.', target: { order: ['상추밭 흙을 만져 봐요', '물뿌리개에 물을 받아요', '뿌리 쪽에 물을 줘요', '물뿌리개를 제자리에 둬요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '흙을 만져 보니 촉촉해요. 어떻게 할까요?', options: ['물을 더 줘요', '오늘은 주지 않아요', '흙을 파내요'], answer: 1, difficulty: 0.15, explain: '흙이 촉촉하면 아직 물이 남아 있어요. 마를 때 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '화분 돌보기',
      items: [
        { type: 'table', prompt: '화분에 물을 주는 차례를 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'choice', prompt: '물을 주어야 할 때에 ○ 하세요.', options: ['흙이 촉촉할 때', '흙이 바싹 말랐을 때', '받침에 물이 고였을 때'], answer: '흙이 바싹 말랐을 때' },
        { type: 'blank', prompt: '받침에 고인 물은 뿌리가 (        )지 않게 버려요.', answer: '썩' },
        { type: 'draw', prompt: '우리 모둠 화분의 오늘 모습을 그리세요.' },
      ],
      easy: {
        note: '물 주기 전에 흙을 먼저 만져 봐요.',
        items: [
          { type: 'choice', prompt: '물 주기 전에 먼저 할 일에 ○ 하세요.', options: ['흙 만져 보기', '잎 뜯기'], answer: '흙 만져 보기' },
          { type: 'choice', prompt: '흙이 바싹 말랐어요. 어떻게 할까요?', options: ['물을 줘요', '그냥 둬요'], answer: '물을 줘요' },
          { type: 'draw', prompt: '우리 모둠 화분의 오늘 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 실제 화분을 만질 때 선생님이 곁에서 도와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 직접 만져 본 흙의 느낌으로 물 줄지 정해요.',
      challenge: '차례와 상관없는 카드와 물과 상관없는 모습 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물은 많이 줄수록 좋다고 여긴다 → 받침에 물이 넘친 화분의 잎이 누렇게 변한 사진이나 실제 모습을 보여 준다. ② 흙 겉만 보고 판단한다 → 손가락 한 마디 깊이까지 넣어 보게 한다. ③ 모둠에서 서로 물을 주겠다고 다툰다 → 오늘 물 당번을 정하고, 나머지는 차례를 말해 주는 역할을 맡긴다. 다음 시간부터 10차시까지 화분 당번표를 교실에 붙여 둔다.',
  }));

  lessons.push(L(8, {
    title: '물을 아껴 쓰는 방법 골라 손 씻기로 해 보기',
    objective: '물을 아끼는 행동과 낭비하는 행동을 나누고, 물을 잠그며 손을 씻는 차례대로 직접 해낼 수 있다.',
    illustration: ART('a child washing hands at a school sink with the tap turned off while soaping, a cup of water for brushing teeth and water drops', '물을 꼭 잠가요', [
      { motif: 'wave', x: 120, y: 234 }, { motif: 'cloud', x: 360, y: 96, color: 'sky' }, { motif: 'flower', x: 400, y: 226 }]),
    safety: ['세면대 둘레 바닥에 물이 떨어지면 바로 닦아요.', '물장난을 하지 않고 차례를 지켜 줄을 서요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"이를 닦는 동안 물을 틀어 두면 물이 얼마나 흘러갈까요?" 교실 세면대(또는 큰 대야)에서 30초 동안 물을 틀어 두고 받은 물을 컵 하나와 견주어 보여 준다. "컵 하나면 되는데 이만큼이 그냥 흘러갔어요." 받은 물은 버리지 않고 화분이나 걸레 빨기에 쓴다고 말한다. 시연 단추로 \'양치할 때 컵을 써요\' 카드가 \'물을 아껴요\' 칸에 놓이는 모습을 보여 준다.',
        student: '30초 동안 받은 물과 컵 하나의 물을 견주어 보고, 느낀 점을 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '물을 쓰는 모습', slots: ['물을 아껴요', '물을 낭비해요'], cards: ['양치할 때 컵을 써요', '물을 틀어 놓고 이를 닦아요'], shuffle: false }, sequence: [{ sort: { '물을 아껴요': ['양치할 때 컵을 써요'], '물을 낭비해요': ['물을 틀어 놓고 이를 닦아요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 물을 아끼는 모습 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이렇게 하면 물이 그냥 흘러가 버리나요, 꼭 필요한 만큼만 쓰이나요?" 이 물음으로 카드마다 따지게 한다. "물은 수도꼭지만 틀면 계속 나오잖아요"라는 학생에게 "수돗물은 강물을 깨끗하게 만드는 곳에서 여러 날 걸려 만들어져요. 깨끗한 물은 얼마든지 있는 것이 아니에요."라고 답한다.',
            task: '카드를 읽고 물을 아끼는 모습과 낭비하는 모습으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교에서 물을 쓰는 모습을 나누어 보세요.', toolOptions: { topic: '학교에서 물 쓰기', slots: ['물을 아껴요', '물을 낭비해요'], cards: ['비누칠할 때 물을 잠가요', '물통에 마실 만큼만 받아요', '물을 틀어 놓고 수다를 떨어요', '세면대에서 물장난을 해요'] },
                target: { sort: { '물을 아껴요': ['비누칠할 때 물을 잠가요', '물통에 마실 만큼만 받아요'], '물을 낭비해요': ['물을 틀어 놓고 수다를 떨어요', '세면대에서 물장난을 해요'] } }, difficulty: 0.05 },
              { prompt: '집에서 물을 쓰는 모습을 나누어 보세요.', toolOptions: { topic: '집에서 물 쓰기', slots: ['물을 아껴요', '물을 낭비해요'], cards: ['쌀 씻은 물로 화분에 물을 줘요', '샤워 시간을 줄여요', '수도꼭지에서 물이 똑똑 떨어지게 둬요', '컵에 물을 가득 받고 조금만 마셔요'] },
                target: { sort: { '물을 아껴요': ['쌀 씻은 물로 화분에 물을 줘요', '샤워 시간을 줄여요'], '물을 낭비해요': ['수도꼭지에서 물이 똑똑 떨어지게 둬요', '컵에 물을 가득 받고 조금만 마셔요'] } }, difficulty: 0.15 },
              { prompt: '물을 쓰는 모습을 나누어 보세요. 물과 상관없는 카드는 남겨요.', toolOptions: { topic: '물을 쓰는 모습', slots: ['물을 아껴요', '물을 낭비해요'], cards: ['빗물을 받아 텃밭에 줘요', '세수하는 내내 물을 틀어 둬요', '크레파스로 물고기를 그려요'] },
                target: { sort: { '물을 아껴요': ['빗물을 받아 텃밭에 줘요'], '물을 낭비해요': ['세수하는 내내 물을 틀어 둬요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '물을 쓰는 모습을 나누어 보세요. 물과 상관없는 카드는 남겨요. 카드가 더 많아요.', toolOptions: { cards: ['빗물을 받아 텃밭에 줘요', '세수하는 내내 물을 틀어 둬요', '크레파스로 물고기를 그려요', '설거지물을 받아서 써요', '호스로 길바닥에 물을 뿌려 놀아요'] },
                  target: { sort: { '물을 아껴요': ['빗물을 받아 텃밭에 줘요', '설거지물을 받아서 써요'], '물을 낭비해요': ['세수하는 내내 물을 틀어 둬요', '호스로 길바닥에 물을 뿌려 놀아요'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 물을 잠그며 손 씻기', minutes: 14, tool: 'kitchen',
            teacher: '"손에 비누칠하는 동안 물이 필요할까요?" 차례를 정한 뒤 모둠별로 세면대에 가서 실제로 물을 잠그며 손을 씻게 한다. 물을 잠그는 순간에 "잠가요!" 하고 소리 내어 말하게 하면 잊지 않는다. 세면대에 가지 못하는 교실이면 빈 손으로 몸짓을 하며 차례를 익힌다.',
            task: '물을 아끼며 손을 씻는 차례를 놓고, 세면대에서 직접 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '물을 아끼며 손을 씻는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['물을 틀어 손을 적셔요', '물을 잠그고 비누칠해요', '물을 틀어 헹궈요', '물을 꼭 잠가요'] },
                target: { order: ['물을 틀어 손을 적셔요', '물을 잠그고 비누칠해요', '물을 틀어 헹궈요', '물을 꼭 잠가요'] }, difficulty: 0.1,
                hints: ['물이 꼭 필요한 때와 필요하지 않은 때를 나누어 생각해요. 손을 씻는 처음부터 하나씩 놓아요.', '어긋난 자리를 짚어 보세요. 비누칠하는 동안에는 물이 필요 없고, 헹군 뒤에는 꼭 잠가야 해요.', '적시기 → 잠그고 비누칠 → 틀어서 헹구기 → 꼭 잠그기 차례예요.'],
                levels: { challenge: { toolOptions: { cards: ['물을 틀어 손을 적셔요', '물을 잠그고 비누칠해요', '물을 틀어 헹궈요', '물을 꼭 잠가요', '물을 틀어 둔 채 거울을 봐요'], slots: 4 } } } },
              { prompt: '세면대에서 물을 잠그며 손을 씻어 보고 "다 했어요"를 누르세요.', free: true },
              { prompt: '물을 아끼는 설거지 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['통에 물을 받아요', '받은 물에서 그릇을 씻어요', '흐르는 물에 짧게 헹궈요'] },
                target: { order: ['통에 물을 받아요', '받은 물에서 그릇을 씻어요', '흐르는 물에 짧게 헹궈요'] }, difficulty: 0.15,
                predict: { q: '받은 물로 씻으면 물이 어떻게 될까요?', options: ['더 들어요', '덜 들어요'], answer: 1 },
                conclude: '물을 받아 쓰면 흘려보내는 물이 줄어요. 헹굴 때만 짧게 틀어요.' },
              { prompt: '물을 아끼는 양치 방법만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '물을 아끼는 양치', items: [{ id: 'cup', text: '컵에 물을 받아 써요' }, { id: 'run', text: '물을 틀어 놓고 닦아요' }, { id: 'close', text: '다 쓰면 수도꼭지를 꼭 잠가요' }] },
                target: { checklist: ['cup', 'close'] }, difficulty: 0.1,
                hints: ['항목마다 물이 그냥 흘러가는지, 필요한 만큼만 쓰이는지 따져요.', '표시한 것 가운데 물이 계속 흘러가는 항목이 있는지 살펴봐요.', '컵에 물 받기와 수도꼭지 꼭 잠그기만 표시해요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 처음 받아 둔 물은 어디에 쓸까요?" 화분 물 주기에 쓰는 모습을 함께 본다. 출구 둘째 문항에서 \'얼마든지 있어요\'를 고른 학생에게 수돗물이 만들어지는 길을 그림으로 다시 보여 준다. 다음 시간에는 종이를 아끼는 방법을 찾는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '물을 아껴요', cards: ['머리를 감을 때 물을 잠그고 샴푸해요', '빗물로 화단에 물을 줘요', '물을 틀어 놓고 텔레비전을 봐요', '물풍선을 많이 던져요'] }, prompt: '물을 아끼는 모습만 골라 바구니에 넣어 보세요.', target: { pick: ['머리를 감을 때 물을 잠그고 샴푸해요', '빗물로 화단에 물을 줘요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '깨끗한 물에 대해 바르게 말한 것은 무엇인가요?', options: ['얼마든지 있어서 아낄 필요가 없어요', '만드는 데 오래 걸리고 아껴 써야 해요'], answer: 1, difficulty: 0.1, explain: '마실 수 있는 깨끗한 물은 지구의 물 가운데 아주 조금이고, 깨끗하게 만드는 데도 오래 걸려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '물을 아껴요',
      items: [
        { type: 'check', prompt: '물을 아끼는 모습에 모두 ✓ 하세요.', options: ['양치 컵 쓰기', '물 틀어 놓고 수다 떨기', '비누칠할 때 물 잠그기', '빗물 받아 쓰기'] },
        { type: 'table', prompt: '물을 아끼며 손 씻는 차례를 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'blank', prompt: '비누칠하는 동안에는 물을 (        ).', answer: '잠가요' },
        { type: 'short', prompt: '우리 집에서 물을 아낄 수 있는 곳 한 군데를 쓰세요.' },
      ],
      easy: {
        note: '물이 그냥 흘러가는지 살펴봐요.',
        items: [
          { type: 'choice', prompt: '물을 아끼는 모습에 ○ 하세요.', options: ['컵으로 양치하기', '물 틀어 놓고 양치하기'], answer: '컵으로 양치하기' },
          { type: 'choice', prompt: '비누칠할 때 물은 어떻게 할까요?', options: ['잠가요', '틀어 둬요'], answer: '잠가요' },
          { type: 'draw', prompt: '물을 아끼며 손 씻는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 세면대에서 직접 손 씻기를 해요.',
      challenge: '카드가 더 많고, 물과 상관없는 카드와 차례에 끼어든 카드를 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물은 수도꼭지만 틀면 얼마든지 나온다고 여긴다(이 차시의 핵심 오개념) → 30초 동안 흘러간 물을 눈으로 보여 주고, 수돗물이 만들어지는 길을 짧게 이야기한다. ② 물을 아끼려고 손을 대충 씻는다 → 비누칠은 충분히 하되 그동안 물만 잠그는 것이라고 짚는다. ③ 물을 꼭 잠그지 않아 똑똑 떨어진다 → 마지막에 수도꼭지를 한 번 더 살펴보는 습관을 들인다. 받은 물은 반드시 화분이나 청소에 다시 쓴다.',
  }));

  lessons.push(L(9, {
    title: '종이 아끼는 방법 찾고 이면지 묶음 만들기',
    objective: '종이를 아끼는 행동과 낭비하는 행동을 나누고, 남은 종이를 다시 쓰는 방법을 골라 이면지 묶음을 만들 수 있다.',
    illustration: ART('a classroom paper corner with a stack of one-side-used paper clipped together, colorful paper scraps in a box and a small tree beside it', '종이는 나무로 만들어요', [
      { motif: 'tree', x: 380, y: 206, s: 1.1 }, { motif: 'leaf', x: 110, y: 228 }, { motif: 'star', x: 200, y: 96, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리가 쓰는 종이는 무엇으로 만들까요?" 나무라는 대답이 나오면 종이 상자 그림과 나무 그림을 나란히 보여 준다. 교실 재활용 상자에서 한 면만 쓴 종이를 몇 장 꺼내 "이 종이는 정말 다 쓴 종이일까요?"라고 묻는다. 시연 단추로 \'이면지에 연습해요\' 카드가 \'종이를 아껴요\' 칸에 놓이는 모습을 보여 준다.',
        student: '재활용 상자에서 꺼낸 종이를 보고, 아직 쓸 수 있는 곳이 있는지 찾아봐요.',
        demo: { tool: 'mindmap', options: { topic: '종이를 쓰는 모습', slots: ['종이를 아껴요', '종이를 낭비해요'], cards: ['이면지에 연습해요', '한 줄 쓰고 새 종이를 꺼내요'], shuffle: false }, sequence: [{ sort: { '종이를 아껴요': ['이면지에 연습해요'], '종이를 낭비해요': ['한 줄 쓰고 새 종이를 꺼내요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 종이를 아끼는 모습 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 종이는 끝까지 쓰였나요, 아직 쓸 곳이 남았는데 버려졌나요?" 이 물음으로 카드마다 따지게 한다. 휴지도 종이라는 것을 짚는다. "종이는 가게에 가면 또 있잖아요"라는 학생에게 "종이 한 상자를 만들려면 나무가 몇 년 동안 자라야 해요."라고 답한다.',
            task: '카드를 읽고 종이를 아끼는 모습과 낭비하는 모습으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실에서 종이를 쓰는 모습을 나누어 보세요.', toolOptions: { topic: '교실에서 종이 쓰기', slots: ['종이를 아껴요', '종이를 낭비해요'], cards: ['공책을 끝까지 써요', '종이 양면에 써요', '틀리면 바로 구겨 버려요', '도화지를 반만 쓰고 버려요'] },
                target: { sort: { '종이를 아껴요': ['공책을 끝까지 써요', '종이 양면에 써요'], '종이를 낭비해요': ['틀리면 바로 구겨 버려요', '도화지를 반만 쓰고 버려요'] } }, difficulty: 0.05 },
              { prompt: '집과 화장실에서 종이를 쓰는 모습을 나누어 보세요.', toolOptions: { topic: '휴지도 종이예요', slots: ['종이를 아껴요', '종이를 낭비해요'], cards: ['손수건으로 손을 닦아요', '휴지를 필요한 만큼만 뜯어요', '휴지를 한 뭉치씩 뽑아 써요', '종이컵을 한 번 쓰고 버려요'] },
                target: { sort: { '종이를 아껴요': ['손수건으로 손을 닦아요', '휴지를 필요한 만큼만 뜯어요'], '종이를 낭비해요': ['휴지를 한 뭉치씩 뽑아 써요', '종이컵을 한 번 쓰고 버려요'] } }, difficulty: 0.15 },
              { prompt: '종이를 쓰는 모습을 나누어 보세요. 종이와 상관없는 카드는 남겨요.', toolOptions: { topic: '종이를 쓰는 모습', slots: ['종이를 아껴요', '종이를 낭비해요'], cards: ['자투리 색종이를 모아 둬요', '연습장 한 장에 한 글자만 써요', '운동장에서 공을 차요'] },
                target: { sort: { '종이를 아껴요': ['자투리 색종이를 모아 둬요'], '종이를 낭비해요': ['연습장 한 장에 한 글자만 써요'] } }, difficulty: 0.2,
                predict: { q: '"운동장에서 공을 차요" 카드는 어디에 놓을까요?', options: ['아껴요', '낭비해요', '안 놓아요'], answer: 2 },
                conclude: '종이를 쓰지 않는 일은 아끼는 일도 낭비하는 일도 아니에요.',
                levels: { challenge: { prompt: '종이를 쓰는 모습을 나누어 보세요. 종이와 상관없는 카드는 남겨요. 카드가 더 많아요.', toolOptions: { cards: ['자투리 색종이를 모아 둬요', '연습장 한 장에 한 글자만 써요', '운동장에서 공을 차요', '다 읽은 신문지로 책상을 덮어요', '새 공책을 찢어 비행기를 접어요'] },
                  target: { sort: { '종이를 아껴요': ['자투리 색종이를 모아 둬요', '다 읽은 신문지로 책상을 덮어요'], '종이를 낭비해요': ['연습장 한 장에 한 글자만 써요', '새 공책을 찢어 비행기를 접어요'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 남은 종이 다시 쓰기', minutes: 15, tool: 'mindmap',
            teacher: '"이 종이는 버리기 전에 어디에 한 번 더 쓸 수 있을까요?" 쓰임을 짝 지은 뒤, 모둠마다 재활용 상자에서 한 면만 쓴 종이를 골라 쓴 면이 뒤로 가게 모으고 집게로 묶어 이면지 묶음을 만든다. 개인 정보(이름·전화번호)가 적힌 종이는 쓰지 않는다고 미리 말한다.',
            task: '남은 종이와 다시 쓰는 방법을 이어 보고, 모둠 이면지 묶음을 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '남은 종이마다 다시 쓰는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '다시 써요', slots: [{ id: 's1', label: '한 면만 쓴 종이' }, { id: 's2', label: '자투리 색종이' }, { id: 's3', label: '빈 과자 상자' }], cards: ['연습장으로 써요', '모자이크 그림을 꾸며요', '연필꽂이를 만들어요'] },
                target: { match: { s1: '연습장으로 써요', s2: '모자이크 그림을 꾸며요', s3: '연필꽂이를 만들어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['연습장으로 써요', '모자이크 그림을 꾸며요', '연필꽂이를 만들어요', '불에 태워요'] } } } },
              { prompt: '다른 남은 종이도 다시 쓰는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '다시 써요', slots: [{ id: 's1', label: '다 읽은 신문지' }, { id: 's2', label: '지난달 달력' }], cards: ['물감 놀이 바닥에 깔아요', '선물 포장지로 써요'] },
                target: { match: { s1: '물감 놀이 바닥에 깔아요', s2: '선물 포장지로 써요' } }, difficulty: 0.2 },
              { prompt: '모둠 친구와 이면지 묶음을 만들어 교실 이면지함에 넣고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 반 이면지함은 언제 쓰면 좋을까요?" 받아쓰기 연습, 그림 밑그림처럼 쓸 때를 정한다. 출구 첫 문항에서 상관없는 카드를 넣은 학생에게는 "그 종이가 다시 쓰였나요?"라고 다시 묻는다. 다음 시간에는 화분 돌보기와 아껴 쓰기 가운데 내가 맡을 일을 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '다시 써요', slots: [{ id: 'e1', label: '다 쓴 휴지 심' }, { id: 'e2', label: '쓴 면이 한쪽인 학습지' }], cards: ['쌍안경 만들기 재료로 써요', '뒷면에 계산 연습을 해요'] }, prompt: '남은 종이와 다시 쓰는 방법을 이어 보세요.', target: { match: { e1: '쌍안경 만들기 재료로 써요', e2: '뒷면에 계산 연습을 해요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '종이를 아끼면 무엇을 지킬 수 있을까요?', options: ['나무', '모래', '구름'], answer: 0, difficulty: 0.1, explain: '종이는 나무로 만들어요. 종이를 아끼면 베어지는 나무가 줄어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '종이를 아껴요',
      items: [
        { type: 'check', prompt: '종이를 아끼는 모습에 모두 ✓ 하세요.', options: ['양면에 쓰기', '틀리면 구겨 버리기', '손수건 쓰기', '공책 끝까지 쓰기'] },
        { type: 'choice', prompt: '종이는 무엇으로 만들까요? ○ 하세요.', options: ['돌', '나무', '물'], answer: '나무' },
        { type: 'table', prompt: '남은 종이와 다시 쓰는 방법을 쓰세요.', columns: ['남은 종이', '다시 쓰는 방법'], rows: 2 },
        { type: 'draw', prompt: '이면지에 그림 연습을 해 보세요.' },
      ],
      easy: {
        note: '아직 쓸 곳이 남은 종이인지 살펴봐요.',
        items: [
          { type: 'choice', prompt: '종이를 아끼는 모습에 ○ 하세요.', options: ['양면에 쓰기', '한 줄 쓰고 버리기'], answer: '양면에 쓰기' },
          { type: 'choice', prompt: '손을 닦을 때 종이를 아끼려면?', options: ['손수건', '휴지 한 뭉치'], answer: '손수건' },
          { type: 'draw', prompt: '이면지에 그림 연습을 해 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 이면지 묶음을 모둠과 함께 만들어요.',
      challenge: '카드가 더 많고, 종이와 상관없는 카드와 틀린 쓰임 카드(불에 태워요)를 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 종이는 가게에 얼마든지 있으니 아낄 필요가 없다고 여긴다 → 종이가 나무에서 온다는 것을 그림으로 잇는다. ② 휴지·종이컵은 종이가 아니라고 여긴다 → 휴지 포장에 적힌 \'종이\'를 함께 읽는다. ③ 이면지에 이름·전화번호가 적힌 종이를 섞는다 → 그런 종이는 따로 모아 선생님께 드린다. 이면지함은 단원 끝까지 교실에 둔다.',
  }));

  lessons.push(L(10, {
    title: '맡을 일 고르고 사흘 기록표 쓰는 법 익히기',
    objective: '화분 돌보기·물 아끼기·종이 아끼기 가운데 맡을 일을 하나 고르고, 사흘 동안 한 날마다 기록표에 표시하는 방법을 말할 수 있다.',
    illustration: ART('a class chart on the wall with three columns for watering plants, saving water and saving paper, and children putting sticker dots on it', '사흘 동안 해 봐요', [
      { motif: 'star', x: 130, y: 104, s: 0.7 }, { motif: 'flower', x: 350, y: 226 }, { motif: 'leaf', x: 400, y: 232 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 사흘 동안 배운 생물 돕기와 아껴 쓰기 가운데, 내일부터 내가 맡아서 해 볼 일 하나를 정해요." 칠판에 화분 돌보기·물 아끼기·종이 아끼기 세 칸을 그린다. "한 번 해 보는 것과 사흘 동안 날마다 해 보는 것은 무엇이 다를까요?" 시연 단추로 할 일 카드가 세 칸에 나뉘어 놓이는 모습을 보여 준다.',
        student: '세 가지 일 가운데 내가 해 보고 싶은 일을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '내가 맡을 일', slots: ['화분 돌보기', '물 아끼기', '종이 아끼기'], cards: ['흙 만져 보기', '양치 컵 쓰기', '이면지 쓰기'], shuffle: false }, sequence: [{ sort: { '화분 돌보기': ['흙 만져 보기'], '물 아끼기': ['양치 컵 쓰기'], '종이 아끼기': ['이면지 쓰기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 할 일을 세 갈래로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 일은 화분을 돕는 일인가요, 물을 아끼는 일인가요, 종이를 아끼는 일인가요?" 나눈 뒤 "이 가운데 내가 날마다 할 수 있는 일은?"이라고 물어 맡을 일을 고르게 한다. 너무 큰 일(날마다 화단 전체 물 주기)을 고르는 학생에게는 혼자 사흘 동안 할 수 있는지 되묻는다.',
            task: '할 일 카드를 화분 돌보기·물 아끼기·종이 아끼기로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '할 일 카드를 세 갈래로 나누어 보세요.', toolOptions: { topic: '내가 맡을 일', slots: ['화분 돌보기', '물 아끼기', '종이 아끼기'], cards: ['물 주기 전에 흙 만져 보기', '양치할 때 컵 쓰기', '공책 끝까지 쓰기', '시든 잎 떼어 주기', '손 씻을 때 물 잠그기', '이면지에 연습하기'] },
                target: { sort: { '화분 돌보기': ['물 주기 전에 흙 만져 보기', '시든 잎 떼어 주기'], '물 아끼기': ['양치할 때 컵 쓰기', '손 씻을 때 물 잠그기'], '종이 아끼기': ['공책 끝까지 쓰기', '이면지에 연습하기'] } }, difficulty: 0.15,
                levels: { easy: { prompt: '할 일 카드를 세 갈래로 나누어 보세요. 카드가 세 장이에요.', toolOptions: { cards: ['물 주기 전에 흙 만져 보기', '양치할 때 컵 쓰기', '공책 끝까지 쓰기'] },
                  target: { sort: { '화분 돌보기': ['물 주기 전에 흙 만져 보기'], '물 아끼기': ['양치할 때 컵 쓰기'], '종이 아끼기': ['공책 끝까지 쓰기'] } } } } },
              { prompt: '사흘 동안 혼자 날마다 할 수 있는 일만 골라 보세요.', toolOptions: { mode: 'pick', topic: '날마다 할 수 있어요', cards: ['내 자리 화분 흙 만져 보기', '양치할 때 컵 쓰기', '학교 화단 전체에 물 주기', '동네 수도를 모두 고치기'] },
                target: { pick: ['내 자리 화분 흙 만져 보기', '양치할 때 컵 쓰기'] }, difficulty: 0.2,
                predict: { q: '학교 화단 전체에 혼자 날마다 물을 줄 수 있을까요?', options: ['할 수 있어요', '힘들어요'], answer: 1 },
                conclude: '맡을 일은 작아도 날마다 해낼 수 있는 일로 골라요.' },
              { prompt: '물과 종이를 아끼는 일 가운데 집에서 할 수 있는 일을 나누어 보세요.', toolOptions: { topic: '집에서 할 일', slots: ['물 아끼기', '종이 아끼기'], cards: ['샤워할 때 비누칠하며 물 잠그기', '휴지 대신 손수건 쓰기', '설거지물 받아 쓰기', '택배 상자 다시 쓰기'] },
                target: { sort: { '물 아끼기': ['샤워할 때 비누칠하며 물 잠그기', '설거지물 받아 쓰기'], '종이 아끼기': ['휴지 대신 손수건 쓰기', '택배 상자 다시 쓰기'] } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 사흘 기록 읽기', minutes: 15, tool: 'timeline',
            teacher: '"준호가 사흘 동안 쓴 기록 카드가 뒤섞였어요. 어느 날이 먼저일까요?" 카드 속 \'아직\', \'다시\' 같은 말에 밑줄을 긋게 한다. 기록을 다 놓은 뒤 "날짜를 쓰지 않았다면 차례를 알 수 있었을까요?"라고 물어 기록에 날짜를 꼭 쓰는 까닭을 짚는다. 마지막에 활동지 기록표에 내가 맡을 일을 적는다.',
            task: '친구가 쓴 사흘 기록 카드를 읽고 날마다 알맞은 기록을 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호의 화분 돌보기 기록을 날짜에 맞게 놓아 보세요. 카드 속 낱말이 도움이 돼요.', toolOptions: { mode: 'match', axis: ['먼저', '나중'], slots: [{ id: 'd1', label: '첫째 날' }, { id: 'd2', label: '둘째 날' }, { id: 'd3', label: '셋째 날' }], cards: ['흙이 말라서 물을 줬어요', '흙이 아직 촉촉해서 주지 않았어요', '흙이 다시 말라서 물을 줬어요'] },
                target: { match: { d1: '흙이 말라서 물을 줬어요', d2: '흙이 아직 촉촉해서 주지 않았어요', d3: '흙이 다시 말라서 물을 줬어요' } }, difficulty: 0.3,
                hints: ['카드마다 앞의 날에 무슨 일이 있었기에 그렇게 썼는지 생각해요. 앞일이 없어도 되는 카드가 첫날이에요.', '어긋난 날을 짚어 보세요. "아직"과 "다시"는 앞날에 어떤 일이 있었다는 뜻이에요.', '첫째 날 물을 줘서 둘째 날은 아직 촉촉하고, 셋째 날에 다시 말라 물을 줬어요.'] },
              { prompt: '서아의 양치 컵 쓰기 기록을 날짜에 맞게 놓아 보세요.', toolOptions: { mode: 'match', axis: ['먼저', '나중'], slots: [{ id: 'd1', label: '첫째 날' }, { id: 'd2', label: '둘째 날' }, { id: 'd3', label: '셋째 날' }], cards: ['컵을 처음 써 봤어요', '어제처럼 컵을 썼어요', '사흘째 컵을 썼어요'] },
                target: { match: { d1: '컵을 처음 써 봤어요', d2: '어제처럼 컵을 썼어요', d3: '사흘째 컵을 썼어요' } }, difficulty: 0.2,
                hints: ['카드 속에서 날을 알려 주는 낱말을 찾아 밑줄을 그어 보세요.', '어긋난 카드의 낱말을 다시 읽어 보세요. "어제처럼"은 앞날이 하루 있다는 뜻이에요.', '"처음" → "어제처럼" → "사흘째" 차례예요.'] },
              { prompt: '하준이의 종이 아끼기 기록을 날짜에 맞게 놓아 보세요.', toolOptions: { mode: 'match', axis: ['먼저', '나중'], slots: [{ id: 'd1', label: '첫째 날' }, { id: 'd2', label: '둘째 날' }, { id: 'd3', label: '셋째 날' }], cards: ['이면지함을 처음 열었어요', '이면지 다섯 장을 더 썼어요', '이면지함이 텅 비었어요'] },
                target: { match: { d1: '이면지함을 처음 열었어요', d2: '이면지 다섯 장을 더 썼어요', d3: '이면지함이 텅 비었어요' } }, difficulty: 0.25,
                hints: ['이면지함 속 종이가 날마다 어떻게 바뀌었을지 생각해요. 쓸수록 줄어들어요.', '어긋난 카드를 짚어 보세요. "더"라는 말은 앞날에도 썼다는 뜻이에요.', '처음 열었어요 → 더 썼어요 → 텅 비었어요 차례예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내일부터 사흘 동안 할 일을 기록표 맨 위에 쓰세요. 한 날에는 ○, 잊은 날에는 빈칸으로 두고 왜 잊었는지 한 낱말로 적어요." 기록표를 알림장에 붙이게 한다. 출구 첫 문항은 마음 크기만 고르면 되고 맞고 틀림이 없다고 말한다. 13차시에 기록표를 가져와 함께 돌아본다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '내가 고른 일을 사흘 동안 날마다 해낼 수 있을 것 같아요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '아주 많이'], ask: '지금 내 자신감은 얼마나 될까요?' }, prompt: '맡은 일을 사흘 동안 해낼 자신감을 골라 보세요. 맞고 틀림이 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          { type: 'choice', prompt: '기록표에 날짜를 쓰는 까닭은 무엇일까요?', options: ['예쁘게 보이려고', '어느 날 한 일인지 알려고', '종이를 채우려고'], answer: 1, difficulty: 0.15, explain: '날짜가 있어야 언제 했고 무엇이 달라졌는지 견줄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사흘 기록표',
      items: [
        { type: 'short', prompt: '내가 사흘 동안 맡을 일을 쓰세요.' },
        { type: 'table', prompt: '한 날에는 ○, 잊은 날에는 까닭을 한 낱말로 쓰세요.', columns: ['날짜', '했나요?', '달라진 점'], cells: [['첫째 날 (   월   일)', '', ''], ['둘째 날 (   월   일)', '', ''], ['셋째 날 (   월   일)', '', '']] },
        { type: 'choice', prompt: '"흙이 아직 촉촉해요"는 언제 쓴 기록일까요?', options: ['물을 준 다음 날', '물을 주기 전날'], answer: '물을 준 다음 날' },
        { type: 'draw', prompt: '맡은 일을 하는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '작아도 날마다 할 수 있는 일을 골라요.',
        items: [
          { type: 'check', prompt: '내가 맡을 일 하나에 ✓ 하세요.', options: ['화분 흙 만져 보기', '양치 컵 쓰기', '이면지 쓰기'] },
          { type: 'table', prompt: '한 날에 ○ 하세요.', columns: ['첫째 날', '둘째 날', '셋째 날'], rows: 1 },
          { type: 'draw', prompt: '맡은 일을 하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '할 일 카드가 세 장으로 줄어요. 맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '여섯 장을 나누고, 기록 카드 속 낱말을 찾아 날짜에 맞게 놓아요.',
      challenge: '기록을 놓기 전에 짝에게 "아직", "다시", "더" 같은 낱말이 무슨 뜻인지 먼저 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 너무 큰 일을 맡는다 → 사흘 동안 혼자 할 수 있는지 되묻고 작게 줄인다. ② 기록표에 날짜를 빼먹는다 → 날짜 칸을 먼저 채우고 시작한다. ③ 잊은 날을 ○로 채우려 한다 → 잊은 날을 찾은 것도 잘한 기록이라고 미리 말해 둔다. 기록표는 13차시 돌아보기에 쓴다.',
  }));

  lessons.push(L(11, {
    title: '집에서도 물과 종이 아끼기 계획 세우기',
    objective: '집 안 곳곳에서 물과 종이를 아끼는 방법을 짝 짓고, 가족과 함께 할 아끼기 계획을 하나 세울 수 있다.',
    illustration: ART('a cozy paper house cut open to show a bathroom with a toothbrush cup, a kitchen with a dish tub and a desk with paper used on both sides', '집에서도 아껴요', [
      { motif: 'house', x: 240, y: 212, s: 1.3 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'flower', x: 90, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"학교에서 물과 종이를 아끼는 방법을 배웠어요. 우리 집에서는 어디에서 물을 가장 많이 쓸까요?" 욕실, 부엌, 세탁기처럼 대답이 나오면 집 그림에 표시한다. "학교에서만 아끼고 집에서는 그냥 쓰면 어떨까요?" 시연 단추로 \'욕실\' 옆에 \'양치 컵 쓰기\' 카드가 놓이는 모습을 보여 준다.',
        student: '우리 집에서 물을 쓰는 곳을 떠올려 손가락으로 세어 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'match', shuffle: false, slots: [{ id: 's1', label: '욕실' }], cards: ['양치 컵 쓰기', '공책 끝까지 쓰기'] }, sequence: [{ match: { s1: '양치 컵 쓰기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 집 안 곳곳 아끼기 짝 짓기', minutes: 13, tool: 'kitchen',
            teacher: '"이 방법은 집의 어느 곳에서 할 수 있을까요?" 장소마다 그곳에서 쓰는 물건(칫솔, 그릇, 공책)을 먼저 떠올리게 한다. 짝을 지은 뒤 "우리 집에서 가장 먼저 해 볼 곳은?"이라고 묻는다.',
            task: '집 안의 곳과 그곳에서 물이나 종이를 아끼는 방법을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집 안의 곳마다 아끼는 방법을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '욕실 세면대' }, { id: 's2', label: '부엌 개수대' }, { id: 's3', label: '내 책상' }], cards: ['양치할 때 컵을 써요', '설거지물을 받아 써요', '종이 양면에 써요'] },
                target: { match: { s1: '양치할 때 컵을 써요', s2: '설거지물을 받아 써요', s3: '종이 양면에 써요' } }, difficulty: 0.1,
                hints: ['곳마다 그곳에서 무엇을 하는지 먼저 떠올리고, 그 일을 할 때 아끼는 방법을 찾아요.', '어긋난 짝을 짚어 보세요. 그 방법을 그곳에서 정말 할 수 있는지 따져요.', '세면대는 양치, 개수대는 설거지, 책상은 종이 쓰기를 하는 곳이에요.'],
                levels: { challenge: { toolOptions: { cards: ['양치할 때 컵을 써요', '설거지물을 받아 써요', '종이 양면에 써요', '냉장고 문을 오래 열어 둬요'] } } } },
              { prompt: '집에서 하는 일마다 아끼는 방법을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '아침에 세수할 때' }, { id: 's2', label: '그림을 그릴 때' }, { id: 's3', label: '코를 풀 때' }], cards: ['세숫대야에 물을 받아 써요', '이면지에 먼저 그려 봐요', '휴지를 한 칸씩 써요'] },
                target: { match: { s1: '세숫대야에 물을 받아 써요', s2: '이면지에 먼저 그려 봐요', s3: '휴지를 한 칸씩 써요' } }, difficulty: 0.15,
                hints: ['그 일을 할 때 무엇을 쓰는지(물인지, 종이인지) 먼저 생각해요.', '어긋난 짝을 짚어 보세요. 세수에는 물을, 그림과 코 풀기에는 종이를 써요.', '세수는 대야에 물 받기, 그림은 이면지, 코 풀기는 휴지 한 칸이에요.'] },
              { prompt: '가족과 함께 할 수 있는 아끼기 방법만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '우리 가족 아끼기', items: [{ id: 'rain', text: '빗물을 받아 베란다 화분에 줘요' }, { id: 'box', text: '택배 상자를 정리함으로 써요' }, { id: 'tv', text: '물을 틀어 두고 텔레비전을 봐요' }, { id: 'bag', text: '종이봉투를 한 번 쓰고 버려요' }] },
                target: { checklist: ['rain', 'box'] }, difficulty: 0.2,
                hints: ['항목마다 물이나 종이가 한 번 더 쓰이는지, 그냥 버려지는지 따져요.', '표시한 것 가운데 물이 흘러가거나 종이가 한 번 쓰고 버려지는 항목이 있는지 살펴봐요.', '빗물 받아 쓰기와 택배 상자 다시 쓰기만 표시해요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가족에게 어떻게 말할까', minutes: 14, tool: 'emotion',
            teacher: '"가족이 물이나 종이를 많이 쓸 때 어떻게 말하면 좋을까요?" 꾸짖는 말과 함께하자고 하는 말을 견주게 한다. "우리 집은 물값을 내니까 맘껏 써도 돼"라는 말이 나오면 "돈을 내도 깨끗한 물이 늘어나지는 않아요."라고 짚는다. 고른 말을 짝과 역할을 나누어 실제로 말해 보게 한다.',
            task: '집에서 생기는 일을 읽고 가족과 함께 아낄 수 있는 말과 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '동생이 휴지를 한 뭉치씩 뽑아 써요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '동생이 손을 닦으려고 휴지를 한 뭉치씩 뽑아 써요.', choices: [
                { id: 'yell', text: '"그만 써!" 하고 소리쳐요', result: '동생이 울고 휴지는 그대로 버려져요.', mood: '속상함', why: '소리를 들은 동생은 아껴야 하는 까닭을 알 수 없어요.' },
                { id: 'show', text: '"손수건 같이 쓸래?" 하고 보여 줘요', result: '동생이 손수건으로 손을 닦아요.', mood: '뿌듯함' },
                { id: 'none', text: '내 휴지가 아니니 그냥 둬요', result: '휴지가 금방 떨어져요.', mood: '걱정', why: '가족이 함께 쓰는 휴지도 아껴야 해요.' }] }, target: { choice: 'show' }, difficulty: 0.1 },
              { prompt: '형이 "물값을 내니까 맘껏 써도 돼"라고 말해요. 어떻게 답할까요?', toolOptions: { mode: 'branch', situation: '형이 샤워를 하며 "우리 집은 물값을 내니까 맘껏 써도 돼."라고 말해요.', choices: [
                { id: 'ok', text: '"맞아, 돈 내니까 괜찮아"', result: '물이 오래오래 흘러가요.', mood: '걱정', why: '돈을 내도 깨끗한 물이 늘어나지는 않아요.' },
                { id: 'tell', text: '"깨끗한 물은 아껴 써야 해. 비누칠할 때 잠그자"', result: '형이 비누칠할 때 물을 잠가요.', mood: '고마움' }] }, target: { choice: 'tell' }, difficulty: 0.2 },
              { prompt: '엄마가 설거지하며 물을 계속 틀어 두었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '저녁에 엄마가 설거지하는 동안 물이 계속 흐르고 있어요.', choices: [
                { id: 'help', text: '"통에 물을 받아서 해 볼까요?" 하고 통을 가져와요', result: '엄마가 고맙다고 하며 물을 받아서 써요.', mood: '고마움' },
                { id: 'turn', text: '말없이 수도꼭지를 꽉 잠가요', result: '엄마가 깜짝 놀라 그릇을 떨어뜨릴 뻔해요.', mood: '놀람', why: '말없이 잠그면 일하던 사람이 놀라요. 먼저 말해요.' },
                { id: 'play', text: '흐르는 물에 손을 대고 놀아요', result: '물이 더 많이 흘러가요.', mood: '걱정', why: '물장난은 물을 더 쓰게 해요.' }] }, target: { choice: 'help' }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 저녁에 가족에게 어떤 아끼기를 함께 하자고 말할 거예요?" 활동지 계획 칸에 한 가지를 쓰고, 가족 확인 칸에 서명을 받아 오게 한다. 출구 첫 문항에서 짝을 바꾼 학생에게는 그곳에서 하는 일을 먼저 말해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'match', slots: [{ id: 'e1', label: '빨래할 때' }, { id: 'e2', label: '편지를 쓸 때' }] , cards: ['빨래를 모아 한 번에 해요', '쓰고 남은 편지지 뒷면에 연습해요'] }, prompt: '집에서 하는 일과 아끼는 방법을 이어 보세요.', target: { match: { e1: '빨래를 모아 한 번에 해요', e2: '쓰고 남은 편지지 뒷면에 연습해요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '물값을 내면 물을 맘껏 써도 될까요?', options: ['네, 맘껏 써도 돼요', '아니요, 깨끗한 물은 아껴 써야 해요'], answer: 1, difficulty: 0.15, explain: '돈을 내도 깨끗한 물이 더 생기지는 않아요. 모두가 함께 써야 하는 물이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 집 아끼기 계획',
      items: [
        { type: 'table', prompt: '우리 집에서 아낄 곳과 방법을 쓰세요.', columns: ['곳', '아끼는 방법'], cells: [['욕실', ''], ['부엌', ''], ['내 책상', '']] },
        { type: 'choice', prompt: '동생이 휴지를 많이 쓸 때 알맞은 말에 ○ 하세요.', options: ['"그만 써!"', '"손수건 같이 쓸래?"', '아무 말도 안 해요'], answer: '"손수건 같이 쓸래?"' },
        { type: 'short', prompt: '가족과 함께 할 아끼기 계획을 한 문장으로 쓰세요.' },
        { type: 'short', prompt: '가족 확인 (서명):' },
      ],
      easy: {
        note: '그곳에서 무엇을 하는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '욕실에서 물을 아끼는 방법에 ○ 하세요.', options: ['양치 컵 쓰기', '종이 양면 쓰기'], answer: '양치 컵 쓰기' },
          { type: 'choice', prompt: '내 책상에서 종이를 아끼는 방법에 ○ 하세요.', options: ['이면지 쓰기', '설거지물 받기'], answer: '이면지 쓰기' },
          { type: 'short', prompt: '가족과 함께 할 아끼기 한 가지를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 말을 짝과 역할을 나누어 말해 봐요.',
      challenge: '아끼기와 반대인 카드가 섞여 있어 골라내야 해요. 가족 계획에 언제 할지까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 돈을 내면 맘껏 써도 된다고 여긴다 → 돈과 깨끗한 물의 양은 다르다는 것을 짚는다. ② 가족을 꾸짖는 말로 아끼게 하려 한다 → "같이 하자"는 말과 보여 주기를 연습한다. ③ 집 형편에 따라 할 수 없는 방법이 있다 → 우리 집에서 할 수 있는 것 하나면 충분하다고 말한다. 가족 서명은 강요하지 않는다.',
  }));

  // ───────────────────────── 12~16차시: 달라진 것 돌아보기·함께 지킬 약속(성찰과 습관화) ─────────────────────────

  lessons.push(L(12, {
    title: '돌본 화분이 달라진 모습 견주어 말하기',
    objective: '돌보기 전과 뒤의 화분 기록을 견주어 달라진 점과 그대로인 점을 나누고, 달라진 모습을 차례대로 말할 수 있다.',
    illustration: ART('two paper bean pots side by side, one small sprout labeled first day and one taller plant with four leaves labeled one week later, with a ruler beside them', '얼마나 달라졌을까요?', [
      { motif: 'leaf', x: 150, y: 226 }, { motif: 'flower', x: 330, y: 226 }, { motif: 'star', x: 240, y: 92, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"7차시에 처음 흙을 만져 본 우리 반 화분, 지금은 어떻게 달라졌나요?" 실제 화분을 교탁에 놓고 그날 찍어 둔 사진(또는 활동지 그림)과 나란히 보여 준다. "달라진 것도 있고 그대로인 것도 있어요. 무엇이 달라졌는지 견주어 봐요." 시연 단추로 \'잎 수\' 카드가 \'달라졌어요\' 칸에 놓이는 모습을 보여 준다.',
        student: '처음 사진과 지금 화분을 견주어 보고 달라진 곳을 손가락으로 짚어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '처음과 지금', slots: ['달라졌어요', '그대로예요'], cards: ['잎 수', '화분 색'], shuffle: false }, sequence: [{ sort: { '달라졌어요': ['잎 수'], '그대로예요': ['화분 색'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 달라진 점, 그대로인 점 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"첫날 기록과 나중 기록의 같은 칸을 손가락 두 개로 함께 짚어 보세요. 수가 바뀌었나요?" 문항 글의 두 기록을 한 칸씩 견주게 한다. 키는 자로 잰 수, 잎은 센 수라는 것을 짚는다. "다 자랐으니 다 달라졌어요"라는 학생에게 화분 색처럼 그대로인 것도 찾게 한다.',
            task: '문항에 적힌 두 기록을 견주어 카드를 달라진 점과 그대로인 점으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '강낭콩 화분 기록이에요. 첫날: 잎 2장, 키 4cm, 잎 초록. 일주일 뒤: 잎 4장, 키 9cm, 잎 초록. 나누어 보세요.', toolOptions: { topic: '강낭콩 화분', slots: ['달라졌어요', '그대로예요'], cards: ['잎 수', '키', '잎 색'] },
                target: { sort: { '달라졌어요': ['잎 수', '키'], '그대로예요': ['잎 색'] } }, difficulty: 0.15 },
              { prompt: '상추 화분 기록이에요. 첫날: 잎 3장, 연두색, 창가. 열흘 뒤: 잎 7장, 초록색, 창가. 나누어 보세요.', toolOptions: { topic: '상추 화분', slots: ['달라졌어요', '그대로예요'], cards: ['잎 수', '잎 색', '화분 자리'] },
                target: { sort: { '달라졌어요': ['잎 수', '잎 색'], '그대로예요': ['화분 자리'] } }, difficulty: 0.2 },
              { prompt: '봉숭아 화분 기록이에요. 첫날: 키 6cm, 꽃 없음, 잎 5장. 두 주 뒤: 키 15cm, 분홍 꽃 2송이, 잎 5장. 나누어 보세요.', toolOptions: { topic: '봉숭아 화분', slots: ['달라졌어요', '그대로예요'], cards: ['키', '꽃', '잎 수'] },
                target: { sort: { '달라졌어요': ['키', '꽃'], '그대로예요': ['잎 수'] } }, difficulty: 0.25,
                predict: { q: '자란 화분은 모든 것이 다 달라졌을까요?', options: ['다 달라져요', '그대로인 것도 있어요'], answer: 1 },
                conclude: '두 기록을 칸마다 견주면 달라진 것과 그대로인 것이 함께 보여요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 달라진 모습 차례대로 놓기', minutes: 14, tool: 'lifecycle',
            teacher: '"우리 화분이 처음부터 지금까지 어떤 모습을 거쳤나요?" 차례를 놓은 뒤 \'차례대로 따라가 보기\' 단추를 눌러 "처음에는 … 그다음에 …" 하고 말하게 한다. 셋째 문항처럼 돌보지 않은 화분도 달라진다는 것을 견주며 "돌본 화분과 무엇이 다를까요?"라고 묻는다.',
            task: '화분이 달라진 모습을 처음부터 차례대로 놓아요. 이 판은 끝에서 처음으로 돌아가지 않아요.',
            levels: CARD_LV,
            items: [
              { prompt: '강낭콩 화분이 달라진 모습을 차례대로 놓아 보세요.', toolOptions: { center: '강낭콩 화분 관찰', cycle: false, cards: [c('흙 속에 씨앗만 있어요', 'seed'), '흙이 볼록 솟았어요', c('떡잎 두 장이 벌어졌어요', 'sprout'), c('본잎이 나왔어요', 'leaf')] },
                target: { order: ['흙 속에 씨앗만 있어요', '흙이 볼록 솟았어요', '떡잎 두 장이 벌어졌어요', '본잎이 나왔어요'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: [c('흙 속에 씨앗만 있어요', 'seed'), '흙이 볼록 솟았어요', c('떡잎 두 장이 벌어졌어요', 'sprout'), c('본잎이 나왔어요', 'leaf'), '화분이 깨졌어요'], slots: 4 } } } },
              { prompt: '봉숭아 화분이 달라진 모습을 차례대로 놓아 보세요.', toolOptions: { center: '봉숭아 화분 관찰', cycle: false, cards: [c('작은 싹이 났어요', 'sprout'), c('잎이 여러 장 났어요', 'leaf'), '꽃봉오리가 생겼어요', c('분홍 꽃이 피었어요', 'flower')] },
                target: { order: ['작은 싹이 났어요', '잎이 여러 장 났어요', '꽃봉오리가 생겼어요', '분홍 꽃이 피었어요'] }, difficulty: 0.2 },
              { prompt: '물을 주지 않은 화분이 달라진 모습을 차례대로 놓아 보세요.', toolOptions: { center: '돌보지 않은 화분', cycle: false, cards: ['흙이 바싹 말라요', '잎이 축 처져요', '잎 끝이 누렇게 말라요'] },
                target: { order: ['흙이 바싹 말라요', '잎이 축 처져요', '잎 끝이 누렇게 말라요'] }, difficulty: 0.2,
                hints: ['물이 모자라면 흙에서 시작해 잎까지 차례로 바뀌어요. 가장 먼저 바뀌는 곳을 맨 위에 놓아요.', '어긋난 자리를 짚어 보세요. 잎이 마르기 전에 먼저 처지는 모습이 보여요.', '흙이 마름 → 잎이 처짐 → 잎 끝이 누렇게 마름 차례예요.'],
                predict: { q: '돌보지 않은 화분도 모습이 달라질까요?', options: ['달라져요', '그대로예요'], answer: 0 },
                conclude: '돌보지 않아도 모습은 달라져요. 돌보면 자라고, 돌보지 않으면 시들어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내가 돌본 화분은 어떻게 달라졌나요? 한 문장으로 말해 보세요." 키·잎 수처럼 센 수나 잰 수를 넣어 말한 학생을 칭찬한다. 출구 첫 문항은 마음 크기만 고르면 되고 맞고 틀림이 없다고 말한다. 다음 시간에는 사흘 기록표를 가져와 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '내가 돌본 화분이 처음보다 달라진 모습을 보았어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '아주 많이'], ask: '지금 뿌듯한 마음은 얼마나 될까요?' }, prompt: '돌본 화분을 본 내 마음의 크기를 골라 보세요. 맞고 틀림이 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          { type: 'choice', prompt: '해바라기 화분 기록이에요. 첫날 잎 4장, 키 10cm. 열흘 뒤 잎 4장, 키 18cm. 달라진 것은 무엇인가요?', options: ['잎 수', '키', '둘 다 그대로'], answer: 1, difficulty: 0.2, explain: '잎은 4장 그대로이고, 키가 10cm에서 18cm로 자랐어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '달라진 우리 화분',
      items: [
        { type: 'table', prompt: '처음과 지금의 화분을 견주어 쓰세요.', columns: ['살펴본 것', '처음', '지금'], cells: [['잎 수', '', ''], ['키', '', ''], ['잎 색', '', '']] },
        { type: 'choice', prompt: '물을 주지 않은 화분에서 먼저 보이는 모습에 ○ 하세요.', options: ['잎이 축 처져요', '꽃이 활짝 펴요', '키가 쑥 자라요'], answer: '잎이 축 처져요' },
        { type: 'short', prompt: '내가 돌본 화분이 어떻게 달라졌는지 한 문장으로 쓰세요.' },
        { type: 'draw', prompt: '처음 모습과 지금 모습을 나란히 그리세요.' },
      ],
      easy: {
        note: '같은 칸끼리 견주어 수가 바뀌었는지 봐요.',
        items: [
          { type: 'choice', prompt: '잎이 2장에서 4장이 되었어요. 무엇이 달라졌나요?', options: ['잎 수', '잎 색'], answer: '잎 수' },
          { type: 'choice', prompt: '돌보지 않은 화분은 어떻게 될까요?', options: ['시들어요', '꽃이 펴요'], answer: '시들어요' },
          { type: 'draw', prompt: '처음 모습과 지금 모습을 나란히 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '두 기록을 칸마다 견주어 나누고, 달라진 모습을 차례대로 놓아요.',
      challenge: '관찰 차례와 상관없는 카드가 섞여 있어 판에 놓지 않고 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자랐으니 모든 것이 달라졌다고 여긴다 → 칸마다 두 손가락으로 짚어 견주게 한다. ② "커졌어요"로만 말한다 → 잎 수나 키처럼 센 수·잰 수를 넣어 말하게 한다. ③ 화분이 시들어 속상해한다 → 시든 까닭을 함께 찾고 다시 돌보면 된다고 말한다. 화분 사진은 18차시 탐구 물음 만들기에도 다시 쓴다.',
  }));

  lessons.push(L(13, {
    title: '사흘 기록표 돌아보고 잘한 점 찾기',
    objective: '사흘 기록표를 읽고 잘한 점과 더 노력할 점을 나누며, 지키지 못한 날에도 다시 하는 마음을 고를 수 있다.',
    illustration: ART('a child holding a three-day record sheet with circle marks and one empty box, smiling at a small pot on the desk', '사흘 동안 어땠나요?', [
      { motif: 'star', x: 130, y: 100, s: 0.7 }, { motif: 'star', x: 180, y: 120, s: 0.5 }, { motif: 'flower', x: 360, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"10차시에 정한 맡은 일을 사흘 동안 해 보았어요. 기록표를 꺼내 보세요. ○가 몇 개인가요?" 손가락으로 세게 한다. "○가 세 개여도, 하나여도 괜찮아요. 오늘은 기록표에서 잘한 점과 더 노력할 점을 찾아요." 시연 단추로 \'사흘 모두 해냈어요\' 카드가 \'잘한 점\' 칸에 놓이는 모습을 보여 준다. ○를 채우지 못한 학생이 부끄러워하지 않도록, 빈칸을 찾은 것도 잘한 기록이라고 먼저 말한다.',
        student: '내 기록표의 ○ 수를 세어 보고, 가장 기억에 남는 날을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '내 기록표', slots: ['잘한 점', '더 노력할 점'], cards: ['사흘 모두 해냈어요', '날짜를 안 썼어요'], shuffle: false }, sequence: [{ sort: { '잘한 점': ['사흘 모두 해냈어요'], '더 노력할 점': ['날짜를 안 썼어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 기록표 읽고 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"준호의 기록표에서 칭찬해 줄 곳은 어디이고, 다음에 더 잘할 곳은 어디일까요?" 친구 기록을 먼저 읽어 본 뒤 내 기록표에서도 같은 것을 찾게 한다. 잊은 날을 빈칸으로 둔 것은 거짓 없이 쓴 잘한 기록이라는 것을 짚는다.',
            task: '친구가 쓴 기록표 이야기 카드를 잘한 점과 더 노력할 점으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호의 화분 돌보기 기록을 잘한 점과 더 노력할 점으로 나누어 보세요.', toolOptions: { topic: '준호의 기록표', slots: ['잘한 점', '더 노력할 점'], cards: ['사흘 모두 흙을 만져 봤어요', '둘째 날 날짜를 안 썼어요', '달라진 점을 그림으로 그렸어요', '셋째 날 기록을 잊었어요'] },
                target: { sort: { '잘한 점': ['사흘 모두 흙을 만져 봤어요', '달라진 점을 그림으로 그렸어요'], '더 노력할 점': ['둘째 날 날짜를 안 썼어요', '셋째 날 기록을 잊었어요'] } }, difficulty: 0.15 },
              { prompt: '서아의 양치 컵 쓰기 기록을 나누어 보세요.', toolOptions: { topic: '서아의 기록표', slots: ['잘한 점', '더 노력할 점'], cards: ['잊은 날을 빈칸으로 솔직하게 뒀어요', '잊은 까닭을 한 낱말로 썼어요', '첫째 날 컵 쓰기를 잊었어요'] },
                target: { sort: { '잘한 점': ['잊은 날을 빈칸으로 솔직하게 뒀어요', '잊은 까닭을 한 낱말로 썼어요'], '더 노력할 점': ['첫째 날 컵 쓰기를 잊었어요'] } }, difficulty: 0.2,
                predict: { q: '잊은 날을 빈칸으로 둔 것은 잘한 점일까요?', options: ['잘한 점', '못한 점'], answer: 0 },
                conclude: '잊은 날을 솔직하게 적어야 다음에 무엇을 고칠지 알 수 있어요.' },
              { prompt: '하준이의 종이 아끼기 기록을 나누어 보세요. 기록과 상관없는 카드는 남겨요.', toolOptions: { topic: '하준이의 기록표', slots: ['잘한 점', '더 노력할 점'], cards: ['이면지를 날마다 썼어요', '공책을 반만 쓰고 새것을 꺼냈어요', '하준이는 축구를 좋아해요'] },
                target: { sort: { '잘한 점': ['이면지를 날마다 썼어요'], '더 노력할 점': ['공책을 반만 쓰고 새것을 꺼냈어요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '하준이의 종이 아끼기 기록을 나누어 보세요. 기록과 상관없는 카드는 남겨요. 카드가 더 많아요.', toolOptions: { cards: ['이면지를 날마다 썼어요', '공책을 반만 쓰고 새것을 꺼냈어요', '하준이는 축구를 좋아해요', '가족에게 손수건을 권했어요', '휴지를 한 뭉치씩 뽑았어요'] },
                  target: { sort: { '잘한 점': ['이면지를 날마다 썼어요', '가족에게 손수건을 권했어요'], '더 노력할 점': ['공책을 반만 쓰고 새것을 꺼냈어요', '휴지를 한 뭉치씩 뽑았어요'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록을 돌아보는 마음', minutes: 14, tool: 'emotion',
            teacher: '"하루를 잊었을 때 마음은 어떤 날씨였나요?" 마음을 고른 뒤 "그 마음이 들면 무엇을 하면 좋을까요?"로 이어 간다. 기록표에 없는 ○를 몰래 채우는 보기를 고르는 학생에게는 결과를 소리 내어 읽게 하고, 솔직한 기록이 다음 계획을 돕는다는 것을 짚는다.',
            task: '기록을 돌아볼 때 드는 마음을 고르고, 잊은 날에 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '기록표를 돌아볼 때 드는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '속상함', '기쁨'], slots: [{ id: 's1', label: '사흘 모두 ○를 그렸어요' }, { id: 's2', label: '하루를 깜빡 잊었어요' }, { id: 's3', label: '친구가 내 화분이 컸다고 칭찬했어요' }] },
                target: { match: { s1: ['뿌듯함', '기쁨'], s2: '속상함', s3: ['기쁨', '뿌듯함'] } }, difficulty: 0.1 },
              { prompt: '셋째 날을 잊었어요. 기록표를 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지는 셋째 날 화분 돌보기를 잊었어요. 기록표 셋째 날 칸이 비어 있어요.', choices: [
                { id: 'fake', text: '몰래 ○를 그려 넣어요', result: '기록표가 틀려서 무엇을 고칠지 알 수 없어요.', mood: '걱정', why: '없는 ○를 그리면 다음에 무엇을 고칠지 알 수 없어요.' },
                { id: 'honest', text: '빈칸으로 두고 잊은 까닭을 써요', result: '다음에 잊지 않을 방법을 찾을 수 있어요.', mood: '편안함' },
                { id: 'quit', text: '기록표를 버리고 그만둬요', result: '화분 돌보기도 기록도 멈춰요.', mood: '슬픔', why: '하루 잊었다고 그만두면 지금까지 한 일도 이어지지 않아요.' }] }, target: { choice: 'honest' }, difficulty: 0.15 },
              { prompt: '하루를 잊고 속상한 친구에게 해 줄 말을 골라 보세요.', toolOptions: { mode: 'pick', basket: '힘이 되는 말', cards: ['"내일 다시 하면 돼"', '"이틀이나 해낸 게 대단해"', '"넌 원래 잘 잊잖아"', '"그럴 거면 하지 마"'] },
                target: { pick: ['"내일 다시 하면 돼"', '"이틀이나 해낸 게 대단해"'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 기록표에서 찾은 잘한 점 하나를 짝에게 말해 주세요." 짝이 "잘했어"라고 답하게 한다. 출구 첫 문항은 마음 크기만 고르면 되고 맞고 틀림이 없다고 말한다. 다음 시간에는 한 사람의 실천이 모이면 무엇이 달라지는지 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '사흘 동안 맡은 일을 해 보았어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금 했어요', '거의 했어요', '다 했어요'], ask: '나는 맡은 일을 얼마나 해냈나요?' }, prompt: '사흘 동안 맡은 일을 얼마나 해냈는지 솔직하게 골라 보세요. 맞고 틀림이 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          { type: 'choice', prompt: '기록표의 잊은 날 칸은 어떻게 하면 좋을까요?', options: ['몰래 ○를 그려요', '빈칸으로 두고 까닭을 써요', '그 줄을 지워요'], answer: 1, difficulty: 0.1, explain: '솔직하게 써야 다음에 잊지 않을 방법을 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 기록표 돌아보기',
      items: [
        { type: 'short', prompt: '내 기록표에서 ○는 몇 개인지 쓰세요.' },
        { type: 'table', prompt: '내 기록표에서 찾은 것을 쓰세요.', columns: ['잘한 점', '더 노력할 점'], rows: 2 },
        { type: 'choice', prompt: '하루를 잊은 친구에게 힘이 되는 말에 ○ 하세요.', options: ['"내일 다시 하면 돼"', '"넌 원래 잘 잊잖아"'], answer: '"내일 다시 하면 돼"' },
        { type: 'short', prompt: '다음에 맡은 일을 할 때 바꾸고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '잊은 날을 찾은 것도 잘한 기록이에요.',
        items: [
          { type: 'short', prompt: '내 기록표에서 ○는 몇 개인지 쓰세요.' },
          { type: 'short', prompt: '내가 잘한 점 하나를 쓰세요.' },
          { type: 'choice', prompt: '잊은 날은 어떻게 할까요?', options: ['빈칸으로 둬요', '몰래 ○를 그려요'], answer: '빈칸으로 둬요' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 내 기록표에서도 잘한 점과 노력할 점을 찾아 써요.',
      challenge: '기록과 상관없는 카드가 섞여 있고 카드가 더 많아요. 노력할 점마다 바꿀 방법도 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① ○가 적은 학생이 기록표를 숨긴다 → 빈칸을 찾은 것도 잘한 기록이라고 미리 말하고, 발표는 잘한 점만 하게 한다. ② 없는 ○를 그려 넣는다 → 꾸짖지 않고 솔직한 기록이 다음 계획을 돕는다는 것을 짚는다. ③ 기록표를 잃어버렸다 → 기억나는 날만 다시 적게 한다. 이 차시의 자기 평가 눈금은 채점하지 않고 교사가 다음 계획을 돕는 데만 쓴다.',
  }));

  lessons.push(L(14, {
    title: '한 사람씩 모이면 달라지는 것 그래프로 보기',
    objective: '우리 반 실천 그림그래프를 읽고 실천한 친구가 모일수록 아낀 것이 늘어남을 말하며, "나 하나쯤이야"라는 생각에 답할 수 있다.',
    illustration: ART('a paper picture graph on a classroom board with growing rows of little cup icons for Monday, Tuesday and Wednesday, children counting them', '한 명 한 명이 모이면', [
      { motif: 'star', x: 120, y: 100, s: 0.6 }, { motif: 'flower', x: 380, y: 226 }, { motif: 'leaf', x: 90, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반 한 사람이 양치 컵을 쓰면 물이 조금 아껴져요. 그럼 우리 반 모두가 쓰면요?" 칠판에 컵 그림을 한 개 그린 뒤 학생 수만큼 이어 그리며 보여 준다. "어떤 친구는 \'나 하나쯤 안 해도 괜찮아\'라고 말해요. 정말 그럴까요?" 시연 단추로 그림그래프에 컵 그림이 하나씩 쌓이는 모습을 보여 준다.',
        student: '우리 반에서 양치 컵을 쓰는 친구가 몇 명일지 어림해 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '양치 컵을 쓴 친구', data: [['월', 3], ['화', 6]], unit: '명', xLabel: '요일', yLabel: '친구 수', icon: 'person', showTable: true }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 실천 그림그래프 읽기', minutes: 14, tool: 'chart',
            teacher: '"그림 하나가 친구 한 명이에요. 손가락으로 하나씩 짚으며 세어 보세요." 그림이 가장 긴 줄이 가장 많은 날이라는 것을 짚는다. 읽은 뒤 "날마다 친구가 늘면 아낀 물은 어떻게 될까요?"라고 묻는다. 그래프 수는 우리가 지어낸 예시 반의 기록이라고 알려 준다.',
            task: '그림그래프의 그림을 세어 읽고 물음에 답해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '양치 컵을 쓴 친구가 가장 많은 날을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '양치 컵을 쓴 친구', data: [['월', 2], ['화', 5], ['수', 8]], unit: '명', xLabel: '요일', icon: 'person', choices: ['월', '화', '수'], question: '가장 많은 날은?', why: ['월요일 줄은 그림이 가장 짧아요.', '화요일보다 그림이 더 많은 줄이 있어요.', ''], explain: '수요일 줄의 그림이 8개로 가장 길어요.' },
                target: { pick: 2 }, difficulty: 0.1 },
              { prompt: '이면지함을 쓴 친구가 가장 적은 날을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '이면지함을 쓴 친구', data: [['월', 6], ['화', 3], ['수', 7], ['목', 9]], unit: '명', xLabel: '요일', icon: 'person', choices: ['월', '화', '수', '목'], question: '가장 적은 날은?', why: ['월요일보다 그림이 더 적은 줄이 있어요.', '', '수요일은 그림이 꽤 많아요.', '목요일 줄은 그림이 가장 길어요.'], explain: '화요일 줄의 그림이 3개로 가장 짧아요.' },
                target: { pick: 1 }, difficulty: 0.15 },
              { prompt: '그림그래프를 보고 표의 빈칸에 친구 수를 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '손 씻을 때 물을 잠근 친구', data: [['월', 4], ['화', 7], ['수', 9]], unit: '명', xLabel: '요일', icon: 'person', tableBlanks: [0, 1, 2] },
                target: { table: true }, difficulty: 0.2,
                predict: { q: '날마다 친구가 늘어나면 아낀 물은 어떻게 될까요?', options: ['늘어나요', '줄어들어요'], answer: 0 },
                conclude: '한 명 한 명이 모이면 아낀 물도 그만큼 많아져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. "나 하나쯤이야"에 답하기', minutes: 13, tool: 'emotion',
            teacher: '"하준이가 \'나 하나 아껴도 소용없어\'라고 했어요. 그래프를 본 우리는 뭐라고 말해 줄 수 있을까요?" 그래프를 근거로 대며 답하게 한다. 마음 크기를 고를 때는 이야기 속 \'혼자\', \'반 친구 모두\' 같은 말을 손가락으로 짚게 한다.',
            task: '이야기를 읽고 알맞은 말과 행동을 고르거나, 마음의 크기를 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '하준이에게 어떤 말을 해 줄까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 "나 하나 아껴도 소용없어. 다른 사람들은 펑펑 쓰잖아."라고 말해요.', choices: [
                { id: 'graph', text: '"우리 반 그래프를 봐. 한 명씩 모이니까 많아졌어"', result: '하준이가 그래프를 보고 "나도 해 볼래" 해요.', mood: '뿌듯함' },
                { id: 'agree', text: '"맞아, 우리도 그만하자"', result: '아껴 쓰던 친구들까지 그만둬요.', mood: '걱정', why: '모두가 그만두면 아끼는 물이 하나도 없어요.' },
                { id: 'angry', text: '"넌 왜 그렇게 말해?" 하고 화내요', result: '하준이가 기분이 상해 이야기를 듣지 않아요.', mood: '화남', why: '화를 내면 친구가 까닭을 들으려 하지 않아요.' }] }, target: { choice: 'graph' }, difficulty: 0.1 },
              { prompt: '우리 반 모두가 일주일 동안 이면지를 썼어요. 뿌듯한 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '우리 반 친구 모두가 일주일 동안 이면지를 써서, 새 종이를 한 묶음도 꺼내지 않았어요.', feeling: '뿌듯함', after: '모두가 함께하면 이렇게 큰 일이 돼요.' }, target: { level: [4, 5] }, difficulty: 0.15,
                levels: { easy: { prompt: '우리 반 모두가 일주일 동안 이면지를 썼어요. 뿌듯한 마음을 세 칸에서 골라 보세요.', target: { level: 3 } } } },
              { prompt: '혼자 화단 쓰레기를 줍고 있는데 친구가 같이 하자고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 혼자 화단 쓰레기를 줍고 있었는데, 친구 둘이 와서 "우리도 같이 할까?" 해요.', choices: [
                { id: 'together', text: '"좋아, 같이 하면 빨리 끝나" 하고 봉투를 나눠요', result: '셋이 함께 해서 화단이 금방 깨끗해져요.', mood: '기쁨' },
                { id: 'alone', text: '"내가 혼자 할게" 하고 보내요', result: '서아 혼자 오래오래 주워요.', mood: '속상함', why: '함께하면 더 많이, 더 빨리 할 수 있어요.' }] }, target: { choice: 'together' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"한 사람의 실천은 작아 보여요. 그런데 모이면 어떻게 되었나요?" 그래프를 다시 짚으며 두세 명이 말하게 한다. 출구 첫 문항을 틀린 학생에게는 그림을 손가락으로 하나씩 세게 한다. 다음 시간에는 지키지 못한 날 다시 하는 방법을 찾는다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '2반 텃밭 물 주기 당번', data: [['1주', 3], ['2주', 6], ['3주', 4]], unit: '명', xLabel: '주', icon: 'person', choices: ['1주', '2주', '3주'], question: '당번이 가장 많은 주는?', explain: '2주 줄의 그림이 6개로 가장 많아요.' }, prompt: '2반의 그림그래프를 보고 당번이 가장 많은 주를 골라 보세요.', target: { pick: 1 }, difficulty: 0.15 },
          { type: 'choice', prompt: '"나 하나 아껴도 소용없어"라는 말에 알맞은 생각은 무엇인가요?', options: ['맞아요, 소용없어요', '한 명씩 모이면 큰 힘이 돼요'], answer: 1, difficulty: 0.1, explain: '그래프에서 본 것처럼 한 명씩 늘어나면 아끼는 양도 늘어나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 명씩 모이면',
      items: [
        { type: 'figure', wide: true, prompt: '그림그래프를 보고 요일마다 친구 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '양치 컵을 쓴 친구', data: [['월', 3], ['화', 5], ['수', 8]], unit: '명', icon: 'person' }, caption: '월 (   )명, 화 (   )명, 수 (   )명' }], answer: '월 3명, 화 5명, 수 8명' },
        { type: 'choice', prompt: '위 그래프에서 가장 많은 날에 ○ 하세요.', options: ['월', '화', '수'], answer: '수' },
        { type: 'short', prompt: '"나 하나쯤이야"라고 말하는 친구에게 해 줄 말을 쓰세요.' },
        { type: 'draw', prompt: '우리 반 모두가 함께 아끼는 모습을 그리세요.' },
      ],
      easy: {
        note: '그림 하나가 한 명이에요. 하나씩 짚으며 세어요.',
        items: [
          { type: 'figure', wide: true, prompt: '그림을 세어 친구 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '이면지를 쓴 친구', data: [['월', 2], ['화', 4]], unit: '명', icon: 'person' }, caption: '월 (   )명, 화 (   )명' }], answer: '월 2명, 화 4명' },
          { type: 'choice', prompt: '한 명씩 모이면 어떻게 될까요?', options: ['큰 힘이 돼요', '소용없어요'], answer: '큰 힘이 돼요' },
          { type: 'draw', prompt: '함께 아끼는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 줄 끝에 수가 보여요. 마음 크기는 세 칸이에요.',
      base: '그림을 하나씩 세어 읽고 물음에 답해요.',
      challenge: '표 빈칸 문항은 그림을 다 센 뒤 줄끼리 몇 명 차이인지 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 사람이 아끼는 것은 소용없다고 여긴다(이 차시의 핵심 오개념) → 그래프에서 한 명씩 늘어나는 줄을 짚게 한다. ② 그림을 세다가 줄을 놓친다 → 손가락으로 짚으며 소리 내어 센다. ③ 그래프의 수를 우리 반 실제 기록으로 여긴다 → 예시 반의 기록이라고 알려 주고, 원하면 우리 반 기록으로 같은 그래프를 칠판에 함께 만든다.',
  }));

  lessons.push(L(15, {
    title: '지키지 못한 날 다시 하는 방법 찾기',
    objective: '맡은 일을 잊은 까닭에 맞는 방법을 찾아 잇고, 잊었을 때 다시 하는 차례를 말할 수 있다.',
    illustration: ART('a child sticking a small reminder note with a water cup drawing on the bathroom mirror, with a pot plant on the windowsill', '다시 해 봐요', [
      { motif: 'star', x: 120, y: 96, s: 0.6 }, { motif: 'flower', x: 380, y: 226 }, { motif: 'house', x: 110, y: 212 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님도 어제 화분 물 주기를 깜빡 잊었어요. 왜 잊었을까요?" 선생님의 예를 먼저 말해 학생들이 편하게 말하게 한다. "잊는 것은 누구나 그래요. 중요한 건 다시 하는 거예요." 13차시 기록표의 잊은 까닭 칸을 다시 보게 한다. 시연 단추로 \'아침에 바빠서\' 옆에 \'전날 밤에 컵을 세면대에 둬요\' 카드가 놓이는 모습을 보여 준다.',
        student: '내가 맡은 일을 잊은 적이 있다면 그 까닭을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '잊지 않는 방법', slots: [{ id: 's1', label: '아침에 바빠서 잊었어요' }], cards: ['전날 밤에 컵을 세면대에 둬요', '그냥 그만둬요'], shuffle: false }, sequence: [{ match: { s1: '전날 밤에 컵을 세면대에 둬요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 잊은 까닭에 맞는 방법 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"까닭이 다르면 방법도 달라요. 화분이 안 보여서 잊었다면 무엇을 바꾸면 될까요?" 까닭 칸을 먼저 소리 내어 읽게 한다. 이은 뒤 내 기록표의 잊은 까닭에 맞는 방법을 활동지에 쓰게 한다.',
            task: '잊은 까닭 옆에 잊지 않게 돕는 방법 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '잊은 까닭마다 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '잊지 않는 방법', slots: [{ id: 's1', label: '아침에 바빠서 잊었어요' }, { id: 's2', label: '화분이 안 보여서 잊었어요' }, { id: 's3', label: '이면지함이 멀어서 잊었어요' }], cards: ['전날 밤에 컵을 세면대에 둬요', '화분을 내 자리 가까이 옮겨요', '이면지를 책상 서랍에 넣어 둬요'] },
                target: { match: { s1: '전날 밤에 컵을 세면대에 둬요', s2: '화분을 내 자리 가까이 옮겨요', s3: '이면지를 책상 서랍에 넣어 둬요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['전날 밤에 컵을 세면대에 둬요', '화분을 내 자리 가까이 옮겨요', '이면지를 책상 서랍에 넣어 둬요', '기록표를 버려요'] } } } },
              { prompt: '다른 까닭에도 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '잊지 않는 방법', slots: [{ id: 's1', label: '놀다가 시간이 지나 잊었어요' }, { id: 's2', label: '무엇을 하기로 했는지 잊었어요' }], cards: ['쉬는 시간 종이 치면 먼저 해요', '할 일을 쪽지에 써서 붙여요'] },
                target: { match: { s1: '쉬는 시간 종이 치면 먼저 해요', s2: '할 일을 쪽지에 써서 붙여요' } }, difficulty: 0.2 },
              { prompt: '잊지 않게 돕는 방법만 골라 보세요.', toolOptions: { mode: 'pick', topic: '잊지 않게 도와요', cards: ['짝과 서로 알려 주기로 해요', '알림 그림을 거울에 붙여요', '잊으면 다음 주에 해요', '기록표를 서랍 깊이 넣어요'] },
                target: { pick: ['짝과 서로 알려 주기로 해요', '알림 그림을 거울에 붙여요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 하는 차례 정하기', minutes: 13, tool: 'story',
            teacher: '"잊은 것을 알았을 때 맨 먼저 무엇을 할까요?" 차례를 놓은 뒤 \'왜 잊었는지 생각하기\'를 빼면 어떻게 될지 묻는다. 다시 하는 것은 벌이 아니라 고치는 것이라고 짚는다. 마지막 문항은 내 알림 쪽지를 실제로 만들어 붙인다.',
            task: '잊은 것을 알았을 때 다시 하는 차례대로 카드를 놓고, 알림 쪽지를 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '잊은 것을 알았을 때 다시 하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['잊은 것을 알아차려요', '왜 잊었는지 생각해요', '잊지 않을 방법을 정해요', '다음 날 다시 해요'] },
                target: { order: ['잊은 것을 알아차려요', '왜 잊었는지 생각해요', '잊지 않을 방법을 정해요', '다음 날 다시 해요'] }, difficulty: 0.15,
                hints: ['먼저 내가 무엇을 잊었는지 알아야 그다음을 할 수 있어요. 아는 일부터 놓아요.', '어긋난 자리를 짚어 보세요. 방법은 까닭을 안 뒤에 정할 수 있어요.', '알아차리기 → 까닭 생각하기 → 방법 정하기 → 다시 하기 차례예요.'],
                levels: { challenge: { toolOptions: { cards: ['잊은 것을 알아차려요', '왜 잊었는지 생각해요', '잊지 않을 방법을 정해요', '다음 날 다시 해요', '모른 척해요'], slots: 4 } } } },
              { prompt: '민지가 다시 하는 이야기의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['쪽지', '다시', '그만'], slots: [{ id: 'f1', who: '민지', label: '물 주기를 잊어서 화분 옆에 ___를 붙였어요.' }, { id: 'f2', who: '민지', label: '다음 날 아침 ___ 흙을 만져 보았어요.' }] },
                target: { fill: { f1: '쪽지', f2: '다시' } }, difficulty: 0.15 },
              { prompt: '내 알림 쪽지를 그려 붙일 곳에 붙이고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 만든 알림 쪽지를 어디에 붙였나요?" 두세 명이 말하게 한다. 출구 첫 문항을 틀린 학생에게는 까닭 칸을 다시 소리 내어 읽게 한다. 다음 시간에는 우리 반이 함께 지킬 약속을 정해 붙인다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '잊지 않는 방법', slots: [{ id: 'e1', label: '손수건을 집에 두고 와서 잊었어요' }, { id: 'e2', label: '물뿌리개가 비어 있어서 못 했어요' }], cards: ['전날 가방에 손수건을 넣어 둬요', '쓴 뒤에 물뿌리개를 채워 둬요'] }, prompt: '잊은 까닭과 알맞은 방법을 이어 보세요.', target: { match: { e1: '전날 가방에 손수건을 넣어 둬요', e2: '쓴 뒤에 물뿌리개를 채워 둬요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '맡은 일을 하루 잊었어요. 어떻게 하면 좋을까요?', options: ['그만둬요', '까닭을 찾고 다시 해요', '모른 척해요'], answer: 1, difficulty: 0.1, explain: '잊은 까닭을 찾아 방법을 바꾸고 다시 하면 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 해 봐요',
      items: [
        { type: 'table', prompt: '내가 잊은 까닭과 잊지 않을 방법을 쓰세요.', columns: ['잊은 까닭', '잊지 않을 방법'], rows: 2 },
        { type: 'table', prompt: '다시 하는 차례를 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'choice', prompt: '"무엇을 하기로 했는지 잊었어요"에 알맞은 방법에 ○ 하세요.', options: ['할 일을 쪽지에 써서 붙여요', '기록표를 버려요', '다음 주에 해요'], answer: '할 일을 쪽지에 써서 붙여요' },
        { type: 'draw', prompt: '내 알림 쪽지를 그려 보세요.' },
      ],
      easy: {
        note: '잊는 것은 누구나 그래요. 다시 하면 돼요.',
        items: [
          { type: 'choice', prompt: '잊은 것을 알았을 때 먼저 할 일에 ○ 하세요.', options: ['까닭 생각하기', '그만두기'], answer: '까닭 생각하기' },
          { type: 'short', prompt: '잊지 않을 방법 하나를 쓰세요.' },
          { type: 'draw', prompt: '내 알림 쪽지를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 내 까닭에 맞는 방법을 활동지에 써요.',
      challenge: '맞지 않는 방법 카드와 차례에 끼어든 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 잊으면 그만둬야 한다고 여긴다 → 선생님도 잊는다는 예를 들고, 다시 하는 것이 진짜 습관이라고 말한다. ② 까닭과 상관없는 방법(무조건 열심히)을 고른다 → 까닭을 바꾸어 주는 방법을 찾게 한다. ③ 알림 쪽지를 친구 자리에 붙인다 → 내가 그 일을 하는 곳에 붙인다고 짚는다.',
  }));

  lessons.push(L(16, {
    title: '우리 반 생태 약속 정해 약속판 꾸미기',
    objective: '지킬 수 있는 생태 약속을 골라 우리 반 약속을 하나 정하고, 약속의 뜻이 보이게 약속판을 꾸며 교실에 붙일 수 있다.',
    illustration: ART('a classroom wall with a colorful paper promise board decorated with blue water drops, green leaves and a smiling earth, children adding their handprints', '우리 반 약속', [
      { motif: 'leaf', x: 110, y: 226 }, { motif: 'flower', x: 380, y: 226 }, { motif: 'star', x: 240, y: 90, s: 0.7 }]),
    safety: ['가위를 쓸 때는 날을 몸 반대쪽으로 하고, 건넬 때는 손잡이를 내밀어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'지구를 지켜요\'와 \'비누칠할 때 물을 잠가요\' 가운데 내일 바로 지킬 수 있는 약속은 무엇일까요?" 두 약속을 칠판에 쓰고 손을 들어 고르게 한다. "약속은 무엇을 할지 또렷하고, 우리가 지킬 수 있어야 해요. 오늘은 우리 반 모두가 함께 지킬 약속을 하나 정해요." 시연 단추로 또렷한 약속 카드가 바구니에 담기는 모습을 보여 준다.',
        student: '내일 바로 지킬 수 있는 약속을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '지킬 수 있는 약속', cards: ['비누칠할 때 물을 잠가요', '지구를 지켜요'], shuffle: false }, sequence: [{ pick: ['비누칠할 때 물을 잠가요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 지킬 수 있는 약속 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 약속을 지켰는지 안 지켰는지 눈으로 알 수 있나요? 우리 반 모두 지킬 수 있나요?" 두 물음으로 약속 카드를 따지게 한다. \'절대로 물을 쓰지 않아요\'처럼 지킬 수 없는 약속을 고르면 "물을 안 쓰면 손은 어떻게 씻지요?"라고 되묻는다. 고른 약속 가운데 하나를 손을 들어 우리 반 약속으로 정한다.',
            task: '또렷하고 지킬 수 있는 약속 카드를 고르고, 약속과 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '또렷하고 우리가 지킬 수 있는 약속만 골라 보세요.', toolOptions: { mode: 'pick', topic: '지킬 수 있는 약속', cards: ['비누칠할 때 물을 잠가요', '화단 꽃을 꺾지 않아요', '지구를 지켜요', '절대로 물을 쓰지 않아요'] },
                target: { pick: ['비누칠할 때 물을 잠가요', '화단 꽃을 꺾지 않아요'] }, difficulty: 0.2,
                predict: { q: '"지구를 지켜요"는 지켰는지 눈으로 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요'], answer: 1 },
                conclude: '약속은 무엇을 할지 또렷해야 지켰는지 알 수 있어요.' },
              { prompt: '약속 카드를 화단·물·종이 약속으로 나누어 보세요.', toolOptions: { topic: '우리 반 약속', slots: ['화단 약속', '물 약속', '종이 약속'], cards: ['잔디밭 안에 들어가지 않아요', '양치할 때 컵을 써요', '이면지에 먼저 연습해요', '개미집을 밟지 않아요', '물통에 마실 만큼만 받아요'] },
                target: { sort: { '화단 약속': ['잔디밭 안에 들어가지 않아요', '개미집을 밟지 않아요'], '물 약속': ['양치할 때 컵을 써요', '물통에 마실 만큼만 받아요'], '종이 약속': ['이면지에 먼저 연습해요'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '약속 카드를 화단·물·종이 약속으로 나누어 보세요. 카드가 세 장이에요.', toolOptions: { cards: ['잔디밭 안에 들어가지 않아요', '양치할 때 컵을 써요', '이면지에 먼저 연습해요'] },
                  target: { sort: { '화단 약속': ['잔디밭 안에 들어가지 않아요'], '물 약속': ['양치할 때 컵을 써요'], '종이 약속': ['이면지에 먼저 연습해요'] } } } } },
              { prompt: '약속마다 지키는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 지킬까?', slots: [{ id: 's1', label: '화단 꽃을 꺾지 않아요' }, { id: 's2', label: '비누칠할 때 물을 잠가요' }, { id: 's3', label: '이면지에 먼저 연습해요' }], cards: ['벌과 나비가 꿀을 먹으러 와요', '깨끗한 물을 아낄 수 있어요', '나무를 덜 베어도 돼요'] },
                target: { match: { s1: '벌과 나비가 꿀을 먹으러 와요', s2: '깨끗한 물을 아낄 수 있어요', s3: '나무를 덜 베어도 돼요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['벌과 나비가 꿀을 먹으러 와요', '깨끗한 물을 아낄 수 있어요', '나무를 덜 베어도 돼요', '선생님께 혼나지 않아요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 약속판 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"약속판만 보고도 무슨 약속인지 알 수 있으려면 어떤 모양을 넣을까요?" 물 약속이면 파란 물방울, 화단 약속이면 초록 잎처럼 뜻이 보이는 모양을 고르게 한다. 화면으로 꾸며 본 뒤 모둠별로 색종이를 오려 실제 약속판에 붙이고, 우리 반 약속 글은 교사가 크게 써 준다.',
            task: '색종이 조각으로 약속의 뜻이 보이는 약속판을 꾸며요. 다 꾸미면 실제 약속판도 만들어 붙여요.',
            levels: { easy: { shapes: ['circle', 'leaf', 'heart', 'star'], colors: ['파랑', '초록', '노랑', '빨강'] }, base: {}, challenge: {} },
            items: [
              { prompt: '물 약속판을 꾸며요. 파랑 동그라미 물방울을 세 개 이상 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '물 약속판을 꾸며요. 파랑 동그라미 물방울을 세 개 이상, 노랑 별을 한 개 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', min: 3 }, { shape: 'star', color: '노랑', n: 1 }] } } } },
              { prompt: '화단 약속판을 꾸며요. 초록 나뭇잎을 두 개 이상, 분홍 하트 꽃을 한 개 이상 붙여요.', target: { has: [{ shape: 'leaf', color: '초록', min: 2 }, { shape: 'heart', color: '분홍', min: 1 }] }, difficulty: 0.15,
                levels: { easy: { prompt: '화단 약속판을 꾸며요. 초록 나뭇잎을 두 개 이상, 빨강 하트 꽃을 한 개 이상 붙여요.', target: { has: [{ shape: 'leaf', color: '초록', min: 2 }, { shape: 'heart', color: '빨강', min: 1 }] } } } },
              { prompt: '우리 반 약속판을 마음껏 꾸미고, 해낸 것을 점검해 보세요.', target: { selfCheck: ['약속의 뜻이 보이는 모양을 넣었어요', '조각을 다섯 개 이상 붙였어요', '모둠 친구와 재료를 나누어 썼어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 반 약속판을 어디에 붙이면 날마다 볼 수 있을까요?" 학생들이 고른 곳에 약속판을 함께 붙인다. 출구 첫 문항에서 막연한 약속을 고른 학생에게는 "그 약속을 지켰는지 어떻게 알 수 있을까요?"라고 다시 묻는다. 1~16차시 바른 생활 공부를 마무리하며 다음 시간부터는 둘레의 생물을 탐구한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '지킬 수 있는 약속', cards: ['쉬는 시간에 화분 흙을 만져 봐요', '종이컵 대신 내 물통을 써요', '자연을 사랑해요', '휴지를 영원히 쓰지 않아요'] }, prompt: '또렷하고 지킬 수 있는 약속만 골라 바구니에 넣어 보세요.', target: { pick: ['쉬는 시간에 화분 흙을 만져 봐요', '종이컵 대신 내 물통을 써요'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '좋은 약속은 어떤 약속일까요?', options: ['멋있는 말로 된 약속', '무엇을 할지 또렷하고 지킬 수 있는 약속', '아주 어려운 약속'], answer: 1, difficulty: 0.15, explain: '무엇을 할지 또렷해야 지켰는지 알 수 있고, 지킬 수 있어야 날마다 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 생태 약속',
      items: [
        { type: 'check', prompt: '또렷하고 지킬 수 있는 약속에 모두 ✓ 하세요.', options: ['비누칠할 때 물을 잠가요', '지구를 지켜요', '화단 꽃을 꺾지 않아요', '절대로 물을 쓰지 않아요'] },
        { type: 'short', prompt: '우리 반이 정한 약속을 쓰세요.' },
        { type: 'short', prompt: '그 약속을 지키는 까닭을 쓰세요.' },
        { type: 'draw', prompt: '약속의 뜻이 보이는 그림을 그리세요.' },
      ],
      easy: {
        note: '지켰는지 눈으로 알 수 있는 약속이 좋아요.',
        items: [
          { type: 'choice', prompt: '지킬 수 있는 약속에 ○ 하세요.', options: ['비누칠할 때 물을 잠가요', '절대로 물을 쓰지 않아요'], answer: '비누칠할 때 물을 잠가요' },
          { type: 'short', prompt: '우리 반이 정한 약속을 쓰세요.' },
          { type: 'draw', prompt: '약속의 뜻이 보이는 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기 칸에 초록 테두리가 생기고, 약속 카드가 세 장으로 줄어요. 약속판은 모양 네 가지·색 네 가지에서 골라요.',
      base: '모두 놓은 뒤 확인을 눌러요. 약속판은 조건에 맞게 꾸미고 스스로 점검해요.',
      challenge: '맞지 않는 까닭 카드가 섞여 있고, 약속판에 붙일 조건이 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 멋진 말(지구를 지켜요)을 좋은 약속으로 여긴다 → "지켰는지 어떻게 알까요?"로 또렷한 약속을 고르게 한다. ② 지킬 수 없는 약속(절대 쓰지 않기)을 고른다 → 꼭 써야 하는 때를 떠올리게 한다. ③ 약속 까닭을 "혼나지 않으려고"로 말한다 → 생물과 물, 나무에게 생기는 일로 까닭을 바꾸어 말하게 한다. 약속판은 단원 끝까지 붙여 두고 48차시에 다시 본다.',
  }));

  // ───────────────────────── 17~22차시: 살펴볼 생물 고르고 물음 만들기(탐구 질문 만들기) ─────────────────────────

  lessons.push(L(17, {
    title: '살펴볼 생물 고르고 궁금한 것 물음으로 말하기',
    objective: '물음 문장과 느낌을 말하는 문장을 나누고, 학교 둘레에서 살펴볼 생물을 하나 골라 그 생물에 대한 물음을 말할 수 있다.',
    illustration: ART('a child with a magnifying glass looking at a snail on a leaf, with paper question-mark bubbles floating above a school garden', '무엇이 궁금할까요?', [
      { motif: 'leaf', x: 140, y: 226 }, { motif: 'flower', x: 360, y: 226 }, { motif: 'cloud', x: 300, y: 96, color: 'lavender', s: 0.7 }]),
    safety: OUTSIDE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'달팽이는 귀여워요\'와 \'달팽이는 무엇을 먹을까?\'는 무엇이 다를까요?" 두 문장을 칠판에 쓰고 끝을 짚는다. "물음은 끝이 \'~까?\'로 끝나고, 답을 찾아볼 수 있어요. 오늘부터 우리는 둘레의 생물을 탐구하는 탐험가가 되어요." 시연 단추로 물음 카드가 \'물음이에요\' 칸에 놓이는 모습을 보여 준다.',
        student: '"~까?"로 끝나는 물음을 하나 만들어 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '물음일까?', slots: ['물음이에요', '물음이 아니에요'], cards: ['달팽이는 무엇을 먹을까?', '달팽이는 귀여워요.'], shuffle: false }, sequence: [{ sort: { '물음이에요': ['달팽이는 무엇을 먹을까?'], '물음이 아니에요': ['달팽이는 귀여워요.'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음과 느낌 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 문장에 답을 찾아볼 수 있나요?" 문장 끝을 손가락으로 짚게 한다. \'개미가 싫어요\'처럼 느낌을 말하는 문장도 소중하지만 탐구 물음은 아니라는 것을 짚는다. 셋째 문항처럼 \'~까?\'가 아닌 물음(\'어디 살아?\')도 물음이라는 것을 알려 준다.',
            task: '문장 카드를 읽고 물음과 물음이 아닌 문장으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '달팽이와 개미에 대한 문장을 물음과 물음이 아닌 것으로 나누어 보세요.', toolOptions: { topic: '물음일까?', slots: ['물음이에요', '물음이 아니에요'], cards: ['개미는 어디에 살까?', '달팽이는 어떻게 움직일까?', '달팽이는 귀여워요.', '나는 개미가 싫어요.'] },
                target: { sort: { '물음이에요': ['개미는 어디에 살까?', '달팽이는 어떻게 움직일까?'], '물음이 아니에요': ['달팽이는 귀여워요.', '나는 개미가 싫어요.'] } }, difficulty: 0.1 },
              { prompt: '민들레와 참새에 대한 문장을 나누어 보세요.', toolOptions: { topic: '물음일까?', slots: ['물음이에요', '물음이 아니에요'], cards: ['민들레 씨는 어디로 날아갈까?', '참새는 무엇을 먹을까?', '민들레가 노래요.', '참새 소리가 예뻐요.'] },
                target: { sort: { '물음이에요': ['민들레 씨는 어디로 날아갈까?', '참새는 무엇을 먹을까?'], '물음이 아니에요': ['민들레가 노래요.', '참새 소리가 예뻐요.'] } }, difficulty: 0.1 },
              { prompt: '공벌레와 나비에 대한 문장을 나누어 보세요. 끝이 "~까?"가 아닌 물음도 있어요.', toolOptions: { topic: '물음일까?', slots: ['물음이에요', '물음이 아니에요'], cards: ['공벌레는 어디 살아?', '나비는 꽃에서 무엇을 먹니?', '나비 날개가 반짝여요.', '공벌레를 봤어요.'] },
                target: { sort: { '물음이에요': ['공벌레는 어디 살아?', '나비는 꽃에서 무엇을 먹니?'], '물음이 아니에요': ['나비 날개가 반짝여요.', '공벌레를 봤어요.'] } }, difficulty: 0.2,
                predict: { q: '"공벌레는 어디 살아?"는 물음일까요?', options: ['물음이에요', '아니에요'], answer: 0 },
                conclude: '"~까?", "~니?", "~아?"처럼 답을 찾아볼 수 있게 묻는 말이 물음이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 생물에게 물음 붙이기', minutes: 15, tool: 'mindmap',
            teacher: '"이 물음은 어느 생물에게 묻는 걸까요?" 물음 속 낱말(껍데기, 솜털, 줄)에서 생물을 찾게 한다. 마지막 문항은 화단에 5분 동안 나가 내가 살펴볼 생물 하나를 정하고 들어온다. 생물을 잡지 않고 눈으로만 고른다.',
            task: '생물과 그 생물에 대한 물음을 잇고, 화단에서 내가 살펴볼 생물을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '생물마다 그 생물에 대한 물음을 이어 보세요.', toolOptions: { mode: 'match', topic: '누구에게 물을까?', slots: [{ id: 's1', label: '달팽이' }, { id: 's2', label: '민들레', motif: 'flower' }, { id: 's3', label: '개미' }], cards: ['껍데기는 왜 돌돌 말렸을까?', '솜털 씨는 어디까지 날아갈까?', '줄지어 어디로 갈까?'] },
                target: { match: { s1: '껍데기는 왜 돌돌 말렸을까?', s2: '솜털 씨는 어디까지 날아갈까?', s3: '줄지어 어디로 갈까?' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['껍데기는 왜 돌돌 말렸을까?', '솜털 씨는 어디까지 날아갈까?', '줄지어 어디로 갈까?', '꼬리는 왜 길까?'] } } } },
              { prompt: '공벌레가 무엇을 먹고 어디에 사는지 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', topic: '먹이와 사는 곳 물음', cards: ['공벌레는 무엇을 먹을까?', '공벌레는 어디에 숨어 살까?', '공벌레는 동글동글해요.', '공벌레를 잡아서 놀자.'] },
                target: { pick: ['공벌레는 무엇을 먹을까?', '공벌레는 어디에 숨어 살까?'] }, difficulty: 0.15 },
              { prompt: '화단에서 내가 살펴볼 생물을 하나 고르고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내가 고른 생물은 무엇이고, 무엇이 가장 궁금해요?" 서너 명이 \'~까?\'로 말하게 한다. 칠판 \'우리 반 탐구 생물\' 칸에 고른 생물 이름을 붙인다. 출구 첫 문항을 틀린 학생에게는 문장 끝을 다시 짚게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '물음일까?', slots: ['물음이에요', '물음이 아니에요'], cards: ['지렁이는 비 오는 날 왜 나올까?', '지렁이가 꿈틀거려요.', '까치는 둥지를 무엇으로 지을까?'] }, prompt: '문장을 물음과 물음이 아닌 것으로 나누어 보세요.', target: { sort: { '물음이에요': ['지렁이는 비 오는 날 왜 나올까?', '까치는 둥지를 무엇으로 지을까?'], '물음이 아니에요': ['지렁이가 꿈틀거려요.'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '무당벌레에 대한 물음은 무엇인가요?', options: ['무당벌레는 빨개요.', '무당벌레는 무엇을 먹을까?', '무당벌레를 봤어요.'], answer: 1, difficulty: 0.1, explain: '"~까?"로 끝나고 답을 찾아볼 수 있는 문장이 물음이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '궁금한 것을 물음으로',
      items: [
        { type: 'check', prompt: '물음에 모두 ✓ 하세요.', options: ['개미는 어디에 살까?', '개미가 작아요.', '참새는 무엇을 먹을까?', '참새가 날아요.'] },
        { type: 'short', prompt: '내가 살펴볼 생물의 이름을 쓰세요.' },
        { type: 'short', prompt: '그 생물에 대한 물음을 "~까?"로 끝나게 쓰세요.' },
        { type: 'draw', prompt: '내가 고른 생물을 그리세요.' },
      ],
      easy: {
        note: '"~까?"로 끝나면 물음이에요.',
        items: [
          { type: 'choice', prompt: '물음에 ○ 하세요.', options: ['달팽이는 무엇을 먹을까?', '달팽이가 귀여워요.'], answer: '달팽이는 무엇을 먹을까?' },
          { type: 'short', prompt: '내가 살펴볼 생물의 이름을 쓰세요.' },
          { type: 'draw', prompt: '내가 고른 생물을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 화단에서 살펴볼 생물을 골라요.',
      challenge: '어느 생물에게도 맞지 않는 물음 카드가 섞여 있어 골라내야 해요. 고른 생물에 물음을 두 개 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느낌 문장을 물음이라고 여긴다 → 문장 끝을 짚고 "답을 찾을 수 있나요?"를 묻는다. ② 큰 동물(사자, 고래)을 고른다 → 학교 둘레에서 직접 볼 수 있는 생물로 다시 고르게 한다. ③ 화단에서 생물을 잡으려 한다 → 눈으로만 고르는 약속을 나가기 전에 다시 말한다.',
  }));

  lessons.push(L(18, {
    title: '먹이·사는 곳·생김새 물음 나누어 만들기',
    objective: '생물에 대한 물음을 먹이·사는 곳·생김새 물음으로 나누고, 물음마다 답을 살펴볼 곳을 짝 지을 수 있다.',
    illustration: ART('three paper question cards pinned under an earthworm, a sparrow and a bee, each card with a small icon of food, a house and an eye', '무엇을 물을까요?', [
      { motif: 'bird', x: 380, y: 100 }, { motif: 'flower', x: 120, y: 226 }, { motif: 'house', x: 400, y: 214, s: 0.8 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 고른 생물에게 무엇이 궁금했나요?" 칠판에 학생 물음 몇 개를 적는다. "이 물음들을 보니 무엇을 먹는지 묻는 것, 어디에 사는지 묻는 것, 어떻게 생겼는지 묻는 것이 있어요." 칠판에 밥그릇·집·눈 그림 세 칸을 그리고, 시연 단추로 물음 카드가 세 칸에 나뉘어 놓이는 모습을 보여 준다.',
        student: '내 물음은 먹이, 사는 곳, 생김새 가운데 무엇을 묻는지 생각해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '무엇을 묻나요?', slots: ['먹이 물음', '사는 곳 물음', '생김새 물음'], cards: ['벌은 무엇을 먹을까?', '벌은 어디에 집을 지을까?', '벌의 다리는 몇 개일까?'], shuffle: false }, sequence: [{ sort: { '먹이 물음': ['벌은 무엇을 먹을까?'], '사는 곳 물음': ['벌은 어디에 집을 지을까?'], '생김새 물음': ['벌의 다리는 몇 개일까?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음을 세 갈래로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음에 답하면 무엇을 알게 될까요? 먹이인가요, 집인가요, 생김새인가요?" 물음 속 \'무엇을 먹을까\', \'어디에\', \'몇 개\', \'무슨 색\' 같은 말에 밑줄을 긋게 한다. 나눈 뒤 내 물음도 같은 칸에 넣어 보게 한다.',
            task: '물음 카드를 먹이·사는 곳·생김새 물음으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '지렁이와 참새에 대한 물음을 세 갈래로 나누어 보세요.', toolOptions: { topic: '무엇을 묻나요?', slots: ['먹이 물음', '사는 곳 물음', '생김새 물음'], cards: ['지렁이는 무엇을 먹을까?', '지렁이는 낮에 어디에 숨을까?', '지렁이 몸에는 마디가 있을까?', '참새는 어디에 둥지를 지을까?', '참새 부리는 무슨 색일까?', '참새는 벌레도 먹을까?'] },
                target: { sort: { '먹이 물음': ['지렁이는 무엇을 먹을까?', '참새는 벌레도 먹을까?'], '사는 곳 물음': ['지렁이는 낮에 어디에 숨을까?', '참새는 어디에 둥지를 지을까?'], '생김새 물음': ['지렁이 몸에는 마디가 있을까?', '참새 부리는 무슨 색일까?'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '지렁이에 대한 물음을 세 갈래로 나누어 보세요.', toolOptions: { cards: ['지렁이는 무엇을 먹을까?', '지렁이는 낮에 어디에 숨을까?', '지렁이 몸에는 마디가 있을까?'] },
                  target: { sort: { '먹이 물음': ['지렁이는 무엇을 먹을까?'], '사는 곳 물음': ['지렁이는 낮에 어디에 숨을까?'], '생김새 물음': ['지렁이 몸에는 마디가 있을까?'] } } } } },
              { prompt: '달팽이와 나비에 대한 물음을 세 갈래로 나누어 보세요.', toolOptions: { topic: '무엇을 묻나요?', slots: ['먹이 물음', '사는 곳 물음', '생김새 물음'], cards: ['달팽이는 상추를 좋아할까?', '달팽이는 비 안 오는 날 어디에 있을까?', '나비 날개에는 무늬가 있을까?', '나비는 밤에 어디에서 쉴까?'] },
                target: { sort: { '먹이 물음': ['달팽이는 상추를 좋아할까?'], '사는 곳 물음': ['달팽이는 비 안 오는 날 어디에 있을까?', '나비는 밤에 어디에서 쉴까?'], '생김새 물음': ['나비 날개에는 무늬가 있을까?'] } }, difficulty: 0.2 },
              { prompt: '개미에 대한 문장을 나누어 보세요. 물음이 아닌 카드는 남겨요.', toolOptions: { topic: '무엇을 묻나요?', slots: ['먹이 물음', '사는 곳 물음', '생김새 물음'], cards: ['개미는 과자 부스러기를 옮길까?', '개미집 입구는 어디에 있을까?', '개미 더듬이는 몇 개일까?', '개미가 줄지어 가요.'] },
                target: { sort: { '먹이 물음': ['개미는 과자 부스러기를 옮길까?'], '사는 곳 물음': ['개미집 입구는 어디에 있을까?'], '생김새 물음': ['개미 더듬이는 몇 개일까?'] } }, difficulty: 0.25,
                predict: { q: '"개미가 줄지어 가요."는 어느 칸일까요?', options: ['먹이', '사는 곳', '안 놓아요'], answer: 2 },
                conclude: '물음이 아닌 문장은 어느 물음 칸에도 들어가지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 답을 살펴볼 곳 정하기', minutes: 14, tool: 'mindmap',
            teacher: '"이 물음의 답을 알려면 어디에 가서, 언제 살펴보면 좋을까요?" 2차시에 찾은 사는 곳을 떠올리게 한다. 짝을 지은 뒤 내 물음의 답을 살펴볼 곳을 활동지에 쓰게 한다. "개미 먹이는 어디서 볼 수 있을까요? 개미가 무엇을 옮기는지 볼 수 있는 곳이에요."',
            task: '물음과 그 답을 살펴볼 곳 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 답을 살펴볼 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디서 살펴볼까?', slots: [{ id: 's1', label: '지렁이는 어디에 숨을까?' }, { id: 's2', label: '벌은 어떤 꽃에 많이 올까?' }, { id: 's3', label: '개미는 무엇을 옮길까?' }], cards: ['화단 흙 속', '맑은 날 꽃밭', '개미집 입구 둘레'] },
                target: { match: { s1: '화단 흙 속', s2: '맑은 날 꽃밭', s3: '개미집 입구 둘레' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['화단 흙 속', '맑은 날 꽃밭', '개미집 입구 둘레', '교실 칠판 앞'] } } } },
              { prompt: '물음마다 답을 살펴볼 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디서 살펴볼까?', slots: [{ id: 's1', label: '달팽이는 비 온 뒤 어디로 나올까?' }, { id: 's2', label: '참새는 무엇을 쪼아 먹을까?' }], cards: ['비 온 뒤 화단 돌 둘레', '운동장 가 풀밭'] },
                target: { match: { s1: '비 온 뒤 화단 돌 둘레', s2: '운동장 가 풀밭' } }, difficulty: 0.2 },
              { prompt: '내가 고른 생물에게 할 물음 카드를 써서 모둠 판에 붙이고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 물음은 세 칸 가운데 어디에 들어갔나요?" 모둠 판을 보며 칸마다 몇 장이 모였는지 센다. 한 칸에만 몰렸다면 "다른 칸 물음도 하나 만들어 볼까요?"라고 말한다. 출구 첫 문항을 틀린 학생에게는 물음 속 밑줄 낱말을 다시 찾게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '무엇을 묻나요?', slots: ['먹이 물음', '사는 곳 물음', '생김새 물음'], cards: ['무당벌레는 무엇을 먹을까?', '무당벌레 등의 점은 몇 개일까?', '무당벌레는 겨울에 어디에 있을까?'] }, prompt: '무당벌레 물음을 세 갈래로 나누어 보세요.', target: { sort: { '먹이 물음': ['무당벌레는 무엇을 먹을까?'], '사는 곳 물음': ['무당벌레는 겨울에 어디에 있을까?'], '생김새 물음': ['무당벌레 등의 점은 몇 개일까?'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"거미는 무엇을 먹을까?"는 무엇을 묻는 물음인가요?', options: ['먹이', '사는 곳', '생김새'], answer: 0, difficulty: 0.1, explain: '"무엇을 먹을까"는 먹이를 묻는 말이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세 갈래 물음',
      items: [
        { type: 'figure', wide: true, prompt: '물음 카드가 들어갈 칸을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '무엇을 묻나요?', slots: ['먹이 물음', '사는 곳 물음', '생김새 물음'], cards: ['벌은 무엇을 먹을까?', '벌집은 어디에 있을까?', '벌 날개는 몇 장일까?'] }, caption: '' }], answer: '먹이-무엇을 먹을까, 사는 곳-벌집은 어디에, 생김새-날개는 몇 장' },
        { type: 'table', prompt: '내가 고른 생물에게 할 물음을 칸마다 하나씩 쓰세요.', columns: ['먹이 물음', '사는 곳 물음', '생김새 물음'], rows: 1 },
        { type: 'short', prompt: '내 물음의 답을 어디에서 살펴볼지 쓰세요.' },
        { type: 'choice', prompt: '"지렁이는 낮에 어디에 숨을까?"는 어떤 물음인가요?', options: ['먹이 물음', '사는 곳 물음', '생김새 물음'], answer: '사는 곳 물음' },
      ],
      easy: {
        note: '"무엇을 먹을까"는 먹이, "어디에"는 사는 곳, "몇 개·무슨 색"은 생김새예요.',
        items: [
          { type: 'choice', prompt: '먹이를 묻는 물음에 ○ 하세요.', options: ['참새는 무엇을 먹을까?', '참새 부리는 무슨 색일까?'], answer: '참새는 무엇을 먹을까?' },
          { type: 'choice', prompt: '사는 곳을 묻는 물음에 ○ 하세요.', options: ['개미집은 어디에 있을까?', '개미 다리는 몇 개일까?'], answer: '개미집은 어디에 있을까?' },
          { type: 'short', prompt: '내가 고른 생물에게 할 물음 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '물음 카드가 세 장으로 줄어요. 맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '여섯 장을 세 갈래로 나누고, 물음마다 살펴볼 곳을 이어요.',
      challenge: '물음이 아닌 카드와 맞지 않는 장소 카드를 골라내야 해요. 세 갈래 물음을 모두 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "어디에"가 들어간 물음은 모두 사는 곳이라고 여긴다 → "벌은 어디에 침이 있을까?"처럼 생김새를 묻는 경우도 있다고 짚고, 답이 무엇인지 생각하게 한다. ② 생김새 물음만 만든다 → 먹이·사는 곳 물음을 하나씩 더 만들게 한다(이 성취기준의 기대 행동). ③ 답을 살펴볼 곳을 교실 안으로 고른다 → 그 생물이 사는 곳을 다시 떠올리게 한다.',
  }));

  lessons.push(L(19, {
    title: '작은 벌레도 살펴볼 까닭 찾기',
    objective: '개미·공벌레 같은 작은 생물의 놀라운 점과 하는 일을 찾아 잇고, 작은 생물을 아끼며 살펴보는 행동을 고를 수 있다.',
    illustration: ART('a magnifying glass over a tiny pill bug rolled into a ball and a line of ants carrying a big crumb together on a garden path', '작아도 대단해요', [
      { motif: 'leaf', x: 110, y: 228 }, { motif: 'leaf', x: 380, y: 230, color: 'buttercup' }, { motif: 'flower', x: 300, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어떤 친구가 \'벌레는 작아서 볼 것도 없어\'라고 했어요. 정말 그럴까요?" 손을 들어 생각을 듣는다. 돋보기로 본 개미 그림(또는 실물 사진)을 크게 보여 주며 "개미는 자기 몸보다 큰 먹이를 친구들과 함께 옮겨요."라고 말한다. 시연 단추로 \'공벌레\' 옆에 \'건드리면 공처럼 몸을 말아요\' 카드가 놓이는 모습을 보여 준다.',
        student: '작은 벌레를 보고 놀랐던 일이 있으면 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '작아도 대단해요', slots: [{ id: 's1', label: '공벌레' }], cards: ['건드리면 공처럼 몸을 말아요', '하늘을 높이 날아요'], shuffle: false }, sequence: [{ match: { s1: '건드리면 공처럼 몸을 말아요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 작은 생물의 놀라운 점 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 생물이 이런 일을 한다는 걸 알고 있었나요?" 카드마다 놀라운 점을 소리 내어 읽게 한다. 이은 뒤 "이걸 직접 보려면 무엇을 해야 할까요?"라고 물어 \'살펴보기\'로 이어 간다. 작은 생물이 하는 일은 3차시에 찾은 지렁이·무당벌레·거미 말고도 많다는 것을 짚는다.',
            task: '작은 생물과 그 생물의 놀라운 점이나 하는 일 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '작은 생물마다 놀라운 점을 이어 보세요.', toolOptions: { mode: 'match', topic: '작아도 대단해요', slots: [{ id: 's1', label: '개미' }, { id: 's2', label: '공벌레' }, { id: 's3', label: '소금쟁이' }], cards: ['몸보다 큰 먹이를 함께 옮겨요', '건드리면 공처럼 몸을 말아요', '물 위를 미끄러지듯 걸어요'] },
                target: { match: { s1: '몸보다 큰 먹이를 함께 옮겨요', s2: '건드리면 공처럼 몸을 말아요', s3: '물 위를 미끄러지듯 걸어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['몸보다 큰 먹이를 함께 옮겨요', '건드리면 공처럼 몸을 말아요', '물 위를 미끄러지듯 걸어요', '바닷속 깊이 헤엄쳐요'] } } } },
              { prompt: '작은 생물마다 자연에서 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '작은 생물이 하는 일', slots: [{ id: 's1', label: '개미' }, { id: 's2', label: '공벌레' }, { id: 's3', label: '쇠똥구리' }], cards: ['죽은 벌레를 옮겨 치워요', '썩은 잎을 먹어 흙으로 돌려줘요', '동물 똥을 굴려 치워요'] },
                target: { match: { s1: '죽은 벌레를 옮겨 치워요', s2: '썩은 잎을 먹어 흙으로 돌려줘요', s3: '동물 똥을 굴려 치워요' } }, difficulty: 0.25 },
              { prompt: '작은 생물을 살펴볼 까닭이 되는 카드만 골라 보세요.', toolOptions: { mode: 'pick', topic: '살펴볼 까닭', cards: ['작아도 자연을 깨끗하게 해요', '사는 모습이 신기해요', '작아서 볼 것이 없어요', '징그러우니 없애야 해요'] },
                target: { pick: ['작아도 자연을 깨끗하게 해요', '사는 모습이 신기해요'] }, difficulty: 0.15,
                predict: { q: '작은 벌레도 살펴볼 만할까요?', options: ['살펴볼 만해요', '볼 것이 없어요'], answer: 0 },
                conclude: '작은 생물도 자연에서 하는 일이 있고, 사는 모습이 신기해서 살펴볼 만해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 작은 생물을 만났을 때', minutes: 13, tool: 'emotion',
            teacher: '"공벌레를 보면 어떻게 할래요?" 징그러워하는 마음은 그대로 인정하되, 싫어도 다치게 하지 않는다는 것을 짚는다. 벌을 만나는 이야기에서는 손을 휘두르지 말고 천천히 물러나는 것이 나와 벌 모두에게 안전하다고 몸으로 따라 해 보게 한다.',
            task: '이야기를 읽고 작은 생물을 아끼며 살펴보는 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 공벌레를 징그럽다며 밟으려 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '화단 돌을 들추자 공벌레가 나왔어요. 하준이가 "징그러워!" 하며 발을 들었어요.', choices: [
                { id: 'step', text: '같이 밟아요', result: '공벌레가 다쳐 썩은 잎을 먹어 줄 생물이 줄어요.', mood: '속상함', why: '공벌레는 썩은 잎을 먹어 흙을 돕는 생물이에요.' },
                { id: 'look', text: '"밟지 말고 같이 살펴보자" 하고 말해요', result: '둘이 공벌레가 몸을 마는 모습을 보고 놀라요.', mood: '놀람' },
                { id: 'throw', text: '공벌레를 멀리 던져요', result: '공벌레가 떨어져 다칠 수 있어요.', mood: '걱정', why: '던지면 작은 생물이 다쳐요.' }] }, target: { choice: 'look' }, difficulty: 0.1 },
              { prompt: '살펴본 뒤 들추었던 돌은 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 돌 밑의 공벌레를 다 살펴보았어요. 돌은 옆에 놓여 있어요.', choices: [
                { id: 'back', text: '돌을 살살 제자리에 놓아요', result: '공벌레가 축축한 집으로 돌아가요.', mood: '편안함' },
                { id: 'leave', text: '돌을 그대로 옆에 둬요', result: '해가 비쳐 공벌레 집이 말라요.', mood: '걱정', why: '돌 밑은 공벌레의 축축한 집이에요.' }] }, target: { choice: 'back' }, difficulty: 0.15 },
              { prompt: '벌 한 마리가 내 옆으로 날아왔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '꽃밭을 살펴보는데 벌 한 마리가 내 옆으로 날아왔어요.', choices: [
                { id: 'swat', text: '손을 휘둘러 쫓아요', result: '벌이 놀라서 쏠 수 있어요.', mood: '무서움', why: '손을 휘두르면 벌이 위험하다고 느껴요.' },
                { id: 'calm', text: '움직임을 멈추고 천천히 물러나요', result: '벌이 꽃으로 날아가요.', mood: '편안함' },
                { id: 'catch', text: '손으로 잡아요', result: '벌에 쏘일 수 있어요.', mood: '무서움', why: '벌은 손으로 잡으면 안 돼요.' }] }, target: { choice: 'calm' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"\'벌레는 작아서 볼 것도 없어\'라고 말한 친구에게 오늘 알게 된 것을 하나 말해 줄까요?" 두세 명이 말하게 한다. 출구 둘째 문항을 틀린 학생에게는 개미가 먹이를 옮기는 그림을 다시 보여 준다. 다음 시간에는 살펴서 알 수 있는 물음을 고른다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '작아도 대단해요', slots: [{ id: 'e1', label: '거미' }, { id: 'e2', label: '반딧불이' }], cards: ['가는 실로 그물을 짜요', '밤에 꽁무니에서 빛을 내요'] }, prompt: '작은 생물과 놀라운 점을 이어 보세요.', target: { match: { e1: '가는 실로 그물을 짜요', e2: '밤에 꽁무니에서 빛을 내요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '작은 벌레에 대해 바르게 말한 것은 무엇인가요?', options: ['작아서 살펴볼 것이 없어요', '작아도 하는 일이 있어 살펴볼 만해요'], answer: 1, difficulty: 0.1, explain: '개미·공벌레처럼 작은 생물도 자연을 깨끗하게 하는 일을 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '작아도 대단해요',
      items: [
        { type: 'figure', wide: true, prompt: '작은 생물과 놀라운 점을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '작아도 대단해요', slots: [{ id: 's1', label: '개미' }, { id: 's2', label: '공벌레' }], cards: ['건드리면 몸을 말아요', '큰 먹이를 함께 옮겨요'] }, caption: '' }], answer: '개미-큰 먹이를 함께 옮겨요, 공벌레-건드리면 몸을 말아요' },
        { type: 'choice', prompt: '벌이 옆으로 날아오면 어떻게 할까요?', options: ['손을 휘둘러요', '천천히 물러나요', '잡아요'], answer: '천천히 물러나요' },
        { type: 'short', prompt: '작은 생물을 살펴볼 까닭을 한 문장으로 쓰세요.' },
        { type: 'draw', prompt: '살펴보고 싶은 작은 생물을 크게 그리세요.' },
      ],
      easy: {
        note: '작아도 하는 일이 있어요.',
        items: [
          { type: 'choice', prompt: '건드리면 공처럼 몸을 마는 생물에 ○ 하세요.', options: ['공벌레', '참새'], answer: '공벌레' },
          { type: 'choice', prompt: '공벌레를 만나면 어떻게 할까요?', options: ['살펴봐요', '밟아요'], answer: '살펴봐요' },
          { type: 'draw', prompt: '살펴보고 싶은 작은 생물을 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 고른 행동의 결과가 바로 보여요.',
      base: '모두 이은 뒤 확인을 눌러요.',
      challenge: '학교 둘레에서 볼 수 없는 생물의 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 작은 벌레는 살펴볼 가치가 없다고 여긴다(이 차시의 핵심 오개념) → 개미가 함께 먹이를 옮기는 모습을 돋보기로 보여 준다. ② 징그러운 마음을 꾸짖는다고 여긴다 → 싫은 마음은 괜찮고, 다치게 하지 않으면 된다고 말한다. ③ 반딧불이·쇠똥구리를 처음 듣는다 → 그림 한 장으로 짧게 소개하고, 사는 곳이 줄어 보기 어려워졌다는 것도 알려 준다.',
  }));

  lessons.push(L(20, {
    title: '살펴서 알 물음과 찾아볼 물음 나누기',
    objective: '물음을 직접 살펴서 답을 알 수 있는 것과 책이나 어른께 찾아보아야 하는 것으로 나누고, 탐구하는 차례를 말할 수 있다.',
    illustration: ART('a child crouching with a magnifying glass beside a snail on one side and another child reading a picture book about snails on the other side', '어떻게 답을 찾을까요?', [
      { motif: 'leaf', x: 130, y: 226 }, { motif: 'house', x: 380, y: 212, s: 0.8 }, { motif: 'star', x: 240, y: 92, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'달팽이 더듬이는 몇 개일까?\'는 어떻게 답을 알 수 있을까요? \'달팽이는 몇 년을 살까?\'는요?" 앞 물음은 달팽이를 보면 바로 알 수 있지만, 뒤 물음은 몇 년을 지켜볼 수 없어 책이나 어른께 찾아봐야 한다는 것을 견주게 한다. 시연 단추로 두 물음이 서로 다른 칸에 놓이는 모습을 보여 준다.',
        student: '내 물음은 직접 살펴서 알 수 있을지, 찾아봐야 알 수 있을지 생각해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '어떻게 알까?', slots: ['살펴서 알아요', '찾아봐야 알아요'], cards: ['달팽이 더듬이는 몇 개일까?', '달팽이는 몇 년을 살까?'], shuffle: false }, sequence: [{ sort: { '살펴서 알아요': ['달팽이 더듬이는 몇 개일까?'], '찾아봐야 알아요': ['달팽이는 몇 년을 살까?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 답을 찾는 방법으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"오늘 화단에서 이 생물을 보면 답이 보일까요? 아니면 땅속이나 오랜 시간처럼 우리 눈에 안 보이는 것을 묻나요?" 두 물음으로 따지게 한다. 찾아봐야 하는 물음도 좋은 물음이고, 책·어른·도서관이 답을 도와준다는 것을 짚는다.',
            task: '물음 카드를 살펴서 알 수 있는 것과 찾아봐야 알 수 있는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '개미와 달팽이 물음을 답을 찾는 방법으로 나누어 보세요.', toolOptions: { topic: '어떻게 알까?', slots: ['살펴서 알아요', '찾아봐야 알아요'], cards: ['개미는 줄지어 다닐까?', '달팽이 껍데기는 무슨 색일까?', '개미집 속에는 방이 몇 개일까?', '달팽이는 겨울에 어떻게 지낼까?'] },
                target: { sort: { '살펴서 알아요': ['개미는 줄지어 다닐까?', '달팽이 껍데기는 무슨 색일까?'], '찾아봐야 알아요': ['개미집 속에는 방이 몇 개일까?', '달팽이는 겨울에 어떻게 지낼까?'] } }, difficulty: 0.25 },
              { prompt: '민들레와 참새 물음을 답을 찾는 방법으로 나누어 보세요.', toolOptions: { topic: '어떻게 알까?', slots: ['살펴서 알아요', '찾아봐야 알아요'], cards: ['민들레 꽃잎은 무슨 색일까?', '참새는 운동장에서 무엇을 쪼아 먹을까?', '참새는 몇 년을 살까?', '민들레 씨는 가장 멀리 어디까지 갈까?'] },
                target: { sort: { '살펴서 알아요': ['민들레 꽃잎은 무슨 색일까?', '참새는 운동장에서 무엇을 쪼아 먹을까?'], '찾아봐야 알아요': ['참새는 몇 년을 살까?', '민들레 씨는 가장 멀리 어디까지 갈까?'] } }, difficulty: 0.3,
                predict: { q: '참새가 몇 년을 사는지 오늘 살펴서 알 수 있을까요?', options: ['알 수 있어요', '찾아봐야 해요'], answer: 1 },
                conclude: '오랜 시간이나 보이지 않는 곳을 묻는 물음은 책이나 어른께 찾아봐요.' },
              { prompt: '물음을 나누어 보세요. 물음이 아닌 카드는 남겨요.', toolOptions: { topic: '어떻게 알까?', slots: ['살펴서 알아요', '찾아봐야 알아요'], cards: ['나비 날개는 몇 장일까?', '나비는 알을 몇 개 낳을까?', '나비가 예뻐요.'] },
                target: { sort: { '살펴서 알아요': ['나비 날개는 몇 장일까?'], '찾아봐야 알아요': ['나비는 알을 몇 개 낳을까?'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '물음을 나누어 보세요. 물음이 아닌 카드는 남겨요. 카드가 더 많아요.', toolOptions: { cards: ['나비 날개는 몇 장일까?', '나비는 알을 몇 개 낳을까?', '나비가 예뻐요.', '나비는 어떤 꽃에 앉을까?', '나비 애벌레는 얼마나 지나야 나비가 될까?'] },
                  target: { sort: { '살펴서 알아요': ['나비 날개는 몇 장일까?', '나비는 어떤 꽃에 앉을까?'], '찾아봐야 알아요': ['나비는 알을 몇 개 낳을까?', '나비 애벌레는 얼마나 지나야 나비가 될까?'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 탐구는 돌고 돌아요', minutes: 14, tool: 'lifecycle',
            teacher: '"궁금한 것을 알게 되면 탐구가 끝날까요?" 알게 된 것에서 또 궁금한 것이 생긴다는 것을 화살표를 따라가며 보여 준다. 둘째·셋째 문항에서는 민지의 달팽이 탐구를 예로 들어 단계마다 무엇을 했는지 짝 짓게 한다.',
            task: '탐구하는 차례를 둥근 판에 놓고, 단계마다 한 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '탐구하는 차례대로 카드를 놓아 보세요. 어디서 시작해도 차례만 맞으면 돼요.', toolOptions: { center: '탐구는 돌고 돌아요', cards: ['궁금한 것을 떠올려요', '물음을 만들어요', '살펴보거나 찾아봐요', '알게 된 것을 말해요'] },
                target: { order: ['궁금한 것을 떠올려요', '물음을 만들어요', '살펴보거나 찾아봐요', '알게 된 것을 말해요'], cyclic: true }, difficulty: 0.2,
                hints: ['무엇을 하기 전에 먼저 있어야 하는 일을 찾아 이어요. 답을 찾으려면 먼저 물을 것이 있어야 해요.', '어긋난 카드 앞뒤를 "그래서"로 이어 읽어 보세요. 말하기 전에 먼저 알아봐야 해요.', '궁금한 것 → 물음 만들기 → 살펴보거나 찾기 → 알게 된 것 말하기 → 다시 궁금한 것으로 돌아요.'],
                levels: { challenge: { toolOptions: { cards: ['궁금한 것을 떠올려요', '물음을 만들어요', '살펴보거나 찾아봐요', '알게 된 것을 말해요', '생물을 잡아 와요'], slots: 4 } } } },
              { prompt: '민지의 달팽이 탐구에서 단계마다 한 일을 이어 보세요.', toolOptions: { mode: 'match', center: '민지의 달팽이 탐구', slots: [{ id: 's1', label: '물음 만들기' }, { id: 's2', label: '살펴보기' }, { id: 's3', label: '알게 된 것 말하기' }], cards: ['"달팽이는 무엇을 먹을까?"', '상추와 당근을 넣고 지켜봐요', '"상추를 더 많이 먹었어요"'] },
                target: { match: { s1: '"달팽이는 무엇을 먹을까?"', s2: '상추와 당근을 넣고 지켜봐요', s3: '"상추를 더 많이 먹었어요"' } }, difficulty: 0.25,
                hints: ['자리 이름을 먼저 읽고, 그 단계에서 할 만한 말이나 일을 찾아요.', '어긋난 자리를 짚어 보세요. 물음은 "~까?"로 끝나고, 알게 된 것은 본 것을 말해요.', '물음 만들기는 "무엇을 먹을까?", 살펴보기는 지켜보는 일, 말하기는 "더 많이 먹었어요"예요.'] },
              { prompt: '준호의 개미 탐구에서 알게 된 것 다음에 생긴 새 궁금한 것을 골라 보세요.', toolOptions: { mode: 'pick', basket: '새 궁금한 것', cards: ['개미는 과자를 어디로 가져갈까?', '개미는 과자 부스러기를 옮겨요.', '개미가 무서워요.'] },
                target: { pick: ['개미는 과자를 어디로 가져갈까?'] }, difficulty: 0.2,
                hints: ['알게 된 것을 읽고, 그 뒤에 또 묻고 싶어지는 물음을 찾아요.', '고른 카드가 물음인지, 이미 알게 된 것인지 살펴봐요.', '"~까?"로 끝나는 새 물음 카드 하나만 골라요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 물음은 살펴서 알 물음인가요, 찾아볼 물음인가요?" 모둠 판의 물음 카드 옆에 눈(살펴서) 또는 책(찾아봐요) 붙임 딱지를 붙인다. 출구 첫 문항에서 헷갈린 학생에게는 "오늘 화단에서 보면 답이 보일까?"를 다시 묻는다. 다음 시간에는 모둠 관찰 계획을 세운다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 알까?', slots: ['살펴서 알아요', '찾아봐요'], cards: ['까치 둥지는 어느 나무에 있을까?', '까치는 알을 몇 개 낳을까?'] }, prompt: '까치 물음을 답을 찾는 방법으로 나누어 보세요.', target: { sort: { '살펴서 알아요': ['까치 둥지는 어느 나무에 있을까?'], '찾아봐요': ['까치는 알을 몇 개 낳을까?'] } }, difficulty: 0.25 },
          { type: 'choice', prompt: '알게 된 것을 말한 다음에는 무엇이 올까요?', options: ['탐구가 끝나요', '새로 궁금한 것이 생겨요', '생물을 잡아요'], answer: 1, difficulty: 0.15, explain: '알게 된 것에서 또 궁금한 것이 생겨 탐구는 다시 이어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어떻게 답을 찾을까요',
      items: [
        { type: 'table', prompt: '물음을 알맞은 칸에 쓰세요: 개미 다리는 몇 개일까? / 개미는 몇 년을 살까?', columns: ['살펴서 알아요', '찾아봐야 알아요'], rows: 1 },
        { type: 'figure', wide: true, prompt: '탐구하는 차례를 생각하며 빈 자리에 알맞은 말을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '탐구는 돌고 돌아요', printCards: false, cards: ['궁금한 것을 떠올려요', '물음을 만들어요', '살펴보거나 찾아봐요', '알게 된 것을 말해요'] }, state: { at: { '궁금한 것을 떠올려요': 0 } }, caption: '' }], answer: '물음을 만들어요 → 살펴보거나 찾아봐요 → 알게 된 것을 말해요' },
        { type: 'short', prompt: '내 물음을 쓰고, 살펴볼지 찾아볼지 쓰세요.' },
        { type: 'choice', prompt: '"달팽이는 몇 년을 살까?"의 답은 어떻게 찾을까요?', options: ['오늘 화단에서 살펴봐요', '책이나 어른께 찾아봐요'], answer: '책이나 어른께 찾아봐요' },
      ],
      easy: {
        note: '오늘 보면 답이 보이는지 생각해요.',
        items: [
          { type: 'choice', prompt: '살펴서 알 수 있는 물음에 ○ 하세요.', options: ['달팽이 껍데기는 무슨 색일까?', '달팽이는 몇 년을 살까?'], answer: '달팽이 껍데기는 무슨 색일까?' },
          { type: 'choice', prompt: '물음을 만든 다음에 할 일에 ○ 하세요.', options: ['살펴보기', '끝내기'], answer: '살펴보기' },
          { type: 'short', prompt: '내 물음 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요. 탐구 차례는 어디서 시작해도 차례만 맞으면 돼요.',
      challenge: '물음이 아닌 카드와 탐구와 상관없는 카드가 섞여 있고, 나눌 카드가 더 많아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 찾아볼 물음은 나쁜 물음이라고 여긴다 → 둘 다 좋은 물음이고 답을 찾는 길만 다르다고 말한다. ② 땅속이나 밤에 일어나는 일도 살펴서 알 수 있다고 여긴다 → "오늘 수업 시간에 화단에서 보이나요?"로 따지게 한다. ③ 탐구가 한 번으로 끝난다고 여긴다 → 알게 된 것에서 새 물음을 만드는 연습을 짧게 더 한다.',
  }));

  lessons.push(L(21, {
    title: '모둠 관찰 계획 세우고 준비물 챙기기',
    objective: '관찰에 필요한 준비물과 관찰 약속을 고르고, 모둠에서 역할을 나누어 관찰 계획을 세울 수 있다.',
    illustration: ART('a small group of children with a magnifying glass, a clipboard observation sheet and sun hats standing at the edge of a school garden', '관찰 준비 끝!', [
      { motif: 'flower', x: 120, y: 226 }, { motif: 'tree', x: 400, y: 210 }, { motif: 'sun', x: 300, y: 90, s: 0.5 }]),
    safety: OUTSIDE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"탐험가가 숲에 들어갈 때 빈손으로 갈까요?" 돋보기·기록장·연필을 하나씩 꺼내 보이며 "이것은 무엇에 쓸까요?"라고 묻는다. "다음 시간부터 사흘 동안 우리 모둠 생물을 살펴봐요. 오늘은 무엇을 챙기고, 어떤 약속을 지키고, 누가 무엇을 할지 정해요." 시연 단추로 준비물 목록에 표시하는 모습을 보여 준다.',
        student: '돋보기와 기록장을 어디에 쓸지 짝에게 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '관찰 준비물', items: [{ id: 'lens', text: '돋보기' }, { id: 'game', text: '게임기' }] }, sequence: [{ checklist: ['lens'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 준비물과 관찰 약속 고르기', minutes: 13, tool: 'kitchen',
            teacher: '"잠자리채를 가져가면 생물에게 무슨 일이 생길까요?" 우리는 잡지 않고 눈으로 살펴본다는 것을 다시 짚는다. 관찰 약속을 고른 뒤, 돌을 들춘 뒤 제자리에 놓는 까닭(생물의 집)을 19차시와 이어 말하게 한다.',
            task: '관찰할 때 챙길 준비물, 나가는 차례, 지킬 약속을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '관찰할 때 챙길 준비물만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '관찰 준비물', items: [{ id: 'lens', text: '돋보기' }, { id: 'note', text: '관찰 기록장' }, { id: 'pencil', text: '연필과 색연필' }, { id: 'net', text: '생물을 잡을 잠자리채' }, { id: 'candy', text: '나눠 먹을 사탕' }] },
                target: { checklist: ['lens', 'note', 'pencil'] }, difficulty: 0.15,
                hints: ['항목마다 "살펴보고 기록하는 데 쓰이는가?"를 따져요.', '표시한 것 가운데 생물을 잡거나 관찰과 상관없는 것이 있는지 살펴봐요.', '돋보기, 관찰 기록장, 연필과 색연필만 표시해요.'] },
              { prompt: '관찰하러 나가서 돌아오기까지의 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['준비물을 챙겨요', '모둠이 정한 곳으로 가요', '쪼그려 앉아 살펴봐요', '본 것을 기록장에 그려요', '교실에 와서 손을 씻어요'] },
                target: { order: ['준비물을 챙겨요', '모둠이 정한 곳으로 가요', '쪼그려 앉아 살펴봐요', '본 것을 기록장에 그려요', '교실에 와서 손을 씻어요'] }, difficulty: 0.2,
                hints: ['교실을 나서기 전부터 돌아올 때까지를 떠올리며 맨 처음 할 일부터 놓아요.', '어긋난 자리를 짚어 보세요. 그리려면 먼저 살펴봐야 하고, 손은 다 끝난 뒤에 씻어요.', '챙기기 → 가기 → 살펴보기 → 그리기 → 손 씻기 차례예요.'],
                levels: { easy: { prompt: '관찰하러 나가서 돌아오기까지의 차례대로 카드를 놓아 보세요. 카드가 세 장이에요.', toolOptions: { cards: ['준비물을 챙겨요', '쪼그려 앉아 살펴봐요', '교실에 와서 손을 씻어요'] }, target: { order: ['준비물을 챙겨요', '쪼그려 앉아 살펴봐요', '교실에 와서 손을 씻어요'] } } } },
              { prompt: '관찰할 때 지킬 약속만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '관찰 약속', items: [{ id: 'ask', text: '만지기 전에 선생님께 물어요' }, { id: 'stone', text: '들춘 돌은 제자리에 놓아요' }, { id: 'take', text: '생물을 교실로 가져가요' }, { id: 'pick', text: '꽃을 꺾어서 살펴봐요' }] },
                target: { checklist: ['ask', 'stone'] }, difficulty: 0.15,
                hints: ['항목마다 나와 생물 모두 안전한지 따져요.', '표시한 것 가운데 생물을 집에서 떼어 놓거나 다치게 하는 항목이 있는지 살펴봐요.', '선생님께 묻기와 돌을 제자리에 놓기만 표시해요.'],
                levels: { challenge: { toolOptions: { items: [{ id: 'ask', text: '만지기 전에 선생님께 물어요' }, { id: 'stone', text: '들춘 돌은 제자리에 놓아요' }, { id: 'take', text: '생물을 교실로 가져가요' }, { id: 'pick', text: '꽃을 꺾어서 살펴봐요' }, { id: 'quiet', text: '큰 소리를 내지 않아요' }, { id: 'run', text: '화단 사이로 뛰어가요' }] }, prompt: '관찰할 때 지킬 약속만 골라 표시해 보세요. 항목이 더 많아요.', target: { checklist: ['ask', 'stone', 'quiet'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 역할 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"모둠 네 명이 모두 돋보기를 들면 기록은 누가 할까요?" 역할을 나누는 까닭을 먼저 묻는다. 역할은 날마다 돌아가며 맡는다고 알려 준다. 마지막 문항에서 모둠 계획표(살펴볼 생물·물음·곳·역할)를 실제로 채운다.',
            task: '모둠 역할과 하는 일을 잇고, 모둠 계획표를 함께 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 역할마다 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '모둠 역할', slots: [{ id: 's1', label: '돋보기 담당' }, { id: 's2', label: '기록 담당' }, { id: 's3', label: '시간 담당' }], cards: ['가까이 살펴보고 말해 줘요', '본 것을 그리고 적어요', '시계를 보고 돌아갈 때를 알려요'] },
                target: { match: { s1: '가까이 살펴보고 말해 줘요', s2: '본 것을 그리고 적어요', s3: '시계를 보고 돌아갈 때를 알려요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['가까이 살펴보고 말해 줘요', '본 것을 그리고 적어요', '시계를 보고 돌아갈 때를 알려요', '혼자 먼저 교실로 가요'] } } } },
              { prompt: '모둠 친구가 서로 돋보기를 쓰겠다고 다투어요. 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '모둠에서 할 말', cards: ['"오늘은 네가, 내일은 내가 하자"', '"돌아가며 한 번씩 보자"', '"내 거야, 저리 가"', '"그럼 아무도 하지 마"'] },
                target: { pick: ['"오늘은 네가, 내일은 내가 하자"', '"돌아가며 한 번씩 보자"'] }, difficulty: 0.1 },
              { prompt: '모둠 계획표에 살펴볼 생물·물음·곳·역할을 함께 쓰고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 모둠은 무엇을, 어디에서, 누가 무엇을 맡아 살펴보나요?" 모둠마다 한 명이 계획표를 읽는다. 준비물은 모둠 바구니에 넣어 두게 한다. 출구 첫 문항에서 생물을 데려오는 항목을 고른 학생에게는 생물의 집이 어디인지 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '비 온 뒤 달팽이 관찰', items: [{ id: 'boots', text: '장화를 신고 가요' }, { id: 'lens', text: '돋보기를 챙겨요' }, { id: 'box', text: '달팽이를 담아 올 통을 챙겨요' }, { id: 'salt', text: '달팽이에게 소금을 뿌려 봐요' }] }, prompt: '비 온 뒤 달팽이를 살펴보러 갈 때 알맞은 것만 골라 표시해 보세요.', target: { checklist: ['boots', 'lens'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '살펴본 뒤 들춘 돌은 어떻게 할까요?', options: ['그대로 둬요', '제자리에 놓아요', '멀리 던져요'], answer: 1, difficulty: 0.1, explain: '돌 밑은 작은 생물의 집이라 제자리에 놓아 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 관찰 계획표',
      items: [
        { type: 'table', prompt: '모둠 관찰 계획표를 채우세요.', columns: ['살펴볼 것', '쓸 내용'], cells: [['살펴볼 생물', ''], ['궁금한 물음', ''], ['살펴볼 곳', ''], ['내 역할', '']] },
        { type: 'check', prompt: '챙길 준비물에 모두 ✓ 하세요.', options: ['돋보기', '관찰 기록장', '잠자리채', '연필'] },
        { type: 'choice', prompt: '관찰할 때 지킬 약속에 ○ 하세요.', options: ['꽃을 꺾어 살펴봐요', '만지기 전에 선생님께 물어요', '생물을 교실로 가져가요'], answer: '만지기 전에 선생님께 물어요' },
        { type: 'short', prompt: '역할을 나누면 좋은 점을 쓰세요.' },
      ],
      easy: {
        note: '우리는 잡지 않고 눈으로 살펴봐요.',
        items: [
          { type: 'choice', prompt: '관찰 준비물에 ○ 하세요.', options: ['돋보기', '게임기'], answer: '돋보기' },
          { type: 'choice', prompt: '들춘 돌은 어떻게 할까요?', options: ['제자리에 놓아요', '그대로 둬요'], answer: '제자리에 놓아요' },
          { type: 'short', prompt: '내 역할을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 세 장으로 줄어요. 맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 모둠 계획표를 함께 채워요.',
      challenge: '약속 항목과 역할 카드가 더 많아 맞지 않는 것을 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생물을 잡아 와서 살펴보고 싶어 한다 → 사흘 동안 같은 곳에서 살펴보아야 달라진 점을 알 수 있다고 말한다. ② 역할을 두고 다툰다 → 날마다 돌아가며 맡는 표를 붙인다. ③ 소금·물을 뿌려 반응을 보려 한다 → 생물을 다치게 하는 실험은 하지 않는다고 분명히 말한다. 날씨가 나쁘면 관찰 날을 미루고 교실 화분 생물로 바꾼다.',
  }));

  lessons.push(L(22, {
    title: '물음을 자세하게 바꾸어 물음 카드 만들기',
    objective: '막연한 물음을 무엇을·어디에처럼 자세한 물음으로 바꾸고, 내가 살펴볼 생물에 대한 물음 카드를 만들어 나눌 수 있다.',
    illustration: ART('a child turning a fuzzy paper question cloud into a clear question card with a magnifying glass, ants and a dandelion nearby', '자세하게 물어요', [
      { motif: 'flower', x: 130, y: 226 }, { motif: 'cloud', x: 330, y: 96, s: 0.7 }, { motif: 'leaf', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'개미는 어때?\'라고 물으면 무엇을 살펴봐야 할지 알 수 있나요?" 학생들이 "몰라요" 하면 "\'개미는 무엇을 옮길까?\'라고 바꾸면요?"라고 묻는다. "자세한 물음은 무엇을 살펴볼지 알려 줘요." 시연 단추로 막연한 물음 옆에 자세한 물음 카드가 놓이는 모습을 보여 준다.',
        student: '"개미는 어때?"를 더 자세한 물음으로 바꾸어 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '자세하게 바꾸기', slots: [{ id: 's1', label: '개미는 어때?' }], cards: ['개미는 무엇을 옮길까?', '참새는 무엇을 먹을까?'], shuffle: false }, sequence: [{ match: { s1: '개미는 무엇을 옮길까?' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 막연한 물음을 자세하게', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음을 들으면 무엇을 살펴봐야 할지 바로 떠오르나요?" 자세한 물음에는 \'무엇을\', \'어디에\', \'몇\', \'언제\' 같은 말이 들어 있다는 것을 짚는다. 고른 뒤 "이 물음이면 무엇을 들고 어디로 가면 될까요?"라고 이어 묻는다.',
            task: '막연한 물음을 자세한 물음과 잇거나, 자세한 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '막연한 물음마다 더 자세하게 바꾼 물음을 이어 보세요.', toolOptions: { mode: 'match', topic: '자세하게 바꾸기', slots: [{ id: 's1', label: '민들레는 왜 그래?' }, { id: 's2', label: '참새는?' }, { id: 's3', label: '달팽이 신기해?' }], cards: ['민들레꽃은 왜 저녁에 오므릴까?', '참새는 하루에 몇 번 먹이를 쪼아 먹을까?', '달팽이는 어디로 기어갈까?'] },
                target: { match: { s1: '민들레꽃은 왜 저녁에 오므릴까?', s2: '참새는 하루에 몇 번 먹이를 쪼아 먹을까?', s3: '달팽이는 어디로 기어갈까?' } }, difficulty: 0.2 },
              { prompt: '물음을 자세한 물음과 막연한 물음으로 나누어 보세요.', toolOptions: { topic: '어떤 물음일까?', slots: ['자세한 물음', '막연한 물음'], cards: ['무당벌레 등의 점은 몇 개일까?', '거미는 거미줄을 어디에 칠까?', '무당벌레는 어때?', '거미는?'] },
                target: { sort: { '자세한 물음': ['무당벌레 등의 점은 몇 개일까?', '거미는 거미줄을 어디에 칠까?'], '막연한 물음': ['무당벌레는 어때?', '거미는?'] } }, difficulty: 0.15,
                predict: { q: '"거미는?"이라고 물으면 무엇을 살펴볼지 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요'], answer: 1 },
                conclude: '"무엇을", "어디에", "몇"을 넣으면 무엇을 살펴볼지 또렷해져요.' },
              { prompt: '지렁이에 대한 자세한 물음만 골라 보세요.', toolOptions: { mode: 'pick', topic: '지렁이 자세한 물음', cards: ['지렁이는 비 온 뒤 어디로 나올까?', '지렁이는 흙 속에서 무엇을 먹을까?', '지렁이는 어떨까?', '지렁이 좋아?'] },
                target: { pick: ['지렁이는 비 온 뒤 어디로 나올까?', '지렁이는 흙 속에서 무엇을 먹을까?'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '지렁이에 대한 자세한 물음만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['지렁이는 비 온 뒤 어디로 나올까?', '지렁이는 흙 속에서 무엇을 먹을까?', '지렁이는 어떨까?', '지렁이 좋아?', '지렁이 몸 길이는 몇 cm일까?', '지렁이가 꿈틀거려요.'] }, target: { pick: ['지렁이는 비 온 뒤 어디로 나올까?', '지렁이는 흙 속에서 무엇을 먹을까?', '지렁이 몸 길이는 몇 cm일까?'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 물음 카드 만들어 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"내 생물에게 할 물음 가운데 먹이나 사는 곳을 묻는 물음이 꼭 하나 있어야 해요." 물음 카드를 쓴 뒤 짝과 바꾸어 읽고 "이 물음이면 무엇을 살펴볼지 알겠어?"라고 서로 묻게 한다. 짝의 물음이 막연하면 \'무엇을·어디에\'를 넣어 바꾸도록 도와준다.',
            task: '친구 물음을 자세하게 고쳐 보고, 내 물음 카드를 만들어 짝과 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구들이 쓴 물음을 더 자세하게 바꾼 카드와 이어 보세요.', toolOptions: { mode: 'match', topic: '친구 물음 고치기', slots: [{ id: 's1', label: '서아: 나비는 뭐 해?' }, { id: 's2', label: '준호: 까치 집은?' }], cards: ['나비는 꽃에서 무엇을 먹을까?', '까치는 둥지를 어느 나무에 지을까?'] },
                target: { match: { s1: '나비는 꽃에서 무엇을 먹을까?', s2: '까치는 둥지를 어느 나무에 지을까?' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['나비는 꽃에서 무엇을 먹을까?', '까치는 둥지를 어느 나무에 지을까?', '나비는 예쁠까?'] } } } },
              { prompt: '달팽이 물음 가운데 먹이나 사는 곳을 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', topic: '먹이·사는 곳 물음', cards: ['달팽이는 상추와 오이 가운데 무엇을 먹을까?', '달팽이는 낮에 어디에 숨을까?', '달팽이 껍데기는 몇 바퀴 말렸을까?', '달팽이 눈은 어디에 있을까?'] },
                target: { pick: ['달팽이는 상추와 오이 가운데 무엇을 먹을까?', '달팽이는 낮에 어디에 숨을까?'] }, difficulty: 0.25,
                hints: ['물음마다 답을 알면 무엇을 알게 되는지 생각해요. 먹는 것이나 머무는 곳인지 따져요.', '고른 물음 가운데 몸의 생김새를 묻는 물음이 섞였는지 살펴봐요. "어디에"가 있어도 몸의 자리를 묻기도 해요.', '상추와 오이 가운데 무엇을 먹는지, 낮에 어디에 숨는지 묻는 두 장을 골라요.'] },
              { prompt: '내 물음 카드를 쓰고 짝과 바꾸어 읽은 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝의 물음 카드를 듣고 무엇을 살펴볼지 바로 알 수 있었나요?" 두세 모둠의 물음 카드를 읽어 준다. 물음 카드는 다음 시간 관찰 기록장 맨 위에 붙인다. 출구 첫 문항을 틀린 학생에게는 \'무엇을·어디에\'가 들어 있는지 다시 찾게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '자세하게 바꾸기', slots: [{ id: 'e1', label: '벌은?' }, { id: 'e2', label: '토끼풀은 어때?' }], cards: ['벌은 어떤 색 꽃에 많이 앉을까?', '토끼풀 잎은 몇 장씩 붙어 있을까?'] }, prompt: '막연한 물음과 자세하게 바꾼 물음을 이어 보세요.', target: { match: { e1: '벌은 어떤 색 꽃에 많이 앉을까?', e2: '토끼풀 잎은 몇 장씩 붙어 있을까?' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '가장 자세한 물음은 무엇인가요?', options: ['개미는?', '개미 좋아?', '개미는 먹이를 어디로 옮길까?'], answer: 2, difficulty: 0.1, explain: '"먹이를 어디로"처럼 무엇을 살펴볼지 알려 주는 말이 들어 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 물음 카드',
      items: [
        { type: 'table', prompt: '막연한 물음을 자세하게 바꾸어 쓰세요.', columns: ['막연한 물음', '자세한 물음'], cells: [['개미는 어때?', ''], ['참새는?', '']] },
        { type: 'check', prompt: '자세한 물음에 모두 ✓ 하세요.', options: ['거미는?', '거미는 무엇을 잡아먹을까?', '나비 좋아?', '나비 날개는 몇 장일까?'] },
        { type: 'short', prompt: '내가 살펴볼 생물에 대한 물음 카드를 쓰세요. (먹이나 사는 곳을 묻는 물음)' },
        { type: 'draw', prompt: '내 물음 카드를 꾸며 보세요.' },
      ],
      easy: {
        note: '"무엇을", "어디에", "몇"을 넣어 물어요.',
        items: [
          { type: 'choice', prompt: '자세한 물음에 ○ 하세요.', options: ['개미는 무엇을 옮길까?', '개미는?'], answer: '개미는 무엇을 옮길까?' },
          { type: 'blank', prompt: '참새는 (        )을 먹을까?', answer: '무엇' },
          { type: 'short', prompt: '내 생물에 대한 물음을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 내 물음 카드를 써서 짝과 나누어요.',
      challenge: '고를 카드가 더 많고 자세하지 않은 카드가 섞여 있어요. 먹이·사는 곳 물음을 하나씩 모두 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "왜?"만 넣으면 자세한 물음이라고 여긴다 → 무엇에 대해 "왜"인지가 들어가야 한다고 짚는다. ② 생김새 물음만 만든다 → 먹이·사는 곳 물음을 꼭 하나 넣게 한다. ③ 짝의 물음을 고쳐 주다 다툰다 → "이렇게 바꾸면 어때?"처럼 묻는 말로 돕게 한다. 물음 카드는 23~27차시 관찰 기록장에 붙인다.',
  }));

  // ───────────────────────── 23~27차시: 사흘 관찰하고 기록 읽기(관찰과 자료 읽기) ─────────────────────────

  lessons.push(L(23, {
    title: '눈·손·귀로 살펴 첫날 관찰 기록 쓰기',
    objective: '살펴본 것을 눈·손·귀 가운데 무엇으로 알았는지 나누고, 날짜·날씨·그림·본 것을 넣어 첫날 관찰 기록을 쓸 수 있다.',
    illustration: ART('a child with eyes, hands and ears drawn as little paper icons, observing a snail, a pine cone and a singing sparrow, holding an observation notebook', '눈, 손, 귀로 살펴요', [
      { motif: 'bird', x: 380, y: 100 }, { motif: 'tree', x: 400, y: 212 }, { motif: 'leaf', x: 120, y: 228 }]),
    safety: OUTSIDE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감고 이 솔방울을 만져 보세요. 무엇을 알 수 있나요?" 한 학생에게 눈을 감고 만지게 한 뒤 "까끌까끌해요"라는 말이 나오면, 눈을 뜨고 "무슨 색인지는 언제 알았나요?"라고 묻는다. "눈을 감고도 알 수 있는 것은 손이나 귀로 안 것이고, 색처럼 눈을 떠야만 아는 것이 눈으로 안 것이에요." 시연 단추로 카드가 눈·손·귀 칸에 나뉘어 놓이는 모습을 보여 준다.',
        student: '눈을 감고 솔방울을 만져 보고, 무엇을 알았는지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '무엇으로 알았나요?', slots: ['눈으로 봐서', '손으로 만져서', '귀로 들어서'], cards: ['솔방울이 갈색이에요', '솔방울이 까끌까끌해요', '참새가 짹짹 울어요'], shuffle: false }, sequence: [{ sort: { '눈으로 봐서': ['솔방울이 갈색이에요'], '손으로 만져서': ['솔방울이 까끌까끌해요'], '귀로 들어서': ['참새가 짹짹 울어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 무엇으로 알았는지 나누기', minutes: 11, tool: 'mindmap',
            teacher: '"이것은 눈을 감고도 알 수 있나요?" 색은 눈을 떠야만 알고, 소리는 귀로, 까끌까끌함·차가움은 손으로 안다는 기준을 칠판에 적어 두고 카드마다 그 기준으로 따지게 한다. 생물을 만질 때는 선생님께 먼저 묻고, 만진 뒤에는 손을 씻는다.',
            task: '살펴본 것 카드를 눈으로 봐서, 손으로 만져서, 귀로 들어서 안 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '화단에서 알게 된 것을 무엇으로 알았는지 나누어 보세요.', toolOptions: { topic: '무엇으로 알았나요?', slots: ['눈으로 봐서', '손으로 만져서', '귀로 들어서'], cards: ['민들레꽃이 노래요', '흙이 촉촉하고 차가워요', '개구리가 개굴개굴 울어요'] },
                target: { sort: { '눈으로 봐서': ['민들레꽃이 노래요'], '손으로 만져서': ['흙이 촉촉하고 차가워요'], '귀로 들어서': ['개구리가 개굴개굴 울어요'] } }, difficulty: 0.1 },
              { prompt: '나무 둘레에서 알게 된 것을 나누어 보세요.', toolOptions: { topic: '무엇으로 알았나요?', slots: ['눈으로 봐서', '손으로 만져서', '귀로 들어서'], cards: ['나무껍질이 거칠거칠해요', '까치 깃털이 검고 하얘요', '나뭇잎이 바람에 사각사각 소리 나요', '나뭇잎 뒷면이 보송보송해요', '새 잎이 연두색이에요'] },
                target: { sort: { '눈으로 봐서': ['까치 깃털이 검고 하얘요', '새 잎이 연두색이에요'], '손으로 만져서': ['나무껍질이 거칠거칠해요', '나뭇잎 뒷면이 보송보송해요'], '귀로 들어서': ['나뭇잎이 바람에 사각사각 소리 나요'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '나무 둘레에서 알게 된 것을 나누어 보세요. 카드가 세 장이에요.', toolOptions: { cards: ['나무껍질이 거칠거칠해요', '까치 깃털이 검고 하얘요', '나뭇잎이 바람에 사각사각 소리 나요'] },
                  target: { sort: { '눈으로 봐서': ['까치 깃털이 검고 하얘요'], '손으로 만져서': ['나무껍질이 거칠거칠해요'], '귀로 들어서': ['나뭇잎이 바람에 사각사각 소리 나요'] } } } } },
              { prompt: '달팽이를 살펴본 것을 나누어 보세요.', toolOptions: { topic: '무엇으로 알았나요?', slots: ['눈으로 봐서', '손으로 만져서'], cards: ['껍데기가 갈색 줄무늬예요', '껍데기가 단단해요', '몸이 말랑말랑해요'] },
                target: { sort: { '눈으로 봐서': ['껍데기가 갈색 줄무늬예요'], '손으로 만져서': ['껍데기가 단단해요', '몸이 말랑말랑해요'] } }, difficulty: 0.2,
                predict: { q: '눈을 감고도 껍데기 색을 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '색은 눈을 떠야만 알 수 있어요. 단단함·말랑함은 손으로 만져서 알아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 첫날 관찰 기록 쓰기', minutes: 16, tool: 'kitchen',
            teacher: '"관찰 기록장에 꼭 써야 할 것은 무엇일까요? 날짜를 안 쓰면 사흘 뒤에 견줄 수 있을까요?" 기록장 칸을 고른 뒤 \'자세한 기록\'과 \'느낌만 쓴 기록\'을 견주게 한다. 마지막 문항에서 모둠별로 화단에 10분 동안 나가 고른 생물을 살펴보고 첫날 기록을 쓴다. 생물은 잡지 않는다.',
            task: '관찰 기록장에 쓸 것을 고르고, 화단에서 첫날 관찰 기록을 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '관찰 기록장에 꼭 쓸 것만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '관찰 기록장', items: [{ id: 'date', text: '날짜' }, { id: 'weather', text: '날씨' }, { id: 'draw', text: '본 모습 그림' }, { id: 'saw', text: '눈·손·귀로 안 것' }, { id: 'snack', text: '좋아하는 간식' }] },
                target: { checklist: ['date', 'weather', 'draw', 'saw'] }, difficulty: 0.15,
                hints: ['항목마다 사흘 뒤에 기록을 견줄 때 쓰이는지 따져요.', '표시한 것 가운데 생물을 살펴본 것과 상관없는 항목이 있는지 살펴봐요.', '날짜, 날씨, 그림, 눈·손·귀로 안 것을 표시하고 간식은 빼요.'] },
              { prompt: '자세하게 쓴 관찰 기록만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '어떤 기록이 자세할까?', items: [{ id: 'a', text: '달팽이가 상추 가장자리를 갉아 먹었어요' }, { id: 'b', text: '개미 세 마리가 과자 부스러기를 옮겼어요' }, { id: 'c', text: '달팽이가 좋았어요' }, { id: 'd', text: '개미가 있었어요' }] },
                target: { checklist: ['a', 'b'] }, difficulty: 0.2,
                hints: ['기록을 읽기만 해도 무엇을 보았는지 그림이 떠오르는지 따져요.', '표시한 것 가운데 느낌만 쓰거나 무엇을 했는지 빠진 기록이 있는지 살펴봐요.', '어디를 갉아 먹었는지, 몇 마리가 무엇을 옮겼는지 쓴 두 기록이에요.'],
                predict: { q: '"달팽이가 좋았어요"를 읽으면 달팽이가 무엇을 했는지 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '수와 하는 일을 넣어 쓰면 읽는 사람도 본 것을 떠올릴 수 있어요.' },
              { prompt: '화단에서 고른 생물을 살펴보고 첫날 관찰 기록을 쓴 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 내 생물에 대해 눈·손·귀 가운데 무엇으로 가장 많이 알았나요?" 두세 명이 기록을 읽는다. 출구 첫 문항에서 색을 손 칸에 놓은 학생에게는 눈을 감고 색종이를 만져 보게 한다. 내일과 모레에도 같은 곳에서 같은 생물을 살펴본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '무엇으로 알았나요?', slots: ['눈으로 봐서', '손으로 만져서', '귀로 들어서'], cards: ['무당벌레 등에 까만 점이 있어요', '돌멩이가 매끈매끈해요', '벌이 윙윙 날아요'] }, prompt: '살펴본 것을 무엇으로 알았는지 나누어 보세요.', target: { sort: { '눈으로 봐서': ['무당벌레 등에 까만 점이 있어요'], '손으로 만져서': ['돌멩이가 매끈매끈해요'], '귀로 들어서': ['벌이 윙윙 날아요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '관찰 기록장에 날짜를 꼭 쓰는 까닭은 무엇일까요?', options: ['나중에 견주려고', '칸을 채우려고', '선생님이 좋아해서'], answer: 0, difficulty: 0.1, explain: '날짜가 있어야 며칠 뒤 기록과 견주어 달라진 점을 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '관찰 기록장 첫째 날',
      items: [
        { type: 'table', prompt: '첫째 날 관찰 기록을 쓰세요.', columns: ['살펴볼 것', '쓸 내용'], cells: [['날짜', ''], ['날씨', ''], ['눈으로 본 것', ''], ['손이나 귀로 안 것', '']] },
        { type: 'draw', prompt: '오늘 본 생물의 모습을 그리세요.' },
        { type: 'choice', prompt: '손으로 만져서 안 것에 ○ 하세요.', options: ['꽃이 노래요', '흙이 차가워요', '새가 울어요'], answer: '흙이 차가워요' },
        { type: 'short', prompt: '내 물음 카드에 대한 답을 오늘 찾았다면 쓰세요.' },
      ],
      easy: {
        note: '눈을 감고도 알 수 있으면 손이나 귀로 안 거예요.',
        items: [
          { type: 'choice', prompt: '눈으로 봐서 안 것에 ○ 하세요.', options: ['꽃이 노래요', '새가 울어요'], answer: '꽃이 노래요' },
          { type: 'short', prompt: '오늘 날짜와 날씨를 쓰세요.' },
          { type: 'draw', prompt: '오늘 본 생물의 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 세 장으로 줄어요. 맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 화단에서 첫날 기록을 써요.',
      challenge: '카드가 다섯 장이에요. 기록에 수(몇 마리, 몇 장)를 꼭 하나 넣어 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모양·색을 손으로 알았다고 한다 → "눈을 감고도 알 수 있나요?"라는 같은 기준으로 다시 따진다(이 차시의 판정 기준). ② 기록에 느낌만 쓴다 → "무엇을 했나요? 몇 마리였나요?"로 자세히 쓰게 한다. ③ 생물을 오래 만지려 한다 → 만지기는 선생님께 묻고 잠깐만 하고, 달팽이·공벌레를 만진 뒤에는 꼭 손을 씻는다. 비가 오면 교실 화분 생물로 바꾼다.',
  }));

  lessons.push(L(24, {
    title: '사흘 관찰 기록을 날짜 차례로 놓고 읽기',
    objective: '며칠에 걸친 관찰 기록을 날짜 차례대로 놓고, 기록표를 읽어 달라진 날과 달라진 점을 찾을 수 있다.',
    illustration: ART('three paper observation notes pinned in a row with dates, showing a dandelion changing from a yellow flower to a closed bud to a white fluff ball', '날마다 달라져요', [
      { motif: 'flower', x: 120, y: 226 }, { motif: 'flower', x: 240, y: 226, color: 'buttercup' }, { motif: 'cloud', x: 360, y: 210, s: 0.6, color: 'cream' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"23차시부터 사흘 동안 쓴 내 관찰 기록장을 펼쳐 보세요. 첫째 날과 셋째 날 그림이 같은가요?" 서너 명에게 달라진 곳을 묻는다. "기록이 섞여 버리면 어느 날이 먼저인지 어떻게 알까요?" 시연 단추로 민들레 기록 카드가 날짜 칸에 놓이는 모습을 보여 준다.',
        student: '내 관찰 기록장의 첫째 날과 셋째 날 그림을 견주어 달라진 곳을 찾아봐요.',
        demo: { tool: 'timeline', options: { mode: 'match', shuffle: false, slots: [{ id: 'd1', label: '5월 1일' }, { id: 'd2', label: '5월 12일' }], cards: ['노란 꽃이 활짝 폈어요', '하얀 솜털 공이 되었어요'] }, sequence: [{ match: { d1: '노란 꽃이 활짝 폈어요', d2: '하얀 솜털 공이 되었어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 기록을 날짜 차례로 놓기', minutes: 13, tool: 'timeline',
            teacher: '"이 모습 다음에는 어떤 모습이 될까요?" 생물이 달라지는 차례를 떠올려 날짜 칸에 놓게 한다. 날짜는 왼쪽이 먼저라는 것을 짚는다. 상추 문항에서는 "달팽이가 먹으면 상추는 늘어날까요, 줄어들까요?"라고 묻는다.',
            task: '섞인 관찰 기록 카드를 날짜 칸에 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '민들레 관찰 기록을 날짜에 맞게 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'd1', label: '5월 1일' }, { id: 'd2', label: '5월 3일' }, { id: 'd3', label: '5월 12일' }], cards: [c('노란 꽃이 활짝 폈어요', 'flower'), '꽃이 오므라들었어요', c('하얀 솜털 공이 되었어요', 'cloud')] },
                target: { match: { d1: '노란 꽃이 활짝 폈어요', d2: '꽃이 오므라들었어요', d3: '하얀 솜털 공이 되었어요' } }, difficulty: 0.2 },
              { prompt: '달팽이 상자의 상추 기록을 날짜에 맞게 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'd1', label: '5월 7일' }, { id: 'd2', label: '5월 8일' }, { id: 'd3', label: '5월 9일' }], cards: ['상추 잎이 동그랗게 그대로 있어요', '상추 가장자리에 구멍이 생겼어요', '상추가 반만 남았어요'] },
                target: { match: { d1: '상추 잎이 동그랗게 그대로 있어요', d2: '상추 가장자리에 구멍이 생겼어요', d3: '상추가 반만 남았어요' } }, difficulty: 0.2,
                hints: ['달팽이가 날마다 상추를 먹으면 상추가 어떻게 될지 생각해요. 처음 넣은 날의 모습부터 놓아요.', '어긋난 날을 짚어 보세요. 먹을수록 상추는 줄어들어요.', '그대로 있음 → 가장자리 구멍 → 반만 남음 차례예요.'] },
              { prompt: '개미 관찰 기록을 시간에 맞게 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 't1', label: '처음' }, { id: 't2', label: '10분 뒤' }, { id: 't3', label: '30분 뒤' }], cards: ['과자 부스러기를 놓았어요', '개미 두 마리가 찾아왔어요', '개미가 줄지어 부스러기를 옮겨요'] },
                target: { match: { t1: '과자 부스러기를 놓았어요', t2: '개미 두 마리가 찾아왔어요', t3: '개미가 줄지어 부스러기를 옮겨요' } }, difficulty: 0.2,
                hints: ['무엇이 있어야 개미가 찾아올지 생각해요. 사람이 한 일이 맨 처음이에요.', '어긋난 시간을 짚어 보세요. 개미는 먼저 몇 마리가 찾아온 뒤에 친구들이 줄지어 와요.', '부스러기 놓기 → 두 마리가 찾아옴 → 줄지어 옮김 차례예요.'],
                predict: { q: '개미는 처음부터 줄지어 올까요?', options: ['처음부터 줄지어 와요', '몇 마리가 먼저 와요'], answer: 1 },
                conclude: '먼저 찾은 개미가 길을 알려 주어 나중에 친구들이 줄지어 와요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록표 읽고 답하기', minutes: 14, tool: 'mindmap',
            teacher: '"문항 글의 기록표를 손가락으로 한 줄씩 짚으며 읽어 보세요. 잎 수가 언제 바뀌었나요?" 수가 바뀐 날을 찾는 연습을 한 뒤, 내 관찰 기록장에서도 달라진 날에 별표를 하게 한다.',
            task: '문항에 적힌 기록표를 읽고 알맞은 카드를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '강낭콩 기록이에요. 5월 7일 잎 2장, 5월 8일 잎 2장, 5월 9일 잎 3장. 잎이 처음 늘어난 날을 골라 보세요.', toolOptions: { mode: 'pick', topic: '잎이 늘어난 날', cards: ['5월 7일', '5월 8일', '5월 9일'] },
                target: { pick: ['5월 9일'] }, difficulty: 0.2,
                hints: ['날마다 잎 수를 앞날과 견주어 봐요. 수가 커진 날을 찾아요.', '고른 날의 잎 수가 앞날보다 정말 많은지 다시 견주어 봐요.', '7일과 8일은 2장으로 같고, 9일에 3장이 되었어요.'] },
              { prompt: '개미 기록이에요. 첫날 3마리, 둘째 날 8마리, 셋째 날 5마리. 개미를 가장 많이 본 날을 골라 보세요.', toolOptions: { mode: 'pick', topic: '가장 많이 본 날', cards: ['첫날', '둘째 날', '셋째 날'] },
                target: { pick: ['둘째 날'] }, difficulty: 0.15,
                hints: ['날마다 본 개미 수를 견주어 가장 큰 수를 찾아요.', '고른 날의 수보다 더 큰 수가 있는지 살펴봐요.', '3, 8, 5 가운데 8이 가장 커요.'] },
              { prompt: '달팽이 기록이에요. 첫날 화분 안, 둘째 날 화분 받침 밑, 셋째 날 화분 안. 달팽이가 다른 곳에 있었던 날을 골라 보세요.', toolOptions: { mode: 'pick', topic: '다른 곳에 있던 날', cards: ['첫날', '둘째 날', '셋째 날'] },
                target: { pick: ['둘째 날'] }, difficulty: 0.2,
                hints: ['날마다 달팽이가 있던 곳을 소리 내어 읽고, 혼자 다른 곳을 찾아요.', '고른 날의 곳이 다른 두 날과 정말 다른지 다시 읽어 봐요.', '첫날과 셋째 날은 화분 안, 둘째 날만 받침 밑이었어요.'],
                levels: { challenge: { prompt: '달팽이 기록이에요. 첫날 화분 안, 둘째 날 받침 밑, 셋째 날 화분 안, 넷째 날 받침 밑. 받침 밑에 있었던 날을 모두 골라 보세요.', toolOptions: { cards: ['첫날', '둘째 날', '셋째 날', '넷째 날'] }, target: { pick: ['둘째 날', '넷째 날'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 관찰 기록장에서 달라진 날에 별표를 했나요? 무엇이 달라졌는지 짝에게 말해 보세요." 출구 첫 문항을 틀린 학생에게는 생물이 달라지는 차례를 그림으로 다시 그려 보게 한다. 다음 시간에는 관찰 기록을 그래프로 읽는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'match', slots: [{ id: 'd1', label: '5월 2일' }, { id: 'd2', label: '5월 5일' }, { id: 'd3', label: '5월 9일' }], cards: ['꽃봉오리가 생겼어요', '꽃봉오리가 볼록해졌어요', '분홍 꽃이 피었어요'] }, prompt: '봉숭아 관찰 기록을 날짜에 맞게 놓아 보세요.', target: { match: { d1: '꽃봉오리가 생겼어요', d2: '꽃봉오리가 볼록해졌어요', d3: '분홍 꽃이 피었어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '참새 기록이에요. 월 2마리, 화 2마리, 수 4마리. 참새 수가 달라진 날은 언제인가요?', options: ['월요일', '화요일', '수요일'], answer: 2, difficulty: 0.2, explain: '월요일과 화요일은 2마리로 같고, 수요일에 4마리로 늘었어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사흘 기록 읽기',
      items: [
        { type: 'table', prompt: '내 관찰 기록장을 보고 사흘 동안의 모습을 쓰세요.', columns: ['날짜', '본 모습', '달라진 점'], cells: [['첫째 날', '', '(처음)'], ['둘째 날', '', ''], ['셋째 날', '', '']] },
        { type: 'choice', prompt: '잎이 2장, 2장, 4장이었어요. 잎이 늘어난 날은 몇째 날인가요?', options: ['첫째 날', '둘째 날', '셋째 날'], answer: '셋째 날' },
        { type: 'short', prompt: '내 생물에서 가장 크게 달라진 점을 쓰세요.' },
        { type: 'draw', prompt: '첫째 날과 셋째 날 모습을 나란히 그리세요.' },
      ],
      easy: {
        note: '앞날과 견주어 수나 모습이 바뀐 날을 찾아요.',
        items: [
          { type: 'choice', prompt: '먼저 오는 모습에 ○ 하세요.', options: ['노란 꽃', '하얀 솜털 공'], answer: '노란 꽃' },
          { type: 'choice', prompt: '개미 3마리, 8마리, 5마리. 가장 많은 날은?', options: ['첫날', '둘째 날'], answer: '둘째 날' },
          { type: 'draw', prompt: '첫째 날과 셋째 날 모습을 나란히 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 기록표를 한 줄씩 짚으며 읽어요.',
      challenge: '기록이 나흘로 늘어나고, 알맞은 날을 모두 골라야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 날짜를 숫자 크기로 견주지 못한다 → 달력에서 날짜를 짚어 왼쪽이 먼저라는 것을 보여 준다. ② 달라진 날을 찾을 때 가장 큰 수의 날을 고른다 → "앞날과 견주어 바뀐 날"과 "가장 많은 날"이 다른 물음이라는 것을 짚는다. ③ 내 기록에 빠진 날이 있다 → 친구 모둠 기록을 함께 보게 한다.',
  }));

  lessons.push(L(25, {
    title: '관찰 그림그래프 읽고 알 수 있는 것 고르기',
    objective: '화단 관찰 그림그래프를 읽고 가장 많은·적은 날을 찾으며, 그래프로 알 수 있는 것과 알 수 없는 것을 가릴 수 있다.',
    illustration: ART('a paper picture graph with rows of butterfly icons for three days hanging beside a flower bed with butterflies visiting flowers', '그래프로 읽어요', [
      { motif: 'flower', x: 110, y: 226 }, { motif: 'flower', x: 380, y: 226, color: 'lavender' }, { motif: 'star', x: 200, y: 92, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반이 사흘 동안 화단에서 본 나비 수를 그림으로 그려 보았어요." 그림그래프를 칠판에 붙이고 "그림 하나가 나비 한 마리예요. 어느 날 줄이 가장 길어요?"라고 묻는다. 시연 단추로 그림그래프에 그림이 쌓이는 모습을 보여 준다. 그래프의 수는 예시 반의 기록이라고 알려 준다.',
        student: '그래프에서 가장 긴 줄을 손가락으로 짚어 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '화단에서 본 나비', data: [['월', 3], ['화', 6], ['수', 2]], unit: '마리', xLabel: '요일', yLabel: '나비 수', icon: 'circle', showTable: true }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림그래프 읽기', minutes: 13, tool: 'chart',
            teacher: '"그림을 손가락으로 하나씩 짚으며 세어 보세요." 줄 길이로 많고 적음을 먼저 어림한 뒤 세어서 확인하게 한다. 수를 쓰는 문항에서는 한 줄을 다 센 뒤 다음 줄로 넘어가게 한다.',
            task: '관찰 그림그래프를 세어 읽고 물음에 답해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '화단에서 나비를 가장 많이 본 날을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '화단에서 본 나비', data: [['월', 3], ['화', 6], ['수', 2]], unit: '마리', xLabel: '요일', icon: 'circle', choices: ['월', '화', '수'], question: '가장 많이 본 날은?', why: ['월요일보다 그림이 더 많은 줄이 있어요.', '', '수요일 줄은 그림이 가장 짧아요.'], explain: '화요일 줄의 그림이 6개로 가장 길어요.' },
                target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '돌 밑에서 공벌레를 가장 적게 본 날을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '돌 밑에서 본 공벌레', data: [['월', 7], ['화', 4], ['수', 9], ['목', 5]], unit: '마리', xLabel: '요일', icon: 'circle', choices: ['월', '화', '수', '목'], question: '가장 적게 본 날은?', why: ['월요일은 그림이 꽤 많아요.', '', '수요일 줄은 그림이 가장 길어요.', '목요일보다 그림이 더 적은 줄이 있어요.'], explain: '화요일 줄의 그림이 4개로 가장 짧아요.' },
                target: { pick: 1 }, difficulty: 0.15 },
              { prompt: '그림그래프를 보고 표의 빈칸에 참새 수를 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '운동장에서 본 참새', data: [['월', 5], ['화', 2], ['수', 6]], unit: '마리', xLabel: '요일', icon: 'circle', tableBlanks: [0, 1, 2] },
                target: { table: true }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그래프로 알 수 있는 것', minutes: 14, tool: 'mindmap',
            teacher: '"그래프에 나비가 무슨 꽃을 좋아하는지 그려져 있나요?" 그래프에 있는 것(요일, 수)과 없는 것(꽃 색, 나비의 수명)을 나누게 한다. 그래프에 없는 것은 다른 방법으로 알아봐야 한다는 것을 20차시와 이어 짚는다.',
            task: '문항에 적힌 그래프를 떠올리며, 그래프로 알 수 있는 문장만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '나비 그래프(월 3마리, 화 6마리, 수 2마리)로 알 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '그래프로 알 수 있어요', cards: ['화요일에 나비를 가장 많이 봤어요', '수요일에 본 나비가 가장 적어요', '나비는 빨간 꽃을 좋아해요', '나비는 1년을 살아요'] },
                target: { pick: ['화요일에 나비를 가장 많이 봤어요', '수요일에 본 나비가 가장 적어요'] }, difficulty: 0.2,
                hints: ['그래프에는 요일과 그날 본 수만 있어요. 그것으로 말할 수 있는 문장인지 따져요.', '고른 문장 가운데 그래프에 없는 것(꽃 색, 사는 기간)을 말한 문장이 있는지 살펴봐요.', '가장 많은 날과 가장 적은 날을 말한 두 문장만 그래프로 알 수 있어요.'],
                predict: { q: '이 그래프로 나비가 좋아하는 꽃 색을 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '그래프는 그린 것만 알려 줘요. 그래프에 없는 것은 다른 방법으로 알아봐요.' },
              { prompt: '공벌레 그래프(월 7, 화 4, 수 9, 목 5마리)로 알 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '그래프로 알 수 있어요', cards: ['수요일에 공벌레를 가장 많이 봤어요', '월요일이 화요일보다 많아요', '공벌레는 썩은 잎을 먹어요'] },
                target: { pick: ['수요일에 공벌레를 가장 많이 봤어요', '월요일이 화요일보다 많아요'] }, difficulty: 0.2,
                hints: ['그래프에 있는 요일과 수만으로 말할 수 있는 문장인지 따져요.', '고른 문장 가운데 맞는 말이어도 그래프에는 없는 것이 있는지 살펴봐요.', '수요일이 가장 많다는 것과 월요일이 화요일보다 많다는 것만 그래프에 있어요.'] },
              { prompt: '참새 그래프(월 5, 화 2, 수 6마리)를 읽은 말을 맞는 말과 틀린 말로 나누어 보세요.', toolOptions: { topic: '참새 그래프 읽기', slots: ['맞는 말', '틀린 말'], cards: ['수요일에 가장 많이 봤어요', '화요일에 가장 적게 봤어요', '월요일에 가장 많이 봤어요'] },
                target: { sort: { '맞는 말': ['수요일에 가장 많이 봤어요', '화요일에 가장 적게 봤어요'], '틀린 말': ['월요일에 가장 많이 봤어요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '참새 그래프(월 5, 화 2, 수 6마리)를 읽은 말을 나누어 보세요. 그래프로 알 수 없는 말은 남겨요.', toolOptions: { cards: ['수요일에 가장 많이 봤어요', '화요일에 가장 적게 봤어요', '월요일에 가장 많이 봤어요', '참새는 씨앗을 좋아해요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 모둠 관찰 기록도 그림그래프로 그려 볼 수 있을까요?" 모둠 기록의 수를 칠판 그래프 틀에 붙임 딱지로 함께 붙여 본다. 출구 첫 문항을 틀린 학생에게는 그림을 다시 하나씩 짚으며 세게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '꽃밭에서 본 벌', data: [['월', 4], ['화', 8], ['수', 6]], unit: '마리', xLabel: '요일', icon: 'circle', choices: ['월', '화', '수'], question: '가장 적게 본 날은?', explain: '월요일 줄의 그림이 4개로 가장 짧아요.' }, prompt: '벌 그림그래프를 보고 가장 적게 본 날을 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
          { type: 'choice', prompt: '"꽃밭에서 본 벌" 그래프로 알 수 없는 것은 무엇인가요?', options: ['가장 많이 본 날', '벌이 좋아하는 꽃', '화요일에 본 벌의 수'], answer: 1, difficulty: 0.2, explain: '그래프에는 요일과 벌의 수만 있고, 꽃 이야기는 없어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '관찰 그래프 읽기',
      items: [
        { type: 'figure', wide: true, prompt: '그림그래프를 보고 요일마다 나비 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '화단에서 본 나비', data: [['월', 2], ['화', 5], ['수', 4]], unit: '마리', icon: 'circle' }, caption: '월 (   )마리, 화 (   )마리, 수 (   )마리' }], answer: '월 2마리, 화 5마리, 수 4마리' },
        { type: 'choice', prompt: '위 그래프에서 나비를 가장 많이 본 날에 ○ 하세요.', options: ['월', '화', '수'], answer: '화' },
        { type: 'check', prompt: '위 그래프로 알 수 있는 것에 모두 ✓ 하세요.', options: ['가장 많이 본 날', '나비가 좋아하는 꽃', '월요일에 본 나비 수'] },
        { type: 'table', prompt: '우리 모둠이 사흘 동안 본 생물의 수를 쓰세요.', columns: ['첫째 날', '둘째 날', '셋째 날'], rows: 1 },
      ],
      easy: {
        note: '그림 하나가 한 마리예요.',
        items: [
          { type: 'figure', wide: true, prompt: '그림을 세어 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '본 개미', data: [['월', 3], ['화', 6]], unit: '마리', icon: 'circle' }, caption: '월 (   )마리, 화 (   )마리' }], answer: '월 3마리, 화 6마리' },
          { type: 'choice', prompt: '더 많이 본 날에 ○ 하세요.', options: ['월', '화'], answer: '화' },
          { type: 'short', prompt: '우리 모둠이 본 생물의 이름을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 줄 끝에 수가 보이고, 고르기 칸에 초록 테두리가 생겨요.',
      base: '그림을 세어 읽고, 그래프로 알 수 있는 문장을 골라요.',
      challenge: '그래프로 알 수 없는 말이 섞여 있어 남겨 두어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그래프에 없는 것(꽃 색)도 그래프로 안다고 여긴다 → "그래프에서 그곳을 짚어 볼래요?"라고 묻는다. ② 그림을 세다 줄을 놓친다 → 한 줄을 다 센 뒤 끝에 수를 써 두게 한다. ③ 그래프 수를 우리 반 기록으로 여긴다 → 예시 반 기록이라고 말하고, 원하면 우리 모둠 수로 같은 그래프를 칠판에 만든다.',
  }));

  lessons.push(L(26, {
    title: '한 번 보기와 여러 날 보기 견주기',
    objective: '한 번 보아도 알 수 있는 것과 여러 날 보아야 알 수 있는 것을 나누고, 생물이 오랫동안 달라지는 차례를 놓을 수 있다.',
    illustration: ART('a calendar made of paper squares with a tadpole growing legs across the weeks, and a child pointing at the days', '여러 날 봐야 알아요', [
      { motif: 'wave', x: 120, y: 236 }, { motif: 'leaf', x: 380, y: 228 }, { motif: 'sun', x: 300, y: 90, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"민지는 올챙이를 한 번 보고 \'올챙이는 꼬리만 있고 다리가 없어\'라고 기록했어요. 이 기록은 맞을까요?" 몇 주 뒤 뒷다리가 난 올챙이 그림을 보여 준다. "한 번 보고 다 알았다고 하면 무엇을 놓칠까요?" 시연 단추로 \'꽃 색\'은 한 번 보기 칸에, \'키가 자람\'은 여러 날 보기 칸에 놓이는 모습을 보여 준다.',
        student: '내 관찰 생물에서 첫날에는 몰랐는데 사흘 동안 보고 안 것을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '언제 알 수 있을까?', slots: ['한 번 보면 알아요', '여러 날 봐야 알아요'], cards: ['민들레꽃의 색', '강낭콩 키가 자라는 것'], shuffle: false }, sequence: [{ sort: { '한 번 보면 알아요': ['민들레꽃의 색'], '여러 날 봐야 알아요': ['강낭콩 키가 자라는 것'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 번 보기와 여러 날 보기', minutes: 13, tool: 'mindmap',
            teacher: '"오늘 한 번 보고 답이 다 나오나요, 아니면 며칠 동안 지켜봐야 하나요?" 카드마다 \'자라는\', \'바뀌는\', \'되는\' 같은 낱말에 밑줄을 그어 보게 한다. 바뀌는 것을 알려면 여러 날 보아야 한다는 것을 짚는다.',
            task: '알고 싶은 것 카드를 한 번 보면 아는 것과 여러 날 봐야 아는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '알고 싶은 것을 언제 알 수 있는지 나누어 보세요.', toolOptions: { topic: '언제 알 수 있을까?', slots: ['한 번 보면 알아요', '여러 날 봐야 알아요'], cards: ['달팽이 껍데기의 색', '개미 다리의 수', '강낭콩 키가 자라는 것', '올챙이 다리가 나는 것'] },
                target: { sort: { '한 번 보면 알아요': ['달팽이 껍데기의 색', '개미 다리의 수'], '여러 날 봐야 알아요': ['강낭콩 키가 자라는 것', '올챙이 다리가 나는 것'] } }, difficulty: 0.15 },
              { prompt: '알고 싶은 것을 언제 알 수 있는지 나누어 보세요.', toolOptions: { topic: '언제 알 수 있을까?', slots: ['한 번 보면 알아요', '여러 날 봐야 알아요'], cards: ['무당벌레 등의 점 무늬', '애벌레가 번데기로 바뀌는 것', '꽃봉오리가 꽃으로 피는 것', '거미줄의 모양'] },
                target: { sort: { '한 번 보면 알아요': ['무당벌레 등의 점 무늬', '거미줄의 모양'], '여러 날 봐야 알아요': ['애벌레가 번데기로 바뀌는 것', '꽃봉오리가 꽃으로 피는 것'] } }, difficulty: 0.2,
                predict: { q: '애벌레가 번데기로 바뀌는 것을 하루만 보고 알 수 있을까요?', options: ['알 수 있어요', '여러 날 봐야 해요'], answer: 1 },
                conclude: '모습이 바뀌는 것은 여러 날 지켜보아야 알 수 있어요.' },
              { prompt: '알고 싶은 것을 나누어 보세요. 살펴볼 수 없는 것은 남겨요.', toolOptions: { topic: '언제 알 수 있을까?', slots: ['한 번 보면 알아요', '여러 날 봐야 알아요'], cards: ['토끼풀 꽃의 색', '해바라기가 자라 꽃이 피는 것', '공룡이 먹던 풀'] },
                target: { sort: { '한 번 보면 알아요': ['토끼풀 꽃의 색'], '여러 날 봐야 알아요': ['해바라기가 자라 꽃이 피는 것'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '알고 싶은 것을 나누어 보세요. 살펴볼 수 없는 것은 남겨요. 카드가 더 많아요.', toolOptions: { cards: ['토끼풀 꽃의 색', '해바라기가 자라 꽃이 피는 것', '공룡이 먹던 풀', '참새 부리의 모양', '민들레 꽃이 솜털 씨가 되는 것'] },
                  target: { sort: { '한 번 보면 알아요': ['토끼풀 꽃의 색', '참새 부리의 모양'], '여러 날 봐야 알아요': ['해바라기가 자라 꽃이 피는 것', '민들레 꽃이 솜털 씨가 되는 것'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오래 지켜본 차례 놓기', minutes: 14, tool: 'lifecycle',
            teacher: '"이 모습들을 모두 보려면 며칠이 걸릴까요? 한 번만 본 사람은 무엇을 보았을까요?" 차례를 놓은 뒤 \'차례대로 따라가 보기\' 단추를 눌러 처음 모습만 본 사람과 끝까지 본 사람의 기록이 어떻게 다를지 이야기하게 한다.',
            task: '생물이 오랫동안 달라지는 차례대로 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '배추흰나비가 자라는 차례대로 카드를 놓아 보세요.', toolOptions: { center: '배추흰나비가 자라요', cards: [c('알', 'egg'), c('애벌레', 'larva'), c('번데기', 'pupa'), c('나비', 'butterfly')] },
                target: { order: ['알', '애벌레', '번데기', '나비'], cyclic: true }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: [c('알', 'egg'), c('애벌레', 'larva'), c('번데기', 'pupa'), c('나비', 'butterfly'), c('올챙이', 'tadpole')], slots: 4 } } } },
              { prompt: '무당벌레가 자라는 차례대로 카드를 놓아 보세요.', toolOptions: { center: '무당벌레가 자라요', cards: [{ id: '노란 알', text: '노란 알', motif: 'egg' }, { id: '무당 애벌레', text: '애벌레', motif: 'larva' }, { id: '무당 번데기', text: '번데기', motif: 'pupa' }, { id: '무당벌레', text: '무당벌레' }] },
                target: { order: ['노란 알', '무당 애벌레', '무당 번데기', '무당벌레'], cyclic: true }, difficulty: 0.25,
                predict: { q: '무당벌레 애벌레는 무당벌레와 생김새가 같을까요?', options: ['같아요', '달라요'], answer: 1 },
                conclude: '무당벌레 애벌레는 어른 무당벌레와 생김새가 아주 달라요. 여러 날 봐야 같은 생물인 줄 알아요.' },
              { prompt: '연못 올챙이를 오래 지켜본 모습을 차례대로 놓아 보세요. 이 판은 처음으로 돌아가지 않아요.', toolOptions: { center: '연못 올챙이 관찰', cycle: false, cards: [c('알 덩어리', 'egg'), c('꼬리를 흔드는 올챙이', 'tadpole'), { id: '뒷다리가 난 올챙이', text: '뒷다리가 난 올챙이', motif: 'tadpole' }, c('꼬리가 짧아진 새끼 개구리', 'frog')] },
                target: { order: ['알 덩어리', '꼬리를 흔드는 올챙이', '뒷다리가 난 올챙이', '꼬리가 짧아진 새끼 개구리'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"민지에게 올챙이 기록을 어떻게 고치라고 말해 줄까요?" \'한 번 보고 쓴 것\'이라는 것을 기록에 함께 쓰거나, 며칠 더 보자고 말하는 생각을 듣는다. 출구 첫 문항을 틀린 학생에게는 카드 속 \'자라는·바뀌는\' 낱말을 다시 찾게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '언제 알 수 있을까?', slots: ['한 번 보면 알아요', '여러 날 봐야 알아요'], cards: ['나팔꽃 잎의 모양', '나팔꽃 덩굴이 막대를 감아 오르는 것'] }, prompt: '나팔꽃에 대해 알고 싶은 것을 언제 알 수 있는지 나누어 보세요.', target: { sort: { '한 번 보면 알아요': ['나팔꽃 잎의 모양'], '여러 날 봐야 알아요': ['나팔꽃 덩굴이 막대를 감아 오르는 것'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"한 번 보면 그 생물에 대해 다 알 수 있다"는 말은 맞을까요?', options: ['맞아요', '아니에요, 여러 날 봐야 아는 것도 있어요'], answer: 1, difficulty: 0.1, explain: '생물은 자라고 바뀌어서, 여러 날 지켜보아야 알 수 있는 것이 많아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 날 봐야 알아요',
      items: [
        { type: 'table', prompt: '내 생물에 대해 알게 된 것을 나누어 쓰세요.', columns: ['한 번 보고 안 것', '여러 날 보고 안 것'], rows: 2 },
        { type: 'figure', wide: true, prompt: '배추흰나비가 자라는 차례를 생각하며 빈 자리에 이름을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '배추흰나비가 자라요', printCards: false, cards: ['알', '애벌레', '번데기', '나비'] }, state: { at: { 알: 0 } }, caption: '' }], answer: '애벌레 → 번데기 → 나비' },
        { type: 'choice', prompt: '여러 날 봐야 알 수 있는 것에 ○ 하세요.', options: ['꽃의 색', '꽃봉오리가 피는 것', '잎의 모양'], answer: '꽃봉오리가 피는 것' },
        { type: 'short', prompt: '한 번 보고 다 안다고 말하는 친구에게 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '"자라는", "바뀌는"이 있으면 여러 날 봐야 해요.',
        items: [
          { type: 'choice', prompt: '여러 날 봐야 알 수 있는 것에 ○ 하세요.', options: ['강낭콩 키가 자라는 것', '달팽이 껍데기 색'], answer: '강낭콩 키가 자라는 것' },
          { type: 'choice', prompt: '애벌레 다음에 오는 모습에 ○ 하세요.', options: ['번데기', '알'], answer: '번데기' },
          { type: 'draw', prompt: '내 생물이 달라진 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요.',
      challenge: '살펴볼 수 없는 카드와 다른 생물의 카드가 섞여 있어 골라내야 해요. 카드도 더 많아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번 보면 그 생물에 대해 다 안다고 여긴다(이 차시의 핵심 오개념) → 무당벌레 애벌레처럼 어른과 생김새가 아주 다른 예를 보여 준다. ② 생김새(다리 수)도 여러 날 봐야 한다고 여긴다 → 바뀌지 않는 것은 한 번으로 알 수 있다고 짚는다. ③ 무당벌레 애벌레를 처음 본다 → 그림을 보여 주고, 진딧물이 많은 곳에서 찾을 수 있다고 알려 준다.',
  }));

  lessons.push(L(27, {
    title: '날씨에 따라 달라지는 생물 모습 기록하기',
    objective: '날씨에 따라 자주 보이는 생물의 모습을 짝 짓고, 날씨별 관찰 그래프를 읽어 생물이 많이 보인 날씨를 찾을 수 있다.',
    illustration: ART('three paper weather windows showing a snail after rain, butterflies on a sunny day and dandelion seeds flying on a windy day', '날씨마다 달라요', [
      { motif: 'cloud', x: 120, y: 96, color: 'sky' }, { motif: 'flower', x: 240, y: 226 }, { motif: 'leaf', x: 380, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"비가 온 다음 날 화단에서 무엇이 많이 보였나요?" 달팽이·지렁이라는 대답이 나오면 "맑은 날에도 그만큼 보일까요?"라고 묻는다. "날씨에 따라 생물이 보이는 모습이 달라요. 그래서 관찰 기록장에 날씨 칸이 있어요." 시연 단추로 \'비 온 뒤\' 옆에 달팽이 카드가 놓이는 모습을 보여 준다.',
        student: '비 온 날과 맑은 날 화단에서 본 것이 달랐는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '날씨마다 달라요', slots: [{ id: 's1', label: '비 온 뒤' }], cards: ['달팽이가 나와 기어 다녀요', '눈사람이 녹아요'], shuffle: false }, sequence: [{ match: { s1: '달팽이가 나와 기어 다녀요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 날씨와 생물 모습 짝 짓기', minutes: 13, tool: 'mindmap',
            teacher: '"그 생물은 축축한 것을 좋아할까요, 따뜻한 햇볕을 좋아할까요?" 2차시에 찾은 까닭(달팽이는 축축한 곳)을 떠올리게 한다. 바람과 민들레 씨처럼 생물이 날씨의 도움을 받는 경우도 있다는 것을 짚는다.',
            task: '날씨 옆에 그날 자주 보이는 생물의 모습 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '날씨마다 자주 보이는 생물의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '날씨마다 달라요', slots: [{ id: 's1', label: '비 온 뒤', motif: 'cloud' }, { id: 's2', label: '맑고 따뜻한 날', motif: 'sun' }, { id: 's3', label: '바람 부는 날' }], cards: ['달팽이가 나와 기어 다녀요', '나비와 벌이 꽃에 많이 와요', '민들레 솜털 씨가 날아가요'] },
                target: { match: { s1: '달팽이가 나와 기어 다녀요', s2: '나비와 벌이 꽃에 많이 와요', s3: '민들레 솜털 씨가 날아가요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['달팽이가 나와 기어 다녀요', '나비와 벌이 꽃에 많이 와요', '민들레 솜털 씨가 날아가요', '눈 위에 발자국이 생겨요'] } } } },
              { prompt: '날씨마다 자주 보이는 생물의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '날씨마다 달라요', slots: [{ id: 's1', label: '흐리고 쌀쌀한 날' }, { id: 's2', label: '비 온 다음 날 아침' }], cards: ['민들레꽃이 오므려 있어요', '흙 위로 지렁이가 기어 나와요'] },
                target: { match: { s1: '민들레꽃이 오므려 있어요', s2: '흙 위로 지렁이가 기어 나와요' } }, difficulty: 0.2 },
              { prompt: '비 온 뒤에 더 잘 보이는 생물만 골라 보세요.', toolOptions: { mode: 'pick', topic: '비 온 뒤 더 잘 보여요', cards: ['달팽이', '지렁이', '나비', '벌'] },
                target: { pick: ['달팽이', '지렁이'] }, difficulty: 0.15,
                predict: { q: '나비는 비 오는 날에도 꽃에 많이 올까요?', options: ['많이 와요', '잘 안 와요'], answer: 1 },
                conclude: '나비와 벌은 맑고 따뜻한 날 많이 날고, 달팽이와 지렁이는 축축할 때 많이 나와요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 날씨별 관찰 그래프 읽기', minutes: 14, tool: 'chart',
            teacher: '"이 그래프는 요일이 아니라 날씨로 나누었어요. 가로줄 이름을 먼저 읽어 보세요." 날씨 이름을 먼저 읽게 한 뒤 그림을 세게 한다. 읽은 뒤 활동 1에서 짝 지은 것과 그래프가 같은 말을 하는지 견주게 한다.',
            task: '날씨에 따라 본 생물 수를 그린 그림그래프를 읽고 물음에 답해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '달팽이를 가장 많이 본 날씨를 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '날씨별로 본 달팽이', data: [['맑은 날', 1], ['비 온 뒤', 7], ['흐린 날', 3]], unit: '마리', xLabel: '날씨', icon: 'circle', choices: ['맑은 날', '비 온 뒤', '흐린 날'], question: '가장 많이 본 날씨는?', why: ['맑은 날 줄은 그림이 가장 짧아요.', '', '흐린 날보다 그림이 더 많은 줄이 있어요.'], explain: '비 온 뒤 줄의 그림이 7개로 가장 길어요.' },
                target: { pick: 1 }, difficulty: 0.15 },
              { prompt: '나비를 가장 많이 본 날씨를 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '날씨별로 본 나비', data: [['맑은 날', 8], ['비 온 뒤', 0], ['흐린 날', 2]], unit: '마리', xLabel: '날씨', icon: 'circle', choices: ['맑은 날', '비 온 뒤', '흐린 날'], question: '가장 많이 본 날씨는?', why: ['', '비 온 뒤에는 그림이 하나도 없어요.', '흐린 날 줄은 그림이 2개뿐이에요.'], explain: '맑은 날 줄의 그림이 8개로 가장 길어요.' },
                target: { pick: 0 }, difficulty: 0.15,
                predict: { q: '비 온 뒤 나비 줄에는 그림이 몇 개 있을까요?', options: ['많아요', '하나도 없어요'], answer: 1 },
                conclude: '그래프도 나비는 맑은 날 많이 보인다는 것을 보여 줘요.' },
              { prompt: '그래프를 보고 표의 빈칸에 지렁이 수를 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '날씨별로 본 지렁이', data: [['맑은 날', 2], ['비 온 뒤', 9], ['흐린 날', 4]], unit: '마리', xLabel: '날씨', icon: 'circle', tableBlanks: [0, 1, 2] },
                target: { table: true }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 관찰 기록장의 날씨 칸을 보세요. 생물이 많이 보인 날의 날씨는 무엇이었나요?" 두세 명이 말한다. 출구 첫 문항을 틀린 학생에게는 생물이 좋아하는 것(축축함, 햇볕)을 다시 떠올리게 한다. 23~27차시 관찰을 마치고, 다음 시간부터 알아낸 것을 설명한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '날씨마다 달라요', slots: [{ id: 'e1', label: '햇볕이 따뜻한 날' }, { id: 'e2', label: '비가 그친 저녁' }], cards: ['벌이 꽃밭을 바쁘게 날아요', '화단 돌 위로 달팽이가 기어 나와요'] }, prompt: '날씨와 그날 자주 보이는 모습을 이어 보세요.', target: { match: { e1: '벌이 꽃밭을 바쁘게 날아요', e2: '화단 돌 위로 달팽이가 기어 나와요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '관찰 기록장에 날씨를 쓰는 까닭은 무엇일까요?', options: ['날씨에 따라 생물 모습이 달라서', '날씨 칸이 예뻐서'], answer: 0, difficulty: 0.1, explain: '같은 생물도 날씨에 따라 많이 보이거나 숨어 있어서 날씨를 함께 적어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '날씨와 생물',
      items: [
        { type: 'table', prompt: '내 관찰 기록장에서 날씨와 본 모습을 옮겨 쓰세요.', columns: ['날씨', '본 모습'], rows: 3 },
        { type: 'figure', wide: true, prompt: '그림그래프를 보고 날씨마다 달팽이 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '날씨별로 본 달팽이', data: [['맑은 날', 2], ['비 온 뒤', 6]], unit: '마리', icon: 'circle' }, caption: '맑은 날 (   )마리, 비 온 뒤 (   )마리' }], answer: '맑은 날 2마리, 비 온 뒤 6마리' },
        { type: 'choice', prompt: '맑고 따뜻한 날 꽃밭에 많이 오는 생물에 ○ 하세요.', options: ['지렁이', '나비', '달팽이'], answer: '나비' },
        { type: 'short', prompt: '비 온 뒤에 달팽이가 많이 보이는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '그 생물이 축축한 곳을 좋아하는지, 햇볕을 좋아하는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '비 온 뒤 많이 보이는 생물에 ○ 하세요.', options: ['달팽이', '나비'], answer: '달팽이' },
          { type: 'choice', prompt: '바람 부는 날 날아가는 것에 ○ 하세요.', options: ['민들레 씨', '돌멩이'], answer: '민들레 씨' },
          { type: 'draw', prompt: '비 온 뒤 화단의 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 줄 끝에 수가 보이고, 맞는 자리에 놓으면 초록 테두리가 생겨요.',
      base: '모두 놓은 뒤 확인을 눌러요. 날씨 이름을 먼저 읽고 그래프를 세어요.',
      challenge: '봄 화단과 상관없는 카드가 섞여 있어 골라내야 해요. 그래프를 다 읽고 활동 1과 같은 말을 하는지 짝에게 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그래프의 가로줄을 요일로 읽는다 → 가로줄 이름을 먼저 소리 내어 읽게 한다. ② 비가 오면 생물이 모두 숨는다고 여긴다 → 달팽이·지렁이처럼 오히려 나오는 생물을 짚는다. ③ 0마리 줄을 빈칸이라 여긴다 → 그림이 하나도 없으면 0이라는 것을 짚는다. 그래프 수는 예시 기록이다.',
  }));

  // ───────────────────────── 28~32차시: 알아낸 것을 설명하기(생물이 사는 모습과 사람과의 관계) ─────────────────────────

  lessons.push(L(28, {
    title: '관찰 기록에서 알아낸 것 차례대로 정리하기',
    objective: '관찰 기록을 보고 궁금했던 것, 살펴본 방법, 알게 된 것의 차례로 알아낸 것을 정리할 수 있다.',
    illustration: ART('a child arranging four paper cards in a row on a desk beside an observation notebook and a snail in a clear box', '알아낸 것을 정리해요', [
      { motif: 'leaf', x: 120, y: 228 }, { motif: 'star', x: 360, y: 96, s: 0.5 }, { motif: 'flower', x: 400, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"준호는 발표할 때 \'상추를 먹어요! 달팽이요! 사흘 봤어요!\' 하고 말했어요. 친구들이 알아들었을까요?" 순서가 뒤섞이면 듣는 사람이 헷갈린다는 것을 짚는다. "궁금했던 것부터 말하면 듣는 친구도 함께 따라와요." 시연 단추로 이야기 카드가 차례대로 놓이는 모습을 보여 준다.',
        student: '준호의 발표를 듣고, 무엇부터 말하면 좋을지 생각해 봐요.',
        demo: { tool: 'story', options: { slots: ['궁금했던 것', '살펴본 방법', '알게 된 것'], cards: [{ id: 'q', text: '달팽이는 무엇을 먹을까?', motif: 'cloud' }, { id: 'how', text: '사흘 동안 상자를 살펴봤어요', motif: 'star' }, { id: 'know', text: '상추를 갉아 먹어요', motif: 'leaf' }], shuffle: false }, sequence: [{ order: ['q', 'how', 'know'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 알아낸 것 차례대로 놓기', minutes: 13, tool: 'story',
            teacher: '"칸 이름을 먼저 소리 내어 읽어 보세요. 알게 된 것을 맨 앞에 놓으면, 살펴보기 전에 알 수 있었을까요?" 마지막 칸 \'더 알고 싶은 것\'은 탐구가 끝나도 새 물음이 생긴다는 뜻이라고 알려 준다.',
            task: '관찰 이야기 카드를 칸 이름에 맞게 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '개미 관찰 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['궁금했던 것', '살펴본 방법', '알게 된 것'], cards: [{ id: 'q', text: '개미는 먹이를 어떻게 옮길까?', motif: 'cloud' }, { id: 'how', text: '과자 부스러기를 놓고 30분 지켜봤어요', motif: 'star' }, { id: 'know', text: '여럿이 줄지어 옮겨요', motif: 'sun' }] },
                target: { order: ['q', 'how', 'know'] }, difficulty: 0.1 },
              { prompt: '강낭콩 관찰 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['궁금했던 것', '살펴본 방법', '알게 된 것', '더 알고 싶은 것'], cards: [{ id: 'q', text: '강낭콩은 하루에 얼마나 자랄까?', motif: 'cloud' }, { id: 'how', text: '사흘 동안 자로 키를 쟀어요', motif: 'star' }, { id: 'know', text: '잎이 나면서 키가 쑥 컸어요', motif: 'leaf' }, { id: 'more', text: '꽃은 언제 필까?', motif: 'flower' }] },
                target: { order: ['q', 'how', 'know', 'more'] }, difficulty: 0.2,
                levels: { easy: { prompt: '강낭콩 관찰 이야기를 차례대로 놓아 보세요. 칸이 세 개예요.', toolOptions: { slots: ['궁금했던 것', '살펴본 방법', '알게 된 것'], cards: [{ id: 'q', text: '강낭콩은 하루에 얼마나 자랄까?', motif: 'cloud' }, { id: 'how', text: '사흘 동안 자로 키를 쟀어요', motif: 'star' }, { id: 'know', text: '잎이 나면서 키가 쑥 컸어요', motif: 'leaf' }] }, target: { order: ['q', 'how', 'know'] } } } },
              { prompt: '공벌레 관찰 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['궁금했던 것', '살펴본 방법', '알게 된 것', '더 알고 싶은 것'], cards: [{ id: 'q', text: '공벌레는 왜 몸을 말까?', motif: 'cloud' }, { id: 'how', text: '돌 밑 공벌레를 사흘 동안 지켜봤어요', motif: 'star' }, { id: 'know', text: '건드리면 몸을 동그랗게 말아요', motif: 'sun' }, { id: 'more', text: '공벌레는 몇 년을 살까?', motif: 'leaf' }] },
                target: { order: ['q', 'how', 'know', 'more'] }, difficulty: 0.2,
                conclude: '궁금했던 것 → 살펴본 방법 → 알게 된 것 → 더 알고 싶은 것 차례로 말하면 듣는 친구가 따라오기 쉬워요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록에서 알게 된 것 찾기', minutes: 14, tool: 'mindmap',
            teacher: '"이 기록을 읽고 무엇을 알게 되었다고 말할 수 있을까요?" 기록과 알게 된 것을 잇게 한 뒤, 기록에 없는 것을 알게 된 것처럼 말하면 안 된다는 것을 짚는다. 끝에는 내 관찰 기록장에서 알게 된 것 한 가지를 찾아 짝에게 말한다.',
            task: '관찰 기록 옆에 그 기록으로 알게 된 것을 이어요. 그리고 내 기록에서 알게 된 것을 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '관찰 기록과 그 기록으로 알게 된 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '기록에서 알게 된 것', slots: [{ id: 's1', label: '상추가 날마다 조금씩 줄었어요' }, { id: 's2', label: '잎이 2장, 2장, 4장이었어요' }, { id: 's3', label: '비 온 뒤 지렁이가 9마리 나왔어요' }], cards: ['달팽이는 상추를 먹어요', '강낭콩 잎이 셋째 날 늘었어요', '지렁이는 비 온 뒤 많이 나와요'] },
                target: { match: { s1: '달팽이는 상추를 먹어요', s2: '강낭콩 잎이 셋째 날 늘었어요', s3: '지렁이는 비 온 뒤 많이 나와요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['달팽이는 상추를 먹어요', '강낭콩 잎이 셋째 날 늘었어요', '지렁이는 비 온 뒤 많이 나와요', '지렁이는 사과를 좋아해요'] } } } },
              { prompt: '"개미가 첫날 3마리, 둘째 날 8마리 왔어요" 기록으로 말할 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '기록으로 말할 수 있어요', cards: ['둘째 날 개미가 더 많이 왔어요', '첫날 개미는 3마리였어요', '개미는 단것을 가장 좋아해요', '개미 집은 아주 깊어요'] },
                target: { pick: ['둘째 날 개미가 더 많이 왔어요', '첫날 개미는 3마리였어요'] }, difficulty: 0.2,
                hints: ['기록에 적힌 날과 수만 가지고 말할 수 있는 문장인지 따져요.', '고른 문장 가운데 기록에 나오지 않는 것(좋아하는 것, 집)을 말한 문장이 있는지 살펴봐요.', '둘째 날이 더 많다는 것과 첫날 3마리라는 것만 기록에 있어요.'],
                predict: { q: '이 기록으로 개미 집이 깊은지 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '알게 된 것은 기록에 있는 것으로만 말해요. 모르는 것은 더 알고 싶은 것으로 남겨요.' },
              { prompt: '내 관찰 기록장에서 알게 된 것 한 가지를 찾아 별표를 하고 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 말한 것 가운데 기록에서 찾은 것이 무엇이었나요?" 두세 명이 짝의 이야기를 다시 말한다. 출구 첫 문항을 틀린 학생에게는 칸 이름을 소리 내어 읽게 한다. 다음 시간에는 내 생물이 사람과 어떻게 이어져 있는지 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['궁금했던 것', '살펴본 방법', '알게 된 것'], cards: [{ id: 'q', text: '참새는 언제 운동장에 올까?', motif: 'cloud' }, { id: 'how', text: '사흘 동안 아침과 점심에 세어 봤어요', motif: 'star' }, { id: 'know', text: '아침에 더 많이 와요', motif: 'sun' }] }, prompt: '참새 관찰 이야기를 차례대로 놓아 보세요.', target: { order: ['q', 'how', 'know'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"달팽이 상추가 날마다 줄었어요" 기록으로 알 수 있는 것은 무엇인가요?', options: ['달팽이는 상추를 먹어요', '달팽이는 10년을 살아요', '달팽이는 노래를 좋아해요'], answer: 0, difficulty: 0.1, explain: '상추가 줄어든 기록에서 달팽이가 상추를 먹는다는 것을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '알아낸 것 정리하기',
      items: [
        { type: 'table', prompt: '내 관찰을 차례대로 정리해 쓰세요.', columns: ['칸', '쓸 내용'], cells: [['궁금했던 것', ''], ['살펴본 방법', ''], ['알게 된 것', ''], ['더 알고 싶은 것', '']] },
        { type: 'choice', prompt: '발표할 때 맨 먼저 말할 것에 ○ 하세요.', options: ['알게 된 것', '궁금했던 것', '더 알고 싶은 것'], answer: '궁금했던 것' },
        { type: 'short', prompt: '내 기록에서 찾은, 알게 된 것 한 가지를 쓰세요.' },
        { type: 'draw', prompt: '알게 된 것을 그림으로 그리세요.' },
      ],
      easy: {
        note: '궁금했던 것 → 살펴본 방법 → 알게 된 것 차례예요.',
        items: [
          { type: 'choice', prompt: '맨 먼저 말할 것에 ○ 하세요.', options: ['궁금했던 것', '알게 된 것'], answer: '궁금했던 것' },
          { type: 'short', prompt: '내가 알게 된 것 한 가지를 쓰세요.' },
          { type: 'draw', prompt: '알게 된 것을 그림으로 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '칸이 세 개로 줄어요. 맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '네 칸 이야기를 차례대로 놓고, 기록으로 말할 수 있는 것을 골라요.',
      challenge: '기록과 상관없는 카드가 섞여 있어 남겨 두어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 알게 된 것을 맨 앞에 말한다 → "살펴보기 전에 알 수 있었을까요?"라고 묻는다. ② 기록에 없는 것을 알게 된 것처럼 말한다 → "기록 어디에 있나요?" 하고 짚게 하고, 없으면 \'더 알고 싶은 것\'으로 옮긴다. ③ 기록장이 빈 학생 → 모둠 기록이나 24·25차시 예시 기록을 쓰게 한다.',
  }));

  lessons.push(L(29, {
    title: '내 생물이 사람과 이어진 곳 찾기',
    objective: '둘레의 생물이 사람에게 주는 도움과 사람이 생물에게 주는 영향을 짝 짓고, 생물과 사람이 이어져 있음을 한 문장으로 말할 수 있다.',
    illustration: ART('paper strings connecting a bee, an earthworm, a tree and a sparrow to a child holding an apple, a flower pot and a notebook', '모두 이어져 있어요', [
      { motif: 'tree', x: 400, y: 212 }, { motif: 'flower', x: 120, y: 226 }, { motif: 'bird', x: 330, y: 96 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"서아는 \'달팽이는 나랑 아무 상관 없어\'라고 말했어요. 정말 그럴까요?" 털실 한 가닥으로 달팽이 그림과 사람 그림을 칠판에서 잇고 "달팽이 똥과 죽은 몸은 흙을 기름지게 해서 채소를 키워요"라고 말해 준다. 시연 단추로 벌 옆에 \'사과가 열리게 도와요\' 카드가 놓이는 모습을 보여 준다.',
        student: '내가 관찰한 생물과 사람 사이에 어떤 실을 이을 수 있을지 생각해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '생물이 주는 도움', slots: [{ id: 's1', label: '벌' }], cards: ['사과가 열리게 도와요', '그네를 밀어 줘요'], shuffle: false }, sequence: [{ match: { s1: '사과가 열리게 도와요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 생물과 사람 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 생물이 없으면 사람에게 무엇이 없어질까요?" 생물마다 사람에게 주는 것을 떠올리게 한다. 사람이 생물에게 주는 영향(쓰레기, 화분 돌보기)도 이어져 있다는 것을 마지막 문항에서 짚는다.',
            task: '생물 옆에 그 생물이 사람에게 주는 도움 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생물마다 사람에게 주는 도움을 이어 보세요.', toolOptions: { mode: 'match', topic: '생물이 주는 도움', slots: [{ id: 's1', label: '벌', motif: 'flower' }, { id: 's2', label: '지렁이' }, { id: 's3', label: '나무', motif: 'tree' }], cards: ['꽃가루를 날라 열매가 열려요', '흙을 부드럽고 기름지게 해요', '여름에 시원한 그늘을 줘요'] },
                target: { match: { s1: '꽃가루를 날라 열매가 열려요', s2: '흙을 부드럽고 기름지게 해요', s3: '여름에 시원한 그늘을 줘요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['꽃가루를 날라 열매가 열려요', '흙을 부드럽고 기름지게 해요', '여름에 시원한 그늘을 줘요', '숙제를 대신 해 줘요'] } } } },
              { prompt: '이 생물들이 사람에게 주는 도움을 이어 보세요.', toolOptions: { mode: 'match', topic: '생물이 주는 도움', slots: [{ id: 's1', label: '무당벌레' }, { id: 's2', label: '누에' }, { id: 's3', label: '참새', motif: 'bird' }], cards: ['채소의 진딧물을 먹어 줘요', '고치에서 비단실을 얻어요', '논밭의 벌레를 잡아먹어요'] },
                target: { match: { s1: '채소의 진딧물을 먹어 줘요', s2: '고치에서 비단실을 얻어요', s3: '논밭의 벌레를 잡아먹어요' } }, difficulty: 0.25,
                hints: ['생물마다 무엇을 먹거나 무엇을 만드는지 떠올려 봐요. 그것이 사람에게 어떤 쓸모가 있을지 생각해요.', '어긋난 짝을 짚어 보세요. 실을 만드는 생물은 하나뿐이에요.', '무당벌레는 진딧물, 누에는 비단실, 참새는 논밭 벌레예요.'] },
              { prompt: '사람이 한 일이 생물에게 어떤 일로 이어지는지 이어 보세요.', toolOptions: { mode: 'match', topic: '사람이 생물에게', slots: [{ id: 's1', label: '화단에 과자 봉지를 버려요' }, { id: 's2', label: '화분에 알맞게 물을 줘요' }, { id: 's3', label: '꽃밭에 약을 많이 뿌려요' }], cards: ['흙 속 생물이 살기 어려워요', '식물이 싱싱하게 자라요', '꿀을 먹던 벌이 다쳐요'] },
                target: { match: { s1: '흙 속 생물이 살기 어려워요', s2: '식물이 싱싱하게 자라요', s3: '꿀을 먹던 벌이 다쳐요' } }, difficulty: 0.2,
                predict: { q: '사람이 하는 일이 생물에게도 영향을 줄까요?', options: ['영향을 줘요', '아무 상관 없어요'], answer: 0 },
                conclude: '생물은 사람을 돕고, 사람이 한 일은 생물에게 돌아가요. 사람과 생물은 이어져 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. "상관없어"에 답하기', minutes: 13, tool: 'emotion',
            teacher: '"친구가 \'벌레는 나랑 상관없어\'라고 말하면 뭐라고 답해 줄까요?" 보기를 고른 뒤 까닭을 한 문장으로 말하게 한다. 친구를 탓하지 않고 내가 관찰에서 알게 된 것을 알려 주는 말이 좋다는 것을 짚는다. 끝에는 털실로 칠판에 내 생물과 사람을 잇는다.',
            task: '이야기를 읽고 알맞은 말이나 행동을 골라 결과를 봐요. 그리고 털실로 내 생물과 사람을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 지렁이는 사람과 상관없다고 해요. 어떤 말을 해 줄까요?', toolOptions: { mode: 'branch', who: '서아', situation: '하준이가 "지렁이는 징그럽고 사람이랑 상관없어"라고 말했어요.', choices: [
                { id: 'tell', text: '"지렁이가 흙을 기름지게 해서 채소가 잘 자라" 하고 알려 줘요', result: '하준이가 "그럼 지렁이가 채소를 키우는 거네" 하고 놀라요.', mood: '뿌듯함' },
                { id: 'agree', text: '"맞아, 지렁이는 없어도 돼" 하고 말해요', result: '둘 다 지렁이가 하는 일을 모른 채로 있어요.', mood: '걱정', why: '지렁이가 사라지면 텃밭 흙에 생기는 일을 떠올려 봐요.' },
                { id: 'scare', text: '지렁이를 들어 하준이를 놀래 줘요', result: '하준이가 지렁이를 더 싫어하고, 지렁이도 다쳐요.', mood: '속상함', why: '놀래 주면 지렁이에 대해 알려 줄 수 없어요.' }] }, target: { choice: 'tell' }, difficulty: 0.1 },
              { prompt: '친구가 그늘을 주는 나뭇가지를 꺾으려 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '더운 날 준호가 운동장 나무 그늘에서 쉬고 있어요. 친구가 나뭇가지를 꺾으려 해요.', choices: [
                { id: 'break', text: '나도 같이 가지를 꺾어요', result: '나무가 다치고 그늘이 줄어요.', mood: '걱정', why: '꺾인 가지만큼 그늘도 줄어들어요.' },
                { id: 'say', text: '"이 나무 덕분에 시원해. 꺾지 말자" 하고 말해요', result: '친구가 손을 내리고 함께 그늘에서 쉬어요.', mood: '편안함' },
                { id: 'leave', text: '못 본 척하고 다른 곳으로 가요', result: '가지가 꺾여 나무가 다쳐요.', mood: '속상함', why: '나무가 주는 그늘은 우리 모두가 함께 써요.' }] }, target: { choice: 'say' }, difficulty: 0.15 },
              { prompt: '털실로 칠판의 내 생물 그림과 사람 그림을 잇고, 이어진 까닭을 한 문장으로 말해요. 다 하면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"칠판에 털실이 몇 가닥이나 이어졌나요? 이어지지 않은 생물이 있나요?" 털실이 얽힌 칠판을 함께 본다. 출구 첫 문항을 틀린 학생에게는 "이 생물이 없으면 무엇이 없어질까요?"라고 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '생물이 주는 도움', slots: [{ id: 'e1', label: '젖소' }, { id: 'e2', label: '꿀벌' }], cards: ['우유를 얻어요', '꿀을 얻어요'] }, prompt: '생물과 사람이 얻는 것을 이어 보세요.', target: { match: { e1: '우유를 얻어요', e2: '꿀을 얻어요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"사람과 다른 생물은 상관없다"는 말은 맞을까요?', options: ['맞아요', '아니에요, 서로 이어져 있어요'], answer: 1, difficulty: 0.1, explain: '생물은 사람에게 먹을거리와 그늘을 주고, 사람이 한 일은 생물에게 돌아가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '생물과 사람 잇기',
      items: [
        { type: 'table', prompt: '생물이 사람에게 주는 도움을 쓰세요.', columns: ['생물', '사람에게 주는 도움'], cells: [['벌', ''], ['지렁이', ''], ['내가 관찰한 생물', '']] },
        { type: 'choice', prompt: '진딧물을 먹어 채소를 지켜 주는 생물에 ○ 하세요.', options: ['무당벌레', '개미', '나비'], answer: '무당벌레' },
        { type: 'short', prompt: '사람이 한 일이 생물에게 돌아간 예를 한 가지 쓰세요.' },
        { type: 'draw', prompt: '내 생물과 사람을 선으로 잇고 이어진 까닭을 그리세요.' },
      ],
      easy: {
        note: '"이 생물이 없으면 무엇이 없어질까?"를 떠올려요.',
        items: [
          { type: 'choice', prompt: '꿀을 주는 생물에 ○ 하세요.', options: ['꿀벌', '참새'], answer: '꿀벌' },
          { type: 'choice', prompt: '그늘을 주는 생물에 ○ 하세요.', options: ['나무', '지렁이'], answer: '나무' },
          { type: 'draw', prompt: '내 생물과 사람을 선으로 이어 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 말의 결과를 소리 내어 읽어요.',
      challenge: '생물이 할 수 없는 일을 쓴 카드가 섞여 있어 남겨 두어야 해요. 털실을 이은 까닭을 두 문장으로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사람과 생물은 상관없다고 여긴다(이 차시의 핵심 오개념) → "이 생물이 없으면 우리 밥상에서 무엇이 없어질까요?"라고 묻는다. ② 사람에게 쓸모 있는 생물만 소중하다고 여긴다 → 쓸모가 바로 보이지 않아도 다른 생물의 먹이가 되어 이어져 있다고 30차시에서 다룬다. ③ 누에·젖소를 모른다 → 사진을 보여 준다. 털실은 미리 30cm 정도로 잘라 둔다.',
  }));

  lessons.push(L(30, {
    title: '누가 누구를 먹는지 먹이 차례 놓기',
    objective: '둘레의 생물이 무엇을 먹는지 알아보고, 먹고 먹히는 차례를 놓아 한 생물이 사라지면 생기는 일을 말할 수 있다.',
    illustration: ART('a paper chain of cabbage leaf, caterpillar and sparrow linked by arrows, beside a second chain of grass, grasshopper and frog near a pond', '누가 누구를 먹을까요?', [
      { motif: 'leaf', x: 110, y: 228 }, { motif: 'bird', x: 360, y: 96 }, { motif: 'wave', x: 380, y: 236 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"24차시에 달팽이가 상추를 먹었지요. 그럼 달팽이는 누가 먹을까요?" 새나 두꺼비라는 대답이 나오면 칠판에 \'상추 → 달팽이 → 두꺼비\'를 화살표로 쓴다. "화살표는 \'누구에게 먹이가 돼요\'라는 뜻이에요." 시연 단추로 먹이 차례 카드가 놓이는 모습을 보여 준다.',
        student: '내가 관찰한 생물이 무엇을 먹는지 떠올려 봐요.',
        demo: { tool: 'lifecycle', options: { center: '누가 누구를 먹을까', cycle: false, cards: [c('상추', 'leaf'), '달팽이', '두꺼비'], shuffle: false }, sequence: [{ order: ['상추', '달팽이', '두꺼비'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 무엇을 먹을까', minutes: 12, tool: 'mindmap',
            teacher: '"이 생물은 풀이나 잎을 먹나요, 다른 동물을 먹나요?" 23~27차시 관찰과 책에서 알아본 것을 떠올리게 한다. 두 가지를 다 먹는 생물도 있지만 오늘 카드에는 한 가지만 먹는 생물을 골랐다고 알려 준다.',
            task: '생물 카드를 식물을 먹는 생물과 다른 동물을 먹는 생물로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생물을 무엇을 먹는지에 따라 나누어 보세요.', toolOptions: { topic: '무엇을 먹을까?', slots: ['식물을 먹어요', '다른 동물을 먹어요'], cards: ['배추흰나비 애벌레', '메뚜기', '거미', '개구리'] },
                target: { sort: { '식물을 먹어요': ['배추흰나비 애벌레', '메뚜기'], '다른 동물을 먹어요': ['거미', '개구리'] } }, difficulty: 0.2,
                hints: ['생물마다 그 생물이 먹는 것을 떠올려요. 잎을 갉는지, 벌레를 잡는지 생각해요.', '어긋난 카드를 짚어 보세요. 거미줄에는 무엇이 걸리는지 떠올려요.', '애벌레와 메뚜기는 잎을 먹고, 거미와 개구리는 벌레를 잡아먹어요.'] },
              { prompt: '이 생물들도 무엇을 먹는지에 따라 나누어 보세요.', toolOptions: { topic: '무엇을 먹을까?', slots: ['식물을 먹어요', '다른 동물을 먹어요'], cards: ['달팽이', '토끼', '무당벌레', '사마귀'] },
                target: { sort: { '식물을 먹어요': ['달팽이', '토끼'], '다른 동물을 먹어요': ['무당벌레', '사마귀'] } }, difficulty: 0.2,
                hints: ['생물마다 상추나 풀을 먹는지, 다른 벌레를 잡아먹는지 생각해요.', '어긋난 카드를 짚어 보세요. 무당벌레가 상추에서 무엇을 먹었는지 떠올려요.', '달팽이와 토끼는 잎과 풀, 무당벌레는 진딧물, 사마귀는 벌레를 먹어요.'],
                levels: { easy: { prompt: '이 생물들도 무엇을 먹는지에 따라 나누어 보세요. 카드가 두 장이에요.', toolOptions: { cards: ['토끼', '사마귀'] }, target: { sort: { '식물을 먹어요': ['토끼'], '다른 동물을 먹어요': ['사마귀'] } } } } },
              { prompt: '식물을 먹는 생물만 골라 보세요.', toolOptions: { mode: 'pick', topic: '식물을 먹어요', cards: ['메뚜기', '토끼', '거미', '개구리', '뱀'] },
                target: { pick: ['메뚜기', '토끼'] }, difficulty: 0.2,
                hints: ['생물마다 잎이나 풀을 먹는지 하나씩 따져요.', '고른 생물 가운데 벌레나 작은 동물을 잡아먹는 생물이 있는지 살펴봐요.', '메뚜기와 토끼만 풀과 잎을 먹어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 먹이 차례 놓기', minutes: 15, tool: 'lifecycle',
            teacher: '"맨 처음에는 무엇이 와야 할까요? 다른 것을 먹지 않고 햇빛으로 자라는 것은 무엇일까요?" 언제나 식물이 맨 앞에 온다는 것을 짚는다. 차례를 놓은 뒤 \'메뚜기가 모두 사라지면 개구리는 어떻게 될까?\'를 짝과 이야기하게 한다. 이 판은 처음으로 돌아가지 않는다.',
            task: '먹이가 되는 차례대로 카드를 놓아요. 맨 앞에는 먹히기만 하는 것이 와요.',
            levels: CARD_LV,
            items: [
              { prompt: '배추밭의 먹이 차례대로 카드를 놓아 보세요.', toolOptions: { center: '배추밭 먹이 차례', cycle: false, cards: [c('배춧잎', 'leaf'), c('애벌레', 'larva'), c('참새', 'bird')] },
                target: { order: ['배춧잎', '애벌레', '참새'] }, difficulty: 0.15,
                hints: ['다른 생물을 먹지 않고 햇빛으로 자라는 것을 찾아 맨 앞에 놓아요.', '어긋난 자리를 짚어 보세요. 참새가 애벌레를 먹을까요, 애벌레가 참새를 먹을까요?', '배춧잎 → 애벌레 → 참새 차례예요.'] },
              { prompt: '풀밭의 먹이 차례대로 카드를 놓아 보세요.', toolOptions: { center: '풀밭 먹이 차례', cycle: false, cards: [c('풀', 'leaf'), '메뚜기', c('개구리', 'frog'), '뱀'] },
                target: { order: ['풀', '메뚜기', '개구리', '뱀'] }, difficulty: 0.25,
                hints: ['햇빛으로 자라는 것을 맨 앞에 놓고, 그것을 먹는 생물을 다음에 놓아요.', '어긋난 자리를 짚어 보세요. 몸이 작은 생물이 더 큰 생물의 먹이가 되는 경우가 많아요.', '풀 → 메뚜기 → 개구리 → 뱀 차례예요.'],
                predict: { q: '메뚜기가 모두 사라지면 개구리는 어떻게 될까요?', options: ['먹이가 줄어 힘들어요', '아무 일도 없어요'], answer: 0 },
                conclude: '한 생물이 사라지면 그 생물을 먹던 생물도 살기 어려워져요.',
                levels: { easy: { prompt: '풀밭의 먹이 차례대로 카드를 놓아 보세요. 카드가 세 장이에요.', toolOptions: { cards: [c('풀', 'leaf'), '메뚜기', c('개구리', 'frog')] }, target: { order: ['풀', '메뚜기', '개구리'] } } } },
              { prompt: '꽃밭의 먹이 차례대로 카드를 놓아 보세요. 이 꽃밭에 없는 생물 카드는 남겨요.', toolOptions: { center: '꽃밭 먹이 차례', cycle: false, slots: 3, cards: [c('장미 잎', 'leaf'), '진딧물', '무당벌레', '고래'] },
                target: { order: ['장미 잎', '진딧물', '무당벌레'] }, difficulty: 0.25,
                hints: ['꽃밭에 사는 생물인지 먼저 따지고, 햇빛으로 자라는 것을 맨 앞에 놓아요.', '어긋난 자리를 짚어 보세요. 진딧물은 잎의 즙을 먹고, 무당벌레는 진딧물을 먹어요.', '장미 잎 → 진딧물 → 무당벌레 차례이고, 고래는 바다에 살아요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"29차시에 칠판에 이은 털실 옆에 오늘 먹이 차례도 이어 볼까요?" 학생 두세 명이 칠판에 먹이 화살표를 덧붙인다. 출구 첫 문항을 틀린 학생에게는 "누가 누구를 먹나요?"를 카드마다 소리 내어 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'lifecycle', options: { center: '논 먹이 차례', cycle: false, cards: [c('벼', 'leaf'), '메뚜기', c('참새', 'bird')] }, prompt: '논의 먹이 차례대로 카드를 놓아 보세요.', target: { order: ['벼', '메뚜기', '참새'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '먹이 차례에서 늘 맨 앞에 오는 것은 무엇일까요?', options: ['식물', '가장 큰 동물', '사람'], answer: 0, difficulty: 0.15, explain: '식물은 다른 생물을 먹지 않고 햇빛으로 자라서 맨 앞에 와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '먹이 차례',
      items: [
        { type: 'figure', wide: true, prompt: '먹이 차례를 생각하며 빈 자리에 생물 이름을 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '풀밭 먹이 차례', cycle: false, printCards: false, cards: ['풀', '메뚜기', '개구리'] }, state: { at: { 풀: 0 } }, caption: '' }], answer: '풀 → 메뚜기 → 개구리' },
        { type: 'choice', prompt: '다른 동물을 먹는 생물에 ○ 하세요.', options: ['토끼', '거미', '메뚜기'], answer: '거미' },
        { type: 'short', prompt: '메뚜기가 모두 사라지면 개구리에게 어떤 일이 생길지 쓰세요.' },
        { type: 'draw', prompt: '내가 관찰한 생물이 들어간 먹이 차례를 화살표로 그리세요.' },
      ],
      easy: {
        note: '햇빛으로 자라는 식물이 맨 앞이에요.',
        items: [
          { type: 'choice', prompt: '맨 앞에 오는 것에 ○ 하세요.', options: ['배춧잎', '참새'], answer: '배춧잎' },
          { type: 'choice', prompt: '애벌레를 먹는 생물에 ○ 하세요.', options: ['참새', '배춧잎'], answer: '참새' },
          { type: 'draw', prompt: '배춧잎 → 애벌레 → 참새를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 줄어요. 맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 막히면 힌트를 한 단계씩 열어요.',
      challenge: '먹이 차례에 들어가지 않는 생물 카드가 섞여 있어 남겨 두어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 화살표를 \'먹는다\' 쪽으로 거꾸로 놓는다 → "누구에게 먹이가 되나요?"라고 묻는다. ② 큰 동물이 맨 앞에 와야 한다고 여긴다 → 햇빛으로 자라는 식물이 늘 맨 앞이라는 것을 짚는다. ③ 먹히는 생물을 불쌍하게만 여긴다 → 서로 먹고 먹히며 수가 알맞게 지켜진다고 짧게 말한다. 생명 주기 판을 먹이 차례에 빌려 써서 힌트는 손으로 썼다.',
  }));

  lessons.push(L(31, {
    title: '내 생물 소개 카드 만들어 발표하기',
    objective: '내가 관찰한 생물이 사는 곳, 먹이, 사람과 이어진 점을 넣어 소개 카드를 만들고 친구들 앞에서 발표할 수 있다.',
    illustration: ART('a child holding up a paper introduction card with a drawing of a snail, speaking to classmates sitting in a circle', '내 생물을 소개해요', [
      { motif: 'leaf', x: 120, y: 228 }, { motif: 'flower', x: 400, y: 226 }, { motif: 'star', x: 340, y: 96, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"생물 소개 카드에 무엇이 들어가면 친구가 그 생물을 잘 알 수 있을까요?" 이름, 사는 곳, 먹이, 사람과 이어진 점을 칠판에 쓴다. "\'귀여워요\'만 쓰면 친구가 그 생물이 어떻게 사는지 알 수 있을까요?" 시연 단추로 소개 말풍선 빈칸에 카드가 들어가는 모습을 보여 준다.',
        student: '내 생물을 한 문장으로 소개하면 무엇이라고 말할지 생각해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['화분 받침 밑', '귀여운 옷'], slots: [{ id: 'b1', who: '민지', motif: 'leaf', label: '달팽이는 ___에 살아요.' }], shuffle: false }, sequence: [{ fill: { b1: '화분 받침 밑' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 소개 말 완성하기', minutes: 12, tool: 'story',
            teacher: '"말풍선을 처음부터 소리 내어 읽어 보세요. 빈칸에 넣은 말이 우리가 관찰한 것과 같나요?" 사는 곳 칸에는 곳, 먹이 칸에는 먹는 것이 들어가야 한다는 것을 짚는다. 마지막 칸 \'사람과 이어진 점\'은 29차시 털실을 떠올리게 한다.',
            task: '생물 소개 말풍선의 빈칸에 알맞은 카드를 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '달팽이 소개 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['축축한 화분 밑', '상추', '밤하늘'], slots: [{ id: 'b1', who: '민지', motif: 'leaf', label: '달팽이는 ___에 살아요.' }, { id: 'b2', who: '민지', motif: 'leaf', label: '달팽이는 ___ 잎을 갉아 먹어요.' }] },
                target: { fill: { b1: '축축한 화분 밑', b2: '상추' } }, difficulty: 0.1 },
              { prompt: '지렁이 소개 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['흙 속', '썩은 잎', '흙을 기름지게'], slots: [{ id: 'b1', who: '준호', motif: 'flower', label: '지렁이는 ___에 살아요.' }, { id: 'b2', who: '준호', motif: 'flower', label: '지렁이는 ___을 먹어요.' }, { id: 'b3', who: '준호', motif: 'flower', label: '지렁이는 ___ 해서 채소를 도와요.' }] },
                target: { fill: { b1: '흙 속', b2: '썩은 잎', b3: '흙을 기름지게' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['흙 속', '썩은 잎', '흙을 기름지게', '나무 꼭대기', '사탕'] } } } },
              { prompt: '무당벌레 소개 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['풀잎과 꽃밭', '진딧물', '채소를 지켜'], slots: [{ id: 'b1', who: '서아', motif: 'flower', label: '무당벌레는 ___에 살아요.' }, { id: 'b2', who: '서아', motif: 'flower', label: '무당벌레는 ___을 잡아먹어요.' }, { id: 'b3', who: '서아', motif: 'flower', label: '그래서 무당벌레는 ___ 줘요.' }] },
                target: { fill: { b1: '풀잎과 꽃밭', b2: '진딧물', b3: '채소를 지켜' } }, difficulty: 0.2,
                conclude: '사는 곳, 먹이, 사람과 이어진 점을 넣으면 듣는 친구가 그 생물을 잘 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소개 카드 만들어 발표하기', minutes: 16, tool: 'kitchen',
            teacher: '"발표하기 전에 내 카드에 빠진 것이 없는지 표시해 보세요." 점검표를 고른 뒤 도화지 반쪽에 소개 카드를 만든다(6분). 모둠 안에서 한 사람씩 1분 동안 카드를 들고 발표한다. "카드를 보며 읽지 말고, 친구 얼굴을 보며 말해요."',
            task: '소개 카드에 넣을 것을 표시하고, 카드를 만들어 모둠 친구들에게 발표해요.',
            levels: CARD_LV,
            items: [
              { prompt: '생물 소개 카드에 넣을 것만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '소개 카드 점검표', items: [{ id: 'name', text: '생물 이름' }, { id: 'home', text: '사는 곳' }, { id: 'food', text: '먹이' }, { id: 'link', text: '사람과 이어진 점' }, { id: 'toy', text: '내가 좋아하는 장난감' }] },
                target: { checklist: ['name', 'home', 'food', 'link'] }, difficulty: 0.1,
                hints: ['항목마다 듣는 친구가 그 생물을 아는 데 쓰이는지 따져요.', '표시한 것 가운데 생물이 아니라 나에 대한 것이 있는지 살펴봐요.', '이름, 사는 곳, 먹이, 사람과 이어진 점을 표시하고 장난감은 빼요.'] },
              { prompt: '발표할 때 지킬 것만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '발표 약속', items: [{ id: 'eye', text: '친구 얼굴을 보며 말해요' }, { id: 'loud', text: '뒤에 앉은 친구도 들리게 말해요' }, { id: 'card', text: '카드를 들어 그림을 보여 줘요' }, { id: 'fast', text: '빨리 끝내려고 아주 빠르게 말해요' }] },
                target: { checklist: ['eye', 'loud', 'card'] }, difficulty: 0.15,
                hints: ['항목마다 듣는 친구가 잘 알아듣는 데 도움이 되는지 따져요.', '표시한 것 가운데 듣는 친구가 놓치게 만드는 것이 있는지 살펴봐요.', '얼굴 보기, 들리게 말하기, 그림 보여 주기를 표시하고 빠르게 말하기는 빼요.'] },
              { prompt: '소개 카드를 만들고 모둠 친구들 앞에서 1분 동안 발표해요. 다 하면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 친구 발표에서 처음 알게 된 생물 이야기가 있나요?" 두세 명이 말한다. 출구 첫 문항을 틀린 학생에게는 말풍선을 처음부터 소리 내어 읽게 한다. 소개 카드는 다음 시간 발표 나눔에 다시 쓰니 모아 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['나무 위 둥지', '벌레와 씨앗'], slots: [{ id: 'b1', who: '하준', motif: 'bird', label: '참새는 ___에 살아요.' }, { id: 'b2', who: '하준', motif: 'bird', label: '참새는 ___을 먹어요.' }] }, prompt: '참새 소개 말의 빈칸을 채워 보세요.', target: { fill: { b1: '나무 위 둥지', b2: '벌레와 씨앗' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '생물 소개 카드에 꼭 넣을 것은 무엇일까요?', options: ['사는 곳과 먹이', '좋아하는 색', '오늘 날짜만'], answer: 0, difficulty: 0.1, explain: '사는 곳과 먹이를 알려 주면 듣는 친구가 그 생물이 어떻게 사는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 생물 소개 카드',
      items: [
        { type: 'table', prompt: '내 생물 소개 카드를 채우세요.', columns: ['칸', '쓸 내용'], cells: [['생물 이름', ''], ['사는 곳', ''], ['먹이', ''], ['사람과 이어진 점', '']] },
        { type: 'draw', prompt: '내 생물을 크게 그리세요.' },
        { type: 'choice', prompt: '발표할 때 알맞은 모습에 ○ 하세요.', options: ['친구 얼굴을 보며 말해요', '카드 뒤에 얼굴을 숨겨요', '아주 작게 말해요'], answer: '친구 얼굴을 보며 말해요' },
        { type: 'short', prompt: '친구 발표에서 새로 알게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '사는 곳, 먹이를 꼭 써요.',
        items: [
          { type: 'short', prompt: '내 생물의 이름과 사는 곳을 쓰세요.' },
          { type: 'short', prompt: '내 생물이 먹는 것을 쓰세요.' },
          { type: 'draw', prompt: '내 생물을 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 빈칸에 넣으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 소개 카드는 이름·사는 곳·먹이 세 칸만 채워요.',
      base: '빈칸을 채우고, 네 칸 소개 카드를 만들어 발표해요.',
      challenge: '빈칸에 맞지 않는 카드가 섞여 있어요. 발표 끝에 \'더 알고 싶은 것\'도 한 가지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소개에 느낌만 쓴다 → 점검표의 네 칸을 하나씩 짚게 한다. ② 발표를 부끄러워한다 → 짝에게 먼저 말해 보고 모둠 앞에서 하게 하거나, 카드를 함께 들어 줄 짝을 정해 준다. ③ 사람과 이어진 점이 떠오르지 않는다 → 29차시 털실 칠판을 다시 보게 한다. 도화지는 반으로 잘라 미리 나누어 둔다.',
  }));

  lessons.push(L(32, {
    title: '친구 발표 듣고 칭찬과 질문 나누기',
    objective: '친구의 생물 발표를 듣고 고마운 점을 칭찬하며, 더 알고 싶은 것을 질문으로 말할 수 있다.',
    illustration: ART('children sitting in a circle raising hands, paper speech bubbles with a heart and a question mark floating above them, introduction cards on the floor', '듣고 묻고 칭찬해요', [
      { motif: 'heart', x: 140, y: 100, s: 0.6 }, { motif: 'flower', x: 400, y: 226 }, { motif: 'leaf', x: 110, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"친구 발표가 끝났을 때 \'그게 다야?\' 하고 말하면 친구 마음은 어떨까요?" 칭찬은 \'좋았어\'보다 무엇이 좋았는지 콕 집어 말하는 것이라고 알려 준다. "질문은 친구를 놀리려는 것이 아니라 더 알고 싶어서 하는 말이에요." 시연 단추로 \'칭찬하는 말\' 칸에 카드가 놓이는 모습을 보여 준다.',
        student: '어제 친구 발표에서 좋았던 점을 한 가지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '발표를 듣고', slots: ['칭찬하는 말', '궁금한 것 묻는 말'], cards: ['그림이 커서 잘 보였어', '달팽이는 겨울에 어디 있어?'], shuffle: false }, sequence: [{ sort: { '칭찬하는 말': ['그림이 커서 잘 보였어'], '궁금한 것 묻는 말': ['달팽이는 겨울에 어디 있어?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 칭찬하는 말, 묻는 말', minutes: 11, tool: 'mindmap',
            teacher: '"이 말을 들은 친구는 기분이 좋을까요, 속상할까요? 그 말이 더 알고 싶어서 한 말인가요?" 칭찬·질문 칸에 놓지 않는 카드(놀리는 말, 힘 빠지게 하는 말)는 남겨 둔다는 것을 알려 준다.',
            task: '발표를 듣고 한 말 카드를 칭찬하는 말과 궁금한 것 묻는 말로 나누어요. 친구를 속상하게 하는 말은 남겨요.',
            levels: CARD_LV,
            items: [
              { prompt: '발표를 듣고 한 말을 나누어 보세요.', toolOptions: { topic: '발표를 듣고', slots: ['칭찬하는 말', '궁금한 것 묻는 말'], cards: ['먹이를 자세히 알려 줘서 고마워', '지렁이는 눈이 있어?', '목소리가 또렷해서 잘 들렸어', '공벌레는 물속에서도 살아?'] },
                target: { sort: { '칭찬하는 말': ['먹이를 자세히 알려 줘서 고마워', '목소리가 또렷해서 잘 들렸어'], '궁금한 것 묻는 말': ['지렁이는 눈이 있어?', '공벌레는 물속에서도 살아?'] } }, difficulty: 0.1 },
              { prompt: '발표를 듣고 한 말을 나누어 보세요. 친구를 속상하게 하는 말은 남겨요.', toolOptions: { topic: '발표를 듣고', slots: ['칭찬하는 말', '궁금한 것 묻는 말'], cards: ['사흘 동안 기록한 게 대단해', '개미는 밤에도 일해?', '그림이 이상해', '그게 다야?'] },
                target: { sort: { '칭찬하는 말': ['사흘 동안 기록한 게 대단해'], '궁금한 것 묻는 말': ['개미는 밤에도 일해?'] } }, difficulty: 0.2,
                predict: { q: '"그게 다야?"를 들은 친구는 기분이 어떨까요?', options: ['기뻐요', '속상해요'], answer: 1 },
                conclude: '칭찬은 무엇이 좋았는지 콕 집어 말하고, 질문은 더 알고 싶은 것을 물어요.' },
              { prompt: '칭찬하는 말 가운데 무엇이 좋았는지 콕 집어 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '콕 집은 칭찬', cards: ['먹이 차례 그림이 한눈에 보였어', '날짜별로 쓴 기록이 자세했어', '좋았어', '잘했어'] },
                target: { pick: ['먹이 차례 그림이 한눈에 보였어', '날짜별로 쓴 기록이 자세했어'] }, difficulty: 0.2,
                hints: ['칭찬을 듣고 친구가 무엇이 좋았는지 알 수 있는지 하나씩 따져요.', '고른 말 가운데 무엇이 좋았는지 빠진 짧은 말이 있는지 살펴봐요.', '그림과 기록을 콕 집어 말한 두 칭찬이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발표 나눔 돌아가며 하기', minutes: 16, tool: 'emotion',
            teacher: '"질문을 받았는데 답을 모르면 어떻게 할까요?" 보기를 고른 뒤, 모르는 것은 \'더 알고 싶은 것\'으로 남겨도 된다는 것을 짚는다. 이어서 모둠마다 대표 한 명이 31차시 소개 카드로 반 전체 앞에서 발표하고, 듣는 친구는 칭찬 하나·질문 하나를 말한다(모둠당 2분).',
            task: '이야기를 읽고 알맞은 행동을 골라요. 그리고 친구 발표를 듣고 칭찬과 질문을 하나씩 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '질문을 받았는데 답을 몰라요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 달팽이를 발표했는데, 친구가 "달팽이는 몇 년 살아?" 하고 물었어요. 민지는 답을 몰라요.', choices: [
                { id: 'guess', text: '아무 숫자나 지어서 말해요', result: '친구들이 틀린 것을 맞는 줄 알아요.', mood: '걱정', why: '모르는 것을 지어 말하면 친구가 잘못 알게 돼요.' },
                { id: 'honest', text: '"아직 몰라. 더 알아보고 알려 줄게" 하고 말해요', result: '친구가 고개를 끄덕이고, 민지는 새로 알아볼 것이 생겨요.', mood: '뿌듯함' },
                { id: 'angry', text: '"그런 걸 왜 물어?" 하고 화를 내요', result: '친구가 다시는 질문하지 않아요.', mood: '속상함', why: '질문은 내 발표를 더 알고 싶어서 한 말이에요.' }] }, target: { choice: 'honest' }, difficulty: 0.1 },
              { prompt: '친구 발표가 끝났어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '준호가 지렁이 발표를 마쳤어요. 하준이는 지렁이가 징그러워서 듣기 싫었어요.', choices: [
                { id: 'yuck', text: '"으, 징그러워" 하고 말해요', result: '준호가 힘이 빠져 고개를 숙여요.', mood: '속상함', why: '친구가 사흘 동안 관찰한 것을 생각해 봐요.' },
                { id: 'praise', text: '"흙을 기름지게 하는 줄 몰랐어. 알려 줘서 고마워" 하고 말해요', result: '준호가 웃고, 하준이도 지렁이를 새로 알게 돼요.', mood: '고마움' },
                { id: 'none', text: '아무 말 없이 딴짓을 해요', result: '준호는 친구들이 들었는지 알 수 없어요.', mood: '걱정', why: '들은 사람이 한마디를 해 주면 발표한 친구가 힘을 얻어요.' }] }, target: { choice: 'praise' }, difficulty: 0.15 },
              { prompt: '모둠 대표 발표를 듣고 칭찬 하나, 질문 하나를 말해요. 다 하면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 받은 질문 가운데 아직 답을 모르는 것은 무엇이었나요?" 칠판 \'더 알고 싶은 것\' 칸에 붙임쪽지로 모은다. 17~32차시 생물 탐구를 마치며, 다음 시간부터는 지구가 걱정되는 일을 살펴본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '발표를 듣고', slots: ['칭찬하는 말', '궁금한 것 묻는 말'], cards: ['기록 그래프가 한눈에 보였어', '나비는 비 오는 날 어디 숨어?'] }, prompt: '발표를 듣고 한 말을 칭찬과 질문으로 나누어 보세요.', target: { sort: { '칭찬하는 말': ['기록 그래프가 한눈에 보였어'], '궁금한 것 묻는 말': ['나비는 비 오는 날 어디 숨어?'] } }, difficulty: 0.1 },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '사흘 동안 관찰한 내 생물을 친구들 앞에서 소개했어요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '아주 많이'], ask: '지금 뿌듯한 마음은 얼마나 될까요?' }, prompt: '내 생물을 소개한 뒤 뿌듯한 마음의 크기를 골라 보세요. 맞고 틀림이 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '칭찬과 질문',
      items: [
        { type: 'table', prompt: '친구 발표를 듣고 칭찬과 질문을 쓰세요.', columns: ['발표한 친구', '칭찬하는 말', '궁금한 것 묻는 말'], rows: 2 },
        { type: 'choice', prompt: '무엇이 좋았는지 콕 집은 칭찬에 ○ 하세요.', options: ['좋았어', '먹이 그림이 자세했어', '잘했어'], answer: '먹이 그림이 자세했어' },
        { type: 'short', prompt: '내가 받은 질문 가운데 더 알아보고 싶은 것을 쓰세요.' },
        { type: 'short', prompt: '친구 발표에서 새로 알게 된 생물 이야기를 쓰세요.' },
      ],
      easy: {
        note: '칭찬은 무엇이 좋았는지 말해요. 질문은 "~해?"로 끝나요.',
        items: [
          { type: 'choice', prompt: '궁금한 것 묻는 말에 ○ 하세요.', options: ['지렁이는 눈이 있어?', '그림이 예뻐'], answer: '지렁이는 눈이 있어?' },
          { type: 'short', prompt: '친구 발표에서 좋았던 점을 쓰세요.' },
          { type: 'draw', prompt: '친구가 소개한 생물을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 칭찬 하나만 말해도 돼요.',
      base: '모두 놓은 뒤 확인을 눌러요. 칭찬 하나·질문 하나를 말해요.',
      challenge: '친구를 속상하게 하는 말이 섞여 있어 남겨 두어야 해요. 질문을 받으면 답하거나 \'더 알아볼 것\'으로 정리해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 칭찬이 "좋았어"로 끝난다 → "무엇이 좋았나요?"라고 한 번 더 묻는다. ② 질문을 공격으로 받아들인다 → 질문은 더 알고 싶어서 하는 말이라고 짚고, 답을 몰라도 괜찮다고 말해 준다. ③ 생물을 징그럽다고 말하는 학생 → 그 마음은 인정하되 발표한 친구의 노력을 칭찬하는 말로 바꾸게 한다. 출구의 마음 크기 문항은 맞고 틀림이 없다.',
  }));

  // ───────────────────────── 33~38차시: 걱정되는 일을 물음으로(지속가능성 문제 찾기) ─────────────────────────

  lessons.push(L(33, {
    title: '우리 둘레에서 걱정되는 일 찾아 그리기',
    objective: '학교와 집 둘레에서 걱정되는 일을 쓰레기·물·공기로 나누고, 걱정되는 장면을 색종이 조각으로 꾸밀 수 있다.',
    illustration: ART('a paper-cut riverside with a few plastic bottles floating, a smoky chimney in the distance and a child pointing with a worried face', '무엇이 걱정될까요?', [
      { motif: 'wave', x: 120, y: 236 }, { motif: 'cloud', x: 360, y: 96, color: 'cream' }, { motif: 'tree', x: 410, y: 212 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"등굣길이나 놀이터에서 \'이건 좀 걱정돼\' 하고 느낀 적이 있나요?" 두세 명의 이야기를 칠판에 적는다. "쓰레기, 물, 공기처럼 우리가 함께 쓰는 것이 아파하는 일을 찾아봐요." 시연 단추로 걱정 카드가 쓰레기·물·공기 칸에 나뉘어 놓이는 모습을 보여 준다.',
        student: '등굣길이나 놀이터에서 걱정되었던 장면을 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '무엇이 걱정될까?', slots: ['쓰레기', '물', '공기'], cards: ['놀이터에 과자 봉지가 많아요', '개울물이 뿌옇게 흐려요', '버스 뒤에서 매캐한 연기가 나요'], shuffle: false }, sequence: [{ sort: { '쓰레기': ['놀이터에 과자 봉지가 많아요'], '물': ['개울물이 뿌옇게 흐려요'], '공기': ['버스 뒤에서 매캐한 연기가 나요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 걱정되는 일 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 걱정은 무엇이 더러워지거나 모자라는 일인가요? 땅에 쌓이는 것인가요, 물인가요, 숨 쉬는 공기인가요?" 카드마다 \'무엇이\' 아픈지 먼저 말하게 한다.',
            task: '걱정되는 일 카드를 쓰레기, 물, 공기 걱정으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '걱정되는 일을 쓰레기·물·공기 걱정으로 나누어 보세요.', toolOptions: { topic: '무엇이 걱정될까?', slots: ['쓰레기', '물', '공기'], cards: ['운동장 구석에 페트병이 쌓였어요', '수돗물을 틀어 놓고 이를 닦아요', '미세먼지로 바깥 놀이를 못 해요'] },
                target: { sort: { '쓰레기': ['운동장 구석에 페트병이 쌓였어요'], '물': ['수돗물을 틀어 놓고 이를 닦아요'], '공기': ['미세먼지로 바깥 놀이를 못 해요'] } }, difficulty: 0.1 },
              { prompt: '걱정되는 일을 더 많이 나누어 보세요.', toolOptions: { topic: '무엇이 걱정될까?', slots: ['쓰레기', '물', '공기'], cards: ['급식 반찬이 많이 버려져요', '공원 풀밭에 과자 봉지가 버려져 있어요', '비가 안 와서 저수지가 말랐어요', '하천에 기름이 둥둥 떠 있어요', '자동차 연기로 목이 따가워요'] },
                target: { sort: { '쓰레기': ['급식 반찬이 많이 버려져요', '공원 풀밭에 과자 봉지가 버려져 있어요'], '물': ['비가 안 와서 저수지가 말랐어요', '하천에 기름이 둥둥 떠 있어요'], '공기': ['자동차 연기로 목이 따가워요'] } }, difficulty: 0.25,
                hints: ['카드마다 무엇이 버려지거나, 모자라거나, 더러워지는지 먼저 찾아요.', '어긋난 카드를 짚어 보세요. 바닷가 비닐봉지는 물 위에 있지만 버려진 물건이에요.', '반찬·비닐봉지는 쓰레기, 저수지·기름 하천은 물, 자동차 연기는 공기예요.'],
                levels: { easy: { prompt: '걱정되는 일을 더 많이 나누어 보세요. 카드가 세 장이에요.', toolOptions: { cards: ['급식 반찬이 많이 버려져요', '비가 안 와서 저수지가 말랐어요', '자동차 연기로 목이 따가워요'] },
                  target: { sort: { '쓰레기': ['급식 반찬이 많이 버려져요'], '물': ['비가 안 와서 저수지가 말랐어요'], '공기': ['자동차 연기로 목이 따가워요'] } } } } },
              { prompt: '우리 둘레가 아파하는 걱정만 골라 보세요.', toolOptions: { mode: 'pick', topic: '자연이 걱정돼요', cards: ['화단에 일회용 컵이 버려져 있어요', '복도 수도가 하루 종일 똑똑 새요', '내일 받아쓰기 시험이 있어요', '새 운동화가 조금 작아요'] },
                target: { pick: ['화단에 일회용 컵이 버려져 있어요', '복도 수도가 하루 종일 똑똑 새요'] }, difficulty: 0.15,
                predict: { q: '"받아쓰기 시험"은 자연이 아파하는 걱정일까요?', options: ['그래요', '아니에요'], answer: 1 },
                conclude: '오늘 찾는 걱정은 땅·물·공기처럼 우리가 함께 쓰는 것이 아파하는 일이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 걱정되는 장면 꾸미기', minutes: 15, tool: 'collage',
            teacher: '"이 그림을 본 사람이 무엇이 걱정되는지 한눈에 알 수 있을까요?" 바다는 파랑 긴 네모, 쓰레기는 검정 네모처럼 뜻이 보이는 모양을 고르게 한다. 화면으로 꾸며 본 뒤 모둠마다 색종이로 걱정 장면을 하나 만들어 칠판에 붙인다.',
            task: '색종이 조각으로 걱정되는 장면을 꾸며요. 다 꾸미면 모둠 걱정 그림도 만들어 붙여요.',
            levels: { easy: { shapes: ['circle', 'square', 'rect', 'triangle'], colors: ['파랑', '검정', '초록', '갈색'] }, base: {}, challenge: {} },
            items: [
              { prompt: '쓰레기가 떠 있는 바다를 꾸며요. 파랑 긴 네모 바다를 한 개 이상, 검정 네모 쓰레기를 두 개 이상 붙여요.', target: { has: [{ shape: 'rect', color: '파랑', min: 1 }, { shape: 'square', color: '검정', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '쓰레기가 떠 있는 바다를 꾸며요. 파랑 긴 네모 바다를 한 개 이상, 검정 네모 쓰레기를 세 개 이상, 갈색 동그라미 거북을 한 개 붙여요.', target: { has: [{ shape: 'rect', color: '파랑', min: 1 }, { shape: 'square', color: '검정', min: 3 }, { shape: 'circle', color: '갈색', n: 1 }] } } } },
              { prompt: '말라 가는 숲을 꾸며요. 갈색 세모 마른 나무를 두 개 이상, 초록 동그라미 잎을 한 개만 붙여요.', target: { has: [{ shape: 'triangle', color: '갈색', min: 2 }, { shape: 'circle', color: '초록', n: 1 }] }, difficulty: 0.15 },
              { prompt: '내가 찾은 걱정 장면을 마음껏 꾸미고, 해낸 것을 점검해 보세요.', target: { selfCheck: ['무엇이 걱정되는지 보이는 모양을 넣었어요', '조각을 네 개 이상 붙였어요', '모둠 친구에게 내 그림을 소개했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"칠판에 붙은 걱정 그림 가운데 쓰레기 걱정은 몇 장인가요? 물 걱정은요?" 함께 세어 본다. 출구 첫 문항을 틀린 학생에게는 카드에서 \'무엇이\' 아픈지 먼저 찾게 한다. 다음 시간에는 이 걱정을 물음으로 바꿔 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '무엇이 걱정될까?', slots: ['쓰레기', '물', '공기'], cards: ['공원 벤치에 컵라면 용기가 남아 있어요', '샤워기 물을 오래 틀어 놓아요', '공장 굴뚝 연기로 하늘이 뿌예요'] }, prompt: '걱정되는 일을 나누어 보세요.', target: { sort: { '쓰레기': ['공원 벤치에 컵라면 용기가 남아 있어요'], '물': ['샤워기 물을 오래 틀어 놓아요'], '공기': ['공장 굴뚝 연기로 하늘이 뿌예요'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '오늘 찾은 걱정과 거리가 먼 것은 무엇인가요?', options: ['개울에 버려진 캔', '새는 수도꼭지', '좋아하는 만화가 끝났어요'], answer: 2, difficulty: 0.1, explain: '만화가 끝난 것은 내 마음의 일이고, 땅·물·공기가 아파하는 일은 아니에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '걱정되는 일 찾기',
      items: [
        { type: 'table', prompt: '우리 둘레에서 찾은 걱정되는 일을 쓰세요.', columns: ['쓰레기 걱정', '물 걱정', '공기 걱정'], rows: 2 },
        { type: 'choice', prompt: '물 걱정에 ○ 하세요.', options: ['수도꼭지에서 물이 새요', '운동장에 과자 봉지가 있어요', '자동차 연기가 나요'], answer: '수도꼭지에서 물이 새요' },
        { type: 'draw', prompt: '가장 걱정되는 장면을 그리세요.' },
        { type: 'short', prompt: '그 장면이 걱정되는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '무엇이 버려지거나, 모자라거나, 더러워지는지 찾아요.',
        items: [
          { type: 'choice', prompt: '쓰레기 걱정에 ○ 하세요.', options: ['운동장에 페트병이 쌓였어요', '하늘이 맑아요'], answer: '운동장에 페트병이 쌓였어요' },
          { type: 'short', prompt: '내가 본 걱정되는 일을 한 가지 쓰세요.' },
          { type: 'draw', prompt: '걱정되는 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 세 장으로 줄고, 맞는 칸에 초록 테두리가 생겨요. 꾸미기는 모양 네 가지·색 네 가지에서 골라요.',
      base: '모두 놓은 뒤 확인을 눌러요. 조건에 맞게 걱정 장면을 꾸며요.',
      challenge: '카드가 다섯 장이고 헷갈리는 카드가 있어요. 꾸미기 조건이 하나 더 붙어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 바다 쓰레기를 물 걱정으로 나눈다 → "버려진 물건인가요, 물이 모자라거나 더러운 것인가요?"라는 같은 기준으로 다시 따진다. ② 내 마음의 걱정(시험, 친구)을 고른다 → 오늘은 함께 쓰는 땅·물·공기의 걱정을 찾는다고 짚는다. ③ 걱정 그림이 무서워 불안해하는 학생 → 다음 시간부터 할 수 있는 일을 찾는다고 말해 준다. 모둠마다 색종이와 풀을 미리 나누어 둔다.',
  }));

  lessons.push(L(34, {
    title: '걱정되는 일을 알아볼 물음으로 바꾸기',
    objective: '걱정되는 일 문장을 "얼마나·왜·어떻게" 물음으로 바꾸고, 우리 반이 알아볼 수 있는 물음을 고를 수 있다.',
    illustration: ART('paper speech bubbles turning from a worried face into question marks, above a classroom recycling corner with bins', '걱정을 물음으로', [
      { motif: 'cloud', x: 120, y: 96, color: 'sky' }, { motif: 'star', x: 360, y: 96, s: 0.5 }, { motif: 'house', x: 400, y: 212 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"서아가 \'우리 반 쓰레기가 너무 많아\' 하고 걱정했어요. 이 걱정을 알아보려면 무엇을 물어야 할까요?" \'우리 반에서 하루에 쓰레기가 얼마나 나올까?\'라는 물음을 칠판에 쓴다. "걱정은 마음이고, 물음은 알아볼 수 있는 말이에요. 21차시에 물음을 또렷하게 바꾼 것처럼 해 봐요." 시연 단추로 걱정과 물음이 이어지는 모습을 보여 준다.',
        student: '33차시에 찾은 내 걱정을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '걱정을 물음으로', slots: [{ id: 's1', label: '우리 반 쓰레기가 너무 많아' }], cards: ['우리 반에서 하루에 쓰레기가 얼마나 나올까?', '쓰레기는 싫어'], shuffle: false }, sequence: [{ match: { s1: '우리 반에서 하루에 쓰레기가 얼마나 나올까?' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 걱정과 물음 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음에 답을 찾으면 그 걱정을 더 잘 알 수 있을까요?" 걱정에 나오는 낱말(쓰레기, 물, 급식)이 물음에도 들어 있는지 찾게 한다. 물음은 \'?\'로 끝난다는 것을 짚는다.',
            task: '걱정되는 일 옆에 그 걱정을 알아볼 물음 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '걱정되는 일과 알아볼 물음을 이어 보세요.', toolOptions: { mode: 'match', topic: '걱정을 물음으로', slots: [{ id: 's1', label: '급식이 많이 남아요' }, { id: 's2', label: '복도 수도에서 물이 새요' }, { id: 's3', label: '교실 휴지통이 금방 차요' }], cards: ['어떤 반찬이 가장 많이 남을까?', '새는 물은 하루에 얼마나 될까?', '휴지통에는 어떤 쓰레기가 가장 많을까?'] },
                target: { match: { s1: '어떤 반찬이 가장 많이 남을까?', s2: '새는 물은 하루에 얼마나 될까?', s3: '휴지통에는 어떤 쓰레기가 가장 많을까?' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['어떤 반찬이 가장 많이 남을까?', '새는 물은 하루에 얼마나 될까?', '휴지통에는 어떤 쓰레기가 가장 많을까?', '쓰레기는 정말 싫어!'] } } } },
              { prompt: '걱정되는 일과 알아볼 물음을 더 이어 보세요.', toolOptions: { mode: 'match', topic: '걱정을 물음으로', slots: [{ id: 's1', label: '이면지가 그냥 버려져요' }, { id: 's2', label: '운동장에 페트병이 많아요' }], cards: ['이면지를 다시 쓰려면 어디에 모을까?', '페트병은 왜 운동장에 버려질까?'] },
                target: { match: { s1: '이면지를 다시 쓰려면 어디에 모을까?', s2: '페트병은 왜 운동장에 버려질까?' } }, difficulty: 0.15 },
              { prompt: '걱정이 아니라 알아볼 수 있는 물음만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알아볼 물음', cards: ['우리 반은 하루에 휴지를 몇 장 쓸까?', '급식에서 가장 많이 남는 반찬은 무엇일까?', '쓰레기가 너무 싫어', '물이 아까워요'] },
                target: { pick: ['우리 반은 하루에 휴지를 몇 장 쓸까?', '급식에서 가장 많이 남는 반찬은 무엇일까?'] }, difficulty: 0.15,
                hints: ['문장마다 답을 찾을 수 있는 물음인지, 마음만 말한 것인지 따져요.', '고른 것 가운데 \'?\'로 끝나지 않는 문장이 있는지 살펴봐요.', '휴지 몇 장, 가장 많이 남는 반찬을 묻는 두 물음이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반이 알아볼 물음 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"이 물음은 우리 교실이나 학교에서 지금 알아볼 수 있나요?" 세어 보거나 살펴보거나 여쭤보면 답할 수 있는 물음과, 2학년이 지금 알아보기 어려운 물음을 나누게 한다. 끝에는 모둠마다 내 걱정을 물음으로 바꿔 붙임쪽지에 쓰고 칠판에 붙인다.',
            task: '물음 카드를 우리 반이 지금 알아볼 수 있는 물음과 알아보기 어려운 물음으로 나누어요. 그리고 내 물음을 붙임쪽지에 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음을 우리 반이 지금 알아볼 수 있는지에 따라 나누어 보세요.', toolOptions: { topic: '지금 알아볼 수 있을까?', slots: ['교실에서 알아볼 수 있어요', '지금은 알아보기 어려워요'], cards: ['우리 반 휴지통에 무엇이 가장 많을까?', '온 세계 바다 쓰레기는 몇 톤일까?', '우리 반은 하루에 이면지를 몇 장 쓸까?', '100년 뒤 지구는 얼마나 더울까?'] },
                target: { sort: { '교실에서 알아볼 수 있어요': ['우리 반 휴지통에 무엇이 가장 많을까?', '우리 반은 하루에 이면지를 몇 장 쓸까?'], '지금은 알아보기 어려워요': ['온 세계 바다 쓰레기는 몇 톤일까?', '100년 뒤 지구는 얼마나 더울까?'] } }, difficulty: 0.2,
                predict: { q: '온 세계 바다 쓰레기를 우리 반이 직접 셀 수 있을까요?', options: ['셀 수 있어요', '셀 수 없어요'], answer: 1 },
                conclude: '우리 반이 지금 세어 보거나 살펴볼 수 있는 물음을 고르면 답을 찾을 수 있어요.' },
              { prompt: '우리 반이 이번 주에 알아볼 수 있는 물음만 골라 보세요.', toolOptions: { mode: 'pick', topic: '이번 주에 알아볼 물음', cards: ['급식에서 어떤 반찬이 가장 많이 남을까?', '복도 수도는 하루에 몇 번 틀어 놓일까?', '남극 얼음은 1년에 얼마나 녹을까?'] },
                target: { pick: ['급식에서 어떤 반찬이 가장 많이 남을까?', '복도 수도는 하루에 몇 번 틀어 놓일까?'] }, difficulty: 0.15,
                hints: ['물음마다 우리 학교 안에서 세거나 살펴볼 수 있는지 따져요.', '고른 것 가운데 우리가 가 볼 수 없는 곳의 물음이 있는지 살펴봐요.', '급식 반찬과 복도 수도 물음만 이번 주에 학교에서 알아볼 수 있어요.'] },
              { prompt: '내 걱정을 알아볼 물음으로 바꿔 붙임쪽지에 쓰고 칠판에 붙여요. 다 하면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"칠판의 물음 가운데 우리 반 모두가 함께 알아보고 싶은 것에 손을 들어 볼까요?" 가장 많이 손을 든 물음 두세 개에 별표를 한다. 출구 첫 문항을 틀린 학생에게는 \'?\'로 끝나는지 먼저 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '걱정을 물음으로', slots: [{ id: 'e1', label: '우유를 남기는 친구가 많아요' }, { id: 'e2', label: '교실 불이 켜진 채로 있어요' }], cards: ['우유를 남기는 친구는 하루에 몇 명일까?', '빈 교실에 불이 켜진 날은 며칠일까?'] }, prompt: '걱정되는 일과 알아볼 물음을 이어 보세요.', target: { match: { e1: '우유를 남기는 친구는 하루에 몇 명일까?', e2: '빈 교실에 불이 켜진 날은 며칠일까?' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '우리 반이 지금 알아볼 수 있는 물음은 무엇인가요?', options: ['우리 반 휴지통에 종이가 몇 개 있을까?', '지구의 모든 나무는 몇 그루일까?'], answer: 0, difficulty: 0.1, explain: '우리 반 휴지통은 지금 직접 세어 볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '걱정을 물음으로',
      items: [
        { type: 'table', prompt: '걱정되는 일을 물음으로 바꿔 쓰세요.', columns: ['걱정되는 일', '알아볼 물음'], rows: 2 },
        { type: 'choice', prompt: '알아볼 수 있는 물음에 ○ 하세요.', options: ['쓰레기가 싫어요', '우리 반 휴지통에 무엇이 가장 많을까?', '물이 아까워요'], answer: '우리 반 휴지통에 무엇이 가장 많을까?' },
        { type: 'check', prompt: '우리 반이 지금 알아볼 수 있는 물음에 모두 ✓ 하세요.', options: ['급식에서 가장 많이 남는 반찬은?', '100년 뒤 지구의 날씨는?', '우리 반 하루 휴지 수는?'] },
        { type: 'short', prompt: '내가 칠판에 붙인 물음을 쓰세요.' },
      ],
      easy: {
        note: '물음은 \'?\'로 끝나요.',
        items: [
          { type: 'choice', prompt: '물음에 ○ 하세요.', options: ['쓰레기는 얼마나 나올까?', '쓰레기가 싫어요'], answer: '쓰레기는 얼마나 나올까?' },
          { type: 'short', prompt: '내 걱정을 쓰세요.' },
          { type: 'short', prompt: '내 걱정을 "~할까?"로 바꿔 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 내 걱정을 물음으로 바꿔 써요.',
      challenge: '물음이 아닌 카드가 섞여 있어 남겨 두어야 해요. 내 물음에 \'얼마나\'나 \'몇\'을 넣어 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 걱정을 그대로 다시 쓴다 → "답을 찾을 수 있게 \'?\'로 바꿔 볼까요?"라고 묻는다. ② 너무 큰 물음(온 세계, 100년 뒤)을 고른다 → 나쁜 물음이 아니라 지금 우리가 알아보기 어려운 물음이라고 짚고, \'우리 반\'을 넣어 줄여 보게 한다. ③ 물음 쓰기를 어려워한다 → "얼마나, 무엇이, 몇"으로 시작하는 말머리 카드를 준다.',
  }));

  lessons.push(L(35, {
    title: '큰 걱정 앞에서 어린이가 할 수 있는 일 찾기',
    objective: '지구의 큰 걱정을 해결하는 데 어른이 할 일과 어린이가 지금 할 수 있는 일을 나누고, "어린이와 상관없다"는 말에 까닭을 들어 답할 수 있다.',
    illustration: ART('a big paper globe with a worried face, small children around it each holding a tiny watering can, a cup and a recycling bag', '나도 할 수 있어요', [
      { motif: 'heart', x: 120, y: 100, s: 0.6 }, { motif: 'tree', x: 400, y: 212 }, { motif: 'flower', x: 130, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"하준이는 \'지구 문제는 어른들이 하는 거야. 어린이는 상관없어\'라고 말했어요. 여러분 생각은 어때요?" 손을 들어 생각을 나누게 한다. "우리 반 스물다섯 명이 날마다 종이컵 하나를 덜 쓰면 1년에 몇 개가 줄어들지 함께 어림해 봐요." 시연 단추로 \'어린이가 지금 할 수 있어요\' 칸에 카드가 놓이는 모습을 보여 준다.',
        student: '하준이 말에 손을 들어 내 생각을 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '누가 할 수 있을까?', slots: ['어린이가 지금 할 수 있어요', '어른이 해야 해요'], cards: ['양치할 때 컵을 써요', '하수 처리장을 지어요'], shuffle: false }, sequence: [{ sort: { '어린이가 지금 할 수 있어요': ['양치할 때 컵을 써요'], '어른이 해야 해요': ['하수 처리장을 지어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 누가 할 수 있을까', minutes: 13, tool: 'mindmap',
            teacher: '"이 일은 2학년인 내가 오늘 집이나 학교에서 할 수 있나요?" 기계나 큰 건물이 필요한 일은 어른의 몫이고, 내 손으로 오늘 할 수 있는 일은 어린이의 몫이라는 기준을 칠판에 적는다. 두 칸 모두 걱정을 푸는 데 쓰인다는 것을 짚는다.',
            task: '할 일 카드를 어린이가 지금 할 수 있는 일과 어른이 해야 하는 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물 걱정을 푸는 일을 누가 할 수 있는지 나누어 보세요.', toolOptions: { topic: '누가 할 수 있을까?', slots: ['어린이가 지금 할 수 있어요', '어른이 해야 해요'], cards: ['비누칠할 때 물을 잠가요', '새는 수도관을 고쳐요', '빗물 저금통에 받은 물로 화분을 줘요', '정수장을 새로 지어요'] },
                target: { sort: { '어린이가 지금 할 수 있어요': ['비누칠할 때 물을 잠가요', '빗물 저금통에 받은 물로 화분을 줘요'], '어른이 해야 해요': ['새는 수도관을 고쳐요', '정수장을 새로 지어요'] } }, difficulty: 0.15 },
              { prompt: '쓰레기 걱정을 푸는 일을 누가 할 수 있는지 나누어 보세요.', toolOptions: { topic: '누가 할 수 있을까?', slots: ['어린이가 지금 할 수 있어요', '어른이 해야 해요'], cards: ['급식을 먹을 만큼만 받아요', '재활용 공장을 운영해요', '쓰레기 수거차를 운전해요', '연필을 짧아질 때까지 써요'] },
                target: { sort: { '어린이가 지금 할 수 있어요': ['급식을 먹을 만큼만 받아요', '연필을 짧아질 때까지 써요'], '어른이 해야 해요': ['재활용 공장을 운영해요', '쓰레기 수거차를 운전해요'] } }, difficulty: 0.2,
                hints: ['카드마다 기계나 큰 건물이 필요한지, 내 손으로 오늘 할 수 있는지 따져요.', '어긋난 카드를 짚어 보세요. 2학년이 운전이나 공장 일을 할 수 있을까요?', '급식 알맞게 받기와 연필 끝까지 쓰기는 어린이 칸이에요.'],
                levels: { challenge: { prompt: '쓰레기 걱정을 푸는 일을 나누어 보세요. 걱정을 푸는 데 도움이 안 되는 카드는 남겨요.', toolOptions: { cards: ['급식을 먹을 만큼만 받아요', '재활용 공장을 운영해요', '쓰레기 수거차를 운전해요', '연필을 짧아질 때까지 써요', '새 공책을 날마다 사요'] } } } },
              { prompt: '공기 걱정을 푸는 일 가운데 어린이가 오늘 할 수 있는 일만 골라 보세요.', toolOptions: { mode: 'pick', topic: '어린이가 오늘 할 수 있어요', cards: ['가까운 곳은 걸어서 가요', '빈 방의 불을 꺼요', '공장 굴뚝에 먼지 거르개를 달아요', '전기차 충전소를 세워요'] },
                target: { pick: ['가까운 곳은 걸어서 가요', '빈 방의 불을 꺼요'] }, difficulty: 0.2,
                hints: ['카드마다 2학년이 오늘 혼자 할 수 있는 일인지 따져요.', '고른 것 가운데 큰 기계나 공사가 필요한 일이 있는지 살펴봐요.', '걸어가기와 불 끄기만 오늘 내가 할 수 있어요.'],
                predict: { q: '불을 끄는 일이 공기와 이어져 있을까요?', options: ['이어져 있어요', '상관없어요'], answer: 0 },
                conclude: '전기를 만들 때 공기가 더러워질 수 있어서, 불을 끄는 작은 일도 공기를 도와요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. "어린이는 상관없어"에 답하기', minutes: 14, tool: 'emotion',
            teacher: '"하준이 같은 말을 들으면 뭐라고 답해 줄까요? 그렇게 하면 어떻게 될까요?" 보기를 고른 뒤 결과를 소리 내어 읽게 한다. 마지막 문항에서는 오늘 집에서 해 볼 작은 일 한 가지를 정해 손바닥 모양 종이에 쓴다.',
            task: '이야기를 읽고 알맞은 말이나 행동을 골라 결과를 봐요. 그리고 오늘 해 볼 작은 일을 손바닥 종이에 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이가 지구 문제는 어린이와 상관없다고 해요. 어떤 말을 해 줄까요?', toolOptions: { mode: 'branch', who: '민지', situation: '하준이가 "지구 문제는 어른들이 해결해. 우리는 상관없어"라고 말했어요.', choices: [
                { id: 'agree', text: '"맞아, 우리는 기다리면 돼" 하고 말해요', result: '둘 다 오늘 할 수 있는 일을 하지 않아요.', mood: '걱정', why: '어른을 기다리는 동안에도 쓰레기는 날마다 생겨요.' },
                { id: 'small', text: '"우리 반이 종이컵을 안 쓰면 1년에 수천 개가 줄어" 하고 말해요', result: '하준이가 "나도 내일 물통 가져올래" 하고 말해요.', mood: '뿌듯함' },
                { id: 'blame', text: '"너 때문에 지구가 아파" 하고 탓해요', result: '하준이가 기분이 상해 이야기를 듣지 않아요.', mood: '속상함', why: '탓하는 말보다 함께 할 수 있는 일을 알려 주는 말이 좋아요.' }] }, target: { choice: 'small' }, difficulty: 0.1 },
              { prompt: '집에서 혼자 양치를 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 집에서 양치를 하려고 해요. 엄마는 부엌에 계시고, 아무도 보고 있지 않아요.', choices: [
                { id: 'cup', text: '컵에 물을 받아 양치해요', result: '물을 아끼고, 서아는 혼자서도 약속을 지켜 뿌듯해요.', mood: '뿌듯함' },
                { id: 'run', text: '아무도 안 보니까 물을 틀어 놓고 해요', result: '양치하는 동안 깨끗한 물이 그냥 흘러가요.', mood: '걱정', why: '누가 보지 않아도 흘러간 물은 똑같이 사라져요.' },
                { id: 'later', text: '어른이 되면 아낄래요', result: '오늘 흘려보낸 물은 돌아오지 않아요.', mood: '걱정', why: '물은 지금 아낄 수 있어요.' }] }, target: { choice: 'cup' }, difficulty: 0.15 },
              { prompt: '오늘 집에서 해 볼 작은 일 한 가지를 손바닥 종이에 쓰고 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"손바닥 종이를 칠판 지구 그림 둘레에 붙여 볼까요?" 붙인 손바닥 수를 함께 센다. 출구 첫 문항을 틀린 학생에게는 "그 일을 오늘 내 손으로 할 수 있나요?"라고 다시 묻는다. 다음 시간에는 물음마다 알아볼 방법을 고른다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '누가 할 수 있을까?', slots: ['어린이가 지금 할 수 있어요', '어른이 해야 해요'], cards: ['장바구니를 들고 가요', '쓰레기 매립장을 만들어요'] }, prompt: '할 일을 누가 할 수 있는지 나누어 보세요.', target: { sort: { '어린이가 지금 할 수 있어요': ['장바구니를 들고 가요'], '어른이 해야 해요': ['쓰레기 매립장을 만들어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"지구 문제는 어린이와 상관없다"는 말은 맞을까요?', options: ['맞아요, 어른만 할 수 있어요', '아니에요, 어린이도 지금 할 수 있는 일이 있어요'], answer: 1, difficulty: 0.1, explain: '불 끄기, 물 아끼기처럼 어린이가 날마다 하는 작은 일이 모이면 큰 힘이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나도 할 수 있어요',
      items: [
        { type: 'table', prompt: '걱정마다 어린이가 할 수 있는 일을 쓰세요.', columns: ['걱정', '내가 할 수 있는 일'], cells: [['물이 모자라요', ''], ['쓰레기가 많아요', ''], ['공기가 탁해요', '']] },
        { type: 'choice', prompt: '어린이가 지금 할 수 있는 일에 ○ 하세요.', options: ['정수장 짓기', '빈 방 불 끄기', '수거차 운전하기'], answer: '빈 방 불 끄기' },
        { type: 'short', prompt: '"어린이는 상관없어"라는 친구에게 해 줄 말을 쓰세요.' },
        { type: 'draw', prompt: '오늘 집에서 해 볼 작은 일을 그리세요.' },
      ],
      easy: {
        note: '내 손으로 오늘 할 수 있으면 어린이가 할 수 있는 일이에요.',
        items: [
          { type: 'choice', prompt: '내가 할 수 있는 일에 ○ 하세요.', options: ['양치할 때 컵 쓰기', '공장 짓기'], answer: '양치할 때 컵 쓰기' },
          { type: 'short', prompt: '오늘 집에서 해 볼 작은 일을 쓰세요.' },
          { type: 'draw', prompt: '그 일을 하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 말의 결과를 소리 내어 읽어요.',
      challenge: '걱정을 푸는 데 도움이 안 되는 카드가 섞여 있어 남겨 두어야 해요. 하준이에게 해 줄 말에 수를 넣어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 지구 문제는 어린이와 상관없다고 여긴다(이 차시의 핵심 오개념) → 반 전체가 날마다 하면 얼마나 모이는지 함께 어림한다. ② 어린이가 다 해야 한다고 부담을 느낀다 → 어른이 할 일도 있고, 어린이는 할 수 있는 만큼만 하면 된다고 말해 준다. ③ 남을 탓한다 → "함께 할 수 있는 일"로 바꿔 말하게 한다. 손바닥 종이는 미리 오려 둔다.',
  }));

  lessons.push(L(36, {
    title: '물음마다 알아볼 방법 고르기',
    objective: '알아볼 물음에 알맞은 방법(세어 보기, 살펴보기, 여쭤보기)을 고르고, 모둠이 알아볼 물음과 방법을 정할 수 있다.',
    illustration: ART('three paper signposts labeled with a counting hand, a magnifying glass and a speech bubble, children choosing which path to walk', '어떻게 알아볼까요?', [
      { motif: 'star', x: 120, y: 96, s: 0.5 }, { motif: 'house', x: 400, y: 212 }, { motif: 'flower', x: 130, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'우리 반 휴지통에 무엇이 가장 많을까?\'는 어떻게 알아보면 될까요? 책을 찾아볼까요, 직접 세어 볼까요?" 20차시에 \'직접 살펴보기\'와 \'찾아보기\'를 나눈 것을 떠올리게 한다. "오늘은 세어 보기, 살펴보기, 여쭤보기 가운데 고를 거예요." 시연 단추로 물음 옆에 방법 카드가 놓이는 모습을 보여 준다.',
        student: '34차시에 칠판에 붙인 내 물음을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '휴지통에 무엇이 가장 많을까?' }], cards: ['종류별로 세어 봐요', '그림책을 읽어요'], shuffle: false }, sequence: [{ match: { s1: '종류별로 세어 봐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음과 방법 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음에 \'몇\', \'얼마나\'가 있나요? 그러면 세어 봐야겠지요." 물음 속 낱말로 방법을 고르는 기준(몇·얼마나 → 세어 보기, 어떻게 생겼나·무엇을 하나 → 살펴보기, 어른만 아는 것 → 여쭤보기)을 칠판에 적어 둔다.',
            task: '물음 옆에 알맞은 알아볼 방법 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 알맞은 알아볼 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '하루에 휴지를 몇 장 쓸까?' }, { id: 's2', label: '분리수거함은 어떻게 나뉘어 있을까?' }, { id: 's3', label: '급식실에서는 남은 음식을 어디로 보낼까?' }], cards: ['날마다 세어 봐요', '분리수거함에 가서 살펴봐요', '영양 선생님께 여쭤봐요'] },
                target: { match: { s1: '날마다 세어 봐요', s2: '분리수거함에 가서 살펴봐요', s3: '영양 선생님께 여쭤봐요' } }, difficulty: 0.15 },
              { prompt: '물음마다 알맞은 알아볼 방법을 더 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '복도 수도는 하루에 몇 번 틀어 놓일까?' }, { id: 's2', label: '학교 쓰레기는 언제 실어 갈까?' }, { id: 's3', label: '운동장 쓰레기는 주로 어디에 모일까?' }], cards: ['쉬는 시간마다 세어 봐요', '주무관님께 여쭤봐요', '운동장을 돌며 살펴봐요'] },
                target: { match: { s1: '쉬는 시간마다 세어 봐요', s2: '주무관님께 여쭤봐요', s3: '운동장을 돌며 살펴봐요' } }, difficulty: 0.2,
                hints: ['물음 속에 \'몇\', \'언제\', \'어디\' 가운데 무엇이 있는지 먼저 찾아요.', '어긋난 짝을 짚어 보세요. 쓰레기차가 오는 때는 우리가 늘 볼 수 없으니 아는 어른께 여쭤봐요.', '몇 번 → 세어 보기, 언제 실어 감 → 여쭤보기, 어디에 모임 → 살펴보기예요.'],
                levels: { challenge: { toolOptions: { cards: ['쉬는 시간마다 세어 봐요', '주무관님께 여쭤봐요', '운동장을 돌며 살펴봐요', '꿈에서 본 것을 써요'] } } } },
              { prompt: '"우리 반은 하루에 이면지를 몇 장 쓸까?"를 알아보는 데 알맞은 방법만 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 방법', cards: ['이면지 상자에서 쓴 장수를 날마다 세어요', '쓴 장수를 표에 날짜와 함께 적어요', '친구에게 어림으로 물어봐요', '아무 수나 정해요'] },
                target: { pick: ['이면지 상자에서 쓴 장수를 날마다 세어요', '쓴 장수를 표에 날짜와 함께 적어요'] }, difficulty: 0.2,
                hints: ['방법마다 정확한 수를 알 수 있는지 따져요.', '고른 것 가운데 어림하거나 지어낸 수가 되는 방법이 있는지 살펴봐요.', '날마다 세기와 날짜와 함께 적기가 정확한 방법이에요.'],
                predict: { q: '친구에게 어림으로 물어보면 정확한 수를 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '수를 묻는 물음은 직접 세고 날짜와 함께 적어야 정확해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 알아보기 계획 세우기', minutes: 14, tool: 'kitchen',
            teacher: '"알아보기 계획에 꼭 들어가야 할 것은 무엇일까요?" 22차시 관찰 계획을 떠올리게 한다. 계획표 칸을 고른 뒤 모둠마다 34차시 별표 물음 가운데 하나를 골라 계획표를 함께 쓴다. 여쭤보기를 고른 모둠은 여쭤볼 말을 미리 한 문장으로 써 둔다.',
            task: '알아보기 계획표에 넣을 것을 고르고, 모둠 계획표를 함께 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '알아보기 계획표에 꼭 넣을 것만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '알아보기 계획표', items: [{ id: 'q', text: '알아볼 물음' }, { id: 'how', text: '알아볼 방법' }, { id: 'when', text: '언제, 며칠 동안' }, { id: 'who', text: '맡은 사람' }, { id: 'prize', text: '이기면 받을 상' }] },
                target: { checklist: ['q', 'how', 'when', 'who'] }, difficulty: 0.15,
                hints: ['항목마다 알아보기를 실제로 하는 데 쓰이는지 따져요.', '표시한 것 가운데 알아보기와 상관없는 것이 있는지 살펴봐요.', '물음, 방법, 언제, 맡은 사람을 표시하고 상은 빼요.'] },
              { prompt: '선생님께 여쭤볼 때 지킬 것만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '여쭤보기 약속', items: [{ id: 'greet', text: '먼저 인사하고 누구인지 말해요' }, { id: 'one', text: '여쭤볼 물음을 또박또박 말해요' }, { id: 'thanks', text: '들은 뒤 고맙다고 말해요' }, { id: 'interrupt', text: '바쁘셔도 말씀 중간에 끼어들어요' }] },
                target: { checklist: ['greet', 'one', 'thanks'] }, difficulty: 0.15,
                hints: ['항목마다 여쭤보는 분이 기분 좋게 답해 줄 수 있는 행동인지 따져요.', '표시한 것 가운데 예의에 어긋나는 행동이 있는지 살펴봐요.', '인사하기, 또박또박 묻기, 고맙다고 말하기를 표시해요.'] },
              { prompt: '모둠 물음을 하나 골라 계획표(물음, 방법, 언제, 맡은 사람)를 함께 써요. 다 하면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"모둠 계획표를 소개해 볼까요? 어떤 방법을 골랐나요?" 모둠마다 한 사람이 물음과 방법을 말한다. 출구 첫 문항을 틀린 학생에게는 물음 속 \'몇\', \'어디\' 같은 낱말을 다시 찾게 한다. 39차시부터 우리 반 쓰레기를 직접 세어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 'e1', label: '우리 반 우유갑은 하루에 몇 개 나올까?' }, { id: 'e2', label: '재활용품은 어느 공장으로 갈까?' }], cards: ['날마다 세어 봐요', '아는 어른께 여쭤봐요'] }, prompt: '물음과 알맞은 알아볼 방법을 이어 보세요.', target: { match: { e1: '날마다 세어 봐요', e2: '아는 어른께 여쭤봐요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"몇 개", "얼마나"가 들어간 물음은 어떻게 알아보면 좋을까요?', options: ['직접 세어 봐요', '그림을 그려요', '노래를 불러요'], answer: 0, difficulty: 0.1, explain: '수를 묻는 물음은 직접 세어 보아야 답을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '알아보기 계획',
      items: [
        { type: 'table', prompt: '모둠 알아보기 계획표를 쓰세요.', columns: ['칸', '쓸 내용'], cells: [['알아볼 물음', ''], ['알아볼 방법', ''], ['언제, 며칠 동안', ''], ['맡은 사람', '']] },
        { type: 'choice', prompt: '"휴지를 하루에 몇 장 쓸까?"에 알맞은 방법에 ○ 하세요.', options: ['세어 보기', '여쭤보기', '꿈꾸기'], answer: '세어 보기' },
        { type: 'short', prompt: '여쭤보기를 한다면 누구에게 무엇을 여쭤볼지 쓰세요.' },
        { type: 'check', prompt: '여쭤볼 때 지킬 것에 모두 ✓ 하세요.', options: ['먼저 인사해요', '끼어들어요', '고맙다고 말해요'] },
      ],
      easy: {
        note: '"몇"이 있으면 세어 봐요. "어떻게 생겼나"가 있으면 살펴봐요.',
        items: [
          { type: 'choice', prompt: '"몇 개 나올까?"는 어떻게 알아볼까요?', options: ['세어 봐요', '그려요'], answer: '세어 봐요' },
          { type: 'short', prompt: '우리 모둠이 알아볼 물음을 쓰세요.' },
          { type: 'short', prompt: '내가 맡은 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 모둠 계획표를 함께 써요.',
      challenge: '알아볼 수 없는 방법 카드가 섞여 있어 남겨 두어야 해요. 여쭤볼 말을 미리 한 문장으로 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 물음을 \'여쭤보기\'로 풀려 한다 → "직접 세거나 볼 수 있으면 먼저 해 봐요"라고 짚는다. ② 어림한 수를 답으로 쓴다 → 수는 세어 보아야 정확하다는 것을 짚는다. ③ 맡은 사람이 한 명에게 몰린다 → 모둠원 모두 한 칸씩 맡게 한다. 여쭤볼 선생님·주무관님께는 미리 양해를 구해 둔다.',
  }));

  lessons.push(L(37, {
    title: '분리배출하고 다시 쓰이는 길 따라가기',
    objective: '재활용품을 종류에 맞게 나누고, 분리배출한 물건이 새 물건으로 다시 돌아오는 차례를 놓을 수 있다.',
    illustration: ART('paper recycling bins for paper, plastic and cans in a school corner, with arrows showing a bottle becoming a new backpack', '다시 쓰이는 길', [
      { motif: 'leaf', x: 120, y: 228 }, { motif: 'star', x: 360, y: 96, s: 0.5 }, { motif: 'house', x: 410, y: 212 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"다 마신 페트병을 분리수거함에 넣으면 그 뒤에 어떻게 될까요?" 몇 명의 생각을 들은 뒤, 페트병으로 만든 옷이나 가방 사진을 보여 준다. "제대로 나누어 버려야 다시 쓰일 수 있어요. 다른 것이 섞이면 다시 쓰기 어려워요." 시연 단추로 재활용품이 종이·플라스틱·캔 칸으로 나뉘는 모습을 보여 준다. 실제 재활용품은 깨끗이 씻은 것만 가져와 만진다.',
        student: '집에서 분리배출을 해 본 적이 있는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '어디에 넣을까?', slots: ['종이', '플라스틱', '캔'], cards: ['신문지', '페트병', '음료수 캔'], shuffle: false }, sequence: [{ sort: { '종이': ['신문지'], '플라스틱': ['페트병'], '캔': ['음료수 캔'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 종류대로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 물건은 무엇으로 만들었을까요? 두드리면 어떤 소리가 나요? 구기면 어떻게 되나요?" 실제 재활용품을 두드리고 구겨 보며 재료를 찾게 한다. 우유갑처럼 따로 모으는 물건은 오늘 카드에서 뺐다고 알려 준다.',
            task: '재활용품 카드를 종이, 플라스틱, 캔으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '재활용품을 종류대로 나누어 보세요.', toolOptions: { topic: '어디에 넣을까?', slots: ['종이', '플라스틱', '캔'], cards: ['다 쓴 공책', '요구르트병', '참치 캔'] },
                target: { sort: { '종이': ['다 쓴 공책'], '플라스틱': ['요구르트병'], '캔': ['참치 캔'] } }, difficulty: 0.1 },
              { prompt: '재활용품을 더 많이 종류대로 나누어 보세요.', toolOptions: { topic: '어디에 넣을까?', slots: ['종이', '플라스틱', '캔'], cards: ['과자 상자', '택배 상자', '샴푸 통', '생수병', '사이다 캔'] },
                target: { sort: { '종이': ['과자 상자', '택배 상자'], '플라스틱': ['샴푸 통', '생수병'], '캔': ['사이다 캔'] } }, difficulty: 0.2,
                hints: ['물건마다 무엇으로 만들었는지 떠올려요. 구기면 찢어지는지, 눌러도 되돌아오는지 생각해요.', '어긋난 카드를 짚어 보세요. 샴푸 통은 눌렀다 놓으면 다시 펴져요.', '상자 둘은 종이, 샴푸 통·생수병은 플라스틱, 사이다 캔은 캔이에요.'],
                levels: { easy: { prompt: '재활용품을 더 많이 종류대로 나누어 보세요. 카드가 세 장이에요.', toolOptions: { cards: ['택배 상자', '생수병', '사이다 캔'] }, target: { sort: { '종이': ['택배 상자'], '플라스틱': ['생수병'], '캔': ['사이다 캔'] } } } } },
              { prompt: '분리배출하기 전에 할 일만 골라 보세요.', toolOptions: { mode: 'pick', topic: '버리기 전에 해요', cards: ['병 속을 물로 헹궈요', '병에 붙은 비닐 상표를 떼어요', '먹다 남은 음료를 그대로 넣어요', '여러 쓰레기를 한 봉지에 섞어요'] },
                target: { pick: ['병 속을 물로 헹궈요', '병에 붙은 비닐 상표를 떼어요'] }, difficulty: 0.2,
                hints: ['행동마다 다시 쓰일 수 있게 깨끗하고 한 가지 재료로 만드는 일인지 따져요.', '고른 것 가운데 다른 것이 섞이게 만드는 행동이 있는지 살펴봐요.', '헹구기와 상표 떼기만 다시 쓰이게 도와요.'],
                predict: { q: '음료가 남은 병을 넣으면 다시 쓰기 쉬울까요?', options: ['쉬워요', '어려워요'], answer: 1 },
                conclude: '깨끗이 헹구고 다른 재료를 떼어야 다시 쓰일 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 쓰이는 길 따라가기', minutes: 15, tool: 'lifecycle',
            teacher: '"분리수거함에 넣은 다음에는 어디로 갈까요? 새 물건이 된 뒤에는요?" 차례를 놓은 뒤 \'차례대로 따라가 보기\' 단추를 눌러 물건이 다시 돌아오는 것을 보게 한다. "그래서 재활용은 동그라미 길이에요." 생명 주기 판을 빌려 쓰니, 막히면 힌트를 한 단계씩 열게 한다.',
            task: '버린 물건이 새 물건으로 다시 돌아오는 차례대로 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '페트병이 다시 쓰이는 차례대로 카드를 놓아 보세요.', toolOptions: { center: '페트병이 돌아와요', cards: ['다 마신 페트병', '헹궈서 분리배출해요', '공장에서 잘게 부숴 실을 뽑아요', '새 가방이 되어 써요'] },
                target: { order: ['다 마신 페트병', '헹궈서 분리배출해요', '공장에서 잘게 부숴 실을 뽑아요', '새 가방이 되어 써요'], cyclic: true }, difficulty: 0.2,
                hints: ['우리가 먼저 하는 일과 공장에서 하는 일을 나누어 생각해요. 공장에 가기 전에 우리가 할 일이 있어요.', '어긋난 자리를 짚어 보세요. 분리배출을 해야 공장으로 갈 수 있어요.', '다 마신 페트병 → 헹궈서 분리배출 → 공장에서 실 뽑기 → 새 가방 차례예요.'] },
              { prompt: '종이가 다시 쓰이는 차례대로 카드를 놓아 보세요.', toolOptions: { center: '종이가 돌아와요', cards: ['다 쓴 공책', '종이끼리 모아 묶어 내놓아요', '공장에서 물에 풀어 죽처럼 만들어요', '새 휴지와 상자가 되어 써요'] },
                target: { order: ['다 쓴 공책', '종이끼리 모아 묶어 내놓아요', '공장에서 물에 풀어 죽처럼 만들어요', '새 휴지와 상자가 되어 써요'], cyclic: true }, difficulty: 0.2,
                hints: ['우리 손에서 공장으로, 공장에서 다시 우리 손으로 오는 길을 떠올려요.', '어긋난 자리를 짚어 보세요. 종이를 물에 풀기 전에 먼저 모아야 해요.', '다 쓴 공책 → 모아 내놓기 → 물에 풀기 → 새 휴지와 상자 차례예요.'],
                levels: { challenge: { prompt: '종이가 다시 쓰이는 차례대로 카드를 놓아 보세요. 이 길에 들어가지 않는 카드는 남겨요.', toolOptions: { slots: 4, cards: ['다 쓴 공책', '종이끼리 모아 묶어 내놓아요', '공장에서 물에 풀어 죽처럼 만들어요', '새 휴지와 상자가 되어 써요', '음식물과 섞어 버려요'] } } } },
              { prompt: '캔이 다시 쓰이는 차례대로 카드를 놓아 보세요.', toolOptions: { center: '캔이 돌아와요', cards: ['다 마신 음료수 캔', '납작하게 눌러 캔 칸에 넣어요', '공장에서 녹여 판으로 만들어요', '새 캔이 되어 가게에 와요'] },
                target: { order: ['다 마신 음료수 캔', '납작하게 눌러 캔 칸에 넣어요', '공장에서 녹여 판으로 만들어요', '새 캔이 되어 가게에 와요'], cyclic: true }, difficulty: 0.2,
                hints: ['캔이 우리 손을 떠나 다시 돌아오는 길을 떠올려요.', '어긋난 자리를 짚어 보세요. 녹이기 전에 캔 칸에 모아야 해요.', '다 마신 캔 → 캔 칸에 넣기 → 녹여 판 만들기 → 새 캔 차례예요.'],
                conclude: '제대로 분리배출하면 물건이 새 물건으로 다시 돌아와요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"교실 분리수거함에 잘못 들어간 물건이 있는지 함께 살펴볼까요?" 두세 명이 잘못 넣은 물건을 바른 칸으로 옮긴다. 출구 첫 문항을 틀린 학생에게는 물건을 두드리거나 구겨 보게 한다. 39차시부터 이 분리수거함 쓰레기를 직접 세어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어디에 넣을까?', slots: ['종이', '플라스틱', '캔'], cards: ['색종이 상자', '세제 통', '콜라 캔'] }, prompt: '재활용품을 종류대로 나누어 보세요.', target: { sort: { '종이': ['색종이 상자'], '플라스틱': ['세제 통'], '캔': ['콜라 캔'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '페트병을 분리배출하기 전에 할 일은 무엇인가요?', options: ['물로 헹궈요', '음료를 조금 남겨요', '종이와 함께 묶어요'], answer: 0, difficulty: 0.1, explain: '깨끗이 헹궈야 다시 쓰일 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 쓰이는 길',
      items: [
        { type: 'table', prompt: '우리 집 재활용품을 종류대로 쓰세요.', columns: ['종이', '플라스틱', '캔'], rows: 2 },
        { type: 'figure', wide: true, prompt: '페트병이 다시 쓰이는 차례를 생각하며 빈 자리에 쓰세요.', tool: 'lifecycle', figures: [{ options: { center: '페트병이 돌아와요', printCards: false, cards: ['다 마신 페트병', '분리배출', '공장', '새 가방'] }, state: { at: { '다 마신 페트병': 0 } }, caption: '' }], answer: '분리배출 → 공장 → 새 가방' },
        { type: 'check', prompt: '분리배출 전에 할 일에 모두 ✓ 하세요.', options: ['헹구기', '상표 떼기', '음료 남기기'] },
        { type: 'short', prompt: '재활용이 동그라미 길인 까닭을 쓰세요.' },
      ],
      easy: {
        note: '구기면 찢어지면 종이, 눌러도 다시 펴지면 플라스틱이에요.',
        items: [
          { type: 'choice', prompt: '종이에 ○ 하세요.', options: ['택배 상자', '생수병'], answer: '택배 상자' },
          { type: 'choice', prompt: '분리배출 전에 할 일에 ○ 하세요.', options: ['헹구기', '음료 남기기'], answer: '헹구기' },
          { type: 'draw', prompt: '페트병이 새 가방이 되는 길을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 줄어요. 맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 막히면 힌트를 한 단계씩 열어요.',
      challenge: '다시 쓰이는 길에 들어가지 않는 카드가 섞여 있어 남겨 두어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 우유갑·코팅된 종이를 종이에 넣는다 → 우유갑은 따로 모은다는 것만 짧게 알려 준다(오늘 카드에서는 뺐다). ② 분리배출이 끝이라고 여긴다 → 공장을 거쳐 새 물건이 되어 돌아오는 동그라미 길을 따라가 보게 한다. ③ 실물 재활용품을 만지기 꺼린다 → 깨끗이 씻어 말린 것만 쓰고, 날카로운 캔 뚜껑은 미리 뺀다. 생명 주기 판을 재활용 길에 빌려 써서 힌트는 손으로 썼다.',
  }));

  lessons.push(L(38, {
    title: '버릴 물건으로 다시 쓰는 작품 만들기',
    objective: '버리려던 물건 가운데 다시 쓸 수 있는 것을 고르고, 다시 쓰기 작품을 계획해 만들 수 있다.',
    illustration: ART('a pencil holder made from a paper roll, a plant pot made from a cut bottle and a robot made from small boxes, displayed on a classroom table', '다시 써요', [
      { motif: 'flower', x: 120, y: 226 }, { motif: 'star', x: 360, y: 96, s: 0.5 }, { motif: 'heart', x: 410, y: 212, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이 연필꽂이는 무엇으로 만들었을까요?" 휴지 심으로 만든 연필꽂이를 보여 준다. "분리배출은 공장에서 다시 쓰는 길이고, 다시 쓰기는 우리 손으로 바로 새 쓸모를 주는 길이에요." 시연 단추로 색종이 조각이 연필꽂이 모양으로 붙는 모습을 보여 준다. 가위·칼은 선생님이 미리 잘라 둔 재료만 쓴다.',
        student: '집에서 버리려던 물건을 다시 써 본 적이 있는지 떠올려 봐요.',
        demo: { tool: 'collage', options: { colors: ['갈색', '노랑'] }, state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 220, r: 90 }, { shape: 'star', color: '노랑', size: 's', x: 280, y: 200, r: 0 }] }, sequence: [] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 다시 쓸 수 있는 물건 고르기', minutes: 10, tool: 'mindmap',
            teacher: '"이 물건은 깨끗하고 튼튼해서 다시 쓸 수 있을까요?" 깨끗하지 않거나 위험한 것(음식이 묻은 것, 깨진 유리)은 다시 쓰지 않는다는 기준을 짚는다.',
            task: '다시 써서 작품을 만들 수 있는 물건만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '작품을 만들 때 다시 쓸 수 있는 물건만 골라 보세요.', toolOptions: { mode: 'pick', topic: '다시 쓸 수 있어요', cards: ['깨끗한 휴지 심', '씻어 말린 요구르트병', '깨진 유리컵', '먹다 남은 과자'] },
                target: { pick: ['깨끗한 휴지 심', '씻어 말린 요구르트병'] }, difficulty: 0.1,
                hints: ['물건마다 깨끗하고 다치지 않게 만질 수 있는지 따져요.', '고른 것 가운데 위험하거나 음식이 묻은 물건이 있는지 살펴봐요.', '휴지 심과 씻어 말린 요구르트병만 다시 써요.'] },
              { prompt: '다시 쓸 물건과 새로 생길 쓸모를 이어 보세요.', toolOptions: { mode: 'match', topic: '새 쓸모', slots: [{ id: 's1', label: '휴지 심' }, { id: 's2', label: '반으로 자른 페트병' }, { id: 's3', label: '작은 과자 상자' }], cards: ['연필꽂이', '새싹 화분', '지우개 보관함'] },
                target: { match: { s1: '연필꽂이', s2: '새싹 화분', s3: '지우개 보관함' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['연필꽂이', '새싹 화분', '지우개 보관함', '새 운동화'] } } } },
              { prompt: '다시 쓰기에 알맞은 생각을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 생각', cards: ['쓰고 싶은 쓸모를 먼저 정해요', '재료를 깨끗이 씻어 말려요', '멀쩡한 새 컵을 일부러 잘라요'] },
                target: { pick: ['쓰고 싶은 쓸모를 먼저 정해요', '재료를 깨끗이 씻어 말려요'] }, difficulty: 0.15,
                predict: { q: '작품을 만들려고 새 컵을 일부러 잘라도 될까요?', options: ['돼요', '안 돼요'], answer: 1 },
                conclude: '다시 쓰기는 버릴 물건에 새 쓸모를 주는 것이에요. 새 물건을 일부러 버리게 하면 안 돼요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 쓰기 작품 만들기', minutes: 18, tool: 'collage',
            teacher: '"화면에서 먼저 모양을 꾸며 보고, 그대로 실제 재료에 붙여 볼까요?" 화면 꾸미기(5분) 뒤 모둠마다 휴지 심·작은 상자에 색종이를 붙여 연필꽂이나 보관함을 만든다(12분). 완성품은 교실에서 바로 쓴다.',
            task: '색종이 조각으로 다시 쓰기 작품을 꾸며 봐요. 그리고 실제 휴지 심이나 상자로 작품을 만들어요.',
            levels: { easy: { shapes: ['rect', 'circle', 'star', 'heart'], colors: ['갈색', '노랑', '파랑', '분홍'] }, base: {}, challenge: {} },
            items: [
              { prompt: '휴지 심 연필꽂이를 꾸며요. 갈색 긴 네모 몸통을 한 개, 노랑 별을 두 개 이상 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'star', color: '노랑', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '휴지 심 연필꽂이를 꾸며요. 갈색 긴 네모 몸통을 한 개, 노랑 별을 두 개 이상, 파랑 동그라미를 세 개 이상 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'star', color: '노랑', min: 2 }, { shape: 'circle', color: '파랑', min: 3 }] } } } },
              { prompt: '페트병 새싹 화분을 꾸며요. 파랑 동그라미 물방울을 두 개 이상, 분홍 하트를 한 개 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', min: 2 }, { shape: 'heart', color: '분홍', n: 1 }] }, difficulty: 0.15 },
              { prompt: '실제 재료로 다시 쓰기 작품을 만들고, 해낸 것을 점검해 보세요.', target: { selfCheck: ['깨끗이 씻은 재료를 썼어요', '쓸모가 있는 작품을 만들었어요', '남은 조각을 종류대로 정리했어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"만든 작품을 교실 어디에서 쓸까요?" 작품을 쓸 자리에 둔다. 출구 첫 문항을 틀린 학생에게는 "그 물건을 만져도 다치지 않을까요?"라고 다시 묻는다. 33~38차시를 마치며, 다음 시간부터 우리 반 쓰레기를 종류별로 세어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '다시 쓸 수 있어요', cards: ['깨끗한 우유 상자', '빈 달걀판', '곰팡이 핀 빵', '깨진 거울'] }, prompt: '다시 써서 작품을 만들 수 있는 물건만 골라 보세요.', target: { pick: ['깨끗한 우유 상자', '빈 달걀판'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '다시 쓰기란 무엇일까요?', options: ['버릴 물건에 새 쓸모를 주는 것', '새 물건을 많이 사는 것', '물건을 아무 데나 버리는 것'], answer: 0, difficulty: 0.1, explain: '버리려던 물건을 연필꽂이처럼 새로 쓰면 쓰레기가 줄어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 쓰기 작품',
      items: [
        { type: 'table', prompt: '내 다시 쓰기 작품 계획을 쓰세요.', columns: ['칸', '쓸 내용'], cells: [['다시 쓸 물건', ''], ['새 쓸모', ''], ['필요한 재료', '']] },
        { type: 'draw', prompt: '만든 작품을 그리세요.' },
        { type: 'choice', prompt: '다시 쓸 수 없는 물건에 ○ 하세요.', options: ['휴지 심', '깨진 유리컵', '과자 상자'], answer: '깨진 유리컵' },
        { type: 'short', prompt: '집에서 다시 써 보고 싶은 물건을 쓰세요.' },
      ],
      easy: {
        note: '깨끗하고 다치지 않는 물건만 다시 써요.',
        items: [
          { type: 'choice', prompt: '다시 쓸 수 있는 물건에 ○ 하세요.', options: ['휴지 심', '깨진 유리컵'], answer: '휴지 심' },
          { type: 'short', prompt: '내가 만든 작품의 이름을 쓰세요.' },
          { type: 'draw', prompt: '만든 작품을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기 칸에 초록 테두리가 생겨요. 꾸미기는 모양 네 가지·색 네 가지에서 골라요.',
      base: '조건에 맞게 꾸민 뒤 실제 작품을 만들어 스스로 점검해요.',
      challenge: '쓸모를 만들 수 없는 카드가 섞여 있어요. 꾸미기 조건이 하나 더 붙어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다시 쓰려고 멀쩡한 새 물건을 자르려 한다 → 다시 쓰기는 버릴 물건이 재료라는 것을 짚는다. ② 장식에만 몰두해 쓸모를 잊는다 → "이 작품을 어디에 쓸까요?"라고 묻는다. ③ 재료가 모자란다 → 일주일 전 가정에 깨끗한 휴지 심·작은 상자를 모아 달라고 안내한다. 페트병은 미리 반으로 잘라 자른 면에 테이프를 감아 둔다.',
  }));

  // ───────────────────────── 39~43차시: 교실·급식·집의 쓰레기를 세어 읽기(관찰과 자료 읽기) ─────────────────────────

  // 쓰레기를 직접 만지거나 분리배출장에 가는 차시의 안전 약속
  var TRASH = ['쓰레기는 비닐장갑을 끼고 만져요.', '뾰족하거나 깨진 것이 보이면 만지지 말고 선생님께 알려요.', '다 센 뒤에는 장갑을 벗고 손을 비누로 씻어요.'];
  var ONE = function (unit) { return [{ value: 1, name: '1' + unit }]; };

  lessons.push(L(39, {
    title: '교실 휴지통 쓰레기를 종류별로 세어 표에 적기',
    objective: '교실에서 하루 동안 나온 쓰레기를 종이·플라스틱·비닐로 나누어 세어 표에 적고, 가장 많이 나온 종류를 찾을 수 있다.',
    illustration: ART('children in gloves sorting classroom trash into three paper trays for paper, plastic and vinyl, counting with their fingers', '세어 보면 알아요', [
      { motif: 'star', x: 120, y: 100, s: 0.5 }, { motif: 'house', x: 400, y: 212 }, { motif: 'leaf', x: 90, y: 230 }]),
    safety: TRASH,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"34차시에 별표한 물음이 있었지요. \'우리 반 휴지통에는 무엇이 가장 많을까?\' 오늘은 이 물음의 답을 직접 세어서 찾아요." 어제 하루 모아 둔 교실 쓰레기 봉투를 보여 준다. "눈으로만 보면 무엇이 가장 많을 것 같나요?" 두세 명의 어림을 칠판 구석에 적어 둔다. 시연 단추로 쓰레기 카드가 종이·플라스틱·비닐 칸에 나뉘는 모습을 보여 준다.',
        student: '휴지통에 무엇이 가장 많을지 어림해서 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '무엇으로 만들었을까?', slots: ['종이', '플라스틱', '비닐'], cards: ['찢어진 알림장', '빈 물약 컵', '김 봉지'], shuffle: false }, sequence: [{ sort: { '종이': ['찢어진 알림장'], '플라스틱': ['빈 물약 컵'], '비닐': ['김 봉지'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 쓰레기 종류 나누기', minutes: 11, tool: 'mindmap',
            teacher: '"이 쓰레기는 무엇으로 만들었나요? 종이는 쉽게 찢어지고, 플라스틱은 딱딱하고, 비닐은 얇고 바스락거려요." 깨끗한 실물(이면지, 요구르트 병, 과자 봉지)을 하나씩 들어 보이며 만져 보게 한다. 귤껍질처럼 먹고 남은 것은 세 칸 어디에도 들어가지 않는다는 것을 짚는다.',
            task: '쓰레기 카드를 무엇으로 만들었는지에 따라 종이, 플라스틱, 비닐로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실 쓰레기 카드를 종이·플라스틱·비닐로 나누어 보세요.', toolOptions: { topic: '무엇으로 만들었을까?', slots: ['종이', '플라스틱', '비닐'], cards: ['구겨진 이면지', '요구르트 병', '과자 봉지'] },
                target: { sort: { '종이': ['구겨진 이면지'], '플라스틱': ['요구르트 병'], '비닐': ['과자 봉지'] } }, difficulty: 0.1,
                hints: ['카드마다 쉽게 찢어지는지, 딱딱한지, 얇고 바스락거리는지 떠올려요.', '칸이 어긋난 카드가 있어요. 그 물건을 손으로 구기면 어떻게 될지 떠올려 봐요.', '이면지는 종이, 요구르트 병은 플라스틱, 과자 봉지는 비닐이에요.'],
                levels: { challenge: { prompt: '교실 쓰레기 카드를 나누어 보세요. 세 칸 어디에도 들어가지 않는 쓰레기는 남겨요.', toolOptions: { cards: ['구겨진 이면지', '요구르트 병', '과자 봉지', '먹다 남은 귤껍질'] } } } },
              { prompt: '쓰레기 카드가 더 많아요. 무엇으로 만들었는지에 따라 나누어 보세요.', toolOptions: { topic: '무엇으로 만들었을까?', slots: ['종이', '플라스틱', '비닐'], cards: ['색종이 자투리', '다 쓴 공책 한 장', '플라스틱 숟가락', '부러진 플라스틱 자', '사탕 비닐 껍질', '빵 봉지'] },
                target: { sort: { '종이': ['색종이 자투리', '다 쓴 공책 한 장'], '플라스틱': ['플라스틱 숟가락', '부러진 플라스틱 자'], '비닐': ['사탕 비닐 껍질', '빵 봉지'] } }, difficulty: 0.2,
                hints: ['카드마다 쉽게 찢어지는지, 딱딱한지, 얇고 바스락거리는지 떠올려요.', '칸이 어긋난 카드를 짚어 보세요. 그 물건이 찢어지는지, 딱딱한지 다시 따져요.', '색종이·공책은 종이, 숟가락·자는 플라스틱, 사탕 껍질·빵 봉지는 비닐이에요.'],
                levels: {
                  easy: { prompt: '쓰레기 카드 세 장을 무엇으로 만들었는지에 따라 나누어 보세요.', toolOptions: { cards: ['색종이 자투리', '플라스틱 숟가락', '빵 봉지'] }, target: { sort: { '종이': ['색종이 자투리'], '플라스틱': ['플라스틱 숟가락'], '비닐': ['빵 봉지'] } } },
                  challenge: { prompt: '쓰레기 카드를 나누어 보세요. 세 칸 어디에도 들어가지 않는 쓰레기는 남겨요.', toolOptions: { cards: ['색종이 자투리', '다 쓴 공책 한 장', '플라스틱 숟가락', '부러진 플라스틱 자', '사탕 비닐 껍질', '빵 봉지', '먹다 남은 빵 조각'] } },
                } },
              { prompt: '쓰레기를 세어 보면 좋은 점만 골라 보세요.', toolOptions: { mode: 'pick', topic: '세어 보면 좋아요', cards: ['무엇이 가장 많이 나오는지 알 수 있어요', '나중에 줄었는지 견주어 볼 수 있어요', '세기만 하면 쓰레기가 없어져요', '세면 휴지통이 저절로 깨끗해져요'] },
                target: { pick: ['무엇이 가장 많이 나오는지 알 수 있어요', '나중에 줄었는지 견주어 볼 수 있어요'] }, difficulty: 0.15,
                hints: ['세어 본 수로 무엇을 알게 되는지 생각해요. 세는 것만으로 쓰레기가 바뀌는지도 따져요.', '고른 것 가운데 세기만 해도 저절로 일어난다는 말이 있는지 살펴봐요.', '가장 많은 것을 알 수 있다는 말과 나중에 견주어 볼 수 있다는 말이에요.'],
                predict: { q: '쓰레기를 꼭 세어 봐야 할까요?', options: ['필요 없어요', '세어야 알아요'], answer: 1 },
                conclude: '세어 보면 무엇이 많은지 알고, 무엇부터 줄일지 정할 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 센 수를 표와 그림그래프로', minutes: 16, tool: 'chart',
            teacher: '모둠마다 비닐장갑을 끼고 쓰레기를 종이·플라스틱·비닐 쟁반에 나눈 뒤 하나씩 옆으로 옮기며 센다. "센 것은 옆으로 옮겨야 두 번 세지 않아요." 센 수를 활동지 표에 적게 한다. 그다음 화면에서 2반의 표를 그림그래프로 옮긴다. "그림 하나가 쓰레기 한 개예요. 표의 수만큼 그림을 놓았는지 손가락으로 짚어 보세요." 2반·3반 수는 지어낸 예시라고 알려 준다.',
            task: '모둠에서 쓰레기를 나누어 세고 활동지 표에 적어요. 그다음 표를 보고 그림그래프를 완성하고 가장 많은 종류를 찾아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '모둠 친구와 장갑을 끼고 쓰레기를 종류별로 나누어 세어요. 센 수를 활동지 표에 적고 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '2반이 센 쓰레기 표를 보고 그림그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '2반 하루 쓰레기', data: [['종이', 9], ['플라스틱', 4], ['비닐', 6]], unit: '개', xLabel: '종류', yLabel: '쓰레기 수', icon: 'square', icons: ONE('개') },
                target: { build: true }, difficulty: 0.15,
                levels: {
                  easy: { toolOptions: { given: [0] } },
                  challenge: { prompt: '2반이 센 쓰레기 표를 보고 그림그래프를 완성해 보세요. 종류가 넷이에요.', toolOptions: { data: [['종이', 9], ['플라스틱', 4], ['비닐', 6], ['캔', 2]] } },
                } },
              { prompt: '3반 그림그래프를 보고 가장 많이 나온 쓰레기를 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '3반 하루 쓰레기', data: [['종이', 5], ['플라스틱', 8], ['비닐', 3]], unit: '개', xLabel: '종류', icon: 'square', icons: ONE('개'), choices: ['종이', '플라스틱', '비닐'], question: '가장 많이 나온 쓰레기는?', why: ['종이보다 그림이 더 많은 줄이 있어요.', '', '비닐 줄은 그림이 가장 짧아요.'], explain: '플라스틱 줄의 그림이 8개로 가장 길어요.' },
                target: { pick: 1 }, difficulty: 0.1,
                levels: { easy: { toolOptions: { showTable: true } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '모둠마다 센 수를 칠판 표에 모아 적는다. "처음에 어림한 것과 세어 본 것이 같았나요?" 어림과 다른 모둠이 있으면 세어 보아야 알 수 있다는 것을 짚는다. 출구 첫 문항을 틀린 학생에게는 그림을 손가락으로 짚으며 세게 한다. 다음 시간에는 급식에서 남는 반찬을 세어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '4반 하루 쓰레기', data: [['종이', 7], ['플라스틱', 2], ['비닐', 5]], unit: '개', xLabel: '종류', icon: 'square', icons: ONE('개'), choices: ['종이', '플라스틱', '비닐'], question: '가장 적게 나온 쓰레기는?', explain: '플라스틱 줄의 그림이 2개로 가장 짧아요.' }, prompt: '4반 그림그래프를 보고 가장 적게 나온 쓰레기를 골라 보세요.', target: { pick: 1 }, difficulty: 0.15 },
          { type: 'choice', prompt: '쓰레기를 세어 보아야 하는 까닭으로 알맞은 것은 무엇인가요?', options: ['무엇이 가장 많은지 알 수 있어요', '세면 쓰레기가 사라져요'], answer: 0, difficulty: 0.1, explain: '세어 보면 무엇이 많은지 알고, 무엇부터 줄일지 정할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 쓰레기 세기',
      items: [
        { type: 'table', prompt: '우리 모둠이 센 쓰레기 수를 쓰세요.', columns: ['종류', '센 수'], cells: [['종이', ''], ['플라스틱', ''], ['비닐', '']] },
        { type: 'short', prompt: '우리 모둠에서 가장 많이 나온 쓰레기를 쓰세요.' },
        { type: 'figure', wide: true, prompt: '그림그래프를 보고 종류마다 쓰레기 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '5반 하루 쓰레기', data: [['종이', 6], ['플라스틱', 3], ['비닐', 4]], unit: '개', icon: 'square', icons: ONE('개') }, caption: '종이 (   )개, 플라스틱 (   )개, 비닐 (   )개' }], answer: '종이 6개, 플라스틱 3개, 비닐 4개' },
        { type: 'choice', prompt: '비닐 쓰레기에 ○ 하세요.', options: ['빵 봉지', '요구르트 병', '이면지'], answer: '빵 봉지' },
        { type: 'short', prompt: '처음에 어림한 것과 세어 본 결과가 같았나요? 쓰세요.' },
      ],
      easy: {
        note: '센 것은 옆으로 옮겨요. 그림 하나가 쓰레기 한 개예요.',
        items: [
          { type: 'table', prompt: '우리 모둠이 센 쓰레기 수를 쓰세요.', columns: ['종류', '센 수'], cells: [['종이', ''], ['플라스틱', ''], ['비닐', '']] },
          { type: 'choice', prompt: '종이 쓰레기에 ○ 하세요.', options: ['구겨진 이면지', '과자 봉지'], answer: '구겨진 이면지' },
          { type: 'figure', wide: true, prompt: '그림을 세어 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '쓰레기 수', data: [['종이', 4], ['비닐', 2]], unit: '개', icon: 'square', icons: ONE('개') }, caption: '종이 (   )개, 비닐 (   )개' }], answer: '종이 4개, 비닐 2개' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 세 장으로 줄고 맞는 칸에 초록 테두리가 생겨요. 그림그래프는 한 줄이 미리 그려져 있고, 읽기 문항에는 표도 함께 보여요.',
      base: '모두 놓은 뒤 확인을 눌러요. 표의 수만큼 그림을 놓고 줄 길이로 가장 많은 것을 찾아요.',
      challenge: '세 칸 어디에도 들어가지 않는 함정 카드가 있어요. 그림그래프는 종류가 넷이에요.',
    },
    teacherNotes: '준비: 전날 하루 동안 교실 휴지통 쓰레기를 따로 모아 두고, 음식물·코 푼 휴지·뾰족한 것은 미리 빼 둔다. 모둠마다 비닐장갑과 쟁반 세 개를 준비한다. 자주 보이는 어려움: ① 센 것을 또 센다 → 하나씩 옆 쟁반으로 옮기며 세게 한다. ② 어림한 수를 그대로 적는다 → "세어 보지 않으면 알 수 없어요"라고 짚는다. ③ 쓰레기는 세어 볼 필요가 없다고 여긴다(이 차시의 핵심 오개념) → 세어 본 수로 무엇부터 줄일지 정할 수 있다는 것을 칠판 표로 보여 준다.',
  }));

  lessons.push(L(40, {
    title: '급식에서 남은 반찬 세어 그림그래프 그리기',
    objective: '급식에서 반찬을 남긴 친구 수를 적은 표를 그림그래프로 나타내고, 가장 많이 남은 반찬과 두 반찬의 차이를 읽을 수 있다.',
    illustration: ART('a school lunch tray made of paper with rice, soup and side dishes, next to a picture graph of little person icons on a board', '어떤 반찬이 남을까요?', [
      { motif: 'sun', x: 120, y: 100, s: 0.5 }, { motif: 'flower', x: 380, y: 226 }, { motif: 'leaf', x: 90, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"남긴 반찬은 어디로 갈까요? 음식물 쓰레기도 쓰레기예요." 39차시에 쓰레기를 종류별로 나누고 옮기며 센 방법을 떠올리게 한다. "어제 선생님이 잔반통 앞에서 반찬마다 남긴 그릇 수를 세어 두었어요. 누가 남겼는지는 적지 않았어요." 시연 단추로 표의 수만큼 그림이 쌓이는 모습을 보여 준다.',
        student: '우리 반에서 가장 많이 남는 반찬이 무엇일지 어림해 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '반찬을 남긴 친구', data: [['밥', 2], ['국', 4]], unit: '명', xLabel: '반찬', yLabel: '친구 수', icon: 'person', icons: ONE('명'), showTable: true }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 표를 보고 그림그래프 그리기', minutes: 14, tool: 'chart',
            teacher: '"표에서 한 줄을 읽고, 그 수만큼 그림을 놓은 다음 다음 줄로 가요." 그림을 다 놓은 뒤 표의 수와 그림 수를 하나씩 짚어 견주게 한다. 차이를 묻는 문항에서는 "두 줄의 그림을 하나씩 짝지어 보고, 짝이 없는 그림을 세어 보세요." 큰 수를 그대로 답하는 학생에게는 "몇 명이에요?"가 아니라 "몇 명 더 많아요?"라고 다시 읽어 준다.',
            task: '반찬을 남긴 친구 수 표를 보고 그림그래프를 완성하고, 두 반찬의 차이를 읽어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '1반 표를 보고 반찬을 남긴 친구 그림그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '1반 반찬을 남긴 친구', data: [['밥', 3], ['국', 5], ['김치', 8]], unit: '명', xLabel: '반찬', yLabel: '친구 수', icon: 'person', icons: ONE('명') },
                target: { build: true }, difficulty: 0.15,
                levels: {
                  easy: { toolOptions: { given: [0] } },
                  challenge: { prompt: '1반 표를 보고 반찬을 남긴 친구 그림그래프를 완성해 보세요. 반찬이 넷이에요.', toolOptions: { data: [['밥', 3], ['국', 5], ['김치', 8], ['나물', 6]] } },
                } },
              { prompt: '2반 표를 보고 그림그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '2반 반찬을 남긴 친구', data: [['멸치볶음', 7], ['미역국', 2], ['깍두기', 5], ['잡곡밥', 4]], unit: '명', xLabel: '반찬', yLabel: '친구 수', icon: 'person', icons: ONE('명') },
                target: { build: true }, difficulty: 0.2,
                levels: { easy: { toolOptions: { given: [0, 1] } } } },
              { prompt: '그래프를 보고, 김치를 남긴 친구가 밥을 남긴 친구보다 몇 명 더 많은지 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '3반 반찬을 남긴 친구', data: [['밥', 2], ['국', 4], ['김치', 9]], unit: '명', xLabel: '반찬', icon: 'person', icons: ONE('명'), question: '김치는 밥보다 몇 명 더 많나요?', explain: '김치 9명에서 밥 2명을 빼면 7명이에요.' },
                target: { value: 7 }, difficulty: 0.3, hints: ['두 줄의 그림을 하나씩 짝지어 보고, 짝이 없는 그림을 세어요.', '두 줄을 각각 다시 세어 보세요. 긴 줄에서 짝이 없는 그림만 세어요.'],
                levels: { easy: { prompt: '그래프를 보고, 김치를 남긴 친구가 밥을 남긴 친구보다 몇 명 더 많은지 써 보세요. 줄이 두 개예요.', toolOptions: { data: [['밥', 2], ['김치', 5]], explain: '김치 5명에서 밥 2명을 빼면 3명이에요.' }, target: { value: 3 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 남은 반찬 읽기', minutes: 13, tool: 'chart',
            teacher: '선생님이 어제 잔반통 앞에서 센 우리 반 표를 칠판에 붙인다. 모둠마다 붙임딱지로 칠판 그림그래프를 함께 만든다. "남긴 친구를 찾는 것이 아니에요. 어떤 반찬이 많이 남는지 알아보는 거예요." 화면 문항은 다른 반의 예시 그래프라고 알려 준다.',
            task: '모둠이 함께 우리 반 그림그래프를 붙임딱지로 만들고, 화면의 그래프를 읽어 물음에 답해요.',
            levels: { easy: { showTable: true }, base: {}, challenge: {} },
            items: [
              { prompt: '선생님이 센 우리 반 표를 보고, 모둠 친구와 붙임딱지로 칠판에 그림그래프를 만들어요. 다 만들면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '4반 그림그래프를 보고 가장 적게 남은 반찬을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '4반 반찬을 남긴 친구', data: [['콩밥', 6], ['된장국', 4], ['시금치', 9], ['달걀말이', 1]], unit: '명', xLabel: '반찬', icon: 'person', icons: ONE('명'), choices: ['콩밥', '된장국', '시금치', '달걀말이'], question: '가장 적게 남은 반찬은?', why: ['콩밥은 그림이 꽤 많아요.', '된장국보다 그림이 더 적은 줄이 있어요.', '시금치 줄은 그림이 가장 길어요.', ''], explain: '달걀말이 줄의 그림이 1개로 가장 짧아요.' },
                target: { pick: 3 }, difficulty: 0.15 },
              { prompt: '5반 그림그래프를 보고 표의 빈칸에 친구 수를 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '5반 반찬을 남긴 친구', data: [['밥', 4], ['국', 6], ['나물', 8]], unit: '명', xLabel: '반찬', icon: 'person', icons: ONE('명'), tableBlanks: [0, 1, 2] },
                target: { table: true }, difficulty: 0.2,
                predict: { q: '나물이 가장 많이 남는다면 무엇부터 해 볼까요?', options: ['나물 줄이기', '밥 줄이기'], answer: 0 },
                conclude: '가장 많이 남는 반찬을 알면, 그 반찬을 먹을 만큼만 받는 일부터 해 볼 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 반 칠판 그래프에서 가장 긴 줄은 어느 반찬인가요?" 함께 읽고 그 까닭을 두세 명에게 묻는다(맵다, 양이 많다 등). 남긴 친구를 탓하는 말이 나오면 바로 멈춘다. 출구 첫 문항을 틀린 학생에게는 줄 길이를 먼저 견주게 한다. 다음 시간에는 집에서 모은 재활용품을 센다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '6반 반찬을 남긴 친구', data: [['밥', 3], ['생선', 7], ['오이무침', 5]], unit: '명', xLabel: '반찬', icon: 'person', icons: ONE('명'), choices: ['밥', '생선', '오이무침'], question: '가장 많이 남은 반찬은?', explain: '생선 줄의 그림이 7개로 가장 길어요.' }, prompt: '6반 그림그래프를 보고 가장 많이 남은 반찬을 골라 보세요.', target: { pick: 1 }, difficulty: 0.15 },
          { type: 'choice', prompt: '남은 반찬을 세어 보면 무엇을 할 수 있나요?', options: ['가장 많이 남는 반찬부터 줄일 방법을 찾아요', '세어 봐도 아무 쓸모가 없어요'], answer: 0, difficulty: 0.1, explain: '무엇이 가장 많이 남는지 알면 그것부터 줄일 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '남은 반찬 그림그래프',
      items: [
        { type: 'table', prompt: '칠판의 우리 반 표를 옮겨 쓰세요.', columns: ['반찬', '남긴 친구 수'], rows: 4 },
        { type: 'figure', wide: true, prompt: '그림그래프를 보고 반찬마다 남긴 친구 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '7반 반찬을 남긴 친구', data: [['밥', 2], ['국', 6], ['버섯', 8]], unit: '명', icon: 'person', icons: ONE('명') }, caption: '밥 (   )명, 국 (   )명, 버섯 (   )명' }], answer: '밥 2명, 국 6명, 버섯 8명' },
        { type: 'blank', prompt: '위 그래프에서 버섯을 남긴 친구는 밥을 남긴 친구보다 (   )명 더 많아요.', answer: '6' },
        { type: 'short', prompt: '우리 반에서 가장 많이 남은 반찬은 무엇이고, 왜 남았을지 쓰세요.' },
      ],
      easy: {
        note: '그림 하나가 친구 한 명이에요. 하나씩 짚으며 세어요.',
        items: [
          { type: 'figure', wide: true, prompt: '그림을 세어 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '남긴 친구', data: [['밥', 1], ['국', 4]], unit: '명', icon: 'person', icons: ONE('명') }, caption: '밥 (   )명, 국 (   )명' }], answer: '밥 1명, 국 4명' },
          { type: 'choice', prompt: '위 그래프에서 더 많이 남은 것에 ○ 하세요.', options: ['밥', '국'], answer: '국' },
          { type: 'short', prompt: '내가 자주 남기는 반찬을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그림그래프에 한두 줄이 미리 그려져 있어요. 차이 문항은 줄이 두 개이고, 읽기 문항에는 표도 함께 보여요.',
      base: '표의 수만큼 그림을 놓고, 두 줄의 그림을 짝지어 차이를 읽어요.',
      challenge: '반찬이 넷인 그래프를 그려요. 차이를 읽은 뒤 짝에게 "어떻게 셌는지" 말해요.',
    },
    teacherNotes: '준비: 전날 급식 시간에 잔반통 앞에서 반찬마다 남긴 그릇 수만 세어 표로 만든다(누가 남겼는지는 적지 않는다). 알레르기·종교 때문에 먹지 않는 반찬은 표에서 뺀다. 자주 보이는 어려움: ① 남긴 친구를 찾아 탓한다 → 사람이 아니라 반찬을 세는 것이라고 짚는다. ② 차이를 구할 때 큰 수를 그대로 답한다 → 두 줄의 그림을 짝지어 짝이 없는 그림만 세게 한다. ③ 쓰레기는 세어 볼 필요가 없다고 여긴다 → 가장 많이 남는 반찬을 알면 무엇부터 줄일지 정할 수 있다고 말한다.',
  }));

  lessons.push(L(41, {
    title: '집에서 모은 재활용품을 바르게 세고 그래프 읽기',
    objective: '물건을 바르게 세는 방법과 차례를 고르고, 가족이 일주일 동안 모은 재활용품 그림그래프를 읽어 가장 많은 것과 두 종류의 차이를 말할 수 있다.',
    illustration: ART('a family veranda with paper boxes, plastic bottles, cans and vinyl bags stacked in neat rows, a child counting them on a clipboard', '우리 집 재활용품', [
      { motif: 'house', x: 400, y: 212 }, { motif: 'star', x: 120, y: 100, s: 0.5 }, { motif: 'leaf', x: 90, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"준호가 집 베란다의 페트병을 세었는데, 두 번 세니까 수가 달랐어요. 왜 그랬을까요?" 생각을 두세 명에게 듣는다. "오늘은 바르게 세는 방법을 정하고, 집에서 모은 재활용품 그래프를 읽어요." 시연 단추로 세는 방법 가운데 알맞은 것이 표시되는 모습을 보여 준다.',
        student: '물건을 셀 때 수가 헷갈렸던 적을 짝에게 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '바르게 세기', items: [{ id: 'move', text: '센 것은 옆으로 옮겨요' }, { id: 'guess', text: '눈으로 대충 보고 적어요' }] }, sequence: [{ checklist: ['move'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 바르게 세는 방법과 차례', minutes: 12, tool: 'kitchen',
            teacher: '"어떻게 하면 같은 것을 두 번 세지 않을까요?" 연필 열 자루를 책상에 흩어 놓고, 옮기지 않고 세는 것과 옮기며 세는 것을 두 학생이 해 보게 한다. 세는 차례를 놓을 때는 "나누지 않고 세면 무엇이 몇 개인지 알 수 있을까요?"라고 묻는다.',
            task: '바르게 세는 방법을 골라 표시하고, 세어 기록하는 차례대로 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '바르게 세는 방법만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '바르게 세기', items: [{ id: 'move', text: '센 것은 옆으로 옮겨 놓아요' }, { id: 'one', text: '한 종류씩 따로 세어요' }, { id: 'guess', text: '눈으로 대충 보고 적어요' }, { id: 'twice', text: '아까 센 것을 또 세어요' }] },
                target: { checklist: ['move', 'one'] }, difficulty: 0.1,
                hints: ['방법마다 같은 것을 두 번 세거나 빠뜨리지 않게 해 주는지 따져요.', '고른 것 가운데 수가 틀리게 될 수 있는 방법이 있는지 살펴봐요.', '옮겨 놓기와 한 종류씩 세기, 이 두 가지가 바르게 세는 방법이에요.'] },
              { prompt: '재활용품을 세어 기록하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'sort', text: '종류별로 나누어 놓아요' }, { id: 'count', text: '하나씩 옮기며 세어요' }, { id: 'table', text: '센 수를 표에 적어요' }, { id: 'graph', text: '표를 보고 그래프를 그려요' }] },
                target: { order: ['sort', 'count', 'table', 'graph'] }, difficulty: 0.2,
                hints: ['무엇을 먼저 해야 다음 일을 할 수 있는지 따져요. 표가 없으면 그래프를 그릴 수 있을까요?', '자리가 어긋난 카드가 있어요. 세기 전에 먼저 해 두어야 할 일이 무엇인지 생각해요.', '나누기 → 옮기며 세기 → 표에 적기 → 그래프 그리기 차례예요.'],
                levels: { easy: { prompt: '재활용품을 세어 기록하는 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { cards: [{ id: 'sort', text: '종류별로 나누어 놓아요' }, { id: 'count', text: '하나씩 옮기며 세어요' }, { id: 'table', text: '센 수를 표에 적어요' }] }, target: { order: ['sort', 'count', 'table'] } } } },
              { prompt: '집 기록표에 꼭 적어야 할 것만 골라 표시해 보세요.', toolOptions: { mode: 'checklist', title: '재활용품 기록표', items: [{ id: 'day', text: '센 날짜' }, { id: 'kind', text: '재활용품 종류' }, { id: 'num', text: '센 수' }, { id: 'brand', text: '과자 이름' }, { id: 'color', text: '페트병 뚜껑 색' }] },
                target: { checklist: ['day', 'kind', 'num'] }, difficulty: 0.2,
                hints: ['나중에 "무엇이 며칠에 몇 개"였는지 알려면 무엇이 있어야 하는지 따져요.', '고른 것 가운데 몇 개인지 아는 데 쓰이지 않는 것이 있는지 살펴봐요.', '날짜, 종류, 센 수 세 가지예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 집 재활용품 그래프 읽기', minutes: 15, tool: 'chart',
            teacher: '"준호네가 일주일 동안 모은 재활용품이에요. 무엇이 가장 많나요? 왜 그럴까요?" 읽은 뒤 까닭을 짐작하게 하되, 그래프만으로는 까닭을 알 수 없다는 것도 짚는다. 끝에 사흘 동안 집에서 재활용품을 세어 올 기록표(활동지)를 나누어 주고, 누구와 셀지 정하게 한다.',
            task: '가족의 재활용품 그림그래프를 읽고 물음에 답해요. 그리고 집에서 셀 기록표를 받아요.',
            levels: { easy: { showTable: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호네 그래프를 보고 일주일 동안 가장 많이 모은 재활용품을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '준호네 일주일 재활용품', data: [['종이 상자', 6], ['페트병', 11], ['캔', 4], ['비닐', 8]], unit: '개', xLabel: '종류', icon: 'square', icons: ONE('개'), choices: ['종이 상자', '페트병', '캔', '비닐'], question: '가장 많이 모은 것은?', why: ['종이 상자보다 그림이 더 많은 줄이 있어요.', '', '캔 줄은 그림이 가장 짧아요.', '비닐보다 그림이 더 많은 줄이 있어요.'], explain: '페트병 줄의 그림이 11개로 가장 길어요.' },
                target: { pick: 1 }, difficulty: 0.15 },
              { prompt: '준호네 그래프에서 비닐은 캔보다 몇 개 더 많은지 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '준호네 일주일 재활용품', data: [['종이 상자', 6], ['페트병', 11], ['캔', 4], ['비닐', 8]], unit: '개', xLabel: '종류', icon: 'square', icons: ONE('개'), question: '비닐은 캔보다 몇 개 더 많나요?', explain: '비닐 8개에서 캔 4개를 빼면 4개예요.' },
                target: { value: 4 }, difficulty: 0.3, hints: ['두 줄의 그림을 하나씩 짝지어 보고, 짝이 없는 그림을 세어요.', '두 줄을 각각 다시 세어 보세요. 긴 줄에서 짝이 없는 그림만 세어요.'], },
              { prompt: '서아네 그래프를 보고 가장 적게 모은 재활용품을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '서아네 일주일 재활용품', data: [['종이 상자', 9], ['페트병', 5], ['캔', 3], ['비닐', 7]], unit: '개', xLabel: '종류', icon: 'square', icons: ONE('개'), choices: ['종이 상자', '페트병', '캔', '비닐'], question: '가장 적게 모은 것은?', why: ['종이 상자 줄은 그림이 가장 길어요.', '페트병보다 그림이 더 적은 줄이 있어요.', '', '비닐은 그림이 꽤 많아요.'], explain: '캔 줄의 그림이 3개로 가장 짧아요.' },
                target: { pick: 2 }, difficulty: 0.15,
                predict: { q: '두 집에서 가장 많이 모은 것이 같을까요?', options: ['같아요', '달라요'], answer: 1 },
                conclude: '집마다 많이 나오는 재활용품이 달라요. 그래서 우리 집을 직접 세어 봐야 알아요.' },
              { prompt: '집에서 사흘 동안 셀 기록표를 받고, 누구와 함께 셀지 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"준호네와 서아네는 많이 모은 것이 같았나요?" 집마다 다르다는 것을 짚고, 우리 집은 세어 보아야 안다고 말한다. 출구 첫 문항을 틀린 학생에게는 두 줄의 그림을 짝지어 짝 없는 그림을 세게 한다. 사흘 뒤 기록표를 가져오면 43차시 전에 칠판에 모은다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '하준네 일주일 재활용품', data: [['종이 상자', 5], ['페트병', 9], ['캔', 2]], unit: '개', xLabel: '종류', icon: 'square', icons: ONE('개'), question: '페트병은 종이 상자보다 몇 개 더 많나요?', explain: '페트병 9개에서 종이 상자 5개를 빼면 4개예요.' }, prompt: '하준네 그래프에서 페트병은 종이 상자보다 몇 개 더 많은지 써 보세요.', target: { value: 4 }, difficulty: 0.3 },
          { type: 'choice', prompt: '같은 것을 두 번 세지 않으려면 어떻게 할까요?', options: ['센 것은 옆으로 옮겨요', '눈으로 대충 보고 적어요', '빨리 소리 내어 세어요'], answer: 0, difficulty: 0.1, explain: '센 것을 옆으로 옮겨 두면 다시 세지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 집 재활용품 기록표',
      items: [
        { type: 'table', prompt: '집에서 사흘 동안 모은 재활용품을 세어 쓰세요.', columns: ['종류', '첫째 날', '둘째 날', '셋째 날'], cells: [['종이 상자', '', '', ''], ['페트병', '', '', ''], ['캔', '', '', ''], ['비닐', '', '', '']] },
        { type: 'check', prompt: '바르게 세는 방법에 모두 ✓ 하세요.', options: ['센 것은 옆으로 옮겨요', '한 종류씩 따로 세어요', '대충 보고 적어요'] },
        { type: 'figure', wide: true, prompt: '그림그래프를 보고 종류마다 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '민지네 재활용품', data: [['종이 상자', 7], ['페트병', 4], ['캔', 5]], unit: '개', icon: 'square', icons: ONE('개') }, caption: '종이 상자 (   )개, 페트병 (   )개, 캔 (   )개' }], answer: '종이 상자 7개, 페트병 4개, 캔 5개' },
        { type: 'short', prompt: '사흘 동안 우리 집에서 가장 많이 나온 재활용품을 쓰세요.' },
      ],
      easy: {
        note: '종류별로 나누고, 센 것은 옆으로 옮겨요.',
        items: [
          { type: 'table', prompt: '집에서 모은 재활용품을 세어 쓰세요.', columns: ['종류', '센 수'], cells: [['종이 상자', ''], ['페트병', ''], ['캔', '']] },
          { type: 'choice', prompt: '바르게 세는 방법에 ○ 하세요.', options: ['센 것은 옆으로 옮겨요', '대충 보고 적어요'], answer: '센 것은 옆으로 옮겨요' },
          { type: 'short', prompt: '가장 많이 나온 재활용품을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기 칸에 초록 테두리가 생기고, 차례 카드는 세 장이에요. 그래프 읽기 문항에는 표도 함께 보여요.',
      base: '바르게 세는 방법과 차례를 정하고, 그래프를 읽어 가장 많은 것과 차이를 말해요.',
      challenge: '그래프를 읽은 뒤 두 집의 그래프를 견주어 다른 점을 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 셀 때마다 수가 다르다 → 센 것은 옆으로 옮기고, 한 종류씩 세게 한다. ② 그래프만 보고 까닭(왜 페트병이 많은지)을 안다고 말한다 → 그래프는 수만 알려 주고 까닭은 가족에게 여쭤봐야 한다고 짚는다. ③ 집 기록을 부담스러워한다 → 사흘 가운데 하루만 적어도 괜찮다고 말해 준다. 가정 안내: 깨끗이 씻은 재활용품만 세고, 깨진 병은 만지지 않도록 부탁한다.',
  }));

  lessons.push(L(42, {
    title: '이면지함을 놓기 전과 뒤 종이 쓰레기 견주기',
    objective: '이면지함을 놓기 전과 놓은 뒤의 종이 쓰레기 그림그래프를 견주어 줄어든 수를 읽고, 알아낸 것을 한 문장으로 말할 수 있다.',
    illustration: ART('a classroom scrap paper box made of a decorated cardboard box, next to a picture graph whose rows get shorter week by week', '줄었을까요?', [
      { motif: 'leaf', x: 120, y: 226 }, { motif: 'star', x: 120, y: 96, s: 0.5 }, { motif: 'house', x: 400, y: 212 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"2반은 둘째 주 월요일에 교실에 이면지함을 놓았어요. 종이 쓰레기가 줄었을까요? 어떻게 알 수 있을까요?" "느낌으로"와 "세어 둔 수로" 가운데 손을 들게 한다. "놓기 전에 세어 둔 수가 있어야 놓은 뒤와 견줄 수 있어요." 시연 단추로 주마다 그림이 줄어드는 그래프를 보여 준다.',
        student: '이면지함을 놓으면 종이 쓰레기가 어떻게 될지 어림해 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '2반 종이 쓰레기', data: [['놓기 전', 10], ['놓은 뒤', 6]], unit: '개', xLabel: '때', yLabel: '쓰레기 수', icon: 'square', icons: ONE('개'), showTable: true }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 전과 뒤 그래프 견주기', minutes: 14, tool: 'chart',
            teacher: '"이면지함은 둘째 주부터 있었어요. 첫째 주는 놓기 전이고, 둘째·셋째 주는 놓은 뒤예요." 칠판에 세로 선을 그어 전과 뒤를 나눈다. 몇 개 줄었는지 묻는 문항에서는 두 줄을 짝지어 짝 없는 그림을 세게 한다.',
            task: '전과 뒤의 그림그래프를 읽고, 언제 가장 적은지와 몇 개 줄었는지 답해요.',
            levels: { easy: { showTable: true }, base: {}, challenge: {} },
            items: [
              { prompt: '2반 그래프를 보고 종이 쓰레기가 가장 적은 주를 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '2반 주마다 종이 쓰레기', data: [['첫째 주', 12], ['둘째 주', 8], ['셋째 주', 5]], unit: '개', xLabel: '주', icon: 'square', icons: ONE('개'), choices: ['첫째 주', '둘째 주', '셋째 주'], question: '가장 적은 주는?', why: ['첫째 주 줄은 그림이 가장 길어요.', '둘째 주보다 그림이 더 적은 줄이 있어요.', ''], explain: '셋째 주 줄의 그림이 5개로 가장 짧아요.' },
                target: { pick: 2 }, difficulty: 0.1 },
              { prompt: '2반 그래프에서 첫째 주보다 셋째 주에 종이 쓰레기가 몇 개 줄었는지 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '2반 주마다 종이 쓰레기', data: [['첫째 주', 12], ['둘째 주', 8], ['셋째 주', 5]], unit: '개', xLabel: '주', icon: 'square', icons: ONE('개'), question: '첫째 주보다 셋째 주에 몇 개 줄었나요?', explain: '첫째 주 12개에서 셋째 주 5개를 빼면 7개예요.' },
                target: { value: 7 }, difficulty: 0.35, hints: ['두 줄의 그림을 하나씩 짝지어 보고, 짝이 없는 그림을 세어요.', '두 줄을 각각 다시 세어 보세요. 긴 줄에서 짝이 없는 그림만 세어요.'], },
              { prompt: '3반은 "먹을 만큼 받기" 약속을 했어요. 약속 뒤에 반찬을 남긴 친구가 몇 명 줄었는지 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '3반 반찬을 남긴 친구', data: [['약속 전 주', 10], ['약속 뒤 주', 6]], unit: '명', xLabel: '때', icon: 'person', icons: ONE('명'), question: '약속 뒤에 몇 명 줄었나요?', explain: '약속 전 10명에서 약속 뒤 6명을 빼면 4명이에요.' },
                target: { value: 4 }, difficulty: 0.3, hints: ['두 줄의 그림을 하나씩 짝지어 보고, 짝이 없는 그림을 세어요.', '두 줄을 각각 다시 세어 보세요. 긴 줄에서 짝이 없는 그림만 세어요.'],
                predict: { q: '약속 뒤에 남긴 친구가 줄었을까요?', options: ['줄었어요', '늘었어요'], answer: 0 },
                conclude: '약속 전과 뒤에 세어 둔 수를 견주면 약속이 도움이 되었는지 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알아낸 것을 문장으로 말하기', minutes: 13, tool: 'story',
            teacher: '"그래프를 읽고 알아낸 것을 친구에게 한 문장으로 말해 볼까요?" \'언제\'와 \'어떻게 되었는지\'가 문장에 들어가야 한다고 칠판에 적는다. 마지막에는 39차시에 센 우리 반 표를 보고 알아낸 것을 짝에게 말하게 한다.',
            task: '그래프에서 알아낸 것을 문장 빈칸에 알맞은 카드를 넣어 완성해요. 그리고 우리 반 기록으로 문장을 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '2반 종이 쓰레기 그래프(첫째 주 12개, 둘째 주 8개, 셋째 주 5개)를 보고 문장을 완성해 보세요. 이면지함은 둘째 주에 놓았어요.', toolOptions: { mode: 'fill', cards: ['첫째 주', '셋째 주', '줄었어요', '늘었어요'], slots: [{ id: 'b1', label: '이면지함을 놓기 전인 ___에 가장 많았어요.' }, { id: 'b2', label: '이면지함을 놓은 뒤 종이 쓰레기가 ___.' }] },
                target: { fill: { b1: '첫째 주', b2: '줄었어요' } }, difficulty: 0.15,
                hints: ['빈칸마다 그래프에서 "언제"와 "어떻게 되었는지"를 찾아 넣어요.', '어긋난 빈칸이 있어요. 이면지함을 놓기 전은 어느 주뿐인지 다시 봐요.', '놓기 전은 첫째 주이고, 놓은 뒤 그림 줄이 짧아졌으니 줄었어요.'],
                levels: { challenge: { toolOptions: { cards: ['첫째 주', '셋째 주', '줄었어요', '늘었어요', '모두 없어졌어요'] } } } },
              { prompt: '3반 반찬 그래프(약속 전 주 10명, 약속 뒤 주 6명)를 보고 문장을 완성해 보세요.', toolOptions: { mode: 'fill', cards: [{ id: '10', text: '10', big: true }, { id: '6', text: '6', big: true }, { id: '4', text: '4', big: true }], slots: [{ id: 'b1', label: '약속 전 주에는 반찬을 남긴 친구가 ___명이었어요.' }, { id: 'b2', label: '약속 뒤에는 남긴 친구가 ___명 줄었어요.' }] },
                target: { fill: { b1: '10', b2: '4' } }, difficulty: 0.25,
                hints: ['첫 빈칸은 그래프에서 읽은 수, 둘째 빈칸은 두 수의 차이예요.', '어긋난 빈칸이 있어요. "줄었어요" 앞에는 약속 뒤에 남긴 수가 아니라 줄어든 만큼이 들어가요.', '약속 전은 10명이고, 10명에서 6명이 되었으니 4명 줄었어요.'] },
              { prompt: '39차시에 센 우리 반 쓰레기 표를 보고 "~가 가장 많았어요"로 알아낸 것을 짝에게 말해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"이면지함이 도움이 되었는지 어떻게 알았나요?" 두세 명이 말하게 하고, 놓기 전에 세어 둔 수가 있었기 때문이라는 것을 짚는다. 출구 첫 문항을 틀린 학생에게는 두 줄의 그림을 짝지어 짝 없는 그림을 세게 한다. 다음 시간에는 학교 분리배출함을 살펴본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '4반 휴지를 쓴 장수', data: [['손수건 쓰기 전', 9], ['손수건 쓴 뒤', 4]], unit: '장', xLabel: '때', icon: 'square', icons: ONE('장'), question: '손수건을 쓴 뒤 휴지가 몇 장 줄었나요?', explain: '9장에서 4장을 빼면 5장이에요.' }, prompt: '4반 그래프를 보고 손수건을 쓴 뒤 휴지가 몇 장 줄었는지 써 보세요.', target: { value: 5 }, difficulty: 0.3 },
          { type: 'choice', prompt: '이면지함이 도움이 되었는지 어떻게 알 수 있나요?', options: ['놓기 전과 뒤에 센 수를 견주어 봐요', '느낌으로 알 수 있어요'], answer: 0, difficulty: 0.1, explain: '전과 뒤에 세어 둔 수를 견주어 보아야 정말 줄었는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '전과 뒤 견주기',
      items: [
        { type: 'figure', wide: true, prompt: '그림그래프를 보고 주마다 종이 쓰레기 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '5반 종이 쓰레기', data: [['첫째 주', 11], ['둘째 주', 7], ['셋째 주', 6]], unit: '개', icon: 'square', icons: ONE('개') }, caption: '첫째 주 (   )개, 둘째 주 (   )개, 셋째 주 (   )개' }], answer: '첫째 주 11개, 둘째 주 7개, 셋째 주 6개' },
        { type: 'blank', prompt: '위 그래프에서 첫째 주보다 셋째 주에 (   )개 줄었어요.', answer: '5' },
        { type: 'choice', prompt: '위 그래프에서 알아낸 것으로 알맞은 문장에 ○ 하세요.', options: ['종이 쓰레기가 주마다 줄었어요', '종이 쓰레기가 주마다 늘었어요', '셋째 주에 가장 많았어요'], answer: '종이 쓰레기가 주마다 줄었어요' },
        { type: 'short', prompt: '우리 반 쓰레기 표를 보고 알아낸 것을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '두 줄의 그림을 하나씩 짝지어 보고, 짝이 없는 그림을 세어요.',
        items: [
          { type: 'figure', wide: true, prompt: '그림을 세어 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '종이 쓰레기', data: [['놓기 전', 6], ['놓은 뒤', 3]], unit: '개', icon: 'square', icons: ONE('개') }, caption: '놓기 전 (   )개, 놓은 뒤 (   )개' }], answer: '놓기 전 6개, 놓은 뒤 3개' },
          { type: 'choice', prompt: '위 그래프에서 종이 쓰레기는 어떻게 되었나요?', options: ['줄었어요', '늘었어요'], answer: '줄었어요' },
          { type: 'short', prompt: '우리 반에서 가장 많이 나온 쓰레기를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 읽기 문항에는 표도 함께 보여요. 문장 칸에 맞게 넣으면 초록 테두리가 생겨요.',
      base: '그래프를 읽고 줄어든 수를 구해 알아낸 것을 문장으로 완성해요.',
      challenge: '문장 카드에 그래프로 말할 수 없는 함정 카드가 섞여 있어요. 우리 반 기록으로 문장을 두 개 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "줄었어요" 앞에 뒤의 수(6)를 넣는다 → 줄어든 만큼은 두 수의 차이라고 짚고, 그림을 짝지어 보게 한다. ② 놓기 전에 세지 않았는데 줄었다고 말한다 → 견줄 수가 있어야 줄었는지 안다는 것을 짚는다. ③ 그래프 수를 우리 반 기록으로 여긴다 → 2·3·4반은 지어낸 예시라고 알려 준다. 우리 반도 이면지함을 놓았다면, 놓은 뒤 일주일 동안 종이 쓰레기를 세어 47차시에 견준다.',
  }));

  lessons.push(L(43, {
    title: '학교 분리배출함에 잘못 들어간 것 살펴 세기',
    objective: '분리배출함에 잘못 들어간 물건을 눈으로 찾아 수거함별로 세어 그림그래프로 나타내고, 잘못 들어간 것이 가장 많은 수거함을 찾을 수 있다.',
    illustration: ART('a row of paper-cut recycling bins for paper, plastic, cans and vinyl, with a few wrong items peeking out, children looking with a clipboard', '잘못 들어갔어요', [
      { motif: 'tree', x: 410, y: 212 }, { motif: 'cloud', x: 360, y: 96, color: 'cream' }, { motif: 'leaf', x: 90, y: 230 }]),
    safety: ['분리배출장에서는 수거함 안에 손을 넣지 않고 눈으로만 살펴봐요.', '줄을 서서 선생님을 따라 다니고, 수거차가 오면 멈춰 서요.', '교실에 돌아오면 손을 비누로 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"37차시에 분리배출하는 방법을 배웠지요. 그런데 학교 분리배출함에는 정말 잘 나누어 들어 있을까요?" 미리 찍어 둔 수거함 사진 한 장을 띄워 잘못 들어간 물건이 보이는지 묻는다. "오늘은 잘못 들어간 것을 찾아 세어 봐요. 세어 보면 어느 수거함부터 알려야 할지 알 수 있어요." 시연 단추로 잘못 들어간 물건 카드가 골라지는 모습을 보여 준다.',
        student: '분리배출함에 잘못 넣은 물건을 본 적이 있는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '종이함에 잘못 들어갔어요', cards: ['신문지', '우유 빨대'], shuffle: false }, sequence: [{ pick: ['우유 빨대'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘못 들어간 물건 찾기', minutes: 11, tool: 'mindmap',
            teacher: '"이 수거함에 들어가야 할 것은 무엇으로 만든 물건인가요? 그것과 다른 것으로 만든 물건이 잘못 들어간 거예요." 39차시에 쓰레기를 무엇으로 만들었는지 따진 방법을 그대로 쓰게 한다.',
            task: '수거함 안을 살펴본 카드에서 잘못 들어간 물건만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '종이 수거함 안을 보았어요. 잘못 들어간 물건만 골라 보세요.', toolOptions: { mode: 'pick', topic: '종이함에 잘못 들어갔어요', cards: ['신문지', '종이 상자', '과자 봉지', '플라스틱 컵'] },
                target: { pick: ['과자 봉지', '플라스틱 컵'] }, difficulty: 0.1,
                hints: ['이 수거함은 무엇으로 만든 물건을 모으는 곳인지 먼저 떠올려요. 그것과 다른 것으로 만든 물건을 찾아요.', '고른 것 가운데 이 수거함에 맞게 들어간 물건이 있는지, 빠뜨린 물건이 있는지 살펴봐요.', '신문지와 종이 상자는 맞게 들어갔고, 과자 봉지와 플라스틱 컵이 잘못 들어갔어요.'] },
              { prompt: '플라스틱 수거함 안을 보았어요. 잘못 들어간 물건만 골라 보세요.', toolOptions: { mode: 'pick', topic: '플라스틱함에 잘못 들어갔어요', cards: ['페트병', '요구르트 병', '유리병', '이면지', '음료 캔'] },
                target: { pick: ['유리병', '이면지', '음료 캔'] }, difficulty: 0.2,
                hints: ['이 수거함은 무엇으로 만든 물건을 모으는 곳인지 먼저 떠올려요. 그것과 다른 것으로 만든 물건을 찾아요.', '고른 것 가운데 이 수거함에 맞게 들어간 물건이 있는지, 빠뜨린 물건이 있는지 살펴봐요.', '페트병과 요구르트 병만 플라스틱이고, 유리병·이면지·음료 캔이 잘못 들어갔어요.'],
                levels: { easy: { prompt: '플라스틱 수거함 안을 보았어요. 카드 세 장에서 잘못 들어간 물건만 골라 보세요.', toolOptions: { cards: ['페트병', '유리병', '이면지'] }, target: { pick: ['유리병', '이면지'] } } } },
              { prompt: '캔 수거함 안을 보았어요. 잘못 들어간 물건만 골라 보세요.', toolOptions: { mode: 'pick', topic: '캔함에 잘못 들어갔어요', cards: ['음료 캔', '참치 통조림 캔', '비닐봉지', '종이컵'] },
                target: { pick: ['비닐봉지', '종이컵'] }, difficulty: 0.15,
                hints: ['이 수거함은 무엇으로 만든 물건을 모으는 곳인지 먼저 떠올려요. 그것과 다른 것으로 만든 물건을 찾아요.', '고른 것 가운데 이 수거함에 맞게 들어간 물건이 있는지, 빠뜨린 물건이 있는지 살펴봐요.', '음료 캔과 통조림 캔은 맞게 들어갔고, 비닐봉지와 종이컵이 잘못 들어갔어요.'],
                levels: { challenge: { prompt: '캔 수거함 안을 보았어요. 카드가 더 많아요. 잘못 들어간 물건만 모두 골라 보세요.', toolOptions: { cards: ['음료 캔', '참치 통조림 캔', '빈 과일 통조림 캔', '비닐봉지', '종이컵', '플라스틱 뚜껑'] }, target: { pick: ['비닐봉지', '종이컵', '플라스틱 뚜껑'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 살펴본 것을 세어 그래프로', minutes: 16, tool: 'chart',
            teacher: '모둠마다 수거함 하나를 맡아 선생님과 분리배출장에 가서, 잘못 들어간 물건을 눈으로만 찾아 활동지 표에 바를 정 대신 동그라미로 하나씩 표시한다. 교실에 돌아와 화면에서 2학년 1반의 예시 표를 그림그래프로 옮기고 읽는다. "어느 수거함에 잘못 들어간 것이 가장 많은지 알면, 무엇부터 알려야 할지 정할 수 있어요."',
            task: '맡은 수거함에서 잘못 들어간 물건을 세어 적어요. 그다음 표를 그림그래프로 옮기고 가장 많은 수거함을 찾아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '선생님과 분리배출장에 가서, 모둠이 맡은 수거함에 잘못 들어간 물건을 눈으로만 찾아 활동지 표에 세어 적어요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '1반이 살펴본 표를 보고 잘못 들어간 물건 그림그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '1반이 찾은 잘못 들어간 물건', data: [['종이함', 5], ['플라스틱함', 8], ['캔함', 2], ['비닐함', 4]], unit: '개', xLabel: '수거함', yLabel: '물건 수', icon: 'square', icons: ONE('개') },
                target: { build: true }, difficulty: 0.2,
                levels: { easy: { toolOptions: { given: [0, 1] } } } },
              { prompt: '3반 그래프를 보고 잘못 들어간 물건이 가장 많은 수거함을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '3반이 찾은 잘못 들어간 물건', data: [['종이함', 3], ['플라스틱함', 6], ['캔함', 7], ['비닐함', 2]], unit: '개', xLabel: '수거함', icon: 'square', icons: ONE('개'), choices: ['종이함', '플라스틱함', '캔함', '비닐함'], question: '가장 많은 수거함은?', why: ['종이함은 그림이 적은 편이에요.', '플라스틱함보다 그림이 하나 더 많은 줄이 있어요.', '', '비닐함 줄은 그림이 가장 짧아요.'], explain: '캔함 줄의 그림이 7개로 가장 길어요.' },
                target: { pick: 2 }, difficulty: 0.2,
                levels: { easy: { toolOptions: { showTable: true } } },
                predict: { q: '잘못 들어간 것이 가장 많은 수거함부터 알리면 좋을까요?', options: ['좋아요', '상관없어요'], answer: 0 },
                conclude: '세어 보면 어느 수거함부터 바르게 넣자고 알릴지 정할 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '모둠마다 센 수를 칠판 표에 모은다. "우리 학교에서 잘못 들어간 것이 가장 많은 수거함은 어디인가요?" 함께 읽는다. 출구 첫 문항을 틀린 학생에게는 줄의 그림을 하나씩 짚으며 세게 한다. 다음 시간에는 지금까지 알아낸 것으로 우리 반이 할 일을 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '4반이 찾은 잘못 들어간 물건', data: [['종이함', 4], ['플라스틱함', 9], ['비닐함', 6]], unit: '개', xLabel: '수거함', icon: 'square', icons: ONE('개'), question: '비닐함에 잘못 들어간 물건은 몇 개인가요?', explain: '비닐함 줄의 그림은 6개예요.' }, prompt: '4반 그래프를 보고 비닐함에 잘못 들어간 물건 수를 써 보세요.', target: { value: 6 }, difficulty: 0.15 },
          { type: 'choice', prompt: '종이 수거함에 잘못 들어간 것은 무엇인가요?', options: ['헌 공책', '비닐봉지', '종이 상자'], answer: 1, difficulty: 0.1, explain: '비닐봉지는 종이가 아니라 비닐로 만들었어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '분리배출함 살펴보기',
      items: [
        { type: 'table', prompt: '우리 모둠이 맡은 수거함에서 잘못 들어간 물건을 쓰고 세어 보세요.', columns: ['맡은 수거함', '잘못 들어간 물건', '센 수'], rows: 3 },
        { type: 'figure', wide: true, prompt: '그림그래프를 보고 수거함마다 잘못 들어간 물건 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '5반이 찾은 잘못 들어간 물건', data: [['종이함', 6], ['플라스틱함', 3], ['캔함', 5]], unit: '개', icon: 'square', icons: ONE('개') }, caption: '종이함 (   )개, 플라스틱함 (   )개, 캔함 (   )개' }], answer: '종이함 6개, 플라스틱함 3개, 캔함 5개' },
        { type: 'choice', prompt: '플라스틱 수거함에 잘못 들어간 것에 ○ 하세요.', options: ['페트병', '유리병', '요구르트 병'], answer: '유리병' },
        { type: 'short', prompt: '우리 학교에서 잘못 들어간 것이 가장 많은 수거함을 쓰세요.' },
      ],
      easy: {
        note: '그 수거함과 다른 것으로 만든 물건이 잘못 들어간 거예요. 눈으로만 살펴봐요.',
        items: [
          { type: 'table', prompt: '맡은 수거함에서 잘못 들어간 물건 수를 쓰세요.', columns: ['맡은 수거함', '센 수'], rows: 2 },
          { type: 'choice', prompt: '종이 수거함에 잘못 들어간 것에 ○ 하세요.', options: ['신문지', '과자 봉지'], answer: '과자 봉지' },
          { type: 'draw', prompt: '잘못 들어간 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드 수가 줄고 맞게 고르면 초록 테두리가 생겨요. 그림그래프는 두 줄이 미리 그려져 있고, 읽기 문항에는 표도 함께 보여요.',
      base: '잘못 들어간 물건을 모두 골라 세고, 그림그래프를 완성해 가장 많은 수거함을 찾아요.',
      challenge: '헷갈리는 카드가 더 있어요. 그래프를 읽은 뒤 가장 적은 수거함과 몇 개 차이인지도 말해요.',
    },
    teacherNotes: '준비: 행정실·시설 담당에게 분리배출장 방문 시간을 미리 알린다. 분리배출장이 멀거나 날씨가 나쁘면 선생님이 전날 수거함 네 곳을 찍은 사진을 모둠마다 나누어 주고 사진에서 센다. 자주 보이는 어려움: ① 수거함에 손을 넣어 꺼내려 한다 → 눈으로만 본다는 약속을 출발 전에 다시 말한다. ② 맞게 들어간 물건까지 센다 → "이 수거함과 다른 것으로 만든 것만"이라는 기준을 되풀이한다. ③ 잘못 넣은 사람을 탓한다 → 잘 몰라서 그랬을 수 있으니 알려 주면 된다고 짚는다.',
  }));

  // ───────────────────────── 44~48차시: 알아낸 것으로 할 일 정해 알리고 돌아보기(탐구 결과 설명·단원 정리) ─────────────────────────

  lessons.push(L(44, {
    title: '알아낸 것으로 우리 반이 함께 할 일 정하기',
    objective: '세어서 알아낸 것에 알맞은 할 일을 잇고, 우리 반이 함께 할 일 하나를 손을 들어 정할 수 있다.',
    illustration: ART('children raising paper hands to vote, a board with three action cards: a scrap paper box, a small rice bowl and a picture sign on a bin', '함께 할 일을 정해요', [
      { motif: 'star', x: 120, y: 96, s: 0.5 }, { motif: 'heart', x: 380, y: 100, s: 0.5 }, { motif: 'flower', x: 130, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '39~43차시에 세어서 알아낸 것을 칠판에 다시 붙인다(가장 많은 쓰레기, 가장 많이 남은 반찬, 잘못 들어간 것이 가장 많은 수거함). "하준이는 \'이제 다 알았으니까 어른들이 해결해 줄 때까지 기다리면 돼\'라고 해요. 정말 그럴까요?" 두세 명의 생각을 듣고, 알아낸 것은 할 일을 정하는 데 쓰인다고 말한다. 시연 단추로 알아낸 것 옆에 할 일 카드가 이어지는 모습을 보여 준다.',
        student: '칠판의 알아낸 것 가운데 가장 마음이 쓰이는 것을 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '알아낸 것과 할 일', slots: [{ id: 's1', label: '휴지를 많이 써요' }], cards: ['손수건을 써요', '휴지를 더 사요'], shuffle: false }, sequence: [{ match: { s1: '손수건을 써요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 알아낸 것과 할 일 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 할 일을 하면 알아낸 것이 좋아질까요? 종이가 많다면 종이를 줄이는 일이어야겠지요." 알아낸 것의 낱말(종이, 나물, 플라스틱함)이 할 일에도 이어지는지 찾게 한다. 쓰레기통을 더 놓는 일처럼 쓰레기를 줄이지 못하는 일은 고르지 않는다는 것을 짚는다.',
            task: '알아낸 것 옆에 그것을 좋아지게 할 일 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '알아낸 것과 알맞은 할 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '알아낸 것과 할 일', slots: [{ id: 's1', label: '교실 쓰레기는 종이가 가장 많아요' }, { id: 's2', label: '급식에서 나물이 가장 많이 남아요' }, { id: 's3', label: '플라스틱함에 잘못 들어간 것이 많아요' }], cards: ['이면지함을 만들어 종이를 다시 써요', '나물은 먹을 만큼만 받아요', '플라스틱함 앞에 넣을 것 그림을 붙여요'] },
                target: { match: { s1: '이면지함을 만들어 종이를 다시 써요', s2: '나물은 먹을 만큼만 받아요', s3: '플라스틱함 앞에 넣을 것 그림을 붙여요' } }, difficulty: 0.15,
                hints: ['알아낸 것마다 무엇이 문제인지 찾고, 그 문제를 줄이는 할 일을 찾아요.', '짝이 어긋난 곳이 있어요. 알아낸 것과 할 일에 같은 낱말이 들어 있는지 견주어 봐요.', '종이는 이면지함, 나물은 먹을 만큼 받기, 플라스틱함은 그림 붙이기와 이어져요.'],
                levels: { challenge: { prompt: '알아낸 것과 알맞은 할 일을 이어 보세요. 쓰레기를 줄이지 못하는 카드는 남겨요.', toolOptions: { cards: ['이면지함을 만들어 종이를 다시 써요', '나물은 먹을 만큼만 받아요', '플라스틱함 앞에 넣을 것 그림을 붙여요', '교실에 쓰레기통을 하나 더 놓아요'] } } } },
              { prompt: '집에서 알아낸 것과 알맞은 할 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '알아낸 것과 할 일', slots: [{ id: 's1', label: '우리 집은 페트병이 가장 많이 나와요' }, { id: 's2', label: '우리 집은 비닐봉지가 많이 나와요' }], cards: ['물통에 물을 담아 다녀요', '장 볼 때 장바구니를 들고 가요'] },
                target: { match: { s1: '물통에 물을 담아 다녀요', s2: '장 볼 때 장바구니를 들고 가요' } }, difficulty: 0.15,
                hints: ['알아낸 것마다 무엇이 많이 나오는지 찾고, 그것을 덜 쓰게 하는 일을 찾아요.', '짝이 어긋난 곳이 있어요. 그 일을 하면 무엇이 덜 나오는지 따져 봐요.', '물통은 페트병을, 장바구니는 비닐봉지를 줄여요.'] },
              { prompt: '알아낸 것과 이어지고, 우리 반이 날마다 할 수 있는 할 일만 골라 보세요.', toolOptions: { mode: 'pick', topic: '우리 반 할 일 후보', cards: ['종이가 많으니 이면지 뒷면을 먼저 써요', '종이가 많으니 종이를 아예 안 써요', '나물이 남으니 나물을 몰래 버려요', '나물이 남으니 한 입씩은 먹어 봐요'] },
                target: { pick: ['종이가 많으니 이면지 뒷면을 먼저 써요', '나물이 남으니 한 입씩은 먹어 봐요'] }, difficulty: 0.2,
                hints: ['카드마다 정말 날마다 할 수 있는 일인지, 쓰레기를 줄이는 일인지 함께 따져요.', '고른 것 가운데 지킬 수 없는 일이나 쓰레기를 숨기기만 하는 일이 있는지 살펴봐요.', '이면지 뒷면 먼저 쓰기와 한 입씩 먹어 보기, 두 가지예요.'],
                predict: { q: '"종이를 아예 안 써요"를 날마다 지킬 수 있을까요?', options: ['지킬 수 있어요', '어려워요'], answer: 1 },
                conclude: '할 일은 알아낸 것과 이어지고, 우리가 날마다 지킬 수 있는 것으로 골라요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 할 일 하나 정하기', minutes: 14, tool: 'emotion',
            teacher: '"하준이처럼 기다리자는 친구에게는 뭐라고 말할까요?" 보기를 고른 뒤 결과를 소리 내어 읽게 한다. 그다음 칠판의 할 일 후보 세 가지에 손을 들어 하나를 정한다(한 사람 한 번). "내가 고른 일이 뽑히지 않아도 함께 해요. 내가 고른 일은 집에서 해 볼 수 있어요."',
            task: '이야기를 읽고 알맞은 말이나 행동을 골라 결과를 봐요. 그리고 우리 반 할 일을 손을 들어 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이가 어른들이 해결해 줄 때까지 기다리자고 해요. 어떤 말을 해 줄까요?', toolOptions: { mode: 'branch', who: '민지', situation: '하준이가 "쓰레기는 교장 선생님이 해결해 주실 거야. 우리는 기다리면 돼."라고 말해요.', choices: [
                { id: 'wait', text: '"맞아, 기다리자" 하고 말해요', result: '기다리는 동안에도 종이 쓰레기가 날마다 쌓여요.', mood: '걱정', why: '어른을 기다리는 동안에도 쓰레기는 날마다 생겨요.' },
                { id: 'start', text: '"우리가 알아낸 걸로 오늘부터 이면지함을 쓰자" 하고 말해요', result: '하준이가 "그럼 내가 이면지함을 꾸밀게" 하고 말해요.', mood: '뿌듯함' },
                { id: 'blame', text: '"너는 맨날 종이를 버리잖아" 하고 탓해요', result: '하준이가 기분이 상해 함께 하지 않아요.', mood: '속상함', why: '탓하는 말보다 함께 할 일을 말하는 것이 좋아요.' }] }, target: { choice: 'start' }, difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'wait', text: '"맞아, 기다리자" 하고 말해요', result: '기다리는 동안에도 종이 쓰레기가 날마다 쌓여요.', mood: '걱정', why: '어른을 기다리는 동안에도 쓰레기는 날마다 생겨요.' },
                  { id: 'start', text: '"우리가 알아낸 걸로 오늘부터 이면지함을 쓰자" 하고 말해요', result: '하준이가 "그럼 내가 이면지함을 꾸밀게" 하고 말해요.', mood: '뿌듯함' }] } } } },
              { prompt: '투표에서 내가 고른 할 일이 뽑히지 않았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아는 "나물 한 입 먹어 보기"를 골랐는데, 우리 반은 "이면지 뒷면 먼저 쓰기"로 정했어요.', choices: [
                { id: 'join', text: '정한 일을 함께 하고, 내 생각은 집에서 해 봐요', result: '반 친구들과 이면지를 쓰고, 집에서는 나물을 한 입씩 먹어 봐요.', mood: '뿌듯함' },
                { id: 'quit', text: '내 것이 안 뽑혔으니 아무것도 안 해요', result: '서아만 빠져서 이면지함이 덜 채워져요.', mood: '속상함', why: '정한 일은 모두 함께 해야 힘이 모여요.' },
                { id: 'again', text: '될 때까지 다시 투표하자고 떼를 써요', result: '친구들이 지쳐서 할 일을 시작하지 못해요.', mood: '화남', why: '함께 정한 것은 따르고, 내 생각은 다른 곳에서 해 볼 수 있어요.' }] }, target: { choice: 'join' }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'join', text: '정한 일을 함께 하고, 내 생각은 집에서 해 봐요', result: '반 친구들과 이면지를 쓰고, 집에서는 나물을 한 입씩 먹어 봐요.', mood: '뿌듯함' },
                  { id: 'quit', text: '내 것이 안 뽑혔으니 아무것도 안 해요', result: '서아만 빠져서 이면지함이 덜 채워져요.', mood: '속상함', why: '정한 일은 모두 함께 해야 힘이 모여요.' },
                  { id: 'again', text: '될 때까지 다시 투표하자고 떼를 써요', result: '친구들이 지쳐서 할 일을 시작하지 못해요.', mood: '화남', why: '함께 정한 것은 따르고, 내 생각은 다른 곳에서 해 볼 수 있어요.' },
                  { id: 'secret', text: '함께 하는 척하고 몰래 나물만 해요', result: '이면지함은 덜 채워지고, 친구들은 서아를 믿기 어려워해요.', mood: '걱정', why: '함께 정한 일은 정말로 해야 결과를 견줄 수 있어요.' }] } } } },
              { prompt: '칠판의 할 일 후보 가운데 하나에 손을 들어 우리 반 할 일을 정해요. 다 정하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '뽑힌 할 일을 칠판 가운데 크게 쓰고, "언제부터, 누가, 어떻게" 할지 함께 정한다. 출구 첫 문항을 틀린 학생에게는 그림을 줄마다 세게 한다. 다음 시간에는 이 할 일을 알리는 포스터를 만든다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '2반 할 일 투표', data: [['이면지함 쓰기', 9], ['손수건 쓰기', 5], ['먹을 만큼 받기', 7]], unit: '명', xLabel: '할 일', icon: 'person', icons: ONE('명'), choices: ['이면지함 쓰기', '손수건 쓰기', '먹을 만큼 받기'], question: '2반이 함께 할 일로 뽑힌 것은?', explain: '이면지함 쓰기 줄의 그림이 9개로 가장 많아요.' }, prompt: '2반 투표 그래프를 보고 뽑힌 할 일을 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
          { type: 'choice', prompt: '알아낸 것이 있을 때 어떻게 하면 좋을까요?', options: ['어른이 해결해 줄 때까지 기다려요', '알아낸 것으로 우리가 할 일을 정해요'], answer: 1, difficulty: 0.1, explain: '알아낸 것을 바탕으로 우리가 지금 할 수 있는 일을 정하면 바로 시작할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 할 일 정하기',
      items: [
        { type: 'table', prompt: '알아낸 것에 알맞은 할 일을 쓰세요.', columns: ['알아낸 것', '할 일'], cells: [['종이 쓰레기가 가장 많아요', ''], ['나물이 가장 많이 남아요', ''], ['페트병이 많이 나와요', '']] },
        { type: 'choice', prompt: '쓰레기를 줄이는 할 일에 ○ 하세요.', options: ['쓰레기통을 더 놓아요', '이면지 뒷면을 먼저 써요', '쓰레기를 서랍에 숨겨요'], answer: '이면지 뒷면을 먼저 써요' },
        { type: 'short', prompt: '우리 반이 정한 할 일을 쓰세요.' },
        { type: 'short', prompt: '"어른이 해결해 줄 때까지 기다리자"는 친구에게 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '알아낸 것과 같은 낱말이 들어간 할 일을 찾아요.',
        items: [
          { type: 'choice', prompt: '종이 쓰레기가 많을 때 할 일에 ○ 하세요.', options: ['이면지를 다시 써요', '장바구니를 들어요'], answer: '이면지를 다시 써요' },
          { type: 'short', prompt: '우리 반이 정한 할 일을 쓰세요.' },
          { type: 'draw', prompt: '그 일을 하는 우리 반 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 이야기 보기가 두 개예요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 말의 결과를 소리 내어 읽어요.',
      challenge: '쓰레기를 줄이지 못하는 함정 카드가 있어요. 이야기 보기가 넷이고 헷갈리는 보기가 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어른들이 해결해 줄 때까지 기다리면 된다고 여긴다(이 차시의 핵심 오개념) → 기다리는 동안 쌓이는 쓰레기를 39차시 표의 수로 어림해 보게 한다. ② 너무 큰 할 일(종이 아예 안 쓰기)을 고른다 → 날마다 지킬 수 있는지 묻는다. ③ 투표에서 진 학생이 속상해한다 → 그 할 일은 집에서 해 보고 47차시에 이야기해 달라고 말해 준다. 투표는 한 사람이 한 번만 손을 들고, 선생님이 센 수를 칠판 표에 적는다.',
  }));

  lessons.push(L(45, {
    title: '우리 반 할 일을 알리는 포스터 만들기',
    objective: '알아낸 것과 할 일이 한눈에 보이도록 포스터에 넣을 말을 고르고, 색종이 조각으로 할 일이 보이는 포스터를 꾸며 만들 수 있다.',
    illustration: ART('a cheerful paper-cut poster on a classroom wall with a scrap paper box, green leaves and a big heart, children pasting colored paper pieces', '함께 해요!', [
      { motif: 'leaf', x: 120, y: 226 }, { motif: 'star', x: 120, y: 96, s: 0.5 }, { motif: 'flower', x: 380, y: 226 }]),
    safety: ['가위를 쓸 때는 날을 몸 반대쪽으로 하고, 건넬 때는 손잡이를 내밀어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '복도에 붙은 안내문 두 장(글씨가 빽빽한 것, 짧은 말과 그림이 있는 것)을 띄운다. "지나가다 한눈에 알 수 있는 것은 어느 쪽인가요?" 포스터의 세 가지 약속(짧게, 할 일이 보이게, 탓하지 않게)을 칠판에 적는다. 시연 단추로 포스터에 넣을 말이 골라지는 모습을 보여 준다.',
        student: '복도에서 본 안내문 가운데 기억에 남는 것을 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '포스터에 넣을 말', cards: ['종이는 이면지함에!', '종이를 버리는 친구는 나빠요'], shuffle: false }, sequence: [{ pick: ['종이는 이면지함에!'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 포스터에 넣을 말 고르기', minutes: 11, tool: 'mindmap',
            teacher: '"이 말은 짧은가요? 무엇을 하라는지 보이나요? 누구를 탓하지는 않나요?" 칠판의 세 가지 약속으로 카드마다 따지게 한다. 맞는 말이라도 너무 길면 포스터에는 맞지 않는다는 것을 짚는다.',
            task: '포스터에 넣기 알맞은 말을 고르고, 알아낸 것과 할 일 자리에 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '이면지함 포스터에 넣기 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '포스터에 넣을 말', cards: ['종이는 이면지함에!', '뒷면도 한 번 더 써요', '첫째 주에 열두 개였던 종이 쓰레기가 이면지함을 놓은 뒤 셋째 주에는 다섯 개로 줄었어요', '종이를 버리는 친구는 나빠요'] },
                target: { pick: ['종이는 이면지함에!', '뒷면도 한 번 더 써요'] }, difficulty: 0.15,
                hints: ['카드마다 짧은지, 할 일이 보이는지, 누구를 탓하지 않는지 세 가지를 따져요.', '고른 것 가운데 너무 길거나 친구를 탓하는 말이 있는지 살펴봐요.', '"종이는 이면지함에!"와 "뒷면도 한 번 더 써요"가 짧고 할 일이 보여요.'] },
              { prompt: '포스터의 말을 알아낸 것과 함께 할 일로 나누어 보세요.', toolOptions: { topic: '포스터 자리', slots: ['알아낸 것', '함께 할 일'], cards: ['우리 반 쓰레기는 종이가 가장 많아요', '종이는 이면지함에 넣어요', '급식에서 나물이 가장 많이 남아요', '나물은 먹을 만큼만 받아요'] },
                target: { sort: { '알아낸 것': ['우리 반 쓰레기는 종이가 가장 많아요', '급식에서 나물이 가장 많이 남아요'], '함께 할 일': ['종이는 이면지함에 넣어요', '나물은 먹을 만큼만 받아요'] } }, difficulty: 0.2,
                hints: ['카드마다 세어서 안 것을 말하는지, 앞으로 하자는 일을 말하는지 따져요.', '칸이 어긋난 카드가 있어요. 하자는 말인지, 무엇이 많다고 안 것인지 다시 봐요.', '"가장 많아요·가장 많이 남아요"는 알아낸 것, "넣어요·받아요"는 함께 할 일이에요.'],
                levels: { easy: { prompt: '포스터의 말 두 장을 알아낸 것과 함께 할 일로 나누어 보세요.', toolOptions: { cards: ['우리 반 쓰레기는 종이가 가장 많아요', '종이는 이면지함에 넣어요'] }, target: { sort: { '알아낸 것': ['우리 반 쓰레기는 종이가 가장 많아요'], '함께 할 일': ['종이는 이면지함에 넣어요'] } } } } },
              { prompt: '물 아끼기 포스터에 넣기 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '물 아끼기 포스터', cards: ['손 씻을 때 물을 잠가요!', '양치는 컵으로!', '물을 펑펑 쓰는 사람은 나빠요', '물은 투명하고 냄새가 없어요'] },
                target: { pick: ['손 씻을 때 물을 잠가요!', '양치는 컵으로!'] }, difficulty: 0.15,
                hints: ['카드마다 짧은지, 할 일이 보이는지, 누구를 탓하지 않는지 세 가지를 따져요.', '고른 것 가운데 할 일이 아니라 물에 대한 사실만 말한 것이나 탓하는 말이 있는지 살펴봐요.', '물을 잠그자는 말과 컵으로 양치하자는 말이에요.'],
                predict: { q: '"물은 투명해요"는 알리는 포스터에 알맞을까요?', options: ['알맞아요', '아니에요'], answer: 1 },
                conclude: '맞는 말이어도 할 일이 보이지 않으면 알리는 포스터에는 알맞지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 포스터 그림 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"포스터를 본 사람이 무엇을 하라는지 그림만 보고도 알 수 있을까요?" 화면에서 그림을 꾸며 본 뒤 모둠마다 4절 도화지에 고른 말을 크게 쓰고 색종이를 오려 붙여 포스터를 만든다. 말은 연필로 먼저 쓰고 사인펜으로 덧쓰게 한다.',
            task: '조건에 맞게 포스터 그림을 꾸며요. 다 꾸미면 모둠 포스터를 도화지에 만들어요.',
            levels: { easy: { shapes: ['square', 'rect', 'heart', 'leaf'], colors: ['갈색', '노랑', '초록', '빨강'] }, base: {}, challenge: { rotStep: 90 } },
            items: [
              { prompt: '이면지함 포스터 그림을 꾸며요. 갈색 긴 네모 상자를 한 개, 노랑 네모 종이를 세 개 이상 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'square', color: '노랑', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '이면지함 포스터 그림을 꾸며요. 갈색 긴 네모 상자를 한 개, 노랑 네모 종이를 네 개 이상, 빨강 하트를 두 개 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'square', color: '노랑', min: 4 }, { shape: 'heart', color: '빨강', n: 2 }] } } } },
              { prompt: '포스터 테두리를 꾸며요. 세로 접는 선을 기준으로 양쪽이 똑같게 초록 나뭇잎을 두 개 이상 붙여요.', target: { symmetry: 'vertical', has: [{ shape: 'leaf', color: '초록', min: 2 }] }, difficulty: 0.25 },
              { prompt: '우리 반 할 일 포스터를 마음껏 꾸미고, 해낸 것을 점검해 보세요.', target: { selfCheck: ['할 일이 보이는 그림을 넣었어요', '조각을 네 개 이상 붙였어요', '모둠 포스터에 짧은 말을 크게 썼어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '모둠 포스터를 칠판에 나란히 붙이고, 칠판의 세 가지 약속으로 서로의 포스터를 한 가지씩 칭찬하게 한다. 출구 첫 문항을 틀린 학생에게는 세 가지 약속을 하나씩 짚으며 다시 따지게 한다. 다음 시간에는 이 포스터를 들고 다른 반과 가족에게 알린다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '분리배출 포스터', cards: ['플라스틱은 씻어서 플라스틱함에!', '페트병은 뚜껑을 따로!', '아무렇게나 버리는 사람은 부끄러워요', '플라스틱은 가벼워요'] }, prompt: '분리배출 포스터에 넣기 알맞은 말만 골라 보세요.', target: { pick: ['플라스틱은 씻어서 플라스틱함에!', '페트병은 뚜껑을 따로!'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '포스터의 말로 가장 알맞은 것은 무엇인가요?', options: ['급식은 먹을 만큼만!', '반찬을 남기는 친구는 나빠요', '급식실은 1층에 있어요'], answer: 0, difficulty: 0.1, explain: '짧고, 할 일이 보이고, 누구를 탓하지 않는 말이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '할 일 포스터 계획',
      items: [
        { type: 'check', prompt: '포스터의 말을 고를 때 볼 것에 모두 ✓ 하세요.', options: ['짧아요', '할 일이 보여요', '누구를 탓하지 않아요'] },
        { type: 'table', prompt: '포스터에 넣을 말을 쓰세요.', columns: ['알아낸 것', '함께 할 일'], rows: 1 },
        { type: 'choice', prompt: '포스터에 알맞은 말에 ○ 하세요.', options: ['종이는 이면지함에!', '종이를 버리면 나빠요', '종이는 나무로 만들어요'], answer: '종이는 이면지함에!' },
        { type: 'draw', prompt: '우리 모둠 포스터의 그림을 미리 그려 보세요.' },
      ],
      easy: {
        note: '포스터의 말은 짧게, 할 일이 보이게 써요.',
        items: [
          { type: 'choice', prompt: '포스터에 알맞은 말에 ○ 하세요.', options: ['양치는 컵으로!', '물을 쓰는 사람은 나빠요'], answer: '양치는 컵으로!' },
          { type: 'short', prompt: '우리 반 할 일을 짧게 쓰세요.' },
          { type: 'draw', prompt: '포스터 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기 칸에 초록 테두리가 생기고 나누기 카드가 두 장이에요. 꾸미기는 모양 네 가지·색 네 가지에서 골라요.',
      base: '세 가지 약속으로 말을 고르고, 조건에 맞게 포스터 그림을 꾸며요.',
      challenge: '꾸미기 조건이 하나 더 붙고 조각을 90°씩만 돌릴 수 있어요. 모둠 포스터에 알아낸 수를 한 줄 넣어요.',
    },
    teacherNotes: '준비: 모둠마다 4절 도화지, 색종이, 풀, 가위, 사인펜. 자주 보이는 어려움: ① 알아낸 것을 길게 다 쓰려 한다 → "지나가는 친구가 3초 안에 읽을 수 있을까요?"라고 묻는다. ② 탓하는 말(○○는 나빠요)을 쓴다 → "함께 해요"로 바꿔 쓰게 한다. ③ 그림 꾸미기에 시간을 다 쓴다 → 말을 먼저 쓰고 그림은 남은 시간에 붙이게 한다. 출구의 분리배출 포스터 말은 43차시와 이어진다.',
  }));

  lessons.push(L(46, {
    title: '다른 반과 가족에게 우리 할 일 알리기',
    objective: '알아낸 것과 할 일을 "~해서 ~해요" 차례로 알리는 말을 완성하고, 듣는 사람의 물음에 근거를 들어 답할 수 있다.',
    illustration: ART('two children holding a paper poster in front of another classroom door, other children listening with curious faces', '우리 할 일을 알려요', [
      { motif: 'house', x: 400, y: 212 }, { motif: 'star', x: 120, y: 96, s: 0.5 }, { motif: 'heart', x: 120, y: 226, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"포스터를 붙이기만 하면 다른 반 친구들이 왜 해야 하는지 알까요?" 알리는 말에는 \'알아낸 것\'과 \'그래서 할 일\'이 함께 들어가야 한다고 칠판에 적는다. "누가 \'그거 해서 뭐가 달라져?\' 하고 물으면 무엇을 보여 줄까요?" 42차시의 그래프를 다시 띄운다. 시연 단추로 알리는 말의 빈칸이 채워지는 모습을 보여 준다.',
        student: '우리 반 할 일을 누구에게 알리고 싶은지 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['손수건', '휴지통'], slots: [{ id: 'b1', label: '휴지를 아끼려고 ___을 써요.' }], shuffle: false }, sequence: [{ fill: { b1: '손수건' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 알리는 말 완성하기', minutes: 12, tool: 'story',
            teacher: '"빈칸에 무엇을 넣어야 듣는 사람이 \'아, 그래서 하는구나\' 하고 알까요?" 문항에 적힌 수를 먼저 소리 내어 읽게 한다. 완성한 뒤 짝과 번갈아 한 사람은 알리고 한 사람은 듣게 한다.',
            task: '알아낸 것과 할 일이 들어간 알리는 말을 빈칸에 알맞은 카드를 넣어 완성해요. 그리고 짝에게 알려 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '2반 민지가 1반에 알리러 가요. 2반은 종이 쓰레기 12개, 비닐 쓰레기 4개를 셌어요. 알리는 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['종이', '비닐', '이면지함', '뒷면도'], slots: [{ id: 'b1', label: '우리 반 쓰레기를 세어 보니 ___ 쓰레기가 가장 많았어요.' }, { id: 'b2', label: '그래서 교실에 ___을 만들었어요.' }, { id: 'b3', label: '종이를 버리기 전에 ___ 한 번 더 써 주세요.' }] },
                target: { fill: { b1: '종이', b2: '이면지함', b3: '뒷면도' } }, difficulty: 0.2,
                hints: ['문항의 센 수에서 무엇이 가장 많은지 먼저 찾고, 그다음 빈칸마다 앞뒤 말과 이어지는 카드를 찾아요.', '어긋난 빈칸이 있어요. 첫 빈칸은 센 수가 더 큰 쪽이에요.', '종이가 12개로 가장 많아서 이면지함을 만들었고, 뒷면도 한 번 더 써 달라고 해요.'],
                levels: { easy: { prompt: '2반은 종이 쓰레기 12개, 비닐 쓰레기 4개를 셌어요. 알리는 말 두 빈칸을 채워 보세요.', toolOptions: { cards: ['종이', '비닐', '이면지함'], slots: [{ id: 'b1', label: '우리 반 쓰레기를 세어 보니 ___ 쓰레기가 가장 많았어요.' }, { id: 'b2', label: '그래서 교실에 ___을 만들었어요.' }] }, target: { fill: { b1: '종이', b2: '이면지함' } } } } },
              { prompt: '3반 서아가 가족에게 알려요. 3반은 나물을 남긴 친구가 9명, 밥을 남긴 친구가 2명이었어요. 알리는 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['나물', '밥', '먹을', '많이'], slots: [{ id: 'b1', label: '급식에서 ___이 가장 많이 남았어요.' }, { id: 'b2', label: '그래서 우리 반은 ___ 만큼만 받기로 했어요.' }] },
                target: { fill: { b1: '나물', b2: '먹을' } }, difficulty: 0.2,
                hints: ['문항의 수에서 무엇이 가장 많이 남았는지 찾고, 남지 않게 하려면 어떻게 받아야 할지 떠올려요.', '어긋난 빈칸이 있어요. 많이 받으면 남는 음식이 줄어들까요?', '나물이 9명으로 가장 많이 남아서, 먹을 만큼만 받기로 했어요.'],
                levels: { challenge: { toolOptions: { cards: ['나물', '밥', '먹을', '많이', '남길'] } } } },
              { prompt: '우리 반 포스터를 들고 짝에게 "알아낸 것 → 그래서 할 일" 차례로 알려 봐요. 서로 바꿔 한 번씩 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 물음에 답하고 알리러 가기', minutes: 15, tool: 'emotion',
            teacher: '"듣는 사람이 귀찮다고 하거나 소용없다고 하면 어떻게 답할까요?" 화를 내기보다 알아낸 수를 보여 주는 답이 힘이 있다는 것을 짚는다. 문항을 마치면 모둠 대표 두 명이 포스터를 들고 옆 반(미리 약속한 반)에 가서 1분 동안 알리고, 나머지는 교실에서 가족에게 할 말을 활동지에 쓴다.',
            task: '이야기를 읽고 듣는 사람에게 알맞게 답하는 말을 골라요. 그리고 모둠 대표가 옆 반에 알리러 가요.',
            levels: CARD_LV,
            items: [
              { prompt: '1반 친구가 "그거 해서 뭐가 달라져?" 하고 물어요. 어떻게 답할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 이면지함을 알리자, 1반 친구가 "그거 해서 뭐가 달라져?" 하고 물어요.', choices: [
                { id: 'data', text: '"우리 반은 이면지함을 놓고 종이 쓰레기가 7개 줄었어" 하고 그래프를 보여 줘요', result: '1반 친구가 "우리 반도 세어 볼래" 하고 말해요.', mood: '뿌듯함' },
                { id: 'dunno', text: '"몰라, 그냥 해" 하고 말해요', result: '1반 친구가 왜 해야 하는지 몰라서 하지 않아요.', mood: '걱정', why: '까닭을 알아야 듣는 사람도 함께 해요.' },
                { id: 'angry', text: '"너도 그냥 해!" 하고 소리쳐요', result: '1반 친구가 기분이 상해 돌아가요.', mood: '화남', why: '소리치기보다 알아낸 것을 보여 주는 것이 좋아요.' }] }, target: { choice: 'data' }, difficulty: 0.15,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'data', text: '"우리 반은 이면지함을 놓고 종이 쓰레기가 7개 줄었어" 하고 그래프를 보여 줘요', result: '1반 친구가 "우리 반도 세어 볼래" 하고 말해요.', mood: '뿌듯함' },
                  { id: 'dunno', text: '"몰라, 그냥 해" 하고 말해요', result: '1반 친구가 왜 해야 하는지 몰라서 하지 않아요.', mood: '걱정', why: '까닭을 알아야 듣는 사람도 함께 해요.' }] } } } },
              { prompt: '동생이 "이면지 쓰기 귀찮아" 하고 말해요. 어떻게 답할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 집에서 이면지를 쓰자고 하자, 동생이 "귀찮아. 새 종이가 더 좋아." 하고 말해요.', choices: [
                { id: 'easy', text: '"버리기 전에 뒤집어 보기만 하면 돼. 같이 해 볼까?" 하고 말해요', result: '동생이 그림을 다 그린 종이를 뒤집어 한 번 더 그려요.', mood: '기쁨' },
                { id: 'scare', text: '"안 하면 혼날 거야" 하고 겁을 줘요', result: '동생이 무서워서 울어요.', mood: '속상함', why: '겁을 주면 즐겁게 함께 하기 어려워요.' },
                { id: 'giveup', text: '"그럼 하지 마" 하고 그만둬요', result: '집의 종이 쓰레기는 그대로예요.', mood: '걱정', why: '쉬운 방법을 알려 주면 동생도 해 볼 수 있어요.' }] }, target: { choice: 'easy' }, difficulty: 0.15 },
              { prompt: '모둠 대표는 포스터를 들고 옆 반에 가서 1분 동안 알리고, 나머지는 가족에게 할 말을 활동지에 써요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '다녀온 대표에게 "옆 반 친구들은 어떤 물음을 했나요?"라고 묻고, 받은 물음을 칠판에 적는다. 답하기 어려웠던 물음은 47차시에 다시 세어 본 뒤 답하자고 말한다. 출구 첫 문항을 틀린 학생에게는 문항의 수를 먼저 소리 내어 읽게 한다. 오늘 활동지에 쓴 말로 집에서 가족에게 알려 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['페트병', '캔', '물통'], slots: [{ id: 'b1', label: '우리 집은 ___이 가장 많이 나와요.' }, { id: 'b2', label: '그래서 ___에 물을 담아 다녀요.' }] }, prompt: '하준네는 페트병 11개, 캔 3개가 나왔어요. 알리는 말을 완성해 보세요.', target: { fill: { b1: '페트병', b2: '물통' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"그거 해서 뭐가 달라져?"라는 물음에 가장 알맞은 답은 무엇인가요?', options: ['세어 본 수가 줄어든 것을 보여 줘요', '그냥 하라고 말해요', '대답하지 않아요'], answer: 0, difficulty: 0.1, explain: '알아낸 수를 보여 주면 듣는 사람도 까닭을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 할 일 알리기',
      items: [
        { type: 'table', prompt: '알리는 말을 차례대로 쓰세요.', columns: ['알아낸 것', '그래서 할 일', '함께 해 달라는 말'], rows: 1 },
        { type: 'short', prompt: '가족에게 알릴 말을 쓰세요.' },
        { type: 'choice', prompt: '"귀찮아"라는 동생에게 알맞은 말에 ○ 하세요.', options: ['뒤집어 보기만 하면 돼. 같이 해 볼까?', '안 하면 혼날 거야', '그럼 하지 마'], answer: '뒤집어 보기만 하면 돼. 같이 해 볼까?' },
        { type: 'short', prompt: '옆 반 친구에게 받은 물음과 내 답을 쓰세요.' },
      ],
      easy: {
        note: '"~해서 ~해요"로 말해요.',
        items: [
          { type: 'short', prompt: '우리 반에서 가장 많았던 쓰레기를 쓰세요.' },
          { type: 'short', prompt: '그래서 우리 반이 하는 일을 쓰세요.' },
          { type: 'choice', prompt: '알맞은 답에 ○ 하세요.', options: ['종이 쓰레기가 줄었어', '몰라, 그냥 해'], answer: '종이 쓰레기가 줄었어' },
        ],
      },
    },
    differentiation: {
      easy: '빈칸이 둘이고 맞는 칸에 초록 테두리가 생겨요. 이야기 보기가 두 개예요.',
      base: '알아낸 것과 할 일을 넣어 알리는 말을 완성하고, 물음에 근거를 들어 답해요.',
      challenge: '헷갈리는 함정 카드가 더 있어요. 옆 반 친구의 물음에 수를 넣어 답해요.',
    },
    teacherNotes: '준비: 옆 반 담임과 알리러 갈 시간(1분 남짓)을 미리 약속한다. 자주 보이는 어려움: ① 할 일만 말하고 까닭(알아낸 것)을 빼먹는다 → "왜 해야 해요?"라고 되묻는다. ② 반대하는 말에 화를 낸다 → 알아낸 수를 보여 주는 답으로 바꿔 말하게 한다. ③ 어른들이 해결해 줄 일이라는 말을 듣고 흔들린다 → 우리 반이 줄인 수를 다시 보여 준다. 모든 학생이 다른 반에 갈 필요는 없고, 대표가 아닌 학생은 가족에게 알리는 말을 준비한다.',
  }));

  lessons.push(L(47, {
    title: '일주일 실천 뒤 다시 세어 달라진 것 확인하기',
    objective: '함께 할 일을 일주일 실천한 뒤 다시 센 수를 처음 수와 견주어 달라진 것을 말하고, 잘 되지 않은 일에 알맞은 다음 방법을 고를 수 있다.',
    illustration: ART('two paper picture graphs side by side, before and after, with the after row shorter, and children cheering beside a scrap paper box', '달라졌을까요?', [
      { motif: 'sun', x: 120, y: 100, s: 0.5 }, { motif: 'leaf', x: 90, y: 230 }, { motif: 'flower', x: 380, y: 226 }]),
    safety: TRASH,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"44차시에 정한 할 일을 일주일 동안 했어요. 쓰레기가 줄었을까요?" 줄었다, 그대로다, 늘었다에 손을 들게 한다. "느낌이 아니라 39차시처럼 다시 세어 보아야 알 수 있어요." 39차시 표를 칠판에 다시 붙인다. 시연 단추로 실천 전과 뒤 그래프를 보여 준다.',
        student: '일주일 동안 할 일을 지킨 날을 손가락으로 세어 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '실천 전과 뒤', data: [['전', 8], ['뒤', 5]], unit: '개', xLabel: '때', yLabel: '쓰레기 수', icon: 'square', icons: ONE('개'), showTable: true }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 다시 세어 견주기', minutes: 14, tool: 'chart',
            teacher: '모둠마다 장갑을 끼고 어제 모은 교실 쓰레기를 39차시와 같은 방법(나누기, 옮기며 세기)으로 다시 세어 활동지 표의 \'뒤\' 칸에 적는다. "같은 방법으로 세어야 견줄 수 있어요." 그다음 화면에서 1반·2반의 예시 그래프를 읽는다. 할 일과 이어진 쓰레기가 더 많이 줄었는지 살펴보게 한다.',
            task: '같은 방법으로 다시 세어 적고, 실천 전과 뒤의 그래프를 읽어 달라진 것을 찾아요.',
            levels: { easy: { showTable: true }, base: {}, challenge: {} },
            items: [
              { prompt: '모둠에서 장갑을 끼고 39차시와 같은 방법으로 쓰레기를 다시 세어 활동지 표에 적어요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '1반은 이면지함을 썼어요. 그래프를 보고 종이 쓰레기가 몇 개 줄었는지 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '1반 실천 전과 뒤', data: [['종이 (전)', 10], ['종이 (뒤)', 4], ['비닐 (전)', 6], ['비닐 (뒤)', 5]], unit: '개', xLabel: '종류', icon: 'square', icons: ONE('개'), question: '종이 쓰레기는 몇 개 줄었나요?', explain: '종이 (전) 10개에서 종이 (뒤) 4개를 빼면 6개예요.' },
                target: { value: 6 }, difficulty: 0.3, hints: ['두 줄의 그림을 하나씩 짝지어 보고, 짝이 없는 그림을 세어요.', '두 줄을 각각 다시 세어 보세요. 긴 줄에서 짝이 없는 그림만 세어요.'], },
              { prompt: '같은 1반 그래프에서 더 많이 줄어든 쓰레기를 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '1반 실천 전과 뒤', data: [['종이 (전)', 10], ['종이 (뒤)', 4], ['비닐 (전)', 6], ['비닐 (뒤)', 5]], unit: '개', xLabel: '종류', icon: 'square', icons: ONE('개'), choices: ['종이', '비닐'], question: '더 많이 줄어든 것은?', why: ['', '비닐은 한 개만 줄었어요.'], explain: '종이는 6개, 비닐은 1개 줄었어요.' },
                target: { pick: 0 }, difficulty: 0.25,
                predict: { q: '이면지함을 쓰면 무엇이 더 줄어들까요?', options: ['종이', '비닐'], answer: 0 },
                conclude: '할 일과 이어진 쓰레기가 더 많이 줄었어요. 할 일이 도움이 되었다는 뜻이에요.' },
              { prompt: '2반은 "먹을 만큼 받기"를 했어요. 그래프를 보고 나물을 남긴 친구가 다시 늘어난 주를 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '2반 나물을 남긴 친구', data: [['1주', 9], ['2주', 5], ['3주', 7]], unit: '명', xLabel: '주', icon: 'person', icons: ONE('명'), choices: ['1주', '2주', '3주'], question: '다시 늘어난 주는?', why: ['1주는 약속을 하기 전이에요.', '2주는 1주보다 줄었어요.', ''], explain: '3주는 2주보다 그림이 2개 많아졌어요.' },
                target: { pick: 2 }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잘 되지 않을 때 다음 방법', minutes: 13, tool: 'emotion',
            teacher: '"줄지 않거나 다시 늘었다면 할 일을 그만둬야 할까요?" 까닭을 찾아 방법을 바꾸면 된다는 것을 짚는다. 마지막 문항은 내 실천을 돌아보는 것이라 맞고 틀림이 없다고 말한다.',
            task: '잘 되지 않은 이야기를 읽고 다음 방법을 골라요. 그리고 내가 얼마나 지켰는지 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '2반은 3주에 나물을 남긴 친구가 다시 늘었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '2반은 "먹을 만큼 받기"를 했는데, 3주에 나물을 남긴 친구가 다시 늘었어요.', choices: [
                { id: 'why', text: '왜 늘었는지 친구들에게 묻고, 받을 때 "조금만요"라고 말하기로 해요', result: '4주에는 나물을 남긴 친구가 다시 줄었어요.', mood: '뿌듯함' },
                { id: 'stop', text: '소용없으니 그만해요', result: '나물은 다시 많이 남아요.', mood: '걱정', why: '한 번 늘었다고 그만두면 줄어든 것까지 되돌아가요.' },
                { id: 'name', text: '남긴 친구 이름을 칠판에 적어요', result: '친구들이 속상해하고 급식 시간이 즐겁지 않아요.', mood: '속상함', why: '탓하기보다 까닭을 찾아 방법을 바꾸는 것이 좋아요.' }] }, target: { choice: 'why' }, difficulty: 0.15 },
              { prompt: '이면지함이 꽉 차서 친구들이 종이를 그냥 버려요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '이면지함이 꽉 차서 더 넣을 자리가 없어요. 친구들이 종이를 그냥 휴지통에 버려요.', choices: [
                { id: 'duty', text: '다 쓴 이면지를 묶어 종이함에 내고, 이면지함 당번을 정해요', result: '이면지함에 다시 자리가 생겨 친구들이 종이를 넣어요.', mood: '기쁨' },
                { id: 'remove', text: '이면지함을 치워요', result: '종이 쓰레기가 처음처럼 많아져요.', mood: '걱정', why: '문제가 생기면 치우기보다 고쳐서 계속해요.' },
                { id: 'wait', text: '선생님이 비워 주실 때까지 기다려요', result: '며칠 동안 종이가 휴지통으로 가요.', mood: '걱정', why: '우리가 할 수 있는 일은 기다리지 않고 바로 해요.' }] }, target: { choice: 'duty' }, difficulty: 0.15 },
              { prompt: '일주일 동안 우리 반 할 일을 내가 얼마나 지켰는지 골라 보세요. 맞고 틀림이 없어요.', toolOptions: { mode: 'scale', situation: '일주일 동안 우리 반이 정한 할 일을 해 보았어요.', feeling: '뿌듯함', scaleLabels: { 1: '조금 지켰어요', 5: '날마다 지켰어요' }, ask: '나는 할 일을 얼마나 지켰나요?' }, target: { level: 'any' }, difficulty: 0.05,
                levels: { easy: { toolOptions: { scaleLabels: ['조금 지켰어요', '거의 지켰어요', '날마다 지켰어요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '모둠마다 다시 센 수를 칠판 표의 \'뒤\' 칸에 모아 적고, \'전\' 칸과 견주어 줄어든 쓰레기에 동그라미를 한다. 줄지 않은 것이 있으면 다음 방법을 한 가지 정한다. 출구 첫 문항을 틀린 학생에게는 두 줄의 그림을 짝지어 짝 없는 그림을 세게 한다. 다음 시간에는 단원 전체를 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '3반 휴지를 쓴 장수', data: [['손수건 쓰기 전', 11], ['손수건 쓴 뒤', 6]], unit: '장', xLabel: '때', icon: 'square', icons: ONE('장'), question: '휴지는 몇 장 줄었나요?', explain: '11장에서 6장을 빼면 5장이에요.' }, prompt: '3반 그래프를 보고 손수건을 쓴 뒤 휴지가 몇 장 줄었는지 써 보세요.', target: { value: 5 }, difficulty: 0.3 },
          { type: 'choice', prompt: '할 일을 했는데 쓰레기가 줄지 않았어요. 어떻게 할까요?', options: ['까닭을 찾아 방법을 바꿔요', '소용없으니 그만둬요', '어른이 해결해 줄 때까지 기다려요'], answer: 0, difficulty: 0.1, explain: '줄지 않은 까닭을 찾아 방법을 바꾸면 다시 해 볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '실천 전과 뒤',
      items: [
        { type: 'table', prompt: '실천 전(39차시)과 뒤에 센 수를 쓰세요.', columns: ['종류', '전', '뒤'], cells: [['종이', '', ''], ['플라스틱', '', ''], ['비닐', '', '']] },
        { type: 'short', prompt: '가장 많이 줄어든 쓰레기와 줄어든 수를 쓰세요.' },
        { type: 'choice', prompt: '할 일이 잘 되지 않을 때 알맞은 것에 ○ 하세요.', options: ['까닭을 찾아 방법을 바꿔요', '그만둬요', '친구를 탓해요'], answer: '까닭을 찾아 방법을 바꿔요' },
        { type: 'short', prompt: '다음 주에 바꿔 볼 방법을 쓰세요.' },
      ],
      easy: {
        note: '전과 뒤의 수를 나란히 쓰고 견주어요.',
        items: [
          { type: 'table', prompt: '종이 쓰레기 수를 쓰세요.', columns: ['전', '뒤'], rows: 1 },
          { type: 'short', prompt: '종이 쓰레기는 줄었나요, 그대로인가요, 늘었나요? 쓰세요.' },
          { type: 'draw', prompt: '할 일을 지킨 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 읽기 문항에 표도 함께 보이고, 마음 크기는 세 칸이에요.',
      base: '같은 방법으로 다시 세어 견주고, 잘 되지 않은 일에 다음 방법을 골라요.',
      challenge: '그래프를 읽은 뒤 종이와 비닐이 각각 몇 개 줄었는지 짝에게 말하고, 우리 반 표에서도 같은 방법으로 견주어요.',
    },
    teacherNotes: '준비: 전날 교실 쓰레기를 39차시와 똑같이 하루 모으고, 음식물·코 푼 휴지·뾰족한 것은 빼 둔다. 자주 보이는 어려움: ① 다른 방법으로 세어 견준다 → 같은 방법·같은 하루치로 세어야 견줄 수 있다고 짚는다. ② 줄지 않으면 실패라고 느낀다 → 까닭을 찾는 것도 탐구라고 말해 준다. ③ 남긴 친구를 탓한다 → 사람이 아니라 방법을 바꾼다고 짚는다. 마음 크기 문항은 맞고 틀림이 없다.',
  }));

  lessons.push(L(48, {
    title: '자연 단원 돌아보며 배운 차례 새로 써 보기',
    objective: '단원에서 탐구한 차례를 정리하고, 처음 보는 걱정에 그 차례를 써 보며 나의 배움과 실천을 스스로 돌아볼 수 있다.',
    illustration: ART('a paper-cut path through a garden with signposts for living things, questions, counting and a poster, and a child looking back proudly along the path', '우리가 걸어온 길', [
      { motif: 'tree', x: 410, y: 212 }, { motif: 'flower', x: 130, y: 226 }, { motif: 'bird', x: 340, y: 100 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '단원에서 만든 것들(화분 기록, 생물 소개 카드, 쓰레기 그래프, 포스터)을 칠판에 나란히 붙인다. "이 가운데 가장 기억에 남는 것은 무엇인가요? 왜 그런가요?" 두세 명의 이야기를 듣는다. "오늘은 우리가 걱정을 알아보고 할 일을 정한 차례를 정리하고, 처음 보는 걱정에도 써 봐요." 시연 단추로 탐구 차례 카드가 놓이는 모습을 보여 준다.',
        student: '단원에서 가장 기억에 남는 활동을 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['걱정되는 일 찾기', '알아볼 물음 만들기'], shuffle: false }, sequence: [{ order: ['걱정되는 일 찾기', '알아볼 물음 만들기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 탐구한 차례 정리하고 새로 써 보기', minutes: 14, tool: 'story',
            teacher: '"이 일을 하려면 앞에서 무엇이 먼저 있어야 할까요?" 물음이 없으면 알아볼 방법을 고를 수 없고, 세어 보지 않으면 할 일을 정할 근거가 없다는 것을 짚는다. 두 번째 문항은 처음 보는 걱정에 같은 차례를 써 보는 것이다.',
            task: '우리가 탐구한 차례대로 카드를 놓아요. 그리고 처음 보는 걱정에도 같은 차례를 써 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '33~47차시에 우리가 한 일을 먼저 한 것부터 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['걱정되는 일 찾기', '알아볼 물음 만들기', '알아볼 방법 고르기', '세어서 그래프로 나타내기', '할 일 정해 알리기'] },
                target: { order: ['걱정되는 일 찾기', '알아볼 물음 만들기', '알아볼 방법 고르기', '세어서 그래프로 나타내기', '할 일 정해 알리기'] }, difficulty: 0.2,
                hints: ['카드마다 그 일을 하려면 앞에서 무엇이 먼저 있어야 하는지 따져요.', '자리가 어긋난 카드가 있어요. 물음이 없는데 방법을 고를 수 있을까요?', '걱정 찾기 → 물음 만들기 → 방법 고르기 → 세어 나타내기 → 할 일 정해 알리기예요.'],
                levels: { easy: { prompt: '33~47차시에 우리가 한 일을 먼저 한 것부터 세 장 놓아 보세요.', toolOptions: { cards: ['걱정되는 일 찾기', '세어서 그래프로 나타내기', '할 일 정해 알리기'] }, target: { order: ['걱정되는 일 찾기', '세어서 그래프로 나타내기', '할 일 정해 알리기'] } } } },
              { prompt: '4반은 수도꼭지가 걱정돼요. 4반이 탐구할 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['수도꼭지가 열려 있어 걱정돼요', '하루에 몇 번 열려 있을까?', '쉬는 시간마다 세어 봐요', '점심 뒤에 가장 많았어요', '점심 뒤 수도 당번을 정해요'] },
                target: { order: ['수도꼭지가 열려 있어 걱정돼요', '하루에 몇 번 열려 있을까?', '쉬는 시간마다 세어 봐요', '점심 뒤에 가장 많았어요', '점심 뒤 수도 당번을 정해요'] }, difficulty: 0.3,
                hints: ['카드마다 걱정·물음·방법·알아낸 것·할 일 가운데 무엇인지 먼저 이름 붙여 봐요.', '자리가 어긋난 카드가 있어요. 세어 보기 전에 "가장 많았다"는 것을 알 수 있을까요?', '걱정 → 물음(몇 번?) → 세어 보기 → 점심 뒤가 가장 많음 → 당번 정하기 차례예요.'],
                levels: { easy: { prompt: '4반은 수도꼭지가 걱정돼요. 탐구할 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { cards: ['수도꼭지가 열려 있어 걱정돼요', '쉬는 시간마다 세어 봐요', '점심 뒤 수도 당번을 정해요'] }, target: { order: ['수도꼭지가 열려 있어 걱정돼요', '쉬는 시간마다 세어 봐요', '점심 뒤 수도 당번을 정해요'] } } } },
              { prompt: '17~32차시에 생물을 탐구한 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['살펴볼 생물 고르기', '궁금한 것을 물음으로 만들기', '사흘 동안 살펴보고 기록하기', '알아낸 것 소개하기'] },
                target: { order: ['살펴볼 생물 고르기', '궁금한 것을 물음으로 만들기', '사흘 동안 살펴보고 기록하기', '알아낸 것 소개하기'] }, difficulty: 0.2,
                hints: ['카드마다 그 일을 하려면 앞에서 무엇이 먼저 있어야 하는지 따져요.', '자리가 어긋난 카드가 있어요. 살펴보기 전에 소개할 수 있을까요?', '생물 고르기 → 물음 만들기 → 사흘 관찰 → 소개하기 차례예요.'],
                predict: { q: '생물 탐구와 쓰레기 탐구의 차례는 비슷할까요?', options: ['비슷해요', '전혀 달라요'], answer: 0 },
                conclude: '무엇을 탐구하든 궁금한 것을 물음으로 만들고, 살펴보거나 세어서 알아낸 것을 나누어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 배움 돌아보기', minutes: 13, tool: 'emotion',
            teacher: '"첫 문항만 고르는 문항이고, 나머지는 맞고 틀림이 없어요. 내가 정말 할 수 있는 만큼 골라요." 고른 뒤 가장 낮게 고른 것 하나를 활동지에 쓰고, 그것을 더 잘하려면 무엇을 할지 짝과 이야기하게 한다.',
            task: '처음 보는 상황에서 할 일을 고르고, 단원에서 배운 것을 내가 얼마나 할 수 있는지 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '방학에 바닷가에서 쓰레기를 많이 봤어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 가족과 바닷가에 갔는데, 모래밭에 쓰레기가 많이 있어요.', choices: [
                { id: 'count', text: '어떤 쓰레기가 많은지 살펴보고, 가족과 장갑을 끼고 조금 주워요', result: '페트병이 가장 많다는 것을 알고, 다음에는 물통을 챙기기로 해요.', mood: '뿌듯함' },
                { id: 'notmine', text: '우리 동네가 아니니까 상관없어요', result: '쓰레기는 그대로 바다로 쓸려 가요.', mood: '걱정', why: '바다는 모두가 함께 쓰는 곳이에요.' },
                { id: 'wait', text: '어른들이 치울 때까지 기다려요', result: '그사이 물새가 비닐을 물고 날아가요.', mood: '걱정', why: '어린이도 지금 할 수 있는 일이 있어요.' }] }, target: { choice: 'count' }, difficulty: 0.15 },
              { prompt: '둘레의 생물과 서로 도우며 사는 법을 내가 얼마나 알게 되었는지 골라 보세요. 맞고 틀림이 없어요.', toolOptions: { mode: 'scale', situation: '단원에서 화분을 돌보고 둘레의 생물을 살펴보았어요.', feeling: '뿌듯함', scaleLabels: { 1: '조금 알아요', 5: '잘 알아요' }, ask: '생물과 함께 사는 법을 얼마나 알게 되었나요?' }, target: { level: 'any' }, difficulty: 0.05,
                levels: { easy: { toolOptions: { scaleLabels: ['조금 알아요', '보통이에요', '잘 알아요'] } } } },
              { prompt: '궁금한 것을 물음으로 만들고 세어서 알아보는 것을 내가 얼마나 할 수 있는지 골라 보세요. 맞고 틀림이 없어요.', toolOptions: { mode: 'scale', situation: '걱정을 물음으로 바꾸고, 쓰레기를 세어 그래프로 나타내 보았어요.', feeling: '뿌듯함', scaleLabels: { 1: '도움이 필요해요', 5: '혼자 할 수 있어요' }, ask: '물음을 만들고 세어 알아보는 것을 얼마나 할 수 있나요?' }, target: { level: 'any' }, difficulty: 0.05,
                levels: { easy: { toolOptions: { scaleLabels: ['도움이 필요해요', '조금 할 수 있어요', '혼자 할 수 있어요'] } } } },
              { prompt: '우리 반이 정한 할 일을 앞으로도 얼마나 이어 가고 싶은지 골라 보세요. 맞고 틀림이 없어요.', toolOptions: { mode: 'scale', situation: '우리 반이 정한 할 일을 일주일 동안 해 보고 달라진 것을 확인했어요.', feeling: '신남', ask: '앞으로도 얼마나 이어 가고 싶나요?' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"단원을 마치며 한 가지 약속을 정해 볼까요? 우리 반 할 일 가운데 앞으로도 이어 갈 것 하나를 골라요." 칠판에 적고 박수로 마무리한다. 출구 첫 문항을 틀린 학생에게는 카드마다 걱정·물음·방법 가운데 무엇인지 이름 붙이게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', cards: ['빈 교실 불이 켜져 있어 걱정돼요', '불이 켜진 날은 며칠일까?', '일주일 동안 날마다 세어 봐요'] }, prompt: '5반이 탐구할 차례대로 카드를 놓아 보세요.', target: { order: ['빈 교실 불이 켜져 있어 걱정돼요', '불이 켜진 날은 며칠일까?', '일주일 동안 날마다 세어 봐요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '지구의 걱정에 대한 생각으로 알맞은 것은 무엇인가요?', options: ['어린이와 상관없어요', '세어 보고 알아낸 것으로 어린이도 할 일을 정할 수 있어요', '어른이 해결해 줄 때까지 기다려요'], answer: 1, difficulty: 0.1, explain: '우리 반처럼 세어 보고 알아낸 것으로 지금 할 수 있는 일을 정해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '자연 단원 돌아보기',
      items: [
        { type: 'table', prompt: '단원에서 한 일을 돌아보고 쓰세요.', columns: ['가장 기억에 남는 활동', '새로 알게 된 것', '앞으로 이어 갈 일'], rows: 1 },
        { type: 'check', prompt: '단원에서 내가 해 본 것에 ✓ 하세요.', options: ['화분이나 생물을 돌보았어요', '궁금한 것을 물음으로 만들었어요', '쓰레기를 세어 그래프로 나타냈어요', '할 일을 친구나 가족에게 알렸어요'] },
        { type: 'short', prompt: '돌아보기에서 가장 낮게 고른 것과, 더 잘하려고 할 일을 쓰세요.' },
        { type: 'draw', prompt: '단원을 마친 내 모습이나 가장 기억에 남는 장면을 그리세요.' },
      ],
      easy: {
        note: '맞고 틀림이 없어요. 내 생각을 써요.',
        items: [
          { type: 'short', prompt: '가장 기억에 남는 활동을 쓰세요.' },
          { type: 'short', prompt: '앞으로도 이어 갈 일을 쓰세요.' },
          { type: 'draw', prompt: '가장 기억에 남는 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 세 장이고 맞는 자리에 초록 테두리가 생겨요. 돌아보기는 세 칸에서 골라요.',
      base: '탐구 차례를 정리하고 처음 보는 걱정에 같은 차례를 써 봐요. 배움을 다섯 칸에서 골라요.',
      challenge: '차례를 놓은 뒤 4반 카드 가운데 걱정·물음·방법·알아낸 것·할 일이 각각 무엇인지 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 알아낸 것을 세어 보기 전에 놓는다 → "세어 보기 전에 가장 많은 것을 알 수 있을까요?"라고 묻는다. ② 돌아보기를 모두 가장 높게 고른다 → 맞고 틀림이 없으니 정말 할 수 있는 만큼 고르라고 다시 말한다. ③ 지구 문제는 어린이와 상관없다는 생각이 남아 있다 → 우리 반이 줄인 수를 다시 보여 준다. 돌아보기 결과는 교사 화면에서 학생별로 보고, 낮게 고른 영역은 다음 단원 시작 때 짧게 다시 짚는다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g2-int-1-02', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '통합교과', unitTitle: TITLE,
    flow: '1~16차시(바른 생활)는 둘레의 생물과 사람이 서로 돕는 일을 알고, 화분 돌보기·물과 종이 아끼기를 실천한 뒤 달라진 것을 돌아본다. 17~32차시(슬기로운 생활)는 살펴볼 생물을 골라 물음을 만들고, 사흘 동안 관찰·기록한 것을 읽어 알아낸 것을 소개한다. 33~38차시는 둘레에서 걱정되는 일(쓰레기·물·공기)을 찾아 알아볼 물음과 방법으로 바꾸고, 어린이도 지금 할 일이 있음을 확인한다. 39~43차시는 교실·급식·집·분리배출함의 쓰레기를 직접 세어 표와 그림그래프로 나타내고 견주어 읽는다. 44~48차시는 알아낸 것으로 우리 반 할 일을 정해 포스터와 말로 알리고, 일주일 실천 뒤 다시 세어 달라진 것을 확인한 다음 단원 전체를 돌아본다.',
    refs: {},
    lessons: lessons,
  });
})();
