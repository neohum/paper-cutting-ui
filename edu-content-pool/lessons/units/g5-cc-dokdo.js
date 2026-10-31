/* 5학년 창체 계기교육 — 독도교육(학년마다 10차시). 고학년: 삼국사기 우산국·세종실록 지리지·옛 지도·안용복·대한제국 칙령 제41호·독도의용수비대와 독도의 가치를 기록으로 읽는다.
 * 근거: 교육부 「독도교육 활성화 계획」(교과·창체 통합 연간 10시간 이상 권장, 독도교육주간). 초등 내용 체계: 자연환경·지리적 특성·역사·가치.
 * 사실(연도·거리·문서 이름)은 외교부 독도 누리집·동북아역사재단 독도 자료의 서술만 쓴다. 10월 25일 독도의 날은 법정기념일이 아니다(독도교육주간 연계 시기의 예).
 * 정치적 중립: 자료와 근거로 말하고, 특정 국가의 국민 전체를 비난하는 표현은 쓰지 않는다. 인물 이름은 가명이다(역사 인물 제외). */
(function () {
  const GRADE = 5;
  const ID = `g${GRADE}-cc-dokdo`;
  const UNIT = `g${GRADE}-창체-dokdo`;
  const TITLE = '독도교육 — 기록으로 만나는 독도 역사';
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'wave', y: 220 },
    { motif: 'mountain', x: 200, y: 196, color: 'mint', s: 0.7 }, { motif: 'mountain', x: 290, y: 200, color: 'sky', s: 0.6 },
    { motif: 'bird', x: 340, y: 96 }, ...extra,
    { motif: 'text', x: 240, y: 132, text, size: 22 },
  ] });
  // 카드 교구 문항 틀
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, cards, slots, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', cards, slots }, target: { fill }, difficulty: d, ...more });
  const TO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { cards, axis: ['옛날', '오늘날'] }, target: { order }, difficulty: d, ...more });
  const TM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards, axis: ['옛날', '오늘날'] }, target: { match }, difficulty: d, ...more });
  const TS = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, axis: ['옛날', '오늘날'] }, target: { sort }, difficulty: d, ...more });
  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 위치 관계만 살린다)
  // 서울 [2,5], 독도 [5,5](서울과 같은 줄의 동쪽 바다), 울릉도 [4,4](독도의 북서쪽 — 독도는 울릉도의 남동쪽), 제주도 [1,8], 백두산 [2,0]
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const P = {
    seoul: { name: '서울', icon: 'capital', at: [2, 5] }, busan: { name: '부산', icon: 'port', at: [3, 7] },
    jeju: { name: '제주도', icon: 'island', at: [1, 8] }, baekdu: { name: '백두산', icon: 'mountain', at: [2, 0] },
    ulleung: { name: '울릉도', icon: 'island', at: [4, 4] }, dokdo: { name: '독도', icon: 'island', at: [5, 5] },
    pohang: { name: '포항', icon: 'port', at: [3, 6] },
  };
  // 활동지 전용 작은 지도(6×4) — 9줄 지도는 인쇄 글자가 작다. 위치 관계(북·남·동쪽 바다)만 살린다
  const KORW_LAND = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3]];
  const KORW_SEA = [[0, 2], [0, 3], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3], [1, 3]];
  const KORW = (places, more) => Object.assign({ grid: [6, 4], regions: [{ name: '우리나라 땅', cells: KORW_LAND, color: 'mint' }], regionNames: false, sea: KORW_SEA, places }, more || {});
  const PW = {
    seoul: { name: '서울', icon: 'capital', at: [2, 1] }, busan: { name: '부산', icon: 'port', at: [3, 3] },
    jeju: { name: '제주도', icon: 'island', at: [1, 3] }, ulleung: { name: '울릉도', icon: 'island', at: [4, 1] }, dokdo: { name: '독도', icon: 'island', at: [5, 2] },
  };
  // 독도 확대 칸 지도(서쪽 서도, 동쪽 동도 — 칸 자리는 위치 관계만 살린다)
  const DK_SEO = [[1, 1], [1, 2], [2, 2]];
  const DK_DONG = [[3, 1], [4, 1], [4, 2]];
  const DK_SEA = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) if (![...DK_SEO, ...DK_DONG].some(([x, y]) => x === c && y === r)) DK_SEA.push([c, r]);
  const DK = (places, more) => Object.assign({ grid: [6, 4], title: '독도 확대 지도', regions: [{ name: '서도', cells: DK_SEO, color: 'mint' }, { name: '동도', cells: DK_DONG, color: 'peach' }], sea: DK_SEA, places }, more || {});
  const MI = (prompt, toolOptions, target, d, more) => ({ prompt, toolOptions, target, difficulty: d, ...more });
  const MQ = (prompt, toolOptions, q, choices, pick, d, more) => ({ prompt, toolOptions: Object.assign({}, toolOptions, { readOnly: true, ask: { q, choices } }), target: { pick }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MAP_LV = { easy: { names: true, readout: true }, base: {}, challenge: {} };
  const DIFF = {
    easy: '카드를 놓거나 보기를 고르면 맞는지 바로 알려 주고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모두 마친 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 틀린 카드를 가려내요.',
  };
  // 도입 6 + 전개 27(14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ minutes: i === 0 ? 14 : 13, levels: a.tool === 'map' ? MAP_LV : a.tool === 'emotion' ? LVB : LV, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const XC = (tool, options, prompt, target, d) => Object.assign({ type: 'tool', tool, options }, tool === 'map' || options.mode === 'branch' ? {} : { state: { at: {} } }, { prompt, target, difficulty: d });

  // 옛 이름을 붙인 칸 지도 장소
  const P_USAN = { name: '우산도(독도)', icon: 'island', at: [5, 5] };
  const P_MUREUNG = { name: '무릉(울릉도)', icon: 'island', at: [4, 4] };
  // 역사 카드(외교부 독도 누리집·동북아역사재단 독도 자료의 서술)
  const H = {
    isabu: { id: 'isabu', text: '이사부, 우산국을 신라에', back: '512년' },
    sejong: { id: 'sejong', text: '세종실록 지리지에 두 섬', back: '1454년' },
    ahn: { id: 'ahn', text: '안용복, 일본에 건너감', back: '1693년' },
    edict: { id: 'edict', text: '칙령 제41호, 석도 관할', back: '1900년' },
    guard: { id: 'guard', text: '독도의용수비대 활동', back: '광복 뒤' },
  };

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '5학년 독도교육은 옛 기록과 인물을 따라 독도가 오래전부터 우리 역사 속에 있었음을 확인하는 10차시입니다. 1~4차시는 『삼국사기』의 우산국 이야기(512년 이사부), 『세종실록』 「지리지」(1454년)의 "맑은 날 바라볼 수 있다"는 기록, 옛 지도에 그려진 우산도, 조선 숙종 때 일본에 건너가 울릉도·우산도를 말한 안용복을 차례로 읽습니다. 5~6차시는 1900년 10월 25일 대한제국 칙령 제41호(울도군이 석도를 관할)와 독도의 날의 유래를 알고, 지금까지의 기록을 시간 띠에 놓습니다. 7~9차시는 광복 뒤 독도를 지킨 독도의용수비대, 독도의 영토·생태·자원·안보 가치, 역사 신문 만들기로 넓히고, 10차시에 시간 띠와 가치로 묶습니다. 사회 5학년 역사 단원과 묶어 운영할 수 있고, 교육부는 교과와 창체를 통합해 연간 10시간 이상 운영을 권장합니다(독도의 날은 법정기념일이 아니며, 학교 독도교육주간에 맞춰 운영할 수 있다 — 시수 인정은 학교 결정). 연도·문서 이름은 외교부·동북아역사재단 자료의 서술만 쓰고, 다른 나라 사람 전체를 탓하는 말 없이 기록과 근거로 말하게 이끕니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '삼국사기 속 우산국과 이사부 읽기',
        objective: '『삼국사기』에 실린 512년 신라 이사부의 우산국 복속 이야기를 읽고, 우산국이 울릉도와 독도를 아우른 나라였음을 말할 수 있다.',
        draw: 'an ancient paper warship with wooden lion figures on deck sailing toward a green island, with a scroll of old writing in the sky',
        banner: '우산국과 이사부', extra: [{ motif: 'star', x: 70, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"아주 먼 옛날 울릉도에는 \'우산국\'이라는 작은 나라가 있었대요." 대답을 듣고(기다릴 반응: "처음 들어요") 『삼국사기』에 신라 지증왕 때인 512년 이사부가 우산국을 신라에 속하게 했다는 기록이 있다고 알려 준다. 시연 단추로 카드가 시간 띠에 놓이는 모습을 보여 준다. "우산국은 비 오는 나라예요"라는 대답에는 이름의 \'우산\'은 쓰는 우산과 다른 말이라고 웃으며 바로잡는다.',
          student: '옛날 나라 이름을 아는 대로 말해 보고, 그 나라를 어디에서 알게 되었는지 짝에게 말해 봐요.',
          demo: { tool: 'timeline', options: { cards: [H.isabu, H.edict], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['isabu', 'edict'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 우산국 이야기 차례 놓기', tool: 'story',
            teacher: '"이사부는 어떤 꾀를 냈을까요?" 『삼국사기』에는 나무로 만든 사자를 배에 싣고 가 우산국 사람들을 항복하게 했다는 이야기가 실려 있다고 들려준다. 이야기 차례를 놓은 뒤, 이것이 역사책에 실린 이야기라는 점을 짚는다.',
            task: '『삼국사기』에 실린 우산국 이야기를 차례대로 놓아요.',
            items: [
              SO('우산국 이야기를 차례대로 놓아 보세요.', '우산국 이야기', ['처음', '가운데', '끝'], [{ id: 'lion', text: '나무 사자를 배에 실어요', motif: 'star' }, { id: 'usan', text: '울릉도에 우산국이 있어요', motif: 'house' }, { id: 'join', text: '우산국이 신라에 속해요', motif: 'sun' }], ['usan', 'lion', 'join'], 0.2),
              SO('기록이 남기까지 차례대로 놓아 보세요.', '기록이 남기까지', 3, [{ id: 'book', text: '삼국사기에 기록돼요', motif: 'leaf' }, { id: 'event', text: '512년 이사부가 우산국으로', motif: 'wave' }, { id: 'read', text: '오늘 우리가 기록을 읽어요', motif: 'sun' }], ['event', 'book', 'read'], 0.2),
              SF('우산국 이야기의 빈칸을 채워 보세요.', ['이사부', '세종', '신라', '고려'], [{ id: 'b1', who: '기록', motif: 'leaf', label: '512년 ___ 장군이 우산국으로 갔어요.' }, { id: 'b2', who: '기록', motif: 'sun', label: '우산국은 ___에 속하게 되었어요.' }], { b1: '이사부', b2: '신라' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우산국과 기록 잇기', tool: 'mindmap',
            teacher: '"우산국이 다스린 곳은 어디였을까요?" 우산국은 울릉도를 중심으로 둘레 섬(독도)을 아우른 나라로 본다는 것이 우리 정부의 설명이라고 알려 준다. 기록과 짐작을 가르는 질문을 함께 던진다.',
            task: '우산국과 관련된 낱말을 잇고, 기록으로 알 수 있는 것을 골라요.',
            items: [
              MM('낱말과 뜻을 이어 보세요.', '우산국 낱말', [{ id: 'u', label: '우산국' }, { id: 's', label: '『삼국사기』' }, { id: 'i', label: '이사부' }], ['울릉도에 있던 옛 나라', '고려 때 쓴 삼국의 역사책', '신라의 장군', '조선의 임금'], { u: '울릉도에 있던 옛 나라', s: '고려 때 쓴 삼국의 역사책', i: '신라의 장군' }, 0.25),
              MP('『삼국사기』 기록으로 알 수 있는 것만 골라 보세요.', '기록으로 알 수 있어요', ['512년 우산국이 신라에 속함', '이사부가 우산국으로 감', '우산국 사람 수', '우산국 왕의 얼굴'], ['512년 우산국이 신라에 속함', '이사부가 우산국으로 감'], 0.25),
              MS('기록에 나온 것과 짐작한 것으로 나누어 보세요.', '기록일까 짐작일까', ['기록에 나와요', '짐작이에요'], ['우산국이 신라에 속함', '나무 사자 이야기', '이사부가 키가 컸을 것', '우산국에 큰 성이 있었을 것'], { '기록에 나와요': ['우산국이 신라에 속함', '나무 사자 이야기'], '짐작이에요': ['이사부가 키가 컸을 것', '우산국에 큰 성이 있었을 것'] }, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"우산국 이야기는 어느 책에 실려 있었나요?" 출구 1번에서 \'짐작\'을 기록으로 둔 학생에게는 "책에 그렇게 적혀 있었나요?"라고 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '우산국 정리', slots: [{ id: 'y', label: '우산국이 신라에 속한 해' }, { id: 'p', label: '우산국으로 간 장군' }], cards: ['512년', '이사부', '1900년'] }, '우산국 이야기의 빈자리에 알맞은 카드를 이어 보세요.', { match: { y: '512년', p: '이사부' } }, 0.2),
            { type: 'choice', prompt: '우산국 이야기가 실린 역사책은 무엇인가요?', options: ['『삼국사기』', '『세종실록』', '『동의보감』'], answer: 0, difficulty: 0.15, explain: '『삼국사기』에 512년 이사부가 우산국을 신라에 속하게 한 기록이 있어요.' },
            MOOD,
          ],
        },
        wsTitle: '우산국과 이사부',
        ws: [
          { type: 'table', prompt: '우산국 이야기를 정리하세요.', columns: ['언제', '누가', '무엇을', '어느 책'], cells: [['', '', '', '']], answer: '512년 / 신라 이사부 / 우산국을 신라에 속하게 함 / 『삼국사기』' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '우산국은 ___도를 중심으로 한 옛 나라였다.', answer: '울릉' },
          { type: 'choice', prompt: '기록에 나온 것에 ○ 하세요.', options: ['우산국이 신라에 속함', '이사부의 키'], answer: '우산국이 신라에 속함' },
          { type: 'short', prompt: '역사를 말할 때 기록과 짐작을 나누어야 하는 까닭을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 이야기와 기록을 같은 것으로 여긴다 → 어느 책에 실렸는지 함께 말하게 한다. ② 짐작을 사실처럼 덧붙인다 → "책에 그렇게 적혀 있나요?"를 묻는다. ③ 우산국을 독도 하나로 여긴다 → 울릉도를 중심으로 한 나라임을 짚는다.',
      }),

      LESSON(2, {
        title: '세종실록 지리지의 두 섬 기록 읽기',
        objective: '『세종실록』 「지리지」에 우산(독도)과 무릉(울릉도)이 맑은 날 서로 바라볼 수 있다고 적혀 있음을 읽고 그 뜻을 설명할 수 있다.',
        draw: 'an old paper book open with brush writing, and through a window two islands visible across a calm sea on a clear day',
        banner: '맑은 날 바라보여요', extra: [{ motif: 'sun', x: 90, y: 70, s: 0.6 }],
        intro: {
          teacher: '"조선 세종 임금 때 나라에서 만든 책에 독도 이야기가 있대요." 대답을 듣고 『세종실록』 「지리지」(1454년)에 "우산과 무릉 두 섬이 서로 거리가 멀지 않아 날씨가 맑으면 바라볼 수 있다"는 기록이 있다고 알려 준다. 시연 단추로 기록과 뜻이 이어지는 모습을 보여 준다. "세종대왕이 독도에 갔어요"라는 대답에는 "기록이 말하는 것은 \'두 섬이 보인다\'는 것이에요"라고 바로잡는다.',
          student: '맑은 날과 흐린 날에 멀리 보이는 것이 어떻게 다른지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '옛 이름', slots: [{ id: 'm', label: '무릉' }], cards: ['울릉도', '제주도'], shuffle: false }, sequence: [{ match: { m: '울릉도' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 기록과 그 뜻 잇기', tool: 'mindmap',
            teacher: '"\'바라볼 수 있다\'는 말은 무엇을 알려 줄까요?" 기록이 말하는 것(두 섬이 보일 만큼 가깝다는 지리 인식)과 말하지 않는 것(사람이 살았다 등)을 가르게 한다. 3학년 거리 공부(87.4km)와 이어 보게 한다.',
            task: '『세종실록』 「지리지」 기록의 낱말과 뜻을 잇고, 기록이 알려 주는 것을 골라요.',
            items: [
              MM('옛 이름과 오늘의 이름을 이어 보세요.', '옛 이름', [{ id: 'u', label: '우산' }, { id: 'm', label: '무릉' }], ['독도', '울릉도', '제주도'], { u: '독도', m: '울릉도' }, 0.2),
              MP('이 기록이 알려 주는 것만 골라 보세요.', '기록이 알려 줘요', ['두 섬이 보일 만큼 가까워요', '조선이 두 섬을 알고 있었어요', '독도에 큰 마을이 있었어요', '독도에서 농사를 지었어요'], ['두 섬이 보일 만큼 가까워요', '조선이 두 섬을 알고 있었어요'], 0.25),
              MM('기록의 말과 뜻을 이어 보세요.', '기록 읽기', [{ id: 'a', label: '거리가 멀지 않다' }, { id: 'b', label: '날씨가 맑으면' }], ['두 섬이 가깝다', '흐리면 안 보일 수 있다', '배로 갈 수 없다'], { a: '두 섬이 가깝다', b: '흐리면 안 보일 수 있다' }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 지도에서 기록 확인하기', tool: 'map',
            teacher: '"옛 이름을 붙인 지도에서 두 섬을 찾아볼까요?" 무릉(울릉도)과 우산(독도)을 찾고, 서로 이웃한 자리인지 확인하게 한다.',
            task: '옛 이름을 붙인 지도에서 기록 속 두 섬을 찾아요.',
            items: [
              MI('옛 이름 \'우산\'으로 불린 섬에 핀을 꽂아 보세요.', KOR([P_USAN, P_MUREUNG, P.seoul, P.jeju]), { place: '우산도(독도)' }, 0.15),
              MI('옛 이름 \'무릉\'으로 불린 섬에 핀을 꽂아 보세요.', KOR([P_USAN, P_MUREUNG, P.busan]), { place: '무릉(울릉도)' }, 0.15),
              MQ('지도를 보고 기록 속 두 섬의 관계를 골라 보세요.', KOR([P_USAN, P_MUREUNG, P.seoul]), '두 섬은 어떤 사이인가요?', ['서로 가까운 이웃 섬', '서로 아주 먼 섬', '같은 섬의 두 이름'], 0, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"『세종실록』 「지리지」 기록이 독도에 대해 무엇을 알려 주나요?" 출구 1번에서 우산과 무릉을 바꾼 학생에게는 지도의 옛 이름을 다시 읽게 한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '이름 확인', slots: [{ id: 'm', label: '무릉' }, { id: 'u', label: '우산' }], cards: ['울릉도', '독도', '강화도'] }, '기록 속 옛 이름과 오늘의 섬 이름을 이어 보세요.', { match: { m: '울릉도', u: '독도' } }, 0.2),
            { type: 'choice', prompt: '『세종실록』 「지리지」 기록이 말하는 것으로 알맞은 것은 무엇인가요?', options: ['날씨가 맑으면 두 섬을 바라볼 수 있다', '독도에 큰 마을이 있었다'], answer: 0, difficulty: 0.15, explain: '기록은 두 섬이 보일 만큼 가깝다는 것을 알려 줘요.' },
            MOOD,
          ],
        },
        wsTitle: '맑은 날 바라보여요',
        ws: [
          { type: 'table', prompt: '기록을 정리하세요.', columns: ['책', '만든 때', '두 섬의 옛 이름', '기록 내용'], cells: [['『세종실록』 「지리지」', '', '', '']], answer: '1454년 / 우산(독도)·무릉(울릉도) / 날씨가 맑으면 바라볼 수 있음' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '옛 이름 우산은 오늘의 ___, 무릉은 오늘의 ___이다.', answer: '독도, 울릉도' },
          { type: 'choice', prompt: '기록이 말하지 않는 것에 ○ 하세요.', options: ['독도에 큰 마을이 있었다', '두 섬이 서로 보인다'], answer: '독도에 큰 마을이 있었다' },
          { type: 'short', prompt: '이 기록이 왜 중요한 근거가 되는지 한 문장으로 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 기록을 부풀린다(사람이 살았다 등) → 기록이 말하는 만큼만 말하게 한다. ② 옛 이름을 헷갈린다 → 지도에 옛 이름을 붙여 확인한다. ③ 세종대왕이 직접 쓴 책으로 여긴다 → 세종 때 나라에서 만든 기록이라고 알려 준다.',
      }),

      LESSON(3, {
        title: '옛 지도의 우산도를 오늘 지도에서 찾기',
        objective: '조선 시대 옛 지도에 울릉도와 함께 우산도가 그려져 있음을 알고, 오늘의 지도와 견주어 볼 수 있다.',
        draw: 'an old paper map of Korea drawn with brush strokes, two small islands marked in the east sea, beside a modern grid map',
        banner: '옛 지도 속 우산도', extra: [{ motif: 'mountain', x: 90, y: 200, color: 'peach', s: 0.5 }],
        intro: {
          teacher: '"조선 사람들이 그린 지도에도 독도가 있을까요?" 대답을 듣고 조선 시대 지리책 『신증동국여지승람』에 실린 「팔도총도」 같은 옛 지도에 울릉도와 함께 우산도가 그려져 있다고 알려 준다. 시연 단추로 오늘의 지도에서 우산도(독도)에 핀이 꽂히는 모습을 보여 준다. "옛 지도는 지금 지도와 똑같아요"라는 대답에는 "옛 지도는 모양과 자리가 지금과 다르게 그려진 곳도 있어요. 섬이 그려져 있다는 것이 중요해요"라고 짚는다.',
          student: '우리 동네 옛날 사진이나 지도를 본 적이 있다면 무엇이 달랐는지 짝에게 말해 봐요.',
          demo: { tool: 'map', options: KOR([P_USAN, P_MUREUNG]), sequence: [{ place: '우산도(독도)' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 오늘의 지도에서 옛 섬 찾기', tool: 'map',
            teacher: '"옛 지도에 그려진 두 섬은 오늘의 어느 섬일까요?" 옛 이름과 오늘의 이름을 함께 말하게 한다. 제주도에 꽂는 학생에게는 옛 지도의 두 섬이 동쪽 바다에 있다는 점을 짚는다.',
            task: '옛 지도에 그려진 섬을 오늘의 지도에서 찾아 핀을 꽂아요.',
            items: [
              MI('옛 지도 속 우산도는 오늘의 독도예요. 오늘의 지도에서 찾아 핀을 꽂아 보세요.', KOR([P.dokdo, P.ulleung, P.jeju, P.seoul]), { place: '독도' }, 0.15),
              MI('옛 지도에 우산도와 함께 그려진 큰 섬에 핀을 꽂아 보세요.', KOR([P.dokdo, P.ulleung, P.jeju, P.busan]), { place: '울릉도' }, 0.15),
              MQ('옛 지도와 오늘의 지도를 견주어 맞는 말을 골라 보세요.', KOR([P_USAN, P_MUREUNG, P.seoul]), '두 지도에 함께 있는 것은?', ['동해의 두 섬', '고속도로', '공항'], 0, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 옛 지도가 알려 주는 것 고르기', tool: 'mindmap',
            teacher: '"옛 지도는 무엇을 보여 주는 증거일까요?" 지도를 만든 사람들이 그 섬을 알고 우리 땅으로 그렸다는 점을 짚는다. 옛 지도의 섬 자리가 정확하지 않은 점을 들어 증거가 아니라고 말하는 학생에게는 "그 섬을 알고 있었다는 것은 분명해요"라고 정리한다.',
            task: '옛 지도가 알려 주는 것과 옛 지도에 대한 바른 말을 골라요.',
            items: [
              MP('옛 지도가 알려 주는 것만 골라 보세요.', '옛 지도가 알려 줘요', ['조선 사람들이 우산도를 알았어요', '우산도를 조선 땅으로 그렸어요', '독도의 정확한 넓이', '그때 독도의 인구'], ['조선 사람들이 우산도를 알았어요', '우산도를 조선 땅으로 그렸어요'], 0.25),
              MS('옛 지도와 오늘의 지도로 나누어 보세요.', '두 지도', ['옛 지도', '오늘의 지도'], ['붓으로 그렸어요', '자리가 어림으로 그려졌어요', '방위표와 축척이 있어요', '위성 사진을 써요'], { '옛 지도': ['붓으로 그렸어요', '자리가 어림으로 그려졌어요'], '오늘의 지도': ['방위표와 축척이 있어요', '위성 사진을 써요'] }, 0.25),
              MM('독도의 이름과 쓰인 때를 이어 보세요.', '독도의 이름', [{ id: 'old', label: '조선 시대 기록·지도' }, { id: 'now', label: '오늘날' }], ['우산도', '독도', '무릉'], { old: '우산도', now: '독도' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"옛 지도는 독도에 대해 무엇을 알려 주나요?" 출구 1번에서 제주도에 꽂은 학생에게는 동해의 두 섬을 다시 찾게 한다.',
          exit: [
            XC('map', KOR([P.dokdo, P.ulleung, P.jeju, P.baekdu]), '옛 지도에 우산도로 그려진 섬을 오늘의 지도에서 찾아 핀을 꽂아 보세요.', { place: '독도' }, 0.15),
            { type: 'choice', prompt: '옛 지도에 우산도가 그려져 있다는 것은 무엇을 보여 주나요?', options: ['조선 사람들이 그 섬을 알고 우리 땅으로 그렸다', '그때 독도에 공항이 있었다'], answer: 0, difficulty: 0.15, explain: '옛 지도는 조선 사람들의 영토 인식을 보여 줘요.' },
            MOOD,
          ],
        },
        wsTitle: '옛 지도 속 우산도',
        ws: [
          { type: 'figure', wide: true, prompt: '오늘의 지도에서 옛 우산도인 섬에 ○ 하세요.', tool: 'map', figures: [{ options: KORW([PW.dokdo, PW.ulleung, PW.jeju]), caption: '우리나라 칸 지도' }], answer: '독도' },
          { type: 'table', prompt: '옛 지도와 오늘의 지도를 견주세요.', columns: ['', '옛 지도', '오늘의 지도'], cells: [['독도의 이름', '', ''], ['그린 방법', '', '']], answer: '우산도 / 독도, 붓으로 어림해 그림 / 방위표·축척·위성 사진' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '조선의 옛 지도에는 울릉도와 함께 ___가 그려져 있다.', answer: '우산도' },
          { type: 'short', prompt: '옛 지도가 오늘의 지도와 다르게 그려진 까닭을 짐작해 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 옛 지도의 자리가 정확하지 않다고 증거가 아니라고 여긴다 → 그 섬을 알고 우리 땅으로 그렸다는 점을 짚는다. ② 옛 이름을 섞는다 → 우산도=독도, 무릉=울릉도를 지도에 붙여 확인한다. ③ 지도 이름·연도를 지어 말한다 → 자료에 실린 이름만 쓴다.',
      }),

      LESSON(4, {
        title: '안용복이 일본에 건너간 이야기 차례 놓기',
        objective: '조선 숙종 때 안용복이 일본에 건너가 울릉도와 독도가 조선 땅이라고 말한 일을 차례대로 말할 수 있다.',
        draw: 'a Joseon-era fisherman in a paper boat crossing rough waves toward a distant shore, holding a rolled document',
        banner: '안용복의 바닷길', extra: [{ motif: 'cloud', x: 330, y: 60 }],
        intro: {
          teacher: '"조선 시대에 울릉도와 독도를 지키려고 바다를 건너간 어부가 있었대요." 대답을 듣고 조선 숙종 때인 1693년 울릉도에서 고기를 잡던 안용복이 일본 어부들과 마주쳐 일본으로 가게 되었고, 그 뒤 일본에 울릉도와 우산도(독도)가 조선 땅이라고 말했다는 기록이 있다고 알려 준다. 시연 단추로 이야기 장면이 놓이는 모습을 보여 준다.',
          student: '용기를 내어 옳은 것을 말해 본 경험이나 이야기를 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'fish', text: '울릉도에서 고기잡이', motif: 'wave' }, { id: 'say', text: '조선 땅이라고 말해요', motif: 'star' }], slots: ['먼저', '나중'], shuffle: false }, sequence: [{ order: ['fish', 'say'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 안용복 이야기 차례 놓기', tool: 'story',
            teacher: '"안용복은 왜 일본에 가게 되었을까요?" 장면마다 언제·어디서·무엇을 했는지 말하게 한다. 이야기를 영웅담으로만 부풀리는 학생에게는 "기록에 남은 일만 말해 볼까요?"라고 정리한다.',
            task: '안용복 이야기의 장면을 차례대로 놓아요.',
            items: [
              SO('안용복 이야기를 차례대로 놓아 보세요.', '안용복 이야기', ['처음', '가운데', '끝'], [{ id: 'japan', text: '일본으로 가게 돼요', motif: 'cloud' }, { id: 'meet', text: '울릉도에서 일본 어부와 마주쳐요', motif: 'wave' }, { id: 'claim', text: '울릉도·우산도는 조선 땅', motif: 'star' }], ['meet', 'japan', 'claim'], 0.2),
              SO('기록이 오늘까지 전해지는 차례를 놓아 보세요.', '기록이 전해져요', 3, [{ id: 'now', text: '오늘 우리가 배워요', motif: 'sun' }, { id: 'act', text: '안용복이 바다를 건너요', motif: 'wave' }, { id: 'rec', text: '조선과 일본에 기록이 남아요', motif: 'leaf' }], ['act', 'rec', 'now'], 0.2),
              SF('안용복 이야기의 빈칸을 채워 보세요.', ['1693', '1900', '숙종', '세종'], [{ id: 'b1', who: '기록', motif: 'wave', label: '___년, 안용복은 울릉도에서 고기를 잡았어요.' }, { id: 'b2', who: '기록', motif: 'leaf', label: '그때 조선의 임금은 ___이었어요.' }], { b1: '1693', b2: '숙종' }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 안용복 이야기가 알려 주는 것', tool: 'mindmap',
            teacher: '"안용복 이야기는 무엇을 보여 줄까요?" 조선 사람들이 울릉도와 독도를 우리 땅으로 여겼다는 점, 그리고 그 무렵 일본 막부가 일본 사람의 울릉도 도해(바다를 건너감)를 금지했다는 점을 함께 알려 준다(6학년에 더 배운다). 일본 사람 전체를 나쁘게 말하는 학생에게는 기록과 사람을 나누어 보게 한다.',
            task: '안용복 이야기가 알려 주는 것을 고르고, 낱말과 뜻을 이어요.',
            items: [
              MP('안용복 이야기가 알려 주는 것만 골라 보세요.', '알려 주는 것', ['조선은 두 섬을 조선 땅으로 여김', '두 나라가 울릉도를 두고 논의함', '안용복은 임금이었어요', '독도에 성을 쌓았어요'], ['조선은 두 섬을 조선 땅으로 여김', '두 나라가 울릉도를 두고 논의함'], 0.3),
              MM('낱말과 뜻을 이어 보세요.', '낱말 뜻', [{ id: 'a', label: '안용복' }, { id: 'd', label: '도해 금지' }], ['조선 숙종 때의 어부', '바다를 건너가지 못하게 함', '조선의 장군'], { a: '조선 숙종 때의 어부', d: '바다를 건너가지 못하게 함' }, 0.25),
              MS('역사를 말하는 바른 태도와 바르지 않은 태도로 나누어 보세요.', '역사 말하기', ['바른 태도', '바르지 않은 태도'], ['기록에 있는 만큼 말해요', '사람과 주장을 나눠 봐요', '이야기를 부풀려요', '나라 사람 전체를 탓해요'], { '바른 태도': ['기록에 있는 만큼 말해요', '사람과 주장을 나눠 봐요'], '바르지 않은 태도': ['이야기를 부풀려요', '나라 사람 전체를 탓해요'] }, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"안용복 이야기를 세 문장으로 말해 볼까요?" 출구 1번에서 1900년을 고른 학생에게는 숙종 때와 대한제국 때를 구별하게 한다.',
          exit: [
            XC('timeline', { cards: [H.ahn, H.isabu, H.sejong], axis: ['옛날', '오늘날'] }, '세 기록을 일어난 차례대로 시간 띠에 놓아 보세요.', { order: ['isabu', 'sejong', 'ahn'] }, 0.25),
            { type: 'choice', prompt: '안용복은 어느 임금 때의 사람인가요?', options: ['조선 숙종', '신라 지증왕', '조선 세종'], answer: 0, difficulty: 0.2, explain: '안용복은 조선 숙종 때(1693년 무렵) 활동한 어부예요.' },
            MOOD,
          ],
        },
        wsTitle: '안용복의 바닷길',
        ws: [
          { type: 'table', prompt: '안용복 이야기를 정리하세요.', columns: ['언제', '어디서', '무엇을'], cells: [['', '', '']], answer: '조선 숙종 때(1693년 무렵) / 울릉도·일본 / 울릉도와 우산도가 조선 땅이라고 말함' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '안용복은 울릉도와 ___도가 조선 땅이라고 말했다.', answer: '우산' },
          { type: 'choice', prompt: '역사를 말하는 바른 태도에 ○ 하세요.', options: ['기록에 있는 만큼 말한다', '이야기를 부풀린다'], answer: '기록에 있는 만큼 말한다' },
          { type: 'short', prompt: '안용복에게 묻고 싶은 질문을 하나 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 안용복을 장군·관리로 여긴다 → 어부였다는 점을 짚는다. ② 이야기를 부풀린다 → 기록에 남은 일만 말하게 한다. ③ 일본 사람 전체를 탓한다 → 기록과 사람을 나누고, 사실로 말하게 한다.',
      }),

      LESSON(5, {
        title: '칙령 제41호로 알아보는 10월 25일',
        objective: '1900년 10월 25일 대한제국 칙령 제41호로 울도군이 석도(독도)를 관할하게 된 일과 독도의 날의 유래를 설명할 수 있다.',
        draw: 'a paper imperial decree scroll with a red seal, an old map showing a green island and a small islet, and a calendar page marked October 25',
        banner: '칙령 제41호', extra: [{ motif: 'star', x: 70, y: 110, color: 'rose', s: 0.6 }],
        intro: {
          teacher: '"10월 25일을 독도의 날이라고 부르는 까닭을 아나요?" 대답을 듣고(기다릴 반응: "독도가 생긴 날이요") 1900년 10월 25일 대한제국이 칙령 제41호를 내려 울릉도를 울도군으로 만들고 석도(독도)를 관할하게 했다고 알려 준다. 시연 단추로 칙령 카드가 시간 띠에 놓이는 모습을 보여 준다. 독도의 날은 법으로 정한 기념일은 아니지만, 이날을 기억하며 독도 교육을 하는 학교가 많다고 덧붙인다.',
          student: '\'칙령\'이라는 말을 들어 본 적이 있나요? 무슨 뜻일지 짝과 짐작해 봐요.',
          demo: { tool: 'timeline', options: { cards: [H.sejong, H.edict], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['sejong', 'edict'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 칙령 제41호 내용 잇기', tool: 'mindmap',
            teacher: '"칙령은 황제가 내린 명령이에요." 칙령 제41호의 내용(울도군 설치, 관할 구역에 석도 포함)을 낱말 카드로 잇게 한다. 석도를 울릉도로 잇는 학생에게는 "석도는 \'돌섬\'이라는 뜻이고, 우리 정부는 독도로 설명해요"라고 알려 준다.',
            task: '대한제국 칙령 제41호의 내용과 낱말 뜻을 이어요.',
            items: [
              MM('칙령 제41호의 낱말과 뜻을 이어 보세요.', '칙령 제41호', [{ id: 'c', label: '칙령' }, { id: 'u', label: '울도군' }, { id: 's', label: '석도' }], ['황제가 내린 명령', '울릉도에 둔 군', '독도', '제주도'], { c: '황제가 내린 명령', u: '울릉도에 둔 군', s: '독도' }, 0.25),
              MP('칙령 제41호에 담긴 내용만 골라 보세요.', '칙령에 담긴 것', ['울릉도를 울도군으로 해요', '석도를 관할해요', '독도에 공항을 지어요', '울릉도를 비워 둬요'], ['울릉도를 울도군으로 해요', '석도를 관할해요'], 0.25),
              MM('날짜와 일을 이어 보세요.', '날짜와 일', [{ id: 'd', label: '1900년 10월 25일' }, { id: 'n', label: '오늘의 10월 25일' }], ['칙령 제41호를 내려요', '독도의 날로 기억해요', '광복을 맞아요'], { d: '칙령 제41호를 내려요', n: '독도의 날로 기억해요' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 칙령이 중요한 까닭 고르기', tool: 'mindmap',
            teacher: '"칙령은 왜 중요한 근거가 될까요?" 나라가 법령으로 독도를 행정 구역에 넣었다는 점을 짚는다. 독도의 날을 국경일로 여기는 학생에게는 법으로 정한 기념일은 아니라고 바로잡는다.',
            task: '칙령 제41호가 중요한 까닭과 독도의 날에 대한 바른 말을 골라요.',
            items: [
              MP('칙령 제41호가 중요한 까닭만 골라 보세요.', '중요한 까닭', ['나라가 법령으로 독도를 관할했어요', '근대 법령으로 남은 기록이에요', '독도가 이날 생겼어요', '독도에 사람이 처음 갔어요'], ['나라가 법령으로 독도를 관할했어요', '근대 법령으로 남은 기록이에요'], 0.3),
              MS('독도의 날에 대한 말을 맞는 말과 틀린 말로 나누어 보세요.', '독도의 날', ['맞아요', '틀려요'], ['칙령 제41호를 기억하는 날', '독도 교육을 하는 학교가 많아요', '법으로 정한 국경일이에요', '독도가 생긴 날이에요'], { '맞아요': ['칙령 제41호를 기억하는 날', '독도 교육을 하는 학교가 많아요'], '틀려요': ['법으로 정한 국경일이에요', '독도가 생긴 날이에요'] }, 0.3),
              MM('옛 이름과 기록을 이어 보세요.', '이름과 기록', [{ id: 'usan', label: '우산(도)' }, { id: 'seok', label: '석도' }], ['세종실록 지리지·옛 지도', '대한제국 칙령 제41호', '삼국사기 우산국'], { usan: '세종실록 지리지·옛 지도', seok: '대한제국 칙령 제41호' }, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"10월 25일이 왜 독도의 날인지 한 문장으로 말해 볼까요?" 출구 1번에서 칙령을 세종실록보다 앞에 둔 학생에게는 조선과 대한제국의 차례를 다시 짚는다.',
          exit: [
            XC('timeline', { mode: 'match', slots: [{ id: 'y1454', label: '1454년' }, { id: 'y1900', label: '1900년' }], cards: [H.sejong, H.edict, H.ahn], axis: ['옛날', '오늘날'] }, '연도와 그해의 기록을 이어 보세요. 맞지 않는 카드는 남겨요.', { match: { y1454: 'sejong', y1900: 'edict' } }, 0.25),
            { type: 'choice', prompt: '칙령 제41호에서 독도를 가리키는 이름은 무엇인가요?', options: ['석도', '무릉', '우산국'], answer: 0, difficulty: 0.2, explain: '칙령 제41호는 울도군의 관할 구역에 석도(독도)를 넣었어요.' },
            MOOD,
          ],
        },
        wsTitle: '칙령 제41호',
        ws: [
          { type: 'table', prompt: '칙령 제41호를 정리하세요.', columns: ['언제', '누가', '무엇을'], cells: [['', '', '']], answer: '1900년 10월 25일 / 대한제국 / 울도군을 두고 석도(독도)를 관할함' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '칙령 제41호에서 독도는 ___라는 이름으로 나온다.', answer: '석도' },
          { type: 'choice', prompt: '독도의 날에 대해 맞는 말에 ○ 하세요.', options: ['칙령 제41호를 기억하는 날', '법으로 정한 국경일'], answer: '칙령 제41호를 기억하는 날' },
          { type: 'short', prompt: '칙령 제41호가 중요한 근거인 까닭을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 독도의 날을 독도가 생긴 날로 여긴다 → 칙령이 내려진 날이라고 정리한다. ② 독도의 날을 국경일로 여긴다 → 법정기념일이 아니라는 점을 짚는다. ③ 석도와 울릉도를 헷갈린다 → 칙령 문장에서 울도군과 석도를 나누어 읽는다.',
      }),

      LESSON(6, {
        title: '삼국 시대부터 대한제국까지 시간 띠 완성하기',
        objective: '512년부터 1900년까지의 독도 관련 기록을 시대 순으로 놓고, 기록마다 무엇을 보여 주는지 말할 수 있다.',
        draw: 'a long paper timeline ribbon stretching across the scene with small cards for an ancient ship, an old book, a fisherman and a decree scroll',
        banner: '독도 역사 시간 띠', extra: [{ motif: 'star', x: 80, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"지금까지 배운 기록을 한 줄로 세우면 어떤 순서일까요?" 대답을 듣고 시연 단추로 카드가 시간 띠에 놓이는 모습을 보여 준다. "칙령이 제일 먼저예요"라는 대답에는 "대한제국은 조선보다 먼저일까요, 나중일까요?"라고 되묻는다.',
          student: '지금까지 배운 독도 기록 가운데 가장 기억에 남는 것을 짝에게 말해 봐요.',
          demo: { tool: 'timeline', options: { cards: [H.isabu, H.sejong], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['isabu', 'sejong'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 기록을 시간 띠에 놓기', tool: 'timeline',
            teacher: '"이 기록은 어느 나라 때의 것인가요?" 신라·조선·대한제국을 먼저 말하고 놓게 한다. 안용복을 세종실록보다 앞에 두는 학생에게는 세종과 숙종 가운데 누가 먼저 임금이었는지 묻는다.',
            task: '독도 관련 기록 카드를 일어난 차례대로 시간 띠에 놓고, 연도와 이어요.',
            items: [
              TO('네 기록을 일어난 차례대로 놓아 보세요.', [H.edict, H.sejong, H.isabu, H.ahn], ['isabu', 'sejong', 'ahn', 'edict'], 0.25),
              TM('연도와 그해의 기록을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y512', label: '512년' }, { id: 'y1693', label: '1693년' }, { id: 'y1900', label: '1900년' }], [H.isabu, H.ahn, H.edict, H.sejong], { y512: 'isabu', y1693: 'ahn', y1900: 'edict' }, 0.3),
              TS('기록을 나라(시대)에 따라 나누어 보세요.', ['신라', '조선', '대한제국'], [H.isabu, H.sejong, H.ahn, H.edict], { '신라': ['isabu'], '조선': ['sejong', 'ahn'], '대한제국': ['edict'] }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록이 보여 주는 것 잇기', tool: 'mindmap',
            teacher: '"이 기록은 독도에 대해 무엇을 보여 주나요?" 기록마다 한 문장으로 말하게 한다. 서로 다른 기록의 내용을 섞는 학생에게는 지난 차시 활동지를 펴 보게 한다.',
            task: '기록과 그 기록이 보여 주는 것을 이어요.',
            items: [
              MM('기록과 보여 주는 것을 이어 보세요.', '기록이 보여 줘요', [{ id: 's', label: '『세종실록』 「지리지」' }, { id: 'e', label: '칙령 제41호' }, { id: 'a', label: '안용복 이야기' }], ['두 섬이 서로 보임', '석도를 행정 구역에 넣음', '조선 땅이라고 일본에 말함', '독도에 큰 성이 있음'], { s: '두 섬이 서로 보임', e: '석도를 행정 구역에 넣음', a: '조선 땅이라고 일본에 말함' }, 0.3),
              MS('기록을 책·문서와 인물 이야기로 나누어 보세요.', '기록의 종류', ['책·문서', '인물 이야기'], ['『세종실록』 「지리지」', '칙령 제41호', '안용복', '이사부'], { '책·문서': ['『세종실록』 「지리지」', '칙령 제41호'], '인물 이야기': ['안용복', '이사부'] }, 0.25),
              MP('시간 띠를 보고 알 수 있는 것만 골라 보세요.', '시간 띠로 알 수 있어요', ['오랜 기간 기록이 이어져요', '여러 시대의 기록이 있어요', '기록이 1900년에 처음 생겼어요', '기록이 하나뿐이에요'], ['오랜 기간 기록이 이어져요', '여러 시대의 기록이 있어요'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"시간 띠를 보고 독도에 대해 한 문장으로 말해 볼까요?" 출구 1번에서 칙령을 안용복보다 앞에 둔 학생에게는 조선과 대한제국의 차례를 다시 짚는다.',
          exit: [
            XC('timeline', { cards: [H.ahn, H.edict, H.isabu], axis: ['옛날', '오늘날'] }, '세 기록을 일어난 차례대로 놓아 보세요.', { order: ['isabu', 'ahn', 'edict'] }, 0.2),
            { type: 'choice', prompt: '가장 먼저 남은 독도 관련 기록은 무엇인가요?', options: ['『삼국사기』 우산국 이야기', '대한제국 칙령 제41호', '안용복 이야기'], answer: 0, difficulty: 0.15, explain: '512년 우산국 이야기가 가장 앞서요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 역사 시간 띠',
        ws: [
          { type: 'table', prompt: '시간 띠를 완성하세요.', columns: ['연도', '나라', '기록', '보여 주는 것'], cells: [['512년', '', '', ''], ['1454년', '', '', ''], ['1693년', '', '', ''], ['1900년', '', '', '']], answer: '신라·우산국 이야기·우산국이 신라에 속함 / 조선·세종실록 지리지·두 섬이 보임 / 조선·안용복·조선 땅이라고 말함 / 대한제국·칙령 제41호·석도 관할' },
          { type: 'choice', prompt: '조선 때의 기록에 ○ 하세요.', options: ['『세종실록』 「지리지」', '칙령 제41호'], answer: '『세종실록』 「지리지」' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도 기록은 ___ 시대부터 대한제국까지 이어진다.', answer: '삼국(신라)' },
          { type: 'short', prompt: '시간 띠를 보고 알게 된 것을 한 문장으로 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 나라의 차례(신라→조선→대한제국)를 헷갈린다 → 나라 이름부터 시간 띠에 놓게 한다. ② 기록의 내용을 섞는다 → 기록마다 "무엇을 보여 주나"를 한 문장으로 말하게 한다. ③ 연도를 외우기만 한다 → 연도보다 앞뒤 관계를 먼저 잡게 한다.',
      }),

      LESSON(7, {
        title: '독도의용수비대 이야기 차례 놓기',
        objective: '광복 뒤 울릉도 주민들이 독도의용수비대를 만들어 독도를 지킨 일을 차례대로 말할 수 있다.',
        draw: 'a group of islanders in simple clothes standing watch on a rocky islet at dawn, a small boat and a flag pole nearby',
        banner: '독도를 지킨 사람들', extra: [{ motif: 'sun', x: 90, y: 80, s: 0.5 }],
        intro: {
          teacher: '"광복 뒤 독도는 누가 지켰을까요?" 대답을 듣고(기다릴 반응: "군인이요", "경찰이요") 6·25전쟁 무렵 울릉도 주민들이 스스로 독도의용수비대를 만들어 독도를 지켰고, 그 뒤 경찰이 이어받아 오늘의 독도경비대가 되었다고 알려 준다. 시연 단추로 장면이 차례로 놓이는 모습을 보여 준다.',
          student: '우리 동네를 위해 스스로 나서서 일하는 사람을 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'make', text: '주민들이 수비대를 만들어요', motif: 'house' }, { id: 'police', text: '경찰이 이어받아요', motif: 'star' }], slots: ['먼저', '나중'], shuffle: false }, sequence: [{ order: ['make', 'police'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도의용수비대 이야기 차례 놓기', tool: 'story',
            teacher: '"왜 울릉도 주민들이 나섰을까요?" 전쟁 중이라 나라가 독도를 살피기 어려웠던 상황을 짚는다. 수비대를 군대로 여기는 학생에게는 "의용(義勇)은 스스로 나섰다는 뜻이에요"라고 알려 준다.',
            task: '독도의용수비대 이야기 장면을 차례대로 놓아요.',
            items: [
              SO('독도를 지킨 이야기를 차례대로 놓아 보세요.', '독도의용수비대', ['처음', '가운데', '끝'], [{ id: 'guard', text: '독도에 머물며 지켜요', motif: 'star' }, { id: 'war', text: '광복 뒤 6·25전쟁 무렵', motif: 'cloud' }, { id: 'make', text: '울릉도 주민들이 모여요', motif: 'house' }], ['war', 'make', 'guard'], 0.2),
              SO('오늘의 독도경비대까지 차례대로 놓아 보세요.', '지킴의 이어짐', 3, [{ id: 'today', text: '오늘의 독도경비대', motif: 'sun' }, { id: 'vol', text: '독도의용수비대 활동', motif: 'house' }, { id: 'police', text: '경찰이 이어받아요', motif: 'star' }], ['vol', 'police', 'today'], 0.2),
              SF('독도의용수비대 이야기의 빈칸을 채워 보세요.', ['울릉도', '제주도', '스스로', '억지로'], [{ id: 'b1', who: '기록', motif: 'house', label: '___ 주민들이 독도의용수비대를 만들었어요.' }, { id: 'b2', who: '기록', motif: 'star', label: '나라를 위해 ___ 나서 독도를 지켰어요.' }], { b1: '울릉도', b2: '스스로' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 지킴의 뜻 생각하기', tool: 'mindmap',
            teacher: '"오늘 우리는 어떤 방법으로 독도를 지킬 수 있을까요?" 그때의 지킴과 오늘의 지킴을 나누게 한다. 싸우는 것만 지키는 것이라고 여기는 학생에게는 바르게 알고 알리는 것도 지킴이라고 말해 준다.',
            task: '그때와 오늘의 독도 지킴을 나누고, 낱말 뜻을 이어요.',
            items: [
              MS('독도 지킴을 그때와 오늘로 나누어 보세요.', '독도 지킴', ['그때(광복 뒤)', '오늘'], ['독도의용수비대', '주민들이 스스로 나섬', '독도경비대', '바르게 알리는 학생들'], { '그때(광복 뒤)': ['독도의용수비대', '주민들이 스스로 나섬'], '오늘': ['독도경비대', '바르게 알리는 학생들'] }, 0.25),
              MM('낱말과 뜻을 이어 보세요.', '낱말 뜻', [{ id: 'v', label: '의용' }, { id: 'g', label: '수비' }], ['스스로 나섬', '지키고 막음', '쉬고 놂'], { v: '스스로 나섬', g: '지키고 막음' }, 0.2),
              MP('초등학생이 할 수 있는 독도 지킴만 골라 보세요.', '나의 독도 지킴', ['독도 역사를 바르게 알기', '출처를 밝혀 알리기', '욕설 댓글 달기', '확인 없이 퍼뜨리기'], ['독도 역사를 바르게 알기', '출처를 밝혀 알리기'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도의용수비대 이야기에서 가장 마음에 남는 것은 무엇인가요?" 출구 1번에서 경찰을 수비대보다 앞에 둔 학생에게는 주민들이 먼저 나섰다는 점을 다시 짚는다.',
          exit: [
            XC('story', { cards: [{ id: 'b', text: '경찰이 이어받아요', motif: 'star' }, { id: 'a', text: '주민들이 독도를 지켜요', motif: 'house' }, { id: 'c', text: '오늘의 독도경비대', motif: 'sun' }], slots: ['처음', '가운데', '끝'] }, '독도를 지킨 사람들의 이야기를 차례대로 놓아 보세요.', { order: ['a', 'b', 'c'] }, 0.2),
            { type: 'choice', prompt: '독도의용수비대를 만든 사람들은 누구인가요?', options: ['울릉도 주민들', '외국 군인들', '조선의 관리들'], answer: 0, difficulty: 0.15, explain: '광복 뒤 울릉도 주민들이 스스로 나서 독도를 지켰어요.' },
            MOOD,
          ],
        },
        wsTitle: '독도를 지킨 사람들',
        ws: [
          { type: 'table', prompt: '독도의용수비대를 정리하세요.', columns: ['언제', '누가', '무엇을'], cells: [['', '', '']], answer: '광복 뒤 6·25전쟁 무렵 / 울릉도 주민들 / 스스로 독도를 지킴' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도의용수비대의 \'의용\'은 ___ 나섰다는 뜻이다.', answer: '스스로' },
          { type: 'choice', prompt: '오늘 독도를 지키는 경찰 조직에 ○ 하세요.', options: ['독도경비대', '독도의용수비대'], answer: '독도경비대' },
          { type: 'short', prompt: '내가 할 수 있는 독도 지킴을 한 가지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 의용수비대를 군대로 여긴다 → 주민들이 스스로 나섰다는 뜻을 알려 준다. ② 지킴을 싸움으로만 여긴다 → 바르게 알고 알리는 것도 지킴이라고 넓힌다. ③ 연도·인원을 지어 말한다 → 확인된 자료의 서술만 쓰게 한다.',
      }),

      LESSON(8, {
        title: '영토·생태·자원·안보로 독도 가치 나누기',
        objective: '독도의 가치를 영토·생태·자원·안보로 나누어 설명할 수 있다.',
        draw: 'four paper panels around two rocky islets showing a flag-like boundary line on the sea, seabirds, fish and a lookout post',
        banner: '독도의 가치', extra: [{ motif: 'star', x: 80, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"작은 바위섬 독도가 왜 소중할까요?" 대답을 듣고(기다릴 반응: "우리 땅이라서요", "새가 살아서요") 독도의 가치는 영토, 생태, 자원, 안보로 나누어 볼 수 있다고 알려 준다. 시연 단추로 카드가 갈래에 놓이는 모습을 보여 준다. "작아서 쓸모없어요"라는 말에는 "독도 둘레의 넓은 바다까지 생각해 볼까요?"라고 되묻는다.',
          student: '독도가 소중한 까닭을 한 가지 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '독도의 가치', slots: ['생태', '자원'], cards: ['바닷새 보금자리', '오징어 어장'], shuffle: false }, sequence: [{ sort: { '생태': ['바닷새 보금자리'], '자원': ['오징어 어장'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 가치 카드 나누기', tool: 'mindmap',
            teacher: '"이 카드는 어떤 가치를 말하나요?" 영토 가치는 섬과 둘레 바다의 주권, 안보 가치는 동해를 살피는 자리라는 점을 짚는다. 어장을 생태에 넣는 학생에게는 "사람이 고기를 잡아 쓰는 것은 자원이에요"라고 구별해 준다.',
            task: '독도의 가치 카드를 영토·생태·자원·안보로 나누어요.',
            items: [
              MS('가치 카드를 네 갈래로 나누어 보세요.', '독도의 가치', ['영토', '생태', '자원', '안보'], ['둘레 바다의 주권', '천연보호구역', '물고기가 많은 어장', '동해를 살피는 자리'], { '영토': ['둘레 바다의 주권'], '생태': ['천연보호구역'], '자원': ['물고기가 많은 어장'], '안보': ['동해를 살피는 자리'] }, 0.3),
              MS('카드를 생태 가치와 자원 가치로 나누어 보세요.', '생태와 자원', ['생태', '자원'], ['바닷새 번식지', '바위섬 식물', '오징어·새우잡이', '바닷속 자원'], { '생태': ['바닷새 번식지', '바위섬 식물'], '자원': ['오징어·새우잡이', '바닷속 자원'] }, 0.25),
              MP('독도의 가치를 바르게 말한 것만 골라 보세요.', '바른 말', ['둘레 바다까지 소중해요', '생물의 보금자리예요', '작아서 쓸모없어요', '관광만이 가치예요'], ['둘레 바다까지 소중해요', '생물의 보금자리예요'], 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 가치와 근거 잇기', tool: 'mindmap',
            teacher: '"그 가치를 무엇으로 뒷받침할 수 있을까요?" 4학년의 천연보호구역·난류와 한류를 떠올려 근거로 쓰게 한다.',
            task: '독도의 가치와 그 가치를 뒷받침하는 근거를 이어요.',
            items: [
              MM('가치와 근거를 이어 보세요.', '가치의 근거', [{ id: 'e', label: '생태 가치' }, { id: 'r', label: '자원 가치' }], ['섬 전체가 천연보호구역', '난류·한류가 만나 어장이 됨', '교실에서 가까움'], { e: '섬 전체가 천연보호구역', r: '난류·한류가 만나 어장이 됨' }, 0.25),
              MM('가치와 그것이 지키는 것을 이어 보세요.', '무엇을 지킬까', [{ id: 't', label: '영토 가치' }, { id: 's', label: '안보 가치' }], ['우리 땅과 바다의 주권', '동해의 안전', '학교 운동장'], { t: '우리 땅과 바다의 주권', s: '동해의 안전' }, 0.25),
              MP('독도 가치를 말할 때 바른 근거만 골라 보세요.', '바른 근거', ['외교부 독도 누리집 자료', '천연보호구역 지정', '친구의 짐작', '출처 없는 영상'], ['외교부 독도 누리집 자료', '천연보호구역 지정'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도의 가치 가운데 가장 중요하다고 생각하는 것과 그 까닭을 말해 볼까요?" 출구 1번에서 어장을 생태에 둔 학생에게는 자원과 생태의 차이를 다시 짚는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '가치 정리', slots: ['생태', '자원'], cards: ['괭이갈매기 번식지', '해국 자생지', '독도새우 어장', '오징어 어장'] }, '카드를 생태 가치와 자원 가치로 나누어 보세요.', { sort: { '생태': ['괭이갈매기 번식지', '해국 자생지'], '자원': ['독도새우 어장', '오징어 어장'] } }, 0.2),
            { type: 'short', prompt: '독도의 가치 하나를 골라 근거와 함께 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '독도의 가치',
        ws: [
          { type: 'table', prompt: '독도의 가치를 정리하세요.', columns: ['가치', '예'], cells: [['영토', ''], ['생태', ''], ['자원', ''], ['안보', '']], answer: '섬과 둘레 바다의 주권 / 천연보호구역·바닷새 번식지 / 어장·바닷속 자원 / 동해를 살피는 자리' },
          { type: 'choice', prompt: '생태 가치의 예에 ○ 하세요.', options: ['바닷새 번식지', '오징어잡이'], answer: '바닷새 번식지' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도 바다는 난류와 한류가 만나 좋은 ___이 된다.', answer: '어장' },
          { type: 'short', prompt: '독도가 작아도 소중한 까닭을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 독도의 크기로만 가치를 판단한다 → 둘레 바다와 생태까지 넓혀 보게 한다. ② 생태와 자원을 섞는다 → 사람이 쓰는 것인지로 가르게 한다. ③ 근거 없이 주장한다 → 4학년 생태 공부와 공식 자료를 근거로 쓰게 한다.',
      }),

      LESSON(9, {
        title: '역사 기록으로 독도 신문 기사 쓰기',
        objective: '독도 역사 기록을 바탕으로 신문 기사의 빈칸을 채우고, 출처를 밝혀 쓸 수 있다.',
        draw: 'a paper newspaper front page with a headline, a drawing of two islets and an old scroll, a child holding a pencil beside it',
        banner: '독도 역사 신문', extra: [{ motif: 'star', x: 80, y: 110, color: 'rose', s: 0.6 }],
        intro: {
          teacher: '"신문 기사에는 무엇이 꼭 들어가야 할까요?" 대답을 듣고(기다릴 반응: "언제, 어디서, 누가") 육하원칙과 출처를 함께 정리한다. 시연 단추로 기사 빈칸이 채워지는 모습을 보여 준다. 느낌만 쓰려는 학생에게는 "기사는 사실을 먼저 전해요"라고 짚는다.',
          student: '신문이나 뉴스에서 본 기사 제목을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { mode: 'fill', cards: ['1900', '1454'], slots: [{ id: 'b1', who: '기자', motif: 'leaf', label: '___년 10월 25일, 칙령 제41호가 반포되었다.' }], shuffle: false }, sequence: [{ fill: { b1: '1900' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 기사 빈칸 채우기', tool: 'story',
            teacher: '"이 빈칸에는 어떤 사실이 들어가야 할까요?" 지난 차시 시간 띠 활동지를 펴 놓고 확인하며 채우게 한다. 연도를 짐작해 넣는 학생에게는 활동지에서 찾아보게 한다.',
            task: '역사 기록을 바탕으로 독도 신문 기사의 빈칸을 채워요.',
            items: [
              SF('세종실록 기사의 빈칸을 채워 보세요.', ['1454', '1900', '무릉', '석도'], [{ id: 'b1', who: '기자', motif: 'leaf', label: '___년에 만든 『세종실록』 「지리지」에는' }, { id: 'b2', who: '기자', motif: 'sun', label: '우산과 ___ 두 섬이 맑은 날 보인다고 적혀 있다.' }], { b1: '1454', b2: '무릉' }, 0.25),
              SF('칙령 기사의 빈칸을 채워 보세요.', ['대한제국', '신라', '석도', '무릉'], [{ id: 'b1', who: '기자', motif: 'star', label: '1900년 ___은 칙령 제41호를 내렸다.' }, { id: 'b2', who: '기자', motif: 'mountain', label: '울도군이 ___를 관할하게 되었다.' }], { b1: '대한제국', b2: '석도' }, 0.25),
              SF('독도의용수비대 기사의 빈칸을 채워 보세요.', ['울릉도', '제주도', '광복', '삼국'], [{ id: 'b1', who: '기자', motif: 'sun', label: '___ 뒤 6·25전쟁 무렵,' }, { id: 'b2', who: '기자', motif: 'house', label: '___ 주민들이 독도의용수비대를 만들었다.' }], { b1: '광복', b2: '울릉도' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 기사에 넣을 문장 가리기', tool: 'mindmap',
            teacher: '"기사에 넣어도 될 문장일까요?" 사실·의견·확인 안 된 말을 가르게 한다. 다른 나라 사람을 비난하는 문장을 넣으려는 학생에게는 "기사는 사실과 근거로 말해요"라고 정리한다.',
            task: '신문 기사에 넣을 문장과 넣지 않을 문장을 가리고, 기사의 짜임을 이어요.',
            items: [
              MS('기사에 넣을 문장과 넣지 않을 문장으로 나누어 보세요.', '기사 문장', ['넣어요', '안 넣어요'], ['칙령 제41호는 1900년에 나왔다', '512년 우산국이 신라에 속했다', '그 나라 사람들은 다 나쁘다', '독도는 백만 년 전쯤 생겼대'], { '넣어요': ['칙령 제41호는 1900년에 나왔다', '512년 우산국이 신라에 속했다'], '안 넣어요': ['그 나라 사람들은 다 나쁘다', '독도는 백만 년 전쯤 생겼대'] }, 0.3),
              MM('기사의 짜임과 내용을 이어 보세요.', '기사의 짜임', [{ id: 'h', label: '제목' }, { id: 'b', label: '본문' }, { id: 's', label: '출처' }], ['칙령 제41호, 석도를 품다', '1900년 대한제국은…', '외교부 독도 누리집', '내 생각엔 아마…'], { h: '칙령 제41호, 석도를 품다', b: '1900년 대한제국은…', s: '외교부 독도 누리집' }, 0.3),
              MP('기사의 출처로 알맞은 것만 골라 보세요.', '기사 출처', ['동북아역사재단 독도 자료', '외교부 독도 누리집', '출처 없는 블로그 글', '친구에게 들은 말'], ['동북아역사재단 독도 자료', '외교부 독도 누리집'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"내 기사의 제목을 발표해 볼까요?" 출구 1번에서 연도를 바꿔 넣은 학생에게는 시간 띠를 다시 보게 한다.',
          exit: [
            XC('story', { mode: 'fill', cards: ['이사부', '안용복', '세종'], slots: [{ id: 'b1', who: '기자', motif: 'wave', label: '512년 신라의 ___가 우산국으로 갔다.' }] }, '우산국 기사의 빈칸을 채워 보세요.', { fill: { b1: '이사부' } }, 0.15),
            { type: 'short', prompt: '내가 쓴 독도 역사 기사의 제목과 출처를 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 역사 신문',
        ws: [
          { type: 'table', prompt: '기사 계획을 세우세요.', columns: ['언제', '누가', '무엇을', '출처'], rows: 1 },
          { type: 'short', prompt: '기사 제목을 쓰세요.' },
          { type: 'choice', prompt: '기사에 넣기 알맞은 문장에 ○ 하세요.', options: ['칙령 제41호는 1900년에 나왔다.', '그 나라 사람들은 다 나쁘다.'], answer: '칙령 제41호는 1900년에 나왔다.' },
          { type: 'draw', prompt: '기사에 넣을 그림을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 의견·감정을 기사 본문에 쓴다 → 사실과 의견을 나누는 질문을 한다. ② 출처를 빠뜨린다 → 기사 끝에 출처 칸을 꼭 채우게 한다. ③ 다른 나라 사람 전체를 비난하는 문장을 쓴다 → 주장과 사람을 나누고 근거로 쓰게 한다.',
      }),

      LESSON(10, {
        title: '시간 띠와 가치로 5학년 독도 역사 묶기',
        objective: '5학년에 배운 독도 역사 기록을 시간 띠로 정리하고, 독도의 가치와 이어 말할 수 있다.',
        draw: 'a paper timeline ribbon curving around two rocky islets, with small cards of books, a decree, islanders and a seagull',
        banner: '독도 역사 정리', extra: [{ motif: 'star', x: 80, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"5학년 독도 공부를 한 줄로 말한다면 무엇이라고 할까요?" 대답을 듣고(기다릴 반응: "독도는 옛날부터 기록에 있어요") 시연 단추로 카드가 시간 띠에 놓이는 모습을 보여 준다. 감정만 말하는 학생에게는 "어떤 기록으로 그렇게 말할 수 있나요?"라고 되묻는다.',
          student: '5학년 독도 기록 가운데 친구에게 꼭 알려 주고 싶은 것을 짝에게 말해 봐요.',
          demo: { tool: 'timeline', options: { cards: [H.sejong, H.guard], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['sejong', 'guard'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 기록 시간 띠 완성하기', tool: 'timeline',
            teacher: '"이제 다섯 기록을 모두 놓아 볼까요?" 나라(시대)를 먼저 말하고 놓게 한다. 독도의용수비대를 칙령보다 앞에 두는 학생에게는 광복과 대한제국의 차례를 묻는다.',
            task: '5학년에 배운 기록을 시간 띠에 놓고, 시대에 따라 나누어요.',
            items: [
              TO('네 기록을 옛날부터 오늘날까지 차례대로 놓아 보세요.', [H.guard, H.isabu, H.edict, H.sejong], ['isabu', 'sejong', 'edict', 'guard'], 0.3),
              TS('기록을 조선 이전과 조선 이후로 나누어 보세요.', ['조선 이전', '조선·대한제국', '광복 뒤'], [H.isabu, H.sejong, H.edict, H.guard], { '조선 이전': ['isabu'], '조선·대한제국': ['sejong', 'edict'], '광복 뒤': ['guard'] }, 0.25),
              TM('시대와 그때의 기록을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'silla', label: '신라' }, { id: 'korea', label: '대한제국' }], [H.isabu, H.edict, H.ahn], { silla: 'isabu', korea: 'edict' }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록과 가치 잇기', tool: 'mindmap',
            teacher: '"기록은 독도의 어떤 가치를 뒷받침할까요?" 역사 기록은 영토 가치의 근거가 되고, 생태·자원 가치는 4학년 공부가 근거라는 점을 이어 말하게 한다.',
            task: '역사 기록과 독도의 가치를 이어 정리해요.',
            items: [
              MM('근거와 가치를 이어 보세요.', '근거와 가치', [{ id: 'h', label: '칙령 제41호' }, { id: 'e', label: '천연보호구역 지정' }], ['영토 가치', '생태 가치', '관광 가치'], { h: '영토 가치', e: '생태 가치' }, 0.25),
              MP('5학년 독도 공부로 말할 수 있는 것만 골라 보세요.', '말할 수 있어요', ['독도 기록은 오래전부터 이어져요', '대한제국은 법령으로 독도를 관할했어요', '독도의 날은 법정 국경일이에요', '독도에 큰 마을이 있었어요'], ['독도 기록은 오래전부터 이어져요', '대한제국은 법령으로 독도를 관할했어요'], 0.3),
              MS('독도를 말하는 태도를 바른 것과 바르지 않은 것으로 나누어 보세요.', '독도를 말할 때', ['바른 태도', '바르지 않은 태도'], ['기록과 출처로 말하기', '모르면 찾아보기', '큰 소리로만 주장하기', '나라 사람 전체 탓하기'], { '바른 태도': ['기록과 출처로 말하기', '모르면 찾아보기'], '바르지 않은 태도': ['큰 소리로만 주장하기', '나라 사람 전체 탓하기'] }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"6학년에서는 이 기록들을 근거로 영토 주권을 더 깊이 배워요. 5학년에서 가장 중요하다고 생각한 기록은 무엇인가요?" 출구 1번에서 순서를 바꾼 학생에게는 나라의 차례를 다시 짚는다.',
          exit: [
            XC('timeline', { cards: [H.guard, H.sejong, H.edict], axis: ['옛날', '오늘날'] }, '세 기록을 옛날부터 차례대로 놓아 보세요.', { order: ['sejong', 'edict', 'guard'] }, 0.2),
            { type: 'short', prompt: '5학년 독도 기록 가운데 가장 중요한 것 하나와 그 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 역사 정리',
        ws: [
          { type: 'table', prompt: '5학년 독도 기록을 정리하세요.', columns: ['시대', '기록', '보여 주는 것'], cells: [['신라', '', ''], ['조선', '', ''], ['대한제국', '', ''], ['광복 뒤', '', '']], answer: '우산국 이야기·우산국이 신라에 속함 / 세종실록 지리지·안용복·두 섬을 알고 조선 땅으로 여김 / 칙령 제41호·석도 관할 / 독도의용수비대·주민들이 지킴' },
          { type: 'choice', prompt: '영토 가치의 근거가 되는 기록에 ○ 하세요.', options: ['칙령 제41호', '천연보호구역 지정'], answer: '칙령 제41호' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도를 말할 때는 ___과 출처로 말한다.', answer: '기록' },
          { type: 'short', prompt: '6학년 독도 공부에서 더 알고 싶은 것을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 기록을 시대에 따라 놓지 못한다 → 나라 이름부터 놓게 한다. ② 감정으로만 주장한다 → 기록 하나를 들어 말하게 한다. ③ 역사 기록과 생태 근거를 섞는다 → 가치마다 알맞은 근거를 잇게 한다.',
      }),
    ],
  });
})();
