/* 창체 법정교육 학교폭력 예방 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 bully 초1-2.
 * 근거: research-mandatory §1 학교폭력 예방교육(학교폭력예방법 제15조·시행령 제17조 — 학기별 1회 이상, 지침 연 11시간·사이버폭력 예방 3차시 이상),
 *   §2 학교폭력 예방 초: 폭력의 종류 알기 · 놀림·따돌림 구별 · 방관자에서 조력자로 · 도움 요청.
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기·역할놀이·구호. 장면·인물은 직접 지은 가상 인물이다(동물 인물·가명 '나리'·'바다').
 * 주제 12개(1학년 6 · 2학년 6, 사이버폭력 주제 4개) × 도입 2 · 활동 4 · 정리 2 = 96모듈.
 * 같은 학년군 안전교육 폭력예방(modules/saf-violence/e12.js)과 장면·문항이 겹치지 않게 썼다 — 그쪽이 '싫은 손길·몸의 경계·비밀'이라면
 *   여기는 '친구 사이의 행동·말·따돌림·사진과 화면·곁에 서기·다시 친구 되기'다(같은 '그림을 망쳤어요' 장면은 모래성으로 바꿈).
 *
 * 이 영역에서 늘 지키는 틀(모든 모듈):
 *   - 학생에게 겪은 일을 묻지 않는다. 모든 장면은 그림 속 동물·가명 인물의 일로만 짧게 이야기한다.
 *   - 잘못은 아프게 한 행동을 한 쪽에 있다. 당한 친구 잘못이 아니고, 어른께 말한 아이는 잘한 것이다(고자질이 아니라 돕기).
 *   - 놀리거나 민 친구를 '나쁜 아이'로 부르지 않는다. "그 행동을 멈추고 바꾸면 돼요" — 행동을 바로잡는 말로만 이야기하고, 바꾼 친구와 다시 놀 수 있음을 보인다.
 *   - 도움 받을 곳은 체계도 concepts 의 것만 쓴다: 믿을 어른(담임·상담·보건 선생님·보호자), 교실·상담실·보건실·교무실·집.
 *     신고·상담 전화번호는 체계도에 없어서 쓰지 않는다 — 계획의 '[학교가 확인해 넣는 학교폭력 신고·상담 번호]'는 화면에 '학교가 알려 준 번호' 자리로만 두고 교사가 채운다.
 *   - 수업 중이나 뒤에 걱정되는 말을 꺼내는 학생이 있으면 그 자리에서 캐묻지 않고 "말해 줘서 고마워"라고 받은 뒤 학교의 학교폭력 대응 절차를 따른다.
 *
 * 수치·법 조항은 학생 화면에 쓰지 않는다(근거 파일에 초1-2 수치가 없다). 그림그래프 수는 수업용 가상 자료, 타이머 초·시계 시각은 '우리 반(가족) 약속'이다.
 *
 * 사람 확인: (근거 파일에는 고시·지침 항목 제목만 있어 일반 학교폭력 예방·사회정서 교육 내용으로 쓴 문장 — 확인할 곳을 함께 적는다)
 *   - five-shapes 전체: 학교폭력을 '몸으로 아프게 하기·나쁜 말·따돌리기·빼앗기·억지로 시키기' 다섯 모습으로 나눈 것(신체·언어·따돌림·금품갈취·강요를
 *     초1-2 말로 줄임) — 교육부 학교폭력 예방 교육 자료·어울림 프로그램(초등 저학년).
 *   - stop-in-play·nickname-line 전체: '같이 웃으면 놀이, 한 사람이라도 싫으면 멈추기', 싫다는 신호(고개 숙이기·찡그림·억지 웃음) — 교육부 어울림 프로그램·학교 사회정서 교육 자료.
 *   - stand-beside·help-map 전체: 곁에 서기·"괜찮아?" 말하기·함께 가 주기·어른께 알리기(방관자에서 조력자로), '알리기는 고자질이 아니라 돕기',
 *     '다칠 수 있는 일은 바로 어른께' — 교육부 학교폭력 예방 교육 자료(방관자 교육).
 *   - stand-beside.wrap.trusted-adults · help-map.wrap.help-cards: 학교폭력 신고·상담 번호 — 체계도에 번호가 없어 '학교가 알려 준 번호' 자리만 둔다. 학교가 교육부·경찰청 안내로 확인해 넣는다.
 *   - stand-beside.intro.helper-map-intro · help-map.activity.help-map: 교실·상담실·보건실·교무실 배치 — 학교마다 다르므로 우리 학교 배치로 교사 확인.
 *   - screen-kind-words·photo-ask-first·photo-together·game-teasing 전체: 놀리는 메시지·그림은 답하지 않고 어른께 보여 주기, 보내기 전 멈추기,
 *     사진은 찍기·보내기·올리기 전에 묻고 한 명이라도 싫으면 안 하기, 게임 채팅 놀림엔 게임을 멈추고 보여 주기, 차단은 어른과 함께 —
 *     교육부·방송통신위원회 사이버폭력 예방(어린이 디지털 시민성) 교육 자료.
 *   - game-teasing.activity.game-time-clock: 게임 쉬는 시각(4시·4시 30분 등)은 가상 가족 약속이고 권장 시간이 아니다 — 시간 기준은 과학기술정보통신부·한국지능정보사회진흥원 스마트쉼센터 확인.
 *   - sorry-okay·i-message 전체: 사과 차례(멈추기 → "미안해" → "괜찮아?"), 나 전달법("나는 ~해서 속상해"), 무슨 일·마음·약속 대화,
 *     숨 고르기(들이쉬기 4 — 내쉬기 4는 우리 반 약속 값) — 교육부 어울림 프로그램·학교 사회정서(갈등 해결) 교육 자료.
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'bully', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text, more) => Object.assign({ id, text }, more);
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const ids = (a) => a.map(idOf);

  // 두 바구니 나누기(sortboard 글 카드): 기본 6장, 쉬움 4장, 도전 헷갈리는 카드 2장을 more 로 더함(hardTo 바구니로 간다)
  const SB2 = (slots, prompt, ok, no, hard, hardTo, d, more) => {
    const S = (a, b) => ({ [slots[0]]: ids(a), [slots[1]]: ids(b) });
    return {
      prompt, toolOptions: { slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { more: hard }, target: { sort: hardTo ? S(ok, [...no, ...hard]) : S([...ok, ...hard], no) } },
      },
      ...more,
    };
  };
  // 다음 장면 고르기(story pick): 기본 3장 가운데 하나, 쉬움 2장 가운데 하나, 도전 다음 장면과 친구 마음을 두 칸에
  const NEXT = (prompt, good, bad, feel, d, more) => ({
    prompt, toolOptions: { mode: 'pick', basket: feel.basket || '다음 장면', cards: [bad[0], good, bad[1]] }, target: { pick: [good.id] }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [bad[0], good] } },
      challenge: { prompt: `${cut(prompt)}, 마음도요.`, toolOptions: { mode: 'sort', slots: [{ id: 'next', label: feel.basket || '다음 장면' }, { id: 'feel', label: feel.label }], cards: [bad[0], good, feel.cards[1], bad[1], feel.cards[0]] }, target: { sort: { next: [good.id], feel: [feel.cards[0].id] } } },
    },
    ...more,
  });
  // 정리 출구: 순서 카드(timer), 스스로 점검(timer), 말 카드 담기(wordcards)
  const ORDER = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[cards.length - 1], ...cards.slice(0, -1)] }, prompt: prompt || '차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SELF = (title, list, prompt) => ({ type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '해 본 것에 표시해요.', target: { selfCheck: list }, difficulty: 0.1 });
  const PICKW = (basket, cards, good, prompt) => ({ type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket, cards }, prompt, target: { pick: good }, difficulty: 0.1 });
  const PICKM = (topic, cards, good, prompt) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic, basket: topic, cards }, prompt, target: { pick: ids(good) }, difficulty: 0.1 });
  // 규칙 띠(pattern): 빈칸 채우기 · 틀린 조각 찾기 — 조각은 짧은 글 조각
  // (규칙 판의 빈칸·조각 누름 칸이 휴대폰에서 32px 라 44px 기준을 못 넘어, 빈칸 채우기·틀린 조각 찾기를 보기 고르기(rule)로 한다 — 보기 단추는 48px)
  const FILL = (seq, blanks, prompt) => {
    const [a, b] = blanks.map((i) => seq[i]);
    const choices = [`${b} · ${a}`, `${a} · ${b}`, `${a} · ${a}`];
    return { type: 'tool', tool: 'pattern', options: { mode: 'rule', seq: seq.map((p, i) => (blanks.includes(i) ? null : p)), question: '빈칸 두 곳에 차례로 올 조각은?', choices }, prompt, target: { pick: 1 }, difficulty: 0.1 };
  };
  const ODD = (seq, at, wrong, prompt) => {
    const choices = [...new Set(seq.filter((p, i) => i !== at)), wrong];
    return { type: 'tool', tool: 'pattern', options: { mode: 'rule', seq: seq.map((p, i) => (i === at ? wrong : p)), question: '규칙에 맞지 않는 조각은?', choices }, prompt, target: { pick: choices.length - 1 }, difficulty: 0.15 };
  };
  // 칸 지도 핀(map): 쉬움 장소 3곳, 기본 5곳, 도전 헷갈리는 장소를 더하고 '왜 여기?' 보기까지
  const PIN = (prompt, easy, base, extra, place, why, d, more) => ({
    prompt, toolOptions: { grid: [4, 3], places: base }, target: { place }, difficulty: d,
    levels: {
      easy: { toolOptions: { places: easy } },
      challenge: { prompt: why.prompt, toolOptions: { places: [...base, ...extra], ask: { q: why.q, choices: why.choices } }, target: { place, pick: why.answer } },
    },
    ...more,
  });
  // 가락 따라 치기(keyboard melody): 기본 한 줄, 쉬움 끝 세 음
  const MEL = (prompt, notes, d, more) => ({
    prompt, toolOptions: { melody: notes }, target: { notes }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(세 음).`, toolOptions: { melody: notes.slice(-3) }, target: { notes: notes.slice(-3) } } },
    ...more,
  });
  // 차례 놓기(timeline·timer order): 기본 3장, 쉬움 첫 장이 놓여 있음(남은 두 단계), 도전 틀린 장 1장이 섞여 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const i = ids(cards);
    return {
      prompt, toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: i }, difficulty: d,
      levels: { easy: { state: { at: { [i[0]]: 0, [i[1]]: null, [i[2]]: null } } }, challenge: { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } } },
      ...more,
    };
  };
  // 순서 카드(timer order): 기본 3장, 쉬움 앞 2장
  const STEPS = (prompt, title, cards, d, more) => ({
    prompt, toolOptions: { title, cards: [cards[2], cards[0], cards[1]] }, target: { order: cards }, difficulty: d,
    levels: { easy: { prompt: `${cut(prompt)}(2장).`, toolOptions: { cards: [cards[1], cards[0]] }, target: { order: cards.slice(0, 2) } } },
    ...more,
  });
  // 갈림길(dilemma): 기본 2번 갈림, 쉬움 첫 갈림만(다음 장면이 있던 보기는 그 자리에서 끝남), 도전 끝에서 까닭 카드 고르기
  const DILEMMA = (prompt, scene, path, reasons, good, d, more) => {
    const P = Array.isArray(path[0]) ? path : [path]; // 맞는 길이 여럿이면 [[…], […]]
    const first = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); if (x.next) { delete x.next; x.ending = c.easyEnding || '잘 골랐어요.'; } delete x.easyEnding; return x; }) });
    const clean = Object.assign({}, scene, { choices: scene.choices.map((c) => { const x = Object.assign({}, c); delete x.easyEnding; return x; }) });
    return {
      prompt, toolOptions: { title: '어떻게 할까요?', scene: clean }, target: { path: P }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(한 번).`, toolOptions: { scene: first }, target: { path: [...new Set(P.map((x) => x[0]))].map((x) => [x]) } },
        challenge: { prompt: `${cut(prompt)}, 까닭도요.`, toolOptions: { reasons, maxReasons: 1 }, target: { path: P, reasons: [good] } },
      },
      ...more,
    };
  };

  // =====================================================================================================
  // 1학년 · 친구를 웃게 하는 행동, 아프게 하는 행동
  const HURT = MOD('bully.e12.g1-hurt-or-smile', [1]);
  const SMILECRY = ['웃어요', '울어요'];
  const T_HURT = [
    HURT({
      id: 'bully.e12.g1-hurt-or-smile.intro.face-feelings', type: 'intro', title: '놀이터 친구 표정과 마음',
      method: '그림 속 친구 표정 보고 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 웃는 얼굴과 우는 얼굴 두 친구만 가리키며 마음 카드 두 장(기뻐요·아파요)을 함께 잇는다.', base: '세 친구(웃는·우는·화난 얼굴)의 이야기를 듣고 마음 카드 세 장을 잇는 시연을 따라 말한다.', challenge: '세 친구를 이은 뒤, 교사가 넷째 친구(혼자 서 있는 얼굴)를 더 보이면 그런 마음이 된 까닭 장면을 하나 말한다.' },
      intro: {
        teacher: '"놀이터 그림에 친구 셋이 있어요. 한 친구는 같이 그네를 타고, 한 친구는 밀려서 넘어졌고, 한 친구는 \'저리 가!\'라는 말을 들었대요. 친구들 마음은 어떨까요?" 친구를 하나씩 가리키며 이야기를 들려주고, 시연 단추로 마음 카드가 얼굴에 이어지는 모습을 보인다. "말만 들은 친구는 안 다쳤으니 괜찮아요"라는 말이 나오면 "몸은 안 다쳤지만 얼굴을 보세요. 말도 마음을 아프게 할 수 있을까요?"라고 되묻는다. 오늘은 친구를 웃게 하는 행동과 아프게 하는 행동을 알아본다고 밝힌다.',
        student: '그림 속 세 친구의 얼굴을 따라 지어 보고, 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'swing', label: '같이 그네 타요' }, { id: 'push', label: '밀려 넘어졌어요' }, { id: 'go', label: '"저리 가" 들었어요' }], cards: ['기뻐요', '아파요', '속상해요'] }, sequence: [{ match: { swing: '기뻐요', push: '아파요', go: '속상해요' } }] },
        art: { draw: 'a paper playground with three paper children: one laughing on a swing with a friend, one sitting on the ground crying after being pushed, one standing with a sad frown hearing go away, soft cut paper trees around', banner: '친구 마음은 어떨까?' },
      },
      notes: '그림 속 친구의 일로만 이야기한다. "너도 밀린 적 있니?"처럼 학생의 일을 묻지 않는다.',
    }),
    HURT({
      id: 'bully.e12.g1-hurt-or-smile.intro.chant-rhythm', type: 'intro', title: '"손은 토닥, 말은 방긋" 구호 리듬',
      method: '"고운 손, 고운 말" 구호 리듬 따라 치기', tool: 'keyboard', minutes: 6,
      levels: { easy: '"손은 토닥토닥" 두 마디만 교사와 함께 손뼉으로 따라 친다.', base: '구호 네 마디(손은 토닥토닥, 말은 방긋방긋 두 번)를 손뼉으로 따라 친다.', challenge: '네 마디를 친 뒤 끝에 우리 반 고운 말 한 마디("같이 놀자")를 박자에 맞춰 붙여 외친다.' },
      intro: {
        teacher: '"손은 토닥토닥(두 번 손뼉, 네 번 빠른 손뼉), 말은 방긋방긋!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고, 블록 하나에 손뼉 한 번씩 반 전체가 따라 친다. "토닥토닥"은 빨리 네 번이라 짧은 블록이라는 점을 손으로 보여 준다. "세게 치면 더 재미있어요"라는 말이 나오면 "손뼉도 친구 등을 토닥일 때도, 아프지 않을 만큼이 고운 손이에요"라고 말해 준다. 구호를 함께 외치며 오늘 배울 "고운 손, 고운 말"을 연다.',
        student: '"손은 토닥토닥, 말은 방긋방긋!" 구호를 손뼉에 맞춰 따라 외쳐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, sequence: [{ rhythm: ['q', 'q', 'e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e'] }] },
        art: { draw: 'paper children in a circle clapping hands gently, one child softly patting a friend on the shoulder, smiling paper speech bubbles floating above', banner: '고운 손, 고운 말' },
      },
    }),
    HURT({
      id: 'bully.e12.g1-hurt-or-smile.activity.yes-no-sort', type: 'activity', title: '웃어요·울어요 행동 바구니',
      method: '좋아요/안돼요 그림 카드 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 바구니 옆에 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '"아프게 센 손뼉"처럼 좋은 행동도 너무 세면 아픈 헷갈리는 카드 2장이 더 들어온다.' },
      activity: {
        title: '웃는·우는 행동 바구니', tool: 'sortboard',
        teacher: '"이 행동을 받은 친구는 웃을까요, 울까요?" 카드를 하나씩 소리 내어 읽고, 넣기 전에 반 전체가 웃는 얼굴이나 우는 얼굴을 지어 본다. "바보야는 그냥 말이라 괜찮아요"라는 학생에게 "그 말을 들은 친구 얼굴은 어떨까요? 말도 마음을 아프게 해요"라고 묻는다. "안 때렸으니 괜찮아요"에는 "안 끼워 주기도 친구를 울게 할 수 있을까요?"라고 되묻는다. 우는 바구니의 행동을 한 친구는 나쁜 아이가 아니라 그 행동을 바꾸면 된다는 점을 짚는다.',
        task: '친구가 웃는 행동과 우는 행동을 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(SMILECRY, '손으로 하는 행동을 나누어요.', ['토닥이기', '손잡기', '하이파이브'], ['밀치기', '꼬집기', '때리기'], ['아프게 센 손뼉', '세게 등 치기'], 1, 0.1),
          SB2(SMILECRY, '입으로 하는 말을 나누어요.', ['"같이 놀자"', '"고마워"', '"잘했어"'], ['"바보야"', '"저리 가"', '"못생겼어"'], ['웃으며 "바보"', '작게 놀리기'], 1, 0.15),
          SB2(SMILECRY, '놀이할 때 행동을 나누어요.', ['끼워 주기', '차례 지키기', '기다려 주기'], ['안 끼워 주기', '줄에서 밀기', '공 빼앗기'], ['"자리 없어"', '"나중에 와"'], 1, 0.2, { conclude: '때리지 않아도, 말이나 안 끼워 주기로도 친구는 아파요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '웃게 하면 ○, 아프게 하면 ×', columns: ['행동', '○ / ×'], cells: [['토닥이기', ''], ['"바보야"', ''], ['끼워 주기', ''], ['안 끼워 주기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '친구가 웃는 행동에 ○ 해요.', options: ['손잡기', '밀치기'], answer: '손잡기' }] },
    }),
    HURT({
      id: 'bully.e12.g1-hurt-or-smile.activity.next-scene', type: 'activity', title: '다음 장면 고르고 따라 하기',
      method: '다음 장면 고르고 역할놀이', tool: 'story', minutes: 13,
      levels: { easy: '다음 장면 2장 가운데 하나를 고른다.', base: '다음 장면 3장 가운데 하나를 고르고, 짝과 고른 장면의 말을 따라 해 본다.', challenge: '다음 장면과 함께, 실수한 친구의 마음 카드도 두 칸에 나누어 고른다.' },
      activity: {
        title: '이어질 장면 고르기', tool: 'story',
        teacher: '"바다와 나리가 블록을 쌓는데 나리 팔에 탑이 무너졌어요. 바다가 \'바보야!\' 하려고 해요. 다음 장면은 무엇이 좋을까요?" 장면마다 그림을 읽어 주고 고르기 전에 "그 말을 들으면 나리 얼굴은 어떨까요?"라고 묻는다. "먼저 무너뜨렸으니 바보라고 해도 돼요"라는 학생에게 "나리는 일부러 그랬을까요? 화가 나도 말은 고르게 할 수 있어요"라고 묻는다. 고른 뒤 짝과 한 명은 바다, 한 명은 나리가 되어 고른 장면의 말을 따라 해 본다.',
        task: '이야기 다음에 올 좋은 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          NEXT('블록 탑이 무너졌어요. 골라요.', C('again', '"다시 쌓자"', { motif: 'house' }), [C('fool', '"바보야!"', { motif: 'house' }), C('throw', '블록 던지기', { motif: 'house' })], { label: '나리 마음', cards: [C('sorry', '미안함'), C('fun', '신남')] }, 0.1),
          NEXT('친구가 우유를 쏟았어요. 골라요.', C('wipe', '같이 닦아요', { motif: 'sun' }), [C('dirty', '"더러워!"', { motif: 'sun' }), C('laugh', '손가락질 웃기', { motif: 'sun' })], { label: '쏟은 친구 마음', cards: [C('shy', '부끄러움'), C('proud', '뿌듯함')] }, 0.15),
          NEXT('팀이 달리기에서 졌어요. 골라요.', C('ok', '"잘했어!"', { motif: 'tree' }), [C('blame', '"너 때문이야"', { motif: 'tree' }), C('out', '"저리 가"', { motif: 'tree' })], { label: '늦은 친구 마음', cards: [C('sad', '속상함'), C('happy', '기쁨')] }, 0.2),
          { prompt: '고른 말을 짝과 해 봐요.', free: true, talk: true, difficulty: 0.2, conclude: '화가 나도 "다시 하자", "괜찮아"처럼 웃게 하는 말을 골라요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '탑이 무너졌을 때 할 말은?', options: ['"다시 쌓자"', '"바보야!"'], answer: '"다시 쌓자"' }] },
      notes: '역할놀이는 고른 좋은 장면의 말만 따라 한다. 아프게 하는 말("바보야")은 역할놀이로 소리 내어 하지 않는다.',
    }),
    HURT({
      id: 'bully.e12.g1-hurt-or-smile.activity.body-precious', type: 'activity', title: '종이 몸에서 소중한 곳 짚기',
      method: '종이 몸에서 소중한 곳 모두 짚기', tool: 'body', minutes: 13,
      levels: { easy: '종이 몸의 네 곳(어깨·배·무릎·발목) 가운데 고른다.', base: '종이 몸의 여섯 곳 가운데 고른다.', challenge: '몸 곳을 고른 뒤 "몸만 아파요 / 마음도 아파요" 보기까지 고른다.' },
      activity: {
        title: '종이 몸 짚기', tool: 'body',
        teacher: '"친구 몸에서 때려도 괜찮은 곳이 있을까요? 하나씩 눌러 보며 찾아봐요." 누를 때마다 반 전체가 "여기를 때리면 아파요"라고 따라 말하고, 누르기 전에 자기 몸의 같은 곳을 살짝 짚어 본다. "팔은 세니까 때려도 괜찮아요"라는 학생에게 "팔을 맞으면 멍이 들지 않을까요? 어디든 아파요"라고 묻는다. 셋째 문항에서 어깨 토닥이기처럼 웃게 하는 손길도 친구가 좋다고 할 때 한다는 점을 짚는다.',
        task: '종이 몸에서 아픈 곳과 토닥여도 되는 곳을 골라요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '때리면 아픈 곳을 모두 골라요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '배', '무릎', '발목'] }, target: { parts: ['목', '어깨', '팔꿈치', '배', '무릎', '발목'] }, difficulty: 0.1,
            hints: ['친구 몸에서 때려도 되는 곳이 있을지 생각해요.', '위에서부터 아래까지 하나씩 살펴봐요.', '보이는 곳을 모두 눌러요.'],
            levels: { easy: { prompt: '때리면 아픈 네 곳을 골라요.', toolOptions: { parts: ['어깨', '배', '무릎', '발목'] }, target: { parts: ['어깨', '배', '무릎', '발목'] } },
              challenge: { prompt: '아픈 곳을 고르고 보기도요.', toolOptions: { ask: { q: '맞은 친구는?', choices: ['몸만 아파요', '마음도 아파요'] } }, target: { parts: ['목', '어깨', '팔꿈치', '배', '무릎', '발목'], pick: 1 } } } },
          { prompt: '꼬집으면 아픈 곳을 모두 골라요.', toolOptions: { mode: 'parts', parts: ['피부', '팔꿈치', '손목', '허리', '허벅지', '발목'] }, target: { parts: ['피부', '팔꿈치', '손목', '허리', '허벅지', '발목'] }, difficulty: 0.15,
            hints: ['꼬집으면 살이 어떻게 될지 떠올려요.', '살과 피부는 몸 어디에나 있어요.', '보이는 곳을 모두 눌러요.'],
            levels: { easy: { prompt: '꼬집으면 아픈 네 곳을 골라요.', toolOptions: { parts: ['피부', '손목', '허리', '발목'] }, target: { parts: ['피부', '손목', '허리', '발목'] } },
              challenge: { prompt: '꼬집힌 친구 마음도 골라요.', toolOptions: { ask: { q: '꼬집힌 친구는?', choices: ['괜찮아요', '마음도 아파요'] } }, target: { parts: ['피부', '팔꿈치', '손목', '허리', '허벅지', '발목'], pick: 1 } } } },
          { prompt: '토닥여도 되는 곳을 골라요.', toolOptions: { mode: 'parts', parts: ['눈', '목', '어깨', '배', '무릎', '발목'] }, target: { parts: ['어깨'] }, difficulty: 0.2,
            hints: ['친구를 응원할 때 손을 어디에 얹는지 떠올려요.', '팔 위쪽, 목 옆을 살펴봐요.', '어깨를 눌러요.'],
            levels: { easy: { toolOptions: { parts: ['눈', '어깨', '배', '발목'] } },
              challenge: { prompt: '토닥일 곳과 먼저 할 일은?', toolOptions: { ask: { q: '토닥이기 전에?', choices: ['그냥 해요', '"괜찮아?" 물어요'] } }, target: { parts: ['어깨'], pick: 1 } } },
            conclude: '친구 몸은 어디도 때리면 안 돼요. 토닥이기도 친구가 좋다고 할 때 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구 몸에서 때려도 되는 곳은?', options: ['없어요', '팔이요'], answer: '없어요' }] },
      notes: '종이 몸에 머리·팔·다리 칸이 없어 계획의 머리·팔·배·다리 대신 목·어깨·팔꿈치·배·무릎·발목 등을 쓴다. 머리는 학생이 자기 몸을 짚게 하고 notes 대로 말로 더한다.',
    }),
    HURT({
      id: 'bully.e12.g1-hurt-or-smile.activity.smile-board', type: 'activity', title: '"우리 반 웃음 판" 꾸미기',
      method: '"우리 반 웃음 판" 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '조각을 3개 이상 붙인다(고르개 모양 셋).', base: '조각을 5개 이상 붙이고, 셋째 문항에서 조각마다 어떤 행동인지 선생님께 말한 것을 표시한다.', challenge: '조각 5개 이상에 따뜻한 색과 차가운 색 조각을 맞대어 꾸미고, 행동 이름을 짝에게 들려준다.' },
      activity: {
        title: '웃음 판 꾸미기', tool: 'collage',
        teacher: '"노란 동그라미는 같이 웃는 얼굴, 분홍 하트는 도와주기, 초록 나뭇잎은 같이 놀기예요. 우리 반 웃음 판을 꾸며 볼까요?" 조각을 붙일 때마다 "이 조각은 어떤 행동이에요?"라고 묻고 기다릴 반응("같이 놀아요", "도와줘요")을 듣는다. 조각을 잔뜩 붙이고 행동을 말하지 못하는 학생에게 "이 하트는 친구에게 무엇을 해 주는 조각일까요?"라고 묻는다. 웃게 하는 행동은 거창하지 않고 "같이 하자" 한마디부터라는 점을 짚는다.',
        task: '웃게 하는 행동 조각을 골라 웃음 판에 붙여요.', levels: { easy: { shapes: ['circle', 'heart', 'leaf'] }, base: { shapes: ['circle', 'heart', 'leaf', 'star', 'square'] }, challenge: {} },
        items: [
          { prompt: '노란 웃는 얼굴을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', color: '노랑', min: 5 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '노란 웃는 얼굴 3개를 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', min: 3 }] } }, challenge: { prompt: '따뜻한 색과 찬 색을 맞대요.', target: { contrast: 'warm-cool', pieces: { min: 5 } } } } },
          { prompt: '분홍 도와주기 하트를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', color: '분홍', min: 5 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '분홍 하트 3개를 붙여요.', target: { has: [{ shape: 'heart', color: '분홍', min: 3 }] } }, challenge: { prompt: '하트와 초록 잎을 맞대요.', target: { contrast: 'warm-cool', pieces: { min: 5 } } } } },
          { prompt: '웃음 판을 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['조각을 붙였어요', '행동을 말했어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개로 꾸미고 표시해요.', target: { selfCheck: ['조각을 붙였어요', '행동을 말했어요'], minPieces: 3 } }, challenge: { prompt: '꾸미고 짝에게 들려줘요.', target: { selfCheck: ['조각을 붙였어요', '짝에게 들려줬어요'], minPieces: 5 } } },
            conclude: '같이 웃기, 도와주기, 같이 놀기 — 우리 반을 웃게 하는 행동이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '친구를 웃게 하는 내 모습을 그려요.' }] },
      notes: '조각의 뜻(노랑 동그라미 = 같이 웃기, 분홍 하트 = 도와주기, 초록 나뭇잎 = 같이 놀기)은 칠판에 그려 두고 시작한다.',
    }),
    HURT({
      id: 'bully.e12.g1-hurt-or-smile.wrap.promise-moves', type: 'wrap', title: '약속 동작 차례대로 따라 하기',
      method: '약속 동작 차례대로 따라 하기', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 동작 카드 두 장(손은 토닥·말은 방긋)을 먼저 보이고 함께 따라 한다.', base: '동작 카드 세 장의 차례를 맞추고 동작과 함께 외친 뒤 스스로 점검에 표시한다.', challenge: '세 장을 맞춘 뒤 동작 차례를 내가 바꿔 정해 짝에게 보여 준다.' },
      wrap: {
        teacher: '"손은 토닥(어깨 토닥 손짓), 말은 방긋(입꼬리 올리기), 놀이는 다 같이(두 팔 벌려 원 그리기)!" 카드 차례를 맞춘 뒤 반 전체가 동작과 함께 두 번 외치고, 해 본 것에 표시한다. 출구 3번에서 "안 때리면 괜찮아요"를 고른 학생에게 "놀리는 말, 안 끼워 주기도 친구를 아프게 했지요?"라고 말해 준다. 마지막 구호는 짝과 마주 보고 외친다.',
        exitTicket: [
          ORDER('약속 동작', ['손은 토닥', '말은 방긋', '놀이는 다 같이'], '약속 동작을 차례대로 놓아요.'),
          SELF('약속 동작 점검', ['토닥 손짓 했어요', '방긋 웃었어요', '두 팔 벌렸어요']),
          { type: 'choice', prompt: '친구를 아프게 하는 것은?', options: ['때리기만요', '말과 행동 모두'], answer: 1, difficulty: 0.1, explain: '때리기뿐 아니라 놀리는 말, 안 끼워 주기도 친구를 아프게 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '고운 손, 고운 말',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '손은 토닥, 말은 ___', answer: '방긋' },
          { type: 'draw', prompt: '친구와 다 같이 노는 모습을 그려요.' },
        ],
        easy: { note: '"손은 토닥, 말은 방긋, 놀이는 다 같이!"를 떠올려요.', items: [{ type: 'draw', prompt: '친구 어깨를 토닥이는 내 손을 그려요.' }] },
      },
    }),
    HURT({
      id: 'bully.e12.g1-hurt-or-smile.wrap.kind-word-cards', type: 'wrap', title: '고운 말 카드 골라 읽기',
      method: '고운 말 카드 골라 소리 내어 읽기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 두 장("같이 놀자"·"저리 가")을 읽어 주고 웃게 하는 말을 함께 담는다.', base: '카드 4장 가운데 웃게 하는 말을 스스로 담고 소리 내어 따라 읽는다.', challenge: '담은 말마다 언제 쓸지(놀이 시작·친구가 넘어졌을 때) 그림 장면을 하나씩 말한다.' },
      wrap: {
        teacher: '"친구를 웃게 하는 말을 바구니에 담아 볼까요?" 카드를 하나씩 읽어 주고 담을 때마다 반 전체가 따라 읽는다. "저리 가"를 담은 학생에게 "이 말을 들은 친구는 웃을까요, 울까요?"라고 묻는다. 끝으로 가장 쓰고 싶은 말 하나를 골라 짝에게 웃으며 말해 준다.',
        exitTicket: [
          PICKW('웃게 하는 말', ['"같이 놀자"', '"괜찮아?"', '"저리 가"', '"고마워"'], ['"같이 놀자"', '"괜찮아?"', '"고마워"'], '웃게 하는 말을 담아요.'),
          { type: 'choice', prompt: '말로 한 것도 아플까요?', options: ['안 아파요', '마음이 아파요'], answer: 1, difficulty: 0.1, explain: '놀리는 말은 몸이 아니라 마음을 아프게 해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '고운 말 카드',
        items: [
          { type: 'check', prompt: '내가 쓸 고운 말에 ✓ 해요.', options: ['같이 놀자', '괜찮아?', '고마워'] },
          { type: 'draw', prompt: '고운 말을 하는 내 얼굴을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 놀이 중 "멈춰!" — 장난과 아프게 하기
  const STOP = MOD('bully.e12.g1-stop-in-play', [1]);
  const GOSTOP = ['계속해요', '멈춰요'];
  const YARD3 = [{ name: '미끄럼틀', icon: 'park', at: [0, 0] }, { name: '모래밭', icon: 'dot', at: [3, 0] }, { name: '계단', icon: 'dot', at: [1, 2] }];
  const YARD5 = [...YARD3, { name: '그네', icon: 'dot', at: [3, 2] }, { name: '잔디밭', icon: 'forest', at: [2, 1] }];
  const YARD_MORE = [{ name: '철봉', icon: 'dot', at: [0, 2] }, { name: '정글짐', icon: 'dot', at: [1, 0] }];
  // 말하기 역할놀이(story pick): 쉬움 말 2장 가운데 하나, 기본 말과 몸짓을 함께, 도전 멈춘 친구의 말까지 두 칸에
  const SAYDO = (prompt, say, wrongSay, act, wrongAct, reply, wrongReply, d, more) => ({
    prompt, toolOptions: { mode: 'pick', basket: '주인공이 할 것', cards: [wrongSay, act, say, wrongAct] }, target: { pick: [say.id, act.id] }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(말 하나).`, toolOptions: { cards: [wrongSay, say] }, target: { pick: [say.id] } },
      challenge: { prompt: `${cut(prompt)}, 친구 말도요.`, toolOptions: { mode: 'sort', slots: [{ id: 'me', label: '주인공' }, { id: 'you', label: '멈춘 친구' }], cards: [wrongSay, act, reply, say, wrongAct, wrongReply] }, target: { sort: { me: [say.id, act.id], you: [reply.id] } } },
    },
    ...more,
  });
  const T_STOP = [
    STOP({
      id: 'bully.e12.g1-stop-in-play.intro.two-pictures', type: 'intro', title: '술래잡기 두 그림, 둘 다 웃나요?',
      method: '두 그림 비교: 둘 다 웃나요?', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 두 장(둘 다 웃는 술래잡기·한 친구만 찡그린 술래잡기)을 나란히 들고 "둘 다 웃는 그림"을 함께 고른다.', base: '그림 세 장(둘 다 웃음·한 친구 찡그림·한 친구 울먹임)을 보고 둘 다 웃는 그림을 스스로 고르는 시연을 따라 말한다.', challenge: '둘 다 웃는 그림을 고른 뒤 찡그린 친구의 마음 낱말(싫어요·무서워요)을 하나 말한다.' },
      intro: {
        teacher: '"두 그림 모두 술래잡기를 해요. 어느 그림이 진짜 놀이일까요? 친구들 얼굴을 잘 보세요." 시연 단추로 "둘 다 웃어요" 그림이 바구니에 담기는 모습을 보인다. "둘 다 뛰고 있으니 똑같이 놀이예요"라는 말이 나오면 "한 친구 얼굴은 어때요? 같이 웃어야 놀이예요. 한 사람이라도 싫으면 멈춰요"라고 되묻듯 답한다. 오늘은 장난과 아프게 하기를 가르는 말 "멈춰!"를 배운다고 밝힌다.',
        student: '두 그림 가운데 친구들이 둘 다 웃는 그림을 손가락으로 가리켜요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '진짜 놀이', cards: [C('both', '둘 다 웃어요', { motif: 'sun' }), C('frown', '한 명 찡그려요', { motif: 'cloud' }), C('teary', '한 명 울먹여요', { motif: 'rain' })], shuffle: false }, sequence: [{ pick: ['both'] }] },
        art: { draw: 'two side-by-side paper scenes of tag on a playground: on the left both paper children laugh while running, on the right one child chases while the other frowns and holds up a hand', banner: '둘 다 웃나요?' },
      },
    }),
    STOP({
      id: 'bully.e12.g1-stop-in-play.intro.stop-signal', type: 'intro', title: '"멈춰!" 신호 놀이',
      method: '"멈춰!" 신호 놀이', tool: 'timer', minutes: 6,
      levels: { easy: '타이머를 세 번 돌려 초록 걷기·빨강 "멈춰!"를 세 번 한다.', base: '다섯 번 돌려 신호마다 바로 멈추고, 잘 멈췄는지 스스로 점검한다.', challenge: '다섯 번 하고 멈출 때마다 옆 친구에게 "괜찮아?" 한마디를 붙인다.' },
      intro: {
        teacher: '"타이머가 돌면 제자리 걷기, 멈추면 두 손을 앞으로 내밀며 \'멈춰!\' 해요." 시연 단추로 타이머 횟수가 맞춰지는 모습을 보이고 반 전체가 신호 놀이를 한다. 늦게 멈춘 학생에게 "놀이에서 친구가 \'멈춰!\' 하면 지금처럼 바로 멈춰야 해요. 조금만 더 하면 친구는 어떨까요?"라고 묻는다. "나는 장난이었으니까 조금 더 해도 돼요"라는 생각에는 "장난인지 아닌지는 상대 친구 얼굴이 알려 줘요"라고 짚는다. 걷기·멈춤 시간은 우리 반 놀이 약속 값이다.',
        student: '신호가 멈추면 손을 앞으로 내밀고 "멈춰!" 하며 바로 서요.',
        demo: { tool: 'timer', options: { title: '"멈춰!" 신호 놀이(우리 반 약속)', plan: { work: 10, rest: 5, rounds: 1 } }, sequence: [{ plan: { work: 10, rest: 5, rounds: 5 } }] },
        art: { draw: 'paper children marching in place under a green paper light, then freezing with both palms forward under a red paper light that reads stop', banner: '"멈춰!" 하면 멈춰요' },
      },
      notes: '타이머의 걷기 10초·멈춤 5초는 놀이 진행용 우리 반 약속이다. 뛰지 않고 제자리에서만 걷는다.',
    }),
    STOP({
      id: 'bully.e12.g1-stop-in-play.activity.ok-or-stop', type: 'activity', title: '계속해요·멈춰요 장면 나누기',
      method: '계속해요/멈춰요 장면 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '장면 카드 4장, 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '장면 카드 6장을 다 넣은 뒤 확인한다.', challenge: '"웃으며 뿌리쳐요"처럼 얼굴은 웃지만 싫다는 몸짓이 있는 헷갈리는 장면 2장이 더 들어온다.' },
      activity: {
        title: '놀이 장면 바구니', tool: 'sortboard',
        teacher: '"이 놀이는 계속해도 될까요, 멈춰야 할까요? 친구 얼굴과 말을 잘 들어 봐요." 카드를 읽어 줄 때 "그만!", "싫어" 같은 말에 힘을 주어 읽는다. "친구가 웃고 있으니 계속해도 돼요"라는 학생에게 "웃으면서 손을 뿌리치면요? 말과 몸짓도 같이 봐요"라고 묻는다. 한 사람이라도 싫다고 하면 멈추는 것이고, 멈춘 친구는 잘한 것이라고 짚는다.',
        task: '놀이 장면을 계속해요·멈춰요 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(GOSTOP, '간지럼·잡기 놀이를 나누어요.', ['같이 빙글빙글', '둘 다 깔깔', '"또 하자!"'], ['"그만!" 간지럼', '"싫어" 잡기', '울먹이며 피함'], ['웃으며 뿌리쳐요', '억지로 웃어요'], 1, 0.1),
          SB2(GOSTOP, '밀기·당기기 놀이를 나누어요.', ['같이 줄다리기', '살살 기차놀이', '손잡고 뛰기'], ['뒤에서 확 밀기', '옷 잡아당기기', '"아파" 해도 꽉'], ['장난이라 밀기', '웃으며 "그만"'], 1, 0.15),
          SB2(GOSTOP, '술래잡기 장면을 나누어요.', ['살짝 터치', '"잡았다!" 웃기', '술래 바꾸기'], ['세게 잡아끌기', '넘어뜨리기', '"싫다"는데 쫓기'], ['울먹이며 웃기', '"재밌잖아" 계속'], 1, 0.2, { conclude: '같이 웃으면 놀이, 한 사람이라도 싫으면 멈춰요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '계속하면 ○, 멈추면 × 써요.', columns: ['장면', '○ / ×'], cells: [['같이 줄다리기', ''], ['"그만!" 간지럼', ''], ['둘 다 깔깔', ''], ['옷 잡아당기기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '멈춰야 하는 장면에 ○ 해요.', options: ['"그만!" 간지럼', '둘 다 깔깔'], answer: '"그만!" 간지럼' }] },
    }),
    STOP({
      id: 'bully.e12.g1-stop-in-play.activity.stop-roleplay', type: 'activity', title: '"싫어, 멈춰!" 말과 몸짓',
      method: '"싫어, 멈춰!" 말하는 역할놀이', tool: 'story', minutes: 13,
      levels: { easy: '주인공이 할 말 2장 가운데 하나를 고른다.', base: '말 카드와 몸짓 카드를 함께 골라 담고, 짝과 번갈아 해 본다.', challenge: '주인공의 말·몸짓과 함께, 멈춘 친구가 할 말("미안해")까지 두 칸에 나누어 고른다.' },
      activity: {
        title: '멈춰 말하기 역할놀이', tool: 'story',
        teacher: '"바다가 자꾸 나리 옷을 잡아당겨요. 나리는 무엇이라고 말하고 몸은 어떻게 할까요?" 고르기 전에 반 전체가 손바닥을 앞으로 내밀며 "싫어, 멈춰!"를 또박또박 연습한다. "참으면 친구가 그만할 거예요"를 고르는 학생에게 "말하지 않으면 바다는 나리가 싫은 걸 알 수 있을까요?"라고 묻는다. 멈춘 바다에게도 "멈춰 줘서 고마워"라고 말해 주며, 멈춘 친구는 나쁜 아이가 아니라 잘 바꾼 친구라는 점을 짚는다. 짝 역할놀이에서는 몸에 닿지 않고 말로만 한다.',
        task: '주인공이 할 말과 몸짓을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SAYDO('옷을 자꾸 당겨요. 골라요.', C('say', '"싫어, 멈춰!"', { motif: 'house' }), C('hush', '꾹 참아요', { motif: 'house' }), C('hand', '손 앞으로 쭉', { motif: 'house' }), C('pull', '같이 당겨요', { motif: 'house' }), C('sorry', '"미안해"'), C('more', '"또 할래"'), 0.1),
          SAYDO('연필로 콕콕 찔러요. 골라요.', C('say', '"하지 마!"', { motif: 'pencil' }), C('cry', '울기만 해요', { motif: 'pencil' }), C('look', '눈 보고 말해요', { motif: 'pencil' }), C('poke', '나도 찔러요', { motif: 'pencil' }), C('stop', '"멈출게"'), C('joke', '"장난인데?"'), 0.15),
          SAYDO('의자를 흔들어요. 골라요.', C('say', '"멈춰, 무서워"', { motif: 'house' }), C('quiet', '말 안 해요', { motif: 'house' }), C('stand', '일어나 비켜요', { motif: 'house' }), C('kick', '발로 차요', { motif: 'house' }), C('sorry', '"그만할게"'), C('fun', '"재밌잖아"'), 0.2),
          { prompt: '짝과 번갈아 해 봐요.', free: true, talk: true, difficulty: 0.2, conclude: '싫으면 손을 내밀며 "싫어, 멈춰!" 하고, 들은 친구는 바로 멈춰요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '싫어, ___!', answer: '멈춰' }] },
      notes: '역할놀이에서 잡아당기기·찌르기 행동은 하지 않고 "잡아당길게"라는 말로만 정한다.',
    }),
    STOP({
      id: 'bully.e12.g1-stop-in-play.activity.safe-play-map', type: 'activity', title: '운동장 지도에서 안전한 곳',
      method: '운동장 지도에서 안전하게 노는 곳 찾기', tool: 'map', minutes: 13,
      levels: { easy: '장소 3곳(미끄럼틀·모래밭·계단)이 있는 지도에 핀을 꽂는다.', base: '장소 5곳이 있는 지도에 핀을 꽂는다.', challenge: '철봉·정글짐까지 7곳이 있는 지도에 핀을 꽂고, 그곳에서 밀면 안 되는 까닭 보기를 고른다.' },
      activity: {
        title: '운동장 칸 지도 핀 꽂기', tool: 'map',
        teacher: '"우리 학교 운동장 지도예요. 친구를 밀면 특히 위험한 곳은 어디일까요?" 핀을 꽂기 전에 그 장소에서 넘어지면 어디가 다칠지 손으로 짚어 보게 한다. "모래밭은 푹신하니까 밀어도 돼요"라는 학생에게 "모래가 눈에 들어가면 어떨까요? 어디서든 미는 건 멈춰요"라고 묻는다. 계단과 미끄럼틀 위는 줄 서서 차례로 하고, 같이 놀기 좋은 곳에서도 "싫어" 하면 멈춘다는 점을 짚는다.',
        task: '운동장 지도에서 알맞은 곳에 핀을 꽂아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          PIN('밀면 아주 위험한 곳에 꽂아요.', YARD3, YARD5, YARD_MORE, '계단', { prompt: '위험한 곳과 까닭을 골라요.', q: '계단에서 밀면?', choices: ['굴러 다쳐요', '빨리 가요'], answer: 0 }, 0.1),
          PIN('같이 놀기 좋은 곳에 꽂아요.', YARD3, YARD5, YARD_MORE, '모래밭', { prompt: '놀기 좋은 곳과 약속은?', q: '모래밭 놀이 약속은?', choices: ['모래 안 뿌려요', '모래 던져요'], answer: 0 }, 0.15),
          PIN('줄 서서 차례로 타는 곳은?', YARD3, YARD5, YARD_MORE, '미끄럼틀', { prompt: '차례로 타는 곳과 까닭은?', q: '위에서 밀면?', choices: ['떨어져 다쳐요', '더 신나요'], answer: 0 }, 0.2, { conclude: '계단·미끄럼틀에서는 절대 밀지 않고, 줄 서서 차례로 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '계단에서는 어떻게 해요?', options: ['밀지 않아요', '밀어도 돼요'], answer: '밀지 않아요' }] },
      notes: '칸 지도는 운동장 놀이 기구를 단순하게 나타낸 것이다. 우리 학교 운동장 배치에 맞게 장소 이름을 말로 바꿔 불러도 된다.',
    }),
    STOP({
      id: 'bully.e12.g1-stop-in-play.activity.play-rule-song', type: 'activity', title: '놀이 약속 노래 가락',
      method: '놀이 약속 노래 가락 따라 치기', tool: 'keyboard', minutes: 13,
      levels: { easy: '줄마다 끝 세 음("멈춰요"·"놀아요")만 듣고 따라 치고, 건반에 계이름이 보인다.', base: '"싫다 하면 멈춰요", "같이 웃어 놀아요" 한 줄 가락을 듣고 따라 친다.', challenge: '두 줄을 친 뒤 셋째 문항에서 "솔"로 시작해 "도"로 끝나는 우리 반 끝맺음 가락 다섯 음을 짓는다.' },
      activity: {
        title: '약속 노래 가락 치기', tool: 'keyboard',
        teacher: '"싫다 하면 멈춰요, 같이 웃어 놀아요" 노래를 먼저 두 번 불러 준 뒤 \'가락 듣기\'로 한 줄씩 들려준다. 치기 전에 반 전체가 손으로 높낮이를 그리며 따라 부른다(높은 음은 손을 위로). 음을 하나 빼먹은 학생에게 "노래 글자 하나에 건반 한 번이에요. 싫, 다, 하, 면… 몇 번 쳤는지 세어 볼까요?"라고 묻는다. 다 치고 나면 노랫말 그대로 "싫다 하면 멈추는" 것이 놀이 약속이라는 점을 다시 짚는다.',
        task: '놀이 약속 노래 가락을 듣고 건반으로 따라 쳐요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
        items: [
          MEL('"싫다 하면 멈춰요" 쳐요.', ['솔', '솔', '미', '미', '레', '레', '도'], 0.1),
          MEL('"같이 웃어 놀아요" 쳐요.', ['미', '미', '솔', '솔', '라', '솔', '도'], 0.15),
          { prompt: '"도"로 끝나게 가락을 지어요.', toolOptions: {}, target: { compose: { length: 4, endOn: '도' } }, difficulty: 0.2,
            levels: { easy: { prompt: '"도"로 끝나는 세 음을 지어요.', target: { compose: { length: 3, endOn: '도' } } }, challenge: { prompt: '솔로 시작, 도로 끝 다섯 음.', target: { compose: { length: 5, startOn: '솔', endOn: '도' } } } },
            conclude: '노래처럼 "싫다 하면 멈추고", 같이 웃으며 놀아요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '노랫말을 따라 써요.', text: '싫다 하면 ___', answer: '멈춰요' }] },
      notes: '가락은 수업용으로 지은 짧은 노래다. 소리는 건반을 누르거나 \'가락 듣기\'를 눌렀을 때만 난다.',
    }),
    STOP({
      id: 'bully.e12.g1-stop-in-play.wrap.stop-pattern', type: 'wrap', title: '"놀자 → 싫어? → 멈춰" 규칙 띠',
      method: '놀이 차례 규칙 띠 완성하기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 띠를 처음부터 소리 내어 읽어 주고 빈칸 자리를 함께 짚으며 보기를 고른다.', base: '빈칸 두 곳에 차례로 올 조각을 보기에서 스스로 고르고 띠를 소리 내어 읽는다.', challenge: '빈칸을 고른 뒤 둘째 출구에서 틀리게 놓인 조각("또 해")을 보기에서 찾는다.' },
      wrap: {
        teacher: '"놀자, 싫어?, 멈춰! — 이 세 조각이 되풀이돼요. 빈칸에는 무엇이 올까요?" 띠를 반 전체가 박자에 맞춰 읽은 뒤 채운다. 둘째 출구에서 "또 해"를 찾지 못한 학생에게 "친구가 싫다고 했는데 \'또 해\'가 오면 어떻게 될까요?"라고 묻는다. 출구 3번에서 "계속해요"를 고른 학생에게 "친구가 웃어도 \'그만\'이라고 하면 멈춰요"라고 말해 준다.',
        exitTicket: [
          FILL(['놀자', '싫어?', '멈춰', '놀자', '싫어?', '멈춰', '놀자', '싫어?'], [5, 7], '빈칸에 알맞은 조각을 넣어요.'),
          ODD(['놀자', '싫어?', '멈춰', '놀자', '싫어?', '멈춰'], 5, '또 해', '틀리게 놓인 조각을 찾아요.'),
          { type: 'choice', prompt: '친구가 웃으며 "그만" 하면?', options: ['계속해요', '멈춰요'], answer: 1, difficulty: 0.1, explain: '웃어도 "그만"이라고 하면 멈춰요. 장난인지는 친구 마음이 정해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '놀이 중 "멈춰!"',
        items: [
          { type: 'blank', prompt: '규칙 띠를 따라 써요.', text: '놀자 → 싫어? → ___', answer: '멈춰' },
          { type: 'draw', prompt: '"멈춰!" 하는 내 손을 그려요.' },
        ],
        easy: { note: '"놀자, 싫어?, 멈춰!"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '친구와 웃으며 노는 모습을 그려요.' }] },
      },
      notes: '규칙 판의 빈칸·조각 칸이 휴대폰에서 32px 라(44px 기준 미달) 빈칸 채우기·틀린 조각 찾기를 보기 고르기(rule)로 한다.',
    }),
    STOP({
      id: 'bully.e12.g1-stop-in-play.wrap.mind-check', type: 'wrap', title: '"멈춰!"가 필요한 때 생각그물',
      method: '"멈춰!"가 필요한 때 그림 생각그물', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 카드 두 장(간지럼·잡아당기기)을 읽어 주고 함께 가지에 잇는다.', base: '카드 다섯 장 가운데 "멈춰!"가 필요한 때 네 장을 스스로 잇는다.', challenge: '네 장을 이은 뒤 둘째 출구에서 "멈춘 다음 할 말"을 고른다.' },
      wrap: {
        teacher: '"가운데에 \'멈춰!\'가 있어요. 언제 \'멈춰!\'가 필요할까요?" 카드를 읽어 주고 담을 때마다 반 전체가 손바닥을 내밀며 "멈춰!"를 외친다. "같이 웃는 줄다리기"를 담은 학생에게 "둘 다 웃을 때도 멈춰야 할까요?"라고 묻는다. 둘째 출구에서는 멈춘 다음에 "미안해", "괜찮아?"로 마음을 잇는다는 점을 짚는다.',
        exitTicket: [
          PICKM('"멈춰!" 할 때', ['"그만" 간지럼', '옷 잡아당기기', '뒤에서 밀기', '같이 웃는 놀이', '"싫어" 했는데'], ['"그만" 간지럼', '옷 잡아당기기', '뒤에서 밀기', '"싫어" 했는데'], '"멈춰!"가 필요한 때를 이어요.'),
          { type: 'choice', prompt: '멈춘 다음 할 말은?', options: ['"괜찮아?"', '"장난인데?"'], answer: 0, difficulty: 0.1, explain: '멈춘 다음에는 "괜찮아?", "미안해"로 친구 마음을 살펴요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '"멈춰!"가 필요한 때',
        items: [
          { type: 'check', prompt: '"멈춰!" 할 때에 ✓ 해요.', options: ['친구가 "그만" 할 때', '친구가 울먹일 때', '둘 다 깔깔 웃을 때'] },
          { type: 'blank', prompt: '멈춘 다음 할 말을 써요.', text: '"___?"', answer: '괜찮아' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 화면 속 친구에게도 고운 말 (사이버폭력)
  const SCREEN = MOD('bully.e12.g1-screen-kind-words', [1]);
  const SENDNO = ['보내요', '안 보내요'];
  const T_SCREEN = [
    SCREEN({
      id: 'bully.e12.g1-screen-kind-words.intro.phone-faces', type: 'intro', title: '메시지 받은 친구 얼굴',
      method: '메시지를 받은 친구 얼굴 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 메시지 두 개("같이 놀자 :)"·"너 못생겼어")를 읽어 주고 받은 친구 얼굴(웃음·눈물)을 함께 고른다.', base: '메시지 세 개를 듣고 받은 친구 마음을 잇는 시연을 따라 말한다.', challenge: '글 없이 "메롱" 그림만 온 메시지도 받은 친구 마음을 말한다.' },
      intro: {
        teacher: '"종이 휴대전화에 메시지가 왔어요. 하나는 \'같이 놀자 :)\', 하나는 \'너 못생겼어\'예요. 받은 친구 얼굴은 어떨까요?" 메시지를 읽어 주고 시연 단추로 마음 카드가 이어지는 모습을 보인다. "화면 속 말은 진짜가 아니라서 괜찮아요"라는 말이 나오면 "화면 너머에 진짜 친구가 있어요. 그 친구 마음은 진짜일까요?"라고 되묻는다. 오늘은 화면 속 친구에게도 고운 말을 고르는 법을 배운다고 밝힌다.',
        student: '메시지를 받은 친구의 얼굴을 따라 지어 보고 마음을 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'play', label: '"같이 놀자 :)"' }, { id: 'ugly', label: '"너 못생겼어"' }, { id: 'tongue', label: '"메롱" 그림만' }], cards: ['기쁨', '슬픔', '속상함'] }, sequence: [{ match: { play: '기쁨', ugly: '슬픔', tongue: '속상함' } }] },
        art: { draw: 'a large paper smartphone with two chat bubbles, one with a smiley saying lets play, one with a frowning message, and two paper children beside it, one smiling and one with a tear', banner: '화면 너머에도 친구가 있어요' },
      },
    }),
    SCREEN({
      id: 'bully.e12.g1-screen-kind-words.intro.screen-chant', type: 'intro', title: '"화면에서도 방긋" 구호 리듬',
      method: '"화면에서도 방긋" 구호 리듬', tool: 'keyboard', minutes: 6,
      levels: { easy: '"보내기 전에 한 번 더" 두 마디를 손뼉으로 따라 친다.', base: '"보내기 전에 한 번 더, 화면에서도 방긋" 두 줄을 손뼉으로 따라 친다.', challenge: '구호 끝 긴 박에 맞춰 손가락 하나를 들어 "멈춤" 동작을 넣는다.' },
      intro: {
        teacher: '"보내기 전에 한 번 더(빠른 손뼉 넷, 손뼉 둘), 화면에서도 방긋(빠른 손뼉 넷, 긴 손뼉 하나)!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고 반 전체가 손뼉으로 따라 친다. 마지막 긴 블록에서는 손뼉을 치고 두 박 동안 멈춰 기다린다는 것을 보인다. "빨리 보내야 친구가 좋아해요"라는 말이 나오면 "보내기 전에 한 번 멈추면 친구 마음을 떠올릴 시간이 생겨요"라고 말해 준다.',
        student: '구호를 손뼉에 맞춰 따라 외치고, 끝에서 잠깐 멈춰요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, sequence: [{ rhythm: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'h'] }] },
        art: { draw: 'paper children clapping in rhythm around a big paper tablet showing a smiling face, one child holding up one finger as if to pause', banner: '화면에서도 방긋' },
      },
    }),
    SCREEN({
      id: 'bully.e12.g1-screen-kind-words.activity.send-or-not', type: 'activity', title: '보내요·안 보내요 화면 카드',
      method: '보내요/안 보내요 화면 카드 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '화면 카드 4장, 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '화면 카드 6장을 다 넣은 뒤 확인한다.', challenge: '"친구 얼굴 낙서"처럼 웃기려고 만든 그림이지만 친구를 놀리는 헷갈리는 카드 2장이 더 들어온다.' },
      activity: {
        title: '화면 카드 바구니', tool: 'sortboard',
        teacher: '"이 메시지를 친구에게 보내도 될까요?" 카드를 읽어 주고, 넣기 전에 "이걸 받은 친구 얼굴은?"이라고 묻는다. "웃기려고 만든 그림이니 보내도 돼요"라는 학생에게 "그 그림 속 친구도 웃을까요? 받은 친구가 웃어야 재미있는 거예요"라고 묻는다. "얼굴이 안 보이니 괜찮아요"에는 "얼굴이 안 보여도 친구 마음은 그대로 아파요"라고 짚는다.',
        task: '화면 카드를 보내요·안 보내요 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(SENDNO, '메시지 카드를 나누어요.', ['"생일 축하해"', '"같이 놀래?"', '"고마워"'], ['"바보 멍청이"', '"너랑 안 놀아"', '"메롱 메롱"'], ['친구 얼굴 낙서', '몰래 찍은 사진'], 1, 0.1),
          SB2(SENDNO, '그림 카드를 나누어요.', ['하트 그림', '웃는 얼굴', '꽃 그림'], ['바보 그림', '메롱 사진', '화난 똥 그림'], ['우는 친구 사진', '놀리는 스티커'], 1, 0.15),
          SB2(SENDNO, '답장 카드를 나누어요.', ['"잘 자"', '"내일 보자"', '"멋지다!"'], ['"너 때문이야"', '나쁜 말 따라 쓰기', '"못생긴 애"'], ['같이 놀리기 ㅋㅋ', '친구 흉 보기'], 1, 0.2, { conclude: '받는 친구가 웃을 말만 보내요. 화면 속에도 친구 마음이 있어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '보내면 ○, 안 보내면 × 써요.', columns: ['화면 카드', '○ / ×'], cells: [['"생일 축하해"', ''], ['바보 그림', ''], ['"같이 놀래?"', ''], ['메롱 사진', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '보낼 메시지에 ○ 해요.', options: ['"고마워"', '"바보"'], answer: '"고마워"' }] },
    }),
    SCREEN({
      id: 'bully.e12.g1-screen-kind-words.activity.show-adult', type: 'activity', title: '속상한 메시지를 보면?',
      method: '속상한 메시지를 보면? 장면 고르기', tool: 'story', minutes: 13,
      levels: { easy: '다음 장면 2장(똑같이 답하기·어른께 보여 주기) 가운데 하나를 고른다.', base: '다음 장면 3장(똑같이 답하기·지우고 숨기기·어른께 보여 주기) 가운데 하나를 고른다.', challenge: '다음 장면과 함께 어른께 보여 줄 때 할 말("이거 봐 주세요")까지 두 칸에 나누어 고른다.' },
      activity: {
        title: '화면 속 일, 다음 장면 고르기', tool: 'story',
        teacher: '"나리 태블릿에 \'너 이상해\'라는 메시지가 왔어요. 나리는 어떻게 할까요?" 장면마다 읽어 주고 고르기 전에 "그다음에는 어떻게 될까요?"라고 묻는다. "똑같이 나쁜 말로 답해요"를 고른 학생에게 "그러면 나쁜 말이 하나 더 늘어요. 누가 도와줄 수 있을까요?"라고 묻는다. "지우고 숨기면 끝나요"에는 "지우면 어른이 볼 수가 없어요. 지우지 말고 그대로 보여 줘요"라고 짚는다. 나쁜 말을 받은 것은 나리 잘못이 아니고, 보여 준 나리는 잘한 것이라고 말해 준다.',
        task: '화면에서 속상한 일이 생긴 이야기의 다음 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          NEXT('놀리는 메시지가 왔어요. 골라요.', C('show', '어른께 보여 줘요', { motif: 'house' }), [C('same', '똑같이 답해요', { motif: 'house' }), C('hide', '지우고 숨겨요', { motif: 'house' })], { label: '어른께 할 말', cards: [C('please', '"이거 봐 주세요"'), C('nothing', '"아무것도 아냐"')] }, 0.1),
          NEXT('친구 놀리는 그림이 왔어요.', C('tell', '어른께 보여요', { motif: 'house' }), [C('share', '다른 친구에게', { motif: 'house' }), C('laugh', 'ㅋㅋ 답해요', { motif: 'house' })], { label: '어른께 할 말', cards: [C('help', '"도와주세요"'), C('fun', '"웃기죠?"')] }, 0.15),
          NEXT('영상통화에서 놀려요.', C('off', '끄고 어른께 가요', { motif: 'house' }), [C('yell', '같이 소리쳐요', { motif: 'house' }), C('keep', '계속 들어요', { motif: 'house' })], { label: '어른께 할 말', cards: [C('saw', '"이 말 봐 주세요"'), C('secret', '"비밀이에요"')] }, 0.2),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '나쁜 메시지가 오면?', options: ['어른께 보여 줘요', '똑같이 답해요'], answer: '어른께 보여 줘요' }] },
      notes: '장면은 가상 친구 나리의 일이다. 학생이 받은 메시지를 보여 달라고 하거나 묻지 않는다. 걱정되는 말을 꺼내면 수업 뒤 따로 "말해 줘서 고마워"로 받는다.',
    }),
    SCREEN({
      id: 'bully.e12.g1-screen-kind-words.activity.kind-sticker-msg', type: 'activity', title: '고운 말 메시지 카드 꾸미기',
      method: '고운 말 메시지 카드 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '조각을 3개 이상 붙인다(고르개 모양 셋).', base: '조각을 5개 이상 붙여 휴대전화 화면 모양 카드를 꾸민다.', challenge: '하트·별을 함께 붙이고, 셋째 문항에서 보낼 말을 선생님께 말로 들려준 것을 표시한다.' },
      activity: {
        title: '고운 메시지 카드', tool: 'collage',
        teacher: '"종이 휴대전화 화면에 친구에게 보낼 고운 메시지를 꾸며 볼까요? 하트는 \'좋아해\', 별은 \'멋지다\', 동그라미 꽃은 \'고마워\'예요." 조각을 붙이며 "이 카드를 받은 친구 얼굴은 어떨까요?"라고 묻는다. 메롱 얼굴이나 놀리는 그림을 꾸미려는 학생에게 "이 그림을 받은 친구도 웃을까요?"라고 묻는다. 셋째 문항에서는 보낼 말을 선생님께 한 문장으로 들려주게 하고, 글씨는 선생님이 대신 적어 줄 수 있다고 말한다.',
        task: '친구에게 보낼 고운 메시지 카드를 조각으로 꾸며요.', levels: { easy: { shapes: ['heart', 'star', 'circle'] }, base: { shapes: ['heart', 'star', 'circle', 'rect', 'square'] }, challenge: {} },
        items: [
          { prompt: '하트로 고운 카드를 꾸며요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'heart', min: 5 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '하트 3개로 카드를 꾸며요.', target: { has: [{ shape: 'heart', min: 3 }] } }, challenge: { prompt: '하트 5개와 별 2개를 붙여요.', target: { has: [{ shape: 'heart', min: 5 }, { shape: 'star', min: 2 }] } } } },
          { prompt: '반짝 별로 "멋지다"를 꾸며요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'star', min: 5 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '별 3개로 "멋지다"를 꾸며요.', target: { has: [{ shape: 'star', min: 3 }] } }, challenge: { prompt: '별 5개와 동그라미 2개요.', target: { has: [{ shape: 'star', min: 5 }, { shape: 'circle', min: 2 }] } } } },
          { prompt: '카드를 꾸미고 보낼 말을 해요.', toolOptions: { bg: '하양' }, target: { selfCheck: ['카드를 꾸몄어요', '보낼 말을 정했어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개 카드, 보낼 말은?', target: { selfCheck: ['카드를 꾸몄어요', '보낼 말을 정했어요'], minPieces: 3 } }, challenge: { prompt: '보낼 말을 선생님께 들려줘요.', target: { selfCheck: ['카드를 꾸몄어요', '선생님께 들려줬어요'], minPieces: 5 } } },
            conclude: '화면으로 보내는 말도 받는 친구가 웃을 고운 말로 골라요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '친구에게 보낼 고운 메시지를 그려요.' }] },
      notes: '꾸민 카드는 실제로 보내지 않고 교실 게시판에 붙인다. 학생 이름·사진은 카드에 넣지 않는다.',
    }),
    SCREEN({
      id: 'bully.e12.g1-screen-kind-words.activity.pause-before-send', type: 'activity', title: '보내기 전 "하나, 둘, 셋"',
      method: '보내기 전 "하나, 둘, 셋" 멈춤 연습', tool: 'timer', minutes: 13,
      levels: { easy: '순서 카드 2장(하나 멈추고·둘 읽고)의 차례를 맞추고, 연습은 2번이 되게 맞춘다.', base: '순서 카드 3장(하나 멈추고·둘 읽고·셋 친구 얼굴)의 차례를 맞추고, 연습을 3번 하게 맞춘다.', challenge: '세 단계를 맞추고, 셋째 문항에서 받는 친구 역할이 되어 받은 쪽 동작까지 해 본 것을 표시한다.' },
      activity: {
        title: '보내기 전 멈춤 세 단계', tool: 'timer',
        teacher: '"보내기 단추를 누르기 전에 \'하나!\' 손을 멈추고, \'둘!\' 소리 내어 읽고, \'셋!\' 받을 친구 얼굴을 떠올려요." 동작을 보인 뒤 순서 카드를 맞추고 타이머에 맞춰 반 전체가 연습한다. "빨리 보내야 답장이 와요"라는 학생에게 "셋까지 세는 동안 친구 마음을 떠올리면, 보낼 말을 바꿀 수도 있어요"라고 말해 준다. 셋째 문항에서는 짝이 보내는 쪽, 내가 받는 쪽이 되어 받은 마음을 얼굴로 지어 본다.',
        task: '보내기 전 멈춤 차례를 맞추고 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('보내기 전 차례를 놓아요.', '보내기 전 멈춤', ['하나, 멈추고', '둘, 읽고', '셋, 친구 얼굴'], 0.1),
          { prompt: '멈춤 연습을 3번 하게 맞춰요.', toolOptions: { title: '멈춤 연습(우리 반 약속)', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            hints: ['연습할 횟수를 세어 봐요.', '번 칸이 연습 횟수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '멈춤 연습을 2번 하게 맞춰요.', target: { plan: { rounds: 2 } } } } },
          { prompt: '해 본 멈춤 동작에 표시해요.', toolOptions: { title: '멈춤 점검' }, target: { selfCheck: ['손을 멈췄어요', '소리 내어 읽었어요', '친구 얼굴 떠올렸어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '받는 쪽 동작까지 표시해요.', target: { selfCheck: ['손을 멈췄어요', '소리 내어 읽었어요', '친구 얼굴 떠올렸어요', '받는 쪽도 해 봤어요'] } } },
            conclude: '보내기 전에 하나 멈추고, 둘 읽고, 셋 친구 얼굴을 떠올려요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '하나 멈추고, 둘 읽고, 셋 친구 ___', answer: '얼굴' }] },
      notes: '타이머 초·횟수는 연습용 우리 반 약속이다. 실제 휴대전화는 쓰지 않고 손바닥을 화면 삼아 연습한다.',
    }),
    SCREEN({
      id: 'bully.e12.g1-screen-kind-words.wrap.screen-rule-pattern', type: 'wrap', title: '화면 약속 그림 띠',
      method: '화면 약속 그림 띠 잇기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 띠를 처음부터 읽어 주고 빈칸 자리를 함께 짚으며 보기를 고른다.', base: '빈칸 두 곳에 차례로 올 조각을 보기에서 스스로 고르고 띠를 읽는다.', challenge: '빈칸을 고른 뒤 둘째 출구에서 틀린 조각("바로 보내")을 보기에서 찾는다.' },
      wrap: {
        teacher: '"멈추고, 읽고, 보내기 — 화면 약속 띠예요. 빈칸에는 무엇이 올까요?" 띠를 반 전체가 손동작(손 멈춤·입 모양·보내기 손짓)과 함께 읽은 뒤 채운다. 둘째 출구에서 "바로 보내"를 찾지 못한 학생에게 "멈추고 읽기를 건너뛰면 어떤 말이 갈 수 있을까요?"라고 묻는다. 끝으로 "화면에서도 방긋!"을 다 같이 외친다.',
        exitTicket: [
          FILL(['멈추고', '읽고', '보내기', '멈추고', '읽고', '보내기', '멈추고', '읽고'], [4, 6], '빈칸에 알맞은 조각을 넣어요.'),
          ODD(['멈추고', '읽고', '보내기', '멈추고', '읽고', '보내기'], 3, '바로 보내', '틀린 조각을 찾아요.'),
          { type: 'choice', prompt: '얼굴이 안 보이면 괜찮을까요?', options: ['괜찮아요', '마음은 그대로 아파요'], answer: 1, difficulty: 0.1, explain: '화면 너머 친구도 진짜 마음이 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '화면에서도 방긋',
        items: [
          { type: 'blank', prompt: '화면 약속을 따라 써요.', text: '멈추고 → 읽고 → ___', answer: '보내기' },
          { type: 'draw', prompt: '고운 말을 받고 웃는 친구를 그려요.' },
        ],
        easy: { note: '"멈추고, 읽고, 보내기!"를 손동작과 함께 떠올려요.', items: [{ type: 'draw', prompt: '웃는 얼굴 메시지를 그려요.' }] },
      },
      notes: '규칙 판의 빈칸·조각 칸이 휴대폰에서 32px 라(44px 기준 미달) 빈칸 채우기·틀린 조각 찾기를 보기 고르기(rule)로 한다.',
    }),
    SCREEN({
      id: 'bully.e12.g1-screen-kind-words.wrap.who-to-show', type: 'wrap', title: '속상한 화면, 보여 줄 어른',
      method: '보여 줄 어른 카드 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 세 장(선생님·보호자·모르는 사람)을 읽어 주고 믿을 어른을 함께 담는다.', base: '카드 다섯 장 가운데 속상한 화면을 보여 줄 믿을 어른 카드를 스스로 담고 소리 내어 말한다.', challenge: '담은 뒤 학교에서 보여 줄 어른과 집에서 보여 줄 어른을 나누어 말한다.' },
      wrap: {
        teacher: '"화면에서 속상한 말을 보면 누구에게 보여 줄까요?" 카드를 읽어 주고 담을 때마다 반 전체가 이름을 소리 내어 말한다. "모르는 사람"을 담은 학생에게 "처음 보는 사람이 내 화면을 보면 괜찮을까요? 아는 어른, 믿을 어른에게 보여 줘요"라고 묻는다. 집 어른은 엄마·아빠뿐 아니라 함께 사는 보호자 누구든 된다고 말해 준다.',
        exitTicket: [
          PICKW('보여 줄 어른', ['선생님', '보호자', '모르는 사람', '할머니·할아버지', '담임 선생님'], ['선생님', '보호자', '할머니·할아버지', '담임 선생님'], '보여 줄 믿을 어른을 담아요.'),
          { type: 'choice', prompt: '나쁜 메시지는 어떻게 해요?', options: ['지우고 숨겨요', '어른께 보여 줘요'], answer: 1, difficulty: 0.1, explain: '지우지 말고 믿을 어른께 그대로 보여 줘요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '보여 줄 어른',
        items: [
          { type: 'short', prompt: '속상한 화면을 보여 줄 어른은?', answer: '선생님, 보호자 등 믿을 어른' },
          { type: 'draw', prompt: '어른께 화면을 보여 주는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 친구 사진은 물어보고 찍고 보내요 (사이버폭력)
  const PHOTO = MOD('bully.e12.g1-photo-ask-first', [1]);
  const ASKED = ['물어봤어요', '몰래·억지로'];
  // 묻고 답하기(story): 쉬움 묻는 말 2장 가운데 하나, 기본 묻는 말·친구 대답 두 칸, 도전 대답 뒤 할 말 칸까지
  const ASK = (prompt, ask, noAsk, reply, wrongReply, after, wrongAfter, d, more) => ({
    prompt, toolOptions: { mode: 'sort', slots: [{ id: 'q', label: '묻는 말' }, { id: 'a', label: '친구 대답' }], cards: [noAsk, reply, ask, wrongReply] }, target: { sort: { q: [ask.id], a: [reply.id] } }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(묻는 말).`, toolOptions: { mode: 'pick', basket: '묻는 말', cards: [noAsk, ask] }, target: { pick: [ask.id] } },
      challenge: { prompt: `${cut(prompt)}, 그다음도요.`, toolOptions: { slots: [{ id: 'q', label: '묻는 말' }, { id: 'a', label: '친구 대답' }, { id: 'n', label: '그다음 할 말' }], cards: [noAsk, reply, after, ask, wrongReply, wrongAfter] }, target: { sort: { q: [ask.id], a: [reply.id], n: [after.id] } } },
    },
    ...more,
  });
  const T_PHOTO = [
    PHOTO({
      id: 'bully.e12.g1-photo-ask-first.intro.photo-faces', type: 'intro', title: '하품할 때 찍힌 친구 마음',
      method: '찍힌 친구 얼굴 보기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(부끄러움·기쁨)을 들고 찍힌 친구 마음을 함께 고른다.', base: '마음 카드 세 장 가운데 찍힌 친구 마음을 고르는 시연을 따라 말한다.', challenge: '찍기 전에 "찍어도 돼?" 물었다면 친구 얼굴이 어땠을지도 말한다.' },
      intro: {
        teacher: '"바다가 하품하는 순간 누가 사진을 찰칵 찍었어요. 바다 마음은 어떨까요?" 그림을 보여 주고 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "친구니까 마음대로 찍어도 돼요"라는 말이 나오면 "친구라도 내 얼굴이 이상하게 찍히면 어떤 마음일까요?"라고 되묻는다. 오늘은 친구 사진을 찍고 보내기 전에 꼭 묻는 법을 배운다고 밝힌다.',
        student: '하품하다 찍힌 친구는 어떤 마음일지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '찍힌 친구 마음', cards: ['부끄러움', '기쁨', '속상함'], shuffle: false }, sequence: [{ pick: ['부끄러움', '속상함'] }] },
        art: { draw: 'a paper child yawning widely while another paper child secretly snaps a photo with a paper camera, the yawning child then blushing with embarrassment', banner: '찍기 전에 물어봐요' },
      },
    }),
    PHOTO({
      id: 'bully.e12.g1-photo-ask-first.intro.ask-song', type: 'intro', title: '"찍어도 돼?" 노래',
      method: '"찍어도 돼?" 노래 따라 부르기', tool: 'keyboard', minutes: 6,
      levels: { easy: '"물어봐요" 세 음만 교사와 함께 부른다.', base: '"찍어도 돼? 물어봐요" 한 줄 가락을 듣고 따라 부른다.', challenge: '한 줄을 부른 뒤 "보내도 돼?"로 노랫말을 바꿔 한 번 더 부른다.' },
      intro: {
        teacher: '"찍어도 돼? 물어봐요, 싫다 하면 안 찍어요" 노래를 두 번 불러 준다. 시연 단추로 건반이 한 음씩 눌리는 모습을 보이고 반 전체가 손으로 높낮이를 그리며 따라 부른다. "물어보면 친구가 싫다고 할까 봐 안 물어요"라는 말이 나오면 "싫다고 하면 안 찍으면 돼요. 묻는 건 친구 마음을 아껴 주는 거예요"라고 말해 준다.',
        student: '"찍어도 돼? 물어봐요" 노래를 손으로 높낮이를 그리며 따라 불러요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '솔', '라', '솔', '미', '레', '미', '도'] }, sequence: [{ notes: ['솔', '솔', '라', '솔', '미', '레', '미', '도'] }] },
        art: { draw: 'two paper children facing each other, one holding a paper camera and asking with a question-mark speech bubble, the other nodding with a smile, paper music notes around them', banner: '"찍어도 돼?"' },
      },
    }),
    PHOTO({
      id: 'bully.e12.g1-photo-ask-first.activity.ask-sort', type: 'activity', title: '물어봤어요·몰래 찍어요',
      method: '물어봤어요/안 물어봤어요 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '장면 카드 4장, 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '장면 카드 6장을 다 넣은 뒤 확인한다.', challenge: '"\'싫어\' 해도 찍기"처럼 물어보긴 했지만 대답을 지키지 않은 장면 2장이 더 들어온다(몰래·억지로 바구니).' },
      activity: {
        title: '사진 장면 바구니', tool: 'sortboard',
        teacher: '"이 친구는 물어보고 찍었을까요, 몰래 또는 억지로 찍었을까요?" 카드를 읽어 주고 넣기 전에 "찍힌 친구 얼굴은?"이라고 묻는다. "물어봤으니 \'싫어\' 해도 찍어도 돼요"라는 학생에게 "물어보는 건 친구 대답을 지키려고 하는 거예요. 싫다고 하면?"이라고 묻는다. "웃긴 사진은 재미있으니 괜찮아요"에는 "찍힌 친구도 웃을까요?"라고 되묻는다.',
        task: '사진 장면을 물어봤어요·몰래·억지로 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(ASKED, '사진 찍는 장면을 나누어요.', ['"찍어도 돼?"', '"좋아" 듣고 찰칵', '같이 "김치~"'], ['뒤에서 몰래', '자는 모습 찰칵', '하품할 때 찰칵'], ['"싫어" 해도 찰칵', '숨어서 찰칵'], 1, 0.1),
          SB2(ASKED, '사진 보내는 장면을 나누어요.', ['"보내도 돼?"', '어른과 같이 보내기', '친구가 "좋아"'], ['몰래 여럿에게', '웃긴 얼굴 퍼뜨리기', '허락 없이 올리기'], ['"싫어"해도 보내기', '"괜찮지?" 하고 보내기'], 1, 0.15),
          SB2(ASKED, '영상 찍는 장면을 나누어요.', ['춤 영상 "좋아"', '같이 정해 찍기', '"그만" 하면 끄기'], ['우는 모습 찍기', '넘어질 때 찍기', '몰래 따라 찍기'], ['"장난이야" 찍기', '울먹여도 계속'], 1, 0.2, { conclude: '친구 사진·영상은 찍기 전, 보내기 전에 꼭 묻고 싫다면 안 해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '물어봤으면 ○, 몰래면 × 써요.', columns: ['장면', '○ / ×'], cells: [['"찍어도 돼?"', ''], ['뒤에서 몰래', ''], ['같이 "김치~"', ''], ['자는 모습 찰칵', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '찍기 전에 하는 말에 ○ 해요.', options: ['"찍어도 돼?"', '"찰칵!"'], answer: '"찍어도 돼?"' }] },
    }),
    PHOTO({
      id: 'bully.e12.g1-photo-ask-first.activity.ask-roleplay', type: 'activity', title: '"찍어도 돼?" 묻고 답하기',
      method: '"찍어도 돼?" 묻고 답하는 역할놀이', tool: 'story', minutes: 13,
      levels: { easy: '묻는 말 2장 가운데 알맞은 말 하나를 고른다.', base: '묻는 말과 그림 속 친구의 대답(좋아/싫어)을 두 칸에 골라 놓는다.', challenge: '묻는 말·대답에 이어 대답을 들은 뒤 할 말("알았어, 안 찍을게" 등)까지 세 칸에 놓는다.' },
      activity: {
        title: '묻고 답하기 역할놀이', tool: 'story',
        teacher: '"나리가 바다를 찍고 싶어요. 무엇이라고 물을까요? 바다 얼굴을 보면 대답도 알 수 있어요." 장면마다 그림 속 친구의 얼굴·몸짓을 함께 살핀 뒤 고른다. 얼굴을 가린 친구의 대답을 "좋아"로 놓는 학생에게 "얼굴을 가리는 건 무슨 뜻일까요?"라고 묻는다. 대답이 "싫어"이면 찍지 않고 "알았어"라고 말하는 것이 멋진 친구라는 점을 짚는다. 마지막 문항에서 짝과 한 명은 묻고, 한 명은 좋아·싫어를 골라 답해 본다.',
        task: '그림 속 친구에게 묻는 말과 대답을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ASK('생일 파티 사진이에요. 골라요.', C('ask', '"찍어도 돼?"', { motif: 'star' }), C('snap', '그냥 찰칵', { motif: 'star' }), C('yes', '"좋아!"', { motif: 'star' }), C('no', '"싫어"', { motif: 'star' }), C('look', '"같이 보자"'), C('send', '"다 보낼게"'), 0.1),
          ASK('얼굴을 가린 친구예요. 골라요.', C('ask', '"찍어도 될까?"', { motif: 'tree' }), C('sneak', '몰래 찰칵', { motif: 'tree' }), C('no', '"싫어"', { motif: 'tree' }), C('yes', '"좋아!"', { motif: 'tree' }), C('ok', '"안 찍을게"'), C('force', '"한 장만!"'), 0.15),
          ASK('친구 그림을 찍고 싶어요.', C('ask', '"그림 찍을래?"', { motif: 'flower' }), C('grab', '들고 가서 찰칵', { motif: 'flower' }), C('yes', '"좋아, 찍어"', { motif: 'flower' }), C('no', '"안 돼"', { motif: 'flower' }), C('thanks', '"고마워"'), C('show', '"다 보여 줄래"'), 0.2),
          { prompt: '짝과 묻고 답해 봐요.', free: true, talk: true, difficulty: 0.2, conclude: '찍기 전에 "찍어도 돼?" 묻고, "싫어"라고 하면 안 찍어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 "싫어" 하면?', options: ['안 찍어요', '한 장만 찍어요'], answer: '안 찍어요' }] },
      notes: '짝 역할놀이는 실제 기기 없이 손으로 카메라 모양을 만들어 한다. 대답은 짝이 마음대로 고르게 하고, "싫어"를 고른 짝도 잘한 것이라고 말해 준다.',
    }),
    PHOTO({
      id: 'bully.e12.g1-photo-ask-first.activity.photo-frame', type: 'activity', title: '허락받은 사진 액자',
      method: '허락받은 사진 액자 만들기', tool: 'collage', minutes: 13,
      levels: { easy: '조각을 3개 이상 붙인다(고르개 모양 셋).', base: '조각을 5개 이상 붙여 액자를 꾸미고 노란 별 "물어봤어요" 표시를 붙인다.', challenge: '액자와 표시에 더해, 셋째 문항에서 보낼 사람(가족)을 정한 표시를 하고 말한다.' },
      activity: {
        title: '물어봤어요 액자', tool: 'collage',
        teacher: '"같이 웃으며 찍은 사진을 넣을 액자를 꾸며요. 노란 별은 \'물어봤어요\' 표시예요." 액자를 꾸미며 "이 사진은 찍기 전에 무엇을 물었을까요?"라고 묻는다. 별 표시를 빠뜨린 학생에게 "이 사진이 허락받은 사진인지 어떻게 알 수 있을까요?"라고 묻는다. 셋째 문항에서는 이 사진을 보내고 싶다면 먼저 누구와 정할지(가족 어른) 말해 보게 한다.',
        task: '허락받은 사진 액자를 꾸미고 "물어봤어요" 표시를 붙여요.', levels: { easy: { shapes: ['square', 'star', 'rect'] }, base: { shapes: ['square', 'star', 'rect', 'circle', 'heart'] }, challenge: {} },
        items: [
          { prompt: '네모 조각으로 액자를 꾸며요.', toolOptions: {}, target: { has: [{ shape: 'square', min: 5 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '네모 3개로 액자를 꾸며요.', target: { has: [{ shape: 'square', min: 3 }] } }, challenge: { prompt: '네모 5개, 긴 네모 2개요.', target: { has: [{ shape: 'square', min: 5 }, { shape: 'rect', min: 2 }] } } } },
          { prompt: '"물어봤어요" 노란 별을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'star', color: '노랑', min: 1 }], pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '노란 별과 조각 3개를 붙여요.', target: { has: [{ shape: 'star', color: '노랑', min: 1 }], pieces: { min: 3 } } }, challenge: { prompt: '노란 별 하나만, 조각 6개요.', target: { has: [{ shape: 'star', color: '노랑', n: 1 }], pieces: { min: 6 } } } } },
          { prompt: '액자를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['액자를 꾸몄어요', '별 표시를 붙였어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개 액자, 표시해요.', target: { selfCheck: ['액자를 꾸몄어요', '별 표시를 붙였어요'], minPieces: 3 } }, challenge: { prompt: '보낼 사람도 정해 표시해요.', target: { selfCheck: ['액자를 꾸몄어요', '별 표시를 붙였어요', '보낼 사람을 정했어요'], minPieces: 5 } } },
            conclude: '물어보고 찍은 사진이 함께 웃는 사진이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '친구와 같이 웃으며 찍은 사진을 그려요.' }] },
    }),
    PHOTO({
      id: 'bully.e12.g1-photo-ask-first.activity.send-steps', type: 'activity', title: '사진 보내기 전 세 단계',
      method: '보내기 전 세 단계 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '순서 카드 2장(친구에게 묻기·어른께 묻기)의 차례를 맞춘다.', base: '순서 카드 3장(친구에게 묻기·어른께 묻기·보내기)의 차례를 맞추고 동작으로 따라 한다.', challenge: '세 단계를 맞춘 뒤, 셋째 문항에서 단계를 빠뜨린 친구에게 알려 주는 말("어른께도 물어봐")을 짝에게 해 본 것까지 표시한다.' },
      activity: {
        title: '보내기 전 세 단계', tool: 'timer',
        teacher: '"친구 사진을 보내고 싶어요. 첫째, 친구에게 \'보내도 돼?\'(손으로 물음표), 둘째, 어른께 \'보내도 돼요?\'(어른 쪽 보기), 셋째, 보내기(손가락 콕)!" 동작을 보인 뒤 순서 카드를 맞춘다. 친구에게만 묻고 바로 보내기로 놓는 학생에게 "친구가 좋다고 해도 어디로 보낼지는 누구와 정할까요?"라고 묻는다. 동작 연습 횟수는 우리 반 약속 값이라고 밝힌다.',
        task: '사진 보내기 전 세 단계를 차례로 놓고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('보내기 전 세 단계를 놓아요.', '사진 보내기 전', ['친구에게 묻기', '어른께 묻기', '보내기'], 0.1),
          { prompt: '세 단계 동작을 2번 하게 맞춰요.', toolOptions: { title: '동작 연습(우리 반 약속)', plan: { work: 15, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['연습할 횟수를 세어 봐요.', '번 칸이 연습 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { challenge: { prompt: '동작을 3번 하게 맞춰요.', target: { plan: { rounds: 3 } } } } },
          { prompt: '해 본 단계에 표시해요.', toolOptions: { title: '세 단계 점검' }, target: { selfCheck: ['친구에게 물었어요', '어른께 물었어요', '보내기 흉내 냈어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '알려 준 말까지 표시해요.', target: { selfCheck: ['친구에게 물었어요', '어른께 물었어요', '보내기 흉내 냈어요', '"어른께도 물어봐" 했어요'] } } },
            conclude: '친구 사진은 친구에게 묻고, 어른께 묻고, 그다음에 보내요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '친구에게 묻고, ___께 묻고, 보내요.', answer: '어른' }] },
    }),
    PHOTO({
      id: 'bully.e12.g1-photo-ask-first.wrap.photo-rule-cards', type: 'wrap', title: '사진 약속 말 카드',
      method: '사진 약속 말 카드 읽기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 약속 말 카드 두 장("찍어도 돼?"·"보내도 돼?")을 읽어 주고 함께 담는다.', base: '카드 네 장 가운데 사진 약속 말 세 장을 스스로 담고 따라 읽는다.', challenge: '담은 세 장을 찍기 → 보내기 차례대로 말하며 읽는다.' },
      wrap: {
        teacher: '"사진 약속 말을 바구니에 담아 볼까요?" 카드를 하나씩 읽어 주고 담을 때마다 반 전체가 손 카메라를 들고 따라 읽는다. "몰래 찍자"를 담은 학생에게 "찍힌 친구가 알면 어떤 마음일까요?"라고 묻는다. 출구 2번에서 "웃긴 사진은 보내도 돼요"를 고른 학생에게 "찍힌 친구도 웃을지 먼저 물어봐요"라고 말해 준다.',
        exitTicket: [
          PICKW('사진 약속 말', ['"찍어도 돼?"', '"몰래 찍자"', '"보내도 돼?"', '"싫으면 안 해"'], ['"찍어도 돼?"', '"보내도 돼?"', '"싫으면 안 해"'], '사진 약속 말을 담아요.'),
          { type: 'choice', prompt: '웃긴 친구 사진은?', options: ['그냥 보내요', '먼저 물어봐요'], answer: 1, difficulty: 0.1, explain: '웃긴 사진도 찍힌 친구에게 먼저 물어봐요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '사진 약속',
        items: [
          { type: 'blank', prompt: '사진 약속 말을 써요.', text: '"찍어도 ___?"', answer: '돼' },
          { type: 'draw', prompt: '친구에게 "찍어도 돼?" 묻는 모습을 그려요.' },
        ],
      },
    }),
    PHOTO({
      id: 'bully.e12.g1-photo-ask-first.wrap.photo-check', type: 'wrap', title: '사진 약속 생각그물',
      method: '사진 약속 그림 생각그물', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 카드 두 장(묻기·기다리기)을 읽어 주고 함께 잇는다.', base: '카드 네 장 가운데 사진 약속 세 장을 스스로 잇는다.', challenge: '세 장을 이은 뒤 둘째 출구에서 "싫다고 하면?"에 답한다.' },
      wrap: {
        teacher: '"가운데 카메라에 사진 약속을 이어 볼까요?" 카드를 읽어 주고 이을 때마다 그 약속을 손동작으로 해 본다(묻기는 물음표 손, 기다리기는 두 손 모으기). "몰래 찍기"를 이은 학생에게 "이것도 사진 약속일까요?"라고 묻는다. 끝으로 오늘 배운 노래 "찍어도 돼? 물어봐요"를 한 번 부른다.',
        exitTicket: [
          PICKM('사진 찍기 전', ['묻기', '대답 기다리기', '어른과 정하기', '몰래 찍기'], ['묻기', '대답 기다리기', '어른과 정하기'], '사진 약속을 카메라에 이어요.'),
          { type: 'choice', prompt: '친구가 "싫어" 하면?', options: ['한 장만 찍어요', '안 찍어요'], answer: 1, difficulty: 0.1, explain: '싫다고 하면 찍지 않아요. 그게 친구 마음을 지키는 거예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '사진 찍기 전 약속',
        items: [
          { type: 'check', prompt: '사진 약속에 ✓ 해요.', options: ['찍기 전에 묻기', '싫다면 안 찍기', '보내기 전 어른과 정하기'] },
          { type: 'choice', prompt: '몰래 찍어도 될까요?', options: ['돼요', '안 돼요'], answer: '안 돼요' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 속상한 친구 곁에 서고 어른께 알리기
  const BESIDE = MOD('bully.e12.g1-stand-beside', [1]);
  const HELPNO = ['도와줘요', '모른 척해요'];
  const SCHOOL = [{ name: '교실', icon: 'school', at: [0, 0] }, { name: '보건실', icon: 'hospital', at: [3, 0] }, { name: '상담실', icon: 'house', at: [0, 2] }, { name: '교무실', icon: 'office', at: [3, 2] }];
  const T_BESIDE = [
    BESIDE({
      id: 'bully.e12.g1-stand-beside.intro.alone-friend', type: 'intro', title: '구석에서 우는 친구와 지켜보는 친구들',
      method: '혼자 우는 친구 그림 보고 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(슬픔·걱정)을 들고 우는 친구 마음을 함께 고른다.', base: '우는 친구와 지켜보는 친구들의 마음 카드 세 장을 잇는 시연을 따라 말한다.', challenge: '마음을 이은 뒤 지켜보는 친구가 할 수 있는 일(곁에 가기) 하나를 말한다.' },
      intro: {
        teacher: '"쉬는 시간에 나리가 구석에서 울고 있어요. 친구들이 \'울보래요\' 하고 놀렸대요. 다른 친구들은 멀리서 보고 있어요." 그림 속 친구를 하나씩 가리키며 시연 단추로 마음 카드가 이어지는 모습을 보인다. "내 일이 아니니까 모른 척해요"라는 말이 나오면 "나리 옆에 아무도 없으면 나리 마음은 어떨까요? 보고 있는 친구도 도울 수 있어요"라고 되묻는다. 오늘은 속상한 친구 곁에 서고 어른께 알리는 법을 배운다고 밝힌다.',
        student: '우는 친구와 보고 있는 친구들의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'cry', label: '우는 나리' }, { id: 'watch', label: '보는 친구들' }], cards: ['슬픔', '걱정', '신남'] }, sequence: [{ match: { cry: '슬픔', watch: '걱정' } }] },
        art: { draw: 'a paper classroom corner where one paper child sits crying while three paper children stand at a distance looking worried, one of them starting to step forward', banner: '곁에 가 볼까?' },
      },
      notes: '수업 안의 일은 그림 속 나리의 일이다. 우리 반 누가 놀렸는지·당했는지 묻지 않는다.',
    }),
    BESIDE({
      id: 'bully.e12.g1-stand-beside.intro.helper-map-intro', type: 'intro', title: '학교 지도에서 도와줄 어른 찾기',
      method: '학교 지도에서 도와줄 어른 있는 곳 찾기', tool: 'map', minutes: 6,
      levels: { easy: '교사가 교실과 상담실 두 곳만 가리키며 함께 핀을 꽂는다.', base: '교실·보건실·상담실·교무실 네 곳 가운데 속상할 때 갈 곳에 핀이 꽂히는 시연을 보고 이름을 따라 말한다.', challenge: '네 곳을 본 뒤 우리 교실에서 가장 가까운 곳과 가는 길을 말한다.' },
      intro: {
        teacher: '"학교에서 속상한 일이 있으면 찾아갈 수 있는 곳이 여러 군데 있어요. 담임 선생님은 교실에, 상담 선생님은 상담실에, 보건 선생님은 보건실에 계셔요." 시연 단추로 상담실에 핀이 꽂히는 모습을 보이고 네 곳 이름을 반 전체가 따라 말한다. "선생님께 가면 혼나요"라는 말이 나오면 "선생님은 도와주려고 기다리고 계셔요. 말하러 온 친구는 잘한 거예요"라고 말해 준다. 우리 학교 실제 위치를 손으로 가리켜 알려 준다.',
        student: '속상할 때 찾아갈 수 있는 곳의 이름을 따라 말해 보아요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: SCHOOL, title: '우리 학교 도움 지도' }, sequence: [{ place: '상담실' }] },
        art: { draw: 'a simple paper school map with a classroom, a nurse office, a counseling room with a heart sign and a teachers office, a paper child walking toward the counseling room', banner: '도와줄 어른은 어디에?' },
      },
      notes: '칸 지도의 배치는 단순한 그림이다. 우리 학교 실제 위치(층·방 이름)로 바꿔 말해 준다.',
    }),
    BESIDE({
      id: 'bully.e12.g1-stand-beside.activity.help-actions-sort', type: 'activity', title: '도와줘요·모른 척해요',
      method: '도와줘요/모른 척해요 행동 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '행동 카드 4장, 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '행동 카드 6장을 다 넣은 뒤 확인한다.', challenge: '"같이 놀자 데려가기"처럼 다른 도움 방법 카드 2장이 더 들어온다(도와줘요 바구니).' },
      activity: {
        title: '도움 행동 바구니', tool: 'sortboard',
        teacher: '"친구가 놀림을 받고 있어요. 이 행동은 친구를 도와줄까요, 모른 척하는 걸까요?" 카드를 읽어 주고 넣기 전에 "그러면 놀림 받는 친구 마음은?"이라고 묻는다. "같이 웃기는 그냥 웃은 거예요"라는 학생에게 "놀림 받는 친구가 보기엔 누구 편 같을까요?"라고 묻는다. "선생님께 말하면 고자질이에요"에는 "친구를 도우려고 알리는 건 고자질이 아니라 돕기예요"라고 짚는다. 놀린 친구는 행동을 멈추면 되고, 우리가 할 일은 놀림 받는 친구 곁에 서는 것이라고 정리한다.',
        task: '도와주는 행동과 모른 척하는 행동을 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(HELPNO, '놀림을 볼 때 행동을 나누어요.', ['곁에 가기', '"괜찮아?" 묻기', '선생님께 말하기'], ['그냥 가기', '같이 웃기', '구경만 하기'], ['같이 놀자 데려가기', '손 내밀기'], 0, 0.1),
          SB2(HELPNO, '혼자 우는 친구를 볼 때요.', ['옆에 앉기', '휴지 건네기', '선생님 모셔 오기'], ['못 본 척', '"울보래요"', '흉내 내기'], ['"같이 그리자"', '물 떠다 주기'], 0, 0.15),
          SB2(HELPNO, '친구가 밀릴 때 행동을 나누어요.', ['"멈춰!" 말하기', '어른 부르기', '친구 데려오기'], ['따라 밀기', '"재밌다" 웃기', '못 본 척 가기'], ['다친 데 묻기', '보건실 같이 가기'], 0, 0.2, { conclude: '곁에 가고, "괜찮아?" 묻고, 어른께 알리는 것이 돕기예요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '도우면 ○, 모른 척이면 × 써요.', columns: ['행동', '○ / ×'], cells: [['곁에 가기', ''], ['같이 웃기', ''], ['선생님께 말하기', ''], ['그냥 가기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '도와주는 행동에 ○ 해요.', options: ['곁에 가기', '구경만 하기'], answer: '곁에 가기' }] },
    }),
    BESIDE({
      id: 'bully.e12.g1-stand-beside.activity.helper-roleplay', type: 'activity', title: '도움꾼 이야기 고르기',
      method: '도움꾼 역할놀이 이야기 고르기', tool: 'story', minutes: 13,
      levels: { easy: '다음 장면 2장 가운데 도움꾼이 할 장면을 고른다.', base: '다음 장면 3장 가운데 고르고, 고른 장면을 짝과 몸으로 해 본다.', challenge: '다음 장면과 함께 선생님께 알릴 때 할 말까지 두 칸에 나누어 고른다.' },
      activity: {
        title: '도움꾼이 할 장면', tool: 'story',
        teacher: '"바다가 친구들에게 놀림을 받고 있어요. 지켜보던 나리가 도움꾼이 되기로 했어요. 다음 장면은?" 장면을 읽어 주고 고르기 전에 "그러면 바다 마음은 어떨까요?"라고 묻는다. "나도 놀림 받을까 봐 무서워요"라는 학생에게 "혼자 무서우면 다른 친구와 같이 가거나 선생님께 먼저 말해도 돼요. 그것도 도움꾼이에요"라고 말해 준다. 고른 뒤 짝과 한 명은 나리, 한 명은 바다가 되어 곁에 서서 "괜찮아?"를 해 본다(놀리는 역할은 하지 않는다).',
        task: '도움꾼 나리가 할 다음 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          NEXT('바다가 놀림 받아요. 골라요.', C('near', '곁에 가 물어요', { motif: 'tree' }), [C('laugh', '같이 웃어요', { motif: 'tree' }), C('away', '그냥 가요', { motif: 'tree' })], { label: '선생님께 할 말', cards: [C('help', '"도와주세요"'), C('nothing', '"몰라요"')] }, 0.1),
          NEXT('바다 가방을 숨겼어요. 골라요.', C('find', '같이 찾고 알려요', { motif: 'house' }), [C('hide', '더 숨겨요', { motif: 'house' }), C('watch', '구경해요', { motif: 'house' })], { label: '선생님께 할 말', cards: [C('bag', '"가방이 없어요"'), C('joke', '"장난이에요"')] }, 0.15),
          NEXT('놀이에 안 끼워 줘요. 골라요.', C('join', '"같이 하자"', { motif: 'sun' }), [C('no', '"너는 안 돼"', { motif: 'sun' }), C('quiet', '모른 척해요', { motif: 'sun' })], { label: '선생님께 할 말', cards: [C('alone', '"혼자 있어요"'), C('fine', '"괜찮대요"')] }, 0.2),
          { prompt: '고른 장면을 몸으로 해요.', free: true, talk: true, difficulty: 0.2, conclude: '곁에 서서 "괜찮아?" 하고, 선생님께 "도와주세요"라고 알려요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '놀림 받는 친구를 보면?', options: ['곁에 가요', '같이 웃어요'], answer: '곁에 가요' }] },
      notes: '역할놀이에서 놀리는 역할은 하지 않는다. 도움꾼과 도움 받는 친구 역할만 바꿔 가며 한다.',
    }),
    BESIDE({
      id: 'bully.e12.g1-stand-beside.activity.tell-teacher-steps', type: 'activity', title: '선생님께 알리는 세 단계',
      method: '선생님께 알리는 세 단계 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '순서 카드 2장(선생님께 가기·"도와주세요")의 차례를 맞춘다.', base: '순서 카드 3장의 차례를 맞추고, 짝과 역할을 바꿔 2번 연습하게 타이머를 맞춘다.', challenge: '세 단계를 맞추고, 셋째 문항에서 "누가, 어디서" 두 가지를 넣어 말해 본 것까지 표시한다.' },
      activity: {
        title: '알리기 세 단계 연습', tool: 'timer',
        teacher: '"선생님께 알릴 때는 첫째, 선생님께 가요. 둘째, \'선생님, 도와주세요.\' 셋째, 무슨 일인지 말해요." 교사가 선생님 역할을 하며 한 학생과 시범을 보인다. "무슨 일인지 말하기 어려워요"라는 학생에게 "\'친구가 울어요\'처럼 한 마디면 돼요. 나머지는 선생님이 물어봐 줄게요"라고 말해 준다. 알리러 온 친구는 고자질쟁이가 아니라 친구를 돕는 도움꾼이라는 점을 짚는다.',
        task: '선생님께 알리는 세 단계를 놓고 짝과 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('알리는 세 단계를 놓아요.', '선생님께 알리기', ['선생님께 가기', '"도와주세요"', '무슨 일인지 말하기'], 0.1),
          { prompt: '역할 바꿔 2번 하게 맞춰요.', toolOptions: { title: '알리기 연습(우리 반 약속)', plan: { work: 20, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['짝과 한 번씩 하면 몇 번일까요?', '번 칸이 연습 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { challenge: { prompt: '역할 바꿔 4번 하게 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '알리기 연습을 점검해요.', toolOptions: { title: '알리기 점검' }, target: { selfCheck: ['선생님 눈을 봤어요', '"도와주세요" 했어요', '무슨 일인지 말했어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '"누가, 어디서"도 점검해요.', target: { selfCheck: ['선생님 눈을 봤어요', '"도와주세요" 했어요', '무슨 일인지 말했어요', '누가·어디서 말했어요'] } } },
            conclude: '선생님께 가서 "도와주세요" 하고 무슨 일인지 말해요. 알리기는 돕기예요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '선생님께 하는 말을 써요.', text: '"선생님, ___"', answer: '도와주세요' }] },
      notes: '연습 장면은 가상의 일("나리가 울어요")로만 한다. 타이머 값은 우리 반 연습 약속이다.',
    }),
    BESIDE({
      id: 'bully.e12.g1-stand-beside.activity.helper-song', type: 'activity', title: '"내가 곁에 있을게" 가락',
      method: '"내가 곁에 있을게" 가락 따라 치기', tool: 'keyboard', minutes: 13,
      levels: { easy: '줄마다 끝 세 음만 듣고 따라 치고, 듣는 동안 건반이 비친다.', base: '"괜찮아? 내가 곁에 있을게", "같이 가자 선생님께" 한 줄 가락을 듣고 따라 친다.', challenge: '두 줄을 친 뒤 셋째 문항에서 "도"로 끝나는 가락을 짓고, 끝에 손 내미는 동작을 맞춰 넣은 것을 표시한다.' },
      activity: {
        title: '곁에 있을게 노래 치기', tool: 'keyboard',
        teacher: '"괜찮아? 내가 곁에 있을게, 같이 가자 선생님께" 노래를 두 번 불러 주고 \'가락 듣기\'로 한 줄씩 들려준다. 치기 전에 반 전체가 손으로 높낮이를 그리며 부른다. 음 차례를 헷갈리는 학생에게 "노래 글자 하나에 건반 하나예요. \'괜, 찮, 아\'부터 천천히 쳐 볼까요?"라고 묻는다. 노래를 마친 뒤 노랫말처럼 곁에 있어 주고 같이 가 주는 친구가 도움꾼이라는 점을 짚는다.',
        task: '도움꾼 노래 가락을 듣고 건반으로 따라 쳐요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
        items: [
          MEL('"내가 곁에 있을게" 쳐요.', ['도', '미', '솔', '솔', '라', '솔', '미'], 0.1),
          MEL('"같이 가자 선생님께" 쳐요.', ['솔', '솔', '미', '미', '레', '미', '레', '도'], 0.15),
          { prompt: '"도"로 끝나는 도움 가락 지어요.', toolOptions: {}, target: { compose: { length: 4, endOn: '도' } }, difficulty: 0.2,
            levels: { easy: { prompt: '"도"로 끝나는 세 음 가락요.', target: { compose: { length: 3, endOn: '도' } } }, challenge: { prompt: '가락 짓고 손 내밀기 표시해요.', target: { compose: { length: 4, endOn: '도' }, selfCheck: ['끝에 손을 내밀었어요'] } } },
            conclude: '"괜찮아? 내가 곁에 있을게" — 곁에 서 주는 친구가 도움꾼이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '노랫말을 따라 써요.', text: '괜찮아? 내가 ___에 있을게', answer: '곁' }] },
      notes: '가락은 수업용으로 지은 짧은 노래다. 소리는 건반이나 \'가락 듣기\'를 눌렀을 때만 난다.',
    }),
    BESIDE({
      id: 'bully.e12.g1-stand-beside.wrap.class-promise-collage', type: 'wrap', title: '우리 반 사이좋은 약속 판',
      method: '우리 반 사이좋은 약속 판 붙이기', tool: 'collage', minutes: 6,
      levels: { easy: '교사가 조각 세 개(손잡기 하트·웃는 동그라미·선생님 별)를 먼저 붙여 보이고 함께 따라 붙인다.', base: '조각을 다섯 개 붙이고 반 약속 하나를 말로 정한다.', challenge: '조각마다 약속 말("곁에 가요", "알려요")을 하나씩 붙여 말한다.' },
      wrap: {
        teacher: '"하트는 손잡기, 동그라미는 웃는 얼굴, 별은 선생님께 알리기예요. 우리 반 사이좋은 약속 판을 만들어 볼까요?" 조각을 붙인 뒤 반 전체가 약속 하나를 정해 크게 말한다(예: "속상한 친구 곁에 가요"). 출구 2번에서 "고자질이에요"를 고른 학생에게 "친구를 도우려고 알리는 건 돕기예요. 알린 친구는 잘한 거예요"라고 말해 준다. 완성한 약속 판은 교실에 붙여 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['heart', 'circle', 'star', 'square'], colors: ['분홍', '노랑', '파랑', '초록'], sizes: ['s', 'm', 'l'] }, prompt: '약속 판에 조각을 붙여요.', target: { selfCheck: ['조각을 붙였어요', '반 약속을 말했어요'], minPieces: 3 }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구를 도우려고 알리면?', options: ['고자질이에요', '돕는 거예요'], answer: 1, difficulty: 0.1, explain: '친구를 도우려고 어른께 알리는 것은 고자질이 아니라 돕기예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반 사이좋은 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['곁에 가요', '"괜찮아?" 물어요', '선생님께 알려요'] },
          { type: 'draw', prompt: '친구 곁에 서 있는 내 모습을 그려요.' },
        ],
      },
    }),
    BESIDE({
      id: 'bully.e12.g1-stand-beside.wrap.trusted-adults', type: 'wrap', title: '도와줄 어른과 학교가 알려 준 번호',
      method: '도와줄 어른 카드와 [학교가 확인해 넣는 학교폭력 신고·상담 번호] 알기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 두 장(담임 선생님·보호자)을 읽어 주고 함께 담는다.', base: '카드 다섯 장 가운데 도와줄 어른 네 장을 스스로 담고 따라 읽은 뒤, 학교가 알려 준 번호 자리를 함께 본다.', challenge: '담은 어른마다 언제 찾아갈지(교실에서·다쳤을 때·집에서) 장면을 하나씩 말한다.' },
      wrap: {
        teacher: '"속상한 일이 있거나 친구가 괴롭힘을 받는 걸 보면 누구에게 갈까요?" 카드를 읽어 주고 담을 때마다 반 전체가 따라 읽는다. 다 담은 뒤 칠판에 미리 적어 둔 \'우리 학교가 알려 준 번호\' 자리를 함께 보며 "어른이 안 계실 때 보호자와 함께 쓰는 번호예요"라고 말해 준다. "모르는 어른"을 담은 학생에게 "처음 보는 어른보다 아는 어른, 믿을 어른에게 가요"라고 말한다.',
        exitTicket: [
          PICKW('도와줄 어른', ['담임 선생님', '상담 선생님', '모르는 어른', '보건 선생님', '보호자'], ['담임 선생님', '상담 선생님', '보건 선생님', '보호자'], '도와줄 어른을 담아요.'),
          { type: 'choice', prompt: '괴롭힘을 보면 누구에게?', options: ['믿을 어른께', '아무에게도 안 해요'], answer: 0, difficulty: 0.1, explain: '보거나 겪으면 믿을 어른께 알려요. 알린 친구는 잘한 거예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '도와줄 어른',
        items: [
          { type: 'check', prompt: '내가 찾아갈 어른에 ✓ 해요.', options: ['담임 선생님', '상담 선생님', '보건 선생님', '보호자'] },
          { type: 'short', prompt: '학교가 알려 준 번호를 옮겨 써요.', answer: '(학교가 알려 준 번호)' },
        ],
      },
      notes: '체계도에 신고·상담 전화번호가 없어 화면에는 번호를 쓰지 않는다. 학교가 확인한 학교폭력 신고·상담 번호를 칠판과 가정 안내문에 적어 두고 함께 본다(사람 확인 목록).',
    }),
  ];

  // =====================================================================================================
  // 1학년 · "미안해", "괜찮아?" 마음 잇기
  const SORRY = MOD('bully.e12.g1-sorry-okay', [1]);
  const T_SORRY = [
    SORRY({
      id: 'bully.e12.g1-sorry-okay.intro.oops-scene', type: 'intro', title: '"앗, 실수!" 두 친구 마음',
      method: '"앗, 실수!" 장면 보고 두 친구 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(미안함·아픔)을 들고 두 친구에게 하나씩 함께 잇는다.', base: '부딪힌 친구·넘어진 친구 마음을 카드 세 장 가운데 잇는 시연을 따라 말한다.', challenge: '마음을 이은 뒤 "미안해"를 들은 다음 넘어진 친구 마음은 어떨지 말한다.' },
      intro: {
        teacher: '"복도에서 바다가 뛰다가 나리와 부딪혔어요. 나리가 넘어졌어요. 두 친구 마음은 어떨까요?" 시연 단추로 마음 카드가 두 친구에게 이어지는 모습을 보인다. "일부러 그런 게 아니니까 사과 안 해도 돼요"라는 말이 나오면 "실수여도 나리는 아팠어요. 아픈 친구에게 무엇이라고 할까요?"라고 되묻는다. 오늘은 실수했을 때 마음을 잇는 말 "미안해", "괜찮아?"를 배운다고 밝힌다.',
        student: '부딪힌 친구와 넘어진 친구의 마음을 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'bump', label: '부딪힌 바다' }, { id: 'fell', label: '넘어진 나리' }], cards: ['미안함', '아픔', '신남'] }, sequence: [{ match: { bump: '미안함', fell: '아픔' } }] },
        art: { draw: 'a paper school hallway where one paper child has bumped into another who sits on the floor rubbing a knee, the first child looking surprised and sorry', banner: '앗, 실수!' },
      },
    }),
    SORRY({
      id: 'bully.e12.g1-sorry-okay.intro.sorry-chant', type: 'intro', title: '"멈추고, 보고, 미안해" 구호',
      method: '"멈추고, 보고, 미안해" 구호 리듬', tool: 'keyboard', minutes: 6,
      levels: { easy: '"멈추고, 보고" 첫 마디만 손뼉으로 따라 친다.', base: '"멈추고, 보고, 미안해, 괜찮아?" 두 마디를 손뼉으로 따라 친다.', challenge: '구호에 손동작(멈춤 손·친구 보기·두 손 모으기·어깨 토닥)을 맞춰 넣는다.' },
      intro: {
        teacher: '"멈추고(빠른 손뼉 둘, 손뼉 하나), 보고(손뼉 둘), 미안해(빠른 둘, 하나), 괜찮아?(빠른 둘, 하나)" 시연 단추로 리듬 블록이 놓이는 모습을 보이고 반 전체가 손뼉으로 따라 친다. "미안해는 작게 말해도 돼요"라는 말이 나오면 "친구가 들을 수 있게, 눈을 보고 말해야 마음이 전해져요"라고 말해 준다. 구호를 세 번 외치며 사과 차례를 연다.',
        student: '"멈추고, 보고, 미안해, 괜찮아?"를 손뼉에 맞춰 따라 외쳐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, sequence: [{ rhythm: ['e', 'e', 'q', 'q', 'q', 'e', 'e', 'q', 'e', 'e', 'q'] }] },
        art: { draw: 'paper children clapping in a circle, one pair in the middle facing each other, one bowing slightly to say sorry and the other smiling', banner: '멈추고, 보고, 미안해' },
      },
    }),
    SORRY({
      id: 'bully.e12.g1-sorry-okay.activity.sorry-order', type: 'activity', title: '사과 세 단계 차례',
      method: '사과 세 단계 차례 놓기', tool: 'timeline', minutes: 13,
      levels: { easy: '첫 카드(멈춰요)가 놓여 있어 남은 두 단계만 차례로 놓는다.', base: '사과 세 단계 카드 3장을 차례대로 놓는다.', challenge: '사과 단계가 아닌 카드 한 장("모른 척 가요")이 섞여 있어 빼고 세 단계를 놓는다.' },
      activity: {
        title: '사과 차례 놓기', tool: 'timeline',
        teacher: '"실수했을 때는 먼저 멈춰요. 그다음 \'미안해\', 그리고 \'괜찮아?\' 물어요." 장면마다 그림을 읽어 주고 카드를 놓은 뒤 반 전체가 차례대로 말해 본다. "괜찮아?를 먼저 물어요"라는 학생에게 "멈추지 않고 달려가면서 물으면 친구가 어떻게 느낄까요?"라고 묻는다. "사과하면 진 거예요"라는 생각에는 "사과는 지는 게 아니라 친구 마음을 다시 잇는 용기예요"라고 짚는다.',
        task: '사과하는 차례대로 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('줄에서 부딪혔어요. 놓아요.', [C('stop', '멈춰요'), C('sorry', '"미안해"'), C('ok', '"괜찮아?"')], C('run', '모른 척 가요'), 0.1),
          ORDER3('공으로 맞혔어요. 놓아요.', [C('stop', '공 멈추기'), C('sorry', '"맞혀서 미안해"'), C('ok', '"안 아파?"')], C('laugh', '깔깔 웃어요'), 0.15),
          ORDER3('지우개를 망가뜨렸어요.', [C('stop', '손 멈추기'), C('sorry', '"부숴서 미안해"'), C('ok', '"내 것 쓸래?"')], C('hide', '몰래 숨겨요'), 0.2, { conclude: '실수하면 멈추고, "미안해" 하고, "괜찮아?" 물어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '사과 차례를 써요.', text: '멈춰요 → "미안해" → "___?"', answer: '괜찮아' }] },
    }),
    SORRY({
      id: 'bully.e12.g1-sorry-okay.activity.sorry-roleplay', type: 'activity', title: '사과하는 말 고르기',
      method: '사과하는 역할놀이', tool: 'story', minutes: 13,
      levels: { easy: '주인공이 할 말 2장 가운데 하나를 고른다.', base: '주인공이 할 말 3장 가운데 하나를 고르고, 짝과 사과하는 친구·받는 친구를 번갈아 해 본다.', challenge: '할 말과 함께 "다음에는 조심할게" 같은 약속 말까지 두 칸에 나누어 고른다.' },
      activity: {
        title: '사과 역할놀이', tool: 'story',
        teacher: '"나리가 실수로 바다 그림을 찢었어요. 나리는 무엇이라고 말할까요?" 장면마다 읽어 주고, 고르기 전에 "그 말을 들으면 바다 마음은?"이라고 묻는다. "네가 잘못 놨잖아"를 고르는 학생에게 "그 말을 들으면 바다 마음이 풀릴까요?"라고 묻는다. 사과한 나리는 실수를 바로잡은 멋진 친구이고, 실수한 친구도 바뀔 수 있다는 점을 짚는다. 짝 역할놀이에서는 받는 친구가 "괜찮아" 또는 "속상했어"를 솔직하게 말해도 된다고 알려 준다.',
        task: '실수한 주인공이 할 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          NEXT('그림을 찢었어요. 할 말은?', C('sorry', '"찢어서 미안해"', { motif: 'flower' }), [C('blame', '"네가 놨잖아"', { motif: 'flower' }), C('ignore', '모른 척해요', { motif: 'flower' })], { basket: '할 말', label: '약속 말', cards: [C('careful', '"조심할게"'), C('again', '"또 그럴걸"')] }, 0.1),
          NEXT('발을 밟았어요. 할 말은?', C('sorry', '"밟아서 미안해"', { motif: 'tree' }), [C('nothing', '"별거 아냐"', { motif: 'tree' }), C('runaway', '뛰어가요', { motif: 'tree' })], { basket: '할 말', label: '약속 말', cards: [C('look', '"앞을 볼게"'), C('fast', '"더 뛸래"')] }, 0.15),
          NEXT('모자를 떨어뜨렸어요.', C('pick', '"미안, 주울게"', { motif: 'sun' }), [C('kick', '발로 툭 차요', { motif: 'sun' }), C('laugh', '깔깔 웃어요', { motif: 'sun' })], { basket: '할 말', label: '약속 말', cards: [C('slow', '"살살 할게"'), C('fun', '"재밌었어"')] }, 0.2),
          { prompt: '짝과 번갈아 사과해 봐요.', free: true, talk: true, difficulty: 0.2, conclude: '실수했으면 "미안해" 하고 다음 약속을 말해요. 실수한 친구도 바뀔 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구 그림을 찢었을 때는?', options: ['"미안해"', '"네 탓이야"'], answer: '"미안해"' }] },
    }),
    SORRY({
      id: 'bully.e12.g1-sorry-okay.activity.fix-it-collage', type: 'activity', title: '찢어진 그림 함께 고치기',
      method: '찢어진 그림 함께 고치기', tool: 'collage', minutes: 13,
      levels: { easy: '찢어진 그림에 조각을 3개 이상 붙여 고친다.', base: '조각을 5개 이상 붙여 고치고, 셋째 문항에서 짝과 함께 고친 것을 표시한다.', challenge: '고친 그림에 고마움 하트 조각을 하나 더 붙인다.' },
      activity: {
        title: '함께 고치기', tool: 'collage',
        teacher: '"나리가 바다 그림을 실수로 찢었어요. \'미안해\' 말한 다음, 둘이 함께 고쳐 볼까요?" 판에 놓인 그림(해·집)의 빈 곳에 네모 조각으로 기우듯 붙인다. "찢어졌으니 버려요"라는 학생에게 "함께 고치면 바다 마음도 같이 고쳐질 수 있을까요?"라고 묻는다. 고치기는 사과 다음에 하는 "바로잡기"이고, 실수한 친구도 이렇게 바로잡을 수 있다는 점을 짚는다.',
        task: '찢어진 그림에 조각을 붙여 함께 고쳐요.', levels: { easy: { shapes: ['square', 'circle', 'heart'] }, base: { shapes: ['square', 'circle', 'heart', 'triangle', 'rect'] }, challenge: {} },
        items: [
          { prompt: '찢어진 곳에 네모를 붙여요.', toolOptions: {}, state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 160, y: 120, r: 0 }, { shape: 'triangle', color: '빨강', size: 'l', x: 380, y: 200, r: 0 }] }, target: { has: [{ shape: 'square', min: 5 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '찢어진 곳에 네모 3개를 붙여요.', target: { has: [{ shape: 'square', min: 3 }] } }, challenge: { prompt: '네모 5개와 고마움 하트요.', target: { has: [{ shape: 'square', min: 5 }, { shape: 'heart', min: 1 }] } } } },
          { prompt: '그림을 다시 꾸며요.', toolOptions: {}, target: { pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '조각 3개로 그림을 꾸며요.', target: { pieces: { min: 3 } } }, challenge: { prompt: '조각 5개, 하트 하나요.', target: { pieces: { min: 5 }, has: [{ shape: 'heart', n: 1 }] } } } },
          { prompt: '함께 고치고 표시해요.', toolOptions: {}, target: { selfCheck: ['같이 고쳤어요', '"미안해" 했어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개, 함께 고쳤나요?', target: { selfCheck: ['같이 고쳤어요', '"미안해" 했어요'], minPieces: 3 } }, challenge: { prompt: '"고마워"까지 표시해요.', target: { selfCheck: ['같이 고쳤어요', '"미안해" 했어요', '"고마워" 했어요'], minPieces: 5 } } },
            conclude: '사과하고 함께 고치면 마음도 다시 이어져요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '친구와 함께 고친 그림을 그려요.' }] },
    }),
    SORRY({
      id: 'bully.e12.g1-sorry-okay.activity.calm-breath', type: 'activity', title: '화났을 때 숨 고르기',
      method: '화났을 때 숨 고르기 따라 하기', tool: 'timer', minutes: 13,
      levels: { easy: '숨 고르기를 2번 하게 타이머를 맞추고 따라 한다.', base: '숨 고르기를 3번 하게 맞추고, 숨 고르기 차례 카드 3장을 놓은 뒤 스스로 점검한다.', challenge: '3번 숨을 고른 뒤 셋째 문항에서 할 말을 하나 정한 것까지 표시한다.' },
      activity: {
        title: '숨 고르기 연습', tool: 'timer',
        teacher: '"화가 나면 먼저 숨을 골라요. 코로 들이쉬며 하나, 둘, 셋, 넷 — 입으로 내쉬며 하나, 둘, 셋, 넷." 교사가 손을 위아래로 움직이며 함께 센다. "화나면 바로 소리쳐야 시원해요"라는 학생에게 "소리치면 친구 마음은 어떨까요? 숨을 고르면 고운 말이 나올 준비가 돼요"라고 말해 준다. 타이머의 들이쉬기·내쉬기 칸은 우리 반 연습 값이고, 넷까지 세는 것은 함께 정한 약속이다.',
        task: '숨 고르기 횟수와 차례를 맞추고 따라 해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '숨 고르기 3번이 되게 맞춰요.', toolOptions: { title: '숨 고르기(우리 반 약속)', plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.1,
            hints: ['몇 번 숨을 고를지 세어 봐요.', '번 칸이 숨 고르기 횟수예요.', '번 칸을 3에 맞춰요.'],
            levels: { easy: { prompt: '숨 고르기 2번이 되게 맞춰요.', target: { plan: { rounds: 2 } } } } },
          STEPS('숨 고르기 차례를 놓아요.', '숨 고르기 차례', ['코로 들이쉬기', '입으로 내쉬기', '마음 살피기'], 0.15),
          { prompt: '숨 고른 뒤 점검해요.', toolOptions: { title: '숨 고르기 점검' }, target: { selfCheck: ['숨을 골랐어요', '마음이 가라앉았어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '할 말까지 정했나요?', target: { selfCheck: ['숨을 골랐어요', '마음이 가라앉았어요', '할 말을 정했어요'] } } },
            conclude: '화가 나면 숨을 고르고, 마음이 가라앉으면 말해요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '화가 나면 먼저 ___을 골라요.', answer: '숨' }] },
      notes: '타이머 칸은 5초 단위라 들이쉬기·내쉬기는 5초 칸에 두고, 넷까지 세는 것은 교사가 소리 내어 이끈다. 숨이 차거나 어지러운 학생은 편하게 쉬게 한다.',
    }),
    SORRY({
      id: 'bully.e12.g1-sorry-okay.wrap.sorry-words', type: 'wrap', title: '마음 잇는 말 카드',
      method: '마음 잇는 말 카드 읽기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 두 장("미안해"·"괜찮아?")을 읽어 주고 함께 담는다.', base: '카드 다섯 장 가운데 마음 잇는 말 네 장을 스스로 담고 따라 읽는다.', challenge: '담은 말마다 어울리는 장면(부딪혔을 때·도와줬을 때)을 하나씩 말한다.' },
      wrap: {
        teacher: '"친구와 마음을 다시 잇는 말을 바구니에 담아 볼까요?" 카드를 읽어 주고 담을 때마다 짝을 보며 따라 읽는다. "네 탓이야"를 담은 학생에게 "이 말을 들으면 마음이 이어질까요, 멀어질까요?"라고 묻는다. 출구 2번에서 "진 거예요"를 고른 학생에게 "사과는 용기예요. 사과한 친구는 실수를 바로잡은 거예요"라고 말해 준다.',
        exitTicket: [
          PICKW('마음 잇는 말', ['"미안해"', '"괜찮아?"', '"네 탓이야"', '"고마워"', '"다시 놀자"'], ['"미안해"', '"괜찮아?"', '"고마워"', '"다시 놀자"'], '마음 잇는 말을 담아요.'),
          { type: 'choice', prompt: '사과하는 것은요?', options: ['진 거예요', '용기 있는 일'], answer: 1, difficulty: 0.1, explain: '사과는 지는 게 아니라 친구 마음을 다시 잇는 용기예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '마음 잇는 말',
        items: [
          { type: 'check', prompt: '내가 쓸 말에 ✓ 해요.', options: ['미안해', '괜찮아?', '고마워', '다시 놀자'] },
          { type: 'draw', prompt: '친구에게 "미안해" 하는 모습을 그려요.' },
        ],
      },
    }),
    SORRY({
      id: 'bully.e12.g1-sorry-okay.wrap.change-pattern', type: 'wrap', title: '"실수 → 미안해 → 다시 놀자" 띠',
      method: '"실수 → 미안해 → 다시 놀자" 띠 잇기', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 띠를 처음부터 읽어 주고 빈칸 자리를 함께 짚으며 보기를 고른다.', base: '빈칸 두 곳에 차례로 올 조각을 보기에서 스스로 고르고 띠를 읽는다.', challenge: '빈칸을 고른 뒤 둘째 출구에서 틀린 조각("놀리기")을 보기에서 찾는다.' },
      wrap: {
        teacher: '"실수, 미안해, 다시 놀자 — 이 세 조각이 되풀이돼요." 띠를 반 전체가 읽은 뒤 빈칸을 채운다. 둘째 출구에서 "놀리기"를 찾지 못한 학생에게 "실수한 친구에게 놀리기가 오면 다시 놀 수 있을까요?"라고 묻는다. 출구 3번에서 "나쁜 아이예요"를 고른 학생에게 "한 번 실수했다고 나쁜 아이가 아니에요. 사과하고 바꾸면 다시 같이 놀 수 있어요"라고 말해 준다.',
        exitTicket: [
          FILL(['실수', '미안해', '다시 놀자', '실수', '미안해', '다시 놀자', '실수', '미안해'], [5, 7], '빈칸에 알맞은 조각을 넣어요.'),
          ODD(['실수', '미안해', '다시 놀자', '실수', '미안해', '다시 놀자'], 4, '놀리기', '틀리게 놓인 조각을 찾아요.'),
          { type: 'choice', prompt: '한 번 실수한 친구는?', options: ['나쁜 아이예요', '바뀔 수 있어요'], answer: 1, difficulty: 0.1, explain: '실수한 친구도 사과하고 바꾸면 다시 함께 놀 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '다시 놀자',
        items: [
          { type: 'blank', prompt: '띠를 따라 써요.', text: '실수 → 미안해 → 다시 ___', answer: '놀자' },
          { type: 'draw', prompt: '사과한 뒤 다시 노는 두 친구를 그려요.' },
        ],
        easy: { note: '"실수, 미안해, 다시 놀자!"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '친구와 손잡은 모습을 그려요.' }] },
      },
      notes: '규칙 판의 빈칸·조각 칸이 휴대폰에서 32px 라(44px 기준 미달) 빈칸 채우기·틀린 조각 찾기를 보기 고르기(rule)로 한다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 학교폭력, 다섯 가지 모습 알기
  const FIVE = MOD('bully.e12.g2-five-shapes', [2]);
  const F = { body: [C('push', '밀기'), C('kick', '발로 차기'), C('pinch', '몰래 꼬집기')], word: [C('fool', '"바보" 놀리기'), C('nick', '싫은 별명'), C('note', '쪽지로 놀리기')],
    left: [C('out', '안 끼워 주기'), C('dont', '"쟤랑 놀지 마"'), C('tag', '"너는 술래만"')], take: [C('snack', '간식 뺏기'), C('pencil', '연필 안 돌려줌'), C('lend', '"빌려줘" 안 줌')],
    make: [C('errand', '억지 심부름'), C('hw', '숙제 시키기'), C('bag', '가방 들게 하기')] };
  // 다섯 모습 나누기(sortboard): 바구니는 2~4개까지라 문항마다 다섯 가운데 서너 모습을 나눈다
  const FIVESORT = (prompt, keys, labels, d, more) => {
    const sort = (n, k) => Object.fromEntries(keys.slice(0, k).map((key, j) => [labels[j], ids(F[key].slice(0, n))]));
    const cards = (n, k) => keys.slice(0, k).flatMap((key) => F[key].slice(0, n)).sort((a, b) => a.text.length - b.text.length || a.id.localeCompare(b.id));
    return {
      prompt, toolOptions: { slots: labels, cards: cards(2, keys.length) }, target: { sort: sort(2, keys.length) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(세 바구니).`, toolOptions: { slots: labels.slice(0, 3), cards: cards(2, 3) }, target: { sort: sort(2, 3) } },
        challenge: { prompt: `${cut(prompt)}(더 많이).`, toolOptions: { cards: cards(3, keys.length) }, target: { sort: sort(3, keys.length) } },
      },
      ...more,
    };
  };
  // 이야기 바꾸기(story pick): 기본 바꿀 장면 2장, 쉬움 1장, 도전 바꿀 장면과 주인공 말을 두 칸에
  const TURN = (prompt, good, bad, say, d, more) => ({
    prompt, toolOptions: { mode: 'pick', basket: '바꿀 장면', cards: [bad[0], good[0], bad[1], good[1]] }, target: { pick: ids(good) }, difficulty: d,
    levels: {
      easy: { prompt: `${cut(prompt)}(하나).`, toolOptions: { cards: [bad[0], good[0]] }, target: { pick: [good[0].id] } },
      challenge: { prompt: `${cut(prompt)}, 할 말도요.`, toolOptions: { mode: 'sort', slots: [{ id: 'turn', label: '바꿀 장면' }, { id: 'say', label: '주인공 말' }], cards: [bad[0], good[0], say[1], bad[1], good[1], say[0]] }, target: { sort: { turn: ids(good), say: [say[0].id] } } },
    },
    ...more,
  });
  const T_FIVE = [
    FIVE({
      id: 'bully.e12.g2-five-shapes.intro.five-hands', type: 'intro', title: '교실 다섯 장면 속 친구 마음',
      method: '다섯 장면 속 친구 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 장면 세 개(밀기·놀리기·안 끼워 주기)만 들려주고 당하는 친구 마음을 함께 잇는다.', base: '다섯 장면을 하나씩 들으며 당하는 친구 마음 카드를 잇는 시연을 따라 말한다.', challenge: '장면마다 마음 낱말을 두 개씩(아프고 무서워요처럼) 말한다.' },
      intro: {
        teacher: '"교실 그림에 다섯 장면이 있어요. 밀기, 놀리기, 안 끼워 주기, 간식 빼앗기, 억지로 심부름 시키기. 당하는 친구 마음은 어떨까요?" 장면을 하나씩 읽어 주며 시연 단추로 마음 카드가 이어지는 모습을 보인다. "때린 장면만 학교폭력이에요"라는 말이 나오면 "다른 네 장면의 친구 얼굴도 보세요. 몸만이 아니라 말·따돌림·빼앗기·억지로 시키기도 친구를 아프게 해요"라고 되묻듯 답한다. 오늘은 학교폭력의 다섯 가지 모습을 알아본다고 밝힌다.',
        student: '다섯 장면 속 친구의 마음을 하나씩 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'push', label: '밀려 넘어짐' }, { id: 'tease', label: '놀림 받음' }, { id: 'out', label: '안 끼워 줌' }, { id: 'take', label: '간식 뺏김' }, { id: 'make', label: '억지 심부름' }], cards: ['아픔', '속상함', '외로움', '억울함', '무서움'] }, sequence: [{ match: { push: '아픔', tease: '속상함', out: '외로움', take: '억울함', make: '무서움' } }] },
        art: { draw: 'a paper classroom divided into five small scenes: a child pushed down, a child being teased, a child left out of a game, a snack being taken, a child forced to carry a bag, each hurt child drawn with a sad face', banner: '다섯 가지 모습' },
      },
      notes: '다섯 장면은 그림 속 가상 인물의 일이다. 우리 반에서 이런 일이 있었는지 묻지 않는다.',
    }),
    FIVE({
      id: 'bully.e12.g2-five-shapes.intro.five-finger-chant', type: 'intro', title: '다섯 손가락 "하지 않기" 구호',
      method: '다섯 손가락 구호 리듬', tool: 'keyboard', minutes: 6,
      levels: { easy: '"때리지 않기, 놀리지 않기, 따돌리지 않기" 세 가지만 손가락을 접으며 따라 친다.', base: '다섯 가지 "하지 않기"를 한 마디씩 손가락을 접으며 손뼉으로 따라 친다.', challenge: '교사가 구호 차례를 바꿔 불러도 다섯 가지를 다 친다.' },
      intro: {
        teacher: '"때리지 않기(엄지 접기), 놀리지 않기(검지), 따돌리지 않기(가운뎃손가락), 빼앗지 않기(약지), 시키지 않기(새끼)!" 한 마디에 한 손가락씩 접으며 시연 단추의 리듬 블록에 맞춰 손뼉을 친다. 마지막에 다 접힌 주먹을 펴며 "모두 사이좋게!"를 외친다. "빌리는 건 괜찮아요"라는 말이 나오면 "빌려 달라고 해 놓고 안 돌려주면 빼앗은 거예요. 친구가 좋다고 할 때 빌리고 꼭 돌려줘요"라고 말해 준다.',
        student: '한 마디에 손가락 하나씩 접으며 다섯 가지 구호를 따라 외쳐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 5, blocks: ['q', 'e', 'h', 'qr'] }, sequence: [{ rhythm: ['e', 'e', 'e', 'e', 'h', 'e', 'e', 'e', 'e', 'h', 'e', 'e', 'e', 'e', 'h', 'e', 'e', 'e', 'e', 'h', 'e', 'e', 'e', 'e', 'h'] }] },
        art: { draw: 'a large paper hand with five fingers, each finger labeled with a small paper icon: a stopped fist, a closed mouth, holding hands, a returned pencil, an open palm, children counting along', banner: '다섯 가지 하지 않기' },
      },
    }),
    FIVE({
      id: 'bully.e12.g2-five-shapes.activity.five-sort', type: 'activity', title: '다섯 모습 바구니 나누기',
      method: '다섯 모습 상자에 장면 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '바구니 3개에 장면 카드 6장을 나누고, 든 장 수가 보이며 틀리면 까닭을 듣고 되돌아온다.', base: '문항마다 바구니 3~4개(다섯 모습을 문항에 나눔)에 장면 카드 6~8장을 나눈다.', challenge: '바구니마다 장면이 한 장씩 더(9~12장) 들어오고, 넷째 문항에서 두 바구니에 다 들어갈 수 있는 장면을 골라 까닭을 말한다.' },
      activity: {
        title: '다섯 모습 바구니', tool: 'sortboard',
        teacher: '"이 장면은 다섯 모습 가운데 어디일까요? 몸으로 아프게 하기, 나쁜 말, 따돌리기, 빼앗기, 억지로 시키기." 카드를 읽어 주고, 넣기 전에 손가락 구호에서 몇째 손가락인지 함께 접어 본다. "연필 안 돌려준 건 빌린 거예요"라는 학생에게 "친구가 돌려 달라는데 안 주면 친구 마음은 어떨까요?"라고 묻는다. 넷째 문항에서 "놀리면서 밀기"처럼 두 모습이 한꺼번에 있는 장면을 말해 보게 하고, 어느 모습이든 친구를 아프게 하는 행동이라는 점을 짚는다.',
        task: '장면 카드를 학교폭력의 모습 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          FIVESORT('몸·말·따돌림으로 나누어요.', ['body', 'word', 'left'], ['몸으로', '나쁜 말', '따돌림'], 0.1),
          FIVESORT('빼앗기·시키기도 나누어요.', ['take', 'make', 'body', 'word'], ['빼앗기', '억지로 시키기', '몸으로', '나쁜 말'], 0.15),
          FIVESORT('네 바구니에 나누어요.', ['left', 'take', 'make', 'word'], ['따돌림', '빼앗기', '억지로 시키기', '나쁜 말'], 0.2),
          { prompt: '두 바구니에 맞는 장면을 말해요.', free: true, talk: true, difficulty: 0.2, conclude: '몸·말·따돌림·빼앗기·억지로 시키기 — 모두 친구를 아프게 하는 학교폭력이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '어떤 모습인지 써요.', columns: ['장면', '모습'], cells: [['밀기', ''], ['싫은 별명', ''], ['간식 뺏기', ''], ['억지 심부름', '']], answer: '몸으로, 나쁜 말, 빼앗기, 억지로 시키기' }],
        easy: [{ type: 'choice', prompt: '"쟤랑 놀지 마"는?', options: ['따돌림', '놀이'], answer: '따돌림' }] },
      notes: '분류판 바구니는 2~4개까지라, 계획의 "다섯 상자"는 문항마다 다섯 모습 가운데 서너 개씩 나누어 담는다. "두 상자에 다 맞는 장면"은 카드 한 장의 정답 칸이 하나라 넷째 문항(말하기)으로 했다.',
    }),
    FIVE({
      id: 'bully.e12.g2-five-shapes.activity.five-graph', type: 'activity', title: '"하지 않기" 그림그래프',
      method: '우리 반 "하지 않기" 그림그래프 만들기', tool: 'chart', minutes: 13,
      levels: { easy: '항목 3개(때리지·놀리지·따돌리지 않기)의 그림그래프를 완성하고 읽는다.', base: '항목 5개의 그림그래프를 표를 보고 완성하고, 가장 많은 것을 읽는다.', challenge: '항목 5개를 완성하고 가장 많은 것과 가장 적은 것을 읽은 뒤 몇 명 차이인지 고른다.' },
      activity: {
        title: '그림그래프 만들기(가상 자료)', tool: 'chart',
        teacher: '"가상의 2학년 한 반 친구들이 \'가장 지키고 싶은 하지 않기\'를 하나씩 골랐어요. 웃는 얼굴 하나가 친구 한 명이에요." 이 자료는 수업을 위해 지은 가상의 조사라고 먼저 말한다. 표의 수만큼 얼굴을 채운 뒤 반 전체가 손가락으로 세어 본다. 칸마다 얼굴 수를 헷갈리는 학생에게 "표의 수를 먼저 소리 내어 읽고, 하나씩 세며 채워 볼까요?"라고 묻는다. 적게 고른 약속도 모두 지켜야 할 약속이라는 점을 짚는다.',
        task: '표를 보고 그림그래프를 채우고 읽어요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '표를 보고 얼굴을 채워요.', toolOptions: { type: 'picture', title: '지키고 싶은 하지 않기(가상)', unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], data: [['때리지 않기', 6], ['놀리지 않기', 7], ['따돌리지 않기', 4], ['빼앗지 않기', 3], ['시키지 않기', 2]] }, target: { build: true }, difficulty: 0.1,
            levels: { easy: { prompt: '세 줄의 얼굴을 채워요.', toolOptions: { data: [['때리지 않기', 6], ['놀리지 않기', 7], ['따돌리지 않기', 4]] } } } },
          { prompt: '가장 많은 약속은 무엇일까요?', toolOptions: { type: 'picture', mode: 'read', title: '지키고 싶은 하지 않기(가상)', unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], data: [['때리지 않기', 6], ['놀리지 않기', 7], ['따돌리지 않기', 4], ['빼앗지 않기', 3], ['시키지 않기', 2]], question: '가장 많은 것은?', choices: ['때리지 않기', '놀리지 않기', '따돌리지 않기', '빼앗지 않기', '시키지 않기'] }, target: { pick: 1 }, difficulty: 0.15,
            levels: { easy: { prompt: '세 약속 가운데 가장 많은 것은?', toolOptions: { data: [['때리지 않기', 6], ['놀리지 않기', 7], ['따돌리지 않기', 4]], choices: ['때리지 않기', '놀리지 않기', '따돌리지 않기'] } } } },
          { prompt: '가장 적은 약속은 무엇일까요?', toolOptions: { type: 'picture', mode: 'read', title: '지키고 싶은 하지 않기(가상)', unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], data: [['때리지 않기', 6], ['놀리지 않기', 7], ['따돌리지 않기', 4], ['빼앗지 않기', 3], ['시키지 않기', 2]], question: '가장 적은 것은?', choices: ['때리지 않기', '놀리지 않기', '따돌리지 않기', '빼앗지 않기', '시키지 않기'] }, target: { pick: 4 }, difficulty: 0.2,
            levels: { easy: { prompt: '세 약속 가운데 가장 적은 것은?', toolOptions: { data: [['때리지 않기', 6], ['놀리지 않기', 7], ['따돌리지 않기', 4]], choices: ['때리지 않기', '놀리지 않기', '따돌리지 않기'] }, target: { pick: 2 } },
              challenge: { prompt: '많은 것과 적은 것 차이는?', toolOptions: { question: '7명과 2명은 몇 명 차이?', choices: ['5명', '9명', '2명'] }, target: { pick: 0 } } },
            conclude: '적게 고른 약속도 모두 지켜요. 다섯 가지 모두 "하지 않기"예요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '그래프에서 가장 많은 약속은?', options: ['놀리지 않기', '시키지 않기'], answer: '놀리지 않기' }] },
      notes: '그래프 수는 수업용으로 지은 가상의 조사다. 실제로 우리 반에서 조사할 때는 "지키고 싶은 약속"만 묻고, 누가 무엇을 당했는지는 묻지 않는다.',
    }),
    FIVE({
      id: 'bully.e12.g2-five-shapes.activity.turn-around', type: 'activity', title: '모두 웃는 이야기로 바꾸기',
      method: '장면 바꾸기 그림 이야기', tool: 'story', minutes: 13,
      levels: { easy: '바꿀 장면 카드 2장 가운데 모두 웃게 하는 장면 1장을 고른다.', base: '장면 카드 4장 가운데 바꿀 장면 2장을 골라 담는다.', challenge: '바꿀 장면 2장과 함께 주인공이 할 말까지 두 칸에 나누어 놓는다.' },
      activity: {
        title: '이야기 장면 바꾸기', tool: 'story',
        teacher: '"바다가 나리에게 \'내 숙제 대신 해 와!\' 하고 억지로 시켜요. 이 이야기를 모두 웃는 이야기로 바꿔 볼까요?" 장면 카드를 읽어 주고 고르기 전에 "이 장면으로 바꾸면 나리 마음은?"이라고 묻는다. "나리가 그냥 해 주면 끝나요"라는 학생에게 "억지로 해 주면 나리 마음은 웃을까요? 바뀌어야 할 건 시킨 행동이에요"라고 묻는다. 시킨 바다도 행동을 바꾸면 함께 웃는 친구가 될 수 있다는 점을 짚는다.',
        task: '아프게 하는 이야기를 모두 웃는 이야기로 바꿀 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          TURN('억지 숙제 이야기를 바꿔요.', [C('together', '같이 숙제해요', { motif: 'book' }), C('own', '각자 해요', { motif: 'book' })], [C('force', '"해 와!" 시켜요', { motif: 'book' }), C('scare', '안 하면 겁줘요', { motif: 'book' })], [C('ask', '"같이 할래?"'), C('order', '"빨리 해!"')], 0.1),
          TURN('간식 뺏기 이야기를 바꿔요.', [C('share', '"나눠 먹을래?"', { motif: 'apple' }), C('askfirst', '먼저 물어요', { motif: 'apple' })], [C('grab', '확 뺏어요', { motif: 'apple' }), C('hide', '몰래 숨겨요', { motif: 'apple' })], [C('please', '"하나 줄래?"'), C('mine', '"내 거야!"')], 0.15),
          TURN('놀이에서 빼는 이야기를 바꿔요.', [C('join', '"같이 하자"', { motif: 'ball' }), C('turn', '차례 나눠요', { motif: 'ball' })], [C('out', '"넌 빠져"', { motif: 'ball' }), C('ignore', '못 본 척해요', { motif: 'ball' })], [C('come', '"이리 와!"'), C('no', '"자리 없어"')], 0.2, { conclude: '시키기·빼앗기·빼기를 같이 하기·묻기·나누기로 바꾸면 모두 웃어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '억지로 시키는 대신에?', options: ['"같이 할래?"', '"빨리 해!"'], answer: '"같이 할래?"' }] },
    }),
    FIVE({
      id: 'bully.e12.g2-five-shapes.activity.no-take-steps', type: 'activity', title: '"싫어, 안 줄래" 거절 연습',
      method: '"싫어, 안 줄래" 거절 동작 연습', tool: 'timer', minutes: 13,
      levels: { easy: '순서 카드 2장(눈 보기·"싫어, 안 줄래")의 차례를 맞춘다.', base: '순서 카드 3장(눈 보기·"싫어, 안 줄래"·선생님께 가기)의 차례를 맞추고 짝과 2번 연습하게 타이머를 맞춘다.', challenge: '세 단계를 맞추고, 셋째 문항에서 목소리를 키워 단호하게 말해 본 것까지 표시한다.' },
      activity: {
        title: '거절 세 단계 연습', tool: 'timer',
        teacher: '"누가 억지로 간식을 달라고 하거나 심부름을 시키면? 첫째, 눈을 봐요. 둘째, 손을 앞으로 내밀며 \'싫어, 안 줄래.\' 셋째, 선생님께 가요." 교사가 시범을 보인 뒤 짝과 한 명은 "그거 줘" 하고 말만 하는 역할, 한 명은 거절하는 역할을 한다. 작게 웅얼거리는 학생에게 "싫다는 말은 친구가 알아들을 만큼 또박또박, 크게! 한 번 더 해 볼까요?"라고 말해 준다. 억지로 시킨 쪽이 잘못이고 거절한 친구는 잘한 것이라는 점을 짚는다.',
        task: '거절 세 단계를 놓고 짝과 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('거절 세 단계를 놓아요.', '거절할 때', ['눈 보기', '"싫어, 안 줄래"', '선생님께 가기'], 0.1),
          { prompt: '짝과 2번 연습하게 맞춰요.', toolOptions: { title: '거절 연습(우리 반 약속)', plan: { work: 15, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['짝과 한 번씩 하면 몇 번일까요?', '번 칸이 연습 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { challenge: { prompt: '역할 바꿔 4번 연습해요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '거절 연습을 점검해요.', toolOptions: { title: '거절 점검' }, target: { selfCheck: ['눈을 봤어요', '"싫어" 말했어요', '선생님께 갔어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '단호한 목소리도 점검해요.', target: { selfCheck: ['눈을 봤어요', '"싫어" 말했어요', '선생님께 갔어요', '크고 단호하게 했어요'] } } },
            conclude: '억지로 시키면 눈을 보고 "싫어, 안 줄래" 하고 선생님께 가요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '거절하는 말을 써요.', text: '"싫어, 안 ___"', answer: '줄래' }] },
      notes: '역할놀이에서 뺏는 역할은 손을 쓰지 않고 말로만 한다. 타이머 값은 연습용 우리 반 약속이다.',
    }),
    FIVE({
      id: 'bully.e12.g2-five-shapes.wrap.five-collage', type: 'wrap', title: '다섯 약속 손바닥 포스터',
      method: '다섯 약속 손바닥 포스터', tool: 'collage', minutes: 6,
      levels: { easy: '교사가 손가락 세 개 자리에 조각을 먼저 붙여 보이고 함께 따라 붙인다.', base: '손가락 다섯 개 자리에 "하지 않기" 조각을 하나씩 붙이고 손가락마다 약속을 말한다.', challenge: '다섯 조각에 더해 손바닥 가운데 우리 반 약속 조각(하트)을 붙인다.' },
      wrap: {
        teacher: '"종이 손바닥에 손가락이 다섯 개 있어요. 손가락마다 \'하지 않기\' 조각을 하나씩 붙여 볼까요?" 붙일 때마다 반 전체가 손가락을 접으며 구호를 외친다. 출구 2번에서 "때려야만 학교폭력"을 고른 학생에게 "손가락 다섯 개를 보세요. 말·따돌림·빼앗기·시키기도 다 들어 있지요?"라고 말해 준다. 완성한 포스터는 교실 문 옆에 붙인다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'heart', 'star', 'square', 'leaf'], colors: ['빨강', '노랑', '초록', '파랑', '분홍'], sizes: ['s', 'm'] }, prompt: '손가락마다 조각을 붙여요.', target: { selfCheck: ['조각 다섯 개를 붙였어요', '약속을 말했어요'], minPieces: 5 }, difficulty: 0.1 },
          { type: 'choice', prompt: '학교폭력은 때리기만일까요?', options: ['때리기만요', '다섯 가지 모두'], answer: 1, difficulty: 0.1, explain: '몸·말·따돌림·빼앗기·억지로 시키기 모두 학교폭력이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '다섯 가지 하지 않기',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['때리지 않기', '놀리지 않기', '따돌리지 않기', '빼앗지 않기', '시키지 않기'] },
          { type: 'draw', prompt: '내 손바닥을 그리고 약속을 써요.' },
        ],
      },
    }),
    FIVE({
      id: 'bully.e12.g2-five-shapes.wrap.five-mindmap', type: 'wrap', title: '"아프게 하는 행동" 생각그물',
      method: '"학교폭력" 그림 생각그물 잇기', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 가지 세 개(몸·말·따돌림)에 카드를 하나씩 함께 잇는다.', base: '다섯 가지 가지에 장면 카드를 하나씩 스스로 잇는다.', challenge: '다섯 가지를 이은 뒤 가지마다 "대신 할 행동"을 하나씩 말한다.' },
      wrap: {
        teacher: '"가운데에 \'아프게 하는 행동\'이 있어요. 다섯 가지에 알맞은 장면을 이어 볼까요?" 카드를 읽어 주고 이을 때마다 그 손가락을 접는다. 따돌림 가지에 "간식 뺏기"를 잇는 학생에게 "간식 뺏기는 몇째 손가락이었지요?"라고 묻는다. 끝으로 가지마다 대신 할 행동(밀기 → 토닥이기, 놀리기 → 칭찬하기)을 반 전체가 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '아프게 하는 행동', slots: ['몸으로', '나쁜 말', '따돌림', '빼앗기', '억지로 시키기'], cards: [C('kick', '발로 차기'), C('nick', '싫은 별명'), C('out', '안 끼워 주기'), C('snack', '간식 뺏기'), C('errand', '억지 심부름')] }, prompt: '가지마다 알맞은 장면을 이어요.', target: { match: { 몸으로: 'kick', '나쁜 말': 'nick', 따돌림: 'out', 빼앗기: 'snack', '억지로 시키기': 'errand' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구 연필을 안 돌려주면?', options: ['빌린 거예요', '빼앗은 거예요'], answer: 1, difficulty: 0.1, explain: '돌려 달라는데 안 주면 빼앗은 거예요. 빌린 것은 꼭 돌려줘요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '아프게 하는 행동 다섯 가지',
        items: [
          { type: 'short', prompt: '학교폭력 다섯 가지 모습을 써요.', answer: '몸으로 아프게 하기, 나쁜 말, 따돌리기, 빼앗기, 억지로 시키기' },
          { type: 'choice', prompt: '"너는 술래만 해"는?', options: ['억지로 시키기', '칭찬하기'], answer: '억지로 시키기' },
        ],
        easy: { note: '손가락을 접으며 "때리지, 놀리지, 따돌리지, 빼앗지, 시키지 않기"를 떠올려요.', items: [{ type: 'draw', prompt: '친구와 사이좋게 노는 모습을 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 싫어하는 별명, 장난의 선 넘기
  const NICK = MOD('bully.e12.g2-nickname-line', [2]);
  const JOKEHURT = ['장난이에요', '놀림이에요'];
  const T_NICK = [
    NICK({
      id: 'bully.e12.g2-nickname-line.intro.signal-faces', type: 'intro', title: '싫다는 신호 얼굴 찾기',
      method: '싫다는 신호 얼굴 찾기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 세 개(고개 숙임·찡그림·활짝 웃음)를 보이며 싫다는 신호를 함께 고른다.', base: '그림 다섯 개 가운데 싫다는 신호를 보이는 친구를 고르는 시연을 따라 말한다.', challenge: '억지 웃음 그림을 골라 그 친구의 진짜 마음을 말한다.' },
      intro: {
        teacher: '"친구들이 별명을 불렀어요. 이 친구들 가운데 별명이 싫다는 신호를 보내는 친구는 누구일까요?" 그림을 하나씩 짚으며 시연 단추로 싫다는 신호 카드가 바구니에 담기는 모습을 보인다. "웃고 있으니까 좋아하는 거예요"라는 말이 나오면 "입은 웃는데 눈은 어때요? 억지로 웃는 것도 싫다는 신호일 수 있어요"라고 되묻는다. 오늘은 싫다는 신호를 알아보고, 신호를 보면 멈추는 법을 배운다고 밝힌다.',
        student: '별명을 들은 친구들 가운데 싫다는 신호를 보내는 얼굴을 찾아보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '싫다는 신호', cards: [C('down', '고개 숙여요'), C('smile', '활짝 웃어요'), C('frown', '찡그려요'), C('fake', '억지로 웃어요'), C('laugh', '같이 깔깔')], shuffle: false }, sequence: [{ pick: ['down', 'frown', 'fake'] }] },
        art: { draw: 'a row of five paper children after hearing a nickname: one looking down, one smiling happily, one frowning, one with a forced smile and teary eyes, one laughing along', banner: '싫다는 신호가 보여요?' },
      },
    }),
    NICK({
      id: 'bully.e12.g2-nickname-line.intro.name-song', type: 'intro', title: '"이름 불러 주세요" 가락',
      method: '"이름 불러 주세요" 가락', tool: 'keyboard', minutes: 6,
      levels: { easy: '"불러 줘" 끝 세 음만 교사와 함께 부른다.', base: '"내 이름을 불러 줘, 예쁜 이름 불러 줘" 한 줄 가락을 듣고 따라 부른 뒤 서로 이름을 넣어 부른다.', challenge: '짝 이름을 넣어 부르고 끝 음을 바꿔 한 번 더 부른다.' },
      intro: {
        teacher: '"내 이름을 불러 줘, 예쁜 이름 불러 줘" 노래를 두 번 불러 준다. 시연 단추로 건반이 한 음씩 눌리는 모습을 보이고 반 전체가 따라 부른 뒤, "바다야, 불러 줘"처럼 짝 이름을 넣어 부른다. "별명이 더 재미있어요"라는 말이 나오면 "친구가 좋아하는 별명이면 괜찮아요. 하지만 싫어하는 별명은 이름보다 아파요. 모를 땐 이름을 불러요"라고 말해 준다.',
        student: '"내 이름을 불러 줘" 노래를 따라 부르고, 짝 이름을 넣어 불러 주어요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '미', '솔', '솔', '라', '솔', '미', '레', '도'] }, sequence: [{ notes: ['미', '미', '솔', '솔', '라', '솔', '미', '레', '도'] }] },
        art: { draw: 'paper children in a circle singing, each holding a paper name tag with a heart, music notes floating between them', banner: '이름 불러 주세요' },
      },
      notes: '짝 이름을 넣어 부를 때 성까지 말하지 않고 부르는 이름만 쓴다.',
    }),
    NICK({
      id: 'bully.e12.g2-nickname-line.activity.joke-or-hurt', type: 'activity', title: '장난이에요·놀림이에요',
      method: '장난이에요/놀림이에요 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '카드 4장, 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '카드 6장을 다 넣은 뒤 확인한다.', challenge: '"처음엔 웃다 그만"처럼 처음엔 둘 다 웃다가 한 명이 그만하라는 장면 2장이 더 들어온다(놀림이에요 바구니).' },
      activity: {
        title: '장난·놀림 바구니', tool: 'sortboard',
        teacher: '"둘 다 웃으면 장난, 한 명이라도 싫으면 놀림이에요." 카드를 읽어 주고 넣기 전에 "듣는 친구 얼굴은?"이라고 묻는다. "다들 부르니까 괜찮아요"라는 학생에게 "다 같이 부르면 듣는 친구는 더 괜찮을까요, 더 아플까요?"라고 묻는다. "처음엔 같이 웃었잖아요"에는 "중간에 \'그만\'이라고 하면 그때부터는 놀림이에요. 그 순간 멈추면 돼요"라고 짚는다. 놀린 친구는 나쁜 아이가 아니라 멈추고 이름을 불러 주면 되는 친구라는 점을 말한다.',
        task: '장면 카드를 장난이에요·놀림이에요 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(JOKEHURT, '부르는 말을 나누어요.', ['이름 부르기', '좋아하는 별명', '같이 지은 팀 이름'], ['싫은 별명 부르기', '생김새 놀리기', '이름 바꿔 놀리기'], ['"그만"해도 부르기', '웃다가 울먹'], 1, 0.1),
          SB2(JOKEHURT, '놀이 장면을 나누어요.', ['둘 다 웃는 끝말잇기', '같이 웃긴 표정', '서로 "멋지다"'], ['말 따라 하며 놀리기', '틀린 답 비웃기', '넘어지면 깔깔'], ['처음엔 웃다 "그만"', '혼자만 웃기'], 1, 0.15),
          SB2(JOKEHURT, '쪽지·그림 장면을 나누어요.', ['칭찬 쪽지', '친구 웃는 그림', '"고마워" 쪽지'], ['놀리는 쪽지', '얼굴 낙서 그림', '별명 써 붙이기'], ['"장난" 쪽지 돌리기', '싫다는 별명 그림'], 1, 0.2, { conclude: '둘 다 웃으면 장난, 한 명이라도 싫으면 놀림이에요. 싫다고 하면 멈춰요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '장난 ○, 놀림 × 를 써요.', columns: ['장면', '○ / ×'], cells: [['이름 부르기', ''], ['싫은 별명 부르기', ''], ['칭찬 쪽지', ''], ['틀린 답 비웃기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '놀림에 ○ 해요.', options: ['싫은 별명 부르기', '이름 부르기'], answer: '싫은 별명 부르기' }] },
    }),
    NICK({
      id: 'bully.e12.g2-nickname-line.activity.nickname-dilemma', type: 'activity', title: '갈림길: 다들 별명을 부를 때',
      method: '갈림길: 다들 별명을 부를 때', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 3개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 고른 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '별명 갈림길', tool: 'dilemma',
        teacher: '"반 친구들이 바다를 싫어하는 별명으로 부르며 웃어요. 나는 어떻게 할까요?" 고르기 전에 "고른 다음 바다 마음은 어떻게 될까요?"라고 먼저 묻는다. "같이 부르면 나도 끼워 줘요"를 고른 학생에게 "바다 얼굴을 보세요. 다들 한다고 괜찮아질까요?"라고 묻는다. "그만하자"고 말하기 어려운 학생에게는 바다 이름을 불러 주는 것만으로도 큰 도움이고, 말하기 힘들면 선생님께 알려도 된다고 말해 준다. 별명을 부른 친구들도 멈추면 된다는 점을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('다들 별명을 불러요. 골라요.', { text: '친구들이 바다를 싫은 별명으로 부르며 웃어요.', motif: 'house', choices: [
            { id: 'join', text: '같이 불러요', result: '바다가 고개를 숙여요.', why: '다들 해도 듣는 친구 마음은 아파요.' },
            { id: 'name', text: '"바다야" 이름 불러요', result: '바다가 살짝 웃어요.', ending: '이름을 불러 줘서 바다 마음이 나아졌어요.' },
            { id: 'stop', text: '"그만하자" 말해요', result: '친구들이 멈칫해요.', easyEnding: '친구들이 별명 부르기를 멈췄어요.', next: { text: '한 친구가 "장난인데?" 하며 또 불러요.', choices: [
              { id: 'tell', text: '선생님께 알려요', result: '선생님이 반 친구들과 이야기했어요.', ending: '별명 부르기가 멈추고 바다가 웃었어요.' },
              { id: 'laugh', text: '같이 웃어요', result: '별명이 계속돼요.', why: '말해도 안 멈추면 어른께 알려요.' }] } }] },
          [['name'], ['stop', 'tell']], [{ id: 'hurt', text: '바다 마음이 아파서요' }, { id: 'all', text: '다들 하니까요', why: '다들 한다고 옳은 일이 되지 않아요.' }, { id: 'smile', text: '바다도 웃었으니까요', why: '억지 웃음은 싫다는 신호일 수 있어요.' }], 'hurt', 0.15),
          DILEMMA('별명 노래를 불러요. 골라요.', { text: '친구들이 나리 이름을 바꿔 놀리는 노래를 불러요.', motif: 'house', choices: [
            { id: 'sing', text: '따라 불러요', result: '나리가 귀를 막아요.', why: '놀리는 노래는 따라 하지 않아요.' },
            { id: 'stop', text: '"나리가 싫대" 말해요', result: '노래 소리가 작아져요.', easyEnding: '친구들이 노래를 멈췄어요.', next: { text: '한 친구가 "재밌잖아" 해요.', choices: [
              { id: 'real', text: '"진짜 노래 하자"', result: '다 같이 다른 노래를 불러요.', ending: '나리도 함께 웃으며 노래했어요.' },
              { id: 'quiet', text: '그냥 가요', result: '놀림 노래가 계속돼요.', why: '멈추지 않으면 다른 놀이를 하자고 하거나 어른께 알려요.' }] } },
            { id: 'side', text: '나리 곁에 가요', result: '나리가 덜 외로워요.', ending: '곁에 있어 줘서 나리가 힘이 났어요.' }] },
          [['stop', 'real'], ['side']], [{ id: 'name', text: '이름은 소중해서요' }, { id: 'fun', text: '노래가 재밌어서요', why: '듣는 친구가 웃어야 재미있는 거예요.' }, { id: 'me', text: '내 일이 아니라서요', why: '보고 있는 친구도 도울 수 있어요.' }], 'name', 0.2),
          DILEMMA('같이 부르자고 해요. 골라요.', { text: '친구가 "너도 같이 불러" 하며 팔을 끌어요.', motif: 'house', choices: [
            { id: 'go', text: '같이 불러요', result: '듣는 친구가 울먹여요.', why: '친구가 시켜도 놀림은 하지 않아요.' },
            { id: 'no', text: '"나는 안 할래"', result: '친구가 "왜?" 해요.', easyEnding: '친구도 "그럼 나도 안 할래" 했어요.', next: { text: '친구가 "넌 재미없어" 해요.', choices: [
              { id: 'firm', text: '"싫어하니까 안 해"', result: '친구가 생각에 잠겨요.', ending: '친구도 별명 부르기를 멈췄어요.' },
              { id: 'give', text: '할 수 없이 불러요', result: '놀림에 함께하게 돼요.', why: '재미없다고 해도 내 생각을 지켜요.' }] } }] },
          ['no', 'firm'], [{ id: 'mind', text: '내 생각을 지켜서요' }, { id: 'afraid', text: '혼날까 봐서요', why: '혼나서가 아니라 친구 마음이 아파서예요.' }, { id: 'boring', text: '재미없어서요', why: '재미가 아니라 친구 마음을 생각해요.' }], 'mind', 0.25, { conclude: '다들 별명을 불러도 나는 이름을 부르고, "그만하자" 말하고, 안 멈추면 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '다들 싫은 별명을 부르면?', options: ['이름을 불러요', '같이 불러요'], answer: '이름을 불러요' }] },
      notes: '별명 자체는 화면과 교사 말에서 지어 부르지 않는다("싫어하는 별명"으로만 말함). 우리 반 친구의 별명을 예로 들지 않는다.',
    }),
    NICK({
      id: 'bully.e12.g2-nickname-line.activity.real-name-collage', type: 'activity', title: '친구 이름 꽃 만들기',
      method: '친구 이름 꽃 만들기', tool: 'collage', minutes: 13,
      levels: { easy: '꽃 가운데 동그라미와 꽃잎 조각 3개를 붙인다.', base: '꽃 가운데와 꽃잎 5개를 붙이고, 꽃잎마다 짝의 좋은 점을 말한 것을 표시한다.', challenge: '꽃잎 5개에 더해 꽃 가운데 친구가 좋아하는 이름을 써 달라고 선생님께 말한 것까지 표시한다.' },
      activity: {
        title: '이름 꽃 꾸미기', tool: 'collage',
        teacher: '"가운데 노란 동그라미는 짝의 이름 자리예요. 꽃잎 하나에 짝의 좋은 점을 하나씩 붙여 볼까요? 잘 웃어요, 잘 도와줘요, 그림을 잘 그려요." 꽃잎을 붙일 때마다 짝에게 좋은 점을 말해 준다. 생김새를 좋은 점으로 말하는 학생에게 "생김새 말고, 짝이 하는 멋진 일을 찾아볼까요?"라고 묻는다. 별명 대신 이름과 좋은 점으로 불러 주면 친구가 웃는다는 점을 짚는다.',
        task: '짝 이름 꽃에 좋은 점 꽃잎을 붙여요.', levels: { easy: { shapes: ['circle', 'leaf', 'heart'] }, base: { shapes: ['circle', 'leaf', 'heart', 'star', 'semi'] }, challenge: {} },
        items: [
          { prompt: '꽃 가운데와 꽃잎을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'circle', color: '노랑', min: 1 }, { shape: 'leaf', min: 5 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '가운데와 꽃잎 3개를 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', min: 1 }, { shape: 'leaf', min: 3 }] } }, challenge: { prompt: '노랑 가운데 하나, 꽃잎 6개요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'leaf', min: 6 }] } } } },
          { prompt: '좋은 점 하트 꽃잎을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'heart', min: 5 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '좋은 점 하트 3개를 붙여요.', target: { has: [{ shape: 'heart', min: 3 }] } }, challenge: { prompt: '하트 5개와 별 하나를 붙여요.', target: { has: [{ shape: 'heart', min: 5 }, { shape: 'star', min: 1 }] } } } },
          { prompt: '좋은 점을 말하고 표시해요.', toolOptions: {}, target: { selfCheck: ['꽃을 꾸몄어요', '좋은 점을 말했어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개, 좋은 점 말했나요?', target: { selfCheck: ['꽃을 꾸몄어요', '좋은 점을 말했어요'], minPieces: 3 } }, challenge: { prompt: '좋아하는 이름도 물었나요?', target: { selfCheck: ['꽃을 꾸몄어요', '좋은 점을 말했어요', '좋아하는 이름을 물었어요'], minPieces: 5 } } },
            conclude: '별명 대신 이름과 좋은 점으로 불러 주면 친구가 웃어요.' },
        ],
      },
      worksheet: { items: [{ type: 'short', prompt: '짝의 좋은 점 하나를 써요.', answer: '(예) 잘 웃어요, 잘 도와줘요' }] },
      notes: '생김새·몸무게·옷 같은 겉모습은 좋은 점으로도 쓰지 않게 이끈다. 행동(잘 도와줘요)으로 말한다.',
    }),
    NICK({
      id: 'bully.e12.g2-nickname-line.activity.stop-tease-steps', type: 'activity', title: '놀림을 멈추는 말 세 단계',
      method: '놀림을 멈추는 말 세 단계', tool: 'timer', minutes: 13,
      levels: { easy: '순서 카드 2장("멈춰"·"그 이름 싫대")의 차례를 맞춘다.', base: '순서 카드 3장의 차례를 맞추고, 짝과 역할 바꿔 2번 따라 말하게 타이머를 맞춘다.', challenge: '세 단계를 맞추고, 셋째 문항에서 목소리를 단호하게 바꿔 다시 해 본 것까지 표시한다.' },
      activity: {
        title: '놀림 멈추기 세 단계', tool: 'timer',
        teacher: '"친구가 별명으로 놀림 받는 걸 보면? 첫째 \'멈춰!\' 둘째 \'그 이름 싫대.\' 셋째 \'이름 불러 주자.\'" 세 말을 손동작(손바닥 내밀기·고개 젓기·손 펴서 권하기)과 함께 보인 뒤 순서 카드를 맞춘다. 화난 목소리로 소리치는 학생에게 "단호한 건 화내는 게 아니에요. 또박또박, 흔들리지 않게 말해 볼까요?"라고 말해 준다. 짝 연습에서 놀리는 역할은 별명을 말하지 않고 "놀린다" 손짓만 한다.',
        task: '놀림을 멈추는 말 차례를 놓고 짝과 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('놀림 멈추는 말을 놓아요.', '놀림을 멈추는 말', ['"멈춰!"', '"그 이름 싫대"', '"이름 불러 주자"'], 0.1),
          { prompt: '짝과 2번 말하게 맞춰요.', toolOptions: { title: '멈추는 말 연습(우리 반 약속)', plan: { work: 15, rest: 5, rounds: 1 } }, target: { plan: { rounds: 2 } }, difficulty: 0.15,
            hints: ['짝과 한 번씩 하면 몇 번일까요?', '번 칸이 연습 횟수예요.', '번 칸을 2에 맞춰요.'],
            levels: { challenge: { prompt: '역할 바꿔 4번 말하게 맞춰요.', target: { plan: { rounds: 4 } } } } },
          { prompt: '멈추는 말 연습을 점검해요.', toolOptions: { title: '멈추는 말 점검' }, target: { selfCheck: ['"멈춰!" 했어요', '"싫대" 말했어요', '이름을 불렀어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '단호한 목소리도 점검해요.', target: { selfCheck: ['"멈춰!" 했어요', '"싫대" 말했어요', '이름을 불렀어요', '단호하게 말했어요'] } } },
            conclude: '"멈춰!", "그 이름 싫대", "이름 불러 주자" — 놀림을 멈추는 세 마디예요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '놀림을 멈추는 말을 써요.', text: '"멈춰! 그 이름 ___"', answer: '싫대' }] },
    }),
    NICK({
      id: 'bully.e12.g2-nickname-line.wrap.name-pattern', type: 'wrap', title: '"싫대 → 멈춰 → 이름" 규칙 띠',
      method: '"싫대 → 멈춰 → 이름 부르기" 규칙 띠', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 띠를 처음부터 읽어 주고 빈칸 자리를 함께 짚으며 보기를 고른다.', base: '빈칸 두 곳에 차례로 올 조각을 보기에서 스스로 고르고 띠를 읽는다.', challenge: '빈칸을 고른 뒤 둘째 출구에서 규칙에 맞지 않는 조각("또 부르기")을 보기에서 찾는다.' },
      wrap: {
        teacher: '"싫대, 멈춰, 이름 부르기 — 세 조각이 되풀이돼요." 띠를 반 전체가 읽은 뒤 빈칸에 올 조각을 고른다. 둘째 출구에서 "또 부르기"를 찾지 못한 학생에게 "친구가 싫다고 했는데 또 부르면 어떻게 될까요?"라고 묻는다. 출구 3번에서 "친구도 웃었으니 장난"을 고른 학생에게 "억지 웃음도 싫다는 신호일 수 있어요. 모르면 물어봐요"라고 말해 준다.',
        exitTicket: [
          FILL(['싫대', '멈춰', '이름 부르기', '싫대', '멈춰', '이름 부르기', '싫대', '멈춰'], [5, 7], '빈칸 두 곳의 조각을 골라요.'),
          ODD(['싫대', '멈춰', '이름 부르기', '싫대', '멈춰', '이름 부르기'], 4, '또 부르기', '규칙에 맞지 않는 조각은?'),
          { type: 'choice', prompt: '친구도 웃었으면 장난일까요?', options: ['장난이에요', '물어봐요'], answer: 1, difficulty: 0.1, explain: '억지로 웃을 수도 있어요. 싫은지 물어보고 싫으면 멈춰요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '싫대, 멈춰, 이름 부르기',
        items: [
          { type: 'blank', prompt: '규칙 띠를 따라 써요.', text: '싫대 → 멈춰 → 이름 ___', answer: '부르기' },
          { type: 'draw', prompt: '친구 이름을 다정하게 부르는 모습을 그려요.' },
        ],
        easy: { note: '"싫대, 멈춰, 이름 부르기!"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '친구 이름표를 예쁘게 그려요.' }] },
      },
      notes: '규칙 판의 빈칸·조각 칸이 휴대폰에서 32px 라(44px 기준 미달) 빈칸 채우기·틀린 조각 찾기를 보기 고르기(rule)로 한다.',
    }),
    NICK({
      id: 'bully.e12.g2-nickname-line.wrap.kind-name-cards', type: 'wrap', title: '좋은 부름말 카드',
      method: '좋은 부름말 카드 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 두 장(이름 부르기·싫은 별명)을 읽어 주고 웃게 하는 카드를 함께 담는다.', base: '카드 네 장 가운데 친구를 웃게 하는 부름말을 스스로 담고 읽는다.', challenge: '담은 뒤 둘째 출구에서 "같은 말도 친구가 싫으면 안 된다"를 고른다.' },
      wrap: {
        teacher: '"친구를 부를 때 웃게 하는 부름말을 바구니에 담아 볼까요?" 카드를 읽어 주고 담을 때마다 짝 이름을 넣어 불러 본다("바다야", "멋진 바다"). "싫은 별명"을 담은 학생에게 "그 별명을 들은 친구 얼굴은?"이라고 묻는다. 둘째 출구에서는 좋아하던 별명도 친구가 싫다고 하면 그때부터 부르지 않는다는 점을 짚는다.',
        exitTicket: [
          PICKW('웃게 하는 부름말', ['이름 부르기', '좋은 점 말하기', '싫은 별명', '"멋지다" 부르기'], ['이름 부르기', '좋은 점 말하기', '"멋지다" 부르기'], '웃게 하는 부름말을 담아요.'),
          { type: 'choice', prompt: '좋던 별명을 싫다고 하면?', options: ['계속 불러요', '안 불러요'], answer: 1, difficulty: 0.1, explain: '같은 말도 친구가 싫다고 하면 그때부터 부르지 않아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '좋은 부름말',
        items: [
          { type: 'check', prompt: '내가 쓸 부름말에 ✓ 해요.', options: ['친구 이름', '"멋지다"', '좋은 점 말하기'] },
          { type: 'draw', prompt: '이름을 듣고 웃는 친구를 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 단체 사진·영상, 함께 정해요 (사이버폭력)
  const GROUP = MOD('bully.e12.g2-photo-together', [2]);
  const POSTNO = ['올려요', '안 올려요'];
  const T_GROUP = [
    GROUP({
      id: 'bully.e12.g2-photo-together.intro.group-photo-faces', type: 'intro', title: '단체 사진 속 눈 감은 친구',
      method: '단체 사진 속 한 친구 마음', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(부끄러움·신남)을 들고 눈 감고 찍힌 친구 마음을 함께 고른다.', base: '마음 카드 세 장 가운데 그 사진이 올라가면 어떤 마음일지 고르는 시연을 따라 말한다.', challenge: '잘 나온 다른 친구들 마음과 견주어 말한다.' },
      intro: {
        teacher: '"소풍 단체 사진이에요. 다들 잘 나왔는데 한 친구만 눈을 감고 찍혔어요. 이 사진이 반 친구 모두에게 올라가면 그 친구 마음은 어떨까요?" 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "단체 사진은 다 같이 찍었으니 마음대로 올려도 돼요"라는 말이 나오면 "사진 속 모두가 좋다고 했을까요? 한 명이라도 싫으면 어떻게 할까요?"라고 되묻는다. 오늘은 단체 사진·영상을 올리기 전에 함께 정하는 법을 배운다고 밝힌다.',
        student: '눈 감고 찍힌 친구는 사진이 올라가면 어떤 마음일지 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '눈 감은 친구 마음', cards: ['부끄러움', '신남', '속상함'], shuffle: false }, sequence: [{ pick: ['부끄러움', '속상함'] }] },
        art: { draw: 'a paper group photo of smiling children on a picnic, one child in the middle with closed eyes looking embarrassed, a paper tablet showing the photo being shared', banner: '모두 괜찮을까?' },
      },
    }),
    GROUP({
      id: 'bully.e12.g2-photo-together.intro.vote-chart-intro', type: 'intro', title: '"올릴까요?" 손들기 그래프',
      method: '"올릴까요?" 손들기 그림그래프 읽기', tool: 'chart', minutes: 6,
      levels: { easy: '교사가 친구 3명(좋아요 2·싫어요 1) 그래프를 손가락으로 세며 올려도 되는지 함께 고른다.', base: '친구 5명(좋아요 4·싫어요 1) 그래프를 읽고 올려도 되는지 고르는 시연을 따라 말한다.', challenge: '"싫어요"를 고른 친구에게 할 말("알았어, 안 올릴게")을 말한다.' },
      intro: {
        teacher: '"단체 사진을 올려도 되는지 사진 속 친구 다섯 명에게 물었어요(가상). 좋아요 4명, 싫어요 1명이에요. 올려도 될까요?" 그래프를 함께 세고 시연 단추로 보기가 골라지는 모습을 보인다. "좋아요가 더 많으니까 올려요"라는 말이 나오면 "사진 속 한 친구가 싫다면, 그 친구 마음은 누가 지켜 줄까요? 사진은 많은 쪽이 아니라 모두 좋아야 올려요"라고 되묻듯 답한다.',
        student: '그래프에서 좋아요와 싫어요를 세어 보고 올려도 될지 말해 보아요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '사진을 올려도 될까요?(가상)', unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], data: [['좋아요', 4], ['싫어요', 1]], question: '사진을 올려도 될까요?', choices: ['올려도 돼요', '안 올려요'] }, sequence: [{ pick: 1 }] },
        art: { draw: 'paper children raising hands for a vote about posting a photo, four hands up for yes and one child shaking head, a paper tablet with the photo waiting', banner: '한 명이라도 싫으면?' },
      },
      notes: '그래프는 수업용으로 지은 가상의 손들기다. 단체 사진은 많은 쪽이 아니라 사진 속 모두가 좋다고 할 때만 올린다.',
    }),
    GROUP({
      id: 'bully.e12.g2-photo-together.activity.ask-everyone-steps', type: 'activity', title: '올리기 전 "모두에게 묻기"',
      method: '올리기 전 "모두에게 묻기" 차례', tool: 'timer', minutes: 13,
      levels: { easy: '순서 카드 3장(보여 주기·모두에게 묻기·올리기)의 차례를 맞춘다.', base: '순서 카드 4장(보여 주기·모두에게 묻기·어른과 정하기·올리기)의 차례를 맞추고 동작으로 해 본다.', challenge: '네 단계를 맞춘 뒤, 셋째 문항에서 한 명이 싫다고 하면 어디서 멈추는지 짝에게 말한 것까지 표시한다.' },
      activity: {
        title: '모두에게 묻기 차례', tool: 'timer',
        teacher: '"단체 사진을 올리고 싶어요. 첫째 사진을 보여 주고, 둘째 사진 속 모두에게 \'올려도 돼?\', 셋째 어른과 정하고, 넷째 올려요." 동작(사진 들어 보이기·한 명씩 묻는 손·어른 쪽 보기·올리기 손짓)과 함께 보인 뒤 카드를 맞춘다. 묻기를 건너뛰고 바로 올리기로 놓는 학생에게 "사진 속 한 친구가 싫어하면 언제 알 수 있을까요?"라고 묻는다. 한 명이라도 싫다고 하면 "모두에게 묻기"에서 멈추고 올리지 않는다는 점을 짚는다.',
        task: '단체 사진을 올리기 전 차례를 맞추고 해 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '올리기 전 네 단계를 놓아요.', toolOptions: { title: '단체 사진 올리기 전', cards: ['올리기', '모두에게 묻기', '어른과 정하기', '사진 보여 주기'] }, target: { order: ['사진 보여 주기', '모두에게 묻기', '어른과 정하기', '올리기'] }, difficulty: 0.1,
            hints: ['사진 속 친구들이 먼저 사진을 봐야 해요.', '올리기는 맨 끝이에요.', '보여 주기 → 묻기 → 어른과 정하기 → 올리기예요.'],
            levels: { easy: { prompt: '올리기 전 세 단계를 놓아요.', toolOptions: { cards: ['올리기', '사진 보여 주기', '모두에게 묻기'] }, target: { order: ['사진 보여 주기', '모두에게 묻기', '올리기'] } } } },
          { prompt: '올리기 전 확인을 모두 해요.', toolOptions: { title: '올리기 전 확인', safety: ['모두에게 물었어요', '모두 "좋아" 했어요', '어른과 정했어요'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '차례 연습을 점검해요.', toolOptions: { title: '묻기 연습 점검' }, target: { selfCheck: ['사진을 보여 줬어요', '한 명씩 물었어요', '어른 쪽을 봤어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '멈추는 곳도 말했나요?', target: { selfCheck: ['사진을 보여 줬어요', '한 명씩 물었어요', '어른 쪽을 봤어요', '멈출 곳을 말했어요'] } } },
            conclude: '단체 사진은 모두에게 묻고, 어른과 정하고, 한 명이라도 싫으면 올리지 않아요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '한 명이 "싫어" 하면?', options: ['안 올려요', '그냥 올려요'], answer: '안 올려요' }] },
      notes: '계획대로 기본 단계는 네 장 차례다(초1-2 차례는 셋 안팎이 알맞아 쉬움은 세 장).',
    }),
    GROUP({
      id: 'bully.e12.g2-photo-together.activity.funny-photo-story', type: 'activity', title: '웃긴 사진이 퍼지면?',
      method: '웃긴 사진이 퍼지면? 이야기 잇기', tool: 'story', minutes: 13,
      levels: { easy: '처음에 다르게 할 장면 2장 가운데 하나를 고른다.', base: '처음에 다르게 할 장면 3장 가운데 하나를 고른다.', challenge: '처음 장면과 함께 이미 퍼진 뒤 할 수 있는 일(어른께 말하기)까지 두 칸에 나누어 고른다.' },
      activity: {
        title: '퍼진 사진 이야기', tool: 'story',
        teacher: '"바다가 넘어지는 사진을 한 친구에게만 보냈어요. 그런데 그 친구가 또 보내고, 또 보내서 반 친구들이 다 봤어요." 퍼지는 장면을 손가락으로 하나, 둘, 셋 늘려 보인다. "한 명에게만 보냈으니 내 잘못이 아니에요"라는 학생에게 "처음 한 번이 없었다면 퍼졌을까요? 처음에 어떻게 했으면 좋았을까요?"라고 묻는다. 이미 퍼졌다면 더 보내지 말고 어른께 말하는 것이 바로잡기라는 점을 짚는다.',
        task: '사진이 퍼진 이야기에서 처음에 다르게 할 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          NEXT('넘어진 사진 이야기예요.', C('help', '일으켜 줘요', { motif: 'tree' }), [C('snap', '찍어서 보내요', { motif: 'tree' }), C('laugh', '크게 웃어요', { motif: 'tree' })], { basket: '처음에 다르게', label: '퍼진 뒤 할 일', cards: [C('tell', '어른께 말해요'), C('more', '더 보내요')] }, 0.1),
          NEXT('우는 모습 영상 이야기예요.', C('ok', '"괜찮아?" 해요', { motif: 'cloud' }), [C('film', '영상 찍어요', { motif: 'cloud' }), C('share', '친구에게 보여요', { motif: 'cloud' })], { basket: '처음에 다르게', label: '퍼진 뒤 할 일', cards: [C('stop', '"그만 보내" 해요'), C('like', '하트 눌러요')] }, 0.15),
          NEXT('급식 흘린 사진 이야기예요.', C('wipe', '같이 닦아요', { motif: 'sun' }), [C('photo', '사진 찍어요', { motif: 'sun' }), C('post', '단체방에 올려요', { motif: 'sun' })], { basket: '처음에 다르게', label: '퍼진 뒤 할 일', cards: [C('adult', '선생님께 알려요'), C('ha', 'ㅋㅋ 달아요')] }, 0.2),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '웃긴 사진이 퍼졌다면?', options: ['어른께 말해요', '더 보내요'], answer: '어른께 말해요' }] },
      notes: '이미 퍼진 사진을 지우는 일은 학생 혼자가 아니라 어른과 함께 한다고 말해 준다.',
    }),
    GROUP({
      id: 'bully.e12.g2-photo-together.activity.share-dilemma', type: 'activity', title: '갈림길: 사진을 보내 달래요',
      method: '갈림길: 친구가 사진을 보내 달라고 할 때', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 3개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 고른 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '사진 보내기 갈림길', tool: 'dilemma',
        teacher: '"친구가 \'나리 웃긴 사진 나한테도 보내 줘\' 해요. 나는 어떻게 할까요?" 고르기 전에 "고른 다음 나리 마음은 어떻게 될까요?"라고 묻는다. "친구가 부탁했으니 보내요"를 고른 학생에게 "그 사진은 누구 얼굴이에요? 보낼지 정하는 건 누구 마음일까요?"라고 묻는다. 찍힌 친구에게 먼저 묻는 것도, 안 보내는 것도 모두 나리 마음을 지키는 길이라는 점을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('웃긴 사진 보내 달래요.', { text: '친구가 "나리 웃긴 사진 나도 보내 줘" 해요.', motif: 'house', choices: [
            { id: 'send', text: '보내요', result: '사진이 또 퍼져요.', why: '찍힌 친구 마음을 먼저 생각해요.' },
            { id: 'no', text: '안 보내요', result: '친구가 "치사해" 해요.', ending: '사진이 더 퍼지지 않았어요.' },
            { id: 'ask', text: '나리에게 먼저 물어요', result: '나리가 "싫어" 해요.', easyEnding: '나리가 "물어봐 줘서 고마워" 했어요.', next: { text: '친구가 "그래도 보내 줘" 해요.', choices: [
              { id: 'keep', text: '"나리가 싫대" 해요', result: '친구가 알겠다고 해요.', ending: '나리 마음을 지켜 줬어요.' },
              { id: 'give', text: '몰래 보내요', result: '나리가 알고 울어요.', why: '싫다고 한 사진은 보내지 않아요.' }] } }] },
          [['no'], ['ask', 'keep']], [{ id: 'face', text: '나리 얼굴이니까요' }, { id: 'friend', text: '친구가 부탁해서요', why: '부탁해도 찍힌 친구가 싫으면 안 돼요.' }, { id: 'funny', text: '웃긴 사진이라서요', why: '웃긴 사진도 찍힌 친구 마음이 먼저예요.' }], 'face', 0.15),
          DILEMMA('단체방에 올리재요.', { text: '친구가 "소풍 사진 단체방에 올리자" 해요.', motif: 'house', choices: [
            { id: 'post', text: '바로 올려요', result: '눈 감은 친구가 속상해요.', why: '올리기 전에 모두에게 물어요.' },
            { id: 'ask', text: '모두에게 물어요', result: '한 명이 "싫어" 해요.', easyEnding: '모두에게 물어서 마음을 알았어요.', next: { text: '친구가 "한 명뿐인데 올리자" 해요.', choices: [
              { id: 'wait', text: '"한 명도 싫으면 안 돼"', result: '다른 사진을 함께 골라요.', ending: '모두 좋아하는 사진만 올렸어요.' },
              { id: 'post2', text: '그냥 올려요', result: '한 친구 마음이 아파요.', why: '한 명이라도 싫으면 올리지 않아요.' }] } }] },
          ['ask', 'wait'], [{ id: 'all', text: '모두 좋아야 해서요' }, { id: 'many', text: '많은 쪽이 이겨서요', why: '사진은 많은 쪽이 아니라 모두가 좋아야 해요.' }, { id: 'fast', text: '빨리 올리려고요', why: '빨리보다 친구 마음이 먼저예요.' }], 'all', 0.2),
          DILEMMA('친구가 영상을 보내왔어요.', { text: '친구가 바다가 넘어지는 영상을 보내며 "웃기지?" 해요.', motif: 'house', choices: [
            { id: 'pass', text: '다른 친구에게도 보내요', result: '영상이 더 퍼져요.', why: '받은 영상도 더 보내지 않아요.' },
            { id: 'stop', text: '"보내지 마" 답해요', result: '친구가 "왜?" 해요.', easyEnding: '친구도 더 보내지 않기로 했어요.', next: { text: '영상이 벌써 여럿에게 갔대요.', choices: [
              { id: 'adult', text: '어른께 보여 드려요', result: '어른이 함께 도와주셨어요.', ending: '영상이 더 퍼지지 않게 도움을 받았어요.' },
              { id: 'hide', text: '모른 척해요', result: '영상이 계속 퍼져요.', why: '이미 퍼졌으면 어른께 말해요.' }] } }] },
          ['stop', 'adult'], [{ id: 'hurt', text: '바다가 아파서요' }, { id: 'mine', text: '내가 찍은 게 아니라서요', why: '누가 찍었든 퍼뜨리면 친구가 아파요.' }, { id: 'laugh', text: '다들 웃어서요', why: '다들 웃어도 찍힌 친구는 아파요.' }], 'hurt', 0.25, { conclude: '친구 사진·영상은 찍힌 친구에게 묻고, 싫다면 보내지 않고, 퍼졌으면 어른께 말해요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구 사진을 보내 달라면?', options: ['찍힌 친구에게 물어요', '바로 보내요'], answer: '찍힌 친구에게 물어요' }] },
    }),
    GROUP({
      id: 'bully.e12.g2-photo-together.activity.photo-rule-poster', type: 'activity', title: '"사진 약속" 포스터',
      method: '"사진 약속" 포스터 꾸미기', tool: 'collage', minutes: 13,
      levels: { easy: '조각을 3개 이상 붙인다(고르개 모양 셋).', base: '카메라(긴 네모)·물어봐요(동그라미)·손든 친구(세모) 조각을 5개 이상 붙여 포스터를 꾸민다.', challenge: '포스터를 꾸민 뒤 셋째 문항에서 약속 문장을 말로 정해 선생님이 적어 준 것까지 표시한다.' },
      activity: {
        title: '사진 약속 포스터', tool: 'collage',
        teacher: '"긴 네모는 카메라, 동그라미는 \'물어봐요\', 세모는 손든 친구예요. 우리 반 사진 약속 포스터를 꾸며 볼까요?" 조각을 붙이며 "이 포스터를 보면 친구들이 무엇을 기억할까요?"라고 묻는다. 카메라 조각만 잔뜩 붙이는 학생에게 "사진 약속에서 가장 중요한 건 무엇이었지요? 물어보기 조각은 어디 있나요?"라고 묻는다. 셋째 문항에서는 약속 문장을 함께 정하고(예: "모두 좋다고 할 때만 올려요") 교사가 포스터에 적어 준다.',
        task: '사진 약속 포스터를 조각으로 꾸며요.', levels: { easy: { shapes: ['rect', 'circle', 'triangle'] }, base: { shapes: ['rect', 'circle', 'triangle', 'star', 'square'] }, challenge: {} },
        items: [
          { prompt: '카메라와 물어봐요 조각이요.', toolOptions: {}, target: { has: [{ shape: 'rect', min: 1 }, { shape: 'circle', min: 2 }], pieces: { min: 5 } }, difficulty: 0.1,
            levels: { easy: { prompt: '카메라와 물어봐요 3조각이요.', target: { has: [{ shape: 'rect', min: 1 }, { shape: 'circle', min: 1 }], pieces: { min: 3 } } }, challenge: { prompt: '카메라 하나, 물어봐요 4개요.', target: { has: [{ shape: 'rect', n: 1 }, { shape: 'circle', min: 4 }], pieces: { min: 5 } } } } },
          { prompt: '손든 친구 세모를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'triangle', min: 5 }] }, difficulty: 0.15,
            levels: { easy: { prompt: '손든 친구 세모 3개를 붙여요.', target: { has: [{ shape: 'triangle', min: 3 }] } }, challenge: { prompt: '세모 5개와 별 하나요.', target: { has: [{ shape: 'triangle', min: 5 }, { shape: 'star', min: 1 }] } } } },
          { prompt: '포스터를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['포스터를 꾸몄어요', '사진 약속을 말했어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개 포스터, 표시해요.', target: { selfCheck: ['포스터를 꾸몄어요', '사진 약속을 말했어요'], minPieces: 3 } }, challenge: { prompt: '약속 문장까지 정했나요?', target: { selfCheck: ['포스터를 꾸몄어요', '사진 약속을 말했어요', '약속 문장을 정했어요'], minPieces: 5 } } },
            conclude: '모두에게 묻고, 한 명이라도 싫으면 안 올리는 것이 우리 반 사진 약속이에요.' },
        ],
      },
      worksheet: { items: [{ type: 'short', prompt: '우리 반 사진 약속을 한 문장으로 써요.', answer: '(예) 모두 좋다고 할 때만 올려요' }] },
    }),
    GROUP({
      id: 'bully.e12.g2-photo-together.wrap.photo-sort-wrap', type: 'wrap', title: '올려요·안 올려요 마지막 점검',
      method: '올려요/안 올려요 마지막 점검', tool: 'sortboard', minutes: 6,
      levels: { easy: '교사가 카드 세 장을 하나씩 읽어 주고 반 전체가 손으로 ○·×를 낸 뒤 함께 넣는다.', base: '카드 다섯 장을 올려요·안 올려요 바구니에 스스로 나눈다.', challenge: '"뒷모습만 나옴"처럼 얼굴이 안 보여도 물어봐야 하는 헷갈리는 카드를 바르게 넣고 까닭을 말한다.' },
      wrap: {
        teacher: '"오늘 배운 사진 약속으로 마지막 점검을 해요. 이 사진은 올려도 될까요?" 카드를 읽어 주고 넣기 전에 반 전체가 팔로 ○·×를 만든다. "뒷모습만 나옴"을 올려요에 넣은 학생에게 "얼굴이 안 보여도 그 친구는 자기인 걸 알아요. 물어봤을까요?"라고 묻는다. 끝으로 "모두에게 묻고, 한 명이라도 싫으면 안 올려요!"를 다 같이 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { slots: POSTNO, cards: ['모두 "좋아" 함', '한 명 "싫어"', '몰래 찍음', '어른과 정함', '뒷모습만 나옴'] }, prompt: '사진 카드를 바구니에 나누어요.', target: { sort: { 올려요: ['모두 "좋아" 함', '어른과 정함'], '안 올려요': ['한 명 "싫어"', '몰래 찍음', '뒷모습만 나옴'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '나만 보면 괜찮을까요?', options: ['괜찮아요', '물어보고 봐요'], answer: 1, difficulty: 0.1, explain: '나만 보는 사진도 찍힌 친구가 싫어하면 지워 달라고 할 수 있어요. 먼저 물어봐요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '사진 마지막 점검',
        items: [
          { type: 'table', prompt: '올려도 되면 ○, 안 되면 ×', columns: ['사진', '○ / ×'], cells: [['모두 "좋아" 함', ''], ['한 명 "싫어"', ''], ['몰래 찍음', '']], answer: '○, ×, ×' },
          { type: 'draw', prompt: '모두 웃으며 찍은 단체 사진을 그려요.' },
        ],
      },
      notes: '"뒷모습만 나옴"은 물어보지 않았다는 뜻으로 안 올려요에 넣는다. 물어보고 모두 좋다면 올려도 된다고 덧붙여 준다.',
    }),
    GROUP({
      id: 'bully.e12.g2-photo-together.wrap.photo-words', type: 'wrap', title: '단체 사진 약속 말',
      method: '사진 약속 말 카드 읽기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 두 장("올려도 돼?"·"싫으면 안 올려")을 읽어 주고 함께 담는다.', base: '카드 네 장 가운데 사진 약속 말 세 장을 스스로 담고 따라 읽는다.', challenge: '담은 세 장을 묻기 → 정하기 차례대로 말하며 읽는다.' },
      wrap: {
        teacher: '"단체 사진을 올리기 전에 하는 말을 바구니에 담아 볼까요?" 카드를 하나씩 읽어 주고 담을 때마다 반 전체가 따라 읽는다. "몰래 올리자"를 담은 학생에게 "몰래 올린 걸 사진 속 친구가 알면 어떤 마음일까요?"라고 묻는다. 출구 2번에서 "많은 쪽이 이겨요"를 고른 학생에게 "사진은 투표가 아니에요. 한 명이라도 싫으면 안 올려요"라고 말해 준다.',
        exitTicket: [
          PICKW('사진 약속 말', ['"올려도 돼?"', '"몰래 올리자"', '"싫으면 안 올려"', '"어른과 정해요"'], ['"올려도 돼?"', '"싫으면 안 올려"', '"어른과 정해요"'], '단체 사진 약속 말을 담아요.'),
          { type: 'choice', prompt: '4명 좋아, 1명 싫어면?', options: ['많은 쪽이 이겨요', '안 올려요'], answer: 1, difficulty: 0.1, explain: '사진 속 한 명이라도 싫으면 올리지 않아요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '단체 사진 약속',
        items: [
          { type: 'blank', prompt: '사진 약속을 따라 써요.', text: '한 명이라도 싫으면 안 ___', answer: '올려요' },
          { type: 'check', prompt: '올리기 전에 할 일에 ✓ 해요.', options: ['모두에게 묻기', '어른과 정하기', '싫다면 안 올리기'] },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 게임 속 놀림을 만났을 때 (사이버폭력)
  const GAME = MOD('bully.e12.g2-game-teasing', [2]);
  const DODONT = ['해요', '안 해요'];
  const T_GAME = [
    GAME({
      id: 'bully.e12.g2-game-teasing.intro.game-chat-faces', type: 'intro', title: '게임 채팅 받은 친구 얼굴',
      method: '게임 채팅 받은 친구 얼굴 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 마음 카드 두 장(속상함·신남)을 들고 받은 친구 마음을 함께 고른다.', base: '마음 카드 세 장 가운데 받은 친구 마음을 고르는 시연을 따라 말한다.', challenge: '보낸 친구의 마음(져서 화남)도 짐작해 말하고, 화가 나도 놀리지 않는 법을 떠올린다.' },
      intro: {
        teacher: '"게임 화면에 \'너 때문에 졌잖아 바보\'라는 글자가 떴어요. 이 글을 받은 친구 마음은 어떨까요?" 시연 단추로 마음 카드가 바구니에 담기는 모습을 보인다. "게임에서는 다들 그렇게 말해요"라는 말이 나오면 "게임 속 캐릭터 뒤에도 진짜 친구가 있어요. 그 친구 마음도 진짜일까요?"라고 되묻는다. 보낸 친구도 져서 속상했을 수 있지만, 속상하다고 놀려도 되는 것은 아니라는 점을 짚고 오늘 배울 것을 연다.',
        student: '게임 채팅을 받은 친구는 어떤 마음일지 짝에게 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '받은 친구 마음', cards: ['속상함', '신남', '화남'], shuffle: false }, sequence: [{ pick: ['속상함', '화남'] }] },
        art: { draw: 'a paper tablet showing a simple game screen with a chat bubble of angry scribbles, a paper child holding it with a sad face and a tear', banner: '게임 속에도 친구 마음' },
      },
      notes: '특정 게임 이름은 쓰지 않는다. 학생이 하는 게임이나 받은 채팅을 묻지 않는다.',
    }),
    GAME({
      id: 'bully.e12.g2-game-teasing.intro.game-stop-signal', type: 'intro', title: '"게임 멈춤!" 신호 놀이',
      method: '"게임 멈춤" 신호 놀이', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 나쁜 말 그림 카드를 세 번 들어 올리면 손을 떼고 "멈춤!" 한다.', base: '다섯 번 신호에 맞춰 손 떼기·"멈춤!"·보여 주기 차례 카드를 따라 하고 스스로 점검한다.', challenge: '다섯 번 하며 멈춘 뒤 "보여 주기" 동작(어른께 화면 내밀기)까지 이어 한다.' },
      intro: {
        teacher: '"게임하는 흉내를 내다가 선생님이 나쁜 말 그림을 들면? 손 떼고! \'멈춤!\' 그리고 어른께 보여 줘요!" 시연 단추로 차례 카드가 놓이는 모습을 보이고 반 전체가 신호 놀이를 한다. "한 판만 끝내고 멈춰요"라는 학생에게 "그 한 판 동안 나쁜 말이 더 올 수 있어요. 신호를 보면 바로 손부터 떼요"라고 말해 준다.',
        student: '나쁜 말 그림이 보이면 손을 떼고 "멈춤!" 한 뒤 보여 주는 흉내를 내요.',
        demo: { tool: 'timer', options: { title: '게임 멈춤 차례', cards: ['어른께 보여 주기', '손 떼기', '"멈춤!"'] }, sequence: [{ order: ['손 떼기', '"멈춤!"', '어른께 보여 주기'] }] },
        art: { draw: 'paper children pretending to hold game controllers, one lifting hands off as a teacher holds up a card with angry scribbles, then turning to show a paper tablet to an adult', banner: '멈춤! 보여 주기!' },
      },
    }),
    GAME({
      id: 'bully.e12.g2-game-teasing.activity.reply-sort', type: 'activity', title: '게임에서 해요·안 해요',
      method: '해요/안 해요 행동 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '행동 카드 4장, 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '행동 카드 6장을 다 넣은 뒤 확인한다.', challenge: '"어른과 차단하기"처럼 어른과 함께 할 행동 카드 2장이 더 들어온다(해요 바구니).' },
      activity: {
        title: '게임 행동 바구니', tool: 'sortboard',
        teacher: '"게임에서 놀리는 말을 봤을 때, 이 행동은 해도 될까요?" 카드를 읽어 주고 넣기 전에 "그다음엔 어떻게 될까요?"라고 묻는다. "똑같이 갚아 줘야 안 놀려요"라는 학생에게 "똑같이 욕하면 나쁜 말이 몇 개가 될까요? 멈추고 보여 주면 어른이 도와줄 수 있어요"라고 묻는다. 차단하기처럼 화면을 바꾸는 일은 어른과 함께 한다는 점을 짚는다.',
        task: '게임에서 할 행동과 안 할 행동을 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(DODONT, '놀리는 채팅을 볼 때요.', ['게임 끄기', '어른께 보여 주기', '답 안 하기'], ['똑같이 욕하기', '친구에게 퍼뜨리기', '더 세게 놀리기'], ['어른과 차단하기', '채팅 끄기'], 0, 0.1),
          SB2(DODONT, '게임에서 졌을 때요.', ['"잘했어!"', '"다시 해 보자"', '"괜찮아"'], ['"너 때문이야"', '"바보"', '팀에서 빼기'], ['"같이 연습할래?"', '쉬었다 하기'], 0, 0.15),
          SB2(DODONT, '같은 팀이 놀릴 때요.', ['"그만해" 쓰기', '게임 멈추기', '보호자 부르기'], ['욕으로 갚기', '친구 흉 보기', '꾹 참고 계속'], ['나와서 쉬기', '선생님께 말하기'], 0, 0.2, { conclude: '게임 속 놀림에는 똑같이 답하지 않고, 멈추고, 어른께 보여 줘요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '해요 ○, 안 해요 × 써요.', columns: ['행동', '○ / ×'], cells: [['게임 끄기', ''], ['똑같이 욕하기', ''], ['어른께 보여 주기', ''], ['더 세게 놀리기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '놀리는 채팅엔?', options: ['어른께 보여요', '똑같이 욕해요'], answer: '어른께 보여요' }] },
    }),
    GAME({
      id: 'bully.e12.g2-game-teasing.activity.game-dilemma', type: 'activity', title: '갈림길: 게임에서 놀림 받을 때',
      method: '갈림길: 게임에서 놀림을 받을 때', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 3개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 고른 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '게임 놀림 갈림길', tool: 'dilemma',
        teacher: '"같은 팀 친구가 게임 채팅으로 계속 나리를 놀려요. 나리는 어떻게 할까요?" 고르기 전에 "고른 다음 어떻게 될까요?"라고 묻는다. "참고 계속해요"를 고른 학생에게 "참으면 놀림이 멈출까요? 나리 마음은요?"라고 묻는다. "똑같이 놀려요"를 고른 학생에게는 "그러면 둘 다 아파지고 어른이 누구를 도와야 할지 헷갈려요"라고 말해 준다. 놀린 친구도 멈추고 사과하면 다시 같이 놀 수 있다고 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('팀 친구가 계속 놀려요.', { text: '같은 팀 친구가 채팅으로 "못하네 바보"를 계속 보내요.', motif: 'house', choices: [
            { id: 'same', text: '똑같이 놀려요', result: '나쁜 말이 더 많아져요.', why: '똑같이 답하면 놀림이 커져요.' },
            { id: 'stop', text: '멈추고 보여 줘요', result: '게임을 멈추고 아빠께 가요.', easyEnding: '아빠가 "보여 줘서 고마워" 하셨어요.', next: { text: '아빠가 "어떻게 할까?" 물으세요.', choices: [
              { id: 'block', text: '아빠와 함께 차단해요', result: '놀리는 채팅이 더 오지 않아요.', ending: '어른과 함께 해서 마음이 편해졌어요.' },
              { id: 'back', text: '혼자 다시 들어가요', result: '또 놀림을 봐요.', why: '어른과 함께 정하고 해요.' }] } },
            { id: 'endure', text: '참고 계속해요', result: '놀림이 계속돼요.', why: '참지 말고 멈추고 보여 줘요.' }] },
          ['stop', 'block'], [{ id: 'help', text: '어른이 도와줄 수 있어서요' }, { id: 'pay', text: '똑같이 갚아야 해서요', why: '갚으면 놀림이 더 커져요.' }, { id: 'game', text: '게임이라 괜찮아서요', why: '게임 속 말도 마음을 아프게 해요.' }], 'help', 0.15),
          DILEMMA('친구가 같이 놀리재요.', { text: '친구가 "쟤 진짜 못해. 같이 놀리자" 채팅을 보내요.', motif: 'house', choices: [
            { id: 'join', text: '같이 놀려요', result: '그 친구가 게임을 나가 버려요.', why: '같이 놀리면 놀림이 커져요.' },
            { id: 'no', text: '"안 할래" 보내요', result: '친구가 "왜?" 해요.', easyEnding: '친구도 놀리기를 멈췄어요.', next: { text: '친구가 계속 놀려요.', choices: [
              { id: 'tell', text: '게임 멈추고 어른께 말해요', result: '어른이 함께 도와주셨어요.', ending: '놀림이 멈추고 다시 즐겁게 놀았어요.' },
              { id: 'watch', text: '구경만 해요', result: '놀림이 계속돼요.', why: '안 멈추면 어른께 알려요.' }] } }] },
          ['no', 'tell'], [{ id: 'hurt', text: '친구 마음이 아파서요' }, { id: 'weak', text: '그 친구가 못해서요', why: '못해도 놀림 받아도 되는 사람은 없어요.' }, { id: 'all', text: '다들 하니까요', why: '다들 해도 놀림은 놀림이에요.' }], 'hurt', 0.2),
          DILEMMA('내가 져서 화가 나요.', { text: '내가 져서 화가 나요. 이긴 친구에게 무슨 말을 쓸까요?', motif: 'house', choices: [
            { id: 'bad', text: '"반칙쟁이" 써요', result: '친구가 속상해서 나가요.', why: '화가 나도 놀리는 말은 쓰지 않아요.' },
            { id: 'breath', text: '숨 고르고 "잘했어"', result: '친구가 "고마워, 또 하자" 해요.', easyEnding: '둘 다 웃으며 다음 판을 했어요.', next: { text: '아직도 마음이 속상해요.', choices: [
              { id: 'rest', text: '게임을 쉬어요', result: '마음이 가라앉아요.', ending: '쉬고 나니 다시 즐겁게 할 수 있었어요.' },
              { id: 'again', text: '화난 채 계속해요', result: '또 나쁜 말이 나오려 해요.', why: '화가 나면 잠깐 쉬어요.' }] } }] },
          ['breath', 'rest'], [{ id: 'kind', text: '나도 놀리지 않아서요' }, { id: 'win', text: '다음엔 이기려고요', why: '이기기보다 고운 말이 먼저예요.' }, { id: 'scold', text: '혼날까 봐서요', why: '혼나서가 아니라 친구 마음 때문이에요.' }], 'kind', 0.25, { conclude: '게임 속 놀림엔 멈추고 보여 주고, 나도 화가 나면 쉬고 놀리지 않아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '게임에서 놀림을 받으면?', options: ['멈추고 보여 줘요', '똑같이 놀려요'], answer: '멈추고 보여 줘요' }] },
    }),
    GAME({
      id: 'bully.e12.g2-game-teasing.activity.game-time-clock', type: 'activity', title: '게임 쉬는 시각 정하기',
      method: '게임 쉬는 시각 정하기', tool: 'clock', minutes: 13,
      levels: { easy: '정각만 맞추고(긴바늘 12 고정), 짧은바늘 자리가 연하게 칠해져 있다.', base: '30분 단위로 시작 시각과 멈추는 시각을 각각 맞추고, 시계를 읽어 쉬는 시각을 고른다.', challenge: '작은 눈금이 없는 시계에서 30분 단위로 맞추고, 시작부터 멈춤까지 몇 분인지 고른다.' },
      activity: {
        title: '가족 약속 시각 맞추기', tool: 'clock',
        teacher: '"나리네 가족은 게임을 4시에 시작해서 4시 30분에 멈추고 쉬기로 약속했어요(가상 약속)." 바늘을 맞춘 뒤 "그 시각이 되면 무엇을 할까요?"라고 묻고 기다릴 반응("멈춰요", "물 마셔요")을 듣는다. 4시 30분에 짧은바늘을 4에 똑바로 놓는 학생에게 "30분이면 짧은바늘은 4와 5 사이 가운데쯤 가요"라고 말해 준다. 화가 나거나 놀림을 봤을 때도 약속 시각 전이라도 멈추고 쉴 수 있다는 점을 짚는다.',
        task: '나리네 가족이 정한 게임 시각을 시계 바늘로 나타내요.', levels: { easy: { hourOnly: true, hourZone: true }, base: { minuteStep: 30 }, challenge: { minuteStep: 30, showMinuteMarks: false } },
        items: [
          { prompt: '4시에 시작해요. 맞춰요.', toolOptions: {}, target: { h: 4, m: 0 }, difficulty: 0.1 },
          { prompt: '4시 30분에 멈춰요. 맞춰요.', toolOptions: {}, target: { h: 4, m: 30 }, difficulty: 0.15,
            levels: { easy: { prompt: '5시에 멈춰요. 맞춰요.', target: { h: 5, m: 0 } } } },
          { prompt: '시계를 보고 쉬는 시각을 골라요.', toolOptions: { readOnly: true, start: { h: 4, m: 30 }, ask: '나리가 쉬는 시각은?', choices: ['4시', '4시 30분', '5시 30분'] }, target: { pick: 1 }, difficulty: 0.15,
            levels: { easy: { toolOptions: { start: { h: 5, m: 0 }, choices: ['4시', '5시', '6시'] }, target: { pick: 1 } },
              challenge: { prompt: '4시부터 4시 30분은 몇 분?', toolOptions: { ask: '4시에 시작했어요. 몇 분 했나요?', choices: ['30분', '4분', '1시간'] }, target: { pick: 0 } } },
            conclude: '가족과 정한 시각이 되면 멈추고 쉬어요. 속상한 일이 있으면 그 전에라도 멈춰요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '약속 시각이 되면 게임을 ___', answer: '멈춰요' }] },
      notes: '4시·4시 30분은 나리네 가상 가족 약속(연습용 값)이다. 몇 분이 알맞은지 기준으로 말하지 않고, 학생의 게임 시간을 묻지 않는다.',
    }),
    GAME({
      id: 'bully.e12.g2-game-teasing.activity.fair-play-poster', type: 'activity', title: '"멋진 게임 친구" 배지',
      method: '"멋진 게임 친구" 배지 만들기', tool: 'collage', minutes: 13,
      levels: { easy: '조각을 3개 이상 붙인다(고르개 모양 셋).', base: '별·방패(마름모)·하트 조각을 5개 이상 붙여 배지를 꾸민다.', challenge: '배지를 꾸민 뒤 셋째 문항에서 배지에 넣을 고운 말 하나를 정해 말한 것까지 표시한다.' },
      activity: {
        title: '게임 친구 배지', tool: 'collage',
        teacher: '"별은 \'잘했어\', 마름모 방패는 \'놀림 막기\', 하트는 \'괜찮아\'예요. 고운 말로 게임하는 \'멋진 게임 친구\' 배지를 만들어 볼까요?" 조각을 붙이며 "이 배지를 단 친구는 졌을 때 무엇이라고 말할까요?"라고 묻는다. 이긴 사람만 멋지다고 하는 학생에게 "진 친구에게 \'괜찮아, 다시 하자\' 하는 친구도 멋진 게임 친구예요"라고 말해 준다.',
        task: '고운 말로 게임하는 배지를 조각으로 꾸며요.', levels: { easy: { shapes: ['star', 'diamond', 'heart'] }, base: { shapes: ['star', 'diamond', 'heart', 'circle', 'triangle'] }, challenge: { shapes: ['star', 'diamond', 'heart', 'circle', 'triangle', 'square', 'leaf'] } },
        items: [
          { prompt: '"잘했어" 별을 붙여요.', toolOptions: {}, target: { has: [{ shape: 'star', min: 5 }] }, difficulty: 0.1,
            levels: { easy: { prompt: '"잘했어" 별 3개를 붙여요.', target: { has: [{ shape: 'star', min: 3 }] } }, challenge: { prompt: '별 5개와 하트 2개를 붙여요.', target: { has: [{ shape: 'star', min: 5 }, { shape: 'heart', min: 2 }] } } } },
          { prompt: '놀림 막기 방패를 붙여요.', toolOptions: {}, target: { has: [{ shape: 'diamond', min: 1 }], pieces: { min: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '방패와 조각 3개를 붙여요.', target: { has: [{ shape: 'diamond', min: 1 }], pieces: { min: 3 } } }, challenge: { prompt: '큰 방패 하나, 조각 6개요.', target: { has: [{ shape: 'diamond', size: 'l', n: 1 }], pieces: { min: 6 } } } } },
          { prompt: '배지를 꾸미고 표시해요.', toolOptions: {}, target: { selfCheck: ['배지를 꾸몄어요', '고운 말을 골랐어요'], minPieces: 5 }, difficulty: 0.2,
            levels: { easy: { prompt: '조각 3개 배지, 표시해요.', target: { selfCheck: ['배지를 꾸몄어요', '고운 말을 골랐어요'], minPieces: 3 } }, challenge: { prompt: '고운 말을 소리 내 말했나요?', target: { selfCheck: ['배지를 꾸몄어요', '고운 말을 골랐어요', '소리 내어 말했어요'], minPieces: 5 } } },
            conclude: '이겨도 져도 "잘했어", "괜찮아" — 고운 말로 하는 친구가 멋진 게임 친구예요.' },
        ],
      },
      worksheet: { items: [{ type: 'short', prompt: '게임에서 쓸 고운 말을 써요.', answer: '(예) 잘했어, 괜찮아 다시 해 보자' }] },
    }),
    GAME({
      id: 'bully.e12.g2-game-teasing.wrap.game-words', type: 'wrap', title: '게임 고운 말 카드',
      method: '게임 고운 말 카드', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 두 장("잘했어!"·"바보")을 읽어 주고 게임에서 쓸 말을 함께 담는다.', base: '카드 네 장 가운데 게임에서 쓸 고운 말 세 장을 스스로 담고 읽는다.', challenge: '담은 뒤 둘째 출구에서 진 친구에게 할 말을 고른다.' },
      wrap: {
        teacher: '"게임할 때 쓸 고운 말을 바구니에 담아 볼까요?" 카드를 읽어 주고 담을 때마다 반 전체가 엄지를 들며 따라 읽는다. "바보"를 담은 학생에게 "게임 속에서 들어도 마음이 아플까요?"라고 묻는다. 둘째 출구에서 진 친구에게 "괜찮아, 다시 해 보자"를 말해 주는 것이 멋진 게임 친구라는 점을 짚는다.',
        exitTicket: [
          PICKW('게임 고운 말', ['"잘했어!"', '"다시 해 보자"', '"바보"', '"괜찮아"'], ['"잘했어!"', '"다시 해 보자"', '"괜찮아"'], '게임에서 쓸 고운 말을 담아요.'),
          { type: 'choice', prompt: '진 친구에게 할 말은?', options: ['"못하네"', '"괜찮아, 또 하자"'], answer: 1, difficulty: 0.1, explain: '진 친구에게는 "괜찮아, 또 하자"로 마음을 북돋워요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '게임 고운 말',
        items: [
          { type: 'check', prompt: '게임에서 쓸 말에 ✓ 해요.', options: ['잘했어!', '괜찮아', '다시 해 보자'] },
          { type: 'choice', prompt: '게임에서는 욕해도 될까요?', options: ['돼요', '안 돼요'], answer: '안 돼요' },
        ],
      },
    }),
    GAME({
      id: 'bully.e12.g2-game-teasing.wrap.game-pattern', type: 'wrap', title: '"멈춤 → 보여 주기" 규칙 띠',
      method: '"멈춤 → 보여 주기" 규칙 띠', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 띠를 처음부터 읽어 주고 빈칸 자리를 함께 짚으며 보기를 고른다.', base: '빈칸 두 곳에 차례로 올 조각을 보기에서 스스로 고르고 띠를 읽는다.', challenge: '빈칸을 고른 뒤 둘째 출구에서 규칙에 맞지 않는 조각("똑같이 답")을 보기에서 찾는다.' },
      wrap: {
        teacher: '"나쁜 말, 멈춤, 보여 주기 — 게임 속 놀림을 만났을 때의 띠예요." 띠를 반 전체가 손동작(놀람 얼굴·손 떼기·화면 내밀기)과 함께 읽은 뒤 빈칸 조각을 고른다. 둘째 출구에서 "똑같이 답"을 찾지 못한 학생에게 "나쁜 말 다음에 똑같이 답하면 어떻게 될까요?"라고 묻는다. 출구 3번에서 "똑같이 갚아요"를 고른 학생에게 "갚으면 놀림이 커져요. 멈추고 보여 주면 어른이 도와줘요"라고 말해 준다.',
        exitTicket: [
          FILL(['나쁜 말', '멈춤', '보여 주기', '나쁜 말', '멈춤', '보여 주기', '나쁜 말', '멈춤'], [4, 5], '빈칸 두 곳의 조각을 골라요.'),
          ODD(['나쁜 말', '멈춤', '보여 주기', '나쁜 말', '멈춤', '보여 주기'], 4, '똑같이 답', '띠에서 틀린 조각을 찾아요.'),
          { type: 'choice', prompt: '게임에서 놀림을 받으면?', options: ['똑같이 갚아요', '멈추고 보여 줘요'], answer: 1, difficulty: 0.1, explain: '똑같이 갚지 않고, 멈추고 어른께 보여 줘요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '멈춤, 보여 주기',
        items: [
          { type: 'blank', prompt: '규칙 띠를 따라 써요.', text: '나쁜 말 → 멈춤 → ___', answer: '보여 주기' },
          { type: 'draw', prompt: '어른께 화면을 보여 주는 모습을 그려요.' },
        ],
        easy: { note: '"나쁜 말, 멈춤, 보여 주기!"를 손동작과 함께 떠올려요.', items: [{ type: 'draw', prompt: '게임을 멈추고 손을 뗀 모습을 그려요.' }] },
      },
      notes: '규칙 판의 빈칸·조각 칸이 휴대폰에서 32px 라(44px 기준 미달) 빈칸 채우기·틀린 조각 찾기를 보기 고르기(rule)로 한다.',
    }),
  ];

  // =====================================================================================================
  // 2학년 · 도움 지도: 누구에게 어떻게 알릴까
  const HMAP = MOD('bully.e12.g2-help-map', [2]);
  const PLACE = { room: { name: '교실', icon: 'school', at: [0, 1] }, nurse: { name: '보건실', icon: 'hospital', at: [3, 1] }, talk: { name: '상담실', icon: 'house', at: [2, 0] }, office: { name: '교무실', icon: 'office', at: [1, 0] }, home: { name: '집', icon: 'apartment', at: [2, 2] } };
  const HM5 = [PLACE.room, PLACE.nurse, PLACE.talk, PLACE.office, PLACE.home];
  const HM_MORE = [{ name: '운동장', icon: 'park', at: [0, 2] }, { name: '도서관', icon: 'library', at: [3, 2] }];
  const TELLWAIT = ['바로 어른께', '내가 도와요'];
  const T_HMAP = [
    HMAP({
      id: 'bully.e12.g2-help-map.intro.helper-faces', type: 'intro', title: '혼자일 때, 친구가 와 줄 때',
      method: '도움을 받은 친구 얼굴', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 그림 두 장(혼자 우는 친구·곁에 친구가 온 그림)을 들고 마음 카드를 함께 잇는다.', base: '두 그림의 마음 카드를 잇는 시연을 따라 말한다(세 장 가운데 둘).', challenge: '곁에 와 준 친구의 마음(뿌듯함)도 말한다.' },
      intro: {
        teacher: '"두 그림을 보세요. 왼쪽은 놀림 받고 혼자 울고 있어요. 오른쪽은 같은 친구 곁에 다른 친구가 와서 \'같이 선생님께 가자\' 해요." 시연 단추로 마음 카드가 이어지는 모습을 보인다. "내가 혼자 해결해야 해요"라는 말이 나오면 "혼자일 때와 곁에 친구가 있을 때, 어느 쪽이 더 힘이 날까요? 어른께 알리는 것도 해결하는 방법이에요"라고 되묻는다. 오늘은 누구에게 어떻게 알릴지 도움 지도를 만든다고 밝힌다.',
        student: '혼자일 때와 친구가 곁에 와 줄 때의 마음을 견주어 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'alone', label: '혼자 우는 그림' }, { id: 'with', label: '친구가 와 준 그림' }], cards: ['슬픔', '편안함', '신남'] }, sequence: [{ match: { alone: '슬픔', with: '편안함' } }] },
        art: { draw: 'two paper panels: on the left a child crying alone by a wall, on the right the same child with a friend holding their hand and pointing toward a teacher', banner: '같이 가 줄게' },
      },
    }),
    HMAP({
      id: 'bully.e12.g2-help-map.intro.who-chant', type: 'intro', title: '"누구에게 말할까" 구호',
      method: '"누구에게 말할까" 구호 리듬', tool: 'keyboard', minutes: 6,
      levels: { easy: '"선생님, 보호자" 첫 마디만 손뼉으로 따라 친다.', base: '"선생님, 보호자, 상담 선생님, 말하면 도와줘요" 두 마디를 손뼉으로 따라 친다.', challenge: '구호의 어른 이름을 보건 선생님·담임 선생님으로 바꿔 넣어 친다.' },
      intro: {
        teacher: '"선생님(빠른 손뼉 둘, 하나), 보호자(빠른 둘, 하나), 상담 선생님(빠른 손뼉 넷, 손뼉 둘), 말하면 도와줘요!" 시연 단추로 리듬 블록이 놓이는 모습을 보이고 반 전체가 따라 친다. "어른께 말하면 고자질이에요"라는 말이 나오면 "괴롭힘을 알리는 건 친구와 나를 지키는 일이에요. 고자질이 아니라 도움 요청이에요"라고 말해 준다.',
        student: '"선생님, 보호자, 상담 선생님, 말하면 도와줘요!"를 손뼉에 맞춰 외쳐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 3, blocks: ['q', 'e', 'h', 'qr'] }, sequence: [{ rhythm: ['e', 'e', 'q', 'e', 'e', 'q', 'e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'h'] }] },
        art: { draw: 'paper children clapping, above them paper portraits of a teacher, a parent and a counselor with heart badges, linked by a dotted paper path', banner: '말하면 도와줘요' },
      },
    }),
    HMAP({
      id: 'bully.e12.g2-help-map.activity.help-map', type: 'activity', title: '학교·집 도움 지도 핀 꽂기',
      method: '학교·집 도움 지도 핀 꽂기', tool: 'map', minutes: 13,
      levels: { easy: '장소 3곳이 있는 지도에서 장면마다 알리러 갈 곳에 핀을 꽂는다.', base: '장소 5곳(교실·보건실·상담실·교무실·집)이 있는 지도에 핀을 꽂는다.', challenge: '운동장·도서관까지 7곳이 있는 지도에 핀을 꽂고, 교실에서 그곳이 어느 쪽인지(방위) 고른다.' },
      activity: {
        title: '도움 지도 만들기', tool: 'map',
        teacher: '"장면을 듣고 알리러 갈 곳에 핀을 꽂아 볼까요?" 장면 카드를 하나씩 읽어 주고, 핀을 꽂기 전에 그곳에 계신 어른 이름을 말하게 한다(보건실 → 보건 선생님). "집에서 생긴 일은 학교에서 말하면 안 돼요"라는 학생에게 "집에서 본 일도 보호자께 말하고, 학교 선생님께 말해도 돼요"라고 말해 준다. 도전 단계에서는 지도 위가 북쪽이라는 것을 먼저 짚는다.',
        task: '장면마다 알리러 갈 곳에 핀을 꽂아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          PIN('다친 친구와 함께 갈 곳은?', [PLACE.room, PLACE.nurse, PLACE.home], HM5, HM_MORE, '보건실', { prompt: '보건실, 교실에서 어느 쪽?', q: '교실에서 보건실은?', choices: ['동쪽', '서쪽'], answer: 0 }, 0.1),
          PIN('집에서 본 놀림, 알릴 곳은?', [PLACE.room, PLACE.talk, PLACE.home], HM5, HM_MORE, '집', { prompt: '집, 교실에서 어느 쪽?', q: '교실에서 집은?', choices: ['동남쪽', '북서쪽'], answer: 0 }, 0.15),
          PIN('속상한 마음을 이야기할 곳은?', [PLACE.room, PLACE.talk, PLACE.nurse], HM5, HM_MORE, '상담실', { prompt: '상담실, 교실에서 어느 쪽?', q: '교실에서 상담실은?', choices: ['북동쪽', '남서쪽'], answer: 0 }, 0.2, { conclude: '다치면 보건실, 속상하면 상담실·교실, 집에서는 보호자께 — 알릴 곳은 여러 군데예요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '다친 친구와 갈 곳은?', options: ['보건실', '도서관'], answer: '보건실' }] },
      notes: '칸 지도의 배치는 단순한 그림이다. 우리 학교 실제 위치로 바꿔 말해 주고, 방위 문항은 지도 칸 기준이라고 밝힌다.',
    }),
    HMAP({
      id: 'bully.e12.g2-help-map.activity.together-story', type: 'activity', title: '함께 가 주는 친구',
      method: '함께 가 주는 친구 이야기', tool: 'story', minutes: 13,
      levels: { easy: '다음 장면 2장 가운데 하나를 고른다.', base: '다음 장면 3장 가운데 하나를 고른다.', challenge: '다음 장면과 함께 선생님께 할 말 카드까지 두 칸에 나누어 고른다.' },
      activity: {
        title: '같이 가 줄게 이야기', tool: 'story',
        teacher: '"나리가 놀림을 받는데 무서워서 말을 못 해요. 바다가 옆에 왔어요. 다음 장면은?" 장면을 읽어 주고 고르기 전에 "그러면 나리 마음은?"이라고 묻는다. "나리가 직접 말해야 해요"라는 학생에게 "무서울 때는 혼자 가기 힘들어요. 친구가 같이 가 주면 말할 힘이 생겨요"라고 말해 준다. 함께 가 준 바다도, 말한 나리도 잘한 것이라고 짚는다.',
        task: '함께 가 주는 친구 이야기의 다음 장면을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          NEXT('나리가 말을 못 해요.', C('go', '"같이 가 줄게"', { motif: 'tree' }), [C('alone', '"너 혼자 가"', { motif: 'tree' }), C('later', '"나중에 해"', { motif: 'tree' })], { label: '선생님께 할 말', cards: [C('help', '"도와주세요"'), C('nope', '"아무 일 없어요"')] }, 0.1),
          NEXT('친구가 계속 따라와 놀려요.', C('both', '둘이 함께 알려요', { motif: 'house' }), [C('run', '도망만 가요', { motif: 'house' }), C('hide', '숨어요', { motif: 'house' })], { label: '선생님께 할 말', cards: [C('follow', '"계속 놀려요"'), C('fine', '"괜찮아요"')] }, 0.15),
          NEXT('친구가 "말하지 마" 해요.', C('tell', '그래도 알려요', { motif: 'sun' }), [C('keep', '비밀로 해요', { motif: 'sun' }), C('forget', '잊어버려요', { motif: 'sun' })], { label: '선생님께 할 말', cards: [C('saw', '"이런 일 봤어요"'), C('secret', '"비밀이에요"')] }, 0.2),
          { prompt: '"같이 가 줄게"를 짝과 해 봐요.', free: true, talk: true, difficulty: 0.2, conclude: '무서우면 친구와 함께 가서 알려요. 알리기는 돕기예요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '친구가 무서워 말을 못 하면?', options: ['"같이 가 줄게"', '"너 혼자 가"'], answer: '"같이 가 줄게"' }] },
    }),
    HMAP({
      id: 'bully.e12.g2-help-map.activity.tell-steps', type: 'activity', title: '알리는 말 세 가지',
      method: '알리는 말 세 가지 연습', tool: 'timer', minutes: 13,
      levels: { easy: '순서 카드 2장(누가·어디서)의 차례를 맞춘다.', base: '순서 카드 3장(누가·어디서·무슨 일)의 차례를 맞추고 가상 장면으로 짝에게 따라 말한다.', challenge: '세 가지를 맞추고, 셋째 문항에서 "지금 어떤지"까지 넣어 말해 본 것을 표시한다.' },
      activity: {
        title: '누가·어디서·무슨 일', tool: 'timer',
        teacher: '"선생님께 알릴 때 세 가지를 말해요. 누가(손가락 하나), 어디서(손가락 둘), 무슨 일(손가락 셋)." 가상 장면("쉬는 시간에 복도에서 한 친구가 다른 친구 가방을 숨겼어요")을 들려주고 교사가 먼저 세 가지로 말해 본다. 누가를 말하면 고자질 같다는 학생에게 "선생님이 도우려면 알아야 해요. 알리는 건 일러바치기가 아니라 도움 요청이에요"라고 말해 준다. 연습은 가상 장면으로만 하고 우리 반 친구 이름은 쓰지 않는다.',
        task: '알리는 말 세 가지 차례를 놓고 짝에게 따라 말해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          STEPS('알리는 말 차례를 놓아요.', '알리는 말 세 가지', ['누가', '어디서', '무슨 일'], 0.1),
          { prompt: '알리는 말을 모두 해 봐요.', toolOptions: { title: '알리기 전 확인', safety: ['누가 말했어요', '어디서 말했어요', '무슨 일 말했어요'] }, target: { safety: true }, difficulty: 0.15 },
          { prompt: '짝에게 알리기를 점검해요.', toolOptions: { title: '알리기 점검' }, target: { selfCheck: ['또박또박 말했어요', '세 가지를 말했어요'] }, difficulty: 0.15,
            levels: { challenge: { prompt: '"지금 어떤지"도 말했나요?', target: { selfCheck: ['또박또박 말했어요', '세 가지를 말했어요', '지금 어떤지 말했어요'] } } },
            conclude: '누가, 어디서, 무슨 일 — 세 가지를 말하면 선생님이 빨리 도울 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '알리는 말 세 가지를 써요.', text: '누가, 어디서, 무슨 ___', answer: '일' }] },
      notes: '연습은 가상 장면으로만 한다. 학생이 실제 일을 꺼내면 그 자리에서 캐묻지 않고 "말해 줘서 고마워"로 받은 뒤 따로 이야기한다.',
    }),
    HMAP({
      id: 'bully.e12.g2-help-map.activity.tell-or-tattle', type: 'activity', title: '바로 알려요·내가 도와요',
      method: '알려요/기다려요 장면 나누기', tool: 'sortboard', minutes: 13,
      levels: { easy: '장면 카드 4장, 든 장 수가 보이고 틀린 바구니에 넣으면 까닭을 듣고 되돌아온다.', base: '장면 카드 6장을 다 넣은 뒤 확인한다.', challenge: '"말하지 말래요"처럼 바로 알려야 하는 헷갈리는 장면 2장이 더 들어오고, 다칠 수 있는 장면은 바로 알리는 까닭을 말한다.' },
      activity: {
        title: '알리기 바구니', tool: 'sortboard',
        teacher: '"이 장면은 바로 어른께 알려야 할까요, 내가 도울 수 있을까요?" 카드를 읽어 주고 넣기 전에 "누가 다칠 수 있나요?"라고 묻는다. "친구가 맞는 건 내가 말리면 돼요"라는 학생에게 "혼자 말리다 나도 다칠 수 있어요. 다칠 수 있는 일은 바로 어른께 알려요"라고 말해 준다. 연필 줍기처럼 작은 일은 내가 도울 수 있고, 괴롭힘·다침·"말하지 마"는 바로 알린다는 기준을 짚는다.',
        task: '장면 카드를 바로 어른께·내가 도와요 바구니에 나누어요.', levels: { easy: { instant: true, showCount: true }, base: {}, challenge: {} },
        items: [
          SB2(TELLWAIT, '교실 장면을 나누어요.', ['계속 맞고 있어요', '피가 나요', '물건 뺏겨 울어요'], ['연필 떨어뜨림', '신발 끈 풀림', '블록 무너짐'], ['말하지 말래요', '계단에서 밀어요'], 1, 0.1),
          SB2(TELLWAIT, '운동장 장면을 나누어요.', ['여럿이 한 명 놀림', '넘어져 못 일어나요', '"돈 가져와" 해요'], ['공이 굴러감', '줄넘기 엉킴', '모자가 떨어짐'], ['따라오며 놀려요', '"비밀이야" 해요'], 1, 0.15),
          SB2(TELLWAIT, '화면 장면을 나누어요.', ['놀리는 사진 퍼짐', '나쁜 말이 계속 와요', '모르는 사람 연락'], ['글자 틀렸어요', '배터리 없어요', '소리가 작아요'], ['"말하면 혼나" 글', '단체방에서 빼요'], 1, 0.2, { conclude: '괴롭힘·다칠 수 있는 일·"말하지 마"는 바로 어른께 알려요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '바로 알리면 ○, 내가 도우면 △', columns: ['장면', '○ / △'], cells: [['계속 맞고 있어요', ''], ['연필 떨어뜨림', ''], ['놀리는 사진 퍼짐', ''], ['신발 끈 풀림', '']], answer: '○, △, ○, △' }],
        easy: [{ type: 'choice', prompt: '바로 어른께 알릴 일은?', options: ['계속 맞고 있어요', '연필 떨어뜨림'], answer: '계속 맞고 있어요' }] },
      notes: '"내가 도와요"는 고자질 판단이 아니라 작은 일을 스스로 돕는 칸이다. 헷갈리면 알리는 쪽을 고르도록 이끈다.',
    }),
    HMAP({
      id: 'bully.e12.g2-help-map.wrap.help-tree', type: 'wrap', title: '평화 나무 잎 붙이기',
      method: '평화 나무 잎 붙이기', tool: 'collage', minutes: 6,
      levels: { easy: '교사가 잎 세 장(곁에 가기·같이 알리기·고운 말)을 먼저 붙여 보이고 함께 따라 붙인다.', base: '잎 다섯 장을 붙이고 반 평화 약속 하나를 말로 정한다.', challenge: '잎마다 약속 말을 하나씩 정해 말한다.' },
      wrap: {
        teacher: '"우리 반 평화 나무에 잎을 붙여요. 초록 잎은 곁에 가기, 노란 잎은 같이 알리기, 분홍 하트는 고운 말이에요." 잎을 붙인 뒤 반 전체가 평화 약속 하나를 정해 크게 말한다. 출구 2번에서 "혼자 해결해요"를 고른 학생에게 "혼자 힘들면 친구와 어른이 함께해요. 알리는 것도 해결이에요"라고 말해 준다. 완성한 평화 나무는 교실 뒤에 붙여 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['leaf', 'heart', 'circle'], colors: ['초록', '노랑', '분홍', '갈색'], sizes: ['s', 'm', 'l'] }, prompt: '평화 나무에 잎을 붙여요.', target: { selfCheck: ['잎을 붙였어요', '평화 약속을 말했어요'], minPieces: 3 }, difficulty: 0.1 },
          { type: 'choice', prompt: '괴롭힘을 보면 혼자 해결?', options: ['혼자 해결해요', '어른과 함께해요'], answer: 1, difficulty: 0.1, explain: '혼자 하지 않아도 돼요. 친구와 함께 어른께 알려요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 반 평화 나무',
        items: [
          { type: 'check', prompt: '내가 지킬 평화 약속에 ✓ 해요.', options: ['곁에 가기', '같이 알리기', '고운 말 하기'] },
          { type: 'draw', prompt: '평화 나무에 내 잎을 그려요.' },
        ],
      },
    }),
    HMAP({
      id: 'bully.e12.g2-help-map.wrap.help-cards', type: 'wrap', title: '도와줄 어른과 학교가 알려 준 번호',
      method: '도와줄 어른 카드와 [학교가 확인해 넣는 학교폭력 신고·상담 번호]', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 카드 두 장(담임 선생님·보호자)을 읽어 주고 함께 담는다.', base: '카드 네 장 가운데 도와줄 어른 세 장을 스스로 담고 따라 읽은 뒤, 학교가 알려 준 번호 자리를 함께 본다.', challenge: '담은 뒤 학교에서 갈 어른과 집에서 갈 어른을 나누어 말한다.' },
      wrap: {
        teacher: '"도움 지도에 나온 어른을 바구니에 담아 볼까요?" 카드를 읽어 주고 담을 때마다 그분이 계신 곳(교실·상담실·집)을 함께 말한다. 다 담은 뒤 칠판에 적어 둔 \'우리 학교가 알려 준 번호\' 자리를 함께 보며 "보호자와 함께 쓰는 번호예요"라고 말해 준다. "모르는 형"을 담은 학생에게 "처음 보는 사람보다 믿을 어른께 알려요"라고 말한다.',
        exitTicket: [
          PICKW('도와줄 어른', ['담임 선생님', '상담 선생님', '모르는 형', '보호자'], ['담임 선생님', '상담 선생님', '보호자'], '도와줄 어른 카드를 담아요.'),
          { type: 'choice', prompt: '어른께 말하는 것은요?', options: ['고자질이에요', '도움 요청이에요'], answer: 1, difficulty: 0.1, explain: '괴롭힘을 알리는 것은 고자질이 아니라 도움 요청이에요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '도움 지도와 도와줄 어른',
        items: [
          { type: 'short', prompt: '학교에서 도와줄 어른을 써요.', answer: '(예) 담임 선생님, 상담 선생님' },
          { type: 'short', prompt: '학교가 알려 준 번호를 옮겨 써요.', answer: '(학교가 알려 준 번호)' },
        ],
      },
      notes: '체계도에 신고·상담 전화번호가 없어 화면에는 번호를 쓰지 않는다. 학교가 확인한 학교폭력 신고·상담 번호를 칠판과 가정 안내문에 적어 두고 함께 본다(사람 확인 목록).',
    }),
  ];

  // =====================================================================================================
  // 2학년 · "나는 ~해서 속상해" 말하고 다시 친구 되기
  const IMSG = MOD('bully.e12.g2-i-message', [2]);
  // 나 전달 말 조각(wordcards order): 기본 3장, 쉬움 첫 장("나는")이 놓여 있음, 도전 바람 카드까지 4장
  const IWORDS = (prompt, a, b, c, wish, d, more) => ({
    prompt, toolOptions: { mode: 'order', slots: ['처음', '다음', '끝'], cards: [c, a, b] }, target: { order: ids([a, b, c]) }, difficulty: d,
    levels: {
      easy: { state: { at: { [a.id]: 0, [b.id]: null, [c.id]: null } } },
      challenge: { prompt: `${cut(prompt)}(바람까지).`, toolOptions: { slots: ['처음', '다음', '그다음', '끝'], cards: [c, wish, a, b] }, target: { order: ids([a, b, c, wish]) } },
    },
    ...more,
  });
  const T_IMSG = [
    IMSG({
      id: 'bully.e12.g2-i-message.intro.angry-calm-faces', type: 'intro', title: '소리치는 말과 나 전달 말',
      method: '소리치는 말과 나 전달 말 비교', tool: 'emotion', minutes: 6,
      levels: { easy: '교사가 두 말("너 때문이야!"·"나는 네가 밀어서 속상해")을 읽어 주고 들은 친구 얼굴을 함께 잇는다.', base: '두 말을 듣고 들은 친구 마음 카드를 잇는 시연을 따라 말한다(세 장 가운데 둘).', challenge: '내가 들으면 어느 말이 나은지 고르고 까닭을 말한다.' },
      intro: {
        teacher: '"바다가 나리를 밀었어요. 나리가 두 가지로 말해 볼게요. \'너 때문이야!\'(큰 소리) 그리고 \'나는 네가 밀어서 속상해.\'(차분히)" 두 말을 들려주고 시연 단추로 들은 바다의 마음 카드가 이어지는 모습을 보인다. "화났으면 소리쳐야 알아들어요"라는 말이 나오면 "소리치는 말을 들은 바다는 미안해질까요, 같이 화가 날까요?"라고 되묻는다. 오늘은 "나는 ~해서 속상해"로 말하고 다시 친구가 되는 법을 배운다고 밝힌다.',
        student: '두 말을 들은 친구의 얼굴을 따라 지어 보고 어느 말이 나은지 말해 보아요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'yell', label: '"너 때문이야!"' }, { id: 'calm', label: '"나는 속상해"' }], cards: ['화남', '미안함', '신남'] }, sequence: [{ match: { yell: '화남', calm: '미안함' } }] },
        art: { draw: 'two paper panels: a child shouting with jagged speech bubble and the other child crossing arms angrily; the same child speaking calmly with a round bubble and the other child looking sorry', banner: '어떤 말이 마음을 이을까?' },
      },
    }),
    IMSG({
      id: 'bully.e12.g2-i-message.intro.breath-timer', type: 'intro', title: '말하기 전 숨 고르기',
      method: '말하기 전 숨 고르기', tool: 'timer', minutes: 6,
      levels: { easy: '교사와 함께 숨을 두 번 고른다.', base: '타이머에 맞춰 숨을 세 번 고르고 "이제 말할 준비" 점검에 표시하는 시연을 따라 한다.', challenge: '숨을 고른 뒤 첫 말("나는…")을 소리 내어 시작해 본다.' },
      intro: {
        teacher: '"화가 날 때 바로 말하면 소리치는 말이 나오기 쉬워요. 먼저 숨을 세 번 골라요. 코로 들이쉬고, 입으로 후—." 시연 단추로 타이머 횟수가 맞춰지는 모습을 보이고 반 전체가 세 번 숨을 고른다. "숨 쉬면 화가 없어져요?"라는 질문에는 "화가 없어지진 않아도 작아져요. 작아진 화로는 \'나는 속상해\'라고 말할 수 있어요"라고 답한다. 타이머 값은 우리 반 연습 약속이다.',
        student: '선생님과 함께 코로 들이쉬고 입으로 내쉬며 숨을 세 번 골라요.',
        demo: { tool: 'timer', options: { title: '숨 고르기(우리 반 약속)', plan: { work: 5, rest: 5, rounds: 1 } }, sequence: [{ plan: { work: 5, rest: 5, rounds: 3 } }] },
        art: { draw: 'paper children sitting calmly with hands on bellies, a soft paper balloon growing and shrinking above them to show breathing in and out', banner: '숨 고르고 말해요' },
      },
    }),
    IMSG({
      id: 'bully.e12.g2-i-message.activity.i-message-blocks', type: 'activity', title: '나 전달 말 조각 맞추기',
      method: '나 전달 말 조각 맞추기', tool: 'wordcards', minutes: 13,
      levels: { easy: '첫 조각("나는")이 놓여 있어 남은 두 조각만 차례로 놓는다.', base: '말 조각 3장(나는·무슨 일·마음)을 차례대로 놓아 문장을 만든다.', challenge: '"돌려주면 좋겠어" 같은 바람 조각까지 4장을 차례로 놓는다.' },
      activity: {
        title: '나 전달 말 만들기', tool: 'wordcards',
        teacher: '"나 전달 말은 \'나는\' + 무슨 일 + 마음이에요. \'나는 / 네가 연필을 가져가서 / 속상해.\'" 조각을 놓은 뒤 반 전체가 문장을 이어서 소리 내어 읽는다. "너는 나빠"로 시작하려는 학생에게 "\'너는\'으로 시작하면 친구는 혼나는 것 같아요. \'나는\'으로 시작하면 내 마음을 알려 줄 수 있어요"라고 말해 준다. 도전 단계의 바람 조각은 친구가 어떻게 해 주면 좋을지 알려 주는 말이라고 짚는다.',
        task: '말 조각을 차례대로 놓아 나 전달 말을 만들어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          IWORDS('연필 이야기, 말을 만들어요.', C('i', '나는'), C('what', '연필 가져가서'), C('feel', '속상해'), C('wish', '돌려주면 좋겠어'), 0.1),
          IWORDS('줄 이야기, 말을 만들어요.', C('i', '나는'), C('what', '네가 밀어서'), C('feel', '아팠어'), C('wish', '천천히 가자'), 0.15),
          IWORDS('별명 이야기, 말을 만들어요.', C('i', '나는'), C('what', '별명 들어서'), C('feel', '슬퍼'), C('wish', '이름 불러 줘'), 0.2, { conclude: '"나는 + 무슨 일 + 마음 + 바람"으로 말하면 내 마음이 전해져요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '나 전달 말을 완성해요.', text: '나는 네가 밀어서 ___', answer: '아팠어' }] },
      notes: '말 조각 판은 한국어 글 카드 차례(order) 판으로만 쓴다(소리 내기·뒤집기 없음).',
    }),
    IMSG({
      id: 'bully.e12.g2-i-message.activity.peace-dilemma', type: 'activity', title: '갈림길: 모래성이 무너졌을 때',
      method: '갈림길: 친구가 내 그림을 망쳤을 때', tool: 'dilemma', minutes: 13,
      levels: { easy: '첫 갈림에서 보기 3개 가운데 한 번만 고른다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 고른 까닭 카드 3장 가운데 하나를 고른다.' },
      activity: {
        title: '화날 때 갈림길', tool: 'dilemma',
        teacher: '"열심히 만든 모래성을 친구가 뛰어가다 무너뜨렸어요. 나는 어떻게 할까요?" 고르기 전에 반 전체가 숨을 한 번 고른다. "소리쳐요"를 고른 학생에게 "소리치면 친구가 내 마음을 알게 될까요, 같이 화가 날까요?"라고 묻는다. "말 안 하고 피해요"를 고른 학생에게는 "피하면 친구는 내가 속상한 걸 몰라요. 나 전달 말로 알려 줘요"라고 말해 준다. 무너뜨린 친구도 사과하고 같이 다시 만들면 다시 친구가 된다는 점을 짚는다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('모래성이 무너졌어요.', { text: '친구가 뛰어가다 내 모래성을 무너뜨렸어요.', motif: 'house', choices: [
            { id: 'yell', text: '"너 때문이야!" 소리쳐요', result: '친구도 "일부러 아니야!" 소리쳐요.', why: '소리치면 둘 다 화가 커져요.' },
            { id: 'i', text: '"나는 속상해" 말해요', result: '친구가 "미안해" 해요.', easyEnding: '친구가 사과하고 같이 다시 만들었어요.', next: { text: '친구가 "어떻게 할까?" 물어요.', choices: [
              { id: 'again', text: '"같이 다시 만들자"', result: '둘이 더 큰 모래성을 만들어요.', ending: '다시 친구가 되어 함께 웃었어요.' },
              { id: 'never', text: '"너랑 안 놀아"', result: '친구가 시무룩해요.', why: '사과한 친구와는 다시 놀 수 있어요.' }] } },
            { id: 'avoid', text: '말 안 하고 피해요', result: '친구는 내가 속상한 걸 몰라요.', why: '마음을 말해야 친구가 알 수 있어요.' }] },
          ['i', 'again'], [{ id: 'tell', text: '내 마음을 알리려고요' }, { id: 'win', text: '이기려고요', why: '이기는 게 아니라 마음을 잇는 거예요.' }, { id: 'scold', text: '친구를 혼내려고요', why: '혼내기보다 내 마음을 알려요.' }], 'tell', 0.15),
          DILEMMA('친구가 줄에서 밀었어요.', { text: '급식 줄에서 친구가 나를 밀었어요.', motif: 'house', choices: [
            { id: 'push', text: '똑같이 밀어요', result: '둘 다 넘어질 뻔해요.', why: '똑같이 밀면 다칠 수 있어요.' },
            { id: 'i', text: '"나는 밀려서 아파"', result: '친구가 "몰랐어, 미안" 해요.', easyEnding: '친구가 사과하고 천천히 가기로 했어요.', next: { text: '친구가 "앞이 밀어서 그랬어" 해요.', choices: [
              { id: 'promise', text: '"다음엔 천천히 가자"', result: '친구가 고개를 끄덕여요.', ending: '약속을 정하고 다시 웃으며 줄을 섰어요.' },
              { id: 'blame', text: '"거짓말이지?"', result: '친구가 속상해해요.', why: '친구 말도 들어 보고 약속을 정해요.' }] } }] },
          ['i', 'promise'], [{ id: 'safe', text: '서로 안 다치려고요' }, { id: 'back', text: '갚아 주려고요', why: '갚으면 다툼이 커져요.' }, { id: 'loud', text: '크게 말하려고요', why: '크게가 아니라 차분하게 마음을 말해요.' }], 'safe', 0.2),
          DILEMMA('친구가 나를 놀렸어요.', { text: '친구가 내 받아쓰기 점수를 보고 놀렸어요.', motif: 'house', choices: [
            { id: 'tease', text: '나도 놀려요', result: '서로 더 속상해져요.', why: '같이 놀리면 둘 다 아파요.' },
            { id: 'i', text: '"나는 놀림 받아 슬퍼"', result: '친구가 머쓱해해요.', easyEnding: '친구가 "미안해, 안 놀릴게" 했어요.', next: { text: '친구가 "장난이었어" 해요.', choices: [
              { id: 'wish', text: '"그래도 안 하면 좋겠어"', result: '친구가 "알았어, 미안해" 해요.', ending: '마음을 말하고 다시 친구가 되었어요.' },
              { id: 'cry', text: '말없이 울어요', result: '친구는 왜 우는지 몰라요.', why: '바라는 것까지 말해 줘요.' }] } }] },
          ['i', 'wish'], [{ id: 'feel', text: '내 마음을 알려서요' }, { id: 'bad', text: '친구가 나빠서요', why: '친구가 나쁜 게 아니라 행동을 바꾸면 돼요.' }, { id: 'quiet', text: '조용히 하려고요', why: '조용히보다 마음을 말하는 게 먼저예요.' }], 'feel', 0.25, { conclude: '화가 나면 숨 고르고 "나는 ~해서 속상해" 말하고, 사과하면 다시 친구가 돼요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '모래성이 무너지면?', options: ['"나는 속상해"', '"너 때문이야!"'], answer: '"나는 속상해"' }] },
      notes: '계획의 장면은 "친구가 내 그림을 망쳤을 때"이지만, 같은 학년군 안전교육 폭력예방(saf-violence.e12.kind-words.activity.drawing-choice)에 같은 장면이 있어 모래성 장면으로 바꿨다.',
    }),
    IMSG({
      id: 'bully.e12.g2-i-message.activity.talk-order', type: 'activity', title: '다시 친구 되는 대화 차례',
      method: '다시 친구 되는 대화 차례', tool: 'timeline', minutes: 13,
      levels: { easy: '첫 카드("무슨 일이야?")가 놓여 있어 남은 두 단계만 놓는다.', base: '대화 카드 3장(무슨 일·어떤 마음·어떻게 할까)을 차례대로 놓는다.', challenge: '대화가 아닌 카드 한 장("네가 잘못했지?")이 섞여 있어 빼고 세 단계를 놓는다.' },
      activity: {
        title: '다시 친구 대화', tool: 'timeline',
        teacher: '"다툰 두 친구가 다시 친구가 되려면 세 가지를 차례로 이야기해요. 무슨 일이 있었지? 어떤 마음이었어? 이제 어떻게 할까?" 카드를 놓은 뒤 짝과 두 친구가 되어 차례대로 말해 본다. "누가 잘못했는지부터 정해요"라는 학생에게 "잘못을 따지면 서로 \'네 탓\'이 되기 쉬워요. 먼저 일과 마음을 나누면 어떻게 할지가 보여요"라고 말해 준다. 싸운 친구와도 이렇게 다시 놀 수 있다는 점을 짚는다.',
        task: '다시 친구 되는 대화 차례대로 카드를 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('공 다툼 대화를 놓아요.', [C('what', '"무슨 일이야?"'), C('feel', '"어떤 마음?"'), C('how', '"어떻게 할까?"')], C('blame', '"네 잘못이지?"'), 0.1),
          ORDER3('자리 다툼 대화를 놓아요.', [C('what', '"왜 그랬어?"'), C('feel', '"속상했어?"'), C('how', '"번갈아 앉자"')], C('yell', '"저리 비켜!"'), 0.15),
          ORDER3('놀이 다툼 대화를 놓아요.', [C('what', '"무슨 일 있어?"'), C('feel', '"나는 서운했어"'), C('how', '"같이 하자"')], C('never', '"다신 안 놀아"'), 0.2, { conclude: '무슨 일, 어떤 마음, 어떻게 할까 — 차례대로 이야기하면 다시 친구가 돼요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '대화 차례를 써요.', text: '무슨 일 → 어떤 마음 → 어떻게 ___', answer: '할까' }] },
    }),
    IMSG({
      id: 'bully.e12.g2-i-message.activity.friend-again-song', type: 'activity', title: '"다시 친구" 노래 가락 짓기',
      method: '"다시 친구" 노래 가락 짓기', tool: 'keyboard', minutes: 13,
      levels: { easy: '첫째 줄은 끝 세 음만 따라 치고, 가락 짓기는 음 3개로 짓는다.', base: '"미안해, 괜찮아" 가락을 따라 치고, "다시 놀자" 가락을 음 5개로 짓는다.', challenge: '음 5개 가락을 "도"로 끝나게 짓고, 셋째 문항에서 지은 가락을 두 번 쳐 본 것까지 표시한다.' },
      activity: {
        title: '다시 친구 가락', tool: 'keyboard',
        teacher: '"미안해, 괜찮아, 다시 놀자" 노랫말을 함께 읽고 첫 줄 가락을 들려준다. 둘째·셋째 문항에서는 "다시 놀자"에 어울리는 가락을 스스로 지어 본다. 음을 마구 누르는 학생에게 "노랫말 한 글자에 한 음씩, \'다, 시, 놀, 자\'에 맞춰 눌러 볼까요?"라고 묻는다. 지은 가락을 짝에게 들려주며 "미안해"와 "괜찮아"를 주고받는다.',
        task: '"다시 친구" 노래 가락을 따라 치고 지어 봐요.', levels: { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도' } },
        items: [
          MEL('"미안해, 괜찮아" 가락을 쳐요.', ['미', '레', '도', '미', '레', '도'], 0.1),
          { prompt: '"다시 놀자" 가락을 지어요.', toolOptions: {}, target: { compose: { length: 5 } }, difficulty: 0.15,
            levels: { easy: { prompt: '"다시 놀자" 세 음을 지어요.', target: { compose: { length: 3 } } }, challenge: { prompt: '"도"로 끝나는 다섯 음요.', target: { compose: { length: 5, endOn: '도' } } } } },
          { prompt: '가락을 짓고 두 번 쳐 봐요.', toolOptions: {}, target: { compose: { length: 5 }, selfCheck: ['두 번 쳐 보았어요'] }, difficulty: 0.2,
            levels: { easy: { prompt: '세 음을 짓고 두 번 쳐요.', target: { compose: { length: 3 }, selfCheck: ['두 번 쳐 보았어요'] } }, challenge: { prompt: '"도"로 끝, 두 번 쳐 봐요.', target: { compose: { length: 5, endOn: '도' }, selfCheck: ['두 번 쳐 보았어요', '짝에게 들려줬어요'] } } },
            conclude: '"미안해, 괜찮아, 다시 놀자" — 노래처럼 마음을 주고받으면 다시 친구가 돼요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '노랫말을 따라 써요.', text: '미안해, 괜찮아, 다시 ___', answer: '놀자' }] },
    }),
    IMSG({
      id: 'bully.e12.g2-i-message.wrap.promise-collage', type: 'wrap', title: '화해 약속 카드',
      method: '화해 약속 카드 꾸미기', tool: 'collage', minutes: 6,
      levels: { easy: '교사가 두 손 조각(반원 두 개)을 맞붙여 보이고 약속 조각 하나를 함께 붙인다.', base: '두 손 조각을 맞붙이고 약속 조각을 더해 5개 이상으로 화해 약속 카드를 꾸민다.', challenge: '약속 말을 정해 짝에게 들려준다.' },
      wrap: {
        teacher: '"반원 두 개를 맞붙이면 두 손이 맞닿아요. 그 위에 약속 조각을 붙여 화해 약속 카드를 만들어요." 카드를 꾸민 뒤 짝에게 약속 말("다음엔 천천히 갈게", "이름 불러 줄게")을 들려준다. 출구 2번에서 "다시 못 놀아요"를 고른 학생에게 "사과하고 약속하면 다시 놀 수 있어요. 한 번 다퉜다고 끝이 아니에요"라고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['semi', 'heart', 'star', 'circle'], colors: ['분홍', '노랑', '파랑', '초록'], sizes: ['s', 'm', 'l'] }, prompt: '화해 약속 카드를 꾸며요.', target: { selfCheck: ['두 손 조각을 붙였어요', '약속을 말했어요'], minPieces: 3 }, difficulty: 0.1 },
          { type: 'choice', prompt: '싸운 친구와는?', options: ['다시 못 놀아요', '다시 놀 수 있어요'], answer: 1, difficulty: 0.1, explain: '마음을 말하고 사과하고 약속하면 다시 친구가 될 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '화해 약속',
        items: [
          { type: 'short', prompt: '친구와 할 화해 약속을 써요.', answer: '(예) 다음엔 천천히 갈게' },
          { type: 'draw', prompt: '친구와 손을 맞잡은 모습을 그려요.' },
        ],
      },
    }),
    IMSG({
      id: 'bully.e12.g2-i-message.wrap.again-pattern', type: 'wrap', title: '"속상해 → 말해요 → 다시 놀아요" 띠',
      method: '"속상해 → 말해요 → 다시 놀아요" 띠', tool: 'pattern', minutes: 6,
      levels: { easy: '교사가 띠를 처음부터 읽어 주고 빈칸 자리를 함께 짚으며 보기를 고른다.', base: '빈칸 두 곳에 차례로 올 조각을 보기에서 스스로 고르고 띠를 읽는다.', challenge: '빈칸을 고른 뒤 둘째 출구에서 규칙에 맞지 않는 조각("계속 미워")을 보기에서 찾는다.' },
      wrap: {
        teacher: '"속상해, 말해요, 다시 놀아요 — 세 조각이 되풀이돼요." 띠를 반 전체가 읽은 뒤 빈칸 조각을 고른다. 둘째 출구에서 "계속 미워"를 찾지 못한 학생에게 "말한 다음 계속 미워하면 다시 놀 수 있을까요?"라고 묻는다. 출구 3번에서 "소리쳐요"를 고른 학생에게 "숨 고르고 \'나는 속상해\'라고 말하면 마음이 더 잘 전해져요"라고 말해 준다.',
        exitTicket: [
          FILL(['속상해', '말해요', '다시 놀아요', '속상해', '말해요', '다시 놀아요', '속상해', '말해요'], [5, 6], '빈칸 두 곳에 올 조각은?'),
          ODD(['속상해', '말해요', '다시 놀아요', '속상해', '말해요', '다시 놀아요'], 5, '계속 미워', '규칙에 안 맞는 조각을 찾아요.'),
          { type: 'choice', prompt: '속상한 마음은 어떻게?', options: ['소리쳐요', '"나는 속상해"'], answer: 1, difficulty: 0.1, explain: '숨 고르고 "나는 ~해서 속상해"로 말해요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '다시 친구 되기',
        items: [
          { type: 'blank', prompt: '띠를 따라 써요.', text: '속상해 → 말해요 → 다시 ___', answer: '놀아요' },
          { type: 'blank', prompt: '나 전달 말을 써요.', text: '나는 ___해서 속상해.', answer: '(예) 네가 밀어서' },
        ],
        easy: { note: '"속상해, 말해요, 다시 놀아요!"를 소리 내어 읽어요.', items: [{ type: 'draw', prompt: '다시 함께 노는 두 친구를 그려요.' }] },
      },
      notes: '규칙 판의 빈칸·조각 칸이 휴대폰에서 32px 라(44px 기준 미달) 빈칸 채우기·틀린 조각 찾기를 보기 고르기(rule)로 한다.',
    }),
  ];

  PaperLessons.registerModules([].concat(T_HURT, T_STOP, T_SCREEN, T_PHOTO, T_BESIDE, T_SORRY, T_FIVE, T_NICK, T_GROUP, T_GAME, T_HMAP, T_IMSG));
})();
