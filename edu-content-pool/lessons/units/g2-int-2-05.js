/* 2학년 2학기 통합교과 5. 계절 — 48차시 (3차시는 이미 있는 g2-together-seasons로 잇는다)
 * 1~24차시 [바른 생활] 계절 변화에 맞추어 생활하기: 계절마다 달라지는 옷·먹을거리·안전 알기(1~8) → 오늘 날씨를 살펴 챙기고 더위·추위 이기기(9~16) → 달라진 둘레 돌아보기·습관 이어 가기(17~24)
 * 25~48차시 [슬기로운 생활] 계절과 생활의 관계 탐구: 궁금한 것을 물음으로 만들기(25~32) → 같은 곳을 계절마다 살피고 자료 읽기(33~40) → 알게 된 것을 까닭과 함께 설명하기(41~48)
 * 성취기준: units-map 단원 성취기준이 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다; units-index 후보는 [2바03-02]·[2슬03-02]).
 * 예문·이야기는 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다. 교과서 지문·노래 가사는 쓰지 않는다.
 */
(function () {
  var UNIT = 'g2-통합교과-2학기-5';
  var TITLE = '5. 계절';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g2-int-2-05-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 2, subject: '통합교과', unitTitle: TITLE,
    };
    var tail = { standards: [], minutes: 40, formats: ['chromebook', 'projector', 'print'] };
    var out = {};
    [head, { title: x.title, objective: x.objective }, tail].forEach(function (o) { for (var k in o) out[k] = o[k]; });
    for (var k in x) if (!(k in out)) out[k] = x[k];
    return out;
  }
  // 그림: prompt 틀 + 벡터 장면(배경 + 차시 모티프 + 한 줄 글)
  function ART(what, text, more, sky) {
    var top = sky === 'night' ? [{ motif: 'moon', x: 410, y: 56, s: 0.8 }, { motif: 'star', x: 90, y: 50, s: 0.6 }]
      : sky === 'snow' ? [{ motif: 'cloud', x: 120, y: 52 }, { motif: 'snow', x: 300, y: 70 }, { motif: 'snow', x: 380, y: 96, r: 4 }]
      : [{ motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }];
    return {
      prompt: HEAD + what + TAIL,
      scene: { viewBox: [480, 270], layers: top.concat([{ motif: 'hills', y: 204 }]).concat(more || []).concat([{ motif: 'text', x: 240, y: 140, text: text, size: 22 }]) },
    };
  }
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 돌고 도는 계절 고리(lifecycle 교구를 생물 아닌 '계절의 차례'에 쓴다 — 기본 힌트가 '자라는 차례'를 말하므로 문항마다 힌트를 직접 쓴다)
  var RING_LV = { easy: { live: true, instant: true }, base: {}, challenge: { spin: false } };

  var lessons = [];

  // ───────────────────────── 1~8차시: 계절마다 달라지는 생활 알기(생활 맥락 이해) ─────────────────────────

  lessons.push(L(1, {
    title: '여름과 요즘 달라진 모습 찾아 말하기',
    objective: '여름과 요즘의 옷차림·놀이·집 살림 가운데 달라진 것을 찾아 나누고, 계절이 돌고 도는 차례대로 놓을 수 있다.',
    illustration: ART('two paper-cut halves of the same schoolyard, the left half in summer with a child in short sleeves and a water gun, the right half in autumn with a child in a light jacket gathering fallen leaves', '여름과 요즘, 무엇이 달라졌을까?', [
      { motif: 'tree', x: 110, y: 214, color: 'mint' }, { motif: 'tree', x: 370, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 330, y: 170, color: 'peach', r: 20 }, { motif: 'leaf', x: 400, y: 186, color: 'rose', r: -30 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"여름 방학 때 입던 반소매 옷을 오늘도 입고 온 사람 있나요?" 손을 들게 하고 몇 명인지 함께 센다. "그때와 오늘, 아침에 집을 나설 때 무엇이 달랐나요?" 두세 명의 답(겉옷, 쌀쌀함, 낙엽)을 칠판에 적는다. 시연 단추로 카드가 \'여름\'과 \'요즘\' 가지로 나뉘는 모습을 보여 준다. "이번 단원에서는 계절이 바뀌면 우리 생활이 어떻게 바뀌는지 알아봐요."',
        student: '여름 방학 때와 오늘 아침, 내 옷차림이 어떻게 달랐는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '여름과 요즘', slots: ['여름에 했어요', '요즘 해요'], cards: ['수영복을 챙겨요', '낙엽을 밟아요'], shuffle: false }, sequence: [{ sort: { '여름에 했어요': ['수영복을 챙겨요'], '요즘 해요': ['낙엽을 밟아요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 여름에 한 일, 요즘 하는 일 나누기', minutes: 13, tool: 'mindmap',
            teacher: '카드를 하나씩 소리 내어 읽게 한다. "이 일을 할 때 날씨가 더웠나요, 쌀쌀했나요?" 날씨를 먼저 떠올리게 하면 나누기가 쉬워진다. "나는 요즘도 반소매를 입어요"라는 학생에게는 "그럼 아침에 밖에 나설 때 겉옷을 챙겼나요?"처럼 오늘 아침 경험으로 다시 묻는다. 계절이 바뀌어도 옷은 마음대로 입는다고 여기는 학생이 있으면 활동 2의 날씨 고리와 이어 준다.',
            task: '카드를 읽고 여름에 한 일과 요즘 하는 일로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '옷차림 카드를 여름과 요즘으로 나누어 보세요.', toolOptions: { topic: '여름과 요즘', slots: ['여름에 했어요', '요즘 해요'], cards: ['반소매 옷을 입어요', '반바지를 입어요', '겉옷을 챙겨 입어요', '긴바지를 입어요'] },
                target: { sort: { '여름에 했어요': ['반소매 옷을 입어요', '반바지를 입어요'], '요즘 해요': ['겉옷을 챙겨 입어요', '긴바지를 입어요'] } }, difficulty: 0.05,
                predict: { q: '여름과 요즘 옷차림이 다른 까닭은 무엇일까요?', options: ['날씨가 달라서', '옷이 작아져서'], answer: 0 },
                conclude: '더운 여름에는 얇게, 쌀쌀한 요즘에는 겉옷을 더 입어요. 옷차림은 날씨에 따라 달라져요.' },
              { prompt: '놀이 카드를 여름과 요즘으로 나누어 보세요.', toolOptions: { topic: '여름과 요즘 놀이', slots: ['여름에 했어요', '요즘 해요'], cards: ['물총 놀이를 해요', '계곡에서 물놀이해요', '낙엽을 모아 놀아요', '도토리를 주워요'] },
                target: { sort: { '여름에 했어요': ['물총 놀이를 해요', '계곡에서 물놀이해요'], '요즘 해요': ['낙엽을 모아 놀아요', '도토리를 주워요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '놀이 카드를 여름과 요즘으로 나누어 보세요. 두 계절 모두 하는 놀이는 카드 칸에 남겨요.', toolOptions: { cards: ['물총 놀이를 해요', '계곡에서 물놀이해요', '낙엽을 모아 놀아요', '도토리를 주워요', '교실에서 공기놀이를 해요'] } } } },
              { prompt: '집에서 쓰는 물건 카드를 여름과 요즘으로 나누어 보세요.', toolOptions: { topic: '우리 집 살림', slots: ['여름에 했어요', '요즘 해요'], cards: ['선풍기를 켜요', '모기장을 쳐요', '두꺼운 이불을 꺼내요', '따뜻한 차를 마셔요'] },
                target: { sort: { '여름에 했어요': ['선풍기를 켜요', '모기장을 쳐요'], '요즘 해요': ['두꺼운 이불을 꺼내요', '따뜻한 차를 마셔요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '집에서 쓰는 물건 카드를 나누어 보세요. 두 계절 모두 하는 일은 카드 칸에 남겨요.', toolOptions: { cards: ['선풍기를 켜요', '모기장을 쳐요', '두꺼운 이불을 꺼내요', '따뜻한 차를 마셔요', '밥을 먹고 이를 닦아요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 돌고 도는 계절 고리 만들기', minutes: 12, tool: 'lifecycle',
            teacher: '"봄이 지나면 어떤 계절이 오나요? 겨울 다음에는요?" 손가락으로 원을 그리며 계절이 끝없이 돌고 돈다는 것을 보여 준다. 고리는 어느 칸에서 시작해도 차례만 맞으면 된다. "겨울 다음은 끝이에요"라고 말하는 학생에게 "겨울이 끝나면 다시 무엇이 오지요?"라고 되묻는다. 날씨 낱말(따뜻하다·덥다·선선하다·춥다)을 함께 소리 내어 말하게 한다.',
            task: '카드를 계절이 바뀌는 차례대로 고리 위에 놓아요. 어느 자리에서 시작해도 돼요.',
            levels: RING_LV,
            items: [
              { prompt: '네 계절 카드를 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '계절은 돌고 돌아요', slots: 4, cards: ['봄', '여름', '가을', '겨울'] },
                target: { order: ['봄', '여름', '가을', '겨울'], cyclic: true }, difficulty: 0.05,
                hints: ['꽃이 피는 때부터 떠올려, 날씨가 점점 더워졌다가 다시 추워지는 차례를 따라가요.', '이웃한 두 카드를 보세요. 앞 계절이 끝나면 바로 뒤의 계절이 오나요?', '봄 다음은 여름, 여름 다음은 가을, 가을 다음은 겨울, 겨울 다음은 다시 봄이에요.'],
                levels: { challenge: { prompt: '네 계절 카드만 바뀌는 차례대로 고리에 놓아 보세요. 계절이 아닌 카드는 남겨요.', toolOptions: { cards: ['봄', '여름', '가을', '겨울', '장마'] } } } },
              { prompt: '날씨 카드를 계절이 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '날씨도 돌고 돌아요', slots: 4, cards: ['따뜻해요', '더워요', '선선해요', '추워요'] },
                target: { order: ['따뜻해요', '더워요', '선선해요', '추워요'], cyclic: true }, difficulty: 0.15,
                hints: ['계절마다 바깥에 나갔을 때 몸으로 느낀 날씨를 떠올려 차례대로 놓아요.', '땀이 나는 날 다음에 바로 손이 꽁꽁 어는 날이 오나요? 그 사이에 오는 날씨를 찾아요.', '따뜻해요 → 더워요 → 선선해요 → 추워요 → 다시 따뜻해요 차례예요.'] },
              { prompt: '나무 모습 카드를 계절이 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '나무도 돌고 돌아요', slots: 4, cards: ['꽃이 피어요', '잎이 무성해요', '잎이 물들어요', '가지만 남아요'] },
                target: { order: ['꽃이 피어요', '잎이 무성해요', '잎이 물들어요', '가지만 남아요'], cyclic: true }, difficulty: 0.2,
                hints: ['학교 앞 나무가 한 해 동안 어떻게 바뀌었는지 떠올려 차례대로 놓아요.', '잎이 물든 다음에 잎이 다시 무성해질까요? 물든 잎은 어떻게 되는지 생각해요.', '꽃이 피어요 → 잎이 무성해요 → 잎이 물들어요 → 가지만 남아요 → 다시 꽃이 피어요.'],
                levels: { challenge: { prompt: '나무 모습 카드를 바뀌는 차례대로 고리에 놓아 보세요. 나무에 생기지 않는 일은 남겨요.', toolOptions: { cards: ['꽃이 피어요', '잎이 무성해요', '잎이 물들어요', '가지만 남아요', '나무가 걸어 다녀요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 것 가운데 가장 크게 달라진 것은 무엇이었나요?" 두세 명에게 듣는다. "다음 시간에는 날씨에 맞게 옷을 고르는 방법을 알아봐요." 집에 가서 여름옷과 요즘 옷이 어디에 있는지 살펴 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '여름과 요즘 간식', slots: ['여름에 했어요', '요즘 해요'], cards: ['얼음물을 마셔요', '군고구마를 먹어요'] }, prompt: '간식 카드를 여름과 요즘으로 나누어 보세요.', target: { sort: { '여름에 했어요': ['얼음물을 마셔요'], '요즘 해요': ['군고구마를 먹어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '가을이 지나면 어떤 계절이 오나요?', options: ['봄', '여름', '겨울'], answer: 2, difficulty: 0.1, explain: '가을 다음에는 추운 겨울이 와요. 겨울이 지나면 다시 봄이 와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여름과 요즘',
      items: [
        { type: 'table', prompt: '여름과 요즘 내 모습을 한 가지씩 쓰세요.', columns: ['', '여름', '요즘'], cells: [['입는 옷', '', ''], ['하는 놀이', '', ''], ['먹는 것', '', '']] },
        { type: 'choice', prompt: '여름 다음에 오는 계절에 ○ 하세요.', options: ['봄', '가을', '겨울'], answer: '가을' },
        { type: 'short', prompt: '여름과 요즘 옷차림이 다른 까닭을 쓰세요.' },
        { type: 'draw', prompt: '요즘 학교에 오는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '여름은 더워요. 요즘은 쌀쌀해요.',
        items: [
          { type: 'choice', prompt: '요즘 입는 옷에 ○ 하세요.', options: ['겉옷', '수영복'], answer: '겉옷' },
          { type: 'choice', prompt: '여름에 한 놀이에 ○ 하세요.', options: ['물총 놀이', '낙엽 놀이'], answer: '물총 놀이' },
          { type: 'draw', prompt: '요즘 학교에 오는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 날씨를 먼저 떠올려요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '두 계절 모두 하는 일, 계절이 아닌 카드가 섞여 있어요. 그런 카드는 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 요즘도 반소매를 입는 학생이 있어 "요즘도 여름"이라고 한다 → 아침·저녁 바깥 날씨를 기준으로 삼게 한다. ② 계절이 겨울에서 끝난다고 여긴다 → 고리를 손가락으로 두 바퀴 따라가게 한다. ③ 장마를 계절로 안다 → 장마는 여름에 비가 오래 오는 때라고 알려 준다. 이 차시는 단원 첫 시간이라 정답보다 "날씨가 바뀌면 생활이 바뀐다"는 말을 학생 입으로 꺼내게 하는 데 둔다.',
  }));

  lessons.push(L(2, {
    title: '날씨에 맞는 옷차림 골라 입기',
    objective: '더운 날·선선한 날·추운 날에 알맞은 옷을 나누고, 날씨에 맞지 않는 옷차림을 고칠 수 있다.',
    illustration: ART('three paper-cut children in a row, one in a sun hat and short sleeves, one in a thin cardigan, one in a puffy coat with a knitted hat and mittens', '오늘은 어떤 옷을 입을까?', [
      { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 300, y: 180, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 옷을 고를 때 무엇을 보고 골랐나요?" 좋아하는 색, 엄마가 골라 줌, 창밖 날씨 같은 답을 듣는다. "좋아하는 옷도 좋지만, 날씨에 맞지 않으면 어떤 일이 생길까요?" 교사가 겨울 장갑을 끼고 부채질하는 흉내를 내어 웃음 속에서 어울리지 않는 옷차림을 보여 준다. 옷은 계절과 상관없이 마음대로 입어도 된다는 생각을 오늘 바꿔 보자고 말한다.',
        student: '내 옷 가운데 가장 따뜻한 옷과 가장 시원한 옷을 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '날씨와 옷', slots: ['더운 날', '선선한 날', '추운 날'], cards: ['민소매 옷', '털목도리'], shuffle: false }, sequence: [{ sort: { '더운 날': ['민소매 옷'], '추운 날': ['털목도리'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 날씨에 맞는 옷 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 옷을 입으면 몸이 시원해질까요, 따뜻해질까요?" 카드마다 얇은지 두꺼운지를 먼저 말하게 한다. 준비한 실물 옷(반소매 티셔츠·얇은 겉옷·털장갑)을 만져 보며 두께를 견주게 한다. "가을과 봄은 둘 다 선선해서 비슷한 옷을 입어요"처럼, 옷은 계절 이름보다 날씨로 고른다는 것을 짚는다.',
            task: '옷 카드를 더운 날, 선선한 날, 추운 날로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '윗옷 카드를 날씨에 맞게 나누어 보세요.', toolOptions: { topic: '날씨와 옷', slots: ['더운 날', '선선한 날', '추운 날'], cards: ['반소매 티셔츠', '얇은 겉옷', '두꺼운 외투', '털조끼'] },
                target: { sort: { '더운 날': ['반소매 티셔츠'], '선선한 날': ['얇은 겉옷'], '추운 날': ['두꺼운 외투', '털조끼'] } }, difficulty: 0.05 },
              { prompt: '모자와 신발 카드를 날씨에 맞게 나누어 보세요.', toolOptions: { topic: '날씨와 옷', slots: ['더운 날', '선선한 날', '추운 날'], cards: ['햇빛 가리는 모자', '샌들', '얇은 가디건', '털신', '귀마개'] },
                target: { sort: { '더운 날': ['햇빛 가리는 모자', '샌들'], '선선한 날': ['얇은 가디건'], '추운 날': ['털신', '귀마개'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '모자와 신발 카드를 날씨에 맞게 나누어 보세요. 옷이 아닌 카드는 남겨요.', toolOptions: { cards: ['햇빛 가리는 모자', '샌들', '얇은 가디건', '털신', '귀마개', '물통'] } } } },
              { prompt: '교실 옷걸이의 내 겉옷을 만져 보고, 오늘 날씨에 맞는지 짝과 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이럴 때 어떻게 입을까?', minutes: 13, tool: 'emotion',
            teacher: '"준호는 좋아하는 옷을 입고 싶어요. 그 마음은 알겠지만, 그렇게 나가면 어떻게 될까요?" 보기를 고르기 전에 결과를 먼저 예상해 말하게 한다. 좋아하는 옷을 포기하라는 것이 아니라, 겉옷을 더 입거나 벗어 날씨에 맞추는 방법이 있다는 것을 짚는다.',
            task: '친구의 상황을 읽고, 날씨에 맞게 입는 방법을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '눈 오는 아침이에요. 준호는 어떻게 입으면 좋을까요?', toolOptions: { mode: 'branch', who: '준호', situation: '눈이 오는 아침, 준호는 좋아하는 반소매 티셔츠를 입고 싶어요.', success: '맞아요! 좋아하는 옷 위에 외투를 입으면 눈 오는 날에도 따뜻해요.', choices: [
                { id: 'coat', text: '반소매 위에 두꺼운 외투를 입어요', result: '따뜻하게 눈 놀이를 해요', mood: '신남' },
                { id: 'only', text: '반소매만 입고 나가요', result: '몸이 덜덜 떨리고 콧물이 나요', mood: '걱정', why: '눈 오는 날 반소매만 입으면 몸이 어떻게 될지 떠올려 봐요.' },
                { id: 'hold', text: '외투를 손에 들고만 가요', result: '손에 든 외투는 몸을 데워 주지 못해요', mood: '속상함', why: '외투는 입어야 따뜻해요.' }] },
                target: { choice: 'coat' }, hints: ['눈 오는 아침 바깥은 얼마나 추울지 먼저 떠올려 보고, 보기마다 그렇게 입으면 몸이 어떨지 따져요.','고른 방법대로 나가면 바깥에서 몸이 따뜻할까요? 옷은 들고 있을 때와 입었을 때가 같을까요?','반소매 위에 두꺼운 외투를 입어요. 좋아하는 옷도 입고, 몸도 따뜻해요.'], difficulty: 0.05,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'coat', text: '반소매 위에 두꺼운 외투를 입어요', result: '따뜻하게 눈 놀이를 해요', mood: '신남' },
                  { id: 'only', text: '반소매만 입고 나가요', result: '몸이 덜덜 떨리고 콧물이 나요', mood: '걱정', why: '눈 오는 날 반소매만 입으면 몸이 어떻게 될지 떠올려 봐요.' }] } } } },
              { prompt: '아주 더운 날 체육 시간이에요. 민지는 어떻게 입으면 좋을까요?', toolOptions: { mode: 'branch', who: '민지', situation: '햇볕이 쨍쨍한 날, 민지가 운동장 체육 시간에 나가요.', success: '맞아요! 더운 날에는 얇은 옷을 입고 모자로 햇볕을 가려요.', choices: [
                { id: 'hat', text: '반소매 옷에 모자를 써요', result: '시원하게 뛰어놀아요', mood: '기쁨' },
                { id: 'hood', text: '두꺼운 후드 티셔츠를 입어요', result: '땀이 줄줄 나고 어지러워요', mood: '걱정', why: '더운 날 두꺼운 옷을 입으면 몸에 열이 쌓여요.' },
                { id: 'scarf', text: '목도리를 둘러요', result: '목에 땀띠가 나요', mood: '속상함', why: '목도리는 추운 날 목을 따뜻하게 하는 옷이에요.' }] },
                target: { choice: 'hat' }, hints: ['햇볕이 쨍쨍한 날 운동장에서 뛰면 몸이 어떻게 될지 먼저 떠올리고, 보기마다 그 옷을 입은 모습을 생각해요.','고른 옷을 입고 뛰면 땀이 많이 날까요, 시원할까요? 그 옷은 어느 계절에 입는 옷인가요?','반소매 옷에 모자를 써요. 얇은 옷은 시원하고, 모자는 뜨거운 햇볕을 가려 줘요.'], difficulty: 0.05,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'hat', text: '반소매 옷에 모자를 써요', result: '시원하게 뛰어놀아요', mood: '기쁨' },
                  { id: 'hood', text: '두꺼운 후드 티셔츠를 입어요', result: '땀이 줄줄 나고 어지러워요', mood: '걱정', why: '더운 날 두꺼운 옷을 입으면 몸에 열이 쌓여요.' }] } } } },
              { prompt: '아침은 쌀쌀하고 낮에는 따뜻해진대요. 하준이는 어떻게 입으면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '선선한 가을 아침이에요. 낮에는 따뜻해진다고 해요.', success: '맞아요! 아침에는 겉옷을 입고, 낮에 더우면 벗으면 돼요.', choices: [
                { id: 'layer', text: '얇은 겉옷을 입고, 더우면 벗어요', result: '아침에도 낮에도 알맞아요', mood: '편안함' },
                { id: 'heavy', text: '두꺼운 외투만 입어요', result: '낮에 너무 더워 땀이 나요', mood: '짜증', why: '낮에는 따뜻해진대요. 두꺼운 외투는 낮에 어떨까요?' },
                { id: 'thin', text: '반소매만 입어요', result: '아침에 오들오들 떨어요', mood: '걱정', why: '아침은 쌀쌀하대요. 아침에 나설 때를 떠올려 봐요.' }] },
                target: { choice: 'layer' }, hints: ['아침 날씨와 낮 날씨가 어떻게 다른지 먼저 짚고, 두 때에 모두 알맞은 방법을 찾아요.','고른 방법은 쌀쌀한 아침에도, 따뜻한 낮에도 알맞나요? 한 때만 생각하지 않았는지 보세요.','얇은 겉옷을 입고, 더우면 벗어요. 입고 벗기 쉬운 옷이 날씨가 바뀌는 날에 알맞아요.'], difficulty: 0.2,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'layer', text: '얇은 겉옷을 입고, 더우면 벗어요', result: '아침에도 낮에도 알맞아요', mood: '편안함' },
                  { id: 'heavy', text: '두꺼운 외투만 입어요', result: '낮에 너무 더워 땀이 나요', mood: '짜증', why: '낮에는 따뜻해진대요. 두꺼운 외투는 낮에 어떨까요?' },
                  { id: 'thin', text: '반소매만 입어요', result: '아침에 오들오들 떨어요', mood: '걱정', why: '아침은 쌀쌀하대요. 아침에 나설 때를 떠올려 봐요.' },
                  { id: 'bag', text: '겉옷을 가방 깊이 넣어 두고 반소매로 가요', result: '아침 길에 추워도 겉옷을 꺼내기 어려워요', mood: '속상함', why: '쌀쌀한 아침에는 겉옷을 입고 나서야 해요.' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"옷을 고를 때 무엇을 먼저 살피기로 했나요?" 학생들이 말하게 한다. "내일 아침에 창밖을 보고 옷을 골라 와서 어떻게 골랐는지 말해 줘요." 겉옷을 벗어 의자에 걸 때는 소매를 바르게 펴서 거는 모습도 함께 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 옷 나누기', slots: ['더운 날', '선선한 날', '추운 날'], cards: ['민소매 원피스', '얇은 바람막이', '털목도리'] }, prompt: '처음 보는 옷 카드를 날씨에 맞게 나누어 보세요.', target: { sort: { '더운 날': ['민소매 원피스'], '선선한 날': ['얇은 바람막이'], '추운 날': ['털목도리'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '옷차림을 고를 때 가장 먼저 살필 것은?', options: ['가장 좋아하는 색', '바깥 날씨', '친구가 입은 옷'], answer: 1, difficulty: 0.1, explain: '바깥 날씨를 보고 고르면 덥지도 춥지도 않게 지낼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '날씨에 맞는 옷',
      items: [
        { type: 'table', prompt: '날씨에 맞는 옷을 두 가지씩 쓰세요.', columns: ['더운 날', '선선한 날', '추운 날'], rows: 2 },
        { type: 'choice', prompt: '눈 오는 날 알맞은 옷차림에 ○ 하세요.', options: ['반소매와 반바지', '외투와 장갑', '수영복'], answer: '외투와 장갑' },
        { type: 'short', prompt: '아침은 쌀쌀하고 낮은 따뜻한 날, 어떻게 입으면 좋을지 쓰세요.' },
        { type: 'draw', prompt: '내일 날씨를 떠올려, 내가 입고 올 옷을 그리세요.' },
      ],
      easy: {
        note: '얇은 옷은 더운 날, 두꺼운 옷은 추운 날!',
        items: [
          { type: 'choice', prompt: '추운 날 입는 옷에 ○ 하세요.', options: ['털장갑', '반바지'], answer: '털장갑' },
          { type: 'choice', prompt: '더운 날 쓰는 것에 ○ 하세요.', options: ['햇빛 가리는 모자', '귀마개'], answer: '햇빛 가리는 모자' },
          { type: 'draw', prompt: '내일 내가 입고 올 옷을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 상황 고르기는 보기가 두 개예요.',
      base: '옷 카드를 모두 나눈 뒤 확인을 눌러요. 상황마다 보기 세 개 가운데 골라요.',
      challenge: '옷이 아닌 카드가 섞여 있고, 마지막 상황에는 헷갈리는 보기가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옷 이름을 계절 이름에만 붙인다(가디건은 가을 옷) → 같은 옷을 봄에도 입는다는 것을 짚고 날씨로 나누게 한다. ② 좋아하는 옷이면 날씨와 상관없다고 한다 → 그 옷 위에 겉옷을 더하거나 벗는 방법을 함께 찾는다. ③ 집안 형편에 따라 옷이 다양하지 않을 수 있으니 학생의 실제 옷을 평가하지 않고 카드와 교실 옷걸이만 다룬다.',
  }));

  lessons.push(L(4, {
    title: '계절마다 조심할 일 찾아 약속하기',
    objective: '봄·여름·가을·겨울에 조심할 일을 계절과 짝 짓고, 안전 약속을 알맞은 말로 말할 수 있다.',
    illustration: ART('four small paper-cut scenes in a row, a child wearing a mask under a yellow dusty spring sky, a child stretching before swimming, a child putting on a jacket on a chilly autumn morning, a child walking slowly on an icy path', '계절마다 조심해요', [
      { motif: 'flower', x: 70, y: 226, color: 'rose' }, { motif: 'wave', x: 190, y: 236 }, { motif: 'leaf', x: 300, y: 214, color: 'peach' }, { motif: 'snow', x: 410, y: 200 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"여름 방학에 물놀이할 때 어른들이 무엇을 하라고 하셨나요?" "겨울에 눈길을 걸을 때는요?" 두세 명의 경험을 듣는다. "계절이 바뀌면 조심할 일도 바뀌어요. 오늘은 계절마다 조심할 일을 찾아 약속으로 만들어요." 시연 단추로 조심할 일 카드가 계절 옆에 놓이는 모습을 보여 준다.',
        student: '물놀이나 눈길에서 조심했던 일을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '계절과 안전', slots: [{ id: 'sum', label: '여름' }], cards: ['모기에 물리지 않게 해요'], shuffle: false }, sequence: [{ match: { sum: '모기에 물리지 않게 해요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 계절과 조심할 일 짝 짓기', minutes: 13, tool: 'mindmap',
            teacher: '"황사는 언제 많이 올까요? 꽁꽁 언 길은요?" 카드마다 그 일이 왜 생기는지 날씨와 이어 말하게 한다. 쌀쌀한 아침은 봄에도 있다고 말하는 학생에게는 "맞아요. 그런데 황사는 어느 계절 일일까요? 남은 카드와 함께 생각해 봐요"라고 짚는다.',
            task: '계절마다 조심할 일을 찾아 짝 지어요.',
            levels: CARD_LV,
            items: [
              { prompt: '계절과 조심할 일을 하나씩 짝 지어 보세요.', toolOptions: { mode: 'match', topic: '계절과 안전', slots: [{ id: 'spr', label: '봄: 바람에 흙먼지가 날려요' }, { id: 'sum', label: '여름: 덥고 음식이 쉽게 상해요' }, { id: 'aut', label: '가을: 아침저녁이 쌀쌀해요' }, { id: 'win', label: '겨울: 길이 꽁꽁 얼어요' }], cards: ['황사가 오면 마스크를 써요', '음식은 바로 먹고 남기지 않아요', '겉옷을 챙겨 감기를 막아요', '빙판길에서는 뛰지 않아요'] },
                target: { match: { spr: '황사가 오면 마스크를 써요', sum: '음식은 바로 먹고 남기지 않아요', aut: '겉옷을 챙겨 감기를 막아요', win: '빙판길에서는 뛰지 않아요' } }, difficulty: 0.1 },
              { prompt: '여름에 조심할 일과 겨울에 조심할 일을 나누어 보세요.', toolOptions: { topic: '여름과 겨울 안전', slots: ['여름에 조심해요', '겨울에 조심해요'], cards: ['모기에 물리지 않게 해요', '햇볕 아래 오래 있지 않아요', '난로 가까이 가지 않아요', '언 호수 위에 올라가지 않아요'] },
                target: { sort: { '여름에 조심해요': ['모기에 물리지 않게 해요', '햇볕 아래 오래 있지 않아요'], '겨울에 조심해요': ['난로 가까이 가지 않아요', '언 호수 위에 올라가지 않아요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '여름과 겨울에 조심할 일을 나누어 보세요. 계절과 상관없이 언제나 지키는 약속은 남겨요.', toolOptions: { cards: ['모기에 물리지 않게 해요', '햇볕 아래 오래 있지 않아요', '난로 가까이 가지 않아요', '언 호수 위에 올라가지 않아요', '횡단보도는 초록불에 건너요'] } } } },
              { prompt: '눈 오는 날 지킬 안전 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '눈 오는 날 약속', cards: ['장갑을 끼고 눈을 만져요', '빙판에서 미끄럼 타며 뛰어요', '주머니에서 손을 빼고 걸어요', '눈 뭉치에 돌을 넣어 던져요'] },
                target: { pick: ['장갑을 끼고 눈을 만져요', '주머니에서 손을 빼고 걸어요'] }, difficulty: 0.2,
                predict: { q: '빙판길에서 손을 주머니에 넣고 걸으면 어떻게 될까요?', options: ['더 안전해요', '넘어질 때 다쳐요'], answer: 1 },
                conclude: '손이 주머니에 있으면 넘어질 때 짚지 못해 더 크게 다쳐요. 장갑을 끼고 손을 빼고 걸어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전 약속 말해 주기', minutes: 13, tool: 'story',
            teacher: '말풍선을 소리 내어 읽고 빈칸에 넣을 말을 고르게 한다. "친구에게 이렇게 말해 주면 친구는 어떤 마음일까요?" 모둠별로 \'펭귄 걸음\'(무릎을 살짝 굽히고 발을 조금씩 떼며 걷기)을 해 보며, 빙판길에서 왜 천천히 걸어야 하는지 몸으로 느끼게 한다.',
            task: '친구의 말풍선 빈칸에 알맞은 안전 약속 낱말을 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물에 들어가려는 준호에게 해 줄 말을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '민지', label: '물에 들어가기 전에 ___ 해.' }, { id: 'f2', who: '민지', label: '물에는 ___ 함께 들어가.' }], cards: ['준비 운동을', '낮잠을', '어른과', '혼자서'] },
                target: { fill: { f1: '준비 운동을', f2: '어른과' } }, difficulty: 0.05, levels: { challenge: { toolOptions: { cards: ['준비 운동을', '낮잠을', '어른과', '혼자서', '친구 몰래'] } } } },
              { prompt: '언 길을 걷는 친구에게 해 줄 말을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', label: '길이 꽁꽁 얼었어. ___ 걸어.' }, { id: 'f2', who: '서아', label: '주머니에서 ___ 빼고 걸어.' }], cards: ['천천히', '뛰어서', '손을', '발을'] },
                target: { fill: { f1: '천천히', f2: '손을' } }, difficulty: 0.1 },
              { prompt: '황사가 심한 날, 하준이에게 해 줄 말을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '오늘은 ___ 놀자.' }, { id: 'f2', who: '준호', label: '집에 가면 손과 얼굴을 ___.' }], cards: ['교실에서', '운동장에서', '씻자', '그대로 두자'] },
                target: { fill: { f1: '교실에서', f2: '씻자' } }, difficulty: 0.15, levels: { challenge: { toolOptions: { cards: ['교실에서', '운동장에서', '씻자', '그대로 두자', '바닷가에서'] } } } },
              { prompt: '모둠 친구와 펭귄 걸음으로 교실 뒤를 한 바퀴 걸어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 약속 가운데 지금 계절에 꼭 지킬 것은 무엇일까요?" 학생들이 고른 약속을 칠판에 적어 교실 뒤에 붙인다. 계절이 바뀌면 약속판도 바꿀 것이라고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 약속', slots: [{ id: 'h', label: '땀이 많이 나는 더운 날' }, { id: 'c', label: '찬 바람이 쌩쌩 부는 날' }], cards: ['물을 자주 마셔요', '목도리로 목을 감싸요'] }, prompt: '날씨와 지킬 약속을 이어 보세요.', target: { match: { h: '물을 자주 마셔요', c: '목도리로 목을 감싸요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '여름 물놀이 전에 꼭 할 일은?', options: ['준비 운동', '얼음 먹기', '두꺼운 옷 입기'], answer: 0, difficulty: 0.1, explain: '준비 운동으로 몸을 풀어야 물속에서 다리에 쥐가 나지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절마다 조심할 일',
      items: [
        { type: 'table', prompt: '계절마다 조심할 일을 한 가지씩 쓰세요.', columns: ['계절', '조심할 일'], cells: [['봄', ''], ['여름', ''], ['가을', ''], ['겨울', '']] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '빙판길에서는 주머니에서 ___을 빼고 천천히 걸어요.', answer: '손' },
        { type: 'check', prompt: '여름에 지킬 약속에 ✓ 하세요.', options: ['물놀이 전 준비 운동', '물을 자주 마시기', '난로 가까이 가기'] },
        { type: 'draw', prompt: '지금 계절에 지킬 안전 약속을 지키는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '여름은 물놀이와 더위, 겨울은 얼음길과 추위를 조심해요.',
        items: [
          { type: 'choice', prompt: '빙판길에서 어떻게 걸을까요?', options: ['천천히', '뛰어서'], answer: '천천히' },
          { type: 'choice', prompt: '물놀이 전에 할 일에 ○ 하세요.', options: ['준비 운동', '낮잠'], answer: '준비 운동' },
          { type: 'draw', prompt: '안전 약속을 지키는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 말풍선은 소리 내어 읽으며 채워요.',
      base: '짝을 모두 지은 뒤 확인을 눌러요.',
      challenge: '언제나 지키는 약속 카드가 섞여 있어요. 계절과 이어지는 약속만 칸에 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쌀쌀함·감기를 봄과 가을 모두에 붙인다 → 맞는 생각이라고 인정하고, 이 문항에서는 황사가 봄을 알려 주는 단서라는 것을 짚는다. ② 빙판에서 주머니에 손을 넣으면 따뜻해서 좋다고 한다 → 넘어질 때 손으로 짚지 못한다는 것을 펭귄 걸음 활동에서 보여 준다. ③ 펭귄 걸음은 교실 뒤 빈 곳에서 책상을 밀어 두고 한 모둠씩 한다.',
  }));

  lessons.push(L(5, {
    title: '계절에 나는 먹을거리 알아보기',
    objective: '여름과 가을에 나는 과일·채소를 나누고, 더운 날과 추운 날에 어울리는 음식을 까닭과 함께 고를 수 있다.',
    illustration: ART('a paper-cut market stall with a summer basket of melons and peaches and an autumn basket of apples, pears and sweet potatoes, a child pointing at the baskets', '이 먹을거리는 언제 날까?', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 380, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 330, y: 176, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난여름에 가장 많이 먹은 과일은 무엇이었나요? 요즘 가게에는 어떤 과일이 많이 보이나요?" 학생들 답을 여름·요즘으로 나누어 칠판에 적는다. "과일과 채소도 잘 자라고 맛있게 익는 계절이 있어요." 교사가 준비한 사과(또는 사진)를 보여 주며 냄새를 맡게 한다.',
        student: '지난여름과 요즘 먹은 과일을 하나씩 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '언제 날까?', slots: ['여름에 나요', '가을에 거둬요'], cards: ['수박', '감'], shuffle: false }, sequence: [{ sort: { '여름에 나요': ['수박'], '가을에 거둬요': ['감'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 여름에 나는 것, 가을에 거두는 것', minutes: 13, tool: 'mindmap',
            teacher: '"이 과일을 언제 많이 먹었나요? 가게에 언제 가득 쌓여 있었나요?" 경험으로 먼저 말하게 한다. 요즘은 비닐하우스와 냉장 창고 덕분에 다른 계절에도 살 수 있지만, 밭과 나무에서 저절로 익는 때가 있다는 것을 짚는다. 가을은 열매와 곡식을 거두는 때라는 것을 말로 정리하게 한다.',
            task: '과일과 채소 카드를 여름에 나는 것과 가을에 거두는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '과일 카드를 여름과 가을로 나누어 보세요.', toolOptions: { topic: '언제 날까?', slots: ['여름에 나요', '가을에 거둬요'], cards: ['참외', '복숭아', '사과', '배'] },
                target: { sort: { '여름에 나요': ['참외', '복숭아'], '가을에 거둬요': ['사과', '배'] } }, difficulty: 0.1 },
              { prompt: '채소와 곡식 카드를 여름과 가을로 나누어 보세요.', toolOptions: { topic: '언제 날까?', slots: ['여름에 나요', '가을에 거둬요'], cards: ['옥수수', '오이', '고구마', '땅콩'] },
                target: { sort: { '여름에 나요': ['옥수수', '오이'], '가을에 거둬요': ['고구마', '땅콩'] } }, difficulty: 0.2,
                predict: { q: '고구마는 땅속에서 자라요. 언제 캘까요?', options: ['여름', '가을'], answer: 1 },
                conclude: '고구마와 땅콩은 여름 내내 땅속에서 자라 가을에 캐요. 가을은 거두는 계절이에요.' },
              { prompt: '봄에 들에서 캐는 나물만 골라 보세요.', toolOptions: { mode: 'pick', basket: '봄나물', cards: ['냉이', '쑥', '귤', '옥수수'] },
                target: { pick: ['냉이', '쑥'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['냉이', '쑥', '귤', '옥수수', '고구마'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 날씨에 어울리는 음식 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"땀이 줄줄 나는 날에는 어떤 음식이 먹고 싶나요? 손이 꽁꽁 언 날에는요?" 시원한 음식과 따뜻한 음식을 몸의 느낌과 이어 말하게 한다. 명절 음식은 그 명절이 있는 계절과 이어 소개한다(설날 떡국, 추석 송편). 마지막으로 교사가 준비한 제철 과일(사과·귤 가운데 하나)을 모둠별로 관찰하며 색·냄새·만진 느낌을 말하게 한다.',
            task: '날씨와 명절에 어울리는 음식을 짝 짓고 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '날씨와 어울리는 음식을 이어 보세요.', toolOptions: { mode: 'match', topic: '날씨와 음식', slots: [{ id: 'hot', label: '땀이 줄줄 나는 더운 날' }, { id: 'cold', label: '손이 꽁꽁 시린 추운 날' }], cards: ['시원한 오이냉국', '뜨끈한 어묵탕'] },
                target: { match: { hot: '시원한 오이냉국', cold: '뜨끈한 어묵탕' } }, difficulty: 0.05 },
              { prompt: '명절과 명절에 먹는 음식을 이어 보세요.', toolOptions: { mode: 'match', topic: '명절 음식', slots: [{ id: 'sol', label: '겨울 설날 아침' }, { id: 'chu', label: '가을 추석 날' }], cards: ['떡국', '송편'] },
                target: { match: { sol: '떡국', chu: '송편' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '명절과 명절에 먹는 음식을 이어 보세요. 남는 카드도 있어요.', toolOptions: { cards: ['떡국', '송편', '팥빙수'] } } } },
              { prompt: '더위를 식혀 주는 여름 먹을거리만 골라 보세요.', toolOptions: { mode: 'pick', basket: '여름에 시원해요', cards: ['수박화채', '미숫가루', '군고구마', '호떡'] },
                target: { pick: ['수박화채', '미숫가루'] }, difficulty: 0.15 },
              { prompt: '모둠에서 과일을 보고, 냄새 맡고, 만져 본 느낌을 하나씩 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 알게 된 것 가운데 가장 놀라웠던 것은 무엇인가요?" 두세 명에게 듣는다. 과일을 만진 손은 씻게 하고, 알레르기가 있는 학생은 관찰만 하도록 미리 살핀다. 다음 시간에는 계절마다 즐기는 놀이를 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 과일', slots: ['여름에 나요', '가을에 거둬요'], cards: ['자두', '밤'] }, prompt: '처음 보는 카드를 여름과 가을로 나누어 보세요.', target: { sort: { '여름에 나요': ['자두'], '가을에 거둬요': ['밤'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '여름에 수박을 많이 먹는 까닭으로 알맞은 것은?', options: ['물이 많아 더위를 식혀 줘서', '껍질이 두꺼워서', '겨울에 열려서'], answer: 0, difficulty: 0.1, explain: '수박은 더운 여름에 익고, 물이 많아 몸을 시원하게 해 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절의 먹을거리',
      items: [
        { type: 'table', prompt: '계절에 나는 먹을거리를 두 가지씩 쓰세요.', columns: ['여름', '가을'], rows: 2 },
        { type: 'choice', prompt: '추석에 먹는 음식에 ○ 하세요.', options: ['떡국', '송편', '팥빙수'], answer: '송편' },
        { type: 'short', prompt: '추운 날 따뜻한 음식을 먹으면 좋은 까닭을 쓰세요.' },
        { type: 'draw', prompt: '모둠에서 관찰한 과일을 그리고, 냄새나 만진 느낌을 한 낱말로 쓰세요.' },
      ],
      easy: {
        note: '여름에는 시원한 것, 겨울에는 따뜻한 것!',
        items: [
          { type: 'choice', prompt: '가을에 거두는 것에 ○ 하세요.', options: ['사과', '참외'], answer: '사과' },
          { type: 'choice', prompt: '더운 날 먹으면 시원한 것에 ○ 하세요.', options: ['수박화채', '어묵탕'], answer: '수박화채' },
          { type: 'draw', prompt: '모둠에서 관찰한 과일을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 가게에서 언제 많이 보았는지 떠올려요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '고르지 말아야 할 카드가 하나씩 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 요즘은 마트에서 언제나 살 수 있어 계절이 없다고 한다 → 맞는 경험이라고 인정하고, 밭과 나무에서 저절로 익는 때를 묻는 것이라고 기준을 다시 말한다. ② 옥수수를 가을 곡식으로 안다 → 찐 옥수수를 가장 많이 먹는 때가 한여름이라는 경험으로 잇는다. ③ 과일 관찰 때 알레르기 학생을 미리 확인하고, 먹지 않고 보고·냄새 맡고·만지기만 한다.',
  }));

  lessons.push(L(6, {
    title: '계절 놀이를 고르고 안전하게 노는 차례 정하기',
    objective: '계절마다 즐기는 놀이를 찾고, 그 놀이를 안전하게 하는 차례를 바르게 놓을 수 있다.',
    illustration: ART('a paper-cut playground through the year, children building a sandcastle by the sea, children making crowns from red maple leaves, and children riding a snow sled down a small hill', '계절마다 어떤 놀이를 할까?', [
      { motif: 'wave', x: 110, y: 236 }, { motif: 'leaf', x: 240, y: 200, color: 'rose' }, { motif: 'snow', x: 380, y: 190 }, { motif: 'mountain', x: 400, y: 214, s: 0.7 }]),
    safety: ['몸짓 퀴즈는 책상을 밀어 둔 교실 뒤 빈 곳에서 한 모둠씩 해요.', '뛰는 흉내는 제자리에서만 해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 몸으로 놀이를 보여 줄게요. 어느 계절 놀이일까요?" 교사가 썰매 줄을 끄는 흉내를 낸다. 답을 맞힌 학생에게 "어떻게 알았나요?"라고 묻고 \'눈\', \'춥다\' 같은 단서 낱말을 칠판에 적는다. "놀이에도 계절이 있고, 계절마다 조심할 차례가 있어요."',
        student: '선생님의 몸짓을 보고 어느 계절 놀이인지 맞혀 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['준비 운동을 해요', '물에 들어가 놀아요'], shuffle: false }, sequence: [{ order: ['준비 운동을 해요', '물에 들어가 놀아요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 계절 놀이 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"이 놀이를 하려면 무엇이 있어야 하나요? 그것은 언제 볼 수 있나요?" 놀이에 꼭 필요한 것(눈, 단풍잎, 바닷물, 꽃)을 먼저 찾게 하면 계절이 보인다. 술래잡기처럼 언제든 하는 놀이도 있다는 것을 인정하고, 오늘은 계절이 있어야 할 수 있는 놀이를 찾는다고 기준을 말한다.',
            task: '놀이 카드를 계절과 짝 짓고, 그 계절에만 할 수 있는 놀이를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '계절과 그 계절 놀이를 하나씩 이어 보세요.', toolOptions: { mode: 'match', topic: '계절 놀이', slots: [{ id: 'spr', label: '꽃이 활짝 핀 봄' }, { id: 'sum', label: '바닷물이 시원한 여름' }, { id: 'aut', label: '잎이 물든 가을' }, { id: 'win', label: '눈이 쌓인 겨울' }], cards: ['꽃잎으로 꽃 왕관 꾸미기', '바닷가 모래성 쌓기', '단풍잎 모아 책갈피 만들기', '눈썰매 타기'] },
                target: { match: { spr: '꽃잎으로 꽃 왕관 꾸미기', sum: '바닷가 모래성 쌓기', aut: '단풍잎 모아 책갈피 만들기', win: '눈썰매 타기' } }, difficulty: 0.05 },
              { prompt: '겨울이어야 할 수 있는 놀이만 골라 보세요.', toolOptions: { mode: 'pick', basket: '겨울 놀이', cards: ['눈사람 만들기', '얼음판 팽이치기', '매미 소리 듣기', '물총 놀이'] },
                target: { pick: ['눈사람 만들기', '얼음판 팽이치기'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '겨울이어야 할 수 있는 놀이만 골라 보세요. 언제든 하는 놀이는 고르지 않아요.', toolOptions: { cards: ['눈사람 만들기', '얼음판 팽이치기', '매미 소리 듣기', '물총 놀이', '실내 공기놀이'] } } } },
              { prompt: '놀이와 꼭 챙길 준비물을 이어 보세요.', toolOptions: { mode: 'match', topic: '놀이 준비물', slots: [{ id: 'sled', label: '눈썰매 타기' }, { id: 'sand', label: '한낮 바닷가 모래성 쌓기' }], cards: ['물이 스미지 않는 장갑', '햇빛 가리는 모자와 마실 물'] },
                target: { match: { sled: '물이 스미지 않는 장갑', sand: '햇빛 가리는 모자와 마실 물' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전하게 노는 차례', minutes: 14, tool: 'kitchen',
            teacher: '"물에 바로 뛰어들면 어떤 일이 생길까요?" 차례를 놓기 전에 위험한 순서를 먼저 떠올리게 한다. 물놀이에서는 심장에서 먼 다리부터 물을 묻혀 몸을 놀라지 않게 한다는 것을 손으로 다리를 쓸어 보이며 보여 준다. 끝으로 모둠마다 계절 놀이 하나를 몸짓으로 보여 주고 다른 모둠이 맞히게 한다.',
            task: '계절 놀이를 안전하게 하는 차례대로 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '여름 물놀이를 안전하게 하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['준비 운동으로 몸을 풀어요', '다리부터 물을 묻혀요', '어른 곁에서 물놀이해요', '나와서 몸을 닦고 쉬어요'] },
                target: { order: ['준비 운동으로 몸을 풀어요', '다리부터 물을 묻혀요', '어른 곁에서 물놀이해요', '나와서 몸을 닦고 쉬어요'] }, difficulty: 0.1,
                predict: { q: '물에 들어가기 전에 다리부터 물을 묻히는 까닭은?', options: ['몸이 놀라지 않게', '옷이 젖게'], answer: 0 },
                conclude: '찬물에 갑자기 들어가면 몸이 놀라요. 준비 운동을 하고 다리부터 물을 묻혀요.' },
              { prompt: '눈썰매를 안전하게 타는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['장갑과 모자를 써요', '줄을 서서 기다려요', '앞사람이 다 내려가면 출발해요', '다 내려오면 옆으로 비켜요'] },
                target: { order: ['장갑과 모자를 써요', '줄을 서서 기다려요', '앞사람이 다 내려가면 출발해요', '다 내려오면 옆으로 비켜요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '눈썰매를 안전하게 타는 차례대로 놓아 보세요. 하면 안 되는 일 카드는 남겨요.', toolOptions: { slots: 4, cards: ['장갑과 모자를 써요', '줄을 서서 기다려요', '앞사람이 다 내려가면 출발해요', '다 내려오면 옆으로 비켜요', '앞사람을 밀어 줘요'] } } } },
              { prompt: '가을 들판에서 연을 안전하게 날리는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['전깃줄이 없는 넓은 곳을 찾아요', '바람을 등지고 서요', '실을 조금씩 풀어요', '다 놀면 실을 감아 정리해요'] },
                target: { order: ['전깃줄이 없는 넓은 곳을 찾아요', '바람을 등지고 서요', '실을 조금씩 풀어요', '다 놀면 실을 감아 정리해요'] }, difficulty: 0.2 },
              { prompt: '모둠에서 계절 놀이 하나를 몸짓으로 보여 주고, 다른 모둠이 맞혀요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"이번 겨울에 가장 하고 싶은 놀이는 무엇인가요? 그때 무엇을 조심할까요?" 놀이와 조심할 일을 한 문장으로 이어 말하게 한다(예: "눈썰매를 탈 때 줄을 서서 기다릴 거예요").',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: ['얼음이 두꺼운지 어른이 살펴요', '어른과 함께 얼음판에 가요', '팽이를 돌려요'] }, prompt: '얼음판 팽이치기를 안전하게 하는 차례대로 놓아 보세요.', target: { order: ['얼음이 두꺼운지 어른이 살펴요', '어른과 함께 얼음판에 가요', '팽이를 돌려요'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '봄이어야 할 수 있는 놀이는?', options: ['꽃잎으로 꽃 왕관 꾸미기', '눈싸움', '단풍잎 책갈피 만들기'], answer: 0, difficulty: 0.1, explain: '꽃잎이 가득한 때는 꽃이 활짝 피는 봄이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절 놀이',
      items: [
        { type: 'table', prompt: '계절마다 하고 싶은 놀이를 쓰세요.', columns: ['봄', '여름', '가을', '겨울'], rows: 1 },
        { type: 'choice', prompt: '눈썰매를 탈 때 알맞은 행동에 ○ 하세요.', options: ['줄을 서서 기다려요', '앞사람을 밀어요', '썰매 길에 앉아 쉬어요'], answer: '줄을 서서 기다려요' },
        { type: 'short', prompt: '물놀이 전에 준비 운동을 하는 까닭을 쓰세요.' },
        { type: 'draw', prompt: '이번 겨울에 하고 싶은 놀이를 안전하게 하는 모습을 그리세요.' },
      ],
      easy: {
        note: '놀기 전에 준비, 놀 때는 차례, 놀고 나서 정리!',
        items: [
          { type: 'choice', prompt: '겨울 놀이에 ○ 하세요.', options: ['눈사람 만들기', '물총 놀이'], answer: '눈사람 만들기' },
          { type: 'choice', prompt: '물놀이 전에 할 일에 ○ 하세요.', options: ['준비 운동', '아이스크림 먹기'], answer: '준비 운동' },
          { type: 'draw', prompt: '하고 싶은 계절 놀이를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '하면 안 되는 일, 언제든 하는 놀이 카드가 섞여 있어요. 그런 카드는 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 실내 놀이도 계절 놀이라고 한다 → 그 계절에만 있는 것(눈·단풍·꽃·바닷물)이 놀이에 들어 있는지를 기준으로 묻는다. ② 썰매를 탈 때 앞사람을 밀어 주는 것을 도와주는 일로 안다 → 미는 힘에 앞사람이 부딪칠 수 있다는 것을 짚는다. ③ 연날리기는 전깃줄이 없는 곳이 먼저라는 것을 강조한다. 얼음판 놀이는 어른이 얼음 두께를 살핀 뒤에만 한다고 덧붙인다.',
  }));

  lessons.push(L(7, {
    title: '계절마다 바뀌는 우리 집 살림 살펴보기',
    objective: '더울 때와 추울 때 꺼내 쓰는 집 살림을 나누고, 살림을 바꾸는 까닭을 날씨와 이어 말할 수 있다.',
    illustration: ART('a cozy paper-cut living room split in two, the left with an electric fan and a bamboo mat, the right with a thick blanket, a humidifier and draft stoppers along the window', '우리 집 살림이 바뀌어요', [
      { motif: 'house', x: 240, y: 214, color: 'peach' }, { motif: 'tree', x: 80, y: 214, color: 'mint' }, { motif: 'tree', x: 400, y: 214, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 집 선풍기는 지금 어디에 있나요?" 거실, 창고, 옷장 위 같은 답을 듣는다. "여름 내내 쓰던 선풍기를 왜 넣어 두었을까요?" 집 안 물건도 계절에 따라 꺼내고 넣는다는 것을 말하게 한다. 시연 단추로 살림 카드가 \'더울 때\'와 \'추울 때\'로 나뉘는 모습을 보여 준다.',
        student: '우리 집에서 요즘 새로 꺼낸 물건을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리 집 살림', slots: ['더울 때 꺼내요', '추울 때 꺼내요'], cards: ['부채', '두꺼운 이불'], shuffle: false }, sequence: [{ sort: { '더울 때 꺼내요': ['부채'], '추울 때 꺼내요': ['두꺼운 이불'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 더울 때와 추울 때의 살림', minutes: 13, tool: 'mindmap',
            teacher: '"가습기는 언제 켤까요? 공기가 바싹 마르는 때는 언제일까요?" 낯선 물건은 교사가 하는 일을 먼저 말해 준다(가습기: 공기에 물기를 더해요). 냉장고처럼 일 년 내내 쓰는 물건도 있다는 것을 짚어, 계절과 상관없는 살림도 있다는 것을 알게 한다.',
            task: '집 살림 카드를 더울 때와 추울 때 꺼내는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집 살림 카드를 더울 때와 추울 때로 나누어 보세요.', toolOptions: { topic: '우리 집 살림', slots: ['더울 때 꺼내요', '추울 때 꺼내요'], cards: ['선풍기', '대나무 돗자리', '전기장판', '가습기'] },
                target: { sort: { '더울 때 꺼내요': ['선풍기', '대나무 돗자리'], '추울 때 꺼내요': ['전기장판', '가습기'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '집 살림 카드를 나누어 보세요. 일 년 내내 쓰는 물건은 카드 칸에 남겨요.', toolOptions: { cards: ['선풍기', '대나무 돗자리', '전기장판', '가습기', '냉장고'] } } } },
              { prompt: '겨울을 준비하는 집안일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '겨울 준비', cards: ['창문 틈에 바람막이를 붙여요', '두꺼운 이불을 꺼내요', '모기장을 쳐요', '얼음을 많이 얼려요'] },
                target: { pick: ['창문 틈에 바람막이를 붙여요', '두꺼운 이불을 꺼내요'] }, difficulty: 0.15 },
              { prompt: '여름에 쓴 선풍기를 넣어 두는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['전원 줄을 뽑아요', '날개의 먼지를 닦아요', '비닐을 씌워요', '창고에 넣어요'] },
                target: { order: ['전원 줄을 뽑아요', '날개의 먼지를 닦아요', '비닐을 씌워요', '창고에 넣어요'] }, difficulty: 0.2,
                hints: ['전기 제품을 만지기 전에 가장 먼저 할 일부터 떠올리고, 깨끗이 해서 넣는 차례를 생각해요.', '먼지를 닦기 전에 비닐을 씌우면 어떻게 될까요? 이웃한 두 카드를 다시 보세요.', '전원 줄 뽑기 → 먼지 닦기 → 비닐 씌우기 → 창고에 넣기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 살림을 바꾸는 까닭', minutes: 13, tool: 'mindmap',
            teacher: '"왜 그렇게 할까요? 날씨가 어떻기 때문일까요?" 까닭 카드를 고른 뒤 "~해서 ~해요"로 소리 내어 말하게 한다. 마지막 문항은 집에 가서 가족에게 물어볼 질문을 정하는 짝 활동이다. 가족 형편에 따라 살림이 다르니 정답이 없다고 말해 준다.',
            task: '집 살림을 바꾸는 일과 그 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집안일과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 바꿀까?', slots: [{ id: 'mat', label: '여름에 대나무 돗자리를 깔아요' }, { id: 'hum', label: '겨울에 가습기를 켜요' }], cards: ['바닥이 시원해서요', '공기가 바싹 말라서요'] },
                target: { match: { mat: '바닥이 시원해서요', hum: '공기가 바싹 말라서요' } }, difficulty: 0.1 },
              { prompt: '집안일과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 바꿀까?', slots: [{ id: 'gap', label: '겨울에 창문 틈을 막아요' }, { id: 'net', label: '여름에 방충망을 고쳐요' }, { id: 'cur', label: '여름 한낮에 커튼을 쳐요' }], cards: ['찬 바람이 들어와서요', '모기가 들어와서요', '뜨거운 햇볕을 가리려고요'] },
                target: { match: { gap: '찬 바람이 들어와서요', net: '모기가 들어와서요', cur: '뜨거운 햇볕을 가리려고요' } }, difficulty: 0.2,
                levels: { challenge: { prompt: '집안일과 그 까닭을 이어 보세요. 남는 카드도 있어요.', toolOptions: { cards: ['찬 바람이 들어와서요', '모기가 들어와서요', '뜨거운 햇볕을 가리려고요', '눈이 많이 와서요'] } } } },
              { prompt: '집에서 바뀐 살림을 가족에게 물어볼 질문을 짝과 하나 정해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '날씨가 추워질 때 하는 집안일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '추워질 때', cards: ['보일러를 미리 살펴요', '긴소매 잠옷을 꺼내요', '선풍기를 꺼내요', '얇은 여름 이불을 꺼내요'] },
                target: { pick: ['보일러를 미리 살펴요', '긴소매 잠옷을 꺼내요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 집에 가서 가족에게 무엇을 물어볼 건가요?" 짝과 정한 질문을 두세 명이 말한다. 다음 시간에 가족에게 들은 이야기를 한 가지씩 나눈다고 알린다. 전기 제품의 전원 줄은 어른과 함께 뽑는다는 것을 다시 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 살림', slots: ['더울 때 꺼내요', '추울 때 꺼내요'], cards: ['아이스박스', '털 실내화'] }, prompt: '처음 보는 살림 카드를 나누어 보세요.', target: { sort: { '더울 때 꺼내요': ['아이스박스'], '추울 때 꺼내요': ['털 실내화'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '겨울에 가습기를 켜는 까닭은?', options: ['공기가 말라서', '모기를 쫓으려고', '방을 시원하게 하려고'], answer: 0, difficulty: 0.15, explain: '겨울에는 공기가 바싹 말라 목이 칼칼해져요. 가습기가 물기를 더해 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절과 집 살림',
      items: [
        { type: 'table', prompt: '우리 집에서 계절마다 꺼내는 물건을 쓰세요.', columns: ['더울 때', '추울 때'], rows: 2 },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '겨울에 창문 틈을 막는 까닭은 찬 ___이 들어오기 때문이에요.', answer: '바람' },
        { type: 'short', prompt: '가족에게 물어본 질문과 들은 대답을 쓰세요.' },
        { type: 'draw', prompt: '겨울을 준비하는 우리 집 모습을 그리세요.' },
      ],
      easy: {
        note: '더우면 시원하게, 추우면 따뜻하게 살림을 바꿔요.',
        items: [
          { type: 'choice', prompt: '추울 때 꺼내는 것에 ○ 하세요.', options: ['두꺼운 이불', '선풍기'], answer: '두꺼운 이불' },
          { type: 'choice', prompt: '더울 때 꺼내는 것에 ○ 하세요.', options: ['대나무 돗자리', '전기장판'], answer: '대나무 돗자리' },
          { type: 'draw', prompt: '우리 집에서 요즘 쓰는 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 낯선 물건은 선생님이 하는 일을 먼저 알려 줘요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '일 년 내내 쓰는 물건, 남는 까닭 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가습기·전기장판처럼 집에 없는 물건을 모른다 → 하는 일을 먼저 말해 주고 그림으로 보여 준다. 집마다 살림이 다르다는 것을 존중한다. ② 냉장고·세탁기도 계절 물건이라고 한다 → 일 년 내내 쓰는지 물어 가린다. ③ 전기 제품 정리는 어린이 혼자 하지 않고 어른과 함께 한다는 것을 꼭 덧붙인다.',
  }));

  lessons.push(L(8, {
    title: '계절 옷 입힌 종이 인형 꾸미고 소개하기',
    objective: '날씨에 맞는 옷과 소품을 골라 종이 인형을 꾸미고, 왜 그렇게 입혔는지 날씨와 이어 소개할 수 있다.',
    illustration: ART('paper dolls laid on a table with cut-out paper clothes for every season, a raincoat and boots, a light jacket, a puffy coat and mittens, children dressing the dolls', '인형에게 무엇을 입힐까?', [
      { motif: 'cloud', x: 300, y: 76, s: 0.7 }, { motif: 'flower', x: 80, y: 226, color: 'rose' }, { motif: 'leaf', x: 400, y: 216, color: 'peach' }]),
    safety: ['가위는 날을 닫아 건네고, 오릴 때는 자리에 앉아서만 해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이 인형은 오늘 비가 오는 날 학교에 가요. 무엇을 챙겨 줄까요?" 칠판의 종이 인형에 우산을 붙이며 묻는다. "오늘은 날씨가 다른 날마다 인형을 꾸며 보고, 왜 그렇게 입혔는지 친구에게 소개해요." 활동지의 옷 조각 오리기는 활동 2와 함께 한다고 알린다.',
        student: '비 오는 날 내가 챙기는 것을 두 가지 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '비 오는 날', cards: ['우산', '선글라스'], shuffle: false }, sequence: [{ pick: ['우산'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 날씨에 맞는 차림 고르기', minutes: 10, tool: 'mindmap',
            teacher: '"이 날 밖에 나가면 몸이 어떤 느낌일까요?" 날씨를 몸의 느낌으로 먼저 말하게 한 뒤 고르게 한다. 장마철에는 비가 많이 오지만 덥다는 것, 그래서 털신이 아니라 장화를 신는다는 것을 짚는다.',
            task: '날씨를 읽고 인형에게 입힐 옷과 소품을 골라 바구니에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '비가 많이 오는 여름 장마철이에요. 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '장마철 차림', cards: ['비옷', '장화', '털신', '두꺼운 목도리'] },
                target: { pick: ['비옷', '장화'] }, difficulty: 0.1 },
              { prompt: '쌀쌀한 가을 소풍날이에요. 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가을 소풍 차림', cards: ['얇은 겉옷', '긴바지', '수영복', '민소매 옷'] },
                target: { pick: ['얇은 겉옷', '긴바지'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['얇은 겉옷', '긴바지', '수영복', '민소매 옷', '샌들'] } } } },
              { prompt: '눈이 펑펑 오는 날이에요. 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '눈 오는 날 차림', cards: ['털모자', '장갑', '두꺼운 외투', '밀짚모자'] },
                target: { pick: ['털모자', '장갑', '두꺼운 외투'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색종이로 계절 인형 꾸미기', minutes: 17, tool: 'collage',
            teacher: '"하양 동그라미를 두 개 넘게 붙이면 무엇이 될까요?" 콜라주 판에서 조각을 붙여 계절 모습을 만들게 한다. 화면 작품과 함께 활동지의 종이 인형에 옷 조각을 오려 붙인다. 마지막 자유 작품은 정답이 없다. 다 꾸민 학생은 "이 인형은 ( )날이라서 ( )을 입었어요"라고 짝에게 소개한다.',
            task: '조각을 골라 붙여 계절 모습을 꾸미고, 종이 인형에도 옷을 오려 붙여요.',
            levels: { easy: { shapes: ['circle', 'triangle', 'rect', 'leaf', 'square'], colors: ['하양', '빨강', '주황', '노랑', '초록', '파랑', '갈색'] }, base: {}, challenge: {} },
            items: [
              { prompt: '눈 오는 날의 눈사람을 꾸며 보세요. 하양 동그라미를 두 개 넘게 붙여요.', target: { has: [{ shape: 'circle', color: '하양', min: 2 }] }, difficulty: 0.05,
                levels: { challenge: { prompt: '눈사람을 꾸며 보세요. 하양 동그라미 두 개 넘게, 따뜻하게 목에 두를 긴 네모도 하나 붙여요.', target: { has: [{ shape: 'circle', color: '하양', min: 2 }, { shape: 'rect', min: 1 }] } } } },
              { prompt: '가을 나무를 꾸며 보세요. 갈색 긴 네모 줄기 하나에 나뭇잎을 세 장 넘게 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', min: 1 }, { shape: 'leaf', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '가을 나무를 꾸며 보세요. 갈색 줄기 하나에, 빨강 나뭇잎과 노랑 나뭇잎을 두 장씩 넘게 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', min: 1 }, { shape: 'leaf', color: '빨강', min: 2 }, { shape: 'leaf', color: '노랑', min: 2 }] } } } },
              { prompt: '내가 좋아하는 계절의 날씨에 맞게 차려입은 인형을 꾸미고, 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['계절에 맞는 윗옷을 붙였어요', '날씨에 맞는 모자나 신발을 붙였어요', '왜 그렇게 입혔는지 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구 인형 가운데 날씨에 가장 잘 맞게 입힌 인형은 무엇이었나요? 왜 그렇게 생각했나요?" 두세 명의 인형을 실물 화상기로 보여 준다. 가위는 날을 닫아 통에 넣고, 남은 색종이 조각은 다음 시간에 다시 쓸 상자에 모은다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '햇볕 쨍쨍한 날', cards: ['햇빛 가리는 모자', '반소매 옷', '털장갑'] }, prompt: '햇볕이 쨍쨍한 더운 날 인형에게 입힐 것만 골라 보세요.', target: { pick: ['햇빛 가리는 모자', '반소매 옷'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '장마철에 털신 대신 장화를 신는 까닭은?', options: ['물이 스미지 않고 덥지 않아서', '장화가 더 무거워서', '눈이 오기 때문에'], answer: 0, difficulty: 0.2, explain: '장마철은 비가 많이 오지만 더운 여름이에요. 장화는 물이 스미지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절 종이 인형',
      items: [
        { type: 'draw', wide: true, prompt: '종이 인형에게 입힐 옷을 그리고 오려 붙이세요. 어떤 날씨인지도 쓰세요.' },
        { type: 'choice', prompt: '눈 오는 날 인형에게 입힐 것에 ○ 하세요.', options: ['털모자', '수영복', '샌들'], answer: '털모자' },
        { type: 'blank', prompt: '빈칸을 채워 인형을 소개하세요.', text: '이 인형은 ___ 날이라서 ___을 입었어요.' },
        { type: 'check', prompt: '해낸 것에 ✓ 하세요.', options: ['날씨에 맞는 옷을 입혔어요', '가위를 안전하게 썼어요', '짝에게 인형을 소개했어요'] },
      ],
      easy: {
        note: '먼저 날씨를 정하고, 그다음 옷을 골라요.',
        items: [
          { type: 'draw', wide: true, prompt: '종이 인형에게 입힐 옷을 그리고 오려 붙이세요.' },
          { type: 'choice', prompt: '비 오는 날 챙길 것에 ○ 하세요.', options: ['비옷', '밀짚모자'], answer: '비옷' },
          { type: 'choice', prompt: '추운 날 챙길 것에 ○ 하세요.', options: ['장갑', '부채'], answer: '장갑' },
        ],
      },
    },
    differentiation: {
      easy: '모양과 색이 줄어 고르기 쉬워요. 바구니 고르기는 맞으면 초록 테두리가 생겨요.',
      base: '조건에 맞게 조각을 붙이고 확인을 눌러요.',
      challenge: '조건이 하나씩 더 붙어요(목도리, 두 가지 색 단풍잎).',
    },
    teacherNotes: '자주 보이는 어려움: ① 장마철을 비가 와서 춥다고 여겨 털신을 고른다 → 장마는 여름에 온다는 것을 짚는다. ② 좋아하는 옷만 잔뜩 붙이고 날씨를 정하지 않는다 → 먼저 날씨를 말로 정하게 한다. ③ 가위질이 서툰 학생은 큰 옷 조각만 오리고 작은 소품은 그려 넣게 한다. 활동지 인형 밑그림은 교사가 미리 인쇄해 둔다.',
  }));

  // ───────────────────────── 9~16차시: 오늘 날씨를 살펴 챙기고 더위·추위 이기기(바른 생활 실천) ─────────────────────────

  lessons.push(L(9, {
    title: '일기 예보를 보고 오늘 준비물 챙기기',
    objective: '하늘과 일기 예보를 살펴 오늘 날씨에 맞는 준비물을 고르고, 낮에 날씨가 바뀔 때를 미리 대비할 수 있다.',
    illustration: ART('a child standing at the front door looking up at the sky while a small paper weather board shows sun in the morning and rain clouds in the afternoon, an umbrella tucked into the school bag', '오늘 날씨를 살펴요', [
      { motif: 'house', x: 100, y: 214 }, { motif: 'cloud', x: 300, y: 90, s: 0.8 }, { motif: 'tree', x: 400, y: 214, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아침에 맑아서 우산을 두고 왔는데, 집에 갈 때 비가 온 적 있나요?" 경험을 두세 명에게 듣는다. "아침 하늘만 보고 하루 날씨를 다 알 수 있을까요?" 생각을 손을 들어 나누게 한 뒤, 오늘은 일기 예보로 낮과 오후 날씨까지 살피는 방법을 배운다고 말한다. 시연 단추로 날씨와 준비물이 짝 지어지는 모습을 보여 준다.',
        student: '창밖 하늘을 보고 지금 날씨를 한 낱말로 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '날씨와 준비물', slots: [{ id: 'r', label: '비가 와요' }], cards: ['우산'], shuffle: false }, sequence: [{ match: { r: '우산' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 날씨에 맞는 준비물 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 날씨에 밖에 나가면 무엇이 불편할까요? 그 불편함을 막아 주는 물건은 무엇일까요?" 불편함을 먼저 말하게 하고 준비물을 고르게 한다. 아침에 맑아도 예보에 비가 있으면 우산을 챙긴다는 것을 짚는다.',
            task: '날씨를 읽고 알맞은 준비물을 짝 짓거나 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '날씨와 알맞은 준비물을 이어 보세요.', toolOptions: { mode: 'match', topic: '날씨와 준비물', slots: [{ id: 'rain', label: '오늘 비가 와요', motif: 'cloud' }, { id: 'sun', label: '햇볕이 쨍쨍하고 더워요', motif: 'sun' }, { id: 'snow', label: '눈이 오고 바람이 차요', motif: 'snow' }], cards: ['우산', '모자와 물병', '장갑과 목도리'] },
                target: { match: { rain: '우산', sun: '모자와 물병', snow: '장갑과 목도리' } }, difficulty: 0.05 },
              { prompt: '아침은 맑고 오후에 비가 온대요. 챙길 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가방에 넣을 것', cards: ['접는 우산', '얇은 비옷', '물놀이 튜브', '털장갑'] },
                target: { pick: ['접는 우산', '얇은 비옷'] }, difficulty: 0.15, levels: { challenge: { toolOptions: { cards: ['접는 우산', '얇은 비옷', '물놀이 튜브', '털장갑', '물안경'] } } },
                predict: { q: '아침이 맑으면 오후도 맑을까요?', options: ['꼭 맑아요', '바뀔 수 있어요'], answer: 1 },
                conclude: '날씨는 하루 동안 바뀔 수 있어요. 아침 하늘과 함께 일기 예보도 살펴요.' },
              { prompt: '날씨를 알려면 집을 나서기 전에 무엇을 할까요? 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '집을 나서기 전에', cards: ['창밖 하늘을 봐요', '일기 예보를 들어요', '어제 입은 옷을 그대로 입어요', '달력의 그림을 봐요'] },
                target: { pick: ['창밖 하늘을 봐요', '일기 예보를 들어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 날씨가 바뀌는 하루', minutes: 14, tool: 'story',
            teacher: '"하준이는 아침에 무엇을 보고 우산을 챙겼을까요?" 이야기 카드를 차례대로 놓으며 날씨가 바뀌는 하루를 따라가게 한다. "아침에 맑았으니까 하루 내내 맑아요"라는 말이 왜 틀렸는지 학생 입으로 말하게 한다. 마지막에 짝과 \'날씨 알림이\' 놀이를 한다: 한 명이 예보를 말하고 다른 한 명이 챙길 것을 말한다.',
            task: '하루 동안 날씨가 바뀌는 이야기를 차례대로 놓거나, 알맞은 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 하루를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['아침에 일기 예보를 들어요', '우산을 가방에 넣어요', '오후에 비가 내려요', '가방에서 우산을 꺼내 써요'] },
                target: { order: ['아침에 일기 예보를 들어요', '우산을 가방에 넣어요', '오후에 비가 내려요', '가방에서 우산을 꺼내 써요'] }, difficulty: 0.1 },
              { prompt: '서아의 하루를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['아침에 쌀쌀해 겉옷을 입어요', '낮에 따뜻해져 겉옷을 벗어요', '겉옷을 옷걸이에 걸어 둬요', '집에 갈 때 겉옷을 다시 입어요'] },
                target: { order: ['아침에 쌀쌀해 겉옷을 입어요', '낮에 따뜻해져 겉옷을 벗어요', '겉옷을 옷걸이에 걸어 둬요', '집에 갈 때 겉옷을 다시 입어요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '서아의 하루를 차례대로 놓아 보세요. 서아가 하지 않은 일 카드는 남겨요.', toolOptions: { slots: 4, cards: ['아침에 쌀쌀해 겉옷을 입어요', '낮에 따뜻해져 겉옷을 벗어요', '겉옷을 옷걸이에 걸어 둬요', '집에 갈 때 겉옷을 다시 입어요', '겉옷을 교실에 두고 가요'] } } } },
              { prompt: '친구의 말풍선 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '아침에 맑아도 ___ 바뀔 수 있어.' }, { id: 'f2', who: '준호', label: '나가기 전에 ___ 꼭 들어 봐.' }], cards: ['날씨가', '내 키가', '일기 예보를', '노래를'] },
                target: { fill: { f1: '날씨가', f2: '일기 예보를' } }, difficulty: 0.15 },
              { prompt: '짝과 날씨 알림이 놀이를 해요. 한 명이 예보를 말하면 다른 한 명이 챙길 것을 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내일 아침 집을 나서기 전에 무엇을 두 가지 살필까요?" 하늘과 일기 예보를 학생이 말하게 한다. 교실 앞 \'오늘의 날씨\' 칸을 만들어 내일부터 당번이 아침마다 예보를 읽고 그림으로 붙이기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 날씨', slots: [{ id: 'w', label: '바람이 세게 불어요' }, { id: 'h', label: '아주 더운 낮이에요' }], cards: ['모자 끈을 묶어요', '그늘에서 쉬어요'] }, prompt: '날씨와 알맞은 행동을 이어 보세요.', target: { match: { w: '모자 끈을 묶어요', h: '그늘에서 쉬어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '아침에 해가 났지만 예보에 저녁 비가 있어요. 어떻게 할까요?', options: ['우산을 두고 가요', '우산을 챙겨 가요', '예보는 신경 쓰지 않아요'], answer: 1, difficulty: 0.15, explain: '날씨는 하루 동안 바뀌어요. 예보에 비가 있으면 아침이 맑아도 우산을 챙겨요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '오늘의 날씨와 준비물',
      items: [
        { type: 'table', prompt: '날씨에 맞는 준비물을 쓰세요.', columns: ['날씨', '준비물'], cells: [['비가 와요', ''], ['아주 더워요', ''], ['눈이 와요', '']] },
        { type: 'choice', prompt: '집을 나서기 전에 살필 것에 ○ 하세요.', options: ['일기 예보', '어제 먹은 반찬', '친구 옷'], answer: '일기 예보' },
        { type: 'short', prompt: '아침에 맑았는데 오후에 비가 온 날, 무엇을 챙겼어야 했는지 쓰세요.' },
        { type: 'draw', prompt: '오늘 아침과 오후의 하늘을 나란히 그리세요.' },
      ],
      easy: {
        note: '하늘을 보고, 예보를 듣고, 챙겨요!',
        items: [
          { type: 'choice', prompt: '비 오는 날 준비물에 ○ 하세요.', options: ['우산', '부채'], answer: '우산' },
          { type: 'choice', prompt: '아침에 맑으면 하루 내내 맑을까요?', options: ['바뀔 수 있어요', '꼭 맑아요'], answer: '바뀔 수 있어요' },
          { type: 'draw', prompt: '오늘의 하늘을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 날씨 칸에 그림이 함께 있어요.',
      base: '모두 놓은 뒤 확인을 눌러요.',
      challenge: '서아가 하지 않은 일 카드가 섞여 있어요. 이야기에 맞는 카드만 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 날씨는 아침에만 살피면 하루 내내 같다고 여긴다(이 차시의 핵심 오개념) → 활동 2 이야기와 출구 질문 2번으로 바로 잰다. ② 일기 예보를 어디서 보는지 모른다 → 텔레비전, 라디오, 휴대 전화의 날씨 알림을 함께 말하고, 집에서는 어른과 함께 본다고 안내한다. ③ 우산 대신 비옷만 고르는 학생도 맞다고 인정한다.',
  }));

  lessons.push(L(10, {
    title: '비·바람·미세먼지 있는 날 바르게 지내기',
    objective: '비 오는 날, 바람이 센 날, 미세먼지가 나쁜 날에 지킬 일을 골라 표시하고, 갑자기 날씨가 바뀔 때 할 일을 고를 수 있다.',
    illustration: ART('three paper-cut panels, a child holding an umbrella with the tip pointing down, a child holding a hat strap on a windy day, and a child wearing a mask playing indoors while grey dust floats outside', '이런 날은 어떻게 할까?', [
      { motif: 'cloud', x: 240, y: 86 }, { motif: 'house', x: 400, y: 214 }, { motif: 'tree', x: 80, y: 214, color: 'mint' }]),
    safety: ['우산 펴기 연습은 짝과 두 걸음 떨어져 둘레를 살핀 뒤 해요.', '우산 끝은 언제나 아래로 향하게 들어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"복도에서 우산을 휘두르는 친구를 본 적 있나요? 어떤 일이 생길 수 있을까요?" 교사가 접은 우산을 들고 끝을 아래로 향하게 드는 모습과 위로 드는 모습을 견주어 보여 준다. "비, 센 바람, 미세먼지가 있는 날은 지킬 일이 달라요."',
        student: '비 오는 날 학교에 올 때 불편했던 일을 하나 짝에게 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '우산 들고 걷기', items: [{ id: 'down', text: '우산 끝을 아래로' }, { id: 'swing', text: '우산을 휘둘러요' }] }, sequence: [{ checklist: ['down'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이런 날 지킬 일 표시하기', minutes: 13, tool: 'kitchen',
            teacher: '"이 일을 하면 나와 친구가 안전할까요?" 항목마다 소리 내어 읽고 판단하게 한다. 미세먼지가 나쁜 날에도 짧게 환기는 하지만, 하루 종일 창문을 열어 두지 않는다는 것을 짚는다. 이어서 짝과 실제 우산으로 \'둘레 살피고 펴기 → 끝을 아래로 들고 걷기 → 물기 털고 접기\'를 해 본다.',
            task: '그날 지킬 일에만 표시해요. 하면 안 되는 일에는 표시하지 않아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '비 오는 날 우산을 쓸 때 지킬 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '우산 바르게 쓰기', items: [{ id: 'look', text: '펴기 전에 둘레를 살펴요' }, { id: 'down', text: '우산 끝을 아래로 들고 걸어요' }, { id: 'swing', text: '우산을 휘두르며 장난쳐요' }, { id: 'shake', text: '교실에 들기 전에 물기를 털어요' }] },
                target: { checklist: ['look', 'down', 'shake'] }, difficulty: 0.05, levels: { challenge: { toolOptions: { items: [{ id: 'look', text: '펴기 전에 둘레를 살펴요' }, { id: 'down', text: '우산 끝을 아래로 들고 걸어요' }, { id: 'swing', text: '우산을 휘두르며 장난쳐요' }, { id: 'shake', text: '교실에 들기 전에 물기를 털어요' }, { id: 'spin', text: '친구 옆에서 우산을 빙글빙글 돌려 물을 털어요' }] } }, easy: { prompt: '우산을 쓸 때 지킬 일만 표시해 보세요. 하면 안 되는 일은 표시하지 않아요.', toolOptions: { items: [{ id: 'down', text: '우산 끝을 아래로 들고 걸어요' }, { id: 'swing', text: '우산을 휘두르며 장난쳐요' }, { id: 'shake', text: '교실에 들기 전에 물기를 털어요' }] }, target: { checklist: ['down', 'shake'] } } } },
              { prompt: '미세먼지가 나쁜 날 지킬 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '미세먼지 나쁜 날', items: [{ id: 'mask', text: '밖에 나갈 때 마스크를 써요' }, { id: 'in', text: '운동장 대신 교실에서 놀아요' }, { id: 'open', text: '창문을 하루 종일 활짝 열어 둬요' }, { id: 'wash', text: '집에 오면 손과 얼굴을 씻어요' }] },
                target: { checklist: ['mask', 'in', 'wash'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { items: [{ id: 'mask', text: '밖에 나갈 때 마스크를 써요' }, { id: 'in', text: '운동장 대신 교실에서 놀아요' }, { id: 'open', text: '창문을 하루 종일 활짝 열어 둬요' }, { id: 'wash', text: '집에 오면 손과 얼굴을 씻어요' }, { id: 'run', text: '밖에서 오래 달리기를 해요' }] } } } },
              { prompt: '바람이 세게 부는 날 지킬 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '바람이 센 날', items: [{ id: 'strap', text: '모자 끈을 묶어요' }, { id: 'sign', text: '간판과 공사장 옆을 피해 걸어요' }, { id: 'open', text: '우산을 펴고 뛰어다녀요' }, { id: 'coat', text: '비가 오면 우산 대신 비옷을 입어요' }] },
                target: { checklist: ['strap', 'sign', 'coat'] }, difficulty: 0.2, levels: { challenge: { toolOptions: { items: [{ id: 'strap', text: '모자 끈을 묶어요' }, { id: 'sign', text: '간판과 공사장 옆을 피해 걸어요' }, { id: 'open', text: '우산을 펴고 뛰어다녀요' }, { id: 'coat', text: '비가 오면 우산 대신 비옷을 입어요' }, { id: 'wall', text: '높은 담 위에 올라가 바람을 맞아요' }] } } } },
              { prompt: '짝과 우산을 펴고, 끝을 아래로 들고 걷고, 물기를 털어 접어 보세요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 갑자기 날씨가 바뀌면?', minutes: 13, tool: 'emotion',
            teacher: '"갑자기 소나기가 쏟아지는데 우산이 없어요. 비를 맞으며 뛰어갈까요?" 보기를 고르기 전에 그렇게 하면 어떤 일이 생길지 예상해 말하게 한다. 천둥·번개가 칠 때는 넓은 운동장이나 큰 나무 아래가 아니라 건물 안으로 들어간다는 것을 꼭 짚는다.',
            task: '날씨가 갑자기 바뀐 상황을 읽고, 가장 알맞은 행동을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '학교 끝날 때 소나기가 쏟아져요. 민지는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '집에 가려는데 소나기가 쏟아져요. 우산이 없어요.', success: '맞아요! 어른께 알리고 기다리면 비가 그치거나 도움을 받을 수 있어요.', choices: [
                { id: 'wait', text: '선생님께 알리고 학교에서 기다려요', result: '비가 그칠 때까지 안전하게 기다려요', mood: '편안함' },
                { id: 'run', text: '비를 맞으며 집까지 뛰어가요', result: '흠뻑 젖고 미끄러질 뻔해요', mood: '걱정', why: '비 오는 길에서 뛰면 미끄러질 수 있어요.' }] },
                target: { choice: 'wait' }, hints: ['소나기가 쏟아질 때 밖으로 나가면 어떤 일이 생길지 먼저 떠올려요. 도와줄 어른이 누구인지도 생각해요.','고른 방법대로 하면 몸이 젖거나 미끄러지지 않을까요? 소나기는 오래 오는 비인가요?','선생님께 알리고 학교에서 기다려요. 소나기는 금방 그치는 일이 많고, 선생님이 도와주실 수 있어요.'], difficulty: 0.05, levels: { challenge: { toolOptions: { choices: [{ id: 'wait', text: '선생님께 알리고 학교에서 기다려요', result: '비가 그칠 때까지 안전하게 기다려요', mood: '편안함' }, { id: 'run', text: '비를 맞으며 집까지 뛰어가요', result: '흠뻑 젖고 미끄러질 뻔해요', mood: '걱정', why: '비 오는 길에서 뛰면 미끄러질 수 있어요.' }, { id: 'bag', text: '가방을 머리에 쓰고 빨리 뛰어가요', result: '가방도 젖고 길에서 미끄러질 뻔해요', mood: '걱정', why: '가방으로는 비를 다 막지 못하고, 비 오는 길에서 뛰면 미끄러워요.' }] } } } },
              { prompt: '운동장에서 놀다가 천둥이 쳐요. 준호는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '운동장에서 놀고 있는데 하늘이 번쩍이고 천둥이 쳐요.', success: '맞아요! 번개가 칠 때는 바로 건물 안으로 들어가야 안전해요.', choices: [
                { id: 'in', text: '바로 건물 안으로 들어가요', result: '안전하게 천둥이 멎기를 기다려요', mood: '편안함' },
                { id: 'tree', text: '큰 나무 아래에서 비를 피해요', result: '번개는 높은 나무에 잘 떨어져 위험해요', mood: '무서움', why: '번개는 높은 곳에 잘 떨어져요. 나무 아래는 위험해요.' },
                { id: 'play', text: '그냥 계속 놀아요', result: '넓은 운동장에 혼자 있으면 위험해요', mood: '무서움', why: '천둥이 치면 넓은 곳에 있지 않아요.' }] },
                target: { choice: 'in' }, hints: ['번개가 치는 날 바깥에서 어디가 가장 안전한지 먼저 생각해요. 높이 솟은 것 곁은 어떨지도 떠올려요.','고른 곳은 지붕과 벽이 있는 곳인가요? 큰 나무처럼 높은 것 아래는 번개가 칠 때 위험해요.','바로 건물 안으로 들어가요. 나무 아래나 운동장은 번개가 칠 때 위험해요.'], difficulty: 0.15,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'in', text: '바로 건물 안으로 들어가요', result: '안전하게 천둥이 멎기를 기다려요', mood: '편안함' },
                  { id: 'play', text: '그냥 계속 놀아요', result: '넓은 운동장에 혼자 있으면 위험해요', mood: '무서움', why: '천둥이 치면 넓은 곳에 있지 않아요.' }] } } } },
              { prompt: '친구가 우산이 없어 비를 맞고 있어요. 하준이는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '비 오는 길, 같은 쪽으로 가는 친구가 우산 없이 서 있어요.', success: '맞아요! 함께 쓰면 친구도 나도 비를 덜 맞아요.', choices: [
                { id: 'share', text: '같이 쓰자고 말하고 우산을 함께 써요', result: '둘 다 덜 젖고 친구가 고마워해요', mood: '고마움' },
                { id: 'pass', text: '못 본 척 지나가요', result: '친구가 비를 맞고 속상해해요', mood: '속상함', why: '우산이 없는 친구의 마음을 떠올려 봐요.' },
                { id: 'give', text: '내 우산을 주고 나는 비를 맞아요', result: '이번에는 내가 흠뻑 젖어요', mood: '걱정', why: '함께 쓰면 둘 다 덜 젖을 수 있어요.' }] },
                target: { choice: 'share' }, hints: ['보기마다 그렇게 하면 친구와 내가 비를 얼마나 맞게 될지 둘 다 떠올려 봐요.','고른 방법대로 하면 두 사람 가운데 누가 비를 맞나요? 둘 다 덜 젖는 방법이 있을까요?','같이 쓰자고 말하고 우산을 함께 써요. 친구도 나도 비를 덜 맞아요.'], difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 배운 것 가운데 우리 반 날씨 약속으로 정하고 싶은 것은 무엇인가요?" 두세 가지를 골라 교실 \'오늘의 날씨\' 칸 옆에 붙인다. 우산은 접어서 우산꽂이에, 끝이 아래로 가게 꽂는다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '눈이 쌓인 날', items: [{ id: 'slow', text: '보폭을 좁혀 천천히 걸어요' }, { id: 'glove', text: '장갑을 끼고 손을 주머니에서 빼요' }, { id: 'slide', text: '계단에서 미끄럼을 타요' }] }, prompt: '눈이 쌓인 날 지킬 일만 표시해 보세요.', target: { checklist: ['slow', 'glove'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '천둥이 칠 때 가장 안전한 곳은?', options: ['건물 안', '큰 나무 아래', '넓은 운동장 가운데'], answer: 0, difficulty: 0.15, explain: '번개는 높은 곳과 넓은 곳에 서 있는 사람에게 위험해요. 건물 안으로 들어가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '이런 날 이렇게',
      items: [
        { type: 'table', prompt: '날씨마다 지킬 일을 한 가지씩 쓰세요.', columns: ['날씨', '지킬 일'], cells: [['비가 와요', ''], ['바람이 세요', ''], ['미세먼지가 나빠요', '']] },
        { type: 'check', prompt: '우산을 바르게 쓰는 방법에 ✓ 하세요.', options: ['펴기 전에 둘레를 살펴요', '우산 끝을 위로 들어요', '물기를 털고 접어요'] },
        { type: 'choice', prompt: '천둥이 칠 때 갈 곳에 ○ 하세요.', options: ['건물 안', '큰 나무 아래'], answer: '건물 안' },
        { type: 'draw', prompt: '비 오는 날 친구와 우산을 함께 쓰는 모습을 그리세요.' },
      ],
      easy: {
        note: '우산 끝은 아래로! 천둥이 치면 건물 안으로!',
        items: [
          { type: 'choice', prompt: '미세먼지가 나쁜 날 쓰는 것에 ○ 하세요.', options: ['마스크', '물안경'], answer: '마스크' },
          { type: 'choice', prompt: '우산 끝은 어디로 향하게 들까요?', options: ['아래로', '위로'], answer: '아래로' },
          { type: 'draw', prompt: '비 오는 날 우산을 쓴 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '상황 고르기 보기가 두 개로 줄어요. 우산 연습은 선생님과 함께 해요.',
      base: '지킬 일에만 표시하고 확인을 눌러요.',
      challenge: '하면 안 되는 일이 하나 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 큰 나무 아래가 비를 피하기 좋다고 여긴다 → 번개는 높은 곳에 잘 떨어진다는 것을 짚는다. ② 친구에게 우산을 통째로 주는 것을 가장 좋은 배려로 안다 → 마음은 칭찬하고, 함께 쓰면 둘 다 덜 젖는다는 방법을 더한다. ③ 우산 펴기 연습은 교실 뒤 빈 곳에서 짝끼리 두 걸음 떨어져 한다.',
  }));

  lessons.push(L(11, {
    title: '아침·낮·저녁 기온 견주고 겉옷 입고 벗기',
    objective: '하루 동안의 기온 그래프에서 가장 따뜻한 때와 쌀쌀한 때를 찾고, 그때에 맞게 겉옷을 입고 벗는 일을 짝 지을 수 있다.',
    illustration: ART('a paper-cut day strip with a pale morning sun, a high noon sun and an orange evening sun, under each a child first wearing a jacket, then holding it, then wearing it again', '하루에도 기온이 바뀌어요', [
      { motif: 'sun', x: 80, y: 120, s: 0.5 }, { motif: 'sun', x: 240, y: 70, s: 0.7 }, { motif: 'house', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 학교에 올 때와 지금, 어느 때가 더 따뜻한가요?" 창문을 잠깐 열어 바깥 공기를 느끼게 한다. 교실 온도계를 보여 주며 "숫자가 크면 더 따뜻해요"라고 알려 준다. 시연 단추로 하루 기온 막대그래프를 보여 주고, 막대가 높을수록 따뜻하다는 것을 손으로 가리키며 말한다.',
        student: '아침에 집을 나설 때 몸이 어떤 느낌이었는지 짝에게 말해 봐요.',
        demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '오늘 기온', data: [['아침', 9], ['낮', 17]], unit: '도', xLabel: '때', yLabel: '기온', choices: ['아침', '낮'], question: '더 따뜻한 때는?' }, sequence: [{ pick: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 기온 막대그래프 읽기', minutes: 12, tool: 'chart',
            teacher: '"막대가 가장 높은 때는 언제인가요? 그때는 따뜻할까요, 쌀쌀할까요?" 막대 높이로 견주게 하고, 숫자는 크고 작음만 말하게 한다. 저녁이 아침보다 따뜻하다는 것을 그래프에서 찾은 학생에게 "그래도 낮보다는 쌀쌀하지요?"라고 이어 묻는다.',
            task: '하루 동안의 기온 막대그래프를 보고 물음에 알맞은 때를 골라요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '가을 어느 날의 기온이에요. 가장 따뜻한 때는 언제인가요?', toolOptions: { type: 'bar', mode: 'read', title: '가을 어느 날 기온', data: [['아침', 8], ['낮', 18], ['저녁', 12]], unit: '도', xLabel: '때', yLabel: '기온', choices: ['아침', '낮', '저녁'], question: '가장 따뜻한 때는?' },
                target: { pick: 1 }, difficulty: 0.05 },
              { prompt: '같은 날 기온이에요. 겉옷이 가장 필요한 때는 언제인가요?', toolOptions: { type: 'bar', mode: 'read', title: '가을 어느 날 기온', data: [['아침', 8], ['낮', 18], ['저녁', 12]], unit: '도', xLabel: '때', yLabel: '기온', choices: ['아침', '낮', '저녁'], question: '가장 쌀쌀해 겉옷이 필요한 때는?' },
                target: { pick: 0 }, difficulty: 0.15,
                predict: { q: '저녁은 아침보다 쌀쌀할까요?', options: ['더 쌀쌀해요', '덜 쌀쌀해요'], answer: 1 },
                conclude: '이날은 아침이 가장 쌀쌀했어요. 막대가 가장 낮은 때에 겉옷이 가장 필요해요.' },
              { prompt: '초겨울 어느 날 기온이에요. 겉옷을 잠깐 벗어도 될 만큼 가장 따뜻한 때는?', toolOptions: { type: 'bar', mode: 'read', title: '초겨울 어느 날 기온', data: [['아침', 2], ['낮', 9], ['저녁', 4]], unit: '도', xLabel: '때', yLabel: '기온', choices: ['아침', '낮', '저녁'], question: '가장 따뜻한 때는?' },
                target: { pick: 1 }, difficulty: 0.15,
                levels: { challenge: { prompt: '초겨울 어느 날 기온이에요. 아침과 저녁 가운데 더 추운 때는 언제인가요?', toolOptions: { choices: ['아침', '저녁'], question: '아침과 저녁 가운데 더 추운 때는?' }, target: { pick: 0 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 때에 맞게 입고 벗기', minutes: 14, tool: 'timeline',
            teacher: '"낮에 더워서 겉옷을 벗었어요. 그 겉옷은 어디에 둘까요?" 벗은 옷을 아무 데나 두면 잃어버리거나 저녁에 입지 못한다는 것을 짚는다. 활동 끝에 모두 겉옷을 입었다가 벗어 소매를 펴서 의자 등받이에 거는 연습을 한다.',
            task: '하루의 때마다 알맞은 행동 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교에 가는 날, 때마다 알맞은 행동을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['아침', '저녁'], slots: [{ id: 'm', label: '쌀쌀한 아침' }, { id: 'n', label: '따뜻한 낮' }, { id: 'e', label: '다시 쌀쌀한 저녁' }], cards: ['겉옷을 입고 집을 나서요', '겉옷을 벗어 의자에 걸어요', '겉옷을 다시 입고 집에 가요'] },
                target: { match: { m: '겉옷을 입고 집을 나서요', n: '겉옷을 벗어 의자에 걸어요', e: '겉옷을 다시 입고 집에 가요' } }, difficulty: 0.05 },
              { prompt: '가을 소풍날, 때마다 알맞은 행동을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['아침', '저녁'], slots: [{ id: 'm', label: '쌀쌀한 소풍 아침' }, { id: 'n', label: '햇볕에 뛰노는 낮' }, { id: 'e', label: '바람이 찬 저녁' }], cards: ['얇은 겉옷을 걸쳐요', '겉옷을 가방에 넣고 물을 마셔요', '가방에서 겉옷을 꺼내 입어요'] },
                target: { match: { m: '얇은 겉옷을 걸쳐요', n: '겉옷을 가방에 넣고 물을 마셔요', e: '가방에서 겉옷을 꺼내 입어요' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '가을 소풍날, 때마다 알맞은 행동을 놓아 보세요. 알맞지 않은 카드는 남겨요.', toolOptions: { cards: ['얇은 겉옷을 걸쳐요', '겉옷을 가방에 넣고 물을 마셔요', '가방에서 겉옷을 꺼내 입어요', '벗은 겉옷을 풀밭에 두고 와요'] } } } },
              { prompt: '겨울 어느 날, 안과 밖을 오갈 때 알맞은 행동을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['먼저', '나중'], slots: [{ id: 'out', label: '추운 등굣길' }, { id: 'in', label: '난방이 된 교실' }, { id: 'play', label: '쉬는 시간 운동장' }], cards: ['외투와 장갑을 껴요', '외투를 벗어 옷걸이에 걸어요', '외투를 다시 입고 나가요'] },
                target: { match: { out: '외투와 장갑을 껴요', in: '외투를 벗어 옷걸이에 걸어요', play: '외투를 다시 입고 나가요' } }, difficulty: 0.15 },
              { prompt: '겉옷을 입었다 벗어 소매를 펴서 의자에 걸어 보세요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘처럼 아침과 낮의 기온이 많이 다른 날은 어떻게 입으면 좋을까요?" 학생이 \'벗고 입기 쉬운 겉옷\'을 말하게 한다. 교실 온도계 숫자를 아침·점심에 두 번 읽어 \'오늘의 날씨\' 칸에 적기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '봄 어느 날 기온', data: [['아침', 7], ['낮', 16], ['저녁', 10]], unit: '도', xLabel: '때', yLabel: '기온', choices: ['아침', '낮', '저녁'], question: '가장 쌀쌀한 때는?' }, prompt: '봄 어느 날의 기온 그래프에서 가장 쌀쌀한 때를 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
          { type: 'choice', prompt: '낮에 더워서 벗은 겉옷은 어떻게 할까요?', options: ['아무 데나 둬요', '내 자리에 걸어 두었다가 저녁에 다시 입어요', '친구에게 줘요'], answer: 1, difficulty: 0.1, explain: '쌀쌀한 저녁에 다시 입어야 하니 내 자리에 걸어 둬요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '하루의 기온과 옷',
      items: [
        { type: 'figure', wide: true, prompt: '그래프를 보고 가장 따뜻한 때를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'bar', mode: 'read', max: 15, scale: 15, title: '어느 날 기온', data: [['아침', 6], ['낮', 15], ['저녁', 9]], unit: '도', yLabel: '기온' }, caption: '가장 따뜻한 때: (        )' }], answer: '낮' },
        { type: 'table', prompt: '오늘 교실 온도계 숫자를 두 번 적으세요.', columns: ['아침', '점심'], rows: 1 },
        { type: 'short', prompt: '아침과 낮의 기온이 많이 다른 날 어떻게 입으면 좋을지 쓰세요.' },
        { type: 'check', prompt: '겉옷을 벗었을 때 할 일에 ✓ 하세요.', options: ['소매를 펴서 걸어요', '바닥에 던져 둬요', '저녁에 다시 입어요'] },
      ],
      easy: {
        note: '막대가 높을수록 따뜻해요.',
        items: [
          { type: 'figure', wide: true, prompt: '막대가 가장 높은 때에 ○ 하세요.', tool: 'chart', figures: [{ options: { type: 'bar', mode: 'read', max: 15, scale: 15, title: '어느 날 기온', data: [['아침', 6], ['낮', 15], ['저녁', 9]], unit: '도', yLabel: '기온' }, caption: '아침 · 낮 · 저녁' }], answer: '낮' },
          { type: 'choice', prompt: '쌀쌀한 아침에 입을 것에 ○ 하세요.', options: ['겉옷', '수영복'], answer: '겉옷' },
          { type: 'draw', prompt: '겉옷을 의자에 바르게 건 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 막대 끝에 숫자가 보여요. 때 칸에 맞으면 초록 테두리가 생겨요.',
      base: '막대 높이를 견주어 고르고 확인을 눌러요.',
      challenge: '아침과 저녁처럼 비슷한 막대를 견주어요. 알맞지 않은 행동 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 아침이 가장 따뜻하다고 여긴다(해가 뜨니까) → 해가 가장 높이 뜨는 낮이 가장 따뜻하다는 것을 그래프와 이어 준다. ② 숫자 \'도\'를 모른다 → 2학년은 숫자의 크고 작음과 막대 높이만 견주게 하고, 온도계 읽기는 교사가 돕는다. ③ 겉옷을 잃어버리는 일이 잦다 → 벗은 옷을 거는 자리를 정해 습관이 되게 한다.',
  }));

  lessons.push(L(12, {
    title: '더위를 이기는 바른 방법 찾고 종이 부채 만들기',
    objective: '더위를 이기는 바른 방법과 몸에 좋지 않은 방법을 나누고, 종이 부채를 접어 바르게 써 볼 수 있다.',
    illustration: ART('a child resting in the shade of a big tree fanning with a folded paper fan and sipping water, a hot sun above and a striped paper fan lying on the grass', '더위를 이기는 방법', [
      { motif: 'tree', x: 150, y: 214, color: 'mint' }, { motif: 'flower', x: 360, y: 228, color: 'buttercup' }, { motif: 'cloud', x: 300, y: 70, s: 0.6 }]),
    safety: ['부채 끝을 묶을 때 테이프는 선생님이 잘라 나누어 줘요.', '부채로 친구 얼굴을 치지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난여름에 가장 더웠던 날을 떠올려 볼까요? 그때 무엇을 했더니 시원해졌나요?" 학생 답을 칠판에 적되, 판단은 아직 하지 않는다. "그 가운데 몸에 좋은 방법과 몸에 무리가 되는 방법이 섞여 있어요. 오늘 나누어 보고, 다음 여름에 쓸 종이 부채도 만들어요."',
        student: '지난여름 더울 때 시원해졌던 방법을 하나 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '더위 이기기', slots: ['몸에 좋아요', '몸에 무리가 돼요'], cards: ['그늘에서 쉬어요', '땡볕에서 오래 뛰어요'], shuffle: false }, sequence: [{ sort: { '몸에 좋아요': ['그늘에서 쉬어요'], '몸에 무리가 돼요': ['땡볕에서 오래 뛰어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 더위를 이기는 바른 방법', minutes: 12, tool: 'mindmap',
            teacher: '"찬 음료를 한꺼번에 많이 마시면 배가 어떻게 될까요?" 시원하면 다 좋은 방법이라고 여기는 학생에게, 몸이 갑자기 차가워지면 배가 아프고 냉방 바람을 오래 쐬면 감기에 걸릴 수 있다는 것을 짚는다. 친구가 더위에 어지러워할 때는 그늘로 데려가고 어른께 알린다는 것을 강조한다.',
            task: '더위를 이기는 방법을 몸에 좋은 것과 무리가 되는 것으로 나누거나 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '더위를 이기는 방법을 나누어 보세요.', toolOptions: { topic: '더위 이기기', slots: ['몸에 좋아요', '몸에 무리가 돼요'], cards: ['물을 조금씩 자주 마셔요', '헐렁하고 얇은 옷을 입어요', '찬 음료를 한꺼번에 많이 마셔요', '에어컨 바람을 바로 앞에서 오래 쐬어요'] },
                target: { sort: { '몸에 좋아요': ['물을 조금씩 자주 마셔요', '헐렁하고 얇은 옷을 입어요'], '몸에 무리가 돼요': ['찬 음료를 한꺼번에 많이 마셔요', '에어컨 바람을 바로 앞에서 오래 쐬어요'] } }, difficulty: 0.1,
                predict: { q: '시원해지는 방법은 모두 몸에 좋을까요?', options: ['모두 좋아요', '아닌 것도 있어요'], answer: 1 },
                conclude: '시원해도 몸에 무리가 되는 방법이 있어요. 물은 조금씩 자주, 바람은 알맞게 쐬어요.' },
              { prompt: '더운 날 체육 시간 전에 챙길 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '체육 시간 준비', cards: ['물병', '햇빛 가리는 모자', '두꺼운 후드 티셔츠', '털장갑'] },
                target: { pick: ['물병', '햇빛 가리는 모자'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['물병', '햇빛 가리는 모자', '두꺼운 후드 티셔츠', '털장갑', '얼음 가득 탄산음료'] } } } },
              { prompt: '친구가 더위에 어지럽대요. 도와주는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['그늘로 함께 가요', '어른께 바로 알려요', '시원한 물을 조금씩 마시게 해요'] },
                target: { order: ['그늘로 함께 가요', '어른께 바로 알려요', '시원한 물을 조금씩 마시게 해요'] }, difficulty: 0.2,
                hints: ['어지러운 친구를 뜨거운 곳에서 먼저 벗어나게 하고, 혼자 해결하지 않는 차례를 떠올려요.', '물을 먹이기 전에 해야 할 일이 있어요. 어른은 언제 알려야 할까요?', '그늘로 가기 → 어른께 알리기 → 물을 조금씩 마시기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 종이 부채 접어 쓰기', minutes: 14, tool: 'kitchen',
            teacher: '"종이를 앞뒤로 번갈아 접으면 어떤 모양이 될까요?" 교사가 먼저 한 번 접어 보이고, 학생은 색종이(긴 종이)로 따라 접는다. 접는 폭이 일정하면 부채가 고르게 펴진다는 것을 짚는다. 다 만든 부채로 짝에게 바람을 보내 보고, 전기 없이도 시원해지는 방법이라는 것을 말하게 한다.',
            task: '부채 접는 차례를 놓고, 실제로 종이 부채를 접어 써 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '종이 부채를 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['긴 종이를 가로로 놓아요', '앞뒤로 번갈아 접어요', '한쪽 끝을 테이프로 묶어요', '펼쳐서 부쳐요'] },
                target: { order: ['긴 종이를 가로로 놓아요', '앞뒤로 번갈아 접어요', '한쪽 끝을 테이프로 묶어요', '펼쳐서 부쳐요'] }, difficulty: 0.1 },
              { prompt: '색종이로 종이 부채를 접어 짝에게 바람을 보내 보세요. 다 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '부채를 바르게 쓰는 방법만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '부채 바르게 쓰기', items: [{ id: 'soft', text: '얼굴 앞에서 살살 부쳐요' }, { id: 'hit', text: '부채로 친구를 톡톡 쳐요' }, { id: 'fold', text: '다 쓰면 접어서 넣어 둬요' }] },
                target: { checklist: ['soft', 'fold'] }, difficulty: 0.05, levels: { challenge: { toolOptions: { items: [{ id: 'soft', text: '얼굴 앞에서 살살 부쳐요' }, { id: 'hit', text: '부채로 친구를 톡톡 쳐요' }, { id: 'fold', text: '다 쓰면 접어서 넣어 둬요' }, { id: 'eye', text: '친구 얼굴 가까이에서 세게 흔들어요' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 부채는 언제 쓰면 좋을까요?" 다음 여름까지 사물함에 넣어 두거나 집에 가져가게 한다. "더위를 이기는 방법 가운데 내가 꼭 지킬 것 하나를 말해 볼까요?" 두세 명에게 듣는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 방법', slots: ['몸에 좋아요', '몸에 무리가 돼요'], cards: ['창문을 열어 바람이 통하게 해요', '찬물에 갑자기 뛰어들어요'] }, prompt: '처음 보는 방법 카드를 나누어 보세요.', target: { sort: { '몸에 좋아요': ['창문을 열어 바람이 통하게 해요'], '몸에 무리가 돼요': ['찬물에 갑자기 뛰어들어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '더운 날 물을 마시는 바른 방법은?', options: ['한꺼번에 많이', '조금씩 자주', '목마를 때까지 참았다가'], answer: 1, difficulty: 0.1, explain: '물은 조금씩 자주 마셔야 몸이 더위를 잘 견뎌요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '더위를 이기는 방법',
      items: [
        { type: 'table', prompt: '더위를 이기는 방법을 나누어 쓰세요.', columns: ['몸에 좋아요', '몸에 무리가 돼요'], rows: 2 },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '더운 날에는 물을 ___ 자주 마셔요.', answer: '조금씩' },
        { type: 'short', prompt: '친구가 더위에 어지러워할 때 가장 먼저 할 일을 쓰세요.' },
        { type: 'draw', prompt: '내가 만든 종이 부채를 그리고 무늬를 꾸미세요.' },
      ],
      easy: {
        note: '그늘, 물, 얇은 옷!',
        items: [
          { type: 'choice', prompt: '더울 때 쉬기 좋은 곳에 ○ 하세요.', options: ['그늘', '땡볕'], answer: '그늘' },
          { type: 'choice', prompt: '더울 때 입는 옷에 ○ 하세요.', options: ['얇은 옷', '두꺼운 옷'], answer: '얇은 옷' },
          { type: 'draw', prompt: '내가 만든 종이 부채를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 부채는 선생님이 접는 선을 그어 준 종이로 접어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '고르지 말아야 할 카드가 하나 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 시원하면 다 좋은 방법이라고 여긴다 → 찬 음료 한꺼번에, 냉방 바람 바로 앞의 결과(배탈·감기)를 경험으로 묻는다. ② 어지러운 친구에게 물만 먹이면 된다고 여긴다 → 어른께 알리는 일이 꼭 들어가야 한다는 것을 짚는다. ③ 접는 폭이 들쭉날쭉하면 부채가 펴지지 않으니, 서툰 학생에게는 접는 선을 미리 그어 준다.',
  }));

  lessons.push(L(13, {
    title: '추위를 이기는 바른 방법 찾고 몸 데우기',
    objective: '추위를 이기는 바른 방법과 위험한 방법을 나누고, 언 손을 녹이는 차례와 난로 곁 안전 약속을 지킬 수 있다.',
    illustration: ART('children in layered winter clothes doing a warm-up exercise in a classroom, rubbing their hands together, a small heater with a safety line drawn around it on the floor', '추위를 이기는 방법', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'tree', x: 390, y: 214, color: 'cream' }], 'snow'),
    safety: ['몸 데우기 체조는 팔을 뻗어 친구와 닿지 않는 거리에서 해요.', '난로 둘레 선 안으로 들어가지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"겨울에 손이 꽁꽁 얼었을 때 어떻게 녹였나요?" 학생 답을 칠판에 적는다(난로에 대기, 뜨거운 물, 비비기). "그 가운데 바로 하면 위험한 방법도 있어요. 오늘은 추위를 안전하게 이기는 방법을 찾고, 몸을 데우는 체조도 해 봐요." 손바닥을 서로 비벼 따뜻해지는 것을 함께 느껴 본다.',
        student: '손바닥을 열 번 비벼 보고, 손이 어떻게 달라졌는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '추위 이기기', slots: ['안전해요', '위험해요'], cards: ['따뜻한 물을 마셔요', '난로에 손을 바짝 대요'], shuffle: false }, sequence: [{ sort: { '안전해요': ['따뜻한 물을 마셔요'], '위험해요': ['난로에 손을 바짝 대요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 추위를 이기는 바른 방법', minutes: 12, tool: 'mindmap',
            teacher: '"춥다고 웅크린 채 꼼짝하지 않으면 몸이 따뜻해질까요?" 움직이면 몸에서 열이 난다는 것을 체육 시간 경험으로 떠올리게 한다. 두꺼운 옷 한 벌보다 얇은 옷 여러 겹이 옷 사이의 공기 때문에 더 따뜻할 수 있다는 것을 짚는다.',
            task: '추위를 이기는 방법을 안전한 것과 위험한 것으로 나누고, 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '추위를 이기는 방법을 나누어 보세요.', toolOptions: { topic: '추위 이기기', slots: ['안전해요', '위험해요'], cards: ['얇은 옷을 여러 겹 껴입어요', '몸을 움직여 열을 내요', '전기장판을 켠 채 오래 엎드려 자요', '춥다고 하루 종일 꼼짝하지 않아요'] },
                target: { sort: { '안전해요': ['얇은 옷을 여러 겹 껴입어요', '몸을 움직여 열을 내요'], '위험해요': ['전기장판을 켠 채 오래 엎드려 자요', '춥다고 하루 종일 꼼짝하지 않아요'] } }, difficulty: 0.15 },
              { prompt: '겨울 바깥 놀이 전에 챙길 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바깥 놀이 준비', cards: ['장갑', '목도리', '얼음물', '샌들'] },
                target: { pick: ['장갑', '목도리'] }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['장갑', '목도리', '얼음물', '샌들', '반바지'] } } } },
              { prompt: '추위를 이기는 방법과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 따뜻할까?', slots: [{ id: 'layer', label: '얇은 옷을 여러 겹 입어요' }, { id: 'scarf', label: '목도리를 둘러요' }, { id: 'move', label: '제자리 걷기를 해요' }], cards: ['옷 사이 공기가 따뜻함을 지켜요', '찬 바람이 목으로 들지 않아요', '몸을 움직이면 열이 나요'] },
                target: { match: { layer: '옷 사이 공기가 따뜻함을 지켜요', scarf: '찬 바람이 목으로 들지 않아요', move: '몸을 움직이면 열이 나요' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 언 손 녹이기와 난로 곁 약속', minutes: 14, tool: 'kitchen',
            teacher: '"언 손을 난로에 바로 대면 왜 위험할까요?" 언 손은 뜨거움을 잘 느끼지 못해 데일 수 있다는 것을 짚는다. 차례를 다 놓으면 모두 일어나 \'몸 데우기 체조\'(제자리 걷기 열 번 → 팔 크게 돌리기 다섯 번 → 손 비비기 열 번 → 손을 겨드랑이에 끼고 숨 고르기)를 한다.',
            task: '언 손을 녹이는 차례를 놓고, 난로 곁에서 지킬 일에 표시한 뒤 체조를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '꽁꽁 언 손을 안전하게 녹이는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['따뜻한 실내로 들어가요', '젖은 장갑을 벗어요', '손을 비비거나 겨드랑이에 끼워 녹여요'] },
                target: { order: ['따뜻한 실내로 들어가요', '젖은 장갑을 벗어요', '손을 비비거나 겨드랑이에 끼워 녹여요'] }, difficulty: 0.1,
                predict: { q: '언 손을 난로에 바로 대면 어떻게 될까요?', options: ['빨리 녹아 좋아요', '데일 수 있어요'], answer: 1 },
                conclude: '언 손은 뜨거움을 잘 못 느껴 데일 수 있어요. 실내에서 비비거나 몸에 대어 천천히 녹여요.' },
              { prompt: '난로 곁에서 지킬 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '난로 곁 약속', items: [{ id: 'step', text: '난로와 한 걸음 넘게 떨어져요' }, { id: 'glove', text: '젖은 장갑을 난로 위에 올려 말려요' }, { id: 'run', text: '난로 둘레에서 뛰지 않아요' }, { id: 'tell', text: '난로가 이상하면 어른께 알려요' }] },
                target: { checklist: ['step', 'run', 'tell'] }, difficulty: 0.15, levels: { challenge: { toolOptions: { items: [{ id: 'step', text: '난로와 한 걸음 넘게 떨어져요' }, { id: 'glove', text: '젖은 장갑을 난로 위에 올려 말려요' }, { id: 'run', text: '난로 둘레에서 뛰지 않아요' }, { id: 'tell', text: '난로가 이상하면 어른께 알려요' }, { id: 'paper', text: '난로 바로 옆에 종이 상자를 쌓아 둬요' }] } } } },
              { prompt: '모두 일어나 몸 데우기 체조를 해요. 제자리 걷기, 팔 돌리기, 손 비비기를 한 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"체조를 하고 나니 몸이 어떻게 달라졌나요?" 손과 볼이 따뜻해진 느낌을 말하게 한다. "추운 쉬는 시간에 교실에서 할 수 있는 몸 데우기 방법을 하나 골라 볼까요?" 정한 방법은 교실 \'날씨 약속\' 칸에 더한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 방법', slots: ['안전해요', '위험해요'], cards: ['따뜻한 보리차를 마셔요', '얼음 위에서 맨손으로 오래 놀아요'] }, prompt: '처음 보는 방법 카드를 나누어 보세요.', target: { sort: { '안전해요': ['따뜻한 보리차를 마셔요'], '위험해요': ['얼음 위에서 맨손으로 오래 놀아요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '두꺼운 옷 한 벌 대신 얇은 옷을 여러 겹 입으면 좋은 까닭은?', options: ['옷 사이 공기가 따뜻함을 지켜서', '옷이 가벼워 날아가서', '색이 예뻐서'], answer: 0, difficulty: 0.2, explain: '겹친 옷 사이의 공기가 몸의 따뜻함을 지켜 줘요. 더우면 한 겹 벗기도 쉬워요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '추위를 이기는 방법',
      items: [
        { type: 'table', prompt: '추위를 이기는 방법을 나누어 쓰세요.', columns: ['안전해요', '위험해요'], rows: 2 },
        { type: 'check', prompt: '난로 곁 약속에 ✓ 하세요.', options: ['한 걸음 넘게 떨어져요', '젖은 장갑을 난로에 올려요', '난로 둘레에서 뛰지 않아요'] },
        { type: 'short', prompt: '언 손을 난로에 바로 대면 안 되는 까닭을 쓰세요.' },
        { type: 'draw', prompt: '몸 데우기 체조를 하는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '겹쳐 입고, 움직이고, 난로는 멀리!',
        items: [
          { type: 'choice', prompt: '추울 때 하면 좋은 것에 ○ 하세요.', options: ['손 비비기', '난로에 손 대기'], answer: '손 비비기' },
          { type: 'choice', prompt: '바깥 놀이 전에 챙길 것에 ○ 하세요.', options: ['장갑', '샌들'], answer: '장갑' },
          { type: 'draw', prompt: '몸 데우기 체조를 하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요. 체조는 선생님을 따라 해요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '고르지 말아야 할 카드가 더 섞여 있고, 까닭 잇기가 세 짝이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 뜨거운 것에 대면 빨리 녹아 좋다고 여긴다 → 언 손은 뜨거움을 잘 느끼지 못한다는 것을 짚는다. ② 전기장판은 따뜻하니 오래 켜도 된다고 한다 → 오래 엎드려 있으면 저온 화상을 입을 수 있다고 알려 준다. ③ 체조 때 서로 부딪치지 않도록 책상 사이 통로에서 한 줄씩 한다.',
  }));

  lessons.push(L(14, {
    title: '감기를 막는 손 씻기와 기침 예절 익히기',
    objective: '감기를 막는 습관과 감기에 걸리기 쉬운 습관을 나누고, 손 씻기와 기침 예절을 바른 차례대로 할 수 있다.',
    illustration: ART('children at a row of classroom sinks lathering their hands with soap bubbles, one child coughing into the inside of the elbow, a window slightly open with fresh air lines', '감기야, 오지 마!', [
      { motif: 'house', x: 100, y: 214, color: 'sky' }, { motif: 'cloud', x: 330, y: 80, s: 0.7 }, { motif: 'leaf', x: 400, y: 210, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"요즘 우리 반에 기침하는 친구가 늘었어요. 날씨가 쌀쌀해지면 왜 감기에 잘 걸릴까요?" 학생 생각을 듣는다. 손에 반짝이 가루를 조금 묻힌 교사가 몇 명과 악수하고, 가루가 어디까지 옮았는지 보여 준다. "보이지 않는 감기 균도 이렇게 손으로 옮아요."',
        student: '반짝이 가루가 어디까지 옮았는지 살펴보고 짝에게 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['비누 거품을 내요', '물로 헹궈요'], shuffle: false }, sequence: [{ order: ['비누 거품을 내요', '물로 헹궈요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 손 씻기와 기침 예절 차례', minutes: 14, tool: 'kitchen',
            teacher: '"손바닥만 비비면 손가락 사이와 손톱 밑은 어떻게 될까요?" 차례를 놓은 뒤 모둠별로 세면대에 가서 서른까지 세며 손을 씻는다. 기침은 손바닥이 아니라 옷소매 안쪽으로 가린다는 것을 몸으로 해 보게 한다. 손바닥으로 가리면 그 손으로 문고리를 만진다는 것을 짚는다.',
            task: '손 씻기와 기침 예절을 차례대로 놓고, 실제로 손을 씻어 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '손을 깨끗이 씻는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['손에 물을 묻혀요', '비누로 거품을 내요', '손가락 사이와 손톱 밑까지 문질러요', '흐르는 물로 헹궈요', '깨끗한 수건으로 닦아요'] },
                target: { order: ['손에 물을 묻혀요', '비누로 거품을 내요', '손가락 사이와 손톱 밑까지 문질러요', '흐르는 물로 헹궈요', '깨끗한 수건으로 닦아요'] }, difficulty: 0.1 },
              { prompt: '기침이 나올 때 지키는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['친구에게서 고개를 돌려요', '옷소매 안쪽으로 입과 코를 가려요', '휴지를 썼다면 휴지통에 버려요', '손을 씻어요'] },
                target: { order: ['친구에게서 고개를 돌려요', '옷소매 안쪽으로 입과 코를 가려요', '휴지를 썼다면 휴지통에 버려요', '손을 씻어요'] }, difficulty: 0.15,
                predict: { q: '기침할 때 손바닥으로 가리면 어떻게 될까요?', options: ['깨끗해요', '균이 손에 묻어요'], answer: 1 },
                conclude: '손바닥에 묻은 균은 문고리와 친구 손으로 옮아요. 옷소매 안쪽으로 가려요.',
                levels: { challenge: { prompt: '기침이 나올 때 지키는 차례대로 놓아 보세요. 하면 안 되는 일 카드는 남겨요.', toolOptions: { slots: 4, cards: ['친구에게서 고개를 돌려요', '옷소매 안쪽으로 입과 코를 가려요', '휴지를 썼다면 휴지통에 버려요', '손을 씻어요', '손바닥으로 가리고 문고리를 잡아요'] } } } },
              { prompt: '모둠별로 세면대에서 서른까지 세며 손을 씻어요. 다 씻었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 감기를 막는 습관', minutes: 12, tool: 'mindmap',
            teacher: '"추우니까 창문을 한 번도 안 열면 교실 공기는 어떻게 될까요?" 쉬는 시간마다 잠깐 창문을 열어 공기를 바꾸면 감기 균이 덜 머문다는 것을 짚는다. 친구와 컵·수저를 같이 쓰지 않는 것은 친구를 싫어해서가 아니라 서로를 지키는 것이라고 말해 준다.',
            task: '생활 습관 카드를 감기를 막는 것과 감기에 걸리기 쉬운 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생활 습관 카드를 나누어 보세요.', toolOptions: { topic: '감기와 습관', slots: ['감기를 막아요', '감기에 걸리기 쉬워요'], cards: ['밖에서 돌아오면 손을 씻어요', '골고루 먹고 푹 자요', '친구와 컵을 같이 써요', '씻지 않은 손으로 눈을 비벼요'] },
                target: { sort: { '감기를 막아요': ['밖에서 돌아오면 손을 씻어요', '골고루 먹고 푹 자요'], '감기에 걸리기 쉬워요': ['친구와 컵을 같이 써요', '씻지 않은 손으로 눈을 비벼요'] } }, difficulty: 0.1 },
              { prompt: '교실 공기를 깨끗하게 하는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '교실 공기', cards: ['쉬는 시간에 창문을 잠깐 열어요', '추우니 창문을 한 번도 열지 않아요', '먼지가 나지 않게 물걸레로 닦아요', '교실에서 먼지 나게 뛰어요'] },
                target: { pick: ['쉬는 시간에 창문을 잠깐 열어요', '먼지가 나지 않게 물걸레로 닦아요'] }, difficulty: 0.15 },
              { prompt: '감기에 걸린 친구를 돕는 말을 골라 이어 보세요.', toolOptions: { mode: 'match', topic: '친구를 지켜요', slots: [{ id: 'cup', label: '친구가 내 컵으로 물을 마시려 해요' }, { id: 'sick', label: '친구가 기침을 많이 해요' }], cards: ['내 컵 말고 네 컵을 쓰자', '보건실에 같이 가 볼까?'] },
                target: { match: { cup: '내 컵 말고 네 컵을 쓰자', sick: '보건실에 같이 가 볼까?' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '감기에 걸린 친구를 돕는 말을 골라 이어 보세요. 알맞지 않은 말은 남겨요.', toolOptions: { cards: ['내 컵 말고 네 컵을 쓰자', '보건실에 같이 가 볼까?', '저리 가, 옮잖아!'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘부터 교실에서 언제 손을 씻기로 할까요?" 바깥 놀이 뒤, 점심 먹기 전, 화장실 다녀온 뒤를 학생이 말하게 한다. 세면대 옆에 손 씻기 차례 그림을 붙인다. 반짝이 가루는 물티슈로 깨끗이 닦게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '손을 씻을 때', items: [{ id: 'play', text: '바깥 놀이를 하고 왔을 때' }, { id: 'meal', text: '점심을 먹기 전' }, { id: 'look', text: '창밖 하늘을 바라볼 때' }] }, prompt: '손을 꼭 씻어야 할 때만 표시해 보세요.', target: { checklist: ['play', 'meal'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '기침이 나올 때 입을 가리는 바른 곳은?', options: ['손바닥', '옷소매 안쪽', '친구 어깨'], answer: 1, difficulty: 0.1, explain: '옷소매 안쪽으로 가리면 손에 균이 묻지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '감기를 막아요',
      items: [
        { type: 'table', prompt: '손 씻기 차례를 번호와 함께 쓰세요.', columns: ['번호', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']] },
        { type: 'check', prompt: '감기를 막는 습관에 ✓ 하세요.', options: ['손을 자주 씻어요', '컵을 같이 써요', '푹 자요'] },
        { type: 'choice', prompt: '기침할 때 가리는 곳에 ○ 하세요.', options: ['손바닥', '옷소매 안쪽'], answer: '옷소매 안쪽' },
        { type: 'short', prompt: '쉬는 시간에 창문을 잠깐 여는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '거품, 문지르기, 헹구기! 기침은 옷소매로!',
        items: [
          { type: 'choice', prompt: '바깥 놀이 뒤에 할 일에 ○ 하세요.', options: ['손 씻기', '눈 비비기'], answer: '손 씻기' },
          { type: 'choice', prompt: '기침할 때 가리는 곳에 ○ 하세요.', options: ['옷소매 안쪽', '손바닥'], answer: '옷소매 안쪽' },
          { type: 'draw', prompt: '손을 씻는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 세면대 옆 차례 그림을 보며 씻어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '하면 안 되는 일, 알맞지 않은 말 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 감기는 추워서만 걸린다고 여긴다 → 손으로 옮는 균, 바뀌지 않는 공기도 까닭이라는 것을 반짝이 가루 시연으로 보여 준다. ② 손을 물로만 헹구고 끝낸다 → 서른까지 세며 비누 거품을 내게 한다. ③ 기침하는 친구를 놀리거나 피한다 → 서로를 지키는 말로 바꾸어 말하게 한다. 반짝이 가루 대신 핸드크림과 계핏가루를 써도 된다.',
  }));

  lessons.push(L(15, {
    title: '에너지 아끼며 따뜻하게 지내는 방법 찾기',
    objective: '난방·냉방 에너지를 아끼는 방법과 낭비하는 방법을 나누고, 교실에서 에너지를 아끼는 행동을 골라 해 볼 수 있다.',
    illustration: ART('a paper-cut classroom where children close the door, draw thick curtains and wear cardigans while a heater shows a gentle glow, a light switch being turned off in an empty room next door', '에너지를 아껴요', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'house', x: 360, y: 216, color: 'sky', s: 0.9 }], 'snow'),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"창문을 활짝 열어 둔 채 난로를 켜면 교실이 따뜻해질까요?" 학생 생각을 듣는다. 교사가 문을 열어 둔 채 \'후\' 하고 바람을 불어 보이며 따뜻한 공기가 빠져나간다고 말한다. "따뜻하게 지내는 방법 가운데 에너지를 아끼는 방법을 찾아봐요."',
        student: '우리 교실에서 따뜻한 공기가 빠져나가는 곳을 하나 찾아 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '에너지', slots: ['아껴요', '낭비해요'], cards: ['문을 꼭 닫아요', '빈방에 불을 켜 둬요'], shuffle: false }, sequence: [{ sort: { '아껴요': ['문을 꼭 닫아요'], '낭비해요': ['빈방에 불을 켜 둬요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 아끼는 방법, 낭비하는 방법', minutes: 13, tool: 'mindmap',
            teacher: '"내복을 입으면 난방기를 덜 켜도 될까요?" 내 몸을 먼저 따뜻하게 하면 에너지를 덜 쓴다는 것을 짚는다. 여름과 겨울을 함께 견주며 \'기계를 켜기 전에 내가 먼저 할 수 있는 일\'을 찾게 한다.',
            task: '에너지를 아끼는 방법과 낭비하는 방법을 나누고 짝 지어요.',
            levels: CARD_LV,
            items: [
              { prompt: '겨울 생활 카드를 아끼는 것과 낭비하는 것으로 나누어 보세요.', toolOptions: { topic: '겨울 에너지', slots: ['아껴요', '낭비해요'], cards: ['내복을 입어요', '문을 꼭 닫아요', '창문을 연 채 난방기를 켜요', '반소매만 입고 난방을 세게 틀어요'] },
                target: { sort: { '아껴요': ['내복을 입어요', '문을 꼭 닫아요'], '낭비해요': ['창문을 연 채 난방기를 켜요', '반소매만 입고 난방을 세게 틀어요'] } }, difficulty: 0.1 },
              { prompt: '기계 대신 쓸 수 있는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '기계 대신', slots: [{ id: 'sum', label: '여름에 에어컨을 켜기 전에' }, { id: 'win', label: '겨울에 난방을 세게 틀기 전에' }], cards: ['부채와 선풍기를 먼저 써요', '내복과 무릎 담요를 먼저 써요'] },
                target: { match: { sum: '부채와 선풍기를 먼저 써요', win: '내복과 무릎 담요를 먼저 써요' } }, difficulty: 0.1 },
              { prompt: '난방을 덜 켜고도 따뜻해지는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '덜 켜도 따뜻해요', cards: ['두꺼운 커튼을 쳐요', '문틈 바람을 막아요', '창문을 열어 둬요', '얇은 옷만 입어요'] },
                target: { pick: ['두꺼운 커튼을 쳐요', '문틈 바람을 막아요'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['두꺼운 커튼을 쳐요', '문틈 바람을 막아요', '창문을 열어 둬요', '얇은 옷만 입어요', '빈 교실 난방기를 켜 둬요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 교실 에너지 지킴이', minutes: 13, tool: 'emotion',
            teacher: '"교실을 마지막으로 나가는데 난방기가 켜져 있어요. 어린이가 직접 만져도 될까요?" 난방기·전기 기구는 어린이가 함부로 만지지 않고 선생님께 알린다는 것을 짚는다. 활동 끝에 모둠별로 교실을 한 바퀴 돌며 \'문이 닫혔나, 빈 곳 전등이 꺼졌나\'를 살피고 결과를 말한다.',
            task: '상황을 읽고 에너지를 아끼는 행동을 골라요. 모둠별로 교실을 살펴요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '체육 시간이라 교실이 비어요. 난방기가 켜져 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '모두 체육관에 가서 교실이 비어요. 난방기가 켜져 있어요.', success: '맞아요! 아무도 없는 교실의 난방기를 끄면 에너지를 아껴요.', choices: [
                { id: 'tell', text: '선생님께 난방기가 켜져 있다고 알려요', result: '선생님이 끄시고 칭찬해 주셔요', mood: '뿌듯함' },
                { id: 'leave', text: '그냥 두고 나가요', result: '빈 교실에서 에너지가 새어 나가요', mood: '걱정', why: '아무도 없는 교실의 난방은 누구를 위한 것일까요?' }] },
                target: { choice: 'tell' }, hints: ['아무도 없는 교실에서 난방기가 돌아가면 그 따뜻한 바람은 누구에게 쓰일지 생각해요.','고른 방법대로 하면 빈 교실에서 난방기가 계속 돌아가나요? 2학년이 직접 끄기 어려우면 누구에게 말하면 될까요?','선생님께 난방기가 켜져 있다고 알려요. 빈 교실의 난방기를 끄면 에너지를 아껴요.'], difficulty: 0.05 },
              { prompt: '서아는 추워서 난방을 세게 틀고 싶어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 춥다고 해요. 반소매 옷을 입고 있어요.', success: '맞아요! 옷을 먼저 챙겨 입으면 난방을 덜 써도 따뜻해요.', choices: [
                { id: 'wear', text: '겉옷을 먼저 입어 봐요', result: '금세 따뜻해지고 에너지도 아껴요', mood: '편안함' },
                { id: 'max', text: '난방을 가장 세게 틀어요', result: '교실이 너무 더워지고 에너지를 많이 써요', mood: '짜증', why: '기계를 켜기 전에 내가 먼저 할 수 있는 일이 있어요.' },
                { id: 'open', text: '창문을 열고 난방을 세게 틀어요', result: '따뜻한 공기가 밖으로 빠져나가요', mood: '걱정', why: '창문이 열리면 따뜻한 공기가 어디로 갈까요?' }] },
                target: { choice: 'wear' }, hints: ['서아가 왜 추운지 먼저 살펴요. 지금 입은 옷은 어떤 옷인가요?','고른 방법은 에너지를 많이 쓰나요, 적게 쓰나요? 창문을 열고 난방을 틀면 따뜻한 공기가 어디로 갈까요?','겉옷을 먼저 입어 봐요. 옷으로 몸을 데우면 난방을 세게 틀지 않아도 돼요.'], difficulty: 0.15,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'wear', text: '겉옷을 먼저 입어 봐요', result: '금세 따뜻해지고 에너지도 아껴요', mood: '편안함' },
                  { id: 'max', text: '난방을 가장 세게 틀어요', result: '교실이 너무 더워지고 에너지를 많이 써요', mood: '짜증', why: '기계를 켜기 전에 내가 먼저 할 수 있는 일이 있어요.' }] } } } },
              { prompt: '쉬는 시간에 창문을 열어 환기했어요. 다음에 할 일은?', toolOptions: { mode: 'branch', situation: '쉬는 시간에 창문을 잠깐 열어 공기를 바꾸었어요. 이제 수업이 시작돼요.', success: '맞아요! 공기를 바꾼 뒤에는 창문을 닫아야 따뜻한 공기가 새지 않아요.', choices: [
                { id: 'close', text: '창문을 닫고 수업을 시작해요', result: '깨끗한 공기에 교실도 다시 따뜻해져요', mood: '편안함' },
                { id: 'keep', text: '창문을 계속 열어 둬요', result: '교실이 점점 추워지고 난방이 헛돌아요', mood: '걱정', why: '환기는 잠깐이면 돼요. 오래 열면 따뜻함이 빠져나가요.' }] },
                target: { choice: 'close' }, hints: ['창문을 연 까닭이 무엇이었는지 떠올리고, 그 일이 끝났는지 생각해요.','공기는 이미 바뀌었어요. 겨울에 창문을 계속 열어 두면 난방한 따뜻한 공기는 어떻게 될까요?','창문을 닫고 수업을 시작해요. 환기는 잠깐, 그 뒤에는 닫아야 에너지를 아껴요.'], difficulty: 0.15, levels: { challenge: { toolOptions: { choices: [{ id: 'close', text: '창문을 닫고 수업을 시작해요', result: '깨끗한 공기에 교실도 다시 따뜻해져요', mood: '편안함' }, { id: 'keep', text: '창문을 계속 열어 둬요', result: '교실이 점점 추워지고 난방이 헛돌아요', mood: '걱정', why: '환기는 잠깐이면 돼요. 오래 열면 따뜻함이 빠져나가요.' }, { id: 'max', text: '창문을 닫고 난방을 가장 세게 틀어요', result: '교실이 너무 더워지고 에너지를 많이 써요', mood: '짜증', why: '창문을 닫으면 교실은 곧 다시 따뜻해져요. 난방을 세게 틀 까닭이 없어요.' }] } } } },
              { prompt: '모둠별로 교실을 한 바퀴 돌며 문과 빈 곳 전등을 살피고 결과를 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"모둠이 찾은 것 가운데 고쳐야 할 곳은 어디였나요?" 각 모둠의 결과를 듣고, 이번 주 \'에너지 지킴이\' 당번을 정한다. 전기 기구는 어린이가 함부로 만지지 않고 선생님께 알린다는 약속을 다시 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 상황', slots: ['아껴요', '낭비해요'], cards: ['나갈 때 전등을 꺼요', '냉장고 문을 열고 오래 서 있어요'] }, prompt: '처음 보는 카드를 나누어 보세요.', target: { sort: { '아껴요': ['나갈 때 전등을 꺼요'], '낭비해요': ['냉장고 문을 열고 오래 서 있어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '추울 때 기계를 켜기 전에 먼저 할 일은?', options: ['겉옷이나 내복을 입어요', '창문을 열어요', '반소매로 갈아입어요'], answer: 0, difficulty: 0.1, explain: '내 몸을 먼저 따뜻하게 하면 난방을 덜 켜도 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '에너지 지킴이',
      items: [
        { type: 'table', prompt: '에너지를 아끼는 방법을 계절마다 쓰세요.', columns: ['여름', '겨울'], rows: 2 },
        { type: 'check', prompt: '교실을 살핀 결과에 ✓ 하세요.', options: ['문이 닫혀 있어요', '빈 곳 전등이 꺼져 있어요', '창문이 닫혀 있어요'] },
        { type: 'short', prompt: '창문을 연 채 난방기를 켜면 안 되는 까닭을 쓰세요.' },
        { type: 'draw', prompt: '에너지를 아끼며 따뜻하게 지내는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '먼저 입고, 문 닫고, 끄고!',
        items: [
          { type: 'choice', prompt: '에너지를 아끼는 것에 ○ 하세요.', options: ['문을 닫아요', '문을 열어 둬요'], answer: '문을 닫아요' },
          { type: 'choice', prompt: '추울 때 먼저 할 일에 ○ 하세요.', options: ['겉옷 입기', '창문 열기'], answer: '겉옷 입기' },
          { type: 'draw', prompt: '에너지를 아끼는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 상황 고르기 보기가 두 개예요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '고르지 말아야 할 카드가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 추우면 난방기를 세게 트는 것이 먼저라고 여긴다 → 내 몸을 먼저 따뜻하게 하는 방법을 찾게 한다. ② 환기와 에너지 아끼기가 서로 반대라고 여긴다 → 짧게 환기하고 바로 닫으면 둘 다 지킬 수 있다는 것을 짚는다. ③ 어린이가 난방기·콘센트를 직접 만지지 않게 하고, 알리는 역할만 맡긴다.',
  }));

  lessons.push(L(16, {
    title: '한 주 계절 생활 실천표 만들기',
    objective: '이번 주에 지킬 계절 생활 약속 세 가지를 문장으로 정하고, 실천표를 쓰는 차례를 알아 스스로 실천을 시작할 수 있다.',
    illustration: ART('a paper-cut weekly chart pinned on a classroom wall with seven little boxes and drawings of a jacket, a water cup and washing hands, a child drawing a circle in the first box', '이번 주 나의 약속', [
      { motif: 'star', x: 120, y: 200, s: 0.7 }, { motif: 'house', x: 380, y: 214, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지 계절에 맞게 지내는 방법을 많이 배웠어요. 그 가운데 내가 잘 잊는 것은 무엇인가요?" 겉옷 챙기기, 손 씻기, 물 마시기 같은 답을 듣는다. "알고만 있으면 습관이 되지 않아요. 오늘은 한 주 동안 지킬 약속을 정하고, 날마다 표시할 실천표를 만들어요."',
        student: '지금까지 배운 계절 생활 약속 가운데 내가 잘 잊는 것을 하나 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '아침마다 ___ 보고 옷을 골라요.' }], cards: ['하늘을', '거울을'], shuffle: false }, sequence: [{ fill: { f1: '하늘을' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 약속 문장 만들기', minutes: 12, tool: 'story',
            teacher: '"약속은 \'잘하자\'보다 \'언제, 무엇을\' 할지 써야 지킬 수 있어요." 빈칸을 채운 문장을 소리 내어 읽게 한다. 실천표 쓰는 차례에서 \'날마다 표시하기\'를 빼먹는 학생이 많으니, 표시를 해야 나중에 돌아볼 수 있다는 것을 짚는다.',
            task: '약속 문장의 빈칸을 채우고, 실천표를 쓰는 차례를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '날씨를 살피는 약속 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '아침마다 ___ 보고 옷을 골라요.' }, { id: 'f2', who: '나', label: '낮에 더우면 겉옷을 벗어 ___ 걸어요.' }], cards: ['하늘과 예보를', '친구 옷을', '내 자리에', '복도 바닥에'] },
                target: { fill: { f1: '하늘과 예보를', f2: '내 자리에' } }, difficulty: 0.05 },
              { prompt: '건강과 에너지를 지키는 약속 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '바깥 놀이를 하고 오면 ___ 씻어요.' }, { id: 'f2', who: '나', label: '추우면 난방보다 ___ 먼저 입어요.' }], cards: ['손을', '신발을', '겉옷을', '수영복을'] },
                target: { fill: { f1: '손을', f2: '겉옷을' } }, difficulty: 0.1 },
              { prompt: '실천표를 쓰는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['지킬 약속 세 가지를 정해요', '실천표에 약속을 적어요', '날마다 지킨 칸에 ○ 해요', '주말에 돌아보고 이야기해요'] },
                target: { order: ['지킬 약속 세 가지를 정해요', '실천표에 약속을 적어요', '날마다 지킨 칸에 ○ 해요', '주말에 돌아보고 이야기해요'] }, difficulty: 0.15,
                hints: ['표를 쓰려면 무엇이 먼저 정해져 있어야 할지 떠올리고, 날마다 할 일과 마지막에 할 일을 나누어 봐요.', '돌아보기를 하려면 그 전에 무엇이 쌓여 있어야 할까요? 이웃한 두 카드를 다시 보세요.', '약속 정하기 → 표에 적기 → 날마다 ○ 하기 → 주말에 돌아보기 차례예요.'],
                levels: { challenge: { prompt: '실천표를 쓰는 차례대로 놓아 보세요. 실천표와 상관없는 카드는 남겨요.', toolOptions: { slots: 4, cards: ['지킬 약속 세 가지를 정해요', '실천표에 약속을 적어요', '날마다 지킨 칸에 ○ 해요', '주말에 돌아보고 이야기해요', '실천표를 서랍 깊이 넣어 둬요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 실천표 만들기', minutes: 14, tool: 'emotion',
            teacher: '활동지 실천표에 내 약속 세 가지를 적게 한다. "약속을 하루 잊었어요. 그럼 실천표를 버릴까요?" 잊은 날은 다음 날 다시 하면 된다는 것을 짚는다. 자신감 눈금은 정답이 없다. 지금 내 마음을 그대로 고르게 하고, 자신이 적은 학생에게는 더 쉬운 약속으로 바꾸어도 된다고 말한다.',
            task: '활동지 실천표에 약속을 적고, 지킬 자신이 얼마나 있는지 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '활동지 실천표에 이번 주 약속 세 가지를 적어요. 다 적었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '내가 정한 약속을 한 주 동안 지킬 자신이 얼마나 있나요? 지금 마음을 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 주 계절 생활 약속 세 가지를 정했어요.', feeling: '설렘', ask: '지킬 자신은 얼마나 될까요?', scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '어떤 마음이든 괜찮아요. 날마다 ○ 하며 키워 가요.' }, target: { level: 'any' }, difficulty: 0 },
              { prompt: '약속을 하루 잊었어요. 하준이는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 어제 손 씻기 약속을 잊었어요. 실천표 한 칸이 비었어요.', success: '맞아요! 하루 잊었어도 오늘 다시 지키면 돼요.', choices: [
                { id: 'again', text: '오늘 다시 지키고 ○ 해요', result: '다시 이어 가는 힘이 생겨요', mood: '뿌듯함' },
                { id: 'quit', text: '하루 잊었으니 실천표를 버려요', result: '약속이 습관이 되지 못해요', mood: '속상함', why: '하루 잊어도 다시 하면 돼요.' },
                { id: 'fake', text: '어제 칸에도 몰래 ○ 해요', result: '실천표가 내 모습을 알려 주지 못해요', mood: '걱정', why: '실천표는 내 모습을 그대로 보여 줄 때 쓸모가 있어요.' }] },
                target: { choice: 'again' }, hints: ['실천표는 무엇을 하려고 쓰는지 먼저 떠올려요. 하루 빈 칸이 있으면 실천표는 쓸모가 없어질까요?','고른 방법대로 하면 습관이 이어질까요? 하지 않은 날에 ○ 하면 실천표가 사실과 맞을까요?','오늘 다시 지키고 ○ 해요. 빈 칸은 그대로 두고, 오늘부터 다시 이어 가요.'], difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [{ id: 'again', text: '오늘 다시 지키고 ○ 해요', result: '다시 이어 가는 힘이 생겨요', mood: '뿌듯함' }, { id: 'quit', text: '하루 잊었으니 실천표를 버려요', result: '약속이 습관이 되지 못해요', mood: '속상함', why: '하루 잊어도 다시 하면 돼요.' }, { id: 'fake', text: '어제 칸에도 몰래 ○ 해요', result: '실천표가 내 모습을 알려 주지 못해요', mood: '걱정', why: '실천표는 내 모습을 그대로 보여 줄 때 쓸모가 있어요.' }, { id: 'later', text: '다음 주 월요일부터 다시 시작해요', result: '그사이 며칠이 그냥 지나가요', mood: '걱정', why: '잊은 것을 알았으면 바로 오늘 다시 하면 돼요.' }] } }, easy: { toolOptions: { choices: [
                  { id: 'again', text: '오늘 다시 지키고 ○ 해요', result: '다시 이어 가는 힘이 생겨요', mood: '뿌듯함' },
                  { id: 'quit', text: '하루 잊었으니 실천표를 버려요', result: '약속이 습관이 되지 못해요', mood: '속상함', why: '하루 잊어도 다시 하면 돼요.' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 약속 가운데 하나를 친구들에게 소개해 볼까요?" 네댓 명이 발표한다. 실천표는 교실 뒤 게시판에 붙이고 날마다 하교 전에 표시하기로 한다. 다음 주 18차시에 이 실천표를 다시 꺼내 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '더운 날에는 물을 ___ 마셔요.' }], cards: ['조금씩 자주', '한꺼번에 많이'] }, prompt: '여름 약속 문장의 빈칸을 채워 보세요.', target: { fill: { f1: '조금씩 자주' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '좋은 약속 문장은 무엇인가요?', options: ['날씨에 맞게 잘 지내자', '아침마다 예보를 듣고 겉옷을 챙겨요', '열심히 하자'], answer: 1, difficulty: 0.2, explain: '언제, 무엇을 할지 쓰면 지켰는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 주 계절 생활 실천표',
      items: [
        { type: 'table', prompt: '약속을 지킨 날에 ○ 하세요.', columns: ['나의 약속', '월', '화', '수', '목', '금'], cells: [['', '', '', '', '', ''], ['', '', '', '', '', ''], ['', '', '', '', '', '']] },
        { type: 'blank', prompt: '빈칸을 채워 약속 문장을 쓰세요.', text: '나는 ___ 때 ___ 할 거예요.' },
        { type: 'short', prompt: '약속을 잊은 날에는 어떻게 할지 쓰세요.' },
        { type: 'draw', prompt: '약속을 지키는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '약속은 하나만 정해도 돼요.',
        items: [
          { type: 'table', prompt: '약속을 지킨 날에 ○ 하세요.', columns: ['나의 약속', '월', '화', '수', '목', '금'], cells: [['', '', '', '', '', '']] },
          { type: 'choice', prompt: '약속을 잊었을 때 할 일에 ○ 하세요.', options: ['다음 날 다시 해요', '실천표를 버려요'], answer: '다음 날 다시 해요' },
          { type: 'draw', prompt: '약속을 지키는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '약속은 하나만 정해요. 자신감 눈금은 세 칸이에요.',
      base: '약속 세 가지를 정해 실천표에 적어요.',
      challenge: '실천표와 상관없는 카드가 섞여 있어요. 약속마다 언제 할지까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속을 "잘하자"처럼 막연하게 쓴다 → 언제·무엇을 넣어 다시 쓰게 한다. ② 하루 잊으면 포기한다 → 다시 하는 것도 실천이라는 것을 짚는다. ③ 실천표에 지키지 않은 날도 ○를 한다 → 실천표는 칭찬받으려는 것이 아니라 내 모습을 보는 거울이라고 말해 준다. 자신감 눈금은 채점하지 않으며, 결과는 18차시 돌아보기에 쓴다.',
  }));

  // ───────────────────────── 17~24차시: 달라진 둘레 돌아보기·습관 이어 가기(성찰과 습관화) ─────────────────────────

  lessons.push(L(17, {
    title: '학교 둘레를 걸으며 계절 따라 달라진 것 찾기',
    objective: '학교 둘레를 걸으며 여름과 달라진 모습을 찾고, 계절 때문에 달라진 것과 다른 까닭으로 달라진 것을 가를 수 있다.',
    illustration: ART('a line of children walking around the school garden with clipboards, pointing at a tree with half red leaves, fallen leaves on the path and an empty flower bed', '여름과 무엇이 달라졌을까?', [
      { motif: 'tree', x: 90, y: 214, color: 'buttercup' }, { motif: 'tree', x: 380, y: 214, color: 'peach' }, { motif: 'leaf', x: 250, y: 220, color: 'rose' }, { motif: 'bird', x: 300, y: 80 }]),
    safety: ['둘레 걷기는 두 줄로, 선생님이 보이는 곳까지만 가요.', '나뭇가지와 열매는 꺾거나 따지 않고 눈으로만 살펴요.', '벌이 보이면 손을 휘젓지 말고 천천히 멀어져요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"1학기에 찍은 우리 학교 화단 사진이에요. 지금 나가면 무엇이 달라져 있을까요?" 예상을 두세 개 듣고 칠판에 적는다. "오늘은 탐정이 되어 달라진 것을 찾아요. 그런데 모든 달라짐이 계절 때문일까요?" 활동지 \'달라진 것 찾기\' 칸을 들고 나간다고 알린다.',
        student: '1학기 사진과 견주어 지금 달라졌을 것 같은 곳을 하나 예상해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '여름과 지금', slots: ['여름에 봤어요', '지금 봐요'], cards: ['초록 잎이 무성해요', '낙엽이 쌓여요'], shuffle: false }, sequence: [{ sort: { '여름에 봤어요': ['초록 잎이 무성해요'], '지금 봐요': ['낙엽이 쌓여요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 학교 둘레 걷기', minutes: 15, tool: 'mindmap',
            teacher: '밖에 나가 화단·나무·운동장을 차례로 걷는다. "이 나무 잎은 여름에 무슨 색이었지요? 바닥에는 무엇이 있나요?" 나무 앞에서 멈추어 눈·귀·손(나무껍질 만지기)으로 살피게 한다. 교실에 돌아와 본 것을 카드로 나눈다. 여름 모습이 떠오르지 않는 학생에게는 1학기 사진을 다시 보여 준다.',
            task: '학교 둘레를 걸으며 달라진 것을 찾고, 교실에 돌아와 여름 모습과 지금 모습으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교 둘레를 걸으며 달라진 것을 활동지에 세 가지 적어요. 교실에 돌아오면 "다 했어요"를 누르세요.', free: true },
              { prompt: '화단과 나무 카드를 여름 모습과 지금 모습으로 나누어 보세요.', toolOptions: { topic: '화단과 나무', slots: ['여름에 봤어요', '지금 봐요'], cards: ['해바라기가 활짝 폈어요', '매미가 맴맴 울었어요', '나뭇잎이 붉게 물들었어요', '꽃이 지고 씨가 맺혔어요'] },
                target: { sort: { '여름에 봤어요': ['해바라기가 활짝 폈어요', '매미가 맴맴 울었어요'], '지금 봐요': ['나뭇잎이 붉게 물들었어요', '꽃이 지고 씨가 맺혔어요'] } }, difficulty: 0.1, levels: { challenge: { prompt: '화단과 나무 카드를 여름 모습과 지금 모습으로 나누어 보세요. 여름에도 지금도 보지 못한 카드는 남겨 두세요.', toolOptions: { cards: ['해바라기가 활짝 폈어요', '매미가 맴맴 울었어요', '나뭇잎이 붉게 물들었어요', '꽃이 지고 씨가 맺혔어요', '눈사람이 서 있어요'] } } } },
              { prompt: '운동장의 사람 모습 카드를 여름 모습과 지금 모습으로 나누어 보세요.', toolOptions: { topic: '운동장의 사람들', slots: ['여름에 봤어요', '지금 봐요'], cards: ['그늘에 모여 쉬어요', '수돗가에서 얼굴을 씻어요', '겉옷을 입고 뛰어요', '햇볕이 드는 곳에 모여요'] },
                target: { sort: { '여름에 봤어요': ['그늘에 모여 쉬어요', '수돗가에서 얼굴을 씻어요'], '지금 봐요': ['겉옷을 입고 뛰어요', '햇볕이 드는 곳에 모여요'] } }, difficulty: 0.2,
                predict: { q: '여름에는 그늘, 지금은 햇볕을 찾아요. 왜 달라졌을까요?', options: ['날씨가 바뀌어서', '운동장이 바뀌어서'], answer: 0 },
                conclude: '더울 때는 그늘을, 쌀쌀할 때는 햇볕을 찾아요. 계절이 바뀌면 사람의 생활도 바뀌어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 계절 때문에 달라진 것 가리기', minutes: 12, tool: 'mindmap',
            teacher: '"새 미끄럼틀이 생긴 것도 계절 때문일까요?" 달라진 것 가운데 계절 때문이 아닌 것(새로 고친 시설, 새로 붙인 그림)을 섞어 묻는다. 계절 때문인지 알려면 "작년 이맘때도 그랬을까?"를 물어보면 된다는 것을 알려 준다.',
            task: '달라진 것 가운데 계절 때문에 달라진 것만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '계절 때문에 달라진 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '계절 때문에', cards: ['낙엽이 쌓였어요', '친구들이 겉옷을 입었어요', '운동장에 새 미끄럼틀이 생겼어요', '복도에 새 그림이 붙었어요'] },
                target: { pick: ['낙엽이 쌓였어요', '친구들이 겉옷을 입었어요'] }, difficulty: 0.15 },
              { prompt: '계절 때문에 달라진 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '계절 때문에', cards: ['해가 일찍 져요', '모기가 거의 보이지 않아요', '교실 책상 줄이 바뀌었어요', '새 친구가 전학 왔어요'] },
                target: { pick: ['해가 일찍 져요', '모기가 거의 보이지 않아요'] }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['해가 일찍 져요', '모기가 거의 보이지 않아요', '교실 책상 줄이 바뀌었어요', '새 친구가 전학 왔어요', '급식 반찬이 바뀌었어요'] } } } },
              { prompt: '달라진 모습과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 달라졌을까?', slots: [{ id: 'leaf', label: '나뭇잎이 물들어 떨어져요' }, { id: 'sun', label: '친구들이 햇볕 쪽에 모여요' }], cards: ['날이 선선하고 차가워져서', '그늘이 쌀쌀하게 느껴져서'] },
                target: { match: { leaf: '날이 선선하고 차가워져서', sun: '그늘이 쌀쌀하게 느껴져서' } }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"찾은 것 가운데 가장 크게 달라진 것은 무엇이었나요?" 모둠마다 하나씩 말한다. 오늘 찾은 모습을 교실 \'계절 탐정 판\'에 붙이고, 겨울이 오면 같은 곳을 다시 걸어 보기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '계절 때문에', cards: ['연못물이 차가워졌어요', '화장실 문을 새로 칠했어요', '잠자리가 많이 날아요'] }, prompt: '계절 때문에 달라진 것만 골라 보세요.', target: { pick: ['연못물이 차가워졌어요', '잠자리가 많이 날아요'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '계절이 바뀌면 우리 생활은 어떻게 되나요?', options: ['언제나 똑같아요', '날씨에 맞게 달라져요', '여름만 달라져요'], answer: 1, difficulty: 0.1, explain: '계절이 바뀌면 옷, 노는 곳, 쉬는 곳이 날씨에 맞게 달라져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절 탐정',
      items: [
        { type: 'table', prompt: '학교 둘레에서 찾은 것을 쓰세요.', columns: ['곳', '여름에는', '지금은'], cells: [['화단', '', ''], ['나무', '', ''], ['운동장', '', '']] },
        { type: 'check', prompt: '계절 때문에 달라진 것에 ✓ 하세요.', options: ['낙엽이 쌓였어요', '새 의자가 놓였어요', '겉옷을 입어요'] },
        { type: 'short', prompt: '"작년 이맘때도 그랬을까?"를 물어보는 까닭을 쓰세요.' },
        { type: 'draw', prompt: '가장 크게 달라진 곳의 지금 모습을 그리세요.' },
      ],
      easy: {
        note: '나무, 화단, 사람 옷을 살펴봐요.',
        items: [
          { type: 'table', prompt: '찾은 것을 하나 쓰세요.', columns: ['여름에는', '지금은'], rows: 1 },
          { type: 'choice', prompt: '지금 볼 수 있는 것에 ○ 하세요.', options: ['물든 나뭇잎', '활짝 핀 해바라기'], answer: '물든 나뭇잎' },
          { type: 'draw', prompt: '지금 학교 나무 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 1학기 사진을 옆에 두고 견주어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '계절과 상관없이 달라진 카드가 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 달라진 것은 모두 계절 때문이라고 여긴다 → "작년 이맘때도 그랬을까?"로 가린다. ② 여름 모습이 기억나지 않는다 → 1학기 사진(학교 누리집·교실 기록)을 미리 준비한다. ③ 걷기 중 열매를 따거나 가지를 꺾는다 → 출발 전에 \'눈으로만\' 약속을 하고, 떨어진 낙엽만 주워 온다. 이 차시의 판은 33~40차시 관찰 기록에 다시 쓴다.',
  }));

  lessons.push(L(18, {
    title: '한 주 실천표 돌아보고 다시 다짐하기',
    objective: '실천표 그림그래프에서 가장 잘 지킨 약속과 덜 지킨 약속을 찾고, 덜 지킨 약속을 지킬 새 방법을 고를 수 있다.',
    illustration: ART('a paper-cut wall chart with rows of small circles showing how many days each promise was kept, a child holding a pencil and thinking with a small cloud above the head', '한 주 동안 어땠나요?', [
      { motif: 'star', x: 100, y: 200, s: 0.6 }, { motif: 'cloud', x: 330, y: 84, s: 0.6 }, { motif: 'house', x: 400, y: 214, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"16차시에 만든 실천표를 꺼내 볼까요? ○가 가장 많은 줄은 어디인가요?" 각자 실천표를 보고 손가락으로 세게 한다. "○가 적은 줄이 있어도 괜찮아요. 왜 적었는지 알면 고칠 수 있어요." 시연 단추로 민지의 실천표 그림그래프를 보여 준다.',
        student: '내 실천표에서 ○가 가장 많은 약속을 짝에게 말해 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '민지의 실천표', data: [['겉옷 챙기기', 5], ['손 씻기', 2]], unit: '일', xLabel: '약속', yLabel: '지킨 날', icons: [{ value: 1, name: '1일' }], icon: 'circle', choices: ['겉옷 챙기기', '손 씻기'], question: '더 잘 지킨 약속은?' }, sequence: [{ pick: 0 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 실천표 그래프 읽기', minutes: 12, tool: 'chart',
            teacher: '"동그라미 하나가 하루예요. 가장 긴 줄은 무엇인가요?" 그래프를 읽고 나서 "민지가 손 씻기를 덜 지킨 까닭은 무엇일까요?"라고 이어 묻는다. 그래프는 잘하고 못한 것을 따지려는 것이 아니라 다음에 무엇을 바꿀지 찾으려고 본다는 것을 짚는다.',
            task: '친구의 실천표 그림그래프를 보고 물음에 알맞은 약속을 골라요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '민지의 실천표예요. 가장 잘 지킨 약속은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '민지의 실천표', data: [['겉옷 챙기기', 5], ['물 마시기', 3], ['손 씻기', 2]], unit: '일', xLabel: '약속', yLabel: '지킨 날', icons: [{ value: 1, name: '1일' }], icon: 'circle', choices: ['겉옷 챙기기', '물 마시기', '손 씻기'], question: '가장 잘 지킨 약속은?' },
                target: { pick: 0 }, difficulty: 0.05,
                levels: { challenge: { prompt: '민지의 실천표예요. 겉옷 챙기기는 손 씻기보다 며칠 더 지켰나요?', toolOptions: { choices: ['2일', '3일', '5일'], question: '겉옷 챙기기는 손 씻기보다 며칠 더?', explain: '겉옷 챙기기는 5일, 손 씻기는 2일이에요. 5에서 2를 빼면 3일이에요.' }, target: { pick: 1 } } } },
              { prompt: '준호의 실천표예요. 가장 덜 지킨 약속은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '준호의 실천표', data: [['예보 듣기', 4], ['전등 끄기', 1], ['손 씻기', 3]], unit: '일', xLabel: '약속', yLabel: '지킨 날', icons: [{ value: 1, name: '1일' }], icon: 'circle', choices: ['예보 듣기', '전등 끄기', '손 씻기'], question: '가장 덜 지킨 약속은?' },
                target: { pick: 1 }, difficulty: 0.1,
                levels: { challenge: { prompt: '준호의 실천표예요. 닷새 가운데 전등 끄기를 지키지 못한 날은 며칠인가요?', toolOptions: { choices: ['1일', '3일', '4일'], question: '전등 끄기를 지키지 못한 날은?', explain: '닷새 가운데 전등 끄기는 1일만 지켰어요. 5에서 1을 빼면 4일이에요.' }, target: { pick: 2 } } } },
              { prompt: '서아의 실천표예요. 닷새 가운데 하루만 빼고 지킨 약속은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '서아의 실천표', data: [['겉옷 걸기', 3], ['물 마시기', 4], ['문 닫기', 2]], unit: '일', xLabel: '약속', yLabel: '지킨 날', icons: [{ value: 1, name: '1일' }], icon: 'circle', choices: ['겉옷 걸기', '물 마시기', '문 닫기'], question: '하루만 빼고 지킨 약속은?' },
                target: { pick: 1 }, difficulty: 0.25,
                levels: { challenge: { prompt: '서아의 실천표예요. 세 약속을 지킨 날을 모두 더하면 며칠인가요?', toolOptions: { choices: ['7일', '8일', '9일'], question: '지킨 날을 모두 더하면?', explain: '겉옷 걸기 3일, 물 마시기 4일, 문 닫기 2일이에요. 3과 4와 2를 더하면 9일이에요.' }, target: { pick: 2 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 덜 지킨 약속, 새 방법 찾기', minutes: 14, tool: 'emotion',
            teacher: '"손 씻기를 자꾸 잊는다면 어떻게 하면 기억날까요?" 탓하기보다 방법을 바꾸는 쪽으로 생각을 이끈다. 내 실천을 돌아보는 눈금은 정답이 없다고 말하고, 고른 뒤 짝과 실천표를 바꾸어 보며 \'잘 지킨 약속\'을 하나씩 칭찬해 준다.',
            task: '덜 지킨 약속을 지킬 새 방법을 고르고, 한 주 동안의 내 실천을 돌아봐요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '민지는 손 씻기를 자꾸 잊어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지는 바깥 놀이 뒤에 손 씻기를 자꾸 잊어요.', success: '맞아요! 눈에 잘 띄는 곳의 그림이 잊지 않게 도와줘요.', choices: [
                { id: 'note', text: '교실 문에 손 씻기 그림을 붙여요', result: '들어올 때마다 그림을 보고 기억해요', mood: '뿌듯함' },
                { id: 'drop', text: '손 씻기 약속을 지워 버려요', result: '감기를 막는 습관이 사라져요', mood: '걱정', why: '지키기 어려운 약속은 지우기보다 방법을 바꿔 봐요.' },
                { id: 'blame', text: '알려 주지 않은 친구 탓을 해요', result: '친구도 속상하고 약속도 그대로예요', mood: '속상함', why: '내 약속은 내가 기억할 방법을 찾아요.' }] },
                target: { choice: 'note' }, hints: ['민지가 언제 잊는지 먼저 짚고, 그때 떠올리게 도와줄 방법을 찾아요.','고른 방법대로 하면 민지가 다음에는 손을 씻게 될까요? 약속을 지우거나 남 탓을 하면 습관이 생길까요?','교실 문에 손 씻기 그림을 붙여요. 들어올 때마다 그림을 보고 떠올릴 수 있어요.'], difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'note', text: '교실 문에 손 씻기 그림을 붙여요', result: '들어올 때마다 그림을 보고 기억해요', mood: '뿌듯함' },
                  { id: 'drop', text: '손 씻기 약속을 지워 버려요', result: '감기를 막는 습관이 사라져요', mood: '걱정', why: '지키기 어려운 약속은 지우기보다 방법을 바꿔 봐요.' }] } } } },
              { prompt: '준호는 나갈 때 전등 끄기를 잊어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호는 방을 나갈 때 전등 끄기를 자꾸 잊어요.', success: '맞아요! 서로 물어 주는 짝이 있으면 잊지 않고 끌 수 있어요.', choices: [
                { id: 'pair', text: '"불 껐니?" 하고 서로 묻는 짝을 정해요', result: '짝이 물어봐 주어 잊지 않아요', mood: '고마움' },
                { id: 'never', text: '전등을 아예 켜지 않아요', result: '어두워서 넘어질 뻔해요', mood: '무서움', why: '필요할 때는 켜고, 나갈 때 끄면 돼요.' }] },
                target: { choice: 'pair' }, hints: ['준호가 언제 잊는지 먼저 짚고, 그때 떠올리게 도와줄 방법을 찾아요.','전등을 아예 켜지 않으면 어두운 방에서 어떻게 될까요? 필요할 때 켜고 나갈 때 끄는 방법을 찾아요.','\'불 껐니?\' 하고 서로 묻는 짝을 정해요. 필요할 때는 켜고, 나갈 때는 잊지 않고 꺼요.'], difficulty: 0.15, levels: { challenge: { toolOptions: { choices: [{ id: 'pair', text: '\"불 껐니?\" 하고 서로 묻는 짝을 정해요', result: '짝이 물어봐 주어 잊지 않아요', mood: '고마움' }, { id: 'never', text: '전등을 아예 켜지 않아요', result: '어두워서 넘어질 뻔해요', mood: '무서움', why: '필요할 때는 켜고, 나갈 때 끄면 돼요.' }, { id: 'wait', text: '가족이 대신 꺼 주기를 기다려요', result: '빈방에 불이 오래 켜져 있어요', mood: '걱정', why: '내 약속은 내가 지킬 방법을 찾아요.' }] } } } },
              { prompt: '한 주 동안 내 약속을 얼마나 지켰는지 지금 마음을 골라 보세요.', toolOptions: { mode: 'scale', situation: '한 주 동안 실천표에 ○를 했어요.', feeling: '뿌듯함', ask: '나는 약속을 얼마나 지켰나요?', scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '덜 지킨 약속은 새 방법으로 다시 해 봐요.' }, target: { level: 'any' }, difficulty: 0 },
              { prompt: '짝과 실천표를 바꾸어 보고, 친구가 잘 지킨 약속을 하나 칭찬해 주세요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"덜 지킨 약속에 쓸 새 방법을 하나 정했나요?" 네댓 명이 말한다. 실천표 아래에 새 방법을 적고, 한 주 더 이어 가기로 한다. 다 지킨 학생에게는 다음 계절에도 이어 갈 약속을 하나 더하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '하준이의 실천표', data: [['문 닫기', 2], ['겉옷 챙기기', 5], ['물 마시기', 4]], unit: '일', xLabel: '약속', yLabel: '지킨 날', icons: [{ value: 1, name: '1일' }], icon: 'circle', choices: ['문 닫기', '겉옷 챙기기', '물 마시기'], question: '새 방법이 가장 필요한 약속은?' }, prompt: '하준이의 실천표를 보고 새 방법이 가장 필요한 약속을 골라 보세요.', target: { pick: 0 }, difficulty: 0.2 },
          { type: 'choice', prompt: '지키기 어려운 약속이 있을 때 알맞은 생각은?', options: ['약속을 지워요', '기억할 방법을 바꿔 다시 해요', '친구 탓을 해요'], answer: 1, difficulty: 0.1, explain: '방법을 바꾸면 어려운 약속도 습관이 될 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '실천표 돌아보기',
      items: [
        { type: 'table', prompt: '내 실천표를 보고 쓰세요.', columns: ['약속', '지킨 날 수'], rows: 3 },
        { type: 'short', prompt: '가장 잘 지킨 약속과 그 까닭을 쓰세요.' },
        { type: 'short', prompt: '덜 지킨 약속을 지킬 새 방법을 쓰세요.' },
        { type: 'draw', prompt: '새 방법으로 약속을 지키는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '○가 많은 줄이 잘 지킨 약속이에요.',
        items: [
          { type: 'table', prompt: '내 약속과 지킨 날 수를 쓰세요.', columns: ['약속', '지킨 날 수'], rows: 1 },
          { type: 'choice', prompt: '자꾸 잊는 약속은 어떻게 할까요?', options: ['그림을 붙여 기억해요', '지워 버려요'], answer: '그림을 붙여 기억해요' },
          { type: 'draw', prompt: '약속을 지키는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프에 수가 함께 보여요. 상황 고르기 보기가 두 개, 마음 눈금은 세 칸이에요.',
      base: '그래프의 동그라미를 세어 고르고 확인을 눌러요.',
      challenge: '두 약속의 지킨 날 차이, 지키지 못한 날, 모두 더한 날처럼 빼고 더해 답하는 물음이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① ○가 적으면 부끄러워 실천표를 숨긴다 → 덜 지킨 약속을 찾은 것 자체가 돌아보기라고 칭찬한다. ② \'하루만 빼고\'를 셈하지 못한다 → 닷새에서 하나를 빼면 넷이라는 것을 손가락으로 보여 준다. ③ 마음 눈금은 채점하지 않는다. 결과는 교사가 개별 상담에만 쓴다.',
  }));

  lessons.push(L(19, {
    title: '겨울을 앞두고 옷장과 사물함 정리하기',
    objective: '여름 물건을 넣어 두고 겨울 물건을 꺼내는 일을 나누고, 옷을 정리하는 차례대로 실제로 옷을 개어 정리할 수 있다.',
    illustration: ART('a child folding a short-sleeved T-shirt into a labeled box while a winter coat and knitted scarf hang ready on a hook, a classroom locker with a paper fan being taken home', '겨울맞이 정리', [
      { motif: 'house', x: 100, y: 214, color: 'peach' }, { motif: 'tree', x: 400, y: 214, color: 'cream' }], 'snow'),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"내 사물함에 아직 여름 물건이 있나요?" 부채, 물총, 얇은 모자 같은 것을 찾아보게 한다. "옷장도 마찬가지예요. 계절이 바뀌면 지난 계절 물건을 넣어 두고 다음 계절 물건을 꺼내요." 교사가 반소매 티셔츠 한 장을 들고 개는 모습을 천천히 보여 준다.',
        student: '내 사물함을 열어 지금 계절에 쓰지 않는 물건을 하나 찾아봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['옷을 펼쳐요', '반으로 접어요'], shuffle: false }, sequence: [{ order: ['옷을 펼쳐요', '반으로 접어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 넣어 둘 것, 꺼낼 것', minutes: 11, tool: 'mindmap',
            teacher: '"이 물건은 이번 겨울에 쓸까요?" 물건마다 다음 석 달 동안 쓸지 묻게 한다. 우산처럼 계절과 상관없이 늘 쓰는 물건은 그대로 둔다는 것을 짚는다. 넣어 둘 때는 깨끗이 빨아 말린 뒤 넣어야 곰팡이가 피지 않는다는 것도 덧붙인다.',
            task: '물건 카드를 넣어 둘 것과 꺼낼 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '옷장 정리 카드를 넣어 둘 것과 꺼낼 것으로 나누어 보세요.', toolOptions: { topic: '겨울맞이 옷장', slots: ['넣어 둬요', '꺼내요'], cards: ['반소매 티셔츠', '수영복', '털 스웨터', '내복'] },
                target: { sort: { '넣어 둬요': ['반소매 티셔츠', '수영복'], '꺼내요': ['털 스웨터', '내복'] } }, difficulty: 0.05 },
              { prompt: '사물함 정리 카드를 집에 보낼 것과 새로 챙길 것으로 나누어 보세요.', toolOptions: { topic: '겨울맞이 사물함', slots: ['집에 보내요', '새로 챙겨요'], cards: ['종이 부채', '물총', '무릎 담요', '여분 양말'] },
                target: { sort: { '집에 보내요': ['종이 부채', '물총'], '새로 챙겨요': ['무릎 담요', '여분 양말'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '사물함 정리 카드를 나누어 보세요. 계절과 상관없이 늘 두는 것은 카드 칸에 남겨요.', toolOptions: { cards: ['종이 부채', '물총', '무릎 담요', '여분 양말', '색연필'] } } } },
              { prompt: '여름옷을 넣어 두기 전에 꼭 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '넣기 전에', cards: ['깨끗이 빨아요', '햇볕에 바싹 말려요', '젖은 채로 바로 넣어요', '구겨진 채 던져 넣어요'] },
                target: { pick: ['깨끗이 빨아요', '햇볕에 바싹 말려요'] }, difficulty: 0.1,
                predict: { q: '젖은 옷을 상자에 넣어 두면 어떻게 될까요?', options: ['그대로예요', '곰팡이가 펴요'], answer: 1 },
                conclude: '젖은 채 넣어 두면 곰팡이와 냄새가 생겨요. 빨아서 바싹 말린 뒤 넣어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 옷 개어 정리하기', minutes: 15, tool: 'kitchen',
            teacher: '"소매를 먼저 접을까요, 반으로 먼저 접을까요?" 차례를 놓은 뒤 집에서 가져온(또는 교사가 준비한) 티셔츠를 짝과 함께 갠다. 개는 동안 "모서리를 맞추어요"라고 짚는다. 다 갠 옷은 상자에 넣고 \'여름옷\' 이름표를 붙이는 것까지 해 본다.',
            task: '옷을 개어 넣는 차례를 놓고, 실제로 티셔츠를 개어 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '반소매 티셔츠를 개는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['옷을 바닥에 펼쳐요', '양쪽 소매를 안으로 접어요', '아래에서 위로 반 접어요', '상자에 넣고 이름표를 붙여요'] },
                target: { order: ['옷을 바닥에 펼쳐요', '양쪽 소매를 안으로 접어요', '아래에서 위로 반 접어요', '상자에 넣고 이름표를 붙여요'] }, difficulty: 0.1 },
              { prompt: '짝과 함께 티셔츠 한 장을 개어 상자에 넣어 보세요. 다 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '겨울 외투를 꺼내 입기 전에 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '외투 꺼내기', items: [{ id: 'size', text: '입어 보고 작지 않은지 살펴요' }, { id: 'zip', text: '단추나 지퍼가 잘 되는지 봐요' }, { id: 'dust', text: '먼지를 털고 바람을 쐬어요' }, { id: 'tag', text: '이름표를 떼어 버려요' }] },
                target: { checklist: ['size', 'zip', 'dust'] }, difficulty: 0.15, levels: { challenge: { toolOptions: { items: [{ id: 'size', text: '입어 보고 작지 않은지 살펴요' }, { id: 'zip', text: '단추나 지퍼가 잘 되는지 봐요' }, { id: 'dust', text: '먼지를 털고 바람을 쐬어요' }, { id: 'tag', text: '이름표를 떼어 버려요' }, { id: 'heat', text: '외투를 난로 위에 걸쳐 말려요' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 사물함에서 집으로 보낼 물건을 가방에 넣었나요?" 가방 정리를 함께 확인한다. 주말에 가족과 옷장 정리를 해 보고, 해 본 일을 다음 시간에 하나씩 말하기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 물건', slots: ['넣어 둬요', '꺼내요'], cards: ['밀짚모자', '털 귀마개'] }, prompt: '겨울을 앞두고 처음 보는 카드를 나누어 보세요.', target: { sort: { '넣어 둬요': ['밀짚모자'], '꺼내요': ['털 귀마개'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '여름옷을 넣어 두기 전에 꼭 할 일은?', options: ['빨아서 말려요', '젖은 채 넣어요', '아무 데나 둬요'], answer: 0, difficulty: 0.1, explain: '빨아서 바싹 말려 넣어야 곰팡이가 피지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '겨울맞이 정리',
      items: [
        { type: 'table', prompt: '정리할 물건을 나누어 쓰세요.', columns: ['넣어 둘 것', '꺼낼 것'], rows: 3 },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '옷을 넣어 두기 전에 깨끗이 빨아 바싹 ___.', answer: '말려요' },
        { type: 'check', prompt: '주말에 가족과 해 본 일에 ✓ 하세요.', options: ['여름옷을 개어 넣었어요', '겨울옷을 꺼내 입어 봤어요', '작아진 옷을 찾았어요'] },
        { type: 'draw', prompt: '정리한 옷장이나 사물함 모습을 그리세요.' },
      ],
      easy: {
        note: '여름 물건은 넣고, 겨울 물건은 꺼내요.',
        items: [
          { type: 'choice', prompt: '겨울에 꺼낼 것에 ○ 하세요.', options: ['털 스웨터', '수영복'], answer: '털 스웨터' },
          { type: 'choice', prompt: '집에 보낼 여름 물건에 ○ 하세요.', options: ['종이 부채', '무릎 담요'], answer: '종이 부채' },
          { type: 'draw', prompt: '정리한 사물함 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 옷 개기는 짝과 한쪽씩 맡아요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '늘 두는 물건 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물건을 계절과 상관없이 모두 넣거나 모두 남긴다 → "다음 석 달 동안 쓸까?"로 가린다. ② 옷을 구겨 넣는다 → 모서리를 맞추는 한 가지만 짚어 준다. ③ 집에서 티셔츠를 못 가져온 학생을 위해 교사가 여분을 준비한다. 가정마다 옷 정리 방식이 달라도 존중한다.',
  }));

  lessons.push(L(20, {
    title: '계절 따라 바뀌는 가족의 생활 이야기 나누기',
    objective: '가족에게 들은 계절 생활 이야기를 나누고, 김장처럼 계절에 하는 가족 일을 차례대로 놓을 수 있다.',
    illustration: ART('a family working together around a big bowl of salted napa cabbages and red seasoning, a grandmother showing a child how to spread the seasoning between the leaves, jars lined up nearby', '우리 가족의 계절 생활', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 390, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 300, y: 200, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"7차시에 가족에게 물어볼 질문을 정했지요. 어떤 이야기를 들었나요?" 네댓 명이 들은 이야기를 말한다(이불 바꾸기, 김장, 보일러 점검, 성묘). 이야기마다 "그 일은 어느 계절에 하나요? 왜 그때 할까요?"를 묻는다. 집안 이야기를 말하고 싶지 않은 학생은 말하지 않아도 된다고 미리 알린다.',
        student: '가족에게 들은 계절 이야기를 하나 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['배추를 절여요', '김치통에 담아요'], shuffle: false }, sequence: [{ order: ['배추를 절여요', '김치통에 담아요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 계절에 하는 가족 일', minutes: 12, tool: 'mindmap',
            teacher: '"벼를 거두는 것은 왜 가을일까요?" 가족 일을 날씨·자연과 이어 말하게 한다. 김장은 날이 추워지기 전, 겨울 내내 먹을 김치를 담그는 일이라는 것을 알려 준다. 집마다 하는 일이 달라도 괜찮다는 것을 말한다.',
            task: '가족이 하는 일을 계절과 짝 짓고, 그 일을 하는 까닭을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '가족 일과 그 일을 하는 계절을 이어 보세요.', toolOptions: { mode: 'match', topic: '계절과 가족 일', slots: [{ id: 'spr', label: '땅이 녹는 봄' }, { id: 'sum', label: '무더운 여름' }, { id: 'aut', label: '곡식이 익는 가을' }, { id: 'win', label: '추위가 오기 전 초겨울' }], cards: ['텃밭에 씨앗을 심어요', '대나무 돗자리를 깔아요', '벼를 거두어요', '김장을 해요'] },
                target: { match: { spr: '텃밭에 씨앗을 심어요', sum: '대나무 돗자리를 깔아요', aut: '벼를 거두어요', win: '김장을 해요' } }, difficulty: 0.15 },
              { prompt: '김장을 하는 까닭으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '김장하는 까닭', cards: ['겨울 내내 먹을 김치를 마련해요', '배추가 맛있게 자란 때예요', '여름 더위를 식혀요', '물놀이를 하려고요'] },
                target: { pick: ['겨울 내내 먹을 김치를 마련해요', '배추가 맛있게 자란 때예요'] }, difficulty: 0.2, levels: { challenge: { toolOptions: { cards: ['겨울 내내 먹을 김치를 마련해요', '배추가 맛있게 자란 때예요', '여름 더위를 식혀요', '물놀이를 하려고요', '봄꽃을 보려고요'] } } } },
              { prompt: '가족에게 들은 계절 이야기를 활동지에 한 줄로 적어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 김장하는 차례', minutes: 13, tool: 'story',
            teacher: '"배추에 양념을 바로 바르면 어떻게 될까요?" 배추를 소금에 절여야 숨이 죽어 양념이 잘 밴다는 것을 알려 준다. 교사가 준비한 배춧잎 한 장을 모둠마다 나누어 만져 보게 하고, 절인 배추 사진과 견주게 한다(실제 양념은 쓰지 않는다).',
            task: '김장과 이불 바꾸기를 하는 차례대로 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '김장을 하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['배추를 소금에 절여요', '절인 배추를 씻어 물을 빼요', '배춧잎 사이에 양념을 넣어요', '김치통에 담아요'] },
                target: { order: ['배추를 소금에 절여요', '절인 배추를 씻어 물을 빼요', '배춧잎 사이에 양념을 넣어요', '김치통에 담아요'] }, difficulty: 0.15,
                hints: ['양념이 잘 배려면 배추가 먼저 어떻게 되어야 할지 떠올리고, 마지막에 무엇에 담는지 생각해요.', '양념을 넣기 전에 배추에 해야 할 일이 두 가지 있어요. 이웃한 카드를 다시 보세요.', '절이기 → 씻어 물 빼기 → 양념 넣기 → 김치통에 담기 차례예요.'],
                levels: { challenge: { prompt: '김장을 하는 차례대로 놓아 보세요. 김장과 상관없는 카드는 남겨요.', toolOptions: { slots: 4, cards: ['배추를 소금에 절여요', '절인 배추를 씻어 물을 빼요', '배춧잎 사이에 양념을 넣어요', '김치통에 담아요', '배추에 얼음을 채워요'] } } } },
              { prompt: '겨울 이불로 바꾸는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['얇은 여름 이불을 빨아요', '햇볕에 바싹 말려요', '개어서 장롱에 넣어요', '두꺼운 이불을 꺼내 깔아요'] },
                target: { order: ['얇은 여름 이불을 빨아요', '햇볕에 바싹 말려요', '개어서 장롱에 넣어요', '두꺼운 이불을 꺼내 깔아요'] }, difficulty: 0.15,
                hints: ['넣어 둘 이불을 깨끗하게 하는 일부터 떠올리고, 마지막에 새 이불을 쓰는 차례를 생각해요.', '빨기 전에 말릴 수 있을까요? 이웃한 두 카드를 다시 보세요.', '빨기 → 말리기 → 개어 넣기 → 두꺼운 이불 깔기 차례예요.'] },
              { prompt: '모둠에서 배춧잎을 만져 보고, 느낌을 한 낱말씩 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 가족의 계절 생활 가운데 내가 도울 수 있는 일은 무엇일까요?" 이불 개기, 배춧잎 나르기 같은 작은 일을 말하게 한다. 배춧잎을 만진 손은 씻게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 가족 일', slots: [{ id: 'sum', label: '무더운 여름' }, { id: 'win', label: '추운 겨울' }], cards: ['방충망을 고쳐요', '보일러를 살펴요'] }, prompt: '가족 일과 계절을 이어 보세요.', target: { match: { sum: '방충망을 고쳐요', win: '보일러를 살펴요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '김장을 날이 추워지기 전에 하는 까닭은?', options: ['겨울 내내 먹을 김치를 마련하려고', '여름에 먹으려고', '물놀이를 하려고'], answer: 0, difficulty: 0.1, explain: '김장은 겨울 동안 먹을 김치를 추위가 오기 전에 담그는 일이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 가족의 계절 생활',
      items: [
        { type: 'table', prompt: '가족에게 들은 계절 생활을 쓰세요.', columns: ['계절', '가족이 하는 일'], cells: [['봄', ''], ['여름', ''], ['가을', ''], ['겨울', '']] },
        { type: 'short', prompt: '김장할 때 배추를 먼저 소금에 절이는 까닭을 쓰세요.' },
        { type: 'short', prompt: '우리 가족의 계절 일 가운데 내가 도울 수 있는 일을 쓰세요.' },
        { type: 'draw', prompt: '가족과 함께 계절 일을 하는 모습을 그리세요.' },
      ],
      easy: {
        note: '가족은 계절마다 하는 일이 달라요.',
        items: [
          { type: 'choice', prompt: '김장은 언제 하나요?', options: ['추위가 오기 전', '한여름'], answer: '추위가 오기 전' },
          { type: 'short', prompt: '가족에게 들은 계절 이야기를 하나 쓰세요.' },
          { type: 'draw', prompt: '가족과 계절 일을 하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 김장 차례는 사진을 보며 놓아요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '김장과 상관없는 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가족 이야기를 들어 오지 못했다 → 교사가 준비한 이야기 카드 가운데 하나를 고르게 한다. ② 집마다 김장을 하지 않는다 → 김장은 예시이고, 사서 먹는 집도 있다는 것을 존중한다. ③ 가정 형편이 드러나는 이야기는 억지로 말하게 하지 않는다. 배춧잎은 날것을 만지기만 하고 먹지 않는다.',
  }));

  lessons.push(L(21, {
    title: '다음 계절 겨울에 하고 싶은 일 정해 그리기',
    objective: '겨울에 할 수 있는 일과 할 수 없는 일을 가르고, 겨울에 하고 싶은 일을 하나 정해 그림으로 나타내 소개할 수 있다.',
    illustration: ART('a child sketching a winter wish on paper at a desk, thought bubbles showing building a snowman, sledding and drinking warm citron tea with family, a window with snowflakes beside', '겨울에 무엇을 하고 싶나요?', [
      { motif: 'house', x: 100, y: 214, color: 'sky' }, { motif: 'tree', x: 400, y: 214, color: 'cream' }, { motif: 'star', x: 240, y: 70, s: 0.6 }], 'snow'),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이제 곧 겨울이에요. 지난겨울에 가장 즐거웠던 일은 무엇이었나요?" 두세 명의 경험을 듣는다. "이번 겨울에는 무엇을 해 보고 싶나요? 그런데 겨울이라서 할 수 없는 일도 있어요." 겨울에 바다에서 수영하는 그림을 보여 주며 "이건 어떨까요?" 하고 웃으며 묻는다.',
        student: '지난겨울에 즐거웠던 일을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '겨울에 해요', cards: ['눈사람 만들기', '매미 잡기'], shuffle: false }, sequence: [{ pick: ['눈사람 만들기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 겨울에 할 수 있는 일 고르기', minutes: 10, tool: 'mindmap',
            teacher: '"이 일을 하려면 무엇이 있어야 하나요? 겨울에 그것이 있을까요?" 놀이와 일에 꼭 필요한 것(눈, 얼음, 매미, 꽃)을 찾아 겨울과 견주게 한다. 실내에서 하는 일은 겨울에도 할 수 있다는 것을 짚는다.',
            task: '겨울에 할 수 있는 일만 골라 바구니에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '겨울에 할 수 있는 바깥 놀이만 골라 보세요.', toolOptions: { mode: 'pick', basket: '겨울 바깥 놀이', cards: ['눈썰매 타기', '눈 위에 발자국 찍기', '계곡 물놀이', '잠자리 잡기'] },
                target: { pick: ['눈썰매 타기', '눈 위에 발자국 찍기'] }, difficulty: 0.05 },
              { prompt: '겨울에 가족과 할 수 있는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '겨울 가족 일', cards: ['따뜻한 유자차 마시기', '새해 첫날 해돋이 보기', '수박 따기', '벚꽃 구경'] },
                target: { pick: ['따뜻한 유자차 마시기', '새해 첫날 해돋이 보기'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['따뜻한 유자차 마시기', '새해 첫날 해돋이 보기', '수박 따기', '벚꽃 구경', '해바라기 씨 심기'] } } } },
              { prompt: '하고 싶은 겨울 일과 그때 챙길 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '겨울 준비', slots: [{ id: 'snow', label: '눈사람 만들기' }, { id: 'sun', label: '새벽 해돋이 보기' }], cards: ['물이 스미지 않는 장갑', '두꺼운 외투와 담요'] },
                target: { match: { snow: '물이 스미지 않는 장갑', sun: '두꺼운 외투와 담요' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 겨울 소망 그림 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"눈 덮인 산은 어떤 모양과 색으로 만들 수 있을까요?" 콜라주 판에서 조각으로 겨울 장면을 만들고, 활동지에는 하고 싶은 일을 크레파스로 그린다. 마지막 작품은 정답이 없다. 그린 뒤 "나는 겨울에 ( )을 하고 싶어요. ( ) 때문이에요"로 짝에게 소개하게 한다.',
            task: '조각을 붙여 겨울 장면을 꾸미고, 겨울에 하고 싶은 일을 그려 소개해요.',
            levels: { easy: { shapes: ['circle', 'triangle', 'rect', 'star', 'square'], colors: ['하양', '파랑', '갈색', '초록', '노랑', '빨강'] }, base: {}, challenge: {} },
            items: [
              { prompt: '눈 덮인 산을 꾸며 보세요. 세모를 두 개 넘게, 하양 조각을 세 개 넘게 붙여요.', target: { has: [{ shape: 'triangle', min: 2 }, { color: '하양', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '눈 덮인 산을 꾸며 보세요. 세모 두 개 넘게, 하양 조각 세 개 넘게, 밤하늘에 노랑 별도 하나 붙여요.', target: { has: [{ shape: 'triangle', min: 2 }, { color: '하양', min: 3 }, { shape: 'star', color: '노랑', min: 1 }] } } } },
              { prompt: '겨울에 하고 싶은 일을 조각으로 꾸미고, 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['겨울에 할 수 있는 일을 골랐어요', '겨울 날씨가 보이게 꾸몄어요', '짝에게 하고 싶은 까닭을 말했어요'], minPieces: 4 }, difficulty: 0.1 },
              { prompt: '활동지에 겨울에 하고 싶은 일을 크레파스로 그려요. 다 그렸으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구의 겨울 소망 가운데 나도 해 보고 싶은 것이 있었나요?" 서너 명의 그림을 화면에 띄우고 소개를 듣는다. 그림은 교실 뒤 \'겨울 소망 나무\'에 붙이고, 겨울이 지나면 해 보았는지 함께 돌아보기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '겨울에 해요', cards: ['얼음판에서 팽이 돌리기', '모내기하기', '군고구마 나눠 먹기'] }, prompt: '겨울에 할 수 있는 일만 골라 보세요.', target: { pick: ['얼음판에서 팽이 돌리기', '군고구마 나눠 먹기'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '겨울에 바다 수영을 하기 어려운 까닭은?', options: ['물이 아주 차가워서', '바다가 없어져서', '수영복이 없어서'], answer: 0, difficulty: 0.1, explain: '겨울에는 바닷물이 아주 차가워 몸이 위험해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 겨울 소망',
      items: [
        { type: 'draw', wide: true, prompt: '겨울에 하고 싶은 일을 그리세요.' },
        { type: 'blank', prompt: '빈칸을 채워 소개하세요.', text: '나는 겨울에 ___을 하고 싶어요. ___ 때문이에요.' },
        { type: 'choice', prompt: '겨울에 할 수 있는 일에 ○ 하세요.', options: ['눈썰매 타기', '계곡 물놀이', '벚꽃 구경'], answer: '눈썰매 타기' },
        { type: 'short', prompt: '하고 싶은 일을 할 때 챙길 것을 쓰세요.' },
      ],
      easy: {
        note: '눈, 얼음, 따뜻한 것을 떠올려요.',
        items: [
          { type: 'draw', wide: true, prompt: '겨울에 하고 싶은 일을 그리세요.' },
          { type: 'choice', prompt: '겨울 놀이에 ○ 하세요.', options: ['눈사람 만들기', '잠자리 잡기'], answer: '눈사람 만들기' },
          { type: 'short', prompt: '그림 속 하고 싶은 일을 한 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양과 색이 줄어 고르기 쉬워요. 고르기는 맞으면 초록 테두리가 생겨요.',
      base: '조건에 맞게 조각을 붙이고 확인을 눌러요.',
      challenge: '고르지 말아야 할 카드와 조건 하나가 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 일을 계절과 상관없이 고른다(겨울 바다 수영) → 그 일에 필요한 것이 겨울에 있는지 묻는다. ② 그림 그리기를 어려워한다 → 콜라주 조각으로 먼저 장면을 만들고 따라 그리게 한다. ③ 해돋이 보기는 가정마다 어려울 수 있으니 \'창밖으로 새해 아침 하늘 보기\'처럼 바꾸어도 된다고 말해 준다.',
  }));

  lessons.push(L(22, {
    title: '사계절 생활 습관 고리 만들기',
    objective: '계절마다 하는 생활 습관을 돌고 도는 차례대로 고리에 놓고, 다음 계절에도 이어 갈 습관을 고를 수 있다.',
    illustration: ART('a round paper-cut wheel divided into four colored parts, each part showing a habit, a mask in spring dust, a water cup in summer, a jacket on a chilly autumn morning and careful steps on winter ice, with arrows going around', '돌고 도는 계절 습관', [
      { motif: 'flower', x: 70, y: 226, color: 'rose' }, { motif: 'sun', x: 170, y: 120, s: 0.5 }, { motif: 'leaf', x: 320, y: 214, color: 'peach' }, { motif: 'snow', x: 410, y: 196 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"1차시에 만든 계절 고리를 기억하나요? 계절은 돌고 돌아요. 그럼 우리가 배운 습관도 해마다 돌아올까요?" 학생들의 생각을 듣는다. "내년 봄에 황사가 오면 또 무엇을 해야 할까요?" 습관은 한 번이 아니라 해마다 다시 하는 것이라는 것을 짚는다.',
        student: '지금까지 배운 계절 습관 가운데 하나를 짝에게 말해 봐요.',
        demo: { tool: 'lifecycle', options: { center: '계절 습관', slots: 2, cards: ['물을 자주 마셔요', '빙판길을 천천히 걸어요'], shuffle: false }, sequence: [{ order: ['물을 자주 마셔요', '빙판길을 천천히 걸어요'], cyclic: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 습관 고리 놓기', minutes: 14, tool: 'lifecycle',
            teacher: '"이 습관은 어느 계절에 하는 것이었나요?" 카드마다 계절을 먼저 말하게 하고, 그다음 계절의 습관을 찾아 시계 방향으로 놓게 한다. 고리는 어느 자리에서 시작해도 차례만 맞으면 된다. 화단 돌보기 카드는 실제 학교 화단에서 한 일과 이어 말하게 한다.',
            task: '계절마다 하는 습관 카드를 계절이 바뀌는 차례대로 고리에 놓아요.',
            levels: RING_LV,
            items: [
              { prompt: '안전 습관 카드를 계절이 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '계절 안전 습관', slots: 4, cards: ['황사가 오면 마스크를 써요', '물놀이 전 준비 운동을 해요', '쌀쌀한 아침 겉옷을 챙겨요', '빙판길을 천천히 걸어요'] },
                target: { order: ['황사가 오면 마스크를 써요', '물놀이 전 준비 운동을 해요', '쌀쌀한 아침 겉옷을 챙겨요', '빙판길을 천천히 걸어요'], cyclic: true }, difficulty: 0.15,
                hints: ['카드마다 어느 계절의 일인지 먼저 떠올린 뒤, 계절이 바뀌는 차례대로 따라가요.', '이웃한 두 카드를 보세요. 앞 카드의 계절 바로 다음 계절의 습관인가요?', '황사 마스크(봄) → 물놀이 준비 운동(여름) → 겉옷 챙기기(가을) → 빙판길 천천히(겨울)예요.'] },
              { prompt: '우리 집 살림 카드를 계절이 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '우리 집 살림', slots: 4, cards: ['겨울 이불을 넣어요', '선풍기를 꺼내요', '선풍기를 넣어요', '두꺼운 이불을 꺼내요'] },
                target: { order: ['겨울 이불을 넣어요', '선풍기를 꺼내요', '선풍기를 넣어요', '두꺼운 이불을 꺼내요'], cyclic: true }, difficulty: 0.25,
                hints: ['꺼낸 물건은 언젠가 다시 넣어요. 날씨가 더워지고 추워지는 차례에 맞추어 꺼내고 넣는 일을 이어 봐요.', '선풍기를 넣은 바로 다음에 다시 선풍기를 꺼낼까요? 그 사이 계절을 생각해요.', '겨울 이불 넣기(봄) → 선풍기 꺼내기(여름) → 선풍기 넣기(가을) → 두꺼운 이불 꺼내기(겨울)예요.'],
                predict: { q: '선풍기를 넣는 계절과 꺼내는 계절은 같을까요?', options: ['같아요', '달라요'], answer: 1 },
                conclude: '더워지면 꺼내고 선선해지면 넣어요. 살림도 계절을 따라 해마다 돌고 돌아요.' },
              { prompt: '학교 화단 돌보기 카드를 계절이 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '화단 돌보기', slots: 4, cards: ['화단에 씨앗을 심어요', '마른 흙에 물을 자주 줘요', '여문 씨앗을 거두어요', '짚으로 나무 밑동을 감싸요'] },
                target: { order: ['화단에 씨앗을 심어요', '마른 흙에 물을 자주 줘요', '여문 씨앗을 거두어요', '짚으로 나무 밑동을 감싸요'], cyclic: true }, difficulty: 0.25,
                hints: ['식물이 싹 트고, 크게 자라고, 열매를 맺고, 추위를 견디는 때를 떠올려 차례대로 놓아요.', '씨앗을 거둔 바로 다음에 다시 씨앗을 심을까요? 그 사이 추운 때를 생각해요.', '씨앗 심기(봄) → 물 자주 주기(여름) → 씨앗 거두기(가을) → 짚으로 감싸기(겨울)예요.'],
                levels: { challenge: { prompt: '화단 돌보기 카드를 차례대로 고리에 놓아 보세요. 화단을 돌보는 일이 아닌 카드는 남겨요.', toolOptions: { cards: ['화단에 씨앗을 심어요', '마른 흙에 물을 자주 줘요', '여문 씨앗을 거두어요', '짚으로 나무 밑동을 감싸요', '화단에 공을 차요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다가오는 겨울에 이어 갈 습관', minutes: 12, tool: 'kitchen',
            teacher: '"지난겨울에 했던 습관을 올해도 다시 해야 할까요?" 겨울 습관 목록에서 고르게 한 뒤, 짝과 새끼손가락을 걸고 이어 갈 습관 하나를 약속한다. 어떤 습관은 계절과 상관없이 언제나 한다는 것(손 씻기)도 짚는다.',
            task: '다가오는 겨울에 이어 갈 습관에 표시하고, 짝과 약속해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '다가오는 겨울에 해야 할 습관만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '겨울 습관', items: [{ id: 'ice', text: '빙판길을 천천히 걸어요' }, { id: 'layer', text: '옷을 여러 겹 입어요' }, { id: 'fan', text: '부채를 들고 다녀요' }, { id: 'heater', text: '난로와 한 걸음 떨어져요' }] },
                target: { checklist: ['ice', 'layer', 'heater'] }, difficulty: 0.1, levels: { easy: { prompt: '다가오는 겨울에 해야 할 습관만 표시해 보세요. 겨울에 맞지 않는 것은 표시하지 않아요.', toolOptions: { items: [{ id: 'ice', text: '빙판길을 천천히 걸어요' }, { id: 'fan', text: '부채를 들고 다녀요' }, { id: 'heater', text: '난로와 한 걸음 떨어져요' }] }, target: { checklist: ['ice', 'heater'] } } } },
              { prompt: '계절과 상관없이 언제나 하는 습관만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '언제나 하는 습관', items: [{ id: 'wash', text: '밖에서 돌아오면 손을 씻어요' }, { id: 'sleep', text: '밤에 일찍 자요' }, { id: 'sled', text: '눈썰매를 타요' }, { id: 'sun', text: '햇볕을 피해 그늘에 있어요' }] },
                target: { checklist: ['wash', 'sleep'] }, difficulty: 0.2, levels: { challenge: { toolOptions: { items: [{ id: 'wash', text: '밖에서 돌아오면 손을 씻어요' }, { id: 'sleep', text: '밤에 일찍 자요' }, { id: 'sled', text: '눈썰매를 타요' }, { id: 'sun', text: '햇볕을 피해 그늘에 있어요' }, { id: 'scarf', text: '목도리를 둘러요' }] } } } },
              { prompt: '짝과 다가오는 겨울에 이어 갈 습관 하나를 정하고 새끼손가락을 걸어 약속해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내년 이맘때 우리는 또 무엇을 하고 있을까요?" 고리를 손가락으로 한 바퀴 돌며 "계절이 돌아오면 습관도 돌아와요"라고 함께 말한다. 짝과 한 약속은 실천표 아래에 적는다.',
        exitTicket: [
          { type: 'tool', tool: 'lifecycle', options: { center: '계절 옷', slots: 4, cards: ['얇은 겉옷을 걸쳐요', '반소매를 입어요', '긴소매를 꺼내 입어요', '두꺼운 외투를 입어요'] }, prompt: '봄에 얇은 겉옷을 걸치는 데서 시작해, 옷 카드를 계절 차례대로 고리에 놓아 보세요.', target: { order: ['얇은 겉옷을 걸쳐요', '반소매를 입어요', '긴소매를 꺼내 입어요', '두꺼운 외투를 입어요'], cyclic: true }, difficulty: 0.25 },
          { type: 'choice', prompt: '계절 습관을 해마다 다시 해야 하는 까닭은?', options: ['계절이 해마다 돌아와서', '선생님이 시켜서', '한 번만 하면 되어서'], answer: 0, difficulty: 0.1, explain: '계절은 돌고 돌아 해마다 다시 와요. 그래서 그 계절 습관도 다시 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절 습관 고리',
      items: [
        { type: 'table', prompt: '계절마다 하는 습관을 하나씩 쓰세요.', columns: ['봄', '여름', '가을', '겨울'], rows: 1 },
        { type: 'check', prompt: '다가오는 겨울에 할 습관에 ✓ 하세요.', options: ['옷을 여러 겹 입어요', '부채를 들고 다녀요', '빙판길을 천천히 걸어요'] },
        { type: 'short', prompt: '짝과 약속한 겨울 습관을 쓰세요.' },
        { type: 'draw', prompt: '동그라미를 네 칸으로 나누어 계절 습관 고리를 그리세요.' },
      ],
      easy: {
        note: '계절은 돌고 돌아요. 습관도 돌아와요.',
        items: [
          { type: 'choice', prompt: '겨울에 할 습관에 ○ 하세요.', options: ['빙판길 천천히 걷기', '물놀이 준비 운동'], answer: '빙판길 천천히 걷기' },
          { type: 'choice', prompt: '언제나 하는 습관에 ○ 하세요.', options: ['손 씻기', '눈썰매 타기'], answer: '손 씻기' },
          { type: 'short', prompt: '짝과 약속한 겨울 습관을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고리에 맞게 놓으면 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요. \'차례대로 따라가 보기\' 단추로 고리를 살펴볼 수 있어요.',
      challenge: '따라가 보기 단추가 없고, 화단과 상관없는 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 계절 고리가 한 해로 끝난다고 여긴다 → 고리를 두 바퀴 따라가게 한다. ② 살림 고리에서 \'넣기\'와 \'꺼내기\'를 헷갈린다 → 날씨가 더워질 때 무엇이 필요한지부터 묻는다. ③ 언제나 하는 습관과 계절 습관을 가르지 못한다 → "겨울에도 여름에도 할까?"로 묻는다. 이 교구는 원래 생물의 한살이 고리라 힌트를 문항마다 따로 썼다.',
  }));

  lessons.push(L(23, {
    title: '투표로 우리 반 겨울 생활 약속 정하기',
    objective: '막연한 약속을 언제·무엇을 하는 약속으로 고치고, 투표 결과 그림그래프를 읽어 우리 반 겨울 약속을 정할 수 있다.',
    illustration: ART('children placing round paper stickers on a voting board with three winter promises, the tallest column of stickers being circled by the teacher, a poster titled with a snowflake beside', '우리 반 겨울 약속', [
      { motif: 'snow', x: 100, y: 190 }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'star', x: 240, y: 70, s: 0.6 }], 'snow'),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'겨울에 잘 지내자\'라는 약속을 정하면 내일 무엇을 해야 할지 알 수 있을까요?" 학생 생각을 듣는다. "약속은 언제, 무엇을 할지 보여야 지킬 수 있어요. 오늘은 약속을 고치고, 투표로 우리 반 약속을 정해요." 투표는 한 사람이 붙임 딱지 하나씩이라고 알린다.',
        student: '우리 반에 꼭 필요한 겨울 약속을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '약속 고치기', slots: [{ id: 'a', label: '잘 지내자' }], cards: ['쉬는 시간마다 창문을 잠깐 열어요'], shuffle: false }, sequence: [{ match: { a: '쉬는 시간마다 창문을 잠깐 열어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 지킬 수 있는 약속으로 고치기', minutes: 12, tool: 'mindmap',
            teacher: '"\'조심하자\'를 들으면 무엇을 조심하라는 것인지 알 수 있나요?" 막연한 약속 옆에 \'언제·무엇을\'이 들어간 약속을 이어 보게 한다. 고친 약속을 소리 내어 읽고 "이건 했는지 안 했는지 알 수 있어요"를 함께 말한다.',
            task: '막연한 약속과 언제·무엇을 하는지 알 수 있는 약속을 가르고 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '언제·무엇을 하는지 알 수 있는 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '지킬 수 있는 약속', cards: ['교실에 들어오면 외투를 옷걸이에 걸어요', '복도가 젖으면 천천히 걸어요', '겨울을 잘 보내요', '모두 조심해요'] },
                target: { pick: ['교실에 들어오면 외투를 옷걸이에 걸어요', '복도가 젖으면 천천히 걸어요'] }, difficulty: 0.15 },
              { prompt: '막연한 약속을 고친 약속과 이어 보세요.', toolOptions: { mode: 'match', topic: '약속 고치기', slots: [{ id: 'warm', label: '따뜻하게 지내자' }, { id: 'clean', label: '깨끗하게 지내자' }, { id: 'safe', label: '안전하게 지내자' }], cards: ['쌀쌀한 아침에는 겉옷을 입고 와요', '바깥 놀이 뒤에는 손을 씻어요', '난로와 한 걸음 넘게 떨어져요'] },
                target: { match: { warm: '쌀쌀한 아침에는 겉옷을 입고 와요', clean: '바깥 놀이 뒤에는 손을 씻어요', safe: '난로와 한 걸음 넘게 떨어져요' } }, difficulty: 0.2,
                levels: { challenge: { prompt: '막연한 약속을 고친 약속과 이어 보세요. 아직 막연한 카드는 남겨요.', toolOptions: { cards: ['쌀쌀한 아침에는 겉옷을 입고 와요', '바깥 놀이 뒤에는 손을 씻어요', '난로와 한 걸음 넘게 떨어져요', '언제나 착하게 지내요'] } } } },
              { prompt: '모둠에서 언제·무엇을 하는지 보이는 겨울 약속 하나를 만들어 종이에 적어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 투표 결과 읽고 약속 정하기', minutes: 14, tool: 'chart',
            teacher: '모둠 약속을 칠판에 붙이고 한 사람이 붙임 딱지 하나씩 붙여 투표한다. 그다음 다른 반의 투표 결과 그래프를 함께 읽는다. "그림 하나가 한 사람이에요. 가장 많은 사람이 고른 약속은 무엇인가요?" 표가 적은 약속도 버리지 않고 다음 달 약속으로 남길 수 있다는 것을 말한다.',
            task: '투표 결과 그림그래프를 읽고 물음에 알맞은 약속을 골라요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '가 반의 투표 결과예요. 가장 많은 사람이 고른 약속은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '가 반 겨울 약속 투표', data: [['외투 걸기', 9], ['손 씻기', 12], ['창문 닫기', 5]], unit: '명', xLabel: '약속', yLabel: '고른 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['외투 걸기', '손 씻기', '창문 닫기'], question: '가장 많이 고른 약속은?' },
                target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '나 반의 투표 결과예요. 가장 적은 사람이 고른 약속은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '나 반 겨울 약속 투표', data: [['천천히 걷기', 8], ['물 마시기', 4], ['겉옷 입기', 11]], unit: '명', xLabel: '약속', yLabel: '고른 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['천천히 걷기', '물 마시기', '겉옷 입기'], question: '가장 적게 고른 약속은?' },
                target: { pick: 1 }, difficulty: 0.15 },
              { prompt: '다 반의 투표 결과예요. 손 씻기를 고른 사람은 몇 명인가요?', toolOptions: { type: 'picture', mode: 'read', title: '다 반 겨울 약속 투표', data: [['손 씻기', 7], ['난로 조심', 10], ['문 닫기', 6]], unit: '명', xLabel: '약속', yLabel: '고른 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['6명', '7명', '10명'], question: '손 씻기를 고른 사람은?' },
                target: { pick: 1 }, difficulty: 0.2, levels: { challenge: { prompt: '다 반의 투표 결과예요. 난로 조심을 고른 사람은 문 닫기를 고른 사람보다 몇 명 더 많나요?', toolOptions: { choices: ['3명', '4명', '6명'], question: '난로 조심은 문 닫기보다 몇 명 더 많을까요?' }, target: { pick: 1 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 투표에서 가장 많이 나온 약속은 무엇인가요?" 붙임 딱지를 함께 세어 정한다. 정한 약속은 모둠별로 꾸민 약속판에 적어 교실 앞에 붙인다. 표가 적었던 약속도 판 아래 \'다음 약속\' 칸에 남긴다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '라 반 겨울 약속 투표', data: [['장갑 끼기', 6], ['전등 끄기', 9], ['물걸레 청소', 3]], unit: '명', xLabel: '약속', yLabel: '고른 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['장갑 끼기', '전등 끄기', '물걸레 청소'], question: '라 반이 정할 약속은?' }, prompt: '라 반은 가장 많이 고른 약속으로 정해요. 어떤 약속을 정할까요?', target: { pick: 1 }, difficulty: 0.15 },
          { type: 'choice', prompt: '지킬 수 있는 약속은 무엇인가요?', options: ['겨울을 잘 보내요', '점심 먹기 전에 손을 씻어요', '모두 착하게 지내요'], answer: 1, difficulty: 0.15, explain: '언제(점심 먹기 전), 무엇을(손 씻기) 할지 보이면 지켰는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 겨울 약속',
      items: [
        { type: 'table', prompt: '모둠 약속과 투표 수를 쓰세요.', columns: ['약속', '고른 사람 수'], rows: 4 },
        { type: 'short', prompt: '"조심하자"를 언제·무엇을 하는 약속으로 고쳐 쓰세요.' },
        { type: 'short', prompt: '우리 반이 정한 겨울 약속을 쓰세요.' },
        { type: 'draw', prompt: '우리 반 약속을 지키는 모습을 그려 약속판을 꾸미세요.' },
      ],
      easy: {
        note: '약속에는 언제, 무엇을 넣어요.',
        items: [
          { type: 'choice', prompt: '지킬 수 있는 약속에 ○ 하세요.', options: ['밖에서 오면 손을 씻어요', '잘 지내요'], answer: '밖에서 오면 손을 씻어요' },
          { type: 'short', prompt: '우리 반이 정한 약속을 쓰세요.' },
          { type: 'draw', prompt: '약속을 지키는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프에 수가 함께 보여요. 고르기는 맞으면 초록 테두리가 생겨요.',
      base: '그래프의 그림을 세어 고르고 확인을 눌러요.',
      challenge: '아직 막연한 약속 카드가 섞여 있고, 그림 수를 세어 두 약속의 차이까지 답해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋은 말이면 다 약속이라고 여긴다 → "내일 이 약속을 지켰는지 어떻게 알 수 있을까?"로 묻는다. ② 그림그래프의 그림을 하나하나 세다가 틀린다 → 다섯 개씩 묶어 세게 한다. ③ 표가 적은 모둠이 속상해한다 → 표가 적은 약속도 다음 달 약속으로 남긴다. 투표는 붙임 딱지로 하고 누가 무엇을 골랐는지는 적지 않는다.',
  }));

  lessons.push(L(24, {
    title: '바른 생활 계절 공부 돌아보기',
    objective: '1~23차시에 배운 계절 생활 방법을 새 상황에 옮겨 쓰고, 내가 잘하게 된 것과 더 노력할 것을 스스로 돌아볼 수 있다.',
    illustration: ART('a child flipping through a small handmade book of seasonal habits, pages showing a fan, an umbrella, a jacket and mittens, with a star sticker on the cover', '나는 얼마나 자랐을까?', [
      { motif: 'star', x: 120, y: 190, s: 0.7 }, { motif: 'tree', x: 390, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 300, y: 200, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이번 단원 앞부분에서 무엇을 배웠는지 떠올려 볼까요?" 옷차림, 먹을거리, 안전, 날씨 살피기, 더위·추위, 습관을 학생들이 말하게 하고 칠판에 낱말로 적는다. "오늘은 처음 보는 상황에서도 배운 것을 쓸 수 있는지 해 보고, 나를 돌아봐요."',
        student: '이번 단원에서 배운 것 가운데 생활에서 해 본 것을 하나 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '계절 생활', slots: ['더운 날', '추운 날'], cards: ['그늘에서 쉬어요', '옷을 여러 겹 입어요'], shuffle: false }, sequence: [{ sort: { '더운 날': ['그늘에서 쉬어요'], '추운 날': ['옷을 여러 겹 입어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 새 상황에서 배운 것 쓰기', minutes: 14, tool: 'emotion',
            teacher: '"이 상황은 처음 보지만, 배운 것 가운데 무엇을 쓸 수 있을까요?" 보기를 고른 뒤 "몇 차시에서 배운 것과 비슷한가요?"라고 물어 앞의 공부와 잇게 한다. 날씨를 아침에만 보면 된다고 여기는 학생, 옷은 마음대로 입는다고 여기는 학생이 아직 있는지 이 활동에서 살핀다.',
            task: '처음 보는 상황을 읽고, 배운 계절 생활 방법을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '가을 운동회 날이에요. 서아는 어떻게 준비할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '가을 운동회 날이에요. 아침은 쌀쌀하고 낮에는 햇볕이 따갑대요.', success: '맞아요! 쌀쌀한 아침과 따가운 낮을 모두 생각해 챙겼어요.', choices: [
                { id: 'ok', text: '얇은 겉옷에 모자, 물병을 챙겨요', result: '아침에도 낮에도 알맞게 뛰어요', mood: '신남' },
                { id: 'coat', text: '두꺼운 외투만 입고 가요', result: '낮에 땀이 줄줄 나요', mood: '짜증', why: '낮에는 햇볕이 따갑대요. 낮의 날씨를 떠올려 봐요.' },
                { id: 'none', text: '아침 날씨만 보고 물병은 두고 가요', result: '낮에 목이 말라 힘들어요', mood: '걱정', why: '날씨는 하루 동안 바뀌어요. 낮도 생각해요.' }] },
                target: { choice: 'ok' }, hints: ['아침 날씨와 낮 날씨를 둘 다 짚고, 운동회에서 뛰면 몸이 어떻게 될지도 떠올려요.','고른 방법은 아침에만 맞나요, 낮에만 맞나요? 낮에 뛰고 나면 무엇이 필요할까요?','얇은 겉옷에 모자, 물병을 챙겨요. 아침엔 겉옷, 낮엔 모자와 물이 필요해요.'], difficulty: 0.15,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'ok', text: '얇은 겉옷에 모자, 물병을 챙겨요', result: '아침에도 낮에도 알맞게 뛰어요', mood: '신남' },
                  { id: 'coat', text: '두꺼운 외투만 입고 가요', result: '낮에 땀이 줄줄 나요', mood: '짜증', why: '낮에는 햇볕이 따갑대요. 낮의 날씨를 떠올려 봐요.' },
                  { id: 'none', text: '아침 날씨만 보고 물병은 두고 가요', result: '낮에 목이 말라 힘들어요', mood: '걱정', why: '날씨는 하루 동안 바뀌어요. 낮도 생각해요.' },
                  { id: 'short', text: '반소매에 모자, 물병을 챙겨요', result: '아침 줄서기 때 오들오들 떨어요', mood: '걱정', why: '아침은 쌀쌀하대요. 아침에 나설 때도 떠올려 봐요.' }] } }, easy: { toolOptions: { choices: [
                  { id: 'ok', text: '얇은 겉옷에 모자, 물병을 챙겨요', result: '아침에도 낮에도 알맞게 뛰어요', mood: '신남' },
                  { id: 'coat', text: '두꺼운 외투만 입고 가요', result: '낮에 땀이 줄줄 나요', mood: '짜증', why: '낮에는 햇볕이 따갑대요. 낮의 날씨를 떠올려 봐요.' }] } } } },
              { prompt: '눈이 온 다음 날 아침이에요. 준호는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '밤새 눈이 왔어요. 학교 앞 길이 반들반들 얼었어요.', success: '맞아요! 언 길에서는 손을 빼고 천천히 걸어야 넘어져도 덜 다쳐요.', choices: [
                { id: 'slow', text: '장갑을 끼고 손을 빼고 천천히 걸어요', result: '미끄러지지 않고 학교에 와요', mood: '편안함' },
                { id: 'slide', text: '언 길에서 미끄럼을 타며 와요', result: '넘어져 무릎을 다칠 뻔해요', mood: '무서움', why: '언 길에서 미끄럼을 타면 넘어질 수 있어요.' }] },
                target: { choice: 'slow' }, hints: ['반들반들 언 길에서 걸으면 어떤 일이 생기기 쉬운지 먼저 떠올려요.','고른 방법대로 하면 넘어질 때 손으로 몸을 짚을 수 있나요? 길에서 미끄럼을 타면 어떻게 될까요?','장갑을 끼고 손을 빼고 천천히 걸어요. 넘어져도 손으로 짚을 수 있어요.'], difficulty: 0.05,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'slow', text: '장갑을 끼고 손을 빼고 천천히 걸어요', result: '미끄러지지 않고 학교에 와요', mood: '편안함' },
                  { id: 'slide', text: '언 길에서 미끄럼을 타며 와요', result: '넘어져 무릎을 다칠 뻔해요', mood: '무서움', why: '언 길에서 미끄럼을 타면 넘어질 수 있어요.' },
                  { id: 'pocket', text: '손이 시려 주머니에 넣고 빨리 걸어요', result: '미끄러질 때 손을 짚지 못해 크게 넘어질 수 있어요', mood: '무서움', why: '언 길에서는 손을 주머니에서 빼고 천천히 걸어요.' }] } } } },
              { prompt: '여름 캠프에서 친구가 땡볕에 오래 있었어요. 하준이는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '여름 캠프에서 친구가 땡볕 아래 오래 놀다가 얼굴이 빨개졌어요.', success: '맞아요! 더위에 지친 친구는 그늘에서 쉬게 하고 어른께 알려요.', choices: [
                { id: 'shade', text: '그늘로 데려가고 선생님께 알려요', result: '친구가 쉬고 나아져요', mood: '고마움' },
                { id: 'more', text: '더 놀자고 손을 끌어요', result: '친구가 어지러워 주저앉아요', mood: '걱정', why: '더위를 먹은 친구는 먼저 쉬어야 해요.' },
                { id: 'ice', text: '얼음물을 한꺼번에 많이 마시게 해요', result: '친구 배가 아파요', mood: '속상함', why: '물은 조금씩 마셔야 해요. 먼저 그늘로 가요.' }] },
                target: { choice: 'shade' }, hints: ['얼굴이 빨개진 친구의 몸이 지금 어떤 상태일지 먼저 떠올리고, 누구의 도움이 필요한지 생각해요.','고른 방법대로 하면 친구 몸의 열이 내려갈까요? 차가운 물을 한꺼번에 많이 마시면 배가 괜찮을까요?','그늘로 데려가고 선생님께 알려요. 시원한 곳에서 쉬고, 물은 조금씩 마셔요.'], difficulty: 0.15 },
              { prompt: '처음 보는 생활 카드를 더운 날과 추운 날로 나누어 보세요.', toolOptions: { mode: 'sort', cards: ['오이 냉국을 먹어요', '털 실내화를 신어요', '방충망을 닫아요', '가습기를 켜요'], slots: ['더운 날', '추운 날'], weather: false },
                target: { sort: { '더운 날': ['오이 냉국을 먹어요', '방충망을 닫아요'], '추운 날': ['털 실내화를 신어요', '가습기를 켜요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '처음 보는 생활 카드를 더운 날과 추운 날로 나누어 보세요. 날씨와 상관없는 카드는 남겨요.', toolOptions: { cards: ['오이 냉국을 먹어요', '털 실내화를 신어요', '방충망을 닫아요', '가습기를 켜요', '밥 먹기 전에 손을 씻어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나를 돌아보기', minutes: 12, tool: 'emotion',
            teacher: '마음 눈금은 정답이 없다. "지금 내 모습을 그대로 골라요. 조금이어도 괜찮아요. 그래야 무엇을 더 할지 알 수 있어요." 고른 뒤 짝에게 \'잘하게 된 것 하나, 더 노력할 것 하나\'를 말하게 한다.',
            task: '배운 것을 생활에서 얼마나 하고 있는지 눈금으로 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '날씨를 살펴 옷과 준비물을 챙기는 일을 얼마나 하고 있나요?', toolOptions: { mode: 'scale', situation: '아침마다 하늘과 예보를 보고 옷과 준비물을 챙겨요.', feeling: '뿌듯함', ask: '나는 얼마나 하고 있나요?', after: '조금이라면 내일 아침 한 번부터 해 봐요.' }, target: { level: 'any' }, difficulty: 0 },
              { prompt: '더위와 추위를 바른 방법으로 이기는 일을 얼마나 하고 있나요?', toolOptions: { mode: 'scale', situation: '더우면 물을 조금씩 자주 마시고, 추우면 옷을 여러 겹 입어요.', feeling: '뿌듯함', ask: '나는 얼마나 하고 있나요?', after: '잘하는 것은 이어 가고, 어려운 것은 방법을 바꿔 봐요.' }, target: { level: 'any' }, difficulty: 0 },
              { prompt: '짝에게 잘하게 된 것 하나, 더 노력할 것 하나를 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"더 노력할 것 하나를 정했나요?" 실천표 아래에 적게 한다. "다음 시간부터는 계절과 생활이 어떻게 이어지는지 궁금한 것을 직접 알아보는 탐구를 해요." 단원 뒷부분을 미리 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '아침에 맑았는데 예보에 오후 소나기가 있어요.', success: '맞아요! 지금 하늘뿐 아니라 예보도 보고 챙겼어요.', choices: [{ id: 'take', text: '접는 우산을 챙겨요', result: '오후 소나기에도 젖지 않아요', mood: '편안함' }, { id: 'skip', text: '맑으니 그냥 가요', result: '오후에 흠뻑 젖어요', mood: '속상함', why: '날씨는 하루 동안 바뀌어요.' }] }, prompt: '어떻게 하면 좋을지 골라 보세요.', target: { choice: 'take' }, hints: ['지금 하늘만 볼지, 예보도 함께 볼지 생각해요.','오후에 소나기가 오면 고른 방법으로 집에 갈 때 어떻게 될까요?','접는 우산을 챙겨요. 아침이 맑아도 예보에 비가 있으면 우산이 필요해요.'], difficulty: 0.1 },
          { type: 'choice', prompt: '계절이 바뀌면 우리 생활은 어떻게 하면 좋을까요?', options: ['언제나 똑같이 지내요', '날씨에 맞게 바꾸어 지내요', '여름에만 바꾸어요'], answer: 1, difficulty: 0.1, explain: '계절과 날씨에 맞게 옷·먹을거리·습관을 바꾸면 건강하고 안전해요.' },
          { type: 'short', prompt: '이번 겨울에 꼭 지킬 계절 생활 약속 하나를 쓰세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '바른 생활 돌아보기',
      items: [
        { type: 'table', prompt: '할 수 있게 된 만큼 ○를 그리세요. (○ 1~3개)', columns: ['배운 것', '할 수 있는 만큼'], cells: [['날씨에 맞게 옷 입기', ''], ['날씨 살펴 준비물 챙기기', ''], ['더위·추위 바르게 이기기', ''], ['계절 습관 이어 가기', '']] },
        { type: 'short', prompt: '이번 단원에서 잘하게 된 것을 쓰세요.' },
        { type: 'short', prompt: '더 노력할 것을 쓰세요.' },
        { type: 'draw', prompt: '계절에 맞게 생활하는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '잘한 것 하나, 더 노력할 것 하나!',
        items: [
          { type: 'check', prompt: '할 수 있게 된 것에 ✓ 하세요.', options: ['날씨에 맞게 옷 입기', '손 씻기', '빙판길 천천히 걷기'] },
          { type: 'short', prompt: '더 노력할 것을 쓰세요.' },
          { type: 'draw', prompt: '계절에 맞게 생활하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '상황 고르기 보기가 두 개, 마음 눈금은 세 칸이에요.',
      base: '상황을 읽고 고른 뒤 확인을 눌러요.',
      challenge: '헷갈리는 보기가 하나 더 있고, 나누기에는 날씨와 상관없는 카드가 섞여 있어요. 고른 까닭을 앞 차시와 이어 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 눈금을 \'아주 많이\'로 고른다 → 실천표 기록을 다시 보게 하되, 고른 값을 고치라고 하지 않는다. ② 새 상황에서 배운 방법을 떠올리지 못한다 → 칠판의 차시 낱말을 가리키며 "어느 공부와 비슷할까?"를 묻는다. ③ 활동 1의 결과로 아직 남은 오개념(아침 날씨만 보기, 옷은 마음대로)을 찾아 25차시 이후 탐구에서 다시 다룬다. 마음 눈금은 채점하지 않는다.',
  }));

  // ───────────────────────── 25~32차시: 궁금한 것을 물음으로 만들기(탐구 질문 만들기) ─────────────────────────

  lessons.push(L(25, {
    title: '날씨 말고도 계절 따라 달라지는 것 찾기',
    objective: '계절에 따라 달라지는 것을 날씨·동물과 식물·사람의 생활로 나누고, 궁금한 것을 물음 문장으로 바꿀 수 있다.',
    illustration: ART('a big paper-cut magnifying glass held over a winter scene, inside the lens a sleeping frog under the ground, yellow ginkgo leaves and a child in a knitted hat buying roasted chestnuts', '계절은 무엇을 바꿀까?', [
      { motif: 'tree', x: 90, y: 214, color: 'buttercup' }, { motif: 'house', x: 400, y: 214, color: 'peach' }, { motif: 'leaf', x: 300, y: 200, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"계절이 바뀌면 무엇이 달라지나요?" 학생들이 말하는 것을 칠판에 적는다. 대부분 \'추워져요, 더워져요\' 같은 날씨일 것이다. "날씨만 바뀔까요? 개구리는? 우리가 먹는 것은?" 칠판의 답을 세 무리(날씨, 동물과 식물, 사람의 생활)로 나누어 다시 적으며, 계절은 날씨만 바꾸는 것이 아니라는 것을 보여 준다. "오늘부터는 궁금한 것을 직접 알아보는 탐구를 해요."',
        student: '계절이 바뀌면 달라지는 것을 날씨 말고 하나 더 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '계절이 바꾸는 것', slots: ['날씨', '동물과 식물', '사람의 생활'], cards: ['눈이 와요', '개구리가 겨울잠을 자요'], shuffle: false }, sequence: [{ sort: { '날씨': ['눈이 와요'], '동물과 식물': ['개구리가 겨울잠을 자요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 계절이 바꾸는 것 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 카드는 하늘과 공기 이야기인가요, 동물과 식물 이야기인가요, 사람이 하는 일인가요?" 기준 세 가지를 먼저 손가락으로 세며 말하게 한다. 날씨 때문에 사람이 털모자를 쓰는 것이지만, 털모자를 쓰는 것은 사람의 생활이라는 것을 짚는다.',
            task: '계절에 달라지는 것 카드를 날씨, 동물과 식물, 사람의 생활로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '겨울 카드를 세 가지로 나누어 보세요.', toolOptions: { topic: '겨울이 바꾸는 것', slots: ['날씨', '동물과 식물', '사람의 생활'], cards: ['찬 바람이 쌩쌩 불어요', '개구리가 땅속에서 겨울잠을 자요', '나뭇가지가 앙상해요', '털모자를 써요', '군밤을 사 먹어요'] },
                target: { sort: { '날씨': ['찬 바람이 쌩쌩 불어요'], '동물과 식물': ['개구리가 땅속에서 겨울잠을 자요', '나뭇가지가 앙상해요'], '사람의 생활': ['털모자를 써요', '군밤을 사 먹어요'] } }, difficulty: 0.15 },
              { prompt: '여름 카드를 세 가지로 나누어 보세요.', toolOptions: { topic: '여름이 바꾸는 것', slots: ['날씨', '동물과 식물', '사람의 생활'], cards: ['비가 오래 내려요', '매미가 맴맴 울어요', '벼가 초록으로 쑥쑥 자라요', '선풍기를 켜요'] },
                target: { sort: { '날씨': ['비가 오래 내려요'], '동물과 식물': ['매미가 맴맴 울어요', '벼가 초록으로 쑥쑥 자라요'], '사람의 생활': ['선풍기를 켜요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '여름 카드를 세 가지로 나누어 보세요. 계절과 상관없는 카드는 남겨요.', toolOptions: { cards: ['비가 오래 내려요', '매미가 맴맴 울어요', '벼가 초록으로 쑥쑥 자라요', '선풍기를 켜요', '아침마다 세수를 해요'] } } } },
              { prompt: '날씨가 아닌 달라짐만 골라 보세요.', toolOptions: { mode: 'pick', basket: '날씨 말고도', cards: ['은행잎이 노랗게 물들어요', '김장을 해요', '바람이 선선해요', '기온이 내려가요'] },
                target: { pick: ['은행잎이 노랗게 물들어요', '김장을 해요'] }, difficulty: 0.2,
                predict: { q: '계절은 날씨만 바꿀까요?', options: ['날씨만 바꿔요', '다른 것도 바꿔요'], answer: 1 },
                conclude: '계절은 날씨와 함께 동물·식물의 모습과 사람의 생활도 바꿔요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 궁금한 것을 물음으로 바꾸기', minutes: 13, tool: 'story',
            teacher: '"개구리가 겨울잠을 잔다는 것을 알았어요. 그럼 무엇이 궁금해지나요?" 궁금한 마음을 \'~까요?\'로 끝나는 물음 문장으로 바꾸게 한다. 물음 끝에는 물음표를 쓴다는 것을 칠판에 보여 준다. 마지막에 짝과 \'궁금이 공\'(종이공)을 주고받으며 물음을 하나씩 말한다.',
            task: '말풍선의 빈칸에 알맞은 말을 넣어 물음 문장을 완성해요.',
            levels: CARD_LV,
            items: [
              { prompt: '개구리에 대한 물음 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '민지', label: '개구리는 겨울에 땅속에서 어떻게 ___?' }], cards: ['지낼까요', '지냈어요'] },
                target: { fill: { f1: '지낼까요' } }, difficulty: 0.05 },
              { prompt: '은행나무에 대한 물음 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '은행잎은 가을에 ___ 색으로 바뀔까요?' }, { id: 'f2', who: '준호', label: '노란 잎은 ___ 다 떨어질까요?' }], cards: ['무슨', '누가', '언제쯤', '누구를'] },
                target: { fill: { f1: '무슨', f2: '언제쯤' } }, difficulty: 0.2, levels: { challenge: { toolOptions: { cards: ['무슨', '누가', '언제쯤', '누구를', '어디'] } } } },
              { prompt: '사람의 생활에 대한 물음 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', label: '사람들은 겨울에 따뜻한 음식을 ___ 먹을까요?' }, { id: 'f2', who: '서아', label: '옛날 아이들의 겨울 놀이는 ___ 것이었을까요?' }], cards: ['왜', '어떤', '누구가', '어디가'] },
                target: { fill: { f1: '왜', f2: '어떤' } }, difficulty: 0.2,
                levels: { easy: { prompt: '사람의 생활에 대한 물음 문장을 완성해 보세요.', toolOptions: { slots: [{ id: 'f1', who: '서아', label: '사람들은 겨울에 따뜻한 음식을 ___ 먹을까요?' }], cards: ['왜', '누구가'] }, target: { fill: { f1: '왜' } } } } },
              { prompt: '짝과 종이공을 주고받으며 계절에 대해 궁금한 것을 물음으로 하나씩 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 물음 가운데 가장 알아보고 싶은 것은 무엇인가요?" 세 명의 물음을 칠판 \'궁금이 판\'에 붙인다. 다음 시간에는 물음을 더 잘 만드는 방법을 배운다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '가을이 바꾸는 것', slots: ['날씨', '동물과 식물', '사람의 생활'], cards: ['아침 공기가 쌀쌀해요', '귀뚜라미가 울어요', '송편을 빚어요'] }, prompt: '가을 카드를 세 가지로 나누어 보세요.', target: { sort: { '날씨': ['아침 공기가 쌀쌀해요'], '동물과 식물': ['귀뚜라미가 울어요'], '사람의 생활': ['송편을 빚어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '물음 문장은 무엇인가요?', options: ['곰은 겨울에 어디서 잘까요?', '곰은 겨울에 잠을 자요.', '나는 곰이 좋아요.'], answer: 0, difficulty: 0.1, explain: '궁금한 것을 묻는 문장은 \'~까요?\'처럼 묻는 말로 끝나고 물음표를 써요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절이 바꾸는 것',
      items: [
        { type: 'table', prompt: '계절이 바꾸는 것을 하나씩 쓰세요.', columns: ['날씨', '동물과 식물', '사람의 생활'], rows: 1 },
        { type: 'blank', prompt: '빈칸을 채워 물음 문장을 만드세요.', text: '겨울에 새들은 어디서 ___?', answer: '지낼까요' },
        { type: 'short', prompt: '계절에 대해 궁금한 것을 물음 문장으로 하나 쓰세요.' },
        { type: 'draw', prompt: '내 물음과 이어지는 모습을 그리세요.' },
      ],
      easy: {
        note: '계절은 날씨, 동물과 식물, 사람의 생활을 바꿔요.',
        items: [
          { type: 'choice', prompt: '날씨가 아닌 것에 ○ 하세요.', options: ['개구리가 겨울잠을 자요', '눈이 와요'], answer: '개구리가 겨울잠을 자요' },
          { type: 'choice', prompt: '물음 문장에 ○ 하세요.', options: ['눈은 왜 하얄까요?', '눈은 하얘요.'], answer: '눈은 왜 하얄까요?' },
          { type: 'short', prompt: '궁금한 것을 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 물음 문장 빈칸은 하나만 채워요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '계절과 상관없는 카드가 섞여 있어요. 물음 끝말까지 따져 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 계절은 날씨만 달라지는 것이라고 여긴다(이 차시의 핵심 오개념) → 칠판 세 무리 나누기와 활동 1의 고르기 문항으로 바로 다룬다. ② 털모자를 날씨로 넣는다 → 털모자를 쓰는 것은 사람이 하는 일이라고 기준을 다시 말한다. ③ 물음과 대답을 섞어 쓴다 → 끝말(~까요?)과 물음표를 짚는다. 오늘 만든 궁금이 판은 32차시 탐구 계획에 다시 쓴다.',
  }));

  lessons.push(L(26, {
    title: '계절과 생활에 대한 물음 골라 다듬기',
    objective: '물음 문장과 물음이 아닌 문장을 가르고, 계절과 생활에 대한 물음만 골라 물음을 만드는 차례대로 다듬을 수 있다.',
    illustration: ART('children sticking paper speech bubbles with question marks onto a board under four small season pictures, one child reading a question aloud', '이 물음은 계절과 이어질까?', [
      { motif: 'cloud', x: 300, y: 80, s: 0.7 }, { motif: 'tree', x: 90, y: 214, color: 'mint' }, { motif: 'flower', x: 400, y: 226, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 궁금이 판에 붙인 것을 읽어 볼까요?" 판에서 물음이 아닌 문장(예: \'눈이 좋아요\')과 계절과 상관없는 물음(예: \'공룡은 몇 살까지 살았을까?\')을 하나씩 찾아 묻는다. "이것도 궁금이 판에 둘까요? 오늘은 물음을 골라 다듬어요."',
        student: '궁금이 판에서 내가 가장 알아보고 싶은 물음을 하나 골라 짝에게 읽어 줘요.',
        demo: { tool: 'mindmap', options: { topic: '물음일까?', slots: ['물음이에요', '물음이 아니에요'], cards: ['눈은 왜 하얄까요?', '오늘은 추워요.'], shuffle: false }, sequence: [{ sort: { '물음이에요': ['눈은 왜 하얄까요?'], '물음이 아니에요': ['오늘은 추워요.'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"이 문장을 읽으면 대답하고 싶어지나요?" 물음은 대답을 기다리는 문장이라는 것을 짚는다. 두 번째 문항부터는 물음이어도 계절·생활과 이어지지 않으면 이번 탐구에 넣지 않는다고 기준을 더한다.',
            task: '문장 카드를 물음과 물음이 아닌 것으로 나누고, 계절과 생활에 대한 물음만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '문장 카드를 물음과 물음이 아닌 것으로 나누어 보세요.', toolOptions: { topic: '물음일까?', slots: ['물음이에요', '물음이 아니에요'], cards: ['겨울에 새들은 어디로 갈까요?', '고드름은 왜 거꾸로 자랄까요?', '나는 눈이 좋아요.', '어제 눈썰매를 탔어요.'] },
                target: { sort: { '물음이에요': ['겨울에 새들은 어디로 갈까요?', '고드름은 왜 거꾸로 자랄까요?'], '물음이 아니에요': ['나는 눈이 좋아요.', '어제 눈썰매를 탔어요.'] } }, difficulty: 0.05 },
              { prompt: '계절과 생활에 대한 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '계절 탐구 물음', cards: ['여름에는 왜 해가 늦게 질까요?', '겨울에 사람들은 왜 김장을 할까요?', '공룡은 몇 살까지 살았을까요?', '내 연필은 몇 자루일까요?'] },
                target: { pick: ['여름에는 왜 해가 늦게 질까요?', '겨울에 사람들은 왜 김장을 할까요?'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['여름에는 왜 해가 늦게 질까요?', '겨울에 사람들은 왜 김장을 할까요?', '공룡은 몇 살까지 살았을까요?', '내 연필은 몇 자루일까요?', '나는 가을이 좋아요.'] } } } },
              { prompt: '궁금한 마음과 그 마음을 담은 물음을 이어 보세요.', toolOptions: { mode: 'match', topic: '물음으로 바꾸기', slots: [{ id: 'leaf', label: '낙엽 밟는 소리가 신기해요' }, { id: 'swallow', label: '여름에 본 제비가 요즘 안 보여요' }, { id: 'breath', label: '겨울에 입김이 하얗게 나와요' }], cards: ['낙엽은 왜 바스락거릴까요?', '제비는 가을에 어디로 갈까요?', '입김은 왜 겨울에만 하얗게 보일까요?'] },
                target: { match: { leaf: '낙엽은 왜 바스락거릴까요?', swallow: '제비는 가을에 어디로 갈까요?', breath: '입김은 왜 겨울에만 하얗게 보일까요?' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 물음 만드는 차례', minutes: 13, tool: 'story',
            teacher: '"물음은 어디에서 생길까요? 무엇을 보고 나서 궁금해지나요?" 본 것 → 궁금한 점 → 물음 문장 → 친구에게 읽어 주기 차례를 놓게 한다. 이어 모둠별로 창밖을 1분 동안 보고, 이 차례대로 물음 하나를 만들어 발표하게 한다.',
            task: '물음을 만드는 차례를 놓고, 창밖을 보며 직접 물음을 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음을 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['본 것을 말해요', '궁금한 점을 찾아요', '물음 문장으로 써요', '친구에게 읽어 줘요'] },
                target: { order: ['본 것을 말해요', '궁금한 점을 찾아요', '물음 문장으로 써요', '친구에게 읽어 줘요'] }, difficulty: 0.1,
                hints: ['물음은 무엇을 겪은 뒤에 생기는지 떠올리고, 생각을 글로 옮기는 차례를 생각해요.', '궁금한 점을 찾기 전에 물음 문장을 쓸 수 있을까요? 이웃한 두 카드를 보세요.', '본 것 말하기 → 궁금한 점 찾기 → 물음 쓰기 → 친구에게 읽어 주기 차례예요.'] },
              { prompt: '민지가 물음을 만든 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['운동장에서 얼음이 언 웅덩이를 봤어요', '물이 왜 얼었는지 궁금했어요', '"물은 왜 얼까?" 하고 썼어요', '짝에게 물음을 읽어 줬어요'] },
                target: { order: ['운동장에서 얼음이 언 웅덩이를 봤어요', '물이 왜 얼었는지 궁금했어요', '"물은 왜 얼까?" 하고 썼어요', '짝에게 물음을 읽어 줬어요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '민지가 물음을 만든 이야기를 차례대로 놓아 보세요. 이야기와 상관없는 카드는 남겨요.', toolOptions: { slots: 4, cards: ['운동장에서 얼음이 언 웅덩이를 봤어요', '물이 왜 얼었는지 궁금했어요', '"물은 왜 얼까?" 하고 썼어요', '짝에게 물음을 읽어 줬어요', '점심으로 국수를 먹었어요'] } } } },
              { prompt: '모둠별로 창밖을 1분 동안 보고, 차례대로 물음 하나를 만들어 발표해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"궁금이 판에서 이번 탐구에 넣지 않을 것은 어떤 것이었나요?" 물음이 아닌 것, 계절과 상관없는 것을 학생들이 골라 \'다음에 알아볼 것\' 칸으로 옮긴다. 다음 시간에는 우리가 직접 살펴서 알 수 있는 물음을 고른다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '계절 탐구 물음', cards: ['가을에 다람쥐는 무엇을 모을까요?', '로봇은 어떻게 움직일까요?', '봄에 개나리는 왜 먼저 필까요?'] }, prompt: '계절과 생활에 대한 물음만 골라 보세요.', target: { pick: ['가을에 다람쥐는 무엇을 모을까요?', '봄에 개나리는 왜 먼저 필까요?'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '물음을 만들기 전에 가장 먼저 할 일은?', options: ['본 것을 말해요', '물음표를 그려요', '친구에게 읽어 줘요'], answer: 0, difficulty: 0.15, explain: '본 것과 겪은 것에서 궁금한 점이 생겨요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '물음 다듬기',
      items: [
        { type: 'check', prompt: '물음 문장에 ✓ 하세요.', options: ['단풍은 왜 빨갈까요?', '단풍이 예뻐요.', '겨울에 곰은 어디서 잘까요?'] },
        { type: 'table', prompt: '물음을 만드는 차례대로 내 물음을 써 보세요.', columns: ['본 것', '궁금한 점', '물음 문장'], rows: 1 },
        { type: 'choice', prompt: '계절 탐구 물음에 ○ 하세요.', options: ['겨울에 나무는 왜 잎을 떨어뜨릴까요?', '내 신발은 몇 켤레일까요?'], answer: '겨울에 나무는 왜 잎을 떨어뜨릴까요?' },
        { type: 'draw', prompt: '오늘 창밖에서 보고 궁금했던 것을 그리세요.' },
      ],
      easy: {
        note: '물음은 \'~까요?\'로 끝나요.',
        items: [
          { type: 'choice', prompt: '물음 문장에 ○ 하세요.', options: ['단풍은 왜 빨갈까요?', '단풍이 예뻐요.'], answer: '단풍은 왜 빨갈까요?' },
          { type: 'short', prompt: '창밖에서 본 것을 쓰세요.' },
          { type: 'short', prompt: '궁금한 점을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 물음 끝에 \'~까요?\'가 있는지 살펴요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '물음이 아닌 문장, 상관없는 카드가 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물음표만 붙이면 물음이라고 여긴다 → 대답할 수 있는지, 끝말이 묻는 말인지 함께 본다. ② 계절과 상관없는 물음도 버리기 아까워한다 → \'다음에 알아볼 것\' 칸에 남겨 존중한다. ③ 창밖 보기에서 본 것을 말하지 못한다 → 하늘, 나무, 사람 옷 가운데 하나를 보라고 범위를 좁혀 준다.',
  }));

  lessons.push(L(27, {
    title: '살펴서 알아낼 수 있는 물음 고르기',
    objective: '살펴서 알아낼 수 있는 물음과 알아낼 수 없는 물음을 가르고, 막연한 물음을 살펴볼 수 있는 물음으로 고칠 수 있다.',
    illustration: ART('two paper-cut thought bubbles, one showing a child measuring how many leaves are left on a ginkgo tree with tally marks, the other showing a snowman dreaming with a question mark, the first bubble glowing', '살펴서 알 수 있을까?', [
      { motif: 'tree', x: 100, y: 214, color: 'buttercup' }, { motif: 'snow', x: 380, y: 196 }, { motif: 'cloud', x: 250, y: 76, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'눈사람은 무슨 꿈을 꿀까요?\' 이 물음의 답을 우리가 눈으로 살펴서 알아낼 수 있을까요?" 학생들의 생각을 듣는다. "재미있는 물음이지만, 살펴서 알아낼 수 없어요. 탐구는 보고, 만지고, 재고, 물어서 알아낼 수 있는 물음으로 해요." 시연 단추로 물음 두 개가 나뉘는 모습을 보여 준다.',
        student: '궁금이 판의 물음 하나를 골라, 어떻게 알아낼 수 있을지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '알아낼 수 있을까?', slots: ['살펴서 알 수 있어요', '살펴서 알 수 없어요'], cards: ['은행잎은 몇 장 남았을까요?', '눈사람은 무슨 꿈을 꿀까요?'], shuffle: false }, sequence: [{ sort: { '살펴서 알 수 있어요': ['은행잎은 몇 장 남았을까요?'], '살펴서 알 수 없어요': ['눈사람은 무슨 꿈을 꿀까요?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 살펴서 알 수 있는 물음', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음의 답을 알려면 무엇을 해야 할까요? 눈으로 볼까요, 재어 볼까요, 물어볼까요?" 방법이 떠오르면 살펴서 알 수 있는 물음이다. 상상 물음도 좋은 물음이지만 이번 탐구에는 쓰지 않는다는 것을 짚는다.',
            task: '물음 카드를 살펴서 알 수 있는 것과 알 수 없는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음 카드를 나누어 보세요.', toolOptions: { topic: '알아낼 수 있을까?', slots: ['살펴서 알 수 있어요', '살펴서 알 수 없어요'], cards: ['아침에 화단 흙이 얼어 있을까요?', '친구들은 요즘 무슨 겉옷을 입을까요?', '단풍잎은 기분이 좋을까요?', '겨울바람은 무슨 생각을 할까요?'] },
                target: { sort: { '살펴서 알 수 있어요': ['아침에 화단 흙이 얼어 있을까요?', '친구들은 요즘 무슨 겉옷을 입을까요?'], '살펴서 알 수 없어요': ['단풍잎은 기분이 좋을까요?', '겨울바람은 무슨 생각을 할까요?'] } }, difficulty: 0.1 },
              { prompt: '우리 학교에서 직접 살펴볼 수 있는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '학교에서 살펴요', cards: ['운동장 나무에 잎이 몇 장 남았을까요?', '교실 창문에 김이 서릴까요?', '남극 펭귄은 겨울에 무엇을 먹을까요?', '달나라에도 겨울이 올까요?'] },
                target: { pick: ['운동장 나무에 잎이 몇 장 남았을까요?', '교실 창문에 김이 서릴까요?'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['운동장 나무에 잎이 몇 장 남았을까요?', '교실 창문에 김이 서릴까요?', '남극 펭귄은 겨울에 무엇을 먹을까요?', '달나라에도 겨울이 올까요?', '눈송이는 무슨 노래를 좋아할까요?'] } } } },
              { prompt: '물음과 그 답을 알아낼 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 알아낼까?', slots: [{ id: 'frost', label: '아침에 화단 흙이 얼어 있을까요?' }, { id: 'coat', label: '어떤 겉옷을 많이 입을까요?' }], cards: ['아침에 화단 흙을 만져 봐요', '친구들 겉옷을 세어 봐요'] },
                target: { match: { frost: '아침에 화단 흙을 만져 봐요', coat: '친구들 겉옷을 세어 봐요' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 막연한 물음 고치기', minutes: 13, tool: 'mindmap',
            teacher: '"\'겨울은 어때요?\'라고 물으면 무엇을 살펴야 할지 알 수 있나요?" 막연한 물음에는 \'무엇을\', \'어디에서\'가 빠져 있다는 것을 짚는다. 고친 물음을 소리 내어 읽고 "이건 내일 아침에 가서 볼 수 있어요"처럼 살필 방법을 말하게 한다. 끝으로 내 궁금이 물음 하나를 짝과 함께 고쳐 쓴다.',
            task: '막연한 물음과 살펴볼 수 있게 고친 물음을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '막연한 물음을 고친 물음과 이어 보세요.', toolOptions: { mode: 'match', topic: '물음 고치기', slots: [{ id: 'win', label: '겨울은 어때요?' }, { id: 'tree', label: '나무는 어때요?' }], cards: ['겨울 아침 운동장 웅덩이는 얼까요?', '학교 은행나무 잎은 언제 다 떨어질까요?'] },
                target: { match: { win: '겨울 아침 운동장 웅덩이는 얼까요?', tree: '학교 은행나무 잎은 언제 다 떨어질까요?' } }, difficulty: 0.15 },
              { prompt: '막연한 물음을 고친 물음과 이어 보세요.', toolOptions: { mode: 'match', topic: '물음 고치기', slots: [{ id: 'food', label: '겨울 음식은 어때요?' }, { id: 'play', label: '겨울 놀이는 어때요?' }, { id: 'cloth', label: '겨울 옷은 어때요?' }], cards: ['급식에 따뜻한 국이 몇 번 나올까요?', '쉬는 시간에 운동장에 나가는 친구는 몇 명일까요?', '우리 반에 장갑을 낀 친구는 몇 명일까요?'] },
                target: { match: { food: '급식에 따뜻한 국이 몇 번 나올까요?', play: '쉬는 시간에 운동장에 나가는 친구는 몇 명일까요?', cloth: '우리 반에 장갑을 낀 친구는 몇 명일까요?' } }, difficulty: 0.2,
                levels: { challenge: { prompt: '막연한 물음을 고친 물음과 이어 보세요. 아직 막연한 카드는 남겨요.', toolOptions: { cards: ['급식에 따뜻한 국이 몇 번 나올까요?', '쉬는 시간에 운동장에 나가는 친구는 몇 명일까요?', '우리 반에 장갑을 낀 친구는 몇 명일까요?', '겨울은 재미있을까요?'] } } } },
              { prompt: '짝과 내 궁금이 물음 하나를 살펴볼 수 있는 물음으로 고쳐 써요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"고친 물음 가운데 내일 바로 살펴볼 수 있는 것은 무엇인가요?" 두세 명이 발표한다. 고친 물음은 궁금이 판의 \'탐구할 물음\' 칸에 붙인다. 상상 물음은 \'이야기 만들기\' 칸에 남겨 국어 시간에 쓰기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 물음', slots: ['살펴서 알 수 있어요', '살펴서 알 수 없어요'], cards: ['아침과 낮에 교실 온도는 다를까요?', '고드름은 외롭지 않을까요?'] }, prompt: '처음 보는 물음 카드를 나누어 보세요.', target: { sort: { '살펴서 알 수 있어요': ['아침과 낮에 교실 온도는 다를까요?'], '살펴서 알 수 없어요': ['고드름은 외롭지 않을까요?'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '살펴볼 수 있게 고친 물음은?', options: ['봄은 어때요?', '학교 화단에 새싹이 언제 나올까요?', '봄은 좋을까요?'], answer: 1, difficulty: 0.15, explain: '어디(학교 화단)에서 무엇(새싹)을 살필지 보이면 살펴볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '살펴서 알 수 있는 물음',
      items: [
        { type: 'check', prompt: '살펴서 알 수 있는 물음에 ✓ 하세요.', options: ['화단 흙이 아침에 얼까요?', '눈사람은 무슨 꿈을 꿀까요?', '우리 반은 무슨 겉옷을 입을까요?'] },
        { type: 'table', prompt: '막연한 물음을 고쳐 쓰세요.', columns: ['막연한 물음', '고친 물음'], cells: [['겨울은 어때요?', ''], ['나무는 어때요?', '']] },
        { type: 'short', prompt: '내가 고친 물음과, 답을 알아낼 방법을 쓰세요.' },
        { type: 'draw', prompt: '내 물음의 답을 알아내는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '보고, 만지고, 재고, 물어서 알 수 있나요?',
        items: [
          { type: 'choice', prompt: '살펴서 알 수 있는 물음에 ○ 하세요.', options: ['화단 흙이 얼까요?', '고드름은 외로울까요?'], answer: '화단 흙이 얼까요?' },
          { type: 'short', prompt: '내가 알아보고 싶은 물음을 쓰세요.' },
          { type: 'draw', prompt: '그 물음의 답을 알아내는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 물음마다 \'어떻게 알까?\'를 소리 내어 말해요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '상상 물음, 아직 막연한 물음 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 상상 물음을 나쁜 물음으로 여겨 속상해한다 → 이야기 만들기에 좋은 물음이라고 칭찬하고 쓰임만 다르다고 말한다. ② 남극 펭귄 물음을 책으로 알 수 있다고 한다 → 맞는 말이라고 인정하고, 이 문항은 \'우리 학교에서 직접 살펴볼 수 있는\' 물음을 묻는다고 기준을 다시 읽어 준다. ③ 막연한 물음을 고칠 때 \'어디에서, 무엇을\'을 넣게 한다.',
  }));

  lessons.push(L(28, {
    title: '물음에 맞는 알아보는 방법과 도구 고르기',
    objective: '물음마다 알맞은 알아보는 방법(살펴보기·재어 보기·여쭤보기·책 찾아보기)과 도구를 고르고, 관찰 차례를 정할 수 있다.',
    illustration: ART('a paper-cut table with a magnifying glass, a thermometer, a tape measure and a picture book, a child pointing at the thermometer while a grandmother figure smiles in a small window frame', '어떻게 알아볼까?', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 390, y: 214, color: 'buttercup' }, { motif: 'sun', x: 240, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'할머니가 어릴 때 겨울에 한 놀이는 무엇이었을까요?\' 이 답은 운동장에 나가서 찾을 수 있을까요?" 학생 생각을 듣는다. "물음마다 알아보는 방법이 달라요. 보기, 재어 보기, 여쭤보기, 책 찾아보기." 교사가 돋보기·온도계·줄자·그림책을 들어 보이며 하나씩 이름을 말한다.',
        student: '돋보기, 온도계, 줄자 가운데 써 본 것을 하나 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '알아보는 방법', slots: [{ id: 'a', label: '할머니 어릴 때 겨울 놀이는?' }], cards: ['할머니께 여쭤봐요'], shuffle: false }, sequence: [{ match: { a: '할머니께 여쭤봐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음과 방법 짝 짓기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음의 답은 누가, 어디에 갖고 있을까요?" 답이 있는 곳을 먼저 생각하면 방법이 정해진다는 것을 짚는다. 곰의 겨울잠처럼 우리가 직접 볼 수 없는 것은 책이나 영상으로 찾아본다는 것을 알려 준다.',
            task: '물음마다 알맞은 알아보는 방법과 도구를 짝 짓거나 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음과 알아보는 방법을 하나씩 이어 보세요.', toolOptions: { mode: 'match', topic: '알아보는 방법', slots: [{ id: 'grand', label: '할머니 어릴 때 겨울 놀이는 무엇일까요?' }, { id: 'temp', label: '교실은 아침과 낮에 얼마나 따뜻할까요?' }, { id: 'bud', label: '목련 가지에 겨울눈이 있을까요?' }, { id: 'bear', label: '곰은 겨울에 어디서 잠을 잘까요?' }], cards: ['할머니께 여쭤봐요', '온도계로 재어 봐요', '돋보기로 살펴봐요', '책에서 찾아봐요'] },
                target: { match: { grand: '할머니께 여쭤봐요', temp: '온도계로 재어 봐요', bud: '돋보기로 살펴봐요', bear: '책에서 찾아봐요' } }, difficulty: 0.15 },
              { prompt: '나무가 계절마다 얼마나 달라지는지 살필 때 쓸 도구만 골라 보세요.', toolOptions: { mode: 'pick', basket: '나무 관찰 도구', cards: ['돋보기', '사진기', '망치', '가위'] },
                target: { pick: ['돋보기', '사진기'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['돋보기', '사진기', '망치', '가위', '톱'] } } } },
              { prompt: '물음과 쓸 도구를 이어 보세요.', toolOptions: { mode: 'match', topic: '쓸 도구', slots: [{ id: 'shadow', label: '나무 그림자 길이는 얼마일까요?' }, { id: 'ice', label: '웅덩이 얼음 속에 무엇이 있을까요?' }], cards: ['줄자', '돋보기'] },
                target: { match: { shadow: '줄자', ice: '돋보기' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 관찰 차례 정하고 온도계 읽기', minutes: 13, tool: 'story',
            teacher: '"살펴보기 전에 무엇을 정해 두어야 할까요?" 물음 → 방법·도구 → 살피고 기록 → 알게 된 것 말하기 차례를 놓게 한다. 이어 모둠마다 교실 온도계를 보고 눈금 숫자를 읽어 활동지에 적는다. 빨간 줄 끝이 가리키는 숫자를 읽는다는 것만 짚는다.',
            task: '관찰하는 차례를 놓고, 실제로 교실 온도계를 읽어 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '관찰하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['알아볼 물음을 정해요', '방법과 도구를 정해요', '살피고 기록해요', '알게 된 것을 말해요'] },
                target: { order: ['알아볼 물음을 정해요', '방법과 도구를 정해요', '살피고 기록해요', '알게 된 것을 말해요'] }, difficulty: 0.1,
                hints: ['무엇을 알고 싶은지가 정해져야 무엇을 쓸지 정할 수 있어요. 준비, 하기, 마무리 차례로 생각해요.', '기록하기 전에 도구가 정해져 있어야 해요. 이웃한 두 카드를 보세요.', '물음 정하기 → 방법·도구 정하기 → 살피고 기록하기 → 알게 된 것 말하기 차례예요.'] },
              { prompt: '준호가 교실 온도를 알아본 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['교실이 아침에 더 추운지 궁금했어요', '온도계로 재기로 했어요', '아침과 낮에 숫자를 읽어 적었어요', '아침이 더 춥다고 발표했어요'] },
                target: { order: ['교실이 아침에 더 추운지 궁금했어요', '온도계로 재기로 했어요', '아침과 낮에 숫자를 읽어 적었어요', '아침이 더 춥다고 발표했어요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '준호가 교실 온도를 알아본 이야기를 차례대로 놓아 보세요. 이야기와 상관없는 카드는 남겨요.', toolOptions: { slots: 4, cards: ['교실이 아침에 더 추운지 궁금했어요', '온도계로 재기로 했어요', '아침과 낮에 숫자를 읽어 적었어요', '아침이 더 춥다고 발표했어요', '온도계를 흔들며 놀았어요'] } } } },
              { prompt: '모둠별로 교실 온도계의 숫자를 읽어 활동지에 적어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 물음은 어떤 방법으로 알아볼 건가요?" 궁금이 판의 물음 옆에 방법 그림 딱지(눈·자·사람·책)를 붙인다. 온도계는 유리로 된 것이 있으니 흔들거나 떨어뜨리지 않는다는 것을 다시 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 물음', slots: [{ id: 'mom', label: '엄마는 어릴 때 여름에 무엇을 먹었을까요?' }, { id: 'swal', label: '제비는 겨울에 어느 나라에 있을까요?' }], cards: ['엄마께 여쭤봐요', '책에서 찾아봐요'] }, prompt: '물음과 알아보는 방법을 이어 보세요.', target: { match: { mom: '엄마께 여쭤봐요', swal: '책에서 찾아봐요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '교실이 얼마나 따뜻한지 알아볼 때 쓰는 도구는?', options: ['온도계', '줄자', '돋보기'], answer: 0, difficulty: 0.1, explain: '따뜻하고 추운 정도는 온도계로 재어 숫자로 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어떻게 알아볼까?',
      items: [
        { type: 'table', prompt: '물음에 알맞은 방법을 쓰세요.', columns: ['물음', '방법'], cells: [['할아버지 어릴 때 겨울 놀이는?', ''], ['교실은 얼마나 따뜻할까?', ''], ['겨울눈은 어떻게 생겼을까?', '']] },
        { type: 'table', prompt: '교실 온도계를 읽어 적으세요.', columns: ['때', '온도계 숫자'], cells: [['오늘', '']] },
        { type: 'choice', prompt: '곰의 겨울잠을 알아볼 방법에 ○ 하세요.', options: ['책에서 찾아봐요', '운동장에서 찾아봐요'], answer: '책에서 찾아봐요' },
        { type: 'short', prompt: '내 물음과 알아볼 방법을 쓰세요.' },
      ],
      easy: {
        note: '보기, 재기, 여쭤보기, 책 찾기!',
        items: [
          { type: 'choice', prompt: '온도를 재는 도구에 ○ 하세요.', options: ['온도계', '가위'], answer: '온도계' },
          { type: 'choice', prompt: '할머니 어릴 때 이야기는 어떻게 알까요?', options: ['여쭤봐요', '재어 봐요'], answer: '여쭤봐요' },
          { type: 'short', prompt: '내 물음을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 방법 카드에 그림 딱지가 함께 있어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '쓰지 않는 도구, 이야기와 상관없는 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 가지 방법(눈으로 보기)만 떠올린다 → 답이 \'누구에게, 어디에\' 있는지 먼저 묻는다. ② 온도계 눈금 읽기를 어려워한다 → 2학년은 빨간 줄 끝의 큰 숫자만 읽게 하고 교사가 돕는다. ③ 겨울눈은 겨울에 생기는 \'눈(snow)\'으로 오해할 수 있으니, 나무가 봄에 틔울 싹을 감싼 것이라고 실물로 보여 준다.',
  }));

  lessons.push(L(29, {
    title: '내 나무 정하고 계절마다 살필 것 정하기',
    objective: '같은 나무를 계절마다 살필 때 달라지는 것과 잘 달라지지 않는 것을 가르고, 달마다 어느 계절인지 짝 지어 관찰 날짜를 정할 수 있다.',
    illustration: ART('a child tying a small paper name tag on a ginkgo tree in the schoolyard, a notebook open with four empty boxes labeled with tiny season pictures', '내 나무를 정해요', [
      { motif: 'tree', x: 200, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 260, y: 196, color: 'buttercup' }, { motif: 'bird', x: 380, y: 90 }]),
    safety: ['내 나무를 고를 때는 학교 안, 선생님이 보이는 곳의 나무만 골라요.', '이름표 끈은 가지를 조이지 않게 느슨하게 묶어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"17차시에 걸었던 학교 둘레의 나무 가운데 가장 마음에 드는 나무는 무엇이었나요?" 오늘은 모둠마다 \'내 나무\'를 하나 정해 겨울과 봄까지 계속 살필 것이라고 알린다. "같은 나무를 계속 보면 무엇을 알 수 있을까요?" 한 번만 보아서는 달라지는 것을 알 수 없다는 생각을 끌어낸다.',
        student: '학교에서 가장 마음에 드는 나무 한 그루를 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '내 나무', slots: ['계절마다 달라져요', '잘 달라지지 않아요'], cards: ['잎의 색', '서 있는 곳'], shuffle: false }, sequence: [{ sort: { '계절마다 달라져요': ['잎의 색'], '잘 달라지지 않아요': ['서 있는 곳'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 무엇을 살필까?', minutes: 12, tool: 'mindmap',
            teacher: '"나무가 서 있는 곳이 봄과 겨울에 바뀔까요?" 계절마다 달라져서 살필 가치가 있는 것을 고르게 한다. 줄기 굵기는 해마다 아주 조금씩 자라서 한 해 동안 눈으로는 거의 보이지 않는다는 것을 짚는다. 기록에는 날짜와 날씨를 꼭 함께 적어야 나중에 견줄 수 있다는 것도 알려 준다.',
            task: '나무에서 살필 것을 계절마다 달라지는 것과 잘 달라지지 않는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '나무에서 살필 것을 나누어 보세요.', toolOptions: { topic: '내 나무', slots: ['계절마다 달라져요', '잘 달라지지 않아요'], cards: ['잎의 색', '달린 잎의 수', '나무가 서 있는 곳', '나무의 이름'] },
                target: { sort: { '계절마다 달라져요': ['잎의 색', '달린 잎의 수'], '잘 달라지지 않아요': ['나무가 서 있는 곳', '나무의 이름'] } }, difficulty: 0.05 },
              { prompt: '나무에서 살필 것을 나누어 보세요.', toolOptions: { topic: '내 나무', slots: ['계절마다 달라져요', '잘 달라지지 않아요'], cards: ['열매가 달렸는지', '나무에 찾아오는 곤충', '가지가 뻗은 방향', '나무 옆 의자'] },
                target: { sort: { '계절마다 달라져요': ['열매가 달렸는지', '나무에 찾아오는 곤충'], '잘 달라지지 않아요': ['가지가 뻗은 방향', '나무 옆 의자'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '나무에서 살필 것을 나누어 보세요. 나무를 살피는 것과 상관없는 카드는 남겨요.', toolOptions: { cards: ['열매가 달렸는지', '나무에 찾아오는 곤충', '가지가 뻗은 방향', '나무 옆 의자', '오늘 급식 반찬'] } } } },
              { prompt: '관찰 기록에 꼭 함께 적을 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '기록에 적어요', cards: ['살핀 날짜', '그날 날씨', '내가 좋아하는 색', '어제 본 만화'] },
                target: { pick: ['살핀 날짜', '그날 날씨'] }, difficulty: 0.15,
                predict: { q: '날짜를 적지 않으면 어떻게 될까요?', options: ['상관없어요', '언제 본 모습인지 몰라요'], answer: 1 },
                conclude: '날짜와 날씨를 적어야 나중에 계절마다 본 모습을 차례대로 견줄 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 언제 살필까?', minutes: 14, tool: 'timeline',
            teacher: '"10월은 어느 계절일까요? 1월은요?" 우리나라에서 보통 봄은 3~5월, 여름은 6~8월, 가을은 9~11월, 겨울은 12~2월이라고 알려 준다. 달력을 함께 보며 관찰할 달을 정한다. 마지막으로 모둠별로 나가 내 나무에 이름표를 묶고 첫 관찰 그림을 그린다.',
            task: '달 카드를 알맞은 계절에 나누고, 모둠의 내 나무에 이름표를 묶어 첫 관찰을 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '달 카드를 알맞은 계절에 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['봄', '겨울'], slots: ['봄', '여름', '가을', '겨울'], cards: ['4월', '7월', '10월', '1월'] },
                target: { sort: { '봄': ['4월'], '여름': ['7월'], '가을': ['10월'], '겨울': ['1월'] } }, difficulty: 0.1, levels: { challenge: { prompt: '달 카드를 알맞은 계절에 나누어 보세요. 6월과 9월 카드도 어느 계절에 가까운지 생각해요.', toolOptions: { cards: ['4월', '7월', '10월', '1월', '6월', '9월'] }, target: { sort: { '봄': ['4월'], '여름': ['7월', '6월'], '가을': ['10월', '9월'], '겨울': ['1월'] } } } },
                hints: ['달력에서 꽃이 피는 달, 물놀이하는 달, 단풍 드는 달, 눈 오는 달을 떠올려 나누어요.', '흔들리는 카드의 달에 무슨 일이 있었는지 떠올려 보세요. 그때 날씨는 어땠나요?', '봄 3~5월, 여름 6~8월, 가을 9~11월, 겨울 12~2월이에요.'] },
              { prompt: '달 카드를 알맞은 계절에 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['봄', '겨울'], slots: ['봄', '여름', '가을', '겨울'], cards: ['5월', '8월', '11월', '2월', '3월', '12월'] },
                target: { sort: { '봄': ['5월', '3월'], '여름': ['8월'], '가을': ['11월'], '겨울': ['2월', '12월'] } }, difficulty: 0.25,
                hints: ['한 계절에는 세 달이 있어요. 봄이 시작되는 달부터 차례로 세어 나누어요.', '흔들리는 카드의 달 앞뒤 달은 어느 계절이었는지 떠올려 보세요.', '봄 3~5월, 여름 6~8월, 가을 9~11월, 겨울 12~2월이에요. 12월부터 겨울이 시작돼요.'] },
              { prompt: '모둠별로 내 나무에 이름표를 묶고, 오늘의 나무를 활동지에 그려요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠은 다음에 언제 내 나무를 보러 갈까요?" 12월(겨울)과 3월(봄)에 한 번씩 더 보러 가기로 달력에 표시한다. 오늘 그린 그림은 관찰 기록장 첫 장에 붙이고, 33차시에 다시 꺼내 본다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'sort', axis: ['봄', '겨울'], slots: ['봄', '여름', '가을', '겨울'], cards: ['6월', '9월'] }, prompt: '두 달 카드를 알맞은 계절에 넣어 보세요.', target: { sort: { '여름': ['6월'], '가을': ['9월'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '같은 나무를 여러 계절 동안 살피는 까닭은?', options: ['계절마다 달라지는 모습을 견주려고', '나무 이름을 외우려고', '한 번 보면 다 알 수 있어서'], answer: 0, difficulty: 0.1, explain: '한 번만 보면 달라지는 것을 알 수 없어요. 여러 번 보아야 견줄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 나무 관찰 계획',
      items: [
        { type: 'table', prompt: '내 나무 관찰 계획을 쓰세요.', columns: ['나무 이름', '서 있는 곳', '살필 것'], rows: 1 },
        { type: 'table', prompt: '관찰할 날짜와 계절을 쓰세요.', columns: ['날짜', '계절', '날씨'], rows: 3 },
        { type: 'choice', prompt: '1월은 어느 계절인가요?', options: ['봄', '여름', '가을', '겨울'], answer: '겨울' },
        { type: 'draw', prompt: '오늘 본 내 나무를 그리세요.' },
      ],
      easy: {
        note: '봄 3~5월, 여름 6~8월, 가을 9~11월, 겨울 12~2월.',
        items: [
          { type: 'short', prompt: '내 나무 이름을 쓰세요.' },
          { type: 'choice', prompt: '계절마다 달라지는 것에 ○ 하세요.', options: ['잎의 색', '나무가 서 있는 곳'], answer: '잎의 색' },
          { type: 'draw', prompt: '오늘 본 내 나무를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 달력을 보며 나누어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '달 카드가 여섯 장이고, 나무와 상관없는 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 12월을 가을로, 3월을 겨울로 여긴다 → 이 단원에서는 보통의 나눔(봄 3~5월 …)을 쓰고, 날씨는 해마다 조금씩 다를 수 있다고 덧붙인다. ② 줄기 굵기를 달라지는 것으로 넣는다 → 한 해에는 눈으로 거의 보이지 않는다는 것을 짚는다. ③ 나무 이름을 모르면 교사가 알려 주고 이름표에 함께 적는다. 이 timeline 문항은 시간 축이 아니라 계절 칸 나누기로 쓰므로 힌트를 문항에 따로 썼다.',
  }));

  lessons.push(L(30, {
    title: '동물은 계절마다 어떻게 지낼까 물음 만들기',
    objective: '겨울잠을 자는 동물과 겨울에도 깨어 있는 동물, 철새가 오고 가는 때를 알고, 동물의 계절 생활에 대한 물음을 만들 수 있다.',
    illustration: ART('a paper-cut cross-section of winter ground with a frog and a bear sleeping in burrows, sparrows hopping on a snowy branch above, and wild geese flying in a V shape across the sky', '동물은 겨울에 어떻게 지낼까?', [
      { motif: 'bird', x: 120, y: 70 }, { motif: 'bird', x: 160, y: 84 }, { motif: 'tree', x: 380, y: 214, color: 'cream' }], 'snow'),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"여름에 연못에서 개굴개굴 울던 개구리는 지금 어디 있을까요?" 학생들 생각을 듣는다. "우리는 추우면 옷을 껴입어요. 동물들은 추운 겨울을 어떻게 견딜까요?" 동물의 계절 생활도 탐구 물음이 될 수 있다는 것을 알린다. 시연 단추로 동물 카드가 나뉘는 모습을 보여 준다.',
        student: '겨울에 본 동물을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '겨울의 동물', slots: ['겨울잠을 자요', '겨울에도 깨어 있어요'], cards: ['개구리', '참새'], shuffle: false }, sequence: [{ sort: { '겨울잠을 자요': ['개구리'], '겨울에도 깨어 있어요': ['참새'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 동물의 겨울나기', minutes: 13, tool: 'mindmap',
            teacher: '"참새와 까치는 겨울에도 학교 둘레에서 볼 수 있어요. 개구리와 곰은요?" 겨울잠은 먹이가 없는 추운 때를 견디는 방법이라는 것을 짚는다. 제비는 봄에 와서 여름을 나고 가을에 따뜻한 남쪽으로 떠나고, 기러기는 가을에 와서 겨울을 나고 봄에 북쪽으로 떠난다는 것을 지도 그림으로 보여 준다.',
            task: '동물 카드를 겨울나기 방법에 따라 나누고, 철새가 오고 가는 때를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '동물 카드를 겨울나기 방법에 따라 나누어 보세요.', toolOptions: { topic: '겨울의 동물', slots: ['겨울잠을 자요', '겨울에도 깨어 있어요'], cards: ['곰', '뱀', '까치', '참새'] },
                target: { sort: { '겨울잠을 자요': ['곰', '뱀'], '겨울에도 깨어 있어요': ['까치', '참새'] } }, difficulty: 0.15 },
              { prompt: '철새와 그 새가 우리나라에 머무는 때를 이어 보세요.', toolOptions: { mode: 'match', topic: '철새', slots: [{ id: 'sw', label: '봄에 와서 여름을 나고 가을에 떠나요' }, { id: 'gs', label: '가을에 와서 겨울을 나고 봄에 떠나요' }], cards: ['제비', '기러기'] },
                target: { match: { sw: '제비', gs: '기러기' } }, difficulty: 0.25,
                predict: { q: '제비는 왜 가을에 남쪽으로 떠날까요?', options: ['따뜻한 곳을 찾아서', '놀고 싶어서'], answer: 0 },
                conclude: '날이 추워지면 먹이가 줄어요. 철새는 먹이가 있는 따뜻한 곳을 찾아 오고 가요.' },
              { prompt: '동물의 계절 생활을 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '동물 탐구 물음', cards: ['개구리는 언제 겨울잠에서 깰까요?', '다람쥐는 가을에 왜 도토리를 모을까요?', '개구리는 초록색이에요.', '로봇 강아지는 밥을 먹을까요?'] },
                target: { pick: ['개구리는 언제 겨울잠에서 깰까요?', '다람쥐는 가을에 왜 도토리를 모을까요?'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['개구리는 언제 겨울잠에서 깰까요?', '다람쥐는 가을에 왜 도토리를 모을까요?', '개구리는 초록색이에요.', '로봇 강아지는 밥을 먹을까요?', '곰은 겨울잠을 자요.'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 동물 물음 만들고 몸으로 흉내 내기', minutes: 13, tool: 'story',
            teacher: '"곰이 겨울잠을 잔다는 것을 알았어요. 그럼 무엇이 더 궁금해지나요?" 말풍선의 빈칸을 채워 물음을 만든다. 이어 모둠마다 동물 하나를 골라 겨울나기를 몸으로 흉내 내고(웅크려 잠자기, 날개 펴고 날아가기), 다른 모둠이 어떤 동물인지 맞힌다.',
            task: '말풍선 빈칸을 채워 동물에 대한 물음을 만들고, 겨울나기를 몸으로 흉내 내요.',
            levels: CARD_LV,
            items: [
              { prompt: '곰에 대한 물음 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '하준', label: '곰은 겨울잠을 자기 전에 ___ 많이 먹을까요?' }, { id: 'f2', who: '하준', label: '곰은 봄이 온 것을 ___ 알까요?' }], cards: ['왜', '어떻게', '누구가', '어디를'] },
                target: { fill: { f1: '왜', f2: '어떻게' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['왜', '어떻게', '누구가', '어디를', '무엇이'] } }, easy: { prompt: '곰에 대한 물음 문장을 완성해 보세요.', toolOptions: { slots: [{ id: 'f1', who: '하준', label: '곰은 겨울잠을 자기 전에 ___ 많이 먹을까요?' }], cards: ['왜', '누구가'] }, target: { fill: { f1: '왜' } } } } },
              { prompt: '기러기에 대한 물음 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', label: '기러기는 겨울을 나고 ___ 떠날까요?' }], cards: ['어디로', '무엇을'] },
                target: { fill: { f1: '어디로' } }, difficulty: 0.1 },
              { prompt: '모둠별로 동물 하나의 겨울나기를 몸으로 흉내 내고, 다른 모둠이 맞혀요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 동물 물음은 어떤 방법으로 알아볼 수 있을까요?" 28차시에 배운 방법(살펴보기·책 찾아보기)을 떠올려 말하게 한다. 학교 둘레에서 겨울에도 볼 수 있는 새(참새·까치·비둘기)를 쉬는 시간에 찾아보기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '새 동물', slots: ['겨울잠을 자요', '겨울에도 깨어 있어요'], cards: ['다람쥐', '비둘기'] }, prompt: '동물 카드를 겨울나기 방법에 따라 나누어 보세요.', target: { sort: { '겨울잠을 자요': ['다람쥐'], '겨울에도 깨어 있어요': ['비둘기'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '개구리가 겨울잠을 자는 까닭으로 알맞은 것은?', options: ['추워서 먹이를 찾기 어려워서', '밤이 길어 졸려서', '여름에 너무 많이 놀아서'], answer: 0, difficulty: 0.15, explain: '겨울에는 먹이가 적고 몸이 차가워져요. 개구리는 땅속에서 잠을 자며 봄을 기다려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '동물의 계절 생활',
      items: [
        { type: 'table', prompt: '동물을 나누어 쓰세요.', columns: ['겨울잠을 자요', '겨울에도 깨어 있어요', '오고 가는 철새'], rows: 2 },
        { type: 'choice', prompt: '봄에 와서 가을에 떠나는 새에 ○ 하세요.', options: ['제비', '참새', '까치'], answer: '제비' },
        { type: 'short', prompt: '동물의 계절 생활에 대해 궁금한 것을 물음 문장으로 쓰세요.' },
        { type: 'draw', prompt: '겨울잠을 자는 동물의 모습을 그리세요.' },
      ],
      easy: {
        note: '개구리·곰은 겨울잠, 참새·까치는 겨울에도 깨어 있어요.',
        items: [
          { type: 'choice', prompt: '겨울잠을 자는 동물에 ○ 하세요.', options: ['개구리', '참새'], answer: '개구리' },
          { type: 'short', prompt: '동물에 대해 궁금한 것을 쓰세요.' },
          { type: 'draw', prompt: '겨울잠을 자는 동물을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 물음 빈칸은 하나만 채워요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '물음이 아닌 문장 카드가 하나 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 동물이 겨울잠을 잔다고 여긴다 → 학교 둘레의 참새·까치를 쉬는 시간에 직접 찾아보게 한다. ② 철새가 오고 가는 때를 헷갈린다 → 제비는 \'여름 철새\', 기러기는 \'겨울 철새\'라는 말과 지도 그림을 함께 보여 준다. ③ 다람쥐의 겨울잠은 깊이 자다가 가끔 깨어 모아 둔 먹이를 먹는다는 것도 덧붙여, 더 궁금한 물음으로 잇는다.',
  }));

  lessons.push(L(31, {
    title: '계절마다 논에서 하는 일 알아보기',
    objective: '벼농사에서 계절마다 하는 일을 차례대로 놓고, 우리가 먹는 쌀과 계절의 이어짐에 대해 물음을 만들 수 있다.',
    illustration: ART('a paper-cut rice paddy shown in four strips, young seedlings being planted in spring water, tall green rice in summer, golden rice being harvested in autumn, and quiet bare fields with straw bundles in winter', '논은 계절마다 바빠요', [
      { motif: 'mountain', x: 400, y: 214, s: 0.8 }, { motif: 'sun', x: 100, y: 80, s: 0.5 }, { motif: 'bird', x: 260, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"점심에 먹은 밥은 무엇으로 만들었나요? 쌀은 어디에서 자랄까요?" 교사가 준비한 볍씨·벼 이삭·쌀을 차례로 보여 주고 모둠마다 만져 보게 한다. "볍씨가 쌀이 되기까지 논에서는 계절마다 하는 일이 달라요."',
        student: '볍씨, 벼 이삭, 쌀을 만져 보고 다른 점을 하나 짝에게 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], cards: ['모를 심어요', '벼를 베어요'], shuffle: false }, sequence: [{ order: ['모를 심어요', '벼를 베어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 벼농사의 차례', minutes: 13, tool: 'timeline',
            teacher: '"벼가 누렇게 익는 때는 언제일까요? 모를 심으려면 논에 무엇이 있어야 할까요?" 계절마다의 날씨와 일을 이어 말하게 한다. 봄에는 모를 기르고 심으며, 여름에는 물을 대고 풀을 뽑고, 가을에는 거두고, 겨울에는 논을 쉬게 한다는 것을 그림으로 정리한다.',
            task: '벼농사의 일을 차례대로 놓고, 계절과 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '볍씨가 쌀이 되기까지의 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['봄', '가을'], cards: ['볍씨를 뿌려 모를 길러요', '논에 모를 심어요', '논에 물을 대고 풀을 뽑아요', '누렇게 익은 벼를 베어요'] },
                target: { order: ['볍씨를 뿌려 모를 길러요', '논에 모를 심어요', '논에 물을 대고 풀을 뽑아요', '누렇게 익은 벼를 베어요'] }, difficulty: 0.15 },
              { prompt: '논의 모습과 계절을 이어 보세요.', toolOptions: { mode: 'match', axis: ['봄', '겨울'], slots: [{ id: 'spr', label: '봄' }, { id: 'sum', label: '여름' }, { id: 'aut', label: '가을' }, { id: 'win', label: '겨울' }], cards: ['물 댄 논에 어린 모가 줄지어 있어요', '키 큰 초록 벼가 빽빽해요', '누런 벼 이삭이 고개를 숙여요', '벼를 벤 논에 짚더미가 있어요'] },
                target: { match: { spr: '물 댄 논에 어린 모가 줄지어 있어요', sum: '키 큰 초록 벼가 빽빽해요', aut: '누런 벼 이삭이 고개를 숙여요', win: '벼를 벤 논에 짚더미가 있어요' } }, difficulty: 0.2,
                predict: { q: '벼 이삭은 왜 가을에 고개를 숙일까요?', options: ['낟알이 여물어 무거워서', '추워서 졸려서'], answer: 0 },
                conclude: '여름 햇볕을 받고 자란 벼는 가을에 낟알이 여물어 무거워져 고개를 숙여요.' },
              { prompt: '쌀에서 밥이 되기까지의 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['먼저', '나중'], cards: ['벼를 말려 낟알을 털어요', '껍질을 벗겨 쌀을 만들어요', '쌀을 씻어 밥을 지어요'] },
                target: { order: ['벼를 말려 낟알을 털어요', '껍질을 벗겨 쌀을 만들어요', '쌀을 씻어 밥을 지어요'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '쌀에서 밥이 되기까지의 일을 차례대로 놓아 보세요. 상관없는 카드는 남겨요.', toolOptions: { slots: 3, cards: ['벼를 말려 낟알을 털어요', '껍질을 벗겨 쌀을 만들어요', '쌀을 씻어 밥을 지어요', '쌀을 얼음에 얼려요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 논과 우리 생활 물음 만들기', minutes: 13, tool: 'mindmap',
            teacher: '"가을에 벼를 거두는 것과 우리 밥상은 어떻게 이어질까요?" 가을에 거둔 햅쌀로 추석 송편을 빚는다는 것처럼 계절과 생활이 이어지는 예를 말해 준다. 끝으로 모둠마다 쌀 한 숟가락을 흰 종이에 펼쳐 놓고 돋보기로 낟알 모양을 살펴본다.',
            task: '논과 우리 생활이 이어지는 물음을 골라 이어 보고, 쌀알을 살펴봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '논에서 하는 일과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그때 할까?', slots: [{ id: 'plant', label: '봄에 모를 심어요' }, { id: 'cut', label: '가을에 벼를 베어요' }], cards: ['날이 따뜻해져 모가 잘 자라서', '벼가 다 여물어서'] },
                target: { match: { plant: '날이 따뜻해져 모가 잘 자라서', cut: '벼가 다 여물어서' } }, difficulty: 0.15 },
              { prompt: '계절과 쌀·밥상이 이어지는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '계절과 밥상 물음', cards: ['추석에 왜 햅쌀로 송편을 빚을까요?', '겨울에는 논에서 무엇을 할까요?', '벼는 무슨 색 모자를 좋아할까요?', '쌀은 하얀색이에요.'] },
                target: { pick: ['추석에 왜 햅쌀로 송편을 빚을까요?', '겨울에는 논에서 무엇을 할까요?'] }, difficulty: 0.2, levels: { challenge: { toolOptions: { cards: ['추석에 왜 햅쌀로 송편을 빚을까요?', '겨울에는 논에서 무엇을 할까요?', '벼는 무슨 색 모자를 좋아할까요?', '쌀은 하얀색이에요.', '논에는 물이 있어요.'] } } } },
              { prompt: '모둠에서 쌀알을 흰 종이에 펼쳐 돋보기로 살피고, 본 모양을 하나씩 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 물음은 누구에게 여쭤보면 좋을까요?" 농사를 짓는 가족·이웃, 책, 마을 도서관을 말하게 한다. 쌀알은 모아서 교실 화분 옆 새 모이통에 넣는다(먹지 않는다).',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['먼저', '나중'], cards: ['논에 모를 심어요', '논의 풀을 뽑아요', '벼를 거두어요'] }, prompt: '논에서 하는 일을 차례대로 놓아 보세요.', target: { order: ['논에 모를 심어요', '논의 풀을 뽑아요', '벼를 거두어요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '벼를 거두는 계절은?', options: ['봄', '여름', '가을'], answer: 2, difficulty: 0.1, explain: '여름 햇볕에 자란 벼는 가을에 누렇게 여물어 거두어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절마다 논에서',
      items: [
        { type: 'table', prompt: '계절마다 논에서 하는 일을 쓰세요.', columns: ['봄', '여름', '가을', '겨울'], rows: 1 },
        { type: 'choice', prompt: '가을 논의 모습에 ○ 하세요.', options: ['누런 벼 이삭이 고개를 숙여요', '어린 모가 줄지어 있어요', '짚더미만 있어요'], answer: '누런 벼 이삭이 고개를 숙여요' },
        { type: 'short', prompt: '논과 우리 밥상에 대해 궁금한 것을 물음 문장으로 쓰세요.' },
        { type: 'draw', prompt: '돋보기로 본 쌀알을 크게 그리세요.' },
      ],
      easy: {
        note: '봄에 심고, 여름에 키우고, 가을에 거둬요.',
        items: [
          { type: 'choice', prompt: '벼를 거두는 계절에 ○ 하세요.', options: ['가을', '봄'], answer: '가을' },
          { type: 'choice', prompt: '모를 심는 계절에 ○ 하세요.', options: ['봄', '겨울'], answer: '봄' },
          { type: 'draw', prompt: '돋보기로 본 쌀알을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 볍씨·벼·쌀 실물을 옆에 두고 놓아요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '상관없는 카드가 섞여 있고, 계절과 논의 모습을 네 짝 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쌀이 가게에서 나는 것이라고 여긴다 → 볍씨·벼 이삭·쌀 실물을 차례로 만져 보게 한다. ② 모내기를 여름 일로 안다 → 늦봄(5~6월)에 많이 한다고 알려 주고, 이 단원에서는 봄으로 다룬다. ③ 겨울 논은 하는 일이 없다고 여긴다 → 논을 쉬게 하고 다음 해를 준비하는 때라고 말해 준다. 쌀알은 먹지 않는다.',
  }));

  lessons.push(L(32, {
    title: '나의 계절 탐구 계획서 쓰기',
    objective: '궁금이 물음 하나를 골라 살필 곳·방법·기록할 것을 정해 탐구 계획서를 쓰고, 좋은 계획의 조건을 고를 수 있다.',
    illustration: ART('a child writing a one-page plan on a clipboard with four boxes, a question mark balloon, a magnifying glass, a calendar and a small tree drawing, friends looking over the plan', '나의 탐구 계획', [
      { motif: 'tree', x: 400, y: 214, color: 'buttercup' }, { motif: 'star', x: 100, y: 190, s: 0.6 }, { motif: 'cloud', x: 300, y: 76, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"25차시부터 물음을 만들고, 고치고, 알아볼 방법을 정했어요. 오늘은 그것을 모아 탐구 계획서를 써요." 칠판에 계획서 네 칸(물음, 살필 곳, 방법, 기록할 것)을 그린다. 교사가 먼저 \'운동장 웅덩이는 언제 얼까요?\'로 한 장을 채워 보이며 칸마다 무엇을 쓰는지 소리 내어 말한다.',
        student: '궁금이 판에서 내가 알아볼 물음 하나를 골라 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '선생님', label: '물음: 운동장 웅덩이는 ___ 얼까요?' }], cards: ['언제', '누가'], shuffle: false }, sequence: [{ fill: { f1: '언제' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 계획서 칸 채우기 연습', minutes: 12, tool: 'story',
            teacher: '"하준이의 물음은 \'은행나무 잎은 언제 다 떨어질까요?\'예요. 어디를 살펴야 할까요? 무엇으로 기록할까요?" 칸마다 알맞은 낱말을 넣게 한다. 계획서를 다 쓰면 마지막에 \'언제 살필지\'를 꼭 넣어야 한다는 것을 짚는다.',
            task: '친구의 탐구 계획서 빈칸에 알맞은 말을 넣고, 계획서 쓰는 차례를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 탐구 계획서를 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'where', who: '하준', label: '살필 곳: 학교 ___ 앞' }, { id: 'how', who: '하준', label: '방법: 잎을 ___ 기록해요.' }], cards: ['은행나무', '급식실', '사진으로 찍어', '노래로 불러'] },
                target: { fill: { where: '은행나무', how: '사진으로 찍어' } }, difficulty: 0.1, levels: { challenge: { toolOptions: { cards: ['은행나무', '급식실', '사진으로 찍어', '노래로 불러', '바람에 날려'] } } } },
              { prompt: '서아의 탐구 계획서를 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'q', who: '서아', label: '물음: 교실은 아침과 낮에 얼마나 ___?' }, { id: 'how', who: '서아', label: '방법: ___ 숫자를 읽어 적어요.' }, { id: 'when', who: '서아', label: '언제: 닷새 동안 아침과 ___' }], cards: ['다를까요', '좋아요', '온도계의', '시계의', '점심에', '꿈속에서'] },
                target: { fill: { q: '다를까요', how: '온도계의', when: '점심에' } }, difficulty: 0.25,
                levels: { easy: { prompt: '서아의 탐구 계획서를 완성해 보세요.', toolOptions: { slots: [{ id: 'how', who: '서아', label: '방법: ___ 숫자를 읽어 적어요.' }], cards: ['온도계의', '노래의'] }, target: { fill: { how: '온도계의' } } } } },
              { prompt: '탐구 계획서를 쓰는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['알아볼 물음을 적어요', '살필 곳을 정해요', '방법과 도구를 적어요', '언제 살필지 정해요'] },
                target: { order: ['알아볼 물음을 적어요', '살필 곳을 정해요', '방법과 도구를 적어요', '언제 살필지 정해요'] }, difficulty: 0.15,
                hints: ['칠판 계획서의 네 칸을 위에서부터 읽어 보고, 무엇이 정해져야 다음 칸을 쓸 수 있는지 생각해요.', '살필 곳을 정하기 전에 무엇이 먼저 있어야 할까요? 맨 앞 카드를 다시 보세요.', '물음 적기 → 살필 곳 정하기 → 방법과 도구 적기 → 언제 살필지 정하기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 계획서 쓰고 견주기', minutes: 15, tool: 'mindmap',
            teacher: '활동지 계획서에 내 물음으로 네 칸을 채우게 한다. 다 쓴 학생은 짝과 계획서를 바꾸어 읽고 "이 계획대로 하면 답을 알 수 있을까?"를 물어 준다. 좋은 계획의 조건(살펴서 알 수 있는 물음, 살필 곳·방법·때가 정해짐)을 칠판에 적어 둔다.',
            task: '활동지에 내 탐구 계획서를 쓰고, 좋은 계획의 조건을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '활동지에 내 탐구 계획서 네 칸을 채워요. 다 썼으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '좋은 탐구 계획에 들어 있어야 할 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 계획', cards: ['살펴서 알 수 있는 물음', '살필 곳과 방법', '언제 살필지', '가장 예쁜 글씨'] },
                target: { pick: ['살펴서 알 수 있는 물음', '살필 곳과 방법', '언제 살필지'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['살펴서 알 수 있는 물음', '살필 곳과 방법', '언제 살필지', '가장 예쁜 글씨', '친구보다 긴 글'] } } } },
              { prompt: '두 계획서를 보고 계획대로 하면 답을 알 수 있는 것과 없는 것으로 나누어 보세요.', toolOptions: { topic: '알 수 있을까?', slots: ['답을 알 수 있어요', '답을 알기 어려워요'], cards: ['웅덩이를 날마다 아침에 만져 보고 적어요', '은행잎을 한 주에 한 번 사진 찍어요', '눈사람에게 기분을 물어봐요', '한 번만 보고 끝내요'] },
                target: { sort: { '답을 알 수 있어요': ['웅덩이를 날마다 아침에 만져 보고 적어요', '은행잎을 한 주에 한 번 사진 찍어요'], '답을 알기 어려워요': ['눈사람에게 기분을 물어봐요', '한 번만 보고 끝내요'] } }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 계획서에서 가장 자신 있는 칸은 어디인가요? 짝이 고쳐 보라고 한 칸은요?" 두세 명이 말한다. 계획서는 관찰 기록장 맨 앞에 붙이고, 다음 시간부터 계획대로 살피고 자료를 읽는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '방법: 화단 흙을 ___ 만져 보고 적어요.' }], cards: ['날마다 아침에', '한 번만'] }, prompt: '준호의 계획서 빈칸을 채워 보세요. 흙이 언제 어는지 알고 싶어요.', target: { fill: { f1: '날마다 아침에' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '탐구 계획서에 \'언제 살필지\'를 쓰는 까닭은?', options: ['여러 번 살펴 견주려고', '글을 길게 쓰려고', '선생님께 보여 드리려고'], answer: 0, difficulty: 0.15, explain: '정한 때에 여러 번 살펴야 달라지는 것을 견줄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 계절 탐구 계획서',
      items: [
        { type: 'table', prompt: '내 탐구 계획서를 쓰세요.', columns: ['칸', '내 계획'], cells: [['알아볼 물음', ''], ['살필 곳', ''], ['방법과 도구', ''], ['언제 살필지', '']] },
        { type: 'check', prompt: '내 계획서를 점검하고 ✓ 하세요.', options: ['살펴서 알 수 있는 물음이에요', '살필 곳과 방법을 정했어요', '여러 번 살필 때를 정했어요'] },
        { type: 'short', prompt: '짝이 내 계획서를 보고 해 준 말을 쓰세요.' },
        { type: 'draw', prompt: '계획대로 살피는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '물음 → 어디 → 어떻게 → 언제!',
        items: [
          { type: 'short', prompt: '알아볼 물음을 쓰세요.' },
          { type: 'short', prompt: '살필 곳을 쓰세요.' },
          { type: 'choice', prompt: '어떻게 기록할까요?', options: ['그림이나 사진으로', '기억만 해요'], answer: '그림이나 사진으로' },
          { type: 'draw', prompt: '계획대로 살피는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '빈칸이 하나로 줄어요. 칠판의 선생님 계획서를 보며 써요.',
      base: '빈칸을 모두 채운 뒤 확인을 눌러요.',
      challenge: '빈칸이 세 개이고, 좋은 계획과 상관없는 카드가 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번만 살피는 계획을 쓴다(한 계절만 보아도 안다고 여김) → \'언제 살필지\' 칸에 두 번 넘게 적게 한다. 이 생각은 33차시부터 직접 다룬다. ② 물음이 너무 커서 살필 곳을 정하지 못한다 → 27차시처럼 \'어디에서, 무엇을\'을 넣어 고치게 한다. ③ 글쓰기가 어려운 학생은 낱말과 그림으로 칸을 채워도 된다. 이 story 문항은 이야기 차례가 아닌 계획서 차례라 힌트를 따로 썼다.',
  }));

  lessons.push(L(33, {
    title: '같은 곳을 계절마다 찍은 사진 견주기',
    objective: '같은 곳을 네 계절에 찍은 사진을 차례대로 놓고, 한 계절만 보아서는 알 수 없는 달라진 점을 찾아 말할 수 있다.',
    illustration: ART('four paper-cut photo frames hanging on a string, each showing the same school flower bed in spring blossoms, green summer leaves, red autumn leaves and white winter snow, a child pointing at the frames', '같은 곳, 다른 계절', [
      { motif: 'tree', x: 90, y: 214, color: 'buttercup' }, { motif: 'flower', x: 380, y: 214 }, { motif: 'leaf', x: 300, y: 200, color: 'coral' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '화단 사진 한 장(가을)만 보여 주고 "이 화단은 일 년 내내 이런 모습일까요?"라고 묻는다. 학생 생각을 들은 뒤 봄 사진을 옆에 붙인다. "한 장만 보았을 때와 두 장을 견주었을 때 무엇이 다른가요?" 사진을 여러 계절 모아야 달라진 것이 보인다는 것을 끌어낸다.',
        student: '가을 화단 사진과 봄 화단 사진에서 다른 점을 하나 찾아 짝에게 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'order', axis: ['봄', '겨울'], cards: ['꽃이 핀 화단', '눈 덮인 화단'], shuffle: false }, sequence: [{ order: ['꽃이 핀 화단', '눈 덮인 화단'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 계절 사진 차례대로 놓기', minutes: 13, tool: 'timeline',
            teacher: '"봄에서 시작해 한 해 동안 이 곳은 어떻게 바뀌었을까요?" 사진 설명 카드를 봄부터 차례대로 놓게 한다. 모두 놓은 뒤 "가을 사진 한 장만 보았다면 꽃이 피는 것을 알 수 있었을까요?"라고 되묻는다.',
            task: '같은 곳을 계절마다 찍은 사진 카드를 봄부터 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교 화단을 계절마다 찍은 사진이에요. 봄부터 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['봄', '겨울'], cards: ['노란 개나리가 핀 화단', '잎이 무성한 초록 화단', '빨간 단풍잎이 떨어진 화단', '하얀 눈이 덮인 화단'] },
                target: { order: ['노란 개나리가 핀 화단', '잎이 무성한 초록 화단', '빨간 단풍잎이 떨어진 화단', '하얀 눈이 덮인 화단'] }, difficulty: 0.1 },
              { prompt: '운동장 옆 연못을 계절마다 찍은 사진이에요. 봄부터 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['봄', '겨울'], cards: ['올챙이가 헤엄치는 연못', '연잎이 연못을 덮었어요', '연잎이 누렇게 시들었어요', '연못 물이 꽁꽁 얼었어요'] },
                target: { order: ['올챙이가 헤엄치는 연못', '연잎이 연못을 덮었어요', '연잎이 누렇게 시들었어요', '연못 물이 꽁꽁 얼었어요'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '운동장 옆 연못 사진이에요. 봄부터 차례대로 놓고, 연못과 상관없는 사진은 남겨요.', toolOptions: { slots: 4, cards: ['올챙이가 헤엄치는 연못', '연잎이 연못을 덮었어요', '연잎이 누렇게 시들었어요', '연못 물이 꽁꽁 얼었어요', '급식실 식판'] } } } },
              { prompt: '한 장만 보아서는 알 수 없고, 여러 계절 사진을 견주어야 알 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '견주어야 알아요', cards: ['연못 물이 언제 어는지', '연잎이 언제 시드는지', '연못이 운동장 옆에 있어요', '연못이 동그래요'] },
                target: { pick: ['연못 물이 언제 어는지', '연잎이 언제 시드는지'] }, difficulty: 0.2,
                predict: { q: '여름 사진 한 장만 보면 연못이 어는 것을 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '한 계절의 사진에는 그때의 모습만 담겨요. 달라지는 것은 여러 계절을 견주어야 보여요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 사진 모아 계절 표에 붙이기', minutes: 13, tool: 'mindmap',
            teacher: '"이 사진은 어느 계절 칸에 붙일까요? 무엇을 보고 알았나요?" 사진 속 단서(꽃, 잎 색, 옷차림, 눈)를 말하게 한다. 이어 모둠마다 교사가 나누어 준 학교 사진 묶음을 활동지의 계절 표 칸에 붙이고, 칸 아래에 단서를 한 낱말로 적는다.',
            task: '사진 설명 카드를 알맞은 계절에 나누고, 모둠 사진을 계절 표에 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '사진 설명 카드를 알맞은 계절에 나누어 보세요.', toolOptions: { topic: '계절 사진', slots: ['봄', '여름', '가을', '겨울'], cards: ['벚꽃 아래 입학식', '수영장에서 물놀이', '은행잎 줍기', '눈사람 만들기'] },
                target: { sort: { '봄': ['벚꽃 아래 입학식'], '여름': ['수영장에서 물놀이'], '가을': ['은행잎 줍기'], '겨울': ['눈사람 만들기'] } }, difficulty: 0.1 },
              { prompt: '사진 속 단서를 보고 알맞은 계절에 나누어 보세요.', toolOptions: { topic: '사진 속 단서', slots: ['봄', '여름', '가을', '겨울'], cards: ['나무에 연둣빛 새싹', '매미가 붙은 나무', '누렇게 익은 벼', '처마에 달린 고드름', '반소매에 밀짚모자', '두꺼운 패딩'] },
                target: { sort: { '봄': ['나무에 연둣빛 새싹'], '여름': ['매미가 붙은 나무', '반소매에 밀짚모자'], '가을': ['누렇게 익은 벼'], '겨울': ['처마에 달린 고드름', '두꺼운 패딩'] } }, difficulty: 0.25, levels: { challenge: { prompt: '사진 속 단서를 보고 알맞은 계절에 나누어 보세요. 계절을 알 수 없는 카드는 남겨 두세요.', toolOptions: { cards: ['나무에 연둣빛 새싹', '매미가 붙은 나무', '누렇게 익은 벼', '처마에 달린 고드름', '반소매에 밀짚모자', '두꺼운 패딩', '교문 앞 표지판'] } } } },
              { prompt: '모둠 사진 묶음을 활동지 계절 표에 붙이고, 칸 아래에 단서를 한 낱말로 적어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 붙인 표에서 가장 많이 달라진 것은 무엇인가요?" 모둠마다 하나씩 말한다. "29차시의 내 나무도 이렇게 계절마다 찍어 모으면 어떨까요?" 다음 관찰 때 같은 자리에서 사진을 찍기로 약속한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['봄', '겨울'], cards: ['진달래가 핀 뒷산', '단풍이 든 뒷산', '눈 쌓인 뒷산'] }, prompt: '뒷산을 찍은 사진을 봄부터 차례대로 놓아 보세요.', target: { order: ['진달래가 핀 뒷산', '단풍이 든 뒷산', '눈 쌓인 뒷산'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '계절의 변화를 알아보려면 사진을 어떻게 모으면 좋을까요?', options: ['같은 곳을 여러 계절에 찍어 모아요', '좋아하는 계절 사진만 모아요', '한 장이면 충분해요'], answer: 0, difficulty: 0.1, explain: '같은 곳을 여러 계절에 찍어야 무엇이 달라졌는지 견줄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '같은 곳, 네 계절',
      items: [
        { type: 'table', prompt: '모둠 사진을 붙이고 단서를 쓰세요.', columns: ['봄', '여름', '가을', '겨울'], rows: 2 },
        { type: 'choice', prompt: '고드름이 보이는 사진은 어느 계절인가요?', options: ['봄', '여름', '가을', '겨울'], answer: '겨울' },
        { type: 'short', prompt: '여러 계절 사진을 견주어 알게 된 것을 하나 쓰세요.' },
        { type: 'draw', prompt: '우리 학교 한 곳의 봄과 겨울 모습을 나란히 그리세요.' },
      ],
      easy: {
        note: '꽃=봄, 매미=여름, 단풍=가을, 눈=겨울.',
        items: [
          { type: 'choice', prompt: '눈사람 사진은 어느 계절인가요?', options: ['여름', '겨울'], answer: '겨울' },
          { type: 'choice', prompt: '벚꽃 사진은 어느 계절인가요?', options: ['봄', '가을'], answer: '봄' },
          { type: 'draw', prompt: '좋아하는 계절의 학교 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 카드가 적은 문항부터 해요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '연못과 상관없는 사진 카드가 섞여 있고, 단서 카드가 여섯 장이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 장의 사진으로 그 곳이 늘 그렇다고 여긴다 → 도입에서 한 장과 두 장을 견주어 보인다. ② 단서 없이 느낌으로 계절을 고른다 → "무엇을 보고 알았나요?"를 꼭 묻는다. ③ 학교 사진은 교사가 지난 계절에 찍어 둔 것을 쓰고, 없으면 학교 누리집 행사 사진을 인쇄한다. 학생 얼굴이 크게 나온 사진은 쓰지 않는다.',
  }));

  lessons.push(L(34, {
    title: '관찰표에 달라진 점과 그대로인 점 적기',
    objective: '같은 곳을 두 계절에 살핀 관찰표를 읽고, 달라진 점과 그대로인 점을 나누어 문장으로 쓸 수 있다.',
    illustration: ART('a paper-cut two-column observation sheet on a desk, the left side showing a playground in summer with green trees and the right side the same playground in late autumn with bare trees, a pencil and magnifying glass beside it', '무엇이 달라졌나요?', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'tree', x: 370, y: 214, color: 'cream' }, { motif: 'leaf', x: 330, y: 200, color: 'coral' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '여름과 늦가을의 운동장 그림을 나란히 띄운다. "두 그림에서 달라진 것은 손을 들고, 그대로인 것은 팔짱을 껴 봅시다." 교사가 "철봉!", "나뭇잎 색!"처럼 하나씩 말하면 학생들은 몸으로 답한다. 달라진 것만 보지 않고 그대로인 것도 적어야 견주기가 정확해진다고 알린다.',
        student: '선생님이 말하는 것이 달라졌으면 손을 들고, 그대로이면 팔짱을 껴요.',
        demo: { tool: 'mindmap', options: { topic: '운동장', slots: ['달라졌어요', '그대로예요'], cards: ['나뭇잎 색', '철봉'], shuffle: false }, sequence: [{ sort: { '달라졌어요': ['나뭇잎 색'], '그대로예요': ['철봉'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 달라진 점, 그대로인 점', minutes: 12, tool: 'mindmap',
            teacher: '"민지의 관찰표를 읽어 볼까요? 8월과 11월에 같은 운동장을 살폈어요." 표의 칸을 하나씩 짚으며 읽어 준다. 사람들의 옷차림처럼 운동장 밖의 것도 달라진 점에 들어갈 수 있다는 것을 짚는다.',
            task: '민지의 관찰표를 읽고 달라진 점과 그대로인 점을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '8월과 11월의 운동장이에요. 달라진 점과 그대로인 점을 나누어 보세요.', toolOptions: { topic: '민지의 관찰표', slots: ['달라졌어요', '그대로예요'], cards: ['나무에 달린 잎', '그늘에 모인 아이들', '미끄럼틀 자리', '운동장 크기'] },
                target: { sort: { '달라졌어요': ['나무에 달린 잎', '그늘에 모인 아이들'], '그대로예요': ['미끄럼틀 자리', '운동장 크기'] } }, difficulty: 0.15 },
              { prompt: '8월과 11월의 운동장이에요. 달라진 점과 그대로인 점을 나누어 보세요.', toolOptions: { topic: '민지의 관찰표', slots: ['달라졌어요', '그대로예요'], cards: ['아이들의 옷차림', '수돗가 물 마시는 줄', '학교 건물 색', '축구 골대 수'] },
                target: { sort: { '달라졌어요': ['아이들의 옷차림', '수돗가 물 마시는 줄'], '그대로예요': ['학교 건물 색', '축구 골대 수'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '8월과 11월의 운동장이에요. 나누고, 운동장을 살핀 것과 상관없는 카드는 남겨요.', toolOptions: { cards: ['아이들의 옷차림', '수돗가 물 마시는 줄', '학교 건물 색', '축구 골대 수', '내일 볼 영화'] } } } },
              { prompt: '관찰표에 바르게 적은 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바르게 적었어요', cards: ['8월 초록 잎이 11월에 노래졌어요.', '11월에도 미끄럼틀은 같은 자리에 있어요.', '운동장이 그냥 좋았어요.', '뭔가 달라졌어요.'] },
                target: { pick: ['8월 초록 잎이 11월에 노래졌어요.', '11월에도 미끄럼틀은 같은 자리에 있어요.'] }, difficulty: 0.25,
                predict: { q: '"뭔가 달라졌어요."라고 쓰면 나중에 읽는 사람이 알 수 있을까요?', options: ['알 수 있어요', '무엇이 달라졌는지 몰라요'], answer: 1 },
                conclude: '관찰표에는 무엇이, 언제, 어떻게 달라졌는지 적어야 다시 읽어도 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 관찰 문장 쓰기', minutes: 14, tool: 'story',
            teacher: '"8월에는 ( ), 11월에는 ( )." 틀을 칠판에 쓰고 빈칸 채우기를 한다. 이어 창밖의 한 곳(운동장 나무, 화단, 길)을 정해 지금 모습을 관찰표 오른쪽 칸에 적고, 33차시 사진 표의 여름 모습과 견주어 문장을 하나 쓴다.',
            task: '관찰 문장의 빈칸을 채우고, 창밖 한 곳을 살펴 관찰표에 문장을 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아의 관찰 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', label: '8월엔 그늘에 아이들이 ___, 11월엔 햇볕에 모였어요.' }, { id: 'f2', who: '서아', label: '화단의 돌은 8월에도 11월에도 ___ 자리에 있어요.' }], cards: ['모였고', '같은', '추웠고', '없는'] },
                target: { fill: { f1: '모였고', f2: '같은' } }, difficulty: 0.15,
                levels: { easy: { prompt: '서아의 관찰 문장을 완성해 보세요.', toolOptions: { slots: [{ id: 'f2', who: '서아', label: '화단의 돌은 8월에도 11월에도 ___ 자리에 있어요.' }], cards: ['같은', '없는'] }, target: { fill: { f2: '같은' } } } } },
              { prompt: '준호의 관찰 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '8월에 살폈을 때 은행잎은 ___이었어요.' }, { id: 'f2', who: '준호', label: '11월에 다시 살폈더니 은행잎이 ___으로 바뀌었어요.' }], cards: ['초록색', '노란색'] },
                target: { fill: { f1: '초록색', f2: '노란색' } }, difficulty: 0.1, levels: { challenge: { toolOptions: { cards: ['초록색', '노란색', '빨간색'] } } } },
              { prompt: '창밖의 한 곳을 정해 살피고, 관찰표에 여름 모습과 견준 문장을 하나 써요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 관찰 문장을 듣고, 무엇이 언제 어떻게 달라졌는지 다 들어 있는지 엄지로 알려 주세요." 두세 명의 문장을 읽어 준다. 관찰표는 기록장에 붙여 두고 내 나무를 다시 볼 때 같은 틀로 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '학교 앞 길', slots: ['달라졌어요', '그대로예요'], cards: ['가로수 잎 색', '횡단보도 자리'] }, prompt: '8월과 11월의 학교 앞 길이에요. 카드를 나누어 보세요.', target: { sort: { '달라졌어요': ['가로수 잎 색'], '그대로예요': ['횡단보도 자리'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '관찰표에 쓰기에 가장 알맞은 문장은?', options: ['여름에는 연못에 연잎이 가득했는데 가을에는 시들었어요.', '연못이 예뻤어요.', '연못에 무언가 있었어요.'], answer: 0, difficulty: 0.2, explain: '무엇이, 언제, 어떻게 달라졌는지 들어 있는 문장이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '관찰표: 달라진 점과 그대로인 점',
      items: [
        { type: 'table', prompt: '창밖 한 곳을 살펴 쓰세요.', columns: ['살핀 것', '여름', '지금(가을)', '달라졌나요?'], rows: 3 },
        { type: 'blank', prompt: '관찰 문장을 완성하세요.', text: '여름에는 (          ), 지금은 (          ).' },
        { type: 'check', prompt: '내 관찰 문장을 점검하고 ✓ 하세요.', options: ['무엇을 살폈는지 썼어요', '언제 살폈는지 썼어요', '어떻게 달라졌는지 썼어요'] },
        { type: 'draw', prompt: '살핀 곳의 지금 모습을 그리세요.' },
      ],
      easy: {
        note: '여름에는 ○○, 지금은 △△.',
        items: [
          { type: 'choice', prompt: '여름과 지금, 달라진 것에 ○ 하세요.', options: ['나뭇잎 색', '학교 건물'], answer: '나뭇잎 색' },
          { type: 'short', prompt: '창밖에서 달라진 것을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '살핀 곳의 지금 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 빈칸이 하나로 줄어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '운동장과 상관없는 카드가 섞여 있고, 빈칸이 두 개인 문장을 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 달라진 것만 찾고 그대로인 것은 빠뜨린다 → 도입의 몸 놀이로 둘 다 살피는 습관을 들인다. ② "예뻤어요"처럼 느낌만 쓴다 → 느낌은 37차시에 따로 다루고, 오늘은 무엇이 어떻게 달라졌는지에 집중한다. ③ 창밖 관찰이 어려운 교실은 33차시 사진 표를 보고 쓴다. 이 story 문항은 이야기가 아닌 관찰 문장 틀이라 교사 말로 빈칸 뜻을 먼저 풀어 준다.',
  }));

  lessons.push(L(35, {
    title: '9월과 11월 옷차림 그림그래프 읽기',
    objective: '우리 반 옷차림을 조사한 그림그래프를 읽고, 9월과 11월을 견주어 계절에 따라 옷차림이 어떻게 달라졌는지 말할 수 있다.',
    illustration: ART('a paper-cut picture graph on a board with little person icons stacked above three clothing pictures, short sleeves, long sleeves and a padded coat, two graphs side by side labeled September and November', '옷차림이 달라졌어요', [
      { motif: 'leaf', x: 90, y: 200, color: 'buttercup' }, { motif: 'leaf', x: 400, y: 196, color: 'coral' }, { motif: 'cloud', x: 300, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 겉옷을 입고 온 사람은 손을 들어 볼까요?" 손 든 사람을 함께 센다. "9월 첫 주에 선생님이 우리 반 옷차림을 세어 두었어요. 그때도 이만큼이었을까요?" 그림그래프의 사람 그림 하나가 한 명이라는 것을 시연으로 보여 준다.',
        student: '오늘 내가 입은 옷이 반소매인지, 긴소매인지, 두꺼운 겉옷인지 짝에게 말해 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '9월 우리 반 옷차림', data: [['반소매', 7], ['긴소매', 2]], unit: '명', xLabel: '옷차림', yLabel: '입은 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['반소매', '긴소매'], question: '더 많이 입은 옷은?' }, sequence: [{ pick: 0 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 옷차림 그림그래프 읽기', minutes: 13, tool: 'chart',
            teacher: '"사람 그림이 가장 많이 쌓인 옷은 무엇인가요?" 9월 그래프와 11월 그래프를 차례로 읽는다. 두 그래프를 나란히 띄우고 "반소매는 9월과 11월 가운데 언제 더 많았나요?"라고 묻는다. 수를 다 세지 않아도 쌓인 높이로 견줄 수 있다는 것을 짚는다.',
            task: '9월과 11월의 옷차림 그림그래프를 읽고 물음에 알맞은 것을 골라요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '9월 첫 주 우리 반 옷차림이에요. 가장 많이 입은 옷은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '9월 우리 반 옷차림', data: [['반소매', 8], ['긴소매', 3], ['두꺼운 겉옷', 0]], unit: '명', xLabel: '옷차림', yLabel: '입은 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['반소매', '긴소매', '두꺼운 겉옷'], question: '가장 많이 입은 옷은?' },
                target: { pick: 0 }, difficulty: 0.05,
                levels: { challenge: { prompt: '9월 첫 주 우리 반 옷차림이에요. 반소매를 입은 사람은 긴소매보다 몇 명 더 많은가요?', toolOptions: { choices: ['3명', '5명', '8명'], question: '반소매는 긴소매보다 몇 명 더?', explain: '반소매 8명, 긴소매 3명이에요. 8에서 3을 빼면 5명이에요.' }, target: { pick: 1 } } } },
              { prompt: '11월 마지막 주 우리 반 옷차림이에요. 가장 많이 입은 옷은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '11월 우리 반 옷차림', data: [['반소매', 0], ['긴소매', 4], ['두꺼운 겉옷', 7]], unit: '명', xLabel: '옷차림', yLabel: '입은 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['반소매', '긴소매', '두꺼운 겉옷'], question: '가장 많이 입은 옷은?' },
                target: { pick: 2 }, difficulty: 0.1,
                levels: { challenge: { prompt: '11월 마지막 주 우리 반 옷차림이에요. 두꺼운 겉옷을 입은 사람은 긴소매보다 몇 명 더 많은가요?', toolOptions: { choices: ['3명', '4명', '7명'], question: '두꺼운 겉옷은 긴소매보다 몇 명 더?', explain: '두꺼운 겉옷 7명, 긴소매 4명이에요. 7에서 4를 빼면 3명이에요.' }, target: { pick: 0 } } } },
              { prompt: '11월 그래프예요. 9월에는 아무도 입지 않았는데 11월에 가장 많아진 옷은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '11월 우리 반 옷차림', data: [['반소매', 0], ['긴소매', 4], ['두꺼운 겉옷', 7]], unit: '명', xLabel: '옷차림', yLabel: '입은 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['반소매', '긴소매', '두꺼운 겉옷'], question: '9월에 0명이었다가 가장 많아진 옷은?' },
                target: { pick: 2 }, difficulty: 0.25,
                predict: { q: '9월보다 11월에 반소매는 많아졌을까요, 줄었을까요?', options: ['많아졌어요', '줄었어요'], answer: 1 },
                conclude: '날이 추워지면서 반소매는 줄고 두꺼운 겉옷이 많아졌어요. 옷차림은 계절을 따라 바뀌어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오늘의 옷차림 조사하기', minutes: 13, tool: 'chart',
            teacher: '"오늘 우리 반은 어떨까요? 직접 세어 봅시다." 옷차림마다 차례로 일어서게 하고 함께 센다. 칠판에 붙임 딱지로 사람 그림을 붙여 그래프를 만든다. 오늘 그래프를 화면의 11월 그래프와 견주어 비슷한지 이야기한다.',
            task: '친구의 조사 그래프를 읽고, 우리 반 오늘의 옷차림을 직접 세어 그래프를 만들어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '옆 반이 11월에 조사한 신발 그래프예요. 가장 적게 신은 신발은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '옆 반 11월 신발', data: [['운동화', 9], ['샌들', 1], ['털부츠', 3]], unit: '명', xLabel: '신발', yLabel: '신은 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['운동화', '샌들', '털부츠'], question: '가장 적게 신은 신발은?' },
                target: { pick: 1 }, difficulty: 0.15,
                levels: { challenge: { prompt: '옆 반이 11월에 조사한 신발 그래프예요. 운동화를 신은 사람은 털부츠보다 몇 명 더 많은가요?', toolOptions: { choices: ['3명', '6명', '9명'], question: '운동화는 털부츠보다 몇 명 더?', explain: '운동화 9명, 털부츠 3명이에요. 9에서 3을 빼면 6명이에요.' }, target: { pick: 1 } } } },
              { prompt: '옆 반이 9월과 11월에 장갑 낀 사람을 세었어요. 장갑 낀 사람이 더 많은 달은 언제인가요?', toolOptions: { type: 'bar', mode: 'read', title: '장갑 낀 사람', data: [['9월', 0], ['11월', 6]], unit: '명', xLabel: '달', yLabel: '낀 사람', choices: ['9월', '11월'], question: '장갑 낀 사람이 더 많은 달은?' },
                target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '우리 반 오늘 옷차림을 차례로 일어서서 세고, 칠판에 붙임 딱지로 그림그래프를 만들어요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그래프 두 개를 견주어 알게 된 것을 한 문장으로 말해 볼까요?" 학생 두세 명의 문장을 듣는다. 그래프 한 장만으로는 옷차림이 바뀐 것을 알 수 없다는 것을 함께 되짚는다. 칠판 그래프는 사진으로 찍어 기록장에 붙인다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '다 반 11월 옷차림', data: [['반소매', 1], ['긴소매', 5], ['두꺼운 겉옷', 6]], unit: '명', xLabel: '옷차림', yLabel: '입은 사람', icons: [{ value: 1, name: '1명' }], icon: 'person', choices: ['반소매', '긴소매', '두꺼운 겉옷'], question: '가장 적게 입은 옷은?' }, prompt: '다 반의 11월 옷차림 그래프에서 가장 적게 입은 옷을 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
          { type: 'choice', prompt: '9월보다 11월에 두꺼운 겉옷을 입은 사람이 많은 까닭은?', options: ['날씨가 추워져서', '겉옷이 새로 나와서', '9월에 겉옷을 잃어버려서'], answer: 0, difficulty: 0.1, explain: '가을이 깊어 날이 추워지면 따뜻한 겉옷을 입는 사람이 많아져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옷차림 그림그래프',
      items: [
        { type: 'figure', wide: true, prompt: '그래프를 보고 가장 많이 입은 옷을 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '11월 우리 반 옷차림', data: [['반소매', 0], ['긴소매', 4], ['두꺼운 겉옷', 7]], unit: '명', xLabel: '옷차림', yLabel: '입은 사람', icons: [{ value: 1, name: '1명' }], icon: 'person' }, caption: '가장 많이 입은 옷: (        )' }], answer: '두꺼운 겉옷' },
        { type: 'table', prompt: '오늘 우리 반 옷차림을 세어 쓰세요.', columns: ['반소매', '긴소매', '두꺼운 겉옷'], rows: 1 },
        { type: 'choice', prompt: '9월보다 11월에 줄어든 옷은?', options: ['반소매', '두꺼운 겉옷'], answer: '반소매' },
        { type: 'short', prompt: '두 그래프를 견주어 알게 된 것을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '사람 그림 하나 = 1명. 높이 쌓일수록 많아요.',
        items: [
          { type: 'figure', wide: true, prompt: '사람 그림이 가장 많은 옷에 ○ 하세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '9월 우리 반 옷차림', data: [['반소매', 8], ['긴소매', 3]], unit: '명', xLabel: '옷차림', yLabel: '입은 사람', icons: [{ value: 1, name: '1명' }], icon: 'person' }, caption: '반소매 · 긴소매' }], answer: '반소매' },
          { type: 'choice', prompt: '오늘 내 옷차림에 ○ 하세요.', options: ['반소매', '긴소매', '두꺼운 겉옷'] },
          { type: 'draw', prompt: '오늘 내 옷차림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프에 수가 함께 보여요. 사람 그림의 높이를 손가락으로 짚으며 견주어요.',
      base: '그림 수를 세거나 높이를 견주어 고르고 확인을 눌러요.',
      challenge: '가장 많은 것을 고르는 대신 몇 명 더 많은지 빼서 답해요. 두 달의 그래프를 머릿속으로 견주는 물음도 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림 하나가 몇 명인지 놓친다 → 그래프 아래 \'1명\' 표시를 손가락으로 짚게 한다. ② 한 달 그래프만 보고 \'우리 반은 늘 겉옷을 입는다\'고 말한다 → 두 그래프를 나란히 띄워 견준다. ③ 옷차림 조사는 놀림이 되지 않도록 옷의 종류만 세고 누가 무엇을 입었는지는 적지 않는다. 9월 자료는 교사가 미리 세어 둔 것을 쓰고, 없으면 그래프의 예시 자료를 쓴다.',
  }));

  lessons.push(L(36, {
    title: '계절 달력에서 명절과 절기 찾기',
    objective: '한 해 달력에서 설날·단오·추석·동지를 찾아 차례대로 놓고, 명절에 하는 일이 계절과 어떻게 이어지는지 말할 수 있다.',
    illustration: ART('a paper-cut wall calendar wheel divided into four seasons with small icons, rice cake soup for New Year in winter, a swing for Dano in early summer, a full moon and rice cakes for Chuseok in autumn, and a bowl of red bean porridge for the winter solstice', '한 해의 명절', [
      { motif: 'moon', x: 380, y: 70, s: 0.6 }, { motif: 'star', x: 120, y: 190, s: 0.6 }, { motif: 'leaf', x: 300, y: 200, color: 'coral' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"보름달을 보며 송편을 먹는 날은 언제였지요?" 추석을 떠올리게 한다. 큰 달력을 펼쳐 "명절은 아무 때나 있을까요, 계절마다 정해진 때가 있을까요?"라고 묻는다. 시연 단추로 두 명절 카드를 차례대로 놓는 모습을 보여 준다.',
        student: '우리 가족이 명절에 하는 일을 하나 짝에게 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'order', axis: ['한 해의 처음', '한 해의 끝'], cards: ['설날', '추석'], shuffle: false }, sequence: [{ order: ['설날', '추석'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 해 달력에 명절 놓기', minutes: 13, tool: 'timeline',
            teacher: '"설날은 한 해가 시작될 때, 단오는 여름이 시작될 무렵, 추석은 가을걷이 때, 동지는 밤이 가장 긴 겨울날이에요." 큰 달력에 명절 그림을 붙여 가며 말한다. 명절 날짜는 음력이라 해마다 양력 날짜가 조금씩 바뀐다는 것은 가볍게만 알려 준다.',
            task: '명절과 절기를 한 해의 차례대로 놓고, 명절이 있는 계절과 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '명절과 절기를 한 해의 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['한 해의 처음', '한 해의 끝'], cards: ['설날', '단오', '추석', '동지'] },
                target: { order: ['설날', '단오', '추석', '동지'] }, difficulty: 0.2 },
              { prompt: '명절과 그 명절이 있는 계절을 이어 보세요.', toolOptions: { mode: 'match', axis: ['봄', '겨울'], slots: [{ id: 'dano', label: '초여름' }, { id: 'chu', label: '가을걷이 때' }, { id: 'dong', label: '한겨울' }], cards: ['단오', '추석', '동지'] },
                target: { match: { dano: '단오', chu: '추석', dong: '동지' } }, difficulty: 0.2 },
              { prompt: '명절에 하는 일을 한 해의 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['한 해의 처음', '한 해의 끝'], cards: ['설날에 웃어른께 세배해요', '단오에 그네를 뛰어요', '추석에 보름달을 보며 소원을 빌어요', '동지에 팥죽을 먹어요'] },
                target: { order: ['설날에 웃어른께 세배해요', '단오에 그네를 뛰어요', '추석에 보름달을 보며 소원을 빌어요', '동지에 팥죽을 먹어요'] }, difficulty: 0.25,
                levels: { challenge: { prompt: '명절에 하는 일을 한 해의 차례대로 놓고, 명절과 상관없는 카드는 남겨요.', toolOptions: { slots: 4, cards: ['설날에 웃어른께 세배해요', '단오에 그네를 뛰어요', '추석에 보름달을 보며 소원을 빌어요', '동지에 팥죽을 먹어요', '생일에 케이크를 먹어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 명절과 계절은 왜 이어질까', minutes: 13, tool: 'mindmap',
            teacher: '"추석에 햅쌀과 햇과일을 올리는 까닭은 무엇일까요?" 31차시의 벼 거두기를 떠올리게 한다. "동지에는 밤이 가장 길고 추워요. 따뜻한 팥죽을 먹으며 겨울을 건강하게 나기를 빌었어요." 끝으로 모둠마다 손을 잡고 강강술래처럼 둥글게 돌며 \'설날-단오-추석-동지\'를 차례로 외친다.',
            task: '명절에 하는 일과 그 까닭을 이어 보고, 둥글게 돌며 명절 차례를 외쳐요.',
            levels: CARD_LV,
            items: [
              { prompt: '명절에 하는 일과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그럴까?', slots: [{ id: 'chu', label: '추석에 햇과일을 올려요' }, { id: 'dong', label: '동지에 따뜻한 팥죽을 먹어요' }], cards: ['가을에 새로 거둔 열매라서', '밤이 길고 추운 날이라서'] },
                target: { match: { chu: '가을에 새로 거둔 열매라서', dong: '밤이 길고 추운 날이라서' } }, difficulty: 0.2,
                predict: { q: '추석에 왜 햇과일을 올릴까요?', options: ['가을에 열매를 거두어서', '과일 가게가 문을 열어서'], answer: 0 },
                conclude: '추석은 가을걷이 때라서 새로 거둔 쌀과 과일로 음식을 차려요. 명절은 계절의 생활과 이어져 있어요.' },
              { prompt: '계절과 이어진 명절 이야기만 골라 보세요.', toolOptions: { mode: 'pick', basket: '계절과 이어진 명절', cards: ['단오에 더위 이기려 부채를 나눠요', '설날 추운 날씨에 따뜻한 떡국을 먹어요', '추석에는 텔레비전을 봐요', '명절에는 늦잠을 자요'] },
                target: { pick: ['단오에 더위 이기려 부채를 나눠요', '설날 추운 날씨에 따뜻한 떡국을 먹어요'] }, difficulty: 0.25, levels: { challenge: { toolOptions: { cards: ['단오에 더위 이기려 부채를 나눠요', '설날 추운 날씨에 따뜻한 떡국을 먹어요', '추석에는 텔레비전을 봐요', '명절에는 늦잠을 자요', '명절에는 가족이 모여요'] } } } },
              { prompt: '모둠별로 손을 잡고 둥글게 돌며 \'설날-단오-추석-동지\'를 차례로 외쳐요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음에 돌아올 명절은 무엇일까요? 그때는 어느 계절일까요?" 달력에서 오늘 날짜를 짚고 가장 가까운 동지를 찾는다. 집에서 가족에게 우리 집 명절 풍습을 하나 여쭈어 오기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['한 해의 처음', '한 해의 끝'], cards: ['단오', '동지', '설날'] }, prompt: '세 날을 한 해의 차례대로 놓아 보세요.', target: { order: ['설날', '단오', '동지'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '밤이 가장 길고 팥죽을 먹는 날은?', options: ['단오', '추석', '동지'], answer: 2, difficulty: 0.15, explain: '동지는 겨울에 있고 한 해에서 밤이 가장 길어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 해의 명절과 절기',
      items: [
        { type: 'table', prompt: '명절과 계절, 하는 일을 쓰세요.', columns: ['명절', '계절', '하는 일'], cells: [['설날', '', ''], ['단오', '', ''], ['추석', '', ''], ['동지', '', '']] },
        { type: 'choice', prompt: '보름달을 보며 송편을 먹는 명절은?', options: ['설날', '추석', '동지'], answer: '추석' },
        { type: 'short', prompt: '우리 가족이 명절에 하는 일을 쓰세요.' },
        { type: 'draw', prompt: '가장 좋아하는 명절의 모습을 그리세요.' },
      ],
      easy: {
        note: '설날 → 단오 → 추석 → 동지',
        items: [
          { type: 'choice', prompt: '추석이 있는 계절에 ○ 하세요.', options: ['가을', '봄'], answer: '가을' },
          { type: 'choice', prompt: '동지에 먹는 음식에 ○ 하세요.', options: ['팥죽', '수박'], answer: '팥죽' },
          { type: 'draw', prompt: '좋아하는 명절의 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 큰 달력의 명절 그림을 보며 놓아요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '명절과 상관없는 카드가 섞여 있고, 명절에 하는 일 네 가지를 차례대로 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 설날을 한 해의 끝으로 여긴다(12월 다음이라서) → 설날이 한 해를 여는 날이라는 것을 \'새해\'라는 말로 이어 준다. ② 동지가 낯설다 → 밤이 가장 긴 날이라는 것만 알게 하고, 팥죽 사진을 보여 준다. ③ 가정마다 명절 풍습이 다르거나 명절을 쇠지 않는 가정이 있다 → 우리 집 풍습은 말하고 싶은 학생만 말하게 하고, 다른 나라의 계절 명절도 고르게 인정한다. 이 timeline 문항은 시간 차례이므로 기본 힌트를 쓴다.',
  }));

  lessons.push(L(37, {
    title: '친구의 관찰 일기 읽고 알게 된 것 찾기',
    objective: '친구의 관찰 일기를 날짜 차례대로 읽고, 살펴서 알게 된 것과 느낀 것을 구별해 말할 수 있다.',
    illustration: ART('a paper-cut open diary with three dated pages showing a persimmon tree, green fruit in September, orange fruit in October and only a few fruits left for birds in November, two children reading it together', '감나무 관찰 일기', [
      { motif: 'tree', x: 400, y: 214, color: 'buttercup' }, { motif: 'bird', x: 340, y: 90 }, { motif: 'leaf', x: 90, y: 200, color: 'coral' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"하준이가 학교 감나무를 석 달 동안 살피고 일기를 썼어요. 일기장이 떨어져 쪽이 섞였어요. 어떻게 하면 차례를 알 수 있을까요?" 날짜를 보면 된다는 생각을 끌어낸다. 시연 단추로 두 쪽을 날짜 차례대로 놓는다.',
        student: '일기의 차례를 알려면 무엇을 보면 될지 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['9월 10일 감이 초록색이에요', '10월 15일 감이 주황색이에요'], shuffle: false }, sequence: [{ order: ['9월 10일 감이 초록색이에요', '10월 15일 감이 주황색이에요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 일기를 날짜 차례대로', minutes: 12, tool: 'story',
            teacher: '"날짜가 가장 이른 쪽은 어느 것인가요?" 일기 쪽을 날짜 차례대로 놓게 한 뒤 소리 내어 이어 읽는다. "석 달 동안 감나무에서 무엇이 달라졌나요?" 일기를 차례대로 읽어야 변화가 보인다는 것을 짚는다.',
            task: '친구의 관찰 일기 쪽을 날짜 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 감나무 관찰 일기를 날짜 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['9월 10일 초록 감이 단단해요', '10월 15일 감이 주황색으로 익었어요', '11월 20일 까치밥 몇 개만 남았어요'] },
                target: { order: ['9월 10일 초록 감이 단단해요', '10월 15일 감이 주황색으로 익었어요', '11월 20일 까치밥 몇 개만 남았어요'] }, difficulty: 0.1,
                hints: ['일기 쪽 맨 앞의 달과 날을 보고, 이른 날짜부터 놓아요.', '흔들리는 쪽의 달을 보세요. 그 달은 다른 쪽의 달보다 이른가요, 늦은가요?', '9월 → 10월 → 11월 차례예요.'] },
              { prompt: '서아의 화단 국화 관찰 일기를 날짜 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['9월 5일 국화 꽃봉오리가 작게 맺혔어요', '10월 2일 노란 국화가 활짝 피었어요', '10월 30일 꽃잎 끝이 갈색으로 말랐어요', '11월 25일 꽃이 지고 줄기만 남았어요'] },
                target: { order: ['9월 5일 국화 꽃봉오리가 작게 맺혔어요', '10월 2일 노란 국화가 활짝 피었어요', '10월 30일 꽃잎 끝이 갈색으로 말랐어요', '11월 25일 꽃이 지고 줄기만 남았어요'] }, difficulty: 0.2,
                hints: ['일기 쪽 맨 앞의 달을 먼저 보고, 달이 같으면 날의 수를 견주어요.', '10월이 두 쪽이에요. 2일과 30일 가운데 어느 날이 먼저일까요?', '9월 5일 → 10월 2일 → 10월 30일 → 11월 25일 차례예요.'],
                levels: { challenge: { prompt: '서아의 국화 관찰 일기를 날짜 차례대로 놓고, 국화와 상관없는 쪽은 남겨요.', toolOptions: { slots: 4, cards: ['9월 5일 국화 꽃봉오리가 작게 맺혔어요', '10월 2일 노란 국화가 활짝 피었어요', '10월 30일 꽃잎 끝이 갈색으로 말랐어요', '11월 25일 꽃이 지고 줄기만 남았어요', '10월 9일 한글날 노래를 불렀어요'] } } } },
              { prompt: '민지의 연못 관찰 일기를 날짜 차례대로 놓아 보세요. 새해를 넘겨서 쓴 일기예요.', toolOptions: { mode: 'order', cards: ['12월 3일 살얼음이 얼었어요', '12월 24일 연못 물이 꽁꽁 얼었어요', '1월 12일 얼음 위에 눈이 소복이 쌓였어요'] },
                target: { order: ['12월 3일 살얼음이 얼었어요', '12월 24일 연못 물이 꽁꽁 얼었어요', '1월 12일 얼음 위에 눈이 소복이 쌓였어요'] }, difficulty: 0.3,
                hints: ['새해를 넘겼다면 12월이 지난 다음에 1월이 와요. 달을 먼저 보고, 달이 같으면 날을 견주어요.', '1월은 1이라서 12월보다 먼저일까요? 새해를 넘겼다는 말을 다시 읽어 보세요.', '12월 3일 → 12월 24일 → 새해 1월 12일 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알게 된 것과 느낀 것', minutes: 14, tool: 'mindmap',
            teacher: '"\'감이 주황색으로 익었어요\'는 눈으로 살펴 알게 된 것일까요, 마음으로 느낀 것일까요?" 두 가지를 가르게 한다. 느낀 것도 일기에 소중하지만, 계절의 변화를 견줄 때는 살펴서 알게 된 것을 본다는 것을 짚는다. 끝으로 짝의 관찰 기록장을 바꾸어 읽고 궁금한 점을 하나 물어본다.',
            task: '일기 문장을 살펴서 알게 된 것과 느낀 것으로 나누고, 짝의 관찰 기록장을 읽어요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 일기 문장을 나누어 보세요.', toolOptions: { topic: '하준이의 일기', slots: ['살펴서 알게 된 것', '마음으로 느낀 것'], cards: ['감이 주황색으로 익었어요', '나뭇잎이 반쯤 떨어졌어요', '감이 맛있어 보여 신났어요', '까치가 와서 반가웠어요'] },
                target: { sort: { '살펴서 알게 된 것': ['감이 주황색으로 익었어요', '나뭇잎이 반쯤 떨어졌어요'], '마음으로 느낀 것': ['감이 맛있어 보여 신났어요', '까치가 와서 반가웠어요'] } }, difficulty: 0.2, levels: { challenge: { prompt: '하준이의 일기 문장을 나누어 보세요. 물음 문장은 남겨 두세요.', toolOptions: { cards: ['감이 주황색으로 익었어요', '나뭇잎이 반쯤 떨어졌어요', '감이 맛있어 보여 신났어요', '까치가 와서 반가웠어요', '감은 언제 딸까요?'] } } },
                predict: { q: '\'신났어요\'를 보고 감나무가 어떻게 달라졌는지 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '느낀 것은 나의 마음을 알려 주고, 살펴서 알게 된 것은 감나무의 변화를 알려 줘요.' },
              { prompt: '서아의 일기 문장을 나누어 보세요.', toolOptions: { topic: '서아의 일기', slots: ['살펴서 알게 된 것', '마음으로 느낀 것'], cards: ['국화 꽃잎 끝이 갈색이에요', '줄기만 남아서 쓸쓸했어요', '국화 향기가 진해서 좋았어요', '꽃봉오리가 다섯 개 맺혔어요'] },
                target: { sort: { '살펴서 알게 된 것': ['국화 꽃잎 끝이 갈색이에요', '꽃봉오리가 다섯 개 맺혔어요'], '마음으로 느낀 것': ['줄기만 남아서 쓸쓸했어요', '국화 향기가 진해서 좋았어요'] } }, difficulty: 0.25 },
              { prompt: '짝과 관찰 기록장을 바꾸어 읽고, 궁금한 점을 하나 물어봐요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 기록장에서 알게 된 계절의 변화는 무엇이었나요?" 두세 명이 말한다. 내 기록장에도 날짜를 꼭 적고, 살펴서 알게 된 것을 한 줄 넘게 쓰기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', cards: ['11월 3일 은행잎이 노랗게 물들었어요', '9월 8일 은행잎이 초록색이에요', '11월 28일 은행잎이 다 떨어졌어요'] }, prompt: '준호의 은행나무 관찰 일기를 날짜 차례대로 놓아 보세요.', target: { order: ['9월 8일 은행잎이 초록색이에요', '11월 3일 은행잎이 노랗게 물들었어요', '11월 28일 은행잎이 다 떨어졌어요'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '살펴서 알게 된 것은 어느 것인가요?', options: ['연못 물 위에 살얼음이 얼었어요', '연못을 보니 기분이 좋았어요', '연못이 쓸쓸해 보였어요'], answer: 0, difficulty: 0.2, explain: '살얼음은 눈으로 보고 알 수 있는 연못의 변화예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '관찰 일기 읽기',
      items: [
        { type: 'table', prompt: '하준이의 감나무 일기를 날짜 차례대로 정리하세요.', columns: ['날짜', '감나무 모습'], rows: 3 },
        { type: 'choice', prompt: '마음으로 느낀 것은 어느 것인가요?', options: ['감이 주황색이에요', '까치가 와서 반가웠어요'], answer: '까치가 와서 반가웠어요' },
        { type: 'short', prompt: '짝의 관찰 기록장에서 알게 된 것을 쓰세요.' },
        { type: 'short', prompt: '짝에게 물어본 궁금한 점을 쓰세요.' },
      ],
      easy: {
        note: '날짜가 이른 쪽부터 읽어요.',
        items: [
          { type: 'choice', prompt: '먼저 쓴 일기에 ○ 하세요.', options: ['9월 10일', '11월 20일'], answer: '9월 10일' },
          { type: 'choice', prompt: '살펴서 알게 된 것에 ○ 하세요.', options: ['감이 주황색이에요', '신났어요'], answer: '감이 주황색이에요' },
          { type: 'draw', prompt: '하준이의 감나무를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 쪽 맨 앞의 달만 보고 놓아도 돼요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '같은 달이 두 쪽 있고, 국화와 상관없는 쪽이 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 날짜를 보지 않고 감 색만으로 차례를 정한다 → 날짜를 먼저 짚게 한다. ② 같은 달 안의 날을 견주지 못한다 → 큰 달력에서 2일과 30일을 손가락으로 짚어 보인다. ③ 느낀 것을 쓸모없다고 여긴다 → 느낀 것도 일기에 소중하다고 말해 준다. 이 story 문항은 이야기가 아닌 일기 날짜 차례라 힌트를 문항마다 따로 썼다.',
  }));

  lessons.push(L(38, {
    title: '여름과 겨울 한 달 날씨 기록 견주기',
    objective: '7월과 1월의 한 달 날씨 기록 막대그래프를 읽고, 계절에 따라 많은 날씨가 어떻게 다른지 말할 수 있다.',
    illustration: ART('two paper-cut bar charts on a board, one for July with a tall bar of rain drops and one for January with a tall bar of suns and a short bar of snowflakes, a child pointing with a ruler', '7월과 1월의 날씨', [
      { motif: 'cloud', x: 300, y: 80, s: 0.6 }, { motif: 'snow', x: 380, y: 110 }, { motif: 'sun', x: 100, y: 190, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"장마는 언제였나요? 우산을 가장 많이 쓴 달은 언제였을까요?" 9차시에 본 일기 예보를 떠올리게 한다. "어느 학교가 날마다 날씨를 기록해 막대그래프로 만들었어요. 막대가 길수록 그 날씨인 날이 많아요." 시연 단추로 막대를 견주는 모습을 보여 준다.',
        student: '여름에 비가 많이 온 날을 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '어느 해 7월 날씨', data: [['맑은 날', 9], ['비 온 날', 15]], unit: '일', xLabel: '날씨', yLabel: '날수', choices: ['맑은 날', '비 온 날'], question: '더 많았던 날씨는?' }, sequence: [{ pick: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 7월과 1월 날씨 그래프 읽기', minutes: 14, tool: 'chart',
            teacher: '"7월에 가장 많았던 날씨는 무엇인가요? 1월은요?" 두 그래프를 차례로 읽는다. 여름에는 장마로 비가 많고, 겨울에는 맑고 건조한 날이 많으며 가끔 눈이 온다는 것을 짚는다. 이 자료는 어느 한 해의 기록이라 해마다 조금씩 다를 수 있다는 것도 말한다.',
            task: '7월과 1월의 날씨 막대그래프를 읽고 물음에 알맞은 날씨를 골라요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '어느 해 7월 날씨 기록이에요. 가장 많았던 날씨는 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '어느 해 7월 날씨', data: [['맑은 날', 9], ['흐린 날', 7], ['비 온 날', 15]], unit: '일', xLabel: '날씨', yLabel: '날수', choices: ['맑은 날', '흐린 날', '비 온 날'], question: '가장 많았던 날씨는?' },
                target: { pick: 2 }, difficulty: 0.05 },
              { prompt: '같은 해 1월 날씨 기록이에요. 가장 많았던 날씨는 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '같은 해 1월 날씨', data: [['맑은 날', 16], ['흐린 날', 9], ['눈 온 날', 6]], unit: '일', xLabel: '날씨', yLabel: '날수', choices: ['맑은 날', '흐린 날', '눈 온 날'], question: '가장 많았던 날씨는?' },
                target: { pick: 0 }, difficulty: 0.15,
                predict: { q: '1월에는 눈 온 날이 가장 많았을까요?', options: ['가장 많았어요', '가장 많지는 않았어요'], answer: 1 },
                conclude: '겨울이라고 날마다 눈이 오지는 않아요. 이 해 1월에는 맑고 차가운 날이 가장 많았어요.' },
              { prompt: '같은 해 1월 날씨 기록이에요. 가장 적었던 날씨는 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', title: '같은 해 1월 날씨', data: [['맑은 날', 16], ['흐린 날', 9], ['눈 온 날', 6]], unit: '일', xLabel: '날씨', yLabel: '날수', choices: ['맑은 날', '흐린 날', '눈 온 날'], question: '가장 적었던 날씨는?' },
                target: { pick: 2 }, difficulty: 0.2 },
              { prompt: '두 달의 비나 눈이 온 날을 함께 나타냈어요. 비나 눈이 온 날이 더 많은 달은 언제인가요?', toolOptions: { type: 'bar', mode: 'read', title: '비나 눈이 온 날', data: [['7월', 15], ['1월', 6]], unit: '일', xLabel: '달', yLabel: '날수', choices: ['7월', '1월'], question: '비나 눈이 온 날이 더 많은 달은?' },
                target: { pick: 0 }, difficulty: 0.2, levels: { challenge: { prompt: '두 달의 비나 눈이 온 날을 함께 나타냈어요. 7월은 1월보다 비나 눈이 온 날이 며칠 더 많나요?', toolOptions: { choices: ['6일', '9일', '15일'], question: '7월은 1월보다 며칠 더 많을까요?' }, target: { pick: 1 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 날씨 자료와 우리 생활', minutes: 12, tool: 'mindmap',
            teacher: '"비 온 날이 많은 7월에는 무엇을 챙겨야 할까요? 맑고 추운 1월에는요?" 날씨 자료로 생활을 준비할 수 있다는 것을 짚는다. 이어 창가로 가서 오늘 하늘을 살피고, 교실 날씨판의 오늘 칸에 날씨 그림 카드를 붙인다.',
            task: '날씨 자료를 보고 그 달에 챙길 것을 나누고, 오늘 날씨를 살펴 날씨판에 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '7월과 1월에 챙길 것을 나누어 보세요.', toolOptions: { topic: '날씨 자료로 준비해요', slots: ['비가 잦은 7월', '맑고 추운 1월'], cards: ['장화', '우비', '목도리', '손난로'] },
                target: { sort: { '비가 잦은 7월': ['장화', '우비'], '맑고 추운 1월': ['목도리', '손난로'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '7월과 1월에 챙길 것을 나누어 보세요. 날씨와 상관없는 카드는 남겨요.', toolOptions: { cards: ['장화', '우비', '목도리', '손난로', '연필깎이'] } } } },
              { prompt: '창가에서 오늘 하늘을 살피고, 교실 날씨판의 오늘 칸에 날씨 그림 카드를 붙여요. 다 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '날씨 기록 그래프로 알 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '그래프로 알아요', cards: ['어느 날씨가 많았는지', '비 온 날이 며칠인지', '내일 무슨 일이 생길지', '누가 우산을 잃어버렸는지'] },
                target: { pick: ['어느 날씨가 많았는지', '비 온 날이 며칠인지'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"7월 그래프만 보았다면 겨울 날씨를 알 수 있었을까요?" 두 달을 견주어야 계절마다 많은 날씨가 다르다는 것이 보인다는 것을 되짚는다. 교실 날씨판은 한 달 동안 이어 붙여 12월에 우리 반 그래프로 만든다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '어느 해 4월 날씨', data: [['맑은 날', 14], ['흐린 날', 10], ['비 온 날', 6]], unit: '일', xLabel: '날씨', yLabel: '날수', choices: ['맑은 날', '흐린 날', '비 온 날'], question: '가장 많았던 날씨는?' }, prompt: '어느 해 4월 날씨 그래프에서 가장 많았던 날씨를 골라 보세요.', target: { pick: 0 }, difficulty: 0.1 },
          { type: 'choice', prompt: '여름 7월에 비 온 날이 많은 까닭으로 알맞은 것은?', options: ['장마가 있어서', '눈이 녹아서', '해가 일찍 져서'], answer: 0, difficulty: 0.15, explain: '우리나라는 여름에 장마가 있어 비가 오는 날이 많아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 달 날씨 기록',
      items: [
        { type: 'figure', wide: true, prompt: '그래프를 보고 가장 많았던 날씨를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'bar', mode: 'read', max: 15, scale: 15, title: '어느 해 7월 날씨', data: [['맑은 날', 9], ['흐린 날', 7], ['비 온 날', 15]], unit: '일', yLabel: '날수' }, caption: '가장 많았던 날씨: (        )' }], answer: '비 온 날' },
        { type: 'figure', wide: true, prompt: '그래프를 보고 가장 적었던 날씨를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'bar', mode: 'read', max: 16, scale: 16, title: '같은 해 1월 날씨', data: [['맑은 날', 16], ['흐린 날', 9], ['눈 온 날', 6]], unit: '일', yLabel: '날수' }, caption: '가장 적었던 날씨: (        )' }], answer: '눈 온 날' },
        { type: 'table', prompt: '오늘부터 닷새 동안 하늘을 보고 날씨를 쓰세요.', columns: ['날짜', '날씨'], rows: 5 },
        { type: 'short', prompt: '두 달의 그래프를 견주어 알게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '막대가 길수록 그 날씨인 날이 많아요.',
        items: [
          { type: 'figure', wide: true, prompt: '막대가 가장 긴 날씨에 ○ 하세요.', tool: 'chart', figures: [{ options: { type: 'bar', mode: 'read', max: 15, scale: 15, title: '어느 해 7월 날씨', data: [['맑은 날', 9], ['비 온 날', 15]], unit: '일', yLabel: '날수' }, caption: '맑은 날 · 비 온 날' }], answer: '비 온 날' },
          { type: 'choice', prompt: '비가 많이 오는 달에 챙길 것에 ○ 하세요.', options: ['우비', '손난로'], answer: '우비' },
          { type: 'draw', prompt: '오늘 하늘을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '막대 끝에 날수가 보여요. 막대 길이만 견주어 골라요.',
      base: '막대 길이를 견주어 고르고 확인을 눌러요.',
      challenge: '두 달을 견주는 그래프에서 날수 차이를 구하고, 날씨와 상관없는 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 겨울에는 눈 온 날이 가장 많다고 여긴다 → 1월 그래프에서 막대 길이를 견주게 한다. ② 날수의 큰 수(15, 16)를 어려워한다 → 수를 다 읽지 않아도 막대 길이로 견줄 수 있다고 알려 준다. ③ 그래프 자료는 수업을 위해 지은 어느 한 해의 예시 자료이며, 실제 지역 자료를 쓰려면 기상청 날씨누리의 지난 날씨를 교사가 미리 정리해 둔다.',
  }));

  lessons.push(L(39, {
    title: '내 나무의 사계절 표 꾸미기',
    objective: '나무가 계절마다 바뀌는 차례를 고리로 놓고, 색종이 조각으로 계절마다의 나무 모습을 꾸며 사계절 표를 만들 수 있다.',
    illustration: ART('a paper-cut four-panel table showing the same tree with white blossoms in spring, thick green leaves in summer, red and yellow leaves in autumn, and bare brown branches with snow in winter, colored paper scraps and glue on a desk', '내 나무의 사계절', [
      { motif: 'tree', x: 100, y: 214, color: 'mint' }, { motif: 'tree', x: 380, y: 214, color: 'coral' }, { motif: 'leaf', x: 240, y: 196, color: 'buttercup' }]),
    safety: ['가위는 날을 아래로 향하게 들고 다녀요.', '풀을 쓴 손은 끝나고 바로 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"29차시에 정한 내 나무는 지금 어떤 모습이었나요? 봄에는 어땠을까요?" 33차시 사진 표를 다시 꺼내 본다. "오늘은 내 나무가 한 해 동안 어떻게 바뀌는지 고리와 그림으로 정리해요." 시연 단추로 두 장면이 고리에 놓이는 모습을 보여 준다.',
        student: '내 나무가 지금 어떤 모습인지 짝에게 한 문장으로 말해 봐요.',
        demo: { tool: 'lifecycle', options: { center: '내 나무', slots: 2, cards: ['새싹이 돋아요', '잎이 떨어져요'], shuffle: false }, sequence: [{ order: ['새싹이 돋아요', '잎이 떨어져요'], cyclic: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 나무의 사계절 고리', minutes: 10, tool: 'lifecycle',
            teacher: '"잎이 다 떨어진 겨울나무 다음에는 무엇이 올까요?" 고리는 겨울에서 끝나지 않고 다시 봄으로 이어진다는 것을 짚는다. 잎이 진 나무가 죽은 것이 아니라 봄을 기다리며 눈(겨울눈)을 달고 있다는 것을 사진으로 보여 준다.',
            task: '나무의 계절 모습 카드를 계절이 바뀌는 차례대로 고리에 놓아요.',
            levels: RING_LV,
            items: [
              { prompt: '은행나무의 계절 모습을 계절이 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '은행나무', slots: 4, cards: ['연둣빛 새잎이 돋아요', '짙은 초록 잎이 무성해요', '잎이 노랗게 물들어요', '잎이 지고 겨울눈만 남아요'] },
                target: { order: ['연둣빛 새잎이 돋아요', '짙은 초록 잎이 무성해요', '잎이 노랗게 물들어요', '잎이 지고 겨울눈만 남아요'], cyclic: true }, difficulty: 0.15,
                hints: ['카드마다 잎의 색과 양을 보고 어느 계절 모습인지 먼저 떠올린 뒤 이어 가요.', '이웃한 두 카드를 보세요. 잎이 노랗게 물든 다음에는 잎이 어떻게 될까요?', '새잎(봄) → 무성한 초록 잎(여름) → 노란 잎(가을) → 겨울눈만 남음(겨울)이에요.'] },
              { prompt: '벚나무의 계절 모습을 계절이 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '벚나무', slots: 4, cards: ['하얀 꽃이 활짝 피어요', '작은 버찌가 까맣게 익어요', '잎이 붉게 물들어요', '빈 가지에 눈이 쌓여요'] },
                target: { order: ['하얀 꽃이 활짝 피어요', '작은 버찌가 까맣게 익어요', '잎이 붉게 물들어요', '빈 가지에 눈이 쌓여요'], cyclic: true }, difficulty: 0.25,
                hints: ['꽃이 핀 다음 열매가 맺혀요. 카드마다 꽃·열매·잎·눈 가운데 무엇이 있는지 보고 계절을 떠올려요.', '버찌는 꽃이 지고 나서 익어요. 꽃 카드 바로 다음에 무엇이 와야 할까요?', '하얀 꽃(봄) → 까만 버찌(여름) → 붉은 잎(가을) → 눈 쌓인 빈 가지(겨울)예요.'],
                predict: { q: '겨울에 잎이 다 진 벚나무는 봄에 다시 꽃을 피울까요?', options: ['다시 피워요', '다시는 못 피워요'], answer: 0 },
                conclude: '잎이 진 나무는 겨울눈을 달고 봄을 기다려요. 나무의 모습은 해마다 돌고 돌아요.' },
              { prompt: '화단 개나리의 계절 모습을 계절이 바뀌는 차례대로 고리에 놓아 보세요.', toolOptions: { center: '개나리', slots: 4, cards: ['잎보다 노란 꽃이 먼저 피어요', '초록 잎이 우거져요', '잎이 누렇게 시들어요', '잎이 지고 가지만 남아요'] },
                target: { order: ['잎보다 노란 꽃이 먼저 피어요', '초록 잎이 우거져요', '잎이 누렇게 시들어요', '잎이 지고 가지만 남아요'], cyclic: true }, difficulty: 0.2,
                hints: ['개나리는 꽃이 핀 다음 잎이 나요. 카드마다 꽃과 잎의 모습을 보고 계절을 떠올려요.', '가지만 남은 개나리 다음에는 무엇이 다시 올까요? 고리는 이어져 있어요.', '노란 꽃(봄) → 우거진 초록 잎(여름) → 시든 잎(가을) → 가지만 남음(겨울)이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색종이로 사계절 나무 꾸미기', minutes: 17, tool: 'collage',
            teacher: '"봄 나무에는 어떤 조각을 붙일까요? 겨울 나무에는요?" 계절마다 나무에 붙일 조각을 말하게 한다. 화면에서 계절 나무를 꾸미고, 활동지의 사계절 표 네 칸에도 색종이 조각을 오려 붙인다. 마지막 내 나무 꾸미기는 정답이 없다.',
            task: '조각을 골라 계절마다의 나무를 꾸미고, 활동지 사계절 표에도 오려 붙여요.',
            levels: { easy: { shapes: ['circle', 'triangle', 'rect', 'leaf', 'square'], colors: ['하양', '빨강', '주황', '노랑', '초록', '파랑', '갈색'] }, base: {}, challenge: {} },
            items: [
              { prompt: '여름 나무를 꾸며 보세요. 갈색 긴 네모 줄기 하나에 초록 나뭇잎을 네 장 넘게 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', min: 1 }, { shape: 'leaf', color: '초록', min: 4 }] }, difficulty: 0.05 },
              { prompt: '겨울 나무를 꾸며 보세요. 갈색 긴 네모 줄기 하나에 하양 동그라미 눈을 세 개 넘게 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', min: 1 }, { shape: 'circle', color: '하양', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '겨울 나무를 꾸며 보세요. 갈색 줄기 둘, 하양 동그라미 눈 세 개 넘게, 바닥에 쌓인 하양 네모 눈 하나도 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', min: 2 }, { shape: 'circle', color: '하양', min: 3 }, { shape: 'square', color: '하양', min: 1 }] } } } },
              { prompt: '내 나무가 지금 계절에 어떤 모습인지 꾸미고, 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['지금 계절에 맞는 잎 색을 골랐어요', '줄기와 가지를 붙였어요', '무엇을 보고 그렇게 꾸몄는지 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구의 사계절 표에서 가장 많이 달라진 계절은 어디였나요?" 두세 명의 표를 실물 화상기로 보여 준다. 봄 칸은 3월에 내 나무를 다시 보고 고쳐 꾸며도 된다고 알린다. 가위와 풀을 정리하고 손을 씻는다.',
        exitTicket: [
          { type: 'tool', tool: 'lifecycle', options: { center: '감나무', slots: 4, cards: ['연둣빛 잎이 나요', '초록 감이 열려요', '주황 감이 익어요', '빈 가지에 까치밥만 남아요'] }, prompt: '감나무의 계절 모습을 계절 차례대로 고리에 놓아 보세요.', target: { order: ['연둣빛 잎이 나요', '초록 감이 열려요', '주황 감이 익어요', '빈 가지에 까치밥만 남아요'], cyclic: true }, difficulty: 0.25 },
          { type: 'choice', prompt: '겨울에 잎이 다 진 나무에 대해 바르게 말한 것은?', options: ['겨울눈을 달고 봄을 기다려요', '나무가 죽었어요', '다시는 잎이 나지 않아요'], answer: 0, difficulty: 0.15, explain: '잎이 진 나무는 겨울눈을 달고 있다가 봄에 새잎을 내요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 나무의 사계절 표',
      items: [
        { type: 'table', prompt: '계절마다 내 나무 모습을 색종이로 꾸미고 한 낱말로 쓰세요.', columns: ['봄', '여름', '가을', '겨울'], rows: 2 },
        { type: 'choice', prompt: '나뭇잎이 노랗게 물드는 계절은?', options: ['봄', '여름', '가을', '겨울'], answer: '가을' },
        { type: 'short', prompt: '겨울 다음에 내 나무가 어떻게 될지 쓰세요.' },
        { type: 'check', prompt: '내 표를 점검하고 ✓ 하세요.', options: ['네 계절 칸을 모두 채웠어요', '계절마다 다른 모습으로 꾸몄어요', '내 나무 이름을 적었어요'] },
      ],
      easy: {
        note: '봄 새잎 → 여름 초록 → 가을 단풍 → 겨울 빈 가지',
        items: [
          { type: 'choice', prompt: '여름 나무에 ○ 하세요.', options: ['초록 잎이 무성해요', '잎이 다 졌어요'], answer: '초록 잎이 무성해요' },
          { type: 'choice', prompt: '겨울 나무에 ○ 하세요.', options: ['빈 가지에 눈이 쌓여요', '꽃이 활짝 피어요'], answer: '빈 가지에 눈이 쌓여요' },
          { type: 'draw', prompt: '지금 내 나무의 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고리에 맞는 자리면 초록 테두리가 생겨요. 콜라주 조각 종류가 줄어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '고리가 돌지 않아 처음 놓은 자리부터 이어 가야 하고, 겨울 나무 조건이 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 겨울나무를 죽은 나무로 여긴다 → 겨울눈 사진을 보여 주고 3월에 다시 보러 가기로 한다. ② 고리를 겨울에서 끝내려 한다 → 고리는 끝이 없이 다시 봄으로 이어진다는 것을 손가락으로 한 바퀴 돌며 보인다. ③ 늘푸른나무(소나무)를 고른 모둠은 잎 색이 거의 그대로라는 것도 알게 된 것이라고 인정해 준다. lifecycle 교구를 생물의 한살이가 아닌 나무의 계절 모습에 쓰므로 힌트를 문항마다 썼다.',
  }));

  lessons.push(L(40, {
    title: '관찰과 자료 읽기 돌아보고 내 나무 다시 보기',
    objective: '여러 계절의 자료를 모아 견주어야 계절의 변화를 알 수 있다는 것을 말하고, 내 관찰 기록을 스스로 돌아볼 수 있다.',
    illustration: ART('a child standing again in front of the same ginkgo tree, now with bare branches and a paper name tag, holding an observation book open to two drawings side by side, friends comparing their books', '다시 만난 내 나무', [
      { motif: 'tree', x: 200, y: 214, color: 'cream' }, { motif: 'leaf', x: 260, y: 208, color: 'buttercup' }], 'snow'),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"33차시부터 사진, 관찰표, 그래프, 달력, 일기를 읽었어요. 어느 자료가 가장 기억에 남나요?" 두세 명이 말한다. "이 자료들은 모두 한 계절만 보았나요, 여러 계절을 견주었나요?" 오늘은 공부를 돌아보고 내 나무를 다시 보러 간다고 알린다.',
        student: '가장 기억에 남는 자료 하나를 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '어떻게 알까?', slots: ['한 번 보면 알아요', '여러 계절을 견주어야 알아요'], cards: ['오늘 날씨', '나뭇잎이 언제 지는지'], shuffle: false }, sequence: [{ sort: { '한 번 보면 알아요': ['오늘 날씨'], '여러 계절을 견주어야 알아요': ['나뭇잎이 언제 지는지'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 번 보면 알까, 견주어야 알까', minutes: 10, tool: 'mindmap',
            teacher: '"오늘 날씨는 창밖을 한 번 보면 알 수 있어요. 그럼 옷차림이 어떻게 바뀌는지는요?" 카드마다 이유를 말하게 한 뒤 나누게 한다. \'한 계절만 보아도 계절의 변화를 알 수 있다\'는 생각이 왜 맞지 않는지 오늘 자료로 되짚는다.',
            task: '알고 싶은 것을 한 번 보면 아는 것과 여러 계절을 견주어야 아는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '알고 싶은 것을 나누어 보세요.', toolOptions: { topic: '어떻게 알까?', slots: ['한 번 보면 알아요', '여러 계절을 견주어야 알아요'], cards: ['지금 연못에 물이 있는지', '오늘 내가 입은 옷', '연못 물이 언제 어는지', '옷차림이 어떻게 바뀌는지'] },
                target: { sort: { '한 번 보면 알아요': ['지금 연못에 물이 있는지', '오늘 내가 입은 옷'], '여러 계절을 견주어야 알아요': ['연못 물이 언제 어는지', '옷차림이 어떻게 바뀌는지'] } }, difficulty: 0.25,
                levels: { challenge: { prompt: '알고 싶은 것을 나누어 보세요. 살펴서 알 수 없는 카드는 남겨요.', toolOptions: { cards: ['지금 연못에 물이 있는지', '오늘 내가 입은 옷', '연못 물이 언제 어는지', '옷차림이 어떻게 바뀌는지', '눈사람이 무슨 꿈을 꾸는지'] } } } },
              { prompt: '계절의 변화를 알아보는 바른 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 방법', cards: ['같은 곳을 계절마다 사진 찍어요', '날짜를 적어 관찰 일기를 써요', '한 번 보고 다 안다고 해요', '좋아하는 계절만 살펴요'] },
                target: { pick: ['같은 곳을 계절마다 사진 찍어요', '날짜를 적어 관찰 일기를 써요'] }, difficulty: 0.15 },
              { prompt: '같은 곳을 계절마다 견주려고 사진을 찍어요. 지킬 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '사진 찍을 때 지켜요', cards: ['늘 같은 자리에서 찍어요', '찍은 날짜를 적어 둬요', '찍을 때마다 다른 곳으로 가요', '마음에 안 드는 계절 사진은 지워요'] },
                target: { pick: ['늘 같은 자리에서 찍어요', '찍은 날짜를 적어 둬요'] }, difficulty: 0.2,
                predict: { q: '봄에는 화단, 가을에는 운동장을 찍으면 견줄 수 있을까요?', options: ['견줄 수 있어요', '견주기 어려워요'], answer: 1 },
                conclude: '같은 자리에서 찍고 날짜를 적어야 무엇이 달라졌는지 바르게 견줄 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 나무 다시 보고 기록 돌아보기', minutes: 16, tool: 'emotion',
            teacher: '모둠별로 내 나무에 가서 29차시와 같은 자리에서 다시 그림을 그리고 날짜를 적는다. 교실로 돌아와 두 그림을 나란히 놓고 달라진 점을 하나 말한다. 이어 내 기록을 스스로 돌아보게 하고, "어떤 마음이든 솔직하게 고르면 돼요."라고 말한다.',
            task: '내 나무를 다시 보고 그린 뒤, 내 관찰 기록을 스스로 돌아봐요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '모둠별로 내 나무에 가서 29차시와 같은 자리에서 다시 그리고 날짜를 적어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '나는 관찰 기록에 날짜와 달라진 점을 얼마나 잘 적었나요?', toolOptions: { mode: 'scale', situation: '33차시부터 사진 표, 관찰표, 일기를 기록장에 모았어요.', feeling: '뿌듯함', ask: '날짜와 달라진 점을 얼마나 잘 적었나요?', scaleLabels: { 1: '조금', 5: '아주 잘' }, after: '빠진 날짜는 지금 채워 넣어도 괜찮아요.' }, target: { level: 'any' }, difficulty: 0 },
              { prompt: '그래프와 달력 같은 자료를 읽는 것이 얼마나 자신 있나요?', toolOptions: { mode: 'scale', situation: '옷차림 그래프, 날씨 그래프, 명절 달력을 읽었어요.', feeling: '설렘', ask: '자료 읽기가 얼마나 자신 있나요?', scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '어려운 자료는 짝과 함께 다시 읽어 봐요.' }, target: { level: 'any' }, difficulty: 0 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"두 번 그린 내 나무를 견주어 무엇을 알게 되었나요?" 모둠마다 한 문장으로 말한다. 다음 시간부터는 알게 된 것을 친구들에게 까닭과 함께 설명하는 공부를 한다고 알리고, 기록장을 사물함에 넣는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 알까?', slots: ['한 번 보면 알아요', '여러 계절을 견주어야 알아요'], cards: ['지금 하늘에 구름이 있는지', '해가 지는 때가 어떻게 바뀌는지'] }, prompt: '알고 싶은 것을 나누어 보세요.', target: { sort: { '한 번 보면 알아요': ['지금 하늘에 구름이 있는지'], '여러 계절을 견주어야 알아요': ['해가 지는 때가 어떻게 바뀌는지'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"가을 사진 한 장만 보면 계절의 변화를 다 알 수 있어요."에 대해 바르게 말한 것은?', options: ['여러 계절을 견주어야 변화를 알 수 있어요', '맞아요, 한 장이면 돼요', '사진은 쓸모가 없어요'], answer: 0, difficulty: 0.15, explain: '한 장의 사진에는 그때의 모습만 담겨요. 여러 계절을 모아 견주어야 변화가 보여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 만난 내 나무',
      items: [
        { type: 'table', prompt: '두 번 본 내 나무를 견주어 쓰세요.', columns: ['살핀 것', '29차시', '오늘'], cells: [['날짜', '', ''], ['잎의 색', '', ''], ['달린 잎의 수', '', '']] },
        { type: 'draw', prompt: '오늘 본 내 나무를 그리세요.' },
        { type: 'short', prompt: '두 번 견주어 알게 된 것을 쓰세요.' },
        { type: 'check', prompt: '내가 한 것에 ✓ 하세요.', options: ['같은 자리에서 다시 그렸어요', '날짜를 적었어요', '달라진 점을 찾았어요'] },
      ],
      easy: {
        note: '처음 본 날과 오늘을 나란히!',
        items: [
          { type: 'draw', prompt: '오늘 본 내 나무를 그리세요.' },
          { type: 'choice', prompt: '계절의 변화를 알려면?', options: ['여러 번 견주어 봐요', '한 번만 봐요'], answer: '여러 번 견주어 봐요' },
          { type: 'short', prompt: '내 나무에서 달라진 것을 한 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 자기 평가는 세 칸에서 골라요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '살펴서 알 수 없는 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 날씨처럼 한 번 보면 아는 것과 변화처럼 견주어야 아는 것을 헷갈린다 → \'지금\'과 \'바뀌는지\'라는 말에 밑줄을 긋게 한다. ② 자기 평가에서 모두 높게 고르려 한다 → 점수가 아니라 다음에 무엇을 할지 찾으려는 것이라고 말해 준다. ③ 날씨가 나쁘면 교실 창가에서 내 나무를 보고 그린다. 29차시 그림이 없는 학생은 33차시 사진 표와 견준다.',
  }));

  // ───────────────────────── 41~48차시: 알게 된 것을 까닭과 함께 설명하기(탐구 결과 설명) ─────────────────────────

  lessons.push(L(41, {
    title: '"~해서 ~해요"로 계절과 생활 이어 말하기',
    objective: '계절에 생긴 일과 그 때문에 달라진 생활을 짝 짓고, "~해서 ~해요" 문장으로 이어 말할 수 있다.',
    illustration: ART('two paper-cut speech bubbles linked by a ribbon, one showing a cold wind blowing leaves and the other a child wrapping a red scarf, with a small arrow between them', '추워서 목도리를 둘러요', [
      { motif: 'leaf', x: 110, y: 180, color: 'buttercup', r: -20 }, { motif: 'leaf', x: 150, y: 196, color: 'peach', r: 30 }, { motif: 'house', x: 380, y: 214, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침에 겉옷을 입고 온 사람, 왜 입었나요?" 대답을 "추워서 겉옷을 입었어요."처럼 한 문장으로 다시 말해 준다. 칠판에 "(까닭)해서 (생활)해요" 틀을 쓴다. "33차시부터 모은 자료로 알게 된 것을 이 틀로 말하면 친구가 왜 그런지 알 수 있어요." 시연 단추로 까닭 카드가 생활 옆에 놓이는 모습을 보여 준다.',
        student: '오늘 내가 입은 옷을 "~해서 ~입었어요."로 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '왜 그럴까?', slots: [{ id: 'd1', label: '겉옷을 입어요' }], cards: ['아침 바람이 차가워서', '운동장이 넓어서'], shuffle: false }, sequence: [{ match: { d1: '아침 바람이 차가워서' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 생활에 맞는 까닭 잇기', minutes: 13, tool: 'mindmap',
            teacher: '가지에 적힌 생활을 먼저 읽고 "왜 그렇게 할까요?"라고 묻는다. 까닭 카드를 고른 뒤에는 "까닭을 앞에, 생활을 뒤에 붙여 읽어 보세요."라고 해 "햇볕이 뜨거워서 부채를 들고 다녀요."처럼 소리 내어 이어 읽게 한다. "계절이랑 생활은 상관없어요."라는 학생에게는 "그럼 한겨울에 부채를 들고 다닐까요?"라고 되묻는다.',
            task: '생활 가지마다 그렇게 하는 까닭 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생활마다 그렇게 하는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그렇게 할까?', slots: [{ id: 's1', label: '두꺼운 이불을 덮어요' }, { id: 's2', label: '부채를 들고 다녀요' }, { id: 's3', label: '우산을 늘 챙겨요' }], cards: ['밤이 추워져서', '햇볕이 뜨거워서', '장마로 비가 자주 와서'] },
                target: { match: { s1: '밤이 추워져서', s2: '햇볕이 뜨거워서', s3: '장마로 비가 자주 와서' } }, difficulty: 0.1,
                hints: ['가지의 생활을 읽고, 그 일을 하는 날의 날씨를 먼저 떠올려요.', '이은 카드를 앞에, 생활을 뒤에 붙여 읽어 보세요. 말이 되나요?', '추운 밤에는 두꺼운 이불, 뜨거운 햇볕에는 부채, 비가 잦은 장마에는 우산이에요.'],
                levels: { challenge: { prompt: '생활마다 까닭을 이어 보세요. 계절과 상관없는 까닭 카드는 남겨요.', toolOptions: { cards: ['밤이 추워져서', '햇볕이 뜨거워서', '장마로 비가 자주 와서', '이불이 새것이라서'] } } } },
              { prompt: '놀이와 일마다 그렇게 하는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그렇게 할까?', slots: [{ id: 's1', label: '썰매를 타요' }, { id: 's2', label: '계곡에서 물놀이해요' }, { id: 's3', label: '감을 따요' }], cards: ['논에 얼음이 꽁꽁 얼어서', '날이 무더워서', '감이 주황빛으로 익어서'] },
                target: { match: { s1: '논에 얼음이 꽁꽁 얼어서', s2: '날이 무더워서', s3: '감이 주황빛으로 익어서' } }, difficulty: 0.15,
                hints: ['그 놀이나 일을 하려면 무엇이 먼저 있어야 하는지 떠올려요.', '이은 카드와 생활을 붙여 읽어 보세요. 그 까닭이 있어야 그 일을 할 수 있나요?', '얼음이 얼어야 썰매, 무더워야 물놀이, 감이 익어야 감 따기예요.'],
                levels: { challenge: { prompt: '놀이와 일마다 까닭을 이어 보세요. 계절과 상관없는 까닭 카드는 남겨요.', toolOptions: { cards: ['논에 얼음이 꽁꽁 얼어서', '날이 무더워서', '감이 주황빛으로 익어서', '친구가 같이 가자고 해서'] } } } },
              { prompt: '계절 때문에 하는 생활만 골라 보세요.', toolOptions: { mode: 'pick', topic: '계절과 생활', basket: '계절 때문에 해요', cards: ['추워서 장갑을 껴요', '벼가 익어서 벼를 베어요', '밥을 먹고 이를 닦아요', '생일이라 케이크를 먹어요'] },
                target: { pick: ['추워서 장갑을 껴요', '벼가 익어서 벼를 베어요'] }, difficulty: 0.2,
                predict: { q: '계절과 우리 생활은 이어져 있을까요?', options: ['이어져 있어요', '상관없어요'], answer: 0 },
                conclude: '날씨와 자연이 바뀌면 옷·놀이·일이 따라 바뀌어요. 하지만 이 닦기처럼 계절과 상관없이 늘 하는 일도 있어요.',
                hints: ['카드마다 "계절이 바뀌면 이 일도 바뀔까?" 하고 물어보세요.', '고른 카드 가운데 한겨울에도 한여름에도 똑같이 하는 일이 있나요?', '추워서 장갑 끼기, 벼가 익어서 벼 베기는 계절 때문이에요. 이 닦기와 생일은 계절과 상관없어요.'],
                levels: { easy: { toolOptions: { cards: ['추워서 장갑을 껴요', '벼가 익어서 벼를 베어요', '밥을 먹고 이를 닦아요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 까닭을 넣어 설명 문장 만들기', minutes: 13, tool: 'story',
            teacher: '"민지가 한 말에서 빈칸에 들어갈 까닭을 찾아 볼까요?" 빈칸을 채운 문장을 다 같이 읽는다. 마지막에는 내가 겪은 계절 생활 하나를 "~해서 ~해요."로 짝에게 말한다. 짝이 들은 문장에 까닭이 있으면 엄지를 들어 준다. "그냥요", "좋아서요"처럼 계절과 이어지지 않는 까닭이 나오면 "그날 날씨는 어땠나요?"라고 다시 묻는다.',
            task: '친구의 설명 문장 빈칸에 까닭을 넣고, 내 계절 생활을 까닭과 함께 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지의 설명 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '민지', label: '바람이 ___ 사람들이 목도리를 둘러요.' }, { id: 'f2', who: '민지', label: '날씨가 ___ 냉장고에 수박을 넣어 두어요.' }], cards: ['차가워져서', '무더워서', '길어져서'] },
                target: { fill: { f1: '차가워져서', f2: '무더워서' } }, difficulty: 0.1,
                hints: ['빈칸 뒤의 생활을 읽고, 그렇게 하는 날의 날씨를 떠올려 까닭을 골라요.', '빈칸을 채운 문장을 소리 내어 읽어 보세요. 그 날씨에 정말 그 일을 하나요?', '바람이 차가워져서 목도리를 두르고, 날씨가 무더워서 수박을 차갑게 두어요.'],
                levels: { easy: { prompt: '민지의 설명 문장을 완성해 보세요.', toolOptions: { slots: [{ id: 'f1', who: '민지', label: '바람이 ___ 사람들이 목도리를 둘러요.' }], cards: ['차가워져서', '무더워서'] }, target: { fill: { f1: '차가워져서' } } } } },
              { prompt: '준호의 설명 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '가을에 벼가 ___ 농부가 벼를 베어요.' }, { id: 'f2', who: '준호', label: '늦가을에 배추를 ___ 집집마다 김장을 해요.' }], cards: ['누렇게 익어서', '거두어서', '심어서'] },
                target: { fill: { f1: '누렇게 익어서', f2: '거두어서' } }, difficulty: 0.2, levels: { challenge: { toolOptions: { cards: ['누렇게 익어서', '거두어서', '심어서', '꽃이 피어서'] } } },
                hints: ['빈칸 뒤의 일을 하려면 그 앞에 어떤 일이 있어야 하는지 떠올려요.', '김장은 다 자란 배추로 해요. 막 심은 배추로 김장을 할 수 있을까요?', '벼가 누렇게 익어서 베고, 배추를 거두어서 김장을 해요.'] },
              { prompt: '내가 겪은 계절 생활 하나를 "~해서 ~해요."로 짝에게 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝에게서 들은 문장 가운데 까닭이 잘 들어간 문장을 소개해 주세요." 두세 명이 말한다. 칠판의 "(까닭)해서 (생활)해요" 틀은 다음 시간 발표 쪽지에도 쓴다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '왜 그럴까?', slots: [{ id: 's1', label: '손난로를 챙겨요' }, { id: 's2', label: '얼음물을 챙겨요' }], cards: ['손이 꽁꽁 시려서', '땀이 많이 나서'] }, prompt: '생활마다 그렇게 하는 까닭을 이어 보세요.', target: { match: { s1: '손이 꽁꽁 시려서', s2: '땀이 많이 나서' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '까닭이 들어간 설명 문장은?', options: ['눈이 쌓여서 눈사람을 만들어요.', '눈사람을 만들어요.', '눈사람은 하얘요.'], answer: 0, difficulty: 0.15, explain: '"눈이 쌓여서"가 까닭이에요. 까닭이 있으면 왜 그 일을 하는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '까닭을 넣어 말해요',
      items: [
        { type: 'table', prompt: '까닭과 생활을 이어 쓰세요.', columns: ['까닭(~해서)', '생활(~해요)'], cells: [['눈이 와서', ''], ['', '선풍기를 켜요'], ['', '']] },
        { type: 'blank', prompt: '빈칸을 채워 설명 문장을 완성하세요.', text: '날씨가 (          ) 긴소매 옷을 입어요.' },
        { type: 'choice', prompt: '계절 때문에 하는 생활에 ○ 하세요.', options: ['더워서 부채질을 해요', '아침마다 세수를 해요', '책을 읽어요'], answer: '더워서 부채질을 해요' },
        { type: 'short', prompt: '내가 겪은 계절 생활 하나를 "~해서 ~해요."로 쓰세요.' },
      ],
      easy: {
        note: '(까닭)해서 (생활)해요.',
        items: [
          { type: 'choice', prompt: '추워서 하는 일에 ○ 하세요.', options: ['장갑을 껴요', '물놀이를 해요'], answer: '장갑을 껴요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '더워서 (          )을 먹어요.' },
          { type: 'draw', prompt: '추워서 하는 일 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 고를 카드와 빈칸이 줄어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '계절과 상관없는 까닭 카드가 섞여 있어요. 그런 카드는 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 까닭과 생활의 앞뒤를 바꿔 "장갑을 껴서 추워요"라고 말한다 → 카드를 앞에, 가지 글을 뒤에 붙여 읽게 한다. ② 계절과 생활은 상관없다고 여긴다 → "한겨울에 부채, 한여름에 목도리"처럼 계절을 바꿔 물어 어색함을 느끼게 한다. ③ 이 닦기처럼 늘 하는 일까지 계절 때문이라고 고른다 → "여름에도 겨울에도 하나요?"로 가르게 한다. 이 차시의 mindmap match는 근거 잇기라 문항마다 힌트를 직접 썼다.',
  }));

  lessons.push(L(42, {
    title: '탐구 결과 발표 차례 정하고 발표 쪽지 쓰기',
    objective: '탐구 결과를 물음 → 살핀 방법 → 알게 된 것 → 까닭의 차례로 정리하고, 내 탐구 결과를 발표 쪽지에 쓸 수 있다.',
    illustration: ART('a child holding a small paper note card in front of a class, the note card divided into four colored boxes with a question mark, a magnifying glass, a light bulb and an arrow', '내 탐구를 알려요', [
      { motif: 'star', x: 120, y: 190, color: 'buttercup', s: 0.7 }, { motif: 'tree', x: 380, y: 214, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '32차시 탐구 계획서와 33~40차시 기록장을 책상 위에 꺼내게 한다. "친구에게 내 탐구를 알려 주려면 무엇부터 말할까요?" 학생 답을 칠판에 붙임 딱지로 붙이고, "궁금했던 것 → 어떻게 살폈는지 → 알게 된 것 → 왜 그런지"로 다시 줄 세운다. 시연 단추로 두 장의 카드가 차례대로 놓이는 모습을 보여 준다.',
        student: '내 탐구 계획서를 펴고, 내가 궁금했던 물음을 짝에게 읽어 줘요.',
        demo: { tool: 'story', options: { cards: [{ id: 'q', text: '궁금했던 것을 말해요', motif: 'star' }, { id: 'a', text: '알게 된 것을 말해요', motif: 'sun' }], slots: 2, shuffle: false }, sequence: [{ order: ['q', 'a'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구의 발표를 차례대로', minutes: 12, tool: 'story',
            teacher: '카드마다 "이건 물음인가요, 방법인가요, 알게 된 것인가요, 까닭인가요?"라고 먼저 묻는다. 물음은 "~할까?"로 끝나고, 방법에는 "살폈어요·세었어요"가, 까닭에는 "~해서"가 들어간다는 것을 짚는다. 알게 된 것과 까닭을 헷갈리면 "알게 된 것은 눈으로 본 것, 까닭은 왜 그런지예요."라고 말한다.',
            task: '친구의 발표 카드를 처음부터 끝까지 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아의 은행나무 발표를 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'q', text: '은행잎은 언제 노래질까?' }, { id: 'how', text: '9월과 11월에 같은 자리에서 사진을 찍었어요' }, { id: 'find', text: '11월 사진에서 잎이 노랬어요' }, { id: 'why', text: '날씨가 쌀쌀해져서 잎이 물들어요' }] },
                target: { order: ['q', 'how', 'find', 'why'] }, difficulty: 0.1,
                hints: ['발표는 궁금했던 것으로 시작해서, 어떻게 살폈는지, 무엇을 알았는지, 왜 그런지로 이어져요.', '"~할까?"로 끝나는 카드가 맨 앞인가요? "~해서"가 든 카드는 맨 끝인가요?', '물음(언제 노래질까?) → 방법(사진을 찍었어요) → 알게 된 것(잎이 노랬어요) → 까닭(쌀쌀해져서)이에요.'] },
              { prompt: '하준이의 옷차림 발표를 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'q', text: '계절 따라 우리 반 옷차림이 바뀔까?' }, { id: 'how', text: '9월과 11월에 긴소매를 입은 친구를 세었어요' }, { id: 'find', text: '11월에 긴소매가 더 많았어요' }, { id: 'why', text: '날씨가 추워져서 따뜻하게 입어요' }] },
                target: { order: ['q', 'how', 'find', 'why'] }, difficulty: 0.15,
                hints: ['발표는 궁금했던 것으로 시작해서, 어떻게 살폈는지, 무엇을 알았는지, 왜 그런지로 이어져요.', '세어 본 일과 센 결과 가운데 무엇이 먼저 와야 할까요?', '물음(바뀔까?) → 방법(세었어요) → 알게 된 것(더 많았어요) → 까닭(추워져서)이에요.'],
                levels: { challenge: { prompt: '하준이의 발표를 차례대로 놓아 보세요. 발표와 상관없는 카드는 남겨요.', toolOptions: { cards: [{ id: 'q', text: '계절 따라 우리 반 옷차림이 바뀔까?' }, { id: 'how', text: '9월과 11월에 긴소매를 입은 친구를 세었어요' }, { id: 'find', text: '11월에 긴소매가 더 많았어요' }, { id: 'why', text: '날씨가 추워져서 따뜻하게 입어요' }, { id: 'x', text: '내 운동화는 파란색이에요' }] } } } },
              { prompt: '민지의 철새 발표를 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'q', text: '강에 오리 떼가 언제 많이 올까?' }, { id: 'how', text: '가족과 10월과 12월에 강가에서 오리를 세었어요' }, { id: 'find', text: '12월에 오리가 훨씬 많았어요' }, { id: 'why', text: '더 추운 북쪽에서 겨울을 나러 와서 그래요' }] },
                target: { order: ['q', 'how', 'find', 'why'] }, difficulty: 0.2,
                hints: ['발표는 궁금했던 것으로 시작해서, 어떻게 살폈는지, 무엇을 알았는지, 왜 그런지로 이어져요.', '"많았어요"는 본 것이고 "~해서 그래요"는 왜 그런지예요. 어느 것이 먼저일까요?', '물음(언제 많이 올까?) → 방법(세었어요) → 알게 된 것(12월에 많았어요) → 까닭(겨울을 나러 와서)이에요.'],
                levels: { challenge: { prompt: '민지의 발표를 차례대로 놓아 보세요. 발표와 상관없는 카드는 남겨요.', toolOptions: { cards: [{ id: 'q', text: '강에 오리 떼가 언제 많이 올까?' }, { id: 'how', text: '가족과 10월과 12월에 강가에서 오리를 세었어요' }, { id: 'find', text: '12월에 오리가 훨씬 많았어요' }, { id: 'why', text: '더 추운 북쪽에서 겨울을 나러 와서 그래요' }, { id: 'x', text: '오리는 귀여워서 좋아요' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 발표 쪽지 쓰기', minutes: 14, tool: 'emotion',
            teacher: '"알게 된 것 칸에는 무엇을 쓸까요?" 두 때를 견주어 달라진 점이 들어간 문장을 고르게 한다. 느낌만 쓴 문장, 한 번만 본 것을 쓴 문장은 왜 알맞지 않은지 말해 본다. 이어 활동지의 발표 쪽지 네 칸(물음·방법·알게 된 것·까닭)을 내 계획서와 기록장을 보고 채운다. 다 쓴 학생은 짝에게 쪽지를 보며 한 번 연습한다.',
            task: '알게 된 것 칸에 알맞은 문장을 고르고, 내 발표 쪽지를 써서 짝에게 연습해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아의 쪽지 "알게 된 것" 칸에 알맞은 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알게 된 것', weather: false, cards: ['9월에는 초록 잎, 11월에는 노란 잎이었어요', '11월에는 9월보다 떨어진 잎이 많았어요', '은행나무가 정말 예뻤어요', '은행나무 사진 찍기가 재미있었어요'] },
                target: { pick: ['9월에는 초록 잎, 11월에는 노란 잎이었어요', '11월에는 9월보다 떨어진 잎이 많았어요'] }, difficulty: 0.15,
                hints: ['알게 된 것은 두 때를 견주어 본 것이에요. 마음이나 느낌과 가려요.', '고른 카드에 9월과 11월을 견준 말이 들어 있나요?', '잎 색이 바뀐 것과 떨어진 잎이 늘어난 것이 견주어 알게 된 것이에요. 예뻤다, 재미있었다는 느낌이에요.'] },
              { prompt: '친구가 "계절이랑 옷은 상관없어."라고 말해요. 하준이는 어떻게 답할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 옷차림 발표를 마치자 친구가 "계절이랑 옷은 상관없어."라고 말했어요.', success: '맞아요! 조사한 자료를 근거로 차분하게 설명했어요.', choices: [
                { id: 'data', text: '그래프를 보여 주며 11월에 추워서 긴소매가 늘었다고 말해요', result: '친구가 그래프를 보고 고개를 끄덕여요', mood: '뿌듯함' },
                { id: 'angry', text: '"아니야!" 하고 화를 내요', result: '친구는 왜 그런지 알지 못해요', mood: '화남', why: '화를 내면 까닭이 전해지지 않아요. 무엇을 보여 주면 좋을까요?' },
                { id: 'quiet', text: '아무 말도 하지 않고 들어가요', result: '친구는 계속 상관없다고 생각해요', mood: '걱정', why: '내가 모은 자료로 까닭을 말해 줄 수 있어요.' }] },
                target: { choice: 'data' }, difficulty: 0.15,
                hints: ['친구가 왜 그렇게 생각하는지 바꾸려면, 내가 모은 자료와 까닭을 보여 주는 방법을 찾아요.', '고른 보기에 친구가 볼 수 있는 자료나 "~해서"라는 까닭이 들어 있나요?', '그래프를 보여 주며 추워서 긴소매가 늘었다고 말하면 친구도 까닭을 알 수 있어요.'],
                levels: { easy: { toolOptions: { choices: [
                  { id: 'data', text: '그래프를 보여 주며 11월에 추워서 긴소매가 늘었다고 말해요', result: '친구가 그래프를 보고 고개를 끄덕여요', mood: '뿌듯함' },
                  { id: 'angry', text: '"아니야!" 하고 화를 내요', result: '친구는 왜 그런지 알지 못해요', mood: '화남', why: '화를 내면 까닭이 전해지지 않아요. 무엇을 보여 주면 좋을까요?' }] } },
                  challenge: { toolOptions: { choices: [
                  { id: 'data', text: '그래프를 보여 주며 11월에 추워서 긴소매가 늘었다고 말해요', result: '친구가 그래프를 보고 고개를 끄덕여요', mood: '뿌듯함' },
                  { id: 'angry', text: '"아니야!" 하고 화를 내요', result: '친구는 왜 그런지 알지 못해요', mood: '화남', why: '화를 내면 까닭이 전해지지 않아요. 무엇을 보여 주면 좋을까요?' },
                  { id: 'quiet', text: '아무 말도 하지 않고 들어가요', result: '친구는 계속 상관없다고 생각해요', mood: '걱정', why: '내가 모은 자료로 까닭을 말해 줄 수 있어요.' },
                  { id: 'guess', text: '"원래 그래."라고만 말해요', result: '친구는 왜 그런지 여전히 몰라요', mood: '걱정', why: '"원래 그래"에는 까닭이 없어요. 내가 센 자료를 떠올려 봐요.' }] } } } },
              { prompt: '활동지 발표 쪽지 네 칸을 내 계획서와 기록장을 보고 채우고, 짝에게 한 번 연습해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"쪽지 네 칸 가운데 쓰기 가장 어려웠던 칸은 어디였나요?" 손을 들어 칸마다 세어 본다. 까닭 칸을 비운 학생은 다음 시간 전까지 기록장을 다시 보고 채워 오게 한다. 발표 쪽지는 47차시 발표회에서 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['처음', '다음', '그다음', '끝'], cards: [{ id: 'q', text: '화단 국화는 언제 필까?' }, { id: 'how', text: '9월과 10월에 화단을 살폈어요' }, { id: 'find', text: '10월에 국화가 활짝 피었어요' }, { id: 'why', text: '선선한 가을에 피는 꽃이라서 그래요' }] }, prompt: '준호의 국화 발표를 차례대로 놓아 보세요.', target: { order: ['q', 'how', 'find', 'why'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '발표 쪽지 "까닭" 칸에 쓰기 알맞은 것은?', options: ['날씨가 추워져서 그래요', '12월에 세었어요', '오리는 몇 마리일까?'], answer: 0, difficulty: 0.2, explain: '"~해서 그래요"는 왜 그런지 말하는 까닭이에요. 나머지는 방법과 물음이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 발표 쪽지',
      items: [
        { type: 'table', prompt: '내 탐구를 네 칸에 쓰세요.', columns: ['칸', '내 탐구'], cells: [['궁금했던 것', ''], ['살핀 방법', ''], ['알게 된 것', ''], ['까닭', '']] },
        { type: 'choice', prompt: '발표 쪽지의 "까닭" 칸에 알맞은 것에 ○ 하세요.', options: ['날이 쌀쌀해져서 그래요', '11월에 사진을 찍었어요', '은행잎은 언제 노래질까?'], answer: '날이 쌀쌀해져서 그래요' },
        { type: 'short', prompt: '내가 알게 된 것을 "~에는 ~, ~에는 ~"처럼 두 때를 견주어 쓰세요.' },
        { type: 'check', prompt: '내 쪽지를 점검하고 ✓ 하세요.', options: ['네 칸을 모두 채웠어요', '알게 된 것에 두 때를 견주어 썼어요', '까닭에 "~해서"를 넣었어요'] },
      ],
      easy: {
        note: '궁금했던 것 → 살핀 방법 → 알게 된 것 → 까닭',
        items: [
          { type: 'short', prompt: '내가 궁금했던 것을 쓰세요.' },
          { type: 'short', prompt: '내가 알게 된 것을 한 문장으로 쓰세요.' },
          { type: 'blank', prompt: '까닭을 쓰세요.', text: '(          )해서 그래요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 보기가 둘로 줄어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '발표와 상관없는 카드와 까닭 없는 대답이 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 알게 된 것과 까닭을 섞어 쓴다 → "눈으로 본 것"과 "왜 그런지"를 다른 색 펜으로 쓰게 한다. ② 알게 된 것에 느낌을 쓴다 → 37차시의 "알게 된 것과 느낀 것" 구별을 떠올리게 한다. ③ 탐구를 끝내지 못한 학생은 33차시 사진 표나 35차시 그래프를 자기 자료로 삼아 쪽지를 쓴다. 까닭 칸은 학생이 아는 만큼 쓰게 하고, 모르면 "더 알아볼 것"으로 적어도 된다고 말한다.',
  }));

  lessons.push(L(43, {
    title: '열매와 꽃이 바뀌면 달라지는 우리 생활 찾기',
    objective: '식물과 동물이 계절에 따라 바뀌는 모습과 그 때문에 달라지는 사람의 생활을 짝 짓고, 계절 먹을거리를 만드는 차례를 놓을 수 있다.',
    illustration: ART('a paper-cut persimmon tree with bright orange fruits beside a wooden eave where peeled persimmons hang on strings to dry, a grandmother and child holding a basket', '감이 익어서 곶감을 만들어요', [
      { motif: 'tree', x: 110, y: 214, color: 'peach' }, { motif: 'house', x: 360, y: 214, color: 'cream' }, { motif: 'leaf', x: 170, y: 170, color: 'rose', r: 20 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '곶감 사진(또는 실물)을 보여 준다. "이것은 무엇으로 만들었을까요? 언제 만들까요?" 감이 익는 가을에 따서, 찬 바람이 부는 늦가을부터 겨울까지 말린다는 것을 짧게 들려준다. "41차시에는 날씨가 생활을 바꾸는 것을 보았어요. 오늘은 나무와 열매, 동물이 바뀌면 생활이 어떻게 바뀌는지 찾아봐요." 시연 단추로 짝 잇기를 보여 준다.',
        student: '내가 먹어 본 계절 과일이나 열매를 하나 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '자연과 생활', slots: [{ id: 'd1', label: '감이 주렁주렁 익어요' }], cards: ['감을 따서 곶감을 만들어요', '수영장에 가요'], shuffle: false }, sequence: [{ match: { d1: '감을 따서 곶감을 만들어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자연이 바뀌면 생활도 바뀌어요', minutes: 12, tool: 'mindmap',
            teacher: '가지의 자연 모습을 읽고 "이렇게 되면 사람들은 무엇을 할까요?"라고 묻는다. 이은 뒤에는 "밤송이가 벌어져서 밤을 주워요."처럼 41차시의 "~해서 ~해요" 틀로 이어 읽게 한다. 참외·햅쌀처럼 학생이 모르는 낱말은 그림이나 실물로 먼저 보여 준다.',
            task: '자연이 바뀐 모습마다 그 때문에 사람들이 하는 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '자연이 바뀐 모습마다 사람들이 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '자연과 생활', slots: [{ id: 's1', label: '밤송이가 벌어져요' }, { id: 's2', label: '들에 쑥이 돋아요' }, { id: 's3', label: '모기가 많아져요' }], cards: ['밤을 주워 삶아 먹어요', '쑥을 캐서 떡을 해요', '모기장을 쳐요'] },
                target: { match: { s1: '밤을 주워 삶아 먹어요', s2: '쑥을 캐서 떡을 해요', s3: '모기장을 쳐요' } }, difficulty: 0.1,
                hints: ['가지의 모습이 보이면 사람들이 그것으로 무엇을 할 수 있는지 떠올려요.', '이은 두 글을 "~해서 ~해요"로 붙여 읽어 보세요. 말이 되나요?', '밤송이가 벌어져서 밤을 줍고, 쑥이 돋아서 쑥을 캐고, 모기가 많아져서 모기장을 쳐요.'],
                levels: { challenge: { prompt: '자연이 바뀐 모습마다 사람들이 하는 일을 이어 보세요. 어울리는 짝이 없는 카드는 남겨요.', toolOptions: { cards: ['밤을 주워 삶아 먹어요', '쑥을 캐서 떡을 해요', '모기장을 쳐요', '눈사람을 만들어요'] } } } },
              { prompt: '열매가 익은 모습마다 사람들이 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '자연과 생활', slots: [{ id: 's1', label: '참외가 노랗게 익어요' }, { id: 's2', label: '논에 벼가 누렇게 익어요' }, { id: 's3', label: '고추가 빨갛게 익어요' }], cards: ['시원한 참외를 깎아 먹어요', '벼를 베고 햅쌀밥을 지어요', '고추를 따서 햇볕에 말려요'] },
                target: { match: { s1: '시원한 참외를 깎아 먹어요', s2: '벼를 베고 햅쌀밥을 지어요', s3: '고추를 따서 햇볕에 말려요' } }, difficulty: 0.15,
                hints: ['열매가 다 익으면 사람들은 거두어서 먹거나 보관해요. 열매마다 어떻게 할지 떠올려요.', '이은 카드에 가지와 같은 열매나 곡식 이름이 들어 있나요?', '참외는 깎아 먹고, 벼는 베어 햅쌀밥을 짓고, 고추는 따서 말려요.'],
                levels: { challenge: { prompt: '열매가 익은 모습마다 사람들이 하는 일을 이어 보세요. 어울리는 짝이 없는 카드는 남겨요.', toolOptions: { cards: ['시원한 참외를 깎아 먹어요', '벼를 베고 햅쌀밥을 지어요', '고추를 따서 햇볕에 말려요', '얼음 위에서 썰매를 타요'] } } } },
              { prompt: '꽃과 잎이 바뀐 모습마다 사람들이 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '자연과 생활', slots: [{ id: 's1', label: '벚꽃이 활짝 피어요' }, { id: 's2', label: '산에 단풍이 곱게 들어요' }, { id: 's3', label: '길에 낙엽이 수북이 쌓여요' }], cards: ['꽃길을 걸으며 꽃구경을 해요', '단풍을 보러 산에 올라요', '빗자루로 낙엽을 쓸어 모아요'] },
                target: { match: { s1: '꽃길을 걸으며 꽃구경을 해요', s2: '단풍을 보러 산에 올라요', s3: '빗자루로 낙엽을 쓸어 모아요' } }, difficulty: 0.15,
                predict: { q: '나무의 모습이 바뀌면 사람들이 하는 일도 바뀔까요?', options: ['바뀌어요', '그대로예요'], answer: 0 },
                conclude: '꽃이 피고 잎이 물들고 떨어지면 사람들이 하는 일도 따라 바뀌어요. 자연과 생활은 이어져 있어요.',
                hints: ['가지의 모습이 보이는 계절을 떠올리고, 그때 사람들이 밖에서 하는 일을 찾아요.', '이은 카드와 가지를 붙여 읽어 보세요. 그 모습이 있어야 그 일을 할 수 있나요?', '벚꽃이 피어 꽃구경, 단풍이 들어 산에 오르기, 낙엽이 쌓여 낙엽 쓸기예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 계절 먹을거리 만드는 차례', minutes: 14, tool: 'kitchen',
            teacher: '"곶감은 왜 겨울에 만들까요?" 찬 바람이 불고 날이 건조해야 감이 상하지 않고 잘 마른다는 것을 짚는다. "쑥버무리는 왜 봄에 만들까요?" 어린 쑥이 봄에 돋기 때문이다. 차례를 놓은 뒤에는 모둠별로 우리 집이나 동네에서 계절에만 만들거나 먹는 것을 하나 찾아 활동지에 "~해서 ~해요"로 쓴다.',
            task: '계절 먹을거리를 만드는 차례대로 카드를 놓고, 우리 집 계절 먹을거리를 하나 찾아 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '곶감을 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['주황빛으로 익은 감을 따요', '감 껍질을 얇게 깎아요', '감을 끈에 꿰어 매달아요', '찬 바람에 여러 날 말려요', '쫀득한 곶감이 돼요'] },
                target: { order: ['주황빛으로 익은 감을 따요', '감 껍질을 얇게 깎아요', '감을 끈에 꿰어 매달아요', '찬 바람에 여러 날 말려요', '쫀득한 곶감이 돼요'] }, difficulty: 0.15,
                hints: ['감이 나무에 달려 있을 때부터 곶감이 될 때까지 차례대로 떠올려요.', '껍질을 깎기 전에 감을 매달 수 있을까요? 바로 앞 카드 다음에 올 수 있는지 살펴요.', '감 따기 → 껍질 깎기 → 끈에 매달기 → 찬 바람에 말리기 → 곶감이에요.'],
                levels: { challenge: { prompt: '곶감을 만드는 차례대로 놓아 보세요. 곶감 만들기에 없는 일은 남겨요.', toolOptions: { cards: ['주황빛으로 익은 감을 따요', '감 껍질을 얇게 깎아요', '감을 끈에 꿰어 매달아요', '찬 바람에 여러 날 말려요', '쫀득한 곶감이 돼요', '감을 물에 푹 담가요'] } } } },
              { prompt: '봄에 쑥버무리를 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['들에서 어린 쑥을 캐요', '쑥을 깨끗이 씻어요', '쌀가루와 쑥을 버무려요', '찜솥에 올려 쪄요'] },
                target: { order: ['들에서 어린 쑥을 캐요', '쑥을 깨끗이 씻어요', '쌀가루와 쑥을 버무려요', '찜솥에 올려 쪄요'] }, difficulty: 0.15,
                hints: ['쑥을 얻는 일부터 떡이 될 때까지 차례대로 떠올려요.', '흙이 묻은 쑥을 바로 쌀가루에 버무릴까요? 씻는 일은 언제 해야 할까요?', '쑥 캐기 → 씻기 → 쌀가루와 버무리기 → 찌기예요.'],
                levels: { challenge: { prompt: '쑥버무리를 만드는 차례대로 놓아 보세요. 쑥버무리 만들기에 없는 일은 남겨요.', toolOptions: { cards: ['들에서 어린 쑥을 캐요', '쑥을 깨끗이 씻어요', '쌀가루와 쑥을 버무려요', '찜솥에 올려 쪄요', '쑥을 냉동실에 얼려 깨물어요'] } } } },
              { prompt: '모둠별로 우리 집이나 동네에서 계절에만 만들거나 먹는 것을 하나 찾아 "~해서 ~해요"로 써요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '모둠마다 찾은 계절 먹을거리를 한 문장으로 발표한다(모둠당 30초). "자연이 바뀌면 우리가 먹고 하는 일이 바뀐다는 것을 오늘 몇 가지나 찾았나요?" 다음 시간에는 다가오는 겨울에 무엇을 준비할지 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '자연과 생활', slots: [{ id: 's1', label: '옥수수가 여물어요' }, { id: 's2', label: '귤이 노랗게 익어요' }], cards: ['옥수수를 쪄 먹어요', '귤을 따서 상자에 담아요'] }, prompt: '자연이 바뀐 모습마다 사람들이 하는 일을 이어 보세요.', target: { match: { s1: '옥수수를 쪄 먹어요', s2: '귤을 따서 상자에 담아요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '곶감을 찬 바람이 부는 때에 말리는 까닭은?', options: ['찬 바람에 감이 상하지 않고 잘 말라서', '감이 봄에 익어서', '더운 날에만 감이 말라서'], answer: 0, difficulty: 0.25, explain: '날이 차고 건조해야 감이 상하지 않고 쫀득하게 말라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '자연이 바뀌면 생활도 바뀌어요',
      items: [
        { type: 'table', prompt: '자연이 바뀐 모습과 사람들이 하는 일을 이어 쓰세요.', columns: ['자연이 바뀐 모습', '사람들이 하는 일'], cells: [['감이 익어요', ''], ['', '쑥을 캐요'], ['', '']] },
        { type: 'choice', prompt: '벼가 누렇게 익으면 사람들이 하는 일에 ○ 하세요.', options: ['벼를 베어요', '모를 심어요', '눈을 치워요'], answer: '벼를 베어요' },
        { type: 'short', prompt: '우리 집이나 동네의 계절 먹을거리를 "~해서 ~해요"로 쓰세요.' },
        { type: 'draw', prompt: '내가 찾은 계절 먹을거리를 그리세요.' },
      ],
      easy: {
        note: '감이 익어서 → 곶감을 만들어요',
        items: [
          { type: 'choice', prompt: '밤송이가 벌어지면 하는 일에 ○ 하세요.', options: ['밤을 주워요', '수영을 해요'], answer: '밤을 주워요' },
          { type: 'choice', prompt: '쑥이 돋는 계절에 ○ 하세요.', options: ['봄', '겨울'], answer: '봄' },
          { type: 'draw', prompt: '내가 좋아하는 계절 먹을거리를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀린 자리에 놓으면 카드가 돌아와요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '짝이 없는 카드, 만들기에 없는 일 카드가 섞여 있어요. 그런 카드는 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 과일은 마트에 늘 있어서 계절과 상관없다고 여긴다 → "마트의 감은 언제 가장 많이 보이나요?"라고 묻고, 제철에 가장 많이 나고 맛있다는 것을 짚는다. ② 곶감을 말리는 까닭을 "그냥"이라고 한다 → 여름에 감을 말리면 곰팡이가 쉽게 핀다는 것을 들려준다. ③ 쑥을 캐는 곳은 어른과 함께 가고, 길가나 공원의 쑥은 함부로 캐 먹지 않는다고 알린다. 지역에 따라 계절 먹을거리가 다르므로 모둠이 찾은 것을 넓게 인정한다.',
  }));

  lessons.push(L(44, {
    title: '다가오는 겨울에 준비할 것 고르고 친구에게 알리기',
    objective: '겨울을 맞아 준비할 것과 준비할 필요가 없는 것을 가르고, 준비할 것을 까닭과 함께 친구에게 알리는 말을 할 수 있다.',
    illustration: ART('a paper-cut wardrobe opening with mittens, a knitted scarf and a padded coat coming out while a summer fan is put away, a child pointing at a calendar with a snowflake on it', '겨울이 와요, 무엇을 준비할까?', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'tree', x: 380, y: 214, color: 'cream' }], 'snow'),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '일기 예보 화면(다음 주 최저 기온이 영하인 예보)을 보여 준다. "다음 주에 이렇게 추워진대요. 무엇을 준비하면 좋을까요?" 학생 답을 칠판에 적고 "왜요?"라고 한 번 더 묻는다. "오늘은 겨울 준비를 고르고, 친구에게 까닭과 함께 알려 주는 연습을 해요." 시연 단추로 체크 목록에 표시하는 모습을 보여 준다.',
        student: '겨울이 오면 내가 꼭 꺼낼 물건 하나를 짝에게 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '겨울 준비', items: [{ id: 'mitt', text: '장갑을 꺼내요' }, { id: 'swim', text: '수영복을 챙겨요' }] }, sequence: [{ checklist: ['mitt'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 겨울 준비 목록 고르기', minutes: 12, tool: 'kitchen',
            teacher: '목록을 하나씩 읽으며 "이것은 겨울에 쓸모가 있나요?"라고 묻는다. 표시하지 않은 항목은 왜 겨울 준비가 아닌지 짝에게 말하게 한다. 교실 목록에서는 실제로 창가 화분 하나를 교실 안쪽으로 옮겨 보고, 외투 걸 자리를 반 전체가 함께 정한다.',
            task: '목록에서 겨울을 맞아 준비할 것만 표시해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '겨울을 맞아 준비할 옷과 물건만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '겨울 옷 준비', items: [{ id: 'mitt', text: '장갑을 꺼내요' }, { id: 'scarf', text: '목도리를 꺼내요' }, { id: 'coat', text: '두꺼운 외투를 꺼내요' }, { id: 'swim', text: '수영복을 챙겨요' }, { id: 'fan', text: '손 선풍기를 챙겨요' }] },
                target: { checklist: ['mitt', 'scarf', 'coat'] }, difficulty: 0.05,
                hints: ['목록마다 "추운 날에 이것이 쓸모 있을까?" 하고 물어보세요.', '표시한 것 가운데 더운 날에 쓰는 것이 있나요?', '장갑, 목도리, 두꺼운 외투는 겨울 준비예요. 수영복과 손 선풍기는 여름 물건이에요.'],
                levels: { easy: { toolOptions: { items: [{ id: 'mitt', text: '장갑을 꺼내요' }, { id: 'scarf', text: '목도리를 꺼내요' }, { id: 'coat', text: '두꺼운 외투를 꺼내요' }, { id: 'swim', text: '수영복을 챙겨요' }] } } } },
              { prompt: '우리 교실이 겨울을 맞아 준비할 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '우리 교실 겨울 준비', items: [{ id: 'pot', text: '창가 화분을 교실 안쪽으로 옮겨요' }, { id: 'hook', text: '외투를 걸 자리를 정해요' }, { id: 'mosq', text: '모기향을 피워요' }, { id: 'open', text: '창문을 활짝 열어 두고 집에 가요' }] },
                target: { checklist: ['pot', 'hook'] }, difficulty: 0.15,
                hints: ['겨울 밤에 교실이 얼마나 추워지는지, 겨울에 아이들이 무엇을 입고 오는지 떠올려요.', '표시한 것 가운데 추운 겨울에 하면 안 되는 일이 있나요?', '화분은 추운 창가에서 안쪽으로, 외투 걸 자리는 미리 정해요. 모기향과 창문 열어 두기는 겨울 준비가 아니에요.'],
                levels: { challenge: { prompt: '우리 교실이 겨울을 맞아 준비할 것만 모두 표시해 보세요.', toolOptions: { items: [{ id: 'pot', text: '창가 화분을 교실 안쪽으로 옮겨요' }, { id: 'hook', text: '외투를 걸 자리를 정해요' }, { id: 'mosq', text: '모기향을 피워요' }, { id: 'open', text: '창문을 활짝 열어 두고 집에 가요' }, { id: 'shoe', text: '눈에 젖은 신발을 말릴 자리를 정해요' }] }, target: { checklist: ['pot', 'hook', 'shoe'] } } } },
              { prompt: '겨울에 건강하게 지내려고 준비할 습관만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '건강한 겨울나기', items: [{ id: 'wash', text: '밖에서 오면 손을 씻어요' }, { id: 'water', text: '따뜻한 물을 자주 마셔요' }, { id: 'sleep', text: '일찍 자고 푹 쉬어요' }, { id: 'ice', text: '얼음을 자주 깨물어 먹어요' }, { id: 'thin', text: '얇은 옷만 입고 뛰어나가요' }] },
                target: { checklist: ['wash', 'water', 'sleep'] }, difficulty: 0.15,
                predict: { q: '겨울에 감기에 덜 걸리려면 준비가 필요할까요?', options: ['필요해요', '필요 없어요'], answer: 0 },
                conclude: '추운 겨울에는 몸이 차가워지기 쉬워요. 손 씻기, 따뜻한 물, 푹 자기로 미리 몸을 지켜요.',
                hints: ['목록마다 "이렇게 하면 추운 겨울에 몸이 튼튼해질까?" 하고 물어보세요.', '표시한 것 가운데 몸을 차갑게 만드는 일이 있나요?', '손 씻기, 따뜻한 물 마시기, 일찍 자기가 겨울 건강 습관이에요.'],
                levels: { easy: { toolOptions: { items: [{ id: 'wash', text: '밖에서 오면 손을 씻어요' }, { id: 'water', text: '따뜻한 물을 자주 마셔요' }, { id: 'sleep', text: '일찍 자고 푹 쉬어요' }, { id: 'ice', text: '얼음을 자주 깨물어 먹어요' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 까닭을 넣어 친구에게 알리기', minutes: 14, tool: 'emotion',
            teacher: '"친구에게 알릴 때 무엇과 무엇이 들어가야 친구가 잘 알아들을까요?" "무엇을 준비할지"와 "왜 준비할지" 두 가지를 칠판에 쓴다. 보기를 고른 뒤 결과를 함께 읽고, "장갑 챙겨."만 들으면 친구가 왜 챙겨야 하는지 모른다는 것을 짚는다. 마지막에는 짝에게 내가 고른 겨울 준비 하나를 까닭과 함께 알린다.',
            task: '무엇을 준비할지와 까닭이 함께 들어간 알림 말을 고르고, 짝에게 직접 알려요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '민지가 친구들에게 겨울 준비를 알려요. 무엇과 까닭이 함께 든 말을 골라 보세요.', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 다음 주부터 많이 추워진다는 일기 예보를 보았어요.', success: '맞아요! 할 일과 그 까닭이 함께 들어 있어요.', ask: '친구들에게 어떻게 알릴까요?', choices: [
                { id: 'both', text: '"다음 주에 추워진대. 그러니까 장갑을 챙기자!"', result: '친구들이 다음 날 장갑을 끼고 와요', mood: '뿌듯함' },
                { id: 'what', text: '"장갑 챙겨."', result: '친구가 "왜?" 하고 물어요', mood: '걱정', why: '무엇을 챙길지는 있지만 왜 챙겨야 하는지가 빠졌어요.' },
                { id: 'why', text: '"다음 주에 추워진대."', result: '친구는 무엇을 준비할지 몰라요', mood: '걱정', why: '까닭은 있지만 무엇을 준비할지가 빠졌어요.' }] },
                target: { choice: 'both' }, difficulty: 0.15,
                hints: ['보기마다 "무엇을 준비할지"와 "왜 준비할지"가 둘 다 들어 있는지 살펴요.', '고른 말을 들은 친구가 "왜?" 또는 "뭘?" 하고 되물을까요?', '"추워진대. 그러니까 장갑을 챙기자!"에는 까닭과 준비할 것이 함께 있어요.'],
                levels: { easy: { toolOptions: { choices: [
                  { id: 'both', text: '"다음 주에 추워진대. 그러니까 장갑을 챙기자!"', result: '친구들이 다음 날 장갑을 끼고 와요', mood: '뿌듯함' },
                  { id: 'what', text: '"장갑 챙겨."', result: '친구가 "왜?" 하고 물어요', mood: '걱정', why: '무엇을 챙길지는 있지만 왜 챙겨야 하는지가 빠졌어요.' }] } } } },
              { prompt: '하준이가 동생에게 빙판길을 알려요. 할 일과 까닭이 함께 든 말을 골라 보세요.', toolOptions: { mode: 'branch', who: '하준', situation: '밤새 내린 비가 꽁꽁 얼었어요. 하준이가 동생과 학교에 가요.', success: '맞아요! 할 일과 그 까닭이 함께 들어 있어요.', ask: '동생에게 뭐라고 말할까요?', choices: [
                { id: 'both', text: '"길이 얼어서 미끄러우니까 주머니에서 손을 빼고 천천히 걷자."', result: '둘이 넘어지지 않고 학교에 도착해요', mood: '편안함' },
                { id: 'run', text: '"늦겠다, 빨리 뛰어가자!"', result: '빙판에서 미끄러질 뻔해요', mood: '무서움', why: '언 길에서 뛰면 미끄러져요. 언 길에서는 어떻게 걸어야 할까요?' },
                { id: 'short', text: '"조심해."', result: '동생은 무엇을 조심할지 몰라 손을 주머니에 넣은 채 걸어요', mood: '걱정', why: '무엇 때문에, 어떻게 조심할지가 빠졌어요.' }] },
                target: { choice: 'both' }, difficulty: 0.2,
                hints: ['보기마다 "어떻게 할지"와 "왜 그렇게 할지"가 둘 다 들어 있는지 살펴요.', '고른 말만 듣고 동생이 언 길에서 무엇을 어떻게 해야 할지 알 수 있나요?', '"길이 얼어서 미끄러우니까 손을 빼고 천천히 걷자."에는 까닭과 할 일이 함께 있어요.'],
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'both', text: '"길이 얼어서 미끄러우니까 주머니에서 손을 빼고 천천히 걷자."', result: '둘이 넘어지지 않고 학교에 도착해요', mood: '편안함' },
                  { id: 'run', text: '"늦겠다, 빨리 뛰어가자!"', result: '빙판에서 미끄러질 뻔해요', mood: '무서움', why: '언 길에서 뛰면 미끄러져요. 언 길에서는 어떻게 걸어야 할까요?' },
                  { id: 'short', text: '"조심해."', result: '동생은 무엇을 조심할지 몰라 손을 주머니에 넣은 채 걸어요', mood: '걱정', why: '무엇 때문에, 어떻게 조심할지가 빠졌어요.' },
                  { id: 'slow', text: '"천천히 걷자."', result: '동생은 천천히 걷지만 왜 그런지 몰라 다음 날은 또 뛰어요', mood: '걱정', why: '할 일은 있지만 까닭이 빠졌어요. 까닭을 알아야 다음에도 지켜요.' }] } } } },
              { prompt: '내가 고른 겨울 준비 하나를 "~해서 ~하자."로 짝에게 알려요. 짝은 무엇과 까닭이 들었는지 들어요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 알려 준 겨울 준비 가운데 나도 하고 싶은 것이 있었나요?" 두세 명에게 듣는다. 오늘 고른 준비를 집에 가서 가족에게도 까닭과 함께 알려 보라고 한다. 다음 시간에는 모둠별로 겨울 준비 알림판을 만든다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '겨울 등굣길 준비', items: [{ id: 'hat', text: '귀를 덮는 모자를 써요' }, { id: 'mitt', text: '장갑을 껴요' }, { id: 'shorts', text: '반바지만 입어요' }] }, prompt: '추운 겨울 아침, 등굣길에 준비할 것만 표시해 보세요.', target: { checklist: ['hat', 'mitt'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구에게 겨울 준비를 가장 잘 알린 말은?', options: ['눈이 오면 길이 미끄러우니까 미끄럼 방지 신발을 신자.', '신발 신어.', '눈이 온대.'], answer: 0, difficulty: 0.2, explain: '무엇을 할지(신발을 신자)와 까닭(길이 미끄러워서)이 함께 들어 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '겨울 준비 알림 말',
      items: [
        { type: 'check', prompt: '겨울을 맞아 준비할 것에 ✓ 하세요.', options: ['목도리를 꺼내요', '선풍기를 꺼내요', '손을 자주 씻어요', '수영복을 챙겨요'] },
        { type: 'table', prompt: '내가 준비할 것과 까닭을 쓰세요.', columns: ['준비할 것', '까닭'], rows: 3 },
        { type: 'blank', prompt: '친구에게 알리는 말을 완성하세요.', text: '(          )해서 (          )을/를 준비하자.' },
        { type: 'short', prompt: '가족에게 알려 주고 싶은 겨울 준비를 쓰세요.' },
      ],
      easy: {
        note: '무엇을 + 왜',
        items: [
          { type: 'choice', prompt: '겨울에 꺼낼 것에 ○ 하세요.', options: ['장갑', '수영복'], answer: '장갑' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '추워서 (          )을/를 챙기자.' },
          { type: 'draw', prompt: '내가 준비할 겨울 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '표시할 목록이 줄고, 보기가 둘로 줄어요.',
      base: '목록과 보기를 모두 보고 골라요.',
      challenge: '목록이 늘고, 할 일만 있고 까닭이 빠진 보기가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무엇을 준비할지만 말하고 까닭을 빠뜨린다 → "왜?"를 한 번 더 묻는 짝 놀이를 한다. ② 손 씻기는 여름에도 하니 겨울 준비가 아니라고 말한다 → 늘 하는 습관이지만 감기가 많은 겨울에 더 챙긴다는 뜻이라고 풀어 준다(그래서 목록 제목을 "건강한 겨울나기"로 했다). ③ 집에 장갑·목도리가 없을 수 있으니 "가지고 있는 것"을 묻지 않고 "준비하면 좋은 것"으로 말하게 한다. 실제 날씨가 따뜻한 지역은 일기 예보 대신 지난겨울 사진으로 도입한다.',
  }));

  lessons.push(L(45, {
    title: '모둠별로 겨울 준비 알림판 만들기',
    objective: '알림판에 제목·준비할 것·까닭을 알맞게 나누어 넣고, 모둠과 함께 겨울 준비 알림판을 꾸며 다른 반 친구에게 알릴 수 있다.',
    illustration: ART('a paper-cut classroom bulletin board titled with a snowflake, showing a snowman with a red scarf, a pair of mittens and three colored note cards, children in a group gluing paper pieces', '겨울 준비 알림판', [
      { motif: 'snow', x: 150, y: 170 }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'star', x: 100, y: 200, color: 'buttercup', s: 0.6 }], 'snow'),
    safety: ['가위는 날을 아래로 향하게 들고 다녀요.', '풀과 테이프를 쓴 뒤에는 뚜껑을 닫고 손을 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '학교 복도에 붙은 알림판(또는 사진)을 보여 준다. "이 알림판은 무엇을 알려 주나요? 어디를 보면 바로 알 수 있나요?" 큰 글씨 제목, 할 일, 까닭이 어디에 있는지 손가락으로 짚게 한다. "오늘은 44차시에 고른 겨울 준비를 다른 반 친구들도 알 수 있게 알림판으로 만들어요." 시연 단추로 제목 칸에 카드가 놓이는 모습을 보여 준다.',
        student: '복도 알림판에서 가장 먼저 눈에 띄는 것이 무엇인지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '알림판', slots: [{ id: 't', label: '제목' }], cards: ['감기 조심!', '감기에 걸리면 쉬어요'], shuffle: false }, sequence: [{ match: { t: '감기 조심!' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 알림판 칸 나누기', minutes: 11, tool: 'mindmap',
            teacher: '"제목은 짧고 크게, 준비할 것은 무엇을 할지, 까닭은 왜 해야 하는지 써요." 칸마다 들어갈 말의 모양을 짚는다. 제목에는 느낌표가, 까닭에는 "~해서"가 자주 들어간다는 것을 알려 준다. 카드를 놓은 뒤에는 "제목 → 준비할 것 → 까닭" 차례로 소리 내어 읽고 "알림판처럼 들리나요?"라고 묻는다.',
            task: '알림판의 제목·준비할 것·까닭 칸에 알맞은 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '빙판길 알림판의 칸마다 알맞은 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '빙판길 알림판', slots: [{ id: 't', label: '제목' }, { id: 'what', label: '준비할 것' }, { id: 'why', label: '까닭' }], cards: ['빙판길 조심!', '미끄럼 방지 신발을 신어요', '길이 얼어 미끄러워서'] },
                target: { match: { t: '빙판길 조심!', what: '미끄럼 방지 신발을 신어요', why: '길이 얼어 미끄러워서' } }, difficulty: 0.1,
                hints: ['제목은 짧게 외치는 말, 준비할 것은 할 일, 까닭은 "왜"에 답하는 말이에요.', '"~해서"로 끝나는 카드가 까닭 칸에 있나요? 느낌표가 있는 짧은 카드는 어디에 있나요?', '제목은 "빙판길 조심!", 준비할 것은 신발 신기, 까닭은 길이 얼어 미끄러워서예요.'] },
              { prompt: '감기 알림판의 칸마다 알맞은 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '감기 알림판', slots: [{ id: 't', label: '제목' }, { id: 'what', label: '준비할 것' }, { id: 'why', label: '까닭' }], cards: ['겨울 감기 물러가라!', '밖에서 오면 비누로 손을 씻어요', '손에 묻은 감기 균이 몸에 들어오지 않게 해서'] },
                target: { match: { t: '겨울 감기 물러가라!', what: '밖에서 오면 비누로 손을 씻어요', why: '손에 묻은 감기 균이 몸에 들어오지 않게 해서' } }, difficulty: 0.15,
                hints: ['제목은 짧게 외치는 말, 준비할 것은 할 일, 까닭은 "왜"에 답하는 말이에요.', '할 일 칸에 "~해요"로 끝나는 카드가 있나요? 까닭 칸의 카드는 "왜?"에 답하나요?', '제목은 "겨울 감기 물러가라!", 준비할 것은 손 씻기, 까닭은 감기 균을 막으려고예요.'],
                levels: { challenge: { prompt: '감기 알림판의 칸마다 알맞은 카드를 이어 보세요. 알림판에 맞지 않는 카드는 남겨요.', toolOptions: { cards: ['겨울 감기 물러가라!', '밖에서 오면 비누로 손을 씻어요', '손에 묻은 감기 균이 몸에 들어오지 않게 해서', '우리 모둠은 네 명이에요'] } } } },
              { prompt: '난로 알림판의 칸마다 알맞은 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '난로 알림판', slots: [{ id: 't', label: '제목' }, { id: 'what', label: '준비할 것' }, { id: 'why', label: '까닭' }], cards: ['난로 곁은 위험해요!', '난로에서 두 걸음 떨어져 놀아요', '뜨거운 난로에 데일 수 있어서'] },
                target: { match: { t: '난로 곁은 위험해요!', what: '난로에서 두 걸음 떨어져 놀아요', why: '뜨거운 난로에 데일 수 있어서' } }, difficulty: 0.15,
                hints: ['제목은 짧게 외치는 말, 준비할 것은 할 일, 까닭은 "왜"에 답하는 말이에요.', '"데일 수 있어서"는 할 일인가요, 까닭인가요?', '제목은 "난로 곁은 위험해요!", 준비할 것은 두 걸음 떨어지기, 까닭은 데일 수 있어서예요.'],
                levels: { challenge: { prompt: '난로 알림판의 칸마다 알맞은 카드를 이어 보세요. 알림판에 맞지 않는 카드는 남겨요.', toolOptions: { cards: ['난로 곁은 위험해요!', '난로에서 두 걸음 떨어져 놀아요', '뜨거운 난로에 데일 수 있어서', '난로 곁에서 장난쳐요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알림판 그림 꾸미기', minutes: 17, tool: 'collage',
            teacher: '화면에서 알림판에 붙일 그림을 먼저 꾸며 본다. 이어 모둠별로 4절 도화지에 제목·준비할 것·까닭을 크게 쓰고, 색종이를 오려 그림을 붙인다. 모둠 안에서 제목 쓰기, 글 쓰기, 그림 붙이기, 점검하기를 한 사람씩 맡는다. "멀리서도 읽히나요?" 교실 뒤에서 알림판을 보며 글씨 크기를 점검하게 한다.',
            task: '알림판에 붙일 겨울 그림을 꾸미고, 모둠 알림판을 종이로 만들어요.',
            levels: { easy: { shapes: ['circle', 'rect', 'heart', 'triangle'], colors: ['하양', '빨강', '파랑', '갈색', '검정'] }, base: {}, challenge: {} },
            items: [
              { prompt: '알림판에 붙일 눈사람을 꾸며 보세요. 하양 동그라미 둘 넘게, 빨강 긴 네모 목도리 하나를 붙여요.', target: { has: [{ shape: 'circle', color: '하양', min: 2 }, { shape: 'rect', color: '빨강', min: 1 }] }, difficulty: 0.05,
                levels: { challenge: { prompt: '눈사람을 꾸며 보세요. 하양 동그라미 셋 넘게, 빨강 긴 네모 목도리 하나, 검정 동그라미 눈 둘을 붙여요.', target: { has: [{ shape: 'circle', color: '하양', min: 3 }, { shape: 'rect', color: '빨강', min: 1 }, { shape: 'circle', color: '검정', min: 2 }] } } } },
              { prompt: '접는 선 양쪽에 똑같은 장갑 한 켤레를 붙여 보세요. 하트 모양으로 장갑을 만들어요.', state: { pieces: [] }, target: { symmetry: 'vertical', has: [{ shape: 'heart', min: 2 }] }, difficulty: 0.2 },
              { prompt: '모둠별로 4절 도화지에 제목·준비할 것·까닭을 크게 쓰고, 색종이 그림을 붙여 알림판을 완성해요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '모둠 알림판을 칠판에 나란히 붙이고 한 바퀴 돌며 본다(모둠당 30초). "제목·준비할 것·까닭이 모두 있는 알림판에 붙임 딱지를 붙여 주세요." 완성한 알림판은 복도에 붙여 다른 반 친구들에게 알린다. 다음 시간을 위해 집에서 할머니·할아버지나 어른께 "어릴 때 겨울을 어떻게 지내셨어요?"를 여쭤 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '목도리 알림판', slots: [{ id: 't', label: '제목' }, { id: 'what', label: '준비할 것' }, { id: 'why', label: '까닭' }], cards: ['목도리로 목을 지켜요!', '나갈 때 목도리를 둘러요', '찬 바람에 목이 차가워져서'] }, prompt: '목도리 알림판의 칸마다 알맞은 카드를 이어 보세요.', target: { match: { t: '목도리로 목을 지켜요!', what: '나갈 때 목도리를 둘러요', why: '찬 바람에 목이 차가워져서' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '알림판의 "까닭" 칸에 알맞은 글은?', options: ['눈이 쌓이면 길이 미끄러워서', '눈길 조심!', '천천히 걸어요'], answer: 0, difficulty: 0.2, explain: '"~해서"는 왜 그렇게 해야 하는지 알려 주는 까닭이에요. 나머지는 제목과 할 일이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 알림판 계획',
      items: [
        { type: 'table', prompt: '우리 모둠 알림판에 쓸 말을 정하세요.', columns: ['칸', '쓸 말'], cells: [['제목', ''], ['준비할 것', ''], ['까닭', '']] },
        { type: 'short', prompt: '알림판에 붙일 그림을 무엇으로 할지 쓰세요.' },
        { type: 'draw', prompt: '알림판을 어떻게 꾸밀지 밑그림을 그리세요.' },
        { type: 'check', prompt: '우리 알림판을 점검하고 ✓ 하세요.', options: ['제목이 멀리서도 보여요', '준비할 것을 썼어요', '까닭을 썼어요', '그림이 내용과 어울려요'] },
      ],
      easy: {
        note: '제목! → 준비할 것 → 까닭(~해서)',
        items: [
          { type: 'short', prompt: '알림판 제목을 짧게 쓰세요.' },
          { type: 'blank', prompt: '까닭을 쓰세요.', text: '(          )해서 준비해요.' },
          { type: 'draw', prompt: '알림판에 붙일 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 콜라주 조각 종류가 줄어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '알림판에 맞지 않는 카드가 섞여 있고, 눈사람 조건이 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 제목에 긴 문장을 쓴다 → "다섯 글자 안팎으로 외치듯이"라고 안내한다. ② 까닭 칸을 비우거나 할 일을 한 번 더 쓴다 → "왜?"라고 묻고 대답을 그대로 까닭 칸에 쓰게 한다. ③ 모둠 안에서 한 사람이 다 한다 → 역할 카드를 미리 나누어 준다. 하트 장갑 문항은 접는 선 양쪽의 같은 자리에 같은 모양·색·크기가 와야 맞는다. 다음 차시 준비로 어른께 옛날 겨울나기를 여쭤 오게 하되, 여쭐 사람이 없는 학생은 교사가 준비한 옛날 사진 자료로 대신한다.',
  }));

  lessons.push(L(46, {
    title: '옛날과 오늘날의 겨울나기 견주어 말하기',
    objective: '옛날과 오늘날 겨울을 나는 방법을 나누고, 방법은 달라졌지만 추위를 이기려는 까닭은 같다는 것을 문장으로 말할 수 있다.',
    illustration: ART('a paper-cut split scene, the left half a traditional Korean house with a smoking chimney, a brazier and buried kimchi jars, the right half a modern apartment with a boiler panel and a kimchi refrigerator, a child in the middle comparing', '옛날과 오늘날의 겨울나기', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'house', x: 370, y: 214, color: 'sky' }, { motif: 'snow', x: 240, y: 180 }], 'snow'),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어른께 옛날 겨울나기를 여쭤 온 사람, 무엇을 들었나요?" 두세 명의 이야기를 칠판 왼쪽(옛날)에 적는다. "우리 집은 겨울에 어떻게 따뜻하게 지내나요?" 답은 오른쪽(오늘날)에 적는다. "옛날 사람들도, 우리도 겨울에 무엇을 하려고 애썼을까요?" 시연 단추로 카드가 옛날과 오늘날로 나뉘는 모습을 보여 준다.',
        student: '어른께 들은 옛날 겨울 이야기 하나를 짝에게 말해 봐요. 여쭙지 못했으면 짝의 이야기를 들어요.',
        demo: { tool: 'timeline', options: { mode: 'sort', axis: ['옛날', '오늘날'], slots: ['옛날에 주로 했어요', '오늘날 주로 해요'], cards: ['화로에 손을 쬐어요', '보일러를 켜요'], shuffle: false }, sequence: [{ sort: { '옛날에 주로 했어요': ['화로에 손을 쬐어요'], '오늘날 주로 해요': ['보일러를 켜요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 옛날과 오늘날 나누기', minutes: 13, tool: 'timeline',
            teacher: '아궁이·화로·장독·누빈 옷의 사진을 먼저 보여 주고 이름을 함께 읽는다. "이 방법은 지금도 많이 하나요, 옛날에 주로 했나요?" 지금도 시골에서 하는 집이 있다는 학생에게는 "맞아요, 그래서 \'주로\'라고 썼어요. 요즘 대부분의 집은 어떤가요?"라고 짚는다. 도전 단계의 "두 때 모두 하는 일"은 오늘의 정리와 이어진다.',
            task: '겨울나기 카드를 옛날에 주로 한 일과 오늘날 주로 하는 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집을 따뜻하게 하는 방법을 옛날과 오늘날로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '오늘날'], slots: ['옛날에 주로 했어요', '오늘날 주로 해요'], cards: ['아궁이에 장작불을 때요', '화로 곁에 모여 앉아요', '보일러를 켜요', '전기 난로를 켜요'] },
                target: { sort: { '옛날에 주로 했어요': ['아궁이에 장작불을 때요', '화로 곁에 모여 앉아요'], '오늘날 주로 해요': ['보일러를 켜요', '전기 난로를 켜요'] } }, difficulty: 0.1,
                predict: { q: '옛날 사람들도 겨울에 따뜻하게 지내려고 애썼을까요?', options: ['애썼어요', '안 애썼어요'], answer: 0 },
                conclude: '불을 때든 보일러를 켜든, 옛날과 오늘날 모두 추운 겨울에 집을 따뜻하게 하려고 애썼어요.',
                hints: ['카드마다 장작·불씨처럼 손으로 불을 피우는지, 단추나 전기로 켜는지 살펴요.', '옮긴 카드 가운데 전기나 단추로 켜는 것이 옛날 칸에 있나요?', '아궁이와 화로는 옛날, 보일러와 전기 난로는 오늘날이에요.'],
                levels: { challenge: { prompt: '집을 데우는 방법을 나누어 보세요. 옛날과 오늘날 모두 하는 일은 카드 칸에 남겨요.', toolOptions: { cards: ['아궁이에 장작불을 때요', '화로 곁에 모여 앉아요', '보일러를 켜요', '전기 난로를 켜요', '추우면 두꺼운 이불을 덮어요'] } } } },
              { prompt: '겨울 먹을거리를 두는 방법을 옛날과 오늘날로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '오늘날'], slots: ['옛날에 주로 했어요', '오늘날 주로 해요'], cards: ['김칫독을 땅에 묻어 두어요', '처마 밑에 시래기를 매달아요', '김치냉장고에 김치를 넣어요', '겨울에도 마트에서 채소를 사요'] },
                target: { sort: { '옛날에 주로 했어요': ['김칫독을 땅에 묻어 두어요', '처마 밑에 시래기를 매달아요'], '오늘날 주로 해요': ['김치냉장고에 김치를 넣어요', '겨울에도 마트에서 채소를 사요'] } }, difficulty: 0.2,
                hints: ['채소가 자라지 않는 겨울에 먹을 것을 어떻게 오래 두었는지 떠올려요. 기계를 쓰는지 살펴요.', '옮긴 카드 가운데 냉장고나 마트처럼 요즘 생긴 것이 옛날 칸에 있나요?', '김칫독 묻기와 시래기 말리기는 옛날, 김치냉장고와 마트는 오늘날이에요.'],
                levels: { challenge: { prompt: '겨울 먹을거리를 두는 방법을 나누어 보세요. 옛날과 오늘날 모두 하는 일은 카드 칸에 남겨요.', toolOptions: { cards: ['김칫독을 땅에 묻어 두어요', '처마 밑에 시래기를 매달아요', '김치냉장고에 김치를 넣어요', '겨울에도 마트에서 채소를 사요', '늦가을에 김장을 해요'] } } } },
              { prompt: '겨울옷과 빨래 방법을 옛날과 오늘날로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '오늘날'], slots: ['옛날에 주로 했어요', '오늘날 주로 해요'], cards: ['솜을 넣어 누빈 옷을 입어요', '언 개울에서 빨래해요', '가벼운 오리털 외투를 입어요', '세탁기로 빨래해요'] },
                target: { sort: { '옛날에 주로 했어요': ['솜을 넣어 누빈 옷을 입어요', '언 개울에서 빨래해요'], '오늘날 주로 해요': ['가벼운 오리털 외투를 입어요', '세탁기로 빨래해요'] } }, difficulty: 0.2,
                hints: ['카드마다 손으로 하는 일인지, 기계나 새 옷감을 쓰는지 살펴요.', '세탁기는 언제부터 집에 있었을까요? 옮긴 칸을 다시 살펴요.', '누빈 옷과 개울 빨래는 옛날, 오리털 외투와 세탁기는 오늘날이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 달라진 것과 같은 것 말하기', minutes: 13, tool: 'story',
            teacher: '"옛날에는 ( ), 오늘날에는 ( )." 틀로 달라진 방법을 말하고, "옛날에도 오늘날에도 ( )." 틀로 같은 것을 말한다. "방법은 달라졌어요. 그럼 그렇게 하는 까닭도 달라졌나요?" 학생들이 "추워서"는 같다는 것을 스스로 말하게 기다린다. 마지막에는 어른께 들은 이야기를 이 틀로 짝에게 다시 말한다.',
            task: '옛날과 오늘날을 견주는 문장의 빈칸을 채우고, 어른께 들은 이야기를 그 틀로 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아의 견주는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', label: '옛날엔 ___ 방을, 지금은 보일러로 데워요.' }, { id: 'f2', who: '서아', label: '옛날에도 오늘날에도 겨울이 ___ 방을 따뜻하게 해요.' }], cards: ['아궁이에 불을 때서', '추워서', '더워서'] },
                target: { fill: { f1: '아궁이에 불을 때서', f2: '추워서' } }, difficulty: 0.15,
                hints: ['첫 빈칸에는 옛날 방법이, 둘째 빈칸에는 두 때 모두 같은 까닭이 들어가요.', '빈칸을 채운 문장을 읽어 보세요. 겨울 날씨와 맞나요?', '옛날에는 아궁이에 불을 때서 데웠고, 겨울이 추워서 방을 따뜻하게 해요.'],
                levels: { easy: { prompt: '서아의 견주는 문장을 완성해 보세요.', toolOptions: { slots: [{ id: 'f2', who: '서아', label: '옛날에도 오늘날에도 겨울이 ___ 방을 따뜻하게 해요.' }], cards: ['추워서', '더워서'] }, target: { fill: { f2: '추워서' } } } } },
              { prompt: '준호의 견주는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '옛날에는 김칫독을 ___ 김치를 두었어요.' }, { id: 'f2', who: '준호', label: '오늘날에는 ___ 김치를 넣어 두어요.' }], cards: ['땅에 묻어', '김치냉장고에', '햇볕에 널어'] },
                target: { fill: { f1: '땅에 묻어', f2: '김치냉장고에' } }, difficulty: 0.15, levels: { challenge: { toolOptions: { cards: ['땅에 묻어', '김치냉장고에', '햇볕에 널어', '아궁이 속에'] } } },
                hints: ['옛날에는 기계 없이, 오늘날에는 기계로 김치를 차갑게 두어요.', '김치를 햇볕에 널면 시원하게 둘 수 있을까요?', '옛날에는 김칫독을 땅에 묻었고, 오늘날에는 김치냉장고에 넣어요.'] },
              { prompt: '어른께 들은 옛날 겨울 이야기를 "옛날에는 ~, 오늘날에는 ~."으로 짝에게 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 이야기 가운데 가장 신기했던 옛날 겨울나기는 무엇이었나요?" 두세 명이 말한다. 칠판 왼쪽과 오른쪽을 잇는 화살표를 그리며 "방법은 달라졌어요."라고 쓰고, 그 아래 무엇이 같은지는 학생들이 활동지에 스스로 쓰게 한다. 다음 시간에는 지금까지의 탐구를 모둠 발표회에서 발표한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'sort', axis: ['옛날', '오늘날'], slots: ['옛날에 주로 했어요', '오늘날 주로 해요'], cards: ['나무로 썰매를 만들어 타요', '눈썰매장에서 썰매를 빌려 타요'] }, prompt: '겨울 놀이 카드를 옛날과 오늘날로 나누어 보세요.', target: { sort: { '옛날에 주로 했어요': ['나무로 썰매를 만들어 타요'], '오늘날 주로 해요': ['눈썰매장에서 썰매를 빌려 타요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '옛날과 오늘날의 겨울나기에서 같은 것은?', options: ['추운 겨울에 따뜻하게 지내려고 애쓰는 것', '보일러를 켜는 것', '아궁이에 불을 때는 것'], answer: 0, difficulty: 0.25, explain: '방법은 달라졌지만 추위를 이기려는 까닭은 옛날과 오늘날이 같아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날과 오늘날의 겨울나기',
      items: [
        { type: 'table', prompt: '옛날과 오늘날의 겨울나기를 견주어 쓰세요.', columns: ['살핀 것', '옛날', '오늘날'], cells: [['집 데우기', '', ''], ['김치 두기', '', ''], ['빨래하기', '', '']] },
        { type: 'short', prompt: '어른께 들은 옛날 겨울 이야기를 쓰세요.' },
        { type: 'blank', prompt: '같은 것을 쓰세요.', text: '옛날에도 오늘날에도 (                    ).' },
        { type: 'choice', prompt: '오늘날 주로 하는 겨울나기에 ○ 하세요.', options: ['보일러를 켜요', '화로에 손을 쬐어요', '아궁이에 불을 때요'], answer: '보일러를 켜요' },
      ],
      easy: {
        note: '옛날에는 손으로, 오늘날에는 기계로 하는 일이 많아요.',
        items: [
          { type: 'choice', prompt: '옛날에 주로 한 일에 ○ 하세요.', options: ['아궁이에 불을 때요', '보일러를 켜요'], answer: '아궁이에 불을 때요' },
          { type: 'choice', prompt: '옛날에도 오늘날에도 겨울은?', options: ['추워요', '더워요'], answer: '추워요' },
          { type: 'draw', prompt: '옛날 겨울나기 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 빈칸이 하나로 줄어요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '옛날과 오늘날 모두 하는 일 카드가 섞여 있어요. 그런 카드는 카드 칸에 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옛날은 불편해서 나빴다고만 말한다 → 아궁이 불로 밥도 짓고 방도 데운 지혜를 함께 들려준다. ② 지금도 시골 할머니 댁에서 아궁이를 쓴다며 옛날 칸이 틀렸다고 한다 → 칸 이름의 "주로"를 짚고, 그 경험을 이야기 나누기에서 인정해 준다. ③ "까닭도 달라졌다"고 여긴다 → "그때도 겨울은 추웠나요?"라고 묻는다. 어른께 여쭙지 못한 학생은 교사가 준비한 옛날 겨울 사진(화로·누빈 옷·썰매)으로 짝 활동을 한다. 가족 형편을 묻지 않도록 "우리 집" 대신 "어른께 들은 이야기"로 말하게 한다.',
  }));

  lessons.push(L(47, {
    title: '모둠 발표회에서 탐구 결과 발표하고 묻고 답하기',
    objective: '발표 쪽지를 보며 탐구 결과를 까닭과 함께 발표하고, 친구의 발표를 듣고 알맞은 질문을 하거나 답할 수 있다.',
    illustration: ART('four paper-cut children sitting in a small circle, one standing and holding a note card with a tree drawing, the others raising hands with speech bubbles shaped like question marks', '우리 모둠 발표회', [
      { motif: 'tree', x: 380, y: 214, color: 'buttercup' }, { motif: 'star', x: 110, y: 190, color: 'lavender', s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '42차시 발표 쪽지를 꺼내게 한다. "오늘은 네 명씩 모둠 발표회를 해요. 한 사람이 2분 발표하고, 듣는 사람은 질문을 하나씩 해요." 발표하는 사람 약속(쪽지를 보되 친구 얼굴도 보기, 또박또박), 듣는 사람 약속(끝까지 듣기, 끝나고 질문하기)을 칠판에 쓴다. 시연 단추로 좋은 질문을 고르는 모습을 보여 준다.',
        student: '내 발표 쪽지 네 칸을 소리 내지 않고 한 번 읽어 봐요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '좋은 질문', weather: false, cards: ['언제 살폈어요?', '너는 왜 그래?'], shuffle: false }, sequence: [{ pick: ['언제 살폈어요?'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 듣는 사람, 답하는 사람 연습', minutes: 10, tool: 'emotion',
            teacher: '"좋은 질문은 발표한 내용을 더 알고 싶어서 묻는 말이에요." 발표와 상관없는 질문, 놀리는 말은 왜 안 되는지 함께 말한다. 답을 모를 때 지어내지 않고 "더 알아볼게요"라고 말하는 것도 훌륭한 탐구라는 것을 짚는다.',
            task: '친구 발표에 알맞은 질문을 고르고, 발표회에서 생길 일에 바르게 답하는 방법을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '민지의 철새 발표를 듣고 할 좋은 질문만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 질문', weather: false, cards: ['1월에는 오리가 더 많아질까요?', '오리는 어떻게 세었어요?', '너 그 옷 어디서 샀어?', '그건 틀렸어.'] },
                target: { pick: ['1월에는 오리가 더 많아질까요?', '오리는 어떻게 세었어요?'] }, difficulty: 0.1,
                hints: ['좋은 질문은 발표한 내용을 더 알고 싶어서 묻는 말이에요.', '고른 카드가 오리와 강 이야기와 이어지나요? 물음표로 끝나나요?', '오리가 더 많아질지, 어떻게 세었는지 묻는 두 카드가 좋은 질문이에요.'],
                levels: { easy: { toolOptions: { cards: ['1월에는 오리가 더 많아질까요?', '오리는 어떻게 세었어요?', '너 그 옷 어디서 샀어?'] } } } },
              { prompt: '서아가 질문을 받았는데 답을 몰라요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', situation: '친구가 "은행잎은 왜 노래져요?"라고 물었어요. 서아는 아직 몰라요.', choices: [
                { id: 'honest', text: '"잘 모르겠어요. 더 알아보고 알려 줄게요."', result: '친구가 기다리고, 서아는 새 물음이 생겨요', mood: '편안함' },
                { id: 'make', text: '아무렇게나 지어서 답해요', result: '친구가 틀린 것을 맞다고 알게 돼요', mood: '걱정', why: '살펴보지 않은 것을 지어 말하면 친구가 틀리게 알아요.' },
                { id: 'ignore', text: '못 들은 척하고 들어가요', result: '친구는 궁금한 채로 남아요', mood: '속상함', why: '질문을 한 친구의 마음을 떠올려 봐요. 솔직하게 답할 수 있어요.' }] },
                target: { choice: 'honest' }, difficulty: 0.15,
                hints: ['탐구에서는 살펴서 안 것만 말해요. 모르는 것은 어떻게 하면 좋을지 생각해요.', '고른 보기대로 하면 친구가 맞는 것을 알게 되나요, 틀린 것을 알게 되나요?', '모르면 "잘 모르겠어요. 더 알아보고 알려 줄게요."라고 솔직하게 말해요.'],
                levels: { easy: { toolOptions: { choices: [
                  { id: 'honest', text: '"잘 모르겠어요. 더 알아보고 알려 줄게요."', result: '친구가 기다리고, 서아는 새 물음이 생겨요', mood: '편안함' },
                  { id: 'make', text: '아무렇게나 지어서 답해요', result: '친구가 틀린 것을 맞다고 알게 돼요', mood: '걱정', why: '살펴보지 않은 것을 지어 말하면 친구가 틀리게 알아요.' }] } } } },
              { prompt: '친구가 발표하는데 옆 친구가 말을 걸어요. 준호는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '하준이가 발표하는 중에 옆 친구가 준호에게 "쉬는 시간에 뭐 할래?"라고 말을 걸어요.', choices: [
                { id: 'later', text: '"발표 끝나고 이야기하자."라고 작게 말해요', result: '하준이의 발표를 끝까지 들어요', mood: '편안함' },
                { id: 'chat', text: '옆 친구와 계속 이야기해요', result: '하준이가 발표를 멈추고 속상해해요', mood: '속상함', why: '발표하는 친구의 마음을 떠올려 봐요.' },
                { id: 'loud', text: '"조용히 해!" 하고 크게 소리쳐요', result: '발표가 끊기고 모두 놀라요', mood: '놀람', why: '큰 소리도 발표를 방해해요. 작게 말할 수 있어요.' }] },
                target: { choice: 'later' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'later', text: '"발표 끝나고 이야기하자."라고 작게 말해요', result: '하준이의 발표를 끝까지 들어요', mood: '편안함' },
                  { id: 'chat', text: '옆 친구와 계속 이야기해요', result: '하준이가 발표를 멈추고 속상해해요', mood: '속상함', why: '발표하는 친구의 마음을 떠올려 봐요.' },
                  { id: 'loud', text: '"조용히 해!" 하고 크게 소리쳐요', result: '발표가 끊기고 모두 놀라요', mood: '놀람', why: '큰 소리도 발표를 방해해요. 작게 말할 수 있어요.' },
                  { id: 'note', text: '옆 친구에게 쪽지를 써서 건네요', result: '쪽지를 읽느라 둘 다 발표를 놓쳐요', mood: '걱정', why: '쪽지도 발표 듣기를 방해해요. 지금은 듣는 시간이에요.' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 발표회', minutes: 18, tool: 'emotion',
            teacher: '네 명씩 모둠을 만들고 발표 차례를 정한다. 한 사람이 발표 2분, 질문과 답 1분을 지키도록 모둠마다 모래시계나 화면 타이머를 둔다(네 명이면 12분 남짓). 교사는 모둠을 돌며 까닭을 말했는지 듣고, 까닭을 빠뜨린 학생에게는 "왜 그렇게 바뀌었을까요?"라고 묻는다. 발표가 끝나면 스스로 돌아보기를 한다.',
            task: '모둠 친구들 앞에서 발표하고, 친구 발표에 질문을 한 뒤, 내 발표를 돌아봐요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '모둠 친구들 앞에서 발표 쪽지를 보며 내 탐구를 2분 동안 발표해요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '친구 발표마다 좋은 질문을 하나씩 하고, 내 발표에 받은 질문에 답해요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '나는 발표에서 까닭을 얼마나 잘 말했나요?', toolOptions: { mode: 'scale', situation: '모둠 발표회에서 내 탐구 결과를 발표했어요.', feeling: '뿌듯함', ask: '까닭을 얼마나 잘 말했나요?', scaleLabels: { 1: '조금', 5: '아주 잘' }, after: '까닭이 빠졌다면 기록장을 다시 보고 "~해서"를 채워 봐요.' }, target: { level: 'any' }, difficulty: 0, hints: ['정답이 없는 돌아보기예요. 내가 한 것을 떠올려 솔직하게 맞는 칸을 골라요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '모둠마다 "가장 궁금증이 생긴 발표"를 하나 골라 그 친구가 전체 앞에서 30초 동안 알게 된 것과 까닭을 다시 말한다(모둠 대표 6~7명). 받은 질문 가운데 답하지 못한 것은 "더 알아볼 것"으로 기록장에 적게 한다. 다음 시간에는 계절 단원 전체를 돌아본다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '좋은 질문', weather: false, cards: ['국화는 몇 월에 가장 많이 피었어요?', '국화를 어떻게 살폈어요?', '너 꽃 싫어하지?'] }, prompt: '준호의 국화 발표를 듣고 할 좋은 질문만 골라 보세요.', target: { pick: ['국화는 몇 월에 가장 많이 피었어요?', '국화를 어떻게 살폈어요?'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '받은 질문의 답을 모를 때 알맞은 말은?', options: ['더 알아보고 알려 줄게요.', '그런 건 몰라도 돼요.', '아무렇게나 답해요.'], answer: 0, difficulty: 0.15, explain: '모르는 것을 솔직하게 말하고 더 알아보면 새 탐구가 시작돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 발표회 기록',
      items: [
        { type: 'table', prompt: '친구 발표를 듣고 쓰세요.', columns: ['친구(가명)', '알게 된 것', '내가 한 질문'], rows: 3 },
        { type: 'short', prompt: '내가 받은 질문과 내 답을 쓰세요.' },
        { type: 'short', prompt: '더 알아볼 것을 쓰세요.' },
        { type: 'check', prompt: '발표회에서 한 일에 ✓ 하세요.', options: ['친구 얼굴을 보며 발표했어요', '까닭을 말했어요', '친구 발표를 끝까지 들었어요', '질문을 하나 했어요'] },
      ],
      easy: {
        note: '발표 2분 → 질문 1분',
        items: [
          { type: 'short', prompt: '친구 발표에서 알게 된 것 하나를 쓰세요.' },
          { type: 'short', prompt: '내가 한 질문을 쓰세요.' },
          { type: 'choice', prompt: '친구가 발표할 때 나는?', options: ['끝까지 들어요', '옆 친구와 이야기해요'], answer: '끝까지 들어요' },
        ],
      },
    },
    differentiation: {
      easy: '보기가 줄고, 스스로 돌아보기 눈금이 세 칸이에요.',
      base: '보기를 모두 보고 골라요.',
      challenge: '보기가 늘어요. 발표할 때 쪽지를 덜 보고 친구 얼굴을 더 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쪽지만 보고 읽는다 → 한 칸 읽고 고개 들기를 연습한다. ② 질문을 못 한다 → "언제·어떻게·더 알고 싶은 것" 질문 첫마디 카드를 모둠에 나누어 준다. ③ 모르는 질문에 지어서 답한다 → 모르는 것을 솔직히 말하는 것이 탐구라고 칭찬한다. 발표가 어려운 학생은 짝과 함께 나와 한 칸씩 나누어 말하게 한다. 활동지 친구 칸에는 실명 대신 모둠에서 정한 별명이나 번호를 써도 된다.',
  }));

  lessons.push(L(48, {
    title: '계절 단원 정리하고 나를 돌아보기',
    objective: '계절을 탐구한 차례를 정리하고 새 상황에서 계절과 생활의 이어짐을 까닭과 함께 설명하며, 이 단원에서 잘하게 된 것과 더 할 것을 스스로 돌아볼 수 있다.',
    illustration: ART('a paper-cut ring of four seasons around a smiling child holding an observation book, spring blossoms, summer sun, autumn leaves and winter snow arranged like a wreath', '계절과 우리 생활', [
      { motif: 'flower', x: 90, y: 200, color: 'rose' }, { motif: 'leaf', x: 300, y: 190, color: 'buttercup', r: 20 }, { motif: 'tree', x: 400, y: 214, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '단원 첫 시간에 나눈 "여름과 요즘" 카드와 학생들의 기록장, 알림판 사진을 띄운다. "1차시부터 오늘까지 계절 공부에서 가장 기억에 남는 것은 무엇인가요?" 두세 명에게 듣는다. "오늘은 지금까지 탐구한 차례를 정리하고, 새 상황에서도 설명할 수 있는지 해 본 뒤 나를 돌아봐요." 시연 단추로 차례 카드 두 장이 놓이는 모습을 보여 준다.',
        student: '내 기록장에서 가장 마음에 드는 쪽을 펴서 짝에게 보여 줘요.',
        demo: { tool: 'emotion', options: { mode: 'order', weather: false, cards: ['궁금한 것을 물음으로 만들어요', '친구에게 알려요'], shuffle: false }, sequence: [{ order: ['궁금한 것을 물음으로 만들어요', '친구에게 알려요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 탐구 차례 정리하고 새 상황 설명하기', minutes: 14, tool: 'emotion',
            teacher: '"25차시부터 우리는 무엇부터 했나요?" 기록장의 계획서·관찰표·발표 쪽지를 차례로 넘겨 보며 카드를 놓게 한다. 이어 처음 보는 상황에서도 "~해서 ~해요"로 이어지는지 확인한다. 마지막 문항에서 "그냥 안 돼."처럼 까닭 없는 설명과 까닭 있는 설명의 차이를 짚는다.',
            task: '탐구한 차례대로 카드를 놓고, 새 상황에서 계절과 생활을 이어 설명해요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리가 계절을 탐구한 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', weather: false, cards: ['궁금한 것을 물음으로 만들어요', '살필 곳과 방법을 정해요', '계절마다 살피고 기록해요', '자료를 견주어 달라진 점을 찾아요', '까닭과 함께 친구에게 알려요'] },
                target: { order: ['궁금한 것을 물음으로 만들어요', '살필 곳과 방법을 정해요', '계절마다 살피고 기록해요', '자료를 견주어 달라진 점을 찾아요', '까닭과 함께 친구에게 알려요'] }, difficulty: 0.15,
                hints: ['기록장을 처음부터 넘겨 보며 계획서, 관찰표, 발표 쪽지가 나온 차례를 떠올려요.', '살피기 전에 자료를 견줄 수 있을까요? 바로 앞 카드 다음에 올 수 있는지 살펴요.', '물음 만들기 → 방법 정하기 → 살피고 기록하기 → 견주기 → 알리기예요.'],
                levels: { easy: { prompt: '우리가 계절을 탐구한 차례대로 카드 네 장을 놓아 보세요.', toolOptions: { cards: ['궁금한 것을 물음으로 만들어요', '계절마다 살피고 기록해요', '자료를 견주어 달라진 점을 찾아요', '까닭과 함께 친구에게 알려요'] }, target: { order: ['궁금한 것을 물음으로 만들어요', '계절마다 살피고 기록해요', '자료를 견주어 달라진 점을 찾아요', '까닭과 함께 친구에게 알려요'] } } } },
              { prompt: '계절에 생긴 일마다 그 때문에 하는 생활을 이어 보세요.', toolOptions: { mode: 'match', weather: false, slots: [{ id: 's1', label: '겨울에 해가 일찍 져요' }, { id: 's2', label: '눈이 얼어 계단이 미끄러워요' }, { id: 's3', label: '봄비에 밭이 촉촉해져요' }], cards: ['밝을 때 일찍 집에 와요', '계단 손잡이를 잡고 걸어요', '밭에 씨앗을 심어요'] },
                target: { match: { s1: '밝을 때 일찍 집에 와요', s2: '계단 손잡이를 잡고 걸어요', s3: '밭에 씨앗을 심어요' } }, difficulty: 0.2,
                hints: ['왼쪽 일이 생기면 사람들이 무엇을 조심하거나 무엇을 할 수 있게 되는지 떠올려요.', '이은 두 글을 "~해서 ~해요"로 붙여 읽어 보세요. 말이 되나요?', '해가 일찍 져서 일찍 집에 오고, 계단이 미끄러워서 손잡이를 잡고, 밭이 촉촉해서 씨앗을 심어요.'],
                levels: { challenge: { prompt: '계절에 생긴 일마다 그 때문에 하는 생활을 이어 보세요. 어울리는 짝이 없는 카드는 남겨요.', toolOptions: { cards: ['밝을 때 일찍 집에 와요', '계단 손잡이를 잡고 걸어요', '밭에 씨앗을 심어요', '계단에서 뛰어 내려가요'] } } } },
              { prompt: '동생이 "여름 옷을 겨울에도 입으면 안 돼?"라고 물어요. 가장 잘 설명한 말을 골라 보세요.', toolOptions: { mode: 'branch', who: '서아', situation: '서아의 동생이 겨울 아침에 얇은 여름 옷을 입고 나가겠다고 해요.', success: '맞아요! 날씨와 옷을 까닭으로 이어 설명했어요.', ask: '어떻게 설명할까요?', choices: [
                { id: 'why', text: '"겨울엔 바람이 차서 얇은 옷은 몸이 추워. 그래서 두꺼운 옷을 입어."', result: '동생이 고개를 끄덕이고 외투를 입어요', mood: '뿌듯함' },
                { id: 'no', text: '"그냥 안 돼."', result: '동생은 왜 안 되는지 몰라 울상이에요', mood: '속상함', why: '까닭이 빠졌어요. 왜 안 되는지 말해 주면 동생도 알 수 있어요.' },
                { id: 'mom', text: '"엄마가 안 된대."', result: '동생은 엄마가 없을 때 또 여름 옷을 입어요', mood: '걱정', why: '누가 말했는지보다 날씨와 이어진 까닭을 말해 줘야 해요.' }] },
                target: { choice: 'why' }, difficulty: 0.15,
                hints: ['동생이 "아, 그래서구나!" 하고 알아들으려면 설명에 무엇이 들어가야 할지 생각해요.', '고른 말에 겨울 날씨와 이어진 까닭이 들어 있나요?', '"바람이 차서 얇은 옷은 추워. 그래서 두꺼운 옷을 입어."처럼 까닭을 넣어 설명해요.'],
                levels: { easy: { toolOptions: { choices: [
                  { id: 'why', text: '"겨울엔 바람이 차서 얇은 옷은 몸이 추워. 그래서 두꺼운 옷을 입어."', result: '동생이 고개를 끄덕이고 외투를 입어요', mood: '뿌듯함' },
                  { id: 'no', text: '"그냥 안 돼."', result: '동생은 왜 안 되는지 몰라 울상이에요', mood: '속상함', why: '까닭이 빠졌어요. 왜 안 되는지 말해 주면 동생도 알 수 있어요.' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 계절 공부 돌아보기', minutes: 12, tool: 'emotion',
            teacher: '"점수를 매기는 것이 아니라 다음에 무엇을 더 할지 찾으려고 돌아보는 거예요. 어떤 칸이든 솔직하게 고르면 돼요." 눈금을 고른 뒤에는 짝에게 다음 계절 봄에 살펴보고 싶은 것 하나를 말한다. 교사는 돌아다니며 낮은 칸을 고른 학생에게 "무엇이 어려웠나요?"라고 조용히 묻고 기록해 둔다.',
            task: '이 단원에서 내가 잘하게 된 것을 눈금으로 돌아보고, 봄에 살펴보고 싶은 것을 짝에게 말해요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '나는 계절과 생활이 어떻게 이어지는지 까닭을 넣어 말할 수 있나요?', toolOptions: { mode: 'scale', situation: '41차시부터 "~해서 ~해요"로 계절과 생활을 이어 말했어요.', feeling: '뿌듯함', ask: '까닭을 넣어 말할 수 있나요?', scaleLabels: { 1: '조금', 5: '아주 잘' }, after: '어려웠다면 기록장의 발표 쪽지를 다시 읽어 봐요.' }, target: { level: 'any' }, difficulty: 0, hints: ['정답이 없는 돌아보기예요. 내가 한 것을 떠올려 솔직하게 맞는 칸을 골라요.'] },
              { prompt: '나는 계절에 맞게 생활하는 습관을 얼마나 잘 지키나요?', toolOptions: { mode: 'scale', situation: '1차시부터 계절에 맞는 옷차림, 건강 습관, 안전 약속을 배웠어요.', feeling: '편안함', ask: '계절 생활 습관을 얼마나 잘 지키나요?', scaleLabels: { 1: '조금', 5: '아주 잘' }, after: '이번 겨울에 하나만 골라 꼭 지켜 봐요.' }, target: { level: 'any' }, difficulty: 0, hints: ['정답이 없는 돌아보기예요. 내가 한 것을 떠올려 솔직하게 맞는 칸을 골라요.'] },
              { prompt: '다음 계절 봄에 살펴보고 싶은 것 하나를 까닭과 함께 짝에게 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"봄에 살펴보고 싶은 것을 말해 줄 사람?" 서너 명에게 듣고 칠판에 모아 3월에 다시 볼 "봄 탐구 목록"으로 남긴다. 기록장은 가정에 보내 가족과 함께 보게 한다. 한 학기 동안 계절을 살펴 온 것을 칭찬하며 단원을 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '계절과 생활', slots: [{ id: 's1', label: '여름에 비가 많이 와요' }, { id: 's2', label: '가을에 바람이 선선해요' }], cards: ['장화를 신고 다녀요', '얇은 겉옷을 걸쳐요'] }, prompt: '계절에 생긴 일마다 그 때문에 하는 생활을 이어 보세요.', target: { match: { s1: '장화를 신고 다녀요', s2: '얇은 겉옷을 걸쳐요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"계절과 우리 생활은 상관없어요."에 대해 바르게 말한 것은?', options: ['계절이 바뀌면 옷·먹을거리·놀이가 바뀌어요', '맞아요, 상관없어요', '여름에만 생활이 바뀌어요'], answer: 0, difficulty: 0.15, explain: '날씨와 자연이 바뀌면 우리가 입고 먹고 노는 것이 따라 바뀌어요.' },
          { type: 'short', prompt: '이 단원에서 알게 된 것 하나를 "~해서 ~해요."로 쓰세요.', difficulty: 0.2 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계절 공부를 돌아봐요',
      items: [
        { type: 'table', prompt: '계절마다 달라지는 생활을 까닭과 함께 쓰세요.', columns: ['계절', '까닭(~해서)', '생활(~해요)'], cells: [['봄', '', ''], ['여름', '', ''], ['가을', '', ''], ['겨울', '', '']] },
        { type: 'short', prompt: '이 단원에서 내가 잘하게 된 것을 쓰세요.' },
        { type: 'short', prompt: '봄에 살펴보고 싶은 것과 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '내가 가장 좋아하는 계절의 생활 모습을 그리세요.' },
      ],
      easy: {
        note: '봄·여름·가을·겨울 → 날씨가 바뀌면 생활도 바뀌어요',
        items: [
          { type: 'choice', prompt: '겨울에 하는 생활에 ○ 하세요.', options: ['목도리를 둘러요', '물놀이를 해요'], answer: '목도리를 둘러요' },
          { type: 'short', prompt: '봄에 살펴보고 싶은 것을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '내가 좋아하는 계절을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드와 보기가 줄고, 돌아보기 눈금이 세 칸이에요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '짝이 없는 카드가 섞여 있어요. 그런 카드는 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 탐구 차례에서 "살피기"와 "견주기"의 앞뒤를 바꾼다 → 기록장의 관찰표가 먼저, 사진 표 견주기가 나중이었다는 것을 넘겨 보게 한다. ② 자기 평가에서 모두 가장 높은 칸을 고른다 → 점수가 아니라 다음에 할 것을 찾는 일이라고 다시 말해 준다. ③ 봄 탐구 목록은 3월 1학기 통합교과 봄 단원과 이어 쓸 수 있게 사진으로 남겨 둔다. emotion 교구의 차례·짝 모드를 마음이 아닌 탐구 과정과 계절 생활에 쓰므로 힌트를 문항마다 직접 썼다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g2-int-2-05', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '통합교과', unitTitle: TITLE,
    flow: '1~8차시는 여름과 요즘을 견주어 계절이 돌고 도는 차례를 확인하고, 계절마다 달라지는 옷차림·먹을거리·놀이·집 살림과 조심할 일을 날씨와 이어 압니다(3차시는 사계절 모습 분류 차시로 잇습니다). 9~16차시는 오늘 날씨를 아침과 낮에 두 번 살펴 옷과 준비물을 챙기고, 더위와 추위를 이기는 방법을 몸으로 해 보며 한 주 실천표를 씁니다. 17~24차시는 학교 둘레를 다시 걸으며 달라진 것을 찾고, 실천을 돌아보아 다음 계절에도 이어 갈 습관과 하고 싶은 일을 정합니다. 25~32차시는 계절이 날씨만 바꾸는 것이 아님을 알고, 궁금한 것을 살펴서 알아낼 수 있는 물음으로 바꾸어 살필 것과 방법을 계획합니다. 33~40차시는 같은 곳을 두 계절 넘게 살핀 사진·그림·그림그래프·달력을 읽어 달라진 점을 적고, 41~48차시는 "~해서 ~해요"로 날씨·자연과 생활의 이어짐을 설명하고, 발표 쪽지를 쓰고, 다가오는 겨울 준비를 까닭과 함께 알림판으로 알리며, 옛날과 오늘날의 겨울나기를 견준 뒤 모둠 발표회를 열고 단원 전체를 스스로 돌아봅니다.',
    refs: { 3: 'g2-together-seasons' },
    lessons: lessons,
  });
})();
