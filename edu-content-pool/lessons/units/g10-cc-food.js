/* 고1 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조·식생활교육지원법 제26조(건강한 식생활·영양교육 연 2회 이상). 편의점 한 끼 조합과 고카페인 표시를 다룬다. 카페인 권고량 같은 숫자는 적지 않고 표시의 뜻만 쓴다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 10; const CODE = 'food';
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
    flow: '고등학생이 되면 학원·야간 자율학습 사이에 편의점과 간편식으로 끼니를 때우는 일이 늘어납니다. 1차시에는 편의점 한 끼를 식품군으로 나누어 빠진 식품군을 채우고, 라면·삼각김밥처럼 짠 조합을 덜 짜게 바꾸는 방법을 고릅니다. 2차시에는 시험 기간에 손이 가는 에너지 음료·커피의 "고카페인 함유" 표시를 읽고, 카페인으로 잠을 미루는 대신 잠과 휴식을 지키는 선택을 갈림길로 비교합니다. 중학교에서 배운 식품구성자전거·영양성분표 읽기를 실제 생활 장면에 적용하는 단원이며, 보건 단원의 건강한 생활 습관 차시와 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '편의점 한 끼를 식품군으로 나누고 빈칸 채우기',
        objective: '편의점·간편식으로 꾸린 한 끼를 식품군으로 나누어 빠진 식품군을 찾고, 나트륨을 줄이며 골고루 먹는 조합을 고를 수 있다.',
        draw: 'a convenience store shelf made of layered paper with a tray holding a rice ball, milk, salad and banana',
        banner: '편의점 한 끼 채우기', extra: [{ motif: 'leaf', x: 330, y: 224, color: 'mint' }],
        intro: {
          teacher: '"학원 가기 전 편의점에서 5분 안에 저녁을 고른다면 무엇을 집겠어요?" 대답을 듣고(기다릴 반응: "컵라면이요", "삼각김밥이요", "핫바요") 칠판에 적는다. "배만 부르면 한 끼죠"라는 말이 나오면 "배부름과 골고루 먹기는 같은 걸까요?"라고 되묻는다. 시연으로 음식 카드를 식품군에 넣어 보이고, 오늘은 편의점에서도 골고루 먹는 조합을 찾는다고 밝힌다.',
          student: '편의점에서 자주 보이는 음식 하나를 떠올리고, 그것이 어떤 식품군인지 짝과 말해 봅시다.',
          demo: DEMO('편의점 음식의 식품군', ['곡류', '우유·유제품'], ['삼각김밥', '흰 우유'], { '곡류': ['삼각김밥'], '우유·유제품': ['흰 우유'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 편의점 음식을 식품군으로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 음식의 주재료는 무엇일까요?" 포장 이름보다 주재료를 보고 식품군을 정하게 한다. 1번에서 핫바를 곡류에 넣는 학생에게 "핫바의 주재료는 생선살이에요. 어느 식품군일까요?"라고 묻는다. 3번에서 과일 맛 음료를 과일에 넣으면 "과일 맛 음료와 생과일은 같은 영양일까요?"라고 되물어 당류 차이를 짚는다.',
            task: '편의점 음식을 식품군으로 나누고, 한 끼에 빠진 식품군을 찾아요.',
            levels: LV,
            items: [
              MS('편의점 음식을 식품군으로 나누어 보세요.', '편의점 음식의 식품군', ['곡류', '고기·생선·달걀·콩류', '채소류'], ['주먹밥', '식빵', '삶은 달걀', '생선살 핫바', '컵 샐러드', '오이 스틱'], { '곡류': ['주먹밥', '식빵'], '고기·생선·달걀·콩류': ['삶은 달걀', '생선살 핫바'], '채소류': ['컵 샐러드', '오이 스틱'] }, 0.2),
              MP('컵라면과 삼각김밥 한 끼에 더하면 좋은 것만 골라 담아 보세요.', '빠진 식품군 채우기', ['방울토마토 컵', '흰 우유', '바나나', '감자칩'], ['방울토마토 컵', '흰 우유', '바나나'], 0.25),
              MS('생과일과 과일 맛 제품을 나누어 보세요.', '과일일까, 과일 맛일까', ['과일류', '당류가 많은 간식'], ['사과 한 개', '귤 컵', '과일 맛 음료', '과일 젤리'], { '과일류': ['사과 한 개', '귤 컵'], '당류가 많은 간식': ['과일 맛 음료', '과일 젤리'] }, 0.25,
                { conclude: '이름에 "과일"이 들어가도 과일 맛 음료·젤리는 과일 대신이 되지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 짠 조합을 덜 짜게 바꾸기', minutes: 13, tool: 'mindmap',
            teacher: '"국물까지 다 마시면 어떻게 될까요?" 라면 국물·가공육·소스에 나트륨이 많다는 점을 짚고, 같은 편의점에서도 바꿀 수 있는 선택을 찾게 한다. "어차피 편의점이면 다 짜요"라는 말에는 "다 짜다면 그중 무엇을 덜어 낼 수 있을까요?"라고 되묻는다. 3번은 짝과 말로 나눈다.',
            task: '나트륨을 늘리는 습관을 덜 짜게 바꾸는 방법과 잇고, 골고루 먹는 한 끼를 꾸려요.',
            levels: LV,
            items: [
              MM('짠 습관과 덜 짜게 바꾸는 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '덜 짜게 바꾸기', [{ id: 's1', label: '라면 국물 다 마시기' }, { id: 's2', label: '소시지 두 개 더하기' }, { id: 's3', label: '소스 전부 뿌리기' }], ['국물은 남기기', '삶은 달걀로 바꾸기', '소스는 반만 쓰기', '라면 하나 더 먹기'], { s1: '국물은 남기기', s2: '삶은 달걀로 바꾸기', s3: '소스는 반만 쓰기' }, 0.25),
              MP('골고루 먹는 편의점 한 끼로 알맞은 조합만 골라 담아 보세요.', '골고루 한 끼', ['잡곡 주먹밥', '두유', '샐러드', '삶은 달걀', '탄산음료'], ['잡곡 주먹밥', '두유', '샐러드', '삶은 달걀'], 0.3,
                { conclude: '곡류 하나에 단백질·채소·우유류를 더하면 편의점에서도 골고루 먹을 수 있어요.' }),
              TALK('짝과 함께 1만 원 안에서 고를 수 있는 "골고루 편의점 한 끼"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"다음에 편의점에 가면 무엇 하나를 바꿔 보겠어요?" 출구 1번에서 과일 젤리를 과일류에 넣은 학생에게는 원재료와 당류를 다시 보게 한다. 편의점 음식이 나쁜 것이 아니라 조합이 중요하다는 말로 마무리한다.',
          exit: [
            XS('음식을 두 가지로 나누어 보세요.', '한 끼에 더할까', ['더하면 좋아요', '줄이면 좋아요'], ['컵 과일', '흰 우유', '라면 국물', '탄산음료'], { '더하면 좋아요': ['컵 과일', '흰 우유'], '줄이면 좋아요': ['라면 국물', '탄산음료'] }),
            XC('편의점 한 끼를 골고루 먹는 방법으로 가장 알맞은 것은?', ['곡류만 두 배로 먹는다', '곡류에 단백질·채소·우유류를 더한다', '배가 부르면 무엇이든 괜찮다'], 1, '빠진 식품군을 채우는 조합이 골고루 먹는 길이에요.'),
            XT('오늘 꾸린 편의점 한 끼의 메뉴와 그렇게 고른 까닭을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '편의점 한 끼, 식품군 채우기',
          items: [
            { type: 'table', prompt: '내가 꾸린 편의점 한 끼를 식품군으로 정리하세요.', columns: ['식품군', '고른 음식'], cells: [['곡류', ''], ['고기·생선·달걀·콩류', ''], ['채소류·과일류', ''], ['우유·유제품', '']], answer: '예: 잡곡 주먹밥 / 삶은 달걀 / 샐러드·바나나 / 흰 우유' },
            { type: 'choice', prompt: '나트륨을 줄이는 방법에 ○ 하세요.', options: ['라면 국물 남기기', '소시지 더하기', '소스 두 개 넣기'], answer: '라면 국물 남기기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '과일 맛 음료는 생과일과 달리 ___가 많아 과일 대신이 되지 않는다.', answer: '당류' },
            { type: 'short', prompt: '편의점에서 한 끼를 고를 때 나만의 원칙 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 포장 이름으로 식품군을 정한다 → 주재료를 보게 한다. ② 편의점 음식은 무조건 나쁘다고 여긴다 → 조합으로 바꿀 수 있음을 보여 준다. ③ 가정 형편에 따라 식사 환경이 다르므로 개인의 식사 내용을 발표시키지 않는다.',
      }),
      LESSON(2, {
        title: '고카페인 표시를 읽고 시험 기간의 선택 고르기',
        objective: '고카페인 함유 표시와 총카페인 함량 표시를 찾아 읽고, 시험 기간에 카페인으로 잠을 미루는 대신 잠과 휴식을 지키는 선택을 할 수 있다.',
        draw: 'a study desk at night with a paper-cut energy drink can, an open notebook and a crescent moon in the window',
        banner: '카페인보다 잠', extra: [{ motif: 'moon', x: 80, y: 90, s: 0.7 }],
        intro: {
          teacher: '"시험 전날 밤, 졸음을 이기려고 무엇을 마셔 본 적이 있다는 친구가 많아요. 왜 그것을 고를까요?" 대답을 듣고(기다릴 반응: "안 졸리려고요", "친구들이 다 마셔서요") 에너지 음료 캔 뒷면 그림을 보여 준다. "카페인은 피로를 없애 준다"는 말이 나오면 "피로를 없애는 걸까요, 피로를 잠깐 못 느끼게 하는 걸까요?"라고 되묻는다. 오늘은 표시를 읽고 잠을 지키는 선택을 해 본다고 밝힌다.',
          student: '시험 기간에 친구들이 졸음을 쫓는 방법을 떠올려 짝과 두 가지 말해 봅시다.',
          demo: DEMO('졸음을 대하는 방법', ['몸을 돌보는 방법', '잠을 미루는 방법'], ['20분 낮잠 자기', '에너지 음료 두 캔'], { '몸을 돌보는 방법': ['20분 낮잠 자기'], '잠을 미루는 방법': ['에너지 음료 두 캔'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 카페인 표시 읽고 카페인 든 식품 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"캔 뒷면 어디를 보면 카페인을 알 수 있을까요?" 카페인이 일정 기준 이상 든 액체 식품에는 "고카페인 함유"와 총카페인 함량을 표시하고, 어린이·임산부 등은 섭취에 주의하라는 문구가 붙는다고 알려 준다. 1번에서 초콜릿·녹차를 카페인 없는 쪽에 두는 학생이 많다 — 카페인은 커피만이 아니라는 점을 짚는다. 숫자보다 "표시를 찾아 읽는 습관"에 초점을 둔다.',
            task: '카페인이 들어 있는 식품을 찾고, 카페인 표시가 알려 주는 것을 이어요.',
            levels: LV,
            items: [
              MS('식품을 두 가지로 나누어 보세요.', '카페인이 들어 있을까', ['카페인이 들어 있어요', '거의 없어요'], ['에너지 음료', '콜라', '초콜릿', '녹차', '보리차', '흰 우유'], { '카페인이 들어 있어요': ['에너지 음료', '콜라', '초콜릿', '녹차'], '거의 없어요': ['보리차', '흰 우유'] }, 0.25),
              MM('표시와 그것이 알려 주는 것을 이어 보세요. 맞지 않는 카드는 남겨요.', '카페인 표시 읽기', [{ id: 'l1', label: '고카페인 함유' }, { id: 'l2', label: '총카페인 ○○mg' }, { id: 'l3', label: '어린이 섭취 주의' }], ['카페인이 기준 이상 들어 있음', '이 제품 한 개의 카페인 양', '민감한 사람은 피해야 함', '몸에 좋은 성분이 많음'], { l1: '카페인이 기준 이상 들어 있음', l2: '이 제품 한 개의 카페인 양', l3: '민감한 사람은 피해야 함' }, 0.3),
              MP('카페인을 많이 먹었을 때 나타날 수 있는 몸의 반응만 골라 담아 보세요.', '카페인과 몸', ['가슴 두근거림', '잠들기 어려움', '불안하고 초조함', '키가 빨리 큼'], ['가슴 두근거림', '잠들기 어려움', '불안하고 초조함'], 0.25,
                { conclude: '카페인은 피로를 없애지 않고 잠깐 못 느끼게 할 뿐이며, 많이 먹으면 잠과 마음을 흔들어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 시험 기간 갈림길에서 고르기', minutes: 15, tool: 'emotion',
            teacher: '"이렇게 하면 다음 날 아침은 어떨까요?" 결과 칸을 읽으며 오늘 밤의 선택이 내일 시험에 주는 영향을 말하게 한다. 2번에서 "친구가 사 준 것이니 마신다"를 고른 학생에게 "거절이 어렵다면 어떤 말로 대신할 수 있을까요?"라고 묻는다. 잠이 기억을 정리하는 시간이라는 점을 짚되, 공부량 경쟁을 부추기지 않는다.',
            task: '시험 기간 장면에서 잠과 휴식을 지키는 선택을 골라요.',
            levels: LVB,
            items: [
              EB('어떤 선택을 할까요?', '시험 전날 밤 11시, 서아는 졸음을 쫓으려 에너지 음료를 꺼내요.', [{ id: 'drink', text: '두 캔 마시고 밤을 새워요', result: '시험 중 머리가 멍해요', mood: '걱정', why: '밤샘은 외운 내용을 정리할 잠을 빼앗아요.' }, { id: 'sleep', text: '중요한 것만 보고 잠자리에 들어요', result: '아침에 머리가 맑아요', mood: '평온' }], 'sleep', 0.2),
              EB('무엇이라고 답할까요?', '독서실에서 친구가 고카페인 커피를 사 주며 같이 마시자고 해요.', [{ id: 'accept', text: '거절이 어려워 그냥 마셔요', result: '새벽까지 잠이 안 와요', mood: '걱정', why: '거절도 고맙다는 말과 함께 할 수 있어요.' }, { id: 'swap', text: '"고마워, 나는 물 마실게"', result: '친구와 기분 좋게 공부해요', mood: '고마움' }], 'swap', 0.25),
              EB('오후의 졸음에 어떻게 할까요?', '점심 뒤 자습 시간, 도윤이는 너무 졸려 집중이 안 돼요.', [{ id: 'nap', text: '짧게 엎드려 쉬고 물 마셔요', result: '졸음이 가시고 집중이 돌아와요', mood: '평온' }, { id: 'cola', text: '콜라 두 캔으로 버텨요', result: '저녁에 잠이 안 와 또 피곤해요', mood: '속상함', why: '오후 카페인은 밤잠까지 흔들어요.' }, { id: 'push', text: '참고 계속 앉아 있어요', result: '같은 줄만 반복해 읽어요', mood: '걱정', why: '졸음을 참기만 하면 공부가 머리에 남지 않아요.' }], 'nap', 0.3,
                { conclude: '졸음은 몸이 쉬고 싶다는 신호예요. 카페인보다 잠과 짧은 휴식이 공부를 돕는 길이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"이번 시험 기간에 나는 어떤 약속을 지키겠어요?" 출구 1번에서 초콜릿을 카페인 없는 쪽에 둔 학생에게는 활동 1의 결과를 다시 보게 한다. 잠이 안 오거나 불안이 계속되면 보건 선생님께 상담할 수 있다고 말해 준다.',
          exit: [
            XS('시험 기간의 행동을 두 가지로 나누어 보세요.', '잠을 지키는가', ['잠을 지켜요', '잠을 미뤄요'], ['자기 전 화면 끄기', '짧은 낮잠', '밤샘 에너지 음료', '새벽 커피 두 잔'], { '잠을 지켜요': ['자기 전 화면 끄기', '짧은 낮잠'], '잠을 미뤄요': ['밤샘 에너지 음료', '새벽 커피 두 잔'] }),
            XC('"고카페인 함유" 표시가 뜻하는 것은?', ['카페인이 전혀 없다', '카페인이 기준 이상 들어 있다', '영양이 매우 풍부하다'], 1, '고카페인 함유 표시는 카페인이 기준 이상 들었다는 알림이에요.'),
            XT('시험 기간에 카페인 대신 졸음을 다룰 나만의 방법을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '고카페인 표시와 시험 기간의 선택',
          items: [
            { type: 'table', prompt: '카페인 표시와 그 뜻을 쓰세요.', columns: ['표시', '뜻'], cells: [['고카페인 함유', ''], ['총카페인 ○○mg', ''], ['어린이 섭취 주의', '']], answer: '카페인이 기준 이상 / 제품 한 개의 카페인 양 / 민감한 사람은 피함' },
            { type: 'choice', prompt: '카페인이 들어 있는 식품에 ○ 하세요.', options: ['보리차', '초콜릿', '흰 우유'], answer: '초콜릿' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '카페인은 피로를 없애지 않고 잠깐 못 ___게 할 뿐이다.', answer: '느끼' },
            { type: 'short', prompt: '시험 기간에 지킬 잠과 휴식 약속 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 카페인은 커피에만 있다고 여긴다 → 콜라·초콜릿·녹차를 함께 분류한다. ② 카페인이 피로를 없앤다고 믿는다 → 잠깐 못 느끼게 할 뿐임을 짚는다. ③ 카페인 섭취 권고량 숫자는 식품의약품안전처 최신 자료로 따로 확인하고 이 차시에서는 단정하지 않는다. 잠 문제·불안이 오래가는 학생은 보건실·상담실로 잇는다.',
      }),
    ],
  });
})();
