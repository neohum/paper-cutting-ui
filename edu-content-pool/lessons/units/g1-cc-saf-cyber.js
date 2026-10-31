/* 1학년 창체 안전교육 — 사이버 중독 예방 (5차시). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 약물 및 사이버 중독 예방(TV·인터넷·스마트폰 중독 위해성을 알고 바르게 사용하기).
 * 저학년 범위: 화면 시간 약속, 그만 보기, 화면 대신 놀이, 바른 자세·눈 쉬기, 우리 집 약속. 장면·인물은 직접 지은 것이다(가명). 특정 시간 수치는 쓰지 않는다. */
(function () {
  const ID = 'g1-cc-saf-cyber', GRADE = 1, TITLE = '사이버 중독 예방';
  const UNIT = `g${GRADE}-창체-${ID.replace(/^g\d+-cc-/, '')}`;
  const base = (n) => ({
    id: `${ID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE,
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
  // 문항 틀: MS 생각 그물 나누기, MM 잇기, MP 고르기, EB 갈림길, ES 마음 칸 나누기, EM 마음 잇기, SO 이야기 차례, TM 시간 띠 잇기
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards }, target: { sort }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const TM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', axis: ['아침', '밤'], slots, cards }, target: { match }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const ACT = (id, title, minutes, tool, teacher, task, items) => ({
    id, title, minutes, tool, teacher, task, items,
    levels: items.some((it) => it.toolOptions && it.toolOptions.mode === 'branch') ? LVB : LV,
  });
  // 출구: XT 교구, XC 고르기, XS 짧은 글, MOOD 마음
  const XT = (tool, options, prompt, target, d = 0.2) => ({ type: 'tool', tool, options, ...(options.mode === 'branch' ? {} : { state: { at: {} } }), prompt, target, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.15) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XS = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 활동지
  const WT = (prompt, columns, cells, answer) => ({ type: 'table', prompt, columns, cells, answer });
  const WC = (prompt, options, answer) => ({ type: 'choice', prompt, options, answer });
  const WB = (prompt, text, answer) => ({ type: 'blank', prompt, text, answer });
  const WS = (prompt) => ({ type: 'short', prompt });
  const WD = (prompt) => ({ type: 'draw', prompt });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모든 카드를 놓거나 보기를 고른 뒤 스스로 확인하고 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 안전하지 않은 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(활동 14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro, student: o.student },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap, exitTicket: o.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '1학년이 텔레비전·태블릿·스마트폰 화면을 즐겁고 건강하게 쓰는 첫 약속을 익히는 단원입니다. 1차시는 화면을 볼 때 시간 약속이 왜 필요한지, 2차시는 약속한 시간이 되면 스스로 끄는 연습을 합니다. 3차시는 화면 없이 할 수 있는 놀이를 찾고, 4차시는 바른 자세와 눈 쉬기를 익힙니다. 5차시에는 가족과 함께 지킬 우리 집 화면 약속으로 단원을 묶습니다. 디지털 시민(정보통신윤리) 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '화면 보기 전에 시간 약속 정하기',
        objective: '화면을 볼 때 시간 약속이 필요한 까닭을 알고, 약속을 정하는 방법을 말할 수 있다.',
        draw: 'a child and parent shaking hands beside a paper tablet and a paper clock, under a cheerful paper sun',
        banner: '보기 전에 약속해요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: '"만화를 보다가 \'한 편만 더!\' 하고 싶었던 적 있나요?" 손을 들게 한 뒤 "화면은 재미있어서 그만두기 어려워요. 그래서 보기 전에 얼마나 볼지 약속해요"라고 말한다.',
        student: '좋아하는 영상 하나를 떠올리고, 얼마나 보면 좋을지 짝에게 말해 봅시다.',
        acts: [
          ACT('a1', '활동 1. 약속이 있을 때와 없을 때', 14, 'mindmap',
            '"약속 없이 계속 보면 어떻게 될까요?" 눈이 피곤하고 할 일을 놓치는 장면을 함께 짚는다. "재미있으면 계속 봐도 돼요"라는 반응에는 "밥 먹을 때나 잘 때가 되면요?"라고 되묻는다.',
            '화면 보는 장면을 약속을 지킴과 어김으로 나누어요.',
            [
              MS('장면을 두 가지로 나누어 보세요.', '화면 볼 때', ['약속 지켜요', '약속 어겨요'], ['보기 전에 몇 편 정해요', '밥 먹으며 계속 봐요', '숙제 먼저 해요', '잘 시간에도 봐요'], { '약속 지켜요': ['보기 전에 몇 편 정해요', '숙제 먼저 해요'], '약속 어겨요': ['밥 먹으며 계속 봐요', '잘 시간에도 봐요'] }, 0.1),
              MS('오래 보았을 때 몸을 나누어 보세요.', '오래 보면', ['힘들어요', '괜찮아요'], ['눈이 뻑뻑해요', '목이 아파요', '밖에서 뛰놀아요', '푹 자요'], { 힘들어요: ['눈이 뻑뻑해요', '목이 아파요'], 괜찮아요: ['밖에서 뛰놀아요', '푹 자요'] }, 0.15),
              MP('약속을 정할 때 할 말만 골라 보세요.', '약속하는 말', ['"두 편만 볼게요"', '"끝나면 끌게요"', '"계속 볼래요"', '"몰래 볼래요"'], ['"두 편만 볼게요"', '"끝나면 끌게요"'], 0.2,
                { conclude: '보기 전에 얼마나 볼지 정하면 그만두기 쉬워요.' }),
            ]),
          ACT('a2', '활동 2. 언제 볼까', 13, 'emotion',
            '"지금 화면을 봐도 될까요?" 결과를 읽게 하고, 화면을 보면 안 되는 때(밥 먹을 때·길 걸을 때·잘 때)를 짚는다.',
            '화면을 볼지 말지 정하는 장면에서 골라요.',
            [
              EB('밥 먹을 시간이에요.', '저녁 밥상이 차려졌는데 만화가 아직 남았어요.', [
                { id: 'watch', text: '밥상 앞에서 계속 봐요', result: '밥이 식고 가족과 이야기를 못 해요.', mood: '속상함', why: '밥 먹을 때는 화면을 꺼요.' },
                { id: 'off', text: '끄고 밥을 먹어요', result: '가족과 즐겁게 이야기해요.', mood: '기쁨' }], 'off', 0.1),
              EB('길을 걸어요.', '학교 가는 길에 엄마 휴대전화로 영상을 보고 싶어요.', [
                { id: 'walk', text: '걸으면서 봐요', result: '앞을 못 봐 부딪힐 뻔해요.', mood: '무서움', why: '걸을 때는 앞을 봐요.' },
                { id: 'later', text: '집에 가서 약속한 때 봐요', result: '안전하게 학교에 가요.', mood: '편안함' }], 'later', 0.15),
              EB('잘 시간이에요.', '잠자리에 누웠는데 태블릿으로 게임을 더 하고 싶어요.', [
                { id: 'play', text: '이불 속에서 몰래 해요', result: '늦게 잠들어 아침에 피곤해요.', mood: '짜증', why: '잘 때는 화면을 꺼요.' },
                { id: 'sleep', text: '태블릿을 거실에 두고 자요', result: '푹 자고 개운하게 일어나요.', mood: '편안함' }], 'sleep', 0.2,
                { conclude: '밥 먹을 때, 걸을 때, 잘 때는 화면을 쉬어요.' }),
            ]),
        ],
        wrap: '"화면을 보기 전에 무엇을 하지요?" "약속해요"를 함께 말한다. 출구 2번에서 "재미있으면 계속"을 고르면 다시 짚는다.',
        exit: [
          XT('mindmap', { topic: '주말 아침', slots: ['약속 지켜요', '약속 어겨요'], cards: ['한 편 보고 꺼요', '일어나자마자 계속 봐요', '아침 먹고 봐요', '세수도 안 하고 봐요'] }, '주말 아침 장면을 두 가지로 나누어 보세요.',
            { sort: { '약속 지켜요': ['한 편 보고 꺼요', '아침 먹고 봐요'], '약속 어겨요': ['일어나자마자 계속 봐요', '세수도 안 하고 봐요'] } }),
          XC('화면 시간 약속은 언제 정할까요?', ['보기 전에', '다 본 뒤에', '정하지 않아요'], 0, '보기 전에 정해야 지키기 쉬워요.'),
          MOOD,
        ],
        wsTitle: '보기 전에 약속해요',
        ws: [
          WT('약속을 지키면 ○, 어기면 ×를 쓰세요.', ['장면', '○ / ×'], [['보기 전에 몇 편 정해요', ''], ['밥 먹으며 봐요', ''], ['잘 시간에 꺼요', '']], '○, ×, ○'),
          WC('화면을 쉬어야 할 때에 ○ 하세요.', ['쉬는 날 오후', '잠잘 때', '약속한 시간'], '잠잘 때'),
          WB('빈칸에 알맞은 말을 쓰세요.', '화면은 보기 ___에 약속을 정해요.', '전'),
          WD('화면을 보기 전에 가족과 약속하는 모습을 그려 보세요.'),
        ],
        notes: '가정마다 기기 환경이 달라 "몇 분"과 같은 수치를 정답으로 정하지 않는다. 기기가 없는 학생도 텔레비전 등 화면 일반으로 참여하게 한다.',
      }),

      LESSON(2, {
        title: '알람이 울리면 스스로 화면 끄기',
        objective: '약속한 시간이 되면 아쉬운 마음을 다스리고 스스로 화면을 끌 수 있다.',
        draw: 'a child pressing a paper off button on a tablet while a paper alarm clock rings, with a toy waiting nearby',
        banner: '내 손으로 꺼요', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: '"약속한 시간이 끝났다고 알람이 울려요. 끄기 아쉬울 때 어떤 마음이 드나요?" 대답을 듣고(기다릴 반응: "짜증 나요", "아쉬워요") "아쉬운 건 당연해요. 그래도 내 손으로 끄면 정말 멋진 거예요"라고 말한다.',
        student: '아쉬울 때 마음을 달래는 방법 하나를 짝에게 말해 봅시다.',
        acts: [
          ACT('a1', '활동 1. 알람이 울리면', 14, 'emotion',
            '"알람이 울렸어요. 어떻게 할까요?" 결과를 읽게 한다. 떼쓰기를 고르는 학생에게 "다음에도 볼 수 있으려면 어떻게 하는 게 좋을까요?"라고 묻는다.',
            '약속한 시간이 끝났을 때 할 일을 골라요.',
            [
              EB('만화 중간에 알람이 울려요.', '재미있는 장면인데 약속한 시간 알람이 울려요.', [
                { id: 'off', text: '"다음에 이어 볼게" 하고 꺼요', result: '약속을 지켜서 뿌듯해요.', mood: '뿌듯함' },
                { id: 'cry', text: '울며 떼써요', result: '가족과 다투게 돼요.', mood: '화남', why: '아쉬워도 약속을 지켜요.' }], 'off', 0.1),
              EB('게임이 거의 끝났어요.', '게임 한 판이 거의 끝나 가는데 알람이 울려요.', [
                { id: 'finish', text: '이 판만 끝내고 바로 꺼요', result: '정한 대로 마무리해요.', mood: '편안함' },
                { id: 'more', text: '몰래 한 판 더 해요', result: '약속을 어겨 다음 시간이 줄어요.', mood: '속상함', why: '한 판 더는 약속을 어기는 거예요.' }], 'finish', 0.2),
              EB('동생이 더 보재요.', '알람이 울렸는데 동생이 더 보자고 졸라요.', [
                { id: 'give', text: '동생 핑계로 더 봐요', result: '둘 다 약속을 어겨요.', mood: '걱정', why: '동생과 함께 약속을 지켜요.' },
                { id: 'play', text: '"블록 놀이 하자" 하고 꺼요', result: '동생과 블록으로 성을 쌓아요.', mood: '신남' }], 'play', 0.2,
                { conclude: '끈 뒤에 할 재미있는 일을 정해 두면 끄기 쉬워요.' }),
            ]),
          ACT('a2', '활동 2. 끄는 차례 익히기', 13, 'story',
            '"화면을 끄고 나서 무엇을 할까요?" 끄는 차례를 놓고, 끈 뒤 할 일을 미리 정한다는 점을 짚는다.',
            '화면을 끄는 차례를 놓아요.',
            [
              SO('알람이 울린 뒤 차례를 놓아 보세요.', '알람이 울리면', ['먼저', '다음', '마지막'], [C('a', '알람 소리를 들어요', 'star'), C('b', '내 손으로 꺼요', 'sun'), C('c', '기기를 제자리에 둬요', 'house')], ['a', 'b', 'c'], 0.1),
              SO('화면을 끈 뒤 차례를 놓아 보세요.', '끈 뒤에', ['먼저', '다음', '마지막'], [C('d', '눈을 감고 쉬어요', 'moon'), C('e', '기지개를 켜요', 'tree'), C('f', '책이나 놀이를 해요', 'flower')], ['d', 'e', 'f'], 0.15),
              SO('영상을 보는 차례를 놓아 보세요.', '영상 보기', ['먼저', '다음', '그다음', '마지막'], [C('g', '몇 편 볼지 정해요', 'sun'), C('h', '알람을 맞춰요', 'star'), C('i', '즐겁게 봐요', 'flower'), C('j', '알람에 꺼요', 'moon')], ['g', 'h', 'i', 'j'], 0.25,
                { conclude: '정하고, 맞추고, 보고, 끄기 — 이 차례면 스스로 멈출 수 있어요.' }),
            ]),
        ],
        wrap: '"알람이 울리면 누구 손으로 끄지요?" "내 손으로!"를 함께 말한다. 끈 뒤에 할 재미있는 일 하나를 정하게 한다.',
        exit: [
          XT('story', { title: '태블릿 그림 놀이', slots: ['먼저', '다음', '마지막'], cards: [C('x1', '시간을 정해요', 'sun'), C('x2', '그림을 그려요', 'flower'), C('x3', '알람에 저장하고 꺼요', 'moon')] }, '태블릿 그림 놀이를 하는 차례를 놓아 보세요.', { order: ['x1', 'x2', 'x3'] }),
          XC('알람이 울렸는데 아쉬우면?', ['떼써요', '"다음에 볼게" 하고 꺼요', '몰래 더 봐요'], 1, '아쉬워도 약속을 지켜요.'),
          MOOD,
        ],
        wsTitle: '내 손으로 꺼요',
        ws: [
          WT('차례를 쓰세요(1, 2, 3).', ['할 일', '차례'], [['내 손으로 꺼요', ''], ['알람을 맞춰요', ''], ['책을 읽어요', '']], '2, 1, 3'),
          WC('알람이 울릴 때 알맞은 말에 ○ 하세요.', ['"싫어, 더 볼래"', '"다음에 이어 볼게"', '"한 판만 더"'], '"다음에 이어 볼게"'),
          WB('빈칸에 알맞은 말을 쓰세요.', '알람이 울리면 내 ___으로 꺼요.', '손'),
          WS('화면을 끈 뒤 하고 싶은 일을 한 문장 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① "한 판만 더"가 습관이다 → 끝나는 때를 미리 정한다. ② 끈 뒤 할 일이 없어 다시 켠다 → 끈 뒤 할 일을 정한다.',
      }),

      LESSON(3, {
        title: '화면 없이 즐거운 놀이 찾기',
        objective: '화면 없이 할 수 있는 다양한 놀이를 찾아 고를 수 있다.',
        draw: 'children playing jump rope, building blocks, and reading picture books outdoors under paper trees, with a tablet resting on a shelf',
        banner: '화면 밖에도 재미가 가득', extra: [{ motif: 'bird', x: 300, y: 96 }],
        intro: '"화면이 없다면 무엇을 하며 놀까요?" 대답을 칠판에 모은다(기다릴 반응: "숨바꼭질", "그림 그리기"). "화면 밖에도 재미있는 놀이가 많아요. 몸도 마음도 튼튼해져요"라고 말한다.',
        student: '화면 없이 하는 놀이 중 가장 좋아하는 것을 짝에게 말해 봅시다.',
        acts: [
          ACT('a1', '활동 1. 화면 놀이와 화면 없는 놀이', 14, 'mindmap',
            '"이 놀이는 화면이 필요할까요?" 화면 없는 놀이도 친구·가족과 함께하면 더 즐겁다는 점을 짚는다.',
            '놀이 카드를 나누고, 화면 없는 놀이를 골라요.',
            [
              MS('놀이를 두 가지로 나누어 보세요.', '어떤 놀이', ['화면 놀이', '화면 없는 놀이'], ['태블릿 게임', '줄넘기', '영상 보기', '종이접기'], { '화면 놀이': ['태블릿 게임', '영상 보기'], '화면 없는 놀이': ['줄넘기', '종이접기'] }, 0.1),
              MP('비 오는 날 집에서 할 화면 없는 놀이만 골라 보세요.', '비 오는 날', ['블록 쌓기', '그림책 읽기', '휴대전화 게임', '텔레비전 보기'], ['블록 쌓기', '그림책 읽기'], 0.15),
              MM('장소와 어울리는 놀이를 이어 보세요.', '어디서 무엇을', [{ id: 'p1', label: '놀이터' }, { id: 'p2', label: '거실' }, { id: 'p3', label: '공원' }], ['미끄럼틀 타기', '보드게임', '자전거 타기', '영상 보기'], { p1: '미끄럼틀 타기', p2: '보드게임', p3: '자전거 타기' }, 0.2,
                { conclude: '어디서든 화면 없이 즐길 놀이가 있어요.' }),
            ]),
          ACT('a2', '활동 2. 심심할 때 어떻게 할까', 13, 'emotion',
            '"심심하면 꼭 화면을 켜야 할까요?" 결과를 읽게 하고, 심심함이 새 놀이를 만드는 시작이 될 수 있다고 말한다.',
            '심심한 장면에서 할 일을 골라요.',
            [
              EB('심심해요.', '숙제를 다 했는데 심심해요.', [
                { id: 'tv', text: '바로 텔레비전을 켜요', result: '시간이 금방 지나가 버려요.', mood: '걱정', why: '심심할 때 다른 놀이도 찾아봐요.' },
                { id: 'make', text: '종이로 비행기를 접어요', result: '멀리 날려 신이 나요.', mood: '신남' }], 'make', 0.1),
              EB('친구가 놀자고 해요.', '친구가 밖에서 놀자고 하는데 게임을 하고 있어요.', [
                { id: 'out', text: '게임을 끄고 나가 놀아요', result: '친구와 신나게 뛰놀아요.', mood: '기쁨' },
                { id: 'stay', text: '"게임할래" 하고 안 나가요', result: '친구가 혼자 돌아가요.', mood: '외로움', why: '친구와 함께 노는 시간도 소중해요.' }], 'out', 0.15),
              EB('기다리는 시간이에요.', '병원에서 차례를 기다리는데 휴대전화가 없어요.', [
                { id: 'fuss', text: '휴대전화 달라고 떼써요', result: '가족이 곤란해해요.', mood: '짜증', why: '기다릴 때 할 다른 놀이도 있어요.' },
                { id: 'game', text: '가족과 끝말잇기를 해요', result: '기다림이 즐거워져요.', mood: '기쁨' }], 'game', 0.2,
                { conclude: '기다리는 시간에도 말놀이처럼 화면 없는 놀이를 할 수 있어요.' }),
            ]),
        ],
        wrap: '"오늘 집에 가서 해 볼 화면 없는 놀이 하나를 정해 볼까요?" 칠판에 모은 놀이 목록에서 고르게 한다.',
        exit: [
          XT('mindmap', { mode: 'pick', topic: '화면 없는 놀이', basket: '화면 없는 놀이', cards: ['공기놀이', '스마트폰 게임', '모래 놀이', '영상 통화'] }, '화면 없는 놀이만 골라 보세요.', { pick: ['공기놀이', '모래 놀이'] }),
          XC('심심할 때 할 수 있는 일이 아닌 것은?', ['그림 그리기', '하루 종일 게임하기', '책 읽기'], 1, '심심할 때 화면 말고도 할 일이 많아요.'),
          MOOD,
        ],
        wsTitle: '화면 없이 즐거운 놀이',
        ws: [
          WT('화면 없는 놀이면 ○, 화면 놀이면 ×를 쓰세요.', ['놀이', '○ / ×'], [['줄넘기', ''], ['태블릿 게임', ''], ['종이접기', '']], '○, ×, ○'),
          WC('비 오는 날 집에서 할 화면 없는 놀이에 ○ 하세요.', ['보드게임', '영상 보기', '휴대전화 게임'], '보드게임'),
          WS('이번 주에 해 볼 화면 없는 놀이를 쓰세요.'),
          WD('화면 없이 노는 내 모습을 그려 보세요.'),
        ],
        notes: '화면을 나쁜 것으로만 그리지 않고 "균형"으로 다룬다. 집 환경(마당·형제 유무)에 따라 놀이가 다르므로 정답을 하나로 정하지 않는 활동지 문항을 둔다.',
      }),

      LESSON(4, {
        title: '바른 자세로 보고 눈 쉬게 하기',
        objective: '화면을 볼 때 바른 자세와 알맞은 거리를 지키고, 눈을 쉬게 하는 방법을 말할 수 있다.',
        draw: 'a child sitting upright at a table with a paper tablet at arm length, then looking out a window at paper trees far away',
        banner: '바르게 앉고 멀리 봐요', extra: [{ motif: 'tree', x: 300, y: 214 }],
        intro: '"화면을 오래 본 뒤 눈이 어땠나요?" 대답을 듣고(기다릴 반응: "뻑뻑해요", "따가워요") "바르게 앉고, 너무 가까이 보지 않고, 중간중간 멀리 보면 눈과 목이 덜 힘들어요"라고 말한다.',
        student: '지금 바르게 앉아 창밖 멀리 있는 것을 바라봅시다.',
        acts: [
          ACT('a1', '활동 1. 바른 자세 찾기', 14, 'mindmap',
            '"이 자세로 오래 보면 몸 어디가 아플까요?" 누워서 보기, 코앞에서 보기가 목과 눈을 힘들게 한다는 점을 짚는다.',
            '화면 보는 자세를 바른 자세와 고칠 자세로 나누어요.',
            [
              MS('자세를 두 가지로 나누어 보세요.', '화면 볼 때', ['바른 자세', '고쳐요'], ['허리 펴고 앉아요', '엎드려서 봐요', '화면을 팔 길이만큼', '코앞에 바짝 대요'], { '바른 자세': ['허리 펴고 앉아요', '화면을 팔 길이만큼'], 고쳐요: ['엎드려서 봐요', '코앞에 바짝 대요'] }, 0.1),
              MS('방 모습을 두 가지로 나누어 보세요.', '어디서 볼까', ['좋아요', '고쳐요'], ['밝은 거실에서 봐요', '불 끈 방에서 봐요', '식탁에 앉아 봐요', '이불 속에서 봐요'], { 좋아요: ['밝은 거실에서 봐요', '식탁에 앉아 봐요'], 고쳐요: ['불 끈 방에서 봐요', '이불 속에서 봐요'] }, 0.15),
              MP('눈을 쉬게 하는 방법만 골라 보세요.', '눈 쉬기', ['창밖 멀리 보기', '눈 깜빡이기', '눈 비비기', '화면 더 가까이'], ['창밖 멀리 보기', '눈 깜빡이기'], 0.2,
                { conclude: '중간중간 멀리 보고 눈을 깜빡이면 눈이 쉬어요.' }),
            ]),
          ACT('a2', '활동 2. 눈 쉬기 차례', 13, 'story',
            '"눈을 쉬게 할 때 무엇부터 할까요?" 차례를 놓은 뒤 다 함께 따라 해 본다. 눈을 손으로 비비지 않는다는 점을 짚는다.',
            '눈과 몸을 쉬게 하는 차례를 놓아요.',
            [
              SO('눈 쉬기 차례를 놓아 보세요.', '눈 쉬기', ['먼저', '다음', '마지막'], [C('a', '화면에서 눈을 떼요', 'sun'), C('b', '창밖 먼 곳을 봐요', 'tree'), C('c', '눈을 천천히 깜빡여요', 'moon')], ['a', 'b', 'c'], 0.1),
              SO('몸 쉬기 차례를 놓아 보세요.', '몸 쉬기', ['먼저', '다음', '마지막'], [C('d', '기기를 내려놓아요', 'house'), C('e', '일어나서 기지개 켜요', 'tree'), C('f', '목을 천천히 돌려요', 'flower')], ['d', 'e', 'f'], 0.15),
              SO('바르게 보는 차례를 놓아 보세요.', '바르게 보기', ['먼저', '다음', '그다음', '마지막'], [C('g', '불을 밝게 켜요', 'sun'), C('h', '의자에 바르게 앉아요', 'house'), C('i', '화면을 멀리 둬요', 'star'), C('j', '중간에 멀리 봐요', 'tree')], ['g', 'h', 'i', 'j'], 0.25,
                { conclude: '밝게, 바르게, 멀리 — 화면 볼 때 몸을 지키는 약속이에요.' }),
            ]),
        ],
        wrap: '"화면을 볼 때 지킬 세 가지는요?" "밝게, 바르게, 멀리"를 함께 말하고 눈 쉬기 체조를 한 번 더 한다.',
        exit: [
          XT('mindmap', { topic: '텔레비전 볼 때', slots: ['바른 자세', '고쳐요'], cards: ['소파에 바르게 앉아요', '화면 바로 앞에 앉아요', '조금 떨어져 봐요', '누워서 고개 꺾어 봐요'] }, '텔레비전 보는 자세를 두 가지로 나누어 보세요.',
            { sort: { '바른 자세': ['소파에 바르게 앉아요', '조금 떨어져 봐요'], 고쳐요: ['화면 바로 앞에 앉아요', '누워서 고개 꺾어 봐요'] } }),
          XC('눈이 뻑뻑할 때 알맞은 것은?', ['눈을 비벼요', '멀리 보고 깜빡여요', '화면을 더 가까이 봐요'], 1, '멀리 보고 깜빡이면 눈이 쉬어요.'),
          MOOD,
        ],
        wsTitle: '바르게 앉고 멀리 봐요',
        ws: [
          WT('바른 자세면 ○, 고칠 자세면 ×를 쓰세요.', ['자세', '○ / ×'], [['허리 펴고 앉아요', ''], ['엎드려서 봐요', ''], ['불 끈 방에서 봐요', '']], '○, ×, ×'),
          WB('빈칸에 알맞은 말을 쓰세요.', '화면을 볼 때는 밝게, 바르게, ___ 봐요.', '멀리'),
          WC('눈을 쉬게 하는 방법에 ○ 하세요.', ['눈 비비기', '창밖 멀리 보기', '화면 가까이 보기'], '창밖 멀리 보기'),
          WD('바른 자세로 화면을 보는 내 모습을 그려 보세요.'),
        ],
        notes: '거리·시간 수치(몇 cm, 몇 분)는 정답으로 쓰지 않고 "팔 길이만큼", "중간중간"으로 말한다. 시력 문제를 겁주는 표현은 쓰지 않는다.',
      }),

      LESSON(5, {
        title: '가족과 함께 지킬 화면 약속 만들기',
        objective: '가족과 함께 지킬 화면 약속을 정하고 순서대로 실천하는 방법을 말할 수 있다.',
        draw: 'a family sitting together around a paper table writing a paper promise poster with drawings of a clock, a book, and a ball',
        banner: '우리 집 화면 약속', extra: [{ motif: 'house', x: 300, y: 214, color: 'rose', s: 0.6 }],
        intro: '"우리 반에서 배운 화면 약속을 떠올려 볼까요?" "보기 전에 약속", "내 손으로 끄기", "화면 없는 놀이", "밝게·바르게·멀리"를 칠판에 붙인다. "오늘은 가족과 함께 지킬 약속을 만들어요"라고 말한다.',
        student: '가족과 함께 지키고 싶은 화면 약속 하나를 짝에게 말해 봅시다.',
        acts: [
          ACT('a1', '활동 1. 약속 만드는 차례', 14, 'story',
            '"가족 약속은 어떻게 만들까요?" 혼자 정하지 않고 가족과 함께 이야기해 정한다는 점, 가족도 함께 지키면 더 잘 지켜진다는 점을 짚는다.',
            '가족 화면 약속을 만들고 지키는 차례를 놓아요.',
            [
              SO('가족 약속을 만드는 차례를 놓아 보세요.', '약속 만들기', ['먼저', '다음', '마지막'], [C('a', '가족이 함께 모여요', 'house'), C('b', '지킬 약속을 정해요', 'star'), C('c', '약속 판을 붙여요', 'flower')], ['a', 'b', 'c'], 0.1),
              SO('약속을 지키는 하루 차례를 놓아 보세요.', '약속 지키는 날', ['먼저', '다음', '그다음', '마지막'], [C('d', '숙제를 먼저 해요', 'leaf'), C('e', '약속한 만큼 봐요', 'sun'), C('f', '저녁은 화면 없이', 'house'), C('g', '잘 때 기기는 거실에', 'moon')], ['d', 'e', 'f', 'g'], 0.2),
              SO('약속을 어겼을 때 차례를 놓아 보세요.', '약속을 어기면', ['먼저', '다음', '마지막'], [C('h', '어긴 것을 말해요', 'cloud'), C('i', '까닭을 이야기해요', 'leaf'), C('j', '다시 지키기로 해요', 'star')], ['h', 'i', 'j'], 0.25,
                { conclude: '어겼을 때 숨기지 않고 말하면 다시 지킬 수 있어요.' }),
            ]),
          ACT('a2', '활동 2. 우리 집 약속 고르기', 13, 'mindmap',
            '"이 약속은 우리 가족 모두 지킬 수 있을까요?" 지키기 어려운 약속보다 지킬 수 있는 약속을 고른다는 점을 짚는다.',
            '좋은 가족 약속을 고르고, 상황과 약속을 이어요.',
            [
              MP('가족 화면 약속으로 알맞은 것만 골라 보세요.', '가족 약속', ['밥 먹을 때 화면 끄기', '잘 때 기기는 거실에', '하고 싶을 때 계속 보기', '몰래 보기'], ['밥 먹을 때 화면 끄기', '잘 때 기기는 거실에'], 0.15),
              MM('상황과 약속을 이어 보세요.', '언제 어떻게', [{ id: 'm1', label: '영상 보기 전' }, { id: 'm2', label: '알람이 울릴 때' }, { id: 'm3', label: '눈이 피곤할 때' }], ['몇 편 볼지 정해요', '내 손으로 꺼요', '멀리 보고 쉬어요', '계속 봐요'], { m1: '몇 편 볼지 정해요', m2: '내 손으로 꺼요', m3: '멀리 보고 쉬어요' }, 0.2),
              MS('약속을 두 가지로 나누어 보세요.', '화면 약속', ['지켜요', '안 해요'], ['화면 없는 놀이 하기', '이불 속에서 보기', '바르게 앉아 보기', '걸으면서 보기'], { 지켜요: ['화면 없는 놀이 하기', '바르게 앉아 보기'], '안 해요': ['이불 속에서 보기', '걸으면서 보기'] }, 0.2,
                { conclude: '가족과 함께 정한 약속은 함께 지킬 때 더 잘 지켜져요.' }),
            ]),
        ],
        wrap: '"집에 가서 가족과 약속 판을 만들어 볼까요?" 활동지 약속 판을 가져가 가족과 함께 채우도록 한다. 결과를 내지 않아도 된다고 알린다.',
        exit: [
          XT('mindmap', { mode: 'match', topic: '이럴 땐', slots: [{ id: 'e1', label: '가족과 밥 먹을 때' }, { id: 'e2', label: '약속을 어겼을 때' }], cards: ['화면을 꺼요', '솔직히 말해요', '몰래 숨겨요'] }, '상황과 할 일을 이어 보세요.', { match: { e1: '화면을 꺼요', e2: '솔직히 말해요' } }),
          XC('가족 화면 약속은 누가 정할까요?', ['나 혼자', '가족이 함께', '아무도 안 정해요'], 1, '가족이 함께 정하고 함께 지켜요.'),
          XS('우리 집에서 지킬 화면 약속을 한 문장으로 쓰세요.'),
          MOOD,
        ],
        wsTitle: '우리 집 화면 약속 판',
        ws: [
          { type: 'check', prompt: '가족과 함께 지킬 약속에 ✔ 하세요.', options: ['보기 전에 시간 정하기', '밥 먹을 때 화면 끄기', '잘 때 기기는 거실에', '화면 없는 놀이 하기'] },
          WT('상황에 맞는 약속을 쓰세요.', ['상황', '약속'], [['영상 보기 전', ''], ['알람이 울릴 때', ''], ['눈이 피곤할 때', '']], '예) 몇 편 볼지 정해요 / 내 손으로 꺼요 / 멀리 보고 쉬어요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '약속을 어기면 숨기지 않고 ___요.', '말해'),
          WD('우리 집 화면 약속 판을 꾸며 보세요.'),
        ],
        notes: '단원 정리 차시. 가정마다 기기 사정이 다르므로 약속 판 결과를 걷거나 비교하지 않는다.',
      }),
    ],
  });
})();
