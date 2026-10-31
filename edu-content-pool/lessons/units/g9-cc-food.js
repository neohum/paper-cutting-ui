/* 중3 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조, 식생활교육지원법 제26조(연 2회 이상).
 * 식품 표시는 식품의약품안전처 표시 기준의 낱말(알레르기 유발물질 표시, 소비기한, 보관 방법)만 쓰고 표시 대상 개수·시행 연도는 적지 않는다. 장면·인물은 가명. */
(function () {
  const G = 9; const CODE = 'food';
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
    flow: '중학교 식생활 교육의 마무리로, 스스로 장을 보고 음식을 고르는 시기에 필요한 판단력을 기릅니다. 1차시에는 알레르기 유발물질 표시와 소비기한·보관 방법을 읽고 친구의 알레르기를 배려하며 안전한 식품을 고릅니다. 2차시에는 음식물 쓰레기 줄이기·제철 먹거리·지역 먹거리처럼 나와 지구를 함께 생각하는 식생활을 고르고 실천 계획을 세웁니다. 1·2학년(식품군, 영양성분표)에서 배운 내용을 실제 장보기 장면에 묶어 씁니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '알레르기 표시와 소비기한 읽고 장보기',
        objective: '식품 표시에서 알레르기 유발물질과 소비기한·보관 방법을 읽고, 알레르기가 있는 친구를 배려해 안전한 식품을 고를 수 있다.',
        draw: 'paper food packages on a store shelf with highlighted allergy icons and date labels, a student comparing two packs',
        banner: '표시가 안전을 알려요', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"땅콩 알레르기가 있는 친구와 간식을 나눠 먹을 때, 포장지에서 어디를 봐야 할까요?" 대답을 듣고(기다릴 반응: "원재료요", "알레르기 표시요") 시연으로 표시 카드를 나눈다. "조금 들어간 건 괜찮아요"라는 말이 나오면 "알레르기는 아주 적은 양에도 반응할 수 있지 않을까요?"라고 되묻는다. 오늘은 알레르기 표시와 소비기한을 읽고 장을 본다고 밝힌다.',
          student: '급식 식단표나 과자 포장에서 본 적 있는 표시 하나를 떠올려 무엇을 알려 주는지 짝에게 말해 봅시다.',
          demo: DEMO('식품 표시', ['알레르기 정보', '기한·보관 정보'], ['땅콩 함유', '냉장 보관'], { '알레르기 정보': ['땅콩 함유'], '기한·보관 정보': ['냉장 보관'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 알레르기 표시를 읽고 배려하기', minutes: 14, tool: 'mindmap',
            teacher: '"원재료에 없어도 표시를 다시 봐야 할 때가 있을까요?" "같은 제조 시설에서 만들었다"는 안내는 섞여 들어갈 수 있다는 뜻이라 알레르기가 있는 사람은 조심한다는 점을 짚는다. 친구의 알레르기를 장난으로 여기는 말이 나오면 "알레르기 반응은 숨쉬기까지 어렵게 할 수 있어요"라고 바로잡는다. 증상이 생기면 바로 어른께 알리고 필요하면 119에 신고한다는 점을 덧붙인다.',
            task: '식품 표시를 읽고 알레르기가 있는 친구에게 괜찮은 것과 피할 것을 나누어요.',
            levels: LV,
            items: [
              MS('우유 알레르기가 있는 친구를 위한 간식을 나누어 보세요.', '우유 알레르기 친구', ['피할 것', '괜찮은 것'], ['치즈가 든 크래커', '원재료: 쌀·소금 떡', '우유 함유 빵', '사과'], { '피할 것': ['치즈가 든 크래커', '우유 함유 빵'], '괜찮은 것': ['원재료: 쌀·소금 떡', '사과'] }, 0.2),
              MP('새우 알레르기가 있는 친구가 확인해야 할 표시만 골라 담아 보세요.', '꼭 볼 표시', ['새우 함유', '새우를 쓰는 시설에서 제조', '오리지널 맛', '1+1 행사'], ['새우 함유', '새우를 쓰는 시설에서 제조'], 0.25),
              MM('상황과 알맞은 행동을 이어 보세요. 맞지 않는 카드는 남겨요.', '알레르기 배려', [{ id: 'a1', label: '친구에게 간식을 나눌 때' }, { id: 'a2', label: '먹은 뒤 친구 입술이 붓고 숨이 가쁠 때' }, { id: 'a3', label: '표시가 없는 수제 간식일 때' }], ['표시를 함께 확인해요', '바로 어른께 알리고 119', '재료를 물어보고 모르면 안 줘요', '물 마시면 괜찮아요'], { a1: '표시를 함께 확인해요', a2: '바로 어른께 알리고 119', a3: '재료를 물어보고 모르면 안 줘요' }, 0.3,
                { conclude: '알레르기 배려는 표시를 함께 읽는 데서 시작하고, 반응이 생기면 바로 어른과 119에 알리는 것이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 소비기한과 보관 방법 읽기', minutes: 13, tool: 'mindmap',
            teacher: '"소비기한이 남았는데도 먹으면 안 되는 경우가 있을까요?" 소비기한은 표시된 보관 방법을 지켰을 때 먹어도 안전한 기한이라는 점을 짚는다. 냉장 식품을 가방에 오래 넣어 둔 경우처럼 보관 방법을 어기면 기한이 남아도 안전하지 않다고 말해 준다. 냄새·색이 이상하면 기한과 상관없이 먹지 않는다.',
            task: '식품의 기한과 보관 상태를 보고 먹어도 될 것과 먹지 않을 것을 나누어요.',
            levels: LV,
            items: [
              MS('식품 상태를 보고 두 가지로 나누어 보세요.', '먹어도 될까', ['먹어도 돼요', '먹지 않아요'], ['소비기한 전, 냉장 보관한 우유', '소비기한 지난 요구르트', '냉장 김밥을 가방에 반나절', '뜯지 않은 과자, 기한 전'], { '먹어도 돼요': ['소비기한 전, 냉장 보관한 우유', '뜯지 않은 과자, 기한 전'], '먹지 않아요': ['소비기한 지난 요구르트', '냉장 김밥을 가방에 반나절'] }, 0.2),
              MM('표시와 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '표시의 뜻', [{ id: 'e1', label: '소비기한' }, { id: 'e2', label: '냉장 보관' }, { id: 'e3', label: '개봉 후 빨리 드세요' }], ['보관을 지키면 먹어도 되는 기한', '낮은 온도에 두어야 해요', '뜯으면 쉽게 상해요', '맛이 가장 좋은 날'], { e1: '보관을 지키면 먹어도 되는 기한', e2: '낮은 온도에 두어야 해요', e3: '뜯으면 쉽게 상해요' }, 0.25),
              MP('장보기에서 식품을 안전하게 고르는 행동만 골라 담아 보세요.', '안전한 장보기', ['냉장 식품은 마지막에 담아요', '포장이 부푼 것은 피해요', '기한은 안 봐도 돼요', '찌그러진 캔도 괜찮아요'], ['냉장 식품은 마지막에 담아요', '포장이 부푼 것은 피해요'], 0.3,
                { conclude: '기한·보관·포장 상태 세 가지를 함께 보면 장보기가 안전해져요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 표시 가운데 다음 장보기에서 꼭 볼 것 하나는 무엇인가요?" 출구 1번에서 기한만 보면 된다고 고른 학생에게는 보관 방법을 어기면 기한이 남아도 안전하지 않다는 점을 다시 짚는다.',
          exit: [
            XS('행동 카드를 두 가지로 나누어 보세요.', '표시 읽기', ['안전해요', '위험해요'], ['친구 알레르기를 묻고 나눠요', '표시 없는 간식을 그냥 줘요', '보관 방법을 지켜요', '상한 냄새가 나도 기한 전이면 먹어요'], { '안전해요': ['친구 알레르기를 묻고 나눠요', '보관 방법을 지켜요'], '위험해요': ['표시 없는 간식을 그냥 줘요', '상한 냄새가 나도 기한 전이면 먹어요'] }),
            XC('소비기한에 대한 설명으로 알맞은 것은 무엇인가요?', ['보관 방법과 상관없이 먹어도 되는 기한', '표시된 보관 방법을 지켰을 때 먹어도 안전한 기한', '가게에서 팔 수 있는 마지막 날'], 1, '소비기한은 보관 방법을 지켰을 때를 기준으로 해요.'),
            XT('알레르기가 있는 친구와 간식을 나눌 때 내가 할 행동을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '식품 표시 읽고 장보기',
          items: [
            { type: 'table', prompt: '표시의 뜻을 쓰세요.', columns: ['표시', '뜻'], cells: [['○○ 함유', ''], ['○○를 쓰는 시설에서 제조', ''], ['소비기한', ''], ['냉장 보관', '']], answer: '그 재료가 들어 있음, 섞여 들어갈 수 있음, 보관을 지키면 먹어도 되는 기한, 낮은 온도에 보관' },
            { type: 'choice', prompt: '알레르기 반응으로 친구가 숨쉬기 힘들어할 때 할 일에 ○ 하세요.', options: ['물을 마시게 하고 기다린다', '바로 어른께 알리고 119에 신고한다', '혼자 집에 보낸다'], answer: '바로 어른께 알리고 119에 신고한다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '보관 ___을 지키지 않으면 소비기한이 남아도 안전하지 않아요.', answer: '방법' },
            { type: 'short', prompt: '장보기에서 내가 확인할 표시 세 가지와 그 까닭을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① "조금은 괜찮다"고 여긴다 → 알레르기는 적은 양에도 반응할 수 있음을 짚는다. ② 기한만 보면 된다고 여긴다 → 보관 방법·포장 상태를 함께 본다. ③ 반에 알레르기가 있는 학생이 있어도 이름을 밝히지 않는다. 응급 대응은 "어른께 알리기·119 신고"까지만 다루고 약물 사용법은 다루지 않는다.',
      }),

      LESSON(2, {
        title: '나와 지구를 함께 생각하는 식생활 계획 세우기',
        objective: '음식물 쓰레기 줄이기·제철 먹거리·지역 먹거리 같은 지속가능한 식생활을 고르고, 실천할 수 있는 계획을 세울 수 있다.',
        draw: 'a paper school lunch tray with an empty clean plate, seasonal vegetables from a nearby farm and a small globe smiling',
        banner: '먹는 만큼 담아요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"급식에서 남긴 음식은 그다음 어디로 갈까요?" 대답을 듣고(기다릴 반응: "쓰레기요", "버려져요") 시연으로 행동 카드를 나눈다. "어차피 버리는 건 학교 일이에요"라는 말이 나오면 "버리는 데에도 물과 에너지와 돈이 들지 않을까요?"라고 되묻는다. 오늘은 나와 지구를 함께 생각하는 식생활을 고른다고 밝힌다.',
          student: '급식이나 집에서 음식을 남기게 되는 까닭 하나를 짝에게 말해 봅시다.',
          demo: DEMO('식생활', ['지구에 좋아요', '아쉬워요'], ['먹을 만큼 담기', '잔뜩 담고 남기기'], { '지구에 좋아요': ['먹을 만큼 담기'], '아쉬워요': ['잔뜩 담고 남기기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지속가능한 식생활 가려내기', minutes: 14, tool: 'mindmap',
            teacher: '"멀리서 오는 음식과 가까운 데서 오는 음식은 무엇이 다를까요?" 이동 거리가 길수록 운송에 에너지가 더 든다는 점, 제철 먹거리는 신선하고 기르는 데 에너지가 덜 들 수 있다는 점을 짚는다. "채소만 먹어야 지구를 지켜요"처럼 한쪽으로 치우친 말에는 골고루 먹으면서 버리지 않는 것이 먼저라고 바로잡는다.',
            task: '식생활 카드를 지속가능한 행동과 아쉬운 행동으로 나누고, 까닭을 말해요.',
            levels: LV,
            items: [
              MS('식생활 행동을 두 가지로 나누어 보세요.', '식생활 행동', ['지속가능해요', '아쉬워요'], ['먹을 만큼만 담아요', '가까운 지역 먹거리를 사요', '반만 먹고 버려요', '포장 음식을 매일 시켜요'], { '지속가능해요': ['먹을 만큼만 담아요', '가까운 지역 먹거리를 사요'], '아쉬워요': ['반만 먹고 버려요', '포장 음식을 매일 시켜요'] }, 0.2),
              MM('행동과 그것이 줄이는 것을 이어 보세요. 맞지 않는 카드는 남겨요.', '무엇을 줄일까', [{ id: 's1', label: '급식 남기지 않기' }, { id: 's2', label: '지역 먹거리 고르기' }, { id: 's3', label: '개인 컵·용기 쓰기' }], ['음식물 쓰레기', '운송에 드는 에너지', '일회용 포장 쓰레기', '급식 시간'], { s1: '음식물 쓰레기', s2: '운송에 드는 에너지', s3: '일회용 포장 쓰레기' }, 0.25),
              MP('제철 먹거리를 고를 때의 좋은 점만 골라 담아 보세요.', '제철 먹거리', ['신선하고 맛이 좋아요', '기르는 데 에너지가 덜 들 수 있어요', '언제나 가장 비싸요', '영양소가 전혀 없어요'], ['신선하고 맛이 좋아요', '기르는 데 에너지가 덜 들 수 있어요'], 0.3,
                { conclude: '먹을 만큼, 가까운 것, 제철 것 — 작은 선택이 쓰레기와 에너지를 함께 줄여요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 실천 계획 세우기', minutes: 13, tool: 'mindmap',
            teacher: '"지킬 수 있는 계획과 지키기 어려운 계획은 무엇이 다를까요?" "다시는 아무것도 안 남겨요"처럼 막연한 계획보다 "싫어하는 반찬은 처음에 조금만 받아요"처럼 구체적인 계획이 오래간다는 점을 짚는다. 2번은 모둠 계획을 정하고, 3번에서 서로 말로 나눈다.',
            task: '구체적인 실천 계획을 고르고, 모둠의 식생활 실천 약속을 정해요.',
            levels: LV,
            items: [
              MS('실천 계획을 두 가지로 나누어 보세요.', '실천 계획', ['구체적이에요', '막연해요'], ['못 먹는 반찬은 조금만 받아요', '장보기 전 냉장고를 확인해요', '지구를 사랑해요', '앞으로 잘할게요'], { '구체적이에요': ['못 먹는 반찬은 조금만 받아요', '장보기 전 냉장고를 확인해요'], '막연해요': ['지구를 사랑해요', '앞으로 잘할게요'] }, 0.25),
              MM('남기는 까닭과 해결 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '남기는 까닭', [{ id: 'w1', label: '양이 너무 많아서' }, { id: 'w2', label: '처음 보는 음식이라서' }, { id: 'w3', label: '간식을 먹고 와서' }], ['먹을 만큼만 받아요', '한 입 먼저 맛봐요', '급식 전 간식을 줄여요', '다 버려요'], { w1: '먹을 만큼만 받아요', w2: '한 입 먼저 맛봐요', w3: '급식 전 간식을 줄여요' }, 0.3,
                { conclude: '남기는 까닭을 알면 나에게 맞는 해결 방법이 보여요.' }),
              TALK('모둠에서 "한 달 동안 지킬 우리 모둠 식생활 약속"을 구체적으로 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 정한 약속 가운데 내일 급식에서 바로 할 것은 무엇인가요?" 출구 1번에서 막연한 계획을 고른 학생에게는 언제·무엇을·얼마나를 넣어 다시 써 보게 한다. 1~3학년 식생활 수업을 묶어 "골고루, 읽고 고르고, 버리지 않게"로 정리한다.',
          exit: [
            XS('행동 카드를 두 가지로 나누어 보세요.', '나와 지구', ['지속가능해요', '아쉬워요'], ['장바구니를 챙겨요', '먹다 남은 음식을 버려요', '제철 과일을 골라요', '필요 없는 것도 잔뜩 사요'], { '지속가능해요': ['장바구니를 챙겨요', '제철 과일을 골라요'], '아쉬워요': ['먹다 남은 음식을 버려요', '필요 없는 것도 잔뜩 사요'] }),
            XC('오래 지킬 수 있는 실천 계획은 무엇인가요?', ['앞으로 절대 안 남긴다', '싫어하는 반찬은 처음에 조금만 받는다', '지구를 위해 노력한다'], 1, '언제·무엇을·얼마나가 들어간 계획이 오래가요.'),
            XT('나의 식생활 실천 약속 하나를 언제·무엇을·얼마나가 드러나게 쓰세요.'),
          ],
        },
        ws: {
          title: '나와 지구를 위한 식생활',
          items: [
            { type: 'table', prompt: '행동이 줄이는 것을 쓰세요.', columns: ['행동', '줄이는 것'], cells: [['급식 남기지 않기', ''], ['지역 먹거리 고르기', ''], ['개인 용기 쓰기', '']], answer: '음식물 쓰레기, 운송 에너지, 일회용 포장 쓰레기' },
            { type: 'choice', prompt: '구체적인 실천 계획에 ○ 하세요.', options: ['환경을 지켜요', '장보기 전 냉장고를 확인해요', '열심히 할게요'], answer: '장보기 전 냉장고를 확인해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '급식은 먹을 ___만 받아요.', answer: '만큼' },
            { type: 'short', prompt: '중학교 3년 동안 배운 식생활 가운데 고등학교에서도 지킬 것 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 지속가능한 식생활을 "채소만 먹기"로 좁힌다 → 골고루 먹되 버리지 않는 것이 먼저임을 짚는다. ② 막연한 다짐으로 계획을 끝낸다 → 언제·무엇을·얼마나를 넣게 한다. ③ 남기는 학생을 지목하거나 잔반을 공개 평가하지 않는다. 숫자(쓰레기 양·탄소 배출량)는 근거 자료 없이 말하지 않는다.',
      }),
    ],
  });
})();
