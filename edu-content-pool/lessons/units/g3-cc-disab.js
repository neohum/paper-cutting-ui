/* 3학년 창체 법정교육 — 장애인식개선 (2차시).
 * 근거: 장애인복지법 제25조·같은 법 시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간(research-mandatory.md 표).
 * 3학년 범위: 경사로·점자 블록·엘리베이터·장애인 전용 주차구역 같은 편의시설의 쓰임과 바른 이용, 모두 함께하는 놀이로 규칙 바꾸기.
 * 1학년(보조기구·"도와줄까?" 묻기)·2학년(점자·수어·존중하는 말)과 겹치지 않게 '환경과 규칙을 바꾸면 모두 함께할 수 있다'에 맞춘다.
 * '장애인/비장애인' 낱말을 쓴다. 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g3-cc-disab', GRADE = 3, TITLE = '장애인식개선';
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
    flow: '3학년 장애인식개선 단원은 불편함이 사람에게만 있는 것이 아니라 계단·문턱·규칙 같은 환경에서도 생긴다는 생각을 세우는 2차시입니다. 1차시에는 경사로·점자 블록·엘리베이터·장애인 전용 주차구역의 쓰임을 알고, 그 시설을 막거나 함부로 쓰지 않는 바른 이용을 판단합니다. 2차시에는 휠체어를 타는 친구, 앞이 잘 보이지 않는 친구도 함께할 수 있도록 놀이 규칙을 바꾸는 방법을 고르고 짝과 까닭을 말합니다. 근거는 장애인복지법 제25조·같은 법 시행령 제16조(매년 1회·1시간 이상)와 범교과 기준 연 2시간입니다. 1·2학년의 보조기구·점자·수어 학습을 이어 받으며, 사회과 공공시설 학습과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '학교와 동네의 편의시설 찾고 바르게 이용하기',
        objective: '경사로·점자 블록·엘리베이터·장애인 전용 주차구역의 쓰임을 알고, 바르게 이용하는 행동을 고를 수 있다.',
        draw: 'a paper town street with a gentle ramp beside stairs, yellow tactile paving on the sidewalk, an elevator door and a parking space with a wheelchair sign',
        banner: '모두를 위한 시설', extra: [{ motif: 'flower', x: 300, y: 222, color: 'sky' }],
        intro: '"우리 학교 현관에 계단 말고 비스듬한 길이 있나요?" 두세 명의 대답을 듣고 "그 길은 누구에게 도움이 될까요?"라고 묻는다. "장애인만 쓰는 거예요"라는 반응에는 "유모차를 미는 사람, 큰 짐을 끄는 사람은요?"라고 되묻고, 편의시설은 모두를 돕는다는 점을 짚는다.',
        student: '우리 학교나 동네에서 본 경사로·엘리베이터·노란 블록을 짝에게 하나 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 편의시설과 쓰임 잇기', 14, 'mindmap',
            '"이 시설이 없으면 누가 어려울까요?" 1번에서 점자 블록을 "꾸밈 무늬"로 여기는 학생에게 "앞이 잘 보이지 않는 사람이 발과 지팡이로 길을 느끼는 블록이에요"라고 짚는다. 2번은 편의시설이 장애인뿐 아니라 여러 사람을 돕는다는 점을 나눈다. 3번은 시설과 그 시설을 쓰는 사람의 짝을 찾는다.',
            '편의시설과 쓰임을 잇고, 도움받는 사람을 찾아요.', [
              MM('편의시설과 쓰임을 이어 보세요. 맞지 않는 카드는 남겨요.', '편의시설', [{ id: 's1', label: '경사로' }, { id: 's2', label: '점자 블록' }, { id: 's3', label: '엘리베이터' }, { id: 's4', label: '장애인 전용 주차구역' }], ['계단 없이 오르내려요', '발로 길을 느껴요', '층을 쉽게 옮겨요', '가까이 차를 대요', '빨리 달려요'], { s1: '계단 없이 오르내려요', s2: '발로 길을 느껴요', s3: '층을 쉽게 옮겨요', s4: '가까이 차를 대요' }, 0.2),
              MP('경사로가 도움이 되는 사람을 모두 골라 담아 보세요.', '경사로 덕분에', ['휠체어 탄 사람', '유모차 미는 사람', '여행 가방 끄는 사람', '아무도 없어요'], ['휠체어 탄 사람', '유모차 미는 사람', '여행 가방 끄는 사람'], 0.2),
              MS('엘리베이터 앞 모습을 나누어 보세요.', '엘리베이터', ['먼저 타게 비켜요', '함께 기다려요'], ['휠체어 탄 사람', '목발 짚은 친구', '짐 없는 나', '뛰어온 친구'], { '먼저 타게 비켜요': ['휠체어 탄 사람', '목발 짚은 친구'], '함께 기다려요': ['짐 없는 나', '뛰어온 친구'] }, 0.25,
                { conclude: '편의시설은 장애인을 비롯해 모두의 생활을 편하게 해요.' }),
            ]),
          ACT('a2', '활동 2. 바르게 이용하기 갈림길', 13, 'emotion',
            '"이렇게 하면 누가 어려워질까요?" 결과 칸을 읽고 까닭을 짝에게 말하게 한다. 1번은 점자 블록 위 자전거, 2번은 장애인 전용 주차구역 장면이다 — 표지가 붙은 차만 세울 수 있다고 알려 준다. 3번은 경사로에서 장난치는 장면이다.',
            '장면에서 바른 행동을 고르고 결과를 봐요.', [
              EB('점자 블록 위에 자전거를 세우려고 해요.', '준이가 학원 앞 노란 점자 블록 위에 자전거를 세우려고 해요.', [
                { id: 'move', text: '블록 밖 거치대에 세워요', result: '지팡이를 쓰는 분이 막힘없이 지나가요.', mood: '편안함' },
                { id: 'park', text: '잠깐이니 그냥 세워요', result: '지팡이를 쓰는 분이 자전거에 걸려요.', mood: '걱정', why: '점자 블록 위에는 아무것도 두지 않아요.' },
              ], 'move', 0.15),
              EB('마트 주차장에 빈자리가 장애인 전용 구역뿐이에요.', '하나네 차가 마트 주차장을 돌아요. 비어 있는 곳은 장애인 전용 주차구역 하나예요. 보호자가 "잠깐인데 세울까?" 해요.', [
                { id: 'wait', text: '"다른 자리를 찾아요" 해요', result: '조금 뒤 휠체어를 실은 차가 그 자리에 세워요.', mood: '뿌듯함' },
                { id: 'stop', text: '"잠깐이니 괜찮아요"', result: '휠체어를 실은 차가 먼 곳에 세우고 한참 와요.', mood: '속상함', why: '표지가 있는 차만 그 자리를 쓸 수 있어요.' },
              ], 'wait', 0.2),
              EB('경사로에서 친구들이 미끄럼 놀이를 해요.', '학교 현관 경사로에서 친구들이 신발로 미끄럼을 타며 놀아요. 휠체어 탄 린이 들어오려고 해요.', [
                { id: 'play', text: '나도 같이 미끄럼 타요', result: '린이 경사로 아래에서 오래 기다려요.', mood: '속상함', why: '경사로는 놀이터가 아니라 다니는 길이에요.' },
                { id: 'clear', text: '"길 비켜 주자" 말해요', result: '린이 웃으며 현관으로 들어와요.', mood: '고마움' },
              ], 'clear', 0.25, { conclude: '편의시설을 막거나 놀이로 쓰지 않아야 꼭 필요한 사람이 쓸 수 있어요.' }),
            ]),
        ],
        wrap: '"오늘 알게 된 편의시설 가운데 우리 학교에 있는 것은 무엇인가요?" 출구 1번에서 점자 블록 쓰임을 헷갈린 학생과 함께 다시 본다. 2번은 장애인 전용 주차구역의 바른 이용으로 정리한다.',
        exit: [
          XT('mindmap', { mode: 'match', topic: '편의시설', slots: [{ id: 'x1', label: '점자 블록' }, { id: 'x2', label: '경사로' }], cards: ['발로 길을 느껴요', '계단 없이 올라요', '꾸밈 무늬예요'] }, '편의시설과 쓰임을 이어 보세요.', { match: { x1: '발로 길을 느껴요', x2: '계단 없이 올라요' } }, 0.15),
          XC('장애인 전용 주차구역에 표지가 없는 차가 잠깐 세워도 될까요?', ['잠깐이면 돼요', '세우면 안 돼요', '밤에는 돼요'], 1, '꼭 필요한 사람이 언제든 쓸 수 있게 비워 두어요.'),
          XS('우리 학교에 더 있으면 좋겠다고 생각하는 편의시설을 까닭과 함께 쓰세요.'),
        ],
        wsTitle: '모두를 위한 편의시설',
        ws: [
          WT('편의시설의 쓰임을 쓰세요.', ['편의시설', '쓰임'], [['경사로', ''], ['점자 블록', ''], ['엘리베이터', ''], ['장애인 전용 주차구역', '']], '계단 없이 오르내려요 / 발로 길을 느껴요 / 층을 쉽게 옮겨요 / 가까이 차를 대요'),
          WC('점자 블록 위에 할 수 있는 일에 ○ 하세요.', ['자전거 세우기', '짐 내려놓기', '아무것도 두지 않기'], '아무것도 두지 않기'),
          WB('빈칸에 알맞은 말을 쓰세요.', '경사로는 휠체어 탄 사람뿐 아니라 ___를 미는 사람에게도 도움이 돼요.', '유모차'),
          WS('편의시설을 바르게 이용하기 위해 내가 지킬 일을 한 가지 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 편의시설을 "장애인만을 위한 특별한 것"으로 여긴다 → 여러 사람이 함께 덕을 본다는 점을 짚는다. ② "잠깐은 괜찮다"고 여긴다 → 그 잠깐에 꼭 필요한 사람이 올 수 있다는 결과를 보게 한다. 주차 장면은 보호자를 탓하는 이야기가 되지 않도록 아이가 바르게 말하는 쪽에 초점을 둔다.',
      }),

      LESSON(2, {
        title: '모두 함께할 수 있게 놀이 규칙 바꾸기',
        objective: '장애가 있는 친구도 함께할 수 있도록 놀이 규칙을 바꾸는 방법을 고르고 까닭을 말할 수 있다.',
        draw: 'paper children playing a ball game on a schoolyard where one child in a wheelchair and one child with a jingling ball play together, everyone cheering',
        banner: '규칙을 바꾸면 함께해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"피구를 하는데 휠체어를 탄 친구가 함께하고 싶대요. 어떻게 할까요?" 대답을 듣고(기다릴 반응: "구경시켜요", "규칙을 바꿔요") "친구를 빼는 대신 규칙을 바꾸는 방법이 있어요"라고 말한다. "규칙을 바꾸면 불공평해요"라는 반응에는 "모두가 참여할 수 있어야 공평한 놀이예요"라고 짚는다.',
        student: '우리가 자주 하는 놀이 하나를 떠올리고 그 놀이의 규칙을 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 규칙을 바꾸는 갈림길', 14, 'emotion',
            '"이 방법을 고르면 모두 함께할 수 있을까요?" 결과 칸을 읽고 까닭을 말하게 한다. 1번은 술래잡기에서 휠체어 탄 친구, 2번은 앞이 잘 보이지 않는 친구와 공놀이, 3번은 듣기 어려운 친구와 "무궁화 꽃이 피었습니다" 놀이다 — 소리 대신 깃발처럼 눈으로 보는 신호로 바꾸는 방법을 함께 떠올린다.',
            '친구가 함께할 수 있는 규칙을 고르고 결과를 봐요.', [
              EB('술래잡기에 휠체어 탄 준이가 함께하고 싶어 해요.', '운동장에서 술래잡기를 해요. 휠체어를 타는 준이가 "나도 할래" 해요. 운동장에는 울퉁불퉁한 곳이 있어요.', [
                { id: 'watch', text: '"너는 심판 해" 해요', result: '준이가 웃지만 놀이를 바라보기만 해요.', mood: '외로움', why: '빼지 말고 함께 뛸 수 있는 규칙을 찾아요.' },
                { id: 'change', text: '평평한 곳에서 터치로 잡아요', result: '준이도 술래가 되어 친구를 잡아요.', mood: '신남' },
              ], 'change', 0.15),
              EB('앞이 잘 보이지 않는 하나와 공을 굴려 맞히는 놀이를 해요.', '공을 굴려 핀을 쓰러뜨리는 놀이예요. 하나는 앞이 잘 보이지 않아요.', [
                { id: 'bell', text: '방울 공과 손뼉 신호를 써요', result: '하나가 소리를 듣고 공을 굴려 핀을 쓰러뜨려요.', mood: '뿌듯함' },
                { id: 'same', text: '규칙 그대로 해요', result: '하나가 방향을 몰라 자꾸 빗나가요.', mood: '속상함', why: '소리로 알려 주면 하나도 함께할 수 있어요.' },
              ], 'bell', 0.2),
              EB('듣기 어려운 린과 "무궁화 꽃이 피었습니다"를 해요.', '술래가 외치는 소리를 듣고 멈추는 놀이예요. 보청기를 쓰는 린은 먼 소리가 잘 안 들려요.', [
                { id: 'flag', text: '외칠 때 깃발도 들어요', result: '린이 깃발을 보고 딱 멈춰요.', mood: '기쁨' },
                { id: 'out', text: '"못 들으면 탈락이야"', result: '린이 자꾸 탈락해서 놀이를 그만둬요.', mood: '슬픔', why: '눈으로 보는 신호를 더하면 함께할 수 있어요.' },
              ], 'flag', 0.25, { conclude: '친구를 빼는 대신 규칙을 바꾸면 모두가 함께 놀 수 있어요.' }),
            ]),
          ACT('a2', '활동 2. 함께 놀이 규칙 만들기', 13, 'mindmap',
            '"이 규칙은 누구를 함께하게 해 줄까요?" 1번은 바꾼 규칙과 함께하게 되는 친구를 잇는다. 2번은 규칙을 바꿀 때 지킬 조건을 고른다 — 친구에게 먼저 물어보는 것이 빠지지 않게 한다. 3번에서 우리 반 놀이에 바로 쓸 규칙을 골라 짝과 이야기하게 한다.',
            '바꾼 규칙과 친구를 잇고, 규칙을 바꿀 때 지킬 조건을 골라요.', [
              MM('바꾼 규칙과 함께하게 되는 친구를 이어 보세요. 맞지 않는 카드는 남겨요.', '바꾼 규칙', [{ id: 'r1', label: '방울 공을 써요' }, { id: 'r2', label: '깃발로 신호해요' }, { id: 'r3', label: '평평한 곳에서 놀아요' }], ['앞이 안 보이는 친구', '듣기 어려운 친구', '휠체어 탄 친구', '아무도 아니에요'], { r1: '앞이 안 보이는 친구', r2: '듣기 어려운 친구', r3: '휠체어 탄 친구' }, 0.15),
              MP('규칙을 바꿀 때 지킬 조건만 골라 담아 보세요.', '규칙 바꾸기', ['친구에게 먼저 물어요', '모두 함께 정해요', '한 친구만 빼요', '이기는 팀이 정해요'], ['친구에게 먼저 물어요', '모두 함께 정해요'], 0.2),
              MS('놀이 규칙을 모두 함께하는 규칙과 누군가 빠지는 규칙으로 나누어 보세요.', '놀이 규칙', ['모두 함께해요', '누군가 빠져요'], ['소리와 깃발 함께 써요', '걸어서 하는 피구', '제일 빠른 사람만', '계단 위 숨바꼭질'], { '모두 함께해요': ['소리와 깃발 함께 써요', '걸어서 하는 피구'], '누군가 빠져요': ['제일 빠른 사람만', '계단 위 숨바꼭질'] }, 0.25,
                { conclude: '함께하는 놀이는 친구에게 묻고 모두 함께 규칙을 정해요.' }),
            ]),
        ],
        wrap: '"오늘 바꿔 본 규칙 가운데 우리 반 놀이 시간에 써 보고 싶은 것은 무엇인가요?" 출구 1번에서 "탈락"을 고른 학생에게 놀이의 목적이 함께 즐기는 것이라는 점을 짚는다. 2번은 친구에게 먼저 묻는 조건으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'branch', situation: '보물찾기를 해요. 목발을 짚은 친구는 높은 곳에 오르기 어려워요.', choices: [{ id: 'a', text: '보물을 낮은 곳에도 숨겨요', result: '친구도 보물을 찾아 활짝 웃어요.', mood: '기쁨' }, { id: 'b', text: '높은 곳에만 숨겨요', result: '친구가 하나도 못 찾아요.', mood: '속상함', why: '모두 닿을 수 있게 규칙을 바꿔요.' }] }, '어떻게 하면 좋을까요?', { choice: 'a' }, 0.15),
          XC('규칙을 바꾸기 전에 가장 먼저 할 일은 무엇일까요?', ['친구에게 어떻게 하고 싶은지 물어요', '선생님 몰래 정해요', '친구를 심판으로 정해요'], 0, '함께할 친구의 생각을 먼저 들어요.'),
          XS('모두 함께하도록 바꾸고 싶은 놀이 규칙을 한 가지 쓰세요.'),
        ],
        wsTitle: '함께 놀이 규칙',
        ws: [
          WT('바꾼 규칙이 돕는 친구를 쓰세요.', ['바꾼 규칙', '함께하게 되는 친구'], [['방울 공을 써요', ''], ['깃발로 신호해요', ''], ['평평한 곳에서 놀아요', '']], '앞이 안 보이는 친구 / 듣기 어려운 친구 / 휠체어 탄 친구'),
          WC('모두 함께하는 규칙에 ○ 하세요.', ['제일 빠른 사람만', '걸어서 하는 피구', '못 들으면 탈락'], '걸어서 하는 피구'),
          WB('빈칸에 알맞은 말을 쓰세요.', '친구를 빼는 대신 ___을 바꾸면 모두 함께 놀 수 있어요.', '규칙'),
          WS('우리 반 놀이 하나를 골라 모두 함께하도록 규칙을 바꿔 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 규칙을 바꾸면 "봐주기"라서 불공평하다고 여긴다 → 모두가 참여할 수 있어야 공평하다는 점을 짚는다. ② 장애가 있는 친구를 심판·응원으로만 두는 것을 배려로 여긴다 → 친구가 원하는지 묻게 한다. 반의 장애 학생을 예로 들지 않는다.',
      }),
    ],
  });
})();
