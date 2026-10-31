/* 1학년 창체 법정교육 — 교육활동 존중 (1차시).
 * 근거: 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·같은 법 시행령 제21조(연 1회 이상 학생 대상 교육활동 침해행위 예방교육)(research-mandatory.md 표).
 * 1학년 범위: 선생님 말씀과 친구 발표를 귀 기울여 듣기, 손 들고 말하기, 멈추라는 말에 멈추기 — 모두의 배움을 지키는 교실 약속.
 * 처벌·법 조항으로 겁주지 않고 존중하는 행동을 익힌다. 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g1-cc-teach', GRADE = 1, TITLE = '교육활동 존중';
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
    flow: '1학년 교육활동 존중 단원은 선생님이 가르치고 친구들이 배우는 시간을 모두 함께 지키는 교실 약속을 세우는 1차시입니다. 배움을 돕는 행동과 방해하는 행동을 나누고, 선생님 말씀 중 하고 싶은 말이 생겼을 때·친구가 발표하다 틀렸을 때·선생님이 멈추라고 할 때 어떻게 할지 고릅니다. 근거는 교원의 지위 향상 및 교육활동 보호를 위한 특별법 제24조·같은 법 시행령 제21조(연 1회 이상 학생 대상 예방교육)입니다. 학급 규칙 만들기(자율·자치)와 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '귀 기울여 듣고 손 들어 말하는 교실 약속 정하기',
        objective: '선생님과 친구의 배움을 돕는 행동을 알고, 우리 교실 약속으로 말할 수 있다.',
        draw: 'a paper classroom with children raising hands while a teacher points to a board, one child listening with hands on ears drawn as hearts',
        banner: '귀 기울여 들어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"선생님이 이야기할 때 옆에서 친구가 떠들면 어떻게 될까요?" 두세 명의 대답을 듣고(기다릴 반응: "안 들려요") "선생님이 가르치고 우리가 배우는 시간은 모두의 소중한 시간이에요"라고 말한다. "나 혼자 떠드는 건 괜찮아요"라는 반응에는 "옆 친구도 함께 못 듣게 돼요"라고 짚는다.',
        student: '수업 시간에 내가 잘 지키는 약속을 짝에게 하나 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 배움을 돕는 행동과 방해하는 행동', 14, 'mindmap',
            '"이 행동은 친구의 배움을 도울까요, 막을까요?" 1번에서 "큰 소리로 끼어들어요"를 돕는 쪽에 두는 학생에게 "다른 친구 말도 들려야 해요"라고 짚는다. 2번은 친구 발표를 들을 때의 행동을 고른다. 3번은 장면과 알맞은 행동을 이으며 "다음엔 이렇게 할래요"를 말하게 한다.',
            '교실 행동을 배움을 돕는 것과 방해하는 것으로 나누어요.', [
              MS('행동을 배움을 돕는 것과 방해하는 것으로 나누어 보세요.', '수업 시간', ['배움을 도와요', '배움을 막아요'], ['손 들고 말해요', '눈을 보며 들어요', '큰 소리로 끼어들어요', '돌아다니며 장난쳐요'], { '배움을 도와요': ['손 들고 말해요', '눈을 보며 들어요'], '배움을 막아요': ['큰 소리로 끼어들어요', '돌아다니며 장난쳐요'] }, 0.15),
              MP('친구가 발표할 때 할 행동만 골라 담아 보세요.', '친구 발표', ['조용히 끝까지 들어요', '박수로 응원해요', '틀리면 놀려요', '딴짓해요'], ['조용히 끝까지 들어요', '박수로 응원해요'], 0.2),
              MM('장면과 알맞은 행동을 이어 보세요. 맞지 않는 카드는 남겨요.', '이렇게 해요', [{ id: 's1', label: '선생님 설명 중에 궁금해요.' }, { id: 's2', label: '선생님이 "멈춰요" 하셨어요.' }, { id: 's3', label: '짝이 문제를 풀고 있어요.' }], ['손 들고 기다려요', '바로 멈춰요', '조용히 기다려요', '소리쳐 물어요'], { s1: '손 들고 기다려요', s2: '바로 멈춰요', s3: '조용히 기다려요' }, 0.25,
                { conclude: '모두가 잘 배우려면 듣고, 기다리고, 차례를 지켜요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"어떤 길을 고르면 모두 잘 배울까요?" 결과 칸을 읽게 한다. 1번은 친구가 발표하다 틀린 장면이다 — 웃음이 친구의 배우고 싶은 마음을 꺾을 수 있다고 말한다. 2번은 선생님께 하고 싶은 말이 있을 때 고운 말로 하는 장면이다. 3번은 선생님 말씀에 속상할 때 소리치지 않고 나중에 말씀드리는 길을 고른다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('발표하던 준이가 틀렸어요.', '준이가 앞에 나와 발표하다가 숫자를 틀렸어요. 몇몇 친구가 웃으려고 해요.', [
                { id: 'cheer', text: '"괜찮아!" 응원해요', result: '준이가 다시 힘을 내 발표를 마쳐요.', mood: '뿌듯함' },
                { id: 'laugh', text: '크게 웃어요', result: '준이가 다음부터 손을 들지 않아요.', mood: '슬픔', why: '틀려도 괜찮아요. 응원하면 모두 더 잘 배워요.' },
              ], 'cheer', 0.15),
              EB('선생님께 부탁할 일이 있어요.', '하나가 그림 도구를 놓고 왔어요. 선생님은 다른 친구를 도와주고 계세요.', [
                { id: 'wait', text: '기다렸다가 고운 말로 말해요', result: '선생님이 "말해 줘서 고마워" 하세요.', mood: '고마움' },
                { id: 'shout', text: '"선생님! 빨리요!" 소리쳐요', result: '교실이 시끄러워지고 친구들이 놀라요.', mood: '놀람', why: '차례를 기다렸다가 고운 말로 말씀드려요.' },
              ], 'wait', 0.2),
              EB('선생님이 장난을 멈추라고 하셨어요.', '쉬는 시간이 끝났는데 린이 계속 장난을 쳐요. 선생님이 "린, 이제 멈춰요" 하세요.', [
                { id: 'stop', text: '"네" 하고 멈춰요', result: '수업이 바로 시작되어 모두 즐겁게 배워요.', mood: '편안함' },
                { id: 'ignore', text: '못 들은 척 계속해요', result: '수업이 늦어지고 친구들이 기다려요.', mood: '짜증', why: '선생님 말씀을 듣고 바로 멈춰요.' },
                { id: 'talk', text: '"싫어요!" 하고 소리쳐요', result: '선생님과 친구들 마음이 속상해요.', mood: '속상함', why: '속상하면 나중에 고운 말로 말씀드려요.' },
              ], 'stop', 0.25, { conclude: '선생님과 친구의 배움을 존중하면 모두 즐겁게 배워요.' }),
            ]),
        ],
        wrap: '"우리 반 배움 약속을 하나씩 말해 볼까요?" 학생 말을 칠판에 모아 반 약속 세 가지로 정한다. 출구 1번에서 "소리쳐 물어요"를 고른 학생에게 손 들고 기다리는 까닭을 다시 묻는다.',
        exit: [
          XT('mindmap', { topic: '배움 약속', slots: ['지켜요', '하지 않아요'], cards: ['손 들고 말해요', '친구 말 끝까지 듣기', '소리쳐 물어요', '발표 친구 놀리기'] }, '배움 약속을 지킬 것과 하지 않을 것으로 나누어 보세요.', { sort: { '지켜요': ['손 들고 말해요', '친구 말 끝까지 듣기'], '하지 않아요': ['소리쳐 물어요', '발표 친구 놀리기'] } }, 0.15),
          XC('친구가 발표하다 틀리면 어떻게 할까요?', ['크게 웃어요', '"괜찮아!" 응원해요', '딴짓해요'], 1, '응원하면 친구가 다시 힘을 내요.'),
          XS('우리 반 배움 약속 가운데 꼭 지키고 싶은 것을 쓰세요.'),
        ],
        wsTitle: '우리 반 배움 약속',
        ws: [
          WT('배움을 도우면 ○, 막으면 ×를 쓰세요.', ['행동', '○ / ×'], [['손 들고 말해요', ''], ['큰 소리로 끼어들어요', ''], ['친구 발표에 박수쳐요', ''], ['돌아다니며 장난쳐요', '']], '○, ×, ○, ×'),
          WC('선생님이 "멈춰요" 하시면 어떻게 할까요?', ['계속해요', '"네" 하고 멈춰요', '소리쳐요'], '"네" 하고 멈춰요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '궁금한 것이 있으면 ___을 들고 기다려요.', '손'),
          WD('우리 반이 함께 잘 배우는 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 약속을 "선생님 때문에 지키는 것"으로만 여긴다 → 나와 친구의 배움을 지키는 약속이라는 점을 짚는다. ② 속상한 마음을 소리로 드러낸다 → 나중에 고운 말로 말씀드리는 길이 있음을 알려 준다. 특정 학생의 행동을 예로 들지 않는다.',
      }),
    ],
  });
})();
