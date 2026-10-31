/* 고2 창체 안전교육 — 직업안전 (차시 3개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 고등학교 직업안전, 산업안전보건법 제52조.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 11; const CODE = 'saf-job';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '직업안전';
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
    flow: '고2 직업안전 단원은 "사고"에서 한 걸음 더 나아가 오래 일하며 생기는 직업병과, 일하는 사람이 스스로를 지킬 수 있는 제도를 다룹니다. 1차시에는 소음·반복 작업·화학물질·분진 같은 원인과 그로 인한 직업병(소음성 난청, 근골격계 질환, 중독, 호흡기 질환)을 잇고 예방과 대처를 정리합니다. 2차시에는 현장실습 중 위험하거나 부당한 지시를 받았을 때 학생이 할 수 있는 행동을 판단합니다. 3차시에는 산업안전보건법 제52조의 근로자 작업중지 제도를 읽고 급박한 위험에서 대피·보고하는 순서를 정합니다. 법령상 연계 대상 단원은 없지만 진로활동 단원과 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '직업병의 원인과 병 잇고 예방법 고르기',
        objective: '직업병의 주요 원인과 질환을 잇고, 원인에 맞는 예방과 대처 방법을 고를 수 있다.',
        draw: 'paper workers wearing ear muffs, a dust mask and taking a stretching break beside a paper machine and a calendar',
        banner: '천천히 오는 병, 미리 막기', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"사고는 한순간이지만, 몇 년에 걸쳐 조금씩 몸이 상하는 일도 있어요. 어떤 일이 떠오르나요?" 대답을 듣고(기다릴 반응: "귀가 나빠져요", "허리 아파요") 일 때문에 생기는 병을 직업병이라 하고, 산업재해에 포함된다고 짚는다. "직업병은 나이 들어서 걸리는 것"이라는 말이 나오면 원인에 노출되기 시작하는 첫날부터 예방이 시작된다고 말한다.',
          student: '오래 앉아 공부할 때 몸 어디가 아픈지 떠올려, 일하는 사람에게는 어떤 일이 생길지 짝과 말해 봅시다.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '원인과 병', slots: [{ id: 'n', label: '큰 소음' }], cards: ['난청', '피부염'], shuffle: false }, sequence: [{ match: { n: '난청' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 원인과 직업병 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"소음성 난청은 왜 무서울까요?" 서서히 진행되고 한번 나빠진 청력은 되돌리기 어렵다는 점을 짚는다. 근골격계 질환은 같은 동작을 오래 되풀이하거나 무리한 자세로 일할 때 생긴다는 점, 화학물질은 피부·호흡으로 들어올 수 있다는 점을 1번 뒤 정리한다.',
            task: '직업병의 원인과 질환을 잇고, 예방 방법을 원인별로 나누어요.',
            levels: LV,
            items: [
              MM('원인과 생길 수 있는 직업병을 이어 보세요. 맞지 않는 카드는 남겨요.', '원인과 직업병', [{ id: 'o1', label: '오랜 큰 소음' }, { id: 'o2', label: '같은 동작 반복' }, { id: 'o3', label: '유기용제 증기' }, { id: 'o4', label: '광물 분진' }], ['소음성 난청', '근골격계 질환', '신경계 중독', '호흡기 질환', '감기'], { o1: '소음성 난청', o2: '근골격계 질환', o3: '신경계 중독', o4: '호흡기 질환' }, 0.3),
              MS('예방 방법을 원인별로 나누어 보세요.', '직업병 예방', ['소음', '반복 작업', '화학물질'], ['귀마개·귀덮개 쓰기', '소음 기계에 방음 덮개', '중간중간 쉬고 스트레칭', '작업대 높이 맞추기', '국소 배기 장치', '방독 마스크·장갑'], { '소음': ['귀마개·귀덮개 쓰기', '소음 기계에 방음 덮개'], '반복 작업': ['중간중간 쉬고 스트레칭', '작업대 높이 맞추기'], '화학물질': ['국소 배기 장치', '방독 마스크·장갑'] }, 0.35),
              MP('직업병에 대해 옳은 말만 골라 담으세요.', '직업병 바로 알기', ['산업재해에 포함돼요', '천천히 진행될 수 있어요', '나이 든 사람만 걸려요', '일찍 알면 대처가 쉬워요'], ['산업재해에 포함돼요', '천천히 진행될 수 있어요', '일찍 알면 대처가 쉬워요'], 0.25,
                { conclude: '직업병은 천천히 오기 때문에 노출 첫날부터 막고, 이상이 있으면 일찍 검진받아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 증상이 보일 때 대처', minutes: 14, tool: 'emotion',
            teacher: '"손목이 저린데 참고 계속 일하면 어떻게 될까요?" 증상이 있으면 알리고 진료를 받으며, 일과 관련이 있다면 산업재해로 인정받을 수 있다는 점을 짚는다. 사업주는 일정한 유해 작업 근로자에게 건강진단을 받게 해야 한다는 정도까지만 다룬다(특수건강진단 세부는 다루지 않는다).',
            task: '직업병이 의심되는 증상이 보일 때 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('"윤"은 공장 일을 한 뒤로 귀에서 삐 소리가 나고 말소리가 잘 안 들려요. 어떻게 할까요?', '소음이 큰 공장에서 일하는 "윤"은 퇴근 뒤 귀에서 삐 소리가 나고 말소리가 작게 들려요.', [
                { id: 'check', text: '관리자에게 알리고 청력 검사를 받아요', result: '일찍 알아 더 나빠지기 전에 대처해요.', mood: '안심' },
                { id: 'ignore', text: '피곤해서 그렇다며 넘어가요', result: '청력이 서서히 더 나빠져요.', mood: '걱정', why: '소음성 난청은 되돌리기 어려워 일찍 알아야 해요.' }], 'check', 0.25),
              EB('"윤"의 동료가 하루 종일 같은 동작으로 포장하다 손목이 저려요. 어떻게 할까요?', '포장 라인에서 같은 동작을 되풀이하는 동료가 손목이 저리고 아프다고 해요.', [
                { id: 'endure', text: '모두 그러니 참고 일해요', result: '증상이 심해져 일을 못 하게 돼요.', mood: '속상함', why: '증상을 참으면 근골격계 질환이 깊어질 수 있어요.' },
                { id: 'tell', text: '알리고 진료·작업 조정을 요청해요', result: '쉬는 시간과 작업 방법이 바뀌어요.', mood: '편안함' }], 'tell', 0.25),
              EB('세척제 냄새가 심한 곳에서 일하다 머리가 아프고 어지러워요. 어떻게 할까요?', '환기가 잘 안 되는 곳에서 세척제를 쓰는데 머리가 아프고 어지러워요.', [
                { id: 'out', text: '바로 밖으로 나가 바람을 쐬고 알려요', result: '증상이 줄고 환기 장치를 점검해요.', mood: '안심' },
                { id: 'mask', text: '마스크를 끼고 계속 일해요', result: '맞지 않는 마스크면 증상이 계속돼요.', mood: '걱정', why: '증상이 생기면 먼저 벗어나고 알려야 해요.' },
                { id: 'pill', text: '두통약을 먹고 참아요', result: '원인은 그대로 남아요.', mood: '불안', why: '약으로 증상만 가리면 노출이 계속돼요.' }], 'out', 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 직업병 가운데 우리 생활과 가장 가까운 것은?" 이어폰 음량·오래 앉은 자세처럼 학생 생활에서도 비슷한 원리가 있다는 점을 짚고, 출구 1번에서 원인을 헷갈린 학생과 다시 견주어 본다.',
          exit: [
            XM('직업과 조심할 직업병을 두 칸으로 나누어 보세요.', '직업과 직업병', ['소음성 난청', '근골격계 질환'], ['공사장 착암기 작업', '프레스 공장 작업', '하루 종일 계산대 바코드', '무거운 택배 반복 운반'], { '소음성 난청': ['공사장 착암기 작업', '프레스 공장 작업'], '근골격계 질환': ['하루 종일 계산대 바코드', '무거운 택배 반복 운반'] }, 0.3),
            CH('직업병에 대한 설명으로 옳은 것은?', ['산업재해에 들지 않는다', '일 때문에 생긴 병으로 산업재해에 포함된다', '사고로 다친 것만 직업병이다'], 1, '일 때문에 생긴 병은 직업병이며 산업재해에 포함돼요.'),
            SH('내 생활에서 소음성 난청이나 근골격계 질환을 막기 위해 바꿀 습관을 한 가지 쓰세요.'),
          ],
        },
        ws: {
          title: '직업병 알기',
          items: [
            { type: 'table', prompt: '원인에 따른 직업병과 예방 방법을 쓰세요.', columns: ['원인', '직업병', '예방'], cells: [['오랜 큰 소음', '', ''], ['같은 동작 반복', '', ''], ['유기용제 증기', '', '']], answer: '소음성 난청·귀마개 / 근골격계 질환·휴식과 스트레칭 / 중독·국소 배기와 방독 마스크' },
            { type: 'choice', prompt: '세척제 냄새에 어지러울 때 먼저 할 일에 ○ 하세요.', options: ['두통약 먹기', '밖으로 나가 알리기', '계속 일하기'], answer: '밖으로 나가 알리기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '소음성 난청은 ___ 진행되고, 한번 나빠지면 ___기 어려워요.', answer: '서서히, 되돌리' },
            { type: 'short', prompt: '직업병을 개인 건강 문제로만 볼 수 없는 까닭을 쓰세요.' },
          ],
        },
        diff: DIFF('원인과 질환, 예방을 함께 판단해요.'),
        notes: '자주 보이는 어려움: ① 직업병은 산업재해가 아니라고 여긴다 → 포함된다. ② 증상을 참는다 → 알리고 진료받는다. ③ 약으로 버틴다 → 원인 노출을 멈춘다. 특정 기업·실제 피해 사례는 다루지 않는다.',
      }),

      LESSON(2, {
        title: '현장실습 중 위험하거나 부당한 지시 앞에서',
        objective: '현장실습 중 위험하거나 실습 목적에 맞지 않는 지시를 받았을 때 거부하고 학교에 알리는 등 학생이 할 수 있는 행동을 판단할 수 있다.',
        draw: 'a student in paper work clothes at a factory entrance holding a paper phone to call a teacher, with a paper school building in the distance',
        banner: '실습생은 배우러 간 학생', extra: [{ motif: 'house', x: 300, y: 214, color: 'sky', s: 0.6 }],
        intro: {
          teacher: '"현장실습생은 \'일하러 간 사람\'일까요, \'배우러 간 학생\'일까요?" 의견을 듣고 현장실습은 학교와 기업이 협약을 맺고 학생이 직무를 배우는 교육 과정이라는 점을 짚는다. "실습생이 거절하면 취업에 불리하다"는 걱정이 나오면 위험한 지시를 거부하고 학교에 알리는 것은 학생의 당연한 권리이며 학교 담당 교사가 함께 대응한다고 말해 준다. 사례는 모두 가상 인물로 다룬다.',
          student: '처음 가는 일터에서 "이걸 해도 되나?" 싶을 때 누구에게 물을지 짝과 이야기해 봅시다.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '배운 적 없는 기계를 혼자 돌리래요.', choices: [{ id: 'ask', text: '교육 먼저 요청해요', result: '안전하게 배워요.', mood: '안심' }, { id: 'do', text: '그냥 해 봐요', result: '사고 위험이 커요.', mood: '걱정' }] }, sequence: [{ choice: 'ask' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 실습생 "린"의 상황 판단', minutes: 14, tool: 'emotion',
            teacher: '"실습 목적과 상관없는 일을 계속 시키면 어떻게 할까요?" 실습 협약에 정한 직무와 다른 일, 위험한 단독 작업, 야간·장시간 근무 강요는 학교 담당 교사에게 바로 알릴 일이라고 짚는다. 2번에서 "혼자 참는다"를 고르는 학생에게는 실습생은 혼자가 아니라 학교가 함께 책임진다는 점을 이야기한다.',
            task: '가상 실습생 "린"이 겪는 상황에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('"린"에게 교육도 없이 혼자 프레스 기계를 돌리라고 해요. 어떻게 할까요?', '현장실습 첫 주, 담당자가 교육 없이 "린"에게 혼자 프레스 기계를 맡기려 해요.', [
                { id: 'refuse', text: '교육을 요청하고 학교에 알려요', result: '교육과 감독 아래에서 배우게 돼요.', mood: '안심' },
                { id: 'try', text: '잘 보이려고 혼자 해 봐요', result: '손이 기계에 끼일 뻔해요.', mood: '무서움', why: '교육 없이 위험한 기계를 혼자 다루면 안 돼요.' }], 'refuse', 0.3),
              EB('"린"이 실습과 상관없는 청소와 심부름만 몇 주째 하고 있어요. 어떻게 할까요?', '"린"은 전공 실습 대신 몇 주째 창고 청소와 심부름만 하고 있어요.', [
                { id: 'endure', text: '취업 때문에 혼자 참아요', result: '배움도 없이 실습이 끝나요.', mood: '속상함', why: '실습 목적과 다른 일은 학교 담당 교사에게 알릴 일이에요.' },
                { id: 'tell', text: '학교 담당 교사에게 알려 상담해요', result: '학교가 기업과 실습 내용을 조정해요.', mood: '안심' }], 'tell', 0.3),
              EB('"린"에게 밤늦게까지 남아 일하라고 해요. 어떻게 할까요?', '실습 기업이 바쁘다며 "린"에게 밤 11시까지 남아 달라고 해요.', [
                { id: 'stay', text: '거절하면 불이익이 있을까 봐 남아요', result: '피로가 쌓여 사고 위험이 커져요.', mood: '걱정', why: '협약을 넘는 장시간·야간 근무는 학교에 알리고 거절할 수 있어요.' },
                { id: 'report', text: '정해진 시간을 말하고 학교에 알려요', result: '협약한 시간대로 실습해요.', mood: '편안함' }], 'report', 0.3,
                { conclude: '실습생은 배우러 간 학생 — 위험·부당한 지시는 거절하고 학교 담당 교사에게 바로 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 실습 전 확인하고 준비하기', minutes: 13, tool: 'mindmap',
            teacher: '"실습 가기 전에 무엇을 확인하면 좋을까요?" 실습 협약서의 직무·시간·안전 교육, 학교 담당 교사 연락 방법, 비상시 대피 경로를 확인한다고 짚는다. 2번에서 실습생이 피해야 할 지시를 고른 뒤, 3번 모둠 활동에서 실습 전 확인표를 만든다.',
            task: '실습 전에 확인할 것과 실습 중 바로 알릴 상황을 골라요.',
            levels: LV,
            items: [
              MP('현장실습 전에 확인할 것만 골라 담으세요.', '실습 전 확인', ['협약서의 직무·시간', '안전 교육 일정', '학교 담당 교사 연락 방법', '회사 대표의 취미'], ['협약서의 직무·시간', '안전 교육 일정', '학교 담당 교사 연락 방법'], 0.25),
              MS('실습 중 상황을 두 칸으로 나누어 보세요.', '바로 알릴까', ['학교에 바로 알려요', '실습 과정이에요'], ['보호구 없이 위험 작업', '협약에 없는 야간 근무', '담당자와 함께 기계 실습', '작업 전 안전 교육'], { '학교에 바로 알려요': ['보호구 없이 위험 작업', '협약에 없는 야간 근무'], '실습 과정이에요': ['담당자와 함께 기계 실습', '작업 전 안전 교육'] }, 0.3),
              TALK('모둠에서 현장실습 전 확인표 다섯 줄을 만들어 발표 준비를 한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 \'린\'의 상황 가운데 실제로 가장 말하기 어려울 것 같은 것은?" 의견을 듣고, 말하기 어려울수록 학교 담당 교사·보호자와 미리 연락 방법을 정해 두는 것이 중요하다고 정리한다.',
          exit: [
            XB('실습처에서 안전모 없이 높은 선반 작업을 하래요. 어떻게 할까요?', '실습생 "솔"에게 안전모 없이 사다리에 올라 높은 선반을 정리하라고 해요.', [
              { id: 'ask', text: '보호구를 요청하고 없으면 거절·학교에 알림', result: '안전 장비를 갖추고 감독 아래 작업해요.', mood: '안심' },
              { id: 'do', text: '금방 끝나니 그냥 올라가요', result: '사다리에서 떨어질 수 있어요.', mood: '무서움', why: '보호구 없는 위험 작업은 거절하고 학교에 알려요.' }], 'ask', 0.25),
            CH('현장실습에 대한 설명으로 옳은 것은?', ['실습생은 어떤 지시든 따라야 한다', '학교와 기업이 협약을 맺은 교육 과정이다', '실습 중 문제는 혼자 해결한다'], 1, '현장실습은 학교와 기업이 협약을 맺은 교육 과정이고, 학교가 함께 책임져요.'),
            SH('현장실습 중 위험한 지시를 받았을 때 할 말을 정중하게 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '현장실습 안전과 권리',
          items: [
            { type: 'table', prompt: '상황을 읽고 학교에 바로 알릴 일이면 ○, 실습 과정이면 ×를 쓰세요.', columns: ['상황', '○ / ×'], cells: [['보호구 없이 위험 작업', ''], ['작업 전 안전 교육', ''], ['협약에 없는 야간 근무', ''], ['담당자와 함께 기계 실습', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '실습 목적과 다른 일만 계속 시킬 때 할 일에 ○ 하세요.', options: ['혼자 참아요', '학교 담당 교사에게 알려요', '말없이 그만둬요'], answer: '학교 담당 교사에게 알려요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '현장실습은 학교와 기업이 ___을 맺은 ___ 과정이에요.', answer: '협약, 교육' },
            { type: 'short', prompt: '우리 모둠이 만든 현장실습 전 확인표에서 가장 중요한 줄과 그 까닭을 쓰세요.' },
          ],
        },
        diff: DIFF('취업 걱정과 안전이 부딪히는 상황을 판단해요.'),
        notes: '자주 보이는 어려움: ① 실습생은 무엇이든 따라야 한다고 여긴다 → 위험·부당한 지시는 거절하고 알린다. ② 문제를 혼자 해결하려 한다 → 학교 담당 교사가 함께 대응한다. ③ 거절하면 취업에 불리할까 걱정한다 → 학교와 미리 연락 방법을 정해 둔다. 현장실습 관련 법령 조항 번호는 쓰지 않았다 — 학교의 현장실습 운영 지침으로 보충한다.',
      }),

      LESSON(3, {
        title: '급박한 위험에서 작업 멈추고 대피·보고하기',
        objective: '산업안전보건법의 근로자 작업중지 제도를 설명하고, 급박한 위험이 있을 때 작업을 멈추고 대피한 뒤 보고하는 순서를 정할 수 있다.',
        draw: 'a paper worker pressing a big red stop button and walking toward a green exit sign while a supervisor listens with a paper clipboard',
        banner: '멈추고, 피하고, 알려요', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: {
          teacher: '"작업장에 가스 냄새가 진동하는데 \'일을 멈추면 혼날까 봐\' 계속 일한다면 어떻게 될까요?" 의견을 듣고 산업안전보건법 제52조는 산업재해가 일어날 급박한 위험이 있으면 근로자가 작업을 중지하고 대피할 수 있다고 정한다고 소개한다. "그래도 마음대로 멈추면 해고된다"는 걱정이 나오면 조문을 함께 읽으며 따져 보자고 한다.',
          student: '"위험하면 멈춘다"가 쉽지 않은 까닭을 짝과 두 가지씩 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('stop', '작업을 멈춰요', 'sun'), C('out', '안전한 곳으로 피해요', 'house')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['stop', 'out'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 작업중지 조문 읽기', minutes: 13, tool: 'mindmap',
            teacher: '"이 조문은 근로자에게 무엇을 요구하나요?" 제52조의 요지를 읽어 준다: 급박한 위험이 있으면 작업을 중지하고 대피할 수 있고, 지체 없이 관리감독자 등에게 보고해야 하며, 관리감독자 등은 안전보건 조치를 해야 하고, 급박한 위험이 있다고 믿을 만한 합리적인 이유가 있을 때 작업을 중지한 근로자에게 해고 등 불리한 처우를 해서는 안 된다. "아무 때나 멈춰도 된다"로 읽는 학생에게는 합리적인 이유와 보고 의무가 함께 있다는 점을 짚는다.',
            task: '조문 내용을 근로자의 권리·의무와 사업주의 의무로 나누고, 조문에 맞는 말과 틀린 말을 가려요.',
            levels: LV,
            items: [
              MS('조문 내용을 세 칸으로 나누어 보세요.', '제52조 읽기', ['근로자의 권리', '근로자의 의무', '사업주 쪽 의무'], ['급박한 위험 때 작업 중지', '안전한 곳으로 대피', '지체 없이 보고', '안전보건 조치를 함', '합리적 중지에 불이익 금지'], { '근로자의 권리': ['급박한 위험 때 작업 중지', '안전한 곳으로 대피'], '근로자의 의무': ['지체 없이 보고'], '사업주 쪽 의무': ['안전보건 조치를 함', '합리적 중지에 불이익 금지'] }, 0.35),
              MS('조문에 맞는 말과 틀린 말을 나누어 보세요.', '맞을까 틀릴까', ['조문에 맞아요', '조문과 달라요'], ['위험 믿을 이유가 있으면 보호', '멈춘 뒤 보고해야 해요', '싫으면 언제든 멈춰도 돼요', '멈추면 해고해도 돼요'], { '조문에 맞아요': ['위험 믿을 이유가 있으면 보호', '멈춘 뒤 보고해야 해요'], '조문과 달라요': ['싫으면 언제든 멈춰도 돼요', '멈추면 해고해도 돼요'] }, 0.3,
                { conclude: '작업중지는 급박한 위험에 대한 권리이고, 보고 의무와 합리적 이유가 함께 있어요.' }),
              MP('"급박한 위험"으로 볼 만한 상황만 골라 담으세요.', '급박한 위험', ['가스 냄새가 진동해요', '천장이 금 가며 흔들려요', '작업장에 연기가 차요', '오늘 일이 지루해요'], ['가스 냄새가 진동해요', '천장이 금 가며 흔들려요', '작업장에 연기가 차요'], 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 멈추고 대피하고 보고하기', minutes: 14, tool: 'story',
            teacher: '"멈춘 뒤 보고는 왜 꼭 해야 할까요?" 다른 사람도 위험을 알아야 하고, 관리감독자가 조치를 해야 작업을 다시 시작할 수 있다는 점을 짚는다. 2번에서 위험이 없어지기 전에 혼자 돌아가 일을 마무리하는 장면을 고치게 한다.',
            task: '급박한 위험 상황에서 할 일을 차례대로 놓고, 동료와 함께하는 행동을 이어요.',
            levels: LV,
            items: [
              SO('가스 냄새가 심할 때 할 일을 차례대로 놓아 보세요.', '가스 냄새가 진동할 때', ['1', '2', '3', '4'], [C('g1', '작업을 멈춰요', 'sun'), C('g2', '동료에게 알리며 대피', 'cloud'), C('g3', '관리감독자에게 보고', 'house'), C('g4', '조치 확인 뒤 다시 시작', 'star')], ['g1', 'g2', 'g3', 'g4'], 0.3),
              MM('상황과 알맞은 행동을 이어 보세요. 맞지 않는 카드는 남겨요.', '작업중지 뒤', [{ id: 'a1', label: '대피한 뒤' }, { id: 'a2', label: '보고할 때' }, { id: 'a3', label: '다시 일하기 전' }], ['인원과 다친 사람 확인', '무엇이 위험한지 구체적으로', '조치가 끝났는지 확인', '혼자 돌아가 마저 하기'], { a1: '인원과 다친 사람 확인', a2: '무엇이 위험한지 구체적으로', a3: '조치가 끝났는지 확인' }, 0.3),
              TALK('짝과 "가스 냄새가 심해 작업을 멈추고 대피했습니다"로 시작하는 보고를 역할극으로 해 보고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 조문에서 가장 놀라웠던 점은?" 의견을 나누고, 출구 1번에서 불이익 금지를 무조건으로 읽은 학생과 합리적 이유의 뜻을 다시 짚으며 단원을 마친다. 조문은 국가법령정보센터 현행 조문으로 확인할 수 있다고 알린다.',
          exit: [
            XO('작업장에 연기가 찰 때 할 일을 차례대로 놓으세요.', '연기가 찰 때', ['1', '2', '3'], [C('s1', '작업 멈추고 알리기', 'sun'), C('s2', '비상구로 대피하기', 'house'), C('s3', '관리감독자에게 보고', 'star')], ['s1', 's2', 's3'], 0.25),
            CH('산업안전보건법 제52조의 작업중지에 대한 설명으로 옳은 것은?', ['언제든 이유 없이 멈출 수 있다', '급박한 위험 때 멈추고 대피하며 보고해야 한다', '멈춘 근로자는 해고할 수 있다'], 1, '급박한 위험이 있으면 작업을 중지·대피할 수 있고, 지체 없이 보고해야 해요.', 0.3),
            SH('위험할 때 작업을 멈추기 어렵게 만드는 일터 분위기를 바꾸려면 무엇이 필요한지 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '위험할 때 작업을 멈출 권리',
          items: [
            { type: 'table', prompt: '제52조의 내용을 쓰세요.', columns: ['누구', '내용'], cells: [['근로자의 권리', ''], ['근로자의 의무', ''], ['사업주 쪽 의무', '']], answer: '급박한 위험 때 작업 중지·대피 / 지체 없이 보고 / 안전보건 조치, 합리적 중지에 불리한 처우 금지' },
            { type: 'choice', prompt: '급박한 위험으로 볼 만한 상황에 ○ 하세요.', options: ['일이 지루해요', '천장이 금 가며 흔들려요', '점심이 늦어요'], answer: '천장이 금 가며 흔들려요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '작업을 멈추고 대피한 뒤에는 지체 없이 ___해야 하고, ___가 끝난 뒤 다시 시작해요.', answer: '보고, 조치' },
            { type: 'short', prompt: '가스 냄새로 작업을 멈춘 상황을 관리감독자에게 보고하는 말을 두 문장으로 쓰세요.' },
          ],
        },
        diff: DIFF('조문의 권리와 의무를 가려 상황에 적용해요.'),
        notes: '자주 보이는 어려움: ① 작업중지를 아무 때나 쓰는 권리로 읽는다 → 급박한 위험·합리적 이유·보고 의무. ② 보고를 빠뜨린다 → 지체 없이 보고. ③ 위험이 남았는데 혼자 돌아간다 → 조치 확인 뒤 재개. 조문 요지는 수업 전에 국가법령정보센터 현행 조문으로 확인한다.',
      }),
    ],
  });
})();
