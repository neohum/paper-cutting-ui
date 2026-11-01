/* 법정교육 영양·식생활 — 초3-4 모듈 내용(edu-module.v1). 형식·작성 규칙: MODULES_BUILD.md, 계획: framework/mandatory.json 의 food 초3-4.
 * 근거: 학교급식법 제13조, 식생활교육지원법 제26조 — 건강한 식생활·영양교육 연 2회 이상(research-mandatory §1); 보건교육 초: 건강한 식생활(§2, 미검증).
 * 초3-4 기준: 상황 판단(그림+짧은 글), 차례 정하기, 고른 이유 말하기, 짝 토의, 간단한 표·그림그래프. 법 조문·통계 해석·긴 글쓰기는 쓰지 않는다.
 * 음식을 좋다·나쁘다로 나누지 않는다 — '빠진 식품군', '자주·많이 먹을 때'처럼 사실로 말하고, 편식·몸 모양을 놀리는 말은 쓰지 않는다.
 * 학생 자신의 식습관·몸·가정 형편을 묻거나 채점하지 않는다. 식단·기록·투표 표·가게 값·인물은 모두 직접 지은 가상의 것이다(가명).
 * 영양 수치(열량·당류·나트륨 양·권장량)는 근거 파일에 없어서 쓰지 않는다. 시각·시간 값은 '우리 반 약속(연습용)'이라고 밝힌다.
 * 주제 3개(3학년 1 · 4학년 2), 계획 모듈 24개.
 *
 * 체계도 계획과 다르게 한 것(학생 자신의 식습관을 묻지 않으려고):
 *   - meal-balance.wrap.check-meal: '오늘 저녁 먹은 것 표시' 대신 가상 인물(하리)의 저녁 식단에 든 식품군을 표시한다.
 *   - breakfast-habit.wrap.week-check: '내가 아침 먹은 날 표시 + 보호자 확인 칸' 대신 가상 인물(서준)의 일주일 기록을 읽고 표시하고,
 *     도전은 '가족과 함께 할 수 있는 아침 준비' 고르기로 바꾼다.
 *   - sweet-salty.wrap.swap-list: '해 볼 줄에 표시'(자기 계획)는 채점하지 않는 활동지 칸으로 옮기고, 교구는 알맞은 바꾸기 고르기로 한다.
 *   - breakfast-habit.activity.chew-timer: 교실에서 실제 음식을 먹지 않고 씹는 흉내로 견준다(알레르기·준비물 부담).
 *   - sweet-salty.activity.snack-week: 계획의 '이레'(막대 7개)는 휴대폰에서 막대 누름 영역이 40.8px(44px 미만)이라 엿새(월~토)로 줄였다.
 *
 * 사람 확인: 근거 파일에는 법 이름·횟수만 있어 아래 문장은 일반 식생활 지식으로 썼다. 공식 안내처에서 확인한다.
 *   [보건복지부·한국영양학회 식품구성자전거, 식품의약품안전처 어린이 식생활 안전 안내]
 *   - meal-balance.*: 식품군 다섯 칸 나누기(곡류에 감자·고구마·떡·국수·라면, 고기·생선·달걀·콩류에 두부·된장국·햄, 채소류에 김치·나물·김, 우유·유제품류에 치즈·요구르트)
 *   - meal-balance.*: 한 끼에 여러 식품군을 골고루 담으면 몸에 필요한 여러 가지 영양소를 얻는다 / 빠진 식품군은 같은 칸의 다른 음식으로 채울 수 있다
 *   [식품의약품안전처 식품안전나라 — 당류·나트륨 줄이기, 영양성분 표시 안내]
 *   - sweet-salty.intro.drink-story: 단 음료를 자주 마시면 이가 상하기 쉽고, 단 음료로 배가 차면 밥 먹을 때 입맛이 줄 수 있다 / 목마를 때는 물이 알맞다
 *   - sweet-salty.intro.fruit-real: '과일 맛' 음료·사탕은 과일과 다르다(과일 맛을 낸 것)
 *   - sweet-salty.activity.pack-find: 가공식품 포장(대개 뒷면)에 영양성분 표시 상자가 있고 그 안에 당류·나트륨 줄이 있다 / 앞면에는 이름·그림이 크게 있다
 *   - sweet-salty.activity.snack-week·snack-budget·wrap.*: 짠 과자를 많이 먹으면 목이 마르기 쉽다 / 단 음료·짠 과자는 가끔, 물·과일·우유는 자주
 *   - sweet-salty.activity.water-timer: 등교 뒤·점심 뒤·체육 뒤 물 마시기(시각은 우리 반 약속, 연습용)
 *   [보건복지부 국가건강정보포털 — 아침 식사·식사 습관]
 *   - breakfast-habit.intro.morning-two: 아침을 거르면 오전에 배가 고프고 기운이 없거나 집중이 어려울 수 있다(사람마다 다름)
 *   - breakfast-habit.activity.chew-timer: 천천히 꼭꼭 씹으면 맛을 더 느끼고 배부름을 알아차리기 쉽다
 *   - breakfast-habit.activity.quick-menu·wrap.*: 시간이 없을 때 우유·과일·달걀·빵처럼 바로 먹을 수 있는 것으로 식품군 셋 이상을 채울 수 있다
 */
(function () {
  const BASE = { schema: 'edu-module.v1', domain: 'food', band: '초3-4' };
  const T = (topic, grade) => (o) => Object.assign({}, BASE, { topic: `food.e34.${topic}`, grades: [grade] }, o);
  const M = [];
  const strip = (p) => String(p).replace(/[.?!]$/, '');
  const idOf = (c) => (typeof c === 'string' ? c : c.id);
  const mix = (groups) => { const out = []; const n = Math.max(...groups.map((g) => g.length)); for (let i = 0; i < n; i++) for (const g of groups) if (g[i] != null) out.push(g[i]); return out; };
  const slotId = (s) => (typeof s === 'string' ? s : s.id);
  const sortT = (slots, groups) => ({ sort: Object.fromEntries(slots.map((s, i) => [slotId(s), groups[i].map(idOf)]).filter((e) => e[1].length)) });

  // 다섯 가지 식품군 칸(이 주제의 concepts 차례). 칸 id 는 kitchen 기본 칸 id 와 같은 말을 쓴다.
  const FG = {
    곡류: { id: '곡류', label: '곡류' },
    고기: { id: '고기', label: '고기·생선·달걀·콩류' },
    채소: { id: '채소', label: '채소류' },
    과일: { id: '과일', label: '과일류' },
    우유: { id: '우유', label: '우유·유제품류' },
  };
  const FG5 = [FG.곡류, FG.고기, FG.채소, FG.과일, FG.우유];

  // 식품군 나누기(kitchen sort): groups = FG5 차례로 칸마다 카드. 쉬움 = easyG, 도전 = hardG(같은 칸 모양)
  const FSORT = (prompt, groups, easyG, hardG, d, more) => {
    const p = strip(prompt);
    const n = (g) => g.reduce((a, x) => a + x.length, 0);
    return {
      prompt, toolOptions: { slots: FG5, cards: mix(groups) }, target: sortT(FG5, groups), difficulty: d,
      levels: {
        easy: { prompt: `${p}(${n(easyG)}장).`, toolOptions: { cards: mix(easyG) }, target: sortT(FG5, easyG) },
        challenge: { prompt: `${p}(${n(hardG)}장).`, toolOptions: { cards: mix(hardG) }, target: sortT(FG5, hardG) },
      },
      ...more,
    };
  };

  // 고르기(kitchen·emotion pick): cards = [{ id, text, ok, why? }], 쉬움 = easyIds, 도전 = cards + hard
  const PICK = (prompt, basket, cards, easyIds, hard, d, more) => {
    const plain = (list) => list.map((c) => (c.why ? { id: c.id, text: c.text, why: c.why } : { id: c.id, text: c.text }));
    const ok = (list) => list.filter((c) => c.ok).map((c) => c.id);
    const easy = cards.filter((c) => easyIds.includes(c.id));
    const all = cards.concat(hard || []);
    const p = strip(prompt);
    const lv = { easy: { prompt: `${p}(${easy.length}장 중).`, toolOptions: { cards: plain(easy) }, target: { pick: ok(easy) } } };
    if (hard && hard.length) lv.challenge = { prompt: `${p}(${all.length}장 중).`, toolOptions: { cards: plain(all) }, target: { pick: ok(all) } };
    return { prompt, toolOptions: { mode: 'pick', basket, cards: plain(cards) }, target: { pick: ok(cards) }, difficulty: d, levels: lv, ...more };
  };

  // 짝 잇기(kitchen match): rows = [[칸 글, 카드 글], …] 기본 3줄, 쉬움 앞 2줄, 도전 = 줄 전부 + 함정 카드
  const MATCH = (prompt, base, rows, trap, d, more) => {
    const slots = rows.map((r, i) => ({ id: `r${i + 1}`, label: r[0] }));
    const cards = rows.map((r) => r[1]);
    const tg = (n) => ({ match: Object.fromEntries(rows.slice(0, n).map((r, i) => [`r${i + 1}`, r[1]])) });
    const p = strip(prompt);
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'match', slots: slots.slice(0, 3), cards: cards.slice(0, 3).reverse() }), target: tg(3), difficulty: d,
      levels: {
        easy: { prompt: `${p}(2줄).`, toolOptions: { slots: slots.slice(0, 2), cards: cards.slice(0, 2).reverse() }, target: tg(2) },
        challenge: { prompt: `${p}. 남는 카드가 하나 있어요.`, toolOptions: { slots, cards: [cards[1], trap].concat(cards.slice(2), [cards[0]]) }, target: tg(rows.length) },
      },
      ...more,
    };
  };

  // 차례 놓기(timeline·story order): steps = [{ id, text }], 쉬움 = drop 번째를 뺀 판, 도전 = 함정 카드 한 장이 섞인다
  const ORD = (prompt, base, steps, drop, trap, d, more) => {
    const ids = steps.map((c) => c.id);
    const easy = steps.filter((_, i) => i !== drop);
    const p = strip(prompt);
    const shuffled = (list) => list.slice(1).concat(list[0]).reverse();
    return {
      prompt, toolOptions: Object.assign({}, base, { mode: 'order', slots: steps.length, cards: shuffled(steps) }), target: { order: ids }, difficulty: d,
      levels: {
        easy: { prompt: `${p}(${easy.length}장).`, toolOptions: { slots: easy.length, cards: shuffled(easy) }, target: { order: easy.map((c) => c.id) } },
        challenge: { prompt: `${p}. 틀린 카드 한 장은 빼요.`, toolOptions: { cards: shuffled(steps).concat(trap) }, target: { order: ids } },
      },
      ...more,
    };
  };

  // 정해진 항목만 표시하는 점검표(kitchen checklist): 쉬움 = easyIdx 항목만
  const CHK = (prompt, title, items, easyIdx, d, more) => {
    const ok = (list) => list.filter((x) => x.ok).map((x) => x.id);
    const plain = (list) => list.map((x) => ({ id: x.id, text: x.text }));
    const easy = easyIdx.map((i) => items[i]);
    return {
      prompt, toolOptions: { mode: 'checklist', title, items: plain(items) }, target: { checklist: ok(items) }, difficulty: d,
      levels: { easy: { prompt: `${strip(prompt)}(${easy.length}칸).`, toolOptions: { items: plain(easy) }, target: { checklist: ok(easy) } } },
      ...more,
    };
  };
  const EX = (tool, it) => ({ type: 'tool', tool, prompt: it.prompt, options: it.toolOptions, target: it.target, difficulty: it.difficulty, levels: it.levels });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const FICTION = '식단·기록·인물은 모두 가상의 것이다. "어제 뭐 먹었어요?", "아침 먹고 왔어요?"처럼 학생의 식사를 묻지 않고, 어떤 음식도 나쁜 음식이라 부르지 않는다.';

  // ======================================================================================================
  // 3학년 · 다섯 가지 식품군으로 한 끼 살피기
  // ======================================================================================================
  {
    const C = T('meal-balance', 3);
    const PEOPLE = [{ value: 5, name: '5명' }, { value: 1, name: '1명' }];
    const VOTE = [['달걀말이', 9], ['감자볶음', 6], ['생선구이', 5], ['시금치나물', 4]];
    const PIC = { type: 'picture', title: '좋아하는 반찬 투표(가상의 우리 반 24명)', unit: '명', xLabel: '반찬', yLabel: '고른 친구 수', icons: PEOPLE, icon: 'person' };
    // 한 끼 장보기 가게(가상의 값)
    const SHOP = {
      rice: { id: 'rice', text: '쌀밥', price: 1000 }, potato: { id: 'potato', text: '감자', price: 600 }, bread: { id: 'bread', text: '식빵', price: 1200 },
      fish: { id: 'fish', text: '생선', price: 1500 }, egg: { id: 'egg', text: '달걀', price: 800 }, tofu: { id: 'tofu', text: '두부', price: 900 },
      spinach: { id: 'spinach', text: '시금치', price: 700 }, cucumber: { id: 'cucumber', text: '오이', price: 500 },
      apple: { id: 'apple', text: '사과', price: 1000 }, tangerine: { id: 'tangerine', text: '귤', price: 500 },
      milk: { id: 'milk', text: '우유', price: 900 }, cheese: { id: 'cheese', text: '치즈', price: 1200 }, ricecake: { id: 'ricecake', text: '떡', price: 1000 },
    };
    const S = (...ids) => ids.map((k) => SHOP[k]);
    // 식판 색 약속: 곡류 하양 · 고기·생선·달걀·콩류 갈색 · 채소류 초록 · 과일류 빨강 · 우유·유제품류 파랑
    const TRAY = { colors: ['하양', '갈색', '초록', '빨강', '파랑', '노랑', '주황', '분홍'], shapes: ['circle', 'square', 'rect', 'semi', 'leaf', 'heart'], bg: '하양' };
    const has = (...cols) => cols.map((c) => ({ color: c, min: 1 }));
    M.push(
      C({
        id: 'food.e34.meal-balance.intro.lunch-look', type: 'intro', title: '가상 급식 식단을 식품군 칸에',
        method: '급식 식단 살피기', tool: 'kitchen', minutes: 6,
        levels: { easy: '시연에서 밥·불고기·김치 세 음식이 칸에 들어가는 첫 단계까지 함께 본다.', base: '두부 된장국·시금치나물까지 다섯 음식이 칸에 들어가는 것을 보고 빈 칸 둘을 찾는다.', challenge: '빈 칸(과일류·우유·유제품류)을 채울 음식을 하나씩 짝과 말한다.' },
        intro: {
          teacher: '"가상의 급식 식단이에요. 밥, 두부 된장국, 불고기, 김치, 시금치나물. 이 음식들은 어느 칸에 들어갈까요?" 시연 단추로 음식이 다섯 식품군 칸에 하나씩 들어가는 모습을 보이고, 다 들어가면 "비어 있는 칸은 어디인가요?"라고 묻는다(기다릴 반응: "과일 칸이요", "우유 칸이요"). "된장국은 국이라서 칸이 없어요"라는 말이 나오면 "된장과 두부는 무엇으로 만들까요?"라고 되물어 콩으로 만든 음식은 콩류 칸에 간다는 것을 짚는다. 오늘은 한 끼를 식품군으로 나누어 보고 빠진 칸을 찾는다고 밝힌다.',
          student: '가상의 급식 음식이 어느 식품군 칸에 들어가는지 보고, 비어 있는 칸을 찾아 짝에게 말해 보아요.',
          demo: { tool: 'kitchen', options: { slots: FG5, cards: ['밥', '불고기', '김치', '두부 된장국', '시금치나물'] }, sequence: [{ sort: { 곡류: ['밥'], 고기: ['불고기'], 채소: ['김치'] } }, { sort: { 곡류: ['밥'], 고기: ['불고기', '두부 된장국'], 채소: ['김치', '시금치나물'] } }] },
          art: { draw: 'a paper school lunch tray with rice, a bowl of soybean paste soup with tofu, bulgogi, kimchi and spinach side dish, two empty paper compartments glowing softly', banner: '빈 칸은 어디일까?', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'food.e34.meal-balance.intro.group-map', type: 'intro', title: '다섯 식품군 생각 그물',
        method: '식품군 생각 그물', tool: 'mindmap', minutes: 6,
        levels: { easy: '시연 첫 단계(곡류·고기·생선·달걀·콩류·채소류 세 가지)까지 보고 아는 음식을 하나씩 말한다.', base: '다섯 가지에 음식이 하나씩 붙는 것을 보고 가지마다 아는 음식을 더 말한다.', challenge: '가지마다 음식이 두 개씩 붙은 그물을 보고, 시연에 없는 음식을 가지마다 하나씩 더 말한다.' },
        intro: {
          teacher: '"식품군에는 다섯 가지가 있어요. 곡류에는 어떤 음식이 있을까요?" 시연 단추로 가운데 \'다섯 가지 식품군\'에서 뻗은 가지에 음식 카드가 붙는 모습을 보이고, 가지마다 학생이 아는 음식을 하나씩 더 묻는다(기다릴 반응: "곡류에는 국수요", "과일은 포도요"). "감자는 채소예요"라는 말이 나오면 "감자는 밥처럼 배를 든든하게 해 줘서 곡류 칸에 넣어요"라고 짚는다. 좋아하지 않는 음식 이야기가 나와도 놀리지 않고 "같은 칸에 다른 음식도 있어요"라고 말해 준다.',
          student: '다섯 식품군 가지마다 아는 음식을 하나씩 떠올려 짝에게 말해 보아요.',
          demo: { tool: 'mindmap', options: { topic: '다섯 가지 식품군', slots: FG5, cards: ['밥', '생선', '당근', '사과', '우유', '감자', '두부', '오이', '귤', '치즈'] },
            sequence: [{ sort: { 곡류: ['밥'], 고기: ['생선'], 채소: ['당근'] } }, { sort: { 곡류: ['밥'], 고기: ['생선'], 채소: ['당근'], 과일: ['사과'], 우유: ['우유'] } }, { sort: { 곡류: ['밥', '감자'], 고기: ['생선', '두부'], 채소: ['당근', '오이'], 과일: ['사과', '귤'], 우유: ['우유', '치즈'] } }] },
          art: { draw: 'a paper mind map with five paper branches around a round label, each branch holding small paper foods like rice, fish, carrot, apple and a milk carton', banner: '다섯 가지 식품군', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'food.e34.meal-balance.activity.fill-gap', type: 'activity', title: '빠진 식품군 채우기',
        method: '빠진 식품군 채우기', tool: 'kitchen', minutes: 13,
        levels: { easy: '한 끼 카드 3장(첫 문항)·고를 카드 3장, 놓으면 바로 맞는지 알려 준다.', base: '라면 한 끼와 주먹밥 한 끼, 두 끼의 빠진 칸을 채우고 같은 칸에서 바꿀 음식 3줄을 잇는다.', challenge: '더할 음식이 늘고 이미 있는 칸의 카드가 섞이며, 바꿀 음식 4줄에 남는 카드 하나를 가린다.' },
        activity: {
          title: '빠진 식품군 채우기', tool: 'kitchen',
          teacher: '"이 한 끼에는 어느 칸이 비었나요? 무엇을 더하면 칸이 채워질까요?" 카드를 놓을 때마다 "○○은 ○○ 칸이에요"라고 소리 내어 말하게 한다. 라면이나 주먹밥을 "안 좋은 음식"이라고 하는 학생에게 "라면도 곡류 칸을 채워요. 다른 칸이 비어 있을 뿐이에요. 무엇을 더하면 될까요?"라고 되묻는다. 주먹밥 한 끼에 식빵을 더하려는 학생에게는 "식빵은 어느 칸이에요? 그 칸은 이미 찼나요?"라고 묻는다.',
          task: '가상의 한 끼를 식품군 칸에 넣고, 비어 있는 칸을 채울 음식을 더해요.', levels: CARD_LV,
          items: [
            FSORT('라면·김치 한 끼에 달걀·귤·우유를 더해 칸에 넣어요.', [['라면'], ['달걀'], ['김치'], ['귤'], ['우유']], [['라면'], ['달걀'], ['김치'], [], []], [['라면'], ['달걀', '두부'], ['김치', '오이'], ['귤'], ['우유']], 0.15),
            PICK('주먹밥 한 끼에 더해 빈 칸을 채울 음식을 골라요.', '더할 음식', [
              { id: 'fish', text: '생선구이', ok: true }, { id: 'apple', text: '사과', ok: true }, { id: 'bread', text: '식빵', why: '식빵은 곡류예요. 곡류 칸은 주먹밥으로 이미 찼어요.' },
              { id: 'cucumber', text: '오이무침', ok: true }, { id: 'yogurt', text: '요구르트', ok: true },
            ], ['fish', 'apple', 'bread'], [{ id: 'ricecake', text: '떡', why: '떡도 곡류예요. 곡류 칸은 이미 찼어요.' }], 0.2),
            MATCH('같은 칸에서 바꿔 먹을 음식을 이어요.', { autoMotif: false, title: '같은 칸 다른 음식' }, [['곡류: 밥', '국수'], ['고기·생선·달걀·콩류: 달걀', '두부'], ['과일류: 귤', '사과'], ['우유·유제품류: 우유', '치즈']], '김', 0.25,
              { conclude: '빠진 식품군은 같은 칸의 여러 음식 가운데 골라 채울 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '음식이 들어갈 식품군을 써요.', columns: ['음식', '식품군'], cells: [['라면', ''], ['달걀', ''], ['귤', ''], ['우유', '']], answer: '곡류, 고기·생선·달걀·콩류, 과일류, 우유·유제품류' }] },
        notes: FICTION,
      }),
      C({
        id: 'food.e34.meal-balance.activity.class-pic', type: 'activity', title: '좋아하는 반찬 그림그래프',
        method: '우리 반 좋아하는 반찬 그래프', tool: 'chart', minutes: 14,
        levels: { easy: '반찬 3개, 첫 반찬 그림은 미리 놓여 있다.', base: '반찬 4개의 그림을 모두 그려 완성하고 그래프를 읽는다.', challenge: '마지막 문항에서 투표 반찬에 없는 식품군을 채울 반찬을 고른다.' },
        activity: {
          title: '좋아하는 반찬 그림그래프(가상 자료)', tool: 'chart',
          teacher: '"큰 그림 하나는 5명이에요. 9명은 큰 그림과 작은 그림을 몇 개씩 놓을까요?" 표의 수를 소리 내어 읽고 그림을 놓게 한다. 작은 그림만 9개 놓는 학생에게 "큰 그림 하나가 5명이에요. 더 쉽게 나타낼 수 있을까요?"라고 묻는다. 그래프를 다 그리면 "달걀말이와 생선구이는 같은 식품군이에요. 이 칸 반찬을 고른 친구는 모두 몇 명일까요?"라고 묻고, 투표에 없는 식품군이 무엇인지 짝과 말하게 한다. 이 표는 가상의 우리 반 자료라는 것을 밝힌다.',
          task: '가상의 투표 표를 보고 그림그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 좋아하는 반찬 그림그래프를 완성해요.', toolOptions: Object.assign({}, PIC, { mode: 'build', data: VOTE }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 반찬 3개의 그림그래프를 완성해요.', toolOptions: { data: VOTE.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 가장 많은 친구가 고른 반찬은?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: VOTE, question: '가장 많은 친구가 고른 반찬은?', choices: ['달걀말이', '감자볶음', '생선구이', '시금치나물'] }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '고기·생선·달걀·콩류 반찬을 고른 친구는 모두 몇 명?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: VOTE, question: '달걀말이와 생선구이를 더하면 몇 명?', choices: ['9명', '14명', '15명'] }), target: { pick: 1 }, difficulty: 0.25,
              levels: { challenge: { prompt: '투표 반찬에 없는 과일류를 채울 반찬을 골라요.', toolOptions: { question: '과일류 칸을 채울 반찬은?', choices: ['사과 샐러드', '감자볶음', '두부조림'] }, target: { pick: 0 } } },
              conclude: '그래프로 보면 많이 고른 식품군과 빠진 식품군이 함께 보여요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '표를 보고 빈칸을 채워요(가상 자료).', columns: ['반찬', '고른 친구(명)'], cells: [['달걀말이', '9'], ['감자볶음', ''], ['생선구이', '5']], answer: '6' }] },
        notes: '투표 표는 가상의 자료다. 우리 반 실제 투표를 하더라도 누가 무엇을 골랐는지 이름을 적지 않고, 고르지 않은 반찬을 놀리지 않는다.',
      }),
      C({
        id: 'food.e34.meal-balance.activity.menu-shop', type: 'activity', title: '한 끼 장보기',
        method: '한 끼 장보기', tool: 'economy', minutes: 13,
        levels: { easy: '물건 4~5개 가운데 식품군 셋(곡류·고기·생선·달걀·콩류·채소류)을 예산 안에서 고른다.', base: '물건 7개 가운데 다섯 식품군을 모두 예산 안에서 고른다.', challenge: '예산이 줄어 같은 칸의 값싼 음식으로 다섯 식품군을 지키는 조합을 찾는다.' },
        activity: {
          title: '한 끼 장보기(가상 가게)', tool: 'economy',
          teacher: '"예산 막대를 넘지 않으면서 다섯 칸을 다 채우려면 무엇을 살까요?" 고를 때마다 "○○은 ○○ 칸"이라고 말하게 한다. 같은 칸 음식을 두 개 고른 학생에게 "떡과 쌀밥은 어느 칸이에요? 다른 칸은 무엇으로 채우죠?"라고 묻는다. 예산이 줄어든 문항에서 "다섯 칸을 다 못 채워요"라는 학생에게는 "같은 칸에서 값이 덜 드는 음식은 없을까요?"라고 되물어 같은 식품군 안에서 바꿀 수 있다는 것을 짚는다. 가게와 값은 가상의 것이라고 밝힌다.',
          task: '가상 가게에서 예산 막대를 넘지 않게 한 끼 장을 보아요. 다섯 식품군을 채워요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '4,000원 안에서 점심 한 끼의 다섯 식품군을 골라요.', toolOptions: { mode: 'budget', budget: 4000, items: S('rice', 'egg', 'ricecake', 'spinach', 'tangerine', 'tofu', 'milk'), ask: '점심 한 끼 장보기' }, target: { budget: { must: ['rice', 'egg', 'spinach', 'tangerine', 'milk'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '2,500원 안에서 곡류·고기·채소 세 칸을 골라요.', toolOptions: { budget: 2500, items: S('rice', 'egg', 'ricecake', 'spinach') }, target: { budget: { must: ['rice', 'egg', 'spinach'] } } },
                challenge: { prompt: '3,300원 안에서 다섯 식품군을 골라요.', toolOptions: { budget: 3300, items: S('rice', 'potato', 'fish', 'egg', 'spinach', 'cucumber', 'apple', 'tangerine', 'milk', 'cheese') }, target: { budget: { must: ['potato', 'egg', 'cucumber', 'tangerine', 'milk'] } } },
              } },
            { prompt: '5,000원 안에서 저녁 한 끼의 다섯 식품군을 골라요.', toolOptions: { mode: 'budget', budget: 5000, items: S('potato', 'bread', 'fish', 'cucumber', 'apple', 'cheese', 'egg'), ask: '저녁 한 끼 장보기' }, target: { budget: { must: ['potato', 'fish', 'cucumber', 'apple', 'cheese'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '3,000원 안에서 곡류·고기·채소 세 칸을 골라요.', toolOptions: { budget: 3000, items: S('potato', 'bread', 'fish', 'cucumber') }, target: { budget: { must: ['potato', 'fish', 'cucumber'] } } },
                challenge: { prompt: '3,400원 안에서 다섯 식품군을 골라요.', toolOptions: { budget: 3400, items: S('rice', 'potato', 'fish', 'tofu', 'spinach', 'cucumber', 'apple', 'tangerine', 'milk', 'cheese') }, target: { budget: { must: ['potato', 'tofu', 'cucumber', 'tangerine', 'milk'] } } },
              } },
            { prompt: '4,500원 안에서 주말 아침 한 끼의 다섯 식품군을 골라요.', toolOptions: { mode: 'budget', budget: 4500, items: S('bread', 'egg', 'cucumber', 'apple', 'milk', 'ricecake', 'cheese'), ask: '주말 아침 장보기' }, target: { budget: { must: ['bread', 'egg', 'cucumber', 'apple', 'milk'] } }, difficulty: 0.3,
              levels: {
                easy: { prompt: '2,500원 안에서 곡류·고기·채소 세 칸을 골라요.', toolOptions: { budget: 2500, items: S('bread', 'egg', 'cucumber', 'ricecake', 'milk') }, target: { budget: { must: ['bread', 'egg', 'cucumber'] } } },
                challenge: { prompt: '3,300원 안에서 다섯 식품군을 골라요.', toolOptions: { budget: 3300, items: S('bread', 'potato', 'egg', 'fish', 'cucumber', 'spinach', 'apple', 'tangerine', 'milk', 'cheese') }, target: { budget: { must: ['potato', 'egg', 'cucumber', 'tangerine', 'milk'] } } },
              },
              conclude: '예산이 적어도 같은 칸에서 다른 음식을 고르면 다섯 식품군을 지킬 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '다섯 칸을 채우려는데 곡류를 이미 샀어요. 다음에 살 것은?', options: ['떡', '우유', '식빵'], answer: '우유' }] },
        notes: '가게와 값은 가상의 것이다. "집에서는 무엇을 사요?"처럼 가정의 장보기나 형편을 묻지 않는다.',
      }),
      C({
        id: 'food.e34.meal-balance.activity.my-tray', type: 'activity', title: '색종이로 한 끼 식판 꾸미기',
        method: '나만의 한 끼 꾸미기', tool: 'collage', minutes: 14,
        levels: { easy: '색 약속 가운데 세 식품군 색(하양·갈색·초록) 조각을 붙인다.', base: '다섯 식품군 색(하양·갈색·초록·빨강·파랑) 조각을 모두 붙인다.', challenge: '다섯 색을 다 붙이고, 짝 식판의 좋은 점을 말했는지 점검 칸에 표시한다.' },
        activity: {
          title: '색종이로 한 끼 식판 꾸미기', tool: 'collage',
          teacher: '"우리 반 색 약속이에요. 곡류는 하양, 고기·생선·달걀·콩류는 갈색, 채소류는 초록, 과일류는 빨강, 우유·유제품류는 파랑." 칠판에 색 약속을 붙여 두고 조각을 붙일 때마다 "이 조각은 무슨 음식이에요?"라고 묻는다. 한 색만 여러 개 붙인 학생에게 "이 식판에는 어느 칸이 비었을까요?"라고 되묻는다. 다 꾸미면 짝에게 "내 식판에는 ○○ 칸에 ○○이 있어요"라고 설명하게 하고, 짝 식판을 볼 때는 좋은 점만 말한다.',
          task: '우리 반 색 약속대로 색종이 조각을 붙여 한 끼 식판을 꾸며요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '색 약속대로 점심 식판을 꾸며요.', toolOptions: TRAY, target: { has: has('하양', '갈색', '초록', '빨강', '파랑') }, difficulty: 0.2,
              levels: { easy: { prompt: '색 약속대로 세 칸(하양·갈색·초록)을 꾸며요.', target: { has: has('하양', '갈색', '초록') } } } },
            { prompt: '모양을 바꿔 저녁 식판을 꾸며요.', toolOptions: TRAY, target: { has: has('하양', '갈색', '초록', '빨강', '파랑'), pieces: { min: 6 } }, difficulty: 0.25,
              levels: { easy: { prompt: '모양을 바꿔 세 칸(하양·갈색·초록)을 꾸며요.', target: { has: has('하양', '갈색', '초록'), pieces: { min: 3 } } } } },
            { prompt: '내 식판을 다 꾸미고 짝에게 설명해요.', toolOptions: TRAY, target: { selfCheck: ['다섯 색 조각을 붙였어요', '짝에게 칸마다 설명했어요'], minPieces: 5 }, difficulty: 0.1,
              levels: {
                easy: { prompt: '세 칸을 꾸미고 짝에게 설명해요.', target: { selfCheck: ['세 색 조각을 붙였어요', '짝에게 칸마다 설명했어요'], minPieces: 3 } },
                challenge: { prompt: '식판을 설명하고 짝 식판의 좋은 점을 말해요.', target: { selfCheck: ['다섯 색 조각을 붙였어요', '짝에게 칸마다 설명했어요', '짝 식판 좋은 점을 말했어요'], minPieces: 5 } },
              },
              conclude: '다섯 가지 색이 다 있는 식판은 다섯 식품군이 다 든 한 끼예요.' },
          ],
        },
        worksheet: { items: [{ type: 'draw', prompt: '다섯 식품군이 다 든 한 끼 식판을 그리고 칸마다 음식 이름을 써요.' }] },
      }),
      C({
        id: 'food.e34.meal-balance.wrap.check-meal', type: 'wrap', title: '하리의 저녁 한 끼 점검표',
        method: '저녁 한 끼 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '점검표 세 칸(곡류·고기·생선·달걀·콩류·과일류) 가운데 든 칸에 표시한다.', base: '다섯 칸 가운데 하리의 저녁에 든 칸에 표시한다.', challenge: '빠진 칸을 내일 채울 방법을 보기에서 고르고 까닭을 짝에게 말한다(출구 2번, 교사 진행).' },
        wrap: {
          teacher: '"가상 인물 하리의 저녁은 밥, 생선구이, 오이무침이에요. 어느 칸에 표시할까요?" 점검표를 함께 읽고 표시하게 한다. 출구 2번에서 "과자를 더해요"를 고른 학생에게 "과자는 비어 있는 과일류나 우유 칸을 채울까요? 그 칸에는 어떤 음식이 있었죠?"라고 되묻는다. 우리 반 학생의 저녁을 묻지 않고 하리의 한 끼로만 이야기한다.',
          exitTicket: [
            EX('kitchen', CHK('하리의 저녁(밥·생선구이·오이무침)에 든 식품군에 표시해요.', '하리의 저녁 점검표', [
              { id: 'g', text: '곡류', ok: true }, { id: 'm', text: '고기·생선·달걀·콩류', ok: true }, { id: 'v', text: '채소류', ok: true }, { id: 'f', text: '과일류' }, { id: 'd', text: '우유·유제품류' },
            ], [0, 1, 3], 0.15)),
            { type: 'choice', prompt: '하리의 저녁에 빠진 칸을 내일 채울 방법은?', options: ['후식으로 귤과 우유', '밥을 한 그릇 더', '생선을 하나 더'], answer: 0, difficulty: 0.15, explain: '빠진 칸은 과일류와 우유·유제품류예요. 그 칸의 음식을 더해요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '한 끼 식품군 점검',
          items: [
            { type: 'check', prompt: '하리의 저녁(밥·생선구이·오이무침)에 든 칸에 표시해요.', options: ['곡류', '고기·생선·달걀·콩류', '채소류', '과일류', '우유·유제품류'] },
            { type: 'short', prompt: '하리의 저녁에 빠진 칸을 채울 음식을 한 가지 써요.' },
          ],
          easy: { note: '밥은 곡류, 생선은 고기·생선 칸, 오이는 채소 칸이에요.', items: [{ type: 'choice', prompt: '하리의 저녁에 빠진 칸은?', options: ['과일류', '곡류'], answer: '과일류' }] },
        },
        notes: FICTION,
      }),
      C({
        id: 'food.e34.meal-balance.wrap.why-say', type: 'wrap', title: '빠진 칸을 말하는 문장 카드',
        method: '고른 이유 말하기', tool: 'wordcards', minutes: 6,
        levels: { easy: '문장 빈칸 하나(빠진 식품군)에 카드를 넣고 소리 내어 읽는다.', base: '빈칸 둘(빠진 식품군·더할 음식)에 카드를 넣고 짝과 번갈아 읽는다.', challenge: '빈칸 둘을 채운 뒤 출구 2번에서 문장을 내 말로 바꿔 쓴다.' },
        wrap: {
          teacher: '"밥, 생선, 나물, 우유 한 끼예요. \'한 끼에 ___이 빠지면 ___을 더해요.\' 빈칸에 무엇이 들어갈까요?" 카드를 넣은 뒤 짝과 문장을 한 번씩 소리 내어 읽게 한다. \'곡류\'를 넣은 학생에게 "밥은 어느 칸이었죠? 이 한 끼에서 빈 칸은 어디예요?"라고 되묻는다. 내 말로 바꿀 때는 "~해서 ~을 골랐어요"처럼 까닭을 넣게 한다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'b1', label: '이 한 끼에 ___이 빠졌어요.' }, { id: 'b2', label: '그래서 ___을 더해요.' }], cards: ['곡류', '귤이나 사과', '과일류', '떡이나 식빵'] }, prompt: '밥·생선·나물·우유 한 끼예요. 빈칸에 카드를 넣고 읽어요.', target: { fill: { b1: '과일류', b2: '귤이나 사과' } }, difficulty: 0.2,
              levels: { easy: { prompt: '밥·생선·나물·우유 한 끼예요. 빈칸에 카드를 넣어요(1칸).', toolOptions: { slots: [{ id: 'b1', label: '이 한 끼에 ___이 빠졌어요.' }], cards: ['곡류', '과일류'] }, target: { fill: { b1: '과일류' } } } } },
            { type: 'short', prompt: '"한 끼에 ___이 빠지면 ___" 문장을 내 말로 바꿔 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '빠진 칸 문장',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '밥·생선·나물·우유 한 끼에는 ___류가 빠졌어요.', answer: '과일' },
            { type: 'short', prompt: '내가 꾸민 식판에서 칸 하나를 골라 고른 까닭을 한 줄로 써요.' },
          ],
          easy: { note: '밥·생선·나물·우유의 칸을 먼저 떠올려요.', items: [{ type: 'choice', prompt: '이 한 끼에 빠진 칸은?', options: ['과일류', '곡류'], answer: '과일류' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 달고 짠 간식 줄이기
  // ======================================================================================================
  {
    const C = T('sweet-salty', 4);
    const DAYS = [['월', 1], ['화', 2], ['수', 1], ['목', 3], ['금', 2], ['토', 4]];
    const BAR = { type: 'bar', title: '하온이가 단 음료를 마신 횟수(가상 기록)', unit: '번', xLabel: '요일', yLabel: '마신 횟수', max: 5, scale: 1 };
    // 간식 가게(가상의 값)
    const SNACK = {
      water: { id: 'water', text: '물', price: 500 }, milk: { id: 'milk', text: '우유', price: 900 }, banana: { id: 'banana', text: '바나나', price: 800 },
      yogurt: { id: 'yogurt', text: '요구르트', price: 700 }, sweet: { id: 'sweet', text: '단 음료', price: 1200 }, salty: { id: 'salty', text: '짠 과자', price: 1500 },
      tangerine: { id: 'tangerine', text: '귤', price: 500 }, corn: { id: 'corn', text: '찐 옥수수', price: 1000 }, candy: { id: 'candy', text: '사탕', price: 300 },
    };
    const K = (...ids) => ids.map((k) => SNACK[k]);
    // 포장 칸 그림(가상 과자) — 지도 교구의 지역 칸으로 포장 면을 나눈다
    const BACK = {
      title: '가상 과자 봉지 뒷면', grid: [6, 4],
      regions: [
        { name: '과자 이름', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0]] },
        { name: '원재료', cells: [[0, 1], [1, 1], [0, 2], [1, 2]] },
        { name: '영양 표시', cells: [[2, 1], [3, 1], [2, 2], [3, 2]] },
        { name: '보관 방법', cells: [[4, 1], [5, 1], [4, 2], [5, 2]] },
        { name: '만든 곳', cells: [[0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    const BACK_EASY = {
      regions: [
        { name: '과자 이름', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [0, 1], [1, 1], [0, 2], [1, 2]] },
        { name: '영양 표시', cells: [[2, 1], [3, 1], [4, 1], [5, 1], [2, 2], [3, 2], [4, 2], [5, 2], [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    const BOTTLE = {
      title: '가상 음료 병(왼쪽 앞면 · 오른쪽 뒷면)', grid: [6, 4],
      regions: [
        { name: '앞면 그림', cells: [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]] },
        { name: '앞면 이름', cells: [[0, 2], [1, 2], [2, 2], [0, 3], [1, 3], [2, 3]] },
        { name: '뒷면 원재료', cells: [[3, 0], [4, 0], [5, 0]] },
        { name: '뒷면 영양 표시', cells: [[3, 1], [4, 1], [5, 1], [3, 2], [4, 2], [5, 2]] },
        { name: '뒷면 보관 방법', cells: [[3, 3], [4, 3], [5, 3]] },
      ],
    };
    const BOTTLE_EASY = {
      regions: [
        { name: '앞면 그림', cells: [[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1], [0, 2], [1, 2], [2, 2], [0, 3], [1, 3], [2, 3]] },
        { name: '뒷면 영양 표시', cells: [[3, 0], [4, 0], [5, 0], [3, 1], [4, 1], [5, 1], [3, 2], [4, 2], [5, 2], [3, 3], [4, 3], [5, 3]] },
      ],
    };
    const LABEL = {
      title: '가상 영양 표시 상자(숫자는 읽지 않아요)', grid: [4, 6],
      regions: [
        { name: '열량', cells: [[0, 0], [1, 0], [2, 0], [3, 0]] }, { name: '나트륨', cells: [[0, 1], [1, 1], [2, 1], [3, 1]] },
        { name: '탄수화물', cells: [[0, 2], [1, 2], [2, 2], [3, 2]] }, { name: '당류', cells: [[0, 3], [1, 3], [2, 3], [3, 3]] },
        { name: '지방', cells: [[0, 4], [1, 4], [2, 4], [3, 4]] }, { name: '단백질', cells: [[0, 5], [1, 5], [2, 5], [3, 5]] },
      ],
    };
    const LABEL_EASY = {
      regions: [
        { name: '열량', cells: [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1]] },
        { name: '당류', cells: [[0, 2], [1, 2], [2, 2], [3, 2], [0, 3], [1, 3], [2, 3], [3, 3]] },
        { name: '단백질', cells: [[0, 4], [1, 4], [2, 4], [3, 4], [0, 5], [1, 5], [2, 5], [3, 5]] },
      ],
    };
    const CHANT = ['q', 'q', 'q', 'q', 'h', 'qr', 'qr', 'q', 'q', 'q', 'q', 'q', 'q', 'qr', 'qr'];
    M.push(
      C({
        id: 'food.e34.sweet-salty.intro.drink-story', type: 'intro', title: '단 음료만 마신 도하의 하루',
        method: '음료만 마신 하루', tool: 'story', minutes: 6,
        levels: { easy: '시연 첫 단계에서 세 장면(아침 음료·또 목마름·저녁 입맛 없음)만 차례로 본다.', base: '네 장면(이가 시큰함 더함)이 차례로 놓이는 것을 보고 무슨 일이 생겼는지 말한다.', challenge: '네 장면 가운데 물로 바꾸면 달라질 장면을 하나 골라 짝에게 말한다.' },
        intro: {
          teacher: '"가상 인물 도하는 오늘 물 대신 단 음료만 마셨어요. 어떤 일이 생겼을까요?" 시연 단추로 장면 카드가 처음 → 끝 차례로 놓이는 모습을 보이고 장면마다 소리 내어 읽는다. "단 음료도 물이니까 괜찮아요"라는 말이 나오면 "도하는 마시고 나서 목마름이 풀렸나요? 저녁에는 어땠나요?"라고 되묻는다. 단 음료를 마시면 안 된다는 것이 아니라, 자주 많이 마실 때 생기는 일을 알아보는 시간이라고 밝힌다.',
          student: '도하의 하루 장면을 차례대로 보고, 어느 장면을 물로 바꾸면 좋을지 짝에게 말해 보아요.',
          demo: { tool: 'story', options: { mode: 'order', slots: 4, cards: [{ id: 'eve', text: '저녁에 입맛이 없어요', motif: 'moon' }, { id: 'tooth', text: '이가 시큰해요', motif: 'cloud' }, { id: 'thirst', text: '금방 또 목말라요', motif: 'sun' }, { id: 'drink', text: '아침에 단 음료', motif: 'star' }] },
            sequence: [{ order: ['drink', 'thirst', 'eve'] }, { order: ['drink', 'thirst', 'tooth', 'eve'] }] },
          art: { draw: 'a paper child holding a sweet soda bottle under a paper sun, then frowning at a dinner bowl under a paper moon, a paper water cup waiting on the side', banner: '물 대신 단 음료만?', extra: [{ motif: 'cloud', x: 300, y: 96 }] },
        },
        notes: '"단 음료 매일 마셔요?"처럼 학생의 습관을 묻지 않는다. 도하(가명)의 하루로만 이야기한다.',
      }),
      C({
        id: 'food.e34.sweet-salty.intro.fruit-real', type: 'intro', title: '진짜 과일과 과일 맛 나누기',
        method: '진짜 과일·과일 맛 음료', tool: 'sortboard', minutes: 6,
        levels: { easy: '시연 첫 단계에서 카드 4장(사과·사과 맛 음료·귤·귤 맛 사탕)이 나뉘는 것을 본다.', base: '포도·포도 맛 젤리까지 카드 6장이 나뉘는 것을 보고 다른 점을 말한다.', challenge: '진짜 과일과 과일 맛이 왜 다른지 짝에게 한 문장으로 말한다.' },
        intro: {
          teacher: '"사과 맛 음료에는 사과가 들어 있을까요?" 시연 단추로 카드가 \'진짜 과일\'과 \'과일 맛\' 바구니에 나뉘는 모습을 보인다. "사과 맛 음료도 과일이에요"라는 말이 나오면 "사과는 나무에서 따 온 것이에요. 사과 맛 음료는 사과 맛을 낸 것이에요. 무엇이 다를까요?"라고 되물어 이름에 과일이 있어도 과일과 같지 않다는 것을 짚는다. 과일 맛 간식을 먹는 것이 잘못이라고 말하지 않는다.',
          student: '카드가 진짜 과일과 과일 맛으로 나뉘는 것을 보고, 무엇이 다른지 짝에게 말해 보아요.',
          demo: { tool: 'sortboard', options: { slots: ['진짜 과일', '과일 맛'], cards: ['사과', '사과 맛 음료', '귤', '귤 맛 사탕', '포도', '포도 맛 젤리'] },
            sequence: [{ sort: { '진짜 과일': ['사과', '귤'], '과일 맛': ['사과 맛 음료', '귤 맛 사탕'] } }, { sort: { '진짜 과일': ['사과', '귤', '포도'], '과일 맛': ['사과 맛 음료', '귤 맛 사탕', '포도 맛 젤리'] } }] },
          art: { draw: 'two paper baskets on a shelf, one holding a real paper apple, tangerine and grapes, the other holding a fruit flavored drink bottle, a candy and a jelly', banner: '진짜 과일일까?', extra: [{ motif: 'leaf', x: 300, y: 222 }] },
        },
      }),
      C({
        id: 'food.e34.sweet-salty.activity.pack-find', type: 'activity', title: '포장 그림에서 표시 자리 찾기',
        method: '포장 그림에서 표시 찾기', tool: 'map', minutes: 13,
        levels: { easy: '포장 칸이 크게 2~3개로만 나뉘어 영양 표시 자리를 찾기 쉽다.', base: '칸 5~6개(앞면·뒷면) 가운데 영양 표시 상자와 그 안의 당류 줄 자리에 핀을 꽂는다.', challenge: '핀을 꽂은 뒤 그 자리를 보는 까닭도 보기에서 고른다.' },
        activity: {
          title: '포장 그림에서 표시 자리 찾기', tool: 'map',
          teacher: '"가상의 과자 봉지예요. 이 안에 무엇이 들었는지 알려 주는 상자는 어디에 있을까요?" 숫자는 읽지 않고 자리만 찾는다고 먼저 밝힌다. 앞면 그림에 핀을 꽂는 학생에게 "앞면 그림은 무엇을 보여 주나요? 뒤집어 보면 무엇이 있을까요?"라고 묻는다. 마지막 문항에서는 "당류는 단맛을 내는 것이에요. 단 간식을 고를 때 이 줄을 보면 견줄 수 있어요"라고 짚는다. 포장은 모두 가상의 것이다.',
          task: '가상 포장 그림에서 영양 표시와 당류가 적힌 자리를 찾아 핀을 꽂아요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '과자 봉지 뒷면에서 영양 표시 자리에 핀을 꽂아요.', toolOptions: BACK, target: { region: '영양 표시' }, difficulty: 0.15,
              levels: {
                easy: { prompt: '과자 봉지 뒷면에서 영양 표시 자리를 찾아요(칸 2개).', toolOptions: BACK_EASY, target: { region: '영양 표시' } },
                challenge: { prompt: '영양 표시 자리에 핀을 꽂고 까닭도 골라요.', toolOptions: { ask: { q: '이 자리를 보는 까닭은?', choices: ['무엇이 들었는지 알려고', '과자 이름을 알려고', '만든 곳을 알려고'] } }, target: { region: '영양 표시', pick: 0 } },
              } },
            { prompt: '음료 병 앞·뒤 그림에서 영양 표시 자리를 찾아요.', toolOptions: BOTTLE, target: { region: '뒷면 영양 표시' }, difficulty: 0.2,
              levels: {
                easy: { prompt: '음료 병 그림에서 영양 표시 자리를 찾아요(칸 2개).', toolOptions: BOTTLE_EASY, target: { region: '뒷면 영양 표시' } },
                challenge: { prompt: '영양 표시 자리에 핀을 꽂고 까닭도 골라요.', toolOptions: { ask: { q: '앞면 그림만 보면 안 되는 까닭은?', choices: ['그림은 맛만 보여 줘서', '앞면이 더 커서', '뒷면이 예뻐서'] } }, target: { region: '뒷면 영양 표시', pick: 0 } },
              } },
            { prompt: '영양 표시 상자에서 \'당류\' 줄 자리를 찾아요.', toolOptions: LABEL, target: { region: '당류' }, difficulty: 0.25,
              levels: {
                easy: { prompt: '영양 표시 상자에서 \'당류\' 줄을 찾아요(칸 3개).', toolOptions: LABEL_EASY, target: { region: '당류' } },
                challenge: { prompt: '\'당류\' 줄에 핀을 꽂고 까닭도 골라요.', toolOptions: { ask: { q: '당류 줄을 보는 까닭은?', choices: ['단맛을 내는 것을 견주려고', '값을 알려고', '양을 늘리려고'] } }, target: { region: '당류', pick: 0 } },
              },
              conclude: '포장 뒷면의 영양 표시 상자에 당류 줄이 있어요. 단 간식을 견줄 때 이 자리를 봐요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '과자 봉지에서 무엇이 들었는지 알려 주는 상자는?', options: ['영양 표시', '과자 이름', '앞면 그림'], answer: '영양 표시' }] },
        notes: '포장 그림은 가상의 것이다. 이 차시에서는 숫자를 읽거나 견주지 않는다(수치는 초5-6 영양 표시 주제에서 다룬다).',
      }),
      C({
        id: 'food.e34.sweet-salty.activity.snack-week', type: 'activity', title: '하온이의 단 음료 일주일 표',
        method: '간식 일주일 표', tool: 'chart', minutes: 14,
        levels: { easy: '사흘(월·화·수) 막대를 그리고, 첫 막대는 미리 그려져 있다.', base: '엿새(월~토) 막대를 모두 그려 완성하고 가장 많은 날을 찾는다.', challenge: '마지막 문항에서 먼저 줄여 볼 날과 대신할 마실 것을 함께 고른다.' },
        activity: {
          title: '하온이의 단 음료 일주일 표(가상 기록)', tool: 'chart',
          teacher: '"가상 인물 하온이가 단 음료를 마신 횟수예요. 막대를 그리면 무엇이 잘 보일까요?" 표의 수를 읽고 막대를 한 칸씩 올리게 한다. 가장 많은 날을 찾은 뒤 "토요일에 많아진 까닭은 무엇일까요?"라고 물어 까닭을 짝과 짐작하게 한다. "하온이는 나쁜 아이예요"라는 말이 나오면 "하온이를 탓하기보다 어느 날부터 바꿔 볼 수 있을지 찾아 줄까요?"라고 되묻는다. 이 기록은 가상의 것이라고 밝힌다.',
          task: '가상 기록 표를 보고 막대그래프를 그린 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 단 음료 횟수 막대그래프를 완성해요.', toolOptions: Object.assign({}, BAR, { mode: 'build', data: DAYS }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 사흘(월·화·수) 막대를 완성해요.', toolOptions: { data: DAYS.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 단 음료를 가장 많이 마신 날은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: DAYS, question: '가장 많이 마신 날은?', choices: ['월', '화', '수', '목', '금', '토'] }), target: { pick: 5 }, difficulty: 0.15 },
            { prompt: '목마를 때 단 음료 대신 마실 것은?', toolOptions: Object.assign({}, BAR, { mode: 'read', data: DAYS, question: '단 음료 대신 마실 것은?', choices: ['물', '단 음료 한 병 더', '짠 과자'] }), target: { pick: 0 }, difficulty: 0.2,
              levels: { challenge: { prompt: '먼저 줄여 볼 날과 대신할 것을 함께 골라요.', toolOptions: { question: '먼저 바꿔 볼 날과 대신할 것은?', choices: ['토요일, 물', '월요일, 물', '토요일, 단 음료 한 병 더'] }, target: { pick: 0 } } },
              conclude: '그래프를 보면 많이 마신 날이 보여요. 그날부터 물로 바꿔 볼 수 있어요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '가상 기록 표의 빈칸을 그래프를 보고 채워요.', columns: ['요일', '단 음료(번)'], cells: [['목', ''], ['토', ''], ['금', '2']], answer: '3, 4' }] },
        notes: '기록은 가상 인물의 것이다. 학생에게 자기 음료 횟수를 적거나 발표하게 하지 않는다.',
      }),
      C({
        id: 'food.e34.sweet-salty.activity.snack-budget', type: 'activity', title: '가상 가게에서 간식 장보기',
        method: '간식 장보기', tool: 'economy', minutes: 13,
        levels: { easy: '간식 3개를 예산 안에서 고른다(과일 하나는 꼭).', base: '간식 5개를 예산 안에서 고른다(과일 하나는 꼭).', challenge: '간식 5개에 물을 꼭 넣은 조합을 예산 안에서 만든다.' },
        activity: {
          title: '가상 가게에서 간식 장보기', tool: 'economy',
          teacher: '"가상 가게에서 간식을 골라요. 예산 막대를 보며 고르고, 고른 이유를 짝에게 \'○○은 ○○해서 골랐어\'로 말해요." 단 음료나 짠 과자를 고른 학생을 나무라지 않고 "이것들은 가끔 먹는 간식이에요. 나머지는 무엇으로 채울까요?"라고 묻는다. 물을 넣는 문항에서 "물은 간식이 아니에요"라는 학생에게 "출출하거나 목마를 때 무엇이 먼저 필요할까요?"라고 되묻는다. 값은 가상의 것이라고 밝힌다.',
          task: '가상 가게에서 예산 막대를 넘지 않게 간식을 고르고, 고른 이유를 짝에게 말해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '5,000원 안에서 학교 끝나고 먹을 간식 5개를 골라요(과일 하나는 꼭).', toolOptions: { mode: 'budget', budget: 5000, items: K('water', 'milk', 'banana', 'yogurt', 'sweet', 'salty', 'candy'), ask: '학교 끝나고 먹을 간식' }, target: { budget: { count: 5, must: ['banana'] } }, difficulty: 0.2,
              levels: {
                easy: { prompt: '3,000원 안에서 간식 3개를 골라요(과일 하나는 꼭).', toolOptions: { budget: 3000, items: K('banana', 'milk', 'sweet', 'candy') }, target: { budget: { count: 3, must: ['banana'] } } },
                challenge: { prompt: '5,000원 안에서 간식 5개를 골라요. 바나나와 물은 꼭.', target: { budget: { count: 5, must: ['banana', 'water'] } } },
              } },
            { prompt: '4,500원 안에서 기차에서 먹을 간식 5개를 골라요(과일 하나는 꼭).', toolOptions: { mode: 'budget', budget: 4500, items: K('water', 'tangerine', 'corn', 'sweet', 'salty', 'yogurt', 'candy'), ask: '기차에서 먹을 간식' }, target: { budget: { count: 5, must: ['tangerine'] } }, difficulty: 0.25,
              levels: {
                easy: { prompt: '3,000원 안에서 간식 3개를 골라요(과일 하나는 꼭).', toolOptions: { budget: 3000, items: K('tangerine', 'corn', 'salty', 'candy') }, target: { budget: { count: 3, must: ['tangerine'] } } },
                challenge: { prompt: '4,500원 안에서 간식 5개를 골라요. 귤과 물은 꼭.', target: { budget: { count: 5, must: ['tangerine', 'water'] } } },
              } },
            { prompt: '5,000원 안에서 친구와 나눠 먹을 간식 5개를 골라요(과일 하나는 꼭).', toolOptions: { mode: 'budget', budget: 5000, items: K('water', 'banana', 'tangerine', 'milk', 'salty', 'sweet', 'yogurt'), ask: '친구와 나눠 먹을 간식' }, target: { budget: { count: 5, must: ['tangerine'] } }, difficulty: 0.3,
              levels: {
                easy: { prompt: '3,000원 안에서 간식 3개를 골라요(과일 하나는 꼭).', toolOptions: { budget: 3000, items: K('tangerine', 'milk', 'salty', 'sweet') }, target: { budget: { count: 3, must: ['tangerine'] } } },
                challenge: { prompt: '5,000원 안에서 간식 5개를 골라요. 귤과 물은 꼭.', target: { budget: { count: 5, must: ['tangerine', 'water'] } } },
              },
              conclude: '간식을 고를 때 물·과일·우유를 먼저 넣고, 단 음료·짠 과자는 가끔 골라요.' },
          ],
        },
        worksheet: { items: [{ type: 'short', prompt: '가상 가게에서 고른 간식 하나와 고른 이유를 한 줄로 써요.' }] },
        notes: '가게와 값은 가상의 것이다. 실제 용돈이나 집에서 사 주는 간식을 묻지 않는다.',
      }),
      C({
        id: 'food.e34.sweet-salty.activity.water-timer', type: 'activity', title: '물 마시는 시각 시계에 맞추기',
        method: '물 마시는 시간 정하기', tool: 'clock', minutes: 14,
        levels: { easy: '정각(9시·1시·3시)에 바늘을 맞추고, 디지털 시각이 함께 보인다.', base: '30분 단위(8시 30분·12시 30분·2시 30분)에 바늘을 맞춘다.', challenge: '하루 일과가 바뀐 날(체육이 늦게 끝남·점심이 늦음)에 맞춰 시각을 바꾼다.' },
        activity: {
          title: '물 마시는 시각 시계에 맞추기', tool: 'clock',
          teacher: '"우리 반 물 마시기 약속을 정해 볼까요? 등교하고, 점심 먹고, 체육 하고 나서 물을 마셔요." 시각은 우리 반이 정한 연습용 약속이라고 밝히고, 바늘을 맞출 때마다 "긴바늘은 어디, 짧은바늘은 어디?"를 소리 내어 말하게 한다. 30분에 짧은바늘을 숫자에 똑바로 두는 학생에게 "30분이면 짧은바늘은 두 숫자의 가운데쯤 있어요"라고 짚는다. "목마를 때만 마시면 돼요"라는 말에는 "놀다 보면 목마른 것을 잊을 때가 있어요. 그래서 때를 정해 두는 거예요"라고 말해 준다.',
          task: '우리 반 물 마시기 약속 시각에 시계 바늘을 맞춰요.', levels: { easy: { showDigital: true, hourOnly: true }, base: { minuteStep: 30 }, challenge: { minuteStep: 30 } },
          items: [
            { prompt: '등교하고 물 마실 시각 8시 30분에 맞춰요.', toolOptions: {}, target: { h: 8, m: 30 }, difficulty: 0.15,
              levels: { easy: { prompt: '등교하고 물 마실 시각 9시에 맞춰요.', target: { h: 9, m: 0 } }, challenge: { prompt: '비가 와서 30분 늦게 왔어요. 9시에 맞춰요.', target: { h: 9, m: 0 } } } },
            { prompt: '점심 먹고 물 마실 시각 12시 30분에 맞춰요.', toolOptions: {}, target: { h: 12, m: 30 }, difficulty: 0.2,
              levels: { easy: { prompt: '점심 먹고 물 마실 시각 1시에 맞춰요.', target: { h: 1, m: 0 } }, challenge: { prompt: '점심이 30분 늦게 끝났어요. 1시에 맞춰요.', target: { h: 1, m: 0 } } } },
            { prompt: '체육 하고 물 마실 시각 2시 30분에 맞춰요.', toolOptions: {}, target: { h: 2, m: 30 }, difficulty: 0.25,
              levels: { easy: { prompt: '체육 하고 물 마실 시각 3시에 맞춰요.', target: { h: 3, m: 0 } }, challenge: { prompt: '체육이 1시간 늦게 끝나요. 3시 30분에 맞춰요.', target: { h: 3, m: 30 } } },
              conclude: '목마를 때를 기다리지 않고 정한 때에 물을 마셔요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '우리 반 물 마시기 약속 시각을 써요.', columns: ['언제', '시각'], cells: [['등교하고', ''], ['점심 먹고', ''], ['체육 하고', '']], answer: '8시 30분, 12시 30분, 2시 30분(우리 반 약속)' }] },
        notes: '시각은 우리 반 약속(연습용)이다. 물을 마셔야 하는 양이나 횟수는 말하지 않는다.',
      }),
      C({
        id: 'food.e34.sweet-salty.wrap.swap-list', type: 'wrap', title: '바꿔 먹기 점검표',
        method: '바꿔 먹기 점검표', tool: 'kitchen', minutes: 6,
        levels: { easy: '바꾸기 두 줄 가운데 알맞은 줄에 표시한다.', base: '바꾸기 네 줄 가운데 알맞은 세 줄에 표시한다.', challenge: '알맞은 줄에 표시하고, 출구 2번에서 가족에게 권할 줄을 고른다(교사 진행).' },
        wrap: {
          teacher: '"오늘 배운 바꿔 먹기예요. 알맞게 바꾼 줄은 어느 것일까요?" 줄마다 소리 내어 읽고 표시하게 한다. \'짠 과자 → 짠 과자 두 봉지\'에 표시한 학생에게 "바꾼 것이 무엇이었나요? 목마름은 어떻게 될까요?"라고 되묻는다. 내가 해 볼 줄은 활동지에 스스로 적게 하고, 걷어서 확인하거나 발표시키지 않는다.',
          exitTicket: [
            EX('kitchen', CHK('알맞게 바꿔 먹은 줄에 표시해요.', '바꿔 먹기 점검표', [
              { id: 'w', text: '목마를 때 → 물', ok: true }, { id: 's', text: '짠 과자 → 두 봉지' }, { id: 'f', text: '출출할 때 → 과일', ok: true }, { id: 'm', text: '단 음료 → 우유', ok: true },
            ], [0, 1], 0.15)),
            { type: 'choice', prompt: '가족과 함께 해 보기 좋은 바꾸기는?', options: ['식탁에 물병 두기', '과자를 많이 사 두기', '음료만 사 두기'], answer: 0, difficulty: 0.1, explain: '물병이 가까이 있으면 목마를 때 물을 먼저 마시기 쉬워요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '바꿔 먹기',
          items: [
            { type: 'check', prompt: '알맞게 바꾼 줄에 표시해요.', options: ['목마를 때 → 물', '짠 과자 → 두 봉지', '출출할 때 → 과일'] },
            { type: 'short', prompt: '내가 해 보고 싶은 바꾸기를 한 줄로 써요(내지 않아도 돼요).' },
          ],
          easy: { note: '"목마르면 물, 출출하면 과일"을 떠올려요.', items: [{ type: 'choice', prompt: '목마를 때 먼저 마실 것은?', options: ['물', '단 음료'], answer: '물' }] },
        },
      }),
      C({
        id: 'food.e34.sweet-salty.wrap.slogan', type: 'wrap', title: '"목마르면 물" 구호 리듬',
        method: '간식 구호 만들기', tool: 'keyboard', minutes: 6,
        levels: { easy: '"목마르면 물" 한 줄(두 마디) 리듬 블록을 따라 놓는다.', base: '"목마르면 물, 출출하면 과일" 두 줄(네 마디) 리듬 블록을 따라 놓는다.', challenge: '두 줄을 놓은 뒤 출구 2번에서 같은 리듬에 맞는 구호를 하나 더 지어 쓴다.' },
        wrap: {
          teacher: '"목-마-르-면 물(쉼 쉼), 출-출-하-면 과-일." 손뼉으로 한 번 들려준 뒤 리듬 블록을 놓게 한다. \'물\'을 한 박으로 놓는 학생에게 "\'물\'은 길게 두 박 소리 내요. 어떤 블록이 두 박일까요?"라고 묻는다. 블록을 다 놓으면 반 전체가 박에 맞춰 구호를 외치고, 새 구호를 지을 때는 음식을 놀리는 말을 쓰지 않는다고 미리 말해 둔다.',
          exitTicket: [
            { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 4, blocks: ['q', 'h', 'qr'], pattern: CHANT }, prompt: '"목마르면 물, 출출하면 과일" 리듬을 듣고 블록으로 놓아요.', target: { rhythm: CHANT }, difficulty: 0.25,
              levels: { easy: { prompt: '"목마르면 물" 리듬을 듣고 블록으로 놓아요.', toolOptions: { measures: 2, pattern: CHANT.slice(0, 7) }, target: { rhythm: CHANT.slice(0, 7) } } } },
            { type: 'short', prompt: '같은 리듬에 맞는 간식 구호를 하나 더 지어 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '간식 구호',
          items: [
            { type: 'blank', prompt: '구호의 빈칸을 채워요.', text: '목마르면 물, 출출하면 ___.', answer: '과일' },
            { type: 'short', prompt: '우리 반 간식 구호를 하나 지어 써요.' },
          ],
          easy: { note: '손뼉을 치며 구호를 먼저 외쳐 봐요.', items: [{ type: 'choice', prompt: '목마르면?', options: ['물', '과자'], answer: '물' }] },
        },
      }),
    );
  }

  // ======================================================================================================
  // 4학년 · 아침밥과 바른 먹기 습관
  // ======================================================================================================
  {
    const C = T('breakfast-habit', 4);
    const PEOPLE = [{ value: 5, name: '5명' }, { value: 1, name: '1명' }];
    const MENU = [['밥과 국', 8], ['빵과 우유', 6], ['시리얼과 우유', 5], ['죽', 3]];
    const PIC = { type: 'picture', title: '아침 메뉴 조사(가상의 우리 반)', unit: '명', xLabel: '아침 메뉴', yLabel: '친구 수', icons: PEOPLE, icon: 'person' };
    const AXIS = { axis: ['먼저', '나중'] };
    M.push(
      C({
        id: 'food.e34.breakfast-habit.intro.morning-two', type: 'intro', title: '지우와 서준의 오전 견주기',
        method: '두 친구의 아침', tool: 'story', minutes: 6,
        levels: { easy: '시연 첫 단계에서 장면 둘(지우 하나·서준 하나)이 나뉘는 것을 본다.', base: '장면 넷이 두 친구 칸에 나뉘는 것을 보고 다른 점을 말한다.', challenge: '아침을 못 먹은 서준이 할 수 있는 방법(우유 한 컵 등)을 짝과 하나 고른다.' },
        intro: {
          teacher: '"가상 인물 지우는 아침을 먹고 왔고, 서준이는 늦잠을 자서 못 먹고 왔어요. 두 친구의 오전은 어떻게 달랐을까요?" 시연 단추로 장면 카드가 두 친구 칸에 나뉘는 모습을 보이고 장면마다 소리 내어 읽는다. "서준이는 게을러요"라는 말이 나오면 "아침을 못 먹는 까닭은 여러 가지예요. 서준이가 내일 할 수 있는 작은 방법은 무엇일까요?"라고 되물어 탓하지 않고 방법을 찾게 한다. 아침을 거르면 배고프거나 기운이 없을 수 있다는 것을 짚되, 사람마다 다를 수 있다고 말한다.',
          student: '두 친구의 오전 장면을 견주어 보고, 서준이가 내일 해 볼 방법을 짝과 하나 골라 보아요.',
          demo: { tool: 'story', options: { mode: 'sort', slots: [{ id: 'ate', label: '아침을 먹은 지우' }, { id: 'skip', label: '못 먹은 서준' }], cards: [{ id: 'full', text: '배가 든든해요', motif: 'sun' }, { id: 'growl', text: '배에서 꼬르륵', motif: 'cloud' }, { id: 'power', text: '체육 때 힘이 나요', motif: 'star' }, { id: 'tired', text: '기운이 없어요', motif: 'moon' }] },
            sequence: [{ sort: { ate: ['full'], skip: ['growl'] } }, { sort: { ate: ['full', 'power'], skip: ['growl', 'tired'] } }] },
          art: { draw: 'two paper children in a classroom morning, one smiling with a lunch box and a paper sun above, the other holding a tummy with a small paper cloud above, a paper milk carton between them', banner: '두 친구의 아침', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
        notes: '"아침 먹고 왔어요?"라고 묻거나 손을 들게 하지 않는다. 가정 사정으로 아침을 먹기 어려운 학생이 있을 수 있으니 서준이를 탓하는 말이 나오면 바로 방법 찾기로 돌린다.',
      }),
      C({
        id: 'food.e34.breakfast-habit.intro.wake-clock', type: 'intro', title: '일어나서 집 나설 때까지 시간',
        method: '아침 시간 계산', tool: 'clock', minutes: 6,
        levels: { easy: '디지털 시각과 함께 7시 → 7시 30분 → 8시, 30분 단위로 바늘이 움직이는 것을 본다.', base: '7시 → 7시 20분 → 8시, 10분 단위로 바늘이 움직이는 것을 보고 아침 먹을 시간을 말한다.', challenge: '10분 일찍(6시 50분) 일어나면 아침 먹을 시간이 얼마나 늘어나는지 짝과 계산해 말한다.' },
        intro: {
          teacher: '"가상 인물 서준이는 7시에 일어나 8시에 집을 나서요. 씻고 옷 입는 데 20분이 걸리면 아침 먹을 시간은 몇 분일까요?" 시연 단추로 바늘이 7시 → 7시 20분 → 8시로 움직이는 것을 보이며 긴바늘이 지나간 칸을 함께 센다(기다릴 반응: "40분이요"). "아침은 1분이면 먹어요"라는 말이 나오면 "꼭꼭 씹어 먹으려면 시간이 얼마나 있으면 좋을까요?"라고 되묻는다. 시각은 연습용 가상 일과라고 밝힌다.',
          student: '서준이가 일어나서 집을 나설 때까지 시계 바늘을 보고, 아침 먹을 시간이 몇 분인지 말해 보아요.',
          demo: { tool: 'clock', options: { showDigital: true, minuteStep: 10 }, sequence: [{ h: 7, m: 0 }, { h: 7, m: 20 }, { h: 8, m: 0 }, { h: 6, m: 50 }] },
          art: { draw: 'a large paper alarm clock beside a paper bed and a paper breakfast table with a bowl of rice and a cup of milk, a paper school bag by the door', banner: '아침 먹을 시간은?', extra: [{ motif: 'sun', x: 300, y: 96, color: 'buttercup' }] },
        },
      }),
      C({
        id: 'food.e34.breakfast-habit.activity.quick-menu', type: 'activity', title: '바쁜 아침 차림 식판',
        method: '바쁜 아침 차림', tool: 'kitchen', minutes: 13,
        levels: { easy: '식판 칸 2개(곡류·우유)에 아침 카드를 담고, 놓으면 바로 맞는지 알려 준다.', base: '식판 칸 3개(곡류·고기·달걀·우유)에 담고, 더할 것 고르기·바꿔 차리기 3줄을 한다.', challenge: '과일 칸까지 4칸에 담고, 이미 있는 칸의 카드가 섞인 판에서 식품군 셋 이상이 되게 바꾼다.' },
        activity: {
          title: '바쁜 아침 차림 식판', tool: 'kitchen',
          teacher: '"바쁜 아침에도 바로 먹을 수 있는 것이 있어요. 식빵, 달걀, 우유는 어느 칸일까요?" 카드를 담을 때마다 칸 이름을 말하게 한다. 빵 한 쪽 아침에 떡을 더하려는 학생에게 "떡은 어느 칸이에요? 빵과 같은 칸이면 칸 수가 늘어날까요?"라고 묻는다. "아침은 무조건 밥이어야 해요"라는 말에는 "빵과 우유, 바나나도 칸을 채워요. 집마다 아침은 달라도 돼요"라고 말해 준다.',
          task: '바쁜 아침에 차릴 수 있는 음식 카드를 식판 칸에 담고, 칸이 셋 이상 되게 바꿔 보아요.', levels: CARD_LV,
          items: [
            { prompt: '바쁜 아침 카드를 식판 칸에 담아요.', toolOptions: { slots: [FG.곡류, FG.고기, FG.우유], cards: ['우유', '식빵', '달걀'] }, target: { sort: { 곡류: ['식빵'], 고기: ['달걀'], 우유: ['우유'] } }, difficulty: 0.15,
              levels: {
                easy: { prompt: '바쁜 아침 카드를 식판 칸에 담아요(2칸).', toolOptions: { slots: [FG.곡류, FG.우유], cards: ['우유', '식빵'] }, target: { sort: { 곡류: ['식빵'], 우유: ['우유'] } } },
                challenge: { prompt: '바쁜 아침 카드를 식판 칸에 담아요(4칸).', toolOptions: { slots: [FG.곡류, FG.고기, FG.과일, FG.우유], cards: ['바나나', '우유', '식빵', '달걀'] }, target: { sort: { 곡류: ['식빵'], 고기: ['달걀'], 과일: ['바나나'], 우유: ['우유'] } } },
              } },
            PICK('빵 한 쪽 아침에 더해 다른 칸을 채울 것을 모두 골라요.', '더할 것', [
              { id: 'milk', text: '우유', ok: true }, { id: 'egg', text: '삶은 달걀', ok: true }, { id: 'ricecake', text: '떡', why: '떡은 빵과 같은 곡류예요. 칸 수가 늘지 않아요.' }, { id: 'banana', text: '바나나', ok: true },
            ], ['milk', 'ricecake', 'banana'], [{ id: 'bread2', text: '식빵 한 쪽 더', why: '같은 곡류예요. 다른 칸을 채워요.' }], 0.2),
            MATCH('아침 차림에 칸 하나를 더 채울 것을 이어요.', { autoMotif: false, title: '칸 하나 더 채우기' }, [['밥과 김에 달걀 칸', '달걀프라이'], ['시리얼에 우유 칸', '우유'], ['식빵에 과일 칸', '사과'], ['죽에 채소 칸', '시금치나물']], '누룽지', 0.25,
              { conclude: '바쁜 아침에도 바로 먹을 수 있는 것을 더하면 식품군 셋 이상을 채울 수 있어요.' }),
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '식빵과 우유 아침에 더해 칸을 하나 늘리는 것은?', options: ['떡', '삶은 달걀', '식빵 한 쪽'], answer: '삶은 달걀' }] },
        notes: '집마다 아침 차림이 다르다. "우리 집은 아침을 안 먹어요"라는 말이 나와도 고치려 들지 않고, 가상의 식판 카드로만 활동한다.',
      }),
      C({
        id: 'food.e34.breakfast-habit.activity.morning-order', type: 'activity', title: '아침 차례 줄 세우기',
        method: '아침 차례 정하기', tool: 'timeline', minutes: 14,
        levels: { easy: '카드 4장을 차례대로 놓고, 놓으면 바로 맞는지 알려 준다.', base: '카드 5장(일어나기 → 씻기 → 아침 먹기 → 양치 → 가방)을 차례대로 놓는다.', challenge: '틀린 카드 한 장이 섞인 판에서 늦잠 잔 날·전날 밤 차례를 다시 짜고 고른 이유를 짝에게 말한다.' },
        activity: {
          title: '아침 차례 줄 세우기', tool: 'timeline',
          teacher: '"아침에 할 일을 먼저부터 나중까지 놓아 볼까요?" 카드를 놓은 뒤 "왜 이 일을 이 자리에 놓았나요?"라고 묻고 "○○을 해야 ○○을 할 수 있어서"로 말하게 한다. 양치를 아침 먹기보다 먼저 놓은 학생에게 "먹고 나면 이에 무엇이 남을까요?"라고 되묻는다. 늦잠 잔 날 문항에서 "아침은 빼요"라는 학생에게는 "시간이 짧을 때 바로 먹을 수 있는 것은 무엇이었죠?"라고 묻는다.',
          task: '아침에 할 일 카드를 먼저부터 나중까지 차례대로 놓아요.', levels: CARD_LV,
          items: [
            ORD('평소 아침에 할 일을 차례대로 놓아요.', AXIS, [{ id: 'wake', text: '일어나기' }, { id: 'wash', text: '씻기' }, { id: 'eat', text: '아침 먹기' }, { id: 'brush', text: '양치하기' }, { id: 'bag', text: '가방 메기' }], 1, { id: 'tv', text: '만화 계속 보기', why: '아침 차례에 넣지 않아도 되는 일이에요.' }, 0.15),
            ORD('늦잠 잔 날 아침 차례를 놓아요.', AXIS, [{ id: 'wake2', text: '서둘러 일어나기' }, { id: 'face', text: '세수하기' }, { id: 'quick', text: '우유·바나나 먹기' }, { id: 'brush2', text: '양치하기' }, { id: 'go', text: '집 나서기' }], 3, { id: 'game', text: '게임 한 판 하기', why: '시간이 짧은 날에는 꼭 할 일부터 해요.' }, 0.2),
            ORD('전날 밤부터 아침까지 차례를 놓아요.', AXIS, [{ id: 'pack', text: '가방 미리 챙기기' }, { id: 'menu', text: '아침거리 정하기' }, { id: 'sleep', text: '일찍 잠자기' }, { id: 'wake3', text: '일어나기' }, { id: 'eat3', text: '아침 먹기' }], 1, { id: 'late', text: '밤늦게 영상 보기', why: '늦게 자면 아침이 바빠져요.' }, 0.25,
              { conclude: '전날 밤에 준비해 두면 아침 먹을 시간이 생겨요.' }),
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '아침 차례를 1~5로 써요.', columns: ['할 일', '차례'], cells: [['아침 먹기', ''], ['일어나기', ''], ['가방 메기', ''], ['씻기', ''], ['양치하기', '']], answer: '3, 1, 5, 2, 4' }] },
      }),
      C({
        id: 'food.e34.breakfast-habit.activity.chew-timer', type: 'activity', title: '빠르게·천천히 씹기 견주기',
        method: '천천히 씹기 실험', tool: 'timer', minutes: 13,
        levels: { easy: '타이머를 \'빠르게 10초·천천히 30초\' 한 번으로 맞추고 씹는 흉내를 해 본다.', base: '같은 구간을 두 번 되풀이하게 맞추고, 천천히 먹는 차례 카드를 놓는다.', challenge: '느낌을 점검한 뒤 천천히 먹으면 좋은 점 하나를 말했는지까지 점검한다.' },
        activity: {
          title: '빠르게·천천히 씹기 견주기', tool: 'timer',
          teacher: '"오늘은 음식을 먹지 않고 씹는 흉내로 견주어 볼 거예요. 빠르게 10초, 천천히 30초." 구간 시간은 우리 반 연습용 약속이라고 밝히고 타이머를 맞추게 한 뒤 함께 해 본다. 빠르게 할 때와 천천히 할 때 턱과 입의 느낌을 짝과 말하게 한다. "빨리 먹어야 놀 시간이 많아요"라는 말에는 "천천히 먹으면 맛도 더 느끼고 배부른 것도 알아차리기 쉬워요. 놀 시간은 어떻게 지킬 수 있을까요?"라고 되묻는다.',
          task: '빠르게 씹기와 천천히 씹기 구간을 타이머에 맞추고 해 본 뒤 느낌을 점검해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '타이머를 빠르게 10초, 천천히 30초를 두 번 하도록 맞춰요.', toolOptions: { title: '씹기 견주기(우리 반 연습)', labels: ['빠르게', '천천히'], plan: { work: 5, rest: 5, rounds: 1 } }, target: { plan: { work: 10, rest: 30, rounds: 2 } }, difficulty: 0.2,
              levels: { easy: { prompt: '타이머를 빠르게 10초, 천천히 30초 한 번으로 맞춰요.', target: { plan: { work: 10, rest: 30, rounds: 1 } } } } },
            { prompt: '천천히 먹는 차례 카드를 놓아요.', toolOptions: { title: '천천히 먹는 차례', cards: ['꼭꼭 씹기', '숟가락 내려놓기', '삼키기', '한 입 넣기'] }, target: { order: ['한 입 넣기', '숟가락 내려놓기', '꼭꼭 씹기', '삼키기'] }, difficulty: 0.2 },
            { prompt: '씹기를 해 보고 느낌을 스스로 점검해요.', toolOptions: { title: '씹기 느낌 점검' }, target: { selfCheck: ['빠르게 씹어 보았어요', '천천히 씹어 보았어요', '두 느낌을 짝과 견주었어요'] }, difficulty: 0.1,
              levels: { easy: { prompt: '빠르게·천천히 씹어 보고 점검해요(2칸).', target: { selfCheck: ['빠르게 씹어 보았어요', '천천히 씹어 보았어요'] } }, challenge: { prompt: '느낌을 점검하고 좋은 점도 말해요.', target: { selfCheck: ['빠르게 씹어 보았어요', '천천히 씹어 보았어요', '두 느낌을 짝과 견주었어요', '좋은 점 하나를 말했어요'] } } },
              conclude: '천천히 꼭꼭 씹으면 맛을 더 느끼고 배부른 것도 알아차리기 쉬워요.' },
          ],
        },
        worksheet: { items: [{ type: 'choice', prompt: '천천히 먹을 때 한 입을 넣은 다음 할 일은?', options: ['숟가락 내려놓기', '바로 한 입 더', '물 한 번에 다 마시기'], answer: '숟가락 내려놓기' }] },
        notes: '교실에서 실제 음식을 먹지 않는다(알레르기·준비물 부담). 씹는 흉내만 하고, 천천히 먹지 못하는 친구를 놀리지 않는다.',
      }),
      C({
        id: 'food.e34.breakfast-habit.activity.breakfast-pic', type: 'activity', title: '아침 메뉴 그림그래프',
        method: '우리 반 아침밥 그림그래프', tool: 'chart', minutes: 14,
        levels: { easy: '메뉴 3개, 첫 메뉴 그림은 미리 놓여 있다.', base: '메뉴 4개의 그림을 모두 그려 완성하고 그래프를 읽는다.', challenge: '마지막 문항에서 식품군이 모자란 메뉴에 더할 것을 고른다.' },
        activity: {
          title: '아침 메뉴 그림그래프(가상 조사)', tool: 'chart',
          teacher: '"가상의 우리 반 아침 메뉴 조사예요. 큰 그림 하나는 5명이에요. 8명은 어떻게 나타낼까요?" 그림을 놓게 하고, 다 그리면 가장 많은 메뉴를 찾는다. "죽은 아플 때만 먹어요"처럼 메뉴를 낮추어 말하는 학생에게 "집마다 아침 메뉴는 달라요. 죽에 무엇을 더하면 칸이 늘까요?"라고 되묻는다. 우리 반 실제 조사를 하지 않고 가상 자료로만 한다.',
          task: '가상 조사 표를 보고 그림그래프를 완성한 뒤, 그래프를 읽고 물음에 답해요.', levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '표를 보고 아침 메뉴 그림그래프를 완성해요.', toolOptions: Object.assign({}, PIC, { mode: 'build', data: MENU }), target: { build: true }, difficulty: 0.2,
              levels: { easy: { prompt: '표를 보고 메뉴 3개의 그림그래프를 완성해요.', toolOptions: { data: MENU.slice(0, 3), given: [0] }, target: { build: true } } } },
            { prompt: '그래프에서 가장 많은 친구가 먹은 메뉴는?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: MENU, question: '가장 많은 메뉴는?', choices: ['밥과 국', '빵과 우유', '시리얼과 우유', '죽'] }), target: { pick: 0 }, difficulty: 0.15 },
            { prompt: '우유가 든 메뉴를 먹은 친구는 모두 몇 명?', toolOptions: Object.assign({}, PIC, { mode: 'read', data: MENU, question: '빵과 우유, 시리얼과 우유를 더하면?', choices: ['6명', '11명', '14명'] }), target: { pick: 1 }, difficulty: 0.25,
              levels: { challenge: { prompt: '시리얼과 우유 아침에 과일 칸을 채울 것을 골라요.', toolOptions: { question: '과일 칸을 채울 것은?', choices: ['바나나', '떡', '식빵'] }, target: { pick: 0 } } },
              conclude: '아침 메뉴는 집마다 달라요. 칸 하나를 더 채우는 방법을 찾아요.' },
          ],
        },
        worksheet: { items: [{ type: 'table', prompt: '그래프를 보고 빈칸을 채워요(가상 자료).', columns: ['아침 메뉴', '친구(명)'], cells: [['밥과 국', ''], ['빵과 우유', '6'], ['죽', '']], answer: '8, 3' }] },
        notes: '조사는 가상의 것이다. 우리 반 학생의 아침 메뉴를 조사하거나 아침을 먹지 않은 친구 수를 세지 않는다.',
      }),
      C({
        id: 'food.e34.breakfast-habit.wrap.promise', type: 'wrap', title: '아침 약속 문장 카드',
        method: '아침 약속 쓰기', tool: 'wordcards', minutes: 6,
        levels: { easy: '약속 문장 하나(아침에 먹어 볼 것)에 카드를 넣고 짝에게 읽는다.', base: '문장 둘(먹어 볼 것·바쁜 날 챙길 것)에 카드를 넣고 읽는다.', challenge: '출구 2번에서 약속을 못 지킨 날 대신할 방법을 한 줄 더 쓴다.' },
        wrap: {
          teacher: '"나는 아침에 ___을 먹어 볼래요. 바쁜 날엔 ___을 챙겨요." 먹을 수 있는 카드라면 무엇을 넣어도 되고, 지키지 못해도 괜찮다고 먼저 말한다. 바쁜 날 칸에 \'밥과 국\'을 넣은 학생에게 "바쁜 날에도 차릴 수 있을까요? 바로 먹을 수 있는 것은 무엇이었죠?"라고 묻는다. 약속을 걷거나 지켰는지 다음 날 확인하지 않는다.',
          exitTicket: [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'b1', label: '아침에 ___을 먹어 볼래요.' }, { id: 'b2', label: '바쁜 날엔 ___을 챙겨요.' }], cards: ['밥과 국', '우유 한 컵', '텔레비전', '바나나 하나', '휴대폰'] }, prompt: '아침 약속 문장 빈칸에 카드를 넣고 짝에게 읽어요.', target: { fill: { b1: ['밥과 국', '우유 한 컵', '바나나 하나'], b2: ['우유 한 컵', '바나나 하나'] } }, difficulty: 0.15,
              levels: { easy: { prompt: '아침 약속 문장 빈칸에 카드를 넣어요(1칸).', toolOptions: { slots: [{ id: 'b1', label: '아침에 ___을 먹어 볼래요.' }], cards: ['밥과 국', '텔레비전', '우유 한 컵'] }, target: { fill: { b1: ['밥과 국', '우유 한 컵'] } } } } },
            { type: 'short', prompt: '약속을 못 지킨 날 대신할 방법을 한 줄로 써요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '나의 아침 약속',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 써요.', text: '시간이 없는 아침에는 우유나 ___처럼 바로 먹을 수 있는 것을 챙겨요.', answer: '바나나(과일)' },
            { type: 'short', prompt: '내가 해 볼 아침 약속을 한 줄로 써요(내지 않아도 돼요).' },
          ],
          easy: { note: '바로 먹을 수 있는 것: 우유·바나나·달걀.', items: [{ type: 'choice', prompt: '바쁜 아침에 바로 먹을 수 있는 것은?', options: ['바나나', '텔레비전'], answer: '바나나' }] },
        },
        notes: '가정 사정으로 아침을 먹기 어려운 학생이 있다. 약속은 강요하지 않고, 지켰는지 묻거나 발표시키지 않는다.',
      }),
      C({
        id: 'food.e34.breakfast-habit.wrap.week-check', type: 'wrap', title: '서준의 일주일 아침 기록 읽기',
        method: '일주일 아침 점검', tool: 'kitchen', minutes: 6,
        levels: { easy: '기록 사흘(월·화·수) 가운데 아침을 먹은 날에 표시한다.', base: '기록 이레(월~일) 가운데 아침을 먹은 날에 표시한다.', challenge: '출구 2번에서 가족과 함께 할 수 있는 아침 준비를 고르고 까닭을 짝에게 말한다(교사 진행).' },
        wrap: {
          teacher: '"가상 인물 서준이의 일주일 아침 기록이에요. 아침을 먹은 날에 표시해 볼까요?" 줄마다 소리 내어 읽게 한다. \'화: 우유 한 컵\'에 표시하지 않은 학생에게 "우유 한 컵도 아침이에요. 어느 칸이었죠?"라고 묻는다. 먹지 않은 날이 있는 서준이를 탓하지 않고 "서준이가 먹은 날은 무엇이 달랐을까요?"를 짝과 짐작하게 한다. 우리 반 학생의 아침 기록은 받지 않는다.',
          exitTicket: [
            EX('kitchen', CHK('서준이의 기록에서 아침을 먹은 날에 표시해요.', '서준이의 아침 기록(가상)', [
              { id: 'mon', text: '월: 밥과 국', ok: true }, { id: 'tue', text: '화: 우유 한 컵', ok: true }, { id: 'wed', text: '수: 먹지 않음' }, { id: 'thu', text: '목: 빵과 달걀', ok: true },
              { id: 'fri', text: '금: 먹지 않음' }, { id: 'sat', text: '토: 과일과 우유', ok: true }, { id: 'sun', text: '일: 밥과 국', ok: true },
            ], [0, 1, 2], 0.15)),
            { type: 'choice', prompt: '가족과 함께 해 볼 수 있는 아침 준비는?', options: ['전날 밤 아침거리 정하기', '아침마다 늦게 일어나기', '집 나서기 직전 메뉴 고민'], answer: 0, difficulty: 0.15, explain: '전날 밤에 정해 두면 바쁜 아침에도 바로 먹을 수 있어요.' },
            MOOD,
          ],
        },
        worksheet: {
          title: '아침 기록 읽기',
          items: [
            { type: 'table', prompt: '서준이의 기록(가상)을 보고 먹은 날은 ○, 안 먹은 날은 ×를 써요.', columns: ['요일', '아침', '○ / ×'], cells: [['월', '밥과 국', ''], ['수', '먹지 않음', ''], ['토', '과일과 우유', '']], answer: '○, ×, ○' },
            { type: 'short', prompt: '서준이가 아침을 거른 날 할 수 있는 방법을 한 줄로 써요.' },
          ],
          easy: { note: '우유 한 컵도 아침이에요.', items: [{ type: 'choice', prompt: '"화: 우유 한 컵"은 먹은 날일까요?', options: ['먹은 날', '안 먹은 날'], answer: '먹은 날' }] },
        },
        notes: FICTION,
      }),
    );
  }

  PaperLessons.registerModules(M);
})();
