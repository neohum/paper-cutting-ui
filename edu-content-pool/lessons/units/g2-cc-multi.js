/* 2학년 창체 법정교육 — 다문화 이해 (2차시).
 * 근거: 다문화가족지원법 제5조·같은 법 시행령 제10조의2, 교육부 지침 연 2시간(research-mandatory.md 표).
 * 2학년 범위: 숟가락·젓가락·포크·나이프, 손으로 먹는 문화가 있다는 것, 먹는 방법은 달라도 저마다 예절이 있다는 생각 / 생김새·말투를 놀리지 않고 함께 놀기.
 * 어느 나라 사람은 다 어떻다는 식으로 묶지 않으려고 손으로 먹는 문화는 '어떤 나라에서는'으로만 적는다. 1학년 단원(인사말·살구색)과 성평등 단원(가족)과 겹치지 않게 짠다.
 * 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g2-cc-multi', GRADE = 2, TITLE = '다문화 이해';
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
    flow: '2학년 다문화 이해 단원은 먹는 방법과 생김새·말투가 사람마다 다를 수 있음을 알고 다름을 놀리지 않는 마음을 기르는 2차시입니다. 1차시에는 숟가락·젓가락·포크·나이프가 하는 일을 알아보고, 어떤 나라에서는 손으로 먹는 문화가 있으며 먹는 방법마다 예절이 있다는 것을 알아봅니다. 2차시에는 피부색·머리카락·말투가 다른 친구를 놀리는 장면에서 존중하고 함께 노는 길을 고릅니다. 근거는 다문화가족지원법 제5조·같은 법 시행령 제10조의2와 교육부 지침 연 2시간입니다. 1학년 단원의 여러 말 인사를 이어 받으며, 학교폭력 예방(bully) 단원의 놀림 멈추기와 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '숟가락·젓가락·포크·손, 여러 가지 먹는 방법 알기',
        objective: '나라와 음식에 따라 먹는 방법이 다를 수 있음을 알고, 다른 먹는 방법을 존중하는 말을 할 수 있다.',
        draw: 'a paper picnic table with chopsticks, a spoon, a fork and knife, and a hand reaching for bread, children from different places smiling around it',
        banner: '먹는 방법도 여러 가지', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: '"우리는 밥을 먹을 때 무엇을 쓰나요?" 대답을 듣고(기다릴 반응: "숟가락이랑 젓가락") "다른 곳에서는 포크와 나이프를 쓰기도 하고, 어떤 나라에서는 손으로 먹기도 해요"라고 말한다. "손으로 먹으면 버릇없어요"라는 반응에는 "손으로 먹는 문화에도 지키는 예절이 있어요"라고 짚는다.',
        student: '내가 가장 잘 쓰는 식사 도구를 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 식사 도구와 하는 일', 14, 'mindmap',
            '"젓가락으로는 무엇을 할까요?" 1번에서 도구와 하는 일을 이을 때 직접 손으로 흉내 내게 한다. 2번은 우리나라에서 숟가락과 젓가락을 함께 쓴다는 점을 짚는다. 3번은 먹는 방법이 달라도 맛있게 먹고 예절을 지키는 마음은 같다는 생각을 고른다.',
            '식사 도구와 하는 일을 잇고 바른 생각을 골라요.', [
              MM('도구와 하는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '식사 도구', [{ id: 's1', label: '숟가락' }, { id: 's2', label: '젓가락' }, { id: 's3', label: '포크' }, { id: 's4', label: '나이프' }], ['국을 떠요', '반찬을 집어요', '콕 찍어 먹어요', '음식을 잘라요', '물을 마셔요'], { s1: '국을 떠요', s2: '반찬을 집어요', s3: '콕 찍어 먹어요', s4: '음식을 잘라요' }, 0.15),
              MS('먹는 방법을 도구로 먹기와 손으로 먹기로 나누어 보세요.', '먹는 방법', ['도구로 먹어요', '손으로 먹어요'], ['젓가락으로 국수 먹기', '포크로 고기 먹기', '손으로 빵 뜯기', '손으로 밥 먹는 문화'], { '도구로 먹어요': ['젓가락으로 국수 먹기', '포크로 고기 먹기'], '손으로 먹어요': ['손으로 빵 뜯기', '손으로 밥 먹는 문화'] }, 0.2),
              MP('먹는 방법에 대한 바른 생각만 골라 담아 보세요.', '바른 생각', ['방법마다 예절이 있어요', '달라도 맛있게 먹어요', '젓가락만 옳아요', '손으로 먹으면 더러워요'], ['방법마다 예절이 있어요', '달라도 맛있게 먹어요'], 0.25,
                { conclude: '먹는 방법은 달라도 맛있게 먹고 예절을 지키는 마음은 같아요.' }),
            ]),
          ACT('a2', '활동 2. 친구 집에 초대받았어요', 13, 'story',
            '"처음 보는 먹는 방법을 만나면 어떻게 할까요?" 1번은 묻고 따라 해 보는 차례다. 2번 말풍선에서 "이상해!" 대신 할 말을 고른다. 3번은 우리 먹는 방법을 친구에게 알려 주는 차례다 — 친구가 젓가락이 서툴러도 웃지 않는다고 짚는다.',
            '새로운 먹는 방법을 만났을 때의 차례를 놓고 말풍선을 채워요.', [
              SO('친구 집에서 처음 보는 먹는 방법을 만났어요. 차례대로 놓아 보세요.', '친구 집 식사', ['먼저', '다음', '마지막'], [C('k1', '어떻게 먹는지 물어요', 'sun'), C('k2', '친구를 보며 따라 해요', 'leaf'), C('k3', '"맛있어!" 말해요', 'flower')], ['k1', 'k2', 'k3'], 0.15),
              SF('준이가 할 말을 채워 보세요.', [{ id: 'b1', who: '준', motif: 'sun', label: '처음 볼 때 "___"' }, { id: 'b2', who: '준', motif: 'flower', label: '먹어 본 뒤 "___"' }], ['어떻게 먹는 거야?', '알려 줘서 고마워', '이상하게 먹네', '안 먹을래'], { b1: '어떻게 먹는 거야?', b2: '알려 줘서 고마워' }, 0.2),
              SO('젓가락이 처음인 친구에게 알려 주는 차례대로 놓아 보세요.', '젓가락 알려 주기', ['먼저', '다음', '마지막'], [C('t1', '내가 먼저 보여 줘요', 'star'), C('t2', '천천히 따라 하게 해요', 'leaf'), C('t3', '"잘하고 있어!" 해요', 'sun')], ['t1', 't2', 't3'], 0.25,
                { conclude: '모르면 묻고, 서툰 친구에게는 천천히 알려 줘요.' }),
            ]),
        ],
        wrap: '"오늘 알게 된 먹는 방법 가운데 해 보고 싶은 것은 무엇인가요?" 출구 1번에서 도구를 잘못 이은 학생과 함께 흉내 내며 다시 본다. 2번은 먹는 방법마다 예절이 있다는 점으로 정리한다.',
        exit: [
          XT('mindmap', { mode: 'match', topic: '식사 도구', slots: [{ id: 'x1', label: '젓가락' }, { id: 'x2', label: '나이프' }], cards: ['반찬을 집어요', '음식을 잘라요', '국을 마셔요'] }, '도구와 하는 일을 이어 보세요.', { match: { x1: '반찬을 집어요', x2: '음식을 잘라요' } }, 0.15),
          XC('손으로 먹는 문화를 보면 어떻게 생각하면 좋을까요?', ['더럽다고 놀려요', '그 문화의 예절이 있다고 생각해요', '못 본 척해요'], 1, '먹는 방법마다 지키는 예절이 있어요.'),
          XS('처음 보는 먹는 방법을 만나면 할 말을 쓰세요.'),
        ],
        wsTitle: '여러 가지 먹는 방법',
        ws: [
          WT('도구와 하는 일을 짝지어 쓰세요.', ['도구', '하는 일'], [['숟가락', ''], ['젓가락', ''], ['포크', ''], ['나이프', '']], '국을 떠요 / 반찬을 집어요 / 콕 찍어 먹어요 / 음식을 잘라요'),
          WC('처음 보는 먹는 방법을 만났을 때 할 말에 ○ 하세요.', ['"이상하게 먹네"', '"어떻게 먹는 거야?"', '"안 먹을래"'], '"어떻게 먹는 거야?"'),
          WB('빈칸에 알맞은 말을 쓰세요.', '먹는 방법은 달라도 저마다 ___이 있어요.', '예절'),
          WD('여러 가지 방법으로 함께 맛있게 먹는 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 우리 방법만 옳다고 여긴다 → 방법마다 예절이 있다는 점을 짚는다. ② 한 나라 사람은 모두 같은 방법으로 먹는다고 여긴다 → 같은 나라에서도 음식과 사람에 따라 다르다고 말한다. 반 학생의 가정 식사 방식을 묻거나 발표시키지 않는다.',
      }),

      LESSON(2, {
        title: '생김새·말투가 다른 친구와 함께 놀기',
        objective: '피부색·머리카락·말투가 다른 친구를 놀리지 않고, 존중하며 함께 노는 행동을 고를 수 있다.',
        draw: 'paper children with different skin tones and hair colors holding hands in a ring game on a playground, with a soft rainbow above',
        banner: '달라서 더 즐거워요', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: '"우리 반 친구들의 머리카락 모양은 모두 똑같나요?" 대답을 듣고 "사람마다 피부색도, 머리카락도, 말투도 달라요"라고 말한다. "나와 다르면 놀려도 돼요"라는 반응에는 "다른 점은 놀릴 거리가 아니라 그 사람의 모습이에요"라고 짚는다.',
        student: '짝과 내가 다른 점을 하나, 같은 점을 하나 찾아 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 놀리는 말과 함께하는 말', 14, 'emotion',
            '"이 말을 들은 친구의 마음 날씨는 어떨까요?" 1번에서 "말투가 이상해"를 장난으로 여기는 학생에게 들은 친구의 마음을 떠올리게 한다. 2번은 함께 놀자는 말을 고른다. 3번은 장면과 마음을 잇는다.',
            '말을 나누고 들은 친구의 마음을 이어요.', [
              ES('말을 함께하는 말과 놀리는 말로 나누어 보세요.', ['함께하는 말', '놀리는 말'], ['"같이 그네 타자"', '"말투가 이상해"', '"네 생각은 어때?"', '"머리 색 웃겨"'], { '함께하는 말': ['"같이 그네 타자"', '"네 생각은 어때?"'], '놀리는 말': ['"말투가 이상해"', '"머리 색 웃겨"'] }, 0.15),
              EP('새로 온 친구와 놀고 싶어요. 할 말만 골라 담아 보세요.', '같이 놀자는 말', ['"이 놀이 같이 할래?"', '"규칙 알려 줄게"', '"너는 구경해"', '"말 못 하면 빠져"'], ['"이 놀이 같이 할래?"', '"규칙 알려 줄게"'], 0.2),
              EM('장면과 친구의 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 's1', label: '말투를 따라 하며 웃었어요.' }, { id: 's2', label: '같이 놀자고 손을 내밀었어요.' }, { id: 's3', label: '피부색으로 놀렸어요.' }], ['속상함', '기쁨', '화남', '편안함'], { s1: '속상함', s2: '기쁨', s3: '화남' }, 0.25,
                { conclude: '생김새와 말투는 놀릴 거리가 아니에요. 함께하자고 말해요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"어떤 길을 고르면 모두 즐겁게 놀까요?" 결과 칸을 읽게 한다. 1번은 말투를 흉내 내는 장면, 2번은 팀을 나눌 때 한 친구를 빼려는 장면, 3번은 친구가 놀림을 받아 속상해할 때 곁에 가서 말을 거는 장면이다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('친구들이 린의 말투를 따라 해요.', '린이 발표하자 몇몇 친구가 린의 말투를 따라 하며 킥킥거려요.', [
                { id: 'stop', text: '"따라 하지 마" 말해요', result: '흉내가 멈추고 린이 웃어요.', mood: '고마움' },
                { id: 'join', text: '같이 따라 해요', result: '린이 다음부터 말을 하지 않아요.', mood: '슬픔', why: '말투를 흉내 내면 친구가 말하기를 겁내요.' },
              ], 'stop', 0.15),
              EB('편을 나누는데 한 친구를 빼려고 해요.', '피구 편을 나누는데 한 아이가 "쟤는 생김새가 달라서 싫어" 해요.', [
                { id: 'agree', text: '"그래, 빼자" 해요', result: '친구가 혼자 벤치에 앉아요.', mood: '외로움', why: '생김새 때문에 놀이에서 빼면 안 돼요.' },
                { id: 'with', text: '"우리 편 하자!" 해요', result: '모두 함께 신나게 피구를 해요.', mood: '신남' },
                { id: 'quiet', text: '아무 말도 안 해요', result: '친구가 놀이에 끼지 못해요.', mood: '속상함', why: '함께하자고 말하거나 선생님께 알려요.' },
              ], 'with', 0.2),
              EB('놀림을 받은 하나가 혼자 앉아 있어요.', '머리카락 색으로 놀림을 받은 하나가 쉬는 시간에 혼자 앉아 있어요.', [
                { id: 'near', text: '곁에 가서 "괜찮아?" 물어요', result: '하나가 조금씩 웃으며 이야기해요.', mood: '편안함' },
                { id: 'leave', text: '모른 척 놀러 가요', result: '하나가 계속 혼자 있어요.', mood: '외로움', why: '속상한 친구 곁에 가서 말을 걸어요.' },
              ], 'near', 0.25, { conclude: '다름을 놀리지 않고, 함께하자고 손을 내밀어요.' }),
            ]),
        ],
        wrap: '"오늘 고른 함께하는 말을 짝에게 해 볼까요?" 출구 1번에서 "말투가 이상해"를 함께하는 말에 둔 학생에게 들은 친구의 마음을 다시 떠올리게 한다. 2번은 놀이에서 빼지 않는 약속으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'sort', slots: ['함께하는 말', '놀리는 말'], cards: ['"같이 하자"', '"말투 웃겨"', '"규칙 알려 줄게"', '"생김새 이상해"'], weather: false }, '말을 함께하는 말과 놀리는 말로 나누어 보세요.', { sort: { '함께하는 말': ['"같이 하자"', '"규칙 알려 줄게"'], '놀리는 말': ['"말투 웃겨"', '"생김새 이상해"'] } }, 0.15),
          XC('생김새가 다르다고 놀이에서 빼려 하면 어떻게 할까요?', ['같이 빼요', '"같이 하자" 말해요', '모른 척해요'], 1, '생김새 때문에 놀이에서 빼면 안 돼요.'),
          XS('놀림을 받은 친구에게 해 주고 싶은 말을 쓰세요.'),
        ],
        wsTitle: '달라도 함께',
        ws: [
          WT('함께하는 말이면 ○, 놀리는 말이면 ×를 쓰세요.', ['말', '○ / ×'], [['"같이 그네 타자"', ''], ['"말투가 이상해"', ''], ['"규칙 알려 줄게"', ''], ['"머리 색 웃겨"', '']], '○, ×, ○, ×'),
          WC('놀림을 받은 친구가 혼자 있을 때 할 행동에 ○ 하세요.', ['모른 척해요', '곁에 가서 "괜찮아?"', '같이 놀려요'], '곁에 가서 "괜찮아?"'),
          WB('빈칸에 알맞은 말을 쓰세요.', '생김새와 말투는 ___ 거리가 아니에요.', '놀릴'),
          WD('생김새가 다른 친구들이 함께 노는 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 다름을 우스운 것으로 여긴다 → 사람마다 다른 모습이 당연하다고 짚는다. ② 놀리지 않으면 할 일을 다 했다고 여긴다 → 함께하자고 손 내미는 행동까지 연습한다. 반 학생의 생김새·말투·가족 배경을 예로 들지 않는다.',
      }),
    ],
  });
})();
