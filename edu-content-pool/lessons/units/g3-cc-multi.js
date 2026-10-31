/* 3학년 창체 법정교육 — 다문화 이해 (2차시).
 * 근거: 다문화가족지원법 제5조·같은 법 시행령 제10조의2, 교육부 지침 연 2시간(research-mandatory.md 표).
 * 3학년 범위: 우리 설날·추석과 중국 춘절·베트남 뗏·미국 추수감사절을 견주어 같은 점·다른 점 찾기, "그 나라 사람은 다 ~해" 같은 편견의 말을 존중의 말로 바꾸기.
 * 명절 날짜 숫자는 쓰지 않는다. 명절 설명은 널리 알려진 것(가족이 모임, 새해 인사, 수확에 감사)만 쓴다.
 * 1학년(인사말·다름 존중)·2학년(식사 문화·놀리지 않기)과 겹치지 않게 하고, 가족 모습은 성평등 단원(g3-cc-gender)이 다룬다. 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g3-cc-multi', GRADE = 3, TITLE = '다문화 이해';
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
    flow: '3학년 다문화 이해 단원은 나라마다 다른 문화 속에 같은 마음이 있음을 찾고, 한 사람을 보고 그 나라 사람 모두를 판단하는 편견의 말을 알아차리는 2차시입니다. 1차시에는 우리 설날·추석과 중국 춘절, 베트남 뗏, 미국 추수감사절을 견주며 가족이 모이고 새해를 맞거나 수확에 감사하는 같은 점과 음식·놀이의 다른 점을 나눕니다. 2차시에는 "그 나라 사람은 다 ~해" 같은 편견의 말을 가려내고, 사람마다 다르다는 존중의 말로 바꾸며 갈림길에서 행동을 고릅니다. 근거는 다문화가족지원법 제5조·같은 법 시행령 제10조의2와 교육부 지침 연 2시간입니다. 가족의 여러 모습은 성평등교육(gender) 단원이 다루며, 사회과 여러 지역의 문화 학습과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '설날·추석과 다른 나라 명절 견주어 보기',
        objective: '우리 명절과 다른 나라 명절을 견주어 같은 점과 다른 점을 말할 수 있다.',
        draw: 'paper families from different cultures celebrating holidays side by side: a family bowing at new year, a family with red lanterns, a family sharing a harvest dinner',
        banner: '명절은 달라도 마음은 같아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: '"설날에는 어떤 일을 하나요?" 두세 명의 대답을 듣고(기다릴 반응: "세배해요", "떡국 먹어요") "다른 나라에도 새해를 맞이하거나 수확에 감사하는 명절이 있어요"라고 말한다. "우리 명절만 진짜 명절이에요"라는 반응에는 "그 나라 친구에게는 그 명절이 가장 반가운 날이에요"라고 짚는다.',
        student: '내가 좋아하는 명절과 그날 하는 일을 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 명절과 하는 일 잇기', 14, 'mindmap',
            '"이 명절에는 무엇을 할까요?" 1번은 우리 명절과 하는 일을 잇는다. 2번은 다른 나라 명절이 새해를 맞는 명절인지 수확에 감사하는 명절인지 나눈다 — 춘절과 뗏은 새해를 맞는 명절, 추수감사절은 거둔 것에 감사하는 명절이라고 짚는다. 3번에서 우리 명절과 닮은 명절을 잇는다.',
            '명절과 그날 하는 일을 잇고, 명절을 나누어요.', [
              MM('우리 명절과 그날 하는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '우리 명절', [{ id: 's1', label: '설날' }, { id: 's2', label: '추석' }], ['세배를 해요', '송편을 빚어요', '눈사람만 만들어요'], { s1: '세배를 해요', s2: '송편을 빚어요' }, 0.15),
              MS('명절을 새해를 맞는 명절과 수확에 감사하는 명절로 나누어 보세요.', '여러 나라 명절', ['새해를 맞아요', '수확에 감사해요'], ['우리 설날', '중국 춘절', '베트남 뗏', '우리 추석', '미국 추수감사절'], { '새해를 맞아요': ['우리 설날', '중국 춘절', '베트남 뗏'], '수확에 감사해요': ['우리 추석', '미국 추수감사절'] }, 0.2),
              MM('우리 명절과 닮은 다른 나라 명절을 이어 보세요. 맞지 않는 카드는 남겨요.', '닮은 명절', [{ id: 'm1', label: '설날처럼 새해를 맞아요' }, { id: 'm2', label: '추석처럼 수확에 감사해요' }], ['중국 춘절', '미국 추수감사절', '생일'], { m1: '중국 춘절', m2: '미국 추수감사절' }, 0.25,
                { conclude: '나라마다 명절 이름은 달라도 새해를 반기고 감사하는 마음은 닮았어요.' }),
            ]),
          ACT('a2', '활동 2. 같은 점과 다른 점 나누기', 13, 'mindmap',
            '"설날과 뗏은 무엇이 같고 무엇이 다를까요?" 1번에서 같은 점(가족이 모여요, 새해 인사를 해요)과 다른 점(먹는 음식, 부르는 이름)을 나눈다. 2번은 명절에 담긴 같은 마음을 고른다. 3번은 다른 나라 명절을 처음 들었을 때의 말을 고르며 "신기하다, 더 알려 줘"처럼 묻는 태도를 익힌다.',
            '명절의 같은 점과 다른 점을 나누고, 존중하는 말을 골라요.', [
              MS('우리 설날과 베트남 뗏을 견주어 나누어 보세요.', '설날과 뗏', ['같은 점', '다른 점'], ['가족이 모여요', '새해 인사를 해요', '먹는 음식', '부르는 이름'], { '같은 점': ['가족이 모여요', '새해 인사를 해요'], '다른 점': ['먹는 음식', '부르는 이름'] }, 0.15),
              MP('여러 나라 명절에 담긴 같은 마음만 골라 담아 보세요.', '명절의 마음', ['가족이 함께해요', '감사하는 마음', '서로 복을 빌어요', '혼자 지내요'], ['가족이 함께해요', '감사하는 마음', '서로 복을 빌어요'], 0.2),
              MP('친구가 처음 듣는 나라 명절을 소개해요. 할 말만 골라 담아 보세요.', '소개를 들을 때', ['"신기하다, 더 알려 줘"', '"그날 뭐 먹어?"', '"이상한 명절이네"', '"우리 게 더 좋아"'], ['"신기하다, 더 알려 줘"', '"그날 뭐 먹어?"'], 0.25,
                { conclude: '다른 문화는 견주어 순위를 매기는 것이 아니라 궁금해하며 배우는 거예요.' }),
            ]),
        ],
        wrap: '"오늘 알게 된 다른 나라 명절 하나를 골라 우리 명절과 같은 점을 말해 볼까요?" 출구 1번에서 춘절을 수확 명절에 둔 학생과 함께 다시 본다. 2번은 순위를 매기지 않는 태도로 정리한다.',
        exit: [
          XT('mindmap', { topic: '명절 나누기', slots: ['새해를 맞아요', '수확에 감사해요'], cards: ['베트남 뗏', '우리 추석', '중국 춘절', '미국 추수감사절'] }, '명절을 알맞게 나누어 보세요.', { sort: { '새해를 맞아요': ['베트남 뗏', '중국 춘절'], '수확에 감사해요': ['우리 추석', '미국 추수감사절'] } }, 0.15),
          XC('다른 나라 명절을 처음 들었을 때 알맞은 말은 무엇일까요?', ['"우리 게 더 좋아"', '"신기하다, 더 알려 줘"', '"이상해"'], 1, '궁금해하며 물으면 서로의 문화를 배울 수 있어요.'),
          XS('다른 나라 명절과 우리 명절의 같은 점을 한 가지 쓰세요.'),
        ],
        wsTitle: '여러 나라 명절',
        ws: [
          WT('명절이 어떤 명절인지 쓰세요.', ['명절', '새해 / 수확'], [['중국 춘절', ''], ['베트남 뗏', ''], ['미국 추수감사절', ''], ['우리 추석', '']], '새해 / 새해 / 수확 / 수확'),
          WC('설날과 베트남 뗏의 같은 점에 ○ 하세요.', ['먹는 음식', '가족이 모여요', '부르는 이름'], '가족이 모여요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '나라마다 명절 이름은 달라도 감사하는 ___은 닮았어요.', '마음'),
          WS('가 보고 싶은 다른 나라 명절과 그 까닭을 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 다른 나라 명절을 우리 명절과 견주어 "누가 더 좋은지" 따진다 → 같은 마음을 찾는 활동임을 짚는다. ② 한 나라 사람은 모두 그 명절을 똑같이 보낸다고 여긴다 → 집집마다 보내는 방법이 다르다고 말한다. 명절 날짜는 해마다 달라질 수 있어 숫자로 다루지 않는다. 반의 다문화 가정 학생에게 소개를 시키지 않는다.',
      }),

      LESSON(2, {
        title: '"그 나라 사람은 다 ~해"를 존중의 말로 바꾸기',
        objective: '한 사람을 보고 그 나라 사람 모두를 판단하는 편견의 말을 알아차리고, 존중의 말로 바꿀 수 있다.',
        draw: 'paper children each holding a different colorful mask that turns into their real smiling face, with speech bubbles changing from gray to bright',
        banner: '사람마다 달라요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: '"\'3학년은 다 키가 커\'라는 말이 맞을까요?" 대답을 듣고(기다릴 반응: "아니요, 사람마다 달라요") "한 사람이나 몇 사람을 보고 모두가 그렇다고 말하는 것을 편견이라고 해요"라고 말한다. "많이 그러니까 다 그런 거예요"라는 반응에는 "우리 반 친구들도 모두 같나요?"라고 되묻는다.',
        student: '"우리 반은 다 ~해"라는 말이 틀린 까닭을 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 편견의 말과 존중의 말', 14, 'emotion',
            '"이 말은 한 사람을 보고 모두를 판단하고 있나요?" 1번에서 "그 나라 사람은 다 매운 거 잘 먹지?"를 칭찬으로 여기는 학생에게 "매운 음식을 못 먹는 그 나라 사람은 어떤 마음일까요?"라고 묻는다. 2번은 편견의 말을 존중의 말로 바꾸는 짝을 잇는다. 3번은 편견의 말을 들은 친구의 마음을 잇는다.',
            '말을 편견의 말과 존중의 말로 나누고 바꾸어요.', [
              ES('말을 편견의 말과 존중의 말로 나누어 보세요.', ['편견의 말', '존중의 말'], ['"그 나라 사람은 다 느려"', '"너는 뭘 좋아해?"', '"거기 사람들은 다 가난해"', '"사람마다 달라"'], { '편견의 말': ['"그 나라 사람은 다 느려"', '"거기 사람들은 다 가난해"'], '존중의 말': ['"너는 뭘 좋아해?"', '"사람마다 달라"'] }, 0.15),
              EM('편견의 말과 바꿀 존중의 말을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 's1', label: '"너네 나라 사람은 다 매운 거 잘 먹지?"' }, { id: 's2', label: '"외국에서 왔으니 공부 못하겠다."' }, { id: 's3', label: '"그 나라 말만 쓰지?"' }], ['"매운 거 좋아해?"', '"같이 공부하자"', '"어떤 말 쓸 줄 알아?"', '"다 그렇구나"'], { s1: '"매운 거 좋아해?"', s2: '"같이 공부하자"', s3: '"어떤 말 쓸 줄 알아?"' }, 0.2),
              EM('들은 말과 친구의 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'm1', label: '"너희는 다 그렇잖아."' }, { id: 'm2', label: '"너는 어떻게 생각해?"' }, { id: 'm3', label: '"넌 우리랑 달라서 안 돼."' }], ['속상함', '편안함', '화남', '신남'], { m1: '속상함', m2: '편안함', m3: '화남' }, 0.25,
                { conclude: '"다 그래" 대신 "너는 어때?" 하고 물으면 그 사람을 있는 그대로 알 수 있어요.' }),
            ]),
          ACT('a2', '활동 2. 편견을 만났을 때 갈림길', 13, 'emotion',
            '"어떤 길을 고르면 모두 존중받을까요?" 결과 칸을 읽고 까닭을 짝에게 말하게 한다. 1번은 모둠 정하기, 2번은 뉴스 한 장면을 보고 생긴 편견, 3번은 친구가 편견의 말을 하는 자리에서 내가 할 말을 고른다. 다른 친구를 몰아세우지 않고 말을 바꾸어 주는 쪽이 좋다는 점을 짚는다.',
            '장면에서 존중하는 행동을 고르고 결과를 봐요.', [
              EB('모둠을 정하는데 한 친구가 린을 빼려고 해요.', '과학 모둠을 정해요. 한 친구가 "린은 외국에서 와서 잘 모를 거야" 하며 다른 모둠으로 보내려 해요.', [
                { id: 'ask', text: '"린, 같이 할래?" 물어요', result: '린이 실험 아이디어를 내서 모둠이 신나요.', mood: '신남' },
                { id: 'agree', text: '"그래, 다른 데 가" 해요', result: '린이 혼자 남아 고개를 숙여요.', mood: '외로움', why: '어디서 왔는지로 그 사람의 실력을 판단하지 않아요.' },
              ], 'ask', 0.15),
              EB('뉴스에서 본 한 장면으로 말해요.', '뉴스에서 어느 나라의 홍수 장면을 본 준이가 "그 나라는 다 물에 잠겨 있대" 해요.', [
                { id: 'fix', text: '"그건 한 지역 이야기야" 해요', result: '준이가 "아, 다 그런 건 아니구나" 해요.', mood: '편안함' },
                { id: 'more', text: '"맞아, 거긴 다 그래" 해요', result: '그 나라에서 온 친구가 서운해해요.', mood: '속상함', why: '한 장면으로 나라 전체를 판단하지 않아요.' },
              ], 'fix', 0.2),
              EB('친구가 하나에게 편견의 말을 해요.', '쉬는 시간에 한 친구가 하나에게 "너희 나라 사람은 다 시끄럽잖아" 해요. 하나가 굳은 얼굴이 돼요.', [
                { id: 'laugh', text: '같이 웃어요', result: '하나가 자리를 떠나요.', mood: '슬픔', why: '웃음은 편견의 말을 더 키워요.' },
                { id: 'say', text: '"사람마다 달라" 말해요', result: '친구가 머쓱해하며 "미안" 해요.', mood: '고마움' },
                { id: 'fight', text: '친구에게 욕을 해요', result: '두 친구가 싸우게 돼요.', mood: '화남', why: '거친 말 대신 차분히 존중의 말을 해요.' },
              ], 'say', 0.25, { conclude: '편견의 말을 들으면 차분히 "사람마다 달라" 하고 바꾸어 말해요.' }),
            ]),
        ],
        wrap: '"오늘 바꾼 존중의 말 가운데 꼭 기억하고 싶은 말은 무엇인가요?" 출구 1번에서 편견의 말을 존중의 말에 둔 학생에게 "모두"라는 말이 들어 있는지 찾아보게 한다. 2번은 차분히 바꾸어 말하는 행동으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'sort', slots: ['편견의 말', '존중의 말'], cards: ['"거기 애들은 다 그래"', '"너는 어때?"', '"외국인은 다 영어 해"', '"알려 줄래?"'], weather: false }, '말을 편견의 말과 존중의 말로 나누어 보세요.', { sort: { '편견의 말': ['"거기 애들은 다 그래"', '"외국인은 다 영어 해"'], '존중의 말': ['"너는 어때?"', '"알려 줄래?"'] } }, 0.15),
          XC('친구가 "그 나라 사람은 다 ~해"라고 말하면 어떻게 할까요?', ['같이 웃어요', '차분히 "사람마다 달라" 말해요', '욕을 해요'], 1, '편견의 말은 차분히 존중의 말로 바꾸어 줘요.'),
          XS('편견의 말 하나를 골라 존중의 말로 바꾸어 쓰세요.'),
        ],
        wsTitle: '편견의 말 바꾸기',
        ws: [
          WT('편견의 말을 존중의 말로 바꿔 쓰세요.', ['편견의 말', '존중의 말'], [['"그 나라 사람은 다 느려"', ''], ['"외국에서 왔으니 공부 못하겠다"', ''], ['"너희는 다 그렇잖아"', '']], '예) 사람마다 달라 / 같이 공부하자 / 너는 어떻게 생각해?'),
          WC('편견의 말에 ○ 하세요.', ['"너는 뭘 좋아해?"', '"거기 사람들은 다 가난해"', '"같이 하자"'], '"거기 사람들은 다 가난해"'),
          WB('빈칸에 알맞은 말을 쓰세요.', '한 사람을 보고 모두가 그렇다고 말하는 것을 ___이라고 해요.', '편견'),
          WS('편견의 말을 들었을 때 내가 할 말을 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 좋은 뜻의 편견("다 잘하지?")은 괜찮다고 여긴다 → 좋은 말이라도 모두를 한 모습으로 묶으면 편견이라는 점을 짚는다. ② 편견의 말을 한 친구를 몰아세운다 → 사람이 아니라 말을 바꾸는 데 초점을 둔다. 실제 나라 이름을 붙인 편견의 말은 쓰지 않았고, 수업에서도 특정 나라를 예로 들지 않게 한다.',
      }),
    ],
  });
})();
