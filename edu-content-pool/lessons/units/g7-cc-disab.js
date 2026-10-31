/* 중1 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간.
 * 에티켓은 시각장애인 안내(먼저 묻기, 팔을 내어 주고 반 걸음 앞서 걷기), 보조견 존중, 청각장애인과 얼굴 보고 말하기·글로 나누기, 휠체어 허락 없이 밀지 않기 같은 일반적 원칙만 다룬다. 통계 숫자는 쓰지 않는다. 장면·인물은 가명. */
(function () {
  const G = 7; const CODE = 'disab';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '장애인식개선';
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
    { motif: 'house', x: 96, y: 214, color: 'sky', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
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
    flow: '중학교 첫 장애인식개선 수업입니다. 1차시에는 장애에 대한 흔한 편견(장애는 태어날 때부터만 생긴다, 장애인은 늘 도움이 필요하다 등)과 사실을 가려내고, 장애우·정상인 같은 말 대신 장애인·비장애인처럼 바른 말을 씁니다. 2차시에는 시각·청각·지체 장애가 있는 사람을 만나는 장면에서 "먼저 묻고, 원하는 방식으로 돕는" 에티켓을 고릅니다. 동정이나 칭찬이 아니라 한 사람으로 대하는 태도가 중심입니다. 2학년(편의시설·통합학급), 3학년(차별 판단·보편적 설계)으로 이어집니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '장애에 대한 편견과 사실 가려내고 바른 말 쓰기',
        objective: '장애에 대한 흔한 편견과 사실을 가려내고, 장애를 부르는 바른 말을 골라 쓸 수 있다.',
        draw: 'diverse paper-cut teenagers including a wheelchair user and a student with a white cane chatting together in a school hallway',
        banner: '다름은 틀림이 아니에요', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"장애라는 낱말을 들으면 어떤 모습이 먼저 떠오르나요?" 대답을 듣고(기다릴 반응: "휠체어요", "불쌍해요") 시연으로 문장 카드를 나눈다. "장애인은 불쌍해요"라는 말이 나오면 "불편함이 있는 것과 불쌍한 것은 같은 말일까요?"라고 되묻는다. 오늘은 장애에 대한 생각 가운데 사실과 편견을 가려 본다고 밝힌다.',
          student: '"장애"라는 말을 들을 때 떠오르는 낱말 하나를 짝에게 말하고, 그 낱말이 사실인지 생각해 봅시다.',
          demo: DEMO('장애에 대한 생각', ['사실', '편견'], ['장애는 누구에게나 생길 수 있어요', '장애인은 아무것도 못 해요'], { '사실': ['장애는 누구에게나 생길 수 있어요'], '편견': ['장애인은 아무것도 못 해요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사실과 편견 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 문장은 모든 장애인에게 맞는 말일까요?" "모든·늘·아무것도" 같은 낱말이 들어가면 편견일 가능성이 크다는 점을 짚는다. 많은 장애가 살면서 질병이나 사고로 생긴다는 점을 말해 주며 "장애는 남의 일"이라는 생각을 되묻는다. 패럴림픽 선수나 예술가 이야기로 "특별히 대단해야 존중받는다"는 오해로 흐르지 않게 한다.',
            task: '장애에 대한 문장 카드를 사실과 편견으로 나누고 까닭을 말해요.',
            levels: LV,
            items: [
              MS('장애에 대한 문장을 두 가지로 나누어 보세요.', '장애에 대한 생각', ['사실', '편견'], ['살면서 장애가 생기기도 해요', '장애인은 늘 도움이 필요해요', '장애의 종류와 정도는 다양해요', '장애는 옮을 수 있어요'], { '사실': ['살면서 장애가 생기기도 해요', '장애의 종류와 정도는 다양해요'], '편견': ['장애인은 늘 도움이 필요해요', '장애는 옮을 수 있어요'] }, 0.2),
              MS('일과 생활에 대한 문장을 두 가지로 나누어 보세요.', '일과 생활', ['사실', '편견'], ['보조기기로 할 수 있는 일이 늘어요', '장애인은 일을 할 수 없어요', '시각장애인도 화면 읽기로 공부해요', '휠체어 사용자는 운동을 못 해요'], { '사실': ['보조기기로 할 수 있는 일이 늘어요', '시각장애인도 화면 읽기로 공부해요'], '편견': ['장애인은 일을 할 수 없어요', '휠체어 사용자는 운동을 못 해요'] }, 0.25),
              MM('편견 문장과 그것을 바로잡는 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '편견 바로잡기', [{ id: 'p1', label: '장애인은 불쌍해요' }, { id: 'p2', label: '장애는 태어날 때만 생겨요' }, { id: 'p3', label: '말을 못 하면 생각도 못 해요' }], ['불편함이 있을 뿐 한 사람이에요', '누구나 살면서 생길 수 있어요', '수어·글로 생각을 나눠요', '도와주면 칭찬받아요'], { p1: '불편함이 있을 뿐 한 사람이에요', p2: '누구나 살면서 생길 수 있어요', p3: '수어·글로 생각을 나눠요' }, 0.3,
                { conclude: '"모든·늘·아무것도"가 붙은 말은 한 사람 한 사람의 다양함을 지워 버리는 편견이 되기 쉬워요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 장애를 부르는 바른 말 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"장애우는 친구라는 뜻이라 좋은 말 아닌가요?" 그 말은 장애인을 스스로를 가리킬 수 없는, 늘 누군가의 친구로만 보는 말이라 장애인 당사자 단체에서도 쓰지 말자고 한다는 점을 짚는다. "정상인"은 장애인을 비정상으로 만드는 말이라 "비장애인"으로 바꾼다. 장난으로 쓰는 장애 비하 표현도 차별이 된다고 말해 준다.',
            task: '장애를 부르는 말을 바른 말과 바꿀 말로 나누고, 고쳐 써요.',
            levels: LV,
            items: [
              MS('낱말을 두 가지로 나누어 보세요.', '장애를 부르는 말', ['바른 말', '바꿀 말'], ['장애인', '장애우', '비장애인', '정상인'], { '바른 말': ['장애인', '비장애인'], '바꿀 말': ['장애우', '정상인'] }, 0.2),
              MM('바꿀 말과 바른 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '말 바꾸기', [{ id: 'w1', label: '장애를 앓고 있어요' }, { id: 'w2', label: '일반 학생' }, { id: 'w3', label: '장애자' }], ['장애가 있어요', '비장애 학생', '장애인', '불쌍한 학생'], { w1: '장애가 있어요', w2: '비장애 학생', w3: '장애인' }, 0.25),
              MP('친구들 사이에서 장애 비하 표현을 들었을 때 알맞은 행동만 골라 담아 보세요.', '비하 표현을 들으면', ['그 말은 상처가 된다고 말해요', '바른 말로 바꾸어 말해요', '재밌으니 따라 해요', '못 들은 척 웃어요'], ['그 말은 상처가 된다고 말해요', '바른 말로 바꾸어 말해요'], 0.3,
                { conclude: '장애는 병도 결점도 아니므로 "앓다", "정상"이 아니라 "있다", "비장애"로 말해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 바꾸기로 한 말 하나를 소리 내어 말해 볼까요?" 출구 1번에서 "장애인은 늘 도움이 필요해요"를 사실로 둔 학생에게는 도움이 필요한지는 그 사람에게 물어서 안다는 점을 다음 시간 에티켓과 이어 말한다.',
          exit: [
            XS('문장 카드를 두 가지로 나누어 보세요.', '사실일까 편견일까', ['사실', '편견'], ['장애인도 꿈과 직업이 있어요', '장애인은 모두 같아요', '장애는 다양해요', '장애인은 혼자 못 다녀요'], { '사실': ['장애인도 꿈과 직업이 있어요', '장애는 다양해요'], '편견': ['장애인은 모두 같아요', '장애인은 혼자 못 다녀요'] }),
            XC('"정상인" 대신 쓰는 바른 말은 무엇인가요?', ['일반인', '비장애인', '건강인'], 1, '장애가 없는 사람은 "비장애인"이라고 불러요.'),
            XT('오늘 알게 된 편견 하나와 그것을 바로잡는 말을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '편견과 사실, 바른 말',
          items: [
            { type: 'table', prompt: '문장이 사실이면 ○, 편견이면 ×를 쓰세요.', columns: ['문장', '○ / ×'], cells: [['장애는 누구에게나 생길 수 있다', ''], ['장애인은 아무것도 못 한다', ''], ['장애의 종류와 정도는 다양하다', ''], ['장애는 옮는다', '']], answer: '○, ×, ○, ×' },
            { type: 'table', prompt: '바꿀 말을 바른 말로 고쳐 쓰세요.', columns: ['바꿀 말', '바른 말'], cells: [['장애우', ''], ['정상인', ''], ['장애를 앓다', '']], answer: '장애인, 비장애인, 장애가 있다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '"모든·늘·아무것도"가 붙은 말은 ___일 때가 많아요.', answer: '편견' },
            { type: 'short', prompt: '장애가 있는 친구를 "한 사람"으로 대한다는 것이 무엇인지 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① "장애우"를 좋은 말로 안다 → 장애인을 주체가 아니라 누군가의 친구로만 보는 말이라 장애인으로 쓴다는 점을 짚는다. ② 동정·칭찬이 존중이라고 여긴다 → 불쌍함도 대단함도 아닌 한 사람으로 대하는 것이 존중이다. ③ 반에 장애가 있는 학생이 있으면 그 학생을 예로 들지 않는다.',
      }),

      LESSON(2, {
        title: '먼저 묻고 원하는 방식으로 돕는 장면 고르기',
        objective: '시각·청각·지체 장애가 있는 사람을 만나는 장면에서 먼저 묻고 상대가 원하는 방식으로 돕는 행동을 고를 수 있다.',
        draw: 'a teenager offering an elbow to a person with a white cane at a crosswalk, and a guide dog walking calmly',
        banner: '먼저 물어요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'sky' }],
        intro: {
          teacher: '"길에서 흰 지팡이를 쓰는 사람이 멈춰 서 있다면 가장 먼저 할 일은 무엇일까요?" 대답을 듣고(기다릴 반응: "손을 잡아 줘요", "도와드릴까요 물어봐요") 시연으로 행동 카드를 나눈다. "말없이 팔을 끌면 빨리 도울 수 있어요"라는 말이 나오면 "누가 갑자기 내 팔을 잡아끈다면 어떤 마음일까요?"라고 되묻는다. 오늘은 먼저 묻고 돕는 에티켓을 연습한다고 밝힌다.',
          student: '누군가 내 허락 없이 나를 도와주려 해서 불편했던 장면을 가상으로 떠올려 짝에게 말해 봅시다.',
          demo: DEMO('돕는 방법', ['좋은 에티켓', '아쉬운 행동'], ['도와드릴까요? 묻기', '말없이 팔 끌기'], { '좋은 에티켓': ['도와드릴까요? 묻기'], '아쉬운 행동': ['말없이 팔 끌기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 만나는 장면에서 행동 고르기', minutes: 14, tool: 'emotion',
            teacher: '"상대가 거절하면 어떻게 해야 할까요?" 도움을 거절하는 것도 그 사람의 선택이니 존중한다는 점을 짚는다. 안내견 장면에서 "귀여워서 쓰다듬고 싶어요"라는 학생에게는 일하는 중인 보조견을 만지거나 부르면 안내를 방해한다는 점을 말해 준다. 결과 칸을 읽으며 상대의 마음을 함께 떠올리게 한다.',
            task: '장애가 있는 사람을 만나는 장면에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('횡단보도 앞에서 흰 지팡이를 쓰는 분이 머뭇거려요.', '횡단보도 앞, 흰 지팡이를 쓰는 분이 신호를 기다리며 머뭇거려요.', [
                { id: 'pull', text: '말없이 팔을 잡아 건너요', result: '그분이 깜짝 놀라 균형을 잃을 뻔해요.', mood: '놀람', why: '허락 없이 몸을 잡으면 놀라고 위험할 수 있어요.' },
                { id: 'ask', text: '"도와드릴까요?" 하고 먼저 물어요', result: '그분이 원하는 방법을 알려 주어 함께 건너요.', mood: '고마움' },
                { id: 'pass', text: '알아서 하겠지 하고 지나가요', result: '그분이 신호를 놓쳐 한참 기다려요.', mood: '걱정', why: '먼저 물으면 도움이 필요한지 알 수 있어요.' }], 'ask', 0.2),
              EB('식당에서 안내견과 함께 온 분 옆자리에 앉았어요.', '분식집 옆 테이블에 안내견과 함께 온 분이 앉아요. 동생이 강아지를 만지고 싶어 해요.', [
                { id: 'pet', text: '동생과 같이 쓰다듬어요', result: '안내견이 일에 집중하지 못해요.', mood: '걱정', why: '일하는 보조견을 만지거나 부르면 안내를 방해해요.' },
                { id: 'food', text: '귀여워서 소시지를 줘요', result: '안내견의 건강과 훈련을 해칠 수 있어요.', mood: '미안함', why: '보조견에게 먹이를 주면 안 돼요.' },
                { id: 'respect', text: '"일하는 중이라 만지면 안 돼"라고 동생에게 말해요', result: '안내견이 편안하게 주인 곁을 지켜요.', mood: '편안함' }], 'respect', 0.25),
              EB('휠체어를 쓰는 분이 문턱 앞에서 멈췄어요.', '도서관 입구 문턱 앞에서 휠체어를 쓰는 분이 멈춰 있어요.', [
                { id: 'push', text: '뒤에서 휠체어를 밀어요', result: '갑자기 움직여 그분이 놀라요.', mood: '놀람', why: '휠체어는 그 사람의 몸과 같아서 허락 없이 밀지 않아요.' },
                { id: 'ask', text: '"문을 잡아 드릴까요?" 하고 물어요', result: '그분이 원하는 도움을 말하고 함께 들어가요.', mood: '고마움' },
                { id: 'stare', text: '멀리서 계속 쳐다봐요', result: '그분이 불편한 눈길을 느껴요.', mood: '부끄러움', why: '빤히 쳐다보는 것도 상대를 불편하게 해요.' }], 'ask', 0.3,
                { conclude: '돕기 전에 묻고, 상대가 원하는 방식으로 — 거절도 그 사람의 선택이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 장애 유형별 에티켓 정리하기', minutes: 13, tool: 'emotion',
            teacher: '"청각장애가 있는 친구와 이야기할 때 크게 소리치면 잘 들릴까요?" 얼굴을 보고 입 모양이 보이게 또렷하게 말하거나, 글·문자로 나누는 방법을 짚는다. 시각장애인 안내는 내 팔꿈치 위를 잡게 하고 반 걸음 앞서 걷는다는 점을 몸으로 보여 준다(학생끼리 몸을 잡게 하지는 않는다).',
            task: '장애 유형별로 알맞은 에티켓을 잇고 나누어요.',
            levels: LV,
            items: [
              { prompt: '상황과 알맞은 에티켓을 이어 보세요. 맞지 않는 카드는 남겨요.', toolOptions: { mode: 'match', slots: [{ id: 'e1', label: '시각장애인을 안내할 때' }, { id: 'e2', label: '청각장애인과 이야기할 때' }, { id: 'e3', label: '휠체어 사용자와 오래 이야기할 때' }], cards: ['내 팔을 잡게 하고 앞서 걸어요', '얼굴을 보고 또렷하게 말해요', '눈높이를 맞춰요', '큰 소리로 외쳐요'] }, target: { match: { e1: '내 팔을 잡게 하고 앞서 걸어요', e2: '얼굴을 보고 또렷하게 말해요', e3: '눈높이를 맞춰요' } }, difficulty: 0.2 },
              { prompt: '에티켓 카드를 두 가지로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['좋은 에티켓', '아쉬운 행동'], cards: ['글이나 문자로 대화해요', '보호자에게만 말을 걸어요', '"여기 계단이 있어요" 알려요', '대신 다 해 줘요'] }, target: { sort: { '좋은 에티켓': ['글이나 문자로 대화해요', '"여기 계단이 있어요" 알려요'], '아쉬운 행동': ['보호자에게만 말을 걸어요', '대신 다 해 줘요'] } }, difficulty: 0.25 },
              { prompt: '도움을 거절당했을 때 알맞은 행동만 골라 담아 보세요.', toolOptions: { mode: 'pick', basket: '거절당했을 때', cards: ['"알겠어요" 하고 존중해요', '필요하면 말해 달라고 해요', '그래도 억지로 도와요', '서운하다고 화를 내요'] }, target: { pick: ['"알겠어요" 하고 존중해요', '필요하면 말해 달라고 해요'] }, difficulty: 0.3,
                conclude: '에티켓의 핵심은 상대를 스스로 결정하는 한 사람으로 대하는 것이에요.' },
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 에티켓 가운데 가장 기억에 남는 한마디는 무엇인가요?" 출구 1번에서 말없이 돕기를 고른 학생에게는 "도와드릴까요?" 한마디의 힘을 다시 말해 준다. 1차시의 바른 말과 오늘의 에티켓을 "말과 행동 모두 한 사람으로"로 묶는다.',
          exit: [
            XB('버스 정류장에서 휠체어를 쓰는 분이 버스 번호를 보기 어려워하는 것 같아요. 어떻게 할까요?', '정류장에서 휠체어를 쓰는 분이 다가오는 버스 쪽을 자꾸 살펴요.', [
              { id: 'ask', text: '"몇 번 버스 기다리세요?" 하고 물어요' },
              { id: 'push', text: '버스 앞까지 휠체어를 밀어 드려요', why: '허락 없이 휠체어를 밀지 않아요.' },
              { id: 'ignore', text: '모른 척 휴대전화를 봐요', why: '먼저 물으면 필요한 도움을 알 수 있어요.' }], 'ask'),
            XC('일하는 중인 안내견을 만났을 때 알맞은 행동은 무엇인가요?', ['이름을 불러 관심을 끈다', '만지거나 먹이를 주지 않는다', '사진을 찍으며 따라간다'], 1, '일하는 보조견은 만지거나 부르지 않아야 안내에 집중할 수 있어요.'),
            XT('장애가 있는 사람을 도울 때 내가 먼저 건넬 말을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '먼저 묻고 돕기',
          items: [
            { type: 'table', prompt: '상황에서 알맞은 에티켓을 쓰세요.', columns: ['상황', '에티켓'], cells: [['시각장애인 안내', ''], ['청각장애인과 대화', ''], ['휠체어 사용자 돕기', ''], ['안내견을 만났을 때', '']], answer: '먼저 묻고 팔을 내어 주고 앞서 걷기, 얼굴 보고 또렷하게·글로 나누기, 허락 없이 밀지 않고 먼저 묻기, 만지거나 부르지 않기' },
            { type: 'choice', prompt: '도움을 거절당했을 때 알맞은 행동에 ○ 하세요.', options: ['억지로 돕는다', '존중하고 필요하면 말해 달라고 한다', '화를 낸다'], answer: '존중하고 필요하면 말해 달라고 한다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '돕기 전에 "도와드릴까요?" 하고 먼저 ___.', answer: '물어요' },
            { type: 'short', prompt: '"대신 다 해 주는 것"이 왜 좋은 도움이 아닐 수 있는지 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 빨리 돕는 것이 좋은 도움이라 여긴다 → 먼저 묻고 상대의 방식을 따르는 것이 에티켓임을 짚는다. ② 보조견을 반려견처럼 대한다 → 일하는 중에는 만지거나 부르지 않는다. ③ 시각장애인 안내 시연을 학생끼리 눈을 가리고 하게 할 때는 안전한 넓은 곳에서만 하고, 장애 체험이 "불쌍함"으로 끝나지 않게 마무리에서 에티켓으로 잇는다.',
      }),
    ],
  });
})();
