/* 2학년 창체 안전교육 — 응급처치. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 응급처치.
 * (응급상황 알기·119 신고와 주변에 알리기·상황별 응급처치) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g2-cc-saf-firstaid';
  const UNIT = 'g2-창체-saf-firstaid';
  const TITLE = '응급처치';
  const GRADE = 2;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
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
    flow: '2학년 응급처치는 1학년에서 익힌 "어른에게 알리기"를 넓혀, 어른이 곁에 없을 때 119에 알리는 말과 코피·작은 상처처럼 자주 겪는 일의 바른 대처를 익히는 단원입니다. 1차시에는 119에 전화할 일과 아닌 일을 나누고, 무슨 일인지·어디인지를 차례로 말하는 연습을 합니다. 2차시에는 코피가 나거나 살짝 긁혔을 때 할 행동을 고르고, 흔히 하는 잘못된 행동(고개 뒤로 젖히기 등)을 가려냅니다. 실제 전화번호·주소는 적게 하지 않고 가상의 장소로 연습합니다. 통합교과 「안전한 생활」 수업과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '119에 알릴 일 고르고 알리는 말 차례 놓기',
        objective: '119에 알려야 하는 일을 고르고, 무슨 일인지와 어디인지를 차례대로 말할 수 있다.',
        draw: 'a child holding a paper telephone calmly while an ambulance and a fire truck wait in the background',
        banner: '무슨 일? 어디?', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: {
          teacher: '"119는 언제 거는 번호일까요?" 두세 명의 대답을 듣고(기다릴 반응: "불이 났을 때요", "많이 다쳤을 때요") 시연 단추로 알리는 말 카드가 놓이는 모습을 보여 준다. "심심할 때 걸어 봐요"가 나오면 "그 사이에 정말 급한 사람이 전화를 못 하면 어떻게 될까요?"라고 되묻는다.',
          student: '119에 전화하면 누가 도와주러 올까요? 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '무슨 일인지 말해요', motif: 'star' }, { id: 'd2', text: '어디인지 말해요', motif: 'house' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 119에 알릴 일 나누기', tool: 'mindmap',
            teacher: '"이 일은 119에 알려야 할까요, 가까운 어른에게 말하면 될까요?" 연필을 잃어버린 일처럼 급하지 않은 일을 119로 놓는 학생에게 "소방관과 구급대원은 어떤 일을 하러 오나요?"라고 묻는다. 장난전화를 재미로 여기는 학생이 있다 — "장난전화 때문에 구급차가 늦게 갈 수 있어요"라고 짚는다.',
            task: '119에 알릴 일과 어른에게 말할 일을 나누어요.',
            levels: LV,
            items: [
              MS('일을 두 가지로 나누어 보세요.', '어디에 알릴까', ['119에 알려요', '어른에게 말해요'], ['집에 연기가 가득해요', '연필을 잃어버렸어요', '할머니가 쓰러졌어요', '숙제를 못 했어요'], { '119에 알려요': ['집에 연기가 가득해요', '할머니가 쓰러졌어요'], '어른에게 말해요': ['연필을 잃어버렸어요', '숙제를 못 했어요'] }, 0.15),
              MP('119에 전화해도 되는 일만 골라 담아요.', '119', ['사람이 물에 빠졌어요', '심심해서 걸어 봐요', '불길이 보여요', '친구와 다퉜어요'], ['사람이 물에 빠졌어요', '불길이 보여요'], 0.2),
              MM('누가 도와주러 오는지 이어요. 맞지 않는 카드는 남겨요.', '도와주는 사람', [{ id: 'h1', label: '불이 났어요' }, { id: 'h2', label: '크게 다쳤어요' }, { id: 'h3', label: '엘리베이터에 갇혔어요' }], ['소방관이 불을 꺼요', '구급대원이 병원에 데려가요', '구조대원이 꺼내 줘요', '택배 기사가 와요'], { h1: '소방관이 불을 꺼요', h2: '구급대원이 병원에 데려가요', h3: '구조대원이 꺼내 줘요' }, 0.25,
                { conclude: '119는 불, 크게 다친 사람, 갇힌 사람처럼 급한 일에 걸어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 알리는 말 차례대로', tool: 'story',
            teacher: '"전화를 받은 사람이 가장 먼저 알고 싶은 것은 무엇일까요?" 무슨 일인지 → 어디인지 → 묻는 말에 답하기 차례를 놓게 한다. 할 말만 하고 바로 끊는 학생이 많다 — "끊으면 더 물어볼 수가 없어요. \'끊어도 돼요\' 할 때까지 기다려요"라고 짚는다. 주소를 모를 때는 큰 건물·학교 이름을 말한다는 것을 연습한다(학생 집 주소는 적지 않는다).',
            task: '119에 알리는 말을 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('119에 전화할 때 차례대로 놓아요.', '119에 알려요', ['먼저', '다음', '그다음', '마지막'], [{ id: 't1', text: '119를 눌러요', motif: 'star' }, { id: 't2', text: '무슨 일인지 말해요', motif: 'cloud' }, { id: 't3', text: '어디인지 말해요', motif: 'house' }, { id: 't4', text: '묻는 말에 답해요', motif: 'sun' }], ['t1', 't2', 't3', 't4'], 0.15),
              SO('주소를 모를 때 차례대로 놓아요.', '어디인지 몰라요', ['먼저', '다음', '마지막'], [{ id: 'q1', text: '둘레를 살펴봐요', motif: 'tree' }, { id: 'q2', text: '큰 건물 이름을 말해요', motif: 'house' }, { id: 'q3', text: '끊지 말고 기다려요', motif: 'sun' }], ['q1', 'q2', 'q3'], 0.25),
              MS('119 전화 모습을 나누어 보세요.', '119 전화', ['잘했어요', '다시 해요'], ['천천히 또박또박 말해요', '말하고 바로 끊어요', '학교 이름을 말해요', '울기만 하고 말을 안 해요'], { '잘했어요': ['천천히 또박또박 말해요', '학교 이름을 말해요'], '다시 해요': ['말하고 바로 끊어요', '울기만 하고 말을 안 해요'] }, 0.25,
                { conclude: '무슨 일인지, 어디인지 말하고, 끊으라고 할 때까지 기다려요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"짝과 역할을 나누어 \'불이 났어요. ○○초등학교 옆 놀이터예요.\'라고 말해 볼까요?" 장난감 전화로 한 번씩 연습한다. 출구 2번에서 "바로 끊어요"를 고른 학생에게 기다리는 까닭을 다시 묻는다.',
          exit: [
            { type: 'choice', prompt: '119에 전화해야 할 때는 언제인가요?', options: ['길에서 사람이 쓰러졌을 때', '장난감이 고장 났을 때', '배가 고플 때'], answer: 0, difficulty: 0.1, explain: '사람이 쓰러지면 119에 알려요.' },
            { type: 'choice', prompt: '119에 할 말을 다 했어요. 다음에 할 일은?', options: ['바로 끊어요', '끊으라고 할 때까지 기다려요', '다시 걸어요'], answer: 1, difficulty: 0.2, explain: '전화 받는 사람이 더 물어볼 수 있어요.' },
            MOOD,
          ],
        },
        wsTitle: '119에 알리는 말',
        ws: [
          { type: 'table', prompt: '119에 알릴 일이면 ○, 아니면 ×를 쓰세요.', columns: ['일', '○ / ×'], cells: [['불이 났어요', ''], ['연필이 부러졌어요', ''], ['사람이 쓰러졌어요', ''], ['심심해요', '']], answer: '○, ×, ○, ×' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '119에 전화하면 무슨 ___인지, ___인지 말해요.', answer: '일, 어디' },
          { type: 'choice', prompt: '주소를 모를 때 말하면 좋은 것에 ○ 하세요.', options: ['큰 건물 이름', '좋아하는 노래', '내 별명'], answer: '큰 건물 이름' },
          { type: 'short', prompt: '"불이 났어요" 다음에 이어서 할 말을 한 문장으로 쓰세요(진짜 주소 대신 "○○ 놀이터"처럼).' },
        ],
        notes: '자주 보이는 어려움: ① 119를 아무 때나 걸어도 된다고 여긴다 → 급한 사람이 기다린다는 점을 짚는다. ② 말하고 바로 끊는다 → 상담원이 끊어도 된다고 할 때까지 기다린다. ③ 주소를 몰라 말을 못 한다 → 큰 건물·학교 이름을 말하는 연습을 한다. 학생의 실제 집 주소·전화번호는 적거나 말하게 하지 않는다.',
      }),

      LESSON(2, {
        title: '코피·긁힌 상처에 맞는 행동 고르기',
        objective: '코피가 나거나 살짝 긁혔을 때 바른 행동을 고르고, 잘못된 행동을 가려낼 수 있다.',
        draw: 'a child sitting and leaning slightly forward pinching the soft part of the nose, while a school nurse holds a tissue nearby',
        banner: '고개는 앞으로', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"코피가 나면 고개를 뒤로 젖혀야 할까요, 앞으로 숙여야 할까요?" 손을 들게 해 의견을 나눈 뒤(기다릴 반응: 뒤로 젖힌다는 대답이 많다) "뒤로 젖히면 피가 목으로 넘어가요. 앞으로 숙여요"라고 짚는다. 시연 단추로 코피 날 때 카드가 나뉘는 모습을 보여 준다.',
          student: '코피가 났던 친구를 본 적이 있나요? 그때 어떻게 했는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '코피가 나면', slots: ['맞아요', '틀려요'], cards: ['고개를 앞으로 숙여요', '고개를 뒤로 젖혀요'], shuffle: false }, sequence: [{ sort: { '맞아요': ['고개를 앞으로 숙여요'], '틀려요': ['고개를 뒤로 젖혀요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 이럴 땐 어떻게 할까', tool: 'emotion',
            teacher: '"이렇게 하면 어떻게 될까요?" 결과를 함께 읽는다. 코피 문항에서 휴지로 콧구멍을 깊이 막는 보기를 고르는 학생에게 "코의 부드러운 부분을 손가락으로 꼭 눌러요"라고 보여 준다. 긁힌 상처를 침으로 닦는 습관이 있는 학생이 있다 — "입 안에도 균이 있어요. 깨끗한 물로 씻어요"라고 짚는다. 피가 멈추지 않으면 어른·보건 선생님께 알린다는 것을 함께 말한다.',
            task: '코피·상처 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('수업 중에 코피가 나요. 어떻게 할까요?', '책을 읽다가 갑자기 코피가 나요.', [
                { id: 'back', text: '고개를 뒤로 젖혀요', result: '피가 목으로 넘어가 속이 불편해요.', mood: '불안', why: '뒤로 젖히면 피가 목으로 넘어가요.' },
                { id: 'front', text: '앉아서 고개를 앞으로 숙이고 코를 눌러요', result: '조금 뒤 피가 멈춰요.', mood: '편안함' },
                { id: 'run', text: '세수하러 뛰어가요', result: '뛰는 동안 피가 더 나요.', mood: '걱정', why: '뛰지 말고 앉아서 코를 눌러요.' }], 'front', 0.15),
              EB('놀다가 팔이 살짝 긁혔어요. 어떻게 할까요?', '운동장에서 놀다 팔이 조금 긁혔어요.', [
                { id: 'lick', text: '침을 발라요', result: '상처가 덧날 수 있어요.', mood: '걱정', why: '침에도 균이 있어요.' },
                { id: 'wash', text: '어른과 깨끗한 물로 씻어요', result: '상처가 깨끗해져요.', mood: '안심' },
                { id: 'dirt', text: '흙을 털고 그냥 놀아요', result: '흙 속 균이 들어갈 수 있어요.', mood: '불안', why: '상처는 깨끗한 물로 씻어요.' }], 'wash', 0.2),
              EB('코피가 한참 지나도 멈추지 않아요. 어떻게 할까요?', '코를 누르고 기다렸는데 피가 계속 나요.', [
                { id: 'tell', text: '보건 선생님께 알려요', result: '보건 선생님이 살펴 줘요.', mood: '안심' },
                { id: 'wait', text: '혼자 계속 참아요', result: '아무도 도와줄 수 없어요.', mood: '불안', why: '오래 멈추지 않으면 어른에게 알려요.' },
                { id: 'tissue', text: '휴지를 콧속 깊이 넣어요', result: '코 안이 다칠 수 있어요.', mood: '걱정', why: '휴지를 깊이 넣지 않고 코를 눌러요.' }], 'tell', 0.25,
                { conclude: '코피는 고개를 앞으로 숙이고 코를 누르며, 멈추지 않으면 어른에게 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 맞는 행동, 틀린 행동', tool: 'mindmap',
            teacher: '"이 행동은 몸을 돕는 행동일까요?" 카드마다 까닭을 한 마디씩 말하게 한다. 딱지를 떼는 습관을 장난으로 여기는 학생에게 "딱지는 상처를 덮어 주는 뚜껑이에요"라고 짚는다. 상처에 아무 약이나 바르지 않고 어른이 정해 준 것만 쓴다는 것을 말한다.',
            task: '코피·상처 때 행동을 맞는 것과 틀린 것으로 나누어요.',
            levels: LV,
            items: [
              MS('코피 날 때 행동을 나누어 보세요.', '코피가 나면', ['맞아요', '틀려요'], ['앉아서 쉬어요', '코를 세게 풀어요', '코 부드러운 곳을 눌러요', '뛰어다녀요'], { '맞아요': ['앉아서 쉬어요', '코 부드러운 곳을 눌러요'], '틀려요': ['코를 세게 풀어요', '뛰어다녀요'] }, 0.15),
              MS('긁힌 상처 행동을 나누어 보세요.', '긁혔을 때', ['맞아요', '틀려요'], ['어른에게 보여 줘요', '딱지를 떼어요', '물로 깨끗이 씻어요', '더러운 손으로 만져요'], { '맞아요': ['어른에게 보여 줘요', '물로 깨끗이 씻어요'], '틀려요': ['딱지를 떼어요', '더러운 손으로 만져요'] }, 0.2),
              MM('장면과 알맞은 행동을 이어요. 맞지 않는 카드는 남겨요.', '이럴 땐', [{ id: 's1', label: '코피가 나요' }, { id: 's2', label: '무릎이 긁혔어요' }, { id: 's3', label: '피가 멈추지 않아요' }], ['고개 숙이고 코를 눌러요', '깨끗한 물로 씻어요', '어른에게 바로 알려요', '침을 발라요'], { s1: '고개 숙이고 코를 눌러요', s2: '깨끗한 물로 씻어요', s3: '어른에게 바로 알려요' }, 0.25,
                { conclude: '작은 상처도 깨끗하게, 멈추지 않으면 어른에게 알려요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"코피가 나면 어떻게 한다고 했지요? 몸으로 보여 줄까요?" 다 같이 고개를 숙이고 코를 누르는 동작을 해 본다. 출구 1번에서 "뒤로 젖혀요"를 고른 학생이 있으면 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '코피가 날 때 고개는 어떻게 할까요?', options: ['뒤로 젖혀요', '앞으로 숙여요', '옆으로 돌려요'], answer: 1, difficulty: 0.1, explain: '앞으로 숙여야 피가 목으로 넘어가지 않아요.' },
            { type: 'tool', tool: 'mindmap', options: { topic: '상처가 나면', slots: ['해요', '안 해요'], cards: ['어른과 상처를 씻어요', '모래를 문질러요', '쉬면서 지켜봐요', '친구 손수건을 대요'] }, state: { at: {} }, prompt: '상처가 났을 때 할 일과 안 할 일을 나누어요.', target: { sort: { '해요': ['어른과 상처를 씻어요', '쉬면서 지켜봐요'], '안 해요': ['모래를 문질러요', '친구 손수건을 대요'] } }, difficulty: 0.2 },
            MOOD,
          ],
        },
        wsTitle: '코피와 작은 상처',
        ws: [
          { type: 'table', prompt: '맞는 행동이면 ○, 틀린 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['코피 날 때 고개를 숙여요', ''], ['상처에 침을 발라요', ''], ['상처를 물로 씻어요', ''], ['딱지를 떼어요', '']], answer: '○, ×, ○, ×' },
          { type: 'choice', prompt: '코피가 오래 멈추지 않을 때 할 일에 ○ 하세요.', options: ['보건 선생님께 알려요', '혼자 참아요', '뛰어다녀요'], answer: '보건 선생님께 알려요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '코피가 나면 고개를 ___으로 숙이고 코를 눌러요.', answer: '앞' },
          { type: 'draw', prompt: '코피가 날 때 바르게 앉아 있는 모습을 그려요.' },
        ],
        notes: '자주 보이는 어려움: ① 코피 때 고개를 뒤로 젖힌다 → 앞으로 숙이고 코의 부드러운 부분을 누른다. ② 상처에 침을 바르거나 딱지를 뗀다 → 깨끗한 물로 씻고 딱지는 그대로 둔다. ③ 아무 약이나 바른다 → 어른이 정해 준 것만 쓴다.',
      }),
    ],
  });
})();
