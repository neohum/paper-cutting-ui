/* 4학년 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상). g4-cc-saf-cyber 차시와 겹치지 않게 잠·함께 있는 시간에 초점. 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 4, CODE = 'digital';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '인터넷·스마트폰 과의존 예방';
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
    flow: '4학년 인터넷·스마트폰 과의존 예방 단원은 스마트폰이 "잠"과 "함께 있는 사람"을 빼앗지 않도록 생활 속 약속을 세우는 2차시입니다. 1차시에는 잠들기 전 화면 사용이 잠과 다음 날 아침에 이어지는 흐름을 이야기 차례로 살피고 잠자리 약속을 세웁니다. 2차시에는 식사·대화·놀이 시간에 화면을 내려놓고 함께 있는 사람에게 집중하는 갈림길을 연습합니다. 근거는 지능정보화 기본법 제54조(학기별 1회 이상)입니다. 사용 시간 들여다보기·과의존 신호·게임 시간 약속·눈과 몸 쉬기·화면 밖 놀이는 같은 학년 사이버 중독 예방(g4-cc-saf-cyber) 단원이 다루므로 되풀이하지 않으며, 사이버 중독 예방(g4-cc-saf-cyber) 단원과 연계해 시수 인정 가능(학교 결정)합니다. 5학년(심심함·답장 압박), 6학년(AI 챗봇 의존·디지털 균형 캠페인)으로 이어집니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '잠들기 전 화면이 내 아침을 바꾸는 과정 살피기',
        objective: '잠들기 전 스마트폰 사용이 잠과 다음 날 생활에 주는 영향을 차례대로 설명하고, 나의 잠자리 약속을 세울 수 있다.',
        draw: 'a paper bedroom at night with a glowing phone placed outside the room on a shelf, a child sleeping peacefully under a paper moon and stars',
        banner: '화면은 끄고 꿈나라로', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"잠자리에 누워서 휴대전화를 보면 잠이 금방 올까요?" 두세 명의 대답을 듣고(기다릴 반응: "더 안 와요", "보다 보면 늦게 자요") 시연 단추로 잠이 늦어지는 차례 카드가 놓이는 모습을 보여 준다. "잠이 안 와서 보는 거예요"가 나오면 "화면을 볼수록 잠이 더 잘 올까요, 덜 올까요?"라고 되묻는다. 오늘은 잠들기 전 화면이 다음 날을 어떻게 바꾸는지 살피고 잠자리 약속을 세운다고 밝힌다.',
          student: '푹 잔 다음 날과 늦게 잔 다음 날 아침은 어떻게 다른지 짝에게 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [{ id: 'late', text: '누워서 영상을 봐요', motif: 'star' }, { id: 'tired', text: '아침에 일어나기 힘들어요', motif: 'cloud' }], slots: ['밤', '아침'], shuffle: false }, sequence: [{ order: ['late', 'tired'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 잠들기 전 화면이 아침까지 이어지는 차례 놓기', minutes: 14, tool: 'story',
            teacher: '"그다음에는 어떤 일이 생길까요?" 카드를 놓을 때마다 앞 장면이 다음 장면의 까닭이 되는지 말하게 한다. 1번에서 "한 편만 더"가 이어지는 까닭을 물어, 다음 영상이 저절로 이어지면 멈추기 어렵다는 점을 짚는다. 2번에서 늦잠이 학교생활까지 바꾼다는 것을 확인한다. 3번은 화면을 끄는 쪽의 이야기로, 습관을 바꾸면 아침이 달라짐을 보여 준다.',
            task: '잠들기 전 화면 사용이 다음 날까지 이어지는 이야기를 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('잠자리에서 영상을 보다 잠이 늦어지는 차례를 놓아 보세요.', '한 편만 더', ['처음', '다음', '그다음', '끝'], [{ id: 'a', text: '누워서 영상을 켜요', motif: 'star' }, { id: 'b', text: '다음 영상이 이어져요', motif: 'cloud' }, { id: 'c', text: '"한 편만 더" 해요', motif: 'leaf' }, { id: 'd', text: '자정이 넘어 잠들어요', motif: 'house' }], ['a', 'b', 'c', 'd'], 0.15),
              SO('늦게 잔 다음 날 생기는 일을 차례대로 놓아 보세요.', '다음 날 아침', ['먼저', '다음', '마지막'], [{ id: 'e', text: '아침에 못 일어나요', motif: 'cloud' }, { id: 'f', text: '아침밥을 거르고 뛰어요', motif: 'house' }, { id: 'g', text: '수업 시간에 졸려요', motif: 'tree' }], ['e', 'f', 'g'], 0.2),
              SO('잠자리 습관을 바꾼 도의 이야기를 차례대로 놓아 보세요.', '도의 새 약속', ['처음', '다음', '그다음', '끝'], [{ id: 'h', text: '휴대전화를 거실에 둬요', motif: 'house' }, { id: 'i', text: '책을 조금 읽어요', motif: 'leaf' }, { id: 'j', text: '일찍 잠이 들어요', motif: 'star' }, { id: 'k', text: '상쾌하게 일어나요', motif: 'sun' }], ['h', 'i', 'j', 'k'], 0.25,
                { conclude: '잠들기 전 화면을 끄면 잠이 깊어지고 다음 날 아침이 상쾌해져요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 잠자리 약속 정하기', minutes: 13, tool: 'mindmap',
            teacher: '"잠을 지키는 약속에는 무엇이 있을까요?" 1번에서 "불 끄고 이불 속에서 보기"를 잠을 지키는 약속으로 놓는 학생에게 "어두운 데서 보면 눈과 잠은 어떨까요?"라고 묻는다. 2번에서 자명종 대신 휴대전화를 머리맡에 두면 알림 때문에 깨기 쉽다는 점을 짚는다. 3번은 가족과 함께 지킬 약속을 고르게 해 혼자만의 의지가 아니라 환경을 바꾸는 방법도 있음을 말해 준다.',
            task: '잠을 지키는 습관과 잠을 방해하는 습관을 나누고, 잠자리 약속을 골라요.',
            levels: LV,
            items: [
              MS('잠을 지키는 습관과 잠을 방해하는 습관으로 나누어 보세요.', '잠과 습관', ['잠을 지켜요', '잠을 방해해요'], ['이불 속에서 게임해요', '자기 전 화면을 꺼요', '정한 시간에 누워요', '알림을 켜 두고 자요'], { '잠을 지켜요': ['자기 전 화면을 꺼요', '정한 시간에 누워요'], '잠을 방해해요': ['이불 속에서 게임해요', '알림을 켜 두고 자요'] }, 0.15),
              MM('잠자리 고민과 알맞은 해결 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '고민과 해결', [{ id: 's1', label: '밤에 알림 소리에 깨요.' }, { id: 's2', label: '누우면 자꾸 휴대전화를 집어요.' }, { id: 's3', label: '잠이 안 와서 심심해요.' }], ['방해 금지 켜기', '휴대전화 거실에 두기', '조용한 책 읽기', '영상 한 편 더 보기'], { s1: '방해 금지 켜기', s2: '휴대전화 거실에 두기', s3: '조용한 책 읽기' }, 0.2),
              MP('가족과 함께 정하면 좋은 잠자리 약속만 골라 담아 보세요.', '가족 잠자리 약속', ['밤엔 휴대전화 충전 자리', '잠자기 전 이야기 시간', '각자 방에서 영상 보기', '늦게까지 게임 허락'], ['밤엔 휴대전화 충전 자리', '잠자기 전 이야기 시간'], 0.25,
                { conclude: '휴대전화를 잠자리 밖에 두는 것처럼 환경을 바꾸면 약속을 지키기 쉬워요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 밤부터 지킬 잠자리 약속 하나를 마음속으로 정해 볼까요?" 원하는 학생만 발표하게 한다. 출구 1번에서 휴대전화를 베개 옆에 두는 보기를 고른 학생에게 알림과 유혹을 떠올리게 한다. 2번에서 "보다 보면 졸려진다"를 고른 학생에게는 밝은 화면이 오히려 잠을 늦춘다는 점을 다시 짚는다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '내일 현장 체험학습이라 일찍 자야 하는데, 친구에게 새 영상 링크가 왔어요.', choices: [
              { id: 'tomorrow', text: '내일 보기로 하고 화면을 꺼요', result: '푹 자고 체험학습을 즐겁게 다녀와요.', mood: '즐거움' },
              { id: 'watch', text: '한 편만 보고 자려고 켜요', result: '영상이 이어져 늦게 잠들고 버스에서 졸아요.', mood: '피곤함', why: '한 편이 여러 편으로 이어지기 쉬워요.' },
              { id: 'pillow', text: '베개 옆에 두고 누워요', result: '알림이 올 때마다 깨서 잠을 설쳐요.', mood: '짜증', why: '휴대전화는 잠자리 밖에 두어요.' }] }, state: { choice: null }, prompt: '체험학습 전날 밤 어떻게 할지 골라 보세요.', target: { choice: 'tomorrow' }, difficulty: 0.15 },
            { type: 'choice', prompt: '잠들기 전 스마트폰 사용에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['보다 보면 졸려서 잠이 잘 와요', '잠이 늦어지고 다음 날 피곤해질 수 있어요', '어두운 데서 보면 눈이 쉬어요'], answer: 1, difficulty: 0.1, explain: '잠들기 전 화면은 잠을 늦추고 다음 날 생활에 영향을 줘요.' },
            { type: 'short', prompt: '오늘 밤부터 지킬 나의 잠자리 약속을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '화면을 끄고 푹 자는 잠자리 약속',
          items: [
            { type: 'table', prompt: '잠을 지키는 습관이면 ○, 방해하는 습관이면 ×를 쓰세요.', columns: ['습관', '○ / ×'], cells: [['자기 전 화면 끄기', ''], ['이불 속에서 게임', ''], ['휴대전화 거실에 두기', ''], ['알림 켜 두고 자기', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '누우면 자꾸 휴대전화를 집게 될 때 좋은 방법에 ○ 하세요.', options: ['머리맡에 두어요', '거실 충전 자리에 두어요', '소리를 크게 켜요'], answer: '거실 충전 자리에 두어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '잠들기 전 화면을 끄면 다음 날 ___이 상쾌해져요.', answer: '아침' },
            { type: 'short', prompt: '잠이 안 올 때 화면 대신 할 수 있는 일을 두 가지 쓰세요.' },
          ],
          easy: {
            note: '"푹 자려면 무엇이 필요할까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '잠을 돕는 습관에 ○ 하세요.', options: ['화면 끄고 눕기', '누워서 영상 보기'], answer: '화면 끄고 눕기' },
              { type: 'table', prompt: '좋은 습관이면 ○, 아니면 ×를 쓰세요.', columns: ['습관', '○ / ×'], cells: [['일찍 자기', ''], ['밤새 게임', ''], ['책 읽고 자기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '휴대전화를 끄고 푹 자는 내 모습을 그려 보세요.' },
              { type: 'short', prompt: '내가 잠자리에 드는 시간을 정해 쓰세요.' },
            ],
          },
        },
        diff: DIFF('차례 카드는 맞는 자리에 놓으면 바로 알려 주고, 결과 장면을 먼저 함께 읽어요.', '그럴듯한 해결("영상 한 편 더")을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 영상을 보면 졸려서 잠이 잘 온다고 여긴다 → 화면이 잠을 늦추고 "한 편만 더"가 이어진다는 흐름을 이야기로 보인다. ② 의지만으로 참으려 한다 → 휴대전화를 잠자리 밖에 두는 등 환경을 바꾸는 방법을 알린다. ③ 늦잠의 영향을 그날 아침만으로 여긴다 → 수업·놀이까지 이어짐을 짚는다. 가정마다 사정이 다르므로 학생의 실제 취침 시각이나 기기 사용 시간을 공개적으로 묻지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '식사와 대화 시간에 화면 내려놓기',
        objective: '식사·대화·놀이 시간에 스마트폰을 내려놓고 함께 있는 사람에게 집중하는 행동을 고르고, 그 까닭을 말할 수 있다.',
        draw: 'a paper family sitting around a dinner table talking and laughing, with their phones resting together in a small paper basket on the side',
        banner: '마주 보면 더 즐거워요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"내가 이야기하는데 상대가 휴대전화만 보고 있으면 어떤 마음일까요?" 두세 명의 대답을 듣고(기다릴 반응: "무시당하는 것 같아요") 시연 단추로 함께 있는 시간의 행동이 나뉘는 모습을 보여 준다. "들으면서 볼 수 있어요"가 나오면 "화면을 보면서 친구 표정도 볼 수 있을까요?"라고 되묻는다. 오늘은 함께 있을 때 화면을 내려놓는 연습을 한다고 밝힌다.',
          student: '가족이나 친구와 마주 보고 이야기하며 즐거웠던 때를 짝에게 짧게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '함께 있을 때', slots: ['마주 봐요', '화면만 봐요'], cards: ['눈을 보며 대답해요', '밥 먹으며 영상 봐요'], shuffle: false }, sequence: [{ sort: { '마주 봐요': ['눈을 보며 대답해요'], '화면만 봐요': ['밥 먹으며 영상 봐요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 함께 있는 시간의 갈림길에서 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 함께 있는 사람의 마음은 어떨까요?" 결과 칸을 소리 내어 읽게 한다. 1번에서 밥 먹으며 영상을 보는 것을 "빨리 먹으려고"라 말하는 학생에게 가족이 나누려던 이야기를 떠올리게 한다. 2번에서 친구 집에 놀러 가서 각자 휴대전화만 보는 것은 함께 논 것이 아님을 짚는다. 3번은 급한 연락일 때는 "잠깐 확인할게"라고 말하고 보는 것이 예의라는 점을 알려 준다.',
            task: '함께 있는 시간에 휴대전화를 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('저녁을 먹는데 서가 휴대전화로 영상을 켜려고 해요. 어떻게 할까요?', '가족이 모두 모여 저녁을 먹는데, 서는 보던 영상이 궁금해요.', [
                { id: 'down', text: '휴대전화를 내려놓고 이야기해요', result: '가족과 오늘 있었던 일을 나누며 웃어요.', mood: '즐거움' },
                { id: 'watch', text: '밥 먹으며 영상을 봐요', result: '가족이 말을 걸어도 듣지 못해 서운해해요.', mood: '서운함', why: '식사 시간은 가족과 마음을 나누는 시간이에요.' },
                { id: 'hide', text: '식탁 밑에서 몰래 봐요', result: '밥을 흘리고 가족 이야기도 놓쳐요.', mood: '걱정', why: '몰래 보면 둘 다 놓치게 돼요.' }], 'down', 0.15),
              EB('친구 집에 놀러 갔는데 둘 다 휴대전화만 봐요. 준이는 어떻게 할까요?', '모처럼 친구 집에 놀러 왔는데 둘 다 말없이 각자 휴대전화만 보고 있어요.', [
                { id: 'keep', text: '계속 각자 휴대전화를 봐요', result: '헤어질 때 함께 논 기억이 없어요.', mood: '심심함', why: '함께 있어도 화면만 보면 함께 논 것이 아니에요.' },
                { id: 'play', text: '"보드게임 할래?" 하고 제안해요', result: '둘이 깔깔 웃으며 신나게 놀아요.', mood: '즐거움' },
                { id: 'leave', text: '심심하다며 일찍 집에 가요', result: '친구가 서운해하고 다음 약속이 어색해요.', mood: '서운함', why: '함께 할 놀이를 먼저 제안해 볼 수 있어요.' }], 'play', 0.2),
              EB('친구와 이야기하는데 보호자의 연락이 왔어요. 어떻게 할까요?', '친구가 신나게 이야기하는 중에 보호자에게서 메시지가 왔어요.', [
                { id: 'say', text: '"잠깐 확인할게" 하고 보고 돌아와요', result: '친구가 기다렸다가 이야기를 이어 가요.', mood: '편안함' },
                { id: 'silent', text: '말없이 화면을 보며 "응응" 해요', result: '친구가 무시당한 것 같아 말을 멈춰요.', mood: '속상함', why: '확인이 필요하면 상대에게 먼저 말해요.' },
                { id: 'scroll', text: '확인하다 다른 앱도 둘러봐요', result: '친구 이야기는 끝나 버리고 어색해져요.', mood: '어색함', why: '필요한 것만 보고 바로 대화로 돌아와요.' }], 'say', 0.25,
                { conclude: '함께 있을 때는 화면을 내려놓고, 꼭 볼 일이 있으면 먼저 말하고 짧게 봐요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 화면 없는 시간 만들기', minutes: 13, tool: 'mindmap',
            teacher: '"집과 학교에서 화면을 내려놓기 좋은 때는 언제일까요?" 1번에서 길을 걸을 때도 화면을 내려놓아야 하는 까닭(안전)을 함께 말하게 한다. 2번에서 휴대전화 바구니 같은 방법은 가족 모두가 함께 지킬 때 효과가 크다는 점을 짚는다. 3번에서 화면을 내려놓았을 때 얻는 것을 골라 오늘 차시를 정리한다.',
            task: '화면을 내려놓기 좋은 때와 방법을 나누고, 화면 없는 시간에 얻는 것을 골라요.',
            levels: LV,
            items: [
              MS('화면을 내려놓을 때와 써도 괜찮은 때로 나누어 보세요.', '언제 내려놓을까', ['내려놓아요', '써도 괜찮아요'], ['가족과 밥 먹을 때', '정한 시간에 숙제 검색', '친구와 이야기할 때', '보호자와 영상 통화'], { '내려놓아요': ['가족과 밥 먹을 때', '친구와 이야기할 때'], '써도 괜찮아요': ['정한 시간에 숙제 검색', '보호자와 영상 통화'] }, 0.15),
              MM('함께 있는 장면과 화면 없는 시간을 만드는 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '방법 잇기', [{ id: 's1', label: '가족 저녁 식사 시간' }, { id: 's2', label: '친구와 노는 시간' }, { id: 's3', label: '가족 나들이 날' }], ['식탁 옆 휴대전화 바구니', '보드게임 함께하기', '사진만 찍고 넣어 두기', '각자 영상 보기'], { s1: '식탁 옆 휴대전화 바구니', s2: '보드게임 함께하기', s3: '사진만 찍고 넣어 두기' }, 0.2),
              MP('화면을 내려놓았을 때 얻는 것만 골라 담아 보세요.', '내려놓으면 얻는 것', ['가족과 나눈 이야기', '친구 표정 읽기', '놓친 대화', '서운한 마음'], ['가족과 나눈 이야기', '친구 표정 읽기'], 0.25,
                { conclude: '화면을 내려놓으면 함께 있는 사람과 더 가까워져요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"이번 주에 우리 집에서 화면 없는 시간을 언제 만들어 볼까요?" 원하는 학생만 말하게 한다. 출구 1번에서 "밥 먹을 때 보는 영상"을 써도 괜찮은 때에 놓은 학생에게 식사 시간의 대화를 다시 떠올리게 한다. 2번에서 "말없이 보기"를 고른 학생에게는 먼저 말하는 예의를 짚는다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '함께 있을 때 예절', slots: ['예의 있어요', '예의 없어요'], cards: ['눈 맞추며 대답해요', '대화 중 몰래 게임해요', '"잠깐 볼게" 말해요', '식사 중 영상 크게 틀어요'] }, state: { at: {} }, prompt: '함께 있을 때 휴대전화 예절을 예의 있는 것과 없는 것으로 나누어 보세요.',
              target: { sort: { '예의 있어요': ['눈 맞추며 대답해요', '"잠깐 볼게" 말해요'], '예의 없어요': ['대화 중 몰래 게임해요', '식사 중 영상 크게 틀어요'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '친구와 이야기하는 중에 꼭 확인할 연락이 왔을 때 알맞은 행동은 무엇인가요?', options: ['말없이 화면을 봐요', '"잠깐 확인할게" 말하고 짧게 봐요', '확인하며 다른 앱도 봐요'], answer: 1, difficulty: 0.1, explain: '먼저 말하고, 필요한 것만 보고 대화로 돌아와요.' },
            { type: 'short', prompt: '화면 없는 시간에 가족이나 친구와 하고 싶은 일을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '함께 있을 땐 화면을 내려놓아요',
          items: [
            { type: 'table', prompt: '화면을 내려놓을 때면 ○, 써도 괜찮을 때면 △를 쓰세요.', columns: ['때', '○ / △'], cells: [['가족과 밥 먹을 때', ''], ['정한 시간 숙제 검색', ''], ['친구와 이야기할 때', ''], ['길을 걸을 때', '']], answer: '○, △, ○, ○' },
            { type: 'choice', prompt: '친구 집에서 둘 다 휴대전화만 볼 때 알맞은 행동에 ○ 하세요.', options: ['계속 각자 봐요', '함께 할 놀이를 제안해요', '말없이 집에 가요'], answer: '함께 할 놀이를 제안해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '함께 있을 때 꼭 확인할 연락이 오면 먼저 ___하고 짧게 봐요.', answer: '말' },
            { type: 'short', prompt: '우리 집 화면 없는 시간 약속을 하나 만들어 쓰세요.' },
          ],
          easy: {
            note: '"마주 보면 무엇이 좋을까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '밥 먹을 때 좋은 행동에 ○ 하세요.', options: ['가족과 이야기해요', '영상을 봐요'], answer: '가족과 이야기해요' },
              { type: 'table', prompt: '좋은 행동이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['눈 보고 대답', ''], ['대화 중 게임', ''], ['함께 보드게임', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '가족이 마주 보고 웃는 모습을 그려 보세요.' },
              { type: 'short', prompt: '가족과 하고 싶은 놀이를 쓰세요.' },
            ],
          },
        },
        diff: DIFF('갈림길 결과가 처음부터 보이고, 카드는 맞는 칸에 놓으면 바로 알려 줘요.', '"확인하며 다른 앱도"처럼 슬쩍 넘어가는 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 들으면서 화면을 봐도 된다고 여긴다 → 표정과 마음을 놓친다는 점을 짚는다. ② 모든 사용을 나쁘다고 여긴다 → 정한 시간의 검색·보호자와의 연락처럼 필요한 사용이 있음을 함께 구별한다. ③ 함께 있어도 각자 화면을 보면 함께 논 것이라 여긴다 → 함께한 기억을 떠올리게 한다. 가정의 기기 사용 규칙을 평가하거나 학생의 가족 사정을 묻지 않는다.',
      }),
    ],
  });
})();
