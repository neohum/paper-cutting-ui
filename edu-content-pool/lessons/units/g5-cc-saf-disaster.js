/* 5학년 창체 안전교육 — 재난안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 재난안전.
 * (화재의 원인·대피·신고, 자연 재난과 안전한 행동, 폭발·붕괴·테러 위협 유형별 대처, 재난 유형별 대비 훈련 — 화재·지진 대피 훈련 2종) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g5-cc-saf-disaster';
  const UNIT = 'g5-창체-saf-disaster';
  const TITLE = '재난안전';
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
    flow: '5학년 재난안전은 "상황을 읽고 판단하고, 역할을 나누어 함께 움직이는" 단원입니다. 1차시에는 문 손잡이와 연기를 살펴 대피할지 구조를 기다릴지 판단하고, 2차시는 학교 화재 대피 훈련과 묶어 대피 역할을 나누고 소화기 사용 순서(어른이 쓰는 방법)를 알아봅니다. 3차시는 학교 지진 대피 훈련과 묶어 지진 전 대비·흔들릴 때·멈춘 뒤 행동을 시간 순으로 놓고, 4차시에는 호우·태풍·대설 주의보와 경보를 읽고 대비 행동을 고릅니다. 5~6차시에는 고시의 사회 재난 항목에 따라 건물 붕괴 징후와 수상한 물건·테러 위협 때 만지지 않고 멀리 떨어져 112·119에 알리는 판단을 연습합니다. 2·3차시는 학교 연간 재난 대비 훈련(유형을 달리해 연 2종 이상)과 같은 날 운영하면 좋고, 사회 재난은 공포를 키우지 않도록 행동 요령 중심으로 다룹니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '문 손잡이·연기를 보고 대피와 구조 요청 판단하기',
        objective: '화재 때 문 손잡이와 연기 상태를 살펴 대피할지, 문을 닫고 구조를 요청할지 판단할 수 있다.',
        draw: 'a child touching a paper door handle with the back of the hand, and another scene of children waving a bright cloth at an open window while a fire truck arrives',
        banner: '나갈까, 기다릴까', extra: [{ motif: 'cloud', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"불이 나면 무조건 문을 열고 나가야 할까요?" 대답을 듣고(기다릴 반응: "나가요", "연기가 있으면 안 돼요") "나갈 수 있으면 빨리 대피하는 게 먼저예요. 하지만 문 밖에 불과 연기가 가득하면 문을 닫고 구조를 기다리는 것이 더 안전할 때도 있어요"라고 말한다. 시연 단추로 갈림길 보기가 고르는 모습을 보여 준다.',
          student: '불이 났을 때 나가기 전에 확인할 것을 짝과 하나씩 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '문 손잡이가 차가워요.', choices: [{ id: 'go', text: '조금 열어 살피고 대피해요', result: '안전하게 나가요.', mood: '안심' }, { id: 'stay', text: '그냥 방에 숨어요', result: '대피할 시간을 놓쳐요.', mood: '걱정' }] }, sequence: [{ choice: 'go' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 나갈까, 기다릴까', tool: 'emotion',
            teacher: '"이 상황에서는 대피와 구조 요청 가운데 무엇이 맞을까요? 까닭을 들어 말해요." 손잡이가 뜨겁거나 문틈으로 연기가 들어오면 열지 않는다고 짚는다. 구조를 기다릴 때는 젖은 천으로 문틈을 막고, 창문에서 밝은 천을 흔들며, 119에 위치를 알린다. 숨는 것(옷장·침대 밑)은 구조대가 찾기 어려워 하지 않는다.',
            task: '화재 상황을 읽고 대피할지 구조를 요청할지 골라요.',
            levels: LVB,
            items: [
              EB('손잡이가 차갑고 복도에 연기가 없어요. 어떻게 할까요?', '집에서 화재 경보가 울려요. 방문 손잡이는 차갑고 문틈에 연기가 없어요.', [
                { id: 'go', text: '문을 조금 열어 살핀 뒤 낮게 대피해요', result: '계단으로 안전하게 밖에 나가요.', mood: '안심' },
                { id: 'hide', text: '옷장 안에 숨어요', result: '구조대가 찾기 어려워요.', mood: '무서움', why: '숨지 말고 나갈 수 있으면 대피해요.' },
                { id: 'pack', text: '가방을 싸고 천천히 나가요', result: '대피할 시간을 놓쳐요.', mood: '걱정', why: '물건은 두고 바로 나가요.' }], 'go', 0.2),
              EB('손잡이가 뜨겁고 문틈으로 연기가 들어와요. 어떻게 할까요?', '방문 손잡이가 뜨겁고 문틈으로 연기가 스며들어요.', [
                { id: 'open', text: '문을 활짝 열고 뛰어나가요', result: '불과 연기가 방으로 밀려들어요.', mood: '무서움', why: '뜨거운 문은 열지 않아요.' },
                { id: 'seal', text: '젖은 천으로 문틈을 막고 창문에서 구조 요청', result: '연기를 막고 구조대가 나를 찾아요.', mood: '안심' },
                { id: 'bed', text: '침대 밑에 숨어요', result: '연기가 차고 찾기 어려워요.', mood: '불안', why: '창문 쪽에서 구조를 요청해요.' }], 'seal', 0.3),
              EB('창가에서 구조를 기다려요. 무엇을 할까요?', '방에서 구조를 기다리는 중이에요. 휴대전화가 있어요.', [
                { id: 'call', text: '119에 몇 층 어느 방인지 알려요', result: '구조대가 바로 나를 찾아와요.', mood: '안심' },
                { id: 'jump', text: '창문으로 뛰어내려요', result: '크게 다칠 수 있어요.', mood: '무서움', why: '뛰어내리지 말고 구조를 기다려요.' },
                { id: 'quiet', text: '조용히 기다려요', result: '내가 여기 있는 줄 몰라요.', mood: '걱정', why: '천을 흔들고 119에 위치를 알려요.' }], 'call', 0.3,
                { conclude: '나갈 수 있으면 대피가 먼저, 길이 막혔으면 문틈을 막고 창가에서 위치를 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 판단 기준 정리', tool: 'emotion',
            teacher: '"오늘 판단에 쓴 기준을 정리해 볼까요?" 손잡이 온도, 문틈 연기, 대피로 상태를 기준으로 한다고 짚는다. 아파트에는 대피 공간이나 경량 칸막이가 있는 곳이 있으니 우리 집 구조를 가족과 확인해 보자고 말한다(없는 집도 있다).',
            task: '여러 상황에서 대피할지 기다릴지 골라요.',
            levels: LVB,
            items: [
              EB('계단에 연기가 조금 있지만 아래층은 맑아요. 어떻게 할까요?', '아파트 복도에 나왔더니 계단 위쪽에 연기가 조금 있고 아래는 맑아요.', [
                { id: 'down', text: '코·입 막고 낮게 계단으로 내려가요', result: '연기를 피해 밖으로 나가요.', mood: '안심' },
                { id: 'up', text: '옥상으로 올라가요', result: '연기는 위로 올라가 더 위험할 수 있어요.', mood: '걱정', why: '연기가 없는 아래쪽으로 대피해요.' },
                { id: 'lift', text: '승강기를 기다려요', result: '승강기가 멈출 수 있어요.', mood: '불안', why: '화재 때 승강기는 타지 않아요.' }], 'down', 0.3),
              EB('대피했는데 동생 인형이 집에 있어요. 어떻게 할까요?', '밖으로 대피했는데 동생이 인형을 두고 왔다며 울어요.', [
                { id: 'back', text: '다시 들어가 가져와요', result: '연기 속에서 위험해져요.', mood: '무서움', why: '대피한 뒤에는 절대 다시 들어가지 않아요.' },
                { id: 'comfort', text: '동생을 달래며 밖에서 기다려요', result: '모두 안전하게 소방관을 기다려요.', mood: '편안함' },
                { id: 'ask', text: '친구에게 가져와 달라고 해요', result: '친구가 위험해져요.', mood: '걱정', why: '누구도 다시 들어가지 않아요.' }], 'comfort', 0.25),
              EB('연기 속에서 길이 안 보여요. 어떻게 할까요?', '복도에 연기가 차 앞이 잘 안 보여요. 대피할 길은 열려 있어요.', [
                { id: 'wall', text: '낮게 엎드려 벽을 짚고 유도등을 따라가요', result: '연기를 덜 마시며 나가요.', mood: '안심' },
                { id: 'stand', text: '서서 빨리 뛰어요', result: '연기를 많이 마셔요.', mood: '불안', why: '연기 속에서는 낮은 자세로 가요.' },
                { id: 'stop', text: '그 자리에 앉아 울어요', result: '연기가 점점 차요.', mood: '무서움', why: '길이 열려 있으면 낮게 대피해요.' }], 'wall', 0.25,
                { conclude: '판단 기준은 손잡이·문틈 연기·대피로 상태이고, 대피한 뒤에는 다시 들어가지 않아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 판단한 기준 세 가지를 말해 볼까요?" 출구 1번에서 뜨거운 문을 여는 보기를 고른 학생에게 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '문틈으로 연기가 들어와요. 바른 행동은?', options: ['젖은 천으로 문틈을 막아요', '문을 활짝 열어요', '옷장에 숨어요'], answer: 0, difficulty: 0.25, explain: '연기를 막고 창가에서 구조를 요청해요.' },
            { type: 'choice', prompt: '구조를 기다릴 때 119에 알릴 것은?', options: ['몇 층 어느 방인지', '좋아하는 음식', '학교 이름만'], answer: 0, difficulty: 0.2, explain: '내가 있는 위치를 정확히 알려요.' },
            { type: 'short', prompt: '대피한 뒤 다시 들어가면 안 되는 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '대피와 구조 요청 판단',
        ws: [
          { type: 'table', prompt: '상황에 맞는 판단을 쓰세요.', columns: ['상황', '판단(대피/구조 요청)과 할 일'], cells: [['손잡이 차갑고 연기 없음', ''], ['손잡이 뜨겁고 문틈 연기', ''], ['계단 아래가 맑음', '']], answer: '대피-살피고 낮게 / 구조 요청-문틈 막고 창가에서 / 대피-아래로' },
          { type: 'choice', prompt: '구조를 기다릴 때 하지 않을 일에 ○ 하세요.', options: ['창문에서 뛰어내려요', '천을 흔들어요', '119에 위치를 알려요'], answer: '창문에서 뛰어내려요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '문을 열기 전에 ___의 온도와 문틈 연기를 살펴요.', answer: '손잡이' },
          { type: 'short', prompt: '우리 집에서 대피할 길과 구조를 기다릴 곳을 가족과 정해 쓰세요.' },
        ],
        notes: '근거: 소방청 화재 대피 요령(대피 우선, 대피 불가 시 문틈 막고 구조 요청, 승강기·옥상 대피 지양, 재진입 금지). 자주 보이는 어려움: ① 무조건 문을 연다. ② 숨는다 → 구조대가 찾기 어렵다. ③ 물건을 가지러 다시 들어간다.',
      }),

      LESSON(2, {
        title: '대피 역할 나누고 소화기 순서 익히기',
        objective: '화재 대피 훈련에서 맡을 역할을 나누고, 소화기 사용 순서를 차례대로 말할 수 있다.',
        draw: 'a teacher showing a red paper fire extinguisher with its pin pulled while students in roles hold a class list, a whistle, and point to the exit',
        banner: '역할을 나누면 빨라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'peach' }],
        intro: {
          teacher: '"불이 났을 때 모두가 같은 일을 하면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "빠뜨리는 일이 생겨요") "알리는 사람, 경보기 누르는 사람, 인원 세는 것을 돕는 사람처럼 역할을 나누면 빠르고 안전해요"라고 말한다. 오늘은 훈련 전에 역할과 소화기 순서를 익히고 훈련 뒤 돌아본다고 알린다. 시연 단추로 차례 카드가 놓이는 모습을 보여 준다.',
          student: '우리 반 대피 때 내가 맡을 수 있는 역할을 하나 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '안전핀을 뽑아요', motif: 'star' }, { id: 'd2', text: '노즐을 불 쪽으로', motif: 'sun' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 소화기 사용 순서', tool: 'story',
            teacher: '"소화기는 안전핀 → 노즐 → 손잡이 → 쓸듯이 뿌리기 순서로 써요." 순서를 놓은 뒤 교사가 빈 소화기(교육용)로 동작만 보여 준다. 소화기는 작은 불일 때 어른이 쓰는 것이고, 어린이는 불을 보면 알리고 대피하는 것이 먼저라는 것을 분명히 짚는다. 바람을 등지고 쓴다는 것도 말한다.',
            task: '소화기 사용 순서를 놓아요.',
            levels: LV,
            items: [
              SO('소화기 사용 순서대로 놓아요.', '소화기 사용', ['1', '2', '3', '4'], [{ id: 'f1', text: '안전핀을 뽑아요', motif: 'star' }, { id: 'f2', text: '노즐을 불 쪽으로', motif: 'sun' }, { id: 'f3', text: '손잡이를 움켜쥐어요', motif: 'leaf' }, { id: 'f4', text: '비로 쓸듯 뿌려요', motif: 'cloud' }], ['f1', 'f2', 'f3', 'f4'], 0.25),
              SO('작은 불을 본 어린이의 차례로 놓아요.', '어린이가 불을 보면', ['먼저', '다음', '마지막'], [{ id: 'k1', text: '"불이야!" 알려요', motif: 'sun' }, { id: 'k2', text: '어른·선생님을 불러요', motif: 'house' }, { id: 'k3', text: '밖으로 대피해요', motif: 'tree' }], ['k1', 'k2', 'k3'], 0.25),
              SO('소화기를 쓰는 어른의 자세 차례로 놓아요.', '쓰는 자세', ['먼저', '다음', '마지막'], [{ id: 'p1', text: '바람을 등지고 서요', motif: 'cloud' }, { id: 'p2', text: '불 아래쪽을 겨눠요', motif: 'sun' }, { id: 'p3', text: '불이 크면 대피해요', motif: 'tree' }], ['p1', 'p2', 'p3'], 0.3,
                { conclude: '소화기는 핀·노즐·손잡이·쓸기 순서이고, 어린이는 알리고 대피가 먼저예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 대피 역할과 훈련 돌아보기', tool: 'story',
            teacher: '"오늘 훈련에서 맡을 역할을 정해 볼까요?" 문 가까운 학생 문 열어 두기 돕기, 맨 뒤 학생 남은 친구 확인, 반장 인원 확인 돕기처럼 역할을 나누되 교사가 최종 확인한다. 훈련 신호 → 역할 수행 → 운동장 집결 → 인원 보고 순으로 진행하고 훈련 뒤 돌아본다.',
            task: '역할에 따른 차례를 놓아요.',
            levels: LV,
            items: [
              SO('맨 뒤에 나가는 학생의 차례로 놓아요.', '맨 뒤 역할', ['먼저', '다음', '마지막'], [{ id: 'b1', text: '교실에 남은 친구 확인', motif: 'house' }, { id: 'b2', text: '선생님께 알려요', motif: 'star' }, { id: 'b3', text: '줄 끝에서 따라가요', motif: 'leaf' }], ['b1', 'b2', 'b3'], 0.3),
              SO('운동장에서 인원 확인 차례로 놓아요.', '인원 확인', ['먼저', '다음', '마지막'], [{ id: 'c1', text: '번호 순서로 앉아요', motif: 'flower' }, { id: 'c2', text: '빈자리를 확인해요', motif: 'sun' }, { id: 'c3', text: '선생님이 보고해요', motif: 'house' }], ['c1', 'c2', 'c3'], 0.3),
              SO('훈련을 돌아보는 차례로 놓아요.', '훈련 돌아보기', ['먼저', '다음', '마지막'], [{ id: 'r1', text: '걸린 시간을 들어요', motif: 'sun' }, { id: 'r2', text: '역할별로 잘한 점', motif: 'star' }, { id: 'r3', text: '다음에 고칠 점', motif: 'leaf' }], ['r1', 'r2', 'r3'], 0.25,
                { conclude: '역할을 나누면 빠뜨림 없이 대피하고, 훈련 뒤 돌아보며 더 나아져요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"작은 불을 본 5학년 학생이 가장 먼저 할 일은 무엇이었나요?" (기다릴 반응: "알리고 대피해요") 출구 1번에서 순서를 헷갈린 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '소화기를 쓸 때 가장 먼저 할 일은?', options: ['안전핀을 뽑아요', '손잡이를 움켜쥐어요', '불 위로 뿌려요'], answer: 0, difficulty: 0.2, explain: '안전핀을 뽑아야 손잡이가 눌려요.' },
            { type: 'tool', tool: 'story', options: { cards: [{ id: 'x1', text: '빈자리를 확인해요', motif: 'sun' }, { id: 'x2', text: '번호 순서로 앉아요', motif: 'flower' }, { id: 'x3', text: '선생님이 보고해요', motif: 'house' }], slots: ['먼저', '다음', '마지막'] }, state: { at: {} }, prompt: '훈련 뒤 인원 확인 차례를 다시 놓아요.', target: { order: ['x2', 'x1', 'x3'] }, difficulty: 0.2 },
            { type: 'short', prompt: '오늘 훈련에서 내가 맡은 역할과 잘한 점을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '대피 역할과 소화기',
        ws: [
          { type: 'table', prompt: '소화기 사용 순서에 맞게 1~4를 쓰세요.', columns: ['할 일', '차례'], cells: [['손잡이를 움켜쥐어요', ''], ['비로 쓸듯 뿌려요', ''], ['안전핀을 뽑아요', ''], ['노즐을 불 쪽으로', '']], answer: '3, 4, 1, 2' },
          { type: 'table', prompt: '우리 반 대피 역할을 정해 쓰세요(이름 대신 "1모둠"처럼).', columns: ['역할', '맡은 사람'], cells: [['남은 친구 확인', ''], ['인원 확인 돕기', ''], ['문 열어 두기 돕기', '']] },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '어린이는 불을 보면 소화기보다 ___고 대피하는 것이 먼저예요.', answer: '알리' },
          { type: 'short', prompt: '역할을 나누어 대피하면 좋은 점을 쓰세요.' },
        ],
        notes: '훈련 운영: 역할 분담 화재 대피 훈련 — 경보 → 역할 수행(교사 최종 확인) → 운동장 집결 → 인원 보고 → 소요 시간·돌아보기(학교 재난 대비 훈련, 연 2종 이상 중 화재). 근거: 소방청 소화기 사용법(안전핀 → 노즐 → 손잡이 → 쓸듯이 방사). 소화기 실습은 교육용 소화기로 교사·소방 교육 담당이 시범하고 학생이 분말 소화기를 직접 쏘지 않는다. 자주 보이는 어려움: ① 소화기가 있으면 직접 끄려 한다. ② 역할에 매달려 대피가 늦어진다 → 역할은 대피하면서 한다.',
      }),

      LESSON(3, {
        title: '지진 전·중·후 행동 시간 순으로 놓고 대피 훈련하기',
        objective: '지진 대비부터 흔들릴 때, 멈춘 뒤의 행동을 시간 순으로 놓고 대피 훈련에서 지킬 수 있다.',
        draw: 'a paper timeline strip from left to right: a family securing a bookshelf, a child under a table during shaking, and people gathering in an open park afterwards',
        banner: '전 → 중 → 후', extra: [{ motif: 'mountain', x: 300, y: 214, color: 'lavender' }],
        intro: {
          teacher: '"지진 안전은 흔들릴 때만 생각하면 될까요?" 대답을 듣고(기다릴 반응: "미리 준비해요") "지진 전 대비, 흔들릴 때, 멈춘 뒤 할 일이 따로 있어요. 오늘은 시간 순으로 놓아 보고 대피 훈련도 해요"라고 말한다. 시연 단추로 시간 띠에 카드가 놓이는 모습을 보여 준다.',
          student: '지진이 나기 전에 집에서 미리 할 수 있는 일을 짝에게 하나 말해 봐요.',
          demo: { tool: 'timeline', options: { cards: [{ id: 'd1', text: '책장을 벽에 고정해요' }, { id: 'd2', text: '탁자 아래로 들어가요' }], axis: ['지진 전', '지진 후'] }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지진 전·중·후 순서', tool: 'timeline',
            teacher: '"이 행동은 지진 전, 흔들릴 때, 멈춘 뒤 가운데 언제 할 일일까요?" 지진 전에는 가구 고정·대피 장소 알아 두기·비상용품 준비, 흔들릴 때는 몸 보호, 멈춘 뒤에는 불·가스 확인(어른), 문 열어 출구 확보, 계단으로 넓은 곳 대피라고 짚는다. 멈춘 뒤 바로 집에 들어가지 않고 안내를 따른다.',
            task: '지진 행동 카드를 시간 순서대로 놓아요.',
            levels: LV,
            items: [
              { prompt: '집에서 지진 행동을 시간 순서대로 놓아요.', toolOptions: { cards: [{ id: 'h1', text: '무거운 물건은 아래 칸에' }, { id: 'h2', text: '탁자 다리를 잡아요' }, { id: 'h3', text: '문을 열어 출구 확보' }, { id: 'h4', text: '계단으로 넓은 곳에' }], axis: ['지진 전', '지진 후'] }, target: { order: ['h1', 'h2', 'h3', 'h4'] }, difficulty: 0.25 },
              { prompt: '학교에서 지진 행동을 시간 순서대로 놓아요.', toolOptions: { cards: [{ id: 's1', text: '대피 장소를 알아 둬요' }, { id: 's2', text: '책상 아래 머리 보호' }, { id: 's3', text: '선생님 안내를 들어요' }, { id: 's4', text: '운동장 가운데 모여요' }], axis: ['지진 전', '지진 후'] }, target: { order: ['s1', 's2', 's3', 's4'] }, difficulty: 0.25 },
              { prompt: '대피한 뒤 행동을 시간 순서대로 놓아요.', toolOptions: { cards: [{ id: 'a1', text: '인원을 확인해요' }, { id: 'a2', text: '재난 방송을 들어요' }, { id: 'a3', text: '안전하다면 돌아가요' }], axis: ['대피 직후', '나중'] }, target: { order: ['a1', 'a2', 'a3'] }, difficulty: 0.3,
                conclude: '지진 전 대비, 흔들릴 때 몸 보호, 멈춘 뒤 출구 확보와 대피, 그리고 안내를 기다려요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 대피 훈련과 돌아보기', tool: 'timeline',
            teacher: '"오늘 훈련은 수업 중 지진을 가정해요." 경보 → 책상 아래 대기 → 멈춤 신호 → 교사 출구 확보 → 머리 보호·계단 대피 → 운동장 가운데 집결 → 인원 확인 순으로 한다. 훈련 뒤 걸린 순서를 다시 놓으며 돌아본다. 여진이 올 수 있으니 멈춘 뒤에도 조심한다는 것을 짚는다.',
            task: '훈련 순서와 여진 때 행동을 시간 순으로 놓아요.',
            levels: LV,
            items: [
              { prompt: '오늘 훈련에서 한 일을 시간 순서대로 놓아요.', toolOptions: { cards: [{ id: 't1', text: '경보가 울려요' }, { id: 't2', text: '책상 아래에 있어요' }, { id: 't3', text: '머리 가리고 계단으로' }, { id: 't4', text: '반별로 인원 확인' }], axis: ['먼저', '나중'] }, target: { order: ['t1', 't2', 't3', 't4'] }, difficulty: 0.2 },
              { prompt: '대피 중 다시 흔들릴 때(여진) 행동을 순서대로 놓아요.', toolOptions: { cards: [{ id: 'q1', text: '그 자리에 멈춰요' }, { id: 'q2', text: '낮게 앉아 머리 감싸요' }, { id: 'q3', text: '멈추면 다시 대피해요' }], axis: ['먼저', '나중'] }, target: { order: ['q1', 'q2', 'q3'] }, difficulty: 0.3 },
              { prompt: '훈련 돌아보기 순서를 놓아요.', toolOptions: { cards: [{ id: 'r1', text: '걸린 시간을 들어요' }, { id: 'r2', text: '막힌 곳을 찾아요' }, { id: 'r3', text: '다음 훈련 약속 정하기' }], axis: ['먼저', '나중'] }, target: { order: ['r1', 'r2', 'r3'] }, difficulty: 0.25,
                conclude: '훈련 순서를 돌아보고 막힌 곳을 고치면 진짜 지진에도 차분하게 움직일 수 있어요.' },
            ],
          },
        ],
        wrap: {
          teacher: '"지진 전에 우리 집에서 할 일 하나를 가족과 정해 볼까요?" 출구 1번에서 순서를 헷갈린 학생에게 전·중·후를 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '지진이 나기 전에 할 일은?', options: ['무거운 물건을 아래 칸에 둬요', '탁자 아래로 들어가요', '계단으로 대피해요'], answer: 0, difficulty: 0.2, explain: '떨어질 물건을 미리 정리해요.' },
            { type: 'tool', tool: 'timeline', options: { cards: [{ id: 'x1', text: '넓은 곳으로 대피' }, { id: 'x2', text: '비상용품 챙겨 두기' }, { id: 'x3', text: '머리 보호하며 기다리기' }], axis: ['지진 전', '지진 후'] }, state: { at: {} }, prompt: '지진 행동 카드를 시간 순서대로 놓아요.', target: { order: ['x2', 'x3', 'x1'] }, difficulty: 0.2 },
            { type: 'short', prompt: '지진이 멈춘 뒤에도 조심해야 하는 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '지진 전·중·후',
        ws: [
          { type: 'table', prompt: '때에 맞는 행동을 쓰세요.', columns: ['때', '할 일'], cells: [['지진 전', ''], ['흔들릴 때', ''], ['멈춘 뒤', '']], answer: '예) 가구 고정·대피 장소 알기 / 탁자 아래 머리 보호 / 출구 확보·계단으로 넓은 곳' },
          { type: 'choice', prompt: '멈춘 뒤 대피할 때 이용할 것에 ○ 하세요.', options: ['계단', '승강기', '창문'], answer: '계단' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '큰 지진 뒤에 다시 흔들리는 것을 ___이라고 해요.', answer: '여진' },
          { type: 'short', prompt: '오늘 훈련에서 고칠 점 하나를 쓰세요.' },
        ],
        notes: '훈련 운영: 수업 중 지진 가정 — 경보 → 책상 아래 대기 → 멈춤 신호·출구 확보 → 머리 보호·계단 대피 → 운동장 가운데 집결 → 인원 확인(학교 재난 대비 훈련, 연 2종 이상 중 지진). 근거: 행정안전부 지진 국민행동요령(평소 대비, 흔들릴 때, 흔들림 멈춘 후). 자주 보이는 어려움: ① 지진 전 대비를 생각하지 못한다. ② 멈추면 바로 집에 들어간다 → 안내를 기다린다.',
      }),

      LESSON(4, {
        title: '주의보와 경보 읽고 대비 행동 고르기',
        objective: '호우·태풍·대설 주의보와 경보의 차이를 알고, 특보에 맞는 대비 행동을 고를 수 있다.',
        draw: 'a paper weather board with yellow and red alert cards for rain, typhoon and snow, and a family reading the alert on a phone',
        banner: '주의보 < 경보', extra: [{ motif: 'cloud', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"뉴스에서 \'호우주의보\', \'호우경보\'라는 말을 들어 본 적 있나요? 둘 가운데 더 심한 것은 무엇일까요?" 대답을 듣고(기다릴 반응: "경보요") "기상청은 재해가 생길 수 있을 때 주의보를, 큰 재해가 예상될 때 경보를 내려요"라고 말한다. 시연 단추로 특보 카드가 나뉘는 모습을 보여 준다.',
          student: '날씨 특보를 들었을 때 가족이 무엇을 했는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '기상 특보', slots: ['주의보', '경보'], cards: ['조심해서 대비해요', '큰 피해가 예상돼요'], shuffle: false }, sequence: [{ sort: { '주의보': ['조심해서 대비해요'], '경보': ['큰 피해가 예상돼요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 특보 읽기', tool: 'mindmap',
            teacher: '"주의보와 경보에 따라 행동이 어떻게 달라질까요?" 주의보 때는 대비하며 조심하고, 경보 때는 외출을 하지 않고 위험 지역에서 대피할 준비를 한다고 짚는다. 특보 기준 숫자는 기상청이 정하며 여기서는 단계의 뜻만 익힌다.',
            task: '특보 단계와 행동을 나누고 이어요.',
            levels: LV,
            items: [
              MS('행동을 특보 단계에 맞게 나누어 보세요.', '호우 특보', ['호우주의보', '호우경보'], ['우산·장화 챙겨 조심히 등교', '외출하지 않고 대피 준비', '하천 산책을 미뤄요', '저지대 주민은 대피해요'], { '호우주의보': ['우산·장화 챙겨 조심히 등교', '하천 산책을 미뤄요'], '호우경보': ['외출하지 않고 대피 준비', '저지대 주민은 대피해요'] }, 0.3),
              MM('특보와 대비 행동을 이어요. 맞지 않는 카드는 남겨요.', '특보별 대비', [{ id: 'w1', label: '태풍 특보' }, { id: 'w2', label: '대설 특보' }, { id: 'w3', label: '호우 특보' }], ['창문을 잠그고 외출 줄이기', '눈길 대비·대중교통 이용', '하천·지하 공간 피하기', '연날리기'], { w1: '창문을 잠그고 외출 줄이기', w2: '눈길 대비·대중교통 이용', w3: '하천·지하 공간 피하기' }, 0.25),
              MP('특보가 내려졌을 때 정보를 얻는 바른 방법만 골라 담아요.', '정보 얻기', ['기상청 날씨 알림', '근거 없는 소문 글', '재난 방송', '아무 사진이나 퍼 나르기'], ['기상청 날씨 알림', '재난 방송'], 0.25,
                { conclude: '주의보는 조심하며 대비, 경보는 더 큰 위험이니 외출을 멈추고 대피를 준비해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 특보 상황에서 고르기', tool: 'mindmap',
            teacher: '"오늘 아침 호우경보가 내려졌어요. 우리 가족의 계획을 어떻게 바꿀까요?" 계획을 미루거나 바꾸는 판단을 하게 한다. 학교 등교 여부는 학교 안내를 따른다는 것을 짚는다.',
            task: '특보 상황에서 할 일과 미룰 일을 나누어요.',
            levels: LV,
            items: [
              MS('호우경보가 내린 토요일 계획을 나누어 보세요.', '계획 바꾸기', ['해요', '미뤄요'], ['집에서 비상용품 점검', '계곡 캠핑', '재난 방송 확인', '하천 자전거 타기'], { '해요': ['집에서 비상용품 점검', '재난 방송 확인'], '미뤄요': ['계곡 캠핑', '하천 자전거 타기'] }, 0.25),
              MS('대설주의보가 내린 아침 행동을 나누어 보세요.', '대설주의보', ['해요', '안 해요'], ['일찍 나서서 천천히 걸어요', '비탈길에서 썰매를 타요', '미끄럼 방지 신발', '자전거로 빨리 가요'], { '해요': ['일찍 나서서 천천히 걸어요', '미끄럼 방지 신발'], '안 해요': ['비탈길에서 썰매를 타요', '자전거로 빨리 가요'] }, 0.25),
              MM('특보 단계와 뜻을 이어요. 맞지 않는 카드는 남겨요.', '단계의 뜻', [{ id: 'g1', label: '주의보' }, { id: 'g2', label: '경보' }, { id: 'g3', label: '특보 해제' }], ['재해가 생길 수 있어요', '큰 재해가 예상돼요', '위험이 줄었어요', '날씨가 맑아요'], { g1: '재해가 생길 수 있어요', g2: '큰 재해가 예상돼요', g3: '위험이 줄었어요' }, 0.3,
                { conclude: '특보 단계를 읽고 계획을 바꾸는 것이 재난을 피하는 가장 쉬운 방법이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 저녁 날씨 알림을 가족과 함께 확인해 볼까요?" 출구 1번에서 주의보를 더 심하다고 고른 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '주의보와 경보 가운데 더 큰 위험을 알리는 것은?', options: ['경보', '주의보', '둘 다 같아요'], answer: 0, difficulty: 0.15, explain: '경보는 큰 재해가 예상될 때 내려요.' },
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '태풍경보 때', basket: '태풍경보 때', cards: ['외출을 하지 않아요', '바닷가 파도 구경', '창문을 잠가요', '공사장 옆 산책'] }, state: { at: {} }, prompt: '태풍경보가 내려졌을 때 할 행동만 골라 담아요.', target: { pick: ['외출을 하지 않아요', '창문을 잠가요'] }, difficulty: 0.2 },
            { type: 'short', prompt: '특보 정보를 얻을 수 있는 믿을 만한 곳 한 가지를 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '기상 특보 읽기',
        ws: [
          { type: 'table', prompt: '특보 단계의 뜻과 할 일을 쓰세요.', columns: ['단계', '뜻', '할 일'], cells: [['주의보', '', ''], ['경보', '', '']], answer: '재해 가능-조심하며 대비 / 큰 재해 예상-외출 멈추고 대피 준비' },
          { type: 'choice', prompt: '호우경보 때 피할 곳에 ○ 하세요.', options: ['하천·지하 공간', '집 안', '높은 층'], answer: '하천·지하 공간' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기상 특보는 ___청이 내려요.', answer: '기상' },
          { type: 'short', prompt: '특보가 내려졌을 때 우리 가족 계획을 어떻게 바꿀지 쓰세요.' },
        ],
        notes: '근거: 기상청 기상특보(주의보·경보 두 단계). 특보별 발표 기준 숫자는 다루지 않았다. 자주 보이는 어려움: ① 주의보와 경보의 크기를 헷갈린다. ② 특보를 듣고도 계획을 바꾸지 않는다. ③ 소문 글을 믿는다 → 기상청·재난 방송으로 확인한다.',
      }),

      LESSON(5, {
        title: '건물 붕괴 징후 알아차리고 대피 판단하기',
        objective: '벽·기둥의 금, 기울어짐, 이상한 소리 같은 붕괴 징후를 알아차리고 대피하는 판단을 할 수 있다.',
        draw: 'a paper building wall with a long crack, a door that sticks, and children walking calmly out toward an open area while an adult phones for help',
        banner: '징후를 보면 바로 알리고 피해요', extra: [{ motif: 'house', x: 300, y: 214, color: 'peach' }],
        intro: {
          teacher: '"벽에 금이 길게 가고, 문이 갑자기 잘 안 닫혀요. 무엇을 알려 주는 걸까요?" 대답을 듣고(기다릴 반응: "건물이 이상해요") "건물이 무너지기 전에는 이런 징후가 보일 수 있어요. 징후를 보면 바로 어른에게 알리고 피해요"라고 말한다. 시연 단추로 갈림길 보기가 고르는 모습을 보여 준다. 실제 사고 사진은 보여 주지 않는다.',
          student: '건물이 위험하다는 신호가 무엇일지 짝과 하나씩 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '벽에 긴 금이 생겼어요.', choices: [{ id: 'tell', text: '어른에게 알려요', result: '전문가가 살펴요.', mood: '안심' }, { id: 'ignore', text: '모른 척해요', result: '위험이 남아요.', mood: '걱정' }] }, sequence: [{ choice: 'tell' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 징후를 보면', tool: 'emotion',
            teacher: '"이 징후를 보면 어떻게 할까요?" 벽·기둥 금, 바닥·천장 처짐, 문이 잘 안 열림, 우두둑 소리, 물이 새는 것을 징후로 짚는다. 징후가 심하면 그 건물에서 바로 나와 넓은 곳으로 가고, 어른·119에 알린다. 대피할 때 승강기를 타지 않는다.',
            task: '붕괴 징후 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('학원 기둥에 금이 가고 가루가 떨어져요. 어떻게 할까요?', '학원 복도 기둥에 금이 가고 하얀 가루가 떨어져요.', [
                { id: 'tell', text: '선생님께 바로 알리고 함께 나가요', result: '전문가가 점검하는 동안 안전해요.', mood: '안심' },
                { id: 'touch', text: '금을 손가락으로 눌러 봐요', result: '더 부서질 수 있어요.', mood: '걱정', why: '징후는 만지지 말고 알려요.' },
                { id: 'photo', text: '사진만 찍고 수업을 들어요', result: '위험한 곳에 계속 있어요.', mood: '불안', why: '알리고 피하는 것이 먼저예요.' }], 'tell', 0.25),
              EB('천장에서 우두둑 소리가 나고 처져요. 어떻게 할까요?', '교실 천장에서 우두둑 소리가 나며 한쪽이 처져 보여요.', [
                { id: 'under', text: '처진 곳 아래로 가서 살펴요', result: '떨어지는 것에 다칠 수 있어요.', mood: '무서움', why: '처진 곳에서 멀어져요.' },
                { id: 'out', text: '머리를 감싸고 계단으로 나가요', result: '넓은 곳에서 안전하게 기다려요.', mood: '안심' },
                { id: 'lift', text: '승강기를 타고 내려가요', result: '승강기가 멈출 수 있어요.', mood: '불안', why: '계단으로 대피해요.' }], 'out', 0.3),
              EB('대피한 뒤 친구가 가방을 가지러 가재요. 어떻게 할까요?', '건물 밖으로 대피했는데 친구가 가방을 두고 왔대요.', [
                { id: 'go', text: '같이 들어가요', result: '위험한 건물에 다시 들어가요.', mood: '무서움', why: '대피한 건물에 다시 들어가지 않아요.' },
                { id: 'stop', text: '말리고 어른에게 알려요', result: '모두 밖에서 안전하게 기다려요.', mood: '안심' },
                { id: 'alone', text: '친구만 보내요', result: '친구가 위험해져요.', mood: '걱정', why: '누구도 다시 들어가지 않아요.' }], 'stop', 0.25,
                { conclude: '붕괴 징후를 보면 만지지 말고, 알리고, 계단으로 나와 다시 들어가지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 징후 가려내기', tool: 'emotion',
            teacher: '"이것은 위험한 징후일까요, 괜찮은 모습일까요?" 갈림길에서 고르며 판단 근거를 말하게 한다. 작은 페인트 갈라짐처럼 헷갈리는 것도 어른에게 알리면 된다고 말해 지나친 불안을 줄인다.',
            task: '건물 모습을 보고 알맞은 판단을 골라요.',
            levels: LVB,
            items: [
              EB('아파트 문이 갑자기 안 닫혀요. 어떻게 판단할까요?', '어제까지 잘 닫히던 현관문이 갑자기 꽉 끼어 안 닫혀요.', [
                { id: 'sign', text: '징후일 수 있어 어른에게 알려요', result: '관리사무소가 점검해요.', mood: '안심' },
                { id: 'force', text: '세게 밀어 닫아요', result: '원인을 모른 채 지나가요.', mood: '걱정', why: '갑자기 생긴 변화는 알려요.' },
                { id: 'fun', text: '재미있다고 놀아요', result: '위험 신호를 놓쳐요.', mood: '걱정', why: '징후일 수 있어요.' }], 'sign', 0.3),
              EB('공사장 옆 담이 기울어 보여요. 어떻게 할까요?', '등굣길 공사장 옆 담장이 길 쪽으로 기울어 보여요.', [
                { id: 'lean', text: '담에 기대 쉬어요', result: '담이 넘어질 수 있어요.', mood: '무서움', why: '기운 담에서 떨어져요.' },
                { id: 'away', text: '반대편 길로 걷고 어른에게 알려요', result: '안전하게 지나가고 점검을 받아요.', mood: '안심' },
                { id: 'push', text: '밀어서 세워 봐요', result: '무너질 수 있어요.', mood: '무서움', why: '절대 건드리지 않아요.' }], 'away', 0.25),
              EB('건물이 무너져 먼지가 날려요. 어떻게 할까요?', '근처 건물이 일부 무너져 먼지가 날려요.', [
                { id: 'look', text: '가까이 가서 구경해요', result: '추가 붕괴에 다칠 수 있어요.', mood: '무서움', why: '현장에서 멀리 떨어져요.' },
                { id: 'mask', text: '코·입을 가리고 멀리 피해 112·119에 알려요', result: '안전한 곳에서 구조를 도와요.', mood: '안심' },
                { id: 'help', text: '혼자 들어가 사람을 찾아요', result: '나도 위험해져요.', mood: '불안', why: '구조는 구조대에 맡기고 신고해요.' }], 'mask', 0.3,
                { conclude: '갑자기 생긴 금·기울어짐·소리는 알리고, 무너진 현장은 멀리 피해 신고해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 징후 가운데 우리 학교에서 볼 수 있는 것이 있다면 누구에게 알릴까요?" 출구 1번에서 만지는 보기를 고른 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '건물 붕괴 징후가 아닌 것은?', options: ['창문에 햇빛이 비쳐요', '기둥에 긴 금이 가요', '천장이 처져요'], answer: 0, difficulty: 0.2, explain: '금·처짐·이상한 소리가 징후예요.' },
            { type: 'choice', prompt: '붕괴 징후로 대피할 때 이용할 것은?', options: ['계단', '승강기', '옥상'], answer: 0, difficulty: 0.2, explain: '승강기는 멈출 수 있어요.' },
            { type: 'short', prompt: '무너진 현장에 혼자 들어가 사람을 찾으면 안 되는 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '붕괴 징후와 대피',
        ws: [
          { type: 'table', prompt: '붕괴 징후를 세 가지 쓰세요.', columns: ['번호', '징후'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '예) 벽·기둥의 금 / 천장·바닥 처짐 / 문이 안 닫힘·이상한 소리' },
          { type: 'choice', prompt: '징후를 보았을 때 먼저 할 일에 ○ 하세요.', options: ['어른에게 알려요', '눌러 봐요', '사진만 찍어요'], answer: '어른에게 알려요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '대피한 건물에는 ___ 들어가지 않아요.', answer: '다시' },
          { type: 'short', prompt: '기운 담장을 보았을 때 할 일을 쓰세요.' },
        ],
        notes: '근거: 행정안전부 붕괴 사고 국민행동요령(징후 발견 시 신고·대피, 승강기 사용 금지, 재진입 금지). 자주 보이는 어려움: ① 징후를 만져 본다. ② 무너진 현장을 구경하거나 직접 구조하려 한다. ③ 작은 갈라짐에도 지나치게 불안해한다 → 어른에게 알리면 된다고 안심시킨다. 실제 참사 사례·사진은 쓰지 않는다.',
      }),

      LESSON(6, {
        title: '수상한 물건·위협 상황에서 만지지 않고 알리기',
        objective: '주인 없는 수상한 물건이나 위협 상황에서 만지지 않고 멀리 떨어져 112·119에 알리는 판단을 할 수 있다.',
        draw: 'children stepping back from an unattended paper box in a subway station while a staff member in a vest guides them away and another child points to a help phone',
        banner: '만지지 말고, 떨어지고, 알려요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"지하철역 의자 밑에 주인 없는 가방이 오래 놓여 있고 이상한 소리가 나요. 열어 보면 될까요?" 대답을 듣고(기다릴 반응: "안 돼요, 알려요") "주인을 모르는 수상한 물건은 만지지 않고, 멀리 떨어져, 역무원·112·119에 알려요"라고 말한다. 시연 단추로 갈림길 보기가 고르는 모습을 보여 준다. 무서운 장면을 자세히 말하지 않고 행동 요령에 집중한다.',
          student: '공공장소에서 이상한 것을 보았을 때 누구에게 알릴 수 있을지 짝에게 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '주인 없는 상자가 있어요.', choices: [{ id: 'report', text: '떨어져서 알려요', result: '안전하게 처리돼요.', mood: '안심' }, { id: 'open', text: '열어 봐요', result: '위험할 수 있어요.', mood: '무서움' }] }, sequence: [{ choice: 'report' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 수상한 물건을 보면', tool: 'emotion',
            teacher: '"이 보기를 고르면 어떤 일이 생길 수 있을까요?" 수상한 물건은 흔들거나 옮기지 않고, 휴대전화도 물건에서 떨어진 곳에서 쓴다고 짚는다. 112는 범죄·위협, 119는 화재·구조·구급 신고 번호라는 것을 정리한다. 장난 신고는 하지 않는다.',
            task: '수상한 물건 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('역 의자 밑에 주인 없는 가방이 있어요. 어떻게 할까요?', '지하철역 의자 밑에 주인 없는 가방이 오래 놓여 있어요.', [
                { id: 'open', text: '주인을 찾으려고 열어 봐요', result: '위험한 물건일 수 있어요.', mood: '무서움', why: '수상한 물건은 열지 않아요.' },
                { id: 'report', text: '멀리 떨어져 역무원에게 알려요', result: '역무원이 경찰과 안전하게 처리해요.', mood: '안심' },
                { id: 'move', text: '사람 없는 곳으로 옮겨요', result: '옮기다 위험해질 수 있어요.', mood: '걱정', why: '옮기지 말고 알려요.' }], 'report', 0.2),
              EB('학교 앞에 선이 삐져나온 상자가 있어요. 어떻게 할까요?', '학교 정문 옆에 전선이 삐져나온 낯선 상자가 놓여 있어요.', [
                { id: 'kick', text: '발로 차서 확인해요', result: '위험할 수 있어요.', mood: '무서움', why: '수상한 물건은 건드리지 않아요.' },
                { id: 'tell', text: '친구들과 멀리 떨어져 선생님께 알려요', result: '선생님이 112에 신고하고 모두 피해요.', mood: '안심' },
                { id: 'video', text: '가까이 가서 영상을 찍어요', result: '위험한 곳에 머물러요.', mood: '걱정', why: '먼저 멀리 떨어져요.' }], 'tell', 0.25),
              EB('직원이 대피 안내를 해요. 어떻게 할까요?', '쇼핑몰에서 "수상한 물건이 발견되어 대피합니다" 방송이 나와요.', [
                { id: 'follow', text: '안내에 따라 침착하게 나가요', result: '모두 안전하게 대피해요.', mood: '안심' },
                { id: 'shop', text: '쇼핑을 마저 해요', result: '대피가 늦어져요.', mood: '걱정', why: '안내를 들으면 바로 따라요.' },
                { id: 'push', text: '사람을 밀치며 뛰어요', result: '넘어져 다칠 수 있어요.', mood: '불안', why: '침착하게 안내를 따라요.' }], 'follow', 0.25,
                { conclude: '수상한 물건은 만지지 말고, 멀리 떨어져, 어른·112·119에 알리고 안내를 따라요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 알맞게 알리기', tool: 'emotion',
            teacher: '"112와 119 가운데 어디에 알릴까요?" 위협·범죄는 112, 불·다친 사람은 119라고 짚는다. 어른이 가까이 있으면 어른에게 먼저 알려도 된다. 신고할 때는 장소·본 것을 말하고, 근거 없는 소문을 퍼뜨리지 않는다.',
            task: '상황에 맞게 알리는 방법을 골라요.',
            levels: LVB,
            items: [
              EB('수상한 사람이 위협하는 말을 해요. 어디에 알릴까요?', '공원에서 낯선 사람이 사람들을 해치겠다고 소리쳐요.', [
                { id: 'p112', text: '멀리 피해 어른·112에 알려요', result: '경찰이 와서 처리해요.', mood: '안심' },
                { id: 'talk', text: '다가가 말려요', result: '내가 위험해질 수 있어요.', mood: '무서움', why: '다가가지 말고 피해서 신고해요.' },
                { id: 'post', text: '누리집에 글부터 올려요', result: '신고가 늦어져요.', mood: '걱정', why: '먼저 112에 알려요.' }], 'p112', 0.25),
              EB('폭발 소리 뒤 다친 사람이 보여요. 어디에 알릴까요?', '건물 쪽에서 큰 소리가 나고 다친 사람이 보여요.', [
                { id: 'p119', text: '안전한 곳으로 피해 119에 알려요', result: '구급대가 다친 사람을 도와요.', mood: '안심' },
                { id: 'near', text: '가까이 가서 구경해요', result: '추가 위험에 다칠 수 있어요.', mood: '무서움', why: '현장에서 멀어져요.' },
                { id: 'none', text: '누군가 했겠지 하고 지나가요', result: '신고가 늦어질 수 있어요.', mood: '걱정', why: '나도 신고할 수 있어요.' }], 'p119', 0.25),
              EB('친구가 "테러가 났대" 하는 소문 글을 보냈어요. 어떻게 할까요?', '확인되지 않은 "테러가 났대" 글이 단체 대화방에 올라왔어요.', [
                { id: 'share', text: '다른 방에도 바로 퍼뜨려요', result: '사람들이 근거 없이 불안해해요.', mood: '불안', why: '확인되지 않은 소문은 퍼뜨리지 않아요.' },
                { id: 'check', text: '퍼뜨리지 않고 어른과 공식 안내를 확인해요', result: '정확한 정보로 차분히 행동해요.', mood: '편안함' },
                { id: 'panic', text: '무서워서 밖으로 뛰쳐나가요', result: '오히려 위험해질 수 있어요.', mood: '무서움', why: '공식 안내를 확인하고 따라요.' }], 'check', 0.3,
                { conclude: '위협은 112, 불·다친 사람은 119, 소문은 퍼뜨리지 않고 공식 안내를 확인해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 세 낱말을 말해 볼까요? 만지지 말고, 떨어지고, 알려요." 출구 2번에서 112·119를 헷갈린 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '주인 없는 수상한 가방을 보면?', options: ['멀리 떨어져 알려요', '열어서 확인해요', '들고 경찰서에 가요'], answer: 0, difficulty: 0.15, explain: '만지거나 옮기지 말고 알려요.' },
            { type: 'choice', prompt: '누군가 사람들을 위협할 때 신고 번호는?', options: ['112', '114', '131'], answer: 0, difficulty: 0.2, explain: '범죄·위협은 112에 신고해요.' },
            { type: 'short', prompt: '확인되지 않은 재난 소문을 퍼뜨리면 안 되는 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '수상한 물건과 위협',
        ws: [
          { type: 'table', prompt: '상황과 알릴 곳을 쓰세요.', columns: ['상황', '알릴 곳'], cells: [['위협하는 사람', ''], ['불이 났어요', ''], ['다친 사람이 있어요', ''], ['역의 수상한 가방', '']], answer: '112 / 119 / 119 / 역무원·112' },
          { type: 'choice', prompt: '수상한 물건 앞에서 하지 않을 일에 ○ 하세요.', options: ['열어 봐요', '멀리 떨어져요', '어른에게 알려요'], answer: '열어 봐요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '수상한 물건은 만지지 말고, 멀리 ___, 알려요.', answer: '떨어지고' },
          { type: 'short', prompt: '대피 방송을 들었을 때 할 행동을 쓰세요.' },
        ],
        notes: '근거: 고시 별표 2 초등 재난안전 "폭발 및 붕괴, 테러 위협 유형별 대처 요령 알기", 행정안전부 국민행동요령(수상한 물건 접촉 금지·이격·신고). 신고 번호는 112(범죄·위협)·119(화재·구조·구급)만 썼다. 자주 보이는 어려움: ① 호기심에 열어 본다. ② 직접 말리러 간다. ③ 소문을 퍼뜨린다. 실제 테러 사건·방법은 다루지 않는다.',
      }),
    ],
  });
})();
