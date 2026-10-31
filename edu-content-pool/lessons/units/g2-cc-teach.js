/* 2학년 창체 법정교육 — 교육활동 존중 (1차시).
 * 근거: 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·같은 법 시행령 제21조(연 1회 이상 학생 대상 교육활동 침해행위 예방교육)(research-mandatory.md 표).
 * 2학년 범위: 모둠 활동에서 친구의 배움 지키기, 학습 도구로 장난치지 않기, 선생님께 고운 말투로 말하기.
 * 1학년 단원(귀 기울여 듣기·손 들고 말하기·멈춰요에 멈추기)과 장면이 겹치지 않게 짠다. 처벌로 겁주지 않는다. 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g2-cc-teach', GRADE = 2, TITLE = '교육활동 존중';
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
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '2학년 교육활동 존중 단원은 수업 중 떠들기와 장난이 친구와 선생님의 배움을 막을 수 있음을 알고 서로의 배움을 지키는 행동을 고르는 1차시입니다. 모둠 활동에서 배움을 돕는 행동과 막는 행동을 나누고, 가위·풀·태블릿 같은 학습 도구를 바르게 쓰는 행동을 고르며, 선생님께 쓰는 말투를 고운 말로 바꿉니다. 이어 모둠 친구가 장난칠 때·선생님 말씀이 서운할 때·친구 작품을 망가뜨리고 싶을 때의 갈림길을 고릅니다. 근거는 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·같은 법 시행령 제21조(연 1회 이상 학생 대상 예방교육)입니다. 1학년의 교실 배움 약속을 이어 받으며 학급 규칙 만들기(자율·자치)와 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '모둠 활동과 학습 도구로 친구의 배움 지키기',
        objective: '수업 중 떠들기·장난이 배움을 막는다는 것을 알고, 친구와 선생님의 배움을 존중하는 행동을 고를 수 있다.',
        draw: 'a paper classroom with a small group of children working together on a poster, scissors and glue neatly placed, and a teacher smiling nearby',
        banner: '함께 배우는 우리 모둠', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"모둠 활동을 할 때 한 친구가 계속 장난치면 어떻게 될까요?" 두세 명의 대답을 듣고(기다릴 반응: "작품을 못 끝내요") "수업 시간은 선생님이 가르치고 모두가 배우는 소중한 시간이에요. 장난은 그 시간을 빼앗을 수 있어요"라고 말한다. "조금 장난쳐도 괜찮아요"라는 반응에는 "모둠 친구들도 괜찮을까요?"라고 되묻는다.',
        student: '모둠 활동을 할 때 내가 잘하는 일을 짝에게 하나 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 배움을 지키는 행동 찾기', 14, 'mindmap',
            '"이 행동은 모둠의 배움을 도울까요, 막을까요?" 1번에서 "가위로 장난쳐요"를 웃긴 일로 여기는 학생에게 다칠 수 있고 활동이 멈춘다는 점을 짚는다. 2번은 학습 도구를 바르게 쓰는 행동을 고른다. 3번은 선생님께 쓰는 말투를 고운 말로 바꾸어 잇는다 — "뭐요?" 같은 말투가 선생님 마음을 다치게 할 수 있다고 말한다.',
            '모둠 활동 행동을 나누고 고운 말투를 이어요.', [
              MS('모둠 활동 행동을 배움을 돕는 것과 막는 것으로 나누어 보세요.', '모둠 활동', ['배움을 도와요', '배움을 막아요'], ['역할을 나눠 맡아요', '친구 생각을 들어요', '가위로 장난쳐요', '작은 소리로 수다만 떨어요'], { '배움을 도와요': ['역할을 나눠 맡아요', '친구 생각을 들어요'], '배움을 막아요': ['가위로 장난쳐요', '작은 소리로 수다만 떨어요'] }, 0.15),
              MP('학습 도구를 바르게 쓰는 행동만 골라 담아 보세요.', '학습 도구', ['풀 뚜껑을 닫아요', '태블릿은 활동에만 써요', '자로 친구를 찔러요', '몰래 게임해요'], ['풀 뚜껑을 닫아요', '태블릿은 활동에만 써요'], 0.2),
              MM('선생님께 하는 말을 고운 말투로 바꿔 이어 보세요. 맞지 않는 카드는 남겨요.', '고운 말투', [{ id: 's1', label: '"뭐요?"' }, { id: 's2', label: '"아, 하기 싫어."' }, { id: 's3', label: '"빨리 끝내요."' }], ['"다시 말씀해 주세요"', '"어려워서 도움이 필요해요"', '"언제 끝나는지 궁금해요"', '"몰라요!"'], { s1: '"다시 말씀해 주세요"', s2: '"어려워서 도움이 필요해요"', s3: '"언제 끝나는지 궁금해요"' }, 0.25,
                { conclude: '도구는 배움에만 쓰고, 선생님께는 고운 말투로 말해요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"어떤 길을 고르면 모두 잘 배울까요?" 결과 칸을 읽게 한다. 1번은 모둠 친구가 장난칠 때 말로 멈추게 하는 장면이다. 2번은 선생님 말씀이 서운할 때 투덜대거나 소리치지 않고 쉬는 시간에 말씀드리는 장면이다. 3번은 친구 작품을 망가뜨리고 싶을 만큼 속상할 때 멈추는 장면이다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('모둠 친구가 계속 장난을 쳐요.', '포스터를 만드는데 준이가 색연필로 장난만 쳐요. 모둠 활동이 늦어지고 있어요.', [
                { id: 'say', text: '"이거 같이 칠하자" 해요', result: '준이가 웃으며 색칠을 함께해요.', mood: '편안함' },
                { id: 'join', text: '나도 같이 장난쳐요', result: '포스터를 끝내지 못하고 시간이 다 가요.', mood: '속상함', why: '장난에 끼지 말고 함께 하자고 말해요.' },
                { id: 'yell', text: '"너 때문이야!" 소리쳐요', result: '모둠이 다투느라 수업이 멈춰요.', mood: '화남', why: '소리치지 말고 고운 말로 함께 하자고 해요.' },
              ], 'say', 0.15),
              EB('선생님 말씀이 서운해요.', '하나가 발표하고 싶었는데 선생님이 다른 친구를 시키셨어요. 하나는 서운해요.', [
                { id: 'grumble', text: '"치, 맨날 쟤만" 투덜대요', result: '선생님과 친구 마음이 상해요.', mood: '속상함', why: '서운하면 나중에 고운 말로 말씀드려요.' },
                { id: 'later', text: '쉬는 시간에 마음을 말씀드려요', result: '선생님이 "다음엔 하나가 해 보자" 하세요.', mood: '기쁨' },
              ], 'later', 0.2),
              EB('짝이 내 작품을 보고 웃었어요.', '린이 만든 작품을 보고 짝이 웃어서 린은 짝의 작품을 구기고 싶어요.', [
                { id: 'break', text: '짝의 작품을 구겨요', result: '짝이 울고 수업이 멈춰요.', mood: '슬픔', why: '속상해도 친구의 작품은 망가뜨리지 않아요.' },
                { id: 'tell', text: '"웃어서 속상해" 말해요', result: '짝이 사과하고 둘 다 작품을 마쳐요.', mood: '편안함' },
              ], 'tell', 0.25, { conclude: '속상할 때도 친구와 선생님의 배움을 존중하는 길을 골라요.' }),
            ]),
        ],
        wrap: '"우리 모둠이 함께 잘 배우려면 무엇을 지킬까요?" 학생 말을 모아 모둠 약속 두 가지로 정한다. 출구 1번에서 "몰래 게임해요"를 고른 학생에게 태블릿은 배움의 도구라는 점을 다시 짚는다. 2번은 고운 말투로 정리한다.',
        exit: [
          XT('mindmap', { mode: 'pick', topic: '배움 지키기', basket: '배움 지키기', cards: ['역할을 나눠 맡아요', '도구는 활동에만', '몰래 게임해요', '자로 친구 찌르기'] }, '배움을 지키는 행동만 골라 담아 보세요.', { pick: ['역할을 나눠 맡아요', '도구는 활동에만'] }, 0.15),
          XC('선생님 말씀을 못 들었을 때 어떻게 말할까요?', ['"뭐요?"', '"다시 말씀해 주세요"', '"몰라요!"'], 1, '고운 말투로 여쭤보면 선생님도 기쁘게 알려 주세요.'),
          XS('우리 모둠이 함께 잘 배우기 위한 약속을 쓰세요.'),
        ],
        wsTitle: '함께 배우는 약속',
        ws: [
          WT('배움을 도우면 ○, 막으면 ×를 쓰세요.', ['행동', '○ / ×'], [['역할을 나눠 맡아요', ''], ['가위로 장난쳐요', ''], ['친구 생각을 들어요', ''], ['몰래 게임해요', '']], '○, ×, ○, ×'),
          WC('선생님 말씀이 서운할 때 할 행동에 ○ 하세요.', ['투덜대요', '쉬는 시간에 말씀드려요', '소리쳐요'], '쉬는 시간에 말씀드려요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '학습 도구는 ___에만 써요.', '배움'),
          WS('"아, 하기 싫어"를 고운 말투로 바꿔 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 작은 장난은 괜찮다고 여긴다 → 모둠 친구들의 시간도 함께 줄어든다는 점을 짚는다. ② 서운한 마음을 투덜거림으로 드러낸다 → 마음을 말로 전하는 때와 방법을 알려 준다. 특정 학생의 행동을 예로 들지 않는다.',
      }),
    ],
  });
})();
