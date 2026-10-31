/* 중3 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간.
 * 혐오 표현은 "출신·피부색·언어 같은 속성을 이유로 집단을 비하·위협하거나 차별을 부추기는 표현"이라는 일반적 뜻으로만 쓰고, 특정 국가·정당·실존 인물·실제 사건은 쓰지 않는다(정치적 중립). 장면·인물은 가명. */
(function () {
  const G = 9; const CODE = 'multi';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '다문화 이해';
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
    { motif: 'house', x: 96, y: 214, color: 'lavender', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '중학교 다문화 이해의 마무리로, 세계시민으로서 혐오에 대응하는 힘을 기릅니다. 1차시에는 출신·피부색·언어를 이유로 집단을 깎아내리는 혐오 표현과, 제도나 행동에 대해 근거를 들어 말하는 정당한 의견을 구별합니다. 2차시에는 온라인·오프라인에서 혐오 표현을 만났을 때 퍼뜨리지 않기 → 기록하기 → 신고하기 → 대상이 된 사람 곁에 서기의 차례를 익힙니다. 1·2학년(고정관념·편견·차별, 의도와 영향, 문화와 인권)을 "말과 행동으로 지키는 공존"으로 묶습니다. 학교폭력 예방(g9-cc-bully 1차시 비하 표현)과 함께 읽으면 좋습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '혐오 표현과 정당한 의견 구별하기',
        objective: '출신·피부색·언어를 이유로 집단을 비하하는 혐오 표현과 근거를 갖춘 정당한 의견을 구별하고, 혐오 표현이 남기는 해악을 말할 수 있다.',
        draw: 'two paper speech bubbles, one jagged and dark crossed out, one round and bright with a balance scale inside, students comparing them',
        banner: '의견과 혐오는 달라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"\'표현의 자유\'가 있으니 어떤 말이든 해도 될까요?" 대답을 듣고(기다릴 반응: "네, 자유니까요", "남을 해치면 안 돼요") 시연으로 말 카드를 나눈다. "싫은 걸 싫다고 하는 것도 안 돼요?"라는 말이 나오면 "행동을 비판하는 것과 사람이 태어난 곳 자체를 깎아내리는 것은 같을까요?"라고 되묻는다. 오늘은 의견과 혐오 표현을 가르는 기준을 찾는다고 밝힌다.',
          student: '어떤 일에 반대 의견을 말하면서도 상대를 존중한 가상의 예를 하나 들어 짝에게 말해 봅시다.',
          demo: DEMO('말 가려내기', ['정당한 의견', '혐오 표현'], ['이 제도는 보완이 필요해', '그 나라 출신은 다 위험해'], { '정당한 의견': ['이 제도는 보완이 필요해'], '혐오 표현': ['그 나라 출신은 다 위험해'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 혐오 표현을 가르는 기준 찾기', minutes: 14, tool: 'mindmap',
            teacher: '"이 말은 무엇을 겨냥하나요? 바꿀 수 있는 행동인가요, 바꿀 수 없는 속성인가요?" 혐오 표현은 출신·피부색·언어처럼 바꿀 수 없거나 바꾸기 어려운 속성을 이유로 집단 전체를 비하·위협하거나 차별을 부추긴다는 점을 짚는다. 정당한 의견은 구체적 행동·제도를 겨냥하고 근거가 있다는 점을 말해 준다. "농담 계정이 올린 밈이에요"라는 말에는 형식이 아니라 내용이 기준이라고 바로잡는다.',
            task: '말 카드를 정당한 의견과 혐오 표현으로 나누고, 가르는 기준을 찾아요.',
            levels: LV,
            items: [
              MS('말을 두 가지로 나누어 보세요.', '의견일까 혐오일까', ['정당한 의견', '혐오 표현'], ['통역 지원이 더 필요해요', '그 피부색은 더러워', '규칙을 어긴 행동은 잘못이야', '그 나라 사람은 쫓아내야 해'], { '정당한 의견': ['통역 지원이 더 필요해요', '규칙을 어긴 행동은 잘못이야'], '혐오 표현': ['그 피부색은 더러워', '그 나라 사람은 쫓아내야 해'] }, 0.2),
              MP('혐오 표현을 가르는 기준에 맞는 카드만 골라 담아 보세요.', '혐오 표현의 기준', ['바꿀 수 없는 속성을 겨냥해요', '집단 전체를 깎아내려요', '구체적 행동을 근거로 비판해요', '해결 방법을 제안해요'], ['바꿀 수 없는 속성을 겨냥해요', '집단 전체를 깎아내려요'], 0.25),
              MM('혐오 표현의 모습과 예를 이어 보세요. 맞지 않는 카드는 남겨요.', '혐오 표현의 모습', [{ id: 'h1', label: '비하하기' }, { id: 'h2', label: '위협하기' }, { id: 'h3', label: '차별 부추기기' }], ['그 말투는 벌레 같아', '동네에서 사라지지 않으면 각오해', '그 출신은 뽑지 마세요', '모둠 발표를 잘했어'], { h1: '그 말투는 벌레 같아', h2: '동네에서 사라지지 않으면 각오해', h3: '그 출신은 뽑지 마세요' }, 0.3,
                { conclude: '정당한 의견은 행동·제도를 근거로 말하고, 혐오 표현은 바꿀 수 없는 속성으로 집단 전체를 겨냥해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 혐오 표현이 남기는 것', minutes: 13, tool: 'mindmap',
            teacher: '"혐오 표현 한 줄은 누구에게 무엇을 남길까요?" 대상이 된 사람의 두려움과 위축, 지켜보는 사람의 무감각, 공동체의 갈라짐까지 이어진다는 점을 짚는다. 표현의 자유는 소중하지만 다른 사람의 존엄과 안전을 해치는 말까지 보호하는 것은 아니라는 점을 말해 준다. 3번은 모둠에서 말로 나눈다.',
            task: '혐오 표현이 개인과 공동체에 남기는 해악을 찾고, 표현의 자유와 함께 생각해요.',
            levels: LV,
            items: [
              MS('혐오 표현이 남기는 것을 나누어 보세요.', '남기는 것', ['대상이 된 사람에게', '공동체에게'], ['밖에 나가기가 두려워요', '자기 출신을 숨기게 돼요', '서로 믿지 못하고 갈라져요', '혐오가 익숙해져요'], { '대상이 된 사람에게': ['밖에 나가기가 두려워요', '자기 출신을 숨기게 돼요'], '공동체에게': ['서로 믿지 못하고 갈라져요', '혐오가 익숙해져요'] }, 0.25),
              MM('생각과 바로잡는 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '생각 바로잡기', [{ id: 'f1', label: '표현의 자유니까 괜찮아' }, { id: 'f2', label: '말뿐인데 무슨 피해야' }, { id: 'f3', label: '다들 그렇게 말해' }], ['남의 존엄까지 해칠 자유는 없어', '말이 차별 행동으로 이어져', '많다고 옳은 건 아니야', '그럼 나도 해도 돼'], { f1: '남의 존엄까지 해칠 자유는 없어', f2: '말이 차별 행동으로 이어져', f3: '많다고 옳은 건 아니야' }, 0.3,
                { conclude: '혐오 표현은 "말뿐"이 아니에요. 사람을 위축시키고 공동체를 갈라 차별 행동의 바탕이 돼요.' }),
              TALK('모둠에서 "표현의 자유와 혐오 표현 사이의 선"을 우리 말로 한 문장 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 찾은 기준 가운데 가장 쓸모 있을 것 같은 하나는 무엇인가요?" 출구 1번에서 행동 비판을 혐오로 둔 학생에게는 구체적 행동을 근거로 말하는 비판은 정당한 의견이라는 점을 다시 짚는다. 다음 시간에는 혐오 표현을 만났을 때의 행동을 연습한다고 예고한다.',
          exit: [
            XS('말 카드를 나누어 보세요.', '의견일까 혐오일까', ['정당한 의견', '혐오 표현'], ['안내문을 여러 언어로 써 주세요', '그 언어 쓰는 사람은 다 시끄러워', '쓰레기 무단 투기는 잘못이에요', '그 출신과는 상대하지 마'], { '정당한 의견': ['안내문을 여러 언어로 써 주세요', '쓰레기 무단 투기는 잘못이에요'], '혐오 표현': ['그 언어 쓰는 사람은 다 시끄러워', '그 출신과는 상대하지 마'] }),
            XC('혐오 표현을 정당한 의견과 가르는 기준으로 알맞은 것은 무엇인가요?', ['말투가 공손한지', '바꿀 수 없는 속성으로 집단 전체를 겨냥하는지', '글이 짧은지'], 1, '혐오 표현은 출신·피부색 같은 속성으로 집단 전체를 깎아내려요.'),
            XT('"표현의 자유니까 괜찮아"라는 말에 답하는 글을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '의견과 혐오 표현',
          items: [
            { type: 'table', prompt: '말이 정당한 의견이면 ○, 혐오 표현이면 ×를 쓰세요.', columns: ['말', '○ / ×'], cells: [['통역 지원이 더 필요하다', ''], ['그 피부색은 더럽다', ''], ['규칙을 어긴 행동은 잘못이다', ''], ['그 출신은 뽑지 마라', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '혐오 표현의 모습이 아닌 것에 ○ 하세요.', options: ['비하하기', '위협하기', '근거를 들어 제도 비판하기'], answer: '근거를 들어 제도 비판하기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '혐오 표현은 바꿀 수 없는 ___을 이유로 집단 전체를 깎아내려요.', answer: '속성' },
            { type: 'short', prompt: '혐오 표현이 공동체에 남기는 해악을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 모든 비판을 혐오로, 또는 모든 혐오를 의견으로 본다 → 겨냥하는 대상(행동·제도인가, 속성인가)과 범위(집단 전체인가)로 가르게 한다. ② 표현의 자유를 무제한으로 이해한다 → 다른 사람의 존엄과 안전을 해치는 말은 보호의 대상이 아님을 짚는다. ③ 실존 정당·인물·국가·사건은 예로 들지 않는다(정치적 중립).',
      }),

      LESSON(2, {
        title: '혐오 표현을 만났을 때의 대응 차례 익히기',
        objective: '온라인·오프라인에서 혐오 표현을 만났을 때 퍼뜨리지 않고, 기록·신고하며, 대상이 된 사람 곁에 서는 차례를 정할 수 있다.',
        draw: 'a paper smartphone with a report button, a hand stopping a share arrow, and two students standing side by side with a classmate',
        banner: '멈추고, 알리고, 곁에 서요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'lavender' }],
        intro: {
          teacher: '"혐오 댓글에 화가 나서 똑같이 욕으로 답하면 상황이 나아질까요?" 대답을 듣고(기다릴 반응: "더 싸움이 커져요", "속은 시원해요") 시연으로 행동 카드를 나눈다. "모른 척하는 게 제일 안전해요"라는 말이 나오면 "대상이 된 사람은 그 침묵을 어떻게 느낄까요?"라고 되묻는다. 오늘은 혐오 표현에 대응하는 차례를 세운다고 밝힌다.',
          student: '누군가 혐오 표현을 들었을 때 곁에서 해 줄 수 있는 작은 행동 하나를 짝에게 말해 봅시다.',
          demo: DEMO('대응하기', ['도움이 돼요', '키워요'], ['신고하기', '퍼 나르기'], { '도움이 돼요': ['신고하기'], '키워요': ['퍼 나르기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 대응 차례 세우기', minutes: 14, tool: 'story',
            teacher: '"왜 \'퍼뜨리지 않기\'가 맨 앞일까요?" 화가 나서 공유하는 것도 혐오를 더 멀리 보내는 일이라는 점을 짚는다. 기록(캡처)은 신고와 도움을 위한 것이지 다른 곳에 퍼뜨리기 위한 것이 아니라고 말해 준다. 직접 맞서기 위험한 상황에서는 혼자 대응하지 않고 어른·플랫폼 신고 기능을 쓴다는 점을 강조한다.',
            task: '혐오 표현을 만났을 때의 대응 카드를 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('SNS 댓글에서 혐오 표현을 봤을 때의 차례로 카드를 놓아 보세요.', '댓글에서 만났을 때', ['처음', '다음', '그다음', '끝'], [C('stop', '공유·반응하지 않아요', 'leaf'), C('save', '신고용으로 기록해요', 'star'), C('report', '신고 기능을 눌러요', 'house'), C('care', '대상에게 응원 댓글', 'flower')], ['stop', 'save', 'report', 'care'], 0.2),
              SO('단톡방에 특정 출신을 비하하는 밈이 올라왔을 때의 차례로 카드를 놓아 보세요.', '단톡방에서 만났을 때', ['처음', '다음', '끝'], [C('nolike', '웃음 반응을 하지 않아요', 'leaf'), C('say', '"이건 아니야" 짧게 말해요', 'sun'), C('tell', '계속되면 선생님께 알려요', 'house')], ['nolike', 'say', 'tell'], 0.25),
              SO('길에서 친구가 출신 때문에 모욕당하는 장면의 차례로 카드를 놓아 보세요.', '길에서 만났을 때', ['처음', '다음', '그다음', '끝'], [C('safe', '내 안전부터 살펴요', 'leaf'), C('stand', '친구 곁으로 가요', 'flower'), C('leave', '함께 그 자리를 떠나요', 'sun'), C('adult', '어른·112에 알려요', 'house')], ['safe', 'stand', 'leave', 'adult'], 0.3,
                { conclude: '멈추기 → 기록·신고 → 곁에 서기. 혼자 맞서기보다 안전하게, 함께 대응해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 곁에 서는 말과 행동 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"대상이 된 친구에게 무슨 말을 건네면 힘이 될까요?" "네 잘못이 아니야", "나는 네 편이야"처럼 짧은 말이 큰 힘이 된다는 점을 짚는다. "그냥 신경 쓰지 마"는 위로처럼 보여도 상처를 가볍게 만들 수 있다고 말해 준다. 3번은 모둠에서 말로 나눈다.',
            task: '혐오 표현의 대상이 된 사람 곁에 서는 말과 행동을 고르고, 우리 반 약속을 정해요.',
            levels: LV,
            items: [
              MS('친구에게 건네는 말을 두 가지로 나누어 보세요.', '곁에 서는 말', ['힘이 되는 말', '아쉬운 말'], ['네 잘못이 아니야', '나는 네 편이야', '그냥 신경 쓰지 마', '너도 좀 조심하지 그랬어'], { '힘이 되는 말': ['네 잘못이 아니야', '나는 네 편이야'], '아쉬운 말': ['그냥 신경 쓰지 마', '너도 좀 조심하지 그랬어'] }, 0.2),
              MP('세계시민으로서 할 수 있는 행동만 골라 담아 보세요.', '세계시민의 행동', ['혐오 게시물을 신고해요', '다양한 출처로 사실을 확인해요', '화나서 똑같이 욕해요', '재밌으면 일단 공유해요'], ['혐오 게시물을 신고해요', '다양한 출처로 사실을 확인해요'], 0.3,
                { conclude: '세계시민은 거창한 사람이 아니라 퍼뜨리지 않고, 확인하고, 곁에 서는 사람이에요.' }),
              TALK('모둠에서 "혐오 표현을 만났을 때 우리 반이 함께 할 행동 약속" 한 문장을 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"고등학교에 가서도 가져갈 대응 차례를 한 줄로 말해 볼까요?" 1학년(고정관념·편견·차별), 2학년(의도와 영향, 문화와 인권), 3학년(혐오에 대응하기)을 차례로 떠올리게 한다. 출구 1번에서 똑같이 맞받아치기를 고른 학생에게는 안전과 확산을 함께 생각하게 한다.',
          exit: [
            XB('게임 채팅에서 누군가 팀원 출신을 비하하는 말을 계속해요. 어떻게 할까요?', '온라인 게임 중, 한 사람이 팀원의 출신을 비하하는 채팅을 되풀이해요.', [
              { id: 'fight', text: '똑같이 욕으로 맞받아쳐요', why: '맞받아치면 싸움과 혐오가 더 커져요.' },
              { id: 'report', text: '채팅을 기록하고 신고한 뒤 팀원에게 괜찮냐고 물어요' },
              { id: 'leave', text: '말없이 게임을 끄고 잊어요', why: '신고와 응원으로 대상이 된 사람을 도울 수 있어요.' }], 'report'),
            XC('혐오 표현을 기록(캡처)하는 목적으로 알맞은 것은 무엇인가요?', ['다른 곳에 퍼뜨리려고', '신고와 도움 요청의 근거로 쓰려고', '나중에 놀리려고'], 1, '기록은 신고와 도움을 위한 것이고 퍼뜨리면 안 돼요.'),
            XT('혐오 표현의 대상이 된 친구에게 건넬 말을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '혐오에 맞서는 세계시민',
          items: [
            { type: 'table', prompt: '온라인에서 혐오 표현을 만났을 때의 차례를 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '공유·반응하지 않기, 기록하기, 신고하기, 대상에게 응원하기' },
            { type: 'choice', prompt: '힘이 되는 말에 ○ 하세요.', options: ['그냥 신경 쓰지 마', '네 잘못이 아니야', '너도 조심했어야지'], answer: '네 잘못이 아니야' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '혐오 게시물은 화가 나도 ___하지 않아요.', answer: '공유' },
            { type: 'short', prompt: '중학교 3년 동안 배운 다문화 이해 가운데 고등학교에 가져갈 다짐을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 맞받아치기를 정의로운 대응으로 여긴다 → 확산과 안전을 함께 생각하게 한다. ② 캡처해서 공유하는 것을 고발로 여긴다 → 기록은 신고·도움용이고 퍼뜨리면 2차 피해가 된다는 점을 짚는다. ③ 위험한 오프라인 상황에서는 혼자 맞서지 않고 자리를 떠나 어른·112에 알린다.',
      }),
    ],
  });
})();
