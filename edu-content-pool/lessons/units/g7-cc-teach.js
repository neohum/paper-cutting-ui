/* 중1 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원지위법 제24조·시행령 제21조(학생 대상 교육활동 침해행위 예방교육 연 1회 이상).
 * 침해행위의 예는 법의 취지(폭행·협박·모욕·명예훼손, 불법 촬영·유포, 정당한 교육활동의 반복적 방해) 범위에서만 들었다. 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 7; const CODE = 'teach';
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
    flow: '중학교에 들어와 처음 받는 교육활동 존중 수업입니다. 교원지위법이 선생님의 교육활동을 보호하는 까닭(모든 학생의 배울 권리를 지키기 위해)을 먼저 짚고, 교육활동 침해행위의 예와 의견을 존중하며 표현하는 행동을 가려냅니다. 질문하기·다른 의견 말하기는 침해가 아니라 배움의 일부라는 점을 함께 강조해, 학생이 "선생님 말에 무조건 따라야 한다"로 오해하지 않게 합니다. 2학년(수업 장면 촬영·유포)과 3학년(불만을 존중하며 전하는 차례) 차시로 이어집니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '침해 행동과 존중 행동을 사례로 가려내기',
        objective: '교원지위법이 교육활동을 보호하는 까닭을 말하고, 교육활동 침해행위의 예와 존중하는 행동을 사례에서 가려낼 수 있다.',
        draw: 'a middle school classroom where students raise hands to ask questions while a teacher smiles at the board',
        banner: '서로 존중하는 교실', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"한 명이 수업 시간 내내 큰 소리로 방해한다면 손해를 보는 사람은 누구일까요?" 두세 명의 대답을 듣고(기다릴 반응: "선생님이요", "공부하려던 친구들이요") 시연으로 행동 카드가 두 칸으로 나뉘는 모습을 보여 준다. "교권은 선생님만을 위한 거예요"라는 말이 나오면 "선생님이 가르칠 수 없으면 누구의 배울 권리가 함께 사라질까요?"라고 되묻는다. 오늘은 법이 교육활동을 보호하는 까닭과 존중하는 행동을 알아본다고 밝힌다.',
          student: '수업 시간에 "이 반은 배우기 좋다"고 느끼게 하는 행동 하나를 떠올려 짝에게 말해 봅시다.',
          demo: DEMO('교실의 행동', ['존중', '침해'], ['손 들고 질문하기', '수업 중 욕설하기'], { '존중': ['손 들고 질문하기'], '침해': ['수업 중 욕설하기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 교육활동 침해행위와 존중 행동 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 행동이 선생님의 가르침과 친구들의 배움을 어떻게 바꿀까요?" 카드를 놓을 때마다 까닭을 한 문장으로 말하게 한다. "선생님 설명에 반대 의견을 말하는 것"을 침해로 두는 학생이 있다 — "예의를 갖춰 근거를 들어 말한다면 수업을 망가뜨리는 걸까요, 더 깊게 만드는 걸까요?"라고 묻는다. 장난이라도 선생님을 모욕하는 말은 침해가 된다는 점을 짚는다.',
            task: '교실 장면 카드를 존중하는 행동과 교육활동 침해행위로 나누고 까닭을 말해요.',
            levels: LV,
            items: [
              MS('수업 시간 행동을 두 가지로 나누어 보세요.', '수업 시간', ['존중하는 행동', '침해 행동'], ['모르는 것을 질문해요', '선생님께 욕설을 해요', '다른 의견을 예의 있게 말해요', '일부러 계속 소리를 질러요'], { '존중하는 행동': ['모르는 것을 질문해요', '다른 의견을 예의 있게 말해요'], '침해 행동': ['선생님께 욕설을 해요', '일부러 계속 소리를 질러요'] }, 0.2),
              MS('온라인과 교실 밖 행동을 두 가지로 나누어 보세요.', '교실 밖', ['존중하는 행동', '침해 행동'], ['선생님을 몰래 찍어 올려요', '수업 자료를 허락받고 써요', '선생님 험담 글을 퍼뜨려요', '궁금한 점을 정중히 물어요'], { '존중하는 행동': ['수업 자료를 허락받고 써요', '궁금한 점을 정중히 물어요'], '침해 행동': ['선생님을 몰래 찍어 올려요', '선생님 험담 글을 퍼뜨려요'] }, 0.25),
              MM('행동과 그것이 해치는 것을 이어 보세요. 맞지 않는 카드는 남겨요.', '무엇을 해칠까', [{ id: 'b1', label: '수업 내내 큰 소리로 방해' }, { id: 'b2', label: '선생님 사진에 놀림 글' }, { id: 'b3', label: '선생님께 위협하는 말' }], ['친구들의 배울 시간', '선생님의 명예', '선생님의 안전', '학교 급식 맛'], { b1: '친구들의 배울 시간', b2: '선생님의 명예', b3: '선생님의 안전' }, 0.3,
                { conclude: '교육활동 침해는 선생님 한 사람만이 아니라 반 전체의 배움을 함께 해쳐요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 법이 교육활동을 보호하는 까닭 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"법으로까지 정해 둔 까닭은 무엇일까요?" 교원지위법은 선생님이 안심하고 가르칠 수 있게 교육활동을 보호하는 법이고, 학교는 해마다 학생에게 예방교육을 한다고 말해 준다. "법이 있으니 학생은 아무 말도 못 해요"라는 오해에는 "질문과 의견은 배움의 일부예요. 법이 막는 것은 폭언·위협·몰래 촬영 같은 행동이에요"라고 바로잡는다. 3번은 짝과 말로만 나눈다.',
            task: '교육활동을 보호하는 까닭을 고르고, 존중하는 교실을 위한 우리 반 행동을 정해요.',
            levels: LV,
            items: [
              MP('교원지위법이 교육활동을 보호하는 까닭에 맞는 카드만 골라 담아 보세요.', '보호하는 까닭', ['모든 학생이 배울 권리를 지켜요', '선생님이 안심하고 가르쳐요', '학생 질문을 막으려고요', '선생님만 편하게 하려고요'], ['모든 학생이 배울 권리를 지켜요', '선생님이 안심하고 가르쳐요'], 0.25),
              MS('의견을 전하는 말을 두 가지로 나누어 보세요.', '의견 전하기', ['존중하는 말', '상처 주는 말'], ['제 생각은 조금 달라요', '설명을 한 번 더 듣고 싶어요', '그걸 수업이라고 해요?', '선생님은 몰라도 돼요'], { '존중하는 말': ['제 생각은 조금 달라요', '설명을 한 번 더 듣고 싶어요'], '상처 주는 말': ['그걸 수업이라고 해요?', '선생님은 몰라도 돼요'] }, 0.3,
                { conclude: '같은 의견이라도 존중하는 말로 전하면 대화가 되고, 깎아내리는 말로 전하면 상처가 돼요.' }),
              TALK('짝과 "우리 반이 서로 존중하는 교실이 되려면 내가 할 행동 하나"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 것 가운데 내일 수업에서 바로 할 수 있는 행동은 무엇인가요?" 출구 1번에서 "질문하기"를 침해로 둔 학생에게는 질문은 배울 권리를 쓰는 일이라고 다시 말해 준다. 선생님이나 친구에게 부당한 일을 겪었다고 느끼면 담임·상담 선생님께 이야기할 수 있다고 덧붙인다.',
          exit: [
            XS('행동 카드를 두 가지로 나누어 보세요.', '존중일까 침해일까', ['존중', '침해'], ['과제 기한을 정중히 물어요', '선생님 목소리를 흉내 내 조롱해요', '수업 중 손을 들고 말해요', '선생님 사진을 합성해 올려요'], { '존중': ['과제 기한을 정중히 물어요', '수업 중 손을 들고 말해요'], '침해': ['선생님 목소리를 흉내 내 조롱해요', '선생님 사진을 합성해 올려요'] }),
            XC('교육활동을 보호하는 일이 학생에게도 중요한 까닭으로 알맞은 것은 무엇인가요?', ['학생은 질문하면 안 되니까', '모든 학생이 방해 없이 배울 수 있으니까', '선생님 말은 늘 옳으니까'], 1, '교육활동이 보호되어야 반 전체가 방해 없이 배울 수 있어요.'),
            XT('선생님과 의견이 다를 때 존중하며 전할 수 있는 말을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '서로 존중하는 교실',
          items: [
            { type: 'table', prompt: '행동이 존중이면 ○, 침해면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['예의 있게 다른 의견 말하기', ''], ['선생님을 몰래 찍어 올리기', ''], ['모르는 것 질문하기', ''], ['일부러 수업 방해하기', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '교원지위법이 막으려는 행동에 ○ 하세요.', options: ['손 들고 질문하기', '선생님께 위협하는 말 하기', '과제 기한 묻기'], answer: '선생님께 위협하는 말 하기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '교육활동을 보호하는 것은 모든 학생의 ___ 권리를 지키는 일이에요.', answer: '배울' },
            { type: 'short', prompt: '"그걸 수업이라고 해요?"를 존중하는 말로 바꾸어 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 교육활동 보호를 "학생은 말하면 안 된다"로 오해한다 → 질문·의견은 배움의 일부이고, 법이 막는 것은 폭언·위협·모욕·몰래 촬영·반복 방해임을 짚는다. ② 장난이면 괜찮다고 여긴다 → 받는 사람에게 모욕이 되는지로 판단하게 한다. ③ 학생 개인의 경험을 털어놓게 하지 않는다 — 부당한 일을 겪었다고 느끼는 학생은 개별로 담임·상담 선생님과 잇는다.',
      }),
    ],
  });
})();
