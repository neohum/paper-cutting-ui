/* 창체 안전교육 폭력예방 및 신변보호 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-violence 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 폭력예방 및 신변보호
 *   '학교폭력의 예방 및 대처법 알기' · '성폭력 예방 및 대처방안 알기' · '내 몸의 소중함을 알기' · '아동학대의 유형 및 대처방안 알기' · '자살 예방 및 생명존중 교육'
 *   (유치원 '내 몸의 소중함과 정확한 명칭 알기' · '좋은 느낌과 싫은 느낌 알기' 연계).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기. 장면·인물은 직접 지은 것이다(동물 인물·가명 '하나').
 * 주제 8개(1학년 4 · 2학년 4) × 도입 2 · 활동 4 · 정리 2 = 64모듈.
 *
 * 이 영역에서 늘 지키는 틀(모든 모듈):
 *   - 학생에게 겪은 일을 묻지 않는다. 모든 장면은 그림 속 동물·가명 인물의 일로만 이야기한다.
 *   - 장면은 무섭거나 자세하지 않게 — '싫은 손길', '아프게 해요', '무서운 일'처럼 말하고 행동을 그리지 않는다.
 *   - 잘못은 늘 하게 한 사람(가해자)에게 있다. 말한 아이는 잘한 것이고, 그 일은 아이 잘못이 아니다.
 *   - 도움 받을 곳은 믿을 어른(담임·보건 선생님·가족)과 112(체계도 concepts)만 쓴다. 다른 번호·기관은 쓰지 않는다.
 *   - 수업 중이나 뒤에 걱정되는 말을 꺼내는 학생이 있으면 그 자리에서 캐묻지 않고 "말해 줘서 고마워"라고 받은 뒤 학교의 대응 절차를 따른다.
 *
 * 수치·법 조항은 쓰지 않는다(근거 파일에 이 영역 초1-2 수치가 없다). 그림그래프 수는 수업용 가상 자료이고, 타이머 값은 '우리 반 약속'이다.
 *
 * 사람 확인: (근거 파일에 세부 수칙이 없어 일반 아동 신변보호·성교육·생명존중 교육 내용으로 쓴 문장 — 확인할 곳을 함께 적는다)
 *   - my-body.activity.swimsuit · body-boundary.intro.name-quiz: '수영복(속옷)으로 가리는 곳(가슴·엉덩이·생식기)은 나만의 소중한 곳'과
 *     초1-2에 쓰는 몸 바른 이름(생식기) — 교육부 학교 성교육 표준안·학교 보건 교재.
 *   - my-body.activity.tori-day·bedtime-check: 몸 아끼는 습관(문 닫고 화장실·속옷 갈아입기·잠자기 전 이 닦기) — 학교 보건 교재.
 *   - good-bad-feeling 전체: '좋은 느낌·싫은 느낌', '싫어요·떠나요·알려요', '기분 나쁜 비밀은 알리고 깜짝 선물 비밀은 지켜도 된다' — 성폭력 예방 교육 자료(교육부·여성가족부 아동 성폭력 예방 교육).
 *   - good-bad-feeling.intro.body-signal · life-precious.activity.body-care: '싫거나 속상하면 가슴이 쿵쿵·배가 아프다' 같은 몸 신호 — 학교 보건·사회정서 교육 자료.
 *   - kind-words.activity.stop-breathe · life-precious.intro.flower-breath: '멈추고 숨 쉬고 말하기', 꽃 냄새·촛불 숨쉬기 — 학교 사회정서 교육 자료(타이머 초는 우리 반 약속).
 *   - helper-adults.intro.helper-cards·activity.tell-sort·wrap.my-helpers, safe-home.wrap.call-112: '112는 급하고 위험한데 가까이 어른이 없을 때',
 *     112에 '어디인지 말하고 끊지 말고 기다려요', 장난 전화 하지 않기 — 경찰청 안내.
 *   - helper-adults.wrap.my-helpers(교사 발문): '길에서는 가게 직원·경찰관처럼 일하는 어른을 찾는다' — 경찰청 실종아동 예방 안내.
 *   - helper-adults.activity.school-map: 다치면 보건실, 담임 선생님이 안 계시면 교무실 — 학교마다 다르므로 우리 학교 배치로 교사 확인.
 *   - safe-home.activity.help-map: '지구대의 경찰관·아는 이웃 어른께 도움 청하기' — 경찰청 안내.
 *   - body-boundary.activity.touch-sort·secret-touch·brave-story: '허락 안 한 손길엔 안돼요·떠나요·알려요, 소중한 곳·비밀 손길은 꼭 알린다, 말한 아이 잘못이 아니다'
 *     — 교육부 학교 성교육 표준안·아동 성폭력 예방 교육 자료.
 *   - body-boundary.activity.ask-first: '안아도 돼? 먼저 묻기·싫다면 멈추기'(몸의 경계와 동의) — 교육부 학교 성교육 표준안.
 *   - stop-teasing.activity.three-kinds: 놀림·따돌림을 '말로·몸으로·끼워 주지 않기'로 나눈 것 — 교육부 학교폭력 예방 교육 자료(어린이용 쉬운 말로 줄임).
 *   - safe-home 전체: '어린이에게 꼭 필요한 돌봄(밥·잠·씻기·병원·안아 주기)', '때리기·밥을 안 주기·겁주기는 안 되는 행동' — 아동학대 예방 교육 자료(보건복지부·아동권리보장원).
 *   - life-precious.activity.care-list·wrap.feel-better-graph: 마음 돌봄 방법(물 마시기·그림·노래·이야기하기) — 학교 생명존중 교육 자료.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-violence', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);

  // 두 칸 나누기(mindmap): 기본 6장, 쉬움 4장(prompt·target 도 함께 바꿈), 도전 8장(헷갈리는 카드 2장 — 둘째 칸으로 간다)
  const SORT2 = (slots, prompt, topic, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: a, [slots[1]]: b });
    return {
      prompt, toolOptions: { topic, slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0], ok[1], no[1], ok[2], hard[1], no[2]] }, target: { sort: S(ok, [...no, ...hard]) } },
      },
      ...more,
    };
  };
  // 두 칸 → 도전은 세 칸(mindmap): 기본 두 칸 6장, 쉬움 두 칸 4장, 도전 셋째 칸(third)과 그 칸 카드 2장이 더해진다
  const SORT23 = (slots, third, prompt, topic, a, b, c, d, more) => {
    const S2 = (x, y) => ({ [slots[0]]: x, [slots[1]]: y });
    return {
      prompt, toolOptions: { topic, slots, cards: [a[0], b[0], a[1], b[1], a[2], b[2]] }, target: { sort: S2(a, b) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [a[0], b[0], a[1], b[1]] }, target: { sort: S2(a.slice(0, 2), b.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(세 칸).`, toolOptions: { slots: [...slots, third], cards: [a[0], c[0], b[0], a[1], b[1], c[1], a[2], b[2]] }, target: { sort: Object.assign(S2(a, b), { [third]: c }) } },
      },
      ...more,
    };
  };
  // 장면 차례 놓기(story): 기본 3장, 쉬움 첫 장면이 놓여 있음, 도전 틀린 장면 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const ids = cards.map((c) => c.id);
    const lv = { easy: { state: { at: { [ids[0]]: 0, [ids[1]]: null, [ids[2]]: null } } } };
    if (wrong) lv.challenge = { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } };
    return { prompt, toolOptions: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: ids }, difficulty: d, levels: lv, ...more };
  };
  // 칸 지도 핀(map): 장소에 핀 하나. 도전은 헷갈리는 장소가 더 있는 지도
  const PIN = (prompt, base, more2, place, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: base }, target: { place }, difficulty: d,
    levels: { challenge: { toolOptions: { places: [...base, ...more2] } } }, ...more,
  });
  // 그림 점검표(kitchen checklist): 쉬움 3개(맞는 것 2) · 기본 4개(맞는 것 3) · 도전 5개(헷갈리는 함정 1개 더). good 3, bad 1, trap 1
  const LIST = (prompt, title, good, bad, trap, d, more) => {
    const ids = (a) => a.map((x) => x.id);
    return {
      prompt, toolOptions: { mode: 'checklist', title, items: [good[0], bad, good[1], good[2]] }, target: { checklist: ids(good) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(3개).`, toolOptions: { items: [good[0], bad, good[1]] }, target: { checklist: ids(good.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(5개).`, toolOptions: { items: [good[0], bad, good[1], trap, good[2]] }, target: { checklist: ids(good) } },
      },
      ...more,
    };
  };
  // 정리 출구: 구호 순서(timer), 점검표(함정 1개 — 맞는 것만 표시)
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const PROMISE = (title, good, trap, prompt) => ({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items: [good[0], good[1], trap, good[2]] }, prompt: prompt || '지킬 약속에만 표시해요.', target: { checklist: good.map((x) => x.id) }, difficulty: 0.1 });
  // 갈림길(dilemma): 기본 2번 갈림, 쉬움 첫 갈림만, 도전 끝에서 까닭 카드 고르기
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
  // 그림 이야기 고르기(story pick): 기본 4장에서 맞는 장면 모두, 쉬움 3장에서 하나, 도전 4장을 좋아요·안돼요 두 칸에
  const SCENES = (prompt, basket, good, bad, d, more) => ({
    prompt, toolOptions: { mode: 'pick', basket, cards: [good[0], bad[0], good[1], bad[1]] }, target: { pick: good.map((c) => c.id) }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(하나).`, toolOptions: { cards: [bad[0], good[0], bad[1]] }, target: { pick: [good[0].id] } },
      challenge: { prompt: `${cut(prompt)}(두 칸).`, toolOptions: { mode: 'sort', slots: ['좋아요', '안돼요'], cards: [good[0], bad[0], good[1], bad[1]] }, target: { sort: { 좋아요: good.map((c) => c.id), 안돼요: bad.map((c) => c.id) } } },
    },
    ...more,
  });

  // =====================================================================================================
  // 1학년 · 소중한 내 몸
  const BODY = MOD('saf-violence.e12.my-body', [1]);
  const T_BODY = [
    BODY({
      id: 'saf-violence.e12.my-body.intro.body-song', type: 'intro', title: '몸 노래에 맞춰 몸 짚기',
      method: '몸 노래에 맞춰 몸 짚기 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 동작 카드 두 장(머리·어깨)만 들어 보이며 차례를 불러 주고 함께 짚는다.', base: '노래를 듣고 동작 카드 세 장의 차례를 맞춘 뒤 다 같이 따라 짚는다.', challenge: '세 장을 맞춘 뒤 노래를 빠르게 한 번 더 부르며 따라 짚는다.' },
      intro: {
        teacher: '"머리, 어깨, 무릎! 노래에 맞춰 내 몸을 짚어 볼까요?" 시연 단추로 동작 카드가 차례대로 놓이는 모습을 보이고, 반 전체가 노래하며 머리 → 어깨 → 무릎을 두 번 짚는다. "몸 이름을 크게 말하면 부끄러워요"라는 말이 나오면 "의사 선생님도 몸 이름을 바르게 불러요. 이름을 알면 아플 때 어디가 아픈지 말할 수 있어요"라고 되묻듯 답한다. 오늘은 몸의 바른 이름과 나만의 소중한 곳을 알아본다고 밝힌다.',
        student: '노래에 맞춰 머리, 어깨, 무릎을 내 손으로 짚어 보아요.',
        demo: { tool: 'timer', options: { title: '몸 노래 차례', cards: ['무릎 짚기', '머리 짚기', '어깨 짚기'] }, sequence: [{ order: ['머리 짚기', '어깨 짚기', '무릎 짚기'] }] },
        art: { draw: 'paper children singing in a circle, touching their heads, shoulders and knees with both hands, cut paper musical notes floating above', banner: '머리, 어깨, 무릎!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    BODY({
      id: 'saf-violence.e12.my-body.intro.baby-care', type: 'intro', title: '아기 곰 돌보는 그림과 기분',
      method: '아기 돌보는 그림 보고 기분 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 기분 얼굴 두 개(기쁨·화남)만 가리키며 아기 곰은 어느 쪽일지 함께 고른다.', base: '시연의 기분 카드 네 장 가운데 아기 곰의 기분을 스스로 말한다.', challenge: '기분을 고른 뒤 그림에서 왜 좋은지 알려 주는 곳(안아 주는 팔·따뜻한 물)을 하나 가리킨다.' },
      intro: {
        teacher: '"엄마 곰이 아기 곰을 씻겨 주고 꼭 안아 줘요. 아기 곰은 어떤 기분일까요?" 두세 명의 대답을 듣고(기다릴 반응: "좋아요", "편안해요") 시연 단추로 기분 카드가 바구니에 담기는 모습을 보여 준다. "아기라서 씻겨 주는 거예요"라는 말이 나오면 "맞아요. 아기 곰 몸이 소중해서 깨끗이 아껴 주는 거예요. 우리 몸도 그만큼 소중해요"라고 이어 말한다. 오늘 배울 말 "내 몸은 소중해"를 한 번 함께 말한다.',
        student: '그림 속 아기 곰은 어떤 기분일지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '아기 곰 기분', cards: ['기쁨', '화남', '편안함', '무서움'], shuffle: false }, sequence: [{ pick: ['기쁨', '편안함'] }] },
        art: { draw: 'a paper mother bear gently washing a baby bear in a small paper tub and then wrapping it in a soft towel and hugging it', banner: '내 몸은 소중해요', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
      },
    }),
    BODY({
      id: 'saf-violence.e12.my-body.activity.body-names', type: 'activity', title: '몸 그림에서 바른 이름 찾기',
      method: '몸 그림 눌러 바른 이름 듣고 고르기', tool: 'body', minutes: 14,
      levels: { easy: '부위 4곳 가운데 고르고, 누르면 그곳 이름이 바로 보인다.', base: '이름을 듣고 부위 6곳 가운데 찾아 누른다.', challenge: '두 곳의 이름을 한꺼번에 듣고 두 곳을 모두 찾아 누른다.' },
      activity: {
        title: '몸 그림에서 이름 찾기', tool: 'body',
        teacher: '"선생님이 부르는 곳을 종이 몸에서 찾아 눌러 볼까요?" 누르기 전에 먼저 자기 몸의 같은 곳을 손으로 짚게 한다. 무릎과 발목을 헷갈리는 학생에게 "앉을 때 접히는 곳은 어디일까요? 걸을 때 발과 다리를 잇는 곳은요?"라고 묻는다. 몸의 이름은 부끄러운 말이 아니라 내 몸을 지키는 말이라는 점을 짚는다.',
        task: '부르는 곳을 몸 그림에서 찾아 눌러요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '무릎을 찾아 눌러요.', toolOptions: { mode: 'parts', parts: ['어깨', '팔꿈치', '배', '무릎', '발목', '목'] }, target: { parts: ['무릎'] }, difficulty: 0.1,
            hints: ['앉을 때 다리 가운데 접히는 곳이에요.', '다리 가운데쯤을 살펴봐요.', '다리 가운데의 무릎을 눌러요.'],
            levels: { easy: { toolOptions: { parts: ['어깨', '배', '무릎', '발목'] } }, challenge: { prompt: '무릎과 어깨를 찾아 눌러요.', target: { parts: ['무릎', '어깨'] } } } },
          { prompt: '배를 찾아 눌러요.', toolOptions: { mode: 'parts', parts: ['눈', '귀', '가슴', '배', '허리', '무릎'] }, target: { parts: ['배'] }, difficulty: 0.15,
            hints: ['밥을 먹으면 불룩해지는 곳이에요.', '몸 가운데 앞쪽을 살펴봐요.', '가슴 아래 배를 눌러요.'],
            levels: { easy: { toolOptions: { parts: ['눈', '가슴', '배', '무릎'] } }, challenge: { prompt: '배와 가슴을 찾아 눌러요.', target: { parts: ['배', '가슴'] } } } },
          { prompt: '팔꿈치를 찾아 눌러요.', toolOptions: { mode: 'parts', parts: ['어깨', '팔꿈치', '손목', '허리', '허벅지', '발목'] }, target: { parts: ['팔꿈치'] }, difficulty: 0.2,
            hints: ['팔을 굽힐 때 접히는 곳이에요.', '팔 가운데쯤을 살펴봐요.', '팔 가운데 팔꿈치를 눌러요.'],
            levels: { easy: { toolOptions: { parts: ['어깨', '팔꿈치', '손목', '발목'] } }, challenge: { prompt: '팔꿈치와 발목을 찾아 눌러요.', target: { parts: ['팔꿈치', '발목'] } } },
            conclude: '몸의 이름은 바르게 불러요. 이름을 알면 아픈 곳도 말할 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '앉을 때 접히는 곳은?', options: ['무릎', '어깨'], answer: '무릎' }] },
      notes: '종이 몸에 머리·팔·엉덩이 칸이 없어 계획의 부위 대신 어깨·팔꿈치·배·가슴·무릎·발목을 쓴다. 머리는 학생이 자기 몸을 짚게 하고, 엉덩이는 다음 활동(수영복)에서 카드로 다룬다.',
    }),
    BODY({
      id: 'saf-violence.e12.my-body.activity.swimsuit', type: 'activity', title: '수영복으로 가리는 곳 나누기',
      method: '수영복 그림으로 가리는 곳 나누기', tool: 'mindmap', minutes: 13,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 바로 되돌아온다.', base: '카드 6장을 다 놓은 뒤 확인하고, 셋째 문항에서 가리는 까닭 카드를 고른다.', challenge: '카드 6장이 섞여 나오고, 까닭 고르기에 "나빠서요" 같은 헷갈리는 카드가 한 장 더 섞인다.' },
      activity: {
        title: '수영복으로 가리는 곳 나누기', tool: 'mindmap',
        teacher: '"수영장에 가면 수영복을 입어요. 수영복이 가려 주는 곳은 어디일까요?" 카드를 놓을 때마다 이름을 함께 소리 내어 읽는다. 생식기 카드에서 웃는 학생이 있으면 "이것도 몸의 바른 이름이에요. 나만의 소중한 곳이라 수영복이 가려 줘요"라고 담담하게 말한다. 가리는 까닭은 부끄럽거나 나빠서가 아니라 소중해서라는 점과, 누가 보자고 해도 보여 주지 않아도 된다는 점을 짚는다.',
        task: '몸 카드를 가려요·보여도 돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '수영복이 가리는 곳을 나누어요.', toolOptions: { topic: '수영복', slots: ['가려요', '보여도 돼요'], cards: ['가슴', '얼굴', '엉덩이', '팔', '생식기', '무릎'] }, target: { sort: { 가려요: ['가슴', '엉덩이', '생식기'], '보여도 돼요': ['얼굴', '팔', '무릎'] } }, difficulty: 0.1,
            hints: ['수영복을 입은 친구 그림을 떠올려요.', '수영복 천이 덮는 곳을 살펴봐요.', '가슴·엉덩이·생식기는 가려요.'],
            levels: { easy: { prompt: '수영복이 가리는 곳을 나누어요(4장).', toolOptions: { cards: ['가슴', '얼굴', '엉덩이', '팔'] }, target: { sort: { 가려요: ['가슴', '엉덩이'], '보여도 돼요': ['얼굴', '팔'] } } } } },
          { prompt: '소중한 곳을 지키는 일을 나누어요.', toolOptions: { topic: '소중한 곳', slots: ['좋아요', '안돼요'], cards: ['수영복 입기', '치마 들추기', '문 닫고 갈아입기', '남 앞에서 벗기', '수건 두르기', '바지 내리기 장난'] }, target: { sort: { 좋아요: ['수영복 입기', '문 닫고 갈아입기', '수건 두르기'], 안돼요: ['치마 들추기', '남 앞에서 벗기', '바지 내리기 장난'] } }, difficulty: 0.15,
            levels: { easy: { prompt: '소중한 곳을 지키는 일을 나누어요(4장).', toolOptions: { cards: ['수영복 입기', '치마 들추기', '문 닫고 갈아입기', '남 앞에서 벗기'] }, target: { sort: { 좋아요: ['수영복 입기', '문 닫고 갈아입기'], 안돼요: ['치마 들추기', '남 앞에서 벗기'] } } } } },
          { prompt: '왜 가릴까요? 까닭을 골라요.', toolOptions: { mode: 'pick', topic: '가리는 까닭', basket: '가리는 까닭', cards: ['소중해서요', '부끄러워서요', '내 몸 지키려고'] }, target: { pick: ['소중해서요', '내 몸 지키려고'] }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { cards: ['소중해서요', '부끄러워서요', '내 몸 지키려고', '나빠서요'] } } },
            conclude: '수영복으로 가리는 곳은 나만의 소중한 곳이에요. 소중해서 가려요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '가리는 곳이면 ○, 아니면 ×를 써요.', columns: ['몸', '○ / ×'], cells: [['가슴', ''], ['얼굴', ''], ['엉덩이', ''], ['팔', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '수영복이 가리는 곳에 ○ 해요.', options: ['엉덩이', '얼굴'], answer: '엉덩이' }] },
      notes: '생식기라는 바른 이름을 담담하게 쓴다(사람 확인 목록). 학생의 몸을 가리키거나 짚게 하지 않고 그림 카드로만 이야기한다.',
    }),
    BODY({
      id: 'saf-violence.e12.my-body.activity.tori-day', type: 'activity', title: '토리의 하루에서 몸 아끼는 장면',
      method: '그림 이야기에서 몸 아끼는 장면 고르기', tool: 'story', minutes: 14,
      levels: { easy: '장면 3장 가운데 몸을 아끼는 장면 하나를 고른다.', base: '장면 4장 가운데 몸을 아끼는 장면을 모두 고른다.', challenge: '장면 4장을 좋아요·안돼요 두 칸에 나누어 놓는다.' },
      activity: {
        title: '토끼 토리의 하루 장면 고르기', tool: 'story',
        teacher: '"토끼 토리가 아침부터 밤까지 무엇을 하는지 들어 볼까요?" 장면마다 교사가 그림을 읽어 주고, 고르기 전에 "이건 토리 몸을 아끼는 걸까요?"라고 묻는다. 화장실 문을 열어 두는 장면을 "빨리 나올 수 있어요"라며 좋다고 하는 학생에게 "문을 닫으면 나만의 소중한 곳을 지킬 수 있어요. 열어 두면 누가 볼 수 있을까요?"라고 묻는다. 몸을 깨끗이 하고 가려 주는 것이 내 몸을 아끼는 일이라고 짚는다.',
        task: '토리가 몸을 아끼는 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SCENES('아침 장면에서 골라요.', '몸 아끼기', [C('brush', '이 닦아요', { motif: 'sun' }), C('under', '속옷 갈아입어요', { motif: 'sun' })], [C('skip', '안 씻고 가요', { motif: 'sun' }), C('dash', '잠옷 바람 등교', { motif: 'sun' })], 0.1),
          SCENES('학교 장면에서 골라요.', '몸 아끼기', [C('door', '문 닫고 화장실', { motif: 'house' }), C('wash', '손 씻어요', { motif: 'house' })], [C('open', '문 열고 화장실', { motif: 'house' }), C('peek', '칸막이 엿보기', { motif: 'house' })], 0.15),
          SCENES('저녁 장면에서 골라요.', '몸 아끼기', [C('bath', '목욕해요', { motif: 'moon' }), C('sleep', '일찍 자요', { motif: 'moon' })], [C('dirty', '안 씻고 자요', { motif: 'moon' }), C('game', '밤새 게임해요', { motif: 'moon' })], 0.2, { conclude: '씻고, 가리고, 푹 자는 것이 내 몸을 아끼는 일이에요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '화장실은 어떻게 써요?', options: ['문 닫고 써요', '문 열고 써요'], answer: '문 닫고 써요' }] },
    }),
    BODY({
      id: 'saf-violence.e12.my-body.activity.bedtime-check', type: 'activity', title: '몸 돌보기 점검표 표시',
      method: '잠자기 전 몸 돌보기 점검표 표시', tool: 'kitchen', minutes: 13,
      levels: { easy: '그림 항목 3개 가운데 몸을 아끼는 일 2개에 표시한다.', base: '항목 4개 가운데 몸을 아끼는 일 3개에 표시한다.', challenge: '항목 5개에 "사탕 먹고 눕기" 같은 함정 항목이 하나 더 섞인다.' },
      activity: {
        title: '몸 돌보기 점검표', tool: 'kitchen',
        teacher: '"잠자기 전에 내 몸을 위해 무엇을 할까요?" 항목을 하나씩 읽어 주고, 표시하기 전에 그 행동을 몸으로 흉내 내게 한다(이 닦는 손, 손 비비기). "사탕 먹고 바로 누워도 돼요"라는 학생에게 "사탕이 이에 붙은 채로 밤새 있으면 이가 어떻게 될까요?"라고 묻는다. 내 몸은 내가 아끼고 돌본다는 점을 짚는다.',
        task: '몸을 아끼는 일에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          LIST('잠자기 전에 할 일에 표시해요.', '잠자기 전', [C('teeth', '이 닦기'), C('hands', '손 씻기'), C('pjs', '잠옷 입기')], C('noteeth', '양치 안 하기'), C('candy', '사탕 먹고 눕기'), 0.1),
          LIST('목욕할 때 할 일에 표시해요.', '목욕할 때', [C('shut', '문 닫고 씻기'), C('soap', '비누칠하기'), C('dry', '물기 닦기')], C('splash', '물장난 미끄럼'), C('opendoor', '문 열고 씻기'), 0.15),
          LIST('옷 갈아입을 때 할 일에 표시해요.', '옷 갈아입기', [C('self', '혼자 갈아입기'), C('room', '방에서 입기'), C('fresh', '속옷 갈아입기')], C('hall', '복도에서 벗기'), C('front', '친구 앞에서 벗기'), 0.2, { conclude: '이 닦고, 씻고, 문 닫고 갈아입어 내 몸을 아껴요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '오늘 밤 할 일에 ✓ 해요.', options: ['이 닦기', '손 씻기', '잠옷 입기'] }] },
    }),
    BODY({
      id: 'saf-violence.e12.my-body.wrap.chant', type: 'wrap', title: '"내 몸은 소중해" 구호',
      method: "'내 몸은 소중해' 구호 동작", tool: 'timer', minutes: 7,
      levels: { easy: '교사가 구호 카드 두 장(손 모으기·가슴 짚기)을 먼저 보이고 함께 따라 한다.', base: '구호 카드 세 장의 차례를 맞추고 동작과 함께 외친다.', challenge: '세 장을 맞춘 뒤 짝과 마주 보고 구호를 외친다.' },
      wrap: {
        teacher: '"두 손 모으고(손 모으기), 가슴에 손을 얹고(가슴 짚기), 내 몸은 소중해!" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 출구 2번에서 "보여 줘요"를 고른 학생에게 "소중한 곳은 누가 보자고 해도 싫다고 말하고 어른께 알려도 돼요. 그건 잘한 일이에요"라고 말해 준다. 마지막 구호는 작은 소리부터 큰 소리까지 키워 가며 외친다.',
        exitTicket: [
          CHANT('내 몸 구호', ['손 모으기', '가슴 짚기', '내 몸은 소중해']),
          { type: 'choice', prompt: '누가 소중한 곳을 보자고 하면?', options: ['보여 줘요', '싫어요 하고 알려요'], answer: 1, difficulty: 0.1, explain: '소중한 곳은 보여 주지 않아요. 싫다고 말하고 어른께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 몸은 소중해',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '내 몸은 ___!', answer: '소중해' },
          { type: 'draw', prompt: '수영복을 입은 내 모습을 그려요.' },
        ],
        easy: { note: '"손 모으고, 가슴 짚고, 내 몸은 소중해!"를 떠올려요.', items: [{ type: 'draw', prompt: '가슴에 손을 얹은 내 모습을 그려요.' }] },
      },
    }),
    BODY({
      id: 'saf-violence.e12.my-body.wrap.promise-card', type: 'wrap', title: '몸 지키는 약속 카드',
      method: '몸 지키는 약속 카드 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 약속 카드를 하나씩 읽어 주고 함께 바구니에 담는다.', base: '약속 카드 4장 가운데 지킬 약속을 스스로 담는다.', challenge: '담은 뒤 가장 지키고 싶은 약속 하나를 소리 내어 따라 읽는다.' },
      wrap: {
        teacher: '"내 몸을 지키는 약속 카드를 바구니에 담아 볼까요?" 카드를 하나씩 읽어 주고 담을 때마다 반 전체가 따라 읽는다. "아무 데서 벗기"를 담은 학생에게 "옷은 어디서 갈아입기로 했지요?"라고 묻는다. 끝으로 한 명씩 가장 지키고 싶은 약속 하나를 골라 소리 내어 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '내 약속', cards: ['소중한 곳 가려요', '몸 깨끗이 씻어요', '아무 데서 벗기', '몸 이름 바르게'] }, prompt: '지킬 약속 카드를 담아요.', target: { pick: ['소중한 곳 가려요', '몸 깨끗이 씻어요', '몸 이름 바르게'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '몸 이름을 말하는 것은요?', options: ['부끄러운 일', '내 몸 지키는 일'], answer: 1, difficulty: 0.1, explain: '몸 이름을 바르게 알면 아픈 곳도, 싫은 일도 말할 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 몸 지키는 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['소중한 곳을 가려요', '몸을 깨끗이 씻어요', '몸 이름을 바르게 말해요'] },
          { type: 'draw', prompt: '몸을 아끼는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 좋은 느낌, 싫은 느낌
  const FEEL = MOD('saf-violence.e12.good-bad-feeling', [1]);
  const GOODBAD = ['좋은 느낌', '싫은 느낌'];
  const T_FEEL = [
    FEEL({
      id: 'saf-violence.e12.good-bad-feeling.intro.faces', type: 'intro', title: '표정 그림에 기분 이름 붙이기',
      method: '표정 그림 보고 기분 이름 붙이기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 얼굴 두 개(웃는·찡그린)만 보여 주고 좋아요·싫어요를 함께 말한다.', base: '얼굴 네 개를 보며 기분 카드를 잇는 시연을 따라 말한다.', challenge: '얼굴 네 개를 본 뒤 기분 낱말(기뻐요·싫어요) 하나를 골라 따라 말한다.' },
      intro: {
        teacher: '"이 친구 얼굴은 어떤 기분일까요?" 웃는 얼굴과 찡그린 얼굴을 보여 주고 학생들이 얼굴을 따라 지어 보게 한 뒤, 시연 단추로 기분 카드가 얼굴에 이어지는 모습을 보여 준다. "싫은 느낌은 나쁜 거예요"라는 말이 나오면 "싫은 느낌은 내 몸이 보내는 신호예요. 신호가 오면 어떻게 할지 오늘 배워요"라고 되묻듯 답한다.',
        student: '선생님 얼굴을 보고 좋은 느낌인지 싫은 느낌인지 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'smile', label: '웃는 얼굴' }, { id: 'frown', label: '찡그린 얼굴' }], cards: ['좋아요', '싫어요'] }, sequence: [{ match: { smile: '좋아요', frown: '싫어요' } }] },
        art: { draw: 'two paper faces side by side, one smiling with rosy cheeks under a sun and one frowning under a small grey cloud, cut from soft colored paper', banner: '좋은 느낌, 싫은 느낌' },
      },
    }),
    FEEL({
      id: 'saf-violence.e12.good-bad-feeling.intro.body-signal', type: 'intro', title: '싫을 때 몸이 느끼는 곳 짚기',
      method: '싫을 때 몸이 느끼는 곳 짚기', tool: 'body', minutes: 6,
      levels: { easy: '교사가 그림 속 친구의 가슴 한 곳만 짚어 보이고 함께 따라 짚는다.', base: '시연에서 가슴과 배 두 곳이 골라지는 것을 보고 이름을 따라 말한다.', challenge: '두 곳을 본 뒤 자기 몸의 같은 곳을 손으로 짚어 본다.' },
      intro: {
        teacher: '"그림 속 친구가 싫은 느낌이 들었대요. 가슴이 쿵, 배가 꽉 했대요. 어디일까요?" 시연 단추로 종이 몸의 가슴과 배가 골라지는 모습을 보여 준다. 학생에게 자기 일을 말하게 하지 않고, 그림 속 친구의 몸으로만 이야기한다. "배가 아프면 밥을 먹어요"라는 말이 나오면 "싫은 느낌이 들 때도 배가 꽉 할 수 있어요. 그럴 때는 무엇을 할까요?"라고 되묻는다.',
        student: '그림 속 친구처럼 가슴과 배를 내 손으로 살짝 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['가슴', '배', '무릎', '어깨'], names: true }, sequence: [{ parts: ['가슴', '배'] }] },
        art: { draw: 'a paper child with a small worried face, a tiny paper heart drum beating on its chest and a curly knot shape on its tummy, standing beside a kind teacher', banner: '내 몸이 보내는 신호' },
      },
      notes: '학생 자신의 싫었던 일을 묻지 않는다. 몸 신호는 그림 속 친구의 것으로만 다룬다.',
    }),
    FEEL({
      id: 'saf-violence.e12.good-bad-feeling.activity.feeling-sort', type: 'activity', title: '좋은 느낌·싫은 느낌 나누기',
      method: '좋은 느낌·싫은 느낌 장면 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 바로 되돌아온다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "그만해도 간지럼"처럼 같은 행동이 싫은 느낌이 되는 카드 2장이 섞인다.' },
      activity: {
        title: '느낌 장면 두 칸에 나누기', tool: 'mindmap',
        teacher: '"이 장면에서 그림 속 친구는 좋은 느낌일까요, 싫은 느낌일까요?" 카드를 놓을 때마다 반 전체가 얼굴로 그 느낌을 지어 본다. "간지럼은 재미있으니까 좋은 느낌이에요"라는 학생에게 "친구가 그만하라고 했는데도 계속하면 어떨까요?"라고 묻는다. 같은 간지럼·안기도 싫다고 했는데 계속하면 싫은 느낌이 되고, 그때는 싫다고 말해도 된다는 점을 짚는다.',
        task: '장면 카드를 좋은 느낌·싫은 느낌으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(GOODBAD, '집에서 생긴 일을 나누어요.', '집에서', ['엄마가 안아 줌', '아빠와 손잡기', '할머니 토닥'], ['세게 꼬집기', '발로 차기', '큰 소리 겁주기'], ['싫은데 계속 안기', '그만해도 간지럼'], 0.1),
          SORT2(GOODBAD, '친구와 생긴 일을 나누어요.', '친구와', ['하이파이브', '같이 그네', '함께 웃기'], ['밀치기', '발 걸기', '놀리며 웃기'], ['싫다는데 어깨동무', '억지 팔짱'], 0.15),
          SORT2(GOODBAD, '몸에 닿는 손길을 나누어요.', '손길', ['엄마와 진찰', '안아도 돼? 묻기', '손 씻겨 주기'], ['몰래 만지기', '세게 잡아끌기', '옷 들추기'], ['싫은데 쓰다듬기', '억지로 뽀뽀'], 0.2, { conclude: '싫은 느낌이 들면 친한 사람이어도 "싫어요"라고 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋은 느낌 ○, 싫은 느낌 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['엄마가 안아 줌', ''], ['세게 꼬집기', ''], ['하이파이브', ''], ['그만해도 간지럼', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 느낌에 ○ 해요.', options: ['엄마가 안아 줌', '세게 꼬집기'], answer: '엄마가 안아 줌' }] },
    }),
    FEEL({
      id: 'saf-violence.e12.good-bad-feeling.activity.tickle-choice', type: 'activity', title: '갈림길: 간지럼이 싫을 때',
      method: '간지럼이 싫을 때 갈림길 고르기', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 왜 말했는지 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '싫은 느낌이 들 때 어떻게 할까?', tool: 'dilemma',
        teacher: '"친구가 자꾸 간지럼을 태워요. 나는 싫어요. 어떻게 할까요?" 고르기 전에 반 전체가 손바닥을 앞으로 내밀며 "싫어!"를 한 번 연습한다. "친구가 화낼까 봐 참아요"를 고른 학생에게 "참으면 친구는 내가 싫은 걸 알 수 있을까요?"라고 묻는다. 말했는데도 계속하면 그건 계속한 사람의 잘못이고, 자리를 떠나 어른께 알리는 것이 잘하는 일이라고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('친구가 계속 간지럼을 태워요. 골라요.', { text: '친구가 그만하라는데도 간지럼을 태워요.', motif: 'house', choices: [
            { id: 'endure', text: '꾹 참아요', result: '간지럼이 계속돼서 더 싫어요.', why: '싫으면 참지 않고 말해도 돼요.' },
            { id: 'say', text: '"싫어, 그만해!" 말해요', result: '친구가 멈칫해요.', easyEnding: '친구가 멈추고 "미안해" 했어요.', next: { text: '친구가 "장난인데?" 하며 또 하려 해요.', choices: [
              { id: 'leave', text: '떠나서 선생님께 말해요', result: '선생님이 친구와 이야기해 주셨어요.', ending: '말하고 알려서 마음이 편해졌어요.' },
              { id: 'cry', text: '혼자 울며 참아요', result: '싫은 마음이 그대로예요.', why: '말해도 안 멈추면 떠나서 어른께 알려요.' }] } }] },
          ['say', 'leave'], [{ id: 'mine', text: '내 몸은 내 것이라서요' }, { id: 'angry', text: '친구가 화낼까 봐서요', why: '친구여도 싫으면 말해도 돼요.' }, { id: 'joke', text: '장난은 참아야 해서요', why: '장난이어도 싫으면 멈춰 달라고 해요.' }], 'mine', 0.15),
          DILEMMA('친척 어른이 꽉 안아요. 골라요.', { text: '친척 어른이 꽉 안고 놓아주지 않아요.', motif: 'house', choices: [
            { id: 'hold', text: '싫어도 참아요', result: '숨이 답답하고 싫어요.', why: '좋아하는 어른이어도 싫으면 말해요.' },
            { id: 'say', text: '"싫어요, 놓아 주세요" 말해요', result: '어른이 "귀여워서 그래" 하세요.', easyEnding: '어른이 놓아 주며 "미안해" 하셨어요.', next: { text: '어른이 또 안으려 해요.', choices: [
              { id: 'mom', text: '엄마께 가서 말해요', result: '엄마가 "싫다고 해도 돼" 하셨어요.', ending: '알려서 내 몸을 지켰어요.' },
              { id: 'quiet', text: '아무 말 안 해요', result: '싫은 마음을 아무도 몰라요.', why: '싫은 일이 계속되면 믿는 어른께 알려요.' }] } }] },
          ['say', 'mom'], [{ id: 'feel', text: '내 싫은 느낌도 소중해요' }, { id: 'rude', text: '어른께 버릇없어서요', why: '싫다고 말하는 건 버릇없는 일이 아니에요.' }, { id: 'love', text: '좋아하는 사람이라서요', why: '좋아하는 사람이어도 싫으면 말해요.' }], 'feel', 0.2),
          DILEMMA('형이 자꾸 들어 올려요. 골라요.', { text: '형이 싫다는데도 자꾸 번쩍 들어 올려요.', motif: 'house', choices: [
            { id: 'laugh', text: '웃으며 참아요', result: '형은 내가 좋은 줄 알아요.', why: '웃으며 참으면 싫은 걸 몰라요. 분명하게 말해요.' },
            { id: 'say', text: '"내려 줘, 싫어!" 말해요', result: '형이 "재밌잖아" 해요.', easyEnding: '형이 내려 주고 "알았어" 했어요.', next: { text: '형이 또 들어 올리려 해요.', choices: [
              { id: 'dad', text: '아빠께 알려요', result: '아빠가 형에게 "싫다면 멈춰" 하셨어요.', ending: '알려서 싫은 일이 멈췄어요.' },
              { id: 'hide', text: '숨어서 혼자 울어요', result: '형은 계속 그럴 수 있어요.', why: '혼자 참지 말고 어른께 알려요.' }] } }] },
          ['say', 'dad'], [{ id: 'stop', text: '싫다면 멈춰야 해요' }, { id: 'bro', text: '형이니까 참아요', why: '형이어도 싫다면 멈춰야 해요.' }, { id: 'weak', text: '내가 약해서요', why: '약해서가 아니에요. 싫은 건 싫은 거예요.' }], 'stop', 0.25, { conclude: '싫으면 "싫어요" 말하고, 안 멈추면 떠나서 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '싫은 간지럼, 어떻게 해요?', options: ['"싫어!" 말해요', '꾹 참아요'], answer: '"싫어!" 말해요' }] },
      notes: '싫다고 했는데도 계속한 것은 계속한 사람의 잘못이다. 참은 쪽을 고른 학생을 나무라지 않고 "말하면 더 좋아요"로 이끈다.',
    }),
    FEEL({
      id: 'saf-violence.e12.good-bad-feeling.activity.no-go-tell', type: 'activity', title: '싫어요·떠나요·알려요 따라 하기',
      method: '싫어요·떠나요·알려요 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '동작 카드 2장(싫어요·알려요)의 차례만 맞추고, 역할놀이는 두 번이 되게 맞춘다.', base: '동작 카드 3장의 차례를 맞추고, 짝과 역할을 바꿔 두 번 하게 타이머를 맞춘다.', challenge: '카드 3장을 맞추고, 큰 목소리로 짝과 역할을 바꿔 네 번 하게 맞춘다.' },
      activity: {
        title: '싫어요·떠나요·알려요 역할놀이', tool: 'timer',
        teacher: '"싫은 느낌이 들 때 우리 몸이 할 세 가지가 있어요." 손바닥을 앞으로 내밀며 "싫어요!", 뒤돌아 걷기, 선생님 쪽으로 가서 "선생님, 말할 게 있어요"를 차례로 보인다. 짝 가운데 한 명은 싫은 행동을 하는 역할 대신 "간지럼 태울게" 하고 말만 하게 하고, 몸에는 닿지 않는다. 작은 목소리로 하는 학생에게 "큰 소리는 주변 어른이 듣게 해요. 한 번 더 크게!"라고 말해 준다. 타이머 초는 우리 반 놀이 약속이라고 밝힌다.',
        task: '싫어요·떠나요·알려요 차례를 놓고 역할놀이를 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '역할놀이 전에 점검해요.', toolOptions: { title: '놀이 전 약속', safety: ['몸에는 안 닿기', '말로만 하기', '짝과 거리 두기'] }, target: { safety: true }, difficulty: 0.1 },
          { prompt: '싫을 때 할 일을 차례로 놓아요.', toolOptions: { title: '싫을 때 차례', cards: ['어른께 말하기', '"싫어요!"', '뒤돌아 걷기'] }, target: { order: ['"싫어요!"', '뒤돌아 걷기', '어른께 말하기'] }, difficulty: 0.15,
            hints: ['먼저 말로, 그다음 몸으로 해요.', '자리를 떠난 뒤에 할 일이 있어요.', '"싫어요!" → 뒤돌아 걷기 → 어른께 말하기예요.'],
            levels: { easy: { prompt: '싫을 때 할 일을 놓아요(2장).', toolOptions: { cards: ['어른께 말하기', '"싫어요!"'] }, target: { order: ['"싫어요!"', '어른께 말하기'] } } } },
          { prompt: '역할 바꿔 두 번이 되게 맞춰요.', toolOptions: { title: '역할놀이 횟수', plan: { work: 15, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.2,
            hints: ['한 사람이 한 번씩 하면 몇 번일까요?', '번 칸이 역할놀이 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { challenge: { prompt: '역할 바꿔 네 번이 되게 맞춰요.', target: { plan: { rounds: 4 } } } },
            conclude: '싫은 느낌이 들면 "싫어요!" 말하고, 떠나고, 어른께 알려요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '싫어요, 떠나요, ___!', answer: '알려요' }] },
      notes: '역할놀이에서 몸에 닿는 행동은 하지 않는다. 싫은 행동은 말로만 정한다. 타이머 초 값은 놀이 진행용 우리 반 약속이다.',
    }),
    FEEL({
      id: 'saf-violence.e12.good-bad-feeling.activity.bad-secret', type: 'activity', title: '기분 나쁜 비밀은 알려요',
      method: '기분 나쁜 비밀 그림 이야기', tool: 'story', minutes: 13,
      levels: { easy: '1번은 장면 3장 가운데 알리는 장면 하나만 고르고, 2번은 카드 3장 가운데 알릴 비밀을 고른다.', base: '1번은 곰돌이 이야기 4장면을 차례대로 놓고, 2번은 카드 4장 가운데 알릴 비밀을 모두 고른다.', challenge: '2번에서 비밀 카드 4장을 "알려요"·"지켜도 돼요" 두 칸에 나누어 깜짝 선물 비밀과 견준다.' },
      activity: {
        title: '곰돌이의 기분 나쁜 비밀', tool: 'story',
        teacher: '"곰돌이가 \'우리만 비밀이야\'라는 말을 들었는데 기분이 나빴대요. 곰돌이는 어떻게 했을까요?" 그림 이야기를 읽어 줄 때 비밀의 내용은 말하지 않고 곰돌이의 기분만 이야기한다. "비밀은 꼭 지켜야 해요"라는 학생에게 "깜짝 생일 선물 비밀은 기분이 어때요? 곰돌이 비밀은요?"라고 견주어 묻는다. 기분 나쁜 비밀, 무서운 비밀은 지키지 않고 알려도 되고, 알린 곰돌이는 잘한 것이라고 짚는다.',
        task: '곰돌이 이야기를 듣고 장면과 비밀을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '곰돌이 이야기를 차례로 놓아요.', toolOptions: { slots: ['처음', '다음', '그다음', '끝'], cards: [C('tell', '선생님께 말해요'), C('secret', '우리만 비밀이야'), C('thanks', '말해 줘서 고마워'), C('bad', '기분이 나빠요')] }, target: { order: ['secret', 'bad', 'tell', 'thanks'] }, difficulty: 0.15,
            hints: ['비밀이라는 말을 들은 장면이 먼저예요.', '기분이 나쁜 뒤에 곰돌이가 한 일을 찾아요.', '비밀 → 기분 나빠요 → 선생님께 → 고마워예요.'],
            levels: { easy: { prompt: '알리는 장면을 하나 골라요.', toolOptions: { mode: 'pick', basket: '알리는 장면', cards: [C('hide', '혼자 숨겨요'), C('tell', '선생님께 말해요'), C('forget', '잊으려 해요')] }, target: { pick: ['tell'] } } } },
          { prompt: '알려야 할 비밀을 골라요.', toolOptions: { mode: 'pick', basket: '알려요', cards: [C('bad', '기분 나쁜 비밀'), C('gift', '깜짝 선물 비밀'), C('scary', '무서운 비밀'), C('party', '생일 파티 비밀')] }, target: { pick: ['bad', 'scary'] }, difficulty: 0.2,
            hints: ['비밀을 생각하면 어떤 기분인지 떠올려요.', '기분이 좋아지는 비밀은 지켜도 돼요.', '기분 나쁜 비밀과 무서운 비밀을 골라요.'],
            levels: {
              easy: { prompt: '알려야 할 비밀을 하나 골라요.', toolOptions: { cards: [C('bad', '기분 나쁜 비밀'), C('gift', '깜짝 선물 비밀'), C('party', '생일 파티 비밀')] }, target: { pick: ['bad'] } },
              challenge: { prompt: '비밀을 두 칸에 나누어요.', toolOptions: { mode: 'sort', slots: ['알려요', '지켜도 돼요'] }, target: { sort: { 알려요: ['bad', 'scary'], '지켜도 돼요': ['gift', 'party'] } } },
            } },
          { prompt: '곰돌이에게 해 줄 말을 골라요.', toolOptions: { mode: 'pick', basket: '해 줄 말', cards: [C('thank', '말해 줘서 고마워'), C('why', '왜 이제 말해?'), C('notyou', '네 잘못이 아니야')] }, target: { pick: ['thank', 'notyou'] }, difficulty: 0.2,
            conclude: '기분 나쁜 비밀은 지키지 않고 믿는 어른께 알려요. 알린 것은 잘한 일이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '어떤 비밀을 알려요?', options: ['기분 나쁜 비밀', '깜짝 선물 비밀'], answer: '기분 나쁜 비밀' }] },
      notes: '비밀의 내용은 그리지도 말하지도 않는다(곰돌이의 기분만). 수업 뒤 따로 말하러 오는 학생은 캐묻지 않고 "말해 줘서 고마워"로 받는다.',
    }),
    FEEL({
      id: 'saf-violence.e12.good-bad-feeling.wrap.say-no', type: 'wrap', title: '싫어요 말 카드 따라 말하기',
      method: '싫어요 말 카드 따라 말하기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 말 카드 두 장(싫어요!·하지 마!)을 먼저 읽고 함께 따라 말한다.', base: '말 카드 4장 가운데 싫을 때 하는 말 세 장을 담고 따라 말한다.', challenge: '담은 말 가운데 하나를 골라 단호한 목소리로 짝에게 말해 본다.' },
      wrap: {
        teacher: '"싫은 느낌이 들 때 하는 말을 바구니에 담아 볼까요?" 카드를 담을 때마다 반 전체가 손바닥을 앞으로 내밀며 따라 말한다. "참을게요"를 담은 학생에게 "참으면 싫은 마음을 누가 알아줄까요?"라고 묻는다. 출구 2번에서 "참아요"를 고른 학생에게 "친한 사람이어도 싫으면 말해도 돼요. 말하는 건 잘하는 일이에요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '싫을 때 하는 말', cards: ['싫어요!', '참을게요', '하지 마!', '알릴 거야'] }, prompt: '싫을 때 하는 말을 담아요.', target: { pick: ['싫어요!', '하지 마!', '알릴 거야'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친한 사람이 해도 싫으면?', options: ['참아요', '싫다고 말해요'], answer: 1, difficulty: 0.1, explain: '친한 사람이어도 싫으면 "싫어요"라고 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '싫어요! 하지 마! 알릴 거야!',
        items: [
          { type: 'blank', prompt: '싫을 때 하는 말을 써요.', text: '___! 하지 마!', answer: '싫어요' },
          { type: 'draw', prompt: '손바닥을 내밀며 "싫어요!" 하는 모습을 그려요.' },
        ],
        easy: { note: '"싫어요!"는 크고 분명하게 말해요.', items: [{ type: 'draw', prompt: '앞으로 내민 내 손바닥을 그려요.' }] },
      },
    }),
    FEEL({
      id: 'saf-violence.e12.good-bad-feeling.wrap.self-check', type: 'wrap', title: '오늘 느낌 약속 표시',
      method: '오늘 약속 스스로 표시', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 약속 칸을 하나씩 읽어 주고 맞는 약속에 함께 표시한다.', base: '약속 4개 가운데 지킬 약속에만 스스로 표시한다.', challenge: '표시한 뒤 "싫어도 참아요"가 왜 약속이 아닌지 짝에게 한마디 한다.' },
      wrap: {
        teacher: '"오늘 배운 약속 가운데 나는 무엇을 지킬까요?" 약속 칸을 함께 읽고, 지킬 약속에만 표시하게 한다. "싫어도 참아요"에 표시한 학생에게 "참으면 싫은 일이 멈출까요? 오늘 배운 세 가지를 떠올려 봐요"라고 묻는다. 출구 2번에서 "꼭 지켜요"를 고른 학생에게 "기분 나쁜 비밀은 알려도 돼요. 그건 약속을 어긴 게 아니라 나를 지킨 거예요"라고 말해 준다.',
        exitTicket: [
          PROMISE('오늘 약속', [C('say', '싫으면 말해요'), C('tell', '나쁜 비밀은 알려요'), C('leave', '떠나서 어른께')], C('endure', '싫어도 참아요')),
          { type: 'choice', prompt: '기분 나쁜 비밀은요?', options: ['꼭 지켜요', '어른께 알려요'], answer: 1, difficulty: 0.1, explain: '기분 나쁜 비밀은 믿는 어른께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '좋은 느낌, 싫은 느낌 약속',
        items: [
          { type: 'table', prompt: '맞으면 ○, 틀리면 ×를 써요.', columns: ['약속', '○ / ×'], cells: [['싫으면 "싫어요" 말해요', ''], ['기분 나쁜 비밀은 지켜요', ''], ['떠나서 어른께 알려요', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '믿는 어른께 말하는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 때리지 않고 말로 마음 전하기
  const KIND = MOD('saf-violence.e12.kind-words', [1]);
  const OKNO = ['좋아요', '안돼요'];
  // 장면과 기분 잇기(emotion match): 기본 장면 3·기분 4(속상한 두 장면은 화남·속상함 어느 쪽이든), 쉬움 장면 2·기분 2, 도전 두 기분이 섞인 장면(sort)
  const FACE = (prompt, sl, pos, trap, mix, d, more) => {
    const slots = sl.map(([id, label]) => ({ id, label }));
    return {
      prompt, toolOptions: { mode: 'match', slots, cards: ['화남', pos, '속상함', trap] }, target: { match: { [sl[0][0]]: ['화남', '속상함'], [sl[1][0]]: ['속상함', '화남'], [sl[2][0]]: pos } }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(두 장면).`, toolOptions: { slots: [slots[0], slots[2]], cards: ['화남', pos] }, target: { match: { [sl[0][0]]: '화남', [sl[2][0]]: pos } } },
        challenge: { prompt: `${cut(prompt)}(섞인 기분).`, toolOptions: { mode: 'sort', slots: [slots[0], slots[1]], cards: mix.cards }, target: { sort: mix.sort } },
      },
      ...more,
    };
  };
  const T_KIND = [
    KIND({
      id: 'saf-violence.e12.kind-words.intro.block-story', type: 'intro', title: '블록 뺏긴 다람쥐 이야기',
      method: '블록 뺏긴 그림 이야기 듣기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 다음 장면 두 개(밀쳐요·말해요)만 보여 주고 어느 쪽이 좋을지 함께 고른다.', base: '다음 장면 세 개 가운데 시연이 고르는 장면을 보고 까닭을 말한다.', challenge: '장면을 고른 뒤 그 장면 속 다람쥐의 기분 얼굴을 지어 본다.' },
      intro: {
        teacher: '"다람쥐가 열심히 쌓던 블록을 친구가 가져갔어요. 다음에 어떻게 될까요?" 그림을 보여 주고 두세 명의 대답을 듣는다(기다릴 반응: "화나요", "울어요"). 시연 단추로 "돌려줘 말해요" 장면이 바구니에 담기는 모습을 보여 준다. "뺏겼으니까 밀어도 돼요"라는 말이 나오면 "밀면 친구가 넘어져 다칠 수 있어요. 화난 마음은 괜찮아요. 그 마음을 무엇으로 전할까요?"라고 되묻는다.',
        student: '다람쥐라면 다음에 어떻게 할지 짝에게 말해 보아요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '다음 장면', cards: [C('push', '블록을 밀쳐요'), C('say', '"돌려줘" 말해요'), C('hit', '울며 때려요')], shuffle: false }, sequence: [{ pick: ['say'] }] },
        art: { draw: 'a paper squirrel looking upset beside a half-built tower of paper blocks while another small animal holds one block, a teacher bear watching kindly', banner: '마음을 말로 전해요' },
      },
    }),
    KIND({
      id: 'saf-violence.e12.kind-words.intro.picture-graph', type: 'intro', title: '친구가 좋아하는 말 그림그래프',
      method: '친구가 좋아하는 말 그림그래프 보기', tool: 'chart', minutes: 6,
      levels: { easy: '교사가 두 줄(고마워·미안해)만 손가락으로 세며 어느 쪽이 많은지 함께 본다.', base: '세 줄 가운데 별이 가장 많은 말을 시연과 함께 찾는다.', challenge: '가장 많은 말을 찾은 뒤 가장 적은 말도 찾아 말한다.' },
      intro: {
        teacher: '"우리 반 친구들이 듣고 싶은 말에 별을 붙였어요. 이 그래프는 수업을 위해 만든 가상의 우리 반이에요." 별을 손가락으로 함께 세고, 시연 단추로 가장 많은 말이 골라지는 모습을 보여 준다. "\'미안해\'는 지는 말이에요"라는 말이 나오면 "미안하다고 말하면 친구 마음이 어떻게 될까요? 용기 있는 말이에요"라고 되묻는다. 오늘은 화가 날 때 때리지 않고 말로 마음을 전하는 법을 배운다고 밝힌다.',
        student: '별이 가장 많은 말을 찾아 다 같이 소리 내어 말해 보아요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '친구가 듣고 싶은 말(가상)', unit: '명', data: [['고마워', 5], ['같이 하자', 4], ['미안해', 2]], icons: [{ value: 1, name: '1명' }], icon: 'star', question: '가장 많은 말은?', choices: ['고마워', '같이 하자', '미안해'] }, sequence: [{ pick: 0 }] },
        art: { draw: 'paper speech bubbles with stars pinned on them on a classroom board, paper children pointing at the tallest row of stars', banner: '친구가 좋아하는 말' },
      },
      notes: '그래프 수는 수업용 가상 자료다. 실제 반에서 붙임딱지로 조사하면 그 수로 바꿔 쓴다.',
    }),
    KIND({
      id: 'saf-violence.e12.kind-words.activity.angry-face', type: 'activity', title: '화날 때 마음 이름 붙이기',
      method: '화날 때 얼굴 고르고 마음 이름 붙이기', tool: 'emotion', minutes: 14,
      levels: { easy: '장면 2개에 기분 카드 2장을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3개에 기분 카드 4장 가운데 골라 잇는다(속상한 장면은 화남·속상함 어느 쪽도 맞다).', challenge: '한 장면에 두 기분을 함께 놓는다(화나고 놀랐어요, 속상하고 슬퍼요).' },
      activity: {
        title: '화날 때 마음 이름 붙이기', tool: 'emotion',
        teacher: '"이럴 때 그림 속 친구 마음은 어떨까요?" 카드를 놓기 전에 반 전체가 그 기분 얼굴을 지어 본다. "화나는 건 나쁜 거예요"라는 학생에게 "화나는 마음은 누구에게나 생겨요. 마음은 괜찮아요. 때리거나 미는 행동이 안 되는 거예요"라고 말해 준다. 마음에 이름을 붙이면 말로 전하기 쉬워진다는 점을 짚는다.',
        task: '장면마다 그림 속 친구의 기분을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          FACE('장면과 친구 기분을 이어요.', [['push', '줄 서다 밀렸어요'], ['tear', '그림이 찢어졌어요'], ['back', '블록을 돌려받음']], '기쁨', '무서움',
            { cards: ['화남', '놀람', '속상함', '슬픔', '기쁨'], sort: { push: ['화남', '놀람'], tear: ['속상함', '슬픔'] } }, 0.1),
          FACE('놀이터 장면과 기분을 이어요.', [['tease', '친구가 놀렸어요'], ['turn', '차례를 뺏겼어요'], ['share', '같이 하자고 함']], '신남', '졸림',
            { cards: ['화남', '속상함', '슬픔', '놀람', '신남'], sort: { tease: ['속상함', '슬픔'], turn: ['화남', '놀람'] } }, 0.15),
          FACE('교실 장면과 기분을 이어요.', [['bump', '친구가 밀쳤어요'], ['fall', '모래성이 무너짐'], ['sorry', '"미안해" 들었어요']], '편안함', '배고픔',
            { cards: ['화남', '놀람', '속상함', '슬픔', '편안함'], sort: { bump: ['화남', '놀람'], fall: ['속상함', '슬픔'] } }, 0.2, { conclude: '화나는 마음은 괜찮아요. 마음에 이름을 붙이고 말로 전해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '화나는 마음은 어때요?', options: ['누구나 생겨요', '나쁜 마음이에요'], answer: '누구나 생겨요' }] },
      notes: '기분 카드는 그림 속 친구의 것이다. 학생 자신이 화났던 일을 꺼내게 하지 않는다. 도전의 섞인 기분은 정답이 하나만은 아니어서 놓은 까닭을 들어 준다.',
    }),
    KIND({
      id: 'saf-violence.e12.kind-words.activity.stop-breathe', type: 'activity', title: '멈추고·숨 쉬고·말해요',
      method: '멈추고·숨 쉬고·말해요 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '카드 2장(멈춰요·숨쉬기)의 차례를 맞추고 풍선 숨쉬기 3번을 맞춘다.', base: '카드 3장의 차례를 맞추고 타이머에 맞춰 풍선 숨쉬기 3번을 따라 한다.', challenge: '줄에서 밀린 장면에 "선생님께 알려요"까지 4장의 차례를 맞추고, 짝이 장면을 말하면 차례대로 대답한다.' },
      activity: {
        title: '멈추고 숨 쉬고 말하기', tool: 'timer',
        teacher: '"화가 날 때 손이 먼저 나가지 않게 하는 세 가지 차례가 있어요." 손바닥을 앞으로 "멈춰!", 풍선을 불듯 볼을 부풀려 천천히 숨 내쉬기, "나 속상해"라고 말하기를 차례로 보인다. 타이머 시작 단추를 누르면 반 전체가 운동 칸에 들이쉬고 쉬기 칸에 내쉰다(초 값은 우리 반 약속). "숨 쉬는 동안 친구가 도망가요"라는 학생에게 "숨을 쉬고 나면 손 대신 무엇이 나올까요?"라고 묻는다.',
        task: '카드를 차례대로 놓고 숨쉬기 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '화날 때 할 일을 차례로 놓아요.', toolOptions: { title: '화날 때 차례', cards: ['속상해 말하기', '멈춰요', '풍선 숨쉬기'] }, target: { order: ['멈춰요', '풍선 숨쉬기', '속상해 말하기'] }, difficulty: 0.1,
            hints: ['손이 나가기 전에 먼저 할 일을 떠올려요.', '숨을 쉰 뒤에 말해요.', '멈춰요 → 풍선 숨쉬기 → 속상해 말하기예요.'],
            levels: { easy: { prompt: '화날 때 할 일을 놓아요(2장).', toolOptions: { cards: ['풍선 숨쉬기', '멈춰요'] }, target: { order: ['멈춰요', '풍선 숨쉬기'] } } } },
          { prompt: '풍선 숨쉬기 3번이 되게 맞춰요.', toolOptions: { title: '풍선 숨쉬기', plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['들이쉬고 내쉬면 한 번이에요.', '번 칸이 숨쉬기 횟수예요.', '번 칸을 3에 맞춰요.'] },
          { prompt: '줄에서 밀렸어요. 차례로 놓아요.', toolOptions: { title: '줄에서 밀렸을 때', cards: ['"밀지 마" 말해요', '멈춰요', '숨 쉬어요'] }, target: { order: ['멈춰요', '숨 쉬어요', '"밀지 마" 말해요'] }, difficulty: 0.2,
            levels: { challenge: { prompt: '줄에서 밀렸어요. 4장을 놓아요.', toolOptions: { cards: ['선생님께 알려요', '"밀지 마" 말해요', '멈춰요', '숨 쉬어요'] }, target: { order: ['멈춰요', '숨 쉬어요', '"밀지 마" 말해요', '선생님께 알려요'] } } },
            conclude: '화가 나면 멈추고, 숨 쉬고, 말로 마음을 전해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '멈추고, ___ 쉬고, 말해요.', answer: '숨' }] },
      notes: '타이머 초 값은 숨쉬기 연습용 우리 반 약속이다. 숨을 오래 참게 하지 않는다.',
    }),
    KIND({
      id: 'saf-violence.e12.kind-words.activity.ok-no', type: 'activity', title: '좋아요·안돼요 행동 나누기',
      method: '좋아요·안돼요 행동 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 바로 되돌아온다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "똑같이 때리기"처럼 헷갈리는 함정 카드 2장이 섞인다.' },
      activity: {
        title: '화날 때 행동 두 칸에 나누기', tool: 'mindmap',
        teacher: '"이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 반 전체가 엄지를 위(좋아요)나 아래(안돼요)로 먼저 보인다. "똑같이 때리기"를 "먼저 했으니까 좋아요"에 두는 학생에게 "똑같이 때리면 아픈 친구가 둘이 돼요. 그럼 누가 도와줄까요?"라고 묻는다. 먼저 했더라도 똑같이 갚지 않고 말로 하거나 어른께 알린다는 점을 짚는다.',
        task: '행동 카드를 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '화날 때 하는 행동을 나누어요.', '화날 때', ['멈춰요', '숨 쉬어요', '말로 해요'], ['밀기', '때리기', '물건 던지기'], ['똑같이 때리기', '몰래 꼬집기'], 0.1),
          SORT2(OKNO, '친구가 놀릴 때 행동을 나누어요.', '놀릴 때', ['"그만해" 말하기', '선생님께 알리기', '자리 옮기기'], ['발로 차기', '같이 욕하기', '침 뱉기'], ['더 세게 놀리기', '물건 숨기기'], 0.15),
          SORT2(OKNO, '놀이 차례에서 행동을 나누어요.', '놀이 차례', ['차례 기다리기', '양보하기', '가위바위보'], ['새치기', '밀치기', '빼앗기'], ['먼저 했으니 밀기', '울며 때리기'], 0.2, { conclude: '먼저 했더라도 똑같이 갚지 않아요. 말로 하거나 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['말로 해요', ''], ['똑같이 때리기', ''], ['선생님께 알리기', ''], ['밀치기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 행동에 ○ 해요.', options: ['말로 해요', '밀기'], answer: '말로 해요' }] },
    }),
    KIND({
      id: 'saf-violence.e12.kind-words.activity.drawing-choice', type: 'activity', title: '갈림길: 그림을 망쳤어요',
      method: '그림을 망쳤을 때 갈림길', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 친구 마음을 생각한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '속상할 때 어떻게 할까?', tool: 'dilemma',
        teacher: '"친구가 실수로 내 그림에 물감을 쏟았어요. 정말 속상해요. 어떻게 할까요?" 고르기 전에 반 전체가 "멈춰, 후—" 하고 숨을 한 번 내쉰다. "밀친다"를 고른 학생에게 "밀면 친구는 어떻게 될까요? 내 그림은 다시 깨끗해질까요?"라고 묻는다. 다른 길도 끝까지 가 보며, 말로 하면 마음이 풀리고 둘 다 다치지 않는다는 점을 견주게 한다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('그림에 물감이 쏟아졌어요. 골라요.', { text: '친구가 내 그림에 물감을 쏟았어요.', motif: 'flower', choices: [
            { id: 'push', text: '친구를 밀쳐요', result: '친구가 넘어져 울어요.', why: '화나도 밀면 친구 몸이 다쳐요.' },
            { id: 'say', text: '"속상해" 말로 해요', result: '친구가 "어, 미안해" 해요.', easyEnding: '친구가 사과하고 같이 닦았어요.', next: { text: '친구가 "같이 닦을까?" 해요.', choices: [
              { id: 'clean', text: '같이 닦아요', result: '그림을 새로 그리기로 했어요.', ending: '말로 해서 둘 다 마음이 풀렸어요.' },
              { id: 'yell', text: '"저리 가!" 소리쳐요', result: '친구도 속상해서 가 버렸어요.', why: '사과하는 친구 마음도 받아 줘요.' }] } }] },
          ['say', 'clean'], [{ id: 'body', text: '친구 몸도 소중해서요' }, { id: 'even', text: '먼저 했으니 갚아야 해서요', why: '먼저 했어도 똑같이 하면 안 돼요.' }, { id: 'win', text: '이기고 싶어서요', why: '이기는 것보다 둘 다 안 다치는 게 먼저예요.' }], 'body', 0.15),
          DILEMMA('블록 탑이 무너졌어요. 골라요.', { text: '친구가 내 블록 탑을 무너뜨렸어요.', motif: 'house', choices: [
            { id: 'kick', text: '친구 블록도 차요', result: '둘 다 울고 블록이 흩어졌어요.', why: '똑같이 하면 속상한 친구가 둘이 돼요.' },
            { id: 'stop', text: '멈추고 숨 쉬어요', result: '화가 조금 가라앉았어요.', easyEnding: '숨 쉬고 "속상해"라고 말했어요.', next: { text: '친구가 웃고 있어요. 이제 어떻게 해요?', choices: [
              { id: 'say', text: '"속상해, 그러지 마" 말해요', result: '친구가 "미안해" 했어요.', ending: '말로 마음을 전해서 친구가 알았어요.' },
              { id: 'hit', text: '때려 줘요', result: '친구가 아파서 울어요.', why: '때리면 친구 몸이 다쳐요. 말로 해요.' }] } }] },
          ['stop', 'say'], [{ id: 'calm', text: '숨 쉬면 화가 가라앉아요' }, { id: 'laugh', text: '친구가 웃어서 때려요', why: '친구가 웃어도 때리지 않고 말로 해요.' }, { id: 'same', text: '똑같이 해야 공평해요', why: '똑같이 하는 건 공평한 게 아니라 둘 다 아픈 거예요.' }], 'calm', 0.2),
          DILEMMA('친구가 내 발을 밟았어요. 골라요.', { text: '줄 서다 친구가 내 발을 밟았어요.', motif: 'house', choices: [
            { id: 'step', text: '나도 밟아요', result: '둘 다 발이 아파요.', why: '똑같이 하면 둘 다 아파요.' },
            { id: 'tell', text: '"아야, 조심해" 말해요', result: '친구가 깜짝 놀라 돌아봐요.', easyEnding: '친구가 "미안해" 했어요.', next: { text: '친구가 "몰랐어, 미안해" 해요.', choices: [
              { id: 'ok', text: '"괜찮아" 해요', result: '둘이 다시 줄을 섰어요.', ending: '말로 해서 금방 화해했어요.' },
              { id: 'push', text: '그래도 밀어요', result: '친구가 넘어질 뻔했어요.', why: '사과를 들었으면 밀지 않아요.' }] } }] },
          ['tell', 'ok'], [{ id: 'mistake', text: '모르고 그럴 수 있어요' }, { id: 'pay', text: '아프면 갚아야 해요', why: '아파도 갚지 않고 말로 해요.' }, { id: 'mad', text: '화나면 밀어도 돼요', why: '화나는 마음은 괜찮지만 미는 건 안 돼요.' }], 'mistake', 0.25, { conclude: '화가 나도 손 대신 말로 마음을 전해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '그림을 망쳐 속상해요. 어떻게 해요?', options: ['말로 해요', '밀쳐요'], answer: '말로 해요' }] },
    }),
    KIND({
      id: 'saf-violence.e12.kind-words.wrap.kind-words', type: 'wrap', title: '마음 전하는 말 카드',
      method: '마음 전하는 말 카드 따라 읽기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 장면 두 개만 읽어 주고 말 카드를 함께 잇는다.', base: '장면 세 개에 알맞은 말 카드를 스스로 잇고 따라 읽는다.', challenge: '이은 말 가운데 하나를 짝에게 직접 말해 준다.' },
      wrap: {
        teacher: '"이럴 때는 어떤 말로 마음을 전할까요?" 장면마다 말 카드를 이은 뒤 반 전체가 다정한 목소리로 따라 읽는다. "미안해"를 넘어진 친구 장면에 놓은 학생에게 "내가 밀지 않았다면 무엇이라고 물어봐 줄까요?"라고 묻는다. 출구 2번에서 "때려요"를 고른 학생에게 "화가 나면 먼저 멈추고 숨 쉬어요. 그다음 말로 해요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { words: [{ en: '미안해', ko: '친구 발을 밟았어요' }, { en: '괜찮아?', ko: '친구가 넘어졌어요' }, { en: '그만해 줘', ko: '친구가 자꾸 밀어요' }] }, prompt: '장면에 맞는 말을 이어요.', target: { match: { 미안해: '미안해', '괜찮아?': '괜찮아?', '그만해 줘': '그만해 줘' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '화가 날 때 먼저 할 일은?', options: ['때려요', '멈추고 숨 쉬어요'], answer: 1, difficulty: 0.1, explain: '먼저 멈추고 숨 쉰 뒤 말로 마음을 전해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '마음을 전하는 말',
        items: [
          { type: 'blank', prompt: '친구 발을 밟았을 때 하는 말을 써요.', text: '___. 괜찮아?', answer: '미안해' },
          { type: 'draw', prompt: '친구에게 "괜찮아?" 하고 묻는 모습을 그려요.' },
        ],
        easy: { note: '"미안해", "괜찮아?", "그만해 줘"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '웃으며 말하는 내 얼굴을 그려요.' }] },
      },
    }),
    KIND({
      id: 'saf-violence.e12.kind-words.wrap.class-promise', type: 'wrap', title: '우리 반 사이좋은 약속',
      method: '우리 반 사이좋은 약속 표시', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 약속 칸을 하나씩 읽어 주고 함께 표시한다.', base: '약속 4개 가운데 지킬 약속에만 스스로 표시한다.', challenge: '표시한 뒤 "똑같이 갚아요"가 왜 약속이 아닌지 한마디 한다.' },
      wrap: {
        teacher: '"우리 반이 사이좋게 지내려면 어떤 약속을 지킬까요?" 약속 칸을 함께 읽고, 지킬 약속에만 표시하게 한다. "똑같이 갚아요"에 표시한 학생에게 "똑같이 갚으면 다툼이 끝날까요, 더 커질까요?"라고 묻는다. 출구 2번에서 "똑같이 때려요"를 고른 학생에게 먼저 맞았더라도 선생님께 알리면 선생님이 도와준다고 말해 준다. 마지막에 "손은 내 몸에, 마음은 말로!"를 다 같이 외친다.',
        exitTicket: [
          PROMISE('우리 반 약속', [C('hands', '손은 내 몸에'), C('words', '말로 해요'), C('help', '도움 청해요')], C('payback', '똑같이 갚아요')),
          { type: 'choice', prompt: '친구가 먼저 때리면요?', options: ['똑같이 때려요', '선생님께 알려요'], answer: 1, difficulty: 0.1, explain: '먼저 맞았어도 똑같이 하지 않고 선생님께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '손은 내 몸에, 마음은 말로',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['손은 내 몸에 둬요', '화나면 말로 해요', '힘들면 도움을 청해요'] },
          { type: 'blank', prompt: '구호를 따라 써요.', text: '손은 내 몸에, 마음은 ___!', answer: '말로' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 나를 도와줄 어른
  const HELP = MOD('saf-violence.e12.helper-adults', [1]);
  const SCHOOL = [{ name: '교실', icon: 'school', at: [0, 0] }, { name: '보건실', icon: 'hospital', at: [3, 0] }, { name: '교무실', icon: 'office', at: [0, 2] }, { name: '운동장', icon: 'park', at: [3, 2] }];
  const SCHOOL_MORE = [{ name: '도서관', icon: 'library', at: [1, 1] }, { name: '급식실', icon: 'dot', at: [2, 1] }];
  const T_HELP = [
    HELP({
      id: 'saf-violence.e12.helper-adults.intro.helper-cards', type: 'intro', title: '도와주는 어른 카드',
      method: '도와주는 어른 그림 카드 이름 듣기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 어른 카드 세 장(담임·보건 선생님·가족)만 읽어 주고 함께 이름을 따라 말한다.', base: '어른 카드 네 장의 이름을 듣고, 시연에서 하는 일과 이어지는 모습을 본다.', challenge: '네 장을 본 뒤 "이 어른은 무엇을 도와줄까요?"에 한마디씩 답한다.' },
      intro: {
        teacher: '"무섭거나 아픈 일이 생기면 누가 도와줄까요?" 어른 카드를 하나씩 읽어 주고 시연 단추로 카드가 하는 일과 이어지는 모습을 보여 준다. "어른한테 말하면 혼나요"라는 말이 나오면 "선생님은 말해 주는 어린이가 고마워요. 도와주려고 있는 사람이에요"라고 되묻듯 답한다. 경찰관 카드에서는 급하고 위험할 때 112라는 것만 짚고 장난 전화는 하지 않는다고 말한다.',
        student: '나를 도와줄 어른 이름을 선생님을 따라 말해 보아요.',
        demo: { tool: 'wordcards', options: { words: [{ en: '담임 선생님', ko: '교실에서 도와줘요' }, { en: '보건 선생님', ko: '다쳤을 때 도와줘요' }, { en: '경찰관', ko: '급할 때 112' }, { en: '가족', ko: '집에서 도와줘요' }] }, sequence: [{ match: { '담임 선생님': '담임 선생님', '보건 선생님': '보건 선생님', 경찰관: '경찰관', 가족: '가족' } }] },
        art: { draw: 'a row of friendly paper adults — a teacher, a school nurse, a police officer and a family — each opening their arms toward a small paper child', banner: '나를 도와줄 어른' },
      },
    }),
    HELP({
      id: 'saf-violence.e12.helper-adults.intro.help-shout', type: 'intro', title: '"도와주세요" 구호',
      method: "'도와주세요' 구호 따라 하기", tool: 'timer', minutes: 6,
      levels: { easy: '교사가 "도와주세요!" 한 동작만 크게 외쳐 보이고 함께 따라 한다.', base: '손 들기·"도와주세요!" 두 동작의 차례를 따라 한다.', challenge: '손 들기·"도와주세요!"·어른 쪽으로 걷기 세 동작을 차례대로 한다.' },
      intro: {
        teacher: '"손을 번쩍 들고(손 들기), 크게 \'도와주세요!\', 그리고 어른 쪽으로 걸어가요." 시연 단추로 카드가 차례대로 놓이는 모습을 보이고 반 전체가 세 번 따라 한다. 작은 소리로 하는 학생에게 "큰 소리는 멀리 있는 어른도 듣게 해요"라고 말해 준다. "작은 일은 혼자 참아요"라는 말이 나오면 "아프거나 무서운 일에 작은 일은 없어요. 도와달라고 해도 돼요"라고 되묻듯 답한다.',
        student: '손을 들고 "도와주세요!"를 크게 따라 외쳐 보아요.',
        demo: { tool: 'timer', options: { title: '도와주세요 구호', cards: ['어른 쪽으로 걷기', '손 들기', '도와주세요!'] }, sequence: [{ order: ['손 들기', '도와주세요!', '어른 쪽으로 걷기'] }] },
        art: { draw: 'paper children raising one hand high and calling out together, cut paper speech bubbles above them, a teacher turning to listen', banner: '도와주세요!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    HELP({
      id: 'saf-violence.e12.helper-adults.activity.school-map', type: 'activity', title: '학교 지도에 도움 받을 곳',
      method: '학교 그림 지도에 어른 있는 곳 핀 꽂기', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '장소 네 곳(교실·보건실·교무실·운동장) 가운데 상황에 맞는 곳에 꽂는다.', challenge: '도서관·급식실까지 여섯 곳이 있는 지도에서 꽂고, 그곳에 누가 있는지 말한다.' },
      activity: {
        title: '학교에서 도움 받을 곳 꽂기', tool: 'map',
        teacher: '"이럴 때 학교 어디로 가면 도와줄 어른이 있을까요?" 핀을 꽂기 전에 그곳에 계신 어른 이름을 먼저 말하게 한다. 다쳤을 때 운동장에 꽂는 학생에게 "운동장에서 다쳤다면 다친 곳을 봐 줄 선생님은 어디 계실까요?"라고 묻는다. 우리 학교의 보건실과 교무실이 실제로 어디 있는지 손으로 가리켜 보게 한다.',
        task: '도움 받을 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('다쳤을 때 갈 곳에 꽂아요.', SCHOOL, SCHOOL_MORE, '보건실', 0.1),
          PIN('친구가 때릴 때 알릴 곳에 꽂아요.', SCHOOL, SCHOOL_MORE, '교실', 0.15),
          PIN('담임 선생님이 안 계실 때 꽂아요.', SCHOOL, SCHOOL_MORE, '교무실', 0.2, { conclude: '다치면 보건실, 무서운 일은 담임 선생님, 안 계시면 교무실로 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '다쳤을 때 갈 곳에 ○ 해요.', options: ['보건실', '도서관', '운동장'], answer: '보건실' }] },
      notes: '우리 학교 배치에 맞게 교사가 그림 지도의 위치를 말로 바꿔 짚어 준다. 교실은 담임 선생님이 계신 곳으로 쓴다.',
    }),
    HELP({
      id: 'saf-violence.e12.helper-adults.activity.tell-story', type: 'activity', title: '선생님께 말한 아기 여우',
      method: '어른에게 알린 친구 그림 이야기', tool: 'story', minutes: 13,
      levels: { easy: '1번은 장면 2개 가운데 선생님이 도와주는 장면을 고르고, 놓으면 바로 맞는지 알려 준다.', base: '1번은 이야기 3장면을 차례대로 놓고, 2·3번은 도와준 일과 마음이 놓인 장면을 고른다.', challenge: '카드가 섞여 나오고, 1번에 "혼자 참아요" 틀린 장면 한 장이 섞여 빼고 놓는다.' },
      activity: {
        title: '아기 여우 이야기 장면 놓기', tool: 'story',
        teacher: '"아기 여우의 형이 자꾸 아프게 꼬집었대요. 아기 여우는 선생님께 말했어요." 이야기를 읽어 줄 때 꼬집는 장면은 짧게 넘기고 말한 뒤의 장면을 길게 이야기한다. "형을 일렀으니 고자질이에요"라는 학생에게 "아픈 일을 알리는 건 나를 지키는 일이에요. 잘못은 꼬집은 형에게 있어요"라고 말해 준다. 아기 여우가 말한 것은 잘한 일이고, 선생님은 고마워했다는 점을 짚는다.',
        task: '아기 여우 이야기를 듣고 장면을 놓고 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '아기 여우 이야기를 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('help', '선생님이 도와줘요'), C('pinch', '형이 자꾸 꼬집어요'), C('tell', '선생님께 말해요')] }, target: { order: ['pinch', 'tell', 'help'] }, difficulty: 0.1,
            hints: ['아픈 일이 먼저 일어났어요.', '말한 다음에 일어난 일을 찾아요.', '꼬집어요 → 말해요 → 도와줘요예요.'],
            levels: {
              easy: { prompt: '선생님이 도와주는 장면을 골라요.', toolOptions: { mode: 'pick', basket: '도와주는 장면', cards: [C('alone', '혼자 참아요'), C('help', '선생님이 도와줘요')] }, target: { pick: ['help'] } },
              challenge: { toolOptions: { cards: [C('help', '선생님이 도와줘요'), C('alone', '혼자 참아요'), C('pinch', '형이 자꾸 꼬집어요'), C('tell', '선생님께 말해요')] } },
            } },
          { prompt: '선생님이 도와준 일을 골라요.', toolOptions: { mode: 'pick', basket: '도와준 일', cards: [C('talk', '형과 이야기해요'), C('scold', '왜 일렀냐 혼내요'), C('mom', '엄마께 알려요'), C('hug', '꼭 안아 줘요')] }, target: { pick: ['talk', 'mom', 'hug'] }, difficulty: 0.15,
            hints: ['아기 여우 편에서 생각해요.', '아기 여우를 혼내는 카드는 빼요.', '이야기·엄마께·안아 줘요 세 장이에요.'] },
          { prompt: '마음이 놓인 장면을 골라요.', toolOptions: { mode: 'pick', basket: '마음이 놓였어요', cards: [C('night', '혼자 참던 밤'), C('after', '선생님께 말한 뒤'), C('pinch', '꼬집힐 때')] }, target: { pick: ['after'] }, difficulty: 0.2,
            conclude: '아프거나 무서운 일은 혼자 참지 않고 믿는 어른께 말해요. 말한 것은 잘한 일이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '아픈 일을 어른께 말하는 것은?', options: ['나를 지키는 일', '고자질'], answer: '나를 지키는 일' }] },
    }),
    HELP({
      id: 'saf-violence.e12.helper-adults.activity.scolded-choice', type: 'activity', title: '갈림길: 말하면 혼날까?',
      method: "'말하면 혼날까?' 갈림길", tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 왜 알리면 좋은지 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '말할까, 참을까?', tool: 'dilemma',
        teacher: '"곰돌이가 다쳤는데 혼날까 봐 말할지 고민해요. 어떻게 할까요?" 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "혼날까 봐 참아요"를 고른 학생을 나무라지 않고 "참으면 아픈 곳은 누가 봐 줄까요?"라고 묻는다. 다른 길도 끝까지 가 보며, 알리면 어른이 도와준다는 것과 겁주는 말을 들었을 때는 더 알려야 한다는 점을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('곰돌이 무릎이 다쳤어요. 골라요.', { text: '놀다가 넘어져 무릎이 다쳤어요.', motif: 'flower', choices: [
            { id: 'hide', text: '혼날까 봐 숨겨요', result: '무릎이 계속 아파요.', why: '다친 걸 말해도 혼나지 않아요. 바로 알려요.' },
            { id: 'tell', text: '선생님께 말해요', result: '선생님이 "어디 보자" 하세요.', easyEnding: '보건실에서 약을 발랐어요.', next: { text: '보건실에 왔어요. 어떻게 해요?', choices: [
              { id: 'nurse', text: '아픈 곳을 말해요', result: '보건 선생님이 약을 발라 주셨어요.', ending: '말해서 빨리 나았어요.' },
              { id: 'fine', text: '"괜찮아요" 하고 숨겨요', result: '어디가 아픈지 몰라요.', why: '아픈 곳을 말해야 도와줄 수 있어요.' }] } }] },
          ['tell', 'nurse'], [{ id: 'help', text: '어른이 도와줄 수 있어요' }, { id: 'scold', text: '혼나지 않으려고요', why: '다친 일로 혼나지 않아요. 도움받으려고 말해요.' }, { id: 'small', text: '작은 일이라서요', why: '아픈 일은 작아도 말해요.' }], 'help', 0.15),
          DILEMMA('친구가 자꾸 때려요. 골라요.', { text: '쉬는 시간에 친구가 자꾸 때려요.', motif: 'house', choices: [
            { id: 'endure', text: '혼자 참아요', result: '내일도 또 그럴까 봐 걱정돼요.', why: '참지 않아도 돼요. 알리는 건 고자질이 아니에요.' },
            { id: 'tell', text: '선생님께 알려요', result: '친구가 "이르면 안 놀아" 해요.', easyEnding: '선생님이 친구와 이야기해 주셨어요.', next: { text: '친구가 겁주는 말을 했어요. 어떻게 해요?', choices: [
              { id: 'still', text: '그래도 선생님께 말해요', result: '선생님이 친구와 이야기해 주셨어요.', ending: '알려서 때리는 일이 멈췄어요.' },
              { id: 'stop', text: '말하지 않기로 해요', result: '때리는 일이 계속될 수 있어요.', why: '겁주는 말을 들으면 더 알려야 해요.' }] } }] },
          ['tell', 'still'], [{ id: 'notme', text: '때린 친구가 잘못했어요' }, { id: 'tattle', text: '고자질하면 안 돼서요', why: '아픈 일을 알리는 건 고자질이 아니에요.' }, { id: 'friend', text: '친구랑 계속 놀고 싶어서요', why: '때리는 일은 놀이가 아니에요. 알려요.' }], 'notme', 0.2),
          DILEMMA('형들이 사탕을 뺏어요. 골라요.', { text: '놀이터에서 형들이 사탕을 달라고 뺏어요.', motif: 'flower', choices: [
            { id: 'give', text: '꾹 참고 줘요', result: '형들이 내일도 오래요.', why: '뺏기는 일은 참지 말고 어른께 알려요.' },
            { id: 'tell', text: '엄마께 말해요', result: '엄마가 "말해 줘서 고마워" 하세요.', easyEnding: '엄마가 선생님과 함께 도와주셨어요.', next: { text: '엄마가 "내일은 어떻게 할까?" 물으세요.', choices: [
              { id: 'together', text: '선생님께도 알려요', result: '엄마와 선생님이 함께 도와주셨어요.', ending: '어른들이 알아서 놀이터가 안전해졌어요.' },
              { id: 'secret', text: '다시 비밀로 해요', result: '형들이 또 올 수 있어요.', why: '여러 어른이 알면 더 잘 도와줄 수 있어요.' }] } }] },
          ['tell', 'together'], [{ id: 'thanks', text: '말하면 어른이 고마워해요' }, { id: 'afraid', text: '형들이 무서워서요', why: '무서우니까 더 어른께 알려요.' }, { id: 'mine', text: '내 사탕이 아까워서요', why: '사탕보다 내가 안전한 게 먼저예요.' }], 'thanks', 0.25, { conclude: '아프거나 무서운 일은 혼자 참지 않아요. 말하면 어른이 도와줘요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '다친 것을 말하면 어떻게 돼요?', options: ['어른이 도와줘요', '혼나요'], answer: '어른이 도와줘요' }] },
      notes: '참는 쪽을 고른 학생을 나무라지 않는다. 겁주는 말·때린 일의 잘못은 그렇게 한 사람에게 있다는 틀을 지킨다.',
    }),
    HELP({
      id: 'saf-violence.e12.helper-adults.activity.tell-sort', type: 'activity', title: '알려야 해요·괜찮아요 나누기',
      method: '알려야 해요·괜찮아요 장면 나누기', tool: 'mindmap', minutes: 13,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 바로 되돌아온다.', base: '카드 6장을 알려야 해요·괜찮아요 두 칸에 나눈다.', challenge: '"112에 알려요" 칸이 하나 더 생겨 카드 8장을 세 칸에 나눈다.' },
      activity: {
        title: '알릴 일·괜찮은 일 나누기', tool: 'mindmap',
        teacher: '"이런 일이 생기면 어른께 알려야 할까요, 괜찮을까요?" 카드를 놓을 때마다 반 전체가 손을 들거나(알려요) 엄지를 들어(괜찮아요) 먼저 보인다. "물건 뺏긴 건 작은 일이에요"라는 학생에게 "작아도 계속되면 어떻게 될까요? 알려도 돼요"라고 말해 준다. 도전 칸이 나오면 112는 급하고 위험한데 가까이 어른이 없을 때 누르는 번호라는 점을 짚는다.',
        task: '장면 카드를 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT23(['알려야 해요', '괜찮아요'], '112에 알려요', '학교에서 생긴 일을 나누어요.', '학교에서', ['누가 때려요', '물건을 뺏겨요', '자꾸 놀려요'], ['사이좋게 놀아요', '함께 그려요', '줄 서서 가요'], ['낯선 이가 끌어요', '교문 밖 위급해요'], 0.1),
          SORT23(['알려야 해요', '괜찮아요'], '112에 알려요', '길에서 생긴 일을 나누어요.', '길에서', ['낯선 이 따라와요', '길을 잃었어요', '누가 겁줘요'], ['친구와 걸어요', '신호 지켜요', '엄마와 가요'], ['억지로 데려가요', '도와줄 어른 없음'], 0.15),
          SORT23(['알려야 해요', '괜찮아요'], '112에 알려요', '놀이터에서 생긴 일을 나누어요.', '놀이터에서', ['형들이 돈 달래요', '자꾸 밀어요', '싫은 손길'], ['미끄럼 차례', '그네 같이 타요', '모래 놀이'], ['차에 태우려 해요', '혼자 위험해요'], 0.2, { conclude: '무섭거나 아픈 일은 믿는 어른께, 급하고 위험하면 112에 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '알려야 하면 ○, 괜찮으면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['누가 때려요', ''], ['함께 그려요', ''], ['길을 잃었어요', ''], ['그네 같이 타요', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '어른께 알릴 일에 ○ 해요.', options: ['누가 때려요', '함께 그려요'], answer: '누가 때려요' }] },
      notes: '112 칸 장면은 그림 없이 글로만 다루고 자세히 묘사하지 않는다. 112 카드는 "급하고 위험한데 가까이 어른이 없을 때"로만 설명한다.',
    }),
    HELP({
      id: 'saf-violence.e12.helper-adults.wrap.relief', type: 'wrap', title: '알리고 난 뒤 마음',
      method: '알리고 난 뒤 기분 고르기', tool: 'emotion', minutes: 7,
      levels: { easy: '교사가 기분 카드 두 장(편안함·무서움)만 가리키며 함께 고른다.', base: '기분 카드 4장 가운데 알린 친구의 마음을 스스로 고른다.', challenge: '고른 뒤 그 마음을 한 낱말로 소리 내어 말한다.' },
      wrap: {
        teacher: '"어른께 말하고 꼭 안긴 친구는 지금 어떤 마음일까요?" 기분 카드를 고른 뒤 교사가 그림 속 친구에게 하듯 "말해 줘서 고마워. 네 잘못이 아니야"라고 반 전체에게 들려준다. 출구 2번에서 "고자질쟁이예요"를 고른 학생에게 "아픈 일, 무서운 일을 알리는 건 나와 친구를 지키는 일이에요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '알린 친구 마음', cards: ['편안함', '무서움', '기쁨', '화남'] }, prompt: '알리고 난 친구 마음을 골라요.', target: { pick: ['편안함', '기쁨'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '어른께 알린 친구는요?', options: ['잘했어요', '고자질쟁이예요'], answer: 0, difficulty: 0.1, explain: '알린 것은 잘한 일이에요. 그 일은 알린 친구 잘못이 아니에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '말해 줘서 고마워',
        items: [
          { type: 'blank', prompt: '선생님이 해 준 말을 써요.', text: '말해 줘서 ___.', answer: '고마워' },
          { type: 'draw', prompt: '어른께 말하고 마음이 놓인 얼굴을 그려요.' },
        ],
        easy: { note: '"네 잘못이 아니야"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '웃는 얼굴을 그려요.' }] },
      },
    }),
    HELP({
      id: 'saf-violence.e12.helper-adults.wrap.my-helpers', type: 'wrap', title: '내가 알릴 어른과 112',
      method: '내가 알릴 어른과 112 표시', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 목록을 하나씩 읽어 주고 함께 표시한다.', base: '목록 4개 가운데 도움을 청할 사람에만 스스로 표시한다.', challenge: '표시한 뒤 "모르는 사람"에 왜 표시하지 않았는지 한마디 한다.' },
      wrap: {
        teacher: '"무섭거나 아픈 일이 생기면 누구에게 알릴까요?" 목록을 함께 읽고 도움을 청할 사람에게만 표시하게 한다. "모르는 사람"에 표시한 학생에게 "모르는 사람보다 먼저 찾을 어른은 누구일까요? 길에서는 가게 직원이나 경찰관처럼 일하는 어른을 찾아요"라고 말해 준다. 출구 2번에서는 112를 장난으로 누르지 않는다는 약속도 함께 한다.',
        exitTicket: [
          PROMISE('내가 알릴 사람', [C('teacher', '선생님'), C('family', '가족'), C('police', '경찰관 112')], C('stranger', '모르는 사람'), '도움을 청할 사람에 표시해요.'),
          { type: 'choice', prompt: '급하고 위험할 때는요?', options: ['112에 알려요', '혼자 참아요'], answer: 0, difficulty: 0.1, explain: '급하고 위험한데 어른이 없으면 112에 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나를 도와줄 어른',
        items: [
          { type: 'check', prompt: '내가 알릴 어른에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '가족', '경찰관(112)'] },
          { type: 'draw', prompt: '나를 도와줄 어른 얼굴을 그려요.' },
        ],
      },
      notes: '학생에게 집 전화번호·주소를 적게 하지 않는다. 112만 다룬다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 내 몸의 주인은 나
  const BOUND = MOD('saf-violence.e12.body-boundary', [2]);
  const PERMIT = ['허락한 손길', '허락 안 한 손길'];
  const T_BOUND = [
    BOUND({
      id: 'saf-violence.e12.body-boundary.intro.name-quiz', type: 'intro', title: '몸 바른 이름 되짚기',
      method: '몸 바른 이름 되짚기 퀴즈', tool: 'body', minutes: 6,
      levels: { easy: '교사가 부위 세 곳(어깨·배·무릎)만 부르고 함께 짚는다.', base: '부위 다섯 곳의 이름을 듣고 시연과 함께 짚는다.', challenge: '다섯 곳을 짚은 뒤 수영복으로 가리는 곳(가슴·엉덩이·생식기)을 말로 모두 말한다.' },
      intro: {
        teacher: '"1학년 때 배운 몸 이름, 기억나요? 선생님이 부르면 종이 몸에서 찾아볼까요?" 시연 단추로 어깨·배·무릎이 골라지고, 이어 가슴이 골라지는 모습을 보여 준다. 가슴이 골라지면 "수영복으로 가리는 곳은 가슴, 엉덩이, 생식기예요. 나만의 소중한 곳이에요"라고 담담하게 말한다. "친한 사람은 봐도 돼요"라는 말이 나오면 "아는 사람이어도 소중한 곳은 보여 주지 않아요. 오늘은 내 몸의 주인이 나라는 것을 배워요"라고 되묻듯 답한다.',
        student: '선생님이 부르는 몸 이름을 듣고 내 몸에서 찾아 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['어깨', '가슴', '배', '무릎', '팔꿈치'], names: true }, sequence: [{ parts: ['어깨', '배', '무릎'] }, { parts: ['가슴'] }] },
        art: { draw: 'a paper child in a swimsuit standing proudly with hands on hips beside a paper body chart, soft pastel colors', banner: '내 몸의 주인은 나' },
      },
      notes: '종이 몸에 엉덩이·생식기 칸이 없어 가슴만 짚고, 나머지는 교사가 말로 이름을 알려 준다. 학생의 몸을 가리키게 하지 않는다.',
    }),
    BOUND({
      id: 'saf-violence.e12.body-boundary.intro.space-feeling', type: 'intro', title: '가까이 오면 어떤 기분일까',
      method: '가까이 오면 어떤 기분일까 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 한 장(코앞까지 다가옴)만 보여 주고 기분 두 개 가운데 함께 고른다.', base: '그림 두 장의 기분을 시연과 함께 잇고 까닭을 말한다.', challenge: '두 그림의 기분이 왜 다른지 "거리"라는 말을 써서 말한다.' },
      intro: {
        teacher: '"친구가 내 코앞까지 얼굴을 쑥 내밀어요. 다른 친구는 멀리서 손을 흔들어요. 그림 속 아이는 각각 어떤 기분일까요?" 시연 단추로 기분 카드가 이어지는 모습을 보인 뒤, 반 전체가 두 팔을 벌려 내 둘레의 공간을 만들어 본다. "친한 친구는 가까이 와도 돼요"라는 말이 나오면 "친해도 갑자기 가까이 오면 놀랄 수 있어요. 가까이 갈 때는 어떻게 하면 좋을까요?"라고 되묻는다.',
        student: '두 팔을 벌려 내 둘레의 공간을 만들어 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'near', label: '코앞까지 다가옴' }, { id: 'wave', label: '멀리서 손 인사' }], cards: ['놀람', '기쁨'] }, sequence: [{ match: { near: '놀람', wave: '기쁨' } }] },
        art: { draw: 'two paper scenes: one paper child leaning very close to another child who steps back surprised, and one child waving from a friendly distance, a soft circle drawn around each child', banner: '내 둘레의 공간' },
      },
    }),
    BOUND({
      id: 'saf-violence.e12.body-boundary.activity.ask-first', type: 'activity', title: '내 공간 만들고 먼저 묻기',
      method: '내 공간 만들고 허락 묻기 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '점검 뒤 "묻기·대답 듣기" 카드 2장의 차례만 맞춘다.', base: '점검 뒤 카드 3장(내 공간·묻기·대답 듣기)의 차례를 맞추고, 짝이 싫다고 할 때의 차례도 놓는다.', challenge: '짝이 싫다고 할 때 "손 흔들어 인사"까지 4장의 차례를 맞추고 짝과 해 본다.' },
      activity: {
        title: '먼저 묻고 대답 듣기', tool: 'timer',
        teacher: '"친구를 안아 주고 싶을 때 먼저 무엇을 할까요?" 두 팔을 벌려 내 공간을 만든 뒤 "안아도 돼?"라고 묻고, 대답을 기다리는 모습을 짝과 해 본다. 짝이 "싫어"라고 하면 웃으며 "알았어" 하고 멈추게 한다. "친구니까 안 물어봐도 돼요"라는 학생에게 "친구가 싫은데 안기면 친구 마음은 어떨까요?"라고 묻는다. 남의 몸에 닿을 때도 먼저 묻고, 싫다고 하면 멈추는 것이 서로의 몸을 지키는 일이라고 짚는다.',
        task: '먼저 묻는 차례를 놓고 짝과 해 보아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '짝과 하기 전에 점검해요.', toolOptions: { title: '해 보기 전 약속', safety: ['팔 벌려 간격 두기', '밀지 않기', '천천히 움직이기'] }, target: { safety: true }, difficulty: 0.1 },
          { prompt: '안아 주고 싶어요. 차례로 놓아요.', toolOptions: { title: '먼저 묻기 차례', cards: ['대답 들어요', '팔 벌려 내 공간', '안아도 돼? 묻기'] }, target: { order: ['팔 벌려 내 공간', '안아도 돼? 묻기', '대답 들어요'] }, difficulty: 0.15,
            hints: ['몸에 닿기 전에 할 일을 떠올려요.', '묻고 나서 할 일이 있어요.', '내 공간 → 묻기 → 대답 듣기예요.'],
            levels: { easy: { prompt: '안아 주고 싶어요. 2장을 놓아요.', toolOptions: { cards: ['대답 들어요', '안아도 돼? 묻기'] }, target: { order: ['안아도 돼? 묻기', '대답 들어요'] } } } },
          { prompt: '짝이 싫다고 하면? 차례로 놓아요.', toolOptions: { title: '싫다고 하면', cards: ['멈춰요', '안아도 돼? 묻기', '"싫어" 대답'] }, target: { order: ['안아도 돼? 묻기', '"싫어" 대답', '멈춰요'] }, difficulty: 0.2,
            levels: { challenge: { prompt: '짝이 싫다고 하면? 4장을 놓아요.', toolOptions: { cards: ['손 흔들어 인사', '멈춰요', '안아도 돼? 묻기', '"싫어" 대답'] }, target: { order: ['안아도 돼? 묻기', '"싫어" 대답', '멈춰요', '손 흔들어 인사'] } } },
            conclude: '남의 몸에 닿을 때는 먼저 묻고, 싫다고 하면 멈춰요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '안기 전에 "안아도 ___?" 물어요.', answer: '돼' }] },
      notes: '짝 활동에서 실제로 안지 않아도 된다. 대답을 들은 뒤 하이파이브·손 흔들기 가운데 둘이 정한 인사를 한다.',
    }),
    BOUND({
      id: 'saf-violence.e12.body-boundary.activity.touch-sort', type: 'activity', title: '허락한 손길·허락 안 한 손길',
      method: '허락한 손길·허락 안 한 손길 나누기', tool: 'mindmap', minutes: 13,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 바로 되돌아온다.', base: '카드 6장을 허락한 손길·허락 안 한 손길 두 칸에 나눈다.', challenge: '"꼭 알려요" 칸이 하나 더 생겨 소중한 곳·비밀 손길 카드까지 8장을 세 칸에 나눈다.' },
      activity: {
        title: '손길 카드 나누기', tool: 'mindmap',
        teacher: '"이 손길은 허락한 손길일까요, 허락 안 한 손길일까요?" 카드를 놓을 때마다 "물어봤나요? 싫다고 했나요?"를 함께 따져 본다. "아는 어른이 한 건 괜찮아요"라는 학생에게 "아는 어른이어도 내가 싫다고 했는데 계속하면 어떤 손길일까요?"라고 묻는다. 허락 안 한 손길에는 "안돼요" 말하고 떠나 알리며, 소중한 곳을 만지거나 비밀로 하자는 손길은 꼭 알린다는 점과, 그런 일은 절대 내 잘못이 아니라는 점을 짚는다.',
        task: '손길 카드를 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT23(PERMIT, '꼭 알려요', '친구 사이 손길을 나누어요.', '친구 사이', ['하이파이브', '물어보고 안기', '손잡고 걷기'], ['싫은데 간지럼', '억지 팔짱', '몰래 꼬집기'], ['옷 들추기', '소중한 곳 만짐'], 0.1),
          SORT23(PERMIT, '꼭 알려요', '가족·친척 손길을 나누어요.', '가족·친척', ['엄마가 안아 줌', '물어보고 뽀뽀', '머리 빗겨 줌'], ['억지로 뽀뽀', '싫은데 안기', '세게 잡기'], ['비밀 손길', '소중한 곳 보기'], 0.15),
          SORT23(PERMIT, '꼭 알려요', '병원·학교 손길을 나누어요.', '병원·학교', ['엄마와 진료', '다친 곳 치료', '선생님 손잡기'], ['싫은데 쓰다듬기', '억지로 업기', '머리 때리기'], ['몰래 사진 찍기', '몰래 만지기'], 0.2, { conclude: '허락 안 한 손길엔 "안돼요", 소중한 곳·비밀 손길은 꼭 알려요. 내 잘못이 아니에요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '허락한 손길 ○, 허락 안 한 손길 ×를 써요.', columns: ['손길', '○ / ×'], cells: [['하이파이브', ''], ['억지로 뽀뽀', ''], ['엄마와 진료', ''], ['싫은데 간지럼', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '허락한 손길에 ○ 해요.', options: ['하이파이브', '몰래 꼬집기'], answer: '하이파이브' }] },
      notes: '병원 진료는 보호자가 함께 있고 까닭을 알려 주는 손길이라는 점을 덧붙인다. 장면 카드는 글로만 다루고 그림으로 그리지 않는다.',
    }),
    BOUND({
      id: 'saf-violence.e12.body-boundary.activity.secret-touch', type: 'activity', title: "갈림길: '비밀이야' 할 때",
      method: "'비밀이야' 하며 다가올 때 갈림길", tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(안돼요·떠나요 → 알려요, 갈림 2번).', challenge: '갈림 2번을 지나 끝에서 "내 잘못이 아니에요" 같은 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '비밀이라고 할 때 어떻게 할까?', tool: 'dilemma',
        teacher: '"아는 사람이 소중한 곳을 보자고 하면서 \'우리만 비밀이야\'라고 해요. 어떻게 할까요?" 장면은 이 문장만 읽고 더 그리지 않는다. 고르기 전에 반 전체가 "안돼요!" 하고 손바닥을 내밀고 뒤돌아 걸어 본다. "아는 사람이니까 괜찮아요"를 고른 학생에게 "아는 사람이어도 소중한 곳을 보자고 하는 건 안 되는 일이에요. 그건 그 사람이 잘못한 거예요"라고 말해 준다. 이런 비밀은 지키지 않아도 되고, 알린 아이는 잘한 것이며 절대 아이 잘못이 아니라는 점을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('비밀이라며 보자고 해요. 골라요.', { text: '아는 형이 "소중한 곳 보여 줘, 비밀이야" 해요.', motif: 'house', choices: [
            { id: 'show', text: '보여 줘요', result: '마음이 이상하고 싫어요.', why: '소중한 곳은 보여 주지 않아요. 하자고 한 사람이 잘못이에요.' },
            { id: 'no', text: '"안돼요!" 하고 떠나요', result: '형에게서 멀리 왔어요.', easyEnding: '엄마께 말했더니 "말해 줘서 고마워" 하셨어요.', next: { text: '형이 "말하면 안 돼" 했어요. 어떻게 해요?', choices: [
              { id: 'tell', text: '엄마께 알려요', result: '엄마가 꼭 안아 주셨어요.', ending: '엄마가 "네 잘못이 아니야, 말해 줘서 고마워" 하셨어요.' },
              { id: 'keep', text: '비밀로 해요', result: '마음이 계속 무거워요.', why: '이런 비밀은 꼭 알려요. 내 잘못이 아니에요.' }] } }] },
          ['no', 'tell'], [{ id: 'notme', text: '내 잘못이 아니에요' }, { id: 'scold', text: '내가 혼날까 봐서요', why: '말해도 혼나지 않아요. 잘못은 하자고 한 사람에게 있어요.' }, { id: 'know', text: '아는 사람이라 괜찮아요', why: '아는 사람이어도 안 돼요.' }], 'notme', 0.15),
          DILEMMA('무릎에 앉으래요. 골라요.', { text: '이웃 어른이 "사탕 줄게, 무릎에 앉아. 비밀이야" 해요.', motif: 'house', choices: [
            { id: 'sit', text: '사탕 받으러 가요', result: '싫은 느낌이 들어요.', why: '선물을 준다고 해도 싫으면 가지 않아요.' },
            { id: 'no', text: '"싫어요!" 하고 떠나요', result: '집으로 돌아왔어요.', easyEnding: '아빠께 말했더니 "잘했어" 하셨어요.', next: { text: '집에 왔어요. 어떻게 해요?', choices: [
              { id: 'tell', text: '아빠께 알려요', result: '아빠가 "말해 줘서 고마워" 하셨어요.', ending: '알려서 아빠가 지켜 주셨어요.' },
              { id: 'forget', text: '잊어버리려고 해요', result: '다음에 또 그럴 수 있어요.', why: '비밀이라고 해도 믿는 어른께 알려요.' }] } }] },
          ['no', 'tell'], [{ id: 'gift', text: '선물보다 내 몸이 먼저예요' }, { id: 'candy', text: '사탕이 먹고 싶어서요', why: '사탕보다 내 몸이 소중해요.' }, { id: 'adult', text: '어른 말은 다 들어야 해서요', why: '싫은 일은 어른이 시켜도 "싫어요" 해도 돼요.' }], 'gift', 0.2),
          DILEMMA('싫은데 뽀뽀하재요. 골라요.', { text: '친척 어른이 "뽀뽀해 줘, 엄마한테는 비밀" 해요.', motif: 'house', choices: [
            { id: 'kiss', text: '싫어도 해 줘요', result: '싫은 마음이 남아요.', why: '싫으면 친척 어른이어도 안 해도 돼요.' },
            { id: 'no', text: '"싫어요" 하고 엄마 곁으로 가요', result: '엄마 곁에 왔어요.', easyEnding: '엄마께 말했더니 "싫다고 해도 돼" 하셨어요.', next: { text: '엄마 곁에 왔어요. 어떻게 해요?', choices: [
              { id: 'tell', text: '엄마께 말해요', result: '엄마가 "싫다고 해도 돼" 하셨어요.', ending: '말해서 마음이 가벼워졌어요.' },
              { id: 'quiet', text: '비밀이라 안 말해요', result: '엄마는 내 마음을 몰라요.', why: '엄마한테 비밀이라는 일은 꼭 엄마께 말해요.' }] } }] },
          ['no', 'tell'], [{ id: 'mybody', text: '내 몸의 주인은 나예요' }, { id: 'rude', text: '안 하면 버릇없어서요', why: '싫다고 말하는 건 버릇없는 게 아니에요.' }, { id: 'family', text: '가족이니까 참아요', why: '가족이어도 싫으면 싫다고 말해요.' }], 'mybody', 0.25, { conclude: '"안돼요!" 말하고, 떠나고, 믿는 어른께 알려요. 내 잘못이 아니에요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '비밀이라며 몸을 보자고 하면?', options: ['안돼요, 떠나서 알려요', '비밀을 지켜요'], answer: '안돼요, 떠나서 알려요' }] },
      notes: '장면은 문장 한 줄로만 말하고 그 뒤를 그리거나 묘사하지 않는다. 수업 뒤 개별로 말하러 오는 학생은 캐묻지 않고 "말해 줘서 고마워, 네 잘못이 아니야"로 받은 뒤 학교의 대응 절차를 따른다.',
    }),
    BOUND({
      id: 'saf-violence.e12.body-boundary.activity.brave-story', type: 'activity', title: '용기 낸 아기 사슴 이야기',
      method: '용기 낸 친구 그림 이야기', tool: 'story', minutes: 13,
      levels: { easy: '1번은 장면 2개 가운데 엄마가 고마워하는 장면을 고르고, 놓으면 바로 맞는지 알려 준다.', base: '1번은 이야기 3장면을 차례대로 놓고, 2·3번은 엄마가 한 일과 해 줄 말을 고른다.', challenge: '카드가 섞여 나오고, 1번에 "혼자 숨겨요" 틀린 장면 한 장이 섞여 빼고 놓는다.' },
      activity: {
        title: '아기 사슴 이야기 장면 놓기', tool: 'story',
        teacher: '"아기 사슴은 싫은 손길이 있었던 일을 엄마께 말했어요. 엄마는 뭐라고 했을까요?" 싫은 손길이 무엇이었는지는 이야기하지 않고 아기 사슴의 용기와 엄마의 말에 머문다. "왜 이제 말했어?"를 고르는 학생에게 "언제 말해도 괜찮아요. 말해 준 것 자체가 고마운 일이에요"라고 말해 준다. 말한 아이는 용기 있는 것이고, 그 일은 아이 잘못이 아니라는 점을 짚는다.',
        task: '아기 사슴 이야기를 듣고 장면을 놓고 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '아기 사슴 이야기를 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('thanks', '엄마가 고마워해요'), C('bad', '싫은 느낌이 들어요'), C('tell', '엄마께 말해요')] }, target: { order: ['bad', 'tell', 'thanks'] }, difficulty: 0.1,
            hints: ['아기 사슴 마음이 먼저 어땠는지 떠올려요.', '말한 다음에 엄마가 한 일을 찾아요.', '싫은 느낌 → 말해요 → 고마워해요예요.'],
            levels: {
              easy: { prompt: '엄마가 고마워하는 장면을 골라요.', toolOptions: { mode: 'pick', basket: '엄마의 마음', cards: [C('thanks', '엄마가 고마워해요'), C('angry', '엄마가 화내요')] }, target: { pick: ['thanks'] } },
              challenge: { toolOptions: { cards: [C('hide', '혼자 숨겨요'), C('thanks', '엄마가 고마워해요'), C('bad', '싫은 느낌이 들어요'), C('tell', '엄마께 말해요')] } },
            } },
          { prompt: '엄마가 한 일을 골라요.', toolOptions: { mode: 'pick', basket: '엄마가 한 일', cards: [C('hug', '꼭 안아 줘요'), C('why', '왜 말했냐 혼내요'), C('thank', '고맙다 말해요'), C('help', '다른 어른과 도와요')] }, target: { pick: ['hug', 'thank', 'help'] }, difficulty: 0.15,
            hints: ['아기 사슴 편에서 생각해요.', '아기 사슴을 혼내는 카드는 빼요.', '안아 줘요·고맙다·다른 어른과 세 장이에요.'] },
          { prompt: '아기 사슴에게 해 줄 말을 골라요.', toolOptions: { mode: 'pick', basket: '해 줄 말', cards: [C('brave', '용기 냈구나'), C('hush', '조용히 해'), C('notyou', '네 잘못 아니야')] }, target: { pick: ['brave', 'notyou'] }, difficulty: 0.2,
            conclude: '싫은 손길을 말한 친구는 용기 있는 친구예요. 그 일은 친구 잘못이 아니에요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '싫은 일을 말한 친구에게 할 말은?', options: ['용기 냈구나', '왜 말했어'], answer: '용기 냈구나' }] },
    }),
    BOUND({
      id: 'saf-violence.e12.body-boundary.wrap.chant-cards', type: 'wrap', title: '안돼요·싫어요·알릴래요',
      method: '안돼요·싫어요·알릴래요 구호 카드', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 구호 카드 두 장(안돼요·싫어요)을 먼저 외치고 함께 따라 한다.', base: '구호 카드 세 장을 차례대로 놓고 다 같이 외친다.', challenge: '세 장을 놓은 뒤 손바닥 내밀기·고개 젓기·뒤돌아 걷기 동작을 붙여 외친다.' },
      wrap: {
        teacher: '"안돼요! (손바닥 앞으로) 싫어요! (고개 젓기) 알릴래요! (뒤돌아 어른 쪽으로)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 출구 2번에서 "나"를 고른 학생에게 "싫은 손길은 그렇게 한 사람이 잘못한 거예요. 나는 잘못이 없어요"라고 또박또박 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', slots: ['하나', '둘', '셋'], cards: ['알릴래요', '안돼요', '싫어요'] }, prompt: '구호 카드를 차례대로 놓아요.', target: { order: ['안돼요', '싫어요', '알릴래요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '싫은 손길은 누구 잘못이에요?', options: ['그렇게 한 사람', '나'], answer: 0, difficulty: 0.1, explain: '싫은 손길은 그렇게 한 사람의 잘못이에요. 내 잘못이 아니에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '안돼요! 싫어요! 알릴래요!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '안돼요! 싫어요! ___!', answer: '알릴래요' },
          { type: 'draw', prompt: '"안돼요!" 하고 손바닥을 내민 모습을 그려요.' },
        ],
        easy: { note: '"안돼요, 싫어요, 알릴래요"를 소리 내어 말해요.', items: [{ type: 'draw', prompt: '내민 손바닥을 그려요.' }] },
      },
    }),
    BOUND({
      id: 'saf-violence.e12.body-boundary.wrap.body-promise', type: 'wrap', title: '내 몸 지키는 약속',
      method: '내 몸 지키는 약속 표시', tool: 'kitchen', minutes: 7,
      levels: { easy: '교사가 약속 칸을 하나씩 읽어 주고 함께 표시한다.', base: '약속 4개 가운데 지킬 약속에만 스스로 표시한다.', challenge: '표시한 뒤 "참고 숨겨요"가 왜 약속이 아닌지 짝에게 한마디 한다.' },
      wrap: {
        teacher: '"내 몸과 친구 몸을 지키는 약속을 골라 볼까요?" 약속 칸을 함께 읽고 지킬 약속에만 표시하게 한다. "참고 숨겨요"에 표시한 학생에게 "참고 숨기면 누가 나를 도와줄 수 있을까요?"라고 묻는다. 출구 2번에서 "몰래 해요"를 고른 학생과는 "친구 몸도 그 친구가 주인이에요"를 함께 말해 본다.',
        exitTicket: [
          PROMISE('내 몸 약속', [C('ask', '먼저 물어요'), C('say', '싫으면 말해요'), C('tell', '비밀도 알려요')], C('hide', '참고 숨겨요')),
          { type: 'choice', prompt: '친구 몸에 닿고 싶으면요?', options: ['먼저 물어요', '몰래 해요'], answer: 0, difficulty: 0.1, explain: '친구 몸의 주인은 친구예요. 먼저 묻고 대답을 들어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 몸의 주인은 나',
        items: [
          { type: 'table', prompt: '맞으면 ○, 틀리면 ×를 써요.', columns: ['약속', '○ / ×'], cells: [['친구를 안기 전에 물어요', ''], ['비밀이라며 만지면 숨겨요', ''], ['싫은 손길엔 "안돼요" 말해요', '']], answer: '○, ×, ○' },
          { type: 'draw', prompt: '두 팔을 벌려 내 공간을 만든 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 놀림과 따돌림 멈춰요
  const TEASE = MOD('saf-violence.e12.stop-teasing', [2]);
  const HURT3 = ['말로', '몸으로', '끼워 주지 않기'];
  // 아프게 하는 행동 세 칸(mindmap): 기본 세 칸 6장, 쉬움 두 칸(말로·몸으로) 4장, 도전 세 칸 + 괜찮은 놀이 함정 카드 2장(칸에 넣지 않음)
  const HURTS = (prompt, w, b, x, ok, d, more) => ({
    prompt, toolOptions: { topic: '아프게 하는 행동', slots: HURT3, cards: [w[0], b[0], x[0], w[1], b[1], x[1]] }, target: { sort: { 말로: w, 몸으로: b, '끼워 주지 않기': x } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(두 칸).`, toolOptions: { slots: HURT3.slice(0, 2), cards: [w[0], b[0], w[1], b[1]] }, target: { sort: { 말로: w, 몸으로: b } } },
      challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [w[0], ok[0], b[0], x[0], w[1], b[1], ok[1], x[1]] } },
    },
    ...more,
  });
  const PLAYGROUND = { grid: [4, 3], title: '우리 운동장', places: [{ name: '줄넘기', icon: 'park', at: [0, 0] }, { name: '미끄럼틀', icon: 'park', at: [3, 0] }, { name: '모래밭', icon: 'dot', at: [0, 2] }, { name: '혼자인 친구', icon: 'dot', at: [2, 2] }] };
  const T_TEASE = [
    TEASE({
      id: 'saf-violence.e12.stop-teasing.intro.alone-friend', type: 'intro', title: '혼자 노는 친구 마음',
      method: '혼자 노는 친구 기분 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 기분 카드 두 장(외로움·신남)만 가리키며 함께 고른다.', base: '기분 카드 네 장 가운데 시연이 고르는 마음을 보고 까닭을 말한다.', challenge: '마음을 고른 뒤 그 친구 마음이 바뀌려면 무엇이 필요할지 말한다.' },
      intro: {
        teacher: '"친구들이 줄넘기를 하는데 한 친구가 혼자 서 있어요. 이 친구 마음은 어떨까요?" 두세 명의 대답을 듣고 시연 단추로 기분 카드가 담기는 모습을 보여 준다. "혼자 있는 게 좋은가 봐요"라는 말이 나오면 "그럴 수도 있어요. 그럼 어떻게 물어보면 알 수 있을까요?"라고 되묻는다. 오늘은 친구를 아프게 하는 행동을 알아보고 "그만해", "같이 놀자"라고 말하는 법을 배운다고 밝힌다.',
        student: '혼자 서 있는 친구의 마음을 짝과 함께 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '혼자인 친구 마음', cards: ['외로움', '신남', '슬픔', '뿌듯함'], shuffle: false }, sequence: [{ pick: ['외로움', '슬픔'] }] },
        art: { draw: 'paper children jumping rope together on a paper playground while one small child stands alone at the side looking at them', banner: '친구 마음을 살펴요' },
      },
    }),
    TEASE({
      id: 'saf-violence.e12.stop-teasing.intro.playground-pin', type: 'intro', title: '운동장에서 혼자인 친구 찾기',
      method: '운동장 그림에서 혼자인 친구 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 혼자인 친구 한 곳만 함께 찾아 가리킨다.', base: '시연에서 혼자인 친구 자리에 핀이 꽂히는 것을 보고, 그 친구에게 갈 길을 손가락으로 따라간다.', challenge: '혼자인 친구와 가장 가까운 놀이 무리(모래밭)까지 찾아 말한다.' },
      intro: {
        teacher: '"우리 운동장 그림에서 혼자 있는 친구는 어디 있을까요?" 학생들이 손가락으로 먼저 가리키게 한 뒤 시연 단추로 핀이 꽂히는 모습을 보여 준다. 핀에서 놀이 무리까지 손가락으로 길을 따라가며 "가까이 가서 무엇이라고 말할까요?"라고 묻는다. "모르는 친구라 그냥 둬요"라는 말이 나오면 "나도 혼자일 때 누가 다가와 주면 어떨까요?"라고 되묻는다.',
        student: '혼자인 친구에게 가는 길을 손가락으로 따라가 보아요.',
        demo: { tool: 'map', options: PLAYGROUND, sequence: [{ pin: [2, 2] }] },
        art: { draw: 'a paper playground map with a jump rope group, a slide and a sandbox, and one small child standing alone near the bottom, a dotted paper path leading to them', banner: '같이 놀자!' },
      },
    }),
    TEASE({
      id: 'saf-violence.e12.stop-teasing.activity.three-kinds', type: 'activity', title: '아프게 하는 행동 세 칸',
      method: '아프게 하는 행동 세 칸 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '말로·몸으로 두 칸에 카드 4장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '말로·몸으로·끼워 주지 않기 세 칸에 카드 6장을 나눈다.', challenge: '세 칸에 카드 8장, "같이 술래잡기"처럼 괜찮은 놀이 카드 2장은 칸에 넣지 않고 남긴다.' },
      activity: {
        title: '아프게 하는 행동 나누기', tool: 'mindmap',
        teacher: '"친구를 아프게 하는 행동은 몸으로만 할까요?" 카드를 놓을 때마다 그 행동을 받은 친구 마음을 한 낱말로 말하게 한다. 별명 부르기를 "다 같이 웃으니까 괜찮아요"라는 학생에게 "다 같이 웃을 때 별명 불린 친구도 웃고 있을까요?"라고 묻는다. 말로 아프게 하기와 끼워 주지 않기도 몸으로 때리는 것만큼 친구 마음을 아프게 한다는 점을 짚는다.',
        task: '행동 카드를 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          HURTS('교실 행동을 나누어요.', ['별명 부르기', '놀리는 노래'], ['발 걸기', '밀치기'], ['"너는 빠져"', '못 앉게 하기'], ['같이 술래잡기', '"같이 하자"'], 0.1),
          HURTS('쉬는 시간 행동을 나누어요.', ['흉보기', '겁주는 말'], ['꼬집기', '물건 던지기'], ['혼자 두기', '모른 척하기'], ['차례 지키기', '"괜찮아?"'], 0.15),
          HURTS('운동장 행동을 나누어요.', ['외모 놀리기', '욕하기'], ['때리기', '물건 뺏기'], ['자리 막기', '편 안 끼워 줌'], ['함께 그리기', '칭찬하기'], 0.2, { conclude: '말로, 몸으로, 끼워 주지 않기 모두 친구를 아프게 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '친구를 아프게 하면 ○, 아니면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['별명 부르기', ''], ['"같이 하자"', ''], ['"너는 빠져"', ''], ['차례 지키기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '친구를 아프게 하는 말에 ○ 해요.', options: ['별명 부르기', '같이 하자'], answer: '별명 부르기' }] },
      notes: '우리 반 친구 이름·별명을 예로 들지 않는다. 카드 속 행동으로만 이야기한다.',
    }),
    TEASE({
      id: 'saf-violence.e12.stop-teasing.activity.watcher-choice', type: 'activity', title: '갈림길: 놀림을 봤을 때',
      method: '놀림을 봤을 때 갈림길', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 3개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 친구 마음을 생각한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '놀림을 보면 어떻게 할까?', tool: 'dilemma',
        teacher: '"친구가 놀림받는 걸 봤어요. 같이 웃을까요, 모른 척할까요, \'그만해\' 할까요?" 고르기 전에 반 전체가 손바닥을 내밀며 "그만해!"를 한 번 연습한다. "모른 척해요"를 고른 학생에게 "보고만 있으면 놀림받는 친구는 우리를 어떻게 생각할까요?"라고 묻는다. 혼자 말하기 어려우면 선생님께 알리는 것도 친구를 돕는 일이라는 점을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('친구가 별명으로 놀림받아요. 골라요.', { text: '친구들이 하나를 별명으로 부르며 놀려요.', motif: 'house', choices: [
            { id: 'laugh', text: '같이 웃어요', result: '하나가 고개를 숙였어요.', why: '같이 웃으면 놀림이 더 커져요.' },
            { id: 'ignore', text: '모른 척해요', result: '놀림이 계속돼요.', why: '보고만 있으면 놀림이 멈추지 않아요.' },
            { id: 'stop', text: '"그만해!" 말해요', result: '친구들이 멈칫해요.', easyEnding: '놀림이 멈추고 하나가 웃었어요.', next: { text: '한 친구가 "장난인데?" 해요.', choices: [
              { id: 'teacher', text: '선생님께 알려요', result: '선생님이 다 같이 이야기해 주셨어요.', ending: '놀림이 멈추고 하나가 안심했어요.' },
              { id: 'join', text: '그럼 같이 놀려요', result: '하나가 더 속상해요.', why: '장난이라고 해도 아프면 놀림이에요.' }] } }] },
          ['stop', 'teacher'], [{ id: 'hurt', text: '하나 마음이 아파서요' }, { id: 'funny', text: '재미있어서요', why: '누군가 아프면 재미있는 게 아니에요.' }, { id: 'notmine', text: '나랑 상관없어서요', why: '보고 있는 나도 멈출 수 있어요.' }], 'hurt', 0.15),
          DILEMMA('공놀이에 안 끼워 줘요. 골라요.', { text: '친구들이 한 친구만 공놀이에 안 끼워 줘요.', motif: 'flower', choices: [
            { id: 'laugh', text: '같이 웃어요', result: '그 친구가 혼자 돌아섰어요.', why: '안 끼워 주고 웃으면 친구가 더 외로워요.' },
            { id: 'ignore', text: '모른 척해요', result: '그 친구는 계속 혼자예요.', why: '모른 척하면 따돌림이 계속돼요.' },
            { id: 'invite', text: '"같이 하자" 말해요', result: '친구들이 "자리가 없어" 해요.', easyEnding: '그 친구가 같이 공놀이를 했어요.', next: { text: '친구들이 자리가 없대요. 어떻게 해요?', choices: [
              { id: 'rule', text: '"한 명 더 해도 돼" 말해요', result: '편을 다시 나눴어요.', ending: '모두 함께 공놀이를 했어요.' },
              { id: 'leave', text: '그냥 둬요', result: '그 친구는 다시 혼자예요.', why: '방법을 찾아 함께 놀 수 있어요.' }] } }] },
          ['invite', 'rule'], [{ id: 'together', text: '모두 함께 놀 수 있어요' }, { id: 'win', text: '우리 편이 이기려고요', why: '이기는 것보다 함께 노는 게 먼저예요.' }, { id: 'quiet', text: '조용히 있는 게 편해서요', why: '조금 용기 내면 친구를 도울 수 있어요.' }], 'together', 0.2),
          DILEMMA('친구 신발을 숨겼어요. 골라요.', { text: '친구들이 한 친구 신발을 숨기며 웃어요.', motif: 'house', choices: [
            { id: 'laugh', text: '같이 웃어요', result: '그 친구가 울먹여요.', why: '같이 웃으면 숨긴 친구 편이 돼요.' },
            { id: 'ignore', text: '모른 척해요', result: '그 친구가 신발을 못 찾아요.', why: '모른 척하면 친구는 혼자 힘들어요.' },
            { id: 'stop', text: '"돌려줘!" 말해요', result: '친구들이 "왜 네가?" 해요.', easyEnding: '신발을 돌려주고 사과했어요.', next: { text: '친구들이 안 돌려줘요. 어떻게 해요?', choices: [
              { id: 'teacher', text: '선생님께 알려요', result: '선생님이 신발을 찾아 주셨어요.', ending: '알려서 친구가 신발을 찾았어요.' },
              { id: 'give', text: '포기해요', result: '친구는 계속 신발이 없어요.', why: '혼자 어려우면 어른께 알려요.' }] } }] },
          ['stop', 'teacher'], [{ id: 'help', text: '친구를 도와야 해서요' }, { id: 'tattle', text: '고자질이 될까 봐서요', why: '친구를 지키려고 알리는 건 고자질이 아니에요.' }, { id: 'scared', text: '나도 놀림받을까 봐서요', why: '무서우면 선생님께 먼저 알려도 돼요.' }], 'help', 0.25, { conclude: '놀림을 보면 "그만해!" 말하고, 어려우면 선생님께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 놀림받는 걸 봤어요. 무엇을 해요?', options: ['"그만해!" 말해요', '같이 웃어요'], answer: '"그만해!" 말해요' }] },
    }),
    TEASE({
      id: 'saf-violence.e12.stop-teasing.activity.stop-role', type: 'activity', title: '"멈춰!"와 손 내밀기',
      method: "'멈춰!' 구호와 손 내밀기 역할놀이", tool: 'timer', minutes: 14,
      levels: { easy: '점검 뒤 동작 카드 2장("멈춰!"·같이 놀자)의 차례만 맞추고 모둠 세 번을 맞춘다.', base: '점검 뒤 동작 카드 3장의 차례를 맞추고 모둠이 돌아가며 세 번 하게 타이머를 맞춘다.', challenge: '카드 3장을 맞추고 역할을 바꿔 여섯 번 하게 맞춘다.' },
      activity: {
        title: '멈춰·다가가기·같이 놀자 역할놀이', tool: 'timer',
        teacher: '"놀림을 보면 손바닥을 내밀며 \'멈춰!\', 친구에게 다가가서, \'같이 놀자\'라고 손을 내밀어요." 모둠에서 놀리는 역할은 정하지 않고, 교사가 "놀림이 있어요!"라고 말하면 모둠이 동작을 차례대로 한다. 머뭇거리는 학생에게 "작은 목소리여도 괜찮아요. 손을 내민 것만으로 친구는 힘이 나요"라고 말해 준다. 타이머 초 값은 놀이 진행용 우리 반 약속이라고 밝힌다.',
        task: '동작 차례를 놓고 모둠 역할놀이 횟수를 맞춰요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '역할놀이 전에 점검해요.', toolOptions: { title: '놀이 전 약속', safety: ['놀리는 역할 없기', '손바닥만 내밀기', '천천히 다가가기'] }, target: { safety: true }, difficulty: 0.1 },
          { prompt: '놀림을 보면? 차례로 놓아요.', toolOptions: { title: '멈춰 차례', cards: ['같이 놀자', '"멈춰!" 손바닥', '다가가기'] }, target: { order: ['"멈춰!" 손바닥', '다가가기', '같이 놀자'] }, difficulty: 0.15,
            hints: ['놀림부터 멈추게 해요.', '친구 곁으로 간 다음에 할 말이 있어요.', '"멈춰!" → 다가가기 → 같이 놀자예요.'],
            levels: { easy: { prompt: '놀림을 보면? 2장을 놓아요.', toolOptions: { cards: ['같이 놀자', '"멈춰!" 손바닥'] }, target: { order: ['"멈춰!" 손바닥', '같이 놀자'] } } } },
          { prompt: '모둠 세 번이 되게 맞춰요.', toolOptions: { title: '모둠 역할놀이', plan: { work: 20, rest: 10, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.2,
            hints: ['모둠 친구가 한 번씩 하면 몇 번일까요?', '번 칸이 역할놀이 횟수예요.', '번 칸을 3에 맞춰요.'],
            levels: { challenge: { prompt: '역할 바꿔 여섯 번이 되게 맞춰요.', target: { plan: { rounds: 6 } } } },
            conclude: '놀림을 보면 "멈춰!" 하고, 다가가서, "같이 놀자" 손을 내밀어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '멈춰! 다가가서, "같이 ___!"', answer: '놀자' }] },
      notes: '놀리는 역할을 학생에게 맡기지 않는다. 교사의 신호 말로 장면을 대신한다. 타이머 값은 놀이 진행용 우리 반 약속이다.',
    }),
    TEASE({
      id: 'saf-violence.e12.stop-teasing.activity.lets-play', type: 'activity', title: '"같이 놀자" 이야기 차례',
      method: "'같이 놀자' 그림 이야기 차례 놓기", tool: 'story', minutes: 13,
      levels: { easy: '이야기 2장면의 차례만 놓고, 놓으면 바로 맞는지 알려 준다.', base: '이야기 3장면의 차례를 놓고, 마지막 장면의 마음도 고른다.', challenge: '카드가 섞여 나오고, 3장면을 놓은 뒤 마음 고르기에 헷갈리는 마음 카드가 한 장 더 섞인다.' },
      activity: {
        title: '하나의 "같이 놀자" 이야기', tool: 'story',
        teacher: '"혼자 서 있던 친구에게 하나가 다가가 \'같이 놀자\'고 했어요. 어떤 차례로 일어났을까요?" 카드를 놓은 뒤 짝과 하나·친구 역할을 나누어 그 장면을 말로 해 본다. "같이 놀자고 했는데 싫다고 하면요?"라는 질문이 나오면 "그 친구 마음도 괜찮아요. \'다음에 같이 하자\'라고 말하면 돼요"라고 답한다. 손 내민 한마디가 친구의 하루를 바꾼다는 점을 짚는다.',
        task: '이야기 장면을 차례대로 놓고 마음을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '하나 이야기를 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('play', '함께 놀아요'), C('alone', '혼자 서 있어요'), C('ask', '"같이 놀자"')] }, target: { order: ['alone', 'ask', 'play'] }, difficulty: 0.1,
            hints: ['처음에 친구가 어땠는지 떠올려요.', '말을 건넨 다음에 일어난 일을 찾아요.', '혼자 → "같이 놀자" → 함께 놀아요예요.'],
            levels: { easy: { prompt: '하나 이야기 2장면을 놓아요.', toolOptions: { slots: ['먼저', '끝'], cards: [C('play', '함께 놀아요'), C('alone', '혼자 서 있어요')] }, target: { order: ['alone', 'play'] } } } },
          { prompt: '모둠 놀이 이야기를 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('game', '함께 놀아요'), C('room', '자리를 비켜 줘요'), C('rule', '규칙 알려 줘요')] }, target: { order: ['room', 'rule', 'game'] }, difficulty: 0.15,
            hints: ['새 친구가 들어올 곳부터 만들어요.', '놀이 방법을 모르면 어떻게 할까요?', '자리 비켜 줘요 → 규칙 알려 줘요 → 함께 놀아요예요.'],
            levels: { easy: { prompt: '모둠 놀이 2장면을 놓아요.', toolOptions: { slots: ['먼저', '끝'], cards: [C('game', '함께 놀아요'), C('room', '자리를 비켜 줘요')] }, target: { order: ['room', 'game'] } } } },
          { prompt: '마지막 장면 친구 마음을 골라요.', toolOptions: { mode: 'pick', basket: '친구 마음', cards: [C('glad', '기뻐요'), C('lonely', '외로워요'), C('happy', '신나요')] }, target: { pick: ['glad', 'happy'] }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { cards: [C('glad', '기뻐요'), C('lonely', '외로워요'), C('happy', '신나요'), C('angry', '화나요')] } } },
            conclude: '"같이 놀자" 한마디가 혼자인 친구를 웃게 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '혼자인 친구에게 할 말은?', options: ['같이 놀자', '저리 가'], answer: '같이 놀자' }] },
    }),
    TEASE({
      id: 'saf-violence.e12.stop-teasing.wrap.friend-words', type: 'wrap', title: '친구에게 건넬 말 카드',
      method: '친구에게 건넬 말 카드 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 장면 두 개만 읽어 주고 말 카드를 함께 잇는다.', base: '장면 세 개에 알맞은 말 카드를 스스로 잇는다.', challenge: '이은 말 가운데 하나를 짝에게 직접 말해 준다.' },
      wrap: {
        teacher: '"이런 친구에게는 어떤 말을 건넬까요?" 장면마다 말 카드를 이은 뒤 반 전체가 따라 말한다. "그만해"를 혼자 있는 친구에게 놓은 학생에게 "그만해는 누구에게 하는 말일까요? 혼자인 친구에게는요?"라고 묻는다. 출구 2번에서 "나와 상관없어요"를 고른 학생에게 "보고 있는 우리가 멈출 수 있어요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { words: [{ en: '같이 놀자', ko: '혼자 서 있는 친구' }, { en: '괜찮아?', ko: '울고 있는 친구' }, { en: '그만해', ko: '친구를 놀리는 친구' }] }, prompt: '친구에게 건넬 말을 이어요.', target: { match: { '같이 놀자': '같이 놀자', '괜찮아?': '괜찮아?', 그만해: '그만해' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '놀림을 보고만 있으면요?', options: ['나와 상관없어요', '놀림이 계속돼요'], answer: 1, difficulty: 0.1, explain: '보고만 있으면 놀림이 계속돼요. "그만해!" 하거나 선생님께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '친구에게 건네는 말',
        items: [
          { type: 'blank', prompt: '혼자인 친구에게 할 말을 써요.', text: '같이 ___!', answer: '놀자' },
          { type: 'draw', prompt: '친구에게 손을 내미는 모습을 그려요.' },
        ],
      },
    }),
    TEASE({
      id: 'saf-violence.e12.stop-teasing.wrap.vote-graph', type: 'wrap', title: '우리 반 좋은 말 그림그래프',
      method: '우리 반이 고른 좋은 말 그림그래프 만들기', tool: 'chart', minutes: 7,
      levels: { easy: '교사가 표의 수를 하나씩 읽어 주고 함께 그림을 채운다.', base: '표를 보고 좋은 말 세 가지의 그림그래프를 스스로 채운다.', challenge: '그래프를 채운 뒤 가장 많은 말과 가장 적은 말을 함께 찾는다.' },
      wrap: {
        teacher: '"우리 반이 듣고 싶은 좋은 말을 골랐대요. 이 표는 수업을 위해 만든 가상의 우리 반이에요." 표의 수만큼 그림을 채운 뒤 별을 손가락으로 함께 센다. 출구 2번에서 가장 많은 말을 다 같이 소리 내어 말하고, 오늘 집에 가기 전에 친구 한 명에게 그 말을 건네 보자고 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'build', title: '우리 반이 고른 좋은 말(가상)', unit: '명', data: [['같이 놀자', 5], ['괜찮아?', 3], ['고마워', 4]], icons: [{ value: 1, name: '1명' }], icon: 'star' }, prompt: '표를 보고 그림그래프를 채워요.', target: { build: true }, difficulty: 0.15 },
          { type: 'choice', prompt: '가장 많이 고른 말은?', options: ['같이 놀자', '괜찮아?', '고마워'], answer: 0, difficulty: 0.1, explain: '별이 다섯 개인 "같이 놀자"가 가장 많아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반 좋은 말',
        items: [
          { type: 'check', prompt: '내가 친구에게 건넬 말에 ✓ 해요.', options: ['같이 놀자', '괜찮아?', '고마워', '그만해'] },
          { type: 'draw', prompt: '좋은 말을 건네는 내 모습을 그려요.' },
        ],
      },
      notes: '그래프 수는 수업용 가상 자료다. 실제 반에서 붙임딱지로 조사하면 그 수로 바꿔 쓴다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 아프게 하면 알려요 (아동학대 예방 — 장면은 가상의 동물 가족, 자세히 그리지 않는다)
  const HOME = MOD('saf-violence.e12.safe-home', [2]);
  const CARE = ['아끼는 행동', '아프게 하는 행동'];
  const TOWN = [{ name: '학교', icon: 'school', at: [0, 0] }, { name: '지구대', icon: 'police', at: [3, 0] }, { name: '이웃집', icon: 'house', at: [0, 2] }, { name: '놀이터', icon: 'park', at: [3, 2] }];
  const TOWN_MORE = [{ name: '빈 공터', icon: 'dot', at: [1, 1] }, { name: '도서관', icon: 'library', at: [2, 1] }];
  const T_HOME = [
    HOME({
      id: 'saf-violence.e12.safe-home.intro.bear-family', type: 'intro', title: '어린이를 아끼는 곰 가족',
      method: '어린이를 아끼는 집 그림 이야기', tool: 'story', minutes: 6,
      levels: { easy: '교사가 장면 두 개(밥 차려 줘요·혼자 오래 둬요)만 보여 주고 아끼는 장면을 함께 고른다.', base: '장면 세 개 가운데 아끼는 장면을 시연과 함께 고른다.', challenge: '장면 네 개 가운데 아끼는 장면을 모두 찾아 말한다.' },
      intro: {
        teacher: '"곰 가족 이야기를 들어 볼까요? 아빠 곰은 밥을 차려 주고, 엄마 곰은 책을 읽어 주고, 꼭 안아 줘요." 그림을 보여 주고 시연 단추로 아끼는 장면이 바구니에 담기는 모습을 보여 준다. 우리 집 이야기를 하게 하지 않고 곰 가족 이야기로만 나눈다. "혼자 있는 건 씩씩한 거예요"라는 말이 나오면 "어린 곰이 밤에 오래 혼자 있으면 배고프거나 무서울 때 누가 도와줄까요?"라고 되묻는다. 어린이는 누구나 아낌과 돌봄을 받아야 한다고 밝힌다.',
        student: '곰 가족 그림에서 아기 곰을 아끼는 장면을 손으로 가리켜 보아요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '아끼는 장면', cards: [C('meal', '밥 차려 줘요'), C('book', '책 읽어 줘요'), C('alone', '혼자 오래 둬요'), C('hug', '안아 줘요')], shuffle: false }, sequence: [{ pick: ['meal', 'book', 'hug'] }] },
        art: { draw: 'a cozy paper bear family at home: a parent bear setting a warm meal on the table, another reading a picture book, and the baby bear being hugged', banner: '어린이는 아낌을 받아요', extra: [{ motif: 'house', x: 300, y: 96 }] },
      },
    }),
    HOME({
      id: 'saf-violence.e12.safe-home.intro.needs-check', type: 'intro', title: '어린이에게 꼭 필요한 것',
      method: '어린이에게 꼭 필요한 것 표시', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 세 가지(밥·잠·씻기)만 읽어 주고 함께 표시한다.', base: '다섯 가지를 시연과 함께 표시하며 까닭을 말한다.', challenge: '"장난감 많이"처럼 꼭 필요하지는 않은 것이 왜 다른지 말한다.' },
      intro: {
        teacher: '"어린이가 건강하게 자라려면 꼭 필요한 것은 무엇일까요?" 그림 목록을 하나씩 읽고 시연 단추로 꼭 필요한 것에 표시되는 모습을 보여 준다. "장난감이 많아야 해요"라는 말이 나오면 "장난감은 있으면 즐겁지만, 밥과 잠처럼 없으면 몸이 아픈 것일까요?"라고 되묻는다. 밥, 잠, 씻기, 아플 때 병원, 안아 주기는 모든 어린이가 받아야 하는 돌봄이라고 밝힌다.',
        student: '어린이에게 꼭 필요한 것을 선생님과 함께 손가락으로 세어 보아요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '어린이에게 꼭 필요해요', items: [C('rice', '밥'), C('sleep', '잠'), C('wash', '씻기'), C('toys', '장난감 많이'), C('doctor', '아플 때 병원'), C('hug', '안아 주기')] }, sequence: [{ checklist: ['rice', 'sleep', 'wash', 'doctor', 'hug'] }] },
        art: { draw: 'paper icons arranged in a circle around a small paper child: a rice bowl, a bed with a moon, a bathtub, a doctor bag and two arms hugging', banner: '꼭 필요한 돌봄' },
      },
    }),
    HOME({
      id: 'saf-violence.e12.safe-home.activity.care-sort', type: 'activity', title: '아끼는 행동·아프게 하는 행동',
      method: '아끼는 행동·아프게 하는 행동 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 바로 되돌아온다.', base: '가상의 동물 가족 카드 6장을 아끼는 행동·아프게 하는 행동 두 칸에 나눈다.', challenge: '"바로 알려요" 칸(내가 할 일)이 하나 더 생겨 카드 8장을 세 칸에 나눈다.' },
      activity: {
        title: '동물 가족 행동 나누기', tool: 'mindmap',
        teacher: '"이 동물 가족 이야기는 지어낸 이야기예요. 이 행동은 아기를 아끼는 행동일까요, 아프게 하는 행동일까요?" 카드를 놓을 때마다 아기 동물 마음을 한 낱말로 말하게 한다. "말을 안 들어서 맞은 거예요"라는 학생에게 "말을 안 들었을 때도 어른이 때리거나 겁주면 될까요? 어린이를 아프게 하는 건 어떤 까닭이어도 안 돼요"라고 말해 준다. 도전 칸에서는 아프게 하는 일이 있으면 어린이가 할 일은 믿을 어른이나 112에 알리는 것이라고 짚는다.',
        task: '동물 가족 카드를 칸에 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT23(CARE, '바로 알려요', '토끼네 행동을 나누어요.', '토끼네', ['안아 주기', '밥 차려 주기', '아플 때 병원'], ['때리기', '밥을 안 줌', '큰 소리 겁주기'], ['선생님께 말하기', '112에 알리기'], 0.1),
          SORT23(CARE, '바로 알려요', '다람쥐네 행동을 나누어요.', '다람쥐네', ['씻겨 주기', '책 읽어 주기', '칭찬하기'], ['혼자 오래 두기', '물건 던지기', '못 자게 하기'], ['믿는 어른께', '이웃 어른께'], 0.15),
          SORT23(CARE, '바로 알려요', '너구리네 행동을 나누어요.', '너구리네', ['다친 곳 약', '함께 놀기', '잘 자 인사'], ['세게 꼬집기', '안 씻겨 줌', '계속 욕하기'], ['보건 선생님께', '담임 선생님께'], 0.2, { conclude: '어떤 까닭이어도 어린이를 아프게 하면 안 돼요. 그런 일은 믿을 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '아끼면 ○, 아프게 하면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['안아 주기', ''], ['큰 소리 겁주기', ''], ['책 읽어 주기', ''], ['밥을 안 줌', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '아끼는 행동에 ○ 해요.', options: ['안아 주기', '때리기'], answer: '안아 주기' }] },
      notes: '동물 가족은 지어낸 이야기라고 처음에 밝힌다. 학생 집 이야기를 묻지 않는다. 걱정되는 말을 하는 학생은 그 자리에서 캐묻지 않고 받은 뒤 학교의 아동학대 대응 절차를 따른다.',
    }),
    HOME({
      id: 'saf-violence.e12.safe-home.activity.not-your-fault', type: 'activity', title: '"네 잘못이 아니야" 듣기',
      method: "그림 속 친구 마음 고르고 '네 잘못 아니야' 듣기", tool: 'emotion', minutes: 13,
      levels: { easy: '1번은 기분 카드 2장 가운데 하나를 고르고, 놓으면 바로 맞는지 알려 준다.', base: '1번은 기분 카드 4장 가운데 아기 토끼 마음을 모두 고르고, 2·3번은 선생님의 말과 해 줄 말을 고른다.', challenge: '3번에 "네가 참아" 같은 헷갈리는 말 카드가 한 장 더 섞인다.' },
      activity: {
        title: '아기 토끼 마음과 해 줄 말', tool: 'emotion',
        teacher: '"아기 토끼는 집에서 무서운 일이 있었대요. 어떤 일인지는 몰라도 괜찮아요. 아기 토끼 마음은 어떨까요?" 장면은 이 한 문장으로만 말하고 더 묻지 않는다. 마음을 고른 뒤 교사가 그림 속 선생님 목소리로 "네 잘못이 아니야. 말해 줘서 고마워"라고 반 전체에게 천천히 들려준다. "아기 토끼가 뭘 잘못했나 봐요"라는 학생에게 "어린이를 아프게 하거나 무섭게 하는 건 그렇게 한 어른의 잘못이에요. 아기 토끼 잘못이 아니에요"라고 말해 준다.',
        task: '아기 토끼 마음과 해 줄 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '아기 토끼 마음을 골라요.', toolOptions: { mode: 'pick', basket: '아기 토끼 마음', cards: ['무서움', '기쁨', '슬픔', '신남'] }, target: { pick: ['무서움', '슬픔'] }, difficulty: 0.1,
            levels: { easy: { prompt: '아기 토끼 마음을 하나 골라요.', toolOptions: { cards: ['무서움', '기쁨'] }, target: { pick: ['무서움'] } } } },
          { prompt: '선생님이 한 말을 골라요.', toolOptions: { mode: 'pick', basket: '선생님이 한 말', cards: [C('notyou', '네 잘못이 아니야'), C('yours', '네가 잘못했지'), C('thanks', '말해 줘서 고마워')] }, target: { pick: ['notyou', 'thanks'] }, difficulty: 0.15,
            hints: ['아기 토끼 마음이 놓이는 말을 떠올려요.', '아기 토끼를 탓하는 말은 빼요.', '잘못이 아니야·고마워 두 장이에요.'] },
          { prompt: '아기 토끼에게 할 말을 골라요.', toolOptions: { mode: 'pick', basket: '해 줄 말', cards: [C('help', '도와줄게'), C('hush', '비밀로 해'), C('go', '같이 가자')] }, target: { pick: ['help', 'go'] }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { cards: [C('help', '도와줄게'), C('hush', '비밀로 해'), C('go', '같이 가자'), C('endure', '네가 참아')] } } },
            conclude: '어린이를 아프게 하는 건 어린이 잘못이 아니에요. 말해 주면 어른이 도와줘요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '선생님이 해 준 말을 써요.', text: '네 ___이 아니야.', answer: '잘못' }] },
      notes: '무서운 일이 무엇인지 그리거나 말하지 않는다. "네 잘못이 아니야"를 반 전체에게 들려주는 데 이 활동의 무게를 둔다.',
    }),
    HOME({
      id: 'saf-violence.e12.safe-home.activity.help-map', type: 'activity', title: '동네 지도에 도움 받을 곳',
      method: '동네 그림 지도에 도움 받을 곳 핀', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다.', base: '장소 네 곳(학교·지구대·이웃집·놀이터) 가운데 알맞은 곳에 꽂는다.', challenge: '빈 공터·도서관까지 여섯 곳이 있는 지도에서 꽂고, 그곳에서 누구를 찾을지 말한다.' },
      activity: {
        title: '동네에서 도움 받을 곳 꽂기', tool: 'map',
        teacher: '"무섭거나 아픈 일이 있을 때 우리 동네 어디에서 도움을 청할 수 있을까요?" 핀을 꽂기 전에 그곳에서 누구를 찾을지(경찰관·선생님·아는 이웃 어른) 먼저 말하게 한다. 빈 공터나 놀이터에 꽂는 학생에게 "그곳에는 늘 도와줄 어른이 있을까요?"라고 묻는다. 우리 학교 가까운 지구대가 어디인지 교사가 말로 알려 준다.',
        task: '도움 받을 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('경찰관이 있는 곳에 꽂아요.', TOWN, TOWN_MORE, '지구대', 0.1),
          PIN('선생님이 계신 곳에 꽂아요.', TOWN, TOWN_MORE, '학교', 0.15),
          PIN('아는 이웃 어른 집에 꽂아요.', TOWN, TOWN_MORE, '이웃집', 0.2, { conclude: '지구대의 경찰관, 학교 선생님, 아는 이웃 어른께 도움을 청해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '경찰관이 있는 곳에 ○ 해요.', options: ['지구대', '놀이터', '빈 공터'], answer: '지구대' }] },
      notes: '학생 집 주소·위치를 지도에 적게 하지 않는다. 그림 동네로만 다룬다.',
    }),
    HOME({
      id: 'saf-violence.e12.safe-home.activity.friend-secret', type: 'activity', title: '갈림길: 친구가 아픈 일을 말해요',
      method: '친구가 아픈 일을 말할 때 갈림길', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번 — 선생님께 함께 가는 끝).', challenge: '갈림 2번을 지나 끝에서 왜 알리면 좋은지 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '친구의 아픈 비밀을 들으면?', tool: 'dilemma',
        teacher: '"친구가 \'집에서 아파, 비밀이야\'라고 말해요. 나는 어떻게 할까요?" 장면은 이 말까지만 읽는다. 고르기 전에 "친구를 지키는 비밀과 친구를 아프게 두는 비밀"을 함께 견주어 본다. "비밀을 지켜야 좋은 친구예요"라는 학생에게 "친구가 계속 아프면 그 비밀은 친구를 지켜 줄까요?"라고 묻는다. 친구 이야기는 여기저기 말하지 않고 믿을 어른께만 알리며, 친구 곁에 있어 주는 것이 도움이라는 점을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('친구가 아픈 비밀을 말해요. 골라요.', { text: '친구가 "집에서 아파, 비밀이야" 해요.', motif: 'house', choices: [
            { id: 'keep', text: '비밀로 지켜요', result: '친구는 계속 혼자 아파요.', why: '친구를 돕는 길은 믿을 어른께 알리는 거예요.' },
            { id: 'listen', text: '들어 주고 "같이 가자" 해요', result: '친구가 "혼날까 봐 무서워" 해요.', easyEnding: '친구와 함께 선생님께 갔어요.', next: { text: '친구가 무섭대요. 어떻게 해요?', choices: [
              { id: 'together', text: '"네 잘못 아니야" 하고 같이 가요', result: '선생님이 "말해 줘서 고마워" 하셨어요.', ending: '선생님이 친구를 도와주기 시작했어요.' },
              { id: 'alone', text: '"혼자 가 봐" 해요', result: '친구가 무서워서 못 갔어요.', why: '무서운 친구 곁에 함께 있어 줘요.' }] } }] },
          ['listen', 'together'], [{ id: 'adult', text: '어른이 도울 수 있어요' }, { id: 'promise', text: '약속은 꼭 지켜야 해서요', why: '이런 비밀은 알려도 돼요. 친구를 지키는 일이에요.' }, { id: 'gossip', text: '다른 친구에게도 말해요', why: '여기저기 말하지 않고 믿을 어른께만 알려요.' }], 'adult', 0.15),
          DILEMMA('친구가 밥을 못 먹었대요. 골라요.', { text: '친구가 "어제부터 밥을 못 먹었어" 해요.', motif: 'house', choices: [
            { id: 'snack', text: '내 간식만 줘요', result: '오늘은 먹었지만 내일이 걱정돼요.', why: '간식도 좋지만 어른이 알아야 계속 도울 수 있어요.' },
            { id: 'teacher', text: '선생님께 같이 가요', result: '친구가 "말해도 될까?" 해요.', easyEnding: '선생님이 친구를 꼭 챙겨 주셨어요.', next: { text: '친구가 망설여요. 어떻게 해요?', choices: [
              { id: 'okay', text: '"말해도 괜찮아" 손잡아요', result: '친구가 선생님께 말했어요.', ending: '선생님이 친구를 돕기 시작했어요.' },
              { id: 'drop', text: '"그럼 말지 뭐" 해요', result: '친구는 계속 배고플 수 있어요.', why: '친구가 망설이면 곁에서 용기를 줘요.' }] } }] },
          ['teacher', 'okay'], [{ id: 'care', text: '어린이는 돌봄을 받아야 해요' }, { id: 'shame', text: '친구가 창피할까 봐서요', why: '돌봄을 못 받는 건 친구 잘못이 아니에요.' }, { id: 'none', text: '내 일이 아니라서요', why: '친구 일을 믿을 어른께 알리는 것도 돕는 거예요.' }], 'care', 0.2),
          DILEMMA('동생이 집이 무섭대요. 골라요.', { text: '친구 동생이 "집이 무서워" 하며 울어요.', motif: 'house', choices: [
            { id: 'laugh', text: '"겁쟁이야" 놀려요', result: '동생이 더 크게 울어요.', why: '무서운 마음을 놀리지 않아요.' },
            { id: 'comfort', text: '"괜찮아?" 하고 곁에 있어요', result: '동생이 조금 울음을 그쳤어요.', easyEnding: '같이 선생님께 가서 말했어요.', next: { text: '동생이 아직 무섭대요. 어떻게 해요?', choices: [
              { id: 'adult', text: '믿을 어른께 같이 가요', result: '선생님이 동생을 안아 주셨어요.', ending: '어른이 알아서 동생을 도울 수 있어요.' },
              { id: 'home', text: '"집에 가면 괜찮아" 해요', result: '동생은 계속 무서워요.', why: '무섭다는 말은 믿을 어른께 꼭 전해요.' }] } }] },
          ['comfort', 'adult'], [{ id: 'safe', text: '무서운 마음은 알려야 해요' }, { id: 'baby', text: '동생이 어려서 그래요', why: '어려도 무섭다는 말은 소중해요. 알려요.' }, { id: 'family', text: '집 일은 말하면 안 돼서요', why: '아프거나 무서운 집 일은 믿을 어른께 말해도 돼요.' }], 'safe', 0.25, { conclude: '친구가 아프거나 무섭다고 하면 곁에 있어 주고, 믿을 어른께 함께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 아픈 비밀을 말하면?', options: ['믿을 어른께 같이 가요', '꼭 비밀로 해요'], answer: '믿을 어른께 같이 가요' }] },
      notes: '친구의 일을 소문내지 않고 믿을 어른께만 알린다는 점을 꼭 덧붙인다. 장면은 한 문장으로만 말한다.',
    }),
    HOME({
      id: 'saf-violence.e12.safe-home.wrap.call-112', type: 'wrap', title: '112 전화 차례 따라 하기',
      method: '112 전화 3단계 따라 하기', tool: 'timer', minutes: 7,
      levels: { easy: '교사가 카드 두 장(1·1·2 눌러요·어디인지 말해요)을 먼저 보이고 함께 따라 한다.', base: '카드 세 장의 차례를 맞추고 장난감 전화로 따라 한다.', challenge: '세 장을 맞춘 뒤 "도와주세요, 여기는 ○○ 앞이에요"까지 말해 본다.' },
      wrap: {
        teacher: '"급하고 위험한데 가까이 어른이 없을 때 112를 눌러요." 장난감 전화(또는 손 전화 모양)로 1·1·2를 누르고, 어디인지 말하고, 끊지 않고 기다리는 차례를 보인 뒤 반 전체가 따라 한다. 실제 전화로는 걸지 않고, 장난 전화를 하면 정말 급한 사람이 도움을 못 받는다는 점을 말해 준다. 출구 2번에서 "심심할 때"를 고른 학생에게 112는 위험할 때만 누르는 번호라고 짚어 준다.',
        exitTicket: [
          CHANT('112 전화 차례', ['1·1·2 눌러요', '어디인지 말해요', '끊지 말고 기다려요'], '112 전화 차례를 놓아요.'),
          { type: 'choice', prompt: '112는 언제 눌러요?', options: ['급하고 위험할 때', '심심할 때'], answer: 0, difficulty: 0.1, explain: '112는 급하고 위험할 때만 눌러요. 장난 전화는 하지 않아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '급하고 위험하면 112',
        items: [
          { type: 'blank', prompt: '급하고 위험할 때 누르는 번호를 써요.', text: '___', answer: '112' },
          { type: 'draw', prompt: '장난감 전화로 112에 거는 모습을 그려요.' },
        ],
        easy: { note: '"1·1·2, 어디인지 말해요, 기다려요"를 떠올려요.', items: [{ type: 'draw', prompt: '전화기를 그려요.' }] },
      },
      notes: '실제 전화로 112를 누르지 않는다. 장난감 전화나 손 모양으로만 연습한다.',
    }),
    HOME({
      id: 'saf-violence.e12.safe-home.wrap.trusted-cards', type: 'wrap', title: '내가 알릴 믿을 어른 카드',
      method: '믿을 어른 카드 고르기', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 카드 두 장(담임 선생님·경찰 112)을 읽어 주고 함께 담는다.', base: '카드 4장 가운데 내가 알릴 어른 세 장을 담는다.', challenge: '담은 어른 가운데 한 명을 골라 "선생님, 말할 게 있어요"를 따라 말한다.' },
      wrap: {
        teacher: '"무섭거나 아픈 일이 있으면 누구에게 알릴까요?" 카드를 담을 때마다 그 어른이 어디 계신지 함께 말한다. "모르는 사람"을 담은 학생에게 "모르는 사람보다 먼저 찾을 믿을 어른은 누구일까요?"라고 묻는다. 마지막에 반 전체가 "선생님, 말할 게 있어요"를 한 번 따라 말하며, 언제든 이렇게 말을 걸어도 된다고 알려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '내가 알릴 어른', cards: ['담임 선생님', '모르는 사람', '보건 선생님', '경찰 112'] }, prompt: '내가 알릴 어른을 담아요.', target: { pick: ['담임 선생님', '보건 선생님', '경찰 112'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '어른이 아프게 하는 건 누구 잘못?', options: ['아프게 한 어른', '어린이'], answer: 0, difficulty: 0.1, explain: '어린이를 아프게 하는 건 그렇게 한 어른의 잘못이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내가 알릴 믿을 어른',
        items: [
          { type: 'check', prompt: '내가 알릴 어른에 ✓ 해요.', options: ['담임 선생님', '보건 선생님', '경찰관(112)', '믿는 가족 어른'] },
          { type: 'blank', prompt: '믿을 어른께 할 말을 써요.', text: '선생님, ___ 게 있어요.', answer: '말할' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 나도 소중, 너도 소중 (생명존중 — 마음 돌봄과 도움 요청만 다룬다)
  const LIFE = MOD('saf-violence.e12.life-precious', [2]);
  const WEATHER = [C('sun', '맑음', { motif: 'sun' }), C('cloud', '흐림', { motif: 'cloud' }), C('rain', '비', { motif: 'rain' })];
  // 마음 날씨 잇기(emotion match): 기본 장면 3(속상한 두 장면은 흐림·비 어느 쪽이든), 쉬움 장면 2, 도전 날씨가 바뀌는 차례(order)
  const SKY = (prompt, sl, change, from, d, more) => {
    const slots = sl.map(([id, label]) => ({ id, label }));
    return {
      prompt, toolOptions: { mode: 'match', slots, cards: [WEATHER[1], WEATHER[0], WEATHER[2]] }, target: { match: { [sl[0][0]]: 'sun', [sl[1][0]]: ['cloud', 'rain'], [sl[2][0]]: ['rain', 'cloud'] } }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(두 장면).`, toolOptions: { slots: [slots[0], slots[1]], cards: [WEATHER[1], WEATHER[0]] }, target: { match: { [sl[0][0]]: 'sun', [sl[1][0]]: 'cloud' } } },
        challenge: { prompt: change, toolOptions: { mode: 'order', slots: ['처음', '나중'], cards: [WEATHER[0], WEATHER[from === 'rain' ? 2 : 1]] }, target: { order: [from, 'sun'] } },
      },
      ...more,
    };
  };
  const T_LIFE = [
    LIFE({
      id: 'saf-violence.e12.life-precious.intro.seed-grow', type: 'intro', title: '씨앗이 자라는 차례',
      method: '씨앗이 자라는 차례 보기', tool: 'lifecycle', minutes: 6,
      levels: { easy: '교사가 씨앗과 꽃 두 장면만 보여 주고 무엇이 먼저인지 함께 말한다.', base: '씨앗 → 새싹 → 꽃 세 장면이 놓이는 시연을 보고 차례를 따라 말한다.', challenge: '세 장면을 본 뒤 씨앗이 자라는 데 꼭 필요한 것(물·햇빛)을 말한다.' },
      intro: {
        teacher: '"작은 씨앗이 꽃이 되려면 어떤 차례로 자랄까요?" 시연 단추로 씨앗 → 새싹 → 꽃이 놓이는 모습을 보여 준다. "물을 주고 햇빛을 받으면 자라요. 우리도 밥을 먹고, 잠을 자고, 사랑을 받으며 자라요"라고 이어 말한다. "작은 풀은 밟아도 돼요"라는 말이 나오면 "작은 풀도 씨앗에서 자란 소중한 생명이에요. 나도, 친구도, 풀 한 포기도 소중해요"라고 되묻듯 답한다.',
        student: '씨앗에서 꽃이 되는 차례를 손으로 쪼그렸다 펴며 따라 해 보아요.',
        demo: { tool: 'lifecycle', options: { center: '씨앗이 자라요', cycle: false, cards: [C('flower', '꽃', { motif: 'flower' }), C('seed', '씨앗', { motif: 'seed' }), C('sprout', '새싹', { motif: 'sprout' })] }, sequence: [{ order: ['seed', 'sprout', 'flower'] }] },
        art: { draw: 'a row of paper flower pots showing a seed in soil, a small green sprout and a bright flower, with a paper sun and water drops above', banner: '모든 생명은 소중해요', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    LIFE({
      id: 'saf-violence.e12.life-precious.intro.flower-breath', type: 'intro', title: '꽃 냄새·촛불 숨쉬기',
      method: '꽃 냄새·촛불 숨쉬기 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사를 따라 꽃 냄새·촛불 숨쉬기를 두 번 한다.', base: '타이머가 세 번으로 맞춰지는 시연을 보고 타이머에 맞춰 세 번 따라 한다.', challenge: '세 번 한 뒤 지금 마음을 날씨(맑음·흐림·비) 가운데 하나로 말한다.' },
      intro: {
        teacher: '"코로 꽃 냄새를 맡듯 천천히 들이쉬고, 입으로 촛불을 끄듯 후— 내쉬어요." 시연 단추로 타이머가 세 번으로 맞춰지는 모습을 보이고, 시작을 누르면 운동 칸에 들이쉬고 쉬기 칸에 내쉰다(초 값은 우리 반 약속). 숨을 너무 세게 쉬는 학생에게 "촛불이 살랑 흔들릴 만큼만 천천히 해 봐요"라고 말해 준다. 마음이 힘들 때 몸을 먼저 편하게 하는 방법이라고 밝힌다.',
        student: '꽃 냄새 맡듯 들이쉬고 촛불 끄듯 내쉬기를 세 번 따라 해 보아요.',
        demo: { tool: 'timer', options: { title: '꽃·촛불 숨쉬기(우리 반 약속)', plan: { work: 5, rest: 5, rounds: 1 } }, sequence: [{ plan: { rounds: 3 } }] },
        art: { draw: 'a paper child holding a paper flower close to the nose and then gently blowing toward a paper candle, soft swirls of breath cut from paper', banner: '후— 천천히', extra: [{ motif: 'flower', x: 300, y: 222 }] },
      },
      notes: '타이머 초 값은 숨쉬기 연습용 우리 반 약속이다. 숨을 참게 하지 않는다.',
    }),
    LIFE({
      id: 'saf-violence.e12.life-precious.activity.mind-weather', type: 'activity', title: '마음 날씨 그림 고르기',
      method: '마음 날씨 그림 고르기', tool: 'emotion', minutes: 14,
      levels: { easy: '장면 2개에 날씨 카드 2장을 잇고, 놓으면 바로 맞는지 알려 준다.', base: '장면 3개에 맑음·흐림·비 카드를 잇는다(속상한 장면은 흐림·비 어느 쪽도 맞다).', challenge: '마음 날씨가 바뀌는 장면을 듣고 처음·나중 날씨를 차례대로 놓는다.' },
      activity: {
        title: '그림 친구들의 마음 날씨', tool: 'emotion',
        teacher: '"그림 속 친구 마음에 날씨를 붙인다면 어떤 날씨일까요?" 카드를 놓을 때마다 그 날씨를 몸으로 흉내 낸다(맑음은 두 팔 활짝, 비는 손가락 빗방울). "슬픈 마음은 숨겨야 해요"라는 학생에게 "비 오는 날이 있어야 꽃이 자라듯, 슬픈 마음도 생길 수 있어요. 숨기지 않고 말하면 날씨가 바뀌기도 해요"라고 말해 준다. 마음 날씨는 계속 바뀌고, 흐린 날에는 도움을 청해도 된다는 점을 짚는다.',
        task: '장면마다 마음 날씨를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SKY('친구들 마음 날씨를 이어요.', [['newf', '새 친구를 사귐'], ['lose', '시합에서 졌어요'], ['sick', '강아지가 아파요']], '졌지만 친구가 안아 줬어요. 날씨를 차례로 놓아요.', 'rain', 0.1),
          SKY('놀이 시간 마음 날씨를 이어요.', [['gift', '선물을 받았어요'], ['fight', '친구와 다퉜어요'], ['lost', '장난감을 잃었어요']], '다퉜지만 화해했어요. 날씨를 차례로 놓아요.', 'cloud', 0.15),
          SKY('하루 동안 마음 날씨를 이어요.', [['praise', '칭찬을 들었어요'], ['alone', '혼자 남았어요'], ['move', '친구가 이사 가요']], '혼자였는데 같이 놀았어요. 날씨를 차례로 놓아요.', 'cloud', 0.2, { conclude: '마음 날씨는 바뀌어요. 흐린 날에는 숨기지 말고 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '슬픈 마음이 들면?', options: ['말해도 돼요', '꼭 숨겨요'], answer: '말해도 돼요' }] },
      notes: '그림 속 친구의 마음 날씨만 다룬다. 학생 자신의 슬픈 일을 꺼내게 하지 않는다.',
    }),
    LIFE({
      id: 'saf-violence.e12.life-precious.activity.body-care', type: 'activity', title: '힘든 마음이 느껴지는 몸',
      method: '힘든 마음이 느껴지는 몸 짚고 돌보기', tool: 'body', minutes: 13,
      levels: { easy: '그림 친구가 말한 한 곳을 고르고, 고르면 이름이 바로 보인다.', base: '그림 친구가 말한 두 곳을 고르고, 셋째 문항에서 돌보는 방법을 고른다.', challenge: '헷갈리는 부위가 더 있는 몸에서 두 곳을 고르고 돌보는 방법을 고른다.' },
      activity: {
        title: '그림 친구 몸 신호 짚기', tool: 'body',
        teacher: '"그림 속 친구가 속상한 일이 있은 뒤 배가 아프고 가슴이 답답하대요. 어디일까요?" 종이 몸을 짚기 전에 자기 배와 가슴에 손을 살짝 얹어 보게 한다. "아픈 건 꾹 참아야 씩씩해요"라는 학생에게 "몸이 보내는 신호를 알아채고 돌보는 게 진짜 씩씩한 거예요"라고 말해 준다. 신호가 오면 숨 쉬고, 쉬고, 믿을 어른께 말한다는 점을 짚는다.',
        task: '그림 친구가 말한 곳을 짚고 돌보는 법을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '친구가 배와 가슴이 답답해요. 짚어요.', toolOptions: { mode: 'parts', parts: ['가슴', '배', '무릎', '발목'] }, target: { parts: ['가슴', '배'] }, difficulty: 0.1,
            hints: ['친구가 말한 곳을 떠올려요.', '몸 가운데 앞쪽 두 곳이에요.', '가슴과 배를 골라요.'],
            levels: { easy: { prompt: '친구가 배가 아파요. 짚어요.', target: { parts: ['배'] } }, challenge: { toolOptions: { parts: ['어깨', '가슴', '허리', '배', '무릎', '발목'] } } } },
          { prompt: '친구가 목이 메고 가슴이 쿵쿵해요.', toolOptions: { mode: 'parts', parts: ['목', '가슴', '팔꿈치', '무릎'] }, target: { parts: ['목', '가슴'] }, difficulty: 0.15,
            hints: ['친구가 말한 곳을 떠올려요.', '말이 나오는 곳과 심장이 뛰는 곳이에요.', '목과 가슴을 골라요.'],
            levels: { easy: { prompt: '친구 가슴이 쿵쿵해요. 짚어요.', target: { parts: ['가슴'] } }, challenge: { toolOptions: { parts: ['귀', '목', '어깨', '가슴', '팔꿈치', '무릎'] } } } },
          { prompt: '몸과 마음을 돌보는 법을 골라요.', toolOptions: { mode: 'parts', parts: ['목', '가슴', '배'], readOnly: true, ask: { q: '몸 신호가 와요. 어떻게 해요?', choices: ['숨 쉬고 어른께 말해요', '혼자 꾹 참아요', '밥을 굶어요'] } }, target: { pick: 0 }, difficulty: 0.2,
            conclude: '마음이 힘들면 몸도 신호를 보내요. 숨 쉬고, 쉬고, 믿을 어른께 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '몸 신호가 오면 무엇을 해요?', options: ['어른께 말해요', '꾹 참아요'], answer: '어른께 말해요' }] },
      notes: '종이 몸에 머리 칸이 없어 계획의 "배·머리·가슴" 대신 배·가슴·목을 쓴다. 머리가 아픈 신호는 교사가 말로 덧붙인다. 그림 친구의 몸으로만 이야기한다.',
    }),
    LIFE({
      id: 'saf-violence.e12.life-precious.activity.sad-day', type: 'activity', title: '"마음이 힘들어요" 말한 펭귄',
      method: '슬픈 날 말한 친구 그림 이야기', tool: 'story', minutes: 14,
      levels: { easy: '1번은 장면 2개 가운데 마음이 나아진 장면을 고르고, 놓으면 바로 맞는지 알려 준다.', base: '1번은 이야기 3장면을 차례대로 놓고, 2번은 말풍선 빈칸을 채우고, 3번은 해 줄 말을 고른다.', challenge: '카드가 섞여 나오고, 3번에 "울지 마, 참아" 같은 헷갈리는 말 카드가 한 장 더 섞인다.' },
      activity: {
        title: '아기 펭귄의 슬픈 날', tool: 'story',
        teacher: '"아기 펭귄이 슬픈 날 선생님께 \'마음이 힘들어요\'라고 말했대요. 그다음 어떻게 됐을까요?" 무엇 때문에 슬펐는지는 이야기하지 않고 말한 뒤의 장면에 머문다. "울면 약한 거예요"라는 학생에게 "슬플 때 우는 것도, 힘들다고 말하는 것도 괜찮아요. 말하면 함께 마음을 돌볼 수 있어요"라고 말해 준다. 힘든 마음은 혼자 참지 않고 믿을 어른께 말한다는 점을 짚는다.',
        task: '아기 펭귄 이야기를 듣고 장면을 놓고 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '아기 펭귄 이야기를 차례로 놓아요.', toolOptions: { slots: ['먼저', '다음', '끝'], cards: [C('better', '마음이 나아져요'), C('sad', '슬픈 날이에요'), C('say', '힘들다고 말해요')] }, target: { order: ['sad', 'say', 'better'] }, difficulty: 0.1,
            hints: ['아기 펭귄 마음이 처음에 어땠는지 떠올려요.', '말한 다음에 일어난 일을 찾아요.', '슬픈 날 → 힘들다고 말해요 → 나아져요예요.'],
            levels: { easy: { prompt: '마음이 나아진 장면을 골라요.', toolOptions: { mode: 'pick', basket: '나아진 장면', cards: [C('hide', '혼자 숨어요'), C('better', '마음이 나아져요')] }, target: { pick: ['better'] } } } },
          { prompt: '말풍선 빈칸을 채워요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '선생님, 마음이 ___.' }, { id: 'f2', label: '말해 줘서 ___.' }], cards: [C('hard', '힘들어요'), C('thank', '고마워'), C('fine', '몰라')] }, target: { fill: { f1: 'hard', f2: 'thank' } }, difficulty: 0.15,
            hints: ['아기 펭귄이 한 말과 선생님이 한 말을 떠올려요.', '첫 칸은 아기 펭귄 마음이에요.', '힘들어요·고마워를 넣어요.'] },
          { prompt: '아기 펭귄에게 할 말을 골라요.', toolOptions: { mode: 'pick', basket: '해 줄 말', cards: [C('okay', '힘들면 말해도 돼'), C('stay', '같이 있어 줄게'), C('later', '나중에 말해')] }, target: { pick: ['okay', 'stay'] }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { cards: [C('okay', '힘들면 말해도 돼'), C('cry', '울지 마, 참아'), C('stay', '같이 있어 줄게'), C('later', '나중에 말해')] } } },
            conclude: '마음이 힘들면 혼자 참지 않고 "힘들어요"라고 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '아기 펭귄이 한 말을 써요.', text: '선생님, 마음이 ___.', answer: '힘들어요' }] },
    }),
    LIFE({
      id: 'saf-violence.e12.life-precious.activity.care-list', type: 'activity', title: '마음 돌봄 방법 고르기',
      method: '마음 돌봄 방법 고르기', tool: 'kitchen', minutes: 13,
      levels: { easy: '그림 항목 3개 가운데 마음을 돌보는 방법 2개에 표시한다.', base: '항목 4개 가운데 마음을 돌보는 방법 3개에 표시한다.', challenge: '항목 5개에 "밥 안 먹기"처럼 마음을 더 힘들게 하는 함정 항목이 하나 더 섞인다.' },
      activity: {
        title: '마음 돌봄 점검표', tool: 'kitchen',
        teacher: '"마음이 힘들 때 해 볼 수 있는 방법은 무엇일까요?" 항목을 하나씩 읽어 주고, 표시하기 전에 그 방법을 몸으로 흉내 낸다(물 마시는 손, 노래 흥얼거리기). "혼자 숨어 있으면 나아져요"라는 학생에게 "잠깐 쉬는 것도 괜찮아요. 그런데 오래 혼자 있으면 누가 내 마음을 알아줄까요?"라고 묻는다. 여러 방법 가운데 믿을 어른과 이야기하기는 늘 할 수 있는 방법이라고 짚는다.',
        task: '마음을 돌보는 방법에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          LIST('마음이 힘들 때 할 일에 표시해요.', '마음이 힘들 때', [C('water', '물 마시기'), C('draw', '그림 그리기'), C('talk', '어른과 이야기')], C('endure', '혼자 꾹 참기'), C('skip', '밥 안 먹기'), 0.1),
          LIST('화가 날 때 할 일에 표시해요.', '화가 날 때', [C('breath', '숨 크게 쉬기'), C('rest', '잠깐 쉬기'), C('say', '"화나" 말하기')], C('throw', '물건 던지기'), C('bottle', '꾹 참고 숨기기'), 0.15),
          LIST('걱정될 때 할 일에 표시해요.', '걱정될 때', [C('hug', '인형 꼭 안기'), C('sing', '노래 부르기'), C('teacher', '선생님께 말하기')], C('awake', '밤새 안 자기'), C('hide', '혼자 숨어 있기'), 0.2, { conclude: '마음이 힘들면 물 마시고, 숨 쉬고, 믿을 어른과 이야기해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'check', prompt: '내가 해 볼 방법에 ✓ 해요.', options: ['물 마시기', '노래 부르기', '어른과 이야기하기'] }] },
    }),
    LIFE({
      id: 'saf-violence.e12.life-precious.wrap.self-words', type: 'wrap', title: '나에게 해 주는 말',
      method: '나에게 해 주는 말 카드', tool: 'wordcards', minutes: 7,
      levels: { easy: '교사가 말 카드 두 장(나는 소중해·너도 소중해)을 읽어 주고 함께 담는다.', base: '말 카드 4장 가운데 나에게 해 줄 말 세 장을 담고 따라 말한다.', challenge: '담은 뒤 짝에게 "너도 소중해"라고 말해 준다.' },
      wrap: {
        teacher: '"오늘 나에게 해 주고 싶은 말을 바구니에 담아 볼까요?" 카드를 담을 때마다 가슴에 손을 얹고 따라 말한다. "혼자 참아야 해"를 담은 학생에게 "힘든 건 나누면 가벼워져요. 말해도 괜찮아요"라고 말해 준다. 마지막에 짝과 마주 보고 "너도 소중해"를 말하며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '나에게 해 줄 말', cards: ['나는 소중해', '혼자 참아야 해', '너도 소중해', '말해도 괜찮아'] }, prompt: '나에게 해 줄 말을 담아요.', target: { pick: ['나는 소중해', '너도 소중해', '말해도 괜찮아'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '힘든 마음은 어떻게 해요?', options: ['믿을 어른께 말해요', '혼자 참아요'], answer: 0, difficulty: 0.1, explain: '힘든 마음은 혼자 참지 않고 믿을 어른께 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나도 소중, 너도 소중',
        items: [
          { type: 'blank', prompt: '나에게 해 주는 말을 써요.', text: '나는 ___해.', answer: '소중' },
          { type: 'draw', prompt: '가슴에 손을 얹은 내 모습을 그려요.' },
        ],
        easy: { note: '"나는 소중해"를 소리 내어 말해요.', items: [{ type: 'draw', prompt: '웃는 내 얼굴을 그려요.' }] },
      },
    }),
    LIFE({
      id: 'saf-violence.e12.life-precious.wrap.feel-better-graph', type: 'wrap', title: '기분이 좋아지는 방법 그래프',
      method: '기분이 좋아지는 방법 그림그래프 읽기', tool: 'chart', minutes: 7,
      levels: { easy: '교사가 두 줄(노래·산책)만 손가락으로 세며 어느 쪽이 많은지 함께 본다.', base: '세 줄 가운데 가장 많이 고른 방법을 찾는다.', challenge: '가장 많은 방법을 찾은 뒤 가장 적은 방법도 말로 찾는다.' },
      wrap: {
        teacher: '"우리 반 친구들이 기분이 좋아지는 방법을 골랐대요. 이 그래프는 수업을 위해 만든 가상의 우리 반이에요." 별을 함께 세고 가장 많은 방법을 고른다. 출구 2번에서 "아무것도 안 해요"를 고른 학생에게 "오늘 배운 방법 가운데 하나만 골라 해 봐요"라고 말해 준다. 기분이 좋아지는 방법은 사람마다 다르고, 어떤 방법도 안 될 때는 믿을 어른께 말한다는 점을 짚으며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '기분이 좋아지는 방법(가상)', unit: '명', data: [['노래', 6], ['산책', 3], ['이야기하기', 5]], icons: [{ value: 1, name: '1명' }], icon: 'star', question: '가장 많이 고른 방법은?', choices: ['노래', '산책', '이야기하기'] }, prompt: '가장 많이 고른 방법을 찾아요.', target: { pick: 0 }, difficulty: 0.15 },
          { type: 'choice', prompt: '기분이 안 나아지면요?', options: ['아무것도 안 해요', '믿을 어른께 말해요'], answer: 1, difficulty: 0.1, explain: '해 봐도 마음이 힘들면 믿을 어른께 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 기분이 좋아지는 방법',
        items: [
          { type: 'check', prompt: '내가 해 볼 방법에 ✓ 해요.', options: ['노래 부르기', '산책하기', '이야기하기', '그림 그리기'] },
          { type: 'draw', prompt: '기분이 좋아지는 방법을 하는 내 모습을 그려요.' },
        ],
      },
      notes: '그래프 수는 수업용 가상 자료다. 실제 반에서 조사하면 그 수로 바꿔 쓴다.',
    }),
  ];

  PaperLessons.registerModules([].concat(T_BODY, T_FEEL, T_KIND, T_HELP, T_BOUND, T_TEASE, T_HOME, T_LIFE));
})();
