/* 고2 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원지위법 제24조·시행령 제21조(학생 대상 교육활동 침해행위 예방교육 연 1회 이상). 또래가 교육활동 침해를 목격했을 때 할 수 있는 행동을 다룬다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 11; const CODE = 'teach';
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
    flow: '고2 교육활동 존중 수업은 "내가 하지 않는 것"을 넘어 "옆에서 보았을 때 할 수 있는 것"을 다룹니다. 친구가 선생님을 모욕하거나 수업을 반복해 방해하는 가상 장면에서 웃음·동조·영상 공유처럼 침해를 키우는 반응과, 동조하지 않기·분위기 돌리기·뒤에서 말 건네기·어른에게 알리기처럼 침해를 줄이는 반응을 갈림길로 비교합니다. 고1에서 세운 권리와 책임의 약속을 또래 문화로 넓히는 차시이며, 친구를 고발하는 것이 아니라 친구와 교실을 함께 지키는 일이라는 점을 강조합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '교육활동 침해를 보았을 때 또래로서 할 행동 고르기',
        objective: '친구가 선생님을 모욕하거나 수업을 반복해 방해하는 장면에서 침해를 키우는 반응과 줄이는 반응을 구별하고, 또래로서 할 수 있는 행동을 고를 수 있다.',
        draw: 'a classroom scene where one student stands up to calm a noisy group while classmates look on, paper-cut speech bubbles around them',
        banner: '옆에서 함께 지켜요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"친구가 수업 중에 선생님께 무례한 말을 했는데 반 친구들이 웃었다면, 웃은 친구들은 아무 책임이 없을까요?" 대답을 듣고(기다릴 반응: "웃기만 했는데요", "분위기 때문에요") 웃음과 박수가 그 행동을 더 키우는 무대가 될 수 있다고 짚는다. "괜히 나섰다가 저만 찍혀요"라는 걱정이 나오면 맞는 걱정이라고 받아 주고, 크게 나서지 않아도 할 수 있는 작은 행동이 많다는 것을 오늘 찾아본다고 밝힌다.',
          student: '수업 분위기가 흐트러졌을 때 친구 한 명의 행동으로 분위기가 바뀐 가상 장면을 짝과 하나 떠올려 말해 봅시다.',
          demo: DEMO('옆 사람의 반응', ['침해를 키움', '침해를 줄임'], ['함께 웃으며 박수쳐요', '웃지 않고 수업에 집중해요'], { '침해를 키움': ['함께 웃으며 박수쳐요'], '침해를 줄임': ['웃지 않고 수업에 집중해요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 갈림길에서 또래의 행동 고르기', minutes: 15, tool: 'emotion',
            teacher: '"이 보기를 고르면 교실은 어떻게 될까요?" 결과 칸을 읽고 그 행동이 친구·선생님·반 전체에 남기는 것을 말하게 한다. 1번에서 "영상을 찍어 둔다"를 고른 학생에게 "증거가 필요하면 어른에게 알리면 돼요. 찍은 영상이 퍼지면 누가 더 다칠까요?"라고 묻는다. 3번에서 친구에게 직접 따지는 보기를 고르면, 그 자리에서 맞서기보다 나중에 따로 말을 건네는 쪽이 친구의 체면도 지킨다는 점을 짚는다.',
            task: '교육활동 침해 장면에서 또래로서 할 수 있는 가장 알맞은 행동을 골라요.',
            levels: LVB,
            items: [
              EB('어떻게 하면 좋을까요?', '수업 중 준이가 선생님 말을 따라 하며 비웃자 몇몇이 웃어요.', [{ id: 'film', text: '재밌어서 영상으로 찍어요', result: '영상이 퍼져 일이 더 커져요', mood: '걱정', why: '찍은 영상은 선생님과 준이 모두를 더 다치게 할 수 있어요.' }, { id: 'calm', text: '웃지 않고 수업에 집중해요', result: '웃음이 잦아들고 수업이 이어져요', mood: '평온' }, { id: 'laugh', text: '분위기 맞추려 같이 웃어요', result: '준이가 더 크게 따라 해요', mood: '속상함', why: '웃음은 그 행동을 계속하게 만드는 무대가 돼요.' }], 'calm', 0.2),
              EB('어떻게 하면 좋을까요?', '쉬는 시간 단톡방에 선생님을 깎아내리는 합성 사진이 올라와요.', [{ id: 'share', text: '다른 방에도 옮겨 올려요', result: '사진이 학교 밖까지 퍼져요', mood: '걱정', why: '옮기는 순간 나도 퍼뜨린 사람이 돼요.' }, { id: 'stop', text: '"이건 좀 아니야" 쓰고 담임께 알려요', result: '사진이 지워지고 일이 멈춰요', mood: '안심' }, { id: 'ignore', text: '못 본 척 대화방을 닫아요', result: '사진이 계속 남아 퍼져요', mood: '걱정', why: '보고도 아무 말 하지 않으면 사진은 계속 퍼질 수 있어요.' }], 'stop', 0.25),
              EB('어떻게 하면 좋을까요?', '모둠 친구 소이가 지도를 받자 책상을 치며 소리쳐요.', [{ id: 'fight', text: '그 자리에서 소이에게 따져요', result: '말다툼이 번져 수업이 멈춰요', mood: '화남', why: '모두 앞에서 맞서면 소이의 마음이 더 닫힐 수 있어요.' }, { id: 'later', text: '수업 뒤 소이 마음을 물어요', result: '소이가 속상했던 까닭을 말해요', mood: '고마움' }, { id: 'cheer', text: '"멋있다" 하고 맞장구쳐요', result: '소이가 같은 행동을 또 해요', mood: '걱정', why: '맞장구는 그 행동이 괜찮다는 신호가 돼요.' }], 'later', 0.3),
              EB('어떻게 하면 좋을까요?', '한 친구가 매 수업 일부러 큰 소리를 내 수업을 끊어요.', [{ id: 'tell', text: '반 대표와 담임께 상황을 알려요', result: '학급이 함께 해결 방법을 찾아요', mood: '안심' }, { id: 'copy', text: '나도 덩달아 소리를 내요', result: '수업이 아예 멈춰요', mood: '걱정', why: '덩달아 하면 침해가 반 전체로 커져요.' }, { id: 'post', text: '익명 계정에 그 친구 욕을 써요', result: '새로운 다툼이 생겨요', mood: '속상함', why: '익명 비난은 또 다른 상처를 만들어요.' }], 'tell', 0.3,
                { conclude: '침해를 줄이는 또래의 행동은 동조하지 않기, 나중에 말 건네기, 믿을 만한 어른에게 알리기예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 침해를 키우는 반응과 줄이는 반응 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"크게 나서지 않아도 할 수 있는 일은 무엇일까요?" 반응 카드를 나누며 "용기 있는 행동"이 꼭 큰 소리로 맞서는 것만은 아니라는 점을 짚는다. 알리는 것이 고자질이 아니라 친구가 더 큰 잘못으로 가지 않게 막는 일이라는 점을 강조한다. 3번은 모둠에서 말로 나눈다.',
            task: '교육활동 침해 장면에서 옆 사람의 반응을 나누고, 또래로서 쓸 말을 골라요.',
            levels: LV,
            items: [
              MS('옆 사람의 반응을 두 가지로 나누어 보세요.', '옆 사람의 반응', ['침해를 키움', '침해를 줄임'], ['비웃는 영상을 공유해요', '조롱에 "좋아요"를 눌러요', '대화 주제를 바꿔요', '담임께 상황을 알려요'], { '침해를 키움': ['비웃는 영상을 공유해요', '조롱에 "좋아요"를 눌러요'], '침해를 줄임': ['대화 주제를 바꿔요', '담임께 상황을 알려요'] }, 0.2),
              MP('침해한 친구에게 나중에 건넬 말로 알맞은 것만 골라 담아 보세요.', '친구에게 건네는 말', ['아까 많이 속상했어?', '선생님께 같이 말씀드릴까?', '너 진짜 문제 있다', '다음엔 더 세게 해'], ['아까 많이 속상했어?', '선생님께 같이 말씀드릴까?'], 0.25),
              TALK('모둠에서 "교육활동 침해를 보았을 때 우리 반이 할 일" 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 고른 행동 가운데 가장 해 보기 쉬운 것은 무엇인가요?" 출구 1번에서 "같이 웃기"를 "줄임"에 넣은 학생에게는 웃음이 그 행동의 무대가 된다는 점을 다시 말해 준다. "직접 알리기가 어렵다면 상담 선생님께 먼저 털어놓아도 괜찮아요"라고 말해 준다.',
          exit: [
            XB('친구에게 무엇을 할까요?', '수업 중 선생님을 몰래 찍는 친구를 보았어요.', [{ id: 'alert', text: '찍지 말자 말하고 어른께 알려요', result: '촬영이 멈추고 영상이 지워져요', mood: '안심' }, { id: 'watch', text: '나중에 영상을 보여 달라 해요', result: '영상이 퍼질 준비가 돼요', mood: '걱정', why: '보여 달라는 것도 촬영을 부추겨요.' }], 'alert'),
            XC('교육활동 침해를 본 또래의 행동으로 가장 알맞은 것은?', ['재미있으니 함께 웃는다', '동조하지 않고 필요하면 어른에게 알린다', '내 일이 아니니 모른 척한다'], 1, '동조하지 않고 알리는 것이 친구와 교실을 함께 지키는 일이에요.'),
            XT('친구가 선생님께 무례한 말을 한 뒤, 쉬는 시간에 그 친구에게 건넬 말을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '옆에서 함께 지키는 교육활동',
          items: [
            { type: 'table', prompt: '장면마다 또래로서 할 수 있는 행동을 쓰세요.', columns: ['장면', '할 수 있는 행동'], cells: [['선생님을 흉내 내 비웃을 때', ''], ['합성 사진이 단톡방에 올라올 때', ''], ['수업을 반복해 방해할 때', '']], answer: '웃지 않고 집중 / 퍼뜨리지 않고 어른께 알림 / 반 대표·담임과 상의' },
            { type: 'choice', prompt: '침해를 키우는 반응에 ○ 하세요.', options: ['대화 주제 바꾸기', '조롱 영상 공유하기', '담임께 알리기'], answer: '조롱 영상 공유하기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '옆 사람의 웃음과 박수는 그 행동을 계속하게 만드는 ___가 될 수 있다.', answer: '무대' },
            { type: 'short', prompt: '알리는 것이 고자질이 아닌 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 웃거나 지켜본 것은 책임이 없다고 여긴다 → 동조가 침해를 키우는 결과를 갈림길로 보여 준다. ② 나서면 보복당할까 걱정한다 → 큰 개입이 아니라 동조하지 않기·나중에 말 걸기·조용히 알리기를 고르게 한다. ③ 실제 교사·학생을 떠올리게 하지 않는다 — 장면은 모두 가상이다.',
      }),
    ],
  });
})();
