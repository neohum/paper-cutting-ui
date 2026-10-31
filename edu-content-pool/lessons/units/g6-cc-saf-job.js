/* 6학년 창체 안전교육 — 직업안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 직업안전.
 * (일터 안전의 중요성 및 안전 문화) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g6-cc-saf-job';
  const UNIT = 'g6-창체-saf-job';
  const TITLE = '직업안전';
  const GRADE = 6;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const DIFF = {
    easy: '카드를 놓거나 보기를 고르면 맞는지 바로 알려 주고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모두 마친 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 위험한 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ minutes: i === 0 ? 14 : 13, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '6학년 직업안전은 일터 안전을 "규칙을 지키는 것"에서 한 걸음 나아가, 위험을 보면 멈추고 알리는 안전 문화와 일하는 사람의 안전할 권리를 생각해 보는 단원입니다. 1차시에는 아르바이트·현장 실습·가게 일 같은 가상 상황에서 위험을 말할지, 참고 일할지 갈림길을 고르며 서로 지켜 주는 일터의 모습을 찾습니다. 2차시에는 내가 꿈꾸는 직업의 위험·보호구·안전 수칙을 정리해 나만의 직업 안전 계획을 세우고 모둠과 나눕니다. 4~5학년의 산업 재해·원인·표지 공부를 바탕으로 중학교 진로·직업안전으로 이어지는 다리를 놓습니다. 진로 교육(희망 직업 탐색)과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '위험을 보면 멈추고 알리는 일터 고르기',
        objective: '일터에서 위험을 보았을 때 멈추고 알리는 행동을 고르고, 서로 지켜 주는 안전 문화의 모습을 말할 수 있다.',
        draw: 'a young worker raising a hand to point at a frayed cable while a supervisor stops a machine and listens, in a bright paper workshop',
        banner: '멈추고, 알리고, 함께 고쳐요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"새로 일을 시작한 직원이 기계 전선이 벗겨진 것을 봤어요. 그런데 \'신입이 말하면 눈치 보이겠지\' 하고 그냥 일했어요. 이 일터는 안전할까요?" 대답을 듣고(기다릴 반응: "말해야 해요", "다칠 수 있어요") 시연 단추로 행동 카드가 나뉘는 모습을 보여 준다. "말하면 혼나요"가 나오면 "위험을 말한 사람이 칭찬받는 일터라면 어떨까요?"라고 되묻는다.',
          student: '모둠 활동에서 위험하거나 잘못된 것을 보았을 때 말하기 어려웠던 까닭을 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '벗겨진 전선', slots: ['안전 문화', '위험한 문화'], cards: ['멈추고 알려요', '눈치 보며 참아요'], shuffle: false }, sequence: [{ sort: { '안전 문화': ['멈추고 알려요'], '위험한 문화': ['눈치 보며 참아요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 이 일터에서 어떻게 할까', tool: 'emotion',
            teacher: '"이렇게 하면 일터의 다른 사람들은 어떻게 될까요?" 결과를 함께 읽고 까닭을 토의한다. 위험이 급할 때 일을 멈추고 피하는 것은 일하는 사람의 권리로 법에도 정해져 있다는 것을 짚는다. "빨리 끝내는 게 더 중요해요"라는 생각에는 "다치면 일을 끝낼 수 없어요"라고 되묻는다. 상황은 모두 가상 인물로 다룬다.',
            task: '가상 일터 상황에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('기계 전선이 벗겨진 것을 봤어요. 어떻게 할까요?', '빵 공장에서 일하는 신입 직원 "하"가 반죽 기계 전선이 벗겨진 것을 봤어요.', [
                { id: 'quiet', text: '눈치 보여서 그냥 일해요', result: '다른 직원이 감전될 위험이 남아요.', mood: '불안', why: '위험을 숨기면 모두가 위험해져요.' },
                { id: 'report', text: '기계를 멈추고 관리자에게 알려요', result: '전선을 고쳐 모두 안전하게 일해요.', mood: '뿌듯함' },
                { id: 'tape', text: '혼자 테이프로 감아 고쳐요', result: '전기를 모르면 더 위험해요.', mood: '걱정', why: '전기 설비는 담당자가 고쳐요.' }], 'report', 0.2),
              EB('보호구가 답답해서 친구가 벗자고 해요. 어떻게 할까요?', '현장 실습을 하는 고등학생 "도"에게 옆 친구가 마스크를 벗자고 해요.', [
                { id: 'off', text: '같이 벗고 일해요', result: '먼지를 그대로 마셔요.', mood: '걱정', why: '보호구는 답답해도 끝까지 써요.' },
                { id: 'keep', text: '함께 끝까지 쓰자고 말해요', result: '둘 다 안전하게 실습을 마쳐요.', mood: '편안함' },
                { id: 'ignore', text: '나만 쓰고 친구는 모른 척해요', result: '친구가 위험할 수 있어요.', mood: '불안', why: '서로 챙겨 주는 것이 안전 문화예요.' }], 'keep', 0.25),
              EB('천장에서 무언가 떨어질 듯 흔들려요. 어떻게 할까요?', '가게 창고에서 일하던 "라" 머리 위 선반이 크게 흔들려요.', [
                { id: 'finish', text: '하던 일을 빨리 끝내요', result: '물건이 떨어져 다칠 수 있어요.', mood: '무서움', why: '급한 위험 앞에서는 일을 멈춰요.' },
                { id: 'leave', text: '일을 멈추고 피한 뒤 알려요', result: '다치지 않고 선반을 고쳐요.', mood: '안심' },
                { id: 'hold', text: '혼자 선반을 붙잡아요', result: '선반과 함께 넘어질 수 있어요.', mood: '걱정', why: '혼자 막지 말고 피해요.' }], 'leave', 0.25,
                { conclude: '위험을 보면 멈추고, 피하고, 알리는 것은 일하는 사람의 권리이자 서로를 지키는 일이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전 문화가 있는 일터', tool: 'mindmap',
            teacher: '"안전 문화가 있는 일터는 어떤 모습일까요?" 위험을 말한 사람을 탓하지 않는 것, 새 직원에게 먼저 안전 교육을 하는 것, 쉬는 시간을 지키는 것을 짚는다. 학교도 하나의 일터라는 것을 말하고 우리 반에 적용할 점을 찾는다.',
            task: '안전 문화가 있는 모습과 없는 모습을 나누고 이어요.',
            levels: LV,
            items: [
              MS('일터 모습을 나누어 보세요.', '어떤 일터일까', ['안전 문화', '위험한 문화'], ['위험을 말하면 고마워해요', '말한 사람을 탓해요', '새 직원에게 먼저 교육해요', '빨리만 하라고 다그쳐요'], { '안전 문화': ['위험을 말하면 고마워해요', '새 직원에게 먼저 교육해요'], '위험한 문화': ['말한 사람을 탓해요', '빨리만 하라고 다그쳐요'] }, 0.2),
              MM('상황과 안전 문화의 행동을 이어요. 맞지 않는 카드는 남겨요.', '이럴 땐', [{ id: 'c1', label: '처음 쓰는 기계' }, { id: 'c2', label: '동료가 보호구를 빠뜨림' }, { id: 'c3', label: '아차 하고 다칠 뻔함' }], ['사용법 교육을 받고 써요', '"안전모 써요" 말해 줘요', '기록하고 함께 고쳐요', '없던 일로 해요'], { c1: '사용법 교육을 받고 써요', c2: '"안전모 써요" 말해 줘요', c3: '기록하고 함께 고쳐요' }, 0.3),
              MP('우리 반을 안전 문화가 있는 곳으로 만드는 행동만 골라 담아요.', '우리 반 안전 문화', ['위험한 곳을 보면 알려요', '말한 친구를 놀려요', '서로 안전을 챙겨 줘요', '귀찮으면 넘어가요'], ['위험한 곳을 보면 알려요', '서로 안전을 챙겨 줘요'], 0.2,
                { conclude: '안전 문화는 위험을 말할 수 있고, 서로 챙기고, 함께 고치는 분위기예요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"\'아차 하고 다칠 뻔한 일\'을 기록하는 까닭은 무엇일까요?" (기다릴 반응: "다음에 진짜 사고가 안 나게요") 출구 1번에서 "빨리 끝내요"를 고른 학생과 까닭을 다시 나눈다.',
          exit: [
            { type: 'choice', prompt: '일하다 급한 위험이 생기면 일하는 사람은?', options: ['일을 멈추고 피할 수 있어요', '끝까지 일해야 해요', '숨겨야 해요'], answer: 0, difficulty: 0.2, explain: '급한 위험 앞에서 멈추고 피하는 것은 일하는 사람의 권리예요.' },
            { type: 'choice', prompt: '안전 문화가 있는 일터의 모습은?', options: ['위험을 말한 사람에게 고마워해요', '말한 사람을 탓해요', '빨리만 하라고 해요'], answer: 0, difficulty: 0.15, explain: '위험을 말할 수 있어야 함께 고칠 수 있어요.' },
            { type: 'short', prompt: '우리 반에서 안전 문화를 위해 내가 할 일 하나를 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '일터 안전 문화',
        ws: [
          { type: 'table', prompt: '상황에서 안전 문화에 맞는 행동을 쓰세요.', columns: ['상황', '행동'], cells: [['벗겨진 전선을 봤어요', ''], ['친구가 보호구를 벗자고 해요', ''], ['다칠 뻔한 일이 있었어요', '']], answer: '예) 멈추고 알려요 / 끝까지 쓰자고 말해요 / 기록하고 함께 고쳐요' },
          { type: 'choice', prompt: '안전 문화가 없는 모습에 ○ 하세요.', options: ['위험을 말한 사람을 탓해요', '새 직원에게 교육해요', '쉬는 시간을 지켜요'], answer: '위험을 말한 사람을 탓해요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '위험을 보면 ___고, 피하고, 알려요.', answer: '멈추' },
          { type: 'short', prompt: '위험을 말하기 어려운 까닭과, 말하기 쉬운 일터를 만드는 방법을 쓰세요.' },
        ],
        notes: '근거: 고시 별표 2 직업안전(일터 안전의 중요성)과 학교 안전교육 7대 표준안의 직업안전의식(안전 문화). 급박한 위험 때 작업을 멈추고 대피할 수 있다는 내용은 산업안전보건법(근로자의 작업중지)에 있는 것으로, 조항 번호는 쓰지 않았다. 자주 보이는 어려움: ① 위험을 말하면 눈치 보인다고 여긴다 → 말할 수 있는 분위기가 안전 문화임을 토의한다. ② 혼자 고치려 한다 → 담당자에게 알린다. 학생·가족의 실제 일터 경험을 털어놓게 하지 않는다.',
      }),

      LESSON(2, {
        title: '꿈꾸는 직업의 안전 계획 세우기',
        objective: '희망 직업의 위험·보호구·안전 수칙을 정리해 직업 안전 계획을 세울 수 있다.',
        draw: 'a child at a desk drawing a career safety plan on paper with icons of a helmet, goggles, and a checklist, surrounded by dream job symbols',
        banner: '내 꿈도 안전하게', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"나중에 요리사가 된다면 어떤 위험을 조심해야 할까요?" 대답을 듣고(기다릴 반응: "칼, 불, 뜨거운 기름") "오늘은 내가 꿈꾸는 직업의 위험과 지킬 수칙을 정리해 직업 안전 계획을 세워요"라고 말한다. 시연 단추로 직업 계획 카드가 칸에 놓이는 모습을 보여 준다. "내 꿈 직업은 위험이 없어요"가 나오면 "오래 하면 몸 어디가 힘들까요?"라고 되묻는다.',
          student: '내가 꿈꾸는 직업 하나를 짝에게 말하고, 그 일에서 조심할 것을 하나 떠올려 봐요.',
          demo: { tool: 'mindmap', options: { topic: '요리사 계획', slots: ['위험', '보호구'], cards: ['뜨거운 기름', '긴소매 조리복'], shuffle: false }, sequence: [{ sort: { '위험': ['뜨거운 기름'], '보호구': ['긴소매 조리복'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 직업 안전 계획 짜 보기', tool: 'mindmap',
            teacher: '"계획에는 위험, 보호구, 지킬 수칙이 모두 들어가야 해요." 본보기 직업으로 카드를 나누게 한 뒤 내 직업 계획으로 옮긴다. 보호구와 수칙을 헷갈리는 학생에게 "몸에 쓰는 것은 보호구, 지키는 약속은 수칙이에요"라고 짚는다. 컴퓨터로 일하는 직업도 오래 앉아 일할 때의 위험이 있다는 것을 말한다.',
            task: '본보기 직업의 안전 계획 카드를 칸에 나누어요.',
            levels: LV,
            items: [
              MS('요리사 안전 계획 카드를 나누어 보세요.', '요리사 계획', ['위험', '지킬 수칙'], ['칼에 베임', '칼은 칼집에 보관', '미끄러운 주방 바닥', '바닥 물기 바로 닦기'], { '위험': ['칼에 베임', '미끄러운 주방 바닥'], '지킬 수칙': ['칼은 칼집에 보관', '바닥 물기 바로 닦기'] }, 0.2),
              MS('게임 개발자 안전 계획 카드를 나누어 보세요.', '게임 개발자 계획', ['위험', '지킬 수칙'], ['오래 앉아 허리 아픔', '한 시간마다 스트레칭', '화면을 오래 봐 눈 피로', '모니터 높이 맞추기'], { '위험': ['오래 앉아 허리 아픔', '화면을 오래 봐 눈 피로'], '지킬 수칙': ['한 시간마다 스트레칭', '모니터 높이 맞추기'] }, 0.25),
              MM('직업과 꼭 필요한 보호구를 이어요. 맞지 않는 카드는 남겨요.', '직업과 보호구', [{ id: 'v1', label: '수의사' }, { id: 'v2', label: '과학 연구원' }, { id: 'v3', label: '건축가(현장 방문)' }], ['장갑과 앞치마', '보안경과 실험복', '안전모와 안전화', '목도리'], { v1: '장갑과 앞치마', v2: '보안경과 실험복', v3: '안전모와 안전화' }, 0.25,
                { conclude: '어느 직업에나 위험이 있고, 위험·보호구·수칙을 미리 알면 안전하게 일할 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 좋은 계획 고르기', tool: 'mindmap',
            teacher: '"두 계획 가운데 어느 쪽이 더 실천하기 좋을까요?" "조심한다"처럼 막연한 수칙보다 "한 시간마다 스트레칭"처럼 구체적인 수칙이 좋다는 것을 짚는다. 모둠에서 서로의 계획을 읽고 빠진 칸을 알려 준다.',
            task: '좋은 안전 계획의 조건을 고르고 나누어요.',
            levels: LV,
            items: [
              MS('안전 수칙을 나누어 보세요.', '수칙 고르기', ['구체적이에요', '막연해요'], ['장갑을 끼고 약품을 다뤄요', '그냥 조심해요', '작업 전 기계를 점검해요', '알아서 잘해요'], { '구체적이에요': ['장갑을 끼고 약품을 다뤄요', '작업 전 기계를 점검해요'], '막연해요': ['그냥 조심해요', '알아서 잘해요'] }, 0.2),
              MP('좋은 직업 안전 계획에 들어갈 것만 골라 담아요.', '계획에 넣을 것', ['그 직업의 위험', '좋아하는 음식', '필요한 보호구', '친구의 꿈'], ['그 직업의 위험', '필요한 보호구'], 0.2),
              MM('계획의 칸과 알맞은 내용을 이어요. 맞지 않는 카드는 남겨요.', '계획 칸 채우기', [{ id: 'p1', label: '위험' }, { id: 'p2', label: '보호구' }, { id: 'p3', label: '지킬 수칙' }], ['소방관: 연기와 열', '소방관: 방화복·공기 호흡기', '소방관: 둘 이상 함께 진입', '소방관: 멋진 제복'], { p1: '소방관: 연기와 열', p2: '소방관: 방화복·공기 호흡기', p3: '소방관: 둘 이상 함께 진입' }, 0.3,
                { conclude: '좋은 안전 계획은 위험·보호구·구체적인 수칙이 모두 들어 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"내 직업 안전 계획을 한 문장으로 소개해 볼까요? \'나는 ○○가 되어 ○○ 위험을 ○○로 막겠다.\'" 몇 명이 발표한다. 출구 2번에서 막연한 수칙을 고른 학생에게 구체적으로 바꾸어 보게 한다.',
          exit: [
            { type: 'choice', prompt: '직업 안전 계획에 꼭 들어갈 세 가지는?', options: ['위험·보호구·수칙', '월급·휴가·옷', '취미·음식·노래'], answer: 0, difficulty: 0.15, explain: '위험을 알고 보호구와 수칙으로 막는 계획이에요.' },
            { type: 'choice', prompt: '더 실천하기 좋은 수칙은?', options: ['작업 전 보호구를 점검해요', '그냥 조심해요', '알아서 해요'], answer: 0, difficulty: 0.2, explain: '구체적인 수칙이어야 실제로 지킬 수 있어요.' },
            { type: 'short', prompt: '내 꿈 직업의 위험 하나와 그것을 막는 수칙을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '나의 직업 안전 계획',
        ws: [
          { type: 'table', prompt: '내가 꿈꾸는 직업의 안전 계획을 세우세요.', columns: ['칸', '내용'], cells: [['꿈꾸는 직업', ''], ['위험', ''], ['보호구', ''], ['지킬 수칙', '']] },
          { type: 'choice', prompt: '구체적인 수칙에 ○ 하세요.', options: ['한 시간마다 스트레칭해요', '건강하게 지내요', '조심해요'], answer: '한 시간마다 스트레칭해요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '몸에 쓰는 것은 ___, 지키는 약속은 ___이에요.', answer: '보호구, 수칙' },
          { type: 'short', prompt: '친구의 직업 안전 계획을 읽고 더하면 좋을 점을 하나 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 내 꿈 직업에는 위험이 없다고 여긴다 → 오래 일할 때의 몸 피로도 위험임을 짚는다. ② 보호구와 수칙을 헷갈린다 → "몸에 쓰는 것/지키는 약속"으로 나눈다. ③ 수칙을 막연하게 쓴다 → 언제·무엇을 할지 구체적으로 쓰게 한다. 꿈이 아직 없는 학생은 관심 있는 직업 하나로 해도 된다.',
      }),
    ],
  });
})();
