/* 고1 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간. 장애의 사회적 관점(환경의 장벽)과 장애인차별금지법의 정당한 편의를 다룬다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 10; const CODE = 'disab';
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
    flow: '고1 장애인식개선 단원은 장애를 "개인이 가진 문제"로만 보는 관점에서 "손상과 환경의 장벽이 만나 생기는 어려움"으로 보는 사회적 관점으로 넓힙니다. 1차시에는 같은 사람이 환경에 따라 장애를 겪기도 하고 겪지 않기도 하는 장면을 비교하며 생활 속 장벽을 찾습니다. 2차시에는 「장애인차별금지 및 권리구제 등에 관한 법률」의 정당한 편의(장애인이 장애가 없는 사람과 동등하게 참여할 수 있도록 하는 수단과 조치) 뜻을 알고, 시험 시간 연장·확대 문제지 같은 학교생활의 편의가 특혜가 아니라 동등한 출발선이라는 점을 갈림길로 판단합니다. 중학교의 편의시설·차별 유형 학습을 관점과 공정성 논쟁으로 깊게 합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '같은 사람, 다른 환경으로 장애의 장벽 찾기',
        objective: '장애를 개인의 손상과 환경의 장벽이 만나 생기는 어려움으로 설명하고, 생활 속 장벽과 그것을 없애는 방법을 찾을 수 있다.',
        draw: 'a paper-cut street with a wheelchair user facing stairs on one side and a gentle ramp with an open door on the other',
        banner: '장벽은 어디에', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"휠체어를 쓰는 사람이 계단만 있는 건물 앞에 서 있어요. 이 사람이 들어가지 못하는 까닭은 다리 때문일까요, 계단 때문일까요?" 대답을 듣고(기다릴 반응: "다리가 불편해서요", "경사로가 없어서요") 두 대답을 모두 적는다. "장애는 그 사람의 문제 아닌가요?"라는 말에는 "경사로와 승강기가 있는 건물에서도 같은 어려움이 생길까요?"라고 되묻는다. 시연으로 관점을 나누고 오늘은 장벽을 찾는다고 밝힌다.',
          student: '학교나 동네에서 누군가에게는 불편할 수 있는 시설 하나를 짝과 말해 봅시다.',
          demo: DEMO('장애를 보는 관점', ['개인만 보는 관점', '환경도 보는 관점'], ['못 걷는 게 문제야', '계단만 있는 게 문제야'], { '개인만 보는 관점': ['못 걷는 게 문제야'], '환경도 보는 관점': ['계단만 있는 게 문제야'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 두 관점 가르고 장벽 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"이 문장은 어려움의 원인을 어디에서 찾고 있나요?" 개인에게서만 찾는 말과 환경의 장벽도 보는 말을 구별하게 한다. 2번에서 "자막 없는 영상"을 장벽으로 보지 못하는 학생에게 "소리를 듣기 어려운 사람에게 이 영상은 어떻게 다가갈까요?"라고 묻는다. 장벽에는 시설뿐 아니라 정보·태도의 장벽도 있다는 점을 짚는다.',
            task: '장애를 보는 두 관점을 가르고, 생활 속 장벽을 종류별로 나누어요.',
            levels: LV,
            items: [
              MS('문장을 두 관점으로 나누어 보세요.', '장애를 보는 관점', ['개인만 보는 관점', '환경도 보는 관점'], ['안 보이니 혼자 못 다녀', '장애는 개인이 극복할 일', '점자블록이 끊겨 위험해', '자막이 없어 못 알아들어'], { '개인만 보는 관점': ['안 보이니 혼자 못 다녀', '장애는 개인이 극복할 일'], '환경도 보는 관점': ['점자블록이 끊겨 위험해', '자막이 없어 못 알아들어'] }, 0.2),
              MS('생활 속 장벽을 종류별로 나누어 보세요.', '장벽의 종류', ['시설의 장벽', '정보의 장벽', '태도의 장벽'], ['계단만 있는 입구', '높은 매표 창구', '자막 없는 안내 영상', '글자만 있는 메뉴판', '"어차피 못 하잖아"', '대신 결정해 버리기'], { '시설의 장벽': ['계단만 있는 입구', '높은 매표 창구'], '정보의 장벽': ['자막 없는 안내 영상', '글자만 있는 메뉴판'], '태도의 장벽': ['"어차피 못 하잖아"', '대신 결정해 버리기'] }, 0.3),
              MM('장벽과 그것을 없애는 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '장벽 없애기', [{ id: 'b1', label: '계단만 있는 입구' }, { id: 'b2', label: '자막 없는 영상' }, { id: 'b3', label: '"어차피 못 하잖아"' }], ['경사로·승강기 설치', '자막·수어 통역 제공', '먼저 묻고 함께 정하기', '도와주는 척하기'], { b1: '경사로·승강기 설치', b2: '자막·수어 통역 제공', b3: '먼저 묻고 함께 정하기' }, 0.25,
                { conclude: '장애는 손상과 환경의 장벽이 만날 때 생기는 어려움이에요. 장벽을 없애면 어려움도 줄어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 학교의 장벽 점검하기', minutes: 14, tool: 'mindmap',
            teacher: '"우리 학교에서 누군가에게 장벽이 될 수 있는 곳은 어디일까요?" 학교 곳곳을 떠올리며 장벽을 찾게 한다. 장벽을 없애면 장애인만이 아니라 다친 사람·어르신·유모차·무거운 짐을 든 사람 모두에게 도움이 된다는 점을 짚는다. 3번은 모둠에서 말로 나눈다. 학급의 특정 학생을 예로 들지 않는다.',
            task: '학교 장면에서 장벽을 찾고, 장벽을 없앴을 때 도움받는 사람을 골라요.',
            levels: LV,
            items: [
              MP('학교에서 장벽이 될 수 있는 것만 골라 담아 보세요.', '학교 속 장벽', ['계단만 있는 강당 무대', '소리로만 하는 방송 안내', '좁고 문턱 있는 화장실', '넓고 평평한 복도'], ['계단만 있는 강당 무대', '소리로만 하는 방송 안내', '좁고 문턱 있는 화장실'], 0.25),
              MP('경사로를 설치하면 도움받는 사람만 골라 담아 보세요.', '경사로가 돕는 사람', ['휠체어 쓰는 사람', '다리 다친 친구', '무거운 짐 든 사람', '아무도 없음'], ['휠체어 쓰는 사람', '다리 다친 친구', '무거운 짐 든 사람'], 0.2,
                { conclude: '장벽을 없앤 환경은 장애인만이 아니라 모두에게 편리해요.' }),
              TALK('모둠에서 우리 학교에서 가장 먼저 없애고 싶은 장벽 하나와 방법을 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 이후 길을 걸을 때 무엇이 새로 눈에 띌까요?" 출구 1번에서 "개인이 극복할 일"을 환경 관점에 넣은 학생에게는 원인을 어디서 찾는지 다시 보게 한다. 장벽을 찾는 눈이 장애인식개선의 시작이라는 말로 마무리한다.',
          exit: [
            XS('문장을 두 관점으로 나누어 보세요.', '어디서 원인을 찾나', ['개인만 보는 관점', '환경도 보는 관점'], ['못 들으니 어쩔 수 없어', '혼자 이겨 내야 해', '경사로가 없어서 못 가', '안내가 소리뿐이라 몰라'], { '개인만 보는 관점': ['못 들으니 어쩔 수 없어', '혼자 이겨 내야 해'], '환경도 보는 관점': ['경사로가 없어서 못 가', '안내가 소리뿐이라 몰라'] }),
            XC('장애를 사회적 관점으로 설명한 것은?', ['장애는 개인이 극복해야 할 문제다', '장애는 손상과 환경의 장벽이 만나 생기는 어려움이다', '장애는 노력하면 사라진다'], 1, '환경의 장벽을 없애면 어려움이 줄어든다는 관점이에요.'),
            XT('우리 학교의 장벽 하나와 그것을 없애는 방법을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '장애를 만드는 환경의 장벽',
          items: [
            { type: 'table', prompt: '장벽의 종류별로 예와 없애는 방법을 쓰세요.', columns: ['종류', '예', '없애는 방법'], cells: [['시설', '', ''], ['정보', '', ''], ['태도', '', '']], answer: '계단만 있는 입구·경사로 / 자막 없는 영상·자막과 수어 / "어차피 못 해"·먼저 묻고 함께 정하기' },
            { type: 'choice', prompt: '정보의 장벽에 ○ 하세요.', options: ['높은 창구', '소리로만 하는 방송', '문턱 있는 화장실'], answer: '소리로만 하는 방송' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '장애는 개인의 손상과 환경의 ___이 만날 때 생기는 어려움이다.', answer: '장벽' },
            { type: 'short', prompt: '장벽을 없앤 환경이 모두에게 좋은 까닭을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 장애를 개인의 문제로만 본다 → 같은 사람이 환경에 따라 다른 어려움을 겪는 장면을 비교한다. ② 장벽을 시설로만 생각한다 → 정보·태도의 장벽도 찾게 한다. ③ 학급의 장애 학생을 예로 들거나 주목시키지 않는다 — 장면은 모두 가상이다.',
      }),
      LESSON(2, {
        title: '정당한 편의가 특혜인지 공정한지 판단하기',
        objective: '장애인차별금지법의 정당한 편의 뜻을 설명하고, 학교생활 속 편의 제공이 특혜가 아니라 동등한 참여를 위한 조치임을 상황으로 판단할 수 있다.',
        draw: 'a paper-cut starting line where runners of different abilities begin from fair positions, with a large-print exam paper and a clock',
        banner: '같은 출발선', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"시험에서 어떤 학생은 시간을 더 받는다면 공정할까요?" 대답을 듣고(기다릴 반응: "불공평해요", "이유가 있으면 괜찮아요") 칠판에 두 입장을 적는다. "모두 똑같이 대하는 것이 공정이에요"라는 말에는 "시력이 약한 학생에게 작은 글씨 시험지를 똑같이 주면, 그 시험은 무엇을 재는 걸까요?"라고 되묻는다. 오늘은 정당한 편의의 뜻을 알고 공정함을 다시 생각한다고 밝힌다.',
          student: '"똑같이 대하는 것"과 "공정하게 대하는 것"이 다를 수 있는 가상 장면을 짝과 하나 말해 봅시다.',
          demo: DEMO('편의 제공', ['동등한 참여를 위한 편의', '특별 대우'], ['확대 문제지 제공', '정답을 미리 알려 주기'], { '동등한 참여를 위한 편의': ['확대 문제지 제공'], '특별 대우': ['정답을 미리 알려 주기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 정당한 편의의 뜻과 예 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"정당한 편의는 무엇을 똑같이 만들려는 걸까요?" 장애인차별금지법은 장애인이 장애가 없는 사람과 동등하게 같은 활동에 참여할 수 있도록 하는 시설·도구·서비스 같은 수단과 조치를 정당한 편의라 하고, 정당한 이유 없이 이를 제공하지 않는 것도 차별로 본다는 점을 짚는다. 2번에서 "점수를 더 얹어 주기"를 편의에 넣는 학생에게 "편의는 결과를 바꾸는 걸까요, 참여의 조건을 맞추는 걸까요?"라고 묻는다.',
            task: '장애의 특성과 정당한 편의를 잇고, 편의와 특혜를 구별해요.',
            levels: LV,
            items: [
              MM('필요와 정당한 편의를 이어 보세요. 맞지 않는 카드는 남겨요.', '필요와 편의', [{ id: 'n1', label: '작은 글씨를 읽기 어려워요' }, { id: 'n2', label: '말소리를 듣기 어려워요' }, { id: 'n3', label: '손으로 쓰기 어려워요' }], ['확대 문제지', '수어 통역·문자 안내', '대필·보조기기', '점수 더 얹기'], { n1: '확대 문제지', n2: '수어 통역·문자 안내', n3: '대필·보조기기' }, 0.2),
              MS('조치를 두 가지로 나누어 보세요.', '편의일까 특혜일까', ['참여 조건을 맞추는 편의', '결과를 바꾸는 특혜'], ['시험 시간 연장', '점자 문제지 제공', '문제 수 줄여 주기', '채점 기준 낮추기'], { '참여 조건을 맞추는 편의': ['시험 시간 연장', '점자 문제지 제공'], '결과를 바꾸는 특혜': ['문제 수 줄여 주기', '채점 기준 낮추기'] }, 0.3),
              MP('정당한 편의에 대한 설명으로 맞는 것만 골라 담아 보세요.', '정당한 편의 바로 알기', ['동등한 참여를 위한 조치', '거부하면 차별이 될 수 있음', '장애 특성에 맞게 제공', '원하면 누구에게나 점수 혜택'], ['동등한 참여를 위한 조치', '거부하면 차별이 될 수 있음', '장애 특성에 맞게 제공'], 0.25,
                { conclude: '정당한 편의는 결과를 바꾸는 특혜가 아니라 같은 활동에 동등하게 참여할 조건을 맞추는 조치예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 학교생활 갈림길에서 판단하기', minutes: 15, tool: 'emotion',
            teacher: '"이 반응을 들은 친구는 어떤 마음일까요?" 결과 칸을 읽고 편의를 받는 친구와 반 전체의 입장을 함께 생각하게 한다. 1번에서 "나도 시간 더 달라고 항의한다"를 고른 학생에게 "그 친구의 시간 연장은 무엇을 맞추려는 걸까요?"라고 묻는다. 편의가 필요한 친구의 사정을 캐묻지 않는 것도 존중이라는 점을 짚는다.',
            task: '학교생활 속 편의 제공 장면에서 알맞은 반응을 골라요.',
            levels: LVB,
            items: [
              EB('어떻게 반응할까요?', '시험 시간에 시각장애가 있는 친구 윤이만 시간을 더 받는 것을 보고 몇몇이 불평해요.', [{ id: 'protest', text: '"나도 더 줘야 공평해" 항의해요', result: '윤이가 미안해하며 위축돼요', mood: '속상함', why: '편의는 읽는 데 드는 조건을 맞추는 조치예요.' }, { id: 'explain', text: '"읽는 조건을 맞추는 거야" 말해요', result: '불평이 줄고 윤이가 편해져요', mood: '평온' }], 'explain', 0.2),
              EB('무엇을 할까요?', '모둠 발표 자료를 만드는데 청각장애가 있는 친구 도아가 함께해요.', [{ id: 'skip', text: '도아는 빼고 우리끼리 해요', result: '도아가 소외감을 느껴요', mood: '속상함', why: '빼는 것은 배려가 아니라 배제예요.' }, { id: 'caption', text: '회의는 채팅으로, 영상엔 자막을 달아요', result: '도아도 의견을 내고 발표가 좋아져요', mood: '기쁨' }, { id: 'loud', text: '더 크게 말하면 되겠지 해요', result: '도아가 여전히 못 알아들어요', mood: '걱정', why: '필요한 방식은 본인에게 묻는 것이 먼저예요.' }], 'caption', 0.25),
              EB('어떻게 할까요?', '휠체어를 쓰는 친구 지후가 계단만 있는 과학실로 수업을 옮긴다는 소식을 들어요.', [{ id: 'carry', text: '친구들이 휠체어를 들고 올라가요', result: '위험하고 지후가 불안해해요', mood: '걱정', why: '안전과 지후의 뜻을 먼저 생각해요.' }, { id: 'ask', text: '지후 뜻을 묻고 선생님께 장소 변경을 건의해요', result: '승강기 있는 교실로 수업이 바뀌어요', mood: '안심' }], 'ask', 0.3,
                { conclude: '편의는 본인에게 묻고, 장벽은 학교가 함께 없애야 할 일이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 이후 \'똑같이\'와 \'공정하게\'를 어떻게 구별하겠어요?" 출구 1번에서 점수 혜택을 편의로 넣은 학생에게는 편의는 참여 조건을 맞추는 것이라는 점을 다시 짚는다. 대학수학능력시험에서도 장애 수험생에게 시간 연장·확대 문제지 같은 편의를 제공한다는 점을 덧붙여 말해 준다.',
          exit: [
            XS('조치를 두 가지로 나누어 보세요.', '편의와 특혜', ['정당한 편의', '특혜'], ['확대 문제지', '수어 통역', '정답 미리 알려 주기', '가산점 주기'], { '정당한 편의': ['확대 문제지', '수어 통역'], '특혜': ['정답 미리 알려 주기', '가산점 주기'] }),
            XC('정당한 편의에 대한 설명으로 가장 알맞은 것은?', ['장애인에게 점수를 더 주는 제도', '동등하게 참여할 수 있도록 조건을 맞추는 조치', '원하는 사람 누구나 받는 혜택'], 1, '정당한 편의는 동등한 참여를 위한 조치예요.'),
            XT('"똑같이 대하는 것"과 "공정하게 대하는 것"의 차이를 정당한 편의의 예를 들어 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '정당한 편의는 특혜일까',
          items: [
            { type: 'table', prompt: '필요에 맞는 정당한 편의를 쓰세요.', columns: ['필요', '정당한 편의'], cells: [['작은 글씨를 읽기 어려움', ''], ['말소리를 듣기 어려움', ''], ['계단을 오르기 어려움', '']], answer: '확대 문제지 / 수어 통역·자막 / 승강기·장소 변경' },
            { type: 'choice', prompt: '정당한 편의에 ○ 하세요.', options: ['채점 기준 낮추기', '시험 시간 연장', '문제 수 줄이기'], answer: '시험 시간 연장' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '정당한 편의는 결과를 바꾸는 특혜가 아니라 동등한 ___을 위한 조치이다.', answer: '참여' },
            { type: 'short', prompt: '편의가 필요한 친구를 존중하는 태도 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 똑같이 대하는 것만 공정하다고 여긴다 → 참여 조건을 맞추는 편의와 결과를 바꾸는 특혜를 구별한다. ② 편의가 필요한 친구의 사정을 캐묻는다 → 묻지 않는 존중과 필요한 방식은 본인에게 묻는 원칙을 함께 짚는다. ③ 법률 용어는 "정당한 편의"를 쓰고, 국제 협약의 "합리적 편의"와 같은 취지라는 정도로만 덧붙인다. 장면은 모두 가상이다.',
      }),
    ],
  });
})();
