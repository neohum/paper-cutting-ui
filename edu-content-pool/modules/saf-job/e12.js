/* 창체 안전교육 직업안전 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-job 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 직업안전
 *   1(일터에서 발생하는 산업 재해 알기 — 초1-2 에서는 '일하는 사람이 다치지 않으려고 쓰는 물건'으로 낮춤) · 2(일터 안전시설 현장 체험하기).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 따라 하기·구호·좋아요/안돼요 고르기. 장면·인물은 직접 지은 것이다(가명).
 * 주제 2개(1학년 work-helpers · 2학년 safety-spots) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 16개 전부.
 * 수치(초·m·%·명)·전화번호·법 조항은 쓰지 않는다(근거 파일에 직업안전 초1-2 수치가 없다). 산업 재해 사례·다친 장면은 그리지 않는다.
 *
 * 사람 확인: 근거 파일(research-safety.md)에는 고시 항목 제목뿐이라 아래 내용은 일반 안전 상식을 옮긴 것이다. 공식 안내처에서 문구를 확인한다.
 *   - work-helpers.activity.match-gear: 일하는 사람과 보호 물건의 짝(공사장 일꾼—안전모·안전화, 조리사—앞치마·위생모·장화, 소방관—방화복·공기통,
 *     길 청소하는 분—형광 조끼·목장갑, 간호사—마스크, 과학자—보안경·실험복, 공장 일하는 분—귀마개) — 안전보건공단(KOSHA)·소방청
 *   - work-helpers.activity.dress-up · intro.body-wear: 안전모는 끈(턱끈)을 조여 쓴다 · 장갑은 손목까지 당겨 낀다 — 안전보건공단(보호구 착용)
 *   - work-helpers.activity.dress-order: 일을 시작하기 전에 보호 물건부터 갖춘다(안전모 쓰고 끈 조이기 → 일 시작, 장갑 끼고 → 냄비 잡기,
 *     안전화 신고 끈 묶기 → 일터 가기) — 안전보건공단
 *   - work-helpers.activity.ok-no: 뜨거운 냄비는 장갑을 끼고 든다 · 사다리는 잡아 주는 사람과 함께 · 칼은 칼집·칼꽂이에 둔다 — 안전보건공단·식품의약품안전처(급식 위생)
 *   - work-helpers.wrap.my-gear: 자전거를 탈 때 헬멧을 쓴다 · 무릎 보호대 — 도로교통공단
 *   - safety-spots 전체: 비상구 표시는 초록색이다 · 소화기·소화전·비상벨·대피 안내도는 불이 날 때 쓴다 · 비상구·소화기 앞에 물건을 두지 않는다 — 소방청·국민재난안전포털
 *   - safety-spots.activity.kitchen-visit: 급식실에서 일하는 분은 장화·장갑·위생모를 쓰고 젖은 바닥을 닦고 '젖은 바닥' 표지를 세운다 — 식품의약품안전처·안전보건공단(급식실 안전)
 *   - safety-spots.activity.sign-pattern: 안전 표지 모양과 색의 뜻(노란 세모 = 조심해요, 빨간 동그라미 = 하지 마요, 초록 네모 = 나가는 길·안내, 파란 동그라미 = 꼭 해요)
 *     — 안전보건공단(안전보건표지). 규칙 판 색은 노랑(buttercup)·분홍(rose, 빨강 대신)·초록(mint)·파랑(sky)이다.
 *   - 비상구 표시·안전 표지 그림은 교구가 그리지 못해 카드에 말로 적었다. 교사가 학교 실물을 보이게 했다(safety-spots 각 모듈 notes). */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-job', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text) => ({ id, text });

  // 일하는 사람 가지에 물건 넣기(mindmap sort): 기본 가지 3개, 쉬움 가지 2개, 도전 가지 3개 + 아무 가지에도 안 맞는 물건 1장
  const GEAR3 = (prompt, topic, groups, trap, d, more) => {
    const slots = groups.map((g) => g[0]);
    const cards = [];
    const n = Math.max(...groups.map((g) => g[1].length));
    for (let i = 0; i < n; i++) for (const g of groups) if (g[1][i]) cards.push(g[1][i]);
    const sort = (gs) => Object.fromEntries(gs.map((g) => [g[0], g[1].map((c) => c.id)]));
    const two = groups.slice(0, 2);
    const twoCards = cards.filter((c) => two.some((g) => g[1].includes(c)));
    return {
      prompt, toolOptions: { topic, slots, cards }, target: { sort: sort(groups) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(가지 2개).`, toolOptions: { slots: two.map((g) => g[0]), cards: twoCards }, target: { sort: sort(two) } },
        challenge: { prompt: `${cut(prompt)}, 빠진 것도요.`, toolOptions: { cards: [...cards.slice(0, 2), trap, ...cards.slice(2)] }, target: { sort: sort(groups) } },
      },
      ...more,
    };
  };
  // 차례 카드(kitchen order): 기본 3장, 쉬움 앞 2장, 도전 틀린 카드 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const ids = cards.map((c) => c.id);
    return {
      prompt, toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { slots: ['먼저', '다음'], cards: [cards[1], cards[0]] }, target: { order: ids.slice(0, 2) } },
        challenge: { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } },
      },
      ...more,
    };
  };
  // 두 바구니 나누기(sortboard 글 카드): 기본 5장, 쉬움 3장, 도전 장식 카드 2장이 섞여 어느 바구니에도 넣지 않음
  const SB = (prompt, slots, a, b, trap, d, more) => {
    const S = (x, y) => ({ [slots[0]]: x.map((c) => c.id), [slots[1]]: y.map((c) => c.id) });
    const base = [a[0], b[0], a[1], b[1], a[2]];
    return {
      prompt, toolOptions: { slots, cards: base }, target: { sort: S(a, b) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(3장).`, toolOptions: { cards: [a[0], b[0], a[1]] }, target: { sort: S([a[0], a[1]], [b[0]]) } },
        challenge: { prompt: `${cut(prompt)}(7장).`, toolOptions: { cards: [a[0], trap[0], b[0], a[1], b[1], trap[1], a[2]] }, target: { sort: S(a, b) } },
      },
      ...more,
    };
  };
  // 칸 지도 핀(map): 장소에 핀 하나. 도전은 헷갈리는 장소가 더 있는 지도
  const PIN = (prompt, base, more2, place, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: base, title: '우리 학교' }, target: { place }, difficulty: d,
    levels: { challenge: { toolOptions: { places: [...base, ...more2] } } }, ...more,
  });
  // 정리 출구: 이야기 차례(story), 그림 점검표(스스로 점검)
  const STORY3 = (prompt, cards) => ({ type: 'tool', tool: 'story', options: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, prompt, target: { order: cards.map((c) => c.id) }, difficulty: 0.1 });

  // =====================================================================================================
  // 1학년 · 일하는 사람이 쓰는 안전 물건
  const WH = MOD('saf-job.e12.work-helpers', [1]);
  const T_WH = [
    WH({
      id: 'saf-job.e12.work-helpers.intro.who-works', type: 'intro', title: '그림 속 일하는 사람 찾기',
      method: '그림 속 일하는 사람 찾기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 장면 2장(공사장·식당)만 보이며 하나씩 읽어 주고 함께 짚는다.', base: '장면 3장(공사장·소방서·식당)에서 일하는 사람을 차례로 짚어 본다.', challenge: '장면 3장을 짚은 뒤 그 사람이 하는 일을 한 마디("불을 꺼요")로 말한다.' },
      intro: {
        teacher: '"이 그림에서 일하고 있는 사람은 누구일까요?" 두세 명의 대답을 듣고(기다릴 반응: "소방관이요", "요리하는 사람이요") 시연 단추로 일하는 사람 카드만 바구니에 담기는 모습을 보여 준다. "어른은 일하다 다치지 않아요"라는 말이 나오면 "어른도 뜨거운 냄비에 손을 델 수 있을까요? 그래서 무엇을 쓸까요?"라고 되묻는다. 오늘은 일하는 사람들이 다치지 않으려고 쓰는 물건을 알아본다고 밝힌다.',
        student: '그림에서 일하는 사람을 손가락으로 짚어 보아요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '일하는 사람', cards: [C('build', '집 짓는 일꾼'), C('play', '노는 아이'), C('fire', '불 끄는 소방관'), C('cook', '밥 짓는 조리사')], shuffle: false }, sequence: [{ pick: ['build'] }, { pick: ['build', 'fire'] }, { pick: ['build', 'fire', 'cook'] }] },
        art: { draw: 'three paper scenes side by side: a construction worker in a yellow hard hat, a firefighter in a fire station, and a cook in a white apron at a restaurant kitchen', banner: '일하는 사람을 찾아요' },
      },
      notes: '다친 사람·사고 장면은 보이지 않는다. 일하는 모습만 보인다.',
    }),
    WH({
      id: 'saf-job.e12.work-helpers.intro.body-wear', type: 'intro', title: '안전 물건을 쓰는 몸의 곳',
      method: '안전 물건을 쓰는 몸의 곳', tool: 'body', minutes: 5,
      levels: { easy: '교사와 함께 장갑을 끼는 곳(손목) 한 곳만 짚는다.', base: '안전모(내 머리를 손으로 짚기)·장갑(손목)·안전화(발목) 세 곳을 짚는다.', challenge: '세 곳을 짚으며 그 물건 이름("안전모", "장갑", "안전화")을 말한다.' },
      intro: {
        teacher: '"공사장 일꾼은 안전모를 어디에 쓸까요? 내 손으로 그곳을 짚어 보세요." 학생이 자기 머리를 짚은 뒤 시연 단추로 종이 몸에 장갑을 끼는 곳(손목)과 안전화를 신는 곳(발목)이 차례로 표시되는 모습을 보인다. "안전모는 멋으로 써요"라는 말이 나오면 "위에서 작은 돌이 떨어지면 안전모가 무엇을 지켜 줄까요?"라고 되묻는다. 종이 몸에는 머리·손·발 칸이 없어 머리는 자기 몸을 짚고, 손과 발은 손목·발목 칸으로 짚는다고 알려 준다.',
        student: '안전모를 쓰는 내 머리, 장갑을 끼는 손을 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '목', '손목', '무릎', '발목'], names: true }, sequence: [{ parts: ['손목'] }, { parts: ['손목', '발목'] }] },
        art: { draw: 'a paper child mannequin wearing a paper hard hat, paper gloves and paper safety boots, with arrows from each item to the head, hands and feet', banner: '머리·손·발을 지켜요' },
      },
      notes: '종이 몸 교구에 머리·손·발 칸이 없다. 안전모는 학생이 자기 머리를 짚고, 장갑은 손목, 안전화는 발목 칸으로 바꾸었다.',
    }),
    WH({
      id: 'saf-job.e12.work-helpers.activity.match-gear', type: 'activity', title: '일하는 사람과 안전 물건 잇기',
      method: '일하는 사람과 안전 물건 잇기', tool: 'mindmap', minutes: 14,
      levels: { easy: '가지 2개(일하는 사람 둘)에 물건 카드를 넣고, 넣으면 바로 맞는지 알려 준다.', base: '가지 3개에 물건 카드를 다 넣은 뒤 확인한다.', challenge: '가지 3개 + 어느 가지에도 맞지 않는 물건(풍선·인형·사탕) 한 장이 섞여 있어 찾아서 빼 둔다.' },
      activity: {
        title: '일하는 사람 가지에 안전 물건 넣기', tool: 'mindmap',
        teacher: '"이 물건은 누가 다치지 않으려고 쓸까요?" 카드를 넣을 때마다 물건 이름을 반 전체가 소리 내어 읽는다. 안전모를 "멋있어서 써요"라고 하는 학생에게 "위에서 무엇이 떨어질 수 있는 곳은 어디일까요? 안전모가 무엇을 지켜 줄까요?"라고 묻는다. 물건마다 지켜 주는 몸의 곳(머리·손·발·눈·귀)이 있다는 점을 짚는다.',
        task: '물건 카드를 일하는 사람 가지에 넣어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          GEAR3('누가 쓰는 물건일까요? 넣어요.', '일하는 사람', [
            ['공사장 일꾼', [C('hat', '안전모'), C('boot', '안전화')]],
            ['조리사', [C('apron', '앞치마'), C('cap', '위생모')]],
            ['소방관', [C('suit', '방화복'), C('air', '공기통')]],
          ], C('balloon', '풍선'), 0.1),
          GEAR3('길과 병원에서 쓰는 물건이에요.', '일하는 사람', [
            ['길 청소하는 분', [C('vest', '형광 조끼'), C('glove', '목장갑')]],
            ['간호사', [C('mask', '마스크')]],
            ['급식실 조리사', [C('rboot', '장화'), C('hcap', '머리 덮개')]],
          ], C('doll', '인형'), 0.15),
          GEAR3('눈과 귀를 지키는 물건이에요.', '일하는 사람', [
            ['과학자', [C('goggle', '보안경'), C('coat', '실험복')]],
            ['공장 일하는 분', [C('ear', '귀마개'), C('sboot', '안전화')]],
            ['공사장 일꾼', [C('helmet', '안전모')]],
          ], C('candy', '사탕'), 0.2, { conclude: '일하는 사람은 다치지 않으려고 안전 물건을 써요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '공사장 일꾼이 머리에 쓰는 것에 ○ 해요.', options: ['안전모', '앞치마', '귀마개'], answer: '안전모' }],
        easy: [{ type: 'choice', prompt: '머리를 지키는 것에 ○ 해요.', options: ['안전모', '풍선'], answer: '안전모' }] },
      notes: '물건과 사람의 짝은 대표적인 예일 뿐이다. "조리사도 장갑을 껴요"처럼 다른 짝을 말하면 칭찬하고, 교구 정답과 다른 까닭을 함께 이야기한다.',
    }),
    WH({
      id: 'saf-job.e12.work-helpers.activity.dress-up', type: 'activity', title: '안전 물건 착용 따라 하기',
      method: '안전 물건 착용 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '교사를 따라 종이 안전모를 써 보고, 장갑 끼는 차례 카드 2장만 놓는다.', base: '짝과 번갈아 써 보고, 장갑 끼는 차례 카드 3장을 놓은 뒤 점검 3칸에 표시한다.', challenge: '짝이 바르게 썼는지 봐 주고, 점검 칸 하나("앞이 잘 보여요")를 더 표시한다.' },
      activity: {
        title: '종이 안전모·장갑 써 보기', tool: 'timer',
        teacher: '"공사장 일꾼처럼 종이 안전모를 써 볼까요? 쓴 다음에는 무엇을 할까요?" 교사가 먼저 종이 안전모를 쓰고 끈을 턱 밑에서 조이는 흉내를 낸 뒤 반 전체가 따라 한다. "그냥 얹으면 돼요"라는 학생에게 "고개를 숙이면 끈 없는 안전모는 어떻게 될까요?"라고 묻는다. 장갑은 손가락을 하나씩 넣고 손목까지 당긴다는 점을 짚는다.',
        task: '따라 써 보고 차례와 점검 칸에 표시해요.', levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          { prompt: '종이 안전모를 써 보아요.', free: true, toolOptions: { doneLabel: '안전모를 써 보았어요' }, difficulty: 0.1 },
          { prompt: '장갑 끼는 차례로 놓아요.', toolOptions: { title: '장갑 끼기', cards: ['손목까지 당겨요', '손을 펴요', '손가락 넣어요'] }, target: { order: ['손을 펴요', '손가락 넣어요', '손목까지 당겨요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '장갑 끼는 차례로 놓아요(2장).', toolOptions: { cards: ['손가락 넣어요', '손을 펴요'] }, target: { order: ['손을 펴요', '손가락 넣어요'] } } } },
          { prompt: '바르게 썼는지 표시해요.', toolOptions: { title: '바르게 썼나요', safety: ['끈을 조였어요', '장갑이 맞아요', '짝과 해 봤어요'] }, target: { safety: true }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { safety: ['끈을 조였어요', '장갑이 맞아요', '짝과 해 봤어요', '앞이 잘 보여요'] } } },
            conclude: '안전 물건은 바르게 써야 나를 지켜요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '안전모를 쓰면 ___을 조여요.', answer: '끈' }] },
      notes: '종이 안전모(색 도화지 반원 + 고무줄 끈)와 목장갑을 미리 준비한다. 끈은 느슨하게 묶고 목을 조르지 않도록 교사가 살핀다.',
    }),
    WH({
      id: 'saf-job.e12.work-helpers.activity.ok-no', type: 'activity', title: '좋아요·안돼요: 일터 행동',
      method: '좋아요·안돼요: 일터 행동', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개(좋아요 하나, 안돼요 하나) 가운데 고르고, 고르면 결과가 바로 보인다.', base: '보기 3개 가운데 좋아요 행동을 고르고, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개에서 고른 뒤, 안돼요 보기 하나를 좋아요로 바꿔 짝에게 말한다("맨손 → 장갑 끼고").' },
      activity: {
        title: '일터 장면에서 좋아요 행동 고르기', tool: 'emotion',
        teacher: '"조리사가 뜨거운 냄비를 들어요. 어떻게 하면 좋아요일까요?" 보기를 고르기 전에 반 전체가 엄지를 위(좋아요)·아래(안돼요)로 먼저 보이게 한다. "빨리 들면 안 뜨거워요"를 고르는 학생에게 "빨리 들어도 냄비는 뜨거워요. 손을 무엇으로 지킬까요?"라고 묻는다. 일하는 사람도 안전 물건을 쓰고 천천히 일한다는 점을 짚는다.',
        task: '장면을 듣고 좋아요 행동을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          { prompt: '뜨거운 냄비를 들어요. 골라요.', toolOptions: { mode: 'branch', situation: '조리사가 냄비를 들어요.', choices: [{ id: 'bare', text: '맨손으로 들어요', result: '손을 델 수 있어요.', mood: '걱정' }, { id: 'glove', text: '장갑 끼고 들어요', result: '손이 뜨겁지 않아요.', mood: '편안함' }, { id: 'quick', text: '빨리 들어요', result: '빨라도 뜨거워요.', mood: '놀람' }] }, target: { choice: 'glove' }, difficulty: 0.1,
            levels: { easy: { toolOptions: { choices: [{ id: 'bare', text: '맨손으로 들어요', result: '손을 델 수 있어요.', mood: '걱정' }, { id: 'glove', text: '장갑 끼고 들어요', result: '손이 뜨겁지 않아요.', mood: '편안함' }] } } } },
          { prompt: '공사장에 들어가요. 골라요.', toolOptions: { mode: 'branch', situation: '일꾼이 공사장에 들어가요.', choices: [{ id: 'hat', text: '안전모 써요', result: '머리를 지켜요.', mood: '편안함' }, { id: 'cap', text: '그냥 들어가요', result: '머리를 다칠 수 있어요.', mood: '걱정' }, { id: 'hold', text: '손에 들고 가요', result: '들기만 하면 못 지켜요.', mood: '놀람' }] }, target: { choice: 'hat' }, difficulty: 0.15,
            levels: { easy: { toolOptions: { choices: [{ id: 'hat', text: '안전모 써요', result: '머리를 지켜요.', mood: '편안함' }, { id: 'cap', text: '그냥 들어가요', result: '머리를 다칠 수 있어요.', mood: '걱정' }] } } } },
          { prompt: '높은 곳 전구를 갈아요. 골라요.', toolOptions: { mode: 'branch', situation: '높은 곳 전구를 갈아요.', choices: [{ id: 'chair', text: '의자 위에 서요', result: '의자가 흔들려요.', mood: '무서움' }, { id: 'ladder', text: '사다리를 잡아 줘요', result: '사다리가 안 흔들려요.', mood: '뿌듯함' }, { id: 'jump', text: '뛰어서 닿아요', result: '넘어질 수 있어요.', mood: '걱정' }] }, target: { choice: 'ladder' }, difficulty: 0.2,
            levels: { easy: { toolOptions: { choices: [{ id: 'chair', text: '의자 위에 서요', result: '의자가 흔들려요.', mood: '무서움' }, { id: 'ladder', text: '사다리를 잡아 줘요', result: '사다리가 안 흔들려요.', mood: '뿌듯함' }] } } },
            conclude: '일할 때는 안전 물건을 쓰고, 서로 잡아 주며 천천히 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '뜨거운 냄비는 어떻게 들어요?', options: ['장갑 끼고 들어요', '맨손으로 들어요'], answer: '장갑 끼고 들어요' }] },
    }),
    WH({
      id: 'saf-job.e12.work-helpers.activity.dress-order', type: 'activity', title: '안전 물건 쓰는 차례 3장',
      method: '안전 물건 쓰는 차례 3장', tool: 'kitchen', minutes: 14,
      levels: { easy: '카드 2장(물건 쓰기 → 끈·장갑 갖추기)만 차례대로 놓는다.', base: '카드 3장(물건 쓰기 → 끈 조이기 → 일 시작)을 차례대로 놓는다.', challenge: '"그냥 일 시작"처럼 틀린 카드 한 장이 섞여 있어 빼고 놓은 뒤, 끈을 조였는지 짝과 확인한다.' },
      activity: {
        title: '일하기 전에 안전 물건 갖추는 차례', tool: 'kitchen',
        teacher: '"일을 먼저 시작할까요, 안전 물건을 먼저 쓸까요?" 카드를 놓은 뒤 반 전체가 차례대로 몸으로 따라 한다(머리에 쓰기 → 턱 밑에서 끈 조이기 → 손 들어 "시작!"). "일하다가 나중에 써요"라는 학생에게 "일하는 사이에 위에서 무엇이 떨어지면 언제 쓸 틈이 있을까요?"라고 묻는다. 세 장면 모두 안전 물건이 먼저라는 점을 짚는다.',
        task: '카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('공사장에 가요. 차례로 놓아요.', [C('wear', '안전모 써요'), C('tie', '끈 조여요'), C('go', '일 시작해요')], C('skip', '그냥 일 시작'), 0.15),
          ORDER3('냄비를 옮겨요. 차례로 놓아요.', [C('glove', '장갑 껴요'), C('grip', '손잡이 잡아요'), C('slow', '천천히 옮겨요')], C('bare', '맨손으로 잡기'), 0.2),
          ORDER3('일터에 가요. 차례로 놓아요.', [C('shoe', '안전화 신어요'), C('lace', '끈 묶어요'), C('walk', '일터로 가요')], C('slip', '슬리퍼 신기'), 0.25, { conclude: '일하기 전에 안전 물건부터 바르게 써요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '일하기 전에 ___ 물건부터 써요.', answer: '안전' }] },
    }),
    WH({
      id: 'saf-job.e12.work-helpers.wrap.thanks-card', type: 'wrap', title: '일하는 사람에게 고마움 카드',
      method: '일하는 사람에게 고마움 카드', tool: 'collage', minutes: 8,
      levels: { easy: '교사와 함께 노랑 반원(안전모)과 하트 조각 2개만 붙인다.', base: '안전모·하트에 별·네모 조각까지 4개 이상 붙여 꾸민다.', challenge: '꾸민 카드에 "다치지 마세요" 같은 한 마디를 활동지에 써서 붙인다.' },
      wrap: {
        teacher: '"오늘 만난 일하는 사람 가운데 누구에게 고마움 카드를 줄까요?" 판의 노랑 반원은 안전모, 하트는 고마운 마음이라고 정하고 붙이게 한다. "안전모는 공사장 사람만 써요"라는 말이 나오면 "자전거 탈 때 나는 무엇을 쓸까요?"라고 되묻는다. 출구 2번에서 "멋으로 써요"를 고른 학생에게 "안전 물건은 몸을 지키려고 써요"라고 말해 준다. 완성한 카드는 학교 지킴이·조리사께 전한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['semi', 'heart', 'star', 'square', 'circle'], colors: ['노랑', '빨강', '파랑', '초록'], sizes: ['m', 'l'] }, prompt: '노랑 안전모와 하트를 붙여요.', target: { has: [{ shape: 'semi', color: '노랑', min: 1 }, { shape: 'heart', min: 1 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '안전모는 왜 써요?', options: ['멋으로 써요', '머리를 지켜요', '더워서요'], answer: 1, difficulty: 0.1, explain: '안전모는 머리를 지키려고 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '일하는 분께 고마워요',
        items: [
          { type: 'blank', prompt: '고마운 마음을 따라 써요.', text: '다치지 마세요. ___!', answer: '고맙습니다' },
          { type: 'draw', prompt: '안전모를 쓴 일하는 사람을 그려요.' },
        ],
        easy: { note: '"안전모, 고마워요"를 떠올려요.', items: [{ type: 'draw', prompt: '노란 안전모를 그려요.' }] },
      },
      notes: '콜라주 판은 물건 그림을 그리지 못해 노랑 반원 = 안전모, 하트 = 고마운 마음으로 정해 붙인다.',
    }),
    WH({
      id: 'saf-job.e12.work-helpers.wrap.my-gear', type: 'wrap', title: '나도 쓰는 안전 물건 고르기',
      method: '나도 쓰는 안전 물건 고르기', tool: 'sortboard', minutes: 8,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 처음 세 장은 함께 넣는다.', base: '카드 5장을 안전 물건·놀잇감 바구니에 스스로 넣는다.', challenge: '카드 5장을 넣은 뒤 "오늘부터 쓸 것" 하나를 출구 3번에서 고르고 까닭을 말한다.' },
      wrap: {
        teacher: '"일하는 사람만 안전 물건을 쓸까요? 나는 언제 무엇을 쓸까요?" 카드를 하나씩 소리 내어 읽고 바구니에 넣게 한다. 자전거 헬멧을 "놀잇감"에 넣는 학생에게 "자전거를 타다 넘어지면 헬멧이 어디를 지켜 줄까요?"라고 묻는다. 출구 3번은 정답이 여럿이다 — 고른 까닭을 들어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['안전 물건', '놀잇감'], cards: [C('bike', '자전거 헬멧'), C('ball', '공'), C('knee', '무릎 보호대'), C('doll', '인형'), C('mitt', '오븐 장갑')] }, prompt: '안전 물건을 바구니에 넣어요.', target: { sort: { '안전 물건': ['bike', 'knee', 'mitt'], 놀잇감: ['ball', 'doll'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '자전거를 탈 때 무엇을 써요?', options: ['헬멧', '풍선', '모자 없이'], answer: 0, difficulty: 0.1, explain: '자전거를 탈 때는 헬멧을 써요.' },
          { type: 'choice', prompt: '오늘부터 쓸 것을 골라요.', options: ['자전거 헬멧', '무릎 보호대', '오븐 장갑'], answer: 0, difficulty: 0.1, explain: '셋 다 나를 지켜요. 필요할 때 꼭 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나를 지키는 안전 물건',
        items: [
          { type: 'check', prompt: '내가 쓸 안전 물건에 ✓ 해요.', options: ['자전거 헬멧', '무릎 보호대', '오븐 장갑'] },
          { type: 'draw', prompt: '안전 물건을 쓴 내 모습을 그려요.' },
        ],
        easy: { note: '"헬멧은 머리를 지켜요"를 떠올려요.', items: [{ type: 'draw', prompt: '헬멧을 쓴 내 모습을 그려요.' }] },
      },
      notes: '출구 3번(오늘부터 쓸 것)은 정답이 하나가 아니다 — 교구는 첫 보기를 정답으로 받지만, 다른 보기를 고른 학생에게도 "그것도 나를 지켜요"라고 말해 준다. 집에 그 물건이 없는 학생을 드러내지 않도록 "있는지"는 묻지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 학교와 동네 일터의 안전 표시·시설 찾기
  const SS = MOD('saf-job.e12.safety-spots', [2]);
  const SCHOOL = [{ name: '교실', icon: 'school', at: [0, 0] }, { name: '소화기', icon: 'dot', at: [2, 0] }, { name: '계단', icon: 'dot', at: [3, 1] }, { name: '비상구', icon: 'dot', at: [3, 2] }, { name: '급식실', icon: 'dot', at: [0, 2] }];
  const SCHOOL_MORE = [{ name: '보건실', icon: 'hospital', at: [1, 1] }, { name: '화장실', icon: 'dot', at: [1, 2] }];
  const T_SS = [
    SS({
      id: 'saf-job.e12.safety-spots.intro.spot-pic', type: 'intro', title: '그림에서 안전 표시 찾기',
      method: '그림에서 안전 표시 찾기', tool: 'emotion', minutes: 5,
      levels: { easy: '급식실 장면 1개에서 안전 표시가 있는 곳 옆에 "편안함" 카드를 놓는 시연을 함께 본다.', base: '장면 2개(표시 있는 곳·없는 곳)를 견주며 마음 카드를 놓는 시연을 본다.', challenge: '시연을 본 뒤 표시가 무슨 뜻인지("미끄러워요") 한 마디로 말한다.' },
      intro: {
        teacher: '"급식실 바닥에 노란 표지판이 서 있어요. 왜 세워 두었을까요?" 두세 명의 대답을 듣고(기다릴 반응: "미끄러워서요", "조심하라고요") 시연 단추로 표시가 있는 곳 옆에는 "편안함", 표시가 없는 젖은 바닥 옆에는 "걱정" 카드가 놓이는 모습을 보인다. "표시는 어른만 보면 돼요"라는 말이 나오면 "우리도 급식실 바닥을 걸어요. 표시를 못 보면 어떻게 될까요?"라고 되묻는다. 오늘은 학교와 동네 일터에서 안전 표시와 시설을 찾아본다고 밝힌다.',
        student: '우리 학교에서 본 노란 표지판을 떠올려 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'sign', label: '표시 있는 곳' }, { id: 'wet', label: '표시 없는 곳' }], cards: ['편안함', '걱정', '신남'], shuffle: false }, sequence: [{ match: { sign: '편안함' } }, { match: { sign: '편안함', wet: '걱정' } }] },
        art: { draw: 'a paper school cafeteria with a yellow paper wet-floor sign standing on a shiny floor, and paper children walking slowly around it', banner: '안전 표시를 찾아요' },
      },
      notes: '노란 "젖은 바닥" 표지판을 그리지 못해 말로 보인다. 급식실 실물 표지판 사진이나 실물을 함께 보인다.',
    }),
    SS({
      id: 'saf-job.e12.safety-spots.intro.walk-chant', type: 'intro', title: '"보고, 멈추고, 물어봐요" 구호',
      method: '안전 탐험대 구호 익히기', tool: 'timer', minutes: 5,
      levels: { easy: '교사가 구호 카드를 하나씩 들어 보이며 함께 말한다.', base: '짝과 함께 구호 세 개를 차례대로 말하며 몸짓을 한다.', challenge: '구호마다 내 몸짓을 하나 더해 짝에게 보여 준다.' },
      intro: {
        teacher: '"보고! (눈 옆에 손 대기) 멈추고! (두 손 앞으로) 물어봐요! (손 들기)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 세 번 따라 한다. "궁금하면 만져 봐요"라는 말이 나오면 "소화기를 함부로 누르면 어떻게 될까요? 궁금할 땐 누구에게 물어볼까요?"라고 되묻는다. 오늘 탐험에서 안전시설은 눈으로 보고, 만지지 않고, 궁금하면 어른께 묻는다고 밝힌다.',
        student: '"보고, 멈추고, 물어봐요!"를 몸짓과 함께 따라 말해요.',
        demo: { tool: 'timer', options: { title: '안전 탐험대 구호', cards: ['물어봐요', '보고', '멈추고'] }, sequence: [{ order: ['보고', '멈추고', '물어봐요'] }] },
        art: { draw: 'a line of paper children wearing paper explorer badges, one shading eyes with a hand, one holding hands out to stop, one raising a hand to ask a teacher', banner: '보고, 멈추고, 물어봐요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    SS({
      id: 'saf-job.e12.safety-spots.activity.school-tour', type: 'activity', title: '학교 안전시설 탐험 지도',
      method: '학교 안전시설 탐험 지도', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '학교 칸 지도(다섯 곳)에서 소화기·비상구·급식실 세 곳에 차례로 핀을 꽂는다.', challenge: '보건실·화장실까지 일곱 곳이 있는 지도에서 꽂고, 우리 교실에서 가장 가까운 소화기가 어디였는지 짝에게 말한다.' },
      activity: {
        title: '탐험한 안전시설 지도에 꽂기', tool: 'map',
        teacher: '"탐험할 때 본 빨간 통은 어디에 있었나요?" 실제 학교를 한 바퀴 돌아본 뒤 지도에 핀을 꽂게 한다. 비상구를 "안 쓰는 문"이라고 하는 학생에게 "불이 나면 이 문으로 어디까지 나갈 수 있을까요?"라고 묻는다. 지도의 자리는 우리 학교와 다를 수 있으니 실제로 본 자리를 손으로 가리키게 한다.',
        task: '탐험한 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('불을 끄는 빨간 통에 꽂아요.', SCHOOL, SCHOOL_MORE, '소화기', 0.1),
          PIN('불이 나면 나가는 문에 꽂아요.', SCHOOL, SCHOOL_MORE, '비상구', 0.15),
          PIN('젖은 바닥 표지가 있는 곳에 꽂아요.', SCHOOL, SCHOOL_MORE, '급식실', 0.2, { conclude: '소화기·비상구·젖은 바닥 표지는 우리를 지켜요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '불이 나면 나가는 문에 ○ 해요.', options: ['비상구', '교실 창문', '사물함'], answer: '비상구' }] },
      notes: '현장 탐험(별표 2 직업안전 2) 뒤에 쓰는 판이다. 소화기는 눈으로만 보고 만지지 않는다. 비상구 표시는 교구가 그리지 못해 실물을 보인다.',
    }),
    SS({
      id: 'saf-job.e12.safety-spots.activity.facility-sort', type: 'activity', title: '안전시설과 하는 일 나누기',
      method: '안전시설과 하는 일 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 3장, 바구니에 넣으면 바로 맞는지 알려 주고 장 수가 보인다.', base: '카드 5장을 "불이 날 때"·"넘어지지 않게" 바구니에 다 넣은 뒤 확인한다.', challenge: '카드 7장 — 안전시설이 아닌 장식 카드 2장(화분·벽시계 등)은 어느 바구니에도 넣지 않고, 고른 까닭을 짝에게 말한다.' },
      activity: {
        title: '안전시설을 하는 일로 나누기', tool: 'sortboard',
        teacher: '"소화기는 언제 우리를 도와줄까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽는다. "화분도 안전시설이에요"라고 하는 학생에게 "불이 나거나 미끄러울 때 화분이 우리를 지켜 줄까요?"라고 묻는다. 안전시설은 꾸미려고 둔 것이 아니라 위험할 때 쓰려고 둔 것이라는 점을 짚는다.',
        task: '카드를 알맞은 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB('학교 복도의 시설이에요. 나누어요.', ['불이 날 때', '넘어지지 않게'], [C('ext', '소화기'), C('exit', '비상구 표시'), C('bell', '비상벨')], [C('rail', '계단 손잡이'), C('slip', '미끄럼 주의')], [C('pot', '꽃 화분'), C('clock', '벽시계')], 0.1),
          SB('급식실의 시설이에요. 나누어요.', ['불이 날 때', '넘어지지 않게'], [C('hyd', '소화전'), C('map', '대피 안내도'), C('ext2', '소화기')], [C('mat', '미끄럼 방지 판'), C('wet', '젖은 바닥 표지')], [C('menu', '식단표'), C('pic', '그림 액자')], 0.15),
          SB('동네 도서관 시설이에요. 나누어요.', ['불이 날 때', '넘어지지 않게'], [C('spr', '스프링클러'), C('door', '비상구'), C('ext3', '소화기')], [C('bar', '난간'), C('step', '계단 손잡이')], [C('board', '게시판'), C('sofa', '소파')], 0.2, { conclude: '안전시설은 불이 날 때, 넘어지지 않게 우리를 지켜요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '불이 날 때 쓰면 ○, 아니면 ×를 써요.', columns: ['시설', '○ / ×'], cells: [['소화기', ''], ['꽃 화분', ''], ['비상구 표시', '']], answer: '○, ×, ○' }] },
    }),
    SS({
      id: 'saf-job.e12.safety-spots.activity.kitchen-visit', type: 'activity', title: '급식실 안전 약속 찾기',
      method: '급식실 일하는 분 안전 약속 찾기', tool: 'kitchen', minutes: 14,
      levels: { easy: '항목 3개 가운데 맞는 약속 2개에만 표시한다.', base: '항목 5개(함정 2개 포함) 가운데 급식실에서 본 약속에만 표시한다.', challenge: '항목 6개에서 고른 뒤, 조리사께 여쭤볼 질문 하나("장화는 왜 신어요?")를 만든다.' },
      activity: {
        title: '급식실 안전 약속 점검표', tool: 'kitchen',
        teacher: '"급식실에서 일하시는 분은 무엇을 신고, 무엇을 끼고 계셨나요?" 항목을 하나씩 소리 내어 읽고 본 것에만 표시하게 한다. "슬리퍼가 편해요"에 표시하는 학생에게 "물이 많은 바닥에서 슬리퍼를 신으면 어떻게 될까요?"라고 묻는다. 견학이 어려우면 급식실 사진을 보이고, 조리사께 미리 받은 질문 답을 함께 읽는다.',
        task: '본 약속에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '조리사가 쓴 것에 표시해요.', toolOptions: { mode: 'checklist', title: '쓴 것', items: [C('boot', '장화 신기'), C('slip', '슬리퍼 신기'), C('glove', '장갑 끼기'), C('bare', '맨손으로 냄비'), C('cap', '위생모 쓰기')] }, target: { checklist: ['boot', 'glove', 'cap'] }, difficulty: 0.1,
            levels: { easy: { prompt: '쓴 것 2개에 표시해요.', toolOptions: { items: [C('boot', '장화 신기'), C('slip', '슬리퍼 신기'), C('glove', '장갑 끼기')] }, target: { checklist: ['boot', 'glove'] } },
              challenge: { toolOptions: { items: [C('boot', '장화 신기'), C('slip', '슬리퍼 신기'), C('glove', '장갑 끼기'), C('bare', '맨손으로 냄비'), C('cap', '위생모 쓰기'), C('ring', '반지 끼기')] } } } },
          { prompt: '바닥을 위한 약속에 표시해요.', toolOptions: { mode: 'checklist', title: '바닥 약속', items: [C('wipe', '물기 닦기'), C('leave', '물 그대로'), C('sign', '표지 세우기'), C('run', '뛰어다니기'), C('walk', '천천히 걷기')] }, target: { checklist: ['wipe', 'sign', 'walk'] }, difficulty: 0.15,
            levels: { easy: { prompt: '바닥 약속 2개에 표시해요.', toolOptions: { items: [C('wipe', '물기 닦기'), C('leave', '물 그대로'), C('sign', '표지 세우기')] }, target: { checklist: ['wipe', 'sign'] } },
              challenge: { toolOptions: { items: [C('wipe', '물기 닦기'), C('leave', '물 그대로'), C('sign', '표지 세우기'), C('run', '뛰어다니기'), C('walk', '천천히 걷기'), C('slide', '미끄럼 놀이')] } } } },
          { prompt: '내가 급식실에서 지킬 것은요?', toolOptions: { mode: 'checklist', title: '나도 지켜요', items: [C('line', '줄 서서 걷기'), C('push', '친구 밀기'), C('soup', '국 조심하기'), C('play', '장난치기'), C('hold', '식판 두 손')] }, target: { checklist: ['line', 'soup', 'hold'] }, difficulty: 0.2,
            levels: { easy: { prompt: '지킬 것 2개에 표시해요.', toolOptions: { items: [C('line', '줄 서서 걷기'), C('push', '친구 밀기'), C('soup', '국 조심하기')] }, target: { checklist: ['line', 'soup'] } },
              challenge: { toolOptions: { items: [C('line', '줄 서서 걷기'), C('push', '친구 밀기'), C('soup', '국 조심하기'), C('play', '장난치기'), C('hold', '식판 두 손'), C('run', '배식대로 뛰기')] } } },
            conclude: '급식실에서는 일하시는 분도 우리도 안전 약속을 지켜요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '급식실에서 본 것에 ✓ 해요.', options: ['장화', '위생모', '젖은 바닥 표지'] }] },
      notes: '급식실 견학은 조리 시간을 피해 영양교사·조리사와 미리 약속한다. 조리 기구에는 다가가지 않는다.',
    }),
    SS({
      id: 'saf-job.e12.safety-spots.activity.sign-pattern', type: 'activity', title: '안전 표시 모양 따라 그리기',
      method: '안전 표시 모양 따라 그리기', tool: 'pattern', minutes: 14,
      levels: { easy: '조각 2종(노랑 세모·초록 네모)이 되풀이되는 줄에서 보기 2개 가운데 빈칸 조각·규칙을 고른다.', base: '조각 3종(노랑 세모·분홍 동그라미·초록 네모)이 되풀이되는 줄에서 보기 3개 가운데 고른다.', challenge: '되풀이 묶음이 네 조각으로 길어지고 파란 동그라미까지 보기 4개 가운데 고른 뒤, 색종이 표시 조각으로 내 되풀이 줄을 만들어 짝에게 보인다.' },
      activity: {
        title: '안전 표시 조각 되풀이 줄', tool: 'pattern',
        teacher: '"노란 세모는 \'조심해요\', 분홍 동그라미는 \'하지 마요\', 초록 네모는 \'나가는 길\' 표시예요. 줄에서 다음에 올 표시는 무엇일까요?" 조각을 넣기 전에 줄을 반 전체가 "조심, 하지 마, 나가는 길" 하고 소리 내어 읽는다. 아무 조각이나 넣는 학생에게 "앞에서 어떤 세 개가 되풀이되었나요?"라고 묻는다. 끝나면 학교에서 본 실제 표시가 어느 모양이었는지 떠올리게 한다.',
        task: '되풀이되는 표시 줄을 보고 골라요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '빈칸에 올 표시를 골라요.', toolOptions: { mode: 'rule', seq: ['triangle:buttercup', 'circle:rose', 'square:mint', 'triangle:buttercup', 'circle:rose', 'square:mint', 'triangle:buttercup', null], question: '빈칸에 올 표시는?', choices: ['분홍 동그라미', '노란 세모', '초록 네모'] }, target: { pick: 0 }, difficulty: 0.1,
            levels: {
              easy: { prompt: '빈칸에 올 표시를 골라요(2종).', toolOptions: { seq: ['triangle:buttercup', 'square:mint', 'triangle:buttercup', 'square:mint', 'triangle:buttercup', null], choices: ['초록 네모', '노란 세모'] }, target: { pick: 0 } },
              challenge: { prompt: '빈칸에 올 표시를 골라요(4종 보기).', toolOptions: { seq: ['triangle:buttercup', 'triangle:buttercup', 'circle:rose', 'square:mint', 'triangle:buttercup', 'triangle:buttercup', 'circle:rose', null], choices: ['분홍 동그라미', '노란 세모', '초록 네모', '파란 동그라미'] }, target: { pick: 2 } },
            } },
          { prompt: '어떤 규칙인지 골라요.', toolOptions: { mode: 'rule', seq: ['square:mint', 'triangle:buttercup', 'circle:rose', 'square:mint', 'triangle:buttercup', 'circle:rose', 'square:mint', 'triangle:buttercup'], question: '어떻게 되풀이되나요?', choices: ['두 가지가 되풀이', '세 가지가 되풀이', '되풀이 없어요'] }, target: { pick: 1 }, difficulty: 0.15,
            levels: {
              easy: { prompt: '어떤 규칙인지 골라요(2종).', toolOptions: { seq: ['square:mint', 'triangle:buttercup', 'square:mint', 'triangle:buttercup', 'square:mint', 'triangle:buttercup'], choices: ['두 가지가 되풀이', '되풀이 없어요'] }, target: { pick: 0 } },
              challenge: { prompt: '어떤 규칙인지 골라요(4개 묶음).', toolOptions: { seq: ['square:mint', 'square:mint', 'triangle:buttercup', 'circle:rose', 'square:mint', 'square:mint', 'triangle:buttercup', 'circle:rose'], choices: ['두 가지가 되풀이', '세 가지가 되풀이', '네 개씩 되풀이', '되풀이 없어요'] }, target: { pick: 2 } },
            } },
          { prompt: '"조심해요" 다음 표시는요?', toolOptions: { mode: 'rule', seq: ['circle:rose', 'circle:rose', 'triangle:buttercup', 'circle:rose', 'circle:rose', 'triangle:buttercup', 'circle:rose', null], question: '빈칸에 올 표시는?', choices: ['노란 세모', '분홍 동그라미', '초록 네모'] }, target: { pick: 1 }, difficulty: 0.2,
            levels: {
              easy: { prompt: '"조심해요" 다음을 골라요(2종).', toolOptions: { seq: ['circle:rose', 'triangle:buttercup', 'circle:rose', 'triangle:buttercup', 'circle:rose', null], choices: ['노란 세모', '분홍 동그라미'] }, target: { pick: 0 } },
              challenge: { prompt: '다음 표시를 골라요(4종 보기).', toolOptions: { seq: ['circle:rose', 'triangle:buttercup', 'triangle:buttercup', 'circle:sky', 'circle:rose', 'triangle:buttercup', 'triangle:buttercup', null], choices: ['노란 세모', '분홍 동그라미', '초록 네모', '파란 동그라미'] }, target: { pick: 3 } },
            },
            conclude: '안전 표시는 모양과 색으로 뜻을 알려 줘요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '"조심해요" 표시 모양에 ○ 해요.', options: ['노란 세모', '초록 네모', '분홍 동그라미'], answer: '노란 세모' }] },
      notes: '규칙 판에는 빨강이 없어 "하지 마요" 표시를 분홍 동그라미로 보인다. 실제 금지 표시는 빨간 동그라미라고 실물 표지 사진으로 알려 준다. 계획의 "따라 그리기"·"규칙 만들기"는 규칙 판 보기 고르기(rule)로 했다 — 규칙 판의 빈칸·만들기 칸이 휴대폰에서 36px 라 44px 누름 기준을 넘지 못한다(교구 한계). 내 되풀이 줄 만들기는 색종이 조각으로 책상 위에서 한다.',
    }),
    SS({
      id: 'saf-job.e12.safety-spots.wrap.tour-story', type: 'wrap', title: '탐험 이야기 차례 놓기',
      method: '탐험 이야기 차례 놓기', tool: 'story', minutes: 8,
      levels: { easy: '교사가 첫 장면(출발)을 함께 놓고 남은 두 장면을 반 전체가 말한다.', base: '탐험 장면 3장을 스스로 차례대로 놓는다.', challenge: '3장면을 놓은 뒤 가장 기억나는 곳 하나를 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 안전 탐험대는 어디에서 출발해서 무엇을 찾았나요?" 장면 카드를 놓은 뒤 이야기를 처음부터 반 전체가 소리 내어 읽는다. 출구 2번에서 "눌러 봐요"를 고른 학생에게 "소화기는 불이 났을 때 어른이 써요. 우리는 눈으로 보고 물어봐요"라고 말해 준다. 마지막에 "보고, 멈추고, 물어봐요!"를 다 같이 외친다.',
        exitTicket: [
          STORY3('탐험 이야기를 차례로 놓아요.', [C('start', '탐험 출발'), C('ext', '소화기 찾음'), C('exit', '비상구 찾음')]),
          { type: 'choice', prompt: '소화기를 보면 어떻게 해요?', options: ['눌러 봐요', '눈으로 봐요', '들고 가요'], answer: 1, difficulty: 0.1, explain: '안전시설은 눈으로 보고, 궁금하면 어른께 물어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 학교 안전 탐험',
        items: [
          { type: 'check', prompt: '오늘 찾은 것에 ✓ 해요.', options: ['소화기', '비상구 표시', '젖은 바닥 표지'] },
          { type: 'draw', prompt: '가장 기억나는 안전시설을 그려요.' },
        ],
        easy: { note: '"소화기, 비상구"를 떠올려요.', items: [{ type: 'draw', prompt: '빨간 소화기를 그려요.' }] },
      },
    }),
    SS({
      id: 'saf-job.e12.safety-spots.wrap.promise', type: 'wrap', title: '안전 표시 지키기 약속',
      method: '안전 표시 지키기 약속', tool: 'dilemma', minutes: 8,
      levels: { easy: '교사가 장면을 읽어 주고 반 전체가 손을 들어 한 번 고른다.', base: '한 번 고른 뒤 고른 길과 고르지 않은 길, 두 결과를 견주어 본다.', challenge: '결과를 본 뒤 출구 2번에서 비상구 앞을 비워 두는 까닭을 고른다.' },
      wrap: {
        teacher: '"비상구 앞에 가방이 놓여 있어요. 그대로 둘까요, 치울까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "내 가방이 아니니까 그냥 둬요"를 고른 학생에게 "불이 나서 모두 이 문으로 나가야 하면 가방이 어떻게 될까요?"라고 묻는다. 끝에서 \'다른 선택을 했다면\' 칸을 함께 읽고, 비상구와 소화기 앞은 늘 비워 둔다는 약속을 다 같이 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'dilemma', options: { title: '어떻게 할까요?', scene: { text: '비상구 앞에 가방이 놓여 있어요.', motif: 'house', choices: [
            { id: 'leave', text: '그대로 둬요', result: '불이 나면 나가는 길이 막혀요.', why: '비상구 앞은 늘 비워 둬요.' },
            { id: 'move', text: '가방을 치워요', result: '가방을 사물함에 넣었어요.', ending: '나가는 길이 활짝 열렸어요.' }] } }, prompt: '비상구 앞 가방, 어떻게 해요?', target: { path: [['move']] }, difficulty: 0.1 },
          { type: 'choice', prompt: '비상구 앞을 왜 비워요?', options: ['넓어 보여서요', '빨리 나가려고요', '청소가 쉬워서요'], answer: 1, difficulty: 0.1, explain: '불이 나면 모두 비상구로 빨리 나가야 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '안전 표시를 지켜요',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['비상구 앞에 가방 두기', ''], ['소화기 앞 비워 두기', ''], ['젖은 바닥 표지 보고 천천히 걷기', '']], answer: '×, ○, ○' },
          { type: 'draw', prompt: '비상구 앞을 비워 둔 모습을 그려요.' },
        ],
        easy: { note: '"비상구 앞은 비워요"를 떠올려요.', items: [{ type: 'draw', prompt: '비상구 문을 그려요.' }] },
      },
    }),
  ];

  PaperLessons.registerModules([...T_WH, ...T_SS]);
})();
