/* 창체 법정교육 다문화 이해 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 multi 초1-2.
 * 근거: research-mandatory §1 다문화 이해교육(다문화가족지원법 제5조·시행령 제10조의2 — 연 2시간, 교육부 지침),
 *   §2 다문화 이해 초: 다름 존중, 세계 문화 체험.
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기·역할놀이·구호. 장면·인물은 직접 지은 가상 인물이다(가명 '하늘'·'솔'·'누리').
 * 주제 3개(1학년 1 · 2학년 2) × 계획 모듈 8개 = 24모듈.
 *
 * 이 영역에서 늘 지키는 틀(모든 모듈):
 *   - 학생 자신의 가족 배경·나라·피부색·쓰는 말을 묻지 않는다. 장면은 그림 속 가명 인물의 일로만 이야기한다.
 *   - 다른 문화를 신기한 볼거리·불쌍한 처지로 그리지 않는다. "여러 나라에서 이렇게도 해요"처럼 여러 방법 가운데 하나로 말하고,
 *     "○○ 사람은 다 ~해요"처럼 한 나라·민족을 하나로 묶는 말은 쓰지 않는다(인사말은 '○○어 인사'로 말에 붙인다).
 *   - 피부색은 여러 색 종이 조각으로만 보이고 인종 이름을 붙이지 않는다.
 *   - 놀리는 말("야, 외국인"·"으웩"·"이상한 냄새"·말투 흉내)은 바로잡을 카드로만 나온다. 역할놀이에서 소리 내어 하지 않는다.
 *   - 손으로 먹기는 손을 씻고 깨끗하게 먹는 여러 식사 방법 가운데 하나로만 다룬다.
 *   - 지도·건반 교구는 인사말 소리를 내지 못한다 — 인사말은 교사가 읽어 준다(각 모듈 notes).
 *
 * 수치·법 조항은 학생 화면에 쓰지 않는다. 그림그래프 수는 수업용 가상 자료, 타이머 초·횟수는 '우리 반 약속'이다.
 *
 * 사람 확인: (근거 파일에는 지침 항목 제목만 있어 일반 다문화 이해 교육 내용으로 쓴 문장 — 확인할 곳을 함께 적는다)
 *   - greet-diff.intro.greet-map · greet-diff.activity.greet-match · greet-diff.wrap.fav-greet: 인사말 한글 표기
 *     '니하오(중국어)·헬로(영어)·신짜오(베트남어)·곤니치와(일본어)·센베노(몽골어)', 고맙다는 말 '셰셰(중국어)·땡큐(영어)·깜언(베트남어)·아리가토(일본어)',
 *     헤어질 때 말 '짜이찌엔(중국어)·굿바이(영어)·땀비엣(베트남어)' — 국립국어원 외래어 표기·교육부 다문화교육 자료(이중언어 인사) 확인.
 *   - greet-diff.intro.greet-map · world-food.intro.food-map: 칸 지도에 둔 나라·음식 자리는 대략의 방향만 나타낸 수업용 그림이다 — 외교부 국가·지역 정보로 자리 확인.
 *   - greet-diff.activity.greet-move: '고개 숙이기·손 흔들기·두 손 모으기'를 여러 나라에서 쓰는 인사 동작으로 소개(특정 나라에 묶지 않음) — 교육부 다문화교육 자료 확인.
 *   - world-food.intro.food-map · world-food.activity.food-graph: 음식과 나라 짝(김밥-한국, 쌀국수-베트남, 카레-인도, 파스타-이탈리아)은
 *     '그 나라에서 많이 먹는 음식 가운데 하나'로만 쓴다 — 외교부 국가 정보·한국관광공사 등으로 확인. 그래프 수는 가상.
 *   - world-food.activity.table-set · world-food.activity.eat-move: 젓가락·숟가락·포크·나이프·손으로 먹기, 손으로 먹을 때 손 씻는 그릇·수건을 쓰는 것 —
 *     교육부 다문화교육 자료(세계 식문화) 확인.
 *   - world-food.activity.yum-ok: 낯선 음식은 "나중에 먹을래"처럼 정중히 사양해도 되고, 음식을 흉보는 말은 하지 않는다 — 교육부 다문화교육·인성교육 자료 확인.
 *   - no-teasing 전체: 생김새·말투를 흉내 내거나 놀리면 "그만해, 같이 놀자" 말하기, 멈추지 않으면 선생님께 알리기, 이름 불러 주기 —
 *     교육부 다문화교육·학교폭력 예방(어울림) 자료 확인.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'multi', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const ids = (a) => a.map(idOf);
  const BLOCKS = ['q', 'e', 'h', 'qr'];

  // 정리 출구
  const ORDER = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[cards.length - 1], ...cards.slice(0, -1)] }, prompt: prompt || '차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SELF = (title, list, prompt) => ({ type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '해 본 것에 표시해요.', target: { selfCheck: list }, difficulty: 0.1 });
  const RHY_EXIT = (prompt, pattern) => ({ type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: BLOCKS, pattern }, prompt, target: { rhythm: pattern }, difficulty: 0.15 });
  const RHY_DEMO = (pattern) => ({ tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: BLOCKS, pattern }, sequence: [{ rhythm: pattern }] });

  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 헷갈리는 카드 2장(hard[0] → 첫 바구니, hard[1] → 둘째 바구니)
  const SB2 = (slots, prompt, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: ids(a), [slots[1]]: ids(b) });
    return {
      prompt, toolOptions: { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { more: hard }, target: { sort: S([...ok, hard[0]], [...no, hard[1]]) } },
      },
      ...more,
    };
  };
  // 좋아요/안돼요 나누기(emotion sort): 기본 5장, 쉬움 3장, 도전 안돼요 말 대신 할 말 고르기(match)
  const OKNO = ['좋아요', '안돼요'];
  const ESORT = (prompt, ok, no, swap, d, more) => ({
    prompt, toolOptions: { mode: 'sort', slots: OKNO, cards: [ok[0], no[0], ok[1], no[1], ok[2]] }, target: { sort: { 좋아요: ids(ok), 안돼요: ids(no) } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(3장).`, toolOptions: { cards: [ok[0], no[0], ok[1]] }, target: { sort: { 좋아요: ids(ok.slice(0, 2)), 안돼요: ids(no.slice(0, 1)) } } },
      challenge: { prompt: swap.prompt, toolOptions: { mode: 'match', slots: [{ id: 'swap', label: swap.label }], cards: [no[0], ok[0], no[1], ok[1]] }, target: { match: { swap: ids([ok[0], ok[1]]) } } },
    },
    ...more,
  });
  // 인사말 짝 짓기(wordcards match): 기본 4쌍, 쉬움 앞 2쌍, 도전 '인사 동작' 칸이 하나 더 있어 동작 카드도 잇는다
  const GMATCH = (prompt, pairs, act, d, more) => {
    const slots = pairs.map((p) => ({ id: p[0], label: p[1] }));
    const cards = pairs.map((p) => C(`w-${p[0]}`, p[2]));
    const M = (ps) => Object.fromEntries(ps.map((p) => [p[0], `w-${p[0]}`]));
    const mix = (a) => [a[a.length - 1], ...a.slice(0, -1)];
    return {
      prompt, toolOptions: { mode: 'match', slots, cards: mix(cards) }, target: { match: M(pairs) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(2쌍).`, toolOptions: { slots: slots.slice(0, 2), cards: mix(cards.slice(0, 2)) }, target: { match: M(pairs.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}, 동작도요.`, toolOptions: { slots: [...slots, { id: 'act', label: '인사 동작' }], cards: mix([...cards, C('w-act', act)]) }, target: { match: Object.assign(M(pairs), { act: 'w-act' }) } },
      },
      ...more,
    };
  };
  // 장면 차례 놓기(story): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 '선생님께 알려요'까지 4장
  const ORDER3 = (prompt, cards, tell, d, more) => {
    const i = ids(cards);
    return {
      prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: i }, difficulty: d,
      levels: {
        easy: { state: { at: { [i[0]]: 0, [i[1]]: null, [i[2]]: null } } },
        challenge: { prompt: `${cut(prompt)}(4장).`, toolOptions: { slots: ['먼저', '다음', '그다음', '끝'], cards: [cards[2], tell, cards[0], cards[1]] }, target: { order: [i[0], i[1], tell.id, i[2]] } },
      },
      ...more,
    };
  };
  // 순서 카드(timer order): 기본 3장, 쉬움 앞 2장
  const STEPS = (prompt, title, cards, d, more) => ({
    prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [cards[1], cards[0]] }, target: { order: cards.slice(0, 2) } } },
    ...more,
  });

  // =====================================================================================================
  // 1학년 · 여러 나라 인사, 달라도 친구
  const GREET = MOD('multi.e12.greet-diff', [1]);
  const WORLD = [
    { name: '한국', icon: 'city', at: [3, 1] }, { name: '중국', icon: 'city', at: [2, 1] },
    { name: '베트남', icon: 'city', at: [2, 2] }, { name: '미국', icon: 'city', at: [5, 1] },
  ];
  const T_GREET = [
    GREET({
      id: 'multi.e12.greet-diff.intro.greet-map', type: 'intro', title: '세계 칸 지도에서 인사 듣기',
      method: '세계 지도에서 인사 듣기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 한국·중국 두 곳만 짚으며 인사말을 읽어 주고 함께 따라 말한다.', base: '네 곳(한국·중국·베트남·미국)에 차례로 핀이 꽂히는 시연을 보며, 교사가 읽어 주는 인사말을 따라 말한다.', challenge: '네 곳의 인사를 들은 뒤 우리말 "안녕"과 소리가 비슷한 인사가 있는지 짝과 말해 본다.' },
      intro: {
        teacher: '"세계 지도예요. 여기 한국에서는 \'안녕하세요\', 중국어로는 \'니하오\', 베트남어로는 \'신짜오\', 영어로는 \'헬로\'라고 인사해요." 시연 단추로 핀이 한 곳씩 꽂힐 때마다 그 말의 인사를 읽어 주고 반 전체가 따라 말한다. "니하오는 이상한 말이에요"라는 말이 나오면 "우리말 \'안녕하세요\'도 다른 나라 친구에게는 처음 듣는 말이에요. 처음 들으면 낯설 뿐, 이상한 것은 아니에요"라고 되묻듯 답한다. 한 나라 안에서도 여러 말을 쓰고, 한 말을 여러 나라에서 쓴다는 점을 덧붙인다. 오늘은 여러 가지 인사를 해 보고 달라도 모두 친구라는 것을 알아본다고 밝힌다.',
        student: '선생님이 읽어 주는 여러 나라 인사말을 따라 말해 보아요.',
        demo: { tool: 'map', options: { grid: [6, 4], places: WORLD, title: '세계 칸 지도' }, sequence: [{ place: '한국' }, { place: '중국' }, { place: '베트남' }, { place: '미국' }] },
        art: { draw: 'a simple paper world map made of colored paper squares, with small paper children waving and bowing from different spots, speech bubbles cut from paper floating above', banner: '여러 나라 인사' },
      },
      notes: '지도 교구는 소리를 내지 않는다. 인사말은 교사가 읽어 준다. 학생에게 집에서 쓰는 말이나 가족의 나라를 묻지 않는다.',
    }),
    GREET({
      id: 'multi.e12.greet-diff.intro.greet-song', type: 'intro', title: '"안녕, 헬로, 니하오" 인사 노래',
      method: '인사 노래 따라 부르기', tool: 'keyboard', minutes: 6,
      levels: { easy: '첫 마디("안녕 안녕")만 교사와 함께 부르며 건반을 따라 짚는다.', base: '세 가지 인사(안녕·헬로·니하오)가 든 가락 시연을 듣고 노랫말을 따라 부른다.', challenge: '다 부른 뒤 "신짜오"를 넣어 넷째 마디를 반 전체가 바꿔 부른다(교사 진행).' },
      intro: {
        teacher: '"안녕 안녕, 헬로 헬로, 니하오!" 시연 단추로 가락이 건반에 차례로 눌리는 모습을 보이고, 노랫말 한 글자에 건반 한 번이라는 것을 손가락으로 짚어 준다. 반 전체가 두 번 따라 부른다. "헬로가 제일 멋있어요"라는 말이 나오면 "어느 인사든 반가운 마음은 똑같아요. 듣는 친구가 웃으면 좋은 인사예요"라고 말해 준다.',
        student: '"안녕 안녕, 헬로 헬로, 니하오!" 노래를 손을 흔들며 따라 불러요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '솔', '미', '라', '솔', '미', '레', '도'] }, sequence: [{ notes: ['솔', '미', '솔', '미', '라', '솔', '미', '레', '도'] }] },
        art: { draw: 'paper children of many paper colors standing in a row, singing and waving with paper musical notes floating above them', banner: '안녕, 헬로, 니하오' },
      },
      notes: '가락은 수업용으로 지은 짧은 노래다. 건반은 계이름 소리만 낸다 — 노랫말은 반 전체가 부른다.',
    }),
    GREET({
      id: 'multi.e12.greet-diff.activity.greet-move', type: 'activity', title: '인사 동작 10초씩 따라 하기',
      method: '인사 동작 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '타이머를 "인사 10초 × 1번"으로 맞추고 손 흔들기 한 가지만 따라 한다.', base: '"인사 10초 × 3번"으로 맞추고 고개 숙이기·손 흔들기·두 손 모으기를 차례로 따라 한 뒤 해 본 동작에 표시한다.', challenge: '"인사 10초 × 6번"으로 맞추고 짝과 세 동작을 주고받은 뒤 받은 쪽 동작까지 표시한다.' },
      activity: {
        title: '여러 가지 인사 동작', tool: 'timer',
        teacher: '"고개를 숙이는 인사, 손을 흔드는 인사, 두 손을 모으는 인사가 있어요. 여러 나라에서 이렇게도 인사해요." 동작을 하나씩 보여 준 뒤 타이머를 맞추고 인사 시간마다 반 전체가 따라 한다. "고개 숙이는 게 진짜 인사예요"라는 학생에게 "손을 흔들어도, 두 손을 모아도 반가운 마음은 같아요. 어떤 인사가 맞고 틀린 게 아니라 여러 가지예요"라고 말해 준다. 셋째 문항에서는 친구 얼굴을 보고 인사해야 마음이 전해진다는 점을 짚는다.',
        task: '인사 동작 시간을 맞추고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '인사 10초, 3번으로 맞춰요.', toolOptions: { title: '인사 따라 하기(우리 반 약속)', labels: ['인사', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { work: 10, rounds: 3 } }, difficulty: 0.1,
            hints: ['인사 시간과 번 수를 봐요.', '인사 칸은 10초, 번 칸은 3이에요.', '인사 칸을 10에, 번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '인사 10초, 1번으로 맞춰요.', target: { plan: { work: 10, rounds: 1 } } }, challenge: { prompt: '짝과 주고받게 6번 맞춰요.', target: { plan: { work: 10, rounds: 6 } } } } },
          STEPS('인사하는 차례를 놓아요.', '인사하는 차례', ['친구 보기', '인사 동작', '웃어 주기'], 0.15),
          { prompt: '해 본 인사 동작에 표시해요.', toolOptions: { title: '인사 동작 점검' }, target: { selfCheck: ['고개 숙였어요', '손 흔들었어요', '두 손 모았어요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '손 흔들기에 표시해요.', target: { selfCheck: ['손 흔들었어요'] } }, challenge: { prompt: '짝과 해 본 것까지 표시해요.', target: { selfCheck: ['고개 숙였어요', '손 흔들었어요', '두 손 모았어요', '짝과 주고받았어요'] } } },
            conclude: '인사 동작은 여러 가지예요. 친구를 보고 반갑게 하면 모두 좋은 인사예요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '해 본 인사 동작에 ✓ 해요.', options: ['고개 숙이기', '손 흔들기', '두 손 모으기'] }] },
      notes: '타이머 10초·번 수는 연습용 우리 반 약속이다. 동작을 특정 나라 하나에 묶어 소개하지 않는다.',
    }),
    GREET({
      id: 'multi.e12.greet-diff.activity.greet-match', type: 'activity', title: '인사말 카드 짝 짓기',
      method: '인사말 카드와 그림 짝 짓기', tool: 'wordcards', minutes: 14,
      levels: { easy: '말 이름 칸 2개(한국어·중국어)에 인사말 카드 2장을 잇는다.', base: '말 이름 칸 4개에 인사말 카드 4장을 잇는다(교사가 카드를 읽어 줌).', challenge: '4쌍에 더해 "인사 동작" 칸에 동작 카드(손 흔들기 등)도 잇는다.' },
      activity: {
        title: '어떤 말의 인사일까요?', tool: 'wordcards',
        teacher: '"\'니하오\'는 어떤 말의 인사일까요?" 카드마다 교사가 소리 내어 읽어 주고 반 전체가 따라 읽은 뒤 잇는다. "영어는 미국 사람만 써요"라는 학생에게 "영어는 여러 나라에서 써요. 그리고 한 나라 사람도 여러 말을 할 수 있어요"라고 말해 준다. 카드를 다 이은 뒤 짝과 한 인사씩 주고받는다.',
        task: '인사말 카드를 어떤 말의 인사인지 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          GMATCH('만났을 때 인사를 이어요.', [['ko', '한국어 인사', '안녕하세요'], ['zh', '중국어 인사', '니하오'], ['en', '영어 인사', '헬로'], ['vi', '베트남어 인사', '신짜오']], '손 흔들기', 0.1),
          GMATCH('고마울 때 말을 이어요.', [['ko', '한국어로 고마워', '고마워요'], ['zh', '중국어로 고마워', '셰셰'], ['en', '영어로 고마워', '땡큐'], ['vi', '베트남어로 고마워', '깜언']], '고개 숙이기', 0.15),
          GMATCH('헤어질 때 말을 이어요.', [['ko', '한국어로 잘 가', '안녕히 가세요'], ['zh', '중국어로 잘 가', '짜이찌엔'], ['en', '영어로 잘 가', '굿바이'], ['vi', '베트남어로 잘 가', '땀비엣']], '두 손 모으기', 0.2, { conclude: '말은 달라도 반갑고 고마운 마음은 같아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '"니하오"는 어떤 말 인사예요?', options: ['중국어', '영어'], answer: '중국어' }] },
      notes: '카드 글은 교사가 읽어 준다(창체 카드는 영어 발음 기능을 쓰지 않는다). 학생에게 집에서 쓰는 말을 묻지 않는다.',
    }),
    GREET({
      id: 'multi.e12.greet-diff.activity.diff-ok', type: 'activity', title: '좋아요·안돼요: 다른 점 말하기',
      method: '좋아요/안돼요: 다른 점 말하기', tool: 'emotion', minutes: 13,
      levels: { easy: '말 카드 3장을 좋아요·안돼요로 나누고, 놓으면 바로 맞는지 보인다.', base: '말 카드 5장을 나눈 뒤 확인한다.', challenge: '안돼요 말("저리 가" 등) 대신 할 좋아요 말을 골라 잇는다.' },
      activity: {
        title: '친구에게 하는 말 나누기', tool: 'emotion',
        teacher: '"하늘이는 머리색이 친구들과 달라요. 친구들이 이렇게 말했어요. 좋아요일까요, 안돼요일까요?" 카드를 하나씩 읽어 주고 넣기 전에 반 전체가 웃는 얼굴이나 찡그린 얼굴을 지어 본다. "넌 이상해는 사실이라 말해도 돼요"라는 학생에게 "다른 것은 틀린 것이 아니에요. 이상하다는 말을 들은 하늘이 얼굴은 어떨까요?"라고 묻는다. 다른 점을 말하고 싶으면 "같이 놀자"처럼 함께하는 말로 하자고 짚는다.',
        task: '친구에게 하는 말을 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          ESORT('놀이터에서 한 말을 나누어요.', [C('play', '"같이 놀자"'), C('hi', '"반가워"'), C('name', '"이름이 뭐야?"')], [C('go', '"저리 가"'), C('odd', '"넌 이상해"')], { prompt: '"저리 가" 대신 할 말은?', label: '"저리 가" 대신' }, 0.1),
          ESORT('교실에서 한 말을 나누어요.', [C('sit', '"옆에 앉아"'), C('help', '"도와줄게"'), C('thx', '"고마워"')], [C('nope', '"너랑 안 놀아"'), C('talk', '"말이 이상해"')], { prompt: '"너랑 안 놀아" 대신 할 말은?', label: '"안 놀아" 대신' }, 0.15),
          ESORT('생김새를 보고 한 말을 나누어요.', [C('ok', '"달라도 좋아"'), C('art', '"그림 멋져"'), C('join', '"같이 하자"')], [C('weird', '"얼굴이 이상해"'), C('away', '"우리랑 달라"')], { prompt: '"우리랑 달라" 대신 할 말은?', label: '"우리랑 달라" 대신' }, 0.2,
            { conclude: '다른 것은 틀린 것이 아니에요. "같이 놀자"로 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['같이 놀자', ''], ['넌 이상해', ''], ['반가워', ''], ['저리 가', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 말에 ○ 해요.', options: ['같이 놀자', '저리 가'], answer: '같이 놀자' }] },
      notes: '안돼요 말은 카드로 읽고 바로잡기만 한다. 학생끼리 서로의 생김새를 두고 말하게 하지 않는다 — 그림 속 하늘이의 일로만 이야기한다.',
    }),
    GREET({
      id: 'multi.e12.greet-diff.activity.friend-ring', type: 'activity', title: '손잡은 친구 고리 꾸미기',
      method: '손잡은 친구 고리 꾸미기', tool: 'collage', minutes: 14,
      levels: { easy: '친구 얼굴 동그라미를 3개 이상 붙인다.', base: '친구 얼굴 동그라미를 5개 이상 붙이고, 옷 네모를 세 가지 색 이상으로 붙인다.', challenge: '친구 5명에 인사말 말풍선(하얀 긴 네모)을 3개 이상 붙인다.' },
      activity: {
        title: '친구 고리 꾸미기', tool: 'collage',
        teacher: '"여러 색 동그라미는 친구 얼굴, 네모는 옷이에요. 모두 손을 잡은 고리를 만들어 볼까요?" 조각을 붙일 때마다 "이 친구는 무엇을 하며 놀까요?"라고 묻는다. 한 가지 색만 붙이는 학생에게 "우리 반 친구들은 모두 똑같은 옷, 똑같은 머리일까요? 여러 친구를 만들어 봐요"라고 말해 준다. 얼굴색이 달라도, 옷이 달라도 손잡고 같이 노는 친구라는 점을 짚는다.',
        task: '여러 친구 조각을 붙여 손잡은 고리를 만들어요.', levels: { easy: { shapes: ['circle', 'square'] }, base: { shapes: ['circle', 'square', 'heart'] }, challenge: {} },
        items: [
          { prompt: '친구 얼굴 5개를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 5 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '친구 얼굴 3개를 붙여요.', target: { has: [{ shape: 'circle', min: 3 }] } }, challenge: { prompt: '얼굴 5개, 말풍선 3개를 붙여요.', target: { has: [{ shape: 'circle', min: 5 }, { shape: 'rect', color: '하양', min: 3 }] } } } },
          { prompt: '옷을 세 가지 색으로 붙여요.', toolOptions: {}, target: { has: [{ shape: 'square', color: '빨강', min: 1 }, { shape: 'square', color: '파랑', min: 1 }, { shape: 'square', color: '노랑', min: 1 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '옷을 두 가지 색으로 붙여요.', target: { has: [{ shape: 'square', color: '빨강', min: 1 }, { shape: 'square', color: '파랑', min: 1 }] } } } },
          { prompt: '고리를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['친구를 붙였어요', '손잡게 이었어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개로 꾸미고 표시해요.', target: { selfCheck: ['친구를 붙였어요', '손잡게 이었어요'], minPieces: 3 } }, challenge: { prompt: '말풍선까지 꾸미고 표시해요.', target: { selfCheck: ['친구를 붙였어요', '손잡게 이었어요', '인사말을 말했어요'], minPieces: 8 } } },
            conclude: '얼굴도 옷도 달라도, 손잡고 같이 노는 친구예요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '손잡은 친구들을 그려요.' }] },
      notes: '조각 색은 여러 친구를 보이려는 종이 색이다. 피부색에 인종 이름을 붙이거나 학생의 피부색과 견주지 않는다.',
    }),
    GREET({
      id: 'multi.e12.greet-diff.wrap.diff-chant', type: 'wrap', title: '"달라도 좋아, 같이 놀자" 구호',
      method: '"달라도 친구" 구호', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사가 앞 구절("달라도 좋아")을 손뼉으로 먼저 치고 함께 따라 외친 뒤 블록을 같이 놓는다.', base: '구호 전체 리듬을 블록으로 놓고 손뼉과 함께 외친다.', challenge: '블록을 놓은 뒤 구호에 동작(두 팔 벌려 손잡기)을 붙여 외친다(교사 진행).' },
      wrap: {
        teacher: '"달라도 좋아(짧게 짧게 길게 길게 길게), 같이 놀자!" 구호를 손뼉으로 두 번 친 뒤 블록으로 놓게 한다. 출구 2번에서 "틀린 거예요"를 고른 학생에게 "인사도, 먹는 법도, 생김새도 다른 것이지 틀린 것이 아니에요"라고 말해 준다. 마지막 구호는 옆 친구와 손을 잡고 외친다.',
        exitTicket: [
          RHY_EXIT('구호 리듬을 블록으로 놓아요.', ['e', 'e', 'q', 'q', 'q', 'q', 'q', 'q', 'qr']),
          { type: 'choice', prompt: '나와 다르면 어떤 걸까요?', options: ['틀린 거예요', '다른 거예요'], answer: 1, difficulty: 0.1, explain: '나와 달라도 틀린 것이 아니에요. 모두 친구예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '달라도 친구',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '달라도 좋아, 같이 ___', answer: '놀자' },
          { type: 'draw', prompt: '친구와 인사하는 모습을 그려요.' },
        ],
        easy: { note: '"달라도 좋아, 같이 놀자!"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '손 흔들어 인사하는 내 손을 그려요.' }] },
      },
    }),
    GREET({
      id: 'multi.e12.greet-diff.wrap.fav-greet', type: 'wrap', title: '내일 해 볼 인사 고르기',
      method: '내일 쓸 인사 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 인사말 카드를 함께 담은 뒤, 내일 할 인사 하나를 손가락으로 가리킨다.', base: '인사말 카드를 스스로 담고, 내일 해 볼 인사 둘을 짝에게 말한다.', challenge: '담은 뒤 둘째 출구에서 인사할 때 먼저 할 일을 고르고, 누구에게 할지 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 배운 인사를 바구니에 담아 볼까요?" 카드를 읽어 주고 담을 때마다 반 전체가 따라 말한다. "저리 가"를 담은 학생에게 "이 말을 들으면 친구가 반가울까요?"라고 묻는다. 담은 인사 가운데 내일 친구에게 해 볼 인사를 고르게 하고, 어느 인사든 친구 얼굴을 보고 웃으며 하면 된다고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '오늘 배운 인사', cards: ['안녕하세요', '니하오', '"저리 가"', '헬로', '신짜오'] }, prompt: '오늘 배운 인사를 담아요.', target: { pick: ['안녕하세요', '니하오', '헬로', '신짜오'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '인사할 때 먼저 할 일은?', options: ['친구 얼굴 보기', '뒤돌아 서기'], answer: 0, difficulty: 0.1, explain: '친구 얼굴을 보고 웃으며 인사해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내일 해 볼 인사',
        items: [
          { type: 'check', prompt: '내일 해 볼 인사에 ✓ 해요.', options: ['안녕하세요', '니하오', '헬로', '신짜오'] },
          { type: 'draw', prompt: '친구에게 인사하는 모습을 그려요.' },
        ],
      },
      notes: '고른 인사는 정답이 없다. 학생에게 집에서 쓰는 말을 묻지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 세계의 음식과 먹는 방법
  const FOOD = MOD('multi.e12.world-food', [2]);
  const DISH = [
    { name: '김밥', icon: 'dot', at: [3, 1] }, { name: '쌀국수', icon: 'dot', at: [2, 2] },
    { name: '카레', icon: 'dot', at: [1, 2] }, { name: '파스타', icon: 'dot', at: [0, 1] },
  ];
  const GRAPH4 = [['김밥', 6], ['쌀국수', 4], ['카레', 5], ['파스타', 3]];
  const GRAPH3 = GRAPH4.slice(0, 3);
  const PIC = (data, more) => Object.assign({ type: 'picture', title: '좋아하는 세계 음식(가상)', unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], data }, more);
  const T_FOOD = [
    FOOD({
      id: 'multi.e12.world-food.intro.food-map', type: 'intro', title: '세계 칸 지도 위 음식 그림',
      method: '세계 지도 위 음식 그림', tool: 'map', minutes: 6,
      levels: { easy: '교사가 두 곳(쌀국수·파스타)을 짚으며 음식 이름을 읽어 주고 함께 따라 말한다.', base: '네 곳에 차례로 핀이 꽂히는 시연을 보며 음식 이름을 따라 말한다.', challenge: '네 곳을 본 뒤 우리나라 음식(김밥) 자리가 어디인지 짝과 찾아 손으로 짚는다.' },
      intro: {
        teacher: '"세계 칸 지도에 음식 그림이 있어요. 쌀국수, 카레, 파스타, 그리고 김밥!" 시연 단추로 핀이 한 곳씩 꽂힐 때마다 음식 이름을 읽어 주고 반 전체가 따라 말한다. "그 나라 사람은 그것만 먹어요"라는 말이 나오면 "우리도 김밥만 먹지 않지요? 어느 나라든 여러 음식을 먹어요. 이것은 그곳에서 많이 먹는 음식 가운데 하나예요"라고 말해 준다. 오늘은 여러 가지 먹는 방법을 알아본다고 밝힌다.',
        student: '선생님이 짚는 음식 이름을 따라 말하고, 먹어 본 음식이 있는지 떠올려 보아요.',
        demo: { tool: 'map', options: { grid: [6, 4], places: DISH, title: '세계 음식 칸 지도' }, sequence: [{ place: '쌀국수' }, { place: '파스타' }, { place: '카레' }, { place: '김밥' }] },
        art: { draw: 'a simple paper world map of colored squares with small paper bowls and plates of noodles, curry, pasta and gimbap placed on different spots', banner: '세계의 음식' },
      },
      notes: '음식은 그 나라 사람이 늘 먹는 것이 아니라 많이 먹는 음식 가운데 하나로만 소개한다. 학생 가족이 무엇을 먹는지 묻지 않는다.',
    }),
    FOOD({
      id: 'multi.e12.world-food.intro.tool-guess', type: 'intro', title: '어떤 도구로 먹을까?',
      method: '어떤 도구로 먹을까', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 젓가락·포크 두 그림만 들어 보이며 "먹는 도구" 바구니에 함께 담는다.', base: '젓가락·포크·숟가락·손 네 그림이 모두 바구니에 담기는 시연을 보고 이름을 따라 말한다.', challenge: '국수처럼 젓가락으로도 포크로도 먹을 수 있는 음식을 짝과 한 가지 말한다.' },
      intro: {
        teacher: '"밥 먹을 때 쓰는 것을 바구니에 담아 볼까요? 젓가락, 포크, 숟가락, 그리고 손!" 시연 단추로 네 그림이 모두 담기는 모습을 보여 준다. "손으로 먹으면 예의가 없어요"라는 말이 나오면 "여러 나라에서 손을 깨끗이 씻고 손으로 먹기도 해요. 젓가락처럼 손도 먹는 방법 가운데 하나예요"라고 말해 준다. 한 가지 도구만 쓰는 곳은 없고 음식에 따라 여러 도구를 쓴다는 점을 덧붙인다.',
        student: '젓가락·포크·숟가락·손으로 먹는 흉내를 하나씩 내 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '먹는 방법', cards: [C('chop', '젓가락'), C('fork', '포크'), C('spoon', '숟가락'), C('hand', '깨끗한 손')], shuffle: false }, sequence: [{ pick: ['chop', 'fork'] }, { pick: ['chop', 'fork', 'spoon', 'hand'] }] },
        art: { draw: 'a paper table with chopsticks, a fork, a spoon and a small bowl of water for washing hands, paper children smiling around it', banner: '어떻게 먹을까?' },
      },
      notes: '계획의 "나도 써 봤어요" 고르기는 학생의 집 식사를 묻게 되어, 모든 방법을 "먹는 방법" 바구니에 함께 담는 시연으로 바꿨다.',
    }),
    FOOD({
      id: 'multi.e12.world-food.activity.table-set', type: 'activity', title: '여러 가지 밥상 차리기',
      method: '여러 나라 밥상 차리기', tool: 'kitchen', minutes: 13,
      levels: { easy: '첫 문항에서 카드 2장을 두 밥상에 놓고, 놓으면 바로 맞는지 보인다.', base: '카드 4장을 젓가락 밥상·포크 밥상에 놓고, 손으로 먹을 때 차례와 준비물을 고른다.', challenge: '첫 문항이 세 밥상(손 밥상까지)에 카드 6장을 차리는 것으로 바뀐다.' },
      activity: {
        title: '밥상 차리기', tool: 'kitchen',
        teacher: '"두 밥상이 있어요. 젓가락 밥상과 포크 밥상에 무엇을 놓을까요?" 카드를 읽어 주고 놓기 전에 손으로 그 도구를 쥐는 흉내를 낸다. 둘째 문항에서 "손으로 먹으면 더러워요"라는 학생에게 "먹기 전에 손을 씻고, 먹은 뒤에도 닦아요. 그래서 손 씻는 그릇을 함께 놓아요"라고 말해 준다. 어느 밥상이 더 좋은 것이 아니라 음식과 사는 곳에 따라 여러 방법이 있다는 점을 짚는다.',
        task: '밥상에 알맞은 도구와 준비물을 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '밥상에 알맞은 도구를 놓아요.', toolOptions: { mode: 'sort', groups: false, slots: ['젓가락 밥상', '포크 밥상'], cards: [C('chop', '젓가락'), C('fork', '포크'), C('spoon', '숟가락'), C('knife', '나이프')] }, target: { sort: { '젓가락 밥상': ['chop', 'spoon'], '포크 밥상': ['fork', 'knife'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '밥상에 도구를 놓아요(2장).', toolOptions: { cards: [C('chop', '젓가락'), C('fork', '포크')] }, target: { sort: { '젓가락 밥상': ['chop'], '포크 밥상': ['fork'] } } },
              challenge: { prompt: '세 밥상을 차려요(6장).', toolOptions: { slots: ['젓가락 밥상', '포크 밥상', '손 밥상'], cards: [C('chop', '젓가락'), C('fork', '포크'), C('bowl', '손 씻는 그릇'), C('spoon', '숟가락'), C('knife', '나이프'), C('towel', '손 닦는 수건')] }, target: { sort: { '젓가락 밥상': ['chop', 'spoon'], '포크 밥상': ['fork', 'knife'], '손 밥상': ['bowl', 'towel'] } } } } },
          { prompt: '손으로 먹을 때 차례를 놓아요.', toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [C('wipe', '손 닦기'), C('wash', '손 씻기'), C('eat', '음식 집기')] }, target: { order: ['wash', 'eat', 'wipe'] }, difficulty: 0.15 },
          { prompt: '손으로 먹을 때 준비물을 담아요.', toolOptions: { mode: 'pick', basket: '손 밥상 준비물', cards: [C('bowl', '손 씻는 그릇'), C('mud', '흙 묻은 손'), C('towel', '손 닦는 수건')] }, target: { pick: ['bowl', 'towel'] }, difficulty: 0.2,
            conclude: '젓가락도, 포크도, 깨끗한 손도 모두 먹는 방법이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '손으로 먹기 전에 할 일은?', options: ['손 씻기', '그냥 먹기'], answer: '손 씻기' }] },
      notes: '"손 밥상"은 특정 나라 이름을 붙이지 않는다. 손으로 먹는 것을 우스운 일로 다루지 않는다.',
    }),
    FOOD({
      id: 'multi.e12.world-food.activity.eat-move', type: 'activity', title: '먹는 동작 10초씩 따라 하기',
      method: '먹는 동작 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '타이머를 "따라 하기 10초 × 1번"으로 맞추고 손 씻기 동작 하나만 따라 한다.', base: '"10초 × 3번"으로 맞추고 젓가락 집기·포크 찍기·손 씻기를 따라 한 뒤 해 본 동작에 표시한다.', challenge: '"10초 × 4번"으로 맞추고 넷째 번에는 짝이 고른 동작을 따라 한 뒤 그것까지 표시한다.' },
      activity: {
        title: '먹는 동작 따라 하기', tool: 'timer',
        teacher: '"젓가락으로 콩 집기(두 손가락 모으기), 포크로 콕 찍기, 손으로 먹기 전 손 씻기(비비기)!" 동작을 보여 준 뒤 타이머를 맞추고 따라 하기 시간마다 반 전체가 흉내 낸다. "젓가락 못 쓰면 창피해요"라는 학생에게 "처음 쓰는 도구는 누구나 서툴러요. 포크로 먹는 친구가 젓가락이 서툰 것도 같아요"라고 말해 준다. 둘째 문항에서 먹기 전 인사로 시작한다는 점을 짚는다.',
        task: '먹는 동작 시간을 맞추고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '10초씩 3번으로 맞춰요.', toolOptions: { title: '먹는 동작(우리 반 약속)', labels: ['따라 하기', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { work: 10, rounds: 3 } }, difficulty: 0.1,
            hints: ['따라 하기 시간과 번 수를 봐요.', '따라 하기 칸은 10초, 번 칸은 3이에요.', '따라 하기 칸을 10에, 번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '10초씩 1번으로 맞춰요.', target: { plan: { work: 10, rounds: 1 } } }, challenge: { prompt: '10초씩 4번으로 맞춰요.', target: { plan: { work: 10, rounds: 4 } } } } },
          STEPS('밥 먹는 차례를 놓아요.', '밥 먹는 차례', ['손 씻기', '잘 먹겠습니다', '함께 먹기'], 0.15),
          { prompt: '해 본 먹는 동작에 표시해요.', toolOptions: { title: '먹는 동작 점검' }, target: { selfCheck: ['젓가락 집기', '포크 찍기', '손 씻기'] }, difficulty: 0.15,
            levels: { easy: { prompt: '손 씻기에 표시해요.', target: { selfCheck: ['손 씻기'] } }, challenge: { prompt: '짝 동작까지 표시해요.', target: { selfCheck: ['젓가락 집기', '포크 찍기', '손 씻기', '짝 동작'] } } },
            conclude: '도구가 달라도 손을 씻고 "잘 먹겠습니다"로 시작해요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '해 본 동작에 ✓ 해요.', options: ['젓가락 집기', '포크 찍기', '손 씻기'] }] },
      notes: '타이머 10초·번 수는 연습용 우리 반 약속이다. 실제 음식·도구 없이 흉내로만 한다.',
    }),
    FOOD({
      id: 'multi.e12.world-food.activity.food-graph', type: 'activity', title: '좋아하는 세계 음식 그림그래프',
      method: '우리 반 좋아하는 세계 음식 그림그래프', tool: 'chart', minutes: 13,
      levels: { easy: '음식 3개(김밥·쌀국수·카레)의 가상 그림그래프를 채우고 읽는다.', base: '음식 4개의 가상 그림그래프를 채우고 가장 많은 음식·가장 적은 음식을 고른다.', challenge: '음식 4개에서 가장 많은 음식에 더해 두 번째로 많은 음식도 고른다.' },
      activity: {
        title: '가상 학급 그림그래프', tool: 'chart',
        teacher: '"어느 반 친구들이 좋아하는 세계 음식을 그림으로 나타냈어요. 진짜 우리 반이 아니라 연습용이에요." 사람 그림 하나가 한 명이라는 것을 짚고 함께 센다. "적게 나온 음식은 맛없는 음식이에요"라는 학생에게 "아직 먹어 본 친구가 적을 수도 있어요. 수가 적다고 나쁜 음식은 아니에요"라고 말해 준다.',
        task: '가상 그림그래프를 채우고 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '표를 보고 그림을 채워요.', toolOptions: PIC(GRAPH4), target: { build: true }, difficulty: 0.1,
            levels: { easy: { toolOptions: PIC(GRAPH3) } } },
          { prompt: '가장 많은 음식을 골라요.', toolOptions: PIC(GRAPH4, { mode: 'read', question: '가장 많은 것은?', choices: GRAPH4.map((d) => d[0]) }), target: { pick: 0 }, difficulty: 0.15,
            levels: { easy: { toolOptions: PIC(GRAPH3, { mode: 'read', question: '가장 많은 것은?', choices: GRAPH3.map((d) => d[0]) }) },
              challenge: { prompt: '두 번째로 많은 음식을 골라요.', toolOptions: { question: '두 번째로 많은 것은?' }, target: { pick: 2 } } } },
          { prompt: '가장 적은 음식을 골라요.', toolOptions: PIC(GRAPH4, { mode: 'read', question: '가장 적은 것은?', choices: GRAPH4.map((d) => d[0]) }), target: { pick: 3 }, difficulty: 0.2,
            levels: { easy: { toolOptions: PIC(GRAPH3, { mode: 'read', question: '가장 적은 것은?', choices: GRAPH3.map((d) => d[0]) }), prompt: '세 음식 가운데 가장 적은 것은?', target: { pick: 1 } } },
            conclude: '좋아하는 음식은 친구마다 달라요. 적게 나와도 맛없는 음식이 아니에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '그래프에서 가장 많은 음식은?', options: ['김밥', '파스타'], answer: '김밥' }] },
      notes: '그래프 수는 수업용 가상 자료다. 우리 반 조사를 하지 않는다(학생 가족 음식 묻기 금지).',
    }),
    FOOD({
      id: 'multi.e12.world-food.activity.yum-ok', type: 'activity', title: '좋아요·안돼요: 급식 시간 말',
      method: '좋아요/안돼요: 급식 시간 말', tool: 'sortboard', minutes: 14,
      levels: { easy: '말 카드 4장, 바구니 옆에 든 장 수가 보이고 틀린 바구니에 넣으면 되돌아온다.', base: '말 카드 6장을 다 넣은 뒤 확인한다.', challenge: '"나중에 먹을래"(정중히 사양하기)처럼 헷갈리는 카드 2장이 더 들어온다.' },
      activity: {
        title: '급식 시간 말 바구니', tool: 'sortboard',
        teacher: '"급식에 처음 보는 음식이 나왔어요. 친구들이 한 말을 바구니에 나눠 볼까요?" 카드를 소리 내어 읽고 넣기 전에 반 전체가 그 말을 들은 친구의 얼굴을 지어 본다. "안 먹고 싶으면 \'으웩\' 해도 돼요"라는 학생에게 "먹기 싫으면 \'나중에 먹을래\'처럼 말하면 돼요. 음식을 흉보면 그 음식을 좋아하는 친구 마음이 다쳐요"라고 묻듯 말해 준다. 안 먹어도 되지만 흉보지는 않는다는 점을 짚는다.',
        task: '급식 시간에 하는 말을 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(OKNO, '급식 시간 말을 나누어요.', [C('yum', '"맛있겠다"'), C('try', '"먹어 볼래"'), C('thx', '"감사합니다"')], [C('yuck', '"으웩"'), C('smell', '"이상한 냄새"'), C('what', '"그걸 먹어?"')], [C('later', '"나중에 먹을래"'), C('nose', '코 막고 흉보기')], 0.1),
          SB2(OKNO, '친구 도시락에 한 말을 나누어요.', [C('pretty', '"예쁘다"'), C('ask', '"이름이 뭐야?"'), C('share', '"나눠 먹자"')], [C('gross', '"냄새 나"'), C('laugh', '손가락질'), C('weird', '"이상한 밥"')], [C('nothx', '"괜찮아, 고마워"'), C('push', '도시락 밀기')], 0.15),
          SB2(OKNO, '처음 본 음식에 한 말을 나누어요.', [C('new', '"처음 봐"'), C('look', '"어떤 맛이야?"'), C('bite', '"조금 먹어 볼래"')], [C('trash', '"버려"'), C('ugh', '"으, 싫어"'), C('copy', '"먹는 흉내"')], [C('small', '"조금만 줘"'), C('throw', '음식 던지기')], 0.2, { conclude: '안 먹어도 괜찮아요. 하지만 음식을 흉보지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['맛있겠다', ''], ['으웩', ''], ['먹어 볼래', ''], ['이상한 냄새', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 말에 ○ 해요.', options: ['먹어 볼래', '으웩'], answer: '먹어 볼래' }] },
      notes: '흉보는 말 카드는 바로잡기용이다. 역할놀이로 소리 내어 하지 않는다. 계획 도전 "바꾼 카드 만들기"는 교구가 새 카드를 만들 수 없어, 정중히 사양하는 말을 가려내는 헷갈리는 카드로 바꿨다.',
    }),
    FOOD({
      id: 'multi.e12.world-food.wrap.food-chant', type: 'wrap', title: '"냠냠, 다 달라도 맛있어" 구호',
      method: '"냠냠, 다 달라도 맛있어" 구호', tool: 'keyboard', minutes: 6,
      levels: { easy: '교사와 함께 구호를 손뼉으로 한 번 치고 블록을 같이 놓는다.', base: '구호 리듬을 블록으로 놓고 두 번 외친다.', challenge: '블록을 놓은 뒤 "냠냠" 자리에 오늘 본 음식 이름을 넣어 외친다(교사 진행).' },
      wrap: {
        teacher: '"냠냠(길게 길게), 다 달라도(짧게 넷), 맛있어!" 구호를 손뼉으로 두 번 친 뒤 블록으로 놓는다. 출구 2번에서 "예의가 없어요"를 고른 학생에게 "손을 씻고 손으로 먹는 것도 여러 먹는 방법 가운데 하나예요"라고 말해 준다. 마지막 구호는 먹는 흉내와 함께 외친다.',
        exitTicket: [
          RHY_EXIT('구호 리듬을 블록으로 놓아요.', ['q', 'q', 'e', 'e', 'e', 'e', 'q', 'q', 'h']),
          { type: 'choice', prompt: '손 씻고 손으로 먹는 것은?', options: ['예의가 없어요', '먹는 방법이에요'], answer: 1, difficulty: 0.1, explain: '손으로 먹기도 여러 먹는 방법 가운데 하나예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '다 달라도 맛있어',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '냠냠, 다 달라도 ___', answer: '맛있어' },
          { type: 'draw', prompt: '여러 도구가 놓인 밥상을 그려요.' },
        ],
        easy: { note: '"냠냠, 다 달라도 맛있어!"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '좋아하는 음식을 그려요.' }] },
      },
    }),
    FOOD({
      id: 'multi.e12.world-food.wrap.try-pick', type: 'wrap', title: '먹어 보고 싶은 음식 접시',
      method: '먹어 보고 싶은 음식 고르기', tool: 'collage', minutes: 6,
      levels: { easy: '하얀 접시 동그라미 위에 음식 조각 한 가지를 붙인다(조각 2개 이상).', base: '접시 위에 먹어 보고 싶은 음식 조각 두 가지를 붙인다(조각 3개 이상).', challenge: '음식과 함께 먹을 도구 조각(긴 네모 = 젓가락·포크)도 붙인다(교사 진행, 점검표 표시).' },
      wrap: {
        teacher: '"오늘 본 음식 가운데 먹어 보고 싶은 것을 접시에 담아 볼까요? 큰 하얀 동그라미가 접시예요." 조각을 붙이며 "무슨 음식이에요?"라고 물어 이름을 말하게 한다. 출구 2번에서 "으웩"을 고른 학생에게 "먹기 싫으면 \'나중에 먹을래\'라고 말하면 돼요"라고 말해 준다. 먹어 보고 싶은 것이 없는 학생도 괜찮다고 말해 주고, 좋아하는 음식을 담게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'semi', 'rect', 'triangle'], colors: ['하양', '노랑', '주황', '초록', '갈색'] }, prompt: '접시에 음식을 붙이고 표시해요.', target: { selfCheck: ['접시를 놓았어요', '음식을 올렸어요'], minPieces: 2 }, difficulty: 0.1 },
          { type: 'choice', prompt: '처음 본 음식에 할 말은?', options: ['"으웩"', '"먹어 볼래"'], answer: 1, difficulty: 0.1, explain: '처음 본 음식은 흉보지 않고 "먹어 볼래" 하거나 "나중에 먹을래" 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '먹어 보고 싶은 음식',
        items: [
          { type: 'draw', prompt: '먹어 보고 싶은 음식을 접시에 그려요.' },
          { type: 'choice', prompt: '먹기 싫을 때 할 말은?', options: ['나중에 먹을래', '으웩'], answer: '나중에 먹을래' },
        ],
      },
      notes: '고른 음식은 정답이 없다. 학생 가족이 먹는 음식을 묻지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 생김새와 말투로 놀리지 않기
  const TEASE = MOD('multi.e12.no-teasing', [2]);
  const T_TEASE = [
    TEASE({
      id: 'multi.e12.no-teasing.intro.hurt-weather', type: 'intro', title: '흉내를 들은 친구 마음 날씨',
      method: '놀림 받은 친구 마음 날씨', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 흉내를 들은 솔이 얼굴 하나를 가리키며 마음 카드 하나(속상함)를 함께 잇는다.', base: '솔이와 옆에서 본 누리, 두 얼굴에 마음 카드를 잇는 시연을 보고 따라 말한다.', challenge: '두 얼굴을 이은 뒤 옆에서 본 누리가 할 수 있는 말을 하나 말한다.' },
      intro: {
        teacher: '"솔이가 \'안녕\' 하고 인사했는데, 한 친구가 솔이 말투를 따라 하며 웃었어요. 솔이 얼굴을 보세요. 마음 날씨는 어떨까요? 옆에서 본 누리 마음은요?" 시연 단추로 솔이에게 \'속상함\', 누리에게 \'걱정\'이 이어지는 모습을 보인다. "웃기려고 한 거니까 괜찮아요"라는 말이 나오면 "웃은 사람은 한 명, 비 오는 마음은 솔이예요. 같이 웃어야 장난이에요"라고 되묻듯 답한다. 오늘은 생김새나 말투로 놀리지 않고 같이 노는 법을 배운다고 밝힌다.',
        student: '솔이와 누리 얼굴을 보고 마음 날씨를 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'sol', label: '흉내 들은 솔이' }, { id: 'nuri', label: '옆에서 본 누리' }], cards: ['속상함', '걱정', '신남'] }, sequence: [{ match: { sol: '속상함' } }, { match: { sol: '속상함', nuri: '걱정' } }] },
        art: { draw: 'a paper classroom where one paper child says hello while another child mimics and laughs, the first child looks down with a small paper rain cloud above, a third child watches with a worried face', banner: '친구 마음 날씨' },
      },
      notes: '그림 속 솔이의 일로만 이야기한다. 학생에게 놀림 받은 일을 묻지 않는다. 흉내 내는 말투를 교사가 시범으로 하지 않는다.',
    }),
    TEASE({
      id: 'multi.e12.no-teasing.intro.play-song', type: 'intro', title: '"너도 나도 같이 놀자" 노래',
      method: '"같이 놀자" 노래', tool: 'keyboard', minutes: 6,
      levels: { easy: '앞 마디("너도 나도")만 교사와 함께 부르며 건반을 짚는다.', base: '두 마디 가락 시연을 듣고 "너도 나도 같이 놀자"를 따라 부른다.', challenge: '다 부른 뒤 느리게 한 번, 빠르게 한 번 박자를 바꿔 부른다(교사 진행).' },
      intro: {
        teacher: '"너도 나도 같이 놀자!" 시연 단추로 가락이 건반에 눌리는 모습을 보이고, 반 전체가 옆 친구와 손을 잡고 두 번 부른다. "말이 다른 친구는 못 끼어요"라는 말이 나오면 "놀이는 손짓으로도, 웃음으로도 같이 할 수 있어요. \'너도\'에는 누구나 들어가요"라고 말해 준다.',
        student: '"너도 나도 같이 놀자" 노래를 옆 친구와 손잡고 따라 불러요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['도', '미', '솔', '미', '라', '솔', '미', '도'] }, sequence: [{ notes: ['도', '미', '솔', '미', '라', '솔', '미', '도'] }] },
        art: { draw: 'paper children of many paper colors holding hands in a circle and singing, paper musical notes above', banner: '너도 나도 같이 놀자' },
      },
      notes: '가락은 수업용으로 지은 짧은 노래다.',
    }),
    TEASE({
      id: 'multi.e12.no-teasing.activity.stop-role', type: 'activity', title: '"그만해, 같이 놀자" 장면 차례',
      method: '"그만해, 같이 놀자" 역할놀이', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 보인다.', base: '장면 세 장(놀리는 장면 → "그만해, 같이 놀자" → 함께 노는 장면)을 차례로 놓고 짝과 둘째 장면의 말을 해 본다.', challenge: '"선생님께 알려요" 장면까지 네 장을 차례로 놓는다.' },
      activity: {
        title: '멈추고 같이 노는 장면', tool: 'story',
        teacher: '"누리가 솔이 말투를 따라 해요. 옆에 있던 하늘이는 어떻게 할까요?" 장면 카드를 읽어 주고 차례로 놓은 뒤, 짝과 한 명은 하늘이가 되어 "그만해, 같이 놀자"를 말하고 다른 한 명은 "그래, 같이 하자"로 답한다. "모른 척하면 돼요"라는 학생에게 "모른 척하면 솔이는 계속 혼자일까요?"라고 묻는다. 말로 멈추지 않으면 선생님께 알리는 것은 고자질이 아니라 돕기라는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓고 짝과 말해 봐요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('말투 흉내 장면을 놓아요.', [C('copy', '말투 흉내'), C('stop', '"그만해!"'), C('play', '같이 놀아요')], C('tell', '선생님께 알려요'), 0.1),
          ORDER3('생김새 놀림 장면을 놓아요.', [C('look', '생김새 놀림'), C('stop', '"그만해!"'), C('play', '같이 놀아요')], C('tell', '선생님께 알려요'), 0.15),
          ORDER3('이름 대신 부른 장면을 놓아요.', [C('call', '"외국인" 부름'), C('stop', '"이름 불러 줘"'), C('play', '이름 불러 놀아요')], C('tell', '선생님께 알려요'), 0.2),
          { prompt: '짝과 "그만해, 같이 놀자" 해요.', free: true, talk: true, difficulty: 0.2, conclude: '놀리면 "그만해, 같이 놀자" 말하고, 안 멈추면 선생님께 알려요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '그만해, ___ 놀자.', answer: '같이' }] },
      notes: '역할놀이에서는 "그만해, 같이 놀자"와 답하는 말만 소리 내어 한다. 흉내·놀리는 말은 카드로만 보이고 따라 하지 않는다.',
    }),
    TEASE({
      id: 'multi.e12.no-teasing.activity.join-game', type: 'activity', title: '모두 끼는 놀이 동작',
      method: '모두 끼는 놀이 동작', tool: 'timer', minutes: 14,
      levels: { easy: '타이머 놀이 시간을 10초로 맞추고 "우리 모두 손을 잡자" 동작을 한 번 한다.', base: '놀이 시간을 20초로 맞추고 놀이 차례 카드를 놓은 뒤 동작을 따라 하고 표시한다.', challenge: '놀이 20초 × 2번으로 맞추고 둘째 번에는 짝이 만든 동작을 따라 한 뒤 표시한다.' },
      activity: {
        title: '우리 모두 손을 잡자', tool: 'timer',
        teacher: '"\'우리 모두 손을 잡자\' 하고 옆 친구 손을 잡아 큰 원을 만들어요." 타이머를 맞추고 놀이 시간 동안 자리에서 옆 친구와 손잡고 흔드는 동작을 한다. 혼자 있는 친구를 보면 "같이 하자"라고 먼저 부르게 한다. "말이 서툰 친구는 놀이 규칙을 몰라요"라는 학생에게 "손짓으로 보여 주면 같이 할 수 있어요"라고 말해 준다. 끼워 주기가 놀이를 더 재미있게 한다는 점을 짚는다.',
        task: '놀이 시간을 맞추고 모두 손잡는 동작을 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '놀이 시간을 20초로 맞춰요.', toolOptions: { title: '모두 끼는 놀이(우리 반 약속)', labels: ['놀이', '쉬기'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { work: 20 } }, difficulty: 0.1,
            hints: ['놀이 칸의 초를 봐요.', '놀이 시간은 20초예요.', '놀이 칸을 20에 맞춰요.'],
            levels: { easy: { prompt: '놀이 시간을 10초로 맞춰요.', target: { plan: { work: 10 } } }, challenge: { prompt: '놀이 20초, 2번으로 맞춰요.', target: { plan: { work: 20, rounds: 2 } } } } },
          STEPS('놀이를 시작하는 차례를 놓아요.', '모두 끼는 놀이 차례', ['"같이 하자"', '손잡기', '원 만들기'], 0.15),
          { prompt: '해 본 놀이 동작에 표시해요.', toolOptions: { title: '놀이 점검' }, target: { selfCheck: ['친구를 불렀어요', '손을 잡았어요', '다 같이 했어요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '손잡기에 표시해요.', target: { selfCheck: ['손을 잡았어요'] } }, challenge: { prompt: '짝 동작까지 표시해요.', target: { selfCheck: ['친구를 불렀어요', '손을 잡았어요', '다 같이 했어요', '짝 동작 했어요'] } } },
            conclude: '"같이 하자" 부르고 손잡으면 모두 끼는 놀이가 돼요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '혼자 있는 친구에게 "같이 ___"', answer: '하자' }] },
      notes: '타이머 초·번 수는 놀이 진행용 우리 반 약속이다. 교실에서는 자리에서 옆 친구와만 손잡는다.',
    }),
    TEASE({
      id: 'multi.e12.no-teasing.activity.kind-poster', type: 'activity', title: '"같이 놀자" 놀이 포스터',
      method: '함께 놀이 포스터', tool: 'collage', minutes: 13,
      levels: { easy: '친구 동그라미 조각 2개 이상을 붙인다.', base: '친구 조각 4개 이상과 "같이 놀자" 하트를 붙인다.', challenge: '친구 조각 4개에 놀이 규칙 그림(별 = 차례 지키기) 조각을 하나 더 붙인다.' },
      activity: {
        title: '함께 놀이 포스터', tool: 'collage',
        teacher: '"우리 반 놀이 포스터를 만들어요. 여러 색 동그라미는 친구, 분홍 하트는 \'같이 놀자\' 말, 별은 차례 지키기 규칙이에요." 조각을 붙일 때마다 "이 포스터를 보면 누가 같이 놀 수 있을까요?"라고 묻는다. 기다릴 반응은 "누구나요", "모두요". 친구 조각을 한 가지 색으로만 붙이는 학생에게 "여러 친구가 다 같이 노는 포스터로 만들어 볼까요?"라고 말해 준다.',
        task: '친구 조각과 "같이 놀자" 하트로 포스터를 꾸며요.', levels: { easy: { shapes: ['circle', 'heart'] }, base: { shapes: ['circle', 'heart', 'square'] }, challenge: {} },
        items: [
          { prompt: '친구 조각 4개를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 4 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '친구 조각 2개를 붙여요.', target: { has: [{ shape: 'circle', min: 2 }] } } } },
          { prompt: '"같이 놀자" 하트를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', color: '분홍', min: 2 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '분홍 하트 1개를 붙여요.', target: { has: [{ shape: 'heart', color: '분홍', min: 1 }] } }, challenge: { prompt: '하트와 규칙 별을 붙여요.', target: { has: [{ shape: 'heart', color: '분홍', min: 2 }, { shape: 'star', min: 1 }] } } } },
          { prompt: '포스터를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['친구를 붙였어요', '하트를 붙였어요'], minPieces: 6 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개로 꾸미고 표시해요.', target: { selfCheck: ['친구를 붙였어요', '하트를 붙였어요'], minPieces: 3 } }, challenge: { prompt: '규칙 별까지 꾸미고 표시해요.', target: { selfCheck: ['친구를 붙였어요', '하트를 붙였어요', '규칙을 말했어요'], minPieces: 7 } } },
            conclude: '누구나 같이 놀 수 있어요. "같이 놀자"가 우리 반 놀이 약속이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '다 같이 노는 포스터를 그려요.' }] },
      notes: '조각의 뜻(동그라미 = 친구, 분홍 하트 = "같이 놀자", 별 = 차례 지키기)은 칠판에 그려 두고 시작한다. 계획의 "그림 글자"는 교구가 글자를 붙이지 못해 하트 조각으로 대신한다.',
    }),
    TEASE({
      id: 'multi.e12.no-teasing.activity.name-call', type: 'activity', title: '이름 불러 주는 말 카드',
      method: '이름 불러 주기 카드', tool: 'wordcards', minutes: 14,
      levels: { easy: '놀리는 말 칸 2개에 바꿀 말 카드 2장을 잇고, 놓으면 바로 맞는지 보인다.', base: '놀리는 말 칸 3개에 바꿀 말 카드 3장을 잇는다(교사가 카드를 읽어 줌).', challenge: '3쌍에 더해 "덧붙일 고운 말" 칸에 고운 말 카드("반가워" 등)도 잇는다.' },
      activity: {
        title: '부르는 말 바꾸기', tool: 'wordcards',
        teacher: '"\'야, 외국인\' 대신 무엇이라고 부를까요?" 놀리는 말 칸은 교사가 담담하게 읽고, 바꿀 말 카드는 반 전체가 따라 읽은 뒤 잇는다. "외국인은 맞는 말이에요"라는 학생에게 "친구는 이름이 있어요. 이름을 불러 줄 때 친구가 더 반가울까요?"라고 묻는다. 셋째 문항에서는 "친구를 부를 때 무엇으로 부를까요? 맞아요, 이름이에요"라고 말하며 이름 카드만 담게 한다.',
        task: '놀리는 말 대신 쓸 말 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '놀리는 말 대신 쓸 말을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'a', label: '"야, 외국인" 대신' }, { id: 'b', label: '"말투 이상해" 대신' }, { id: 'c', label: '"저리 가" 대신' }], cards: [C('call', '"솔아, 놀자"'), C('again', '"다시 말해 줘"'), C('join', '"같이 하자"')] }, target: { match: { a: 'call', b: 'again', c: 'join' } }, difficulty: 0.1,
            levels: { easy: { prompt: '대신 쓸 말을 이어요(2쌍).', toolOptions: { slots: [{ id: 'a', label: '"야, 외국인" 대신' }, { id: 'c', label: '"저리 가" 대신' }], cards: [C('join', '"같이 하자"'), C('call', '"솔아, 놀자"')] }, target: { match: { a: 'call', c: 'join' } } },
              challenge: { prompt: '대신 쓸 말과 고운 말을 이어요.', toolOptions: { slots: [{ id: 'a', label: '"야, 외국인" 대신' }, { id: 'b', label: '"말투 이상해" 대신' }, { id: 'c', label: '"저리 가" 대신' }, { id: 'd', label: '덧붙일 고운 말' }], cards: [C('call', '"솔아, 놀자"'), C('hi', '"반가워"'), C('again', '"다시 말해 줘"'), C('join', '"같이 하자"')] }, target: { match: { a: 'call', b: 'again', c: 'join', d: 'hi' } } } } },
          { prompt: '생김새 놀림 대신 쓸 말을 이어요.', toolOptions: { mode: 'match', slots: [{ id: 'a', label: '"얼굴색 달라" 대신' }, { id: 'b', label: '"머리 이상해" 대신' }, { id: 'c', label: '"너는 빠져" 대신' }], cards: [C('name', '"하늘아, 안녕"'), C('art', '"그림 멋져"'), C('team', '"우리 팀 하자"')] }, target: { match: { a: 'name', b: 'art', c: 'team' } }, difficulty: 0.15,
            levels: { easy: { prompt: '대신 쓸 말을 이어요(2쌍).', toolOptions: { slots: [{ id: 'a', label: '"얼굴색 달라" 대신' }, { id: 'c', label: '"너는 빠져" 대신' }], cards: [C('team', '"우리 팀 하자"'), C('name', '"하늘아, 안녕"')] }, target: { match: { a: 'name', c: 'team' } } },
              challenge: { prompt: '대신 쓸 말과 고운 말을 이어요.', toolOptions: { slots: [{ id: 'a', label: '"얼굴색 달라" 대신' }, { id: 'b', label: '"머리 이상해" 대신' }, { id: 'c', label: '"너는 빠져" 대신' }, { id: 'd', label: '덧붙일 고운 말' }], cards: [C('name', '"하늘아, 안녕"'), C('thx', '"고마워"'), C('art', '"그림 멋져"'), C('team', '"우리 팀 하자"')] }, target: { match: { a: 'name', b: 'art', c: 'team', d: 'thx' } } } } },
          { prompt: '이름 불러 주는 말을 담아요.', toolOptions: { mode: 'pick', basket: '이름 불러 주기', cards: [C('sol', '"솔아!"'), C('hey', '"야, 너!"'), C('nuri', '"누리야!"'), C('for', '"외국인!"')] }, target: { pick: ['sol', 'nuri'] }, difficulty: 0.2,
            conclude: '친구는 이름으로 불러요. 놀리는 말 대신 "같이 하자"라고 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구를 부를 때 쓰는 말은?', options: ['친구 이름', '"야, 외국인"'], answer: '친구 이름' }] },
      notes: '놀리는 말 칸은 바로잡기용이다. 교사는 담담하게 한 번만 읽고 학생에게 따라 읽히지 않는다. 카드 글은 교사가 읽어 준다(창체 카드는 영어 발음 기능을 쓰지 않는다).',
    }),
    TEASE({
      id: 'multi.e12.no-teasing.wrap.kind-chant', type: 'wrap', title: '"놀림 대신 같이" 구호',
      method: '"놀림 대신 같이" 구호', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 구호 카드 차례를 함께 놓고 손뼉과 함께 한 번 외친다.', base: '구호 카드 차례를 스스로 놓고 손뼉과 함께 두 번 외친 뒤 표시한다.', challenge: '차례를 놓은 뒤 짝과 앞 구절·뒤 구절을 주고받으며 외치고 표시한다.' },
      wrap: {
        teacher: '"놀림 대신(손 내밀어 멈춤), 손뼉 짝짝(두 번), 같이 놀자(두 팔 벌리기)!" 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 두 번 외치고, 해 본 것에 표시한다. 출구 3번에서 "따라 해요"를 고른 학생에게 "말투를 따라 하면 그 친구 마음에 비가 와요"라고 말해 준다. 마지막 구호는 짝과 주고받는다.',
        exitTicket: [
          ORDER('놀림 대신 같이', ['놀림 대신', '손뼉 짝짝', '같이 놀자'], '구호를 차례대로 놓아요.'),
          SELF('구호 점검', ['손 내밀었어요', '손뼉 쳤어요', '두 팔 벌렸어요']),
          { type: 'choice', prompt: '말투가 다른 친구에게는?', options: ['따라 해요', '같이 놀아요'], answer: 1, difficulty: 0.1, explain: '말투를 따라 하지 않고 같이 놀아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '놀림 대신 같이',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '놀림 대신 같이 ___', answer: '놀자' },
          { type: 'draw', prompt: '친구와 같이 노는 모습을 그려요.' },
        ],
        easy: { note: '"놀림 대신 같이 놀자!"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '손뼉 치는 내 손을 그려요.' }] },
      },
    }),
    TEASE({
      id: 'multi.e12.no-teasing.wrap.action-pick', type: 'wrap', title: '내가 할 행동 바구니',
      method: '내가 할 행동 고르기', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 "할게요"·"안 해요" 바구니에 함께 넣는다.', base: '카드 다섯 장을 스스로 나누고, 할게요 행동 가운데 하나를 짝에게 말한다.', challenge: '나눈 뒤 할게요 행동을 언제 할지(놀이 시간·쉬는 시간) 짝에게 말한다(교사 진행).' },
      wrap: {
        teacher: '"친구가 놀림을 받는 것을 보면 나는 무엇을 할까요?" 카드를 읽어 주고 반 전체가 손을 들어 어느 바구니인지 먼저 보인 뒤 넣는다. "모른 척하기"를 할게요에 넣은 학생에게 "모른 척하면 놀림 받은 친구는 누가 도와줄까요?"라고 묻는다. 할게요 바구니의 세 행동 가운데 무엇이든 하나만 해도 친구를 돕는 것이라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: ['할게요', '안 해요'], cards: [C('play', '같이 놀자 하기'), C('copy', '따라 웃기'), C('stop', '그만해 말하기'), C('ignore', '모른 척하기'), C('tell', '선생님께 알리기')] }, prompt: '내가 할 행동을 바구니에 넣어요.', target: { sort: { 할게요: ['play', 'stop', 'tell'], '안 해요': ['copy', 'ignore'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '놀리는 걸 보면 먼저?', options: ['모른 척해요', '"그만해" 말해요'], answer: 1, difficulty: 0.1, explain: '"그만해" 말하고, 안 멈추면 선생님께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 할 행동',
        items: [
          { type: 'check', prompt: '내가 할 행동에 ✓ 해요.', options: ['같이 놀자 하기', '그만해 말하기', '선생님께 알리기'] },
          { type: 'draw', prompt: '친구를 돕는 내 모습을 그려요.' },
        ],
      },
      notes: '계획 도전의 "언제 할지 칸"은 출구 질문에 단계별 판이 없어 교사 진행 말하기로 한다.',
    }),
  ];

  PaperLessons.registerModules([].concat(T_GREET, T_FOOD, T_TEASE));
})();
