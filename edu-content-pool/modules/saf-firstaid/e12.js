/* 창체 안전교육 응급처치 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-b.json 의 saf-firstaid 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 응급처치
 *   1(응급처치의 상황·의미·신고·조치) · 3(상처의 종류와 응급처치) · 4(일상생활 속 응급처치).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 따라 하기·구호·역할놀이. 장면·인물은 직접 지은 것이다(가명).
 * 주제 2개(1학년 call-help · 2학년 small-wound) × 도입 2 · 활동 4 · 정리 2 = 계획 모듈 16개 전부.
 * 부상·피 장면은 그리거나 자세히 말하지 않는다. 처치는 '어른·119 부르기'가 먼저이고, 학생이 직접 하는 돌봄은 손 씻기·물로 씻기·밴드 덮기·코피 때 고개 숙이기까지만 다룬다.
 * 수치(분·초·회)·법 조항은 쓰지 않는다. 전화번호는 체계도 concepts 의 119 만 쓴다. 실제 주소·전화번호는 화면·활동지에 쓰지 않는다.
 * 심폐소생술·자동제세동기는 이 학년군 주제에 없다. 119 신고 문구는 all_market visual-series cpr-aed/story.md 의
 *   "사람을 콕 집어 119 신고" · "119 상담요원이 전화로 안내해 준다"와 같은 뜻으로 맞췄다(call-help.activity.choose-path·call-play).
 *
 * 사람 확인: 근거 파일(research-safety.md)에는 고시 항목 제목뿐이라 아래 수칙은 일반 응급처치 상식을 옮긴 것이다. 공식 안내처에서 문구를 확인한다.
 *   - call-help 전체: 다치거나 아픈 사람을 보면 직접 고치려 하지 않고 가까운 어른에게 알린다 · 어른이 없고 급하면 119 에 전화한다 · 장난으로 119 에 전화하지 않는다 — 소방청(119 신고 요령)
 *   - call-help.activity.call-play: 119 에 말할 것과 차례(무슨 일 → 있는 곳 → 내 이름) · 또박또박 말하고 묻는 말에 답하며 먼저 끊지 않는다 — 소방청
 *   - call-help.activity.choose-path: 다친 친구를 억지로 일으키지 않고 곁에서 어른을 기다린다 · 집에 어른이 없고 할머니가 쓰러지시면 119 — 소방청·질병관리청
 *   - call-help.activity.ok-no·wrap.promise: 혼자 약을 바르거나 먹이지 않는다 — 식품의약품안전처·질병관리청
 *   - small-wound.activity.wash-order: 까진 상처는 손을 씻고 → 깨끗한 물로 씻고 → 밴드로 덮는다 · 침을 바르지 않는다 · 흙 묻은 손으로 만지지 않는다 — 질병관리청·대한적십자사(응급처치)
 *   - small-wound.activity.wash-order 둘째 문항: 손 씻기 차례(물 묻히기 → 비누칠 → 헹구기) — 질병관리청(손 씻기). 문지르는 시간은 근거에 없어 적지 않았다.
 *   - small-wound.activity.nose-branch: 코피가 나면 고개를 앞으로 숙이고 코를 잡는다 · 뒤로 젖히지 않는다 · 뛰지 않는다 · 어른께 알린다 · 다른 사람의 코피는 어른이 닦는다 — 질병관리청·대한적십자사. 잡는 시간은 적지 않았다.
 *   - small-wound.activity.band-practice: 밴드 붙이는 차례(종이 떼기 → 가운데를 상처에 대기 → 양쪽 붙이기) — 대한적십자사
 *   - small-wound.activity.who-sort: 바로 보건실(어른)에 알릴 신호 — 머리를 부딪힘·어지러움·일어나지 못함·숨이 차서 힘듦·눈이 따가움·배가 많이 아픔·코피가 안 멈춤·열·발목이 부음·걸을 수 없음·토할 것 같음 — 보건교사·질병관리청 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-firstaid', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text) => ({ id, text });
  const OKNO = ['좋아요', '안돼요'];

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
  // 좋아요·안돼요 바구니(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 헷갈리는 안돼요 카드 2장 더(8장)
  const GB = (prompt, ok, no, hard, d, more) => {
    const S = (a, b) => ({ 좋아요: a.map((c) => c.id), 안돼요: b.map((c) => c.id) });
    return {
      prompt, toolOptions: { slots: OKNO, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], hard[0], no[0], ok[1], no[1], hard[1], ok[2], no[2]] }, target: { sort: S(ok, [...no, ...hard]) } },
      },
      ...more,
    };
  };
  // 두 바구니(sortboard): 기본 5장(앞 바구니 3·뒤 바구니 2), 쉬움 3장, 도전 뒤 바구니 카드 2장 더(7장)
  const SB = (prompt, slots, a, b, extra, d, more) => {
    const S = (x, y) => ({ [slots[0]]: x.map((c) => c.id), [slots[1]]: y.map((c) => c.id) });
    return {
      prompt, toolOptions: { slots, cards: [a[0], b[0], a[1], b[1], a[2]] }, target: { sort: S(a, b) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(3장).`, toolOptions: { cards: [a[0], b[0], a[1]] }, target: { sort: S([a[0], a[1]], [b[0]]) } },
        challenge: { prompt: `${cut(prompt)}(7장).`, toolOptions: { cards: [a[0], extra[0], b[0], a[1], b[1], extra[1], a[2]] }, target: { sort: S(a, [...b, ...extra]) } },
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
  // 칸 지도 핀(map): 장소에 핀 하나. 도전은 헷갈리는 장소가 더 있는 지도
  const PIN = (prompt, base, more2, place, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: base, title: '우리 학교' }, target: { place }, difficulty: d,
    levels: { challenge: { toolOptions: { places: [...base, ...more2] } } }, ...more,
  });
  // 장면 고르기(emotion branch): 기본 보기 3개, 쉬움 앞 보기 2개
  const BR = (prompt, situation, choices, ok, d, more) => ({
    prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice: ok }, difficulty: d,
    levels: { easy: { toolOptions: { choices: choices.slice(0, 2) } } }, ...more,
  });
  const STORY3 = (prompt, cards) => ({ type: 'tool', tool: 'story', options: { slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, prompt, target: { order: cards.map((c) => c.id) }, difficulty: 0.1 });

  // =====================================================================================================
  // 1학년 · 아프거나 다친 사람을 보면 어른과 119 부르기
  const CH = MOD('saf-firstaid.e12.call-help', [1]);
  const SCHOOL = [{ name: '교실', icon: 'school', at: [0, 0] }, { name: '보건실', icon: 'hospital', at: [3, 0] }, { name: '교무실', icon: 'office', at: [1, 2] }, { name: '운동장', icon: 'park', at: [3, 2] }, { name: '도서관', icon: 'library', at: [0, 2] }];
  const SCHOOL_MORE = [{ name: '급식실', icon: 'dot', at: [2, 1] }, { name: '화장실', icon: 'dot', at: [1, 1] }];
  const T_CH = [
    CH({
      id: 'saf-firstaid.e12.call-help.intro.scene', type: 'intro', title: '도움이 필요한 친구 찾기',
      method: '그림 장면에서 도움이 필요한 친구 찾기', tool: 'emotion', minutes: 5,
      levels: { easy: '장면 1개(넘어진 친구)에 마음 카드 2장 가운데 하나를 놓는 시연을 함께 본다.', base: '장면 2개(넘어진 친구·도와준 친구)에 마음 카드 3장을 놓는 시연을 본다.', challenge: '시연을 본 뒤 넘어진 친구가 바라는 것을 한 마디("도와줘")로 말한다.' },
      intro: {
        teacher: '"놀이터에서 친구가 넘어져 앉아 있어요. 친구 마음은 어떤 날씨일까요?" 두세 명의 대답을 듣고(기다릴 반응: "비 와요", "속상해요") 시연 단추로 넘어진 친구 옆에 "속상함", 선생님을 불러 준 친구 옆에 "뿌듯함" 카드가 놓이는 모습을 보인다. "내가 고쳐 주면 돼요"라는 말이 나오면 "어디가 얼마나 아픈지 우리가 알 수 있을까요? 누가 알까요?"라고 되묻는다. 오늘은 다치거나 아픈 사람을 보면 어른과 119 를 부르는 법을 배운다고 밝힌다.',
        student: '넘어진 친구의 마음을 떠올리고 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'fall', label: '넘어진 친구' }, { id: 'help', label: '도와준 친구' }], cards: ['속상함', '뿌듯함', '신남'], shuffle: false }, sequence: [{ match: { fall: '속상함' } }, { match: { fall: '속상함', help: '뿌듯함' } }] },
        art: { draw: 'a paper playground where one paper child sits on the ground holding a knee while another paper child waves to a teacher who is walking over kindly', banner: '도움이 필요해요' },
      },
      notes: '다친 일을 자세히 묻지 않는다. 그림 속 친구 이야기로만 한다. 상처 모습은 보이지 않는다.',
    }),
    CH({
      id: 'saf-firstaid.e12.call-help.intro.chant', type: 'intro', title: '"도와주세요!" 구호 따라 하기',
      method: '구호 따라 외치기 "도와주세요!"', tool: 'timer', minutes: 5,
      levels: { easy: '교사와 함께 구호와 몸짓을 한 번 따라 한다.', base: '짝과 번갈아 구호 세 개를 세 번 따라 한다.', challenge: '"도와주세요!" 뒤에 "선생님!"처럼 부를 사람을 넣어 외친다.' },
      intro: {
        teacher: '"손 들고! (손 번쩍) 도와주세요! (두 손 모아 입가에) 어른 불러요! (손짓으로 부르기)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 세 번 따라 한다. "혼자 못 하면 부끄러워요"라는 말이 나오면 "어른도 도움이 필요하면 119 를 불러요. 도움을 부르는 것은 부끄러운 일일까요?"라고 되묻는다. 큰 소리는 정말 도움이 필요할 때 쓰는 소리라고 밝힌다.',
        student: '손을 들고 "도와주세요!"를 크게 따라 외쳐요.',
        demo: { tool: 'timer', options: { title: '도움 구호', cards: ['어른 불러요', '손 들어요', '"도와주세요!"'] }, sequence: [{ order: ['손 들어요', '"도와주세요!"', '어른 불러요'] }] },
        art: { draw: 'paper children raising their hands high and calling out together, with paper speech bubbles and a teacher turning toward them', banner: '도와주세요!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    CH({
      id: 'saf-firstaid.e12.call-help.activity.choose-path', type: 'activity', title: '갈림길: 누구를 부를까?',
      method: '갈림길 그림에서 누구를 부를지 고르기', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번, 보기 2개씩).', challenge: '갈림 2번을 지나 끝에서 잘한 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '누구를 부를까?', tool: 'dilemma',
        teacher: '"친구가 넘어져 일어나지 못해요. 나는 어떻게 할까요?" 보기를 고르기 전에 반 전체가 손을 들어 어느 쪽인지 먼저 보이게 한다. "내가 일으켜 줘요"를 고른 학생에게 "어디가 아픈지 모르는데 당기면 친구가 어떻게 될까요?"라고 묻는다. 셋째 장면에서는 "아무나"가 아니라 "선생님, 도와주세요!"처럼 사람을 콕 집어 부르고, 어른이 없으면 119 에 전화하면 상담하는 분이 전화로 알려 준다는 점을 짚는다. 고른 뒤 \'처음부터 다른 길\'로 다른 결과도 함께 본다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('친구가 넘어졌어요. 골라요.', { text: '친구가 넘어져 못 일어나요.', motif: 'house', choices: [
            { id: 'go', text: '그냥 가요', result: '친구 혼자 아파해요.', why: '다친 친구를 두고 가지 않아요.' },
            { id: 'call', text: '"선생님!" 불러요', result: '선생님이 오고 계세요.', easyEnding: '선생님이 친구를 살펴 주셨어요.', next: { text: '선생님을 기다려요. 어떻게 해요?', choices: [
              { id: 'stay', text: '곁에서 "괜찮아?"', result: '친구가 덜 무서워해요.', ending: '선생님이 친구와 보건실에 가셨어요.' },
              { id: 'lift', text: '억지로 일으켜요', result: '친구가 더 아플 수 있어요.', why: '움직이지 말고 어른을 기다려요.' }] } }] },
          ['call', 'stay'], [C('adult', '어른이 살펴 줘요'), { id: 'shy', text: '부끄러워서요', why: '도움을 부르는 것은 부끄럽지 않아요.' }, { id: 'fix', text: '내가 고칠래요', why: '다친 곳은 어른이 살펴요.' }], 'adult', 0.15),
          DILEMMA('짝이 배가 아파요. 골라요.', { text: '짝이 배가 아프다며 엎드렸어요.', motif: 'school', choices: [
            { id: 'pill', text: '내 약을 줘요', result: '맞지 않는 약은 위험해요.', why: '약은 어른이 줘요.' },
            { id: 'tell', text: '선생님께 알려요', result: '선생님이 교실에 안 계세요.', easyEnding: '선생님이 짝을 보건실로 데려가셨어요.', next: { text: '선생님이 안 보여요. 어떻게 해요?', choices: [
              { id: 'next', text: '옆 반 선생님께', result: '옆 반 선생님이 오셨어요.', ending: '짝이 보건실에 가서 쉬었어요.' },
              { id: 'wait', text: '그냥 기다려요', result: '짝이 오래 아파해요.', why: '선생님이 없으면 가까운 다른 어른을 불러요.' }] } }] },
          ['tell', 'next'], [C('near', '가까운 어른이 도와요'), { id: 'my', text: '내 약이 좋아서요', why: '내 약도 친구에게는 위험할 수 있어요.' }, { id: 'quiet', text: '조용히 하려고요', why: '아플 때는 알려야 해요.' }], 'near', 0.2),
          DILEMMA('할머니가 쓰러지셨어요. 골라요.', { text: '할머니가 갑자기 쓰러지셨어요.', motif: 'house', choices: [
            { id: 'hide', text: '무서워 숨어요', result: '아무도 할머니를 못 도와요.', why: '무서워도 도움을 불러요.' },
            { id: 'shout', text: '"도와주세요!" 외쳐요', result: '집에 다른 어른이 없어요.', easyEnding: '이웃 어른이 와서 119 에 전화하셨어요.', next: { text: '집에 어른이 없어요. 어떻게 해요?', choices: [
              { id: 'dial', text: '119에 전화해요', result: '전화 속 분이 할 일을 알려 줘요.', ending: '119 구급대가 와서 할머니를 도와주셨어요.' },
              { id: 'shake', text: '세게 흔들어요', result: '할머니가 다칠 수 있어요.', why: '흔들기보다 119 에 먼저 알려요.' }] } }] },
          ['shout', 'dial'], [C('119', '119가 도와줘요'), { id: 'alone', text: '혼자 할 수 있어서요', why: '급할 때는 혼자 하지 않고 119 를 불러요.' }, { id: 'fun', text: '전화가 재밌어서요', why: '119 는 놀이로 걸지 않아요.' }], '119', 0.25, { conclude: '다친 사람을 보면 어른을 콕 집어 부르고, 어른이 없으면 119에 전화해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 넘어져 못 일어나요. 무엇을 해요?', options: ['선생님을 불러요', '그냥 가요'], answer: '선생님을 불러요' }] },
      notes: '정답 길이 있는 갈림길이다. 셋째 장면(할머니)은 집에 어른이 없을 때만 119 라는 점을 짚는다. 가족이 아팠던 일을 묻지 않는다.',
    }),
    CH({
      id: 'saf-firstaid.e12.call-help.activity.call-play', type: 'activity', title: '119 전화 역할놀이',
      method: '119 전화 역할놀이(이름·있는 곳·무슨 일)', tool: 'timer', minutes: 14,
      levels: { easy: '말할 카드 2장(무슨 일 → 있는 곳)만 차례대로 놓고 교사와 함께 전화 놀이를 한다.', base: '말할 카드 3장(무슨 일 → 있는 곳 → 내 이름)을 놓고 짝과 장난감 전화로 해 본 뒤 점검 3칸에 표시한다.', challenge: '교사가 상담하는 분이 되어 묻는 말에 카드 없이 대답하고, 점검 칸 "장난 전화 안 해요"를 더 표시한다.' },
      activity: {
        title: '장난감 전화로 119 놀이', tool: 'timer',
        teacher: '"119 에 전화하면 맨 먼저 무엇을 말할까요?" 카드를 놓은 뒤 교사가 "119 입니다. 무슨 일이세요?" 하고 상담하는 분이 되어 묻고, 학생은 장난감 전화로 "할머니가 쓰러지셨어요. 여기는 ○○아파트예요. 제 이름은 ○○예요."처럼 대답한다. "말하고 바로 끊어요"라는 학생에게 "전화 속 분이 할 일을 알려 주실 거예요. 끊어도 된다고 할 때까지 들어요"라고 말한다. 연습에서는 실제 주소 대신 "우리 학교"라고 말하게 한다.',
        task: '말할 차례를 놓고 전화 놀이를 해요.', levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          { prompt: '119에 말할 차례로 놓아요.', toolOptions: { title: '119 에 말해요', cards: ['내 이름', '무슨 일', '있는 곳'] }, target: { order: ['무슨 일', '있는 곳', '내 이름'] }, difficulty: 0.15,
            levels: { easy: { prompt: '119에 말할 차례로 놓아요(2장).', toolOptions: { cards: ['있는 곳', '무슨 일'] }, target: { order: ['무슨 일', '있는 곳'] } } } },
          { prompt: '장난감 전화로 해 보아요.', free: true, toolOptions: { doneLabel: '119 놀이를 해 보았어요' }, difficulty: 0.15 },
          { prompt: '전화 놀이 뒤 표시해요.', toolOptions: { title: '119 놀이 점검', safety: ['또박또박 말했어요', '묻는 말에 답했어요', '먼저 안 끊었어요'] }, target: { safety: true }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { safety: ['또박또박 말했어요', '묻는 말에 답했어요', '먼저 안 끊었어요', '장난 전화 안 해요'] } } },
            conclude: '119에는 무슨 일, 있는 곳, 내 이름을 또박또박 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 수를 써요.', text: '급하게 도움이 필요하면 ___에 전화해요.', answer: '119' }] },
      notes: '실제 전화기로 119 를 누르지 않는다. 장난감 전화나 종이 전화로만 한다. 집 주소·전화번호는 쓰거나 말하게 하지 않는다.',
    }),
    CH({
      id: 'saf-firstaid.e12.call-help.activity.ok-no', type: 'activity', title: '좋아요·안돼요 행동 나누기',
      method: '좋아요·안돼요 행동 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 4장, 바구니에 넣으면 바로 맞는지 알려 주고 장 수가 보인다.', base: '카드 6장을 좋아요·안돼요 바구니에 다 넣은 뒤 확인한다.', challenge: '카드 8장(헷갈리는 카드 2장 더), 다 넣은 뒤 안돼요 카드 하나를 좋아요로 바꿔 말한다("혼자 약 바르기 → 어른께 알리기").' },
      activity: {
        title: '좋아요·안돼요 나누기', tool: 'sortboard',
        teacher: '"친구가 다쳤을 때 이렇게 하면 좋아요일까요, 안돼요일까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽는다. "혼자 약 바르기"를 좋아요에 넣는 학생에게 "어떤 약이 맞는지 누가 알까요?"라고 묻는다. "장난 전화"에는 "장난 전화를 받는 동안 정말 아픈 사람이 기다려야 해요"라고 말해 준다.',
        task: '카드를 좋아요·안돼요 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          GB('놀이터에서 친구가 넘어졌어요.', [C('tell', '어른께 알리기'), C('shout', '도와주세요 외치기'), C('stay', '친구 곁 있기')], [C('pill', '혼자 약 바르기'), C('prank', '장난 전화 하기'), C('ignore', '못 본 척하기')], [C('drag', '친구 끌고 가기'), C('hide', '숨기고 참기')], 0.1),
          GB('교실에서 친구가 아파요.', [C('teach', '선생님께 알리기'), C('ask', '"괜찮아?" 묻기'), C('room', '보건실 같이 가기')], [C('laugh', '친구 놀리기'), C('mypill', '내 약 주기'), C('play', '계속 놀기')], [C('wait', '나중에 말하기'), C('push', '빨리 일어나래')], 0.15),
          GB('집에서 동생이 울어요.', [C('mom', '엄마 부르기'), C('near', '동생 곁 있기'), C('call', '어른께 전화')], [C('cream', '아무 약 바르기'), C('scold', '울지 말라 화내기'), C('leave', '혼자 두고 가기')], [C('hush', '비밀로 하기'), C('fun119', '119 놀이 전화')], 0.2, { conclude: '다친 사람을 보면 어른께 알리고, 혼자 고치거나 장난 전화하지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['행동', '○ / ×'], cells: [['어른께 알리기', ''], ['혼자 약 바르기', ''], ['장난 전화 하기', ''], ['친구 곁 있기', '']], answer: '○, ×, ×, ○' }] },
    }),
    CH({
      id: 'saf-firstaid.e12.call-help.activity.school-map', type: 'activity', title: '학교에서 도움 받을 곳 찾기',
      method: '학교에서 도움 받을 곳 찾기', tool: 'map', minutes: 14,
      levels: { easy: '핀을 놓으면 그 칸의 이름이 바로 보인다(보건실부터 찾는다).', base: '학교 칸 지도(다섯 곳)에서 보건실·교무실에 핀을 꽂고, 교실에서 먼저 알릴 분을 고른다.', challenge: '급식실·화장실까지 일곱 곳이 있는 지도에서 꽂고, 교실에서 보건실까지 가는 칸을 손가락으로 따라가 본다.' },
      activity: {
        title: '우리 학교 도움 지도', tool: 'map',
        teacher: '"학교에서 다치거나 아프면 어디로 가서 누구를 찾을까요?" 핀을 꽂기 전에 우리 학교 보건실이 몇 층 어디인지 함께 떠올리게 한다. 보건실에 "혼자 뛰어가요"라는 학생에게 "아픈 친구를 두고 뛰어가다 넘어지면 어떻게 될까요? 먼저 누구에게 말할까요?"라고 묻는다. 지도는 우리 학교와 다를 수 있으니 실제 보건실 쪽을 손으로 가리키게 한다.',
        task: '도움 받을 곳에 핀을 꽂아요.', levels: { easy: { readout: true }, base: {}, challenge: {} },
        items: [
          PIN('보건 선생님이 계신 곳에 꽂아요.', SCHOOL, SCHOOL_MORE, '보건실', 0.1),
          PIN('여러 선생님이 계신 곳에 꽂아요.', SCHOOL, SCHOOL_MORE, '교무실', 0.15),
          { prompt: '교실에서 다치면 먼저 누구께요?', toolOptions: { grid: [4, 3], places: SCHOOL, title: '우리 학교', readOnly: true, ask: { q: '교실에서 다쳤어요. 먼저 누구께?', choices: ['담임 선생님', '혼자 참기', '친구 동생'] } }, target: { pick: 0 }, difficulty: 0.2,
            conclude: '다치면 가까운 선생님께 먼저 알리고, 함께 보건실에 가요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '보건 선생님이 계신 곳에 ○ 해요.', options: ['보건실', '도서관', '운동장'], answer: '보건실' }] },
      notes: '탐험할 수 있으면 보건실·교무실까지 실제로 걸어가 본다. 지도 칸 따라가기(도전)는 채점하지 않는 손가락 활동이다.',
    }),
    CH({
      id: 'saf-firstaid.e12.call-help.wrap.story3', type: 'wrap', title: '도움 이야기 세 장면 놓기',
      method: '도움 이야기 세 장면 차례 놓기', tool: 'story', minutes: 8,
      levels: { easy: '교사가 첫 장면(친구가 다침)을 함께 놓고 남은 두 장면을 반 전체가 말한다.', base: '세 장면을 스스로 차례대로 놓는다.', challenge: '세 장면을 놓은 뒤 장면마다 한 마디("선생님, 도와주세요!")를 말한다.' },
      wrap: {
        teacher: '"친구가 다쳤을 때 오늘 배운 차례는 무엇이었나요?" 장면 카드를 놓은 뒤 이야기를 처음부터 반 전체가 소리 내어 읽는다. 출구 2번에서 "심심할 때"를 고른 학생에게 "119 는 정말 급한 사람을 위한 전화예요"라고 말해 준다. 마지막에 "손 들고, 도와주세요!"를 다 같이 외친다.',
        exitTicket: [
          STORY3('도움 이야기를 차례로 놓아요.', [C('hurt', '친구가 다쳤어요'), C('tell', '선생님께 알려요'), C('room', '보건실에 가요')]),
          { type: 'choice', prompt: '119는 언제 전화해요?', options: ['심심할 때', '도움이 급할 때', '놀이할 때'], answer: 1, difficulty: 0.1, explain: '119 는 도움이 급할 때만 전화해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '다치면 어른께, 급하면 119',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '손 들고, ___!', answer: '도와주세요' },
          { type: 'draw', prompt: '선생님을 부르는 내 모습을 그려요.' },
        ],
        easy: { note: '"도와주세요!"를 떠올려요.', items: [{ type: 'draw', prompt: '손을 든 내 모습을 그려요.' }] },
      },
    }),
    CH({
      id: 'saf-firstaid.e12.call-help.wrap.promise', type: 'wrap', title: '도움 요청 약속 표시하기',
      method: '도움 요청 약속 표시하기', tool: 'kitchen', minutes: 8,
      levels: { easy: '교사가 약속 칸을 하나씩 읽어 주고 함께 표시한다.', base: '약속 3개를 스스로 읽고 지킬 것에 표시한다.', challenge: '표시한 뒤 집에서 부를 어른("엄마", "할아버지")을 짝에게 말한다.' },
      wrap: {
        teacher: '"오늘 배운 약속 가운데 나는 무엇을 지킬 수 있나요?" 점검표 칸을 함께 읽고 지킬 것에 표시하게 한다. 출구 2번에서 "혼자 고쳐요"를 고른 학생에게 "도와주고 싶은 마음은 멋져요. 그 마음으로 어른을 불러 주면 친구가 더 빨리 나아요"라고 말해 준다. 집에서 부를 어른을 말할 때 어른이 없는 집도 있으니 "옆집 어른", "119"도 답이 된다고 덧붙인다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '도움 약속', items: [C('tell', '어른께 알려요'), C('shout', '도와주세요 외쳐요'), C('prank', '장난 전화 안 해요')] }, prompt: '지킬 약속에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 다쳤어요. 나는요?', options: ['혼자 고쳐요', '어른을 불러요', '모른 척해요'], answer: 1, difficulty: 0.1, explain: '다친 친구를 보면 어른을 불러요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '나의 도움 요청 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['다친 친구를 보면 어른께 알려요', '"도와주세요!" 크게 말해요', '장난으로 119에 전화하지 않아요'] },
          { type: 'draw', prompt: '집에서 도움을 부를 어른을 그려요.' },
        ],
        easy: { note: '"어른께 알려요"를 떠올려요.', items: [{ type: 'draw', prompt: '선생님을 그려요.' }] },
      },
      notes: '집에서 부를 어른은 이름을 쓰게 하지 않는다. 가족 구성을 묻지 않고 "부를 수 있는 어른"으로만 말한다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 까진 상처와 코피 돌보기
  const SW = MOD('saf-firstaid.e12.small-wound', [2]);
  const T_SW = [
    SW({
      id: 'saf-firstaid.e12.small-wound.intro.body-spot', type: 'intro', title: '다치기 쉬운 몸의 곳 누르기',
      method: '다치기 쉬운 몸의 곳 누르기', tool: 'body', minutes: 5,
      levels: { easy: '교사와 함께 무릎 한 곳만 짚는다.', base: '넘어질 때 잘 닿는 세 곳(무릎·팔꿈치·손목)을 짚는 시연을 보고 내 몸에서도 짚는다.', challenge: '세 곳을 짚은 뒤 앞으로 넘어질 때 어디가 바닥에 닿는지 천천히 몸짓으로 보인다.' },
      intro: {
        teacher: '"앞으로 넘어지면 몸의 어디가 먼저 바닥에 닿을까요?" 두세 명의 대답을 듣고(기다릴 반응: "무릎이요", "손이요") 시연 단추로 종이 몸에 무릎, 그다음 팔꿈치·손목이 표시되는 모습을 보인다. "넘어지면 그냥 털고 일어나면 돼요"라는 말이 나오면 "까진 곳에 흙이 묻어 있으면 어떻게 할까요? 누구에게 알릴까요?"라고 되묻는다. 종이 몸에 손바닥 칸이 없어 손목 칸을 짚고 손바닥은 자기 손을 펴 보인다. 오늘은 까진 상처와 코피가 났을 때 할 일을 배운다고 밝힌다.',
        student: '넘어질 때 바닥에 닿는 내 무릎과 팔꿈치를 짚어 보아요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '팔꿈치', '손목', '무릎', '발목'], names: true }, sequence: [{ parts: ['무릎'] }, { parts: ['무릎', '팔꿈치', '손목'] }] },
        art: { draw: 'a paper child mannequin with soft paper patches on the knees and elbows, standing in a paper schoolyard with a smiling school nurse nearby', banner: '무릎·팔꿈치를 살펴요' },
      },
      notes: '종이 몸에 손바닥 칸이 없어 계획의 "손바닥"을 손목 칸으로 바꾸었다. 다친 경험을 묻지 않는다.',
    }),
    SW({
      id: 'saf-firstaid.e12.small-wound.intro.feel-scale', type: 'intro', title: '넘어진 친구 마음 크기 고르기',
      method: '넘어진 친구 마음 크기 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 눈금을 "조금·보통·아주 많이" 세 가지로 읽어 주며 함께 고른다.', base: '눈금 5칸에서 친구 마음 크기를 고르는 시연을 보고 손가락으로 칸 수를 보인다.', challenge: '고른 크기를 말하고 친구에게 해 줄 말("괜찮아? 선생님 부를게")을 한 마디 덧붙인다.' },
      intro: {
        teacher: '"수아가 운동장에서 넘어졌어요. 수아의 아픈 마음은 얼마나 클까요?" 시연 단추로 눈금이 4칸에 놓이는 모습을 보이고, 학생들은 손가락으로 몇 칸인지 보인다. "작게 다치면 아무 말 안 해도 돼요"라는 말이 나오면 "작아 보여도 흙이 들어갔을 수 있어요. 누구에게 보여 줄까요?"라고 되묻는다. 마음 크기는 사람마다 달라서 어느 칸을 골라도 된다고 말해 준다.',
        student: '넘어진 수아의 마음이 얼마나 클지 손가락으로 보여 주어요.',
        demo: { tool: 'emotion', options: { mode: 'scale', situation: '수아가 운동장에서 넘어졌어요.', feeling: '속상함', steps: 5, scaleLabels: { 1: '조금', 5: '아주 많이' } }, sequence: [{ level: 4 }] },
        art: { draw: 'a paper child sitting on a paper schoolyard looking sad while a friend crouches beside her and points toward a teacher', banner: '친구 마음은 얼마나?' },
      },
      notes: '그림 속 친구의 마음만 묻는다. "나도 넘어진 적 있어요" 같은 이야기가 나오면 짧게 들어 주고 자세히 묻지 않는다.',
    }),
    SW({
      id: 'saf-firstaid.e12.small-wound.activity.wash-order', type: 'activity', title: '까진 상처 돌보는 차례 3장',
      method: '까진 상처 돌보는 차례 3장', tool: 'kitchen', minutes: 14,
      levels: { easy: '카드 2장만 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 3장을 차례대로 놓은 뒤 확인한다.', challenge: '"침 발라요"처럼 잘못 끼운 카드 한 장이 섞여 있어 빼고 놓는다.' },
      activity: {
        title: '까진 상처·손 씻기 차례 놓기', tool: 'kitchen',
        teacher: '"무릎이 까졌어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 반 전체가 차례대로 몸으로 따라 한다(손 들어 알리기 → 씻는 흉내 → 밴드 붙이는 흉내). "침을 바르면 나아요"라는 학생에게 "입 안에는 눈에 안 보이는 균이 많아요. 무엇으로 씻으면 깨끗할까요?"라고 묻는다. 상처를 만지기 전에 손부터 씻고, 어른께 꼭 알린다는 점을 짚는다.',
        task: '카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('무릎이 까졌어요. 차례로 놓아요.', [C('tell', '어른께 알려요'), C('rinse', '물로 씻어요'), C('band', '밴드 붙여요')], C('dirt', '흙손으로 만지기'), 0.15),
          ORDER3('손을 씻어요. 차례로 놓아요.', [C('wet', '물 묻혀요'), C('soap', '비누칠해요'), C('clean', '헹궈요')], C('wipe', '옷에 닦아요'), 0.2),
          ORDER3('상처를 돌봐요. 차례로 놓아요.', [C('hand', '손 씻어요'), C('wash', '깨끗한 물로 씻어요'), C('cover', '밴드로 덮어요')], C('spit', '침 발라요'), 0.25, { conclude: '까지면 어른께 알리고, 손 씻고, 물로 씻고, 밴드로 덮어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '까진 상처에 하지 않는 것에 ○ 해요.', options: ['침 바르기', '물로 씻기', '밴드 붙이기'], answer: '침 바르기' }] },
    }),
    SW({
      id: 'saf-firstaid.e12.small-wound.activity.nose-branch', type: 'activity', title: '코피 날 때 어떻게 할까 고르기',
      method: '코피 날 때 어떻게 할까 고르기', tool: 'emotion', minutes: 14,
      levels: { easy: '보기 2개 가운데 고르고, 고르면 결과가 바로 보인다.', base: '보기 3개 가운데 고르고, 결과는 확인한 뒤에 보인다.', challenge: '보기 3개에서 고르고, 셋째 문항에서 고른 "어른께 알리는 말"을 짝과 소리 내어 해 본다.' },
      activity: {
        title: '코피 장면에서 할 일 고르기', tool: 'emotion',
        teacher: '"갑자기 코피가 나요. 고개를 어떻게 할까요?" 고르기 전에 반 전체가 고개를 앞으로 살짝 숙이고 코를 잡는 흉내를 먼저 해 본다. "고개를 뒤로 젖혀요"를 고르는 학생에게 "뒤로 젖히면 코에서 나온 것이 목으로 넘어가요. 앞으로 숙이면 어떨까요?"라고 묻는다. 짝이 코피가 나면 내가 닦지 않고 선생님을 부른다는 점을 짚는다.',
        task: '장면을 듣고 할 일을 골라요.', levels: { easy: {}, base: { revealAfterCheck: true }, challenge: { revealAfterCheck: true } },
        items: [
          BR('코피가 나요. 어떻게 해요?', '갑자기 코피가 나요.', [
            { id: 'back', text: '고개 뒤로 젖혀요', result: '목으로 넘어가 불편해요.', mood: '걱정' },
            { id: 'fwd', text: '숙이고 코 잡아요', result: '어른을 기다릴 수 있어요.', mood: '편안함' },
            { id: 'run', text: '뛰어다녀요', result: '코피가 더 날 수 있어요.', mood: '놀람' }], 'fwd', 0.1),
          BR('짝이 코피가 나요. 어떻게 해요?', '짝이 코피가 나요.', [
            { id: 'laugh', text: '놀려요', result: '짝이 속상해요.', mood: '속상함' },
            { id: 'tell', text: '선생님께 알려요', result: '선생님이 휴지를 주셨어요.', mood: '뿌듯함' },
            { id: 'wipe', text: '내가 닦아 줘요', result: '닦는 것은 어른이 해요.', mood: '걱정' }], 'tell', 0.15),
          BR('선생님께 뭐라고 해요?', '선생님께 알리러 가요.', [
            { id: 'say', text: '"코피가 나요!"', result: '선생님이 바로 오셨어요.', mood: '뿌듯함' },
            { id: 'hush', text: '아무 말 안 해요', result: '아무도 몰라요.', mood: '걱정' },
            { id: 'later', text: '"나중에요"', result: '오래 혼자 참아요.', mood: '속상함' }], 'say', 0.2, { conclude: '코피가 나면 고개를 앞으로 숙이고 코를 잡고, 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '코피가 나면 고개를 어떻게 해요?', options: ['앞으로 숙여요', '뒤로 젖혀요'], answer: '앞으로 숙여요' }] },
      notes: '코피를 그리거나 자세히 말하지 않는다. 코 잡는 시간은 정하지 않고 "어른이 오실 때까지"로 말한다.',
    }),
    SW({
      id: 'saf-firstaid.e12.small-wound.activity.band-practice', type: 'activity', title: '짝과 밴드 붙이기 따라 하기',
      method: '짝과 밴드 붙이기 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '교사 시범을 따라 하고, 밴드 붙이는 차례 카드 2장만 놓는다.', base: '짝과 번갈아 붙여 보고, 차례 카드 3장을 놓은 뒤 스스로 점검 2칸에 표시한다.', challenge: '짝에게 차례를 말로 알려 주며 붙이고, 점검 칸 "짝에게 차례를 말했어요"를 더 표시한다.' },
      activity: {
        title: '짝 팔에 밴드 붙여 보기', tool: 'timer',
        teacher: '"밴드를 붙이기 전에 무엇을 먼저 할까요?" 교사가 동그란 색 스티커(상처 자리 표시)를 팔에 붙이고, 밴드 종이를 떼어 가운데를 스티커에 대고 양쪽을 붙이는 시범을 보인 뒤 짝과 번갈아 해 본다. "끈적한 곳을 손으로 만져도 돼요"라는 학생에게 "상처에 닿는 하얀 곳을 손으로 만지면 어떻게 될까요?"라고 묻는다. 진짜 상처는 어른께 먼저 보여 준다는 점을 짚는다.',
        task: '차례를 놓고 짝과 붙여 본 뒤 표시해요.', levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          { prompt: '밴드 붙이는 차례로 놓아요.', toolOptions: { title: '밴드 붙이기', cards: ['양쪽 붙여요', '종이 떼요', '가운데 대요'] }, target: { order: ['종이 떼요', '가운데 대요', '양쪽 붙여요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '밴드 붙이는 차례로 놓아요(2장).', toolOptions: { cards: ['가운데 대요', '종이 떼요'] }, target: { order: ['종이 떼요', '가운데 대요'] } } } },
          { prompt: '짝 팔에 밴드를 붙여 보아요.', free: true, toolOptions: { doneLabel: '짝과 밴드를 붙여 보았어요' }, difficulty: 0.15 },
          { prompt: '해 본 것에 표시해요.', toolOptions: { title: '스스로 점검', safety: ['손을 씻었어요', '스티커를 덮었어요'] }, target: { safety: true }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { safety: ['손을 씻었어요', '스티커를 덮었어요', '짝에게 차례를 말했어요'] } } },
            conclude: '밴드는 손을 씻고, 하얀 곳을 만지지 않고 붙여요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '밴드를 붙이기 전에 ___을 씻어요.', answer: '손' }] },
      notes: '상처 그림 스티커 대신 동그란 색 스티커를 상처 자리 표시로 쓴다(피·상처 그림은 쓰지 않는다). 밴드는 한 사람에 두세 장만 나눈다. 피부가 약한 학생은 옷소매 위에 붙인다.',
    }),
    SW({
      id: 'saf-firstaid.e12.small-wound.activity.who-sort', type: 'activity', title: '보건실에 갈 일·스스로 할 일 나누기',
      method: '보건실에 갈 일·스스로 할 일 나누기', tool: 'sortboard', minutes: 14,
      levels: { easy: '카드 3장, 바구니에 넣으면 바로 맞는지 알려 주고 장 수가 보인다.', base: '카드 5장을 "씻고 알려요"·"바로 보건실" 바구니에 다 넣은 뒤 확인한다.', challenge: '카드 7장("바로 보건실" 카드 2장 더). 헷갈리는 카드는 "바로 보건실"로 — 모르면 어른께 묻는다고 정한다.' },
      activity: {
        title: '씻고 알릴 일·바로 보건실 갈 일', tool: 'sortboard',
        teacher: '"살짝 긁혔을 때와 머리를 부딪혔을 때, 똑같이 할까요?" 카드를 넣을 때마다 반 전체가 소리 내어 읽는다. "머리를 부딪혔어요"를 "씻고 알려요"에 넣는 학생에게 "머리 속은 눈으로 볼 수 없어요. 누가 살펴봐야 할까요?"라고 묻는다. 두 바구니 모두 어른께 알리는 것은 같고, 헷갈리면 보건실로 간다는 점을 짚는다.',
        task: '카드를 알맞은 바구니에 넣어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB('운동장에서 생긴 일이에요.', ['씻고 알려요', '바로 보건실'], [C('scr', '살짝 긁혔어요'), C('sand', '모래가 묻었어요'), C('knee', '무릎이 까졌어요')], [C('head', '머리를 부딪혔어요'), C('dizzy', '어지러워요')], [C('stand', '일어나지 못해요'), C('breath', '숨이 차서 힘들어요')], 0.1),
          SB('교실에서 생긴 일이에요.', ['씻고 알려요', '바로 보건실'], [C('paper', '종이에 스쳤어요'), C('nail', '손톱에 긁혔어요'), C('elbow', '팔꿈치 까졌어요')], [C('eye', '눈이 따가워요'), C('belly', '배가 많이 아파요')], [C('nose', '코피가 안 멈춰요'), C('fever', '열이 나요')], 0.15),
          SB('체육 시간에 생긴 일이에요.', ['씻고 알려요', '바로 보건실'], [C('palm', '손바닥 까졌어요'), C('mud', '흙이 묻었어요'), C('bump', '살짝 부딪혔어요')], [C('ankle', '발목이 부었어요'), C('ache', '머리가 아파요')], [C('walk', '걸을 수 없어요'), C('sick', '토할 것 같아요')], 0.2, { conclude: '작게 다쳐도 어른께 알리고, 헷갈리면 보건실에 가요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '바로 보건실에 가면 ○, 씻고 알리면 △를 써요.', columns: ['일', '○ / △'], cells: [['머리를 부딪혔어요', ''], ['살짝 긁혔어요', ''], ['어지러워요', '']], answer: '○, △, ○' }] },
      notes: '"씻고 알려요" 바구니도 어른께 알리는 것이 먼저다. 계획의 "스스로" 칸 이름을 혼자 해결로 읽히지 않게 "씻고 알려요"로 바꾸었다.',
    }),
    SW({
      id: 'saf-firstaid.e12.small-wound.wrap.help-story', type: 'wrap', title: '다친 친구 돕는 이야기 놓기',
      method: '다친 친구 돕는 이야기 차례 놓기', tool: 'story', minutes: 8,
      levels: { easy: '교사가 첫 장면(넘어짐)을 함께 놓고 남은 두 장면을 반 전체가 말한다.', base: '세 장면을 스스로 차례대로 놓는다.', challenge: '세 장면을 놓은 뒤 출구 3번에서 친구에게 할 말을 고르고 소리 내어 말한다.' },
      wrap: {
        teacher: '"친구가 넘어졌을 때 우리는 어떤 차례로 도왔나요?" 장면 카드를 놓은 뒤 이야기를 처음부터 반 전체가 소리 내어 읽는다. 출구 2번에서 "빨리 나아요"를 고른 학생에게 "침에는 균이 많아요. 깨끗한 물로 씻어요"라고 말해 준다. 출구 3번은 친구 마음을 생각하는 말을 고르게 하고, 고른 말을 짝에게 해 보게 한다.',
        exitTicket: [
          STORY3('돕는 이야기를 차례로 놓아요.', [C('fall', '친구가 넘어졌어요'), C('tell', '선생님께 알려요'), C('band', '씻고 밴드 붙여요')]),
          { type: 'choice', prompt: '상처에 침을 바르면요?', options: ['빨리 나아요', '바르지 않아요', '더 발라요'], answer: 1, difficulty: 0.1, explain: '상처에는 침을 바르지 않고 깨끗한 물로 씻어요.' },
          { type: 'choice', prompt: '넘어진 친구에게 할 말은요?', options: ['"괜찮아? 같이 가자"', '"몰라, 혼자 가"'], answer: 0, difficulty: 0.1, explain: '친구 마음을 살피고 함께 어른께 가요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '다친 친구를 도와요',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구가 다치면 ___께 알려요.', answer: '선생님' },
          { type: 'draw', prompt: '친구와 함께 보건실에 가는 모습을 그려요.' },
        ],
        easy: { note: '"선생님께 알려요"를 떠올려요.', items: [{ type: 'draw', prompt: '밴드를 그려요.' }] },
      },
    }),
    SW({
      id: 'saf-firstaid.e12.small-wound.wrap.badge', type: 'wrap', title: '"다치면 알려요" 배지 꾸미기',
      method: '응급 도움 약속 배지 꾸미기', tool: 'collage', minutes: 8,
      levels: { easy: '교사와 함께 모양 조각 2개를 붙이고 점검 칸을 함께 누른다.', base: '모양 조각 4개 이상으로 배지를 꾸미고 점검 칸을 스스로 누른다(판은 2개부터 받는다).', challenge: '배지 뒤(활동지)에 집에서 지킬 약속 하나를 붙인다.' },
      wrap: {
        teacher: '"오늘 배운 약속을 배지로 만들어 볼까요? 배지 가운데에는 무슨 말이 들어갈까요?" 판에 동그라미·하트·별 조각으로 배지를 꾸미고 "다치면 알려요"를 다 같이 소리 내어 말한 뒤 점검 칸을 누르게 한다. 조각만 많이 붙이는 학생에게 "이 배지를 보는 친구가 어떤 약속을 떠올리면 좋을까요?"라고 묻는다. 출구 2번에서 "아무에게도"를 고른 학생에게 "작게 다쳐도 어른께 알려야 어른이 살펴 줄 수 있어요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'heart', 'star', 'square'], colors: ['빨강', '노랑', '파랑', '초록'], sizes: ['s', 'm', 'l'] }, prompt: '약속 배지를 꾸며요.', target: { selfCheck: ['배지 모양을 붙였어요', '"다치면 알려요" 말했어요'], minPieces: 2 }, difficulty: 0.1 },
          { type: 'choice', prompt: '다치면 누구에게 알려요?', options: ['아무에게도', '가까운 어른', '동생'], answer: 1, difficulty: 0.1, explain: '다치면 가까운 어른께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '다치면 알려요',
        items: [
          { type: 'draw', prompt: '"다치면 알려요" 배지를 그려요.' },
          { type: 'check', prompt: '집에서 지킬 약속에 ✓ 해요.', options: ['다치면 어른께 알려요', '상처에 침을 바르지 않아요', '코피가 나면 고개를 숙여요'] },
        ],
        easy: { note: '"다치면 알려요"를 떠올려요.', items: [{ type: 'draw', prompt: '하트 배지를 그려요.' }] },
      },
      notes: '콜라주 판에 글자를 쓸 수 없어 약속 글은 말로 하고, 점검 칸으로 확인한다. 글자 배지는 활동지에 그린다.',
    }),
  ];

  PaperLessons.registerModules([...T_CH, ...T_SW]);
})();
