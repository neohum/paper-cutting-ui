/* 2학년 창체 안전교육 — 직업안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 직업안전.
 * (일터에서 발생하는 산업 재해를 알기, 일터 안전시설 알기) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g2-cc-saf-job';
  const UNIT = 'g2-창체-saf-job';
  const TITLE = '직업안전';
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
    flow: '2학년 직업안전은 우리 동네 일터(공사장·가게·농장·주유소)에 어떤 위험이 있고, 안전 표지가 무엇을 알려 주는지 알아보며, 집안일을 돕는 나도 "일하는 사람"으로서 안전하게 일하는 법을 익히는 단원입니다. 1차시에는 일터 장면과 위험을 잇고, 빨간 금지 표지·노란 경고 표지·초록 안내 표지의 뜻을 나눕니다. 2차시에는 설거지·청소·분리배출을 도울 때 다치지 않는 방법을 갈림길 장면에서 고릅니다. 1학년의 안전 도구 공부를 넓혀 "일터마다 위험이 다르고, 표지와 약속이 그 위험을 알려 준다"는 데까지 나아갑니다. 통합교과 「안전한 생활」의 동네 수업과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '동네 일터의 위험 잇고 안전 표지 뜻 나누기',
        objective: '동네 일터마다 있는 위험을 말하고, 금지·경고·안내 표지의 뜻을 구별할 수 있다.',
        draw: 'a paper neighborhood with a bakery, a farm with a tractor, and a construction site, each with a small colored safety sign in front',
        banner: '표지가 알려 줘요', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: {
          teacher: '"빵집, 농장, 공사장 가운데 뜨거운 것을 조심해야 하는 곳은 어디일까요?" 대답을 듣고(기다릴 반응: "빵집이요, 오븐이 뜨거워요") 시연 단추로 일터와 위험 카드가 이어지는 모습을 보여 준다. "일터는 다 똑같이 위험해요"가 나오면 "농장에서는 무엇을 조심할까요?"라고 되묻는다.',
          student: '우리 동네에서 사람들이 일하는 곳을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '일터의 위험', slots: [{ id: 'd1', label: '빵집' }], cards: ['뜨거운 오븐', '깊은 바다'], shuffle: false }, sequence: [{ match: { d1: '뜨거운 오븐' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 일터마다 다른 위험', tool: 'mindmap',
            teacher: '"이 일터에서 일하는 사람은 무엇을 조심할까요?" 일터와 위험을 잇게 한다. 주유소에서 불을 조심하는 까닭을 모르는 학생에게 "기름은 불이 잘 붙어요"라고 짚는다. 어린이가 일터에서 지킬 일(기계·차 가까이 가지 않기)도 함께 말한다.',
            task: '동네 일터와 그곳의 위험을 이어요.',
            levels: LV,
            items: [
              MM('일터와 조심할 것을 이어요. 맞지 않는 카드는 남겨요.', '일터의 위험', [{ id: 'w1', label: '빵집' }, { id: 'w2', label: '농장' }, { id: 'w3', label: '공사장' }], ['뜨거운 오븐', '움직이는 농기계', '떨어지는 물건', '푹신한 이불'], { w1: '뜨거운 오븐', w2: '움직이는 농기계', w3: '떨어지는 물건' }, 0.15),
              MM('일터와 조심할 것을 이어요. 맞지 않는 카드는 남겨요.', '또 다른 일터', [{ id: 'v1', label: '주유소' }, { id: 'v2', label: '마트 창고' }, { id: 'v3', label: '세탁소' }], ['불을 가까이하지 않아요', '높이 쌓인 상자', '뜨거운 다리미', '시원한 바람'], { v1: '불을 가까이하지 않아요', v2: '높이 쌓인 상자', v3: '뜨거운 다리미' }, 0.2),
              MS('일터에서 어린이 행동을 나누어 보세요.', '일터에 가면', ['안전해요', '위험해요'], ['어른 곁에 있어요', '기계 단추를 눌러 봐요', '표지를 보고 멈춰요', '창고 상자를 올라타요'], { '안전해요': ['어른 곁에 있어요', '표지를 보고 멈춰요'], '위험해요': ['기계 단추를 눌러 봐요', '창고 상자를 올라타요'] }, 0.2,
                { conclude: '일터마다 위험이 달라요. 어린이는 기계와 차에 가까이 가지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전 표지 뜻 나누기', tool: 'mindmap',
            teacher: '"빨간 테두리에 빗금이 그어진 표지는 무슨 뜻일까요?" 빨강은 "하지 마요"(금지), 노란 세모는 "조심해요"(경고), 초록은 "이리로 가요·여기 있어요"(안내)라고 짚는다. 색만 보고 고르는 학생에게 그림도 함께 읽게 한다.',
            task: '안전 표지를 뜻에 따라 나누어요.',
            levels: LV,
            items: [
              MS('표지를 뜻에 따라 나누어 보세요.', '표지의 뜻', ['하지 마요', '조심해요'], ['빨간 빗금 담배 그림', '노란 세모 미끄럼 그림', '빨간 빗금 사람 그림', '노란 세모 불꽃 그림'], { '하지 마요': ['빨간 빗금 담배 그림', '빨간 빗금 사람 그림'], '조심해요': ['노란 세모 미끄럼 그림', '노란 세모 불꽃 그림'] }, 0.2),
              MM('표지와 뜻을 이어요. 맞지 않는 카드는 남겨요.', '무슨 표지일까', [{ id: 'g1', label: '초록 달리는 사람 그림' }, { id: 'g2', label: '노란 세모 번개 그림' }, { id: 'g3', label: '빨간 빗금 손 그림' }], ['비상구로 나가요', '전기를 조심해요', '만지지 마요', '노래해요'], { g1: '비상구로 나가요', g2: '전기를 조심해요', g3: '만지지 마요' }, 0.25),
              MP('"조심해요" 뜻의 노란 표지만 골라 담아요.', '조심해요 표지', ['노란 세모 미끄럼', '초록 비상구', '노란 세모 떨어짐', '빨간 빗금 불'], ['노란 세모 미끄럼', '노란 세모 떨어짐'], 0.25,
                { conclude: '빨강은 하지 마요, 노랑은 조심해요, 초록은 안내예요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"학교 안에서 초록색 비상구 표지를 본 곳이 있나요?" 쉬는 시간에 학교 안 안전 표지를 찾아보게 한다. 출구 1번에서 색을 헷갈린 학생에게 세 가지 색 뜻을 다시 말하게 한다.',
          exit: [
            { type: 'choice', prompt: '노란 세모 표지는 무슨 뜻일까요?', options: ['조심해요', '들어와요', '쉬어요'], answer: 0, difficulty: 0.15, explain: '노란 세모 표지는 위험을 조심하라는 뜻이에요.' },
            { type: 'choice', prompt: '농장에서 일하는 사람이 조심할 것은?', options: ['움직이는 농기계', '책상 모서리', '파도'], answer: 0, difficulty: 0.15, explain: '농장에서는 농기계를 조심해요.' },
            { type: 'short', prompt: '우리 동네 일터 한 곳과 그곳에서 조심할 것을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '동네 일터와 안전 표지',
        ws: [
          { type: 'table', prompt: '일터에서 조심할 것을 쓰세요.', columns: ['일터', '조심할 것'], cells: [['빵집', ''], ['공사장', ''], ['주유소', '']], answer: '예) 뜨거운 오븐 / 떨어지는 물건 / 불' },
          { type: 'table', prompt: '표지 색과 뜻을 이어 쓰세요.', columns: ['색', '뜻'], cells: [['빨강(빗금)', ''], ['노랑(세모)', ''], ['초록', '']], answer: '하지 마요 / 조심해요 / 안내(비상구)' },
          { type: 'choice', prompt: '"만지지 마요" 표지의 색에 ○ 하세요.', options: ['빨강', '초록', '파랑'], answer: '빨강' },
          { type: 'draw', prompt: '학교에서 본 안전 표지 하나를 그려요.' },
        ],
        notes: '근거: 안전보건표지의 색 구분(금지 빨강, 경고 노랑, 안내 초록 — 지시 파랑은 5학년에서 다룬다). 자주 보이는 어려움: ① 색만 보고 고른다 → 그림도 함께 읽는다. ② 일터 위험을 모두 같다고 여긴다 → 일터마다 다른 위험을 잇게 한다.',
      }),

      LESSON(2, {
        title: '집안일 도울 때 다치지 않는 방법 고르기',
        objective: '설거지·청소·분리배출을 도울 때 다치지 않는 방법을 고를 수 있다.',
        draw: 'a child wearing rubber gloves sorting paper recycling bins while a parent washes dishes nearby in a cozy paper kitchen',
        banner: '돕는 손도 안전하게', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"집안일을 돕는 것도 일이에요. 일할 때는 무엇을 조심해야 할까요?" 대답을 듣고(기다릴 반응: "칼이요", "깨진 그릇이요") 시연 단추로 행동 카드가 나뉘는 모습을 보여 준다. "어린이는 위험해서 아무것도 못 해요"가 나오면 "안전한 방법으로 할 수 있는 일을 찾아볼까요?"라고 되묻는다.',
          student: '집에서 도와 본 집안일을 하나 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '집안일', slots: ['안전해요', '위험해요'], cards: ['장갑 끼고 정리해요', '깨진 컵을 맨손으로 주워요'], shuffle: false }, sequence: [{ sort: { '안전해요': ['장갑 끼고 정리해요'], '위험해요': ['깨진 컵을 맨손으로 주워요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 집안일 갈림길', tool: 'emotion',
            teacher: '"이렇게 하면 어떻게 될까요?" 결과를 함께 읽는다. 깨진 그릇을 직접 치우는 보기를 고른 학생에게 "깨진 조각은 어른이 치워요. 나는 가까이 가지 않고 알려요"라고 짚는다. 세제를 섞어 쓰는 보기는 위험하다는 것만 말하고 자세한 화학 설명은 하지 않는다.',
            task: '집안일을 돕다 생긴 일에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('설거지를 돕다 그릇이 깨졌어요. 어떻게 할까요?', '설거지를 돕다 그릇이 미끄러져 깨졌어요.', [
                { id: 'pick', text: '맨손으로 조각을 주워요', result: '손가락을 벨 수 있어요.', mood: '걱정', why: '깨진 조각은 맨손으로 만지지 않아요.' },
                { id: 'tell', text: '멈추고 어른에게 알려요', result: '어른이 안전하게 치워요.', mood: '안심' },
                { id: 'hide', text: '몰래 쓰레기통에 버려요', result: '다른 사람이 다칠 수 있어요.', mood: '불안', why: '숨기지 말고 알려요.' }], 'tell', 0.15),
              EB('청소하다 세제 두 가지를 찾았어요. 어떻게 할까요?', '화장실 청소를 돕다 세제 두 통을 찾았어요.', [
                { id: 'mix', text: '두 세제를 섞어서 써요', result: '해로운 냄새가 날 수 있어요.', mood: '불안', why: '세제는 섞지 않아요.' },
                { id: 'ask', text: '어른이 정해 준 것만 써요', result: '깨끗하고 안전하게 청소해요.', mood: '뿌듯함' },
                { id: 'smell', text: '뚜껑을 열어 냄새를 맡아요', result: '코와 목이 따가울 수 있어요.', mood: '걱정', why: '세제 냄새를 맡지 않아요.' }], 'ask', 0.2),
              EB('분리배출하다 뾰족한 캔 뚜껑이 보여요. 어떻게 할까요?', '분리배출을 돕는데 뾰족한 캔 뚜껑이 보여요.', [
                { id: 'glove', text: '장갑을 끼고 어른과 함께 해요', result: '손을 다치지 않고 정리해요.', mood: '편안함' },
                { id: 'bare', text: '맨손으로 꾹 눌러 넣어요', result: '손을 벨 수 있어요.', mood: '속상함', why: '뾰족한 것은 장갑을 끼고 어른과 해요.' },
                { id: 'kick', text: '발로 차서 넣어요', result: '조각이 튀어 위험해요.', mood: '걱정', why: '발로 차지 않아요.' }], 'glove', 0.2,
                { conclude: '집안일도 일이에요. 장갑을 끼고, 정해 준 대로, 위험하면 멈추고 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 할 수 있는 안전한 일', tool: 'mindmap',
            teacher: '"2학년이 할 수 있는 집안일과 어른이 할 일을 나눠 볼까요?" 가스레인지·칼·뜨거운 다리미는 어른이 한다는 것을 짚는다. 할 수 있는 일을 찾으면 칭찬하며 "안전하게 하면 집안일도 멋진 일이에요"라고 말한다.',
            task: '내가 할 일과 어른이 할 일을 나누고 이어요.',
            levels: LV,
            items: [
              MS('집안일을 나누어 보세요.', '누가 할까', ['내가 해요', '어른이 해요'], ['수저 놓기', '뜨거운 다리미질', '빨래 개기', '가스레인지 불 켜기'], { '내가 해요': ['수저 놓기', '빨래 개기'], '어른이 해요': ['뜨거운 다리미질', '가스레인지 불 켜기'] }, 0.15),
              MM('집안일과 안전한 방법을 이어요. 맞지 않는 카드는 남겨요.', '안전하게', [{ id: 'j1', label: '바닥 걸레질' }, { id: 'j2', label: '높은 곳 물건 꺼내기' }, { id: 'j3', label: '쓰레기 버리기' }], ['다 닦고 물기를 말려요', '어른에게 부탁해요', '장갑을 끼고 들어요', '의자 위에서 뛰어요'], { j1: '다 닦고 물기를 말려요', j2: '어른에게 부탁해요', j3: '장갑을 끼고 들어요' }, 0.25),
              MP('집안일을 도울 때 지킬 약속만 골라 담아요.', '돕기 약속', ['모르면 먼저 물어요', '젖은 손으로 플러그를 만져요', '다 쓴 도구는 제자리에', '뜨거운 냄비를 옮겨요'], ['모르면 먼저 물어요', '다 쓴 도구는 제자리에'], 0.2,
                { conclude: '내가 할 수 있는 일을 안전하게, 위험한 일은 어른에게 맡겨요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 집에 가서 안전하게 도울 집안일 하나를 정해 볼까요?" 출구 1번에서 맨손으로 치우는 보기를 고른 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '컵이 깨졌을 때 내가 할 일은?', options: ['어른에게 알려요', '맨손으로 주워요', '발로 밀어요'], answer: 0, difficulty: 0.1, explain: '깨진 조각은 어른이 안전하게 치워요.' },
            { type: 'choice', prompt: '집안일을 하다 모르는 것이 있으면?', options: ['먼저 어른에게 물어요', '마음대로 해요', '그만두고 숨어요'], answer: 0, difficulty: 0.1, explain: '모르면 물어보는 것이 안전한 일하기예요.' },
            { type: 'short', prompt: '내가 안전하게 도울 수 있는 집안일 하나와 지킬 약속을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '집안일 안전하게 돕기',
        ws: [
          { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['장갑 끼고 분리배출해요', ''], ['세제를 섞어요', ''], ['수저를 놓아요', ''], ['깨진 그릇을 맨손으로 주워요', '']], answer: '○, ×, ○, ×' },
          { type: 'choice', prompt: '어른이 해야 할 일에 ○ 하세요.', options: ['가스레인지 불 켜기', '빨래 개기', '수저 놓기'], answer: '가스레인지 불 켜기' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '세제는 ___지 않고 어른이 정해 준 것만 써요.', answer: '섞' },
          { type: 'short', prompt: '집안일을 하다 위험한 일이 생기면 어떻게 할지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 깨진 그릇을 스스로 치우려 한다 → 멈추고 알린다. ② 세제를 섞으면 더 깨끗해진다고 여긴다 → 섞지 않는다는 것만 짚는다. ③ 어린이는 집안일을 못 한다고 여긴다 → 할 수 있는 안전한 일을 찾게 한다.',
      }),
    ],
  });
})();
