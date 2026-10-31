/* 고3 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조·식생활교육지원법 제26조(건강한 식생활·영양교육 연 2회 이상). 자취 첫해의 장보기·식단과 식품 표시(소비기한·보관 방법·원산지·인증) 종합 판독을 다룬다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 12; const CODE = 'food';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '영양·식생활';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, title, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', title, slots, cards }, target: { fill }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XM = (prompt, topic, slots, cards, match, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic, slots, cards }, state: { at: {} }, prompt, target: { match }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d = 0.2) => ({ type: 'tool', tool: 'story', options: { mode: 'order', title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XT = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' };
  // 도입 시연
  const DEMO = (topic, slots, cards, sort) => ({ tool: 'mindmap', options: { mode: 'sort', topic, slots, cards, shuffle: false }, sequence: [{ sort }] });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 맞지 않는 보기를 근거를 들어 가려내요.',
  };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '졸업 뒤 기숙사·자취로 혼자 식사를 꾸리게 될 고3을 위한 마지막 식생활 단원입니다. 1차시에는 냉장고 확인 → 한 주 식단 → 장보기 목록 → 표시 확인하며 구매 → 소분·보관의 차례로 혼자 사는 첫해의 한 주 식단을 꾸리고, 적은 예산으로 식품군을 채우는 장바구니를 고릅니다. 2차시에는 소비기한·보관 방법·원산지·인증 표시를 한꺼번에 읽어 장보기 상황에서 판단합니다. 초·중·고 식생활 교육을 스스로 실천하는 힘으로 묶는 단원이며, 경제·금융 교육의 예산 세우기와 연계할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '혼자 사는 첫해의 한 주 식단과 장보기 차례 세우기',
        objective: '냉장고 확인부터 장보기·보관까지의 차례를 세우고, 정해진 예산 안에서 식품군을 고루 채우는 장바구니를 꾸릴 수 있다.',
        draw: 'a small studio kitchen made of paper with an open fridge, a shopping list and a basket of vegetables, eggs and rice',
        banner: '나의 첫 장보기', extra: [{ motif: 'leaf', x: 330, y: 224, color: 'mint' }],
        intro: {
          teacher: '"내년에 자취를 시작한다면 첫 주 저녁은 무엇으로 해결하겠어요?" 대답을 듣고(기다릴 반응: "배달이요", "라면이요", "편의점이요") 칠판에 적는다. "요리는 시간도 돈도 많이 들어요"라는 말이 나오면 "한 번 장을 봐서 일주일을 버티는 방법이 있다면 어떨까요?"라고 되묻는다. 시연으로 장보기 전후 할 일을 나누고, 오늘은 혼자서도 골고루 먹는 한 주를 계획한다고 밝힌다.',
          student: '혼자 산다면 꼭 사 두고 싶은 식재료 두 가지를 짝과 말해 봅시다.',
          demo: DEMO('장보기 앞뒤', ['장보기 전', '장보기 뒤'], ['냉장고 확인하기', '소분해서 보관하기'], { '장보기 전': ['냉장고 확인하기'], '장보기 뒤': ['소분해서 보관하기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 장보기 차례 세우기', minutes: 13, tool: 'story',
            teacher: '"냉장고를 먼저 보지 않으면 어떤 일이 생길까요?" 이미 있는 재료를 또 사서 버리게 되는 장면을 떠올리게 한다. 1번에서 목록 없이 바로 마트에 가는 순서를 고른 학생에게 "목록이 없으면 무엇을 더 사게 될까요?"라고 묻는다. 3번에서 고기를 한꺼번에 냉장실에 넣는 순서를 고르면 한 번 먹을 만큼 나눠 냉동하는 까닭을 짚는다.',
            task: '혼자 사는 첫해의 장보기 장면 카드를 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('한 주 장보기의 차례로 카드를 놓아 보세요.', '한 주 장보기', ['처음', '다음', '그다음', '끝'], [C('fridge', '냉장고 속 재료 확인', 'house'), C('menu', '한 주 식단 짜기', 'leaf'), C('list', '장보기 목록 쓰기', 'star'), C('shop', '표시 보며 고르기', 'flower')], ['fridge', 'menu', 'list', 'shop'], 0.2),
              SO('장을 본 뒤 정리하는 차례로 카드를 놓아 보세요.', '장 본 뒤 정리', ['처음', '다음', '끝'], [C('cold', '냉장·냉동부터 넣기', 'snow'), C('split', '한 번 먹을 만큼 나누기', 'leaf'), C('old', '먼저 산 것 앞으로', 'sun')], ['cold', 'split', 'old'], 0.25),
              SO('남은 재료로 한 끼를 만드는 차례로 카드를 놓아 보세요.', '남은 재료 한 끼', ['처음', '다음', '그다음', '끝'], [C('check', '기한 짧은 재료 찾기', 'star'), C('plan', '어울리는 메뉴 정하기', 'leaf'), C('cook', '손 씻고 조리하기', 'sun'), C('store', '남은 음식 식혀 보관', 'snow')], ['check', 'plan', 'cook', 'store'], 0.3,
                { conclude: '확인 → 계획 → 목록 → 구매 → 보관의 차례를 지키면 버리는 음식과 돈이 줄어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 예산 안에서 장바구니 꾸리기', minutes: 14, tool: 'mindmap',
            teacher: '"같은 돈으로 더 오래, 더 골고루 먹으려면 무엇을 살까요?" 쌀·달걀·두부·제철 채소·냉동 채소처럼 오래가고 여러 요리에 쓰는 재료를 찾게 한다. 2번에서 냉동 채소는 영양이 없다고 여기는 학생에게 "손질해 바로 얼린 채소는 오래 두고 쓸 수 있는 좋은 선택이에요"라고 알려 준다. 3번은 짝과 말로 나눈다.',
            task: '혼자 사는 첫해의 장바구니에 담을 재료를 고르고 식품군으로 나누어요.',
            levels: LV,
            items: [
              MS('자취 장바구니 재료를 식품군으로 나누어 보세요.', '장바구니 식품군', ['곡류', '고기·생선·달걀·콩류', '채소류'], ['쌀', '잡곡 식빵', '달걀', '두부', '양배추', '냉동 채소'], { '곡류': ['쌀', '잡곡 식빵'], '고기·생선·달걀·콩류': ['달걀', '두부'], '채소류': ['양배추', '냉동 채소'] }, 0.2),
              MP('적은 예산으로 오래, 여러 요리에 쓰기 좋은 재료만 골라 담아 보세요.', '알뜰 장바구니', ['달걀 한 판', '양파 한 망', '냉동 채소', '조각 케이크'], ['달걀 한 판', '양파 한 망', '냉동 채소'], 0.25,
                { conclude: '오래가고 여러 요리에 쓰는 재료를 고르면 예산 안에서 골고루 먹을 수 있어요.' }),
              TALK('짝과 함께 "달걀·두부·양배추"로 만들 수 있는 한 끼를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"자취 첫 주에 꼭 지킬 장보기 원칙 하나를 말해 볼까요?" 출구 1번에서 목록을 장보기 뒤에 둔 학생에게는 목록이 충동구매를 막는 장치라는 점을 다시 짚는다. 요리 실력보다 계획이 먼저라는 말로 마무리한다.',
          exit: [
            XO('장보기의 차례로 카드를 놓아 보세요.', '장보기 차례', ['처음', '다음', '끝'], [C('x1', '냉장고 확인', 'house'), C('x2', '목록 쓰기', 'star'), C('x3', '나눠서 보관', 'snow')], ['x1', 'x2', 'x3']),
            XC('예산이 적을 때 알맞은 장보기 방법은?', ['눈에 띄는 대로 산다', '오래가고 여러 요리에 쓰는 재료를 목록대로 산다', '할인하면 무엇이든 많이 산다'], 1, '목록과 활용도 높은 재료가 버리는 돈을 줄여요.'),
            XT('혼자 사는 첫 주에 만들 수 있는 간단한 한 끼와 필요한 재료를 쓰세요.'),
          ],
        },
        ws: {
          title: '자취 첫 장보기와 한 주 식단',
          items: [
            { type: 'table', prompt: '한 주 저녁 식단을 식품군을 생각하며 계획하세요.', columns: ['요일', '메뉴', '채운 식품군'], cells: [['월', '', ''], ['수', '', ''], ['금', '', '']], answer: '예: 달걀 볶음밥+양배추 샐러드 / 두부조림+밥 / 채소 카레' },
            { type: 'choice', prompt: '장보기 전에 할 일에 ○ 하세요.', options: ['소분해서 냉동하기', '냉장고 속 재료 확인하기', '남은 음식 식히기'], answer: '냉장고 속 재료 확인하기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '장보기 ___을 쓰면 충동구매와 버리는 음식이 줄어든다.', answer: '목록' },
            { type: 'short', prompt: '적은 예산으로 골고루 먹기 위한 나만의 방법 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 혼자 살면 배달·편의점밖에 없다고 여긴다 → 계획과 활용도 높은 재료로 바꿀 수 있음을 보여 준다. ② 냉동 채소를 낮게 본다 → 보관성과 활용도를 짚는다. ③ 학생의 실제 가정 형편·예산을 묻지 않는다 — 장면은 모두 가상이다.',
      }),
      LESSON(2, {
        title: '소비기한·보관 방법·원산지·인증 표시 한꺼번에 읽기',
        objective: '식품 포장의 소비기한·보관 방법·원산지·인증 표시를 찾아 그 뜻을 말하고, 장보기 상황에서 표시를 근거로 알맞게 판단할 수 있다.',
        draw: 'a paper-cut food package with labels for dates, storage, origin and a certification badge, under a magnifying glass',
        banner: '표시를 읽는 소비자', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"우유 팩에서 날짜 말고 꼭 봐야 할 표시가 또 있을까요?" 대답을 듣고(기다릴 반응: "모르겠어요", "가격이요") 포장의 여러 칸을 보여 준다. "날짜만 지나지 않으면 안전하죠"라는 말이 나오면 "냉장 보관해야 하는 우유를 하루 종일 가방에 두었다면요?"라고 되묻는다. 오늘은 표시를 한꺼번에 읽는 소비자가 되어 본다고 밝힌다.',
          student: '장을 볼 때 포장에서 가장 먼저 확인하는 것 하나를 짝과 말해 봅시다.',
          demo: DEMO('포장 속 표시', ['날짜 표시', '보관 표시'], ['소비기한', '냉장 보관'], { '날짜 표시': ['소비기한'], '보관 표시': ['냉장 보관'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 표시와 그 뜻 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"소비기한은 무엇을 기준으로 정한 날짜일까요?" 소비기한은 표시된 보관 방법을 지켰을 때 먹어도 안전한 기한이라는 점을 짚고, 우리나라는 유통기한 대신 소비기한을 표시하도록 바뀌었다고 알려 준다. 2번에서 "보관 방법은 참고만 하면 된다"고 여기는 학생에게 보관 방법을 지키지 않으면 기한 안이라도 안전하지 않을 수 있다는 점을 짚는다.',
            task: '식품 표시와 그 표시가 알려 주는 것을 이어요.',
            levels: LV,
            items: [
              MM('표시와 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '식품 표시 읽기', [{ id: 't1', label: '소비기한' }, { id: 't2', label: '보관 방법' }, { id: 't3', label: '원산지' }], ['보관 조건을 지킬 때 안전한 기한', '안전하게 두는 온도·장소', '농수산물을 생산한 나라·지역', '가장 맛있는 날'], { t1: '보관 조건을 지킬 때 안전한 기한', t2: '안전하게 두는 온도·장소', t3: '농수산물을 생산한 나라·지역' }, 0.25),
              MS('표시에 대한 생각을 맞는 것과 틀린 것으로 나누어 보세요.', '표시에 대한 생각', ['맞는 생각', '틀린 생각'], ['보관 방법을 지켜야 기한이 유효', '개봉 뒤엔 빨리 먹어요', '기한 안이면 상온도 괜찮아요', '원산지는 맛을 보장해요'], { '맞는 생각': ['보관 방법을 지켜야 기한이 유효', '개봉 뒤엔 빨리 먹어요'], '틀린 생각': ['기한 안이면 상온도 괜찮아요', '원산지는 맛을 보장해요'] }, 0.3),
              MP('알레르기가 있는 사람이 꼭 확인할 표시만 골라 담아 보세요.', '알레르기와 표시', ['원재료명', '알레르기 유발 물질', '같은 시설 제조 안내', '포장 디자인'], ['원재료명', '알레르기 유발 물질', '같은 시설 제조 안내'], 0.25,
                { conclude: '날짜·보관·원재료·원산지를 함께 읽어야 안전하고 알맞은 선택을 할 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 장보기 상황에서 표시로 판단하기', minutes: 14, tool: 'mindmap',
            teacher: '"이 상황에서 어떤 표시가 판단의 근거가 될까요?" 상황마다 근거가 되는 표시를 말하게 한다. 인증 표시(예: 식품안전관리인증 HACCP)는 정해진 기준과 절차를 거쳤다는 표시이지 영양이 좋다는 뜻은 아니라는 점을 짚는다. 3번은 짝과 말로 나눈다.',
            task: '장보기 상황과 알맞은 판단을 잇고, 표시를 근거로 고를 것을 골라요.',
            levels: LV,
            items: [
              MM('상황과 알맞은 판단을 이어 보세요. 맞지 않는 카드는 남겨요.', '표시로 판단하기', [{ id: 'k1', label: '냉장 식품을 반나절 상온에 둠' }, { id: 'k2', label: '내일까지 소비기한, 다음 주에 먹을 예정' }, { id: 'k3', label: '땅콩 알레르기, 같은 시설 제조 안내' }], ['기한 안이라도 먹지 않기', '오늘 먹거나 사지 않기', '다른 제품 고르기', '날짜만 보고 먹기'], { k1: '기한 안이라도 먹지 않기', k2: '오늘 먹거나 사지 않기', k3: '다른 제품 고르기' }, 0.35),
              MS('표시를 두 가지로 나누어 보세요.', '표시가 말하는 것', ['안전·생산 관리 정보', '광고 문구'], ['식품안전관리인증', '원산지 국내산', '"엄마의 손맛"', '"건강 가득"'], { '안전·생산 관리 정보': ['식품안전관리인증', '원산지 국내산'], '광고 문구': ['"엄마의 손맛"', '"건강 가득"'] }, 0.3,
                { conclude: '공식 표시는 판단의 근거가 되지만, 광고 문구는 근거가 아니에요.' }),
              TALK('짝과 함께 "장 볼 때 포장에서 확인할 네 가지"를 차례대로 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"초등학교부터 배운 식생활 가운데 졸업 뒤에도 꼭 가져갈 한 가지는 무엇인가요?" 출구 1번에서 광고 문구를 근거로 고른 학생에게는 공식 표시와 광고 문구의 차이를 다시 짚는다. 표시를 읽는 습관이 나와 가족의 건강을 지키는 소비자의 힘이라는 말로 마무리한다.',
          exit: [
            XS('표시를 두 가지로 나누어 보세요.', '근거가 될까', ['판단 근거', '근거 아님'], ['소비기한', '보관 방법', '"자연의 맛"', '"인기 1위"'], { '판단 근거': ['소비기한', '보관 방법'], '근거 아님': ['"자연의 맛"', '"인기 1위"'] }),
            XC('소비기한에 대한 설명으로 가장 알맞은 것은?', ['보관 방법과 상관없이 먹어도 되는 날짜', '표시된 보관 방법을 지켰을 때 먹어도 안전한 기한', '가게에서 팔 수 있는 마지막 날'], 1, '소비기한은 보관 방법을 지켰을 때의 안전한 섭취 기한이에요.'),
            XT('장을 볼 때 포장에서 확인할 표시 세 가지와 그 까닭을 쓰세요.'),
          ],
        },
        ws: {
          title: '식품 표시 종합 판독',
          items: [
            { type: 'table', prompt: '표시와 그 뜻을 쓰세요.', columns: ['표시', '뜻'], cells: [['소비기한', ''], ['보관 방법', ''], ['원산지', ''], ['알레르기 유발 물질', '']], answer: '보관 조건을 지킬 때 안전한 기한 / 안전하게 두는 온도·장소 / 생산한 나라·지역 / 알레르기를 일으킬 수 있는 원료' },
            { type: 'choice', prompt: '냉장 식품을 반나절 상온에 두었다면?', options: ['기한 안이니 먹는다', '먹지 않는다', '냉동하면 괜찮다'], answer: '먹지 않는다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '소비기한은 표시된 ___ 방법을 지켰을 때의 안전한 기한이다.', answer: '보관' },
            { type: 'short', prompt: '광고 문구와 공식 표시의 차이를 한 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 날짜만 보면 된다고 여긴다 → 보관 방법과 함께 읽게 한다. ② 인증 표시를 영양이 좋다는 뜻으로 오해한다 → 기준과 절차를 거친 관리 표시임을 짚는다. ③ 소비기한 표시 제도는 식품의약품안전처 안내를 기준으로 하며, 일부 품목의 적용 시기 차이는 이 차시에서 다루지 않는다.',
      }),
    ],
  });
})();
