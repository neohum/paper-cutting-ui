/* 창체 안전교육 사이버 중독 예방 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/safety-a.json 의 saf-cyber 초3-4.
 * 근거: 「학교안전교육 실시 기준 등에 관한 고시」(교육부고시 제2023-33호) 별표 2 초등 약물 및 사이버 중독 예방
 *   '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 7대 표준안 사이버(인터넷 게임·스마트폰) 소분류.
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 인물(하린·도윤·서아·지우·준·민)과 사용 기록·그래프 값은 모두 직접 지은 가상의 것이다. 학생 자신의 사용 시간·게임 이름·앱 이름은 묻거나 채점하지 않고,
 *   특정 게임·앱·회사 이름은 쓰지 않는다. 시간 예산 값(하루 60분·이번 주 150분 등)은 연습용 '우리 반 약속' 값이지 권장 기준이 아니다.
 * 주제 4개(3학년 2 · 4학년 2) — 계획 모듈 40개.
 *
 * 사람 확인: 근거 파일(research-safety.md)에 세부 수칙이 없어 일반 생활 안내로 쓴 문장 — 공식 안내처에서 확인한다.
 *   - 잠자기 바로 전 화면(영상)을 보면 잠들기 어렵고 다음 날 피곤할 수 있다 (daily-schedule.intro.morning-face, activity.day-order·sleep-path·evening-plan, wrap.week-check)
 *     → 질병관리청 국가건강정보포털 / 과학기술정보통신부·한국지능정보사회진흥원 스마트쉼센터
 *   - 게임 과몰입 신호(못 하면 화남·밥 거르기·밤늦게까지·다른 놀이에 흥미 잃음·그만두기 어려움)와 건강한 이용 모습 (game-signs 전 모듈)
 *     → 스마트쉼센터 / 한국콘텐츠진흥원 게임과몰입힐링센터 안내
 *   - 게임에는 이용 연령 표시가 있고, 시작 전에 보호자와 확인한다 (game-promise.activity.rule-parts·before-start, wrap.rule-map)
 *     → 게임물관리위원회 등급 안내
 *   - 게임 안 결제는 보호자와 함께 하고, 결제 잠금을 보호자와 확인한다 (game-promise.activity.rule-parts·before-start)
 *     → 한국소비자원 / 방송통신위원회 이용자 보호 안내
 *   - 오래 화면을 본 뒤 쉬는 시간에 일어나 몸을 펴고 먼 곳을 보면 좋다 (game-promise.activity.play-rest, smart-use.activity.focus-plan)
 *     → 질병관리청 국가건강정보포털
 *   - 잠자기 모드·사용 시간 알림·알림 끄기 설정은 보호자와 함께 켠다 (smart-use.activity.settings)
 *     → 스마트쉼센터 / 방송통신위원회 자녀 보호 안내
 *   - 밤에는 폰을 침실 밖(거실)에서 충전한다 (smart-use.wrap.charge-spot, daily-schedule.wrap.keep-check)
 *     → 스마트쉼센터 / 한국소비자원(충전 안전)
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'saf-cyber', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `saf-cyber.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const count = (groups) => groups.reduce((a, g) => a + g.length, 0);
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)])) });

  // 나누기(mindmap·story sort): 기본 = groups, 쉬움 = 앞 easySlots 칸만·칸마다 앞 ne장, 도전 = 칸마다 hard 카드를 더함
  const SORT = (prompt, base, slots, groups, ne, hard, d, more, easySlots) => {
    const es = easySlots || slots.length;
    const easyS = slots.slice(0, es);
    const easyG = groups.slice(0, es).map((g, i) => g.slice(0, Array.isArray(ne) ? ne[i] : ne));
    const hardG = groups.map((g, i) => g.concat(hard[i] || []));
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { slots, cards: mix(groups) }), target: sortT(slots, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${count(easyG)}장).`, toolOptions: { slots: easyS, cards: mix(easyG) }, target: sortT(easyS, easyG) },
        challenge: { prompt: `${p}(${count(hardG)}장).`, toolOptions: { cards: mix(hardG) }, target: sortT(slots, hardG) },
      },
      ...more,
    };
  };

  // 차례 놓기(kitchen·timeline order): steps = 바른 차례의 카드, order = 정답(이웃한 자리끼리 순서 무관이면 [id,id] 한 덩이),
  // 쉬움 = easy { idx(쓸 카드 번호), order }, 도전 = 틀린 카드(trap) 한 장이 섞인다. labels 가 있으면 칸 이름(시각)을 붙인다.
  const ORD = (prompt, base, steps, order, easy, trap, d, more, labels) => {
    const p = strip(prompt);
    const es = easy.idx.map((i) => steps[i]);
    const slotsOf = (n, idx) => (labels ? (idx ? idx.map((i) => labels[i]) : labels) : n);
    const shuffled = (list) => list.slice(1).concat(list[0]).reverse();
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: slotsOf(steps.length), cards: shuffled(steps) }), target: { order }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(${es.length}장).`, toolOptions: { slots: slotsOf(es.length, easy.idx), cards: shuffled(es) }, target: { order: easy.order } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: shuffled(steps.concat(trap)) }, target: { order } },
      },
      ...more,
    };
  };

  // 갈림길(dilemma): 기본 = 장면 둘(보기 3개), 쉬움 = 첫 장면만(바른 보기 + 첫 틀린 보기), 도전 = 끝에서 근거 카드 고르기
  const DIL = (prompt, scene, good, reasons, okReasons, d, more) => {
    const g0 = good[0][0];
    const easyScene = Object.assign({}, scene, {
      choices: scene.choices.filter((c) => c.id === g0 || c.id === scene.choices.find((x) => x.id !== g0).id)
        .map((c) => (c.id === g0 ? { id: c.id, text: c.text, result: c.result, impact: c.impact, ending: c.ending } : c)),
    });
    return {
      prompt, toolOptions: { scene }, target: { path: good }, difficulty: d,
      levels: {
        easy: { prompt: `${strip(prompt)}(한 번 골라요).`, toolOptions: { scene: easyScene }, target: { path: [[g0]] } },
        challenge: { prompt: `${strip(prompt)}. 끝에서 근거도 골라요.`, toolOptions: { reasons }, target: { path: good, reasons: okReasons } },
      },
      ...more,
    };
  };

  // 할 것만 표시하는 점검표(kitchen checklist): 기본 = items 전부, 쉬움 = easyIdx 번째 칸만
  const CHK = (prompt, title, items, easyIdx, d, more) => {
    const ok = (list) => list.filter((x) => x.ok).map((x) => x.id);
    const strip2 = (list) => list.map((x) => ({ id: x.id, text: x.text }));
    const easy = easyIdx.map((i) => items[i]);
    return {
      prompt, toolOptions: { mode: 'checklist', title, items: strip2(items) }, target: { checklist: ok(items) }, difficulty: d,
      levels: { easy: { prompt: `${strip(prompt)}(${easy.length}칸).`, toolOptions: { items: strip2(easy) }, target: { checklist: ok(easy) } } },
      ...more,
    };
  };

  // 시간 블록 고르기(economy pick): 기본 = cards, 쉬움 = easy { cards, pick, prompt }, 도전 = 함정 블록(trap) 하나 더
  const PICK = (prompt, base, cards, pick, easy, trap, d, more) => ({
    prompt, toolOptions: Object.assign({}, base, { mode: 'pick', cards }), target: { pick }, difficulty: d,
    levels: {
      easy: { prompt: easy.prompt, toolOptions: { cards: easy.cards }, target: { pick: easy.pick } },
      challenge: { prompt: `${strip(prompt)}. 긴 블록도 있어요.`, toolOptions: { cards: cards.concat(trap) }, target: { pick } },
    },
    ...more,
  });

  // 스스로 점검(timer selfCheck) 출구 질문: 쉬움 앞 2칸, 기본 앞 3칸, 도전 4칸
  const SELF = (title, checks, prompt) => ({
    type: 'tool', tool: 'timer', options: { title }, prompt: prompt || '오늘 한 것에 스스로 표시해요.', target: { selfCheck: checks.slice(0, 3) }, difficulty: 0.1,
    levels: { easy: { target: { selfCheck: checks.slice(0, 2) } }, challenge: { target: { selfCheck: checks.slice(0, 4) } } },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const PRIVACY = '학생 자신의 사용 시간·즐겨 하는 게임이나 앱 이름을 묻거나 발표시키지 않는다. 가상 친구의 일로만 이야기하고, 특정 게임·앱·회사 이름이 나오면 "게임", "영상 앱"처럼 바꿔 말한다.';

  // ======================================================================================================
  // 3학년 · 하루 사용 시간표 만들기 (별표 2 초등 '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 표준안 스마트폰)
  // ======================================================================================================
  {
    const C = T('daily-schedule', 3);
    const W = [['월', 3], ['화', 4], ['수', 2], ['목', 3], ['금', 6]];
    const PIC = { type: 'picture', title: '하린이가 영상을 본 칸 수(가상, 한 칸 10분)', unit: '칸', xLabel: '요일', yLabel: '칸 수', icons: [{ value: 5, name: '5칸' }, { value: 1, name: '1칸' }], icon: 'square' };
    const DAYS = ['월', '화', '수', '목', '금'];
    M.push(
      C({
        id: 'saf-cyber.e34.daily-schedule.intro.day-clock', type: 'intro', title: '하린이의 하루 시각 읽기',
        method: '하루 주요 시각 읽기', tool: 'clock', minutes: 5,
        levels: { easy: '디지털 시각이 함께 보이는 시계로 6시 30분·9시 30분 두 시각을 함께 읽는다.', base: '2시 40분·6시 30분·9시 30분 세 시계를 읽고 그때 하는 일과 짝 짓는다.', challenge: '세 시각을 읽고, 학교가 끝난 2시 40분부터 잠자는 9시 30분까지 몇 시간 몇 분인지 말한다.' },
        intro: {
          teacher: '"하린이는 2시 40분에 학교가 끝나요. 저녁은 6시 30분, 잠은 9시 30분이에요." 시연 단추로 시계 바늘이 세 시각으로 차례로 움직이는 것을 보이고, 시각마다 하린이가 무엇을 할지 묻는다(기다릴 반응: "집에 가요", "밥 먹어요", "자요"). "학교 끝나면 남는 시간이 엄청 많아요"라는 말이 나오면 "2시 40분부터 9시 30분까지, 숙제·밥·씻기를 빼면 얼마나 남을까요?"라고 되물어 하루 시간이 정해져 있다는 것을 짚는다.',
          student: '시계 세 개를 읽고, 그 시각에 하린이가 무엇을 할지 짝에게 말해 보아요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 2, m: 40 }, { h: 6, m: 30 }, { h: 9, m: 30 }] },
          art: { draw: 'three paper clocks in a row showing 2:40, 6:30 and 9:30, under them a paper school bag, a rice bowl and a pillow', banner: '하린이의 하루 시각', extra: [{ motif: 'sun', x: 300, y: 96 }] },
        },
        notes: PRIVACY,
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.intro.harin-story', type: 'intro', title: '하린이의 꼬인 저녁',
        method: '가상 친구 이야기 듣고 문제 찾기', tool: 'story', minutes: 5,
        levels: { easy: '장면 3장을 함께 읽고 일이 꼬인 장면을 고른다.', base: '장면 4장 가운데 일이 꼬인 장면을 고르고 고른 이유를 한 문장으로 말한다.', challenge: '꼬인 장면을 고른 뒤, 하린이가 그 장면을 어떻게 바꾸면 좋을지 새 장면을 지어 짝에게 말한다.' },
        intro: {
          teacher: '"하린이의 저녁 이야기를 들어 볼까요?" 장면 카드를 차례로 읽어 주고 "어디에서 일이 꼬이기 시작했을까요?"라고 묻는다. 시연 단추로 \'영상을 계속 넘겨 봄\' 장면이 바구니에 담기는 것을 보인다. "숙제를 못 한 장면이 문제예요"라는 말이 나오면 "숙제를 못 하게 된 것은 그 앞에 무슨 일이 있어서일까요?"라고 되물어 꼬인 까닭이 앞 장면에 있다는 것을 짚는다.',
          student: '하린이의 저녁 장면을 읽고, 일이 꼬이기 시작한 장면을 골라 까닭을 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '일이 꼬인 장면', shuffle: false, cards: [{ id: 'home', text: '집에 와서 간식', motif: 'house' }, { id: 'scroll', text: '영상을 계속 넘겨 봄', motif: 'star' }, { id: 'late', text: '밤 10시, 숙제 못 함', motif: 'moon' }, { id: 'rush', text: '아침에 허둥지둥', motif: 'sun' }] }, sequence: [{ pick: ['scroll'] }] },
          art: { draw: 'four paper story panels: a child eating a snack at home, the child on a sofa with a glowing tablet, the child at a desk at night with an unfinished notebook, the child rushing out of the door in the morning', banner: '어디에서 꼬였을까?', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: PRIVACY,
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.intro.morning-face', type: 'intro', title: '늦게 잔 다음 날 아침',
        method: '늦게 잔 다음 날 아침 표정 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '마음 카드 2장(피곤함·신남) 가운데 하나를 함께 고른다.', base: '마음 카드 4장과 몸 상태 카드 가운데 알맞은 것을 고른다.', challenge: '마음과 몸 상태를 고른 뒤, 그 아이에게 해 줄 말을 한 문장으로 짝에게 말한다.' },
        intro: {
          teacher: '"이 친구는 어젯밤 이불 속에서 영상을 늦게까지 봤어요. 오늘 아침 얼굴이 어때 보이나요?" 시연 단추로 \'피곤함\'과 \'하품이 나요\' 카드가 바구니에 담기는 것을 보인다. "영상 보고 자면 꿈도 재밌어요"라는 말이 나오면 "잠든 시각이 늦어지면 아침에 일어날 때 어떨까요?"라고 되물어 잠자기 전 화면이 다음 날 아침과 이어진다는 것을 짚는다.',
          student: '늦게까지 영상을 본 친구의 아침 그림을 보고 마음과 몸 상태를 골라 보아요.',
          demo: { tool: 'emotion', options: { mode: 'pick', basket: '아침의 마음과 몸', shuffle: false, cards: [{ id: '피곤함', text: '피곤함' }, { id: '신남', text: '신남' }, { id: 'yawn', text: '하품이 나요' }, { id: 'fresh', text: '몸이 가뿐해요' }] }, sequence: [{ pick: ['피곤함', 'yawn'] }] },
          art: { draw: 'a sleepy paper child yawning at a breakfast table in the morning, a paper tablet left on a crumpled blanket in the background', banner: '어젯밤 늦게 잤더니', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '"어젯밤 늦게 잔 사람?"처럼 학생의 실제 잠·사용 시간을 묻지 않는다. 그림 속 친구의 일로만 이야기한다.',
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.activity.day-order', type: 'activity', title: '하루 일과 시간 칸에 놓기',
        method: '하루 일과 차례 놓기', tool: 'kitchen', minutes: 14,
        levels: { easy: '시각이 적힌 칸 4개에 카드 4장을 놓고, 놓으면 바로 맞는지 알려 준다.', base: '시각 칸 5~6개에 일과 카드를 놓고, 화면 시간 카드를 알맞은 자리에 끼운다.', challenge: '함정 카드 1장을 빼고 놓은 뒤, 3번(주말) 일과가 평일과 어떻게 다른지 짝에게 말한다.' },
        activity: {
          title: '하루 일과 시간 칸에 놓기', tool: 'kitchen',
          teacher: '"3시 30분에는 무엇을 하면 좋을까요? 왜 그때일까요?" 카드를 놓을 때마다 시각과 하는 일을 이어 "○시에는 ○○을 해요"라고 말하게 한다. 놀이를 숙제보다 앞에 두는 학생에게 "놀다가 저녁이 되면 숙제는 언제 할까요?"라고 묻고, 화면 시간을 9시 30분 바로 앞에 두는 학생에게 "화면을 보다 바로 누우면 잠이 잘 올까요?"라고 묻는다. 꼭 할 일 먼저, 잠 앞에는 화면 끄기를 짚는다.',
          task: '하린이의 일과 카드를 시각이 적힌 칸에 차례대로 놓아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('하린이의 평일 하루를 시간 칸에 놓아요.', { autoMotif: false, title: '평일 하루' },
              [{ id: 'home', text: '집에 오기' }, { id: 'snack', text: '간식 먹기' }, { id: 'hw', text: '숙제하기' }, { id: 'play', text: '밖에서 놀기' }, { id: 'wash', text: '씻기' }, { id: 'sleep', text: '잠자기' }],
              ['home', 'snack', 'hw', 'play', 'wash', 'sleep'], { idx: [0, 1, 2, 3], order: ['home', 'snack', 'hw', 'play'] },
              { id: 'bedvideo', text: '누워서 영상', why: '잠자리에 누워 영상을 보면 잠드는 시각이 늦어져요.' }, 0.15, {},
              ['2시 40분', '3시', '3시 30분', '5시', '8시 30분', '9시 30분']),
            ORD('화면 시간 카드를 넣어 저녁을 놓아요.', { autoMotif: false, title: '화면 시간 끼우기' },
              [{ id: 'hw', text: '숙제하기' }, { id: 'screen', text: '화면 시간 30분' }, { id: 'play', text: '줄넘기 놀이' }, { id: 'wash', text: '씻기' }, { id: 'sleep', text: '잠자기' }],
              ['hw', ['screen', 'play'], 'wash', 'sleep'], { idx: [0, 1, 3, 4], order: ['hw', 'screen', 'wash', 'sleep'] },
              { id: 'more', text: '잠 앞에 영상 더', why: '잠 바로 앞에는 화면을 끄고 몸과 눈을 쉬게 해요.' }, 0.2, {},
              ['3시 30분', '4시 30분', '5시', '8시 30분', '9시 30분']),
            ORD('하린이의 주말 하루를 시간 칸에 놓아요.', { autoMotif: false, title: '주말 하루' },
              [{ id: 'bf', text: '아침 먹기' }, { id: 'room', text: '방 정리하기' }, { id: 'lunch', text: '점심 먹기' }, { id: 'screen', text: '화면 시간' }, { id: 'dinner', text: '저녁 먹기' }, { id: 'sleep', text: '잠자기' }],
              ['bf', 'room', 'lunch', 'screen', 'dinner', 'sleep'], { idx: [0, 1, 2, 3], order: ['bf', 'room', 'lunch', 'screen'] },
              { id: 'allday', text: '하루 종일 영상', why: '화면 시간도 하루 시간표 안에서 정한 만큼만 써요.' }, 0.25,
              { conclude: '꼭 할 일을 먼저 하고, 화면 시간은 잠 바로 앞이 아닌 자리에 넣어요.' },
              ['9시', '10시', '12시', '3시', '6시', '9시 30분']),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '꼭 할 일인 ___를 먼저 하고 화면을 봐요.', answer: '숙제' }] },
        notes: PRIVACY,
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.activity.record-table', type: 'activity', title: '하린이 기록 그림그래프',
        method: '사용 기록 표를 그림그래프로 나타내기', tool: 'chart', minutes: 14,
        levels: { easy: '3일치(월·화·수) 그림그래프를 만들고, 월요일 그림은 미리 놓여 있다.', base: '5일치 그림그래프를 모두 완성하고, 가장 많이 본 날·가장 적게 본 날을 고른다.', challenge: '5일치를 완성한 뒤 가장 많은 날과 적은 날의 칸 수 차를 구하고, 많이 본 날의 까닭을 짝과 말한다.' },
        activity: {
          title: '하린이 사용 기록 그림그래프', tool: 'chart',
          teacher: '"큰 네모 하나는 몇 칸일까요? 6칸이면 큰 네모와 작은 네모를 몇 개씩 놓을까요?" 표의 수를 소리 내어 읽고 그림을 놓게 한다. 작은 네모만 6개 놓는 학생에게 "큰 네모 하나가 5칸이에요. 더 간단히 나타낼 수 있을까요?"라고 묻는다. 그래프는 가상의 하린이 기록이라는 것을 먼저 밝히고, 우리 반 친구들의 기록은 묻지 않는다. 금요일에 많이 본 까닭을 "다음 날 학교에 안 가서", "숙제가 없어서"처럼 일과에서 찾아보게 한다.',
          task: '하린이의 사용 기록 표를 보고 그림그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 하린이의 그림그래프를 완성해요.', toolOptions: Object.assign({}, PIC, { mode: 'build', data: W }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 3일치 그림그래프를 완성해요.', toolOptions: { data: W.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 영상을 가장 많이 본 요일은?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: W, question: '가장 많이 본 요일은 언제인가요?', choices: DAYS }), target: { pick: 4 }, difficulty: 0.15 },
            { prompt: '그래프에서 영상을 가장 적게 본 요일은?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: W, question: '가장 적게 본 요일은 언제인가요?', choices: DAYS }), target: { pick: 2 }, difficulty: 0.2,
              levels: { challenge: { prompt: '가장 많은 날과 적은 날은 몇 칸 차이일까요?', toolOptions: { question: '금요일과 수요일은 몇 칸 차이인가요?', choices: null }, target: { value: 4 } } },
              conclude: '그래프를 보면 화면을 많이 본 날이 보여요. 그날 일과에서 까닭을 찾아 다음 시간표에 고쳐 넣어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '하린이 기록 표의 빈칸을 채워요.', columns: ['요일', '칸 수'], cells: [['월', '3'], ['화', ''], ['금', '']], answer: '4, 6' }] },
        notes: '그래프 값은 가상의 하린이 기록이다. 학생에게 자기 기록을 적어 오게 하거나 발표시키지 않는다.',
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.activity.time-budget', type: 'activity', title: '오늘의 화면 시간 고르기',
        method: '하루 화면 시간 예산 짜기', tool: 'economy', minutes: 14,
        levels: { easy: '시간 블록 3개 가운데 정한 시간을 넘지 않게 고른다.', base: '시간 블록 4개 가운데 정한 시간에 딱 맞게 고르고, 조건(학습 앱·게임 꼭 넣기)을 지킨다.', challenge: '긴 블록(영화 한 편)까지 5개 블록 가운데 고르고, 고른 까닭을 짝에게 설명하며 짝의 고름과 견준다.' },
        activity: {
          title: '정한 시간 안에서 블록 고르기', tool: 'economy',
          teacher: '"오늘 하린이네 약속은 60분이에요. 학습 앱 20분을 넣으면 몇 분이 남을까요?" 블록을 하나 넣을 때마다 남은 시간을 소리 내어 셈하게 한다. 60분은 연습용으로 정한 우리 반 약속 값이지 정해진 기준이 아니라는 것을 먼저 밝힌다. "남는 시간은 다 화면을 봐도 돼요"라는 학생에게 "60분을 넘기면 숙제나 잠자는 시간은 어떻게 될까요?"라고 묻는다. 고른 까닭을 짝과 바꿔 말하게 한다.',
          task: '정해진 화면 시간 안에서 넣을 시간 블록을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            PICK('60분에 딱 맞게 골라요. 학습 앱은 꼭 넣어요.', { basket: '오늘 넣을 시간' },
              [{ id: 'learn', text: '학습 앱 20분' }, { id: 'video', text: '영상 30분' }, { id: 'game', text: '게임 50분' }, { id: 'call', text: '가족 통화 10분' }], ['learn', 'video', 'call'],
              { prompt: '60분을 넘지 않게 학습 앱과 하나를 더 골라요.', cards: [{ id: 'learn', text: '학습 앱 20분' }, { id: 'video', text: '영상 30분' }, { id: 'game', text: '게임 50분' }], pick: ['learn', 'video'] },
              { id: 'movie', text: '영화 한 편 100분' }, 0.2),
            PICK('숙제가 많은 날은 30분이에요. 학습 앱을 넣고 딱 맞게 골라요.', { basket: '오늘 넣을 시간' },
              [{ id: 'learn', text: '학습 앱 20분' }, { id: 'video', text: '영상 30분' }, { id: 'game', text: '게임 50분' }, { id: 'call', text: '가족 통화 10분' }], ['learn', 'call'],
              { prompt: '30분을 넘지 않게 학습 앱과 하나를 더 골라요.', cards: [{ id: 'learn', text: '학습 앱 20분' }, { id: 'video', text: '영상 30분' }, { id: 'call', text: '가족 통화 10분' }], pick: ['learn', 'call'] },
              { id: 'movie', text: '영화 한 편 100분' }, 0.25),
            PICK('주말은 90분이에요. 게임을 넣고 딱 맞게 골라요.', { basket: '주말에 넣을 시간' },
              [{ id: 'learn', text: '학습 앱 20분' }, { id: 'video', text: '영상 30분' }, { id: 'game', text: '게임 50분' }, { id: 'call', text: '가족 통화 10분' }], ['video', 'game', 'call'],
              { prompt: '90분을 넘지 않게 게임과 하나를 더 골라요.', cards: [{ id: 'game', text: '게임 50분' }, { id: 'video', text: '영상 30분' }, { id: 'movie', text: '영화 한 편 100분' }], pick: ['game', 'video'] },
              { id: 'movie', text: '영화 한 편 100분' }, 0.3,
              { conclude: '화면 시간도 예산처럼 정해 두고, 넘치지 않게 골라 써요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '셈을 해서 빈칸을 채워요.', text: '60분 가운데 학습 앱 20분을 쓰면 ___분이 남아요.', answer: '40' }] },
        notes: '60분·30분·90분은 셈 연습용 우리 반 약속 값이다. 권장 시간처럼 말하지 않고, 실제 시간은 가정에서 보호자와 정한다고 안내한다.',
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.activity.priority', type: 'activity', title: '꼭 할 일 먼저 나누기',
        method: '꼭 할 일·하고 싶은 일·나중 일 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '두 가지(꼭 할 일·하고 싶은 일)에 카드 4장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '세 가지에 카드 6장을 나눈다.', challenge: '헷갈리는 카드 3장이 더해진 9장을 나누고, 짝과 다르게 놓은 카드를 골라 토의한다.' },
        activity: {
          title: '꼭 할 일·하고 싶은 일·나중 일', tool: 'mindmap',
          teacher: '"이 일은 오늘 꼭 해야 할까요, 하고 싶은 일일까요, 다음에 해도 될까요?" 카드마다 "왜냐하면"을 붙여 말하게 한다. 게임을 꼭 할 일에 두는 학생에게 "오늘 게임을 못 하면 내일 학교에서 곤란할까요?"라고 묻는다. 하고 싶은 일은 나쁜 것이 아니라, 꼭 할 일 다음에 한다는 점을 짚는다.',
          task: '하린이의 할 일 카드를 꼭 할 일·하고 싶은 일·나중에 해도 될 일로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('내일 받아쓰기가 있는 날 저녁 일을 나누어요.', { topic: '받아쓰기 전날' }, ['꼭 할 일', '하고 싶은 일', '나중에 해도 될 일'],
              [['숙제하기', '받아쓰기 연습'], ['게임하기', '영상 보기'], ['방학 계획 짜기', '선물 미리 고르기']], 2, [['책가방 챙기기'], ['만화책 보기'], ['사진 정리하기']], 0.15, {}, 2),
            SORT('줄넘기 시험 전날 저녁 일을 나누어요.', { topic: '줄넘기 시험 전날' }, ['꼭 할 일', '하고 싶은 일', '나중에 해도 될 일'],
              [['줄넘기 연습', '책가방 챙기기'], ['영상 보기', '보드게임'], ['책장 정리하기', '그림 바꿔 걸기']], 2, [['일찍 잠자기'], ['게임하기'], ['다음 달 책 고르기']], 0.2, {}, 2),
            SORT('토요일 오전 일을 나누어요.', { topic: '토요일 오전' }, ['꼭 할 일', '하고 싶은 일', '나중에 해도 될 일'],
              [['방 정리하기', '독서록 쓰기'], ['게임하기', '자전거 타기'], ['겨울옷 꺼내기', '생일 카드 쓰기']], 2, [['화분에 물 주기'], ['영상 보기'], ['사진첩 꾸미기']], 0.25,
              { conclude: '꼭 할 일을 먼저 끝내면 하고 싶은 일을 마음 편히 할 수 있어요.' }, 2),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '꼭 할 일이면 "꼭", 하고 싶은 일이면 "하"를 써요.', columns: ['일', '꼭 / 하'], cells: [['숙제하기', ''], ['게임하기', ''], ['책가방 챙기기', ''], ['영상 보기', '']], answer: '꼭, 하, 꼭, 하' }] },
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.activity.sleep-path', type: 'activity', title: '갈림길: 잠자기 전 영상',
        method: '잠자기 전 갈림길 결과 따라가기', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번(밤·다음 날 아침), 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고르고, 결과를 바꾸는 방법을 짝에게 말한다.' },
        activity: {
          title: '갈림길: 잠자기 전 화면', tool: 'dilemma',
          teacher: '"\'하나만 더\'를 고르면 다음 날 아침은 어떻게 될까요?" 보기를 고를 때마다 결과 장면을 소리 내어 읽고, 하린이와 가족에게 어떤 일이 생기는지 짝과 말하게 한다. "잠자기 직전에 보는 영상은 잠에 상관없어요"라는 학생에게 "영상이 끝나면 바로 잠이 올까요, 다음 영상이 궁금할까요?"라고 묻는다. 결과를 바꾸려면 언제 끄면 좋을지 함께 정한다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('밤 9시, 다음 영상이 저절로 나와요. 어떻게 할까요?', {
              text: '밤 9시, 영상이 끝났는데 다음 영상이 저절로 나오기 시작했어요.', motif: 'moon',
              choices: [
                { id: 'more', text: '하나만 더 본다', result: '하나가 둘이 되고 어느새 10시가 넘었어요.', impact: [{ who: '하린', text: '아침에 졸려요', tone: -1 }] },
                { id: 'off', text: '끄고 책을 읽는다', result: '영상을 끄고 책을 읽다 잠이 들었어요.', ending: '제때 잠들어 아침에 개운하게 일어났어요.', next: {
                  text: '다음 날 아침, 일찍 눈이 떠졌어요. 학교 가기 전 10분이 남았어요.', choices: [
                    { id: 'pack', text: '책가방을 다시 챙긴다', result: '빠뜨린 준비물을 찾아 넣었어요.', impact: [{ who: '하린', text: '여유 있게 등교해요', tone: 1 }], ending: '잠을 지키니 아침도 여유로웠어요.' },
                    { id: 'video', text: '영상을 켠다', result: '보다가 시간이 가서 뛰어가야 했어요.', impact: [{ who: '하린', text: '지각할 뻔했어요', tone: -1 }] },
                    { id: 'bed', text: '누워서 폰을 본다', result: '다시 잠이 들어 늦게 일어났어요.', impact: [{ who: '가족', text: '깨우느라 바빠요', tone: -1 }] },
                  ] } },
                { id: 'under', text: '이불 속에서 몰래 본다', result: '밤늦게 잠들어 아침에 일어나기 힘들었어요.', impact: [{ who: '하린', text: '수업 시간에 졸려요', tone: -1 }] },
              ] }, [['off', 'pack']],
            [{ id: 'rest', text: '푹 자야 아침이 개운해서' }, { id: 'first', text: '잠이 화면보다 먼저라서' }, { id: 'one', text: '하나만 더는 금방 끝나서', why: '하나만 더가 이어지면 잠자는 시간이 줄어요.' }], ['rest', 'first'], 0.2),
            DIL('숙제가 남았는데 영상 링크가 왔어요. 어떻게 할까요?', {
              text: '저녁 8시, 숙제가 남았는데 친구가 재미있는 영상 링크를 보냈어요.', motif: 'star',
              choices: [
                { id: 'watch', text: '바로 본다', result: '영상을 보다 숙제를 다 못 했어요.', impact: [{ who: '하린', text: '숙제를 못 냈어요', tone: -1 }] },
                { id: 'later', text: '숙제 끝나고 본다', result: '숙제를 먼저 마쳤어요.', ending: '꼭 할 일을 먼저 끝냈어요.', next: {
                  text: '숙제를 마치니 9시예요. 잘 시간이 30분 남았어요.', choices: [
                    { id: 'tomorrow', text: '내일 보기로 하고 씻는다', result: '씻고 제때 잠자리에 들었어요.', impact: [{ who: '하린', text: '푹 잤어요', tone: 1 }], ending: '영상은 내일 정한 시간에 보기로 했어요.' },
                    { id: 'bedwatch', text: '침대에서 본다', result: '영상을 보다 잠드는 시각이 늦어졌어요.', impact: [{ who: '하린', text: '아침에 피곤해요', tone: -1 }] },
                    { id: 'all', text: '끝까지 다 본다', result: '관련 영상까지 보다 10시가 넘었어요.', impact: [{ who: '가족', text: '걱정했어요', tone: -1 }] },
                  ] } },
                { id: 'both', text: '숙제하며 같이 본다', result: '숙제가 틀리고 시간도 오래 걸렸어요.', impact: [{ who: '하린', text: '숙제를 다시 해요', tone: -1 }] },
              ] }, [['later', 'tomorrow']],
            [{ id: 'first', text: '꼭 할 일이 먼저라서' }, { id: 'sleep', text: '잠자는 시간을 지켜야 해서' }, { id: 'friend', text: '친구가 보냈으니 바로 봐야 해서', why: '친구 영상도 정한 시간에 보면 돼요.' }], ['first', 'sleep'], 0.25),
            DIL('잠자리 옆 폰에서 알림이 울려요. 어떻게 할까요?', {
              text: '밤 9시 30분, 침대 옆에 둔 폰에서 "띵!" 알림이 울렸어요.', motif: 'house',
              choices: [
                { id: 'check', text: '바로 확인한다', result: '확인하다 다른 것도 보게 됐어요.', impact: [{ who: '하린', text: '잠이 달아났어요', tone: -1 }] },
                { id: 'away', text: '폰을 거실에 두고 온다', result: '폰을 거실에 두고 왔어요.', ending: '폰을 멀리 두니 금방 잠들었어요.', next: {
                  text: '폰을 두고 왔는데 잠이 오지 않아 뒤척여요.', choices: [
                    { id: 'book', text: '책을 조금 읽는다', result: '책을 읽다 스르르 잠이 들었어요.', impact: [{ who: '하린', text: '푹 잤어요', tone: 1 }], ending: '화면 대신 책으로 잠을 청했어요.' },
                    { id: 'back', text: '폰을 다시 가져온다', result: '다시 화면을 보다 늦게 잠들었어요.', impact: [{ who: '하린', text: '아침에 졸려요', tone: -1 }] },
                    { id: 'tv', text: '거실 TV를 켠다', result: '소리에 가족이 깼어요.', impact: [{ who: '가족', text: '잠을 설쳤어요', tone: -1 }] },
                  ] } },
                { id: 'blanket', text: '이불 속에서 본다', result: '화면 빛 때문에 잠이 오지 않았어요.', impact: [{ who: '하린', text: '늦게 잠들었어요', tone: -1 }] },
              ] }, [['away', 'book']],
            [{ id: 'far', text: '폰이 멀리 있어야 덜 보게 돼서' }, { id: 'rest', text: '잠자기 전엔 눈도 쉬어야 해서' }, { id: 'urgent', text: '알림은 꼭 바로 봐야 해서', why: '밤에 온 알림은 아침에 봐도 돼요.' }], ['far', 'rest'], 0.3,
            { conclude: '잠자기 전에는 화면을 끄고, 폰은 침대에서 먼 곳에 두어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '밤 9시, 다음 영상이 저절로 나오면?', options: ['하나만 더 봐요', '끄고 잘 준비를 해요', '이불 속에서 봐요'], answer: '끄고 잘 준비를 해요' }] },
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.activity.evening-plan', type: 'activity', title: '저녁 사용 시간표 짜기',
        method: '저녁 사용 시간표 차례 짜기', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 4장을 저녁 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 6장으로 저녁 시간표를 놓되 화면 시간이 잠 바로 앞에 오지 않게 한다. 2·3번은 가족 일정(학원·저녁 식사)이 든 시간표다.', challenge: '함정 카드(잠 바로 앞 화면) 1장을 빼고 6장을 놓는다.' },
        activity: {
          title: '저녁 사용 시간표 짜기', tool: 'timeline',
          teacher: '"화면 시간은 어디에 넣으면 좋을까요? 잠자기 바로 앞은 왜 피할까요?" 카드를 다 놓으면 처음부터 끝까지 "먼저 ○○, 다음 ○○" 하고 소리 내어 읽게 한다. 놀이와 화면 시간은 어느 쪽이 먼저여도 되고, 씻기와 책 읽기도 그렇다는 것을 알려 준다. 화면 시간을 맨 끝에 두는 학생에게 "화면을 끄고 바로 누우면 잠이 잘 올까요? 그 사이에 무엇을 넣을까요?"라고 묻는다.',
          task: '저녁에 할 일 카드를 시간표 차례대로 놓아요. 화면 시간은 잠 바로 앞에 두지 않아요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('평일 저녁 시간표를 차례대로 놓아요.', { axis: ['저녁', '잠자리'] },
              [{ id: 'hw', text: '숙제' }, { id: 'play', text: '놀이' }, { id: 'screen', text: '화면 시간' }, { id: 'wash', text: '씻기' }, { id: 'read', text: '책 읽기' }, { id: 'sleep', text: '잠' }],
              ['hw', ['play', 'screen'], ['wash', 'read'], 'sleep'], { idx: [0, 2, 3, 5], order: ['hw', 'screen', 'wash', 'sleep'] },
              { id: 'last', text: '자기 전 영상', why: '잠 바로 앞에는 화면 대신 씻기나 책 읽기를 해요.' }, 0.15),
            ORD('학원 가는 날 저녁 시간표를 놓아요.', { axis: ['저녁', '잠자리'] },
              [{ id: 'academy', text: '학원 다녀오기' }, { id: 'dinner', text: '저녁 식사' }, { id: 'hw', text: '숙제' }, { id: 'screen', text: '화면 시간' }, { id: 'wash', text: '씻기' }, { id: 'sleep', text: '잠' }],
              ['academy', 'dinner', 'hw', 'screen', 'wash', 'sleep'], { idx: [0, 1, 2, 5], order: ['academy', 'dinner', 'hw', 'sleep'] },
              { id: 'bed', text: '누워서 게임', why: '누워서 게임을 하면 잠드는 시각이 늦어져요.' }, 0.2),
            ORD('가족과 저녁 먹는 날 시간표를 놓아요.', { axis: ['저녁', '잠자리'] },
              [{ id: 'dinner', text: '가족 저녁 식사' }, { id: 'dish', text: '설거지 돕기' }, { id: 'screen', text: '화면 시간' }, { id: 'read', text: '책 읽기' }, { id: 'wash', text: '씻기' }, { id: 'sleep', text: '잠' }],
              ['dinner', 'dish', 'screen', ['read', 'wash'], 'sleep'], { idx: [0, 2, 4, 5], order: ['dinner', 'screen', 'wash', 'sleep'] },
              { id: 'midnight', text: '밤늦게 메시지', why: '밤늦은 메시지는 아침에 확인해도 돼요.' }, 0.25,
              { conclude: '화면 시간 뒤에 씻기나 책 읽기를 넣으면 잠자리에 편하게 들 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'order', prompt: '저녁 차례대로 번호를 써요.', options: ['숙제', '화면 시간', '씻기', '잠'], answer: '숙제, 화면 시간, 씻기, 잠' }] },
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.wrap.want-map', type: 'wrap', title: '화면 말고 하고 싶은 일',
        method: '화면 말고 하고 싶은 일 마인드맵', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(몸 움직이기·만들기)에 카드를 붙인다.', base: '가지 3개에 카드를 붙인다.', challenge: '가지 3개에 카드를 붙이고, 활동지에 가지마다 언제 할지 시각을 적는다.' },
        wrap: {
          teacher: '"화면을 보지 않을 때 하고 싶은 일은 무엇이 있을까요?" 가지마다 카드를 붙인 뒤 두세 명에게 하나씩 말하게 한다. "할 게 없어서 폰을 봐요"라는 학생에게 "가지에 붙인 것 가운데 오늘 해 볼 수 있는 것은 무엇일까요?"라고 묻는다. 출구 2번에서 "남는 시간은 다 화면"을 고른 학생에게 오늘 만든 마인드맵을 다시 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '화면 말고 하고 싶은 일', slots: ['몸 움직이기', '만들기', '함께 하기'], cards: ['줄넘기', '종이접기', '가족과 보드게임', '자전거 타기', '그림 그리기', '친구와 수수께끼', '영상 더 보기'] }, prompt: '하고 싶은 일 카드를 알맞은 가지에 붙여요.',
              target: { sort: { '몸 움직이기': ['줄넘기', '자전거 타기'], '만들기': ['종이접기', '그림 그리기'], '함께 하기': ['가족과 보드게임', '친구와 수수께끼'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '카드를 두 가지에 붙여요.', toolOptions: { slots: ['몸 움직이기', '만들기'], cards: ['줄넘기', '종이접기', '자전거 타기', '그림 그리기', '영상 더 보기'] }, target: { sort: { '몸 움직이기': ['줄넘기', '자전거 타기'], '만들기': ['종이접기', '그림 그리기'] } } } } },
            { type: 'choice', prompt: '저녁에 남는 시간이 생겼어요. 알맞은 생각은?', options: ['남는 시간은 다 화면을 봐요', '하고 싶은 일을 골라 해요', '그냥 누워 폰을 봐요'], answer: 1, difficulty: 0.1, explain: '남는 시간에도 화면 말고 할 수 있는 일이 많아요.' },
            { type: 'short', prompt: '화면 말고 이번 주에 해 볼 일 하나를 써요.' },
          ],
        },
        worksheet: {
          title: '화면 말고 하고 싶은 일',
          items: [
            { type: 'table', prompt: '하고 싶은 일과 할 시각을 써요.', columns: ['하고 싶은 일', '언제'], cells: [['', ''], ['', ''], ['', '']] },
            { type: 'draw', prompt: '화면 말고 하고 싶은 일을 하는 내 모습을 그려요.' },
          ],
          easy: { note: '몸 움직이기·만들기·함께 하기 가운데 하나를 골라요.', items: [{ type: 'draw', prompt: '하고 싶은 일 하나를 그려요.' }] },
        },
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.wrap.keep-check', type: 'wrap', title: '시간표 지키는 방법 고르기',
        method: '시간표 지키는 방법 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검 항목 3개 가운데 시간표를 지키는 방법만 표시한다.', base: '점검 항목 5개 가운데 지키는 방법만 골라 표시한다.', challenge: '5개를 표시한 뒤 내가 더할 방법 하나를 짝에게 말한다.' },
        wrap: {
          teacher: '"시간표를 만들었는데 지키기 어려울 때는 어떻게 할까요?" 점검 항목을 하나씩 소리 내어 읽고 도움이 되는 방법에만 표시하게 한다. \'친구 따라 더 하기\'에 표시한 학생에게 "친구가 더 하면 내 시간표는 어떻게 될까요?"라고 묻는다. 출구 2번에서 "못 바꿔요"를 고른 학생에게 "학원 시간이 바뀌면 시간표는 어떻게 할까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '시간표 지키는 방법', items: [{ id: 'alarm', text: '끝날 때 알람 맞추기' }, { id: 'hw', text: '숙제 먼저 하기' }, { id: 'follow', text: '친구 따라 더 하기' }, { id: 'living', text: '폰은 거실에 두기' }, { id: 'bed', text: '침대에서 영상 보기' }] }, prompt: '시간표를 지키는 방법에만 표시해요.', target: { checklist: ['alarm', 'hw', 'living'] }, difficulty: 0.15,
              levels: { easy: { prompt: '시간표를 지키는 방법에만 표시해요(3칸).', toolOptions: { items: [{ id: 'alarm', text: '끝날 때 알람 맞추기' }, { id: 'hw', text: '숙제 먼저 하기' }, { id: 'follow', text: '친구 따라 더 하기' }] }, target: { checklist: ['alarm', 'hw'] } } } },
            { type: 'choice', prompt: '정한 시간표는 바꿀 수 없을까요?', options: ['한 번 정하면 못 바꿔요', '가족과 이야기해 고쳐요', '몰래 바꿔요'], answer: 1, difficulty: 0.1, explain: '일정이 바뀌면 가족과 이야기해 시간표를 고칠 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 시간표 지키기',
          items: [
            { type: 'check', prompt: '시간표를 지키는 방법에 표시해요.', options: ['알람 맞추기', '숙제 먼저 하기', '폰은 거실에 두기'] },
            { type: 'short', prompt: '시간표를 지키려고 내가 더 해 볼 방법을 하나 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-cyber.e34.daily-schedule.wrap.week-check', type: 'wrap', title: '일주일 시간표 다짐 점검',
        method: '일주일 시간표 실천 스스로 점검', tool: 'timer', minutes: 6,
        levels: { easy: '다짐 칸 2개에 스스로 표시한다.', base: '다짐 칸 3개에 스스로 표시한다.', challenge: '다짐 칸 4개(가족과 함께 볼 요일 정하기 포함)에 표시한다.' },
        wrap: {
          teacher: '"오늘 만든 시간표에서 이번 주에 꼭 지킬 다짐은 무엇인가요?" 다짐 칸을 함께 읽고 스스로 표시하게 한다. 이 점검은 맞고 틀림이 없고 일주일 뒤 다시 보는 것이라고 알려 준다. 출구 2번에서 "잠과 상관없어요"를 고른 학생에게 하린이의 아침 장면을 떠올리게 한다.',
          exitTicket: [
            SELF('일주일 시간표 다짐', ['숙제를 먼저 할게요', '정한 화면 시간을 지킬게요', '잠 앞엔 화면을 끌게요', '가족과 볼 요일을 정했어요'], '이번 주 다짐에 스스로 표시해요.'),
            { type: 'choice', prompt: '잠자기 바로 전에 영상을 보면 어떨까요?', options: ['잠과 상관없어요', '잠들기 어려울 수 있어요', '더 빨리 잠들어요'], answer: 1, difficulty: 0.15, explain: '잠 바로 앞에 화면을 보면 잠드는 시각이 늦어질 수 있어요.' },
            { type: 'short', prompt: '일주일 뒤 다짐을 다시 볼 요일을 써요.' },
          ],
        },
        worksheet: {
          title: '일주일 시간표 다짐',
          items: [
            { type: 'table', prompt: '다짐을 지킨 날에 ○를 해요.', columns: ['다짐', '월', '화', '수', '목', '금'], cells: [['숙제 먼저', '', '', '', '', ''], ['잠 앞엔 화면 끄기', '', '', '', '', '']] },
            { type: 'short', prompt: '가족과 함께 시간표를 볼 요일을 써요.' },
          ],
        },
        notes: '다짐 점검은 집에서 혼자 보고 가족과 이야기하는 데 쓴다. 지킨 날 수를 걷거나 비교하지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 3학년 · 게임 과몰입 신호 알아차리기 (별표 2 초등 '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 표준안 인터넷 게임)
  // ======================================================================================================
  {
    const C = T('game-signs', 3);
    const DY = [['월', 20], ['화', 30], ['수', 20], ['목', 90], ['금', 40]];
    const GPIC = { type: 'picture', unit: '분', xLabel: '요일', yLabel: '게임 시간', icons: [{ value: 30, name: '30분' }, { value: 10, name: '10분' }], icon: 'circle' };
    M.push(
      C({
        id: 'saf-cyber.e34.game-signs.intro.friend-story', type: 'intro', title: '요즘 달라진 도윤이',
        method: '가상 친구 이야기에서 달라진 점 찾기', tool: 'story', minutes: 5,
        levels: { easy: '장면 3장을 함께 읽고 달라진 점을 고른다.', base: '장면 4장 가운데 요즘 달라진 점 3가지를 고른다.', challenge: '달라진 점을 고른 뒤, 그것이 도윤이의 잠·공부·친구 관계 가운데 어디에 영향을 주는지 말한다.' },
        intro: {
          teacher: '"도윤이는 게임을 좋아하는 친구예요. 그런데 요즘 조금 달라졌대요." 장면 카드를 차례로 읽어 주고 "예전과 달라진 점은 무엇일까요?"라고 묻는다. 시연 단추로 달라진 장면 세 장이 바구니에 담기는 것을 보인다. "게임을 좋아하니까 원래 그래요"라는 말이 나오면 "게임을 좋아하는 것과 밤늦게까지 못 멈추는 것은 같을까요?"라고 되물어 좋아하는 것과 걱정되는 신호를 나눈다.',
          student: '도윤이 이야기를 읽고, 요즘 달라진 점을 찾아 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '요즘 달라진 점', shuffle: false, cards: [{ id: 'night', text: '밤늦게까지 게임', motif: 'moon' }, { id: 'talk', text: '쉬는 시간에도 게임 얘기만', motif: 'star' }, { id: 'lunch', text: '급식은 맛있게 먹음', motif: 'sun' }, { id: 'skip', text: '축구하자는 말에 싫다고 함', motif: 'cloud' }] }, sequence: [{ pick: ['night', 'talk', 'skip'] }] },
          art: { draw: 'four paper story panels about a boy: playing a handheld game in bed at night, talking only about games at recess, happily eating lunch, shaking his head when friends invite him to play soccer', banner: '도윤이가 달라졌어요', extra: [{ motif: 'moon', x: 300, y: 96 }] },
        },
        notes: PRIVACY,
      }),
      C({
        id: 'saf-cyber.e34.game-signs.intro.what-signal', type: 'intro', title: '이럴 땐 신호일까?',
        method: '이럴 땐 신호일까 카드 고르기', tool: 'wordcards', minutes: 5,
        levels: { easy: '카드 3장 가운데 걱정되는 신호를 함께 고른다.', base: '카드 5장 가운데 걱정되는 신호 3장을 고른다.', challenge: '고른 카드마다 왜 걱정되는지 한 문장씩 짝에게 말한다.' },
        intro: {
          teacher: '"이 모습은 걱정되는 신호일까요, 건강하게 즐기는 모습일까요?" 카드를 하나씩 읽고 손을 들어 고르게 한 뒤, 시연 단추로 신호 카드 세 장이 바구니에 담기는 것을 보인다. "게임을 하면 다 나빠요"라는 말이 나오면 "친구와 같이 정한 만큼 즐기는 것도 걱정될까요?"라고 되묻는다. 신호는 \'멈추기 어렵고 생활이 흔들리는 모습\'이라는 것을 짚는다.',
          student: '카드를 읽고 게임 때문에 걱정되는 신호를 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '걱정되는 신호', shuffle: false, cards: [{ id: 'angry', text: '못 하면 화나요' }, { id: 'weekend', text: '정한 날만 해요' }, { id: 'meal', text: '밥도 거르고 해요' }, { id: 'together', text: '친구와 같이 즐겨요' }, { id: 'night', text: '밤늦게까지 해요' }] }, sequence: [{ pick: ['angry', 'meal', 'night'] }] },
          art: { draw: 'paper word cards spread on a desk, a magnifying glass made of paper hovering over one card, a small paper game pad at the side', banner: '걱정되는 신호일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-cyber.e34.game-signs.activity.signal-sort', type: 'activity', title: '걱정되는 신호·건강한 모습',
        method: '과몰입 신호·건강한 모습 나누기', tool: 'story', minutes: 14,
        levels: { easy: '카드 4장을 두 칸에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '도윤이 모습 카드 8장을 두 칸에 나눈다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나누고, 헷갈린 카드를 골라 짝과 토의해 정한다.' },
        activity: {
          title: '걱정되는 신호·건강하게 즐기는 모습', tool: 'story',
          teacher: '"이 모습은 멈출 수 있는 모습인가요, 멈추기 어려운 모습인가요?" 카드를 놓을 때마다 "왜냐하면"을 붙여 말하게 한다. \'가족과 함께 해요\'를 신호에 두는 학생에게 "정한 시간에 가족과 함께 즐기는 것도 걱정될까요?"라고 묻고, \'숙제를 자꾸 미뤄요\'를 건강한 모습에 두는 학생에게 "숙제를 미루면 다음 날 어떻게 될까요?"라고 묻는다. 과몰입은 어른만 생기는 것이 아니라 누구에게나 생길 수 있다는 점도 짚는다.',
          task: '도윤이 모습 카드를 걱정되는 신호와 건강하게 즐기는 모습으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('집에서 본 도윤이 모습을 나누어요.', { mode: 'sort', title: '집에서' }, ['걱정되는 신호', '건강하게 즐기는 모습'],
              [['못 하면 짜증 내요', '밥 먹자 해도 계속', '밤늦게까지 해요', '숙제를 자꾸 미뤄요'], ['정한 시간만 해요', '끝나면 바로 꺼요', '숙제 먼저 해요', '가족과 함께 해요']], 2, [['몰래 다시 켜요'], ['져도 웃으며 끝내요']], 0.15),
            SORT('학교에서 본 도윤이 모습을 나누어요.', { mode: 'sort', title: '학교에서' }, ['걱정되는 신호', '건강하게 즐기는 모습'],
              [['수업 중에도 게임 생각', '쉬는 시간 게임 얘기만', '다른 놀이는 싫대요', '아침마다 졸려해요'], ['운동장에서 놀아요', '다른 얘기도 해요', '수업에 집중해요', '체육을 즐겨요']], 2, [['멍하니 앉아 있어요'], ['책 읽기도 즐겨요']], 0.2),
            SORT('주말에 본 도윤이 모습을 나누어요.', { mode: 'sort', title: '주말에' }, ['걱정되는 신호', '건강하게 즐기는 모습'],
              [['하루 종일 게임만', '그만하자면 화내요', '나들이가 싫대요', '시간 가는 줄 몰라요'], ['알람이 울리면 꺼요', '나들이도 즐겨요', '쉬면서 몸을 펴요', '정한 날에만 해요']], 2, [['밥 먹는 것도 잊어요'], ['바깥 놀이도 해요']], 0.25,
              { conclude: '게임을 좋아하는 것은 괜찮아요. 멈추기 어렵고 생활이 흔들리면 걱정되는 신호예요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '걱정되는 신호면 "신", 건강한 모습이면 "건"을 써요.', columns: ['모습', '신 / 건'], cells: [['못 하면 짜증 내요', ''], ['정한 시간만 해요', ''], ['밤늦게까지 해요', ''], ['숙제 먼저 해요', '']], answer: '신, 건, 신, 건' }] },
        notes: PRIVACY,
      }),
      C({
        id: 'saf-cyber.e34.game-signs.activity.compare-graph', type: 'activity', title: '두 친구 게임 시간 그래프',
        method: '두 친구 게임 시간 그림그래프 비교', tool: 'chart', minutes: 14,
        levels: { easy: '그래프 그림 옆에 값이 보이는 채로 세 물음에 답한다.', base: '값 없이 그림을 세어 세 물음(가장 오래 한 날·누가 더 오래·그날 생긴 일)에 답한다.', challenge: '세 번째 물음 대신 그래프만 보고 알 수 없는 것을 고르고, 그 까닭을 짝에게 말한다.' },
        activity: {
          title: '두 친구 게임 시간 그림그래프', tool: 'chart',
          teacher: '"큰 동그라미 하나는 몇 분일까요? 목요일에는 큰 동그라미가 몇 개인가요?" 그림을 함께 세어 시간으로 바꾸게 한다. 그래프는 가상의 도윤이·서아 기록이고 우리 반 친구들의 기록은 묻지 않는다고 밝힌다. 목요일 다음 날 도윤이가 수업 시간에 졸았다는 것을 그래프와 이어 보고, "그래프만 보고 도윤이가 왜 오래 했는지 알 수 있을까요?"라고 물어 그래프로 알 수 있는 것과 없는 것을 나눈다.',
          task: '가상의 두 친구 게임 시간 그림그래프를 읽고 물음에 답해요.', levels: { easy: { showValues: true }, base: {}, challenge: {} },
          items: [
            { prompt: '도윤이가 게임을 가장 오래 한 요일은?', toolOptions: Object.assign({}, GPIC, { mode: 'read', title: '도윤이의 게임 시간(가상)', data: DY, question: '가장 오래 한 요일은 언제인가요?', choices: ['월', '화', '수', '목', '금'] }), target: { pick: 3 }, difficulty: 0.15 },
            { prompt: '목요일에 게임을 더 오래 한 친구는?', toolOptions: Object.assign({}, GPIC, { mode: 'read', title: '목요일 게임 시간(가상)', xLabel: '친구', data: [['도윤', 90], ['서아', 30]], question: '누가 더 오래 했나요?', choices: ['도윤', '서아'] }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '도윤이가 졸았던 금요일, 그 전날 게임 시간은?', toolOptions: Object.assign({}, GPIC, { mode: 'read', title: '도윤이의 게임 시간(가상)', data: DY, question: '목요일에는 몇 분 했나요?' }), target: { value: 90 }, difficulty: 0.25,
              levels: { challenge: { prompt: '그래프만 보고 알 수 없는 것을 골라요.', toolOptions: { question: '그래프만 보고 알 수 없는 것은?', choices: ['목요일 게임 시간', '오래 한 까닭', '가장 짧게 한 날'] }, target: { pick: 1 } } },
              conclude: '게임을 오래 한 다음 날 생활이 흔들렸어요. 그래프는 시간을 보여 주고, 까닭은 이야기를 나눠 알아요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '그래프를 보고 빈칸을 채워요.', text: '큰 동그라미 3개는 ___분이에요.', answer: '90' }] },
        notes: '그래프 값은 가상의 도윤이·서아 기록이다. 학생에게 자기 게임 시간을 적거나 말하게 하지 않는다.',
      }),
      C({
        id: 'saf-cyber.e34.game-signs.activity.night-invite', type: 'activity', title: '갈림길: 밤늦은 게임 초대',
        method: '늦은 밤 게임 초대 갈림길', tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고르고, 친구 마음도 지키는 대답을 활동지에 직접 쓴다.' },
        activity: {
          title: '갈림길: 늦은 밤 게임 초대', tool: 'dilemma',
          teacher: '"친구의 초대를 거절하면 친구가 서운해할까요? 그래도 지켜야 할 것은 무엇일까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 나와 친구에게 어떤 일이 생기는지 짝과 말하게 한다. "친구가 걱정돼도 모른 척하는 게 나아요"라는 학생에게 "도윤이가 그만하고 싶은데 잘 안 된다고 하면, 모른 척하는 게 도움이 될까요?"라고 묻는다. 거절할 때도 "내일 하자"처럼 다음 약속을 주면 마음을 지킬 수 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL('밤 10시에 게임 초대가 왔어요. 어떻게 할까요?', {
              text: '밤 10시, 친구가 "같이 한 판 하자!"라고 메시지를 보냈어요.', motif: 'moon',
              choices: [
                { id: 'play', text: '한 판만 같이 한다', result: '한 판이 세 판이 되고 11시가 넘었어요.', impact: [{ who: '나', text: '아침에 못 일어나요', tone: -1 }] },
                { id: 'reply', text: '"내일 하자" 답한다', result: '친구가 "딱 10분만!" 하고 또 졸라요.', ending: '내일 하자고 답하고 잠자리에 들었어요.', next: {
                  text: '친구가 "딱 10분만!" 하고 또 졸라요.', choices: [
                    { id: 'firm', text: '"잘 시간이야, 내일 보자"', result: '친구가 "알았어, 내일 보자"고 했어요.', impact: [{ who: '친구와 나', text: '둘 다 푹 자요', tone: 1 }], ending: '거절하면서도 내일 약속으로 친구 마음을 지켰어요.' },
                    { id: 'give', text: '"그래, 10분만"', result: '10분이 한 시간이 됐어요.', impact: [{ who: '나', text: '수업 시간에 졸려요', tone: -1 }] },
                    { id: 'mad', text: '화내며 답을 끊는다', result: '친구가 서운해했어요.', impact: [{ who: '친구', text: '마음이 상했어요', tone: -1 }] },
                  ] } },
                { id: 'secret', text: '이불 속에서 몰래 한다', result: '늦게까지 하다 가족에게 들켰어요.', impact: [{ who: '가족', text: '믿음이 줄었어요', tone: -1 }] },
              ] }, [['reply', 'firm']],
            [{ id: 'sleep', text: '잠자는 시간을 지켜야 해서' }, { id: 'kind', text: '내일 약속으로 친구 마음도 지켜서' }, { id: 'once', text: '한 판쯤은 괜찮아서', why: '한 판이 이어지면 잠자는 시간이 줄어요.' }], ['sleep', 'kind'], 0.2),
            DIL('나들이 날 게임 초대가 왔어요. 어떻게 할까요?', {
              text: '토요일 아침, 가족 나들이 시간인데 친구가 "같이 게임하자"고 해요.', motif: 'sun',
              choices: [
                { id: 'stay', text: '나들이에 안 간다', result: '하루 종일 게임만 했어요.', impact: [{ who: '가족', text: '서운했어요', tone: -1 }] },
                { id: 'later', text: '"다녀와서 하자" 답한다', result: '가족과 즐겁게 나들이를 다녀왔어요.', ending: '나들이를 즐기고 게임은 다음에 하기로 했어요.', next: {
                  text: '다녀오니 저녁이에요. 숙제가 남아 있어요.', choices: [
                    { id: 'hwfirst', text: '숙제 먼저, 게임은 정한 만큼', result: '숙제를 끝내고 정한 시간만 했어요.', impact: [{ who: '나', text: '마음이 편해요', tone: 1 }], ending: '꼭 할 일을 먼저 하고 정한 만큼만 즐겼어요.' },
                    { id: 'nohw', text: '숙제는 미루고 게임', result: '월요일에 숙제를 못 냈어요.', impact: [{ who: '나', text: '곤란했어요', tone: -1 }] },
                    { id: 'long', text: '밤늦게까지 한다', result: '일요일 아침에 너무 피곤했어요.', impact: [{ who: '나', text: '하루가 흐트러졌어요', tone: -1 }] },
                  ] } },
                { id: 'car', text: '차 안에서 계속 한다', result: '창밖 풍경을 하나도 못 봤어요.', impact: [{ who: '가족', text: '이야기를 못 나눴어요', tone: -1 }] },
              ] }, [['later', 'hwfirst']],
            [{ id: 'family', text: '가족과의 시간도 소중해서' }, { id: 'first', text: '꼭 할 일이 먼저라서' }, { id: 'miss', text: '게임을 놓치면 안 돼서', why: '게임은 정한 때에 해도 돼요.' }], ['family', 'first'], 0.25),
            DIL('도윤이가 새벽까지 했대요. 어떻게 할까요?', {
              text: '쉬는 시간, 도윤이가 "어제 새벽까지 했어"라며 하품을 해요.', motif: 'cloud',
              choices: [
                { id: 'cheer', text: '"와, 대단하다!" 한다', result: '도윤이가 오늘 밤도 늦게까지 하겠대요.', impact: [{ who: '도윤', text: '더 피곤해져요', tone: -1 }] },
                { id: 'care', text: '"졸려 보여, 괜찮아?" 묻는다', result: '도윤이가 "그만하고 싶은데 잘 안 돼"라고 해요.', ending: '걱정하는 마음을 전했어요.', next: {
                  text: '도윤이가 "그만하고 싶은데 잘 안 돼"라고 해요.', choices: [
                    { id: 'adult', text: '"선생님께 같이 말해 볼까?"', result: '함께 선생님께 이야기했어요.', impact: [{ who: '도윤', text: '도움을 받아요', tone: 1 }], ending: '친구의 신호를 알아채고 어른과 함께 도왔어요.' },
                    { id: 'tease', text: '"중독이래요!" 놀린다', result: '도윤이가 고개를 숙였어요.', impact: [{ who: '도윤', text: '부끄럽고 속상해요', tone: -1 }] },
                    { id: 'join', text: '"나도 몰래 할래"', result: '둘 다 밤늦게까지 하게 됐어요.', impact: [{ who: '나와 도윤', text: '둘 다 피곤해요', tone: -1 }] },
                  ] } },
                { id: 'ignore', text: '모른 척한다', result: '도윤이는 계속 혼자 고민했어요.', impact: [{ who: '도윤', text: '도움을 못 받아요', tone: -1 }] },
              ] }, [['care', 'adult']],
            [{ id: 'signal', text: '그만하기 어려운 건 신호라서' }, { id: 'help', text: '어른은 도울 방법을 알아서' }, { id: 'tattle', text: '말하면 고자질이라서', why: '친구를 돕는 말은 고자질이 아니에요.' }], ['signal', 'help'], 0.3,
            { conclude: '늦은 밤 초대는 "내일 하자"로 거절하고, 걱정되는 친구는 어른과 함께 도와요.' }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '밤늦게 게임하자는 친구에게 마음을 지키며 거절하는 말을 써요.' }] },
      }),
      C({
        id: 'saf-cyber.e34.game-signs.activity.help-map', type: 'activity', title: '도윤이를 돕는 방법 모으기',
        method: '짝 토의로 도울 방법 마인드맵', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(내가 할 말·같이 할 놀이)에 카드 4장을 골라 붙인다.', base: '가지 3개에 카드 6장을 붙인다.', challenge: '가지마다 카드 3장씩, 9장을 붙이고 짝과 가장 해 보고 싶은 방법을 하나 정한다.' },
        activity: {
          title: '도윤이를 돕는 방법', tool: 'mindmap',
          teacher: '"도윤이를 도우려면 무슨 말을 할 수 있을까요? 같이 무엇을 하며 놀까요? 누구에게 알릴까요?" 짝과 카드를 하나씩 붙일 때마다 실제로 그 말을 서로 해 보게 한다. \'선생님께 말하기\'를 고자질이라고 하는 학생에게 "도윤이가 혼자 멈추기 어렵다면, 누가 도와줄 수 있을까요?"라고 묻는다. 친구를 놀리거나 탓하는 말은 돕는 말이 아니라는 점을 짚는다.',
          task: '짝과 토의해 도윤이를 돕는 방법 카드를 알맞은 가지에 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('밤늦게까지 게임해 졸린 도윤이를 도와요.', { topic: '도윤이를 돕는 방법' }, ['내가 할 말', '같이 할 놀이', '어른에게 알리기'],
              [['괜찮은지 물어보기', '걱정된다고 말하기'], ['운동장 공놀이', '쉬는 시간 보드게임'], ['담임 선생님께 말하기', '보호자께 알리기']], 2, [['"내일 같이 놀자"'], ['줄넘기 시합'], ['상담 선생님께 말하기']], 0.15, {}, 2),
            SORT('게임을 못 하면 화내는 도윤이를 도와요.', { topic: '화내는 도윤이' }, ['내가 할 말', '같이 할 놀이', '어른에게 알리기'],
              [['"화날 수 있어" 말하기', '"같이 쉬자" 말하기'], ['종이접기', '술래잡기'], ['선생님께 같이 가기', '가족에게 알리기']], 2, [['천천히 숨 쉬자 하기'], ['블록 쌓기'], ['보건 선생님께 말하기']], 0.2, {}, 2),
            SORT('다른 놀이는 싫다는 도윤이를 도와요.', { topic: '다른 놀이도 함께' }, ['내가 할 말', '같이 할 놀이', '어른에게 알리기'],
              [['"너랑 놀고 싶어"', '"새 놀이 해 볼래?"'], ['딱지치기', '그림 이어 그리기'], ['선생님께 의논하기', '보호자와 이야기']], 2, [['"네가 정해 볼래?"'], ['공기놀이'], ['학교 상담실 가기']], 0.25,
              { conclude: '친구를 돕는 말·함께 할 놀이·어른에게 알리기, 세 가지로 도울 수 있어요.' }, 2),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '도윤이에게 해 줄 수 있는 말을 하나 써요.' }] },
        notes: '"우리 반에 게임 많이 하는 친구 있어요?"처럼 실제 친구를 지목하게 하지 않는다. 걱정되는 친구가 있으면 선생님께 따로 말해 달라고만 안내한다.',
      }),
      C({
        id: 'saf-cyber.e34.game-signs.wrap.friend-heart', type: 'wrap', title: '도윤이 마음 헤아리기',
        method: '친구 마음 헤아리기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 2장 가운데 도윤이 마음을 고르고, 할 말 보기 2개 가운데 하나를 고른다.', base: '마음 카드 4장 가운데 고르고, 할 말 보기 3개 가운데 마음을 다치지 않는 말을 고른다.', challenge: '할 말 결과는 맞힌 뒤에만 보이고, 마지막 칸에 그 말을 내 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '"\'게임 그만해!\'라는 말을 들은 도윤이 마음은 어떨까요?" 마음 카드를 고른 뒤, 같은 뜻이라도 마음을 다치지 않게 하는 말을 함께 찾는다. \'너 게임 중독이야\'를 고른 학생에게 "그 말을 들으면 도윤이가 도움을 받고 싶어질까요?"라고 묻는다. 마지막에 짝에게 고른 말을 따뜻한 목소리로 해 보게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '도윤이 마음', cards: ['속상함', '화남', '신남', '뿌듯함'] }, prompt: '그만하라는 말을 들은 도윤이 마음을 골라요.', target: { pick: ['속상함', '화남'] }, difficulty: 0.15,
              levels: { easy: { toolOptions: { cards: ['속상함', '신남'] }, target: { pick: ['속상함'] } } } },
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '게임을 그만하자고 도윤이에게 말하려고 해요.', choices: [
              { id: 'label', text: '"너 게임 중독이야!"', result: '도윤이가 화가 나서 대답하지 않았어요.', why: '딱지를 붙이는 말은 친구 마음을 다치게 해요.' },
              { id: 'care', text: '"걱정돼서 그래, 같이 놀자"', result: '도윤이가 "그래, 잠깐 쉴게"라고 했어요.' },
              { id: 'leave', text: '"게임하는 애랑 안 놀아"', result: '도윤이가 혼자 남았어요.', why: '친구를 따돌리는 말은 돕는 말이 아니에요.' },
            ] }, prompt: '도윤이 마음을 다치지 않게 할 말을 골라요.', target: { choice: 'care' }, difficulty: 0.15,
              levels: { easy: { toolOptions: { choices: [{ id: 'label', text: '"너 게임 중독이야!"', result: '도윤이가 화가 나서 대답하지 않았어요.' }, { id: 'care', text: '"걱정돼서 그래, 같이 놀자"', result: '도윤이가 "그래, 잠깐 쉴게"라고 했어요.' }] }, target: { choice: 'care' } }, challenge: { toolOptions: { revealAfterCheck: true } } } },
            { type: 'short', prompt: '도윤이에게 할 말을 내 말로 바꿔 써요.' },
          ],
        },
        worksheet: {
          title: '친구 마음을 지키는 말',
          items: [
            { type: 'choice', prompt: '친구 마음을 지키는 말은?', options: ['너 중독이야!', '걱정돼서 그래, 같이 놀자', '게임하는 애랑 안 놀아'], answer: '걱정돼서 그래, 같이 놀자' },
            { type: 'short', prompt: '친구가 걱정될 때 할 수 있는 따뜻한 말을 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-cyber.e34.game-signs.wrap.my-check', type: 'wrap', title: '건강한 게임 습관 점검',
        method: '내 게임 습관 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '항목 3개 가운데 건강한 게임 습관에만 표시한다.', base: '항목 5개 가운데 건강한 게임 습관에만 표시한다.', challenge: '5개를 표시한 뒤, 활동지 혼자 보기 칸에서 고치고 싶은 습관 하나와 방법을 생각해 본다.' },
        wrap: {
          teacher: '"건강하게 게임을 즐기는 습관은 무엇일까요?" 항목을 하나씩 소리 내어 읽고 건강한 습관에만 표시하게 한다. 활동지의 \'혼자 보기\' 칸은 걷지 않고 발표시키지 않는다고 먼저 말한다. 출구 2번에서 "모두 과몰입이에요"를 고른 학생에게 "정한 시간만 즐기고 끄는 친구도 과몰입일까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '건강한 게임 습관', items: [{ id: 'time', text: '정한 시간만 해요' }, { id: 'angry', text: '못 하면 짜증 내요' }, { id: 'hw', text: '숙제 먼저 해요' }, { id: 'night', text: '밤늦게까지 해요' }, { id: 'stop', text: '알람에 맞춰 꺼요' }] }, prompt: '건강한 게임 습관에만 표시해요.', target: { checklist: ['time', 'hw', 'stop'] }, difficulty: 0.15,
              levels: { easy: { prompt: '건강한 게임 습관에만 표시해요(3칸).', toolOptions: { items: [{ id: 'time', text: '정한 시간만 해요' }, { id: 'angry', text: '못 하면 짜증 내요' }, { id: 'hw', text: '숙제 먼저 해요' }] }, target: { checklist: ['time', 'hw'] } } } },
            { type: 'choice', prompt: '게임을 좋아하면 모두 과몰입일까요?', options: ['네, 모두 과몰입이에요', '정한 만큼 즐기면 괜찮아요', '게임은 다 나빠요'], answer: 1, difficulty: 0.1, explain: '좋아하는 것과 멈추기 어려운 것은 달라요. 정한 만큼 즐기면 괜찮아요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '건강한 게임 습관',
          items: [
            { type: 'check', prompt: '혼자 보기: 요즘 나에게 맞는 것에 표시해요(내지 않아요).', options: ['정한 시간만 해요', '숙제 먼저 해요', '못 하면 짜증 나요'] },
            { type: 'short', prompt: '혼자 보기: 고치고 싶은 습관이 있다면 방법을 하나 써요.' },
          ],
        },
        notes: '계획은 \'내 게임 습관\'을 표시하는 점검표였으나, 학생 개인 습관을 화면에서 채점·제출하지 않도록 화면 출구는 \'건강한 습관 고르기\'로 하고 내 습관 점검은 활동지 혼자 보기 칸으로 옮겼다. 활동지는 걷지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 게임 약속 정하기 (별표 2 초등 '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 표준안 인터넷 게임)
  // ======================================================================================================
  {
    const C = T('game-promise', 4);
    const B = (id, text) => ({ id, text });
    M.push(
      C({
        id: 'saf-cyber.e34.game-promise.intro.game-clock', type: 'intro', title: '게임 끝나는 시각 맞추기',
        method: '게임 시작·끝 시각 계산하기', tool: 'clock', minutes: 5,
        levels: { easy: '4시 30분에 시작해 30분 뒤 끝나는 정각(5시)을 함께 맞춘다.', base: '4시 20분에 시작해 40분 뒤 끝나는 시각(5시)을 맞춘다.', challenge: '4시 20분에 시작해 40분 하고 중간에 5분 쉬면 끝나는 시각(5시 5분)을 맞춘다.' },
        intro: {
          teacher: '"준이는 4시 20분에 시작해서 40분 동안 하기로 했어요. 몇 시에 끝내야 할까요?" 시연 단추로 바늘이 4시 20분에서 5시로 움직이는 것을 보이고 긴바늘이 몇 칸 갔는지 함께 센다. "4시 60분이요"라는 말이 나오면 "긴바늘이 12를 지나면 짧은바늘은 어디로 갈까요?"라고 되묻는다. 끝 시각을 미리 알면 약속을 지키기 쉽다는 것을 짚는다.',
          student: '게임을 시작한 시각과 하기로 한 시간을 듣고, 끝나는 시각을 시계로 맞춰 보아요.',
          demo: { tool: 'clock', options: { showDigital: true }, sequence: [{ h: 4, m: 20 }, { h: 5, m: 0 }] },
          art: { draw: 'a large paper clock with the minute hand sweeping from twenty past four to five o clock, a paper game pad and a small paper alarm bell beside it', banner: '몇 시에 끝낼까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: PRIVACY,
      }),
      C({
        id: 'saf-cyber.e34.game-promise.intro.quarrel-story', type: 'intro', title: '형제가 다툰 까닭',
        method: '약속 때문에 다툰 형제 이야기', tool: 'story', minutes: 5,
        levels: { easy: '장면 3장을 함께 읽고 다툼이 생긴 까닭을 고른다.', base: '장면 4장 가운데 다툼이 생긴 까닭 카드를 고른다.', challenge: '까닭을 고른 뒤, 다툼을 막을 약속 하나를 짝에게 제안한다.' },
        intro: {
          teacher: '"준이와 민이는 게임기 하나를 같이 써요. 오늘 왜 다투게 됐을까요?" 장면 카드를 차례로 읽어 주고 시연 단추로 \'몇 분씩 할지 안 정함\' 카드가 바구니에 담기는 것을 보인다. "동생이 떼써서요"라는 말이 나오면 "둘이 미리 정해 둔 것이 있었다면 다퉜을까요?"라고 되물어 다툼의 까닭이 약속이 없던 데 있다는 것을 짚는다.',
          student: '준이와 민이 이야기를 읽고, 다툼이 생긴 까닭을 골라 보아요.',
          demo: { tool: 'story', options: { mode: 'pick', basket: '다툼이 생긴 까닭', shuffle: false, cards: [{ id: 'share', text: '게임기 하나를 같이 써요', motif: 'house' }, { id: 'none', text: '몇 분씩 할지 안 정함', motif: 'cloud' }, { id: 'fight', text: '"내 차례야!" 다툼', motif: 'storm' }, { id: 'away', text: '보호자가 게임기를 치움', motif: 'moon' }] }, sequence: [{ pick: ['none'] }] },
          art: { draw: 'two paper brothers pulling one paper game pad between them on a sofa, a paper clock on the wall, a parent figure in the doorway', banner: '왜 다퉜을까?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '"형제와 게임 때문에 싸운 적 있나요?"처럼 집안 일을 묻지 않는다. 이야기 속 준이·민이의 일로만 이야기한다.',
      }),
      C({
        id: 'saf-cyber.e34.game-promise.intro.broken-face', type: 'intro', title: '약속을 넘긴 뒤의 마음',
        method: '약속을 어긴 뒤 마음 고르기', tool: 'emotion', minutes: 5,
        levels: { easy: '약속 시간을 넘긴 아이 한 사람의 마음 카드를 함께 고른다.', base: '아이와 기다린 가족, 두 사람의 마음 카드를 짝 짓는다.', challenge: '두 사람의 마음을 짝 지은 뒤, 아이가 다음에 다르게 할 행동을 짝에게 말한다.' },
        intro: {
          teacher: '"약속 시간을 넘겨 게임을 하다 들켰어요. 아이의 마음은 어떨까요? 기다린 가족의 마음은요?" 시연 단추로 아이 칸에 \'미안함\', 가족 칸에 \'속상함\'이 짝 지어지는 것을 보인다. "들키지만 않으면 괜찮아요"라는 말이 나오면 "약속을 어긴 것을 알게 된 가족은 다음에 나를 믿어 줄까요?"라고 되물어 약속이 믿음과 이어져 있다는 것을 짚는다.',
          student: '약속을 넘긴 아이와 기다린 가족의 마음을 골라 짝 지어 보아요.',
          demo: { tool: 'emotion', options: { mode: 'match', slots: [{ id: 'kid', label: '약속을 넘긴 아이' }, { id: 'family', label: '기다린 가족' }], cards: ['미안함', '속상함', '신남', '편안함'], shuffle: false }, sequence: [{ match: { kid: '미안함', family: '속상함' } }] },
          art: { draw: 'a paper child holding a game pad looking down, a parent standing with crossed arms beside a paper clock showing a late time', banner: '약속 시간이 지났어요', extra: [{ motif: 'rain', x: 300, y: 96 }] },
        },
      }),
      C({
        id: 'saf-cyber.e34.game-promise.activity.rule-parts', type: 'activity', title: '약속 카드 나누기',
        method: '약속 카드 요소별로 나누기', tool: 'mindmap', minutes: 14,
        levels: { easy: '두 가지(언제·얼마나)에 카드 4장을 나누고, 놓으면 바로 맞는지 알려 준다.', base: '네 가지(언제·얼마나·어디서·조심할 것)에 카드 8장을 나눈다.', challenge: '헷갈리는 카드 4장이 더해진 12장을 나누고, 짝과 내 약속에 넣을 카드를 하나씩 고른다.' },
        activity: {
          title: '게임 약속 카드 나누기', tool: 'mindmap',
          teacher: '"좋은 게임 약속에는 무엇이 들어가야 할까요? 이 카드는 언제·얼마나·어디서·조심할 것 가운데 어디일까요?" 카드를 놓을 때마다 소리 내어 읽게 한다. \'결제는 보호자와\'를 얼마나에 두는 학생에게 "이 카드는 시간을 말하나요, 조심할 일을 말하나요?"라고 묻는다. "친구들이 다 하는 게임이면 연령 표시는 상관없어요"라는 말이 나오면 "연령 표시는 누구를 위해 있을까요?"라고 되묻는다.',
          task: '게임 약속 카드를 언제·얼마나·어디서·조심할 것으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('준이의 게임 약속 카드를 나누어요.', { topic: '준이의 게임 약속' }, ['언제', '얼마나', '어디서', '조심할 것'],
              [['숙제 끝나고', '저녁 먹은 뒤'], ['하루 40분', '두 판까지'], ['거실에서', '가족이 보는 곳'], ['결제는 보호자와', '이용 연령 확인']], 2,
              [['토요일 오후에'], ['알람 울리면 끝'], ['밝은 곳에서'], ['모르는 사람과 대화 안 함']], 0.15, {}, 2),
            SORT('민이의 게임 약속 카드를 나누어요.', { topic: '민이의 게임 약속' }, ['언제', '얼마나', '어디서', '조심할 것'],
              [['씻기 전에', '할 일 다 한 뒤'], ['30분만', '알람 한 번까지'], ['방문 열어 두고', '거실 탁자에서'], ['내 정보 안 알리기', '결제 창은 닫기']], 2,
              [['학원 다녀와서'], ['쉬기 넣어 50분'], ['불 켠 방에서'], ['연령 표시 보기']], 0.2, {}, 2),
            SORT('주말 게임 약속 카드를 나누어요.', { topic: '주말 게임 약속' }, ['언제', '얼마나', '어디서', '조심할 것'],
              [['일요일 점심 뒤', '방 정리한 뒤'], ['한 시간 안', '세 판까지'], ['가족과 거실', '책상 앞에서'], ['보호자와 게임 고르기', '친구 계정 안 빌림']], 2,
              [['나들이 다녀와서'], ['쉬는 시간 넣기'], ['식탁 말고 거실'], ['아이템 결제 안 함']], 0.25,
              { conclude: '좋은 게임 약속에는 언제·얼마나·어디서와 조심할 것이 다 들어가요.' }, 2),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '내 게임 약속을 칸마다 하나씩 써요.', columns: ['언제', '얼마나', '어디서', '조심할 것'], cells: [['', '', '', '']] }] },
        notes: '카드의 시간 값(40분·30분 등)은 약속 꼴을 익히는 예시다. 정해진 기준처럼 말하지 않고, 실제 약속은 가정에서 보호자와 정한다고 안내한다.',
      }),
      C({
        id: 'saf-cyber.e34.game-promise.activity.before-start', type: 'activity', title: '게임 시작 전 확인하기',
        method: '게임 시작 전 확인 점검표', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 3개 가운데 시작 전에 할 일만 표시한다.', base: '점검 칸 5개 가운데 시작 전에 할 일만 골라 표시한다.', challenge: '5개를 표시한 뒤, 표시하지 않은 칸이 왜 위험한지 짝에게 설명한다(설명은 교사가 짝 활동으로 진행).' },
        activity: {
          title: '시작 전에 할 일만 표시하기', tool: 'kitchen',
          teacher: '"새 게임을 하기 전에 무엇을 확인해야 할까요?" 점검 칸을 하나씩 소리 내어 읽고 할 일에만 표시하게 한다. \'친구 계정 빌리기\'에 표시한 학생에게 "친구 계정으로 하다 결제가 되면 누구 돈이 나갈까요?"라고 묻는다. "게임 안 결제는 작은 돈이라 괜찮아요"라는 말이 나오면 "작은 돈도 여러 번 누르면 어떻게 될까요? 누구와 먼저 이야기할까요?"라고 되묻는다.',
          task: '점검표에서 게임을 시작하기 전에 할 일만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('새 게임을 시작하기 전에 할 일만 표시해요.', '새 게임 시작 전', [{ id: 'age', text: '이용 연령 표시 보기', ok: true }, { id: 'parent', text: '보호자와 함께 고르기', ok: true }, { id: 'borrow', text: '친구 계정 빌리기', ok: false }, { id: 'lock', text: '결제 잠금 확인', ok: true }, { id: 'any', text: '무료라며 아무거나 받기', ok: false }], [0, 1, 2], 0.15),
            CHK('친구 집에서 게임하기 전에 할 일만 표시해요.', '친구 집에서', [{ id: 'tell', text: '보호자께 미리 말하기', ok: true }, { id: 'pw', text: '내 비밀번호 알려 주기', ok: false }, { id: 'end', text: '끝날 시각 정하기', ok: true }, { id: 'pay', text: '친구 폰으로 결제', ok: false }, { id: 'age', text: '연령 표시 확인', ok: true }], [0, 1, 2], 0.2),
            CHK('게임 중 결제 창이 떴을 때 할 일만 표시해요.', '결제 창이 떴을 때', [{ id: 'stop', text: '누르지 않고 멈추기', ok: true }, { id: 'small', text: '작은 돈이라 누르기', ok: false }, { id: 'show', text: '보호자께 보여 드리기', ok: true }, { id: 'secret', text: '비밀번호 몰래 넣기', ok: false }, { id: 'close', text: '창 닫고 기다리기', ok: true }], [0, 1, 2], 0.25,
              { conclude: '게임을 시작하기 전에 연령 표시와 결제 잠금을 보호자와 함께 확인해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '게임 안에서 결제 창이 떴어요. 어떻게 할까요?', options: ['작은 돈이니 눌러요', '멈추고 보호자께 보여 드려요', '친구 폰으로 결제해요'], answer: '멈추고 보호자께 보여 드려요' }] },
      }),
      C({
        id: 'saf-cyber.e34.game-promise.activity.week-budget', type: 'activity', title: '이번 주 게임 시간 고르기',
        method: '일주일 게임 시간 예산 짜기', tool: 'economy', minutes: 14,
        levels: { easy: '요일 블록 4개 가운데 조건에 맞게 고른다.', base: '요일 블록 5개 가운데 정한 시간에 딱 맞게 고르고, 조건(시험 전날 빼기 등)을 지킨다.', challenge: '긴 요일 블록이 하나 더 섞인 6개 가운데 고르고, 고른 요일의 까닭을 짝과 견준다.' },
        activity: {
          title: '정한 시간 안에서 요일 고르기', tool: 'economy',
          teacher: '"이번 주 약속은 150분이에요. 토요일 60분과 일요일 60분을 넣으면 몇 분이 남을까요?" 블록을 넣을 때마다 남은 시간을 셈하게 한다. 150분은 셈 연습용 우리 반 약속 값이지 기준이 아니라고 밝힌다. 시험 전날 블록을 넣은 학생에게 "시험 전날 저녁에는 무엇을 먼저 해야 할까요?"라고 묻는다. 고른 요일의 까닭을 짝과 바꿔 말하게 한다.',
          task: '정한 일주일 게임 시간 안에서 넣을 요일 블록을 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            PICK('150분에 딱 맞게 골라요. 시험 전날인 수요일은 빼요.', { basket: '이번 주에 할 날' },
              [B('mon', '월 30분'), B('wed', '수 30분'), B('fri', '금 40분'), B('sat', '토 60분'), B('sun', '일 60분')], ['mon', 'sat', 'sun'],
              { prompt: '150분을 넘지 않게 토·일을 넣고 하루를 더 골라요.', cards: [B('mon', '월 30분'), B('fri', '금 40분'), B('sat', '토 60분'), B('sun', '일 60분')], pick: ['mon', 'sat', 'sun'] },
              B('thu', '목 100분'), 0.2),
            PICK('100분에 딱 맞게 골라요. 토요일은 꼭 넣어요.', { basket: '이번 주에 할 날' },
              [B('mon', '월 20분'), B('tue', '화 30분'), B('thu', '목 40분'), B('sat', '토 50분'), B('sun', '일 60분')], ['mon', 'tue', 'sat'],
              { prompt: '100분에 딱 맞게 골라요. 토요일은 꼭 넣어요(4개).', cards: [B('mon', '월 20분'), B('tue', '화 30분'), B('sat', '토 50분'), B('sun', '일 60분')], pick: ['mon', 'tue', 'sat'] },
              B('fri', '금 100분'), 0.25),
            PICK('120분에 딱 맞게 골라요. 일요일은 가족과 꼭 해요.', { basket: '이번 주에 할 날' },
              [B('mon', '월 30분'), B('wed', '수 20분'), B('fri', '금 40분'), B('sat', '토 60분'), B('sun', '일 50분')], ['mon', 'fri', 'sun'],
              { prompt: '120분에 딱 맞게 골라요. 일요일은 꼭 넣어요(4개).', cards: [B('mon', '월 30분'), B('wed', '수 20분'), B('fri', '금 40분'), B('sun', '일 50분')], pick: ['mon', 'fri', 'sun'] },
              B('sat2', '토 100분'), 0.3,
              { conclude: '일주일 게임 시간도 미리 나눠 두면 할 일과 약속을 함께 지킬 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '셈을 해서 빈칸을 채워요.', text: '150분 가운데 토요일 60분, 일요일 60분을 쓰면 ___분이 남아요.', answer: '30' }] },
        notes: '150분·100분·120분은 셈 연습용 우리 반 약속 값이다. 권장 시간처럼 말하지 않는다.',
      }),
      C({
        id: 'saf-cyber.e34.game-promise.activity.play-rest', type: 'activity', title: '게임·쉬기 타이머 맞추기',
        method: '게임·쉬기 구간 계획 맞추기', tool: 'timer', minutes: 14,
        levels: { easy: '1·3번은 게임 시간 하나만 맞추고, 2번은 쉬는 차례 카드 2장을 놓는다.', base: '게임·쉬기·횟수를 모두 맞추고, 쉬는 차례 카드 3장을 놓는다.', challenge: '3번에서 오늘 정한 45분에 맞도록 게임·쉬기 시간을 스스로 정해 전체 시간을 맞춘다.' },
        activity: {
          title: '게임·쉬기 구간 계획', tool: 'timer',
          teacher: '"이 타이머의 \'운동\' 칸을 오늘은 게임 시간으로 생각해요. 20분 하고 5분 쉬기를 2번 하려면 어떻게 맞출까요?" 칸을 하나씩 짚으며 맞추게 한다. 쉬기를 0분으로 두는 학생에게 "쉬지 않고 계속하면 눈과 몸은 어떨까요?"라고 묻는다. 쉬는 5분에는 저장하고 화면을 끈 뒤 일어나 몸을 펴는 차례를 함께 따라 한다.',
          task: '타이머의 \'운동\' 칸을 게임 시간으로 보고 계획대로 맞추어요. 쉬는 차례 카드도 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '게임 20분, 쉬기 5분을 2번 하도록 맞춰요.', toolOptions: { timeUnit: 'min', title: '게임·쉬기 계획', plan: { work: 10, rest: 0, rounds: 1 } }, target: { plan: { work: 20, rest: 5, rounds: 2 } }, difficulty: 0.15,
              levels: { easy: { prompt: '게임 시간 20분만 타이머에 맞춰요.', target: { plan: { work: 20 } } } } },
            { prompt: '쉬는 5분에 할 일을 차례대로 놓아요.', toolOptions: { title: '쉬는 시간 차례', cards: ['몸 쭉 펴기', '게임 저장하기', '화면 끄고 일어나기'] }, target: { order: ['게임 저장하기', '화면 끄고 일어나기', '몸 쭉 펴기'] }, difficulty: 0.2,
              levels: { easy: { prompt: '쉬는 시간 카드 2장을 차례대로 놓아요.', toolOptions: { cards: ['몸 쭉 펴기', '게임 저장하기'] }, target: { order: ['게임 저장하기', '몸 쭉 펴기'] } } } },
            { prompt: '게임 15분, 쉬기 5분을 3번 하도록 맞춰요.', toolOptions: { timeUnit: 'min', title: '주말 게임 계획', plan: { work: 10, rest: 0, rounds: 1 }, showTotal: true }, target: { plan: { work: 15, rest: 5, rounds: 3 } }, difficulty: 0.25,
              levels: { easy: { prompt: '게임 시간 15분만 타이머에 맞춰요.', target: { plan: { work: 15 } } }, challenge: { prompt: '2번 하고 전체가 45분이 되게 맞춰요.', target: { plan: { rounds: 2 }, total: 45 } } },
              conclude: '게임 중간에 쉬는 시간을 넣고, 전체 시간이 약속 안에 들어오는지 확인해요.' },
          ],
        },
        worksheet: { items: [{ type: 'blank', prompt: '셈을 해서 빈칸을 채워요.', text: '게임 20분, 쉬기 5분을 2번 하면 모두 ___분이에요.', answer: '45' }] },
        notes: '타이머 교구는 칸 이름이 \'운동·쉬기\'로 고정돼 있다. 화면에서 \'운동\' 칸을 게임(화면) 시간으로 읽는다고 먼저 말해 준다.',
      }),
      C({
        id: 'saf-cyber.e34.game-promise.activity.one-more', type: 'activity', title: "갈림길: '한 판만 더'",
        method: "'한 판만 더' 갈림길 결과 추적", tool: 'dilemma', minutes: 14,
        levels: { easy: '갈림 1번, 보기 2개 가운데 고르고 결과를 본다.', base: '갈림 2번, 보기 3개씩 고르며 결과를 따라간다.', challenge: '갈림 2번을 지난 뒤 근거 카드 3장 가운데 알맞은 것을 고르고, 친구에게 할 거절 말을 활동지에 직접 쓴다.' },
        activity: {
          title: "갈림길: '한 판만 더'", tool: 'dilemma',
          teacher: '"\'한 판만 더\'를 고르면 그 뒤에 무슨 일이 이어질까요?" 보기를 고를 때마다 결과를 소리 내어 읽고, 나와 친구·가족에게 어떤 일이 생기는지 짝과 말하게 한다. "약속은 어기면 그만이에요"라는 학생에게 "약속을 자꾸 어기면 다음 약속은 어떻게 될까요?"라고 묻는다. 거절할 때 "내일 또 하자"처럼 다음 약속을 함께 말하면 친구 마음을 지킬 수 있다는 것을 짚는다.',
          task: '장면을 읽고 보기를 골라요. 결과를 보고 다음 장면에서 또 골라요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            DIL("약속 시간이 끝났는데 친구가 '한 판만 더' 해요.", {
              text: '약속한 40분이 끝났는데 같이 하던 친구가 "한 판만 더!" 하고 졸라요.', motif: 'star',
              choices: [
                { id: 'more', text: '한 판 더 한다', result: '한 판이 길어져 보호자와 다퉜어요.', impact: [{ who: '나', text: '다음 날 게임 시간이 줄었어요', tone: -1 }] },
                { id: 'stop', text: '"약속 시간이야" 끈다', result: '친구가 "치사해!" 하며 서운해해요.', ending: '약속대로 끄고 다른 놀이를 했어요.', next: {
                  text: '친구가 "치사해!" 하며 서운해해요.', choices: [
                    { id: 'explain', text: '"약속 지키고 싶어, 내일 하자"', result: '친구가 "그래, 내일 같이 하자"고 했어요.', impact: [{ who: '친구와 나', text: '내일 다시 함께해요', tone: 1 }], ending: '약속도 친구 마음도 함께 지켰어요.' },
                    { id: 'again', text: '미안해서 다시 켠다', result: '또 시간을 넘겨 가족과의 약속이 깨졌어요.', impact: [{ who: '가족', text: '믿음이 줄었어요', tone: -1 }] },
                    { id: 'mad', text: '"너랑 안 해!" 한다', result: '친구와 사이가 서먹해졌어요.', impact: [{ who: '친구', text: '마음이 상했어요', tone: -1 }] },
                  ] } },
                { id: 'hide', text: '보호자 몰래 계속한다', result: '들켜서 게임기를 맡기게 됐어요.', impact: [{ who: '나', text: '약속이 줄었어요', tone: -1 }] },
              ] }, [['stop', 'explain']],
            [{ id: 'trust', text: '약속을 지켜야 믿음이 생겨서' }, { id: 'next', text: '내일 약속으로 친구도 지켜서' }, { id: 'once', text: '한 번쯤 어겨도 괜찮아서', why: '한 번이 이어지면 약속이 사라져요.' }], ['trust', 'next'], 0.2),
            DIL('다음 단계가 조금 남았는데 시간이 끝났어요.', {
              text: '약속한 시간이 끝났는데 다음 단계까지 조금만 더 하면 돼요.', motif: 'moon',
              choices: [
                { id: 'push', text: '끝까지 한다', result: '다음 단계에서 또 다음 단계가 나왔어요.', impact: [{ who: '나', text: '30분을 더 했어요', tone: -1 }] },
                { id: 'save', text: '저장하고 끈다', result: '저장하고 화면을 껐어요.', ending: '끝낼 때를 지켜 하루가 흐트러지지 않았어요.', next: {
                  text: '끄고 나니 다음 단계가 자꾸 생각나요.', choices: [
                    { id: 'out', text: '밖에서 줄넘기를 한다', result: '몸을 움직이니 생각이 가라앉았어요.', impact: [{ who: '나', text: '기분이 상쾌해요', tone: 1 }], ending: '다른 활동으로 마음을 돌렸어요.' },
                    { id: 'peek', text: '잠깐만 다시 켠다', result: '잠깐이 한 시간이 됐어요.', impact: [{ who: '나', text: '숙제를 못 했어요', tone: -1 }] },
                    { id: 'sulk', text: '짜증을 낸다', result: '가족에게 짜증을 내 다퉜어요.', impact: [{ who: '가족', text: '속상했어요', tone: -1 }] },
                  ] } },
                { id: 'clock', text: '시계를 몰래 늦춘다', result: '들켜서 약속이 줄었어요.', impact: [{ who: '가족', text: '믿음이 깨졌어요', tone: -1 }] },
              ] }, [['save', 'out']],
            [{ id: 'endless', text: '다음 단계는 끝없이 이어져서' }, { id: 'switch', text: '다른 활동이 마음을 돌려서' }, { id: 'little', text: '조금이니까 더 해도 돼서', why: '조금씩 더 하면 약속이 무너져요.' }], ['endless', 'switch'], 0.25),
            DIL('내 차례가 끝났는데 더 하고 싶어요.', {
              text: '준이 차례가 끝났는데 아직 더 하고 싶어요. 동생 민이가 기다려요.', motif: 'house',
              choices: [
                { id: 'keep', text: '모른 척 계속한다', result: '민이가 울음을 터뜨렸어요.', impact: [{ who: '민이', text: '속상해요', tone: -1 }] },
                { id: 'pass', text: '민이에게 넘긴다', result: '민이가 신나게 게임을 시작했어요.', ending: '차례를 지켜 다투지 않았어요.', next: {
                  text: '민이 차례가 끝나 가요. 민이가 "형도 한 판 더 해"라고 해요.', choices: [
                    { id: 'done', text: '"오늘 내 시간은 끝났어"', result: '둘이 함께 블록 놀이를 했어요.', impact: [{ who: '준이와 민이', text: '사이좋게 놀아요', tone: 1 }], ending: '내 시간을 지키고 동생과 다른 놀이를 했어요.' },
                    { id: 'yes', text: '한 판 더 한다', result: '또 시간을 넘겨 보호자께 혼났어요.', impact: [{ who: '준이', text: '약속을 어겼어요', tone: -1 }] },
                    { id: 'night', text: '둘이 밤까지 한다', result: '둘 다 늦게 잠들었어요.', impact: [{ who: '준이와 민이', text: '아침에 피곤해요', tone: -1 }] },
                  ] } },
                { id: 'grab', text: '게임기를 뺏는다', result: '다투다 게임기가 떨어졌어요.', impact: [{ who: '준이와 민이', text: '둘 다 다쳤어요', tone: -1 }] },
              ] }, [['pass', 'done']],
            [{ id: 'turn', text: '차례를 지켜야 다투지 않아서' }, { id: 'mine', text: '내 시간은 내가 지켜서' }, { id: 'offer', text: '동생이 괜찮다 했으니까', why: '동생이 괜찮다 해도 정한 시간은 지켜요.' }], ['turn', 'mine'], 0.3,
            { conclude: "'한 판만 더'를 거절할 때는 다음 약속을 함께 말하고, 다른 활동으로 마음을 돌려요." }),
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '"한 판만 더"라고 조르는 친구에게 할 거절 말을 써요.' }] },
      }),
      C({
        id: 'saf-cyber.e34.game-promise.activity.keep-steps', type: 'activity', title: '약속 지키는 차례 놓기',
        method: '약속 지키는 차례 놓기', tool: 'timeline', minutes: 14,
        levels: { easy: '1·3번은 카드 3장을 차례대로 놓고, 2번은 단계 2개에 할 말을 잇는다. 놓으면 바로 맞는지 알려 준다.', base: '1·3번은 카드 4장을 차례대로, 2번은 단계 3개에 할 말을 잇는다. 3번은 알람이 없을 때의 차례다.', challenge: '1·3번은 틀린 카드 1장을 빼고, 2번은 남는 말 카드 하나를 빼고 잇는다.' },
        activity: {
          title: '약속 지키는 차례', tool: 'timeline',
          teacher: '"약속을 지키려면 게임을 시작하기 전에 무엇을 해야 할까요?" 카드를 다 놓으면 차례대로 소리 내어 읽으며 손동작으로 따라 하게 한다(알람 맞추기 → 하기 → 저장 → 끄기). 알람이 울리면 바로 끄고 계속하는 학생에게 "알람을 끄고 계속하면 알람은 무엇을 도와준 걸까요?"라고 묻는다. 알람이 없을 때는 시계를 보고 끝 시각을 미리 정해 두는 방법을 짚는다.',
          task: '약속을 지키는 차례대로 카드를 놓고, 단계마다 할 말을 이어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            ORD('게임 약속을 지키는 차례대로 놓아요.', { axis: ['시작 전', '끝난 뒤'] },
              [{ id: 'alarm', text: '알람 맞추기' }, { id: 'play', text: '게임하기' }, { id: 'save', text: '알람 듣고 저장' }, { id: 'off', text: '끄고 다른 활동' }],
              ['alarm', 'play', 'save', 'off'], { idx: [0, 1, 3], order: ['alarm', 'play', 'off'] },
              { id: 'snooze', text: '알람 끄고 계속', why: '알람을 끄고 계속하면 약속을 어기게 돼요.' }, 0.15),
            { prompt: '단계마다 할 말을 이어요.', toolOptions: { mode: 'match', axis: ['시작 전', '끝난 뒤'], slots: [{ id: 's1', label: '알람 맞출 때' }, { id: 's2', label: '알람이 울릴 때' }, { id: 's3', label: '끈 뒤에' }], cards: ['"이제 줄넘기 하자"', '"저장하고 끌게요"', '"40분 뒤 끝낼게요"'] },
              target: { match: { s1: '"40분 뒤 끝낼게요"', s2: '"저장하고 끌게요"', s3: '"이제 줄넘기 하자"' } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '두 단계에 할 말을 이어요.', toolOptions: { slots: [{ id: 's1', label: '알람 맞출 때' }, { id: 's2', label: '알람이 울릴 때' }], cards: ['"저장하고 끌게요"', '"40분 뒤 끝낼게요"'] }, target: { match: { s1: '"40분 뒤 끝낼게요"', s2: '"저장하고 끌게요"' } } },
                challenge: { prompt: '단계마다 할 말을 이어요. 남는 말이 하나 있어요.', toolOptions: { cards: ['"저장하고 끌게요"', '"딱 한 판만 더"', '"이제 줄넘기 하자"', '"40분 뒤 끝낼게요"'] }, target: { match: { s1: '"40분 뒤 끝낼게요"', s2: '"저장하고 끌게요"', s3: '"이제 줄넘기 하자"' } } },
              } },
            ORD('알람이 없을 때 약속을 지키는 차례로 놓아요.', { axis: ['시작 전', '끝난 뒤'] },
              [{ id: 'write', text: '끝 시각 정해 쓰기' }, { id: 'play', text: '게임하기' }, { id: 'look', text: '시계 보고 저장' }, { id: 'tell', text: '가족에게 끝났다 말하기' }],
              ['write', 'play', 'look', 'tell'], { idx: [0, 1, 2], order: ['write', 'play', 'look'] },
              { id: 'guess', text: '느낌으로 끝내기', why: '느낌으로는 시간이 얼마나 갔는지 잘 몰라요.' }, 0.25,
              { conclude: '시작 전에 끝 시각을 정하고, 알리면 저장하고 끄고, 다른 활동으로 넘어가요.' }),
          ],
        },
        worksheet: { items: [{ type: 'order', prompt: '약속을 지키는 차례대로 번호를 써요.', options: ['알람 맞추기', '게임하기', '알람 듣고 저장', '끄고 다른 활동'], answer: '알람 맞추기, 게임하기, 알람 듣고 저장, 끄고 다른 활동' }] },
      }),
      C({
        id: 'saf-cyber.e34.game-promise.wrap.rule-map', type: 'wrap', title: '내 게임 약속 마인드맵',
        method: '내 게임 약속 마인드맵', tool: 'mindmap', minutes: 6,
        levels: { easy: '가지 2개(언제·얼마나)에 카드를 붙인다.', base: '가지 4개(언제·얼마나·어디서·조심할 것)에 카드를 붙인다.', challenge: '가지 4개에 붙인 뒤, 활동지에 가지마다 지키기 어려운 점을 하나씩 쓴다.' },
        wrap: {
          teacher: '"오늘 배운 약속의 네 가지를 내 약속으로 모아 볼까요?" 가지마다 카드를 붙인 뒤 짝에게 내 약속을 문장으로 말하게 한다. \'밤 11시에\'를 언제에 붙이는 학생에게 "그 시각이면 잠자는 시간은 어떻게 될까요?"라고 묻는다. 출구 2번에서 "상관없어요"를 고른 학생에게 연령 표시가 왜 있는지 다시 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'mindmap', options: { topic: '내 게임 약속', slots: ['언제', '얼마나', '어디서', '조심할 것'], cards: ['할 일 다 한 뒤', '알람 한 번까지', '거실 소파에서', '결제는 보호자와', '밤 11시에', '이불 속에서'] }, prompt: '내 게임 약속 카드를 알맞은 가지에 붙여요.',
              target: { sort: { '언제': ['할 일 다 한 뒤'], '얼마나': ['알람 한 번까지'], '어디서': ['거실 소파에서'], '조심할 것': ['결제는 보호자와'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '약속 카드를 두 가지에 붙여요.', toolOptions: { slots: ['언제', '얼마나'], cards: ['할 일 다 한 뒤', '알람 한 번까지', '밤 11시에'] }, target: { sort: { '언제': ['할 일 다 한 뒤'], '얼마나': ['알람 한 번까지'] } } } } },
            { type: 'choice', prompt: '친구들이 다 하는 게임이면 연령 표시는?', options: ['상관없어요', '그래도 꼭 확인해요', '몰래 하면 돼요'], answer: 1, difficulty: 0.1, explain: '연령 표시는 내 나이에 맞는지 알려 줘요. 친구들이 해도 확인해요.' },
            { type: 'short', prompt: '내 게임 약속을 한 문장으로 써요.' },
          ],
        },
        worksheet: {
          title: '내 게임 약속',
          items: [
            { type: 'table', prompt: '내 게임 약속과 지키기 어려운 점을 써요.', columns: ['약속', '지키기 어려운 점'], cells: [['언제:', ''], ['얼마나:', ''], ['어디서:', ''], ['조심할 것:', '']] },
            { type: 'check', prompt: '약속을 보호자와 함께 볼게요.', options: ['보호자와 함께 읽었어요'] },
          ],
          easy: { note: '언제·얼마나 두 가지만 써도 돼요.', items: [{ type: 'short', prompt: '언제, 얼마나 게임을 할지 써요.' }] },
        },
      }),
      C({
        id: 'saf-cyber.e34.game-promise.wrap.rule-sentence', type: 'wrap', title: '약속 문장 완성하기',
        method: '약속 문장 빈칸 채우기', tool: 'wordcards', minutes: 6,
        levels: { easy: '빈칸 1개에 낱말 카드를 넣는다.', base: '빈칸 3개에 낱말 카드를 넣어 약속 문장을 완성한다.', challenge: '빈칸 4개(어겼을 때 할 일 포함)를 채운다.' },
        wrap: {
          teacher: '"나는 무엇을 마치고, 어디에서, 몇 분 동안 게임을 할까요?" 빈칸을 채운 뒤 완성한 문장을 짝에게 소리 내어 읽게 한다. \'이불 속\'을 넣는 학생에게 "이불 속에서 하면 끝낼 때를 누가 알려 줄까요?"라고 묻는다. 출구 2번에서 "그만이에요"를 고른 학생에게 "어긴 다음 날은 어떻게 하면 다시 지킬 수 있을까요?"라고 되묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'r1', label: '나는 ___ 다 하고 나서,' }, { id: 'r2', label: '___에서' }, { id: 'r3', label: '___분 동안만 게임을 해요.' }], cards: ['숙제', '거실', '40', '이불 속', '밤새'] }, prompt: '빈칸에 카드를 넣어 약속 문장을 완성해요.', target: { fill: { r1: '숙제', r2: '거실', r3: '40' } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '빈칸 하나에 카드를 넣어요.', toolOptions: { slots: [{ id: 'r1', label: '나는 ___ 다 하고 나서 게임을 해요.' }], cards: ['숙제', '이불 속'] }, target: { fill: { r1: '숙제' } } },
                challenge: { prompt: '빈칸 넷에 카드를 넣어 약속 문장을 완성해요.', toolOptions: { slots: [{ id: 'r1', label: '나는 ___ 다 하고 나서,' }, { id: 'r2', label: '___에서' }, { id: 'r3', label: '___분 동안만 게임을 해요.' }, { id: 'r4', label: '어기면 다음 날은 ___.' }], cards: ['숙제', '거실', '40', '쉬어요', '이불 속', '밤새', '두 배로 해요'] }, target: { fill: { r1: '숙제', r2: '거실', r3: '40', r4: '쉬어요' } } },
              } },
            { type: 'choice', prompt: '약속을 한 번 어겼어요. 알맞은 생각은?', options: ['어기면 그만이에요', '다시 지키도록 고쳐요', '숨기면 돼요'], answer: 1, difficulty: 0.1, explain: '어겼을 때는 숨기지 않고, 다시 지킬 방법을 가족과 정해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '내 약속 문장',
          items: [
            { type: 'blank', prompt: '내 약속 문장을 완성해요.', text: '나는 ___ 다 하고 나서, ___에서, ___분 동안만 게임을 해요.' },
            { type: 'short', prompt: '약속을 어겼을 때 할 일을 한 문장으로 이어 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-cyber.e34.game-promise.wrap.sign-check', type: 'wrap', title: '게임 약속 실천 다짐',
        method: '게임 약속 실천 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '다짐 칸 2개에 스스로 표시한다.', base: '다짐 칸 3개(약속 두 줄 + 가족과 함께 보기)에 스스로 표시한다.', challenge: '다짐 칸 4개(어긴 날 할 일 정하기 포함)에 표시한다.' },
        wrap: {
          teacher: '"오늘 정한 약속을 가족과 함께 볼 수 있을까요?" 다짐 칸을 함께 읽고 스스로 표시하게 한다. 이 점검은 맞고 틀림이 없으며, 활동지의 일주일 칸은 집에서 가족과 채운다고 안내한다. 출구 2번에서 "혼자 몰래"를 고른 학생에게 "가족이 함께 보면 약속 지키기가 어떻게 달라질까요?"라고 묻는다.',
          exitTicket: [
            { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '게임 약속 다짐', items: [{ id: 'when', text: '숙제 끝나고 할게요' }, { id: 'time', text: '정한 시간만 할게요' }, { id: 'family', text: '가족과 함께 볼게요' }] }, prompt: '지킬 다짐에 스스로 표시해요.', target: { selfCheck: true }, difficulty: 0.1,
              levels: { easy: { toolOptions: { items: [{ id: 'time', text: '정한 시간만 할게요' }, { id: 'family', text: '가족과 함께 볼게요' }] } }, challenge: { toolOptions: { items: [{ id: 'when', text: '숙제 끝나고 할게요' }, { id: 'time', text: '정한 시간만 할게요' }, { id: 'family', text: '가족과 함께 볼게요' }, { id: 'broke', text: '어긴 날 할 일 정함' }] } } } },
            { type: 'choice', prompt: '약속을 지키는 데 도움이 되는 것은?', options: ['혼자 몰래 하기', '가족과 함께 점검하기', '알람 꺼 두기'], answer: 1, difficulty: 0.1, explain: '가족과 함께 보면 약속을 지키기 쉬워요.' },
            { type: 'short', prompt: '약속을 어긴 날 할 일을 하나 써요.' },
          ],
        },
        worksheet: {
          title: '일주일 게임 약속 점검',
          items: [
            { type: 'table', prompt: '약속을 지킨 날에 ○를 해요(가족과 함께).', columns: ['약속', '월', '화', '수', '목', '금', '토', '일'], cells: [['숙제 끝나고', '', '', '', '', '', '', ''], ['정한 시간만', '', '', '', '', '', '', '']] },
            { type: 'check', prompt: '가족과 함께 보았어요.', options: ['가족과 함께 보았어요'] },
          ],
        },
        notes: '일주일 점검표는 집에서 가족과 보는 것이다. 지킨 날 수를 걷거나 비교·발표하지 않는다.',
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 스마트폰 목적 있게 쓰기 (별표 2 초등 '건전한 사이버 통제 능력 배양 및 사용습관 형성하기' + 표준안 스마트폰)
  // ======================================================================================================
  {
    const C = T('smart-use', 4);
    const APP = [['영상', 50], ['게임', 30], ['학습', 20], ['메시지', 10]];
    const HOME = {
      title: '우리 집(가상)', grid: [4, 3],
      regions: [
        { name: '내 방', cells: [[0, 0], [1, 0]] }, { name: '동생 방', cells: [[2, 0], [3, 0]] },
        { name: '거실', cells: [[0, 1], [1, 1], [2, 1], [0, 2], [1, 2]] }, { name: '욕실', cells: [[3, 1], [3, 2], [2, 2]] },
      ],
    };
    M.push(
      C({
        id: 'saf-cyber.e34.smart-use.intro.app-graph', type: 'intro', title: '지우의 하루 앱 사용 그래프',
        method: '가상 친구 앱 사용 막대그래프 읽기', tool: 'chart', minutes: 5,
        levels: { easy: '막대 끝에 값이 보이는 그래프에서 가장 오래 쓴 것을 함께 고른다.', base: '값 없이 눈금을 읽어 가장 오래 쓴 것을 고른다.', challenge: '가장 긴 막대(영상)와 가장 짧은 막대(메시지)가 몇 분 차이인지 말한다.' },
        intro: {
          teacher: '"가상의 친구 지우가 하루 동안 쓴 앱을 그래프로 나타냈어요. 무엇을 가장 오래 썼을까요?" 시연 단추로 \'영상\' 막대가 골라지는 것을 보이고 눈금을 함께 읽는다. 우리 반 친구들의 사용 시간은 묻지 않는다고 먼저 밝힌다. "영상이 제일 길면 나쁜 거예요"라는 말이 나오면 "영상을 무엇 때문에 봤는지에 따라 달라질까요?"라고 되물어 오늘은 \'목적\'을 생각해 본다고 이어 간다.',
          student: '지우의 하루 앱 사용 그래프를 읽고, 가장 오래 쓴 것을 골라 보아요.',
          demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '지우의 하루 앱 사용(가상)', unit: '분', xLabel: '앱 종류', yLabel: '쓴 시간', data: APP, max: 60, scale: 10, showValues: true, question: '가장 오래 쓴 것은?', choices: ['영상', '게임', '학습', '메시지'] }, sequence: [{ pick: 0 }] },
          art: { draw: 'a paper bar chart with four paper bars of different heights standing on a desk next to a paper smartphone, a paper girl pointing at the tallest bar', banner: '지우는 무엇을 오래 썼을까?', extra: [{ motif: 'star', x: 300, y: 96 }] },
        },
        notes: PRIVACY,
      }),
      C({
        id: 'saf-cyber.e34.smart-use.intro.ping', type: 'intro', title: '숙제 중에 울린 알림',
        method: '알림 소리 장면 카드 고르기', tool: 'wordcards', minutes: 5,
        levels: { easy: '카드 2장(바로 본다·숙제 끝나고 본다) 가운데 좋은 행동을 함께 고른다.', base: '카드 3장 가운데 좋은 행동 2장을 고른다.', challenge: '고른 카드마다 왜 좋은지 한 문장씩 짝에게 말한다.' },
        intro: {
          teacher: '"숙제하는데 \'띵!\' 하고 알림이 울렸어요. 어떻게 할까요?" 카드를 하나씩 읽고 손을 들어 고르게 한 뒤, 시연 단추로 \'숙제 끝나고 본다\'와 \'알림을 꺼 둔다\'가 바구니에 담기는 것을 보인다. "알림은 바로 확인해야 해요"라는 말이 나오면 "숙제 중에 알림을 보면 다시 숙제로 돌아오기까지 어떨까요?"라고 되묻는다. 급한 연락은 보호자가 전화로 한다는 것도 짚는다.',
          student: '숙제하는 중에 알림이 울렸을 때 좋은 행동 카드를 골라 보아요.',
          demo: { tool: 'wordcards', options: { mode: 'pick', basket: '좋은 행동', shuffle: false, cards: [{ id: 'now', text: '바로 본다' }, { id: 'after', text: '숙제 끝나고 본다' }, { id: 'off', text: '알림을 꺼 둔다' }] }, sequence: [{ pick: ['after', 'off'] }] },
          art: { draw: 'a paper child doing homework at a desk while a paper smartphone lights up with a small bell icon at the edge of the desk', banner: '띵! 알림이 울렸어요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'saf-cyber.e34.smart-use.activity.purpose-sort', type: 'activity', title: '목적 있는 사용 나누기',
        method: '목적 있는 사용·목적 없는 사용 나누기', tool: 'story', minutes: 14,
        levels: { easy: '카드 4장을 두 칸에 나누고, 놓으면 바로 맞는지 알려 준다.', base: '카드 8장을 목적 있음·목적 없음으로 나눈다.', challenge: '헷갈리는 카드 2장이 더해진 10장을 나누고, 목적 없음 카드 하나를 목적 있게 바꿔 짝에게 말한다.' },
        activity: {
          title: '목적 있는 사용·목적 없는 사용', tool: 'story',
          teacher: '"이 카드는 폰을 켜기 전에 할 일을 정했나요, 그냥 켰나요?" 카드를 놓을 때마다 "무엇을 하려고"를 붙여 말하게 한다. \'정한 영상 한 편\'을 목적 없음에 두는 학생에게 "보기 전에 무엇을 볼지 정했다면 어떤 사용일까요?"라고 묻는다. "폰은 심심할 때 켜는 거예요"라는 말이 나오면 "심심해서 켜면 언제 끄게 될까요?"라고 되묻는다.',
          task: '폰을 쓰는 장면 카드를 목적 있는 사용과 목적 없는 사용으로 나누어요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('집에서 폰을 쓰는 장면을 나누어요.', { mode: 'sort', title: '집에서' }, ['목적 있는 사용', '목적 없는 사용'],
              [['숙제 낱말 찾기', '가족에게 연락', '내일 날씨 보기', '준비물 사진 찍기'], ['그냥 계속 넘겨 보기', '심심해서 켜기', '알림마다 다 열기', '할 일 없이 들여다봄']], 2, [['길 찾기 지도 보기'], ['밥 먹으며 영상']], 0.15),
            SORT('숙제할 때 폰을 쓰는 장면을 나누어요.', { mode: 'sort', title: '숙제할 때' }, ['목적 있는 사용', '목적 없는 사용'],
              [['조사할 것 검색', '선생님 안내 읽기', '정한 단원 학습 앱', '발표 사진 고르기'], ['검색하다 영상 클릭', '친구 사진 구경', '광고 따라 들어가기', '숙제 중 게임 켜기']], 2, [['사전에서 낱말 뜻'], ['추천 영상 연달아']], 0.2),
            SORT('주말에 폰을 쓰는 장면을 나누어요.', { mode: 'sort', title: '주말에' }, ['목적 있는 사용', '목적 없는 사용'],
              [['가족 사진 보내기', '만들기 영상 따라 함', '나들이 장소 찾기', '정한 영상 한 편'], ['누워서 계속 넘김', '이유 없이 앱 열기', '끝나도 다음 영상', '심심할 때마다 켬']], 2, [['할머니와 영상 통화'], ['새벽에 몰래 보기']], 0.25,
              { conclude: '켜기 전에 무엇을 할지 정하면 목적 있는 사용이 되고, 할 일을 마치면 끌 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '목적 있는 사용이면 ○, 목적 없는 사용이면 ×를 써요.', columns: ['장면', '○ / ×'], cells: [['숙제 낱말 찾기', ''], ['심심해서 켜기', ''], ['가족에게 연락', ''], ['그냥 계속 넘겨 보기', '']], answer: '○, ×, ○, ×' }] },
        notes: PRIVACY,
      }),
      C({
        id: 'saf-cyber.e34.smart-use.activity.ask-first', type: 'activity', title: '켜기 전에 나에게 묻기',
        method: '켜기 전에 물을 질문 짝 토의', tool: 'mindmap', minutes: 14,
        levels: { easy: '가지 2개(무엇을?·얼마나?)에 카드 4장을 골라 붙인다.', base: '가지 3개(무엇을?·얼마나?·다음엔 뭐 하지?)에 카드 6장을 붙인다.', challenge: '카드 3장이 더해진 9장을 붙이고, 짝의 질문 답과 견주어 가장 좋은 하나를 고른다.' },
        activity: {
          title: '폰 켜기 전에 나에게 묻기', tool: 'mindmap',
          teacher: '"폰을 켜기 전에 나에게 무엇을 물어볼까요? \'무엇을 할까?\', \'얼마나 할까?\', \'끝나면 뭐 하지?\'" 짝과 카드를 하나씩 붙이며 실제로 서로 물어보고 답하게 한다. \'다음엔 뭐 하지?\' 가지에 \'영상 한 편만\'을 붙이는 학생에게 "이 카드는 무엇을 하는지, 얼마나 하는지, 끝난 뒤 할 일인지 다시 읽어 볼까요?"라고 묻는다. 끝난 뒤 할 일을 미리 정하면 끄기 쉽다는 것을 짚는다.',
          task: '짝과 토의해 \'폰 켜기 전에 나에게 묻기\' 가지에 알맞은 답 카드를 붙여요.', levels: { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } },
          items: [
            SORT('숙제하다 폰을 켜기 전에 물어요.', { topic: '숙제하다 켜기 전' }, ['무엇을?', '얼마나?', '다음엔 뭐 하지?'],
              [['숙제 낱말 찾기', '조사할 것 찾기'], ['10분만', '세 개 찾을 때까지'], ['숙제 마무리', '책가방 챙기기']], 2, [['발표 사진 찾기'], ['알람 한 번까지'], ['찾은 것 공책에 쓰기']], 0.15, {}, 2),
            SORT('저녁 먹기 전에 폰을 켜기 전에 물어요.', { topic: '저녁 먹기 전' }, ['무엇을?', '얼마나?', '다음엔 뭐 하지?'],
              [['할머니께 연락', '내일 날씨 보기'], ['5분만', '통화 한 번'], ['식탁 차리기 돕기', '저녁 먹기']], 2, [['준비물 확인하기'], ['저녁 먹기 전까지'], ['손 씻기']], 0.2, {}, 2),
            SORT('주말 오후에 폰을 켜기 전에 물어요.', { topic: '주말 오후' }, ['무엇을?', '얼마나?', '다음엔 뭐 하지?'],
              [['종이접기 영상 보기', '가족 사진 보내기'], ['영상 한 편만', '30분 알람까지'], ['직접 접어 보기', '밖에서 놀기']], 2, [['나들이 장소 찾기'], ['한 번 보고 끄기'], ['책 읽기']], 0.25,
              { conclude: '켜기 전에 "무엇을, 얼마나, 다음엔 뭐 하지?"를 물으면 목적 있게 쓰고 제때 끌 수 있어요.' }, 2),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '폰을 켜기 전에 나에게 묻고 답을 써요.', columns: ['질문', '내 답'], cells: [['무엇을?', ''], ['얼마나?', ''], ['다음엔 뭐 하지?', '']] }] },
      }),
      C({
        id: 'saf-cyber.e34.smart-use.activity.settings', type: 'activity', title: '보호자와 켤 설정 고르기',
        method: '보호자와 함께 할 설정 고르기', tool: 'kitchen', minutes: 14,
        levels: { easy: '점검 칸 3개 가운데 보호자와 함께 켤 설정만 표시한다.', base: '점검 칸 5개 가운데 보호자와 함께 켤 설정만 골라 표시한다.', challenge: '5개를 표시한 뒤, 고른 설정마다 도움이 되는 까닭을 짝에게 설명한다(설명은 교사가 짝 활동으로 진행).' },
        activity: {
          title: '보호자와 함께 켤 설정', tool: 'kitchen',
          teacher: '"이 설정을 켜면 폰을 목적 있게 쓰는 데 도움이 될까요, 더 자꾸 보게 될까요?" 칸을 하나씩 소리 내어 읽고 도움이 되는 설정에만 표시하게 한다. 설정은 혼자 바꾸지 않고 보호자와 함께 켠다는 것을 먼저 말한다. \'모든 알림 소리 크게\'에 표시한 학생에게 "알림 소리가 커지면 숙제할 때 어떨까요?"라고 묻는다. 기기마다 설정 이름이 조금씩 다르다는 것도 알려 준다.',
          task: '점검표에서 보호자와 함께 켤 설정만 골라 표시해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            CHK('보호자와 함께 켤 설정만 표시해요.', '보호자와 함께 켤 설정', [{ id: 'gameoff', text: '게임 알림 끄기', ok: true }, { id: 'sleep', text: '잠자기 모드 켜기', ok: true }, { id: 'loud', text: '모든 알림 소리 크게', ok: false }, { id: 'limit', text: '사용 시간 알림 켜기', ok: true }, { id: 'auto', text: '다음 영상 자동 재생', ok: false }], [0, 1, 2], 0.15),
            CHK('숙제할 때 도움이 되는 것만 표시해요.', '숙제할 때', [{ id: 'focus', text: '방해 금지 켜기', ok: true }, { id: 'chat', text: '대화방 알림 끄기', ok: true }, { id: 'gameon', text: '게임 알림 켜 두기', ok: false }, { id: 'living', text: '폰은 거실에 두기', ok: true }, { id: 'preview', text: '알림 미리 보기 크게', ok: false }], [0, 1, 2], 0.2),
            CHK('밤에 도움이 되는 것만 표시해요.', '밤에', [{ id: 'bedtime', text: '잠잘 시간 알림 켜기', ok: true }, { id: 'nightoff', text: '밤에는 알림 끄기', ok: true }, { id: 'bright', text: '화면 밝게 하기', ok: false }, { id: 'charge', text: '침실 밖에서 충전', ok: true }, { id: 'event', text: '게임 출석 알림 켜기', ok: false }], [0, 1, 2], 0.25,
              { conclude: '알림을 줄이고 잠자기 모드를 켜는 설정은 보호자와 함께 해요.' }),
          ],
        },
        worksheet: { items: [{ type: 'check', prompt: '집에서 보호자와 함께 이야기해 볼 설정에 표시해요.', options: ['게임 알림 끄기', '잠자기 모드 켜기', '사용 시간 알림 켜기'] }] },
        notes: '특정 기기·앱의 메뉴 이름이나 회사 이름을 말하지 않는다. 설정은 가정에서 보호자와 함께 켠다고만 안내하고, 학생 기기를 교실에서 직접 바꾸게 하지 않는다.',
      }),
      C({
        id: 'saf-cyber.e34.smart-use.activity.focus-plan', type: 'activity', title: '폰 멀리 두고 집중 계획',
        method: '폰 멀리 두고 집중 시간 계획', tool: 'timer', minutes: 14,
        levels: { easy: '1·3번은 숙제 시간 하나만 맞추고, 2번은 시작 전 차례 카드 2장을 놓는다.', base: '숙제·쉬기·횟수를 모두 맞추고, 시작 전 차례 카드 3장을 놓는다.', challenge: '3번에서 숙제 양에 맞게 3번에 나눠 전체 50분이 되도록 시간을 스스로 정한다.' },
        activity: {
          title: '폰 멀리 두고 집중 시간', tool: 'timer',
          teacher: '"이 타이머의 \'운동\' 칸을 오늘은 숙제 시간으로 생각해요. 숙제 20분, 쉬기 5분을 2번 하려면 어떻게 맞출까요?" 칸을 하나씩 짚으며 맞추게 한다. "숙제하면서 폰을 옆에 둬도 집중돼요"라는 학생에게 "숙제 중에 알림이 울리면 눈이 어디로 갈까요?"라고 묻는다. 시작 전에 폰을 거실에 두고 타이머를 켜는 차례를 함께 따라 한다.',
          task: '타이머의 \'운동\' 칸을 숙제 시간으로 보고 계획대로 맞추어요. 시작 전 차례 카드도 놓아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '숙제 20분, 쉬기 5분을 2번 하도록 맞춰요.', toolOptions: { timeUnit: 'min', title: '숙제 집중 계획', plan: { work: 10, rest: 0, rounds: 1 } }, target: { plan: { work: 20, rest: 5, rounds: 2 } }, difficulty: 0.15,
              levels: { easy: { prompt: '숙제 시간 20분만 타이머에 맞춰요.', target: { plan: { work: 20 } } } } },
            { prompt: '숙제를 시작하기 전 차례대로 놓아요.', toolOptions: { title: '시작 전 차례', cards: ['숙제 시작', '폰 거실에 두기', '타이머 켜기'] }, target: { order: ['폰 거실에 두기', '타이머 켜기', '숙제 시작'] }, difficulty: 0.2,
              levels: { easy: { prompt: '시작 전 카드 2장을 차례대로 놓아요.', toolOptions: { cards: ['숙제 시작', '폰 거실에 두기'] }, target: { order: ['폰 거실에 두기', '숙제 시작'] } } } },
            { prompt: '숙제 25분, 쉬기 5분을 2번 하도록 맞춰요.', toolOptions: { timeUnit: 'min', title: '숙제가 많은 날', plan: { work: 10, rest: 0, rounds: 1 }, showTotal: true }, target: { plan: { work: 25, rest: 5, rounds: 2 } }, difficulty: 0.25,
              levels: { easy: { prompt: '숙제 시간 25분만 타이머에 맞춰요.', target: { plan: { work: 25 } } }, challenge: { prompt: '3번에 나눠 전체가 50분이 되게 맞춰요.', target: { plan: { rounds: 3 }, total: 50 } } },
              conclude: '폰을 멀리 두고 타이머로 숙제 시간을 정하면 집중하고 제때 쉴 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'order', prompt: '숙제를 시작하기 전 차례대로 번호를 써요.', options: ['폰 거실에 두기', '타이머 켜기', '숙제 시작'], answer: '폰 거실에 두기, 타이머 켜기, 숙제 시작' }] },
        notes: '타이머 교구는 칸 이름이 \'운동·쉬기\'로 고정돼 있다. 화면에서 \'운동\' 칸을 숙제(집중) 시간으로 읽는다고 먼저 말해 준다.',
      }),
      C({
        id: 'saf-cyber.e34.smart-use.wrap.purpose-face', type: 'wrap', title: '목적 있게 쓴 뒤의 마음',
        method: '목적 있게 쓴 뒤 마음 고르기', tool: 'emotion', minutes: 6,
        levels: { easy: '마음 카드 2장 가운데 그 아이의 마음을 고른다.', base: '마음 카드 4장 가운데 그 아이의 마음을 고르고, 오늘 내 마음 얼굴도 고른다.', challenge: '두 마음을 고른 뒤, 오늘부터 폰을 켤 때 지킬 목적 하나를 짝에게 말한다.' },
        wrap: {
          teacher: '"숙제 낱말만 찾고 폰을 내려놓은 친구는 어떤 마음일까요?" 마음 카드를 고른 뒤, 목적을 이루고 끄면 마음이 어떤지 두세 명에게 묻는다. "끄면 아쉬워요"라는 말도 인정하고 "아쉬워도 끄고 나니 무엇을 할 수 있었나요?"라고 묻는다. 마지막 마음 얼굴은 맞고 틀림이 없다고 알려 준다.',
          exitTicket: [
            { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '그 아이의 마음', cards: ['뿌듯함', '편안함', '화남', '걱정'] }, prompt: '할 일만 하고 폰을 내려놓은 아이의 마음을 골라요.', target: { pick: ['뿌듯함', '편안함'] }, difficulty: 0.15,
              levels: { easy: { toolOptions: { cards: ['뿌듯함', '화남'] }, target: { pick: ['뿌듯함'] } } } },
            { type: 'choice', prompt: '폰은 언제 켜는 것이 좋을까요?', options: ['심심할 때마다', '할 일이 정해졌을 때', '알림이 올 때마다'], answer: 1, difficulty: 0.1, explain: '무엇을 할지 정했을 때 켜면 목적 있게 쓸 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '목적 있게 쓰기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '폰을 켜기 전에 ___을 정해요.', answer: '목적' },
            { type: 'short', prompt: '오늘부터 폰을 켤 때 지킬 목적 하나를 써요.' },
          ],
        },
      }),
      C({
        id: 'saf-cyber.e34.smart-use.wrap.charge-spot', type: 'wrap', title: '밤에 폰이 쉬는 자리',
        method: '집 그림에 폰 쉬는 자리 핀 꽂기', tool: 'map', minutes: 6,
        levels: { easy: '집 그림의 두 곳(내 방·거실) 가운데 밤에 폰을 둘 자리를 고른다.', base: '네 곳(내 방·동생 방·거실·욕실) 가운데 밤에 폰을 충전할 자리에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그 자리의 좋은 점을 보기에서 고르고, 다른 좋은 점 하나를 짝에게 말한다.' },
        wrap: {
          teacher: '"밤에 폰은 어디에서 쉬면 좋을까요?" 가상의 집 그림에서 핀을 꽂게 한 뒤 고른 까닭을 묻는다. 욕실을 고른 학생에게 "물기가 많은 곳에 충전기를 두면 어떨까요?"라고 묻고, 내 방을 고른 학생에게 "밤에 알림이 울리면 잠은 어떻게 될까요?"라고 묻는다. 실제 자리는 집마다 다르니 가족과 함께 정하자고 마무리한다.',
          exitTicket: [
            { type: 'tool', tool: 'map', options: HOME, prompt: '밤에 폰을 충전해 둘 자리에 핀을 꽂아요.', target: { region: '거실' }, difficulty: 0.15,
              levels: {
                easy: { prompt: '두 곳 가운데 밤에 폰을 둘 자리에 핀을 꽂아요.', toolOptions: { regions: [{ name: '내 방', cells: [[0, 0], [1, 0], [2, 0], [3, 0]] }, { name: '거실', cells: [[0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [2, 2], [3, 2]] }] }, target: { region: '거실' } },
                challenge: { prompt: '핀을 꽂고 그 자리의 좋은 점도 골라요.', toolOptions: { ask: { q: '거실에 두면 좋은 점은?', choices: ['잘 때 알림이 안 들려요', '밤에 몰래 보기 쉬워요', '침대에서 바로 봐요'] } }, target: { region: '거실', pick: 0 } },
              } },
            { type: 'choice', prompt: '폰 충전 자리는 누구와 정할까요?', options: ['혼자 몰래 정해요', '가족과 함께 정해요', '친구와 정해요'], answer: 1, difficulty: 0.1, explain: '폰이 쉬는 자리는 가족과 함께 정하고 함께 지켜요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '밤에 폰이 쉬는 자리',
          items: [
            { type: 'choice', prompt: '밤에 폰을 충전하기 좋은 곳은?', options: ['베개 옆', '침실 밖 거실', '욕실'], answer: '침실 밖 거실' },
            { type: 'short', prompt: '가족과 함께 정한 우리 집 폰 쉬는 자리를 써요.' },
          ],
        },
        notes: '집 그림은 가상의 집이다. 학생 집의 구조나 방 배치를 묻거나 그리게 하지 않는다.',
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
