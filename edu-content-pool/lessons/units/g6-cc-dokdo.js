/* 6학년 창체 계기교육 — 독도교육(학년마다 10차시). 고학년: 영토·영해·영공, 일본 쪽 옛 기록·칙령 제41호와 시마네현 고시·연합국 각서와 평화선을 사료로 읽고, 사실·의견을 가려 근거로 대응한다.
 * 근거: 교육부 「독도교육 활성화 계획」(교과·창체 통합 연간 10시간 이상 권장, 독도교육주간). 초등 내용 체계: 자연환경·지리적 특성·역사·가치.
 * 사실(연도·거리·문서 이름)은 외교부 독도 누리집·동북아역사재단 독도 자료의 서술만 쓴다. 10월 25일 독도의 날은 법정기념일이 아니다(독도교육주간 연계 시기의 예).
 * 정치적 중립: 자료와 근거로 말하고, 특정 국가의 국민 전체를 비난하는 표현은 쓰지 않는다. 인물 이름은 가명이다(역사 인물 제외). */
(function () {
  const GRADE = 6;
  const ID = `g${GRADE}-cc-dokdo`;
  const UNIT = `g${GRADE}-창체-dokdo`;
  const TITLE = '독도교육 — 근거로 말하는 독도 영토 주권';
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

  // 사료 카드(외교부 독도 누리집·동북아역사재단 독도 자료의 서술)
  const S = {
    sejong: { id: 'sejong', text: '세종실록 지리지: 두 섬 보임', back: '1454년' },
    bakufu: { id: 'bakufu', text: '에도 막부: 울릉도 도해 금지', back: '1696년' },
    dajokan: { id: 'dajokan', text: '태정관 지령: 일본과 무관', back: '1877년' },
    edict: { id: 'edict', text: '칙령 제41호: 석도 관할', back: '1900년' },
    shimane: { id: 'shimane', text: '시마네현 고시: 편입 주장', back: '1905년' },
    scapin: { id: 'scapin', text: '연합국 각서 677호: 제외', back: '1946년' },
    peace: { id: 'peace', text: '평화선 선언', back: '1952년' },
  };

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '6학년 독도교육은 초등 독도교육을 마무리하며 "독도는 우리 땅"을 감정이 아니라 자료와 근거로 말하는 힘을 기르는 10차시입니다. 1차시에 영토·영해·영공의 뜻과 독도 둘레 바다를 지도에서 읽고, 2~4차시는 일본 쪽 기록(1696년 에도 막부의 울릉도 도해 금지, 1877년 태정관 지령), 1900년 대한제국 칙령 제41호와 1905년 시마네현 고시의 차례, 광복 뒤 연합국 최고사령관 각서 제677호(1946)와 평화선 선언(1952)을 시간 띠로 읽습니다. 5~6차시는 독도 바다의 자원과 오늘 독도를 지키는 노력을 살피고, 7~9차시는 독도에 관한 말을 사실과 의견으로 가르고, 잘못된 정보에 근거로 정중하게 대응하며, 출처를 밝힌 알림 글을 씁니다. 10차시에 근거·가치·실천으로 초등 독도 공부를 묶습니다. 사회과의 독도·영토 관련 수업과 묶어 운영할 수 있고, 교육부는 교과와 창체를 통합해 연간 10시간 이상 운영을 권장합니다(시수 인정은 학교 결정). 연도·문서 이름은 외교부·동북아역사재단 자료의 서술만 쓰고, 정부의 주장과 그 나라 사람들을 나누어 보며 특정 국가의 국민 전체를 비난하지 않도록 이끕니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '영토·영해·영공으로 독도 둘레 읽기',
        objective: '영토·영해·영공의 뜻을 알고, 독도와 그 둘레 바다가 우리나라의 영역임을 지도에서 설명할 수 있다.',
        draw: 'a paper diagram of a rocky islet with a dotted boundary ring of sea around it and a dome of sky above, labeled with three small flags',
        banner: '영토·영해·영공', extra: [{ motif: 'cloud', x: 330, y: 60 }],
        intro: {
          teacher: '"나라의 영역은 땅만일까요?" 대답을 듣고(기다릴 반응: "땅만요", "바다도요") 땅(영토), 땅에 붙은 바다(영해), 그 위의 하늘(영공)이 모두 나라의 영역이라고 알려 준다. 우리나라 영해는 기준선에서 12해리까지이고, 독도 둘레 바다도 우리 영해라고 덧붙인다. 시연 단추로 독도 둘레 바다 칸에 핀이 꽂히는 모습을 보여 준다.',
          student: '\'우리나라 하늘\'이라는 말을 들으면 무엇이 떠오르는지 짝에게 말해 봐요.',
          demo: { tool: 'map', options: KOR([P.dokdo, P.ulleung]), sequence: [{ from: '독도', dir: '남', steps: 1 }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 영역의 세 갈래 잇기', tool: 'mindmap',
            teacher: '"영해는 아무 바다나가 아니라 나라의 땅에 붙은 바다예요." 낱말과 뜻을 잇고 독도의 예를 들어 말하게 한다. 영공을 우주까지로 여기는 학생에게는 영토와 영해 위의 하늘이라고 정리한다.',
            task: '영토·영해·영공의 뜻을 잇고, 독도의 예를 나누어요.',
            items: [
              MM('낱말과 뜻을 이어 보세요.', '나라의 영역', [{ id: 't', label: '영토' }, { id: 's', label: '영해' }, { id: 'a', label: '영공' }], ['나라의 땅', '땅에 붙은 나라의 바다', '땅과 바다 위의 하늘', '먼 우주 전체'], { t: '나라의 땅', s: '땅에 붙은 나라의 바다', a: '땅과 바다 위의 하늘' }, 0.25),
              MS('독도의 예를 영토·영해·영공으로 나누어 보세요.', '독도의 영역', ['영토', '영해', '영공'], ['동도와 서도', '독도 둘레 12해리 바다', '독도 위의 하늘'], { '영토': ['동도와 서도'], '영해': ['독도 둘레 12해리 바다'], '영공': ['독도 위의 하늘'] }, 0.25),
              MP('영토에 대해 맞는 말만 골라 보세요.', '영토란', ['나라의 주권이 미치는 땅', '영해와 영공의 기준이 돼요', '어느 나라 것도 아닌 땅', '바다만을 말해요'], ['나라의 주권이 미치는 땅', '영해와 영공의 기준이 돼요'], 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 지도에서 독도 둘레 영해 찾기', tool: 'map',
            teacher: '"독도에서 한 칸 떨어진 바다도 우리 영해 안이라고 생각해 봐요." 칸 지도는 줄인 그림이라 실제 12해리와 칸 크기가 같지 않다는 점을 먼저 밝힌다. 육지 칸에 꽂는 학생에게는 바다 칸인지 확인하게 한다.',
            task: '우리나라 칸 지도에서 독도와 둘레 바다를 찾아요.',
            items: [
              MI('독도 바로 북쪽의 바다 칸(독도 영해의 한 곳)에 핀을 꽂아 보세요.', KOR([P.dokdo, P.ulleung, P.seoul]), { from: '독도', dir: '북', steps: 1 }, 0.2),
              MI('울릉도와 독도 사이 바다 쪽, 독도에서 서쪽으로 한 칸 간 곳에 핀을 꽂아 보세요.', KOR([P.dokdo, P.ulleung, P.busan]), { from: '독도', dir: '서', steps: 1 }, 0.25),
              MQ('지도를 보고 독도에 대해 바른 설명을 골라 보세요.', KOR([P.dokdo, P.ulleung, P.seoul]), '바른 설명은?', ['섬과 둘레 바다, 하늘이 모두 우리 영역', '섬만 우리 영역이고 바다는 아님', '바다만 우리 영역이고 섬은 아님'], 0, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"독도가 우리 영토라는 것은 둘레 바다와 하늘에 대해 무엇을 뜻할까요?" 출구 1번에서 영공을 우주로 이은 학생에게는 영토·영해 위의 하늘이라는 점을 다시 짚는다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '영역 확인', slots: [{ id: 's', label: '독도 둘레의 우리 바다' }, { id: 'a', label: '독도 위의 우리 하늘' }], cards: ['영해', '영공', '공해'] }, '설명에 맞는 영역 이름을 이어 보세요.', { match: { s: '영해', a: '영공' } }, 0.2),
            { type: 'choice', prompt: '우리나라 영해는 기준선에서 몇 해리까지인가요?', options: ['12해리', '2해리', '120해리'], answer: 0, difficulty: 0.2, explain: '우리나라 영해는 기준선에서 12해리까지예요.' },
            MOOD,
          ],
        },
        wsTitle: '영토·영해·영공',
        ws: [
          { type: 'table', prompt: '나라의 영역을 정리하세요.', columns: ['영역', '뜻', '독도의 예'], cells: [['영토', '', ''], ['영해', '', ''], ['영공', '', '']], answer: '나라의 땅·동도와 서도 / 땅에 붙은 바다·독도 둘레 12해리 / 땅과 바다 위 하늘·독도 위 하늘' },
          { type: 'figure', wide: true, prompt: '지도에서 독도와 둘레 바다에 동그라미를 그리세요.', tool: 'map', figures: [{ options: KORW([PW.dokdo, PW.ulleung, PW.seoul]), caption: '우리나라 칸 지도' }], answer: '독도와 둘레 바다' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '영토가 있으면 그 둘레에 ___와 그 위에 ___이 생긴다.', answer: '영해, 영공' },
          { type: 'short', prompt: '독도가 작은 섬이어도 소중한 까닭을 영역과 이어 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 영역을 땅만으로 여긴다 → 영해·영공이 영토를 기준으로 생긴다는 것을 그림으로 보여 준다. ② 칸 지도의 칸을 실제 거리로 여긴다 → 줄인 그림임을 밝힌다. ③ 영공을 우주 전체로 여긴다 → 영토·영해 위의 하늘이라고 정리한다.',
      }),

      LESSON(2, {
        title: '일본 쪽 옛 기록이 보여 주는 것 읽기',
        objective: '1696년 에도 막부의 울릉도 도해 금지와 1877년 태정관 지령이 무엇을 보여 주는지 설명할 수 있다.',
        draw: 'two old paper documents with seals laid over a sea map, one with a crossed-out boat symbol and one with a note beside two islands',
        banner: '일본 쪽 기록도 말해요', extra: [{ motif: 'star', x: 70, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"우리 기록만 근거가 될까요, 상대 나라의 기록도 근거가 될까요?" 대답을 듣고(기다릴 반응: "우리 기록만요") 상대 나라 정부의 옛 기록이 독도가 일본 땅이 아니었음을 보여 준다면 더 힘 있는 근거가 된다고 알려 준다. 시연 단추로 사료 카드가 시간 띠에 놓이는 모습을 보여 준다.',
          student: '친구와 다툼이 있을 때, 친구가 쓴 쪽지가 증거가 된다면 어떤 점이 좋을지 짝에게 말해 봐요.',
          demo: { tool: 'timeline', options: { cards: [S.bakufu, S.dajokan], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['bakufu', 'dajokan'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사료를 시간 띠에 놓기', tool: 'timeline',
            teacher: '"이 기록은 누가 남겼나요?" 에도 막부와 메이지 정부의 태정관이 모두 일본 정부 기관이라는 점을 짚는다. 태정관 지령을 막부보다 앞에 두는 학생에게는 "막부 시대가 끝나고 메이지 정부가 섰어요"라고 알려 준다.',
            task: '조선과 일본의 옛 사료를 일어난 차례대로 시간 띠에 놓고, 연도와 이어요.',
            items: [
              TO('세 사료를 일어난 차례대로 놓아 보세요.', [S.dajokan, S.sejong, S.bakufu], ['sejong', 'bakufu', 'dajokan'], 0.25),
              TM('연도와 그해의 사료를 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y1696', label: '1696년' }, { id: 'y1877', label: '1877년' }], [S.bakufu, S.dajokan, S.edict], { y1696: 'bakufu', y1877: 'dajokan' }, 0.3),
              TS('사료를 남긴 나라에 따라 나누어 보세요.', ['조선·대한제국', '일본 정부'], [S.sejong, S.edict, S.bakufu, S.dajokan], { '조선·대한제국': ['sejong', 'edict'], '일본 정부': ['bakufu', 'dajokan'] }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 사료가 보여 주는 것 잇기', tool: 'mindmap',
            teacher: '"태정관 지령은 \'울릉도 외 한 섬은 일본과 관계없다\'고 했어요. 이 말은 무엇을 보여 줄까요?" 사료가 말하는 만큼만 말하게 한다. 사료를 부풀리는 학생에게는 원래 내용으로 돌아가게 한다.',
            task: '일본 쪽 사료와 그 사료가 보여 주는 것을 이어요.',
            items: [
              MM('사료와 보여 주는 것을 이어 보세요.', '사료가 말해요', [{ id: 'b', label: '에도 막부 도해 금지' }, { id: 'd', label: '태정관 지령' }], ['일본 사람의 울릉도 건너가기 금지', '울릉도와 한 섬은 일본과 무관', '독도에 일본 마을을 세움'], { b: '일본 사람의 울릉도 건너가기 금지', d: '울릉도와 한 섬은 일본과 무관' }, 0.3),
              MP('일본 쪽 사료가 근거로 힘 있는 까닭만 골라 보세요.', '힘 있는 까닭', ['상대 정부가 직접 남겼어요', '우리 기록과 같은 방향이에요', '우리가 새로 지어냈어요', '사진이 붙어 있어요'], ['상대 정부가 직접 남겼어요', '우리 기록과 같은 방향이에요'], 0.3),
              MS('사료를 읽는 바른 태도와 바르지 않은 태도로 나누어 보세요.', '사료 읽기', ['바른 태도', '바르지 않은 태도'], ['만든 주체와 때를 밝혀요', '말하는 만큼만 말해요', '없는 내용을 덧붙여요', '유리한 것만 골라 바꿔요'], { '바른 태도': ['만든 주체와 때를 밝혀요', '말하는 만큼만 말해요'], '바르지 않은 태도': ['없는 내용을 덧붙여요', '유리한 것만 골라 바꿔요'] }, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"일본 쪽 기록이 독도에 대해 무엇을 보여 주나요?" 출구 1번에서 태정관 지령을 1696년에 이은 학생에게는 막부와 메이지 정부의 차례를 다시 짚는다.',
          exit: [
            XC('timeline', { cards: [S.dajokan, S.edict, S.bakufu], axis: ['옛날', '오늘날'] }, '세 사료를 일어난 차례대로 시간 띠에 놓아 보세요.', { order: ['bakufu', 'dajokan', 'edict'] }, 0.25),
            { type: 'choice', prompt: '1877년 태정관 지령이 말한 것은 무엇인가요?', options: ['울릉도 외 한 섬은 일본과 관계없다', '독도를 일본 땅에 넣는다'], answer: 0, difficulty: 0.2, explain: '태정관 지령은 울릉도와 한 섬(독도)이 일본과 관계없다고 했어요.' },
            MOOD,
          ],
        },
        wsTitle: '일본 쪽 기록도 말해요',
        ws: [
          { type: 'table', prompt: '사료를 정리하세요.', columns: ['사료', '연도', '만든 주체', '내용'], cells: [['울릉도 도해 금지', '', '', ''], ['태정관 지령', '', '', '']], answer: '1696·에도 막부·일본 사람의 울릉도 건너가기 금지 / 1877·메이지 정부 태정관·울릉도 외 한 섬은 일본과 무관' },
          { type: 'choice', prompt: '일본 정부가 남긴 사료에 ○ 하세요.', options: ['태정관 지령', '『세종실록』 「지리지」'], answer: '태정관 지령' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '상대 나라 정부의 기록은 ___로서 힘이 있다.', answer: '근거' },
          { type: 'short', prompt: '사료를 읽을 때 조심할 점을 한 가지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 우리 기록만 근거라고 여긴다 → 상대 정부 기록의 힘을 견주게 한다. ② 막부와 메이지 정부의 차례를 헷갈린다 → 시대 이름을 먼저 시간 띠에 놓는다. ③ 사료를 부풀린다 → 원래 문장으로 돌아가 말하게 한다.',
      }),

      LESSON(3, {
        title: '칙령 제41호와 시마네현 고시 차례 견주기',
        objective: '1900년 대한제국 칙령 제41호가 1905년 시마네현 고시보다 앞섰다는 사실을 근거로 들어 말할 수 있다.',
        draw: 'two paper documents on a timeline ribbon, an imperial decree on the left marked earlier and a prefectural notice on the right marked later',
        banner: '무엇이 먼저일까', extra: [{ motif: 'star', x: 80, y: 110, color: 'rose', s: 0.6 }],
        intro: {
          teacher: '"1905년 일본 시마네현은 독도를 자기 현에 넣는다고 고시했어요. 그런데 그보다 앞서 무슨 일이 있었지요?" 대답을 듣고(기다릴 반응: "1900년 칙령이요") 대한제국이 이미 1900년 칙령 제41호로 석도(독도)를 관할하고 있었다는 점이 우리 정부가 시마네현 고시를 인정하지 않는 근거라고 알려 준다. 시연 단추로 두 문서가 시간 띠에 놓이는 모습을 보여 준다.',
          student: '이미 주인이 있는 물건에 다른 사람이 이름표를 붙이면 어떻게 될지 짝과 이야기해 봐요.',
          demo: { tool: 'timeline', options: { cards: [S.edict, S.shimane], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['edict', 'shimane'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 두 문서의 차례와 내용 잇기', tool: 'timeline',
            teacher: '"두 문서 사이는 몇 년인가요?" 1905−1900=5로 견주게 한다. 시마네현 고시를 먼저 두는 학생에게는 연도를 다시 읽게 한다. 시마네현 고시가 일본 중앙 정부의 대외 발표가 아닌 지방 현의 고시였다는 점도 덧붙인다.',
            task: '칙령 제41호와 시마네현 고시를 시간 띠에 놓고, 연도와 내용을 이어요.',
            items: [
              TO('네 사료를 일어난 차례대로 놓아 보세요.', [S.shimane, S.dajokan, S.edict, S.bakufu], ['bakufu', 'dajokan', 'edict', 'shimane'], 0.3),
              TM('연도와 그해의 사료를 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y1900', label: '1900년' }, { id: 'y1905', label: '1905년' }], [S.edict, S.shimane, S.scapin], { y1900: 'edict', y1905: 'shimane' }, 0.25,
                { conclude: '칙령 제41호(1900)는 시마네현 고시(1905)보다 5년 앞서 독도를 관할했어요.' }),
              TS('사료를 1900년 전과 1900년 뒤로 나누어 보세요.', ['1900년까지', '1900년 뒤'], [S.sejong, S.edict, S.shimane, S.scapin], { '1900년까지': ['sejong', 'edict'], '1900년 뒤': ['shimane', 'scapin'] }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 근거를 들어 말하기', tool: 'mindmap',
            teacher: '"시마네현 고시가 왜 효력이 없다고 말할 수 있을까요?" 이미 관할하던 땅이라는 점, 주인 없는 땅이 아니었다는 점을 근거로 말하게 한다. 감정적인 말을 고르는 학생에게는 근거가 있는 말인지 묻는다.',
            task: '우리 정부의 입장과 그 근거를 잇고, 근거 있는 말을 골라요.',
            items: [
              MM('주장과 근거를 이어 보세요.', '주장과 근거', [{ id: 'a', label: '독도는 주인 없는 땅이 아니었다' }, { id: 'b', label: '대한제국이 먼저 관할했다' }], ['세종실록 지리지·옛 지도', '1900년 칙령 제41호', '1905년 시마네현 고시'], { a: '세종실록 지리지·옛 지도', b: '1900년 칙령 제41호' }, 0.3),
              MP('근거가 있는 말만 골라 보세요.', '근거 있는 말', ['칙령이 5년 앞서요', '1877년 일본 정부도 무관하다 했어요', '그냥 우리 땅이니까요', '목소리가 크면 이겨요'], ['칙령이 5년 앞서요', '1877년 일본 정부도 무관하다 했어요'], 0.25),
              MM('낱말과 뜻을 이어 보세요.', '낱말 뜻', [{ id: 'k', label: '고시' }, { id: 'h', label: '관할' }], ['널리 알리는 공식 발표', '맡아서 다스림', '새로 발견함'], { k: '널리 알리는 공식 발표', h: '맡아서 다스림' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"1900년과 1905년, 이 두 해를 넣어 독도가 우리 땅인 근거를 말해 볼까요?" 출구 1번에서 고시를 칙령보다 앞에 둔 학생에게는 연도를 다시 견주게 한다.',
          exit: [
            XC('timeline', { mode: 'match', slots: [{ id: 'first', label: '먼저(1900년)' }, { id: 'later', label: '나중(1905년)' }], cards: [S.shimane, S.edict, S.peace], axis: ['옛날', '오늘날'] }, '먼저 나온 문서와 나중에 나온 문서를 이어 보세요. 맞지 않는 카드는 남겨요.', { match: { first: 'edict', later: 'shimane' } }, 0.25),
            { type: 'choice', prompt: '시마네현 고시를 인정할 수 없는 근거로 알맞은 것은 무엇인가요?', options: ['대한제국이 1900년에 이미 독도를 관할했다', '시마네현이 독도와 가깝다'], answer: 0, difficulty: 0.2, explain: '칙령 제41호가 5년 앞서 독도를 관할했어요.' },
            MOOD,
          ],
        },
        wsTitle: '무엇이 먼저일까',
        ws: [
          { type: 'table', prompt: '두 문서를 견주세요.', columns: ['', '칙령 제41호', '시마네현 고시'], cells: [['연도', '', ''], ['만든 곳', '', ''], ['내용', '', '']], answer: '1900 / 1905, 대한제국 / 일본 시마네현, 울도군이 석도 관할 / 독도 편입 주장' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '칙령 제41호는 시마네현 고시보다 ___년 앞선다.', answer: '5' },
          { type: 'choice', prompt: '근거가 있는 말에 ○ 하세요.', options: ['칙령이 5년 앞서요.', '그냥 우리 땅이니까요.'], answer: '칙령이 5년 앞서요.' },
          { type: 'short', prompt: '1900년과 1905년을 넣어 독도가 우리 땅인 근거를 한 문장으로 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 연도만 외우고 앞뒤 관계를 말하지 못한다 → 두 해의 차이를 계산하게 한다. ② 감정으로 반박한다 → "근거가 무엇인가요?"를 습관으로 묻는다. ③ 시마네현 고시를 일본 전체의 공식 대외 발표로 여긴다 → 지방 현의 고시였다는 점을 짚는다.',
      }),

      LESSON(4, {
        title: '광복 뒤 연합국 각서와 평화선 읽기',
        objective: '1946년 연합국 최고사령관 각서 제677호와 1952년 평화선 선언이 독도에 대해 무엇을 보여 주는지 설명할 수 있다.',
        draw: 'a paper document with an international seal and a map line around Korean waters including a small islet, with a sunrise behind',
        banner: '광복 뒤의 독도', extra: [{ motif: 'sun', x: 90, y: 80, s: 0.5 }],
        intro: {
          teacher: '"1945년 광복 뒤, 독도는 어떻게 되었을까요?" 대답을 듣고 1946년 연합국 최고사령관 각서 제677호가 독도를 일본의 통치 범위에서 제외했고, 1952년 우리 정부가 평화선을 선언해 독도를 그 안에 넣었다고 알려 준다. 시연 단추로 두 문서가 시간 띠에 놓이는 모습을 보여 준다. "연합국이 독도를 한국에 주었어요"라는 대답에는 "각서가 말하는 것은 일본의 통치 범위에서 뺐다는 것이에요"라고 정확히 짚는다.',
          student: '광복이라는 말의 뜻을 짝과 함께 말해 봐요.',
          demo: { tool: 'timeline', options: { cards: [S.scapin, S.peace], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['scapin', 'peace'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 광복 전후 사료 차례 놓기', tool: 'timeline',
            teacher: '"광복은 1945년이에요. 이 문서들은 광복 전일까요, 뒤일까요?" 광복을 기준으로 나누게 한다. 각서를 평화선 뒤에 두는 학생에게는 연도를 다시 읽게 한다.',
            task: '광복 전후의 사료를 시간 띠에 놓고 나누어요.',
            items: [
              TO('네 사료를 일어난 차례대로 놓아 보세요.', [S.peace, S.shimane, S.scapin, S.edict], ['edict', 'shimane', 'scapin', 'peace'], 0.3),
              TS('사료를 광복 전과 광복 뒤로 나누어 보세요.', ['광복 전', '광복 뒤'], [S.edict, S.shimane, S.scapin, S.peace], { '광복 전': ['edict', 'shimane'], '광복 뒤': ['scapin', 'peace'] }, 0.25),
              TM('연도와 그해의 사료를 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y1946', label: '1946년' }, { id: 'y1952', label: '1952년' }], [S.scapin, S.peace, S.shimane], { y1946: 'scapin', y1952: 'peace' }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 사료가 보여 주는 것 잇기', tool: 'mindmap',
            teacher: '"이 문서를 낸 곳은 어디인가요?" 각서는 연합국(제3자)의 문서, 평화선은 우리 정부의 선언이라는 점을 짚는다. 문서가 말하는 만큼만 말하게 한다.',
            task: '광복 뒤 사료와 그 사료를 낸 곳, 보여 주는 것을 이어요.',
            items: [
              MM('사료와 보여 주는 것을 이어 보세요.', '사료가 말해요', [{ id: 's', label: '연합국 각서 제677호' }, { id: 'p', label: '평화선 선언' }], ['독도를 일본 통치 범위에서 뺌', '독도를 우리 바다 안에 넣음', '독도를 공해로 정함'], { s: '독도를 일본 통치 범위에서 뺌', p: '독도를 우리 바다 안에 넣음' }, 0.3),
              MS('사료를 낸 곳에 따라 나누어 보세요.', '누가 냈을까', ['우리 정부', '일본 정부·관청', '연합국'], [S.peace, S.edict, S.shimane, S.scapin], { '우리 정부': ['peace', 'edict'], '일본 정부·관청': ['shimane'], '연합국': ['scapin'] }, 0.3),
              MP('제3자(연합국) 문서가 근거로 힘 있는 까닭만 골라 보세요.', '제3자 문서', ['어느 한쪽 나라가 쓴 게 아니에요', '광복 뒤의 공식 문서예요', '그림이 예뻐요', '가장 최근 문서예요'], ['어느 한쪽 나라가 쓴 게 아니에요', '광복 뒤의 공식 문서예요'], 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"광복 뒤 두 문서가 독도에 대해 보여 주는 것을 말해 볼까요?" 출구 1번에서 평화선을 각서보다 앞에 둔 학생에게는 연도를 다시 견주게 한다.',
          exit: [
            XC('timeline', { cards: [S.peace, S.edict, S.scapin], axis: ['옛날', '오늘날'] }, '세 사료를 일어난 차례대로 시간 띠에 놓아 보세요.', { order: ['edict', 'scapin', 'peace'] }, 0.2),
            { type: 'choice', prompt: '연합국 최고사령관 각서 제677호가 독도에 대해 한 일은 무엇인가요?', options: ['일본의 통치 범위에서 독도를 제외했다', '독도를 일본에 넣었다'], answer: 0, difficulty: 0.2, explain: '1946년 각서는 독도를 일본의 통치·행정 범위에서 뺐어요.' },
            MOOD,
          ],
        },
        wsTitle: '광복 뒤의 독도',
        ws: [
          { type: 'table', prompt: '광복 뒤 사료를 정리하세요.', columns: ['사료', '연도', '낸 곳', '내용'], cells: [['연합국 최고사령관 각서 제677호', '', '', ''], ['평화선 선언', '', '', '']], answer: '1946·연합국·독도를 일본 통치 범위에서 제외 / 1952·대한민국 정부·독도를 우리 바다 안에 포함' },
          { type: 'choice', prompt: '제3자가 낸 문서에 ○ 하세요.', options: ['연합국 각서 제677호', '평화선 선언'], answer: '연합국 각서 제677호' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '평화선은 ___년에 우리 정부가 선언했다.', answer: '1952' },
          { type: 'short', prompt: '각서 제677호가 말하는 것과 말하지 않는 것을 나누어 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 각서를 \'독도를 한국에 준 문서\'로 부풀린다 → 일본 통치 범위에서 제외했다는 문장 그대로 말하게 한다. ② 문서를 낸 곳을 헷갈린다 → 낸 곳(우리·일본·연합국)을 먼저 말하게 한다. ③ 광복 전후 차례를 헷갈린다 → 1945년을 기준선으로 놓는다.',
      }),

      LESSON(5, {
        title: '독도 바다의 자원과 가치 따져 보기',
        objective: '독도 둘레 바다의 수산 자원과 바닷속 자원을 알고, 그 가치를 설명할 수 있다.',
        draw: 'a cross-section of the sea around rocky islets showing fishing boats above, schools of fish and squid, and layered seabed with glowing deposits',
        banner: '독도 바다의 자원', extra: [{ motif: 'wave', y: 240 }],
        intro: {
          teacher: '"독도 둘레 바다에는 어떤 자원이 있을까요?" 대답을 듣고(기다릴 반응: "오징어요", "새우요") 난류와 한류가 만나 좋은 어장이 되고, 바다 밑에는 가스 하이드레이트 같은 자원이 있는 것으로 알려져 있다고 알려 준다. 시연 단추로 자원 카드가 나뉘는 모습을 보여 준다. 숫자로 자원의 양을 묻는 학생에게는 "확인된 자료에 있는 숫자만 쓰기로 해요"라고 답한다.',
          student: '우리 생활에서 바다에서 얻는 것을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '독도 바다 자원', slots: ['수산 자원', '바닷속 자원'], cards: ['오징어', '가스 하이드레이트'], shuffle: false }, sequence: [{ sort: { '수산 자원': ['오징어'], '바닷속 자원': ['가스 하이드레이트'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 자원 나누기', tool: 'mindmap',
            teacher: '"이 자원은 바다에 사는 생물인가요, 바다 밑 땅속에 있는 것인가요?" 미역을 바닷속 자원에 넣는 학생에게는 생물은 수산 자원이라고 구별해 준다.',
            task: '독도 바다의 자원을 수산 자원과 바닷속 자원으로 나누고, 까닭을 이어요.',
            items: [
              MS('자원을 수산 자원과 바닷속 자원으로 나누어 보세요.', '독도 바다 자원', ['수산 자원', '바닷속 자원'], ['오징어', '독도새우', '미역', '가스 하이드레이트'], { '수산 자원': ['오징어', '독도새우', '미역'], '바닷속 자원': ['가스 하이드레이트'] }, 0.25),
              MM('특징과 그 까닭을 이어 보세요.', '왜 그럴까', [{ id: 'f', label: '물고기가 많아요' }, { id: 'v', label: '둘레 바다가 소중해요' }], ['난류와 한류가 만나서', '영해와 바다 자원이 딸려서', '섬이 커서'], { f: '난류와 한류가 만나서', v: '영해와 바다 자원이 딸려서' }, 0.3),
              MP('독도 바다 자원에 대해 맞는 말만 골라 보세요.', '맞는 말', ['좋은 어장이에요', '바닷속 자원이 알려져 있어요', '자원이 하나도 없어요', '자원 양이 다 밝혀졌어요'], ['좋은 어장이에요', '바닷속 자원이 알려져 있어요'], 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 자원을 지키며 쓰는 방법 고르기', tool: 'emotion',
            teacher: '"자원이 많다고 마구 쓰면 어떻게 될까요?" 결과 칸을 함께 읽고, 지속 가능하게 쓰는 방법을 말하게 한다. 개발만이 가치라고 여기는 학생에게는 천연보호구역이라는 점을 함께 떠올리게 한다.',
            task: '독도 바다 자원을 둘러싼 상황에서 알맞은 선택을 고르고 결과를 봐요.',
            items: [
              EB('어린 물고기가 그물에 많이 걸렸어요. 어떻게 할까요?', '독도 바다에서 어린 물고기가 잡혔어요.', [
                { id: 'keep', text: '모두 가져가 팔아요', result: '다음 해 물고기가 크게 줄어요.', mood: '걱정', why: '어린 물고기를 다 잡으면 자원이 다시 자라지 못해요.' },
                { id: 'free', text: '정해진 대로 바다에 풀어 줘요', result: '물고기가 자라 다시 어장이 풍성해져요.', mood: '뿌듯함' }], 'free', 0.2),
              EB('모둠이 독도 개발 아이디어를 내요. 어떻게 할까요?', '친구가 독도에 큰 호텔을 짓자고 해요.', [
                { id: 'hotel', text: '좋다며 바로 그려요', result: '천연보호구역의 생태를 해칠 수 있어요.', mood: '걱정', why: '독도는 섬 전체가 천연보호구역이에요.' },
                { id: 'think', text: '생태를 지키는 방법부터 따져요', result: '보호와 이용을 함께 생각하게 돼요.', mood: '편안함' }], 'think', 0.25),
              EB('인터넷에서 독도 자원의 양이 적힌 글을 봤어요. 어떻게 할까요?', '출처 없는 글에 "독도 자원은 수백조 원"이라고 적혀 있어요.', [
                { id: 'share', text: '그대로 발표 자료에 써요', result: '근거를 물으면 답하지 못해요.', mood: '불안', why: '출처 없는 숫자는 근거가 될 수 없어요.' },
                { id: 'check', text: '공식 자료에서 확인하고 없으면 빼요', result: '발표가 믿을 만해져요.', mood: '뿌듯함' }], 'check', 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"독도 바다의 자원을 지키며 쓰려면 무엇이 필요할까요?" 출구 1번에서 미역을 바닷속 자원에 둔 학생에게는 생물인지 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '자원 정리', slots: ['수산 자원', '바닷속 자원'], cards: ['전복', '소라', '바다 밑 가스 자원'] }, '자원을 수산 자원과 바닷속 자원으로 나누어 보세요.', { sort: { '수산 자원': ['전복', '소라'], '바닷속 자원': ['바다 밑 가스 자원'] } }, 0.2),
            { type: 'choice', prompt: '독도 바다가 좋은 어장인 까닭은 무엇인가요?', options: ['난류와 한류가 만나서', '바다가 아주 얕아서', '사람이 물고기를 풀어서'], answer: 0, difficulty: 0.15, explain: '두 바닷물이 만나는 곳에 여러 물고기가 모여요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 바다의 자원',
        ws: [
          { type: 'table', prompt: '독도 바다 자원을 정리하세요.', columns: ['갈래', '예', '지키며 쓰는 방법'], cells: [['수산 자원', '', ''], ['바닷속 자원', '', '']], answer: '오징어·독도새우·미역 / 어린 물고기 풀어 주기, 가스 하이드레이트 / 생태를 해치지 않게 조사' },
          { type: 'choice', prompt: '근거로 쓸 수 있는 자료에 ○ 하세요.', options: ['외교부 독도 누리집', '출처 없는 글의 숫자'], answer: '외교부 독도 누리집' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도 바다는 ___와 ___가 만나 좋은 어장이 된다.', answer: '난류, 한류' },
          { type: 'short', prompt: '독도 바다 자원을 보호와 이용 두 면에서 한 문장으로 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 자원을 돈으로만 본다 → 생태와 함께 지속 가능하게 쓰는 관점을 넣는다. ② 출처 없는 숫자를 쓴다 → 확인된 자료에 없는 숫자는 쓰지 않게 한다. ③ 생물 자원과 바닷속 자원을 섞는다 → 생물인지로 나누게 한다.',
      }),

      LESSON(6, {
        title: '오늘 독도를 지키는 사람과 일 잇기',
        objective: '독도경비대·등대·주민 생활·연구와 보호 등 오늘 독도를 지키는 노력을 설명할 수 있다.',
        draw: 'a guard on watch, a lighthouse, a researcher counting seabirds and a resident by a small house, arranged around two islets',
        banner: '오늘의 독도 지킴', extra: [{ motif: 'house', x: 90, y: 210, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"오늘 독도는 누가, 어떻게 지키고 있을까요?" 대답을 듣고(기다릴 반응: "경찰이요", "주민이요") 독도경비대의 경비, 등대 운영, 주민 생활, 생태 연구와 보호, 정부의 홍보 같은 여러 노력이 함께 독도를 지킨다고 알려 준다. 시연 단추로 사람과 일이 이어지는 모습을 보여 준다.',
          student: '5학년에 배운 독도의용수비대와 오늘의 독도 지킴이 어떻게 다를지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '지킴', slots: [{ id: 'g', label: '독도경비대' }], cards: ['섬과 바다 경비', '관광 안내'], shuffle: false }, sequence: [{ match: { g: '섬과 바다 경비' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지키는 사람과 일 잇기', tool: 'mindmap',
            teacher: '"사람이 독도에 살고, 시설을 운영하는 것도 지킴이 될까요?" 실제로 다스리고 관리하는 모습이 영토를 지키는 일임을 짚는다. 지킴을 경비만으로 여기는 학생에게는 연구·홍보도 지킴이라고 넓힌다.',
            task: '오늘 독도를 지키는 사람·기관과 하는 일을 이어요.',
            items: [
              MM('사람·기관과 하는 일을 이어 보세요.', '오늘의 지킴', [{ id: 'g', label: '독도경비대' }, { id: 'l', label: '독도 등대' }, { id: 'r', label: '독도 주민' }], ['섬과 바다를 경비해요', '배의 안전을 지켜요', '섬에 살며 생활해요', '독도에 공장을 지어요'], { g: '섬과 바다를 경비해요', l: '배의 안전을 지켜요', r: '섬에 살며 생활해요' }, 0.25),
              MS('지킴을 섬에서 하는 일과 섬 밖에서 하는 일로 나누어 보세요.', '어디서 지킬까', ['독도에서', '독도 밖에서'], ['경비하기', '등대 운영하기', '바른 자료 알리기', '독도 교육하기'], { '독도에서': ['경비하기', '등대 운영하기'], '독도 밖에서': ['바른 자료 알리기', '독도 교육하기'] }, 0.25),
              MP('오늘의 독도 지킴으로 알맞은 것만 골라 보세요.', '독도 지킴', ['바닷새·식물 생태 조사', '공식 누리집으로 알리기', '천연보호구역 개발하기', '욕설로 다투기'], ['바닷새·식물 생태 조사', '공식 누리집으로 알리기'], 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 지킴의 이어짐 정리하기', tool: 'timeline',
            teacher: '"독도 지킴은 옛날부터 오늘까지 어떻게 이어져 왔을까요?" 5학년 기록과 오늘의 노력을 한 줄로 이어 보게 한다.',
            task: '독도 지킴의 역사를 시간 띠에 놓고, 시대에 따라 나누어요.',
            items: [
              TO('독도 지킴의 이어짐을 차례대로 놓아 보세요.', [{ id: 'today', text: '독도경비대·생태 보호' }, { id: 'vol', text: '독도의용수비대' }, { id: 'edict', text: '칙령으로 울도군 관할' }, { id: 'ahn', text: '안용복의 활동' }], ['ahn', 'edict', 'vol', 'today'], 0.3),
              TS('지킴을 광복 전과 광복 뒤로 나누어 보세요.', ['광복 전', '광복 뒤'], [{ id: 'a', text: '칙령 제41호' }, { id: 'b', text: '평화선 선언' }, { id: 'c', text: '독도의용수비대' }, { id: 'd', text: '수토(관리 파견)' }], { '광복 전': ['a', 'd'], '광복 뒤': ['b', 'c'] }, 0.3),
              TM('시대와 그때의 독도 지킴을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'joseon', label: '조선 숙종 때' }, { id: 'now', label: '오늘날' }], [{ id: 'ahn', text: '안용복의 활동' }, { id: 'police', text: '독도경비대 경비' }, { id: 'isabu', text: '이사부의 우산국행' }], { joseon: 'ahn', now: 'police' }, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘의 독도 지킴 가운데 우리가 함께할 수 있는 것은 무엇인가요?" 출구 1번에서 사람과 일을 바꿔 이은 학생에게는 등대가 하는 일을 다시 떠올리게 한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '지킴 확인', slots: [{ id: 'r', label: '생태 연구자' }, { id: 's', label: '초등학생' }], cards: ['바닷새·식물 조사', '바르게 알고 알리기', '독도에 건물 짓기'] }, '사람과 할 수 있는 독도 지킴을 이어 보세요.', { match: { r: '바닷새·식물 조사', s: '바르게 알고 알리기' } }, 0.2),
            { type: 'choice', prompt: '오늘 독도를 지키는 노력으로 알맞지 않은 것은 무엇인가요?', options: ['천연보호구역을 마구 개발하기', '독도경비대의 경비', '생태 조사와 보호'], answer: 0, difficulty: 0.15, explain: '독도는 섬 전체가 천연보호구역이라 생태를 지키며 관리해요.' },
            MOOD,
          ],
        },
        wsTitle: '오늘의 독도 지킴',
        ws: [
          { type: 'table', prompt: '오늘의 독도 지킴을 정리하세요.', columns: ['누가', '무엇을'], cells: [['독도경비대', ''], ['등대', ''], ['주민', ''], ['나(초등학생)', '']], answer: '섬과 바다 경비 / 배의 안전 / 섬에 살며 생활 / 바르게 알고 알리기' },
          { type: 'choice', prompt: '독도 밖에서 할 수 있는 지킴에 ○ 하세요.', options: ['바른 자료 알리기', '등대 운영하기'], answer: '바른 자료 알리기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '광복 뒤 울릉도 주민들이 만든 ___가 독도를 지켰다.', answer: '독도의용수비대' },
          { type: 'short', prompt: '내가 할 수 있는 독도 지킴을 구체적으로 한 가지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 지킴을 경비만으로 여긴다 → 생활·시설 운영·연구·홍보도 지킴이라고 넓힌다. ② 옛날과 오늘의 지킴을 섞는다 → 시간 띠로 나누어 본다. ③ 나와 상관없는 일로 여긴다 → 학생이 할 수 있는 일을 구체적으로 고르게 한다.',
      }),

      LESSON(7, {
        title: '독도에 관한 문장을 사실과 의견으로 가르기',
        objective: '독도에 관한 문장을 자료로 확인되는 사실, 의견, 근거 없는 주장으로 가려낼 수 있다.',
        draw: 'a child sorting paper speech bubbles into two baskets labeled with a check and a question mark, with a magnifying glass and an official document',
        banner: '사실일까 의견일까', extra: [{ motif: 'star', x: 80, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"\'독도는 아름답다\'는 사실일까요, 의견일까요?" 대답을 듣고(기다릴 반응: "사실이요", "의견이요") 자료로 맞고 틀림을 가릴 수 있으면 사실, 사람마다 다를 수 있으면 의견이라고 정리한다. 시연 단추로 카드가 나뉘는 모습을 보여 준다. 모든 문장을 사실로 두는 학생에게는 "이 말이 맞는지 어떤 자료로 확인할 수 있나요?"라고 묻는다.',
          student: '오늘 들은 말 가운데 사실인 말 하나, 의견인 말 하나를 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '독도에 관한 말', slots: ['사실', '의견'], cards: ['독도는 동해에 있다', '독도는 아름답다'], shuffle: false }, sequence: [{ sort: { '사실': ['독도는 동해에 있다'], '의견': ['독도는 아름답다'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사실과 의견 가르기', tool: 'mindmap',
            teacher: '"이 문장은 자료로 확인할 수 있나요?" 숫자와 연도가 있는 문장은 자료를 찾아 확인하게 한다. 의견을 틀린 말로 여기는 학생에게는 의견은 근거와 함께 말하면 되는 것이라고 정리한다.',
            task: '독도에 관한 문장을 사실과 의견, 근거 없는 주장으로 가려요.',
            items: [
              MS('독도에 관한 문장을 사실과 의견으로 나누어 보세요.', '사실과 의견', ['사실', '의견'], ['칙령 제41호는 1900년에 나왔다', '독도는 울릉도에서 87.4km', '독도 공부가 가장 재미있다', '독도 노래가 제일 좋다'], { '사실': ['칙령 제41호는 1900년에 나왔다', '독도는 울릉도에서 87.4km'], '의견': ['독도 공부가 가장 재미있다', '독도 노래가 제일 좋다'] }, 0.25),
              MS('문장을 사료로 확인되는 것과 근거 없는 것으로 나누어 보세요.', '확인해 봐요', ['사료로 확인돼요', '근거가 없어요'], ['태정관 지령은 일본과 무관하다 했다', '각서 677호는 독도를 제외했다', '독도는 1905년 전 아무도 몰랐다', '칙령 제41호에 독도가 없다'], { '사료로 확인돼요': ['태정관 지령은 일본과 무관하다 했다', '각서 677호는 독도를 제외했다'], '근거가 없어요': ['독도는 1905년 전 아무도 몰랐다', '칙령 제41호에 독도가 없다'] }, 0.3),
              MP('사실인지 확인할 때 쓸 자료만 골라 보세요.', '확인 자료', ['외교부 독도 누리집', '동북아역사재단 자료', '조회수 많은 영상', '익명 댓글'], ['외교부 독도 누리집', '동북아역사재단 자료'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 의견에 근거 붙이기', tool: 'mindmap',
            teacher: '"의견도 근거가 있으면 힘이 생겨요." 의견과 알맞은 근거를 잇게 한다. 근거로 다른 의견을 고르는 학생에게는 근거는 확인할 수 있는 사실이어야 한다고 짚는다.',
            task: '독도에 관한 의견과 그 의견을 뒷받침하는 사실 근거를 이어요.',
            items: [
              MM('의견과 근거를 이어 보세요.', '의견과 근거', [{ id: 'a', label: '독도는 지켜야 할 생태 보물이다' }, { id: 'b', label: '독도 역사를 더 알려야 한다' }], ['섬 전체가 천연보호구역이다', '512년부터 기록이 이어진다', '독도가 가장 예쁘다'], { a: '섬 전체가 천연보호구역이다', b: '512년부터 기록이 이어진다' }, 0.3),
              MM('의견과 근거를 이어 보세요.', '근거 찾기', [{ id: 'c', label: '독도 바다는 소중하다' }, { id: 'd', label: '칙령은 중요한 근거다' }], ['난류·한류가 만나 어장이 된다', '1905년보다 5년 앞선다', '내 생각이 그렇다'], { c: '난류·한류가 만나 어장이 된다', d: '1905년보다 5년 앞선다' }, 0.3),
              MS('좋은 근거와 좋지 않은 근거로 나누어 보세요.', '근거의 질', ['좋은 근거', '좋지 않은 근거'], ['공식 자료의 연도', '사료의 원래 내용', '많은 사람이 그렇대', '내 기분'], { '좋은 근거': ['공식 자료의 연도', '사료의 원래 내용'], '좋지 않은 근거': ['많은 사람이 그렇대', '내 기분'] }, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"사실과 의견을 가르는 질문은 무엇이었나요?" 출구 1번에서 의견을 사실로 둔 학생에게는 "자료로 맞고 틀림을 가릴 수 있나요?"를 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '친구들의 말', slots: ['사실', '의견'], cards: ['독도는 경상북도에 속한다', '평화선은 1952년 선언됐다', '독도 여행은 꼭 가야 한다', '독도가 제일 멋진 섬이다'] }, '친구들의 말을 사실과 의견으로 나누어 보세요.', { sort: { '사실': ['독도는 경상북도에 속한다', '평화선은 1952년 선언됐다'], '의견': ['독도 여행은 꼭 가야 한다', '독도가 제일 멋진 섬이다'] } }, 0.25),
            { type: 'choice', prompt: '사실과 의견을 가르는 질문으로 알맞은 것은 무엇인가요?', options: ['자료로 맞고 틀림을 가릴 수 있나?', '내 마음에 드나?', '많은 사람이 말하나?'], answer: 0, difficulty: 0.15, explain: '자료로 확인할 수 있으면 사실, 사람마다 다르면 의견이에요.' },
            MOOD,
          ],
        },
        wsTitle: '사실일까 의견일까',
        ws: [
          { type: 'table', prompt: '문장을 읽고 사실·의견·근거 없는 주장 가운데 무엇인지 쓰세요.', columns: ['문장', '종류'], cells: [['칙령 제41호는 1900년에 나왔다', ''], ['독도는 아름답다', ''], ['독도는 1905년 전 아무도 몰랐다', '']], answer: '사실 / 의견 / 근거 없는 주장' },
          { type: 'choice', prompt: '좋은 근거에 ○ 하세요.', options: ['공식 자료의 연도', '많은 사람이 그렇대'], answer: '공식 자료의 연도' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '의견은 ___와 함께 말하면 힘이 생긴다.', answer: '근거' },
          { type: 'short', prompt: '독도에 관한 내 의견 하나를 근거와 함께 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 강하게 말하면 사실이라고 여긴다 → "자료로 가릴 수 있나?"를 습관으로 묻는다. ② 의견을 틀린 말로 여긴다 → 의견은 근거와 함께 말하면 된다고 정리한다. ③ 많은 사람의 말을 근거로 쓴다 → 공식 자료와 사료를 근거로 쓰게 한다.',
      }),

      LESSON(8, {
        title: '잘못된 독도 정보에 정중하게 대응하기',
        objective: '잘못된 독도 정보를 만났을 때 근거와 출처를 들어 정중하게 대응하는 방법을 고를 수 있다.',
        draw: 'a child at a paper tablet calmly typing a reply with a small document icon, while a messy speech bubble fades away',
        banner: '근거로 대응해요', extra: [{ motif: 'leaf', x: 80, y: 200, color: 'mint', s: 0.7 }],
        intro: {
          teacher: '"인터넷에서 독도가 잘못 소개된 글을 보면 어떻게 하고 싶나요?" 대답을 듣고(기다릴 반응: "화나요", "고쳐 주고 싶어요") 시연 단추로 갈림길에서 보기를 고르고 결과가 나오는 모습을 보여 준다. "욕을 해 줘야 해요"라는 대답에는 "그 글을 읽는 다른 사람들은 욕과 근거 가운데 무엇을 믿을까요?"라고 되묻는다.',
          student: '잘못된 정보를 보고 확인해 본 경험이 있다면 짝에게 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '학습 사이트 지도에 독도 이름이 빠져 있어요.', choices: [{ id: 'tell', text: '선생님과 함께 의견을 보내요', result: '사이트가 지도를 고쳐요.', mood: '뿌듯함' }, { id: 'ignore', text: '모른 척해요', result: '잘못된 지도가 그대로 남아요.', mood: '걱정' }] }, sequence: [{ choice: 'tell' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 상황에서 대응 방법 고르기', tool: 'emotion',
            teacher: '"이렇게 하면 그 글을 읽는 사람들은 어떻게 생각할까요?" 결과 칸을 읽고 까닭을 한 문장으로 말하게 한다. 혼자 해결하려는 학생에게는 선생님·보호자와 함께하는 방법도 좋은 대응이라고 알려 준다.',
            task: '잘못된 독도 정보를 만난 상황에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('외국 친구가 화상 수업에서 "독도는 어느 나라 땅이야?"라고 물어요. 어떻게 할까요?', '외국 친구가 독도에 대해 궁금해하며 물어요.', [
                { id: 'angry', text: '그것도 모르냐고 화를 내요', result: '친구가 더 묻지 않고 대화가 끝나요.', mood: '속상함', why: '화를 내면 설명을 들을 기회가 사라져요.' },
                { id: 'explain', text: '칙령 제41호와 공식 누리집을 알려 줘요', result: '친구가 자료를 직접 찾아봐요.', mood: '뿌듯함' },
                { id: 'skip', text: '대답하기 귀찮아 넘겨요', result: '친구는 다른 곳에서 정보를 찾아요.', mood: '걱정', why: '바르게 알릴 좋은 기회를 놓쳐요.' }], 'explain', 0.25),
              EB('게임 속 지도에 독도가 다른 이름으로 적혀 있어요. 어떻게 할까요?', '즐겨 하는 게임 지도의 독도 표기가 잘못되어 있어요.', [
                { id: 'curse', text: '게임 게시판에 욕을 써요', result: '글이 지워지고 아무것도 바뀌지 않아요.', mood: '화남', why: '욕설은 고쳐 달라는 뜻을 전하지 못해요.' },
                { id: 'report', text: '보호자와 근거를 들어 의견을 보내요', result: '회사가 의견을 검토해요.', mood: '편안함' }], 'report', 0.25),
              EB('친구가 출처 없는 독도 영상을 단체방에 올렸어요. 어떻게 할까요?', '영상에 확인되지 않은 숫자와 날짜가 가득해요.', [
                { id: 'forward', text: '재미있어서 다른 방에도 퍼뜨려요', result: '잘못된 내용이 더 퍼져요.', mood: '걱정', why: '확인 없이 퍼뜨리면 잘못된 정보를 돕게 돼요.' },
                { id: 'verify', text: '공식 자료와 견주어 보자고 말해요', result: '친구들이 출처를 확인하는 습관을 가져요.', mood: '뿌듯함' }], 'verify', 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 정중한 대응 문장 고르기', tool: 'mindmap',
            teacher: '"정중하면서도 근거가 있는 문장은 어떤 모양일까요?" 사실·근거·출처가 함께 있는 문장을 고르게 한다. 다른 나라 사람 전체를 탓하는 문장을 고르는 학생에게는 주장과 사람을 나누어 보게 한다.',
            task: '정중하고 근거 있는 대응 문장을 고르고, 대응의 차례를 나누어요.',
            items: [
              MP('정중하고 근거 있는 대응 문장만 골라 보세요.', '좋은 대응', ['1900년 칙령 제41호를 보세요', '외교부 독도 누리집에 있어요', '그 나라 사람들은 다 틀렸어', '모르면 가만히 있어'], ['1900년 칙령 제41호를 보세요', '외교부 독도 누리집에 있어요'], 0.25),
              MS('대응할 때 먼저 할 일과 나중에 할 일로 나누어 보세요.', '대응 차례', ['먼저', '나중'], ['사실인지 확인하기', '공식 자료 찾기', '근거와 출처 쓰기', '정중하게 보내기'], { '먼저': ['사실인지 확인하기', '공식 자료 찾기'], '나중': ['근거와 출처 쓰기', '정중하게 보내기'] }, 0.3),
              MM('잘못된 말과 바로잡는 근거를 이어 보세요.', '바로잡기', [{ id: 'a', label: '1905년 전 주인이 없었다' }, { id: 'b', label: '연합국도 일본 땅이라 했다' }], ['1900년 칙령 제41호', '1946년 각서 제677호', '조회수 많은 영상'], { a: '1900년 칙령 제41호', b: '1946년 각서 제677호' }, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 대응 방법을 세 낱말로 말한다면?" (기다릴 반응: "확인, 근거, 정중") 출구 1번에서 욕설 문장을 고른 학생에게는 제3자가 무엇을 믿게 되는지 다시 떠올리게 한다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '대응 문장', basket: '보낼 문장', cards: ['각서 제677호를 함께 봐요', '동북아역사재단 자료가 있어요', '너희는 다 거짓말쟁이야', '대꾸할 가치도 없어'] }, '잘못된 독도 글에 보낼 정중한 문장만 골라 담아 보세요.', { pick: ['각서 제677호를 함께 봐요', '동북아역사재단 자료가 있어요'] }, 0.2),
            { type: 'short', prompt: '"독도는 주인 없는 섬이었다"는 글에 보낼 답글을 근거와 출처를 넣어 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '근거로 대응해요',
        ws: [
          { type: 'table', prompt: '대응 차례를 정리하세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '사실인지 확인 / 공식 자료에서 근거 찾기 / 근거·출처를 넣어 정중하게 보내기' },
          { type: 'choice', prompt: '정중한 대응에 ○ 하세요.', options: ['근거와 출처를 들어 바로잡는다', '욕설 댓글을 단다'], answer: '근거와 출처를 들어 바로잡는다' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '정부의 주장과 그 나라 ___은 나누어 본다.', answer: '사람들' },
          { type: 'short', prompt: '잘못된 정보를 퍼뜨리지 않기 위해 내가 지킬 습관을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 강한 감정 표현을 대응으로 여긴다 → 제3자가 무엇을 믿게 되는지 결과로 보여 준다. ② 혼자 해결하려 한다 → 선생님·보호자와 함께 의견을 보내는 방법을 알려 준다. ③ 특정 나라 사람 전체를 탓한다 → 주장과 사람을 나누고 사료로 반박하게 한다.',
      }),

      LESSON(9, {
        title: '출처를 밝힌 독도 알림 글 완성하기',
        objective: '사료와 공식 자료를 근거로 출처를 밝힌 독도 알림 글을 완성할 수 있다.',
        draw: 'a paper poster with two islets, a short timeline strip and a small source note at the bottom, pinned on a classroom board',
        banner: '독도 알림 글', extra: [{ motif: 'star', x: 80, y: 110, color: 'rose', s: 0.6 }],
        intro: {
          teacher: '"독도를 알리는 글을 쓴다면 무엇이 꼭 들어가야 할까요?" 대답을 듣고(기다릴 반응: "근거요", "출처요") 사실·근거·출처를 함께 쓰는 것이 알림 글의 힘이라고 정리한다. 시연 단추로 알림 글 빈칸이 채워지는 모습을 보여 준다. 구호만 쓰려는 학생에게는 "읽는 사람이 무엇을 확인할 수 있을까요?"라고 묻는다.',
          student: '학교 게시판에서 본 알림 글 가운데 기억에 남는 것을 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { mode: 'fill', cards: ['1900', '1905'], slots: [{ id: 'b1', who: '알림 글', motif: 'leaf', label: '___년 대한제국은 칙령 제41호로 독도를 관할했어요.' }], shuffle: false }, sequence: [{ fill: { b1: '1900' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 알림 글 빈칸 채우기', tool: 'story',
            teacher: '"이 빈칸에 들어갈 사실을 활동지에서 찾아볼까요?" 지난 차시 표를 근거로 채우게 한다. 연도와 문서를 바꿔 넣는 학생에게는 시간 띠를 다시 보게 한다.',
            task: '사료와 공식 자료를 바탕으로 독도 알림 글의 빈칸을 채워요.',
            items: [
              SF('역사 근거 문장의 빈칸을 채워 보세요.', ['1877', '1696', '태정관', '시마네현'], [{ id: 'b1', who: '알림 글', motif: 'leaf', label: '___년 일본 메이지 정부의' }, { id: 'b2', who: '알림 글', motif: 'star', label: '___ 지령도 독도가 일본과 무관하다고 했어요.' }], { b1: '1877', b2: '태정관' }, 0.3),
              SF('광복 뒤 근거 문장의 빈칸을 채워 보세요.', ['1946', '1952', '연합국', '시마네현'], [{ id: 'b1', who: '알림 글', motif: 'sun', label: '___년 연합국 최고사령관 각서 제677호는' }, { id: 'b2', who: '알림 글', motif: 'wave', label: '독도를 일본 통치 범위에서 뺀 ___의 문서예요.' }], { b1: '1946', b2: '연합국' }, 0.3),
              SF('출처 문장의 빈칸을 채워 보세요.', ['외교부', '익명 게시판', '동북아역사재단', '단체방'], [{ id: 'b1', who: '알림 글', motif: 'house', label: '출처: ___ 독도 누리집,' }, { id: 'b2', who: '알림 글', motif: 'house', label: '___ 독도 자료' }], { b1: '외교부', b2: '동북아역사재단' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 알림 글 다듬기', tool: 'mindmap',
            teacher: '"이 문장은 알림 글에 어울릴까요?" 사실·근거·출처가 있는 문장을 남기고, 비난이나 확인 안 된 숫자는 빼게 한다.',
            task: '알림 글에 남길 문장과 뺄 문장을 가리고, 알림 글의 짜임을 이어요.',
            items: [
              MS('알림 글에 남길 문장과 뺄 문장으로 나누어 보세요.', '알림 글 다듬기', ['남겨요', '빼요'], ['칙령은 고시보다 5년 앞서요', '독도는 천연보호구역이에요', '그 나라는 다 나빠요', '자원이 수백조 원래요'], { '남겨요': ['칙령은 고시보다 5년 앞서요', '독도는 천연보호구역이에요'], '빼요': ['그 나라는 다 나빠요', '자원이 수백조 원래요'] }, 0.3),
              MM('알림 글의 짜임과 내용을 이어 보세요.', '알림 글 짜임', [{ id: 't', label: '제목' }, { id: 'e', label: '근거' }, { id: 's', label: '출처' }], ['기록이 말하는 독도', '1900년 칙령 제41호', '외교부 독도 누리집', '내 짐작'], { t: '기록이 말하는 독도', e: '1900년 칙령 제41호', s: '외교부 독도 누리집' }, 0.25),
              MP('좋은 알림 글의 조건만 골라 보세요.', '좋은 알림 글', ['사실과 근거가 있어요', '출처를 밝혀요', '남을 깎아내려요', '확인 안 된 숫자를 써요'], ['사실과 근거가 있어요', '출처를 밝혀요'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"내 알림 글의 제목과 가장 힘 있는 근거를 발표해 볼까요?" 출구 1번에서 연도를 바꿔 넣은 학생에게는 시간 띠를 다시 보게 한다.',
          exit: [
            XC('story', { mode: 'fill', cards: ['1952', '1900', '1454'], slots: [{ id: 'b1', who: '알림 글', motif: 'wave', label: '___년 우리 정부는 평화선을 선언했어요.' }] }, '알림 글의 빈칸을 채워 보세요.', { fill: { b1: '1952' } }, 0.2),
            { type: 'short', prompt: '내 독도 알림 글에 넣을 근거 하나와 출처를 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 알림 글',
        ws: [
          { type: 'table', prompt: '알림 글 계획을 세우세요.', columns: ['제목', '근거 1', '근거 2', '출처'], rows: 1 },
          { type: 'short', prompt: '알림 글 본문을 세 문장으로 쓰세요.' },
          { type: 'choice', prompt: '알림 글에서 뺄 문장에 ○ 하세요.', options: ['그 나라는 다 나빠요.', '칙령은 고시보다 5년 앞서요.'], answer: '그 나라는 다 나빠요.' },
          { type: 'draw', prompt: '알림 글에 넣을 그림이나 시간 띠를 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 구호만 쓴다 → 사실·근거·출처 세 칸을 채우게 한다. ② 확인 안 된 숫자를 쓴다 → 공식 자료에 있는 것만 쓰게 한다. ③ 남을 깎아내리는 문장을 쓴다 → 근거로 말하는 글이 더 설득력 있다고 정리한다.',
      }),

      LESSON(10, {
        title: '근거·가치·실천으로 초등 독도 공부 묶기',
        objective: '초등 독도 공부를 근거(사료)·가치·실천으로 정리하고, 앞으로 지킬 독도 지킴이 다짐을 정할 수 있다.',
        draw: 'a paper scroll unrolling across a timeline of documents toward two rocky islets, with a child holding a promise card at the end',
        banner: '초등 독도 공부를 마치며', extra: [{ motif: 'star', x: 80, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"1학년부터 6학년까지 독도에 대해 무엇을 배웠는지 한 문장씩 말해 볼까요?" 대답을 듣고(기다릴 반응: "괭이갈매기요", "칙령 제41호요") 시연 단추로 사료 카드가 시간 띠에 놓이는 모습을 보여 준다. 사실만 나열하는 학생에게는 "그것이 독도에 대해 무엇을 말해 주나요?"라고 되묻는다.',
          student: '초등 독도 공부에서 가장 기억에 남는 것 하나를 짝에게 말해 봐요.',
          demo: { tool: 'timeline', options: { cards: [S.sejong, S.scapin], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['sejong', 'scapin'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사료 시간 띠 완성하기', tool: 'timeline',
            teacher: '"조선부터 광복 뒤까지 사료를 놓아 볼까요?" 사료마다 만든 주체를 함께 말하게 한다. 평화선을 각서보다 앞에 두는 학생에게는 1946년과 1952년을 견주게 한다.',
            task: '6학년에 읽은 사료를 시간 띠에 놓고, 연도와 이어요.',
            items: [
              TO('네 사료를 일어난 차례대로 놓아 보세요.', [S.scapin, S.bakufu, S.peace, S.dajokan], ['bakufu', 'dajokan', 'scapin', 'peace'], 0.3),
              TM('연도와 그해의 사료를 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y1454', label: '1454년' }, { id: 'y1900', label: '1900년' }, { id: 'y1946', label: '1946년' }], [S.sejong, S.edict, S.scapin, S.shimane], { y1454: 'sejong', y1900: 'edict', y1946: 'scapin' }, 0.3),
              TS('사료를 만든 주체에 따라 나누어 보세요.', ['한국', '일본', '연합국'], [S.sejong, S.peace, S.dajokan, S.scapin], { '한국': ['sejong', 'peace'], '일본': ['dajokan'], '연합국': ['scapin'] }, 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 근거·가치·실천 나누기', tool: 'mindmap',
            teacher: '"이 카드는 독도가 우리 땅인 근거인가요, 독도가 소중한 까닭인가요, 우리가 할 일인가요?" 세 갈래로 나누고 갈래마다 한 문장으로 말하게 한다.',
            task: '초등 독도 공부 카드를 근거·가치·실천으로 나누고 다짐을 골라요.',
            items: [
              MS('카드를 근거·가치·실천으로 나누어 보세요.', '초등 독도 공부', ['근거', '가치', '실천'], ['칙령 제41호', '천연보호구역 생태', '좋은 어장', '출처 밝혀 알리기'], { '근거': ['칙령 제41호'], '가치': ['천연보호구역 생태', '좋은 어장'], '실천': ['출처 밝혀 알리기'] }, 0.3),
              MP('초등 독도 지킴이 다짐으로 알맞은 것만 골라 보세요.', '지킴이 다짐', ['자료와 근거로 말하기', '독도 자연 아끼기', '다른 나라 사람 미워하기', '확인 없이 퍼뜨리기'], ['자료와 근거로 말하기', '독도 자연 아끼기'], 0.2),
              MM('학년과 그때 배운 것을 이어 보세요.', '독도 공부 돌아보기', [{ id: 'low', label: '저학년' }, { id: 'mid', label: '중학년' }, { id: 'high', label: '고학년' }], ['위치·자연 첫 만남', '지리·생태·사람들의 삶', '역사 기록과 영토 주권', '독도 개발 계획'], { low: '위치·자연 첫 만남', mid: '지리·생태·사람들의 삶', high: '역사 기록과 영토 주권' }, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"중학교에서는 독도의 국제법적 근거와 영유권을 더 깊이 배워요. 초등 독도 공부를 마치며 나의 다짐을 말해 볼까요?" 출구 1번에서 순서를 바꾼 학생에게는 만든 주체와 연도를 다시 짚는다.',
          exit: [
            XC('timeline', { cards: [S.shimane, S.sejong, S.peace], axis: ['옛날', '오늘날'] }, '세 사료를 일어난 차례대로 시간 띠에 놓아 보세요.', { order: ['sejong', 'shimane', 'peace'] }, 0.2),
            { type: 'short', prompt: '초등 독도 공부를 마치며 나의 독도 지킴이 다짐을 근거와 함께 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '초등 독도 공부를 마치며',
        ws: [
          { type: 'table', prompt: '초등 독도 공부를 정리하세요.', columns: ['갈래', '내가 아는 것'], cells: [['근거(사료)', ''], ['가치', ''], ['실천', '']], answer: '세종실록 지리지·태정관 지령·칙령 제41호·각서 제677호 등 / 영토·생태·자원·안보 / 바르게 알고 근거와 출처로 알리기' },
          { type: 'choice', prompt: '독도를 말하는 바른 태도에 ○ 하세요.', options: ['자료와 근거로 정중하게 말한다', '큰 소리로만 주장한다'], answer: '자료와 근거로 정중하게 말한다' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '대한제국 칙령 제41호는 ___년, 시마네현 고시는 ___년이다.', answer: '1900, 1905' },
          { type: 'short', prompt: '중학교에서 더 알고 싶은 독도 이야기를 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 사실을 나열만 한다 → "그것이 무엇을 말해 주나?"로 근거와 가치를 잇게 한다. ② 감정으로 다짐한다 → 실천할 수 있는 행동 하나로 쓰게 한다. ③ 특정 나라를 미워하는 다짐을 쓴다 → 바르게 알고 근거로 알리는 다짐으로 바꾸게 한다.',
      }),
    ],
  });
})();
