/* 중2 창체 법정교육 — 교육활동 존중(침해 예방) (1차시). 근거: 교원지위법 제24조·시행령 제21조(학생 대상 교육활동 침해행위 예방교육 연 1회 이상).
 * 디지털 상황(몰래 촬영·편집·유포, 조롱 게시물)을 중심으로 다룬다. 처벌 수위·조문 번호는 적지 않는다. 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 8; const CODE = 'teach';
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
    flow: '1학년에서 교육활동 침해행위의 기본 예를 배운 학생들이, 2학년에서는 휴대전화와 SNS로 생기는 침해 상황을 판단합니다. 수업 장면을 허락 없이 찍어 올리기·짧게 잘라 조롱하기·선생님 얼굴로 밈 만들기가 왜 교육활동 침해가 되는지 장면으로 따져 보고, 친구가 그런 영상을 올렸을 때 퍼뜨리지 않는 선택을 연습합니다. "재미로 올렸다"는 생각이 한 사람의 명예와 반 전체의 수업을 어떻게 바꾸는지를 결과로 보게 합니다. 학교폭력 예방(g8-cc-bully)의 사칭·유포 차시와 함께 읽으면 좋습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '촬영·편집·공유 앞에서 멈추는 선택 고르기',
        objective: '수업 장면을 허락 없이 찍어 올리거나 조롱하는 게시물이 교육활동 침해가 되는 까닭을 말하고, 그런 상황에서 퍼뜨리지 않는 행동을 고를 수 있다.',
        draw: 'a paper smartphone with a red stop sign over a share button, in front of a classroom blackboard',
        banner: '올리기 전에 멈춰요', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"수업 중 선생님이 말을 더듬은 3초를 누군가 찍어 올렸다면, 그 영상은 하루 뒤 어디까지 가 있을까요?" 대답을 듣고(기다릴 반응: "다른 반까지요", "모르는 사람한테도요") 시연으로 행동 카드를 나눈다. "얼굴만 안 나오면 괜찮아요"라는 말이 나오면 "목소리와 교실만으로도 누구인지 알 수 있지 않을까요?"라고 되묻는다. 오늘은 휴대전화 앞에서 멈추는 선택을 연습한다고 밝힌다.',
          student: '친구가 재미있다며 보낸 영상을 받았을 때 바로 공유하기 전에 무엇을 생각하면 좋을지 짝에게 말해 봅시다.',
          demo: DEMO('수업과 휴대전화', ['괜찮아요', '침해예요'], ['허락받고 판서 찍기', '몰래 찍어 올리기'], { '괜찮아요': ['허락받고 판서 찍기'], '침해예요': ['몰래 찍어 올리기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 장면 속 선택과 결과 보기', minutes: 14, tool: 'emotion',
            teacher: '"이 선택을 하면 선생님과 반은 어떻게 될까요?" 결과 칸을 소리 내어 읽게 한다. "나는 찍기만 하고 올리지는 않았어요"를 괜찮다고 여기는 학생에게 "허락 없이 찍은 영상은 언제든 퍼질 수 있어요. 처음부터 찍지 않는 것이 가장 확실해요"라고 말해 준다. 공유·좋아요도 퍼뜨리는 행동이라는 점을 짚는다.',
            task: '수업과 휴대전화가 얽힌 장면에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('수업 중 선생님이 실수한 장면을 친구가 찍자고 해요. 어떻게 할까요?', '과학 시간, 실험 도구를 떨어뜨린 선생님을 보며 옆자리 민이 "이거 찍어서 올리자"고 속삭여요.', [
                { id: 'film', text: '같이 찍어서 단톡방에 올려요', result: '영상이 다른 학교까지 퍼져 선생님이 큰 상처를 받아요.', mood: '속상함', why: '허락 없이 찍어 퍼뜨리면 선생님의 명예를 해치는 침해가 돼요.' },
                { id: 'stop', text: '"그건 하지 말자"고 말하고 수업에 집중해요', result: '민도 휴대전화를 내려놓고 실험이 이어져요.', mood: '편안함' },
                { id: 'watch', text: '나는 안 찍고 민이 찍는 걸 구경해요', result: '영상이 올라가고 반 분위기가 무거워져요.', mood: '걱정', why: '말리지 않고 구경하면 퍼지는 것을 막을 기회를 놓쳐요.' }], 'stop', 0.2),
              EB('선생님 얼굴로 만든 놀림 사진이 단톡방에 올라왔어요.', '반 단톡방에 선생님 얼굴을 합성한 놀림 사진이 올라오고 "ㅋㅋ"가 이어져요.', [
                { id: 'like', text: '웃음 이모티콘을 달아요', result: '사진이 더 위로 올라가 더 많은 사람이 봐요.', mood: '걱정', why: '반응 하나도 게시물을 더 퍼뜨리는 행동이에요.' },
                { id: 'share', text: '다른 단톡방에도 옮겨요', result: '사진이 걷잡을 수 없이 퍼져요.', mood: '무서움', why: '옮기는 순간 나도 퍼뜨린 사람이 돼요.' },
                { id: 'ask', text: '"내리자"고 말하고 담임 선생님께 알려요', result: '사진이 지워지고 더 퍼지지 않아요.', mood: '안심' }], 'ask', 0.25),
              EB('필기를 하려고 수업 화면을 찍고 싶어요.', '판서가 많아 다 못 적은 하늘은 칠판 사진을 찍고 싶어요.', [
                { id: 'secret', text: '선생님 몰래 얼굴까지 찍어요', result: '선생님이 알게 되어 서로 믿음이 깨져요.', mood: '미안함', why: '허락 없이 사람을 찍으면 필기 목적이어도 문제가 돼요.' },
                { id: 'permit', text: '"판서를 찍어도 될까요?" 하고 여쭤요', result: '선생님이 허락하고 칠판만 찍게 해 줘요.', mood: '고마움' },
                { id: 'post', text: '찍어서 SNS에 바로 올려요', result: '수업 자료가 허락 없이 퍼져요.', mood: '걱정', why: '찍은 자료를 올리는 것도 허락이 필요해요.' }], 'permit', 0.3,
                { conclude: '찍기 전에 허락, 올리기 전에 멈춤 — 이 두 가지가 서로를 지켜요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 퍼뜨리지 않는 행동 정리하기', minutes: 13, tool: 'mindmap',
            teacher: '"영상이 이미 올라왔다면 지금 내가 할 수 있는 일은 무엇일까요?" "이미 퍼졌으니 소용없어요"라는 생각에는 "한 사람이 멈추면 그 줄기는 거기서 끝나요"라고 말해 준다. 2번에서 "선생님께 따지러 가요"를 고른 학생에게는 화가 난 이유가 있다면 3학년에서 배울 존중하며 전하는 방법이 있다고 연결한다.',
            task: '조롱·촬영 게시물을 만났을 때 할 행동과 하지 않을 행동을 나누고, 그 까닭을 말해요.',
            levels: LV,
            items: [
              MS('놀림 영상을 받았을 때의 행동을 두 가지로 나누어 보세요.', '놀림 영상을 받았을 때', ['할 행동', '하지 않을 행동'], ['공유하지 않아요', '올린 친구에게 내리자고 해요', '재밌으니 저장해 둬요', '다른 반에 보여 줘요'], { '할 행동': ['공유하지 않아요', '올린 친구에게 내리자고 해요'], '하지 않을 행동': ['재밌으니 저장해 둬요', '다른 반에 보여 줘요'] }, 0.2),
              MP('게시물이 이미 퍼졌을 때 도움이 되는 행동만 골라 담아 보세요.', '퍼진 뒤의 행동', ['담임 선생님께 알려요', '더 퍼뜨리지 않아요', '모른 척 계속 웃어요', '올린 친구 신상을 퍼뜨려요'], ['담임 선생님께 알려요', '더 퍼뜨리지 않아요'], 0.25),
              MM('생각과 그것을 바로잡는 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '생각 바로잡기', [{ id: 'm1', label: '재미로 올린 거예요' }, { id: 'm2', label: '얼굴은 안 나왔어요' }, { id: 'm3', label: '나는 좋아요만 눌렀어요' }], ['받는 사람은 상처예요', '목소리로도 알아봐요', '반응도 퍼뜨리는 거예요', '올린 사람만 잘못이에요'], { m1: '받는 사람은 상처예요', m2: '목소리로도 알아봐요', m3: '반응도 퍼뜨리는 거예요' }, 0.3,
                { conclude: '재미·익명·반응만이라는 생각은 모두 퍼뜨림을 가볍게 보이게 하는 착각이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘부터 휴대전화로 사람을 찍기 전에 스스로에게 할 질문 하나는 무엇인가요?" 출구 1번에서 몰래 찍기를 고른 학생에게는 허락을 구하는 한마디가 얼마나 간단한지 다시 말해 준다. 이런 일로 걱정이 생기면 담임·상담 선생님께 이야기할 수 있다고 덧붙인다.',
          exit: [
            XB('수행평가 발표를 하는 선생님 모습을 친구가 몰래 찍어 짧은 영상으로 만들자고 해요. 어떻게 할까요?', '친구 도가 "선생님 말투 웃기니까 짧게 잘라 올리자"고 해요.', [
              { id: 'go', text: '재밌겠다며 편집을 도와요', why: '잘라 편집한 조롱 영상은 선생님의 명예를 해쳐요.' },
              { id: 'no', text: '"그건 선생님께 상처야"라고 말리고 찍지 않아요' },
              { id: 'later', text: '올리지 말고 우리끼리만 봐요', why: '우리끼리 본 영상도 언제든 퍼질 수 있어요.' }], 'no'),
            XC('수업 장면을 허락 없이 찍어 올리는 일이 교육활동 침해가 되는 까닭은 무엇인가요?', ['휴대전화 배터리가 닳아서', '선생님의 명예와 반 전체의 수업을 해쳐서', '사진 화질이 나빠서'], 1, '허락 없는 촬영·유포는 선생님의 명예와 모두의 수업을 해쳐요.'),
            XT('친구가 놀림 영상을 올리려 할 때 건넬 말을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '찍기 전에 허락, 올리기 전에 멈춤',
          items: [
            { type: 'table', prompt: '상황에서 할 행동을 쓰세요.', columns: ['상황', '내가 할 행동'], cells: [['친구가 선생님을 몰래 찍자고 할 때', ''], ['놀림 사진이 단톡방에 올라왔을 때', ''], ['판서를 찍고 싶을 때', '']], answer: '말리고 찍지 않기, 내리자고 하고 선생님께 알리기, 허락 구하기' },
            { type: 'choice', prompt: '놀림 게시물을 더 퍼뜨리는 행동이 아닌 것에 ○ 하세요.', options: ['웃음 이모티콘 달기', '다른 방에 옮기기', '공유하지 않고 알리기'], answer: '공유하지 않고 알리기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '사람을 찍을 때는 먼저 ___를 구해요.', answer: '허락' },
            { type: 'short', prompt: '"나는 좋아요만 눌렀으니 괜찮다"는 생각이 왜 틀렸는지 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① "얼굴이 안 나오면 괜찮다", "우리끼리만 본다"고 여긴다 → 목소리·장소로도 알아볼 수 있고 저장된 영상은 언제든 퍼진다는 점을 짚는다. ② 반응(좋아요·이모티콘)은 행동이 아니라고 여긴다 → 반응이 게시물을 더 퍼뜨리는 구조를 말해 준다. ③ 실제 우리 학교 사례를 묻거나 특정 학생을 떠올리게 하지 않는다 — 모든 장면은 가상 인물로 다룬다.',
      }),
    ],
  });
})();
