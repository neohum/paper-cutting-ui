/* 중3 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간.
 * 차별의 갈래는 「장애인차별금지 및 권리구제 등에 관한 법률」이 정한 직접차별·간접차별·정당한 편의 제공 거부의 뜻만 쓰고 조문 번호·처벌은 적지 않는다(원문 대조 안 됨).
 * 보편적 설계는 일반 원리(누구나 공평하게, 쉽고 직관적으로, 적은 힘으로)만 다룬다. 장면·인물은 가명. */
(function () {
  const G = 9; const CODE = 'disab';
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
    flow: '중학교 장애인식개선의 마무리로, 개인의 태도에서 제도와 설계로 시선을 넓힙니다. 1차시에는 장애인차별금지법이 차별로 보는 세 갈래(직접차별·간접차별·정당한 편의 제공 거부)를 사례에 적용해 보고, 시험 시간 연장 같은 편의 제공은 특혜가 아니라 같은 출발선을 만드는 일임을 가립니다. 2차시에는 보편적 설계의 원리로 우리 학교 공간과 안내물을 다시 보고 개선안을 고릅니다. 1·2학년(편견·에티켓, 편의시설·통합학급)에서 배운 것을 "차별 없는 구조"로 묶습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '차별의 세 갈래를 사례에 적용하기',
        objective: '장애인차별금지법이 정한 직접차별·간접차별·정당한 편의 제공 거부를 사례에 적용하고, 편의 제공이 특혜가 아님을 근거를 들어 말할 수 있다.',
        draw: 'a paper scale balancing a staircase on one side and a ramp on the other, with students discussing in front of it',
        banner: '같은 출발선', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"모두에게 똑같은 계단을 주면 공평한 걸까요?" 대답을 듣고(기다릴 반응: "똑같으니까 공평해요", "휠체어는 못 올라가요") 시연으로 사례 카드를 나눈다. "장애 학생 시험 시간을 늘려 주는 건 특혜예요"라는 말이 나오면 "안경을 쓰고 시험 보는 것도 특혜일까요?"라고 되묻는다. 오늘은 법이 차별로 보는 것이 무엇인지 사례로 따져 본다고 밝힌다.',
          student: '"똑같이 대하는 것"과 "공평하게 대하는 것"이 다를 수 있는 예를 하나 떠올려 짝에게 말해 봅시다.',
          demo: DEMO('사례 판단', ['차별', '차별 아님'], ['장애를 이유로 가입 거절', '확대 시험지 제공'], { '차별': ['장애를 이유로 가입 거절'], '차별 아님': ['확대 시험지 제공'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 차별의 갈래 알아보기', minutes: 14, tool: 'mindmap',
            teacher: '"이 사례는 대놓고 거절한 것인가요, 겉으로는 같은 기준인데 결과가 불리한 것인가요?" 직접차별은 장애를 이유로 정당한 사유 없이 배제·거부하는 것, 간접차별은 겉으로는 같은 기준이지만 장애인에게 불리한 결과를 내는 것, 정당한 편의 제공 거부는 필요한 지원을 정당한 사유 없이 주지 않는 것이라고 짚는다. 간접차별을 "차별 아님"으로 두는 학생에게 "모두에게 같은 규칙이었는데 누가 아예 참여할 수 없게 되었나요?"라고 묻는다.',
            task: '차별 사례를 직접차별·간접차별·정당한 편의 제공 거부로 나누고 까닭을 말해요.',
            levels: LV,
            items: [
              MS('사례를 차별의 갈래로 나누어 보세요.', '차별의 갈래', ['직접차별', '간접차별', '편의 제공 거부'], ['휠체어라서 동아리 가입 거절', '면접장을 계단 위 2층에만 둠', '점자 자료 요청을 이유 없이 거부', '장애를 이유로 체험학습 제외'], { '직접차별': ['휠체어라서 동아리 가입 거절', '장애를 이유로 체험학습 제외'], '간접차별': ['면접장을 계단 위 2층에만 둠'], '편의 제공 거부': ['점자 자료 요청을 이유 없이 거부'] }, 0.25),
              MM('갈래와 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '갈래의 뜻', [{ id: 'k1', label: '직접차별' }, { id: 'k2', label: '간접차별' }, { id: 'k3', label: '편의 제공 거부' }], ['장애를 이유로 대놓고 배제', '같은 기준이 불리한 결과를 냄', '필요한 지원을 이유 없이 안 줌', '모두에게 같은 선물을 줌'], { k1: '장애를 이유로 대놓고 배제', k2: '같은 기준이 불리한 결과를 냄', k3: '필요한 지원을 이유 없이 안 줌' }, 0.2),
              MS('공연장 사례를 나누어 보세요.', '공연장 사례', ['직접차별', '간접차별', '편의 제공 거부'], ['청각장애인 수어 통역 요청 거절', '예매를 전화로만 받음', '안내견 동반 입장 거절'], { '직접차별': ['안내견 동반 입장 거절'], '간접차별': ['예매를 전화로만 받음'], '편의 제공 거부': ['청각장애인 수어 통역 요청 거절'] }, 0.3,
                { conclude: '차별은 대놓고 거절하는 것만이 아니라 겉으로 같은 기준, 필요한 지원의 거부로도 일어나요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 편의 제공은 특혜일까', minutes: 13, tool: 'mindmap',
            teacher: '"시험 시간 연장, 확대 시험지, 대독은 다른 학생보다 유리하게 해 주는 걸까요?" 편의 제공은 장애 때문에 생기는 불리함을 덜어 같은 출발선에 서게 하는 것이라는 점을 짚는다. "그럼 나도 시간을 더 달라고 할래요"라는 말에는 필요의 근거가 있어야 한다는 점, 편의 제공은 학교의 절차로 정한다는 점을 말해 준다. 3번은 모둠에서 말로 나눈다.',
            task: '편의 제공과 특혜를 가르고, 같은 출발선의 뜻을 근거로 말해요.',
            levels: LV,
            items: [
              MS('사례를 두 가지로 나누어 보세요.', '편의 제공일까 특혜일까', ['같은 출발선(편의 제공)', '근거 없는 특혜'], ['저시력 학생에게 확대 시험지', '청각장애 학생 자리를 앞쪽에', '친한 학생만 시험 시간 연장', '이유 없이 한 명만 과제 면제'], { '같은 출발선(편의 제공)': ['저시력 학생에게 확대 시험지', '청각장애 학생 자리를 앞쪽에'], '근거 없는 특혜': ['친한 학생만 시험 시간 연장', '이유 없이 한 명만 과제 면제'] }, 0.25),
              MP('편의 제공이 특혜가 아닌 까닭에 맞는 카드만 골라 담아 보세요.', '특혜가 아닌 까닭', ['장애로 생긴 불리함을 덜어요', '같은 조건에서 실력을 보게 해요', '점수를 더 얹어 줘요', '원하는 사람 누구나 받아요'], ['장애로 생긴 불리함을 덜어요', '같은 조건에서 실력을 보게 해요'], 0.3,
                { conclude: '편의 제공은 더 얹어 주는 것이 아니라 가로막힌 것을 치워 같은 출발선에 서게 하는 일이에요.' }),
              TALK('모둠에서 "똑같이"와 "공평하게"가 다른 학교생활 장면 하나를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 세 갈래 가운데 가장 알아차리기 어려운 것은 무엇이었나요?" 대개 간접차별이라는 점을 짚고, 같은 규칙이라도 누가 빠지는지 살펴보는 습관을 강조한다. 출구 2번에서 특혜를 고른 학생에게는 안경 예시를 다시 떠올리게 한다.',
          exit: [
            XS('사례 카드를 나누어 보세요.', '차별일까', ['차별', '차별 아님'], ['장애를 이유로 아르바이트 면접 거절', '휠체어석이 있는 영화관', '자막 요청을 이유 없이 거절', '시각장애 학생에게 화면 읽기 프로그램'], { '차별': ['장애를 이유로 아르바이트 면접 거절', '자막 요청을 이유 없이 거절'], '차별 아님': ['휠체어석이 있는 영화관', '시각장애 학생에게 화면 읽기 프로그램'] }),
            XC('저시력 학생에게 확대 시험지를 주는 것에 대한 설명으로 알맞은 것은 무엇인가요?', ['다른 학생에게 불공평한 특혜다', '장애로 생긴 불리함을 덜어 주는 편의 제공이다', '점수를 올려 주는 방법이다'], 1, '편의 제공은 같은 출발선에 서게 하는 것이에요.'),
            XT('"모두에게 같은 규칙"이 차별이 될 수 있는 예를 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '차별의 세 갈래',
          items: [
            { type: 'table', prompt: '사례가 어느 갈래인지 쓰세요.', columns: ['사례', '갈래'], cells: [['휠체어라서 가입 거절', ''], ['면접장이 계단 위에만 있음', ''], ['점자 자료 요청 거부', '']], answer: '직접차별, 간접차별, 정당한 편의 제공 거부' },
            { type: 'choice', prompt: '간접차별의 뜻으로 알맞은 것에 ○ 하세요.', options: ['장애를 이유로 대놓고 거절함', '겉으로 같은 기준이 장애인에게 불리한 결과를 냄', '필요한 지원을 주지 않음'], answer: '겉으로 같은 기준이 장애인에게 불리한 결과를 냄' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '편의 제공은 특혜가 아니라 같은 ___에 서게 하는 일이에요.', answer: '출발선' },
            { type: 'short', prompt: '"장애 학생 시험 시간 연장은 특혜다"라는 말에 근거를 들어 답하는 글을 세 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 대놓고 거절하는 것만 차별로 본다 → 간접차별·편의 제공 거부 사례를 함께 보여 준다. ② 편의 제공을 특혜·역차별로 본다 → 안경·계단과 경사로 비유로 같은 출발선의 뜻을 짚는다. ③ 법 조문 번호와 처벌 내용은 원문 대조가 되지 않았으므로 다루지 않는다. 반의 장애 학생이 받는 지원을 예로 들지 않는다.',
      }),

      LESSON(2, {
        title: '보편적 설계의 눈으로 우리 학교 다시 보기',
        objective: '보편적 설계의 원리를 말하고, 우리 학교 공간과 안내물에 필요한 개선안을 근거를 들어 고를 수 있다.',
        draw: 'a paper school entrance with an automatic door, a gentle ramp, picture signs and a lever door handle, students of many kinds walking in',
        banner: '누구나 쓰기 쉽게', extra: [{ motif: 'flower', x: 300, y: 222, color: 'sky' }],
        intro: {
          teacher: '"문손잡이가 동그란 것과 막대처럼 생긴 것, 짐을 든 손으로 열기 쉬운 쪽은 어디일까요?" 대답을 듣고(기다릴 반응: "막대요", "팔꿈치로도 열려요") 시연으로 설계 카드를 나눈다. "장애인을 위한 시설을 따로 만들면 돼요"라는 말이 나오면 "처음부터 누구나 쓸 수 있게 만들면 따로 만들 필요가 있을까요?"라고 되묻는다. 오늘은 보편적 설계의 눈으로 학교를 다시 본다고 밝힌다.',
          student: '학교에서 쓰기 불편하다고 느낀 물건이나 공간 하나를 떠올려 누구에게 더 불편할지 짝에게 말해 봅시다.',
          demo: DEMO('설계 보기', ['보편적 설계', '아쉬운 설계'], ['막대형 문손잡이', '높은 곳의 안내문'], { '보편적 설계': ['막대형 문손잡이'], '아쉬운 설계': ['높은 곳의 안내문'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 보편적 설계의 원리 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"이 설계는 누구에게 도움이 될까요? 한 사람만일까요, 많은 사람일까요?" 보편적 설계는 처음부터 나이·장애·체격과 상관없이 누구나 쓸 수 있게 만드는 것이고, 따로 분리된 시설보다 함께 쓰는 설계를 지향한다는 점을 짚는다. 원리 카드(공평하게, 쉽고 직관적으로, 적은 힘으로)를 사례와 잇게 한다.',
            task: '생활 속 설계를 보편적 설계의 원리와 잇고, 보편적 설계인지 가려요.',
            levels: LV,
            items: [
              MM('설계와 원리를 이어 보세요. 맞지 않는 카드는 남겨요.', '보편적 설계의 원리', [{ id: 'u1', label: '자동문' }, { id: 'u2', label: '그림 표지(픽토그램)' }, { id: 'u3', label: '모든 입구를 같은 경사로로' }], ['적은 힘으로 써요', '말을 몰라도 알아봐요', '누구나 같은 길로 다녀요', '비싸 보이게 해요'], { u1: '적은 힘으로 써요', u2: '말을 몰라도 알아봐요', u3: '누구나 같은 길로 다녀요' }, 0.2),
              MS('설계를 두 가지로 나누어 보세요.', '설계 가려내기', ['보편적 설계', '아쉬운 설계'], ['높낮이 조절 책상', '영상에 늘 자막 넣기', '뒷문으로만 다니는 휠체어 통로', '작은 글씨만 있는 안내문'], { '보편적 설계': ['높낮이 조절 책상', '영상에 늘 자막 넣기'], '아쉬운 설계': ['뒷문으로만 다니는 휠체어 통로', '작은 글씨만 있는 안내문'] }, 0.25),
              MP('저상버스가 도움을 주는 사람만 골라 담아 보세요.', '저상버스가 돕는 사람', ['휠체어 사용자', '어르신', '유모차를 미는 보호자', '버스 기사만'], ['휠체어 사용자', '어르신', '유모차를 미는 보호자'], 0.3,
                { conclude: '보편적 설계는 한 사람을 위한 특별한 장치가 아니라 처음부터 모두를 위한 설계예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 학교 개선안 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"이 개선안은 학교의 어느 문제를, 누구를 위해 푸나요?" 개선안마다 근거를 말하게 한다. "돈이 많이 드니 안 돼요"라는 말에는 자막 켜기·글씨 키우기·그림 표지처럼 바로 할 수 있는 개선도 있다는 점을 짚는다. 3번 모둠 제안은 실제 학생회·학교에 낼 수 있는 모양으로 다듬게 한다.',
            task: '우리 학교의 불편과 보편적 설계 개선안을 잇고, 모둠 제안을 정해요.',
            levels: LV,
            items: [
              MM('학교의 불편과 개선안을 이어 보세요. 맞지 않는 카드는 남겨요.', '학교 개선안', [{ id: 's1', label: '방송 조회가 소리로만 나와요' }, { id: 's2', label: '교실 이름표가 글자뿐이에요' }, { id: 's3', label: '급식실 배식대가 너무 높아요' }], ['화면에 자막을 함께 띄워요', '그림·점자 이름표를 달아요', '낮은 배식대 한 칸을 둬요', '안내를 줄여요'], { s1: '화면에 자막을 함께 띄워요', s2: '그림·점자 이름표를 달아요', s3: '낮은 배식대 한 칸을 둬요' }, 0.2),
              MS('개선안을 두 가지로 나누어 보세요.', '바로 할 수 있을까', ['오늘 바로 할 수 있어요', '학교와 의논해요'], ['발표 자료 글씨 키우기', '영상 자막 켜기', '승강기 새로 놓기', '출입문 자동문으로 바꾸기'], { '오늘 바로 할 수 있어요': ['발표 자료 글씨 키우기', '영상 자막 켜기'], '학교와 의논해요': ['승강기 새로 놓기', '출입문 자동문으로 바꾸기'] }, 0.25,
                { conclude: '작은 개선은 오늘 바로, 큰 개선은 근거를 모아 학교와 함께 — 모두 보편적 설계의 실천이에요.' }),
              TALK('모둠에서 "우리 학교에 제안할 보편적 설계 개선안 하나"를 누구를 위해·무엇을·어떻게로 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"중학교 3년 동안 배운 장애인식개선을 한 문장으로 묶는다면?" 1학년(편견과 에티켓), 2학년(편의시설과 통합), 3학년(차별 없는 구조와 설계)을 차례로 떠올리게 한다. 출구 1번에서 분리된 통로를 보편적 설계로 고른 학생에게는 "따로"가 아니라 "함께 쓰는" 설계라는 점을 다시 짚는다.',
          exit: [
            XS('설계 카드를 두 가지로 나누어 보세요.', '보편적 설계일까', ['보편적 설계', '아쉬운 설계'], ['글과 그림이 함께 있는 안내판', '계단만 있는 정문', '소리와 빛으로 알리는 화재 경보', '한 손으로만 돌리는 꼭지'], { '보편적 설계': ['글과 그림이 함께 있는 안내판', '소리와 빛으로 알리는 화재 경보'], '아쉬운 설계': ['계단만 있는 정문', '한 손으로만 돌리는 꼭지'] }),
            XC('보편적 설계에 대한 설명으로 알맞은 것은 무엇인가요?', ['장애인만 쓰는 시설을 따로 만든다', '처음부터 누구나 쓰기 쉽게 만든다', '비싼 재료로 만든다'], 1, '보편적 설계는 처음부터 나이·장애와 상관없이 누구나 쓰기 쉽게 만드는 거예요.'),
            XT('우리 학교에 제안하고 싶은 보편적 설계 개선안 하나를 까닭과 함께 쓰세요.'),
          ],
        },
        ws: {
          title: '보편적 설계로 바꾸는 학교',
          items: [
            { type: 'table', prompt: '학교의 불편과 개선안을 쓰세요.', columns: ['불편', '개선안'], cells: [['방송이 소리로만 나옴', ''], ['안내문이 작은 글씨뿐', ''], ['배식대가 높음', '']], answer: '자막 함께 띄우기, 글씨 키우고 그림 넣기, 낮은 배식대 두기' },
            { type: 'choice', prompt: '보편적 설계에 ○ 하세요.', options: ['뒷문으로만 다니는 휠체어 통로', '높낮이 조절 책상', '계단만 있는 입구'], answer: '높낮이 조절 책상' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '보편적 설계는 따로가 아니라 처음부터 ___를 위한 설계예요.', answer: '모두' },
            { type: 'draw', prompt: '보편적 설계를 적용한 우리 학교 입구나 교실 안내판을 그리세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 장애인 전용 시설을 따로 두는 것을 보편적 설계로 여긴다 → 함께 쓰는 설계가 원칙임을 짚는다. ② 비용 때문에 불가능하다고 여긴다 → 바로 할 수 있는 개선(자막·글씨·그림 표지)을 먼저 찾게 한다. ③ 개선안을 실제로 학생회·학교에 전할 때는 특정 학생을 이유로 들지 않는다.',
      }),
    ],
  });
})();
