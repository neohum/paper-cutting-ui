/* 창체 자율·자치활동 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/events-auto.json 의 auto 초1-2.
 * 근거: 교육부 고시 제2022-33호 [별책 40] 창의적 체험활동 교육과정 <표 2>(p.8)·<표 5>(p.13-14)·p.15 (sources/changche/research-changche.md §1).
 *   자율활동 — 주제 탐구(g?-inq)·적응 및 개척(g?-adapt)·프로젝트형 봉사(g?-serve),
 *   자치활동 — 기본생활습관 형성(g?-habit: 자기 관리·환경·생태·생명존중)·관계 형성 및 소통(g?-rel: 협력적 놀이·토의)·공동체 자치(g?-self: 학급회의).
 *   p.15 "초등학교 자율⋅자치활동은 일상생활에 필요한 질서와 예절을 익혀 기본 생활 습관을 형성할 수 있도록 운영한다."
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기·역할놀이·구호.
 * 학급 규칙·역할·회의·발표는 모두 가상의 학급(가명 한두 글자: 나리·도윤·하나·준)으로 한다. 학생 자신의 가정 형편·성적·친구 관계를 묻거나 채점하지 않는다.
 *   집에서 돕기·가족 이야기는 "할 수 있는 일"만 고르고, 누구와 사는지·집에서 무엇을 하는지는 묻지 않는다. 특정 학교·지역·단체 이름은 쓰지 않는다.
 * 입학 초기 적응(start) 주제(첫날 마음·인사·이름 부르기·교실 지도·학교 둘러보기·화장실·손 씻기·종소리·줄 서기·손 들기·바른 자세·학용품 정리·급식·몸 신호)와
 *   장면을 겹치지 않게 했다: 등교 준비는 집에서 가방 챙기기(사물함·서랍 정리 아님), 손들기는 학급 회의의 결정(말하기 차례 아님),
 *   줄 서기는 도서관·버스 같은 공공장소, 시계는 하루 일과·2학기 리듬(종소리 아님), 나 소개는 2학년 새 반의 질문 고르기다.
 * 수치는 쓰지 않는다(근거에 초1-2 수치가 없다). 시각(9시·12시 등)·타이머 초·횟수·그래프 수는 모두 '우리 반 약속' 또는 '가상'이다(화면에 밝힘).
 *
 * 사람 확인: (모듈 id — 문장 — 확인처) 근거 파일에 없는 일반 생활 지도 문장이다.
 *  - auto.e12.g1-habit.activity.water · g2-serve.activity.do — 화분은 흙이 말랐을 때 물을 주고, 흙이 젖어 있으면 주지 않는다(일반 식물 기르기) — 농촌진흥청 식물 기르기 안내·학교 담임 판단
 *  - auto.e12.g1-habit.intro.plant · activity.save — 수도꼭지 잠그기·종이 양면 쓰기로 물·종이를 아낀다(일반 생활 수칙) — 환경부 생활 속 자원 절약 안내
 *  - auto.e12.g1-habit.* — 작은 벌레는 잡지 않고 그대로 두거나 밖으로 보내 준다(생명존중 생활 지도) — 학교 담임 판단
 *  - auto.e12.g2-adapt.activity.breath · activity.calm — 긴장될 때 숨을 천천히 크게 쉬면 마음이 가라앉는 데 도움이 된다(일반 마음 달래기) — 교육부·시도교육청 학생 마음건강 안내
 *  - auto.e12.g2-habit.activity.practice · activity.order — 도서관에서는 조용히 걷고 책은 제자리에 꽂는다, 버스는 줄 서서 차례로 탄다(공공장소 예절) — 학교 도서관 이용 안내·한국도로교통공단 대중교통 예절
 *  - auto.e12.g2-inq.activity.go · g2-serve.activity.do — 꽃밭에서 뛰지 않고 꽃을 꺾지 않는다, 모종삽·물뿌리개는 장갑을 끼고 교사와 함께 쓴다(야외 활동 안전) — 학교안전교육 생활안전 지도 자료·학교 담임 판단
 *  - auto.e12.g2-rel.activity.steps · wrap.role — 다툼 풀기 세 단계(멈추기 → 마음 말하기 → 함께 정하기)는 이 모듈이 정한 우리 반 방법이다(공식 단계가 아님) — 학교 담임 판단
 *  - auto.e12.g2-self.* — 손들기(다수결)로 정하고 적은 의견도 존중한다(<표 5> 초 "민주적 의사 결정의 기본 원리 이해와 실천"의 풀이) — 교육과정 해설·학교 담임 판단 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'auto', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const SBLV = { easy: { instant: true, showCount: true }, base: {}, challenge: { shuffle: true } };
  const BRLV = { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } };
  const OKNO = ['좋아요', '안돼요'];

  // 도입 시연: 그림 카드 고르기(wordcards pick)
  const PICKDEMO = (basket, cards, pick) => ({ tool: 'wordcards', options: { mode: 'pick', basket, cards, shuffle: false }, sequence: [{ pick }] });
  // 장면 차례 놓기(story): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 틀린 장면 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const ids = cards.map((c) => c.id);
    const lv = { easy: { state: { at: { [ids[0]]: 0, [ids[1]]: null, [ids[2]]: null } } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d, levels: lv, ...more };
  };
  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 8장(헷갈리는 카드 2장 — 둘째 바구니로 간다)
  const SB = (slots, prompt, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: a, [slots[1]]: b });
    return {
      prompt, toolOptions: { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0], ok[1], no[1], ok[2], hard[1], no[2]] }, target: { sort: S(ok, [...no, ...hard]) } },
      },
      ...more,
    };
  };
  // 짝 짓기(emotion match): pairs = [[칸 이름, 카드 글]…] 4쌍. 기본 3쌍, 쉬움 2쌍, 도전 4쌍
  const PAIRS = (prompt, pairs, d, more, weather) => {
    const mk = (n) => {
      const ps = pairs.slice(0, n);
      const slots = ps.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
      const cards = ps.map((p, i) => ({ id: `c${i + 1}`, text: p[1] }));
      const match = {}; ps.forEach((p, i) => { match[`s${i + 1}`] = `c${i + 1}`; });
      return { toolOptions: { mode: 'match', slots, cards: [...cards.slice(1), cards[0]], weather: !!weather }, target: { match } };
    };
    const base = mk(3); const easy = mk(2); const ch = mk(4);
    return { prompt, toolOptions: base.toolOptions, target: base.target, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(2짝).`, ...easy }, challenge: { prompt: `${cut(prompt)}(4짝).`, ...ch } }, ...more };
  };
  // 갈림길 고르기(emotion branch): ch = [틀린 보기, 바른 보기, 헷갈리는 보기]. 기본·도전 보기 3개, 쉬움 보기 2개
  const BR = (prompt, situation, ch, good, d, more) => ({
    prompt, toolOptions: { mode: 'branch', situation, choices: ch }, target: { choice: good }, difficulty: d,
    levels: { easy: { toolOptions: { choices: ch.slice(0, 2) } } }, ...more,
  });
  // 순서 카드(timer): 섞인 카드 3장을 바른 차례로
  const STEPS = (prompt, title, cards, d, more) => ({ prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d, ...more });
  // 정리 출구
  const SELF = (title, safety, prompt) => ({ type: 'tool', tool: 'timer', options: { title, safety }, prompt: prompt || '해 본 것에 표시해요.', target: { safety: true }, difficulty: 0.1 });
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const CH = (prompt, options, answer, explain) => ({ type: 'choice', prompt, options, answer, difficulty: 0.1, explain });
  const PASTE = (shapes, checks, prompt, min) => ({ type: 'tool', tool: 'collage', options: { shapes, sizes: ['s', 'm', 'l'] }, prompt, target: { selfCheck: checks, minPieces: min || 1 }, difficulty: 0.1 });
  const SCALE = (situation, feeling, labels, prompt, steps) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: steps || 5, scaleLabels: labels }, prompt, target: { level: 'any' }, difficulty: 0.1 });
  const WPICK = (basket, cards, pick, prompt) => ({ type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket, cards }, prompt, target: { pick }, difficulty: 0.1 });
  // 그림그래프(chart picture): 사람 얼굴 하나 = 1명(가상)
  const PIC = (title, data, extra) => Object.assign({ type: 'picture', title, unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], data }, extra || {});

  // =====================================================================================================
  // 1학년 · 아침 준비와 작은 생명 아끼기 (기본생활습관 형성 활동)
  const HABIT1 = MOD('auto.e12.g1-habit', [1]);
  const T_HABIT1 = [
    HABIT1({
      id: 'auto.e12.g1-habit.intro.clock', type: 'intro', title: '아침 시계 정각 맞추기',
      method: '아침 시계 정각 맞추기', tool: 'clock', minutes: 6,
      levels: { easy: '교사가 짧은바늘만 움직여 보이고 "짧은바늘이 8을 가리키면 8시"를 함께 말한다.', base: '시연에서 정각 두 개(8시·9시)를 보고 짧은바늘이 가리키는 수를 따라 말한다.', challenge: '시연 끝에 나오는 8시 30분을 보고 짧은바늘이 8과 9 사이에 있는 까닭을 말한다.' },
      intro: {
        teacher: '"나리는 아침 8시에 일어나요. 8시는 시계가 어떻게 생겼을까요?" 시연 단추로 8시·9시·8시 30분이 차례로 나오는 모습을 보이고, 정각마다 반 전체가 "짧은바늘 8, 긴바늘 12!"처럼 따라 말한다. "긴바늘이 8에 있어야 8시예요"라는 말이 나오면 "긴바늘은 정각에 늘 12에 있어요. 몇 시는 짧은바늘이 알려 줘요"라고 되묻듯 짚는다. 오늘은 아침에 스스로 준비하는 차례를 알아본다고 밝힌다.',
        student: '선생님이 "8시!" 하면 두 팔로 시계 바늘을 만들어 보아요.',
        demo: { tool: 'clock', options: { minuteStep: 30, showDigital: true }, sequence: [{ h: 8, m: 0 }, { h: 9, m: 0 }, { h: 8, m: 30 }] },
        art: { draw: 'a paper child stretching beside a bed in the morning sun, a big round paper wall clock showing eight o clock, a school bag waiting by the door', banner: '아침 8시, 일어나요', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
      notes: '8시·9시는 나리네 가상의 아침 시각이다. 학생이 몇 시에 일어나는지 묻거나 견주지 않는다.',
    }),
    HABIT1({
      id: 'auto.e12.g1-habit.intro.plant', type: 'intro', title: '목마른 화분의 마음 고르기',
      method: '교실 화분 그림 보고 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 2장(속상함·신남)만 읽어 주고 화분의 마음을 함께 고른다.', base: '시연을 보고 마음 카드 3장 가운데 화분의 마음을 스스로 말한다.', challenge: '마음을 고른 뒤 까닭을 한 낱말("목말라")로 짝에게 말한다.' },
      intro: {
        teacher: '"교실 창가 화분이 며칠 동안 물을 못 받았어요. 잎이 축 처졌네요. 화분이 말을 한다면 어떤 마음일까요?" 대답을 듣고(기다릴 반응: "슬퍼요", "목말라요") 시연 단추로 \'속상함\' 카드가 짝 지어지는 모습을 보인다. "식물은 마음이 없어요"라는 말이 나오면 "맞아요, 사람처럼 말하지는 못해요. 그래도 물이 없으면 시들어요. 우리가 대신 살펴 줘야 해요"라고 답한다. 오늘은 작은 생명을 돌보고 물과 종이를 아끼는 법을 알아본다고 밝힌다.',
        student: '시든 화분에게 해 주고 싶은 말을 하나 떠올려 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '물 못 받은 화분' }], cards: ['신남', '속상함', '기쁨'], shuffle: false }, sequence: [{ match: { s1: '속상함' } }] },
        art: { draw: 'a paper flower pot on a classroom windowsill with drooping paper leaves, a paper watering can nearby and a paper child looking at it with concern', banner: '화분이 목말라요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
    }),
    HABIT1({
      id: 'auto.e12.g1-habit.activity.order', type: 'activity', title: '등교 준비 장면 놓기',
      method: '등교 준비 세 장면 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"어른이 다 해 줘요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '아침 준비 장면 차례 놓기', tool: 'story',
        teacher: '"나리가 아침에 일어났어요. 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 자리에서 일어나 차례대로 몸으로 따라 한다(세수하는 손 → 옷 입는 팔 → 가방 메는 어깨). "엄마가 가방을 챙겨 줘요"를 넣는 학생에게 "도와주실 수는 있어요. 그런데 내 가방에 무엇이 들었는지는 누가 알아야 할까요?"라고 묻는다. 내 물건은 내가 챙기는 것이 스스로 하는 첫걸음이라고 짚는다.',
        task: '나리의 아침 준비 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('나리의 아침이에요. 차례로 놓아요.', [{ id: 'wash', text: '세수해요', motif: 'cloud' }, { id: 'dress', text: '옷 입어요', motif: 'star' }, { id: 'bag', text: '가방 메요', motif: 'house' }], { id: 'adult', text: '어른이 다 해 줘요', motif: 'sun' }, 0.1),
          ORDER3('가방을 챙겨요. 차례로 놓아요.', [{ id: 'look', text: '알림장 봐요', motif: 'star' }, { id: 'put', text: '물건 넣어요', motif: 'leaf' }, { id: 'zip', text: '지퍼 닫아요', motif: 'house' }], { id: 'skip', text: '그냥 가요', motif: 'cloud' }, 0.15),
          ORDER3('자기 전 준비예요. 놓아요.', [{ id: 'cloth', text: '옷 꺼내요', motif: 'star' }, { id: 'pack', text: '가방 챙겨요', motif: 'leaf' }, { id: 'sleep', text: '잠자요', motif: 'cloud' }], { id: 'late', text: '아침에 찾아요', motif: 'sun' }, 0.2,
            { conclude: '아침 준비는 차례대로, 내 물건은 내가 챙겨요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '세수해요 → 옷 입어요 → ___ 메요', answer: '가방' }],
        easy: [{ type: 'choice', prompt: '내 가방은 누가 챙겨요?', options: ['내가 챙겨요', '친구가 챙겨요'], answer: '내가 챙겨요' }] },
      notes: '장면은 가상의 나리네 아침이다. 학생 집의 아침 모습·누가 챙겨 주는지는 묻지 않는다.',
    }),
    HABIT1({
      id: 'auto.e12.g1-habit.activity.bag', type: 'activity', title: '가방 속 내 물건 점검',
      method: '가방에 내 물건 챙겨 넣기', tool: 'timer', minutes: 13,
      levels: { easy: '물건 2개(필통·공책)만 부르고 점검 칸도 2칸이다.', base: '물건 4개(필통·공책·알림장·물병)를 부르면 꺼내 보이고 점검 칸 4칸에 표시한다.', challenge: '4칸을 점검한 뒤 셋째 문항에서 짝 가방 점검을 도와준 것까지 표시한다.' },
      activity: {
        title: '내 가방 점검하기', tool: 'timer',
        teacher: '"선생님이 물건 이름을 부르면 가방에서 꺼내 번쩍 들어 보아요. 필통!" 하나씩 부르며 꺼내 보이게 하고, 다 보이면 점검 칸에 표시한다. 물건이 없는 학생에게 "괜찮아요. 내일 아침에 챙길 것 하나를 알게 되었어요"라고 말해 주고 반 앞에서 탓하지 않는다. "가방은 엄마가 싸 줘요"라는 말에는 "내일은 엄마와 함께 싸 보면서 무엇이 들었는지 내가 알아 둬요"라고 답한다.',
        task: '선생님이 부른 물건을 꺼내 보이고 점검 칸에 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '꺼내 보인 물건에 표시해요.', toolOptions: { title: '내 가방 점검', safety: ['필통', '공책', '알림장', '물병'] }, target: { safety: true }, difficulty: 0.1,
            levels: { easy: { prompt: '두 물건에 표시해요.', toolOptions: { safety: ['필통', '공책'] } } } },
          STEPS('가방 챙기는 차례를 놓아요.', '가방 챙기기', ['알림장 보기', '물건 넣기', '지퍼 닫기'], 0.15),
          { prompt: '오늘 해 본 것에 표시해요.', toolOptions: { title: '스스로 챙기기' }, target: { selfCheck: ['물건을 꺼내 보였어요', '다시 넣었어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '짝을 도운 것도 표시해요.', target: { selfCheck: ['물건을 꺼내 보였어요', '다시 넣었어요', '짝 가방을 도왔어요'] } } },
            conclude: '알림장을 보고, 넣고, 닫아요. 내 가방은 내가 알아요.' },
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '내일 가방에 넣을 것에 ✓ 해요.', options: ['필통', '공책', '알림장', '물병'] }] },
      notes: '물건이 없는 학생을 반 앞에서 드러내지 않는다. 학교에 둔 여분 학용품을 빌려 주고 "내일 챙길 것"으로만 말한다.',
    }),
    HABIT1({
      id: 'auto.e12.g1-habit.activity.save', type: 'activity', title: '물·종이 아끼기 나누기',
      method: '물·종이 아끼기 좋아요·안돼요', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "물 세게 틀기"처럼 헷갈리는 카드가 섞이고, 안돼요 카드 하나를 고쳐 말한다.' },
      activity: {
        title: '아끼기 좋아요·안돼요', tool: 'sortboard',
        teacher: '"이렇게 하면 물과 종이가 웃을까요, 울까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽는다. "손 씻을 땐 물을 세게 틀어야 깨끗해요"라는 학생에게 "물을 알맞게 틀고, 비누칠할 때는 잠가도 깨끗해져요"라고 알려 준다. 도전 단계에서는 안돼요 바구니의 카드 하나를 골라 "종이 한 장 버리기 → 뒷면도 쓰기"처럼 고쳐 말하게 한다.',
        task: '아끼는 행동은 좋아요, 아니면 안돼요 바구니에 넣어요.', levels: SBLV,
        items: [
          SB(OKNO, '세면대에서 하는 일을 나누어요.', ['수도꼭지 잠그기', '컵에 받기', '알맞게 틀기'], ['물 틀어 두기', '물장난', '물 버려 두기'], ['물 세게 틀기', '물 튀기기'], 0.1),
          SB(OKNO, '종이를 쓰는 일을 나누어요.', ['뒷면도 쓰기', '한 장만 쓰기', '모아 두기'], ['구겨 버리기', '마구 찢기', '낙서만 하기'], ['새 종이만', '반만 쓰기'], 0.15),
          SB(OKNO, '휴지와 물건을 나누어요.', ['휴지 한 칸', '크레파스 아껴', '연필 끝까지'], ['휴지 둘둘', '부러뜨리기', '아무 데나'], ['휴지 장난', '새것만 쓰기'], 0.2, { conclude: '물은 잠그고, 종이는 뒷면까지, 물건은 끝까지 써요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['수도꼭지 잠그기', ''], ['물 틀어 두기', ''], ['뒷면도 쓰기', '']], answer: '○, ×, ○' }] },
    }),
    HABIT1({
      id: 'auto.e12.g1-habit.activity.water', type: 'activity', title: '화분 물 주기 당번',
      method: '화분에 물 주기 당번 해 보기', tool: 'timer', minutes: 13,
      levels: { easy: '물 주기 차례 카드의 첫 두 장만 놓고, 교사와 함께 물을 준다.', base: '차례 세 장을 놓고 점검 칸 세 칸을 확인한 뒤 모둠이 스스로 물을 준다.', challenge: '모둠이 스스로 물을 주고, 셋째 문항에서 물 준 날을 기록표에 적은 것까지 표시한다.' },
      activity: {
        title: '교실 화분 물 주기', tool: 'timer',
        teacher: '"물은 많이 줄수록 좋을까요?" 흙을 손가락으로 살짝 눌러 보게 하고, 말라 있을 때만 물뿌리개로 조금씩 준다. 물을 가득 붓는 학생에게 "흙이 젖어 있으면 뿌리가 숨을 못 쉬어요. 흙부터 만져 봐요"라고 말한다. 화분 둘레 벌레를 손으로 잡으려는 학생에게는 "작은 벌레도 살아 있어요. 그대로 두고 선생님께 알려요"라고 짚는다. 모둠마다 화분 하나를 맡고 차례로 해 본다.',
        task: '물 주기 차례를 놓고 우리 모둠 화분에 물을 줘요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('물 주는 차례를 놓아요.', '화분 물 주기', ['흙 만져 보기', '조금씩 주기', '물뿌리개 두기'], 0.1,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['조금씩 주기', '흙 만져 보기'] }, target: { order: ['흙 만져 보기', '조금씩 주기'] } } } }),
          { prompt: '물 줄 때 지킨 것에 표시해요.', toolOptions: { title: '물 주기 점검', safety: ['흙이 말랐어요', '넘치지 않게', '벌레는 그대로'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '우리 모둠이 한 것에 표시해요.', toolOptions: { title: '물 주기 당번' }, target: { selfCheck: ['물을 줬어요', '제자리에 뒀어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '물 준 날 적은 것도요.', target: { selfCheck: ['물을 줬어요', '제자리에 뒀어요', '물 준 날을 적었어요'] } } },
            conclude: '흙을 만져 보고, 마르면 조금씩 물을 줘요. 작은 생명도 아껴요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '물을 주기 전에 먼저 해요.', options: ['흙 만져 보기', '물 가득 붓기'], answer: '흙 만져 보기' }] },
      notes: '물 주는 양·날은 반 화분에 맞춘 우리 반 약속이다. 도전 단계의 기록표는 종이(요일 칸)로 교실 뒤에 붙인다.',
    }),
    HABIT1({
      id: 'auto.e12.g1-habit.wrap.star', type: 'wrap', title: '스스로 한 일 별 붙이기',
      method: '오늘 스스로 한 일 별 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '교사가 "오늘 스스로 한 일 하나"를 함께 떠올리고 별 1개를 붙인다.', base: '스스로 한 일을 두 가지 떠올려 별 2개를 붙인다.', challenge: '별 3개를 붙이고 별마다 무엇을 했는지 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 나 혼자 해낸 일이 있나요? 가방 챙기기, 물 주기, 차례 놓기…" 떠올린 만큼 별 조각을 붙이게 한다. 별을 하나도 못 붙이겠다는 학생에게 "오늘 가방에서 필통을 꺼내 보인 것도 스스로 한 일이에요"라고 찾아 준다. 친구와 별 수를 견주는 말이 나오면 "별은 내 것끼리만 봐요. 어제보다 하나 늘면 충분해요"라고 말한다.',
        exitTicket: [
          PASTE(['star', 'circle', 'heart'], ['스스로 한 일만큼 별을 붙였어요'], '스스로 한 일만큼 별을 붙여요.', 1),
          CH('내 가방은 누가 챙겨요?', ['내가 챙겨요', '짝이 챙겨요', '안 챙겨요'], 0, '내 물건은 내가 알고 챙겨요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 스스로 해요',
        items: [
          { type: 'check', prompt: '내가 스스로 할 일에 ✓ 해요.', options: ['세수하기', '옷 입기', '가방 챙기기'] },
          { type: 'draw', prompt: '아침에 가방을 메는 내 모습을 그려요.' },
        ],
        easy: { note: '"내 물건은 내가!"를 떠올려요.', items: [{ type: 'draw', prompt: '내 가방을 그려요.' }] },
      },
    }),
    HABIT1({
      id: 'auto.e12.g1-habit.wrap.promise', type: 'wrap', title: '아끼기 약속 고르기',
      method: '아끼기 약속 그림 하나 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 카드 2장씩 읽어 주며 아끼는 약속을 함께 고른다.', base: '카드 4장 가운데 아끼는 약속 2장을 스스로 고른다.', challenge: '아끼는 약속 2장을 고른 뒤 집에서 지킬 것 하나를 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 배운 아끼기 약속 가운데 집에서도 할 수 있는 것은 무엇일까요?" 카드를 하나씩 소리 내어 읽어 주고 고르게 한다. "물 틀어 두기"를 고르는 학생에게 "물이 그냥 흘러가면 어떻게 될까요?"라고 되묻는다. 집에서 지킬 약속은 한 가지만 정하고, 다음 시간에 지켜 본 이야기를 하고 싶은 사람만 하자고 말한다.',
        exitTicket: [
          WPICK('아끼기 약속', [{ id: 'tap', text: '물 잠그기', motif: 'cloud' }, { id: 'run', text: '물 틀어 두기', motif: 'cloud' }, { id: 'back', text: '뒷면도 쓰기', motif: 'leaf' }, { id: 'throw', text: '종이 버리기', motif: 'leaf' }], ['tap', 'back'], '아끼는 약속 카드를 골라요.'),
          CH('작은 벌레를 보면요?', ['그대로 둬요', '잡아요', '밟아요'], 0, '작은 벌레도 살아 있어요. 그대로 두고 어른께 알려요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '아끼고 돌봐요',
        items: [
          { type: 'check', prompt: '집에서 지킬 약속에 ✓ 해요.', options: ['물 잠그기', '종이 뒷면 쓰기', '휴지 한 칸'] },
          { type: 'draw', prompt: '화분에 물을 주는 모습을 그려요.' },
        ],
        easy: { note: '물과 종이를 떠올려요.', items: [{ type: 'draw', prompt: '수도꼭지를 잠그는 손을 그려요.' }] },
      },
      notes: '집에서 지킨 일을 확인하거나 점수로 매기지 않는다. 말하고 싶은 학생만 나눈다.',
    }),
  ];

  // =====================================================================================================
  // 1학년 · 고운 말과 함께 노는 규칙 (관계 형성 및 소통 활동 — 협력적 놀이)
  const REL1 = MOD('auto.e12.g1-rel', [1]);
  const T_REL1 = [
    REL1({
      id: 'auto.e12.g1-rel.intro.ear', type: 'intro', title: '듣는 친구가 웃는 말 고르기',
      method: '고운 말 소리 듣고 웃는 얼굴 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 말("고마워!"·"비켜!")을 목소리로 들려주고 듣는 친구 얼굴을 함께 고른다.', base: '두 말에 더해 "같이 하자!"까지 세 말을 듣고 웃는 얼굴을 스스로 말한다.', challenge: '얼굴을 고른 뒤 웃은 까닭을 한 낱말("다정해서")로 말한다.' },
      intro: {
        teacher: '"선생님이 두 가지 말을 해 볼게요. \'고마워!\' \'비켜!\' 어떤 말을 들은 친구가 웃을까요?" 같은 목소리로 두 번 들려준 뒤 시연 단추로 말마다 마음 카드가 짝 지어지는 모습을 보인다. "비켜도 그냥 말이에요"라는 말이 나오면 "\'비켜!\'를 들으면 내 마음 날씨는 어떨까요? \'잠깐 지나갈게\'라고 하면요?"라고 되묻는다. 오늘은 고운 말과 함께 노는 규칙을 익힌다고 밝힌다.',
        student: '"고마워!"를 웃는 얼굴로 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"고마워!"' }, { id: 's2', label: '"비켜!"' }], cards: ['속상함', '기쁨'], shuffle: false }, sequence: [{ match: { s1: '기쁨' } }, { match: { s1: '기쁨', s2: '속상함' } }] },
        art: { draw: 'two paper children facing each other, one saying thank you with a heart shaped speech bubble and the other smiling, while another speech bubble with a jagged edge floats away', banner: '고운 말, 웃는 얼굴', extra: [{ motif: 'heart', x: 300, y: 96, color: 'peach' }] },
      },
    }),
    REL1({
      id: 'auto.e12.g1-rel.intro.game', type: 'intro', title: '공 받으면 한 마디 놀이',
      method: '선생님과 차례 놀이 시작하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 공을 굴려 한 바퀴만 돌리고, 받은 사람은 "고마워" 한 마디만 한다.', base: '두 바퀴를 돌리며 받은 사람이 좋아하는 놀이 한 낱말을 말하고 다음 친구에게 굴린다.', challenge: '"이름 부르고 굴리기" 규칙 하나를 더해 두 바퀴를 돈다.' },
      intro: {
        teacher: '"공을 받은 사람만 말할 수 있어요. 말하고 나면 다음 친구에게 굴려요." 시연 단추로 놀이 차례 카드(공 받기 → 한 마디 → 굴려 주기)가 놓이는 모습을 보이고, 모둠 원으로 앉아 교사부터 시작한다. 공을 받지 않았는데 말하는 학생에게 "지금 말할 차례는 공을 든 친구예요. 내 차례가 오면 꼭 들을게요"라고 말해 준다. "먼저 받으면 이긴 거예요"라는 말이 나오면 "이 놀이는 모두 한 번씩 말하면 다 같이 이겨요"라고 답한다.',
        student: '공을 받으면 좋아하는 놀이 하나를 말하고 굴려 주어요.',
        demo: { tool: 'timer', options: { title: '공 받기 놀이', cards: ['굴려 주기', '공 받기', '한 마디'] }, sequence: [{ order: ['공 받기', '한 마디', '굴려 주기'] }] },
        art: { draw: 'paper children sitting in a circle on the classroom floor, rolling a soft paper ball to each other, one child holding the ball and speaking while others listen', banner: '내 차례, 네 차례', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '말랑한 공을 바닥에 굴린다(던지지 않는다). 말하기 어려워하는 학생은 "다음!"이라고만 해도 된다.',
    }),
    REL1({
      id: 'auto.e12.g1-rel.activity.match', type: 'activity', title: '장면과 고운 말 짝 짓기',
      method: '장면과 고운 말 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '장면 2개와 고운 말 카드 2장을 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3개와 고운 말 카드를 짝 짓는다.', challenge: '장면 4개와 고운 말 카드를 짝 짓고, 카드가 섞여 나온다.' },
      activity: {
        title: '이럴 땐 무슨 말?', tool: 'emotion',
        teacher: '"친구가 떨어진 연필을 주워 줬어요. 무슨 말을 할까요?" 짝을 지을 때마다 그 말을 반 전체가 다정한 목소리로 따라 말한다. 발을 밟은 장면에 "고마워"를 두는 학생에게 "내가 친구 발을 밟았어요. 친구 발은 어떨까요?"라고 묻는다. "미안하다고 하면 지는 거예요"라는 말이 나오면 "\'미안해\'는 친구 마음을 낫게 하는 말이에요. 말한 사람도 멋져요"라고 짚는다.',
        task: '장면과 어울리는 고운 말 카드를 이어요.', levels: LV,
        items: [
          PAIRS('교실 장면과 고운 말을 이어요.', [['연필을 주워 줌', '고마워'], ['발을 밟음', '미안해'], ['그림을 보여 줌', '멋지다'], ['줄을 양보함', '양보 고마워']], 0.1),
          PAIRS('놀이 장면과 고운 말을 이어요.', [['공을 건네줌', '고마워'], ['공에 맞혔음', '미안해'], ['같이 놀자 함', '좋아'], ['져서 속상함', '괜찮아']], 0.15),
          PAIRS('복도 장면과 고운 말을 이어요.', [['문을 잡아 줌', '고마워'], ['어깨가 부딪침', '미안해'], ['친구가 넘어짐', '괜찮아?'], ['새 친구가 옴', '반가워']], 0.2, { conclude: '도움을 받으면 "고마워", 실수했으면 "미안해"라고 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구 발을 밟았어요. "___"', answer: '미안해' }],
        easy: [{ type: 'choice', prompt: '도움을 받으면 하는 말은?', options: ['고마워', '비켜'], answer: '고마워' }] },
    }),
    REL1({
      id: 'auto.e12.g1-rel.activity.role', type: 'activity', title: '연필 빌리기 역할놀이',
      method: '짝과 고운 말 역할놀이', tool: 'timer', minutes: 13,
      levels: { easy: '대화 카드 첫 두 장의 차례만 놓고, 선생님 말을 따라 하며 역할놀이를 한다.', base: '대화 세 장의 차례를 놓고 짝과 역할을 바꿔 해 본다.', challenge: '역할을 바꿔 해 본 뒤 셋째 문항에서 새 장면(지우개 빌리기)을 만들어 해 본 것까지 표시한다.' },
      activity: {
        title: '짝과 연필 빌리기 놀이', tool: 'timer',
        teacher: '"하나는 연필이 없는 친구, 하나는 빌려주는 친구예요." 대화 카드를 놓은 뒤 교사가 먼저 학생 한 명과 시범을 보이고 짝끼리 해 본다. 연필을 확 낚아채는 시늉을 하는 학생에게 "친구가 \'여기 있어\' 하고 건네줄 때까지 기다려요"라고 말한다. 돌려줄 때 아무 말 없이 두는 짝에게 "돌려줄 때도 한 마디가 있어요. 무엇일까요?"라고 묻는다(기다릴 반응: "고마워").',
        task: '빌리고 돌려주는 말의 차례를 놓고 짝과 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('빌릴 때 말 차례를 놓아요.', '연필 빌리기', ['"빌려줄래?"', '"여기 있어"', '"고마워"'], 0.1,
            { levels: { easy: { prompt: '첫 두 말을 놓아요.', toolOptions: { cards: ['"여기 있어"', '"빌려줄래?"'] }, target: { order: ['"빌려줄래?"', '"여기 있어"'] } } } }),
          STEPS('돌려줄 때 차례를 놓아요.', '연필 돌려주기', ['"다 썼어"', '두 손으로', '"고마워"'], 0.15),
          { prompt: '짝과 해 본 것에 표시해요.', toolOptions: { title: '역할놀이 점검' }, target: { selfCheck: ['"고마워" 말했어요', '역할을 바꿨어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '새 장면도 해 봤나요?', target: { selfCheck: ['"고마워" 말했어요', '역할을 바꿨어요', '새 장면을 했어요'] } } },
            conclude: '빌릴 땐 "빌려줄래?", 받으면 "고마워", 돌려줄 때도 "고마워"예요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '연필을 빌릴 때 먼저 해요.', options: ['"빌려줄래?" 묻기', '그냥 가져가기'], answer: '"빌려줄래?" 묻기' }] },
      notes: '역할놀이는 가상의 장면이다. 실제로 누가 물건을 안 빌려줬는지는 묻지 않는다.',
    }),
    REL1({
      id: 'auto.e12.g1-rel.activity.rule', type: 'activity', title: '놀이 규칙 좋아요·안돼요',
      method: '놀이 규칙 좋아요·안돼요', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "이길 때만 하기"처럼 헷갈리는 카드가 섞이고, 우리 반 놀이 규칙 하나를 말한다.' },
      activity: {
        title: '같이 놀 때 규칙 나누기', tool: 'sortboard',
        teacher: '"이렇게 놀면 모두 즐거울까요?" 카드를 넣을 때마다 반 전체가 읽는다. "끼어들기"를 좋아요에 넣는 학생에게 "줄 뒤에서 기다리던 친구 마음은 어떨까요?"라고 묻는다. "내가 먼저 하면 이긴 거예요"라는 말에는 "놀이는 차례대로 해야 모두 끝까지 놀 수 있어요"라고 답한다. 도전 단계에서는 우리 반 놀이 규칙 하나를 함께 정해 칠판에 그린다.',
        task: '모두 즐거운 놀이는 좋아요, 아니면 안돼요 바구니에 넣어요.', levels: SBLV,
        items: [
          SB(OKNO, '차례를 나누어요.', ['차례 지키기', '줄 서서 기다리기', '한 번씩 하기'], ['끼어들기', '혼자 계속', '밀고 먼저'], ['이길 때만 하기', '몰래 앞으로'], 0.1),
          SB(OKNO, '놀이 중 말을 나누어요.', ['"같이 하자"', '"잘했어"', '"괜찮아"'], ['"너는 빠져"', '"바보"', '"내 거야"'], ['"나만 할래"', '"저리 가"'], 0.15),
          SB(OKNO, '이기고 질 때를 나누어요.', ['악수하기', '"또 하자"', '박수 치기'], ['울며 떼쓰기', '놀리기', '물건 던지기'], ['진 친구 웃기', '규칙 바꾸기'], 0.2, { conclude: '차례를 지키고 고운 말로 놀면, 이겨도 져도 모두 즐거워요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['놀이 모습', '○ / ×'], cells: [['차례 지키기', ''], ['끼어들기', ''], ['"또 하자"', '']], answer: '○, ×, ○' }] },
    }),
    REL1({
      id: 'auto.e12.g1-rel.activity.play', type: 'activity', title: '모둠 풍선 띄우기 놀이',
      method: '모둠 협력 놀이 하기', tool: 'timer', minutes: 13,
      levels: { easy: '놀이를 1번 하도록 타이머를 맞추고, 교사가 차례를 불러 준다.', base: '놀이를 2번 하도록 타이머를 맞추고 모둠이 차례를 지키며 논다.', challenge: '차례를 바꿔 3번 하도록 맞추고, 바뀐 차례로 다시 논다.' },
      activity: {
        title: '풍선 떨어뜨리지 않기', tool: 'timer',
        teacher: '"모둠이 손을 잡고 원을 만들어요. 풍선이 바닥에 닿지 않게 한 사람씩 차례로 톡 쳐요." 타이머로 놀이 시간을 정한 뒤 교사 신호로 시작한다. 혼자 계속 치는 학생에게 "풍선은 모둠 모두의 것이에요. 옆 친구 차례예요"라고 말한다. 풍선이 떨어져 친구를 탓하는 말이 나오면 "누구 탓이 아니에요. 다시 띄우면 돼요"라고 답한다. 끝나면 "해 보았어요"에 표시한다.',
        task: '놀이 횟수를 맞추고 차례를 지키며 풍선을 띄워요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '놀이를 두 번 해요. 맞춰요.', toolOptions: { title: '풍선 놀이(우리 반 약속)', labels: ['놀이', '쉬기'], plan: { work: 60, rest: 30, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.1,
            levels: { easy: { prompt: '놀이를 한 번 해요. 맞춰요.', toolOptions: { plan: { work: 60, rest: 30, rounds: 3 } }, target: { plan: { rounds: 1 } } },
              challenge: { prompt: '차례 바꿔 세 번 해요.', target: { plan: { rounds: 3 } } } } },
          { prompt: '놀 때 지킨 것에 표시해요.', toolOptions: { title: '풍선 놀이 약속', safety: ['손으로 톡 쳐요', '친구를 안 밀어요', '차례대로 해요'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '모둠 놀이' }, target: { selfCheck: ['풍선을 띄웠어요', '친구를 응원했어요'] }, difficulty: 0.15,
            conclude: '차례를 지키고 서로 응원하면 모둠 놀이가 더 즐거워요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '풍선이 떨어지면 뭐라고 해요?', options: ['"다시 하자!"', '"너 때문이야!"'], answer: '"다시 하자!"' }] },
      notes: '놀이 시간·횟수는 우리 반 약속(연습용 값)이다. 책상을 밀어 넓은 자리를 만들고 풍선 하나를 모둠에 하나씩 준다.',
    }),
    REL1({
      id: 'auto.e12.g1-rel.wrap.face', type: 'wrap', title: '놀이 뒤 마음 날씨',
      method: '놀이 뒤 마음 날씨 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 눈금 양 끝(흐림·맑음) 두 가지만 읽어 주고 가까운 쪽을 고르게 한다.', base: '눈금 5칸에서 놀이 뒤 내 마음 날씨를 고른다.', challenge: '마음 날씨를 고른 뒤 함께 논 친구에게 칭찬 한 마디를 쓴다.' },
      wrap: {
        teacher: '"함께 놀고 난 지금, 내 마음 날씨는 얼마나 맑은가요?" 눈금을 고르게 하고 손가락으로 몇 칸인지 보여 주게 한다. 흐린 쪽을 고른 학생에게 "흐린 날도 있어요. 무엇이 있으면 조금 맑아질까요?"라고 묻고 대답을 강요하지 않는다. 출구 2번에서 "안 해!"를 고른 학생에게 "졌을 때 \'또 하자\'라고 하면 친구도 나도 다시 웃어요"라고 말해 준다.',
        exitTicket: [
          SCALE('친구와 함께 놀았어요.', '신남', { 1: '흐림', 5: '맑음' }, '놀고 난 내 마음 날씨를 골라요.'),
          CH('놀다 졌어요. 뭐라고 해요?', ['"또 하자"', '"안 해!"', '"네 탓이야"'], 0, '졌을 때도 "또 하자"라고 하면 모두 즐거워요.'),
          { type: 'short', prompt: '친구 칭찬 한 마디를 써요.' },
        ],
      },
      worksheet: {
        title: '함께 놀아요',
        items: [
          { type: 'check', prompt: '오늘 한 고운 말에 ✓ 해요.', options: ['고마워', '미안해', '괜찮아', '또 하자'] },
          { type: 'draw', prompt: '친구와 사이좋게 노는 모습을 그려요.' },
        ],
        easy: { note: '"고마워, 미안해"를 떠올려요.', items: [{ type: 'draw', prompt: '웃는 친구 얼굴을 그려요.' }] },
      },
      notes: '마음 날씨는 정답이 없다. 흐림을 고른 까닭을 반 앞에서 묻지 않고, 필요하면 쉬는 시간에 따로 이야기한다.',
    }),
    REL1({
      id: 'auto.e12.g1-rel.wrap.badge', type: 'wrap', title: '고운 말 하트 배지',
      method: '고운 말 배지 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '하트 조각 1개로 배지를 꾸민다.', base: '하트와 다른 조각을 더해 2개 이상으로 배지를 꾸민다.', challenge: '배지를 꾸미고 "고마워 배지"처럼 배지 이름을 지어 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 가장 많이 쓴 고운 말은 무엇인가요? 그 말을 떠올리며 하트 배지를 꾸며 봐요." 조각을 붙이는 동안 "누구에게 그 말을 했나요?"라고 묻되 이름을 말하지 않아도 된다고 한다. 하트를 비뚤게 붙였다고 속상해하는 학생에게 "배지는 고운 말을 떠올린 마음이 중요해요"라고 말해 준다. 출구 2번에서 "놀 때 늘"을 고른 학생과는 "미안해"가 필요한 때를 한 번 더 떠올려 본다.',
        exitTicket: [
          PASTE(['heart', 'star', 'circle'], ['하트 배지를 꾸몄어요', '고운 말을 떠올렸어요'], '고운 말 배지를 꾸며요.', 1),
          CH('"미안해"는 언제 해요?', ['내가 실수했을 때', '친구가 잘했을 때', '놀 때마다'], 0, '내가 실수해서 친구가 속상할 때 "미안해"라고 해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '고운 말 배지',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '도움을 받으면 "___"라고 해요.', answer: '고마워' },
          { type: 'draw', prompt: '내 고운 말 배지를 그려요.' },
        ],
        easy: { note: '하트를 떠올려요.', items: [{ type: 'draw', prompt: '하트 배지를 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 우리 반 약속과 내 역할 (공동체 자치활동 — 학급 자치)
  const SELF1 = MOD('auto.e12.g1-self', [1]);
  const T_SELF1 = [
    SELF1({
      id: 'auto.e12.g1-self.intro.mess', type: 'intro', title: '약속 없는 교실 친구들 마음',
      method: '약속이 없는 교실 그림 보기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 2장(속상함·신남)만 읽어 주고 그림 속 친구 마음을 함께 고른다.', base: '시연을 보고 마음 카드 4장 가운데 그림 속 친구들 마음 2개를 말한다.', challenge: '마음을 고른 뒤 "모두 한꺼번에 말해서"처럼 까닭을 한 마디로 말한다.' },
      intro: {
        teacher: '"이 교실에는 약속이 하나도 없어요. 모두 한꺼번에 말하고, 공 하나를 서로 가지려고 해요. 이 교실 친구들은 어떤 마음일까요?" 대답을 듣고(기다릴 반응: "시끄러워요", "속상해요") 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "약속이 없으면 마음대로 해서 좋아요"라는 말이 나오면 "내 마음대로 하는 친구가 스무 명이면 어떻게 될까요?"라고 되묻는다. 오늘은 우리 반이 함께 지킬 약속을 정한다고 밝힌다.',
        student: '그림 속에서 가장 속상해 보이는 친구를 손가락으로 가리켜 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '그림 속 친구 마음', cards: ['속상함', '신남', '걱정', '편안함'], shuffle: false }, sequence: [{ pick: ['속상함'] }, { pick: ['속상함', '걱정'] }] },
        art: { draw: 'a noisy paper classroom where many paper children talk at once with overlapping speech bubbles and two children pull the same paper ball, one child covering ears', banner: '약속이 없다면?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '그림은 가상의 교실이다. 우리 반 누가 시끄러운지 이름을 대게 하지 않는다.',
    }),
    SELF1({
      id: 'auto.e12.g1-self.intro.jobs', type: 'intro', title: '해 보고 싶은 교실 역할 고르기',
      method: '교실 역할 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 역할 카드를 하나씩 읽어 주고 해 보고 싶은 일 1개를 손들어 고른다.', base: '시연을 보고 해 보고 싶은 일 2개를 고른다.', challenge: '2개를 고른 뒤 고른 까닭("칠판이 깨끗해져서")을 짝에게 말한다.' },
      intro: {
        teacher: '"우리 교실이 잘 돌아가려면 누가 어떤 일을 하면 좋을까요?" 역할 카드를 하나씩 읽어 주고 시연 단추로 두 장이 바구니에 담기는 모습을 보인다. "칠판 지우기는 선생님 일이에요"라는 말이 나오면 "우리 교실은 우리 모두의 교실이에요. 한 사람이 한 가지씩 맡으면 어떨까요?"라고 되묻는다. 하고 싶은 일이 겹쳐도 괜찮고, 정하는 방법은 함께 의논한다고 말한다.',
        student: '해 보고 싶은 교실 일을 하나 골라 손으로 흉내 내 보아요.',
        demo: PICKDEMO('해 보고 싶은 일', [{ id: 'board', text: '칠판 지우기', motif: 'star' }, { id: 'milk', text: '우유 나르기', motif: 'house' }, { id: 'plant', text: '화분 물 주기', motif: 'leaf' }, { id: 'light', text: '불 끄기', motif: 'sun' }, { id: 'book', text: '책 정리', motif: 'cloud' }], ['board', 'plant']),
        art: { draw: 'paper children each doing a small classroom job, one wiping a paper chalkboard, one carrying a paper milk crate, one watering a paper plant, with tiny paper name badges', banner: '한 사람 한 가지', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    SELF1({
      id: 'auto.e12.g1-self.activity.good', type: 'activity', title: '모두 지킬 약속 고르기',
      method: '모두 지킬 수 있는 약속 고르기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "하루 종일 조용히"처럼 헷갈리는 카드가 섞이고, 어려운 약속 하나를 지킬 수 있게 고쳐 말한다.' },
      activity: {
        title: '지킬 수 있어요·어려워요', tool: 'sortboard',
        teacher: '"우리 반 모두가 매일 지킬 수 있는 약속일까요?" 카드를 넣을 때마다 "나도, 짝도, 선생님도 지킬 수 있을까?" 하고 함께 묻는다. "절대 안 움직이기"를 지킬 수 있다고 넣는 학생에게 "쉬는 시간에도 안 움직일 수 있을까요?"라고 묻는다. 도전 단계에서는 "하루 종일 조용히 → 수업 시간에 손 들고 말하기"처럼 어려운 약속을 고쳐 말하게 한다. 좋은 약속은 짧고, 모두 지킬 수 있는 것이라고 짚는다.',
        task: '모두 지킬 수 있으면 지킬 수 있어요, 아니면 어려워요에 넣어요.', levels: SBLV,
        items: [
          SB(['지킬 수 있어요', '어려워요'], '교실 약속을 나누어요.', ['제자리에 두기', '손 들고 말하기', '복도에서 걷기'], ['절대 안 움직이기', '한 번도 안 웃기', '물 안 마시기'], ['하루 종일 조용히', '쉬는 시간 없기'], 0.1),
          SB(['지킬 수 있어요', '어려워요'], '놀이 약속을 나누어요.', ['차례대로 놀기', '같이 정리하기', '"같이 하자"'], ['늘 이기기', '혼자만 놀기', '공 안 만지기'], ['절대 안 넘어지기', '모두 1등 하기'], 0.15),
          SB(['지킬 수 있어요', '어려워요'], '말 약속을 나누어요.', ['고운 말 쓰기', '끝까지 듣기', '"미안해" 하기'], ['아무 말 안 하기', '크게 소리치기', '혼자만 말하기'], ['속삭이기만', '늘 먼저 말하기'], 0.2, { conclude: '좋은 약속은 짧고, 우리 모두 지킬 수 있는 약속이에요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '지킬 수 있으면 ○, 어려우면 ×를 써요.', columns: ['약속', '○ / ×'], cells: [['제자리에 두기', ''], ['절대 안 움직이기', ''], ['고운 말 쓰기', '']], answer: '○, ×, ○' }] },
    }),
    SELF1({
      id: 'auto.e12.g1-self.activity.vote', type: 'activity', title: '손들기로 약속 정하기',
      method: '좋아요·안돼요 손들기로 약속 정하기', tool: 'timer', minutes: 13,
      levels: { easy: '교사가 약속 후보 2개만 보여 주고, 정하는 차례 카드의 첫 두 장만 놓는다.', base: '후보 3개를 하나씩 보며 손들기 차례 세 장을 놓고, 손들기 약속을 점검한다.', challenge: '후보마다 한 사람이 까닭을 말한 뒤 손을 들고, 셋째 문항에서 까닭을 말한 것까지 표시한다.' },
      activity: {
        title: '우리 반 약속 손들어 정하기', tool: 'timer',
        teacher: '"앞 활동에서 고른 약속 후보를 하나씩 보여 줄게요. 좋으면 엄지 위, 안 되겠으면 엄지 아래로 손을 들어요." 후보마다 손을 들고 함께 소리 내어 센다. 두 손을 다 드는 학생에게 "한 사람이 한 번씩만 들어야 모두의 마음을 셀 수 있어요"라고 말한다. "약속은 선생님이 정해요"라는 말이 나오면 "오늘은 우리가 손으로 정했어요. 그래서 우리 모두의 약속이에요"라고 짚는다. 정한 약속은 교실 앞에 붙인다.',
        task: '정하는 차례를 놓고 손을 들어 약속을 정해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('약속 정하는 차례를 놓아요.', '손들어 정하기', ['후보 보기', '손 들기', '함께 세기'], 0.1,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['손 들기', '후보 보기'] }, target: { order: ['후보 보기', '손 들기'] } } } }),
          { prompt: '손들 때 지킨 것에 표시해요.', toolOptions: { title: '손들기 약속', safety: ['한 번만 들어요', '조용히 기다려요', '정한 것을 따라요'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '약속 정하기' }, target: { selfCheck: ['손을 들었어요', '정한 약속을 말해요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '까닭 말하기도 표시해요.', target: { selfCheck: ['손을 들었어요', '정한 약속을 말해요', '까닭을 말했어요'] } } },
            conclude: '우리 반 약속은 우리가 함께 손을 들어 정해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '우리 반 약속은 누가 정해요?', options: ['우리 모두 함께', '한 사람이 혼자'], answer: '우리 모두 함께' }] },
      notes: '손들기는 눈을 감고 해도 된다(친구 눈치를 덜 보게). 정해지지 않은 후보도 "다음에 다시 이야기할 약속"으로 남긴다.',
    }),
    SELF1({
      id: 'auto.e12.g1-self.activity.match', type: 'activity', title: '역할과 하는 일 짝 짓기',
      method: '역할과 하는 일 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '역할 2개와 하는 일 카드 2장을 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '역할 3개와 하는 일 카드를 짝 짓는다.', challenge: '역할 4개와 하는 일 카드를 짝 짓고, 카드가 섞여 나온다.' },
      activity: {
        title: '도우미가 하는 일 잇기', tool: 'emotion',
        teacher: '"칠판 도우미는 무슨 일을 할까요?" 짝을 지을 때마다 그 일을 몸짓으로 흉내 내게 한다. 화분 도우미에 "불 끄기"를 두는 학생에게 "화분 도우미가 돌보는 것은 무엇일까요?"라고 묻는다. "내 역할이 아니면 몰라도 돼요"라는 말이 나오면 "칠판 도우미가 아픈 날은 누가 도울 수 있을까요?"라고 되묻고, 서로의 일을 알아 두면 도울 수 있다고 짚는다.',
        task: '역할과 그 역할이 하는 일 카드를 이어요.', levels: LV,
        items: [
          PAIRS('교실 도우미의 일을 이어요.', [['칠판 도우미', '칠판 지우기'], ['우유 도우미', '우유 나르기'], ['화분 도우미', '물 주기'], ['불 도우미', '불 끄기']], 0.1),
          PAIRS('정리 도우미의 일을 이어요.', [['책꽂이 도우미', '책 꽂기'], ['신발장 도우미', '신발 정리'], ['나눔 도우미', '종이 나누기'], ['창가 도우미', '커튼 걷기']], 0.15),
          PAIRS('돕는 도우미의 일을 이어요.', [['줍기 도우미', '바닥 줍기'], ['알림 도우미', '알림장 걷기'], ['교구 도우미', '교구 정리'], ['줄 도우미', '앞에서 걷기']], 0.2, { conclude: '한 사람이 한 가지씩 맡고, 서로의 일도 알아 두면 도울 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '칠판 도우미가 하는 일은?', options: ['칠판 지우기', '우유 나르기'], answer: '칠판 지우기' }] },
      notes: '역할 이름은 예시다. 우리 반에서 실제로 정한 1인 1역 이름으로 카드를 바꿔도 된다.',
    }),
    SELF1({
      id: 'auto.e12.g1-self.activity.do', type: 'activity', title: '내 역할 해 보고 점검',
      method: '내 역할 해 보고 점검하기', tool: 'timer', minutes: 13,
      levels: { easy: '역할 차례 카드 첫 두 장만 놓고, 교사와 함께 역할을 해 본 뒤 점검한다.', base: '차례 세 장을 놓고 스스로 역할을 한 뒤 점검 칸 세 칸에 표시한다.', challenge: '스스로 역할을 한 뒤 셋째 문항에서 친구 역할을 도운 것까지 표시한다.' },
      activity: {
        title: '1인 1역 해 보기', tool: 'timer',
        teacher: '"선생님이 정해 준 내 역할을 지금 해 봐요. 다 하면 자리로 돌아와 점검해요." 3분 동안 저마다 역할을 하게 하고 교실을 돌며 지켜본다. 반쯤 하고 돌아오는 학생에게 "끝까지 했는지 한 번 더 둘러볼까요?"라고 묻는다. 할 일을 몰라 서 있는 학생에게는 "역할 카드를 다시 봐요. 무엇을 하는 일이었나요?"라고 묻는다. 역할을 마친 학생에게 친구 역할도 도울 수 있는지 물어보게 한다.',
        task: '역할 차례를 놓고 내 역할을 해 본 뒤 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('역할 하는 차례를 놓아요.', '내 역할 하기', ['할 일 보기', '해 보기', '점검하기'], 0.1,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['해 보기', '할 일 보기'] }, target: { order: ['할 일 보기', '해 보기'] } } } }),
          { prompt: '내 역할을 점검해요.', toolOptions: { title: '역할 점검', safety: ['끝까지 했어요', '깨끗이 했어요', '제자리에 뒀어요'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '오늘 내 역할' }, target: { selfCheck: ['내 역할을 했어요', '도움을 물었어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '친구를 도운 것도요.', target: { selfCheck: ['내 역할을 했어요', '도움을 물었어요', '친구 역할을 도왔어요'] } } },
            conclude: '내 역할은 끝까지 하고, 친구 역할도 도울 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '할 일 보기 → 해 보기 → ___', answer: '점검하기' }] },
      notes: '역할을 해 보는 3분은 우리 반 약속이다. 잘하고 못한 것을 점수로 매기지 않는다.',
    }),
    SELF1({
      id: 'auto.e12.g1-self.wrap.poster', type: 'wrap', title: '우리 반 약속판 꾸미기',
      method: '우리 반 약속판 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '정한 약속 1개를 떠올리며 조각 1개를 붙인다.', base: '정한 약속 2개만큼 조각 2개를 붙인다.', challenge: '정한 약속 3개만큼 조각 3개를 붙이고 약속마다 무엇인지 말한다.' },
      wrap: {
        teacher: '"오늘 손들어 정한 우리 반 약속을 떠올려요. 약속 하나에 조각 하나씩 붙여 약속판을 꾸며요." 다 꾸민 뒤 몇 명에게 조각마다 어떤 약속인지 말하게 한다. 정해지지 않은 후보 약속을 붙이는 학생에게 "그 약속은 다음에 다시 이야기하기로 했어요"라고 짚는다. 출구 2번에서 "선생님 혼자"를 고른 학생에게 "오늘 우리가 손을 들어 정했지요"라고 떠올려 준다.',
        exitTicket: [
          PASTE(['square', 'star', 'heart'], ['약속 조각을 붙였어요', '약속을 말할 수 있어요'], '정한 약속만큼 조각을 붙여요.', 1),
          CH('우리 반 약속은 누가 정해요?', ['우리 모두 함께', '선생님 혼자', '힘센 친구'], 0, '우리 반 약속은 우리 모두가 함께 정해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반 약속',
        items: [
          { type: 'check', prompt: '우리 반이 정한 약속에 ✓ 해요.', options: ['제자리에 두기', '손 들고 말하기', '고운 말 쓰기'] },
          { type: 'draw', prompt: '약속을 지키는 우리 반 모습을 그려요.' },
        ],
        easy: { note: '정한 약속 하나를 떠올려요.', items: [{ type: 'draw', prompt: '약속을 지키는 내 모습을 그려요.' }] },
      },
    }),
    SELF1({
      id: 'auto.e12.g1-self.wrap.check', type: 'wrap', title: '내 역할 별점 고르기',
      method: '내 역할 별점 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 카드 2장씩 읽어 주며 역할을 잘하는 모습을 고르고, 별점은 별 하나·셋 가운데 고른다.', base: '카드 4장 가운데 잘하는 모습 2장을 고르고 별점 3칸에서 고른다.', challenge: '별점을 고른 뒤 내일 더 잘할 점 한 가지를 쓴다.' },
      wrap: {
        teacher: '"역할을 잘하는 모습은 어떤 모습일까요?" 카드를 고른 뒤 "오늘 내 역할은 별 몇 개였나요?" 하고 별점을 스스로 고르게 한다. 별 하나를 고르고 시무룩한 학생에게 "별 하나도 해 본 거예요. 내일 하나 더 늘리면 돼요"라고 말해 준다. 별점은 서로 묻지 않고 내 마음속으로만 보는 것이라고 말한다.',
        exitTicket: [
          WPICK('역할 잘하기', [{ id: 'end', text: '끝까지 해요', motif: 'star' }, { id: 'later', text: '미뤄 둬요', motif: 'cloud' }, { id: 'self', text: '스스로 해요', motif: 'sun' }, { id: 'other', text: '남이 해요', motif: 'cloud' }], ['end', 'self'], '역할을 잘하는 모습을 골라요.'),
          SCALE('오늘 내 역할을 했어요.', '뿌듯함', { 1: '별 하나', 3: '별 셋' }, '내 역할 별점을 골라요.', 3),
          { type: 'short', prompt: '내일 더 잘할 점을 써요.' },
        ],
      },
      worksheet: {
        title: '내 역할 점검',
        items: [
          { type: 'blank', prompt: '내 역할을 써요.', text: '내 역할은 ___ 도우미예요.', answer: '(내 역할)' },
          { type: 'check', prompt: '오늘 한 것에 ✓ 해요.', options: ['끝까지 했어요', '스스로 했어요', '친구를 도왔어요'] },
        ],
        easy: { note: '내 역할 카드를 보며 써요.', items: [{ type: 'draw', prompt: '내 역할을 하는 모습을 그려요.' }] },
      },
      notes: '별점은 스스로 점검이다. 교사가 별점을 모으거나 견주지 않는다.',
    }),
  ];

  // =====================================================================================================
  // 1학년 · 궁금한 것 찾아 알아보기 (주제 탐구 활동)
  const INQ1 = MOD('auto.e12.g1-inq', [1]);
  // 세 바구니 나누기(sortboard): ways = { 바구니: [카드 2장] } 3칸. 쉬움 3장(칸마다 1장), 기본 5장, 도전 5장 + 알맞지 않은 카드 2장(바구니 밖에 남김)
  const SB3 = (prompt, ways, extra, wrong, d, more) => {
    const slots = Object.keys(ways);
    const [a, b, c] = slots.map((k) => ways[k]);
    const base = [a[0], b[0], c[0], a[1], b[1]];
    return {
      prompt, toolOptions: { slots, cards: base }, target: { sort: { [slots[0]]: [a[0], a[1]], [slots[1]]: [b[0], b[1]], [slots[2]]: [c[0]] } }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(3장).`, toolOptions: { cards: [a[0], b[0], c[0]] }, target: { sort: { [slots[0]]: [a[0]], [slots[1]]: [b[0]], [slots[2]]: [c[0]] } } },
        challenge: { prompt: `${cut(prompt)}(7장).`, toolOptions: { cards: [a[0], wrong[0], b[0], c[0], a[1], wrong[1], b[1]] } },
      },
      ...more,
    };
  };
  const WONDER = [['개미', 5], ['구름', 3], ['그네', 2]];
  const T_INQ1 = [
    INQ1({
      id: 'auto.e12.g1-inq.intro.wonder', type: 'intro', title: '운동장 그림 속 궁금한 것',
      method: '그림 속 궁금한 것 누르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 그림 카드를 하나씩 읽어 주고 궁금한 것 1개를 함께 고른다.', base: '시연을 보고 궁금한 것 2개를 골라 손가락으로 가리킨다.', challenge: '궁금한 것 3개를 고르고, 하나는 "왜 ○○일까?"로 말한다.' },
      intro: {
        teacher: '"운동장 그림을 보아요. 개미, 구름, 그네… 어떤 것이 궁금한가요?" 시연 단추로 궁금한 것 카드가 바구니에 담기는 모습을 보이고, 몇 명에게 "왜 궁금해요?"라고 묻는다(기다릴 반응: "개미가 어디 가는지요"). "궁금한 게 없어요"라는 학생에게 "구름은 왜 움직일까? 그네는 왜 흔들릴까? 하나만 골라 볼까요?"라고 도와준다. 오늘은 궁금한 것을 묻는 말로 바꾸고 알아보는 방법을 고른다고 밝힌다.',
        student: '그림에서 가장 궁금한 것 하나를 손가락으로 가리켜 보아요.',
        demo: PICKDEMO('궁금해요', [{ id: 'ant', text: '개미', motif: 'leaf' }, { id: 'cloud', text: '구름', motif: 'cloud' }, { id: 'swing', text: '그네', motif: 'house' }, { id: 'sand', text: '모래', motif: 'mountain' }, { id: 'leaf', text: '나뭇잎', motif: 'leaf' }], ['ant', 'cloud', 'swing']),
        art: { draw: 'a paper school playground with a line of tiny paper ants, fluffy paper clouds and a paper swing, paper children pointing with paper question marks above their heads', banner: '무엇이 궁금할까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    INQ1({
      id: 'auto.e12.g1-inq.intro.sky', type: 'intro', title: '창밖 보고 궁금한 것 말하기',
      method: '창밖 구경하고 궁금한 것 말하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 먼저 "구름은 왜 움직일까?"라고 말하면 따라 말한다.', base: '창밖을 1분 본 뒤 스스로 궁금한 것 하나를 말한다.', challenge: '궁금한 것 두 개를 말하고, 하나를 "왜·어디·언제" 묻는 말로 바꾼다.' },
      intro: {
        teacher: '"1분 동안 창밖을 조용히 보아요. 무엇이 보이나요? 무엇이 궁금한가요?" 시연 단추로 구경 차례 카드(창밖 보기 → 하나 고르기 → 말하기)가 놓이는 모습을 보인 뒤 타이머를 켠다. 창가로 몰려가는 학생에게 "자리에서 고개만 돌려 봐요"라고 말한다. "아무것도 없어요"라는 말에는 "하늘 색은요? 나무는 움직이나요?"라고 묻는다. 말한 것을 칠판에 그림으로 모은다.',
        student: '창밖에서 본 것 가운데 궁금한 것 하나를 말해 보아요.',
        demo: { tool: 'timer', options: { title: '창밖 구경', cards: ['말하기', '창밖 보기', '하나 고르기'] }, sequence: [{ order: ['창밖 보기', '하나 고르기', '말하기'] }] },
        art: { draw: 'paper children seated at their desks turning toward a big paper window, outside paper clouds drift, a paper bird flies and a paper tree sways, small question marks float up', banner: '창밖이 궁금해요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '창문은 열지 않고 자리에서 본다. 1분은 우리 반 약속이다.',
    }),
    INQ1({
      id: 'auto.e12.g1-inq.activity.ask', type: 'activity', title: '궁금한 것과 묻는 말 잇기',
      method: '궁금한 것과 묻는 말 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '그림 2개와 묻는 말 카드 2장을 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '그림 3개와 묻는 말 카드를 짝 짓는다.', challenge: '그림 4개와 묻는 말 카드를 짝 짓고, 카드가 섞여 나온다.' },
      activity: {
        title: '궁금한 것을 묻는 말로', tool: 'emotion',
        teacher: '"개미가 궁금해요. 무엇이 궁금할까요? \'개미는 어디 살까?\'처럼 묻는 말로 바꿔 봐요." 짝을 지은 뒤 반 전체가 끝을 올려 묻는 목소리로 읽는다. 구름 그림에 "뭘 먹을까?"를 두는 학생에게 "구름도 밥을 먹을까요? 구름은 무엇을 하는 것 같아요?"라고 묻는다. 묻는 말은 "왜·어디·언제·무엇"으로 시작하면 쉽다고 짚는다.',
        task: '그림과 어울리는 묻는 말 카드를 이어요.', levels: LV,
        items: [
          PAIRS('자연 그림과 묻는 말을 이어요.', [['개미 그림', '어디 살까?'], ['구름 그림', '왜 움직여?'], ['나뭇잎 그림', '왜 떨어져?'], ['달팽이 그림', '뭘 먹을까?']], 0.1),
          PAIRS('교실 물건과 묻는 말을 이어요.', [['자석 그림', '어디 붙을까?'], ['시계 그림', '왜 돌까?'], ['그림자 그림', '왜 생길까?'], ['연필 그림', '뭘로 만들까?']], 0.15),
          PAIRS('날씨 그림과 묻는 말을 이어요.', [['비 그림', '어디서 올까?'], ['무지개 그림', '언제 뜰까?'], ['눈사람 그림', '왜 녹을까?'], ['바람 그림', '어디로 갈까?']], 0.2, { conclude: '궁금한 것은 "왜·어디·언제·무엇"으로 묻는 말로 바꿔요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '묻는 말로 바꿔 써요.', text: '개미는 ___ 살까?', answer: '어디' }] },
    }),
    INQ1({
      id: 'auto.e12.g1-inq.activity.pick', type: 'activity', title: '알아볼 주제 그래프 보기',
      method: '알아보고 싶은 주제 손들어 고르기', tool: 'chart', minutes: 13,
      levels: { easy: '주제 2개(개미·구름)의 그림그래프를 채우고 가장 많은 것을 고른다.', base: '주제 3개(개미·구름·그네)의 그림그래프를 채우고 가장 많은 것을 고른다.', challenge: '주제 3개를 채우고 가장 많은 것을 고른 뒤 두 번째로 많은 것도 고른다.' },
      activity: {
        title: '우리 반 궁금한 주제 정하기', tool: 'chart',
        teacher: '"가상의 1학년 한 반 친구들이 알아보고 싶은 주제에 손을 들었어요. 얼굴 하나가 친구 한 명이에요." 수업을 위해 지은 가상의 손들기라고 먼저 말한다. 표의 수만큼 얼굴을 채운 뒤 반 전체가 손가락으로 센다. 가장 많은 것을 찾을 때 "줄이 가장 긴 것"을 손으로 짚게 한다. 적게 나온 주제를 고른 친구가 서운해하면 "그 주제는 다음 시간에 알아봐요"라고 말해 준다.',
        task: '그림그래프를 채우고 가장 많은 주제를 골라요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '표를 보고 얼굴을 채워요.', toolOptions: PIC('알아보고 싶은 것(가상)', WONDER), target: { build: true }, difficulty: 0.1,
            levels: { easy: { prompt: '두 줄의 얼굴을 채워요.', toolOptions: { data: WONDER.slice(0, 2) } } } },
          { prompt: '가장 많은 주제는 무엇일까요?', toolOptions: PIC('알아보고 싶은 것(가상)', WONDER, { mode: 'read', question: '가장 많은 것은?', choices: ['개미', '구름', '그네'] }), target: { pick: 0 }, difficulty: 0.15,
            levels: { easy: { prompt: '둘 가운데 많은 것은?', toolOptions: { data: WONDER.slice(0, 2), choices: ['개미', '구름'] } } } },
          { prompt: '가장 적은 주제는 무엇일까요?', toolOptions: PIC('알아보고 싶은 것(가상)', WONDER, { mode: 'read', question: '가장 적은 것은?', choices: ['개미', '구름', '그네'] }), target: { pick: 2 }, difficulty: 0.2,
            levels: { easy: { prompt: '둘 가운데 적은 것은?', toolOptions: { data: WONDER.slice(0, 2), choices: ['개미', '구름'] }, target: { pick: 1 } },
              challenge: { prompt: '두 번째로 많은 것은?', toolOptions: { question: '두 번째로 많은 것은?' }, target: { pick: 1 } } },
            conclude: '가장 많은 친구가 고른 주제부터 함께 알아봐요. 다른 주제도 다음에 알아봐요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '그래프에서 가장 많은 주제는?', options: ['개미', '그네'], answer: '개미' }] },
      notes: '그래프 수는 수업용으로 지은 가상의 손들기다. 우리 반에서 실제로 손들기를 할 때는 적게 나온 주제도 다음 차례로 남긴다.',
    }),
    INQ1({
      id: 'auto.e12.g1-inq.activity.how', type: 'activity', title: '알아보는 방법 나누기',
      method: '알아보는 방법 그림 고르기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 3장을 책으로·눈으로·물어서 바구니에 하나씩 넣고, 틀리면 까닭을 말하고 돌아오며 장 수가 보인다.', base: '카드 5장을 세 바구니에 나눈다.', challenge: '카드 7장 가운데 "그냥 잊기"처럼 알아보는 방법이 아닌 2장은 빼고 나눈다.' },
      activity: {
        title: '책으로·눈으로·물어서', tool: 'sortboard',
        teacher: '"개미가 어디 사는지 알고 싶어요. 어떻게 알아볼 수 있을까요?" 카드마다 "이건 책으로? 눈으로? 물어서?" 하고 함께 묻는다. "궁금한 건 어른께 물어보면 돼요"라는 말이 나오면 "물어보는 것도 좋은 방법이에요. 책을 보거나 내 눈으로 직접 볼 수도 있어요"라고 짚는다. 도전 단계에서 "그냥 잊기"를 넣으려는 학생에게 "잊으면 알게 될까요?"라고 묻는다.',
        task: '알아보는 방법 카드를 알맞은 바구니에 나누어요.', levels: SBLV,
        items: [
          SB3('개미를 알아봐요. 나누어요.', { 책으로: ['개미 그림책', '곤충 책'], 눈으로: ['개미집 보기', '돋보기 보기'], 물어서: ['선생님께 묻기', '형에게 묻기'] }, null, ['그냥 잊기', '짐작만 하기'], 0.1),
          SB3('구름을 알아봐요. 나누어요.', { 눈으로: ['하늘 보기', '매일 그리기'], 책으로: ['날씨 그림책', '구름 사진책'], 물어서: ['짝에게 묻기', '선생님께 묻기'] }, null, ['안 보기', '아무렇게 쓰기'], 0.15),
          SB3('그림자를 알아봐요. 나누어요.', { 물어서: ['선생님께 묻기', '친구에게 묻기'], 눈으로: ['손 비춰 보기', '해 보며 보기'], 책으로: ['그림자 책', '그림 사전'] }, null, ['그냥 지나가기', '덮어 두기'], 0.2, { conclude: '궁금하면 책으로, 내 눈으로, 물어서 알아볼 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '알아보는 방법에 ✓ 해요.', options: ['책 보기', '직접 보기', '물어보기', '그냥 잊기'] }] },
      notes: '계획의 "알아보는 방법 칸"은 책으로·눈으로·물어서 세 바구니로 나누었다. 알맞지 않은 카드는 바구니 밖에 남기는 것이 정답이다.',
    }),
    INQ1({
      id: 'auto.e12.g1-inq.activity.order', type: 'activity', title: '알아보는 차례 놓기',
      method: '알아보는 차례 세 장면 놓기', tool: 'story', minutes: 13,
      levels: { easy: '첫 장면(궁금해요)이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '궁금해요 → 알아봐요 → 말해요 세 장면을 차례대로 놓는다.', challenge: '"그냥 잊어요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓은 뒤, 알아봐요 장면에 맞는 방법을 말한다.' },
      activity: {
        title: '궁금해요 → 알아봐요 → 말해요', tool: 'story',
        teacher: '"궁금한 것이 생겼어요. 그다음에는 무엇을 할까요?" 장면을 놓은 뒤 손가락 세 개를 펴며 "궁금해요, 알아봐요, 말해요"를 함께 말한다. "말해요"를 맨 앞에 두는 학생에게 "알아보기 전에 무엇을 말할 수 있을까요?"라고 묻는다. 도전 단계에서는 알아봐요 장면에 앞 활동의 방법(책으로·눈으로·물어서) 가운데 하나를 붙여 말하게 한다.',
        task: '알아보는 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('개미집이 궁금해요. 놓아요.', [{ id: 'q', text: '어디 살까?', motif: 'star' }, { id: 'find', text: '개미집 봐요', motif: 'leaf' }, { id: 'say', text: '짝에게 말해요', motif: 'sun' }], { id: 'skip', text: '그냥 잊어요', motif: 'cloud' }, 0.1),
          ORDER3('달팽이 먹이가 궁금해요.', [{ id: 'q', text: '뭘 먹을까?', motif: 'star' }, { id: 'find', text: '책을 봐요', motif: 'leaf' }, { id: 'say', text: '반에 말해요', motif: 'sun' }], { id: 'skip', text: '안 봐요', motif: 'cloud' }, 0.15),
          ORDER3('무지개가 궁금해요. 놓아요.', [{ id: 'q', text: '언제 뜰까?', motif: 'star' }, { id: 'find', text: '선생님께 물어요', motif: 'leaf' }, { id: 'say', text: '가족에게 말해요', motif: 'sun' }], { id: 'skip', text: '덮어 둬요', motif: 'cloud' }, 0.2,
            { conclude: '궁금하면 알아보고, 알게 된 것을 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '궁금해요 → ___ → 말해요', answer: '알아봐요' }] },
    }),
    INQ1({
      id: 'auto.e12.g1-inq.wrap.show', type: 'wrap', title: '알아낸 것 조각 그림',
      method: '알아낸 것 그림 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '알아낸 것을 조각 1개로 나타낸다(개미 = 동그라미 하나).', base: '조각 3개 이상으로 알아낸 것을 나타낸다.', challenge: '조각 3개 이상으로 꾸미고, 그림 제목을 지어 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 알아낸 것을 조각으로 나타내 볼까요? 개미집이라면 동그라미를 줄줄이 붙여도 돼요." 다 꾸민 뒤 두세 명에게 "무엇을 알아냈나요?"라고 묻는다. 똑같이 만들어야 하느냐는 질문에는 "알아낸 것은 저마다 달라도 돼요"라고 답한다. 출구 2번에서 "그냥 잊어요"를 고른 학생과는 알아보는 방법 세 가지를 한 번 더 떠올린다.',
        exitTicket: [
          PASTE(['circle', 'leaf', 'star', 'semi'], ['알아낸 것을 꾸몄어요', '짝에게 보여 줬어요'], '알아낸 것을 조각으로 꾸며요.', 1),
          CH('궁금하면 어떻게 해요?', ['책·눈·물어서 알아봐요', '그냥 잊어요', '짐작만 해요'], 0, '궁금하면 책으로, 눈으로, 물어서 알아봐요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 알아낸 것',
        items: [
          { type: 'blank', prompt: '내가 궁금했던 것을 써요.', text: '나는 ___이(가) 궁금했어요.', answer: '(궁금했던 것)' },
          { type: 'draw', prompt: '알아낸 것을 그림으로 그려요.' },
        ],
        easy: { note: '궁금했던 것 하나를 떠올려요.', items: [{ type: 'draw', prompt: '궁금했던 것을 그려요.' }] },
      },
    }),
    INQ1({
      id: 'auto.e12.g1-inq.wrap.tell', type: 'wrap', title: '짝에게 알아낸 것 말하기',
      method: '짝에게 알아낸 것 말하기', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 말틀 "나는 ○○을 알아냈어"를 먼저 말하고 그대로 따라 말한다.', base: '짝과 번갈아 말틀로 말하고 들은 것을 점검한다.', challenge: '짝과 말한 뒤 모둠 앞에서 한 사람씩 말틀로 말한다.' },
      wrap: {
        teacher: '"\'나는 개미가 땅속에 산다는 것을 알아냈어\'처럼 말해요. 짝은 눈을 보고 끝까지 들어요." 1분씩 번갈아 말하게 하고 점검 칸에 표시한다. 말틀이 어려운 학생에게 "\'나는 개미를 알아봤어\'까지만 해도 좋아요"라고 말한다. 친구 말에 "그거 틀렸어"라고 하는 학생에게 "친구가 알아낸 것을 먼저 끝까지 듣고, 궁금하면 \'어떻게 알았어?\'라고 물어봐요"라고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '짝에게 말하기' }, prompt: '해 본 것에 표시해요.', target: { selfCheck: ['짝에게 말했어요', '짝 말을 들었어요'] }, difficulty: 0.1 },
          CH('친구가 말할 때 나는요?', ['눈 보고 들어요', '딴 데 봐요', '끼어들어요'], 0, '친구가 말할 때는 눈을 보고 끝까지 들어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '알아낸 것 말하기',
        items: [
          { type: 'blank', prompt: '말틀을 채워 써요.', text: '나는 ___을(를) 알아냈어.', answer: '(알아낸 것)' },
          { type: 'check', prompt: '들을 때 한 것에 ✓ 해요.', options: ['눈 보기', '끝까지 듣기', '"어떻게 알았어?" 묻기'] },
        ],
        easy: { note: '"나는 ○○을 알아냈어."', items: [{ type: 'draw', prompt: '짝에게 말하는 모습을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 교실을 돕고 함께 가꾸기 (프로젝트형 봉사활동)
  const SERVE1 = MOD('auto.e12.g1-serve', [1]);
  const ROOM1 = [{ name: '책꽂이', icon: 'library', at: [0, 0] }, { name: '칠판', icon: 'dot', at: [2, 0] }, { name: '사물함', icon: 'dot', at: [3, 2] }, { name: '창가', icon: 'dot', at: [3, 0] }, { name: '신발장', icon: 'dot', at: [0, 2] }];
  const T_SERVE1 = [
    SERVE1({
      id: 'auto.e12.g1-serve.intro.need', type: 'intro', title: '도움이 필요한 장면 고르기',
      method: '도움이 필요한 장면 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 장면 카드 2장(떨어진 연필·책 읽는 친구)을 읽어 주고 도움이 필요한 쪽을 함께 고른다.', base: '시연을 보고 장면 5장 가운데 도움이 필요한 장면 3장을 말한다.', challenge: '도움이 필요한 장면을 고른 뒤, 하나를 골라 "내가 할 수 있는 일"을 말한다.' },
      intro: {
        teacher: '"우리 교실에서 누군가 도움이 필요한 때는 언제일까요?" 장면 카드를 하나씩 읽어 주고 시연 단추로 도움이 필요한 장면이 바구니에 담기는 모습을 보인다. "도움은 큰일만 하는 거예요"라는 말이 나오면 "떨어진 연필 하나를 주워 주는 것도 도움이에요. 작은 도움도 친구를 웃게 해요"라고 답한다. 오늘은 교실에서 도울 일을 찾고 함께 가꾸기를 계획한다고 밝힌다.',
        student: '교실에서 도와줄 수 있는 일을 하나 떠올려 짝에게 말해 보아요.',
        demo: PICKDEMO('도움이 필요해요', [{ id: 'pencil', text: '떨어진 연필', motif: 'star' }, { id: 'read', text: '책 읽는 친구', motif: 'house' }, { id: 'water', text: '쏟은 물', motif: 'cloud' }, { id: 'smile', text: '웃는 친구', motif: 'sun' }, { id: 'box', text: '무거운 상자', motif: 'house' }], ['pencil', 'water', 'box']),
        art: { draw: 'a paper classroom where one paper child picks up a dropped pencil for a friend, another wipes spilled water with a paper towel, and two children carry a box together', banner: '작은 도움도 도움', extra: [{ motif: 'heart', x: 300, y: 96, color: 'peach' }] },
      },
    }),
    SERVE1({
      id: 'auto.e12.g1-serve.intro.look', type: 'intro', title: '교실 지도에서 가꿀 곳 찾기',
      method: '우리 교실 그림에서 가꿀 곳 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 지도 칸 이름을 읽어 주고 가꿀 곳 1곳(책꽂이)을 함께 짚는다.', base: '시연을 보고 가꿀 곳 2곳(책꽂이·사물함)을 지도와 실제 교실에서 짚는다.', challenge: '2곳에 더해 신발장까지 3곳을 짚고, 무엇을 가꾸면 좋을지 한 마디씩 말한다.' },
      intro: {
        teacher: '"우리 교실 지도예요. 책이 쓰러져 있거나 물건이 섞여 있는 곳은 어디일까요?" 시연 단추로 핀이 책꽂이·사물함·신발장에 차례로 꽂히는 모습을 보이고, 실제 교실의 그 자리를 손으로 가리키게 한다. "청소는 청소하시는 분이 해요"라는 말이 나오면 "우리가 쓰는 교실은 우리가 함께 가꿀 수 있어요. 작은 곳부터 해 볼까요?"라고 답한다.',
        student: '우리 교실에서 가꾸고 싶은 곳을 손가락으로 가리켜 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: ROOM1, title: '우리 교실' }, sequence: [{ place: '책꽂이' }, { place: '사물함' }, { place: '신발장' }] },
        art: { draw: 'a simple paper map of a classroom grid with a bookshelf where books lean over, a cubby with mixed items and a shoe rack, small paper pins marking each spot', banner: '어디를 가꿀까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
      notes: '지도는 단순한 칸 지도다. 우리 교실 배치에 맞게 장소 이름·자리를 바꿔도 된다(start 주제의 "내 자리 찾기"와 달리 가꿀 곳만 찾는다).',
    }),
    SERVE1({
      id: 'auto.e12.g1-serve.activity.help', type: 'activity', title: '내가 할 도움 고르고 보기',
      method: '내가 할 수 있는 도움 고르고 결과 보기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 이어지는 장면이 바로 보인다.', base: '보기 3개, 이어지는 장면은 확인한 뒤에 보인다.', challenge: '보기 3개, 확인 뒤 장면을 보고 "친구가 고맙다고 하면 나는?" 다음 장면을 짝과 말로 이어 간다.' },
      activity: {
        title: '이럴 때 나는 어떻게 도울까?', tool: 'emotion',
        teacher: '"친구가 물을 쏟았어요. 나는 무엇을 할 수 있을까요?" 고른 뒤 이어지는 장면을 함께 보고 "친구 마음은 어떨까요?"라고 묻는다. "모른 척 가요"를 고른 학생에게 "바닥이 젖어 있으면 다른 친구는 어떻게 될까요?"라고 되묻는다. 무거운 상자 장면에서 혼자 들려는 학생에게 "먼저 \'같이 들까?\' 묻고, 너무 무거우면 선생님께 알려요"라고 짚는다.',
        task: '장면을 듣고 내가 할 수 있는 도움을 골라요.', levels: BRLV,
        items: [
          BR('물을 쏟았어요. 어떻게 해요?', '친구가 물을 쏟았어요.', [{ id: 'look', text: '웃으며 구경해요', result: '친구가 더 속상해요.', mood: '속상함' }, { id: 'wipe', text: '휴지를 갖다줘요', result: '함께 닦았어요.', mood: '고마움' }, { id: 'go', text: '모른 척 가요', result: '바닥이 미끄러워요.', mood: '걱정' }], 'wipe', 0.1),
          BR('필통이 쏟아졌어요. 골라요.', '친구 필통이 쏟아졌어요.', [{ id: 'step', text: '그냥 지나가요', result: '연필이 밟혀 부러졌어요.', mood: '속상함' }, { id: 'pick', text: '같이 주워요', result: '금방 다 주웠어요.', mood: '고마움' }, { id: 'mine', text: '내 것만 챙겨요', result: '친구 혼자 주워요.', mood: '걱정' }], 'pick', 0.15),
          BR('상자가 무거워 보여요. 골라요.', '친구가 무거운 상자를 들어요.', [{ id: 'away', text: '못 본 척해요', result: '친구가 힘들어해요.', mood: '걱정' }, { id: 'ask', text: '"같이 들까?" 물어요', result: '둘이 함께 날랐어요.', mood: '뿌듯함' }, { id: 'grab', text: '확 뺏어 들어요', result: '상자가 떨어질 뻔했어요.', mood: '놀람' }], 'ask', 0.2,
            { conclude: '도움이 필요한 친구에게 "도와줄까?" 묻고, 할 수 있는 만큼 함께해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구 필통이 쏟아졌어요. 나는?', options: ['같이 주워요', '그냥 지나가요'], answer: '같이 주워요' }] },
      notes: '장면은 가상이다. 우리 반에서 누가 도와주지 않았는지는 묻지 않는다.',
    }),
    SERVE1({
      id: 'auto.e12.g1-serve.activity.sort', type: 'activity', title: '내가 할 일·어른께 알릴 일',
      method: '내가 할 일·어른께 알릴 일 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "깨진 컵 조각"처럼 헷갈리는 카드가 섞이고, 어른께 알리는 까닭을 말한다.' },
      activity: {
        title: '내가 해요·어른께 알려요', tool: 'sortboard',
        teacher: '"이 일은 내가 할 수 있을까요, 어른께 알려야 할까요?" 카드를 넣을 때마다 "다칠 수 있나?"를 함께 묻는다. 깨진 유리를 "내가 치워요"에 넣는 학생에게 "유리 조각을 손으로 주우면 어떻게 될까요?"라고 묻는다. 도전 단계에서는 어른께 알려요 카드마다 까닭(뜨거워서·날카로워서·높아서)을 한 낱말로 말하게 한다. 돕고 싶은 마음은 좋지만 다칠 수 있는 일은 어른께 알리는 것도 돕는 것이라고 짚는다.',
        task: '내가 할 수 있는 일과 어른께 알릴 일을 나누어요.', levels: SBLV,
        items: [
          SB(['내가 해요', '어른께 알려요'], '교실에서 생긴 일을 나누어요.', ['연필 줍기', '휴지 줍기', '책 꽂기'], ['깨진 유리', '높은 곳 상자', '전기 코드'], ['깨진 컵 조각', '창틀 먼지'], 0.1),
          SB(['내가 해요', '어른께 알려요'], '복도에서 생긴 일을 나누어요.', ['종이 줍기', '신발 놓기', '우산 세우기'], ['넘어진 책장', '물이 샘', '고장 난 문'], ['뜨거운 물', '깨진 화분'], 0.15),
          SB(['내가 해요', '어른께 알려요'], '운동장에서 본 것을 나누어요.', ['공 정리', '줄넘기 감기', '모자 줍기'], ['다친 친구', '모르는 약', '부러진 그네'], ['깨진 병', '뾰족한 철사'], 0.2, { conclude: '내가 할 수 있는 일은 내가 하고, 다칠 수 있는 일은 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '내가 하면 ○, 어른께 알리면 △를 써요.', columns: ['일', '○ / △'], cells: [['연필 줍기', ''], ['깨진 유리', ''], ['책 꽂기', '']], answer: '○, △, ○' }] },
    }),
    SERVE1({
      id: 'auto.e12.g1-serve.activity.plan', type: 'activity', title: '교실 가꾸기 차례 놓기',
      method: '교실 가꾸기 차례 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면(정해요)이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '정해요 → 해요 → 돌아봐요 세 장면을 차례대로 놓는다.', challenge: '"혼자 다 해요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓은 뒤, 모둠에서 누가 무엇을 맡을지 말한다.' },
      activity: {
        title: '정하기 → 하기 → 돌아보기', tool: 'story',
        teacher: '"교실 가꾸기를 하려면 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 손가락 세 개를 펴며 "정해요, 해요, 돌아봐요"를 함께 말한다. "해요"를 맨 앞에 두는 학생에게 "어디를 할지 안 정하고 시작하면 모두 같은 곳에 모이지 않을까요?"라고 묻는다. 돌아보기를 빼려는 학생에게는 "다 했는지, 다음엔 무엇을 더 할지 보는 게 돌아보기예요"라고 짚는다. 도전 단계에서는 모둠마다 맡을 일을 나눠 말하게 한다.',
        task: '교실 가꾸기 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('책꽂이를 가꿔요. 놓아요.', [{ id: 'plan', text: '할 곳 정해요', motif: 'star' }, { id: 'do', text: '책을 꽂아요', motif: 'house' }, { id: 'look', text: '돌아봐요', motif: 'sun' }], { id: 'alone', text: '혼자 다 해요', motif: 'cloud' }, 0.1),
          ORDER3('사물함을 가꿔요. 놓아요.', [{ id: 'plan', text: '맡을 일 정해요', motif: 'star' }, { id: 'do', text: '함께 정리해요', motif: 'house' }, { id: 'look', text: '다 했나 봐요', motif: 'sun' }], { id: 'alone', text: '그냥 둬요', motif: 'cloud' }, 0.15),
          ORDER3('교실 뒤를 가꿔요. 놓아요.', [{ id: 'plan', text: '무엇을 할까?', motif: 'star' }, { id: 'do', text: '종이를 주워요', motif: 'house' }, { id: 'look', text: '깨끗해졌나?', motif: 'sun' }], { id: 'alone', text: '먼저 놀아요', motif: 'cloud' }, 0.2,
            { conclude: '교실 가꾸기는 정하고, 함께 하고, 돌아봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '정해요 → 해요 → ___', answer: '돌아봐요' }] },
    }),
    SERVE1({
      id: 'auto.e12.g1-serve.activity.clean', type: 'activity', title: '모둠별 교실 가꾸기',
      method: '모둠별 교실 가꾸기 하기', tool: 'timer', minutes: 13,
      levels: { easy: '가꾸기 시간을 3분으로 맞추고 교사와 함께 맡은 곳을 가꾼다.', base: '가꾸기 시간을 5분으로 맞추고 모둠이 스스로 맡은 곳을 가꾼 뒤 점검한다.', challenge: '5분 동안 맡은 곳을 가꾸고, 셋째 문항에서 다른 모둠을 도운 것까지 표시한다.' },
      activity: {
        title: '맡은 곳 함께 가꾸기', tool: 'timer',
        teacher: '"1모둠은 사물함, 2모둠은 책꽂이를 맡아요. 타이머가 울릴 때까지 함께 가꿔요." 타이머를 맞춘 뒤 교사 신호로 시작하고 모둠을 돌며 지켜본다. 한 사람만 일하는 모둠에 "모두 한 가지씩 맡았나요?"라고 묻는다. 책을 던져 꽂는 학생에게 "책은 두 손으로 꽂아요"라고 말한다. 일찍 끝난 모둠에게 "다른 모둠에 도움이 필요한지 물어볼까요?"라고 권한다.',
        task: '가꾸기 시간을 맞추고 모둠이 맡은 곳을 함께 가꿔요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '가꾸기 시간을 5분으로 맞춰요.', toolOptions: { title: '교실 가꾸기(우리 반 약속)', labels: ['가꾸기', '쉬기'], plan: { work: 120, rest: 0, rounds: 1 } }, target: { plan: { work: 300 } }, difficulty: 0.1,
            levels: { easy: { prompt: '가꾸기 시간을 3분으로 맞춰요.', target: { plan: { work: 180 } } } } },
          { prompt: '가꿀 때 지킨 것에 표시해요.', toolOptions: { title: '가꾸기 안전', safety: ['책은 두 손으로', '뛰지 않아요', '다 쓰면 제자리'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '우리 모둠이 한 것에 표시해요.', toolOptions: { title: '가꾸기 점검' }, target: { selfCheck: ['맡은 곳을 했어요', '모두 함께 했어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '다른 모둠 돕기도 표시해요.', target: { selfCheck: ['맡은 곳을 했어요', '모두 함께 했어요', '다른 모둠을 도왔어요'] } } },
            conclude: '함께 맡은 곳을 가꾸면 교실이 우리 모두의 것이 돼요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '책을 꽂을 때는요?', options: ['두 손으로 꽂아요', '던져서 꽂아요'], answer: '두 손으로 꽂아요' }] },
      notes: '3분·5분은 우리 반 약속(연습용 값)이다. 걸레·세제는 쓰지 않고 정리만 한다.',
    }),
    SERVE1({
      id: 'auto.e12.g1-serve.wrap.thanks', type: 'wrap', title: '도와준 친구 칭찬 카드',
      method: '도와준 친구 칭찬 카드 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '조각 1개(하트)로 칭찬 카드를 꾸민다.', base: '조각 2개 이상으로 칭찬 카드를 꾸민다.', challenge: '조각 2개 이상으로 꾸미고, 활동지 카드에 친구 이름 글자를 써서 건넨다.' },
      wrap: {
        teacher: '"오늘 가꾸기를 하며 나를 도와준 친구가 있나요? 그 친구에게 줄 칭찬 카드를 꾸며 봐요." 조각을 붙이며 "무엇을 도와줬나요?"라고 묻는다. 줄 친구가 없다는 학생에게 "함께 가꾼 모둠 친구 모두에게 줘도 돼요"라고 말해 준다. 출구 2번에서 "흥"을 고른 학생에게 "도움을 받으면 \'고마워\' 한 마디가 친구를 또 웃게 해요"라고 짚는다.',
        exitTicket: [
          PASTE(['heart', 'star', 'circle', 'leaf'], ['칭찬 카드를 꾸몄어요', '줄 친구를 떠올렸어요'], '칭찬 카드를 꾸며요.', 1),
          CH('친구가 도와줬어요. 나는?', ['"고마워" 말해요', '"흥" 해요', '모른 척해요'], 0, '도움을 받으면 "고마워"라고 말해요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '고마운 친구',
        items: [
          { type: 'blank', prompt: '칭찬 카드를 써요.', text: '___아(야), 도와줘서 고마워!', answer: '(친구 이름)' },
          { type: 'draw', prompt: '함께 가꾸는 모습을 그려요.' },
        ],
        easy: { note: '"고마워"를 떠올려요.', items: [{ type: 'draw', prompt: '칭찬 카드에 하트를 그려요.' }] },
      },
      notes: '칭찬 카드는 반 친구 누구에게나 줄 수 있다. 받지 못한 학생이 없도록 교사가 모둠 카드를 함께 준비한다.',
    }),
    SERVE1({
      id: 'auto.e12.g1-serve.wrap.face', type: 'wrap', title: '깨끗해진 교실 마음 고르기',
      method: '가꾼 교실을 본 마음 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 마음 카드 2장(뿌듯함·화남)만 읽어 주고 함께 고른다.', base: '마음 카드 3장 가운데 깨끗해진 교실을 본 마음을 고른다.', challenge: '마음을 고른 뒤 다음에 가꿀 곳 하나를 쓴다.' },
      wrap: {
        teacher: '"우리가 가꾼 교실을 둘러보아요. 어떤 마음이 드나요?" 출구 1번을 고른 뒤 두세 명에게 까닭을 듣는다. "힘들었어요"라는 말에는 "힘들었는데도 끝까지 했어요. 그래서 뿌듯한 거예요"라고 말해 준다. 다음에 가꿀 곳은 정답이 없으니 저마다 쓰게 하고, 몇 곳은 다음 가꾸기 계획에 넣는다고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '깨끗해진 교실' }], cards: ['뿌듯함', '화남', '편안함'] }, prompt: '드는 마음 카드를 이어요.', target: { match: { s1: ['뿌듯함', '편안함'] } }, difficulty: 0.1 },
          CH('어지러운 곳을 보면요?', ['함께 정리해요', '모른 척해요', '더 어지럽혀요'], 0, '어지러운 곳은 함께 정리하면 금방 깨끗해져요.'),
          { type: 'short', prompt: '다음에 가꿀 곳을 써요.' },
        ],
      },
      worksheet: {
        title: '함께 가꾼 교실',
        items: [
          { type: 'check', prompt: '오늘 한 일에 ✓ 해요.', options: ['할 곳 정하기', '함께 가꾸기', '돌아보기'] },
          { type: 'draw', prompt: '깨끗해진 우리 교실을 그려요.' },
        ],
        easy: { note: '깨끗해진 곳 하나를 떠올려요.', items: [{ type: 'draw', prompt: '깨끗해진 책꽂이를 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 2학기 다시 시작, 2학년 준비 (적응 및 개척 활동)
  const ADAPT1 = MOD('auto.e12.g1-adapt', [1]);
  // 고르기(wordcards pick): yes 4장·no 2장. 기본 5장에서 3장, 쉬움 3장에서 2장, 도전 6장에서 4장
  const WP = (prompt, basket, yes, no, d, more) => ({
    prompt, toolOptions: { mode: 'pick', basket, cards: [yes[0], no[0], yes[1], yes[2], no[1]] }, target: { pick: yes.slice(0, 3).map((c) => c.id) }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [yes[0], no[0], yes[1]] }, target: { pick: [yes[0].id, yes[1].id] } },
      challenge: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [yes[0], no[0], yes[1], yes[2], no[1], yes[3]] }, target: { pick: yes.map((c) => c.id) } },
    },
    ...more,
  });
  const C = (id, text, motif) => ({ id, text, motif });
  const T_ADAPT1 = [
    ADAPT1({
      id: 'auto.e12.g1-adapt.intro.back', type: 'intro', title: '방학 뒤 마음 날씨',
      method: '방학 뒤 마음 날씨 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 2장(신남·걱정)만 읽어 주고 2학기 첫날 마음을 함께 고른다.', base: '시연을 보고 방학 마지막 날과 2학기 첫날, 두 때의 마음을 4장 가운데 고른다.', challenge: '두 때의 마음을 고른 뒤 마음이 바뀐 까닭을 한 마디로 말한다.' },
      intro: {
        teacher: '"방학이 끝나는 마지막 날, 나리는 어떤 마음이었을까요? 오늘 학교에 와서 친구를 만나니 마음이 어떻게 바뀌었을까요?" 시연 단추로 두 때에 마음 카드가 차례로 짝 지어지는 모습을 보인다. "학교 오기 싫었어요"라는 말이 나오면 "그런 마음이 들 수 있어요. 지금 친구를 만나니 조금 달라졌나요?"라고 묻고 마음을 고치라고 하지 않는다. 오늘은 2학기 학교 생활 리듬을 다시 찾는다고 밝힌다.',
        student: '2학기 첫날 내 마음 날씨를 손으로 그려 보아요(해·구름·비).',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '방학 마지막 날' }, { id: 's2', label: '2학기 첫날' }], cards: ['걱정', '신남', '편안함', '졸림'], shuffle: false }, sequence: [{ match: { s1: '걱정' } }, { match: { s1: '걱정', s2: '신남' } }] },
        art: { draw: 'a paper child walking back to a paper school gate at the end of summer, a fading paper sun and clouds on one side and bright paper friends waving on the other', banner: '2학기, 다시 시작', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
      notes: '나리는 가상의 친구다. 방학 동안 무엇을 했는지, 어디에 다녀왔는지는 묻지 않는다(가정 형편이 드러나지 않게).',
    }),
    ADAPT1({
      id: 'auto.e12.g1-adapt.intro.grow', type: 'intro', title: '1년 동안 자란 나',
      method: '1년 동안 자란 나 그림 보기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 몸 그림에서 어깨 1곳을 눌러 보이고 자기 어깨를 짚게 한다.', base: '시연을 보고 어깨·무릎 2곳을 자기 몸에서 짚는다.', challenge: '어깨·무릎·발목 3곳을 짚고, 손이 자란 것은 짝과 손바닥을 대어 본다.' },
      intro: {
        teacher: '"1학년 처음 입학할 때보다 우리는 얼마나 자랐을까요? 어깨가 넓어지고, 다리도 길어졌어요." 시연 단추로 몸 그림의 어깨·무릎·발목이 차례로 골라지는 모습을 보이고, 고를 때마다 자기 몸의 같은 곳을 짚게 한다. "나는 안 컸어요"라는 말이 나오면 "키만 자라는 게 아니에요. 혼자 할 수 있는 일도 많아졌지요"라고 답한다. 키·몸무게를 견주지 않는다.',
        student: '선생님이 고른 곳을 내 몸에서 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['어깨', '팔꿈치', '손목', '무릎', '발목'], names: true }, sequence: [{ parts: ['어깨'] }, { parts: ['어깨', '무릎'] }, { parts: ['어깨', '무릎', '발목'] }] },
        art: { draw: 'a paper child standing next to a paper growth chart on the classroom wall, a smaller paper outline from spring beside a taller outline from autumn, paper leaves falling', banner: '1년 동안 자랐어요', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
      notes: '종이 몸에 손·키 칸이 없어 계획의 "키·손 크기"를 어깨·무릎·발목으로 대신하고, 손 크기는 짝과 손바닥을 대어 보는 것으로 말로 더한다. 키·몸무게를 재거나 견주지 않는다.',
    }),
    ADAPT1({
      id: 'auto.e12.g1-adapt.activity.day', type: 'activity', title: '학교 하루 시계 맞추기',
      method: '학교 하루 시계 다시 맞추기', tool: 'clock', minutes: 14,
      levels: { easy: '정각만 맞추고(긴바늘 12 고정), 짧은바늘이 있어야 할 자리가 연하게 칠해져 있다.', base: '정각만 맞추고 짧은바늘 자리 도움이 없다.', challenge: '30분 단위로 맞추며 작은 눈금이 없고, 둘째 문항은 12시 30분이다.' },
      activity: {
        title: '가상 학교 하루 시각 맞추기', tool: 'clock',
        teacher: '"방학 동안 늦게 일어났던 친구도 이제 학교 시계에 맞춰요. 가상의 학교에서는 9시에 첫 시간이 시작해요." 바늘을 맞춘 뒤 "그 시각에 무엇을 할까요?"라고 묻는다(기다릴 반응: "공부해요", "밥 먹어요"). 1시를 맞출 때 짧은바늘을 12 다음 자리에 놓는 걸 헷갈리는 학생에게 "12 다음은 다시 1이에요"라고 짚는다. 우리 학교 시간표와 다른 것은 괜찮다고 말한다.',
        task: '가상의 학교 시간표 시각을 시계 바늘로 맞춰요.', levels: { easy: { hourOnly: true, hourZone: true }, base: { hourOnly: true }, challenge: { minuteStep: 30, showMinuteMarks: false } },
        items: [
          { prompt: '첫 시간은 9시예요. 맞춰요.', toolOptions: { start: { h: 6, m: 0 } }, target: { h: 9, m: 0 }, difficulty: 0.1 },
          { prompt: '점심은 12시예요. 맞춰요.', toolOptions: { start: { h: 6, m: 0 } }, target: { h: 12, m: 0 }, difficulty: 0.15,
            levels: { challenge: { prompt: '점심은 12시 30분이에요.', target: { h: 12, m: 30 } } } },
          { prompt: '집에 가는 때는 1시예요.', toolOptions: { start: { h: 6, m: 0 } }, target: { h: 1, m: 0 }, difficulty: 0.2,
            conclude: '학교 날에는 학교 시계에 맞춰 하루를 보내요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '가상 학교의 첫 시간은?', options: ['9시', '12시'], answer: '9시' }] },
      notes: '9시·12시(12시 30분)·1시는 가상의 학교 시간표다(우리 학교 시간표로 바꿔도 된다). 학생 집의 일어나는 시각은 묻지 않는다. 계획의 "1개·2개·3개"는 문항 수를 단계마다 같게 두어야 해서 정각 도움(짧은바늘 자리)과 30분 단위로 나누었다.',
    }),
    ADAPT1({
      id: 'auto.e12.g1-adapt.activity.habit', type: 'activity', title: '학교 날 습관 나누기',
      method: '방학 습관·학교 습관 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "아침 거르기"처럼 헷갈리는 카드가 섞이고, 안 맞는 습관 하나를 고쳐 말한다.' },
      activity: {
        title: '학교 날 좋아요·안돼요', tool: 'sortboard',
        teacher: '"방학에는 괜찮았던 습관도 학교 날에는 어떨까요?" 카드를 넣을 때마다 "학교 날 아침이라면?" 하고 함께 묻는다. "늦잠"을 좋아요에 넣는 학생에게 "9시에 첫 시간이 시작하는데 늦잠을 자면 어떻게 될까요?"라고 묻는다. 도전 단계에서는 "늦게 자기 → 일찍 자기"처럼 안 맞는 습관 하나를 고쳐 말하게 한다. 방학 습관이 나빴다고 꾸짖지 않는다.',
        task: '학교 날에 맞는 습관은 좋아요, 아니면 안돼요에 넣어요.', levels: SBLV,
        items: [
          SB(['학교 날 좋아요', '학교 날 안돼요'], '아침 습관을 나누어요.', ['제때 일어나기', '아침 먹기', '세수하기'], ['늦잠 자기', '잠옷으로 가기', '알림장 안 보기'], ['아침 거르기', '누워서 꾸물'], 0.1),
          SB(['학교 날 좋아요', '학교 날 안돼요'], '저녁 습관을 나누어요.', ['가방 챙기기', '일찍 자기', '옷 꺼내 두기'], ['밤늦게 놀기', '늦게 자기', '가방 잊기'], ['자기 전 화면', '숙제 미루기'], 0.15),
          SB(['학교 날 좋아요', '학교 날 안돼요'], '학교에서 습관을 나누어요.', ['종 치면 앉기', '알림장 쓰기', '제자리 정리'], ['수업 중 돌아다님', '하품만 하기', '책 안 꺼내기'], ['쉬는 시간 계속', '책상 위 놀기'], 0.2, { conclude: '학교 날에는 제때 일어나고, 일찍 자고, 수업 시간을 지켜요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '학교 날에 좋으면 ○, 아니면 ×를 써요.', columns: ['습관', '○ / ×'], cells: [['제때 일어나기', ''], ['늦잠 자기', ''], ['가방 챙기기', '']], answer: '○, ×, ○' }] },
    }),
    ADAPT1({
      id: 'auto.e12.g1-adapt.activity.change', type: 'activity', title: '2학년 때 달라지는 것',
      method: '2학년이 되면 달라지는 것 고르기', tool: 'wordcards', minutes: 14,
      levels: { easy: '카드 3장 가운데 2장을 고른다.', base: '카드 5장 가운데 3장을 고른다.', challenge: '카드 6장 가운데 4장을 고른다.' },
      activity: {
        title: '달라지는 것과 그대로인 것', tool: 'wordcards',
        teacher: '"2학년이 되면 무엇이 달라질까요?" 카드를 하나씩 소리 내어 읽고 고르게 한다. "2학년은 다 어려워요"라는 말이 나오면 셋째 문항을 함께 보며 "우리 학교, 내 이름, 고운 말은 그대로예요. 달라지는 것은 조금씩 익히면 돼요"라고 답한다. 내 이름 카드를 달라지는 것에 넣는 학생에게 "2학년이 되면 이름도 바뀔까요?"라고 묻는다.',
        task: '선생님이 말한 것에 맞는 카드를 골라 바구니에 담아요.', levels: { easy: {}, base: {}, challenge: { shuffle: true } },
        items: [
          WP('학교에서 달라지는 것을 골라요.', '달라져요', [C('room', '새 교실', 'house'), C('tea', '새 선생님', 'star'), C('mate', '새 반 친구', 'sun'), C('book', '새 교과서', 'leaf')], [C('school', '우리 학교', 'house'), C('name', '내 이름', 'star')], 0.1),
          WP('나에게 달라지는 것을 골라요.', '달라져요', [C('tall', '키가 커요', 'leaf'), C('big', '언니·형 돼요', 'sun'), C('read', '더 잘 읽어요', 'star'), C('alone', '혼자 해요', 'heart')], [C('me', '나는 나', 'heart'), C('mine', '내 이름', 'star')], 0.15),
          WP('2학년에도 그대로인 것을 골라요.', '그대로예요', [C('school', '우리 학교', 'house'), C('name', '내 이름', 'star'), C('kind', '고운 말', 'heart'), C('rule', '약속 지키기', 'sun')], [C('room', '새 교실', 'house'), C('tea', '새 선생님', 'star')], 0.2, { conclude: '2학년이 되면 달라지는 것도 있지만, 그대로인 것도 많아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '2학년이 되면 달라지는 것에 ✓ 해요.', options: ['새 교실', '새 선생님', '내 이름'] }] },
    }),
    ADAPT1({
      id: 'auto.e12.g1-adapt.activity.help', type: 'activity', title: '새 1학년에게 알려 주기',
      method: '1학년 동생에게 해 줄 말 연습', tool: 'timer', minutes: 13,
      levels: { easy: '알려 주는 차례 카드 첫 두 장만 놓고, 선생님 말을 따라 하며 역할놀이를 한다.', base: '차례 세 장을 놓고 짝과 언니·형과 새 1학년 역할을 바꿔 해 본다.', challenge: '짝과 해 본 뒤 셋째 문항에서 모둠 앞에서 해 본 것까지 표시한다.' },
      activity: {
        title: '언니·형이 되어 알려 주기', tool: 'timer',
        teacher: '"내년 3월, 새 1학년 동생이 학교에 와요. 우리가 2학년 언니·형이 되어 무엇을 알려 줄 수 있을까요?" 차례 카드를 놓은 뒤 교사가 새 1학년 역을 맡아 시범을 보이고 짝끼리 해 본다. 동생 역할에게 "그것도 몰라?"라고 하는 학생에게 "우리도 처음엔 몰랐어요. 어떻게 말하면 동생이 웃을까요?"라고 묻는다. 동생이 울 때는 혼자 달래기보다 선생님께 함께 가는 것도 돕는 일이라고 짚는다.',
        task: '알려 주는 차례를 놓고 짝과 언니·형 역할을 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('알려 주는 차례를 놓아요.', '알려 주기', ['인사하기', '알려 주기', '"궁금해?" 묻기'], 0.1,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['알려 주기', '인사하기'] }, target: { order: ['인사하기', '알려 주기'] } } } }),
          STEPS('동생이 울 때 차례를 놓아요.', '동생이 울어요', ['다가가기', '"괜찮아?" 묻기', '선생님께 함께'], 0.15),
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '언니·형 역할놀이' }, target: { selfCheck: ['동생 역할에게 말했어요', '역할을 바꿨어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '모둠 앞에서도 했나요?', target: { selfCheck: ['동생 역할에게 말했어요', '역할을 바꿨어요', '모둠 앞에서 했어요'] } } },
            conclude: '나도 처음엔 몰랐어요. 다정하게 알려 주는 언니·형이 돼요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '새 1학년 동생에게 하는 말은?', options: ['"궁금하면 물어봐"', '"그것도 몰라?"'], answer: '"궁금하면 물어봐"' }] },
      notes: '역할놀이는 가상의 장면이다. 학생에게 동생이 있는지는 묻지 않는다.',
    }),
    ADAPT1({
      id: 'auto.e12.g1-adapt.wrap.clap', type: 'wrap', title: '"다시 힘차게" 2학기 구호',
      method: '2학기 다짐 구호', tool: 'timer', minutes: 7,
      levels: { easy: '교사를 따라 동작(주먹 쥐고 위로)만 함께 한다.', base: '구호 카드 차례를 놓고 구호와 동작을 함께 한다.', challenge: '구호를 한 뒤 반 다짐 말("일찍 자고")을 바꿔 넣어 다시 외친다.' },
      wrap: {
        teacher: '"다시! (손뼉) 힘차게! (주먹 위로) 2학기 출발! (두 팔 펴기)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 도전 단계에서는 "다시 힘차게, 일찍 자고 출발!"처럼 우리 반 다짐 말을 바꿔 넣는다. 출구 2번에서 "늦잠 자요"를 고른 학생에게 "학교 날에는 학교 시계에 맞춰 일어나요"라고 떠올려 준다. 다른 반 수업에 방해되지 않게 목소리 크기를 정해 둔다.',
        exitTicket: [
          CHANT('2학기 다짐 구호', ['다시', '힘차게', '2학기 출발!']),
          CH('학교 날 아침에는요?', ['제때 일어나요', '늦잠 자요', '학교 안 가요'], 0, '학교 날에는 제때 일어나 학교 시계에 맞춰요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '2학기 다짐',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '다시 힘차게, 2학기 ___!', answer: '출발' },
          { type: 'check', prompt: '2학기에 지킬 다짐에 ✓ 해요.', options: ['일찍 자기', '제때 일어나기', '가방 챙기기'] },
        ],
        easy: { note: '"다시 힘차게!"를 떠올려요.', items: [{ type: 'draw', prompt: '힘차게 팔을 든 내 모습을 그려요.' }] },
      },
    }),
    ADAPT1({
      id: 'auto.e12.g1-adapt.wrap.card', type: 'wrap', title: '2학년의 나 꾸미기',
      method: '2학년의 나 그림 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '조각 2개로 2학년이 된 내 모습을 꾸민다.', base: '조각 4개 이상으로 꾸민다.', challenge: '조각 4개 이상으로 꾸미고, 활동지에 2학년 때 하고 싶은 일을 그린다.' },
      wrap: {
        teacher: '"2학년이 된 나는 어떤 모습일까요? 조금 더 큰 나, 동생에게 알려 주는 나…" 조각으로 꾸미며 "2학년이 되면 무엇을 해 보고 싶나요?"라고 묻는다. "2학년은 무서워요"라는 학생에게 "오늘 알아본 것처럼 그대로인 것도 많아요. 무서운 마음이 들면 선생님께 말해도 돼요"라고 말해 준다. 꾸민 것은 교실 뒤에 붙여 두고 2학년 첫날 다시 본다.',
        exitTicket: [
          PASTE(['circle', 'square', 'star', 'heart', 'triangle'], ['2학년 내 모습을 꾸몄어요', '하고 싶은 일을 떠올렸어요'], '2학년이 된 나를 꾸며요.', 2),
          CH('2학년이 되면 나는요?', ['한 걸음 더 자라요', '모두 어려워요', '아무것도 안 해요'], 0, '2학년이 되면 한 걸음 더 자라요. 그대로인 것도 많아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '2학년의 나',
        items: [
          { type: 'draw', prompt: '2학년이 되면 하고 싶은 일을 그려요.' },
          { type: 'blank', prompt: '빈칸에 써요.', text: '2학년이 되면 나는 ___을(를) 해 보고 싶어요.', answer: '(하고 싶은 일)' },
        ],
        easy: { note: '2학년 교실을 떠올려요.', items: [{ type: 'draw', prompt: '2학년이 된 내 얼굴을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 새 학년 새 친구, 새 마음 (적응 및 개척 활동)
  const ADAPT2 = MOD('auto.e12.g2-adapt', [2]);
  const T_ADAPT2 = [
    ADAPT2({
      id: 'auto.e12.g2-adapt.intro.me', type: 'intro', title: '나를 나타내는 그림 고르기',
      method: '나를 나타내는 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 그림 카드를 하나씩 읽어 주고 나를 나타내는 것 1개를 손들어 고른다.', base: '시연을 보고 나를 나타내는 것 2개를 고른다.', challenge: '3개를 고르고, 그중 하나를 고른 까닭을 짝에게 말한다.' },
      intro: {
        teacher: '"2학년 새 반이에요. 새 친구에게 나를 알려 주려면 무엇을 말하면 좋을까요?" 시연 단추로 가상의 친구 하나가 고른 카드 두 장이 바구니에 담기는 모습을 보이고 "하나는 그림 그리기를 좋아하나 봐요"라고 읽어 준다. 고를 것이 없다는 학생에게 "좋아하는 색, 좋아하는 동물도 나를 나타내요"라고 도와준다. 좋아하는 것은 친구와 달라도 괜찮다고 말한다.',
        student: '나를 나타내는 그림 하나를 골라 손가락으로 가리켜 보아요.',
        demo: PICKDEMO('나를 나타내요', [{ id: 'draw', text: '그림 그리기', motif: 'star' }, { id: 'ball', text: '공놀이', motif: 'sun' }, { id: 'book', text: '책 읽기', motif: 'leaf' }, { id: 'song', text: '노래하기', motif: 'heart' }, { id: 'block', text: '블록 쌓기', motif: 'house' }], ['draw', 'book']),
        art: { draw: 'a paper child holding up two paper picture cards, one of a crayon drawing and one of an open book, in front of a new classroom door with a paper sign for grade two', banner: '나는 이런 친구야', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '가정 형편·가족이 드러나는 카드(여행·집·물건 값)는 쓰지 않는다. 좋아하는 것만 고른다.',
    }),
    ADAPT2({
      id: 'auto.e12.g2-adapt.intro.heart', type: 'intro', title: '낯선 마음 크기 재기',
      method: '새 학년 마음 크기 재기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 눈금 2칸(조금·많이)으로 읽어 주며 낯선 마음 크기를 함께 고른다.', base: '시연을 보고 눈금 3칸에서 내 마음 크기를 손가락으로 나타낸다.', challenge: '아침에 처음 왔을 때와 지금의 마음 크기를 견주어 말한다.' },
      intro: {
        teacher: '"새 교실이 낯설어요. 이 마음이 얼마나 큰지 눈금으로 재 볼까요?" 시연 단추로 눈금이 처음에는 많이, 조금 지나 보통으로 바뀌는 모습을 보인다. "낯선 마음은 숨겨야 해요"라는 말이 나오면 "누구나 새 교실은 낯설어요. 말하면 마음이 조금 가벼워져요"라고 답한다. 오늘은 새 친구를 알아 가고 마음을 달래는 방법을 고른다고 밝힌다.',
        student: '내 낯선 마음 크기를 손가락 하나·둘·셋으로 보여 주어요.',
        demo: { tool: 'emotion', options: { mode: 'scale', situation: '새 교실이 낯설어요.', feeling: '걱정', steps: 3, scaleLabels: { 1: '조금', 2: '보통', 3: '많이' } }, sequence: [{ level: 3 }, { level: 2 }] },
        art: { draw: 'a paper child standing at the doorway of an unfamiliar paper classroom, a paper thermometer-like scale beside them going from big worry to small worry as paper friends wave', banner: '낯선 마음, 얼마나?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '마음 크기는 정답이 없다. 많이 낯설다는 학생은 쉬는 시간에 따로 이야기를 듣는다.',
    }),
    ADAPT2({
      id: 'auto.e12.g2-adapt.activity.ask', type: 'activity', title: '새 친구에게 할 질문',
      method: '새 친구에게 할 질문 고르기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "집 주소는?"처럼 헷갈리는 카드가 섞이고, 내 질문 하나를 만들어 말한다.' },
      activity: {
        title: '물어도 돼요·실례예요', tool: 'sortboard',
        teacher: '"새 친구에게 이렇게 물어도 될까요?" 카드를 넣을 때마다 "이 질문을 들으면 친구 마음은?" 하고 함께 묻는다. "점수 몇 점?"을 물어도 된다고 넣는 학생에게 "점수를 말하고 싶지 않은 친구도 있어요"라고 말한다. 집 주소·전화번호는 친해도 묻지 않는 것이 서로를 지키는 일이라고 짚는다. 도전 단계에서는 "무슨 책 좋아해?"처럼 내 질문 하나를 만들게 한다.',
        task: '물어도 되는 질문과 실례인 질문을 나누어요.', levels: SBLV,
        items: [
          SB(['물어도 돼요', '실례예요'], '처음 만나 묻는 말을 나누어요.', ['좋아하는 놀이?', '좋아하는 색?', '이름이 뭐야?'], ['몸무게는?', '점수 몇 점?', '옷 얼마야?'], ['집 주소는?', '전화번호는?'], 0.1),
          SB(['물어도 돼요', '실례예요'], '쉬는 시간에 묻는 말을 나누어요.', ['같이 놀래?', '뭐 그려?', '좋아하는 동물?'], ['왜 혼자야?', '비밀 말해 봐', '왜 못해?'], ['휴대폰 줘 봐', '사진 찍어도?'], 0.15),
          SB(['물어도 돼요', '실례예요'], '더 친해지는 말을 나누어요.', ['잘하는 놀이?', '좋아하는 책?', '내일 또 놀래?'], ['부모님 직업?', '집이 몇 평?', '왜 그렇게 해?'], ['몇 층 살아?', '용돈 얼마?'], 0.2, { conclude: '좋아하는 것을 묻고, 집·몸·점수처럼 친구가 말하기 싫을 수 있는 것은 묻지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '물어도 되면 ○, 실례면 ×를 써요.', columns: ['질문', '○ / ×'], cells: [['좋아하는 놀이?', ''], ['집 주소는?', ''], ['같이 놀래?', '']], answer: '○, ×, ○' }] },
      notes: '"사진 찍어도?"는 허락을 묻는 말이지만 처음 만난 친구 사진은 찍지 않는 것으로 실례예요에 둔다. 다르게 생각하는 학생의 까닭을 들어 준다.',
    }),
    ADAPT2({
      id: 'auto.e12.g2-adapt.activity.interview', type: 'activity', title: '짝 인터뷰 놀이',
      method: '짝 인터뷰 놀이', tool: 'timer', minutes: 13,
      levels: { easy: '묻기 구간을 두 번(한 사람씩)으로 맞추고, 질문 1개만 묻고 답을 듣는다.', base: '한 사람 1분씩 두 번으로 맞추고 질문 2개를 묻는다.', challenge: '질문 2개를 묻고, 셋째 문항에서 짝을 반에 소개한 것까지 표시한다.' },
      activity: {
        title: '고른 질문으로 짝 인터뷰', tool: 'timer',
        teacher: '"앞에서 고른 \'물어도 돼요\' 질문으로 짝을 인터뷰해요. 한 사람이 1분 묻고, 종이 울리면 바꿔요." 타이머를 맞춘 뒤 교사가 시간을 알려 준다. 답을 듣지 않고 다음 질문을 하는 학생에게 "짝의 대답을 끝까지 듣고 \'그렇구나\' 해 줘요"라고 말한다. 대답하기 싫은 질문에는 "그건 말 안 할래"라고 해도 된다고 미리 알려 준다. 도전 단계에서는 "제 짝은 공놀이를 좋아해요"처럼 짝을 반에 소개한다.',
        task: '인터뷰 시간을 맞추고 고른 질문으로 짝에게 물어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '1분씩 두 번 하게 맞춰요.', toolOptions: { title: '짝 인터뷰(우리 반 약속)', labels: ['묻기', '바꾸기'], plan: { work: 30, rest: 10, rounds: 1 } }, target: { plan: { work: 60, rounds: 2 } }, difficulty: 0.1,
            levels: { easy: { prompt: '두 번 하게 맞춰요.', target: { plan: { rounds: 2 } } } } },
          STEPS('인터뷰 차례를 놓아요.', '짝 인터뷰', ['질문하기', '끝까지 듣기', '"고마워"'], 0.15),
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '인터뷰 점검' }, target: { selfCheck: ['질문을 했어요', '짝 답을 들었어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '짝 소개도 표시해요.', target: { selfCheck: ['질문을 했어요', '짝 답을 들었어요', '짝을 소개했어요'] } } },
            conclude: '질문하고, 끝까지 듣고, "고마워"라고 하면 새 친구와 가까워져요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '짝에게 들은 것을 써요.', text: '내 짝은 ___을(를) 좋아해요.', answer: '(짝이 좋아하는 것)' }] },
      notes: '1분·두 번은 우리 반 약속(연습용 값)이다. 짝이 말하기 싫어한 것은 반에 소개하지 않는다.',
    }),
    ADAPT2({
      id: 'auto.e12.g2-adapt.activity.calm', type: 'activity', title: '떨릴 때 할 일 고르고 보기',
      method: '마음 달래는 방법 고르고 결과 보기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개, 고르면 이어지는 장면이 바로 보인다.', base: '보기 3개, 이어지는 장면은 확인한 뒤에 보인다.', challenge: '보기 3개, 확인 뒤 장면을 보고 "그다음엔 무엇을 할까?" 다음 장면을 짝과 말로 이어 간다.' },
      activity: {
        title: '긴장될 때 나는?', tool: 'emotion',
        teacher: '"발표 차례가 와서 가슴이 쿵쾅거려요. 어떻게 하면 마음이 가라앉을까요?" 고른 뒤 이어지는 장면을 함께 본다. "꾹 참고 숨겨요"를 고른 학생에게 "숨기면 마음이 가벼워질까요, 무거워질까요?"라고 묻는다. 걱정되는 마음은 누구에게나 있고, 숨 쉬기·말하기로 달랠 수 있다고 짚는다. 장면은 가상이며 학생에게 무엇이 무서운지 꺼내게 하지 않는다.',
        task: '장면을 듣고 마음을 달래는 방법을 골라요.', levels: BRLV,
        items: [
          BR('발표 차례예요. 어떻게 해요?', '발표 차례가 와서 떨려요.', [{ id: 'hide', text: '꾹 참고 숨겨요', result: '마음이 더 무거워요.', mood: '걱정' }, { id: 'breath', text: '숨 크게 쉬어요', result: '조금 편해졌어요.', mood: '편안함' }, { id: 'run', text: '교실 밖으로 가요', result: '선생님이 걱정하셔요.', mood: '놀람' }], 'breath', 0.1),
          BR('교실이 낯설어요. 골라요.', '새 교실이 낯설어요.', [{ id: 'cry', text: '혼자 엎드려요', result: '아무도 몰라요.', mood: '속상함' }, { id: 'tell', text: '선생님께 말해요', result: '선생님이 함께 둘러봐요.', mood: '편안함' }, { id: 'loud', text: '크게 소리쳐요', result: '친구들이 놀랐어요.', mood: '놀람' }], 'tell', 0.15),
          BR('모르는 친구가 많아요. 골라요.', '모르는 친구가 많아요.', [{ id: 'away', text: '구석에 숨어요', result: '혼자 쉬는 시간이 길어요.', mood: '속상함' }, { id: 'hi', text: '"안녕" 해 봐요', result: '친구도 "안녕" 해요.', mood: '기쁨' }, { id: 'push', text: '먼저 밀어요', result: '친구가 깜짝 놀라요.', mood: '화남' }], 'hi', 0.2,
            { conclude: '떨리고 낯설 때는 숨을 크게 쉬고, 말하고, 먼저 "안녕" 해 봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '긴장될 때 해 볼 일은?', options: ['숨 크게 쉬기', '꾹 참고 숨기기'], answer: '숨 크게 쉬기' }] },
    }),
    ADAPT2({
      id: 'auto.e12.g2-adapt.activity.breath', type: 'activity', title: '숨 쉬기로 마음 달래기',
      method: '숨 쉬기로 마음 달래기 연습', tool: 'timer', minutes: 13,
      levels: { easy: '숨 쉬기를 1번 하도록 맞추고 교사의 "들이쉬고, 내쉬고"를 따라 한다.', base: '숨 쉬기를 3번 하도록 맞추고 차례 카드대로 크게 숨 쉰다.', challenge: '3번을 맞추고, 셋째 문항에서 교사 신호 없이 혼자 세며 한 것까지 표시한다.' },
      activity: {
        title: '크게 숨 쉬기 세 번', tool: 'timer',
        teacher: '"코로 꽃 냄새를 맡듯 들이쉬고, 잠깐 멈췄다가, 입으로 촛불을 끄듯 후 내쉬어요." 타이머를 맞춘 뒤 교사 신호에 맞춰 반 전체가 한다. 너무 세게 들이쉬어 어지럽다는 학생에게 "편하게, 천천히 해도 돼요. 어지러우면 멈추고 쉬어요"라고 말한다. 장난으로 숨을 오래 참는 학생에게는 "참는 놀이가 아니에요. 편하게 내쉬어요"라고 짚는다. 끝난 뒤 마음이 어떤지 손가락으로 보여 주게 한다.',
        task: '숨 쉬기 횟수를 맞추고 차례대로 크게 숨 쉬어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '숨 쉬기를 세 번 하게 맞춰요.', toolOptions: { title: '크게 숨 쉬기(우리 반 약속)', labels: ['숨 쉬기', '쉬기'], plan: { work: 5, rest: 3, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.1,
            levels: { easy: { prompt: '숨 쉬기를 한 번 하게 맞춰요.', toolOptions: { plan: { work: 5, rest: 3, rounds: 2 } }, target: { plan: { rounds: 1 } } } } },
          STEPS('숨 쉬는 차례를 놓아요.', '크게 숨 쉬기', ['코로 들이쉬기', '잠깐 멈추기', '입으로 내쉬기'], 0.15),
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '숨 쉬기 점검' }, target: { selfCheck: ['크게 숨 쉬었어요', '마음이 조금 편해요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '혼자 세며 했나요?', target: { selfCheck: ['크게 숨 쉬었어요', '마음이 조금 편해요', '혼자 세며 했어요'] } } },
            conclude: '떨릴 때는 코로 들이쉬고, 멈추고, 입으로 후 내쉬어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '코로 들이쉬고, 잠깐 멈추고, 입으로 ___', answer: '내쉬어요' }] },
      notes: '한 번 5초·쉬기 3초·세 번은 우리 반 약속(연습용 값)이다. 숨을 오래 참지 않게 하고, 어지러운 학생은 바로 쉬게 한다.',
    }),
    ADAPT2({
      id: 'auto.e12.g2-adapt.wrap.card', type: 'wrap', title: '나 소개 카드 꾸미기',
      method: '나 소개 카드 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '얼굴과 좋아하는 것을 조각 3개로 꾸민다.', base: '조각 5개 이상으로 소개 카드를 꾸민다.', challenge: '조각 5개 이상으로 꾸미고 배경(바탕) 조각까지 깔아 카드를 완성한다.' },
      wrap: {
        teacher: '"새 친구에게 보여 줄 나 소개 카드를 만들어요. 동그라미로 얼굴을, 별·하트로 좋아하는 것을 나타내요." 다 꾸민 뒤 짝과 카드를 바꿔 보고 "무엇을 좋아하는 것 같아?"라고 서로 맞혀 보게 한다. 친구 카드를 보고 놀리는 말이 나오면 "좋아하는 것은 저마다 달라요. 다른 것을 알게 되면 더 친해져요"라고 말한다. 출구 2번에서 "몸무게 몇이야?"를 고른 학생과 실례인 질문을 한 번 더 떠올린다.',
        exitTicket: [
          PASTE(['circle', 'semi', 'star', 'heart', 'square', 'leaf'], ['얼굴을 붙였어요', '좋아하는 것을 붙였어요'], '나 소개 카드를 꾸며요.', 3),
          CH('새 친구에게 묻기 좋은 말은?', ['"뭘 좋아해?"', '"몸무게 몇이야?"', '"집 주소는?"'], 0, '좋아하는 것을 물으면 새 친구와 가까워져요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '나를 소개해요',
        items: [
          { type: 'blank', prompt: '나를 소개해요.', text: '나는 ___을(를) 좋아해요.', answer: '(좋아하는 것)' },
          { type: 'draw', prompt: '좋아하는 것을 하는 내 모습을 그려요.' },
        ],
        easy: { note: '좋아하는 것 하나를 떠올려요.', items: [{ type: 'draw', prompt: '내 얼굴을 그려요.' }] },
      },
    }),
    ADAPT2({
      id: 'auto.e12.g2-adapt.wrap.face', type: 'wrap', title: '새 친구 떠올리며 마음 고르기',
      method: '새 친구 한 명 떠올리며 마음 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 마음 카드 2장(반가움·화남)만 읽어 주고 함께 고른다.', base: '마음 카드 3장 가운데 새로 알게 된 친구를 떠올린 마음을 고른다.', challenge: '마음을 고른 뒤 그 친구에게 할 말을 한 줄 쓴다.' },
      wrap: {
        teacher: '"오늘 새로 알게 된 친구를 한 명 떠올려 보아요. 어떤 마음이 드나요?" 출구 1번을 고른 뒤 이름은 말하지 않아도 된다고 알린다. 떠올릴 친구가 없다는 학생에게 "오늘 인터뷰한 짝은 어때요?"라고 도와준다. 출구 2번에서 "꾹 숨겨요"를 고른 학생에게 "걱정되는 마음은 말하고 숨 쉬면 가벼워져요"라고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '새로 알게 된 친구' }], cards: ['반가움', '화남', '고마움'] }, prompt: '드는 마음 카드를 이어요.', target: { match: { s1: ['반가움', '고마움'] } }, difficulty: 0.1 },
          CH('새 학년이 걱정되면요?', ['말하고 숨 쉬어요', '꾹 숨겨요', '혼자 참아요'], 0, '걱정되는 마음은 말하고 크게 숨 쉬면 가벼워져요.'),
          { type: 'short', prompt: '새 친구에게 할 말을 써요.' },
        ],
      },
      worksheet: {
        title: '새 학년 새 친구',
        items: [
          { type: 'check', prompt: '오늘 해 본 것에 ✓ 해요.', options: ['짝에게 질문하기', '크게 숨 쉬기', '먼저 "안녕" 하기'] },
          { type: 'draw', prompt: '새 친구와 함께 노는 모습을 그려요.' },
        ],
        easy: { note: '오늘 만난 짝을 떠올려요.', items: [{ type: 'draw', prompt: '짝의 웃는 얼굴을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 시간 약속과 질서 (기본생활습관 형성 활동 — 자기 관리·민주시민 의식)
  const HABIT2 = MOD('auto.e12.g2-habit', [2]);
  // 하루 일과 나누기(story sort): 아침·낮·저녁 3칸에 2장씩. 쉬움 아침·저녁 2칸(4장), 도전 칸에 시각이 붙고 엉뚱한 카드 1장이 섞임
  const DAY3 = (prompt, am, noon, pm, wrong, d, more) => {
    const ids = (a) => a.map((c) => c.id);
    return {
      prompt, toolOptions: { mode: 'sort', slots: [{ id: 'am', label: '아침' }, { id: 'noon', label: '낮' }, { id: 'pm', label: '저녁' }], cards: [pm[0], am[0], noon[0], pm[1], am[1], noon[1]] },
      target: { sort: { am: ids(am), noon: ids(noon), pm: ids(pm) } }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(2칸).`, toolOptions: { slots: [{ id: 'am', label: '아침' }, { id: 'pm', label: '저녁' }], cards: [pm[0], am[0], pm[1], am[1]] }, target: { sort: { am: ids(am), pm: ids(pm) } } },
        challenge: { prompt: `${cut(prompt)}(시각도).`, toolOptions: { slots: [{ id: 'am', label: '아침', sub: '8시' }, { id: 'noon', label: '낮', sub: '12시' }, { id: 'pm', label: '저녁', sub: '7시' }], cards: [pm[0], am[0], wrong, noon[0], pm[1], am[1], noon[1]] } },
      },
      ...more,
    };
  };
  const T_HABIT2 = [
    HABIT2({
      id: 'auto.e12.g2-habit.intro.time', type: 'intro', title: '하루 할 일 시각 맞추기',
      method: '하루 시계에서 할 일 시각 맞추기', tool: 'clock', minutes: 6,
      levels: { easy: '교사가 정각 1개(9시)만 맞춰 보이고 "9시에 공부해요"를 함께 말한다.', base: '시연에서 정각 2개(9시·3시)를 보고 그때 할 일을 말한다.', challenge: '시연 끝의 3시 30분을 보고 짧은바늘이 3과 4 사이에 있는 까닭을 말한다.' },
      intro: {
        teacher: '"하나는 9시에 공부해요. 3시에는 놀이터에서 친구와 만나기로 약속했어요." 시연 단추로 9시·3시·3시 30분이 차례로 나오는 모습을 보이고, 시각마다 "이때 하나는 무엇을 할까요?"라고 묻는다. "시계 안 봐도 엄마가 알려 줘요"라는 말이 나오면 "약속 시각은 나도 알아야 친구를 기다리게 하지 않아요"라고 답한다. 오늘은 하루 일과에 맞춰 시간 약속을 지키는 법을 알아본다고 밝힌다.',
        student: '"9시!" 하면 두 팔로 9시 바늘을 만들어 보아요.',
        demo: { tool: 'clock', options: { minuteStep: 30, showDigital: true }, sequence: [{ h: 9, m: 0 }, { h: 3, m: 0 }, { h: 3, m: 30 }] },
        art: { draw: 'a paper child looking at a large round paper clock on a wall while a small paper calendar page shows a sun for morning study and a slide for afternoon play', banner: '몇 시에 무엇을?', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
      notes: '9시·3시는 가상의 친구 하나의 하루다. 학생 집의 일과·시각은 묻지 않는다.',
    }),
    HABIT2({
      id: 'auto.e12.g2-habit.intro.place', type: 'intro', title: '여럿이 함께 쓰는 곳',
      method: '공공장소 그림 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 2장(도서관·내 방)을 읽어 주고 여럿이 쓰는 곳을 함께 고른다.', base: '시연을 보고 카드 6장 가운데 여럿이 쓰는 곳 3장을 말한다.', challenge: '여럿이 쓰는 곳 4장을 고르고, 한 곳에서 지킬 약속을 말한다.' },
      intro: {
        teacher: '"이곳은 나 혼자 쓰는 곳일까요, 여럿이 함께 쓰는 곳일까요?" 카드를 하나씩 읽어 주고 시연 단추로 도서관·버스·놀이터 카드가 바구니에 담기는 모습을 보인다. "놀이터는 먼저 온 사람 거예요"라는 말이 나오면 "놀이터는 모두의 것이에요. 그래서 차례가 필요해요"라고 답한다. 여럿이 함께 쓰는 곳에서 지키는 것을 질서라고 한다고 알린다.',
        student: '여럿이 함께 쓰는 곳 하나를 떠올려 짝에게 말해 보아요.',
        demo: PICKDEMO('여럿이 함께 써요', [{ id: 'lib', text: '도서관', motif: 'house' }, { id: 'myroom', text: '내 방', motif: 'heart' }, { id: 'bus', text: '버스', motif: 'star' }, { id: 'desk', text: '내 책상', motif: 'leaf' }, { id: 'play', text: '놀이터', motif: 'sun' }, { id: 'park', text: '공원', motif: 'leaf' }], ['lib', 'bus', 'play']),
        art: { draw: 'a paper town scene with a paper library, a paper bus at a stop and a paper playground, small paper people waiting in neat lines at each place', banner: '함께 쓰는 곳', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
      notes: '특정 시설·지역 이름은 쓰지 않는다(우리 동네 ○○도서관 대신 "도서관").',
    }),
    HABIT2({
      id: 'auto.e12.g2-habit.activity.plan', type: 'activity', title: '하루 일과 세 칸 정하기',
      method: '하루 일과 세 칸 정하기', tool: 'story', minutes: 14,
      levels: { easy: '아침·저녁 2칸에 할 일 카드 4장을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '아침·낮·저녁 3칸에 할 일 카드 6장을 놓는다.', challenge: '칸에 시각(8시·12시·7시)이 붙고, 엉뚱한 카드 1장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '아침·낮·저녁 할 일', tool: 'story',
        teacher: '"하나의 하루예요. 이 일은 아침에 할까요, 낮에 할까요, 저녁에 할까요?" 카드를 놓을 때마다 반 전체가 "아침에 일어나요"처럼 소리 내어 읽는다. "잠자기"를 아침 칸에 두는 학생에게 "아침에 잠을 자면 학교에 언제 갈까요?"라고 묻는다. 때에 맞는 일을 정해 두면 시간 약속을 지키기 쉽다고 짚는다. 도전 단계의 시각은 가상의 하루라고 말한다.',
        task: '할 일 카드를 아침·낮·저녁 칸에 나누어 놓아요.', levels: LV,
        items: [
          DAY3('하나의 학교 날이에요. 놓아요.', [{ id: 'wake', text: '일어나기', motif: 'sun' }, { id: 'wash', text: '세수하기', motif: 'cloud' }], [{ id: 'study', text: '공부하기', motif: 'star' }, { id: 'lunch', text: '점심 먹기', motif: 'house' }], [{ id: 'bath', text: '씻기', motif: 'cloud' }, { id: 'sleep', text: '잠자기', motif: 'heart' }], { id: 'odd', text: '한밤 놀이터', motif: 'star' }, 0.1),
          DAY3('하나의 준비하는 하루예요.', [{ id: 'bag', text: '가방 메기', motif: 'house' }, { id: 'eat', text: '아침 먹기', motif: 'sun' }], [{ id: 'read', text: '책 읽기', motif: 'leaf' }, { id: 'play', text: '놀이 시간', motif: 'star' }], [{ id: 'ready', text: '내일 준비', motif: 'house' }, { id: 'diary', text: '그림일기', motif: 'leaf' }], { id: 'odd', text: '아침 잠자기', motif: 'cloud' }, 0.15),
          DAY3('하나의 약속이 있는 날이에요.', [{ id: 'go', text: '학교 가기', motif: 'house' }, { id: 'hi', text: '친구 만나기', motif: 'heart' }], [{ id: 'park', text: '놀이터 약속', motif: 'sun' }, { id: 'snack', text: '간식 먹기', motif: 'star' }], [{ id: 'dinner', text: '저녁 먹기', motif: 'house' }, { id: 'tooth', text: '이 닦기', motif: 'cloud' }], { id: 'odd', text: '새벽 외출', motif: 'star' }, 0.2,
            { conclude: '때에 맞는 할 일을 정해 두면 시간 약속을 지키기 쉬워요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '언제 하는 일인지 써요.', columns: ['할 일', '아침 / 낮 / 저녁'], cells: [['일어나기', ''], ['공부하기', ''], ['잠자기', '']], answer: '아침, 낮, 저녁' }] },
      notes: '하나는 가상의 친구다. 학생의 하루 일과·저녁에 하는 일은 묻지 않는다. 8시·12시·7시는 가상의 시각이다.',
    }),
    HABIT2({
      id: 'auto.e12.g2-habit.activity.late', type: 'activity', title: '늦었을 때 친구 마음 보기',
      method: '늦었을 때 결과 보기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개, 고르면 이어지는 장면이 바로 보인다.', base: '보기 3개, 이어지는 장면은 확인한 뒤에 보인다.', challenge: '보기 3개, 확인 뒤 장면을 보고 "다음 약속은 어떻게 지킬까?" 다음 장면을 짝과 말로 이어 간다.' },
      activity: {
        title: '약속에 늦었어요', tool: 'emotion',
        teacher: '"하나가 3시 놀이터 약속에 늦었어요. 기다리는 친구는 어떤 마음일까요?" 고른 뒤 이어지는 장면을 보고 친구 마음을 함께 말한다. "나 혼자 늦는 건 괜찮아요"라는 말이 나오면 "기다리는 친구는 그동안 무엇을 할 수 있었을까요?"라고 되묻는다. 늦었을 때는 "늦어서 미안해"라고 말하고 다음엔 일찍 출발하는 것이 약속을 지키는 방법이라고 짚는다.',
        task: '늦은 장면을 듣고 할 일을 골라 친구 마음을 봐요.', levels: BRLV,
        items: [
          BR('약속에 늦었어요. 어떻게 해요?', '놀이터 약속에 늦었어요.', [{ id: 'quiet', text: '말없이 놀아요', result: '친구가 서운해요.', mood: '속상함' }, { id: 'sorry', text: '"늦어서 미안해"', result: '친구가 "괜찮아" 해요.', mood: '편안함' }, { id: 'blame', text: '"네가 일렀잖아"', result: '친구가 화가 났어요.', mood: '화남' }], 'sorry', 0.1),
          BR('모둠 시간에 늦었어요. 골라요.', '모둠 놀이 시작에 늦었어요.', [{ id: 'push', text: '끼어들어요', result: '놀이가 멈췄어요.', mood: '화남' }, { id: 'ask', text: '"같이 해도 돼?"', result: '모둠이 자리를 내줘요.', mood: '고마움' }, { id: 'sulk', text: '안 한다고 해요', result: '모둠이 한 명 모자라요.', mood: '속상함' }], 'ask', 0.15),
          BR('책 반납 날이에요. 골라요.', '도서관 책 반납 날이에요.', [{ id: 'later', text: '다음에 줘요', result: '다른 친구가 못 빌려요.', mood: '속상함' }, { id: 'today', text: '오늘 반납해요', result: '친구가 책을 빌렸어요.', mood: '기쁨' }, { id: 'hide', text: '모른 척해요', result: '사서 선생님이 찾아요.', mood: '걱정' }], 'today', 0.2,
            { conclude: '시간 약속을 지키면 친구를 기다리게 하지 않아요. 늦으면 "미안해" 하고 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '약속에 늦었을 때 하는 말은?', options: ['"늦어서 미안해"', '"네가 일렀잖아"'], answer: '"늦어서 미안해"' }] },
    }),
    HABIT2({
      id: 'auto.e12.g2-habit.activity.order', type: 'activity', title: '질서 있는 모습 나누기',
      method: '질서 있는 모습·없는 모습 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "친구 자리 맡기"처럼 헷갈리는 카드가 섞이고, 질서 없는 모습 하나를 까닭과 함께 말한다.' },
      activity: {
        title: '함께 쓰는 곳 질서', tool: 'sortboard',
        teacher: '"도서관에서 이렇게 하면 질서 있는 모습일까요?" 카드를 넣을 때마다 "여기 있는 다른 사람은 어떨까?" 하고 묻는다. "친구 자리 맡기"를 질서 있어요에 넣는 학생에게 "줄 선 뒷사람은 어떤 마음일까요?"라고 묻는다. 도전 단계에서는 질서 없는 모습 하나를 골라 까닭(시끄러워서·다칠 수 있어서)을 말하게 한다.',
        task: '질서 있는 모습과 없는 모습을 나누어요.', levels: SBLV,
        items: [
          SB(['질서 있어요', '질서 없어요'], '도서관 모습을 나누어요.', ['조용히 걷기', '제자리에 꽂기', '차례로 빌리기'], ['뛰어다니기', '크게 떠들기', '책 던지기'], ['친구 자리 맡기', '책 몰래 접기'], 0.1),
          SB(['질서 있어요', '질서 없어요'], '버스 타는 모습을 나누어요.', ['줄 서서 타기', '내릴 때 기다리기', '손잡이 잡기'], ['밀고 타기', '뛰어 타기', '좌석에 서기'], ['새치기하기', '문에 기대기'], 0.15),
          SB(['질서 있어요', '질서 없어요'], '놀이터 모습을 나누어요.', ['미끄럼틀 줄 서기', '그네 차례 바꾸기', '쓰레기 버리기'], ['거꾸로 오르기', '그네 혼자 오래', '모래 뿌리기'], ['줄 옆에 끼기', '놀이 기구 맡기'], 0.2, { conclude: '여럿이 함께 쓰는 곳에서는 차례를 지키고 조용히, 안전하게 써요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '질서 있으면 ○, 없으면 ×를 써요.', columns: ['모습', '○ / ×'], cells: [['줄 서서 타기', ''], ['뛰어다니기', ''], ['조용히 걷기', '']], answer: '○, ×, ○' }] },
    }),
    HABIT2({
      id: 'auto.e12.g2-habit.activity.practice', type: 'activity', title: '도서관 질서 연습',
      method: '도서관 이용 질서 연습하기', tool: 'timer', minutes: 13,
      levels: { easy: '도서관 이용 차례 카드 첫 두 장만 놓고, 교사와 함께 도서관에서 연습한다.', base: '차례 세 장을 놓고 스스로 도서관 약속을 지키며 점검 칸에 표시한다.', challenge: '스스로 연습한 뒤 셋째 문항에서 친구에게 책 꽂는 곳을 안내한 것까지 표시한다.' },
      activity: {
        title: '학교 도서관에서 해 보기', tool: 'timer',
        teacher: '"학교 도서관에 가서 조용히 걷기, 책 고르기, 제자리에 꽂기를 해 볼 거예요." 차례 카드를 놓은 뒤 줄 서서 이동하고, 도서관에서는 손짓으로 신호를 주고받는다. 책을 아무 칸에 꽂는 학생에게 "책 등의 숫자·글자를 보고 원래 있던 자리에 꽂아요"라고 알려 준다. 친구를 부르려고 큰 소리를 내는 학생에게 "가까이 가서 어깨를 살짝 두드려요"라고 말한다. 돌아와서 점검 칸에 표시한다.',
        task: '도서관 이용 차례를 놓고 도서관에서 직접 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('도서관 이용 차례를 놓아요.', '도서관 이용', ['조용히 들어가기', '책 고르기', '제자리에 꽂기'], 0.1,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['책 고르기', '조용히 들어가기'] }, target: { order: ['조용히 들어가기', '책 고르기'] } } } }),
          { prompt: '도서관에서 지킨 것에 표시해요.', toolOptions: { title: '도서관 질서', safety: ['조용히 걸었어요', '책은 두 손으로', '뛰지 않았어요'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '도서관 연습' }, target: { selfCheck: ['책을 골랐어요', '제자리에 꽂았어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '친구 안내도 표시해요.', target: { selfCheck: ['책을 골랐어요', '제자리에 꽂았어요', '친구를 안내했어요'] } } },
            conclude: '도서관에서는 조용히 걷고, 책은 두 손으로 제자리에 꽂아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '다 본 책은 어떻게 해요?', options: ['제자리에 꽂아요', '아무 데나 둬요'], answer: '제자리에 꽂아요' }] },
      notes: '도서관 이동 전에 사서 교사·도서관 담당과 시간을 맞춘다. 도서관에 갈 수 없으면 교실 학급 문고에서 같은 차례로 연습한다.',
    }),
    HABIT2({
      id: 'auto.e12.g2-habit.wrap.sticker', type: 'wrap', title: '시간 약속 지킨 날 별',
      method: '시간 약속 지킨 날 별 붙이기', tool: 'collage', minutes: 7,
      levels: { easy: '오늘 지킨 시간 약속 하나를 떠올려 별 1개를 붙인다.', base: '지킨 시간 약속 두 가지만큼 별 2개를 붙인다.', challenge: '별 3개를 붙이고 별마다 어떤 약속이었는지 말한다.' },
      wrap: {
        teacher: '"오늘 지킨 시간 약속이 있나요? 수업 시작에 앉기, 모둠 시간 지키기…" 떠올린 만큼 별을 붙이게 한다. 별을 못 붙이겠다는 학생에게 "오늘 도서관 차례를 지킨 것도 약속이에요"라고 찾아 준다. 친구와 별 수를 견주는 말이 나오면 "별은 내 하루판이에요. 내일 하나 더 늘리면 돼요"라고 말한다. 출구 2번에서 "모른 척해요"를 고른 학생과 늦었을 때 할 말을 한 번 더 떠올린다.',
        exitTicket: [
          PASTE(['star', 'circle', 'heart'], ['지킨 약속만큼 별을 붙였어요'], '지킨 시간 약속만큼 별을 붙여요.', 1),
          CH('친구와 약속에 늦으면요?', ['"미안해" 하고 알려요', '모른 척해요', '화를 내요'], 0, '늦었을 때는 "미안해"라고 말하고 다음엔 일찍 나서요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '시간 약속을 지켜요',
        items: [
          { type: 'check', prompt: '내가 지킬 시간 약속에 ✓ 해요.', options: ['수업 시작에 앉기', '친구 약속 지키기', '책 제날 반납'] },
          { type: 'draw', prompt: '약속 시각에 맞춰 가는 내 모습을 그려요.' },
        ],
        easy: { note: '시계를 떠올려요.', items: [{ type: 'draw', prompt: '약속 시각의 시계를 그려요.' }] },
      },
    }),
    HABIT2({
      id: 'auto.e12.g2-habit.wrap.chant', type: 'wrap', title: '"차례차례 조용히" 구호',
      method: '질서 구호로 마치기', tool: 'timer', minutes: 7,
      levels: { easy: '교사를 따라 동작(줄 서는 손, 입에 검지)만 함께 한다.', base: '구호 카드 차례를 놓고 구호와 동작을 함께 한다.', challenge: '구호를 한 뒤 "버스에서는 손잡이"처럼 장소에 맞게 구호를 바꿔 외친다.' },
      wrap: {
        teacher: '"차례차례! (한 줄로 손 모으기) 조용히! (입에 검지) 함께 써요! (두 팔 벌려 원)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 도전 단계에서는 "차례차례, 손잡이 잡고, 함께 타요!"처럼 버스에 맞게 바꿔 본다. 출구 2번에서 "먼저 밀고 타요"를 고른 학생에게 "밀면 앞사람이 넘어질 수 있어요. 줄을 서면 모두 탈 수 있어요"라고 말한다. "조용히"는 속삭이는 목소리로 외친다.',
        exitTicket: [
          CHANT('질서 구호', ['차례차례', '조용히', '함께 써요!']),
          CH('버스를 탈 때는요?', ['줄 서서 차례로', '먼저 밀고 타요', '뛰어서 타요'], 0, '버스는 줄을 서서 차례로 타요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '함께 쓰는 곳 질서',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '차례차례, ___, 함께 써요!', answer: '조용히' },
          { type: 'draw', prompt: '도서관에서 질서를 지키는 모습을 그려요.' },
        ],
        easy: { note: '"차례차례"를 떠올려요.', items: [{ type: 'draw', prompt: '줄을 선 친구들을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 친구 마음 알아주기와 다툼 풀기 (관계 형성 및 소통 활동)
  const REL2 = MOD('auto.e12.g2-rel', [2]);
  // 몸으로 마음 나타내기(body parts): 기본 2곳, 쉬움 1곳(이름이 보임), 도전 3곳
  const FEELBODY = ['눈', '어깨', '가슴', '배', '손목', '무릎', '발목'];
  const BODY3 = (prompt, three, d, hints, more) => ({
    prompt, toolOptions: { mode: 'parts', parts: FEELBODY }, target: { parts: three.slice(0, 2) }, difficulty: d, hints,
    levels: { easy: { prompt: `${cut(prompt)}(1곳).`, target: { parts: three.slice(0, 1) } }, challenge: { prompt: `${cut(prompt)}(3곳).`, target: { parts: three } } },
    ...more,
  });
  const T_REL2 = [
    REL2({
      id: 'auto.e12.g2-rel.intro.face', type: 'intro', title: '얼굴 보고 마음 맞히기',
      method: '표정 그림에서 마음 맞히기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 얼굴 2개(웃는·찡그린)만 보이고 마음 카드를 함께 짝 짓는다.', base: '시연을 보고 얼굴 3개와 마음 카드를 짝 지어 말한다.', challenge: '얼굴 3개에 더해 "놀란 얼굴"까지 4개의 마음을 말한다.' },
      intro: {
        teacher: '"친구 얼굴을 보면 마음을 알 수 있을까요? 입꼬리가 올라가면? 눈썹이 찡그려지면?" 시연 단추로 얼굴마다 마음 카드가 차례로 짝 지어지는 모습을 보이고, 반 전체가 그 표정을 지어 본다. "화난 얼굴은 무서워요"라는 말이 나오면 "화난 친구도 마음을 알아주면 조금씩 풀려요"라고 답한다. 오늘은 친구 마음을 알아주는 말과 다툼을 푸는 방법을 익힌다고 밝힌다.',
        student: '선생님이 말한 마음을 내 얼굴로 지어 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '웃는 얼굴' }, { id: 's2', label: '찡그린 얼굴' }, { id: 's3', label: '눈물 난 얼굴' }], cards: ['화남', '속상함', '기쁨', '놀람'], shuffle: false }, sequence: [{ match: { s1: '기쁨' } }, { match: { s1: '기쁨', s2: '화남' } }, { match: { s1: '기쁨', s2: '화남', s3: '속상함' } }] },
        art: { draw: 'three round paper faces pinned on a board, one smiling, one frowning with knitted brows and one with a paper tear, paper children pointing and copying the faces', banner: '얼굴이 말해요', extra: [{ motif: 'heart', x: 300, y: 96, color: 'peach' }] },
      },
    }),
    REL2({
      id: 'auto.e12.g2-rel.intro.mirror', type: 'intro', title: '거울 놀이로 표정 따라 하기',
      method: '거울 놀이로 표정 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '짝이 표정 2개(기쁨·화남)를 지으면 따라 하고 마음 이름을 말한다.', base: '표정 3개(기쁨·화남·속상함)를 따라 하고 마음 이름을 말한다.', challenge: '역할을 바꿔 내가 표정을 짓고, 짝이 마음 이름을 맞힌다.' },
      intro: {
        teacher: '"짝과 마주 앉아요. 한 사람은 표정을 짓고, 한 사람은 거울이 되어 똑같이 따라 해요. 그리고 그 마음 이름을 말해요." 시연 단추로 놀이 차례 카드(표정 짓기 → 따라 하기 → 마음 말하기)가 놓이는 모습을 보인 뒤 교사가 한 학생과 시범을 보인다. 우스꽝스러운 얼굴로 놀리는 학생에게 "거울은 친구 얼굴을 그대로 비춰요. 놀리는 얼굴은 거울이 아니에요"라고 말한다.',
        student: '짝의 표정을 거울처럼 따라 하고 마음 이름을 말해 보아요.',
        demo: { tool: 'timer', options: { title: '거울 놀이', cards: ['마음 말하기', '표정 짓기', '따라 하기'] }, sequence: [{ order: ['표정 짓기', '따라 하기', '마음 말하기'] }] },
        art: { draw: 'two paper children sitting face to face as if looking in a mirror, one making a surprised face and the other copying it, a paper mirror frame between them', banner: '거울아, 따라 해 봐', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    REL2({
      id: 'auto.e12.g2-rel.activity.say', type: 'activity', title: '알아주는 말 고르기',
      method: '알아주는 말 고르기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 틀린 바구니에 넣으면 까닭을 말하고 돌아오며 바구니 옆에 장 수가 보인다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '카드 8장, "울지 마, 뚝"처럼 헷갈리는 카드가 섞이고, 안돼요 카드 하나를 알아주는 말로 고쳐 말한다.' },
      activity: {
        title: '마음을 알아주는 말', tool: 'sortboard',
        teacher: '"친구가 그림을 망쳐 속상해요. 이 말을 들으면 친구 마음이 나아질까요?" 카드를 넣을 때마다 반 전체가 다정한 목소리로 좋아요 말을 따라 한다. "울지 마, 뚝"을 좋아요에 넣는 학생에게 "속상한데 울지 말라고 하면 마음이 풀릴까요? \'속상했겠다\'라고 하면요?"라고 묻는다. 도전 단계에서는 "그것도 못 해? → 내가 도와줄까?"처럼 고쳐 말하게 한다. 안돼요 카드는 소리 내어 따라 하지 않는다.',
        task: '친구 마음을 알아주는 말은 좋아요, 아니면 안돼요에 넣어요.', levels: SBLV,
        items: [
          SB(OKNO, '친구가 속상할 때를 나누어요.', ['속상했겠다', '괜찮아?', '도와줄까?'], ['그것도 못 해?', '몰라, 저리 가', '네 탓이야'], ['울지 마, 뚝', '별거 아냐'], 0.1),
          SB(OKNO, '친구가 다쳤을 때를 나누어요.', ['많이 아파?', '선생님 부를까?', '같이 가 줄게'], ['조심 좀 하지', '웃긴다', '빨리 일어나'], ['안 아프지?', '참아 봐'], 0.15),
          SB(OKNO, '친구가 이겼을 때를 나누어요.', ['축하해', '멋지다', '나도 기뻐'], ['운이 좋았네', '나도 해', '다시 해!'], ['그게 다야?', '쳇'], 0.2, { conclude: '친구 마음을 먼저 알아주는 말을 하면 친구 마음이 풀려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['말', '○ / ×'], cells: [['속상했겠다', ''], ['그것도 못 해?', ''], ['축하해', '']], answer: '○, ×, ○' }] },
    }),
    REL2({
      id: 'auto.e12.g2-rel.activity.body', type: 'activity', title: '몸으로 마음 나타내기',
      method: '몸으로 마음 나타내기', tool: 'body', minutes: 13,
      levels: { easy: '마음마다 달라지는 곳 1곳을 고르고, 고른 곳 이름이 바로 보인다.', base: '마음마다 달라지는 곳 2곳을 고른다.', challenge: '마음마다 달라지는 곳 3곳을 고른다.' },
      activity: {
        title: '마음이 몸에 나타나요', tool: 'body',
        teacher: '"화가 나면 몸이 어떻게 될까요? 가슴이 쿵쾅, 주먹을 꽉 쥐어요." 고를 때마다 자기 몸의 그곳을 짚고 그 모습을 몸으로 해 보게 한다. 주먹을 친구 쪽으로 내미는 학생에게 "주먹은 내 무릎 위에서 쥐었다 펴요"라고 말한다. "화나면 때려도 돼요"라는 말이 나오면 "몸이 화났다고 알려 주면 멈추고 숨을 쉬는 신호예요"라고 짚는다. 몸에 나타나는 모습은 사람마다 조금 다를 수 있다고 말한다.',
        task: '마음이 생길 때 달라지는 몸의 곳을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          BODY3('화날 때 달라지는 곳을 골라요.', ['가슴', '손목', '어깨'], 0.1, ['화가 나면 몸이 어떻게 되는지 떠올려요.', '쿵쾅거리는 곳, 주먹을 쥐는 곳을 찾아요.', '가슴과 손목(주먹)을 눌러요.']),
          BODY3('기쁠 때 달라지는 곳을 골라요.', ['눈', '어깨', '발목'], 0.15, ['기쁘면 얼굴과 몸이 어떻게 되는지 떠올려요.', '웃는 곳, 들썩이는 곳을 찾아요.', '눈과 어깨를 눌러요.']),
          BODY3('걱정될 때 달라지는 곳을 골라요.', ['배', '가슴', '어깨'], 0.2, ['걱정되면 몸 어디가 불편한지 떠올려요.', '아픈 듯한 곳, 두근대는 곳을 찾아요.', '배와 가슴을 눌러요.'],
            { conclude: '마음은 몸에도 나타나요. 친구 몸의 신호를 보고 마음을 알아줄 수 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '화날 때 가슴이 쿵쾅대면?', options: ['멈추고 숨 쉬기', '친구 밀기'], answer: '멈추고 숨 쉬기' }] },
      notes: '종이 몸에 얼굴·주먹 칸이 없어 계획의 "얼굴·주먹"을 눈·손목(주먹을 쥐는 곳)으로 대신하고, 얼굴 표정은 학생이 자기 얼굴로 지어 본다. 정답 칸은 이 모듈이 정한 대표 예시다 — 다른 곳을 고른 학생의 까닭도 들어 준다.',
    }),
    REL2({
      id: 'auto.e12.g2-rel.activity.steps', type: 'activity', title: '다툼 푸는 세 단계 놓기',
      method: '다툼 푸는 세 단계 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면(멈춰요)이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '멈춰요 → 마음 말해요 → 함께 정해요 세 장면을 차례대로 놓는다.', challenge: '"소리 질러요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓은 뒤, 마음 말해요 장면에 들어갈 말풍선을 짝과 말한다.' },
      activity: {
        title: '멈추고, 말하고, 정해요', tool: 'story',
        teacher: '"둘이 그네를 서로 타겠다고 해요. 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 손가락 세 개를 펴며 "멈춰요, 마음 말해요, 함께 정해요"를 함께 말한다. "함께 정해요"를 맨 앞에 두는 학생에게 "화가 난 채로 정하면 둘 다 좋은 방법이 나올까요?"라고 묻는다. 도전 단계에서는 "나도 타고 싶어서 속상해"처럼 마음 말해요 말풍선을 짝과 만들어 본다. 이 세 단계는 우리 반이 함께 쓰는 방법이라고 알린다.',
        task: '다툼을 푸는 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('그네 다툼이에요. 차례로 놓아요.', [{ id: 'stop', text: '멈춰요', motif: 'cloud' }, { id: 'say', text: '마음 말해요', motif: 'heart' }, { id: 'agree', text: '함께 정해요', motif: 'sun' }], { id: 'yell', text: '소리 질러요', motif: 'star' }, 0.1),
          ORDER3('크레파스 다툼이에요. 놓아요.', [{ id: 'stop', text: '손을 멈춰요', motif: 'cloud' }, { id: 'say', text: '"나도 쓰고 싶어"', motif: 'heart' }, { id: 'agree', text: '번갈아 써요', motif: 'sun' }], { id: 'yell', text: '확 뺏어요', motif: 'star' }, 0.15),
          ORDER3('자리 다툼이에요. 차례로 놓아요.', [{ id: 'stop', text: '숨 쉬어요', motif: 'cloud' }, { id: 'say', text: '"속상했어"', motif: 'heart' }, { id: 'agree', text: '가위바위보', motif: 'sun' }], { id: 'yell', text: '밀어내요', motif: 'star' }, 0.2,
            { conclude: '다툼이 생기면 멈추고, 마음을 말하고, 함께 정해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '멈춰요 → ___ → 함께 정해요', answer: '마음 말해요' }] },
    }),
    REL2({
      id: 'auto.e12.g2-rel.activity.solve', type: 'activity', title: '다툼 장면 고르고 결과 보기',
      method: '다툼 장면 고르고 결과 보기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개, 고르면 이어지는 장면이 바로 보인다.', base: '보기 3개, 이어지는 장면은 확인한 뒤에 보인다.', challenge: '보기 3개, 확인 뒤 장면을 보고 "둘 다 웃으려면 그다음엔?" 다음 장면을 짝과 말로 이어 간다.' },
      activity: {
        title: '이 다툼, 어떻게 풀까?', tool: 'emotion',
        teacher: '"공 하나를 두 친구가 서로 갖겠다고 해요. 어떻게 하면 둘 다 웃을까요?" 고른 뒤 이어지는 장면을 보고 두 친구의 마음을 함께 말한다. "힘센 사람이 가지면 돼요"라는 말이 나오면 "이긴 친구는 웃지만 진 친구 마음은요? 다툼은 이긴 사람이 옳은 게 아니라 둘 다 괜찮은 방법을 찾는 거예요"라고 짚는다. 장면은 가상이며 우리 반 다툼을 꺼내 이야기하지 않는다.',
        task: '다툼 장면을 듣고 둘 다 괜찮은 방법을 골라요.', levels: BRLV,
        items: [
          BR('공을 서로 가지래요. 골라요.', '공 하나를 서로 가지려 해요.', [{ id: 'pull', text: '세게 당겨요', result: '둘 다 넘어졌어요.', mood: '화남' }, { id: 'turn', text: '차례로 써요', result: '둘 다 공놀이해요.', mood: '기쁨' }, { id: 'cry', text: '울면서 떼써요', result: '놀이가 멈췄어요.', mood: '속상함' }], 'turn', 0.1),
          BR('같은 자리에 앉으래요. 골라요.', '둘이 같은 자리에 앉으려 해요.', [{ id: 'push', text: '밀고 앉아요', result: '친구가 넘어질 뻔해요.', mood: '놀람' }, { id: 'rps', text: '"가위바위보 하자"', result: '웃으며 정했어요.', mood: '편안함' }, { id: 'sulk', text: '토라져 가요', result: '둘 다 기분이 안 좋아요.', mood: '속상함' }], 'rps', 0.15),
          BR('색을 서로 쓰래요. 골라요.', '둘이 같은 색을 쓰려 해요.', [{ id: 'grab', text: '먼저 잡아요', result: '친구가 서운해요.', mood: '속상함' }, { id: 'share', text: '"같이 쓰자"', result: '번갈아 칠했어요.', mood: '기쁨' }, { id: 'break', text: '반으로 부러뜨려요', result: '크레파스가 망가졌어요.', mood: '걱정' }], 'share', 0.2,
            { conclude: '다툼은 이기는 게 아니라 둘 다 괜찮은 방법을 찾는 거예요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '공을 서로 가지려 하면?', options: ['차례로 써요', '세게 당겨요'], answer: '차례로 써요' }] },
    }),
    REL2({
      id: 'auto.e12.g2-rel.wrap.role', type: 'wrap', title: '다툼 풀기 역할놀이',
      method: '다툼 풀기 역할놀이', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 한 학생과 시범을 보이면 그 말을 따라 하며 세 단계를 해 본다.', base: '교사가 준 장면(크레파스)으로 짝과 세 단계를 연기하고 차례를 놓는다.', challenge: '짝과 새 장면(줄넘기 차례)을 정해 세 단계를 연기한다.' },
      wrap: {
        teacher: '"크레파스를 둘이 쓰려 해요. 짝과 멈추고, 마음 말하고, 함께 정하는 것을 연기해 봐요." 교사가 먼저 한 학생과 시범을 보이고 짝끼리 1분 동안 해 본다. 연기 중 진짜로 언성이 높아지는 짝에게 "멈춰요 장면이에요. 둘 다 숨 한 번 쉬어 볼까요?"라고 말한다. 출구 1번에서 연기한 차례를 놓게 하고, 출구 2번에서 "이길 때까지"를 고른 학생과 세 단계를 한 번 더 말한다.',
        exitTicket: [
          CHANT('다툼 풀기 세 단계', ['멈춰요', '마음 말해요', '함께 정해요'], '연기한 차례를 놓아요.'),
          CH('다툼이 생기면 먼저요?', ['멈춰요', '더 크게 말해요', '이길 때까지 해요'], 0, '다툼이 생기면 먼저 멈추고 숨을 쉬어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '다툼 풀기 세 단계',
        items: [
          { type: 'blank', prompt: '마음 말해요 말풍선을 써요.', text: '"나도 ___ 싶어서 속상해."', answer: '(하고 싶은 것)' },
          { type: 'draw', prompt: '함께 정하고 웃는 두 친구를 그려요.' },
        ],
        easy: { note: '"멈춰요"부터 떠올려요.', items: [{ type: 'draw', prompt: '멈춘 손을 그려요.' }] },
      },
      notes: '역할놀이는 가상의 장면이다. 실제 우리 반 다툼을 다시 연기하게 하지 않는다.',
    }),
    REL2({
      id: 'auto.e12.g2-rel.wrap.heart', type: 'wrap', title: '화해 하트 꾸미기',
      method: '화해 하트 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '반원 2조각을 이어 화해 하트를 만든다.', base: '조각 3개 이상으로 화해 하트를 꾸민다.', challenge: '하트를 꾸미고, 활동지 말풍선에 화해하는 말을 그림과 함께 더한다.' },
      wrap: {
        teacher: '"두 조각이 만나 하나의 하트가 돼요. 다툰 친구와 다시 웃게 되는 것처럼요." 반원 두 조각을 맞대어 하트를 만들고 꾸미게 한다. 조각이 딱 맞지 않아 속상해하는 학생에게 "조금 삐뚤어도 다시 만나면 하트예요"라고 말해 준다. 출구 2번에서 "네가 먼저야"를 고른 학생에게 "누가 먼저든, 먼저 말하는 친구가 멋져요"라고 짚는다.',
        exitTicket: [
          PASTE(['semi', 'heart', 'circle', 'star'], ['두 조각을 이었어요', '화해 말을 떠올렸어요'], '화해 하트를 꾸며요.', 2),
          CH('화해할 때 하는 말은?', ['"미안해, 또 놀자"', '"흥, 몰라"', '"네가 먼저야"'], 0, '"미안해, 또 놀자"라고 먼저 말하면 다시 웃을 수 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '다시 웃어요',
        items: [
          { type: 'blank', prompt: '화해하는 말을 써요.', text: '"미안해, 우리 ___ 놀자."', answer: '다시' },
          { type: 'draw', prompt: '화해 하트를 그려요.' },
        ],
        easy: { note: '두 조각을 떠올려요.', items: [{ type: 'draw', prompt: '하트를 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 학급 회의 차례와 손들어 정하기 (공동체 자치활동 — 학급회의)
  const SELF2 = MOD('auto.e12.g2-self', [2]);
  const PLAYVOTE = [['술래잡기', 9], ['공기놀이', 6], ['그림 그리기', 4]];
  const T_SELF2 = [
    SELF2({
      id: 'auto.e12.g2-self.intro.look', type: 'intro', title: '회의 장면 좋아요·안돼요',
      method: '회의 장면 그림 좋아요·안돼요', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드 4장을 하나씩 읽어 주며 좋아요·안돼요를 함께 나눈다.', base: '시연을 본 뒤 같은 장면 카드 4장을 반 전체가 손짓(동그라미·가위표)으로 다시 나눈다.', challenge: '나눈 뒤 안돼요 장면 하나의 까닭("말이 섞여요")을 말한다.' },
      intro: {
        teacher: '"가상의 2학년 반이 회의를 해요. 이 모습은 좋아요일까요, 안돼요일까요?" 시연 단추로 회의 장면 카드가 두 바구니에 나뉘는 모습을 보이고, 칠판 그림 카드를 반 전체가 손으로 동그라미·가위표를 만들어 나눈다. "끼어들면 빨리 끝나요"라는 말이 나오면 "빨리 끝나도 내 말을 못 한 친구가 생겨요. 회의는 모두의 말을 듣는 시간이에요"라고 답한다. 오늘은 학급 회의 예절과 손들어 정하는 법을 익힌다고 밝힌다.',
        student: '좋아요 장면이면 두 팔로 동그라미, 안돼요면 가위표를 만들어 보아요.',
        demo: { tool: 'sortboard', options: { slots: OKNO, cards: ['손 들고 말하기', '끼어들기', '끝까지 듣기', '딴짓하기'] }, sequence: [{ sort: { 좋아요: ['손 들고 말하기'], 안돼요: [] } }, { sort: { 좋아요: ['손 들고 말하기', '끝까지 듣기'], 안돼요: ['끼어들기', '딴짓하기'] } }] },
        art: { draw: 'a paper classroom meeting circle where one paper child raises a hand to speak, others listen with hands on knees, and one child in the corner interrupts with a jagged speech bubble', banner: '우리 반 회의', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    SELF2({
      id: 'auto.e12.g2-self.intro.vote', type: 'intro', title: '좋아하는 놀이 손들기 연습',
      method: '좋아하는 놀이 손들기 연습', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 놀이 2가지를 보여 주면 좋아요 손을 들고 수를 함께 센다.', base: '놀이 3가지를 하나씩 보며 손을 들고, 반 전체가 소리 내어 센다.', challenge: '수 세기 도우미 두 명이 앞에 나와 손든 수를 세어 칠판에 적는다.' },
      intro: {
        teacher: '"쉬는 시간에 하고 싶은 놀이를 손을 들어 골라 볼 거예요. 한 사람이 한 번만 들어요." 시연 단추로 손들기 차례 카드(두 놀이 보기 → 좋아요 손 → 함께 세기)가 놓이는 모습을 보인 뒤 실제로 손을 든다. 두 번 드는 학생에게 "한 사람이 한 번씩 들어야 모두의 마음을 똑같이 셀 수 있어요"라고 말한다. 연습이라 오늘 정한 것으로 놀지 않아도 된다고 알린다.',
        student: '하고 싶은 놀이에 한 번만 손을 들어 보아요.',
        demo: { tool: 'timer', options: { title: '손들기 연습', cards: ['함께 세기', '두 놀이 보기', '좋아요 손'] }, sequence: [{ order: ['두 놀이 보기', '좋아요 손', '함께 세기'] }] },
        art: { draw: 'paper children raising one hand each toward two paper picture cards of playground games on a board, a paper helper child counting raised hands with a finger', banner: '한 사람 한 번', extra: [{ motif: 'sun', x: 300, y: 96 }] },
      },
      notes: '손들기는 눈을 감고 할 수도 있다(친구를 따라 들지 않게).',
    }),
    SELF2({
      id: 'auto.e12.g2-self.activity.manner', type: 'activity', title: '회의 예절과 까닭 잇기',
      method: '회의 예절과 까닭 짝 짓기', tool: 'emotion', minutes: 14,
      levels: { easy: '예절 2개와 까닭 카드 2장을 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '예절 3개와 까닭 카드를 짝 짓는다.', challenge: '예절 4개와 까닭 카드를 짝 짓고, 카드가 섞여 나온다.' },
      activity: {
        title: '왜 이렇게 할까?', tool: 'emotion',
        teacher: '"회의할 때 왜 손을 들고 말할까요?" 짝을 지을 때마다 "그래서 좋은 점은?" 하고 함께 묻는다. "끝까지 듣기"에 "빨리 끝나요"를 두려는 학생에게 "끝까지 들으면 친구 뜻을 알 수 있어요"라고 말한다. 적은 의견을 듣는 까닭에서 "적은 쪽은 틀린 거예요"라는 말이 나오면 "수가 적어도 그 친구 생각은 소중해요. 다음에 쓸 수도 있어요"라고 짚는다.',
        task: '회의 예절과 그렇게 하는 까닭 카드를 이어요.', levels: LV,
        items: [
          PAIRS('말할 때 예절과 까닭을 이어요.', [['손 들고 말하기', '모두 말해요'], ['끝까지 듣기', '뜻을 알아요'], ['차례 기다리기', '안 섞여요'], ['고운 말 쓰기', '마음 안 다쳐요']], 0.1),
          PAIRS('들을 때 예절과 까닭을 이어요.', [['또박또박 말하기', '잘 들려요'], ['친구 눈 보기', '집중해요'], ['자리에 앉기', '차분해요'], ['고개 끄덕이기', '힘이 나요']], 0.15),
          PAIRS('정할 때 예절과 까닭을 이어요.', [['적은 의견 듣기', '모두 소중해요'], ['웃지 않기', '용기 나요'], ['정한 것 따르기', '함께 지켜요'], ['한 번만 손들기', '똑같이 세요']], 0.2, { conclude: '회의 예절에는 모두가 말하고, 듣고, 함께 지키게 하는 까닭이 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '회의에서 손을 들고 말하는 까닭은?', options: ['모두 말할 수 있어서', '빨리 끝나서'], answer: '모두 말할 수 있어서' }] },
    }),
    SELF2({
      id: 'auto.e12.g2-self.activity.meet', type: 'activity', title: '손들기 학급 회의',
      method: '좋아요·안돼요 손들기 학급 회의', tool: 'timer', minutes: 13,
      levels: { easy: '안건 1개("쉬는 시간 놀이")로, 회의 차례 카드 첫 두 장만 놓고 교사가 사회를 본다.', base: '안건 1개로 회의 차례 세 장을 놓고, 손들기 전에 까닭을 한 사람씩 말한다.', challenge: '친구가 사회를 보고, 셋째 문항에서 사회자를 해 본 것까지 표시한다.' },
      activity: {
        title: '"쉬는 시간 놀이" 회의', tool: 'timer',
        teacher: '"오늘 안건은 \'금요일 쉬는 시간에 반 모두 할 놀이\'예요. 하고 싶은 놀이와 까닭을 손 들고 말해요." 교사가 사회자가 되어 의견을 칠판에 그림으로 적고, 후보마다 좋아요·안돼요 손을 들어 센다. 같은 말을 되풀이하는 학생에게 "다른 친구 생각도 들어 볼까요?"라고 말한다. "내 놀이가 아니면 안 할래요"라는 말이 나오면 "오늘 정한 놀이를 해 보고, 다음 회의에서 또 말할 수 있어요"라고 답한다. 도전 단계에서는 학생 사회자가 "말할 사람 손 들어 주세요"를 해 본다.',
        task: '회의 차례를 놓고 손들어 쉬는 시간 놀이를 정해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('회의 차례를 놓아요.', '학급 회의', ['안건 듣기', '의견 말하기', '손들어 정하기'], 0.1,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['의견 말하기', '안건 듣기'] }, target: { order: ['안건 듣기', '의견 말하기'] } } } }),
          { prompt: '회의 약속에 표시해요.', toolOptions: { title: '회의 약속', safety: ['손 들고 말해요', '끝까지 들어요', '정한 것을 따라요'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '회의에서 한 것에 표시해요.', toolOptions: { title: '회의 점검' }, target: { selfCheck: ['의견을 말했어요', '손들어 정했어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '사회자도 해 봤나요?', target: { selfCheck: ['의견을 말했어요', '손들어 정했어요', '사회자를 해 봤어요'] } } },
            conclude: '학급 회의는 안건을 듣고, 의견을 말하고, 손들어 함께 정해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '안건 듣기 → 의견 말하기 → ___', answer: '손들어 정하기' }] },
      notes: '정한 놀이는 실제로 쉬는 시간에 해 본다. 의견을 말하지 않은 학생에게 억지로 시키지 않고 손들기만 해도 된다고 말한다.',
    }),
    SELF2({
      id: 'auto.e12.g2-self.activity.count', type: 'activity', title: '손든 수 그림그래프',
      method: '손든 수 그림그래프로 보기', tool: 'chart', minutes: 14,
      levels: { easy: '놀이 2칸(술래잡기·공기놀이)의 그림그래프를 채우고 많은 쪽을 고른다.', base: '놀이 3칸의 그림그래프를 채우고 가장 많은 것을 고른다.', challenge: '3칸을 채우고 가장 많은 것을 고른 뒤, 술래잡기와 공기놀이가 몇 명 차이인지 고른다.' },
      activity: {
        title: '손든 수 그래프로 보기(가상)', tool: 'chart',
        teacher: '"가상의 2학년 반 회의에서 쉬는 시간 놀이에 손든 수예요. 얼굴 하나가 친구 한 명이에요." 수업을 위해 지은 가상의 회의라고 먼저 말한다. 표의 수만큼 얼굴을 채우고 반 전체가 손가락으로 센다. 가장 많은 것을 고른 뒤 "그림 그리기를 고른 4명의 마음은 어떨까요?"라고 묻고, 적은 의견도 다음 회의 후보로 남긴다고 짚는다. 차이를 셀 때는 두 줄을 나란히 놓고 남는 얼굴만 세게 한다.',
        task: '손든 수를 그림그래프로 채우고 많은 쪽을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '손든 수만큼 얼굴을 채워요.', toolOptions: PIC('쉬는 시간 놀이 손들기(가상)', PLAYVOTE), target: { build: true }, difficulty: 0.1,
            levels: { easy: { prompt: '두 놀이의 얼굴을 채워요.', toolOptions: { data: PLAYVOTE.slice(0, 2) } } } },
          { prompt: '손을 가장 많이 든 놀이는?', toolOptions: PIC('쉬는 시간 놀이 손들기(가상)', PLAYVOTE, { mode: 'read', question: '가장 많은 놀이는?', choices: ['술래잡기', '공기놀이', '그림 그리기'] }), target: { pick: 0 }, difficulty: 0.15,
            levels: { easy: { prompt: '두 놀이 가운데 많은 쪽은?', toolOptions: { data: PLAYVOTE.slice(0, 2), choices: ['술래잡기', '공기놀이'] } } } },
          { prompt: '손을 가장 적게 든 놀이는?', toolOptions: PIC('쉬는 시간 놀이 손들기(가상)', PLAYVOTE, { mode: 'read', question: '가장 적은 놀이는?', choices: ['술래잡기', '공기놀이', '그림 그리기'] }), target: { pick: 2 }, difficulty: 0.2,
            levels: { easy: { prompt: '두 놀이 가운데 적은 쪽은?', toolOptions: { data: PLAYVOTE.slice(0, 2), choices: ['술래잡기', '공기놀이'] }, target: { pick: 1 } },
              challenge: { prompt: '술래잡기와 공기놀이 차이는?', toolOptions: { question: '9명과 6명은 몇 명 차이?', choices: ['3명', '15명', '6명'] }, target: { pick: 0 } } },
            conclude: '가장 많은 놀이로 정하고, 적게 나온 놀이도 다음 회의 후보로 남겨요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '그래프에서 가장 많은 놀이는?', options: ['술래잡기', '그림 그리기'], answer: '술래잡기' }] },
      notes: '그래프 수는 수업용으로 지은 가상의 손들기다. 앞 회의에서 우리 반이 실제로 손든 수로 바꿔도 된다(누가 어디에 들었는지는 적지 않는다).',
    }),
    SELF2({
      id: 'auto.e12.g2-self.activity.small', type: 'activity', title: '적은 쪽 친구 마음 보기',
      method: '적은 의견 친구 마음 고르고 결과 보기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개, 고르면 이어지는 장면이 바로 보인다.', base: '보기 3개, 이어지는 장면은 확인한 뒤에 보인다.', challenge: '보기 3개, 확인 뒤 장면을 보고 "다음 회의에서는?" 다음 장면을 짝과 말로 이어 간다.' },
      activity: {
        title: '적은 쪽이 된 친구에게', tool: 'emotion',
        teacher: '"회의에서 술래잡기로 정해졌어요. 공기놀이를 고른 친구가 시무룩해요. 무슨 말을 하면 좋을까요?" 고른 뒤 이어지는 장면을 보고 그 친구 마음을 함께 말한다. "네가 졌어"를 고르는 학생에게 "회의는 이기고 지는 게 아니에요. 함께 정한 거예요"라고 짚는다. 내가 적은 쪽이 됐을 때도 정한 것을 함께 해 보고, 다음 회의에서 또 말할 수 있다고 알린다.',
        task: '적은 쪽이 된 장면을 듣고 할 말이나 할 일을 골라요.', levels: BRLV,
        items: [
          BR('적은 쪽 친구가 시무룩해요.', '적은 쪽 친구가 시무룩해요.', [{ id: 'win', text: '"네가 졌어"', result: '친구가 더 속상해요.', mood: '속상함' }, { id: 'next', text: '"다음에 공기하자"', result: '친구가 웃었어요.', mood: '기쁨' }, { id: 'ignore', text: '모른 척해요', result: '친구 혼자 서 있어요.', mood: '걱정' }], 'next', 0.1),
          BR('내가 적은 쪽이 됐어요. 골라요.', '내 의견이 적은 쪽이 됐어요.', [{ id: 'quit', text: '"안 할래" 해요', result: '놀이에 한 명이 빠졌어요.', mood: '속상함' }, { id: 'join', text: '"좋아, 같이 해"', result: '다 함께 즐겁게 놀아요.', mood: '편안함' }, { id: 'sneak', text: '몰래 딴 놀이', result: '정한 약속이 깨졌어요.', mood: '걱정' }], 'join', 0.15),
          BR('적은 쪽이 까닭을 말해요.', '적은 쪽 친구가 까닭을 말해요.', [{ id: 'laugh', text: '킥킥 웃어요', result: '친구가 말을 멈췄어요.', mood: '속상함' }, { id: 'listen', text: '끝까지 들어요', result: '좋은 생각을 알게 됐어요.', mood: '고마움' }, { id: 'hurry', text: '"빨리 끝내"', result: '친구가 서둘러 그만둬요.', mood: '걱정' }], 'listen', 0.2,
            { conclude: '적은 쪽 의견도 틀린 게 아니에요. 끝까지 듣고, 다음에도 함께 생각해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '적은 쪽 의견은 어떤가요?', options: ['틀린 게 아니에요', '틀린 의견이에요'], answer: '틀린 게 아니에요' }] },
    }),
    SELF2({
      id: 'auto.e12.g2-self.wrap.check', type: 'wrap', title: '회의 예절 스스로 점검',
      method: '회의 예절 스스로 점검', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 점검 칸 2칸(손 들기·듣기)을 읽어 주고 함께 표시한다.', base: '점검 칸 3칸(손 들기·듣기·기다리기)에 스스로 표시한다.', challenge: '내 점검을 마친 뒤 짝과 서로 "잘 들어 줬어"처럼 한 가지씩 짚어 준다.' },
      wrap: {
        teacher: '"오늘 회의에서 나는 어땠나요? 손 들고 말했나요, 끝까지 들었나요, 차례를 기다렸나요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 하나도 못 했다는 학생에게 "다음 회의에서 하나만 해 봐요. 무엇부터 해 볼까요?"라고 묻는다. 짝 점검은 칭찬만 하고 고칠 점은 말하지 않는다. 출구 2번에서 "틀린 거예요"를 고른 학생과 적은 의견을 다시 떠올린다.',
        exitTicket: [
          SELF('회의 예절 점검', ['손 들고 말했어요', '끝까지 들었어요', '차례를 기다렸어요'], '오늘 회의에서 한 것에 표시해요.'),
          CH('적은 쪽 의견은요?', ['틀린 게 아니에요', '틀린 거예요', '버려요'], 0, '적은 쪽 의견도 소중해요. 다음에 쓸 수도 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 회의 예절',
        items: [
          { type: 'check', prompt: '오늘 회의에서 한 것에 ✓ 해요.', options: ['손 들고 말하기', '끝까지 듣기', '차례 기다리기'] },
          { type: 'blank', prompt: '다음 회의 다짐을 써요.', text: '다음 회의에서는 ___ 할 거예요.', answer: '(나의 다짐)' },
        ],
        easy: { note: '손 들기를 떠올려요.', items: [{ type: 'draw', prompt: '손 들고 말하는 내 모습을 그려요.' }] },
      },
      notes: '점검은 스스로 하는 것이다. 교사가 점수로 모으지 않는다.',
    }),
    SELF2({
      id: 'auto.e12.g2-self.wrap.board', type: 'wrap', title: '우리 반 결정판 꾸미기',
      method: '정한 내용 그림판 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '정한 놀이 조각 1개를 결정판에 붙인다.', base: '정한 놀이와 회의 날을 나타내는 조각 2개 이상을 붙인다.', challenge: '정한 놀이와 함께 적게 나온 의견 조각도 "다음 후보" 자리에 붙인다.' },
      wrap: {
        teacher: '"오늘 회의에서 정한 놀이를 우리 반 결정판에 붙여요. 동그라미는 술래잡기, 별은 정한 날이에요." 조각을 붙이며 정한 것을 다시 말하게 한다. 도전 단계에서는 적게 나온 놀이도 "다음 후보" 자리에 붙인다. 결정판을 보며 "정한 것은 우리 모두가 함께 지켜요"라고 말한다. 출구 2번에서 "싫으면 안 해요"를 고른 학생에게 "다음 회의에서 다시 말할 수 있으니 오늘은 함께 해 봐요"라고 답한다.',
        exitTicket: [
          PASTE(['square', 'circle', 'star', 'heart'], ['정한 놀이를 붙였어요', '정한 것을 말해요'], '정한 것을 결정판에 붙여요.', 1),
          CH('손들어 정한 뒤에는요?', ['정한 것을 함께 해요', '싫으면 안 해요', '다시 싸워요'], 0, '함께 정한 것은 함께 지켜요. 다음 회의에서 또 말할 수 있어요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반이 정했어요',
        items: [
          { type: 'blank', prompt: '정한 것을 써요.', text: '우리 반은 쉬는 시간에 ___을(를) 하기로 했어요.', answer: '(정한 놀이)' },
          { type: 'draw', prompt: '정한 놀이를 함께 하는 모습을 그려요.' },
        ],
        easy: { note: '정한 놀이를 떠올려요.', items: [{ type: 'draw', prompt: '정한 놀이를 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 학교 둘레 자연 관찰과 발표 (주제 탐구 활동)
  const INQ2 = MOD('auto.e12.g2-inq', [2]);
  const NATURE = [{ name: '꽃밭', icon: 'park', at: [0, 0] }, { name: '큰 나무', icon: 'forest', at: [3, 0] }, { name: '교실', icon: 'school', at: [1, 1] }, { name: '운동장', icon: 'dot', at: [2, 2] }, { name: '텃밭', icon: 'field', at: [0, 2] }];
  const SEEN = [['나비', 7], ['개미', 5], ['꽃', 4], ['나뭇잎', 2]];
  const T_INQ2 = [
    INQ2({
      id: 'auto.e12.g2-inq.intro.find', type: 'intro', title: '꽃밭에서 볼 것 고르기',
      method: '꽃밭 그림에서 볼 것 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 그림 카드를 하나씩 읽어 주고 관찰하고 싶은 것 1개를 손들어 고른다.', base: '시연을 보고 관찰하고 싶은 것 2개를 고른다.', challenge: '2개를 고르고, 그것을 고른 까닭을 짝에게 말한다.' },
      intro: {
        teacher: '"학교 꽃밭 그림이에요. 무엇을 자세히 보고 싶나요?" 시연 단추로 관찰할 것 카드 두 장이 바구니에 담기는 모습을 보인다. "꽃은 다 똑같아요"라는 말이 나오면 "꽃잎 수도, 색도, 냄새도 다를 수 있어요. 가까이 보면 새로 알게 돼요"라고 답한다. 오늘은 학교 둘레 자연에서 관찰할 것을 정하고 관찰 차례를 세운다고 밝힌다.',
        student: '꽃밭에서 가장 보고 싶은 것 하나를 짝에게 말해 보아요.',
        demo: PICKDEMO('관찰할 것', [{ id: 'petal', text: '꽃잎', motif: 'flower' }, { id: 'bfly', text: '나비', motif: 'star' }, { id: 'ant', text: '개미', motif: 'leaf' }, { id: 'leaf', text: '잎사귀', motif: 'leaf' }, { id: 'stone', text: '돌멩이', motif: 'mountain' }], ['petal', 'bfly']),
        art: { draw: 'a paper school flower bed with layered paper petals, a paper butterfly and tiny paper ants on leaves, paper children crouching with paper magnifying glasses', banner: '자세히 보아요', extra: [{ motif: 'flower', x: 300, y: 222 }] },
      },
    }),
    INQ2({
      id: 'auto.e12.g2-inq.intro.map', type: 'intro', title: '학교 지도에서 관찰 장소 찾기',
      method: '학교 지도에서 관찰 장소 핀', tool: 'map', minutes: 6,
      levels: { easy: '교사가 지도 칸 이름을 읽어 주고 꽃밭 1곳을 함께 짚는다.', base: '시연을 보고 꽃밭·큰 나무 2곳을 지도에서 짚는다.', challenge: '텃밭까지 3곳을 짚고, 교실에서 가장 가까운 곳을 말한다.' },
      intro: {
        teacher: '"우리 학교 지도예요. 꽃과 나무를 관찰할 수 있는 곳은 어디일까요?" 시연 단추로 핀이 꽃밭·큰 나무·텃밭에 차례로 꽂히는 모습을 보이고, 창밖으로 실제 자리를 함께 찾아본다. "운동장에도 꽃이 있어요"라는 말이 나오면 "운동장 가장자리에 있을 수도 있어요. 오늘은 꽃밭부터 가 봐요"라고 답한다. 지도는 단순한 칸 지도라 실제 학교와 자리가 다를 수 있다고 말한다.',
        student: '지도에서 가 보고 싶은 관찰 장소를 손가락으로 가리켜 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: NATURE, title: '우리 학교 자연 지도' }, sequence: [{ place: '꽃밭' }, { place: '큰 나무' }, { place: '텃밭' }] },
        art: { draw: 'a simple paper grid map of a school yard with a paper flower bed, a big paper tree and a small vegetable garden, colorful paper pins standing on each spot', banner: '어디서 관찰할까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
      notes: '우리 학교 배치에 맞게 장소 이름·자리를 바꿔도 된다. 학교 이름은 지도에 쓰지 않는다.',
    }),
    INQ2({
      id: 'auto.e12.g2-inq.activity.plan', type: 'activity', title: '관찰 차례 세 장면 놓기',
      method: '관찰 차례 세 장면 놓기', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면(정해요)이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '정해요 → 봐요 → 그려요 세 장면을 차례대로 놓는다.', challenge: '"꺾어 가요" 같은 틀린 장면 한 장이 섞여 있어 빼고 놓은 뒤, 관찰에 필요한 준비물(돋보기·연필)을 말한다.' },
      activity: {
        title: '정하기 → 보기 → 그리기', tool: 'story',
        teacher: '"관찰하러 가기 전에 맨 먼저 무엇을 할까요?" 장면을 놓은 뒤 손가락 세 개를 펴며 "정해요, 봐요, 그려요"를 함께 말한다. "그려요"를 맨 앞에 두는 학생에게 "보기 전에 무엇을 그릴 수 있을까요?"라고 묻는다. "꺾어 가요"를 고르는 학생에게 "꺾으면 꽃이 어떻게 될까요? 그 자리에서 보고 그려요"라고 짚는다. 도전 단계에서는 준비물(돋보기·연필·관찰 종이)을 함께 말한다.',
        task: '관찰하는 장면 카드를 차례대로 놓아요.', levels: LV,
        items: [
          ORDER3('꽃을 관찰해요. 차례로 놓아요.', [{ id: 'pick', text: '볼 것 정해요', motif: 'star' }, { id: 'see', text: '가까이 봐요', motif: 'flower' }, { id: 'draw', text: '그려요', motif: 'leaf' }], { id: 'cut', text: '꺾어 가요', motif: 'cloud' }, 0.1),
          ORDER3('개미를 관찰해요. 놓아요.', [{ id: 'pick', text: '개미로 정해요', motif: 'star' }, { id: 'see', text: '조용히 봐요', motif: 'leaf' }, { id: 'draw', text: '본 대로 그려요', motif: 'sun' }], { id: 'cut', text: '개미 잡아요', motif: 'cloud' }, 0.15),
          ORDER3('나무를 관찰해요. 놓아요.', [{ id: 'pick', text: '나무로 정해요', motif: 'star' }, { id: 'see', text: '만져 봐요', motif: 'leaf' }, { id: 'draw', text: '잎을 그려요', motif: 'sun' }], { id: 'cut', text: '가지 꺾어요', motif: 'cloud' }, 0.2,
            { conclude: '관찰은 볼 것을 정하고, 가까이 보고, 본 대로 그려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '정해요 → 봐요 → ___', answer: '그려요' }] },
    }),
    INQ2({
      id: 'auto.e12.g2-inq.activity.go', type: 'activity', title: '꽃밭에 가서 관찰하기',
      method: '교사 인솔 꽃밭 관찰하기', tool: 'timer', minutes: 13,
      levels: { easy: '교사 곁에서 함께 한 가지를 보고, 점검 칸은 교사와 함께 읽으며 표시한다.', base: '관찰 시간을 3분으로 맞추고 정한 것을 스스로 본 뒤 안전 점검을 한다.', challenge: '3분 동안 두 가지를 보고, 셋째 문항에서 두 가지를 본 것까지 표시한다.' },
      activity: {
        title: '교사와 함께 꽃밭 관찰', tool: 'timer',
        teacher: '"꽃밭에 가면 3분 동안 정한 것을 조용히 봐요. 선생님이 손뼉을 두 번 치면 모여요." 관찰 시간을 맞춘 뒤 줄 서서 이동하고, 꽃밭에서는 교사가 보이는 곳에서만 본다. 꽃을 꺾으려는 학생에게 "꺾으면 다음 친구는 못 봐요. 눈과 손가락 끝으로만 봐요"라고 말한다. 벌이 날아오면 손을 휘젓지 말고 천천히 물러서게 한다. 교실로 돌아와 점검 칸에 표시한다.',
        task: '관찰 시간을 맞추고 꽃밭에서 정한 것을 관찰해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '관찰 시간을 3분으로 맞춰요.', toolOptions: { title: '꽃밭 관찰(우리 반 약속)', labels: ['관찰', '모이기'], plan: { work: 60, rest: 0, rounds: 1 } }, target: { plan: { work: 180 } }, difficulty: 0.1 },
          { prompt: '관찰할 때 지킨 것에 표시해요.', toolOptions: { title: '관찰 안전 점검', safety: ['뛰지 않았어요', '꺾지 않았어요', '선생님 곁에 있었어요'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '관찰한 것에 표시해요.', toolOptions: { title: '관찰 점검' }, target: { selfCheck: ['정한 것을 봤어요', '본 것을 기억해요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '두 가지를 봤나요?', target: { selfCheck: ['정한 것을 봤어요', '본 것을 기억해요', '두 가지를 봤어요'] } } },
            conclude: '꽃밭에서는 뛰지 않고, 꺾지 않고, 눈으로 자세히 봐요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '꽃밭에서 꽃을 보면요?', options: ['눈으로 자세히 봐요', '꺾어 가요'], answer: '눈으로 자세히 봐요' }] },
      notes: '3분은 우리 반 약속이다. 이동 전 벌·풀독 같은 알레르기가 있는 학생을 확인하고, 비 오는 날은 창밖 관찰로 바꾼다.',
    }),
    INQ2({
      id: 'auto.e12.g2-inq.activity.draw', type: 'activity', title: '관찰한 것 조각 그림',
      method: '관찰한 것 조각 그림', tool: 'collage', minutes: 14,
      levels: { easy: '고르개에 동그라미·잎·반원만 있고, 조각 2개 이상으로 나타낸다.', base: '고르개에 모양 5가지가 있고, 조각 4개 이상으로 나타낸다.', challenge: '고르개가 모두 열려 있고, 조각 4개 이상으로 나타낸 뒤 셋째 문항에서 그림에 이름을 붙여 말한 것까지 표시한다.' },
      activity: {
        title: '본 것을 조각으로', tool: 'collage',
        teacher: '"꽃밭에서 본 것을 모양과 색 조각으로 나타내 봐요. 꽃잎은 잎 모양, 가운데는 동그라미!" 조각을 붙이며 "실제로 무슨 색이었나요?"라고 묻고 본 대로 고르게 한다. 보지 않은 무지개색 꽃을 붙이는 학생에게 "상상한 꽃도 멋져요. 그런데 관찰 그림은 본 대로 나타내요"라고 말한다. 개미는 동그라미 세 개를 줄줄이 붙이면 된다고 알려 준다.',
        task: '꽃밭에서 본 것을 모양·색 조각으로 나타내요.', levels: { easy: { shapes: ['circle', 'leaf', 'semi'] }, base: { shapes: ['circle', 'leaf', 'semi', 'heart', 'triangle'] }, challenge: {} },
        items: [
          { prompt: '본 꽃을 조각으로 나타내요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 1 }, { shape: 'leaf', min: 1 }], pieces: { min: 4 } }, difficulty: 0.1,
            levels: { easy: { prompt: '꽃 가운데와 꽃잎을 붙여요.', target: { has: [{ shape: 'circle', min: 1 }, { shape: 'leaf', min: 1 }], pieces: { min: 2 } } } } },
          { prompt: '본 잎을 조각으로 나타내요.', toolOptions: {}, target: { has: [{ shape: 'leaf', min: 2 }], pieces: { min: 4 } }, difficulty: 0.15,
            levels: { easy: { prompt: '잎 조각 2개를 붙여요.', target: { has: [{ shape: 'leaf', min: 2 }], pieces: { min: 2 } } } } },
          { prompt: '본 개미를 동그라미로 나타내요.', toolOptions: {}, target: { has: [{ shape: 'circle', min: 3 }], pieces: { min: 4 } }, difficulty: 0.2,
            levels: { easy: { prompt: '개미 몸 동그라미 2개를 붙여요.', target: { has: [{ shape: 'circle', min: 2 }], pieces: { min: 2 } } },
              challenge: { prompt: '그림에 이름도 붙였나요?', target: { selfCheck: ['본 것을 나타냈어요', '이름을 붙여 말했어요'], minPieces: 4 } } },
            conclude: '관찰 그림은 본 모양과 색 그대로 나타내요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '관찰한 것을 본 대로 그려요.' }] },
      notes: '콜라주 판은 모양·색·개수만 본다. 본 대로 나타냈는지는 교사가 관찰 종이와 견주며 함께 본다.',
    }),
    INQ2({
      id: 'auto.e12.g2-inq.activity.present', type: 'activity', title: '그림 보여 주며 발표하기',
      method: '그림 보여 주며 발표하기', tool: 'timer', minutes: 13,
      levels: { easy: '발표 차례 카드 첫 두 장만 놓고, 말틀 "나는 ○○을 보았어요"로 말한다.', base: '모둠 4명이 차례로 발표하게 타이머를 맞추고, 말틀에 한 문장을 더해 말한다.', challenge: '한 문장을 더해 발표하고, 셋째 문항에서 친구 질문을 받은 것까지 표시한다.' },
      activity: {
        title: '모둠 앞에서 관찰 발표', tool: 'timer',
        teacher: '"그림을 들어 보이며 \'나는 노란 나비를 보았어요\'처럼 말해요. 한 문장 더 할 수 있으면 \'날개에 점이 있었어요\'처럼 덧붙여요." 모둠마다 한 사람씩 30초씩 발표하고 박수를 친다. 목소리가 작은 학생에게 "그림을 친구 쪽으로 들고, 한 번만 또박또박 말해 봐요"라고 도와준다. 친구 발표에 "틀렸어"라고 하는 학생에게 "본 것은 친구마다 달라요. 궁금하면 질문으로 물어봐요"라고 짚는다.',
        task: '발표 차례를 맞추고 그림을 보여 주며 본 것을 말해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('발표 차례를 놓아요.', '관찰 발표', ['그림 들기', '본 것 말하기', '박수 받기'], 0.1,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['본 것 말하기', '그림 들기'] }, target: { order: ['그림 들기', '본 것 말하기'] } } } }),
          { prompt: '모둠 4명이 발표하게 맞춰요.', toolOptions: { title: '모둠 발표(우리 반 약속)', labels: ['발표', '박수'], plan: { work: 30, rest: 5, rounds: 1 } }, target: { plan: { rounds: 4 } }, difficulty: 0.15 },
          { prompt: '발표한 것에 표시해요.', toolOptions: { title: '발표 점검' }, target: { selfCheck: ['그림을 보여 줬어요', '말틀로 말했어요', '한 문장 더 했어요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '말틀로 말했나요?', target: { selfCheck: ['그림을 보여 줬어요', '말틀로 말했어요'] } },
              challenge: { prompt: '질문도 받았나요?', target: { selfCheck: ['그림을 보여 줬어요', '말틀로 말했어요', '한 문장 더 했어요', '질문을 받았어요'] } } },
            conclude: '그림을 보여 주며 "나는 ○○을 보았어요"라고 또박또박 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '말틀을 채워 써요.', text: '나는 ___을(를) 보았어요.', answer: '(관찰한 것)' }] },
      notes: '30초·4명은 우리 반 약속(연습용 값)이다. 발표가 어려운 학생은 그림만 보여 주고 교사가 말틀을 함께 읽어 준다.',
    }),
    INQ2({
      id: 'auto.e12.g2-inq.wrap.question', type: 'wrap', title: '친구 발표에 할 질문',
      method: '친구 발표에 할 질문 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 발표 장면 2개와 질문 카드를 읽어 주고 함께 짝 짓는다.', base: '발표 장면 2개에 알맞은 질문 카드를 스스로 짝 짓고 엉뚱한 카드는 남긴다.', challenge: '짝을 지은 뒤 내가 할 질문 하나를 써서 친구에게 묻는다.' },
      wrap: {
        teacher: '"친구가 \'나는 꽃을 보았어요\'라고 발표했어요. 무엇을 물으면 좋을까요?" 출구 1번에서 발표와 어울리는 질문을 짝 짓는다. "게임 좋아해?"를 고르는 학생에게 "그 질문은 친구 발표와 이어질까요?"라고 묻는다. 질문은 친구가 본 것을 더 알고 싶다는 뜻이라 친구를 기쁘게 한다고 말한다. 출구 3번에서 쓴 질문은 다음 시간 발표 때 물어본다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 's1', label: '"꽃을 봤어요"' }, { id: 's2', label: '"개미를 봤어요"' }], cards: [{ id: 'many', text: '몇 마리였어?' }, { id: 'game', text: '게임 좋아해?' }, { id: 'color', text: '무슨 색이었어?' }], weather: false }, prompt: '발표에 알맞은 질문을 이어요.', target: { match: { s1: 'color', s2: 'many' } }, difficulty: 0.15 },
          CH('친구 발표가 끝나면요?', ['박수 치고 물어요', '바로 끼어들어요', '딴 데 봐요'], 0, '발표가 끝나면 박수를 치고 궁금한 것을 물어요.'),
          { type: 'short', prompt: '내가 할 질문을 써요.' },
        ],
      },
      worksheet: {
        title: '발표 듣고 묻기',
        items: [
          { type: 'check', prompt: '발표를 들을 때 한 것에 ✓ 해요.', options: ['끝까지 듣기', '박수 치기', '질문하기'] },
          { type: 'blank', prompt: '친구에게 할 질문을 써요.', text: '"그 ___은(는) 무슨 색이었어?"', answer: '(친구가 본 것)' },
        ],
        easy: { note: '"무슨 색이었어?"를 떠올려요.', items: [{ type: 'draw', prompt: '친구가 본 것을 그려요.' }] },
      },
    }),
    INQ2({
      id: 'auto.e12.g2-inq.wrap.tally', type: 'wrap', title: '반 관찰 그림그래프',
      method: '반 관찰 그림그래프', tool: 'chart', minutes: 7,
      levels: { easy: '교사가 그래프 앞 2칸(나비·개미)만 짚어 주며 많은 쪽을 함께 고른다.', base: '그래프 3칸까지 짚으며 가장 많은 것을 고른다.', challenge: '그래프 4칸을 모두 보고 가장 많은 것을 고른다.' },
      wrap: {
        teacher: '"가상의 2학년 반 친구들이 꽃밭에서 본 것을 그림그래프로 모았어요." 수업을 위해 지은 가상의 자료라고 먼저 말하고, 줄이 가장 긴 것을 손으로 짚게 한다. "나비가 제일 많으니 꽃밭엔 나비만 있어요"라는 말이 나오면 "적게 본 것도 꽃밭에 있었어요. 다음에 또 보면 더 많이 볼 수도 있어요"라고 답한다. 출구 2번에서 "한 번이면 끝이에요"를 고른 학생에게 "꽃은 날마다 조금씩 달라져요. 여러 번 보면 더 알게 돼요"라고 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: PIC('꽃밭에서 본 것(가상)', SEEN, { mode: 'read', question: '가장 많이 본 것은?', choices: ['나비', '개미', '꽃', '나뭇잎'] }), prompt: '가장 많이 본 것을 골라요.', target: { pick: 0 }, difficulty: 0.15 },
          CH('관찰은 한 번 보면 끝일까요?', ['여러 번 보면 더 알아요', '한 번이면 끝이에요', '안 봐도 돼요'], 0, '자연은 날마다 달라져요. 여러 번 보면 더 많이 알게 돼요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '꽃밭 관찰 모으기',
        items: [
          { type: 'choice', prompt: '그래프에서 가장 많이 본 것은?', options: ['나비', '나뭇잎'], answer: '나비' },
          { type: 'draw', prompt: '다음에 또 관찰하고 싶은 것을 그려요.' },
        ],
        easy: { note: '줄이 가장 긴 것을 찾아요.', items: [{ type: 'draw', prompt: '나비를 그려요.' }] },
      },
      notes: '그래프 수는 수업용으로 지은 가상의 자료다. 우리 반이 실제로 본 것을 칠판에 손들기로 모아 견주어 봐도 된다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 가족·이웃 돕기와 꽃밭 가꾸기 (프로젝트형 봉사활동)
  const SERVE2 = MOD('auto.e12.g2-serve', [2]);
  const HALL = [{ name: '복도', icon: 'dot', at: [1, 0] }, { name: '꽃밭', icon: 'park', at: [3, 2] }, { name: '신발장', icon: 'dot', at: [0, 0] }, { name: '교실', icon: 'school', at: [2, 0] }, { name: '운동장', icon: 'dot', at: [1, 2] }];
  const WEEK = [['월', 2], ['화', 1], ['수', 3], ['목', 1], ['금', 2]];
  const WPIC = (data, extra) => Object.assign({ type: 'picture', title: '하나의 일주일 도움 계획(가상)', unit: '번', icon: 'heart', icons: [{ value: 1, name: '1번' }], data }, extra || {});
  // 준비물 바구니(kitchen pick): yes 3장. 기본 5장에서 3장, 쉬움 3장에서 2장, 도전 7장(안 쓰는 것 4장)에서 3장
  const KP = (prompt, yes, no, d, more) => ({
    prompt, toolOptions: { mode: 'pick', basket: '가꾸기 준비물', cards: [no[0], yes[0], yes[1], no[1], yes[2]], autoMotif: false }, target: { pick: yes }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(2개).`, toolOptions: { cards: [yes[0], no[0], yes[1]] }, target: { pick: yes.slice(0, 2) } },
      challenge: { prompt: `${cut(prompt)}(7장).`, toolOptions: { cards: [no[0], yes[0], no[2], yes[1], no[1], no[3], yes[2]] } },
    },
    ...more,
  });
  const T_SERVE2 = [
    SERVE2({
      id: 'auto.e12.g2-serve.intro.home', type: 'intro', title: '집에서 내가 도울 일',
      method: '집 그림에서 도울 일 찾기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 그림 카드를 하나씩 읽어 주고 내가 도울 수 있는 일 1개를 함께 고른다.', base: '시연을 보고 카드 6장 가운데 내가 도울 수 있는 일 2개를 말한다.', challenge: '3개를 고르고, "가스불 켜기"는 왜 어른 일인지 말한다.' },
      intro: {
        teacher: '"하나네 집 그림이에요. 하나가 도울 수 있는 일은 무엇일까요?" 카드를 하나씩 읽어 주고 시연 단추로 신발 정리·수저 놓기·빨래 개기 카드가 바구니에 담기는 모습을 보인다. "가스불 켜기"를 고르는 학생에게 "불은 다칠 수 있어서 어른이 해요"라고 짚는다. "돕기는 돈이 있어야 해요"라는 말이 나오면 "수저를 놓는 데 돈이 들까요? 내 손으로 할 수 있는 도움이 많아요"라고 답한다.',
        student: '하나가 도울 수 있는 일 하나를 손으로 흉내 내 보아요.',
        demo: PICKDEMO('하나가 도울 일', [{ id: 'shoe', text: '신발 정리', motif: 'house' }, { id: 'fire', text: '가스불 켜기', motif: 'sun' }, { id: 'spoon', text: '수저 놓기', motif: 'star' }, { id: 'fold', text: '빨래 개기', motif: 'cloud' }, { id: 'heavy', text: '쌀 포대 들기', motif: 'mountain' }, { id: 'plant', text: '화분 물 주기', motif: 'leaf' }], ['shoe', 'spoon', 'fold']),
        art: { draw: 'a paper house cut open like a dollhouse, a paper child lining up shoes at the door and setting spoons on a paper table, folded paper laundry nearby', banner: '내 손으로 도와요', extra: [{ motif: 'heart', x: 300, y: 96, color: 'peach' }] },
      },
      notes: '하나네 집은 가상이다. 학생에게 집에서 누구와 사는지, 집안일을 누가 하는지는 묻지 않는다.',
    }),
    SERVE2({
      id: 'auto.e12.g2-serve.intro.hall', type: 'intro', title: '학교 지도에서 가꿀 곳 찾기',
      method: '복도 그림에서 가꿀 곳 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 지도 칸 이름을 읽어 주고 복도 1곳을 함께 짚는다.', base: '시연을 보고 복도·꽃밭 2곳을 지도에서 짚는다.', challenge: '신발장까지 3곳을 짚고, 각 곳에서 무엇을 가꿀지 한 마디씩 말한다.' },
      intro: {
        teacher: '"우리 반이 함께 가꿀 수 있는 곳은 어디일까요? 복도에 떨어진 종이, 꽃밭의 마른 흙, 흐트러진 신발장…" 시연 단추로 핀이 복도·꽃밭·신발장에 차례로 꽂히는 모습을 보인다. "복도는 우리 교실이 아니라서 안 해도 돼요"라는 말이 나오면 "복도는 우리도, 다른 반도 함께 쓰는 곳이에요. 함께 쓰는 곳을 가꾸는 게 봉사예요"라고 답한다. 오늘은 가족·이웃을 돕는 계획과 꽃밭·복도 가꾸기를 해 본다고 밝힌다.',
        student: '우리 학교에서 가꾸고 싶은 곳을 손가락으로 가리켜 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: HALL, title: '함께 가꿀 학교' }, sequence: [{ place: '복도' }, { place: '꽃밭' }, { place: '신발장' }] },
        art: { draw: 'a simple paper grid map of a school with a long paper hallway, a paper flower bed and a shoe rack, small paper pins marking places to tidy and care for', banner: '함께 가꿀 곳', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
      },
    }),
    SERVE2({
      id: 'auto.e12.g2-serve.activity.who', type: 'activity', title: '도움 받는 사람과 할 일',
      method: '도움 받는 사람과 할 일 잇기', tool: 'emotion', minutes: 14,
      levels: { easy: '사람 2명과 도울 일 카드 2장을 짝 짓고, 놓으면 바로 맞는지 알려 준다.', base: '사람 3명과 도울 일 카드를 짝 짓는다.', challenge: '사람 4명과 도울 일 카드를 짝 짓고, 카드가 섞여 나온다.' },
      activity: {
        title: '누구에게 어떤 도움을?', tool: 'emotion',
        teacher: '"허리가 아픈 할머니께는 어떤 도움이 좋을까요?" 짝을 지을 때마다 그 도움을 몸짓으로 해 보게 한다. 어린 동생에게 "짐 함께 들기"를 두는 학생에게 "동생은 무엇이 어려울까요?"라고 묻는다. 이웃 장면에서는 아는 이웃에게만 인사하고 돕고, 모르는 어른이 도와 달라고 하면 어른께 먼저 알린다고 짚는다. 사람들은 하나네 가상의 가족·이웃이다.',
        task: '도움 받는 사람과 알맞은 도울 일 카드를 이어요.', levels: LV,
        items: [
          PAIRS('집에서 도울 일을 이어요.', [['허리 아픈 할머니', '물건 집어 드리기'], ['어린 동생', '신발 신겨 주기'], ['장 보고 온 어른', '짐 함께 들기'], ['바쁜 저녁 시간', '수저 놓기']], 0.1),
          PAIRS('아는 이웃께 할 일을 이어요.', [['아는 이웃 어른', '"안녕하세요"'], ['짐 많은 이웃', '문 잡아 드리기'], ['아기가 자는 집', '조용히 걷기'], ['같은 동 친구', '"같이 가자"']], 0.15),
          PAIRS('학교에서 도울 일을 이어요.', [['새 1학년 동생', '신발장 알려 주기'], ['청소하시는 분', '쓰레기 줍기'], ['선생님', '교구 나르기'], ['다친 친구', '보건실 함께']], 0.2, { conclude: '도움은 그 사람에게 필요한 것을, 내가 할 수 있는 만큼 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '어린 동생에게 할 도움은?', options: ['신발 신겨 주기', '짐 함께 들기'], answer: '신발 신겨 주기' }] },
      notes: '가족 구성(할머니·동생)은 하나네 가상의 가족이다. 학생에게 집에 누가 있는지 묻지 않는다. 모르는 어른을 돕는 장면은 넣지 않았다(먼저 어른께 알린다).',
    }),
    SERVE2({
      id: 'auto.e12.g2-serve.activity.week', type: 'activity', title: '일주일 도움 계획표',
      method: '일주일 도움 계획 붙이기', tool: 'chart', minutes: 13,
      levels: { easy: '월·화·수 3일 칸에 하트를 채워 계획표를 만들고 가장 많은 날을 고른다.', base: '월~금 5일 칸에 하트를 채우고 가장 많은 날을 고른다.', challenge: '5일 칸을 채우고 가장 많은 날을 고른 뒤 일주일에 모두 몇 번인지 고른다.' },
      activity: {
        title: '하나의 도움 계획표(가상)', tool: 'chart',
        teacher: '"하나가 일주일 동안 할 도움을 계획했어요. 하트 하나가 도움 한 번이에요." 가상의 계획표라고 먼저 말하고, 표의 수만큼 하트를 채운 뒤 요일마다 함께 센다. "날마다 많이 해야 해요"라는 말이 나오면 "하루 한 번이라도 꾸준히 하는 게 좋은 계획이에요"라고 답한다. 학생 자신의 계획은 활동지에 쓰고 서로 견주지 않는다. 모두 몇 번인지 셀 때는 하트를 하나씩 손가락으로 짚게 한다.',
        task: '하나의 도움 계획을 그림그래프로 채우고 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '계획표에 하트를 채워요.', toolOptions: WPIC(WEEK), target: { build: true }, difficulty: 0.1,
            levels: { easy: { prompt: '3일 칸에 하트를 채워요.', toolOptions: { data: WEEK.slice(0, 3) } } } },
          { prompt: '도움이 가장 많은 날은?', toolOptions: WPIC(WEEK, { mode: 'read', question: '가장 많은 날은?', choices: ['월', '화', '수', '목', '금'] }), target: { pick: 2 }, difficulty: 0.15,
            levels: { easy: { prompt: '3일 가운데 가장 많은 날은?', toolOptions: { data: WEEK.slice(0, 3), choices: ['월', '화', '수'] } } } },
          { prompt: '목요일 도움은 몇 번일까요?', toolOptions: WPIC(WEEK, { mode: 'read', question: '목요일은 몇 번?', choices: ['1번', '2번', '3번'] }), target: { pick: 0 }, difficulty: 0.2,
            levels: { easy: { prompt: '화요일 도움은 몇 번일까요?', toolOptions: { data: WEEK.slice(0, 3), question: '화요일은 몇 번?' } },
              challenge: { prompt: '일주일에 모두 몇 번?', toolOptions: { question: '모두 몇 번일까요?', choices: ['9번', '5번', '3번'] }, target: { pick: 0 } } },
            conclude: '도움 계획은 많이보다 꾸준히, 내가 할 수 있는 만큼 세워요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '내 도움 계획을 써요.', columns: ['요일', '할 도움'], cells: [['월', ''], ['수', ''], ['금', '']], answer: '(내 계획)' }] },
      notes: '계획표 수는 하나의 가상 계획이다. 학생이 집에서 실제로 한 횟수는 확인하거나 견주지 않는다.',
    }),
    SERVE2({
      id: 'auto.e12.g2-serve.activity.tools', type: 'activity', title: '가꾸기 준비물 고르기',
      method: '가꾸기 준비물 고르기', tool: 'kitchen', minutes: 14,
      levels: { easy: '카드 3장 가운데 준비물 2개를 바구니에 담는다.', base: '카드 5장 가운데 준비물 3개를 담는다.', challenge: '카드 7장 가운데 안 쓰는 것 4장은 빼고 준비물 3개만 담는다.' },
      activity: {
        title: '준비물 바구니 채우기', tool: 'kitchen',
        teacher: '"꽃밭에 물을 주고 흙을 고르려면 무엇이 필요할까요?" 카드를 담을 때마다 "이걸로 무엇을 할까?" 하고 함께 묻는다. 가위를 담으려는 학생에게 "꽃밭에서 가위로 무엇을 자를까요? 꽃은 자르지 않아요"라고 말한다. 모종삽은 끝이 뾰족하니 장갑을 끼고 아래로 들고 다닌다고 짚는다. 실물 준비물을 보여 주며 이름을 함께 말한다.',
        task: '가꾸기에 쓸 준비물만 바구니에 담아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          KP('꽃밭 가꾸기 준비물을 담아요.', ['물뿌리개', '장갑', '모종삽'], ['크레파스', '줄넘기', '가위', '풍선'], 0.1),
          KP('복도 정리 준비물을 담아요.', ['빗자루', '쓰레받기', '봉투'], ['물뿌리개', '공', '물감', '색종이'], 0.15),
          KP('화분 옮기기 준비물을 담아요.', ['새 화분', '흙', '모종삽'], ['우산', '풀', '공', '연필'], 0.2, { conclude: '가꾸기 전에 할 일에 맞는 준비물을 챙기고, 뾰족한 도구는 장갑을 끼고 아래로 들어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '꽃밭 가꾸기 준비물에 ✓ 해요.', options: ['물뿌리개', '장갑', '모종삽', '크레파스'] }] },
    }),
    SERVE2({
      id: 'auto.e12.g2-serve.activity.do', type: 'activity', title: '모둠별 꽃밭·복도 가꾸기',
      method: '모둠별 꽃밭·복도 가꾸기', tool: 'timer', minutes: 13,
      levels: { easy: '가꾸기 차례 카드 첫 두 장만 놓고, 교사와 함께 맡은 곳을 가꾼다.', base: '차례 세 장을 놓고 안전 점검 뒤 모둠이 스스로 맡은 곳을 가꾼다.', challenge: '모둠이 스스로 가꾸고, 셋째 문항에서 사진 찍기 도우미(교사 기기로 꽃밭만 찍기)를 한 것까지 표시한다.' },
      activity: {
        title: '맡은 곳 가꾸기', tool: 'timer',
        teacher: '"1·2모둠은 꽃밭 물 주기, 3·4모둠은 복도 종이 줍기예요. 가기 전에 안전 점검부터 해요." 점검 칸을 함께 확인한 뒤 교사가 인솔해 맡은 곳으로 간다. 물뿌리개를 친구에게 뿌리는 학생에게 "물은 꽃과 흙에게만 줘요"라고 말한다. 맨손으로 깨진 것을 주우려는 학생에게 "날카로운 것은 줍지 말고 선생님을 불러요"라고 짚는다. 사진은 교사 기기로 꽃밭과 복도만 찍고 친구 얼굴은 찍지 않는다.',
        task: '안전 점검을 하고 모둠이 맡은 곳을 함께 가꿔요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '가꾸기 전에 점검해요.', toolOptions: { title: '가꾸기 전 안전 점검', safety: ['장갑을 꼈어요', '모종삽은 아래로', '선생님 곁에서'] }, target: { safety: true }, difficulty: 0.1 },
          STEPS('가꾸기 차례를 놓아요.', '꽃밭·복도 가꾸기', ['맡은 곳 가기', '함께 가꾸기', '도구 정리'], 0.15,
            { levels: { easy: { prompt: '첫 두 차례를 놓아요.', toolOptions: { cards: ['함께 가꾸기', '맡은 곳 가기'] }, target: { order: ['맡은 곳 가기', '함께 가꾸기'] } } } }),
          { prompt: '우리 모둠이 한 것에 표시해요.', toolOptions: { title: '가꾸기 점검' }, target: { selfCheck: ['맡은 일을 했어요', '도구를 정리했어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '사진 도우미도 했나요?', target: { selfCheck: ['맡은 일을 했어요', '도구를 정리했어요', '사진 도우미를 했어요'] } } },
            conclude: '안전 점검을 하고, 함께 가꾸고, 도구를 제자리에 정리해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '날카로운 것을 보면요?', options: ['선생님을 불러요', '맨손으로 주워요'], answer: '선생님을 불러요' }] },
      notes: '물 주기는 흙을 만져 마른 곳에만 준다. 사진은 학급 기록용으로 교사 기기로만 찍고 학생 얼굴이 나오지 않게 한다.',
    }),
    SERVE2({
      id: 'auto.e12.g2-serve.wrap.check', type: 'wrap', title: '가꾼 뒤 스스로 점검',
      method: '가꾼 뒤 스스로 점검', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 점검 칸 2칸(맡은 일·정리)을 읽어 주고 함께 표시한다.', base: '점검 칸 3칸(맡은 일·함께하기·정리)에 스스로 표시한다.', challenge: '내 점검을 마친 뒤 짝과 서로 잘한 점 한 가지를 짚어 준다.' },
      wrap: {
        teacher: '"오늘 가꾸기에서 나는 맡은 일을 했나요? 친구와 함께했나요? 도구를 정리했나요?" 점검 칸을 함께 읽고 스스로 표시하게 한다. 하나도 못 했다는 학생에게 "다음 가꾸기에서 하나만 해 봐요"라고 말해 준다. 출구 2번에서 "돈이 있어야 해요"를 고른 학생에게 "오늘 우리가 쓴 것은 손과 마음이었어요"라고 짚는다. 짝 점검은 칭찬만 한다.',
        exitTicket: [
          SELF('가꾸기 점검', ['맡은 일을 했어요', '함께했어요', '정리했어요'], '가꾸기에서 한 것에 표시해요.'),
          CH('돕기는 돈이 있어야 해요?', ['돈 없이도 할 수 있어요', '돈이 있어야 해요', '어른만 해요'], 0, '내 손과 마음으로 할 수 있는 도움이 많아요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '함께 가꾼 날',
        items: [
          { type: 'check', prompt: '오늘 한 것에 ✓ 해요.', options: ['맡은 일 하기', '함께하기', '도구 정리'] },
          { type: 'draw', prompt: '가꾼 꽃밭이나 복도를 그려요.' },
        ],
        easy: { note: '맡은 일을 떠올려요.', items: [{ type: 'draw', prompt: '물뿌리개를 그려요.' }] },
      },
    }),
    SERVE2({
      id: 'auto.e12.g2-serve.wrap.thanks', type: 'wrap', title: '감사 카드 꾸미기',
      method: '감사 카드 꾸미기', tool: 'collage', minutes: 7,
      levels: { easy: '조각 1개로 감사 카드를 꾸민다.', base: '조각 3개 이상으로 감사 카드를 꾸민다.', challenge: '조각 3개 이상으로 꾸미고, 활동지에 그림을 더 그려 카드를 완성한다.' },
      wrap: {
        teacher: '"오늘 함께 가꾼 친구나, 앞으로 도울 사람에게 줄 감사 카드를 꾸며요." 조각을 붙이며 "누구에게 주고 싶나요?"라고 묻되 대답하지 않아도 된다고 말한다. 줄 사람이 떠오르지 않는 학생에게 "오늘 같은 모둠 친구에게 줘도 좋아요"라고 도와준다. 출구 2번에서 "손해예요"를 고른 학생에게 "도움을 주면 받는 사람도 주는 사람도 기뻐요"라고 짚는다.',
        exitTicket: [
          PASTE(['heart', 'star', 'leaf', 'circle'], ['감사 카드를 꾸몄어요', '줄 사람을 떠올렸어요'], '감사 카드를 꾸며요.', 1),
          CH('도움을 주고받으면요?', ['서로 기뻐요', '손해예요', '귀찮아요'], 0, '도움을 주고받으면 서로 기뻐요.'),
          MOOD,
        ],
      },
      worksheet: {
        title: '고마워요',
        items: [
          { type: 'blank', prompt: '감사 카드를 써요.', text: '___, 함께해 줘서 고마워요!', answer: '(줄 사람)' },
          { type: 'draw', prompt: '감사 카드에 그림을 그려요.' },
        ],
        easy: { note: '"고마워요"를 떠올려요.', items: [{ type: 'draw', prompt: '하트를 그려요.' }] },
      },
      notes: '카드를 받을 사람은 학생이 정한다. 가족에게 주는지 묻거나 확인하지 않는다.',
    }),
  ];

  PaperLessons.registerModules([].concat(T_HABIT1,T_REL1,T_SELF1,T_INQ1,T_SERVE1,T_ADAPT1,T_ADAPT2,T_HABIT2,T_REL2,T_SELF2,T_INQ2,T_SERVE2));
})();
