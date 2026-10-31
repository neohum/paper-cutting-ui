/* 고3 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원지위법 제24조·시행령 제21조(학생 대상 교육활동 침해행위 예방교육 연 1회 이상). 미래의 보호자·시민으로서 정당한 의견과 부당한 간섭을 구별한다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 12; const CODE = 'teach';
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
  const SF = (prompt, title, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', title, slots, cards }, target: { fill }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XM = (prompt, topic, slots, cards, match, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic, slots, cards }, state: { at: {} }, prompt, target: { match }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d = 0.2) => ({ type: 'tool', tool: 'story', options: { mode: 'order', title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
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
    flow: '졸업을 앞둔 고3은 머지않아 보호자·시민으로서 학교를 바라보게 됩니다. 이 차시는 학교에 의견을 내는 일이 시민의 정당한 참여라는 점과, 같은 의견도 방식에 따라 교육활동을 해치는 부당한 간섭이 될 수 있다는 점을 가상의 보호자 민원 사례로 구별합니다. 공식 창구·근거·기한 같은 정당한 의견의 조건과, 반복·위협·사적 연락·공개 비난처럼 선을 넘는 방식을 나누고, 학교 공동체가 서로 존중하는 소통의 원칙을 정리합니다. 고1의 권리와 책임, 고2의 또래 행동을 이어 학교 밖 시민의 책임으로 넓힙니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '보호자 민원 사례로 정당한 의견과 부당한 간섭 가르기',
        objective: '학교에 의견을 내는 정당한 방식과 교육활동을 해치는 반복적·부당한 간섭을 사례로 구별하고, 학교 공동체가 존중하며 소통하는 원칙을 말할 수 있다.',
        draw: 'a school building with paper-cut letters flowing into an official mailbox, and a parent and teacher shaking hands at the gate',
        banner: '존중하며 의견 내기', extra: [{ motif: 'leaf', x: 330, y: 224, color: 'mint' }],
        intro: {
          teacher: '"몇 년 뒤 여러분이 보호자가 되어 아이 학교에 하고 싶은 말이 생기면 어떻게 전하겠어요?" 대답을 듣고(기다릴 반응: "담임에게 전화해요", "학교 누리집에 써요", "커뮤니티에 올려요") 시연으로 방식을 나눈다. "목소리를 크게 내야 학교가 듣는다"는 말이 나오면 "듣게 만드는 것이 목소리의 크기일까요, 근거와 창구일까요?"라고 되묻는다. 의견을 내는 것은 시민의 권리이고, 오늘은 그 권리를 쓰는 방식을 살핀다고 밝힌다.',
          student: '학교에 바라는 점이 있을 때 어떤 방식으로 전하면 잘 받아들여질지 짝과 한 가지씩 말해 봅시다.',
          demo: DEMO('의견을 전하는 방식', ['정당한 의견', '부당한 간섭'], ['공식 창구에 근거와 함께 내요', '밤마다 교사 개인 번호로 연락해요'], { '정당한 의견': ['공식 창구에 근거와 함께 내요'], '부당한 간섭': ['밤마다 교사 개인 번호로 연락해요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 민원 방식을 정당한 의견과 부당한 간섭으로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"같은 내용인데 무엇이 이 둘을 가를까요?" 내용이 아니라 방식(창구·횟수·말투·공개 범위)이 기준임을 짚는다. 2번에서 "답이 늦으니 매일 같은 요구를 반복한다"를 정당한 쪽에 두는 학생에게 "같은 요구를 끝없이 반복하면 선생님의 수업 준비 시간은 어떻게 될까요?"라고 묻는다. 정당한 교육활동을 반복해 부당하게 간섭하는 행위는 교육활동 침해가 될 수 있다고 알려 준다(구체 판단은 학교와 교육청의 절차를 따른다).',
            task: '가상의 보호자가 학교에 의견을 내는 방식을 나누고 조건과 이어요.',
            levels: LV,
            items: [
              MS('보호자가 의견을 전하는 방식을 두 가지로 나누어 보세요.', '의견을 전하는 방식', ['정당한 의견', '부당한 간섭'], ['상담 예약 뒤 근거를 들어요', '학교 공식 창구에 서면으로 내요', '교사 개인 SNS에 항의 글을 달아요', '수업 중 교실로 찾아가 따져요'], { '정당한 의견': ['상담 예약 뒤 근거를 들어요', '학교 공식 창구에 서면으로 내요'], '부당한 간섭': ['교사 개인 SNS에 항의 글을 달아요', '수업 중 교실로 찾아가 따져요'] }, 0.2),
              MS('같은 요구를 전하는 방식을 두 가지로 나누어 보세요.', '같은 요구, 다른 방식', ['정당한 의견', '부당한 간섭'], ['답을 기다렸다가 다시 문의해요', '학교운영위원회에 안건을 내요', '답이 늦다고 매일 같은 요구', '"가만두지 않겠다"고 말해요'], { '정당한 의견': ['답을 기다렸다가 다시 문의해요', '학교운영위원회에 안건을 내요'], '부당한 간섭': ['답이 늦다고 매일 같은 요구', '"가만두지 않겠다"고 말해요'] }, 0.3),
              MM('정당한 의견의 조건과 그 예를 이어 보세요. 맞지 않는 카드는 남겨요.', '정당한 의견의 조건', [{ id: 'c1', label: '알맞은 창구' }, { id: 'c2', label: '사실과 근거' }, { id: 'c3', label: '존중하는 말' }], ['학교 민원 창구로 내기', '날짜와 상황을 적기', '"확인 부탁드려요"로 쓰기', '여러 커뮤니티에 올리기'], { c1: '학교 민원 창구로 내기', c2: '날짜와 상황을 적기', c3: '"확인 부탁드려요"로 쓰기' }, 0.25,
                { conclude: '의견의 힘은 목소리의 크기가 아니라 알맞은 창구·근거·존중하는 말에서 나와요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 거친 민원을 존중하는 의견으로 다듬기', minutes: 13, tool: 'mindmap',
            teacher: '"이 문장을 받은 선생님은 무엇을 할 수 있을까요?" 비난만 담긴 문장은 답할 거리가 없고, 사실과 바라는 점이 담긴 문장은 해결의 실마리가 된다는 점을 비교한다. "그래도 학교가 안 들어주면요?"라는 물음에는 학교운영위원회, 교육청 공식 민원 창구처럼 단계가 있다는 점을 알려 준다. 3번은 모둠에서 말로 나눈다.',
            task: '거친 민원 문장을 존중하는 의견 문장으로 바꾸고, 학교 공동체의 소통 원칙을 골라요.',
            levels: LV,
            items: [
              MM('거친 문장과 다듬은 문장을 이어 보세요. 맞지 않는 카드는 남겨요.', '민원 문장 다듬기', [{ id: 'w1', label: '선생님 자격이 없네요' }, { id: 'w2', label: '당장 우리 애 자리 바꿔요' }, { id: 'w3', label: '교육청에 다 퍼뜨릴 거예요' }], ['지도 방식이 궁금해 상담 원해요', '자리 문제로 의논하고 싶어요', '답이 없으면 공식 절차를 밟을게요', '다른 학부모도 다 불만이에요'], { w1: '지도 방식이 궁금해 상담 원해요', w2: '자리 문제로 의논하고 싶어요', w3: '답이 없으면 공식 절차를 밟을게요' }, 0.3),
              MP('학교 공동체가 서로 존중하며 소통하는 원칙만 골라 담아 보세요.', '존중하는 소통 원칙', ['공식 창구와 시간을 지켜요', '사실을 확인하고 말해요', '서로의 역할을 인정해요', '답이 늦으면 공개 비난해요'], ['공식 창구와 시간을 지켜요', '사실을 확인하고 말해요', '서로의 역할을 인정해요'], 0.25,
                { conclude: '보호자·학생·교사가 서로의 역할을 인정할 때 의견은 교육을 좋게 만드는 힘이 돼요.' }),
              TALK('모둠에서 "보호자가 되었을 때 내가 지킬 소통 원칙" 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 원칙은 보호자가 되기 전, 대학이나 일터에서 의견을 낼 때도 쓸 수 있을까요?" 출구 1번에서 반복 요구를 정당한 쪽에 둔 학생에게는 기다림과 반복의 차이를 다시 짚는다. 의견을 내는 것은 권리이고, 방식에 대한 책임이 그 권리를 지킨다는 말로 마무리한다.',
          exit: [
            XS('의견을 전하는 방식을 두 가지로 나누어 보세요.', '정당한가, 부당한가', ['정당한 의견', '부당한 간섭'], ['상담 시간을 정해 의논해요', '교사 집 앞에 찾아가요', '사실을 적어 공식 문의해요', '맘카페에 실명으로 비난해요'], { '정당한 의견': ['상담 시간을 정해 의논해요', '사실을 적어 공식 문의해요'], '부당한 간섭': ['교사 집 앞에 찾아가요', '맘카페에 실명으로 비난해요'] }),
            XC('정당한 의견과 부당한 간섭을 가르는 기준으로 가장 알맞은 것은?', ['의견의 내용', '의견을 전하는 창구·횟수·말투 같은 방식', '의견을 낸 사람의 직업'], 1, '같은 내용이라도 전하는 방식이 정당성을 가르는 기준이 돼요.'),
            XT('"학교가 엉망이에요"라는 말을 근거와 바라는 점이 담긴 의견 문장으로 바꾸어 쓰세요.'),
          ],
        },
        ws: {
          title: '정당한 의견과 부당한 간섭',
          items: [
            { type: 'table', prompt: '정당한 의견의 조건과 예를 쓰세요.', columns: ['조건', '예'], cells: [['알맞은 창구', ''], ['사실과 근거', ''], ['존중하는 말', '']], answer: '학교 민원 창구·상담 예약 / 날짜와 상황 적기 / "확인 부탁드려요"' },
            { type: 'choice', prompt: '부당한 간섭이 될 수 있는 행동에 ○ 하세요.', options: ['학교운영위원회 안건 제출', '밤마다 교사 개인 번호로 연락', '상담 예약'], answer: '밤마다 교사 개인 번호로 연락' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '의견을 내는 것은 권리이고, 그 권리를 지키는 것은 전하는 ___에 대한 책임이다.', answer: '방식' },
            { type: 'short', prompt: '보호자·학생·교사가 서로 존중하며 소통하는 학교의 모습을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 민원 자체를 나쁜 것으로 본다 → 의견 제시는 정당한 참여이고 방식이 기준임을 짚는다. ② 강하게 말해야 해결된다고 믿는다 → 창구·근거·존중하는 말이 해결의 길임을 문장 다듬기로 보여 준다. ③ 실제 사건·인물을 떠올리게 하지 않는다 — 사례는 모두 가상이다. 침해 여부의 판단과 조치는 학교·교육청 절차에 따르며 이 차시에서 단정하지 않는다.',
      }),
    ],
  });
})();
