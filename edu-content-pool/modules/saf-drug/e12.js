/* 창체 안전교육 약물 중독 예방 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-drug 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 약물 및 사이버 중독 예방
 *   "약물 오남용의 위험성 및 올바른 약물 복용법 알기" · "중독성물질을 알고 안전한 활용 방법" (+ 유치원 항목 "생활주변의 해로운 약물·화학제품 만지거나 먹지 않기"로 저학년 수준 보충)
 *   + 7대 표준안 약물 소분류(흡연·음주·고카페인).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 8자 안팎, 좋아요/안돼요 고르기·따라 하기·역할놀이. 장면·인물은 직접 지은 것이다(가명).
 * 주제 6개(1학년 3 · 2학년 3). 약 이름·용량·복용 횟수·복용법은 쓰지 않는다 — 약은 늘 "어른이 주는 약을 어른과 함께"로만 말한다.
 * 담배·술·카페인은 "어린이 몸에 해로워요·어른 물건이에요"까지만 말하고 사용하는 모습·방법을 묘사하지 않는다.
 * 수치(초·m·%·mg)·법 조항은 쓰지 않는다(근거 파일에 약물 중독 예방 초1-2 수치가 없다). 시계 시각은 연습용 그림 봉투의 '우리 반 연습 시각'이다.
 * 그림그래프 수는 모두 수업용으로 지은 가상의 우리 반 자료이고 화면 제목에 '가상'을 적는다.
 *
 * 사람 확인: 근거 파일(research-*.md)에 고시 항목 제목만 있어 아래 일반 수칙은 공식 안내처에서 확인해야 한다.
 *   (확인처: 식품의약품안전처 '의약품 안전 사용' 어린이 교육 자료 · 질병관리청 · 한국소비자원 생활화학제품 안전 · 환경부 생활화학제품 안전 정보 · 보건복지부/한국건강증진개발원 금연·절주 자료)
 *   - medicine-adult.*: 약은 어른이 줄 때만 어른과 함께 먹는다 / 약을 많이 먹는다고 빨리 낫지 않는다 / 친구 약·남의 약은 먹지 않는다 / 친구가 주는 비타민·영양제도 어른께 먼저 묻는다 /
 *       약을 '사탕'이라고 부르지 않는다(사탕으로 알고 먹을 수 있다) / 아프면 참지 말고 어디가 아픈지 어른께 말한다 [식품의약품안전처]
 *   - mouth.*: 떨어진 알약·처음 보는 열매·모르는 가루·병 속 물질은 만지거나 맛보지 않고 어른께 알린다 / 알록달록해도 사탕인지 눈으로는 알 수 없다 / 입으로 삼킨 것은 입→식도→위로 간다(몸 교구의 소화 길) /
 *       담배꽁초를 줍거나 만지지 않는다 [식품의약품안전처·한국소비자원]
 *   - smoke-away.*: 담배 연기는 코와 입으로 들어와 숨길(기관·폐)로 간다 / 내가 피우지 않아도 옆 사람 연기는 몸에 해롭다 / 연기가 오면 자리를 옮기고 코와 입을 가린다 /
 *       어른께 "연기 때문에 기침 나요", "밖에서 피워 주세요"처럼 부드럽게 말한다 / 연기는 금방 안 사라지고 방·차 안에 남는다 [보건복지부·한국건강증진개발원·질병관리청]
 *   - my-medicine.*: 약 봉투의 이름을 보고 내 약인지 안다 / 약 봉투에 적힌 때에 어른과 함께 먹는다 / 먹는 때를 놓쳐도 두 번 먹지 않고 어른께 묻는다 / 지난 약·남은 약은 혼자 먹지 않고 어른께 드린다 /
 *       친구 약은 친구 몸에 맞춰 지은 약이라 나에게 맞지 않을 수 있다 [식품의약품안전처]
 *   - household.*: 세제·표백제·벌레약·곰팡이 제거제는 만지거나 냄새 맡지 않는다 / 병의 조심 그림 표시(유해 그림문자)는 '조심하세요'라는 뜻이다 / 음료병에 옮겨 담은 세제는 주스로 헷갈리기 쉽다 /
 *       세제는 어린이 손이 닿지 않는 높은 곳에 둔다 / 쏟아지면 손 멈추고 물러서서 어른을 부른다 / 냄새가 좋아도 안전한 것이 아니다 [한국소비자원·환경부]
 *   - grownup-things.*: 술·담배·커피·에너지 음료는 어린이 것이 아니다(자라는 몸에 해롭다) / 한 모금도 마시지 않는다 / 어른이 장난으로 권해도 "아니요, 괜찮아요"라고 말하고 집 어른께 알린다 /
 *       커피 우유·커피 맛 음료·술이 든 초콜릿처럼 겉보기에 간식 같아도 어른 것일 수 있다 / 에너지 음료에는 잠을 깨우는 것(카페인)이 많이 들어 있고 커피는 잠이 안 오게 할 수 있다(교사 말) [보건복지부·한국건강증진개발원·식품의약품안전처(고카페인 표시)]
 *   그 밖: 구호·몸짓(손 멈춰·어른 불러·함께 먹어 등)과 타이머 카드는 우리 반 놀이 약속이다. 그림 지도·그림 봉투의 칸·시각·이름은 모두 지은 것이다.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-drug', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const OKNO = ['좋아요', '안돼요'];

  // 두 칸 나누기(mindmap·story sort): 기본 6장, 쉬움 4장(prompt·target 도 함께 바꿈), 도전 8장(헷갈리는 카드 2장 — 둘째 칸으로 간다)
  const SORT2 = (slots, prompt, topic, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: a, [slots[1]]: b });
    const opts = { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] };
    if (topic) opts.topic = topic;
    return {
      prompt, toolOptions: opts, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0], ok[1], no[1], ok[2], hard[1], no[2]] }, target: { sort: S(ok, [...no, ...hard]) } },
      },
      ...more,
    };
  };
  // 두 칸 + 도전 '어른께 물어요' 셋째 칸(mindmap): 기본 6장 두 칸, 쉬움 4장, 도전은 셋째 칸과 묻기 카드 2장이 더해진다
  const SORT3 = (slots, ask, prompt, topic, ok, no, asks, d, more) => {
    const S = (a, b) => ({ [slots[0]]: a, [slots[1]]: b });
    return {
      prompt, toolOptions: { topic, slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(세 칸).`, toolOptions: { slots: [...slots, ask], cards: [ok[0], no[0], asks[0], ok[1], no[1], ok[2], asks[1], no[2]] }, target: { sort: Object.assign(S(ok, no), { [ask]: asks }) } },
      },
      ...more,
    };
  };
  // 장면 차례 놓기(story·kitchen): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 틀린 장면 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const ids = cards.map((c) => c.id);
    const lv = { easy: { state: { at: { [ids[0]]: 0, [ids[1]]: null, [ids[2]]: null } } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d, levels: lv, ...more };
  };
  // 구호 동작 차례(timer order): 기본 3장, 쉬움 첫·끝 동작 2장
  const MOVES = (prompt, title, cards, d, more) => ({
    prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [cards[2], cards[0]] }, target: { order: [cards[0], cards[2]] } } },
    ...more,
  });
  // 장면 행동 고르기(emotion branch): 기본 보기 3개, 쉬움 앞 2개
  const BRANCH = (prompt, situation, choices, good, d, more) => ({
    prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice: good }, difficulty: d,
    levels: { easy: { toolOptions: { choices: choices.filter((c) => c.id === good || c === choices.find((x) => x.id !== good)) } } },
    ...more,
  });
  // 정리 출구: 그림 점검표(스스로 점검), 구호 순서(timer), 마음 눈금
  const CHECK = (title, items, prompt) => ({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items }, prompt: prompt || '오늘 지킬 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 });
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SCALE = (situation, feeling, prompt, top) => ({ type: 'tool', tool: 'emotion', options: { mode: 'scale', situation, feeling, steps: 5, scaleLabels: { 1: '조금', 5: top || '아주 잘' } }, prompt: prompt || '얼마나 잘 지킬 수 있나요?', target: { level: 'any' }, difficulty: 0.1 });
  // 갈림길(dilemma): 기본 2번 갈림, 쉬움 첫 갈림만(보기 2개), 도전 끝에서 까닭 카드 고르기
  const DILEMMA = (prompt, scene, path, reasons, good, d, more) => {
    const first = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { delete x.next; x.ending = c.easyEnding || '잘 골랐어요.'; } delete x.easyEnding; return x; }) });
    const clean = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); delete x.easyEnding; return x; }) });
    return {
      prompt, toolOptions: { title: '어떻게 할까요?', scene: clean }, target: { path: [path] }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(한 번).`, toolOptions: { scene: first }, target: { path: [[path[0]]] } },
        challenge: { prompt: `${cut(prompt)}, 까닭도요.`, toolOptions: { reasons, maxReasons: 1 }, target: { path: [path], reasons: [good] } },
      },
      ...more,
    };
  };
  // 우리 반 그림그래프(chart picture): 완성하기 + 가장 많은 것 읽기 — 자료는 모두 가상
  const PICT_EXIT = (prompt, title, data) => ({ type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'build', title, unit: '명', data, icons: [{ value: 1, name: '1명' }], icon: 'person', given: [0] }, prompt, target: { build: true }, difficulty: 0.15 });
  const PREAD_EXIT = (prompt, title, data, question, pick) => ({ type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title, unit: '명', data, icons: [{ value: 1, name: '1명' }], icon: 'person', question, choices: data.map((x) => x[0]) }, prompt, target: { pick }, difficulty: 0.15 });

  // =====================================================================================================
  // 1학년 · 약은 어른과 함께
  const ADULT = MOD('saf-drug.e12.medicine-adult', [1]);
  const T_ADULT = [
    ADULT({
      id: 'saf-drug.e12.medicine-adult.intro.picture', type: 'intro', title: '배 아픈 지우의 마음 고르기',
      method: '그림 장면 보고 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(걱정·신남)만 읽어 주고 지우 마음을 함께 고른다.', base: '시연을 보고 마음 카드 네 장 가운데 지우 마음과 부를 사람을 고른다.', challenge: '고른 뒤 "왜냐하면 ~"으로 까닭을 한마디 말한다.' },
      intro: {
        teacher: '"지우가 배가 아파요. 약 상자 앞에 서 있네요. 지우 마음은 어떨까요?" 두세 명의 대답을 듣고(기다릴 반응: "걱정돼요", "무서워요") 시연 단추로 마음 카드와 부를 사람 카드가 이어지는 모습을 보여 준다. "약 상자에 약이 있으니 꺼내 먹으면 돼요"라는 말이 나오면 "그 약이 지우 약인지, 얼마나 먹는지 지우가 알까요?"라고 되묻는다. 오늘은 아플 때 혼자 약을 꺼내지 않고 어른께 말하는 약속을 배운다고 밝힌다.',
        student: '아플 때 나는 누구에게 말할지 떠올려 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'feel', label: '지우 마음' }, { id: 'call', label: '부를 사람' }], cards: [{ id: 'worry', text: '걱정' }, { id: 'joy', text: '신남' }, { id: 'adult', text: '집 어른' }, { id: 'none', text: '아무도' }] }, sequence: [{ match: { feel: 'worry', call: 'adult' } }] },
        art: { draw: 'a small paper child holding their tummy and standing in front of a closed paper medicine box on a high shelf, looking toward a door where a grown-up is coming', banner: '아프면 어른께 말해요', extra: [{ motif: 'house', x: 300, y: 96 }] },
      },
      notes: '아팠던 일을 자세히 묻지 않는다. 그림 속 지우 이야기로만 말한다.',
    }),
    ADULT({
      id: 'saf-drug.e12.medicine-adult.intro.chant', type: 'intro', title: '"손 멈춰, 어른 불러, 함께 먹어"',
      method: '구호와 동작 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 구호 카드 두 장(손 멈춰·어른 불러)을 들어 보이며 동작과 함께 말한다.', base: '구호 카드 세 장의 차례를 보고 동작과 함께 세 번 따라 한다.', challenge: '교사가 카드 없이 구호만 섞어 부르면 알맞은 동작을 바로 한다.' },
      intro: {
        teacher: '"손 멈춰! (두 손 펴서 멈춤) 어른 불러! (손나팔) 함께 먹어! (두 손 맞잡기)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 동작과 함께 세 번 따라 한다. "약은 혼자 먹어도 돼요, 나 다 컸어요"라는 말이 나오면 "약은 누가 꺼내 주기로 했지요? 큰 형님도 어른께 묻고 먹어요"라고 되묻는다.',
        student: '선생님을 따라 "손 멈춰, 어른 불러, 함께 먹어!"를 동작과 함께 말해요.',
        demo: { tool: 'timer', options: { title: '약 구호', cards: ['함께 먹어', '손 멈춰', '어른 불러'] }, sequence: [{ order: ['손 멈춰', '어른 불러', '함께 먹어'] }] },
        art: { draw: 'paper children raising both palms to say stop, then cupping their hands to call a grown-up, then holding hands with a smiling paper adult', banner: '손 멈춰, 어른 불러, 함께 먹어', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    ADULT({
      id: 'saf-drug.e12.medicine-adult.activity.okno', type: 'activity', title: '약 먹는 일 좋아요·안돼요',
      method: '좋아요/안돼요 그림 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 바로 초록 테두리가 생긴다.', base: '카드 6장(6자 안팎 글)을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "약을 사탕이래요"처럼 헷갈리는 카드 2장이 섞인다.' },
      activity: {
        title: '약 먹는 일 두 칸으로 나누기', tool: 'mindmap',
        teacher: '"이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 반 전체가 소리 내어 읽는다. "약 많이 먹기"를 좋아요에 두는 학생에게 "약을 많이 먹으면 빨리 나을까요? 약은 어른이 정해 준 만큼만 먹어요"라고 말해 준다. 어른이 장난으로 약을 "사탕"이라고 불러도 약은 사탕이 아니라는 점을 짚는다.',
        task: '카드를 좋아요·안돼요 칸으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '집에서 하는 일을 나누어요.', '집에서', ['어른이 준 약', '아프면 말하기', '어른과 약 먹기'], ['혼자 약 꺼내기', '친구 약 먹기', '약 많이 먹기'], ['약을 사탕이래요', '약 몰래 맛보기'], 0.1),
          SORT2(OKNO, '학교에서 하는 일을 나누어요.', '학교에서', ['선생님께 말해요', '보건실에 가요', '참지 않고 말해요'], ['친구 약 받기', '가방 속 약 먹기', '아픈 것 숨기기'], ['친구 비타민 먹기', '약 바꿔 먹기'], 0.15),
          SORT2(OKNO, '아플 때 하는 일을 나누어요.', '아플 때', ['어른께 말하기', '어른 기다리기', '아픈 곳 말하기'], ['약 상자 열기', '혼자 약 먹기', '약을 더 먹기'], ['약 놀이하기', '빈 약병 놀이'], 0.2, { conclude: '약은 어른이 줄 때만, 어른과 함께 먹어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['어른이 준 약 먹기', ''], ['혼자 약 꺼내기', ''], ['아프면 말하기', ''], ['친구 약 먹기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 행동에 ○ 해요.', options: ['어른께 말하기', '혼자 약 꺼내기'], answer: '어른께 말하기' }] },
      notes: '교구는 그림을 그리지 못해 카드에 짧은 글을 쓴다. 쉬움 단계에서는 교사가 카드를 하나씩 읽어 준다.',
    }),
    ADULT({
      id: 'saf-drug.e12.medicine-adult.activity.where-hurts', type: 'activity', title: '아픈 곳 짚고 말하기',
      method: '몸 부위 눌러 아픈 곳 말하기', tool: 'body', minutes: 13,
      levels: { easy: '고를 곳이 2곳이고, 누르면 그 곳 이름이 바로 보인다.', base: '고를 곳 3~4곳 가운데 짚고 "여기가 아파요"를 짝에게 말한다.', challenge: '짚은 뒤 "어디가, 언제부터" 두 가지를 짝에게 말한다(교사가 짝 말하기를 살핀다).' },
      activity: {
        title: '종이 몸에서 아픈 곳 짚기', tool: 'body',
        teacher: '"배가 아프면 어른께 어떻게 말할까요? 먼저 아픈 곳을 짚어 볼까요?" 짚은 뒤 짝과 한 명은 어른, 한 명은 아픈 사람이 되어 "여기가 아파요" 하고 말해 본다. "아프다고 하면 혼날 것 같아요"라는 학생에게 "아픈 것은 잘못이 아니에요. 말해야 어른이 도와줄 수 있어요"라고 말해 준다. 머리는 종이 몸에 고르는 칸이 없어 자기 머리를 손으로 짚게 한다.',
        task: '아픈 곳을 짚고 짝에게 말해요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '배가 아파요. 배를 짚어요.', toolOptions: { mode: 'parts', parts: ['배', '목', '무릎'] }, target: { parts: ['배'] }, difficulty: 0.1,
            levels: { easy: { toolOptions: { parts: ['배', '무릎'] } } } },
          { prompt: '목이 따끔해요. 목을 짚어요.', toolOptions: { mode: 'parts', parts: ['목', '배', '발목', '어깨'] }, target: { parts: ['목'] }, difficulty: 0.15,
            levels: { easy: { toolOptions: { parts: ['목', '발목'] } } } },
          { prompt: '아플 때 누구에게 말해요?', toolOptions: { mode: 'parts', parts: ['배', '목'], readOnly: true, ask: { q: '배가 아파요. 누구에게 말해요?', choices: ['집 어른', '동생', '아무에게도'] } }, target: { pick: 0 }, difficulty: 0.15,
            levels: { easy: { toolOptions: { ask: { q: '배가 아파요. 누구에게 말해요?', choices: ['집 어른', '아무에게도'] } } } },
            conclude: '아픈 곳을 짚고 "여기가 아파요" 하고 어른께 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '아프면 무엇을 해요?', options: ['어른께 말해요', '약을 찾아요', '참아요'], answer: '어른께 말해요' }] },
      notes: '종이 몸에는 머리 칸이 없어 계획의 "머리" 대신 배·목을 쓰고, 머리는 학생이 자기 몸을 짚게 한다. 실제로 아픈 학생이 있으면 보건실로 보낸다.',
    }),
    ADULT({
      id: 'saf-drug.e12.medicine-adult.activity.role', type: 'activity', title: '"아파요" 역할놀이 차례',
      method: '역할놀이 이야기 차례', tool: 'story', minutes: 14,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장면만 놓고, 말풍선은 2장 가운데 고른다.', base: '장면 세 장을 차례대로 놓고 짝과 역할놀이하며, 말풍선은 3장 가운데 고른다.', challenge: '"혼자 약 먹어요" 같은 틀린 장면 한 장이 섞여 빼고 놓고, 말풍선은 4장 가운데 고른다.' },
      activity: {
        title: '아플 때 장면 차례와 할 말', tool: 'story',
        teacher: '"아파요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 짝과 한 명은 아픈 아이, 한 명은 어른이 되어 차례대로 해 본다. "약 먹어요"를 맨 앞에 두는 학생에게 "어른께 말하지 않고 먹으면 그 약이 맞는 약인지 누가 알까요?"라고 묻는다. 말풍선 문항에서는 어른께 할 말을 고른 뒤 큰 소리로 따라 한다.',
        task: '장면 카드를 차례대로 놓고 할 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('배가 아파요. 차례로 놓아요.', [{ id: 'hurt', text: '배가 아파요' }, { id: 'tell', text: '어른께 말해요' }, { id: 'take', text: '어른이 준 약' }], { id: 'alone', text: '혼자 약 먹어요' }, 0.15),
          ORDER3('학교에서 머리가 아파요.', [{ id: 'ache', text: '머리가 아파요' }, { id: 'teacher', text: '선생님께 말해요' }, { id: 'rest', text: '보건실에서 쉬어요' }], { id: 'friend', text: '친구 약 먹어요' }, 0.2),
          ORDER3('밤에 기침이 나요. 차례로 놓아요.', [{ id: 'cough', text: '기침이 나요' }, { id: 'wake', text: '어른께 알려요' }, { id: 'with', text: '어른과 약 먹어요' }], { id: 'box', text: '약 상자 열어요' }, 0.2),
          { prompt: '어른께 할 말을 골라요.', toolOptions: { mode: 'fill', slots: [{ id: 'say', who: '나', label: '어른께: "___"' }], cards: [{ id: 'hurt', text: '배가 아파요' }, { id: 'secret', text: '몰래 먹을래요' }, { id: 'fine', text: '괜찮아요' }] }, target: { fill: { say: 'hurt' } }, difficulty: 0.15,
            levels: { easy: { toolOptions: { cards: [{ id: 'hurt', text: '배가 아파요' }, { id: 'secret', text: '몰래 먹을래요' }] } }, challenge: { toolOptions: { cards: [{ id: 'hurt', text: '배가 아파요' }, { id: 'secret', text: '몰래 먹을래요' }, { id: 'fine', text: '괜찮아요' }, { id: 'candy', text: '약 사탕 줘요' }] } } },
            conclude: '아프면 어른께 말하고, 어른이 주는 약만 먹어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '아프면 ___께 말해요.', answer: '어른' }] },
    }),
    ADULT({
      id: 'saf-drug.e12.medicine-adult.activity.alone', type: 'activity', title: '갈림길: 어른이 잠깐 나갔어요',
      method: '갈림길 고르기', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 잘한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '혼자 있을 때 아프면?', tool: 'dilemma',
        teacher: '"열이 나는데 어른이 잠깐 밖에 나가셨어요. 나는 어떻게 할까요?" 보기를 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "약 상자를 열어요"를 고른 학생에게 "약 상자 속 약 가운데 어느 것이 열약인지 알 수 있을까요?"라고 묻는다. \'처음부터 다른 길\'로 다른 결과도 보고, 어른을 부르고 기다리는 것이 나를 지키는 길이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('열이 나요. 어른이 없어요. 골라요.', { text: '열이 나요. 어른이 잠깐 나갔어요.', motif: 'house', choices: [
            { id: 'open', text: '약 상자를 열어요', result: '어떤 약인지 몰라 헷갈려요.', why: '약 상자는 혼자 열지 않아요.' },
            { id: 'call', text: '전화로 어른을 불러요', result: '어른이 "곧 갈게" 하셨어요.', easyEnding: '어른이 와서 살펴 주셨어요.', next: { text: '어른을 기다려요. 어떻게 해요?', choices: [
              { id: 'rest', text: '누워서 기다려요', result: '어른이 오셔서 살펴 주셨어요.', ending: '기다려서 안전해요.' },
              { id: 'find', text: '약을 꺼내 둬요', result: '꺼낸 약을 잘못 먹을 수 있어요.', why: '약은 어른이 꺼내요.' }] } }] },
          ['call', 'rest'], [{ id: 'adult', text: '약은 어른이 줘요' }, { id: 'fast', text: '빨리 나으려고요', why: '혼자 먹으면 더 아플 수 있어요.' }, { id: 'brave', text: '혼자 할 수 있어서요', why: '약은 혼자 하지 않아요.' }], 'adult', 0.15),
          DILEMMA('할머니 댁에서 배가 아파요.', { text: '할머니 댁 식탁에 약봉지가 있어요.', motif: 'house', choices: [
            { id: 'eat', text: '봉지 약을 먹어요', result: '누구 약인지 몰라요.', why: '누구 약인지 모르면 먹지 않아요.' },
            { id: 'tell', text: '할머니께 말해요', result: '할머니가 "어디가 아프니?" 하세요.', easyEnding: '할머니가 살펴 주셨어요.', next: { text: '할머니가 어디가 아프냐고 하세요.', choices: [
              { id: 'point', text: '아픈 곳을 말해요', result: '할머니가 도와주셨어요.', ending: '말해서 도움을 받았어요.' },
              { id: 'hide', text: '괜찮다고 숨겨요', result: '아픈데 아무도 몰라요.', why: '아프면 숨기지 말고 말해요.' }] } }] },
          ['tell', 'point'], [{ id: 'say', text: '아프면 말해야 해요' }, { id: 'bag', text: '봉지가 예뻐서요', why: '예뻐도 남의 약은 먹지 않아요.' }, { id: 'shy', text: '부끄러워서요', why: '아픈 것은 부끄럽지 않아요.' }], 'say', 0.2),
          DILEMMA('밤에 기침이 나요. 골라요.', { text: '밤에 기침이 나요. 모두 자요.', motif: 'moon', choices: [
            { id: 'syrup', text: '물약을 혼자 마셔요', result: '얼마나 먹는지 몰라요.', why: '물약도 혼자 먹지 않아요.' },
            { id: 'wake', text: '어른을 깨워요', result: '어른이 일어나셨어요.', easyEnding: '어른이 살펴 주셨어요.', next: { text: '어른이 일어나셨어요. 어떻게 해요?', choices: [
              { id: 'say', text: '"기침 나요" 말해요', result: '어른이 살펴 주셨어요.', ending: '말해서 편안해요.' },
              { id: 'more', text: '약 많이 달라고 해요', result: '약은 많이 먹으면 위험해요.', why: '많이 먹는다고 빨리 낫지 않아요.' }] } }] },
          ['wake', 'say'], [{ id: 'adult', text: '약은 어른과 먹어요' }, { id: 'sleep', text: '어른이 자서요', why: '자고 있어도 깨워서 말해요.' }, { id: 'much', text: '많이 먹고 싶어서요', why: '약은 많이 먹지 않아요.' }], 'adult', 0.25, { conclude: '어른이 없으면 부르고 기다려요. 약은 혼자 꺼내지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '어른이 없을 때 아파요. 무엇을 해요?', options: ['어른을 불러요', '약 상자를 열어요'], answer: '어른을 불러요' }] },
      notes: '정답 길이 있는 갈림길이다. 다른 길도 끝까지 가 보게 해서 결과를 견주게 한다. 전화 거는 법이 낯선 학생에게는 "옆집 어른·경비실도 어른"이라고 덧붙인다.',
    }),
    ADULT({
      id: 'saf-drug.e12.medicine-adult.wrap.promise', type: 'wrap', title: '내가 지킬 약속 카드',
      method: '약속 낱말 카드 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 카드를 하나씩 읽어 주고 약속 카드 한 장을 함께 고른다.', base: '카드 4장 가운데 지킬 약속 카드 2장을 스스로 고른다.', challenge: '고른 약속 카드를 소리 내어 읽고 짝에게 들려준다.' },
      wrap: {
        teacher: '"오늘 배운 약속 가운데 내가 지킬 카드는 무엇일까요?" 카드를 하나씩 읽어 주고 약속 카드만 바구니에 담게 한다. "약은 사탕" 카드를 담은 학생에게 "약은 사탕처럼 달아도 사탕이 아니에요"라고 말해 준다. 마지막에 "손 멈춰, 어른 불러, 함께 먹어!"를 다 같이 외친다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '내 약속', cards: [{ id: 'with', text: '약은 어른과' }, { id: 'candy', text: '약은 사탕' }, { id: 'alone', text: '혼자 안 먹어요' }, { id: 'friend', text: '친구 약 먹기' }] }, prompt: '지킬 약속 카드만 담아요.', target: { pick: ['with', 'alone'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '아플 때 먼저 해요?', options: ['어른께 말해요', '약 상자 열어요', '참아요'], answer: 0, difficulty: 0.1, explain: '아프면 먼저 어른께 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '약은 어른과 함께',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['약은 어른이 줄 때만 먹어요', '혼자 약을 꺼내지 않아요', '친구 약은 먹지 않아요'] },
          { type: 'draw', prompt: '아플 때 어른께 말하는 내 모습을 그려요.' },
        ],
        easy: { note: '"손 멈춰, 어른 불러!"를 떠올려요.', items: [{ type: 'draw', prompt: '어른과 함께 있는 내 모습을 그려요.' }] },
      },
    }),
    ADULT({
      id: 'saf-drug.e12.medicine-adult.wrap.check', type: 'wrap', title: '오늘 약 약속 점검표',
      method: '그림 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸 두 개를 읽어 주고 함께 표시한다.', base: '점검표 세 칸을 스스로 읽고 지킬 것에 표시한다.', challenge: '활동지에 집에 가서 어른과 함께 확인할 칸을 하나 더 적는다.' },
      wrap: {
        teacher: '"오늘부터 지킬 약속에 표시해 볼까요?" 점검표 칸을 함께 읽고 할 수 있는 것에 표시하게 한다. 출구 2번에서 "친구 약을 먹어요"를 고른 학생에게 "친구 약은 친구에게 맞춘 약이에요. 내 몸에는 맞지 않을 수 있어요"라고 말해 준다. 활동지는 집에 가져가 어른과 함께 보게 한다.',
        exitTicket: [
          CHECK('오늘 지킬 것', [{ id: 'alone', text: '혼자 약 안 꺼내요' }, { id: 'say', text: '아프면 말해요' }, { id: 'only', text: '어른이 준 약만' }]),
          { type: 'choice', prompt: '친구가 약을 줘요. 어떻게 해요?', options: ['받아서 먹어요', '"괜찮아" 해요', '반만 먹어요'], answer: 1, difficulty: 0.1, explain: '친구 약은 먹지 않고 "괜찮아" 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '오늘 약 약속',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['혼자 약을 꺼내요', ''], ['아프면 어른께 말해요', ''], ['친구 약을 먹어요', '']], answer: '×, ○, ×' },
          { type: 'blank', prompt: '구호를 따라 써요.', text: '손 멈춰, 어른 불러, ___!', answer: '함께 먹어' },
        ],
        easy: { note: '어른과 함께 읽어요.', items: [{ type: 'draw', prompt: '아플 때 부를 어른을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 모르는 것은 입에 넣지 않아요
  const MOUTH = MOD('saf-drug.e12.mouth', [1]);
  const PARK = [
    { name: '떨어진 알약', icon: 'dot', at: [1, 0] }, { name: '뜯긴 봉지', icon: 'dot', at: [3, 1] }, { name: '담배꽁초', icon: 'dot', at: [0, 2] },
    { name: '미끄럼틀', icon: 'park', at: [2, 2] }, { name: '모래밭', icon: 'field', at: [0, 0] },
  ];
  const EAT = ['먹어도 돼요', '안 돼요'];
  const T_MOUTH = [
    MOUTH({
      id: 'saf-drug.e12.mouth.intro.find', type: 'intro', title: '놀이터 지도에서 떨어진 것 찾기',
      method: '그림 지도에서 떨어진 물건 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 물건 두 개(떨어진 알약·뜯긴 봉지)의 칸을 손으로 짚어 주며 함께 찾는다.', base: '시연을 보고 떨어진 물건 세 개가 있는 칸을 말한다.', challenge: '시연 전에 지도만 보고 네 곳(모래밭 포함)을 먼저 찾아 말한 뒤, 모래밭은 왜 괜찮은지 말한다.' },
      intro: {
        teacher: '"놀이터 바닥에 무엇이 떨어져 있을까요?" 지도를 보며 두세 명의 대답을 듣고(기다릴 반응: "알약이요", "봉지요") 시연 단추로 떨어진 물건 칸에 핀이 꽂히는 모습을 보여 준다. "알약이 예뻐서 주워 봤어요"라는 말이 나오면 "누가 떨어뜨렸는지, 무슨 약인지 알 수 있을까요?"라고 되묻는다. 오늘은 모르는 것은 만지지도 먹지도 않고 어른께 알리는 약속을 배운다고 밝힌다.',
        student: '놀이터에 떨어진 물건을 하나 골라 손가락으로 가리켜 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: PARK, title: '놀이터' }, sequence: [{ place: '떨어진 알약' }, { place: '뜯긴 봉지' }, { place: '담배꽁초' }] },
        art: { draw: 'a paper playground seen from above with a slide and sandbox, a few tiny colorful paper pills and a torn snack wrapper lying on the ground, a paper child pointing at them and calling a grown-up', banner: '떨어진 것은 만지지 않아요', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '담배꽁초는 그림 지도의 칸 이름으로만 다루고, 줍거나 만지지 않는다는 점만 말한다.',
    }),
    MOUTH({
      id: 'saf-drug.e12.mouth.intro.lookalike', type: 'intro', title: '닮은 카드 넘겨 보기 "눈으로는 몰라요"',
      method: '닮은 그림 카드 넘겨 보기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 짝 두 쌍(사탕·알약, 주스·세제)만 넘겨 보이며 "눈으로는 몰라요"를 함께 말한다.', base: '짝 세 쌍을 넘겨 보며 뒷면을 보기 전에 무엇일지 말해 본다.', challenge: '뒷면을 보기 전에 "어느 쪽이 먹으면 안 되는지"를 손으로 고른다.' },
      intro: {
        teacher: '"이 카드 앞면은 알록달록 동그라미예요. 사탕일까요?" 카드를 넘기기 전에 손을 들어 맞혀 보게 한 뒤 시연 단추로 뒷면을 차례로 보여 준다(앞면: 생김새, 뒷면: 정말 무엇인지). "색이 예쁘면 사탕이에요"라는 말이 나오면 "알약도 예쁜 색이 있어요. 눈으로 보고 알 수 있을까요?"라고 되묻는다. 반 전체가 "눈으로는 몰라요, 어른께 물어요!"를 따라 말한다.',
        student: '"눈으로는 몰라요, 어른께 물어요!"를 따라 말해요.',
        demo: { tool: 'wordcards', options: { mode: 'flip', speak: false, words: [{ en: '알약', ko: '알록달록 동그라미' }, { en: '세제', ko: '노란 주스 색 병' }, { en: '모르는 열매', ko: '빨간 동글 열매' }] }, sequence: [{ flip: ['알약'] }, { flip: ['알약', '세제'] }, { flip: ['알약', '세제', '모르는 열매'] }] },
        art: { draw: 'two paper cards side by side: on one, round colorful candies; on the other, round colorful paper pills that look almost the same, with a question mark cut from paper between them', banner: '눈으로는 몰라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '카드 앞면에는 생김새, 뒷면에는 정말 무엇인지 글로 적었다(교구가 그림을 그리지 못함). 실물 사탕과 빈 약 포장 그림을 함께 보이면 좋다 — 실제 약은 교실에 가져오지 않는다.',
    }),
    MOUTH({
      id: 'saf-drug.e12.mouth.activity.stop', type: 'activity', title: '"멈춰, 만지지 마, 어른께" 차례',
      method: '구호 동작 순서 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '동작 카드 2장(멈춰·어른께)의 차례만 놓는다.', base: '동작 카드 3장의 차례를 놓고 노래에 맞춰 따라 한다.', challenge: '카드 3장이 섞여 나오고, 교사가 구호를 섞어 불러도 혼자 차례를 맞춘 뒤 동작을 해 보인다.' },
      activity: {
        title: '떨어진 것을 봤을 때 동작 차례', tool: 'timer',
        teacher: '"바닥에 모르는 것이 있어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 자리에서 일어나 차례대로 동작을 한다(멈춰: 두 팔 펴기 → 만지지 마: 손 뒤로 → 어른께: 손 들기). "주워서 어른께 갖다 드려요"라는 학생에게 "주우면 손에 묻을 수 있어요. 손은 어디에 둘까요?"라고 묻는다. 세 번째 장면에서는 "선생님!" 하고 부르는 소리도 함께 연습한다.',
        task: '동작 카드를 차례대로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('알약이 떨어져 있어요. 차례로 놓아요.', '떨어진 알약', ['멈춰', '만지지 마', '어른께'], 0.1),
          MOVES('모르는 병이 있어요. 차례로 놓아요.', '모르는 병', ['멈춰요', '뚜껑 그대로', '어른께 알려요'], 0.15),
          MOVES('봉지가 떨어져 있어요. 차례로 놓아요.', '뜯긴 봉지', ['멈춰요', '손은 뒤로', '선생님 불러요'], 0.2, { conclude: '모르는 것을 보면 멈추고, 만지지 않고, 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '구호를 따라 써요.', text: '멈춰, 만지지 마, ___!', answer: '어른께' }] },
    }),
    MOUTH({
      id: 'saf-drug.e12.mouth.activity.pick', type: 'activity', title: '떨어진 알약 장면에서 고르기',
      method: '장면 보고 행동 고르기', tool: 'emotion', minutes: 13,
      levels: { easy: '보기 2개, 고르면 결과가 바로 보인다.', base: '보기 3개, 결과는 확인한 뒤에 보이고 끝에 그때 마음을 고른다.', challenge: '보기 3개를 고른 뒤 "왜냐하면 ~"으로 짝에게 한마디 말한다(결과는 확인한 뒤에 보인다).' },
      activity: {
        title: '모르는 것을 봤을 때 할 행동 고르기', tool: 'emotion',
        teacher: '"바닥에 알록달록 알약이 떨어져 있어요. 나는 어떻게 할까요?" 고른 뒤 짝과 한 명은 나, 한 명은 어른이 되어 "선생님, 여기 알약이 있어요" 하고 알리는 말을 해 본다. "친구 줘요"를 고른 학생에게 "친구가 먹으면 친구 몸은 어떻게 될까요?"라고 묻는다. 마지막 문항에서 어른께 알렸을 때 마음을 고르며 알린 것이 잘한 일이라고 짚는다.',
        task: '장면을 듣고 할 행동과 마음을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BRANCH('알약이 떨어져 있어요. 어떻게 해요?', '바닥에 알록달록 알약이 있어요.', [
            { id: 'eat', text: '주워 먹어요', result: '배가 아플 수 있어요.', mood: '걱정' },
            { id: 'tell', text: '어른께 알려요', result: '어른이 치워 주셨어요.', mood: '뿌듯함' },
            { id: 'give', text: '친구 줘요', result: '친구가 먹을 수 있어요.', mood: '걱정' }], 'tell', 0.1),
          BRANCH('처음 보는 열매예요. 어떻게 해요?', '놀이터 옆에 빨간 열매가 있어요.', [
            { id: 'taste', text: '조금 맛봐요', result: '조금도 몸에 들어가요.', mood: '걱정' },
            { id: 'ask', text: '어른께 물어요', result: '어른이 "먹으면 안 돼" 하셨어요.', mood: '편안함' },
            { id: 'pick', text: '따서 모아요', result: '손에 즙이 묻을 수 있어요.', mood: '놀람' }], 'ask', 0.15),
          { prompt: '어른께 알렸어요. 내 마음은?', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '어른께 알렸어요' }], cards: ['뿌듯함', '편안함', '화남'] }, target: { match: { s1: ['뿌듯함', '편안함'] } }, difficulty: 0.1,
            conclude: '모르는 것은 먹지 않고 어른께 알려요. 알리면 모두 안전해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '떨어진 알약을 봤어요. 무엇을 해요?', options: ['어른께 알려요', '주워 먹어요'], answer: '어른께 알려요' }] },
    }),
    MOUTH({
      id: 'saf-drug.e12.mouth.activity.sort', type: 'activity', title: '먹어도 돼요·안 돼요 나누기',
      method: '먹어도 돼요/안 돼요 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 두 칸에 다 놓은 뒤 확인한다.', challenge: '"어른께 물어요" 칸이 더해져 카드 8장을 세 칸에 나눈다(친구가 준 과자처럼 물어보고 먹을 것).' },
      activity: {
        title: '먹어도 되는 것과 안 되는 것', tool: 'mindmap',
        teacher: '"이것은 먹어도 될까요?" 카드를 놓을 때마다 이름을 소리 내어 읽는다. "모르는 열매"를 먹어도 돼요에 두는 학생에게 "예쁘고 맛있어 보여도 먹어도 되는지 눈으로 알 수 있을까요?"라고 묻는다. 도전 단계의 "어른께 물어요" 칸은 나쁜 것이 아니라 먼저 물어보고 먹는 것이라고 짚는다.',
        task: '카드를 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT3(EAT, '어른께 물어요', '집에서 나누어요.', '집에서', ['내 밥', '어른이 준 간식', '내 물병'], ['떨어진 알약', '모르는 가루', '모르는 병 속 물'], ['처음 보는 과자', '선물 받은 사탕'], 0.1),
          SORT3(EAT, '어른께 물어요', '학교에서 나누어요.', '학교에서', ['급식 반찬', '내 우유', '내 물통 물'], ['바닥 사탕', '뜯긴 봉지 과자', '모르는 알갱이'], ['친구가 준 젤리', '친구 생일 떡'], 0.15),
          SORT3(EAT, '어른께 물어요', '놀이터에서 나누어요.', '놀이터에서', ['어른이 준 빵', '내 도시락', '어른이 깎은 사과'], ['풀숲 열매', '모래 속 사탕', '버려진 음료'], ['처음 보는 음료', '모르는 사람 과자'], 0.2, { conclude: '모르는 것은 입에 넣지 않아요. 헷갈리면 어른께 물어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '먹어도 되면 ○, 아니면 ×를 써요.', columns: ['물건', '○ / ×'], cells: [['내 밥', ''], ['떨어진 알약', ''], ['모르는 열매', ''], ['내 우유', '']], answer: '○, ×, ×, ○' }],
        easy: [{ type: 'choice', prompt: '먹어도 되는 것에 ○ 해요.', options: ['내 밥', '떨어진 알약'], answer: '내 밥' }] },
      notes: '"모르는 사람 과자"는 먹지 않고 어른께 알리는 쪽으로 이야기를 이어 간다(생활안전 유괴 예방과 이어짐).',
    }),
    MOUTH({
      id: 'saf-drug.e12.mouth.activity.inside', type: 'activity', title: '입에 넣은 것이 가는 길',
      method: '몸속 길 눌러 보기', tool: 'body', minutes: 13,
      levels: { easy: '입이 미리 눌려 있어 다음 두 칸만 누르고, 누르면 이름이 보인다.', base: '입 → 식도 → 위 세 칸을 차례로 누른다.', challenge: '길을 누른 뒤 "그래서 모르는 것은 입에 넣지 않아요"를 따라 말하고 마지막 문항 보기를 고른다.' },
      activity: {
        title: '종이 몸에서 삼킨 것이 가는 길', tool: 'body',
        teacher: '"입에 넣은 것은 어디로 갈까요?" 입에서 시작해 목 안(식도)을 지나 배 속(위)까지 손가락으로 따라가 보게 한다. "뱉으면 괜찮아요"라는 학생에게 "입에 넣는 순간 조금은 목으로 넘어갈 수 있어요. 그래서 처음부터 넣지 않아요"라고 말해 준다. 종이 몸의 식도가 우리 몸 어디쯤인지 자기 목을 짚어 보게 한다.',
        task: '몸속 길을 차례로 눌러요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '삼킨 것이 가는 길을 눌러요.', toolOptions: { mode: 'path', organs: ['입', '식도', '위', '폐'] }, target: { path: ['입', '식도', '위'] }, difficulty: 0.15,
            levels: { easy: { state: { path: ['입'] } } } },
          { prompt: '삼킨 것이 모이는 곳을 눌러요.', toolOptions: { mode: 'find', organs: ['위', '폐', '심장'] }, target: { sel: '위' }, difficulty: 0.15 },
          { prompt: '그래서 어떻게 해요?', toolOptions: { mode: 'find', organs: ['입', '식도', '위'], readOnly: true, ask: { q: '모르는 것을 봤어요. 어떻게 해요?', choices: ['입에 안 넣어요', '조금 맛봐요', '냄새 맡아요'] } }, target: { pick: 0 }, difficulty: 0.15,
            conclude: '입에 들어간 것은 몸속으로 가요. 모르는 것은 입에 넣지 않아요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '모르는 것은 ___에 넣지 않아요.', answer: '입' }] },
      notes: '종이 몸에는 "목" 칸 대신 식도가 있다. 계획의 "입 → 목 → 배 속"을 입 → 식도 → 위로 바꾸고, 교사가 "식도는 목 안의 길"이라고 말해 준다.',
    }),
    MOUTH({
      id: 'saf-drug.e12.mouth.wrap.check', type: 'wrap', title: '"모르는 것 안 먹어요" 점검표',
      method: '그림 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸 두 개를 읽어 주고 함께 표시한다.', base: '점검표 세 칸을 스스로 읽고 지킬 것에 표시한다.', challenge: '활동지에서 집에서도 지킬 칸을 하나 골라 동그라미한다.' },
      wrap: {
        teacher: '"오늘 배운 약속 가운데 나는 무엇을 지킬 수 있나요?" 점검표 칸을 함께 읽고 표시하게 한다. 출구 2번에서 "조금 맛봐요"를 고른 학생에게 "조금도 입에 들어가면 몸속으로 가요"라고 말해 준다. 마지막에 "멈춰, 만지지 마, 어른께!"를 동작과 함께 외친다.',
        exitTicket: [
          CHECK('오늘 지킬 것', [{ id: 'eat', text: '모르는 것 안 먹어요' }, { id: 'pick', text: '떨어진 것 안 주워요' }, { id: 'tell', text: '어른께 알려요' }]),
          { type: 'choice', prompt: '처음 보는 열매예요. 어떻게 해요?', options: ['조금 맛봐요', '어른께 물어요', '친구 줘요'], answer: 1, difficulty: 0.1, explain: '모르는 열매는 먹지 않고 어른께 물어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '모르는 것은 입에 넣지 않아요',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['모르는 것은 먹지 않아요', '떨어진 것은 줍지 않아요', '보면 어른께 알려요'] },
          { type: 'draw', prompt: '모르는 것을 보고 어른께 알리는 내 모습을 그려요.' },
        ],
        easy: { note: '"멈춰, 만지지 마, 어른께!"를 떠올려요.', items: [{ type: 'draw', prompt: '손을 뒤로 한 내 모습을 그려요.' }] },
      },
    }),
    MOUTH({
      id: 'saf-drug.e12.mouth.wrap.web', type: 'wrap', title: '"입에 넣지 않아요" 물건 묶기',
      method: '오늘 배운 물건 묶기', tool: 'mindmap', minutes: 7,
      levels: { easy: '교사가 카드 세 장을 함께 읽고 바구니에 담는다.', base: '카드 5장을 스스로 읽고 입에 넣지 않을 것을 담는다.', challenge: '함정 카드 "내 밥"을 가려내고 왜 다른지 말한다.' },
      wrap: {
        teacher: '"오늘 본 것 가운데 입에 넣지 않을 것을 바구니에 모아 볼까요?" 카드를 하나씩 읽어 주고 담게 한다. "내 밥"까지 담은 학생에게 "내 밥은 어른이 차려 준 것이라 먹어도 돼요. 무엇이 다를까요?"라고 묻는다. 담은 카드 이름을 반 전체가 함께 읽으며 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '입에 넣지 않아요', cards: [{ id: 'pill', text: '떨어진 알약' }, { id: 'rice', text: '내 밥' }, { id: 'berry', text: '모르는 열매' }, { id: 'butt', text: '담배꽁초' }, { id: 'bottle', text: '모르는 병 속 물' }, { id: 'powder', text: '모르는 가루' }] }, prompt: '입에 넣지 않을 것만 담아요.', target: { pick: ['pill', 'berry', 'butt', 'bottle', 'powder'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '입에 넣은 것은 어디로 가요?', options: ['몸속으로', '그냥 없어져요', '머리로'], answer: 0, difficulty: 0.1, explain: '입에 넣은 것은 몸속으로 들어가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '입에 넣지 않아요',
        items: [
          { type: 'choice', prompt: '입에 넣지 않을 것에 ○ 해요.', options: ['떨어진 알약', '내 밥', '모르는 열매'], answer: '떨어진 알약, 모르는 열매' },
          { type: 'draw', prompt: '입에 넣지 않을 물건 하나를 그리고 ×를 해요.' },
        ],
        easy: { note: '그림을 보며 어른과 함께 해요.', items: [{ type: 'draw', prompt: '먹어도 되는 내 밥을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 담배 연기 피하기
  const SMOKE = MOD('saf-drug.e12.smoke-away', [1]);
  const asSort = (it) => { it.toolOptions.mode = 'sort'; return it; };
  const asOrder = (it) => { it.toolOptions.mode = 'order'; return it; };
  // 연기 피해 핀 꽂기(map): 쉬움 연기 칸 1곳, 기본 2곳, 도전 '나' 자리와 깨끗한 칸 둘 가운데 가까운 칸
  const AWAY = (prompt, title, smokes, clean, me, near, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], title, places: [smokes[0], smokes[1], clean] }, target: { place: clean.name }, difficulty: d,
    levels: {
      easy: { toolOptions: { places: [smokes[0], clean] } },
      challenge: { prompt: `${cut(prompt)}(가까운 곳).`, toolOptions: { places: [me, smokes[0], smokes[1], Object.assign({}, clean, { name: `${clean.name} ①` }), Object.assign({}, near, { name: `${clean.name} ②` })] }, target: { place: `${clean.name} ②` } },
    },
    ...more,
  });
  const BUBBLE = (prompt, gentle, others, d, more) => ({
    prompt, toolOptions: { mode: 'fill', slots: [{ id: 'say', who: '나', label: '어른께: "___"' }], cards: [others[0], gentle, others[1]] }, target: { fill: { say: gentle.id } }, difficulty: d,
    levels: { easy: { toolOptions: { cards: [others[0], gentle] } }, challenge: { toolOptions: { cards: [others[0], gentle, others[1], others[2]] } } },
    ...more,
  });
  const T_SMOKE = [
    SMOKE({
      id: 'saf-drug.e12.smoke-away.intro.breath', type: 'intro', title: '코로 들어온 공기가 가는 길',
      method: '숨길 눌러 보기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 코와 폐 두 곳만 짚어 주며 "코로 들어가 가슴으로" 하고 함께 말한다.', base: '시연을 보고 코 → 기관 → 폐 세 칸의 길을 손가락으로 따라간다.', challenge: '"깨끗한 공기가 들어가면, 연기가 들어가면" 두 경우를 견주어 한마디씩 말한다.' },
      intro: {
        teacher: '"숨을 크게 들이쉬어 볼까요? 코로 들어온 공기는 어디로 갈까요?" 반 전체가 숨을 쉬어 본 뒤 시연 단추로 코 → 기관 → 폐 길이 차례로 밝혀지는 모습을 보여 준다. "연기는 입으로만 들어가요"라는 말이 나오면 "코로 숨 쉴 때 옆에 연기가 있으면 어떻게 될까요?"라고 되묻는다. 오늘은 담배 연기가 숨길로 들어오지 않게 피하는 법을 배운다고 밝힌다.',
        student: '코로 숨을 쉬고 가슴에 손을 얹어 공기가 들어오는 것을 느껴 보아요.',
        demo: { tool: 'body', options: { mode: 'path', organs: ['코', '입', '기관', '폐'] }, sequence: [{ path: ['코'] }, { path: ['코', '기관'] }, { path: ['코', '기관', '폐'] }] },
        art: { draw: 'a paper child breathing in fresh air through the nose under a blue paper sky with trees, little paper arrows showing air going down into the chest', banner: '숨은 코로, 가슴까지', extra: [{ motif: 'tree', x: 300, y: 222 }] },
      },
      notes: '종이 몸의 "기관"은 목 안 숨길이라고 쉬운 말로 바꿔 말한다.',
    }),
    SMOKE({
      id: 'saf-drug.e12.smoke-away.intro.scene', type: 'intro', title: '정류장 연기 장면의 마음',
      method: '그림 장면 보고 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(걱정·신남)만 읽어 주고 함께 고른다.', base: '시연을 보고 마음 카드 네 장 가운데 아이의 마음 두 가지를 말한다.', challenge: '"나라면 어떻게 하고 싶어요?"에 한마디로 답한다.' },
      intro: {
        teacher: '"정류장에서 옆 사람의 담배 연기가 아이 쪽으로 날아와요. 아이 마음은 어떨까요?" 두세 명의 대답을 듣고(기다릴 반응: "기침 나요", "싫어요") 시연 단추로 걱정·답답함 카드가 바구니에 담기는 모습을 보여 준다. "내가 피우는 게 아니니까 괜찮아요"라는 말이 나오면 "연기는 누구 코로 들어갈까요?"라고 되묻는다. 연기가 싫은 마음은 잘못이 아니라고 짚는다.',
        student: '연기가 날아오면 내 마음이 어떨지 얼굴로 나타내 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '아이 마음', cards: ['걱정', '답답함', '신남', '기쁨'] }, sequence: [{ pick: ['걱정', '답답함'] }] },
        art: { draw: 'a paper bus stop where gray paper smoke curls from an adult standing at one end toward a small paper child who covers the nose and steps away', banner: '연기가 와요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
      notes: '담배를 피우는 모습은 그리거나 흉내 내지 않고 "연기가 날아온다"로만 말한다. 가족을 탓하는 이야기가 되지 않게 한다.',
    }),
    SMOKE({
      id: 'saf-drug.e12.smoke-away.activity.move', type: 'activity', title: '공원 지도에서 연기 피하기',
      method: '그림 지도에서 연기 피해 길 찾기', tool: 'map', minutes: 9,
      levels: { easy: '연기 나는 칸이 1곳이고, 핀을 놓으면 칸 이름이 바로 보인다.', base: '연기 나는 칸 2곳을 피해 깨끗한 칸에 핀을 꽂는다.', challenge: '"나" 자리와 깨끗한 칸 두 곳이 있어 나와 가장 가까운 깨끗한 칸을 고른다.' },
      activity: {
        title: '연기를 피해 앉을 곳 찾기', tool: 'map',
        teacher: '"연기가 나는 곳은 어디일까요? 우리는 어디로 옮겨 앉을까요?" 핀을 꽂기 전에 연기 칸을 손가락으로 가리키게 한다. 연기 칸 바로 옆을 고른 학생에게 "연기는 바람을 타고 옆으로 퍼져요. 조금 더 떨어진 곳은 어디일까요?"라고 묻는다. 실제로 자리를 옮길 때는 어른과 함께 옮긴다는 점을 짚는다.',
        task: '연기를 피할 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          AWAY('연기 없는 의자에 꽂아요.', '공원', [{ name: '연기 나는 의자', icon: 'dot', at: [1, 0] }, { name: '연기 나는 그늘막', icon: 'dot', at: [2, 1] }], { name: '깨끗한 의자', icon: 'park', at: [3, 2] }, { name: '나', icon: 'house', at: [0, 1] }, { icon: 'park', at: [0, 2] }, 0.1),
          AWAY('정류장에서 설 곳에 꽂아요.', '정류장', [{ name: '연기 나는 자리', icon: 'bus', at: [0, 0] }, { name: '연기 오는 쪽', icon: 'dot', at: [1, 1] }], { name: '먼 쪽 자리', icon: 'bus', at: [3, 0] }, { name: '나', icon: 'house', at: [2, 2] }, { icon: 'bus', at: [3, 2] }, 0.15),
          AWAY('놀이터에서 놀 곳에 꽂아요.', '놀이터', [{ name: '연기 나는 벤치', icon: 'dot', at: [0, 0] }, { name: '연기 나는 입구', icon: 'dot', at: [1, 2] }], { name: '깨끗한 모래밭', icon: 'field', at: [3, 0] }, { name: '나', icon: 'house', at: [2, 2] }, { icon: 'field', at: [3, 1] }, 0.2, { conclude: '연기가 나면 멀리 떨어진 깨끗한 곳으로 옮겨요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '연기가 와요. 어디로 가요?', options: ['연기 없는 곳', '연기 옆', '그 자리'], answer: '연기 없는 곳' }] },
      notes: '그림 지도의 칸과 이름은 지은 것이다. 교구는 문항마다 핀 하나라 "길 찾기"를 "옮겨 갈 깨끗한 칸 고르기"로 바꿨다.',
    }),
    SMOKE({
      id: 'saf-drug.e12.smoke-away.activity.say', type: 'activity', title: '어른께 할 부드러운 말 고르기',
      method: '말풍선 고르기', tool: 'story', minutes: 9,
      levels: { easy: '말풍선 보기 2개 가운데 고르고, 나누기 문항은 카드 4장이다.', base: '말풍선 보기 3개 가운데 고르고, 나누기 문항은 카드 6장이다.', challenge: '말풍선 보기 4개, 나누기 문항은 카드 8장으로 부드러운 말과 화난 말을 가려낸다.' },
      activity: {
        title: '연기가 올 때 할 말', tool: 'story',
        teacher: '"집에서 어른이 담배를 피울 때 연기가 와요. 어른께 뭐라고 말할까요?" 말을 고른 뒤 짝과 한 명은 어른, 한 명은 나가 되어 부드러운 목소리로 말해 본다. "저리 가!"를 고른 학생에게 "그 말을 들으면 어른 마음은 어떨까요? 부드럽게 말하면 더 잘 들어 주셔요"라고 말해 준다. 연기를 싫어하는 마음은 말해도 된다는 점을 짚는다.',
        task: '말풍선에 할 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          BUBBLE('집에서 연기가 와요. 골라요.', { id: 'cough', text: '연기에 기침 나요' }, [{ id: 'shout', text: '싫어! 저리 가!' }, { id: 'quiet', text: '꾹 참아요' }, { id: 'stay', text: '그냥 있을래요' }], 0.1),
          BUBBLE('차 안에 연기가 있어요. 골라요.', { id: 'out', text: '밖에서 피워 주세요' }, [{ id: 'angry', text: '냄새나! 미워!' }, { id: 'kick', text: '말 안 해요' }, { id: 'cry', text: '엉엉 울어요' }], 0.15),
          asSort(SORT2(['부드러운 말', '화난 말'], '말을 두 칸으로 나누어요.', null, ['기침이 나요', '창문 열어 주세요', '자리 옮길게요'], ['저리 가!', '냄새나! 미워!', '꽥 소리 지르기'], ['흥! 몰라!', '왜 피워요!'], 0.2, { conclude: '연기가 오면 자리를 옮기고, 어른께 부드럽게 말해요.' })),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '어른께 할 부드러운 말에 ○ 해요.', options: ['연기에 기침 나요', '저리 가!'], answer: '연기에 기침 나요' }] },
      notes: '가족 가운데 흡연하는 어른이 있는 학생이 부끄럽거나 탓받는 느낌이 들지 않게 "어른도 연기가 해롭다는 것을 같이 알면 좋아요"로 말한다.',
    }),
    SMOKE({
      id: 'saf-drug.e12.smoke-away.activity.chant', type: 'activity', title: '"코 막고, 옮기고, 말해요" 구호',
      method: '구호 동작 따라 하기', tool: 'timer', minutes: 10,
      levels: { easy: '동작 카드 2장(첫 동작·끝 동작)의 차례만 놓는다.', base: '동작 카드 3장의 차례를 놓고 구호에 맞춰 따라 한다.', challenge: '교사가 카드를 보이지 않고 구호만 불러 주면 듣고 혼자 차례를 놓는다.' },
      activity: {
        title: '연기가 올 때 동작 차례', tool: 'timer',
        teacher: '"코 막고! (손으로 코와 입 가리기) 자리 옮기고! (세 걸음 걷기) 어른께 말해요! (손 들기)" 카드를 놓은 뒤 반 전체가 일어나 동작을 따라 한다. "숨을 꾹 참으면 돼요"라는 학생에게 "숨은 오래 참을 수 없어요. 연기 없는 곳으로 옮기는 것이 더 좋아요"라고 말해 준다. 장면마다 구호가 조금씩 다르니 카드 글을 소리 내어 읽게 한다.',
        task: '동작 카드를 차례대로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('공원에서 연기가 와요. 차례로 놓아요.', '공원 연기', ['코 막고', '자리 옮기고', '어른께 말해요'], 0.1),
          MOVES('정류장에서 연기가 와요.', '정류장 연기', ['입 가리고', '멀리 가고', '어른 곁에 서요'], 0.15),
          MOVES('집에 연기가 들어와요. 차례로 놓아요.', '집 안 연기', ['코 막고', '다른 방 가고', '창문 열어 달래요'], 0.2, { conclude: '코 막고, 자리 옮기고, 어른께 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '구호를 따라 써요.', text: '코 막고, 자리 옮기고, ___께 말해요.', answer: '어른' }] },
    }),
    SMOKE({
      id: 'saf-drug.e12.smoke-away.wrap.vote', type: 'wrap', title: '우리 반이 고른 것 그림그래프',
      method: '우리 반 그림그래프', tool: 'chart', minutes: 6,
      levels: { easy: '첫 줄이 그려진 그림그래프에 나머지 줄만 붙인다.', base: '그림그래프를 완성하고 가장 많은 것을 찾는다.', challenge: '두 칸의 사람 수를 견주어 어느 쪽이 많은지 고른다.' },
      wrap: {
        teacher: '"연기가 오면 나는 무엇을 할까요? 손을 들어 볼까요?" 먼저 우리 반이 손을 들어 칠판에 세어 본 뒤, 화면 그래프는 수업을 위해 지은 가상의 반 자료라고 말한다. 사람 그림 하나가 한 명이라는 것을 손가락으로 세며 확인한다. 출구 2번에서 "창문 열어 달라기"만 많다고 고른 학생에게 그림 수를 다시 세어 보게 한다.',
        exitTicket: [
          PICT_EXIT('표를 보고 그림그래프를 그려요.', '연기가 오면 할 일(가상)', [['자리 옮기기', 7], ['어른께 말하기', 5], ['창문 열어 달라기', 3]]),
          PREAD_EXIT('가장 많은 것을 골라요.', '연기가 오면 할 일(가상)', [['자리 옮기기', 7], ['어른께 말하기', 5], ['창문 열어 달라기', 3]], '가장 많은 것은?', 0),
          { type: 'choice', prompt: '"자리 옮기기"가 "말하기"보다?', options: ['많아요', '적어요', '같아요'], answer: 0, difficulty: 0.15, explain: '자리 옮기기 7명, 어른께 말하기 5명이라 자리 옮기기가 많아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '연기가 오면 나는',
        items: [
          { type: 'check', prompt: '연기가 오면 내가 할 것에 ✓ 해요.', options: ['자리를 옮겨요', '어른께 부드럽게 말해요', '창문을 열어 달라고 해요'] },
          { type: 'draw', prompt: '연기를 피해 깨끗한 곳에 있는 내 모습을 그려요.' },
        ],
        easy: { note: '고른 것 하나에만 ✓ 해도 돼요.', items: [{ type: 'draw', prompt: '맑은 공기 속의 내 모습을 그려요.' }] },
      },
      notes: '그래프 수는 수업용으로 지은 가상의 반 자료다. 우리 반이 손들기로 센 수는 칠판에 적어 견준다. 출구에는 단계별 판이 없어 쉬움·도전 차이는 교사 진행(함께 세기·견주기 질문)으로 둔다.',
    }),
    SMOKE({
      id: 'saf-drug.e12.smoke-away.wrap.sticker', type: 'wrap', title: '연기 약속 카드 잇기',
      method: '약속 카드 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 약속 카드 두 장을 읽어 주고 함께 잇는다.', base: '약속 카드 세 장을 뜻과 잇고, 하나를 골라 따라 읽는다.', challenge: '고른 약속을 가족에게 말할 문장으로 바꾸어 활동지에 쓴다.' },
      wrap: {
        teacher: '"오늘 배운 약속 카드를 뜻과 이어 볼까요?" 카드를 하나씩 읽어 주고 이은 뒤, 마음에 드는 카드 하나를 골라 반 전체가 따라 읽는다. 출구 2번에서 "그냥 있어요"를 고른 학생에게 "연기는 금방 안 사라지고 코로 들어와요"라고 말해 준다. 활동지의 가족에게 할 말은 부드러운 말로 쓰게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { words: [{ en: '연기 피해요', ko: '연기 오면 자리 옮겨요' }, { en: '깨끗한 공기', ko: '창문 열어 바람 넣기' }, { en: '부드럽게 말해요', ko: '"기침 나요" 하고 말하기' }] }, prompt: '약속 카드를 뜻과 이어요.', target: { match: { '연기 피해요': '연기 피해요', '깨끗한 공기': '깨끗한 공기', '부드럽게 말해요': '부드럽게 말해요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '연기가 와요. 어떻게 해요?', options: ['자리를 옮겨요', '그냥 있어요', '더 가까이 가요'], answer: 0, difficulty: 0.1, explain: '연기가 오면 연기 없는 곳으로 옮겨요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '연기 피해요, 깨끗한 공기',
        items: [
          { type: 'blank', prompt: '약속을 따라 써요.', text: '연기가 오면 ___ 옮겨요.', answer: '자리를' },
          { type: 'short', prompt: '가족에게 할 부드러운 말을 한 줄로 써요.' },
        ],
        easy: { note: '선생님과 함께 읽어요.', items: [{ type: 'draw', prompt: '깨끗한 공기를 마시는 내 모습을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 내 약을 바르게 먹어요
  const MYMED = MOD('saf-drug.e12.my-medicine', [2]);
  // 내 약 봉투 고르기(mindmap pick): 기본 4장, 쉬움 3장, 도전 같은 이름·지난 봉투 1장이 더해진다
  const WHOSE = (prompt, me, others, old, d, more) => ({
    prompt, toolOptions: { mode: 'pick', topic: '약 봉투', basket: '내 약', cards: [others[0], me, others[1], others[2]] }, target: { pick: [me.id] }, difficulty: d,
    levels: {
      easy: { toolOptions: { cards: [others[0], me, others[1]] } },
      challenge: { prompt: `${cut(prompt)}(5장).`, toolOptions: { cards: [others[0], me, old, others[1], others[2]] } },
    },
    ...more,
  });
  const T_MYMED = [
    MYMED({
      id: 'saf-drug.e12.my-medicine.intro.bag', type: 'intro', title: '약 봉투 넘겨 보며 내 이름 찾기',
      method: '약 봉투 그림 카드 보기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 봉투 두 장만 넘겨 보이며 이름을 읽어 준다.', base: '봉투 세 장을 넘겨 보며 교사가 읽어 준 이름의 봉투를 손으로 가리킨다.', challenge: '"서아"와 "서윤"처럼 이름이 비슷한 봉투를 가려 말한다.' },
      intro: {
        teacher: '"약 봉투에는 누구 약인지 이름이 적혀 있어요. 나는 서아예요. 서아 봉투는 어느 것일까요?" 카드를 넘기기 전에 손을 들어 맞혀 보게 한 뒤 시연 단추로 봉투 뒷면의 이름이 차례로 보이는 모습을 보여 준다. "봉투가 다 똑같이 생겨서 아무거나 먹어도 돼요"라는 말이 나오면 "생김새가 같아도 안에 든 약은 사람마다 달라요"라고 되묻는다. 오늘은 내 이름이 적힌 약만 어른과 함께 먹는 법을 배운다고 밝힌다.',
        student: '약 봉투에서 이름이 적힌 곳을 찾아 손가락으로 가리켜 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'flip', speak: false, words: [{ en: '준이', ko: '약 봉투 ①' }, { en: '서아', ko: '약 봉투 ②' }, { en: '하람', ko: '약 봉투 ③' }] }, sequence: [{ flip: ['준이'] }, { flip: ['준이', '서아'] }] },
        art: { draw: 'three paper medicine envelopes lined up on a table, each with a name label cut from colored paper, a paper child looking carefully at the labels next to a grown-up', banner: '내 이름을 찾아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '봉투 앞면은 번호, 뒷면은 이름이다(교구가 봉투 그림을 그리지 못함). 실제 약 봉투를 보일 때는 빈 봉투에 지은 이름을 붙여 쓰고, 약 이름·먹는 양은 가린다.',
    }),
    MYMED({
      id: 'saf-drug.e12.my-medicine.intro.time', type: 'intro', title: '그림 봉투의 "아침 8시" 맞추기',
      method: '약 먹는 시각 시계 맞추기', tool: 'clock', minutes: 6,
      levels: { easy: '긴바늘이 12에 고정된 시계에서 짧은바늘만 8에 놓는 시연을 함께 따라 한다.', base: '시연 시계를 보고 정각 8시를 손으로 바늘 흉내 내어 말한다.', challenge: '교사가 그림 봉투의 다른 연습 시각(7시 30분)을 읽어 주면 긴바늘·짧은바늘을 손으로 흉내 낸다.' },
      intro: {
        teacher: '"그림 봉투에 "아침 8시"라고 적혀 있어요. 시계 바늘을 어떻게 놓을까요?" 시연 단추로 시계가 8시가 되는 모습을 보이고 "8시에 어른과 함께!"를 반 전체가 따라 말한다. "시간을 놓치면 다음에 두 번 먹으면 돼요"라는 말이 나오면 "두 번 먹으면 약이 너무 많아져요. 놓치면 어떻게 할까요? 어른께 물어요"라고 되묻는다. 시각은 연습용 그림 봉투의 것이고, 실제 먹는 때는 봉투와 어른이 알려 준다고 밝힌다.',
        student: '시계가 8시가 되면 "8시에 어른과 함께!"를 따라 말해요.',
        demo: { tool: 'clock', options: { hourOnly: true, showDigital: false }, sequence: [{ h: 8, m: 0 }] },
        art: { draw: 'a big paper clock showing eight o\'clock beside a paper medicine envelope with a sun sticker for morning, a paper child and a grown-up sitting together at a breakfast table', banner: '정한 때에 어른과 함께', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '먹는 때·횟수는 사람마다 달라 시계 시각은 연습용으로만 쓴다. 약 먹는 양이나 식사 전후는 말하지 않는다.',
    }),
    MYMED({
      id: 'saf-drug.e12.my-medicine.activity.whose', type: 'activity', title: '내 약 봉투만 바구니에',
      method: '내 약 봉투 고르기', tool: 'mindmap', minutes: 14,
      levels: { easy: '봉투 3장 가운데 내 봉투를 담고, 담으면 바로 맞는지 알려 준다.', base: '봉투 4장 가운데 내 이름 봉투만 담는다.', challenge: '봉투 5장, 이름은 같고 "지난" 봉투(예전에 남은 약)가 섞여 그것은 빼고 담는다.' },
      activity: {
        title: '이름을 보고 내 약 봉투 고르기', tool: 'mindmap',
        teacher: '"나는 서아예요. 서아 봉투는 어느 것일까요?" 봉투 이름을 한 글자씩 손가락으로 짚으며 읽게 한다. "서윤"과 "서아"를 헷갈린 학생에게 "첫 글자만 보지 말고 끝까지 읽어 볼까요?"라고 묻는다. 도전의 "지난 봉투"는 내 이름이어도 예전에 남은 약이라 혼자 먹지 않고 어른께 드린다는 점을 짚는다.',
        task: '내 이름 봉투만 바구니에 담아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          WHOSE('나는 서아예요. 내 봉투만 담아요.', { id: 'me', text: '서아 봉투' }, [{ id: 'a', text: '준이 봉투' }, { id: 'b', text: '서윤 봉투' }, { id: 'c', text: '하람 봉투' }], { id: 'old', text: '서아 지난 봉투' }, 0.1),
          WHOSE('나는 도윤이에요. 내 봉투만 담아요.', { id: 'me', text: '도윤 봉투' }, [{ id: 'a', text: '도연 봉투' }, { id: 'b', text: '유나 봉투' }, { id: 'c', text: '민재 봉투' }], { id: 'old', text: '도윤 지난 봉투' }, 0.15),
          WHOSE('나는 하은이에요. 내 봉투만 담아요.', { id: 'me', text: '하은 봉투' }, [{ id: 'a', text: '하윤 봉투' }, { id: 'b', text: '은서 봉투' }, { id: 'c', text: '지호 봉투' }], { id: 'old', text: '하은 지난 봉투' }, 0.2, { conclude: '약 봉투의 이름을 끝까지 읽고, 내 약만 어른과 함께 먹어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '나는 서아예요. 내 봉투에 ○ 해요.', options: ['서아 봉투', '서윤 봉투', '준이 봉투'], answer: '서아 봉투' }] },
      notes: '이름은 모두 지은 가명이다. 학생 실명을 봉투에 쓰지 않는다.',
    }),
    MYMED({
      id: 'saf-drug.e12.my-medicine.activity.order', type: 'activity', title: '약 먹는 차례 놓기',
      method: '약 먹는 차례 놓기', tool: 'kitchen', minutes: 13,
      levels: { easy: '첫 장면이 놓여 있어 남은 두 장만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '장면 세 장을 차례대로 놓는다.', challenge: '"혼자 약 꺼내기" 같은 함정 카드 한 장이 섞여 빼고 놓는다.' },
      activity: {
        title: '약 먹을 때 차례대로', tool: 'kitchen',
        teacher: '"약을 먹어야 할 때 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 짝과 한 명은 어른, 한 명은 나가 되어 차례대로 해 본다. 셋째 장면에서 "두 번 먹어요"를 고른 학생에게 "놓친 약을 한꺼번에 먹으면 약이 너무 많아져요. 누구에게 물어볼까요?"라고 묻는다. 세 장면 모두 어른과 함께라는 점을 짚는다.',
        task: '장면 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          asOrder(ORDER3('약 먹는 차례를 놓아요.', [{ id: 'tell', text: '어른께 말해요' }, { id: 'take', text: '어른이 준 약' }, { id: 'rest', text: '남은 약은 어른께' }], { id: 'alone', text: '혼자 약 꺼내기' }, 0.15)),
          asOrder(ORDER3('감기약 먹는 날이에요.', [{ id: 'name', text: '내 이름 봐요' }, { id: 'with', text: '어른과 먹어요' }, { id: 'back', text: '봉투는 어른께' }], { id: 'more', text: '두 봉 먹어요' }, 0.2)),
          asOrder(ORDER3('먹는 때를 놓쳤어요.', [{ id: 'know', text: '놓친 걸 알아요' }, { id: 'ask', text: '어른께 물어요' }, { id: 'follow', text: '어른 말대로' }], { id: 'twice', text: '두 번 먹어요' }, 0.25, { conclude: '약은 내 이름을 보고, 어른과 함께, 정한 때에 먹어요.' })),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '먹는 때를 놓치면 ___께 물어요.', answer: '어른' }] },
      notes: '계획의 "물과 함께 먹어요"는 복용법이라 쓰지 않고 "어른이 준 약"으로 바꿨다.',
    }),
    MYMED({
      id: 'saf-drug.e12.my-medicine.activity.share', type: 'activity', title: '갈림길: "내 약 먹으면 낫는대"',
      method: '갈림길 고르기', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 잘한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '친구가 약을 나눠 주면?', tool: 'dilemma',
        teacher: '"친구가 \'내 약 먹으면 낫는대\' 하며 약을 내밀어요. 나는 어떻게 할까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "친구가 나았으니 나도 나아요"를 말하는 학생에게 "친구 약은 친구 몸에 맞춰 준 약이에요. 내 몸에도 맞을까요?"라고 묻는다. 친구의 마음은 고맙게 받고 약은 받지 않는 말("고마워, 그래도 괜찮아")을 함께 연습한다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('친구가 약을 줘요. 골라요.', { text: '친구가 "내 약 먹으면 낫는대" 해요.', motif: 'house', choices: [
            { id: 'take', text: '받아서 먹어요', result: '내 몸에 안 맞을 수 있어요.', why: '친구 약은 친구에게 맞춘 약이에요.' },
            { id: 'no', text: '"고마워, 괜찮아" 해요', result: '친구가 "그래" 했어요.', easyEnding: '선생님께 가서 말했어요.', next: { text: '머리가 계속 아파요. 어떻게 해요?', choices: [
              { id: 'tell', text: '선생님께 말해요', result: '선생님이 보건실에 데려가셨어요.', ending: '말해서 도움을 받았어요.' },
              { id: 'hide', text: '그냥 참아요', result: '아픈데 아무도 몰라요.', why: '아프면 참지 말고 말해요.' }] } }] },
          ['no', 'tell'], [{ id: 'mine', text: '내 약만 먹어요' }, { id: 'sorry', text: '친구가 서운해서요', why: '서운해도 남의 약은 먹지 않아요.' }, { id: 'taste', text: '맛이 궁금해서요', why: '약은 맛보는 것이 아니에요.' }], 'mine', 0.15),
          DILEMMA('언니가 약을 나눠 줘요.', { text: '언니가 자기 감기약을 나눠 주려 해요.', motif: 'house', choices: [
            { id: 'drink', text: '언니 약을 먹어요', result: '언니 약은 언니 몸에 맞춘 약이에요.', why: '가족 약도 내 약이 아니에요.' },
            { id: 'ask', text: '집 어른께 물어요', result: '어른이 살펴 주셨어요.', easyEnding: '어른이 내 약을 챙겨 주셨어요.', next: { text: '어른이 "네 약 줄게" 하세요.', choices: [
              { id: 'name', text: '봉투 이름을 봐요', result: '내 이름이 있어요.', ending: '내 약을 어른과 먹었어요.' },
              { id: 'both', text: '언니 약도 먹어요', result: '약이 너무 많아져요.', why: '내 약만 먹어요.' }] } }] },
          ['ask', 'name'], [{ id: 'own', text: '사람마다 약이 달라요' }, { id: 'family', text: '가족이라 괜찮아서요', why: '가족이어도 약은 따로예요.' }, { id: 'quick', text: '빨리 나으려고요', why: '남의 약은 빨리 낫게 하지 않아요.' }], 'own', 0.2),
          DILEMMA('친구가 알약을 줘요.', { text: '친구가 "비타민이야, 맛있어" 해요.', motif: 'house', choices: [
            { id: 'eat', text: '사탕처럼 먹어요', result: '무엇인지 모르고 먹었어요.', why: '비타민도 어른께 먼저 물어요.' },
            { id: 'later', text: '"집에 물어볼게" 해요', result: '친구가 "그래" 했어요.', easyEnding: '집 어른께 물어봤어요.', next: { text: '집에 왔어요. 어떻게 해요?', choices: [
              { id: 'tell', text: '어른께 이야기해요', result: '어른이 "잘했어" 하셨어요.', ending: '물어봐서 안전해요.' },
              { id: 'forget', text: '잊어버려요', result: '다음에 또 받을 수 있어요.', why: '받은 일은 어른께 말해요.' }] } }] },
          ['later', 'tell'], [{ id: 'ask', text: '모르면 어른께 물어요' }, { id: 'yummy', text: '맛있대서요', why: '맛있어도 모르는 알약은 먹지 않아요.' }, { id: 'friend', text: '친구가 줘서요', why: '친구가 줘도 먼저 물어요.' }], 'ask', 0.25, { conclude: '남의 약은 먹지 않아요. 모르면 어른께 물어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 약을 줘요. 무엇을 해요?', options: ['"괜찮아" 해요', '받아서 먹어요'], answer: '"괜찮아" 해요' }] },
      notes: '정답 길이 있는 갈림길이다. 약을 건넨 친구를 나쁜 사람으로 만들지 않고 "도와주고 싶은 마음은 고마워"로 이야기한다.',
    }),
    MYMED({
      id: 'saf-drug.e12.my-medicine.activity.okno', type: 'activity', title: '약 장면 좋아요·안돼요',
      method: '좋아요/안돼요 장면 나누기', tool: 'story', minutes: 13,
      levels: { easy: '장면 카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '장면 카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "어제 약 또 먹기"처럼 헷갈리는 장면 2장이 섞이고 하나를 골라 까닭을 짝에게 말한다.' },
      activity: {
        title: '약 먹는 장면 두 칸으로 나누기', tool: 'story',
        teacher: '"이 장면은 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 반 전체가 장면을 소리 내어 읽는다. "남은 약 또 먹기"를 좋아요에 두는 학생에게 "남은 약은 그때 아팠을 때 약이에요. 지금도 맞을까요?"라고 묻는다. 도전 단계에서는 헷갈렸던 카드 하나를 골라 "왜냐하면 ~"으로 까닭을 말하게 한다.',
        task: '장면 카드를 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          asSort(SORT2(OKNO, '약 먹는 장면을 나누어요.', null, ['어른과 약 먹기', '내 이름 보기', '정한 때 먹기'], ['남은 약 또 먹기', '약 사탕 놀이', '언니 약 먹기'], ['어제 약 또 먹기', '약 두 번 먹기'], 0.15)),
          asSort(SORT2(OKNO, '학교 장면을 나누어요.', null, ['보건실 가요', '아프면 말해요', '선생님께 맡겨요'], ['친구와 약 바꿔요', '약 자랑하기', '몰래 약 먹기'], ['친구 약 맛보기', '약 숨겨 오기'], 0.2)),
          asSort(SORT2(OKNO, '집 장면을 나누어요.', null, ['약은 높은 곳', '어른이 꺼내요', '빈 봉투 드려요'], ['약 상자 놀이', '동생 약 먹기', '약 많이 먹기'], ['약을 사탕이래요', '몰래 한 알 더'], 0.25, { conclude: '약은 내 것만, 어른과 함께, 정한 때에 먹어요.' })),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['어른과 약 먹기', ''], ['남은 약 또 먹기', ''], ['내 이름 보기', ''], ['언니 약 먹기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 장면에 ○ 해요.', options: ['어른과 약 먹기', '약 사탕 놀이'], answer: '어른과 약 먹기' }] },
    }),
    MYMED({
      id: 'saf-drug.e12.my-medicine.wrap.chant', type: 'wrap', title: '"내 이름 보고, 어른과, 정한 때에"',
      method: '구호 따라 하기', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 구호 두 마디를 들어 보이며 함께 따라 한다.', base: '구호 세 마디 카드를 차례대로 놓고 동작과 함께 따라 한다.', challenge: '교사가 카드를 보이지 않고 불러 주는 구호를 듣고 혼자 차례를 놓는다.' },
      wrap: {
        teacher: '"내 이름 보고! (봉투 읽는 손) 어른과 함께! (손잡기) 정한 때에! (손목 시계 가리키기)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 출구 2번에서 "두 번 먹어요"를 고른 학생에게 "놓쳤을 때는 어른께 물어요"라고 다시 말해 준다. 활동지는 집에 가져가 어른과 함께 구호를 해 보게 한다.',
        exitTicket: [
          CHANT('약 구호', ['내 이름 보고', '어른과 함께', '정한 때에']),
          { type: 'choice', prompt: '먹는 때를 놓쳤어요. 어떻게 해요?', options: ['두 번 먹어요', '어른께 물어요', '숨겨요'], answer: 1, difficulty: 0.1, explain: '먹는 때를 놓치면 어른께 물어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 약을 바르게 먹어요',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '내 이름 보고, 어른과 함께, ___에!', answer: '정한 때' },
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['봉투 이름을 끝까지 읽어요', '어른과 함께 먹어요', '남의 약은 먹지 않아요'] },
        ],
        easy: { note: '어른과 함께 읽어요.', items: [{ type: 'draw', prompt: '내 이름이 적힌 약 봉투를 그려요.' }] },
      },
    }),
    MYMED({
      id: 'saf-drug.e12.my-medicine.wrap.heart', type: 'wrap', title: '"내 약 찾을 수 있어요" 마음 크기',
      method: '오늘 마음 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 눈금을 "조금·아주 커요" 두 끝으로 읽어 주며 고르게 한다.', base: '눈금 5칸에서 내 마음 크기를 고르고 짝에게 한마디 한다.', challenge: '마음 크기를 고른 뒤 어려웠던 것을 한마디 쓴다.' },
      wrap: {
        teacher: '"이제 내 약 봉투를 찾을 수 있다는 마음, 얼마나 큰가요?" 눈금을 고른 뒤 손가락으로 몇 칸인지 보여 주고 짝에게 한마디 하게 한다. 작은 칸을 고른 학생에게 "이름을 끝까지 읽는 연습을 집에서 어른과 한 번 더 해 봐요"라고 말해 준다. 출구 2번에서 "반만 먹어요"를 고른 학생에게 남의 약은 조금도 먹지 않는다고 짚어 준다.',
        exitTicket: [
          SCALE('이제 내 약을 찾을 수 있어요.', '뿌듯함', '내 마음은 얼마나 커요?', '아주 커요'),
          { type: 'choice', prompt: '남의 약은 어떻게 해요?', options: ['먹지 않아요', '반만 먹어요', '맛만 봐요'], answer: 0, difficulty: 0.1, explain: '남의 약은 조금도 먹지 않아요.' },
          { type: 'short', prompt: '어려웠던 것을 한마디 써요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 약 찾기 마음',
        items: [
          { type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['봉투 이름을 읽어요', ''], ['친구 약을 먹어요', ''], ['놓치면 두 번 먹어요', '']], answer: '○, ×, ×' },
          { type: 'draw', prompt: '어른과 함께 내 약을 찾는 모습을 그려요.' },
        ],
        easy: { note: '그림만 그려도 돼요.', items: [{ type: 'draw', prompt: '뿌듯한 내 얼굴을 그려요.' }] },
      },
      notes: '출구 3번(어려웠던 것)은 정답이 없다 — 학생의 말을 들어 준다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 세제·표백제는 만지지 않아요
  const HOUSE = MOD('saf-drug.e12.household', [2]);
  const ROOMS = [
    { name: '부엌', cells: [[0, 0], [1, 0]] }, { name: '욕실', cells: [[2, 0], [3, 0]] },
    { name: '거실', cells: [[0, 1], [1, 1]] }, { name: '베란다', cells: [[2, 1], [3, 1]] },
  ];
  const DRINK = ['마셔요', '안 돼요'];
  // 조심 표시 잇기(wordcards match): 기본 3쌍, 쉬움 앞 2쌍
  const PAIRS = (prompt, words, d, more) => {
    const m = (ws) => Object.fromEntries(ws.map((w) => [w.en, w.en]));
    return { prompt, toolOptions: { words }, target: { match: m(words) }, difficulty: d,
      levels: { easy: { prompt: `${cut(prompt)}(2쌍).`, toolOptions: { words: words.slice(0, 2) }, target: { match: m(words.slice(0, 2)) } } }, ...more };
  };
  const T_HOUSE = [
    HOUSE({
      id: 'saf-drug.e12.household.intro.house', type: 'intro', title: '우리 집 지도에서 세제 찾기',
      method: '집 그림 지도에서 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 부엌·욕실 두 곳만 짚어 주며 그곳에 있는 제품 이름을 함께 말한다.', base: '시연을 보고 세제·표백제·벌레약이 있는 방 세 곳을 말한다.', challenge: '"어린 동생 손이 닿는 곳"이 어느 방일지 짝과 이야기하고 손으로 높이를 보인다.' },
      intro: {
        teacher: '"우리 집에서 세제는 어디에 있을까요? 표백제는요? 벌레약은요?" 두세 명의 대답을 듣고(기다릴 반응: "부엌 싱크대 밑이요", "화장실이요") 시연 단추로 방마다 핀이 꽂히는 모습을 보여 준다. "세제는 거품이 나서 장난감 같아요"라는 말이 나오면 "세제가 눈이나 입에 들어가면 어떻게 될까요?"라고 되묻는다. 오늘은 집 안의 생활 화학제품을 만지거나 마시지 않고 어른께 알리는 법을 배운다고 밝힌다.',
        student: '우리 집에서 세제가 있는 곳을 떠올려 짝에게 말해 보아요.',
        demo: { tool: 'map', options: { grid: [4, 2], regions: ROOMS, title: '우리 집' }, sequence: [{ region: '부엌' }, { region: '욕실' }, { region: '베란다' }] },
        art: { draw: 'a paper house cut open like a dollhouse with a kitchen, a bathroom and a balcony, small paper bottles of detergent and bleach placed on a high shelf, a paper child looking up at them', banner: '세제는 만지지 않아요', extra: [{ motif: 'house', x: 300, y: 96 }] },
      },
      notes: '집마다 두는 곳이 달라 정답을 고집하지 않는다. "우리 집은 어디에 있는지 어른께 물어보기"로 이어 간다.',
    }),
    HOUSE({
      id: 'saf-drug.e12.household.intro.bottle', type: 'intro', title: '음료병 속 세제 장면의 마음',
      method: '장면 보고 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(놀람·신남)만 읽어 주고 함께 고른다.', base: '시연을 보고 마음 카드 네 장 가운데 아이의 마음 두 가지를 말한다.', challenge: '"나라면 어떻게 할래요?"에 한마디로 답한다.' },
      intro: {
        teacher: '"하준이가 냉장고 옆 음료병을 주스인 줄 알고 마시려다 엄마가 \'그건 세제야!\' 하셨어요. 하준이 마음은 어떨까요?" 두세 명의 대답을 듣고(기다릴 반응: "깜짝 놀랐어요", "무서워요") 시연 단추로 놀람·걱정 카드가 담기는 모습을 보여 준다. "음료병에 있으면 마셔도 되는 거예요"라는 말이 나오면 "병은 음료병인데 안에 든 것은 무엇이었지요?"라고 되묻는다.',
        student: '하준이처럼 깜짝 놀란 얼굴을 지어 보고 그 마음을 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '하준이 마음', cards: ['놀람', '걱정', '신남', '편안함'] }, sequence: [{ pick: ['놀람', '걱정'] }] },
        art: { draw: 'a paper child reaching for a juice-shaped paper bottle filled with yellow liquid on a kitchen counter while a grown-up raises a hand to say stop, a paper question mark above the bottle', banner: '병만 보고는 몰라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '그림 속 일로만 이야기하고 학생 집의 일을 캐묻지 않는다.',
    }),
    HOUSE({
      id: 'saf-drug.e12.household.activity.mark', type: 'activity', title: '조심 표시와 할 일 잇기',
      method: '조심 표시 그림 잇기', tool: 'wordcards', minutes: 14,
      levels: { easy: '잇기 문항은 2쌍, 까닭 문항은 보기 3장이다.', base: '잇기 문항은 3쌍, 까닭 문항은 보기 3장이다.', challenge: '잇기 문항은 3쌍, 까닭 문항은 헷갈리는 보기가 더해진 4장 가운데 고른다.' },
      activity: {
        title: '보이는 것과 할 일 잇기', tool: 'wordcards',
        teacher: '"병에 조심 그림이 그려져 있어요. 무엇을 해야 할까요?" 실제 세제 병의 조심 그림(빈 병 사진이나 그림 자료)을 보여 주며 "이 그림은 \'조심하세요\'라는 뜻이에요"라고 말한 뒤 카드를 잇게 한다. "냄새가 좋으니까 맡아도 돼요"라는 학생에게 "냄새가 좋아도 코로 들어가면 어지러울 수 있어요"라고 말해 준다. 마지막 문항에서 표시가 없는 병도 무엇인지 모르면 만지지 않는다고 짚는다.',
        task: '보이는 것과 할 일을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          PAIRS('보이는 것과 할 일을 이어요.', [{ en: '만지지 않아요', ko: '병에 조심 그림' }, { en: '마시지 않아요', ko: '음료병 속 세제' }, { en: '밟지 않아요', ko: '바닥에 쏟은 세제' }], 0.15),
          PAIRS('이럴 땐 무엇을 해요? 이어요.', [{ en: '냄새 안 맡아요', ko: '좋은 냄새 나는 병' }, { en: '누르지 않아요', ko: '뿌리는 벌레약' }, { en: '어른 불러요', ko: '동생이 병을 들었어요' }], 0.2),
          { prompt: '표시 없는 병은 왜 안 만져요?', toolOptions: { mode: 'pick', basket: '까닭', cards: [{ id: 'pretty', text: '예쁜 병이라서' }, { id: 'unknown', text: '무엇인지 몰라서' }, { id: 'empty', text: '비어 보여서' }] }, target: { pick: ['unknown'] }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { cards: [{ id: 'pretty', text: '예쁜 병이라서' }, { id: 'unknown', text: '무엇인지 몰라서' }, { id: 'smell', text: '냄새가 좋아서' }, { id: 'empty', text: '비어 보여서' }] } } },
            conclude: '조심 그림이 있으면, 무엇인지 모르면 만지지 않고 어른께 알려요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '병에 조심 그림이 있어요. 무엇을 해요?', options: ['만지지 않아요', '열어 봐요'], answer: '만지지 않아요' }] },
      notes: '교구는 유해 그림문자를 그리지 못해 카드에 "조심 그림"이라고 글로 적었다. 실제 그림문자는 빈 병 사진·인쇄 자료로 보인다. 계획의 "표시 2개·3개"는 잇기 2쌍·3쌍으로 했다.',
    }),
    HOUSE({
      id: 'saf-drug.e12.household.activity.drink', type: 'activity', title: '마셔요·안 돼요 나누기',
      method: '마셔요/안 돼요 나누기', tool: 'mindmap', minutes: 13,
      levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 두 칸에 다 놓은 뒤 확인한다.', challenge: '"모르면 어른께" 칸이 더해져 카드 8장을 세 칸에 나눈다.' },
      activity: {
        title: '마셔도 되는 것과 안 되는 것', tool: 'mindmap',
        teacher: '"이것은 마셔도 될까요?" 카드를 놓을 때마다 이름을 소리 내어 읽는다. "음료병 속 세제"를 마셔요에 두는 학생에게 "병이 음료병이라도 안에 든 것은 무엇일까요?"라고 묻는다. 도전 단계의 "모르면 어른께" 칸은 겁내라는 것이 아니라 먼저 물어보는 칸이라고 짚는다.',
        task: '카드를 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT3(DRINK, '모르면 어른께', '부엌에서 나누어요.', '부엌', ['물', '우유', '보리차'], ['주방 세제', '음료병 속 세제', '뚜껑 연 세제'], ['처음 보는 음료', '색이 이상한 물'], 0.1),
          SORT3(DRINK, '모르면 어른께', '식탁에서 나누어요.', '식탁', ['주스', '두유', '미역국'], ['표백제', '유리 세정제', '음료병 속 표백제'], ['어른 컵 음료', '뚜껑 없는 병'], 0.15),
          SORT3(DRINK, '모르면 어른께', '베란다에서 나누어요.', '베란다', ['내 물통 물', '어른이 준 우유', '따뜻한 보리차'], ['벌레약', '식물 영양제', '세탁 세제'], ['투명 병 속 물', '물병 속 노란 물'], 0.2, { conclude: '세제·표백제는 마시지 않아요. 모르면 어른께 물어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '마셔도 되면 ○, 아니면 ×를 써요.', columns: ['물건', '○ / ×'], cells: [['우유', ''], ['표백제', ''], ['음료병 속 세제', ''], ['보리차', '']], answer: '○, ×, ×, ○' }],
        easy: [{ type: 'choice', prompt: '마셔도 되는 것에 ○ 해요.', options: ['우유', '세제'], answer: '우유' }] },
    }),
    HOUSE({
      id: 'saf-drug.e12.household.activity.stop', type: 'activity', title: '"손 멈춰, 뒤로, 어른 불러"',
      method: '동작 순서 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '동작 카드 2장(첫 동작·끝 동작)의 차례만 놓는다.', base: '동작 카드 3장의 차례를 놓고 따라 한다.', challenge: '교사가 카드를 보이지 않고 구호만 불러 주면 듣고 혼자 차례를 놓는다.' },
      activity: {
        title: '세제를 봤을 때 동작 차례', tool: 'timer',
        teacher: '"손 멈춰! (두 손 펴기) 뒤로! (한 걸음 뒤로) 어른 불러! (손나팔)" 카드를 놓은 뒤 반 전체가 일어나 동작을 따라 한다. "쏟아진 세제는 내가 닦아요"라는 학생에게 "닦다가 손이나 눈에 묻을 수 있어요. 닦는 것은 어른이 해요"라고 말해 준다. 장면마다 카드 글을 소리 내어 읽고 동작을 바꿔 해 본다.',
        task: '동작 카드를 차례대로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('세제가 쏟아졌어요. 차례로 놓아요.', '쏟아진 세제', ['손 멈춰', '뒤로', '어른 불러'], 0.1),
          MOVES('표백제 냄새가 나요. 차례로 놓아요.', '표백제 냄새', ['코 막고 멈춰', '뒤로 가요', '어른 불러요'], 0.15),
          MOVES('벌레약 통을 찾았어요.', '벌레약 통', ['손 멈춰요', '한 걸음 뒤로', '어른께 알려요'], 0.2, { conclude: '세제를 보면 손 멈추고, 뒤로 가고, 어른을 불러요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '구호를 따라 써요.', text: '손 멈춰, 뒤로, ___ 불러!', answer: '어른' }] },
    }),
    HOUSE({
      id: 'saf-drug.e12.household.activity.sibling', type: 'activity', title: '갈림길: 동생이 세제를 만져요',
      method: '갈림길 고르기', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 어른을 부를지 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 잘한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '동생을 지키는 길 고르기', tool: 'dilemma',
        teacher: '"동생이 욕실 세제를 만지려 해요. 나는 어떻게 할까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "내가 뺏어요"를 고른 학생에게 "뺏다가 뚜껑이 열리면 동생과 나는 어떻게 될까요?"라고 묻는다. \'처음부터 다른 길\'로 다른 결과도 보고, 말로 멈추게 하고 어른을 부르는 것이 둘 다 지키는 길이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('동생이 세제를 만지려 해요.', { text: '동생이 욕실 세제를 만지려 해요.', motif: 'house', choices: [
            { id: 'grab', text: '내가 뺏어요', result: '뚜껑이 열려 쏟아졌어요.', why: '뺏으면 쏟아질 수 있어요.' },
            { id: 'stop', text: '"멈춰!" 말해요', result: '동생이 멈췄어요.', easyEnding: '어른이 세제를 치우셨어요.', next: { text: '동생이 멈췄어요. 이제 어떻게 해요?', choices: [
              { id: 'call', text: '어른을 불러요', result: '어른이 세제를 높이 두셨어요.', ending: '동생도 나도 안전해요.' },
              { id: 'play', text: '같이 열어 봐요', result: '세제가 손에 묻을 수 있어요.', why: '세제는 열지 않아요.' }] } }] },
          ['stop', 'call'], [{ id: 'adult', text: '세제는 어른이 다뤄요' }, { id: 'brave', text: '내가 언니라서요', why: '언니·형도 세제는 어른께 맡겨요.' }, { id: 'fun', text: '거품이 재밌어서요', why: '세제는 놀잇감이 아니에요.' }], 'adult', 0.15),
          DILEMMA('동생이 음료병을 들었어요.', { text: '동생이 노란 물이 든 음료병을 들었어요.', motif: 'house', choices: [
            { id: 'taste', text: '내가 먼저 맛봐요', result: '모르는 물이 입에 들어가요.', why: '모르는 물은 맛보지 않아요.' },
            { id: 'call', text: '어른을 불러요', result: '어른이 오고 계세요.', easyEnding: '어른이 병을 가져가셨어요.', next: { text: '어른이 오시는 중이에요.', choices: [
              { id: 'say', text: '"마시지 마" 말해요', result: '동생이 병을 내려놓았어요.', ending: '말해서 동생을 지켰어요.' },
              { id: 'pour', text: '싱크대에 버려요', result: '버리다 튈 수 있어요.', why: '버리는 것도 어른이 해요.' }] } }] },
          ['call', 'say'], [{ id: 'unknown', text: '무엇인지 몰라서요' }, { id: 'juice', text: '주스 같아서요', why: '주스 같아도 모르면 마시지 않아요.' }, { id: 'quick', text: '빨리 끝내려고요', why: '빠른 것보다 안전이 먼저예요.' }], 'unknown', 0.2),
          DILEMMA('동생이 벌레약을 누르려 해요.', { text: '동생이 벌레약 통을 누르려 해요.', motif: 'house', choices: [
            { id: 'press', text: '같이 눌러 봐요', result: '약이 얼굴에 뿌려질 수 있어요.', why: '벌레약은 누르지 않아요.' },
            { id: 'away', text: '손잡고 물러서요', result: '동생과 떨어졌어요.', easyEnding: '어른이 벌레약을 치우셨어요.', next: { text: '어른께 어떻게 말해요?', choices: [
              { id: 'tell', text: '"벌레약 있어요" 말해요', result: '어른이 높은 곳에 두셨어요.', ending: '알려서 모두 안전해요.' },
              { id: 'quiet', text: '말 안 해요', result: '또 만질 수 있어요.', why: '본 것은 어른께 알려요.' }] } }] },
          ['away', 'tell'], [{ id: 'tell', text: '알려야 치울 수 있어요' }, { id: 'scold', text: '동생이 혼날까 봐요', why: '혼내려는 게 아니라 지키려고 알려요.' }, { id: 'bug', text: '벌레가 없어서요', why: '벌레가 없어도 누르지 않아요.' }], 'tell', 0.25, { conclude: '동생에게 "멈춰!" 하고, 세제는 어른께 맡겨요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '동생이 세제를 만져요. 무엇을 해요?', options: ['"멈춰!" 하고 어른 불러요', '내가 뺏어요'], answer: '"멈춰!" 하고 어른 불러요' }] },
      notes: '정답 길이 있는 갈림길이다. 형제가 없는 학생은 "사촌·이웃 동생"으로 떠올리게 한다.',
    }),
    HOUSE({
      id: 'saf-drug.e12.household.wrap.home', type: 'wrap', title: '집에서 어른과 확인할 점검표',
      method: '가정 연계 점검표', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 점검표 칸 두 개를 읽어 주고 함께 표시한다.', base: '점검표 세 칸을 읽고 오늘 알게 된 것에 표시한다.', challenge: '점검표를 들고 어른께 할 말을 고르고 활동지에 한 줄로 쓴다.' },
      wrap: {
        teacher: '"이 점검표를 집에 가져가서 어른과 함께 볼 거예요. 무엇을 확인할까요?" 칸을 함께 읽고 오늘 알게 된 것에 표시하게 한다. "세제를 옮기는 건 내가 해요"라는 학생에게 "세제를 옮기는 것은 어른 몫이에요. 우리는 어른께 말씀드려요"라고 말해 준다. 활동지는 가정에 보내 어른과 함께 표시해 오게 한다.',
        exitTicket: [
          CHECK('집에서 어른과 확인', [{ id: 'high', text: '세제는 높은 곳' }, { id: 'bottle', text: '음료병에 안 옮겨요' }, { id: 'mark', text: '조심 그림 보기' }], '오늘 알게 된 것에 표시해요.'),
          { type: 'choice', prompt: '어른께 할 말을 골라요.', options: ['세제는 높이 둬요', '세제 줘 보세요', '몰라요'], answer: 0, difficulty: 0.1, explain: '"세제는 높은 곳에 둬요" 하고 어른께 말씀드려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '집에서 어른과 함께 확인해요',
        items: [
          { type: 'check', prompt: '어른과 함께 살펴보고 ✓ 해요.', options: ['세제·표백제가 높은 곳에 있어요', '음료병에 세제를 옮기지 않아요', '조심 그림이 있는 병을 알아요'] },
          { type: 'short', prompt: '어른께 할 말을 한 줄로 써요.' },
        ],
        easy: { note: '어른과 함께 읽어요.', items: [{ type: 'draw', prompt: '높은 곳에 있는 세제 병을 그려요.' }] },
      },
      notes: '세제를 옮기거나 정리하는 일은 어른이 한다. 점검은 "보고 말하기"까지만 하게 한다.',
    }),
    HOUSE({
      id: 'saf-drug.e12.household.wrap.web', type: 'wrap', title: '"만지지 않아요" 제품 묶기',
      method: '만지지 않을 물건 묶기', tool: 'mindmap', minutes: 7,
      levels: { easy: '교사가 카드 세 장을 함께 읽고 바구니에 담는다.', base: '카드 다섯 장을 스스로 읽고 만지지 않을 제품을 담는다.', challenge: '함정 카드 "물병"을 가려내고 왜 다른지 말한다.' },
      wrap: {
        teacher: '"오늘 본 제품 가운데 만지지 않을 것을 바구니에 모아 볼까요?" 카드를 하나씩 읽어 주고 담게 한다. "물병"까지 담은 학생에게 "내 물병은 마셔도 되는 물이 든 병이에요. 무엇이 다를까요?"라고 묻는다. 담은 카드 이름을 반 전체가 함께 읽으며 "손 멈춰, 뒤로, 어른 불러!"로 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '만지지 않아요', cards: [{ id: 'soap', text: '주방 세제' }, { id: 'bleach', text: '표백제' }, { id: 'water', text: '내 물병' }, { id: 'bug', text: '벌레약' }, { id: 'mold', text: '곰팡이 제거제' }, { id: 'glass', text: '유리 세정제' }] }, prompt: '만지지 않을 것만 담아요.', target: { pick: ['soap', 'bleach', 'bug', 'mold', 'glass'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '냄새가 좋은 세제는요?', options: ['맡아 봐요', '만지지 않아요', '마셔 봐요'], answer: 1, difficulty: 0.1, explain: '냄새가 좋아도 세제는 만지지 않아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '만지지 않아요',
        items: [
          { type: 'choice', prompt: '만지지 않을 것에 ○ 해요.', options: ['표백제', '내 물병', '벌레약'], answer: '표백제, 벌레약' },
          { type: 'draw', prompt: '만지지 않을 제품 하나를 그리고 ×를 해요.' },
        ],
        easy: { note: '그림을 보며 어른과 함께 해요.', items: [{ type: 'draw', prompt: '내 물병을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 술·담배·커피는 어린이 것이 아니에요
  const GROWN = MOD('saf-drug.e12.grownup-things', [2]);
  const WHO = ['어린이 것', '어른 것'];
  const T_GROWN = [
    GROWN({
      id: 'saf-drug.e12.grownup-things.intro.fridge', type: 'intro', title: '냉장고에서 어린이 것 고르기',
      method: '냉장고 그림에서 고르기', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 물건 세 개(우유·물·커피 캔)만 읽어 주고 어린이 것을 함께 고른다.', base: '시연을 보고 물건 다섯 개 가운데 어린이 것을 말한다.', challenge: '"커피 우유"는 어느 쪽일지 손을 들어 고르고 까닭을 말한다.' },
      intro: {
        teacher: '"냉장고 문을 열었어요. 우유, 물, 커피 캔, 술병, 사과가 있네요. 어린이 것은 무엇일까요?" 두세 명의 대답을 듣고 시연 단추로 어린이 것만 바구니에 담기는 모습을 보여 준다. "커피 우유는 우유라서 어린이 것이에요"라는 말이 나오면 "이름에 커피가 들어 있어요. 커피는 누구 것이었지요?"라고 되묻는다. 오늘은 어른이 쓰는 물건이 왜 어린이 몸에 맞지 않는지 배운다고 밝힌다.',
        student: '냉장고에서 내가 마셔도 되는 것을 하나 떠올려 말해 보아요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '냉장고', basket: '어린이 것', cards: [{ id: 'milk', text: '우유' }, { id: 'can', text: '커피 캔' }, { id: 'water', text: '물' }, { id: 'beer', text: '술병' }, { id: 'apple', text: '사과' }] }, sequence: [{ pick: ['milk', 'water', 'apple'] }] },
        art: { draw: 'an open paper refrigerator with paper milk cartons, a water bottle and apples on the lower shelf and a coffee can and a brown bottle on the top shelf, a paper child choosing the milk', banner: '어린이 것을 골라요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '술·커피는 이름으로만 말하고 마시는 모습을 그리거나 흉내 내지 않는다.',
    }),
    GROWN({
      id: 'saf-drug.e12.grownup-things.intro.grow', type: 'intro', title: '"어린이 몸은 자라는 중" 겹 열기',
      method: '자라는 몸 겹 보기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 피부 겹 한 장만 열어 보이며 "몸속도 자라요"를 함께 말한다.', base: '시연을 보고 피부·근육 두 겹을 열어 뼈를 보며 "어린이 몸은 자라는 중"을 따라 말한다.', challenge: '자라는 몸에 필요한 것(우유·잠·운동)을 손을 들어 고른다.' },
      intro: {
        teacher: '"우리 몸속에는 뼈가 있어요. 어린이 뼈는 지금도 자라고 있어요." 시연 단추로 피부 겹, 근육 겹이 차례로 열려 뼈가 보이는 모습을 보여 주고 "어린이 몸은 자라는 중!"을 반 전체가 따라 말한다. "어른이 마시는 것을 마시면 빨리 어른이 돼요"라는 말이 나오면 "어른 것은 다 자란 몸에 맞춘 거예요. 자라는 몸에는 무엇이 좋을까요?"라고 되묻는다.',
        student: '"어린이 몸은 자라는 중!"을 따라 말하고 팔을 쭉 뻗어 보아요.',
        demo: { tool: 'body', options: { mode: 'layers' }, sequence: [{ peeled: 1 }, { peeled: 2 }] },
        art: { draw: 'a paper child standing next to a paper growth chart on the wall with little paper leaves sprouting along it, a glass of milk and a bed drawn beside', banner: '어린이 몸은 자라는 중', extra: [{ motif: 'sprout', x: 300, y: 222 }] },
      },
    }),
    GROWN({
      id: 'saf-drug.e12.grownup-things.activity.sort', type: 'activity', title: '어린이 것·어른 것 나누기',
      method: '어린이 것/어른 것 나누기', tool: 'mindmap', minutes: 9,
      levels: { easy: '카드 4장, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, 에너지 음료·커피 우유처럼 헷갈리는 카드 2장이 섞이고 하나를 골라 까닭을 말한다.' },
      activity: {
        title: '어린이 것과 어른 것 나누기', tool: 'mindmap',
        teacher: '"이것은 어린이 것일까요, 어른 것일까요?" 카드를 놓을 때마다 이름을 소리 내어 읽는다. "에너지 음료"를 어린이 것에 두는 학생에게 "에너지 음료에는 커피처럼 잠을 깨우는 것이 많이 들어 있어요. 자라는 몸에 맞을까요?"라고 묻는다. 어른 것은 나쁜 사람 물건이 아니라 어린이 몸에 맞지 않는 물건이라는 점을 짚는다.',
        task: '카드를 어린이 것·어른 것으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(WHO, '냉장고 속을 나누어요.', '냉장고', ['물', '우유', '과일'], ['술', '커피', '담배'], ['에너지 음료', '커피 우유'], 0.1),
          SORT2(WHO, '식탁 위를 나누어요.', '식탁', ['보리차', '밥', '두유'], ['맥주', '진한 커피', '담뱃갑'], ['술 든 초콜릿', '아이스 커피'], 0.15),
          SORT2(WHO, '가게 물건을 나누어요.', '가게', ['생수', '주스', '바나나'], ['소주병', '캔 커피', '담배'], ['에너지 음료', '커피 맛 음료'], 0.2, { conclude: '술·담배·커피는 어른 것이에요. 어린이는 마시거나 만지지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '어린이 것이면 ○, 어른 것이면 ×를 써요.', columns: ['물건', '○ / ×'], cells: [['우유', ''], ['술', ''], ['커피', ''], ['물', '']], answer: '○, ×, ×, ○' }],
        easy: [{ type: 'choice', prompt: '어린이 것에 ○ 해요.', options: ['우유', '술'], answer: '우유' }] },
      notes: '가족이 마시거나 피우는 것을 탓하는 이야기가 되지 않게 "다 자란 어른의 물건"으로 말한다.',
    }),
    GROWN({
      id: 'saf-drug.e12.grownup-things.activity.no', type: 'activity', title: '"아니요, 괜찮아요" 손동작',
      method: '거절 구호와 손동작', tool: 'timer', minutes: 9,
      levels: { easy: '구호 카드 2장(첫 마디·끝 마디)의 차례만 놓는다.', base: '구호 카드 3장의 차례를 놓고 손동작과 함께 따라 한다.', challenge: '차례를 놓은 뒤 짝과 한 명은 권하는 사람, 한 명은 나가 되어 구호를 주고받는다(교사가 짝 활동을 살핀다).' },
      activity: {
        title: '권할 때 하는 말 차례', tool: 'timer',
        teacher: '"아니요! (손바닥 앞으로) 괜찮아요! (고개 젓기) 물 주세요! (컵 드는 손)" 카드를 놓은 뒤 반 전체가 손동작과 함께 세 번 말한다. "어른이 주면 먹어야 예의예요"라는 학생에게 "고맙다고 하면서 \'아니요\' 하는 것도 예의 바른 말이에요"라고 말해 준다. 장면마다 셋째 마디를 바꿔 읽고, 도전 단계에서는 짝과 주고받는다.',
        task: '구호 카드를 차례대로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          MOVES('어른이 술을 권해요. 차례로 놓아요.', '술을 권할 때', ['아니요', '괜찮아요', '물 주세요'], 0.1),
          MOVES('형이 커피를 줘요. 차례로 놓아요.', '커피를 줄 때', ['아니요', '괜찮아요', '우유 마실래요'], 0.15),
          MOVES('에너지 음료를 줘요. 차례로 놓아요.', '음료를 줄 때', ['아니요', '고마워요', '주스 마실래요'], 0.2, { conclude: '권해도 "아니요, 괜찮아요" 하고 다른 것을 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '구호를 따라 써요.', text: '___, 괜찮아요, 물 주세요!', answer: '아니요' }] },
    }),
    GROWN({
      id: 'saf-drug.e12.grownup-things.activity.holiday', type: 'activity', title: '갈림길: "한 모금 마셔 볼래?"',
      method: '갈림길 고르기', tool: 'dilemma', minutes: 10,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 집 어른께 말할지 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 잘한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '어른이 장난으로 권하면?', tool: 'dilemma',
        teacher: '"명절에 친척 어른이 장난으로 \'한 모금 마셔 볼래?\' 하세요. 나는 어떻게 할까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "한 모금은 괜찮아요"를 고른 학생에게 "한 모금도 자라는 몸에는 많아요"라고 말해 준다. 권한 어른을 나쁜 사람으로 말하지 않고, "아니요"라고 말한 뒤 집 어른께 알리는 것이 나를 지키는 길이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('친척 어른이 술을 권해요.', { text: '명절에 "한 모금 마셔 볼래?" 해요.', motif: 'house', choices: [
            { id: 'sip', text: '한 모금만 마셔요', result: '어린이 몸에 해로워요.', why: '한 모금도 어린이 몸에 해로워요.' },
            { id: 'no', text: '"아니요, 괜찮아요"', result: '어른이 "그래, 그래" 하셨어요.', easyEnding: '집 어른이 "잘했어" 하셨어요.', next: { text: '집에 갈 때가 되었어요.', choices: [
              { id: 'tell', text: '집 어른께 말해요', result: '집 어른이 "잘했어" 하셨어요.', ending: '말해서 마음이 편해요.' },
              { id: 'secret', text: '비밀로 해요', result: '집 어른이 몰라요.', why: '권한 일은 집 어른께 말해요.' }] } }] },
          ['no', 'tell'], [{ id: 'grow', text: '자라는 몸이라서요' }, { id: 'joke', text: '장난이라서요', why: '장난이어도 마시지 않아요.' }, { id: 'once', text: '한 번은 괜찮아서요', why: '한 번도 마시지 않아요.' }], 'grow', 0.15),
          DILEMMA('언니가 커피를 줘요.', { text: '생일 잔치에서 언니가 커피를 줘요.', motif: 'house', choices: [
            { id: 'taste', text: '맛만 봐요', result: '잠이 안 올 수 있어요.', why: '커피는 어른 것이에요.' },
            { id: 'milk', text: '"우유 마실래요"', result: '언니가 우유를 줬어요.', easyEnding: '우유를 마시며 놀았어요.', next: { text: '집에 왔어요. 말할까요?', choices: [
              { id: 'tell', text: '집 어른께 말해요', result: '"잘 골랐네" 하셨어요.', ending: '말해서 뿌듯해요.' },
              { id: 'hide', text: '아무 말 안 해요', result: '집 어른이 몰라요.', why: '권한 일은 집 어른께 말해요.' }] } }] },
          ['milk', 'tell'], [{ id: 'kid', text: '어린이 것이 아니라서요' }, { id: 'bitter', text: '맛이 써서요', why: '맛이 달아도 커피는 어른 것이에요.' }, { id: 'sister', text: '언니가 줘서요', why: '누가 줘도 마시지 않아요.' }], 'kid', 0.2),
          DILEMMA('동네 형이 담배를 보여 줘요.', { text: '동네 형이 담배를 "만져 볼래?" 해요.', motif: 'house', choices: [
            { id: 'touch', text: '만져 봐요', result: '어린이가 만질 물건이 아니에요.', why: '담배는 어린이 것이 아니에요.' },
            { id: 'leave', text: '"싫어요" 하고 가요', result: '형과 떨어졌어요.', easyEnding: '집 어른께 말했어요.', next: { text: '집에 왔어요. 어떻게 해요?', choices: [
              { id: 'tell', text: '집 어른께 말해요', result: '"말해 줘서 고마워" 하셨어요.', ending: '말해서 안전해요.' },
              { id: 'forget', text: '잊어버려요', result: '또 만나면 또 권할 수 있어요.', why: '권한 일은 꼭 어른께 말해요.' }] } }] },
          ['leave', 'tell'], [{ id: 'mine', text: '내 몸을 지켜요' }, { id: 'cool', text: '멋있어 보여서요', why: '멋있어 보여도 어린이 것이 아니에요.' }, { id: 'afraid', text: '형이 무서워서요', why: '무서우면 더욱 어른께 말해요.' }], 'mine', 0.25, { conclude: '권해도 "아니요" 하고, 집 어른께 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '"한 모금 마셔 볼래?" 하면?', options: ['"아니요, 괜찮아요"', '한 모금만 마셔요'], answer: '"아니요, 괜찮아요"' }] },
      notes: '정답 길이 있는 갈림길이다. 계획의 "부모님께 말하기"를 가족 형태와 상관없이 쓰도록 "집 어른께 말하기"로 적었다.',
    }),
    GROWN({
      id: 'saf-drug.e12.grownup-things.wrap.vote', type: 'wrap', title: '권할 때 할 말 그림그래프',
      method: '우리 반 그림그래프', tool: 'chart', minutes: 6,
      levels: { easy: '첫 줄이 그려진 그림그래프에 나머지 줄만 붙인다.', base: '그림그래프를 완성하고 가장 많은 것을 찾는다.', challenge: '두 칸의 사람 수 차이를 고른다.' },
      wrap: {
        teacher: '"누가 권하면 나는 무슨 말을 할까요? 손을 들어 볼까요?" 먼저 우리 반이 손을 들어 칠판에 세어 본 뒤, 화면 그래프는 수업을 위해 지은 가상의 반 자료라고 말한다. 사람 그림 하나가 한 명이라는 것을 손가락으로 세며 확인한다. 출구 3번에서 차이를 헷갈리는 학생에게 두 줄의 그림을 하나씩 짝 지어 남는 수를 세게 한다.',
        exitTicket: [
          PICT_EXIT('표를 보고 그림그래프를 그려요.', '권할 때 할 말(가상)', [['아니요, 괜찮아요', 8], ['물 주세요', 5], ['어른께 말해요', 3]]),
          PREAD_EXIT('가장 많은 것을 골라요.', '권할 때 할 말(가상)', [['아니요, 괜찮아요', 8], ['물 주세요', 5], ['어른께 말해요', 3]], '가장 많은 말은?', 0),
          { type: 'choice', prompt: '"아니요"는 "물 주세요"보다 몇 명 많아요?', options: ['3명', '5명', '8명'], answer: 0, difficulty: 0.2, explain: '8명과 5명은 3명 차이예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '권할 때 내가 할 말',
        items: [
          { type: 'check', prompt: '권할 때 내가 할 말에 ✓ 해요.', options: ['아니요, 괜찮아요', '물 주세요', '집 어른께 말할게요'] },
          { type: 'draw', prompt: '"아니요"라고 말하는 내 모습을 그려요.' },
        ],
        easy: { note: '하나만 ✓ 해도 돼요.', items: [{ type: 'draw', prompt: '손바닥을 앞으로 내민 내 모습을 그려요.' }] },
      },
      notes: '그래프 수는 수업용으로 지은 가상의 반 자료다. 출구에는 단계별 판이 없어 쉬움·도전 차이는 교사 진행으로 둔다.',
    }),
    GROWN({
      id: 'saf-drug.e12.grownup-things.wrap.story', type: 'wrap', title: '권해요 → "아니요" → 말해요',
      method: '세 장면 차례', tool: 'story', minutes: 6,
      levels: { easy: '교사가 첫 장면을 읽어 주고 남은 두 장면을 함께 놓는다.', base: '세 장면을 스스로 차례대로 놓는다.', challenge: '차례를 놓은 뒤 말풍선 문항에서 할 말을 고른다.' },
      wrap: {
        teacher: '"누가 어른 것을 권했어요. 그다음엔 무엇을 하고, 끝에는 무엇을 할까요?" 세 장면을 놓은 뒤 반 전체가 장면마다 동작을 해 본다. "집 어른께 말해요"를 빼먹은 학생에게 "말하지 않으면 다음에 또 권할 때 누가 도와줄까요?"라고 묻는다. 말풍선 문항에서 고른 말을 큰 소리로 따라 하며 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['먼저', '다음', '끝'], cards: [{ id: 'tell', text: '집 어른께 말해요' }, { id: 'offer', text: '권해요' }, { id: 'no', text: '"아니요" 해요' }] }, prompt: '세 장면을 차례대로 놓아요.', target: { order: ['offer', 'no', 'tell'] }, difficulty: 0.1 },
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'say', who: '나', label: '"___"' }], cards: [{ id: 'sip', text: '한 모금만요' }, { id: 'no', text: '아니요, 괜찮아요' }, { id: 'secret', text: '몰래 줘요' }] }, prompt: '권할 때 할 말을 골라요.', target: { fill: { say: 'no' } }, difficulty: 0.1 },
          MOOD,
        ],
      },
      worksheet: {
        title: '권해요, 아니요, 말해요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '권하면 "___, 괜찮아요" 해요.', answer: '아니요' },
          { type: 'draw', prompt: '집 어른께 말하는 내 모습을 그려요.' },
        ],
        easy: { note: '선생님과 함께 읽어요.', items: [{ type: 'draw', prompt: '"아니요" 하는 내 얼굴을 그려요.' }] },
      },
      notes: '출구에는 단계별 판이 없어 말풍선 문항은 모든 단계에서 나온다(쉬움은 교사가 보기를 읽어 준다).',
    }),
  ];

  PaperLessons.registerModules([].concat(T_ADULT, T_MOUTH, T_SMOKE, T_MYMED, T_HOUSE, T_GROWN));
})();
