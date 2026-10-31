/* 고2 창체 안전교육 — 응급처치 (차시 2개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 고등학교 응급처치 3·4항. 절차는 대한심폐소생협회 일반인 과정 범위.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 11; const CODE = 'saf-firstaid';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '응급처치';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-0${n}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'sky', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const C = (id, text, motif) => ({ id, text, motif });
  const XM = (prompt, topic, slots, cards, sort, d) => ({ type: 'tool', tool: 'mindmap', options: { topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d) => ({ type: 'tool', tool: 'story', options: { title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const CH = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const SH = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const DIFF = (hard) => ({
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: `카드 순서가 섞여 나오고, ${hard}`,
  });
  // 도입 6 + 전개 27 + 정리 7 = 40분
  // 갈림길(branch)은 emotion 교구에만 있다 — 다른 교구 활동에 놓인 갈림길 문항은 '알맞은 행동 하나 고르기'(pick)로 바꾼다
  const FIX = (a) => (a.tool === 'emotion' ? a : Object.assign({}, a, { items: a.items.map((it) => {
    const o = it.toolOptions || {};
    if (o.mode !== 'branch') return it;
    const { toolOptions, target, ...rest } = it;
    return { ...rest, toolOptions: { mode: 'pick', topic: '알맞은 행동', basket: '고른 행동', cards: o.choices.map((c) => ({ id: c.id, text: c.text, why: c.why })) }, target: { pick: [target.choice] } };
  }) }));
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map(FIX) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '고2 응급처치 단원은 "같은 응급상황이라도 대상과 장소가 달라지면 처치가 달라진다"는 판단력을 기릅니다. 1차시에는 중학교에서 익힌 복부 밀어내기를 바탕으로, 혼자 있을 때·배를 감쌀 수 없는 임신부·1세 미만 영아처럼 상황이 달라질 때의 기도폐쇄 대처를 고릅니다. 2차시에는 경련·열사병·저혈당처럼 갑자기 생기는 상황에서 해야 할 일과 해서는 안 되는 일을 가리고, 의식이 없을 때 입에 아무것도 넣지 않는 원칙을 다집니다. 모든 차시는 119 신고를 기본에 두고 일반인이 할 수 있는 범위를 넘지 않습니다. 법령상 연계 대상 단원은 없지만 보건·체육 수업과 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '혼자일 때·임신부·영아, 상황 따라 바꾸는 기도폐쇄 대처',
        objective: '기도폐쇄 환자의 상황(혼자일 때, 임신부, 영아)에 따라 알맞은 대처 방법을 고르고 그 까닭을 설명할 수 있다.',
        draw: 'a student pressing their own abdomen against the back of a paper chair while a parent figure holds a paper baby face down along the forearm',
        banner: '대상 따라 달라지는 방법', extra: [{ motif: 'flower', x: 300, y: 222, color: 'lavender' }],
        intro: {
          teacher: '"자취방에서 혼자 밥을 먹다 목에 걸렸어요. 등 뒤에서 감싸 줄 사람이 없다면 어떻게 할까요?" 대답을 듣고(기다릴 반응: "119에 전화해요", "모르겠어요") 혼자서도 할 수 있는 방법이 있다고 알린다. "아기에게도 어른처럼 배를 밀면 된다"는 말이 나오면 영아는 몸이 작고 약해 방법이 다르다는 점을 먼저 짚는다.',
          student: '중학교에서 배운 복부 밀어내기 순서를 짝에게 말로 설명해 봅시다.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '친구가 목을 감싸 쥐고 기침을 못 해요.', choices: [{ id: 'a', text: '뒤에서 복부 밀어내기', result: '이물질이 나와요.', mood: '안심' }, { id: 'b', text: '물을 먹여요', result: '더 위험해져요.', mood: '걱정' }] }, sequence: [{ choice: 'a' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 대상에 맞는 방법 고르기', minutes: 14, tool: 'emotion',
            teacher: '"임신한 사람이나 배를 두 팔로 감쌀 수 없는 사람은 어디를 밀어야 할까요?" 배 대신 가슴 아래쪽(가슴뼈 가운데)을 밀어낸다는 점을 짚는다. 영아 문항에서 어른처럼 배를 미는 보기를 고르는 학생에게는 1세 미만 영아는 얼굴을 아래로 해 등을 두드리고 가슴을 누르는 방법을 번갈아 한다고 고쳐 준다. 실습은 인형이나 말로만 하고 실제 아기·친구에게 하지 않는다.',
            task: '혼자일 때·임신부·영아 상황에서 알맞은 기도폐쇄 대처를 고르고 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('혼자 있는데 음식이 목에 걸려 기침이 안 나와요. 어떻게 할까요?', '자취방에서 혼자 밥을 먹다 목에 걸렸어요. 숨이 막히고 기침이 나오지 않아요.', [
                { id: 'chair', text: '의자 등받이에 배를 대고 밀어요', result: '스스로 밀어내 이물질이 나와요.', mood: '안심' },
                { id: 'lie', text: '침대에 누워 쉬어요', result: '숨을 못 쉰 채 시간이 흘러요.', mood: '불안', why: '혼자일 때도 주먹이나 의자 등받이로 배를 밀어낼 수 있어요.' },
                { id: 'water', text: '물을 마셔 넘겨요', result: '물이 막힌 숨길로 들어가요.', mood: '걱정', why: '막힌 숨길에 물을 넣으면 더 위험해요.' }], 'chair', 0.3),
              EB('임신한 이웃이 목을 감싸 쥐고 말을 못 해요. 어떻게 할까요?', '배가 많이 부른 이웃이 식당에서 목을 감싸 쥐었어요. 기침도 말도 못 해요.', [
                { id: 'belly', text: '배를 감싸 위로 밀어 올려요', result: '배를 세게 눌러 위험할 수 있어요.', mood: '걱정', why: '임신부는 배 대신 가슴 아래쪽을 밀어내요.' },
                { id: 'chest', text: '뒤에서 가슴 아래쪽을 밀어내요', result: '배를 누르지 않고 이물질을 밀어내요.', mood: '안심' },
                { id: 'back', text: '등을 약하게 쓰다듬어요', result: '이물질이 나오지 않아요.', mood: '불안', why: '심하게 막혔을 때는 힘 있게 밀어내야 해요.' }], 'chest', 0.35),
              EB('돌이 안 된 아기가 장난감 조각을 삼키고 울지도 못해요. 어떻게 할까요?', '1세가 안 된 아기가 작은 조각을 삼킨 뒤 얼굴이 파래지고 울음소리가 나지 않아요.', [
                { id: 'adult', text: '어른처럼 배를 감싸 밀어요', result: '작은 몸이 다칠 수 있어요.', mood: '걱정', why: '영아는 어른과 다른 방법을 써요.' },
                { id: 'infant', text: '엎드려 받쳐 등 두드리기·가슴 누르기', result: '조각이 나오고 아기가 울기 시작해요.', mood: '안심' },
                { id: 'shake', text: '거꾸로 들고 흔들어요', result: '아기가 크게 다칠 수 있어요.', mood: '불안', why: '아기를 흔들면 위험해요. 머리를 받치고 정해진 방법을 써요.' }], 'infant', 0.4,
                { conclude: '영아는 얼굴을 아래로 받쳐 등 두드리기와 가슴 누르기를 번갈아 하고, 바로 119에 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 방법과 까닭 정리', minutes: 13, tool: 'mindmap',
            teacher: '"왜 대상마다 미는 곳이 다를까요?" 1번을 마친 뒤 까닭을 모둠별로 한 문장씩 발표하게 한다. 2번에서 "이물질이 나오면 끝"을 고르는 학생에게는 밀어내기를 받은 사람은 속이 다쳤을 수 있어 진료가 필요하다고 짚는다.',
            task: '대상과 알맞은 방법을 잇고, 처치 뒤에 할 일을 골라요.',
            levels: LV,
            items: [
              MM('대상과 알맞은 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '대상별 방법', [{ id: 'v1', label: '혼자 있는 어른' }, { id: 'v2', label: '임신부' }, { id: 'v3', label: '1세 미만 영아' }], ['의자 등받이로 배 밀기', '가슴 아래쪽 밀어내기', '등 두드리기·가슴 누르기', '거꾸로 들고 흔들기'], { v1: '의자 등받이로 배 밀기', v2: '가슴 아래쪽 밀어내기', v3: '등 두드리기·가슴 누르기' }, 0.3),
              MP('이물질이 나온 뒤에 할 일로 알맞은 것만 골라 담으세요.', '처치 뒤', ['숨을 잘 쉬는지 살펴요', '병원 진료를 권해요', '의식을 잃으면 가슴압박', '바로 남은 음식을 먹여요'], ['숨을 잘 쉬는지 살펴요', '병원 진료를 권해요', '의식을 잃으면 가슴압박'], 0.25),
              TALK('짝과 인형이나 방석으로 영아 자세(얼굴 아래로, 머리 받치기)와 의자 등받이 자세를 말로 설명하며 흉내 낸 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 세 상황에서 공통으로 해야 할 일은 무엇일까요?" (기다릴 반응: "119에 알리기", "의식 잃으면 심폐소생술") 출구 1번에서 임신부에게 배를 미는 카드를 고른 학생과 그 까닭을 다시 짚는다.',
          exit: [
            XM('기도폐쇄 대처 카드를 두 칸으로 나누어 보세요.', '기도폐쇄 대처', ['해요', '하지 않아요'], ['혼자면 주먹으로 배 밀기', '영아는 머리 받쳐 엎드리기', '임신부 배를 세게 밀기', '아기를 거꾸로 흔들기'], { '해요': ['혼자면 주먹으로 배 밀기', '영아는 머리 받쳐 엎드리기'], '하지 않아요': ['임신부 배를 세게 밀기', '아기를 거꾸로 흔들기'] }, 0.3),
            CH('기도폐쇄로 처치를 받던 사람이 의식을 잃었어요. 다음 할 일은?', ['밀어내기를 계속해요', '눕히고 119와 가슴압박을 해요', '물을 먹여요'], 1, '의식을 잃으면 바닥에 눕히고 119에 알린 뒤 가슴압박을 시작해요.'),
            SH('어린 동생이 있는 집에서 기도폐쇄를 막으려고 할 수 있는 일을 두 가지 쓰세요.'),
          ],
        },
        ws: {
          title: '상황별 기도폐쇄 대처',
          items: [
            { type: 'table', prompt: '대상에 알맞은 대처 방법을 쓰세요.', columns: ['대상', '방법'], cells: [['혼자 있는 어른', ''], ['임신부', ''], ['1세 미만 영아', '']], answer: '주먹·의자 등받이로 배 밀기 / 가슴 아래쪽 밀어내기 / 등 두드리기와 가슴 누르기 번갈아' },
            { type: 'choice', prompt: '영아에게 하면 안 되는 행동에 ○ 하세요.', options: ['머리를 받치고 엎드리게 해요', '거꾸로 들고 흔들어요', '119에 알려요'], answer: '거꾸로 들고 흔들어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '이물질이 나와도 속이 다쳤을 수 있으니 ___ 진료를 받게 하고, 의식을 잃으면 ___을 시작해요.', answer: '병원, 가슴압박' },
            { type: 'short', prompt: '임신부에게 배 대신 가슴 아래쪽을 밀어내는 까닭을 쓰세요.' },
          ],
        },
        diff: DIFF('영아·임신부처럼 대상이 달라지는 상황을 판단해요.'),
        notes: '자주 보이는 어려움: ① 모든 사람에게 복부 밀어내기를 한다 → 임신부는 가슴 아래쪽, 영아는 등 두드리기·가슴 누르기. ② 혼자일 때는 방법이 없다고 여긴다 → 주먹이나 의자 등받이로 배를 민다. ③ 이물질이 나오면 끝이라고 여긴다 → 진료를 권한다. 영아 처치 방법의 세부(횟수 등)는 대한심폐소생협회 최신 지침으로 확인해 보충한다.',
      }),

      LESSON(2, {
        title: '경련·열사병·저혈당, 해야 할 일과 하면 안 되는 일 가르기',
        objective: '경련·열사병·저혈당이 의심되는 상황에서 해야 할 일과 해서는 안 되는 일을 구별하고, 119에 알려야 할 때를 판단할 수 있다.',
        draw: 'students moving paper chairs away from a classmate lying on the floor while another student fans a friend resting in paper shade under a tree',
        banner: '치우고, 식히고, 알리고', extra: [{ motif: 'sun', x: 70, y: 110, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"교실에서 친구가 갑자기 쓰러져 몸을 떨기 시작했어요. 혀를 깨물지 않게 입에 무언가를 넣어야 할까요?" 대답을 듣고 입에 무엇을 넣으면 오히려 숨길을 막거나 이가 부러질 수 있다는 점을 짚는다. 오늘은 갑작스러운 상황마다 흔히 잘못 아는 처치를 가려낸다고 밝힌다.',
          student: '더운 날 운동하다 어지러웠던 장면(드라마·뉴스에서 본 것도 좋아요)을 떠올려 짝과 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '경련할 때', slots: ['해요', '하지 않아요'], cards: ['둘레 물건을 치워요', '입에 수건을 넣어요'], shuffle: false }, sequence: [{ sort: { '해요': ['둘레 물건을 치워요'], '하지 않아요': ['입에 수건을 넣어요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 상황별 해야 할 일과 하면 안 되는 일', minutes: 14, tool: 'mindmap',
            teacher: '"경련하는 몸을 꽉 붙잡으면 멈출까요?" 억지로 붙잡지 않고 다치지 않게 둘레를 치우고 머리 밑을 받친다고 짚는다. 열사병 문항에서 의식이 흐린 친구에게 물을 먹이는 카드를 고르는 학생에게는 의식이 흐리면 아무것도 먹이지 않는다고 고쳐 준다. 저혈당은 당뇨가 있는 친구가 식은땀·떨림을 보일 때 의식이 있으면 단 음료나 사탕을 준다는 점까지만 다룬다.',
            task: '경련·열사병·저혈당 상황에서 해야 할 일과 하면 안 되는 일을 나누어요.',
            levels: LV,
            items: [
              MS('경련하는 친구 곁에서의 행동을 나누어 보세요.', '경련', ['해요', '하지 않아요'], ['둘레 물건을 치워요', '머리 밑에 옷을 받쳐요', '팔다리를 꽉 붙잡아요', '입에 손수건을 넣어요'], { '해요': ['둘레 물건을 치워요', '머리 밑에 옷을 받쳐요'], '하지 않아요': ['팔다리를 꽉 붙잡아요', '입에 손수건을 넣어요'] }, 0.25),
              MS('열사병이 의심되는 친구 곁에서의 행동을 나누어 보세요.', '열사병', ['해요', '하지 않아요'], ['그늘로 옮겨 옷을 풀어요', '몸을 식히고 119에 알려요', '의식 흐린데 물을 먹여요', '햇볕 아래 눕혀 쉬게 해요'], { '해요': ['그늘로 옮겨 옷을 풀어요', '몸을 식히고 119에 알려요'], '하지 않아요': ['의식 흐린데 물을 먹여요', '햇볕 아래 눕혀 쉬게 해요'] }, 0.3),
              MS('저혈당이 의심되는 친구 곁에서의 행동을 나누어 보세요.', '저혈당', ['해요', '하지 않아요'], ['의식 있으면 단 음료 줘요', '의식 없으면 119에 알려요', '의식 없는데 사탕 넣기', '잠깐 자게 혼자 둬요'], { '해요': ['의식 있으면 단 음료 줘요', '의식 없으면 119에 알려요'], '하지 않아요': ['의식 없는데 사탕 넣기', '잠깐 자게 혼자 둬요'] }, 0.35,
                { conclude: '의식이 없거나 흐린 사람의 입에는 물·음식·약을 넣지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 119를 부를 때와 끝난 뒤 돌보기', minutes: 13, tool: 'emotion',
            teacher: '"경련이 멈추고 친구가 잠든 것처럼 보이면 어떻게 눕힐까요?" 숨을 쉬면 옆으로 눕혀 입안의 침이 흘러나오게 한다(회복 자세)고 짚는다. 처음 겪는 경련, 오래 계속되는 경련, 다친 상황이면 119에 알린다는 점을 2번에서 확인하게 한다.',
            task: '경련이 끝난 뒤, 운동장 더위 속 상황에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('경련이 멈추고 친구가 숨을 쉬지만 멍해요. 어떻게 할까요?', '교실에서 경련하던 친구가 멈췄어요. 숨은 쉬지만 아직 멍하고 대답이 느려요.', [
                { id: 'side', text: '옆으로 눕히고 곁을 지켜요', result: '침이 흘러나와 숨길이 막히지 않아요.', mood: '안심' },
                { id: 'sit', text: '바로 일으켜 앉혀 물을 줘요', result: '사레들거나 넘어질 수 있어요.', mood: '걱정', why: '정신이 완전히 돌아오기 전에는 먹이지 않고 옆으로 눕혀요.' },
                { id: 'leave', text: '괜찮아졌으니 수업을 계속해요', result: '다시 나빠져도 아무도 몰라요.', mood: '불안', why: '정신이 돌아올 때까지 곁을 지키고 선생님께 알려요.' }], 'side', 0.3),
              EB('경련이 처음이고 멈추지 않고 계속돼요. 어떻게 할까요?', '친구가 처음으로 경련을 시작했고, 시간이 지나도 멈추지 않아요.', [
                { id: 'call', text: '시간을 보며 119에 알려요', result: '구급대가 빠르게 도착해요.', mood: '안심' },
                { id: 'hold', text: '멈출 때까지 꽉 붙잡아요', result: '친구와 내가 다칠 수 있어요.', mood: '걱정', why: '붙잡지 말고 둘레를 치운 뒤 119에 알려요.' },
                { id: 'wait', text: '언젠가 멈추니 기다려요', result: '도움이 늦어질 수 있어요.', mood: '불안', why: '처음이거나 오래 계속되는 경련은 119에 알려요.' }], 'call', 0.3),
              EB('땡볕 체육대회에서 친구가 땀을 흘리지 않고 횡설수설해요. 어떻게 할까요?', '더운 날 오래 뛴 친구 얼굴이 빨갛고 말이 어눌하며 비틀거려요.', [
                { id: 'cool', text: '그늘로 옮겨 식히며 119', result: '체온이 내려가고 구급대가 와요.', mood: '안심' },
                { id: 'rest', text: '자리에 앉혀 쉬게 해요', result: '체온이 계속 올라 위험해져요.', mood: '걱정', why: '의식이 흐리면 열사병일 수 있어 바로 식히고 119에 알려요.' },
                { id: 'drink', text: '찬 물을 많이 마시게 해요', result: '사레들어 숨길이 막힐 수 있어요.', mood: '불안', why: '의식이 흐린 사람에게는 먹이지 않아요.' }], 'cool', 0.35,
                { conclude: '의식이 흐린 더위 환자는 열사병일 수 있어 그늘·식히기·119가 먼저예요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 세 상황에 모두 들어 있던 원칙은 무엇일까요?" (기다릴 반응: "의식 없으면 입에 넣지 않기", "119") 출구 1번에서 입에 물건을 넣는 카드를 고른 학생과 그 까닭을 다시 짚는다. 지병이 있는 친구가 원하면 담임·보건 선생님과 미리 대처 계획을 나눌 수 있다는 점을 덧붙인다(학생 이름은 거론하지 않는다).',
          exit: [
            XM('갑작스러운 상황의 행동을 두 칸으로 나누어 보세요.', '갑작스러운 상황', ['해요', '하지 않아요'], ['경련 뒤 옆으로 눕혀요', '더위 환자 옷을 풀어요', '경련 중 혀 잡아요', '의식 흐린데 약 먹여요'], { '해요': ['경련 뒤 옆으로 눕혀요', '더위 환자 옷을 풀어요'], '하지 않아요': ['경련 중 혀 잡아요', '의식 흐린데 약 먹여요'] }, 0.3),
            CH('의식이 흐린 사람에게 물이나 음식을 주지 않는 까닭은?', ['배가 부를까 봐', '숨길로 들어가 막힐 수 있어서', '맛을 못 느껴서'], 1, '삼키는 힘이 약해 물·음식이 숨길로 들어갈 수 있어요.'),
            SH('경련·열사병·저혈당 가운데 하나를 골라, 119에 알려야 할 때를 쓰세요.'),
          ],
        },
        ws: {
          title: '갑작스러운 상황 응급처치',
          items: [
            { type: 'table', prompt: '상황마다 해야 할 일과 하면 안 되는 일을 하나씩 쓰세요.', columns: ['상황', '해야 할 일', '하면 안 되는 일'], cells: [['경련', '', ''], ['열사병', '', ''], ['저혈당', '', '']], answer: '둘레 치우기 / 입에 넣기·붙잡기, 그늘·식히기·119 / 의식 흐린데 물, 의식 있으면 당분 / 의식 없는데 먹이기' },
            { type: 'choice', prompt: '경련이 멈추고 숨을 쉬는 사람의 자세로 알맞은 것에 ○ 하세요.', options: ['바로 앉혀요', '옆으로 눕혀요', '엎드리게 해요'], answer: '옆으로 눕혀요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '의식이 없거나 ___ 사람의 입에는 아무것도 넣지 않고, ___에 알려요.', answer: '흐린, 119' },
            { type: 'short', prompt: '더운 날 체육대회에서 열사병을 막기 위해 학급이 함께 지킬 약속을 두 가지 쓰세요.' },
          ],
        },
        diff: DIFF('의식 상태에 따라 달라지는 처치를 가려내요.'),
        notes: '자주 보이는 어려움: ① 경련 중 입에 물건을 넣거나 붙잡는다 → 하지 않는다. ② 의식이 흐린 사람에게 물을 먹인다 → 먹이지 않는다. ③ 더위 환자를 그냥 쉬게 한다 → 의식이 흐리면 식히며 119. 특정 학생의 지병을 수업에서 드러내지 않는다.',
      }),
    ],
  });
})();
