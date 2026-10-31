/* 고2 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간. 근로기준법 제6조(균등한 처우)로 이주노동자의 권리를 보고, 공존을 위한 지역 행사 기획 차례를 다룬다. 통계 숫자는 쓰지 않는다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 11; const CODE = 'multi';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '다문화 이해';
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
    flow: '고2 다문화 이해 단원은 이주민을 "도와줄 대상"이 아니라 같은 권리를 가진 이웃이자 함께 사회를 만드는 사람으로 봅니다. 1차시에는 근로기준법의 균등한 처우 원칙(국적을 이유로 근로조건을 차별하지 못함)을 바탕으로 이주노동자의 권리에 관한 오해와 사실을 가리고, 일터의 차별 사례를 판단합니다. 2차시에는 이주민과 선주민이 함께 준비하는 지역 행사를 가상으로 기획하며, 기획 차례와 "함께 정하기·한 문화만 구경거리로 만들지 않기" 같은 존중의 조건을 정합니다. 노동인권교육·진로교육과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '이주노동자의 권리에 관한 오해와 사실 가리기',
        objective: '근로기준법의 균등한 처우 원칙을 바탕으로 이주노동자의 권리에 관한 오해와 사실을 구별하고, 일터의 차별 사례를 판단할 수 있다.',
        draw: 'a paper-cut factory and farm field with workers of different backgrounds working side by side under a shared sun',
        banner: '같은 일, 같은 권리', extra: [{ motif: 'sun', x: 80, y: 90, s: 0.6 }],
        intro: {
          teacher: '"우리가 먹는 채소, 타는 배, 사는 물건을 만드는 일터에 누가 함께 일하고 있을까요?" 대답을 듣고(기다릴 반응: "외국인 노동자요", "잘 모르겠어요") 많은 일터에서 이주노동자가 함께 일한다는 점을 짚는다. "외국인은 한국 법의 보호를 덜 받지 않나요?"라는 물음에는 "근로기준법은 국적을 이유로 근로조건을 차별하지 못하게 해요. 오늘 그 뜻을 살펴볼까요?"라고 답한다. 시연으로 문장을 나누고 활동을 시작한다.',
          student: '나중에 아르바이트나 일을 할 때 꼭 보장받고 싶은 권리 하나를 짝과 말해 봅시다.',
          demo: DEMO('이주노동자 권리 문장', ['사실', '오해'], ['국적으로 임금 차별 못 해요', '외국인은 최저임금 예외'], { '사실': ['국적으로 임금 차별 못 해요'], '오해': ['외국인은 최저임금 예외'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 오해와 사실 가리기', minutes: 13, tool: 'mindmap',
            teacher: '"이 문장은 법과 맞을까요?" 근로기준법 제6조는 사용자가 국적·신앙·사회적 신분 등을 이유로 근로조건을 차별하지 못하게 한다는 점을 짚는다. 1번에서 "외국인은 다치면 스스로 책임진다"를 사실에 넣는 학생에게 "일하다 다친 사람을 보호하는 제도가 국적에 따라 달라야 할까요?"라고 묻는다. 체류 자격 같은 세부 제도는 복잡하므로 이 차시에서는 원칙에 집중한다.',
            task: '이주노동자의 권리에 관한 문장을 오해와 사실로 나누어요.',
            levels: LV,
            items: [
              MS('문장을 사실과 오해로 나누어 보세요.', '권리에 관한 문장', ['사실', '오해'], ['국적으로 근로조건 차별 못 해요', '일한 만큼 임금을 받아요', '외국인은 휴식 시간 없어도 돼요', '말이 서툴면 임금 덜 줘도 돼요'], { '사실': ['국적으로 근로조건 차별 못 해요', '일한 만큼 임금을 받아요'], '오해': ['외국인은 휴식 시간 없어도 돼요', '말이 서툴면 임금 덜 줘도 돼요'] }, 0.2),
              MS('흔히 듣는 말을 사실과 오해로 나누어 보세요.', '흔히 듣는 말', ['사실', '오해'], ['이주노동자도 노동자예요', '여러 산업을 함께 떠받쳐요', '다 불법으로 와서 일해요', '모두 한국 사람 일을 뺏어요'], { '사실': ['이주노동자도 노동자예요', '여러 산업을 함께 떠받쳐요'], '오해': ['다 불법으로 와서 일해요', '모두 한국 사람 일을 뺏어요'] }, 0.3),
              MP('국적과 상관없이 일하는 사람 모두에게 보장되어야 할 것만 골라 담아 보세요.', '모두의 권리', ['정해진 임금 받기', '안전한 작업 환경', '폭언·폭행 없는 일터', '출신에 따른 다른 대우'], ['정해진 임금 받기', '안전한 작업 환경', '폭언·폭행 없는 일터'], 0.25,
                { conclude: '일하는 사람의 권리는 국적과 상관없어요. 근로기준법은 국적을 이유로 근로조건을 차별하지 못하게 해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 일터의 차별 사례 판단하기', minutes: 14, tool: 'mindmap',
            teacher: '"이 대우의 이유는 일의 내용인가요, 출신인가요?" 같은 일에 출신만으로 다른 대우를 하면 차별이고, 업무 능력·자격에 따른 정당한 차이는 차별이 아니라는 점을 구별하게 한다. 2번에서 "안전 교육을 모국어 자료로 제공"을 특혜로 보는 학생에게 "말을 알아들어야 안전 교육이 효과가 있지 않을까요?"라고 묻는다. 3번은 짝과 말로 나눈다.',
            task: '일터의 사례를 차별과 정당한 대우로 나누고, 상황에 맞는 대응을 이어요.',
            levels: LV,
            items: [
              MS('일터의 사례를 두 가지로 나누어 보세요.', '일터의 대우', ['출신에 따른 차별', '정당한 대우'], ['같은 일인데 외국인만 임금 적게', '외국인만 위험 작업 맡기기', '모국어로 안전 교육 제공', '자격증 있는 사람에게 수당'], { '출신에 따른 차별': ['같은 일인데 외국인만 임금 적게', '외국인만 위험 작업 맡기기'], '정당한 대우': ['모국어로 안전 교육 제공', '자격증 있는 사람에게 수당'] }, 0.3),
              MM('일터의 상황과 알맞은 대응을 이어 보세요. 맞지 않는 카드는 남겨요.', '상황별 대응', [{ id: 'j1', label: '동료가 출신 이유로 폭언 들음' }, { id: 'j2', label: '임금을 제때 못 받음' }, { id: 'j3', label: '안전 설명을 못 알아들음' }], ['곁에 서고 책임자에게 알리기', '노동 상담 기관과 의논하기', '통역·쉬운 자료 요청하기', '참고 넘어가기'], { j1: '곁에 서고 책임자에게 알리기', j2: '노동 상담 기관과 의논하기', j3: '통역·쉬운 자료 요청하기' }, 0.3,
                { conclude: '출신이 아니라 일의 내용으로 대우받는 일터가 모두에게 공정한 일터예요.' }),
              TALK('짝과 함께 "출신과 상관없이 공정한 일터"의 조건 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"나중에 내가 일할 곳에 이주노동자 동료가 있다면, 오늘 배운 것 가운데 무엇을 기억하겠어요?" 출구 1번에서 모국어 안전 교육을 차별에 넣은 학생에게는 동등한 출발을 위한 조치라는 점을 다시 짚는다. 일하는 사람의 권리는 언젠가 내 권리이기도 하다는 말로 마무리한다.',
          exit: [
            XS('문장을 두 가지로 나누어 보세요.', '사실일까 오해일까', ['사실', '오해'], ['국적으로 임금 차별 금지', '모두 안전한 일터 권리', '외국인은 법 보호 밖', '말 서툴면 차별해도 돼요'], { '사실': ['국적으로 임금 차별 금지', '모두 안전한 일터 권리'], '오해': ['외국인은 법 보호 밖', '말 서툴면 차별해도 돼요'] }),
            XC('근로기준법의 균등한 처우 원칙에 맞는 것은?', ['국적에 따라 임금을 다르게 정한다', '국적을 이유로 근로조건을 차별하지 않는다', '외국인에게는 휴게 시간을 주지 않는다'], 1, '근로기준법은 국적을 이유로 한 근로조건 차별을 금지해요.'),
            XT('같은 일터의 이주노동자 동료가 차별을 겪을 때 내가 할 수 있는 일을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '국적과 상관없는 노동 인권',
          items: [
            { type: 'table', prompt: '사례를 읽고 차별인지 판단하고 까닭을 쓰세요.', columns: ['사례', '차별인가', '까닭'], cells: [['같은 일, 외국인만 임금 적게', '', ''], ['자격증 수당', '', ''], ['모국어 안전 교육', '', '']], answer: '차별·출신만으로 다른 대우 / 아님·자격에 따른 차이 / 아님·동등한 안전을 위한 조치' },
            { type: 'choice', prompt: '근로기준법이 근로조건 차별을 금지하는 이유에 해당하는 것에 ○ 하세요.', options: ['국적', '업무 자격', '근무 시간'], answer: '국적' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '일하는 사람의 권리는 ___과 상관없이 보장되어야 한다.', answer: '국적' },
            { type: 'short', prompt: '공정한 일터의 조건 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 이주노동자를 도움받는 대상으로만 본다 → 같은 권리를 가진 노동자이자 사회를 함께 떠받치는 사람임을 짚는다. ② 정당한 차이와 차별을 섞는다 → 이유가 일의 내용인지 출신인지로 가르게 한다. ③ 체류 자격·고용허가 같은 세부 제도와 통계 숫자는 다루지 않는다. 학급의 이주배경 학생을 예로 들지 않는다.',
      }),
      LESSON(2, {
        title: '이주민과 함께 준비하는 지역 행사 기획하기',
        objective: '이주민과 선주민이 함께 준비하는 지역 행사를 기획하는 차례를 세우고, 한 문화를 구경거리로 만들지 않는 존중의 조건을 정할 수 있다.',
        draw: 'a paper-cut neighborhood festival with lanterns, food stalls and people of many backgrounds planning together at a long table',
        banner: '함께 만드는 축제', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"\'다문화 축제\' 하면 어떤 장면이 떠오르나요?" 대답을 듣고(기다릴 반응: "전통 의상 입기요", "나라별 음식이요") 칠판에 적는다. "누가 기획하고, 누가 구경하는 축제였을까요?"라고 되묻는다. 이주민이 무대 위 볼거리로만 서는 행사와 함께 기획하는 행사가 어떻게 다를지 생각해 보게 하고, 오늘은 함께 만드는 행사를 기획한다고 밝힌다.',
          student: '모두가 즐거웠던 동네·학교 행사의 가상 장면을 떠올리고, 그 까닭을 짝과 말해 봅시다.',
          demo: DEMO('행사 기획 방식', ['함께 기획해요', '구경거리로 만들어요'], ['이주민 주민과 기획 회의', '전통 의상만 줄 세워 사진'], { '함께 기획해요': ['이주민 주민과 기획 회의'], '구경거리로 만들어요': ['전통 의상만 줄 세워 사진'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지역 행사 기획 차례 세우기', minutes: 14, tool: 'story',
            teacher: '"기획 회의를 열기 전에 프로그램부터 정하면 어떤 일이 생길까요?" 함께할 주민의 의견을 먼저 듣는 단계가 왜 앞에 와야 하는지 묻는다. 1번에서 "주제 정하기"를 "주민 의견 듣기"보다 앞에 두는 학생에게 "누구를 위한 주제인지 모른 채 정할 수 있을까요?"라고 되묻는다. 3번에서 행사가 끝나면 끝이라고 여기는 학생에게 돌아보기와 다음 행사 반영의 의미를 짚는다.',
            task: '이주민과 선주민이 함께 준비하는 지역 행사의 기획 장면 카드를 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('행사 준비 시작의 차례로 카드를 놓아 보세요.', '행사 준비 시작', ['처음', '다음', '그다음', '끝'], [C('ask', '이웃 주민 의견 듣기', 'house'), C('team', '함께 기획단 꾸리기', 'flower'), C('theme', '함께 주제 정하기', 'star'), C('role', '역할 나누기', 'leaf')], ['ask', 'team', 'theme', 'role'], 0.2),
              SO('행사 당일 운영의 차례로 카드를 놓아 보세요.', '행사 당일', ['처음', '다음', '끝'], [C('sign', '여러 언어 안내판 세우기', 'sun'), C('run', '함께 진행하기', 'flower'), C('clean', '함께 정리하기', 'leaf')], ['sign', 'run', 'clean'], 0.25),
              SO('행사가 끝난 뒤의 차례로 카드를 놓아 보세요.', '행사 뒤', ['처음', '다음', '끝'], [C('survey', '참여자 소감 모으기', 'star'), C('review', '아쉬운 점 함께 돌아보기', 'house'), C('next', '다음 행사에 반영하기', 'sun')], ['survey', 'review', 'next'], 0.3,
                { conclude: '듣기 → 함께 기획 → 함께 운영 → 함께 돌아보기의 차례가 행사를 모두의 것으로 만들어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 존중의 조건 정하기', minutes: 13, tool: 'mindmap',
            teacher: '"이 프로그램에 참여한 이주민 주민은 어떤 마음일까요?" 문화를 소개하는 것과 사람을 구경거리로 만드는 것의 차이를 짚는다. 2번에서 "참가자에게 출신 나라를 자꾸 묻기"를 존중으로 넣는 학생에게 "그 사람이 소개하고 싶은 것이 출신만일까요?"라고 묻는다. 3번은 모둠에서 말로 나눈다.',
            task: '행사 프로그램을 존중의 조건에 맞는 것과 맞지 않는 것으로 나누어요.',
            levels: LV,
            items: [
              MS('행사 프로그램을 두 가지로 나누어 보세요.', '프로그램 살피기', ['존중하는 기획', '구경거리로 만드는 기획'], ['함께 요리하고 나눠 먹기', '서로의 동네 이야기 나누기', '피부색별로 줄 세워 사진', '어설픈 한국어로 장기자랑'], { '존중하는 기획': ['함께 요리하고 나눠 먹기', '서로의 동네 이야기 나누기'], '구경거리로 만드는 기획': ['피부색별로 줄 세워 사진', '어설픈 한국어로 장기자랑'] }, 0.25),
              MP('함께 만드는 행사의 존중 조건만 골라 담아 보세요.', '존중의 조건', ['기획부터 함께 정하기', '여러 언어로 안내하기', '참여 여부 스스로 정하기', '출신 나라 계속 묻기'], ['기획부터 함께 정하기', '여러 언어로 안내하기', '참여 여부 스스로 정하기'], 0.25,
                { conclude: '함께 정하고, 누구나 이해하게 안내하고, 참여를 스스로 고르게 할 때 행사는 공존의 자리가 돼요.' }),
              TALK('모둠에서 함께 만드는 지역 행사의 이름과 대표 프로그램 하나를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 기획한 행사가 이주민 주민에게 \'우리 행사\'로 느껴지려면 무엇이 가장 중요할까요?" 출구 1번에서 의견 듣기를 뒤에 놓은 학생에게는 활동 1의 첫 차례를 다시 보게 한다. 공존은 한 번의 축제가 아니라 함께 정하는 습관이라는 말로 마무리한다.',
          exit: [
            XO('행사 기획의 차례로 카드를 놓아 보세요.', '기획 차례', ['처음', '다음', '끝'], [C('y1', '주민 의견 듣기', 'house'), C('y2', '함께 운영하기', 'flower'), C('y3', '함께 돌아보기', 'star')], ['y1', 'y2', 'y3']),
            XC('공존을 위한 지역 행사로 가장 알맞은 것은?', ['이주민은 무대에서 공연만 한다', '이주민과 선주민이 기획부터 함께한다', '한 나라 문화만 크게 소개한다'], 1, '기획부터 함께할 때 모두의 행사가 돼요.'),
            XT('우리 모둠이 기획한 행사에서 존중을 지키기 위한 약속 하나를 쓰세요.'),
          ],
        },
        ws: {
          title: '공존을 위한 지역 행사 기획',
          items: [
            { type: 'table', prompt: '행사 기획 계획을 쓰세요.', columns: ['단계', '할 일'], cells: [['준비', ''], ['당일', ''], ['행사 뒤', '']], answer: '주민 의견 듣기·기획단 꾸리기 / 여러 언어 안내·함께 진행 / 소감 모으기·돌아보기' },
            { type: 'choice', prompt: '구경거리로 만드는 기획에 ○ 하세요.', options: ['함께 요리하기', '피부색별로 줄 세워 사진', '동네 이야기 나누기'], answer: '피부색별로 줄 세워 사진' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '공존을 위한 행사는 ___부터 함께 정한다.', answer: '기획' },
            { type: 'short', prompt: '우리 모둠이 기획한 행사의 이름과 대표 프로그램을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 다문화 행사를 의상·음식 구경으로만 떠올린다 → 함께 기획하는 행사와 비교한다. ② 출신을 묻는 것을 관심으로만 여긴다 → 한 사람의 여러 면을 보게 한다. ③ 학급의 이주배경 학생에게 자기 문화 소개를 맡기지 않는다 — 기획은 모두 가상이다.',
      }),
    ],
  });
})();
