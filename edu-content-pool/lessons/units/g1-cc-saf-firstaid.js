/* 1학년 창체 안전교육 — 응급처치 (차시 2개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 응급처치
 * (응급상황 알기·도움 요청하기, 청결 유지). 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g1-cc-saf-firstaid';
  const UNIT = 'g1-창체-saf-firstaid';
  const TITLE = '응급처치';
  const GRADE = 1;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'mint', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '1학년 응급처치는 "다치면 숨기지 않고 어른에게 알린다"와 "손을 깨끗이 씻는다" 두 가지를 몸에 익히는 단원입니다. 1차시에는 나나 친구가 다친 장면에서 알맞은 행동을 고르고, 누구에게 알릴지 잇습니다. 2차시에는 비누로 손 씻는 차례를 놓아 보고 손을 씻어야 하는 때를 고릅니다. 1학년은 직접 치료하기보다 알리기와 도움 청하기가 범위이므로, 상처를 스스로 만지거나 약을 바르는 활동은 넣지 않았습니다. 통합교과 「안전한 생활」 수업과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '다친 장면에서 어른에게 알리는 행동 고르기',
        objective: '나나 친구가 다쳤을 때 숨기지 않고 가까운 어른에게 알리는 행동을 고를 수 있다.',
        draw: 'a small child pointing to a scraped knee while a kind teacher kneels down to look, with a friend standing beside them',
        banner: '다치면 어른에게 말해요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"운동장에서 넘어져 무릎에서 피가 조금 나요. 그런데 혼날까 봐 아무에게도 말하지 않았어요. 괜찮을까요?" 두세 명의 대답을 듣고(기다릴 반응: "아파요", "선생님께 말해요") 시연 단추로 "어른에게 알려요" 카드가 놓이는 모습을 보여 준다. "참으면 나아요"가 나오면 "다친 곳에 흙이 들어가면 어떻게 될까요?"라고 되묻는다.',
          student: '다쳤을 때 누구에게 말하면 좋을까요? 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '다쳤을 때', slots: ['좋아요', '안 좋아요'], cards: ['어른에게 알려요', '혼자 숨겨요'], shuffle: false }, sequence: [{ sort: { '좋아요': ['어른에게 알려요'], '안 좋아요': ['혼자 숨겨요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 다쳤을 때 어떻게 할까', tool: 'emotion',
            teacher: '"이렇게 하면 다음에 어떻게 될까요?" 보기를 고를 때마다 결과를 소리 내어 읽어 준다. 1번에서 "참고 계속 놀아요"를 고른 학생에게 "다친 곳은 누가 살펴 주나요?"라고 묻는다. 2번에서 친구를 억지로 일으키려는 학생이 많다 — "움직이면 더 아플 수 있어요. 어른을 먼저 불러요"라고 짚는다.',
            task: '다친 장면을 보고 어떻게 할지 골라요. 고르면 생기는 일도 읽어요.',
            levels: LVB,
            items: [
              EB('넘어져서 무릎이 까졌어요. 어떻게 할까요?', '쉬는 시간에 넘어져 무릎이 까졌어요.', [
                { id: 'tell', text: '선생님께 가서 보여 줘요', result: '선생님이 깨끗하게 돌봐 줘요.', mood: '안심' },
                { id: 'hide', text: '바지로 가리고 숨겨요', result: '계속 아프고 더러워져요.', mood: '걱정', why: '숨기면 아무도 도와줄 수 없어요.' },
                { id: 'play', text: '참고 계속 뛰어놀아요', result: '또 넘어져 더 아파요.', mood: '속상함', why: '다치면 놀이를 멈추고 알려요.' }], 'tell', 0.1),
              EB('친구가 넘어져서 울고 있어요. 어떻게 할까요?', '그네 옆에서 친구가 넘어져 일어나지 못해요.', [
                { id: 'pull', text: '친구 팔을 세게 잡아당겨요', result: '친구가 더 아파해요.', mood: '걱정', why: '억지로 일으키면 더 다칠 수 있어요.' },
                { id: 'call', text: '"선생님!" 하고 큰 소리로 불러요', result: '선생님이 빨리 와서 도와줘요.', mood: '안심' },
                { id: 'go', text: '모른 척하고 교실로 가요', result: '친구 혼자 아파요.', mood: '속상함', why: '친구가 다치면 어른에게 알려 줘요.' }], 'call', 0.2),
              EB('배가 아프고 머리가 뜨거워요. 어떻게 할까요?', '수업 시간에 갑자기 배가 아프고 열이 나요.', [
                { id: 'wait', text: '끝날 때까지 꾹 참아요', result: '점점 더 힘들어져요.', mood: '불안', why: '아플 때는 참지 말고 말해요.' },
                { id: 'say', text: '손을 들고 아프다고 말해요', result: '보건실에 가서 쉬어요.', mood: '편안함' },
                { id: 'sleep', text: '책상에 엎드려 잠을 자요', result: '아무도 아픈 줄 몰라요.', mood: '걱정', why: '말하지 않으면 어른이 알 수 없어요.' }], 'say', 0.2,
                { conclude: '아프거나 다치면 참지 말고 가까운 어른에게 바로 말해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 누구에게 알릴까', tool: 'mindmap',
            teacher: '"지금 가장 가까이 있는 어른은 누구일까요?" 장소와 사람을 이을 때 "엄마에게만 말해요"라는 학생에게 "학교에 있을 때 엄마는 어디 계시나요?"라고 되묻는다. 3번은 가까운 어른에게 알리는 것이 먼저라는 것만 짚고, 실제 전화번호는 적게 하지 않는다.',
            task: '다친 곳과 알릴 어른을 잇고, 알리는 말을 골라요.',
            levels: LV,
            items: [
              MM('있는 곳과 알릴 어른을 이어요. 맞지 않는 카드는 남겨요.', '누구에게 알릴까', [{ id: 'p1', label: '교실' }, { id: 'p2', label: '집' }, { id: 'p3', label: '놀이터' }], ['담임 선생님', '집에 계신 어른', '함께 온 어른', '처음 보는 형'], { p1: '담임 선생님', p2: '집에 계신 어른', p3: '함께 온 어른' }, 0.15),
              MP('어른에게 알리는 말을 모두 골라요.', '알리는 말', ['무릎을 다쳤어요', '배가 아파요', '아무 일 없어요', '친구가 넘어졌어요'], ['무릎을 다쳤어요', '배가 아파요', '친구가 넘어졌어요'], 0.2),
              MS('행동 카드를 나누어 보세요.', '다쳤을 때', ['좋아요', '안 좋아요'], ['어른에게 보여 줘요', '다친 곳을 손으로 비벼요', '그 자리에 앉아 쉬어요', '혼날까 봐 숨겨요'], { '좋아요': ['어른에게 보여 줘요', '그 자리에 앉아 쉬어요'], '안 좋아요': ['다친 곳을 손으로 비벼요', '혼날까 봐 숨겨요'] }, 0.2,
                { conclude: '다치면 멈추고, 가까운 어른에게 보여 주고 말해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 말 가운데 다쳤을 때 할 말을 함께 말해 볼까요? \'선생님, 저 다쳤어요.\'" 출구 1번에서 숨기는 보기를 고른 학생에게는 "어른은 혼내려고가 아니라 도와주려고 물어봐요"라고 말해 준다.',
          exit: [
            { type: 'choice', prompt: '손가락을 문에 찧었어요. 먼저 할 일은 무엇인가요?', options: ['참고 숨겨요', '가까운 어른에게 말해요', '계속 놀아요'], answer: 1, difficulty: 0.1, explain: '다치면 가까운 어른에게 말해요.' },
            { type: 'choice', prompt: '친구가 다쳐서 울어요. 나는 무엇을 할까요?', options: ['어른을 불러요', '웃어요', '혼자 가요'], answer: 0, difficulty: 0.1, explain: '친구가 다치면 어른을 불러 줘요.' },
            MOOD,
          ],
        },
        wsTitle: '다치면 어른에게 알려요',
        ws: [
          { type: 'table', prompt: '좋은 행동이면 ○, 안 좋은 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['어른에게 말해요', ''], ['다친 곳을 숨겨요', ''], ['친구를 세게 당겨요', ''], ['선생님을 불러요', '']], answer: '○, ×, ×, ○' },
          { type: 'choice', prompt: '학교에서 다치면 누구에게 말할까요?', options: ['선생님', '아무도 없어요', '처음 보는 사람'], answer: '선생님' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '다치면 숨기지 않고 ___에게 말해요.', answer: '어른' },
          { type: 'draw', prompt: '다쳤을 때 선생님께 말하는 내 모습을 그려요.' },
        ],
        notes: '자주 보이는 어려움: ① 혼날까 봐 다친 것을 숨긴다 → 어른은 도우려고 묻는다고 되풀이해 말한다. ② 친구를 억지로 일으킨다 → 어른을 먼저 부르게 한다. ③ 엄마에게만 말해야 한다고 여긴다 → 지금 가장 가까이 있는 어른에게 말하게 한다. 실제 다친 경험을 자세히 말하게 하지 않는다.',
      }),

      LESSON(2, {
        title: '비누로 손 씻는 차례 놓고 씻을 때 고르기',
        objective: '비누로 손을 씻는 차례를 말하고, 손을 씻어야 하는 때를 고를 수 있다.',
        draw: 'two children washing their hands with soap bubbles at a small paper sink, with water drops and a towel',
        banner: '뽀득뽀득 손 씻기', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"손에 묻은 병균은 눈에 보일까요?" 대답을 듣고(기다릴 반응: "안 보여요") "보이지 않아도 손에 묻어 있다가 입이나 눈으로 들어갈 수 있어요"라고 말한다. 시연 단추로 손 씻기 카드가 차례로 놓이는 모습을 보여 준다. "물만 묻히면 돼요"가 나오면 "비누 거품은 무엇을 해 줄까요?"라고 되묻는다.',
          student: '오늘 손을 언제 씻었는지 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '물을 묻혀요', motif: 'wave' }, { id: 'd2', text: '비누 거품을 내요', motif: 'cloud' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 손 씻는 차례 놓기', tool: 'story',
            teacher: '"비누 거품을 내고 나서 바로 물로 헹구면 될까요?" 손바닥·손등·손가락 사이·손톱 밑까지 문질러야 한다는 것을 손으로 따라 하게 한다. 헹구기 전에 수건으로 닦는 차례를 놓는 학생에게 "거품이 묻은 채 닦으면 어떻게 될까요?"라고 묻는다. 비누로 30초쯤 문지르는 동안 노래 한 곡을 부르게 해도 좋다.',
            task: '손 씻기 카드를 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('손 씻는 차례대로 카드를 놓아요.', '손 씻기', ['먼저', '다음', '그다음', '마지막'], [{ id: 'w1', text: '손에 물을 묻혀요', motif: 'wave' }, { id: 'w2', text: '비누 거품을 내요', motif: 'cloud' }, { id: 'w3', text: '흐르는 물로 헹궈요', motif: 'wave' }, { id: 'w4', text: '깨끗한 수건으로 닦아요', motif: 'sun' }], ['w1', 'w2', 'w3', 'w4'], 0.15),
              SO('거품으로 문지르는 곳을 차례대로 놓아요.', '구석구석 문질러요', ['먼저', '다음', '그다음', '마지막'], [{ id: 'r1', text: '손바닥끼리 비벼요', motif: 'leaf' }, { id: 'r2', text: '손등을 문질러요', motif: 'leaf' }, { id: 'r3', text: '손가락 사이를 비벼요', motif: 'flower' }, { id: 'r4', text: '손톱 밑을 문질러요', motif: 'star' }], ['r1', 'r2', 'r3', 'r4'], 0.25),
              MS('손 씻기 모습을 나누어 보세요.', '손 씻기', ['잘했어요', '다시 해요'], ['비누로 꼼꼼히 문질러요', '물만 살짝 묻혀요', '손가락 사이도 씻어요', '젖은 손을 옷에 닦아요'], { '잘했어요': ['비누로 꼼꼼히 문질러요', '손가락 사이도 씻어요'], '다시 해요': ['물만 살짝 묻혀요', '젖은 손을 옷에 닦아요'] }, 0.2,
                { conclude: '비누 거품으로 구석구석 문지르고 흐르는 물로 헹궈요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 손을 씻어야 할 때', tool: 'mindmap',
            teacher: '"밥 먹기 전과 밥 먹은 뒤 가운데 언제 꼭 씻어야 할까요?" 둘 다 씻으면 좋지만 먹기 전에는 꼭 씻는다고 짚는다. 기침을 손으로 막은 뒤에도 씻어야 한다는 것을 모르는 학생이 많다 — "손에 무엇이 묻었을까요?"라고 묻는다. 다친 친구를 돕기 전후에도 손을 씻는다는 것을 응급처치와 이어 말한다.',
            task: '손을 씻어야 할 때를 골라 담고 나누어요.',
            levels: LV,
            items: [
              MP('손을 꼭 씻어야 할 때를 모두 골라요.', '손 씻을 때', ['밥 먹기 전', '화장실에 다녀온 뒤', '그림책을 보는 중', '밖에서 놀고 들어와서'], ['밥 먹기 전', '화장실에 다녀온 뒤', '밖에서 놀고 들어와서'], 0.15),
              MS('때를 두 가지로 나누어 보세요.', '언제 씻을까', ['꼭 씻어요', '안 씻어도 돼요'], ['손으로 기침을 막은 뒤', '동물을 만진 뒤', '노래를 부를 때', '친구와 이야기할 때'], { '꼭 씻어요': ['손으로 기침을 막은 뒤', '동물을 만진 뒤'], '안 씻어도 돼요': ['노래를 부를 때', '친구와 이야기할 때'] }, 0.25),
              MM('장면과 알맞은 행동을 이어요. 맞지 않는 카드는 남겨요.', '깨끗하게', [{ id: 'c1', label: '기침이 나와요' }, { id: 'c2', label: '손이 더러워요' }, { id: 'c3', label: '코를 풀었어요' }], ['옷소매로 입을 가려요', '비누로 손을 씻어요', '휴지는 휴지통에 버려요', '손을 입에 넣어요'], { c1: '옷소매로 입을 가려요', c2: '비누로 손을 씻어요', c3: '휴지는 휴지통에 버려요' }, 0.3,
                { conclude: '깨끗한 손과 기침 예절은 나와 친구를 아프지 않게 지켜 줘요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 점심 먹기 전에 손을 어떻게 씻을지 손으로 보여 줄까요?" 다 같이 손 씻기 동작을 따라 한다. 출구 1번에서 "물만 묻혀요"를 고른 학생에게 비누 거품이 병균을 씻어 낸다는 것을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '손을 씻을 때 꼭 쓰는 것은 무엇인가요?', options: ['비누', '연필', '크레파스'], answer: 0, difficulty: 0.1, explain: '비누 거품으로 문질러야 깨끗해져요.' },
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '씻을 때', basket: '씻을 때', cards: ['집에 들어왔을 때', '간식 먹기 전', '책을 읽을 때', '강아지를 만진 뒤'] }, state: { at: {} }, prompt: '손을 씻어야 할 때만 골라 담아요.', target: { pick: ['집에 들어왔을 때', '간식 먹기 전', '강아지를 만진 뒤'] }, difficulty: 0.2 },
            MOOD,
          ],
        },
        wsTitle: '뽀득뽀득 손 씻기',
        ws: [
          { type: 'table', prompt: '손 씻는 차례에 맞게 1~4를 쓰세요.', columns: ['하는 일', '차례'], cells: [['비누 거품을 내요', ''], ['수건으로 닦아요', ''], ['물을 묻혀요', ''], ['물로 헹궈요', '']], answer: '2, 4, 1, 3' },
          { type: 'choice', prompt: '손을 꼭 씻어야 할 때에 ○ 하세요.', options: ['화장실에 다녀온 뒤', '노래를 부를 때', '책을 볼 때'], answer: '화장실에 다녀온 뒤' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기침이 나면 옷___로 입을 가려요.', answer: '소매' },
          { type: 'draw', prompt: '비누로 손을 씻는 내 모습을 그려요.' },
        ],
        notes: '자주 보이는 어려움: ① 물만 묻히고 끝낸다 → 비누 거품으로 30초쯤 문지르게 한다(질병관리청 손 씻기 안내). ② 손가락 사이·손톱 밑을 빠뜨린다 → 직접 동작을 따라 하게 한다. ③ 젖은 손을 옷에 닦는다 → 깨끗한 수건·휴지를 쓰게 한다.',
      }),
    ],
  });
})();
