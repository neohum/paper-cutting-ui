/* 고2 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간. 장애인차별금지법의 취지로 채용·일터의 차별과 정당한 편의를 가리고, 정보 접근성 점검 차례를 다룬다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 11; const CODE = 'disab';
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
    flow: '고2 장애인식개선 단원은 곧 아르바이트·진로를 준비할 학생이 마주할 일터와 정보의 세계를 다룹니다. 1차시에는 장애인차별금지법의 취지에 따라 채용·근무 장면에서 장애를 이유로 한 차별과, 업무를 할 수 있게 돕는 정당한 편의, 업무에 꼭 필요한 정당한 요건을 가려냅니다. 2차시에는 대체 텍스트·자막·충분한 색 대비·쉬운 글 같은 정보 접근성 원칙을 익히고, 학급 게시물과 발표 자료를 점검하는 차례를 세웁니다. 고1의 사회적 관점과 정당한 편의를 일터와 디지털 정보로 넓힙니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '채용과 일터 장면에서 차별과 정당한 편의 가르기',
        objective: '채용·근무 장면에서 장애를 이유로 한 차별, 정당한 편의, 업무에 필요한 정당한 요건을 구별하고 판단의 근거를 말할 수 있다.',
        draw: 'a paper-cut office with a wheelchair-accessible desk, a screen reader headset and an interview table with two people talking',
        banner: '일할 권리, 같은 기회', extra: [{ motif: 'leaf', x: 330, y: 224, color: 'mint' }],
        intro: {
          teacher: '"아르바이트 면접에서 \'장애가 있으면 손님이 불편해할 것 같다\'며 떨어뜨린다면 어떻게 생각하나요?" 대답을 듣고(기다릴 반응: "차별이에요", "가게 사정도 있잖아요") 두 입장을 모두 적는다. "가게 주인 마음 아닌가요?"라는 물음에는 "그 일을 할 수 있는지와 손님의 편견은 같은 기준일까요?"라고 되묻는다. 시연으로 사례를 나누고, 오늘은 일터의 차별과 편의를 가린다고 밝힌다.',
          student: '나중에 일할 곳을 고를 때 꼭 있었으면 하는 조건 하나를 짝과 말해 봅시다.',
          demo: DEMO('일터의 판단', ['차별', '정당한 편의'], ['장애 이유로 면접 거절', '화면 낭독 프로그램 설치'], { '차별': ['장애 이유로 면접 거절'], '정당한 편의': ['화면 낭독 프로그램 설치'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 채용·일터 사례 세 갈래로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 판단의 근거는 업무 능력인가요, 장애에 대한 짐작인가요?" 차별(장애를 이유로 한 불이익), 정당한 편의(업무를 할 수 있게 돕는 조치), 정당한 요건(그 업무에 꼭 필요한 조건)을 구별하게 한다. 1번에서 "운전 업무에 운전면허 요구"를 차별로 넣는 학생에게 "그 일을 하려면 꼭 필요한 조건인가요?"라고 묻는다. 장애인차별금지법은 고용의 모든 단계에서 장애를 이유로 한 차별을 금지한다는 취지를 짚는다.',
            task: '채용·근무 사례를 차별·정당한 편의·정당한 요건으로 나누어요.',
            levels: LV,
            items: [
              MS('사례를 세 갈래로 나누어 보세요.', '채용·근무 사례', ['차별', '정당한 편의', '정당한 요건'], ['장애 있다고 면접 기회 없음', '같은 일에 임금 적게', '높이 조절 책상 제공', '면접에 수어 통역', '운전직에 운전면허 요구', '통번역직에 외국어 시험'], { '차별': ['장애 있다고 면접 기회 없음', '같은 일에 임금 적게'], '정당한 편의': ['높이 조절 책상 제공', '면접에 수어 통역'], '정당한 요건': ['운전직에 운전면허 요구', '통번역직에 외국어 시험'] }, 0.35),
              MM('일하는 사람의 필요와 정당한 편의를 이어 보세요. 맞지 않는 카드는 남겨요.', '일터의 편의', [{ id: 'w1', label: '화면을 보기 어려워요' }, { id: 'w2', label: '오래 서 있기 어려워요' }, { id: 'w3', label: '복잡한 지시가 어려워요' }], ['화면 낭독 프로그램', '앉아서 하는 작업대', '그림으로 된 업무 안내', '일을 아예 빼 주기'], { w1: '화면 낭독 프로그램', w2: '앉아서 하는 작업대', w3: '그림으로 된 업무 안내' }, 0.25),
              MP('장애를 이유로 한 차별이 될 수 있는 것만 골라 담아 보세요.', '차별의 신호', ['손님이 불편해할까 봐 거절', '승진 심사에서 일부러 제외', '필요한 보조기기 요청 무시', '업무 능력으로 평가'], ['손님이 불편해할까 봐 거절', '승진 심사에서 일부러 제외', '필요한 보조기기 요청 무시'], 0.3,
                { conclude: '일터의 판단 기준은 장애에 대한 짐작이 아니라 업무에 필요한 능력과 조건이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 짐작과 사실 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 말은 확인된 사실일까요, 짐작일까요?" 장애인 고용을 막는 흔한 짐작을 사실과 견주게 한다. 2번에서 "편의 제공은 언제나 큰돈이 든다"를 사실에 넣는 학생에게 "작업대 높이 조정이나 업무 안내를 그림으로 바꾸는 데도 큰돈이 들까요?"라고 묻는다. 숫자 통계는 쓰지 않고 판단 방식에 집중한다. 3번은 짝과 말로 나눈다.',
            task: '장애인 고용에 관한 말을 짐작과 사실로 나누고 다시 써요.',
            levels: LV,
            items: [
              MS('말을 두 가지로 나누어 보세요.', '고용에 관한 말', ['근거 없는 짐작', '판단의 바른 기준'], ['장애인은 일을 잘 못해', '편의는 늘 큰돈이 들어', '업무 능력으로 평가해요', '필요한 편의는 본인에게 물어요'], { '근거 없는 짐작': ['장애인은 일을 잘 못해', '편의는 늘 큰돈이 들어'], '판단의 바른 기준': ['업무 능력으로 평가해요', '필요한 편의는 본인에게 물어요'] }, 0.25),
              MM('짐작과 바르게 고친 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '고쳐 말하기', [{ id: 's1', label: '장애가 있으니 이 일은 무리야' }, { id: 's2', label: '손님이 싫어할 거야' }, { id: 's3', label: '우리가 대신 정해 주자' }], ['필요한 편의가 있는지 물어볼게요', '손님의 편견보다 능력을 봐요', '본인의 뜻을 먼저 들어요', '그냥 쉬운 일만 줘요'], { s1: '필요한 편의가 있는지 물어볼게요', s2: '손님의 편견보다 능력을 봐요', s3: '본인의 뜻을 먼저 들어요' }, 0.3,
                { conclude: '짐작 대신 묻고, 편견 대신 능력을 보는 것이 같은 기회를 여는 길이에요.' }),
              TALK('짝과 함께 내가 사장이라면 장애가 있는 지원자를 공정하게 면접하기 위해 할 일 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 이후 \'그 일은 무리야\'라는 말을 들으면 어떻게 다시 묻겠어요?" 출구 1번에서 운전면허 요구를 차별로 넣은 학생에게는 업무에 꼭 필요한 요건은 차별이 아니라는 점을 다시 짚는다. 일할 권리는 모두의 권리라는 말로 마무리한다.',
          exit: [
            XS('사례를 두 가지로 나누어 보세요.', '차별일까 편의일까', ['차별', '정당한 편의'], ['장애 이유로 서류 탈락', '보조기기 요청 무시', '출입구 경사로 설치', '근무 시간 조정'], { '차별': ['장애 이유로 서류 탈락', '보조기기 요청 무시'], '정당한 편의': ['출입구 경사로 설치', '근무 시간 조정'] }),
            XC('채용에서 공정한 판단 기준으로 가장 알맞은 것은?', ['장애에 대한 짐작', '업무에 필요한 능력과 조건', '손님의 선호'], 1, '판단은 업무에 필요한 능력과 조건으로 해요.'),
            XT('장애가 있는 동료와 함께 일할 때 필요한 편의를 정하는 바른 방법을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '채용과 일터의 차별 가려내기',
          items: [
            { type: 'table', prompt: '사례를 읽고 갈래를 쓰세요.', columns: ['사례', '차별·정당한 편의·정당한 요건'], cells: [['장애 이유로 면접 거절', ''], ['면접에 수어 통역', ''], ['운전직에 운전면허 요구', '']], answer: '차별 / 정당한 편의 / 정당한 요건' },
            { type: 'choice', prompt: '정당한 편의에 ○ 하세요.', options: ['승진 심사 제외', '화면 낭독 프로그램 설치', '임금 적게 주기'], answer: '화면 낭독 프로그램 설치' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '필요한 편의는 짐작하지 말고 ___에게 묻는다.', answer: '본인' },
            { type: 'short', prompt: '장애인 고용을 막는 짐작 하나를 골라 바르게 고쳐 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 고용주의 사정이면 차별도 괜찮다고 여긴다 → 판단 근거가 업무 능력인지 짐작인지 가르게 한다. ② 모든 조건 요구를 차별로 본다 → 업무에 꼭 필요한 정당한 요건과 구별한다. ③ 장애인 고용 통계·의무고용률 숫자는 쓰지 않는다. 장면은 모두 가상이다.',
      }),
      LESSON(2, {
        title: '정보 접근성 원칙으로 학급 게시물 점검하기',
        objective: '대체 텍스트·자막·충분한 색 대비·쉬운 글 같은 정보 접근성 원칙을 알고, 학급 게시물과 발표 자료를 점검하는 차례를 세울 수 있다.',
        draw: 'a paper-cut classroom bulletin board with an image labeled by a caption, a video with subtitles and a magnifying glass',
        banner: '누구나 읽는 게시물', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"화면을 볼 수 없는 친구는 사진만 있는 학급 공지를 어떻게 알 수 있을까요?" 대답을 듣고(기다릴 반응: "누가 읽어 줘야 해요", "못 알아요") 화면 낭독 프로그램은 사진 속 글을 읽지 못하고, 사진에 설명 글(대체 텍스트)이 있어야 읽어 준다는 점을 알려 준다. "그건 장애인만을 위한 거잖아요"라는 말에는 "소리를 끄고 영상을 보는 사람, 한국어가 서툰 사람에게는 어떨까요?"라고 되묻는다. 오늘은 누구나 읽는 게시물을 만든다고 밝힌다.',
          student: '글씨가 너무 작거나 색이 흐려서 읽기 어려웠던 안내문의 가상 예를 짝과 하나 말해 봅시다.',
          demo: DEMO('게시물 살피기', ['접근성을 높여요', '장벽이 돼요'], ['사진에 설명 글 달기', '흐린 회색 작은 글씨'], { '접근성을 높여요': ['사진에 설명 글 달기'], '장벽이 돼요': ['흐린 회색 작은 글씨'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 접근성 점검 차례 세우기', minutes: 13, tool: 'story',
            teacher: '"점검을 어디서부터 시작하면 빠뜨리지 않을까요?" 글 → 이미지 → 영상 → 확인의 순서로 살피면 빠뜨림이 줄어든다는 점을 짚는다. 2번에서 자막을 영상을 올린 뒤에 다는 순서를 고른 학생에게 "올린 뒤 고치면 이미 본 사람은 어떻게 될까요?"라고 묻는다. 3번 확인 단계에서는 실제 이용자에게 묻는 것이 가장 정확하다는 점을 강조한다.',
            task: '학급 게시물과 발표 자료의 접근성을 점검하는 장면 카드를 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('학급 공지를 올리기 전 점검 차례로 카드를 놓아 보세요.', '공지 올리기 전', ['처음', '다음', '그다음', '끝'], [C('easy', '쉬운 말로 다듬기', 'leaf'), C('size', '글자 크기·대비 확인', 'sun'), C('alt', '사진에 설명 글 달기', 'star'), C('post', '올리고 반응 살피기', 'house')], ['easy', 'size', 'alt', 'post'], 0.2),
              SO('발표 영상을 만드는 차례로 카드를 놓아 보세요.', '발표 영상 만들기', ['처음', '다음', '끝'], [C('script', '대본 쓰기', 'leaf'), C('cap', '대본으로 자막 달기', 'star'), C('share', '자막 켜고 공유', 'sun')], ['script', 'cap', 'share'], 0.25),
              SO('완성한 자료를 확인하는 차례로 카드를 놓아 보세요.', '완성 뒤 확인', ['처음', '다음', '끝'], [C('self', '소리 끄고 직접 보기', 'moon'), C('ask', '이용자 의견 묻기', 'flower'), C('fix', '의견 반영해 고치기', 'leaf')], ['self', 'ask', 'fix'], 0.3,
                { conclude: '쉬운 말 → 크기·대비 → 설명 글·자막 → 확인의 차례로 점검하면 누구나 읽는 자료가 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 접근성 원칙 잇고 점검하기', minutes: 14, tool: 'mindmap',
            teacher: '"이 원칙은 누구에게 특히 도움이 될까요?" 원칙마다 도움받는 사람을 떠올리되, 결국 모두에게 편리하다는 점을 짚는다. 1번에서 "색으로만 구분하기"를 좋은 방법으로 보는 학생에게 "빨강과 초록을 구별하기 어려운 사람에게는 어떨까요?"라고 묻는다. 3번은 모둠에서 말로 나눈다.',
            task: '정보 접근성 원칙과 도움받는 사람을 잇고, 게시물을 점검해요.',
            levels: LV,
            items: [
              MM('접근성 원칙과 특히 도움받는 사람을 이어 보세요. 맞지 않는 카드는 남겨요.', '원칙과 도움받는 사람', [{ id: 'p1', label: '사진 설명 글' }, { id: 'p2', label: '영상 자막' }, { id: 'p3', label: '쉬운 글' }], ['화면을 보기 어려운 사람', '소리를 듣기 어려운 사람', '어려운 글이 힘든 사람', '아무도 없음'], { p1: '화면을 보기 어려운 사람', p2: '소리를 듣기 어려운 사람', p3: '어려운 글이 힘든 사람' }, 0.25),
              MS('게시물 특징을 두 가지로 나누어 보세요.', '게시물 점검', ['접근성을 높여요', '장벽이 돼요'], ['색과 글로 함께 구분', '굵고 큰 제목', '빨강·초록 색으로만 구분', '글자를 사진으로만 올림'], { '접근성을 높여요': ['색과 글로 함께 구분', '굵고 큰 제목'], '장벽이 돼요': ['빨강·초록 색으로만 구분', '글자를 사진으로만 올림'] }, 0.3,
                { conclude: '정보 접근성은 장애인만을 위한 것이 아니라 모두가 정보를 얻는 기본 조건이에요.' }),
              TALK('모둠에서 우리 반 게시물 하나를 떠올려 접근성을 높일 고칠 점 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"다음 발표 자료를 만들 때 무엇 하나를 꼭 넣겠어요?" 출구 1번에서 자막을 공유 뒤에 둔 학생에게는 활동 1의 차례를 다시 보게 한다. 장애인차별금지법은 정보 접근에서의 차별도 금지한다는 취지를 덧붙여 말해 준다.',
          exit: [
            XO('발표 영상을 공유하는 차례로 카드를 놓아 보세요.', '영상 공유', ['처음', '다음', '끝'], [C('z1', '대본 쓰기', 'leaf'), C('z2', '자막 달기', 'star'), C('z3', '공유하기', 'sun')], ['z1', 'z2', 'z3']),
            XC('사진만 있는 공지에 꼭 더할 것은?', ['더 화려한 색', '사진을 설명하는 글', '더 작은 글씨'], 1, '설명 글이 있어야 화면 낭독 프로그램이 내용을 읽어 줘요.'),
            XT('누구나 읽을 수 있는 게시물을 만들기 위한 원칙 두 가지를 쓰세요.'),
          ],
        },
        ws: {
          title: '누구나 읽을 수 있는 게시물',
          items: [
            { type: 'table', prompt: '접근성 원칙과 도움받는 사람을 쓰세요.', columns: ['원칙', '도움받는 사람'], cells: [['사진 설명 글', ''], ['영상 자막', ''], ['쉬운 글', ''], ['색과 글 함께 쓰기', '']], answer: '화면을 보기 어려운 사람 / 소리를 듣기 어려운 사람 / 어려운 글이 힘든 사람 / 색 구별이 어려운 사람' },
            { type: 'choice', prompt: '장벽이 되는 게시물에 ○ 하세요.', options: ['굵고 큰 제목', '글자를 사진으로만 올림', '자막 있는 영상'], answer: '글자를 사진으로만 올림' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '화면 낭독 프로그램은 사진에 ___ 글이 있어야 내용을 읽어 준다.', answer: '설명(대체)' },
            { type: 'short', prompt: '우리 반 게시물을 접근성 원칙으로 고친 계획을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 접근성을 장애인만을 위한 것으로 여긴다 → 소리 끈 영상·외국어 사용자 등 모두에게 도움이 됨을 짚는다. ② 색으로만 정보를 구분한다 → 색과 글을 함께 쓰게 한다. ③ 웹 접근성 국가 표준의 세부 항목은 다루지 않고 원칙만 익힌다.',
      }),
    ],
  });
})();
