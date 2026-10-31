/* 중2 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조, 식생활교육지원법 제26조(연 2회 이상).
 * 영양성분표 항목은 식품의약품안전처 영양표시 항목(열량·나트륨·탄수화물·당류·지방·트랜스지방·포화지방·콜레스테롤·단백질, 1일 영양성분 기준치에 대한 비율 %)을 따른다. 비교 숫자는 수업용으로 지은 값이다.
 * 섭식 문제는 증상 진단이 아니라 "혼자 고민하지 말고 보건 선생님·Wee클래스·1388에 말하기"까지만 다룬다. 장면·인물은 가명. */
(function () {
  const G = 8; const CODE = 'food';
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
    { motif: 'house', x: 96, y: 214, color: 'mint', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
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
    flow: '1학년에서 식품군으로 골고루 먹기를 익힌 학생들이 2학년에서는 정보를 읽고 판단하는 식생활을 배웁니다. 1차시에는 가공식품의 영양성분표에서 1회 제공량·당류·나트륨·% 기준치를 읽고 두 식품을 비교해 고릅니다. 2차시에는 SNS에 도는 굶기·원푸드·디톡스 다이어트 정보의 위험을 가려내고, 몸을 존중하는 선택과 도움 경로를 고릅니다. 체형·몸무게를 평가하거나 비교하는 말은 쓰지 않고, 모든 사례는 가상 인물로 다룹니다. 3학년(식품 표시와 지속가능한 식생활)으로 이어집니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '영양성분표의 당류·나트륨을 읽고 두 간식 비교하기',
        objective: '영양성분표에서 1회 제공량, 당류·나트륨의 양과 1일 기준치 비율을 읽고, 두 식품을 비교해 더 나은 선택을 할 수 있다.',
        draw: 'two paper snack packages side by side with nutrition labels and a magnifying glass over the sugar line',
        banner: '표시를 읽고 골라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"과자 봉지 뒷면에서 가장 먼저 봐야 할 칸은 어디일까요?" 대답을 듣고(기다릴 반응: "칼로리요", "유통기한이요") 시연으로 표시 항목 카드를 나눈다. "열량만 낮으면 건강한 거예요"라는 말이 나오면 "열량은 낮아도 나트륨이 많다면요?"라고 되묻는다. 오늘은 영양성분표를 읽고 두 간식을 비교한다고 밝힌다.',
          student: '편의점에서 간식을 고를 때 내가 보는 기준 하나를 짝에게 말해 봅시다(맛·값·양 등).',
          demo: DEMO('영양성분표', ['적게 먹을 것', '챙겨 먹을 것'], ['나트륨', '단백질'], { '적게 먹을 것': ['나트륨'], '챙겨 먹을 것': ['단백질'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 영양성분표 항목 읽기', minutes: 13, tool: 'mindmap',
            teacher: '"1일 영양성분 기준치에 대한 비율 %는 무엇을 알려 줄까요?" 하루에 필요한 양 가운데 이 식품 한 번이 얼마를 차지하는지라는 점을 짚는다. 1회 제공량과 총 내용량을 헷갈리는 학생이 많다 — "한 봉지에 2회 제공량이 들어 있다면 한 봉지를 다 먹을 때 나트륨은 몇 배일까요?"라고 묻는다.',
            task: '영양성분표의 항목과 뜻을 잇고, 적게 먹을 성분과 챙길 성분을 나누어요.',
            levels: LV,
            items: [
              MM('영양성분표 표기와 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '표기의 뜻', [{ id: 'n1', label: '1회 제공량' }, { id: 'n2', label: '총 내용량' }, { id: 'n3', label: '% 기준치' }], ['한 번에 먹는 양의 기준', '봉지에 든 전체 양', '하루 필요량 중 차지하는 몫', '식품의 가격'], { n1: '한 번에 먹는 양의 기준', n2: '봉지에 든 전체 양', n3: '하루 필요량 중 차지하는 몫' }, 0.2),
              MS('영양성분을 두 가지로 나누어 보세요.', '성분 나누기', ['많으면 줄일 것', '챙겨 먹을 것'], ['당류', '나트륨', '단백질', '포화지방', '식이섬유'], { '많으면 줄일 것': ['당류', '나트륨', '포화지방'], '챙겨 먹을 것': ['단백질', '식이섬유'] }, 0.25),
              MP('한 봉지에 2회 제공량이 든 과자를 다 먹을 때 맞는 설명만 골라 담아 보세요.', '한 봉지를 다 먹으면', ['표의 나트륨 두 배를 먹어요', '표의 열량 두 배를 먹어요', '표의 숫자만큼만 먹어요', '1회 제공량은 신경 안 써도 돼요'], ['표의 나트륨 두 배를 먹어요', '표의 열량 두 배를 먹어요'], 0.3,
                { conclude: '영양성분표의 숫자는 1회 제공량 기준이에요. 내가 먹는 양과 견주어 읽어야 해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 식품을 비교해 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"두 음료 중 어느 쪽이 덜 달까요? 무엇을 근거로 말할 수 있나요?" 학생이 숫자를 직접 읽고 근거로 말하게 한다. "제로라고 쓰여 있으면 마음껏 먹어도 돼요"라는 생각에는 다른 성분(카페인·나트륨)과 먹는 양도 함께 본다는 점을 짚는다. 3번은 짝과 말로 나눈다.',
            task: '두 식품의 영양성분을 비교해 상황에 더 맞는 것을 고르고 근거를 말해요.',
            levels: LV,
            items: [
              MS('두 음료의 특징을 나누어 보세요(가 음료 당류 30g, 나 음료 당류 8g).', '두 음료 비교', ['가 음료', '나 음료'], ['당류가 더 많아요', '당류 기준치 %가 낮아요', '자주 마시기 부담돼요', '목마를 때 덜 부담돼요'], { '가 음료': ['당류가 더 많아요', '자주 마시기 부담돼요'], '나 음료': ['당류 기준치 %가 낮아요', '목마를 때 덜 부담돼요'] }, 0.25),
              MM('상황과 영양성분표에서 먼저 볼 항목을 이어 보세요. 맞지 않는 카드는 남겨요.', '먼저 볼 항목', [{ id: 'c1', label: '짠 라면을 자주 먹을 때' }, { id: 'c2', label: '단 음료를 고를 때' }, { id: 'c3', label: '운동 뒤 간식을 고를 때' }], ['나트륨', '당류', '단백질', '포장 색깔'], { c1: '나트륨', c2: '당류', c3: '단백질' }, 0.3,
                { conclude: '내 상황에 맞는 항목을 먼저 보면 같은 표에서도 더 나은 선택이 보여요.' }),
              TALK('짝과 실제로 자주 사는 간식 하나를 떠올려 "영양성분표에서 확인할 항목 두 가지"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"다음에 간식을 살 때 뒷면에서 무엇을 먼저 볼 건가요?" 출구 1번에서 1회 제공량과 총 내용량을 헷갈린 학생에게는 한 봉지에 몇 회 제공량이 들었는지부터 보라고 다시 말해 준다.',
          exit: [
            XS('영양성분표 읽기 행동을 두 가지로 나누어 보세요.', '표 읽기', ['바르게 읽기', '잘못 읽기'], ['1회 제공량을 먼저 봐요', '포장 앞 문구만 믿어요', '당류와 나트륨을 견줘요', '열량만 보고 골라요'], { '바르게 읽기': ['1회 제공량을 먼저 봐요', '당류와 나트륨을 견줘요'], '잘못 읽기': ['포장 앞 문구만 믿어요', '열량만 보고 골라요'] }),
            XC('라면 한 봉지에 나트륨이 1일 기준치의 80%라고 쓰여 있어요. 알맞은 해석은 무엇인가요?', ['하루에 필요한 나트륨의 80%를 한 번에 먹는다', '라면의 80%가 나트륨이다', '나트륨이 거의 없다'], 0, '% 기준치는 하루 기준량 가운데 이 식품이 차지하는 몫이에요.'),
            XT('두 간식 가운데 하나를 고를 때 내가 쓸 기준을 영양성분표 항목으로 한 문장 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '영양성분표 읽기',
          items: [
            { type: 'table', prompt: '표기의 뜻을 쓰세요.', columns: ['표기', '뜻'], cells: [['1회 제공량', ''], ['총 내용량', ''], ['% 기준치', '']], answer: '한 번에 먹는 양의 기준, 전체 양, 하루 기준량 중 차지하는 몫' },
            { type: 'choice', prompt: '많이 먹으면 줄여야 할 성분이 아닌 것에 ○ 하세요.', options: ['당류', '나트륨', '단백질'], answer: '단백질' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '2회 제공량이 든 과자 한 봉지를 다 먹으면 표 숫자의 ___배를 먹어요.', answer: '두(2)' },
            { type: 'short', prompt: '"제로 음료는 마음껏 마셔도 된다"는 말에 대한 나의 생각을 근거와 함께 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 1회 제공량과 총 내용량을 헷갈린다 → 봉지 하나에 몇 회분인지부터 읽게 한다. ② 열량만 보고 고른다 → 당류·나트륨을 함께 견주게 한다. ③ 비교 숫자는 수업용 가상 값이다 — 실제 상품 이름을 쓰지 않는다. 실제 포장을 가져와 읽을 때는 특정 상품을 비난하지 않고 읽는 방법에 집중한다.',
      }),

      LESSON(2, {
        title: 'SNS 다이어트 정보의 위험 가려내고 몸 존중하기',
        objective: '굶기·한 가지 음식만 먹기 같은 다이어트 정보의 위험을 가려내고, 몸을 존중하는 선택과 도움 받을 곳을 고를 수 있다.',
        draw: 'a paper smartphone showing flashy diet ads crossed out, next to a balanced paper meal and a friendly school nurse',
        banner: '내 몸을 존중해요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"일주일 만에 5kg이 빠진다는 광고, 믿어도 될까요?" 대답을 듣고(기다릴 반응: "거짓말 같아요", "해 보고 싶기도 해요") 시연으로 정보 카드를 나눈다. "연예인도 하니까 괜찮아요"라는 말이 나오면 "성장기인 중학생 몸에도 똑같이 괜찮을까요?"라고 되묻는다. 오늘은 SNS 다이어트 정보를 판단한다고 밝힌다. 체형·몸무게 이야기는 하지 않는다는 약속을 먼저 정한다.',
          student: 'SNS에서 본 "빨리, 쉽게"를 내세운 광고 문구 하나를 떠올려 그 말이 왜 솔깃한지 짝에게 말해 봅시다.',
          demo: DEMO('다이어트 정보', ['믿을 만해요', '의심해요'], ['골고루 먹고 움직이기', '사흘 굶으면 완성'], { '믿을 만해요': ['골고루 먹고 움직이기'], '의심해요': ['사흘 굶으면 완성'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 다이어트 장면에서 선택하기', minutes: 14, tool: 'emotion',
            teacher: '"이 선택을 하면 성장기 몸에는 어떤 일이 생길까요?" 결과 칸을 읽게 한다. 굶기는 어지러움·집중 저하·폭식으로 이어지기 쉽다는 점을 짚는다. 친구의 외모 평가 장면에서는 "놀리지 않았어도 몸을 평가하는 말 자체가 부담이 될 수 있어요"라고 말해 준다.',
            task: '다이어트 정보와 외모 압박이 있는 장면에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('SNS에서 "물만 마시는 3일 다이어트" 영상을 봤어요.', '진은 SNS에서 "물만 마시고 3일이면 끝"이라는 영상을 봤어요.', [
                { id: 'try', text: '오늘부터 따라 해요', result: '이틀째 어지러워 수업 중 엎드려요.', mood: '아픔', why: '굶기는 성장기 몸에 필요한 영양을 끊어요.' },
                { id: 'check', text: '보건 선생님께 정말 괜찮은지 여쭤요', result: '골고루 먹고 움직이는 방법을 알게 돼요.', mood: '안심' },
                { id: 'share', text: '친구들에게 같이 하자고 공유해요', result: '친구들까지 끼니를 거르게 돼요.', mood: '걱정', why: '검증되지 않은 정보를 퍼뜨리면 친구도 위험해져요.' }], 'check', 0.2),
              EB('친구가 단톡방에서 내 사진을 보고 몸매 이야기를 해요.', '단톡방에 단체 사진이 올라오자 누가 "하늘이 요즘 살찐 듯"이라고 써요.', [
                { id: 'starve', text: '그날부터 저녁을 굶어요', result: '배고픔에 밤마다 폭식하고 더 힘들어져요.', mood: '속상함', why: '남의 평가에 맞춰 굶으면 몸과 마음이 함께 지쳐요.' },
                { id: 'say', text: '"몸 평가는 하지 말자"고 말해요', result: '친구가 사과하고 단톡방 분위기가 바뀌어요.', mood: '뿌듯함' },
                { id: 'hide', text: '아무 말 없이 사진을 피해요', result: '마음이 계속 무거워요.', mood: '슬픔', why: '혼자 참기보다 마음을 말하거나 어른과 나누는 것이 좋아요.' }], 'say', 0.25),
              EB('친구가 요즘 밥을 거의 안 먹고 살이 쪘다고 자꾸 걱정해요.', '단짝 수가 몇 주째 급식을 거의 남기고 "나 너무 뚱뚱해"를 되풀이해요.', [
                { id: 'praise', text: '"말랐다, 부럽다"고 칭찬해요', result: '수는 더 덜 먹으려 해요.', mood: '걱정', why: '몸매 칭찬은 굶는 행동을 더 부추길 수 있어요.' },
                { id: 'ignore', text: '수가 알아서 하겠지 하고 둬요', result: '수의 고민이 점점 커져요.', mood: '슬픔', why: '혼자 두면 도움을 받을 기회를 놓쳐요.' },
                { id: 'care', text: '걱정을 들어 주고 보건 선생님께 같이 가자고 해요', result: '수가 보건 선생님과 이야기를 시작해요.', mood: '안심' }], 'care', 0.3,
                { conclude: '몸에 대한 고민이 오래가면 혼자 버티지 않고 믿을 만한 어른과 나누는 것이 먼저예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 믿을 만한 정보와 위험한 정보 가르기', minutes: 13, tool: 'emotion',
            teacher: '"광고 문구에서 위험 신호가 되는 낱말은 무엇일까요?" "단기간·무조건·한 가지만·굶기" 같은 말을 찾게 한다. 2번에서 "의사도 아닌 사람 후기"를 근거로 삼는 학생에게는 개인 후기는 내 몸에 맞는 근거가 아니라는 점을 짚는다. 도움 받을 곳은 보건 선생님·Wee클래스·청소년상담 1388임을 말해 준다.',
            task: '다이어트 정보 카드를 믿을 만한 정보와 의심할 정보로 나누고, 도움 받을 곳을 골라요.',
            levels: LV,
            items: [
              { prompt: '다이어트 정보 카드를 두 가지로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['믿을 만해요', '의심해요'], cards: ['골고루 먹고 꾸준히 움직여요', '일주일에 5kg 보장', '사과만 먹는 원푸드', '잠을 충분히 자요'] }, target: { sort: { '믿을 만해요': ['골고루 먹고 꾸준히 움직여요', '잠을 충분히 자요'], '의심해요': ['일주일에 5kg 보장', '사과만 먹는 원푸드'] } }, difficulty: 0.2 },
              { prompt: '광고 속 위험 신호가 되는 말만 골라 담아 보세요.', toolOptions: { mode: 'pick', basket: '위험 신호', cards: ['단기간에 확 빠져요', '이것만 먹으면 돼요', '골고루 먹어요', '끼니를 굶어요'] }, target: { pick: ['단기간에 확 빠져요', '이것만 먹으면 돼요', '끼니를 굶어요'] }, difficulty: 0.25 },
              { prompt: '고민과 도움 받을 곳을 이어 보세요. 맞지 않는 카드는 남겨요.', toolOptions: { mode: 'match', slots: [{ id: 'h1', label: '이 다이어트가 안전한지 궁금해요' }, { id: 'h2', label: '외모 고민으로 마음이 힘들어요' }, { id: 'h3', label: '학교 밖에서 상담하고 싶어요' }], cards: ['보건 선생님', 'Wee클래스 상담 선생님', '청소년상담 1388', 'SNS 댓글'] }, target: { match: { h1: '보건 선생님', h2: 'Wee클래스 상담 선생님', h3: '청소년상담 1388' } }, difficulty: 0.3,
                conclude: '건강 정보는 보건 선생님, 마음 고민은 상담 선생님과 1388 — 혼자 판단하지 않아도 돼요.' },
            ],
          },
        ],
        wrap: {
          teacher: '"오늘부터 SNS에서 다이어트 광고를 보면 스스로에게 어떤 질문을 할 건가요?" 출구 1번에서 원푸드를 믿을 만하다고 둔 학생에게는 한 가지 음식만으로는 식품군을 채울 수 없다는 점을 1학년 식품구성자전거로 다시 연결한다.',
          exit: [
            XS('정보 카드를 두 가지로 나누어 보세요.', '어떤 정보일까', ['믿을 만해요', '의심해요'], ['성장기엔 끼니를 챙겨요', '저녁만 굶으면 끝', '물을 충분히 마셔요', '이 차 한 잔이면 빠져요'], { '믿을 만해요': ['성장기엔 끼니를 챙겨요', '물을 충분히 마셔요'], '의심해요': ['저녁만 굶으면 끝', '이 차 한 잔이면 빠져요'] }),
            XC('몇 주째 밥을 거의 안 먹는 친구에게 가장 알맞은 행동은 무엇인가요?', ['말랐다고 칭찬한다', '걱정을 들어 주고 어른께 같이 간다', '모른 척한다'], 1, '오래가는 고민은 믿을 만한 어른과 함께 나누는 것이 먼저예요.'),
            XT('친구가 몸 평가를 할 때 분위기를 바꿀 수 있는 말을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '다이어트 정보 판단하기',
          items: [
            { type: 'table', prompt: '정보가 믿을 만하면 ○, 의심되면 ×를 쓰세요.', columns: ['정보', '○ / ×'], cells: [['일주일에 5kg 보장', ''], ['골고루 먹고 꾸준히 움직이기', ''], ['한 가지 음식만 먹기', ''], ['잠을 충분히 자기', '']], answer: '×, ○, ×, ○' },
            { type: 'choice', prompt: '외모 고민으로 마음이 힘들 때 이야기할 곳으로 알맞은 것에 ○ 하세요.', options: ['익명 SNS 댓글', 'Wee클래스 상담 선생님', '다이어트 광고 계정'], answer: 'Wee클래스 상담 선생님' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '"단기간·무조건·이것만" 같은 말은 ___ 신호예요.', answer: '위험' },
            { type: 'short', prompt: '친구가 굶는 다이어트를 함께 하자고 할 때 거절하며 건넬 말을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 유명인·후기를 근거로 믿는다 → 개인 후기는 내 몸의 근거가 아니며 성장기에는 끼니가 필요하다는 점을 짚는다. ② 몸매 칭찬은 괜찮다고 여긴다 → 칭찬이든 비난이든 몸을 평가하는 말이 굶기를 부추길 수 있음을 장면으로 보여 준다. ③ 학생의 체중·체형·식습관을 묻거나 발표시키지 않는다. 섭식 문제가 걱정되는 학생은 개별로 보건 선생님·Wee클래스와 잇는다.',
      }),
    ],
  });
})();
