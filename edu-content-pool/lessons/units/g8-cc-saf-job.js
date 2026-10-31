/* 중2 창체 안전교육 — 직업안전 (차시 3개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 중학교 직업안전, 산업안전보건법 시행규칙 안전보건표지.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 8; const CODE = 'saf-job';
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
    flow: '중2 직업안전 단원은 1학년에서 익힌 위험 찾기와 보호구를 바탕으로, 사고를 "유형과 원인"으로 분석하고 일터의 안전 신호를 읽는 힘을 기릅니다. 1차시에는 떨어짐·끼임·부딪힘·화재 폭발 사례를 유형으로 나누고 사례마다 무엇을 바꾸었으면 막을 수 있었는지 찾습니다. 2차시에는 산업안전보건법 시행규칙의 안전보건표지 네 종류(금지·경고·지시·안내)를 모양과 색으로 구별합니다. 3차시에는 실습실·작업장에서 보호구를 착용하는 순서와 작업 전 점검을 익힙니다. 법령상 연계 대상 단원은 없지만 진로활동·생활안전(실험·실습) 단원과 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '사고 사례를 유형별로 나누고 막을 길 찾기',
        objective: '산업재해 사례를 떨어짐·끼임·부딪힘·화재 폭발 유형으로 나누고, 사례마다 사고를 막을 수 있었던 방법을 찾을 수 있다.',
        draw: 'four paper panels showing a ladder, a gear machine, a forklift and a small flame, each with a paper check mark beside a fix',
        banner: '유형을 알면 막을 길이 보여요', extra: [{ motif: 'star', x: 300, y: 96, color: 'peach' }],
        intro: {
          teacher: '"뉴스에서 \'작업 중 사고\'라는 말을 들으면 어떤 장면이 떠오르나요?" 몇 개 듣고, 사고는 몇 가지 유형으로 되풀이되기 때문에 유형을 알면 막는 방법도 보인다고 말한다. "사고는 다 다르게 일어난다"는 말이 나오면 오늘 사례들을 묶어 보며 공통점을 찾아보자고 한다.',
          student: '1학년 때 배운 일터 위험 세 가지(넘어짐·끼임·떨어짐)를 짝과 예를 들어 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '사고 유형', slots: ['떨어짐', '끼임'], cards: ['지붕 작업 중 추락', '기계에 손이 말림'], shuffle: false }, sequence: [{ sort: { '떨어짐': ['지붕 작업 중 추락'], '끼임': ['기계에 손이 말림'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사례를 유형으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"지게차에 사람이 치였다면 어떤 유형일까요?" 움직이는 장비나 물체에 맞거나 부딪히는 것이 부딪힘이라고 짚는다. 화재 폭발 문항에서 "용접 불티"를 끼임에 두는 학생이 있으면 불티가 주변 가연물에 옮아붙는 장면을 떠올리게 한다. 사례는 모두 가상 사례이며 실제 사고·인물을 다루지 않는다.',
            task: '가상 사고 사례 카드를 유형별로 나누어요.',
            levels: LV,
            items: [
              MS('사고 사례를 유형으로 나누어 보세요.', '사고 유형', ['떨어짐', '끼임', '부딪힘', '화재·폭발'], ['비계에서 발을 헛디딤', '컨베이어에 소매가 말림', '후진하는 지게차에 치임', '용접 불티가 포장재에 붙음', '덮개 없는 기어에 손', '천장 작업 중 사다리 넘어짐', '가스 새는 곳에서 불 켬', '떨어진 공구에 머리를 맞음'], { '떨어짐': ['비계에서 발을 헛디딤', '천장 작업 중 사다리 넘어짐'], '끼임': ['컨베이어에 소매가 말림', '덮개 없는 기어에 손'], '부딪힘': ['후진하는 지게차에 치임', '떨어진 공구에 머리를 맞음'], '화재·폭발': ['용접 불티가 포장재에 붙음', '가스 새는 곳에서 불 켬'] }, 0.35),
              MM('사례와 막을 수 있었던 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '막을 길', [{ id: 'c1', label: '비계에서 발을 헛디딤' }, { id: 'c2', label: '컨베이어에 소매가 말림' }, { id: 'c3', label: '후진 지게차에 치임' }], ['안전 난간·안전대 걸기', '기계 멈추고 정비하기', '통로 구분·후진 경고음', '더 빨리 작업하기'], { c1: '안전 난간·안전대 걸기', c2: '기계 멈추고 정비하기', c3: '통로 구분·후진 경고음' }, 0.3),
              MP('사고를 줄이는 공통 방법만 골라 담으세요.', '공통 대책', ['작업 전 위험 점검', '정리정돈', '안전 교육', '서두르기 경쟁'], ['작업 전 위험 점검', '정리정돈', '안전 교육'], 0.2,
                { conclude: '유형은 달라도 점검·정리정돈·교육이 여러 사고를 함께 줄여요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 사고 이야기의 원인 고리 찾기', minutes: 14, tool: 'story',
            teacher: '"사고는 한 번의 실수로만 일어날까요?" 사례 이야기를 차례대로 놓으며 사고 전 여러 번의 신호가 있었음을 확인하게 한다. 2번 뒤 "어느 장면에서 끊었으면 사고가 나지 않았을까?"를 모둠별로 말하게 한다.',
            task: '가상 사고 이야기를 차례대로 놓고, 사고를 끊을 수 있었던 장면을 찾아요.',
            levels: LV,
            items: [
              SO('창고 사고 이야기를 차례대로 놓아 보세요.', '창고 이야기', ['1', '2', '3', '4'], [C('w1', '통로에 상자를 쌓아 둠', 'house'), C('w2', '지게차 시야가 가려짐', 'cloud'), C('w3', '사람이 통로로 지나감', 'leaf'), C('w4', '지게차와 부딪힘', 'star')], ['w1', 'w2', 'w3', 'w4'], 0.25),
              SO('주방 사고 이야기를 차례대로 놓아 보세요.', '주방 이야기', ['1', '2', '3', '4'], [C('k1', '튀김기 옆에 행주를 둠', 'house'), C('k2', '기름이 뜨겁게 달궈짐', 'sun'), C('k3', '행주에 불이 옮겨붙음', 'cloud'), C('k4', '주방에 불이 번짐', 'star')], ['k1', 'k2', 'k3', 'k4'], 0.25),
              TALK('모둠에서 두 이야기 중 하나를 골라, 어느 장면에서 끊었으면 사고가 나지 않았을지 정하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 사례들에서 사고 전에 보인 신호는 무엇이었나요?" 출구 1번에서 유형을 헷갈린 학생과 부딪힘과 끼임의 차이를 다시 짚는다.',
          exit: [
            XM('건설 현장 사례를 유형으로 나누어 보세요.', '건설 현장', ['떨어짐', '부딪힘'], ['지붕 끝에서 미끄러짐', '열린 바닥 구멍에 빠짐', '크레인 짐이 흔들려 맞음', '굴착기 팔에 부딪힘'], { '떨어짐': ['지붕 끝에서 미끄러짐', '열린 바닥 구멍에 빠짐'], '부딪힘': ['크레인 짐이 흔들려 맞음', '굴착기 팔에 부딪힘'] }, 0.3),
            CH('사고를 여러 장면의 고리로 보는 까닭은?', ['범인을 찾으려고', '고리 하나만 끊어도 사고를 막을 수 있어서', '사고가 운이라는 걸 보이려고'], 1, '사고 전 신호 가운데 하나만 끊어도 사고를 막을 수 있어요.'),
            SH('오늘 본 사고 유형 가운데 하나를 골라 막는 방법을 쓰세요.'),
          ],
        },
        ws: {
          title: '산업재해 유형과 원인',
          items: [
            { type: 'table', prompt: '사례의 유형을 쓰세요.', columns: ['사례', '유형'], cells: [['비계에서 발을 헛디딤', ''], ['컨베이어에 소매가 말림', ''], ['후진 지게차에 치임', ''], ['용접 불티가 포장재에 붙음', '']], answer: '떨어짐, 끼임, 부딪힘, 화재·폭발' },
            { type: 'choice', prompt: '여러 사고를 함께 줄이는 방법에 ○ 하세요.', options: ['서두르기', '정리정돈', '보호구 벗기'], answer: '정리정돈' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '통로에 쌓은 상자는 지게차 ___를 가려 ___ 사고로 이어질 수 있어요.', answer: '시야, 부딪힘' },
            { type: 'short', prompt: '주방 사고 이야기에서 사고를 끊을 수 있었던 장면과 그 방법을 쓰세요.' },
          ],
        },
        diff: DIFF('부딪힘과 끼임처럼 비슷한 유형을 가려요.'),
        notes: '자주 보이는 어려움: ① 부딪힘과 끼임을 헷갈린다 → 맞거나 부딪히면 부딪힘, 사이에 들어가면 끼임. ② 사고를 한 사람의 실수로만 본다 → 여러 신호의 고리로 본다. 사례는 모두 가상이며 실제 사고 피해자를 다루지 않는다.',
      }),

      LESSON(2, {
        title: '모양과 색으로 안전보건표지 네 종류 읽기',
        objective: '안전보건표지의 네 종류(금지·경고·지시·안내)를 모양과 색으로 구별하고 표지가 뜻하는 행동을 말할 수 있다.',
        draw: 'four paper signs on a wall, a red circle with a slash, a yellow triangle, a blue circle and a green square with an arrow',
        banner: '빨강 금지, 노랑 경고, 파랑 지시, 초록 안내', extra: [{ motif: 'flower', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"학교 복도에서 초록색 바탕에 사람이 달려가는 그림 표지를 본 적 있나요?" 대답을 듣고 비상구를 알리는 안내 표지라고 짚는다. 일터의 안전보건표지는 산업안전보건법 시행규칙에서 금지·경고·지시·안내 네 가지로 나누고, 모양과 색만 보고도 뜻을 짐작할 수 있게 만들었다고 소개한다. "글자를 읽으면 되지 왜 색을 정하나요?"라는 질문이 나오면 멀리서도, 글을 모르는 사람도 바로 알아보게 하려는 것이라고 답한다.',
          student: '학교나 동네에서 본 안전 표지 하나를 떠올려 모양과 색을 짝에게 설명해 봅시다.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '표지 색', slots: [{ id: 'g', label: '초록 네모' }], cards: ['안내', '금지'], shuffle: false }, sequence: [{ match: { g: '안내' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 표지 종류와 모양·색 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"빨간 원에 사선이 그어져 있으면 무슨 뜻일까요?" 금지 표지는 빨간 원과 사선, 경고는 노란 바탕 삼각형(일부는 다른 모양), 지시는 파란 원, 안내는 녹색이라는 것을 정리한다. 지시와 금지를 헷갈리는 학생이 많다 — "지시는 \'꼭 하세요\', 금지는 \'하지 마세요\'"라고 짚는다.',
            task: '표지 종류와 모양·색을 잇고, 표지가 뜻하는 행동을 종류별로 나누어요.',
            levels: LV,
            items: [
              MM('표지 종류와 모양·색을 이어 보세요. 맞지 않는 카드는 남겨요.', '표지 모양과 색', [{ id: 't1', label: '금지 표지' }, { id: 't2', label: '경고 표지' }, { id: 't3', label: '지시 표지' }, { id: 't4', label: '안내 표지' }], ['빨간 원과 사선', '노란 삼각형', '파란 원', '녹색 바탕', '보라색 별'], { t1: '빨간 원과 사선', t2: '노란 삼각형', t3: '파란 원', t4: '녹색 바탕' }, 0.25),
              MS('표지가 뜻하는 말을 종류별로 나누어 보세요.', '표지의 뜻', ['금지', '경고', '지시', '안내'], ['출입 금지', '화기 금지', '고압 전기 주의', '낙하물 주의', '안전모 착용', '보안경 착용', '비상구', '응급구호 장소'], { '금지': ['출입 금지', '화기 금지'], '경고': ['고압 전기 주의', '낙하물 주의'], '지시': ['안전모 착용', '보안경 착용'], '안내': ['비상구', '응급구호 장소'] }, 0.35),
              MP('"꼭 해야 하는 행동"을 알리는 표지만 골라 담으세요.', '지시 표지', ['귀마개 착용', '안전화 착용', '흡연 금지', '추락 주의'], ['귀마개 착용', '안전화 착용'], 0.25,
                { conclude: '파란 원의 지시 표지는 "이것을 꼭 하세요", 빨간 금지 표지는 "하지 마세요"예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 표지를 보고 행동 정하기', minutes: 14, tool: 'emotion',
            teacher: '"표지를 보고도 지키지 않으면 무슨 일이 생길까요?" 결과 칸을 읽으며 표지는 그 자리의 위험을 가장 잘 아는 사람이 남긴 메시지라고 이야기한다. 3번 뒤 모둠별로 우리 학교에 붙이면 좋을 표지 하나를 정해 종류·모양·색을 말하게 한다.',
            task: '일터에서 표지를 만났을 때 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('창고 문에 빨간 원 사선 안에 불꽃 그림이 있어요. 어떻게 할까요?', '페인트 창고 문에 빨간 원과 사선, 그 안에 불꽃 그림이 그려진 표지가 있어요.', [
                { id: 'nofire', text: '라이터·불꽃을 쓰지 않아요', result: '불이 날 위험을 막아요.', mood: '안심' },
                { id: 'quick', text: '잠깐이면 괜찮다며 불을 켜요', result: '증기에 불이 붙을 수 있어요.', mood: '무서움', why: '화기 금지 구역에서는 잠깐도 불을 쓰지 않아요.' }], 'nofire', 0.2),
              EB('작업장 입구에 파란 원 안에 안전모 그림이 있어요. 어떻게 할까요?', '실습 작업장 입구에 파란 원 안에 안전모가 그려진 표지가 붙어 있어요.', [
                { id: 'later', text: '안에서 잠깐만 있으니 안 써요', result: '떨어진 물건에 머리를 다칠 수 있어요.', mood: '걱정', why: '지시 표지는 들어가는 모든 사람이 지켜요.' },
                { id: 'wear', text: '안전모를 쓰고 턱끈을 매요', result: '머리를 지키며 안전하게 일해요.', mood: '안심' }], 'wear', 0.2),
              EB('불이 나서 연기가 차는데 녹색 표지가 보여요. 어떻게 할까요?', '지하 작업장에 연기가 차기 시작했고, 벽에 녹색 바탕 화살표 표지가 보여요.', [
                { id: 'follow', text: '녹색 표지 화살표를 따라가요', result: '비상구로 빠르게 대피해요.', mood: '안심' },
                { id: 'back', text: '들어온 길로만 되돌아가요', result: '연기가 짙은 쪽으로 갈 수 있어요.', mood: '불안', why: '녹색 안내 표지는 비상구로 가는 길을 알려 줘요.' },
                { id: 'wait', text: '제자리에서 기다려요', result: '연기가 점점 차올라요.', mood: '무서움', why: '연기가 차면 표지를 따라 바로 대피해요.' }], 'follow', 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"네 가지 표지를 색으로 한 번에 말해 볼까요?" (기다릴 반응: "빨강 금지, 노랑 경고, 파랑 지시, 초록 안내") 출구 1번에서 지시와 경고를 헷갈린 학생과 모양을 다시 견주어 본다.',
          exit: [
            XM('표지 내용을 두 칸으로 나누어 보세요.', '표지 나누기', ['경고', '지시'], ['인화성 물질 주의', '몸 균형 상실 주의', '방독 마스크 착용', '안전장갑 착용'], { '경고': ['인화성 물질 주의', '몸 균형 상실 주의'], '지시': ['방독 마스크 착용', '안전장갑 착용'] }, 0.3),
            CH('녹색 바탕 표지가 알려 주는 것은 무엇인가요?', ['하지 말아야 할 행동', '비상구·응급구호 같은 안내', '꼭 써야 할 보호구'], 1, '녹색 안내 표지는 비상구나 응급구호 장소처럼 위치를 알려 줘요.'),
            SH('우리 학교에 붙이면 좋을 안전보건표지 하나와 그 까닭을 쓰세요.'),
          ],
        },
        ws: {
          title: '안전보건표지',
          items: [
            { type: 'table', prompt: '표지 종류에 맞는 모양·색과 예를 쓰세요.', columns: ['종류', '모양·색', '예'], cells: [['금지', '', ''], ['경고', '', ''], ['지시', '', ''], ['안내', '', '']], answer: '빨간 원·사선(출입 금지) / 노란 삼각형(고압 전기 주의) / 파란 원(안전모 착용) / 녹색(비상구)' },
            { type: 'choice', prompt: '"보안경 착용" 표지의 종류에 ○ 하세요.', options: ['금지', '지시', '안내'], answer: '지시' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '표지를 색으로 정한 까닭은 ___서도, 글을 모르는 사람도 바로 ___ 위해서예요.', answer: '멀리, 알아보기' },
            { type: 'draw', prompt: '우리 학교 과학실에 붙일 표지 하나를 모양과 색을 살려 그려 보세요.' },
          ],
        },
        diff: DIFF('경고와 지시처럼 헷갈리는 표지 뜻을 가려요.'),
        notes: '자주 보이는 어려움: ① 지시와 금지를 헷갈린다 → 파란 원은 "하세요", 빨간 원 사선은 "하지 마세요". ② 표지를 장식으로 여긴다 → 그 자리의 위험을 알리는 메시지. 표지 세부 모양은 산업안전보건법 시행규칙 별표의 그림으로 한 번 더 보여 준다.',
      }),

      LESSON(3, {
        title: '보호구를 순서대로 입고 작업 전 점검하기',
        objective: '실습실·작업장에서 보호구를 바르게 착용하는 순서와 작업 전 점검 항목을 말할 수 있다.',
        draw: 'a student in a paper workshop putting on goggles and gloves in front of a checklist board with paper tick boxes',
        banner: '입고, 맞추고, 점검하고', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"기술 실습 시간에 보안경을 이마에 올리고 작업하는 친구를 보면 어떤 생각이 드나요?" 대답을 듣고 보호구는 바르게 써야 제 역할을 한다는 점을 짚는다. 오늘은 보호구를 입는 순서와 작업 전 점검을 몸에 익힌다고 밝힌다.',
          student: '실습 전에 선생님이 늘 확인하는 것을 짝과 두 가지씩 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('chk', '보호구 상태 살피기', 'leaf'), C('wear', '보호구 착용', 'star')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['chk', 'wear'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 보호구 착용 순서', minutes: 13, tool: 'story',
            teacher: '"장갑을 먼저 끼면 다른 보호구를 쓸 때 어떤 점이 불편할까요?" 장갑을 끼고 나면 턱끈·보안경 조정이 어려워 보통 마지막에 낀다는 점을 짚는다. 착용 전에 금 간 보안경·찢어진 장갑이 없는지 살펴야 한다는 것을 1번 첫 카드로 확인한다(작업장마다 정한 순서가 있으면 그것을 따른다).',
            task: '목공 실습 전에 보호구를 입는 순서를 놓고, 착용한 뒤 확인할 것을 골라요.',
            levels: LV,
            items: [
              SO('목공 실습 전 보호구 착용 순서를 놓아 보세요.', '보호구 착용', ['1', '2', '3', '4'], [C('o1', '보호구가 성한지 살펴요', 'leaf'), C('o2', '작업복·안전화를 신어요', 'house'), C('o3', '보안경·귀마개를 써요', 'sun'), C('o4', '마지막에 장갑을 껴요', 'star')], ['o1', 'o2', 'o3', 'o4'], 0.3),
              MP('착용한 뒤 확인할 것만 골라 담으세요.', '착용 확인', ['보안경이 눈에 밀착됐나', '안전모 턱끈을 맸나', '소매·긴 머리를 정리했나', '보호구 색이 예쁜가'], ['보안경이 눈에 밀착됐나', '안전모 턱끈을 맸나', '소매·긴 머리를 정리했나'], 0.25),
              MS('보호구 상태를 두 칸으로 나누어 보세요.', '보호구 상태', ['써도 돼요', '바꿔요'], ['깨끗하고 성한 보안경', '내 발에 맞는 안전화', '금이 간 보안경', '구멍 난 고무장갑'], { '써도 돼요': ['깨끗하고 성한 보안경', '내 발에 맞는 안전화'], '바꿔요': ['금이 간 보안경', '구멍 난 고무장갑'] }, 0.2,
                { conclude: '망가진 보호구는 쓰지 않은 것과 같아요. 쓰기 전에 먼저 살펴요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 작업 전 점검표 만들기', minutes: 14, tool: 'mindmap',
            teacher: '"점검표가 있으면 무엇이 좋을까요?" 사람은 바쁘면 빠뜨리기 쉬워 점검표로 같은 순서를 지킨다고 짚는다. 1번에서 "기계를 켜 둔 채 정리"를 점검 항목으로 넣는 학생에게는 정비·청소는 기계를 끈 뒤에 한다는 점을 고쳐 준다. 3번은 모둠별로 우리 학교 실습실 점검표 다섯 줄을 만든다.',
            task: '작업 전 점검 항목을 사람·도구·주변으로 나누고, 실습실 점검표를 만들어요.',
            levels: LV,
            items: [
              MS('점검 항목을 세 칸으로 나누어 보세요.', '작업 전 점검', ['사람', '도구·기계', '주변'], ['보호구를 바르게 썼나', '몸 상태가 괜찮나', '기계 덮개가 있나', '전선이 벗겨지지 않았나', '바닥에 물기가 없나', '통로가 비어 있나'], { '사람': ['보호구를 바르게 썼나', '몸 상태가 괜찮나'], '도구·기계': ['기계 덮개가 있나', '전선이 벗겨지지 않았나'], '주변': ['바닥에 물기가 없나', '통로가 비어 있나'] }, 0.3),
              MP('기계를 정비·청소할 때 지킬 것만 골라 담으세요.', '정비할 때', ['전원을 끄고 해요', '멈춘 것을 확인해요', '다른 사람이 못 켜게 표시', '돌아가는 채로 닦아요'], ['전원을 끄고 해요', '멈춘 것을 확인해요', '다른 사람이 못 켜게 표시'], 0.3),
              TALK('모둠에서 우리 학교 실습실(기술실·과학실 등) 작업 전 점검표 다섯 줄을 만들어 발표 준비를 한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 만든 점검표에서 가장 빠뜨리기 쉬운 줄은 무엇일까요?" 모둠마다 하나씩 말하게 하고, 다음 실습 시간에 실제로 써 보자고 제안한다. 출구 1번에서 장갑을 먼저 낀 학생과 순서의 까닭을 다시 짚으며 단원을 마친다.',
          exit: [
            XO('과학 실험 전 준비를 차례대로 놓으세요.', '과학 실험 준비', ['1', '2', '3', '4'], [C('e1', '실험복·보안경 상태 확인', 'leaf'), C('e2', '실험복을 입어요', 'house'), C('e3', '보안경을 써요', 'sun'), C('e4', '고무장갑을 껴요', 'star')], ['e1', 'e2', 'e3', 'e4'], 0.25),
            CH('기계를 청소하기 전에 가장 먼저 할 일은?', ['장갑을 낀다', '전원을 끄고 멈춘 것을 확인한다', '빨리 닦는다'], 1, '기계 정비·청소는 전원을 끄고 완전히 멈춘 뒤에 해요.'),
            SH('이번 단원에서 배운 것 가운데 다음 실습 시간에 바로 실천할 것을 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '보호구 착용과 작업 전 점검',
          items: [
            { type: 'table', prompt: '보호구 착용 순서를 번호로 쓰세요.', columns: ['할 일', '차례'], cells: [['보안경·귀마개 쓰기', ''], ['보호구 상태 살피기', ''], ['장갑 끼기', ''], ['작업복·안전화 신기', '']], answer: '3, 1, 4, 2' },
            { type: 'choice', prompt: '바꿔야 할 보호구에 ○ 하세요.', options: ['깨끗한 보안경', '금이 간 보안경', '발에 맞는 안전화'], answer: '금이 간 보안경' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기계 정비는 ___을 끄고, 다른 사람이 켜지 못하게 ___한 뒤에 해요.', answer: '전원, 표시' },
            { type: 'short', prompt: '우리 학교 실습실 작업 전 점검표에 꼭 넣을 항목 세 가지를 쓰세요.' },
          ],
        },
        diff: DIFF('사람·도구·주변 점검을 함께 가려요.'),
        notes: '자주 보이는 어려움: ① 망가진 보호구를 그냥 쓴다 → 쓰기 전에 살핀다. ② 기계를 켠 채 정비·청소한다 → 끄고, 멈춘 것을 확인하고, 표시한다. ③ 점검을 귀찮은 절차로 여긴다 → 바쁠수록 빠뜨리므로 점검표를 쓴다. 착용 순서는 학교·작업장에서 정한 것이 있으면 그것을 따른다.',
      }),
    ],
  });
})();
