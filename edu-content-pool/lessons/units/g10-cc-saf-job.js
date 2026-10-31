/* 고1 창체 안전교육 — 직업안전 (차시 3개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 고등학교 직업안전, 근로기준법 제17·43·54조, 산업안전보건법(물질안전보건자료).
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 10; const CODE = 'saf-job';
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
    flow: '고1 직업안전 단원은 중학교에서 익힌 보호구·안전표지·청소년 근로 보호를 바탕으로, 작업장의 수칙을 체계적으로 읽고 사고 원인을 분석하며 근로 권리를 실제 상황에 적용합니다. 1차시에는 작업 종류(용접·화학물질 취급·고소 작업·중량물 운반)에 따른 안전수칙과 보호장비를 짝 짓고 작업 전 점검 순서를 정합니다. 2차시에는 가상 산업재해 사례를 사람·기계(설비)·환경·관리 원인으로 나누어 분석하고 재발 방지 대책을 세웁니다. 3차시에는 근로계약서·임금 지급·휴게·주휴 등 아르바이트 권리가 침해되는 상황에서 대응을 판단합니다. 법령상 연계 대상 단원은 없지만 진로활동·생활안전(실험·실습) 단원과 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '작업 종류에 맞는 수칙과 보호장비 짝 짓기',
        objective: '작업 종류에 따라 지켜야 할 안전수칙과 보호장비를 짝 짓고, 작업 전 점검 순서를 정할 수 있다.',
        draw: 'four paper workstations for welding, chemical handling, ladder work and box lifting, each with matching protective gear hanging above',
        banner: '작업마다 다른 수칙', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"보호장비만 잘 갖추면 어떤 작업이든 안전할까요?" 의견을 듣고 같은 일터라도 작업마다 위험이 다르고, 수칙과 장비가 그 위험에 맞아야 한다고 짚는다. "경험이 많으면 수칙은 몰라도 된다"는 말이 나오면 숙련자도 수칙을 지키지 않을 때 사고가 난다는 점을 가볍게 짚고 넘어간다.',
          student: '특성화고·현장실습·직업 체험에서 볼 수 있는 작업 하나를 떠올려 어떤 위험이 있을지 짝과 말해 봅시다.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '작업과 장비', slots: [{ id: 'w', label: '용접 작업' }], cards: ['용접면', '귀마개'], shuffle: false }, sequence: [{ match: { w: '용접면' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 작업과 수칙·장비 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"화학물질을 다룰 때 무엇부터 읽어야 할까요?" 물질안전보건자료(MSDS)에 그 물질의 위험·취급 방법·응급조치가 적혀 있어 작업 전에 읽는다고 짚는다. 무거운 상자를 허리를 굽혀 드는 학생 사례를 들어, 무릎을 굽혀 몸 가까이 들고 혼자 무리하지 않는다는 점을 2번에서 확인하게 한다.',
            task: '작업과 꼭 맞는 보호장비·안전수칙을 잇고, 바른 수칙을 골라요.',
            levels: LV,
            items: [
              MM('작업과 꼭 필요한 보호장비를 이어 보세요. 맞지 않는 카드는 남겨요.', '작업별 장비', [{ id: 'k1', label: '용접 작업' }, { id: 'k2', label: '유기용제 취급' }, { id: 'k3', label: '높은 곳 작업' }, { id: 'k4', label: '소음 큰 기계' }], ['용접면·불에 강한 장갑', '방독 마스크·고무장갑', '안전대·안전모', '귀마개·귀덮개', '반팔 티셔츠'], { k1: '용접면·불에 강한 장갑', k2: '방독 마스크·고무장갑', k3: '안전대·안전모', k4: '귀마개·귀덮개' }, 0.3),
              MS('작업 수칙을 두 칸으로 나누어 보세요.', '작업 수칙', ['지켜요', '어겨요'], ['무릎 굽혀 몸 가까이 들기', '작업 전 MSDS 읽기', '허리 굽혀 혼자 무거운 짐', '환기 없이 용제 작업'], { '지켜요': ['무릎 굽혀 몸 가까이 들기', '작업 전 MSDS 읽기'], '어겨요': ['허리 굽혀 혼자 무거운 짐', '환기 없이 용제 작업'] }, 0.3),
              MP('물질안전보건자료(MSDS)에서 확인할 내용만 골라 담으세요.', 'MSDS 내용', ['위험성', '취급 방법', '응급조치', '제품 광고 문구'], ['위험성', '취급 방법', '응급조치'], 0.25,
                { conclude: '화학물질은 작업 전에 물질안전보건자료로 위험성·취급 방법·응급조치를 확인해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 작업 전 점검 순서와 판단', minutes: 13, tool: 'story',
            teacher: '"점검 중에 문제를 찾으면 어떻게 할까요?" 고치기 전에는 작업을 시작하지 않고 관리자에게 알린다는 점을 짚는다. 2번 판단 문항에서 "늦으면 혼나니 그냥 시작"을 고르는 학생에게는 점검을 건너뛰는 순간이 사고의 출발점이라고 말해 준다.',
            task: '작업 전 점검 순서를 놓고, 점검 중 문제를 찾았을 때 할 일을 골라요.',
            levels: LV,
            items: [
              SO('용접 실습 전 점검 순서를 놓아 보세요.', '용접 실습 전', ['1', '2', '3', '4'], [C('c1', '둘레 가연물 치우기', 'leaf'), C('c2', '소화기 위치 확인', 'house'), C('c3', '보호장비 착용', 'sun'), C('c4', '감독자 확인 후 시작', 'star')], ['c1', 'c2', 'c3', 'c4'], 0.3),
              EB('점검 중 용접기 전선 피복이 벗겨진 것을 찾았어요. 어떻게 할까요?', '실습 시작 직전, 용접기 전선 피복이 벗겨져 구리선이 보여요. 실습 시간이 빠듯해요.', [
                { id: 'stop', text: '작업을 멈추고 교사에게 알려요', result: '전선을 바꾼 뒤 안전하게 실습해요.', mood: '안심' },
                { id: 'tape', text: '테이프로 감고 그냥 써요', result: '감전 위험이 그대로 남아요.', mood: '걱정', why: '고장 난 설비는 혼자 임시로 고치지 않고 알려요.' },
                { id: 'go', text: '시간이 없으니 그대로 시작해요', result: '감전될 수 있어요.', mood: '무서움', why: '문제를 찾았으면 고칠 때까지 시작하지 않아요.' }], 'stop', 0.3),
              TALK('모둠에서 학교 실습 작업 하나를 골라 작업 전 점검 순서 네 단계를 정하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 짝 지은 작업 가운데 장비보다 수칙이 더 중요했던 것은?" 의견을 나누고, 출구 1번에서 화학물질 작업에 환기를 빠뜨린 학생과 그 까닭을 다시 짚는다.',
          exit: [
            XM('작업 장면을 두 칸으로 나누어 보세요.', '도장 작업장', ['안전해요', '위험해요'], ['환기 장치를 켜고 작업', '방독 마스크를 씀', '마스크 없이 스프레이', '옆에서 담배를 피움'], { '안전해요': ['환기 장치를 켜고 작업', '방독 마스크를 씀'], '위험해요': ['마스크 없이 스프레이', '옆에서 담배를 피움'] }, 0.3),
            CH('작업 전 점검에서 고장을 찾았을 때 알맞은 행동은?', ['임시로 고쳐 쓴다', '작업을 멈추고 알린다', '조심해서 그냥 쓴다'], 1, '고장 난 설비는 고칠 때까지 쓰지 않고 관리자에게 알려요.'),
            SH('물질안전보건자료(MSDS)를 작업 전에 읽어야 하는 까닭을 쓰세요.'),
          ],
        },
        ws: {
          title: '작업장 안전수칙과 보호장비',
          items: [
            { type: 'table', prompt: '작업에 필요한 보호장비를 쓰세요.', columns: ['작업', '보호장비'], cells: [['용접', ''], ['유기용제 취급', ''], ['높은 곳 작업', ''], ['소음 큰 기계', '']], answer: '용접면·불에 강한 장갑 / 방독 마스크·고무장갑 / 안전대·안전모 / 귀마개·귀덮개' },
            { type: 'choice', prompt: '무거운 상자를 드는 바른 방법에 ○ 하세요.', options: ['허리를 굽혀 혼자 들기', '무릎을 굽혀 몸 가까이 들기', '팔을 뻗어 멀리 들기'], answer: '무릎을 굽혀 몸 가까이 들기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '물질안전보건자료에는 물질의 ___성, 취급 방법, ___조치가 적혀 있어요.', answer: '위험, 응급' },
            { type: 'short', prompt: '우리 모둠이 정한 작업 전 점검 순서를 쓰세요.' },
          ],
        },
        diff: DIFF('작업별 장비와 수칙을 함께 판단해요.'),
        notes: '자주 보이는 어려움: ① 장비만 갖추면 된다고 여긴다 → 수칙(환기·자세·점검)이 함께 가야 한다. ② 고장 난 설비를 임시로 고친다 → 멈추고 알린다. ③ MSDS를 모른다 → 화학물질 작업 전에 읽는 자료. 실습실의 실제 MSDS 한 장을 보여 주면 좋다.',
      }),

      LESSON(2, {
        title: '가상 재해 사례를 네 가지 원인으로 쪼개 분석하기',
        objective: '가상 산업재해 사례를 사람·기계(설비)·환경·관리 원인으로 나누어 분석하고, 원인에 맞는 재발 방지 대책을 세울 수 있다.',
        draw: 'a paper accident report pinned on a board with four colored paper sticky notes labeled with icons of a person, a gear, a cloud and a clipboard',
        banner: '원인을 쪼개야 대책이 보여요', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'lavender' }],
        intro: {
          teacher: '"사고가 나면 흔히 \'부주의 때문\'이라고 정리해요. 그렇게 정리하면 다음 사고를 막을 수 있을까요?" 의견을 듣고 사람의 행동 뒤에는 설비·환경·관리의 원인이 함께 있어, 원인을 쪼개야 대책도 여러 겹으로 세울 수 있다고 짚는다. 오늘 사례는 모두 가상이며 사람·기계(설비)·환경·관리는 교육용으로 나눈 분석 틀이라고 밝힌다.',
          student: '"부주의 때문에 사고가 났다"는 말에 동의하는지, 그 까닭을 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '원인 나누기', slots: ['사람', '기계(설비)'], cards: ['피곤한 채 작업', '덮개가 빠진 기계'], shuffle: false }, sequence: [{ sort: { '사람': ['피곤한 채 작업'], '기계(설비)': ['덮개가 빠진 기계'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사례의 원인을 네 칸으로', minutes: 14, tool: 'mindmap',
            teacher: '"교육을 하지 않은 것은 누구의 문제일까요?" 안전교육·작업 계획·감독처럼 조직이 챙겨야 할 것은 관리 원인으로 본다고 짚는다. "어두운 조명"을 사람 원인에 두는 학생에게는 작업자가 바꿀 수 없는 일터 조건이므로 환경으로 본다고 말해 준다.',
            task: '가상 사례 "물류센터 끼임 사고"의 원인 카드를 사람·기계·환경·관리로 나누어요.',
            levels: LV,
            items: [
              MS('물류센터 끼임 사고의 원인을 네 칸으로 나누어 보세요.', '끼임 사고 원인', ['사람', '기계(설비)', '환경', '관리'], ['급해서 멈추지 않고 손 넣음', '피로가 쌓인 채 일함', '비상 정지 버튼 고장', '덮개가 빠진 컨베이어', '어두운 조명', '좁고 어수선한 통로', '안전교육을 하지 않음', '혼자 작업하게 배치'], { '사람': ['급해서 멈추지 않고 손 넣음', '피로가 쌓인 채 일함'], '기계(설비)': ['비상 정지 버튼 고장', '덮개가 빠진 컨베이어'], '환경': ['어두운 조명', '좁고 어수선한 통로'], '관리': ['안전교육을 하지 않음', '혼자 작업하게 배치'] }, 0.4),
              MM('원인과 알맞은 대책을 이어 보세요. 맞지 않는 카드는 남겨요.', '원인별 대책', [{ id: 'r1', label: '비상 정지 버튼 고장' }, { id: 'r2', label: '어두운 조명' }, { id: 'r3', label: '안전교육을 하지 않음' }], ['정기 점검·즉시 수리', '조명 밝기 개선', '작업 전 교육 실시', '작업자에게 벌금'], { r1: '정기 점검·즉시 수리', r2: '조명 밝기 개선', r3: '작업 전 교육 실시' }, 0.3),
              MP('"부주의"로만 정리했을 때 놓치는 것만 골라 담으세요.', '놓치는 원인', ['고장 난 설비', '부족한 교육', '무리한 작업 배치', '작업자의 이름'], ['고장 난 설비', '부족한 교육', '무리한 작업 배치'], 0.3,
                { conclude: '사람 탓으로만 정리하면 설비·환경·관리 원인이 그대로 남아 사고가 되풀이돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 사례로 대책 세우기', minutes: 13, tool: 'mindmap',
            teacher: '"대책 가운데 가장 확실한 것은 무엇일까요?" 위험을 없애거나 설비로 막는 대책이 주의를 당부하는 대책보다 확실하다는 점을 짚는다. 3번 모둠 활동에서 원인 칸마다 대책을 하나씩 세우게 한다.',
            task: '가상 사례 "건설 현장 떨어짐 사고"의 원인을 나누고 대책을 고른 뒤, 모둠별로 대책표를 만들어요.',
            levels: LV,
            items: [
              MS('건설 현장 떨어짐 사고의 원인을 네 칸으로 나누어 보세요.', '떨어짐 사고 원인', ['사람', '기계(설비)', '환경', '관리'], ['안전대를 걸지 않음', '안전 난간이 없음', '비 온 뒤 미끄러운 발판', '작업 계획 없이 서두름'], { '사람': ['안전대를 걸지 않음'], '기계(설비)': ['안전 난간이 없음'], '환경': ['비 온 뒤 미끄러운 발판'], '관리': ['작업 계획 없이 서두름'] }, 0.35),
              MS('대책을 두 칸으로 나누어 보세요.', '대책의 힘', ['확실한 대책', '약한 대책'], ['안전 난간 설치', '추락 방지망 설치', '"조심하세요" 방송', '사고 뒤 벽보 붙이기'], { '확실한 대책': ['안전 난간 설치', '추락 방지망 설치'], '약한 대책': ['"조심하세요" 방송', '사고 뒤 벽보 붙이기'] }, 0.3),
              TALK('모둠에서 건설 현장 사례의 네 원인마다 대책을 하나씩 세워 대책표를 만들고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 분석한 두 사례에 공통으로 있던 관리 원인은 무엇이었나요?" (기다릴 반응: "교육 부족", "서두르게 한 것") 출구 1번에서 환경 원인을 사람으로 둔 학생과 기준을 다시 짚는다.',
          exit: [
            XM('주방 화상 사고 원인을 두 칸으로 나누어 보세요.', '주방 화상 사고', ['환경', '관리'], ['미끄러운 바닥', '뜨거운 김이 차는 좁은 공간', '혼자 튀김기 담당', '안전 교육 없이 투입'], { '환경': ['미끄러운 바닥', '뜨거운 김이 차는 좁은 공간'], '관리': ['혼자 튀김기 담당', '안전 교육 없이 투입'] }, 0.3),
            CH('사고 원인을 여러 갈래로 나누어 분석하는 까닭은?', ['책임자를 처벌하려고', '원인마다 대책을 세워 재발을 막으려고', '보고서를 길게 쓰려고'], 1, '원인을 쪼개야 원인마다 대책을 세워 같은 사고를 막을 수 있어요.'),
            SH('"사고는 개인 부주의 탓"이라는 주장에 대해 오늘 분석을 근거로 의견을 쓰세요.'),
          ],
        },
        ws: {
          title: '산업재해 원인 분석',
          items: [
            { type: 'table', prompt: '건설 현장 사례의 원인과 대책을 쓰세요.', columns: ['원인 갈래', '원인', '대책'], cells: [['사람', '', ''], ['기계(설비)', '', ''], ['환경', '', ''], ['관리', '', '']], answer: '안전대 미착용-착용 확인 / 난간 없음-난간 설치 / 미끄러운 발판-작업 중지·미끄럼 방지 / 계획 없음-작업 계획 수립' },
            { type: 'choice', prompt: '가장 확실한 대책에 ○ 하세요.', options: ['조심하라는 방송', '추락 방지망 설치', '사고 뒤 벽보'], answer: '추락 방지망 설치' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '안전교육을 하지 않은 것은 ___ 원인, 어두운 조명은 ___ 원인이에요.', answer: '관리, 환경' },
            { type: 'short', prompt: '사람 탓으로만 사고를 정리하면 어떤 문제가 생기는지 쓰세요.' },
          ],
        },
        diff: DIFF('환경과 관리처럼 경계가 헷갈리는 원인을 가려요.'),
        notes: '자주 보이는 어려움: ① 모든 사고를 부주의로 정리한다 → 네 갈래로 나눈다. ② 환경과 관리를 헷갈린다 → 일터 조건은 환경, 조직이 챙길 일은 관리. ③ 주의 당부를 가장 좋은 대책으로 본다 → 설비·제거 대책이 더 확실. 사례는 모두 가상이며 실제 사고·기업을 다루지 않는다.',
      }),

      LESSON(3, {
        title: '아르바이트 권리 침해 상황에서 대응 고르기',
        objective: '근로계약서·임금·휴게 등 아르바이트 권리가 침해되는 상황을 알아보고, 근거를 들어 알맞은 대응을 고를 수 있다.',
        draw: 'a teenager at a paper convenience store counter holding a paper contract and pointing to a calendar with marked work days',
        banner: '권리는 알 때 지켜져요', extra: [{ motif: 'house', x: 300, y: 214, color: 'mint', s: 0.6 }],
        intro: {
          teacher: '"\'수습 기간이라 처음 한 달은 돈을 안 준다\'는 말, 맞는 말일까요?" 의견을 듣고 일한 만큼 임금을 받는 것은 수습 기간에도 마찬가지라고 짚는다. 오늘은 가상 인물 "하"의 아르바이트 상황으로 권리 침해를 알아보고 대응을 고른다고 밝힌다. 최저임금 액수는 해마다 바뀌어 다루지 않고, 그해 고시를 확인하는 법만 이야기한다.',
          student: '아르바이트할 때 "이건 좀 이상한데?" 싶을 만한 상황을 짝과 하나씩 떠올려 말해 봅시다(실제 경험이 아니어도 돼요).',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '계약서를 안 써 줘요.', choices: [{ id: 'ask', text: '써 달라고 요청해요', result: '조건을 글로 남겨요.', mood: '안심' }, { id: 'skip', text: '그냥 일해요', result: '나중에 다툼이 생겨요.', mood: '걱정' }] }, sequence: [{ choice: 'ask' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 권리 침해인지 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"손님이 적어 일찍 보냈는데 그날 임금을 안 준다면?" 일한 시간만큼은 임금을 받아야 한다는 점을 짚는다. 실수로 깬 컵 값을 임금에서 마음대로 빼는 카드를 "괜찮다"에 두는 학생이 많다 — 임금은 전액을 직접 지급하는 것이 원칙이라는 점(근로기준법 제43조)을 알려 준다. 주휴수당은 한 주 소정근로시간이 15시간 이상이고 그 주를 개근하면 받는다는 점까지만 다룬다.',
            task: '아르바이트 상황 카드를 권리 침해와 정상으로 나누고, 근거 조항을 이어요.',
            levels: LV,
            items: [
              MS('상황 카드를 두 칸으로 나누어 보세요.', '권리 침해일까', ['권리 침해', '정상'], ['수습이라 임금 없음', '깬 컵 값을 임금에서 뺌', '일하기 전 계약서 작성', '4시간 근무 중 30분 휴게'], { '권리 침해': ['수습이라 임금 없음', '깬 컵 값을 임금에서 뺌'], '정상': ['일하기 전 계약서 작성', '4시간 근무 중 30분 휴게'] }, 0.3),
              MM('권리와 근거를 이어 보세요. 맞지 않는 카드는 남겨요.', '권리와 근거', [{ id: 'l1', label: '근로조건을 글로 받기' }, { id: 'l2', label: '임금 전액 받기' }, { id: 'l3', label: '일하는 중 쉬기' }], ['근로기준법 제17조', '근로기준법 제43조', '근로기준법 제54조', '사장님 마음대로'], { l1: '근로기준법 제17조', l2: '근로기준법 제43조', l3: '근로기준법 제54조' }, 0.35),
              MP('최저임금에 대해 옳은 말만 골라 담으세요.', '최저임금', ['해마다 정해 고시해요', '청소년도 적용돼요', '수습엔 안 줘도 돼요', '그해 고시로 확인해요'], ['해마다 정해 고시해요', '청소년도 적용돼요', '그해 고시로 확인해요'], 0.3,
                { conclude: '최저임금은 해마다 고시되고 청소년에게도 똑같이 적용돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. "하"의 상황에서 대응 고르기', minutes: 14, tool: 'emotion',
            teacher: '"바로 그만두는 것과 기록·상담을 하는 것, 무엇이 다를까요?" 결과를 읽으며 기록이 있어야 받지 못한 임금을 되찾는 데 근거가 된다는 점을 짚는다. 3번에서 화를 내며 다투는 보기를 고르는 학생에게는 감정이 상해도 정중히 요청하고 기록하는 것이 나를 지키는 길이라고 말해 준다. 고용노동부 상담은 국번 없이 1350이다.',
            task: '가상 인물 "하"가 겪는 상황에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('"하"는 두 달째 일했는데 계약서를 받지 못했어요. 어떻게 할까요?', '"하"는 식당에서 두 달째 일하는데 근로계약서를 쓰지도 받지도 못했어요.', [
                { id: 'ask', text: '계약서 작성과 교부를 요청해요', result: '근로조건이 글로 남아 분쟁을 막아요.', mood: '안심' },
                { id: 'trust', text: '사이가 좋으니 그냥 일해요', result: '나중에 임금 다툼 때 근거가 없어요.', mood: '걱정', why: '근로조건은 글로 밝혀 근로자에게 줘야 해요(제17조).' }], 'ask', 0.25),
              EB('"하"의 월급이 일한 시간보다 적게 들어왔어요. 어떻게 할까요?', '"하"가 받은 임금이 근무 기록으로 계산한 금액보다 적어요.', [
                { id: 'quit', text: '말없이 바로 그만둬요', result: '못 받은 임금을 찾기 어려워져요.', mood: '속상함', why: '그만두기 전에 기록과 상담으로 받을 몫을 확인해요.' },
                { id: 'record', text: '근무 기록을 모아 물어보고 상담해요', result: '근거를 들어 덜 받은 임금을 받아요.', mood: '안심' },
                { id: 'fight', text: '손님 앞에서 큰소리로 따져요', result: '다툼만 커지고 해결이 늦어져요.', mood: '화남', why: '정중히 요청하고, 안 되면 상담 기관의 도움을 받아요.' }], 'record', 0.3),
              EB('"하"가 6시간 연속 일하는데 쉬는 시간이 없어요. 어떻게 할까요?', '"하"는 주말마다 6시간을 쉬지 않고 서서 일해요. 쉬는 시간 이야기는 없었어요.', [
                { id: 'ask', text: '휴게시간을 정해 달라고 요청해요', result: '30분 이상 쉬는 시간이 생겨요.', mood: '편안함' },
                { id: 'endure', text: '젊으니 참고 일해요', result: '피로가 쌓여 실수하고 다칠 수 있어요.', mood: '걱정', why: '4시간마다 30분 이상 휴게는 법이 정한 권리예요(제54조).' }], 'ask', 0.25,
                { conclude: '권리 침해를 만나면 기록하고, 정중히 요청하고, 안 되면 상담 기관(1350)에 물어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 권리 가운데 가장 놓치기 쉬운 것은?" 의견을 듣고, 출구 1번에서 컵 값 공제를 정상으로 둔 학생과 임금 전액 지급 원칙을 다시 짚으며 단원을 마친다. 조항 번호는 국가법령정보센터의 현행 조문으로 확인할 수 있다고 덧붙인다.',
          exit: [
            XM('아르바이트 상황을 두 칸으로 나누어 보세요.', '편의점 아르바이트', ['권리 침해', '정상'], ['유니폼 값을 임금에서 공제', '교육 기간이라 무급', '근무표대로 임금 지급', '계약서 한 부를 받음'], { '권리 침해': ['유니폼 값을 임금에서 공제', '교육 기간이라 무급'], '정상': ['근무표대로 임금 지급', '계약서 한 부를 받음'] }, 0.3),
            CH('임금을 덜 받았을 때 가장 먼저 준비할 것은?', ['감정을 담은 문자', '근무 날짜·시간 기록', '그만둔다는 통보'], 1, '근무 기록이 있어야 덜 받은 임금을 근거를 들어 요청할 수 있어요.'),
            SH('"하"에게 아르바이트 권리를 지키는 방법을 세 문장으로 조언하는 글을 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '아르바이트 권리',
          items: [
            { type: 'table', prompt: '권리와 근거 조항을 쓰세요.', columns: ['권리', '근거'], cells: [['근로조건을 글로 받기', ''], ['임금 전액 받기', ''], ['4시간에 30분 휴게', '']], answer: '근로기준법 제17조, 제43조, 제54조' },
            { type: 'choice', prompt: '권리 침해인 상황에 ○ 하세요.', options: ['일하기 전 계약서 작성', '수습이라 임금 없음', '근무표대로 임금 지급'], answer: '수습이라 임금 없음' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '권리 침해를 만나면 ___하고, 정중히 요청하고, 안 되면 고용노동부 상담(국번 없이 ___)에 물어요.', answer: '기록, 1350' },
            { type: 'short', prompt: '최저임금 액수를 수업에서 외우지 않고 그해 고시로 확인하는 까닭을 쓰세요.' },
          ],
        },
        diff: DIFF('조항 근거를 상황에 적용해요.'),
        notes: '자주 보이는 어려움: ① 수습·교육 기간은 무급이라고 여긴다 → 일한 만큼 임금을 받는다. ② 손해를 임금에서 빼도 된다고 여긴다 → 임금은 전액 지급이 원칙(제43조). ③ 문제가 생기면 바로 그만둔다 → 기록·요청·상담. 주휴수당·최저임금 세부(액수·계산)는 다루지 않으며, 조항은 수업 전에 현행 조문으로 확인한다.',
      }),
    ],
  });
})();
