/* 창체 안전교육 사이버 중독 예방 — 초1-2 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-cyber 초1-2.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등학교 약물 및 사이버 중독 예방
 *   'T.V, 인터넷, 통신기기(스마트폰 등) 등의 중독 위해성을 알고 바르게 사용하기' · '건전한 사이버 통제 능력 배양 및 사용습관 형성하기',
 *   7대 표준안 사이버(인터넷 게임·스마트폰) 소분류, 별표 2 교육방법 '부모 교육 연계'(research-safety.md).
 * 초1-2 기준: 소리로 읽어 주는 짧은 문항, 카드 6자 안팎, 좋아요/안돼요 고르기·따라 하기. 장면·인물은 직접 지은 가상 친구다(가명 '솔이'·'하늘'·토끼).
 * 학생 자신의 사용 시간·즐겨 하는 게임·앱 이름은 묻거나 채점하지 않는다 — 판단은 모두 가상 친구 장면으로 하고, 스스로 점검(selfCheck)만 '오늘 해 본 것'으로 둔다.
 * 특정 게임·앱·회사 이름은 쓰지 않는다('태블릿', '영상', '게임', '숙제 앱'처럼 일반 낱말만).
 * 주제 4개(1학년 2 · 2학년 2), 계획 모듈 42개.
 *
 * 수치: 근거 파일에 사이버 중독 예방 초1-2 수치(권장 시간·거리)가 없다. 화면 시간(30분·40분), 끝 시각(7시·4시), 5분 전 알림, 타이머 횟수·초는
 *   모두 '우리 반 약속'(연습용 값)이고 권장 기준이 아니다 — 화면과 교사 메모에 그렇게 밝힌다.
 *
 * 사람 확인: (근거 파일에 세부 수칙이 없어 일반 안전 수칙으로 쓴 문장 — 공식 안내처에서 확인한 뒤 쓴다)
 *   - 화면을 볼 때 허리를 펴고 앉고, 누워서·엎드려서·고개를 숙여 오래 보지 않는다
 *       (eyes-body.activity.posture · eyes-body.intro.sore · stop-signal.activity.body-map · screen-promise.activity.goodbad)
 *       → 질병관리청 국가건강정보포털, 과학기술정보통신부·한국지능정보사회진흥원 스마트쉼센터
 *   - 화면과 눈 사이를 '팔 길이만큼' 떨어뜨린다, 밝은 곳에서 보고 어두운 방에서 보지 않는다, 글씨를 크게 한다, 쉬는 동안 물을 마신다 (eyes-body.activity.distance)
 *       → 질병관리청 국가건강정보포털, 스마트쉼센터
 *   - 눈 쉬기: 멀리 보기 → 눈 깜빡이기 → 눈 감고 쉬기, 눈을 비비지 않는다 (eyes-body.activity.eye-break · eyes-body.intro.tired-eyes · eyes-body.wrap.*)
 *       → 질병관리청 국가건강정보포털
 *   - 화면을 오래 보면 눈·목·어깨·허리·손목이 뻐근할 수 있다, 목·어깨·손목 펴기 (eyes-body.intro.sore · eyes-body.activity.stretch · stop-signal.activity.body-map)
 *       → 질병관리청 국가건강정보포털, 스마트쉼센터
 *   - 짜증·자꾸 생각남이 '그만하기' 마음 신호가 될 수 있다 (stop-signal.intro.mind-face · stop-signal.activity.signal-sort · stop-signal.wrap.name-it)
 *       → 스마트쉼센터(유아동 과의존 예방 자료)
 *   - 밥 먹을 때·잠자기 전·이불 속·오래 타는 차 안에서는 화면을 끈다, 가족과 함께 약속을 정한다
 *       (screen-promise.activity.goodbad · screen-promise.wrap.promise · family-rule.* 전부)
 *       → 스마트쉼센터(가정 내 스마트폰 사용 규칙 자료)
 *   - 차 안에서 오래 화면을 보면 속이 불편할 수 있다, 길을 걸을 때·횡단보도에서는 화면을 보지 않는다 (family-rule.activity.where)
 *       → 스마트쉼센터, 도로교통공단
 *   - 끝내기 전에 마무리 알림을 두고, 끝맺기(저장) 뒤 끈다 (stop-signal.activity.three-steps · stop-signal.activity.five-before)
 *       → 스마트쉼센터. '5분 전'은 우리 반 약속(연습용 값)
 *   - 아쉬울 때 숨을 크게 쉬어 마음을 달랜다 (stop-signal.activity.breathe · screen-promise.activity.calm-words) → 스마트쉼센터
 */
(function () {
  const MOD = (topic, grades) => (o) => Object.assign({ schema: 'edu-module.v1', domain: 'saf-cyber', band: '초1-2', topic, grades }, o);
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const cut = (p) => p.replace(/\.$/, '');
  const C = (id, text) => ({ id, text });
  const ids = (cs) => cs.map((c) => c.id);

  // 두 칸 나누기(mindmap·story sort): 기본 6장, 쉬움 4장, 도전 8장(헷갈리는 카드 2장 — 둘째 칸으로 간다). base = 다른 겉모양 옵션
  const SORT2 = (slots, prompt, base, ok, no, hard, d, more) => {
    const S = (a, b) => ({ [slots[0]]: ids(a), [slots[1]]: ids(b) });
    return {
      prompt, toolOptions: Object.assign({ mode: 'sort', slots, cards: [ok[0], no[0], ok[1], no[1], ok[2], no[2]] }, base), target: { sort: S(ok, no) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(4장).`, toolOptions: { cards: [ok[0], no[0], ok[1], no[1]] }, target: { sort: S(ok.slice(0, 2), no.slice(0, 2)) } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [ok[0], no[0], hard[0], ok[1], no[1], ok[2], hard[1], no[2]] }, target: { sort: S(ok, [...no, ...hard]) } },
      },
      ...more,
    };
  };
  // 차례 놓기(timeline·story order): 기본 3장, 쉬움 첫 장이 놓여 있음, 도전 틀린 장 1장을 빼고 놓음
  const ORDER3 = (prompt, cards, wrong, d, more) => {
    const i = ids(cards);
    return {
      prompt, toolOptions: { mode: 'order', slots: ['먼저', '다음', '끝'], cards: [cards[2], cards[0], cards[1]] }, target: { order: i }, difficulty: d,
      levels: { easy: { state: { at: { [i[0]]: 0, [i[1]]: null, [i[2]]: null } } }, challenge: { toolOptions: { cards: [cards[2], wrong, cards[0], cards[1]] } } },
      ...more,
    };
  };
  // 정리 출구: 그림 점검표(스스로 점검), 구호 순서(timer), 스스로 점검 칸(timer)
  const CHECK = (title, items, prompt) => ({ type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title, items }, prompt: prompt || '오늘 해 본 것에 표시해요.', target: { selfCheck: true }, difficulty: 0.1 });
  const CHANT = (title, cards, prompt) => ({ type: 'tool', tool: 'timer', options: { title, cards: [cards[2], cards[0], cards[1]] }, prompt: prompt || '구호를 차례대로 놓아요.', target: { order: cards }, difficulty: 0.1 });
  const SELF = (title, safety, prompt) => ({ type: 'tool', tool: 'timer', options: { title, safety }, prompt: prompt || '스스로 점검 칸에 표시해요.', target: { safety: true }, difficulty: 0.1 });
  // 마음 짝 짓기(emotion match): 그림 속 친구 칸 하나에 마음 카드(되는 마음 여럿)
  const FEEL = (prompt, label, cards, okIds, d, more) => ({ type: 'tool', tool: 'emotion', options: { mode: 'match', slots: [{ id: 'who', label }], cards }, prompt, target: { match: { who: okIds } }, difficulty: d || 0.1, ...more });
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
  // 시간 바구니(economy 카드 판 sort): 예산 막대는 돈(원)만 세므로, '남은 시간에 들어가요/넘쳐요'를 카드 한 장씩 판단한다
  const FIT = (prompt, slots, cards, to, d, more) => {
    const sort = {}; for (const s of slots) sort[s] = cards.filter((c) => to[c.id] === s).map((c) => c.id);
    return { prompt, toolOptions: { mode: 'sort', slots, cards }, target: { sort }, difficulty: d, ...more };
  };

  // =====================================================================================================
  // 1학년 · 화면 시간 약속 지키기
  const PROM = MOD('saf-cyber.e12.screen-promise', [1]);
  const OKNO = ['좋아요', '안돼요'];
  const FACES = (n) => ['신남', '걱정', '속상함', '편안함', '화남', '놀람'].slice(0, n);
  const T_PROM = [
    PROM({
      id: 'saf-cyber.e12.screen-promise.intro.morning', type: 'intro', title: '주말 아침 태블릿 그림과 마음',
      method: '그림 장면 보고 마음 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 마음 얼굴 두 개(신남·걱정)만 가리키며 "솔이는 어느 쪽일까요?"라고 묻는다.', base: '시연의 마음 얼굴 네 개 가운데 솔이 마음을 고르고 까닭을 한마디 말한다.', challenge: '솔이와 엄마 마음을 각각 고르고, 두 마음이 왜 다른지 말한다.' },
      intro: {
        teacher: '"주말 아침이에요. 솔이가 눈 뜨자마자 태블릿을 켰어요. 솔이 마음은 어떨까요? 옆에 선 엄마 마음은요?" 두세 명의 대답을 듣고(기다릴 반응: "신나요", "엄마는 걱정해요") 시연 단추로 솔이 칸에 신남, 엄마 칸에 걱정이 놓이는 모습을 보여 준다. "재미있으면 계속 봐도 돼요"라는 말이 나오면 "아침밥도 안 먹고 계속 보면 엄마는 왜 걱정할까요?"라고 되묻는다. 오늘은 화면을 볼 때 시간 약속을 정하고 지키는 법을 배운다고 밝힌다.',
        student: '그림 속 솔이와 엄마의 마음 얼굴을 골라 짝에게 말해요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'kid', label: '솔이' }, { id: 'mom', label: '엄마' }], cards: FACES(4), shuffle: false }, sequence: [{ match: { kid: '신남' } }, { match: { kid: '신남', mom: '걱정' } }] },
        art: { draw: 'a paper child in pajamas sitting on a bed and staring at a glowing paper tablet right after waking up, while a paper mother stands at the door with a worried face and a breakfast tray', banner: '눈 뜨자마자 화면?', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
      },
      notes: '학생 자신의 아침 습관이나 사용 시간은 묻지 않는다. 그림 속 솔이의 마음으로만 이야기한다.',
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.intro.alarm-story', type: 'intro', title: '"한 판만 더!" 토끼 이야기',
      method: '짧은 그림 이야기 듣고 다음 장면 고르기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 끝 장면 그림 두 장(끄고 놀아요·계속 해요)만 보여 주고 고르게 한다.', base: '끝 장면 그림 세 장 가운데 고르고, 좋은 까닭을 한마디 말한다.', challenge: '끝 장면을 고른 뒤 토끼가 친구에게 할 말을 직접 지어 말한다.' },
      intro: {
        teacher: '"토끼가 게임을 해요. 알람이 따르릉 울렸어요. 토끼가 \'한 판만 더!\' 해요. 그다음엔 어떻게 될까요?" 세 장면을 천천히 읽어 준 뒤 시연 단추로 \'끄고 놀아요\' 그림이 바구니에 담기는 모습을 보인다. "한 판만 하면 금방 끝나요"라는 말이 나오면 "한 판이 끝나면 또 \'한 판만 더\'가 나오지 않을까요?"라고 되묻는다. 알람은 약속한 시간이 다 됐다는 신호라는 점을 짚는다.',
        student: '토끼 이야기를 듣고 끝 장면으로 좋은 그림을 골라요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '끝 장면', cards: [{ id: 'off', text: '끄고 놀아요', motif: 'sun' }, { id: 'more', text: '계속 해요' }, { id: 'cry', text: '울며 떼써요' }], shuffle: false }, sequence: [{ pick: ['off'] }] },
        art: { draw: 'three paper story panels: a paper rabbit playing a game on a tablet, a paper alarm clock ringing, and the rabbit saying one more round with a speech bubble', banner: '한 판만 더?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.intro.play-graph', type: 'intro', title: '쉬는 시간 놀이 그림그래프',
      method: '그림그래프 보고 많은 놀이 찾기', tool: 'chart', minutes: 5,
      levels: { easy: '교사가 별을 하나씩 손가락으로 세며 가장 많은 놀이를 함께 고른다.', base: '그림그래프에서 가장 많은 놀이와 가장 적은 놀이를 말한다.', challenge: '블록과 책 읽기의 별 수가 몇 개 차이 나는지 말한다.' },
      intro: {
        teacher: '"가상의 우리 반이 쉬는 시간에 한 놀이를 그림그래프로 나타냈어요. 별 하나가 친구 한 명이에요." 이 자료는 수업을 위해 지은 가상의 조사라고 먼저 말한다. 시연 단추로 가장 많은 놀이(블록 쌓기)가 골라지는 모습을 보이고 별을 함께 센다. "화면이 없으면 심심해요"라는 말이 나오면 "그래프 속 친구들은 화면 없이 무엇을 하며 놀았나요?"라고 되묻는다. 화면을 끄고도 즐거운 놀이가 많다는 것을 짚는다.',
        student: '별을 세어 가장 많이 한 놀이를 찾아 손가락으로 가리켜요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '쉬는 시간에 한 놀이(가상)', unit: '명', data: [['블록 쌓기', 5], ['줄넘기', 3], ['그림 그리기', 4], ['책 읽기', 2]], icons: [{ value: 1, name: '1명' }], icon: 'star', question: '가장 많은 놀이는?', choices: ['블록 쌓기', '줄넘기', '그림 그리기', '책 읽기'] }, sequence: [{ pick: 0 }] },
        art: { draw: 'paper children playing without screens during a break: stacking paper blocks, jumping rope, drawing pictures and reading a book, with paper stars floating above', banner: '화면 없이도 신나요' },
      },
      notes: '그래프 수는 수업용으로 지은 가상의 조사다. 실제 우리 반을 조사하면 놀이 이름만 묻고, 화면 사용 시간은 묻지 않는다.',
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.activity.goodbad', type: 'activity', title: '좋아요·안돼요 장면 나누기',
      method: '좋아요/안돼요 장면 카드 나누기', tool: 'story', minutes: 14,
      levels: { easy: '장면 카드 4장, 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 되돌아온다.', base: '장면 카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "한 판만 더"처럼 헷갈리는 카드가 섞인다. 다 놓은 뒤 안돼요 카드 하나를 좋아요로 바꿔 말한다(교사 진행).' },
      activity: {
        title: '화면 보는 장면 두 칸으로 나누기', tool: 'story',
        teacher: '"솔이가 이렇게 화면을 보면 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 반 전체가 소리 내어 읽는다. "밥 먹으며 보기"를 좋아요에 두는 학생에게 "화면을 보며 밥을 먹으면 밥맛과 가족 이야기는 어떻게 될까요?"라고 묻는다. "재미있으면 약속이 지나도 괜찮다"는 생각에는 "한 판만 더 하면 약속은 몇 번 지나갈까요?"라고 되묻는다. 다 나눈 뒤 안돼요 카드 하나를 골라 좋아요로 바꿔 말해 본다(예: "누워서 오래" → "앉아서 정한 만큼").',
        task: '솔이가 화면 보는 장면을 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '화면 볼 때 장면을 나누어요.', {}, [C('time', '약속 시간 끄기'), C('pick', '정한 것만 보기'), C('sit', '앉아서 보기')], [C('meal', '밥 먹으며 보기'), C('lie', '누워서 오래'), C('alone', '혼자 계속 보기')], [C('one', '한 판만 더'), C('sneak', '몰래 켜기')], 0.1),
          SORT2(OKNO, '아침·저녁 장면을 나누어요.', {}, [C('wash', '씻고 나서 보기'), C('adult', '어른과 함께'), C('alarm', '알람 맞추기')], [C('wake', '눈 뜨자마자'), C('bed', '자기 전 보기'), C('skip', '숙제 미루기')], [C('night', '밤에 몰래'), C('blanket', '이불 속 보기')], 0.15),
          SORT2(OKNO, '끌 때 장면을 나누어요.', {}, [C('self', '스스로 끄기'), C('ok', '"알았어요"'), C('save', '저장하고 끄기')], [C('fuss', '떼쓰기'), C('hide', '화면 숨기기'), C('yell', '소리 지르기')], [C('end', '끝까지 보기'), C('little', '조금만 더')], 0.2, { conclude: '약속 시간이 되면 "알았어요" 하고 스스로 꺼요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '좋으면 ○, 안 되면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['약속 시간에 끄기', ''], ['밥 먹으며 보기', ''], ['스스로 끄기', ''], ['누워서 오래 보기', '']], answer: '○, ×, ○, ×' }],
        easy: [{ type: 'choice', prompt: '좋은 장면에 ○ 해요.', options: ['스스로 꺼요', '떼써요'], answer: '스스로 꺼요' }] },
      notes: '장면은 모두 가상 친구 솔이의 일이다. "너는 몇 시간 보니?"처럼 학생 자신의 사용을 묻지 않는다.',
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.activity.clockset', type: 'activity', title: '약속한 끝 시각 시계 맞추기',
      method: '약속한 끝 시각에 시계 바늘 맞추기', tool: 'clock', minutes: 14,
      levels: { easy: '정각만 맞추고(긴바늘은 12에 고정), 짧은바늘이 갈 두 숫자 사이가 연하게 칠해져 있다.', base: '정각만 맞추고 짧은바늘 자리 안내는 없다. 시작 시각과 끝 시각을 각각 나타낸다.', challenge: '작은 눈금이 없는 시계에서 정각을 나타내고, 6시부터 7시까지가 몇 시간인지 시계를 보고 고른다.' },
      activity: {
        title: '화면 끝 시각을 시계로 나타내기', tool: 'clock',
        teacher: '"솔이네 집은 저녁 7시까지 보기로 했어요. 짧은바늘은 어디에 올까요?" 바늘을 맞춘 뒤 "그 시각이 되면 무엇을 할까요?"라고 묻고 기다릴 반응("꺼요", "밥 먹어요")을 듣는다. 긴바늘과 짧은바늘을 헷갈려 긴바늘을 7에 놓는 학생에게 "시를 알려 주는 바늘은 짧은 바늘이에요. 긴바늘은 어디에 있어야 정각일까요?"라고 묻는다. "어른이 끄라고 해야만 끈다"는 생각에는 "시계를 보면 내가 먼저 알 수 있지 않을까요?"라고 되묻는다.',
        task: '솔이네 약속 시각을 시계 바늘로 나타내요.', levels: { easy: { hourOnly: true, hourZone: true }, base: { hourOnly: true }, challenge: { hourOnly: true, showMinuteMarks: false } },
        items: [
          { prompt: '7시에 꺼요. 7시를 맞춰요.', toolOptions: {}, target: { h: 7, m: 0 }, difficulty: 0.1 },
          { prompt: '6시에 켜요. 6시를 맞춰요.', toolOptions: {}, target: { h: 6, m: 0 }, difficulty: 0.15 },
          { prompt: '시계를 보고 끄는 시각을 골라요.', toolOptions: { readOnly: true, start: { h: 7, m: 0 }, ask: '솔이가 끄는 시각은?', choices: ['6시', '7시', '8시'] }, target: { pick: 1 }, difficulty: 0.15,
            levels: { challenge: { prompt: '6시에 켜서 7시에 꺼요. 몇 시간?', toolOptions: { ask: '6시부터 지금까지 몇 시간?', choices: ['1시간', '2시간', '7시간'] }, target: { pick: 0 } } },
            conclude: '약속한 끝 시각이 되면 시계를 보고 내가 먼저 꺼요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '7시가 되면 화면을 ___.', answer: '꺼요' }] },
      notes: '7시·6시는 솔이네 가상 약속(연습용 값)이다. 몇 시까지 보는 것이 좋은지 기준으로 말하지 않는다.',
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.activity.stop-signal', type: 'activity', title: '멈춤 구호와 동작 따라 하기',
      method: '멈춤 구호와 동작 따라 하기', tool: 'timer', minutes: 14,
      levels: { easy: '순서 카드 2장(손 떼요·화면 꺼요)을 맞추고, 연습 횟수를 2번으로 맞춘다.', base: '순서 카드 3장(손 떼요·화면 꺼요·기지개)을 맞추고, 연습을 3번 하도록 타이머를 맞춘다.', challenge: '순서 카드 3장을 맞추고, 3번 연습에 쉬는 칸까지 맞춘다. 짝 활동에서 친구가 신호를 내고 내가 멈춘다.' },
      activity: {
        title: '신호가 나면 멈추는 연습', tool: 'timer',
        teacher: '"화면 보는 흉내를 내다가 신호음이 나면 어떻게 할까요? 손 떼고! (두 손 번쩍) 화면 꺼요! (단추 누르는 손) 기지개! (팔 쭉)" 순서 카드를 맞춘 뒤 판의 신호음 단추를 켜고 타이머에 맞춰 반 전체가 세 번 해 본다. "끝까지 보고 나서 멈춰요"라는 학생에게 "신호가 났는데 끝까지 보면 그건 멈춘 걸까요?"라고 묻는다. 신호를 들으면 바로 손부터 떼는 것이 첫걸음이라는 점을 짚는다.',
        task: '멈춤 차례를 맞추고 타이머에 맞춰 연습해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '멈춤 차례로 카드를 놓아요.', toolOptions: { title: '멈춤 차례', cards: ['기지개 켜요', '손 떼요', '화면 꺼요'] }, target: { order: ['손 떼요', '화면 꺼요', '기지개 켜요'] }, difficulty: 0.1,
            levels: { easy: { prompt: '멈춤 차례로 카드를 놓아요(2장).', toolOptions: { cards: ['화면 꺼요', '손 떼요'] }, target: { order: ['손 떼요', '화면 꺼요'] } } } },
          { prompt: '멈춤 연습을 3번 하게 맞춰요.', toolOptions: { title: '멈춤 연습(우리 반 약속)', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            levels: { easy: { prompt: '멈춤 연습을 2번 하게 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '3번, 쉬기 10초로 맞춰요.', target: { plan: { rounds: 3, rest: 10 } } } } },
          { prompt: '짝이 신호를 내면 멈춰 봐요.', free: true, toolOptions: { doneLabel: '짝과 멈춤 놀이를 했어요' }, difficulty: 0.15, conclude: '신호가 나면 손 떼고, 화면 끄고, 기지개!' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '구호를 따라 써요.', text: '손 떼요, 화면 꺼요, ___!', answer: '기지개' }] },
      notes: '타이머 칸의 초와 횟수는 우리 반 연습 값이다. 신호음은 판의 신호음 단추를 켰을 때만 난다.',
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.activity.calm-words', type: 'activity', title: '아쉬운 마음 달래는 말',
      method: '끄라는 말 들었을 때 마음과 달래는 말 고르기', tool: 'emotion', minutes: 14,
      levels: { easy: '마음 얼굴 2개, 달래는 말 카드 3장(맞는 말 2장)에서 고르고, 놓으면 바로 맞는지 보인다.', base: '마음 얼굴 4개, 달래는 말 카드 5장(맞는 말 3장)에서 고른다.', challenge: '마음 얼굴 6개, 달래는 말 카드 6장에서 고르고, 끝에 달래는 말을 직접 지어 짝에게 말해 준다(짝 활동).' },
      activity: {
        title: '끌 시간에 마음 달래기', tool: 'emotion',
        teacher: '"엄마가 \'이제 끌 시간이야\' 했어요. 솔이 마음은 어떨까요?" 아쉽고 속상한 마음이 드는 것은 자연스럽다고 먼저 말해 준다. 그다음 "아쉬운 마음을 달래려면 나에게 무슨 말을 해 줄까요?"라고 묻는다. "더 하고 싶으면 떼를 써도 된다"는 학생에게 "떼를 쓰면 솔이 마음과 엄마 마음은 어떻게 될까요?"라고 되묻는다. "내일 또 보자", "숨 크게 쉬자"를 반 전체가 따라 말한다.',
        task: '끌 시간에 솔이 마음을 고르고, 달래는 말을 골라요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '끌 시간이래요. 솔이 마음은?', toolOptions: { mode: 'match', slots: [{ id: 'kid', label: '끌 시간 솔이' }], cards: ['아쉬움', '신남', '속상함', '편안함'] }, target: { match: { kid: ['아쉬움', '속상함'] } }, difficulty: 0.1,
            levels: { easy: { prompt: '끌 시간이래요. 솔이 마음은?(2개)', toolOptions: { cards: ['아쉬움', '신남'] }, target: { match: { kid: '아쉬움' } } }, challenge: { toolOptions: { cards: ['아쉬움', '신남', '속상함', '편안함', '놀람', '고마움'] } } } },
          { prompt: '달래는 말을 골라 담아요.', toolOptions: { mode: 'pick', basket: '달래는 말', cards: [C('tmr', '"내일 또 보자"'), C('more', '"싫어 더 볼래"'), C('breath', '"숨 크게 쉬자"'), C('throw', '"던져 버릴래"'), C('play', '"블록 하자"')] }, target: { pick: ['tmr', 'breath', 'play'] }, difficulty: 0.15,
            levels: { easy: { prompt: '달래는 말을 골라 담아요(3장).', toolOptions: { cards: [C('tmr', '"내일 또 보자"'), C('more', '"싫어 더 볼래"'), C('breath', '"숨 크게 쉬자"')] }, target: { pick: ['tmr', 'breath'] } },
              challenge: { toolOptions: { cards: [C('tmr', '"내일 또 보자"'), C('more', '"싫어 더 볼래"'), C('breath', '"숨 크게 쉬자"'), C('throw', '"던져 버릴래"'), C('play', '"블록 하자"'), C('cry', '"울어 버릴래"')] } } } },
          { prompt: '끌 시간이에요. 어떻게 해요?', toolOptions: { mode: 'branch', situation: '엄마가 "끌 시간이야" 해요.', choices: [{ id: 'fuss', text: '떼를 써요', result: '엄마도 솔이도 속상해요.', mood: '속상함' }, { id: 'calm', text: '숨 쉬고 꺼요', result: '마음이 가라앉고 놀이를 해요.', mood: '편안함' }] }, target: { choice: 'calm' }, difficulty: 0.2,
            levels: { challenge: { toolOptions: { choices: [{ id: 'fuss', text: '떼를 써요', result: '엄마도 솔이도 속상해요.', mood: '속상함' }, { id: 'calm', text: '숨 쉬고 꺼요', result: '마음이 가라앉고 놀이를 해요.', mood: '편안함' }, { id: 'hide', text: '몰래 더 봐요', result: '약속이 깨져 믿음이 줄어요.', mood: '걱정' }] } } } },
          { prompt: '달래는 말을 지어 짝에게 해요.', free: true, toolOptions: { mode: 'pick', cards: [], doneLabel: '짝에게 달래는 말을 했어요' }, difficulty: 0.2, conclude: '아쉬운 마음은 "내일 또 보자", "숨 크게 쉬자"로 달래요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '아쉬울 때 나에게 해 줄 말에 ○ 해요.', options: ['"내일 또 보자"', '"싫어 더 볼래"'], answer: '"내일 또 보자"' }] },
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.activity.time-basket', type: 'activity', title: '오늘 화면 시간 바구니',
      method: '하루 화면 시간 바구니 채우기', tool: 'economy', minutes: 14,
      levels: { easy: '카드 3장을 \'들어가요·넘쳐요\'로 나누고, 놓으면 바로 맞는지 보인다(바구니에 하나만 담는 셈).', base: '카드 4장을 남은 시간에 들어가는지 넘치는지 나눈다.', challenge: '"게임 20분은 꼭"처럼 꼭 볼 것을 먼저 넣은 뒤, 남은 시간에 들어가는 카드를 가린다(카드 5장).' },
      activity: {
        title: '30분 바구니에 들어갈까?', tool: 'economy',
        teacher: '"솔이네 약속은 오늘 화면 시간 30분이에요. 바구니가 30분이면, 이 영상은 들어갈까요, 넘칠까요?" 카드마다 손가락으로 10분씩 세어 보게 한다. "조금 넘쳐도 괜찮아요"라는 학생에게 "바구니가 넘치면 물이 쏟아지듯, 약속 시간이 넘치면 무엇이 줄어들까요?(놀이·잠·가족과 이야기)"라고 묻는다. 30분은 솔이네 가상 약속이고, 집마다 약속은 가족과 함께 정한다고 밝힌다.',
        task: '바구니에 남은 시간을 보고 들어가요·넘쳐요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          FIT('30분 바구니예요. 나누어요.', ['들어가요', '넘쳐요'], [C('book', '그림책 10분'), C('cart', '만화 40분'), C('song', '노래 20분'), C('long', '영상 60분')], { book: '들어가요', song: '들어가요', cart: '넘쳐요', long: '넘쳐요' }, 0.1,
            { levels: { easy: { prompt: '30분 바구니예요. 나누어요(3장).', toolOptions: { cards: [C('book', '그림책 10분'), C('cart', '만화 40분'), C('song', '노래 20분')] }, target: { sort: { 들어가요: ['book', 'song'], 넘쳐요: ['cart'] } } } } }),
          FIT('10분 담았어요. 남은 20분엔?', ['들어가요', '넘쳐요'], [C('song', '노래 10분'), C('game', '게임 30분'), C('pic', '그림책 20분'), C('cart', '만화 40분')], { song: '들어가요', pic: '들어가요', game: '넘쳐요', cart: '넘쳐요' }, 0.15,
            { levels: { easy: { prompt: '10분 담았어요. 남은 20분엔?(3장)', toolOptions: { cards: [C('song', '노래 10분'), C('game', '게임 30분'), C('pic', '그림책 20분')] }, target: { sort: { 들어가요: ['song', 'pic'], 넘쳐요: ['game'] } } },
              challenge: { prompt: '게임 20분은 꼭! 남은 10분엔?', toolOptions: { cards: [C('song', '노래 10분'), C('vid', '영상 30분'), C('pic', '그림책 20분'), C('cart', '만화 40분'), C('dance', '율동 10분')] }, target: { sort: { 들어가요: ['song', 'dance'], 넘쳐요: ['vid', 'pic', 'cart'] } } } } }),
          FIT('20분 담았어요. 남은 10분엔?', ['들어가요', '넘쳐요'], [C('dance', '율동 10분'), C('cart', '만화 20분'), C('song', '노래 10분'), C('game', '게임 30분')], { dance: '들어가요', song: '들어가요', cart: '넘쳐요', game: '넘쳐요' }, 0.2,
            { levels: { easy: { prompt: '20분 담았어요. 남은 10분엔?(3장)', toolOptions: { cards: [C('dance', '율동 10분'), C('cart', '만화 20분'), C('game', '게임 30분')] }, target: { sort: { 들어가요: ['dance'], 넘쳐요: ['cart', 'game'] } } } },
              conclude: '바구니가 차면 오늘 화면 시간은 끝! 남은 건 내일 봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '10분 남았어요. 들어가는 것에 ○ 해요.', options: ['노래 10분', '만화 40분'], answer: '노래 10분' }] },
      notes: '시장 놀이판의 예산 막대는 돈(원)만 세므로, 시간 바구니는 카드 나누기(들어가요·넘쳐요)로 꾸몄다. 30분은 가상 약속(연습용 값)이고 권장 시간이 아니다.',
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.activity.offplay', type: 'activity', title: '화면 끄고 할 놀이 그물',
      method: '화면 없는 놀이 그림 마인드맵', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장 가운데 화면 없는 놀이 3장을 담고, 놓으면 바로 맞는지 보인다.', base: '카드 6장 가운데 화면 없는 놀이 4장을 담고, 놀이를 밖·안 가지로 나눈다.', challenge: '카드가 더 많고(화면 놀이 카드 섞임), 가족과 함께 할 놀이 바구니도 채운다.' },
      activity: {
        title: '화면 끄고 할 놀이 모으기', tool: 'mindmap',
        teacher: '"화면을 끄면 무엇을 하고 놀까요?" 가운데 \'화면 끄고 할 놀이\'에 카드를 담을 때마다 그 놀이를 하는 흉내를 낸다. "화면이 없으면 심심해서 놀 수 없어요"라는 학생에게 "쉬는 시간에 우리 반은 화면 없이 무엇을 하고 놀았나요?"라고 묻는다. 담은 놀이 가운데 오늘 집에서 할 놀이 하나를 손가락으로 가리켜 짝에게 말하게 한다(정답이 아니라 내 고르기).',
        task: '화면을 끄고 할 놀이를 골라 가지에 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          { prompt: '화면 없는 놀이만 담아요.', toolOptions: { mode: 'pick', topic: '화면 끄고 할 놀이', basket: '화면 끄고 할 놀이', cards: [C('block', '블록 쌓기'), C('video', '영상 보기'), C('rope', '줄넘기'), C('draw', '그림 그리기'), C('game', '게임하기'), C('book', '책 읽기')] }, target: { pick: ['block', 'rope', 'draw', 'book'] }, difficulty: 0.1,
            levels: { easy: { prompt: '화면 없는 놀이만 담아요(4장).', toolOptions: { cards: [C('block', '블록 쌓기'), C('video', '영상 보기'), C('rope', '줄넘기'), C('draw', '그림 그리기')] }, target: { pick: ['block', 'rope', 'draw'] } },
              challenge: { prompt: '화면 없는 놀이만 담아요(8장).', toolOptions: { cards: [C('block', '블록 쌓기'), C('video', '영상 보기'), C('rope', '줄넘기'), C('draw', '그림 그리기'), C('game', '게임하기'), C('book', '책 읽기'), C('fold', '종이접기'), C('tab', '태블릿 놀이')] }, target: { pick: ['block', 'rope', 'draw', 'book', 'fold'] } } } },
          SORT2(['밖에서 놀아요', '안에서 놀아요'], '놀이를 밖·안으로 나누어요.', { topic: '화면 없는 놀이' }, [C('rope', '줄넘기'), C('ball', '공놀이'), C('tag', '술래잡기')], [C('block', '블록 쌓기'), C('fold', '종이접기'), C('book', '책 읽기')], [C('kite', '연날리기'), C('clay', '찰흙 놀이')], 0.15),
          { prompt: '가족과 할 놀이를 담아요.', toolOptions: { mode: 'pick', topic: '가족과 할 놀이', basket: '가족과 할 놀이', cards: [C('yut', '윷놀이'), C('solo', '혼자 영상'), C('catch', '공 주고받기'), C('sgame', '혼자 게임')] }, target: { pick: ['yut', 'catch'] }, difficulty: 0.2,
            levels: { challenge: { prompt: '가족과 할 놀이를 담아요(6장).', toolOptions: { cards: [C('yut', '윷놀이'), C('solo', '혼자 영상'), C('catch', '공 주고받기'), C('sgame', '혼자 게임'), C('cook', '함께 요리'), C('word', '끝말잇기')] }, target: { pick: ['yut', 'catch', 'cook', 'word'] } } },
            conclude: '화면을 끄면 블록·줄넘기·그림·책, 가족과 윷놀이도 할 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '화면을 끄고 하고 싶은 놀이를 그려요.' }],
        easy: [{ type: 'choice', prompt: '화면 없는 놀이에 ○ 해요.', options: ['줄넘기', '게임하기'], answer: '줄넘기' }] },
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.wrap.promise', type: 'wrap', title: '우리 집 화면 약속 점검표',
      method: '우리 집 화면 약속 그림 점검표', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 점검표 칸을 하나씩 읽어 주고, 지킬 약속에 하나 이상 표시하게 한다.', base: '네 칸을 스스로 듣고 오늘부터 지킬 약속에 표시한다.', challenge: '표시한 약속을 가족에게 어떻게 말할지 한 문장으로 연습한다(예: "밥 먹을 땐 꺼요").' },
      wrap: {
        teacher: '"오늘부터 우리 집에서 지킬 화면 약속은 무엇일까요?" 점검표 칸을 함께 읽고 지킬 약속에 표시하게 한다. 맞고 틀린 것이 없는 내 약속 고르기라고 말해 준다. 출구 2번에서 "더 봐요"를 고른 학생에게 "알람은 약속 시간이 다 됐다는 신호예요"라고 다시 짚는다. 마지막에 표시한 약속 하나를 가족에게 말할 문장으로 짝과 연습한다.',
        exitTicket: [
          CHECK('우리 집 화면 약속', [C('meal', '밥 땐 꺼요'), C('time', '약속 시간 지켜요'), C('bed', '자기 전 꺼요'), C('pick', '정한 것만 봐요')], '오늘부터 지킬 약속에 표시해요.'),
          { type: 'choice', prompt: '알람이 울리면 어떻게 해요?', options: ['더 봐요', '스스로 꺼요', '떼써요'], answer: 1, difficulty: 0.1, explain: '알람이 울리면 약속 시간이 다 된 거예요. 스스로 꺼요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 집 화면 약속',
        items: [
          { type: 'check', prompt: '내가 지킬 약속에 ✓ 해요.', options: ['밥 먹을 땐 화면을 꺼요', '약속 시간이 되면 스스로 꺼요', '자기 전에는 화면을 꺼요'] },
          { type: 'draw', prompt: '약속을 지키고 화면을 끈 내 모습을 그려요.' },
        ],
        easy: { note: '"알람 울리면, 스스로 꺼요"를 떠올려요.', items: [{ type: 'draw', prompt: '화면을 끄는 손을 그려요.' }] },
      },
      notes: '점검표는 오늘부터 지킬 약속 고르기다. 지금 집에서 몇 시간 보는지는 묻지 않는다.',
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.wrap.chant', type: 'wrap', title: '"알람 울리면, 손 떼고, 끄기!"',
      method: '멈춤 구호 따라 하며 스스로 점검', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 구호 카드를 하나씩 들어 보이며 함께 외치고, 점검 칸은 첫 줄만 함께 읽고 표시한다.', base: '구호 카드 세 장의 차례를 맞추고, 점검 칸 두 줄에 스스로 표시한다.', challenge: '구호마다 어울리는 동작을 내가 만들어 반 앞에서 보여 준다.' },
      wrap: {
        teacher: '"알람 울리면! (귀에 손) 손 떼고! (두 손 번쩍) 끄기! (단추 누르는 손)" 구호 카드를 차례대로 놓은 뒤 반 전체가 동작과 함께 세 번 외친다. 그다음 오늘 연습에서 신호를 듣고 스스로 멈춰 본 것을 점검 칸에 표시하게 한다. 출구 3번에서 "어른이 끄라고 해야만 꺼요"를 고른 학생에게 "알람을 들은 내가 먼저 끌 수 있어요"라고 말해 준다.',
        exitTicket: [
          CHANT('멈춤 구호', ['알람 울리면', '손 떼고', '끄기!']),
          SELF('오늘 연습 점검', ['신호를 들었어요', '스스로 멈췄어요'], '오늘 연습에서 한 것에 표시해요.'),
          { type: 'choice', prompt: '화면은 누가 끌 수 있어요?', options: ['어른만 꺼요', '나도 끌 수 있어요'], answer: 1, difficulty: 0.1, explain: '알람을 들으면 내가 스스로 끌 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '알람 울리면, 손 떼고, 끄기!',
        items: [
          { type: 'blank', prompt: '구호를 따라 써요.', text: '알람 울리면, 손 떼고, ___!', answer: '끄기' },
          { type: 'draw', prompt: '알람을 듣고 손을 뗀 모습을 그려요.' },
        ],
      },
    }),
    PROM({
      id: 'saf-cyber.e12.screen-promise.wrap.feel', type: 'wrap', title: '화면 끄고 논 뒤 마음',
      method: '화면을 끈 뒤 내 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '마음 얼굴 2개(신남·속상함) 가운데 블록 놀이하는 솔이 마음을 고른다.', base: '마음 얼굴 4개 가운데 고른다.', challenge: '고른 뒤 그 마음의 까닭을 한 문장으로 말한다(교사 진행).' },
      wrap: {
        teacher: '"화면을 끄고 친구와 블록 놀이를 한 솔이는 어떤 마음일까요?" 그림을 보고 마음 얼굴을 고르게 한 뒤 "왜 그 마음일까요?"라고 묻는다(기다릴 반응: "친구랑 같이 놀아서요"). 쉬움 반은 신남·속상함 두 얼굴만 가리키며 묻는다. "화면이 없으면 심심해요"를 고른 학생에게 "솔이가 쌓은 블록 탑을 보세요. 심심해 보이나요?"라고 되묻는다. 마지막에 오늘 공부를 마친 내 마음을 고른다.',
        exitTicket: [
          FEEL('블록 놀이하는 솔이 마음은?', '블록 놀이 솔이', ['신남', '속상함', '편안함', '화남'], ['신남', '편안함']),
          { type: 'choice', prompt: '화면을 끄면 무엇을 할 수 있어요?', options: ['블록 놀이', '아무것도 못 해요'], answer: 0, difficulty: 0.1, explain: '화면을 끄면 블록·줄넘기·그림 그리기를 할 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '화면 끄고 논 날',
        items: [
          { type: 'choice', prompt: '화면을 끄고 친구와 놀면 어떤 마음일까요?', options: ['신나요', '심심해요'], answer: '신나요' },
          { type: 'draw', prompt: '화면을 끄고 친구와 노는 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 1학년 · 눈과 몸 쉬어 주기
  const EYES = MOD('saf-cyber.e12.eyes-body', [1]);
  const T_EYES = [
    EYES({
      id: 'saf-cyber.e12.eyes-body.intro.sore', type: 'intro', title: '오래 본 친구 몸에서 뻐근한 곳',
      method: '몸 그림에서 뻐근한 곳 누르기', tool: 'body', minutes: 5,
      levels: { easy: '교사가 눈과 목 두 곳만 짚어 보이고 함께 자기 몸을 짚는다.', base: '시연을 보고 눈·목·허리·손목 네 곳을 차례로 짚는다.', challenge: '네 곳을 짚은 뒤 왜 그곳이 아플지 한마디씩 말한다.' },
      intro: {
        teacher: '"하늘이가 고개를 숙이고 태블릿을 아주 오래 봤어요. 하늘이 몸 어디가 아플 것 같아요?" 시연 단추로 종이 몸에서 눈·목, 그다음 허리·손목이 골라지는 모습을 보이고, 학생들은 자기 몸의 같은 곳을 손으로 짚는다. "가까이 볼수록 잘 보여서 좋아요"라는 말이 나오면 "가까이 오래 보면 눈은 쉴 수 있을까요?"라고 되묻는다. 오늘은 눈과 몸을 쉬어 주는 법을 배운다고 밝힌다.',
        student: '하늘이 몸에서 아플 것 같은 곳을 내 몸에서도 짚어요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '목', '허리', '손목', '무릎', '발목'], names: true }, sequence: [{ parts: ['눈', '목'] }, { parts: ['눈', '목', '허리', '손목'] }] },
        art: { draw: 'a paper child hunched over a glowing paper tablet with a bent neck and curved back, small paper zigzag marks near the eyes, neck, lower back and wrist', banner: '오래 보면 뻐근해요' },
      },
      notes: '하늘이는 가상 친구다. 학생에게 자기가 아팠던 일을 자세히 묻지 않는다.',
    }),
    EYES({
      id: 'saf-cyber.e12.eyes-body.intro.tired-eyes', type: 'intro', title: '눈이 피곤하다는 신호 카드',
      method: '눈이 피곤하다는 신호 카드 고르기', tool: 'wordcards', minutes: 5,
      levels: { easy: '교사가 카드 세 장(눈 비벼요·웃어요·눈물 나요)만 읽어 주고 한 장을 함께 고른다.', base: '시연을 보고 카드 네 장 가운데 신호 세 장을 말한다.', challenge: '눈이 피곤할 때 하는 몸짓을 하나 더 말하고 몸으로 보여 준다.' },
      intro: {
        teacher: '"눈이 \'나 피곤해\' 하고 보내는 신호가 있어요. 어떤 것일까요?" 카드를 하나씩 읽어 주고 그 몸짓을 함께 흉내 낸다(눈 비비기·찡그리기). 시연 단추로 신호 카드 세 장이 바구니에 담기는 모습을 보인다. "웃어요"를 신호라고 하는 학생에게 "웃을 때 눈이 아픈가요?"라고 묻는다. "눈이 아파도 다 보고 쉬면 돼요"라는 말에는 "신호가 왔을 때 바로 쉬면 눈이 덜 아파요"라고 짚는다.',
        student: '눈이 피곤할 때 보내는 신호를 몸짓으로 따라 해요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '눈이 피곤해요', cards: [C('rub', '눈 비벼요'), C('smile', '웃어요'), C('tear', '눈물 나요'), C('frown', '찡그려요')], shuffle: false }, sequence: [{ pick: ['rub'] }, { pick: ['rub', 'tear', 'frown'] }] },
        art: { draw: 'a paper child rubbing tired eyes with both fists in front of a paper screen, with small paper teardrops and a sleepy paper moon', banner: '눈이 보내는 신호' },
      },
      notes: '낱말 카드 교구는 고르기(pick) 판만 쓴다 — 영어 발음이 나는 뒤집기·듣기 판은 쓰지 않는다.',
    }),
    EYES({
      id: 'saf-cyber.e12.eyes-body.activity.posture', type: 'activity', title: '바른 자세·안 바른 자세 나누기',
      method: '바른 자세와 안 바른 자세 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 가지에 놓으면 초록 테두리가 생기고 틀리면 되돌아온다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "소파에 눕기"처럼 헷갈리는 카드가 섞인다. 다 놓은 뒤 안돼요 자세를 바른 자세로 몸으로 바꿔 보인다(교사 진행).' },
      activity: {
        title: '화면 볼 때 자세 두 가지로 나누기', tool: 'mindmap',
        teacher: '"하늘이가 이렇게 앉아서 보면 좋아요일까요, 안돼요일까요?" 카드를 놓을 때마다 반 전체가 그 자세를 흉내 내 본다. "누워서 보면 편하니까 몸에 좋아요"라는 학생에게 "누워서 들고 보면 팔과 목은 어떻게 될까요? 떨어뜨리면 얼굴은요?"라고 묻는다. 다 나눈 뒤 안돼요 자세 하나를 골라 반 전체가 허리 펴고 앉는 자세로 바꿔 본다.',
        task: '하늘이 자세 카드를 좋아요·안돼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(OKNO, '앉아서 볼 때 자세를 나누어요.', { topic: '앉아서 볼 때' }, [C('straight', '허리 펴고 앉기'), C('desk', '책상에 두기'), C('feet', '발 바닥에 대기')], [C('lie', '엎드려 보기'), C('bend', '고개 푹 숙이기'), C('curl', '등 구부리기')], [C('sofa', '소파에 눕기'), C('legs', '다리 꼬고 숙이기')], 0.1),
          SORT2(OKNO, '오래 볼 때 자세를 나누어요.', { topic: '오래 볼 때' }, [C('stand', '일어나 걷기'), C('stretch', '어깨 펴기'), C('look', '멀리 보기')], [C('still', '꼼짝 않기'), C('back', '누워서 보기'), C('close', '코앞에 대기')], [C('side', '옆으로 눕기'), C('chin', '턱 괴고 보기')], 0.15),
          SORT2(OKNO, '차·이불에서 자세를 나누어요.', { topic: '차·이불에서' }, [C('carlook', '창밖 보기'), C('sit', '바로 앉기'), C('off', '화면 끄기')], [C('carbend', '숙이고 보기'), C('blanket', '이불 속 보기'), C('dark', '불 끄고 보기')], [C('pillow', '베개 기대기'), C('side2', '모로 누워 보기')], 0.2, { conclude: '허리를 펴고 앉아, 화면은 책상에 두고 봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '바른 자세는 ○, 아니면 ×를 써요.', columns: ['자세', '○ / ×'], cells: [['허리 펴고 앉기', ''], ['엎드려 보기', ''], ['고개 푹 숙이기', ''], ['책상에 두고 보기', '']], answer: '○, ×, ×, ○' }],
        easy: [{ type: 'choice', prompt: '바른 자세에 ○ 해요.', options: ['허리 펴고 앉기', '엎드려 보기'], answer: '허리 펴고 앉기' }] },
    }),
    EYES({
      id: 'saf-cyber.e12.eyes-body.activity.distance', type: 'activity', title: '화면 볼 때 지킬 것 점검표',
      method: '화면 볼 때 지킬 것 점검표', tool: 'kitchen', minutes: 14,
      levels: { easy: '점검표 항목 3개 가운데 지킬 것만 표시한다.', base: '항목 5개 가운데 지킬 것만 표시한다.', challenge: '항목 6개(헷갈리는 항목 섞임) 가운데 지킬 것만 표시하고, 마지막 짝 활동에서 팔을 뻗어 실제 거리를 재 본다.' },
      activity: {
        title: '화면 볼 때 지킬 것 고르기', tool: 'kitchen',
        teacher: '"하늘이가 화면을 볼 때 지키면 좋은 것에만 표시해 볼까요?" 항목을 하나씩 읽어 주고, 표시하기 전에 손을 들어 좋아요/안돼요를 먼저 말하게 한다. "가까이 볼수록 잘 보여서 좋아요"라는 학생에게 "팔을 쭉 뻗어 보세요. 그만큼 떨어지면 눈이 덜 힘들어요"라고 몸으로 보여 준다. "어두운 방에서 보면 더 잘 보여요"에는 "화면만 밝고 방이 깜깜하면 눈은 어떨까요?"라고 되묻는다.',
        task: '하늘이가 화면 볼 때 지킬 것에만 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '거리를 지키는 것에 표시해요.', toolOptions: { mode: 'checklist', title: '화면과 거리', items: [C('arm', '팔 길이 떨어져요'), C('nose', '코앞에 대요'), C('desk', '책상에 둬요'), C('lap', '얼굴에 붙여요'), C('far', '멀찍이 봐요')] }, target: { checklist: ['arm', 'desk', 'far'] }, difficulty: 0.1,
            levels: { easy: { prompt: '거리를 지키는 것에 표시해요(3개).', toolOptions: { items: [C('arm', '팔 길이 떨어져요'), C('nose', '코앞에 대요'), C('desk', '책상에 둬요')] }, target: { checklist: ['arm', 'desk'] } },
              challenge: { prompt: '거리를 지키는 것에 표시해요(6개).', toolOptions: { items: [C('arm', '팔 길이 떨어져요'), C('nose', '코앞에 대요'), C('desk', '책상에 둬요'), C('lap', '얼굴에 붙여요'), C('far', '멀찍이 봐요'), C('zoom', '글씨 크게 해요')] }, target: { checklist: ['arm', 'desk', 'far', 'zoom'] } } } },
          { prompt: '밝기를 지키는 것에 표시해요.', toolOptions: { mode: 'checklist', title: '방 밝기', items: [C('light', '불 켜고 봐요'), C('dark', '어두운 방'), C('day', '밝은 곳에서'), C('blanket', '이불 속에서'), C('lamp', '밝은 책상')] }, target: { checklist: ['light', 'day', 'lamp'] }, difficulty: 0.15,
            levels: { easy: { prompt: '밝기를 지키는 것에 표시해요(3개).', toolOptions: { items: [C('light', '불 켜고 봐요'), C('dark', '어두운 방'), C('day', '밝은 곳에서')] }, target: { checklist: ['light', 'day'] } },
              challenge: { prompt: '밝기를 지키는 것에 표시해요(6개).', toolOptions: { items: [C('light', '불 켜고 봐요'), C('dark', '어두운 방'), C('day', '밝은 곳에서'), C('blanket', '이불 속에서'), C('lamp', '밝은 책상'), C('car', '깜깜한 차 안')] }, target: { checklist: ['light', 'day', 'lamp'] } } } },
          { prompt: '쉬는 법을 지키는 것에 표시해요.', toolOptions: { mode: 'checklist', title: '쉬어 가기', items: [C('stop', '중간에 쉬어요'), C('rub', '눈 비벼요'), C('window', '창밖 봐요'), C('nonstop', '쉬지 않아요'), C('blink', '눈 깜빡여요')] }, target: { checklist: ['stop', 'window', 'blink'] }, difficulty: 0.2,
            levels: { easy: { prompt: '쉬는 법을 지키는 것에 표시해요(3개).', toolOptions: { items: [C('stop', '중간에 쉬어요'), C('rub', '눈 비벼요'), C('window', '창밖 봐요')] }, target: { checklist: ['stop', 'window'] } },
              challenge: { prompt: '쉬는 법을 지키는 것에 표시해요(6개).', toolOptions: { items: [C('stop', '중간에 쉬어요'), C('rub', '눈 비벼요'), C('window', '창밖 봐요'), C('nonstop', '쉬지 않아요'), C('blink', '눈 깜빡여요'), C('drink', '물 마셔요')] }, target: { checklist: ['stop', 'window', 'blink', 'drink'] } } } },
          { prompt: '팔을 뻗어 거리를 재 봐요.', free: true, talk: true, difficulty: 0.2, conclude: '팔 길이만큼 떨어져, 밝은 곳에서, 중간에 쉬며 봐요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '화면은 얼마나 떨어져서 봐요?', options: ['팔 길이만큼', '코앞에 붙여서'], answer: '팔 길이만큼' }] },
      notes: '\'팔 길이만큼\'·\'밝은 곳에서\'는 일반 수칙이다(머리 주석 사람 확인 목록). 학생이 자기 집에서 어떻게 보는지 점수 매기지 않는다 — 하늘이가 지킬 것 고르기다.',
    }),
    EYES({
      id: 'saf-cyber.e12.eyes-body.activity.eye-break', type: 'activity', title: '눈 쉬기 체조 타이머',
      method: '눈 쉬기 체조 구간 타이머', tool: 'timer', minutes: 14,
      levels: { easy: '순서 카드 2장(멀리 보기·눈 감고 쉬기)을 맞추고, 체조를 2번 하도록 맞춘다.', base: '순서 카드 3장(멀리 보기·눈 깜빡이기·눈 감고 쉬기)을 맞추고 체조를 3번 하도록 맞춘다.', challenge: '순서 카드 3장을 맞추고 3번에 쉬는 칸까지 맞춘 뒤, 짝 활동에서 타이머를 켜고 짝을 이끈다.' },
      activity: {
        title: '눈 쉬기 체조 차례와 횟수', tool: 'timer',
        teacher: '"눈이 쉬려면 어떻게 할까요? 멀리 보기! (창밖 나무 보기) 깜빡깜빡! (눈 깜빡이기) 눈 감고 쉬기! (두 손으로 눈 덮기)" 순서 카드를 맞춘 뒤 타이머에 맞춰 반 전체가 체조를 한다. "눈을 비비면 시원해요"라는 학생에게 "손에 묻은 먼지가 눈에 들어가면 어떻게 될까요? 비비지 말고 감아서 쉬어요"라고 말해 준다. 타이머의 초와 횟수는 우리 반 연습 값이라고 밝힌다.',
        task: '눈 쉬기 차례를 맞추고, 타이머에 맞춰 체조해요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '눈 쉬기 차례로 카드를 놓아요.', toolOptions: { title: '눈 쉬기 차례', cards: ['눈 감고 쉬기', '멀리 보기', '눈 깜빡이기'] }, target: { order: ['멀리 보기', '눈 깜빡이기', '눈 감고 쉬기'] }, difficulty: 0.1,
            levels: { easy: { prompt: '눈 쉬기 차례로 놓아요(2장).', toolOptions: { cards: ['눈 감고 쉬기', '멀리 보기'] }, target: { order: ['멀리 보기', '눈 감고 쉬기'] } } } },
          { prompt: '눈 체조를 3번 하게 맞춰요.', toolOptions: { title: '눈 쉬기 체조(우리 반 연습)', plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.15,
            levels: { easy: { prompt: '눈 체조를 2번 하게 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '3번, 쉬기 10초로 맞춰요.', target: { plan: { rounds: 3, rest: 10 } } } } },
          { prompt: '타이머를 켜고 짝과 체조해요.', free: true, toolOptions: { doneLabel: '짝과 눈 쉬기 체조를 했어요' }, difficulty: 0.15, conclude: '멀리 보고, 깜빡이고, 눈 감고 쉬어요. 비비지 않아요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '멀리 보기, 눈 깜빡이기, 눈 감고 ___.', answer: '쉬기' }] },
      notes: '쉬는 시간의 길이(초)는 우리 반 연습 값이다 — 몇 초가 기준인지 말하지 않는다(머리 주석 사람 확인).',
    }),
    EYES({
      id: 'saf-cyber.e12.eyes-body.activity.stretch', type: 'activity', title: '목·어깨·손목 짚고 펴기',
      method: '몸 부위 짚고 펴기 동작 따라 하기', tool: 'body', minutes: 14,
      levels: { easy: '고를 칸이 적고(4칸) 짚은 곳의 이름이 바로 보인다.', base: '이름 없이 6칸에서 짚고, 마지막에 펼 곳 세 곳을 한 번에 짚는다.', challenge: '팔꿈치·허리처럼 헷갈리는 곳이 더 있는 몸에서 짚는다. 곳마다 펴는 동작을 내가 바꿔 만들어 보인다(교사 진행).' },
      activity: {
        title: '짚은 곳 펴기 체조', tool: 'body',
        teacher: '"하늘이가 오래 본 뒤 몸을 펴려고 해요. 고개를 천천히 돌리는 곳은 어디일까요?" 종이 몸을 짚을 때마다 반 전체가 그곳을 펴는 동작을 소리 안내("하나, 둘, 셋")에 맞춰 따라 한다. "아프면 세게 꺾어요"라는 학생에게 "세게 꺾으면 더 아플 수 있어요. 천천히 부드럽게 해요"라고 말해 준다. 아픈 곳이 계속 아프면 어른께 말한다는 점을 짚는다.',
        task: '펴기 동작을 할 곳을 짚고 따라 해요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '고개 돌리기 할 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['눈', '목', '무릎', '발목', '어깨', '손목'] }, target: { parts: ['목'] }, difficulty: 0.1,
            levels: { easy: { toolOptions: { parts: ['목', '무릎', '발목', '눈'] } }, challenge: { toolOptions: { parts: ['눈', '목', '무릎', '발목', '어깨', '손목', '팔꿈치', '허리'] } } } },
          { prompt: '어깨 돌리기 할 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '무릎', '발목', '눈', '손목'] }, target: { parts: ['어깨'] }, difficulty: 0.15,
            levels: { easy: { toolOptions: { parts: ['어깨', '무릎', '발목', '눈'] } }, challenge: { toolOptions: { parts: ['목', '어깨', '무릎', '발목', '눈', '손목', '팔꿈치', '허리'] } } } },
          { prompt: '손목 털기 할 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['손목', '어깨', '무릎', '발목', '눈', '목'] }, target: { parts: ['손목'] }, difficulty: 0.15,
            levels: { easy: { toolOptions: { parts: ['손목', '무릎', '발목', '눈'] } }, challenge: { toolOptions: { parts: ['손목', '어깨', '무릎', '발목', '눈', '목', '팔꿈치', '허리'] } } } },
          { prompt: '오래 본 뒤 펼 곳 세 곳을 짚어요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '손목', '무릎', '발목', '눈'] }, target: { parts: ['목', '어깨', '손목'] }, difficulty: 0.2,
            hints: ['오늘 펴기 체조를 한 곳을 떠올려요.', '고개·어깨·손을 돌리고 턴 곳이에요.', '목·어깨·손목을 골라요.'],
            levels: { easy: { toolOptions: { parts: ['목', '어깨', '손목', '무릎'] } }, challenge: { toolOptions: { parts: ['목', '어깨', '손목', '무릎', '발목', '눈', '팔꿈치', '허리'] } } },
            conclude: '오래 본 뒤에는 목·어깨·손목을 천천히 펴요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '오래 본 뒤 고개를 천천히 돌려 펴는 곳은?', options: ['목', '무릎'], answer: '목' }] },
      notes: '종이 몸에는 손·손가락 칸이 없어 손목으로 짚고, 손가락 펴기는 학생이 자기 손으로 한다.',
    }),
    EYES({
      id: 'saf-cyber.e12.eyes-body.wrap.eye-word', type: 'wrap', title: '"고마워 눈아" 마음 전하기',
      method: '내 눈에게 마음 전하기', tool: 'emotion', minutes: 6,
      levels: { easy: '마음 얼굴 2개(편안함·화남) 가운데 쉬고 난 눈의 마음을 고른다.', base: '마음 얼굴 4개 가운데 고른다.', challenge: '고른 뒤 내 눈을 지킬 약속 한 가지를 말한다(교사 진행).' },
      wrap: {
        teacher: '"눈 쉬기 체조를 마친 하늘이 눈은 어떤 마음일까요?" 마음 얼굴을 고른 뒤 두 손으로 눈을 살짝 덮고 "고마워 눈아" 하고 소리 내어 말하게 한다. 쉬움 반은 편안함·화남 두 얼굴만 가리키며 묻는다. 출구 2번에서 "눈 비비며 봐요"를 고른 학생에게 "피곤할 땐 비비지 말고 감아서 쉬어요"라고 말해 준다. 도전 반은 내 눈을 지킬 약속 한 가지를 짝에게 말한다.',
        exitTicket: [
          FEEL('쉬고 난 하늘이 눈 마음은?', '쉬고 난 눈', ['편안함', '화남', '고마움', '걱정'], ['편안함', '고마움']),
          { type: 'choice', prompt: '눈이 피곤하면 어떻게 해요?', options: ['멀리 보며 쉬어요', '눈 비비며 봐요'], answer: 0, difficulty: 0.1, explain: '멀리 보고 깜빡이고 눈을 감고 쉬어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '고마워 눈아',
        items: [
          { type: 'blank', prompt: '내 눈에게 해 줄 말을 써요.', text: '___ 눈아!', answer: '고마워' },
          { type: 'draw', prompt: '멀리 보며 눈을 쉬는 내 모습을 그려요.' },
        ],
      },
    }),
    EYES({
      id: 'saf-cyber.e12.eyes-body.wrap.self-check', type: 'wrap', title: '오늘 쉬기 동작 점검',
      method: '오늘 쉬기 동작 스스로 점검', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 점검 칸을 읽어 주고 앞의 두 줄(바른 자세·멀리 보기)을 함께 표시한다.', base: '점검 칸 세 줄을 스스로 듣고 오늘 해 본 것에 표시한다.', challenge: '표시한 동작 가운데 하나를 골라 집에서 가족에게 보여 주기로 약속한다(교사 진행).' },
      wrap: {
        teacher: '"오늘 우리가 해 본 쉬기 동작은 무엇이었나요?" 점검 칸을 하나씩 읽어 주며 오늘 수업에서 해 본 것에 표시하게 한다. 집에서 얼마나 하는지가 아니라 오늘 해 본 것을 표시한다고 분명히 말한다. 출구 2번에서 "눈이 아파도 다 보고 쉬어요"를 고른 학생에게 "신호가 오면 바로 쉬어야 눈이 덜 힘들어요"라고 짚는다. 도전 반은 가족에게 보여 줄 동작 하나를 정한다.',
        exitTicket: [
          SELF('오늘 해 본 쉬기', ['바른 자세로 앉았어요', '멀리 보았어요', '몸을 폈어요'], '오늘 해 본 것에 표시해요.'),
          { type: 'choice', prompt: '눈이 아프면 언제 쉬어요?', options: ['바로 쉬어요', '다 보고 쉬어요'], answer: 0, difficulty: 0.1, explain: '신호가 오면 바로 쉬어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '오늘 해 본 쉬기',
        items: [
          { type: 'check', prompt: '오늘 해 본 것에 ✓ 해요.', options: ['허리 펴고 앉기', '멀리 보기', '목·어깨 펴기'] },
          { type: 'draw', prompt: '가족에게 보여 줄 쉬기 동작을 그려요.' },
        ],
        easy: { note: '"멀리 보고, 깜빡이고, 눈 감고"를 떠올려요.', items: [{ type: 'draw', prompt: '멀리 있는 나무를 그려요.' }] },
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 그만하기 신호 알아차리고 스스로 멈추기
  const SIG = MOD('saf-cyber.e12.stop-signal', [2]);
  // 신호 나누기(mindmap): 기본 세 가지(몸 신호·마음 신호·괜찮아요) 6장, 쉬움 두 가지(신호·괜찮아요) 4장, 도전 8장(몸·마음 신호 한 장씩 더)
  const SIG3 = (prompt, body, mind, fine, more2, d, more) => {
    const S3 = (b, m, f) => ({ '몸 신호': ids(b), '마음 신호': ids(m), 괜찮아요: ids(f) });
    return {
      prompt, toolOptions: { mode: 'sort', topic: '그만하기 신호', slots: ['몸 신호', '마음 신호', '괜찮아요'], cards: [body[0], mind[0], fine[0], body[1], mind[1], fine[1]] }, target: { sort: S3(body, mind, fine) }, difficulty: d,
      levels: {
        easy: { prompt: `${cut(prompt)}(두 가지).`, toolOptions: { slots: ['신호', '괜찮아요'], cards: [body[0], fine[0], mind[0], fine[1]] }, target: { sort: { 신호: [body[0].id, mind[0].id], 괜찮아요: [fine[0].id, fine[1].id] } } },
        challenge: { prompt: `${cut(prompt)}(8장).`, toolOptions: { cards: [body[0], mind[0], more2[0], fine[0], body[1], more2[1], mind[1], fine[1]] }, target: { sort: S3([...body, more2[0]], [...mind, more2[1]], fine) } },
      },
      ...more,
    };
  };
  const T_SIG = [
    SIG({
      id: 'saf-cyber.e12.stop-signal.intro.mind-face', type: 'intro', title: '오래 본 뒤 짜증 난 친구 마음',
      method: '오래 본 뒤 마음 얼굴 고르기', tool: 'emotion', minutes: 5,
      levels: { easy: '교사가 마음 얼굴 두 개(화남·신남)만 가리키며 하늘이 마음을 함께 고른다.', base: '시연의 마음 얼굴 네 개 가운데 하늘이 마음을 고른다.', challenge: '하늘이가 왜 짜증이 났을지 한마디로 말한다.' },
      intro: {
        teacher: '"하늘이가 영상을 아주 오래 봤어요. 동생이 말을 걸자 \'저리 가!\' 하고 짜증을 냈어요. 하늘이 마음은 어떨까요?" 시연 단추로 하늘이 칸에 화남이 놓이는 모습을 보인다. "짜증은 동생 때문이에요"라는 말이 나오면 "화면을 오래 보면 몸도 마음도 지쳐서 작은 일에 짜증이 날 수 있어요. 이것도 그만하라는 신호일까요?"라고 되묻는다. 오늘은 몸과 마음이 보내는 그만하기 신호를 알아차리고 스스로 멈추는 법을 배운다고 밝힌다.',
        student: '오래 본 뒤 짜증 낸 하늘이 마음 얼굴을 골라요.',
        demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'kid', label: '오래 본 하늘' }], cards: ['화남', '신남', '편안함', '걱정'], shuffle: false }, sequence: [{ match: { kid: '화남' } }] },
        art: { draw: 'a paper child with a grumpy face holding a glowing paper tablet and turning away from a little paper sibling who is holding out a toy, with a small paper storm cloud above the child', banner: '왜 짜증이 날까요?', extra: [{ motif: 'storm', x: 300, y: 96 }] },
      },
      notes: '학생 자신이 짜증 냈던 일을 꺼내게 하지 않는다. 하늘이 그림으로만 이야기한다.',
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.intro.chant', type: 'intro', title: '"알람 듣고, 끝맺고, 끄고 놀자!"',
      method: '멈추기 구호 따라 하기', tool: 'timer', minutes: 5,
      levels: { easy: '교사가 구호 카드를 하나씩 들어 보이며 함께 말한다.', base: '시연을 본 뒤 구호와 손동작을 함께 세 번 따라 한다.', challenge: '구호를 혼자 반 앞에서 이끌고 친구들이 따라 한다.' },
      intro: {
        teacher: '"알람 듣고! (귀에 손) 끝맺고! (두 손 모아 꾹) 끄고 놀자! (팔 벌려 뛰는 흉내)" 시연 단추로 구호 카드가 차례대로 놓이는 모습을 보이고 반 전체가 손동작과 함께 세 번 따라 한다. "끝까지 다 봐야 멈출 수 있어요"라는 말이 나오면 "끝맺기는 지금 하던 것을 저장하거나 한 장면만 마치는 거예요. 끝까지가 아니에요"라고 짚는다.',
        student: '"알람 듣고, 끝맺고, 끄고 놀자!"를 손동작과 함께 따라 해요.',
        demo: { tool: 'timer', options: { title: '멈추기 구호', cards: ['끄고 놀자', '알람 듣고', '끝맺고'] }, sequence: [{ order: ['알람 듣고', '끝맺고', '끄고 놀자'] }] },
        art: { draw: 'paper children cupping a hand to an ear, pressing both palms together, then throwing their arms open toward a paper playground, with a ringing paper alarm clock', banner: '알람 듣고, 끝맺고, 끄고 놀자!', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
      },
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.intro.brother-story', type: 'intro', title: '우는 동생과 기다리는 형',
      method: '형과 동생 그림 이야기 듣기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 형이 할 말 두 개만 읽어 주고 고르게 한다.', base: '시연을 보고 형이 할 말 세 개 가운데 고른다.', challenge: '동생 마음을 헤아리는 말을 직접 지어 말한다.' },
      intro: {
        teacher: '"동생이 게임을 더 하겠다고 울어요. 형은 놀이터에 같이 가려고 기다려요. 형은 동생에게 뭐라고 말할까요?" 세 장면을 읽어 준 뒤 시연 단추로 형이 할 말 카드가 담기는 모습을 보인다. "울면 더 하게 해 줘요"라는 말이 나오면 "울어서 더 하게 되면 다음에도 울게 되지 않을까요?"라고 되묻는다. 아쉬운 마음을 알아주면서 멈추자고 말하는 것이 좋다는 점을 짚는다.',
        student: '형이 우는 동생에게 할 말을 골라 따라 말해요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '형이 할 말', cards: [{ id: 'kind', text: '"같이 나가자"', motif: 'sun' }, { id: 'more', text: '"계속 해"' }, { id: 'yell', text: '"울지 마!"' }], shuffle: false }, sequence: [{ pick: ['kind'] }] },
        art: { draw: 'three paper story panels: a little paper brother crying while holding a game tablet, an older paper brother waiting by the door with a ball, and the two brothers walking to a paper playground hand in hand', banner: '아쉽지? 같이 나가자' },
      },
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.activity.signal-sort', type: 'activity', title: '몸 신호·마음 신호 나누기',
      method: '몸 신호·마음 신호 카드 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '두 가지(신호·괜찮아요)에 카드 4장, 맞는 가지에 놓으면 초록 테두리가 생기고 틀리면 되돌아온다.', base: '세 가지(몸 신호·마음 신호·괜찮아요)에 카드 6장을 놓는다.', challenge: '세 가지에 카드 8장을 놓고, 활동지에 내 신호 하나를 더 그린다.' },
      activity: {
        title: '그만하기 신호 가지에 나누기', tool: 'mindmap',
        teacher: '"하늘이 몸이 \'눈이 따가워\' 해요. 이건 몸 신호일까요, 마음 신호일까요?" 카드를 놓을 때마다 그 신호를 몸짓으로 흉내 낸다(눈 찡그리기·목 만지기·입 삐죽). "짜증 나는 건 화면과 상관없어요"라는 학생에게 "오래 보고 나서 작은 일에 짜증이 나면, 마음이 쉬자고 하는 걸까요?"라고 묻는다. "신나게 놀았어요"를 신호 쪽에 둔 학생에게는 "신나게 논 뒤에 몸이 아픈가요?"라고 물어 괜찮아요 쪽으로 옮기게 한다.',
        task: '하늘이 신호 카드를 몸 신호·마음 신호·괜찮아요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SIG3('영상 본 뒤 신호를 나누어요.', [C('eye', '눈이 따가워요'), C('neck', '목이 뻐근해요')], [C('grump', '짜증 나요'), C('think', '자꾸 생각나요')], [C('fun', '신나게 놀았어요'), C('sleep', '푹 잤어요')], [C('wrist', '손목이 아파요'), C('cry', '괜히 울어요')], 0.1),
          SIG3('게임한 뒤 신호를 나누어요.', [C('dry', '눈이 뻑뻑해요'), C('back', '허리가 아파요')], [C('angry', '화가 나요'), C('more', '더 하고 싶어요')], [C('calm', '마음이 편해요'), C('eat', '밥 맛있어요')], [C('head', '머리가 띵해요'), C('lonely', '혼자 있고파요')], 0.15),
          SIG3('밤에 본 뒤 신호를 나누어요.', [C('tired', '눈이 감겨요'), C('shoulder', '어깨가 굳어요')], [C('restless', '잠이 안 와요'), C('dream', '꿈에 나와요')], [C('rest', '푹 쉬었어요'), C('laugh', '많이 웃었어요')], [C('red', '눈이 빨개요'), C('upset', '자꾸 속상해요')], 0.2, { conclude: '몸 신호·마음 신호가 오면 그만하라는 뜻이에요. 멈추고 쉬어요.' }),
        ],
      },
      worksheet: { items: [{ type: 'draw', prompt: '내 몸이나 마음이 보내는 신호 하나를 그려요.' }],
        easy: [{ type: 'choice', prompt: '그만하기 신호에 ○ 해요.', options: ['눈이 따가워요', '신나게 놀았어요'], answer: '눈이 따가워요' }] },
      notes: '활동지 그림은 정답을 매기지 않는다. 내 신호를 그리게 하되 화면을 얼마나 보는지는 묻지 않는다.',
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.activity.body-map', type: 'activity', title: '몸 그림에 신호 오는 곳 짚기',
      method: '내 몸 그림에 신호 붙이기', tool: 'body', minutes: 14,
      levels: { easy: '짚을 곳이 두 곳이고, 짚은 곳의 이름이 바로 보인다.', base: '이름 없이 신호 오는 곳을 짚고(세 곳까지), 마지막에 쉬는 동작 하나를 고른다.', challenge: '팔꿈치·허벅지처럼 헷갈리는 곳이 더 있는 몸에서 짚는다. 곳마다 다른 쉬는 동작을 짝에게 알려 준다(교사 진행).' },
      activity: {
        title: '신호가 오는 곳과 쉬는 동작', tool: 'body',
        teacher: '"하늘이가 오래 봤더니 신호가 왔어요. 종이 몸 어디에 신호가 왔을까요?" 종이 몸을 짚은 뒤 학생들도 자기 몸의 그곳을 손으로 짚고, 그곳을 쉬게 하는 동작(눈 감기·고개 돌리기·배에 손 얹고 숨쉬기)을 따라 한다. "아파도 참으면 돼요"라는 학생에게 "몸이 보내는 신호를 참으면 몸은 더 힘들어져요. 신호가 오면 무엇을 할까요?"라고 묻는다. 머리가 아플 때처럼 종이 몸에 없는 곳은 자기 몸에서 짚게 한다.',
        task: '그만하기 신호가 오는 곳을 짚고 쉬는 동작을 해요.', levels: { easy: { names: true }, base: {}, challenge: {} },
        items: [
          { prompt: '오래 보면 신호 오는 곳 두 곳은?', toolOptions: { mode: 'parts', parts: ['눈', '목', '무릎', '발목'] }, target: { parts: ['눈', '목'] }, difficulty: 0.1,
            hints: ['화면을 볼 때 가장 많이 쓰는 곳을 떠올려요.', '보는 곳과 고개를 받치는 곳이에요.', '눈과 목을 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['눈', '목', '무릎', '발목', '팔꿈치', '허벅지'] } } } },
          { prompt: '오래 앉아 뻐근한 곳 두 곳은?', toolOptions: { mode: 'parts', parts: ['어깨', '허리', '무릎', '발목'] }, target: { parts: ['어깨', '허리'] }, difficulty: 0.15,
            hints: ['오래 앉아 있으면 굳는 곳을 떠올려요.', '등 위쪽과 등 아래쪽이에요.', '어깨와 허리를 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['어깨', '허리', '무릎', '발목', '팔꿈치', '허벅지'] } } } },
          { prompt: '마음이 답답할 때 손 얹을 곳은?', toolOptions: { mode: 'parts', parts: ['배', '무릎', '발목', '눈'] }, target: { parts: ['배'] }, difficulty: 0.15,
            hints: ['숨을 크게 쉬면 불룩해지는 곳이에요.', '몸 가운데 아래쪽이에요.', '배를 골라요.'],
            levels: { challenge: { toolOptions: { parts: ['배', '무릎', '발목', '눈', '팔꿈치', '허벅지'] } } } },
          { prompt: '목이 뻐근해요. 무엇을 해요?', toolOptions: { mode: 'parts', parts: ['눈', '목', '어깨'], readOnly: true, ask: { q: '목이 뻐근해요. 어떻게 해요?', choices: ['목을 천천히 돌려요', '더 숙여서 봐요', '참고 계속 봐요'] } }, target: { pick: 0 }, difficulty: 0.2, conclude: '신호가 오는 곳을 알면, 멈추고 그곳을 쉬게 해 줄 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '눈이 따가워요. 무엇을 해요?', options: ['눈 감고 쉬어요', '더 가까이 봐요'], answer: '눈 감고 쉬어요' }] },
      notes: '종이 몸에 머리 칸이 없어 계획의 "눈·머리·목·배" 가운데 머리 대신 어깨·허리를 짚고, 머리는 학생이 자기 몸에서 짚는다.',
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.activity.three-steps', type: 'activity', title: '멈추기 세 단계 차례 놓기',
      method: '멈추기 세 단계 차례 놓기', tool: 'timeline', minutes: 14,
      levels: { easy: '첫 카드(알람 듣기)가 놓여 있어 남은 두 단계만 놓고, 놓으면 바로 맞는지 보인다.', base: '카드 세 장을 차례대로 놓는다.', challenge: '"한 판 더 해요" 같은 틀린 카드 1장을 빼고 놓은 뒤, 그 차례대로 역할놀이를 한다(교사 진행).' },
      activity: {
        title: '알람 듣고, 끝맺고, 끄기', tool: 'timeline',
        teacher: '"알람이 울렸어요. 맨 먼저 무엇을 할까요?" 카드를 놓은 뒤 반 전체가 소리 내어 읽고 구호 동작을 한다(귀에 손 → 두 손 꾹 → 팔 벌리기). "끝맺기는 끝까지 다 보는 거예요"라는 학생에게 "끝맺기는 하던 것을 저장하거나 그림을 마저 칠하는 것처럼 잠깐이에요. 다음 편까지 보는 건 끝맺기일까요?"라고 묻는다. 끈 뒤에 할 다른 놀이를 정해 두면 멈추기가 쉽다는 점을 짚는다.',
        task: '멈추기 세 단계 카드를 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          ORDER3('게임하다 알람이 울려요.', [C('hear', '알람 들어요'), C('save', '저장해요'), C('off', '끄고 놀아요')], C('more', '한 판 더 해요'), 0.15),
          ORDER3('그림 앱 하다 알람이 울려요.', [C('hear2', '알람 들어요'), C('finish', '색칠 마쳐요'), C('off2', '끄고 책 봐요')], C('new', '새 그림 그려요'), 0.2),
          ORDER3('영상 보다 알람이 울려요.', [C('hear3', '알람 들어요'), C('pause', '멈춤 눌러요'), C('off3', '끄고 줄넘기')], C('next', '다음 편 봐요'), 0.25, { conclude: '알람 듣고, 끝맺고, 끄고 놀아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '알람 듣고, ___, 끄고 놀자!', answer: '끝맺고' }] },
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.activity.five-before', type: 'activity', title: '끝나기 5분 전 알림 시각',
      method: '끝나기 5분 전 알림 시각 맞추기', tool: 'clock', minutes: 14,
      levels: { easy: '긴바늘이 5분씩 움직이고, 바깥에 5·10·15… 분 숫자와 짧은바늘 자리 안내가 보인다.', base: '긴바늘이 5분씩 움직이고, 분 숫자 없이 끝 시각과 5분 전 시각을 나타낸다.', challenge: '작은 눈금도 없는 시계에서 나타내고, 끝 시각을 바꿔 친구에게 문제를 낸다(짝 활동).' },
      activity: {
        title: '끝 시각과 마무리 알림 시각', tool: 'clock',
        teacher: '"하늘이네는 4시에 끝내기로 했어요. 끝나기 5분 전에 \'이제 마무리하자\' 알림을 들으면 무엇이 좋을까요?" 기다릴 반응("갑자기 안 꺼져요", "끝맺을 수 있어요")을 듣고 시계를 맞춘다. 3시 55분을 나타낼 때 짧은바늘을 4에 똑바로 두는 학생에게 "아직 4시가 안 됐어요. 짧은바늘은 4에 거의 다 왔지만 3과 4 사이에 있어요"라고 짚는다. 4시와 5분 전은 하늘이네 가상 약속이라고 밝힌다.',
        task: '하늘이네 끝 시각과 5분 전 알림 시각을 나타내요.', levels: { easy: { minuteStep: 5, showMinuteNumbers: true, hourZone: true }, base: { minuteStep: 5 }, challenge: { minuteStep: 5, showMinuteMarks: false } },
        items: [
          { prompt: '4시에 끝내요. 4시를 맞춰요.', toolOptions: {}, target: { h: 4, m: 0 }, difficulty: 0.1 },
          { prompt: '5분 전 알림, 3시 55분을 맞춰요.', toolOptions: {}, target: { h: 3, m: 55 }, difficulty: 0.2 },
          { prompt: '5시에 끝내요. 5분 전을 맞춰요.', toolOptions: {}, target: { h: 4, m: 55 }, difficulty: 0.25 },
          { prompt: '짝에게 끝 시각 문제를 내요.', free: true, toolOptions: {}, difficulty: 0.25, conclude: '끝나기 5분 전에 알림을 들으면 끝맺고 끌 준비를 해요.' },
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '하늘이네 약속 시각을 써요.', columns: ['끝 시각', '5분 전 알림'], cells: [['4시', '3시 55분'], ['5시', '']], answer: '4시 55분' }] },
      notes: '4시·5시 끝 시각과 \'5분 전\' 알림은 가상 약속(연습용 값)이다. 몇 분 전이 좋은지 기준으로 말하지 않는다.',
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.activity.choice-path', type: 'activity', title: '갈림길: "한 판만 더!"',
      method: '그림 갈림길에서 고르고 결과 보기', tool: 'dilemma', minutes: 14,
      levels: { easy: '첫 갈림에서 보기 2개 가운데 한 번만 고르고 결과를 본다.', base: '고른 뒤 이어지는 장면에서 한 번 더 고른다(갈림 2번).', challenge: '갈림 2번을 지나 끝에서 까닭 카드 3장 가운데 하나를 고른다. 짝에게 자기 말로 설명한다(교사 진행).' },
      activity: {
        title: '더 할까, 끌까?', tool: 'dilemma',
        teacher: '"알람이 울렸는데 하늘이가 \'한 판만 더!\' 해요. 더 하면 어떻게 될까요, 끄면 어떻게 될까요?" 고르기 전에 반 전체가 "알람 듣고, 끝맺고, 끄고 놀자" 구호를 한 번 외친다. "더 하기"를 고른 학생에게 결과 장면(늦게 잠·늦잠)을 함께 읽고 "다음 날 아침 하늘이 마음은 어떨까요?"라고 묻는다. 다른 길도 끝까지 가 보며 끄고 논 길과 견주게 한다.',
        task: '장면마다 할 일을 고르고 결과를 봐요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          DILEMMA('알람이 울려요. 골라요.', { text: '알람이 울렸어요. "한 판만 더!"', motif: 'star', choices: [
            { id: 'more', text: '더 해요', result: '늦게 자서 아침에 늦잠을 자요.', why: '알람이 울리면 약속 시간이 다 된 거예요.' },
            { id: 'off', text: '끝맺고 꺼요', result: '저장하고 껐어요.', easyEnding: '끄고 놀이터에 갔어요.', next: { text: '껐더니 조금 아쉬워요.', choices: [
              { id: 'play', text: '놀이터에 가요', result: '친구와 신나게 놀았어요.', ending: '스스로 끄고 놀아서 뿌듯해요.' },
              { id: 'sneak', text: '몰래 다시 켜요', result: '약속이 깨졌어요.', why: '아쉬우면 다른 놀이로 마음을 달래요.' }] } }] },
          ['off', 'play'], [{ id: 'promise', text: '약속을 지켜서요' }, { id: 'scold', text: '혼날까 봐서요', why: '혼나지 않아도 약속은 내가 지켜요.' }, { id: 'bored', text: '게임이 지루해서요', why: '재미있어도 약속 시간이면 꺼요.' }], 'promise', 0.15),
          DILEMMA('다음 편이 나와요. 골라요.', { text: '영상이 끝나자 다음 편이 저절로 나와요.', motif: 'moon', choices: [
            { id: 'watch', text: '계속 봐요', result: '저녁밥이 다 식었어요.', why: '다음 편이 나와도 정한 만큼만 봐요.' },
            { id: 'stop', text: '멈춤 눌러요', result: '화면이 멈췄어요.', easyEnding: '끄고 가족과 밥을 먹었어요.', next: { text: '동생이 "하나만 더 보자" 해요.', choices: [
              { id: 'say', text: '"내일 같이 봐"', result: '동생도 고개를 끄덕여요.', ending: '둘 다 약속을 지켜 편안해요.' },
              { id: 'give', text: '같이 더 봐요', result: '둘 다 약속이 깨졌어요.', why: '동생에게도 약속을 알려 줘요.' }] } }] },
          ['stop', 'say'], [{ id: 'enough', text: '정한 만큼 봐서요' }, { id: 'boring', text: '다음 편이 싫어서요', why: '재미있어도 정한 만큼만 봐요.' }, { id: 'mom', text: '엄마가 볼까 봐서요', why: '누가 보지 않아도 약속을 지켜요.' }], 'enough', 0.2),
          DILEMMA('동생 차례예요. 골라요.', { text: '태블릿을 동생에게 줄 차례예요.', motif: 'house', choices: [
            { id: 'keep', text: '안 줘요', result: '동생이 울어요.', why: '정한 차례는 지켜요.' },
            { id: 'pass', text: '저장하고 줘요', result: '동생이 웃어요.', easyEnding: '나는 책을 읽으러 갔어요.', next: { text: '기다리는 동안 심심해요.', choices: [
              { id: 'book', text: '책을 읽어요', result: '재미있는 책을 찾았어요.', ending: '화면 없이도 즐거워요.' },
              { id: 'grab', text: '뺏으러 가요', result: '둘이 다퉈요.', why: '기다릴 때는 다른 놀이를 해요.' }] } }] },
          ['pass', 'book'], [{ id: 'turn', text: '차례를 지켜서요' }, { id: 'tired', text: '팔이 아파서요', why: '팔이 안 아파도 차례는 지켜요.' }, { id: 'cry', text: '동생이 울어서요', why: '울지 않아도 차례는 지켜요.' }], 'turn', 0.25, { conclude: '"한 판만 더"가 떠오르면 알람을 떠올려요. 끝맺고 끄고 놀아요.' }),
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '알람이 울리면 어떻게 해요?', options: ['끝맺고 꺼요', '한 판만 더 해요'], answer: '끝맺고 꺼요' }] },
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.activity.breathe', type: 'activity', title: '숨 세 번 쉬고 끄기 연습',
      method: '숨 세 번 쉬고 끄기 연습', tool: 'timer', minutes: 14,
      levels: { easy: '숨 쉬기를 2번 하도록 타이머를 맞추고, 차례 카드 2장(들이쉬어요·내쉬어요)을 놓는다.', base: '숨 쉬기를 3번 하도록 맞추고, 차례 카드 3장(들이쉬어요·내쉬어요·화면 꺼요)을 놓는다.', challenge: '3번에 숨 들이쉬는 칸(초)까지 내가 맞추고, 차례 카드 3장을 놓는다.' },
      activity: {
        title: '아쉬울 때 숨 쉬고 끄기', tool: 'timer',
        teacher: '"끌 때 아쉬운 마음이 들면 숨을 크게 쉬어 봐요. 꽃 냄새 맡듯 들이쉬고(코로 흡), 촛불 끄듯 내쉬어요(입으로 후)." 타이머를 맞춘 뒤 반 전체가 숨 쉬기를 하고, 마지막에 화면 끄는 흉내를 낸다. "숨 쉬어도 더 하고 싶어요"라는 학생에게 "그 마음은 괜찮아요. 숨을 쉬면 마음이 조금 작아지는지 한 번 더 해 볼까요?"라고 말해 준다. 숨 쉬는 초와 횟수는 우리 반 연습 값이라고 밝힌다.',
        task: '타이머를 맞추고 숨 쉬기를 한 뒤 끄는 차례를 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
        items: [
          { prompt: '숨 쉬기를 3번 하게 맞춰요.', toolOptions: { title: '꽃·촛불 숨쉬기(우리 반 연습)', plan: { work: 3, rest: 3, rounds: 1 } }, target: { plan: { rounds: 3 } }, difficulty: 0.1,
            levels: { easy: { prompt: '숨 쉬기를 2번 하게 맞춰요.', target: { plan: { rounds: 2 } } }, challenge: { prompt: '3번, 들이쉬기 5초로 맞춰요.', target: { plan: { rounds: 3, work: 5 } } } } },
          { prompt: '숨 쉬고 끄는 차례로 놓아요.', toolOptions: { title: '숨 쉬고 끄기', cards: ['화면 꺼요', '들이쉬어요', '내쉬어요'] }, target: { order: ['들이쉬어요', '내쉬어요', '화면 꺼요'] }, difficulty: 0.15,
            levels: { easy: { prompt: '숨 쉬는 차례로 놓아요(2장).', toolOptions: { cards: ['내쉬어요', '들이쉬어요'] }, target: { order: ['들이쉬어요', '내쉬어요'] } } } },
          { prompt: '숨 세 번 쉬고 끄는 흉내를 내요.', free: true, toolOptions: { doneLabel: '숨 쉬고 끄는 흉내를 했어요' }, difficulty: 0.15, conclude: '아쉬울 때는 꽃 냄새 맡듯 들이쉬고, 촛불 끄듯 내쉰 뒤 꺼요.' },
        ],
      },
      worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '숨을 크게 쉬고 화면을 ___.', answer: '꺼요' }] },
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.wrap.name-it', type: 'wrap', title: '그만하기 신호 이름 고르기',
      method: '내 그만하기 신호 이름 고르기', tool: 'wordcards', minutes: 6,
      levels: { easy: '교사가 이름 카드 세 장을 읽어 주고, 하늘이 신호에 맞는 이름을 함께 고른다.', base: '이름 카드 다섯 장 가운데 하늘이 신호에 맞는 이름 두 장을 고른다.', challenge: '내 신호 이름을 새로 지어 짝에게 말한다(점수 없음, 교사 진행).' },
      wrap: {
        teacher: '"하늘이 눈이 따끔하고 목이 뻐근해요. 신호에 이름을 붙이면 무엇이 좋을까요?" 기다릴 반응("빨리 알아채요")을 듣고 이름 카드를 고르게 한다. 쉬움 반은 출구 1번만 함께 읽는다. 출구 2번에서 "신호를 참고 더 해요"를 고른 학생에게 "신호에 이름을 붙이는 건 알아차리고 멈추려는 거예요"라고 짚는다. 도전 반은 내 신호 이름을 새로 지어 짝에게 말해 본다(정답 없음).',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '하늘이 신호', cards: [C('eye', '눈 따끔'), C('happy', '신나 펄쩍'), C('neck', '목 뻐근')] }, prompt: '눈·목 신호 이름을 담아요.', target: { pick: ['eye', 'neck'] }, difficulty: 0.1 },
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '마음 신호', cards: [C('grump', '짜증 뿡'), C('sleep', '푹 잠'), C('loop', '빙글 생각'), C('fun', '웃음 빵'), C('stiff', '어깨 딱딱')] }, prompt: '마음 신호 이름을 담아요.', target: { pick: ['grump', 'loop'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '신호가 오면 어떻게 해요?', options: ['멈추고 쉬어요', '참고 더 해요'], answer: 0, difficulty: 0.1, explain: '신호가 오면 알아차리고 멈춰요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '내 그만하기 신호',
        items: [
          { type: 'blank', prompt: '눈이 보내는 신호 이름을 써요.', text: '눈 ___', answer: '따끔(예)' },
          { type: 'draw', prompt: '신호가 왔을 때 멈추는 내 모습을 그려요.' },
        ],
      },
      notes: '낱말 카드 교구는 고르기(pick) 판만 쓴다(영어 발음 판 안 씀). 판정은 하늘이 신호에 맞는 이름이고, 학생 자신의 신호는 활동지·말로만 한다.',
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.wrap.step-check', type: 'wrap', title: '멈추기 세 단계 점검표',
      method: '멈추기 세 단계 점검표', tool: 'kitchen', minutes: 6,
      levels: { easy: '교사가 점검표를 읽어 주고 앞의 두 칸(알람 들었어요·끝맺었어요)을 함께 표시한다.', base: '세 칸을 스스로 듣고 오늘 연습에서 한 것에 표시한다.', challenge: '표시한 뒤 집에서 세 단계를 해 볼 날(요일)을 골라 말한다(교사 진행).' },
      wrap: {
        teacher: '"오늘 연습에서 멈추기 세 단계를 해 보았나요?" 점검표 칸을 하나씩 읽고 오늘 수업에서 해 본 것에 표시하게 한다. 집에서 얼마나 지키는지가 아니라 오늘 연습한 것을 표시한다고 말한다. 출구 2번에서 "끝까지 다 봐요"를 고른 학생에게 "끝맺기는 저장하거나 한 장면만 마치는 거예요"라고 다시 짚는다. 도전 반은 집에서 해 볼 날을 하나 고른다.',
        exitTicket: [
          CHECK('멈추기 세 단계', [C('hear', '알람 들었어요'), C('save', '끝맺었어요'), C('play', '끄고 놀았어요')], '오늘 연습한 것에 표시해요.'),
          { type: 'choice', prompt: '끝맺기는 무엇이에요?', options: ['저장하고 마쳐요', '끝까지 다 봐요'], answer: 0, difficulty: 0.1, explain: '끝맺기는 하던 것을 저장하거나 한 장면만 마치는 거예요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '멈추기 세 단계',
        items: [
          { type: 'table', prompt: '세 단계를 차례대로 써요.', columns: ['차례', '할 일'], cells: [['1', '알람 들어요'], ['2', ''], ['3', '끄고 놀아요']], answer: '끝맺어요(저장해요)' },
          { type: 'draw', prompt: '끄고 나서 할 놀이를 그려요.' },
        ],
        easy: { note: '"알람 듣고, 끝맺고, 끄고 놀자"를 떠올려요.', items: [{ type: 'draw', prompt: '알람 시계를 그려요.' }] },
      },
    }),
    SIG({
      id: 'saf-cyber.e12.stop-signal.wrap.praise', type: 'wrap', title: '스스로 멈춘 친구 칭찬하기',
      method: '스스로 멈춘 나에게 칭찬 마음 고르기', tool: 'emotion', minutes: 6,
      levels: { easy: '마음 얼굴 2개(뿌듯함·화남) 가운데 스스로 끈 하늘이 마음을 고른다.', base: '마음 얼굴 4개 가운데 고르고, 칭찬하는 말 카드를 고른다.', challenge: '친구에게 칭찬 한마디를 직접 해 준다(교사 진행).' },
      wrap: {
        teacher: '"하늘이가 알람을 듣고 스스로 화면을 껐어요. 하늘이 마음은 어떨까요?" 마음 얼굴을 고른 뒤 "스스로 멈춘 친구에게 뭐라고 칭찬해 줄까요?"라고 묻고 칭찬 카드를 고른다. 쉬움 반은 뿌듯함·화남 두 얼굴만 가리킨다. "바보야"를 고르려는 학생에게 "그 말을 들으면 하늘이는 또 멈추고 싶을까요?"라고 묻는다. 마지막에 짝끼리 "스스로 멈춰서 멋지다!"를 서로 말해 준다.',
        exitTicket: [
          FEEL('스스로 끈 하늘이 마음은?', '스스로 끈 하늘', ['뿌듯함', '화남', '기쁨', '걱정'], ['뿌듯함', '기쁨']),
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '칭찬하는 말', cards: [C('cool', '"멋지다!"'), C('fool', '"바보야"'), C('well', '"잘 껐어!"'), C('more', '"더 해!"')] }, prompt: '칭찬하는 말을 골라 담아요.', target: { pick: ['cool', 'well'] }, difficulty: 0.1 },
          MOOD,
        ],
      },
      worksheet: {
        title: '스스로 멈춘 나',
        items: [
          { type: 'choice', prompt: '스스로 끈 친구에게 할 말은?', options: ['"멋지다!"', '"더 해!"'], answer: '"멋지다!"' },
          { type: 'draw', prompt: '스스로 화면을 끈 뒤 웃는 내 모습을 그려요.' },
        ],
      },
    }),
  ];

  // =====================================================================================================
  // 2학년 · 우리 집 화면 약속 함께 만들기
  const FAM = MOD('saf-cyber.e12.family-rule', [2]);
  const HOUSE = [
    { name: '거실', cells: [[0, 0], [1, 0]] }, { name: '식탁', cells: [[2, 0], [3, 0]] },
    { name: '침대', cells: [[0, 1], [1, 1]] }, { name: '책상', cells: [[2, 1], [3, 1]] },
  ];
  const T_FAM = [
    FAM({
      id: 'saf-cyber.e12.family-rule.intro.house-map', type: 'intro', title: '집 지도에 화면 끄는 곳 핀',
      method: '집 그림 지도에 화면 끄는 곳 핀 꽂기', tool: 'map', minutes: 5,
      levels: { easy: '교사가 식탁·침대 두 곳만 가리키며 끄는 곳인지 함께 말한다.', base: '시연을 보고 거실·식탁·침대·책상 네 곳 가운데 끄는 곳을 고른다.', challenge: '핀을 꽂은 곳마다 끄는 까닭을 한마디씩 말한다.' },
      intro: {
        teacher: '"하늘이네 집 지도예요. 거실·식탁·침대·책상 가운데 화면을 끄면 좋은 곳은 어디일까요?" 시연 단추로 식탁, 그다음 침대에 핀이 꽂히는 모습을 보여 준다. "침대에서 보면 잠이 잘 와요"라는 말이 나오면 "화면을 보다 보면 잠이 달아나지 않을까요? 잠자리에서는 무엇을 할까요?"라고 되묻는다. 오늘은 언제·어디서·얼마나 볼지 가족과 함께 약속을 만든다고 밝힌다.',
        student: '하늘이네 집에서 화면을 끄면 좋은 곳을 손으로 가리켜요.',
        demo: { tool: 'map', options: { grid: [4, 2], regions: HOUSE, title: '하늘이네 집' }, sequence: [{ pin: [2, 0] }, { pin: [0, 1] }] },
        art: { draw: 'a cut-away paper house with a living room sofa, a dining table, a bed and a study desk, with small red paper pins on the dining table and the bed', banner: '여기선 화면을 꺼요', extra: [{ motif: 'house', x: 300, y: 96 }] },
      },
      notes: '지도는 가상 친구 하늘이네 집이다. 학생 집의 구조나 사는 곳을 묻지 않는다. 지도 칸은 문항마다 핀 하나라 시연은 두 번 나누어 꽂는다.',
    }),
    FAM({
      id: 'saf-cyber.e12.family-rule.intro.budget-story', type: 'intro', title: '둘러앉아 약속 정하는 가족',
      method: '약속을 정한 가족 그림 이야기 듣기', tool: 'story', minutes: 5,
      levels: { easy: '교사가 의견 그림 두 장만 읽어 주고 고르게 한다.', base: '시연을 보고 의견 그림 세 장 가운데 하늘이가 낸 의견을 고른다.', challenge: '나라면 어떤 의견을 낼지 말한다.' },
      intro: {
        teacher: '"하늘이네 가족이 둘러앉아 화면 약속을 정해요. 아빠는 \'숙제 먼저\', 엄마는 \'자기 전엔 끄기\'라고 했어요. 하늘이는 어떤 의견을 냈을까요?" 세 장면을 읽어 준 뒤 시연 단추로 하늘이 의견 카드가 담기는 모습을 보인다. "약속은 어른만 정해요"라는 말이 나오면 "하늘이도 의견을 내면 약속을 더 잘 지킬 수 있지 않을까요?"라고 되묻는다. 가족이 함께 정한 약속은 모두가 지킨다는 점을 짚는다.',
        student: '하늘이 가족 이야기를 듣고 하늘이가 낸 의견을 골라요.',
        demo: { tool: 'story', options: { mode: 'pick', basket: '하늘이 의견', cards: [{ id: 'meal', text: '"밥 땐 꺼요"', motif: 'sun' }, { id: 'night', text: '"밤새 볼래요"' }, { id: 'dad', text: '"아빠가 정해요"' }], shuffle: false }, sequence: [{ pick: ['meal'] }] },
        art: { draw: 'three paper story panels: a paper family sitting around a table with a paper note, the father and mother each raising a hand to speak, and the child proudly holding up a paper card', banner: '우리 같이 정해요' },
      },
    }),
    FAM({
      id: 'saf-cyber.e12.family-rule.activity.when', type: 'activity', title: '하루 일과 사이 화면 시간 놓기',
      method: '하루 일과 사이에 화면 시간 놓기', tool: 'kitchen', minutes: 14,
      levels: { easy: '일과 칸 3개에 카드 3장을 잇고, 놓으면 바로 맞는지 보인다.', base: '일과 칸 5개(일어나기·밥·숙제·놀이·잠)에 카드 5장을 잇는다.', challenge: '마지막 문항이 주말 일과로 바뀐다. 평일과 다른 점을 말한다(교사 진행).' },
      activity: {
        title: '화면 시간은 언제?', tool: 'kitchen',
        teacher: '"하늘이네 하루예요. \'화면 시간\' 카드는 어느 때에 두면 좋을까요?" 일과 칸을 손가락으로 짚어 읽은 뒤 카드를 잇는다. "잠자기 전에 보는 건 괜찮아요"라는 학생에게 "보고 나서 바로 누우면 눈과 마음이 쉴 수 있을까요?"라고 묻는다. 밥 먹을 때와 잠자기 바로 전은 피하고, 숙제를 마친 뒤처럼 정한 때에 본다는 점을 짚는다. "주말엔 약속이 필요 없다"는 생각에는 "주말에도 밥과 잠은 있지요?"라고 되묻는다.',
        task: '하늘이네 하루 일과 칸에 알맞은 카드를 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '저녁 일과에 카드를 이어요.', toolOptions: { mode: 'match', slots: ['저녁밥', '숙제 끝난 뒤', '잠자기 전'], cards: [C('rice', '밥 먹어요'), C('screen', '화면 시간'), C('brush', '양치해요')] }, target: { match: { 저녁밥: 'rice', '숙제 끝난 뒤': 'screen', '잠자기 전': 'brush' } }, difficulty: 0.1 },
          { prompt: '하루 일과에 카드를 이어요.', toolOptions: { mode: 'match', slots: ['일어나기', '아침밥', '숙제', '놀이', '잠'], cards: [C('wash', '세수해요'), C('eat', '밥 먹어요'), C('note', '공책 펴요'), C('screen', '화면 시간'), C('book', '그림책')] }, target: { match: { 일어나기: 'wash', 아침밥: 'eat', 숙제: 'note', 놀이: 'screen', 잠: 'book' } }, difficulty: 0.15,
            levels: { easy: { prompt: '하루 일과에 카드를 이어요(3장).', toolOptions: { slots: ['아침밥', '놀이', '잠'], cards: [C('eat', '밥 먹어요'), C('screen', '화면 시간'), C('book', '그림책')] }, target: { match: { 아침밥: 'eat', 놀이: 'screen', 잠: 'book' } } } } },
          { prompt: '학교 다녀온 뒤 카드를 이어요.', toolOptions: { mode: 'match', slots: ['손 씻기', '숙제', '숙제 다 한 뒤', '저녁밥', '잠'], cards: [C('soap', '비누 칠해요'), C('note', '공책 펴요'), C('screen', '화면 시간'), C('eat', '밥 먹어요'), C('lights', '불 꺼요')] }, target: { match: { '손 씻기': 'soap', 숙제: 'note', '숙제 다 한 뒤': 'screen', 저녁밥: 'eat', 잠: 'lights' } }, difficulty: 0.2,
            levels: { easy: { prompt: '학교 다녀온 뒤 카드를 이어요(3장).', toolOptions: { slots: ['숙제 다 한 뒤', '저녁밥', '잠'], cards: [C('screen', '화면 시간'), C('eat', '밥 먹어요'), C('lights', '불 꺼요')] }, target: { match: { '숙제 다 한 뒤': 'screen', 저녁밥: 'eat', 잠: 'lights' } } },
              challenge: { prompt: '주말 하루에 카드를 이어요.', toolOptions: { slots: ['늦잠 깬 뒤', '가족 나들이', '나들이 뒤', '저녁밥', '잠'], cards: [C('wash', '세수해요'), C('walk', '공원 걷기'), C('screen', '화면 시간'), C('eat', '밥 먹어요'), C('lights', '불 꺼요')] }, target: { match: { '늦잠 깬 뒤': 'wash', '가족 나들이': 'walk', '나들이 뒤': 'screen', 저녁밥: 'eat', 잠: 'lights' } } } },
            conclude: '화면은 숙제를 마친 뒤 정한 때에 봐요. 밥 먹을 때와 잠자기 전엔 꺼요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '화면 시간은 언제가 좋아요?', options: ['숙제 다 한 뒤', '잠자기 바로 전'], answer: '숙제 다 한 뒤' }] },
      notes: '일과는 하늘이네 가상 하루다. 학생의 실제 하루 일과·사용 시간은 묻지 않는다.',
    }),
    FAM({
      id: 'saf-cyber.e12.family-rule.activity.where', type: 'activity', title: '화면 보는 곳·끄는 곳 나누기',
      method: '화면 보기 좋은 곳·끄는 곳 나누기', tool: 'mindmap', minutes: 14,
      levels: { easy: '카드 4장, 맞는 가지에 놓으면 초록 테두리가 생기고 틀리면 되돌아온다.', base: '카드 6장을 다 놓은 뒤 확인한다.', challenge: '카드 8장, "엘리베이터 안"처럼 헷갈리는 카드가 섞인다. 끄는 곳에서 할 다른 놀이를 말한다(교사 진행).' },
      activity: {
        title: '어디서 봐도 될까?', tool: 'mindmap',
        teacher: '"하늘이네 집과 바깥에서 화면을 봐도 되는 곳과 끄는 곳을 나누어 볼까요?" 카드를 놓을 때마다 그곳에서 무엇을 하는지 말하게 한다. "이불 속이 아늑해서 좋아요"라는 학생에게 "이불 속은 어둡지요. 어두운 곳에서 화면을 보면 눈은 어떨까요?"라고 묻는다. "차 안에서는 심심하니까 봐도 돼요"라는 학생에게 "차가 흔들릴 때 화면을 오래 보면 속이 어떨까요? 창밖 보기 놀이는 어때요?"라고 되묻는다.',
        task: '장소 카드를 봐도 돼요·꺼요로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
        items: [
          SORT2(['봐도 돼요', '꺼요'], '집 안 장소를 나누어요.', { topic: '하늘이네 집' }, [C('sofa', '거실 소파'), C('desk', '책상'), C('living', '밝은 거실')], [C('table', '식탁'), C('blanket', '이불 속'), C('toilet', '화장실')], [C('bedside', '침대 머리맡'), C('bath', '욕조 안')], 0.1),
          SORT2(['봐도 돼요', '꺼요'], '바깥 장소를 나누어요.', { topic: '바깥에서' }, [C('lib', '도서관 자리'), C('wait', '앉아 기다릴 때'), C('home', '집에 와서')], [C('road', '길 걸을 때'), C('car', '차 안 오래'), C('cross', '횡단보도')], [C('lift', '엘리베이터 안'), C('stairs', '계단 내려갈 때')], 0.15),
          SORT2(['봐도 돼요', '꺼요'], '가족과 있을 때를 나누어요.', { topic: '가족과 있을 때' }, [C('call', '할머니 통화'), C('photo', '가족 사진 보기'), C('together', '함께 영상 보기')], [C('dinner', '저녁 먹을 때'), C('talk', '이야기할 때'), C('walk', '산책할 때')], [C('guest', '손님 왔을 때'), C('bedtime', '잘 준비할 때')], 0.2, { conclude: '식탁·이불 속·길에서는 끄고, 밝은 곳에서 정한 만큼 봐요.' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '봐도 되면 ○, 끄면 ×를 써요.', columns: ['곳', '○ / ×'], cells: [['책상', ''], ['식탁', ''], ['이불 속', ''], ['밝은 거실', '']], answer: '○, ×, ×, ○' }],
        easy: [{ type: 'choice', prompt: '화면을 끄는 곳에 ○ 해요.', options: ['식탁', '책상'], answer: '식탁' }] },
    }),
    FAM({
      id: 'saf-cyber.e12.family-rule.activity.family-budget', type: 'activity', title: '가족과 화면 시간 나누기',
      method: '가족과 화면 시간 나누기', tool: 'economy', minutes: 14,
      levels: { easy: '30분 바구니에서 카드 3장을 \'들어가요·넘쳐요\'로 나누고, 놓으면 바로 맞는지 보인다.', base: '40분 바구니에서 숙제 앱 10분을 \'꼭 넣어요\'에 먼저 두고 남은 30분에 들어가는 카드를 가린 뒤(카드 5장), 숙제 앱을 넣고 쓴 시간이 늘어날 때 남은 시간에 들어가는 카드를 가린다(카드 4장).', challenge: '평일 40분과 주말 60분 바구니를 따로 채운다(마지막 문항이 주말로 바뀜).' },
      activity: {
        title: '하루 화면 시간 40분 나누기', tool: 'economy',
        teacher: '"하늘이네 가족은 하루 화면 시간을 40분으로 정했어요. 숙제 앱 10분은 꼭 넣기로 했어요. 그럼 남은 시간은 몇 분일까요?" 손가락으로 10분씩 세며 남은 시간을 함께 구한다. "게임 20분, 만화 20분 다 넣어요"라는 학생에게 "숙제 앱 10분까지 더하면 바구니가 넘치지 않을까요?"라고 묻는다. 40분과 60분은 하늘이네 가상 약속이고, 우리 집 약속은 가족과 함께 정한다고 밝힌다.',
        task: '꼭 넣을 것을 먼저 두고, 남은 시간에 들어가는지 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          FIT('40분 중 숙제 앱 10분은 꼭!', ['꼭 넣어요', '들어가요', '넘쳐요'], [C('hw', '숙제 앱 10분'), C('cart', '만화 20분'), C('game', '게임 40분'), C('call', '영상 통화 10분'), C('movie', '영화 60분')], { hw: '꼭 넣어요', cart: '들어가요', call: '들어가요', game: '넘쳐요', movie: '넘쳐요' }, 0.1,
            { levels: { easy: { prompt: '30분 바구니예요. 나누어요(3장).', toolOptions: { slots: ['들어가요', '넘쳐요'], cards: [C('cart', '만화 20분'), C('game', '게임 40분'), C('call', '영상 통화 10분')] }, target: { sort: { 들어가요: ['cart', 'call'], 넘쳐요: ['game'] } } } } }),
          FIT('숙제 앱 포함 20분 썼어요. 남은 20분엔?', ['들어가요', '넘쳐요'], [C('song', '노래 10분'), C('game', '게임 30분'), C('cart', '만화 20분'), C('long', '영상 50분')], { song: '들어가요', cart: '들어가요', game: '넘쳐요', long: '넘쳐요' }, 0.15,
            { levels: { easy: { prompt: '남은 20분 바구니예요(3장).', toolOptions: { cards: [C('song', '노래 10분'), C('game', '게임 30분'), C('cart', '만화 20분')] }, target: { sort: { 들어가요: ['song', 'cart'], 넘쳐요: ['game'] } } } } }),
          FIT('숙제 앱 포함 30분 썼어요. 남은 10분엔?', ['들어가요', '넘쳐요'], [C('call', '영상 통화 10분'), C('cart', '만화 20분'), C('game', '게임 30분'), C('dance', '율동 10분')], { call: '들어가요', dance: '들어가요', cart: '넘쳐요', game: '넘쳐요' }, 0.2,
            { levels: { easy: { prompt: '남은 10분 바구니예요(3장).', toolOptions: { cards: [C('call', '영상 통화 10분'), C('cart', '만화 20분'), C('game', '게임 30분')] }, target: { sort: { 들어가요: ['call'], 넘쳐요: ['cart', 'game'] } } },
              challenge: { prompt: '주말 60분 중 숙제 앱은 꼭!', toolOptions: { slots: ['꼭 넣어요', '들어가요', '넘쳐요'], cards: [C('hw', '숙제 앱 10분'), C('movie', '가족 영화 50분'), C('game', '게임 60분'), C('cart', '만화 20분'), C('call', '영상 통화 10분')] }, target: { sort: { '꼭 넣어요': ['hw'], 들어가요: ['movie', 'cart', 'call'], 넘쳐요: ['game'] } } } },
            conclude: '꼭 할 것을 먼저 넣고, 남은 시간에 맞게 골라요. 넘치는 건 내일!' }),
        ],
      },
      worksheet: { items: [{ type: 'table', prompt: '하늘이네 40분을 나누어 써요.', columns: ['할 것', '분'], cells: [['숙제 앱', '10분'], ['남은 시간', '']], answer: '30분' }] },
      notes: '시장 놀이판의 예산 막대는 돈(원)만 세므로, 시간 나누기는 카드 나누기(꼭 넣어요·들어가요·넘쳐요)로 꾸몄다. 카드 한 장마다 남은 시간에 혼자 들어가는지를 판단한다. 30·40·60분은 가상 약속(연습용 값)이고 권장 시간이 아니다. 도전 주말 문항은 \'들어가요\' 카드를 모두 더하면 60분을 넘을 수 있어, 교사가 "이 가운데 무엇을 고를까?"를 말로 잇는다.',
    }),
    FAM({
      id: 'saf-cyber.e12.family-rule.activity.family-talk', type: 'activity', title: '가족에게 약속 말하는 말 카드',
      method: '가족에게 약속 말하는 말 카드 고르기', tool: 'wordcards', minutes: 14,
      levels: { easy: '말 카드 3장 가운데 약속 정할 때 쓸 말 2장을 담고, 놓으면 바로 맞는지 보인다.', base: '말 카드 5장 가운데 2~3장을 고르고, 짝과 역할놀이로 말해 본다.', challenge: '카드가 더 많고(6장), 역할놀이에서 부모 역할과 아이 역할을 바꿔 해 본다.' },
      activity: {
        title: '약속 정할 때 하는 말', tool: 'wordcards',
        teacher: '"하늘이가 가족과 화면 약속을 정해요. 어떤 말을 하면 함께 정할 수 있을까요?" 말 카드를 하나씩 읽어 주고 따라 말하게 한다. "싫어 더 볼래"를 고르는 학생에게 "그 말을 들은 엄마는 같이 정하고 싶을까요? \'○○하면 좋겠어요\'로 바꿔 볼까요?"라고 묻는다. 고른 말로 짝과 한 명은 아이, 한 명은 엄마나 아빠가 되어 역할놀이를 한다. 집에서 정할 때는 정해진 답이 없고 가족이 함께 정한다고 밝힌다.',
        task: '가족 약속을 정할 때 쓸 말을 고르고 역할놀이로 말해요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          { prompt: '함께 정할 때 쓸 말을 담아요.', toolOptions: { mode: 'pick', basket: '함께 정하는 말', cards: [C('together', '"같이 정해요"'), C('no', '"싫어 더 볼래"'), C('meal', '"밥 땐 꺼요"'), C('cry', '"엉엉 울래"'), C('ask', '"어때요?"')] }, target: { pick: ['together', 'meal', 'ask'] }, difficulty: 0.1,
            levels: { easy: { prompt: '함께 정할 때 쓸 말을 담아요(3장).', toolOptions: { cards: [C('together', '"같이 정해요"'), C('no', '"싫어 더 볼래"'), C('meal', '"밥 땐 꺼요"')] }, target: { pick: ['together', 'meal'] } },
              challenge: { prompt: '함께 정할 때 쓸 말을 담아요(6장).', toolOptions: { cards: [C('together', '"같이 정해요"'), C('no', '"싫어 더 볼래"'), C('meal', '"밥 땐 꺼요"'), C('cry', '"엉엉 울래"'), C('ask', '"어때요?"'), C('mine', '"내 맘대로"')] }, target: { pick: ['together', 'meal', 'ask'] } } } },
          { prompt: '바꿔 말할 말을 나누어요.', toolOptions: { mode: 'sort', slots: ['좋은 말', '바꿀 말'], cards: [C('please', '"부탁해요"'), C('shout', '"싫다고!"'), C('thanks', '"고마워요"'), C('ignore', '"몰라!"')] }, target: { sort: { '좋은 말': ['please', 'thanks'], '바꿀 말': ['shout', 'ignore'] } }, difficulty: 0.15,
            levels: { challenge: { prompt: '바꿔 말할 말을 나누어요(6장).', toolOptions: { cards: [C('please', '"부탁해요"'), C('shout', '"싫다고!"'), C('thanks', '"고마워요"'), C('ignore', '"몰라!"'), C('idea', '"이건 어때요"'), C('slam', '"쾅! 문 닫기"')] }, target: { sort: { '좋은 말': ['please', 'thanks', 'idea'], '바꿀 말': ['shout', 'ignore', 'slam'] } } } } },
          { prompt: '어른이 "끌 시간" 하면?', toolOptions: { mode: 'pick', basket: '대답하는 말', cards: [C('ok', '"알았어요"'), C('five', '"저장할게요"'), C('no', '"안 꺼!"')] }, target: { pick: ['ok', 'five'] }, difficulty: 0.15 },
          { prompt: '고른 말로 역할놀이를 해요.', free: true, talk: true, difficulty: 0.2, conclude: '"같이 정해요", "밥 땐 꺼요"처럼 말하면 가족이 함께 약속을 만들 수 있어요.' },
        ],
      },
      worksheet: { items: [{ type: 'choice', prompt: '약속을 정할 때 할 말은?', options: ['"같이 정해요"', '"싫어 더 볼래"'], answer: '"같이 정해요"' }] },
      notes: '낱말 카드 교구는 고르기·나누기 판만 쓴다(영어 발음 판 안 씀). 역할놀이는 교실에서만 하고, 집에서 실제로 어떻게 정했는지는 묻지 않는다.',
    }),
    FAM({
      id: 'saf-cyber.e12.family-rule.wrap.draw', type: 'wrap', title: '우리 집 약속 그물 만들기',
      method: '우리 집 약속 그림 마인드맵', tool: 'mindmap', minutes: 6,
      levels: { easy: '교사가 출구 1번의 \'언제·어디서\' 가지만 함께 읽으며 카드를 놓는다.', base: '언제·어디서·얼마나 세 가지에 카드를 놓는다.', challenge: '활동지에 가지마다 그림 카드 2장씩 그려 넣는다.' },
      wrap: {
        teacher: '"하늘이네 약속을 그물로 모아 볼까요? \'언제\' 가지엔 무엇이 올까요?" 가지 이름을 손가락으로 짚으며 카드를 놓는다. "얼마나"에 "자고 싶을 때까지"를 넣으려는 학생에게 "그러면 약속이 될까요? 정한 시간만큼이 약속이에요"라고 짚는다. 출구 2번에서 "어른만 정해요"를 고른 학생에게 "하늘이도 의견을 냈지요"라고 다시 말해 준다. 활동지에는 우리 집 약속 그물을 그려 가족과 함께 채워 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '하늘이네 화면 약속', slots: ['언제', '어디서', '얼마나'], cards: [C('after', '숙제 뒤'), C('desk', '책상에서'), C('time', '정한 시간만'), C('weekend', '주말 낮'), C('living', '밝은 거실'), C('alarm', '알람까지')] }, prompt: '약속 카드를 가지에 놓아요.', target: { sort: { 언제: ['after', 'weekend'], 어디서: ['desk', 'living'], 얼마나: ['time', 'alarm'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '화면 약속은 누가 정해요?', options: ['어른만 정해요', '가족이 함께'], answer: 1, difficulty: 0.1, explain: '가족이 함께 정하면 모두 잘 지킬 수 있어요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '우리 집 화면 약속 그물',
        items: [
          { type: 'table', prompt: '가족과 함께 약속을 써요.', columns: ['언제', '어디서', '얼마나'], cells: [['', '', '']], answer: '(가족과 정함 — 예: 숙제 뒤, 거실에서, 정한 시간만)' },
          { type: 'draw', prompt: '가족이 함께 약속을 정하는 모습을 그려요.' },
        ],
        easy: { note: '"언제·어디서·얼마나"를 떠올려요.', items: [{ type: 'draw', prompt: '화면을 보는 곳을 그려요.' }] },
      },
      notes: '활동지 약속 칸은 가족과 함께 채우는 과제다(부모 교육 연계). 정답을 매기지 않는다.',
    }),
    FAM({
      id: 'saf-cyber.e12.family-rule.wrap.promise-chant', type: 'wrap', title: '약속 세 가지 따라 말하기',
      method: '약속 세 가지 따라 말하며 점검', tool: 'timer', minutes: 6,
      levels: { easy: '교사가 약속 카드 두 장을 먼저 들어 보이며 손가락을 펴고 함께 말한다.', base: '약속 카드 세 장의 차례를 맞추고 손가락을 하나씩 펴며 따라 말한 뒤 점검 칸에 표시한다.', challenge: '약속을 지킨 날 붙일 표시(별·스티커 그림)를 정해 활동지에 그린다.' },
      wrap: {
        teacher: '"하나! 같이 정해요. (엄지) 둘! 밥 땐 꺼요. (검지) 셋! 자기 전 꺼요. (중지)" 약속 카드를 차례대로 놓은 뒤 손가락을 하나씩 펴며 반 전체가 세 번 따라 말한다. 그다음 가족에게 이 약속을 말할 마음이 있으면 점검 칸에 표시하게 한다(하지 않아도 괜찮다고 말해 준다). 출구 3번에서 "주말엔 약속이 필요 없어요"를 고른 학생에게 "주말에도 밥 먹고 잠자지요?"라고 되묻는다.',
        exitTicket: [
          CHANT('우리 집 약속', ['같이 정해요', '밥 땐 꺼요', '자기 전 꺼요']),
          SELF('오늘 점검', ['가족에게 말할래요'], '할 수 있으면 표시해요.'),
          { type: 'choice', prompt: '주말에도 약속이 필요해요?', options: ['필요 없어요', '주말에도 필요해요'], answer: 1, difficulty: 0.1, explain: '주말에도 밥 먹을 때와 자기 전에는 꺼요.' },
          MOOD,
        ],
      },
      worksheet: {
        title: '약속 세 가지',
        items: [
          { type: 'blank', prompt: '약속을 따라 써요.', text: '같이 정해요, 밥 땐 꺼요, 자기 전 ___.', answer: '꺼요' },
          { type: 'draw', prompt: '약속을 지킨 날 붙일 표시를 그려요.' },
        ],
      },
      notes: '점검 칸은 가족에게 말할 마음을 스스로 표시하는 것이다. 표시하지 않은 학생을 따로 묻지 않는다.',
    }),
  ];

  PaperLessons.registerModules([].concat(T_PROM, T_EYES, T_SIG, T_FAM));
})();
