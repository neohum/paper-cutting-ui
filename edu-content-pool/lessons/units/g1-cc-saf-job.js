/* 1학년 창체 안전교육 — 직업안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 직업안전.
 * (일터 안전의 중요성 및 안전을 위해 지켜야 할 일 알기) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g1-cc-saf-job';
  const UNIT = 'g1-창체-saf-job';
  const TITLE = '직업안전';
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
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '1학년 직업안전은 일하는 사람들이 다치지 않으려고 쓰는 안전 도구와, 공사장·작업 차량 둘레에서 어린이가 지킬 약속을 익히는 단원입니다. 1차시에는 안전모·장갑·안전화·형광 조끼 같은 도구를 일하는 사람과 잇고, 그 도구가 몸의 어디를 지켜 주는지 나눕니다. 2차시에는 등굣길 공사장·후진하는 트럭·쌓아 둔 자재 같은 장면에서 가까이 가지 않고 돌아가는 행동을 고릅니다. 고시의 초등 직업안전 항목(일터에서 생기는 사고 알기, 일터 안전시설 알기)을 1학년 눈높이에서 "일터는 조심해야 하는 곳"이라는 감각으로 다룹니다. 통합교과 「안전한 생활」의 동네·직업 수업과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '일하는 사람과 안전 도구 짝 짓기',
        objective: '일하는 사람이 쓰는 안전 도구를 알고, 그 도구가 몸의 어디를 지켜 주는지 말할 수 있다.',
        draw: 'a construction worker in a yellow paper helmet and gloves, a firefighter in a paper helmet, and a cook with an apron standing side by side',
        banner: '안전 도구가 지켜 줘요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"공사장 아저씨, 아주머니는 왜 머리에 단단한 모자를 쓸까요?" 대답을 듣고(기다릴 반응: "머리 다칠까 봐요") 시연 단추로 안전모 카드가 머리 칸에 놓이는 모습을 보여 준다. "멋있어 보이려고요"가 나오면 "위에서 무언가 떨어지면 모자가 무엇을 해 줄까요?"라고 되묻는다.',
          student: '일하는 사람이 쓰는 모자나 옷을 본 적이 있나요? 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '안전 도구', slots: ['머리', '손'], cards: ['안전모', '장갑'], shuffle: false }, sequence: [{ sort: { '머리': ['안전모'], '손': ['장갑'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 누가 쓰는 도구일까', tool: 'mindmap',
            teacher: '"이 사람은 일할 때 무엇을 쓰면 안전할까요?" 그림을 보며 짝을 짓게 한다. 요리사가 장갑만 쓴다고 여기는 학생에게 "뜨거운 냄비를 잡을 때는 무엇을 낄까요?"라고 묻는다. 소방관 옷이 불에서 몸을 지켜 준다는 것을 함께 말한다.',
            task: '일하는 사람과 쓰는 안전 도구를 이어요.',
            levels: LV,
            items: [
              MM('사람과 안전 도구를 이어요. 맞지 않는 카드는 남겨요.', '누가 쓸까', [{ id: 'p1', label: '공사장에서 일해요' }, { id: 'p2', label: '불을 꺼요' }, { id: 'p3', label: '음식을 만들어요' }], ['안전모와 안전화', '방화복과 헬멧', '앞치마와 오븐 장갑', '수영 모자'], { p1: '안전모와 안전화', p2: '방화복과 헬멧', p3: '앞치마와 오븐 장갑' }, 0.15),
              MM('사람과 안전 도구를 이어요. 맞지 않는 카드는 남겨요.', '또 누가 쓸까', [{ id: 'q1', label: '길에서 차를 안내해요' }, { id: 'q2', label: '병원에서 환자를 봐요' }, { id: 'q3', label: '자전거로 배달해요' }], ['밝은 형광 조끼', '마스크와 장갑', '자전거 헬멧', '선글라스'], { q1: '밝은 형광 조끼', q2: '마스크와 장갑', q3: '자전거 헬멧' }, 0.2),
              MS('안전 도구를 지켜 주는 곳으로 나누어 보세요.', '어디를 지킬까', ['머리', '손과 발'], ['안전모', '두꺼운 장갑', '헬멧', '안전화'], { '머리': ['안전모', '헬멧'], '손과 발': ['두꺼운 장갑', '안전화'] }, 0.2,
                { conclude: '안전 도구는 일하는 사람의 머리·손·발·몸을 지켜 줘요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전 도구가 왜 필요할까', tool: 'mindmap',
            teacher: '"안전 도구를 안 쓰면 어떤 일이 생길까요?" 무서운 장면보다 "도구가 지켜 줘요"라는 말로 정리한다. 귀찮아서 안 써도 된다고 말하는 학생에게 "우리가 자전거 탈 때 헬멧을 쓰는 것과 같아요"라고 우리 생활과 잇는다.',
            task: '안전 도구가 하는 일을 고르고 나누어요.',
            levels: LV,
            items: [
              MP('일할 때 몸을 지켜 주는 물건만 골라 담아요.', '안전 도구', ['안전모', '풍선', '보호 안경', '장난감 칼'], ['안전모', '보호 안경'], 0.15),
              MM('도구와 하는 일을 이어요. 맞지 않는 카드는 남겨요.', '도구가 하는 일', [{ id: 't1', label: '안전모' }, { id: 't2', label: '보호 안경' }, { id: 't3', label: '형광 조끼' }], ['떨어지는 것에서 머리를 지켜요', '튀는 가루에서 눈을 지켜요', '멀리서도 잘 보이게 해요', '배를 부르게 해요'], { t1: '떨어지는 것에서 머리를 지켜요', t2: '튀는 가루에서 눈을 지켜요', t3: '멀리서도 잘 보이게 해요' }, 0.25),
              MS('일하는 모습을 나누어 보세요.', '일할 때', ['안전해요', '위험해요'], ['안전모 끈을 매요', '장갑 없이 유리를 들어요', '조끼를 입고 길에 서요', '맨발로 공사장을 걸어요'], { '안전해요': ['안전모 끈을 매요', '조끼를 입고 길에 서요'], '위험해요': ['장갑 없이 유리를 들어요', '맨발로 공사장을 걸어요'] }, 0.25,
                { conclude: '일하는 사람도, 우리도 안전 도구를 바르게 쓰면 다치지 않아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리가 쓰는 안전 도구는 무엇이 있을까요?" (기다릴 반응: "자전거 헬멧", "실내화") 출구 1번에서 수영 모자를 고른 학생에게 안전모와 다른 점을 다시 묻는다.',
          exit: [
            { type: 'choice', prompt: '공사장에서 일하는 사람이 머리에 쓰는 것은?', options: ['안전모', '꽃 머리띠', '털모자'], answer: 0, difficulty: 0.1, explain: '안전모가 떨어지는 것에서 머리를 지켜 줘요.' },
            { type: 'choice', prompt: '형광 조끼를 입는 까닭은 무엇인가요?', options: ['멀리서도 잘 보이려고', '따뜻하려고', '예뻐 보이려고'], answer: 0, difficulty: 0.15, explain: '밝은 조끼는 차와 사람이 잘 알아보게 해요.' },
            MOOD,
          ],
        },
        wsTitle: '일하는 사람의 안전 도구',
        ws: [
          { type: 'table', prompt: '사람에게 맞는 안전 도구를 쓰세요.', columns: ['일하는 사람', '안전 도구'], cells: [['공사장에서 일해요', ''], ['불을 꺼요', ''], ['음식을 만들어요', '']], answer: '예) 안전모·안전화 / 방화복·헬멧 / 앞치마·오븐 장갑' },
          { type: 'choice', prompt: '눈을 지켜 주는 도구에 ○ 하세요.', options: ['보호 안경', '장갑', '안전화'], answer: '보호 안경' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '안전___는 떨어지는 것에서 머리를 지켜 줘요.', answer: '모' },
          { type: 'draw', prompt: '안전 도구를 쓰고 일하는 사람을 그려요.' },
        ],
        notes: '자주 보이는 어려움: ① 안전 도구를 멋내기용으로 여긴다 → 몸의 어디를 지키는지 잇게 한다. ② 일하는 사람만의 일로 여긴다 → 자전거 헬멧처럼 우리 생활과 잇는다. ③ 위험 장면을 무섭게 상상한다 → "도구가 지켜 줘요"로 마무리한다.',
      }),

      LESSON(2, {
        title: '공사장·작업 차 옆에서 돌아가는 길 고르기',
        objective: '공사장과 작업 차량 둘레에서 가까이 가지 않고 안전하게 돌아가는 행동을 고를 수 있다.',
        draw: 'children walking on a safe path around a paper construction fence with a cone and a sign, a small truck backing up behind the fence',
        banner: '공사장은 멀리 돌아가요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"학교 가는 길에 울타리를 친 공사장이 있어요. 안이 궁금하면 들어가 봐도 될까요?" 대답을 듣고(기다릴 반응: "안 돼요") 시연 단추로 행동 카드가 나뉘는 모습을 보여 준다. "잠깐은 괜찮아요"가 나오면 "일하는 사람이 내가 있는 걸 모르면 어떻게 될까요?"라고 되묻는다.',
          student: '우리 동네에서 공사하는 곳을 본 적이 있나요? 그 옆을 어떻게 지나갔는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '공사장 옆', slots: ['안전해요', '위험해요'], cards: ['멀리 돌아가요', '울타리 안을 들여다봐요'], shuffle: false }, sequence: [{ sort: { '안전해요': ['멀리 돌아가요'], '위험해요': ['울타리 안을 들여다봐요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 이럴 땐 어떻게 할까', tool: 'emotion',
            teacher: '"이렇게 하면 어떻게 될까요?" 결과를 함께 읽는다. 트럭이 "삐삐" 소리를 내며 뒤로 올 때 운전하는 사람은 뒤가 잘 안 보인다는 것을 짚는다. 쌓아 둔 벽돌·나무에 올라가 노는 보기를 고른 학생에게 "쌓아 둔 것은 무너질 수 있어요"라고 말한다.',
            task: '공사장·작업 차 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('공사장 울타리 문이 열려 있어요. 어떻게 할까요?', '등굣길 공사장 울타리 문이 조금 열려 있어요.', [
                { id: 'peek', text: '안에 들어가 구경해요', result: '일하는 사람이 놀라고 다칠 수 있어요.', mood: '걱정', why: '공사장 안은 들어가지 않아요.' },
                { id: 'pass', text: '들어가지 않고 인도로 지나가요', result: '안전하게 학교에 도착해요.', mood: '편안함' },
                { id: 'stone', text: '돌을 던져 봐요', result: '일하는 사람이 다칠 수 있어요.', mood: '속상함', why: '공사장에 물건을 던지지 않아요.' }], 'pass', 0.1),
              EB('트럭이 "삐삐" 하며 뒤로 와요. 어떻게 할까요?', '골목에서 작업 트럭이 "삐삐" 소리를 내며 뒤로 와요.', [
                { id: 'behind', text: '트럭 뒤로 뛰어 지나가요', result: '운전하는 사람이 나를 못 봐요.', mood: '무서움', why: '뒤로 오는 차 뒤는 보이지 않아요.' },
                { id: 'wait', text: '멀리 떨어져 멈출 때까지 기다려요', result: '트럭이 멈춘 뒤 안전하게 지나가요.', mood: '안심' },
                { id: 'wave', text: '트럭 옆에 붙어 손을 흔들어요', result: '바퀴에 가까워 위험해요.', mood: '걱정', why: '작업 차 가까이 가지 않아요.' }], 'wait', 0.2),
              EB('공터에 벽돌이 높이 쌓여 있어요. 어떻게 할까요?', '공터에 벽돌과 나무가 높이 쌓여 있어요.', [
                { id: 'climb', text: '올라가서 놀아요', result: '벽돌이 무너질 수 있어요.', mood: '불안', why: '쌓아 둔 자재에 올라가지 않아요.' },
                { id: 'away', text: '가까이 가지 않고 다른 곳에서 놀아요', result: '안전한 곳에서 신나게 놀아요.', mood: '기쁨' },
                { id: 'pull', text: '나무 하나를 빼 봐요', result: '쌓인 것이 흔들려요.', mood: '걱정', why: '쌓인 자재는 건드리지 않아요.' }], 'away', 0.2,
                { conclude: '공사장과 작업 차는 멀리서 보고, 가까이 가지 않고 돌아가요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 공사장 둘레 약속', tool: 'mindmap',
            teacher: '"공사장 옆을 지날 때 지킬 약속을 정해 볼까요?" 안내하는 사람(신호수)의 손짓을 따르는 것도 약속이라고 짚는다. 고깔·울타리·안내판이 "이 안은 위험해요"라는 뜻이라는 것을 말한다.',
            task: '공사장 둘레에서 지킬 약속을 고르고 이어요.',
            levels: LV,
            items: [
              MP('공사장 옆에서 지킬 약속만 골라 담아요.', '공사장 약속', ['안내하는 사람 손짓을 따라요', '울타리를 넘어가요', '인도로 걸어가요', '고깔을 가지고 놀아요'], ['안내하는 사람 손짓을 따라요', '인도로 걸어가요'], 0.15),
              MM('보이는 것과 뜻을 이어요. 맞지 않는 카드는 남겨요.', '무슨 뜻일까', [{ id: 's1', label: '빨간 고깔' }, { id: 's2', label: '공사장 울타리' }, { id: 's3', label: '"삐삐" 후진 소리' }], ['이쪽으로 오지 마요', '안에 들어가지 마요', '차가 뒤로 와요', '놀이터예요'], { s1: '이쪽으로 오지 마요', s2: '안에 들어가지 마요', s3: '차가 뒤로 와요' }, 0.25),
              MS('행동을 나누어 보세요.', '작업 차 둘레', ['안전해요', '위험해요'], ['멀리서 기다려요', '바퀴 옆에 숨어요', '어른과 함께 돌아가요', '차 위에 올라가요'], { '안전해요': ['멀리서 기다려요', '어른과 함께 돌아가요'], '위험해요': ['바퀴 옆에 숨어요', '차 위에 올라가요'] }, 0.2,
                { conclude: '고깔·울타리·소리는 "가까이 오지 마요"라는 신호예요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"내일 등굣길에 공사장이 있다면 어떻게 지나갈까요? 한 문장으로 말해 봐요." 출구 1번에서 트럭 뒤로 지나가는 보기를 고른 학생에게 운전하는 사람의 눈을 다시 생각하게 한다.',
          exit: [
            { type: 'choice', prompt: '뒤로 오는 작업 차를 보면 어떻게 할까요?', options: ['멀리 떨어져 기다려요', '차 뒤로 뛰어가요', '차를 만져요'], answer: 0, difficulty: 0.1, explain: '운전하는 사람은 뒤가 잘 안 보여요.' },
            { type: 'tool', tool: 'mindmap', options: { topic: '공사하는 길', slots: ['안전해요', '위험해요'], cards: ['안내판을 보고 돌아가요', '흙더미에서 미끄럼 타요', '인도 안쪽으로 걸어요', '고깔을 발로 차요'] }, state: { at: {} }, prompt: '공사하는 길에서 행동을 두 가지로 나누어요.', target: { sort: { '안전해요': ['안내판을 보고 돌아가요', '인도 안쪽으로 걸어요'], '위험해요': ['흙더미에서 미끄럼 타요', '고깔을 발로 차요'] } }, difficulty: 0.2 },
            MOOD,
          ],
        },
        wsTitle: '공사장 둘레 약속',
        ws: [
          { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['공사장 안에 들어가요', ''], ['인도로 돌아가요', ''], ['벽돌 위에 올라가요', ''], ['안내하는 사람 손짓을 따라요', '']], answer: '×, ○, ×, ○' },
          { type: 'choice', prompt: '빨간 고깔이 뜻하는 것에 ○ 하세요.', options: ['이쪽으로 오지 마요', '여기서 놀아요', '사진 찍어요'], answer: '이쪽으로 오지 마요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '공사장은 가까이 가지 않고 멀리 ___가요.', answer: '돌아' },
          { type: 'draw', prompt: '공사장 옆을 안전하게 지나가는 내 모습을 그려요.' },
        ],
        notes: '자주 보이는 어려움: ① 공사장을 신기한 놀이터로 여긴다 → 울타리·고깔은 들어오지 말라는 신호임을 짚는다. ② 후진하는 차 뒤로 지나간다 → 운전자는 뒤가 안 보인다는 것을 말한다. ③ 쌓아 둔 자재에 올라간다 → 무너질 수 있음을 짚는다. 겁주는 사고 장면은 쓰지 않는다.',
      }),
    ],
  });
})();
