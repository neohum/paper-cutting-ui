/* 3학년 창체 안전교육 — 생활안전 (차시 2개, 엔진·검사 확인용 예시 단원). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 7대 영역 중 생활안전.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const UNIT = 'g3-창체-saf-life';
  const TITLE = '생활안전';
  const base = (n) => ({
    id: `g3-cc-saf-life-0${n}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: 3, subject: '창체', unitTitle: TITLE,
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
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
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

  PaperLessons.registerUnit({
    id: 'g3-cc-saf-life', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 3, subject: '창체', unitTitle: TITLE,
    flow: '학교와 집, 놀이터에서 일어나기 쉬운 생활 속 사고를 미리 알아차리고 막는 단원입니다. 1차시에는 복도·계단·교실 장면을 안전한 행동과 위험한 행동으로 나누고, 장소마다 지킬 약속을 이어 우리 반 안전 약속을 세웁니다. 2차시에는 놀이 기구와 집 안의 위험한 순간에서 어떻게 할지 고르고, 다쳤을 때 어른에게 알리는 순서를 익힙니다. 두 차시 모두 겁을 주기보다 "이렇게 하면 안전해요"라는 행동을 몸에 익히는 데 초점을 둡니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '복도·계단·교실의 위험 찾고 우리 반 약속 세우기',
        objective: '학교 안에서 다치기 쉬운 행동을 찾아 안전한 행동과 나누고, 장소에 맞는 안전 약속을 말할 수 있다.',
        draw: 'children walking calmly on the right side of a school hallway and holding the handrail on paper stairs, with a small paper sign showing a walking figure',
        banner: '천천히, 오른쪽으로', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"쉬는 시간에 복도 모퉁이를 달려 돌다가 친구와 꽝 부딪혔어요. 왜 부딪혔을까요?" 두세 명의 대답을 듣고(기다릴 반응: "앞이 안 보여서요", "너무 빨라서요") 시연 단추로 행동 카드가 두 칸으로 나뉘는 모습을 보여 준다. "조심하면 뛰어도 괜찮아요"가 나오면 "모퉁이 너머에서 친구가 오는지 미리 볼 수 있나요?"라고 되묻는다. 오늘은 학교 안 위험한 곳을 찾아 우리 반 안전 약속을 세운다고 밝힌다.',
          student: '학교에서 넘어지거나 부딪힐 뻔했던 적이 있나요? 어디에서였는지 짝에게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '복도에서', slots: ['안전해요', '위험해요'], cards: ['오른쪽으로 걸어요', '모퉁이를 달려요'], shuffle: false }, sequence: [{ sort: { '안전해요': ['오른쪽으로 걸어요'], '위험해요': ['모퉁이를 달려요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 안전한 행동과 위험한 행동 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이렇게 하면 누가, 어떻게 다칠 수 있을까요?" 카드를 놓을 때마다 다칠 수 있는 장면을 한 문장으로 말하게 한다. 계단 문항에서 "두 칸씩 뛰어 내려가요"를 안전한 쪽에 놓는 학생에게 "발을 헛디디면 어디까지 굴러갈까요?"라고 되묻는다. 교실 문항에서 의자를 뒤로 기울이는 것을 장난으로만 여기는 학생이 많다 — "의자 다리 두 개로만 서 있으면 어떻게 될까요?"라고 물어 뒤로 넘어져 머리를 다칠 수 있음을 짚는다.',
            task: '장면 카드를 안전한 행동과 위험한 행동으로 나누고, 장소에 맞는 약속을 이어요.',
            levels: LV,
            items: [
              MS('복도 장면을 두 가지로 나누어 보세요.', '복도에서', ['안전해요', '위험해요'], ['오른쪽으로 걸어요', '모퉁이를 달려서 돌아요', '친구를 뒤에서 밀어요', '모퉁이에서 잠깐 살펴요'], { '안전해요': ['오른쪽으로 걸어요', '모퉁이에서 잠깐 살펴요'], '위험해요': ['모퉁이를 달려서 돌아요', '친구를 뒤에서 밀어요'] }, 0.1),
              MS('계단 장면을 두 가지로 나누어 보세요.', '계단에서', ['안전해요', '위험해요'], ['손잡이를 잡고 한 칸씩 내려가요', '두 칸씩 뛰어 내려가요', '난간에 올라타 미끄러져요', '휴대전화를 보지 않고 발밑을 봐요'], { '안전해요': ['손잡이를 잡고 한 칸씩 내려가요', '휴대전화를 보지 않고 발밑을 봐요'], '위험해요': ['두 칸씩 뛰어 내려가요', '난간에 올라타 미끄러져요'] }, 0.15),
              MS('교실 장면을 두 가지로 나누어 보세요.', '교실에서', ['안전해요', '위험해요'], ['의자를 뒤로 기울여 흔들어요', '가위는 손잡이 쪽으로 건네요', '바닥에 쏟은 물을 바로 닦아요', '창문 턱에 올라가 앉아요'], { '안전해요': ['가위는 손잡이 쪽으로 건네요', '바닥에 쏟은 물을 바로 닦아요'], '위험해요': ['의자를 뒤로 기울여 흔들어요', '창문 턱에 올라가 앉아요'] }, 0.2,
                { conclude: '위험한 행동은 "조금쯤 괜찮겠지" 하는 순간에 사고가 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 장소마다 지킬 약속 잇고 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 장소에서 가장 먼저 지켜야 할 약속은 무엇일까요?" 1번에서 급식실과 "젓가락을 들고 돌아다니지 않아요"를 잇지 못하는 학생에게 "식판을 들고 걷다 부딪히면 무엇이 쏟아질까요?"라고 묻는다. 2번에서 "선생님이 안 보면 괜찮아요"를 고르는 학생이 있다 — "보는 사람이 없으면 다치지 않나요?"라고 되물어 약속은 나를 지키려고 있는 것임을 짚는다. 3번 우리 반 약속은 칠판에 적어 교실에 붙인다.',
            task: '장소와 알맞은 안전 약속을 잇고, 우리 반 안전 약속으로 쓸 말을 골라요.',
            levels: LV,
            items: [
              MM('장소와 그곳에서 지킬 약속을 이어 보세요. 맞지 않는 카드는 남겨요.', '장소별 약속', [{ id: 'p1', label: '급식실' }, { id: 'p2', label: '운동장' }, { id: 'p3', label: '화장실' }], ['식판을 들고는 천천히 걸어요', '그네 앞뒤로 지나가지 않아요', '젖은 바닥에서는 뛰지 않아요', '복도에서 공을 차요'], { p1: '식판을 들고는 천천히 걸어요', p2: '그네 앞뒤로 지나가지 않아요', p3: '젖은 바닥에서는 뛰지 않아요' }, 0.2),
              MP('안전 약속으로 알맞은 말만 골라 담아 보세요.', '안전 약속', ['문은 천천히 열고 닫아요', '선생님이 안 보면 괜찮아요', '뾰족한 연필 끝은 아래로 들어요', '급하면 계단을 뛰어도 돼요'], ['문은 천천히 열고 닫아요', '뾰족한 연필 끝은 아래로 들어요'], 0.2),
              MM('위험한 장면과 바로 할 행동을 이어 보세요. 맞지 않는 카드는 남겨요.', '바로 할 행동', [{ id: 'h1', label: '복도 바닥에 우유가 쏟아져 있어요.' }, { id: 'h2', label: '친구가 창문 턱에 올라가려 해요.' }, { id: 'h3', label: '계단에서 친구가 뛰어 내려와요.' }], ['선생님께 알리고 둘레를 피해 걸어요', '내려오라고 말하고 함께 자리로 가요', '손잡이를 잡고 한쪽으로 비켜서요', '나도 같이 뛰어요'], { h1: '선생님께 알리고 둘레를 피해 걸어요', h2: '내려오라고 말하고 함께 자리로 가요', h3: '손잡이를 잡고 한쪽으로 비켜서요' }, 0.3,
                { conclude: '위험을 보면 피하고, 알리고, 친구에게도 말해 주는 것이 안전 약속이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 세운 약속 가운데 내일 아침 등교할 때부터 지킬 것 하나를 말해 볼까요?" 출구 1번에서 "신발 끈을 묶고 걸어요"를 위험한 쪽에 둔 학생이 많으면 끈이 풀린 채 걷다 밟고 넘어지는 장면을 다시 묻는다. 2번에서 첫째 보기를 고른 학생에게는 "사고는 내가 조심하는데도 일어날 수 있어서 약속을 모두 함께 지켜요"라고 짚는다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '등굣길 학교 안', slots: ['안전해요', '위험해요'], cards: ['신발 끈을 묶고 걸어요', '실내화 주머니를 돌리며 걸어요', '현관 계단은 손잡이 쪽으로 다녀요', '문 뒤에 숨어 친구를 놀래요'] }, state: { at: {} }, prompt: '등교할 때 학교 안 장면을 두 가지로 나누어 보세요.',
              target: { sort: { '안전해요': ['신발 끈을 묶고 걸어요', '현관 계단은 손잡이 쪽으로 다녀요'], '위험해요': ['실내화 주머니를 돌리며 걸어요', '문 뒤에 숨어 친구를 놀래요'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '안전 약속을 지키는 까닭으로 알맞은 것은 무엇인가요?', options: ['혼나지 않으려고', '나와 친구가 다치지 않으려고', '선생님이 볼 때만 지키려고'], answer: 1, difficulty: 0.1, explain: '안전 약속은 보는 사람이 없어도 나와 친구를 지켜 줘요.' },
            { type: 'short', prompt: '우리 반 안전 약속 가운데 내가 꼭 지킬 것을 한 문장으로 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        ws: {
          title: '학교 안 안전 약속',
          items: [
            { type: 'table', prompt: '장면을 읽고 안전하면 ○, 위험하면 ×를 쓰세요.', columns: ['장면', '○ / ×'], cells: [['계단 손잡이를 잡고 내려가요', ''], ['복도 모퉁이를 달려서 돌아요', ''], ['가위를 손잡이 쪽으로 건네요', ''], ['의자를 뒤로 기울여 흔들어요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '복도에서 지킬 약속에 ○ 하세요.', options: ['오른쪽으로 천천히 걸어요', '모퉁이를 빨리 돌아요', '친구를 밀며 장난쳐요'], answer: '오른쪽으로 천천히 걸어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '위험한 것을 보면 ___하고, 선생님께 ___고, 친구에게도 말해 줘요.', answer: '피, 알리' },
            { type: 'short', prompt: '우리 학교에서 가장 조심해야 할 곳과 그 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"이렇게 하면 다칠까?"를 먼저 생각해 보세요.',
            items: [
              { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 쓰세요.', columns: ['장면', '○ / ×'], cells: [['천천히 걸어요', ''], ['계단을 뛰어요', ''], ['손잡이를 잡아요', '']], answer: '○, ×, ○' },
              { type: 'choice', prompt: '안전한 행동에 ○ 하세요.', options: ['창문 턱에 앉기', '의자에 바르게 앉기'], answer: '의자에 바르게 앉기' },
              { type: 'draw', prompt: '계단을 안전하게 내려가는 내 모습을 그려 보세요.' },
              { type: 'short', prompt: '내가 지킬 안전 약속을 한 가지 쓰세요.' },
            ],
          },
        },
        diff: {
          easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 틀리면 다칠 수 있는 장면을 말하고 돌려보내요.',
          base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '카드 순서가 섞여 나오고, 장난처럼 보이는 위험한 행동 카드가 함께 나와요.',
        },
        notes: '자주 보이는 어려움: ① 조심하면 뛰어도 괜찮다고 여긴다 → 모퉁이·계단에서는 앞이 안 보여 조심할 틈이 없다는 점을 짚는다. ② 의자 흔들기·창문 턱 앉기를 장난으로만 본다 → 넘어지거나 떨어지는 장면을 함께 떠올린다. ③ 약속을 선생님이 볼 때만 지킨다 → 약속은 나를 지키려고 있는 것임을 되새긴다.',
      }),

      LESSON(2, {
        title: '놀이터·집 안 위험한 순간 고르고 도움 청하기',
        objective: '놀이 기구와 집 안의 위험한 상황에서 안전한 행동을 고르고, 다쳤을 때 어른에게 알리는 순서를 말할 수 있다.',
        draw: 'a child waiting behind a paper line beside a playground slide while another child slides down feet first, with a paper house window showing an adult nearby',
        banner: '멈추고, 살피고, 알려요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"미끄럼틀 아래에 친구가 아직 앉아 있는데 위에서 다른 친구가 내려오려고 해요. 어떤 일이 생길까요?" 두세 명의 대답을 듣고(기다릴 반응: "부딪혀요", "다쳐요") 시연 단추로 도움 청하는 순서 카드가 놓이는 모습을 보여 준다. "다치면 혼날까 봐 숨겨요"가 나오면 "숨기면 다친 곳은 어떻게 될까요?"라고 되묻고, 오늘은 위험한 순간에 어떻게 할지와 다쳤을 때 알리는 방법을 익힌다고 밝힌다.',
          student: '놀이터나 집에서 다칠 뻔했던 일을 떠올려, 그때 어떻게 했는지 짝에게 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [{ id: '멈춤', text: '하던 놀이를 멈춰요', motif: 'sun' }, { id: '알림', text: '가까운 어른에게 알려요', motif: 'house' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['멈춤', '알림'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 위험한 순간에 어떻게 할지 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 다음에 어떤 일이 생길까요?" 보기를 고를 때마다 결과 칸을 소리 내어 읽게 한다. 1번에서 미끄럼틀을 거꾸로 올라가는 보기를 고르는 학생에게는 내려오는 친구와 부딪힐 수 있다는 점을 짚는다. 2번에서 뜨거운 냄비를 직접 옮기는 보기를 고르는 학생이 있다 — "냄비 손잡이가 얼마나 뜨거운지 손으로 알 수 있나요?"라고 물어 어른을 부르는 것이 먼저임을 이야기한다. 3번은 낯선 물약을 맛보지 않는다는 것만 분명히 하고 겁을 주지 않는다.',
            task: '놀이터와 집에서 생긴 위험한 순간에 어떻게 할지 고르고, 그렇게 했을 때 생기는 일을 살펴봐요.',
            levels: LVB,
            items: [
              EB('미끄럼틀 아래에 친구가 아직 앉아 있어요. 어떻게 할지 골라 보세요.', '미끄럼틀 꼭대기에서 내려가려는데 아래에 친구가 앉아 있어요.', [
                { id: 'wait', text: '친구가 비킬 때까지 기다렸다가 내려가요', result: '둘 다 다치지 않고 차례대로 놀아요.', mood: '편안함' },
                { id: 'go', text: '"비켜!" 하고 바로 내려가요', result: '친구와 부딪혀 둘 다 넘어져요.', mood: '속상함', why: '친구가 비키기 전에 내려가면 부딪힐 수 있어요.' },
                { id: 'climb', text: '미끄럼틀을 거꾸로 걸어 내려가요', result: '발이 미끄러져 넘어질 뻔해요.', mood: '무서움', why: '미끄럼틀은 발부터, 한 사람씩 내려와야 안전해요.' }], 'wait', 0.15),
              EB('가스레인지 위 냄비가 끓어 넘쳐요. 어떻게 할지 골라 보세요.', '집에 혼자 놀다가 부엌 냄비에서 물이 끓어 넘치는 소리가 나요.', [
                { id: 'lift', text: '냄비를 직접 들어 옮겨요', result: '뜨거운 손잡이에 손을 델 수 있어요.', mood: '무서움', why: '뜨거운 냄비는 어린이가 옮기면 데일 수 있어요.' },
                { id: 'call', text: '냄비에서 떨어져 집에 있는 어른을 불러요', result: '어른이 불을 끄고 냄비를 안전하게 옮겨요.', mood: '안심' },
                { id: 'ignore', text: '모른 척하고 계속 놀아요', result: '넘친 물 때문에 불이 꺼지고 냄새가 나요.', mood: '걱정', why: '위험을 알았으면 어른에게 알려야 해요.' }], 'call', 0.25),
              EB('식탁 위에 처음 보는 물약 병이 있어요. 어떻게 할지 골라 보세요.', '식탁 위에 알록달록한 물약 병이 뚜껑이 열린 채 놓여 있어요.', [
                { id: 'taste', text: '달콤한지 조금 맛봐요', result: '배가 아프고 어지러울 수 있어요.', mood: '불안', why: '약은 어른이 정해 준 것만, 정해 준 만큼 먹어요.' },
                { id: 'tell', text: '만지지 않고 어른에게 알려요', result: '어른이 병을 닫아 높은 곳에 치워요.', mood: '안심' },
                { id: 'play', text: '동생과 소꿉놀이 물로 써요', result: '동생이 먹을 수도 있어 위험해요.', mood: '걱정', why: '처음 보는 병은 장난감으로 쓰지 않아요.' }], 'tell', 0.2,
                { conclude: '위험한 순간에는 멈추고, 만지지 않고, 어른에게 알리는 것이 먼저예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 다쳤을 때 알리는 순서 익히기', minutes: 13, tool: 'story',
            teacher: '"다쳤을 때 가장 먼저 무엇을 해야 할까요?" 1번에서 "집에 가서 말해요"를 맨 앞에 두는 학생에게는 "그사이 피가 계속 나면 어떻게 될까요?"라고 묻는다. 2번에서 혼날까 봐 숨기는 마음을 가진 학생이 있다 — "어른은 혼내려고가 아니라 도우려고 물어봐요"라고 말해 준다. 3번은 보건실·담임 선생님·집 전화번호처럼 실제로 알릴 곳을 함께 정리한다(학생 개인 번호는 적지 않는다).',
            task: '다치거나 친구가 다쳤을 때 알리는 순서를 정하고, 누구에게 알릴지 이어요.',
            levels: LV,
            items: [
              SO('놀이터에서 무릎이 까졌을 때 할 일을 차례대로 놓아 보세요.', '다쳤을 때', ['먼저', '다음', '그다음', '마지막'], [{ id: 'k1', text: '놀이를 멈추고 앉아요', motif: 'sun' }, { id: 'k2', text: '가까운 어른에게 다친 곳을 보여 줘요', motif: 'house' }, { id: 'k3', text: '어른과 함께 상처를 씻고 치료해요', motif: 'leaf' }, { id: 'k4', text: '다 나을 때까지 그 놀이는 쉬어요', motif: 'flower' }], ['k1', 'k2', 'k3', 'k4'], 0.15),
              SO('친구가 그네에서 떨어져 일어나지 못해요. 할 일을 차례대로 놓아 보세요.', '친구가 다쳤을 때', ['먼저', '다음', '마지막'], [{ id: 'f1', text: '친구를 억지로 일으키지 않아요', motif: 'cloud' }, { id: 'f2', text: '큰 소리로 가까운 어른을 불러요', motif: 'sun' }, { id: 'f3', text: '어른이 올 때까지 친구 곁에 있어요', motif: 'flower' }], ['f1', 'f2', 'f3'], 0.25),
              MM('상황과 알릴 사람을 이어 보세요. 맞지 않는 카드는 남겨요.', '누구에게 알릴까', [{ id: 'w1', label: '학교 운동장에서 넘어졌어요.' }, { id: 'w2', label: '집에서 손가락을 베었어요.' }, { id: 'w3', label: '학원 가는 길에 넘어졌어요.' }], ['가까운 선생님이나 보건 선생님', '집에 계신 어른', '학원 선생님이나 가까운 가게 어른', '아무에게도 말하지 않아요'], { w1: '가까운 선생님이나 보건 선생님', w2: '집에 계신 어른', w3: '학원 선생님이나 가까운 가게 어른' }, 0.3,
                { conclude: '다쳤을 때는 가장 가까이 있는 믿을 수 있는 어른에게 바로 알려요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 것 가운데 동생이나 가족에게 알려 주고 싶은 것은 무엇인가요?" 출구 1번에서 "콘센트에 젓가락을 넣어요"를 안전한 쪽에 둔 학생은 없도록 다시 짚고, 2번에서 숨기는 보기를 고른 학생에게는 알리는 것이 나를 지키는 일임을 한 번 더 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '집 안에서', slots: ['안전해요', '위험해요'], cards: ['젖은 손으로 플러그를 뽑아요', '창문 앞 의자에 올라가 밖을 봐요', '칼은 어른과 함께 써요', '현관문은 어른이 확인한 뒤 열어요'] }, state: { at: {} }, prompt: '집 안 장면을 두 가지로 나누어 보세요.',
              target: { sort: { '안전해요': ['칼은 어른과 함께 써요', '현관문은 어른이 확인한 뒤 열어요'], '위험해요': ['젖은 손으로 플러그를 뽑아요', '창문 앞 의자에 올라가 밖을 봐요'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '놀다가 다쳤을 때 가장 먼저 할 일은 무엇인가요?', options: ['혼날까 봐 숨겨요', '놀이를 멈추고 가까운 어른에게 알려요', '참고 계속 놀아요'], answer: 1, difficulty: 0.1, explain: '다쳤을 때는 멈추고 가까운 어른에게 알려야 빨리 치료할 수 있어요.' },
            { type: 'short', prompt: '우리 집에서 조심해야 할 곳 한 곳과 지킬 약속을 한 문장으로 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        ws: {
          title: '놀이터·집 안전과 도움 청하기',
          items: [
            { type: 'table', prompt: '상황에 맞는 안전한 행동을 쓰세요.', columns: ['상황', '안전한 행동'], cells: [['미끄럼틀 아래에 친구가 있어요', ''], ['냄비가 끓어 넘쳐요', ''], ['처음 보는 약병이 있어요', '']], answer: '예) 친구가 비킬 때까지 기다려요 / 어른을 불러요 / 만지지 않고 어른에게 알려요' },
            { type: 'choice', prompt: '친구가 그네에서 떨어져 일어나지 못할 때 할 일에 ○ 하세요.', options: ['억지로 일으켜요', '어른을 부르고 곁에 있어요', '모른 척해요'], answer: '어른을 부르고 곁에 있어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '다치면 놀이를 ___고, 가까운 ___에게 알려요.', answer: '멈추, 어른' },
            { type: 'short', prompt: '내가 다쳤을 때 알릴 수 있는 어른을 두 명 쓰세요(이름 대신 "담임 선생님"처럼).' },
          ],
          easy: {
            note: '"멈추고, 만지지 않고, 알려요"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '안전한 행동에 ○ 하세요.', options: ['미끄럼틀을 거꾸로 올라가요', '차례를 기다려 발부터 내려와요'], answer: '차례를 기다려 발부터 내려와요' },
              { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 쓰세요.', columns: ['장면', '○ / ×'], cells: [['약병을 맛봐요', ''], ['어른에게 알려요', ''], ['다친 곳을 숨겨요', '']], answer: '×, ○, ×' },
              { type: 'draw', prompt: '다쳤을 때 어른에게 알리는 내 모습을 그려 보세요.' },
              { type: 'short', prompt: '다쳤을 때 할 말을 한 문장 쓰세요.' },
            ],
          },
        },
        diff: {
          easy: '카드를 놓으면 맞는지 바로 알려 주고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
          base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 위험한 보기를 가려내요.',
        },
        notes: '자주 보이는 어려움: ① 혼날까 봐 다친 것을 숨긴다 → 어른은 도우려고 묻는다는 점을 되풀이해 말한다. ② 위험한 물건을 스스로 치우려 한다 → 어린이가 할 일은 떨어져서 어른을 부르는 것임을 짚는다. ③ 다친 친구를 억지로 일으킨다 → 움직이면 더 다칠 수 있어 어른이 올 때까지 곁에 있게 한다.',
      }),
    ],
  });
})();
