/* 3학년 창체 계기교육 — 기념일 계기교육(기념일당 1차시, 10차시). 중학년: 기념일에 얽힌 인물과 사건을 시간 띠·이야기 순서·지도로 정리한다.
 * 기념일(달력 순): 3·1절, 과학의 날(4.21), 지구의 날(4.22), 5·18민주화운동 기념일(5.18), 현충일(6.6)·6·25전쟁, 6·10민주항쟁 기념일(6.10), 광복절(8.15), 개천절(10.3), 한글날(10.9), 학생독립운동기념일(11.3).
 * 날짜는 「국경일에 관한 법률」(3·1절·광복절·개천절·한글날)과 「각종 기념일 등에 관한 규정」(과학의 날·5·18·현충일·6·25·6·10·학생독립운동기념일)을 따른다. 지구의 날은 법정기념일이 아닌 세계 환경의 날로 다룬다.
 * 역사 사실은 교육과정·교과서와 국가보훈부·교육부·기념재단 공식 자료에 실린 범위만 쓴다. 정치적 중립: 현재 정당·정치인을 다루지 않고, 특정 국가의 국민 전체를 비난하지 않는다.
 * 독도의 날은 독도교육 단원(g*-cc-dokdo)이 맡는다. 인물 이름은 역사 인물 말고는 가명이다. 전국 단위 시수가 없어 기념일당 1차시는 학교가 정한다. */
(function () {
  const GRADE = 3;
  const ID = `g${GRADE}-cc-days`;
  const UNIT = `g${GRADE}-창체-days`;
  const TITLE = '기념일 계기교육 — 인물과 사건의 차례';
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'tree', x: 80, y: 210 }, { motif: 'house', x: 390, y: 214, color: 'buttercup', s: 0.85 }, ...extra,
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
  // 달력 띠(1월 → 12월) — 기념일을 날짜 차례로 놓는다
  const CO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { cards, axis: ['1월', '12월'] }, target: { order }, difficulty: d, ...more });
  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 위치 관계만 살린다)
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const P = {
    seoul: { name: '서울', icon: 'capital', at: [2, 5] }, incheon: { name: '인천', icon: 'port', at: [1, 5] },
    cheonan: { name: '천안', icon: 'heritage', at: [2, 6] }, daegu: { name: '대구', icon: 'city', at: [3, 6] },
    gwangju: { name: '광주', icon: 'city', at: [1, 7] }, busan: { name: '부산', icon: 'port', at: [3, 7] },
    jeju: { name: '제주도', icon: 'island', at: [1, 8] }, pyongyang: { name: '평양', icon: 'city', at: [1, 3] },
    baekdu: { name: '백두산', icon: 'mountain', at: [2, 0] }, gangneung: { name: '강릉', icon: 'city', at: [3, 4] },
    panmun: { name: '판문점', icon: 'dot', at: [2, 4] },
  };
  const DJ = { name: '대전', icon: 'city', at: [2, 6] };
  // 활동지 전용 작은 지도(6×4) — 9줄 지도는 인쇄 글자가 작다
  const KORW_LAND = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3], [1, 3]];
  const KORW_SEA = [[0, 1], [0, 2], [0, 3], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3]];
  const KORW = (places, more) => Object.assign({ grid: [6, 4], regions: [{ name: '우리나라 땅', cells: KORW_LAND, color: 'mint' }], regionNames: false, sea: KORW_SEA, places }, more || {});
  const PW = {
    seoul: { name: '서울', icon: 'capital', at: [2, 1] }, cheonan: { name: '천안', icon: 'heritage', at: [2, 2] },
    gwangju: { name: '광주', icon: 'city', at: [1, 3] }, busan: { name: '부산', icon: 'port', at: [3, 3] },
    incheon: { name: '인천', icon: 'port', at: [1, 1] },
  };
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
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ id: `a${i + 1}`, minutes: i === 0 ? 14 : 13, levels: a.tool === 'map' ? MAP_LV : a.tool === 'emotion' ? LVB : LV, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const XC = (tool, options, prompt, target, d) => Object.assign({ type: 'tool', tool, options }, tool === 'map' || options.mode === 'branch' ? {} : { state: { at: {} } }, { prompt, target, difficulty: d });
  const CH = (prompt, options, answer, explain, d) => ({ type: 'choice', prompt, options, answer, difficulty: d || 0.15, explain });
  // 짧은 데모 틀
  const DM = (tool, options, step) => ({ tool, options: Object.assign({ shuffle: false }, options), sequence: [step] });

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '3학년 기념일 계기교육은 기념일마다 "누가, 언제, 어디서, 무엇을 했나"를 시간 띠·이야기 순서·칸 지도로 정리하는 10차시입니다(기념일당 1차시). 3·1운동은 서울에서 전국으로 퍼진 길, 6·25전쟁은 시작부터 정전 협정까지의 차례와 인천·부산의 자리, 학생독립운동은 광주에서 시작해 퍼진 과정을 지도와 연표로 잇고, 5·18민주화운동과 6월 민주항쟁은 사건의 큰 흐름을 짧은 장면으로 놓습니다. 광복절에는 독립운동가와 한 일, 개천절에는 고조선부터 대한민국까지 나라의 차례, 한글날에는 자음 기본 글자가 본뜬 발음 기관, 과학의 날에는 첨성대·측우기·자격루와 만든 사람, 지구의 날에는 버린 비닐이 바다로 가는 길과 에너지 아끼기를 다룹니다. 기념일 계기교육은 전국 단위 시수가 없어 기념일당 1차시 편성과 운영 시기는 학교가 정합니다(학교 계기교육 계획과 절차를 따름). 사회(우리 지역·옛날과 오늘날), 과학, 국어 단원과 연계할 수 있고(시수 인정은 학교 결정), 독도의 날은 독도교육 단원이 맡습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '3·1운동이 퍼진 차례를 시간 띠에 놓고 지도에서 곳 찾기',
        objective: '3·1운동이 일어나 전국으로 퍼진 차례를 시간 띠에 놓고, 서울과 천안의 만세 운동 장소를 지도에서 찾을 수 있다.',
        draw: 'crowds with paper flags spreading from a city gate across layered paper hills and villages',
        banner: '1919년 3월 1일', extra: [{ motif: 'flower', x: 150, y: 214, color: 'rose', s: 0.6 }],
        intro: {
          teacher: '"1919년 3월 1일, 서울에서 시작된 만세 소리는 어디까지 퍼졌을까요?" 대답을 듣고(기다릴 반응: "서울에서만요", "전국이요") 민족 대표들이 독립 선언서를 발표하고, 탑골공원에서 학생과 시민들이 만세를 부르며 시작되어 전국과 나라 밖으로 퍼졌다고 알린다. 시연 단추로 두 장면을 시간 띠에 놓는다.',
          student: '3·1절에 대해 1·2학년 때 배운 것 하나를 짝에게 말해 봐요.',
          demo: DM('timeline', { cards: [{ id: 'sun', text: '독립 선언서 발표' }, { id: 'all', text: '전국으로 퍼짐' }], axis: ['먼저', '나중'] }, { order: ['sun', 'all'] }),
        },
        acts: [
          {
            title: '활동 1. 3·1운동의 차례 시간 띠에 놓기', tool: 'timeline',
            teacher: '"만세 운동은 한꺼번에 전국에서 일어났을까요?" 처음 서울에서 시작해 여러 지역과 나라 밖으로 퍼졌다는 점을 짚는다. 1945년 광복을 1919년보다 앞에 두는 학생에게는 연도의 수를 견주게 한다.',
            task: '3·1운동과 관련된 일을 일어난 차례대로 시간 띠에 놓아요.',
            items: [
              TO('3·1운동이 퍼진 차례대로 놓아 보세요.', [{ id: 'declare', text: '독립 선언서 발표', motif: 'star' }, { id: 'park', text: '탑골공원 만세', motif: 'flower' }, { id: 'nation', text: '전국으로 퍼짐', motif: 'mountain' }, { id: 'abroad', text: '나라 밖으로 퍼짐', motif: 'wave' }], ['declare', 'park', 'nation', 'abroad'], 0.25),
              TO('나라를 빼앗긴 때부터 차례대로 놓아 보세요.', [{ id: 'lost', text: '나라를 빼앗김', big: '1910' }, { id: 'mansei', text: '3·1운동', big: '1919' }, { id: 'lib', text: '광복', big: '1945' }], ['lost', 'mansei', 'lib'], 0.2),
              TM('연도와 그해의 일을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y1919', label: '1919년' }, { id: 'y1945', label: '1945년' }], ['3·1운동', '광복', '한글 창제'], { y1919: '3·1운동', y1945: '광복' }, 0.2),
            ],
          },
          {
            title: '활동 2. 칸 지도에서 만세 운동 장소 찾기', tool: 'map',
            teacher: '"탑골공원은 어느 도시에 있을까요?" 지도 위쪽이 북쪽이라고 먼저 알린다. 유관순 열사가 고향 천안의 아우내 장터에서 만세 운동을 이끌었다는 이야기를 짧게 들려준다. 천안을 바다 칸에 꽂는 학생에게는 땅 위 서울 아래쪽을 보게 한다.',
            task: '칸 지도에서 3·1운동과 관련된 곳에 핀을 꽂고 물음에 답해요.',
            items: [
              MI('탑골공원이 있는 서울에 핀을 꽂아 보세요.', KOR([P.seoul, P.cheonan, P.daegu, P.busan]), { place: '서울' }, 0.1),
              MI('유관순이 만세 운동을 이끈 아우내 장터가 있는 천안에 핀을 꽂아 보세요.', KOR([P.seoul, P.cheonan, P.gwangju, P.busan]), { place: '천안' }, 0.2),
              MQ('지도에 놓인 여러 도시를 보고 3·1운동이 일어난 곳을 골라 보세요.', KOR([P.seoul, P.cheonan, P.gwangju, P.busan, P.daegu]), '3·1운동은 어디에서 일어났나요?', ['서울에서만', '서울과 전국 여러 곳'], 1, 0.2,
                { conclude: '3·1운동은 서울에서 시작해 전국과 나라 밖까지 퍼졌어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"3·1운동이 전국으로 퍼질 수 있었던 까닭은 무엇일까요?" 출구 1번에서 탑골공원 만세를 독립 선언서 발표보다 앞에 둔 학생에게는 선언서를 발표한 뒤 만세가 터졌다는 점을 다시 짚는다.',
          exit: [
            XC('timeline', { cards: [{ id: 'park', text: '탑골공원 만세' }, { id: 'aunae', text: '아우내 장터 만세' }, { id: 'declare', text: '선언서 발표' }], axis: ['먼저', '나중'] }, '세 장면을 일어난 차례대로 놓아 보세요.', { order: ['declare', 'park', 'aunae'] }, 0.25),
            CH('3·1운동이 일어난 해는 언제인가요?', ['1919년', '1945년', '1950년'], 0, '3·1운동은 1919년 3월 1일에 일어났어요.'),
            MOOD,
          ],
        },
        wsTitle: '1919년 3월 1일',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 서울에 ○, 천안에 △ 하세요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.cheonan, PW.busan]), caption: '우리나라 칸 지도' }], answer: '서울 ○, 서울 아래 천안 △' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '3·1운동은 ___년 3월 1일에 일어났다.', answer: '1919' },
          { type: 'choice', prompt: '3·1운동을 시작하며 발표한 것에 ○ 하세요.', options: ['독립 선언서', '훈민정음'], answer: '독립 선언서' },
          { type: 'short', prompt: '3·1운동이 전국으로 퍼진 까닭을 생각해 한 문장으로 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 3·1운동이 서울에서만 일어났다고 여긴다 → 지도와 시간 띠로 퍼진 차례를 보여 준다. ② 1910·1919·1945를 섞는다 → "빼앗김-외침-되찾음" 세 낱말로 묶는다. ③ 특정 나라 사람 전체를 미워하는 말이 나온다 → 그때의 침략과 지배가 잘못이었다고 사실로 말하게 한다.',
      }),

      LESSON(2, {
        title: '옛 과학 문화유산과 만든 사람 잇고 시대 차례로 놓기',
        objective: '과학의 날에 첨성대·측우기·자격루 같은 과학 문화유산과 관련 인물을 잇고, 시대 차례로 놓을 수 있다.',
        draw: 'a paper stone observatory tower, a water clock with paper pipes and a rain gauge in a row',
        banner: '우리 과학 문화유산', extra: [{ motif: 'star', x: 150, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"옛날 사람들은 별과 하늘을 어디에서 살폈을까요?" 대답을 듣고(기다릴 반응: "모르겠어요", "높은 곳이요") 신라 선덕 여왕 때 세운 첨성대, 조선 세종 때 장영실이 만든 자격루를 소개한다. 시연 단추로 자격루 카드를 장영실에 잇는다. "장영실이 측우기, 자격루를 혼자 다 만들었어요?"라는 질문에는 "세종대왕이 과학자들을 모아 함께 만들게 했어요"라고 답한다.',
          student: '과학의 날(4월 21일)에 학교에서 해 본 활동을 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '만든 사람', slots: [{ id: 'j', label: '장영실' }], cards: ['자격루', '첨성대'] }, { match: { j: '자격루' } }),
        },
        acts: [
          {
            title: '활동 1. 과학 문화유산과 인물·쓰임 잇기', tool: 'mindmap',
            teacher: '"자격루는 무엇으로 움직일까요?" 물이 흘러 시각을 스스로 알리는 물시계라고 알려 준다. 첨성대를 조선 것으로 잇는 학생에게는 첨성대는 신라 때 돌을 쌓아 만든 것이라고 짚는다.',
            task: '과학 문화유산을 만든 때·사람과 쓰임에 맞게 이어요.',
            items: [
              MM('과학 문화유산과 관련 인물을 이어 보세요.', '관련 인물', [{ id: 'cheom', label: '첨성대' }, { id: 'jagyeok', label: '자격루' }], ['선덕 여왕', '장영실', '단군'], { cheom: '선덕 여왕', jagyeok: '장영실' }, 0.25),
              MM('과학 문화유산과 쓰임을 이어 보세요.', '쓰임', [{ id: 'rain', label: '측우기' }, { id: 'water', label: '자격루' }, { id: 'sun', label: '앙부일구' }], ['비의 양 재기', '물로 시각 알리기', '그림자로 시각 알기', '별 그리기'], { rain: '비의 양 재기', water: '물로 시각 알리기', sun: '그림자로 시각 알기' }, 0.3),
              MP('조선 세종 때 만든 과학 기구만 골라 담아 보세요.', '세종 때 과학', ['측우기', '자격루', '첨성대', '기상 위성'], ['측우기', '자격루'], 0.25),
            ],
          },
          {
            title: '활동 2. 시대 차례로 시간 띠에 놓기', tool: 'timeline',
            teacher: '"신라와 조선 가운데 어느 나라가 먼저였을까요?" 나라의 차례를 떠올리며 놓게 한다. 첨성대를 조선 뒤에 두는 학생에게는 신라는 삼국 시대의 나라라고 알려 준다.',
            task: '과학 문화유산과 오늘날의 과학을 시대 차례로 놓아요.',
            items: [
              TO('하늘과 날씨를 살핀 방법을 옛날부터 놓아 보세요.', [{ id: 'cheom', text: '첨성대(신라)', motif: 'star' }, { id: 'rain', text: '측우기(조선)', motif: 'cloud' }, { id: 'sat', text: '기상 위성(오늘날)', motif: 'moon' }], ['cheom', 'rain', 'sat'], 0.2),
              TS('과학 문화유산을 시대에 따라 나누어 보세요.', ['신라', '조선'], ['첨성대', '측우기', '자격루', '앙부일구'], { '신라': ['첨성대'], '조선': ['측우기', '자격루', '앙부일구'] }, 0.3),
              TO('날씨를 알아본 방법을 옛날부터 놓아 보세요.', [{ id: 'rain', text: '측우기로 비 재기', motif: 'cloud' }, { id: 'radio', text: '라디오 일기 예보', motif: 'sun' }, { id: 'app', text: '휴대폰 날씨 앱', motif: 'star' }], ['rain', 'radio', 'app'], 0.25,
                { conclude: '옛날에는 측우기로 비를 재어 기록했고, 오늘날에는 기상 관측 자료로 날씨를 알려 줘요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"옛 과학자들이 오늘 우리에게 남긴 것은 무엇일까요?" 출구 1번에서 장영실을 첨성대에 잇는 학생에게는 신라와 조선의 차례를 다시 떠올리게 한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '언제 만들었을까', slots: [{ id: 's', label: '신라' }, { id: 'j', label: '조선 세종 때' }], cards: ['첨성대', '자격루', '스마트폰'] }, '과학 문화유산을 만든 때와 이어 보세요.', { match: { s: '첨성대', j: '자격루' } }, 0.2),
            CH('물이 흐르는 힘으로 시각을 스스로 알린 물시계는 무엇인가요?', ['자격루', '측우기'], 0, '자격루는 장영실 등이 만든 물시계예요.'),
            MOOD,
          ],
        },
        wsTitle: '우리 과학 문화유산',
        ws: [
          { type: 'table', prompt: '과학 문화유산의 시대와 쓰임을 정리하세요.', columns: ['문화유산', '시대', '쓰임'], cells: [['첨성대', '', ''], ['측우기', '', ''], ['자격루', '', '']], answer: '신라·하늘(별) 살피기 / 조선·비의 양 재기 / 조선·물로 시각 알리기' },
          { type: 'choice', prompt: '자격루를 만든 사람에 ○ 하세요.', options: ['장영실', '선덕 여왕'], answer: '장영실' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '과학의 날은 ___월 ___일이다.', answer: '4, 21' },
          { type: 'short', prompt: '옛 과학 문화유산 가운데 하나를 골라 대단한 점을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 신라와 조선의 차례를 헷갈린다 → 고조선-삼국-고려-조선 차례를 함께 읽는다. ② 장영실 혼자 모든 기구를 만들었다고 여긴다 → 세종 때 여러 학자·기술자가 함께 만들었다고 말한다. 과학의 날은 4월 21일이고 4월은 과학의 달이다.',
      }),

      LESSON(3, {
        title: '버린 비닐이 바다로 가는 길 차례 놓고 에너지 아끼는 길 고르기',
        objective: '지구의 날에 버린 쓰레기가 바다로 가는 차례를 말하고, 생활에서 에너지를 아끼는 행동을 고를 수 있다.',
        draw: 'a paper plastic bag drifting from a street drain into a river and out to a blue paper sea with a turtle',
        banner: '쓰레기는 어디로 갈까', extra: [{ motif: 'wave', y: 230 }],
        intro: {
          teacher: '"길에 버린 비닐봉지는 어디로 갈까요?" 대답을 듣고(기다릴 반응: "쓰레기통이요", "없어져요") 비가 오면 빗물에 쓸려 하천과 강을 지나 바다까지 갈 수 있다고 알린다. 시연 단추로 첫 두 장면을 놓는다. "바다는 넓으니까 괜찮아요"라는 말이 나오면 "바다 동물이 비닐을 먹이로 알고 먹을 수 있어요"라고 말해 준다.',
          student: '길에서 본 쓰레기 가운데 기억나는 것을 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'drop', text: '길에 비닐을 버려요', motif: 'house' }, { id: 'rain', text: '빗물에 쓸려 가요', motif: 'cloud' }] }, { order: ['drop', 'rain'] }),
        },
        acts: [
          {
            title: '활동 1. 쓰레기가 바다로 가는 차례 놓기', tool: 'story',
            teacher: '"비닐은 바다에 닿기 전에 어디를 지날까요?" 하천과 강의 차례를 짚는다. 바다 동물 장면을 앞에 두는 학생에게는 "바다에 닿기 전에 동물이 먹을 수 있을까요?"라고 묻는다.',
            task: '버린 쓰레기가 바다로 가는 장면을 차례대로 놓아요.',
            items: [
              SO('비닐봉지가 바다로 가는 차례를 놓아 보세요.', '비닐봉지의 여행', ['1', '2', '3', '4'], [{ id: 'drop', text: '길에 버려져요', motif: 'house' }, { id: 'rain', text: '빗물에 쓸려요', motif: 'cloud' }, { id: 'river', text: '강을 따라 가요', motif: 'wave' }, { id: 'sea', text: '바다 동물이 삼켜요', motif: 'star' }], ['drop', 'rain', 'river', 'sea'], 0.25),
              SO('바닷가 쓰레기를 줄이는 차례를 놓아 보세요.', '바닷가 정화', ['처음', '가운데', '끝'], [{ id: 'glove', text: '장갑 끼고 모여요', motif: 'sun' }, { id: 'pick', text: '쓰레기를 주워요', motif: 'leaf' }, { id: 'sort', text: '종류별로 나눠요', motif: 'star' }], ['glove', 'pick', 'sort'], 0.2),
              SF('바다를 지키는 친구의 말을 채워 보세요.', ['쓰레기통에', '길바닥에', '하천에'], [{ id: 'b1', who: '해솔', motif: 'wave', label: '쓰레기는 꼭 ___ 버려요.' }], { b1: '쓰레기통에' }, 0.1),
            ],
          },
          {
            title: '활동 2. 에너지를 아끼는 길 고르기', tool: 'emotion',
            teacher: '"이렇게 하면 전기나 기름을 아낄 수 있을까요?" 결과를 읽고 까닭을 말하게 한다. 지구의 날(4월 22일)은 세계 여러 나라가 함께 지구 환경을 생각하는 날이라고 덧붙인다.',
            task: '생활 상황에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('냉장고에서 무엇을 꺼낼지 모르겠어요. 어떻게 할까요?', '간식을 고르려고 냉장고 문을 열었어요. 무엇을 먹을지 아직 못 정했어요.', [
                { id: 'think', text: '문 닫고 생각한 뒤 꺼내요', result: '냉장고 찬 공기가 덜 빠져요.', mood: '편안함' },
                { id: 'open', text: '문을 연 채 오래 골라요', result: '찬 공기가 빠져 전기를 더 써요.', mood: '걱정', why: '문을 오래 열면 전기를 더 써요.' }], 'think', 0.15),
              EB('가까운 문구점에 가요. 어떻게 갈까요?', '집에서 걸어서 5분 거리 문구점에 가야 해요.', [
                { id: 'walk', text: '걸어서 가요', result: '자동차 기름을 쓰지 않아요.', mood: '뿌듯함' },
                { id: 'car', text: '차로 데려다 달라고 해요', result: '가까운 길에도 기름을 써요.', mood: '걱정', why: '가까운 길은 걸으면 에너지를 아껴요.' }], 'walk', 0.15),
              EB('게임을 다 하고 컴퓨터를 끄려고 해요. 어떻게 할까요?', '숙제를 마치고 컴퓨터를 다 썼어요.', [
                { id: 'off', text: '전원을 끄고 멀티탭도 꺼요', result: '대기 전력까지 아낄 수 있어요.', mood: '뿌듯함' },
                { id: 'on', text: '켜 둔 채 놀러 나가요', result: '아무도 안 쓰는데 전기가 들어요.', mood: '걱정', why: '쓰지 않는 기기는 꺼야 해요.' }], 'off', 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"지구의 날에 우리 반이 함께할 약속 하나를 정해 볼까요?" 출구 1번에서 강을 빼고 놓은 학생에게는 하천과 강이 바다로 이어진다는 점을 다시 말한다.',
          exit: [
            XC('story', { title: '페트병의 여행', slots: ['처음', '가운데', '끝'], cards: [{ id: 'park', text: '공원에 버려져요', motif: 'tree' }, { id: 'stream', text: '하천으로 흘러가요', motif: 'wave' }, { id: 'beach', text: '바닷가에 쌓여요', motif: 'sun' }] }, '페트병이 바다로 가는 장면을 차례대로 놓아 보세요.', { order: ['park', 'stream', 'beach'] }, 0.2),
            CH('에너지를 아끼는 행동은 무엇인가요?', ['안 쓰는 멀티탭 끄기', '빈방 불 켜 두기'], 0, '쓰지 않는 기기의 전원을 끄면 에너지를 아낄 수 있어요.'),
            MOOD,
          ],
        },
        wsTitle: '쓰레기는 어디로 갈까',
        ws: [
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '길 → 빗물 → ___ → 바다', answer: '강(하천)' },
          { type: 'choice', prompt: '에너지를 아끼는 행동에 ○ 하세요.', options: ['가까운 길 걷기', '냉장고 문 오래 열기'], answer: '가까운 길 걷기' },
          { type: 'short', prompt: '지구의 날에 우리 반이 지킬 약속을 한 가지 써 보세요.' },
          { type: 'draw', prompt: '깨끗한 바다를 지키는 모습을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 버린 쓰레기는 사라진다고 여긴다 → 빗물·하천·강·바다로 이어지는 길을 보여 준다. ② 에너지 아끼기를 전기 끄기로만 여긴다 → 걷기·대기 전력 끄기처럼 여러 방법을 고르게 한다. 지구의 날은 법정기념일이 아니다.',
      }),

      LESSON(4, {
        title: '5·18민주화운동의 흐름을 시간 띠에 놓고 시민들이 한 일 나누기',
        objective: '5·18민주화운동의 큰 흐름을 시간 차례로 놓고, 광주 시민들이 민주주의를 요구하고 서로 도운 일을 나눌 수 있다.',
        draw: 'a May city street with paper people sharing food and holding hands under soft clouds',
        banner: '1980년 5월 광주', extra: [{ motif: 'flower', x: 150, y: 210, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"1·2학년 때 5월 18일에 무엇을 배웠나요?" 대답을 듣고(기다릴 반응: "주먹밥이요", "광주요") 1980년 5월 18일 광주에서 학생과 시민들이 민주주의를 요구했고, 열흘 동안 계엄군에 맞섰다고 알린다. 시연 단추로 첫 두 장면을 시간 띠에 놓는다. 다치고 희생된 분들이 있었다는 사실은 차분하게 전하고 자세한 장면은 다루지 않는다.',
          student: '민주주의라는 말을 들으면 떠오르는 낱말 하나를 짝에게 말해 봐요.',
          demo: DM('timeline', { cards: [{ id: 'st', text: '학생들이 시위해요' }, { id: 'ci', text: '시민들이 함께해요' }], axis: ['먼저', '나중'] }, { order: ['st', 'ci'] }),
        },
        acts: [
          {
            title: '활동 1. 5·18민주화운동의 흐름 놓기', tool: 'timeline',
            teacher: '"시민들이 함께하게 된 것은 언제였을까요?" 장면마다 날짜를 짚으며 놓게 한다. 국가 기념일 지정을 1980년 안에 두는 학생에게는 오랜 시간이 지나 1997년에 국가 기념일이 되었다고 알려 준다.',
            task: '5·18민주화운동의 흐름을 일어난 차례대로 시간 띠에 놓아요.',
            items: [
              TO('1980년 5월의 흐름을 차례대로 놓아 보세요.', [{ id: 'st', text: '5월 18일 학생 시위', motif: 'star' }, { id: 'ci', text: '시민들이 함께함', motif: 'flower' }, { id: 'end', text: '5월 27일 진압됨', motif: 'moon' }], ['st', 'ci', 'end'], 0.25),
              TO('5·18을 기억해 온 차례를 놓아 보세요.', [{ id: 'y80', text: '광주에서 일어남', big: '1980' }, { id: 'y97', text: '국가 기념일 지정', big: '1997' }, { id: 'y11', text: '기록물 세계기록유산', big: '2011' }], ['y80', 'y97', 'y11'], 0.3),
              TM('날짜와 그날의 일을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'd18', label: '5월 18일' }, { id: 'd27', label: '5월 27일' }], ['학생 시위가 시작됨', '계엄군에 진압됨', '나라를 되찾음'], { d18: '학생 시위가 시작됨', d27: '계엄군에 진압됨' }, 0.3),
            ],
          },
          {
            title: '활동 2. 시민들이 한 일 나누기', tool: 'mindmap',
            teacher: '"시민들은 무엇을 바랐고, 서로 어떻게 도왔을까요?" 두 칸의 뜻을 먼저 읽게 한다. 주먹밥 나눔·헌혈처럼 서로 돕는 일과 민주주의를 요구한 일을 나누며, 둘 다 그날 시민들의 모습이라고 정리한다.',
            task: '광주 시민들이 한 일을 나누고 골라요.',
            items: [
              MS('시민들이 한 일을 두 가지로 나누어 보세요.', '시민들이 한 일', ['민주주의를 요구했어요', '서로 도왔어요'], ['민주주의 회복 외치기', '계엄 반대하기', '주먹밥 나누기', '다친 사람 위해 헌혈'], { '민주주의를 요구했어요': ['민주주의 회복 외치기', '계엄 반대하기'], '서로 도왔어요': ['주먹밥 나누기', '다친 사람 위해 헌혈'] }, 0.3),
              MP('5·18을 기억하고 추모하는 곳을 골라 담아 보세요.', '기억하는 곳', ['국립5·18민주묘지', '5·18 기록관', '놀이공원', '수영장'], ['국립5·18민주묘지', '5·18 기록관'], 0.25),
              MP('5·18 정신과 이어지는 말을 골라 보세요.', '5·18 정신', ['민주주의', '나눔과 연대', '혼자만 잘살기', '힘으로 누르기'], ['민주주의', '나눔과 연대'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"5·18을 기억하는 까닭은 무엇일까요?" 출구 1번에서 진압된 날을 처음에 둔 학생에게는 시작한 날과 끝난 날을 날짜로 견주게 한다.',
          exit: [
            XC('timeline', { cards: [{ id: 'end', text: '열흘 만에 진압됨' }, { id: 'start', text: '광주에서 시위 시작' }, { id: 'join', text: '시민들이 함께함' }], axis: ['먼저', '나중'] }, '1980년 5월의 일을 차례대로 놓아 보세요.', { order: ['start', 'join', 'end'] }, 0.2),
            CH('5·18민주화운동에서 시민들이 바란 것은 무엇인가요?', ['민주주의', '전쟁'], 0, '시민들은 비상계엄에 반대하고 민주주의를 요구했어요.'),
            MOOD,
          ],
        },
        wsTitle: '1980년 5월 광주',
        ws: [
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '5·18민주화운동은 ___년 5월 광주에서 일어났다.', answer: '1980' },
          { type: 'choice', prompt: '시민들이 서로 도운 일에 ○ 하세요.', options: ['주먹밥 나누기', '놀이공원 가기'], answer: '주먹밥 나누기' },
          { type: 'short', prompt: '5·18을 기억하는 방법을 한 가지 써 보세요.' },
          { type: 'short', prompt: '"민주주의"를 내 말로 쉽게 풀어 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 무서운 장면을 궁금해한다 → 사실은 차분히 전하되 자세한 장면은 다루지 않는다. ② 근거 없는 소문을 듣고 온다 → 국가 기념일·국립묘지·세계기록유산 같은 공식 사실로 답한다. 학교 계기교육 계획과 교육청 안내 자료 범위를 따르고, 현재 정당·정치인 이야기는 하지 않는다.',
      }),

      LESSON(5, {
        title: '6·25전쟁의 차례를 시간 띠에 놓고 인천·부산의 자리 찾기',
        objective: '6·25전쟁이 일어나 정전 협정을 맺기까지의 차례를 놓고, 전쟁과 관련된 곳을 지도에서 찾으며 현충일의 뜻을 말할 수 있다.',
        draw: 'a quiet paper memorial with white flowers in front of layered paper mountains under a June sky',
        banner: '현충일과 6·25전쟁', extra: [{ motif: 'flower', x: 150, y: 210, color: 'cream', s: 0.6 }],
        intro: {
          teacher: '"6월에는 기억해야 할 날이 두 번 있어요. 6월 6일과 6월 25일이에요." 현충일은 나라를 위해 목숨을 바친 분들을 기억하는 날이고, 6월 25일은 1950년 북한이 남쪽으로 쳐내려와 전쟁이 시작된 날이라고 알린다. 시연 단추로 두 장면을 놓는다. "지금도 전쟁 중이에요?"라는 질문에는 "1953년 정전 협정으로 싸움을 멈추었어요"라고 답한다.',
          student: '6월 6일과 6월 25일 가운데 아는 날이 있으면 짝에게 말해 봐요.',
          demo: DM('timeline', { cards: [{ id: 'war', text: '전쟁 시작', big: '1950' }, { id: 'stop', text: '정전 협정', big: '1953' }], axis: ['옛날', '오늘날'] }, { order: ['war', 'stop'] }),
        },
        acts: [
          {
            title: '활동 1. 6·25전쟁의 차례 놓기', tool: 'timeline',
            teacher: '"전쟁이 시작된 뒤 국군과 유엔군은 어디까지 밀렸을까요?" 낙동강까지 밀렸다가 인천 상륙 작전으로 서울을 되찾았다는 흐름을 짚는다. 정전 협정을 1950년에 두는 학생에게는 전쟁이 3년 넘게 이어졌다고 알려 준다.',
            task: '6·25전쟁의 큰 사건을 일어난 차례대로 놓아요.',
            items: [
              TO('6·25전쟁의 흐름을 차례대로 놓아 보세요.', [{ id: 'start', text: '북한의 남침', motif: 'cloud' }, { id: 'nak', text: '낙동강까지 밀림', motif: 'wave' }, { id: 'land', text: '인천 상륙 작전', motif: 'star' }, { id: 'stop', text: '정전 협정', motif: 'flower' }], ['start', 'nak', 'land', 'stop'], 0.3),
              TM('날짜와 그날의 일을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'd1', label: '1950년 6월 25일' }, { id: 'd2', label: '1953년 7월 27일' }], ['전쟁 시작', '정전 협정', '광복'], { d1: '전쟁 시작', d2: '정전 협정' }, 0.25),
              CO('6월의 두 날을 달력 차례로 놓아 보세요.', [{ id: 'w', text: '6·25전쟁일', big: '25일' }, { id: 'h', text: '현충일', big: '6일' }], ['h', 'w'], 0.15),
            ],
          },
          {
            title: '활동 2. 칸 지도에서 전쟁 관련 장소 찾기', tool: 'map',
            teacher: '"인천은 바다에 닿은 도시예요. 서울의 어느 쪽에 있을까요?" 인천 상륙 작전은 바다에서 상륙한 작전이라 바닷가 도시라는 점을 짚는다. 부산은 전쟁 동안 피란민이 많이 모인 곳이었다고 알려 준다.',
            task: '칸 지도에서 6·25전쟁과 관련된 곳에 핀을 꽂고 물음에 답해요.',
            items: [
              MI('인천 상륙 작전이 펼쳐진 인천에 핀을 꽂아 보세요.', KOR([P.seoul, P.incheon, P.busan, P.daegu]), { place: '인천' }, 0.2),
              MI('전쟁 때 피란민이 많이 모인 부산에 핀을 꽂아 보세요.', KOR([P.seoul, P.incheon, P.busan, P.gwangju]), { place: '부산' }, 0.15),
              MQ('지도에서 서울과 인천의 자리를 견주어 보고 답을 골라 보세요.', KOR([P.seoul, P.incheon, P.pyongyang, P.busan]), '인천은 서울의 어느 쪽에 있나요?', ['서쪽', '동쪽'], 0, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"현충일에 우리가 기억하는 분들은 누구일까요?" 출구 1번에서 인천 상륙 작전을 전쟁 시작보다 앞에 둔 학생에게는 전쟁이 시작된 뒤에 펼친 작전이라고 다시 짚는다.',
          exit: [
            XC('timeline', { cards: [{ id: 'seoul', text: '서울을 되찾음' }, { id: 'start', text: '전쟁이 시작됨' }, { id: 'land', text: '인천에 상륙함' }], axis: ['먼저', '나중'] }, '세 장면을 일어난 차례대로 놓아 보세요.', { order: ['start', 'land', 'seoul'] }, 0.25),
            CH('현충일은 어떤 날인가요?', ['나라 위해 희생한 분을 기리는 날', '나라를 세운 날'], 0, '현충일(6월 6일)은 나라를 위해 목숨을 바친 분들을 기억하는 날이에요.'),
            MOOD,
          ],
        },
        wsTitle: '현충일과 6·25전쟁',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 인천에 ○, 부산에 △ 하세요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.incheon, PW.busan]), caption: '우리나라 칸 지도' }], answer: '서울 왼쪽 인천 ○, 오른쪽 아래 부산 △' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '6·25전쟁은 ___년에 시작되어 1953년 정전 협정으로 멈추었다.', answer: '1950' },
          { type: 'choice', prompt: '현충일은 언제인가요?', options: ['6월 6일', '6월 25일'], answer: '6월 6일' },
          { type: 'short', prompt: '현충일에 나라를 지킨 분들께 드리고 싶은 말을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 현충일과 6·25전쟁일을 같은 날로 여긴다 → 달력 차례로 두 날을 놓게 한다. ② 정전을 전쟁이 완전히 끝난 것으로 여긴다 → 싸움을 멈춘 것이라고 말해 준다. 북한 주민 전체를 미워하는 말이 나오면 전쟁을 일으킨 일과 사람을 나누어 말하게 한다.',
      }),

      LESSON(6, {
        title: '6월 민주항쟁의 흐름을 이야기 차례로 놓고 직접 뽑기와 대신 뽑기 나누기',
        objective: '1987년 6월 민주항쟁의 흐름을 차례대로 말하고, 대표를 직접 뽑는 것과 대신 뽑는 것을 구별할 수 있다.',
        draw: 'many paper people in a city square holding paper signs, a paper ballot box glowing in the foreground',
        banner: '1987년 6월', extra: [{ motif: 'star', x: 150, y: 100, color: 'sky', s: 0.6 }],
        intro: {
          teacher: '"우리 반 회장을 우리가 직접 뽑는 것과, 몇 사람이 대신 뽑는 것은 어떻게 다를까요?" 대답을 듣고(기다릴 반응: "직접 뽑는 게 좋아요") 1987년 6월, 많은 시민이 대통령을 국민이 직접 뽑자며 전국에서 목소리를 냈고, 그 결과 직접 뽑는 방법으로 헌법이 바뀌었다고 알린다. 시연 단추로 두 장면을 놓는다.',
          student: '우리 반에서 투표로 정한 일을 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'want', text: '직접 뽑자고 해요', motif: 'star' }, { id: 'rally', text: '전국에서 모여요', motif: 'sun' }] }, { order: ['want', 'rally'] }),
        },
        acts: [
          {
            title: '활동 1. 6월 민주항쟁의 흐름 놓기', tool: 'story',
            teacher: '"헌법이 바뀐 것은 시위 전일까요, 뒤일까요?" 장면을 놓은 뒤 처음부터 읽게 한다. 시민들이 원한 것은 \'대통령 직접 선거\'라는 점을 분명히 한다.',
            task: '1987년 6월 민주항쟁의 장면을 차례대로 놓아요.',
            items: [
              SO('6월 민주항쟁의 흐름을 차례대로 놓아 보세요.', '1987년 6월', ['1', '2', '3', '4'], [{ id: 'want', text: '직접 선거를 요구해요', motif: 'star' }, { id: 'rally', text: '6월 10일 전국 시위', motif: 'sun' }, { id: 'accept', text: '직선제를 받아들여요', motif: 'flower' }, { id: 'law', text: '헌법이 바뀌어요', motif: 'leaf' }], ['want', 'rally', 'accept', 'law'], 0.3),
              SO('시민이 뜻을 이루어 가는 차례를 놓아 보세요.', '뜻을 모으기', ['처음', '가운데', '끝'], [{ id: 'think', text: '바라는 것을 정해요', motif: 'star' }, { id: 'together', text: '함께 목소리를 내요', motif: 'sun' }, { id: 'change', text: '제도가 바뀌어요', motif: 'leaf' }], ['think', 'together', 'change'], 0.2),
              SF('6월 시민들이 외친 말을 채워 보세요.', ['직접 뽑자', '그만 뽑자', '대신 뽑자'], [{ id: 'b1', who: '시민들', motif: 'sun', label: '대통령은 국민이 ___!' }], { b1: '직접 뽑자' }, 0.15),
            ],
          },
          {
            title: '활동 2. 직접 뽑기와 대신 뽑기 나누기', tool: 'mindmap',
            teacher: '"이 방법은 내가 직접 뽑을까요, 다른 사람이 대신 뽑을까요?" 오늘날 우리나라는 대통령을 국민이 직접 뽑는다고 정리한다. 대신 뽑기가 언제나 나쁘다고 여기는 학생에게는 "모두가 원하는 방법을 함께 정하는 것이 중요해요"라고 말한다.',
            task: '대표를 뽑는 방법을 나누고 골라요.',
            items: [
              MS('뽑는 방법을 직접 뽑기와 대신 뽑기로 나누어 보세요.', '뽑는 방법', ['직접 뽑기', '대신 뽑기'], ['반 모두가 회장 투표', '내가 표에 직접 쓰기', '모둠장만 모여 뽑기', '선생님이 정하기'], { '직접 뽑기': ['반 모두가 회장 투표', '내가 표에 직접 쓰기'], '대신 뽑기': ['모둠장만 모여 뽑기', '선생님이 정하기'] }, 0.3),
              MP('6·10민주항쟁 기념일에 맞는 말을 골라 담아 보세요.', '6월 10일', ['1987년 6월', '대통령 직선제', '1945년 광복', '훈민정음'], ['1987년 6월', '대통령 직선제'], 0.25),
              MP('오늘날 국민이 직접 뽑는 대표를 골라 보세요.', '국민이 뽑아요', ['대통령', '국회의원', '반 회장 담임', '학교 교장'], ['대통령', '국회의원'], 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"6월 시민들이 바란 것이 오늘 우리 생활과 어떻게 이어질까요?" 출구 1번에서 \'대신 뽑기\' 카드를 고른 학생에게는 1987년에 바뀐 방법을 다시 떠올리게 한다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '1987년에 바뀐 것', basket: '1987년에 바뀐 것', cards: ['국민이 대통령을 직접 뽑음', '헌법이 바뀜', '대통령을 대신 뽑음', '나라를 세움'] }, '1987년 6월 민주항쟁 뒤 바뀐 것만 골라 담아 보세요.', { pick: ['국민이 대통령을 직접 뽑음', '헌법이 바뀜'] }, 0.25),
            CH('6·10민주항쟁 기념일은 언제인가요?', ['6월 10일', '5월 18일'], 0, '6·10민주항쟁 기념일은 6월 10일이에요.'),
            MOOD,
          ],
        },
        wsTitle: '1987년 6월',
        ws: [
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '1987년 6월 시민들은 대통령을 국민이 ___ 뽑자고 요구했다.', answer: '직접' },
          { type: 'choice', prompt: '직접 뽑기에 ○ 하세요.', options: ['반 모두가 투표하기', '모둠장만 모여 뽑기'], answer: '반 모두가 투표하기' },
          { type: 'short', prompt: '내가 직접 뽑는 일이 소중한 까닭을 써 보세요.' },
          { type: 'short', prompt: '6월 민주항쟁의 흐름을 세 낱말로 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 헌법이 바뀐 것과 시위의 차례를 바꾼다 → 요구 → 시위 → 받아들임 → 헌법 개정 네 장면으로 묶는다. ② 직접·간접 선거의 뜻을 헷갈린다 → 우리 반 투표에 빗대어 말하게 한다. 현재 정당·정치인 이야기는 다루지 않는다.',
      }),

      LESSON(7, {
        title: '독립운동가와 한 일 잇고 나라를 되찾기까지 시간 띠에 놓기',
        objective: '광복절에 독립운동가와 그들이 한 일을 잇고, 나라를 빼앗긴 때부터 정부를 세우기까지의 차례를 놓을 수 있다.',
        draw: 'paper portraits silhouettes of independence activists beside a timeline ribbon ending in a bright sun',
        banner: '나라를 되찾기까지', extra: [{ motif: 'sun', x: 150, y: 96, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"나라를 되찾기 위해 애쓴 분들 가운데 아는 이름이 있나요?" 대답을 듣고(기다릴 반응: "유관순이요", "안중근이요") 나라 안팎에서 많은 독립운동가가 애썼고 1945년 8월 15일 광복을 맞았다고 알린다. 시연 단추로 김구를 \'임시 정부를 이끌어요\'에 잇는다.',
          student: '들어 본 독립운동가 이름을 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '한 일', slots: [{ id: 'k', label: '김구' }], cards: ['임시 정부를 이끌어요', '한글을 만들어요'] }, { match: { k: '임시 정부를 이끌어요' } }),
        },
        acts: [
          {
            title: '활동 1. 독립운동가와 한 일 잇기', tool: 'mindmap',
            teacher: '"안중근 의사는 어디에서 의거를 일으켰을까요?" 인물마다 한 일을 한 문장으로 말하게 한다. 세종대왕을 독립운동가로 고르는 학생에게는 세종대왕은 조선의 임금이라고 짚는다.',
            task: '독립운동가와 그들이 한 일을 잇고 골라요.',
            items: [
              MM('독립운동가와 한 일을 이어 보세요.', '한 일', [{ id: 'yu', label: '유관순' }, { id: 'an', label: '안중근' }, { id: 'kim', label: '김구' }], ['아우내 장터 만세 운동', '하얼빈 의거', '임시 정부를 이끎', '훈민정음 창제'], { yu: '아우내 장터 만세 운동', an: '하얼빈 의거', kim: '임시 정부를 이끎' }, 0.3),
              MM('독립운동가와 한 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '한 일 더 알기', [{ id: 'yun', label: '윤봉길' }, { id: 'ahn', label: '안창호' }], ['훙커우 공원 의거', '교육으로 실력 기르기', '측우기 만들기'], { yun: '훙커우 공원 의거', ahn: '교육으로 실력 기르기' }, 0.35),
              MP('독립운동가만 골라 담아 보세요.', '독립운동가', ['유관순', '윤봉길', '세종대왕', '장영실'], ['유관순', '윤봉길'], 0.2),
            ],
          },
          {
            title: '활동 2. 나라를 되찾기까지 시간 띠에 놓기', tool: 'timeline',
            teacher: '"광복과 정부 수립 가운데 무엇이 먼저였을까요?" 광복은 1945년, 대한민국 정부 수립은 1948년이며 둘 다 8월 15일이라는 점을 짚는다.',
            task: '나라를 빼앗긴 때부터 정부를 세우기까지 차례대로 놓아요.',
            items: [
              TO('나라를 되찾기까지의 차례를 놓아 보세요.', [{ id: 'lost', text: '나라를 빼앗김', big: '1910' }, { id: 'mansei', text: '3·1운동', big: '1919' }, { id: 'lib', text: '광복', big: '1945' }, { id: 'gov', text: '정부 수립', big: '1948' }], ['lost', 'mansei', 'lib', 'gov'], 0.25),
              TM('연도와 그해의 일을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y45', label: '1945년 8월 15일' }, { id: 'y48', label: '1948년 8월 15일' }], ['광복', '대한민국 정부 수립', '6·25전쟁'], { y45: '광복', y48: '대한민국 정부 수립' }, 0.3),
              TO('독립운동가의 활동을 차례대로 놓아 보세요.', [{ id: 'an', text: '안중근 하얼빈 의거', big: '1909' }, { id: 'yu', text: '유관순 만세 운동', big: '1919' }, { id: 'yun', text: '윤봉길 의거', big: '1932' }], ['an', 'yu', 'yun'], 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"광복절에 독립운동가 한 분을 골라 가족에게 소개한다면 누구를 고를까요?" 출구 1번에서 정부 수립을 광복보다 앞에 둔 학생에게는 1945와 1948의 수를 견주게 한다.',
          exit: [
            XC('timeline', { cards: [{ id: 'gov', text: '정부 수립', big: '1948' }, { id: 'lost', text: '나라를 빼앗김', big: '1910' }, { id: 'lib', text: '광복', big: '1945' }], axis: ['옛날', '오늘날'] }, '세 사건을 일어난 차례대로 놓아 보세요.', { order: ['lost', 'lib', 'gov'] }, 0.2),
            CH('광복절에 함께 기념하는 일은 무엇인가요?', ['광복과 정부 수립', '고조선 건국'], 0, '8월 15일은 1945년 광복과 1948년 대한민국 정부 수립을 함께 기념해요.'),
            MOOD,
          ],
        },
        wsTitle: '나라를 되찾기까지',
        ws: [
          { type: 'table', prompt: '독립운동가와 한 일을 정리하세요.', columns: ['독립운동가', '한 일'], cells: [['유관순', ''], ['안중근', ''], ['김구', '']], answer: '아우내 장터 만세 운동 / 하얼빈 의거 / 대한민국 임시 정부를 이끎' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '우리나라는 ___년 8월 15일에 광복을 맞았다.', answer: '1945' },
          { type: 'choice', prompt: '독립운동가가 아닌 사람에 ○ 하세요.', options: ['세종대왕', '윤봉길'], answer: '세종대왕' },
          { type: 'short', prompt: '가장 기억에 남는 독립운동가와 그 까닭을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 광복과 정부 수립을 같은 해로 여긴다 → 둘 다 8월 15일이지만 3년 차이가 난다고 짚는다. ② 독립운동가와 다른 시대 위인을 섞는다 → 활동한 때(1910~1945)를 기준으로 고르게 한다.',
      }),

      LESSON(8, {
        title: '고조선부터 대한민국까지 나라의 차례 놓고 단군 이야기 인물 잇기',
        objective: '개천절에 고조선부터 대한민국까지 나라의 차례를 시간 띠에 놓고, 단군 이야기 속 인물이 한 일을 이을 수 있다.',
        draw: 'a long paper ribbon timeline with small paper palaces from ancient to modern times under mountains',
        banner: '첫 나라 고조선', extra: [{ motif: 'mountain', x: 150, y: 196, color: 'mint', s: 0.6 }],
        intro: {
          teacher: '"우리 역사에서 첫 나라는 무엇이었을까요?" 대답을 듣고(기다릴 반응: "고조선이요", "조선이요") 고조선은 단군왕검이 세운 우리 역사의 첫 나라이고 개천절(10월 3일)에 이를 기념한다고 알린다. 고조선과 조선을 같은 나라로 여기는 학생에게는 아주 오랜 시간 차이가 있는 다른 나라라고 짚는다. 시연 단추로 두 나라를 시간 띠에 놓는다.',
          student: '아는 옛 나라 이름을 짝에게 말해 봐요.',
          demo: DM('timeline', { cards: [{ id: 'go', text: '고조선' }, { id: 'jo', text: '조선' }], axis: ['옛날', '오늘날'] }, { order: ['go', 'jo'] }),
        },
        acts: [
          {
            title: '활동 1. 나라의 차례 시간 띠에 놓기', tool: 'timeline',
            teacher: '"고려와 조선 가운데 어느 나라가 먼저일까요?" 나라마다 아는 인물을 하나씩 떠올리게 한다(조선-세종대왕 등). 삼국을 하나의 나라로 여기는 학생에게는 고구려·백제·신라 세 나라라고 알려 준다.',
            task: '우리 역사의 나라를 세워진 차례대로 놓아요.',
            items: [
              TO('나라를 세워진 차례대로 놓아 보세요.', [{ id: 'go', text: '고조선', motif: 'mountain' }, { id: 'sam', text: '고구려·백제·신라', motif: 'house' }, { id: 'kor', text: '고려', motif: 'flower' }, { id: 'jo', text: '조선', motif: 'sun' }], ['go', 'sam', 'kor', 'jo'], 0.3),
              TS('인물을 나라에 따라 나누어 보세요.', ['고조선', '조선'], ['단군왕검', '세종대왕', '장영실'], { '고조선': ['단군왕검'], '조선': ['세종대왕', '장영실'] }, 0.25),
              TO('조선 다음의 차례를 놓아 보세요.', [{ id: 'jo', text: '조선', motif: 'sun' }, { id: 'dh', text: '대한제국', motif: 'star' }, { id: 'kr', text: '대한민국', motif: 'flower' }], ['jo', 'dh', 'kr'], 0.3),
            ],
          },
          {
            title: '활동 2. 단군 이야기 인물과 한 일 잇기', tool: 'mindmap',
            teacher: '"하늘에서 내려온 사람은 누구였나요?" 1학년 때 들은 이야기를 떠올리며 인물을 잇는다. 단군왕검과 환웅을 헷갈리는 학생에게는 "환웅의 아들이 단군왕검이에요"라고 짚는다.',
            task: '단군 이야기 속 인물과 한 일을 잇고 골라요.',
            items: [
              MM('단군 이야기 속 인물과 한 일을 이어 보세요.', '한 일', [{ id: 'hw', label: '환웅' }, { id: 'un', label: '웅녀' }, { id: 'dg', label: '단군왕검' }], ['하늘에서 내려옴', '곰이 사람이 됨', '고조선을 세움', '한글을 만듦'], { hw: '하늘에서 내려옴', un: '곰이 사람이 됨', dg: '고조선을 세움' }, 0.3),
              MP('단군 이야기에 나오는 것만 골라 담아 보세요.', '단군 이야기', ['쑥과 마늘', '곰과 호랑이', '측우기', '거북선'], ['쑥과 마늘', '곰과 호랑이'], 0.15),
              MP('개천절에 맞는 말을 골라 보세요.', '개천절', ['10월 3일', '하늘이 열린 날', '10월 9일', '나라를 되찾은 날'], ['10월 3일', '하늘이 열린 날'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"고조선이 우리 역사의 첫 나라라는 것은 어디에 기록되어 전해질까요?" 『삼국유사』 같은 옛 책에 단군 이야기가 실려 있다고 알려 준다. 출구 1번에서 고려를 삼국 앞에 둔 학생에게는 나라의 차례를 다시 읽게 한다.',
          exit: [
            XC('timeline', { cards: [{ id: 'kor', text: '고려' }, { id: 'go', text: '고조선' }, { id: 'jo', text: '조선' }], axis: ['옛날', '오늘날'] }, '세 나라를 세워진 차례대로 놓아 보세요.', { order: ['go', 'kor', 'jo'] }, 0.2),
            CH('고조선을 세운 사람은 누구인가요?', ['단군왕검', '세종대왕'], 0, '단군왕검이 우리 역사의 첫 나라 고조선을 세웠다고 전해져요.'),
            MOOD,
          ],
        },
        wsTitle: '첫 나라 고조선',
        ws: [
          { type: 'blank', prompt: '나라의 차례를 채우세요.', text: '고조선 → 삼국 → ___ → 조선 → 대한제국 → 대한민국', answer: '고려' },
          { type: 'choice', prompt: '개천절에 기념하는 일에 ○ 하세요.', options: ['고조선을 세운 일', '한글을 만든 일'], answer: '고조선을 세운 일' },
          { type: 'short', prompt: '단군 이야기에서 곰이 사람이 된 까닭을 써 보세요.' },
          { type: 'draw', prompt: '고조선을 세우는 단군왕검을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 고조선과 조선을 같은 나라로 여긴다 → 시간 띠의 양 끝에 놓고 견준다. ② 단군 이야기를 그대로 사실로 여기거나 거짓으로만 여긴다 → 옛 책에 실려 전해 오는 건국 이야기라고 알려 준다.',
      }),

      LESSON(9, {
        title: '자음 기본 글자가 본뜬 모양 잇고 한글을 만든 때 시간 띠에 놓기',
        objective: '한글날에 자음 기본 글자가 소리 내는 기관의 모양을 본떴음을 알고, 훈민정음을 만들고 알린 차례를 놓을 수 있다.',
        draw: 'a paper side view of a mouth and tongue beside big paper letters ㄱ ㄴ ㅁ ㅅ ㅇ',
        banner: '자음은 어떻게 만들었을까', extra: [{ motif: 'leaf', x: 150, y: 206, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"ㄴ을 소리 내 보세요. 혀끝이 어디에 닿나요?" 대답을 듣고(기다릴 반응: "윗니 뒤요", "입천장이요") 세종대왕이 자음 기본 글자를 소리 낼 때 혀·입·이·목구멍의 모양을 본떠 만들었다고 알린다. 시연 단추로 ㅁ을 \'입 모양\'에 잇는다. "ㄱ은 그냥 꺾은 막대예요"라는 말이 나오면 "혀뿌리가 목구멍을 막는 모양을 본떴어요"라고 알려 준다.',
          student: 'ㅁ, ㅅ을 소리 내 보고 입과 이가 어떻게 되는지 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'match', topic: '본뜬 모양', slots: [{ id: 'm', label: '입 모양' }], cards: ['ㅁ', 'ㄱ'] }, { match: { m: 'ㅁ' } }),
        },
        acts: [
          {
            title: '활동 1. 자음 기본 글자와 본뜬 모양 잇기', tool: 'mindmap',
            teacher: '"소리를 내 보고 혀와 입을 느껴 보세요." 글자마다 직접 소리를 내며 잇게 한다. ㅅ과 ㅇ을 바꾸는 학생에게는 ㅅ은 이, ㅇ은 목구멍이라고 짚는다.',
            task: '자음 기본 글자와 본뜬 발음 기관을 이어요.',
            items: [
              MM('자음 기본 글자와 본뜬 모양을 이어 보세요.', '본뜬 모양', [{ id: 'g', label: 'ㄱ' }, { id: 'n', label: 'ㄴ' }, { id: 'm', label: 'ㅁ' }], ['혀뿌리가 목을 막는 모양', '혀끝이 잇몸에 닿는 모양', '입 모양', '눈 모양'], { g: '혀뿌리가 목을 막는 모양', n: '혀끝이 잇몸에 닿는 모양', m: '입 모양' }, 0.35),
              MM('남은 자음 기본 글자와 본뜬 모양을 이어 보세요.', '본뜬 모양 더 알기', [{ id: 's', label: 'ㅅ' }, { id: 'o', label: 'ㅇ' }], ['이 모양', '목구멍 모양', '코 모양'], { s: '이 모양', o: '목구멍 모양' }, 0.3),
              MP('자음 기본 글자 다섯 가운데 둘을 골라 담아 보세요.', '기본 글자', ['ㄱ', 'ㅅ', 'ㅋ', 'ㅌ'], ['ㄱ', 'ㅅ'], 0.35,
                { conclude: '자음 기본 글자는 ㄱ·ㄴ·ㅁ·ㅅ·ㅇ이에요. ㅋ·ㅌ은 기본 글자에 획을 더해 만들었어요.' }),
            ],
          },
          {
            title: '활동 2. 한글을 만들고 알린 차례 놓기', tool: 'timeline',
            teacher: '"훈민정음을 만든 해와 백성에게 널리 알린 해는 같을까요?" 1443년에 만들고 1446년에 반포했다는 점을 짚는다. 한글날(10월 9일)은 훈민정음 반포를 기념한다고 알려 준다.',
            task: '한글을 만들고 알린 일을 차례대로 놓아요.',
            items: [
              TO('한글과 관련된 일을 차례대로 놓아 보세요.', [{ id: 'make', text: '훈민정음 창제', big: '1443' }, { id: 'pub', text: '훈민정음 반포', big: '1446' }, { id: 'today', text: '오늘 한글날 기념', motif: 'star' }], ['make', 'pub', 'today'], 0.25),
              TM('연도와 그해의 일을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y43', label: '1443년' }, { id: 'y46', label: '1446년' }], ['훈민정음을 만듦', '훈민정음을 널리 알림', '측우기를 만듦'], { y43: '훈민정음을 만듦', y46: '훈민정음을 널리 알림' }, 0.35),
              CO('10월의 기념일을 달력 차례로 놓아 보세요.', [{ id: 'hg', text: '한글날', big: '9일' }, { id: 'gc', text: '개천절', big: '3일' }], ['gc', 'hg'], 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"세종대왕이 소리 내는 모양을 본떠 글자를 만든 까닭은 무엇일까요?" 백성이 쉽게 익히도록 하려는 뜻이었다고 정리한다. 출구 1번에서 ㅇ을 입 모양에 잇는 학생에게는 소리를 내어 보게 한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '어떤 모양일까', slots: [{ id: 's', label: '이 모양' }, { id: 'o', label: '목구멍 모양' }], cards: ['ㅅ', 'ㅇ', 'ㄹ'] }, '본뜬 모양에 알맞은 자음을 이어 보세요.', { match: { s: 'ㅅ', o: 'ㅇ' } }, 0.25),
            CH('한글날은 무엇을 기념하는 날인가요?', ['훈민정음을 널리 알린 일', '고조선을 세운 일'], 0, '한글날(10월 9일)은 1446년 훈민정음 반포를 기념해요.'),
            MOOD,
          ],
        },
        wsTitle: '자음은 어떻게 만들었을까',
        ws: [
          { type: 'table', prompt: '자음 기본 글자와 본뜬 모양을 쓰세요.', columns: ['글자', '본뜬 모양'], cells: [['ㄱ', ''], ['ㄴ', ''], ['ㅁ', ''], ['ㅅ', ''], ['ㅇ', '']], answer: '혀뿌리가 목구멍을 막는 모양 / 혀끝이 윗잇몸에 닿는 모양 / 입 모양 / 이 모양 / 목구멍 모양' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '훈민정음은 ___년에 만들고 1446년에 반포했다.', answer: '1443' },
          { type: 'choice', prompt: '자음 기본 글자에 ○ 하세요.', options: ['ㄴ', 'ㅌ'], answer: 'ㄴ' },
          { type: 'short', prompt: '한글이 배우기 쉬운 까닭을 오늘 배운 것으로 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 창제(1443)와 반포(1446)를 같은 해로 여긴다 → "만든 해, 알린 해"로 나누어 말하게 한다. ② 모든 자음이 발음 기관을 본떴다고 여긴다 → 기본 글자 다섯에 획을 더해 나머지를 만들었다고 정리한다.',
      }),

      LESSON(10, {
        title: '광주에서 시작된 학생독립운동의 차례 놓고 지도에서 퍼진 곳 찾기',
        objective: '1929년 학생독립운동이 광주에서 시작되어 퍼진 차례를 말하고, 지도에서 관련 지역을 찾을 수 있다.',
        draw: 'students in old school uniforms walking from a paper train station toward a city, autumn paper leaves',
        banner: '1929년 광주의 학생들', extra: [{ motif: 'leaf', x: 150, y: 206, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"11월 3일은 어떤 날인지 기억하나요?" 대답을 듣고(기다릴 반응: "학생들이 용기 낸 날이요") 1929년 10월 나주역에서 일본인 학생들이 우리 여학생을 괴롭힌 일로 다툼이 일어났고, 11월 3일 광주의 학생들이 차별에 맞서 거리로 나섰다고 알린다. 시연 단추로 두 장면을 놓는다.',
          student: '학생이 할 수 있는 용기 있는 일을 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'najo', text: '나주역에서 다툼', motif: 'cloud' }, { id: 'gj', text: '광주 학생들이 나서요', motif: 'sun' }] }, { order: ['najo', 'gj'] }),
        },
        acts: [
          {
            title: '활동 1. 학생독립운동의 차례 놓기', tool: 'story',
            teacher: '"광주에서 시작된 운동은 어디까지 퍼졌을까요?" 장면을 놓은 뒤 처음부터 읽게 한다. 3·1운동 이후 가장 큰 민족 운동의 하나로 전국의 학교로 퍼졌다고 정리한다.',
            task: '학생독립운동의 장면을 차례대로 놓아요.',
            items: [
              SO('학생독립운동의 흐름을 차례대로 놓아 보세요.', '1929년 학생들', ['1', '2', '3'], [{ id: 'najo', text: '10월 나주역 다툼', motif: 'cloud' }, { id: 'gj', text: '11월 3일 광주 시위', motif: 'sun' }, { id: 'nation', text: '전국 학교로 퍼짐', motif: 'star' }], ['najo', 'gj', 'nation'], 0.25),
              SO('기념일이 된 차례를 놓아 보세요.', '기념일이 되기까지', ['처음', '가운데', '끝'], [{ id: 'move', text: '학생들이 나섬', motif: 'sun' }, { id: 'day', text: '학생의 날로 기념', motif: 'flower' }, { id: 'now', text: '학생독립운동기념일', motif: 'star' }], ['move', 'day', 'now'], 0.25),
              SF('광주 학생들이 외친 마음을 채워 보세요.', ['차별을 멈춰라', '공부를 멈춰라', '모두 집에 가라'], [{ id: 'b1', who: '학생들', motif: 'sun', label: '우리 학생에 대한 ___!' }], { b1: '차별을 멈춰라' }, 0.2),
            ],
          },
          {
            title: '활동 2. 칸 지도에서 시작된 곳 찾기', tool: 'map',
            teacher: '"광주는 서울에서 어느 쪽에 있을까요?" 나주는 광주와 가까운 도시라고 알려 준다. 3·1운동처럼 학생독립운동도 한 곳에서 시작해 여러 지역으로 퍼졌다는 점을 견주게 한다.',
            task: '칸 지도에서 학생독립운동과 관련된 곳에 핀을 꽂고 물음에 답해요.',
            items: [
              MI('학생독립운동이 시작된 광주에 핀을 꽂아 보세요.', KOR([P.seoul, P.gwangju, P.daegu, P.busan]), { place: '광주' }, 0.15),
              MQ('지도에서 광주와 다른 도시를 보고 운동이 어떻게 되었는지 골라 보세요.', KOR([P.seoul, P.gwangju, P.busan]), '광주에서 시작된 운동은 어떻게 되었나요?', ['광주에서만 끝남', '서울 등 전국으로 퍼짐'], 1, 0.2),
              MQ('지도를 보며 두 운동이 처음 시작된 도시를 골라 보세요.', KOR([P.seoul, P.gwangju, P.busan, P.cheonan]), '두 운동이 처음 시작된 도시를 바르게 짝지은 것은?', ['3·1운동-서울, 학생독립운동-광주', '3·1운동-부산, 학생독립운동-서울'], 0, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘날 학생인 우리는 차별을 보았을 때 무엇을 할 수 있을까요?" 출구 1번에서 광주 시위를 나주역 다툼보다 앞에 둔 학생에게는 무엇이 계기가 되었는지 다시 묻는다. 1년 동안 놓은 시간 띠를 떠올리며 마친다.',
          exit: [
            XC('story', { title: '11월 3일까지', slots: ['처음', '가운데', '끝'], cards: [{ id: 'gj', text: '광주 학생 시위', motif: 'sun' }, { id: 'najo', text: '나주역 다툼', motif: 'cloud' }, { id: 'all', text: '전국으로 퍼짐', motif: 'star' }] }, '학생독립운동의 장면을 차례대로 놓아 보세요.', { order: ['najo', 'gj', 'all'] }, 0.2),
            CH('학생독립운동이 일어난 해는 언제인가요?', ['1929년', '1919년'], 0, '학생독립운동은 1929년 광주에서 일어났어요. 1919년은 3·1운동이에요.'),
            MOOD,
          ],
        },
        wsTitle: '1929년 광주의 학생들',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 학생독립운동이 시작된 곳에 ○ 하세요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.gwangju, PW.busan]), caption: '우리나라 칸 지도' }], answer: '왼쪽 아래 광주 ○' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '학생독립운동은 ___년 11월 3일 광주에서 일어났다.', answer: '1929' },
          { type: 'choice', prompt: '학생들이 맞선 것에 ○ 하세요.', options: ['차별', '운동회'], answer: '차별' },
          { type: 'short', prompt: '3·1운동과 학생독립운동이 닮은 점을 한 가지 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 1919(3·1운동)과 1929(학생독립운동)를 섞는다 → 두 운동을 시간 띠에 나란히 놓는다. ② 다툼 자체를 운동의 전부로 여긴다 → 차별에 맞서 전국 학생이 함께한 민족 운동이라는 점을 짚는다. 특정 나라 사람 전체를 미워하는 말은 사실과 사람을 나누어 바로잡는다.',
      }),
    ],
  });

})();
