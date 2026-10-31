/* 5학년 창체 안전교육 — 직업안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 직업안전.
 * (일터에서 발생하는 산업 재해를 알기, 일터 안전시설 현장 체험하기) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g5-cc-saf-job';
  const UNIT = 'g5-창체-saf-job';
  const TITLE = '직업안전';
  const GRADE = 5;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'rose', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '5학년 직업안전은 4학년에서 익힌 산업 재해의 모습을 "왜 일어났나"라는 원인으로 나누어 보고, 일터의 약속을 알려 주는 안전보건표지 네 가지를 읽는 단원입니다. 1차시에는 사고 장면에서 사람의 행동 때문인 원인과 일터 환경·설비 때문인 원인을 나누고, 원인마다 고칠 방법을 잇습니다. 2차시에는 금지(빨강)·경고(노랑)·지시(파랑)·안내(초록) 표지를 나누고, 직업 체험 현장(체험관·실습실)에서 지킬 수칙을 정합니다. 2학년에서 배운 색 구분에 지시 표지를 더하고, 표지를 보고 행동을 정하는 판단까지 나아갑니다. 진로 체험 활동과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '사고 원인을 행동과 환경으로 나누기',
        objective: '일터 사고의 원인을 사람의 행동과 일터 환경으로 나누고, 원인에 맞는 고칠 방법을 이을 수 있다.',
        draw: 'a paper warehouse scene split in two: on one side a worker hurrying without a helmet, on the other a broken ladder and dim light, with a magnifying glass',
        banner: '원인을 찾으면 막을 수 있어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: {
          teacher: '"창고에서 한 사람이 사다리에서 떨어졌어요. 사다리 다리가 흔들렸고, 그 사람은 서두르느라 혼자 올라갔대요. 원인은 하나일까요?" 대답을 듣고(기다릴 반응: "둘이에요, 사다리도 사람도요") "사고에는 사람의 행동 원인과 일터 환경 원인이 함께 있는 경우가 많아요"라고 말한다. 시연 단추로 원인 카드가 나뉘는 모습을 보여 준다.',
          student: '교실에서 넘어질 뻔한 장면을 떠올려, 원인이 무엇이었는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '사다리 사고', slots: ['사람의 행동', '일터 환경'], cards: ['서둘러 혼자 올라가요', '사다리 다리가 흔들려요'], shuffle: false }, sequence: [{ sort: { '사람의 행동': ['서둘러 혼자 올라가요'], '일터 환경': ['사다리 다리가 흔들려요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 원인 나누기', tool: 'mindmap',
            teacher: '"이 원인은 사람이 한 행동일까요, 일터가 가진 문제일까요?" 카드마다 까닭을 말하게 한다. 사고를 모두 일한 사람의 잘못으로 보는 학생에게 "어두운 조명이나 덮개 없는 기계는 누가 고쳐야 할까요?"라고 물어 일터를 관리하는 쪽의 책임도 있다는 것을 짚는다.',
            task: '사고 원인을 사람의 행동과 일터 환경으로 나누어요.',
            levels: LV,
            items: [
              MS('사고 원인을 나누어 보세요.', '공장 사고', ['사람의 행동', '일터 환경'], ['장갑 끼고 회전 기계 만짐', '기계 덮개가 없어요', '보호 안경을 벗고 일함', '작업장 조명이 어두워요'], { '사람의 행동': ['장갑 끼고 회전 기계 만짐', '보호 안경을 벗고 일함'], '일터 환경': ['기계 덮개가 없어요', '작업장 조명이 어두워요'] }, 0.25),
              MS('사고 원인을 나누어 보세요.', '건설 현장 사고', ['사람의 행동', '일터 환경'], ['안전대를 걸지 않음', '발판에 난간이 없어요', '휴대전화 보며 걷기', '통로에 자재가 쌓여요'], { '사람의 행동': ['안전대를 걸지 않음', '휴대전화 보며 걷기'], '일터 환경': ['발판에 난간이 없어요', '통로에 자재가 쌓여요'] }, 0.3),
              MP('사람의 행동 원인만 골라 담아요.', '행동 원인', ['정해진 순서를 건너뜀', '바닥에 기름이 흘렀음', '피곤한데 쉬지 않고 일함', '경고 표지가 떨어졌음'], ['정해진 순서를 건너뜀', '피곤한데 쉬지 않고 일함'], 0.3,
                { conclude: '사고에는 행동 원인과 환경 원인이 함께 있어, 둘 다 고쳐야 다시 일어나지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 원인마다 고칠 방법', tool: 'mindmap',
            teacher: '"이 원인을 없애려면 무엇을 고쳐야 할까요?" 원인과 방법을 잇게 한다. "일하는 사람이 조심하면 돼요"로만 답하는 학생에게 환경을 바꾸는 방법(조명·난간·덮개)도 찾게 한다. 피로·서두름도 원인이라는 것을 짚고, 쉬는 시간이 안전과 이어진다는 것을 말한다.',
            task: '원인과 고칠 방법을 이어요.',
            levels: LV,
            items: [
              MM('원인과 고칠 방법을 이어요. 맞지 않는 카드는 남겨요.', '고칠 방법', [{ id: 'c1', label: '조명이 어두워요' }, { id: 'c2', label: '안전대를 걸지 않음' }, { id: 'c3', label: '바닥에 기름이 흘렀음' }], ['밝은 조명을 달아요', '작업 전 안전대를 걸어요', '바로 닦고 표지를 세워요', '음악을 틀어요'], { c1: '밝은 조명을 달아요', c2: '작업 전 안전대를 걸어요', c3: '바로 닦고 표지를 세워요' }, 0.25),
              MM('원인과 고칠 방법을 이어요. 맞지 않는 카드는 남겨요.', '또 고칠 방법', [{ id: 'd1', label: '쉬지 않고 오래 일함' }, { id: 'd2', label: '기계 덮개가 없음' }, { id: 'd3', label: '순서를 모르는 새 직원' }], ['쉬는 시간을 지켜요', '덮개를 설치해요', '안전 교육을 먼저 해요', '혼자 알아서 해요'], { d1: '쉬는 시간을 지켜요', d2: '덮개를 설치해요', d3: '안전 교육을 먼저 해요' }, 0.3),
              MS('고칠 방법을 나누어 보세요.', '누가 고칠까', ['일하는 사람이', '일터가 함께'], ['보호구를 바르게 써요', '낡은 사다리를 바꿔요', '순서를 지켜 일해요', '위험한 곳에 난간을 달아요'], { '일하는 사람이': ['보호구를 바르게 써요', '순서를 지켜 일해요'], '일터가 함께': ['낡은 사다리를 바꿔요', '위험한 곳에 난간을 달아요'] }, 0.3,
                { conclude: '일하는 사람의 약속과 일터의 시설 관리가 함께 있어야 사고를 막아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"도입의 사다리 사고는 무엇을 고치면 막을 수 있었을까요? 두 가지로 말해 볼까요?" (기다릴 반응: "사다리를 바꾸고, 둘이 함께 올라가요") 출구 2번을 고른 까닭을 짝과 견주어 보게 한다.',
          exit: [
            { type: 'choice', prompt: '"통로에 상자가 쌓여 있었다"는 어떤 원인인가요?', options: ['일터 환경 원인', '사람의 행동 원인', '날씨 원인'], answer: 0, difficulty: 0.2, explain: '일터의 상태가 문제인 환경 원인이에요.' },
            { type: 'choice', prompt: '사고를 다시 막는 가장 좋은 방법은?', options: ['행동과 환경 원인을 함께 고쳐요', '다친 사람만 탓해요', '사고를 숨겨요'], answer: 0, difficulty: 0.2, explain: '원인을 모두 고쳐야 같은 사고가 일어나지 않아요.' },
            { type: 'short', prompt: '피곤할 때 쉬는 것이 안전과 이어지는 까닭을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '사고 원인 찾기',
        ws: [
          { type: 'table', prompt: '원인을 나누고 고칠 방법을 쓰세요.', columns: ['원인', '행동/환경', '고칠 방법'], cells: [['보호 안경을 벗고 일함', '', ''], ['작업장이 어두움', '', ''], ['발판에 난간이 없음', '', '']], answer: '행동-보호 안경 쓰기 / 환경-조명 달기 / 환경-난간 달기' },
          { type: 'choice', prompt: '사람의 행동 원인에 ○ 하세요.', options: ['휴대전화를 보며 걸었어요', '조명이 어두웠어요', '바닥이 낡았어요'], answer: '휴대전화를 보며 걸었어요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '사고에는 사람의 ___ 원인과 일터 ___ 원인이 있어요.', answer: '행동, 환경' },
          { type: 'short', prompt: '우리 교실에서 찾은 환경 원인 하나와 고칠 방법을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 사고를 다친 사람의 잘못으로만 본다 → 일터 환경·관리의 책임도 짚는다. ② "조심하면 돼요"로만 답한다 → 시설·환경을 바꾸는 방법도 찾게 한다. ③ 피로·서두름을 원인으로 보지 못한다 → 쉬는 시간도 안전이라는 것을 말한다.',
      }),

      LESSON(2, {
        title: '안전보건표지 네 가지 나누고 체험 수칙 정하기',
        objective: '금지·경고·지시·안내 표지를 구별하고, 직업 체험 현장에서 지킬 수칙을 정할 수 있다.',
        draw: 'four paper safety signs in a row: a red circle with a slash, a yellow triangle, a blue circle with a helmet icon, and a green square with a running figure',
        banner: '빨강·노랑·파랑·초록', extra: [{ motif: 'flower', x: 300, y: 222, color: 'sky' }],
        intro: {
          teacher: '"2학년 때 빨강·노랑·초록 표지를 배웠어요. 그런데 일터에는 파란 동그라미 표지도 있어요. 무슨 뜻일까요?" 대답을 듣고(기다릴 반응: "모르겠어요", "해야 하는 것?") "파란 표지는 \'꼭 이렇게 하세요\'라는 지시 표지예요"라고 말한다. 시연 단추로 표지 카드가 나뉘는 모습을 보여 준다.',
          student: '체험학습 장소나 학교에서 본 표지 하나를 떠올려 무슨 색이었는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '표지 종류', slots: ['금지', '지시'], cards: ['빨간 빗금 불꽃', '파란 안전모 그림'], shuffle: false }, sequence: [{ sort: { '금지': ['빨간 빗금 불꽃'], '지시': ['파란 안전모 그림'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 표지 네 가지 나누기', tool: 'mindmap',
            teacher: '"표지의 색과 모양을 먼저 보고, 그림을 읽어요." 금지는 빨간 테두리·빗금, 경고는 노란 세모, 지시는 파란 동그라미, 안내는 초록 네모라고 짚는다. 파란 표지를 "하지 마요"로 읽는 학생에게 "파랑은 꼭 하라는 뜻이에요"라고 바로잡는다.',
            task: '안전보건표지를 금지·경고·지시·안내로 나누어요.',
            levels: LV,
            items: [
              MS('표지를 네 가지로 나누어 보세요.', '안전보건표지', ['금지', '경고', '지시', '안내'], ['빨간 빗금 사람 걷기', '노란 세모 낙하물', '파란 보안경 그림', '초록 비상구'], { '금지': ['빨간 빗금 사람 걷기'], '경고': ['노란 세모 낙하물'], '지시': ['파란 보안경 그림'], '안내': ['초록 비상구'] }, 0.25),
              MM('표지와 뜻을 이어요. 맞지 않는 카드는 남겨요.', '표지 읽기', [{ id: 's1', label: '파란 귀마개 그림' }, { id: 's2', label: '노란 세모 고압 전기' }, { id: 's3', label: '초록 응급 구호 십자' }], ['귀마개를 꼭 써요', '전기에 감전 조심', '응급 도구가 있어요', '여기서 쉬어요'], { s1: '귀마개를 꼭 써요', s2: '전기에 감전 조심', s3: '응급 도구가 있어요' }, 0.3),
              MP('"꼭 하세요" 뜻의 지시 표지만 골라 담아요.', '지시 표지', ['파란 안전화 그림', '빨간 빗금 담배', '파란 마스크 그림', '노란 세모 뜨거움'], ['파란 안전화 그림', '파란 마스크 그림'], 0.3,
                { conclude: '빨강 금지, 노랑 경고, 파랑 지시, 초록 안내 — 색과 모양으로 먼저 알아봐요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 직업 체험 현장 수칙', tool: 'mindmap',
            teacher: '"직업 체험관에서 표지를 보면 어떻게 행동할까요?" 표지와 행동을 잇게 한다. 체험 장비를 안내자 설명 전에 만지는 행동, 보호구를 답답하다고 벗는 행동을 짚는다. 활동 뒤 우리 반 체험학습 수칙 다섯 가지를 함께 정한다.',
            task: '표지를 보고 할 행동을 잇고, 체험 수칙을 골라요.',
            levels: LV,
            items: [
              MM('표지와 할 행동을 이어요. 맞지 않는 카드는 남겨요.', '표지 보고 행동', [{ id: 'a1', label: '파란 장갑 그림' }, { id: 'a2', label: '빨간 빗금 손 그림' }, { id: 'a3', label: '초록 화살표 비상구' }], ['장갑을 끼고 체험해요', '그 물건은 만지지 않아요', '위급할 때 이쪽으로 나가요', '사진을 찍어요'], { a1: '장갑을 끼고 체험해요', a2: '그 물건은 만지지 않아요', a3: '위급할 때 이쪽으로 나가요' }, 0.25),
              MP('직업 체험 현장에서 지킬 수칙만 골라 담아요.', '체험 수칙', ['설명을 듣고 시작해요', '장비를 먼저 켜 봐요', '보호구를 끝까지 써요', '줄을 넘어 들어가요'], ['설명을 듣고 시작해요', '보호구를 끝까지 써요'], 0.2),
              MS('체험하는 모습을 나누어 보세요.', '체험 모습', ['수칙을 지켜요', '수칙을 어겨요'], ['노란 선 밖에서 기다려요', '공구를 장난으로 휘둘러요', '모르면 안내자께 물어요', '경고 표지를 무시해요'], { '수칙을 지켜요': ['노란 선 밖에서 기다려요', '모르면 안내자께 물어요'], '수칙을 어겨요': ['공구를 장난으로 휘둘러요', '경고 표지를 무시해요'] }, 0.25,
                { conclude: '표지를 읽고, 설명을 듣고, 보호구를 끝까지 쓰는 것이 체험 현장의 수칙이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 학교 과학실·실과실에서 볼 수 있는 표지는 무엇일까요?" 다음 실습 전에 표지를 찾아보게 한다. 출구 1번에서 파란 표지를 헷갈린 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '파란 동그라미 안에 보안경 그림이 있어요. 뜻은?', options: ['보안경을 꼭 써요', '보안경 금지', '보안경 파는 곳'], answer: 0, difficulty: 0.2, explain: '파란 표지는 꼭 하라는 지시 표지예요.' },
            { type: 'tool', tool: 'mindmap', options: { topic: '실습실 표지', slots: ['금지', '경고', '지시', '안내'], cards: ['빨간 빗금 음식', '노란 세모 유독물', '파란 장갑 그림', '초록 세안 장치'] }, state: { at: {} }, prompt: '실습실 표지를 네 가지로 나누어요.', target: { sort: { '금지': ['빨간 빗금 음식'], '경고': ['노란 세모 유독물'], '지시': ['파란 장갑 그림'], '안내': ['초록 세안 장치'] } }, difficulty: 0.3 },
            { type: 'short', prompt: '체험학습에서 내가 꼭 지킬 수칙 하나를 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '안전보건표지와 체험 수칙',
        ws: [
          { type: 'table', prompt: '표지 종류의 색과 모양, 뜻을 쓰세요.', columns: ['종류', '색과 모양', '뜻'], cells: [['금지', '', ''], ['경고', '', ''], ['지시', '', ''], ['안내', '', '']], answer: '빨간 테두리·빗금-하지 마요 / 노란 세모-조심해요 / 파란 동그라미-꼭 해요 / 초록 네모-안내' },
          { type: 'choice', prompt: '"꼭 하세요" 뜻의 표지 색에 ○ 하세요.', options: ['파랑', '빨강', '노랑'], answer: '파랑' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '체험 장비는 안내자 ___을 듣고 나서 써요.', answer: '설명' },
          { type: 'short', prompt: '우리 학교에서 본 안전 표지 하나를 골라 종류와 뜻을 쓰세요.' },
        ],
        notes: '근거: 안전보건표지의 네 종류(금지·경고·지시·안내)와 색 구분. 자주 보이는 어려움: ① 파란 지시 표지를 금지로 읽는다 → 파랑은 꼭 하라는 뜻. ② 색만 보고 그림을 읽지 않는다 → 그림까지 읽어 행동을 정한다. ③ 체험 장비를 설명 전에 만진다 → 설명을 듣고 시작한다.',
      }),
    ],
  });
})();
