/* 1학년 창체 법정교육 — 장애인식개선 (2차시).
 * 근거: 장애인복지법 제25조·같은 법 시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간(research-mandatory.md 표).
 * 1학년 범위: 휠체어·흰지팡이·보청기가 하는 일, 사람마다 다른 점과 같은 점, "도와줄까?" 먼저 묻기, 일하는 안내견 존중.
 * 장면·인물은 이 단원을 위해 지은 것이다(가명 한 글자). '장애인' 낱말을 쓰고, 불쌍히 여기는 말 대신 함께하는 말을 익힌다. */
(function () {
  const ID = 'g1-cc-disab', GRADE = 1, TITLE = '장애인식개선';
  const UNIT = `g${GRADE}-창체-${ID.replace(/^g\d+-cc-/, '')}`;
  const base = (n) => ({
    id: `${ID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE,
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
  // 문항 틀: MS 나누기, MM 잇기, MP 고르기(mindmap) / EB 갈림길, ES 나누기, EM 잇기, EP 고르기(emotion) / SO 차례, SF 말풍선(story) / KS 식판 나누기, KP 고르기, KO 차례(kitchen) / TO 시간 띠 차례, TS 시간 띠 나누기(timeline) / WS·WF 낱말 카드(wordcards)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const KS = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: slots ? { slots, groups: false, cards } : { cards }, target: { sort }, difficulty: d, ...more });
  const KP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards }, target: { pick }, difficulty: d, ...more });
  const KO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', cards }, target: { order }, difficulty: d, ...more });
  const TO = (prompt, axis, cards, order, d, more) => ({ prompt, toolOptions: { axis, cards }, target: { order }, difficulty: d, ...more });
  const TS = (prompt, axis, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', axis, slots, cards }, target: { sort }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const ACT = (id, title, minutes, tool, teacher, task, items) => ({
    id, title, minutes, tool, teacher, task, items,
    levels: items.some((it) => it.toolOptions && it.toolOptions.mode === 'branch') ? LVB : LV,
  });
  // 출구: XT 교구, XC 고르기, XS 짧은 글, MOOD 마음
  const XT = (tool, options, prompt, target, d = 0.2) => ({ type: 'tool', tool, options, ...(options.mode === 'branch' ? {} : { state: { at: {} } }), prompt, target, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.15) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XS = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 활동지
  const WT = (prompt, columns, cells, answer) => ({ type: 'table', prompt, columns, cells, answer });
  const WC = (prompt, options, answer) => ({ type: 'choice', prompt, options, answer });
  const WB = (prompt, text, answer) => ({ type: 'blank', prompt, text, answer });
  const WS = (prompt) => ({ type: 'short', prompt });
  const WD = (prompt) => ({ type: 'draw', prompt });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모든 카드를 놓거나 보기를 고른 뒤 스스로 확인하고 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 알맞지 않은 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(활동 14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra || []) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro, student: o.student },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap, exitTicket: [...o.exit, MOOD] },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '1학년 장애인식개선 단원은 사람마다 몸과 감각이 다르고, 장애는 이상한 것이 아니라 생활에서 생기는 불편함이라는 첫 생각을 세우는 2차시입니다. 1차시에는 휠체어·흰지팡이·보청기가 하는 일을 알아보고 장애가 있는 친구와 나의 같은 점을 찾습니다. 2차시에는 도움이 필요해 보일 때 "도와줄까?" 하고 먼저 묻고, 친구가 원하는 방법으로 돕는 차례와 일하는 안내견을 만지지 않는 약속을 익힙니다. 근거는 장애인복지법 제25조·같은 법 시행령 제16조(매년 1회·1시간 이상)와 범교과 기준 연 2시간입니다. 통합교과(사람들)·학교폭력 예방(bully) 단원의 존중하는 말과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '휠체어·흰지팡이·보청기가 돕는 일 알기',
        objective: '휠체어·흰지팡이·보청기가 하는 일을 알고, 장애가 있는 친구와 나의 같은 점을 말할 수 있다.',
        draw: 'paper children playing together in a schoolyard, one child in a wheelchair throwing a ball and another child laughing, under a soft sun',
        banner: '우리는 모두 친구예요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: '"안경을 쓰면 무엇이 좋아질까요?" 두세 명의 대답을 듣고(기다릴 반응: "잘 보여요") "안경처럼 생활을 도와주는 도구가 또 있어요"라고 말한다. "장애가 있으면 아무것도 못 해요"라는 말이 나오면 "도구를 쓰면 할 수 있는 일이 아주 많아요"라고 바로잡는다.',
        student: '내가 쓰는 물건 가운데 나를 도와주는 물건을 하나 떠올려 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 도구와 하는 일 잇기', 14, 'mindmap',
            '"이 도구는 무엇을 도와줄까요?" 1번에서 흰지팡이를 "아파서 짚는 것"으로 여기는 학생에게 "앞이 잘 보이지 않는 사람이 땅을 살피며 걷게 해 줘요"라고 짚는다. 2번은 도구를 쓰면 할 수 있는 일이 많다는 점을 말한다. 3번에서는 도구를 함부로 만지지 않는 까닭을 묻는다.',
            '도구와 그 도구가 돕는 일을 이어요.', [
              MM('도구와 돕는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '돕는 도구', [{ id: 's1', label: '휠체어' }, { id: 's2', label: '흰지팡이' }, { id: 's3', label: '보청기' }], ['바퀴로 다녀요', '길을 살피며 걸어요', '소리를 잘 들어요', '높이 뛰어요'], { s1: '바퀴로 다녀요', s2: '길을 살피며 걸어요', s3: '소리를 잘 들어요' }, 0.15),
              MS('도구를 쓰면 할 수 있는 일과 하기 어려운 일로 나누어 보세요.', '휠체어 탄 준이', ['할 수 있어요', '도움이 필요해요'], ['공 던지기 놀이', '그림 그리기', '높은 계단 오르기', '턱 높은 문 지나기'], { '할 수 있어요': ['공 던지기 놀이', '그림 그리기'], '도움이 필요해요': ['높은 계단 오르기', '턱 높은 문 지나기'] }, 0.2),
              MP('친구의 도구 앞에서 할 행동만 골라 담아 보세요.', '도구 앞에서', ['허락 없이 만지지 않아요', '길을 비켜 줘요', '휠체어를 밀며 장난쳐요', '보청기를 빼 봐요'], ['허락 없이 만지지 않아요', '길을 비켜 줘요'], 0.2,
                { conclude: '도구는 친구의 몸처럼 소중해요. 허락 없이 만지지 않아요.' }),
            ]),
          ACT('a2', '활동 2. 다른 점과 같은 점 찾기', 13, 'mindmap',
            '"하나는 듣는 게 어려워요. 그럼 나와 무엇이 같을까요?" 1번에서 다른 점만 찾는 학생에게 좋아하는 것과 마음이 같다는 점을 짚는다. 2번은 장애가 있어도 함께 놀 수 있다는 생각을 고른다. 3번에서 "불쌍해" 같은 말 대신 함께하는 말을 고르게 한다.',
            '장애가 있는 친구와 나의 같은 점을 찾아요.', [
              MS('보청기를 쓰는 하나와 나를 견주어 나누어 보세요.', '하나와 나', ['같아요', '달라요'], ['떡볶이를 좋아해요', '친구와 놀고 싶어요', '보청기를 써요', '칭찬받으면 기뻐요'], { '같아요': ['떡볶이를 좋아해요', '친구와 놀고 싶어요', '칭찬받으면 기뻐요'], '달라요': ['보청기를 써요'] }, 0.15),
              MP('장애에 대한 바른 생각만 골라 담아 보세요.', '바른 생각', ['함께 놀 수 있어요', '잘하는 것이 있어요', '아무것도 못 해요', '옮는 병이에요'], ['함께 놀 수 있어요', '잘하는 것이 있어요'], 0.2),
              MM('장면과 어울리는 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '함께하는 말', [{ id: 'm1', label: '휠체어 탄 친구와 놀이를 정해요.' }, { id: 'm2', label: '흰지팡이 쓰는 분이 지나가요.' }, { id: 'm3', label: '듣기 어려운 친구와 말해요.' }], ['"이 놀이 같이 할래?"', '"길 비켜 드릴게요"', '얼굴 보고 천천히 말해요', '"불쌍해"'], { m1: '"이 놀이 같이 할래?"', m2: '"길 비켜 드릴게요"', m3: '얼굴 보고 천천히 말해요' }, 0.25,
                { conclude: '다른 점보다 같은 점이 훨씬 많아요. 우리는 함께 노는 친구예요.' }),
            ]),
        ],
        wrap: '"오늘 알게 된 도구 가운데 하나를 골라 하는 일을 말해 볼까요?" 출구 1번에서 "옮는 병"을 고른 학생에게 장애는 옮지 않는다는 점을 다시 짚는다. 2번은 도구를 쓰면 할 수 있는 일이 많다는 점으로 정리한다.',
        exit: [
          XT('mindmap', { mode: 'pick', topic: '바른 생각', basket: '바른 생각', cards: ['같이 놀 수 있어요', '도구는 소중해요', '장애는 옮아요', '보청기는 장난감'] }, '바른 생각만 골라 담아 보세요.', { pick: ['같이 놀 수 있어요', '도구는 소중해요'] }, 0.15),
          XC('흰지팡이는 무엇을 도와줄까요?', ['길을 살피며 걷게 해요', '높이 뛰게 해요', '노래를 부르게 해요'], 0, '흰지팡이는 앞이 잘 보이지 않는 사람이 길을 살피게 도와줘요.'),
          XS('장애가 있는 친구와 함께 하고 싶은 놀이를 한 가지 쓰세요.'),
        ],
        wsTitle: '도와주는 도구',
        ws: [
          WT('도구와 돕는 일을 선으로 잇듯 짝을 쓰세요.', ['도구', '돕는 일'], [['휠체어', ''], ['흰지팡이', ''], ['보청기', '']], '바퀴로 다녀요 / 길을 살피며 걸어요 / 소리를 잘 들어요'),
          WC('친구의 도구 앞에서 할 행동에 ○ 하세요.', ['허락 없이 만져요', '길을 비켜 줘요', '장난쳐요'], '길을 비켜 줘요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '장애가 있는 친구와 나는 ___ 점이 많아요.', '같은'),
          WD('장애가 있는 친구와 함께 노는 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 장애를 "아픈 것"이나 "옮는 것"으로 여긴다 → 생활의 불편함이고 옮지 않는다는 점을 분명히 한다. ② 불쌍히 여기는 말을 친절로 여긴다 → 같은 친구로 대하는 말을 고르게 한다. 반에 장애가 있는 학생이 있으면 그 학생을 예로 들지 않고 가상 인물로만 다룬다.',
      }),

      LESSON(2, {
        title: '"도와줄까?" 묻고 대답을 기다리기',
        objective: '도움이 필요해 보이는 친구에게 먼저 묻고, 친구가 원하는 방법으로 도울 수 있다.',
        draw: 'a paper child asking a friend in a wheelchair a question at a classroom door, with a guide dog resting calmly nearby and a soft sun above',
        banner: '"도와줄까?" 먼저 물어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"친구가 묻지도 않고 내 가방을 들어 가면 기분이 어떨까요?" 두세 명의 대답을 듣고(기다릴 반응: "깜짝 놀라요", "싫을 수도 있어요") "도울 때도 먼저 물어봐요"라고 말한다. "도와주는 건 무조건 좋은 거예요"라는 반응에는 "친구가 혼자 하고 싶을 때도 있어요"라고 되묻는다.',
        student: '누가 나를 도와줘서 고마웠던 일을 떠올려 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 이럴 때 어떻게 할까요', 14, 'emotion',
            '"이렇게 하면 친구는 어떤 마음일까요?" 보기를 고를 때마다 결과 칸을 읽게 한다. 1번에서 말없이 휠체어를 미는 쪽을 고른 학생에게 "친구가 가고 싶은 곳이 다를 수 있어요"라고 짚는다. 2번은 일하는 안내견을 부르거나 만지면 안내견이 일을 못 한다는 점을 말한다. 3번은 "괜찮아"라는 대답도 존중한다는 점으로 정리한다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('휠체어 탄 준이가 무거운 문 앞에 있어요. 어떻게 할까요?', '준이가 휠체어를 타고 교실 문 앞에 멈춰 있어요. 문이 무거워 보여요.', [
                { id: 'ask', text: '"문 열어 줄까?" 물어요', result: '준이가 "응, 고마워!" 하고 웃어요.', mood: '기쁨' },
                { id: 'push', text: '말없이 휠체어를 밀어요', result: '준이가 깜짝 놀라 "멈춰!" 해요.', mood: '놀람', why: '먼저 묻고, 친구가 원하는 방법으로 도와요.' },
                { id: 'pass', text: '못 본 척 지나가요', result: '준이가 혼자 오래 애를 써요.', mood: '속상함', why: '도움이 필요해 보이면 "도와줄까?" 물어요.' },
              ], 'ask', 0.15),
              EB('길에서 안내견을 만났어요. 어떻게 할까요?', '앞이 잘 보이지 않는 분과 조끼를 입은 안내견이 함께 걸어와요.', [
                { id: 'pet', text: '"귀엽다!" 쓰다듬어요', result: '안내견이 한눈을 팔아 길 안내가 흔들려요.', mood: '걱정', why: '일하는 안내견은 만지거나 부르지 않아요.' },
                { id: 'away', text: '조용히 길을 비켜요', result: '안내견이 주인과 안전하게 지나가요.', mood: '편안함' },
                { id: 'snack', text: '간식을 줘요', result: '안내견이 간식에 정신이 팔려요.', mood: '걱정', why: '안내견에게 먹을 것을 주지 않아요.' },
              ], 'away', 0.2),
              EB('도와줄까 물었더니 하나가 "괜찮아, 혼자 할게" 했어요.', '보청기를 쓰는 하나가 그림 도구를 챙기고 있어요. "도와줄까?" 물었더니 "괜찮아, 혼자 할게" 해요.', [
                { id: 'force', text: '그래도 대신 챙겨 줘요', result: '하나가 서운한 얼굴을 해요.', mood: '속상함', why: '친구가 혼자 하고 싶어 하면 그 뜻을 존중해요.' },
                { id: 'ok', text: '"알았어, 필요하면 불러" 해요', result: '하나가 스스로 챙기고 웃어요.', mood: '뿌듯함' },
                { id: 'mad', text: '"흥, 안 도와줘" 해요', result: '두 친구 사이가 어색해져요.', mood: '슬픔', why: '거절도 괜찮다는 마음으로 기다려요.' },
              ], 'ok', 0.25, { conclude: '도울 때는 먼저 묻고, 친구의 대답을 존중해요.' }),
            ]),
          ACT('a2', '활동 2. 도와주는 차례 익히기', 13, 'story',
            '"도울 때 무엇부터 할까요?" 1번에서 "바로 해 줘요"를 맨 앞에 두는 학생에게 묻기가 먼저라는 점을 짚는다. 2번 말풍선은 짝과 주고받으며 읽게 한다. 3번은 듣기 어려운 친구와 말할 때 얼굴을 보고 천천히 말하는 차례다.',
            '도와주는 차례를 놓고 말풍선을 채워요.', [
              SO('친구를 도와주는 차례대로 놓아 보세요.', '친구를 도와요', ['먼저', '다음', '마지막'], [C('k1', '"도와줄까?" 물어요', 'sun'), C('k2', '대답을 기다려요', 'leaf'), C('k3', '원하는 방법으로 도와요', 'flower')], ['k1', 'k2', 'k3'], 0.15),
              SF('친구에게 할 말을 채워 보세요.', [{ id: 'b1', who: '린', motif: 'sun', label: '도울 때 먼저 "___"' }, { id: 'b2', who: '린', motif: 'flower', label: '도움을 마치고 "___"' }], ['도와줄까?', '언제든 불러', '빨리 비켜', '내가 다 할게'], { b1: '도와줄까?', b2: '언제든 불러' }, 0.2),
              SO('듣기 어려운 친구와 이야기하는 차례대로 놓아 보세요.', '하나와 이야기해요', ['먼저', '다음', '마지막'], [C('t1', '어깨를 살짝 두드려요', 'leaf'), C('t2', '얼굴을 마주 봐요', 'sun'), C('t3', '천천히 또박또박 말해요', 'star')], ['t1', 't2', 't3'], 0.25,
                { conclude: '묻고, 기다리고, 원하는 방법으로 도와요.' }),
            ]),
        ],
        wrap: '"도울 때 가장 먼저 할 말은 무엇이었나요?" 출구 1번에서 안내견을 쓰다듬는 쪽을 고른 학생에게 안내견은 일하는 중이라는 점을 짚는다. 2번은 거절도 존중한다는 점으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'branch', situation: '목발을 짚은 친구가 급식 판을 들고 있어요.', choices: [{ id: 'a', text: '"들어 줄까?" 물어요', result: '친구가 "고마워" 해요.', mood: '고마움' }, { id: 'b', text: '판을 확 가져가요', result: '친구가 놀라 휘청해요.', mood: '놀람', why: '먼저 물어보고 도와요.' }] }, '어떻게 하면 좋을까요?', { choice: 'a' }, 0.15),
          XC('친구가 "괜찮아, 혼자 할게" 하면 어떻게 할까요?', ['억지로 도와요', '뜻을 존중하고 기다려요', '화를 내요'], 1, '혼자 하고 싶은 마음도 존중해요.'),
          XS('도움이 필요한 친구에게 할 말을 쓰세요.'),
        ],
        wsTitle: '먼저 물어요',
        ws: [
          WT('도와주는 차례에 1, 2, 3을 쓰세요.', ['할 일', '차례'], [['원하는 방법으로 도와요', ''], ['"도와줄까?" 물어요', ''], ['대답을 기다려요', '']], '3, 1, 2'),
          WC('일하는 안내견을 만나면 어떻게 할까요?', ['쓰다듬어요', '이름을 불러요', '조용히 길을 비켜요'], '조용히 길을 비켜요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '도울 때는 먼저 "___" 하고 물어요.', '도와줄까?'),
          WS('듣기 어려운 친구와 이야기할 때 지킬 일을 한 가지 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 묻지 않고 도와주는 것이 착한 일이라고 여긴다 → 친구의 몸과 물건은 친구가 정한다는 점을 짚는다. ② 안내견을 보면 반가워 부른다 → 일하는 중에는 만지지도 부르지도 않는다고 약속한다. 학생이나 가족의 장애를 발표시키지 않는다.',
      }),
    ],
  });
})();
