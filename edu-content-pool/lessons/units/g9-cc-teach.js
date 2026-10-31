/* 중3 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원지위법 제24조·시행령 제21조(학생 대상 교육활동 침해행위 예방교육 연 1회 이상).
 * 불만·이의를 존중하는 방식으로 전하는 차례를 다룬다. 학교마다 다른 성적 이의 신청 절차의 기한·서식은 적지 않는다. 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 9; const CODE = 'teach';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '교육활동 존중(침해 예방)';
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
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '중학교 마지막 교육활동 존중 수업으로, 학생이 수업·평가에 불만이 생겼을 때 그것을 존중하는 방식으로 전하는 차례를 익힙니다. 학생의 권리(질문하고 이의를 말할 권리)와 선생님의 교육활동 보호가 서로 부딪치는 것이 아니라 함께 지켜진다는 점이 중심입니다. 감정이 앞선 항의·SNS 폭로·반복적 민원이 왜 침해로 번질 수 있는지 보고, 사실 확인 → 때와 장소 고르기 → 정중히 묻기 → 학교 절차 이용하기의 흐름을 연습합니다. 1·2학년 차시에서 배운 침해의 예와 디지털 상황을 이어받습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '불만을 전하는 차례 세우고 말 다듬기',
        objective: '수업이나 평가에 대한 불만을 존중하는 방식으로 전하는 차례를 정하고, 침해로 번지는 항의와 정당한 의견 표현을 구별할 수 있다.',
        draw: 'a student and a teacher talking calmly at a desk after class with a paper speech bubble between them',
        banner: '존중하며 말해요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"수행평가 점수가 친구보다 낮게 나와 억울하다면, 가장 먼저 무엇을 하고 싶어지나요?" 솔직한 대답을 듣고(기다릴 반응: "따지고 싶어요", "단톡방에 쓰고 싶어요") 시연으로 행동 카드를 나눈다. "억울하면 크게 항의해야 바뀌어요"라는 말이 나오면 "목소리가 크면 바뀌는 걸까요, 근거가 분명하면 바뀌는 걸까요?"라고 되묻는다. 오늘은 불만을 존중하며 전하는 차례를 세운다고 밝힌다.',
          student: '누군가에게 불만을 말했을 때 잘 풀렸던 방법 하나를 가상의 예로 짝에게 말해 봅시다.',
          demo: DEMO('불만 전하기', ['정당한 의견', '침해로 번짐'], ['근거를 들어 묻기', '반 앞에서 소리치기'], { '정당한 의견': ['근거를 들어 묻기'], '침해로 번짐': ['반 앞에서 소리치기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 불만을 전하는 차례 세우기', minutes: 14, tool: 'story',
            teacher: '"순서를 바꾸면 어떤 일이 생길까요?" 사실 확인을 건너뛰고 바로 항의하는 순서를 고른 학생에게 "내가 기준을 잘못 읽었을 수도 있지 않을까요?"라고 묻는다. 수업 중 반 친구들 앞보다 쉬는 시간·상담 시간처럼 차분히 이야기할 때를 고르는 까닭을 짚는다. 학교마다 이의 신청 절차가 있으니 담임 선생님께 확인하자고 말한다.',
            task: '불만을 존중하며 전하는 장면 카드를 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('평가 점수에 의문이 생겼을 때의 차례로 카드를 놓아 보세요.', '점수에 의문이 생기면', ['처음', '다음', '그다음', '끝'], [C('fact', '채점 기준을 다시 읽어요', 'leaf'), C('time', '쉬는 시간에 찾아가요', 'sun'), C('ask', '근거를 들어 정중히 여쭤요', 'flower'), C('listen', '설명을 듣고 정리해요', 'star')], ['fact', 'time', 'ask', 'listen'], 0.2),
              SO('수업 방식에 바라는 점을 전하는 차례로 카드를 놓아 보세요.', '바라는 점 전하기', ['처음', '다음', '그다음', '끝'], [C('think', '바라는 점을 정리해요', 'leaf'), C('group', '반 대표와 의견을 모아요', 'house'), C('meet', '선생님과 이야기할 때를 정해요', 'sun'), C('say', '예의 있게 제안해요', 'flower')], ['think', 'group', 'meet', 'say'], 0.25),
              SO('설명을 들은 뒤에도 납득이 안 될 때의 차례로 카드를 놓아 보세요.', '그래도 납득이 안 되면', ['처음', '다음', '끝'], [C('calm', '마음을 가라앉혀요', 'leaf'), C('homeroom', '담임 선생님과 상의해요', 'house'), C('rule', '학교 절차를 이용해요', 'star')], ['calm', 'homeroom', 'rule'], 0.3,
                { conclude: '불만은 사실 확인 → 알맞은 때 → 정중한 질문 → 학교 절차의 길로 전할 때 해결에 가까워져요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 정당한 의견과 침해로 번지는 행동 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"같은 불만인데 왜 어떤 것은 의견이고 어떤 것은 침해가 될까요?" 내용이 아니라 방식(모욕·위협·폭로·반복적 방해)이 기준임을 짚는다. "SNS에 쓰면 다들 알게 되니 효과적이에요"라는 말에는 "확인되지 않은 글이 선생님의 명예를 해치면 문제를 푸는 길이 오히려 막히지 않을까요?"라고 되묻는다. 3번은 모둠에서 말로 나눈다.',
            task: '불만을 전하는 방식을 정당한 의견과 침해로 번지는 행동으로 나누고, 거친 말을 다듬어요.',
            levels: LV,
            items: [
              MS('불만을 전하는 방식을 두 가지로 나누어 보세요.', '불만을 전하는 방식', ['정당한 의견', '침해로 번짐'], ['상담 시간에 근거를 들어 물어요', '반 대표를 통해 제안해요', '익명 계정에 비난 글을 써요', '수업마다 같은 말로 따져요'], { '정당한 의견': ['상담 시간에 근거를 들어 물어요', '반 대표를 통해 제안해요'], '침해로 번짐': ['익명 계정에 비난 글을 써요', '수업마다 같은 말로 따져요'] }, 0.2),
              MM('거친 말과 다듬은 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '말 다듬기', [{ id: 'r1', label: '채점이 엉터리예요' }, { id: 'r2', label: '수업이 너무 지루해요' }, { id: 'r3', label: '왜 저만 혼내요?' }], ['이 부분 기준이 궁금해요', '활동이 더 있으면 좋겠어요', '제 행동 중 무엇이 문제였나요?', '다른 반 선생님은 안 그래요'], { r1: '이 부분 기준이 궁금해요', r2: '활동이 더 있으면 좋겠어요', r3: '제 행동 중 무엇이 문제였나요?' }, 0.25,
                { conclude: '판단하는 말 대신 궁금한 점과 바라는 점을 말하면 같은 불만도 대화가 돼요.' }),
              TALK('모둠에서 "학생의 권리와 선생님의 교육활동이 함께 지켜지는 우리 반 약속" 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"고등학교에 가서 억울한 일이 생기면 오늘 세운 차례 중 무엇을 먼저 떠올릴까요?" 출구 1번에서 익명 글을 고른 학생에게는 익명이라도 글이 남기는 상처와 책임은 사라지지 않는다는 점을 다시 말해 준다. 학생도 부당한 대우를 받았다고 느끼면 담임·상담 선생님께 도움을 청할 수 있다고 덧붙인다.',
          exit: [
            XS('행동 카드를 두 가지로 나누어 보세요.', '의견일까 침해일까', ['정당한 의견', '침해로 번짐'], ['이의 신청 절차를 물어요', '선생님 사진과 비난 글을 올려요', '바라는 점을 정중히 제안해요', '선생님께 욕설 섞인 문자를 보내요'], { '정당한 의견': ['이의 신청 절차를 물어요', '바라는 점을 정중히 제안해요'], '침해로 번짐': ['선생님 사진과 비난 글을 올려요', '선생님께 욕설 섞인 문자를 보내요'] }),
            XC('불만이 생겼을 때 가장 먼저 할 일로 알맞은 것은 무엇인가요?', ['단톡방에 먼저 알린다', '사실과 기준을 다시 확인한다', '수업 중에 바로 항의한다'], 1, '먼저 사실과 기준을 확인해야 정확한 질문을 할 수 있어요.'),
            XT('"이 숙제는 쓸데없어요"를 존중하며 바라는 점을 전하는 말로 바꾸어 쓰세요.'),
          ],
        },
        ws: {
          title: '불만을 존중하며 전하기',
          items: [
            { type: 'table', prompt: '불만을 전하는 차례를 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '사실·기준 확인, 알맞은 때 고르기, 근거를 들어 정중히 묻기, 학교 절차 이용' },
            { type: 'choice', prompt: '침해로 번질 수 있는 행동에 ○ 하세요.', options: ['상담 시간에 묻기', '익명 계정에 비난 글 쓰기', '반 대표를 통해 제안하기'], answer: '익명 계정에 비난 글 쓰기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '의견과 침해를 가르는 것은 내용이 아니라 전하는 ___이에요.', answer: '방식' },
            { type: 'short', prompt: '학생의 권리와 선생님의 교육활동이 함께 지켜지는 교실의 모습을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 교육활동 보호와 학생 권리를 맞서는 것으로 본다 → 둘 다 배움이 이뤄지는 교실을 위한 것임을 짚는다. ② 크게 항의하거나 SNS에 알려야 바뀐다고 믿는다 → 근거와 절차가 해결의 길임을 차례 카드로 보여 준다. ③ 실제 교사·과목·학생을 떠올리게 하지 않는다 — 장면은 모두 가상이다.',
      }),
    ],
  });
})();
