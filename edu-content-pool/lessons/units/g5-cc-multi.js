/* 5학년 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간. 장면·인물은 가상(가명 한 글자), 학급의 다문화 배경 학생을 지목하지 않는다.
 */
(function () {
  const G = 5, CODE = 'multi';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '다문화 이해';
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
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });
  const DIFF = (easy, challenge) => ({ easy, base: '모든 카드를 놓거나 보기를 고른 뒤 확인을 눌러 스스로 고쳐요.', challenge });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '5학년 다문화 이해 단원은 생각 속의 벽(편견)과 말의 벽(소통)을 넘는 2차시입니다. 1차시에는 나라·피부색·말씨에 대한 고정관념 문장을 사실과 가르고, 편견이 담긴 말이 친구에게 주는 상처를 갈림길로 살펴봅니다. 2차시에는 한국어가 서툰 친구와 그림·몸짓·쉬운 말로 소통하는 차례를 익히고 도움이 되는 말을 말풍선에 채웁니다. 4학년(문화마다 다른 인사·음식, 함께 놀기)에서 나아가 "같은 반 친구를 한 사람으로 보기"를 다루고, 6학년(우리 곁의 다양한 이웃, 차별 앞의 조력자)으로 이어집니다. 근거는 「다문화가족지원법」 제5조·같은 법 시행령 제10조의2와 교육부 지침 연 2시간이며, 학급의 다문화 배경 학생을 예로 지목하지 않습니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '고정관념 문장과 사실을 가르고 편견의 말 멈추기',
        objective: '나라·피부색·말씨에 대한 고정관념과 사실을 구별하고, 편견이 담긴 말을 멈추는 행동을 고를 수 있다.',
        draw: 'paper children of different skin tones holding up paper cards, some cards with question marks being turned over to reveal bright faces, a paper magnifying glass nearby',
        banner: '한 사람으로 바라봐요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"어느 나라 사람은 모두 매운 음식을 잘 먹는다는 말, 맞을까요?" 두세 명의 대답을 듣고(기다릴 반응: "아닌 사람도 있어요") 시연 단추로 사실과 고정관념이 나뉘는 모습을 보여 준다. "다들 그렇다던데요"가 나오면 "우리 반 친구들은 모두 같은 음식을 좋아하나요?"라고 되묻는다. 오늘은 고정관념을 가려내고 편견의 말을 멈추는 방법을 고른다고 밝힌다.',
          student: '나에 대해 다른 사람이 오해했던 점이 있다면 무엇이었을지 짝과 가볍게 이야기해 봅시다(말하고 싶은 만큼만).',
          demo: { tool: 'mindmap', options: { topic: '사실일까', slots: ['사실', '고정관념'], cards: ['나라마다 말이 달라요', '그 나라 사람은 다 게을러요'], shuffle: false }, sequence: [{ sort: { '사실': ['나라마다 말이 달라요'], '고정관념': ['그 나라 사람은 다 게을러요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사실과 고정관념 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 문장은 모든 사람에게 맞는 말일까요?" "모두·다·원래" 같은 말이 들어가면 고정관념일 가능성이 높다는 단서를 칠판에 적는다. 2번에서 피부색으로 사는 나라를 짐작하는 카드가 왜 틀린지 짚는다 — 피부색이 달라도 한국 국적인 사람이 많다. 3번은 "칭찬 같은" 고정관념(○○ 사람은 다 공부를 잘해)도 한 사람을 무리로만 본다는 점에서 편견임을 말한다.',
            task: '문장 카드를 사실과 고정관념으로 나누고, 편견이 담긴 말을 골라요.',
            levels: LV,
            items: [
              MS('문장을 사실과 고정관념으로 나누어 보세요.', '사실과 고정관념', ['사실', '고정관념'], ['나라마다 명절이 달라요', '그 나라 사람은 다 시끄러워', '한국어를 배우는 중이에요', '피부가 검으면 외국인'], { '사실': ['나라마다 명절이 달라요', '한국어를 배우는 중이에요'], '고정관념': ['그 나라 사람은 다 시끄러워', '피부가 검으면 외국인'] }, 0.15),
              MP('한 사람을 무리로만 보는 말만 골라 담아 보세요.', '무리로 보는 말', ['○○ 사람은 다 공부 잘해', '말투가 이상해서 웃겨', '너는 어떤 걸 좋아해?', '같이 축구할래?'], ['○○ 사람은 다 공부 잘해', '말투가 이상해서 웃겨'], 0.2),
              MM('편견이 담긴 말과 바꿀 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '바꿔 말해요', [{ id: 's1', label: '"너네 나라로 돌아가."' }, { id: 's2', label: '"한국 사람 다 됐네."' }, { id: 's3', label: '"너는 한국말 못하잖아."' }], ['"우리 같이 놀자."', '"너는 너답게 멋져."', '"천천히 말해도 돼."', '"그냥 조용히 있어."'], { s1: '"우리 같이 놀자."', s2: '"너는 너답게 멋져."', s3: '"천천히 말해도 돼."' }, 0.25,
                { conclude: '"모두·다·원래"가 붙은 말은 고정관념일 수 있어요. 한 사람을 한 사람으로 봐요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 편견의 말 앞에서 어떻게 할지 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이 말을 들은 친구는 어떤 마음일까요?" 1번에서 "칭찬이니 괜찮다"는 보기를 고르는 학생에게 듣는 친구가 어떻게 느낄지 다시 묻는다. 2번은 놀림받는 친구 곁에 서는 행동과 어른에게 알리는 행동을 함께 짚는다. 3번은 나도 모르게 한 말을 사과하는 것이 존중의 시작임을 말해 준다.',
            task: '편견이 담긴 말이 나온 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('친구들이 엄마가 베트남 출신인 서에게 "넌 반만 한국인이야"라고 해요. 준이는 어떻게 할까요?', '점심시간, 몇몇 친구가 서에게 "넌 반만 한국인이야"라며 웃었어요.', [
                { id: 'stop', text: '"서는 그냥 우리 반 친구야" 해요', result: '친구들이 멈추고 서의 얼굴이 밝아져요.', mood: '안심' },
                { id: 'laugh', text: '분위기 맞춰 같이 웃어요', result: '서가 혼자라고 느끼고 말이 줄어요.', mood: '외로움', why: '함께 웃으면 편견의 말이 더 커져요.' },
                { id: 'later', text: '나중에 서에게만 위로해요', result: '서는 조금 위로받지만 놀림은 계속돼요.', mood: '걱정', why: '그 자리에서 멈추자고 말하거나 어른에게 알려요.' }], 'stop', 0.2),
              EB('발음이 서툰 하의 발표를 몇몇이 따라 하며 웃어요. 어떻게 할까요?', '한국에 온 지 얼마 안 된 하가 발표하는데, 뒤에서 발음을 흉내 내는 소리가 나요.', [
                { id: 'copy', text: '나도 재밌어서 따라 해요', result: '하가 발표를 멈추고 고개를 숙여요.', mood: '부끄러움', why: '말씨를 흉내 내는 것은 놀림이에요.' },
                { id: 'clap', text: '끝까지 듣고 박수를 쳐요', result: '하가 힘을 얻어 발표를 마쳐요.', mood: '뿌듯함' },
                { id: 'ignore', text: '내 일 아니라며 딴짓해요', result: '흉내가 계속되고 하는 발표가 무서워져요.', mood: '불안', why: '듣는 사람의 태도가 친구를 지킬 수 있어요.' }], 'clap', 0.15),
              EB('도가 무심코 "흑인은 다 달리기 잘하지?"라고 말했어요. 도는 어떻게 할까요?', '체육 시간에 도가 전학 온 친구에게 무심코 "흑인은 다 달리기 잘하지?"라고 말해 버렸어요.', [
                { id: 'sorry', text: '"내가 잘못 말했어, 미안해" 해요', result: '친구가 괜찮다며 함께 웃어요.', mood: '편안함' },
                { id: 'praise', text: '칭찬이었다고 우겨요', result: '친구가 서운한 마음을 털어놓지 못해요.', mood: '속상함', why: '칭찬처럼 들려도 무리로만 보는 말이에요.' },
                { id: 'avoid', text: '어색해서 피해 다녀요', result: '둘 사이가 멀어져요.', mood: '걱정', why: '잘못 말했으면 바로 사과하는 것이 존중이에요.' }], 'sorry', 0.25,
                { conclude: '편견의 말은 멈추고, 내가 한 실수는 바로 사과해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 알게 된 고정관념의 단서는 무엇이었나요?" 출구 1번에서 "원래 그렇다"를 사실로 놓은 학생에게 "모두"에 들어맞는지 다시 묻는다. 2번에서 피부색으로 국적을 짐작하는 보기를 고른 학생에게 겉모습으로 한 사람을 알 수 없다는 점을 짚는다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '다시 가려요', slots: ['사실', '고정관념'], cards: ['언어마다 인사말이 달라요', '○○ 사람은 원래 매워해', '좋아하는 운동은 다 달라요', '외국인은 다 영어 잘해'] }, state: { at: {} }, prompt: '문장을 사실과 고정관념으로 다시 나누어 보세요.',
              target: { sort: { '사실': ['언어마다 인사말이 달라요', '좋아하는 운동은 다 달라요'], '고정관념': ['○○ 사람은 원래 매워해', '외국인은 다 영어 잘해'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '고정관념에서 벗어난 생각은 무엇인가요?', options: ['피부색을 보면 국적을 알 수 있어요', '한 사람마다 좋아하는 것이 달라요', '그 나라 사람은 성격이 다 같아요'], answer: 1, difficulty: 0.1, explain: '겉모습이나 나라로 한 사람을 다 알 수 없어요.' },
            { type: 'short', prompt: '편견의 말을 들었을 때 친구 편에서 할 말을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '고정관념을 넘어 한 사람으로',
          items: [
            { type: 'table', prompt: '사실이면 ○, 고정관념이면 ×를 쓰세요.', columns: ['문장', '○ / ×'], cells: [['나라마다 명절이 달라요', ''], ['그 나라 사람은 다 게을러요', ''], ['피부가 검으면 외국인이에요', ''], ['언어마다 인사말이 달라요', '']], answer: '○, ×, ×, ○' },
            { type: 'choice', prompt: '고정관념일 가능성이 높은 말의 단서에 ○ 하세요.', options: ['"모두, 다, 원래"', '"어떤 걸 좋아해?"', '"같이 할래?"'], answer: '"모두, 다, 원래"' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '편견의 말을 무심코 했다면 바로 ___해요.', answer: '사과' },
            { type: 'short', prompt: '"너네 나라로 돌아가"를 듣는 친구에게 해 줄 말을 쓰세요.' },
          ],
          easy: {
            note: '"이 말이 모든 사람에게 맞을까?"를 물어보세요.',
            items: [
              { type: 'choice', prompt: '친구를 존중하는 말에 ○ 하세요.', options: ['"같이 놀자."', '"말투가 웃겨."'], answer: '"같이 놀자."' },
              { type: 'table', prompt: '괜찮은 말이면 ○, 편견의 말이면 ×를 쓰세요.', columns: ['말', '○ / ×'], cells: [['"천천히 말해도 돼."', ''], ['"반만 한국인이야."', ''], ['"너답게 멋져."', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '여러 친구가 함께 웃는 모습을 그려 보세요.' },
              { type: 'short', prompt: '친구에게 듣고 싶은 존중의 말을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '칭찬처럼 보이는 고정관념 카드를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 칭찬하는 고정관념은 괜찮다고 여긴다 → 좋은 뜻이라도 한 사람을 무리로만 본다는 점을 짚는다. ② 피부색·말씨로 국적을 짐작한다 → 겉모습으로 국적이나 성격을 알 수 없음을 말한다. ③ 편견의 말을 들어도 내 일이 아니라고 여긴다 → 곁에 서는 말과 어른에게 알리기를 함께 연습한다. 학급의 다문화 배경 학생을 사례로 지목하거나 가정 이야기를 발표시키지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '그림·몸짓·쉬운 말로 한국어가 서툰 친구와 이야기하기',
        objective: '한국어가 서툰 친구와 그림·몸짓·쉬운 말로 소통하는 차례를 알고, 도움이 되는 말을 골라 쓸 수 있다.',
        draw: 'two paper children at a desk pointing to paper picture cards and smiling, one drawing on a small paper notepad, with speech bubbles showing simple pictures',
        banner: '말이 달라도 통해요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"말이 하나도 통하지 않는 나라에 갔다면, 화장실을 어떻게 물어볼까요?" 두세 명의 대답을 듣고(기다릴 반응: "그림을 그려요", "몸짓으로요") 시연 단추로 소통하는 차례가 놓이는 모습을 보여 준다. "말을 못 하면 같이 못 놀아요"가 나오면 "말 말고도 마음을 전할 방법이 있을까요?"라고 되묻는다. 오늘은 한국어가 서툰 친구와 이야기하는 방법을 익힌다고 밝힌다.',
          student: '말 없이 몸짓으로만 "같이 놀자"를 짝에게 전해 봅시다.',
          demo: { tool: 'story', options: { cards: [{ id: 'look', text: '얼굴을 보고 웃어요', motif: 'sun' }, { id: 'easy', text: '쉬운 말로 천천히 말해요', motif: 'flower' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['look', 'easy'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 소통하는 차례 놓고 말풍선 채우기', minutes: 14, tool: 'story',
            teacher: '"말이 잘 안 통할 때 무엇부터 해야 할까요?" 1번에서 차례를 놓으며 각 단계가 왜 필요한지 말하게 한다. 2번은 친구가 알아들었는지 확인하는 단계를 빠뜨리기 쉽다 — "끄덕이는 것이 꼭 알아들었다는 뜻일까요?"라고 묻는다. 3번 말풍선에서 짧고 쉬운 말을 고르게 하고, 어려운 낱말·빠른 말이 왜 어려운지 짚는다.',
            task: '한국어가 서툰 친구와 소통하는 차례를 놓고, 도움이 되는 말을 말풍선에 채워요.',
            levels: LV,
            items: [
              SO('전학 온 친구에게 급식실 가는 길을 알려 주는 차례를 놓아 보세요.', '급식실 가는 길', ['먼저', '다음', '그다음', '마지막'], [{ id: 'c1', text: '눈을 맞추고 웃어요', motif: 'sun' }, { id: 'c2', text: '"밥 먹으러 가자" 천천히', motif: 'flower' }, { id: 'c3', text: '손으로 길을 가리켜요', motif: 'leaf' }, { id: 'c4', text: '함께 걸어가요', motif: 'house' }], ['c1', 'c2', 'c3', 'c4'], 0.15),
              SO('모둠 활동 방법을 알려 주는 차례를 놓아 보세요.', '모둠 활동 알려 주기', ['먼저', '다음', '마지막'], [{ id: 'm1', text: '그림으로 할 일을 그려요', motif: 'star' }, { id: 'm2', text: '직접 한 번 보여 줘요', motif: 'tree' }, { id: 'm3', text: '알았는지 다시 물어요', motif: 'cloud' }], ['m1', 'm2', 'm3'], 0.2),
              SF('준이가 할 말을 말풍선에 채워 보세요.', [{ id: 'b1', who: '준', motif: 'sun', label: '___ 같이 하자.' }, { id: 'b2', who: '준', motif: 'flower', label: '모르면 ___.' }], ['우리', '언제든 물어봐', '너는 빠져', '그것도 몰라?'], { b1: '우리', b2: '언제든 물어봐' }, 0.25,
                { conclude: '눈 맞추기, 쉬운 말, 그림·몸짓, 다시 묻기로 말이 달라도 통할 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 도움이 되는 방법과 어렵게 하는 방법 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"이렇게 하면 친구가 더 잘 알아들을까요?" 1번에서 "크게 소리 지르기"를 돕는 방법으로 놓는 학생에게 소리 크기보다 쉬운 말과 속도가 중요하다는 점을 짚는다. 2번은 도움이 친구를 "아무것도 못 하는 사람"으로 대하는 것이 아니라는 점을 말한다 — 대신 해 주기보다 함께 하기. 3번은 친구 나라의 말로 인사를 배워 보는 것도 존중임을 알려 준다.',
            task: '소통 방법을 돕는 것과 어렵게 하는 것으로 나누고, 존중하는 도움을 골라요.',
            levels: LV,
            items: [
              MS('소통 방법을 돕는 것과 어렵게 하는 것으로 나누어 보세요.', '소통 방법', ['도움이 돼요', '어렵게 해요'], ['짧은 문장으로 말해요', '귀에 대고 소리쳐요', '그림 카드를 보여 줘요', '줄임말을 빠르게 써요'], { '도움이 돼요': ['짧은 문장으로 말해요', '그림 카드를 보여 줘요'], '어렵게 해요': ['귀에 대고 소리쳐요', '줄임말을 빠르게 써요'] }, 0.15),
              MP('친구를 존중하는 도움만 골라 담아 보세요.', '존중하는 도움', ['함께 해 보자고 해요', '친구 말로 인사 배워요', '숙제를 대신 다 해 줘요', '아무 일도 안 시켜요'], ['함께 해 보자고 해요', '친구 말로 인사 배워요'], 0.2),
              MM('상황과 알맞은 소통 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '이럴 땐', [{ id: 's1', label: '준비물 이름을 몰라요.' }, { id: 's2', label: '놀이 규칙을 몰라요.' }, { id: 's3', label: '내 말을 못 알아들었어요.' }], ['실물을 보여 줘요', '직접 해 보여요', '더 쉬운 말로 다시', '그냥 넘어가요'], { s1: '실물을 보여 줘요', s2: '직접 해 보여요', s3: '더 쉬운 말로 다시' }, 0.25,
                { conclude: '대신 해 주기보다 함께 하고, 상황에 맞는 방법을 골라 소통해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"내일 한국어가 서툰 친구를 만난다면 어떤 방법을 먼저 쓸까요?" 출구 1번에서 "통역할 사람을 기다려요"를 고른 학생에게 기다리는 동안에도 그림·몸짓으로 함께할 수 있음을 짚는다. 2번에서 크게 말하기를 고른 학생에게 쉬운 말과 속도가 더 중요하다고 다시 말해 준다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '체육 시간, 새로 온 친구가 피구 규칙을 몰라 경기장 밖에 서 있어요.', choices: [
              { id: 'show', text: '공을 들고 직접 보여 주며 알려요', result: '친구가 규칙을 알고 함께 피구를 해요.', mood: '기쁨' },
              { id: 'wait', text: '통역할 사람이 올 때까지 둬요', result: '친구는 그 시간 내내 혼자 구경해요.', mood: '외로움', why: '기다리는 동안에도 몸짓으로 알려 줄 수 있어요.' },
              { id: 'fast', text: '규칙을 빠르게 말로만 설명해요', result: '친구가 알아듣지 못해 당황해요.', mood: '불안', why: '빠른 말보다 보여 주기가 쉽게 전해져요.' }] }, state: { choice: null }, prompt: '규칙을 모르는 친구에게 어떻게 할지 골라 보세요.', target: { choice: 'show' }, difficulty: 0.15 },
            { type: 'choice', prompt: '한국어가 서툰 친구와 이야기할 때 가장 도움이 되는 것은 무엇인가요?', options: ['큰 소리로 말하기', '쉬운 말로 천천히 말하기', '줄임말 많이 쓰기'], answer: 1, difficulty: 0.1, explain: '소리 크기보다 쉬운 말과 속도가 중요해요.' },
            { type: 'short', prompt: '새로 온 친구에게 건넬 첫인사를 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '말이 달라도 통하는 방법',
          items: [
            { type: 'table', prompt: '상황에 알맞은 소통 방법을 쓰세요.', columns: ['상황', '소통 방법'], cells: [['준비물 이름을 몰라요', ''], ['놀이 규칙을 몰라요', ''], ['내 말을 못 알아들었어요', ''], ['급식실 위치를 몰라요', '']], answer: '실물 보여 주기 / 직접 해 보이기 / 더 쉬운 말로 다시 말하기 / 손으로 가리키며 함께 가기' },
            { type: 'choice', prompt: '존중하는 도움에 ○ 하세요.', options: ['숙제를 대신 다 해 줘요', '함께 해 보자고 해요', '아무 일도 안 시켜요'], answer: '함께 해 보자고 해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '말한 뒤에는 친구가 알아들었는지 다시 ___봐요.', answer: '물어' },
            { type: 'short', prompt: '친구 나라의 말로 배워 보고 싶은 말을 쓰고 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"말 말고 어떻게 보여 줄 수 있을까?"를 생각해 보세요.',
            items: [
              { type: 'choice', prompt: '도움이 되는 방법에 ○ 하세요.', options: ['그림을 보여 줘요', '빠르게 말해요'], answer: '그림을 보여 줘요' },
              { type: 'table', prompt: '도움이 되면 ○, 어렵게 하면 ×를 쓰세요.', columns: ['방법', '○ / ×'], cells: [['천천히 말해요', ''], ['소리쳐요', ''], ['직접 보여 줘요', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '그림으로 "같이 놀자"를 전하는 모습을 그려 보세요.' },
              { type: 'short', prompt: '새 친구에게 할 인사를 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 순서 카드는 놓을 때마다 맞는지 보여요.', '"대신 다 해 줘요"처럼 친절해 보이는 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 크게 말하면 잘 알아듣는다고 여긴다 → 쉬운 낱말·짧은 문장·속도가 중요하다는 점을 짚는다. ② 도와준다며 모든 일을 대신 해 준다 → 함께 하기가 존중임을 말한다. ③ 알아들었는지 확인하지 않는다 → 다시 묻기 단계를 꼭 넣게 한다. 실제 학급의 다문화 배경 학생에게 시범을 맡기거나 모국어로 말해 보라고 시키지 않는다.',
      }),
    ],
  });
})();
