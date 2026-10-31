/* 고1 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원지위법 제24조·시행령 제21조(학생 대상 교육활동 침해행위 예방교육 연 1회 이상). 권리와 책임을 짝지어 수업 약속을 세운다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 10; const CODE = 'teach';
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
    flow: '고등학교 첫 교육활동 존중 수업으로, 학생의 배울 권리와 선생님의 가르치는 일(교육활동)이 서로 맞서는 것이 아니라 함께 지켜져야 배움이 이뤄진다는 점을 권리와 책임의 짝으로 정리합니다. 수업 장면에서 권리와 그에 따르는 책임을 잇고, 교육활동을 해치는 행동과 존중하는 행동을 가린 뒤, 학급이 함께 지킬 수업 약속을 모둠에서 정합니다. 중학교에서 배운 침해의 예(몰래 촬영·모욕·감정적 항의)를 이어받아, 고1에서는 "내 권리를 말하는 방식이 다른 사람의 권리를 해치지 않게"라는 책임의 눈으로 다시 봅니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '권리와 책임을 짝지어 우리 반 수업 약속 세우기',
        objective: '학생의 배울 권리와 선생님의 교육활동이 함께 지켜지려면 어떤 책임이 따르는지 짝지어 설명하고, 교육활동을 존중하는 수업 약속을 정할 수 있다.',
        draw: 'a classroom with paper-cut desks, a teacher at a board and students raising hands, with a balance scale floating above',
        banner: '권리와 책임의 짝', extra: [{ motif: 'star', x: 320, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"수업 시간에 학생에게 있는 권리를 하나만 말해 볼까요?" 대답을 듣고(기다릴 반응: "질문할 권리요", "쉬는 시간요", "휴대폰 쓸 권리요") 칠판에 적는다. "권리가 있으면 마음대로 해도 될까요?"라고 되묻고, 권리를 쓰는 방식이 다른 사람의 배울 권리와 선생님의 가르치는 일을 해치면 그것은 권리가 아니라 침해가 될 수 있다고 짚는다. 시연으로 행동 카드를 나누고 오늘은 권리와 책임을 짝지어 우리 반 약속을 세운다고 밝힌다.',
          student: '수업 시간에 학생으로서 누리고 싶은 권리 하나와 그것을 지키려면 내가 해야 할 일 하나를 짝에게 말해 봅시다.',
          demo: DEMO('수업 시간의 행동', ['존중하는 행동', '해치는 행동'], ['손을 들고 질문해요', '수업 중 계속 떠들어요'], { '존중하는 행동': ['손을 들고 질문해요'], '해치는 행동': ['수업 중 계속 떠들어요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 권리와 그에 따르는 책임 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 권리를 모두가 누리려면 나는 무엇을 해야 할까요?" 권리 카드마다 그 권리를 모든 학생이 함께 누리기 위한 책임을 찾게 한다. 1번에서 "질문할 권리"를 "아무 때나 끼어들기"와 잇는 학생에게 "모두가 동시에 끼어들면 누가 질문할 수 있을까요?"라고 묻는다. 3번에서 "선생님도 학생을 존중해야 한다"는 말이 나오면 맞다고 받아 주고, 존중은 한쪽만의 의무가 아니라 서로의 약속이라는 점을 함께 적는다.',
            task: '수업 시간의 권리와 그것을 함께 누리기 위한 책임을 이어요.',
            levels: LV,
            items: [
              MM('권리와 그 권리를 함께 누리기 위한 책임을 이어 보세요. 맞지 않는 카드는 남겨요.', '권리와 책임', [{ id: 'r1', label: '질문하고 의견을 말할 권리' }, { id: 'r2', label: '조용히 배울 권리' }, { id: 'r3', label: '평가 결과를 물을 권리' }], ['차례를 지켜 손 들고 말하기', '수업 중 잡담 줄이기', '근거를 들어 정중히 묻기', '큰 소리로 먼저 말하기'], { r1: '차례를 지켜 손 들고 말하기', r2: '수업 중 잡담 줄이기', r3: '근거를 들어 정중히 묻기' }, 0.2),
              MS('수업 장면의 행동을 두 가지로 나누어 보세요.', '교육활동을 대하는 행동', ['존중하는 행동', '해치는 행동'], ['모둠 활동에 참여해요', '지도에 이유를 여쭤요', '선생님 말투를 흉내 내 조롱해요', '지적받자 욕설을 해요'], { '존중하는 행동': ['모둠 활동에 참여해요', '지도에 이유를 여쭤요'], '해치는 행동': ['선생님 말투를 흉내 내 조롱해요', '지적받자 욕설을 해요'] }, 0.25),
              MP('학생과 선생님이 함께 지킬 약속으로 알맞은 것만 골라 담아 보세요.', '서로 존중하는 교실', ['서로 존댓말로 대화해요', '수업 시작을 함께 지켜요', '불만은 수업 뒤 이야기해요', '듣기 싫으면 이어폰을 껴요'], ['서로 존댓말로 대화해요', '수업 시작을 함께 지켜요', '불만은 수업 뒤 이야기해요'], 0.25,
                { conclude: '권리는 다른 사람의 권리를 해치지 않는 방식으로 쓸 때 모두의 것이 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 교육활동 침해가 되는 까닭 짚고 약속 정하기', minutes: 13, tool: 'mindmap',
            teacher: '"농담이었다면 괜찮은 걸까요?" 의도보다 그 행동이 수업과 사람에게 남긴 결과를 보게 한다. 교원지위법은 학생 대상 교육활동 침해 예방교육을 해마다 하도록 정하고 있으며, 모욕·명예훼손이나 정당한 교육활동을 반복해 방해하는 행동은 침해가 될 수 있다고 짚는다. 처벌을 겁주기보다 "모두의 수업 시간을 지키는 일"이라는 데 초점을 둔다. 3번은 모둠에서 말로 나눈다.',
            task: '행동이 수업과 사람에게 남기는 결과를 잇고, 우리 반 수업 약속을 정해요.',
            levels: LV,
            items: [
              MM('행동과 그것이 남기는 결과를 이어 보세요. 맞지 않는 카드는 남겨요.', '행동이 남기는 것', [{ id: 'x1', label: '수업 중 계속 소리 내 방해하기' }, { id: 'x2', label: '선생님을 깎아내리는 별명 퍼뜨리기' }, { id: 'x3', label: '정당한 지도에 고성으로 맞서기' }], ['반 전체의 배울 시간이 줄어요', '사람의 명예와 마음이 다쳐요', '지도가 멈추고 교실이 위축돼요', '아무 영향도 없어요'], { x1: '반 전체의 배울 시간이 줄어요', x2: '사람의 명예와 마음이 다쳐요', x3: '지도가 멈추고 교실이 위축돼요' }, 0.3),
              MS('오해와 사실로 나누어 보세요.', '교육활동 존중의 오해와 사실', ['오해', '사실'], ['농담이면 침해가 아니에요', '학생 권리와 맞서요', '모두의 배움을 지켜요', '서로의 존중이 기본이에요'], { '오해': ['농담이면 침해가 아니에요', '학생 권리와 맞서요'], '사실': ['모두의 배움을 지켜요', '서로의 존중이 기본이에요'] }, 0.3,
                { conclude: '교육활동 존중은 학생의 권리를 줄이는 것이 아니라 모두가 배울 수 있는 교실을 지키는 일이에요.' }),
              TALK('모둠에서 "권리 하나 + 책임 하나"로 된 우리 반 수업 약속을 한 문장으로 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 정한 약속 가운데 내일 수업에서 바로 지킬 수 있는 것은 무엇인가요?" 출구 1번에서 조롱을 "존중"에 넣은 학생에게는 웃자고 한 흉내라도 듣는 사람이 모욕을 느끼고 수업이 멈출 수 있다고 다시 짚는다. 학생도 존중받지 못했다고 느끼면 담임·상담 선생님께 도움을 청할 수 있다고 덧붙인다.',
          exit: [
            XS('행동 카드를 두 가지로 나누어 보세요.', '존중일까 침해일까', ['존중', '침해'], ['궁금한 점을 손 들고 물어요', '선생님 사진에 낙서해 올려요', '모둠 역할을 끝까지 해요', '지도에 책상을 치며 맞서요'], { '존중': ['궁금한 점을 손 들고 물어요', '모둠 역할을 끝까지 해요'], '침해': ['선생님 사진에 낙서해 올려요', '지도에 책상을 치며 맞서요'] }),
            XC('권리와 책임의 관계로 가장 알맞은 것은 무엇인가요?', ['권리가 있으면 책임은 없다', '권리는 다른 사람의 권리를 해치지 않게 쓸 때 지켜진다', '책임은 선생님에게만 있다'], 1, '권리를 모두가 누리려면 그 권리를 쓰는 방식에 책임이 따라요.'),
            XT('오늘 세운 수업 약속을 "나는 ~할 권리가 있고, 그래서 ~하겠다"의 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '권리와 책임으로 세우는 수업 약속',
          items: [
            { type: 'table', prompt: '권리와 그에 따르는 책임을 쓰세요.', columns: ['권리', '책임'], cells: [['질문할 권리', ''], ['조용히 배울 권리', ''], ['평가 결과를 물을 권리', '']], answer: '차례 지켜 손 들기 / 잡담 줄이기 / 근거를 들어 정중히 묻기' },
            { type: 'choice', prompt: '교육활동 침해가 될 수 있는 행동에 ○ 하세요.', options: ['수업 뒤 질문하기', '선생님을 깎아내리는 별명 퍼뜨리기', '모둠 활동 참여하기'], answer: '선생님을 깎아내리는 별명 퍼뜨리기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '권리는 다른 사람의 ___를 해치지 않는 방식으로 쓸 때 모두의 것이 된다.', answer: '권리' },
            { type: 'short', prompt: '우리 반이 함께 지킬 수업 약속을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 교육활동 존중을 학생 권리를 줄이는 것으로 본다 → 권리와 책임이 짝을 이룬다는 점을 활동 1로 보여 준다. ② "농담이었다"를 면책으로 여긴다 → 의도가 아니라 남긴 결과를 보게 한다. ③ 실제 교사·학생을 떠올리게 하지 않는다 — 장면은 모두 가상이다. 침해행위의 구체 조치·처분 절차는 학교 안내에 따른다.',
      }),
    ],
  });
})();
